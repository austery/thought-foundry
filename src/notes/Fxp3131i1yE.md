---
area: tech-insights
category: technology
companies_orgs:
- Apple
- Google
- Statsig
- Linear
- Uber
- ARM
- HP
- Intel
- Cray
- Tesla
- Google Brain
- SciFive
- Modular
- Anthropic
- Notion
- Brex
- Microsoft
- Nvidia
- AMD
- AWS
- Meta
date: '2025-11-05'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Pragmatic Engineer
- Beyond Vibe Coding
people:
- Richard Stallman
products_models:
- Swift
- Mojo
- LLVM
- TensorFlow
- GCC
- Java
- Rust
- C++
- C
- Linux
- autoconf
- Objective-C
- Clang
- PowerPC
- Mac OS
- OpenGL
- iPhone
- iPhone 5S
- Xcode
- Haskell
- TypeScript
- Dart
- Go
- JavaScript
- Python
- CUDA
- TPU
- OpenCL
- Cafe
- MLIR
- RISC-V
- XLA
- Metal
- MLX
- Rocm
- Trinium
- PyTorch
- ONNX Runtime
- Inception v1
- Ampere
- Hopper
- Blackwell
- Zig
- Xcode Playgrounds
- SwiftUI
project:
- ai-impact-analysis
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=Fxp3131i1yE
speaker: The Pragmatic Engineer
status: evergreen
summary: Chris Lattner，这位过去二十年中最具影响力的编程语言和编译器技术巨擘，分享了他创作 LLVM、Swift 和 Mojo 的心路历程。本访谈深入探讨了
  LLVM 如何在苹果公司内部从一个实验项目成长为核心技术，Swift 在保密状态下诞生并最终重塑 iOS 开发的幕后故事，以及新语言 Mojo 为何旨在解决 AI
  工程中的性能与可扩展性难题。Lattner 还分享了他对语言设计、技术普及、AI 编程工具以及人才培养的深刻见解。
tags:
- design
- engineering
- open-source-community
- software
title: Chris Lattner 访谈：从 LLVM、Swift 到 Mojo 的创世之路与高性能 AI 工程
---

### 访谈介绍

**主持人：** Chris Lattner 创造了过去 20 年来一些最具影响力的编程语言和编译器技术。他是 **LLVM**（Low Level Virtual Machine: 一个模块化的编译器基础设施项目）的创造者，该技术被 Swift、Rust 和 C++ 等语言广泛使用。他还创造了 Swift 编程语言，曾参与 TensorFlow 的工作，现在则致力于 Mojo 编程语言的开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chris Lattner created some of the most influential programming language and compiler technologies of the past 20 years. He's the creator of LLVM, used by languages like Swift, Rust, and C++. He created the Swift programming language, worked on TensorFlow, and now works on the Mojo programming language.</p>
</details>

在这次对话中，我们涵盖了 LLVM 的起源故事，以及 Chris 如何成功说服苹果公司将其所有主要的开发者工具都迁移到支持这项新技术上；Chris 如何在苹果公司创造了 Swift，包括他如何秘密地开发这门新语言长达一年半之久；为什么 Chris 期望 Mojo 能帮助开发者更轻松、更快速地构建高效的 AI 程序；Chris 如何使用 AI 工具，以及作为一名经验丰富的程序员，他看到了哪些生产力提升；以及更多内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this conversation, we cover the original story of LLVM and how Chris managed to convince Apple to move all major Apple dev tools over to support this new technology, how Chris created Swift at Apple, including how he worked on this new language in secrecy for a year and a half, and why Mojo is a language Chris expects to help build efficient AI programs easier and faster, how Chris uses AI tools, and what productivity improvements he sees as a very experienced programmer, and many more.</p>
</details>

如果你想了解像 Chris 这样真正杰出的软件工程师是如何思考和完成工作的，以及他如何设计一门可能成为 AI 工程中非常重要部分的语言，那么这一集就是为你准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you'd like to understand how a truly standout software engineer like Chris thinks and gets things done, and how he's designing a language that could be a very important part of AI engineering, then this episode is for you.</p>
</details>

### 2000 年代初期的编译器江湖

**主持人：** 那么，Chris，欢迎来到我们的播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Chris, welcome to the podcast.</p>
</details>

**Chris Lattner:** 非常感谢你的邀请。能亲自见到你真是太好了，因为我觉得你所做的工作对我个人在 Adooper 的工作产生了影响。我们迁移到了 Swift，当然，我们使用的很多软件都运行在你构建的东西之上。所以，我们能把时间倒回到 2000 年代初期吗？对于我们中一些没有经历过那个时代的人，你能描述一下当时在编译器、语言方面的行业状况是怎样的吗？当时的主流是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, thank you for having me. It is so nice to meet you in person because I feel like the work that you did has had an impact personally on me at Adooper. We migrated to Swift and of course a lot of the software we use runs on things that you've built. So can we rewind time back all the way to the early 2000s and for some of us who have not really been around there can you describe like what was the industry like in terms of compilers, languages and what was the status quo back then?</p>
</details>

**Chris Lattner:** 是的。我参与了 Linux 的早期发展，大概是从 90 年代中期开始接触 Linux，虽然不是最早期的阶段。那时 Java 正在兴起，随着它的发展，行业内很多事情都在发生变化。**GCC**（GNU Compiler Collection: 一个由 GNU 开发的开源编译器套件）是当时标准化了大量软件的编译器，很多人用它来构建基于 Linux 的软件，我也是这样认识它的。GCC 是个很棒的东西。在 GCC 出现之前，很多人不知道，每个硬件供应商都在制造自己的编译器，这导致即使是 C 语言代码也一团糟，因为这些编译器互不兼容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So I mean I was involved in the kind of early days of Linux and so I started maybe not the really early days but I started working with Linux in the mid '90s and this is when Java was coming on the scene and a lot of things were changing in the industry as that played out. GCC was the compiler that standardized a lot of software and a lot of people were using it to build Linux based software and this is how I got to know it. GCC is a great thing. Before GCC, a lot of people don't know this, every hardware vendor was making their own compiler and it was a gigantic mess for even just C code because none of these compilers were compatible with each other.</p>
</details>

**主持人：** 他们这么做的原因，如果我理解得对，是不是因为 C 代码需要被翻译成特定硬件的汇编语言，然后硬件厂商负责进行映射并找出一些自定义指令之类的东西？是这个原因吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the reason they did that, just so I understand, is like you have C code, it needed to translate to assembly for a specific hardware and then the hardware vendor, you know, they did the mapping and figuring out like what custom instructions or something like that. Was that a reason?</p>
</details>

**Chris Lattner:** 是的。基本上，特别是在 80 年代末到 90 年代初，指令集的多样性要大得多，芯片制造商们在不断创新。你有惠普在制造东西，英特尔当时也在制造很多不同的系统，各种各样的事情都在发生。RISC 计算机也在那个时候被发明出来。所以，当时的挑战是每个人都必须构建自己的编译器。因为每个人都必须构建自己的编译器，他们都想要支持 C 语言，而 C++ 也正在兴起。C 语言是一个标准，所以有一个规范说明了代码应该是什么样子。但我们知道，很多标准和规范从来都不是完整的。结果就是，每个编译器都成了一团糟，因为它们有不同的 bug，不同的缺陷，缺少某些功能。所以当时期的软件是用像 autoconf 这样的系统构建的，那是一个非常奇怪的宏处理工具，试图绕过一些限制，简直是一场噩梦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So basically back in particularly like the late 80s and then the early 90s there was a lot more diversity in terms of like instruction sets and chip makers were innovating and you had HP building things and you had Intel was making a lot different systems back then and there's all kinds of different stuff going on and so you had risk computers that were being invented and so the challenge at the time was that everybody had to build their own compiler and so because everybody had to build their own compiler they all wanted C and some C++ was emerging and C was a standard and so there was a spec that said this is what the code is supposed to look like but as we know for many standards and many specifications they're never complete and so what ended up happening is each of those compilers was a gigantic mess because they had different bugs they had different misfeatures they lacked certain capabilities and so software of the day was built with systems like autoconf which was this really weird macro processing thingy that tried to work around some of the limitations and it was a gigantic nightmare.</p>
</details>

GCC 大约在 90 年代真正登场，并清理了那个烂摊子。它成为了人们可以接入的标准化工具，很多芯片制造商都接纳了它，而且它是自由软件，这促进了 Linux 的崛起。Linux 采用了它，这确实推动了世界的发展。GCC 是个好东西，它确实帮助世界实现了标准化，我认为很多自由软件和开源软件都应该感谢 GCC。但同时，它也是一个非常老旧的东西。我当时就取笑它，它已经有 20 多年历史了，它的架构在很多方面都非常老派。它也不是为模块化设计而构建的。它被设计用来做一件事：输入 C 代码，然后为给定的芯片输出汇编代码。因此，有很多事情你无法做到，比如 **JIT**（Just-In-Time Compilation: 即时编译，一种在程序运行时而非运行前进行编译的技术）编译，当时甚至无法在同一个项目的文件之间进行优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So GCC came out on the scene kind of in the '90s really and cleaned up that mess. It became the standardized thing that people could plug into and a lot of chipmakers embraced it and it was free software and so that led to the rise of Linux. Linux adopted it and that really kind of brought the world forward. Now GCC was a good thing. It really did help standardize the world and I think a lot of free software and open source pays a debt of gratitude towards GCC but also it was a really old thing and so I made fun of it at the time. It was over 20 years old and its architecture was, you know, very very old school in many different ways. It was also not built to be a modular design. It had, you know, was designed to do one thing, take C code in and then put out assembly code for a given chip. And so there's a lot of things you couldn't do like JIT compilation and you couldn't at the time even optimize across files within one.</p>
</details>

### LLVM 的诞生：一个大学研究项目

**主持人：** JIT 就是即时编译，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And JIT is just in time compilation, right?</p>
</details>

**Chris Lattner:** 正是即时编译。所以，当时有很多人们想做但用 GCC 做不到的事情。大约在 2000 年，我还在大学里学习编译器，我就想，哦，好吧，在这个领域构建一些新东西会不会很有趣？于是我开始着手开发 LLVM。LLVM 最初是一个代码生成系统，所以你可以针对多种不同的架构。但对我来说，这其实是一个学习过程。我想说的是，编译器很酷，别让任何人告诉你不是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just in time compilation. Exactly. And so there's a lot of things that people wanted to do that you couldn't do with GCC. And so in around 2000 that's when I was in university and I was studying compilers and I said oh okay well wouldn't it be interesting to build something new in the space and so I started working on LLVM. LLVM is a it started out as a code generation system so you could target multiple different architectures but really for me it was a learning process it was about saying okay compilers are cool don't let anybody tell you otherwise compilers are cool.</p>
</details>

