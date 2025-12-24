---
area: tech-insights
category: technology
companies_orgs:
- a16z
- Replit
- Meta
- AWS
- Shopify
- Stripe
- GitHub
- Nvidia
- Google
- OpenAI
- DeepMind
- Coursera
- Mozilla
- IBM
- McDonald's
date: '2025-10-23'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Bitter Lesson
- Pirates of Silicon Valley
people:
- Marc Andreessen
- Fred Brooks
- Andrej Karpathy
- Richard Sutton
- Paul Krugman
- Albert Einstein
- Sam Altman
- Ilya Sutskever
- Shane Legg
- Leonardo da Vinci
products_models:
- Excel
- Python
- JavaScript
- Postgres
- C
- GPT-2
- GPT-3
- GPT-4
- GPT-5
- DeepSeek
- Claude 4.5
- AlphaGo
- DOS
- Windows
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=g-WeCOUYBrk
speaker: a16z
status: evergreen
summary: a16z 创始人 Marc Andreessen 与 Replit 创始人 Amjad Masad 深入探讨了人工智能在编程领域的革命性进展。他们讨论了
  AI 代理如何通过自然语言将想法变为现实，剖析了强化学习等技术突破如何延长 AI 的推理能力。对话还触及了当前 AI 是否正迈向通用人工智能（AGI），还是陷入了“足够好”的局部最优陷阱，并展望了
  AI 将如何重塑软件开发乃至整个科技行业的未来。
tags:
- ai-agent
- llm
- local-maximum
- long
- reinforcement-learning
title: AI 编程的终局：Marc Andreessen 与 Amjad Masad 探讨“足够好”的 AI、AGI 及编程的未来
---

### AI 进展的悖论：既惊叹又失望

我们正在见证魔法的发生，这些事在五年前，甚至十年前，我们可能都认为是不可能实现的。这是有史以来最令人惊叹的技术，而且发展速度极快。然而，我们却仍然感到非常失望，觉得它发展得还不够快，甚至感觉它可能正处于停滞的边缘。我们理应感到极度兴奋，但同时又濒临绝望，仿佛这场盛宴即将结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're dealing with magic here that we probably all would have thought was impossible 5 years ago or certainly 10 years ago. This is the most amazing technology ever and it's moving really fast and yet we're still really disappointed. Like it's not moving fast enough and it's like maybe right on the verge of stalling out. We should both be like hyper excited but also on the verge of like slitting our wrists cuz the gravy train is coming to an end, right?</p>
</details>

>> 它的速度确实更快了，但还没有达到我们所期望的计算机速度。感觉就像在看一个人工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is faster but it's not at computer speed, right? What we expect computer speed to be. It's sort of like watching a person work.</p>
</details>

>> 就像在看约翰·卡马克（John Carmack）……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like watching John Carmack.</p>
</details>

>> 是的，世界上最顶尖的程序员，还是在服用了兴奋剂的状态下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The world's best programmer on a stimulant.</p>
</details>

>> 没错，是兴奋剂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On a stimulant. Yeah, that's right.</p>
</details>

### AI 时代的编程初体验

>> 那么，让我们从一个编程新手的视角开始。假设我是一名学生，或者只是上过几节编程课，自己捣鼓过一些小东西，比如会用 Excel 宏，但我远非编程大师。然后有人向我介绍了 **Replit**（一个在线集成开发环境，现在集成了强大的 AI 编程功能）以及它内置的 AI。当我启动 Replit AI 时，我的体验会是怎样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's start with, let's assume that I'm a sort of a novice programmer. So, maybe I'm a student or maybe I'm just somebody, I took a few coding classes and I've hacked around a little bit or I do Excel macros or something like that, but I'm not like a master craftsman at coding. And somebody tells me about Replit and specifically AI and Replit. What's my experience when I launch in with what Replit is today with AI?</p>
</details>

>> 我认为，无论你是否有编程经验，在 Replit 中的体验都大同小异。我们做的第一件事就是帮你省去所有设置开发环境之类的繁琐步骤，让你能专注于自己的想法。你想构建一个产品？解决一个问题？还是做一个数据可视化？提示框是完全开放的，你可以输入任何内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah I think the experience of someone with no coding experience or some coding experience is largely the same when you go into Replit. The first thing we try to do is get all the nonsense away from like setting up a development environment and all of that stuff and just have you focus on your idea. So what do you want to build? Do you want to build a product? Do you want to solve a problem? Do you want to do a data visualization? So the prompt box is really open for you. You can put in anything there.</p>
</details>

>> 比如说，你有一个创业点子。我会先用一段话来描述我想构建的东西。AI 代理会读取这段描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's say you want to, you know, build a startup. You have an idea for a startup. I would start with like a paragraph long kind of description of what I want to build. The agents will read that. It will...</p>
</details>

>> 你直接用标准英语输入就行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You just type standard English.</p>
</details>

>> 是的，标准英语。你就直接输入：“我想在网上卖可丽饼。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Standard English. You just type it in. I want to build a... I want to sell crepes. I want to sell crepes online. So you just type in...</p>
</details>

>> 真的可以就这么简单，只有四五个词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It literally could be that four words or five words. Okay.</p>
</details>

>> 或者，如果你有偏好的编程语言或技术栈，也可以指定。但我们其实更希望你不要这样做，因为我们会为你的请求选择最优的技术栈。如果是一个数据应用，我们会选择 Python；如果是一个网页应用，我们会选择 JavaScript 和 Postgres 之类的。你只需输入你的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or it could be if you have a programming language you prefer or stack you prefer, you could do that. But we actually prefer for you not to do that because we're going to pick the best thing for... we're going to classify the best stack for that request. If it's a data app, we'll pick Python. If it's like a web app, we'll pick JavaScript and Postgres and things like that. So you just type that.</p>
</details>

>> 当然你也可以自己决定，比如你可以说：“我懂 Python，或者我正在学校学 Python，我想用 Python 来做。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or you can decide. You can say, "And I want to do it, I know Python" or "I'm learning Python in school and I want to do it in Python."</p>
</details>

>> 没错。Replit 的一个很酷的地方在于，我们已经运营了近十年，构建了所有这些基础设施。Replit 可以运行任何编程语言。所以如果你习惯用 Python，当然可以指定用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. The cool thing about Replit is we've been around for almost 10 years now and we built all this infrastructure. Replit runs any programming language. So if you're comfortable with Python you can go in and do that for sure.</p>
</details>

### 从机器码到自然语言：编程的演进

>> 好的。所以，我全程都是在用英语和它交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. And then just again I know this is obvious people have used it but like I'm dealing in English.</p>
</details>

