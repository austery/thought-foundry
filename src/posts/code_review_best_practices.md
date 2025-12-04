---\
title: 代码审查最佳实践 (Code Review Best Practices)
summary: 本课程全面讲解了代码审查的最佳实践，内容涵盖了代码审查的基础流程、作为被审查者如何创建高质量的拉取请求、作为审查者如何提供有效反馈，以及如何处理具有挑战性的情况。课程强调软技能的重要性，旨在帮助开发者通过专业的代码审查，提升代码质量，促进团队协作和知识共享，从而最大化软件开发过程的价值。
area: null
category: null
project: []
tags:
  - code-review
  - 团队协作
  - 软件开发
  - 软技能
people: []
companies_orgs: []
products_models: []
media_books: []
date: 2025-08-07
author: Lei
speaker: Andrejs Doronins
channel: null
draft: true
file_name: code_review_best_practices.md
guest: null
insight: 这是之前Ganesh要求大家上的一个培训课程，当时匆匆过了一遍，没有发现有多少用处，感受大家都是这么操作的。现在在CMT E2E project,发现问题了，来来回回搞了好久，就是approve，code
  quality issue我可以理解，但是为了一个名称的问题反复纠结，真是让人气愤。
layout: post.njk
series: ''
source: https://app.pluralsight.com/library/courses/code-review-best-practices/transcript
---\
## 课程简介

Hi, everyone. My name is Andrejs Doronins, and welcome to the course, Code Review: Best Practices.

大家好。我叫 Andrejs Doronins，欢迎来到《代码审查：最佳实践》这门课程。

Code reviews are an essential part of the software development process.

代码审查是软件开发流程中至关重要的一环。

It's widely accepted that it brings a lot of value.

人们普遍认为它能带来很多价值。

For example, it helps catch bugs early and raise code quality.

例如，它有助于及早发现错误并提升代码质量。

But it's not all well and good.

但并非一切都是完美无缺的。

Code reviews are amplifiers.

代码审查是放大器。

They amplify the good and the bad, and this course will show you how to maximize the good and get rid of the bad.

它们会放大优点，也会放大缺点，而本课程将向你展示如何最大化其优点并消除其缺点。

Some of the major topics that we will cover include establishing fundamental processes of code reviews, creating a great pull request as a reviewee, and providing effective feedback as a reviewer.

我们将涵盖的一些主要主题包括：建立代码审查的基本流程，作为被审查者如何创建一个出色的拉取请求，以及作为审查者如何提供有效的反馈。

By the end of this course, you will have the necessary soft skills to participate on code reviews as a professional to ensure they provide maximum value.

完成本课程后，你将具备作为专业人士参与代码审查所需的软技能，以确保审查能提供最大价值。

Before beginning this course, you should be familiar with the basics of software development process with any technology stack in a professional setting, writing some code, committing, pushing, creating a pull request, and merging.

在开始本课程之前，你应该熟悉在专业环境中使用任何技术栈进行软件开发的基本流程，包括编写一些代码、提交、推送、创建拉取请求和合并。

I hope you'll join me on this journey to learn effective code reviewing with the course, Code Review: Best Practices, here at Pluralsight.

我希望你能加入我的行列，在 Pluralsight 与我一同学习《代码审查：最佳实践》这门课程，掌握有效的代码审查技巧。

## 为什么需要代码审查

Hello, my name is Andrejs Doronins, and welcome to my course, Code Review: Best Practices.

你好，我叫 Andrejs Doronins，欢迎来到我的课程《代码审查：最佳实践》。

There are many good reasons to do code reviews, but you will see vastly different approaches, depending on where you work.

进行代码审查有很多充分的理由，但根据你工作地方的不同，你会看到截然不同的方法。

However, almost all code reviews have these goals and benefits in common.

然而，几乎所有的代码审查都有这些共同的目标和好处。

Catch bugs.

发现错误。

Yes, just reading through code allows other team members to catch logical or implementation bugs relatively early, and, as such, cheaply.

是的，仅仅通读代码就能让其他团队成员在相对早期发现逻辑或实现上的错误，因此成本也更低。

Remember, the later you catch a bug, the more expensive it is to fix.

请记住，你发现一个错误的时间越晚，修复它的成本就越高。

Production is too late, but ideally you want to catch bugs before any official testing and even before the code is merged into the rest of the codebase.

在生产环境中发现就太晚了，理想情况下，你希望在任何正式测试之前，甚至在代码合并到主代码库之前就发现错误。

Another goal is to catch code quality issues.

另一个目标是发现代码质量问题。

Almost no one outside the development team ever cares about code quality, definitely not the paying customer or the end user.

几乎开发团队之外的任何人都不会关心代码质量，付费客户或最终用户肯定不会。

They just want the software to work.

他们只希望软件能够正常工作。

But it is practically a law that quality decreases as the software grows and increases in size and complexity.

但实际上有一条定律：随着软件的增长以及规模和复杂性的增加，质量会下降。

If developers don't want their progress to grind to a halt, it is in their best interest to maintain code quality.

如果开发者不希望他们的进展陷入停滞，维护代码质量是他们最大的利益所在。

And again, it's cheaper to do things right the first time and catch issues before merging, rather than promise to yourself that you'll refactor it later.

而且，第一次就把事情做对并在合并前发现问题，比向自己承诺稍后会重构要便宜得多。

Code review is also a learning opportunity for the pull request creator.

代码审查对于**Pull Request**（拉取请求：一种通知团队成员你已将代码推送到仓库分支的机制）的创建者来说也是一个学习机会。

It's a chance to receive feedback that allows you to gain knowledge.

这是一个接收反馈的机会，让你增长知识。

How to write better, cleaner code.

如何编写更好、更整洁的代码。

Maybe you didn't follow a good principle or pattern that you've never heard of.

也许你没有遵循一个你从未听说过的好原则或模式。

Perhaps you reinvented the wheel and someone pointed out that you could've used an existing function or library to achieve the same goal faster.

也许你重复造了轮子，而有人指出你本可以使用现有的函数或库来更快地实现同样的目标。

Code review is also a learning opportunity for the reviewer.

代码审查对审查者来说也是一个学习的机会。

They might learn all the things I mentioned from the person who created the pull request.

他们可能会从创建拉取请求的人那里学到我提到的所有东西。

As such, code review serves as an exchange of best practices and experiences.

因此，代码审查是交流最佳实践和经验的平台。

It is a great opportunity to grow as a programmer.

这是作为一名程序员成长的绝佳机会。

Finally, developers may get out of sync when working on their tasks and not communicating with each other.

最后，开发人员在各自完成任务且互不沟通时，可能会出现不同步的情况。

Looking at each other's code is a great way to check if you're still on the same page.

查看彼此的代码是检查你们是否仍在同一进度上的好方法。

In a way, a code review is a virtual place where people can gather and discuss specific work‑related matters revolving around code.

在某种程度上，代码审查是一个虚拟场所，人们可以在这里聚集并讨论与代码相关的具体工作事宜。

In a way, it can be as valuable or even more valuable than daily or weekly stand‑ups.

在某种程度上，它可能与每日或每周的站会同样有价值，甚至更有价值。

In essence, code reviews should serve you and your team to write better software.

本质上，代码审查应该服务于你和你的团队，以编写出更好的软件。

It's meant to be a process that leads to a win‑win situation.

它旨在成为一个导致双赢局面的过程。

## 当代码审查出现问题时

There is a dark side to code reviews, however, Yes, as a process, code review is not 100% force for good.

然而，代码审查也有其阴暗面。是的，作为一个流程，代码审查并非百分之百是好事。

Instead, it can be seen as an amplifier.

相反，它可以被看作是一个放大器。

Let me repeat that.

我再说一遍。

Code reviews are an amplifier.

代码审查是一个放大器。

They amplify the good and the bad.

它们会放大好的方面，也会放大坏的方面。

If the culture of the organization is healthy, code reviews bring some or all of the benefits that I've talked about in the previous clip.

如果组织文化是健康的，代码审查会带来我在前一个片段中谈到的部分或全部好处。

It amplifies the good.

它放大了优点。

However, poor company culture, difficult personalities, and, most importantly, unprofessional behavior may get amplified through code reviews as well.

然而，糟糕的公司文化、难相处的个性，以及最重要地，不专业的行为也可能通过代码审查被放大。

In such cases, the cost of code reviews never pays off.

在这种情况下，代码审查的成本永远得不到回报。

You may get into unnecessary arguments that slow down development, confrontations, arrogant or condescending comments, all of which lead to decreased morale.

你可能会陷入不必要的争论，从而减慢开发速度，还可能遇到对抗、傲慢或居高临下的评论，所有这些都会导致士气下降。

The fear of attracting such negative comments may lead to developers hide defects or cut corners, and in the worst case, contribute to staff turnover.

对引来此类负面评论的恐惧可能导致开发人员隐藏缺陷或偷工减料，在最坏的情况下，还会导致员工流失。

In other words, people leave the team or the company out of frustration.

换句话说，人们会因为沮丧而离开团队或公司。

This course isn't about establishing a company‑wide corporate culture, and it's not exactly about dealing with difficult personalities, but specifically, the code review culture and the relevant professional behavior in its context.

本课程不是关于建立全公司的企业文化，也不完全是关于如何与难相处的人打交道，而是专门针对代码审查文化及其背景下的相关专业行为。

And it's crucial to improve code quality and foster a constructive exchange of ideas and knowledge

改善代码质量和促进建设性的思想和知识交流至关重要。

## 本课程的目标受众

This course is for someone who is just starting out as a software developer, automation engineer, or a general programmer.

本课程适合刚起步的软件开发人员、自动化工程师或普通程序员。

Sooner rather than later, you will start participating on code reviews, and the sooner you learn what a good one looks like, the better.

你迟早会开始参与代码审查，越早了解一个好的代码审查是什么样的，就越好。

You may also be someone who has been doing code reviews for a while, and you're seeking how to improve the code review process.

你也可能已经做了一段时间的代码审查，并且正在寻求如何改进代码审查流程的方法。

You may not always feel comfortable receiving feedback or perhaps observe that pull requests stay open for days without consensus anywhere in sight.

你可能并不总是乐于接受反馈，或者可能观察到拉取请求（pull requests）在没有达成任何共识的情况下，会开放好几天。

So you want to become a better code reviewee, someone who submits the code for review, and a better code reviewer, someone who reviews other people's code.

所以你想成为一个更好的被审查者，即提交代码供审查的人，以及一个更好的审查者，即审查他人代码的人。

## 本课程的内容范畴

To participate on code reviews, you obviously need to know how to program, either write code or read code and understand what is going on.

要参与代码审查，你显然需要知道如何编程，无论是编写代码还是阅读代码并理解其内容。

This is the what of code reviews.

这就是代码审查的“内容”。

It is normal to point out issues with code that is not clean, that doesn't follow best practices, that a certain pattern should be used, and so on.

指出代码不整洁、不遵循最佳实践、应该使用某个模式等问题都是正常的。

We can also say that this is the hard skills aspect, and this course is not a course on such hard skills.

我们也可以说这是硬技能方面，而本课程并非关于这类硬技能的课程。

Pluralsight provides courses on these topics in the most popular languages.

Pluralsight 提供了关于这些主题的最流行语言的课程。

In this course, you might see some code, but it will be used as a decoration, so to speak, or the background for the main topic, the code review process itself and the soft skills that surround it.

在本课程中，你可能会看到一些代码，但可以说，它只是作为装饰，或者是主要议题的背景，即代码审查流程本身及其相关的软技能。

It answers the how questions, how to submit a pull request that will be approved quickly, how to comment constructively and with tact, how to respond to comments, how to handle disagreements and so on.

它回答了“如何”的问题，比如如何提交一个能被快速批准的拉取请求，如何有建设性且有分寸地发表评论，如何回应评论，如何处理分歧等等。

## 词汇与缩写

Just a bit of vocabulary and context before we get started to ensure we are on the same page.

在我们开始之前，先介绍一些词汇和背景知识，以确保我们的理解是一致的。

I assume you work in an environment with a fairly standard process.

我假设你在一个流程相当标准的环境中工作。

You write some code, commit and push using some kind of version control system, typically **Git**, but it doesn't have to be.

你编写一些代码，使用某种版本控制系统（通常是 **Git**：一个开源的分布式版本控制系统）进行提交和推送，但也不一定非得是它。

