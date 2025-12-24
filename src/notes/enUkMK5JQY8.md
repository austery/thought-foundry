---
area: society-systems
category: technology
companies_orgs:
- Linux
- Red Hat
- Google
- Apple
date: '2025-12-11'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Rust
- C
project:
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=enUkMK5JQY8
speaker: The Pragmatic Engineer
status: evergreen
summary: 本文深入探讨了 Rust 语言进入 Linux 内核的进程。尽管面临 C 语言模型、性能和开发者阻力等挑战，Rust 的内存安全特性（尤其在对象生命周期管理方面）正帮助修复特定类型的内核错误，并促使
  C 代码的改进。随着基础设施的完善和开发者意愿的增强，Rust 被视为 Linux 内核演进的关键一步，尤其是在驱动程序开发领域。
tags:
- code
- evolution
- investment
- language
- memory
title: 为何 Rust 正逐步融入 Linux 内核：挑战、机遇与未来
---

### Rust 在 Linux 内核中的现状与初步尝试

关于 Rust 是否会在 Linux 中得到支持，以及未来是否会超越 C 语言进行开发，这是一个值得探讨的问题。事实上，Linux 内核中已经存在约 25,000 行 Rust 代码。在最新的内核版本中，当内核崩溃时，会显示一个二维码，用户可以通过扫描该二维码获取崩溃的详细信息，而生成这个二维码的代码就是用 Rust 编写的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you think Linux at some point uh might support Rust or and you know what what are your your what is your thinking of doing things outside of C?</p>
<p class="english-text">&gt;&gt; So we have 25,000 lines of Rust in the kernel already.</p>
<p class="english-text">&gt;&gt; Oh, we do.</p>
<p class="english-text">&gt;&gt; Okay, awesome.</p>
<p class="english-text">&gt;&gt; Yeah. Um so most of that is just bindings. There's no real functionality.</p>
<p class="english-text">Um in the latest release, um if the kernel crashes, it'll put up a QR code.</p>
<p class="english-text">You can take a picture of it to get the crash jump. That code was written in Rust.</p>
<p class="english-text">&gt;&gt; Oh, nice.</p>
<p class="english-text">&gt;&gt; Um that's in Rest. Um so the rest the perinx developers have been working for a long time. A couple years ago they came to us and said we think we have we think we're ready to do this. Do you want it? And we said yeah let's try this experiment. You're willing to do the work. Who am I to tell no to? Um I mean it's classic.</p>
</details>

### 集成 Rust 面临的挑战：绑定与模型冲突

Rust 语言的引入并非一帆风顺。目前，在 Linux 内核中，编写一个核心组件可能比编写一个驱动程序更容易使用 Rust。这是因为驱动程序需要与内核的各个部分进行交互，包括锁定机制、输入输出、驱动模型、USB 端口等。驱动程序通常需要非常精简，因为它们会消耗内核的许多资源。

在 Rust 中实现这一点，需要在 C 代码和 Rust 代码之间建立一种 **绑定 (Bindings)**：C 代码和 Rust 代码之间的接口层，用于相互调用。这中间存在一个中间层。C 语言的内核在如何处理对象、内存管理以及其内存模型方面，有着非常“固执己见”的设计理念。而 Rust 也有自己一套同样“固执己见”的模型来处理这些问题。这两种模型之间的 **融合 (Meshing)** 是一个巨大的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">&gt;&gt; Yeah. I mean it's it's it's now the problem with Linux and Rust is</p>
<p class="english-text">&gt;&gt; um it would be easier to write a core piece of Linux and Rust than it would be to write a driver. that drivers consume from everywhere in the kernel.</p>
<p class="english-text">&gt;&gt; So you want to talk to locking, you want to talk input and output, you want to talk talk to the driver model, talk to the USB port, all this stuff. Drivers have to can be really tiny because they take resources from the rest of the kernel.</p>
<p class="english-text">In Rust, you need to have a binding between the C code and the Rust code. There's an intermediate layer.</p>
<p class="english-text">The C the kernel in C has these very opinionated model ideas of how it handles objects and how it does memory and how it it has its memory model. Rust has its very opinionated model of how it does this type same idea. This meshing is tough.</p>
</details>

