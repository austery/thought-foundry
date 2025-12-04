---\
title: Why 'Vibe Coding' is the Worst Software Idea of the Year
summary: This article critically examines the concept of 'Vibe Coding' introduced
  by Andrej Karpathy. It argues that this approach, which relies on casual interaction
  with AI to generate code, fundamentally misunderstands the nature of software development.
  The author contends that programming's core difficulty lies not in writing syntax,
  but in the precise problem decomposition, design, and communication required for
  building robust, maintainable systems. The rise of AI in programming amplifies the
  need for rigorous practices like automated testing and executable specifications,
  rather than imprecise 'vibes'.
area: tech-insights
category: technology
project:
- ai-impact-analysis
- vibe-coding
tags:
  - ai-programming
  - code-quality
  - software-engineering
  - vibe-coding
people: []
companies_orgs: []
products_models: []
media_books: []
date: 2025-08-17
author: Lei
speaker: Dave Farley
channel: null
draft: true
file_name: vibe_coding_worst_software_idea_year.md
guest: null
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=1A6uPztchXk
---\
## Introduction to Vibe Coding

On February the 2nd this year, Andrej Karpathy, an OpenAI founder and formerly head of AI at Tesla, introduced a new term for a style of programming with AI assistance.

今年的2月2日，OpenAI的创始人、前特斯拉人工智能主管Andrej Karpathy，为一种利用AI辅助的编程风格引入了一个新术语。

He called it vibe coding.

他称之为“Vibe Coding”(感觉编程)。

Now, I'm no stranger to the ideas of too long didn't read and semantic diffusion, but I think that this might have been some kind of record.

现在，我对“长文不读”和“语义扩散”这些概念并不陌生，但我认为这次的情况可能创下了某种记录。

This was a thousand character tweet, and it seemed that few people even got to the second half.

这是一条一千个字符的推文，但似乎很少有人读到后半部分。

Andrej describes what he means by vibe coding in the first 300 or so characters of a thousand character tweet.

Andrej 在这条千字推文的前300个字符左右描述了他所说的“Vibe Coding”是什么意思。

The rest describes some of the consequences of this naive toy town approach to programming.

剩下的部分则描述了这种幼稚的、玩具城式的编程方法所带来的一些后果。

Now, I don't know Andrej personally, so I can't tell what he had in mind with his tweet, but it reads to me as sarcasm.

我个人并不认识Andrej，所以我无法判断他发这条推文时的真实想法，但在我看来，这读起来像是一种讽刺。

Near the end of the tweet, he says, "It's not too bad for throwaway weekend projects, but it's not really coding. I just see stuff, say stuff, run stuff, and copy and paste stuff, and mostly it works."

在推文的结尾附近，他说：“对于一次性的周末项目来说，这还算不错，但这并不是真正的编程。我只是看东西、说东西、运行东西、复制粘贴东西，而且大多数时候它都能用。”

So, I think that Vibe coding is at least up for the prize of the worst software idea of the year so far.

所以，我认为“Vibe Coding”至少有资格角逐本年度迄今为止最糟糕的软件创意奖。

Nevertheless, it seems to have gone viral and now is a well-known phrase in our domain. And so, that's our topic for today.

尽管如此，这个词似乎已经病毒式地传播开来，现在在我们的领域里已经是一个众所周知的短语了。因此，这就是我们今天的主题。

Hi, I'm Dave Farley and welcome to the modern software engineering channel.

大家好，我是Dave Farley，欢迎来到现代软件工程频道。

If you haven't been here before, please do hit subscribe and if you enjoy the content, hit like.

如果你是第一次来，请务必点击订阅，如果你喜欢这些内容，请点赞。

It helps us reach a bigger audience. Thank you for your help.

这能帮助我们触及更广泛的观众。感谢你的帮助。

## The Flaw in the "Vibe Coding" Premise

The idea and reality of having a relaxed chat with a **large language model** (LLM: 一种经过海量文本数据训练的人工智能模型，能够理解和生成人类语言) that results in a working system is impressive and seductive, but it seems to me to miss the point almost entirely of what programming is really about.

与一个**大语言模型**（LLM）轻松交谈，最终得到一个可工作的系统，这个想法和现实既令人印象深刻又充满诱惑，但在我看来，这几乎完全偏离了编程的真正本质。

This gets us back to that blight of the software industry, the idea that writing code is the hard part.

这又让我们回到了软件行业的一个顽疾上，即认为编写代码是困难的部分。