You then create a **pull request**, or a **PR**, a request to merge your code into another branch, usually the main branch.

然后你创建一个**拉取请求**（**pull request** 或 **PR**），这是一个请求，要求将你的代码合并到另一个分支，通常是主分支。

When a PR is created, your changes may be viewed using a review tool such as **Gerrit**, an open‑source Java tool, **GitHub**, or **Bitbucket**.

当一个 **PR** 被创建后，你的更改可以使用审查工具来查看，例如 **Gerrit**（一个开源的 Java 工具）、**GitHub**（全球最大的代码托管平台之一）或 **Bitbucket**（Atlassian 公司提供的代码托管服务）。

These companies offer code review tools, along with their repository hosting.

这些公司在提供代码仓库托管服务的同时，也提供代码审查工具。

If you submit a pull request, you are then the reviewee.

如果你提交了拉取请求，那么你就是被审查者（reviewee）。

Alternatively, I may say a PR creator.

或者，我也可以称之为 PR 创建者。

If you leave comments on someone's pull requests, or PR, then you are a reviewer.

如果你在别人的拉取请求（或 PR）上留言，那你就是审查者（reviewer）。

The act of using these tools to review other people's code is what I refer to as code review.

使用这些工具来审查他人代码的行为，就是我所说的代码审查。

Of course, code review may happen as part of a pair programming, while two people are sitting in front of the same screen.

当然，代码审查也可能作为结对编程的一部分，在两个人坐在同一屏幕前时进行。

But for the purposes of this course, code review mostly means reviewing using a review tool after a pull request has been created.

但就本课程而言，代码审查主要指的是在创建了拉取请求后，使用审查工具进行审查。

Once the code review is complete, the PR may be merged.

一旦代码审查完成，该 PR 就可以被合并。

## 课程大纲

This is what we're going to cover in this course.

以下是我们在本课程中将要涵盖的内容。

We'll start with exploring what fundamental processes can be established for all code reviews, rules and guidelines that should be applied and followed all the time, thus removing certain inefficiencies, such as discussing similar issues over and over and over.

我们将首先探讨可以为所有代码审查建立哪些基本流程，这些规则和指南应该一直被应用和遵循，从而消除某些低效行为，比如反复讨论类似的问题。

We'll then look at simple tips that can be applied when creating a pull request.

然后，我们将看看在创建拉取请求时可以应用的一些简单技巧。

A well‑crafted PR may prevent comments asking for clarification and help reviewers look through your changes quickly and efficiently, Then we'll change hats and become reviewers, and this is probably the most important part of this course.

一个精心制作的 **PR** 可以避免要求澄清的评论，并帮助审查者快速高效地查看你的更改。然后我们将转换角色，成为审查者，这可能是本课程最重要的部分。

If you spot issues, how do you frame your thoughts in the most positive and helpful manner to minimize the chance of the reviewee getting defensive or starting a long argument about a single change?

如果你发现问题，你该如何以最积极、最有帮助的方式来表达你的想法，以最小化被审查者产生防御心理或就一个单一的更改展开长时间争论的可能性？

These tips should hopefully make the majority of pull requests in your team a platform for pleasant and productive learning.

希望这些技巧能让你团队中的大多数拉取请求成为一个愉快且富有成效的学习平台。

However, in the odd cases when things are still difficult, you will learn how to navigate challenging situations, how to prevent them in the first place, preventing is almost always better than reacting, and if you couldn't, then choose from several reactive strategies.

然而，在少数仍然困难的情况下，你将学习如何应对挑战性情境，如何从一开始就预防它们——预防几乎总是比应对更好——如果无法预防，那么可以从几种应对策略中进行选择。

See you in the next module.

下一模块见。

## 建立代码审查的基础流程

Hello, and welcome to the next module, Establishing the Fundamental Processes for Code Reviews.

你好，欢迎来到下一个模块：建立代码审查的基础流程。

If you wish to play any kind of game with your friends, you need to be sure you all understand the rules before you start and not debate what the rules should be when you're halfway through.

如果你想和朋友玩任何一种游戏，你需要确保在开始之前你们都明白规则，而不是在玩到一半时才去争论规则应该是什么。

In this module, I will cover several important points that should be established before any review starts, and they aren't necessarily applicable to just the reviewee or just the reviewer, the groundwork, so to speak.

在这个模块中，我将涵盖几个在任何审查开始前都应该确立的重要点，它们不一定只适用于被审查者或审查者，可以说是基础工作。

This includes agreeing on style guides in advance and setting up automation tools that do the boring parts of the code review process, but I will also talk about having the right attitudes, and I'll cover them one by one.

这包括提前商定风格指南，并设置自动化工具来完成代码审查过程中枯燥的部分，但我也会谈到拥有正确的态度，我会逐一介绍。

### 应用风格指南

Some heated debates can materialize out of thin air whether you should use tabs or spaces, where to place the curly braces, the format of comments, and other miscellaneous things.

关于应该使用制表符还是空格、花括号放在哪里、注释的格式以及其他杂项，一些激烈的争论可能会凭空出现。

One might argue that it doesn't matter.

有人可能会说这不重要。

Let everyone commit using their own style.

让每个人都用自己的风格提交代码。

But consider this: imagine you are reading a book, and inside, one page doesn't have any punctuation at all.

但请想一下：想象一下你在读一本书，其中一页完全没有标点符号。

You're welcome to pause the video now and read the text and see how it feels.

欢迎你现在暂停视频，阅读文本，看看感觉如何。

The next one uses commas instead of a full stop everywhere, and there's no capitalization.

下一页到处都用逗号代替句号，而且没有大写字母。

The next one has double spaces between every second words, and the words are in camel case.

再下一页，每隔一个词就有双倍空格，而且单词都是驼峰式命名。

And every page would have a new kind of formatting.

每一页都会有新的格式。

I would argue that you wouldn't want to read such a book for very long.

我认为你不会想长时间阅读这样一本书。

Our brains will require extra effort to constantly adapt to such inconsistent styles, and it distracts us from the actual information we're trying to consume.

我们的大脑需要额外的努力来不断适应这种不一致的风格，这会分散我们对试图获取的实际信息的注意力。

This is the reason why we all learn basic grammar and punctuation rules in school.

这就是为什么我们都在学校学习基本语法和标点规则的原因。

And the same goes for code.

代码也是如此。

Inconsistent spacing, braces, style, and other things chip away from our focus, and we don't want that when assessing something as complex as code.

不一致的间距、括号、风格和其他东西会削弱我们的注意力，在评估像代码这样复杂的东西时，我们不希望出现这种情况。

It's not just a minor annoyance; it lowers our ability to spot bugs and issues that matter.

这不仅仅是一个小小的烦恼；它降低了我们发现重要错误和问题的能力。

So here's the process you and your team should follow concerning code style, if you haven't already.

所以，如果你还没有这样做，这里是你和你的团队应该遵循的关于代码风格的流程。

Agree on something, anything.

达成共识，任何共识都行。

You don't have to invent things; you can just reuse or tweak many of the existing style guides, such as those by Google or Twitter.

你不必自己发明东西；你可以直接重用或调整许多现有的风格指南，比如谷歌或推特的。

They're usually one Google search away.

它们通常一个谷歌搜索就能找到。

You can build your own incrementally, but it's a lot of work.

你可以逐步建立自己的，但这需要大量工作。

Then document it, at least briefly.

然后记录下来，至少简要地记录。

If you don't want to do even that, then just attach the style configuration file to the internal wiki where others can find it.

如果你连这都不想做，那就把风格配置文件附加到内部的维基上，让其他人可以找到它。

And that leads us to the next step: create an importable configuration file for one or more IDEs.

这就引出了下一步：为一个或多个**IDE**（集成开发环境：一种包含代码编辑器、编译器和调试器等工具的软件）创建一个可导入的配置文件。

I mean, you have one, right?

我的意思是，你有一个吧？

Typically it's in XML or JSON format, or whatever your IDE accepts.

通常它是 XML 或 JSON 格式，或者你的 IDE 接受的任何格式。

The important thing is to enable everyone to just import the style configuration in a few clicks and forget about it.

重要的是让每个人都能通过几次点击就导入风格配置，然后就不用再管它了。

Use the configured keyboard shortcuts in your IDE.

在你的 IDE 中使用配置好的键盘快捷键。

In IntelliJ on Windows, that would be Ctrl+Alt+L, which reformats the currently open source file.

在 Windows 上的 IntelliJ 中，快捷键是 Ctrl+Alt+L，它可以重新格式化当前打开的源文件。

In VS Code, it's Ctrl+Alt+F.

在 VS Code 中，是 Ctrl+Alt+F。

This is a good start, but we can do better.

这是一个好的开始，但我们可以做得更好。

### 不要浪费宝贵的时间

The developer's time is valuable and expensive.

开发人员的时间是宝贵且昂贵的。

Whether you are a developer or a manager, you want that time to be spent well.

无论你是开发人员还是经理，你都希望时间能被有效利用。

Arguing about commenting on and fixing style issues is not time well spent.

在评论和修复风格问题上争论不休不是有效利用时间。

Established style guides fix only part of this trio.

已建立的风格指南只解决了这三者中的一部分。

They remove the arguing, but we can still make styling and similar mistakes, and someone needs to spot it, comment on it, and you need to fix it.

它们消除了争论，但我们仍然可能犯下格式化和类似的错误，需要有人发现、评论，然后你需要修复它。

It's a simple, but error‑prone and tedious task.

这是一个简单但容易出错且乏味的任务。

Automation tools are perfect for this.

自动化工具非常适合这个任务。

I program in Java a lot, and IntelliJ offers multiple options that it can do for you before committing, Reformat code, Optimize imports, Update copyright, and so on.

我经常用 Java 编程，IntelliJ 提供了多种在提交前可以为你做的选项，比如重新格式化代码、优化导入、更新版权等等。

You can enable these once, and it will always apply the imported configurations, and you will never have to think about this and focus on more interesting and challenging tasks.

你可以一次性启用这些选项，它会一直应用导入的配置，你将再也不用考虑这些，可以专注于更有趣和更具挑战性的任务。

So agreeing on style issues is a good start, but it should be auto applied by some tool before the pull request is even submitted; this way, reviewers won't spend time spotting and commenting on such issues, and you won't have to change and push minor fixes.

因此，就风格问题达成一致是一个好的开始，但应该在提交拉取请求之前就由某个工具自动应用；这样，审查者就不必花时间发现和评论这类问题，你也不必更改和推送微小的修复。

### 自动化静态代码分析

It's not just the spotting of style issues that can be delegated to tools.

可以委托给工具的不仅仅是发现代码风格问题。

Standard bugs, security vulnerabilities, code smells, and many others can be detected by static analysis tools.

标准错误、安全漏洞、代码异味（code smells）以及许多其他问题都可以通过静态分析工具检测到。

A typical bug is an infinite loop.

一个典型的错误是无限循环。

It's not easy to spot if the body of the loop is big and complex.

如果循环体庞大而复杂，就不容易发现。

You might focus on the logic, but the fact that it never exits may slip under your radar.

你可能专注于逻辑，但它永远不会退出的事实可能会被你忽略。

Or here's another example.

或者这里有另一个例子。

Take a look and tell me if anything's wrong with it.

看一看，告诉我它有什么问题。

Pause the video if you like.

如果你愿意，可以暂停视频。

The condition here is always false.

这里的条件永远为假。

Other conditions might always be true.

其他条件可能永远为真。

Again, not easy to spot when someone doesn't explicitly ask you to focus on that particular line of code.

同样，当没有人明确要求你专注于那一行特定的代码时，这也不容易发现。

And there are dozens of more lines of code to review and focus on.

而且还有几十行代码需要审查和关注。

In this case, the and operator needs to be changed to the or operator, or one of the comparison operators needs to change, depending on what we want to achieve.

在这种情况下，与运算符需要改成或运算符，或者其中一个比较运算符需要更改，这取决于我们想要实现什么。

This is something that a tool can spot very easily.

这是一个工具可以很容易发现的问题。

Finally, a typical poor coding practice example in many programming languages is comparing Booleans with true or false keywords.

最后，在许多编程语言中，一个典型的糟糕编码实践是将布尔值与 true 或 false 关键字进行比较。

