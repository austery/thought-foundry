---
author: The Pragmatic Engineer
date: '2026-02-12'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=ZggUn2mNqMU
speaker: The Pragmatic Engineer
tags:
  - programming-language-design
  - null-safety
  - language-interoperability
  - ai-coding
  - software-evolution
title: Kotlin语言的诞生、演进与AI时代编程的未来
summary: 本期访谈深入探讨了 **Kotlin** 语言的诞生、发展及其在 **Android** 平台上的崛起。**Kotlin** 的创造者 **Andre Brela** 分享了该语言如何借鉴 **Scala**、**C#** 和 **Groovy** 等语言的优点，并着重解决了 **Java** 冗长、缺乏空安全等痛点。他详细阐述了 **Kotlin** 与 **Java** 之间实现无缝互操作性的巨大挑战与解决方案。此外，**Andre** 还介绍了他的新项目 **CodeSpeak**，一种基于英语、为AI时代设计的编程语言，旨在大幅减少程序员所需的代码量，并探讨了AI对软件工程的深远影响及未来趋势。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - JetBrains
  - Google
  - Borland
  - Microsoft Research
  - Oracle
  - Sun Microsystems
  - Sonar
  - WorkOS
  - Statsig
  - OpenAI
  - Cursor
  - Perplexity
  - Vercel
  - Notion
  - Brex
  - Atlassian
products_models:
  - Kotlin
  - Java
  - Scala
  - Groovy
  - C#
  - Python
  - Ruby
  - JavaScript
  - Swift
  - MPS (MetaProgramming System)
  - Android
  - CodeSpeak
  - LLMs
  - SonarCube
  - Android Studio
media_books:
  - Zen and the Art of Motorcycle Maintenance
status: evergreen
---
### Kotlin的诞生背景

**主持人**: 为什么在AI已经可以编写大部分代码的今天，还会有人去创造一门新的编程语言？**Andre Brela** 给出了一个有趣的答案。**Andre** 是 **Kotlin** 的创造者，这门语言运行在数十亿的 **Android** 设备上，是全球增长最快的语言之一。今天，我们将探讨 **Andre** 如何通过借鉴 **Scala**、**C#** 和 **Groovy** 的思想来设计 **Kotlin**，以及他为什么认为遗漏三元运算符是他最大的遗憾之一。**Kotlin** 如何与 **Java** 无缝互操作是一项巨大的工程，以及如何实现。在 **Google** 宣布将 **Kotlin** 作为 **Android** 官方语言后，**Kotlin** 的采用率飙升，甚至让 **Andre** 和 **Kotlin** 团队都感到惊讶。**Andre** 的新项目 **CodeSpeak** 是一门基于英语构建的新编程语言，专为AI编写大部分代码的时代设计。如果你对编程语言的未来感兴趣，并且想听听一位创造了当今最受欢迎语言之一的人的见解，那么本期节目就是为你准备的。本期节目由 **Statsig** 赞助，**Statsig** 是一个用于特性标志、分析、实验等的统一平台。请查看节目说明，了解更多关于他们以及我们本季的其他赞助商 **Sonar** 和 **Work OS** 的信息。**Andre**，欢迎来到播客。

<details>
<summary>Original English</summary>

**主持人**: Why would anyone create a new programming language today if AI can already write most of your code? **Andre Brela** has an an interesting answer. **Andre** is the creator of **Cotlin**, a language that runs on billions of **Android** devices and is one of the fastest growing languages in the world. Today we cover how **Andre** designed **Cotlin** by deliberately borrowing ideas from **Scala**, **C** and **Groovy**, and why he considers leaving out the turnary operator one of his biggest regrets. Why making **Cotlin** interoperate seamlessly with **Java** was a gigantic undertaking and what it took to get it done. How **Cotlin** adoption went through the roof after **Google** announced it making it the official language for **Android** in a move that even took **Andre** and the **Cotlin** team by surprise. **Andre's** new project **Codespeak**, a new programming language built on English designed for an era where AI writes most of the code. If you're interested in the future of programming languages from someone who built one of the most loved languages of today, then this episode is for you. This episode is presented by **Statsig**, the unified platform for flags, analytics, experiments, and more. Check out the show notes to learn more about them and our other season sponsors, **Sonar** and **Work OS**. **Andre**, welcome to the podcast.

</details>

**Andre**: 你好，谢谢邀请。

<details>
<summary>Original English</summary>

**Andre**: Hello. Uh, thank you for having me.

</details>

**主持人**: 我很少遇到像你这样设计出对移动和后端都如此有影响力的语言的人。那么，我们从头开始说起吧。

<details>
<summary>Original English</summary>

**主持人**: It is not often that I meet someone who designed such an influential language across mobile across back end. So, let's start with how did it all started? Okay,

</details>

**Andre**: 好的，这有点混乱，因为我当时在圣彼得堡上学，学习计算机科学，但我并不确切知道自己想成为什么样的程序员。我知道我想成为一名程序员，然后，在大学期间的某个时候，我开始在学校教编程，这是我的一大爱好。后来，我得到了 **Borland** 的一份工作，从事一些开发工具的开发。那很棒，**Borland** 是一个非常响亮的名字，但他们在我加入后不久就倒闭了，我希望不是因为我。我当时在 **UML** 时代的末期工作，所以我们正在 **UML** 领域开发一些开发工具。那非常有趣，我学到了很多。但后来 **Borland** 倒闭了，我又回去全职教书，然后开始读博士。所有这些都不是真正计划好的。在我的博士研究中，我致力于**领域特定语言 (DSL)**，我对语言普遍感兴趣，尤其是类型化语言。我一直好奇这些东西是如何工作的，但从未真正深入。当我开始研究 **DSL** 时，我变得稍微认真了一些，尽管我的博士研究一团糟，因此我从未答辩。但在某个时候，有人联系了我。实际上，是当时负责 **Borland** 圣彼得堡分公司的人，那时他已经在 **JetBrains** 工作了。他联系了我，当时我在爱沙尼亚的 **Tarto** 待了一年，作为访问博士生，那是一段美好的时光。所以他联系我，邀请我下次访问圣彼得堡时去 **JetBrains** 办公室，谈谈关于语言的事情。

<details>
<summary>Original English</summary>

**Andre**: so that was a little messy because I went to school uh back in **St. Petersburg** uh started studied computer science and I didn't really know exactly what kind of programmer I wanted to become. I knew I wanted to be a programmer and then at some point while I was still in the university I started teaching uh programming in school and uh it was a big passion hobby of mine and then at some point I got a job with **Borland** and worked in some developer tools you know that was awesome like **Borland** was a very big name and you know they they went under pretty soon after I joined and I hope it's not because of me. Yeah, but but I worked on the it was at the tail end of the **UML** era. So, we were doing some developer tools in the **UML** space. That was very interesting. I learned a lot. But then **Borland** went under and I went back to teaching full-time and then I started PhD school and you know all that was kind of not really planned out and uh in my PhD I was working on **domain specific languages** and generally I was interested in languages. was something I was curious about and specifically typed languages were interesting. I was always curious about how these things worked but never really serious. When I started looking into **DSLs**, it was uh slightly more serious, although my PhD was a mess and I never defended because of that. Uh but at some point um you know some someone reached out. It was actually a person who was in charge of the **Orland St. Petersburg** and by that time he was already at **JetBrains** and he reached out uh to me while I was in **Tarto** in **Estonia**. I was there for a year on as a visiting PhD student. It was a lovely time. Um so he he reached out and invited me to when when I next visited **St. Petersburg** to visit the **JetBrains** office there and talk about something about languages. What I thought was that there was about the this project called **MPS Metarogramming System** that **JetBrains** had. I knew about it. It's about **DSLs**. I worked on **DSLs**. You know, it was generally something like plausible that they would be interested in talking about stuff like that. But it turned out I was completely wrong. And what they wanted was to start a new programming link.

</details>

**Andre**: 我对此完全没有准备。

<details>
<summary>Original English</summary>

**Andre**: And I was completely unprepared for that.

</details>

**Andre**: 我从未想过要做这样的事情，我的第一反应是：你不需要一门新语言。基本论点是 **Java** 生态系统需要一门新语言，**Java** 过时了等等。我们可以多谈谈这个，那是2010年，我想是的，2010年。我当时想，但是有其他语言啊，大家过得都挺好的，为什么需要这样做呢？这次对话实际上非常有启发性，因为 **JetBrains** 的那些人只是向我解释了实际情况，当时 **Java** 确实存在一个大问题，它并没有真正进化，而且已经很长时间没有进化了。

<details>
<summary>Original English</summary>

**Andre**: like I you know I've never thought about doing something like this and my first reaction was you don't do a new language like you don't need it and the the the basic pitch was uh that the **Java** ecosystem needs a new language **Java** is outdated so on so forth we can talk a little more about this it was 2010 I think yeah 2010 um yeah and uh I was like but there there are other languages like everybody's doing fine why do you need to do that and And this conversation was actually a very insightful one because uh the guys at **J brains** they uh simply explained to me how the things actually were and you know it was it was a big problem by that time. So **Java** didn't really evolve uh and hadn't been for for a long time.

</details>

**主持人**: 原因是什么？你能为我们这些不了解内情的人解释一下吗？

<details>
<summary>Original English</summary>

**主持人**: What was the reason behind it? Can you take us back for those of us who are not in the ins and outs? Yeah. So, uh the

</details>

**Andre**: 好的，到2010年，**Java** 的上一个主要版本是2004年发布的 **Java 5**。

<details>
<summary>Original English</summary>

**Andre**: last major version of **Java** uh by 2010 was **Java 5** that was released in 2004.

</details>

**主持人**: 哦，一门六年前的语言。

<details>
<summary>Original English</summary>

**主持人**: Oo. Six year old language.

</details>

**Andre**: 是的。从那时起，虽然有更新，比如 **Java 6** 对语言本身没有任何改变，然后 **Java 7** 也只做了微小的改动。与此同时，其他语言却在发展，尤其是 **C#** 进展非常顺利。到2010年，**C#** 已经拥有了所有好东西，比如 **Lambda** 表达式、高阶函数以及所有那些很棒的功能。还有 **getter** 和 **setter** 以及许多其他让语言更友好的特性。而 **Java** 感觉就像停滞不前。当时有一个为 **Java** 开发 **Lambda** 表达式的项目，但它一直在进行中，很长时间都没有发布，直到2014年才问世。这就是当时的情况。生态系统并没有停滞不前，因为其他人也在构建语言，比如 **Scala** 和 **Groovy**。**JetBrains** 的人当然了解 **Scala** 和 **Groovy**，他们为这些语言构建了工具。通常，为某种语言构建工具时，也会用这种语言来构建工具。所以 **Scala** 插件是用 **Scala** 构建的，**JetBrains** 也大量使用了 **Groovy**。所以他们了解这些语言存在的问题。这两种语言各有其独特之处，都非常有趣和优秀，但他们看到了市场机会，因为 **Groovy** 太动态化了，离主流、大规模生产的核心应用太远了，动态语言基本不适合那种场景。

<details>
<summary>Original English</summary>

**Andre**: Yeah. And since then there there were updates. There was **Java 6** that made no changes to the language as at all. And then there was **Java 7** that made minor changes. In parallel there there were things that that were happening in other languages, especially **C** was progressing very well. And by 2010, **C#** had all the nice things. There already were **lambdas** like horror functions and and all that nice stuff. There were **getters** and **setters** and and many other things that made the language much nicer. And **Java** was felt like it was standing still. And there was a project uh to to work on **lambdas** for **Java**, but that what was in the works and had been in the works for a long time and only came out in 2014. So that was the situation and uh the the ecosystem didn't stand still in the sense that other people were building languages and there was **Scala** there was **Groovy** and of course people at **J brains** knew both **Scala** and **Groovy** they built tools for them. It's traditional to build your tools in the language you're building uh the tools for. So the **Scala** plug-in was built in **Scala** and there was a lot of **Groovy** used **JetBrains** as well. So they knew what the issues were with the language and both languages are very interesting and very good in their own ways but they saw an opportunity in the market because **Groovy** was too dynamic and too far from hardcore mainstream large scale production because dynamic languages are not for that.

</details>

**主持人**: 动态语言的用途是什么？它们的优势和最佳使用场景是什么？

<details>
<summary>Original English</summary>

**主持人**: What are dynamic languages for what are their strengths and like best use cases?

</details>

**Andre**: 好的，我想如果你看像 **Java**、**Kotlin** 和 **Scala** 这样的静态类型语言，与 **Python**、**Ruby**、**JavaScript** 和 **Groovy** 这样的动态语言之间的权衡，动态语言非常容易上手，可以很快地构建出一些可用的东西，因为语言本身对你的限制没那么多。有句话说，没有什么能像编译器一样限制程序员的想象力。

<details>
<summary>Original English</summary>

**Andre**: So the trade-off I guess if you look at a like a statically typeyped language like **Java** and **Cotlin** and **Scala** for example versus dynamic languages like **Python** and **Ruby** and **JavaScript** and uh **Groovy**. Uh in dynamic languages it's very easy to start and build something working very quickly because basically the language is not in your way as much. There's this saying that nothing limits the imagination of a programmer like a compiler.

</details>

**Andre**: 如今这可能有所改变，这也是我目前正在研究的一部分，但在过去，这完全是事实。你知道，构建一门好语言的艺术就是以一种好的方式限制用户。是的，但在任何情况下，动态语言的情况是，它们在初期对用户更友好，但当项目规模扩大时，你就会在进行大规模重构时遇到麻烦。你很难确保所有东西都能协同工作，你需要进行更多的测试，并依赖其他类似的东西，而不是静态语言。静态语言有精确的重构工具和其他东西，可以确保至少某些类型的问题不会发生。这就是为什么，至少在我们当时看来，如果我们要为大型项目、大型团队构建一门语言，它必须是一门静态语言。

<details>
<summary>Original English</summary>

**Andre**: And you know this may be changing nowadays a little bit and this is in part what I'm working on now but um back in the day was completely true. You know the the the whole art of uh making a good language was to restrict the user in a good way. Uh yeah, but in any case, the the situation with dynamic languages is that they are much more user friendly in the beginning, but then when the project scales, you have trouble making large refactorings. You have trouble making sure that everything works together. where you need to do a lot more testing and rely on other things like that as opposed to static languages where you have uh you know precise refactoring tools and and other things that can make sure that at least a certain class of problems just doesn't happen. And you know this is why in at least in our mind back then it was absolutely clear that if we're building a language for uh large projects, big teams so on so forth it has to be a static lang

</details>

**主持人**: 静态语言。是的。

<details>
<summary>Original English</summary>

**主持人**: static one. Yes.

</details>

**Andre**: 是的。所以对于 **Groovy** 来说，性能是一个大问题，因为 **Groovy** 是在一个非常静态的运行时之上构建动态语言的。所以那里有很多矛盾。这是 **Groovy** 方面的问题。至于 **Scala**，**Scala** 是一门很棒的静态语言，功能极其强大，拥有大量好点子，但它也有自己的问题。它非常依赖隐式转换，例如，我曾花一个小时调试一行 **Scala** 代码，试图弄清楚它在做什么，就因为太复杂了。而且编译器非常慢，还存在稳定性问题，许多东西对很多工程师来说不够易用。所以从 **JetBrains** 使用 **Scala** 的经验来看，我的同事们基本明白它不会改变整个行业，尽管 **Scala** 得到了广泛采用。再次强调，**Martin Odersky** 是一位伟大的语言设计师。

<details>
<summary>Original English</summary>

**Andre**: Uh yeah. So with **Groovy** that was a big issue performance as well because **Groovy** was building a dynamic language on top of a very static runtime. So there was quite a bit of tension there. Uh so that was in the **Groovy** side and the **Scala** side. **Scala** is a wonderful static language and incredibly powerful and with tons and tons of good ideas but it had its own problems. It relied very heavily on implicit for example and I have a history of debugging one line of **Scala** for an hour to try and figure out what it does just because you know it was pretty complicated and also the compiler was very slow and there were issues of stability and many many things were just not accessible enough for for a lot of engineers. So from the experience of using **scala** **jet brains** my colleagues basically understood that it's not what's going to change the industry although **scala** got a lot of adoption and again like **Martin** and **Derki** is a great language designer you know and and uh

</details>

**主持人**: 我认为它最大的用例之一是旧版 **Twitter**，很多都是用 **Scala** 构建的，并且它们扩展到了庞大的规模。

<details>
<summary>Original English</summary>

**主持人**: I think one of the biggest use cases was old **Twitter** a lot of it was built on **scala** and they scaled to however you know massive scale etc

</details>

**Andre**: 我想 **LinkedIn** 也是。是的，所以在任何情况下，当其他语言开创先河时，总是非常好的，然后你可以在它们的成功和失败之上进行构建，我们基本上就处于这样的位置。所以 **JetBrains** 的人提出的论点是，存在一个机会窗口。人们需要这种语言。我们 **JetBrains** 是一家能够真正推出一门语言并使其成功的公司，因为我们能够接触到用户。我们拥有他们的信任。我们可以制造出好的工具。这又是 **Scala** 的另一个问题。例如，当时为 **Scala** 构建工具非常困难。现在 **Scala 3** 对工具更友好了。但那时简直是噩梦。就像我说的，如果一门静态语言不太复杂，你就可以进行精确的重构，但有些语言特别具有挑战性。所以当时的 **Scala** 和 **C++** 在制作精确工具方面极具挑战性。这就是基本的推销，我很快就明白他们是对的，这值得一试，因为它并非完全无望，并非完全没有机会。我不知道我们是否能成功。就在那时，我们实际上在白板上勾勒出了一些初始功能。

<details>
<summary>Original English</summary>

**Andre**: and I think **LinkedIn** as well. Yeah, so in any case uh these were you uh it's always very nice when other languages uh kind of pioneer things and then you can build on top of uh their successes and failure and we were in that position basically. So the the argument that people at **JetBrains** were making uh was basically that uh there is a window of opportunity. People need this language. We **JetBrains** are the company who can actually put out a language and make it successful because we have access to the users. We have their trust. We can make good tools. And it was another issue with **Scala**. For example, it was very difficult to build tools for **Scala** back then. Now **Scala 3** is more tooling friendly. But back then it was a nightmare. Like I said that you know if if you have a static language you can't have precise refactorings if the language is not too complex and you know some languages are particularly challenging. So **Scala** back then and **C++** were incredibly challenging to make precise tools for. So, and that was that was the basic pitch and I quickly understood that yeah, they were right and this was something that was worth a shot in the sense that it was not completely hopeless, not completely dead in the water. I had no idea if we could pull it off. It's it was then when we actually sketched like some initial features on the whiteboard

</details>

**主持人**: 因为 **JetBrains** 通常是由工程师运营的。请记住 **Andre** 关于 **JetBrains** 真正由工程师运营的观点。这是因为我恰好认识另一家也由工程师运营的公司，那就是我们的本季赞助商 **Sonar**。如果说什么时候我们需要真正的工程师，那就是现在。随着 **AI** 编码助手改变了我们构建软件的方式，代码生成的速度比以往任何时候都快。但工程基础仍然很重要。我们仍然需要验证所有这些新的 **AI** 生成代码的质量、安全性、可靠性和可维护性。这是一个棘手的问题：如何在不承担巨大风险的情况下获得 **AI** 的速度？**Sonar**，**SonarCube** 的制造商，对此有一个非常清晰的框架：先放手，再验证。放手的部分是让你的团队自由使用这些 **AI** 工具进行创新和快速构建。验证的部分是必不可少的自动化防护措施。它是独立的验证，检查所有代码——无论是人工还是 **AI** 生成的——是否符合你的质量和安全标准。帮助开发人员和组织领导者在充分利用 **AI** 的同时，仍然保持高质量、高安全性和高可维护性，是即将举行的 **Sonar Summit** 的主要主题之一。这不仅仅是一个用户大会。这是开发人员、平台工程师和工程领导者齐聚一堂，分享新时代实用策略的地方。我很兴奋能分享我也将在那里发言。如果你正在努力弄清楚如何在不牺牲代码质量的情况下采用 **AI**，请加入我们的 **Sonar Summit**，查看议程并注册参加3月3日的活动，请访问 **sonarsource.com/pragmatic/onarsummit**。

<details>
<summary>Original English</summary>

**主持人**: just because **JetBrains** is generally run by engineers. Hold that thought from **Android** on how **JetBrains** is genuinely run by engineers. This is because I happen to know another company also run by engineers. **Sonar**, our season sponsor. If there's a time when we need true engineers, it's now. As **AI** coding assistants change how we build software, code is generated faster than before. But engineuring basics remain important. We still need to verify all this new **AI** generated code for quality, security, reliability, and maintainability. A question that is tricky to answer. How do we get the speed of **AI** without inheriting a mountain of risk? **Sonar**, the makers of **SonarCube**, has a really clear way of framing this. Vibe then verify. The Vibe part is about giving your teams the freedom to use these **AI** tools to innovate and build quickly. The verify part is the essential automated guardrail. is the independent verification that checks all code human and **AI** generated against your quality and security standards. Helping developers and organizational leaders get the most out of **AI** while still keeping quality, security, and maintainably high is one of the main themes of the upcoming **Sonar Summit**. It's not just a user conference. It's where devs, platform engineers, and engineering leaders are coming together to share practical strategies for this new era. I'm excited to share that I'll be speaking there as well. If you're trying to figure out how to adopt **AI** without sacrificing cold quality, join us at the **Sonar Summit** to see the agenda and register for the event on March the 3rd, head to **sonarsource.com/pragmatic/onarsummit**.

</details>