>> 是的，完全用英语。回顾一下，大概七年前我来这里向你推销我的想法时，我们描述的正是这样一个未来：每个人都想构建软件。而阻碍人们的，正是弗雷德·布鲁克斯（Fred Brooks）所说的编程中的**偶然复杂性**（Accidental Complexity: 指的是与问题本身无关，而是由所用工具或系统带来的复杂性）。与此相对的是**本质复杂性**（Essential Complexity: 指问题本身固有的、无法避免的复杂性），比如如何将我的初创公司推向市场，如何建立业务。而偶然复杂性则是“我该用哪个包管理器？”之类的问题。多年来，我们一直在努力消除这些偶然复杂性。最后需要消除的就是代码本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. You're fully in English. I mean, a little bit of sort of background here, when I came here and pitched to you like 7 years ago, what we were saying is we were exactly describing this future is that everyone would want to build software, right? And the thing that's kind of getting in people's ways is all the what Fred Brooks called the accidental complexity of programming, right? There's essential complexity which is like how do I bring my startup to market and how do I build a business and all of that. Accidental complexity is what package manager do I use. All of that stuff we've been abstracting away for so many years. And the last thing we had to abstract away is code.</p>
</details>

>> 去年我意识到，尽管我们构建了一个很棒的平台，但业务表现并不理想。原因是代码本身成了瓶颈。是的，解决其他问题很重要，但语法仍然是个障碍。语法对人们来说是不自然的。最终，英语就是编程语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had this realization last year which is I think we built an amazing platform but the business is not performing and the reason the business is not performing is that code is the bottleneck. Yes all the other stuff is important to solve but syntax is still an issue. Syntax is just an unnatural thing for people so ultimately English is the programming language.</p>
</details>

>> 它现在支持英语之外的其他世界语言吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does it work with other world languages other than English at this point?</p>
</details>

>> 是的，你可以用日语写，我们有很多日本用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes you can write in Japanese and we have a lot of users especially Japanese that tends to be very...</p>
</details>

>> 如今 AI 支持所有语言吗？还是说要支持一门新语言仍需做定制化工作？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So does it support these days, does it support every language or do you still have to do like custom work to craft a new language?</p>
</details>

>> 对于大多数拥有超过一亿使用者的主流语言，AI 的表现都相当不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, most mainstream languages that have like 100 million plus people that speak it. AI is pretty good at it.</p>
</details>

>> 最近我做了一些历史研究，只是想更好地理解我们所处的这个特殊时刻。我读到了格蕾丝·霍珀（Grace Hopper）的一段话。如你所知，她发明了**编译器**（Compiler: 将高级编程语言翻译成计算机能理解的机器码的程序）。当时，人们还在用机器码编程，那是专家的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I did a bit of historical research recently for some reason. I just want to understand the moment we're in and because it's such a special moment. I think it's important to contextualize it. And I read this quote from Grace Hopper. So, Grace Hopper invented the compiler as you know. At the time people were programming in machine code and that's what programmers do, that's what the specialists do.</p>
</details>

>> 她说：“专家永远是专家，他们必须学习计算机的底层机制。但我希望未来人们能用英语编程。”这是她在 75 年前说的，远在安德烈·卡帕西（Andrej Karpathy）提出“软件 2.0”之前。她说这就是她发明编译器的原因。在她看来，C 语言编程就是英语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And she said specialists will always be specialists, they have to learn the underlying machinery of computers but I want to get to a world where people are programming English. That's what she said. That's before Karpathy, right? That's like 75 years ago. And that's why I invented the compiler. And in her mind like C programming is English.</p>
</details>

>> 但那仅仅是个开始。有了 C 语言，然后是更高级的 Python 和 JavaScript。我认为我们正处在下一个阶段：你不再是输入语法，而是在输入思想。这才是我们最终想要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that really didn't... that was just the start of it. You had C and then you go higher level Python and JavaScript. And I think we're at a moment where it's the next step, right? Instead of typing syntax, you're actually typing thoughts, which is what we ultimately want.</p>
</details>

>> 然后由机器来编写代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the machine writes the code.</p>
</details>

>> 正是，由机器来写代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the machine writes the code, right.</p>
</details>

>> 我记得我小时候，大概 70 年代，已经有了像 BASIC、Fortran 和 C 这样的高级语言。但你仍然会遇到一些人在用汇编语言编程。顺便说一句，现在也还有，比如游戏公司为了性能优化仍会使用汇编。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I remember when I was a kid it was, there were higher level languages by the 70s like BASIC and so forth and Fortran and C. But there were still, you still would run into people who were doing assembly programming, assembly language which by the way you still do, like game companies or whatever still do assembly to get...</p>
</details>

>> 当时用汇编的人看不起用 BASIC 的年轻人。但同时，还有更老一辈的程序员看不起用汇编的，因为他们不用机器码，不用 0 和 1 直接编程。因为汇编语言是一种非常低级的编程语言，它能编译成实际的机器码，但对大多数程序员来说，它就像无法理解的乱码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they were hating on the kids that were doing BASIC. Oh well so the assembly people were hating the kids doing BASIC but there were also older coders who hated on the assembly programmers for doing assembly and not doing direct machine code, right, not doing direct zero and one machine code. Because assembly language is sort of this very low-level programming language that sort of compiles to actual machine code and it's incomprehensible gibberish to even most programmers.</p>
</details>

>> 你几乎是在用八进制编程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're writing in octal or something.</p>
</details>

>> 你写的东西非常接近硬件，但它仍然是一种需要编译成 0 和 1 的语言。而真正的硬核程序员是直接写 0 和 1 的。所以，专业人士总是倾向于鄙视后来者，说他们马虎，不理解底层原理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're writing like very, very close to the hardware but even still it's still a language that compiles to zeros and ones. Whereas the actual real programmers actually wrote in zeros and ones. And so there's always this tendency for the pros to be, you know, look on the nose. And say, you know, the new people are being sloppy. They don't understand what's happening. They don't really understand the machine.</p>
</details>

>> 当然，更高层次的抽象带来了民主化。讽刺的是，我曾是 JavaScript 革命的一份子。在创办 Replit 之前，我在 Facebook 工作，我们构建了现代 JavaScript 技术栈，包括 ReactJS 和所有相关工具。当时，我们受到了很多程序员的抨击，他们认为应该直接写原生 JavaScript。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then, of course, with the higher level abstractions do is they democratize. The absolute irony is I was part of the JavaScript revolution. I was at Facebook before starting Replit and we built the modern JavaScript stack. We built ReactJS and all the tooling around it. And we got a lot of hate from the programmers that you should type vanilla JavaScript directly.</p>
</details>

>> 我当时觉得无所谓。现在，我们创造的上一波浪潮已经成为主流，而那些在上一波浪潮中建立起自己事业的人，现在又在抨击这一波新浪潮。人性从未改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was like okay whatever and then that's mainstream and then those guys that built their careers on the last wave we invented are hating on this new wave and so just people never change.</p>
</details>

### AI 代理的工作流程

>> 好的，所以你用英语输入“我想在网上卖可丽饼”或者“我想做这个T恤生意”。接下来会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, got it. Okay, so you're typing English "I want to sell crepes online. I want to do this. I want to have a t-shirt." Whatever the business is. Okay. What happens then?</p>
</details>

