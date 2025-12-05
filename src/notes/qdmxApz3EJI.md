---
author: AI Engineer
date: '2025-08-06'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=qdmxApz3EJI
speaker: AI Engineer
tags:
  - ai-system-engineering
  - bitter-lesson
  - premature-optimization
  - abstraction-levels
  - decoupled-design
title: AI系统工程：拥抱高层抽象，规避过早优化
summary: 本次演讲探讨了在AI系统工程中如何应对大语言模型（LLM）快速迭代带来的挑战。演讲者指出，AI领域每周都有新模型和新方法出现，导致工程师疲于应对。他引用了“苦涩教训”并对其进行重新解读，强调AI工程的目标是构建可靠、可控、可扩展的系统，而非仅仅追求智能最大化。核心观点是避免过早优化和低层级硬编码，倡导投资于高层级、解耦的抽象设计，例如DSPy框架中的“签名”概念，以实现模型和策略的热插拔，从而构建经久不衰的AI系统。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Omar Khattab
  - Rich Sutton
  - Donald Knuth
companies_orgs:
  - Databricks
products_models:
  - DSPy
  - DaVinci 2
  - GPT-4 mini
media_books: []
status: evergreen
---
### AI系统工程的挑战与现状

感谢大家的到来，也感谢组织者邀请我来到这里。我很高兴能和大家谈谈如何构建能够经受住“苦涩教训”考验的**AI系统**（Artificial Intelligence System: 利用人工智能技术解决特定问题的软件或硬件系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks everyone for showing up, and thanks to the organizers for inviting me and having me here. I'm excited to talk to you all about engineering AI systems that endure the bitter lesson.</p>
</details>

介绍环节已经结束，我们就不再重复了。如果您在这里，我想很可能是因为您从事我们所说的**AI软件**（AI Software: 利用人工智能技术开发的软件）的工程工作，或者您管理或与从事这项工作的人合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The introduction has already happened, so let's not repeat that. If you're here, it's probably because you engineer what we might call AI software, or you manage or work with people who do.</p>
</details>

“AI软件”这个术语以这种特殊的方式使用的时间并不长。因此，我们都在努力弄清楚这里的正确基础和基本原则是什么，以及哪些东西是转瞬即逝的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not a term that has been used as a very special thing in this way for that long. So, we're all trying to figure out the right basics and fundamentals here, and what things are fleeting.</p>
</details>

这就是本次演讲的主要内容。而当前这个领域的一个“游戏规则”，或者说现在已经成为一种流行语的现象是：每周都有新的**大语言模型**（Large Language Model, LLM: 基于深度学习的语言模型，能够理解和生成人类语言）问世。也许现在“每周”这个频率都太慢了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what the talk will largely be about. The name of the game, which is kind of a meme at this point: every week there's a new large language model. Maybe every week is actually too slow at this point.</p>
</details>

这实际上改变了你可以在权衡中做出的选择。它可能不一定在最佳质量方面达到最先进水平，尽管有时确实如此。但也许它在特定成本下表现最佳，或者在特定类型的应用中表现最佳，又或者它的速度令人难以置信。我们现在也看到了像扩散模型这样的技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That actually changes something in terms of the trade-offs you can strike. It might not necessarily be the state-of-the-art in terms of the best quality, although sometimes it is. But maybe it's the best performance for certain costs, or the best performance for certain types of applications, or perhaps it's the incredible speed. We've seen things like diffusion now.</p>
</details>

因此，如果你在这个领域进行软件工程，每周都会出现一个新的LLM，你必须考虑它，这确实很不寻常。如果你回顾普通的软件工程，你可能每两三年才更换一次硬件，甚至更久。所以这种情况非常罕见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So every week there's a new LLM that you have to consider if you're engineering software in this space, which is really unusual. If you think back to normal software engineering, you might change your hardware every two or three years, if that. So this is pretty unusual.</p>
</details>

另一个更奇怪的部分是，如果你足够幸运，LLM提供商已经意识到他们并非真正在“构建”这些LLM。他们是在训练它们；这些模型是基于大量的引导、数据，以及对大量评估和“感觉”的迭代而涌现出来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other part that's a little bit weirder is that if you're lucky, the LLM provider has recognized they're not really building these LLMs. They're training them; they're emerging based on a lot of nudging, data, and iterating on many evaluations and 'vibes' as well.</p>
</details>

而且他们已经意识到（如果你足够幸运的话），他们最新的模型中存在以前没有的新奇特性。令许多人惊讶的是，如今你仍然会收到针对最新模型的越来越长的提示指南，而这些模型本应越来越接近**通用人工智能**（Artificial General Intelligence, AGI: 具备人类智能水平，能执行任何人类智力任务的AI）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they have realized, if you're lucky, that there are new quirks in their latest models that weren't there before. To the surprise of many people these days, you still get longer and longer prompting guides for the latest models that are supposed to be closer and closer to AGI.</p>
</details>