**Andre**: 所以，我交谈过的每个人都对 **IDE** 和所有东西以及新的编程语言非常了解。我们进行了一次非常技术性的讨论。我不记得我们讨论的所有功能，但 **Kotlin** 中扩展的当前语法已经存在了。我不记得我们为什么特别关注扩展，但它就在那里。所以，从第一天起，我们基本上就是基于其他语言的思想进行构建的，比如扩展显然来自 **C#**。是的。所以那是一次非常激动人心的对话。

<details>
<summary>Original English</summary>

**Andre**: So, everybody I talked with uh were deeply in the in the weeds with with **IDs** and everything and new programming languages very well and you know, we had a very technical discussion. So I don't remember exactly all of the features we're talking about but the current syntax for extensions in **Cotlin** was already there. Uh and I don't remember why exactly we focused on extensions but it was there. So you know from day one we were basically building on top of ideas from other languages like extensions obviously came from **C**. Yeah. So it was it was a very exciting conversation

</details>

**Andre**: 但我当时没有做决定，因为我在 **Tarto**，需要完成那里的工作，我花了几个月才完成。然后我来到圣彼得堡待了一个月，因为之后我计划在雷德蒙的 **Microsoft Research** 实习。所以我要去西雅图待三个半月。我当时想，好吧，伙计们，我有一个月的时间可以在办公室工作，我们可以尝试勾勒一些东西，但之后我会去 **Microsoft**，然后我再决定是否全身心投入。事后看来，我最终做出了正确的决定。在那一个多月的时间里，我过得很愉快。我与办公室里的人一起工作，主要是和 **Max Trafimuk**。那真是不可思议，我们进行了非常棒的讨论。我今天早上还见到了 **Max**，那段时光很棒。然后我去了西雅图，在那里做了完全不同的事情。**Microsoft Research** 有非常棒的研究人员。在那里工作，我第一次接触到顶尖的学术水平，非常有启发性。但之后我有点明白了问题所在，那就是我是否想追求学术生涯，我感觉自己并不适合，也不确定自己能否成为一名优秀的独立研究员，或者我必须追随别人的脚步，与此相对的是，做一件疯狂的事情，在这里构建我自己的语言。我当时想，好吧，我要做这件疯狂的事情。

<details>
<summary>Original English</summary>

**Andre**: but I didn't make a decision then uh because I I was in **Tarto** and I needed to finish there and it took me a few months to finish and then I came to **St. Petersburg** for one month because after that I had a an internship scheduled with **Microsoft Research** in **Redmond**. So I was going to **Seattle** to stay there for like three and a half months and I was like okay guys so I have this month I can work in the office and we can try to sketch things but then I'll go into **Microsoft** and then I will decide whether I commit or not which in hindsight I mean um well I made the right decision in the end. I had a great time uh for for this month or so um I worked uh with the guys in the office. It was mostly **Max Trafimuk** we were working with and it was incredible like we had such great discussions and I I actually saw **Max** this morning and uh it was like it was great time. So then I went to **Seattle** did something completely different there. **Microsoft Research** saw really great researchers. Uh working there actually was exposed to like the top-notch level of academia for the first time was very insightful. But after that I kind of realized what the question was whether I want to sort of try to pursue an academic career which you know I didn't feel like I was really built for that and was not sure whether I can be like a good researcher on my own or I'll I'll have to follow in somebody else's footsteps uh versus like do a crazy thing and build my own language here. I'm like okay I'm doing the crazy thing.

</details>

**主持人**: 对于我们这些工程师来说，大多数人都没有从头开始构建过一门语言，你是怎么开始的？比如说，我自己知道如何编写代码，我知道如何打开编辑器，我知道如何编写“Hello World”，以及更复杂的应用程序，甚至更复杂的。一门语言是如何开始的？

<details>
<summary>Original English</summary>

**主持人**: So for those of us engineers which will be the majority who have not built a language from scratch, how do you start with it? Like you know we we know speaking for myself I know how to write code. I know how to open the editor. I know how to write hello world and a more complex app and even more complex one. How does a language start?

</details>

### Kotlin的早期设计与开发

**Andre**: 在我们的案例中，我们基本上讨论了几个月。所以，我想不是每个人都这样，但我认为最好的方式是与人交谈，而当时的环境非常理想，因为我们基本上与 **Max** 持续讨论了很多个月，我在 **JetBrains** 内部做了几次演示，其中一些幻灯片保留了下来，所以我可以看到，包括我幻灯片中的拼写错误，那时我的英语还没那么好，你可以通过那些幻灯片看到一些演变。我想其中一个演示有录音。所以我们当时基本上做了一段时间的白板设计，在 **JetBrains** 做这件事最棒的地方在于，有很多人对如何构建一门语言没有太多意见，但他们对程序员面临的问题以及他们喜欢和不喜欢其他语言的哪些方面有很多看法。所以我从其他人那里得到了大量的输入，而且都是非常优秀的人。这很有帮助。我真的不认为我当时意识到了那个环境有多么特别。我当时26岁，说实话。我对事情通常是如何完成的完全没有概念。

<details>
<summary>Original English</summary>

**Andre**: In our case we basically talked a lot for a few months. So it's I think not everyone is like that but I think the best when I'm talking to people and this was the ideal environment because we were basically discussing things with the **Max** constantly for many months and there were a few presentations internal that I made at **J brains** and some of the slides survived so I can see including my spelling mistakes in those slides my English wasn't as good then and you can you can see some some of the evolution through those slides and I think there's a recording of one of those presentations. So we were basically doing whiteboard design for some time and the great thing about doing this at **JetBrains** was that there were a lot of people with opinions about not so much how to make a language but what problems do programmers face and what they like and don't like in other languages. So I had a tons of tons of input from other people and very good people. So that helped. And I really I don't think I realized how special that environment was back then. Like I was 26 to be clear. And I had no idea how things were done in general.

</details>

**Andre**: 但不知何故，这些人就是信任我。我不确定他们这样做是否非常理性。结果是好的，但我不确定我会推荐任何人这样做。

<details>
<summary>Original English</summary>

**Andre**: But somehow these people just trusted me. I I'm not sure it was very rational on their part. worked out, but I'm not sure I would recommend anyone to do this.

</details>

**主持人**: 那么，在最初的几个月里，我是否可以理解为你们在白板上勾勒并写下了你们希望这门语言如何演变？你们写下了将会有哪些功能，或者你们是如何构想的？

<details>
<summary>Original English</summary>

**主持人**: And so in the first few months, do I understand that you kind of whiteboarded and you kind of wrote down how you want this language to evolve? You kind of, you know, like wrote out like we're going to have these features or how can we imagine?

</details>

**Andre**: 我想最简单的解释方式是这样的。我们基本上是根据 **Java** 的痛点出发的，当时有很多痛点，而且在社区和 **JetBrains** 内部都有大量使用 **Java** 的经验。我们不断列出我们想要解决的问题，我提出了一些想法，其他人也提出了关于如何解决问题、什么是实际问题、什么我们不关心等等的建议。有一段时间，我只是把这些零散的碎片放在桌子上，它们并没有拼凑在一起。然后，在某个时候，我们开始把它们拼凑起来，我很多时候都是在脑子里做这些，这不是最好的方式，但这是我当时知道如何做的方式。当时也有一些疯狂的想法，我们认为很重要，例如，我当时想实现完全的多重继承。

<details>
<summary>Original English</summary>

**Andre**: I guess the easiest way to explain this would be like this. So we basically went off what the pains were with **Java** and there were quite a few and and there was a lot of experience of using **Java** uh across the community and inside **JetBrains** and we kept making lists of things we wanted to fix and I came up with some ideas and some other people suggested other ideas about how things can be fixed and what is an actual problem and what we don't care about and so on so forth. uh and for some time I was just you know pieces of the puzzle basically laid out in a table without fitting together and then at some point we started fitting them together and I was just doing a lot of that in my head which is not the best way but this is how I knew how to do it. There were also some crazy ideas uh that we thought were important back then for example I wanted to implement **multiple inheritance** fully fledged **multiple inheritance**.

</details>

**主持人**: 嗯。那是个愚蠢的想法。

<details>
<summary>Original English</summary>

**主持人**: Mhm. which was a dumb idea.

</details>

**主持人**: 多重继承是指一个类可以继承多个类，对吗？而且你必须处理冲突解决和各种边缘情况，对吗？

<details>
<summary>Original English</summary>

**主持人**: Multiple inherits meaning that a class can inherit from like several classes. Yeah. And and you you have to take care of like conflict resolution and all sorts of edge cases,

</details>

**Andre**: 是的。所以，实际的挑战与其说是方法上的冲突解决，不如说是状态的初始化，构造函数真的很难处理。实际上是 **JetBrains** 之外的某个人向我解释说那是一个非常糟糕的想法，我非常感谢他们。是的，所以，当时也有一些疯狂的想法，其中一些随着我们讨论或原型设计而逐渐被放弃。我想我大概在六个月后才开始编写代码，也许更早一点。我从解析器开始。实际上，以这种方式开始一门语言也非常独特，因为最初的想法不是从编译器开始，而是从 **IDE** 插件开始。我首先在编辑器中实现它，你知道，**IDE** 插件与编译器的前端有很多共同之处，所以这并非完全疯狂。我当时非常依赖 **IntelliJ IDEA** 中可用的基础设施，特别是所有的解析基础设施，它非常棒。**IntelliJ IDEA** 中的解析基础设施比世界上任何其他东西都好，因为它是 **IDE** 的核心，必须极其快速和健壮。但后来，一位比我更了解基础设施的人，**Dmitry Jemerov**，不得不将那部分代码分离出来，使 **Kotlin** 编译器能够独立运行。他是一位了不起的工程师。他可能是重构大型代码库，然后从一个已经有十年以上历史的代码库中提取出某个部分的最佳人选之一。所以我们从这个 **IDE** 插件开始。我想 **Max** 写了骨架，我实际插入了解析器和所有东西。那是一个有趣的故事，因为它非常互动。所以我可以展示这门语言，就好像它已经存在一样，因为它有一些工具，但我在最初无法编译任何东西。这实际上是试验语法的一个非常好的方式。但很快，我开始开发一个完整的前端和一些翻译，而 **Dmitry** 和 **Alex Katchman** 则在开发后端。当时每个人都是兼职。

<details>
<summary>Original English</summary>

**Andre**: right? Yeah. So, so the the actual challenge is not so much conflict resolution in terms of methods, but initialization of state constructors are really hard. It was actually someone outside of **JBR** who explained to me that was a very bad idea and I'm very grateful to them. Yeah. So you know there were crazy ideas uh as well and some of them just fall off over time as we were discussing or prototyping and we I think I started writing code maybe 6 months in or something like that maybe maybe a little earlier than that and I started with a parser and it was actually it was a very also a very unique way to start a language because the idea was to start not with a compiler but with an **ID** plugin. I have it in the editor first which is you know an **ID** plug-in shares a lot with the front end of the compiler so it's not absolutely crazy but I was just relying a lot on the infrastructure that was available in **IntelliJ IDEA** so all the parsing infrastructure and it it was awesome like parsing infrastructure **IntelliJ IDEA** is better than anything else in the world because it's it's the heart of the **ID** it has to be incredibly fast and very robust and so but then later someone who knew the infrastructure a lot better than I do. Uh had to factor that bit out to make the **column** compiler autonomous. And it was the **Dmitry Jemerov** who did that. And he's a awesome engineer. Like he's probably one of the best people to refactor a large code base and then like take this one bit out of something that that was already 10 plus years old back then. So we started with this **ID** plugin. I think **Max** wrote the scaffold and I actually plugged in the parser and everything. And that was that was an interesting story because it was very interactive. So I could show off the language as if it existed because it has had some tooling but I couldn't compile anything in the very beginning and that was was actually a very good way to experiment with the syntax but then soon after I started working on a full-fledged front end and on some translation and **Dmitry** and **Alex Katchman** were working on the back end. Everybody was part-time.

</details>

**主持人**: 当你说前端和后端时，在语言语境下，那意味着什么？

<details>
<summary>Original English</summary>

**主持人**: uh when you say you work on front end they work on back end in a language context what does that mean

</details>

**Andre**: 在不同的语言中略有不同，但基本上，前端处理语法以及检查和理解程序含义，而后端则将其转换为可执行代码。在我们的例子中，前端负责读取文本、解析、处理类型等等，后端则生成 **Java** 字节码。**Kotlin** 有多个后端，针对不同的目标语言，比如我们有 **Java** 后端，有用于 **iOS** 和其他原生平台的原生后端，以及 **JavaScript** 后端。当时，没有人全职从事这个项目。甚至我都是兼职的博士生和兼职的 **Kotlin** 开发者。那是非常早期的阶段。然后，在某个时候，我放弃了博士学位，全身心投入。这也是一个奇怪的决定，兼职开始一门新语言？

<details>
<summary>Original English</summary>

**Andre**: it's slightly different in different languages but basically the front end is what deals with the syntax and with the checking and understanding what the program means and the back end is what translates to the executable code in our case u the front end is like reading the text and parsing and doing types and and all that and the back end generates **Java** bite code and **cotlin** has multiple backends for different target languages is like we have **Java** back end, we have a native back end for our uh like **iOS** and and other native platforms and **JavaScript** back end wasn't back. At that time, nobody was full-time working on this project. Even I was part-time a PhD student and part-time **cotton** developer. And it was like the very early days. And then at some point, I gave up my PhD and focused 100%. Which was also like it's a isn't it a a weird decision to start a new language part-time?

</details>

**主持人**: 是的。回想起来，我当时年轻又愚蠢。

<details>
<summary>Original English</summary>

**主持人**: Yeah. Looking back, I was young and stupid.

</details>

**Andre**: 是的。有句话说，我们做这件事不是因为它容易，而是因为我们认为它容易。

<details>
<summary>Original English</summary>

**Andre**: Yeah. There's a saying that we didn't do it because it was easy. We did it because we thought it was easy.

</details>

**Andre**: 没错。我当时没有意识到这个问题有多难。我还抱有不合理的傲慢，以为自己无所不能。我错了。但最终还是成功了。

<details>
<summary>Original English</summary>

**Andre**: Absolutely. that I didn't realize how hard the problem was. I was I also had an unreasonable amount of hubris. I just thought I I knew how to do everything. I didn't. But it worked out in the end.

</details>

### Kotlin的命名历程

**主持人**: 那么，当这门语言刚开始时，你们内部称它为什么？总会有内部代号，对吧？

<details>
<summary>Original English</summary>

**主持人**: So when the language started, what did you call it internally? There's always internal code names, right?

</details>

**Andre**: 是的。我想当时根本没有讨论过第一个名字。大家普遍认为这门语言将命名为 **Jet**，这很合乎逻辑。所以我们所有的代码库都使用了 **Jet** 这个名字，或者我们有 **Jet** 解析器，**Jet** 编辑器，或者 **Jet** 语法高亮器之类的东西。然后有人意识到这个名字已经被其他人注册了商标，实际上是我们认识的俄罗斯新西伯利亚的人，他们在做一些事情，那不是一门语言，而是一个编译器。我们不能使用它。于是我们开始寻找另一个名字，这非常痛苦。

<details>
<summary>Original English</summary>

**Andre**: Right. Yeah. So u I don't think there was a discussion of this first name at all. It was just generally understood that the language will be named **Jet** and it was logical. So we had all the code base was uh using the name **jet** or we had a **jet** parser and you know **jet** editor or whatever **jet** highlighter something like that and then someone realized that the that the name was trademarked by someone else and it was actually people we we know there in **Novaskin Russia** doing something it's not a language it's a comp but it is a compiler um and we couldn't use it and this is When we started looking for another name, it was very painful.

</details>

**Andre**: 寻找名字，伙计们，这太糟糕了。这是最糟糕的事情之一，因为你永远不知道哪个名字会成功，除非你想做一项广泛的研究，然后所有好名字当然都被占用了，然后一些没有被占用的名字之所以没有被占用，是因为它们不太容易在 **Google** 上搜索。你知道，有些人非常勇敢，把他们的语言命名为 **Go**。这就是为什么人们现在称之为 **Golang**，因为否则你无法识别它。它在英语中是一个动词，而且非常常见。是的，所以我们有一些奇怪的选择，我在我很久以前的一个演示中发现了一份早期名字的列表，我们有 **Robusta**，作为咖啡的一种风味，我们还有 **Up** 或者 **G** 或者其他类似的名字，那些在当时并不好。当时其他语言也纷纷涌现，其中一种替代语言叫做 **Ceylon**，其逻辑是 **Java** 是咖啡岛，而 **Ceylon** 是茶岛。然后 **Dmitry Jemerov** 基本上向窗外望去，说，好吧，我们在圣彼得堡的芬兰湾有一个岛，有一个大岛叫做 **Kotlin**，从某种意义上说，这是一个好名字，因为它非常容易在 **Google** 上搜索。没有人用它做任何事情。它非常容易识别。它对许多语言来说不是特别流畅，但还算可以。没有人喜欢这个名字。

<details>
<summary>Original English</summary>

**Andre**: Like looking for names, guys, this is so bad. It's one one of the worst things because you never know what name will work unless you want to do like an extensive study and then all the good names are taken of course and then some of the names that are not taken are not taken because they're not really googleable and you know some people are just very brave people who named their language **go**. This is why people now call it **Golang** because otherwise you can't identify it. It's it's it's a verb in English and very common one. Uh yeah, so we had weird options and I in one of my old old presentations I found a list of early names and we had **robusta** there as a flavor of co coffee and we had **up** for example or **G** or something else like that and those weren't great by that time. other languages were popping up and one of the alternative languages was was called **son** and the logic was that **Java** was the island of coffee and **salon** was an island of tea and uh **Dmitry Jemerov** basically looked out of the window and said okay we have an island here in **St. Petersburg** in the **Gulf of Finland** there's a big island called **Scotland** and it's a good name in the sense that it's very googable. Nobody uses it for anything. It's very recognizable. It's not super smooth for many languages, but it's kind of okay. Nobody was in love with that name.

</details>

**Andre**: 我们当时有点犹豫，你知道，**Cot** 在德语里是个贬义词。而且，我听说在普通话中也有一些负面含义。你知道，任何语言的任何词语总会与一些不好的东西联系在一起。我们当时非常犹豫，所以当我们宣布时，我们有一个截止日期，我们一直在推迟。当我们宣布时，我们仍然不确定，所以我们称之为代号，我们称之为 **Project Kotlin**，以便以后有回旋余地来替换这个名字，但它最终定下来了。我们做的第一件事是发布了一个 **Confluence** 页面，里面有语言的描述。那只是一堆 **Wiki** 页面，没有编译器，什么都没有。然后，你知道，**Kotlin** 这个词出现了许多许多次。我当时想，天哪，这东西不能像我那样进行搜索和替换，然后到处更改名字。所以我想出的解决方案是创建一个名为 **Kotlin** 的空页面，这样它就有一个名字，然后在其他地方你都把它当作一个页面来提及，当你重命名一个页面时，它会在所有地方被重命名。这就是为什么那个文档中有一个名为 **Kotlin** 的空页面。但最终这个名字保留了下来，事实证明它不是一个坏名字。

<details>
<summary>Original English</summary>

**Andre**: And we were kind of hesitant and you know **cot** means a bad thing in German. And also there was like some some negative connotation in Mandarin I was told or something like that. you know it's always some language has some nasty association with any word and we basically were super hesitant so when we announced and we we had this deadline so we were basically putting this off when we announced we were still not sure so we called it we decided would be a code name we called it **project cotlin** uh to have a wiggle room to later replace the name but it stuck the first thing we we did we put out a uh basically a **confluence** page with a description of a language. It was just a bunch of **wiki** pages and there was no compiler available, no nothing. And there uh you know the the word **cotlin** appeared many many times. I was like my god this thing doesn't like I can't do search and replace and then change the name everywhere. So the workaround that I came up with was create an empty page called **cotlin** and it so it has a name and then everywhere else you mention it as a page and when you rename a page it gets renamed everywhere. So this is why there was an empty page called **cotlin** in that documentation. Uh but yeah the name stuck and it turns out to be not a bad name.

</details>

### Kotlin与Java的差异及空安全

**主持人**: 那么，当 **Kotlin** 刚开始时，它与 **Java** 的主要区别是什么？因为 **Java** 是当时的主流。你们是如何向开发者解释的，那些最初上手或想尝试的开发者？

<details>
<summary>Original English</summary>

**主持人**: So when it started what were the main differences with **cotlin** compared to **java** because **java** was what was the big one? How how did you explain to developers uh you know who initially start on board or wanted to give it a go?

</details>

**Andre**: 是的，我想有几个主要的卖点，然后在此之上还有其他东西。当我们刚开始时，我们并没有考虑到空安全。空安全是在一次内部演示之后才出现的。是 **Maxurov** 邀请了 **Roman Elizarov**，他后来成为了 **Kotlin** 的项目负责人。**Roman** 来听了演示，给出了一些反馈，并说：伙计们，如果你们想为企业开发者做一些真正大的事情，那就解决空安全问题。我们做到了，而且花了一段时间。所以，在最开始，它是一个普遍的想法，关于是什么让 **Java** 感觉如此过时，有很多原因。**Lambda** 表达式非常重要。当时 **Java** 给人的普遍感觉是它非常冗长。它被称为“仪式语言”。很多人抱怨太多的关键字，比如 `public static void main` 是每个人都非常抱怨的东西。但也有，你知道，每个属性都有 **getter** 和 **setter**。有构造函数和重载，所有这些看起来像样板代码的东西，因为它就是样板代码。

<details>
<summary>Original English</summary>

