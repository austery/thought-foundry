---
author: The Pragmatic Engineer
date: '2025-11-19'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=CQmI4XKTa0U
speaker: The Pragmatic Engineer
tags:
  - non-determinism
  - software-craftsmanship
  - legacy-systems
  - agile-methodology
  - learning-loop
title: 软件工程大师 Martin Fowler 对话：AI 是自汇编语言以来最大的变革
summary: 软件工程领域的传奇人物 Martin Fowler 深入探讨了人工智能对行业的颠覆性影响。他认为，AI 带来的变革堪比从汇编语言到高级语言的飞跃，其核心在于从“确定性”到“非确定性”的根本转变。Fowler 剖析了“Vibe Coding”等新兴工作流的利弊，强调了在 AI 时代，理解遗留系统、保持学习循环以及坚持重构和敏捷等核心工程实践的重要性。他为初级和资深工程师提供了在 AI 浪潮中保持成长的宝贵建议。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
  - personal-growth-lab
people:
  - Martin Fowler
  - Kent Beck
  - Jim Odell
  - Rebecca Parsons
  - Daryl Smith
  - James Lewis
  - Grady Buch
  - Unmesh Jooshi
  - Bita
  - Steve Jagg
  - Simon Willison
  - Adam Tornhill
  - Ralph Johnson
  - John Brandt
  - Don Roberts
  - Bob Martin
  - Alistair Cockburn
  - Dave Thomas
  - Jim Highsmith
  - Jimmy Nielson
  - Daniel Kahneman
  - Robert Moses
  - Lyndon Baines Johnson
companies_orgs:
  - ThoughtWorks
  - UK Atomic Energy Authority
  - Coopers & Lybrand
  - PEK
  - Chrysler
  - Rational
  - Statsig
  - JetBrains
  - Apple
  - Linear
  - Google
  - AWS
  - Uber
  - American Express
  - Federal Reserve
  - Anthropic
  - Microsoft
  - IBM
products_models:
  - Unix
  - Fortran 4
  - ClickHouse
  - vLLM
  - Cloud Code
  - FastAPI
  - MCP
  - ReSharper
  - Visual Studio
  - Xcode
  - Swift
  - Cursor
  - Godot
  - Ruby
  - Smalltalk
  - Java
  - JavaScript
  - SQL
  - Lisp
  - COBOL
  - DynamoDB
  - PostgreSQL
media_books:
  - Agile Manifesto
  - Refactoring
  - The Pragmatic Engineer
  - ThoughtWorks Radar
  - Thinking, Fast and Slow
  - The Power Broker
status: evergreen
---
### AI 变革：堪比从汇编到高级语言的飞跃

在我整个职业生涯中，人工智能（AI）无疑是最大的一次变革。回顾整个软件开发的历史，唯一能与之相提并论的，可能就是从汇编语言到第一批高级语言的转变。这次变革最大的特点是从确定性到非确定性的转变。突然之间，你开始在一个非确定性的环境中工作，这彻底改变了一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's the biggest I think in my career. I think if we looked back at the history of software development as a whole, the comparable thing would be the shift from assembly language to the very first high-level languages. The biggest part of it is the shift from determinism to non-determinism and suddenly you're working with an environment that's non-deterministic, which completely changes.</p>
</details>

### 误入软件开发的早期生涯

我进入软件开发领域大约是在 40 年前，也就是 70 年代末、80 年代初。和许多事情一样，这纯属偶然。在学校时，我的写作成绩很差，显然不擅长写作。但我很擅长数学和物理，所以自然而然地倾向于工程领域。我对电子学很感兴趣，因为我动手能力很差，做不了任何需要力量或身体协调性的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was in the late 70s, early 80s. Like so many things, it was kind of accidental really. At school, I was clearly no good at writing because I got lousy marks for anything to do with writing. But I was quite good at mathematics and that kind of thing and physics. So, I kind of leaned towards engineering stuff and I was interested in electronics and things because the other thing is I'm hopeless with my hands. I can't do anything that requires strength or physical coordination.</p>
</details>

我尝试过修理汽车之类的工程活，但连生锈的螺母都拧不下来，简直是 hopeless。但电子学还行，因为它更多是脑力活。你只需要会用烙铁，对我来说这就足够了。然后计算机出现了，那就更简单了，连烙铁都不需要。所以我就这样慢慢进入了计算机领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, all sorts of areas of engineering and building things, you know, I've tried looking after my car and I couldn't get the rusted nuts off or anything. It was hopeless. But electronics is okay because that's all very, you know, it's more in the brain. You need to be able to handle a soldering iron, but that was about as much as I needed to do. And then computers made it even easier. I don't even need a soldering iron. So, I kind of drifted into computers in that kind of way. And that was my route into software development.</p>
</details>