It's not the end of the world, but it's an established good practice to just name your variables according to the standards in your programming language and evaluate it as is.

这并非世界末日，但根据你所用编程语言的标准来命名变量并直接评估其值，是一种公认的良好实践。

And again, automated static code analysis tools can do this for you.

同样，自动化的静态代码分析工具可以为你完成这项工作。

Modern, powerful IDEs should have these either built in or have plugins that you can install.

现代、强大的 IDE 应该内置这些功能，或者有可以安装的插件。

One of such plugins is **SonarLint**, and it's available for some of the most widely used IDEs, IntelliJ, Eclipse, Microsoft Visual Studio, and VS Code.

其中一个插件是 **SonarLint**（一个能实时发现并修复代码质量和安全问题的 IDE 插件），它适用于一些最广泛使用的 IDE，如 IntelliJ、Eclipse、Microsoft Visual Studio 和 VS Code。

Here's what it looks like in IntelliJ for Java, just to give you a real example.

这是它在 IntelliJ for Java 中的样子，给你一个真实的例子。

Over here I have the infinite loop, a Boolean check that is always false, and a Boolean being compared to a literal.

这里我有一个无限循环，一个永远为假的布尔检查，以及一个与字面量进行比较的布尔值。

The first thing to notice is that they are all highlighted.

首先要注意的是，它们都被高亮显示了。

This is the work of the built‑in static checker.

这是内置静态检查器的工作。

And if I hover over any of these, it will tell us exactly what's wrong with the code in question.

如果我将鼠标悬停在其中任何一个上面，它会准确地告诉我们相关代码有什么问题。

Alternatively, if you have the SonarLint plugin installed, it will list all of the same basic issues and additional issues that are more of recommendations.

或者，如果你安装了 SonarLint 插件，它会列出所有相同的基本问题以及更多属于建议的附加问题。

The added value that SonarLint brings is that you can click on any issue, and in the right pane here, it will describe the what, why, and how in detail, including good and bad examples.

SonarLint 带来的附加价值是，你可以点击任何一个问题，在右侧窗格中，它会详细描述问题是什么、为什么以及如何解决，包括好的和坏的例子。

So it's like having a pair programming buddy built right into the editor.

所以，这就像在编辑器里内置了一个结对编程的伙伴。

But how much can a tool catch, you might ask?

但你可能会问，一个工具能发现多少问题？

A lot.

很多。

There are over 600 rules for Java, nearly 300 rules for JavaScript, and over 400 rules for C#.

Java 有超过 600 条规则，JavaScript 有近 300 条规则，C# 有超过 400 条规则。

You have to admit that it would be quite a challenge to remember them all and pretty much impossible to keep them all fresh in your memory and spot them in a code review.

你必须承认，要记住所有这些规则将是一个相当大的挑战，而且几乎不可能在你的记忆中保持所有这些规则的鲜活，并在代码审查中发现它们。

You should leverage tools before you create a pull request, and you may also integrate and configure them to run checks once the pull request is created.

在创建拉取请求之前，你应该利用工具，你也可以集成并配置它们，在拉取请求创建后运行检查。

One such tool is **SonarQube**, and it will scan your code and post automated comments on whatever issues it finds.

其中一个工具是 **SonarQube**（一个用于持续检查代码质量的开源平台），它会扫描你的代码，并对发现的任何问题发布自动评论。

But be a little careful with it.

但要小心使用它。

You should configure it carefully; otherwise, you might get inundated with comments that will only feel a bit spammy, and the team will end up ignoring them.

你应该仔细配置它；否则，你可能会被大量评论淹没，这些评论只会让人感觉有点像垃圾信息，团队最终会忽略它们。

### 至少有两位审查者

Another important general process question is, how many reviewers should you have on every code review?

另一个重要的一般性流程问题是，每次代码审查应该有多少名审查者？

I've worked in several companies and teams, and it has always been two, and my experience shows that it's a reasonable number.

我曾在几家公司和团队工作过，审查者人数一直是两个，我的经验表明这是一个合理的数字。

But there's an important condition to this: at least one should know the business logic behind the code.

但有一个重要的条件：至少有一位审查者应该了解代码背后的业务逻辑。

It's really, really important.

这真的非常非常重要。

You might write perfectly clean code that follows all the best practices, but you may have misunderstood the requirements and simply implemented the wrong thing, as if you built a shiny sports car, and that's great, but the client was after a family friendly vehicle.

你可能写出了完全整洁、遵循所有最佳实践的代码，但你可能误解了需求，结果只是实现了错误的东西，就好像你造了一辆闪亮的跑车，这很棒，但客户想要的是一辆家用的友好型汽车。

Oops.

糟糕。

So it's important to have a second person who understands the domain and has looked at the requirements.

所以，有一个了解领域并看过需求的第二个人是很重要的。

If there is no such person, then I'd say there is a larger organizational issue that needs to be fixed, that of knowledge sharing.

如果没有这样的人，那么我认为存在一个更大的组织问题需要解决，即知识共享的问题。

And the second reviewer can just check the code quality.

而第二位审查者可以只检查代码质量。

If they know the business logic behind it, great.

如果他们了解背后的业务逻辑，那很好。

If not, they can focus on other things, knowing that somebody else has their back in terms of correct business logic implementation.

如果不知道，他们可以专注于其他事情，因为他们知道在正确的业务逻辑实现方面有其他人支持。

### 代码审查是无阶级的

"I'm new here, so I don't think I will have anything useful to add."

“我刚来，所以我觉得我没什么有用的可以补充。”

Or "what can I possibly comment on a PR of a senior developer?"

或者“我对一个资深开发人员的 PR 能有什么评论呢？”

Or worse still, "You don't understand this. You're just a junior. Just approve this."

或者更糟的是，“你不懂这个。你只是个初级。直接批准就行了。”

Code reviews should be classless.

代码审查应该是无阶级的。

Being the most senior person on the team does not imply that your code is perfect.

作为团队中最资深的人，并不意味着你的代码是完美的。

Even if, in the rare case, the code is flawless, the review provides an opportunity for mentorship and collaboration, and, as a bonus, diversifies the understanding of code in the codebase.

即使在极少数情况下代码是完美的，审查也提供了一个指导和协作的机会，并且，作为额外的好处，它还能使代码库中的代码理解多样化。

There's a huge difference between, "Yeah, I'm familiar with this bit. I can work with it," and "I've never seen this before. I don't want to touch it."

“是的，我熟悉这部分。我可以处理它”和“我以前从未见过这个。我不想碰它”之间有巨大的差异。

If you're a senior developer, encourage everyone to review your pull requests and be ready for questions that might seem obvious to you, but remember, they're not obvious who is new to the team, the domain, or they're still just learning.

如果你是资深开发者，鼓励每个人审查你的拉取请求，并准备好回答那些对你来说可能显而易见的问题，但请记住，对于新加入团队、不熟悉领域或者仍在学习中的人来说，这些问题并不明显。

If you're new to the team, don't be afraid to leave comments on things you think should be corrected.

如果你是团队新人，不要害怕对你认为应该纠正的事情发表评论。

Every little helps.

点滴皆有助益。

And if your team encourages even the smallest things to be fixed, such as typos in comments, then by all means, do so.

如果你的团队鼓励修复哪怕是最小的问题，比如注释中的拼写错误，那么请务必这样做。

Having said all this, a pull request is a way for other people to learn, yes, but that doesn't mean it's okay for a pull request to stay open while a senior developer gives a weeklong personalized tutorial to his more junior peers.

话虽如此，拉取请求是其他人学习的一种方式，是的，但这并不意味着一个拉取请求可以一直开放着，让一个资深开发者给他更初级的同事进行为期一周的个性化辅导。

A code review is not a place and time to write educational articles on architectural design patterns used in the pull request.

代码审查不是一个撰写关于拉取请求中使用的架构设计模式的教育性文章的地方和时间。

If you're a senior developer and you have an impression that someone lacks the knowledge, feel free to set up a knowledge transfer session for others.

如果你是一位资深开发者，并且你觉得有人缺乏相关知识，可以随时为他人安排一次知识转移会议。

It will benefit them as they become more knowledgeable, and it will benefit you and your future pull requests, as your team members will become stronger reviewers.

这将使他们变得更有知识，从而受益，同时也会让你和你未来的拉取请求受益，因为你的团队成员将成为更强大的审查者。

### 接受存在不同的解决方案

It's best to keep in mind that a problem almost always has more than one solution.

最好记住，一个问题几乎总是有不止一个解决方案。

Of course, not all of them will be equally good, that's for sure.

当然，并非所有方案都同样好，这是肯定的。

But it's also very likely that more than one solution will be reasonably good.

但也很可能不止一个解决方案是相当不错的。

If, for example, you are a reviewer, you might have your favorite solution, but the author's solution may also be valid.

例如，如果你是审查者，你可能有自己偏爱的解决方案，但作者的方案也可能是有效的。

Distinguish between common best practices and your personal taste, and don't force your solution on the author if theirs is also fine.

区分通用的最佳实践和你的个人品味，如果作者的方案也可以，就不要强加你的解决方案。

### 不要让 PR 悬置数日

A code review should be done within hours.

代码审查应该在几小时内完成。

It shouldn't stay open for days.

它不应该开放好几天。

This is an important convention that everyone on the team needs to agree upon, and it's the responsibility of both parties.

这是团队中每个人都需要同意的一个重要惯例，也是双方的责任。

The rest of this course is dedicated to making code reviews as smooth as possible, with concrete tips for both reviewees and reviewers.

本课程的其余部分致力于使代码审查尽可能顺畅，为被审查者和审查者提供具体的技巧。

If you follow the advice in this course, then hanging PRs will simply not exist.

如果你遵循本课程的建议，那么悬而未决的 PR 将不复存在。

### 模块小结

So much to do before even our first pull request and code review, but as they say, preparation is key.

在我们的第一个拉取请求和代码审查之前，有这么多事情要做，但正如他们所说，准备是关键。

The less you spend on setting up the basic rules and processes, the more time and effort you will spend on each code review, and it accumulates fast.

你在建立基本规则和流程上花费的时间越少，你在每次代码审查上花费的时间和精力就越多，而且会迅速累积。

Agree on and implement style guides, install and leverage static analyzers, make it a habit, and you will be rewarded with work that is not clogged up with tedious checks and fixes.

商定并实施风格指南，安装并利用静态分析器，养成习惯，你将得到回报，工作不再被繁琐的检查和修复所堵塞。

Having at least one reviewer who understands the business is paramount.

至少有一位了解业务的审查者至关重要。

I understand that some teams have their time and resources stretched; I've been there, but try to have a second person on every major feature or component who at least knows the basics.

我理解有些团队的时间和资源很紧张；我经历过，但尽量在每个主要功能或组件上都有第二个人，至少了解基础知识。

Try to establish the right attitudes between yourselves.

试着在你们之间建立正确的态度。

Senior developers aren't always right, because a human being who is always right does not exist.

资深开发者并不总是对的，因为一个永远正确的人是不存在的。

Accept that more than one good solution may exist to any problem.

接受任何问题都可能存在不止一个好的解决方案。

Finally, with the exception of most critical bugs, PRs shouldn't hang for three days or a week for whatever reason.

最后，除了最关键的错误，无论什么原因，PRs 都不应该悬置三天或一周。

If it does, find the reason and try to remedy it.

如果发生了，找出原因并设法补救。

Up next, Submitting a Great Pull Request, how to ensure a smoother review experience.

接下来是“提交一个出色的拉取请求”，如何确保更顺畅的审查体验。

## 提交一个出色的拉取请求

Hello, and welcome to the next module.

你好，欢迎来到下一个模块。

This module presents code review from the perspective of the reviewee.

本模块从被审查者的角度来呈现代码审查。

In other words, this module answers the question, what can you do before asking others to review your pull requests?

换句话说，本模块回答了这样一个问题：在请别人审查你的拉取请求之前，你能做些什么？

The higher the quality of the work you submit, the smoother things will go, so let's get started.

你提交的工作质量越高，事情就会进行得越顺利，所以让我们开始吧。

### 保持谦逊

A lot of things start with having the right mindset, and it's paramount to be humble.

很多事情都始于拥有正确的心态，而保持谦逊至关重要。

We must accept that we are human beings, and we will thus make mistakes.

我们必须接受我们是人类，因此我们会犯错。