**Andre**: Yeah, I guess there were a few major selling points and then there were other things on top of that. When we started like in the very beginning, we didn't have uh **null safety** in mind. **Null safety** came a little later after one of the internal presentations. It was **Maxurov** who invited **Roman Elizarov** who later was the project lead for **Cotlin**. and **Roman** came and and listened to the presentation, gave some feedback and said like guys, if you want to do something really big for enterprise developers, figure out **null safety** and we did and it took a while. So, uh in the very beginning it was the general idea of like what makes **Java** feel so outdated and there there were a bunch of things. **Lambdas** were very big. The general like the general uh feeling from **Java** back then was it was very verbose. It was called the ceremony language. You know a lot of people were grumpy about too many keywords like `public static void main` is something everybody was really grumpy about. But also you know there were **getters** and **setters** for every property. There were you know constructors and overloads and all that stuff that looks like **boiler plate** because it is.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Andre**: 而且，你知道。

<details>
<summary>Original English</summary>

**Andre**: And you know

</details>

**主持人**: 输入起来非常烦人。

<details>
<summary>Original English</summary>

**主持人**: is super annoying to type out.

</details>

**Andre**: 是的，你知道，样板代码的问题一方面是输入起来很烦人，但工具可以为你生成它，并折叠起来等等。但更大的问题始终是可读性。所以阅读代码比编写代码更重要。我们更多地是阅读代码。而样板代码在这方面很糟糕，因为如果完全标准的样板代码中有一个微小的不同之处，你就会错过它。你会对此视而不见，你可能会调试好几天都发现不了问题。所以，你知道，这就是我们想要现代化 **Java** 的目的，让 **Java** 程序更多地关注它们做什么，而不是为了让编译器满意而进行的仪式。而且，你知道，类型推断也是一个大问题，因为 **Java** 经常重复类型，还有许多其他类似的东西，比如分号，但当时的现代语言已经摆脱了分号。

<details>
<summary>Original English</summary>

**Andre**: Yeah. and and you know the the problem with **boilerplate** is on the one hand it's annoying to type out but tools can generate it for you and fold it and so on so forth. Uh but the bigger problem is always readability. So reading is more important reading code is more important than writing code. We do a lot more of that and with **boilerplate** it's terrible because if some tiny thing is different in the middle of completely standard **boilerplate** code you'll miss it. you become blind to it and you you can debug for days not seeing them. So, you know, that that was the point of um sort of modernizing **Java**, making **Java** programs be more about what they do and less about the ceremony of making the compiler happy basically. And you know **type inference** was also a big thing because **Java** was repeating types a lot and many other things like that where like semicolons you know but the modern languages of the time already got rid of semicolons

</details>

**主持人**: 所以在 **Kotlin** 中，你们也去掉了它。

<details>
<summary>Original English</summary>

**主持人**: and and so in **cotlin** you also got rid of it.

</details>

**Andre**: 是的。是的。所以我们基本上在语法上摆脱了分号和重复的类型，这减少了代码中大量的噪音。

<details>
<summary>Original English</summary>

**Andre**: Yeah. Yeah. So we we got rid basically in terms of syntax we got rid of uh semicolons and duplicated types and that was a lot of noise of code.

</details>

**主持人**: **Java** 有重复类型是什么意思？

<details>
<summary>Original English</summary>

**主持人**: What does it mean that **Java** had duplicated types?

</details>

**Andre**: 是的。所以，在 **Java** 的那个版本中，当你声明一个局部变量时，你会说它是一个字符串列表，名为 `strings`，等于 `new array list of string`。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So in um that version of **Java** when you declare say a local variable you you say it's a list of string called strings equals new array list of string.

</details>

**主持人**: 哦，是的，我记得这个。是的，是的。你需要输入两次，如果其中一个错了，就会出现编译错误等等。

<details>
<summary>Original English</summary>

**主持人**: Oh yes I remember this one. Yes. Yes. You need to type it out twice and if you get one of them wrong compile error etc.

</details>

**Andre**: 没错。所以，在最好的情况下，你可以通过使用菱形运算符省略第二次提及 `string`，但这只是后来才出现的。基本上，它非常健壮，特别是当你的类型很长时。如果它只是一个字符串列表，那还算可以，但如果它是一个从某个东西到字符串列表的映射，那就会非常长，你不会想读它。所以，很多类似的事情让很多人感到非常恼火，尤其是与 **C#** 或 **Scala** 相比。所以我们做了所有这些，然后，在此之上，还有其他增值功能，空安全是一个大问题，我们实际上花了几年时间来实现它，我认为它是 **Kotlin** 现在的主要区别因素之一，与扩展和其他功能一起，但空安全是核心功能之一。

<details>
<summary>Original English</summary>

**Andre**: Right. So and at best uh you could omit the second mention of string by using a diamond operator but that only came later. you know, basically was very robust, especially if your types are long. Like if it's if it's just a list of string, it's sort of not so bad, but if it's a map from something to some to a list of string, for example, that's already really long and you don't want to read that. So, and a bunch of things like that were really annoying to a lot of people, especially compared to **C#** or **Scala**. So we we did all of that and then uh you know on top of that were there were other value add features and **null safety** was a big thing that we spend multiple years actually on implementing and I think it's one of the main differentiating factors now for **cotlin** alongside of with extensions and other things uh but **null safety** is one of the core features

</details>

**主持人**: 我们能解释一下为什么空安全如此重要吗？我的意思是，就在今天，我在荷兰邮政网站上遇到了一个 **JavaScript** 的bug，我无法发送包裹，因为生产环境中出现了空值问题。但是，你知道，在 **Kotlin** 之前和许多语言中，为什么它是一个如此大的问题？

<details>
<summary>Original English</summary>

**主持人**: and can can we just spell out why **null safety** is so big I mean I just today I came across a bug on the I I couldn't send a package because in **JavaScript** in the Dutch post website there's a null issue happening in production. Uh but you know like before **cotlin** and in a lot of languages why is it such a big problem? It is.

</details>

**Andre**: 是的。所以，处理空引用在大多数语言中都是一个大麻烦。我想是 **Tony Hoare** 在某个时候称之为“十亿美元的错误”，因为引入空指针到 **C** 语言之类的。所以基本上，当我们查看 **Java** 代码中所有的运行时错误时，我想空指针异常会排在首位。你知道，语言的类型系统应该保护你免受那些意外错误的侵害。所以有些错误是你设计好的，也许有些错误甚至不是你的错，比如文件系统错误之类的。但也有一些错误应该由编译器来阻止。例如，类转换异常或方法缺失错误，这些都是编译器试图保护你的。它试图确保这种情况永远不会在你的程序中发生，除非你通过强制转换或其他方式关闭检查。是的。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So, u dealing with **null references** uh is a big hassle in most languages and I think it was uh **Tony Hoare** who um called called it the billiond dollar mistake at some point because like introducing I think it was about introducing uh **null pointers** to **C** or something. Uh so basically when we look at all the runtime errors that we have in **Java** code I think **null pointer exceptions** will be at the top. You know the **type system** of the of the language is supposed to protect you from those unexpected errors. So there are errors you're designed for and maybe errors that are not even your fault like you know file system error or something like that. But there are also um errors that should be prevented by the compiler. So for example, class cast class exception or missing method error for example are things that the compiler is trying to protect you for. It's trying to make sure that this never happens in your program if unless you you know switch off the check by making an enforced cast or something. Yeah.

</details>

**主持人**: 而在 **Java** 中，空值不是问题，任何东西都可以是空值，如果它是空值，它就会失败。

<details>
<summary>Original English</summary>

**主持人**: And with nulls it's not a thing in **Java** like anything can be null and if it's null it will just fail.

</details>

**Andre**: 是的。它会抛出异常并崩溃。

<details>
<summary>Original English</summary>

**Andre**: Yeah. It throws an exception and dies.

</details>

**主持人**: 这是一种非常常见的情况。所以很多人都习惯了，并且有不同的方法来规范它等等，但基本上，这是任何代码库中的一个祸害。你知道，对此有不同的方法，在 **Kotlin** 中，我们采取的方法是在类型系统中强制执行，但也在运行时使其免费。

<details>
<summary>Original English</summary>

**主持人**: It's a very common thing. So a lot of people are kind of used to it and there there are like different ways of being disciplined about it and so on so forth but basically this is a plague across any code base you know there there are different approaches to this and in **cotlin** we took the approach of a enforcing enforcing in the type system but also making it free at runtime.

</details>

**主持人**: 你说让它免费是什么意思？

<details>
<summary>Original English</summary>

**主持人**: What what does that mean that you made it free?

</details>

**Andre**: 所以处理空值的一种非常常见的方法是使用像 **Option** 类型这样的东西，你有一个可能为空或可能包含对象的盒子。

<details>
<summary>Original English</summary>

**Andre**: So one very common way of dealing with nulls is to use something like an **option type** where you have a box which might be empty or might have an object in it.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Andre**: 那个盒子不是免费的，你需要分配它，你需要到处携带它，你知道，这很容易在垃圾回收器的老年代中创建大量对象。这可能具有挑战性。我们所做的就是直接在运行时引用。我们的可空或非空引用与 **Java** 的引用相同。我们所做的只是编译时检查和一些运行时检查，当我们跨越边界时。但这比分配对象要便宜得多。尽管，你知道，运行时正在变得更好，它们可以优化掉一些对象，但仍然，这是一种开销。

<details>
<summary>Original English</summary>

**Andre**: And that box is not free like you have to allocate it, you have to carry it around everywhere and you know this this easily creates a lot of objects in the old generation for the **garbage collector**. uh can be challenging and what we did was uh just have a direct reference at runtime. Our nullable or not null reference is the same as **Java's** reference. All we do is compile time checking and some runtime checking when we cross the boundary. But that's a lot cheaper than allocating objects. Although you know the runtime is getting better and they kind of can optimize some some of those objects away, but still like it's it's an overhead.

</details>

### Kotlin借鉴的语言特性

**主持人**: **Kotlin** 中有哪些功能是受你欣赏的其他语言启发而引入的？

<details>
<summary>Original English</summary>

**主持人**: What what are features that you took in from **Cotlin** that were inspired by other languages that you admired?

</details>

**Andre**: 很多。我有一个关于这个的完整演讲，叫做“巨人的肩膀”。我们从很多很多语言中学习，这始终是重点。

<details>
<summary>Original English</summary>

**Andre**: A lot of them. I have an entire talk about this. It's called **Shoulders of Giants** and we uh really learned from lots and lots of languages and it was always the point.

</details>

**主持人**: **Andre** 刚才提到 **Kotlin** 是站在巨人的肩膀上构建的，它借鉴了已有的好想法，而不是重新发明轮子。这是 **Kotlin** 取得巨大成功的原因之一。但从2010年跳到2026年，如今有一件事完全不同，那就是事物的速度。**AI** 正在让灵活的团队以前所未有的速度进行构建。过去需要数年才能进入企业市场的公司，现在只需数月。这种速度带来了一个新问题：企业需求、身份验证、安全性、访问控制几乎立即出现。这就是我们的本季赞助商 **Work OS** 发挥作用的地方。**Work OS** 是基础设施层，帮助 **AI** 公司处理这种复杂性，而不会减慢速度。为企业买家提供 **SSO**，为代理工作流提供 **MCP**，甚至通过 **Radar** 防止免费试用滥用。像 **OpenAI**、**Cursor**、**Perplexity** 和 **Vercel** 这样的团队都依赖 **Work OS** 来支持他们的身份和安全扩展。如果你正在构建 **AI** 软件，并希望快速行动并满足企业期望，请访问 **worker.com**。有了这些，让我们回到 **Andre** 和 **Kotlin** 如何站在巨人的肩膀上。

<details>
<summary>Original English</summary>

**主持人**: **Andre** just mentioned how **Cotlin** was built on top of the shoulders of giants taking good ideas that existed not reinventing them. This was one of the reasons **Cotlin** succeeded as much as it did. But jumping forward from 2010 to 2026, one thing that is totally different today is the speed of things. **AI** is allowing nimble teams to build faster than ever before. Companies that used to take years to move into the enterprise are doing it in months. This speed creates a new problem. Enterprise requirements, authentication, security, access controls show up almost immediately. This is where **Work OS**, our season sponsor, comes in. **Work OS** is the infrastructure layer that helps **AI** companies handle that complexity without slowing down. **SSO** for enterprise buyers, **MCP** offer agendic workflows, even protection against free trial abuse with **Radar**. Teams like **OpenAI**, **Cursor**, **Perplexity**, and **Vercel** rely on **Work OS** to power identity and security as they scale. If you're building **AI** software and want to move fast and meet enterprise expectations, check out **worker.com**. With this, let's get back to **Andre** and how **Cotlin** was standing on the shoulders of giants.

</details>

**Andre**: 所以 **Kotlin** 的口号是“为行业而生的实用语言”，而“实用”这个词，我的意思是，它与你的播客很押韵。这个“实用”的部分有点来自于 **Scala** 被称为学术语言的经验，很多人在理解其设计中许多非常巧妙的技巧时遇到了困难。所以我们的想法是，我们不是在做学术研究。我们不是在尝试发明任何东西。如果我们没有发明任何东西，那是一件好事，而不是坏事。我认为从工程角度来看，这样做通常是一个好主意。通常你最终会创造出一些新东西，但你所做的大部分不应该是非常新的，因为你想要熟悉度，你希望人们能够轻松理解你在做什么，这必须与其他语言相似。而且，如果你借鉴其他语言的思想进行构建，你就可以从它们尝试过的经验中获益，你可以查看它们的设计以及社区的反应，以及所有这些在各个方面的影响，这会给你带来巨大的优势。所以我们做了很多这样的事情。我认为对 **Kotlin** 影响最大的语言当然是 **Java**，因为 **Kotlin** 的整个运行时是 **JVM**，我们依赖于它。但除此之外，**Scala** 产生了巨大的影响，我们从 **Scala** 中借鉴了许多思想，从主构造函数和数据类，到 `val` 和 `var`，以及所有这些东西，还有一些关于泛型如何工作的有趣技巧，例如，`varargs` 声明是 **Martin Odersky** 的一个伟大想法，它没有进入 **Java** 设计，这非常可惜。在设计过程的最后，它被改成了 **Java** 现在拥有的样子，而 **Martin** 的想法无疑要好得多。我们不得不在 **Java** 边界上解决 **Java** 不同的问题，并找出解决方案。我们从 **Scala** 中借鉴了许多许多想法，这非常有帮助，我们通常会稍微改造这些想法，以适应我们的环境，并基于它在实践中如何工作的知识进行构建，我们还舍弃了一些东西。我们简化了一些东西。例如，**Scala** 有 **trait**，**trait** 是一种非常强大的构造，它就像一个接口，你可以在 **trait** 中有方法实现，但在 **Scala trait** 中你也可以有字段，也就是属性。你不能有的是构造函数参数，你总是有一个默认构造函数，并且可以初始化所有字段，这不像 **C++** 中的多重继承那么糟糕，但在调用构造函数的顺序方面仍然有点复杂，我们决定不处理这个问题，这是一个复杂的算法，很难解释，所以我们只是去掉了状态和接口，只保留了方法体。我认为这是一个很好的折衷方案，特别是考虑到 **Java** 最终也走上了相同的道路，这使得集成更容易。是的，所以 **Scala** 产生了很大的影响，**C#** 也产生了很大的影响，当然还有扩展。我们从 **C#** 编译器如何做事情中学到了很多。还有一种特殊的技巧，让 **Kotlin** 语法比 **Java** 和 **Scala** 更好，这是我们从 **C#** 中学到的。实际上是我的同事，他曾在 **C# IDE** 工作，他告诉了我这个技巧，这基本上是他们在 **C#** 中做的一个超级编程技巧。当你调用泛型函数时，你使用尖括号。

<details>
<summary>Original English</summary>

**Andre**: So the slogan for **Cotlin** was pragmatic language for industry and the pragmatic bit which I mean is a nice uh sort of nice rhyme with with your podcast. Uh the pragmatic bit was kind of coming from the experience with **Scala** being called an academic language and a lot of people having trouble getting their heads around a lot of the very smart tricks in the design. And so so our idea was like we're not doing academic research here. We're not trying to invent anything. like if we don't get to invent anything it's a good thing not a bad thing and I think from the engineering perspective it's generally a good idea to to do this usually you end up making something new but the most of what you're doing shouldn't be very new because you want familiarity you want people to easily grasp what you're doing and this has to be familiar from other languages and also if you're taking you know building on top of the ideas of other languages you have the benefit of them having tried it and you can look at their designs and their community's reactions and and all that and the implications all over the place and that gives you a huge benefit. So we did a lot of that and I think the language that influenced **cotlin** the most is of course **Java** because you know we the entire runtime of **cotlin** is the **JVM** and we depend on that but apart from that **Scala** had a huge influence and and we used so many ideas from **Scala** from you know primary constructors and data classes and uh valves and varss and and all these things and to some interesting tricks about how generics work for example you know var Ians declarations is a great idea of **Martians** and it's a huge pity that it didn't uh make it into **Java** design. It was flipped at the very end of the design process to what **Java** has now and it's definitely the the **Mart's** idea was much better. We had to sort of on the boundary model **Java** boundary we had to fix the problem of **Java** having it different and figure that out. There were like many many ideas we took from **Scala** and that was very helpful and we usually we transformed those ideas a little bit to adapt to to our setting and to build on the knowledge of how it actually works in practice and we left some things out. We simplified some things. For example, **Scala** had **traits** and **traits** are a very powerful construct where it's it's it's like an interface and you can have method implementations uh in **traits** but also in **Scala traits** you could have fields as well properties that what what you couldn't have was um constructor arguments like you have always have a default constructor and can initialize all your fields and it's not as bad as **multiple inheritance** in **C++** uh but it's still a little complicated when it comes to in what order you're calling the constructors that we decided we we don't want to deal with that it's a complex algorithm it's hard to explain let's just get rid of the state and interfaces and only have method bodies and I think it was a good compromise especially given that **Java** ended up in the same place it was easier to integrate yeah so **Scala** was a big influence uh **C** was a very big influence uh extensions of course and we learned quite a lot from how **C#** compilers do things. Uh there there was also one particular trick that makes uh **Cotlin** syntax a lot nicer, nicer than **Javas** and nicer than **Scalas** that we learned from **C#**. It was actually my colleague uh who worked on the **C# ID** who told me about this which is basically a super programmatic thing they do in **C#**. There is like when you call generic functions, you use uh angle brackets.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Andre**: 在表达式内部，但问题是根本没有尖括号这种东西。只有小于号和大于号。

<details>
<summary>Original English</summary>

**Andre**: Uh inside an expression, but the thing is that there is no such thing as angle brackets. There is less and greater.

</details>

**主持人**: 嗯。是的。

<details>
<summary>Original English</summary>

**主持人**: Mhm. Yeah.

</details>

**Andre**: 没错。解析器很容易混淆，认为这个表达式，因为我们不在类型上下文中，而是在表达式上下文中，这个表达式是一个比较。它不是一个不等式，对吧？它不是一个调用。这在数学上是无法解决的。它是一个模糊的语法。是的，你看，你对此无能为力。其他语言处理这个问题的方式是，例如 **Java**，当你向一个调用传递类型参数时，它必须在点号之后。所以你会说 `collections.angle brackets`。是的。

<details>
<summary>Original English</summary>

**Andre**: Right. And and the parser can easily get conf confused and think that this expression since we're not in a type context, it's an expression context. This expression is a comparison. It's not uh an inequality, right? It's it's not a call. And this is mathematically unresolvable. It's it's an ambiguous grammar. Yeah, look, you can't do anything about it. And uh the way other languages handle this is **Java**, for example, when you're passing uh type arguments to a call, it has to be after a dot. So you say `collections dot angle brackets`. Yeah. The

</details>

**主持人**: 函数名。

<details>
<summary>Original English</summary>

**主持人**: function name.

</details>

**Andre**: 真的很笨拙。

<details>
<summary>Original English</summary>

**Andre**: Really awkward.

</details>

**主持人**: 有点奇怪。

<details>
<summary>Original English</summary>

**主持人**: Kind of weird.

</details>

**Andre**: 是的。

<details>
<summary>Original English</summary>

**Andre**: Yeah.

</details>

**Andre**: **Scala** 处理这个问题的方式是，他们用方括号表示类型。然后数组不能用方括号，所以他们用圆括号，这很不熟悉。这也不是世界末日，**Scala** 运行得很好，但仍然，**C#** 使用尖括号，因为解析器中有一个技巧，基本上是临时消除歧义的，我们也做了同样的事情，或者非常相似的事情，它就是能工作，而且语法非常熟悉和直观，我们对此非常满意。当你阅读它时，我作为一个人，我从不感到困惑，这不是一个小于号，我知道它是一个。是的，所以大多数时候这不是一个实际问题。是的，然后有一种方法可以消除歧义，如果你愿意的话。所以 **C#** 产生了很大的影响，**Groovy** 也产生了很大的影响。**JetBrains** 使用 **Groovy** 来编写构建脚本，**Groovy** 语法中有很多非常有用的模式，他们称之为 **builder**，这与构建程序无关，而是构建对象。这就是启发我们在 **Kotlin** 中做了一些相当新颖的事情，那就是类型化 **builder**，我们拥有与 **Groovy** 相同或几乎相同的语法灵活性，但它是完全类型化的，我们可以确保所有参数都匹配等等。所以所有这些方面基本上都受到了 **Groovy** 人如何做这件事的启发，并被重新设计成类型化的设置。这就是为什么我们有，例如，扩展函数类型，这就是为什么我们有悬空 **lambda** 表达式和其他实际上非常好的语法结构。所以，是的，很多很多东西都来自不同的语言。一门鲜为人知的语言，我想叫做 **Gou**，它启发我们做了智能类型转换。

<details>
<summary>Original English</summary>