>> Replit 代理会向你展示它理解的内容，试图在你和它之间建立共识。它会给你列出一系列任务，告诉你：“我要去设置一个数据库，因为你需要存储数据；我们需要设置 Shopify 或 Stripe 来收款。”然后它会给你两个选择：是先从设计稿开始，我们可以来回迭代敲定设计，还是直接构建整个应用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. and then Replit agent will show you what it understood. So it's trying to build a common understanding between you and it. It'll show you a list of tasks. It'll tell you I'm going to go set up a database because you need to store your data somewhere. We need to set up Shopify or Stripe because we need to accept payments. And then it shows you this list and gives you two options initially. Do you want to start with a design so that we can iterate back and forth to lock that design down or do you want to build a full thing?</p>
</details>

>> 如果你选择构建整个应用，它会工作 20 到 40 分钟。代理会告诉你去哪里安装应用，它会去设置数据库、执行数据迁移、编写 SQL、构建网站，甚至还会进行测试。这是我们 Agent 3 的一个新创新：在编写完软件后，它会启动一个浏览器，在浏览器中进行测试，发现任何问题都会迭代修复代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, if you want to build a full thing, we'll go for 20, 30, 40 minutes. The agent will tell you go here, install the app. I'm going to go set up the database, do the migrations, write the SQL, build the site. I'm going to also test it. So this is a recent innovation we did with Agent 3 is that after it writes the software spins up a browser goes around and tests in the browser and then any issue it kind of iterates and goes and fix the code.</p>
</details>

>> 大约 20-30 分钟后，它会给你发通知，告诉你应用已经准备好了。你可以在手机上测试，或者回到电脑上。如果你发现了一个 bug 或问题，你可以向代理描述它。如果一切完美，你只需点击发布。很多人的想法在 20-30 分钟内就实现了，这太神奇了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it'll spend 20-30 minutes building that. I'll send you a notification, it'll tell you the app is ready. And so you can test it on your phone. You can go back to your computer. You'll see maybe you'll find a bug or an issue, you'll describe it to the agent, say, "Hey, it's not exactly doing what I expected." Or if it's perfect and you're ready to go, and that's it. By the way, there's a lot of examples where people just get their idea in 20-30 minutes, which is amazing. You just hit publish.</p>
</details>

>> 点击发布后，只需几下点击，你的应用就会上线。我们会在云端设置好虚拟机，部署好数据库，一切都为你准备妥当。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You hit publish. A couple clicks, you'll be up in the cloud. We'll set up a virtual machine in the cloud. The database is deployed. Everything's done and now you have a production database.</p>
</details>

>> 想想就在两三年前，要完成这些步骤有多复杂：你得设置本地开发环境，注册 AWS 账户，配置数据库和虚拟机，创建整个部署流水线。现在，所有这些都为你自动完成了，一个孩子或外行都能做到。如果你是程序员，对代理做了什么感到好奇，Replit 的好处在于你可以逐层剥开。你可以打开文件树查看文件，可以打开 Git 推送到 GitHub，甚至可以连接到你自己的编辑器。所以，Replit 既是一个抽象掉所有复杂性的编程平台，也保留了所有底层细节供你探究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, think about the steps needed just two or three years ago in order to get to that step. You have to set up your local development environment. You have to sign up for an AWS account. You have to provision the databases, the virtual machines, you have to create the entire deployment pipeline. All of that is done for you. And a kid can do it, a lay person can do it. If you're a programmer and you're curious about what the agent did, the cool thing about Replit because we have this history of being an IDE, you can peel the layers. You can open the file tree and you could look at the files. You can open Git, you can push it to GitHub, you can connect it to your editor if you want. So the cool thing about Replit, yes, it is a vibe coding platform that abstracts away all the complexities, but all the layers are there for you to look at.</p>
</details>

>> 好的，让我们回到你刚才说的，代理会列出它将要做的任务清单。你说“我将要做这个，我将要做那个”，这里的“我”是指代理，而不是用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. So let's go back to, you said it gives you, the agent gives you, you say I've got my idea. You plug it in and it says it gives you this list of things and then when you describe it you said "I'm going to do this. I'm going to do that." The "I" there in that case was the agent as opposed to the user. Yes.</p>
</details>

>> 是的，代理列出它要做的任务，然后代理去执行这些任务。这是一个非常重要的点。当我们进行这个转变时，我们内部还没意识到，实际的用户已经不再是人类用户，而是代理程序员了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the agent lists the set of things that it's going to do and then the agent actually does those things. Agent does those things. Yeah. That's a very important point. When we did this shift, we hadn't realized internally at Replit how much the actual user stopped being the human user and it's actually the agent programmer, right?</p>
</details>

>> 发生了一件很有趣的事：我们在亚洲有服务器，是为了让印度或日本的用户有更短的延迟。但当我们推出代理后，他们的体验反而变差了。我们很困惑，为什么会这样？结果发现，是因为 AI 本身在美国，所以程序员（代理）在美国，它通过网络与世界另一端的机器交互。所以，代理突然之间就成了程序员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, one really funny thing happened is we had servers in Asia and the reason we had servers in Asia because we wanted our Indian or Japanese users to have a shorter time to the servers. When we launched the agent their experience got significantly worse and we're like what happened? It's supposed to be faster. Well turns out it's worse because the AIs are sitting in the United States and so the programmer is actually in United States. You're sending the request to the programmer and the programmer is interfacing with a machine across the world and so yes suddenly the agent is the programmer.</p>
</details>

>> 所以，**AI 代理**（AI Agent: 一种能够自主感知环境、做出决策并执行任务的软件程序）就是一个软件程序，它像人类用户一样使用系统的其他部分。它拥有各种工具的访问权限，比如写入文件、编辑文件、搜索包索引、安装包、配置数据库等等。它就是一个拥有工具和接口的程序员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay so like the new terminology agent is a software program that is basically using the rest of the system as if it were a human user, but it's a bot. That's right. It has access to tools such as write a file, edit a file, delete a file, search the package index, install a package, provision a database, provision object storage. It is a programmer that has the tools and interface. It has a sort of an interface that is very similar to a human programmer.</p>
</details>

### 连贯性挑战：推动 AI 推理的极限

>> 在 AI 行业内部，关于这些能代表你执行任务的代理，有一个争论：代理可以自主运行多长时间？5 分钟？15 分钟？一个小时？它能保持连贯性多久？也就是说，它能在多长时间内完全控制自己的能力而不至于“精神错乱”？早期的 AI 代理可能只能运行两三分钟，然后就会开始困惑，陷入死胡同。但最近，我们看到代理可以运行更长时间，完成更复杂的任务。我们现在处于哪个阶段？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then a debate inside the AI industry is with these idea now of having agents that do things on your behalf and then go out and kind of accomplish missions. There's this debate which is okay how long does it maintain coherence? Like how long does it actually like stay in full control of its faculties and not kind of spin out? Because at least the early agents or the early AIs, if you set them off to do this, they might be able to run for two or three minutes, then they would start to get confused and go down rabbit holes and kind of spin out. More recently, we've seen that agents can run a lot longer and do more complex tasks. Like, where are we on the curve of agents being able to run for how long and for what complexity tasks before they break?</p>
</details>