But what does that mean in the context of a code review when you are a reviewee?

但在代码审查的背景下，当你是一个被审查者时，这又意味着什么呢？

It means to expect comments on your pull request.

这意味着要预料到你的拉取请求上会有评论。

That's right.

没错。

Unless it's a trivial, one‑line change like a property update or a single renamed variable, the default attitude should be to expect comments and improvement suggestions.

除非是微不足道的一行更改，比如属性更新或单个变量重命名，否则默认的态度应该是预料到会有评论和改进建议。

You may be just starting your coding career, and so it's pretty common and normal to hope that you won't get any comments, and you'll be able to merge right away.

你可能刚刚开始你的编码生涯，所以希望不会收到任何评论，并且能够立即合并，这是很常见和正常的。

I can relate.

我能理解。

I felt like that, too.

我也曾有过那样的感觉。

But on the other hand, despite this kind of thinking being normal, this is most definitely the wrong mindset.

但另一方面，尽管这种想法很正常，但这绝对是错误的心态。

How should you feel when your PR gets approved without a single comment?

当你的 PR 在没有任何评论的情况下被批准时，你应该作何感想？

If you feel relieved, that's bad; that's an indicator you're experiencing undue stress, and hopefully, not because the reviewers are mean.

如果你感到松了一口气，那是不好的；这表明你正承受着不应有的压力，希望不是因为审查者刻薄。

The better reaction to have when you don't get a single comment on a non‑trivial PR is to be surprised.

当你在一个不平凡的 PR 上没有收到任何评论时，更好的反应是感到惊讶。

I work in a small team with a healthy code‑reviewing culture, and I can tell you that I feel strange when there is not a single comment on one of my PRs that is more than, say, 20 lines of code.

我在一个拥有健康代码审查文化的小团队工作，我可以告诉你，当我的某个超过（比如说）20行代码的 PR 没有任何评论时，我会觉得很奇怪。

Is it really that good, or did my peers just scan through the code without really looking?

是真的那么好，还是我的同事只是草草扫过代码而没有仔细看？

So to repeat, be humble and develop an attitude to expect comments on the majority of your pull requests.

所以再说一遍，保持谦逊，并培养一种心态，即预料到你的大部分拉取请求都会有评论。

This is normal.

这很正常。

Not getting any comments PR after PR is not normal.

一个又一个 PR 都没有任何评论，这不正常。

### 这不是“你的”代码

So now you expect comments, and that's good, but you may still feel defensive when someone questions your code.

现在你预料到会有评论，这很好，但当有人质疑你的代码时，你可能仍然会感到防备。

You've spent several days writing it up, you gave it your best, and you're trying to contribute your code to the code base.

你花了好几天时间编写它，你尽了最大努力，你正试图将你的代码贡献给代码库。

And it's not uncommon to get reactions, such as, "You are questioning MY code?!"

并且得到这样的反应并不少见，比如，“你在质疑我的代码？！”

Here's the catch, though.

但问题就在这里。

The code you're submitting is not your code.

你提交的代码不是你的代码。

Yes, you are the author, you are the one who typed it in, but let me repeat, it is not your code.

是的，你是作者，是你输入了它，但请允许我重复一遍，它不是你的代码。

It is the team's code.

这是团队的代码。

The moment that code gets merged, the team will be responsible for maintaining it, the team will be fixing it, the team will be refactoring it when necessary.

一旦代码被合并，团队将负责维护它，团队将修复它，团队将在必要时重构它。

You won't always be there taking responsibility for this code, and definitely not forever.

你不会永远在那里为这段代码负责，绝对不会永远。

You might be off sick, you might be on holiday, you might be doing another task, and it is almost certain that you will move to a different role at some point, and then you won't be there to advise others how to best handle your code.

你可能会生病，可能会在度假，可能会在做另一项任务，而且几乎可以肯定的是，你会在某个时候转到另一个角色，到那时你将不在那里建议别人如何最好地处理你的代码。

All of these points are reasons why the code you're submitting is the team's codes and that it will be collectively owned.

所有这些点都说明了为什么你提交的代码是团队的代码，并且它将被集体拥有。

If so, you should always keep in mind that you and the reviewer are on the same side.

如果是这样，你应该时刻记住，你和审查者是站在同一边的。

You want to create great software that you will collectively own.

你们都想创造出你们将共同拥有的优秀软件。

### 让你的 PR 保持短小

Make your PRs small.

让你的 PR 保持短小。

The previous tips were about adopting a helpful mentality, but this tip here is the single most practical one.

之前的建议是关于采取一种有益的心态，但这里的这个建议是最实用的一个。

But how small is small?

但小到什么程度算小？

Opinions vary.

众说纷纭。

Some say up to 100 lines of code, others say a range of 200‑500 is reasonable, yet others focus on the number of files changed, like no more than 5 files or 10 files.

有人说最多 100 行代码，有人说 200-500 行的范围是合理的，还有人关注更改的文件数量，比如不超过 5 个或 10 个文件。

These are, of course, all arbitrary numbers and cannot apply everywhere.

这些当然都是任意的数字，不能适用于所有地方。

I would agree that 500 lines are a reasonable maximum, but feel free to experiment with your team and decide what fits you best.

我同意 500 行是一个合理的上限，但你可以随时和你的团队一起试验，决定什么最适合你们。

Of course, no one will actually count the lines of code and tell you that you are five lines over the agreed limit.

当然，没有人会真的去数代码行数，然后告诉你你超出了商定的限制五行。

But the impression will be there, hey, this PRs a bit too big.

但会给人留下印象，嘿，这个 PR 有点太大了。

Try to make a smaller one next time.

下次试着做一个小一点的。

Small PRs bring numerous benefits.

小的 PR 带来诸多好处。

They are easier to review, it's easier to spot bugs and issues, small PRs are also faster to fix if they get comments, and thus faster to merge and get a sense of accomplishment.

它们更容易审查，更容易发现错误和问题，小的 PR 在收到评论后也更快修复，因此更快合并并获得成就感。

And because they are faster to merge, you get to deal with fewer merge conflicts.

而且因为它们合并得更快，你处理的合并冲突也更少。

Merge conflicts are annoying, but they are an inevitable part of a developer's life.

合并冲突很烦人，但它们是开发者生活中不可避免的一部分。

But if you submit a large pull request that takes days to review properly, then expect others to merge their PRs faster, and thus creating more merge conflicts for you.

但如果你提交一个需要几天才能正确审查的大型拉取请求，那么就要预料到其他人会更快地合并他们的 PR，从而为你制造更多的合并冲突。

Exceptions do exist, of course.

当然，例外确实存在。

One typical example is a mass rename of a function or a global variable that gets used a lot.

一个典型的例子是对一个被大量使用的函数或全局变量进行大规模重命名。

This could trigger the same change across 100 different files, which, under normal circumstances, can be considered too much, except that it is a trivial change, and it's the same everywhere.

这可能会在 100 个不同的文件中触发相同的更改，在正常情况下，这可能被认为太多了，但这是一个微不足道的更改，而且在所有地方都是一样的。

So it's not something that needs review, especially if it was done through an IDE that does everything correctly for you.

所以这不是需要审查的东西，特别是如果它是通过一个能为你正确完成所有事情的 IDE 完成的。

And these are the downsides of big pull requests.

这些是大型拉取请求的缺点。

Difficult and long to review.

审查困难且耗时。

But there's another downside, and it's a bit of a paradox.

但还有另一个缺点，有点自相矛盾。

In case of a loose code review culture, a large PR can produce the opposite effect and attract fast approvals.

在代码审查文化松散的情况下，一个大的 PR 可能会产生相反的效果，吸引快速批准。

And in this particular context, it's not a good thing.

在这种特定背景下，这不是一件好事。

Why?

为什么？

Because people typically don't bother reviewing properly, and blindly click approve.

因为人们通常懒得认真审查，就盲目点击批准。

There's a popular joke on the internet.

网上有个流传很广的笑话。

Submit 10 lines of code, and expect people to find 10 issues.

提交 10 行代码，预料人们会发现 10 个问题。

Submit 500 lines and get an LGTM, or looks good to me.

提交 500 行代码，得到一个 **LGTM**（Looks Good To Me 的缩写：意思是“我觉得不错”）。

And it's true, but as I said, only if there's no discipline in the team's culture.

这是真的，但正如我所说，前提是团队文化中没有纪律。

A large PR is likely to make people reluctant to dedicate so much time to review your PR correctly.

一个大的 PR 很可能会让人们不愿意花那么多时间来正确审查你的 PR。

So they are likely to cut corners.

所以他们很可能会偷工减料。

Just glance at it or review half and hit the approve button anyway.

只是扫一眼或者审查一半就点击批准按钮。

I'm not saying this will always be the case, but I've definitely observed this happen, and the popular joke I referenced a moment ago confirms I'm not the only one.

我不是说总是这样，但我确实观察到这种情况发生过，我刚才提到的那个流行笑话证实了并非只有我一个人这么认为。

You might say, yes, but the task I've been given requires thousands of lines of code and dozens of files.

你可能会说，是的，但我接到的任务需要数千行代码和几十个文件。

Two ways out of this: split this task into several sequentially logical pull requests, and the second option, split the task into several smaller tasks.

有两种方法可以解决这个问题：将这个任务分成几个按顺序逻辑关联的拉取请求，第二个选择是，将这个任务分成几个更小的任务。

Big tasks without a well‑defined scope are an indicator of a poor, higher‑level process, such as project management itself.

没有明确定义范围的大任务是糟糕的高层流程的标志，比如项目管理本身。

And unfortunately, that reflects on the PRs.

不幸的是，这会反映在 PR 上。

### 将变更拆分为多个提交

If the PR should be small, then we can put everything into a single commit, right?

如果 PR 应该很小，那么我们可以把所有东西都放在一个提交里，对吗？

Sometimes yes, but not always.

有时可以，但并非总是如此。

It is still possible and normal to split the changes that you are pushing into several commits.

将你推送的更改分成几个提交仍然是可能且正常的。

For example, implement a new **DTO**, or **data transfer object** class, in one commit.

例如，在一个提交中实现一个新的 **DTO**（数据传输对象：一种用于在不同进程或应用层之间传输数据的对象）类。

Refactor a function or a method that you need to handle that new class.

重构一个你需要处理那个新类的函数或方法。

That's the second commit.

那是第二个提交。

And finally, update the function to handle the DTO that you created.

最后，更新函数以处理你创建的 DTO。

That could be the third commit.

那可能是第三个提交。

How granular you want things to be is up to you and your team to decide.

你希望事情的粒度有多细，由你和你的团队决定。

But the general guideline is still valid: commit atomic self‑contained changes, or, in other words, don't cram all the changes into a single commit, especially if they are unrelated.

但总的指导方针仍然有效：提交原子的、自包含的更改，换句话说，不要把所有更改都塞进一个提交里，特别是如果它们不相关的话。

Having unrelated changes happens when you follow the Boy Scout rule which states, leave the campground cleaner than you found it.

当你遵循“童子军法则”时，就会出现不相关的更改，该法则规定：离开营地时要比你发现它时更干净。

The very same rule can be applied to code.

同样的规则也适用于代码。

Leave your code better than you found it.

让你的代码比你发现它时更好。

Small changes build up over time.

小的改变会随着时间的推移而累积。

You may have found a small opportunity to improve some code that isn't directly related to what you're doing, again, something as trivial as fixing a typo in documentation or giving a variable a better name.

你可能发现了一个小的机会来改进一些与你正在做的事情不直接相关的代码，同样，这可能像修复文档中的一个拼写错误或给一个变量一个更好的名字一样微不足道。

Ideally, you should make that part of a separate commit.

理想情况下，你应该把这部分作为一个单独的提交。

Modern code review tools allowed to view changes per commit, and so the reviewers can see that a particular change is an ad hoc minor improvement and isn't part of the main task.

现代代码审查工具允许按提交查看更改，因此审查者可以看到某个特定的更改是一个临时的微小改进，而不是主要任务的一部分。

I'm slightly digressing into general clean code principles, but this is worth a quick note.

我稍微偏离主题，谈到了通用的整洁代码原则，但这值得快速一提。

If you do make unrelated improvements and make them part of your PR instead of creating a separate PR, make sure the changes are small and simple.

如果你确实做了不相关的改进，并将其作为你的 PR 的一部分，而不是创建一个单独的 PR，请确保这些更改是小而简单的。