如果你运气不好，你就得自己想办法解决。如果你运气更差，提供商的提示指南甚至都不太好用。所以，你必须自己弄清楚什么是正确的做法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you're less lucky, you have to figure that out on your own, right? If you're even less lucky, the prompting guides from the provider aren't even that good. So, you have to actually figure out what the right thing is.</p>
</details>

而且每天，也许以更快的速度，有人会发布一篇arXiv论文或一条推文，介绍一种新的学习算法——也许是一些**强化学习**（Reinforcement Learning: 一种机器学习范式，通过与环境互动学习最优行为）的附加功能，也许是一些提示技巧，也许是一种提示优化技术，或其他一些承诺让你的系统学习得更好、更符合你目标的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And every day, perhaps at an even faster pace, someone is releasing an arXiv paper or a tweet or something that introduces a new learning algorithm—maybe some reinforcement learning bells and whistles, maybe some prompting tricks, maybe a prompt optimization technique, something or the other that promises to make your system learn better and sort of fit your goals better.</p>
</details>

还有人正在引入一些搜索、扩展、推理策略、智能体框架或智能体架构，它们承诺最终将解锁比以往更高的可靠性或质量水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Someone else is introducing search, scaling, inference strategies, agent frameworks, or agent architectures that promise to finally unlock levels of reliability or quality better than what you had before.</p>
</details>

我认为，如果你现在的工作做得还不错，很可能你每周都在忙碌应对。这不是因为你工作做得不好，而是因为你工作做得好，对吧？因为你会想：“我必须至少掌握一些这些东西，这样才不会落后。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think if you're actually doing a reasonable job now, most likely you're scrambling every week. That's not if you're doing a bad job; that's if you're doing a good job, right? Because you're thinking, 'I've got to stay on top of at least some of this stuff so that I don't fall behind.'</p>
</details>

而且在很多情况下，模型API实际上会在底层改变模型，即使你使用的是相同的名称。所以你实际上是被迫忙碌应对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in many cases, model APIs actually change the model under the hood even though you're using the same name. So it's actually you're forced to scramble.</p>
</details>

我甚至会说，问题可能不是你是否每周都会忙碌应对，而是如果你考虑到这些LLM的进步速度，你是否能长期忙碌应对？它们会不会抢走你的饭碗？这些问题我认为很多人都在思考，这也是本次演讲将要探讨的内容。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">And actually I would say maybe the question isn't whether you will scramble every week, maybe a different question is, will you even get to scramble for long if you think about the rate of progress of these LLMs? Like, are they going to eat your lunch, right? So these are, I think, questions that are on a lot of people's minds, and this is what the talk is going to be addressing.</p>
</details>

### “苦涩教训”的解读与AI工程的真正目标

本次演讲提到了**苦涩教训**（The Bitter Lesson: 由强化学习先驱Rich Sutton提出的AI发展经验，指出利用领域知识构建复杂方法最终会被利用规模和通用方法的简单方法超越），这听起来像是某种古老的AI传说，但它其实只有六年历史。强化学习的先驱、图灵奖得主**Rich Sutton**（Rich Sutton: 强化学习领域的知名学者，提出了“苦涩教训”）在他的网站上写了一篇短文，基本意思是：70年的AI发展教会了他，也教会了AI社区中的其他人（从他的角度来看），当AI研究人员利用**领域知识**（Domain Knowledge: 某个特定专业领域内的专门知识）来解决诸如国际象棋之类的问题时，我们构建的复杂方法本质上无法扩展，我们会陷入困境，并被那些更好地利用规模的方法所超越。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The talk mentions the bitter lesson, which sounds like this really ancient, old kind of AI lore, but it's just six years old. The current year's Turing Award winner, Rich Sutton, who's a pioneer of reinforcement learning, wrote this short essay on his website, basically that says 70 years of AI has taught him and taught other people in the AI community from his perspective that when AI researchers leverage domain knowledge to solve problems like, I don't know, chess or something, we build complicated methods that essentially don't scale, and we get stuck and we get beat by methods that leverage scale a lot better.</p>
</details>

根据Sutton的说法，似乎更有效的是那些可扩展的通用方法。他指出了搜索（这并非指信息检索，更多是探索大空间）和学习——让系统理解其环境——效果最佳。这里的搜索在LLM领域可能被称为推理时间扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What seems to have to work better, according to Sutton, is general methods that scale. And he identifies search, which is not like retrieval, more of like exploring large spaces, and learning—so getting the system to kind of understand its environment, maybe for example—work best. And search here is what we'd call in LLM land maybe inference time scaling or something.</p>
</details>