**Andre**: Uh and the way **Scala** deals with that, they use square brackets for types. And then arrays can't use square brackets, so they use round brackets, which is unfamiliar. Like it's not the end of the world. **Scala** is doing fine, but still like and **C** uses angle brackets because there's a hack in the parser that basically disambiguates ad hoc and we did the same or something very similar and it just works and the syntax is very familiar and very intuitive and we're very happy about when you read it. I as a as a person I never get confused like this is not a smaller sign like I know it's a yeah so most of the time it's not a practical problem um yeah and it's then there is a way to dismbiguate if if you like so **C#** was a big influence **groovy** was a big influence as well **jet brains** used um **groovy** for uh build scripts and there were incredibly useful patterns in in the **groovy** syntax that they call **builders** which is not about building programs but you know building objects and Uh this is what inspired something fairly novel that we did in **Cotlin** which was **types builders** where we had the same syntactic flexibility or almost the same syntactic flexibility as **Groovy** but it was all typed and we could make sure that all the arguments matched and so on so forth. So all that side basically was inspired by how **groovy** people did this and reworked into a typed setting. And this is why we have for example **extension function types** and this is why we have um dangling **lambdas** and other things that are actually very nice syntactic constructs. So yeah many many things uh came from different languages. A less known language called **gou** I think uh it was what inspired us to do **smartcasts**.

</details>

**主持人**: 什么是智能类型转换？

<details>
<summary>Original English</summary>

**主持人**: What are **smart casts**?

</details>

**Andre**: 哦，是的。

<details>
<summary>Original English</summary>

**Andre**: Oh yeah. So

</details>

**Andre**: 我认为智能类型转换是编译器能为开发者做的最棒的事情之一，因为当你写 `if x is string`，也就是进行一个 `instanceof` 检查时，然后对 `x` 做一些事情，这是一种非常常见的情况。令人恼火的是，在很多语言中，你必须再次将 `x` 转换为 `string`，就像你已经做了 `if` 检查，你知道它是一个 `string`，但之后。

<details>
<summary>Original English</summary>

**Andre**: I I think **smart costs** are one of the nicest things a compiler can do to a developer because it's a very common situation when you say `if x is string` so you do an **instance of check** basically then do something with **x**. The annoying thing is that in a lot of languages you have to cast **x** to **string** again like you've after you've done the the if you you know it's a string but then

</details>

**主持人**: 你需要再写一遍。

<details>
<summary>Original English</summary>

**主持人**: you need to write it out again.

</details>

**Andre**: 是的。所以你刚刚做了检查，但你必须再次说 `string`。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So you've just done the check but you have to say **string** again

</details>

**主持人**: 为了让编译器满意。所以智能类型转换基本上消除了这一点。所以类型转换会自动识别出来。

<details>
<summary>Original English</summary>

**主持人**: to make the compiler happy. So **smart cast** basically get rid of that. So that cast gets figured out automatically.

</details>

**主持人**: 所以，如果 `string`，然后在括号内你现在可以使用它，因为它是一个 `string`。是的，你可以把它当作一个 `string` 使用。这不是很简单吗？

<details>
<summary>Original English</summary>

**主持人**: So if string and then inside the bracket you can now use it because it's a string. Yeah, you can use it as a string. And isn't it an easy thing, right?

</details>

**Andre**: 太棒了。

<details>
<summary>Original English</summary>

**Andre**: So nice.

</details>

**Andre**: 是的，这非常棒。是的，这是一个相当复杂的算法，因为变量可以改变值，你刚刚做的检查可能会失效，而且，你知道，这周围有很多算法上的技巧。你不能对任何表达式都进行智能类型转换，它必须是某种特定类型的表达式，足够稳定等等。但是，你知道，这非常棒，你可以消除代码中如此多的噪音，因为世界上所有的代码都充斥着这种 `instanceof` 转换，`instanceof` 转换。所以我们想摆脱它，它成功了，实现起来也很有趣。

<details>
<summary>Original English</summary>

**Andre**: Yeah, it's it's a very nice thing. Yeah, it's a pretty complicated algorithm because you know variables can change values and the check that you've just made can go stale and you know there's a bunch of u algorithmic trickery around this and you can't do a smart guess on any expression has to be a certain type of expression that can be stable enough and so on so forth. But you know it's a very nice thing and you can get rid of so much noise in the code because like all the code in the world is riddled with this **instance of cast instance of cast**. So we wanted to get rid of that and it worked and it was fun to implement.

</details>

### 放弃的特性与三元运算符的遗憾

**主持人**: 你们还考虑过其他语言的哪些特性，也许我们应该引入，但经过讨论后你们决定不引入？当然不是全部，但其中一些比较重要的，差点就引入了的。

<details>
<summary>Original English</summary>

**主持人**: What were things that you looked at other languages you considered maybe we should bring it in but you after debate you're like no let's just let's just leave this out like not all of them obviously but some of the big ones that kind of came close.

</details>

**Andre**: 我们在 **Kotlin** 中设计了模式匹配，它受到了 **Scala** 和 **Haskell** 等函数式语言的启发。但在某个时候，那是在我还在开发解析器的时候，我意识到这是一个巨大的功能。所以当我把它草拟在一张纸上时，它看起来像一个非常有用的东西，你知道，只是语言中的另一个功能。但当我开始开发这部分时，我意识到它的大小相当于一门完整的语言，你必须为模式匹配在语法上创建一个平行宇宙。我当时想，好吧，这将是大量的工作，我们先推迟它。然后后来，当我们为 1.0 版本进行审查时，或者可能比那更早一点，我意识到智能类型转换加上我们有一种叫做解构的东西，它们加在一起可以为普通开发者提供模式匹配所有好处的80%。然后还有另一类开发者，他们可能会非常直言不讳，主要是编译器开发者和那些非常热衷于函数式编程的人。他们有他们的道理，但这个道理只与他们相关，当他们人数不多时，我们决定当时不引入模式匹配。你知道，也许有一天模式匹配会被添加到 **Kotlin** 中。

<details>
<summary>Original English</summary>

**Andre**: We had a design for **pattern match** in **Cotlin** uh that was inspired by functional languages like like **Scal** and **Haskell** and and others. Uh but at some point it was early on when I was still working on the parser I just realized that this is a huge feature. So when when I was sketching it out on on a piece of paper it looked like a very useful thing you know and just another feature in the language. But then when I started working on the parts I realized it's an entire language in size like you have to create a parallel universe in syntax for **pattern matching** I was like okay this will be a lot of work let's postpone it and then later on uh when we were doing review for 1.0 Oh, or maybe a little earlier than that. I just realized that **smart casts** plus we have something called the **structuring** together they give us like 80% of all the good things **pattern matching** can do to normal developers. And then there is another group of developers that can be very vocal which are mostly compiler developers and people super into functional programming. uh and they have a point but that point is only relevant to them when there are not very many that we decided to not have **pattern matching** back then and you know maybe there comes a day that **pattern matching** gets added to **cotlin**

</details>

**主持人**: 模式匹配是在 `case` 语句中吗？

<details>
<summary>Original English</summary>

**主持人**: and **pattern matching** is is it in in the case

</details>

**Andre**: 是的，它。

<details>
<summary>Original English</summary>

**Andre**: yeah it's

</details>

**主持人**: 语句中，所以你可以有更友好的 `case` 语句，更具表达力的语句，对吗？

<details>
<summary>Original English</summary>

**主持人**: statement so you can have like a lot nicer case statements a lot more expressive ones right

</details>

**Andre**: 是的，所以通常，**Kotlin** 有一个折衷方案，你有一个我们版本的 `switch case`，叫做 `when`，你可以在那里使用智能类型转换。所以你可以说，当我的表达式是一个字符串时，然后把它当作一个字符串使用，或者它是一个对，然后你可以把它当作一个对使用。所以这为你提供了模式匹配的许多优点，但有些东西你无法表达，你知道，我认为这是一个很好的折衷方案，因为它是一个非常大的功能。它很难设计好，而且在工具方面需要大量工作。所以，你知道，也许有一天它会进入路线图。我不确定。**Java** 正在尝试实现模式匹配。所以，我们拭目以待。也许他们会使其更主流。

<details>
<summary>Original English</summary>

**Andre**: yeah so generally uh so **con** has this compromise where you have our version of **switch case** which is called **when** and you can have **smart costs** there. So you can say like `when my expression is a string` and then use it as a string or it is a pair and then you can use it as a pair. So that kind of gives you a lot of the nicities of **pattern matching** but some things you can't express like and you know that was I think it was a good compromise because it's a really big feature. It's hard to design well that will would be a lot of work on the tooling side. So, you know, but maybe it gets in the road map one day. I'm not sure. **Java** is trying to get towards **pattern matching**. So, we'll see. Maybe they kind of make it more mainstream.

</details>

**主持人**: 你们为什么省略了臭名昭著的三元运算符？就是当你写一个问号和一个点号时，如果以前没见过，每次都会让新开发者感到困惑。

<details>
<summary>Original English</summary>

**主持人**: Why did you omit the infamous **turnary operator** which is when you write out something a question mark and a dot and it confuses new developers every single time if you've not seen it before.

</details>

**Andre**: 是的。

<details>
<summary>Original English</summary>

**Andre**: Yeah.

</details>

**主持人**: 是为了可读性吗？

<details>
<summary>Original English</summary>

**主持人**: Was it for readable reasons?

</details>

**Andre**: 这是 **Kotlin** 设计中最悲伤的故事了。我当时没有意识到人们有多喜欢它，是的。所以原因就是，**Kotlin** 采用了函数式语言的一个原则，即所有我们可以做成表达式的东西都是表达式。所以 `if` 在 **Kotlin** 中不是一个语句，而是一个表达式。三元运算符在 **C** 和其他类似 **C** 的语言中，是一种让 `if` 成为表达式的补丁。当时的逻辑是，好吧，我们已经有了作为表达式的 `if`，我们能不能摆脱这个额外的语法结构，特别是考虑到它使用了非常宝贵的字符，比如问号和冒号，我们可能会找到其他用途。所以我们决定不引入它。我们用问号表示可空类型，用冒号表示类型等等。但事实证明，作为表达式的 `if` 相当冗长，人们不喜欢它。我抵制了一段时间，但当我同意时，已经太晚了，因为你无法在 **Kotlin** 的当前语法中追溯性地引入三元运算符，因为它与其他运算符的实现方式不符。

<details>
<summary>Original English</summary>

**Andre**: This is the saddest story I think the design of **Cotlin**. I didn't realize how much people liked it and yeah so so the reason was uh so **cotlin** used this principle from functional languages that everything we can make an expression is an expression. So if is not a statement and **cotlin** is an expression and the **turnary operator** is the sort of a patch on the design on on **C** and other **C** like languages that makes an if expression basically and the logic was okay we have if as an expression already can we just get rid of this extra syntax construct especially given that it's uh using very precious characters like there is a question mark and a colon and we might find some other use for that. So we decided to not have it. We used question marks for nullable things and colons for types and so forth. But it turned out that if uh as an expression is pretty verbose people don't like it and and like I I resisted for some time and then by the time I agreed it was too late because you can't retrofit the **turnary operator** and the current syntax in **Cotlin** because it just doesn't agree with how other operators are done.

</details>

**主持人**: 所以你对它不在那里感到有点难过。

<details>
<summary>Original English</summary>

**主持人**: So you're actually sad about it not being there a little bit.

</details>

**Andre**: 是的，我想回想起来这是一个错误，因为，你知道，从实用角度来看，拥有它利大于弊，但我们就是无法追溯性地引入它。

<details>
<summary>Original English</summary>

**Andre**: Yeah, it's I think in retrospect it was a mistake because you know pragmatically it's more use than harm to have it but we just can't retrofit it.

</details>

### Kotlin与Java的互操作性

**主持人**: 还有哪些你喜欢的语言特性，你能为那些不熟悉的人解释一下吗？

<details>
<summary>Original English</summary>

**主持人**: What are some other interesting uh features that you like about the language that that you added that we could just explain for those who are not familiar?

</details>

**Andre**: 好的，好的功能有很多。其中一个功能，你知道，它不是一种传统的语言功能，而是 **Java** 互操作性。这可能是我们花费时间最多的一个方面。我总是说，你知道，如果有人给你一份工作，让你创建一个系统，能够与另一个你无法控制的庞大系统透明地互操作，那就要求一大笔钱。要解决这个问题非常棘手。

<details>
<summary>Original English</summary>

**Andre**: Okay, so the the good ones there's quite a lot of them. So one feature that you know not is not a traditional kind of language feature is **Java interperability**. That's probably the single thing we spend the most time on. And I always say that you know if if someone offers you a job to create a system that interoperates transparently with another huge system you don't control, ask for a lot of money. It's a very tricky deal to to to figure this out.

</details>

**主持人**: 互操作性意味着你可以从 **Kotlin** 调用 **Java**，从 **Java** 调用 **Kotlin**，我的意思是，你做了很多工作，但最终作为开发者，你不需要考虑它，它就能正常工作。

<details>
<summary>Original English</summary>

**主持人**: Interpreter means that from **cotlin** you can invoke **Java** and from **Java** you can invoke **cotlin** and I mean you do a bunch of work there but it just works in the end as a developer you don't need to think about it.

</details>

**Andre**: 是的。所以这个想法是，无论你在世界的哪个地方有一个 **Java** 库，你都可以从 **Kotlin** 中使用它，这是一个很大的卖点，因为，你知道，如果你只是在一个真空中作为一门语言开始，并且没有任何库，那不是一个好的开始。在这个方向上，这绝对是 **Kotlin** 的一个绝对要求。但我们也要求能够反向操作，在一个现有项目中，你可以重写部分 **Java** 代码为 **Kotlin**，所有东西都能继续工作，一些库实际上就是这样做的，许多项目开始一点一点地使用 **Kotlin**。很多人从只编写测试开始，但后来，你知道，你开始在 **Kotlin** 中添加新东西，例如，周围所有的 **Java** 代码都必须透明地使用 **Kotlin** 代码，所以我们在这方面投入了大量精力，这很有趣。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So the idea is whenever you have a **Java** library somewhere in the world you can always use it from **cotlin** and it was it was a big selling point uh because you know if if you start as just a language in a vacuum and you don't have any libraries that's not a good start in this direction definitely uh it was an absolute requirement for **cotlin** but also we had the requirement to go the other direction in an existing project you could just uh rewrite what parts of your code from **Java** to **Cotlin** and everything keeps working and some libraries actually did that and many projects started using **Cotlin** bit by bit uh you know a lot of people started with just writing tests but then you know you you start adding things uh in **cotlin** new things for example and all the **Java** code around that has to transparently use uh the **cotlin** code so we put a lot of effort into that and that was fun.

</details>

**主持人**: 你能向我们这些工程师解释一下，这听起来像是一个非常大的项目，工作内容是什么？因为从外部看，我只是一个普通的开发者，我会想，好吧，我正在调用一个 **Java** 类，我能想到的是，也许 **Kotlin** 或 **Java** 不支持某些东西，或者其他什么，但我的意思是，真的有那么难吗？难在哪里？告诉我，我非常想知道。

<details>
<summary>Original English</summary>

**主持人**: can you explain to us as as engineers like you know sounds like it was a freaking big project what what is the work right cuz from the outside again I'm just being your average developer where like all right I'm invoking okay I I'm invoking a **Java** class and things I can think of like well maybe you know **Cotlin** or **Java** doesn't support things in a certain way or or maybe but I mean is it really that hard what is hard tell me tell me I I'm dying to know

</details>

**Andre**: 所以这里有一点需要注意，我们无法控制 **Java** 编译器。所以我们必须设法让它工作，这样你在 **Java** 代码中调用一个只存在于 **Kotlin** 源代码中的东西，而 **Java** 编译器不知何故同意一开始就调用它。它不是一个 **Java** 文件。它不知道它存在。所以它实际工作的方式是，当我们构建一个混合项目时，我们首先编译所有的 **Kotlin** 代码，它可以依赖项目中的 **Java** 源代码。所以我们在 **Kotlin** 编译器中内置了一个 **Java** 前端，这样我们就可以解析 **Java** 代码中的所有内容，然后我们生成类文件，也就是 **JVM** 的二进制文件，**Java** 编译器可以读取这些文件。所以当 **Java** 编译时，它将 **Kotlin** 源代码作为二进制文件处理，这就是它的工作方式。所以，你知道，我们不得不实现一个 **Java** 编译器，否则。幸运的是，**Java** 有单独编译。所以这可行。所以这个技巧意味着，你知道，无论你在你的工具中，比如在你的 **IDE** 中，当你从 **Java** 源代码导航到 **Kotlin** 源代码时，都必须有一个特殊的技巧。所以需要有人去教 **Java** 世界了解 **Kotlin** 世界。当然，**IDE** 不会进行编译来导航。但在编译时，我们无法控制编译器。所以我们做了自己的 **IDE**。所以我们可以对 **Java** 工具做一些事情。但我们无法对 **Java** 编译器做任何事情。所以这是第一个技巧。然后，你知道，当涉及到增量编译时，它变得更有趣了，因为 **Java** 增量编译本身就是一个复杂的算法。现在我们同时增量编译两种语言，这很有趣。而且，你知道，增量编译算法通常是一个非常混乱、非常复杂的启发式算法。所以，你知道，有很多边缘情况等等。所以这只是一个例子，但后来，你知道，你开始在 **Kotlin** 中做一些有趣的新事情。你需要将它们暴露给 **Java**。你需要确保无论你有什么花哨的东西，**Java** 都能实际与它互操作。其中一个例子是 **Kotlin**。我们想出了如何在 **Kotlin** 中使 **Java** 集合更友好，而无需重写集合，使用相同的库。所以 **Java** 集合被称为不变的，因为它们都是读写的。所以如果你有一个列表，它总是有一个 `set` 方法。

<details>
<summary>Original English</summary>

**Andre**: so one thing to note here is that We don't control the **Java** compiler. So we somehow need to make it work so that you in in your **Java** code you make a call into something that only exists in the **Cotlin** source and the **Java** compiler somehow agrees to call it to begin with. It's not a **Java** file. It doesn't know it exists. So the way it actually works is when we build a mixed project what we do is we first compile all the **cotlin** code and uh that can depend on the **java** sources in the in the project. So we have a **java** front end baked into the **cotlin** compiler so we can resolve everything in the **java** code and then we produce class files so binaries for the **jvm** that the **java** compiler can read. So when **Java** compiles it takes **Cotlin** sources as binaries and this is how it works. So you know the we would have to implement a **Java** compiler otherwise fortunately **Java** has separate compilation. So this works. So this trick means that you know whenever you have in your tooling like in in your **ID** for example when you navigate from **Java** sources to **Cotlin** sources has to be a special trick. So someone needs to go and teach the **Java** world to know about **cotlin** world. Of course the **ID** doesn't do the compilation to navigate. But in in the compilation time we don't control the compiler. So we we did our own **ID**. So we could do something about the uh **Java** tooling. But we couldn't do anything about the **Java** compiler. So that's trick number one. And then you know when it comes to **incremental compilation** it becomes even funnier because **Java** **incremental compilation** is a complex algorithm on its own. And now we're incrementally compiling two languages at once and that's fun. And you know **incremental compilation** algorithms are generally a very messy very complicated heristic that you have. So you know there are tons of corner cases and stuff. So that's that's like one example but then you know you start making interesting new things in **cotlin**. You need to expose them to **Java**. You need to make sure that whatever fancy thing you have, **Java** can actually interoperate with that. And one example there would be **Cotlin**. We figured out how to make **Java** collections nicer in **Cotlin** without rewriting the collections using the same library. So **Java** collections are what's called invariant because they're all readwrite. So if you have a list, it always has a set method.

</details>

**主持人**: 是的。这是一个小问题，因为当你有一个对象列表时，你不能将一个字符串列表赋值给它，这有点烦人，因为，你知道，你希望能够表示任何类型的列表，你需要处理问号、通配符之类的东西。如果我们有一个不包含 `set` 方法的只读列表接口，那会非常好，这样将子类列表赋值给超类列表就没有问题了，但这个接口在运行时并不存在，对吧？我们不能凭空创造它，或者我们可以吗？所以我们实际上可以。

<details>
<summary>Original English</summary>

**主持人**: Yep. And that's a little bit of a problem because whenever you have a list of object you cannot assign a list of string to that and that's a little annoying because you know you want to be able to represent a list of anything and that you need to play with question marks wild cards and stuff like that. It would be very nice if we had a readonly list interface that doesn't have a set methods and then there is no problem in assigning a subclass a list of subasses to a list of super classes but this interface doesn't exist at runtime right we can't just invented or can we so we we actually can

</details>

**主持人**: 不。

<details>
<summary>Original English</summary>

**主持人**: no

</details>

**Andre**: 所以在 **Kotlin** 编译器中，我们有一个专门针对 **Java** 集合的技巧层，**Kotlin** 总是将 **Java** 集合视为，如果它们来自 **Java** 世界，它们就是读写可变集合，我们称之为。

<details>
<summary>Original English</summary>

**Andre**: and so in the **cotlin** compiler we have this layer of trickery specifically for **Java** collections where **cotlin** always sees **Java** collection s like if they come from the **Java** world they are read write mutable collections we call them but

</details>

**主持人**: 可变的，对吧？

<details>
<summary>Original English</summary>

**主持人**: mutable right

</details>

**Andre**: 是的，是的，是的。所以 **Java** 集合总是可变的。

<details>
<summary>Original English</summary>

**Andre**: yeah yeah yeah so so the **Java** collections are always mutable or

</details>

**Andre**: 平台可变的，我稍后会谈到。

<details>
<summary>Original English</summary>

**Andre**: platform mutable I I'll talk about that later

</details>

**Andre**: 但当你在 **Kotlin** 中这样做时，你实际上可以区分只读和可变集合。

<details>
<summary>Original English</summary>

**Andre**: uh but when you do it in **cotlin** you can actually distinguish between readonly mutable collections

</details>