上大学前，我在英国原子能管理局工作了一年，用 Fortran 4 编程。这似乎是个不错的技能。当我完成电子工程和计算机科学的混合学位后，我环顾四周，发现传统的工程工作薪水不高，地位也不怎么样，而计算机领域似乎有更多的机会。于是，我就顺理成章地进入了计算机行业，那时互联网还没兴起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before I went to university, I had a year working with the UK Atomic Energy Authority. I did some programming in Fortran 4 and it seemed like a good thing to be able to do. And then when I finished my degree, which was a mix of electronic engineering and computer science, I looked around and I thought, well, I could go into traditional engineering jobs, which weren't terribly well paid and weren't terribly high status, or I could go into computing where it looked like there was a lot more opportunity. And so I just drifted into computing. And this was before the internet took off.</p>
</details>

我的第一份工作是在一家名为 Coopers & Lybrand 的咨询公司。我所在的团队负责信息战略咨询，但我当时的工作不是这个。我是少数几个懂 Unix 的人之一，因为我在大学里学过，所以我负责维护他们用来运行一些奇怪软件的工作站，以帮助他们完成战略工作。后来，我对他们的战略工作产生了兴趣，也慢慢地参与了进去。现在回想起来，那里面有很多“江湖郎中”的成分，但嘿，那是我进入这个行业的途径，也让我很早就接触到了面向对象的思想，这在 80 年代中期是非常有用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My first job was with a consulting company, Coopers & Lybrand. We were doing advice on information strategy in the particular group I was with, although that wasn't my job. My job was I was one of the few people who knew Unix because I'd done Unix at college and so I looked after a bunch of workstations that they needed to run this weird software that they were running to help them do their strategy work. And then I got interested in what they were doing with their strategy work and kind of drifted into that. I look at it back now and think, god, that was a lot of snake oil involved. But hey, it was my route into the industry and it got me early into the world of object-oriented thinking, and that was extremely useful to get into objects in the mid-80s.</p>
</details>

### 从独立顾问到加入 ThoughtWorks

在那家咨询公司，我遇到了另一位他们请来帮忙的美国人，他叫 Jim Odell。他成为了我早期职业生涯中最重要的导师和影响最大的人。他很早就采纳了信息工程，并看到了我们当时所做的一些想法中的闪光点。他是一位独立的顾问和教师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While I was at that consulting company, I met another guy that they had brought in to help them work with this kind of area, an American guy who became really the biggest mentor and influence upon my early career. His name is Jim Odell and he had been an early adopter of information engineering and had worked in that area. He saw the good parts of these ideas that these folks were doing and he was an independent consultant and a teacher.</p>
</details>

在 Coopers & Lybrand 工作了大约两年后，我跳槽到了一家名为 PEK 的“疯狂”小公司。我们在英国办公室总共只有四个人，而这已经是公司最大的办公室了。在见识了大公司的疯狂之后，我又体验了小公司的疯狂。两年后，我决定成为一名独立顾问，这很大程度上得益于 Jim Odell，他给了我很多工作机会。我记得离开 PEK 时心想：“就是它了，独立生活适合我，我再也不为任何公司工作了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I left Coopers and Lybrand after about a couple of years to actually join this the crazy company which is called PEK. I was with them for a couple of years. It was a small company. There was a grand total of four of us in the UK office and that was the largest office in the company. Having seen a big company's craziness, I then saw a small company's craziness. I did that for a couple of years and then I was in a position to go independent. I did, helped greatly by Jim Odell who fed me a lot of work basically. I remember leaving PEK and thinking that's it, independence life for me. I'm never going to work for a company again.</p>
</details>

这真是“著名遗言”。整个 90 年代，我作为独立顾问做得很好，期间写了我的第一批书。1993 年我搬到了美国，生活非常愉快。90 年代末互联网兴起，机会很多。就在那时，我遇到了一家叫 ThoughtWorks 的公司，他们当时只是我的一个客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Famous last words. Exactly. I carried on. I did well as an independent consultant throughout the '90s and during that time I wrote my first books. I moved to the United States in '93 and I was doing very, very happily. Obviously, with the rise of the internet, lots of stuff was going on in the late 90s. It was a good time and I ran into this company called ThoughtWorks and they were just a client. I would just go there and help them out.</p>
</details>

后来，我遇到了 Kent Beck，并在克莱斯勒著名的 C3 项目中与他合作，那可以说是**极限编程**（Extreme Programming: 一种旨在提高软件质量和响应客户需求变化的敏捷软件开发方法）的诞生地。我接触了面向对象和敏捷思想，然后来到了 ThoughtWorks。他们当时正在做一个对他们来说很大的项目，大约有 100 人参与，但项目显然要失败了。我帮助他们看清了问题所在，并找到了避免崩溃的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had met Kent Beck and worked with Kent at Chrysler, the famous C3 project, which is kind of the birth project of extreme programming. So I'd worked on that, seen extreme programming, seen the agile thing. So I'd got the object orientation stuff, I got the agile stuff, and then I came to ThoughtWorks. They were tackling a big project, a big project for them at the time. Still sizable, about 100 people working on the project. So, it's a sizable piece of work and it was clearly going to crash and burn. But I was able to help them both see what was going on and how to avoid crashing and burning, and they figured out how to sort of recover from the problem.</p>
</details>