我并非替Sutton发言，也不是说我完全理解他的意思，或者我一定同意或不同意，但我认为这确实是这个领域一个基础且重要的概念。我认为它给我们这些构建AI系统的人提出了有趣的问题，因为如果利用领域知识是“坏事”，那么AI工程到底应该是什么？工程学是关于理解你的领域，并以可重复的方式或原则，运用大量人类智慧在其中工作。那么，我们是不是注定失败？我们是不是在浪费时间？我们为什么还要参加AI工程大会？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't speak for Sutton, and I'm not suggesting that I have the right understanding of what he's saying, or that I necessarily agree or disagree, but I think this is just a fundamental and important concept in space. So I think it raises interesting questions for us as people who build, you know, engineer AI systems, because if leveraging domain knowledge is bad, what exactly is AI engineering supposed to be about? I mean engineering is understanding your domain and working in it with a lot of human ingenuity in repeatable ways, let's say, or with principles. So like, are we just doomed? Like, are we just wasting our time? Why are we at an AI engineering fair?</p>
</details>

我会告诉你们如何解决这个问题。我很少看到有人讨论这一点。Sutton谈论的是，很多人也都在谈论“苦涩教训”。所以，显然有人需要思考这个问题，对吧？Sutton谈论的是最大化智能，这有点像在新环境中快速理解事物的能力。我们所有人都在某种程度上关心这一点。我也是一名AI研究员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'll tell you how to resolve this. I've not really seen a lot of people discuss that. Sutton is talking about, and a lot of people, you know, throw the bitter lesson around. So clearly somebody has to think about this, right? Sutton is talking about maximizing intelligence, which is like something like the ability to figure things out in a new environment really fast, let's say. All of us kind of care about this to some degree. I'm also an an AI researcher.</p>
</details>

但是，当我们构建AI系统时，我认为重要的是要记住，我们构建软件的原因并非因为我们缺乏AGI。我们构建软件的原因，以及理解这一点的方式是，我们已经拥有无处不在的通用智能——我们有80亿个这样的智能。它们是不可靠的，因为智能本身就是如此。而且它们没有解决我们希望用软件解决的问题。这就是我们构建软件的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when we're building AI systems, I think it's important to remember that the reason we build software is not that we lack AGI. We build software, and the reason for this, and the way to understand this, is we already have general intelligence everywhere. We have eight billions of them. They're unreliable because that's what intelligence is. And they've not solved the problems that we want to solve with software. That's why we're building software.</p>
</details>

所以，我们编写软件不是因为我们缺乏AGI，而是因为我们想要可靠、健壮、可控、可扩展的系统。我们希望这些系统是我们可以推理、可以大规模理解的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we program software not because we lack AGI, but because we want reliable, robust, controllable, scalable systems. And we want these things to be things that we can reason about, understand at scale.</p>
</details>

实际上，如果你考虑工程和可靠系统，如果你考虑在任何试图系统化的案例中的制衡机制，那都是关于在正确的地方小心地减少自主性和智能，而不是限制其他方面的智能。所以，这与你可以从“苦涩教训”中吸取的教训是截然不同的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And actually, if you think about engineering and reliable systems, if you think about checks and balances in any case where you try to systematize stuff, it's about subtracting agency and subtracting intelligence in exactly the right places carefully, and not restricting the intelligence otherwise. So this is a very different axis from the kinds of lessons that you would draw on from the bitter lesson.</p>
</details>

这并不意味着“苦涩教训”不相关。让我告诉你它相关的确切方式。第一个启示是，扩展搜索和学习对智能来说效果最好。如果你是一名AI研究员，对构建能够在新环境中快速良好学习的智能体感兴趣，那么这就是正确的做法，完全不要硬编码，除非你真的非做不可。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that does not mean the bitter lesson is irrelevant. Let me tell you the precise way in which it's relevant. So the first takeaway here is that scaling search and learning works best for intelligence. This is the right thing to do if you're an AI researcher interested in building, you know, agents that learn really well really fast in new environments, right? Don't hard code stuff at all, unless you really have to.</p>
</details>