Does the change take 2 minutes to do and 1 minute to review?

这个更改需要 2 分钟完成和 1 分钟审查吗？

Sure.

当然可以。

One hour to change and 20 minutes to review?

一小时更改和 20 分钟审查？

That deserves a separate TODO ticket that needs to be prioritized and done separately.

那值得一个单独的待办事项（TODO）票据，需要被优先处理并单独完成。

### 仔细检查你的工作

You have committed the changes and created the PR.

你已经提交了更改并创建了 PR。

Do you ask your colleagues for a review?

你会请求你的同事进行审查吗？

Not yet.

还没。

Assuming you have a continuous integration build, wait for the build to be finished and green, and while that's running, give your changes one final review in diff view.

假设你有一个持续集成构建，等待构建完成并显示为绿色，在它运行的时候，在差异视图中对你的更改进行最后一次审查。

Yes, I know, you may have been looking at that code for hours, or maybe longer, so you might not feel like it, but personally, I can't count how many times I've caught issues at this last stage.

是的，我知道，你可能已经盯着那段代码好几个小时，甚至更久，所以你可能不太想这么做，但就我个人而言，我数不清有多少次我是在这最后阶段发现问题的。

If you like, take a small break, come back to the code in 10 minutes, and then review it, not only is it a best practice, but it's respectful towards your peers.

如果你愿意，可以稍作休息，10 分钟后回到代码前再审查它，这不仅是一种最佳实践，也是对你同事的尊重。

You're giving them code for review that is of the best possible quality that you could produce.

你正在给他们审查的代码是你所能产出的最高质量的代码。

If you're still not convinced, think of it as an investment.

如果你仍然不相信，把它看作一种投资。

Your self-review takes 1 minute, and if you spot an issue, you don't need to explain it to anyone; you go ahead and fix it.

你的自我审查需要 1 分钟，如果你发现一个问题，你不需要向任何人解释；你直接去修复它。

That's it.

就这样。

On the other hand, if you don't spot an issue yourself, then someone else will, hopefully, take the time to comment, you need to read it and understand the comment, fix it, reply, wait for another review round, and the reviewer needs to ensure that the fix was applied.

另一方面，如果你自己没有发现问题，那么别人会的，希望他们会花时间评论，你需要阅读并理解评论，修复它，回复，等待下一轮审查，并且审查者需要确保修复已经应用。

Of course, all of these actions require a different amount of time depending on the context, but hopefully this illustrates that more time and actions are required to fix something that wasn't done well enough the first time.

当然，所有这些行动所需的时间因情境而异，但希望这能说明，修复一个第一次没有做得足够好的东西需要更多的时间和行动。

And this applies to pretty much everything in life: doing things right the first time is almost always cheaper and more efficient.

这几乎适用于生活中的所有事情：第一次就把事情做对几乎总是更便宜、更有效率。

I hope I've convinced you to start self‑reviewing if you don't do it already.

我希望我已经说服你开始自我审查，如果你还没有这样做的话。

### 不要在 PR 评论中解释事情

The list of things that you should do before a code review is quite long.

在代码审查之前你应该做的事情清单相当长。

So for a change, here's a tip on what you should not do.

所以，换个角度，这里有一个关于你不应该做什么的建议。

Don't explain things in PR comments, and this requires some clarification.

不要在 PR 评论中解释事情，这需要一些澄清。

Imagine you've written a piece of code, and you think it's not really clear.

想象一下你写了一段代码，你觉得它不是很清楚。

So to help reviewers understand it, you might think it would be good to preemptively clarify a few things before people start asking things.

所以为了帮助审查者理解它，你可能会认为在人们开始提问之前，预先澄清一些事情会很好。

So you add comments, not code comments that become part of the code base, but PR comments that are visible when you open up the PR itself in a code review tool.

所以你添加评论，不是成为代码库一部分的代码注释，而是在代码审查工具中打开 PR 本身时可见的 PR 评论。

This is not what you should do.

这不是你应该做的。

Such comments will not be there to help anyone's understanding two months later when they're looking at the code.

两个月后当他们看代码时，这样的评论将无法帮助任何人理解。

And since a single file may have a dozen different modifications over a dozen pull requests, no one wants to dig up these pull requests just in case if there was a clarifying comment or a conversation.

而且由于一个文件可能在十几个拉取请求中有十几次不同的修改，没有人愿意为了以防万一有澄清性评论或对话而去翻找这些拉取请求。

That's hugely time inefficient.

这非常耗时。

If you feel like adding preemptive comments, your first thought should be, can I rewrite this code without needing comments at all?

如果你想添加预先的评论，你的第一个念头应该是，我能重写这段代码，使其完全不需要评论吗？

Can I write code that is reasonably self‑explanatory?

我能写出相当自解释的代码吗？

This is the best option, if that is not possible for some specific reason, because it's still difficult to easily understand why you are doing something in a specific way.

这是最好的选择，如果因为某些特定原因不可能，因为它仍然很难轻易理解你为什么用某种特定的方式做事。

The second best option is to add comments or documentation into the code itself so that they are permanently part of the code base and thus immediately available to read next to the code in question.

第二好的选择是，将评论或文档添加到代码本身中，使它们永久地成为代码库的一部分，从而可以立即在相关代码旁边阅读。

When to comment and when not to comment is a very hot topic, and many developers have very strong opinions on this.

何时评论和何时不评论是一个非常热门的话题，许多开发者对此有非常强烈的看法。

I'd say it's tricky at best, but it's more part of the clean code topic, and thus, we would digress if we delved deeper into it.

我只能说这充其量是棘手的，但它更多地属于整洁代码的话题，因此，如果我们深入探讨，就会离题。

I will just reiterate that when you want to add clarifying comment on a pull request, 9 out of 10 times it is the wrong thing to do.

我只想重申，当你想在拉取请求上添加澄清性评论时，十有八九是错误的做法。

Rewrite the code or add a comment to the code base.

重写代码或在代码库中添加评论。

### 在 PR 评论中解释事情

In the last clip, I said we shouldn't explain things in PR comments, but we should also explain things in PR comments.

在上一个片段中，我说我们不应该在 PR 评论中解释事情，但我们也应该在 PR 评论中解释事情。

And that's a statement that entirely contradicts the previous one, right?

这是一个完全与前一个相矛盾的说法，对吧？

As always, it depends.

一如既往，这要看情况。

This clip covers some exceptions.

这个片段涵盖了一些例外情况。

As a guideline, leaving preemptive PR comments is okay when they may be useful in the context of here and now, but they will not be required or helpful later.

作为指导原则，当预先留下的 PR 评论在当前情境下可能有用，但以后不再需要或没有帮助时，是可以的。

"As discussed with John, we decided to implement it like this because...," is one example where you want to let other reviewers know that you and someone else brainstormed together and came up with something good.

“正如与约翰讨论的那样，我们决定这样实现，因为……”，这是一个例子，你想让其他审查者知道你和别人一起集思广益，想出了一个好主意。

A brainstorming outcome is not something that needs to be logged in a comment in code forever, but it lets others know that two people have already thought about it.

头脑风暴的结果不需要永远记录在代码的注释中，但它让别人知道已经有两个人考虑过这个问题了。

"As discussed with Marie, this reflects a last moment requirement change."

“正如与玛丽讨论的那样，这反映了一个最后一刻的需求变更。”

That's another example.

那是另一个例子。

Some last moment changes may not be documented properly.

一些最后一刻的更改可能没有被正确记录。

Yes, I know, they should be, but they aren't always in real life.

是的，我知道，它们应该是，但在现实生活中并不总是如此。

And so such a comment may help reviewers understand why you're doing something in a particular way.

所以这样的评论可能有助于审查者理解你为什么用一种特定的方式做事。

Finally, another example could be, "Deleting this because..."

最后，另一个例子可以是，“删除这个是因为……”

Again, you could argue that the reason for deleting could be described as part of the commit message or as part of the task, that it should be properly written down somewhere, but in practice, I find that reviewers, even the best and most consistent ones, don't always make the extra step and search in the commit message or click into the attached ticket to read through the necessary information.

同样，你可以争辩说删除的原因可以作为提交信息的一部分或任务的一部分来描述，它应该被妥善地写在某个地方，但在实践中，我发现审查者，即使是最好和最一致的审查者，也不总是会多走一步，在提交信息中搜索或点击附加的票据来阅读必要的信息。

That's just life.

这就是生活。

### 回应每一条评论

The code review happened.

代码审查已经进行。

Multiple comments were left for you to address.

留下了多条评论需要你处理。

You might fix some as suggested, fix, but in the way you prefer, or push back if you don't share the reviewer's point of view.

你可能会按照建议修复一些问题，或者用你喜欢的方式修复，或者如果你不同意审查者的观点，可以反驳。

Regardless of how things go, it is polite and professional to always reply to all comments before merging.

无论事情如何发展，在合并之前总是回复所有评论是礼貌和专业的。

Please do not merge until you've left a reply on every comment.

请不要在对每条评论都留下回复之前进行合并。

Even if you fixed as the reviewer wanted, they won't see the change unless they look through the history of the PR, which is extra effort they shouldn't be facing.

即使你按照审查者的要求修复了，他们也看不到更改，除非他们查看 PR 的历史记录，这是他们不应该面对的额外工作。

The nature of the reply may vary on your team's preference, but in our team, for example, we leave at least a short "fixed" or "done" on every comment that we implement as requested, or if it's a fix using an alternative method, then "done as x."

回复的性质可能因团队偏好而异，但在我们团队，例如，我们对每个按要求实现的评论至少留下一个简短的“已修复”或“已完成”，或者如果是一个使用替代方法的修复，那么是“按 x 方式完成”。

For example, if someone said consider renaming this to A or B, you could say "Renamed to B" to let them know you've chosen one of the provided options, or "Renamed to C as I think it better reflects X."

例如，如果有人说考虑将这个重命名为 A 或 B，你可以说“已重命名为 B”，让他们知道你选择了提供的选项之一，或者“已重命名为 C，因为我认为它更能反映 X”。

There are too many situations to describe all of them, but please do react to every comment.

情况太多，无法一一描述，但请务必对每一条评论做出反应。

If you don't, the reviewer is likely to perceive this as if you ignored them.

如果你不这样做，审查者很可能会认为你忽略了他们。

They took the time to highlight things that could be improved in your code, and you just ignored their efforts, and that's not good.

他们花时间指出了你代码中可以改进的地方，而你却忽略了他们的努力，这不好。

### 模块小结

Unless it's a solo home project, coding is part of a lot of social interaction.

除非是个人家庭项目，否则编码是大量社交互动的一部分。

And as someone who creates code that other people should review, we have the responsibility to make code reviews smooth.

作为创建需要他人审查代码的人，我们有责任使代码审查顺畅进行。

Have a big task?

有一个大任务？

Creates several small PRs.

创建几个小的 PR。

If applicable, split into logically atomic commits.

如果适用，拆分成逻辑上原子的提交。

Would you like to clarify something?

你想澄清什么吗？

Try rewriting the code as your first option or adding a comment as part of the code base.

尝试将重写代码作为你的首选，或者在代码库中添加注释。

Don't forget to self review.

别忘了自我审查。

It's faster and cheaper in the long run.

从长远来看，这更快、更便宜。

Get comments?

收到评论？

That's a good thing because it should be natural to expect them.

这是件好事，因为期待它们应该是很自然的。

Be surprised when you don't get a single comment on nontrivial PRs.

当你在不平凡的 PR 上没有收到任何评论时，要感到惊讶。

Do you get requests to improve something?

你收到改进某事的请求了吗？

That's normal.

这很正常。

It's not your code.

这不是你的代码。

It's the team's code, so you need to agree on it as a team.

这是团队的代码，所以你们需要作为一个团队就此达成一致。

And last, but not least, it's basic politeness to reply or somehow react to every comment.

最后但同样重要的是，对每一条评论都回复或以某种方式做出反应是基本的礼貌。

Of course, it takes two to tango.

当然，这需要双方的努力。

So reviewers have a lot of responsibility as well.

所以审查者也有很大的责任。

I'd say even more.

我甚至会说更多。

Providing poor and unprofessional feedback is arguably the single biggest point of failure in code reviews.

提供糟糕和不专业的反馈可以说是代码审查中最大的失败点。