### Rust 代码的复杂性与性能考量

这些融合的绑定代码，对于新的 Rust 开发者来说，可能是极其复杂的，甚至难以阅读。此外，在性能方面，Rust 代码与 C 代码之间仍然存在一些差异。C 语言允许开发者使用一些 Rust 目前尚无法实现的“技巧”。尽管如此，Rust 语言的开发者们一直在努力改进，其中一些核心的 Rust 语言开发者本身就是 Linux 内核开发者，他们一直致力于让 Rust 能够为 Linux 服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">&gt;&gt; This meshing is also the most crazy complex Rust code you've ever seen. So from a new Rust developer like me, I can barely read the bindings, but I trust other people are doing it. Um, so yes, so the trick is we now need to write a binding for every different part of the kernel in order to write a R scope, a rush driver. If you want to do the QR generator, that's simple. That was just one function. you go.</p>
<p class="english-text">&gt;&gt; So over the year, the past couple years, people have been writ bindings to try and do things. We've had a bunch of example drivers like a new disc driver, this writer driver in C versus Rust. It turns out there are still some performance issues with R code versus C code because we can do some tricks in C that they can't do yet in R.</p>
<p class="english-text">&gt;&gt; Yeah.</p>
<p class="english-text">&gt;&gt; Um that's and the tooling and the RS developers are doing it. The core RS developers that the language, some of them are Linux kernel developers. They've always wanted R to be working for Linux. Um the rest model is good.</p>
</details>

### Rust 的内存安全：对象生命周期与错误修复

在 Rust 中，**内存安全 (Memory Safety)** 并不意味着内核不会崩溃。你仍然可以覆盖数据。Rust 的内存安全主要体现在对 **对象生命周期 (Object Lifecycles)** 的管理上，确保你拥有或期望拥有的内存资源，在超出作用域时能够被正确清理。这有助于解决许多“一次性”的、细微的内核错误，例如意外覆盖数组、忘记清理错误路径或忘记解锁锁等。

然而，Rust 并非万能的“银弹”。即使是 Rust 代码，也可能包含逻辑错误，并且可以编写内存不安全的 Rust 代码，从而导致崩溃。例如，一个著名的例子是，尽管 Rust 代码本意是安全的，但由于 C 代码传递的缓冲区大小信息未被正确检查，导致 Rust 代码写入了超出缓冲区边界的数据，从而引发了内存问题。因此，Rust 的内存安全更多地是指对象生命周期和资源管理的安全性，而非消除所有 bug。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Memory safety at our level does not mean that you can't crash the kernel. Uh you can still overwrite things. It memory safety in Rust just means the the memory that you pass around you think you have an ownership of or it isn't an ownership of.</p>
<p class="english-text">&gt;&gt; Y</p>
<p class="english-text">&gt;&gt; and it when things are go out of scope, they'll get cleaned up properly. So I've seen every single kernel bug for the past 18 years. Um half of them will be fixed with Rust.</p>
<p class="english-text">&gt;&gt; It's just it's just going to be fixed with Rust. Um, it's the stupid oneoff bugs. It's the I Oops, I overwrote an array and I didn't realize it by one.</p>
<p class="english-text">Oops, I um forgot to clean up this error path.</p>
<p class="english-text">&gt;&gt; Yeah,</p>
<p class="english-text">&gt;&gt; I forgot to unlock this lock. It's I It's stupid little things like that. There's logic bugs. Of course, you can write logic bugs in Rust.</p>
<p class="english-text">&gt;&gt; You'll always have those,</p>
<p class="english-text">&gt;&gt; right? So, but famously, the code the QR code for that did in Rust that made a QR C passed into the Rust code a pointer to a buffer and the buffer size. the Rust code forgot to look at how big the buffer was and it scribbled right over memory. So you can write memory unsafe code in R just fine and you can crash things in Rust. So memory safety here means it's the safety of object life cycles and things like that. It doesn't mean it's going to remove all bugs. It's not a golden um bullet or anything like silver bullet. But I think yes I think Rust needs to come in because it should be easier to write drivers in this stuff.</p>
</details>