**Andre**: 在 **Kotlin** 方面一切都很好，但当 **Java** 看到 **Kotlin** 集合时，它们又恢复正常了，就像我们通过二进制文件暴露它们时，**Java** 世界总是将它们视为普通集合。它们对 **Java** 来说是可变的，这没问题。

<details>
<summary>Original English</summary>

**Andre**: and it's all very nice on the **cotlin** side but then when **java** sees the **cotlin** collections they are normal again like when we expose them through binaries the **Java** world always sees them as normal collections. They're mutable for **Java** and it's it's all right.

</details>

**主持人**: 好的。我开始明白你为什么说这需要很多钱了，因为这只是众多事情中的一件，但这本身听起来就很难解决。

<details>
<summary>Original English</summary>

**主持人**: Okay. I'm I'm starting to see why it's you said like you need a lot of money for this because this is just one one of many things but this itself sounds like uh I don't know how you solve that.

</details>

**Andre**: 是的。所以，只是为了补充一点细节。这些预定义集合的好处是，你可以将一个字符串列表传递给一个对象列表，对吧？如果一个接受任何类型列表的 **Kotlin** 方法可以接受 **Java** 中的字符串列表，那不是很好吗？但我们是否会抹去 **Kotlin** 的所有优点呢？我们会，但我们知道这个列表实际上是所谓的协变的。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So so ju just to add a little bit of detail to this. So the nice thing about uh those predom collections is that you can pass a list of string for a list of object right wouldn't it be nice if a **cotlin** method that takes a list of list of any uh could accept a list of string in **Java** but aren't we erasing all the **cotlin** nice stuff we are but we know that this list is actually what's called covariant

</details>

**Andre**: 所以我们可以将它暴露给 **Java** 作为 `list of question mark extends`，而不仅仅是 `list of object`。所以，你知道，它对 **Java** 世界来说也变得协变了，这是一个让它更透明的技巧，还有很多这样的技巧。所以，你知道，这是我们不得不处理的另一件事，但最大的事情当然是可空类型。实际上，我们处理可空类型和集合的这些事情有点相似，这使得互操作的整个类型层非常有趣。

<details>
<summary>Original English</summary>

**Andre**: so we can expose it to **Java** as a list of question mark extends and not just list of object. So you know it becomes coariant for the **Java** **Java** world as well and that's like one hack that makes it a little more transparent and there's a bunch of that. uh so you know so that's another thing that we had to play with but the biggest uh thing is of course **nullable types** and actually we we handle **nullable types** and these things with collections kind of similarly which makes the whole in typing layer of the interop quite interesting

</details>

**Andre**: 但基本上，**Java** 对空值一无所知，对吧？

<details>
<summary>Original English</summary>

**Andre**: but basically so **Java** doesn't know anything about nulls right and uh

</details>

**主持人**: 它知道空值，但不知道可空类型，它不存在。

<details>
<summary>Original English</summary>

**主持人**: well it knows about nulls but not not about **nullable types** it does not exist

</details>

**Andre**: 是的，**Java** 在编译时不知道空值。是的。

<details>
<summary>Original English</summary>

**Andre**: yeah **Java** doesn't know about nulls at compile Yes.

</details>

**Andre**: 所以在类型方面，它根本没有表示。所以从技术上讲，每个 **Java** 类型都是一个可空类型。我们就是从这里开始的。我们说，好吧，**Kotlin** 类型可以是非空的，这非常方便。当你有一个非空类型时，你可以正常调用它的方法，对吧？但如果某个东西是可空的，你就不能直接解引用它。你必须先检查空值，然后才能使用它，对吧？或者有一个安全调用运算符问号。如果左侧为空，它就会传播空值。所以我们一开始说，好吧，所有 **Java** 类型都是可空的，这是一种保守的，非常数学化的处理方式，这是正确的，对吧？

<details>
<summary>Original English</summary>

**Andre**: So in terms of types, it's just not represented. So technically every **Java** type is a **nullable type**. And this is where we started. We said, okay, so **Cotlin** types can be not null and it's very convenient. And when you have a notnull type, you can just call a method on it normally, right? But if something is nullable, you can't just dreference it. You have to first check for null and then use it, right? Or there is a safe call operator question mark. Well, just propagate null if null is on the left hand side. So we started with saying okay all **Java** types are nullable which is a conservative like very mathematical way of treating this is correct right

</details>

**主持人**: 是的，你这样做不会错。

<details>
<summary>Original English</summary>

**主持人**: yeah you you're not going to be wrong with that

</details>

**Andre**: 是的，我们实现了这一点，并在 **JetBrains** 内部开始使用它，但反馈非常糟糕，比如你的代码充斥着那些不应该存在的空值检查，因为你无法以正确的方式在 **Java** 端表达任何东西。我们有一些针对 **Java** 端的注解，但它也很脆弱，并非总是有效，因为可能存在长链等等，有些库根本没有注解，我们为此挣扎了很长时间。基本上，我们意识到“**Java** 中的所有东西都必须被视为空类型”这个假设根本行不通。这是一个转折点，我们坐下来重新构想了整个事情，我们与一位伟大的类型理论家，或者说类型实践家合作，我想当时他在 **Pernell Ross** 州。所以 **Ross** 帮助我弄清楚了如何表示那些来自 **Java** 的类型，它们应该被视为，我们应该意识到它们来自 **Java**，并且可能为空，但我们不应该将它们视为空类型，因为那非常不方便。**Ross** 整理出了一套非常好的演算方法，当我们开始实现它时，所有美好的东西都消失了。

<details>
<summary>Original English</summary>

**Andre**: yeah and we we implemented that and we started using it inside **JetBrains** and the feedback was horrible like your code is plagued with those null checks and you know that there shouldn't be there because you can't express anything on the **Java** side the right way and there were like we had some annotations for the **Java** side wasn't it was also brittle not always worked because you know there can be long chains and stuff and some some libraries just don't have the annotations and we struggled with that for a long time and basically we realized that this assumption that everything in **Java** has to be treated as nullable just doesn't work this this was a turning point where we sat down and re reimagined the whole thing and we worked with uh great uh **type theory** type practice I would say guy from I think it was back then he was in in **Pernell Ross** state. So **Ross** helped me figure out the sort of mathematical side of uh how you can represent those types that come from **Java** and should be like we should be aware of the that they they are from **Java** and can possibly be nullable but we shouldn't treat them as nullable because it was very inconvenient and **Ross** put together a very nice sort of calculus about those and when we started implementing it like all the nice things are gone.

</details>

**Andre**: 实际的，是的，数学之美完全消失了，所有这些都变得非常混乱，像工业化的东西，虽然不健全，但运行良好。

<details>
<summary>Original English</summary>

**Andre**: the the actual yeah the mathematical beauty is completely gone from from from all that and I think we took the general idea of sort of splitting a type in two and everything else is just very messy industrial kind of thing that's not sound but it works well

</details>

### Kotlin的发布与团队成长

**主持人**: 好的，互操作性听起来像是一段旅程，但也是必要的。花了多长时间？你能给我一个大概的概念吗？有多少人参与其中？因为我认为在传统项目中我们可以有一个概念，但我对一门语言如何运作以及需要多长时间完全没有概念。你认为它会花多长时间，而实际又花了多长时间？

<details>
<summary>Original English</summary>

**主持人**: okay and interpretably sounds like it was a journey but a necessary one how long did it take and can you give me just just a sense of of like how many people working on it how much cuz I think In traditional project we can get a sense but I have no idea with a language how does this work and how long did you think it would take versus how much it took.

</details>

**Andre**: 是的。所以，我们从这里开始。每次我被问到 **Kotlin** 何时发布时，我都会说“从现在起一年”。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So so let's let's start with that. So every time I was asked when we were going to release **cotton** I would say one year from now.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yep.

</details>

**Andre**: 而且，你知道，这不是一个计划。我完全不知道。我当时还幻想着我正在构建的初始版本只是一个原型，我们会重写所有东西。我相信很多人都有过这种经历。我想那个原型现在或多或少已经完全重写了，但它花了六年左右的时间。是的。也许实际上更长。

<details>
<summary>Original English</summary>

**Andre**: And you know this is this is not a plan. I had no idea. Had no idea. I also had the illusion that the initial version I was building was a prototype and we would write everything. And I I'm sure a lot of people out there have been there. I think that prototype has been rewritten more or less completely now, but it took six years, something like that. Yeah. So maybe longer actually.

</details>

**Andre**: 是的。所以，我当时完全不知道，我总是说，好吧，从现在起一年就足够远了。我们到那时可能就完成了。实际上，我们是在2010年秋天开始的。是的。基本上是2010年秋天。我们于2016年2月发布。所以，你知道，那是一段漫长的时间，大约五年。

<details>
<summary>Original English</summary>

**Andre**: Uh yeah. So so I had no idea and I always said like, okay, a year from now's far enough. We'll probably be done by then. Uh in practice, we we started in 2010. Yeah. autumn of 2010 basically. And we released in 2016, February 2016. So, you know, it was a long time, fiveish years.

</details>

**Andre**: 而且，你知道，部分原因是因为我不知道如何管理项目。我的初始团队，那些全职从事项目的人，我在 **GitHub** 上查了一下，以验证几乎所有加入 **JetBrains** 从事 **Kotlin** 工作的人都是应届毕业生，因为我以前教书，有一些优秀的学生，我知道如何与学生合作。所以基本上团队中的每个人都是学生，除了几个来自 **JetBrains** 的资深员工提供帮助，他们甚至不是全职的。所以我们后来才开始让有经验的工程师加入团队。而且，你知道，公平地说，很多那些人，那些关注 **Kotlin** 的人，都知道这些名字。那些构建 **Kotlin** 绝对基础部分的**核心贡献者**，都是作为应届毕业生加入的，他们成为了优秀的工程师，但我想我有点做得过头了。所以，让年轻人无所畏惧是很棒的，但这很棒，但，你知道，平衡不对。

<details>
<summary>Original English</summary>

**Andre**: And that uh you know, and in part it was just because I didn't know how to manage projects. And my initial team, the people who worked full-time on the project, I I looked up on **GitHub** to to to verify that everybody who almost everybody who joined **JetBrains** to work on **Cotlin** was a fresh graduate because I used to teach and I had some good students and I knew how to work with students. And so basically everybody on the team was a student apart from a few veterans from **JetBrains** who were were helping not all of them even full-time. So we started getting experienced engineers on the team a bit later. And you know to be fair a lot of those people you know people who are following **Cotlin** know those names. people who are **core contributors** who built out like absolutely foundational parts of **cotlin** joined as fresh graduates and they they became great engineers but I think I've I overdid it a little bit so it's great to have you know younger people have no fear and that's wonderful but you know the balance was not right

</details>

**主持人**: 团队最初有多大，发布时有多大？

<details>
<summary>Original English</summary>

**主持人**: and how big was the team initially and then towards the release

</details>

**Andre**: 所以我们最初基本上有四个人兼职，是的，我们这样持续了大约一年左右，所以最初的原型就是这样构建的，然后人们开始加入。到我们发布时，我想大约有25人左右，团队规模扩大了不少，到我2020年离开时，团队大约有100人，其中70人是工程师。

<details>
<summary>Original English</summary>

**Andre**: so we started we started out basically with four four people part part-time and yeah we we went like that for maybe a year or something so the initial prototype was built like that and then people started joining in by the time we released I think it was around 25 people or something and the team grew quite a bit so by the time I left in 2020 it was about 100 people on the team 70 of them engineers

</details>

**Andre**: 所以它变成了一个相当大的项目。

<details>
<summary>Original English</summary>

**Andre**: so it became a pretty big undertaking

</details>

### 语言开发流程与兼容性管理

**主持人**: 你能告诉我们语言内部的开发过程吗？我想我们很多人都习惯于构建服务、后端服务或产品、移动应用程序等。它们通常都有发布流程。语言内部是如何运作的？你们的发布流程是什么？以及最佳实践是什么？你们甚至会进行代码审查吗？或者，你知道，我们该如何想象？因为这又是一个如此罕见的项目。有人在构建语言，但数量不多。

<details>
<summary>Original English</summary>

**主持人**: can you tell us about the development process inside a language I I I think a lot of us are used to building you know like services backend services or or products or mobile apps etc. They typically have a release process. How does this work inside a language like what is your release process and what is the I guess best practices like do you even do code reviews or or you know like how can we imagine because again it feels such a rare project. There are people building languages but not many of them.

</details>

**Andre**: 是的。所以，构建语言的一个特殊之处在于所谓的**自举**。当你用自己的语言编写编译器时。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So, one peculiar thing about building languages is what's called **bootstrapping**. When you write your compiler in your language,

</details>

**主持人**: 哦，太棒了。

<details>
<summary>Original English</summary>

**主持人**: oh, nice.

</details>

**Andre**: 这意味着，你知道，要编译你的代码，你需要一个你编译器的旧版本，你最好和你的同事们就使用哪个版本达成一致。这可能非常棘手，特别是当你处理二进制格式时。而且有很多自举的魔力。我不认为它可以从头开始重现 **Kotlin** 的构建，因为，你知道，如果你只获取 **Kotlin** 仓库的一个快照，你只能用 **Kotlin** 编译器来构建它，而且我不认为我们保留了所有自举版本。

<details>
<summary>Original English</summary>

**Andre**: Which means that, you know, to compile your code, you need a previous version of your compiler and you better agree with your colleagues which version it is. It can be really tricky, especially when you do things about the binary format. And there is like quite a lot of **bootstrapping** magic going on. And I don't think it can reproduce the **cotlin** uh builds from scratch because you know if you just take a snapshot of the **cotlin** repo you can only build that with the **cotlin** compiler and I don't think we kept all the bootstrap versions.

</details>

**Andre**: 现在，如果没有大量手动干预，可能无法真正从头开始重建所有源代码并重现所有版本，因为有时，你知道，我们不得不将一个 hack 提交到一个分支中，并使用该分支作为下一个构建的自举编译器，然后丢弃该分支。所以那就像一个一次性的编译器，用于促进二进制格式或语法或其他方面的某些更改。所以那是一种不同的乐趣，但总的来说，我的意思是，许多实践都非常相似，比如我们很早就进行了代码审查。这又是我的个人习惯，我喜欢和人交谈。所以在代码审查中，我经常和某人坐在一起，要么他们审查我的代码，要么我审查他们的代码。但这，你知道，我不能说它更好或更坏。这只是我个人偏好，因为我喜欢和人交谈。所以代码审查。是的。当然，我们像其他人一样有一个问题跟踪器。我们的问题跟踪器始终是开放的，所以每个人都可以提交 bug 到原因和 bug 跟踪器，这非常有帮助。它很难管理，因为随着使用，会有很多 bug，很多功能请求，以及各种各样的东西，但这是值得的。你有一个沟通渠道。发布节奏对于这样的项目来说是一个非常难以确定的事情，因为语言的一个重要考虑因素是向后兼容性。部分原因就是它推迟了 1.0 版本。

<details>
<summary>Original English</summary>

**Andre**: Now I it might not be really possible without a lot of manual intervention to rebuild all the sources from the very beginning and reproduce all the versions because sometimes you know we we had to like commit a hack into a branch and use that branch as a **bootstrap compiler** for the next build and then throw the branch away. So that was like a oneoff compiler used to facilitate some change in in the binary format or syntax or something. Uh so that's a separate kind of fun but generally I mean many many practices are very similar like had code code reviews pretty early on. It's my personal quirk again that I like to talk to people. So in code reviews I often just sat together with someone and and either they reviewed my code or I reviewed theirs. But this is you know I can't argue that it's much better or or worse. It's just how I prefer because I like talking to people. So code reviews. Yes. And of course we we had an you know an issue tracker like everybody else. Ours was always open so everybody can submit bugs to the cause and bug tracker which was very helpful. Uh it's hard to manage because there will be like with usage there will be a lot of bugs and a lot of like feature requests and and all all kinds of stuff but it's worth it. You you have a communication channel. uh release cadence is a very difficult thing to figure out for such projects because one big consideration you have for languages is **backwards compatibility**. In part, this is what delayed 1.0

</details>

**Andre**: 因为我们希望在将其命名为 1.0 后，能够合理地确保兼容性。部分原因是因为人们的期望，尤其是 **Java** 非常稳定，在这方面做得很好，直到 **Java 9** 出现。而且 **Scala** 也遇到了很多麻烦，因为他们经常破坏兼容性，社区为此非常挣扎，所以我们真的不想重蹈覆辙，但你知道，事实证明你甚至可以打破 **Python 2** 到 **Python 3** 的兼容性并存活下来，所以，你知道。

<details>
<summary>Original English</summary>

**Andre**: because we wanted to be reasonably sure we can maintain compatibility as soon as we call it 1.0. in part because it was the expectation especially **Java** is incredibly stable and very good with that until **Java 9** came about and also **Scala** had a lot of trouble because they were breaking compatibility a lot and the community was struggling really so we really didn't want to repeat that but you know there turns out you can even break compatibility **Python 2** to **Python 3** and survive so you know

</details>

**主持人**: 勉强，勉强存活。

<details>
<summary>Original English</summary>

**主持人**: barely barely survive

</details>

**Andre**: 他们现在做得很好。

<details>
<summary>Original English</summary>

**Andre**: They're doing very well now.

</details>

**主持人**: 他们做得很好。是的。

<details>
<summary>Original English</summary>

**主持人**: They're doing well. Yes.

</details>

**Andre**: 是的。所以我们对此非常认真。但基本上，这意味着你开始做一些有趣的事情，比如弃用周期。所以我们实际上发明了一整套用于兼容性管理的工具。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So we we were really serious about that. Uh but basically what it means is you start doing interesting things like **deprecation cycles** and so we we actually invented an entire tool set for **compatibility management**.

</details>

**Andre**: 所以在 1.0 之前，我们尝试帮助人们迁移。所以我们有那些里程碑构建。令人尴尬的是，我们有13个。

<details>
<summary>Original English</summary>

**Andre**: So before 1.0 we tried to help people migrate. So we we had those milestone builds. Embarrassingly, we had 13 of those

</details>

**Andre**: 而且，你知道，当我们以主要方式破坏语言时，我们尝试提供工具进行自动迁移。

<details>
<summary>Original English</summary>

**Andre**: and uh you know when we broke the language in major ways we tried to provide tools for automatic migration.

</details>

**主持人**: 你真好。

<details>
<summary>Original English</summary>

**主持人**: That's nice of you.

</details>

**Andre**: 我不认为这在当时是行业标准实践。现在人们做得更多了。所以我很高兴能推广这个想法。然后当我们准备 1.0 版本时，我们对所有东西进行了大范围审查，花了一年时间审查所有设计。我们所做的基本上是尝试预测我们可能想要进行的更改，或者新功能将需要什么，并基本上禁止可能阻碍这些更改的事物。所以我们尝试确保我们计划的更改受到编译器错误的良好保护，以确保用户不会意外编写任何看起来像新功能的东西。这很有趣，我们当时几乎每天都开设计会议，基本上就是讨论，好吧，让我们禁止这个，禁止那个。我们正确地禁止了很多东西，也错误地禁止了一些东西，但总的来说，效果很好。所以，这个兼容性问题是一个大问题，但也有很多我们没有预料到的东西。所以我们不得不找出管理这些问题的方法。**Kotlin** 编译器中有一个叫做“来自未来的消息”的东西。

<details>
<summary>Original English</summary>

**Andre**: Which was I don't think it was a standard practice in industry back then. Now people are doing it more. So I'm like very happy to have sort of popularized this idea. And then when we were preparing for 1.0, We did a major review of everything and took a year to sort of review all the design and what we're doing is basically trying to anticipate what changes we might want to make or what new features will require and to basically prohibit things that might block that. So we tried to make sure that the changes that we were planning were guarded well by compiler errors to make sure that users don't accidentally write anything that likes that looks like a new feature and that was fun like we had design meetings I think every day at some point basically working on that like okay let's outlaw this let's prohibit that and we prohibited a lot of stuff correctly and some stuff incorrectly uh but you know generally really worked out. So, so this compatibility thing was was a big deal, but there's also a lot of stuff that we didn't anticipate. So, we had to figure out ways to manage this. And there is something in **Cotlin** um in the **Cotlin compiler** called **message from the future**.

</details>

**主持人**: 嗯。

<details>
<summary>Original English</summary>

**主持人**: Mhm.

</details>

**Andre**: 这基本上是。

<details>
<summary>Original English</summary>

**Andre**: Which is basically

</details>

**Andre**: 当你在一个新版本的编译器中引入了旧编译器无法理解的东西时，你有不同的选择。很多语言选择的一种选项是，新类型的二进制文件对旧编译器来说是完全不可读的。所以版本更高，我不读取它。就这样。我退出。但这对于人们来说有点困难，因为新的库、新版本的库会带来新的编译器期望，你必须迁移你的整个项目才能做到这一点。这有点烦人。如果你添加的东西，比如一个方法，基本上会使整个库对旧编译器失效，那就不太好。所以我们所做的是，一个新编译器可以将一些东西写入二进制文件，告诉旧编译器，好吧，这个方法是你无法理解的，但其他一切都很好。

<details>
<summary>Original English</summary>

**Andre**: when in a newer version of a compiler, you introduce something that the old compiler doesn't understand. You have different options. And one option a lot of languages go for is the new kind of binary is in is completely unreadable for the old compiler. So the version is higher. I don't read it. That's it. I bail. But it's a little hard for people uh then to to manage their versions because new libraries new versions of libraries come with the new compiler expectations and you have to migrate your entire project to do that. It's a little annoying. And if what you're adding is like one method that basically invalidates the whole library for an old compiler, that's not great. So what we're doing, a newer compiler can write something into the binary that tells the old compiler, okay, this method is what you can't understand, but everything else is fine.

</details>

**主持人**: 哦，这很聪明。