>> 这绝对是我们关注的核心指标。早在 2023 年，甚至四五年前，我们就有了软件代理的想法。但每次尝试，都会遇到连贯性问题。它们运行一两分钟后，错误就会累积到无法恢复的地步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's absolutely the main metric we're looking at. Even back in 2023, you know, had the idea for software agents, four or five years ago now. The problem every time we attempt them, the problem of coherence, they'll go on for a minute or two and then they'll just, they compound in errors in a way that they just can't recover.</p>
</details>

>> 你可以亲眼看到这个过程。如果你观察它们工作，会发现它们变得越来越困惑，甚至可以说是精神错乱。它们会进入非常奇怪的领域，有时会开始说中文，做一些非常奇怪的事情。但我想说，大约在去年某个时候，我们可能突破了三、四、五分钟的关口。我们感觉，**长时程推理**（Long-Horizon Reasoning: 指 AI 在一个长时间跨度和多个步骤中维持逻辑和目标一致性的能力）的问题正在得到解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can actually see it, right? Because they actually, if you watch them operate, they get increasingly confused and then, maybe even deranged. They go into very weird areas and sometimes they start speaking Chinese and doing really weird things. But I would say sometime around last year we maybe crossed the three, four, five minute mark and it felt to us that okay we're on a path where long horizon reasoning is getting solved.</p>
</details>

>> 所谓长时程推理，就是指以一种复杂的方式处理事实和逻辑，并且这个过程会持续很长一段时间，包含许多推理步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So long horizon reasoning meaning reasoning like dealing in facts and logic in a sort of complex way and then long horizon being over a long period of time. Yes. With many, many steps to a reasoning process.</p>
</details>

>> 是的。**大型语言模型**（LLM, Large Language Model）的工作方式是它们有一个**上下文**（Context: 指模型在生成下一个词时所能参考的文本信息，相当于它的短期记忆）。这个上下文包含了你的提示、AI 在推理时的所有内部对话。当 AI 推理时，它实际上是在自言自语：“哦，现在我需要设置一个数据库。我有什么工具？哦，这里有个叫 Postgres 的工具。好吧，我试试看。”它会使用工具，得到反馈，然后阅读并分析反馈。用户输入、环境输入和机器的内部思想都在这个上下文中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's right. So if you think about the way large language models work is that they have a context. This context is basically the memory all the text all your prompt and also all the internal talk that the AI is doing as it's reasoning. So when the AI is reasoning it's actually talking to itself. It's like oh now I need to go set up a database. Well, what kind of tool do I have? Oh, there's a tool here that says Postgress. Okay, let me try using that. Okay, I use that. I got feedback. Let me look at the feedback and read it. And it'll read the feedback. And so that prompt box or context is where both the user input, the environment input, and the internal thoughts of the machine are all within. It's sort of like a program memory space.</p>
</details>

>> 在这个上下文中进行推理曾是长久以来的挑战。现在，它们能够思考整个过程并保持连贯性。我们也有了一些技术，比如上下文压缩。上下文长度仍然是一个问题。如今的 LLM 市场宣传说有一百万 token 的长度，但实际上大约在 20 万 token 时它们就开始吃力了。所以我们会做很多内存压缩的工作，比如用一句话总结几段数据库日志，以确保连贯性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so reasoning over that was the challenge for a long time. That's when AIs just went off track and now they're able to kind of think through this entire thing and maintain coherence. And there's now techniques around compression of context. So there still context length is still a problem, right? So I would say LLMs today, they're marketed as a million token length, which is like a million words almost. In reality it's about 200,000 and then they start to struggle. So we do a lot of, we stop, we compress the memory. So if a portion of the memory is saying that I'm getting all the logs from the database you can summarize paragraphs of logs with one statement or the database setup that's it. And so every once in a while we'll compress the context so that we make sure we maintain coherence.</p>
</details>

### 技术突破：强化学习与可验证领域

>> 你认为基础模型中，实现这一点的关键技术突破是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what was the key technical breakthrough in the foundation models that made this possible do you think?</p>
</details>

>> 我认为是 **RL**（Reinforcement Learning: 强化学习，一种机器学习方法，通过让模型在环境中与奖励机制互动来学习最佳行为）。预训练是通过预测文本中的下一个词来完成的，这并不真正涉及长时程推理。我们之所以能突破这个限制，是因为强化学习，特别是基于代码执行的强化学习，让机器能够展开我们所说的“轨迹”（trajectories）——即为达到解决方案而进行的一步步推理链。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's RL. I think it's reinforcement learning. So the way pre-training works is, pre-training is the first step of training a large language model. It reads a piece of text. It covers the last words and tries to guess it. That's how it's trained. That doesn't really imply long context reasoning. But the reason we weren't able to move past that limitation is that that modality of training just wasn't good enough. And what you want is you want a type of problem solving over a long context. So what reinforcement learning especially from code execution gave us is the ability for the machine to for the LLM to roll out what we call trajectories in AI. So trajectory is a step-by-step reasoning chain in order to reach a solution.</p>
</details>

>> 据我了解，强化学习的工作方式是，他们将 LLM 放入一个像 Replit 这样的编程环境中，给它一个有 bug 的代码库，让它去修复。人类训练员已经知道解决方案是什么样的，或者有一个可以运行的单元测试来验证解决方案。模型会展开很多不同的轨迹，其中大部分会偏离轨道，但会有一条轨迹通过修复 bug 达到解决方案。模型会因为这条成功的轨迹而获得奖励并得到强化训练。这就是我们能够扩展这些推理链的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as I understand reinforcement learning works is they put the LLM in a programming environment like Replit and say hey here's a codebase here's a bug in the codebase and we want you to solve it. The human trainer already knows what the solution would look like. So we have a pull request that we have on GitHub so we know exactly or we have a unit test that we can run and verify the solution. So what it does is it rolls out a lot of different trajectories. They sample the model and maybe one of those trajectories will reach the solution and a lot of them will just go off track but one of them will reach the solution by solving the bug and it reinforces on that. So that gets a reward and the model gets trained that okay this is how you solve these type of problems. So that's how we're able to extend these reasoning chains.</p>
</details>

>> 那么，现在模型在长时程推理方面有多强？我们又是如何知道的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Got it. And how good are the models now at long reasoning and how do we know? How is that established?</p>
</details>

