---
author: The MAD Podcast with Matt Turck
date: '2026-02-26'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=DtD0ngZ5_bU
speaker: The MAD Podcast with Matt Turck
tags:
  - formal-verification
  - mathematical-reasoning
  - lean-language
  - agi-development
  - neuro-symbolic
title: Axiom：打造 100% 正确的 AI 数学家，终结大模型幻觉
summary: 本次访谈邀请了 Axiom 创始人 Carina Hong，探讨其开发的 AI 数学家如何在普特南数学竞赛中获得满分并解决多项研究级猜想。Carina 详细介绍了基于 Lean 语言的形式化验证系统，对比了形式化与非形式化推理的差异，并分享了她从奥数选手到跨学科研究者的个人成长历程，展望了 AI 在科学发现与代码验证领域的巨大潜力。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Carina Hong
companies_orgs:
  - Axiom
  - MIT
  - Oxford
  - Stanford
  - Google DeepMind
  - OpenAI
products_models:
  - Axiom Prover
  - Lean
  - AlphaProof
  - AlphaGeometry
media_books: []
status: evergreen
---
### 数学复兴与 AGI 推理层

**Carina Hong**: 我认为我们正处于**数学复兴**的门槛上。我们要意识到，目前有许多未解决的问题，研究人员可能需要数月时间才能攻克，但我们相信这些问题对于今天的 AI 技术来说并非遥不可及。世界正在意识到我们需要**验证（Verification）**。我们可以拥有非常酷的全球化网站，但如何验证核反应堆的代码？我们的世界观是：**数学推理**是 **AGI** 真正的推理层。从数学你可以延伸到代码，从代码你可以在软件栈中运行大量的现实世界实验。这是一个美丽的愿景，让所有的理论问题都能以令人满意的方式得到解决。

<details>
<summary>Original English</summary>

**Carina Hong**: I think that we are at a threshold of mathematical renaissance which is to realize that there's so many unsolved problems that will currently take say researchers um months to to crack that we believe is not sort of out of reach for today's AI technology. The world is realizing that we need verification like you know we can have very cool like gloable websites but like how do I vibe code nuclear reactor our world view is mass reasoning is a true reasoning layer of AGI from mass you kind of get to code and from code you can run a lot of real world experiment in the software stack is a beautiful vision is for all the theoretical problems to be resolved in a satisfactory way.

</details>

**Matt Turk**: 大家好，我是来自 FirstMark 的 Matt Turk。欢迎收听 MAD 播客。今天的嘉宾是 **Axiom** 的创始人兼 CEO **Carina Hong**。Carina 是一位 24 岁的**罗德学者**，她有着非凡的个人经历：从中国的数学奥林匹克选手，到 **MIT**、**牛津大学**和**斯坦福法学院**。她在不到一年前创立了 Axiom，旨在构建一个 **AI 数学家**——一个旨在 100% 时间保持 100% 正确的系统，从而有效解决 AI **幻觉问题**。我们讨论了 Axiom 的 AI 如何在极其困难的**普特南（Putnam）数学竞赛**中获得满分，随后又自主解决了四个开放式研究猜想；为什么验证正在成为 AI 中缺失的一层；Axiom 的底层运作机制，以及这一切对 AI 未来意味着什么。请欣赏这段与 Carina Hong 的高信息量对话。

<details>
<summary>Original English</summary>

**Matt Turk**: hi I'm Matt Turk from firstark welcome to the mad podcast today my guest is Karina Hong founder and CEO of axi Karina is a 24-year-old road scholar who's had an incredible personal journey from competitive math Olympian in China to MIT, Oxford, and Stanford Law. She started Axum less than a year ago to build an AI mathematician, a system designed to be 100% correct 100% of the time, effectively solving the AI hallucination problem. We talked about how Axum's AI aced the notoriously difficult Putnham math exam and then went on to autonomously solve four open research conjectures. Why verification is becoming the missing layer in AI. how Axiom works under the hood and what this could all mean for the future of AI. Please enjoy this great high signal conversation with Kura Hong.

</details>

**Matt Turk**: 嘿，Carina，欢迎。

<details>
<summary>Original English</summary>

**Matt Turk**: Hey Karina, welcome.

</details>

**Carina Hong**: 你好，很高兴见到你。

<details>
<summary>Original English</summary>

**Carina Hong**: Hi, great to meet you.

</details>

**Matt Turk**: 你正在构建一个 AI 数学家。为什么世界需要一个 AI 数学家？

<details>
<summary>Original English</summary>

**Matt Turk**: So you are building an AI mathematician. Why does the world need an AI mathematician?

</details>

**Carina Hong**: 是的。我认为这种想法非常引人入胜：拥有无数个**数学推理智能体**进入工业社会，去解决所有的理论问题。通过解决数学问题，我们也意识到它可以解决许多其他问题，比如验证和**优化**。数学是伟大的，如果你解决了数学，你就能拥有物理学，拥有大量的逻辑和属性，并可以扩展到很多领域。世界需要更多的数学。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah. So I think that the idea where you have like infinite number of mathematical reasoning agents going out to the industrial society to solve like all the theoretical problems. I think that's incredibly compelling. I think through solving math we also realize that it can solve a lot of other problems such as verification such as optimization is actually I think that math is great and if you solve math you can have physics you can have a lot of logic and property and you can extend to a lot of things. Um the world needs more math.

</details>

### 攻克普特南竞赛与研究级猜想

**Matt Turk**: 太棒了。我们谈论的是哪种数学？是高中数学、竞赛数学，还是深奥的研究数学？

<details>
<summary>Original English</summary>

**Matt Turk**: Great. Uh and what kind of math are we talking about? Is that is that high school math? Is that competitive math or is that deep research math?

</details>

**Carina Hong**: 我认为人们通常从竞赛数学开始，因为你知道它有一个已知的解，然后你开始攀登那座无限高的数学之山。实际上有两个难度维度：一个是解法的**创造力**，另一个大致上是数学对象的**抽象程度**。比如，资格考试可能非常抽象，但解决每个问题所需的创造力可能并不高，非常标准。另一方面，**IMO（国际数学奥林匹克）**题目虽然高中生也很容易理解，不太抽象，但创造力要求极高。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah, I think people generally start with competitive math because it's kind of you know that you have like a non-solution and then you um kind of start heel climbing the infinite sort of like infinitely high mountain of math. Um there are actually two axis of difficulty. One is how creative the solution is and the other one roughly speaking is how abstract the mathematical object is. So say a qualifying exam can be incredibly um abstract but the sort of creativity required to solve each problem might not be that high might be very standard. On the other hand IMO problem while it's very sort of easy to understand even by high school students um not very abstract but it's incredibly creative.

</details>

**Matt Turk**: 你们终究是一家年轻的初创公司，但已经取得了惊人的成功。让我们先谈谈去年的**普特南竞赛**。对于非数学圈的人，请解释一下什么是普特南。

<details>
<summary>Original English</summary>

**Matt Turk**: You guys are ultimately a young startup but you've already had incredible success. So let's talk about the platinum uh last year first and maybe define what the platinum is for people that may not be in the math world.