<details>
<summary>Original English</summary>

**主持人**: Oh, that's smart.

</details>

**Andre**: 是的。所以我们称之为“来自未来的消息”，它提供了一些细节。所以有这个，还有实验性功能的规范，这非常有帮助，我很高兴看到其他语言现在也在这样做，甚至 **Java** 现在也有实验性功能，这很棒。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So we call this a **message from the future** and like it can provide some details. So there's that and there's also um the discipline of **experimental features** which is incredibly helpful and I am very happy to see other languages doing it now and even **Java** does **experimental features** now which is wonderful.

</details>

**主持人**: **Andre** 刚才谈到了编程语言中的实验性功能，以及这在2010年代是多么罕见。这让我想起，在生产环境中运行实验也曾经是罕见的。不是因为团队不想这样做，而是因为这样做意味着需要构建大量的内部工具。分配、部署、测量、仪表盘、调试，所有这些。很长一段时间以来，只有少数公司能够大规模地做到这一点。像 **Meta** 和 **Uber** 这样的公司，这让我想到 **Statsig**。**Statsig** 是我们本季的赞助伙伴。**Statsig** 为工程团队提供了实验和特性标志的工具，这些工具过去需要多年的内部工作才能构建。实际情况是这样的：你将一个更改放在一个特性门后面，并逐步推出。比如说，首先向1%或10%的用户推出。你观察会发生什么。不仅仅是它是否崩溃，而是它对你关心的指标（转化率、留存率、错误率、延迟）产生了什么影响。如果有什么不对劲，你迅速关闭它。如果它朝着正确的方向发展，你就继续推广。关键在于测量是工作流程的一部分。你不需要在三种不同的工具之间切换，并在事后尝试匹配细分和仪表盘。特性标志、实验和分析都在一个地方，使用相同的底层用户分配和数据。这就是为什么像 **Notion**、**Brex** 和 **Atlassian** 这样的团队和公司使用 **Statsig**。**Statsig** 提供了一个慷慨的免费套餐，团队的专业版定价每月150美元起。要了解更多信息并获得30天的企业试用，请访问 **stats.com/pragmatic**。有了这个，让我们回到 **Andre** 和 **Kotlin** 中的实验性功能。

<details>
<summary>Original English</summary>

**主持人**: **Andre** just talked about **experimental features** in programming languages and how that used to be rare back in the 2010s. What this reminded me is that running experiments in production used to also be rare. Not because teams did not want to do it, but because doing it meant building a lot of internal tooling around it. Assignment, rollouts, measurements, dashboard, debugging, the whole thing. For a long time, only a handful of companies really pulled this off at scale. Companies like **Meta** and **Uber**, which brings me to **Static**. **Static** is our presenting partner for the season. **Stata** gives engineering teams the tooling for experimentation and **feature flagging** that used to require years of internal work to build. Here's what it looks in practice. You ship a change behind a **feature gate** and roll it out gradually. Say to 1% or 10% of users at first. You watch what happens. Not just did it crash, but what did it do to the metrics you care about? Conversion, retention, error rates, latency. If something looks off, you turn it off quickly. If it's trending the right way, you keep rolling it forward. And the key is that the measurement is part of the workflow. You're not switching between three different tools and trying to match up segments and dashboards after the fact. **Feature flags**, experiments, and analytics are in one place using the same underlying user assignments and data. This is why teams and companies like **Notion**, **Brex**, and **Atlassian** use **StatSik**. **Static** has a generous free tier to get started and pro pricricing for Teams starts at $150 per month. To learn more and get a 30-day enterprise trial, go to **stats.com/pragmatic**. And with this let's get back to **Andre** and **experimental features** in **cotlin**.

</details>

**Andre**: 所以我们做了很多工作，你知道，当你做一些实验性的事情时，这应该是会出问题的，你希望强调这一点，以确保用户意识到，你知道，我们不承诺保持兼容性。这东西我们打算破坏它。而且，你知道，我们过去常常在包名中加上“实验性”这个词，让人们明白这将会被重命名，而且，你知道，当你使用语言特性时会有警告，我们要求像编译器键这样的东西来启用语言特性等等，这确实有帮助。所以我们做了很多这样的事情。所以，所有这些都是一个额外的层面。不像 **SaaS** 系统，例如，编译器会留下，不，不是留下，而是创建大量的**工件**，这些工件在野外记录了它的历史。有源代码，有二进制文件，你肯定会遇到它们。每次有人都希望，不，这是一个模糊的案例。没有人会遇到它。但当用户足够多时，你就会遇到每一个该死的案例。

<details>
<summary>Original English</summary>

**Andre**: So we did quite a lot of work you know when when you're doing something experimental this is something that's supposed to break and you want to emphasize this to make sure that the user is aware that you know this is something we are not promising to keep compatible. This is something we're going to break. And you know we we used to put the word **experimental** and package names for people to understand that this will going to is going to be renamed and you know warnings when you use language features and we require like compiler keys to enable language features and stuff like that and kind kind of helps. So we did quite a lot of that. So, so all of this is an extra layer. Unlike a **SAS** system for example, a compiler leaves behind not behind but creates a lot of **artifacts** that pin down its history in the wild. There is source out there and there are binaries out there and you're guaranteed to encounter them. Every time anyone hopes that no, this is an obscure case. Nobody will ever hit that. With enough users, you hit every freaking case.

</details>

**Andre**: 这太令人惊讶了，我早在 1.0 版本之前就发现了这一点，当时我们只有几千个用户，我意识到如果某件事是可能的，那么外面总会有人真的去做。

<details>
<summary>Original English</summary>

**Andre**: And this is so surprising and I I discovered this fairly early on. I think before 1.0 when we had a few thousand users, I realized that if something's possible, some person out there will actually do it.

</details>

### Kotlin在Android上的崛起

**主持人**: 现在你们发布了 1.0 版本。你能告诉我 **Kotlin** 在发布后是如何流行起来的吗？你们的目标受众是谁？然后 **Android** 是怎么发生的？

<details>
<summary>Original English</summary>

**主持人**: Now you you got 1.0 out. Can you tell me how **Cotlin** grew in popularity when you released it? What was your target audience? And then how did **Android** happen?

</details>

**Andre**: 好的，这是一个复杂的故事。我们尽量不要跑题，因为它有很多支线。所以当我们开始 **Kotlin** 时，我们对 **Android** 并不是很了解，我的意思是，我们知道有 **Android** 这么个东西。

<details>
<summary>Original English</summary>

**Andre**: Okay, so that's that's a complicated story. Let's let's try to not get off track because this is like has a lot of side s side tracks to it. So when we started **Cotlin**, we were not really very aware of **Android** and I mean we knew that there was a thing called **Android**.

</details>

**主持人**: 有点讽刺。

<details>
<summary>Original English</summary>

**主持人**: Kind of ironic.

</details>

**Andre**: 是的。

<details>
<summary>Original English</summary>

**Andre**: Yeah.

</details>

**主持人**: 从现在来看，来自未来的消息，对吧？

<details>
<summary>Original English</summary>

**主持人**: From from now message from the future, right?

</details>

**Andre**: 是的。所以基本上在2010年，我们专注于大多数 **Java** 开发者，那一切都是关于服务器端的。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So basically in 2010 we were focused on the majority of **Java** developers that was all about the server side.

</details>

**主持人**: 是的。我明白了。

<details>
<summary>Original English</summary>

**主持人**: Yep. I can clear.

</details>

**Andre**: 是的。所以 **IntelliJ** 当时赚的钱大部分来自 **Spring** 用户，而且，你知道，每个人都知道这就是当时 **Java** 平台的重点。所以我们基本上是针对服务器端开发者，也包括桌面开发者，因为 **JetBrains** 拥有可能是最后一个用 **Java** 编写的桌面应用程序，或者至少是用 **Swing** 编写的。所以，这就是目标。最初甚至没有计划做 **Android**。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So the the most money **Intelligj** was making was on **Spring** users and you know everybody knew that this was what the **Java** platform was about by then. So we were targeting serverside developers basically and also desktop developers because **JetBrains** uh had the the probably the last desktop application written in **Java** or in at least in **swing**. So and that that was the target. It was initially not even a plan to do **Android**

</details>

**Andre**: **Kotlin** 在服务器端获得了一些使用，而且，你知道，它仍然在那里，并且在那里增长，虽然不如在 **Android** 上快，但仍然在服务器端有一些相当大的代表性。但几年后，互联网上有人问我们 **Kotlin** 是否适用于 **Android**，我当时想，我听说 **Android** 使用 **Java**，所以 **Kotlin** 应该可以工作。我们从未尝试过。去试试吧。我想是同一个用户或者另一个用户回来告诉我们工具链崩溃了。而且甚至不是 **Kotlin** 工具链。是 **Android** 工具链崩溃了。

<details>
<summary>Original English</summary>

**Andre**: and **codlin** like got some usage for the server side um and you know it's still there and it's growing there not as fast as on **Android** but still has some quite some representation on the server side but then a few years in some person on the internet asked us like whether **cotlin** works in **Android** and I was like I heard **Android** uses **Java** the **cotlin** should work. We never tried. Go and try. And I think it was the either the same user or a different user came back and said like the tool chain crashes. And it wasn't even the **cousin** to tool chain. It was the **Android** tool chain that crashed.

</details>

**Andre**: 而且，你知道，我们调查了一下，结果发现是 **Android** 工具链中的某个用 **C** 编写的工具，它会因为核心转储而失败，而且不是很清楚发生了什么。我们后来弄清楚了，结果发现，你知道，**Android** 开发者和构建 **Android** 平台的人，他们实际上阅读了 **JVM** 的规范，不像那些实现 **HotSpot VM** 的人，因为我怀疑 **HotSpot VM** 在规范之前就存在了。所以它是参考实现，但实际上是在构建之后才被规范化的。所以 **HotSpot VM** 对那些奇怪的事情非常宽容，比如如果我们在一个类文件中设置了一个不允许用于类的标志，**HotSpot** 不会关心，而且我们所有东西都在 **HotSpot** 上运行，所以我们认为一切都很好，但后来 **Android** 那边的人，他们实际上阅读了规范。

<details>
<summary>Original English</summary>

**Andre**: And you know, we looked into it and it turns out that it's some um some some tool in the **Android** tool chain that's written in **C** that just fails with the **core dump** and it's not very clear what's going on. And we later figured it out and it turned out that you know the **Android** developers and the people who built the **Android** platform, they actually read the spec of the **JVM** unlike the people who implemented the **hotspot VM** because the **hotspot VM** I suspect came before the spec. So it was the reference implementation but it was actually specified after it was built. So the **hotspot VM** was super lenient to weird things like that there would be like if we put a flag on a class file that was not allowed for classes hotspot wouldn't care and would we ran everything on **hotspot** and so we we thought everything was fine but then the **Android** side those were the people who actually read the spec

</details>

**主持人**: 他们实际实现了它。是的，他们会抱怨所有事情，这就是为什么我们使用 **Android** 工具链作为测试环境，因为，你知道，这就是我们如何摆脱字节码中愚蠢的东西，他们帮助我们验证了所有东西。但是，你知道，那里有一些陷阱，一些主流 **Java** 中没有人关心的遗留东西，只是在 **Android** 平台上忠实地实现了，那很有趣。所以，你知道，在某个时候，我很早就意识到 **Android** 是一个不断增长的平台，对我来说，当时我并不太了解市场动态，但对我来说，这意味着将会有很多新的应用程序，而且用一门新语言从头开始会容易得多。

<details>
<summary>Original English</summary>

**主持人**: and they actually implemented it. Yeah, they would complain about everything and this is why we used **Android** tool chain as a testing uh environment basically because you know this is how we could get rid of stupid things in in our bite code and they helped us a lot with validating everything. But you know there were some gotchas there and some some legacy stuff nobody cares about in the mainstream **Java** just you know were faithfully implemented on the **Android** **Android** platform that that was fun. So you know and at some point pretty early on I think I had this realization that **Android** was a growing platform which to me then I I don't think I had a much of of understanding of you know dynamics of markets then but to me it meant that there will be a lot of new applications and it's much easier to start completely a new with a new language.

</details>

**Andre**: 所以我在某个时候确保我们在 **Android** 上运行良好。那是在诉讼之后了。所以，你知道，所有这一切的大背景是，当 **Oracle** 收购 **Sun Microsystems** 后，他们起诉 **Google** 使用 **Java**，索赔数十亿美元，我想那已经解决了。

<details>
<summary>Original English</summary>

**Andre**: So I made sure at some point that we worked well in **Android**. It was already after the lawsuit. So you know the big context to all this was that when **Oracle** acquired **Sun Microsystems** they sued **Google** for billions of dollars for using **Java** and I think that is settled.

</details>

**主持人**: 它以某种方式解决了。是的。然后每个人都可以走自己的路，对吧？

<details>
<summary>Original English</summary>

**主持人**: It it it was settled in some way. Yeah. And then everyone could go on their own way,

</details>

**Andre**: 但它花了数年时间才解决。是的。

<details>
<summary>Original English</summary>

**Andre**: right? But uh it took years and years to settle. Yeah.

</details>

**主持人**: 所以当时这是一个非常重要的事情，而且，你知道，那场争议就在某个背景下。

<details>
<summary>Original English</summary>

**主持人**: So back then it was very much a thing and you know so that dispute was somewhere in the background.

</details>

**Andre**: 是的，所以基本上我们看到 **Android** 上的很多人真的很喜欢 **Kotlin**。

<details>
<summary>Original English</summary>

**Andre**: Uh but yeah so so basically we we saw that a lot of people on **Android** really liked **cotlin**

</details>

**主持人**: 他们喜欢它。

<details>
<summary>Original English</summary>

**主持人**: they they loved it.

</details>

**Andre**: 是的，一旦它稳定下来，几乎所有人都喜欢。我的意思是，我想对于你提到的所有事情，对吧，它比 **Java** 好得多。更容易编写，更容易阅读，有很多很棒的功能。所以，你知道，你使用 **Android** 作为一种方式来确保 **Kotlin** 正确编译，然后它为什么会在 **Android** 上流行起来？是的。所以 **Android** 的情况非常有趣，因为不像 **Java** 服务器端，它在开发团队的控制之下。在 **Android** 的情况下，设备在人们的口袋里，对吧？而且当你拥有数十亿这样的设备时，这些设备并不总是更新虚拟机，所以 **Android** 用户基本上被困在旧版 **Java** 上。

<details>
<summary>Original English</summary>

**Andre**: Yeah as soon as it was stable pretty much. I mean I think for all the things that you mentioned right like it was just so much nicer than **Java**. Easier to write easier to read lots of nice features. So you know you use **Android** as as a way to actually you know make sure that **Cotlin** compiled correctly and then why did it take off on **Android**? Yeah. So the situation in **Android** was pretty interesting because unlike **Java** uh server side that you know is kind of under control of the teams that develop on it. uh in the case of **Android** there are devices in the pockets of people right and when you have and billions of those devices and those devices don't always update the **virtual machine** so people in **Android** were basically stuck with old **Java**

</details>

**Andre**: 即使 **Java** 开始进步，例如 **Java 8** 在2014年发布，也很难将这个新版本的 **Java** 推向整个 **Android** 生态系统，因为它需要更新虚拟机，虽然有变通方法，**RetroLambda** 确实提供了帮助等等，但仍然有很多人被困在非常旧的 **Java** 上，所以 **Java** 在2014年并没有与 **Kotlin** 或 **C#** 相当，但它仍然好得多，解决了主要问题，但 **Android** 用户无法使用。所以 **Android** 社区对 **Java** 有更多的挫败感，而且 **iOS** 上还有 **Swift**。

<details>
<summary>Original English</summary>

**Andre**: and even when **Java** started progressing and for example **Java 8** came out in 2014 it was very difficult to roll out this new version of **Java** across the entire **Android** ecosystem because it required updates to the **virtual machine** and there were workarounds and **retro lambda** really helped and so on so forth but you know there was still a lot of people stuck with really old **Java** so **Java** wasn't you know on par with **cotlin** or **C#** uh in 2014 uh but it still was much better like and solved the major problem uh but it was not available to the **Android** people So there was a lot more frustration with **Java** in the **Android** community and also there was **Swift** on **iOS**.

</details>

**主持人**: 哦，是的。

<details>
<summary>Original English</summary>

**主持人**: Oh yeah.

</details>

**Andre**: 在那里，你知道，这是一个大生态系统从一门非常过时的语言过渡到一门非常好的语言的真实例子。

<details>
<summary>Original English</summary>

**Andre**: Where you know it was a real example of a big ecosystem transitioning from a really dated language to something really nice.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yep.

</details>

**Andre**: 我认为这两件事的结合是主要因素。而且，我的意思是，我们确保 **Kotlin** 在 **Android** 上运行良好。也非常幸运的是，在某个时候，**Google** 将开发者工具从 **Eclipse** 平台切换到了 **IntelliJ** 平台，当时 **IntelliJ** 在我记不清是2014年还是2013年左右开源了。所以，你知道，我们有一个很好的插件，因为所有东西都在 **IntelliJ** 平台上运行，同一个插件也适用于 **Android**，许多其他事情都非常顺利。好吧，非常顺利。有很多 bug，但还算顺利。所以感觉这是一个非常好的匹配，很多人对此表示赞赏，我们真的很想以某种方式引起 **Google** 团队的注意，你知道，也许谈谈它什么的，但就是没有发生。所以我们在2016年发布了，而且，你知道，我们与 **Google** 有一些沟通，但他们对此不感兴趣。他们觉得，好吧，我想我们会继续这样做，一些人已经在构建 **Android** 应用程序了。

<details>
<summary>Original English</summary>

**Andre**: And I think compounding these two things were uh like the major factors. And also I mean we we made sure that **cotlin** worked well on **Android**. Also very fortunately at some point **Google** switched the developer tooling from the **Eclipse** platform to the **Intelligj** platform when **Intelligj** was open sourced back in I don't remember 2014 2013 I think or something like that. So, you know, it was we we had a nice plugin because uh everything worked on the **Intelligj** platform and the same plug-in worked for **Android** and many other things like were just very smooth. Well, very smooth. There were a lot of bugs but um reasonably smooth. So it felt like uh a very good match and a lot of people appreciated that and we really wanted to somehow draw the attention of the team at **Google** to you know maybe talk about it or something and it just didn't happen when so we released in 2016 and there was you know we we had some communication with **Google** in general but there was no interest in that side they're like okay we I guess we'll just keep going as we do and some people were already building **Android** applications

</details>

**Andre**: 而且，一些人在我们发布 1.0 版本之前就已经在使用 **Kotlin** 构建生产应用程序了，而且，你知道，向这些勇敢的人致敬，因为他们为我们提供了宝贵的反馈，但你们太勇敢了。是的。所以，你知道，它就是自然而然地发展起来的。当我们最初开始时，我给自己设定了一个内部目标，如果能达到10万用户，那就是成功。如果能达到10万，我就做得足够好了。当然，很难说一门语言有多少用户，但，你知道，你可以大致估算一下。我认为我们在2016年有望达到10万用户，因为它正在增长。当时有几万用户，看起来不错。但后来 **Google** 的一些人联系我们，说他们想聊聊，结果他们想聊的是在 **Google I/O 2017** 上宣布正式支持 **Kotlin**。那是在那次谈话发生后的三个月内。我们当时想，“是的，当然。我们来做吧。我们需要做什么？”结果我们必须解决很多问题，但我们做到了。我认为这是 **Google** 团队的英勇努力。他们做了令人惊叹的事情，在那里完成了不可能完成的事情。而且，我现在在他们中间也有好朋友。那真的是非常非常接近，我们差点就错过了截止日期，但我们解决了。是的，在我们这边，我们也必须让许多事情运作起来，而且，你知道，弄清楚我们现在如何更好地与 **Android Studio** 互操作，然后，你知道，我们如何建立流程和所有一切，但围绕它有一个很大的法律问题。这就是 **Kotlin Foundation** 成立的时候，我们必须设计 **Kotlin Foundation** 的决策协议，而且，你知道，**Google** 拥有 **Kotlin** 商标一年，因为法律原因，这基本上是 **JetBrains** 的保证，直到基金会成立。所以你可以查阅公共记录，**Google** 拥有 **Kotlin** 商标一年，但后来基金会成立了，并转移给了基金会。所以，你知道，那很有趣。那是一段相当疯狂的时期，但看到人们在 **Google I/O** 宣布时有多高兴，真是太棒了。

<details>
<summary>Original English</summary>

**Andre**: And well some people were building production applications in **cotlin** before we released 1.0 and you know uh kudos to the brave people because they gave us invaluable feedback but you guys are too brave. Yeah. So, you know, it just grew organically and when when we started in the very beginning. Uh I set this internal goal to myself uh that if we get to 100,000 users, it's a success. Like I've done well enough if it gets to 100,000. And of course, it's hard to tell how many users a language has, but you know, you can kind of estimate that. And I think we were on track to get to a 100 thousand users during 2016 because it it was growing. It was in the tens of thousands, you know, it looked good. But then uh some people from **Google** reached out and said they wanted to chat and it turned out they wanted to chat about announcing official support for **Cotlin** at **Google I/O 2017**. that would be in like 3 months from the time of that conversation. We were like, "Yeah, sure. Let's do it. What do we need to do?" And it turned out we we had to figure out quite a few things, but we managed. And I think it was a heroic effort on the side of the **Google** team. They did amazing things, impossible things there. And uh I have good friends um among them uh now. And it was like it was really really close like we we could have missed the deadline but we figured it out and yeah on our side also we had to make many things work and you know figure out how we now interoperate with **Android Studio** better and then you know how do we set up processes and and everything but there was like a big legal thing around it. uh this is when the **Kotlin Foundation** was invented and we had to design the protocols for decision-m the **cot** foundation and uh you know **Google** owned the trademark for **cotlin** for one year because of legal things it was basically a guarantee from the **jet brain** side u until the foundation gets set up uh so you you can look up the public record **Google** was in possession of the **cotlin** trademark for a year, but then the foundation was set up and was transferred to the foundation. So, you know, it it was it was fun. Uh it was pretty crazy time, but it was amazing to see how happy people were at **Google I/O** when the announcement happened. That was

