---
area: tech-insights
category: technology
companies_orgs:
- OpenAI
- Firstmark
- University of Warsaw
- JPMorgan
- DeepMind
- Google
- DeepSeek
- Scale AI
- Cursor
date: '2025-10-16'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The MAD Podcast
- Dwarkesh Podcast
people:
- Jerry Tworek
- Matt Turck
- Ilia Sutskever
- Richard Sutton
products_models:
- ChatGPT
- O1
- O3
- GPT-5
- Codex
- GPT Agent
- DQN
- GPT-2
- GPT-3
- GPT-4
- GRPO
- Dota 2
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=RqWIvvv3SnQ
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: OpenAI 研究副总裁 Jerry Tworek 深入探讨了 AI 模型（如 GPT-5）的“思考”过程。他详细阐述了“推理”的本质、思想链（Chain
  of Thought）的工作原理，以及模型如何通过强化学习（RL）从根本上提升能力。本期对话还揭示了 OpenAI 内部独特的研发文化——专注、透明与高效协作，并探讨了从
  O1 到 GPT-5 的演进、规模化强化学习面临的挑战，以及通往通用人工智能（AGI）的现实路径与哲学思辨。
tags:
- culture
- llm
- model
- reinforcement-learning
title: OpenAI 研究副总裁揭秘：GPT-5 如何“思考”？
---

**Matt Turck:** 大家好，我是 Firstmark 的 Matt Turck，欢迎来到 Mad Podcast。今天我的嘉宾是 Jerry Tworek，OpenAI 的研究副总裁，也是全球顶尖 AI 研究者 Midas 榜单的成员。在本期节目中，我们深入探讨了模型究竟是如何进行推理的。我们还走进了 OpenAI 的幕后，了解他们如何为少数几个重大赌注配置资源，为什么内部每个人都知晓一切，以及这种文化如何帮助他们快速交付产品。请欣赏我与 Jerry 的精彩对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Matt Turck from Firstmark. Welcome to the Mad Podcast. Today, my guest is Jerry Tworek, VP of research at OpenAI and a member of the Midas list of the world's top AI researchers. In this episode, we go deep on how models actually reason. We also go behind the scenes at OpenAI, how a few big bets get staffed, why everyone knows everything, and how that culture ships fast. Please enjoy this great conversation with Jerry.</p>
</details>

**Matt Turck:** 嘿，Jerry，欢迎你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey, Jerry. Welcome.</p>
</details>

**Jerry Tworek:** 你好，很高兴来到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello. Very happy to be here.</p>
</details>

### AI 如何“思考”：揭秘模型推理的本质

**Matt Turck:** 在这次对话中，我们将大量讨论“推理”。从宏观层面来看，这到底意味着什么？当我们与 ChatGPT 对话，而 ChatGPT 说它在“思考”时，幕后究竟发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are going to talk about reasoning a lot in this conversation. At a high level, what does that actually mean? When we talk to ChatGPT and ChatGPT says it's thinking, what actually is happening behind the scenes?</p>
</details>

**Jerry Tworek:** 我认为“思考过程”至少是一个很好的类比。在 AI 的早期，我们一直有一个目标和梦想，那就是尝试教模型进行推理。我们当时的想法是，花费更多时间可以得到更好的结果。就像人类面对一个非常困难的问题时，他们很少能立刻给出答案。有时他们需要去寻找答案，有时需要进行某些计算，有时需要查找一些信息，有时甚至需要自学一些东西。这个过程就是推理，即找到一个你尚不知道的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that the thinking process is at least a good analogy. As we were in the early days of AI, we always had this goal and dream of trying to teach models to reason. We were thinking about it as spending more time to get better results. If a human is posed with a very hard problem in front of them, very rarely do they have the answers straight away. Sometimes they need to find that answer. Sometimes they need to perform certain computations. Sometimes they need to look up some information. Sometimes they need to teach themselves something. And the process is reasoning, which is like getting to an answer that you don't yet know.</p>
</details>

**Jerry Tworek:** 在某种程度上，这可以被称为“搜索”，但它并非一种非常天真的搜索。“搜索”这个词本身含义很丰富。但推理是找到答案的过程，以及你需要为此付出的努力，这个过程比通常所说的“回答问题”要长。我认为这里的区别在于，“回答问题”通常意味着你已经知道了答案，你只是把它说出来。而推理的过程是找到你不知道的答案。通常，你花在寻找答案上的时间越长，无论你需要做什么来实现它，结果就会越好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In some way, it can be called search, but it's not really like a very naive search. Search is a loaded word. But reasoning is the process of getting to an answer and the work that you need to do that is longer than what is usually considered answering a question. I think the difference is here: answering a question usually means you already know the answer and you just elicit the answer you know. And the process of reasoning is getting to the answer that you don't know, and usually the longer you spend on getting to this answer, for whatever you need to do to get there, the better it gets.</p>
</details>

**Matt Turck:** 自从你们大概一年多前，也就是 2024 年 9 月发布 O1 以来，我们都熟悉了**思想链**（Chain of Thought: 一种让 AI 模型展示其逐步推理过程的技术）这个概念。用外行人的话来说，就是当你查询 ChatGPT 时看到的小提示，它会展示自己的工作过程，告诉你它在做什么。这背后到底是什么机制？它是一个逻辑树，在不断地排除选项吗？究竟发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we've all become familiar since you guys released O1, I guess a little over a year ago now in September 2024, with the concept of Chain of Thought, which is in layman's terms the little messages that you see when you query ChatGPT and it tells you, it shows its work, it tells you what it does. What does that actually do? Is that a logical tree and it eliminates option after option? What actually happens?</p>
</details>

**Jerry Tworek:** 语言模型在最基础的层面上所做的，通常被称为“下一个词元预测机器”。在强化学习时代，这个说法不完全准确，但它们仍然主要处理词元（tokens），也就是文本。当然，现在的语言模型也已经是多模态的，它们处理的也不仅仅是文本。但为了简化一下，语言模型生成文本，而“思想链”就是它们用人类的词语和概念将其思考过程口述出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Language models, on their fundamental level, are often called next token prediction machines. That's not completely accurate in the age of reinforcement learning, but they still operate on tokens that are mostly text. The language models these days are also multimodal and they operate on more than just text. But to simplify a little bit for a second, language models generate text, and what Chain of Thought is, is their thinking process verbalized using human words and human concepts.</p>
</details>

**Jerry Tworek:** 我们看到的魔力之所以成为可能，是因为当你在整个互联网、大量人类知识和人类思维过程上进行训练时，模型在某种程度上开始学习人类的思考方式，并通过观察人类在预先生成的训练数据中大量这样做，来学习如何像人类一样找到答案。然后，“思想链”基本上就是激发语言模型中那种像人类一样思考并得出答案的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the magic that we are seeing, why this is all possible, is that while you are training on all of the internet, on a lot of human knowledge and human thinking process, the model starts learning in some ways to think how humans do and in some ways get to the answers how humans do from seeing humans do it a lot in the text that was pre-generated and that was based in the training data on humans. And then the Chain of Thought is basically eliciting that capability in language models of thinking and getting to an answer like humans do.</p>
</details>

**Jerry Tworek:** 早期很多“思想链”的工作都是在解决数学难题。最早用来激发语言模型“思想链”的最著名的提示语之一就是“让我们一步一步地解决它”。在语言模型中有一个非常经典的结果：如果你问它们一个数学表达式或某个谜题，它们会尝试给你一个答案，预测下一个词元，但它们会失败。这是一个难题，它们无法一步就计算出来。但如果你对它们说“请一步一步地做”，它们就会开始思考：“好吧，我不知道答案，但得出答案的第一步是这个。”然后它们就会写下一段“思想链”，也就是一系列的文本、一系列的词元，来完成计算的第一部分、第二部分，直到最后一部分。然后它们将这些部分连接起来，最终得出答案。所以，“思想链”基本上就是一个用文字编码的思考过程，就像人类在纸上一笔一划、从头到尾解决问题的过程一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of what early Chain of Thought work was doing was kind of solving math puzzles, and the first most famous prompts to elicit Chain of Thought in language models was so-called "let's solve it step by step." There is this very classical result in language models that if you ask them what is some either mathematical expression or some puzzle, then they will try to give you an answer, they will try to predict the next token, but they fail. It's a hard thing; they cannot compute it in one token jump. But if you ask them, "please do it step by step," they will start thinking, "okay, I don't know the answer, but the first step of getting to the answer is this." And then they write a Chain of Thought, which is a series of text, a series of tokens, doing the first part of the computation, the second part of the computation, the last part of the computation. Then they connect those things and then they can get to the answer. So the Chain of Thought is basically a process of thinking encoded in words, how humans would solve a problem on a piece of paper, going step by step from the start to the end.</p>
</details>

**Matt Turck:** 既然时间，也就是思考所花费的时间，对于推理这个概念如此重要，那么模型是如何决定要思考多久的呢？当我们在 GPT-5 中使用自动模式，它说它会“自动决定思考时长”，这背后发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since time, and by that I mean the time spent thinking, is so important to that concept of reasoning, how does a model decide how long to think? When we're in GPT-5 and we're in auto mode and it says that it is going to decide automatically how long to think, what happens there?</p>
</details>

**Jerry Tworek:** 这基本上是我们优化过程的一部分，部分是为了满足用户的满意度和他们的期望。因为当存在一个思考过程时，你需要平衡两件事：一是结果的质量。正如我们所说，并且我们在发布 O1 时展示了那些非常棒的规模法则（scaling laws），模型思考的时间越长，你得到的结果就越好。但另一方面，人们不喜欢等待。等待是时间的损失，你本可以做些别的事情。每个人都希望尽快得到结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's basically part of our optimization process, partially for the happiness of the users and what they want to expect. Because when you have a thinking process, you need to balance two things, which is the quality of the result. That's as we said, and there have been those pretty great scaling laws that we demonstrated with the release of O1. The longer the model thinks, the better result you get. But also, people don't like waiting. Waiting is time lost that you could do something. Everyone wants to get results as quickly as possible.</p>
</details>