</details>

**Carina Hong**: 没问题。我们是在 7 月中旬开始的，普特南竞赛是在 12 月，当时我们才成立四个月。普特南被视为极其困难的数学竞赛，大多数参赛者实际上得分为零。超过 50% 的人类参赛者得零分。在普特南 100 年的历史中，只有 5 个人获得过满分。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah, 100%. So we started out um in July, mid July and so Putnham uh was December and we were like a four month startup. We were like looking at Putnham as this like really hard mass competition and u most of the people actually got Daro. So over 50% of humans got zero and um I think over the 100 year history of Putnham there's only five human perfect scores. Um

</details>

**Matt Turk**: 比赛是 6 小时完成 12 道题，对吗？

<details>
<summary>Original English</summary>

**Matt Turk**: and it's you have six hours to do it and 12 questions is that

</details>

**Carina Hong**: 没错。12 道题，分两个 3 小时的时段，上午和下午。那是 12 月 6 日星期六，我们聚集在 Axiom 办公室，决定让 **Axiom Prover** 进行实时测试。这不是基准测试，我们从监考人员那里拿到试卷，直接扔给证明器，然后我们宣布获得了**满分**。

<details>
<summary>Original English</summary>

**Carina Hong**: that's right. You have you have 12 questions. You have three uh three-hour sessions. You have morning and afternoon. So yeah that's a setup. I think it was a Saturday. It was December 6 and um we all kind of gathered at the XM office and decided to put XM prover in the real-time test. So it's not a benchmark. It's uh you know we got the exam from the proctor of the of the ponam exam and then we just basically throw it to the approver and um we announce that we got a perfect score. Uh

</details>

**Matt Turk**: 所以是 12 分之 12。

<details>
<summary>Original English</summary>

**Matt Turk**: so 12 out of 12.

</details>

**Carina Hong**: 没错。在规定时间内完成了 8 道，最终完成了全部 12 道。

<details>
<summary>Original English</summary>

**Carina Hong**: That's right. Um eight within the time limit and then 12 out of 12.

</details>

**Matt Turk**: 还有你们最近解决的挑战，我想是解决了四个挑战？就在最近发生的。

<details>
<summary>Original English</summary>

**Matt Turk**: And then uh the more recent challenge that you guys solve I think you you solve four challenges. Maybe talk to that. That just happened.

</details>

**Carina Hong**: 是的。因为我们有很多数学家朋友，他们有很多非常难的研究猜想。例如，**LG Fail** 教授有四个 Fail 猜想，这是最后一个尚未被攻克的。他是以色列理工学院的教授。还有波士顿学院的代数几何学家 **Dawi Tren** 教授，他认识我们的创始数学家 **Ken Ono** 教授多年。人们开始给我们发题目，我们就把系统投入测试。大约两周前，我们宣布 Axiom Prover 解决了这四个**研究级开放问题**。这很有趣，因为它可能是第一个完全端到端解决研究猜想并实现**自验证（Self-verified）**的 AI，这意味着输出是完全验证且 100% 正确的。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah that's right. So I think that because we have like a lot of mathematician friends and they all have a lot of really hard research conjectures. So for example, professor LG fail and he has like four fail conjecture and this is the last one still standing and he's a Israeli professor at the Technon University and there are also um Dawi Tren a Boston College professor who's an algebraic geometer and he um knows actually professor Kenono who's our founding mathematician for for years and they recently met at this joint math meetings conference. So he also supplied a problem. So people start sending problems to us and then we just put the system into test and recently I think like a couple weeks ago we just announced that Axium prover solved um these four research level open problems and it's quite interesting because it's probably the first AI to solve a research conjecture completely end to end and self-verified that means the output are fully verified 100% correct

</details>

**Matt Turk**: 而且是在没有人类干预的情况下？

<details>
<summary>Original English</summary>

**Matt Turk**: and that was without uh human

</details>

**Carina Hong**: 没有人类干预，没错。

<details>
<summary>Original English</summary>

**Carina Hong**: without human intervention that's right

</details>

### AI 的“Move 37”时刻与机器证明

**Matt Turk**: 我对世界级数学非常浅显的理解是，顶尖数学家依靠高智商、深厚知识，但也依靠大量的**直觉**和一点点机缘巧合。AI 在这里扮演什么角色？

<details>
<summary>Original English</summary>

**Matt Turk**: okay my very uneducated understanding of world class level math is that a lot of the top informations today in the history ultimately operate through a combination of like you know she IQ deep knowledge and all the things but a lot of intuition and a little bit of serendipity where does that fit

</details>

**Carina Hong**: 我认为分为两部分。一部分是每十年左右发生一次的重大数学突破，这些需要非常有趣的“尤里卡时刻”、深邃的直觉和近乎运气的时刻。而许多其他问题则是熟练地、常规地应用一套标准技巧。我认为很多研究问题可以通过两者的结合来解决：一点直觉加上一步一个脚印的推导。我们正处于数学复兴的门槛，意识到有这么多未解决的问题，目前可能需要研究人员数月时间去攻克，甚至包括那些长期猜想中的技术性引理，我们相信今天的 AI 技术并非无法触及。但这需要非常复杂的系统设计和不同方法的混合使用，这就是 Axiom 正在尝试做的。

<details>
<summary>Original English</summary>

**Carina Hong**: yeah I think like kind of two parts one is there are like some really important mathematical breakthroughs that happen like you know once in a decade um or maybe perhaps more one once once in a decade for each each domain probably, but those require like very um you know interesting sort of ureka moments um deep intuitions and and um very sort of almost like lucky kind of moments. Um and there are a lot of other questions that are sort of proficiently um routinely applying the standard bag of tricks and I think that a lot of the research questions can be solved by a combination of of both. So a little bit of intuition, a little bit of sort of just just kind of like one step at a time. I think that we are at a threshold of mathematical renaissance which is to realize that there's so many unsolved problems that will currently take say researchers um months to to crack or even technical lemas in those really long-standing conjectures that we believe is not sort of out of reach for today's AI technology but only through I think very intricate you know design of system and hybrid kind of use of different methods um and that's what what Axiom is trying to do These are the first like batch. We hope to have a lot more coming. We actually have actually a few more research conjectures that's being proven every week uh just by the supply of mathematicians um you know from the world and and we try to put those problems into use.

</details>

**Matt Turk**: 迷人。系统是以可预测的方式解决问题吗？我想问的是关于 **Move 37** 的讨论，即 AI 以一种近乎“外星人”的方式解决问题。这是你所看到的吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Fascinating. And is the system solving problems in predictable way? Where I'm going with this is the whole move 37 discussion where you find AI um solving problems in a in a almost alien kind of way. Is that part of what you're doing? Is that what you're seeing or is that something that's coming up in the future?

</details>