</details>

**主持人**: 那使用量肯定暴涨了。你可能很快就突破了10万。

<details>
<summary>Original English</summary>

**主持人**: and that usage must have skyrocketed. You you probably blew past 100,000 pretty quickly.

</details>

**Andre**: 是的。是的，我想我们，是的，我们那一年可能达到了数百万。这基本上就是那一刻的发生。而且，你知道，我多年前就知道，一门语言成功的最佳途径是成为平台的一部分。而且，你知道，就像 **C** 基本上是 **Unix** 的一部分，或者像 **C#** 是 **Windows** 的一部分，或者 **JavaScript** 是 **Web** 平台的一部分。我知道 **Kotlin** 没有平台。所以 **Kotlin** 的日子本应该比其他一些语言艰难得多，但，是的，平台不知何故出现了。

<details>
<summary>Original English</summary>

**Andre**: Yes. Yes, we I think we went Yeah, we probably got into millions that year. This is what was basically like the the moment happening and you know I knew many years before that I knew that the easiest way for a language to succeed is to be part of a platform and you know like **C** was part of **Unix** basically or like **C#** was part of **Windows** or **JavaScript** was part of the **web** platform and I I knew that **Cotlin** had no platform. So it was supposed to be much tougher time for **cotlin** than for some other languages but yeah the platform came along somehow.

</details>

### AI时代的新语言CodeSpeak

**主持人**: 展望今天，你2020年离开了 **Kotlin**，后来离开了 **JetBrains**。你现在在做什么？

<details>
<summary>Original English</summary>

**主持人**: Jumping forward to a lot more closer to today you you you have you left **cotlin** in 2020 later you left **jet brains**. What are you doing right now?

</details>

**Andre**: 是的。所以我现在也在研究一门语言，但它是一种不同类型的语言，因为时代变了，你知道，你可以从类似的角度来看待它，就像在 **Kotlin** 中，我们想摆脱样板代码。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So I'm also working on a language right now but it's sort of a different kind of language because the times have changed and you know you can you can look at it uh from a similar perspective like in **Cotlin** we wanted to get rid of **boilerplate**

</details>

**Andre**: 我们想让程序更切中要害，减少仪式感。我认为这就是我们今天拥有一个绝佳机会，在不同层面做同样事情的地方。

<details>
<summary>Original English</summary>

**Andre**: we wanted to make programs more to the point and less of a ceremony and I think this is where we today we have a great opportunity to do the same thing at a different level

</details>

**主持人**: 因为 **AI**。

<details>
<summary>Original English</summary>

**主持人**: because of **AI**.

</details>

**Andre**: 因为 **AI**。

<details>
<summary>Original English</summary>

**Andre**: It's all because of **AI**.

</details>

**Andre**: 是的，**AI** 很棒，因为许多对人类来说显而易见的事情，对 **LLMs** 来说也显而易见，这大大缩小了机器能理解的和人类能理解的之间的差距，这意味着我们可能不再需要编写愚蠢的代码了。那会非常好。所以一方面，你知道，编程语言的整个历史都是从低级抽象到高级抽象。我们从机器码开始，然后汇编语言实际上是一个进步。

<details>
<summary>Original English</summary>

**Andre**: Yes, **AI** is great because many things that are obvious to humans are obvious to **LLMs** as well, which closes this gap between what the machine can understand and what a human can understand quite a lot, which means we might not need to write dumb code anymore. That would be very nice. So on the one hand uh you know the the entire history of uh programming languages is going from lower to higher levels of abstraction. We started with machine codes then assembly was a step up actually assembly language is a higher level language and

</details>

**主持人**: 比机器码更高级。好的。是的。

<details>
<summary>Original English</summary>

**主持人**: than machine code. Okay. Yeah.

</details>

**Andre**: 是的。然后 **C** 在当时是一门高级语言。然后当然，像 **Java** 这样的托管语言是一个巨大的进步，使编程更容易上手，团队可以发展壮大，你不需要成为一个超级能干的程序员就能构建出可用的软件。然后，你知道，像 **Kotlin** 这样的语言建立在这些成功之上，我们进一步提高了抽象级别，但现在我们可以做得更好。所以你可以想象，一个普通的程序，一些应用程序代码。这段代码中的很多东西对你我来说都是显而易见的。所以如果你让我写这段代码，你不需要把所有东西都详细说明。你解释程序需要做什么，我就可以实现它，它会按照你想要的方式工作。你知道，这取决于规范的详细程度，但你可以告诉我的东西比你必须告诉编译器要少得多。

<details>
<summary>Original English</summary>

**Andre**: Yeah. And and and then **C** was a high level language back in the day. And then of course like managed languages like **Java** were a great step up and made programming a lot more accessible and and like teams could grow and you didn't have to be a super competent programmer to build working software and then you know things like **cotlin** built on top of um that success and we raised levels some more but now we can do even better in that so you can imagine uh like a normal program some some application code. A lot of the things in this code are obvious to you and to me. So if if you ask me to write this code, you don't spell everything out. You explain what the program needs to do and I can implement it and it will work the way you want. There there are, you know, it depends on how detailed the specification is, but you can tell me a lot less than you would have to tell a compiler.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Andre**: 是的。所以这就是 **CodeSpeak** 的重点。我们想基本上缩小程序员需要告诉计算机的信息量，以使程序工作。根据我目前的经验，你可以将大部分代码量缩小大约10倍。

<details>
<summary>Original English</summary>

**Andre**: Yeah. And so this is the point with **code speak**. We want to basically shrink the amount of information a programmer needs to tell the computer to make the program work. And from my current anecdotal experience, you can shrink a lot of the code about 10x

</details>

**Andre**: 这意味着，你知道，很多项目可以小得多，人类处理起来会容易得多，阅读起来会容易得多，阅读是最重要的部分，导航起来会容易得多，它就变成了软件工程的精髓，当你不再处理愚蠢的编译器时。你不再受其限制。你所表达的是只有你知道的需要发生的事情，因为其他一切机器也都知道。

<details>
<summary>Original English</summary>

**Andre**: which means that you know a lot of projects out there can be a lot smaller and it will be a lot easier for humans to deal with that and a lot easier to read and reading is the most important bit and a lot easier to navigate and it becomes you know the essence of **software engineering** when you are not like dealing with the stupid compiler. You're not restricted by that anymore. What you're expressing is what only you know about what needs to happen because everything else the machine knows as well.

</details>

**主持人**: 那么，你能再详细介绍一下 **CodeSpeak** 是什么，或者这门语言是什么吗？它是在设计一种实际的、更简单的形式语言吗？它当然使用了 **AI** 和 **LLMs** 以及代理可以做的所有花哨的东西。这是什么？

<details>
<summary>Original English</summary>

**主持人**: So can you tell me a bit more on what **code speak** is or what this language is? Is it designing an actual like kind of formal language just simpler? Is it using of course we know that that **AI** and **LMS** and agents can do all all the funky stuff. Where is this? What is this?

</details>

**Andre**: 好的。是的。是的。我来解释一下。我认为思考 **CodeSpeak** 的最佳方式是，它是一门基于英语的编程语言。它不是一门形式语言，或者说不是一门完全形式化的语言，但它是一门编程语言。它是一门应该由工程师使用的语言，但它大量使用了 **LLMs**。这就是新语言的未来，因为，你知道，你可以把今天的终极语言想象成一门普通的编程语言，它将 **LLM** 作为库来使用。你知道，曾经有一段时间 **npm** 很棒，因为它是一个巨大的 **JavaScript** 库仓库，一个世界上最大的包管理器。

<details>
<summary>Original English</summary>

**Andre**: Okay. Yeah. Yeah. So I'll I'll try to explain this. So I think the best way of uh thinking about **code speak** is it's a programming language that based on English. It's not a formal language or not an entirely formal language but it's a programming language. It's a language that's supposed to be used by engineers but it uses **LLMs** heavily and uh this is like the way new languages will be because you know you can think about uh the ultimate language of today as a program normal programming language that uses an **LLM** as a library. You know there was a time where **npm** was wonderful because you know it's it's a huge repository of all kinds of **JavaScript** lie packet manager one of the biggest package in the world.

</details>

**主持人**: 对。

<details>
<summary>Original English</summary>

**主持人**: Right.

</details>

**Andre**: 是的。所以你有一个巨大的库，你可以使用它，但现在你有一个更好的 **npm**。

<details>
<summary>Original English</summary>

**Andre**: Right. Yeah. So you have a huge library out there that you can all but now you have an even better **npm**

</details>

**Andre**: **LLM** 已经看过了世界上所有的代码，如果你足够有创意，你可以从 **LLM** 中提取出这些代码。

<details>
<summary>Original English</summary>

**Andre**: the **LLM** that has seen all the code in the world and if you're inventive enough you can fish this code out of the **LLM**.

</details>

**主持人**: 是的，你需要有提示，对吧？

<details>
<summary>Original English</summary>

**主持人**: Yeah, you need to have to prompt, right?

</details>

**Andre**: 诀窍是，如果能有一门编程语言，将整个 **LLM** 作为库，或者作为一袋库，那会非常好，对吧？诀窍是，要从 **LLM** 中提取任何东西，你必须使用自然语言。所以这个令人难以置信的知识数据库的查询语言是非正式的，而且目前还没有已知的方法可以使其形式化。所以本质上，今天的这种终极语言必须至少部分是非正式的。

<details>
<summary>Original English</summary>

**Andre**: Uh, and the trick is like it would be really nice to have a programming language that has the entire **LLM** as a library or as as a bag of libraries, right? The the trick is to take anything out of an **LLM**, you have to use natural language. So the query language to this incredible database of all the knowledge is informal and there is no way at least known today that you can make it formal. So inherently this ultimate language of today has to be at least in part informal

</details>

**Andre**: 这就是我们正在努力的方向。所以它仍然悬而未决，我们能把它做得多形式化，而且，你知道，目标不是让它受到超级限制，而是利用所有的力量并支持用户，你知道，我们需要排除愚蠢的错误和类似的事情，我们仍在为此努力，但基本思想是，如果你不逐行编写代码和算法的每个细节，你可以基本上像我与你沟通一样沟通意图，你就会快得多。

<details>
<summary>Original English</summary>

**Andre**: and this is what we're working on. So it's still in the air like how formal can we make it and you know it's it's not the goal to make it super restricted but the goal is to uh leverage all the power and support the user you know we need to rule out stupid mistakes and things like that and we're still working on that but the basic idea is uh if you instead of spelling out every line of code and every bit of your algorithm you can basically communicate intent the same way I can communicate to you, you will just get there much faster.

</details>

**主持人**: 嗯。所以，我问 **Chris Latner** 的一个问题，我也会问你。你正在谈论为软件工程师设计一门语言，以更高效、更简洁、以新方式构建软件，这听起来超级令人兴奋。但另一方面，我们有 **LLMs**。你认为是否有必要为 **LLMs** 设计一种新的编程语言，以便它们更高效地使用？

<details>
<summary>Original English</summary>

**主持人**: Mhm. So, one question that I asked **Chris Latner** uh was which I'm going to ask you as well. You're talking about designing a language for software engineers to build software more efficiently, maybe more concise and in a new way and it sounds super exciting. But going to the other side, we have **LLMs**. Do you think there is a need to design a new type of programming language for **LLMs** to use more efficiently?

</details>

**Andre**: 这是一个非常有趣的问题，我对此进行过几次讨论。我的立场是，这可能是一种误导。

<details>
<summary>Original English</summary>

**Andre**: That's a very interesting question and I had a few discussions about this. My position is it's probably misguided

</details>

**Andre**: 因为一些原因。首先，要让一个 **LLM** 很好地理解某种语言，你需要一个巨大的训练集，而对于新语言来说，这个训练集是不存在的。你可以尝试合成它等等，但它不会像其他语言那样好。例如，现在，新语言对 **LLMs** 来说比更成熟的语言更难。任何 **LLM** 编写 **Python** 都比编写 **Rust** 甚至 **Kotlin** 更好。即使是那些编写 **Java** 非常好的 **LLMs** 也不会编写 **Kotlin** 那么好，因为它在训练集中出现的频率不高，因为它更年轻。而且，你知道，有办法解决这个问题，我认为后来的模型在 **RL** 集中添加了一些 **Kotlin**，并且正在变得更好，但仍然很困难。所以这是第一个挑战。第二个挑战是，我认为不一定需要存在一种能让 **LLMs** 更好地工作的语言，因为 **LLMs** 是在人类语言上训练的。它们对编程语言的了解是其中的一部分。它们的力量在于接触了世界上所有的代码，而且是现有代码，为它发明一门新语言。我不知道这有多大的前景。

<details>
<summary>Original English</summary>

**Andre**: because of a number of things. So one to get an **LLM** to understand some language well you need a huge training set and with the new language that training set is not there. You can try to synthesize it and so on forth but it's not going to be as good as other languages. Like for example, right now the newer languages are just harder for **LLMs** than the more established ones. Like any **LLM** writes **Python** better than it writes **Rust** or even **Cotlin**. Even the **LMS** who that write **Java** very well won't write co **cotlin** as well because it's not as present in the training set because it's younger and you know that there are ways around it and I think the later models like added some more **codlin** into the **RL** sets and it's getting better but still like it's pretty hard and so that's challenge number one also challenge number two I don't think there necessarily have to has to exist a language that makes it better because **LLMs** are trained on human language. Their knowledge of programming languages is part of that. Their power is in having been exposed to all the code in the world and it's existing code and inventing a new language for that. I don't know how promising that can be.

</details>

**Andre**: 你可以做另一件事，这是一个有趣的研究项目。你可以从 **LLM** 中提取一门语言，因为，你知道，它内部有一些关于正在发生的事情的中间表示，在推理过程中，也许你可以提取出一种最优的提示语言，它不一定能被人理解，而且有一些实验表明，你可以创建完全无法理解的提示，但它们会给出与正常人类提示相同的结果，只是会更短。

<details>
<summary>Original English</summary>

**Andre**: You can do another thing which is an interesting research project. you can sort of extract a language from an **LLM** because you know internally it has some intermediate representations of what's going on and during inference and maybe you can sort of extract a the optimal prompting language it's not guaranteed to be intelligible to humans and there are some experiments that show that you know you can create completely unintelligible prompts that give the same results as normal uh human prompts but they will be shorter.

</details>

**Andre**: 也许你可以做类似的事情。我不知道它是否会有很大帮助。但我们在 **CodeSpeak** 中所做的是，作为这门语言工作的一部分，我们需要真正确定这种查询语言的能力。我们现在正在做的是，我们正在查看现有代码，并尝试为这段代码找到最短的英语描述，这些描述可以生成等效的实现。不一定是逐字逐句的，但它们必须以相同的方式工作。这是一个有趣的练习，因为你需要弄清楚如何以一种方式表示代码中的思想，这样你就可以生成相同类型的代码，但你表示的思想要紧凑得多，而且你表示的这段代码会随着时间演变。对吧？所以你在这段版本之上有一个提交历史，所以随着时间的推移，你需要能够表示 **CodeSpeak** 版本中的所有更改，而且，你知道，你需要确保当原始代码中有一个小更改时，规范中的更改也更小，这是一个有趣的挑战。所以通过这种方式，我们正在某种程度上发现 **CodeSpeak** 作为一门语言，或者至少是它的一部分，而不是真正设计它。你知道，这是一个非常新的世界，从某种意义上说，你知道，现在如果你使用 **AI**，一切都是机器学习问题，这意味着，你知道，过去如果你在纸上有一个非常智能的算法，你就可以实现它并确保它工作。

<details>
<summary>Original English</summary>

**Andre**: You maybe you can do something like this. I don't know if it will help a lot. But what we're doing in **code speak** as part of uh working in this language we need to really nail down this query language capacity. And what we're doing now is we're looking at existing code and we're trying to find the shortest English descriptions for this code that can generate equivalent implementations. Not necessarily character to character, but they have to work the same way. And that's an interesting exercise because you need to figure out how to represent the ideas in the code in a way that a you can generate the same kind of code but the ideas you represented were a lot more compact but also this code you represent it evolves over time. Right? So you have a commit history on top of this version and so going forward in time you need to be able to represent all the changes in your uh **codespeak** version and you know you you need to make sure that when it's a small change in the original code the change in the spec is smaller that's an interesting challenge. So in this way we we're sort of discovering uh **codespeak** as a language or at least parts of it uh and not really designing that bit of it. You know it's it's a very new world in the sense that you know nowadays if you work with **AI** everything is a **machine learning problem** and that means you know back in the day if you had a very smart algorithm on paper you could just implement it and make sure it works.

</details>

**Andre**: 如今，无论你有什么算法，首先你需要一个数据集，如果你不知道如何收集数据集，那就不要开始。是的，这就是我们正在做的。

<details>
<summary>Original English</summary>

**Andre**: Nowadays whatever algorithms you have in mind you need a **data set** first of all like if you don't know how to collect a **data set** don't even start and yeah this is what we're doing.

</details>

### AI对软件工程的影响

**主持人**: 那么，你每天都在使用这些工具，我的意思是，你正在用它们进行构建，你认为编程作为一个整体，或者说软件工程，正在被 **AI** 如何改变？你认为未来会是什么样子，特别是对于软件工程师来说？你自己也是一名软件工程师。你一生中编写了如此多的代码。你还在编写代码吗？

<details>
<summary>Original English</summary>

**主持人**: so just taking a a look at you you are using these tools day in day out I mean you're you're building with them how do you think programming as a whole or soft I'll say **software engineering** is being changed by by **AI** and how do you think the future is starting to look especially think about software engineers. You're a software engineer yourself. You you've you've written so much code in your life. And are you still writing code?

</details>

**Andre**: 是的，我正在写一些代码。是的。而且。

<details>
<summary>Original English</summary>

**Andre**: Yeah, I'm writing some code. Yeah. And uh

</details>

**主持人**: 抱歉，是打字还是提示？

<details>
<summary>Original English</summary>

**主持人**: type sorry, typing or prompting?

</details>

**Andre**: 我两者都在做。有时我只是打字。更多时候我使用 **Cursor** 的 Tab 补全功能打字。我也做了很多提示。而且，你知道，这是所有这些的结合。但 **Cursor** 的补全功能确实比传统的 **IDE** 更进一步。我想 **IntelliJ** 现在也有类似的功能。所以它就像大量的编码，但思维方式和工具集都非常不同。是的。所以就编程正在发生的变化而言，我认为我们正处于新时代的早期。所以，你知道，直到去年才发现编码代理是好的。是的。

<details>
<summary>Original English</summary>

**Andre**: Uh I'm doing both. I'm sometimes I'm just typing. Um more often I'm typing with **cursor** tab completion. I'm doing quite a lot of prompting as well. And you know that's a combination of of all this. But **cursors** completion is really a step up from traditional **IDs**. And I think the **IntelliJ** has something similar now. So it's it's like a lot of coding but in a very different kind of mindset and a different tool set. Yeah. So in terms of what's happening to programming, I think we are in the early days of the new era. So you know it's only last year that figured out that **coding agents** are good. Yeah.

</details>

**主持人**: **Cloud Code** 和 **Cursor Agent** 等等。

<details>
<summary>Original English</summary>

**主持人**: **Cloud Code** and and **cursor agent** and so on so forth.

</details>

**Andre**: 我认为这只是一个非常早期的步骤。现在我们正处于这个阶段，是的，很多人都喜欢代理，它们非常有用，我每天都在使用它们。但我认为这种模型存在固有的问题，你与编码代理互动的方式存在问题，因为它是一对一的聊天，作为人类，我用人类语言与代理交谈。所以我在高层次上沟通我的意图，然后这个意图被翻译成代码，我将代码提交到仓库，我的队友会看到这些代码。所以我的聊天记录丢失了。

<details>
<summary>Original English</summary>

**Andre**: And I think this is a very early step. Right now we are in this phase where yeah a lot of people are in love with agents and they can be very useful and I use them every day. But I think there are there are inherent problems with the model with how you interact with a **coding agent** because it's a one-on-one chat and as a human I talk to the agent in human language. So I'm uh communicating my intent on a high level and that intent gets translated into code and it's the code that I commit to the repo and it's the code that my teammates will see. So my chat history is lost.

</details>

**主持人**: 一个大问题。

<details>
<summary>Original English</summary>

**主持人**: A big problem.

</details>

**Andre**: 是的。所以结果是，我用人类语言与机器交谈，但我与团队沟通的方式是机器语言。这有点倒退。

<details>
<summary>Original English</summary>

**Andre**: Yeah. So so it turns out I'm talking to a machine in a human language but the way I communicate with my team is the machine language. That's kind of backwards.

</details>

**Andre**: 是的，所以我们在 **CodeSpeak** 中尝试做的就是将所有东西提升到人类语言的层面。所以这就是我们开始的地方。我们说，好吧，我们有这个不可思议的工具，我们可以提示代理为我们实现代码，我们只是在利用它。所以我想很多团队还没有意识到审查所有代码有多困难。我与一些人交谈过，他们说，也许我们根本不需要审查这些代码。我当时想，“是的，我的意思是，你可以这样做几天，然后它就会崩溃。”

<details>
<summary>Original English</summary>

**Andre**: Uh so yeah so what we're trying to do in **code speak** is to elevate everything to the human language level. So this is this is where we start. We say okay we have this incredible tool we can prompt agents to implement code for us and we are just picking it up. So I think a lot of teams haven't yet realized how difficult it is to review all the code. And I've talked to people who are like maybe we can just not review this code. I'm like, "Yeah, I mean, you can for a couple of days and then it just collapses."