**主持人：** 即使在今天也是如此，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even today right.</p>
</details>

**Chris Lattner:** 即使在今天也是。但我当时对它一无所知，所以我想通过构建来学习。在我的大学项目期间，我把它越做越大。后来我们把它开源了，有了一个小小的社区。再后来我去了苹果公司，这极大地促进和资助了它的发展。最初的出发点是，GCC 和开源技术确实很好，但有很多事情我们做不了。于是，我就这样掉进了这个兔子洞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even today. And so, but I didn't really understand anything about it and so I wanted to learn by building and so across my university project I built this thing up more and more and more. We then open sourced it. It got a little bit of a community. Later I went to Apple which really helped foster and fund a lot of the development and that early starting point was coming from you know GCC and open source technologies are really good but there's a lot of things we can't do. And so that's where I kind of fell down this rabbit hole.</p>
</details>

**主持人：** 当你开始并开源它时，你开源了什么？它能做什么？以及，大家对这个早期版本的 LLVM 有什么反应？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like when you started and and open source what did you open source? What could it do? Yeah. And then you know what was the reaction to to this early version of LLVM?</p>
</details>

**Chris Lattner:** 哦，当年的 LLVM，这非常有趣，因为很多人回顾成功的系统时，都以为一切都是显而易见的，而实际上，每一步都充满挑战，你必须靠自己去争取任何成功。很少有情况是靠运气得来的。所以，当我刚开始做 LLVM 时，它只是一个大学的研究项目。大学里有很多研究项目最终都无疾而终。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, so LLVM back in the day and this is super funny because many people look back on successful systems and they assume that everything was obvious when when actually every step along the way is challenging and you have to earn any success you get. Very very rarely do you like luck into it. And so when I first started working at LLVM again it was a research project at a university. There's a lot of research projects at a university that don't go anywhere.</p>
</details>

**主持人：** 我敢说，大部分可能都无疾而终。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'd argue most of them probably won't go anywhere.</p>
</details>

**Chris Lattner:** 没错。所以默认的假设是 LLVM 也不会有什么结果。对于任何项目来说，这都是一个安全的假设。我们在内部使用它。我的导师 Vicram Adve 鼓励我们继续构建它，然后我们在几个班级里教授它。所以我们内部有几个人在使用它，并且有了一些用例。但那时，它真的只是做优化和代码生成。它接入 GCC，使用其解析器来解析 C 代码。所以它只关乎代码生成，对学习编译器的技术人员有用，但对普通应用程序开发者来说没什么用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. And so when and the default assumption is that LLVM also would not go anywhere. That's a safe assumption for any project. And so we used it internally. And so my adviser Vicram Adve encouraged us to continue building it and then we taught it to a couple of classes. And so we had a few people using it internally and we got some like use case with it. But at that point it was really just optimization and code generation. And so it plugged into GCC used the parser and the to actually parse C code for example and so it was just about code generation and it was useful for compiler people trying to learn things but it wasn't very useful for general application developers really.</p>
</details>

当我们开源它之后，大概有两三个人对它感兴趣，而且大多是其他编译器爱好者，他们很可爱。但当时没有大的社区，也没有什么大的理由让人们来贡献。我所做的就是，好吧，就把外界当作研究小组的其他成员一样对待，进行开放式开发，鼓励人们，如果他们过来想帮忙做点什么，那就太棒了。如果他们有问题，我会回答，并且尊重每一个人。随着时间的推移，社区慢慢地成长起来。我们吸引了对不同事物感兴趣的个人。有些人对深奥的编程语言感兴趣，因此对编译器技术感兴趣。其他人则对性能感兴趣，不同的人有不同的兴趣。所以，它非常非常缓慢地成长起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we open sourced it then we got I don't know two or three people that were interested in it and it was mostly other compiler nerds that you know are delightful but there was no major community there was no major reason for people to contribute and what I did was I said okay well actually just treat the world like the rest of the research group and just have open development, encourage people if they they come by and they want to help and do something awesome. If they have questions, I'll answer them and just treat people with respect. And what happened over time is slowly the community grew. We got in individual people that were interested in different things. Some people were interested in esoteric programming languages and and they were interested in compiler technology for that reason. other people were interested in performance and different people had different interests and so very very very slowly it kind of grew.</p>
</details>

### LLVM 与 GCC 的分道扬镳

**主持人：** GCC 和 LLVM 之间最大的区别是什么？当然，模块化是一方面，但你也提到了你想要实现而 GCC 做不到或很难做的功能。那些功能是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What was the big difference between GCC and LLVM right like of course modularity was one thing but but also you mentioned capabilities that you wanted to do that GCC was just either couldn't do or was really difficult to do what were those capabilities?</p>
</details>

**Chris Lattner:** 是的，最初是即时编译，也就是运行时代码生成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah so so originally it was just in time compilation so runtime code generation.</p>
</details>

**主持人：** 那是 GC 做不到的。他们只能做编译。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was a thing with GC couldn't do they could do only compilation.</p>
</details>

**Chris Lattner:** 他们只能做那种批处理式的、预先的、传统 Unix 风格的代码生成。当时，GCC 无法对项目中的文件进行跨文件优化。所以，如果你在一个 C 文件里有一个函数，它无法内联到另一个 C 文件里。诸如此类。LLVM 也是用 C++ 写的，这在当时非常有争议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They could only do a kind of batch upfront traditional Unix style code generation. At the time, GCC could not optimize across files in your project. And so if you had a C, if you had a function in one C file, it could not inline it into another C file. So things like that. LLVM was also written in C++, which was highly controversial at the time because...</p>
</details>

GCC 全是用 C 写的，而 Richard Stallman 非常反对 C++。所以，其实存在一个平行宇宙，因为在 2005 年我加入苹果时，我们决定看看 LLVM 和 GCC 是否应该合并。我当时向 GCC 社区提议：嘿，我们有这个有趣的技术，看起来很有互补性，可以提升 GCC 的架构，也许我们应该这么做。但这个提议没有任何进展，主要是因为它用 C++ 写的，但也因为它不是“我们自己发明的”。那里有一群其他非常资深、经验丰富的人，他们就像是说：“好吧，小子，我们凭什么听你的？”所以这事就没成。谢天谢地，这反而意味着 LLVM 必须靠自己成长起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">GCC was all C and uh, Richard Stallman was very opposed to C++. And so actually there's a parallel universe because in 2005 I had joined Apple. We decided okay well let's see if maybe LLVM and GCC should merge and actually proposed to the GCC community hey we've got this interesting technology this seems very complimentary it could lift the architecture of GCC maybe we should do this and uh it didn't go anywhere because primarily was written in C++ but it was also not invented here there's a bunch of other you know very serious very experienced people and they're like okay kid what do you why would we listen to you and so it did not go anywhere and thankfully so um it made meant that LLVM had to grow up on its own.</p>
</details>

### 在苹果公司的崛起：从边缘项目到核心技术

**主持人：** 那么，LLVM 是在你加入苹果公司全职从事这项工作后才真正开始腾飞的吗？我猜想当时至少有一个小团队在投入这个项目。是这样发展的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then did LLVM really start to take off when you got to move to Apple to now work on it full-time? I assume there must have been a at least a small team like investing in this. Is that how it went or something?</p>
</details>

**Chris Lattner:** 是的，关于去苹果的故事是这样的。我毕业时，正在寻找编译器方面的工作，最好是能让我继续从事 LLVM 的工作，因为它当时仍然是一个前沿的研究项目。五年过去了，社区已经发展得相当大了。我每六个月发布一次版本，投入了大量精力来宣传这项工作，并展示其势头和发展速度。我引起了苹果一位副总裁的注意，当时有几个人正在为 LLVM 添加 PowerPC 后端，因为苹果当时在用这个。我认识了他们，他们说：“嘿，来吧，我们对 GCC 很失望。那是我们所有编译器技术的基础。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, so the story of getting to Apple. So, I when I was graduating, I was looking for jobs in compilers and jobs that ideally would let me work on LLVM and continue the work because it was still an advanced research project. It was 5 years in, the community grown quite a bit. I was doing regular releases every six months and so was really putting a lot of energy into advocating for the work and showing momentum and velocity. I caught the eye of a VP at Apple and there was a couple of people that were working on adding a Power PC back end to LLVM because that's what Apple was doing. And so I got to know them and they said, "Hey, come like we are frustrated with GCC. That is the foundation of all of our all of our compiler technology."</p>
</details>

**主持人：** 因为 GCC 编译 Objective-C，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because GCC compiled Objective C for example. Right.</p>
</details>

**Chris Lattner:** 没错。而且，它的架构比较老旧，很难使用。他们得不到想要的性能，添加新功能也非常困难。社区也因为各种原因对苹果有些不满。所以，管理层基本上就是说：“来吧，来做 LLVM。”我说：“好的，算我一个。”当我开始工作时，他们确实给了我另一位工程师合作，但并没有给我太多指导。所以我当时想：“好吧。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. Exactly. And so and it was again an older architecture. It was very difficult to work with. They weren't getting the performance they wanted. It was very difficult to add features. The community was also kind of annoyed with Apple for a variety of reasons. And so basically management said, "Come like work on LVM." And I said, "Yes, sign me up." And so when I started they did give me one other engineer to work with, but really they didn't give me a whole lot of guidance. And so I was like, "Okay."</p>
</details>

**主持人：** 你几乎是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You pretty much...</p>
</details>

**Chris Lattner:** 太酷了。我会去实现 PowerPC 支持，并与当时的 Mac OS 集成，诸如此类。然后到了一个时候，他们说：“好吧，酷。你正在做这个。”我的经理说：“你做的这个酷技术很棒，但某个时候我们需要确保它对苹果真正有意义。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. I will I will I will go implement PowerPC support and integrate with the Mac OS back in the day and things like this. And then there became a time when they said, "Okay, cool. You're working on this." And my manager said, "It's great that you're working on this cool technology, but at some point we need to make sure that it's actually relevant to Apple."</p>
</details>

**主持人：** 当时还不相关吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Was it not relevant?</p>
</details>

**Chris Lattner:** 嗯，它还没有在任何产品中使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it wasn't used in any products yet.</p>
</details>

**主持人：** 哦，我明白了，你添加了支持，但还没被使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, I see you added support, but it wasn't used just yet.</p>
</details>

**Chris Lattner:** 还没。是的，没错。而且它在很多方面都不如 GCC。所以我基本上得到的暗示是：“好吧，如果一年后苹果还没有在某个产品中使用它，我们就会让你去做别的事情，因为我们不会只付钱让你做一个对我们公司没有实际影响的开源项目。”当我收到这个通知时，我的经理帮了我很多，他非常棒。我们四处寻找，好吧，我们能对业务产生哪些近期影响？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just yet. Yeah, exactly. And it wasn't as good as GCC in a number of different ways. And so I basically got the vibe that it's like, okay, well after a year if Apple's not using some product, then we'll ask you to start doing something else cuz we're not just going to pay you to work on an open source project actually have impact on our company. And so when I got that memo suddenly and my manager helped me a lot, he was amazing. Went around shopping for okay, well, what are the the near-term impact that we could have on the business?</p>
</details>