之后他们邀请我加入。我想，好吧，再加入一家公司，也许就待几年。他们是我最喜欢的客户。其他客户会说：“这些想法很好，但太难实施了。”而 ThoughtWorks 会说：“这些想法很好，确实很难实施，但我们愿意试试。”而且他们通常都能成功。所以我想，既然有这样的客户，不如加入他们一段时间看看能做些什么。那是 25 年前的事了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then they invited me to join them and I thought, hey, you know, join a company again maybe for a couple of years. They're really nice people. They're my favorite client. I always thought of it as other clients would say, "These are really good ideas, but they're really hard to implement." And while Thoughtworks would say, "These are really good ideas. They're really hard to implement, but we'll give it a try." And they usually pulled it off. And so I thought, "Hey, with a client like that, I might as well join them for a little while and see what we can do." That was 25 years ago.</p>
</details>

### 首席科学家的角色与 ThoughtWorks 技术雷达

我一加入 ThoughtWorks，头衔就是“首席科学家”。重要的是要记住，我不是任何人的“首席”，也不做任何“科学”研究。这个头衔在当时很流行，用来指代那些面向公众、输出思想的人。比如，Grady Buch 当时在 Rational 公司也是首席科学家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since I joined, that was my title. Well, it's important to remember I'm chief of nobody and I don't do any science. The title was given because that title was used a fair bit around that time for some kind of public-facing ideas kind of person. If I remember correctly, Grady Buch was chief scientist at Rational at the time.</p>
</details>

这是一个听起来很浮夸、很自命不凡的头衔，但他们觉得有必要。有趣的是，当时 ThoughtWorks 的员工可以自己选择职位头衔，但我却没得选，必须接受“首席科学家”这个称号。他们不喜欢像“旗杆”、“攻城锤”或者我最喜欢的“大嘴巴”这样的头衔。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there were other people who had that title. So it was a highfalutin, very pretentious title but they felt it was necessary. It was weird because one of the things of Thoughtworks at that time was you could choose your own job title. Anybody could choose whatever job title they like. But I didn't get to choose mine. I had to take the chief scientist one. They didn't like titles like flagpole or battering ram or loudmouth which is the one I most prefer.</p>
</details>

ThoughtWorks 每六个月会发布一份**技术雷达**（ThoughtWorks Radar: 一份定期发布的技术趋势报告，评估新兴技术、工具和实践），最新一期刚刚发布。它列出了一些我们推荐采纳的技术，比如 pre-commit hooks、用于数据库分析的 ClickHouse、用于高效学习 LLM 的 vLLM 等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that ThoughtWorks does every six months, and the latest one just came out, is the ThoughtWorks Radar. This latest radar, it just came out I think a few days ago. It lists things that they recommend using: pre-commit hooks, ClickHouse for database analytics, vLLM for learning LLMs on cloud or on-prem in a really efficient way, and they're also recommending a lot of different things related for example to AI and LLMs.</p>
</details>

技术雷达的诞生源于十多年前。我们当时的前 CTO Rebecca Parsons 希望建立一个顾问委员会，让她能与项目一线保持联系。于是她创建了技术顾问委员会，我是其中一员。最初我们只是碰头讨论项目上的见闻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It started just over 10 years or so ago. Its origin was one of the things that we've really pushed at ThoughtWorks is to have technical people, practitioners, really involved at various levels of running the business. And one of the leaders of that was our former CTO, Rebecca Parsons. So Rebecca became CTO and she said I want an advisory board who will keep me connected with what's going on in projects. So she created this technology advisory board and it had a bunch of people whose job was to brief her as to what was going on. I was on the advisory board not so much for that reason but because I was very much sort of a public face of a company.</p>
</details>

在一次会议上，有人提议，我们应该把各个项目正在使用的技术及其有效性汇总起来，以便更好地交流想法。于是，“雷达”这个比喻和我们今天看到的环形结构就诞生了。我们有一个习惯，如果为内部目的做了什么，就尽量把它公开。我们一直乐于分享我们的“秘密武器”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then one of these meetings, Daryl Smith, who was actually her technical assistant at the time, he said it would be good to get some picture what kinds of technologies we're using and how useful they are and so as to better exchange ideas. So we thought this is a nice idea and he came up with this idea of the radar metaphor and the rings of the radar that we see today. And it's a habit if we do something for internal purposes, we try and just make it public. That's always been a strong part of the ThoughtWorks ethos. We talk about everything that we do and we share everything. We give away our secret sauce all the time.</p>
</details>