但在构建AI系统时，思考一下是很有帮助的：当然是搜索和学习，但搜索什么呢？你的AI系统到底应该做什么？你正在解决的根本问题是什么？它不是智能，而是其他东西。你学习的目的是什么？系统学习是为了做好什么？这才是你需要进行工程设计的地方，而不是搜索的具体细节，也不是学习的具体细节，正如我将在本次演讲的其余部分所讨论的那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in building AI systems, it's helpful to think about, well, sure, search and learning, but searching for what, right? Like what is your AI system even supposed to be doing? What is the fundamental problem that you're solving? It's not intelligence. It's something else. And what are you learning for, right? Like what is the system learning in order to do well? And that is what you need to be engineering, not the specifics of search and not the specifics of learning as I'll talk about in the rest of this talk.</p>
</details>

### 过早优化：AI软件工程的“万恶之源”

所以Sutton说，复杂的方法会阻碍扩展，特别是如果你过早地做，比如在你本质上不知道自己在做什么之前。你以前听过这个吗？我感觉我在1970年代就听过，尽管我当时还没出生。这正是**结构化编程**（Structured Programming: 一种编程范式，强调使用结构化控制流，如顺序、选择和循环，以提高代码清晰度和可维护性）的概念，**Donald Knuth**（Donald Knuth: 计算机科学家，以其著作《计算机程序设计艺术》和对算法分析的贡献而闻名）在他的论文中提出了那句流行语：“**过早优化是万恶之源**（Premature optimization is the root of all evil: 计算机科学中的一句格言，意指在软件开发早期对性能进行不必要的优化，往往会导致代码复杂、难以维护且效果不佳）。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he's saying Sutton is saying complicated methods get in the way of scaling, especially if you do it early, like before you know what you're doing essentially. Did you hear that before? I feel like I heard that back in the 1970s although I wasn't around. This is the notion of structured programming, with Knuth saying his popular phrase in a paper, "premature optimization is the root of all evil."</p>
</details>

我认为这正是软件的“苦涩教训”，因此也是AI软件的“苦涩教训”。所以，人类的智慧和人类对领域的知识并非有害。有害的是当你过早地以限制系统、反映出理解不足的方式去做时。但在工程领域，你无法不进行系统工程。那样你就像是放弃了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is the bitter lesson for software and thereby also for AI software. So it's human ingenuity and human knowledge of the domain. It's not that it's harmful. It's that when you do it prematurely in ways that constrain your system in ways that reflect poor understanding they're bad. But you can't get away in an engineering field with not engineering your system. Like you're just quitting or something, right?</p>
</details>

这里有一小段代码。如果你在X（Twitter）上关注我，你可能会认出它，否则我觉得它在3秒内对我来说相当晦涩。我无法真正地看着它，然后准确地说出它在做什么。老实说，我也不太关心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's a little piece of code. If you follow me on X on Twitter, you might recognize it, but otherwise I think it looks pretty opaque to me in like 3 seconds. And I can't really look at this and tell exactly what it's doing. And I also honestly don't really care.</p>
</details>

所以，瞧，这在旧机器上以某种浮点表示法计算平方根。我认为立刻让我感到惊讶的是，这不是最面向未来的程序。如果你改变机器架构、不同的浮点表示法、更好的CPU，首先它会出错，因为你只是在这里硬编码了一些值。其次，它可能比正常的平方根计算更慢，后者可能是一个单指令，或者编译器有非常智能的方法来处理，或者有很多其他可以为你优化的东西，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So lo and behold, this is computing a square root in a certain floating point representation on an old machine. And I think the thing that jumps at me immediately is this is not the most future-proof program possible. If you change the machine architecture, different floating-point representations, better CPUs, first of all, it'll be wrong because, you know, like it's just hard-coding some values here. And second of all, it'll probably be slower than a normal, you know, square root that maybe is a single instruction or maybe the compiler has a really smart way of doing it or, you know, a lot of other things that could be optimized for you, right?</p>
</details>

所以，写这段代码的人，也许他们有充分的理由，也许没有，但如果你经常写这种代码，你作为一个工程师很可能是在犯错。所以，过早优化也许是“万恶之源”的平方根，但什么才算是过早呢？我的意思是，这有点像游戏的名称，对吧？我们可以这么说，但这没有任何意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So someone who wrote this, maybe they had a good reason, maybe they didn't, but certainly if you're writing this kind of thing often, you're probably messing up as an engineer. So premature optimization is maybe the square root of all evil or something, but what counts as premature? Like, I mean, that's kind of the name of the game, right? Like we could just say that, but it doesn't mean anything.</p>
</details>

我不认为任何策略都适用于科技领域。没有人能预测三年、五年、十年后会发生什么。但我认为你仍然需要有一个概念模型来指导你的工作。我碰巧构建了两样东西，它们已经存在了几年，从DaVinci 2到GPT-4 mini，它们多年来基本保持不变，现在比以往任何时候都更大。它们有点像围绕LLM的稳定、基础的抽象或AI系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't think any strategy will work in tech. Nobody can anticipate what will happen in three years, five years, 10 years. But I think you still have to have a conceptual model that you're working off of. And I happen to have built two things that are, you know, on the order of several years old that have fundamentally stayed the same over the years from the days of birth text Davinci 2 up to four 04 mini and they're bigger now than they ever were. And they're sort of like these stable fundamental kind of abstractions or AI systems around LLMs.</p>
</details>