从那时起，第一个用例实际上是用于图形处理。OpenGL 当时正在做即时编译来处理一些图形方面的事情。所以我们能够做一个非常小但确实有价值的事情。突然之间，啊哈，这不仅仅是一个科学项目，它实际上很有趣。虽然它仍然缺少大量功能，但这促使了下一批功能、再下一批功能、再下一批功能的开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so from there, the first use case was actually for graphics. And so OpenGL was doing just in time compilation to do some graphics stuff. And so we were able to do something very small that actually had value. And suddenly aha this is not just a science project. This is actually interesting. Now it's still missing tons of features. But that enabled the development of the next set of features, the next set of features, the next set of features.</p>
</details>

**主持人：** 现在它已经进入了苹果实际使用和发布的产品中，并且正在创造商业价值，如果你愿意这么说的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it was now in a product that Apple actually used and shipped and it was you know generating business value if you want to put it like that.</p>
</details>

**Chris Lattner:** 数额很小，但至少不是零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A small amount but at least non zero.</p>
</details>

**主持人：** 不是零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Non zero.</p>
</details>

**Chris Lattner:** 没错。所以，在苹果的多年里，我所做的就是不断地投资这项技术，不断地建立一个开放的技术和一个开放的团队，也就是社区，但要确保为苹果带来越来越多、越来越多的价值。随着这一切的发生，我最终替换了苹果内部所有的开发者工具、编译器、代码生成和调试器技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. And so and so what I did over the course of many years across Apple is then say okay cool we'll keep investing the technology keep building an open technology and an open team so community but make sure to deliver more and more and more and more value to Apple and as that happened suddenly what ended up happening is I end up replacing all of the developer tools compiler code generation debugger technologies within Apple and that...</p>
</details>

**主持人：** 一步一个脚印。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One one step at a time.</p>
</details>

**Chris Lattner:** 没错。大约花了 5 年时间，我们建立了一个新的 C++ 解析器 Clang 和 Objective-C 前端等等。到了 2010 年左右，苹果发布了第一款 64 位 iPhone。突然间，这一切都因为 LLVM、因为我们构建的所有技术而成为可能。那在业界是一个史诗般的时刻，因为当时所有人都认为 64 位手机是愚蠢的，那不是个事儿。64 位没有意义，你为什么要在手机里放超过 4GB 的内存？对吧？太搞笑了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. And so over the it took about 5 years to the point where we built a new C++ parser clang and Objective C front end and all this kind of stuff. We got to about 2010 that's when Apple was releasing the first 64-bit iPhone. And suddenly this was made possible by LLVM by all the technology we had built and all this kind of stuff. And it was a it was a epic moment in the industry because everybody is convinced that 64-bit phones were stupid. That was not a thing. and 64 bits doesn't make sense. Why are you going to have more than 4 GB of RAM in a phone? Right. Hilarious.</p>
</details>

**主持人：** 哇。那是在过去。但人们当时就是那么想的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. Back in the day. But that's how people thought, right?</p>
</details>

**Chris Lattner:** 他们就是那么想的。他们说：“这效率太低了，根本行不通。”实际上，第一款 64 位 iPhone，也就是 iPhone 5S，在 ARM 拿回他们的芯片进行测试之前就已经量产出货了。所以我们已经构建了整个软件栈，我们启用了整个操作系统、整个工具链，所有这些都是在内部完成的。我们当时在和 ARM 合作，但他们不知道我们领先了多少。然后突然之间，我们把它投入生产，整个世界都震惊了，因为它的性能那么好，我们实现了所有的功能，那真是太有趣了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's how they thought. And they're like, "It's inefficient. It can never work." And so it actually the first 64-bit iPhone, it was the iPhone 5S shipped in production before ARM got their chips back to test. And so we had built the entire software stack. We enabled the entire operating system, the entire tool chain, all this kind of stuff internally. And we were collaborating with ARM. But they had no idea how far ahead we were. And then suddenly we're shipping it in production and the whole world's heads explode because how good the performance was and how all the capabilities we enabled and it was it was quite fun.</p>
</details>

### 滚雪球效应：从内部成功到行业标准

**主持人：** 我有点难把两件事联系起来，你可以帮我看看我漏了什么。一方面，你让事情听起来像是，好吧，在你刚到苹果的第一年，它是个实验性项目，然后你只是慢慢地和一个又一个团队合作。但快进四五年后，我们发现它实际上已经成为苹果的核心。它是如何从那些小项目发展到真正进入业务核心的？是因为你从开发者工具开始，然后越来越多的开发者被说服了吗？你是如何说服那些可能是最高级别的架构师和决策者的？我猜他们最终不得不在一项相对较新的技术上冒险，至少与当时已经存在了 25 年的 GCC 相比是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm having just trouble putting two things together and you can help me out with with what I'm missing on on one end you know you made it seem like okay like you know initially when you got to Apple for a year it was a experimental project then you just went slowly with one team and after the other but now next thing we know fast forward to four or five years later it's actually powering like like the core of Apple. How did it go from like you know the small projects to actually getting into like the core of of the business? Did it help that you started with developer tools and more developers were convinced like how did you get through to you know like probably the highest level kind of architects and decision makers who in the end probably I assume they had to take a risk on technology that was like somewhat new compared to like at least GCC that's been around for like 25 years at this point.</p>
</details>

**Chris Lattner:** 嗯，这是自上而下的支持和自下而上的成功相结合的结果。有人希望我成功，那是因为他们对 GCC 感到失望，所以他们想要一项新技术。这非常有帮助。另一方面是自下而上的成功，而且不是一件事，而是像每 6 个月我们就会有一个新的东西运行得很好。我以能搞定事情而闻名，所以我得到了更多的范围和责任。我的职位也从工程师到经理，再到二级经理，最终在几年内成为高级总监。所以，这不是一件事，而是大量的努力工作，而且非常有趣，因为我们能够……那个时期苹果的一个很棒的地方是，你可以产生很大的影响，因为团队在成长，而且如果你能把事情做成，你就有了一个了不起的工作平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so it's a combination of having top down support. So people that wanted me to be successful and that's because they're frustrated with GCC and so they wanted a new technology. So that was very helpful. A combination of bottom-up success and it wasn't one thing. It was like every 6 months we'd have a new thing that worked well and and go. I became known as somebody who'd get things done and so I got more scope and responsibility and so my you know I went from being an engineer to a manager to a second line manager to eventually a senior director over the course of number of years.</p>
</details>

因为 iPhone 问世了，一大堆其他技术也成为可能。Objective-C 非常特定于苹果，但我们可以推动它。那是个巨大的进步。我们为 Objective-C 添加了一大堆功能。所以，在我们构建这个的过程中，有很多机会，但都是来之不易的，在任何特定时刻都不是板上钉钉的。但随着我的团队在苹果取得进展，我们所有这些工作都是公开进行的，然后突然间，其他人也开始看到价值。比如 Cray 公司建造了一台超级计算机，并使用了 LLVM。谷歌最终在 2010 年采纳了它，并开始在内部用于一些小项目。然后谷歌内部的另一个英雄人物，像一个平行的项目，建立了一个团队，并对谷歌产生了很大影响。因此，这为更多人在谷歌内部从事 LLVM、不同的工具、不同的项目和不同的事情提供了理由。最终，像英特尔或 ARM 这样的公司取消了他们的内部编译器，转而使用 LLVM。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so it wasn't one thing. It was just a lot of hard work and it was a lot of fun because we were able to, you know, a great thing about Apple back in that time was that you could have a lot of impact because the team was growing, but also if you could get stuff done, you had an amazing platform in which to work because the iPhone came into existence and a whole bunch of other technologies were made possible. And Objective C was very Apple specific, but we could move it. That was huge. We added a whole bunch of features to Objective C. Um and so as we built into this like there's a lot of opportunity but it was hard one right it wasn't in in any given moment it wasn't guaranteed but as my team at Apple was making progress we were doing all this in the open then suddenly other people started seeing value and like Cray built a supercomputer and used LLVM for it and Google eventually adopted it 2010 and started using it within Google for some small things and then kind of a parallel project within Google of another hero within Google like built a team and add a lot of impact to Google. Therefore, justifying more people to work on LLVM within Google and different tooling and different projects and different things that all happened eventually, you know, Intel or ARM or these companies ended up canceling their internal compilers and switching to LLVM.</p>
</details>

然后突然之间，他们绝大多数的工程团队都在做同一件事。然后你得到的是价值的复利增长。如今，LLVM 拥有一个由数千人组成的社区，大家汇聚一堂，看到这一切真是太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so then suddenly the vast majority of their engineering teams all working on a thing and then what you get is you get value that compounds and you get a today LLVM has a community of thousands of people that come together and so it's amazing to see that.</p>
</details>

**主持人：** 太不可思议了。这感觉有点像你开始滚雪球，你从一个小雪球开始滚，然后你坚持了足够长的时间，大多数人没有，然后你就堆成了一个雪人，你会想，哦，你从哪里弄来这么多雪的？简直不可思议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's incredible. It it it feels a little bit like when you're starting to roll snow falls and you're starting to roll this small thing and then you know you do it for long enough and most people don't do it but then you you could have a snowman and you're like oh where did you get all that snow from? Just incredible.</p>
</details>

**Chris Lattner:** 嗯，这很有趣，因为人们总是想象成功，对吧？你从一个起点开始，说我想成为美国总统之类的。有些人会因此非常有动力，这很强大。我真正喜欢的是做所有的工作，走每一步，做那些不被看好的事情，弄清楚那些非常晦涩的东西，你知道，如果你把架构做对了，它会让整个事情复利增长、扩展和以正确的方式组合，它能让你解决别人解决不了的问题。但这意味着，大多数时候我都在做人们不理解的事情。我已经习惯了，我对此没有意见。我现在就期望这样。我不期望人们理解我。但随着时间的推移，这些项目会成长，它们会达到一个点，突然之间，一切都豁然开朗，突然之间，人们开始理解，突然之间，你可以解释它了，因为它以一种他们可以衡量的方式映射到了他们的价值体系中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so I mean it's funny because people always imagine success, right? And so you you start from a starting point and you say I want to be the president of the United States or something, right? But but and some people get very motivated by that and it's very powerful. Uh what I really love is doing all the work, taking each of the steps, doing the thankless thing, figuring out that really obscure thing that you know if you get the architecture right, it makes the whole thing compound and scale and compose the right way and it allows you to solve problems that nobody else can solve. But what that means is most of the time I'm working on things people don't understand. And so I'm fine with that. I've normalized to this. This is what I expect at this point. I don't expect people to understand me. But what happens is that these projects over time they grow and they get to the point where suddenly it clicks and suddenly people start to understand and suddenly you can explain it because it maps into their value system in a way that you know they can measure.</p>
</details>