Non-technical people believe this is true because code looks so complex and mysterious to them.

非技术人员相信这是真的，因为代码在他们看来是如此复杂和神秘。

Developers believe that it's true because code is comforting and precious to them and clearly defines their skills and separates them from the non-technical people who presumably aren't as smart because they can't read the code.

开发者们也相信这是真的，因为代码对他们来说既是慰藉又是珍宝，它清晰地定义了他们的技能，并将他们与那些大概因为看不懂代码而没那么聪明的非技术人员区分开来。

We've built a technical recruitment industry on this premise that the defining characteristic of a good programmer is the set of languages and frameworks that they know.

我们在这个前提上建立了一个技术招聘行业，认为一个优秀程序员的决定性特征是他们所掌握的语言和框架。

We have people who define their jobs by the tools that they use. I'm a Java programmer, I'm a React developer and so on.

我们有些人用他们使用的工具来定义自己的工作。我是Java程序员，我是React开发者，等等。

I've admitted before that I have hired programmers who haven't used the same technology that we were using on a project and I've never regretted that so far.

我之前承认过，我曾雇佣过没有使用过我们项目所用技术的程序员，至今我从未后悔过。

In my experience, you can learn a programming language if you're good at programming enough to get by with it in a few days, maybe a couple of weeks.

根据我的经验，如果你擅长编程，你可以在几天，或许几周内学会一门编程语言并能应付工作。

Doing software development well is hard, very hard, but the difficulty is not created by programming languages.

做好软件开发是困难的，非常困难，但这种困难并非由编程语言造成。

## The Illusion of Simplified Communication

So let's think about the starting point in Andrej's tweet. We can give into the vibes and forget that the code even exists.

那么，让我们思考一下Andrej推文中的出发点。我们可以沉浸在“感觉”中，甚至忘记代码的存在。

Well, the other group of people that do that are the sometimes non-technical people who want to achieve something via a computer.

嗯，另一群这样做的人是那些有时没有技术背景，但想通过电脑实现某些目标的人。

Up to now though, we human programmers have played the role of the coding assistant in this conversation, translating what it is that they want into something that works.

然而到目前为止，我们人类程序员一直在这场对话中扮演着编码助手的角色，将他们想要的东西翻译成能够运行的程序。

So how well does that usually go?

那么，这通常进行得如何呢？

Not so well, I'd argue.

我认为，不那么顺利。

Certainly very poorly for any software of any size or complexity. This often goes very poorly indeed.

对于任何规模或复杂度的软件来说，效果都非常差。这通常确实进行得非常糟糕。

And so far we humans are still smarter than the machines.

而且到目前为止，我们人类仍然比机器更聪明。

This isn't because it's so difficult to translate what people want into a programming language.

这并不是因为将人们的需求翻译成编程语言有多么困难。

It's because it's so hard to break problems down into the precise deterministic instructions that LLM or not are still how computers ultimately work.

这是因为将问题分解成精确的、确定性的指令是如此困难，无论有没有LLM，计算机最终仍然是这样工作的。

## The True Purpose of Programming Languages

If you look at programs from years ago and modern programs, there's something kind of weird going on.

如果你看看多年前的程序和现代的程序，会发现一些奇怪的现象。

There's seemingly a persistence, a consistency to the level of detail that we need to express to make a working program.

为了创建一个可运行的程序，我们所需要表达的细节水平似乎有一种持久性和一致性。

And that's been true for decades. However we encode the level of detail that we need to define, it's pretty consistent.

几十年来都是如此。无论我们如何编码我们需要定义的细节层次，它都相当一致。

Programming languages aren't strange because of some fashion or masochistic trait in programmers.

编程语言之所以显得奇怪，并非因为某种时尚潮流或程序员的自虐倾向。

They are tools that have evolved to be good at expressing an idea clearly and with the required level of precision to achieve an outcome from the box of billions of switches that make up a modern computing device.

它们是经过演化而来的工具，擅长清晰、并以所需精度表达思想，从而从由数十亿个开关组成的现代计算设备中获得结果。

Programming languages aren't more complex than real world human languages. They're simpler, more strictly constrained, and more precise.

编程语言并不比现实世界的人类语言更复杂。它们更简单，约束更严格，也更精确。

That's to our advantage in trying to achieve our goals when programming.

这在编程时，对我们实现目标是有利的。