那么，在这个生态系统中，像Kulbear或DSPy这样的东西是如何存在并持续几年的呢？这在AI领域就像几个世纪一样漫长。我将尝试对此进行反思，而且再次强调，这些都不能保证永远持续下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what gives, what happens in order to get something like Kulbear or something like DSPy in this ecosystem, and sort of endure a few years, which is like, you know, centuries in AI land? I'll try to reflect on this, and again, none of this is guaranteed to be something that lasts forever.</p>
</details>

所以这是我的假设：**过早优化**（Premature Optimization: 在软件开发早期对性能进行不必要的优化，往往会导致代码复杂、难以维护且效果不佳）的发生，当且仅当你以低于你所能证明的**抽象层次**（Level of Abstraction: 描述系统或问题时所关注的细节程度，高层抽象关注宏观概念，低层抽象关注具体实现）进行硬编码时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's my hypothesis: premature optimization is what is happening if and only if you're hard coding stuff at a lower level of abstraction than you can justify.</p>
</details>

如果你想要一个平方根，请直接说“给我一个平方根”。不要开始做随机的位移和位操作，比如为了迎合你今天特定的机器而进行的位操作。但实际上，退一步想想，你真的想要一个平方根吗？或者你正在计算一个更通用的东西？有没有办法可以表达那个更通用的东西？只有当你证明了更高层次的抽象不够好时，才应该降低到更低的抽象层次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want a square root, please just say, "Give me a square root." Don't start doing random bit shifts and bit stuff like, you know, bit manipulation that happens to appease your particular machine today. But actually take a step back. Do you even want a square root or are you computing something even more general? And is there a way you could express that thing that is more general? Right? And only stoop down or go down to the level of abstraction that's lower if you've demonstrated that a higher level of abstraction is not good enough.</p>
</details>

### 提示工程的局限性与解耦设计的必要性

所以我认为这里更大的图景是，应用机器学习，尤其是**提示工程**（Prompt Engineering: 设计和优化输入提示以引导大型语言模型生成所需输出的过程），存在一个巨大的问题。**紧耦合**（Tight Coupling: 软件组件之间高度依赖，一个组件的改变会严重影响其他组件）被认为是软件中的坏事，但当我们构建机器学习系统时，我们很少谈论它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think the bigger picture here is applied machine learning and definitely prompt engineering has a huge issue here. Tight coupling is known, tighter coupling than necessary is known to be bad in software, but it's not really something we talk about when we're building machine learning systems.</p>
</details>

事实上，在机器学习中，通常的游戏规则是：“嘿，最新技术出来了，让我们重写一切，以便围绕那个特定事物工作。”我一年前，也就是13个月前，在2024年5月发了一条推文，说“苦涩教训”只是缺乏高水平ML抽象的产物。深度学习的扩展确实有可预测的帮助，但每次范式转变之后，最好的系统总是包含模块化的专业化，因为我们正在努力构建软件。我们需要这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, the name of the game in machine learning is usually like, hey, this latest thing came out, let's rewrite everything so that we're working around that specific thing. And I tweeted about this a year ago, 13 months ago, last May in 2024, saying the bitter lesson is just an artifact of lacking high level good high-level ML abstractions. Deep learning scaling deep learning helps predictably, but after every paradigm shift, the best systems always include modular specializations because we're trying to build software. We need those.</p>
</details>

而且每次它们看起来都基本相同，它们本应是可重用的，但它们不是，因为我们编写的代码很糟糕。这里有一个很好的例子来证明这一点。它一点也不特别。这是一篇2006年的论文。它的标题现在看来也完全可以是一篇现在的论文，对吧？“一种多语言问答的模块化方法”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And every time they basically look the same and they should have been reusable, but they're not because we're writing code bad, but we're writing bad code. So here's a nice example just to demonstrate this. It's not special at all. Here's a 2006 paper. The title could have really been a paper of now, right? A modular approach for multilingual question answering.</p>
</details>

这是一个系统架构图。它看起来就像你今天最喜欢的多智能体框架，对吧？它有一个执行管理器。它有一些问题分析器和从大量语料库中提取的检索策略。这个图，如果你给它上色，你会以为它可能是一篇去年左右的论文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here's a system architecture. It looks like your favorite multi-agent framework today, right? It has an execution manager. It has some question analyzers and retrieval strategists from a bunch of corpora. And it's like a figure, you know, if you color it, you would think it's a paper maybe from last year or something.</p>
</details>

