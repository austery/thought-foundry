---
area: "tech-engineering"
category: technology
companies_orgs:
- Uber
- Google
- Mozilla
- Statsig
- Linear
- Slack
- Red Hat
- Meta
- AWS
date: '2025-10-08'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Python Documentary
products_models:
- Python
- Rust
- Go
- TypeScript
- Claude
- Codex
- JavaScript
- C++
- C#
- Java
- React
- Node.js
- Express
- Cursor
- GitHub
- ChatGPT
- Next.js
project: []
series: ''
source: https://www.youtube.com/watch?v=45kVol96IlM
speaker: The Pragmatic Engineer
status: evergreen
summary: 知名开源贡献者、Flask 框架作者 Armin Ronacher 深入探讨了当今主流编程语言 Python、Go、Rust 和 TypeScript
  的生态系统与权衡。他分享了自己对 AI 编程工具从怀疑到高度依赖的转变，并阐述了 AI 如何改变初创公司的构建方式、开发效率以及编程语言选择的重要性。此外，他还从
  Sentry 的经验出发，分享了关于错误处理、语言设计哲学以及对“996”工作文化的独到见解。
tags:
- development
- language
- philosophy
- tech
title: Armin Ronacher 深度访谈：AI 如何重塑 Python、Go、Rust 的选择与未来
---
### 播客介绍

Host：你如何看待当今的 Python、Rust 和 Go 的生态系统？

Armin：Python 生态系统涉及大量基础设施和机器配置。我认为，如果你处理二进制数据，比如构建负载均衡器或数据库，Rust 是个不错的选择。而 Go，我认为它是一门很适合构建 Web 服务的语言，而且基本上也只适合做这个。

Host：谈到 AI 代理编程，你是如何使用它们的？

Armin：我让 Claude 为我构建了一个完美的控制系统，用来获取日志并可视化生产环境中的情况。这在以前是我绝对不会去做的，因为根本行不通。

Host：你为什么对这些 AI 编程工具的态度变得如此积极？

Armin：最大的原因是……

Host：Armin Ronacher 是一位广为人知的开源贡献者，也是流行的 Python Web 框架 **Flask**（一个流行的 Python Web 框架）的创建者。他曾是 Sentry 的一号工程师，现在正在创办自己的公司，并大量使用 AI 工具。今天，我们和 Armin 一起探讨：为什么 AI 编程工具让编程语言的选择变得更加重要，而不是更不重要。Python、Go、Rust、TypeScript 的对比，以及为什么初创公司应该选择这些语言。Armin 在 Sentry 工作十年后学到了哪些关于错误处理的知识，以及为什么像 TypeScript 这样的类型安全语言似乎并没有减少错误。还有更多精彩内容。如果你对了解编程语言的优缺点、大语言模型如何改变初创公司的构建方式，或者想了解更多关于错误处理的知识感兴趣，那么这期节目就是为你准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: How do you think about Python ecosystem today? The Rust ecosystem and the Go ecosystem.

Armin: The Python ecosystem is a lot of infrastructure, a lot of provisioning machines. Rust, I think if you work with binary data, if you build a load balancer, you build a database. Go in particular, I think it's just a good language for building web services and really kind of only web services.

Host: Speaking about AI agent coding, how are you using them?

Armin: I had Claude build me my perfect control system to get my logs and visualize what's going on in production and I would never have done this before just because like it wouldn't have worked.

Host: Why have you become so much more positive about these AI coding tools?

Armin: So the biggest thing is that...

Host: Armin Ronacher is a widely known open source contributor and the creator of Flask, a popular Python web framework. He was also engineer number one at Sentry and is now building his own startup making heavy use of AI tools. Today with Armen, we cover why AI coding tools are making the choice of programming languages more important and not less. Python versus Go versus Rust versus TypeScript and which languages to use for startups and why. What Armin learned about error handling after 10 years of Sentry and why type-safe languages like TypeScript don't seem to reduce errors and many more. If you're interested in understanding more about the strengths and weaknesses of programming languages, how LLMs are changing how startups are built or want to know more about error handling, this episode is for you. This podcast episode is presented by Statsig, the unified platform for flags, analytics, experiments, and more. Check out the show notes to learn more about them and our other season sponsor. Let's jump in. So, Armin, welcome to the podcast.

Armin: Hi, happy to be here.</p>
</details>

### 回顾 Python 2 到 3 的迁移之痛

Host：我们来聊聊编程语言吧。你多年来一直深度参与 Python，远超十年。现在你也接触了其他语言。但就 Python 而言，你如何看待它自身的变化？对于我们这些不那么了解 Python 的人，你能否详细讲讲从 Python 2 到 3 的那场“戏剧”，我想任何和 Python 开发者共事过的人都听过抱怨。我当时在 Uber，亲身经历了这一切，有很多反复和拖延。在任何语言中，像 Python 2 到 3 发生的那种情况都非常罕见：破坏性变更、大量分歧，一些非常有能力和优秀的工程师想留在版本 2。所以，那里到底发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: So, let's talk a bit about programming languages. You've been very deep into Python for many, many years, well over a decade, and now you've touched on other languages. But with Python, how have you seen Python itself change? And can you give us, for those of us who are not as in-depth in Python, give us a bit more detail about the two to three migration drama? Which I think if you work with anyone who worked with Python, you've heard the moaning. I was at Uber when this happened and there was a lot of back and forth, a lot of delaying. It seemed very rare for across any languages to see what happened from Python 2 to Python 3, which seemed like breaking changes, lots of disagreements, some people just wanting, a lot of very competent and good engineers wanting to stay on the kind of two which is lower than three. So what happened there?</p>
</details>

Armin：是的。有趣的是，今年有一部关于 Python 的纪录片，Guido 邀请我参与其中，这非常棒。那部纪录片里就有一段是关于 Python 2 到 3 迁移的，这让我回顾了那段历史，去回忆所有细节。因为在很多方面，我的记忆也变得非常模糊和朦胧，我只记得某些部分。所以，如果你真的想深入了解 Python 2 到 3 的故事，可以去看那部 Python 纪录片，里面有完整的一节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Yeah. So, fun fact, this year was the Python documentary which Guido invited me to be part of, which was very nice. And that documentary had a segment on it on that Python 2/3 migration and that basically made me go back in time just to remember all of it. Because like in many ways, my memory was also incredibly fuzzy and hazy. Like I also remember certain parts more than others. So if you really want to go into the deeps of like Python, Python 3, like look at the Python documentary has a whole segment on it.</p>
</details>

Armin：但回想起来，我认为那种事现在再也做不成了。它发生在那个特定的时间点，虽然没有扼杀 Python，但我认为它本可能做到。如果人们没有投入大量精力来确保迁移成功，那对这门语言来说可能会是相当大的问题。因为如果你回到 Python 3、3.1 和 3.2 的时代，会发现最初的库设计和决策中有很多失误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: But I think like in retrospective, I think you can't do it anymore. It was just at this moment in time, it didn't kill Python. But I think it could have, right? If people didn't put a lot of energy in to actually make that migration work, it could have been quite problematic for the language because if you go back to Python 3 and 3.1 and 3.2, there were so many missteps in the original library designs and decision to be made.</p>
</details>

Armin：对于那些没有亲身经历过的人来说，你需要知道 Python 最初只有像 C 语言那样的基本字符串。后来，它增加了 **Unicode**（统一码：一种旨在为每种语言的每个字符设定统一并且唯一的二进制编码的标准）字符串作为一个选项。你可以在字符串前加上一个 `U`，它就变成了 Unicode 字符串。Python 3 存在最大的动机就是对字符串更加严格，并将所有东西都迁移到 Unicode。但当时没有完全预料到的是，这个迁移在实践中比设计时要微妙得多。当时对 Unicode 在现实世界中的样子有一个非常简单化的看法，但现实并非如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And so as someone who maybe hasn't like participated in this originally, you have to consider that Python started out with just basic strings like C. Eventually, it gained to be unicode strings as an option. So, you did a U in front of the string and it became a unicode string. And Python 3's biggest motivation of existence was to be a lot more strict about strings and move everything to unicode. What wasn't quite anticipated is that that migration was a little bit more nuanced in practice than designed, right? There was a very simplistic view of what Unicode looks in the real world. and that just it didn't look like that.</p>
</details>

Armin：我实际上认为 Python 混乱的迁移过程也对其他生态系统产生了非常积极的影响，比如 Ubuntu。因为当时有两件事在同时发生：Python 3 在处理非 Unicode 数据方面变得稍微宽松了一些，但同时，很多让 Python 难以处理 Unicode 的情况实际上是各种配置问题。我记得，那时并不是每个 Linux 系统都处处使用 **UTF-8**（8位元組變換格式：一种针对Unicode的可变长度字符编码）。你连接到大学网络，发现一个非 UTF-8 的 Linux 系统仍然很常见，这会在文件系统上导致各种有趣的问题。所以，这些事情在某种程度上趋于一致了，Unicode 的情况有所改善。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And I actually think that Python's messy remigration also had a really positive impact on other ecosystems like Ubuntu for instance because there were like two things sort of happening simultaneously. Python 3 got a little bit more lenient to working with non-unicode data but also a bunch of the situations where Python made it very hard to work with unicode was actually all kinds of configuration issues. So like I remember not every Linux had UTF8 everywhere. It was still very common for you to connect to university network and not find a UTF8 Linux which had all kinds of really funny things on a file system. Right? sort of these things converged a little bit. So the unicode story got better.</p>
</details>

Armin：但是，你已经有了数百万行无法在 Python 3 上运行的 Python 2 代码。最初的假设是，你只需迁移一次，然后就进入 Python 3 的世界，一切都好了。但事实并非如此。我们不得不在很多年里同时为 Python 2 和 Python 3 维护库。我记得在佛罗伦萨的 Python 语言峰会上，我提议恢复 Unicode 字符串的 `U` 前缀，以便可以有选择地使用它们。因为我注意到，如果有了这个前缀，我就可以编写同时支持 Python 2 和 3 的代码。我至今还记得当时遭到了巨大的反对，人们问：“你为什么还要为一个库同时维护两个版本？你应该直接迁移到 Python 3，然后让所有人都跟着迁移。”但事情不是那样运作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Um but you had millions of lines of Python 2 code that couldn't work on Python 3. And the initial assumption was you can just you just migrate once and then your Python 3 and you're good. And that's not what happened. We had to maintain libraries simultaneously for Python 2 and Python 3 for many years. And I for instance I remember meeting at the Python language summit in Florence where I proposed to bring back the U prefix on unicode strings so you can have them optionally because I noticed that if they were there I could write code that supports both Python 2 and Python 3. And I still remember there was a huge push back like why would you even want to maintain a library for both two and three? You should just move to Python 3 and then make everybody move like that. But that just doesn't it doesn't work like that.</p>
</details>