### Rust 带来的积极影响与开发者阻力

尽管存在挑战，Rust 的引入也带来了积极的连锁反应。它迫使开发者更好地记录 C 代码，并促使他们重新思考现有的 C 代码实现方式。例如，在处理设备生命周期和 **引用计数 (Reference Counting)** 等复杂问题时，Rust 提供了更清晰的解决方案，这对于动态设备管理至关重要。

然而，并非所有人都欢迎这种变化。一些核心的 Linux 内核开发者对引入新语言持抵触态度，认为多语言项目会增加复杂性。但这种抵触并非普遍，许多开发者愿意尝试并推动这一进程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a lot of issues with lifetime rules of when you yank out a device, devices are dynamic and dealing with these reference counting of things like that is very tricky to get right. There's parts in the colonel we still do not have it right and we know we don't have it right.</p>
<p class="english-text">&gt;&gt; Rust is forcing us to actually document our C code better</p>
<p class="english-text">&gt;&gt; and it's cleaning up. So if Rust disappeared tomorrow, I've had to clean up code in the driver core. It's like, oh yeah, I guess we can do things better and safer in the C code in order to make Rust easier. Mhm.</p>
<p class="english-text">&gt;&gt; And we have and so it's making us rethink how we do a lot of our existing code in the kernel. To be fair, a lot of core kernel people are very resistant to that. They don't like change, don't like different languages. Um, one core kernel developer said, "I don't like working with a project that has um multiple languages in it just because it's tricky and they are free to do that." Um, we're not stepping on they're not stepping on anybody's toes. Um, a lot of it's miscommunication and a lot of it comes down to people. Again,</p>
</details>

### 实际应用案例与未来展望

在实际应用方面，Red Hat 的开发者们已经开始使用 Rust 编写新的 Nvidia GPU 驱动程序，并提交了相关提案。苹果的 MacBook GPU 驱动程序也部分使用 Rust 编写，虽然尚未合并，但在其分支中运行良好。图形驱动程序中复杂的对象生命周期管理问题，Rust 能够提供更简便的解决方案。

展望未来，预计更多简单的设备驱动程序将采用 Rust 编写，因为它们主要涉及对内存进行读写操作，而 Rust 在这方面比 C 语言更简洁高效。Linux 内核已经具备了支持 Rust 的基础设施，达到了一个“临界点”，新的 Rust 代码将开始涌现。