现在有一个问题。这是一个漂亮的图。这个系统在架构上其实并没有那么糟糕。我不是说它是完美的架构，但在正常的软件环境中，你实际上可以直接升级机器，对吧？把它放到新的硬件上，放到新的操作系统上，它就能工作。而且它会工作得相当好，因为架构并没有那么糟糕。但我们知道，对于这些ML类的架构来说，情况并非如此，因为它们没有以正确的方式表达。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now here's a problem. It's a pretty figure. The system architecturally is actually not that wrong. I'm not saying it's the perfect architecture, but in a normal software environment, you could actually just upgrade the machine, right? Put it on a new hardware, put it on a new operating system, and it would just work. And it would actually work reasonably well because the architecture is not that bad. But we know that that's not the case for these ML sort of architectures because they're not expressed in the right way.</p>
</details>

所以，我认为从根本上来说，我可以最强烈地反对提示。提示对于编程来说是一种糟糕的抽象，这需要尽快修复。我说“对于编程”是因为它对于管理来说并非糟糕。如果你想管理一名员工或一个智能体，提示是一种相当合理的方式，就像一个Slack频道，你有一个远程员工。如果你想成为一名宠物训练师，那么使用张量和目标是迭代的好方法。我们就是这样构建模型的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think fundamentally I can express this most passionately against prompts. A prompt is a horrible abstraction for programming and this needs to be fixed ASAP. I say for programming because it's actually not a horrible one for management. If you want to manage an employee or an agent, a prompt is a reasonably kind of like it's an Slack channel. You have a remote employee. If you want to be a pet trainer, you know, working with tensors and, you know, objectives is a great way to iterate. That's how we build the models.</p>
</details>

但我想让我们也能进行AI系统工程。我认为对于工程和编程来说，提示是一种糟糕的抽象。原因如下：它是一个“字符串类型”的画布，只是一大段文字，没有任何结构，即使结构实际上以潜在的方式存在。它将你想要表达的基本任务定义（这是非常重要的东西，也是你正在进行工程设计的东西）与一些随机的、过度拟合的、不成熟的决策耦合和纠缠在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I want us to be able to also engineer AI systems. And I think for engineering and programming, a prompt is a horrible abstraction. Here's why. It's a stringly typed canvas, just a big blurb, no structure whatsoever, even if structure actually exists in a latent way. That couples and entangles the fundamental task definition you want to say, which is really important stuff. This is what you're engineering with some random over-fitted halfbaked decisions about...</p>
</details>

比如，“嘿，这个LLM以这种方式回应了这种语言，或者我用这个例子来证明我的观点，而且它对这个模型有效，所以我把它保留下来。”你无法真正区分，什么是你正在解决的根本问题，什么是你应用的随机技巧。这就像那个平方根的例子，只不过你没有把它叫做平方根，我们只能盯着它，然后想：“等等，我们为什么要向左移动五位？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">...hey, this LLM responded to this language, you know, when I talk to it this way or I put this example to demonstrate my point, and it kind of clicked for this model, so I'll just keep it in. And there's no way to really tell the difference. What was the fundamental thing you're solving and like, you know, what was the random trick you applied. It's like a square root thing except you don't call it a square root and we just have to stare at it and be like, wait, why are we shifting to the left five, you know, by five bits or something.</p>
</details>

你还在引入推理时间策略，这些策略每隔几周就会改变，或者人们总是在提出新的东西，而你却将其硬生生地纠缠到你的系统中。所以，如果它是一个智能体，你的提示正在告诉它它是一个智能体。你的系统并不需要知道它是一个智能体或一个推理系统或其他什么。你到底想解决什么？对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're also inducing the inference time strategy which is like changing every few weeks or people are proposing stuff all the time and you're baking it literally entangling it into your system. So if it's an agent your prompt is telling it it's an agent. Your system has no big like deal knowing about the fact it's an agent or a reasoning system or whatever. What are you actually trying to solve? Right?</p>
</details>

这就像你正在编写一个平方根函数，然后你却在说：“嘿，这是内存中结构体的布局。”你还在谈论格式化和解析，比如“用XML编写，生成JSON”等等。大多数时候，这真的不关你的事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If it's like if you're writing a square root function and then you're like, hey, here is the layout of the structs in memory or something. You're also talking about formatting and parsing things, you know, write in XML, produce JSON, whatever, like again that's really none of your business most of the time.</p>
</details>