**Jerry Tworek:** 有句老话说，你可以得到“便宜、快速或优质”的服务，但只能三选二，这同样适用于语言模型。这里存在一个微妙的权衡。因此，我们也向用户开放了部分权衡选项，你可以选择高推理模型和低推理模型。这实际上是同一个模型，我们只是调整了参数，告诉它我们希望你思考得更长或更短。我们试图根据我们的理解，为用户编码一些启发式规则，判断在什么情况下，多花一点时间思考以获得更好的答案是值得的。但这有点像是在猜测用户的期望，试图找出在特定情况下对他们来说最合适的思考时长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, there is this saying you can get "cheap, fast, or good," and you can take two. And that applies to language models as well. There is a trade-off, and it's delicate. That's why we also expose some of that trade-off to the users where you can have a high-reasoning model and a low-reasoning model. And this is in the end the same model; we just tweak the parameter which says we want you to think longer or shorter. We try to encode some heuristics of what we think the users will want, when getting thinking on an answer a little bit longer and getting to a better answer is worth it waiting versus not. But it's a bit of trying to guess the anticipation of the users, what's the right amount of thinking for them in this particular situation.</p>
</details>

**Matt Turck:** 哦，真有意思。所以这更多是用户驱动的，更像是一种用户体验方面的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, fascinating. So it's more user-driven. So it's more like a user experience kind of thing.</p>
</details>

**Jerry Tworek:** 最终是这样的，因为问题在于：你愿意为答案等待多久？你总是可以等得更久，来获得一个更好的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the end, it is, because the question is like, how long do you want to wait for an answer? You can always wait longer and get an even better answer.</p>
</details>

### 从 O1 到 GPT-5：推理模型的演进之路

**Matt Turck:** 距离全球首个推理模型 O1 的发布已经过去一年多了，那项工作是由你领导的。从那以后，发展历程是怎样的？先是 O1，然后是 O3，最近是 GPT-5。你会如何描述过去一年里，这三个模型在推理能力上的演进？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's been a little over a year since the release of the world's first reasoning model, O1, which is an effort that you led. What has been the journey since? So there was O1, then there was O3, then most recently GPT-5. How would you characterize the evolution of reasoning specifically across the three models in the last year?</p>
</details>

**Jerry Tworek:** 在某种程度上，我将我们的推理或规模化强化学习研究项目描述为一系列规模不断扩大、越来越雄心勃勃的训练运行。每一次，我们都尝试做更多的事情，更大规模的事情，一些应该能训练出比上一个更好的模型的事情。显然，我们不会发布所有训练出的模型。有些我们发布了，有些我们认为需要再等一等，等待它们在用户手中大放异彩的时机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In some way, how I characterize our reasoning or scaling up reinforcement learning research program is we do a series of scale-up runs that are progressively more and more ambitious. Every one, we try to do something more, something larger scale, something that should result in a better trained model than the last one. And obviously, we don't release all the models that we train. Some we release, some we think need to wait a little bit longer for the moment where they will have their time to shine in the hands of the users.</p>
</details>

**Jerry Tworek:** O1 是我们决定发布的第一个模型，有点像向世界展示这类模型的存在。说实话，O1 基本上只擅长解决谜题，可能还能处理一些零散的思维问题，但它还不是一个非常有用的模型，更像是一个技术演示，而不是一个真正打磨过的产品。但我们觉得我们有了很酷的东西，想和全世界分享，就像 OpenAI 一贯的作风。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But O1 was the first model we decided to release, as kind of like to demonstrate to the world there are those models. And O1, to be perfectly honest, it was really mostly good at solving puzzles and maybe a few kind of thinking problems here and there, but it wasn't yet a very useful model. It was almost more like a technology demonstration than an actually really polished product. But we were thinking we have something cool and we wanted to share it with the world, as OpenAI does.</p>
</details>

**Jerry Tworek:** 我认为 O3 极大地改变了这一点。在某种程度上，它是一个真正有用的模型。虽然有点自卖自夸，但那是我开始大量使用 ChatGPT 的时刻。我现在基本上是一个完全沉迷于推理模型和 ChatGPT 的用户。我几乎只使用推理模型，因为它们是我唯一信任其输出和结果的模型。我认为 O3 利用工具、从各种来源获取大量上下文信息并坚持不懈地找到答案的能力，确实带来了一场 AI 发展轨迹上的构造板块式转变。我认为我们确实做了一件非常了不起的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">O3, I think, changed that pretty significantly. In some way, it is a model that is meaningfully useful. And, you know, a little bit self-serving, but that was a moment when I started using ChatGPT quite a bit, and I'm basically a user completely hooked on reasoning models and in ChatGPT right now. I use basically exclusively reasoning models because those are the only models that I trust the output and the result. And I think O3's ability of using tools and getting to an answer leveraging a lot of contextual information from various sources and persevering towards getting to that has really been something like a tectonic shift in the trajectory of AI. And I think we did something really, really great there.</p>
</details>

**Jerry Tworek:** 而 GPT-5，在某种程度上可以看作是 O3.1，它更像是对同一事物和同一概念的迭代。我和我的团队现在追求的是下一个能带来巨大飞跃的东西，一种我们与模型互动的新方式，这些模型将拥有更强的思考能力，能思考更长时间，并能自主地与更多的系统和信息源进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">GPT-5 in some way can be considered as like O3.1. It's a little bit of an iteration of the same thing and the same concept. And what I am after, and my team right now, is something next that would be the next pretty significant jump of how we interact with models that are even more capable, thinking even longer, and interact with even more systems and sources of information on their own journey.</p>
</details>

**Jerry Tworek:** 但与此同时，我们也在 O3 技术的基础上继续构建很多东西，比如 Codex。我认为编码智能体是目前首批在 AI 基础上构建的真正成功的智能体产品。还有像计算机使用智能体（现在好像叫 GPT Agent）、搜索以及其他一些我们将在 O3 代技术上继续构建的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But separately, in the meantime, we continue to build a lot of things on top of O3 technology, like Codex, which I think coding agents are at the moment the first really successful agentic products built on top of AI. There are things like a computer-using agent, it's called GPT Agent right now, I think, and search and a few other things that we will keep on building on O3 generation technology.</p>
</details>

### 从数学天才到 OpenAI：Jerry Tworek 的个人历程

**Matt Turck:** 好的。我们稍后会更详细地探讨所有这些内容。但在那之前，我们先来谈谈你的个人经历。我认为这是一个对我们所有人都极具吸引力的话题，因为你们正在改变世界。所以，我很好奇，我们大家可能都很好奇，这些产生如此巨大影响的人究竟是谁。从头说起，你是在波兰长大的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. All right. So, we're going to go into all of this in much greater detail in a minute. But before we do that, let's talk about your journey. I think it's a super fascinating topic for all of us. Like, you guys are changing the world. So, I think I'm curious and we're all curious, I think, about the people, the human aspect of who those people are that are just having such an impact. So you, starting from the beginning, you grew up in Poland, I believe, right?</p>
</details>

**Jerry Tworek:** 是的，我在波兰长大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. I grew up in Poland.</p>
</details>

**Matt Turck:** 带我们回顾一下你的成长岁月，以及你是如何进入这个领域的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Walk us through your formative years and how you got to get started in this field.</p>
</details>

**Jerry Tworek:** 好的，很乐意。有个有趣的事实，就像晶体的形成，始于一颗微小的晶核。我认为我人生旅程的起点有一个很重要的部分，但我不知道它源于何处，因为它从我生命之初就伴随着我，我甚至不记得它是什么时候开始的，它就一直在那里。我一直认为，成为一名科学家、从事科学研究是人类所能拥有的最高尚的追求。我真的不知道这个想法从何而来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Happy to do that. An interesting fact. It's almost like a crystal starts from something and you put a little bit something in the beginning. There's I think one part that was important and the starting point of my journey where I don't know where it came from because it was there with me from the very beginning of my life in a moment that I don't really know when it started. It just was always there with me. I always thought that being a scientist and doing science is the highest calling a human can have. And I don't really know where it came from.</p>
</details>

**Jerry Tworek:** 也许我一岁的时候，我父母给我唱的是关于科学的摇篮曲之类的。但基本上，从我记事起，我就想成为一名科学家。在早年，我也发现自己在这方面有天赋。我去上学，发现我比周围的人学东西快一些，至少在波兰中部的一所普通学校里是这样。这让我更喜欢做这些事，比如学习数学和科学，因为感觉很好，感觉这东西天生就适合我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My parents maybe were singing the light bright lullabies to me when I was one or something like that. But basically since I remember, I wanted to be a scientist. In the early years, I also discovered I have talent for those things. I was going to school and I saw I get things slightly faster than people around me, at least in a regular school in the middle of Poland, which made me kind of like doing those things like studying maths and science a little bit more because I felt it felt good in a way. It felt like this is something that naturally fit me.</p>
</details>

**Jerry Tworek:** 我像一个很普通的孩子一样长大，只是有点书呆子气，努力在对科学、编程、数学的兴趣和社交生活之间取得平衡。我的人生中确实有过一段派对时光。但我认为最重要的一刻是我上大学的时候，我去了华沙大学，并决定学习数学。在 18 岁左右，我的人生理想是成为一名数学家，拿着铅笔坐在一间屋子里，用一张纸解方程。这是我 18 岁时对生活应有样子的梦想，也是我一生想做的事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I grew up as a very regular kid, just being a slightly nerdy guy and trying to balance my side of being interested in science, programming, maths and like having some social life. And I definitely have had some kind of party arc in my life. But I think the most important part and moment was when I actually went to university, college, University of Warsaw is where I went, and I decided again to study mathematics. At around that time of being 18, my idea of life was to be a mathematician with a pencil sitting in a room with a piece of paper and solving equations. This is kind of my 18-year-old dream of how life should be lived and what I want to do in my life.</p>
</details>