So please join me in the next module, Providing Effective Feedback as a Reviewer.

所以请和我一起进入下一个模块，“作为审查者提供有效的反馈”。

## 作为审查者提供有效的反馈

Hello, and welcome to the next module.

你好，欢迎来到下一个模块。

Most developers are both reviewees and reviewers.

大多数开发者既是被审查者也是审查者。

In the last module, we looked at code review through the eyes of the reviewee, the pull request creator.

在上一个模块中，我们从被审查者，即拉取请求创建者的角度看待了代码审查。

Now it's time to change hats and become the reviewer, the person who comments on the submitted code.

现在是时候换个角色，成为审查者，即对提交的代码发表评论的人。

If you leave a comment on a PR, most of the time it means that something needs to be changed and improved.

如果你在 PR 上留下评论，大多数时候这意味着需要更改和改进某些东西。

If we do it the wrong way, this can be called criticism.

如果我们用错误的方式去做，这可以被称为批评。

As we all know, accepting criticism can be hard.

众所周知，接受批评可能很难。

People may get defensive and uncooperative, which is counterproductive.

人们可能会变得有防御心和不合作，这是适得其反的。

Another way to call PR comments is feedback.

另一种称呼 PR 评论的方式是反馈。

Feedback to improve and learn what's the difference between criticism and feedback.

反馈是为了改进和学习，批评和反馈之间有什么区别。

It's not what you're saying, but how a lot of the times.

很多时候，不是你说了什么，而是你怎么说。

Having great soft skills is very important for a reviewer, and this module provides short, actionable tips on how to provide the best possible feedback.

拥有出色的软技能对于审查者来说非常重要，本模块提供了简短、可操作的技巧，教你如何提供尽可能最好的反馈。

### 一个糟糕的例子

Your implementation is wrong.

你的实现是错误的。

What were you thinking?

你在想什么？

Redo it.

重做。

Such a short comment, yet so wrong on so many levels.

如此简短的评论，却在如此多的层面上都是错误的。

You and your should be avoided unless it's part of a question or a polite request.

应该避免使用“你”和“你的”，除非它是问题或礼貌请求的一部分。

Wrong is a poor choice and an assumption that you know better, but that's not necessarily the case.

“错误”是一个糟糕的选择，也是一个你自认为更懂的假设，但这不一定是对的。

What were you thinking? is a rhetorical question that adds nothing positive or constructive to the conversation.

“你在想什么？”是一个反问句，对对话没有任何积极或建设性的贡献。

And redo it is a blunt command, and code review is not a time or place to try and exercise power over your colleagues.

而“重做”是一个生硬的命令，代码审查不是一个试图对同事行使权力的时候或地方。

There's actually never a time for such a thing.

实际上，从来没有什么时候适合做这种事。

You might think that this is a contrived example, but it's just an aggregated collection of mistakes that come up in people's comments.

你可能会认为这是一个做作的例子，但这只是人们评论中出现的错误的集合。

And that's still a small sample.

而且这还只是一个小样本。

As part of this module, we'll be gradually improving this comment to something that's helpful, constructive, professional, and most importantly, something that doesn't leave reviewees stressed and frustrated.

作为本模块的一部分，我们将逐步将这条评论改进为有帮助、有建设性、专业，最重要的是，不会让被审查者感到压力和沮丧的东西。

### 将反馈表述为请求或问题

Tip number one: Frame feedback as requests or questions.

第一条建议：将反馈表述为请求或问题。

You don't give out commands to peers when you're face to face, right?

你当面的时候不会对同事下命令，对吧？

Especially in a professional setting.

尤其是在专业场合。

"Bring me my coffee," "hand me that notepad."

“给我拿杯咖啡，” “把那个记事本递给我。”

No.

不。

Even if you're friends with someone, you typically make a polite request with the right tone.

即使你和某人是朋友，你通常也会用合适的语气提出礼貌的请求。

"Hand me that notepad, please."

“请把那个记事本递给我。”

But even more often we frame it as a question, "Could you hand me that notepad?"

但我们更常将其表述为一个问题，“你能把那个记事本递给我吗？”

Please is optional and depends on the social context.

“请”是可选的，取决于社交情境。

The same should apply to code reviews.

同样的情况也应该适用于代码审查。

In fact, you should be slightly more polite because there is no voice.

事实上，你应该更礼貌一些，因为没有声音。

The absence of voice removes context, a hint about how polite or professional you're being.

声音的缺失移除了语境，即关于你有多礼貌或多专业的线索。

This is why you should compensate for it with a bit of extra text and a bit of extra politeness, at least until you're on really good terms with your colleagues.

这就是为什么你应该用一些额外的文字和一些额外的礼貌来弥补这一点，至少在你和同事关系真的很好之前。

And I'll talk more about it later.

我稍后会更多地谈论这一点。

So don't say, "Rename this variable."

所以不要说，“重命名这个变量。”

Say, "Can you rename this variable?"

说，“你能重命名这个变量吗？”

Don't say, "Move this method to another class."

不要说，“把这个方法移到另一个类。”

Instead, say something like, "Should this method be moved to another class?"

而是说一些类似，“这个方法应该移到另一个类吗？”

Of course, it doesn't always have to be a question.

当然，它不一定总是一个问题。

Use the word "consider" or its equivalents.

使用“考虑”或其等价词。

It can be used when the issue is relatively minor, and it's not the end of the world if your suggestion doesn't get implemented.

当问题相对较小，并且如果你的建议没有被采纳也不是世界末日时，可以使用这个词。

Instead of "Break up this function into two smaller ones," you can say, "Consider breaking up this function into two smaller ones."

与其说“把这个函数拆分成两个更小的函数”，你可以说，“考虑把这个函数拆分成两个更小的函数。”

As such, we can make our first improvement to the initial example.

因此，我们可以对最初的例子做第一个改进。

The last part, "Redo it," now becomes, "Can you redo it?"

最后一部分，“重做”，现在变成了，“你能重做吗？”

We won't use "consider" because our imaginary pull request doesn't meet the team's standards at all.

我们不会使用“考虑”，因为我们想象中的拉取请求完全不符合团队的标准。

The entire example is now slightly less evil, but it's still a long way to go.

整个例子现在稍微不那么邪恶了，但还有很长的路要走。

### 绝不说“你”

Second tip, never say you.

第二条建议，永远不要说“你”。

Of course, there's an exception to this rule.

当然，这条规则有例外。

It's okay to use it in questions.

在问题中使用是可以的。

Did you mean or can you please?

你的意思是或者你能否请？

That's fine, but avoid you in most other situations.

那没问题，但在大多数其他情况下避免使用“你”。

You brings ego into the discussion.

“你”将自我带入讨论中。

It makes an association between you and your work.

它在你和你的工作之间建立了联系。

Yes, of course, the reviewee created the pull request, but it's best to feel as detached as possible from it, and you does the opposite.

是的，当然，是被审查者创建了拉取请求，但最好能尽可能地与之保持距离，“你”这个词却起了反作用。

Try to replace you with either me, we or the code.

试着用“我”、“我们”或“代码”来代替“你”。

A few examples always help.

一些例子总是有帮助的。

Your code is unintelligible should be I'm having trouble understanding this code.

“你的代码难以理解”应该是“我理解这段代码有困难”。

By saying me or I, you place the focus on your point of view by expressing your personal thoughts.

通过说“我”，你通过表达你的个人想法，将焦点放在你的观点上。

Talking about your perception prevents the code author from feeling attacked, which can be the case when you say you write bad code.

谈论你的看法可以防止代码作者感到被攻击，而当你说“你写的代码很烂”时，就可能出现这种情况。

Can you refactor this duplication? is an acceptable option.

“你能重构这个重复部分吗？”是一个可以接受的选项。

It is a request, not a command, but it's also fine to say can we avoid duplication here?

这是一个请求，不是命令，但说“我们能在这里避免重复吗？”也没问题。

Yes, we still means that the reviewee will do it, and some might argue that we is unnecessary, but I would argue that we reinforces the attitude that the code is the team's collective ownership and responsibility.

是的，“我们”仍然意味着被审查者会去做，有些人可能会争辩说“我们”是不必要的，但我认为“我们”强化了代码是团队集体所有权和责任的态度。

Finally, instead of saying you need to write unit tests for this code, you could say, this code needs to be covered by unit tests.

最后，与其说“你需要为这段代码编写单元测试”，你可以说，“这段代码需要被单元测试覆盖”。

It is easier to accept feedback on the code.

更容易接受关于代码的反馈。

After all, you're directing your comments at an objective thing, not the author.

毕竟，你的评论是针对一个客观事物，而不是作者。

So now we can make a small improvement to our initial example and replace your with this.

所以现在我们可以对我们的初始例子做一个小小的改进，用“这个”替换“你的”。

Now this reads this implementation is wrong.

现在这句话读作“这个实现是错误的”。

What were you thinking?

你在想什么？

Can you redo it?

你能重做吗？

We removed the author from the fire of our criticism, which is good, but we can do more.

我们将作者从我们批评的火力中移开，这很好，但我们还可以做得更多。

### 应用 OIR 规则

Next tip, apply the OIR rule when giving feedback.

下一条建议，在给出反馈时应用 OIR 规则。

**OIR** stands for observation, impact, and request.

**OIR** 代表观察（Observation）、影响（Impact）和请求（Request）。

It's best understood with an example.

通过一个例子最容易理解。

Imagine a function or a method that is 100 lines long.

想象一个有 100 行长的函数或方法。

Most developers would agree that it is too big.

大多数开发者都会同意它太大了。

In this case, we can observe.

在这种情况下，我们可以观察。

"This function seems too long."

“这个函数似乎太长了。”

We can explain the impact by saying, "This makes it hard for me to understand it."

我们可以通过说“这让我很难理解它”来解释其影响。

And notice we are making use of the previous tip and use "me" and focus on our own impressions.

注意我们正在利用前一条建议，使用“我”并专注于我们自己的印象。

And finally request, the specific call to action.

最后是请求，即具体的行动号召。

"I suggest to extract some parts into separate functions and give them expressive names."

“我建议将一些部分提取到单独的函数中，并给它们起有表现力的名字。”

Here's another example.

这里有另一个例子。

"This class seems to be misplaced. It would be hard for others to find it if they wanted to use it. Consider moving it to another package or directory along with such‑and‑such classes that logically belong together."

“这个类似乎放错了位置。如果别人想用它，会很难找到。考虑把它和那些逻辑上属于一起的某某类一起移动到另一个包或目录。”

Yes, the OIR rule is rather verbose.

是的，OIR 规则相当冗长。

I can't say that I always use it myself, but this approach has several benefits and use cases.

我不能说我自己总是使用它，但这种方法有几个好处和用例。

For one, it's great to prevent requests for clarification by the reviewee such as, "Why do you want me to do it? I think this code is fine as is. With the OIR rule, you explain what's wrong up front.

首先，它能很好地防止被审查者要求澄清，比如“你为什么想让我这么做？我觉得这段代码现在就很好。”使用 OIR 规则，你可以预先解释问题所在。

Another great benefit is that it promotes learning.

另一个巨大的好处是它能促进学习。

You explain how things can be improved, and it's reasonable to expect that the reviewee will know better next time, hopefully.

你解释了如何改进，可以合理地期望被审查者下次会做得更好，希望如此。

And another frequent use case for it is mentoring new joiners.

它的另一个常用场景是指导新员工。

They're still inexperienced, or maybe they are experienced but they're new to the project, so extra clarification is definitely helpful.

他们还缺乏经验，或者他们有经验但对项目是新的，所以额外的澄清肯定是有帮助的。

I apply the OIR rule on pull requests as a way of serving small nuggets of knowledge of best practices or team conventions, and I typically use it less and less as new joiners become more experienced.

我在拉取请求上应用 OIR 规则，作为提供最佳实践或团队惯例知识小贴士的一种方式，随着新员工变得更有经验，我通常会越来越少地使用它。

So with this in mind, we can now make a major improvement to the initial example.

因此，考虑到这一点，我们现在可以对最初的例子做一个重大的改进。

First, we throw out, "What were you thinking?" entirely.

首先，我们完全抛弃“你在想什么？”这句话。

It's not helping in any way.

它在任何方面都没有帮助。

It doesn't fit into the OIR rule at all.

它完全不符合 OIR 规则。