>> 有一个名为 Meter 的非营利组织，他们有一个基准测试来衡量模型在保持连贯性的同时能运行多长时间。他们去年年底发表了一篇论文，说模型可运行的分钟数每七个月翻一番。我认为他们大大低估了这个速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a nonprofit called Meter that is measuring, has a benchmark to measure how long a model runs while maintaining coherence and doing useful things whether it's programming or other benchmark tasks that they've done. And they put up a paper late last year that said every seven months the minutes that a model can run is doubling. I think they vastly underestimated that.</p>
</details>

>> 速度比七个月翻一番还快？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is that right? Vastly it's doubling. It's doubling more often than 7 months.</p>
</details>

>> 我们在 Agent 3 中非常密切地测量这个指标，而且是在真实用户的真实任务中。我们不做基准测试，而是进行 A/B 测试，观察用户是否成功。对我们来说，成功的绝对标志是你制作并发布了一个应用，因为发布意味着你愿意为它付钱，说明它具有经济价值。我们看到，Agent 1 可以运行 2 分钟，Agent 2（二月份发布）可以运行 20 分钟，而 Agent 3 可以运行 200 分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We so Agent 3 we measure that very closely and we measure that in real tasks from real users. So we're not doing benchmarking. We're actually doing AB tests and we're looking at the data that how users are successful or not. For us, the absolute sign of success is you made an app and you published it. Because when you publish it, you're paying extra money. You're saying this app is economically useful. I'm going to publish it. So that's as clear-cut as possible. And so what we're seeing is in agent one, the agent could run for 2 minutes and then perhaps struggle. Agent two came out in February, it ran for 20 minutes. Agent 3, 200 minutes.</p>
</details>

>> 200 分钟。有些用户甚至把它推到了 12 小时。在两三个小时的时间线上，它的表现好得惊人。除了模型本身，主要的创新是一个验证循环。我记得读过 Nvidia 的一篇研究论文，他们发现如果在循环中加入一个验证器，就能让 DeepSeek 模型运行 20 分钟并生成优化的 GPU 内核。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">200. Some users are pushing it to like 12 hours and things like that. I'm less confident that it is as good when it goes to these stratospheres, but at like 2-3 hours timeline, it is really insanely good. And the main innovation outside of the models is a verification loop. Actually, I remember reading a research paper from Nvidia. So what Nvidia did is they're trying to write GPU kernels using DeepSeek and what they found is that if we add a verifier in the loop if we can run the kernel and verify it's working we're able to run DeepSeek for like 20 minutes and it was generating actually optimized kernels.</p>
</details>

>> 所以我们意识到，要将代理的运行时间推到 200、300 分钟，你需要在循环中加入一个验证器。这就是为什么我们花时间创建脚手架，让代理可以启动浏览器进行测试。这是一个多代理系统：一个代理工作 20 分钟，然后另一个代理启动浏览器测试前一个代理的工作。如果发现 bug，它会开启一个新的轨迹，总结之前 20 分钟的工作，并把这个总结和发现的 bug 作为新轨迹的提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I was like, okay, the next thing for us obviously as an agent lab or applier company. We're not doing the foundation model stuff, but we're doing a lot of research on top of that. And so, okay, we know that agents can run for 10-20 minutes now or LLMs can stay coherent for longer, but for you to push them to 200, 300 minutes, you need a verifier in the loop. So, that's why we spend all our time creating scaffolds to make it so that the agent can spin up a browser and do computer use style testing. So once you put that in the middle, what's happening is it works for 20 minutes, spin up another agent, spins up a browser, tests the work of the previous agent. So it's a multi-agent system and if it founds a bug it starts a new trajectory and says okay good work let's summarize what you did the last 20 minutes.</p>
</details>

>> 就像一场马拉松或接力赛。只要每一步都正确完成，你就可以无限地进行下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's like setting up a marathon or like a relay race. As long as as long as each step is done properly you could do in sort of an infinite number of steps.</p>
</details>

>> 没错。你总是可以把上一步压缩成一段话，作为下一个代理的提示。这是一个代理提示下一个代理的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. You can always compress the previous step into a paragraph. And that becomes a prompt. So it's an agent prompting the next agent.</p>
</details>

### AGI 辩论：我们走对路了吗？

>> 我们似乎正在触及 AI 的圣杯——机器的通用推理能力。一个关键点是，强化学习要起作用，问题陈述必须有一个明确且可验证的答案。这在数学、物理、化学和大部分编程领域是成立的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you know we're kind of getting into here kind of the holy grail of AI which is sort of generalized reasoning by the machine. The key thing there though for for RL to work for LLMs to reason the key is that it be a problem statement that there is a defined and verifiable answer. That's right. Is that right? And so and that for sure includes math. That for sure includes physics for sure includes chemistry. For sure includes large areas of code.</p>
</details>

>> 是的，绝对如此。我们正在看到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. Absolutely. And I think that's what we're saying.</p>
</details>

>> 这还包括生物学，比如蛋白质组学，还有机器人学的某些领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bio, like we're seeing with a protein. Genomic. Yeah. Okay. Right. Yeah. Things like that. I think some some areas of robotics, right? There's a clear outcome, right?</p>
</details>

>> 但在那些更“软”的领域，比如法律和医疗保健，进展就没那么快了，因为它们的答案不那么具体，不像代码和数学那样非黑即白。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the first two do not work very well just yet. Like law and healthcare they're still a little too squishy, a little too soft. It's unlike math or code. So I would say the softer domains meaning like domains in which it's harder or even impossible to actually verify correctness of result in a sort of a deterministic factual grounded, non-controversial way.</p>
</details>

>> 所以关键变量是问题的“具体性”，而不是问题的“难度”。在任何有人类努力且存在可验证答案的领域，我们都应该期待极快的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. So sort of the more concrete the problem, like it's the concreteness of the problem that is the key variable not the difficulty of the problem. Would that be a way to think about it? In any domain of human effort in which there's a verifiable answer we should expect extremely rapid progress.</p>
</details>

>> 我认为在编程领域，我们正在飞速发展。到明年，我们认为你将能够同时启动多个代理。一个代理负责规划新功能，另一个负责重构数据库，你可以同时运行 5 到 10 个代理。一个外行将能达到今天谷歌高级软件工程师的水平。这很快就会发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we're ripping on coding. I think it's going to be like what we're working on with agent four right now is by next year we think you're going to be sitting in front of Replit and you're shooting off multiple agents at a time. You're like planning a new feature. Um so I want social network on top of my storefront and another one is like hey um refactor the database. And you're running parallel agents. So, you have five, 10 agents kind of working in the background and they're merging the code and taking care of all of that. I think the lay person will be as good as what a senior software engineer that works at Google is today. So I think that's happening very soon.</p>
</details>

>> 但在其他领域，比如医疗保健或创意写作，我没有看到同样迅速的进步。代码和数学可能会一飞冲天，但其他领域未必。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I don't see them... my experience between as a sort of a, on the let's say healthcare side or more, write me an essay side or more creative side haven't seen as much of a rapid improvement as what we're seeing in code. So I think code is going to go to the moon. Math is probably as well some scientific domains bio things like that those are going to move really fast.</p>
</details>