**Jerry Tworek:** 我的个性中确实非常欣赏严谨的科学、对真理的追求、卓越的工程以及所有这些方面，但同时我也有点不合群、叛逆的倾向。在学习了几年数学之后，我意识到我真的很喜欢数学，而且我做得还不错，但我不太喜欢学术界。我发现我不想留在学术界，不想待在大学里，那不是一个能让我长期感到快乐和融入的环境。它感觉有点太僵化，太结构化，我不确定自己是否会感觉良好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my personality is built again in a way of really appreciating solid science, pursuit of truth, great engineering, and all those aspects, but I definitely have also a little bit of a misfit, kind of rebellious tinge to it. And that resulted after a few years of studying mathematics. What I realized about myself and about the world is that I really like maths and I am quite good at it, but I didn't like academia that much. And I realized I don't want to stay in academia. I don't want to stay in university and that this would not be an environment where I thought I would be long-term very happy and fit in. It felt a little bit too rigid, a little bit too structured in a way that I kind of didn't know if I will feel good.</p>
</details>

**Jerry Tworek:** 对于当时 21 岁左右的年轻的我来说，那是一次相当大的信仰危机。我一度失去了人生的目标。于是我做了一次非常简单的第一性原理思考：我毕业于数学专业，我需要找份工作来糊口，我能做什么工作来运用数学呢？看看当时的就业市场，大概是 2010 年或 2011 年左右，我决定成为一名交易员，以交易为生，这是我能将我喜欢的数学和我职业结合起来的一种方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in some way, for young me, I was around 21 years old at that moment, that was a pretty big crisis of faith for me. I had a moment of lost purpose of life. So I just did a very simple, first principles thinking. I am graduated with a degree in mathematics. I need to get a job to get food. And what job can I do to use mathematics in that job? And looking at the job market at that moment, it was like 2011 I think, or around 2010 somewhere around that, I decided to become a trader and trade for a living as the one way where I can do what I like, which is mathematics, and get a career.</p>
</details>

**Jerry Tworek:** 我在摩根大通投资银行的股票衍生品部门的交易大厅里快速实习了六个月，学习了交易是如何运作的。完成学业后，我收到了摩根大通我老板的老板发来的一条信息，说：“嘿，Jerry，你是我见过的最优秀的实习生之一，我们非常喜欢和你一起工作。我们正要离开银行，创办一家新的对冲基金，你愿意和我们一起来吗？”对于 21 或 22 岁的 Jerry 来说，这听起来像是一场很酷的冒险，我很感兴趣。它有足够多有趣的难题需要解决，同时又带有那种我通常喜欢的新尝试和雄心勃勃的赌注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got a quick internship at JPMorgan investment bank trading floor in the equity derivatives group, spent six months there learning a little bit how trading works and what it looks like. A little bit finished my degree. I got a message from the boss of my boss at JPMorgan saying, "Hey Jerry, you were one of our best interns ever that we had. We really, really liked you working with us, and we are leaving the bank and starting a new hedge fund. Would you want to come with us?" And for 21 or 22-year-old Jerry, that sounded like a cool adventure type of story that I was interested in going there and doing. It had enough interesting problems to be solved and at the same time it had this kind of trying something new, trying something ambitious kind of bet that I generally like.</p>
</details>

**Jerry Tworek:** 我当时在伦敦。不幸的是，那家公司没有成功，但那是一次艰难而雄心勃勃的尝试，并非所有事情都能成功。我再次尝试，和另外几个人在阿姆斯特丹从零开始创办了另一家对冲基金。我在那里工作了几年，但最终我感到厌倦了。总的来说，在交易行业工作是一个有趣且令人兴奋的挑战，市场非常复杂，你可以深入研究以试图理解和建模。我和一些非常聪明的人一起工作，但做了几年后，我感觉自己不再成长了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was in London. That company didn't really work out, unfortunately, but it was hard and ambitious, and not everything works out. I did try that again, starting another hedge fund from scratch with a few other people in Amsterdam. I worked there for a few more years and eventually, I got bored. Generally, working in trading is an interesting and exciting problem. The market is very hard, and the depth of what you can go to try to understand it and model it is very deep, and I worked with pretty smart people overall. But I stopped feeling I am growing after a few years of doing that.</p>
</details>

**Jerry Tworek:** 与此同时，我和一位朋友同事开始聊起 AI。真正吸引我的是**强化学习**（Reinforcement Learning: 一种机器学习方法，通过奖励期望的行为和惩罚不期望的行为来训练智能体），特别是 DeepMind 在 2013 年左右训练的 **DQN** (Deep Q-Network: 深度Q网络，一种结合了深度学习和Q学习的强化学习算法) 智能体，尽管我是在几年后才了解到这些成果的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at the same time, together with a friend I was working with, we just started chatting about AI and about this artificial intelligence. And what really drew me to artificial intelligence was reinforcement learning, and specifically the DQN agents trained by people in DeepMind in like 2013, but I think it was a few years later that I actually learned about those results from my perspective.</p>
</details>

**Jerry Tworek:** 从我的角度看，2012 年的 ImageNet 成果并没有那么重要。在大学期间，我学了很多关于经典 AI 的知识，那时神经网络还不是很流行，但我仍然了解它们是什么。我学过支持向量机（SVM）和各种训练分类器的方法。对我来说，这似乎是显而易见的：如果你有足够多的参数并努力调整，你就能让一个分类器拟合任何你想要的数据。这很直观。但我从未认为分类器是智能的。分类器只是学习一个从输入集到输出集的函数。我们可以不断训练它以更好地逼近。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again, this is just how my brain works. The 2012 ImageNet results weren't that significant. During my university years, I learned a bunch about classical AI. The neural networks weren't very fashionable back then, but I still learned about what they are. I learned about SVMs and all kind of methods, how you train classifiers. And for me, it was kind of obvious and natural. If you have enough parameters and tweak it hard enough, you will fit a classifier to whatever you want. It was kind of obvious. What was to me not obvious is I never considered classifiers a smart thing. A classifier is you learn a function on some set of inputs to some set of outputs. We can keep training it to approximate better and better.</p>
</details>

**Jerry Tworek:** 我当时忽略的一点是，当你能越来越好地拟合任何函数时，你就可以开始塑造行为和策略。我真正看到这一点是在 DQN 的成果中，他们将那些在 ImageNet 上奏效的东西——神经网络（而且还不是特别大或令人印象深刻的神经网络）——与经典的强化学习领域结合起来，去解决简单的电脑游戏。结果发现，这些简单的神经网络和一个简单的学习算法，开始学会了玩相当复杂的电脑游戏，并展现出非常有趣的行为。我看到了那些行为，看到了那些结果，然后我就想：“这就是我余生想做的事。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I missed back then is that when you can fit any function better and better, you can start shaping behaviors and strategies. And what I really saw that was in the DQN results where they applied the same things that worked in ImageNet, like neural networks, and they weren't particularly big or impressive neural networks, with a classical field of reinforcement learning to solve simple computer games. And it turns out those simple neural networks with a simple learning algorithm started learning pretty complex computer games and exhibiting very interesting behaviors. I saw those behaviors, I saw those results, and I was like, this is what I want to do for the rest of my life.</p>
</details>

**Jerry Tworek:** 对于一个二十多岁的人来说，这不算是一个很长远的规划，但当时我就想：“这就是我想做的事。我在哪里可以做这个呢？” 我用谷歌搜索了一下，世界上能做强化学习的地方，基本上就是 Google DeepMind 和 OpenAI。OpenAI 当时还是一家规模很小、有些名气但还不太为人知的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is not a very long horizon for what a twenty-something thinks about, but I was like, this is what I want to do. Where do I do that? Google search, where are places where you can do reinforcement learning in this world? Google DeepMind and OpenAI came up, which was at that moment a pretty small and somewhat known, but they were...</p>
</details>

**Matt Turck:** 是的，你是在 2019 年加入 OpenAI 的，对吧？所以还非常早期，很大程度上还处于非营利组织的时代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you joined OpenAI in 2019, right? So, very much in the early days still, very much in the kind of nonprofit era. Yes.</p>
</details>

**Matt Turck:** 你是怎么和他们联系上的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of OpenAI. How so? How did you connect with them?</p>
</details>

**Jerry Tworek:** 我就是通过网站申请的。这是世界上最无聊、最没意思的方式了，就是去 openai.com/jobs，申请，发送简历，然后希望他们会回复。幸运的是，他们回复了。我不知道当时 OpenAI 收到了多少份简历，肯定比现在少得多。但我当时就想，没关系，只要是做强化学习，我做什么都行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just applied through the website. The most boring and uninteresting thing in the world, which is like, you know, openai.com/jobs, apply, send resume, and hope they respond. And then, you know, luckily enough, they did. I don't know how many résumés OpenAI was getting at that time. I think it's definitely much less than today. But I was like, no, that doesn't matter what I do as long as it's reinforcement learning.</p>
</details>

### OpenAI 内部探秘：专注、透明与协作的文化

**Matt Turck:** 你在 2019 年加入，带着对强化学习的热情。那是不是在 Dota 2 项目的时期？因为有趣的是，在 2019 年的早期，OpenAI 做了很多专注于强化学习的工作，对吧？然后才是后来整个无监督学习和 GPT 的时代。但它的根源是强化学习，对吗？你参与了那个具体的项目吗？还是等你加入时项目已经太后期了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you joined in 2019 with a passion for reinforcement learning. So was that around the Dota 2 moment? Because OpenAI, interestingly, in those early days of 2019 did a lot of reinforcement learning-focused work, right? And then there was a whole unsupervised learning GPT moment that happened afterwards, but it started from roots in reinforcement learning, right? So did you work on that project specifically or was it too advanced by the time you showed up?</p>
</details>