Next, we need to clarify what's wrong exactly.

接下来，我们需要澄清到底哪里错了。

We don't have a concrete code example, but "wrong" could be replaced with "inefficient," and then followed up by something like, "It makes multiple remote calls unnecessarily, and this slows down the execution."

我们没有具体的代码例子，但“错误”可以用“低效”来代替，然后跟上类似这样的话，“它不必要地进行了多次远程调用，这减慢了执行速度。”

This is the impact of the OIR rule.

这就是 OIR 规则的影响。

### 在适当的时候提供代码示例

Next step, help with code examples or concrete alternatives where appropriate.

下一步，在适当的时候提供代码示例或具体的替代方案。

You might suggest using a different approach, using a different construct, replacing something with a pattern or a newer API of the language.

你可能会建议使用不同的方法、不同的结构、用一种模式或语言的更新 API 来替换某些东西。

Examples demonstrate that you genuinely want to help, so if we start with a reasonably polite request, can you rename this variable, we can apply part of the OIR rule and change this to can you make this variable more descriptive.

例子表明你真心想帮忙，所以如果我们从一个相当礼貌的请求开始，你能重命名这个变量吗，我们可以应用 OIR 规则的一部分，把它改成你能让这个变量更有描述性吗。

This clearly indicates what exactly the issue is that you're raising.

这清楚地表明了你提出的问题到底是什么。

But it's even better if you extend this and provide a few examples.

但如果你能扩展这一点并提供一些例子，那就更好了。

Yes, it's a little bit of extra effort for you, the reviewer, but providing examples often pays off.

是的，这对你，审查者来说，需要一点额外的努力，但提供例子通常是值得的。

It's a win for the pull request creator.

这对拉取请求的创建者来说是双赢。

It's quick and easy to choose one of the provided options, and so they can merge faster.

选择一个提供的选项又快又容易，所以他们可以更快地合并。

And it's a win for you, the reviewer, because one of your provided suggestions becomes part of the code base.

这对你，审查者来说也是双赢，因为你提供的一个建议成为了代码库的一部分。

But not all suggestions are trivial, such as an alternative variable name.

但并非所有建议都是微不足道的，比如一个替代的变量名。

If you suggest a completely different approach or some complex pattern wrapped in another pattern, the reviewee may not know it or haven't learned the concept you are talking about, and in such cases it's normal to react like I have no idea what you're talking about and I don't really want my PR hang for days while I self‑educate on that thing.

如果你建议一个完全不同的方法或某个包裹在另一个模式中的复杂模式，被审查者可能不知道或者没有学过你说的概念，在这种情况下，他们的反应通常是“我不知道你在说什么，我真的不想让我的 PR 挂好几天，而我自己去学习那个东西”。

I code primarily in Java, so please forgive me for this one Java‑specific example.

我主要用 Java 编码，所以请原谅我举这个 Java 特有的例子。

Just like most programming languages, Java has a classic for loop.

就像大多数编程语言一样，Java 有一个经典的 for 循环。

You might see this and suggest using Java 8 streams and lambdas instead.

你可能会看到这个，然后建议改用 Java 8 的流和 lambda 表达式。

In JavaScript, they're called the arrow functions.

在 JavaScript 中，它们被称为箭头函数。

They are shorter and more readable.

它们更短、更易读。

They really are an improvement on the old syntax, but I know many junior Java programmers still struggle with them and so they avoid them.

它们确实是对旧语法的改进，但我知道许多初级 Java 程序员仍然对它们感到困难，所以他们会避免使用。

So if you suggest something that the person can't implement quickly, they will be reluctant to do so.

所以，如果你建议一些别人无法快速实现的东西，他们会不愿意去做。

Again, they thought that they are nearly finished, and now the finish line in front of them has been moved by a mile.

再次，他们本以为快要完成了，现在他们面前的终点线却被移远了一英里。

That's discouraging.

那很令人沮丧。

There are two scenarios in such cases.

在这种情况下有两种情况。

If it's simple, provide a concrete full example that they can copy/paste or reuse most of it.

如果很简单，提供一个具体的完整例子，他们可以复制/粘贴或重用大部分。

Let the PR get merged, and then organize an upscaling workshop later.

让 PR 被合并，然后稍后组织一个技能提升工作坊。

Scenario 2, let the code get merged with a refactoring TODO, and then still organize an upscaling workshop.

第二种情况，让代码带着一个重构的待办事项被合并，然后仍然组织一个技能提升工作坊。

If we were to apply this step to our initial example, we don't necessarily have to provide concrete code, but we could at least suggest something specific, for example, cache and reuse the result.

如果我们要将这一步应用到我们最初的例子中，我们不一定需要提供具体的代码，但我们至少可以建议一些具体的东西，例如，缓存并重用结果。

That gives the reviewees a specific direction, and they can try and figure out the rest on their own.

这给了被审查者一个明确的方向，他们可以自己尝试解决剩下的问题。

### 不要试图修复所有问题

Next step, don't try to fix everything, especially all at once.

下一步，不要试图修复所有问题，尤其不要一次性修复。

Or in other words, don't be too pedantic.

换句话说，不要太迂腐。

Or yet another alternative, don't abuse the Boy Scout rule.

或者另一个选择，不要滥用童子军法则。

And I'll be the first to admit that I have to practice self restriction with this one.

我首先承认，在这方面我必须练习自我约束。

Suppose the PR changes something, and you notice that the code next to the change, it could be improved.

假设 PR 更改了某些内容，而你注意到更改旁边的代码可以改进。

You follow the Boy Scout rule and suggest an improvement by saying "Unrelated but minor: can you also fix X, please?"

你遵循童子军法则，通过说“不相关但次要：你能也修复一下 X 吗，拜托？”来建议改进。

After all, it's a small change and should take 2 minutes.

毕竟，这是一个小改动，应该只需要 2 分钟。

Oh, but there's also this minor bit here, and one over there, and oh, on the next line, there's this little thing, and suddenly we have a pull request morphing into a refactoring crusade unrelated to the original task.

哦，但这里还有这个小问题，那边还有一个，哦，下一行，还有这个小东西，突然间，一个拉取请求就变成了一场与原始任务无关的重构运动。

Did you spot 10 unrelated minor things that could be improved?

你发现了 10 个可以改进的不相关的小问题吗？

Suggest improving the most important 2 at most.

最多建议改进最重要的 2 个。

And if the other issues bother you, create a refactoring follow‑up task.

如果其他问题困扰你，创建一个重构的后续任务。

Also, why not assign it to yourself and lead by example.

另外，为什么不把它分配给自己，以身作则呢？

Right?

对吧？

### 使用标签

Short, but very effective tip, use labels such as nitpick or just nit.

简短但非常有效的建议：使用诸如“吹毛求疵”或简称“挑刺”之类的标签。

If English is your second language and you're not sure what that means, nitpicking is the action of giving too much attention to unimportant details.

如果英语是你的第二语言，你不确定那是什么意思，那么“挑刺”就是指对不重要的细节给予过多关注的行为。

It's finding minor faults and focusing on them too much.

就是找小毛病并过分关注它们。

By the sound of it, this is something you want to avoid.

听起来，这是你想避免的事情。

But NTs that are serious about code quality, making minor improvements continuously is normal, and it has a great positive long‑term impact.

但对于那些对代码质量非常认真的团队来说，持续进行微小的改进是正常的，并且具有巨大的长期积极影响。

So if you want to ask for a minor improvement, whether directly related to the PR or the surrounding code, it's a good idea to communicate that it's minor and it's not the end of the world if the reviewee doesn't accept the suggestion.

所以，如果你想要求一个小小的改进，无论是直接与 PR 相关还是与周围的代码相关，最好能沟通说明这是一个小问题，如果被审查者不接受这个建议，也不是世界末日。

You can, of course, be verbose and say this is relatively minor, no big deal, but.

你当然可以啰嗦地说，这相对次要，没什么大不了的，但是。

But instead, you can just prefix your suggestion with nitpick or just nit or minor.

但相反，你可以直接在你的建议前加上“吹毛求疵”、“挑刺”或“次要”等前缀。

This is communicating the same thing, but it takes less time to type and read.

这传达了同样的意思，但输入和阅读所需的时间更少。

Of course, you and your team can agree on a fixed set of labels that communicate different levels of importance.

当然，你和你的团队可以商定一套固定的标签，用来传达不同程度的重要性。

### 给予真诚的赞美

Offer sincere praise, arguably one of the most neglected things on code reviews.

给予真诚的赞美，这可以说是代码审查中最被忽视的事情之一。

Imagine having a mentor or a teacher who never gives praise, even if you did very well.

想象一下，你有一个导师或老师，即使你做得很好，也从不给予表扬。

The best they could do is not say anything or something dry such as you did not disappoint me this time.

他们能做的最好的就是什么都不说，或者说一些干巴巴的话，比如“这次你没有让我失望”。

How discouraging would that be?

那该有多么令人沮丧？

Well, the same goes for code reviews.

嗯，代码审查也是如此。

Spotted something that exceeded your expectations?

发现了一些超出你预期的东西？

Praise that.

赞美它。

Say well done.

说做得好。

Is the reviewee a new team member who quickly picked up on the established patterns and follows them rigorously?

被审查者是一位新团队成员，他很快掌握了既定模式并严格遵守吗？

Praise that too.

也赞美这一点。

Is the code of high quality?

代码质量高吗？

Give it a quick compliment.

给它一个简短的赞美。

It doesn't have to be long.

不必很长。

Something like nice solution is enough.

像“不错的解决方案”这样的话就足够了。

I've added such comments on some occasions myself, and I'm fairly sure that they didn't hurt anyone.

我自己有时也会添加这样的评论，我相当确定它们没有伤害到任何人。

Praise has the added benefit of reinforcing good practices.

赞美还有一个额外的好处，就是能强化良好实践。

Was something done with higher than usual quality?

有什么事情做得比平时质量更高吗？

Do you want that to be repeated in the future and become part of the new norm?

你希望将来能重复这样做，并成为新常态的一部分吗？

Praise the author.

赞美作者。

This encourages them to do more of the same.

这鼓励他们多做同样的事情。

Another situation is when you have a new joiner and they typically receive more comments on their PRs, maybe 10 instead of the average 3.

另一种情况是，你有一个新员工，他们通常会在他们的 PR 上收到更多的评论，可能是 10 条而不是平均的 3 条。

And so they might feel like it's a barrage of criticism, even if it's nicely framed, but it's absolutely normal to get more comments while you're getting used to the team's convention and code base.

所以他们可能会觉得这是一连串的批评，即使措辞很好，但在你适应团队的惯例和代码库时，收到更多的评论是完全正常的。

So praise new joiners a bit more to compensate for that.

所以多表扬新员工一点，以弥补这一点。

It will certainly help them not feel overwhelmed and that they're doing at least something right.

这肯定会帮助他们不感到不知所措，并且知道他们至少在做一些正确的事情。

### 原子化审查

Review atomically, or in other words, review everything and fully in one go.

原子化审查，换句话说，一次性完整地审查所有内容。

If you spot five issues, highlight them, allow the person to fix them, and then approve.

如果你发现五个问题，就把它们标记出来，让那个人修复它们，然后批准。

If you happen to spot a critical issue in the next review iteration, sure, go ahead and comment some more.

如果你在下一次审查迭代中碰巧发现了一个关键问题，当然，可以继续评论。

But don't start changing your mind, or brainstorming how the entire design could be improved through a major refactoring.

但不要开始改变主意，或者头脑风暴如何通过一次大的重构来改进整个设计。

Avoid this.

避免这样做。

Another tip is to try and get all things fixed in one or two iterations, max.

另一个建议是，尽量在一到两次迭代内解决所有问题，最多两次。

Again, the stress level increases with every iteration, and in practice, I've found that going beyond two iterations will make the atmosphere increasingly tense, and the reviewee rather impatient.

同样，每次迭代都会增加压力水平，在实践中，我发现超过两次迭代会使气氛越来越紧张，被审查者也会相当不耐烦。

And reviewing atomically most certainly helps to keep the number of review iterations down.

而原子化审查肯定有助于减少审查迭代的次数。

### 不要消失

Last step, don't disappear.

最后一步，不要消失。

Do not leave comments without willing to monitor for replies and fixes, and eventually approving.