我们发布了第一版雷达，反响很好，于是就一直做了下来。现在的流程是，任何人都可以提交“blip”（雷达上的一个点或条目），这些提名会经过一个名为“多普勒小组”的评审。在会议上，我们会决定哪些 blip 最终能登上雷达。这是一个自下而上的过程。对我来说，这个过程有点奇特，因为我已经远离日常项目很久了，所以会上会看到一堆我完全不了解的技术，但听大家讨论很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we did that and people were very interested and so we continued doing it. Now the process has changed a bit over time. As we've grown, we've created more of a process where people can submit blips, nominate them. A blip is being a point on the radar, an entry. They will brief us a little bit about it. And then they brief the members of the what's now called the Doppler group. And then at the meeting we'll decide which of these blips to put on the radar. It's very much this bottom-up exercise. For me it's a bit weird because I'm so detached from the day-to-day these days that it's just this lineup of technologies and things I have no idea what most of them are, but it's interesting to hear about.</p>
</details>

雷达之所以感觉新鲜，是因为 ThoughtWorks 在全球有数千名技术专家，分布在各种项目中。雷达是我们从他们头脑中挖掘信息，并将其传播到内部和整个行业的一种机制。我们总是说，雷达反映的是我们自己的看法，是我们认为对我们团队和客户有价值的东西，而不是行业的金科玉律。我们也鼓励客户创建自己的雷达。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">ThoughtWorks has basically got several thousand technologists all over the world doing projects of various kinds to all sorts of different organizations. And the radar is a mechanism that we've discovered is a way of getting some of that information out of their heads and spreading it around both internally and to the industry as a whole. I really like how ThoughtWorks never said this is the thing for the industry. They said this is the thing for us. This is what we see. This is what we recommend our team members or our clients to consider. And we also encourage clients to do is to try and do their own radars.</p>
</details>

### AI 的核心变革：从确定性到非确定性

AI 是我职业生涯中最大的技术变革。能与之相提并论的，只有从汇编语言到第一代高级语言（如 COBOL 和 Fortran）的转变，那发生在我入行之前。那次转变的巨大之处在于，你不再需要深入了解硬件的内部结构、指令集和寄存器。像 Fortran 这样的高级语言，虽然相对简陋，但至少可以写条件语句和循环，让你从硬件中抽离出来，思考更抽象的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is the biggest I think for my career. The comparable thing would be the shift from assembly language to the very first high-level languages, which is before my time, when we first started coming up with COBOL and Fortran and the like. That was a big change, right? You really needed to know the internals of the hardware and the instructions. With a high-level language like Fortran, at least I can write things like conditional statements and loops. It's better than what you can do in assembly. So there's a definite shift of moving away from the hardware to thinking in terms of something a bit more abstract.</p>
</details>

而 LLM 带来的心智模型转变程度与此相当。但有趣的是，这次转变与其说是抽象层次的提升，不如说是从确定性到非确定性的根本转变。突然之间，你开始在一个非确定性的环境中工作，这彻底改变了你的思考方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's with LLMs it's a similar degree of mind shift. Although, as I've written about it, the interesting thing is the shift is not so much of an increase of a level of abstraction, although there is a bit of that. The biggest part of it is the shift from determinism to non-determinism. And suddenly you're working with an environment that's non-deterministic, which completely changes how you have to think about it.</p>
</details>

高级语言的一个关键特性是能够创建自己的抽象。你可以构建语言内部的构建块，这在面向对象和富有表现力的函数式语言（如 Lisp）中尤为重要。Lisp 有句老话：你应该先用 Lisp 创建一门自己的语言，然后用这门新语言来解决问题。这种思想适用于任何编程语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the key things about high-level languages is the ability to create your own abstractions in that language. That is particularly important as you get to things like object orientation or more expressive functional languages like Lisp. An old Lisp adage is really what you want to do is to create your own language in Lisp and then solve your problem using the language that you've created. And I think that way of thinking is a good way of thinking in any programming language.</p>
</details>

AI 在这方面有所帮助，我们可以更轻松、更流畅地构建抽象。但问题在于，我们现在面对的是这些抽象的非确定性实现。我的同事 Unmesh Jooshi 一直在探索如何利用 LLM 共同构建一个抽象，然后用这个抽象更有效地与 LLM 对话。这是一种非常有趣的思维方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI helps us a little bit in that because we can build abstractions a bit more easily, a bit more fluidly, but we have this problem of non-deterministic implementations of those abstractions. My colleague Unmesh Jooshi has been really pushing this: using the LLM to co-build an abstraction and then using the abstraction to talk more effectively to the LLM. And that I'm finding a really, really interesting way of thinking about how he's working with that.</p>
</details>

这与**领域驱动设计**（Domain-Driven Design: 一种软件开发方法，强调将软件实现与核心业务领域概念紧密结合）中的“通用语言”以及我十年前研究的**领域特定语言**（Domain-Specific Language: 一种为解决特定领域问题而设计的计算机语言）思想有异曲同工之妙。我们需要找到一种与 LLM 严谨对话的方式，从而获得更好的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has great parallels with the ideas of domain-driven design in ubiquitous languages and also some of the stuff that I was working on a decade or so ago around domain-specific languages and language workbenches. So there's some fascinating stuff around there that will be interesting to see how that plays out.</p>
</details>