**Carina Hong**: 这很有趣，因为存在一个“事后聪明”的问题。比如我们之前不知道怎么做，我肯定没希望解决那些猜想，我们的创始数学家 Ono 教授也不知道。现在我们看到了 **Lean** 代码，成千上万行的 Lean 代码，读完并理解后，也许我们会觉得某些技术很标准，但它们的组合应用并不简单。我认为它大约处于初级数学教授的水平，比如博士后或初级研究员。

因为它是用 Lean 解决问题的，这是一种机器语言而非人类自然语言，所以证明过程看起来确实很不一样。我们分析了普特南竞赛的所有 12 个解法，发现很多解法与人类的不同。因为这是一个基于 Lean 的系统，它非常擅长常规的“账目记录”，它会选择更**机械化**的论证，而不是人类那种需要灵巧构思的“一图胜千言”的方案。人类回避的繁琐分类讨论，对机器来说非常容易。

<details>
<summary>Original English</summary>

**Carina Hong**: It it's interesting because there's I think like a hindsight problem. So it's like we didn't know how to do it. I think like I definitely have no hope in solving those conjectures and our founding mathematician professor Ono didn't know how to do it either. Okay. Now we saw the ling code right like thousands of lines of ling code and sort of read through it understand it and uh maybe we see some of the techniques as sort of standard but I think the application of them and the combination of them is also not entirely I think it's somewhat at the level of a junior math professor say like you know a posttock or a junior researcher obviously a lot of junior researchers do amazing work and they have their move 37 moments in some very long-standing open questions, but there are a lot of sort of day-to-day um of research that it feels like it's at that level. There's also this question of like because it's solving the problem in limb, which is a kind of machine language, not a human natural language, uh the proofs actually look quite different. So, we actually analyzed all 12 problem solutions of the punam exam and we found that a lot of the solutions actually differ from the human solution. So because it is a you know leanbased system it is really good at sort of routine bookkeeping and it will actually choose a lot of the more mechanistic you know arguments over the ones that require like a clever say one picture solution and on the other hand you know there are a lot of these sort of casework that humans shy away from um it's just very you know easy for for the machine there might be like a slightly bit of what's difficult for humans versus AI are different

</details>

### Lean 语言：数学证明的编程语言

**Matt Turk**: 你刚才提到了 **Lean**。对于非数学圈的人，什么是 Lean？

<details>
<summary>Original English</summary>

**Matt Turk**: so you mentioned mentioned lean a second ago and I guess that's going to take us a little bit into um how the the the product and the model work maybe for people again who are not in the math world what is lean

</details>

**Carina Hong**: Lean 是一种用于数学证明的编程语言。有一种叫做 **Curry-Howard 对应**的概念，它允许你将数学编码为计算机程序。Lean 类似于 Python，但它具有**自验证**功能。用计算机科学类比，它既是 C 语言又是 GCC 编译器，二合一。它是一种**形式化语言**。在 Lean 之前有很多定理证明语言，如 Isabelle、Coq（现更名为 Rocq）等。Lean 非常流行，全世界有很多数学家选择用 Lean 编写证明，运行后如果看到勾选标记，就表示逻辑正确；如果有错误信息，可能存在 Bug 或类型不匹配。有趣的是，你还可以把 Lean 当作函数式编程语言。这意味着你可以同时进行数学推导和代码编写。

<details>
<summary>Original English</summary>

**Carina Hong**: so lean is a programming language for math proofs I think that's kind of the oneline high level uh explanation u there's this kind of concept called ker Howard correspondence which basically allows you to kind of code math up as computer programs and so lean is like similar to Python but it also can serve as its like self-verifying uh function. So in the computer science analogy it's roughly both the C language and the GCC compiler. So so two in one it's a formal language. There are a lot of sort of other improving language before lean such as Isabel such as um COQ um now now called rock roq and such as whole is actor. So there's this sort of like family of like formal languages and LIN is one of them and it's a very popular language. There are a lot of people um mathematicians around the world that use lean that choose to code their um proofs up in lean and they can just run it and then they will see a check mark which shows that it's a correctly logically correct proof and if there's an error message maybe there's like a bug somewhere or there is some sort of syntax or you know type mismatch just like any other programming language. The fun fact is you can actually use lin as a functional programming language. you can write an autograd for example and that's that's very interesting because basically it allows you to both math and code at the same time. Um so if you think about a security protocol you can uh try to implement the code in ling um but also prove that prove its soundness in ling. So it's a very flexible adaptive language.

</details>

**Matt Turk**: 人们可能听说过 **OpenAI** 和 **Google DeepMind** 在 IMO 等难题上取得的进展。你们的方法与他们有何不同？

<details>
<summary>Original English</summary>

**Matt Turk**: Great. People may have heard of both openai and Google deep mind sort of winning IMO the international math olympiad and other very hard to crack kind of like math problems. How does their approach differ from what it is that you guys are doing?

</details>

**Carina Hong**: 形式化定理证明在深度学习出现之前就存在了。我们团队中就有一些人是早期自动推理系统的作者。2019 年是一个有趣的转折点，Mistral 的联合创始人发表了一篇论文，尝试将 Transformer 应用于符号积分，发现它能击败 Matlab 等系统。**Ilya** 实际上是那篇论文的审稿人。Google 在 2021 年启动了 **AlphaGeometry**，他们意识到如果将几何图形转换为符号表达式，解决几何问题会容易得多。

这让我想起小时候参加奥数，我永远解不出欧几里得几何题。这很奇怪，因为几何通常是每场比赛中最简单的题。如果你解不出几何，显然你也解不出不等式、数论或组合数学。我的教练教我用**复数坐标法**，这是一种非常繁琐的方法，把图形上的所有东西都转换成复数坐标并进行代数运算。虽然慢，但至少能解出来。这在哲学上很有趣：你可以将几何图形转换为代数表达式。我想这就是他们所做的，并最终导向了 2024 年的 **AlphaProof**。