**Jerry Tworek:** 我当时参与的是 OpenAI 的机器人项目，它和 Dota 项目共享同样的代码和方法。一方面，Dota 项目是 OpenAI 向世界展示规模化强化学习能力的方式。在某种程度上，它就像是把 2013 年的 DQN 智能体拿过来，然后做所有艰苦的工作，让它变得越来越大，解决越来越难的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the project that I worked on was the robotics project at OpenAI, which shared the same code and same methods as the Dota project. In one hand, the Dota project was OpenAI's way to demonstrate to the world what scaling up reinforcement learning can do. And in some way, it was like taking the 2013 DQN agents and just doing all the hard work of making it bigger and bigger and solving harder and harder problems.</p>
</details>

**Jerry Tworek:** OpenAI 从一开始就意识到并且真正领会了一个简单但天才的洞见：你需要大规模的系统才能学到真正有趣和复杂的行为。Dota 项目就是想证明这一点，通过扩大强化学习的规模，我们可以解决非常复杂的环境。当时 OpenAI 还有另外一个项目，我想到那时大概有三个强化学习项目。第二个就是机器人项目，它应用了我们当时已知或正在证明可以解决复杂电脑游戏的方法，来看它们是否能解决实际问题。OpenAI 一向乐观且雄心勃勃，试图看看我们能否将规模化应用到解决实际问题上。它能帮我装洗碗机吗？能帮我叠衣服吗？能盖房子吗？这就是我们当时在做的事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And OpenAI generally from the very beginning was aware and really, it was a simple but genius insight that you need to have large-scale systems to learn really interesting, complex behaviors. And that was one way of what Dota was trying to show: that by scaling up reinforcement learning, we can solve pretty complex environments. And then there was another project, or I think three reinforcement learning projects at OpenAI at that time. And the second one was robotics, which is applying the same methods that we now knew or were proving that can solve pretty complex computer games. Can they solve practical problems? OpenAI was always optimistic and ambitious and trying to see if we can scale around to solve time. Can it load my dishwasher? Can it fold my clothes? Can it build a house? And this is what we were doing.</p>
</details>

**Jerry Tworek:** 我参与的项目专注于灵巧操作，这在当时，并且至今仍然是训练策略的一个难以捉摸的挑战。我们最终展示了一个由神经网络控制的手能够解开魔方，这是一项相当精细和复杂的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The project I was working on was focused on dexterous manipulation, which was back then and still continues to be an elusive challenge for trained policies. And we got to a showcase of demonstrating that a hand controlled by a neural network was able to solve a Rubik's cube, which is a pretty delicate and complex task to do.</p>
</details>

**Matt Turck:** 快进到今天，仍然是关于 OpenAI 幕后以及你们生活的话题。Jerry 的一天是怎样的？像你这样的人都做些什么？你是读论文、训练模型，还是管理团队？一天是怎么过的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So fast forward to today, still in the same vein of the behind the scenes of you all at OpenAI and sort of life there. What's a day in the life of Jerry like? What does somebody like you do? You read papers, you train models, you manage teams? Like what's a day like?</p>
</details>

**Jerry Tworek:** 我的日子惊人地统一。我送孩子上学后，一早就到办公室。然后我一整天做的事情基本上就是和其他研究员交谈。我每天、一整天都在和其他研究员交谈。这几乎是我做的全部事情。我从人们那里获取想法，和他们交流，和一个伙伴进行头脑风暴，然后转向另一个伙伴，一遍又一遍地做同样的事情，不断迭代。通过这种方式，我们不断完善我们的研究计划。有时也会有小组会议，小组会议也有其团队动态，但基本上这就是我做的全部。唯一变化的是每次会议、每个人之间的研究主题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, my days are surprisingly uniform, which is I come to the office early in the day after driving my kids to school. Then what do I do all day is basically talk to other researchers. I talk to other researchers all day, every day. And this is basically exclusively what I do. I take ideas from people, bounce with them, brainstorm with one partner, then move to another one and do the same thing over and over and iterate. And in that way, keep refining our research program. Sometimes those are group meetings, and group meetings are there as well and have their own team dynamics, but that is basically exclusively what I do. The only thing that changes is the topics of research from meeting to meeting and from person to person.</p>
</details>

**Matt Turck:** 研究的优先级是如何确定的？在众多可能的项目中，是自上而下决定的，还是自下而上？是有人提出想法，然后由其他人审核吗？这个流程是怎样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How are priorities in research determined? This range of possible projects. Is that top-down? Is that bottoms-up? Do people suggest ideas and others vet them? How does that work?</p>
</text>

**Jerry Tworek:** 是的，构建、组织和领导一个研究项目的艺术，是我在 OpenAI 的旅程和职业生涯中很快就学会欣赏的东西。我们擅长构建研究项目，我认为这是一种独特的混合体，你不能说它是自上而下的，也不能说是自下而上的。它是两者的结合，平衡了所有重要的方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. The art of structuring, organizing, and leading a research project is something that I generally learned to appreciate very quickly in OpenAI's journey and in my career. There is something we are good at is structuring research projects, and I think it's a unique mix. You cannot say it's top-down, you cannot say it's bottom-up. It's a mix of those two, which is balancing all the important aspects.</p>
</details>

**Jerry Tworek:** OpenAI 体现并决定的一件事是，我们所有人都只专注于极少数的项目。OpenAI 的项目总数并不多，我们不试图做所有事情，也不试图建立一个投资组合。我们的想法始终是，把少数核心事情做得非常好，并投入大量精力。这意味着需要很多人在同一个大规模、雄心勃勃的项目上共同工作。我们有几个这样的项目，数量很少，大概三到四个，取决于你怎么定义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing OpenAI embodies and determines is like we all work on a very few projects total. There are not that many projects. OpenAI is not trying to do everything. We are not trying to have a portfolio. We are trying to have multiple different bets. Always the idea is we do a few core things really, really well and put a lot of effort there, which means there needs to be a lot of people working together on the same large-scale, large-ambition project. And we have a few of those, a small number, probably three or four, depending on how you call it.</p>
</details>

**Jerry Tworek:** 从这个角度来看，人们没有绝对的自由。不是说人们来到 OpenAI 说“嘿，我想做这个”，然后他们就去做。你必须做一些有助于实现这四个项目之一目标的事情。然后在这些项目内部，只要它符合项目目标，我们尽量做到相对自下而上。研究负责人的最重要职责就是确保所有研究人员都朝着一个共同的目标努力，而不是在思维和做事方式上各自为政。这是一件极其困难的事情，一份非常非常艰难的工作，而且它的微妙之处并不总是那么容易被看到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And from that perspective, people don't have ultimate freedom. It's not that people come to OpenAI and say, "Hey, I want to do this," and they just do this, because you need to do something towards the goal of one of those four projects. And then within those projects, we try to be relatively bottoms-up in a way, as long as it feeds again into those goals. And the most important part of the research lead is to keep making sure all the researchers are working towards this one shared goal and that they don't fracture in their own ways of thinking and doing things. And it's an incredibly hard thing. It's a very, very hard job and not always easy to visible how delicate it is.</p>
</details>

**Jerry Tworek:** 我不认为自上而下的研究结构在研究组织中行得通，我真的不相信。因为你雇佣了世界上一些最聪明的人——OpenAI 有着令人难以置信的聪明人——不是为了告诉他们该做什么。他们需要自己弄清楚该做什么，但他们不能在所有可能的事情中去寻找酷炫的事情来做。他们需要在项目所需和最能推进 OpenAI 研究目标的范围内去寻找。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that's a lot of what it is. I don't think top-down structuring of research works in research organizations. I really don't believe in it because you are not kind of hiring some of the smartest people in the world, and OpenAI has incredibly smart people, to tell them what to do. They need to figure out what to do, but they cannot figure out in the whole space of things what are cool things to do. They need to figure out from within the space of what the project needs and what could advance the research goals of OpenAI the most.</p>
</details>

**Matt Turck:** 那么，同时进行的三四个项目团队之间有协作吗？因为我想象，如果我站在你的立场，OpenAI 的立场，可能会有一种矛盾：一方面希望普遍协作，但另一方面，这可能是世界上最重要的知识产权（IP），所以你可能想确保不是每个人都知道所有事情。当然，也许不是这样，我只是猜测。你如何看待协作与 IP 保护之间的关系？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to what you're saying, is there collaboration between the teams working on the three or four projects at the same time? Because I would imagine, putting myself in your shoes, OpenAI's shoes, there is probably a tension between wanting to be collaborative in general but equally, this is probably the most important IP in the world. So you probably want to make sure that not everybody knows everything about everything. Well, perhaps not. I'm speculating here. How do you think about that collaboration versus some protection of IP?</p>
</details>

**Jerry Tworek:** 你可能会感到惊讶，但事实是，在 OpenAI 的研究部门，目前大约有不到 600 人，每个人都知道所有事情。真的，我们一直都是完全透明的。在某种程度上，如果有一个研究员没有机会了解所有事情，你其实是在自断手脚，因为他们没有最好的信息来以最佳方式完成工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You'd be surprised, but the truth is in research at OpenAI, which is around slightly less than 600 people at the moment, everyone knows everything. Really, it does. And we always have been fully transparent. And it is like, in some way, you are a little bit shooting yourself in the foot if there is a researcher that doesn't at least have the chance to learn about everything, because they don't have the best information to do their job in the best way.</p>
</details>

**Jerry Tworek:** 是的，这确实存在一些失去 IP 的风险，但我个人认为，不去做正确的事情、人们不了解研究进展、无法做出最好研究的风险要高得多。所以我们在研究内部是极其透明的，这是我们的运营原则之一，因为目标是尽我们所能做最好的研究，并训练出最好的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it is some risk of losing IP, but I think the risk of not doing the right thing and of people not being informed about research and not being able to do the best research is much higher in my personal opinion and how I approach those things. So we are extremely internally transparent within research, and that is one of our operating principles, as the goal is to do the best research we can and consequently train the best models we can.</p>
</details>