这种非确定性也让我们需要借鉴其他工程领域的思维方式，比如“容差”。我的妻子是结构工程师，她总是考虑容差问题：因为木材、混凝土或钢材的属性总有变数，所以需要在数学计算之外增加多少余量。我们可能也需要这种思维：我们必须处理的非确定性的容差是多少？我们不能离边缘太近，否则就会有“桥梁坍塌”的风险，尤其是在安全领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's got some interesting parallels to other forms of engineering. Other forms of engineering you think in terms of tolerances. My wife's a structural engineer, right? She always thinks in terms of what are the tolerances? How much extra stuff do I have to do beyond what the math tells me? We need probably some of that kind of thinking ourselves. What are the tolerances of the non-determinism that we have to deal with? And realizing that we can't skate too close to the edge because otherwise we're going to have some bridges collapsing. I suspect we're going to do that particularly on the security side.</p>
</details>

### AI 带来的新工作流与挑战

AI 已经催生了一些令人兴奋的新工作流程。一个备受关注的领域是能够在几天内快速搭建原型，这在以前是无法想象的。这也被称为 **Vibe Coding**（Vibe Coding: 一种编程方式，指开发者主要依赖AI工具生成代码，而不深入审查或理解其具体实现，只要感觉“对”就行）。它让我们可以用前所未有的速度进行探索性尝试。对于一次性的探索和可抛弃的小工具来说，这非常有价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One area that has got lots of attention already is being able to knock up a prototype in a matter of days. That's just way more than you could have done previously. So, this is the vibe coding thing. It's an ability to try explorations. People can go, hey, I'm not really quite sure what to do with this, but I can spend a couple of days exploring the idea much, much more rapidly than I could have before. And so for throwaway explorations, for disposable little tools, that's a very valuable area.</p>
</details>

另一个截然不同的领域是帮助理解现有的遗留系统。我的同事们在这方面做了很多工作。基本思路是，对代码进行语义分析，将信息填充到图数据库中，然后以类似 RAG 的方式查询这个数据库。你可以问：“这部分数据会发生什么？在程序流中，哪些代码会接触到这些数据？”这种方法非常有效。事实上，我们在技术雷达中已经将“利用生成式 AI 理解遗留系统”放进了“采纳”（Adopt）环，因为我们认为，如果你在处理遗留系统，就应该使用 LLM 来帮助你理解它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On a completely opposite end of scale, one area that's really interesting is helping to understand existing legacy systems. My colleagues have put a good bit of work in this. The idea is you take the code itself, do the semantic analysis on it, populate a graph database with that kind of information, and then use that graph database in a RAG-like style. You can begin to interrogate and say, well, what happens to this piece of data? Which bits of code touch this data as it flows through the program? Incredibly effective. In fact, we put understanding of legacy systems into the adopt ring because we said if you're doing any work with legacy systems, you should be using LLMs in some way to help you understand.</p>
</details>

当然，还有一些领域我们仍在探索中。比如，如何与 LLM 一对一协作，构建高质量的软件。我们看到了一些迹象：你需要处理非常薄、非常小的代码切片；你需要把每个切片都当作一个有点不靠谱但代码产量很高的合作者提交的 PR 来对待。你不能相信它做的任何事，必须仔细审查每一行代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then there's the areas that we're still figuring out. I'm certainly seeing more interesting stuff as people try to figure out how to work with an LLM on a one-to-one basis to build decent quality software. We're seeing some definite signs of how you've got to work with very thin, rapid slices, small slices. You've got to treat every slice as a PR from a rather dodgy collaborator who's very productive in the lines of code sense of productivity. But you know, you can't trust a thing that they're doing. So, you've got to review everything very carefully.</p>
</details>

目前我们的大部分经验都来自“绿地”项目（全新项目）。但在“棕地”环境（现有项目）中，LLM 能否安全地帮助我们修改遗留代码？这仍然是一个问题。另一个悬而未决的问题是，当团队协作时会发生什么？大多数软件都是由团队构建的，未来也将如此。我们仍在探索如何在团队环境中最好地利用 AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Most of the experience we're gaining is building in a green field environment. So that leaves big questions in terms of the brownfield environment. Well, we know that LLMs can help us understand legacy code. Can they help us modify legacy code in a safe way? It's still a question. Another area that's really up in the air, both green field and brownfield, is what happens when you've got a team of people. Because most software has been built by teams and will continue to be built with teams. The question is, of course, how do we best operate with AI in the team environment? And we're still trying to figure that one out as well.</p>
</details>

### “Vibe Coding”的陷阱：牺牲学习循环