Armin：所以，最终让 Python 3 迁移成功的原因是很多人付出了巨大的努力，以及对现实有了更清醒的认识：你必须以某种形式支持两个版本，这花了十年甚至更长时间。这就是它成功的原因。但我认为 Python 3 的迁移也为未来的语言提供了一个非常重要的数据点，让它们能更好地处理这类问题。我记得 Rust 早期就特别指出了 Python 3 的迁移，以此来解释为什么它想要一个“版本（edition）”系统，或者我忘了它最初叫什么，但基本上是一种非常有针对性地选择性加入新功能或退出旧功能的方式，这样你甚至可以在同一个项目中使用来自不同版本的代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: So what really made the Python 3 migration ultimately work was a lot of effort put in by a lot of people and just a more realistic look into that you have to it took 10 years right or more even. You have to just support both versions in one form or another. That that is what made it work. But I think the Python 3 migration also left a pretty important data point for future languages to approach this better. And I remember Rust early on specifically pointed at the Python 3 migration to demonstrate why it wants something like an edition system or I forgot what it was called originally but basically a very targeted opting into new features or opting out of all features so that you can have code bases even within the same project from different versions.</p>
</details>

### 在开源与创业之间：如何为不同场景选择编程语言

Host：说到编程语言的差异，你提到 Python 在很长一段时间里都是你最喜欢的语言。后来，你帮助将 Rust 引入 Sentry，部分也是出于性能原因。现在你也在使用 Go。你会如何比较这些语言？当你思考一门语言时，你的心智模型是怎样的？比如，这门语言适合做什么，不适合做什么？我会用它来做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Nice. And speaking of the differences in programming languages, you mentioned Python has been your favorite language for a very, very long time. Later you helped introduce Rust into Sentry partially for performance reasons as well. And now you're also playing with Go. How would you compare these languages? And when you think of a language, what is your mental model of like what is this language good for, not good for? What would I use it for?</p>
</details>

Armin：我写过一些博客文章，不完全是关于语言的，但它们在某种程度上反映了我内心的“分裂大脑”。因为我内心有两个程序员。一个喜欢构建酷炫的开源软件，希望成千上万的人使用，并投入大量手工打磨的精力。这就像编写源代码中的“瑞士制表工艺”，我非常关心语言、API 和所有细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I wrote a bunch of blog posts that are not quite about languages, but they are sort of about my general split brain in a way because I have two programmers in myself. One is I like building cool open source software that hopefully thousands of people use and put a lot of handcrafted efforts into it. It's like the the Swiss watchmaking of source code writing and there is like I care a lot about the language. I care about a lot of the API and everything.</p>
</details>

Armin：但当你创办一家公司、构建一个产品时，这些都不重要了。产品的代码是“一次编写，多次运行”，而不是“一次编写，多次被他人依赖你的代码来编写”。所以，让 Rust 成为打造酷炫开源代码的绝佳选择的那些特性，也让它成为初创公司的一个次优选择。因为它有更多的摩擦。它是一门更精确的语言，与 C++ 相比是一个巨大的提升——在 Sentry 处理二进制文件时，C++ 本来是另一个选择。但对于需要快速迭代的初创公司来说，Rust 的能力就差很多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: But then when you build a company, when you build a product, none of that matters. Like the is a is a write once run many times code, but not a write once write many times against your code, right? And so what makes Rust amazing, I think, for for crafting really cool open source code also makes it a sub-optimal programming language for a startup because there's much more friction in it, right? It's a much more precise language. It's a great lift up compared to C++ which is in many ways what the alternative would have looked at at Sentry for binary file processing but it's a much less capable language for a startup when it comes to rapid iteration.</p>
</details>

Host：你能举例说明这种“摩擦”吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Can can you give examples of this friction? What</p>
</details>

Armin：编译时间。Rust 的编译速度慢得令人难以置信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: compile times? What like Rust compiles so incredibly slow.</p>
</details>

Armin：与 Python 相比，你需要编写更多的代码。你会花大量时间思考类型。我喜欢类型，我认为它们很棒。但是，有些东西用类型来表达是极其困难的，而在 Python 中我根本不需要考虑这些。处理动态数据……我认为需要考虑的一点是，动态语言和静态语言这些年来已经有所融合。我记得 C# 引入 `dynamic` 关键字是一件很棒的事，因为它向人们展示了，你可以在一门静态编译的语言中选择性地使用动态运行时类型。TypeScript 则将这个想法完全应用到了 JavaScript 上，所以你在某种程度上可以兼得两者的优点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: That's a huge factor. Um, you write a lot more code compared to Python. You spend a lot of time thinking about types. I love types. I think they're great. Um, but certain things are incredibly hard to express with types. And I don't even have to think about it in Python, right? working with dynamic like the and I think one thing to consider here is like the dynamic and static languages sort of have aligned a little bit more over the years. I remember the dynamic keyword landing in C# was a great thing because it showed people they can have a statically compiled language with like opt-in dynamic runtime typing for instance and Typescript took that entire idea and sort of applied it to JavaScript. So you have you can have both worlds in a way.</p>
</details>

Armin：但 Rust 非常直接：只有静态类型。如果你的问题是一个动态类型问题，那么你基本上就得自己到处创建动态类型的包装器。**Borrow Checker**（借用检查器：Rust 语言中确保内存安全的核心机制之一）尽管很出色，但也是一个巨大的问题，因为它不允许表达其他程序员期望存在的某些东西，比如自引用结构。你不能让一个结构体借用自身。对于从 C++ 过来的程序员来说，这简直是：“为什么会这样？这是我的问题，我想解决它”，但编译器却说“不行”。你会觉得：“不，你错了，它应该能工作。”所以，你可能会把自己编程到一个死胡同里，很难走出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Um but but Rust is like very straightforward like there's just static types and if your problem is a dynamic type problem then you're basically going to create your own dynamic type wrapper left and right. It is also that the borrow checker as great as it is is a huge um problem because it doesn't allow to express certain things that other programmers expect there to be like adjacent borrows. So you cannot have a struct that borrows into itself coming from C++ that's like why the hell like why does it do that hey here's my problem I want to solve it and the compiler says no it's like no you're wrong it should work so so there that is like you can run you can program yourself in the corner where it's like incredibly hard to come out.</p>
</details>

Armin：因此，我认为有很多问题不是“Rust 形状”的。确实有很多问题是“Rust 形状”的，但也有很多不是。我现在为新公司使用 Go 的原因之一，就是因为它是一门非常务实的语言。如果你追求的是务实，那为什么不呢？而且你可以预见它会一直存在，它不是那种特别“性感”的语言。最坏的情况下，即使 Google 停止维护它，你也可以想象会有几十个其他人愿意让它继续存活下去。即使是现代的 Java，实际上也是一门很棒的语言，它有虚拟线程，让我很高兴，因为我不必一直处理 Promise。所以，当涉及到公司应该用什么来构建产品时，我有一个更务实的看法，因为重点不是代码本身，而是你正在构建的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: um so I think from that perspective there are a lot of problems which are not rust shaped there are a lot of problems which are in fact rust shaped but but a lot of them are not and so one of The reasons I'm using go right now for the new company I'm working on is because it is a very pragmatic language and if pragmatism is what you're after then why not and and you can expect it to hang around and it's not super sexy and and it like worst case even if Google stopped maintaining it you can imagine there will be dozens of other people who want to keep it alive even modern Java is actually an awesome language like it has virtual threats and makes me happy like I don't have to deal with promises all the time um so the But it I have I think a much more pragmatic view when it comes to what a company should build its stuff with because the focus is not so much the code, it is the product that you're building.</p>
</details>

### 创业公司的技术选型：一种务实的视角

Host：所以你现在在创业。是几个人吗？还是只有你自己？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: So you're you're now doing a a startup. Is it is it a few people? Is is it uh yourself?</p>
</details>

Armin：目前是我和一个联合创始人，但我们刚开始招聘。而且，可以说是我、一个联合创始人，还有一群 Claude、一群 Codex 等等。所以，世界确实变了，现在还有一支“实习生大军”在写代码，这也改变了我看待事物的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: So at the moment it's me and a co-founder uh but we just started hiring and and and also like it's it's it's me and a co-founder a bunch of Claudes and a bunch of Codexes and everything. So like the world has definitely changed in the sense that there's an army of interns that also now writes code and that has also changed the way I'm looking at things.</p>
</details>

Host：所以现在是你和你的联合创始人，加上一支由 Claude 和 Codex 组成的“大军”，并且你期望随着团队的壮大而招聘更多人。你已经确定了技术栈，你说这次很多会用 Go。那么，一门编程语言需要为你提供什么？比如说，Python 非常灵活，虽然有点慢，但你说它是个不错的选择。是什么让你觉得 Go 是 Python 和 Rust 之间的一个很好的中间地带？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: So, so now it's it's you and your co-founder with the startup. You've got an army of Claudes and and Codexes and you're expecting to to grow the team to hire a as as you've settled on on the the technology you you said in this case this is a lot of it will will be go but what does a programming language need to give you and and for example like why was uh Python is is very flexible. Okay, it's a bit slow but but you said it was a good choice. What what made you what would you say like yeah go is is this good middle ground between Python and and Rust and so on.</p>
</details>

Armin：是的。我认为现在，无论你创办任何公司，不管你愿不愿意，最终都会用到 Python。你不可能建立一个完全没有 Python 代码的公司。你想用它来构建你的主服务吗？可能不会。但如果你做任何与机器学习或数据处理相关的事情，Python 肯定会参与其中。而且你也可以用 Python 写出漂亮的代码。所以，它肯定会存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Yeah. So right now I think if you build any company at all you're going to end up with Python in there if you want it or not. It will be impossible for you build a company that doesn't have Python code in it. Do you want to build your main service with it? Probably not. But if you do anything with ML, if you do anything with data processing, Python is going to be in there and and and you can write nice code in Python too, right? So it's like that's going to be there.</p>
</details>

Armin：同样，祝你好运能开一家没有 JavaScript 的公司。而如果你有 JavaScript，你就会有 TypeScript。所以这些语言也肯定会存在。另一个问题是，你写的代码总量中，有多少是这些语言。我其实觉得我不想用这两种语言中的任何一种来构建后端服务。这甚至不是出于性能原因，而是关乎生态系统，以及这些生态系统擅长什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Good luck not having JavaScript in a company. And if you have JavaScript, you have TypeScript. So so those languages are going to be there. Another question is like how much of that code that you write overall is in those languages. And I actually felt that I don't want to build backend services in either one of those languages. And not even for performance reasons, but just for ecosystem, like what the ecosystems are good at.</p>
</details>

Armin：在我目前的情况下，公司的一大部分工作是解析电子邮件。而这恰恰不是 JavaScript 所擅长的。Python 在这方面其实相当不错，但我想，在规模化的情况下，Python 是一个好的选择吗？我考虑过后，决定不这么做。根据在 Sentry 使用 Rust 的经验，我感觉完全可以想象，当规模扩大时，Rust 会再次回归。但目前，我不认为这是一个正确的权衡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Um, in my particular case right now, a big part of what what I'm doing at the company is parsing emails. And, um, that's just not something JavaScript is amazing at. Um, that's something actually Python is quite good at, but I think at scale is is it is like is is Python a good choice here? And I looked at it and I made the decision that I wouldn't. And from the experience of of of sort of doing Rust in that space at Sentry, I felt that like I can totally imagine that at scale like Rust will make its way back in. But at the moment, I don't think that that's the right trade-off.</p>
</details>

Host：当你说“在规模化的情况下”，这仅仅是考虑当你需要处理海量数据、运行大量进程等情况吗？我们是在特指语言的性能能力吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: And so when you say at scale, this is just thinking about when you will have to process huge amounts of of data, lot lots of processes running and so on. Are we're talking specifically about the performance capabilities of the language.</p>
</details>