**Jerry Tworek:** 总体而言，我们的文化非常协作。当然，当你有 600 人的时候，总会有这样的情况：一个人不喜欢另一个人，因为对方看他的眼神很奇怪，或者一个人觉得另一个人身上有味道，或者就是不喜欢对方的想法。这些都会发生，这是人性。但从大局来看，我们真的相信我们同舟共济，这个事业比我们任何一个人都重要。这是一个非常正和的游戏，因为 AI 似乎只会变得越来越重要，而 OpenAI 的成功远非板上钉钉。它取决于我们每天都做出色的工作。所以大家有一种强烈的命运共同体的感觉，我们都需要相互依赖来完成我们的工作，以实现这个共同的使命。因此，总的来说，我认为尽管人性有时会带来一些小插曲，但在宏观层面上，OpenAI 是非常非常协作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the culture generally is very collaborative. Like, you know, it is always the case when you have 600 people, when you have groups of people, there's always one person doesn't like the other person because they looked at them weirdly or one person thinks the other smells bad or just doesn't like their ideas. Like that does happen, those are humans and those are human things. But generally, in large scale, I think we really have this belief, we are together in this, it's larger than every one of us. It is a very positive-sum game because the AI seems to be getting only more and more significant, and the success of OpenAI is far from guaranteed. It depends on us doing great work every day. So there's a lot of feeling of shared fate and the fact that we all need to rely on each other to do our job to achieve this shared mission. So I generally think with all the caveats of human nature getting in the way sometimes, I think on a large scale, OpenAI is very, very collaborative.</p>
</details>

**Matt Turck:** 你们是如何保持这种发布节奏的？从外部看，我觉得在研究和发布之间存在一种张力。研究在某种程度上感觉像是一件长期的事情，但另一方面，你们似乎一直在不断地发布产品，整个组织都是如此，包括核心模型。就像你说的，你们在一年内就从 O1、O3 发展到了 GPT-5。你们是如何平衡这一切的？为什么你们能这么快地发布产品？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you all manage to keep that pace of releases? Like it seems to me from the outside that there's a tension again, between another kind of tension, between research, which in some ways feels like it could be a long-term kind of thing. And on the other hand, you guys seem to be just shipping and shipping and shipping and shipping across the organization, but including in terms of core models. Like again, to the point that you went from O1, O3 to GPT-5 in like a year. How do you balance all of that? Like why are you guys able to ship so quickly?</p>
</details>

**Jerry Tworek:** 我认为根本原因在于，至少在我的世界观里，OpenAI 是一家划时代的公司。我们背后有巨大的势头。我们知道我们过去做得很好，我们需要继续保持。我们有非常聪明的人，毫不夸张地说，世界上最有才华的人现在都想来 OpenAI 工作。这意味着每个人的产出都非常高，每个人都做了大量的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that the fundamental reasons for it is in general OpenAI, kind of in my worldview, is a generational company in a way that we have incredible momentum behind us. We know that we were doing pretty great in the past and we need to continue that. We have incredibly smart people, like literally the most talented people in the world are all coming and want to work at OpenAI right now, which means every output per single person is incredibly high and everyone really, every single person does a whole lot.</p>
</sdetails>

**Jerry Tworek:** 所以，我们有推动我们前进的势头，有协同工作的优秀人才，有良好的研究组织方式，并且可以从硅谷借鉴很多关于如何快速完成任务的经验。人们对工作普遍充满热情。每个人都感受到了我们正在做的事情的份量和潜力。因此，OpenAI 的人倾向于非常努力地工作。然后，当你有优秀的人才，对他们正在做的事情充满热情，并且能够相当好地协同工作时，结果就是能做成很多事情。我们明白，历史上只有这么一次机会，AI 正在被构建、部署和发展，人们希望以最好的方式来完成它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have a momentum that carries us forward. We have really great people that work together. We have a good operating way of structuring research and can borrow a lot from Silicon Valley how to get things done quickly. And people are generally very excited about work. Everyone feels the weight and potential of what we are doing, what we are trying to do, and because of that, people at OpenAI have a tendency to work pretty hard. And then, having great people excited about what they are doing, all working together reasonably well, results in doing a lot of things. We understand that there's only one time in history where AI is being built and deployed and developed, and people want to do it in the best way that is possible.</p>
</details>

### 预训练与强化学习：现代 AI 的两大支柱

**Matt Turck:** 谢谢你分享的这一切。让我们转换一下话题，回到这一切是如何运作的。对于 OpenAI 的现代 AI 系统——我说的“现代”是指截至 2025 年 10 月，相对于 9 个月前的“旧时代”——正确的理解方式是预训练和强化学习（RL）的结合吗？首先，这是正确的思考方式吗？其次，如果是，从宏观层面看，这两者之间的衔接是如何工作的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you for all of that. Let's switch tags and go back to how all of this works. So is the right way to think about modern AI systems at OpenAI, by modern I mean as of October 2025 versus the old days of, you know, 9 months ago. So is the right way to think about it as a combination of pre-training and RL? First of all, is that the right way to think about it? And second, if so, just at a high level, how does the articulation between both of those work?</p>
</details>

**Jerry Tworek:** 今天的语言模型基本上可以被认为是先进行预训练，然后在其上进行强化学习。没有预训练，强化学习就行不通。同样，我认为预训练模型有很多局限性，如果不做一些类似强化学习的事情，就很难解决。所以我认为这两个部分都会继续存在。它们如何结合和运作的方式可能会，而且很可能会在未来演变。任何事情都不应被视为教条和固定不变的，我们需要不断找出训练更好模型的方法，这也是我们正在努力做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's language models can basically be thought of as first they are pre-trained, then you do reinforcement learning on it. The reinforcement learning would not work without pre-training. And I think in a similar way, pre-trained models have a lot of limitations that are very hard to resolve without doing something that looks like reinforcement learning. So I think both of those bits are here to be and to stay. I think the way how they are combined and do may and probably will evolve in the future. Nothing should be treated as dogmatic and fixed, and we need to keep generally figuring out the way how to train better models, and this is what we are trying to do.</p>
</details>

**Jerry Tworek:** 有趣的是，我得把这归功于 Ilia（Sutskever）的远见。我记得 2019 年初刚加入 OpenAI 时，有一次研究全体会议，Ilia 上台谈论 OpenAI 的研究计划，我们打算追求什么。他在 2019 年初说的是：用我们能找到的所有数据训练一个大型生成模型，然后在其上进行强化学习。这就是 2019 年初 OpenAI 的研究计划，也正是我们今天在做的事情。算法变了，架构变了，我甚至不认为他当时在考虑 Transformer。那时虽然有 GPT，但更像是一个有人在玩的玩具。但那个目标——训练一个基于全世界所有数据的大型生成模型，然后用强化学习来优化它——已经深深植根于 OpenAI 的核心 DNA 中了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The interesting thing, and you know, I can credit that to Ilia, how much foresight that he had, but whenever I started at OpenAI in early 2019, I remember there was a research all-hands or something like that where Ilia came on stage and talked about what is OpenAI's research program, what are we trying to pursue. And what he said at the beginning of 2019 was to train a large generative model on all data we can and then do reinforcement learning on it. That was the OpenAI research plan at the beginning of 2019, and this is exactly what we are doing today. The algorithms change, architectures change. I don't think he was even thinking about Transformer at that moment. The GPT was, there was some GPT, but it was like a toy example that someone was playing with. But the goal of training a large generative model on all the data in the world and then doing reinforcement learning with it was already there at the core DNA of OpenAI.</p>
</details>

### 强化学习 101：从“训练小狗”到 RLHF

**Matt Turck:** 那么，我们来做一个强化学习 101 的科普，让更广泛的听众都能感兴趣。用非常简单的术语，就像给我一个 10 岁的孩子解释一样，什么是强化学习？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's do a little bit of reinforcement learning 101 to make this really interesting to a broad group of people listening to this. So in very simple terms, like explain it to me like I'm 10. What is reinforcement learning?</p>
</details>

**Jerry Tworek:** 我通常用来比喻和类比强化学习的是“训练小狗”。这非常非常接近。我十几岁的时候养过一条狗，我甚至记得我父母当时的做法。我当时对养狗一窍不通，他们通过朋友的朋友请来了一位消防员，他好像是和工作犬打交道的。他来告诉我一些如何训练狗的知识。大多数对训练狗有抱负的主人都知道，口袋里随时备着一袋零食是极其重要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I usually the metaphor and the analogy I have to reinforcement learning is like training a dog. It's very, very close. I used to have a dog when I was a teenager, and even what I remember my parents did, I didn't know anything about raising a dog. What they kind of invited through some friend of a friend, a fireman who I think was working with service dogs, and he came to me and he basically told me a little bit about how do you train your dog. And what most dog owners that are ambitious about training their dogs know, it is always extremely important to have a bag of treats in your pocket. That's what you always do.</p>
</details>

**Jerry Tworek:** 每当你看到你的狗表现好时，你就应该微笑并给它一块零食。每当你看到你的狗做了坏事，你基本上就移开你的注意力，转过身去，变得不高兴。经过多年的驯养，狗已经知道这是一种负面反馈和不良行为的信号。我们对模型做的也完全一样。我们引导模型产生各种不同的行为，将它们置于具有挑战性的情境中，然后如果它们做了我们想要的事情，我们就给它们一块“饼干”。如果它们做了好事，就给奖励；如果它们做了我们不想要或不喜欢的事情，就给予某种惩罚或负面奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And whenever you see your dog behave well, what you should be doing, you should smile and you should give your dog a treat. Whenever you see your dog do something bad, you basically give your attention away, turn away, and become sad. And through the years of breeding, the dogs discover it's a bad reward and bad behavior. And this is exactly doing that, but with models. We elicit a lot of different behaviors in a model, put them in challenging situations, and then we give them a cookie if they do something we want. If they do a good thing, and give them some kind of punishment and negative reward if they do something that we don't want and that we don't like.</p>
</details>