我所理解的“Vibe Coding”是指你根本不看 AI 输出的代码，或者只是出于好奇瞥一眼，但你并不真正关心，甚至可能因为不懂编程而无法关心。我的看法是，它适合探索和一次性工具，但绝不能用于任何需要长期维护的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I use the term vibe coding, I try to go back to the original term which is basically you don't look at the output code at all. Maybe, you know, take a glance at it out of curiosity, but you really don't care. And maybe you don't know what you're doing because you've got no knowledge of programming. My take on it is, I think it's good for explorations. It's good for throwaways, disposable stuff. But you don't want to be using it for anything that's going to have any long-term capability.</p>
</details>

当你进行 Vibe Coding 时，AI 可能会生成天知道是什么样的代码，通常确实如此。这些代码复杂、 convoluted，你无法对其进行微调。你基本上只能把它扔掉，然后寄希望于重新生成一个你想要调整的版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you vibe code stuff, it's going to produce god knows what, and often it really is. And you cannot then tweak it a little bit. You have to basically throw it away and hope that you can generate whatever it is you're trying to tweak.</p>
</details>

更重要的是，当你这样使用 Vibe Coding 时，你实际上移除了一个非常重要的环节：学习循环。如果你不看输出，你就学不到东西。我们工作的很大一部分就是提出想法，在计算机上尝试，并在我们的思考和计算机的反馈之间不断来回。我们一直在经历这个学习循环。你无法跳过这个过程。而 LLM 让你直接略过了这一切，你没有在学习。当你没有学习时，就意味着你不知道如何调整、修改和演进你生产出来的东西。你唯一能做的就是“从轨道上用核弹摧毁它”，然后重新开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing of course that's the difference, and this is the heart of the article that Unmesh wrote, is when you're using vibe coding in this kind of way, you're actually removing a very important part of something, which is the learning loop. If you're not looking at the output, you're not learning. And the thing is that so much of what we do is we come up with ideas, we try them out on the computer with this constant back and forth between what the computer does with what we're thinking. We're constantly going through that learning loop. You cannot shortcut that process. And what LLMs do, they just kind of skim over all of that and you're not learning. And when you're not learning, that means that when you produce something, you don't know how to tweak it and modify it and evolve it and grow it. All you can do is nuke it from orbit and start again.</p>
</details>

### AI 时代重构的价值

我第一次接触到**重构**（Refactoring: 在不改变代码外在行为的前提下，对代码做出修改，以改进其内部结构的过程）是在克莱斯勒和 Kent Beck 一起工作时。他向我展示了如何通过一系列微小的步骤来重构 Smalltalk 代码。每一步都小到不可思议，但正因为小，所以不会出错，而且可以完美地组合起来，完成巨大的改造。这让我大开眼界。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I first came across refactoring at Chrysler when I was working with Kent Beck. I remember in my hotel room, him showing me how he would refactor some Smalltalk code. What he was doing was taking these tiny little steps. And I was just astonished at how small each step was, but how because they were small, they didn't go wrong and they would compose beautifully and you could do a huge amount with this sequence of little steps. And that really blew my mind away.</p>
</details>

当时 Kent 的精力主要放在写第一本极限编程的书上，没空写重构的书，所以我想，那我就来写吧。我开始在我每次重构时做详细的笔记，记录下每个步骤的机制，并为每个步骤创建一个例子。最终，这些笔记汇集成了《重构》第一版。我选择了 Java 而不是 Smalltalk，因为当时 Java 是未来的语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Kent was at the time his energy was to write the first extreme programming book. He didn't have the energy to write a refactoring book. So I thought, well, I'm going to do it then. I started by, you know, whenever I was refactoring something, I would write careful notes. And partly because I needed it for myself. How do I extract a method so as I don't screw it up? And so I would write careful notes on each one. And then each of those turned into the mechanics in the refactoring book. And I did it in Java, not in Smalltalk because Smalltalk was dying sadly. And Java was the language of the future in the late 90s.</p>
</details>

20 年后，我决定更新第二版，主要是因为用 90 年代末的 Java 写的书显得有些过时了。我最终选择了 JavaScript，因为它能覆盖更广的读者，并且能以一种不那么以面向对象为中心的方式来描述事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">20 years later, I decided to do a second edition. When you've got a book that's written in late 1990s Java, it shows its age a bit. I decided to switch to JavaScript. I felt it would reach a broader audience that way and also allow a less object-oriented centered way of describing things. So instead of extract method, it's extract function.</p>
</details>

展望未来，随着 AI 工具生成越来越多、越来越快的代码，重构将变得越来越重要。因为如果你要产出一堆质量可疑但能运行的代码，那么重构就是一种在保持其功能的同时改善其状态的方法。目前的工具还不能自行重构，但重构的思维方式——将变更分解为可轻松组合的微小步骤——是关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking ahead with AI tools, they generate a lot more code a lot faster. I can certainly expect refactoring to be increasingly important. Because again, if you're going to produce a lot of code of questionable quality, but it works, then refactoring is a way to get it into a better state while keeping it working. These tools at the moment definitely cannot refactor on their own. But definitely the refactoring mindset and thinking how do I make changes by basically boiling them down to really small steps that compose easily. That's really the trick of it.</p>
</details>