### Swift 的秘密起源

**主持人：** 让我们来谈谈 Swift。正如你多次分享的，Swift 的故事是你如何开始秘密地进行这项工作的。你能告诉我，是什么促使你开始尝试一门新语言吗？你认为 Objective-C 的问题在哪里，尤其是既然我们已经解决了编译器问题，编译可能已经做到了最好。你是如何完成这项工作的？“秘密”到底意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and with them, let's get to Swift. The story of Swift as you as you shared many times is how you started to work on it in secret. Can you tell me like what led you to start experimenting with a new language? what you saw the problems being with Objective C especially because now we solved the compiler problem like you know the compilation was probably as as good as it it could have gone and how did you pull off this kind of what is secret mean right?</p>
</details>

**Chris Lattner:** 是的，Swift 的背景故事是这样的。我 2005 年加入苹果，我构建并基本上重新铺设了他们整个 C++、C 和 Objective-C 的工具链。到 2010 年的 WWDC（苹果全球开发者大会），我们已经推出了一个全栈的替代品，并且它运行良好。构建一个全栈、完全集成的 C++ 编译器绝非易事。即使在当时，C++ 也是一门非常复杂的语言，这是一个巨大的技术挑战。但这也非常令人沮丧，至少对我来说是这样，因为 C++ 简直就是一头语言的猛兽。所以，完成这项工作后，你不可能不思考，我们能做得更好吗？正如你所说，我们已经构建了很多基础技术，那时我们几乎可以构建任何我们想要的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah well so so the backstory on Swift is that uh so I joined Apple in 2005 and I built and basically replumbed their entire C++ and C and Objective C tool chain and by 2010 at WWDC which is their summer conference um we had launched a full stack replacement and it is working and building a full stack fully integrated C++ compiler is no small feat. C++ was even then was a very complicated language and it was a very big technical challenge but it was also very demotivating because C++ at least to me because C++ is just a beast of a language and so you couldn't come out of that and not wonder could we do something better right and as you said we built a lot of this fundamental technology could build pretty much anything we wanted at that point.</p>
</details>

于是，我又一次在晚上和周末开始行动，没有征求许可，只是开始摆弄，看看能做些什么来改进。对我来说，我所做的是去研究了很多现有的语言。我们去看了新的语言，比如 Java 或 C++ 的东西，但我们也看了函数式语言，比如 OCaml 和 Haskell 等。我们还看了一些深奥的语言，那些非常奇怪的其他东西。我们看了 TypeScript、Dart 以及当时正在出现的 Go 等语言。所以，这真的是关于思考，我喜欢什么？我如何看待成功？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I just started again nights and weekends didn't ask permission just started fiddling around seeing what could be done that would be better and to me what I did was I actually said okay let's go look at a lot of existing languages so let's go look at both the new ones um let's look at Java or let's look at C++ things but let's also look at functional languages like OCaml and Haskell and things like this let's also look at esoteric languages like the the really weird other things let's look at TypeScript and Dart and other things that were kind of on the scene and happening and Go and languages like that and so it was really about saying like well what do I like and how do I see success?</p>
</details>

我为 Swift 定义的成功是易于使用和可扩展。我看到很多语言，JavaScript 可能是最好的例子，你从一些非常简单的东西开始，比如一个周末用 JavaScript 做的黑客项目，然后它获得了采用，然后你有了开发者，然后开发者把他们的工具带到其他领域。所以，JavaScript 是为 `onclick` 事件处理器设计的，但现在人们用它来运行 Web 服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I defined success as with Swift was making it easy to use and scalable. And so I saw a lot of languages JavaScript is probably the best example of this where you know you start with something really simple and you know a weekend hack with JavaScript and then and then it gets adoption and then you get developers and then developers bring their tools to other domains and so you know JavaScript was designed for onclick handlers but now people are running web servers in it.</p>
</details>

**主持人：** 是的，我们见得太多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Well, and so we see it at all all too much.</p>
</details>

**Chris Lattner:** 没错。所以我的观察是，成功意味着你会被自然地带入其他领域。所以，要超越最初的胜利，思考更广泛的通用性和规模。我意识到，如果你拿 Objective-C 这样的东西来说，我当时非常熟悉它，你知道，它在对象和 C 语言之间存在二分法。Objective-C 有一个受 Smalltalk 启发的对象模型，然后它用 C 来实现性能。这实际上是一个非常漂亮的组合，因为你可以用 C 深入到硬件底层，但你又有高级的 API。我意识到的是，它们不必是两种语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. And so what my my observation was is that success meant that you would be naturally brought into other domains and so think beyond just the the first win but think towards more generality and scale. And what I realized is if you take something like Objective C which I was deeply familiar with for example you know this dichotomy between objects and C. So Objective C had this small talk inspired object model and then it had C for performance. It was actually a really beautiful combination because you can get all the way down to the metal with C. Uh, but you had high level APIs. And what I realized is that they didn't have to be two languages.</p>
</details>

**主持人：** 所以，你可以取其精华。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so you could you could take the good parts.</p>
</details>

**Chris Lattner:** 并将它们整合到一个可以真正扩展的系统中，这个系统会更容易教授，内存更安全，更现代化，有好的类型推断，并修复一些语法问题，因为 Objective-C 有点像是两个不同世界的混合体。有趣的是，你快进到今天，Python 正是如此。Python 是一种用于对象的优美语言，构建在 C、C++ 和 Rust 之上，它内部也存在着这种“两个世界”的问题。所以，历史如何与自身押韵，以及正在发生的这么多不同的事情，对我来说非常有趣。但 Swift 最初的想法真的是关于如何构建一门可扩展的语言，以及我们如何毫无保留地借鉴不同地方的好点子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And pull it together into one system that could actually scale and would be way easier to teach, way more memory safe, way more modern, good type inference, fix some of the syntax problems because Objective C was a little bit of a a mashup between two different worlds. And the funny thing about that is that you fast forward all the way to today. That's exactly what Python is. Python is a beautiful language for objects built on top of C and C++ and Rust and it's got this two world problem going on within it. And so it's very interesting to me just again how history rhymes with itself and there's so many different things going on. But the initial the initial ideas of swift was really about saying how do we build a scalable language and how do we pull together the best ideas shamelessly you know borrowing ideas from different places.</p>
</details>

### 从一张白纸设计一门语言

**主持人：** 当你有一张白纸，或者当你在思考时，你是如何进行的？你会像元编程一样，写下你希望看到的东西吗？当然，你也构建过编译器，你会立刻开始思考那将如何工作。你能给我们一点视角，看看你是如何从这张白纸到“好吧，这就是我认为的语言”的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you have a black canvas or when you were thinking like how do you go about it do you kind of like I don't a meta program like kind and write down what you love to see. Uh you also of course built compilers you start to immediately think of of how that would work like can you give us a little bit of a a view of like what what how do you go from this blank canvas to like okay here's what I think the language will be.</p>
</details>

**Chris Lattner:** 嗯，这对我来说是个好问题，因为在我的职业生涯中，我从很多张白纸开始。LLVM 是白纸，MLIR 后来也是白纸，Mojo、Swift，我构建的很多系统都是白纸项目。所以对我来说，这关乎几件事。首先，进行那种分析、反思，决定最终的成功是什么样子。然后，做调查，去看看外面有什么，什么是好的，什么是坏的。我坚信的一件事是，你可以拿一个你不喜欢的系统，但即使你不喜欢它，埋藏在系统内部的通常也有好点子。所以你可以采纳那些好的点子，忽略其余的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well so that's a good question for me in general because I start from a lot of blank canvases across my career right so LVM blank canvas, MLIR later blank canvas, mojo swift like many of the systems I build are blank canvas projects and so for me it's it's a couple of things first of all doing that kind of analysis the reflection the deciding what is success ultimately look like? Then do the survey. Go look at what's out there. What's good? What's bad? One of the things I really strongly believe is that you can take a a system that you don't like, but buried within a system, even if you don't like it, there are often good ideas. And so you can take the ideas that are good and ignore all the rest.</p>
</details>

然后，当我开始构建一个新系统时，我期望去设计、重新设计、迭代、学习和成长。我试图做的是，通过一些验证点来验证特定的假设。我会说，好吧，我不会解决世界上所有的问题。我会把这部分、这部分和这部分保持超级简单。就像你画猫头鹰时画的那两个圆圈，就让它们是圆圈。然后，投入精力去证明这一块。如果我能完成这一块，并且我能理解它行得通，我能从中获得验证和信心，我知道了它的输入和输出接口，那么现在我就可以进入下一个系统，把它构建出来，再把这个东西构建出来，这样我们就能边做边学。但在这个过程中的每一步，都不要害怕进行大规模的改变，掀翻桌子，再试一次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then when I start building a new system I expect to design and redesign and iterate and learn and grow. And what I try to do is I try to go through proof points and validate specific assumptions and say okay I'm not going to solve all the world's problems. I'll keep this part and this part and this part super simple. It's like you know the two circles that make your owl just leave them as circles and then uh and then invest in proving this piece and if I can get this piece done and I can understand that it works and I can gain validation and confidence in that. I can know the interfaces going in and coming out of it well now I can go out into the next system and build that out and build this thing out so that we can understand it and learn as we go. but every step along the way being unafraid to go massively change and flip over the table and try try again.</p>
</details>

### 四年磨一剑：Swift 的诞生与挑战

**主持人：** 你在 2010 年左右开始在周末和业余时间试验 Swift。为什么直到 2014 年才发布第一个版本？构建一门语言到底需要做什么？因为，我再次认为我们都能强调，这很酷，你有这些想法，当然你有很多经验，你尝试了各种东西，但作为一个软件工程师，我不该问这个，但我还是要问，为什么花了这么长时间？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you started to experiment with Swift uh like the kind of weekends and on the side in 2010ish. How did it take until 2014 for a first release like what really goes into building out a language? Because again I I think we can all I can kind of emphasize like this is cool like you have these ideas of course you have a lot of experience you try out things but then like as a as a software engineer I shouldn't ask this but I'm going to ask what took so long.</p>
</details>

**Chris Lattner:** 哦，嗯，事实证明，构建编程语言并不容易，大概需要四年时间吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh well so it turns out building programming languages is not easy uh takes about four years I guess.</p>
</details>

**主持人：** 你能给我们一些关于是什么让它如此困难的体会吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you give us a bit of like emphasis of like you know like what like makes it so hard?</p>
</details>

**Chris Lattner:** 是的。让我先简单介绍一下过程，因为头一年半，真的只有我一个人在做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, so so let me let me just frame up how it went just so you know because uh the first year and a half it was literally just me working on it.</p>
</details>