**Jerry Tworek:** 做好强化学习的关键是平衡这两者。所以如果你能在一半的时间里给“饼干”，另一半时间进行惩罚，效果会很好。但这几乎是一个数学层面的问题。最重要的一点是：引导行为，奖励好的，然后模型在未来就更有可能做你想要的事，而更少可能做你不想要的事。通过这个过程，它不断进步。这是一种训练模型产生非预测性行为的方法。如果你预训练模型，你实际上是在训练它预测下一个词元。而强化学习则是一个完全不同的梯度，我们想从模型中得到完全不同的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In a good way, the good way to do RL is if you balance those things. So if you kind of give cookies half of the time and punish the other half the time. But this is almost like a mathematical kind of aspect of it. But that's the most important part, which is: elicit behaviors, reward the good ones, and then going forward, the model will be more likely to do what you want and less likely to do what you don't want. And through that, it improves. It is the way how to train models to elicit actual behavior that is not first, it's next to prediction. If you pre-train the model, you literally train the model to predict the next token. RL is like a completely different gradient, a completely different set of what we want to get out of the model.</p>
</details>

**Matt Turck:** 为了统一术语和语义，让模型做你想要的事，就是我们有时听到的“策略”（policy）这个词。在强化学习中，你会听到像智能体（agent）、环境（environment）、行动（action）、奖励（reward）和策略（policy）这些术语。我想其中很多都是不言自明的，但“策略”是什么？它是一种策略，是模型的行为吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And getting the model to do what you want, just for some vocabulary and semantics, that's you hear sometimes the term policy. So in RL you hear terms like agent, environment, action, reward and policy. So I think a lot of those are sort of self-explaining but policy is what? That's a strategy, that's a behavior of the model.</p>
</details>

**Jerry Tworek:** 是的，**策略**（Policy）就是模型的行为。模型的权重代表了它在不同情境下的行为。模型最终是一个数学对象，你可以定义它。而策略是一个数学函数，它将观察（observations）映射到行动（actions）——你看到了什么，然后根据你看到的去做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Policy is the behavior of the model, as the model weights represent what it does when put in a different thing. Like, a model in the end is a mathematical object, and you can define it. And policy is a mathematical function that maps observations to actions. You see what you see, and then what you do with what you see.</p>
</details>

**Matt Turck:** 这些年强化学习的演变是怎样的？现代强化学习与历史上的强化学习主要有何不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you give us a little bit of a bird's eye view of the evolution of RL over the years? What, you know, mostly how does modern RL differ from sort of historical RL?</p>
</details>

**Jerry Tworek:** 是的。历史上曾有过超级古老的强化学习，但主要的构造板块式转变是当神经网络与强化学习结合时发生的。强化学习作为一种在数学定义的环境中优化行为的通用数学方法，其历史早于神经网络。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Again, there was super historical RL, so not even that old, but the main tectonic shift was when combining neural networks with reinforcement learning. The reinforcement learning predates neural networks as a general mathematical method of optimizing behaviors in mathematically defined environments and as a method of study.</p>
</details>

**Matt Turck:** 这就是所谓的深度强化学习，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's what is known as deep reinforcement learning. Is that right?</p>
</details>

**Jerry Tworek:** 是的，然后就是深度强化学习，这基本上是 DeepMind 的发明，将神经网络与强化学习结合起来，也就是我跟你说过的 DQN 时刻。从那时起，有一段时间，强化学习在游戏领域是一个非常活跃的研究领域。甚至在我 2019 年刚开始的时候，强化学习在当时还挺时髦的，虽然不是很成功，但我们能够用它解决很多游戏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. Then the deep reinforcement learning, that basically DeepMind's invention of combining neural networks with reinforcement learning to the DQN moment I talked to you about. And then from there, there was a moment where there was a pretty active area of research of reinforcement learning on games. Like when even when I started in 2019, reinforcement learning was kind of fashionable at that moment, although not very successful, but we were, the reinforcement learning was able to solve a lot of games.</p>
</details>

**Jerry Tworek:** 但当时的瓶颈在于模型没有经过任何方式的预训练。我们训练了大量的行为来玩游戏，甚至还取得了 AlphaGo 的成就，这让很多人非常兴奋。但它仍然是在没有真正智能的模型基础上去学习行为。那些模型虽然经过了大量强化，但仍然有点像“穴居人智能”。那段时间有很多关于强化学习的研究，很多很酷的结果和理论理解都源于那个时期。但从某种意义上说，没有预训练的强化学习是一条死胡同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the bottleneck was there that the models were not pre-trained in any way. We were training a lot of behaviors playing games. We even got the AlphaGo moment out of that, which a lot of people got very excited about it, but it was still like learning behaviors without the models that were meaningfully smart about those behaviors. There was still a lot of kind of, you don't want to call it caveman intelligence, but something in that regard about models not being really smart even though being pretty heavily reinforced. And there was a long research in that, and a lot of cool results and theoretical understanding of RL comes from those days because people were researching RL actively. But in some way, it was a dead end of doing RL without pre-training.</p>
</details>

**Jerry Tworek:** 在我完成机器人项目后，我开始研究教语言模型编码，而拥有预训练模型是一个非常大的优势。GPT 时代的规模化和大规模数据摄取，使我们能够训练出非常棒的模型，这在当时就已经让我们能够开始进行强化学习了。这几乎是我在 GPT-3 训练完成后立即做的第一批事情之一，我尝试在它上面做强化学习。但总是有瓶颈，系统有点笨重，很难找出正确的算法、正确的问题以及正确的训练方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in my moment when I finished working on robotics, I started working on teaching language models to code, but having pre-trained models was a really big deal. And the GPT era of scaling and of large-scale ingesting lots of data to really train great models enabled us already at that moment to start RL. And that was one of the first things I did almost immediately whenever GPT-3 was trained, I tried to do RL on it. And there were always bottlenecks. The systems were kind of clunky. It was hard to figure out what are the right algorithms, what are the right problems to work on it, and what is the right algorithm to train it on.</p>
</details>

**Jerry Tworek:** 当时 OpenAI 的做法，也是研究的常态，就是我们“货物崇拜”式地借鉴了很多用于游戏和机器人的东西。我最早在大型模型上做的强化学习，用的就是我们用于所有东西的同一种 PPO 算法。它确实产生了一些结果，但早期的结果并不完全令人惊叹。有很长一段时间，我们一直在投资它，我个人一直相信强化学习和语言模型结合会有一个非常非常重要的时刻，但早期的试验和错误并不算非常成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what OpenAI did at that moment, and what's kind of how research goes, we kind of cargo culted a lot of things that were used for games and almost the same things for robotics. And at the first RL I was doing on large models was kind of the same PPO we used for everything. And it gave some results, but those early results weren't completely mind-blowing in RL. And there was a long time where we were keeping on investing in it, and personally I always believed there will be a really, really big moment for RL and language models, but the early trials and errors weren't super successful.</p>
</details>

**Jerry Tworek:** 直到我们训练 GPT-4 的时候，出现了一个有趣的时刻。我们训练了 GPT-4，今天每个人都觉得它是个很棒的模型，但当时我们内部其实挺失望的。有很多时刻我们觉得：“哦，我们训练了这个模型，花了很多钱，但它好像挺笨的。” 至少，我们已经有 GPT-3 了，它已经能做所有那些事了，而 GPT-4 似乎并没有好多少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the moment when we trained GPT-4, and there was an interesting moment where we trained GPT-4, and everyone today thinks, "Oh, GPT-4 is such a great model," but when we trained GPT-4, we were pretty underwhelmed internally. And then there was a lot of moments, "Oh, we trained this model, we spend a lot of money on it, and it's kind of pretty dumb." At least, we have GPT-3, GPT-3 already does all that stuff, and GPT-4 doesn't really seem to be that much better.</p>
</details>

**Jerry Tworek:** 我们当时面临一个问题：它在那些单步评估（evals）上看起来很聪明，似乎能对复杂问题给出非常详细的答案，只要答案只有一个词元。但如果你真的让它说得更长，它就不太连贯，或者给出的答案不是很好。我们需要回答这个问题：我们如何让一个看起来有点聪明的语言模型，真正听起来聪明，并且在对话中表现出色？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we had this kind of question, like, it kind of seemed smart on evals that were one token long. It seemed to be able to give pretty detailed answers to complex questions where it was one token. But if you actually let it speak for longer, it wasn't very coherent or really gave very long answers. And we need to ask this question: How do we actually make the language model that seems to have some smartness in its weights actually sound smart and actually be good in talking to it?</p>
</details>

**Jerry Tworek:** 那时，一项几年前就已经开发出来的技术真正大放异彩，那就是 **RLHF** (Reinforcement Learning from Human Feedback: 基于人类反馈的强化学习)，它基本上是在大型语言模型上进行 PPO，奖励则来自于人类对两段文本的偏好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that was the moment where a technique that was developed already a few years earlier really shone, which was called RLHF, which is basically doing PPO on large language models with the reward given from human preferences of seeing two parts of the text.</p>
</details>

**Matt Turck:** 就是点赞和点踩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thumbs up and thumb down.</p>
</details>