### 设计模式与敏捷宣言的演变

设计模式的初衷是创造一套词汇，以便我们能更有效地讨论某些情境。就像医学界用希腊语和拉丁语术语来精确描述复杂事物一样。它们帮助我们更有效地沟通，而不是让你看能把多少模式塞进系统里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What you're doing with patterns is you're trying to create a vocabulary to talk more effectively about these kind of situations. I mean it's just like in the medical world they come up with this jargon in Greek and Latin to more precisely talk about things that are quite involved and complex. I certainly feel that they do help communication flow more effectively once people are familiar with that terminology.</p>
</details>

设计模式之所以不再那么流行，一个可能的原因是云服务的兴起。像 AWS 这样的云提供商提供了大量架构良好的构建块（如 DynamoDB 或托管的 PostgreSQL），你不需要过多担心数据存储等底层架构问题，因为这些模块已经帮你解决了。架构的重要性似乎被这些现成的、精心设计的构建块削弱了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One interesting thing that happened around the 2010s is the cloud started to get bigger. AWS, Google Cloud, and a lot of companies started to build similar things. These hyperscalers, the cloud providers, they built all these services that are really well architected. You don't need to worry too much about your data storage; you just use, let's say, DynamoDB or a managed PostgreSQL service. So suddenly architecture is not all that important because these blocks take care of it for you. You have these building blocks. His observation was maybe architecture was solved with a well-architectured building block that you could use and you didn't have to reinvent the wheel.</p>
</details>

关于《敏捷宣言》，它的起源可以追溯到宣言发布前一年由 Kent Beck 组织的一次极限编程聚会。我们在会上讨论，极限编程应该是一个狭义的概念，还是一个更广泛的、包含类似原则的框架。Kent 倾向于前者。这引发了一个问题：我们该如何处理这个更广泛的概念，以及它与 Scrum 等其他方法的重叠之处？这最终促成了后来在犹他州雪鸟滑雪场的那次著名会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The origin of the Agile Manifesto, I always feel, was actually a meeting we had that Kent ran about a year before. It was a gathering of extreme programming folks. Part of the discussion we had was should extreme programming be the relatively narrow thing that Kent was describing, or should it be something more broad? Kent decided he wanted something more concrete and narrow. And then the question is, well what do we do with this broader thing and how it overlaps with things like what the Scrum people were doing? That's what led to the idea of getting together people from these different groups and we had the meeting in Utah.</p>
</details>

我对会议本身的记忆已经很模糊了，但我清楚地记得 Bob Martin 坚持要搞一个“宣言”。我当时的想法是，写宣言这个行为本身很有趣，能让我们更好地理解彼此，但宣言本身会被人忽略。结果它产生了巨大的影响，这让我很震惊。当然，它也经常被误用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of the meeting itself, I actually don't remember very much of it. I do remember Bob Martin being the one who was really insistent on, "I want to make a manifesto." And me thinking, oh well, yeah we can do that. The manifesto itself will be completely useless and ignored, of course, but the exercise of writing it will be interesting. And then of course the fact that it made a bit of an impact was kind of a shock. And then of course it gets misused most of the time.</p>
</details>

敏捷最大的成功在于，它让我们能够以更接近我们理想的方式去工作。在 2000 年，我们想在项目中投入精力编写测试、实现自动化构建、进行小步迭代，但客户完全不接受。他们想要的是五年的宏伟蓝图。而现在，客户在更大程度上允许我们按照我们认为正确的方式工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The great thing about agile is that we can actually go into organizations and operate much closer to the way that we'd like to be able to do. Our clients will let us work the way we want to to a much greater extent than we were able to do back in 2000. And so that is the success.</p>
</details>

至于 AI 对敏捷的影响，我仍然认为以小切片的方式构建，并由人工审查，是正确的方向。AI 或许能让我们更快地完成这些切片，或者在每个切片中做更多事情。但我宁愿选择更小、更频繁的切片，而不是在每个切片里塞更多东西。提高频率，缩短周期时间，这才是我们获得最大收益的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I still feel that building things in terms of small slices with humans reviewing it is still the way to bet. What AI hopefully will allow us to do is to be able to do those slices faster and maybe do a bit more in each slice, but I'd rather get smaller, more frequent slices than more stuff in each slice. Improving the frequency is usually what I think we need to do and just cycle out those steps more rapidly. That's where I felt we've had our biggest gains.</p>
</details>

### 在 AI 时代保持学习与成长

如今我学习的主要方式是与那些在我网站上发表文章的人合作。我不是写这些东西的最佳人选，因为我早已不从事一线的生产工作。通过深度参与编辑过程，我能从那些真正在实践的人身上学到东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the main way I learn these days is by working with people who are writing articles that are going onto my site. My primary effort these days is getting good articles onto my site and my view is that I'm not the best person to write this stuff because I'm not doing the day-to-day production work. So it's better for me to work with people who actually are doing this kind of work and help them get their ideas and their lessons expressed. I'm learning through the process of working with people to write their ideas down.</p>
</details>