Armin：我认为这是公司规模的扩大，而不一定是通过处理多少数据来衡量。当你扩大一家公司时，无论是通过员工数量、问题复杂性，还是数据处理量的复杂性，你都必须做出权衡。有时这意味着引入一门新语言，可能是因为性能原因，也可能是因为你需要集成到某个在特定环境中特别强大的生态系统，然后突然之间这门语言就出现了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I think it's like at scale of a company and that is not necessarily measured by how much data goes through it. If you scale a company either by the number of people working on it or the complexity of problem or the complexity of like how much data goes through it, you have to make tradeoffs and sometimes that means introducing a new language either because of performance reasons or because you integrate into some ecosystem that's particularly strong in some certain environment and then all of a sudden the language is here.</p>
</details>

Armin：为什么 Rust 会出现在 Sentry？嗯，它不仅仅是因为我想写 Rust 才存在的。当时的情况是：“好了，我们现在遇到了性能问题，该怎么解决？”一方面，我们可以写一个 Go 服务，但我不想维护另一个服务。所以，将 Rust 嵌入到 Python 中是一个务实的选择。后来，当我们处理原生符号时，Rust 的替代方案基本上就是 C++。根据我使用 C++ 的经验，我们最初在那个项目上使用了 C++，结果遇到了很多崩溃，我感觉我不想维护那个东西。那时，使用 Go 是不可能的，因为没有 Go 的生态系统。所以除非我从零开始构建一切，否则行不通。但 Rust 正在成长，并且 Rust 编译器自身也面临同样的问题，所以 Rust 的调试文件生态系统非常好。当时还有另一家公司 Mozilla 也在做这个，所以已经有两个共同的利益方。因此，这是一个非常务实的选择，尽管语言是 Rust。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Why did Rust exist at Sentry? Well, it didn't just exist because I wanted to write Rust. It also was like, well, now we have a problem with performance. How are we going to solve it? And on the one hand, it was like, well, we could probably write a Go service here, but I didn't want to maintain another service. So, Rust was a pragmatic choice of embedding it in Python. And then later on when we did native symbol processing, the alternative to Rust basically would have been C++. And from my experience of working with C++, we use C++ on that project first. We just had a lot of crashes and I just didn't feel like I want to maintain that and so then there was no choice of using go because there was no go ecosystem. So unless I would have built everything from zero, it wouldn't have worked. But Rust was growing and rust had the same problem in the compiler. So the rust ecosystem for debug files was really good. And there was another company also working on it which was Mozilla at the time. So there was already two shared interests in this and and that was a really pragmatic choice even though the language was Rust.</p>
</details>

Armin：后来我们可能有点过度使用了，把 Rust 用在了并非最理想的地方，比如数据接收系统。我现在可能不会再做那个决定了。但在当时，说“我们现在要躲在角落里花九个月时间，用这个新东西把一切都重构一遍”是不切实际的。因为对于当时团队的规模来说，问题太大了，我们必须复用一些东西。这就是为什么我可以想象我的公司在未来会再次采用一门最初被否决的语言，仅仅因为情况需要。而且原因不一定非得是性能，也可能是生态系统的稳定性或其他任何因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Then maybe we overdid it a little bit by putting Rust into places where it wasn't the most optimal choice like the ingestion system. I think at this point probably wouldn't make that decision again but it would have been non-pragmatic at that moment to say like you know what we're going to do we're going to go into corner for like 9 months and we're going to build this all in this now. Um because for the the size of the team at the time the problem was too big right and so we had to reuse something. So that's one of the reasons I think why I can imagine that my company is going to again end up with adopting a language further down the line that it kind of initially said no to just because the situation makes it necessary and it doesn't necessarily have to mean that performance is the reason. It cannot just be ecosystem stability or or anything like that.</p>
</details>

### 各大语言生态系统评析：Python、Rust、Go 与 TypeScript

Host：谈到生态系统和稳定性，你如何看待当今的 Python、Rust 和 Go 的生态系统？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: And speaking about ecosystem stability ecosystems, how would you how do you think about Python ecosystem today, the Rust ecosystem and the Go ecosystem?</p>
</details>

Armin：Python 生态系统涉及大量基础设施和机器配置。我现在就用它来做这个，我用 **Pulumi**（一种使用通用编程语言进行基础设施即代码 (IaC) 的工具）和 Python 来搭建基础设施。它在机器学习领域根深蒂固，所以我有一个使用 Python 的小型数据管道。它在为某些 Python 擅长的领域提供 Web 服务方面也仍然相当不错。我会用它来编写主要的应用程序逻辑吗？也许吧。因为如果我正在做一个完全 AI 优先的公司，而它所做的只是推理，那么我无论如何都在等待网络层。所以用 Python 把一些东西组合起来可能很棒。特别是当你开始做一些需要按需执行代码的 AI 相关事情时，这可能是个好选择。所以我认为 Python 的未来是光明的。我只是不认为对于一个你预期会有很高吞吐量的服务来说，它是最自然的选择。另外，我认为在这一点上，Go 对于一群工程师来说，比 Python 更容易编写，因为 Python 的复杂性增加了，而 Go 并没有增加那么多。所以我发现，在复杂性权衡上，Go 是一个更好的选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Python ecosystem is a lot of infrastructure, a lot of like provisioning machines. So that's what I'm using it for right now. I using Pulumi with Python to get the infrastructure up. Um it is really well entrenched in machine learning. So that's I have a little data pipeline going on that uses Python. It is also pretty good still at at at bringing services, web services to some of the things Python is good at. Would I necessarily write then like the main application logic in it? Maybe, right? Because like if if if I'm doing a whole AI first company and all it does is inference. I'm just waiting on a network layer anyway. So maybe maybe like putting some things together with Python is great. Um particularly also if you start to do aic things where you want to have code execution on demand, maybe maybe that's a good choice. Um so I think Python is a great future in it. I just don't think it's the most natural language to pick for a service where you think like it's going to be a lot of that like higher throughput. Also, I think like at this point, Go is a is a is a is an easier language to write than Python for a bunch of engineers because Python's increased in complexity and Go didn't quite as much. Um, so I find it to just be a better trade-off for complexity, too.</p>
</details>

Armin：至于 Rust，我认为如果你处理二进制数据，比如构建负载均衡器或数据库——嗯，现在人们谈论 Zig 之类的——但如果你构建一个“Rust 形状”的问题，我认为这很大程度上被定义为：出于某种原因需要分发单个二进制文件、你不能处理垃圾回收器、你想要非常可预测的性能、你非常关心数据布局（尽管我也敢说 Go 在这方面也不错）。但 Rust 的好处在于，如果你处理的东西需要并发，并且你担心内存管理不善和崩溃，比如加载到像浏览器这样的高安全性环境中的模块，它似乎是一个非常好的选择。还有，处理像 DWARF 文件这样的数据，总的来说处理数据，我非常喜欢 Rust。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: So Rust I think like if you have if you work with binary data if you maybe uh if if you have a you build a load balancer you build a database well maybe databases now people talk about Zig and stuff but like if you if you build like a a like a rust shaped problem which I think is largely defined as you single binary to distribute for some reason or another um it you you can't deal with the garbage collector you want very predictable performance um you really care what data layout although I dare say also is good but Rust is the benefit that if if you also then work in something that requires concurrency and where you're afraid of mismanaging memory um and crashes like modules that they might load into some other high security environment like a browser seems like a pretty good choice um working with again like dwarf files like working with just data in general I I love Rust.</p>
</details>

Armin：而且我认为它作为 Python 的扩展也是一门非常务实的语言。所以，如果你已经有一个 Python 问题，现在又遇到了性能问题或生态系统集成问题，而 Rust 恰好能很好地融入其中，那么用 Rust 为 Python 编写扩展模块，会比其他任何方式都好。这是一个非常好的选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: and I think it's it's it's a such a pragmatic language also for if you extend Python. So if you already have a Python problem and now you have a performance problem or you have an ecosystem integration problem and Rust happens to fit good into that. Writing extension modules in Python for Python in Rust beats everything else out there, right? It's a really good choice for that.</p>
</details>

Armin：Go，我认为它就是一门构建 Web 服务的好语言，而且基本上也只适合做 Web 服务，或许还有一些命令行工具。我认为 Rust 无法被摆脱的另一个原因是 **WebAssembly (Wasm)**（一种新兴的、可移植的、大小和加载时间高效的格式，适合在Web上部署）。Wasm 本身从未真正火起来，但它的用例在这一点上已经不可能被摆脱了。有很多东西你实际上必须带到浏览器中，而 Rust 可以做到。我用 Go 试过，体验并不好，因为垃圾回收器以及在浏览器中运行 Go 带来的一些复杂性。所以你不会那么做，但用 Rust 你可以。所以，我认为你必须从“我在这里做什么？我有什么问题？”的角度来处理这个问题，然后你说：“我希望一开始的技术栈不超过三四种。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Go in particular, I think it's just a good language for building web services and really kind of only web services. Maybe some command line tools. One of the other reasons why Rust I think is impossible to get rid of is Web Assembly never really took off but the use cases of Web Assembly are impossible to get rid of at this point. There's so many things you actually have to bring into the browser and Rust can do that. I tried it with Go. It's not a great experience because of the garbage collector and some of the complications that come with running Go in the browser. So you wouldn't you wouldn't do that but with Rust you can, right? So is it I think like you you kind of have to approach this from a perspective of like what am I doing here like what's the problem that I have and then you said like I want to have not more than three four technologies in the beginning what they use it.</p>
</details>

Host：最后，我们还没谈到的那个流行的生态系统：JavaScript/TypeScript。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: and then finally I guess the the the the one that we didn't talk about which is popular JavaScript typescript ecosystem</p>
</details>

Armin：嗯，在浏览器里你摆脱不了它。在服务器端，我对此非常矛盾，因为我实际上认为它现在是一个相当不错的语言环境。特别是，假设有人能做出 JavaScript 2，就像 Python 3 那样，去掉一些不好的东西。当然，我不认为任何人应该这么做，因为我见过那种迁移的痛苦。但现在这门语言里有很多好东西，只是也有些非常古老和愚蠢的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: well in the browser you can't get rid of it. um on the server I think there's I'm very conflicted on this because I actually think that it's a pretty good language environment at this point. Particularly like hypothetically if if someone were to make the JavaScript 2 like the Python 3 of it and get rid of some of the naughty stuff. Like I don't think anyone should be doing this because I've seen the migration. But um there's a lot of good stuff in the language now. That's just also some really old dumb stuff.</p>
</details>

Armin：我现在为什么不用 TypeScript 构建后端服务？实际上，是因为 **npm**（Node Package Manager: JavaScript 的包管理器）生态系统。它对我来说毁了一切。我是一个喜欢低依赖的人，我想控制我的依赖。但在 JavaScript 生态系统中，我觉得如果不依赖 500 个包就无法高效地构建，这让我感到不安。在浏览器上，我可以忍受，因为我没有太多选择。但在服务器上，我真的必须这么做吗？我必须处理对所有这些依赖的恐惧和管理吗？所以，老实说，这比其他任何事情都更让我却步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Why am I not building backend services with with TypeScript right now? Actually, it's because of the npm ecosystem. Like that ruins it for me. I'm a low dependency kind of guy. I want to control my and I it just I feel like it's impossible for me for me to build productive in the JavaScript ecosystem with under 500 dependencies and that makes me uneasy on the browser. I can live with it because like I don't have much choice but on the server do I really have to do it? Do I have to deal with the fear of of of all of it and managing it? So it's like that that honestly ruins it for me more than anything else.</p>
</details>