Programming languages are tools that are designed to help us to structure our thinking so that we can decompose problems into the steps that are necessary to achieve the outcomes that we are striving for.

编程语言是旨在帮助我们构建思维的工具，以便我们将问题分解为实现我们所追求结果所必需的步骤。

So the idea that we can do better if we adopt a vague imprecise expressive richness that's in human languages to precisely define behaviors in a computer seems to be very far from the truth and missing the point almost entirely to me.

因此，那种认为我们可以通过采用人类语言中模糊、不精确但表达丰富的特性来更精确地定义计算机行为的想法，在我看来与事实相去甚远，几乎完全没有抓住要点。

So vibe coding is not even close to being the right answer really.

所以，“Vibe Coding” 根本就不是正确的答案。

Another example of humans attempting to achieve clarity and precision with natural language is the law.

人类试图用自然语言达到清晰和精确的另一个例子是法律。

And if you've ever had to read any legal document for any purpose at all, I think you'll agree with me that this is not really what we might hope for in terms of clarity and precision.

如果你曾因任何目的而不得不阅读任何法律文件，我想你会同意我的看法，这在清晰度和精确度方面，并非我们所期望的。

## Rethinking the Act of Programming

We can think of the act of programming from a variety of different perspectives.

我们可以从多个不同角度来思考编程这一行为。

I'm sure that the most common way to think of this is probably to think of the act of writing code in a programming language.

我确信，最常见的思考方式可能是将其视为用编程语言编写代码的行为。

But I am somewhat skeptical of the utility of this.

但我对这种看法的实用性持怀疑态度。

It's rather like defining a plumber in terms of their use of a wrench. There's more to it than that.

这有点像根据水管工是否使用扳手来定义他。事情远不止于此。

And the things beyond the syntax and organization of code are more interesting and more complicated parts of programming.

而代码的语法和组织之外的东西，才是编程中更有趣、更复杂的部分。

The shapes that we paint with the code and the outcomes we achieve with it are both more interesting and more useful than the code itself.

我们用代码描绘的形态以及我们用它实现的成果，都比代码本身更有趣、更有用。

I think that ultimately there are three goals for programming languages that really matter.

我认为，编程语言最终有三个真正重要的目标。

One to help us to organize our thinking about a problem. Two to communicate our understanding to other humans.

第一，帮助我们组织关于问题的思考。第二，将我们的理解传达给其他人类。

And three to tell a computer what we want it to do.

第三，告诉计算机我们希望它做什么。

Each of these is important to the act of programming and represent different levels of value in the programs that we write.

这三点对于编程行为都至关重要，并在我们编写的程序中代表了不同层次的价值。

## The Core Challenge: Managing Complexity

The hardest part of programming seems to me understanding the problem that we're faced with in enough detail that we can see that whatever we come up with is likely to make a good solution.

在我看来，编程最难的部分是足够详细地理解我们面临的问题，以至于我们能够预见到我们提出的任何方案都可能成为一个好的解决方案。

Programming languages solve this problem by giving us tools to constrain our thinking in ways that help us to compartmentalize our picture of the solution that we're aiming for so that we can scope it and manage the complexity of it.

编程语言通过提供工具来约束我们的思维，帮助我们将目标解决方案的图景进行划分，从而能够界定其范围并管理其复杂性，以此解决这个问题。

They allow us to deal with parts of the problem separately from other parts using techniques like **modularity**, **cohesion**, **separation of concerns**, **abstraction**, and **managed coupling**.

它们允许我们使用**模块化**、**内聚**、**关注点分离**、**抽象**和**受控耦合**等技术，将问题的不同部分分开处理。

This kind of thinking about writing programs is a mix of programming language constructs that help us to build these structures into our code and our innate knowledge and understanding of design that we build up from experience.

这种关于编写程序的思考方式，是编程语言结构（帮助我们将这些结构构建到代码中）与我们通过经验积累的、对设计的内在知识和理解的结合。

Programming languages can help to steer our thinking via their design and the rest then is down to us.

编程语言可以通过其设计来引导我们的思维，剩下的就取决于我们了。

A big problem for us as programmers and for large language models as programmers is that we need to learn to apply some sense of good taste in our design choices to make effective use of these language constructs.

对于我们作为程序员以及作为程序员的**大语言模型**来说，一个大问题是，我们需要学会在设计选择中运用某种良好的品味，以便有效利用这些语言结构。

And we've all seen enough counter examples to know that not everyone does that.