我们采取的方法是，我们认为系统必须能够同时进行**非形式化**和**形式化**推理，并在不同抽象层级之间架起桥梁——从高层的直觉到低层的 Lean 形式化检查。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah, I think the sort of concept formal theorem proving actually uh existed like automated theorem proving as a field existed before before deep learning. So I think there are a lot of uh researchers a lot of them in Europe in 20 say 2018 and even even before then we're doing sort of like automated uh reasoning without without the LM component and we actually have some of these people on our team like they were the authors of ATP boost um and uh it's very interesting time in 2019 um from source chart and gimmo uh the co-founder Mistra they have a paper which tries to put transformer own sort of symbolic integration and realized that it can beat like computer algebra systems such as mat lab or mathematica. Uh I think Elia was actually the reviewer of the paper and he actually tweeted about it. There is this other field medalist um Tim Gower said it was uh either amusing or gamechanging because it was it was in on open review people don't know if it's correct or not and that was not amusing that was the beginning of AI for math and Frano is now also at Axiom. uh this is like a long history of what people are trying to do with it and I think uh Google you know started the alpha geometry effort in uh 2021 and that was very exciting effort they realized that if you convert the figures and lines triangles circles intersection points in the symbolic uh expression in the vector language a specific domain specific language for geometry ukarian geometry uh you can actually try to do those geometric problems like a lot a lot easier and than using using machines and that's very interesting because it's just like draw back to my childhood time where I was doing mass Olympia and I never I could never solve one ukarian geometry problem. I don't know what's wrong with my brain like it's usually the easiest problem of every competition. So it's like if you go to a math competition, you don't solve the geometry one, then like obviously you can't solve the inequality one and obviously you cannot solve the number theory or the commentatorics like you know holy grail like it's like that's like the one problem you must know how to solve and I don't know how to solve it and I remember my teacher the coach taught me how to do the complex coordinate one which is a very tedious way of converting everything that shows up on the figure into a complex coordinate and just basically manipulate those algebraic expression and and through that I can solve it. I will solve it a lot slower than other people but at least I will solve it. But it's a very interesting philosophical point which is you can convert like you know geomet geometrical figures into algebraic expressions and I think that's what they what they did. I mean not exactly the human uh version but alpha geometry and then that led to alpha proof in 2024. I think Google sort of silver medal in in alpha uh in IMO u missing the gold medal only by one point. Uh that was my moment. That was my moment of immo at least and then they couldn't solve the two common toxics problem and in 2025 no one solved the one common toxics problem either. So 2025 there's only one common problem and I think that was kind of the the history of things. There were also um other players in the field and also a lot of really great academia labs doing it. We kind of take the approach of you know we we think that it's important for the system to be able to reason both informally and formally and in a way sort of bridge across these different abstraction from high level passions to low-level like more like lean sort of formal checking and

</details>

**Matt Turk**: 形式化与非形式化推理具体指什么？

<details>
<summary>Original English</summary>

**Matt Turk**: what does that mean formally versus informally?

</details>

**Carina Hong**: 非形式化就是用自然语言（如英语）进行推理。数学家几千年来一直用英语推理，虽然他们写公式，但论证过程主要是英语。对我们来说，数学在某种程度上就是代码，数学家几个世纪以来一直在用英语“写代码”。形式化语言则指 Lean，输出的是机器码，人类读起来不太容易。

这里有两件美妙的事情：第一，形式化证明首次进入并辅助数学家；第二，你可以发挥非形式化和形式化推理各自的优势。**自动形式化（Auto-formalization）**是将自然语言推理转换为形式化语言的能力，这比翻译更难，因为你是在将不可验证的东西转换为可验证的东西。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah. So informal is like say reason in natural language in English and uh mathematicians quite fascinatingly they have been doing reasoning in in in English I mean for for thousands of years. I mean they write formulas as actor but but mostly they they they write you know arguments proofs in in English and I think um it's to us math is code in a way mathematicians have been coding in English for centuries and thousands of years the formal language means you know lean and you know the the sort of output will be lin machine code I mean wouldn't be super readable to humans but I think the there are two beautiful things going on here one is first time this sort of formal proving doing kind of comes in to assist mathematicians which is a traditionally informal reasoning subject. The second thing that's interesting is you can play the strength of both informal reasoning and formal reasoning. So you're kind of like you can bridge across these different sort of like level of abstractions and uh autoformmalization which is the sort of um capability of converting uh the natural language reasoning to say the formal language and that's harder than translation because it's it's different than say translating between two programming languages. you're translating something that cannot be verified natural language into something that can be and that direction is obviously very challenging but also very uh very promising. There's also auto informalization which is kind of trans translate back I mean from lean to to English that's easier than auto formalization because most of the machines AI have seen a lot more English than l

</details>

### 验证：AI 迈向 AGI 的必经之路

**Matt Turk**: 那么 OpenAI 和 Google 的方法更偏向非形式化，而你们更偏向形式化？

<details>
<summary>Original English</summary>

**Matt Turk**: and just to make sure I understand so are we saying that the open AI and Google DM approach would fall into the informal correct

</details>

**Carina Hong**: Google 之前也在做形式化，2024 年的 AlphaProof 就是一个形式化系统。

<details>
<summary>Original English</summary>

**Carina Hong**: Google was doing I think formal until I think as of the previous year's IMO 2024 the alpha proof system was a formal system

</details>

**Matt Turk**: 所以他们的方法更像是“暴力破解”，而你们更像是**神经符号（Neuro-symbolic）**？

<details>
<summary>Original English</summary>

**Matt Turk**: so it's English and my words not yours but like more of a brute force kind of approach versus what you do is more neuros symbolic is that accurate

</details>

**Carina Hong**: 我会这样描述：首先，我们支持 **Scaling（规模化）**，我们认为 Scaling 在很多场景下有效。但这里有一个样本效率的问题。非形式化解决数学问题需要海量的训练数据，你基本上要把互联网上能找到的所有东西都扔给它。但如果你不仅扔给它海量的数学文本，还扔给它 Lean 版本的数学数据呢？我们相信在大规模数据上进行**后训练（Post-training）**和**强化学习（RL）**可以获得更好的性能提升。

<details>
<summary>Original English</summary>

**Carina Hong**: that's how I would describe it I think uh first of all is that we are you know we are supportive of scaling we think scaling works uh in in a lot of the scenarios uh there's also this question of simple efficiency which is kind of you know how effective uh scaling is potentially um and I think for the sort of informal like way to solve mathematics require like vast amount of like training data. Uh you basically throw everything you can possibly find uh on the internet to it. Now my question of that is what if you also throw these vast amount of mass tax data to your AI but you throw the lean version of them as well. I think that's you know we believe in doing things at big scale and internet scale data set of link. uh I think that in addition to the internet you know scale data set of mass going to be quite interesting and and I think that we shouldn't we shouldn't do pre-training we shouldn't try to just only train from scratch I think kind of focusing on uh post- trainining uh reinforcement learning uh can potentially get us better performance gain

</details>

**Matt Turk**: 谈到强化学习，**RLVR（带验证奖励的强化学习）**与你们的方法有何对比？

<details>
<summary>Original English</summary>

**Matt Turk**: and uh to that exact point like help us contrast and and compare so RLVR uh versus which is reinfor sort of running with verifiable rewards against what it is that you do. Is that those just completely different approaches because they both seem at the same thing which is to basically get to uh perfection.

</details>

**Carina Hong**: 世界正在意识到我们需要验证。在数学中，验证意味着完全不同的东西。在 2024 年底，验证可能只意味着每个问题相关的数值答案。但问题在于**奖励作弊（Reward Hacking）**。我们已经在一些基准测试中看到，模型可以在没有逻辑推理的情况下猜出数值答案。

我以前参加奥数时，总有同学擅长猜答案。有一种考试所有答案都在 0000 到 9999 之间，我记得有一年我朋友猜对了三道题，而我们其他人得辛苦推导。这听起来很不公平。在高中，老师会要求你“展示计算过程”。