Armin：也许随着生态系统在其他方面的成熟，这种情况会改变。但这确实是我认为最大的原因。而且，它在服务器端没有给我带来足够的好处，让我觉得非用不可。有一种说法是你可以有一个统一的代码库。但每次我尝试让统一代码库工作时，我都意识到浏览器和服务器实际上有足够大的差异，以至于很难真正拥有那个统一的代码库。所以，还不如明确地分开，用一些 **OpenAPI**（一种用于描述、生成、消费和可视化 RESTful Web 服务的规范）之类的东西，做一些代码生成，感觉上会好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And so maybe maybe that will change as that ecosystem matures in other ways. But that really I think is is the biggest reason. Um and it it doesn't have enough benefits for me on the server that I I wouldn't just say like there's this idea that you have a unified codebase and every time I'm trying to make a unified codebase work, I just realize that the browser and that the server actually is sufficiently different that it's very hard to actually have that unified codebase. And so then it just be explicit like do some open API shenanigans, some code generation and it actually feels much better.</p>
</details>

Host：我一直听到开发者支持 TypeScript 的最大论点就是统一代码库，你可以用 React 和 TypeScript，然后在后端用 Node 或 Express，这样你就有同一种语言，人们可以贡献代码。我认为这非常吸引人，尤其是在我们有 AI 工具之前，因为那时你不需要学习一门新语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Yeah. The the biggest argument I I keep hearing from developers for TypeScript is the unified codebase that you can have a React and TypeScript and then on you use let's say Node because that's or Express or whatever uh on on the back end and now you have the same language and people can contribute which I think was very very compelling especially before we had AI tools because now you didn't have to learn a new language.</p>
</details>

Armin：现在情况可能变了。我最近在一个聚会上的演讲中也提到了这一点：我认为现在是“地板在抬高，天花板却没有”。意思是，每个人对每件事的期望都比以前高得多。但也因为期望更高，有了更多的工具来实现它。例如，现在的代码生成状态比两三年前好得多。你甚至可以买到现成的 OpenAPI 到 SDK 的生成器。比如 Stainless 就是其中之一，它现在为所有 AI 云提供商生成所有的 API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Now it it might change. I I said this recently in a in a sort of talk I gave at a meetup which is I think right now the floor is raising the ceiling not really in the sense that the expectations that everybody has in everything is much higher than it was before but also because the expectations are higher and more tooling to enable it and so code generation for instance right now is in a much better state than it was even just two to three years ago you can even buy offtheshelf open API to SDK generators now right there like I don't even know what the companies are called Stainless for instance is one of them which just generates all the APIs for all the AI cloud providers right now.</p>
</details>

Host：是的，他们是为 SDK 做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Yeah. For for SDKs. Yeah. They're one of them. Yeah.</p>
</details>

Armin：在 Sentry，维护这些 SDK 曾是一项巨大的成本。现在就像是，我有一个 OpenAPI 的东西，然后在 GitHub 上就神奇地出现了一个 SDK。如果代码生成这么好，我拥有一个统一的代码库还那么重要吗？突然之间，它就没那么重要了。所以我认为它肯定有其价值，但你也必须想象，如果你有一个统一的代码库，那么边界就会在不经意间变得非常不明确。特别是在使用 **RSC**（React Server Components: React 的一种新架构，允许组件在服务器上渲染）时，我注意到这一点，你很难在脑子里理清什么是服务器端的，什么不是。所以对我来说，拥有这个额外的边界几乎像是一个特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: That was a huge cost of doing anything at century is like how do you keep these SDKs around is now it's like well I have an open API shenanigan I somehow magically on GitHub an SDK appears. Is is it really so important for me to have a unified codebase if the code generation is so damn good? Like all of a sudden it doesn't matter quite as much anymore. Um, so I think that there's definitely some value to it, but you also have to imagine that if you have the unified codebase, then the the boundaries are sort of accidentally very undefined. Particular with RSC, I noticed this a lot where like it's very hard to actually reason your head around what's on the server, what's not. So actually having this extra boundary for me is almost like a feature.</p>
</details>

### AI 编程助理：从怀疑到依赖的转变

Host：谈到 AI 代理编程，你提到了一件非常有趣的事：你的初创公司目前只有你们两个人，但你们却拥有一大群 AI“实习生”在四处奔波，比如 Claude、Codex。你是如何使用它们的？你看到了它们的什么潜力？另外，你能分享一下你正在用它们构建什么吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Speaking about uh AI agent coding, one thing that was very interesting that you mentioned is there's two of you in the startup right now. uh and you have just a lot of kind of you know like these AI interns running around Claude, Codex, how are are you using them what are you seeing for them and by the way can you also share what you're building with them?</p>
</details>

Armin：是的。我们发现电子邮件是一个非常迷人的工作领域。所以，你可以想象在处理电子邮件时会遇到的各种问题。我们之所以进入电子邮件领域，一个很重要的原因是，现在我一生中经历的最大的技术转变之一就是，自然语言处理现在已经可以大规模地、以合理的成本在多种语言中使用了。这是进入电子邮件领域的一个好理由，因为电子邮件完全是关于自然语言的，里面有很多好的数据，但在过去处理这些数据非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Yeah. So, we scoped out the email to be a fascinating space to work in. And so, uh, you can kind of imagine what the kind of problems are that you have when you work with emails in one form or another. And maybe maybe a little bit of a of of of why we went into email is because one of the things that is very evident now of the biggest shift in at least my lifetime. what's capable of with computers is that natural language processing is now available at scale in many languages um for for for a reasonable amount of money and and that is a good reason to go into email because email is all about natural language and there's a lot of good data in it but it has been very hard to work with the data in the past.</p>
</details>

Armin：如果你读我的博客，你会知道直到今年二三月份，我对 AI 编程的看法都非常负面，然后慢慢地开始转变。到了五月，我就觉得：“天哪，一切都将不再一样了。”我之所以如此看好这件事，一个重要原因是，当我回想这些年来所有我希望能够做到、但就是没时间做而不得不明确决定放弃的事情时，我发现这样的例子太多了。我记得我们在 Sentry 重构分组算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: if you read my blog you know that my opinion on AI stuff for programming was incredibly negative up until February March where it slowly moved around and then in May I was like holy nothing is going to be the same anymore. And one big reason why I'm actually so bullish on this is because when you think into and actually think it doesn't really work that well for teams today. I I think maybe maybe they're ways and I'm going to see as I'm scaling out this company like how it's going to work at scale. But one of the reasons why I think it will actually be really good is because if I if I look over the years of all the stuff that I wish I would have been able to do, just didn't have the time for it and I had to make this explicit decision not to do it. um that I have too many cases of this, right? Like I remember we we were were reworking the grouping algorithm at Sentry.</p>
</details>

Host：分组算法，那是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: The group grooving algorithm, what is that?</p>
</details>

Armin：就是确保两个非常相似的错误被分到同一个组里。这是一个大规模的数据问题，但也是一个非常具体的数据问题。我们花了大约三周时间，才为自己构建了一个基础的可视化工具，用来判断新算法是否比旧的好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: It's like making sure that two errors which are very very similar are grouped into the same group. But it's like it's it's a data problem at scale, but it's also one very specific data. And so we we spend like three weeks building just a basic visualizer for ourselves to figure out if the new algorithm works better than the old one.</p>
</details>

Armin：但我确信，现在我可以在 30 分钟内让 Claude 帮我做出这个工具。它大约有 5000 行代码，看起来更好，还有漂亮的 UI 和一切。所以，有很多项目因为需要构建这些定制工具（比如迁移系统）的前期工作量太大而无法进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: But I know for a fact that I get this tool in 30 minutes on the side from Claude. It's around 5,000 lines of code and it looks better and has like pretty UI and everything, right? So the these sort of there are many projects that didn't go anywhere because the leg work needed to build yourself this bespoke tooling to even be able to pull this project off like a migration system or something like this. It's just too much, right?</p>
</details>

Armin：所以我注意到的一个巨大变化是，我现在身边有了这么多更好的工具。我从 Terraform 切换到了 **Pulumi**，只是为了看看效果如何，然后我让 Claude 为我构建了我完美的控制系统，用来获取日志并可视化生产环境中的情况。这在以前是我绝对不会去做的，因为根本行不通。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And so that's I think one of the big changes I'm noticing for myself is that I have so many better tools around now. Um that just make it much better to work with. I have uh like I'm at the m I I moved from Terraform to Pulumi for one of the services just to see how that goes and and I I had Claude build me like my perfect control system to get my logs and um and visualize what's going on in production and and I would never have done this before just because like it wouldn't have worked.</p>
</details>

Armin：另一个大问题是，它在主代码库上效果如何？我的联合创始人不是技术出身，但这并不妨碍他现在使用 Claude 或 Codex。这其实很棒，因为这意味着即使是那些在公司某些阶段，你希望他们能做点什么，但实际上需要比他们具备的更多编程技能的人，现在也能做到了。现在有一个完整的代码库，我基本上都不看，它实际上在验证我们正在做的核心功能的一部分。它就是凭感觉来的，而且能用。代码不漂亮，但没必要，因为它的重点是弄清楚“这是我们想要的体验吗？”这太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Another big question is like how well does it work on a main codebase, right? My co-founder is not a technical co-founder. Um but that doesn't stop him from using Claude or Codex now. And it's actually great because it means that even someone who maybe you normally like in in certain stages of a company there's a bunch of stuff where you wish you could do something but but it actually requires maybe more coding skills than otherwise right and so there's an entire codebase where I basically don't look at which actually validates a core part of the feature that we're working on and it's just vibes and it works. It's not pretty, but it doesn't it's not necessary because like the whole point of it is figure out like is this the experience that we want and and this is great.</p>
</details>

Armin：然后问题是，我写的代码中，有多少是我觉得会成为我们工作基础的代码，是 AI 生成的？我向你保证，超过 80%。有一些非常刻意编写的代码不是这样写的，我们投入了大量精力。但这个代码库中存在的大多数代码都没那么重要。它们是一堆 API 端点，一堆 OpenAPI 规范，一堆常规的代码片段。它们应该看起来不错，通过所有测试，完全遵循我们想要的架构。但如果你把它们压缩，问“它们实际包含的信息是什么？”答案是：很少。所以用正确的方法，你的生产力会非常高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And then the thing is like how much of the code that I'm writing which I'm feel like this is going to be a foundation of what we're doing is is is at this point agentic and like I guarantee you it's more than 80%. And it's like there's very there's very deliberate code which is not written this way or like where where like really we put a lot of effort into it. But most of the code that exists in this codebase is not so important. It's a bunch of API endpoints. It's a bunch of open API specifications. It's a bunch of run-of-the-mill pieces of code. They should look nice. They should pass all the tests. They they should follow exactly the architecture that they want. But if you were to compress them down and say like what's the actual information contained within them is very little right and so with the right approach you're actually very productive with this.</p>
</details>