**主持人：** 哦，好吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, okay.</p>
</details>

**Chris Lattner:** 在晚上和周末，我还有一份全职工作，管理着一个大团队，有很多事情要做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in nights and weekends and I had a day job and I was managing a big team and a lot of stuff going on.</p>
</details>

**主持人：** 等等。所以在那时，你已经是二级经理之类的，管理着一个 40 人的团队，负责很多非常有趣和好玩的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hold on. So at this point, yeah, you were already like pretty second level manager or something and had a team of 40 people and running a lot of a lot of very interesting and very fun stuff.</p>
</details>

**Chris Lattner:** 这是个激情项目。我也是个相当不错的程序员，所以这有帮助。但一年半后，我把它告诉了管理层。我说：“嘿，我正在做这个东西。你们觉得怎么样？”他们说：“呃，嗯，不。我们为什么需要一门新语言？Objective-C 才是让 iPhone 成功的功臣。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is passion project. Yeah. Yeah. I'm also a fairly good programmer so that helps. But after a year and a half got to the point where I told management about it. I said, "Hey, I'm working on this thing. What do you think?" They're like, "Uh, yeah. Uh, no. Why would we want a new language? Objective C is what made the iPhone successful."</p>
</details>

我说：“不，什么？”我说：“那这样吧，我让我团队里的一两个人兼职做这个怎么样？”他们说：“呃，我猜你可以告诉他们，但我们真的不能承诺资源，你知道的？”所以，但你知道，我当时受人尊重，做得也不错，所以我比其他人有更多的回旋余地。我做到了可以说：“好吧，我们来做一些演示。”然后，大概过了 3 年，我得到的大部分反馈是：“好吧，如果你不喜欢 Objective-C，那就去改进 Objective-C。Objective-C 是你负责的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. Right. And so I'm like, "No, what?" I'm like, "Well, how about I just have like one or two of the people in my team like work on this part-time?" They're like, "Uh, I guess you can tell them about it, but we can't commit resources really, you know?" And so, and so, but you know, again, I was respected and doing good things. And so I was given a little bit more rope than some other people would. And I got to the point of saying like, okay, let's build up some demos. And then it was about 3 years in and most of the feedback I was given was, okay, well, if you don't like Objective C, go make Objective C better. You own Objective C. Also,</p>
</details>

**主持人：** 这是很自然的反应。我意思是，作为一个工程师，我不想听到这个。但如果我戴上一点商业的帽子，这正是你会做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a natural reaction. I mean, as as much as engineer, I don't want to hear it. If I put a little bit of a business hat on, it's what you would...</p>
</details>

**Chris Lattner:** 完全说得通。整个社区都在用它，风险很低，还能让你现有的投资变得更大。所以我所做的是，我说：“好吧。”在那四年的旅程中，不仅仅是和一个知道自己在做什么的团队全力以赴地构建东西。那是一个发现、研究，以及与高层领导沟通的过程。我意识到，我说：“好吧，我想要内存安全。Objective-C 没有内存安全。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Makes total sense. That's what the entire community is using. It's very low risk. It makes your existing investment even bigger. And so what I did was I said, "Okay, well, uh, across that four-year journey was not just building the thing full out with like a team of people that knew what they're doing. That's the discovery, the research, and also the socialization process with executive leadership." And so, um, what I realized, I said, "Okay, well, I want to have memory safety. Objective C does not have memory safety."</p>
</details>

那是最大的问题之一，`retain` 和 `release`，完全是手动的，简直是一场噩梦。所以我们发明了 **ARC**（Automatic Reference Counting: 自动引用计数，一种内存管理技术），一种自动进行引用计数的方法。这使得 Objective-C 更易于教授和更安全。它也把它拉得更接近 Swift。然后我们做了模块，然后是字面量。我们在 Objective-C 中添加了所有这些功能，其目的是将 Objective-C 编程的实际体验拉近 Swift。这样，最终当 Swift 问世时，就不会是一个那么突然的飞跃了。虽然它仍然是一个相当大的飞跃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was one of the biggest things, retain and release, and it was completely manual, and it was just a kind of a nightmare. And so we invented ARC, so a way of doing reference counting automatically. That made Objective-C way more teachable and safer. It also pulled it much closer to Swift. We then did modules. We then did literals. And in Objective-C, we added all these features that what it was doing is was pulling the lived experience of doing Objective C programming closer to what Swift would be. So that ultimately when Swift came out, it would be less of an abrupt leap and it was still a pretty big leap.</p>
</details>

### Swift 1.0 发布：在争议中前行

**主持人：** Swift 1.0 问世了，我记得的反馈有两点：人们对苹果发布一门新语言感到非常兴奋，而且 iPhone 当时非常火爆。2014 年是那个你已经知道可以在 iPhone 上建立大生意的时代。但当你试用它时，它就是不好用。Xcode 没有重构支持，调试是一场噩梦。我们本该……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">1.0 you know came out and you know the feedback I can just talk from you know like what what I remember from there there's two things people were super excited that Apple is releasing a new language and iPhone was was huge 2014 was was the time where like you knew that you could make a build a big business on iPhone. However, when you tried it out, it was just not good. Xcode didn't have refactoring support. Debugging was a nightmare. We should launch.</p>
</details>

**Chris Lattner:** [笑] 是的，它必须是 1.0 才能发布，因为苹果基本上不发布 0.5 版本。所以如果我们想发布它，就必须叫 1.0。这是一方面。但另一方面是，我们想把它推出去。在我们发布它的时候，苹果内部大概只有 250 人知道这件事。这些人大多数在我的团队里，还有一些高管、市场营销和其他人。所以我们知道，我们不可能在一个需要签署保密协议才能接触到的真空环境中构建一门好的编程语言，对吧？你必须把它真正推出去，你必须获得使用体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[laughter] Yeah. So it had to be 1.0 to launch it because Apple doesn't launch 0.5s basically. So it if we wanted to launch it had to be called 1.0. So that was one aspect of it. But the other aspect is we wanted to get it out there. And at the point that we launched it, only about 250 people at Apple knew about it at all. Most of those people were in my team and then some executives in marketing and other people like this. And so we knew we couldn't build a good programming language in in a vacuum with an NDA that you had to sign to get access to it, right? You have to actually get it out there. You have to get usage experience.</p>
</details>

所以，对我来说，教训是，在它真正准备好、经过验证、并且有大量使用经验之前，不要称之为 1.0。顺便说一下，我们把很多这些教训带到了 Mojo。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the learning for me is don't call something 1.0 until it's actually ready and it's validated and you have a lot of usage experience and things like this. We bring a lot of these lessons to Mojo by the way.</p>
</details>

但同时，我们也要确保与社区进行清晰的沟通。我认为我们做得很好的一件事是，我们对苹果内部说，看，我们需要发布这个，我们知道它不会是完美的，所以我们要告诉社区，你们可以采用它，可以构建应用并提交到商店，但我们会破坏你们的源代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also it's about making sure that we communicate clearly with the community. And so one of the things I think we did well is we said look uh internally to Apple we said look we we need to launch this we know it won't be perfect and so we're going to tell the community that you can adopt it and you can build apps and submit them to the store but we will break your source code.</p>
</details>

**主持人：** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep.</p>
</details>

**Chris Lattner:** 这是因为我们知道，当我们获得使用经验后，我们必须改变语言。所以我们告诉人们，我们会帮助你们，但要预料到代码会中断。我很高兴我们那么做了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is because we know that we have to change the language when we get usage experience. And so we we told people like we will help you but but but expect code breakage. And I'm glad we did that.</p>
</details>

**主持人：** 我记得那一点非常清楚。人们对此感到不满，但他们知道。当我们讨论是否应该迁移到 Swift 时，在 Uber，重写发生在 2016 年，当时 Swift 是 1.2 版本。平台团队在评估后做出了决定，他们将承担风险，那是一个巨大的风险。现在有很多关于它的故事。我有一篇博客文章，还有其他人分享了他们的经验。但他们这么做是因为他们知道苹果是认真的。我认为开源部分也帮助建立了很多信任。我几乎觉得那是我最后一次看到苹果社区，特别是 iOS 开发者，真正团结起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I remember that that was really clear. People were upset about it, but they knew like when we had the discussion of should we move over to Swift or not and uh at at Uber uh the rewrite happened in 2016 where Swift was at 1.2 and the the platform team made the decision after evaluation that they will take a risk and it was a big risk and there's now stories about it. I have a blog post there some other people with their experiences but they did it because they knew that Apple is committed. I think the open source part also helped build a lot of trust and I almost feel that that was one of the last times that I saw like the Apple community really unite against uh like iOS developers specifically.</p>
</details>

### 技术变革中的人性：专家为何抵触改变

**主持人：** 2016 年的一个有趣事实是，我记得在 2016 年中或稍早些时候，Uber 是最早在 iOS 上建立起来的大型移动优先公司之一，它在 iOS 上成长，与 iOS 共存亡。当然还有安卓。移动平台团队在 2016 年初，也就是 Swift 推出两年后进行了一项调查。当时是 Swift 1.2。他们说我们计划重写应用。重写是必须的，因为架构需要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well well this was a fun fact in 2016 I remember middle of 2016 or maybe the a little bit earlier Uber was one of the big mobile first companies built on iOS grew up on iOS lived and breathe iOS and of course Android and the mobile platform team ran a survey in sometime early 2016, 2 years after Swift was out. This is Swift 1.2 saying we are planning to rewrite the app. The rewrite was a thing just because they needed needed to for architecture.</p>
</details>

他们进行了一项调查，询问作为 iOS 工程师，你更喜欢 Objective-C 还是 Swift？结果基本上是 50/50。这些人都是非常有经验的工程师，他们很懂。两个阵营激烈地争论不休。我至今仍然不知道为什么 Uber 最终选择了 Swift，最后肯定有人投了决胜票。但当时的情况就是这么势均力敌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they ran a survey would you prefer, you know, as an iOS engineer, Objective C or Swift? And the results were pretty much 50/50. So and these were again very experienced engineers. they they knew and the two camps were violently disagreeing with another and and I don't I still don't know why Uber went with uh with swift someone was a tiebreaker in the end but back then this is how foot on foot it was.</p>
</details>

**Chris Lattner:** 嗯，但我学到了很多，并且再次，你会向前反思，因为这正影响着我现在正在做的事情。同样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well so but I've learned a lot and again you reflect forward because this impacts exactly what I'm working on now. same thing which is that...</p>
</details>

**主持人：** 用 Mojo？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With Mojo?</p>
</details>

**Chris Lattner:** 专家不喜欢改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Experts don't like change.</p>
</details>

**主持人：** 这有点反直觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is counterintuitive.</p>
</details>