不要在没有意愿监控回复和修复，并最终批准的情况下留下评论。

If you don't come back to finish what you've started, you're blocking the pull request.

如果你不回来完成你开始的工作，你就在阻塞这个拉取请求。

I've said this before, but I'll say it again.

我以前说过，但我再说一遍。

Code reviews should be completed within hours, not days, and team members must be aware of the time commitment and prioritize review time accordingly.

代码审查应该在几小时内完成，而不是几天，团队成员必须意识到时间投入，并相应地优先安排审查时间。

If you don't think you can complete a review in time, please let the committer know right away so they can find someone else.

如果你认为你不能按时完成审查，请立即告知提交者，以便他们可以找别人。

### 模块小结

As reviewers, we have the responsibility to provide constructive and helpful feedback.

作为审查者，我们有责任提供建设性和有帮助的反馈。

The point of reviewing is not to block code until it's perfect.

审查的目的不是要阻塞代码直到它完美无瑕。

That's the wrong attitude.

那是错误的态度。

The purpose is to let good enough code get merged in a timely manner, and we must be professional about this.

目的是让足够好的代码及时合并，我们必须对此保持专业。

Frame feedback as requests or questions.

将反馈表述为请求或问题。

Avoid saying you.

避免说“你”。

Replace with me, we or code.

用“我”、“我们”或“代码”代替。

Apply the observe impact request rules where necessary, especially with more junior colleagues who need more guidance.

在必要时应用“观察-影响-请求”规则，特别是对于需要更多指导的初级同事。

Help with examples.

用例子来帮助。

Again, it's a big plus for junior developers.

再次，这对初级开发者来说是一个很大的加分项。

Use, but don't abuse the Boy Scout rule, and when you do ask for minor fixes, prepend your requests with the word nitpick or one of its equivalents.

使用但不要滥用童子军法则，当你要求小的修复时，在你的请求前加上“挑剔”或其等价词。

If there is a reason for praise, do so.

如果有理由赞美，就去做。

Be generous.

要慷慨。

Finally, review everything, and please do so quickly without disappearing.

最后，审查所有内容，并且请快速完成，不要消失。

PRs should be merged within hours and not days.

PRs 应该在几小时内而不是几天内合并。

Up next is the last module, Navigating Challenging Code Review Situations.

接下来是最后一个模块，“应对具有挑战性的代码审查情况”。

## 应对具有挑战性的代码审查情况

Hello, and welcome to the last module of this course.

你好，欢迎来到本课程的最后一个模块。

Things don't always work out the way you hoped.

事情并不总是如你所愿。

You apply to the tips presented throughout this course, but long, unproductive discussions still happen on pull requests done by your team members.

你应用了本课程中介绍的技巧，但你团队成员完成的拉取请求上仍然会发生冗长、毫无成效的讨论。

What else can you do about it?

你还能做些什么呢？

There are two types of measures, preventive and reactive, and I'll share them with you in this module.

有两种措施，预防性的和反应性的，我将在这个模块中与你分享。

### 建立信任和关系

Build trust and relationships in your team.

在你的团队中建立信任和关系。

This is the main preventive measure, and it is very powerful.

这是主要的预防措施，而且非常强大。

Chat to each other about life, discuss common interests and hobbies, go out for lunch together.

互相聊聊生活，讨论共同的兴趣爱好，一起出去吃午饭。

Every lunch is a mini team‑building exercise.

每次午餐都是一次小型的团队建设活动。

If you're working from home, have occasional short virtual meetings that are not work related, at least a bit, even if you're an introvert.

如果你在家工作，偶尔开一些与工作无关的简短虚拟会议，至少一点点，即使你是一个内向的人。

Why?

为什么？

Because we naturally behave better towards each other when we get to know each other better.

因为当我们更了解彼此时，我们自然会更好地对待对方。

So when you build trust, your code reviews get much faster.

所以，当你建立起信任，你的代码审查就会快得多。

As a reviewee, you accept feedback better, and you don't imagine it as something aggressive, because you had a nice chat with the other person just yesterday.

作为被审查者，你更容易接受反馈，不会把它想象成具有攻击性的东西，因为你昨天才和对方愉快地聊过天。

If you are a reviewer, you will naturally be more willing to review the code diligently and thoroughly, hopefully not too leniently.

如果你是审查者，你自然会更愿意勤奋、彻底地审查代码，希望不要太宽容。

When you build trust, you can then break some of the rules presented in this course.

当你建立起信任后，你就可以打破本课程中提出的一些规则。

Instead of, I've noticed this commented out code, should we perhaps remove it, which is quite verbose, but arguably necessary when you don't know the committer well.

而不是说，“我注意到这段被注释掉的代码，我们是不是应该把它删掉？”这相当啰嗦，但在你不熟悉提交者的情况下，可以说是必要的。

Instead, you can just leave a short and dry, commented out code, and the person will do something about it without seeing this as a reproach or a command.

相反，你只需留下一句简短而干脆的“注释掉的代码”，对方就会处理它，而不会认为这是责备或命令。

I can confirm this worked in a tightly knit team I used to be part of.

我可以证实，这在我曾经所在的一个紧密团结的团队中是行之有效的。

Another example could be, this should be extracted for later use.

另一个例子可以是，这个应该被提取出来以便以后使用。

It might seem like a command, and this is clearly against the best practices I was talking about in the last module, but it's okay to break the rules as long as you are 100% sure it won't be taken the wrong way, and that's only possible within a healthy environment that was nurtured and developed over time.

这可能看起来像一个命令，这显然违背了我在上一个模块中谈到的最佳实践，但只要你百分之百确定它不会被误解，打破规则是可以的，而这只有在一个经过长期培养和发展的健康环境中才可能实现。

This is quite similar to switching your tone and language, depending on the social context.

这与根据社交情境转换你的语气和语言非常相似。

We don't talk the same way to a boss, a friend, or a parent.

我们对老板、朋友或父母的说话方式是不同的。

Another minor benefit of high trust is that you can sometimes pre‑approve a PR.

高度信任的另一个小好处是，你有时可以预先批准一个 PR。

You leave a comment on something minor, prefixed with nitpick, for example, and if you find nothing major, you go ahead and approve the PR and move on to other things, without having to come back to that PR, because you trust the reviewee to consider your comment and reply, and fix.

你对一些小问题留下评论，例如，以“挑剔”为前缀，如果你没有发现重大问题，你就直接批准 PR 并继续做其他事情，而不必再回到那个 PR，因为你相信被审查者会考虑你的评论并回复和修复。

The practice of pre‑approving only minor issues speeds things up a bit, so that's great, but it should not be done frivolously.

只预先批准小问题的做法能稍微加快速度，这很好，但不应该轻率地去做。

I have also seen pre‑approved pull requests that still required a lot of work, and personally, I can't agree with that practice.

我也见过预先批准的拉取请求，但仍然需要大量工作，就我个人而言，我不能同意这种做法。

So please, be careful with this particular advice and use it sparingly, if at all.

所以请小心使用这个特别的建议，如果非要用，也请谨慎使用。

### 将事情转到线下处理

You might have trust in your team, but strong disagreements happen sometimes.

你可能对你的团队有信任，但有时也会发生强烈的分歧。

There's just no way to avoid them completely.

完全避免它们是不可能的。

A typical indicator is three comments on the same thing.

一个典型的标志是对同一件事有三条评论。

The initial comments by the reviewer, pushback, and then another pushback.

审查者的初始评论，反驳，然后又一次反驳。

The moment you notice this, consider taking things offline.

一旦你注意到这一点，考虑将事情转到线下处理。

If you are both in the office, a face‑to‑face talk is best.

如果你们都在办公室，面对面的交谈是最好的。

Go to a whiteboard, go get a coffee in the company's kitchen, wherever you feel like, and discuss it until you resolve it.

去白板前，去公司厨房喝杯咖啡，任何你觉得舒服的地方，然后讨论直到解决它。

If you're working from home, try chat or a call with a webcam.

如果你在家工作，可以尝试聊天或使用网络摄像头通话。

If you work in a large company, or even a medium‑sized company, you must have observed a chain of emails that lasted for a week and you thought to yourself, well, this could have been resolved in an hour if it were a direct conversation.

如果你在一家大公司，甚至是中型公司工作，你一定观察过持续一周的邮件链，然后你会想，嗯，如果这是一次直接对话，这本可以在一小时内解决。

Pull requests are no different.

拉取请求也不例外。

Whenever you come to an agreement, either the reviewee or the reviewer should then close the conversation on the pull request by saying as per our discussion with X offline, we decided to go for solution .

无论何时你们达成协议，被审查者或审查者都应该在拉取请求上结束对话，说“根据我们与 X 的线下讨论，我们决定采用 Y 方案”。

### 处理难相处的被审查者和审查者

Talking face to face or in a call with a webcam resolves many disagreements, but not all of them.

面对面交谈或通过网络摄像头通话可以解决许多分歧，但并非所有。

Difficult personalities do exist, however you choose to define that.

难相处的个性确实存在，无论你怎么定义它。

For example, a reviewee makes the same mistakes over and over and refuses to learn, forcing the reviewers to leave the same comments trying to correct the same issues.

例如，一个被审查者反复犯同样的错误，并且拒绝学习，迫使审查者留下同样的评论，试图纠正同样的问题。

Or someone unwilling to implement suggestions at all.

或者有人根本不愿意实施建议。

Or a reviewer who might be considered overly critical or pedantic, who blocks pull requests whenever there's a double space in a comment.

或者一个可能被认为过于挑剔或迂腐的审查者，只要评论里有双空格就阻止拉取请求。

Or they act as gatekeepers and always insist that their suggestion be implemented, which effectively makes it a command, not a suggestion, even if it is phrased nicely.

或者他们扮演守门员的角色，总是坚持他们的建议必须被实施，这实际上使其成为一个命令，而不是建议，即使措辞很客气。

Not only does this slow down the process, it can also decrease the team morale to the point where everyone wants to leave.

这不仅减慢了流程，还会降低团队士气，以至于每个人都想离开。

In such cases, the highest possible code quality is not worth it.

在这种情况下，尽可能高的代码质量是不值得的。

I hope that you will not find yourself in such situations, but if you do, then a reasonable process is try to discuss one on one to gain the deepest possible understanding of the other person and find common ground.

我希望你不会遇到这种情况，但如果你遇到了，那么一个合理的流程是尝试一对一讨论，以尽可能深入地了解对方并找到共同点。

If you can't come to an agreement, seek an outside opinion.

如果你们无法达成协议，寻求外部意见。

Then, if you get two out of three, agree that X should be done, or three out of four are in favor of that other thing, then you go with the solution chosen by the majority.

然后，如果你们是三局两胜，同意应该做 X，或者四分之三的人赞成另一件事，那么你们就采纳多数人选择的方案。

If all else fails, escalate to a senior and let them handle it.

如果一切都失败了，就上报给上级，让他们来处理。

If it works out in your favor, great.

如果结果对你有利，那很好。

If not, accept it and hope for a better outcome next time.

如果不是，接受它并希望下次有更好的结果。

If this happens repeatedly and you feel it's just not worth staying, consider moving.

如果这种情况反复发生，你觉得留下来不值得，就考虑离开。

If you can't change the environment, try to leave the environment.

如果你不能改变环境，就试着离开这个环境。

### 进一步学习

As I've said at the beginning of this course, code reviewing is a unique mix of hard and soft skills.

正如我在本课程开始时所说，代码审查是硬技能和软技能的独特结合。

This course primarily focused on soft skills.

本课程主要关注软技能。

If you'd like to further improve your communication and feedback skills, then there's an entire path, of course it's called Providing Quality Feedback.

如果你想进一步提高你的沟通和反馈技巧，那么有一整套课程，当然它叫做“提供高质量的反馈”。

And the course Applying Feedback Sharing Techniques Effectively teaches specific feedback techniques, as the name suggests.

而《有效应用反馈分享技巧》这门课程，顾名思义，教授了具体的反馈技巧。

Remember that code review is also a process to collaborate, and if you want to learn more about increasing team collaboration and you like books as an alternative learning resource, then I recommend Debugging Teams: Better Productivity Through Collaboration.

请记住，代码审查也是一个协作的过程，如果你想了解更多关于加强团队协作的知识，并且喜欢把书作为另一种学习资源，那么我推荐《调试团队：通过协作提高生产力》。