人们现在意识到，仅靠最终数值答案无法扩展到 **Mass AGI**。大多数成人的数学研究都是基于证明的，需要严谨的逻辑演绎，很多题目甚至没有数值答案，比如“证明某物存在”。如果你想要一个真正精通逻辑和数学推理的引擎，你需要为**证明步骤**提供可验证的奖励。Lean 正好可以将证明转换为计算机程序，这使得在我们的设置中进行强化学习成为可能。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah, I think we um we the world is realizing that we need verification. Verification mean very different things in math. I think in 2020 early 2025 or late 2024 uh it means the numerical answer associated with each problem. Now the thing is like one is you know reward hacking like you know we have seen from say frontier math and other benchmark which only compels a numerical answer that it doesn't actually necessarily reflect the model's capability in the logical reasoning. So it's able to get to the answer without reasoning through it which is quite fascinating. I mean there's always these when I did math olympia before and there's always this like classmate who's really good at guessing the answer. I don't like AIM which is this exam um that all the answers are between 0000 to 9999. Like I remember there's one year where my friend told me that like you know he just basically guessed three questions correctly versus the rest of us need to like reason it through and like Jesus Christ he just put like a zero in there and then somehow that answer is indeed zero. It sounds very unfair and you know in a way in high school the teacher will like ask you to show your work. So for a while I think like verifiable reward means that final numerical like output. I think that like people are now realizing it doesn't scale to the sort of mass AGI and however you define it. Most of the sort of adult mathematics mathematical research are proof based um require sort of step-by-step rigorous deduction based on logical reasoning and a lot of them don't even have a numerical answer. Like a lot of the problems are prove that something exists. um prove that something cannot exceed a certain value. You know, very seldomly, I mean, beyond the mass olympiate kind of high schoolers context, you would have a mass question where getting to the answer at the end of it, it's a lot more difficult to get verification reward for the intermediate steps, right? And so, if you want to have a reasoning engine that really truly masters at logic and mathematical reasoning, then you need to somehow get verifiable reward for the proof steps. Coding is great. Like I mean people have seen like RL and coding have incredible gain and can we turn math into code and LIN which we just talked about the car Howard correspondence exactly turn proof into computer program so that makes RL like you know possible in our setup as well

</details>

**Matt Turk**: 所以我们要讨论的是构建一个 100% 正确的 AI，彻底解决幻觉问题。

<details>
<summary>Original English</summary>

**Matt Turk**: and just to uh drive it home for people in case that's not obvious by now what we're talking about is building an AI that is 100% correct 100% of the time right so completely solving the hallucination problem or the stochastic um issue.

</details>

**Carina Hong**: 让 AI 变得完美，成为完美的证明器。

<details>
<summary>Original English</summary>

**Carina Hong**: Make AI perfect, the perfect prover.

</details>

### 从数学到代码：通用性的探索

**Matt Turk**: 你认为你们的方法通用性如何？

<details>
<summary>Original English</summary>

**Matt Turk**: How generalizable do you think the approach that you guys are using is?

</details>

**Carina Hong**: 谈到完美的 AI，人们的第一反应是“哇，那非常有价值”。很多实验室都在尝试通过各种方式减少幻觉。在一些错误代价极其高昂的行业，如果没有这种**可证明的保证**，AI 的部署就会受阻。

关于通用性，我们从数学开始。我们的世界观是：数学推理是 AGI 真正的推理层。从数学你可以走向代码。数学给你属性的证明，代码给你输出。这两者是数字世界中非常重要的部分。从数学到代码，再从代码你可以在软件栈中运行大量现实世界实验。我们不声称在做物理世界的事情，也不做不可验证的事情（比如文学创作）。但在数学、代码验证以及应用到许多不同领域的验证中，它极其有价值。

<details>
<summary>Original English</summary>

**Carina Hong**: I think the the one thing if you talk about perfect AI, I think people's first reaction is wow that's really valuable, right? I think a lot of the you know different labs are trying to uh reduce a hallucination uh or increase sort of the accuracy um through many many different ways. If you have a lot of the sort of industries where mistakes are extremely costly um that's a block to AI deployment if you don't have that sort of provoke guarantee and now that's a value of like say catching the edge cases and there's this additional value of trusting that your edge case can be covered. So two two additional layers of value um to sort of you know reliable consistently correct AI. In terms of like how general this is I think we start with math our war view is mass reasoning is a true reasoning layer of AGI and I think a lot of the labs share that view. Um labs across US, China, Europe and you know from math you kind of get to code. Uh math gives you proof of property and code gives you output. output um and property affiliated to it are two quite important part of the digital world and so from mass you go to code and from code you can run a lot of real world experiment in the software stack then you can have a lot of other things we don't claim to be doing things that are in the physical word at all we are obviously not doing things that are nonverifiable say just like you know sometimes mathematicians are uh stereotypically not the best sort of writer we are not kind of building a you know an AI that's very really good at literature But I think in a lot of the fields such as um from math and code um verification and sort of verification applied to many different domains it's it's incredibly valuable

</details>

**Matt Turk**: 随着领域的扩展，你需要为每个领域都建立一个类似 Lean 的等效系统吗？

<details>
<summary>Original English</summary>

**Matt Turk**: and do you need a a lean equivalent for each one of those domains as you expand?

</details>

**Carina Hong**: 这是一个非常有趣的问题。即使在数学内部，有时创建**领域特定语言（DSL）**也是有收益的。在其他领域，可能 Lean 的抽象并不完全合适，但你可以进行代码转换。Lean 与 **Rust** 这种强类型语言之间的差距，比 Lean 与英语之间的差距要小得多。如果你能在非形式化和形式化空间之间进行推理，那将释放出远超形式化定理证明器本身的力量。

<details>
<summary>Original English</summary>

**Carina Hong**: It's a very interesting question I think so uh as you can see even within math right sometimes creation of domain specific language like the vector language for Uklan geometry have its gains um there could be the case where in other domains um something that is not exactly the abstraction of lean are the right sort of medium but in that case you know you can sort of do code translation and you can kind of build out you know the sort of uh stack that's required to use your like lin based um serroving engine. I think the sort of gap between say for example lean and another like strongly typed language like rust is a lot closer than the gap between lean and English and I think that's a lot of the commercial value. I mean if you can sort of reason in between informal and formal space that I think is going to unlock a lot of the things beyond just the power of a formal theorem prover.

</details>

**Matt Turk**: 你们现在才成立 7 个月，目前产品状态如何？

<details>
<summary>Original English</summary>

**Matt Turk**: Yes cuz you're also a a year old company not 10 months old. Uh 7 months old. Seven months old. Okay. Amazing.

</details>

**Carina Hong**: 我们非常关注开发系统的核心能力。从成立四个月时的普特南满分，到两个月后的四个研究猜想，我们一直在推进边界。我们也在测试从数学到代码验证的**迁移学习**。一旦我们知道了前沿在哪里，我们就会让它变得稳健，达到生产级别。我们还在招聘各领域的专家，参与芯片验证和代码验证。

<details>
<summary>Original English</summary>