**Chris Lattner:** 嗯，如果你想一下，如果你是一个 Objective-C 编程专家，我不知道你是不是，但如果你是一个 Objective-C 专家，你已经做了五年或十年，你已经学会了所有的包袱、技巧、所有奇怪的情况，你知道所有晦涩的东西，你是人们求助的对象。现在，你的专业知识被宣告无效了。你和所有人一样，从第一天开始。你不再是专家了。你并不真的想要一个新东西。你想成为旧东西山头的王。你不想让新东西成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well I mean if you think about it like if you're if you're an expert objective C programmer I don't know if you were but if you're an expert Objective C programmer you've been doing it for five or 10 years you've learned all the baggage tricks all the weird cases you know all the arcane thing you are the person that people turn to for help comes out now your expertise is invalidated you're on day one just like everybody else you are not the expert You don't really want a new thing. You want to be the king of the hill of the old thing. And you don't want the new thing to be successful.</p>
</details>

当然，有些人思想灵活，会转换过来，也有早期采用者和喜欢新事物的人。所以并非所有人都如此，但这实际上是保护自己先前投资的合理人类行为。对很多人来说，你必须有一个非常好的理由才能转换。在 Swift 的案例中，SwiftUI 是一个促使一些长尾用户转变的理由。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so now some people are intellectually flexible and will switch over and there are early adopters and things like this or people that like new things. And so it's not true of everybody, but it is actually sensible human behavior to protect your your prior investment. And for a lot of people, you have to have a really good reason to switch over. And so in the case of Swift, you know, Swift UI was like a reason that moved some of the longtail people.</p>
</details>

### 新技术赋能新一代开发者

**Chris Lattner:** 在这次旅程中，我最引以为豪的事情是：当我 2010 年开始这个项目时，它只是一个业余时间的玩具项目，没指望能有什么结果。我当时隐含的假设是，我们可以做出比 C++ 和 Objective-C 更好的东西，更容易使用。但不知道结果会怎样。发布后，会有人在街上拦住我说：“谢谢你，Chris。”因为 Swift，不仅是我，还有整个团队的努力，我才能够成为一名应用开发者。在 Swift 之前，我尝试用 Objective-C 构建应用，但我永远搞不懂指针和方括号，它会崩溃，我感觉自己不够聪明，无法构建一个应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let me tell you the thing that I find most that I'm most proud of in this journey. So when I started 2010 and it was just a toy project like playing around with in spare time not expecting to go anywhere. I was kind of implicitly coming from the assumption that we could do something that was better than C++ and Objective C and that was more easy to use and things like this, but didn't really know how it would go. After we launched, I would have people that stopped me in the streets and said, "Thank you, Chris." Like, because of Swift and because of not just me, but the whole team working on this, I was able to become an app developer. Before Swift, I tried building apps with Objective C, but it I could never figure out the pointers and the square brackets and it would crash and I couldn't like I'm not smart enough to build an app.</p>
</details>

但现在有了 Swift，它变得足够简单，连我都能做到。现在我是一名应用开发者，而不是网页开发者。我在公司里成为了专家，我的职业生涯也得到了学习和成长。所以，多亏了这项新技术，我进步了。如果不是这项赋能技术，这一切都不会发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now with Swift, it became easy enough that even I could do it. And now I am an app developer instead of a web developer. And I've become the expert in my company. And now I have learned and grown in my career. And so now thanks to this new technology like I progressed. And if not for this enabling technology, it never would have happened.</p>
</details>

这和现在 GPU 发生的事情完全一样。我们现在在 **CUDA**（Compute Unified Device Architecture: 由 NVIDIA 推出的并行计算平台和编程模型）、C++ 和所有这些工具上面临着完全相同的情况，这些工具将如此多的开发者挡在了这种新兴计算和技术的大门之外。这正是同样的事情。所以，这就是为什么我对从事这类技术充满热情，因为我相信程序员的力量。我相信那些想要创造事物的人的潜力。这就是为什么我热爱软件，因为你可以创造任何你能想象到的东西。对我来说，这就是在这个领域工作的强大之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's the exact same thing happening with GPUs. Right now we have the exact same thing with CUDA and C++ and all these tools that are gatekeeping so many developers away from this emerging kind of compute and kind of technology. And it's the same exact thing. And so this is what really makes me passionate about working on this kind of technology because I believe in the power of programmers. I believe in the human potential of people that want to create things. And that's fundamentally what why I love software is that you can create anything that you can imagine. And and to me, that's what's so powerful about working in this space.</p>
</details>

### 回顾 Swift：成就与遗憾

**主持人：** 回顾过去，你对这门语言的演变感觉如何？有哪些部分你对它的发展感到非常满意？又有哪些部分你觉得，也许如果你待得更久一些，你会尝试用不同的方式来处理？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking back at it, uh how do you feel on how the language has evolved? What what are parts that you're really kind of happy on how it lived up? What are parts where you're you're you're thinking that maybe if you would have stayed longer, maybe you would have like tried to have it in different ways, if there's any.</p>
</details>

**Chris Lattner:** 我可以谈谈我犯的错误，对吧？因为它们是我可以带到未来的教训，这样就是我的错，而不是我说别人做不到。早期的 Swift，我就直说了，我不知道自己在做什么，对吧？我以前从未做过。我构建过一个有规范的 C++ 编译器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can talk to the mistakes that I made, right? Because and they're learnings that I could bring forward and that way it's my fault and it's not me saying other people weren't able to do it. Right. Fair. I like that. But like early Swift, it was, you know, I'll just say it bluntly, I didn't know what I was doing, right? So I'd never done it before. I'd built a C++ compiler which had a spec.</p>
</details>

**主持人：** 嗯，这是你构建的第一门语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it was the first language you ever built.</p>
</details>

**Chris Lattner:** 这是我构建的第一门语言，对吧？所以很多想法都是新的。比如类型检查算法很令人兴奋，但我真的不知道自己在做什么。我也不是个数学家，所以如果我真的懂数学，也许那会是显而易见的。但 Swift 中的一些问题，比如“表达式过于复杂，无法在合理时间内完成类型检查”，那是我的错，对吧？有一些特定的功能导致了这种情况，而且很难修复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was the first language I had ever built, right? And so a lot of the ideas going into it were new. A lot of the like the type-checking algorithms were exciting, but I didn't really know what I was doing. I'm also not a math guy, and so if I actually understood math, then maybe it would have been obvious. But things in Swift like expression too complex to type check in reasonable amount of time. That's my fault, right? And there there's specific features that cause that to happen and it's very difficult to fix.</p>
</details>

另一个错误是，我们在添加我们希望在语言中看到的功能方面非常有野心，我们添加它们的速度超过了架构的承受能力。所以，特别是如果你谈论 Swift 1，但即使是今天，最终发生的是编译器的内部和设计没有真正以正确的方式对齐。所以你会得到很多东西工作到 80% 或 90%，它们没有完全契合，然后当你开始添加越来越多的东西时，它就没有正确对齐，只是变得越来越复杂。顺便说一下，C++ 也有同样的问题。Swift 在这方面并不独特。但结果是，你会得到一种涌现的复杂性，然后开发者可以感觉到。今天的 Swift，人们取笑它有太多的关键字之类的。嗯，这是因为它的起源故事，在我看来，没有投入足够的精力去真正重构、真正重新设计、真正确保核心是伟大的。相反，它是，好吧，让我们尽快进入应用开发。结果是，我和许多其他优秀的人在上面添加了更多的东西，更多的东西，更多的东西，语言变得更加复杂。所以，部分原因可能在于任何单个的决定，但也是因为一些原始的东西没有以正确的方式对齐，所以复杂性就复利增长了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another mistake is that we were very ambitious in terms of adding features that we wanted to see in the language and we added them faster than the architecture could keep up. And so particularly if you talk about Swift one, but even today what ended up happening is the internals of the compiler and the design didn't really line up right the right way. And so you get a lot of things that work kind of 80% or 90% and they didn't quite fit together and then as you start adding more and more and more stuff it doesn't really line up right and it just gets more and more complicated. C++ has the same thing going by the way. Swift's not unique this way but but as a consequence of that like you get an emergent complexity that then developers can feel and swift today people make fun of too many keywords and things like this. Well, it's because the origin story was really not, in my opinion, didn't put enough energy into like really refactoring, really redesigning, really making sure the core was great. Instead, it was okay, let's get to app development as quickly as possible. And so, as a consequence of that, what happened is then, you know, I and many other good people put more stuff onto it and more stuff onto it and more stuff onto it and the language got more complicated. And so, you know, partially that's maybe in any individual decision, but also it's because some of those original things didn't line up the right way and so the complexity kind of compounded.</p>
</details>

### 职业生涯 2.0：投身 AI 浪潮

**主持人：** 随着我们谈到你今天在做的事情，你在苹果之后，在几个有趣的地方工作过，特斯拉、谷歌大脑、SciFive。你能谈谈你在这些地方学到了什么，以及它们如何……因为我认为回顾它们如何最终导向你现在正在做的事情会很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as we get to what you're doing today, you're after Apple, you worked at a few interesting places, Tesla, Google Brain, SciFive. Can you talk about what you've learned at each of these places and kind of how it's, you know, because I think it'll be interesting to look back on how it just all is leading to what you're doing now.</p>
</details>

**Chris Lattner:** 是的，完全可以。我把它框定为，我职业生涯的 1.0 是在苹果，构建开发者工具，理解 CPU。我也构建了 OpenCL，这是一个 GPU 的东西，还有 GPU 的编译器之类的。所以学到了很多关于硬件软件边界、开发者、开发者工具和 Xcode 的东西。2016 年我爱上了 AI。原因是在 2016 年左右，照片应用有了告诉你这是猫还是狗的功能。那是一个非常……那是 Inception v1 或某个非常古老的 AI 模型。我想，我负责开发者工具，我对编程了解很多，但我完全不知道如何写一个算法来检测图片中的猫。这到底是怎么工作的？所以我在 2016 年掉进了这个兔子洞，这引导我进入了我旅程的 2.0，这是一个非常专注于 AI 的阶段，去搞清楚所有这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, totally. So, so the way way I frame it up is that, you know, 1.0 of my career was at Apple and building developer tools and understanding CPUs and I built Open CL, which is a GPU thing also. and compilers for the GPU and like all this kind of stuff. And so learning a lot about that hardware software boundary and developers and developer tools and Xcode and like that whole thing, right? 2016 I fell in love with AI. And the reason was is that about 2016 the photos app had the ability to tell you is this a cat or is this a dog? And it was a very like it was inception v1 or some really ancient AI model was in there. I'm like I own developer tools. I know a lot about programming. I have no idea how to write an algorithm to detect a cat in a picture. How the heck does that work? So I fell down this rabbit hole in 2016 and this is what leads me to 2.0 of my journey which is a very AI focused like go figure all this stuff out.</p>
</details>