>> 这就产生了一种奇怪的动态。我们惊叹于这项技术的不可思议和飞速发展，但同时又感到失望，觉得它还不够快，甚至可能要停滞了。我们既应该极度兴奋，又感觉像世界末日。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So there's this weird dynamic. We have this in the office here a lot and I also have this with the leading entrepreneurs a lot which is this thing of like, wow this is the most amazing technology ever and it's moving really fast and yet we're still like really disappointed and like it's not moving fast enough and like it's like maybe right on the verge of stalling out. And we should both be like hyper excited but also on the verge of like slitting our wrists because the gravy train is coming to an end, right?</p>
</details>

>> 但现在有一个对 **AGI**（Artificial General Intelligence: 通用人工智能，指拥有与人类同等或更高智慧，能理解、学习和应用其智能来解决任何问题的机器智能）的巨大赌注。整个美国经济都在赌 AGI。所以，我们是否在通往 AGI 的正确轨道上，是一个至关重要的问题。有些迹象表明我们可能不在，因为我们没有看到显著的跨领域迁移学习。如果我们在代码方面变得更强，并不意味着我们在通用推理上自动变强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there's a huge bet on AGI, right? Like whether it's the foundation models, I think now the entire US economy is sort of a bet on AGI and there are crucial questions to ask whether are we on track to AGI or not because there are some ways that I can tell you it doesn't seem like we're on track to AGI because there doesn't seem to be transfer learning across these domains that are of significance right so if we get a lot better at code we're not immediately getting better at like generalized reasoning.</p>
</details>

>> 伊尔亚·苏茨克维（Ilya Sutskever）提出了一个具体的论点，即我们正在耗尽训练数据。这就像化石燃料论。我们已经从互联网上抓取了几乎所有数据。生成新数据又困难又昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know Ilya Sutskever makes a specific form of this argument which is basically like we're just literally running out of training data. It's a fossil fuel argument right like if we slurped all the training fundamentally we've slurped all the data off the internet that is where almost all the data is at this point. There's a little bit more data that's in like private dark pools somewhere that we're going to go get but we have it all and then we're in this business now trying to generate new data but generating new data is hard and expensive compared to just like slurping things off the internet.</p>
</details>

>> 但说到迁移学习，我的回答是：你见过人类吗？有多少人能做到迁移学习？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Having said that, you mentioned transfer learning. So transfer learning is the ability of the machine to be an expert in one domain and then generalize that into another domain. My answer to that is like have you met people? And how many people do you know are able to do transfer learning?</p>
</details>

>> 不多。恰恰相反，一个人在某个领域越是专家，就越容易有盲点。比如那些公共知识分子，一个经济学专家在电视上谈论政治，却对政治一无所知。就像保罗·克鲁格曼（Paul Krugman）说互联网不会比传真机更重要。他是个杰出的经济学家，但他根本不懂计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not many. Right. Well because there's quite the opposite actually. The nerdier they are in a certain domain the kind of often they have blind spots. This is a well-known thing among like for example public intellectuals. So you get these people who show up on TV and they're experts and what happens is they're like an expert in economics right and then they show up on TV and they talk about politics and they don't know anything about politics. You know, this is the Paul Krugman talking about how the internet's going to be no more significant than the fax machine. He's a brilliant economist. He has no idea how a computer works.</p>
</details>

>> 爱因斯坦是我最喜欢的例子。他是一位杰出的物理学家，但在政治上，他听起来就像一个在宿舍里的本科生疯子。他的物理学知识没有迁移到政治领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Einstein's like actually my favorite example. I think you'd agree Einstein was a brilliant physicist. He was like a Stalinist. He was a socialist and he was a Stalinist. Once he got into politics, he was just like totally loopy. There was no transfer learning from physics into politics.</p>
</details>

>> 所以从某种意义上说，我们可能已经达到了人类水平的 AI。我们理想化的 AGI 目标，可能已经远远超出了人类的能力，以至于与人类比较不再有意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in a way the argument you're making is like we maybe already have human level AI. I mean perhaps the definition of AGI is something totally different is like above human level that something that totally generalizes across domains. We've idealized a goal that may be idealized in a way that it's so far beyond what people can do that it's no longer a relevant comparison to people.</p>
</details>

>> AI 领域一直存在一个现象：AI 的定义永远是机器还做不到的下一件事。很长一段时间，AI 的定义是“能在国际象棋上战胜人类”。当它做到了，那就不再是 AI，而是“计算机象棋”了。图灵测试也是如此，80 年来它一直是圣杯，我们早已轻松通过，却没人庆祝，没人关心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's also this well-known phenomenon in AI which is the definition of AI is always the next thing that the machine can't do. And so like the definition for of AI for a long time was like can it beat humans at chess. And then the minute it could beat humans at chess that was no longer AI that was just like boring computer chess. The Turing test was the test and then we passed it and nobody, there was no celebration. For 80 years the Turing test, I mean they made a movie about it, that was the thing and like we blew right through it and nobody even registered it. Nobody cares.</p>
</details>

### “足够好”的陷阱与未来展望

>> 我开始思考，也许我们不需要真正的 AGI。我们可以实现“功能性 AGI”（Functional AGI），也就是收集世界上所有有价值的经济活动数据，然后在上面训练一个 LLM。我们可以逐个行业地去实现自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I started thinking about this idea of like it doesn't matter whether it's truly AGI. We can get to like functional AGI and what functional AGI is is just yeah collect data on every useful economic activity in the world today and train an LLM on top of that or train the same foundation model on top of that and we'll go we'll target every sector economy and you can automate a big part of labor that way. So I think we're on that track for sure.</p>
</details>

>> 在 GPT-5 出来后，你发推说你感觉到了“收益递减”。你期待什么？我们需要另一次突破才能回到原来的增长速度吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You tweeted after GPT-5 came out that you were feeling the diminishing returns. What were you expecting and what needs to be done? Do we need another breakthrough to get back to the pace of growth or what are your thoughts there?</p>
</details>

>> 我的感觉是，GPT-5 在可验证的领域变得更好了，但在其他方面，尤其是在更人性化的方面，感觉没有太大提升，甚至有所倒退。它感觉更像一个机器人，非常理性地思考一切。从 GPT-2 到 3，再到 4，你能感觉到它越来越人性化，更能理解世界。但从 4 到 5，我没有感觉到它成为一个更好的“整体存在”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My feeling is that GPT-5 got good at verifiable domains. It didn't feel that much better at anything else. The more human angle of it. It felt like it regressed. It felt a lot more robotic, you know, very in its head kind of trying to think through everything. And so I would have just expected like when we went from GPT-2 to 3, it was clear it was getting a lot more human. It was a lot closer to our experience. You can feel like it's actually, it gets me. Similarly 3 to 4. 4 to 5 didn't feel like it was a better overall being as it were.</p>
</details>