所以你想要编写一个人类可读的规范，但你却在说“不要忽略这个，生成XML，用JSON回答。你是爱因斯坦教授，一个领域的智者，我会给你1000美元小费。”伙计们，那根本不是工程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you want to write a human readable spec but you're saying things like, do not ignore this, generate XML, answer in JSON. You are Professor Einstein, a wise expert in the field of, I'll tip you $1,000, right? Like that is just not engineering, guys.</p>
</details>

### 解决方案：关注点分离与DSPy框架

那么我们应该怎么做呢？我认为，可靠的**关注点分离**（Separation of Concerns: 软件设计原则，将软件系统分解为不同的、功能独立的模块，每个模块负责一个特定的关注点）是答案。作为一名工程师，你的工作是投资于你实际的系统设计。从规范开始，不幸的是或幸运的是，规范不能简化为一件事。现在我将谈谈评估。我知道每个人都听说过评估。这是关于评估的一句话，让这次演讲也涉及评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what should we do? Trusty old separation of concerns, I think, is the answer. Your job as an engineer is to invest in your actual system design. And you know, starting with the spec, the spec unfortunately or fortunately cannot be reduced to one thing. And this is the time I'll talk about evals. I know everyone hears about eval. This is the one line about evals that makes this talk about evals.</p>
</details>

很多时候，你希望投资于自然语言描述，因为这是这个新框架的力量所在。自然语言定义不是提示。它们是高度局部化的、模糊的东西，无法以任何其他方式表达。对吧？我无法用除了英语之外的任何方式告诉系统某些事情。所以我用英语说。但很多时候，我实际上是在迭代以迎合某个模型，并使其相对于我的一些标准表现良好，而不是告诉它这些标准，只是在那里修修补补。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of the time you want to invest in natural language descriptions because that is the power of this new framework. Natural language definitions are not prompts. They are highly localized pieces of ambiguous stuff that could not have been said in any other way. Right? I can't tell the system certain things except in English. So I'll say it in English. But a lot of the time I'm actually iterating to appease a certain model and to make it perform well relative to some criteria I have, not telling it the criteria, just tinkering with things there.</p>
</details>

评估是做到这一点的方法，因为评估表明：“这是我真正关心的。改变模型。评估仍然是我关心的。这是一件根本性的事情。”现在，评估是为了定义你系统的核心行为。你不会直接学习。从数据中进行归纳学习比遵循指令要困难得多。对吧？所以你需要两者兼备。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Evals is the way to do this because eval say, here's what I actually care about. Change the model. The evals are still what I care about. It's a fundamental thing. Now eval to define the core behavior of your system. You will not learn. Induction learning from data is a lot harder than following instructions. Right? So you need to have both.</p>
</details>

代码是你需要的另一件事。很多人会说：“哦，这就像，你懂的，只要让它做那件事就行了。”那么，谁来定义工具？谁来定义结构？你如何处理信息流？比如，私密的东西不应该流向错误的地方，对吧？你需要控制这些东西。你如何应用函数组合？LLM在组合方面表现糟糕，因为神经网络本质上无法可靠地学习事物。而软件中的函数组合基本上总是完美可靠的，这是通过构造实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Code is another thing that you need. You know, a lot of people are like, "Oh, it's just like a, you know, just just ask it to do the thing." Well, who's going to define the tools? Who's going to define the structure? How do you handle information flow? Like, you know, like things that are private should not flow in the wrong places, right? You need to control these things. How do you apply function composition? LLMs are horrible at composition because neuronet networks kind of essentially don't learn things that reliably. Function composition in software is always perfectly reliable basically, right, by construction.</p>
</details>

所以，很多事情通常最好委托给代码来完成，对吧？但这很难，而且你能够实际地兼顾和组合这些东西非常重要，你需要一个能够让你组合这些东西的画布。当你这样做时，一个好的画布，这里对好的画布的定义或标准是，它应该允许你以高度精简的方式表达这三者，并且以一种**解耦**（Decoupling: 软件设计原则，降低组件之间的相互依赖性，使它们能够独立开发、测试和部署）的方式，不与不断变化的模型纠缠在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a lot of the things are often best delegated to code, right? But it's hard and it's really important that you can actually juggle and combine these things and you need a canvas that can allow you to combine these things. Well, when you do this, a good canvas, the definition here of a good canvas or the criteria for a good canvas is that it should allow you to express those three in a way that's highly streamlined and in a way that is decoupled and not entangled with models that are changing.</p>
</details>