特斯拉在做自动驾驶汽车的应用。我在那里学到了 Caffe 和 TensorFlow，我意识到 TensorFlow 是个好东西，但它可以变得更好。这引导我加入了谷歌，帮助他们在那里扩展 **TPU**（Tensor Processing Unit: 谷歌为神经网络机器学习设计的专用集成电路）。我最终负责了 TensorFlow 的底层部分，所有 CPU、GPU、TPU，以及 TensorFlow 内部的一堆其他奇怪的 **ASIC**（Application-Specific Integrated Circuit: 为特定用途设计的集成电路）。但值得注意的是，我扩展了 TPU 的软件平台。多年来，我学到了，嘿，没有 CUDA，做 AI 软件真的很难。TPU 没有 CUDA。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so Tesla is doing applied with self-driving cars. That's where I learned Caffe and tensorflow and I realized tensorflow was a good thing but it could be a way better thing and so that led me to joining Google and helping scale TPUs there. I ended up owning the bottom part of TensorFlow, all the CPU, GPU, TPU, plus a bunch of other weird internal ASICs uh within TensorFlow, but notably I scaled the software platform for TPUs and across years uh learned both, hey, it's actually really hard to make AI software without CUDA. TPUs don't have CUDA.</p>
</details>

### AI 软件的碎片化困境与 Mojo 的诞生

**主持人：** CUDA，也就是英伟达的内核编程方式，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">CUDA, which is Nvidia's uh way to program kernels, right?</p>
</details>

**Chris Lattner:** 是的。所以基本上，整个 AI 生态系统，当时和现在，都严重偏向于英伟达，偏向于他们的 API、软件和名为 CUDA 的语言工具包。它大约有 20 年历史了，非常成熟，有很多优点，但它也有 20 年历史了，所以有时间和空间容纳新事物。但当你构建一个 ASIC 时，TPU 是非常大规模的数据中心训练和推理加速器，非常花哨，特别是在 2017 年，你没有软件。所以你必须从头开始创建一切。然后你必须让 TensorFlow 和 PyTorch 与它对话，没有人真正理解那是如何工作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Yep. So, so basically the entire AI ecosystem back then but also today ends up being very heavily biased by Nvidia and by their API and software and language toolkit called CUDA. It's about 20 years old and so and it's awesome and it's very mature and there's a lot of good things about it but it's also 20 years old and so there's time and space for new things but when you're building an ASIC so TPUs are very large large scale data center training and inference accelerator very fancy very very uh frontier particularly back in 2017 you don't have software and so you have to create everything from scratch and then you have to get TensorFlow and PyTorch to talk to it and and nobody really understood how that worked.</p>
</details>

所以，多年来，我学到了很多，我非常感谢我在谷歌的经历，因为我了解了算法，了解了 AI，了解了前沿应用。比如，“Attention Is All You Need”这篇论文就是在那个时间框架内在 TPU 上发明的。所以，Modular 的起源故事真的可以归结为，我的联合创始人和我，我们是好朋友，我们之前在谷歌认识，但真正让我们走到一起的是说：“你知道，我们需要一个像 LLVM 一样的东西，但是是为 AI 服务的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so across the years I learned so much and I'm so thankful for my experience at Google because I learned about the algorithms, I learned about AI, the frontier applications like you know the attentions all you need paper was invented in that time frame on TPUs and so... The origin story of modular really came down to my co-founder and I who were buddies. as we got to know each other previously at Google, but really saying like, you know, we need something like LVM, but for AI.</p>
</details>

**主持人：** 但是是为 AI 服务的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for AI.</p>
</details>

**Chris Lattner:** 我们需要一个东西，人们可以为他们的芯片实现支持，然后得到一个 AI 软件栈。因为，你知道，如果你在 20 年前构建 CPU，你不想必须构建一个完整的 C++ 编译器、C 编译器、代码生成器、内核和网页浏览器。你只想做一点点工作，然后得到软件。而现在 AI 领域没有这个东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we need the thing that people can implement support for their chip into it and then get an AI software stack because, you know, if you're building CPUs 20 years ago, you didn't want to have to build a whole C++ compiler and C compiler and code generator and kernel and web browser. You just want to do a little bit of work and then get software. And that doesn't exist for AI right now.</p>
</details>

**主持人：** 对于我们这些软件工程师，但我们不构建 AI 软件，我们只是使用模型，我们可能会调用 API 或调用训练好的模型。你能向我们解释一下，如果我们进入构建 AI 应用、直接在 GPU 上运行它们的世界，无论是英伟达、现在的 AMD 还是谷歌 TPU，我们今天会使用什么软件？现状是什么，或者至少在你创办 Modular 时的现状是什么？然后你的愿景是什么？我感觉这里有很多与 GCC 和 LLVM 的相似之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then for for for those of us who are software engineers but we don't build AI software we we we just you know we use the models we we might invoke the API or we might invoke the trained one. Can you explain to us if you know we moved into the the world of actually building AI applications running them directly on on GPUs may that be Nvidia or now there's AMD or or Google TPUs. What software would we use today? like what is the status quo or what was at least the status quo when you started modular and then what is your vision which I I sense there's a bunch of similarities with like GCC and LLVM here.</p>
</details>

**Chris Lattner:** 是的，绝对是。在 GCC 之前，每个芯片制造商都必须构建自己的软件。这正是今天 AI 软件的形态，因为除了 Modular，没有东西可以接入。每个人都必须构建自己的垂直软件栈。所以当我在谷歌时，我们构建了一个叫做 XLA 的东西，那就是我们构建的，有点像 CUDA，但是是为谷歌 TPU 服务的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Absolutely. So um so before GCC every chip maker had to build their own software say that's literally the shape of AI software today because there is no thing to plug into besides modular. Uh everybody has to build their own vertical software say and so when I was at Google we built a thing called XLA that's the thingy that we built kind of like CUDA but for Google TPUs.</p>
</details>

如果你看苹果，他们有 Metal、MLX 和他们的整个栈。如果你去看 AMD，他们有 Rocm 和他们的整个栈。每个人都必须有自己的垂直化栈，他们共享的代码非常少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you look at Apple they have you know metal and MLX and uh their their whole stack. If you go look at AMD, they have Rockm, their whole stack. Everybody has to have their own verticalized stack and they share very low code.</p>
</details>

**主持人：** 哦，所以这就是为什么我刚刚看到……我和 Anthropic 的一些人聊过，看了他们的招聘网站，我看到他们既在招聘 CUDA 工程师，也在招聘谷歌 TPU 内核工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, so this is why I I I was just looking at uh I talked with some folks at Anthropic and look at their job sites and I saw that they're hiring both CUDA engineers but also Google TPU kernel engineers.</p>
</details>

**Chris Lattner:** 还有 Trinium，那是 AWS 的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Trinium which is the AWS.</p>
</details>

**主持人：** 还有 Trinium。所以他们把同一个模型写了三遍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and Trinium and so they're writing the same models three times over and over again.</p>
</details>

**Chris Lattner:** 取决于他们使用的硬件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Depending on the hardware they do.</p>
</details>

### Mojo 的设计哲学：将编译器的力量交给开发者

**Chris Lattner:** 我们押注于一个两层架构的栈。我们押注于 Mojo，一门全新的编程语言。我们都知道，创造一门新的编程语言是注定要失败的，永远不会成功，你无法让它被采纳，所有这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what we bet on was we bet on a two-level stack. We bet on Mojo a programming language, a brand new programming language. And as we all know, making a new programming language is doomed and like never works and you cannot get it adopted like all all those things.</p>
</details>

**主持人：** 但你有很好的往绩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you have a good track record though.</p>
</details>

**Chris Lattner:** 是的，这实际上只是一个难题。但你必须聪明地去做，我们可以谈谈这个。然后，在此之上，我们说，让我们把这门编程语言设计成可以解决这些问题，并能跨硬件扩展等。但然后，把这些编译器算法放到语言中，这样你作为一个 Mojo 程序员，就能获得编译器的力量，而不需要成为一个编译器工程师。所以，Mojo 真正特别的地方在于，它把力量从编译器中拿出来，交给你，作为一个开发者。因为事实证明，很多人可以写代码，但他们不一定能写编译器。所以这打破了人才问题。现在我们可以有更多的人来构建这些高度自适应、高度可扩展、高度可组合的系统，而这是他们以前做不到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's it's actually just a hard problem. But but you have to be smart about it and we can talk about that. And then um on top of that saying like let's take this programming language and design it so it can solve these problems and scale across hardware etc. But then take these compiler algorithms and put them into the language so that you as a mojo programmer get the power of compilers without having to be a compiler engineer. And so a lot of what makes Mojo really special is it takes power out of the compiler and gives it to you as a developer. Because it turns out a lot of people can write code, they can't necessarily write compilers. And so what this does is it breaks open the talent problem. And so now we can have a lot more people building these very highly adaptive, highly scalable, highly composable systems in ways that they couldn't do before.</p>
</details>

### Mojo 入门：赋能 Python 开发者

**主持人：** 如果我想开始使用 Mojo，除了基础知识之外，比如使用一些更高级的功能，最好的方式是实际租用一个 GPU 或者……现在这些都很容易，然后去尝试实现一个真正需要高性能的算法或程序，开始玩，并理解这些额外的……我能控制编译器的方式吗？或者，对于一个觉得“好吧，我相信这是未来，这很酷，可以在业余时间试验”但目前工作中没有这类问题的人，你会给出什么建议？你会如何在周末开始呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if if if I want to get started with Mojo outside of just the basics which are so like using some of these more advanced features, is is it the best way to actually like rent a may that be a GPU or or or or like some some these days is is pretty easy and and go and try to implement an algorithm a program that actually needs high performance and and start to play and understand these additional you kind of the ways that I can control a compiler or or what would your suggestion be for someone who It's like, okay, Leon believes that this is the future and this is like cool to to to experiment with on their job. They don't currently have a problem like this. How would you go about it on on the weekends, right?</p>
</details>

**Chris Lattner:** 是的。我可以谈谈 Mojo 的酷炫之处。Mojo 是 Python 家族的一员。所以它非常熟悉，易于学习。顺便说一下，有了 AI 编码，现在是学习一门编程语言最容易的时候了。正如你提到的，用 Mojo 做最简单的事情之一就是扩展一个现有的 Python 模块。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, um so the I can talk about what makes Mojo cool. Mojo is a member of the Python family. So it's super familiar, easy to learn. And by the way, with the AI coding, it's easiest time ever to learn a programming language. Just like you mentioned, one of the simplest easy things to do with Mojo is to extend an existing Python module.</p>
</details>