>> 我喜欢问模型一些非常有争议性的问题，看它能否像解决编程问题一样，理性地思考这些问题。比如，世贸中心 7 号楼发生了什么？或者新冠病毒的起源是什么？在这些问题上，我没有看到任何进展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I like to ask models like very controversial things. Can it reason through, I don't know how deep we want to go here but like what happened with World Trade 7, right? It's an interesting question. Can it think through controversial questions in the same way that it can go think through a coding problem? And there hasn't been any movement there. COVID, right, like the origins of COVID. You go dig up GPT-4 or other models and go to GPT-5, you're not going to find that much difference of okay, let's reason together. Let's try to figure out what was the origins of COVID because it's still an unanswered question, and I don't see them making progress in that.</p>
</details>

>> 我对它的用法可能不同。我的主要用例是把它当作一个“万能博士”来用，让它给我解释各种事情。比如，当一个发达经济体对原材料或成品征收关税时，到底是谁在买单？消费者？进口商？出口商？还是生产商？这是一个非常复杂的问题。我发现，对于这类问题，它表现出色。它能从网上获取信息，综合整理，生成一份 30-40 页、完全连贯、世界一流的报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I use it differently. My main use case actually is sort of PhD and everything at my beck and call. And so I'm trying to get it to explain things to me more than I'm trying to have conversations with it. When an advanced economy puts a tariff on a raw material or on a finished good, like who pays? You know, is it the consumer, is it the importer, is it the exporter or is it the producer? And this is actually a very complicated question. It's a big thing that economists study a lot. And it's just like, okay who pays? And what I found like for that kind of thing is it's outstanding at sort of going out of the web getting information synthesizing it. It gives me a synthesized 20, 30, 40 pages... basically tops out 40 pages of PDF. But it's completely coherent and as far as I can tell for everything I've cross-checked, completely like world class.</p>
</details>

>> 我对真正的 AGI 突破持悲观态度，因为我们现在构建的东西已经非常有用且具有巨大的经济价值了。这就像“足够好”是“更好”的敌人。我们可能陷入了一个**局部最优**（Local Maximum: 在优化问题中，一个解在它的邻域内是最好的，但并非全局最优解）的陷阱。因为它对于如此多的经济生产活动已经足够好，系统内部创造通用解决方案的压力就被缓解了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm kind of bearish on true AGI breakthrough because what we built is so useful and economically valuable. Good enough is the enemy. There's like a local maximum trap. We're in a local maximum trap where it's because it's good enough for so much economically productive work. It relieves the pressure in the system to create the generalized answer.</p>
</details>

>> 是的。然后你会有像理查德·萨顿（Richard Sutton）这样的“怪人”还在尝试走那条路，也许他们会成功。但目前，巨大的优化能量都集中在我们正在攀爬的这个局部最高点上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. And then you have the weirdos like Rich Sutton and others that are still trying to go down that path and maybe they'll succeed, right? But there's enormous optimization energy behind the current thing that we're hill climbing on this like local maximum.</p>
</details>

### Amjad Masad 的编程启蒙

>> 让我们聊聊你吧。你是如何从出生到来到硅谷的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's spend our remaining minutes. Let's talk about you. So, how did you get from being born to being in Silicon Valley?</p>
</details>

>> 我很小就接触了电脑。我出生在约旦安曼。不知为何，我父亲，当时只是一名政府工程师，就认定电脑很重要。他钱不多，但还是贷款买了一台电脑。那是我家附近的第一台电脑。我最早的记忆之一，就是六岁时看着父亲打开这台机器的包装，翻开巨大的手册，笨拙地敲着 `cd`、`ls`、`mkdir` 这些命令。我就站在他身后看着，看着机器响应他的指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got introduced to computers very, very early on. I was born in Amman, Jordan. And for whatever reason, my dad who was just a government engineer at the time decided that computers were important and he didn't have a lot of money, took out a loan, bought a computer. It was the first computer in our neighborhood. First computer of anyone I know. And one of my earliest memories I was 6 years old just watching my dad unpack this machine and sort of open up this huge manual and kind of finger type CD, LS, MKDIR and like I would be behind his shoulder and just like watching him type these commands and seeing the sort of machine kind of respond and do exactly what he's asked it to do.</p>
</details>

>> 那是 1993 年，是一台 IBM PC，运行的是 DOS 系统，还没有 Windows。后来我们买了 Windows 的磁盘，但当时上面没什么有趣的东西，所以我大部分时间都在 DOS 里写批处理文件、玩游戏。直到 Visual Basic 出现，我才开始制作真正的软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was an IBM as far as I remember. It was IBM PC. What year was this? 1993. So, it's DOS. So, did it have Windows at that point? No, it didn't have Windows. But it wasn't until Visual Basic that I started. So like after Windows 95 that I started making real software, right?</p>
</details>

>> 我当时是个游戏迷，经常去网吧玩《反恐精英》（Counter-Strike）。我发现那些网吧完全没有用软件来管理业务，都是靠人跑来跑去记账。我问他们为什么不用软件，他们说不会做。于是，当时大概 12 岁的我，花了两三年时间开发了一套网吧管理软件，然后成功地卖了出去，赚了很多钱。我记得麦当劳刚在约旦开业时，我请了全班同学去吃，那在当时非常昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I used to be a huge gamer. So I used to go to these LAN gaming cafes and play Counter-Strike and I would go there and the whole thing is full of computers but they don't use any software to run their business. It was just like people running around just like writing down your machine number, how much time you spend on it and how much did you pay. And I asked him like why don't you just build a piece of software that allows me to log in and have a timer or whatever. And he was like yeah we don't know how to do that. And I was like okay I think I know how to do that. So I spent, I was like 12 or something like that. I spent like 2 years building that and then went out and tried to sell it and was able to sell it and was making so much money. I remember McDonald's opened in Jordan around the time when I was 13-14. I took my entire class to McDonald's. It was very expensive, but I was balling with all this money.</p>
</details>

### Replit 的诞生与硅谷之梦

>> 上大学时，我不想学计算机科学，因为我觉得编程很快就会被自动化。我当时想，如果 AI 能写代码，那我应该做什么？总得有人来制造和维护电脑吧。所以我去学了计算机工程。但后来我重新发现了对编程的热爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it came time to go to college, I didn't want to go to computer science because I felt like coding is on its way to get automated. I remember using these wizards. I was okay if AI can do the code what should I do? Well someone needs to build and maintain the computers and so I went to computer engineering and did that for a while but then rediscovered my love for programming.</p>
</details>