**Jerry Tworek:** 是的，点赞、点踩，无论人类的偏好是什么。这是一个非常好的奖励机制，因为模型生成糟糕文本的方式有很多种，早期的 GPT-4 就以多种方式生成糟糕的文本。而 RLHF 能够捕捉到这些问题并纠正它们，强化好的行为，强化生成好的文本，然后惩罚坏的文本。最终，GPT-4 加上 RLHF 这个组合，向世界呈现了每个人都看到的 GPT 时刻。这既是预训练的巨大成功，实际上也是强化学习以 RLHF 形式取得的巨大成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, thumbs up, thumbs down, whatever human preference is. That's a very good reward because there are a lot of things how the model can generate bad text, and how early GPT-4 was generating bad text in a lot of ways. And RLHF was able to catch those things and correct it, and you know, reinforce good behaviors, reinforce generating good text, and then punishing bad text. And in the end, GPT-4 plus RLHF together as a package delivered the GPT moment to the world that everyone sees. And as much as it is a big success of pre-training, it actually also was a pretty big success of RL in the form of RLHF.</p>
</details>

### 规模化强化学习的挑战与智能体未来

**Matt Turck:** 好的。那么回到强化学习。你前几天发推说，“GRPO 的发布在很大程度上加速了大多数美国研究实验室的强化学习研究计划。” 那么，GRPO 是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Great. All right. So going back to RL, you tweeted the other day, "The GRPO release has been in a large way, has accelerated the research learning program of most US research labs." So what is GRPO?</p>
</details>

**Jerry Tworek:** 嗯，那条推文有点开玩笑的成分，我在这里也做了一些推断，因为我并没有去过大多数美国的研究实验室，但我对发生的事情有一个心智模型。长话短说，GRPO 是 DeepSeek 的一个开源版本。每个长期在线并关注 AI 讨论的人都知道 DeepSeek 的那个时刻，当时这家似乎做得非常出色的中国公司发布了一款新模型，它也是一个预训练的推理模型。他们开源了算法，开源了很多他们做的事情，总的来说是一次非常棒且技术上很出色的发布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, yeah, it was a little bit of a tongue-in-cheek moment. And I am extrapolating here a little bit what exactly happens because I haven't been in most US research labs, but I have some mental model of what happened and how. And long story short, GRPO was the open source release from DeepSeek. And there was a, like everyone who is terminally online and follows AI discourse knows that DeepSeek moment of whatever it was when the Chinese company that seems to be doing really, really great work released a new model, and it was also a pre-trained model, a reasoning model. They open-sourced the algorithm. They open-sourced a lot of things they did. Overall, a really, really great and technically excellent release.</p>
</details>

**Jerry Tworek:** 当时有很多关于他们以特别低的成本预训练模型的讨论，这是 DeepSeek 时刻讨论的一部分。但另一部分讨论是，他们发布了他们的推理过程。那是在我们发布 O1 后不久。据我所知，我们的 O1 发布让很多美国实验室措手不及。据我所知，他们当时没有类似先进的强化学习研究计划，基本上一个都没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there was a lot of discourse about that they pre-trained their model particularly cheaply, and that was part of the discussion about the DeepSeek moment. But the other part of the discussion was that they released their reasoning process. It was like not very far after our O1 release. And as far as I know, our O1 release mostly caught a lot of US labs by surprise. They didn't have a similarly advanced RL research program, to my knowledge. Basically no one.</p>
</details>

**Jerry Tworek:** 我所知道的是，世界上唯一一家公司，当然我可能不知道很多事情，但你有时会和人交谈，听到一些传闻。所以我的世界观是，如果你看 DeepSeek 的其他论文，那家公司在某些方面做的强化学习研究和我们正在做的非常相似。我必须澄清，OpenAI 做的并不完全是 GPO，在很多方面略有不同，但某些部分肯定是相似的。最重要的是，它们都是大规模的策略梯度算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think the only company in the world that I am aware of, and there's probably a lot of things I didn't know, but you talk to people, sometimes you hear rumors. So this is my version of the world, is that if you look at the other papers of DeepSeek, that company was doing pretty similar, in some ways, RL research to what we are doing. And I have to clarify, what OpenAI is doing is not exactly GPO, it is slightly different in many different ways, but some parts are definitely similar. And what's most important, those are both like large-scale policy gradient algorithms.</p>
</details>

**Jerry Tworek:** DeepSeek 这家公司在一个稍微相邻的领域进行研究，他们离得不远。当我们发布 O1 并告诉世界，通过在语言模型上扩大强化学习的规模可以获得非常好的结果时，我认为 DeepSeek 公司很快就意识到，他们离获得同样好的结果不远了。他们做到了，他们训练了自己的推理模型，并发布了它，并且在我们发布 O1 后不久就告诉了世界他们是怎么做的。我认为，对于很多还没有研究计划如何训练推理模型的美国研究实验室来说，他们看到：“哦，有家中国公司，他们发布了怎么做的方法。” 这帮助他们更快地启动和训练推理模型，比他们自己摸索所有细节要快得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And DeepSeek was doing, the company was doing research in a slightly adjacent area. They were not very far. And whenever we released O1 and we told the world that you can get pretty great results with scaling up reinforcement learning on language models, I think it was not a very big hop for the DeepSeek company to kind of realize, "Okay, we are not very far from getting similarly good results." And they did it. They trained their reasoning model and they released it, and they told the world how, pretty much not very much later than we released O1. And I think for a lot of US research labs that didn't yet know, didn't have a research program how to train reasoning models, they looked, "Oh, there's this Chinese company, they released how to do it." It helped us kickstart and train reasoning models much faster than we would have to otherwise if we would have to find all those bits ourselves.</p>
</details>

**Matt Turck:** 规模化强化学习需要什么？如果说 OpenAI 有一个阶段非常专注于预训练，然后，如果我理解正确的话，过去 12 到 18 个月或者某个时间段，重点放在了计划的第二部分，也就是规模化强化学习。这仅仅是给强化学习更多计算、更多数据、更多标注的问题吗？需要什么条件？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What does it take to scale RL? So if there was a phase where OpenAI was very focused on pre-training, and then if I understand correctly, the last 12-18 months or whatever time period where the emphasis has been on the sort of second part of the plan, which is scaling RL. Is that a question of just giving RL more compute, more data, more labeling as we were saying? What does it take?</p>
</details>

**Jerry Tworek:** 首先需要知道和理解的是，强化学习很难。从概念上讲，如果你思考一下，它仍然有很多深度，但从概念上、数学上讲，预训练是极其简单的。它几乎是你能做的最简单的事情。而且，经过几年的优化，人们已经投入了大量的思考和优化，以便在非常大的规模上非常好地执行这个非常简单的数学运算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first thing that is important to know and understand is RL is hard. Conceptually, if you think about it, and there's still a lot of depth to it, but conceptually, mathematically speaking, pre-training is dead simple. It is the kind of the simplest thing you can do. And there has been a lot of thought and a lot of optimization already put through a few years of optimizing and doing very well at very large scale a very simple mathematical operation.</p>
</details>

**Jerry Tworek:** 而在强化学习方面，它要复杂得多。在一个强化学习的运行中，有更多的事情在发生，有更多可能出错的地方，尤其是在你扩大规模的时候。有更多类型的瓶颈、失败。它是一个更精细的东西，有更多的出错空间。在某种程度上，我不想过分深入这个比喻，因为它有点夸张，但为了给你一些感觉，你可以把预训练比作一个钢铁厂，它生产钢铁，过程相对标准化，你生产出统一、漂亮的钢块，定义明确。而强化学习则像是制造半导体，世界上只有极少数公司能做到，因为有太多可能出错的地方，你必须非常注重细节才能制造出优质的半导体，它内部非常非常复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In terms of RL, it is much, much more complex. There are many more things going on in a reinforcement learning run. There's many more things that can go wrong in doing it, especially as you scale up, and many more types of bottlenecks, failures. It's a much more delicate thing and there's much more room for error. In some way, I don't want to go too deeply in the parallel because it's a little bit overblown, but in some way, just to give some coincidence, you can have a steel factory which makes steel, and the process is relatively standardized, and you make blocks of steel and they are uniform and nice and well-defined what it is, versus like building semiconductors, which there are very, very few companies in the world that can do it because there are so many things that can go wrong and you have to put a lot of attention to details to make great semiconductors, and it's very, very complex internally.</p>
</details>

**Jerry Tworek:** 在很多方面，这有点像。我不想贬低预训练，因为在大规模上做好预训练也有很多非常困难的技术难题。但强化学习的堆栈中有更多的活动部件，更多的元素需要正确处理，才能成功地进行大规模运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in many ways, this is kind of like, I don't want to diminish because there's a lot of very hard technical difficulty to do pre-training well at a large scale. But there's just many more moving pieces and many more elements of the reinforcement learning stack that need to get right to get a large-scale run successful.</p>
</details>

**Matt Turck:** 你提到了智能体（agent），比如智能体 AI。这一切是如何融合的？工具使用、智能体自主性与推理、强化学习之间是什么关系？帮我们理清一下哪个影响哪个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You mentioned working on agents, like agentic AI. Where does that all fit? The tool use, the whole agentic autonomy versus reasoning, RL, like help us to reconcile what does what and what impacts what.</p>
</details>

**Jerry Tworek:** 我认为重要的一点是，我相信 AI 可以通过自动化、解决问题以及为我们做好事——我们想要的好事——对我们的世界和生活产生很多积极影响。很长一段时间以来，也许是过去两三年，我们一直生活在这样一个世界里：我们向 AI 提问，它给我们答案，一开始是即时的，现在它可以思考一两分钟，这感觉很长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's important is I believe, and I think that there can be a lot of positive impact of AI on our world and our lives through automation, through problem solving, and through AI doing good things for us, the things that we want. And for a long time, and for a long time again, it's not that long, but the last two years or so, or maybe approaching three, we've been living in this world where we kind of ask questions to AI and it gave us an answer, at the beginning instantly. Now it can think for like a minute or two, which feels long.</p>
</details>