Host：是什么让你在二月份之前对这些东西如此消极，或者说非常怀疑？后来又为什么对这些 AI 编程工具或代理式编程变得如此积极？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: what made you so negative or or like just like pretty negative up to around February or so the things that you were just really skeptical about and then why have you become so much more positive about like these AI coding tools or agentic coding right</p>
</details>

Armin：最大的原因是，它现在开始做那些我讨厌做但又知道必须做的工作。举个例子，昨天我必须弄清楚为什么我在生产环境中运行的一个端点没有按预期工作。问题不在于代码中的错误，而是 AWS 的 **IM permissioning**（IAM permissioning: Identity and Access Management，AWS 中的身份和访问管理权限）问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: the biggest thing is that it it actually now starts doing work that I hated doing but I know I had to do so that that is a like as an example yesterday I I really had to figure out why one of like the endpoints that I have work running there in production didn't work quite as it should and it was it was not a problem of the error in the code it was a problem of AWS permissioning and like</p>
</details>

Armin：我犯了一连串三个错误，最终导致它无法完成任务。首先是一个 IAM 权限错误，然后是另一个系统上的白名单错误，最后我忘了是什么了，但也是类似的问题，可能是一个逻辑 bug。关键是，这是一个接一个的错误，你无法一次性看到所有问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: there was like there was a chain of three things that I did wrong that all resulted in it couldn't do what it was supposed to be doing right like first there was an IM permissioning error and then there was a a whitelisting error on a different system and then the final up was um I forgot what it was. I think but but the final up was also something with maybe that was actually logic bug but the point is it was one error and one error and another error and you couldn't see them all at once.</p>
</details>

Host：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: No.</p>
</details>

Armin：当时我也在忙别的事情，心想：“我知道我需要调试这个，但如果现在做，至少要花两个小时。”但没关系，因为 Claude 帮我做了很多。我仍然需要从日志中复制粘贴一些东西，但因为它拥有世界知识，可以把很多东西联系起来。我可以在处理我正在做的事情的同时，让它修复和调试这个生产问题。这是一个巨大的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And I was also busy doing something else and I was looking like I know I need to debug this. Um, but it's if I if I'm going to do this now, it's going to take me at least two hours. But it didn't matter because because Claude was doing a lot of it. Like I still had to copy paste a bunch of things from the logs, but it it knows so much because it has world knowledge access. It can combine a bunch of things together. And I could make progress on the thing I was doing while it was also fixing and debugging this production issue. And that is a significant improvement.</p>
</details>

Armin：同样的事情也发生在我最讨厌做的事情之一：创建复现案例。但我知道，每次我得到一个好的复现案例，我的工作体验就会好很多。现在我可以对 Claude 说：“给我做这个的复现案例，大概是这个样子。我们先别急着修复它，先弄清楚如何得到一个可以循环调用的函数。”这是我们试图解决的问题。在四五月份之前，我无法从 Cursor 甚至它的代理模式中获得这种体验。但这确实改变了我的看法。然后，当我开始越来越深入地探索：“好吧，既然我能做这个，能做那个”，我也变得在给它更多任务方面极其大胆。现在，通过让它做我不想做的事情，同时保持对我确实想做的事情的控制，我对它未来的可能性有了新的认识。这就是对我来说的巨大转变，认识到它能以这种方式工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: The same thing with one of the things I hated the most was creating repro cases but I know that every time I got a good repro case my my I enjoyed it so much more right and now I can say claude make me the repro case for this this is roughly what it looks like let's not try to fix it I figure I was like how do we get this one function that can keep calling in a loop that is what we're trying to figure out here right so I was not able to get that experience out of cursor even with the agentic mode prior compared to to to to May, April. But that was really what changed my opinion on it. And and then as I started going deeper and deeper into, okay, now that I know that I can do this and I can do this and I can do this, I also got incredibly adventurous in in in giving it more things to do and and now I can and I have a new sense of where it could go just by giving it the things I don't want to do, but staying in control of the things I do want to do. Um and and that was that was the big shift for me was was recognizing that it can do that in a way.</p>
</details>

### AI 时代，编程语言的重要性是升是降？

Host：到目前为止，你认为这些代理式工具在哪些方面改变了软件工程，又有哪些方面没有改变？特别是，你已经写了大约 20 年的代码了。所以，系统架构、整体复杂性，以及如何以一种在公司规模扩大时仍能保持可维护性的方式构建事物，这些都需要大量经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: And so far what are you seeing in what these agentic tools change about software engineering and what are the things that don't change especially you know you you've been writing code for like what 20 years or so. So, so system architecture and like overall complexity and and and like how you build things in a way that something stays maintainable as it scales into a larger and larger company. There's a lot of experience in it and I also didn't have all of that experience at any point in time. So I feel like I this is one of the things where I really like as time went on I learn a lot more which gives me a benefit over my prior self that didn't have that that is going to continue to be true.</p>
</details>

Armin：有一个论点是，像 Claude 这样的系统会帮助你，甚至可以围绕它引导这些事情。但如果你把你做的所有事情都完全委托给机器，那么不这样做的人就比你有优势。因为总会有一些创新是这些系统里还没有的。现在这些系统输出的东西，某种程度上是我们对事物如何运作的最佳理解，直到目前为止。所以，拥有一些在这些语料库中还没有的、规模化的东西，就是优势所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Now there's a there's an argument to be made that maybe Claude is is like systems like this will will help you and maybe can even bootstrap these sort of things around it. If you fully delegate everything that you're doing to a machine, then the person that doesn't do that has an edge on you, right? Because like there's going to be some innovation that is not in these things yet, right? So like right now what these systems spit out is sort of our best understanding of how stuff worked up to this point, right? And so having something that maybe at scale is not in these corpuses yet is where some of the edge comes from.</p>
</details>

Armin：而且，如果你不把所有事情都完全委托给机器，公司里也会形成更好的文化。因为如果只是一堆机器，那还有什么意义呢？这也是我现在想招聘更多人的原因之一，因为 Claude 不是人。一家运营良好的公司和一群积极进取的人所带来的能量，是计算机无法替代的。所以我认为，作为一名工程师，理解如何创建系统，理解它产生的代码是更正确还是更错误，这些都是会伴随你的重要部分。我不认为这方面有太大变化。即使我实际写的代码少了，我用 Claude 编程的感觉还是一样的。只是，敲击键盘这个物理动作不再像以前那样了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: It also creates a better culture in a company if you're not completely delegating everything to a machine, right? It's like because like what what's the point if it's just a bunch of like this like this is one of the reason why I want to hire more people now. It's just because Claude is not a human and it's just there's a there's an energy to to a well-running company and to to to motivated people that just a computer can't replace. So I think that is that is a big part that that sticks with you as an engineer is like understanding how to create the systems. Understanding when the code that it produces is is more right versus more wrong. Um so I don't think much of this has changed. I feel the same programming with claude even if I physically write less code. It's just that I I don't know the the the physical act of punching in the keyboard is is not quite the same anymore.</p>
</details>

Host：我们讨论了很多关于编程语言的话题，你对它们有非常具体的看法。但是随着 AI、Claude、Codex 以及所有这些能力越来越强的代理的出现，你认为编程语言的重要性会如何变化？你认为它会局限于少数人，还是说像你这样花了很多时间去理解编程语言优缺点的人会越来越少？因为听起来，你似乎可以告诉 AI 用任何方式解决问题，给它一个现有的代码库，它就能搞定。所以有一种观点认为，编程语言可能不再那么重要了。你的看法是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: We talked a lot about programming languages and you have very specific you know you have your opinions on them but with AI and Claude, Codex and all these more and more capable agents being here how important how do you think the importance of programming languages will change do you think it'll be limited to a few people or or just fewer and fewer people like yourself and others who actually have spent a lot of time understanding the pros and cons of programming languages thinking well beyond because it sounds like you know you can just tell AI to like solve it in whatever give it an existing codebase it it'll just do it right so there is an argument to be made that programming languages might not be that important anymore what is your take</p>
</details>

Armin：嗯，我将与我之前所说的话保持一致，那就是我非常尊重编程语言，因为它们内在的权衡。而现在有了 AI，我认为你可能需要开始关注不同类型的权衡。我在我的初创公司最终选择 Go 的另一个原因是，我注意到 Go 代码对于 AI 的扩展性有多好，因为它的抽象非常薄。AI 能更好地理解代码。我做过测试，让它用不同语言编写某种类型的程序 10 次，然后看它通过的频率。我发现它在 Go 上的表现比在 Python 上好得多，也比在 Rust 上好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: well I think I I will be consistent with the prior thing that I said which is I think I have a lot of respect for programming languages because of the trade-offs that are in there and with AI now I think you might have to start looking into different kind of trade-offs the reason another reason why I end up with Go in my startup is because I just noticed how good go code scales for AI because the abstractions are very thin. It understands the code better. So clearly there's some there's there's a I did I did the measurement, right? It's like I I made it write a certain type of program in different languages 10 times and see like how often did it pass and I just noticed that it did so much better on Go than it did on Python. Um and much better than at Rust.</p>
</details>

Armin：所以语言显然很重要，因为代理将要做的事情的质量会很重要。那么，我们现在拥有的任何一种语言，是人类和计算机协同工作环境的完美语言吗？我不知道，也许我们已经找到了编程语言的顶峰，但也许这正是某个时刻，会有人站出来说：“嘿，关于这里更好的权衡，我有一个绝妙的想法。因为用 AI 做这类事情的成本正在下降，但做那类事情的成本却因为 AI 而上升。所以让我用一种不同的方式来重新平衡它。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Clearly languages matter because the quality of what the agent is going to do will matter. And then is is any of the language they have right now is that the perfect language for both a human and a computer combined work environment. I don't know maybe maybe found the pinnacle of programming languages but maybe that's also exactly the moment in time where someone will come and say like hey I actually have a brilliant idea of what the better trade-off is here because the cost of doing this kind of stuff is going down with AI but the cost of this and this stuff is going up because of AI. So let me rebalance this in a different way.</p>
</details>

Armin：所以我实际上认为，编程语言将继续非常重要，特别是编程语言对运行时环境所隐含的权衡会变得更加重要。我不认为这会改变。我认为只是所有事情都在加速。现在所有事情都感觉快得多，因为基本面正在发生变化。这不仅仅是现在每个人都想构建所有新东西，也感觉如果你不是一直在工作，你就会错过一些变化。我认为这不仅在产品方面，在技术方面也是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Um, so I actually I think that I think that programming language will continue to matter a lot particularly the trade-offs that the programming language implies on the runtime environment matters a lot more. So I don't think that's going to change. I think it's just going to everything accelerates. Everything is going so much quicker right now or it feels to go so much quicker because the the fundamentals are shifting around and and this is not just with now everybody wants to build all the new things. It's also like you feel like if you if you're not working all the time now, you're missing out on some of the changes. And I don't think that's just on the product side. I think it's on the tech side, too.</p>
</details>