</details>

**Andre**: 我认为今天的另一个重要主题是，我们将进行大量的测试，而且，如果你测试做得真的很好，你可能不需要审查代码。

<details>
<summary>Original English</summary>

**Andre**: And I I think a another big theme uh of today is that we'll be doing a lot of testing and it like you may not need to review the code if your tests are really good.

</details>

**主持人**: 你需要验证它，对吧？你的意思是验证不一定意味着审查。

<details>
<summary>Original English</summary>

**主持人**: You need to verify it, right? That's what you're saying is and verifying might not mean reviewing,

</details>

**Andre**: 对吧？

<details>
<summary>Original English</summary>

**Andre**: right? So,

</details>

**主持人**: 或者它可能不意味着。

<details>
<summary>Original English</summary>

**主持人**: or it could not mean

</details>

**Andre**: 是的。当然，这取决于领域，你可能可以不那么频繁地审查代码，但要以某种方式确保，无论是审查测试还是其他方式，你的测试是好的。这是一个趋势，我们正在 **CodeSpeak** 中投入大量精力进行自动化测试，并确保测试实际检查了正确的东西，并且它们检查了所有代码等等。这是非常有趣的计算机科学，现在也是一个问题，特别是在 **CodeSpeak** 的情况下，以及我认为对于其他代理来说也是，审查代码可能太多了，但我们能否以一种方式向用户展示我们生成的测试，这种方式实际验证了我们完成了应该完成的工作。这很棘手。有些测试会非常冗长和乏味，你知道，但我们正在努力。这就是我们所处的位置，我认为我们将看到模型能力方面的大量发展，我们将让代理实现一些所谓的“显而易见”的事情，例如，代理刚刚开始使用语言服务器，基本上我们一直拥有的所有代码相关的东西都没有得到充分利用。而且，你知道，如果你比较 **IDE** 集成代理，比如 **Cursor** 或 **JetBrains** 的 **Juni**，你有很多代码导航能力，而且，你知道，代码数据库被索引了，你可以非常快速地导航它。你可以非常快速地找到东西。例如，当你运行 **Cloud Code** 时，它可能没有这些，并且使用 **GPT**，它也会成功，但会花费更长的时间并消耗更多的 Token。所以，你知道，我确信今年，所有这些工具都会出现在大多数代理中，我们将拥有更复杂的模型支架。所以这是一件事，但随后，你知道，我的问题总是，在结局或更远的未来会发生什么？这很难预测，我们可以假设模型会变得更智能，但重要的是人类不会。

<details>
<summary>Original English</summary>

**Andre**: Yeah. depending on on the domain of course you you might get by without reviewing the code as much but being sure somehow either reviewing the test or somehow else making sure that your tests are good. That's a trend and and we are putting a lot of effort at **C code speak** into **automated testing** and making sure the tests actually check the right things and that they check all the code and all that stuff. That's very interesting **computer science** and also it's now a question of especially in the case of **code speak** and I think for other agents as well like yeah reviewing code can be too much but can we present the tests we generated to the user in a way that actually verifies that we did what what was to be done. It's tricky. some tests will be just very long and tedious to read and you know but we're working on that and that's that's what where we are and I think we'll we'll see a lot of development in terms of power of the models and we'll get some quote unquote obvious things implemented in agents for example the agents are just starting to use like **language servers** and basically all the stuff that we've always had for code is not very utilized And you know if you compare like **ID integrated link** u **ID integrated agents** like **cursor** or um **juni** at **jet brains** you have a lot of like **code navigation** capability and and you know databases of uh code is indexed and you can navigate it very quickly. You can find things very quickly. When you run **cloud code** for example it might not have that and use **gp** and it will be as successful but take a lot longer and burn a lot more tokens. So you know I I'm sure this year uh all these tools come to most agents and we'll have a lot more sophisticated scaffolding around the models. So that's that's one thing but then uh you know my question is always what's going to happen sort of in the end game or in further future and there it's it's very hard to predict and we can assume that models will become much smarter but important thing is that humans will not.

</details>

**Andre**: 所以我对未来有一件事是肯定的，虽然很难预测未来，但这件事我确实知道：人类将和今天一样聪明或一样愚蠢。如果我们拥有极其智能的模型。

<details>
<summary>Original English</summary>

**Andre**: So one thing I know about the future and it's hard to know the future but this thing I do know about the future humans will be as smart or as dumb as they are today. And if we have incredibly smart models

</details>

**Andre**: 那么我们所做的事情将受到人类的限制，这就是我研究代码的原因，因为它是一个为人类而非模型设计的工具。

<details>
<summary>Original English</summary>

**Andre**: uh what we will be doing is constrained by how humans are and and this is one of the reasons why I'm working on code because a tool for humans not for models.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**主持人**: Yeah.

</details>

**Andre**: 我想一个重要的脚注是，很多人会说，你知道，如果我们有足够智能的模型，它们可以自己审查代码，它们可以自己测试代码，但我的问题是，谁在这里做决定？你知道，如果所有的软件工程工作都由模型完成，这意味着人类没有任何发言权，这有一个名字，叫做**技术奇点**。

<details>
<summary>Original English</summary>

**Andre**: And humans I know I can build a tool for them. I guess an important footnote is that many people will say things like you know if we have smart enough models they can review the code themselves and they can test the code themselves but then my question would be like who's making the decisions here you know if if all the **software engineering** work is done by models it means humans don't have any say in that and this has a name it's called **technological singularity**

</details>

**主持人**: 当人类不做决定时，这意味着我们不再掌权。

<details>
<summary>Original English</summary>

**主持人**: when humans are not making decisions it means We're not in charge.

</details>

**Andre**: 是的。

<details>
<summary>Original English</summary>

**Andre**: Yep.

</details>

**Andre**: 所以这不是我为 **CodeSpeak** 构建的未来。没有人应该为那样的未来构建任何项目。在那个未来，我们都消失了。你的项目无关紧要。但我的假设是，当我谈论未来时，**技术奇点**不会发生。所以基本假设是人类掌权。如果人类掌权，他们的工作就是沟通意图。所以我们必须说明我们需要构建什么样的软件。当我们谈论严肃的软件时，它总是复杂的。不可能有什么非常简单的事情能带来改变。

<details>
<summary>Original English</summary>

**Andre**: So this is not the future I'm building **codes** speak for. Nobody should build any projects for that future. In that future, we're gone. Your projects don't matter. But so my assumption when I'm talking about the future is that the tech **technological singularity** is not happening. And so the the basic assumption is humans are in charge. And if humans are in charge, it's their job to communicate intent. So we have to say what kind of software we need to build. And when we're talking about like serious software, it's always complex. There's no way there's some very simple thing that will make a difference.

</details>

**Andre**: 当我们谈论这种复杂性时，这就是我们的工作，管理这种复杂性，弄清楚我们实际需要做什么。这绝对是工程。没有人能够在没有工程师思维的情况下处理大量的复杂性。它可以被称为软件工程，也可以被称为其他什么。但你必须这样做。你必须驾驭这种复杂性，组织这种复杂性，弄清楚它。我不是在谈论许多许多实现层的复杂性。也许不是。也许那被称为**偶然复杂性**。一些发生或源于我们如何实现系统的事情。但也有**本质复杂性**。我们希望它如何表现本身就足够复杂，我们需要弄清楚。这就是为什么我相信将会有像今天这样的工程师团队来开发系统。也许他们将是更强大的团队。也许更少的人可以交付更多的软件。是的，但仍然是团队的人在组织复杂性。这就是 **CodeSpeak** 的目的。回到我们今天所处的位置，模型今天能做什么。

<details>
<summary>Original English</summary>

**Andre**: And when we talk talk about this complexity, this is what our jobs will be like dealing managing this complexity, figuring out what we actually need to do. And this is absolutely engineering. There is no way someone can tackle huge amounts of complexity without an engineer mindset. It can be called **software engineering**, can be called something else. But you will have to do it. You will have to navigate this complexity, organize this complexity, figure it out. And I'm not talking about the complexity of many many layers of implementation. Maybe not. Maybe that is what's called **accidental complexity**. Something that happens uh like or arises from how we implement systems. But there is also uh **essential complexity**. How we want it to behave is complex enough that we need to figure it out. And this is why I believe there will be teams of engineers working on systems like today. Maybe they will be a lot more powerful teams. Maybe fewer people can deliver a lot more software. Yes, but still teams of people working on organizing complexity. And this is what **CodeSpeak** is for. Going back to where we are today with what the models can do today,

</details>

**主持人**: 你对开发者工具有何看法？现在感觉有点像狂野西部。

<details>
<summary>Original English</summary>

**主持人**: what do you see with developer tools? It feels a little bit of a wild wild west right now.

</details>

**Andre**: 非常如此。我的意思是，有很多，你知道，显然有 **Cloud Code**，有 **Cursor**，还有其他一些，但你认为我们会在哪些领域看到新的、不同的、更好的工具，才能真正跟上我们如何生成代码的速度，以及哪些部分感觉最混乱、最有趣？特别是因为在 **Kotlin**，你和团队为开发者构建了如此多的工具。

<details>
<summary>Original English</summary>

**Andre**: Very much so. I mean there's a lot of you know obviously with **clot code** with **cursor** w with with with others but what are areas that you you think we will see we will have to see new different better tools to to actually just catch up with with how we can generate and what parts feel the most messy and the most interesting especially because at **cotlin** you have and the team has built so many tools for developers

</details>

**Andre**: 是的，所以我认为，正如我之前提到的，今年将是让开发者工具可供代理使用的一年。存在一些技术挑战，但你可以解决它们。人们会这样做。此外，使用好的 **UI** 对你的代理也有令人惊讶的优势。一方面，将所有东西都放在你的终端中非常方便，但如果它是一个专用环境，你可以获得更好的用户体验。终端工具，尤其是 **Cloud Code**，非常棒。它完全突破了你在终端中能做的事情。但总的来说，你可以在专用环境中做得更好。所以我认为我们将看到更多这种集成到开发环境中的情况，或者只是从头开始构建新的开发环境，主要用于与代理协作。所以这是一件重要的事情。由于我们更加重视审查，应该有新的审查工具，我认为我们可以在很多方面做得比现在更好。我预计今年在测试方面不会有太多突破，因为它很难。我正在做这件事，它很难。今年不会发生。但也许今年会有一些进展。但总的来说，我认为过去几年最大的教训是，所有那些所谓的“显然需要”的东西，你知道，将代理连接到开发者工具的想法在两年前绝对是微不足道的。但它们需要很长时间才能实现，因为它很难，而且，你知道，这个行业没有人是懒惰的。每个人都在拼命工作，但它就是需要时间。你知道，在做高级事情之前，你需要弄清楚基础知识。所以，你知道，所有直接的想法最终都会实现。

<details>
<summary>Original English</summary>

**Andre**: right so I think uh as I already mentioned this year will be the year of making developer tools available to agents And there are some technical challenges, but you can figure it out. The people will be doing that. Uh there's also a surprising advantage to using a good **UI** for your agent. It's very nice to have everything in in your terminal in one sense, but then you can have a lot better user experience if it's a dedicated environment. And the terminal tools, especially **Cloud Code**, are amazing. And it's it's a complete breakthrough of what you can do in a terminal. But generally you you can do better in a specialized environment. So I think we'll see more of uh this integration into development environments or just uh new development environments built from the ground up to work with agents primarily. So that is an important thing. Uh since we are putting a lot more emphasis on review, uh there should be new tools for review and I think we can do better than what we're doing now. in many respects. I don't expect many breakthroughs in testing this year because it's hard. I'm I'm doing it right now. It's hard. It's not going to happen this year. But maybe some advances uh will arrive this year. But generally I think the the big lesson of the last couple of years is that all the things that were quote unquote obviously needed and you know the the idea of connecting agents to developer tools was absolutely the trivial thing to think of two years ago. But they take a long time to happen because it's hard and you know nobody's in this industry is lazy. like everybody's working their asses off but it just takes time you know you you need to figure out the basics before you can do advanced things so uh you know all the straightforward ideas will get implemented at some point.

</details>

**主持人**: 我认为 **AI** 已经取得了巨大的飞跃，尤其是在寒假期间，编码代理和 **CLI** 的能力大大增强。我知道有许多开发者实际上只是通过提示来编写大部分代码，甚至全部代码，这是一个巨大的飞跃。我不认为我们见过如此之快的事情。我看到很多工程师感到害怕，因为它会让你感到骨子里发抖。你知道，要花10年才能真正擅长编码，而编写代码的部分感觉正在被淘汰。你自己编码的时间更长。你会给那些有这种感觉的开发者什么建议？他们感到害怕。我想我们，我与一些人聊过，很多人也给我发消息。你对最近几个月的情况有什么看法？

<details>
<summary>Original English</summary>

**主持人**: I think there's been this massive jump with with **AI** especially over the winter break where where the **coding agents** the the **CLIs** have become a lot more capable and I know so many developers who are actually just prompting most of their code if not all of it is just a massive massive jump I don't think we've seen anything this fast I see a lot of engineers is scared because it can shake you to the bone. You know, it took 10 years to get really good at coding and the writing the code part feels that it's kind of going out, you know, the trash can. You you yourself have been coded for a longer time. What would your advice be for developers who are feeling like this that they're feeling, you know, it it it is scary. I think we and I I I talked with with some folks, a lot of people message me as well. How are you thinking about this specifically these these last few months?

</details>

**Andre**: 真的很难给出建议。我可以分享一些想法。首先，有很多炒作，其中很多都传到了管理层，很多人做出了次优的决定，但这会过去。所以，你知道，有越来越多关于人们不招聘初级开发者的消息，例如。这很愚蠢。

<details>
<summary>Original English</summary>

**Andre**: It's really hard to give advice. There there are a few ideas I can share. So one thing is there's a lot of hype and a lot of it gets to the management and a lot of people make suboptimal decisions but that will go away. Uh so you know there's there's like more and more news about people not hiring junior developers for example. This is dumb.

</details>

**主持人**: 这很愚蠢。

<details>
<summary>Original English</summary>

**主持人**: It's stupid.

</details>

**Andre**: 这很愚蠢。这不会持续太久。我的意思是，很难说这会持续多久，但人们会发现他们需要行业中的新人，很多其他事情在当下可能压力很大，但其中一些会被撤销。所以，这是一件事。另一件事是，投入时间学习这些工具并精通它们绝对是值得的。在开发者社区中，对它实际有多有用存在很多怀疑，而且，你知道，我在我的项目上尝试过，然后它就不行了。使用这些工具需要相当多的技巧。不幸的是，它不是超级形式化的。至少到目前为止，没有人找到一种真正好的、清晰的沟通方式来做好它。但有些人比其他人做得好得多。他们不一定总能清楚地表达为什么他们的提示效果更好，但，你知道，你可以学习它。你可以做得更好。而且，你知道，不一定相信 **Twitter** 上的每个人，你知道，有些人声称一些疯狂的事情，但，你可以非常高效地使用这些东西，当你用得好时。而且绝对值得投入。是的，正如我之前提到的，未来仍然是工程师构建复杂的系统。所以请记住这一点。我们不会都一无所有。

<details>
<summary>Original English</summary>

**Andre**: This is dumb. This is not going to stay for long. I mean, it's hard to tell how long this can go on, but people will figure out that they need new people in the industry and a lot of other things can be really stressful in the moment, but some of them will be rolled back. So, that's that's one thing. Another thing, it's absolutely worth it uh to to invest your time into learning these tools and getting good at it. There's a lot of skepticism around uh in the developer community about how useful it actually is and you know I tried it on my project it's then it's no good. There is quite a bit of skill to using these tools. Unfortunately it's not super formalizable. Uh at least so far nobody figured out a really good clear way of communicating how to do it well. But there are people who can do it much better than others. They not always can articulate why their prompts work better, but you know, you can learn it. You can get a lot better at it. And you know, not necessarily believing everyone on **Twitter**, you know, some people claim crazy things, but uh you can be very productive with these things when you use them well. And it's absolutely worth investing into that. And yeah, so as as I mentioned before, in the future, it will still be engineers building complex systems. So keep that in mind. It's not like we all go to nothing.

</details>

**主持人**: 对于新毕业生，那些刚从大学毕业的人，你会给他们什么建议？他们决心成为一名杰出的工程师。也许有了这些工具，他们可以更快地做到。你会建议他们专注于哪些技能或经验？

<details>
<summary>Original English</summary>

**主持人**: And for for new grads, people coming out of university, what would your advice be for them who are like determined like, "All right, I actually want to be a standout engineer. Maybe with these tools, I can do it faster." What would you advise them to focus on either skills or experiences to get?

</details>

**Andre**: 我想这取决于你的倾向。如果你能变得极其高效，并产出大量健壮且可以长期演进的代码，那就擅长这一点。而且，你知道，这方面还有很多工作要做。如果你能或喜欢做更难的事情，那就深入研究最核心的东西，并擅长它，因为那将是你稀有的专业知识。它将具有市场价值。即使那件事本身消失了，你也会因此变得更聪明。所以，你知道，一般来说，如果你有任何深入探究事物运作原理的倾向，那就尽可能深入。作为年轻人，你在这方面有很大的心智能力。这非常有帮助。你只是通过深入研究许多事情，就能成为一个非常优秀的、在非常广泛领域内的专家。

<details>
<summary>Original English</summary>

**Andre**: I guess it's it's a matter of uh what your inclinations are. If you can just become incredibly productive and put out a lot of working code that is like really robust and you can evolve it for a long time, get good at that. And and like there is a lot to be done there. Uh if you can or like to do like harder things, go into the most hardcore things you can and get good at that because it will be your rare expertise. It will be marketable. Even if that very thing goes away, you will just become a lot smarter through that. So, you know, generally like if you have any inclination in looking under the hood and figuring out how things work, go as deep as you can. As a younger person, you have a lot of mental capacity for that. And this helps a lot. You become a very good expert in very wide fields just through, you know, drilling down on many things.

</details>

### 快速问答与推荐

**主持人**: 结束了。我只是想问几个快速问题。我只问，你马上回答。你最喜欢的一个工具是什么？它可以是数字的，也可以不是数字的。

<details>
<summary>Original English</summary>

**主持人**: That's closing. I just wanted to do some rapid questions. I just ask and and you shoot what comes next. What is a favorite tool that you have? It can be digital. It doesn't have to be digital.

</details>

**Andre**: 嗯，我喜欢我的 **AirPods**。它们非常方便。它们能戴在我的耳罩下面。嗯，另一个工具就是耳罩。耳罩。

<details>
<summary>Original English</summary>

**Andre**: Well, I love my **AirPods**. They're they're incredibly convenient. They fit under my ear muffs. Well, another tool would be ear muffs. Earuffs.

</details>

**主持人**: 非常好。

<details>
<summary>Original English</summary>

**主持人**: Incredibly good.

</details>

**主持人**: 是的，我看到你戴着它。我就选那个。耳罩。你有什么书推荐吗？为什么？

<details>
<summary>Original English</summary>

**主持人**: Yeah, I saw you wearing it. I'll I'll take that one. Ear muff. And what's a book recommendation that you recommend and why?

</details>

**Andre**: 有一本经典书，多年来一直在科技界被推荐。它叫做《**禅与摩托车维修艺术**》。

<details>
<summary>Original English</summary>

**Andre**: There is this classic that's been recommended across the tech community for many years. Uh, it's called **Zen and the Art of Moycle Maintenance**.

</details>

**主持人**: 我听说过那本书。

<details>
<summary>Original English</summary>

**主持人**: I heard that recommended.

</details>

**Andre**: 是的，这是一本非常好的书。我的意思是，其中一部分是关于技术以及如何处理真实系统等等，但它也是一本非常好的小说。我真的很喜欢它。

<details>
<summary>Original English</summary>

**Andre**: Yeah, it's a very good book. I mean, there is a part of it that's about technology and how to deal with the real systems and and others, but it's also a very good novel. I really like it.

</details>

**主持人**: 好的，**Andre**，非常感谢你。这非常有趣，而且我认为也很有启发性。

<details>
<summary>Original English</summary>

**主持人**: Well, **Andre**, thank you so much. This was very interesting and I think inspiring as well.

</details>

**Andre**: 非常感谢。很高兴聊天。

<details>
<summary>Original English</summary>

**Andre**: Thank you very much. It was great a chat.

</details>

**主持人**: 太棒了。谢谢你。这次与 **Andre** 的对话中，最让我印象深刻的是他对我们今天如何与 **AI** 编码代理合作的观察。你用简单的英语与代理交谈。它生成代码。你提交代码。但那段对话，你真正的意图，它消失了。你用人类语言与机器沟通，但你的队友在代码中看到的是机器语言。无论 **CodeSpeak** 是否是答案，可以肯定的是，我们缺少一个意图层。有人会想办法保留它。如果你喜欢这一集，请务必与正在思考编程未来走向的同事分享。如果你还没有订阅，现在是时候了。我们会有更多像这样的对话。谢谢你，下期再见。

<details>
<summary>Original English</summary>

**主持人**: It was great. Thank you. The thing that struck me with most from this conversation with **Andre** was his observation about how we work with **AI** coding agents today. You talk to an agent in plain English. It generates code. You commit the code. But that conversation, your actual intent, it disappears. You communicate with the machine in human language, but we're your teammates in code in machine language. Whether or not **code speaks** the answer, what is sure that we're missing an intent layer? And someone is going to figure out how to preserve it. If you enjoy this episode, please do share with a colleague who's been thinking about where programming is headed. And if you're not subscribed yet, now's a good time. We have more conversations like this one coming. Thank you and see you in the next
</details>