**Jerry Tworek:** 但在很多方面，两分钟能做什么呢？如果你想想你必须解决多少问题。AI 在它能解决的事情上可能快一些，但这仍然是它能做的极限。还有很多任务，需要 AI 花费更长的时间。当我提示 Codex 时，它会工作一段时间，也是几分钟。我们内部有很多东西，可以让模型工作得更久。我们还没有找到合适的部署产品，但现在的模型可以在某些类型的任务和问题上思考 30 分钟、一个小时、两个小时，甚至更长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in many ways, what can you do for two minutes if you think of how many problems you must solve? And AI is probably a little bit faster in the things it can solve, but it's still a limit of what it can do. There are still a lot of tasks that would take AI to do much, much longer. When I prompt Codex, it works for a while, again, a few minutes. There are a lot of things we have internally and we are doing that allow the model to work for much longer. We still didn't figure out the right product to deploy them. But the models can think for like 30 minutes, an hour, two hours these days on certain types of tasks and problems, even longer than that.</p>
</details>

**Jerry Tworek:** 它们通常有能力这样做。我们需要弄清楚如何让这个过程更有用，更能真正解决现实生活中的各种问题，无论是编码、预订旅行、制定计划，甚至是设计房屋或新的电子设备，或者任何我们希望模型最终能为我们做的事情。很多这些都来自于模型能够独立思考更长时间，并考虑更多的替代方案，有时甚至要完成一长串繁琐的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they generally are capable of doing so. And we need to figure out how to make that process more useful and more being able to actually come to various problems in real life, whatever it is, coding or booking travel or making plans or even designing houses or new electronic devices or whatever else we would like models to do, we would like them eventually to be able to do for us. A lot of this comes through the models thinking independently for longer periods of time and considering more of our alternatives, bits, and just sometimes going through a slog of very long lists of tasks.</p>
</details>

### 通往 AGI 之路：我们走对了吗？

**Matt Turck:** 好的。那么，为了结束这次对话，让我们放大视角。你前几天发推说：“我们都集体认为 AGI 昨天就该建成了。它至今还没建成，主要是因为一个需要被修复的简单错误。” 这条推文非常棒。你认为预训练和规模化强化学习的结合能带我们走向 **AGI** (Artificial General Intelligence: 通用人工智能，指能够理解或学习人类所能完成的任何智力任务的AI) 吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So maybe to zoom out to close this conversation. You said the other day, you tweeted, "We all collectively believe AGI should have been built yesterday. And the fact that it hasn't yet is mostly because of a simple mistake that needs to be fixed," which is super awesome as a tweet. Do you think that the combination of pre-training and scaled RL takes us to AGI?</p>
</details>

**Jerry Tworek:** 这里总有一个有趣的问题：我们认为什么东西不属于预训练？界限在哪里？我普遍认为，我们今天所做的预训练是必要的。我认为，我们今天所做的强化学习也是必要的。而且肯定还会有更多其他的东西。我们在其中一些事情上有很多雄心勃勃的研究计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's always an interesting question of what do we consider something that is not pre-training? And where is the limit? I generally think something that we are doing like pre-training today is necessary. I think something that we are doing like RL today is necessary. And there will surely be a few things more. And we have a lot of very ambitious research programs on some of those things.</p>
</details>

**Jerry Tworek:** 我不想陷入关于它是否相同的辩论，但我们正在并且希望不断改变我们训练模型的方式，以更好地代表我们认为的智能的正确形式和最有用的学习形式。我们一直在研究各种东西。从 AGI 的距离来看，这也是一个非常复杂的问题。我很喜欢别人对我说的一句话，我认为是对的：如果你和 10 年前的人交谈，给他们看今天的 ChatGPT，他们可能会称之为 AGI。但我们今天不这么认为，因为它仍然有很多局限性，我们都非常清楚这些局限性，而且我们很确定我们能解决这些局限性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I don't want to go into debates whether it's the same or not, but we are and want to be constantly changing the way how we train the models to represent what we think the right form of intelligence is and the most useful form of learning is. And we are constantly researching various things. And the distance from AGI is also a very complex question. I really like someone said it to me, but I think it is right that if you talk to someone from 10 years ago and show them ChatGPT from today, they would probably call it AGI. But we are not today because it still has a lot of limitations, and we are all very aware of those limitations, and we are pretty sure we can resolve those limitations.</p>
</details>

**Jerry Tworek:** 未来的模型可能还会有其他需要修复的局限性。有一个终极问题，非常难以回答：模型什么时候能够自我改进，而不需要太多外部输入和人类的干预来修复它？我认为这是一个非常困难的问题，一个严肃的问题，人类需要尝试回答。因为模型将仍然在很大程度上依赖于我们的基础设施和系统，但它们将能够开始自我修复，而不需要我们去修复它。到那时，关于 AI 真正能做什么、能解决什么的预测，就会变得比我们现在能做的要模糊得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There will be probably some further limitations of the future models that will need to be fixed. There is an ultimate question which is very hard to answer: when is the moment that the model can improve itself without that much external output and without humans working on it and fixing it? And I think it is a very hard question. It is a serious question that humanity needs to try to answer because most of that will still largely depend on our infrastructure and our systems, but we will be able to start fixing itself without us having to fix it. And that's when the predictions of what really AI will be able to do and will be able to solve at that moment start becoming a little bit murkier than what we can do right now, which I think we still can do that pretty well.</p>
</details>

**Matt Turck:** 从哲学的角度来看，你可能听过 Richard Sutton 前几天在 Dwarkesh 播客上的发言，那是一期非常精彩的节目，大家真的应该去听听。他实际上说，通往 AGI 的唯一路径将是纯粹的强化学习，而从根本上说，大语言模型（LLM）是一个有缺陷的前提，因为它们实际上是在模仿现实，而强化学习是在强化现实。你对这个问题有什么哲学上的看法吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But philosophically, you may have heard Richard Sutton, you know, the other day on the Dwarkesh podcast, which is a wonderful episode that people should really listen to, effectively saying that the only path to AGI was going to be pure RL and that fundamentally LLMs, and maybe I hope I'm characterizing what he said appropriately, but that LLMs were a flawed premise because effectively that was imitation of reality, whereas RL was enforcement of reality. Do you have any thoughts sort of like philosophically on that question?</p>
</details>

**Jerry Tworek:** 是的，我还没来得及完整听完那一期节目，所以我也不了解那个想法的所有细节。但我能说的是，我们现在在语言模型上做的强化学习是相当严肃的。就纯粹的强化学习而言，我认为真正的纯粹强化学习没有意义。强化学习需要预训练才能成功，而我认为预训练也需要强化学习才能成功。没有强化学习，我们正在做的研究计划就没有意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I haven't had a chance to fully listen to that episode yet, so I also don't get all the details of that thought. But what I can say is that we are doing quite serious RL on language models these days. And in terms of a pure RL, I don't think really pure RL makes sense. RL needs pre-training to be successful, and I think pre-training, as I said before, needs RL to be successful as well. I don't think without RL it would make sense, the research program we are doing.</p>
</details>

**Jerry Tworek:** 但我们，OpenAI，以及我敢肯定的所有其他 AI 实验室，都非常认真地在我们的模型上进行大量的强化学习。很多人说 LLM 是通往 AGI 的跳板还是岔路，他们通常指的是预训练。但很明显，我们目前做事的方式还不够，还不是全部，还需要对整个设置进行进一步的改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we are, OpenAI is, and I'm pretty sure all other AI labs as well, very serious about doing a lot of reinforcement learning on our models. And what a lot of people are saying, whether LLMs are an on-ramp or off-ramp of AGI, very often they do mean pre-training. But it's also clear that the current way how we are doing things is also not yet enough and it's not yet everything, and there will need to be further changes to the setup.</p>
</details>

**Jerry Tworek:** 有时人们会说，“哦，如果你在做强化学习，那它就不是 LLM 了，是别的东西。” 有时又说，“哦，如果你能在你的流程中编写程序，它是一个思想链，它就不只存在于神经网络中，它是一个神经符号系统。” 所以，很容易陷入定义之争。有些人认为某个东西是 LLM，而另一些人则不这么认为。但我个人的观点是，我们现在拥有的，是迈向下一步的一个非常好的基础。我们先是有了 Transformer，最初用于翻译，然后我们用大规模数据预训练它们，然后我们对它们进行 RLHF，现在我们正在进行大规模的强化学习。我们还会做更多、更复杂的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But sometimes people say, "Oh, if you are doing RL, it's not an LLM, it's something else." Sometimes they say, "Oh, if you can write a program in your roll-out and it's a chain of thought, it's not in this neural network only, it's a neural-symbolic system." So it's easy to get, some people consider something an LLM and the other thing not. But personally, my view is what we have is a pretty good foundation for the next step. We did Transformers first trained for translation, then we were pre-training them on large-scale data, then we were doing RLHF on them, now we are doing large-scale reinforcement learning. We'll do a few more and more complex things.</p>
</details>

**Jerry Tworek:** 在这个过程中的某个时刻，架构可能会开始发生或多或少显著的变化。我个人认为我们正走在正确的道路上，这感觉更像是不断添加新东西，而不是完全掉头，也许会溶解一些把我们带到当前智能水平但已不再需要的旧元素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a chance somewhere along the line the architecture will start changing more or less significantly. And I personally think we are on the right path, and it will feel less like completely turning around and more like keep on adding more things and maybe dissolving some old elements that carried us to that particular level of intelligence and were not needed anymore.</p>
</details>

**Matt Turck:** 这似乎是一个非常好的结束点。你非常慷慨地分享了你的时间和想法，让我们得以一窥 OpenAI 的内部、你的工作内容、幕后的景象，以及预训练和规模化强化学习的关键方面。这是一次非常精彩的对话。Jerry，非常感谢你。真的很感激。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, that feels like a wonderful place to leave it. You've been very generous with your time and thoughts and giving us a glimpse into OpenAI, what you work on, what it looks like behind the scenes, and the key aspects of pre-training and scaling reinforcement learning. So, it's been a wonderful conversation. Jerry, thank you so much. Really appreciate it.</p>
</details>

**Jerry Tworek:** 非常感谢你。我也很享受这次对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you very much. I enjoyed being here a lot too.</p>
</details>