Armin：我敢肯定，现在有一群人觉得：“我想成为第一个构建出对代理和人类都工作得很好的编程语言的人。”而且可能不止一个人，可能有很多正在关注这个问题。感觉现在确实是构建完美语言或更好的语言的时刻，因为它能在那个环境中工作。因为我们很可能无法摆脱代理式编程。而我们现在拥有的所有语言都是最好的吗？可能性不大。所以，它在很多方面会既相同又不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I'm pretty sure a bunch of people who are feeling like I want to be the first person to build the programming language that works really well for agents and humans and and and but it's not just one person, probably a lot of them who are who are looking into this at the moment. Um it it just feels so like there is in fact a moment right now to build the perfect language uh or a better language that works in that environment because we are probably not going to get rid of a agentic decoding and what is the likelihood that all of the languages that we have right now are are the best ones probably not that high right so it will be the same and different in in many ways.</p>
</details>

Armin：还有一点不容小觑的是，计算机将完全自主编程，而没有任何人类参与的可能性，我认为不是很高。我认为人类会比我们希望的更长时间、在更多的情况下留在循环中。所以你不能说：“好吧，最优的输出是写一堆汇编代码”，因为那样就没人能审查了。所以，如果有什么变化的话，权衡可能需要向更高层次发展，以便审查变得更容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: um and and one thing not to be underestimated is that the likelihood that computers are just going to program and No human is going to be in a loop. I don't think it's very high. I think the human will stay in the loop longer than we want and in many more cases than we want. And so you you cannot go down to say like well the optimal output is write bunch of assembly code because then nobody can review this anymore, right? And so if anything the trade-off will have to be like maybe higher level so that reviewing gets easier.</p>
</details>

### 关于“996”与创业公司的工作文化

Host：你提到了一个有趣的现象，就是每个人似乎都在不停地工作。这与 AI 或代理的理念形成了有趣的对比：理论上你可以启动它们，然后去睡觉，让它们为你循环运行，这样你就可以少工作。但实际上，我们看到的是人们工作得更多了。现在我们看到一个非常有趣的现象，特别是在 AI 初创公司，它们越来越多地要求或宣传“996”，即早上 9 点到晚上 9 点，每周 6 天，尤其是在旧金山。他们把这写进招聘广告，自豪地在网上发布午夜后办公室里还有人在努力工作的照片。你也在你的博客上分享了一些对此的看法，引起了不小的轰动。你对此有何看法？因为你确实说过，现在有很多能量，有一种不想错过的感觉。显然，这就是这些人这么做的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Yeah. But you mentioned an interesting thing, which is how everyone seems to just be working all the time, which is this interesting contraction, how AI or these agents you can kick off and and you could you could in theory go to sleep and and have it just run in loops for you and so you could work less. But in fact, we're seeing working more and you and we now have this this thing which is very amusing to observe that AI startups in particular are increasing demanding or advertising this 996 from 9:00 a.m. to 9:00 p.m. 6 days a week especially in in a SF. They're putting it in the job adverse. They're they're posting it kind of proudly online that in the office at midnight or after midnight people are still there and working hard. Uh you you you share some thoughts on this as well on on your blog. It caused quite a bit of stir. But what is your take on on this? Because you did say, you know, like there is a lot of energy right now. There's a feeling of like not wanting to miss out. Clearly that's why why these people are doing it.</p>
</details>

Armin：是的。有几点想法。其中之一是，我实际上要感谢 Peter Steinberger，他很大程度上推动我进入了代理式编程。他在一家叫 PSPDFKit 的公司工作，后来卖掉了。长话短说，他一度停止了编程，然后又重新投入，说：“嘿，我发现了这个能为我编程的电脑。”他说他现在都不睡觉了，对它上瘾了。他没完全这么说，但大概是那个意思，而我当时是持怀疑态度的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Yeah. So handful of thoughts, one of which is I actually have to credit Peter Steinberger quite a lot of uh pushing me into a decoding because he uh he worked at a company called PSPDF kit which he sold and then I I don't want to tell his story but a long story short at one point he was kind of stopped programming and then he fell in and said like hey I found this this computer which programs for me and he he said like he doesn't sleep anymore. more. He's like, I'm so addicted to it. You should try this in a way. Like he didn't quite say it like this, but like I'm I'm skeptical, right?</p>
</details>

Host：一台帮你工作的电脑，却让你因此无法入睡。这真是太有趣了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: But the computer that does your work, you cannot sleep because of this. That's kind of so amusing.</p>
</details>

Armin：是的。我意识到，如果你做这种代理式编程，它会对你的大脑产生影响。因为一开始，我觉得任何一分钟我没有让它运行和做点什么，我就是在浪费时间。这就像一种毒品，它有那种即时满足感，某件事发生了，然后你可以一次又一次地启动它。它就像一台老虎机。所以我认为一部分原因是这个。我花了一段时间才走出这种思维方式，因为它不是很可持续。有好几个晚上我通宵编码，不是因为我觉得在某个创业项目上效率特别高，而只是觉得：“这太让我震惊了，我只想再来一次，再来一个提示。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Yeah. It's like I I realized like it does something with your brain. If you if you do this a trendy coding thing because like in the beginning, I felt like any minute I'm not having it running and doing something, I'm just wasting time right now. It's like it was a huge part about this like it's almost like a drug, right? it it it has this instant gratification of something happened and and you can kick it off again and kick it off again. It's like this it is a slot machine, right? And so I think I attribute some of it to that and it took me a while actually to to come out of this like way of thinking because it's not very sustainable. Like there were a bunch of nights where I just I I I did through the night with with coding not because I felt like I'm incredibly productive on something using from a startup. It was just like just like this is blowing my mind. I just I just one more just one more prompt one more prompt. Um so I think like to some degree because if you're so AI close that probably also contributes.</p>
</details>

Armin：另一个原因是，我认为每个人都看到了变化，并想尽可能多地去做。关于“996”的棘手之处在于，它定义了一种非常具体的工作制度，即你每天工作 12 小时，基本上没有周末。我从未这样做过，尽管我有时可能工作 80 小时一周。原因是我知道我不可能一直保持高效。如果我工作到深夜，早上就会……我有三个孩子，一个妻子，家庭对我非常重要，是最重要的事。所以我总是会围绕家庭来安排我的工作。你可以高强度地工作，但仍然可以以一种不是在疯狂时间疯狂工作的方式进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: The other one is I think everybody sees the change and wants to do as much as possible. I think the tricky bit with the 996 thing is that 996 defines a very very specific kind of work regimen which is you work 12 hours a day and you basically don't have a weekend. No. Um, I never did something like that even though I probably worked sometimes 80-hour weeks. And the reason for this is that I know that I cannot be productive all the time. If I if I work late at night, I will in the morning. I have three kids. I have a wife. I I family is very important for me. It's the most important thing. So, I will always arrange my work around that. You can work of intensity, but you can still um like do it in a way that is not crazy hours at crazy times.</p>
</details>

Armin：而且，如果你是创始人，或者是非常早期的工程师，拥有非常好的薪酬体系，股权对你意味着什么，这与大多数后来加入公司的人，或者公司股权没有现实价值的人，有巨大的区别。为一个只有一个人受益的事情投入大量精力是毫无意义的。所有这些都非常微妙。让我对“996”这个词感到恼火的是，他们选择了这个词。如果你追溯这个词的来源，会发现它毫无微妙之处。它就是：你每天工作 12 小时，每周 6 天，放弃你生活中的其他一切。我不认为这是任何人在任何时候都应该做的权衡，因为生活中有比在公司工作更重要的事情。你不应该把这样一个因其所作所为而带有如此负面含义的词语挂在你的旗帜上，人们真的会为此而死。如果你想成为一个高强度的工作环境，你可以这么说，但要更具体一些。因为在实践中，你不可能成为一个那样运作的公司。你只能成为一个有高能量的人工作的地方，他们会自我激励。但你能做到什么程度是有限的，你必须对这样做的代价保持透明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And I also want to say there's a huge difference between if you are the founder or if you're very very early engineer with a really good compensation system where equity means something to you from most of the people uh who join a company later on or where the company has no realistic path of their equity being worth something. There's there's absolutely no point in putting a ton of effort into something where only one person benefits from. And there's there's just there's a lot of like subtlety to all of this. And what annoys me with the 996 point in particular is that they picked that word which if if you go back to why that naming even exists is because of basically there's no subtlety to it. It's like you work 12 hours a day, six six days a week, and you give up what what's what what is otherwise in your life. And I don't think that's I don't think it's a trade-off that anyone should make at any point in time because there there's more to life than working in a company. And and that is that is not the thing that you should be putting on your flag, which has such a negative connotation because of exactly what it did. um where people literally kill themselves over it, right? And like if if you want to be a high intensity work environment and say that but but but be be more because in practical terms you cannot be a company that that runs like that. You can only be a company where high energy people work and they build themselves up. But there's a limit to which you can do it and you have to be transparent about what the cost of this is.</p>
</details>

### 从 Sentry 学到的错误处理哲学

Host：在 Sentry 工作，核心就是错误处理。你可能看到了关于不同服务器中最常见错误的大量统计数据。从开发者角度来看，关于错误处理以及如何构建更少错误的更好软件，你学到了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Now having worked at at Sentry which is all about error handling or at core is there you've probably seen tons of stats on on most common errors uh that that are coming up in different uh servers. What have you learned about error handling and how to build better software with fewer errors from a developer perspective?</p>
</details>

Armin：我学到的最重要的一点是，尽管像 Sentry 这样的工具存在并流行，但很多处理错误的方式并没有真正发生戏剧性的转变。它们要么没有携带足够的信息，要么只在调试版本中携带对调试有用的信息。这很有问题，因为最有趣的错误不会发生在调试环境中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: So the biggest thing that I learned um and ironically hasn't really dramatically shifted despite the existence of tools like Sentry and their popularity is that many of the ways in which errors are worked with um just doesn't carry enough information or only carries useful information for debugging in debug builds. And that's problematic because the most interesting errors don't happen in debug, right?</p>
</details>

Armin：也许现在随着 AI 的出现，情况有所改变，因为从不完美的信息中生成复现案例的成本可能会降低。但我真的觉得，作为语言设计者、虚拟机创建者，你应该更加重视确保错误能够以相当低的成本携带真正有用的信息，即使在发布和生产运行中也是如此。但很多生态系统并没有这样做，这非常可悲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Um now maybe this is changing a little bit with um with AI because like the cost of producing a reproducer from not perfect information might go down. So so that that maybe there's a counter move to that. I I really felt that as a language designer, as a VM creator, you put should put a lot more emphasis on on making sure that the errors can carry really useful information rather cheaply even in release and in production runs. And so not a lot of ecosystems don't do that, which is which is very sad.</p>
</details>

Armin：我认为 Python 拥有如此出色的内省能力，而无需额外的……Python 是一门慢语言，所以如果你已经为所有调试工具添加了开销，它也不会变得明显更慢。这实际上是 Sentry 存在的原因，因为 Sentry 能够显示 Python 的局部变量。它拥有所有这些丰富而强大的数据，而对于许多语言，即使在今天我们也无法做到，因为运行时不支持，或者这样做的运行时影响太大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And and I think that the fact that Python had such great introspectability without further like Python is a slow language. So if you already for all your debugging tools added, it doesn't get significantly slower. That actually was the reason Sentry existed because Sentry was able to show local variables for Python. it it had all this rich powerful data that for many languages even today we're not able to do because the runtime doesn't support it or or the the the runtime uh effect of doing that is too high.</p>
</details>