此外，我会阅读一些我认为可靠的信源，比如 Simon Willison 的博客，他的内容非常棒。我也会关注 Kent Beck 这样的人在做什么。在筛选信息时，我总是寻找一种“不确定性”。当有人告诉我他们知道确切答案时，我通常会更加怀疑。我更信任那些会说“这是我目前的理解，但情况还不明朗”的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And of course, reading from where I feel are some of the better sources. Simon Willison's stuff is superb. I keep an eye on what he's doing all the time. I'm always interested in what folks like Kent are up to. Part of what I'm always looking for is a lack of certainty. I think that's a good thing. When people tell me, "Oh, I know the answer to this," I'm usually a good bit more suspicious. And I'm much more conscious of when people say, "This is what I understand at the moment, but it's fairly unclear."</p>
</details>

对于初级工程师的建议，答案和以往一样：找到愿意指导你的优秀资深工程师。一个经验丰富的导师价值千金。你可以使用 AI 工具，但要记住它很可能会对你撒谎。要不断追问它：“你为什么给我这个建议？你的信息来源是什么？”通过探究其背景和逻辑，你能更好地理解它给出的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For junior software engineers, the answer is what it's always been: find some good senior engineers who will mentor you, because that's the best way that you're going to learn this stuff. A good experienced mentor is worth their weight in gold. The AI can be handy, but always remember it's gullible and it's likely to lie to you. So be probing on asking it, "Okay, why are you giving me this advice? What are your sources? What's leading you to say this?" By probing that, you can get a better understanding of where they're coming from.</p>
</details>

### 对科技行业的看法与核心技能

从长远来看，我对科技行业持积极态度，因为软件能做的事情还有很多。但目前我们正处在一个奇怪的阶段。真正冲击我们的不是 AI，而是零利率时代的结束。这导致了大规模的裁员。我们正处在一个软件行业普遍萧条，同时又有一个 AI 泡沫并存的怪异混合状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In a broad sense, I'm positive because I still feel there's so many huge things that can be done with technology and software. But really what's happening, the most important thing that's hit us is not AI. It's the end of zero interest rates. That's the big thing that really hit us. And that's what the job losses started before AI because of that kicking in. And so we have this weird mix of no investment, pretty much depression in the software industry with an AI bubble going on. And they're both happening at the same time.</p>
</details>

我不认为 AI 会消灭软件开发。它会像从汇编到高级语言的转变一样，彻底改变这个行业，但核心技能依然存在。在我看来，成为一名优秀软件开发者的核心技能，与其说是编写代码，不如说是理解该写什么。这关乎沟通，特别是与软件用户的沟通，跨越这道鸿沟始终是最关键的沟通路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think AI is going to wipe out software development. I think it'll change it in a really manifest way like the change from assembly to high level languages did, but the core skills are still there. And the core skills of being a good software developer in my view are still, it's not so much about writing code. A lot of the skill is understanding what to write, which is communication, and particularly communication with the users of software and crossing that divide which has always been the most critical communication path.</p>
</details>

### 快问快答

**最喜欢的编程语言？**
目前是 Ruby，因为我已经非常熟悉它了。但我的挚爱无疑是 Smalltalk。90 年代用 Smalltalk 编程的乐趣是无与伦比的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the moment my favorite programming language is Ruby because I'm so familiar with it. But the one that is my love is Smalltalk without a doubt. There was nothing as much fun as programming in Smalltalk when I was able to do it in the '90s. That was such a fantastic environment.</p>
</details>

**推荐一两本书？**
一本是 Daniel Kahneman 的《思考，快与慢》。它能很好地帮你建立对数字的直觉，并识别出我们在概率和统计思维中常犯的错误。另一本是《权力掮客》（The Power Broker），一本关于 Robert Moses 的书。它深刻揭示了权力在民主社会中的运作方式，而且文笔极其出色，是学习优秀写作的典范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A book I do particularly like to recommend is Thinking, Fast and Slow by Daniel Kahneman. I like it because he does a really good job of trying to give you an intuition about numbers and spotting some of the many mistakes and fallacies we make when we're thinking in terms of probability and statistics. Another book that I'd mention is a book called The Power Broker. This is a book about a guy called Robert Moses. It's about how he rose to power, how power works in a democratic society, often not in plain sight. It's also a fascinating book because it is so well written.</p>
</details>

**推荐一款桌游？**
我会推荐一款叫《Concordia》的游戏。它规则相对抽象，不难上手，但决策过程相当丰富。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I'm going to pick something that's I think not too complicated for someone to get into that I think is still got quite a lot of richness at the moment, I think the game I'd pick out would be something called Concordia. It's fairly abstract in its nature, but it's easy to get into and it's got quite a good bit of decision making in the process.</p>
</details>