我们都见过足够多的反例，知道并非每个人都能做到这一点。

But our poor large language models have been trained on all the code, the good, the bad, and the ugly.

但我们可怜的**大语言模型**是在所有代码上训练出来的，有好代码，有坏代码，也有丑陋的代码。

And unfortunately, there's more bad and ugly out there than there is good.

不幸的是，外面的坏代码和丑陋代码比好代码要多。

And we as a profession have also not been very good at defining what good really looks like to differentiate it from the bad and the ugly.

而且，我们这个行业在定义什么是真正的好代码，以便将其与坏代码和丑陋代码区分开来方面，也做得不是很好。

If you ask 10 programmers to tell you one thing that makes the difference between good code and bad, you'll probably get 15 different answers.

如果你问10个程序员，告诉你好代码和坏代码之间的一个区别，你可能会得到15个不同的答案。

This means that large language models are probably not going to have a great sense of what makes good code from their training data.

这意味着**大语言模型**可能无法从其训练数据中很好地判断出什么才是好代码。

So we either have to tell them or accept them creating bad code.

所以，我们要么必须告诉它们，要么就得接受它们生成坏代码。

And to be fair, this is all rather complex and nuanced because what makes great code in one context may be too simple or might be overkill in another.

公平地说，这一切都相当复杂和微妙，因为在一种情境下是优秀的代码，在另一种情境下可能过于简单或矫枉过正。

## A Philosophy of Change and Quality

I certainly have my own set of defaults and my book is an attempt to define some generic cornerstone ideas that I think are generally enough to help.

我当然有自己的一套默认原则，我的书就是试图定义一些我认为普遍有帮助的通用基石思想。

But even then, it's still contextual. My background and experience has led me to a reasonably defensive evolutionary approach to design and development.

但即便如此，它仍然是与上下文相关的。我的背景和经验使我形成了一种相当防御性的、演进式的设计和开发方法。

I think that the strongest mental approach is to assume that our guesses, whatever they might be, are probably wrong and so work in ways that allow us to correct that when we find out where we're wrong.

我认为最强大的心智模式是假设我们的猜测，无论是什么，都可能是错误的，因此要以一种允许我们在发现错误时能够纠正它的方式工作。

I believe that the only meaningful measure of quality in our code then is our ability to change it.

我相信，我们代码质量唯一有意义的衡量标准就是我们改变它的能力。

So I always strive for the simplest, easiest to read, easiest to change solution that I can find.

所以我总是努力寻找我能找到的最简单、最易读、最易于更改的解决方案。

But what does ease of change really mean when a large language model rewrites all of the code from scratch nearly every time, however small the change?

但是，当一个**大语言模型**几乎每次都从头重写所有代码，无论变化多么微小，那么“易于更改”又真正意味着什么呢？

Does that mean that all the code is now equally easy to change? Well, not really.

这是否意味着现在所有的代码都同样容易更改了呢？嗯，不完全是。

The code's only easy to change if we can also determine that after each change, however big or small, it still does everything that it's supposed to.

只有当我们能够确定在每次更改（无论大小）之后，代码仍然能完成它所有应该做的事情时，它才算是容易更改的。

But how can we determine that unless we specify it in detail precisely what our system is meant to do?

但是，除非我们详细而精确地说明我们的系统应该做什么，否则我们如何能确定这一点呢？

For humans, this sense of what is it meant to do is often implicit. It isn't usually written into the code.

对人类而言，这种“它应该做什么”的感觉通常是隐性的，通常不会写进代码里。

But for AI generated code, that's an even bigger problem. I think there are three big problems that the use of AI in programming highlights for us.

但对于AI生成的代码来说，这是一个更大的问题。我认为AI在编程中的应用凸显了三个大问题。

## Three Core Problems Highlighted by AI

How do we specify what it is that we want with any degree of precision?

我们如何以任何精确度来指定我们想要什么？

How do we confirm that what we that we got what we wanted?

我们如何确认我们得到了我们想要的东西？

And how do we retain our ability to make measurable progress in small controlled steps?

我们又如何保持在小的、受控的步骤中取得可衡量进展的能力？

The first problem goes to the vagueness and imprecision of natural language.

第一个问题关乎自然语言的模糊性和不精确性。

The second highlights the even more important role of automated testing for code written by an AI.

第二个问题凸显了自动化测试对于AI编写的代码所扮演的更为重要的角色。