Armin：所以我学到的最重要的一点是：如果你有信息丰富的错误，你的调试体验会好得多。不幸的是，语言设计者、运行时创建者常常忽略错误，所以它们不携带正确的信息；而应用程序和库的开发者常常根本不考虑错误，或者他们在错误的地方捕获了错误，然后有用的堆栈跟踪就消失了。所有这些都是因为你认为它们是异常的，不常发生。但不幸的是，每次它们发生时，你都没有足够的数据。总的来说，考虑到错误的重要性，错误的设计完全没有达到应有的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: and so that's the thing that I learned the most is like your your experience of of debugging issues is so much better if you have rich um rich information errors and unfortunately both language languages language creators uh runtimes often neglect errors. So they don't carry the right information and the application and library developers often don't think about errors at all or or they they captured them down in the wrong places and then the useful stack trace is gone. All that sort of stuff because you think they're exceptional. They're not happening all that often, but unfortunately every time they did happen, you know, you didn't have enough data. Um so like just in general like the design of errors is completely uh is not where it should be given how important they are.</p>
</details>

Host：Sentry 几乎支持所有语言，或者至少是那些被广泛使用的语言。你是否在使用不同语言的错误类型或频率之间看到了有趣的模式？基本上，我想知道的是，在编写更正确的程序方面，选择语言有多重要？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: So that's one thing but Sentry works across a bunch of different languages almost all languages right these days or or at least the ones that that can that are widely used. Have you seen interesting patterns between the types of errors or the frequency of errors of of using languages? Basically, I'm trying to get to like how important it is is it to choose your language in terms of, you know, like having more correct programs?</p>
</details>

Armin：不同的语言以不同的方式崩溃，这不仅是因为语言本身，也因为你用它构建的东西。例如，大规模的 JavaScript，如果你看很多网站，错误无时无刻不在发生。JavaScript 中真正有意义的错误百分比非常非常低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Well, different languages crash in different ways and not just because of the language, but also what you build with it. And so for instance, JavaScript at scale like if you look at a lot of websites errors all the time the percentage of errors in JavaScript that actually are like meaningful is very very low.</p>
</details>

Armin：这很合理，因为你能在 JavaScript 中导致的、能让浏览器标签页崩溃的错误非常少。它就像“出错时继续下一个”，你蹒跚前行，有些东西坏了，但控制台日志中的一个错误并不意味着网站就坏了。但可能现在事件监听器不触发了，所以点击变成了无效点击。Sentry 需要一个会话重放产品才能发现这个问题，因为你在 Sentry 中找到的实际错误与用户无法在页面上前进之间没有足够的联系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: and that makes sense because you you very few errors that you can actually cause in JavaScript and crash a browser tab for instance right so it's like you're you're it's like on error resume next you're hobbling along like something is broken but doesn't really like but like the the existence of an error in the in the console log doesn't imply that the website is broken but for instance like might like now the event listener might not fire anymore. So the the click is a dead click which is something that sentry needed a session replay product to find because the the actual error that you would find in sentry was insufficiently linked to user not being advanced on the page.</p>
</details>

Armin：另一方面，如果你有一个用 C++ 编写的电脑游戏，它崩溃了，你的会话就结束了。所以，与 JavaScript 中所有乱七八糟的错误相比，电脑游戏中的崩溃相对较少，但当它们发生时，它们更有意义。所以很难说不同语言的错误率如何，因为这些错误的影响非常不同。C++ 代码在电脑游戏中的崩溃率出奇地低，Sentry 从中获得的流量非常非常少，但 C++ 中每个单独的崩溃报告的用处却高得多。所以，这是一个非常复杂的话题，要说某个东西如何出错，因为它真的取决于它会拖垮什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: On the other hand, if you have a computer game it's written C++ and it crashes your session is over, right? And so the there are comparatively fewer crashes in queria games compared to all the nonsense going in JavaScript, but when they do happen, they're much more meaningful. And so it's very hard to say like error rates in different languages and so forth because like the impact that these errors have is very very different. So C++ code crashes in computer games shockingly little. like the the amount of traffic that Sentry gets from these is very very low, but the usefulness of each individual crash report in C++ is so much higher. So it's just it's it's a very complex topic at scale to say like how does something error because it really depends on like what does it take down.</p>
</details>

Armin：当然，有些类型的错误，你看得多了就会觉得它们真的不应该发生。在某种程度上，JavaScript 生态系统中有一个大规模的共识，即类型检查器可以消除一大类错误，因为至少你必须明确检查这个东西是否可空。但我从未感觉到 TypeScript 的采用会戏剧性地改变 Sentry 的 JavaScript 错误率。如果说有什么影响的话，那就是这种采用对错误率没有任何有意义的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Um obviously there are certain types of errors that you if you see them long enough you feel like they really shouldn't happen. To some degree there was a a large scale realization in the JavaScript ecosystem that type checkers could get rid of a whole bunch of class of errors because at the very least you have to explicitly check if this thing is nullable or not. But I I also didn't ever get the feeling that the adoption of Typescript would dramatically change anything about like centuries JavaScript error rates. If anything it like none of of that adoption had any meaningful impact on on how cry</p>
</details>

Host：是的，因为我本来的预期是，我们知道并且普遍认为，类型安全的语言会减少某些更明显的错误。TypeScript 对 JavaScript 做了这个，它有一个编译器，最终你会得到一个检查。所以我们应该有更少的错误。但你却说你没看到太大变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: Yeah. Well, because because what what what what I would have expected, right? Like we know and I think it's pretty commonly assumed. I'm not sure if it's proven that type- safe languages will reduce certain kind of more obvious errors. TypeScript does this with JavaScript. I mean, it has a compiler, but but in the end, you you do get a a check before it all gets compiled to JavaScript. So, we should have fewer. That's what that's what I think. So you're saying that you didn't really see uh too much change?</p>
</text>

Armin：是的，如果有什么影响的话，也是无法衡量的。然后，当然，你可能有其他频率函数发生，抵消了你捕捉到的一些错误的改进。也许这反而让你更大胆地去构建更复杂的代码。在 Sentry 的很多时候，是疯狂复杂性的时代。所以很多错误与“这个是否可空”无关，而是突然之间我正在与一个微服务通信，它们的版本不一致，我的类型检查根本帮不上忙，因为有人决定在网络层上它现在无论如何都是 null。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: No, I I I if if there was an impact is unmeasurable. Um and then of course you have like you have you have other sort of frequency functions that might happen that that offset what like maybe whatever improvement that you have on like catching like some of those you maybe that sort of makes you just more adventurous to build more complex code in comparison. Right. A lot of the time of century was the SER era of crazy complexity and so then um like many of the errors were related to not like did I was this nullable or not but now the sudden it's a microservice that I'm talking to and they have misaligned versions and my type check actually didn't help me at all because someone decided that on a network layer it's now null anyways right.</p>
</details>

Armin：Sentry 多年来处理的许多软件的复杂性增加了。我认为你可能可以衡量这一点，特别是，我记得 React 生态系统中越来越多复杂东西的采用，极大地增加了错误的类型。比如，水合错误（hydration errors）在很多年里都不是问题，然后突然之间，出现了一整类新的错误，因为现在初始服务器渲染和 JavaScript 动态加载的视图稳定性之间出现了问题。这是一整类以前不存在的错误，突然之间就存在了。所以，仅仅因为我们改变的方式以及我们的应用程序变得多么复杂，就很难衡量这些事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: so the the comp the increased complexity of many of the software that sentry dealt with over the years. I think you could have probably measured that especially I remember the adoption of um of of more and more complex things in the in the React ecosystem uh just dramatically increased the the types of errors like at one like hydration errors were not a thing for many years and then all of a sudden there's a whole class of new errors coming in because the now all of a sudden the view stability between initial server render and what the JavaScript dynamically loaded on time does it's like that was an whole class of errors that didn't exist before and all of a sudden does exist, right? So, it's very hard to measure these things just because of how we change and how much more complex our apps are.</p>
</details>

### 语言设计中的权衡：性能与可调试性的永恒之战

Host：所以，即使在 Sentry，你们团队的重点也是完成任务。你测试它是否正常工作，然后当涉及到错误时，就像你说的，它通常是事后才想到的。但是对于编程语言，听起来很讽刺的是，在许多语言中，它也是一个事后才想到的东西。因为就像你说的，如果你更好地思考过，说：“嘿，在某个时候，程序会崩溃或出现错误。我能做什么？”然后你谈到了 context local 这种东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: it almost sounds ironically that it in many languages, it's an afterthought because as you said, if you thought it through better saying, hey, at some point the programmer will crash or there will be an error. What can I do? And you know, there's a context local thing that you talked about.</p>
</details>

Armin：我不认为这是事后才想到的。我认为这是故意不做的，因为你必须想象，一门编程语言中有不同种类的力量在说“语言应该做什么”，其中一些力量显然是相互矛盾的。**Context Local**（上下文局部变量：一种在异步执行流中传递数据的机制）有什么问题？它们会使每个调用变慢。所以现在，所有想要更快语言的人都会说：“好吧，你现在得给出一个非常有力的论据，说明为什么应该这样做。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I don't think it's an afterthought. I think it's deliberately not done because you have to imagine like there there are different kind of forces in a programming language that say like what should the language do and some of them are very clearly at odds with each other. So why what's the problem with context locals? Why they make every call slower, right? So now it's like all the people that want a faster language, they're like, well, now you got to make a really strong argument why you should be doing this.</p>
</details>

Armin：我记得多年来在幕后隐藏的一场最大的斗争是关于原生平台的。编译器在某个时候做了一个决定，我们可以通过使用所谓的“栈寄存器”来获得一个额外的寄存器。你基本上会放弃最后一个寄存器来恢复堆栈帧，以换取一个额外的寄存器供其他用途，然后你必须使用一个非常复杂的 DWARF 解堆栈系统来恢复它。所以，你基本上是说，我们把能够在运行时遍历堆栈的复杂性，转移到通过一个嵌入在调试信息文件中的非常复杂的二进制程序来延迟完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I remember one of the the biggest fights over the years that sort of hidden was hidden behind the scenes was um on native platforms, compilers at one point made a decision that we can get one extra register by basically using the it's called a stack register. you would basically you would give up the last register to to recover the stack frame for one extra register for other users and then you would have to use a very complex uh dwarf unwinding system to recover this. Right? So you you basically say like we're moving some of the complexity of being able to just at runtime walk for the stack to doing it delayed through a very complicated uh binary program which is embedded in this debug information file.</p>
</details>

Armin：但你通过这样做失去了什么？嗯，你失去了运行时分析的能力，因为大规模地这样做太慢了。所以，你不能做一个进程内分析器，而这被证明是非常有用的，因为你会发现通过追踪无法发现的信息。它也使得 Sentry 很难为原生代码做正确的堆栈报告，因为我可能无法恢复调试符号，因为它可能是某个人的二进制驱动程序，而且从来没有人给我 DWARF 文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: But what do you lose through this? Well, you lose runtime profiling capabilities because that's too slow to do at scale. So, it can't do an in-process profiler, which turns out to be incredibly useful because you you will you will find information you wouldn't find through uh through tracing, right? Um you can do like um basically can you can run a sampling profiler. Um, it also made it incredibly hard for Sentry to do proper stack reports for um, native code because I I might not be able to recover the debug symbol because it's a it's a binary driver from someone and nobody ever gave me the the DWARF files.</p>
</details>