我应该能够热插拔模型，热插拔不断变化的推理策略。嘿，我想从思维链切换到智能体。我想从智能体切换到蒙特卡洛搜索。无论最新出现的是什么，对吧？我应该能够做到这一点。还有新的学习算法。所以，这真的很重要。我们谈到了学习，但学习，你知道，如果你正在进行工程设计，它总是发生在你的整个系统层面，或者至少你必须这样思考，你是在说，我希望整个系统作为一个整体为我的问题工作，而不是为了某个通用默认设置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I should just be able to hot swap models. Inference strategies that are changing. Hey, I want to switch from a chain of thought to an agent. I want to switch from an agent to a Monte Carlo research. Whatever the latest thing that has come out is, right? I should be able to just do that. And new learning algorithms. So, this is really important. We talked about learning, but learning is, you know, always happening at the level of your entire system if you're engineering it or at least you got to be thinking about it that way where you're saying, I want the whole thing to work as a whole for my problem, not for some general default.</p>
</details>

所以这就是这里的评估将要做的事情。你想要一种表达方式，它允许你进行强化学习，也允许你进行提示优化，还允许你在你实际工作的抽象层次上进行所有这些事情。所以第二个启示是，你应该投资于定义你的AI系统特有的东西，并与低层级可互换的组件解耦，因为它们会比以往更快地失效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So that's what the eval here are going to be doing. And you want a way of expressing this that allows you to do reinforcement learning but also allows you to do prompt optimization but also allows you to do any of these things at the level of abstraction that you're actually working with. So the second takeaway is that you should invest in defining things specific to your AI system and decouple from the lower level swappable pieces because they'll expire faster than ever.</p>
</details>

所以，我将总结一下，我们已经构建并持续构建了三年这个**DSPy框架**（DSPy Framework: 一个用于编程LLM和优化其行为的Python库，旨在通过高层抽象实现模块化和可组合的AI系统），它是唯一一个真正将你的工作（编写低层AI软件）与我们的工作（为你提供强大、不断发展的学习和搜索工具，实现扩展，并通过适配器交换LLM）解耦的框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'll just conclude by telling you we've built and been building for three years this DSPy framework which is the only framework that actually decouples your job, which is writing the lower level AI software, from our job, which is giving you powerful evolving toolkits for learning and for search, which is scaling, and for swapping LLMs through adapters.</p>
</details>

所以你只需要学习一个概念，它是一个新概念，我们称之为**签名**（Signatures: DSPy框架中的一个核心概念，用于以声明式方式定义LLM模块的输入和输出，实现高层抽象和解耦）。如果你学会了它，你就学会了DSPy。不幸的是，由于时间关系，我不得不跳过这部分，以便其他演讲者有时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's only one concept you have to learn, it is a new concept, which we call signatures, a new first-class concept. If you learn it, you've learned DSPy. I'll have to unfortunately skip this because of the time for the other speakers.</p>
</details>

但让我给你一个总结。我无法预测未来。我不是告诉你，如果你这样做，你明天写的代码就会永远存在。但我告诉你，你至少可以做些什么。这不是最高层面的东西，我只是说，底线是避免在比今天允许的更低层次进行手动工程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But let me give you a summary. I can't predict the future. I'm not telling you if you do this, you know, this the code you write tomorrow will be there forever. But I'm telling you the least you can do. This is not like the kind of the top level. It's just like the baseline I would say is avoid the hand engineering at lower levels than today allows you to do.</p>
</details>

这就是从“苦涩教训”和“过早优化是万恶之源”中得出的重要教训。在你最稳妥的赌注中（它们都可能出错，我不知道），模型不会很快就能读取你脑海中的规范。我不知道我们是否能解决这个问题。而且它们不会神奇地收集所有特定于你应用程序的结构和工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? That's the that's the big lesson from the bitter lesson and from premature optimization being the root of all evil. Among your safest bets, they could all turn out to be wrong. I don't know, is models are not anytime soon going to read specs off of your mind. I don't know if like we'll figure that out. And they're not going to magically collect all the structure and tools specific to your application.</p>
</details>

所以，这显然是你应该投资的东西，对吧？当你构建系统时，投资于签名（你可以在DSPy网站dspy.ai上了解更多），投资于必要的控制流和工具，并投资于手动评估，并驾驭可互换模型的浪潮。驾驭我们构建的模块的浪潮。你只需将它们换进换出，并驾驭优化器的浪潮，优化器可以为任何你构建的应用程序做强化学习或提示优化等事情。好的，谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that's clearly stuff you should invest in, right? When you're building a system, invest in the signatures, which I again you can learn about on the DSPy site, dspy.ai. Invest in essential control flow and tools and invest in evaluating on by hand and ride the wave of swappable models. Ride the wave of the modules we build. You just swap them in and out and ride the wave of optimizers which can do things like reinforcement learning or prompt optimization for any application that it is that you've built. All right, thank you everyone.</p>
</details>