And the third is about another quite deep problem, the profound difference between the way that machines write code and the way that we humans do.

第三个问题则涉及另一个相当深刻的问题，即机器编写代码的方式与我们人类编写代码的方式之间存在的巨大差异。

## The Necessity of Incrementalism and Testing

Fundamentally, this matters because of our ability to reliably reproduce a result. All successful systems evolve over time.

从根本上说，这很重要，因为它关系到我们可靠地重现结果的能力。所有成功的系统都会随着时间演变。

That means that we need to be able to change them when our circumstances or our understanding changes.

这意味着当我们的环境或理解发生变化时，我们需要能够改变它们。

Humans who are good at building complex systems do so by compartmentalizing the problems so that they can retain their ability to make change safely in one part of the system without those changes leaking out into other parts of the system.

擅长构建复杂系统的人类通过将问题划分区隔来实现这一点，这样他们就能保持在系统的一个部分安全地进行更改，而不会让这些更改泄露到系统的其他部分。

This is true in physical engineering as well as software engineering and it results in all complex systems being built in this sequence of small changes however we organize the building of them.

无论是在物理工程还是软件工程中，这都是成立的，它导致了所有复杂系统都是通过一系列微小的变化来构建的，无论我们如何组织它们的构建过程。

So my idea that the definition of highquality in software is defined by how easy it is to change is I think rather important because we must nearly always be able to change it.

所以我认为，软件高质量的定义取决于其修改的难易程度，这个观点相当重要，因为我们几乎总是需要能够修改它。

This highlights the importance of ideas like **continuous integration** (CI: 持续集成，一种软件开发实践，即团队开发成员经常集成他们的工作) and **continuous delivery** (CD: 持续交付，一种软件工程方法，使得软件可以在任何时间点被可靠地发布) for building complex software systems.

这凸显了像**持续集成**和**持续交付**这样的理念在构建复杂软件系统中的重要性。

To me this is independent of whether or not we use AIs to write the code.

对我来说，这与我们是否使用AI来编写代码无关。

AIs though don't write code the way that we do. Most of them generate the code from scratch, often after every small change.

然而，AI编写代码的方式与我们不同。它们大多数是从头开始生成代码，通常在每次微小更改后都会这样做。

Ironically, this same problem in ignoring the importance and ability to revisit and correct or enhance code has been the stumbling block that has seen off every other attempt at raising the level of abstraction in programming from 4Gs and model driven development in the 1990s to low code and no code systems.

具有讽刺意味的是，正是这个忽略了重新审视、修正或增强代码的重要性和能力的问题，成为了从1990年代的第四代语言（4GLs）和模型驱动开发到低代码和无代码系统等所有旨在提高编程抽象层次尝试的绊脚石。

Now they are all built on the assumption that the code would be right first time and wouldn't need correcting and so roundtripping the ability to go back to existing code and correct or enhance it was difficult if not impossible.

现在，它们都建立在代码第一次就会是正确的、不需要修正的假设之上，因此，往返（roundtripping）——即返回到现有代码并进行修正或增强的能力——即使不是不可能，也是非常困难的。

Many of these attempts were not even version controllable and we seem to be in danger of making the same mistake yet again with AI programming.

这些尝试中有很多甚至无法进行版本控制，我们似乎正面临着用AI编程再次犯下同样错误的危险。

Ignoring the problem of being able to update the code is stupid because it relies on us and the world being perfect and neither of us are.

忽略能够更新代码的问题是愚蠢的，因为它依赖于我们和世界都是完美的，而我们两者都不是。

AI has this problem and it doesn't at the same time.

AI 同时存在这个问题，也同时不存在这个问题。

If it can recreate each even complex software from scratch given some instructions then do we still really need incrementalism?

如果它能根据一些指令从头开始重新创建每一个复杂的软件，那么我们真的还需要增量主义吗？

I think there are two answers to this but neither line up with well with vibe coding.

我认为对此有两个答案，但两者都与“Vibe Coding”不太契合。

If I as a human programmer build a complex system, complex enough so that I can't hold every last detail of what I want and what I did in my head and now I want to make a small change to it without breaking things.

如果我作为一个人类程序员，构建了一个复杂的系统，复杂到我无法记住我想要和做过的每一个细节，而现在我想对它做一个小小的改动而不破坏任何东西。

I can only be confident of my ability to do that in two ways.

我只有两种方式可以对自己的能力有信心。

I can test everything and then run all my tests again later to confirm that they still pass.