此外，一些政府的法规也开始要求避免使用 C 这样内存不安全的语言。如果希望 Linux 能够持续成功，就必须进行这种演进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">&gt;&gt; famously in this binding, I wrote the driver core many, many years ago of how drivers worked in the s in the kernel. There had to be a binding for that in Rust.</p>
<p class="english-text">&gt;&gt; I this code I saw I said, "This is horrible. This isn't going to work at all. It's miserable." And um I went and actually met with the developers and we had there's a Rust Linux conference. We sat down. I think they gave a whole presentation just for me. Um turns out I was wrong and they were wrong. we both were wrong. And they were doing crazy things like they had a thousand lines of C Rust code that that I do in two lines of CC code. I'm like, well, why? They're like, well, we didn't want to change the CC code. I'm like, we can change the C code because I just did that because it was easy in C, but if I change that, you get rid of a thousand lines of R. Let's do that. And again, it comes down to, okay, understanding what your problems are, understanding what my problems are, and let's work together. And now we have bindings in the kernel that you can actually write some drivers with. And the Red Hat developers are starting to write the new Nvidia GPU drivers in Rust and they're starting putting the proposals out there. The Apple um um GPU drivers are for the Apple MacBooks are written in Rust. Those patches are not merged, but they're written in Rust and Prove on on a fork. Um that works great. Um there's a whole bunch of crazy object life cycle issues with graphics drivers and Rust makes it a lot easier for them to do. Um, I think you'll see a lot more of the driver simple stupid drivers for hardware devices being written in Rust because all you want to do is read and write to some random memory bits and it's really easy to do that in Rust and you can do it in actually less code than you can do it in C code.</p>
<p class="english-text">&gt;&gt; Yeah.</p>
<p class="english-text">&gt;&gt; And I think that's we now have the infrastructure in there. So I think we've hit the tipping point. We'll start seeing new stuff in there and we need to do that. I mean there's mandates from governments that you can't use memory unsafe languages like C and products.</p>
<p class="english-text">&gt;&gt; Yeah. And if I want to see Linux to succeed, which I do, we're going to have to change. And I can say going forward, if you want to write in rest, you can write in rest. Now, that being said, we still have 40 million lines of C code.</p>
<p class="english-text">Yeah.</p>
<p class="english-text">&gt;&gt; So, we have some very, very good developers out there working on mitigating the problems we have in C. We now have bounds checking for our stuff. We now have other, we call them seat belts and airbags that protect your C code from doing stupid things. And we working with the compiler authors to add new extensions to C and make things safer for the C code because we want to protect the code that we have today because you're not going to rewrite code in Rust. Don't worry about that. Um Google famously published something recently saying over the past couple years we've written our new code in Rust and we got uh overwhelmingly more secure because we didn't touch the old code and bugs degrade over time. There's still going to be bugs in the older stuff, but most bugs happen in your new code, not in your old code.</p>
</details>

### 应对 C 代码的风险与持续演进

尽管 Rust 带来了新的可能性，但 Linux 内核仍有约 4000 万行 C 代码需要维护。因此，社区也在努力改进 C 代码的安全性，例如添加边界检查、编译器扩展以及其他“安全带”和“安全气囊”机制，以保护现有 C 代码免受潜在的危险操作。Google 的经验表明，新代码使用 Rust 编写可以显著提高安全性，而无需重写旧代码。

总而言之，Rust 的引入是 Linux 内核持续演进的一部分。它并非要取代所有 C 代码，而是作为一种更安全、更现代的替代方案，特别是在需要高安全性的新开发领域。开发者们正通过实际行动证明 Rust 的可行性，一步步推动着内核的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">&gt;&gt; That's awesome. I'm I'm I'm sensing you're you're excited about Russ and I I it's also just nice to see the evolution.</p>
<p class="english-text">&gt;&gt; Yeah, it's evolution and see what happens and if it fails tomorrow, we can rip it out and what but we have developers willing to do this work for us.</p>
<p class="english-text">&gt;&gt; It's not intruding on other people's stuff.</p>
<p class="english-text">&gt;&gt; Well, then I I I think it does go back to what you said earlier is is it's feel I understand that a big part of Linux is like show the work like if if if it works and and same thing, you know, it sound like that's how Rust started and how it's also how it's progressing. People are showing that it works. They're proving that it works, it solves their problem. Yeah. It maybe even works better for them. And then, you know, step by step.</p>
<p class="english-text">&gt;&gt; Yeah. Like people are like, well, why not Zigg or Hair? Those are other good languages. Um, I'm like, that's great, but nobody's proposed.</p>
<p class="english-text">&gt;&gt; Yeah. [laughter]</p>
<p class="english-text">&gt;&gt; So, yeah, they want to do that. And to be fair, I think those developers who work on those languages don't care about Linux, which is fine. They'll not you.</p>
</details>