Armin：我知道 Facebook 的应用会秘密上传安卓系统符号。你的设备会被随机分配是否上传，他们收集所有系统符号来提高错误报告的质量。像 Facebook 这样的规模可以这样做，但 Sentry 不能。我们不能让每个 Sentry SDK 都神奇地上传一堆文件，那会毁掉用户信任。但最终，我想那只是两年前的事，Debian 或 Red Hat 的某个人说：“好吧，这太荒谬了，我们现在要改变这个，我们要把栈指针带回来。”这是一场斗争。他们说：“我们对所有东西都进行了基准测试，我们只损失了 5% 的性能。”除了 Python，Python 解释器由于某种原因慢了 20%，所以他们没有对 Python 这样做。但这是一个标志位，重要的是这个标志位默认对所有东西都设置了。但这 5% 的性能差异，背后是长达一年的施压。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I know like Facebook for instance, Facebook's app um, secretly uploaded Android system symbols all the time. like your your device were randomly assigned if it should upload it or not and they were harvesting all the the system symbols to increase the quality of the error reporting like if your Facebook scale can do that like sentry couldn't do that like we can't just magically have every sentry SDK just upload a bunch of files just that would just destroy user trust but eventually and I think that only took place two years ago someone at I think it was Debian or or Red Hat was like well this is nonsense we're going to change this now we're going to bring the stack pointer back and it was a fight. It was a fight to do it and they was like, well, we we we benchmarked all of it. We're just using 5%. Except for Python where the Python interpreter for whatever reason got like 20% slower. So, they didn't do it for Python. But but the it was it was one flag, right? It's one flag and but what matters is that flag is set by default to everything, right? So, it should be on by default. But but this 5% of performance difference which was assumed to be more than that, there was a year-long pressuring, right?</p>
</details>

Armin：所以我认为这很难做，因为你有这些不同的利益在里面，有些人想要性能，有些人想要可调试性，他们可能生活在完全不同的世界里。也许那个非常关心性能的人从来不需要看任何崩溃，因为那不是他的责任范围。然后你有一个维护着一堆复杂服务的人，每个服务都有很小的崩溃概率，而且常常运行的不是他们自己的代码，然后一旦他们遇到崩溃，他们就没有需要的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: So I I think it's hard to do because you have these different interests in it and some people want the performance and some people want the debugability and and they they might live in completely different worlds like maybe this one person that really cares about performance just never has to look at any crashes because that's not the area of responsibility and then you have someone who maintains a fleet of complex services and every one of them has a small percentage of crashing and often doesn't run the code that they have and then once they have the crash they don't have the data that they need.</p>
</details>

Host：这太有趣了，因为它提醒你设计一门语言有多难。因为你有这么多用户，就像你说的，刚刚遇到崩溃的人，他们实际上希望语言能支持他们以一种非常简单的方式恢复，但这默认会降低性能，要么通过性能，要么通过更高的内存使用。你不可能有免费的午餐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: This this is so interesting because it it just it it reminds you of how difficult it must be to design a language because again you have so many users and as you say the the person who just had a crash they actually want ideally the language support to get that back in a very easy way but now it will by by default slow it down either either through performance or through higher memory usage like you cannot have a free lunch right?</p>
</details>

Armin：是的，看起来午餐总是有代价的。但我现在对语言设计者有了更多的尊重。因为当你刚开始编程时，你会有这种天真的想法：“它必须这样工作。”然后随着时间的推移，你意识到，哦，你必须做出所有这些权衡，其中一些真的很难量化，你甚至可能不得不做出一些非常不受欢迎的决定，而且没有真正的对错，只有很多权衡。也许这也是我们在某种程度上有这么多语言的原因。但思考这些看似微小的默认设置对你能用它做什么，以及什么样的人会选择你的语言，有什么样的影响，是非常迷人的。我曾认为 Python 是构建 Web 服务最棒的语言，因为我可以检查每个进程，而且它不会变得更慢。但现在我知道，那也是 Python 从一开始就很慢的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: Yeah, it looks like the lunch comes with some price. But look, I have a I have a lot more respect now I think for for language designers just because of you like especially if you start out programming you have this naive idea of like it has to work this way, right? Um and then you and then over time you realize oh there are all these trade-offs you have to make and some of them are really hard to quantify and you might even have to make some very unpopular decisions and there's no real right or wrong. There just a lot of trade-offs and maybe this is also why we have so many languages to some degree. But it is very fascinating to think about what some of these seemingly little defaults have in terms of what you can do with it and then maybe what kind of people are going to pick your language. I thought Python was the most amazing language ever for building web services because I could I could inspect every process and it didn't make it any slower. But now I know that's also why Python was slow to begin with, right? And so</p>
</details>

### 给初创公司早期工程师的建议

Host：作为初创公司的早期工程师，几乎是创始工程师，你学到了什么？对于现在早期加入一家快速发展的初创公司的工程师，你有什么建议？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: what are some things that you've learned being an early engineer almost like a founding engineer at a startup and what is advice that you would give to an engineer joining a startup a fast growing startup uh right now early on</p>
</details>

Armin：嗯，我可以从一个十年前加入公司的人的角度给出建议。情况总是在变。我认为我的生活在很多方面是一条非常线性的道路，当机会出现时，我决定是否接受它。这就像秘书问题，但我并没有尝试太多次。对我来说，通过的标准是：“我认为这很棒吗？我想做这个吗？”然后我也许就会抓住机会去做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: well I can I can give the advice from someone who would have joined the company 10 years ago right um look the situation changes all the time I think but my life in many ways is a a very linear path where like there's an opportunity I make a decision if I take it or not it's the secretary problem, but I'm kind of taking not too many attempts of it, right? Which is like I I just want to like the the passing bar for me is do I think that this is great? Do I want to work on it? And then maybe I take the opportunity to work on it.</p>
</details>

Armin：对我个人而言，我不是一个很好的员工，因为我并不一定适合某个特定的模式。我在 Sentry 多年来的头衔，在很多方面我甚至都不认同。比如，某个时候上面写着软件工程师，但我却负责着一个有下属的办公室，有时我觉得自己像个发薪水的。因为一个小小的初创公司有很多这样的事情，现在有人也需要处理这些杂事，比如你需要雇人把家具搬进办公室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: And for for me in particular, I'm I'm shaped like a person that is actually not a great employee because I don't necessarily go and fit a particular mold. my titles at century in many ways over the years were I I didn't even associate with them in a way right it's like at one point it said I don't know software engineer on it but I was like responsible for an office here with people underneath where I sometimes felt like I'm a payroll provider right like there were so many other things in it because like a small startup has this many like now someone needs to deal with this stuff too right like you need to hire someone to even just bring dumb things like just furniture into the place.</p>
</details>

Armin：如果你早期加入一家公司，一切都处于变化之中，没有什么是明确定义的。有些人喜欢这样，有些人不喜欢。我认为你必须愿意体验新事物。如果你加入一家草根初创公司，特别是如果创始人以前没有创办过公司，没有经历过公司从小到大的成长过程，因为即使是现在，我也再次意识到：“哦，我好像忘了我需要再做所有这些事情。”有些人喜欢这样，有些人不喜欢，你只需要意识到这样做的后果，并以某种方式为自己铺平道路，要么接受做任何出现的事情，要么非常有野心，刻意地朝着你想去的方向走，即使这可能会让你在某种形式上暂时受挫。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: If you join a company early, everything is in flux. Nothing is well defined. And some people like that, some people don't like that. And I think you have to be just willing to experience new things. If you start at a scrappy startup that particularly maybe comes from someone who hasn't founded a company before, hasn't been there when a company sort of grew from small to big because even now for me I just realize again oh I kind of forgot I need to do all of this and this again. Um but but that's uh if there are people that like that and people don't like that and and you just have to be aware of of the consequence of this and you have to path the way for yourself somehow either by being okay with just doing whatever comes up or or being incredibly ambitious and deliberately taking certain paths towards where you want to go even if that might temporarily set you back in one form another.</p>
</details>

### 快问快答

Host：最后用一些快速问答来结束。我会问，然后你告诉我你想到的。在所有编程语言中，哪一门是你的最爱？我真的很想听听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: and then just to close with some rapid questions so I'll just ask and then you tell me what comes up of the programming languages which one is your favorite and I'm really interested to hear</p>
</details>

Armin：是 Python。有两个原因。一是因为它给了我现在的职业生涯，所以显然有很多情感上的依恋。但同时，它在很多方面是一门糟糕的编程语言，设计不佳等等，但它非常务实，我就是喜欢这一点。我想起了 Kell Henderson 多年来做的很多事情。他最初是 Flickr 的 CTO，然后是 Slack 的，一个 PHP 开发者。但他使用 PHP 的那种务实精神，在很多方面就像我一直喜欢用 Python 构建产品的方式。你并不真正关心它在那个意义上是好是坏，你关心的是你能用它做什么。而我能用 Python 做很多事，我为此感激它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: it's Python and uh two answers for why uh one because it gave me the career that I had and so there's obvious obviously a lot of emotional attachment to it, but also it is it is a bad programming language for many many aspects of like misdesigned and whatever, but it is incredibly pragmatic and I just like that and I kind of want to point towards many of the things that Kell Henderson did over the years. He was the CTO at Flickr originally and then Slack PHP guy, right? But um the the the pragmatism in which he used PHP was in many ways a pragmatism in which I always like building product with Python and and it's like you don't really care if it's good or bad in that sense like like what you can do with it and I could do a lot with Python and I appreciate it for this</p>
</details>

Host：那么，你喜欢使用的一个工具是什么？它做什么用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: and then what's a tool that you love using and what does it do?</p>
</details>

Armin：我将以一个非程序员的身份回答这个问题。我喜欢使用的一个工具是螺丝刀。它用来拧螺丝。但我之所以如此喜欢它，是因为我多年来学到的一件事：我从未有过一把好的电动螺丝刀。然后当我们买公寓时，我买了一些非常好的工具，包括一把螺丝刀。它增加了我钻孔、组装家具和做所有事情的意愿。到目前为止，这可能是我现在最喜欢的东西，就是一把制造精良的螺丝刀。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: I will answer this as a not programmer. A tool I love using is a screwdriver. it screws. But the reason why I just love it so much, and I think this one of the things that I learned over the years, like I never really had a good electric screwdriver, and then when we bought our apartment, I just bought really good tools, including a screwdriver. And it has increased my my willingness to drill holes and assemble furniture and everything. And that by far is probably the most favorite thing that I have now. is just a really really good well-manufactured screwdriver.</p>
</details>

Host：我想知道这里是否有一个可以应用于开发的隐喻。就像，当你拥有好的工具时，你实际上会更有动力、更愿意，也更大胆。嗯，谢谢这次聊天，真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Host: I I I wonder if there's a metaphor there uh that will apply to to development as well. Like you know, when you when you have good tools, you're actually a lot more motivated and willing and and you're more adventurous as well. Well, thank you for this chat. This was really fun.</p>
</details>

Armin：是的，聊得很愉快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Armin: It was it was really nice talking about it.</p>
</details>