我可以测试所有东西，然后在之后再次运行所有测试，以确认它们仍然通过。

Or I can design my system in a ways that allow me to change code in one part place without worrying too much about what may happen elsewhere.

或者，我可以设计我的系统，使其允许我在一个地方更改代码，而不用过多担心其他地方可能发生什么。

But that second approach is foundationally built on the assumption of deterministic in incrementalism in execution and design.

但第二种方法的基础是建立在执行和设计中增量主义的确定性假设之上的。

Can I be confident that my compiler or language will interpret the code that I didn't change in exactly the same way as it did last time?

我能确信我的编译器或语言会以与上次完全相同的方式解释我未更改的代码吗？

Can I be equally confident that my AI can do the same? What do I version control to achieve this?

我能同样确信我的AI也能做到同样的事吗？我需要对什么进行版本控制来实现这一点？

What can I version control to achieve this? If I can do this, I only have to worry if my new change is correct and the isolation between the old code and the new code is good enough for me to rely on.

我能对什么进行版本控制来实现这一点？如果我能做到这一点，我只需要担心我的新更改是否正确，以及旧代码和新代码之间的隔离是否足够好，可以让我依赖。

But if I can't, I'm lost. If the AI regenerates all the code from scratch every time or does that occasionally or is learning new things and so changes how it interprets my instructions, then I can no longer trust it to recreate something that works as it did before.

但如果我做不到，我就迷失了。如果AI每次都从头重新生成所有代码，或者偶尔这样做，或者它正在学习新东西从而改变了解释我指令的方式，那么我就再也不能相信它能重新创造出和以前一样工作的东西。

So I need to check that it does. This makes automated testing, **continuous integration**, and **continuous delivery** even more important for AI generated code than it is for human written code.

所以我需要检查它是否做到了。这使得自动化测试、**持续集成**和**持续交付**对于AI生成的代码比对于人类编写的代码更为重要。

## The Future: Executable Specifications

And this isn't just me saying this. I recently saw an excellent video making the same point from an open AI researcher.

而且不只是我这么说。我最近看到一个来自OpenAI研究员的精彩视频，也提出了同样的观点。

My point and his point is that the best way to prompt an AI is with an executable specification.

我和他的观点都是，提示AI的最佳方式是使用一个可执行的规范。

That is a precise accurate example that describes exactly how the system you that you want to build should behave in clearly defined repeatable circumstances.

那是一个精确的例子，它在清晰定义、可重复的情况下，准确描述了你想要构建的系统应该如何行为。

So that these specifications both clearly define what we want the system to do and also allow us to verify that it does it.

这样，这些规范既能清晰地定义我们希望系统做什么，也能让我们验证它确实做到了。

Programming moves then from specifying implementation detail to more clearly and more precisely specifying the intent of the system that we want to build.

于是，编程就从指定实现细节转向更清晰、更精确地指定我们想要构建的系统的意图。

If you'd like to learn more about how to do that, check out my training course, Acceptance Testing **BDD** (Behavior-Driven Development: 行为驱动开发，一种敏捷软件开发的技术) from Stories to Executable Specifications, which includes an example of programming out with AI like this.

如果你想了解更多关于如何做到这一点，可以看看我的培训课程《验收测试**BDD**：从故事到可执行规范》，其中包含了一个像这样用AI进行编程的例子。

So, Vibe coding doesn't address any of these problems.

所以，“Vibe Coding”没有解决这些问题中的任何一个。

It's simply not good enough. Software engineering isn't dying, it's changing.

它就是不够好。软件工程没有消亡，它在改变。

I'd argue that these three problems are fundamental to the nature of code, AI generated or not.

我认为这三个问题是代码本质的基础，无论代码是否由AI生成。

And any next step in programming must address all of them or it's not going to work.

编程的任何下一步都必须解决所有这些问题，否则将行不通。

Thank you very much indeed for watching. And if you enjoy our stuff here on the Modern Software Engineering channel, please do consider supporting our work by joining our Patreon community.

非常感谢您的观看。如果您喜欢我们现代软件工程频道的内容，请考虑加入我们的Patreon社区来支持我们的工作。

And if you're already a Patreon member, thank you very much indeed once again for your support.

如果您已经是Patreon会员，再次非常感谢您的支持。

And I hope you're enjoying the privileges that you get from being a member. Thank you and bye-bye.

我希望您正享受着作为会员所获得的特权。谢谢，再见。