所以，如果你曾经写过 Python，不断构建，它变得越来越大，然后突然变慢了。历史上，你的选择是去用 Rust 或 C++ 重写一大块，然后你必须使用绑定，做这类工作真的很麻烦。Mojo 是你能想象到的扩展 Python 最优美的方式。没有绑定，就像 Swift 和 Objective-C 一样，它们可以原生对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you ever been coding up Python, building and building building, it gets big and big and big and big and suddenly gets slow. Well, historically your option is to go rewrite a big chunk of it in Rust or C++ and then you have to use bindings and it's real kind of a pain in the butt to be able to do this kind of work. Mojo is the most beautiful way to extend Python you can imagine. No bindings just like Swift and Objective C. They they natively spoke to each other.</p>
</details>

**主持人：** 哦是的，没有绑定，因为 Rust 是扩展 Python 的一个流行选择，但需要绑定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh yeah. No bindings because because Rust is is a popular choice to extend Python but with a binding.</p>
</details>

**Chris Lattner:** 是的，但你需要绑定，对吧？所以它非常机械化，你可能会搞错。Mojo 做到了没有绑定，而且还与 pip 包和构建系统集成在一起，一切都集成好了，非常优美和棒。你可以在 CPU 上运行，你不需要任何其他东西。一切都是免费的，尽情去用吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. But you need bindings, right? And so it's very mechanical and you can get it wrong. And so Mojo does that without the bindings, but also integrated with uh pip packages and the build systems all integrated and it's just super beautiful and awesome and you can stay on CPU. You don't need anything. It's all free like go nuts and go do this.</p>
</details>

### AI 时代的编程语言设计哲学

**主持人：** 我一直想问一个问题，因为你构建了几种语言，这个问题经常出现，我问过人们他们想从你这里听到什么，这个问题被重复了很多次。你认为，设计一门新语言，使其易于让大型语言模型（LLM）进行编码，这有任何逻辑吗？比如更好的模式匹配或其他可能是 LLM 强项的属性？如果是这样，这些模式会是什么？这真的很奇怪，我没想过我们会谈论这样的事情，但现在我们应该谈谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One question I I've been meaning to ask uh because you built several languages, this comes up and and I asked folks like what is what are things they'd love to hear from you? And this this this was repeated quite a bit. Do you think there is any logic in having a new language that is designed to make it easy for LLMs to code with and like attributes for example better pattern matching or other things that might be the strength of of LLMs and if so like what would these patterns be? This is really weird like I I would I would have not thought we would talk about things like this but but now we should.</p>
</details>

**Chris Lattner:** 当然，我很乐意谈论这个。我经常被问到，既然 AI 正在编写所有代码，你为什么还要构建一门编程语言？这是用另一种方式问同一个问题，可能更具攻击性。对我来说，我认为为 LLM 优化根本不是正确的做法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. I'm happy to talk about it. And so I often sometimes get asked uh so given the AI is writing all the code, why are you building a programming language, right? Which is another way of asking the same question maybe a little bit more aggro. And so to me, I don't think that optimizing for the LLM is the right thing to do at all.</p>
</details>

因为，回到我们刚才谈论的，重要的事情是阅读代码。顺便说一下，一直都是这样，对吧？代码被阅读的次数比被编写的次数多。AI 使得编写代码比以往任何时候都容易得多。我不认为我们会回到过去。所以，对我来说，编写代码实际上不是关键。关键是阅读它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because go back to what we were just talking about. The important thing is reading the code. Always has been, by the way, right? Code is read more often than it's written. AI has made it way easier to crank out the code than it ever has been. And I don't think we're going back to where we were. So writing the code is actually not the the key thing to me. It's about reading it.</p>
</details>

所以我对 Mojo 和我们正在构建的这些新兴系统的关心，实际上是两件事的结合。一是表达能力。你能否表达硬件的全部能力？是或否？如果答案是否定的，那么你永远也做不到。所以 JavaScript 永远不会是编写 CUDA 内核或 GPU 内核的好方法，它就是不行，因为它无法表达你需要表达的东西。这并不是对它的贬低，它是一个好系统，对吧？但如果那是目标，那么你必须能够做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what I care about with Mojo and with these new emerging systems we're building is is really a combination of two things. One is expressivity. And so can you express the full power of the hardware? Yes or no? Like if the answer is no, then you will never be able to get it. And so JavaScript will never be a good way to write a CUDA kernel or GPU kernel. it just will not because it can't express the things you need to express, right? No, no slide against it. It's a good system, right? But but if if that's the goal, then you have to be able to do that now.</p>
</details>

汇编代码可以表达硬件的全部能力，但这并不是我所提倡的，对吧？与之相伴的另一件事是，你需要可读性，对吧？所以你需要这种结合，表达能力和可读性之间的交集。所以，你能否表达重要的事情，在我们的案例中是性能，然后你能否理解代码？你能否构建抽象？你能否构建可扩展的系统？我认为这个交集是关键。所以，这就是为什么你采用 Python 语法。Python 非常易于阅读，它实际上非常标准，很多人都懂。让我们拥抱它，全力投入。这是件好事。所以 Mojo 拥抱 Python，至少是 Python 的语法，然后说：“好吧，现在让我们修复 Python 的问题”，这基本上是整个实现。让我们替换 Python 解释器和所有那些东西。让我们保留这个好的部分，并使我们能够表达硬件的全部能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Assembly code can express the full power of the hardware and that's not what I'm advocating for, right? The the other thing that goes with it is you need readability, right? And so you need this combination, this intersection between expressivity, the so can you express the important thing in our case performance um and then can you understand the code? Can you build abstractions? Can you build in scalable systems? And that intersection I think is the key thing. And so this is where you take Python syntax for example. Python's super easy to read. It's actually very standard. A lot of people know it. Let's embrace that. Let's go all in on that. That's a good thing. And so Mojo embraces Python and this the syntax of Python at least and says, "Okay, well now let's fix the problems with Python, which is basically the entire implementation. Let's replace the Python interpreter and all that kind of stuff. let's keep this good part and make it so we can express that full power of the hardware."</p>
</details>

有了这个，我认为 LLM 会在处理任何奇怪之处方面继续变得越来越好。我所看到的是，LLM 是学习一门新语言的绝佳方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with that, I think the LLMs will continue to get better and better at dealing with any weirdness. And what I've seen is that the LLMs are an amazing way to learn coding a new language.</p>
</details>

### 尾声：编译器依然很酷

**主持人：** 现在，作为结束，你已经多次提到编译器很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Now to close with you have mentioned that compilers are cool multiple times here.</p>
</details>

**Chris Lattner:** 我承认我有点偏见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I'm slightly biased I admit.</p>
</details>

**主持人：** 当然。但我开始被说服编译器很酷了。对于那些没有构建或使用过编译器的软件工程师，你会给他们一些什么样的指引？比如，“嘿，我想开始了解编译器，也许构建一个。我应该尝试想出一门语言吗？”你会向人们推荐什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. But I I'm getting I'm getting convinced that compilers are cool. For software engineers who have not built or worked with compilers. What are some kind of like like pointers you would give them of like, hey, I'd like to get into like understanding compilers, maybe building one. Should I try to come up with a language? Um like what are some things that you point people to?</p>
</details>

**Chris Lattner:** 是的。我来告诉你我为什么爱上编译器。回到大学，我修了标准的计算机科学课程，基础编程、数据结构、操作系统课、GUI 课等等。我喜欢编译器的地方在于，你构建了项目一。在那个案例中，它是一个叫做词法分析器（lexer）的东西，用来将源代码分词。你必须使用一些数据结构。所以我想，哦，酷，我正在用我学到的东西，不仅仅是如何写代码，还有树是什么之类的。然后你进入第二部分，你在它的基础上构建。所以现在你构建一个解析器，用分词器来决定语言的语法。然后你构建类型检查器，你在前两个的基础上构建。然后你构建下一个东西，你在那些东西的基础上构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, so I'll tell you why why I fell in love with compilers. So, if I go back to university, I was taking the standard computer science program of uh basic programming and then data structures and then like an operating system class and guey class and all this kind of stuff. The thing I love about compilers is that you built project one. And so in this case, it was what's called the lexer, the thing that tokenizes the source code. Um, and you had to use some data structures. So I'm like, oh, okay, cool. I'm using the things I learned, not just how to write code, but what a what a tree is and things like this. And then you get to the second part and you build on top of it. And so now you build a parser, the thing that decides the syntax of the language using the tokenizer. And then you build the type checker. And you build on the first two. And then you build the next thing and you build on those things.</p>
</details>

所以我喜欢编译器这门课的原因是，我得以构建、学习和迭代，然后如果我犯了错误，我必须回去修复它，因为你在不断地往上构建。所以我认为，编译器，特别是在大学环境中，比我经历过的很多其他课程更能反映真实的软件开发，因为很多其他课程最终都是构建一个东西，交上去，扔掉，再构建另一个东西，交上去，扔掉。这就是我爱上它的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what I loved about compiler as a class was that I got to build and learn and iterate and then if I made a mistake I had to go back and fix it cuz you're building higher and higher and higher. And so I think that compilers particularly in the university setting reflects more of like real software development in a way that a lot of other classes I I experienced did not because a lot of the other classes ended up being build build a thing turn it in throw it away build another thing turn it in throw it away and so that's that's why I fell in love with it.</p>
</details>

今天，如果你想学习编译器，比以往任何时候都容易。你可以去 LLVM 网站，那里有一个很棒的教程叫做 Kaleidoscope 教程，是我大概 15 年前写的。Rust 社区里有很多可爱的编译器爱好者，所以现在有很多基于编译器的技术是用 Rust 构建的，这也超级酷。还有书籍和课程之类的。我并不是真的认为每个人都需要成为编译器工程师，但我认为编译器没有得到应有的赞誉，而且事实证明，编译器领域有很多非常好的工作。所以如果它恰好是一个有趣的地方和一组有趣的技术，那么我真的鼓励人们去做，因为我们需要更多的人才进入这个领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh today if you want to learn compilers it's easier than ever you can go to LLVM. There's a great tutorial called the kaleidoscope tutorial that I wrote wonderful 15 years ago or something. It's been a long time ago. The Rust community has a lot of compiler lovely compiler nerds in it and so a lot of compiler based technologies built in Rust these days which is also super cool. Um and so there's uh there's books and lessons and things like this. I don't literally think everybody needs to become a compiler engineer but I think that compilers don't get the credit they deserve and it turns out there's a lot of really good jobs in compilers and so if it happens to be that it's a interesting place and interesting set of technologies then I really do encourage people to do it because there we need more more folks in this field.</p>
</details>

**主持人：** 太棒了。Chris，这次访谈真的非常非常有趣。学到了很多。谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wonderful. Chris, this has been really, really interesting. Learned a lot. Thank you.</p>
</details>

**Chris Lattner:** 是的，也谢谢你的邀请。希望对大家有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, thank you for having me. I hope it was useful.</p>
</details>