>> 当时学习不同的编程语言非常困难。我没有笔记本电脑，每次去机房都要下载几个G的软件，配置半天，然后才能写几行代码。当时已经是 2008 年，有了 Google Docs 和 Gmail，我觉得一切都应该在网上进行。为什么没有一个在线的开发环境呢？我觉得自己就像在地上捡到了 100 美元，这么明显的想法居然没人做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then I found it incredibly difficult to just like learn different programming languages. I didn't have a laptop at the time. And so every time I go to wanting to learn Python or Java, I would go to the computer lab, download gigabytes of software, try to set it up, type a little bit of code, try to run it. I was like, man, this is so primitive. Like at the time it was 2008 something like that. We had Google Docs, we had Gmail. I thought the web is the ultimate software platform. Everything should go on the web. Okay, who's building an online development environment, right? And no one. It felt like I found like $100 bill on the floor. Surely someone should be building this, but no one was building this.</p>
</details>

>> 于是我开始自己动手。当时 Mozilla 有一个研究项目，可以将 C/C++ 编译成 JavaScript。我是世界上第一个利用这个技术将 CPython 编译成 JavaScript 的人，从而让 Python 能在浏览器里运行。接着是 Ruby、Lua……Replit 的想法就这样诞生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I was like, okay, I'll try to build it. It took a breakthrough at the time. Mozilla had a research project that allowed you to compile different programming languages like C, C++ into JavaScript. And for the browser to be able to run something like Python, I needed to compile CPython to JavaScript. So I was the first to do it in the world. So built and contributed to that project and we compiled Python into JavaScript and I was like okay we did it for Python let's do it for Ruby let's do it for Lua and that's how the emergence of the idea for Replit came.</p>
</details>

>> 我把我的项目开源了，结果在 Hacker News 上火了。当时正值 MOOC（大规模开放在线课程）时代，Codecademy 等网站出现了，他们大量使用了我开源的软件。他们联系我想雇佣我，但我拒绝了，因为我想创办 Replit。最终，他们给了我一个无法拒绝的 offer，并帮我拿到了 O1 签证，我来到了美国。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was on GitHub at the time and my standard thing is when I make a piece of software is open source it. And then it went viral on Hacker News and it coincided with the MOOC era. So massively online courses, Udacity was coming online, Coursera and most famously Codecademy. So, Codecademy was the first kind of website that allowed you to code in the browser interactively and learn how to code. And they built a lot of it on my software that I was open sourcing all the way from Jordan. And so, they reached out to me. They're like, "Hey, would like to hire you." I was like, "I'm not interested. I want to start a startup. I want to start this thing called Replit." In the end, they gave me an offer I can't refuse. And they got me an O1 visa. Came to the United States.</p>
</details>

### 一次大胆的“黑客”行为

>> 在学校时，我因为缺勤太多而挂科。我所有的朋友都毕业了，而我已经在大学待了六年，感到非常沮丧。于是我萌生了一个念头：我能不能修改我的成绩？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In school they kept failing me for attendance. You know, so I would get A's, but I just didn't show up and so they would fail me. And so I felt it was incredibly unfair. And all my friends were graduating now. This year was like 2011. I've been like for 6 years in college. And I was like incredibly depressed. I really wanted to be in Silicon Valley. And so I was like, "Oh, what if I changed my grades?"</p>
</details>

>> 我在父母家的地下室里，实行“多相睡眠”，花了两个星期疯狂地试图黑进学校的数据库。最终，我找到了一个 **SQL 注入**（SQL Injection: 一种常见的网络攻击手段，攻击者通过在输入字段中注入恶意的 SQL 代码来操纵数据库）漏洞。为了测试，我先拿我邻居做了“小白鼠”，成功修改了他的成绩。然后我为自己修改了成绩，顺利地参加了毕业典礼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The university database. And so I went into my parents' basement and implemented the polyphasic sleep. I spent two weeks just going mad like trying to hack into the university database and finally I found a way. I found a SQL injection somewhere on the site. I went to my neighbor who's going to the same school. I said, "Hey, I have this way to change grades. Would you want to be my guinea pig?" So we went and changed his grades. And then I just, you know, did it for myself. Changed the grades and went and pulled my transcripts and sure enough it actually changed. Went and bought the gown, went to the graduation parties.</p>
</details>

>> 但有一天，学校注册处的人打电话给我，说系统瘫痪了，问题总是追溯到我的记录上，因为我的记录里同时显示“通过”和“被禁止参加期末考试”。我坦白了一切。我被带到所有学院的院长面前，我没有辩解，而是在白板上给他们上了一堂关于我如何入侵系统的技术讲座。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then one day I'm at home. I get a telephone at home rings. "Hey this is the university registration system." And he's like "Look, we're having this problem. The system's been down all day and it keeps coming back to your record. There's an anomaly in your record where you're both pass, you have a passing grade but you're also banned from that final exam." I just fess up. So, I go in and I open the door and it's the deans of all the schools. And I pull up a whiteboard and started explaining what I did and everyone was engaged. I gave them a lecture basically.</p>
</details>

>> 大学校长最终给了我第二次机会。他引用了蜘蛛侠的名言：“能力越大，责任越大。”他让我留下来帮助系统管理员加固系统安全，作为毕业的条件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And he gave me a second chance in life and I went to him and I explained the situation. He gave me a Spider-Man line at the time. was like "With great power comes great responsibility and you have a great power." And so he said well we're going to let you go but you're going to have to help the system administrators secure the system.</p>
</details>

>> 在我的毕业设计答辩上，一位院长让我现场运行我写的安全扫描器，以证明系统仍有漏洞。结果，我真的又找到了一个漏洞。原来，我成了两位院长之间权力斗争的棋子。我当场破解了另一位院长的密码，场面一度非常尴尬。但最终，我还是毕业了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one of the computer science dean came to me and he said look I need to call a favor. I want you to work with me on the final project and it's going to be around security and hacking. So I wrote a security scanner and actually my security scanner found another vulnerability in the system. And so I went to the defense and he's like you need to run this security scanner live and show that there's a vulnerability. And now I started to realize I'm a pawn in some kind of rivalry here. And his face turned red and he's like, "No, it's impossible. We secured the system. You're lying." I was like, "What should we know? Should we know your salary or your password?" So, I look up his password. It was something embarrassing. And so he gets up really angry, shakes my hand and leaves to change his password. Luckily I was able to graduate, gave them the software, they secured the system.</p>
</details>

>> 这个故事的寓意是，如果你能成功黑进学校系统并修改自己的成绩，你就配得上那个成绩，也配得上毕业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I think the moral of the story is if you can successfully hack into your school system and change your grade, you deserve the grade and you deserve to graduate.</p>
</details>

>> 我也这么认为。在 AI 时代，传统的、循规蹈矩的道路回报越来越少。现在的年轻人应该利用所有可用的工具，去发现和开创自己的道路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think so. One maybe lesson I think that is very relevant for the AI age. I think that the traditional sort of more conformist path is paying less and less dividends and I think kids coming up today should use all the tools available to be able to discover and chart their own paths cuz I feel like just listening to the traditional advice and doing the same things that people have always done is just not working out as much as we'd like.</p>
</details>