**Carina Hong**: uh we focus a lot more on I I say so there's this sort of like you know team of really strong machine learning researchers and engineers and they're all like both researcher and engineer in one they're like really amazing um we have a lot of really good people from meta from Google brain from anthropic etc and we just um we keep hiring you know more and more uh sort of frontier lab researchers um this part I think is like you know focused on developing the uh core capability of the system. So we want to basically push the the goalpost like forward right. So from putnham perfect score that was four months in then two months later was the four research conjectures and then you know during this middle we also have tested something that is transfer learning from mass to code verification. So another evaluation on a community recognized benchmark. We want to kind of try where we can get because we have really great mathematicians telling us how we should think about certain research problem target and we currently have really hard research math problems in house that we are tackling. It's showing some problems is also obviously getting stuck. Um so there's this part and this part is like you know the current focus of the company and once we know where the frontier is then we can try to say okay let's make it robust let's make it sort of um production grade. So when 1,000 1 million people hit it, you know, it doesn't break. But but this part is kind of sort of an effort that's surrounding that. And sometimes people like jump between different task as well. Now we learn something about the applied uh use cases. We also have a lot of subject matter experts and we are hiring we are hiring subject matter experts to to join us to work on trip verification to work on code verification.

</details>

### 个人旅程：从奥数选手到罗德学者

**Matt Turk**: 让我们聊聊你的背景。你在中国长大，是个“数学竞赛娃”。

<details>
<summary>Original English</summary>

**Matt Turk**: Before we go further I you mentioned uh your background a couple of times in passing and um as I was prepping for this is just so fascinating. I want to spend a few minutes uh talking about it. We covered it in in some other podcast, but I think the story is just uh amazing. So, taking it from from the top. So, you you grew up in China and you were a competitive math kid.

</details>

**Carina Hong**: “数学竞赛娃”这个词真有意思。

<details>
<summary>Original English</summary>

**Carina Hong**: Competitive math kid is such a great term

</details>

**Matt Turk**: 那段经历对你有多大的塑造作用？

<details>
<summary>Original English</summary>

**Matt Turk**: walk us through, uh, what what is that experience and how formative was this?

</details>

**Carina Hong**: 极其深刻。多年的奥数训练让你只有一个目标：在下一场比赛中拿到尽可能高的分数。我记得为了准备一场甚至不知道能否入选的比赛，我做了 75 套试卷，结果最后还没入选。

我学到了几件事：第一是**韧性（Resilience）**。你几乎会对痛苦和磨难上瘾，失败是常态。随着考试越来越难，竞争人数不断萎缩。小学有 1 万人竞争，初中剩 90 人，高中只有 25 人。

14、15 岁时，我参加了俄亥俄州立大学的 Ross 数学项目，那是我第一次去美国。那是一个充满永恒喜悦的夏天，我们每天学习酷炫的研究数学，从零开始推导一切。我们被要求仅用有限的公理证明“0 乘以任何数都等于 0”。这与竞赛完全不同，它让你觉得数学是一块砖一块砖亲手构建起来的。这种好奇心和探索欲是人类的基本需求，它激励了我对数学的热爱。

<details>
<summary>Original English</summary>

**Carina Hong**: It it was extremely formative, I think. Um, years of mass Olympia training. You have one goal that is to score as high as possible on whatever that is next mass competition. You have people that are in the same sort of community circle that are also doing the same thing. You are friends with them. You're competitors with them. There are a lot of sort of like you know background reading learning exercise you need to do to overprepare for every competition. I remember I did 75 exam papers to prepare for a competition that I didn't know if I will be selected for and I didn't end up being selected for it. Um I think I learned um a few things. One is resilience. It's just like I think you get addicted to pain and suffering. So that like the word resilient is like almost a paradox because it's like you like it. It's like failure is like a given. I think um throughout that time I mean just the exam get keeps getting harder and the number of people competing keeps shrinking. Like elementary school I have like 10,000 friends competing for you know the spots for the middle school. Then middle school is like 90. Okay. and then like high school 25 that means vast vast majority of your friends lost the opportunity to compete and that's a very interesting thing I think it does to a child but then I also like learned some like you know other side you know not just the math olympi when I was I think 14 15 I got into the Ross math program which is one of I think the best like high school uh math camp uh in the states uh Ohio State University um I think my first trip to the United States um was that summer it It's like you know summer of like eternal joy like every day I will be learning cool research math like they taught us undergrad math and they asked us to like deduce everything from the grounds up like we were asked to prove zero times everything zero um by like a limited number of axioms and that was very defining. It felt very different from mass competition. It's not like how many people will win that award. It's like there is a vast amount of math that you just have no idea about and you get to build it yourself almost like one brick by another right from the limited number of theorems you are provided you prove new things. So we are given like about 25 30 problem sets and each of the problem set have problems that like are probably just bookwork theorems and you would just learn it in college but instead of presenting it as something that is like a given fact it asks us to prove it. So we our world of mathematical knowledge is constrained to how much we can prove and that's actually what's going on right now with action prover like action prover has access obviously to a lot of the words information but because the lan data is so scars it's like a lot less than say the amount of code data out there um it's only two-digit million number of tokens out there in the open open world action Imper learns to prove things and it kind of self-improved in a way where all the things that it proved got fed back into it into a kind of a skill library can be like apply for the next challenge. There's also this sort of like self-challenging conjecturing component that keeps giving it harder problems just like my camp counselor gave me the problem set. And this is a very beautiful process. I think like without this sort of right order, sequential order of introduction, I wouldn't like kind of go this far in math or love math as much as he do. Um I think the sort of curiosity and discovery is a basic human need and that definitely exists in like back then the tinted child and that being used to motivate and inspire u mathematical learning. I think that was a very beautiful process.

</details>

**Matt Turk**: 你在三年内完成了 MIT 的学业，然后作为罗德学者去牛津研究**神经科学**。为什么是神经科学？

<details>
<summary>Original English</summary>

**Matt Turk**: Amazing. And then um on um some other incredible things that you've done. So you did um MIT in three years I believe. Then you went to the UK on a road scholarship to study neuroscience. Why neuroscience? Was it all part of a grand plan towards AI or was it just your interest naturally carried you?

</details>

**Carina Hong**: 罗德项目非常鼓励我们跨学科尝试。我选了神经科学，因为它处于中间地带。在牛津，我依然有很多数学系的朋友。我尝试将数学应用于神经科学，特别是**计算神经科学**。我对拓扑数据分析很感兴趣。但开学两三个月后，我发现了伦敦的 **UCL Gatsby**，那是顶尖的 AI 中心。我意识到核心依然是 AI。

<details>
<summary>Original English</summary>

**Carina Hong**: Yeah, I think the roads program like did a really good job and probably too good a job to encourage us to just like shift direction. Like it has this sort of I mean broad sort of belief that you need a lot of disciplines and studies to help you become a global leader. Um that's what the road scholarship is trying to sort of nurture. People who have a background in STEM, they will encourage you to go into liberal arts. I wasn't fully encouraged to go into liberal arts. So I picked something that's kind of in the middle like neuroscience. Obviously I think at Oxford I have a lot of math friends and so kind of still math was part of the equation. Um, I was also trying to apply math in my neuroscience study specifically maybe because I just am afraid of animal experiments. Like I'm not going to I I'm I'm probably just going to stay in, you know, data analysis, computational neuroscience. I was quite interested in topological data analysis and persistent homology and uh but later I realized I think it was like two three months after the school year started I realized there's something called UCL Gatsby UCL Gatsby is this like premium like you know AI hub in London and um Oxford to London is a short train and there's so many world-class faculties there like um doing really cool research in say like the radical uh machine learning um like you know analyzing the neurodynamics of stuff. They're also doing like various other like applied AI research and some from like cognitive science motivation but but but really the core is core is AI.

</details>

**Matt Turk**: 然后你又在斯坦福攻读数学博士和法学博士（JD）。这跨度太惊人了。

<details>
<summary>Original English</summary>

**Matt Turk**: Then you topped all of all of this with a joint PhD in math and JD uh in law at Stanford. All of this been fascinating not just in terms of achievement but in terms of like range and um I'm I'm just uh curious like how you were able to do all of this and whether there's any lesson for anybody else. I mean clearly there's an element of like of the chart IQ but there must be something else.

</details>

**Carina Hong**: 我只是想在智力上找点乐子。在斯坦福法学院，有非常优秀的知识产权法教授研究 AI 与版权法，还有教授研究法律与经济学。应用文本主义（Textualism）于宪法，其实非常类似于在数学教科书中查找定义。

研二时，我浏览了所有 AI for Math 的研究论文，意识到有这么多令人兴奋的想法，我希望在工业界拥有资源去执行它们。于是很快我就决定全身心投入公司。

<details>
<summary>Original English</summary>

**Carina Hong**: I I think there's a lot of things actually. My junior year, I mean my last year at MIT, I'm like I kind of grew up with a very sole focus and goal to do mass olympiate and then do mass research and the very next step is to probably go to grad school directly and probably not even do the rose scholarship. I'm not sure because a lot of the road scholars are like you know politicians or aspiring lawyers, judges. I'm like, I just want to have some fun intellectually. At the end of the neuroscience, I was like, okay, I want to go to Stanford to start my math PhD, but also there's this incredible opportunity of Stanford Law School, literally one of the two, I think, first ranking law schools in the country. And uh they have really good um IP professors who marry like AI and copyright law. they have really good professor uh Mitch Pollinsky in law and economics where you basically are doing differential equations but you're like analyzing like difference and like retribution uh the ratio of each sort of criminal law measure and there are a lot of like other things cool um methods to apply textualism to constitutional law that's very similar to looking up definitions in math textbooks and so I was like okay that's very cool so I did my I mean the JD PhD is like you have to spend one full resident year in the law school so that was my first year I spent like one year being a diligent law student. I was even trying to apply for clerkships. It was a fascinating year and uh I learned so much and then the second year which is kind of a very interesting year where I was browsing all the AI for math research paper and realized that wait a second there's so many ideas I mean from draft sketch pool uh proof to to uh I think STP selfplace are improving there's so many exciting papers and I wish I just have the resources in industry to like execute and that was like when I think very very soon after I just basically decided to do a like fully focus on the company.

</details>

### Axiom 的架构与未来

**Matt Turk**: 让我们拆解一下 Axiom 的架构。它是如何工作的？

<details>
<summary>Original English</summary>

**Matt Turk**: Fascinating. Thank you for that. So let let's um actually go to the into the product now. So we alluded to some of this. Let's unpack how it actually works. So you mentioned there were three components. What is the architecture? What do those components do?

</details>

**Carina Hong**: 我们的愿景是拥有：**猜想器（Conjecturer）**、**证明器（Prover）**和**知识库（Knowledge Base）**。

打个比方，假设你在大海上航行。你的船决定航向，那就是你的猜想。当你登上一座岛屿，你需要查看知识库，确认这是否是未开发的处女地。一旦确认，你的证明器就开始工作，证明这个新猜想在数学上是正确的且有价值的。而**自动形式化**则是跨越非形式化和形式化空间的桥梁。

<details>
<summary>Original English</summary>

**Carina Hong**: So I think like our kind of very broad vision is that we are going to have a contractor, we're going to have a prover and then there is knowledge base. in a way your knowledge base is like let me take a metaphor I think for the because this is like quite I think like in the niche area of like very like subfield of of AI but uh suppose you're like selling on an ocean right and like where do you know where to go and sort of your ship um that basically decides where to navigate that's your conjecture and then you like you know sail and tour one direction um and then you land at this island okay well like do you know if you have been on this island before you don't necessarily they know basically you need to look up your knowledge base u you want to make sure that this is indeed uncharted territory and then once you realize that it is uncharted territory like how do you know if it's like say India or west Indie right like so is it I don't know um is it going to have some rare metal um that's kind of where your prover starts coming in to basically prove this new conjecture that is not in the knowledge phase that is mathematically correct and has merit and so that's kind of the and then there's auto formalization which is the ability to um reason across informal and formal space kind of weaving all these

</details>

**Matt Turk**: 猜想部分是基于大语言模型（LLM）吗？

<details>
<summary>Original English</summary>

**Matt Turk**: uh great and so the conjecture part is it LLM based or are you in a completely non LLM world

</details>

**Carina Hong**: 我们在开源 LLM 上进行后训练。目前我们非常专注于证明器。在普特南竞赛中，你不需要猜想，题目是现成的。我们的系统是模型集成、确定性工具和海量私有数据集的结合。

我们即将发布一个名为 **Axel (Axiom Lean Engine)** 的数学推理基础设施。它比开源的同类工具快 100 倍。我们希望这能让每个人都能证明更多的定理。

<details>
<summary>Original English</summary>

**Carina Hong**: uh so we do post training on say like you know open source like LLM. yeah I think I would say here like the conjecturing part is still the underdevelopment part like we have been in the last I think seven months very focused on prover and also made a lot of progress on the knowledge base so so in the pandmic exam right you don't need to conjecture you have 12 problems they're incredibly hard and they are like you know basically test for your prover so action prover uh tried on pandmic exam got perfect score the the kind of you know underlying system is a system of ensemble of models and there's also a set of deterministic tools and also there's like a proprietary data set that's very large. So um kind of a combination of these three things that led to that success specifically um I think that for the deterministic tooling it's quite interesting because these are actually written for lean in the language of ling so um a bit like meta programming uh and that's that's very interesting we are actually going to release them uh on the public like API on these all these those end of pools uh very very soon beginning of March right. I mean it's uh releasing the infrastructure for mathematical reasoning. Um it's called Axiom Lin Engine Axel. It's um interesting because there are a lot of sort of grassroot effort from the open source community to try to provide infrastructure tooling for Lin the proving because LIN is a really sort of you know it's a relatively new language and there are a lot of reasons why uh it could be a bit slow sometimes. Um there could also be you know things where if you assume like an axiom that's mathematically incorrect like if you assume n plus n equals n then you will be able to prove 2 plus 2 equals 2. You don't want that right 2 plus 2 equals 4. So a lot of the sort of like verify verify prove is actually you know one of our prover tools that's about to be released and that's actually um a 100 times faster than the other counterparts that are the open source like effort called comparator. So um a lot of them are hopefully going to make everyone prove more theorem.

</details>

**Matt Turk**: 最后一个问题，AI 能赢得**菲尔兹奖**吗？

<details>
<summary>Original English</summary>

**Matt Turk**: Do you think that AI can uh win a fields medal?

</details>

**Carina Hong**: 我的一位朋友告诉我，你不在赢得菲尔兹奖时庆祝，而是在进入**候选名单（Short list）**时庆祝。我们希望 Axiom Prover 能够解决一个长期存在的数学难题，让人们客观地说，即使它是 AI，它也应该在那个名单上。

我们正处于数学复兴的门槛，也可能处于科学理论发现的门槛。数学推理能力的稀缺导致人们处于“匮乏心态”。我希望所有人类能猜想到的、感兴趣的、有品位的理论问题，最终都能被证明器以令人满意的方式解决。这不仅是数学，还包括验证后的代码，甚至科学发现。这是一个多重飞轮效应。我们必须跑得极快，因为有太多事情要做了。

<details>
<summary>Original English</summary>

**Carina Hong**: There is this friend uh who uh taught me a lot of things about math and he said that like you don't celebrate when you win the field medal you celebrate when you get into the short list of fields medal. Uh so obviously there's like only a finite number of awards and I think that we really want action prover to be able to solve one long-standing problem in mathematics that you can objectively objectively say even though if it's an AI you know or double blind whatever that will be in the short list. the first couple well not the first couple months a couple months before we actually start executing it was incredibly exciting for me on an intellectual level like every day I have this sort of excitement like it's like I drink like six cups of coffee kind of excitement for months and and the main source of that excitement which I would tell tell you actually about you know my my colleague uh Shoubo good friend uh he's excitement of this in in a bit but my excitement is like just like we're now realizing that we are at the threshold of mathematical renaissance we could also be at the threshold of theoretical discoveries in science mass massive massive scientific discovery at the theory level and and I think what I mean by that is we have been in a very mass poor board the supply of outlier mathematical reasoning skill is so lacking that people are like in a scarcity mindset like you will like hear discussions of oh like this problem is so interesting unfortunately I'm solving that problem they should all be solved everything that human mind can conjecture find interesting find tasteful could be solved by hopefully majority of them by improver And then you have the question of hypothesis when they talk to mathematicians um generally they will have interesting opportunities for collaboration like I actually have this paper with professor Kenono and and others uh Shingong Jang and uh uh Michael Merren uh which addresses like the elliptic expansion moonshine conjecture and that kind of stem from like you know three I think three theoretical physicists they they conjecture this based on their observed or like physics like phenomenon that that I know frankly not not not very much about but I can solve the math part. They come to the conclusion that what they believe are a beautiful phenomenon that they find it worthy to formulate as a conjecture and publish as a paper have a proof because they know some mathematician. Well, that that that doesn't seem right. Like I think that the the really the beautiful vision is for all the theoretical problems, all the curiosity, all the lack of understanding to be resolved in a satisfactory way across all scientific subjects and beyond this right there are things that we still cannot solve that we will get a closed form sort of not a close form solution we'll get a very like you know approximation as precise as possible I mean there's a lot of value for example to know Say what is after the 1,000 or 10,000 digit compared to what is after the third digit. The word is actually a lot of the times not diminishing return. The last mile carry a huge amount of value like in search for example if you cover some edge case you likely win you you will be a market winner. In for example writing right if you write just that extra bit or any sort of creative art getting that extra mile correct or or done has a lot of value like optimization you know precision. We we can try a lot of these things as well. And then as math kind of helps with both first principle understanding and trial and error, it just kind of this cycle like you have you have some first principal understanding, you try testing it, you try some trial and error and you maybe give some sort of you know risk bond uncertainty principle um robustness estimation and and then you go back to your first principles and then you go go to your trial and error again. You have this sort of circle of of discovery and this is really not not the end of it. So that's that's why I'm already very very excited. I think this is going to be amazing. Ideas can diffuse between different fields a bit like you have like abacus and now you have like trade and commerce. You have uh calculus integral integration. You have like thermodynamics, mechanics, industrial revolution, you have the Babage engine which is to calculate lock tables faster and okay well you have the prototype of computer science. The rest is history. You have number theory, you have RSA, like you have all these kind of mathematical tools, you know, kind of open up new discoveries and new use cases and in turn demanding more mathematical tools and beyond this cycle and this cycle marrying science. Here comes code. We haven't even talked about that and that's why actually Shubo is very excited. Uh so Shubo CTO of Axium before that was like you know long-term like meta veteran. Uh he was an IC director. He believes in code is math. Okay. So, so through through all my good friends telling me about lean telling me about Curry Howard correspondence, I believe math is code. He believes code is math. What does that mean? Okay. So, it means that you can try to fulfill the dream of Donald News literary programming. Have computer scientists, programmers enjoy the luxury of mathematicians where they can read in a natural language. And this is kind of starting to happen, right? Web coding like front end, right? Like you know, we can have very cool like glovable websites. But like how do I v code a nuclear reactor? How do I v code control flow? How do I v code complex systems that require like quite honestly superhuman hierarchical reasoning skill? It's interesting because you're not in code alone. You have code and you have math. So you have in addition to the flywheel we're already seeing in the coding companies an additional layer of flywheel of verified code and the sort of mass start to come in and these kind of flywheel of data keeps compounding you have actually two or even if you're counting the science part three orders of flywheel. How far do you think we are from that world where we have already that's why we have to execute like you know something every couple months like we have to move extremely fast like there's so much to do I think Axiom is a very very young company and we are at like you know the very very beginning tip and and we are already I personally feel some sort of shock and emotional response and I know some of my mathematician friends Scott commoners who's a Harvard uh microeconomics professor also Morgan Prize winner we're good And we all have this sort of emotional response when axi prover approved fa conjecture proves that almost all primes are partially regular partial vendor conjecture which is one part of the original vendiver conjecture that have been open for 90 years. The parity of differentials um for services genius zero and one by algebraic geometry paper. We are really just leaping across a point. I mean pund marked I think the end of AI trying on mass Olympia. We are very glad that we got a perfect score. It's a really good period point. Pundam 2025 is by a lot of sort of experts grading harder than IMO 2025. So it's a hard hardest reward mass Olympia test. And now we are leaping we are leaping to research. And I think I'm going to have another similar emotional response if it really does solve one of those breakthrough mathematics problems. Interestingly, I think there are a lot of experts in domains that are currently overlooked by a AI development. So, so if you're a software engineer, you feel like, oh, web coding really change and improve your quality of life in a meaningful way. There are people who are in industries where because of lack of provable guarantees, they couldn't use AI. And there for example, Aerero Astro for example like I think defense um for example there is no partial credit for mostly verified GPU is a all or nothing or mostly flying plane. Yeah. Yeah. Yeah. A mostly verified formalized hypervisor. I think for these experts that are currently kind of handholding a lot of the traditional goals their life has not been changed. And I want I want to see I want to see the AI for math movement that Axiom is you know hopefully leading and to to transfer to these domains and to try to solve some of those problems as well.

</details>