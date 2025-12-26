---
area: "tech-engineering"
category: technology
companies_orgs: []
date: '2025-07-31'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: []
people: []
products_models: []
project: []
series: ''
source: https://www.youtube.com/watch?v=gv0WHhKelSE
speaker: Anthropic
status: evergreen
summary: Anthropic 团队成员 Cal 深入讲解了 Claude Code 的工作原理、核心功能、广泛应用场景，并分享了提升效率的最佳实践，包括文件管理、权限控制和上下文管理等，旨在帮助用户充分利用这一工具。
tags:
- ai-agent
- claude-code
- code-generation
- developer-tool
title: Claude Code：工作原理、应用场景与高效使用技巧
---
### 引言与个人经历

Let's get started. Welcome everyone to Claude Code best practices. In this talk, I'm going to talk about what Claude Code is at a high level.
大家好，欢迎来到 Claude Code 最佳实践。在本次演讲中，我将首先从宏观层面介绍 **Claude Code** (Anthropic 开发的一款 AI 编码工具)。

Then we'll peer under the hood a little bit to understand how Claude Code works.
接着，我们将深入探究 Claude Code 的工作原理。

And then, knowing that because it's useful to know how your tools work, we're going to talk about good use cases for Claude Code and also best practices we've figured out, both internally and from our users, for getting the most out of this tool.
了解工具的工作原理非常重要，因此我们将讨论 Claude Code 的良好用例，以及我们从内部和用户那里总结出的、能最大化利用此工具的最佳实践。

But before I get started, I'd like to introduce myself real quick and talk about how I ended up on the stage.
但在开始之前，我想快速介绍一下自己，并讲讲我是如何站到这个讲台上的。

So, my name's Cal, and I joined Anthropic about a year and a half ago to help start up a team we call Applied AI.
我的名字叫 Cal，大约一年半前我加入了 **Anthropic** (一家人工智能安全公司)，帮助组建了一个名为 **Applied AI** (应用人工智能) 的团队。

And it's the Applied AI's mission, our team's mission, is to help our customers and partners build great products and features on top of Claude.
我们应用人工智能团队的使命是帮助客户和合作伙伴在 **Claude** (Anthropic 开发的大型语言模型) 的基础上构建出色的产品和功能。

So what that really means is I spend a lot of my day prompting Claude to get the absolute best outputs out of these models.
这意味着我每天大部分时间都在对 Claude 进行 **Prompting** (提示工程: 通过精心设计的输入指令来引导 AI 模型生成所需输出)，以从这些模型中获得最佳输出。

That said, I also love to code, and I'm definitely one of those coders that starts a lot of projects, has some crazy idea, and then just never finishes them.
话虽如此，我也非常喜欢编码，我绝对是那种会启动许多项目、有一些疯狂想法但从未完成的程序员之一。

So, I have this graveyard of just like code that I started, never really finished.
所以，我有一个堆满了未完成代码的“墓地”。

But I'm always spinning new things up.
但我总是在启动新项目。

And late last year, I was in Slack and I was hearing about this new tool that a few people are using.
去年年末，我在 **Slack** (一款团队协作和通讯和项目管理工具) 上听说有几个人正在使用一款新工具。

They were saying it was really cool.
他们都说它非常酷。

And so, on a Friday night, I downloaded the tool that would become Claude Code.
于是，在一个周五晚上，我下载了后来成为 Claude Code 的那个工具。

And I threw it at this kind of new notetaking app that I wanted to build.
我把它用在我想要构建的一款新型笔记应用上。

And like that whole weekend just kind of totally changed the way that I code and think about software engineering.
那个周末彻底改变了我编码和思考软件工程的方式。

I was carrying around my laptop with me all weekend. I was super addicted to just watching Claude Code work, and I would press enter and I'd switch over to my browser and refresh, and I watched this huge powerful application come together in front of my eyes.
那个周末我一直带着我的笔记本电脑。我非常沉迷于观看 Claude Code 工作，我按下回车键，然后切换到浏览器刷新，就看到一个强大而庞大的应用程序在我眼前逐渐成形。

And I got way farther into this thing than I ever would have on my own. And it just blew my mind.
我用它比我自己独立开发走得远得多，这简直让我大开眼界。

And while I was doing this, I was a little worried. I was like, "You know, I kind of know how these things work, so I'm like, man, I'm using a lot of tokens."
在做这些的时候，我有点担心。我想：“我知道这些东西是怎么工作的，天哪，我用了好多 **Tokens** (令牌: AI 模型处理文本的基本单位，可以是单词、子词或字符)。”

"I hope I don't get in trouble or anyone like notices. I'm not really contributing to Anthropic code."
“我希望我不会惹麻烦，也没人会注意到。我并没有真正为 Anthropic 的代码库做贡献。”

But what I didn't know is that the Claude Code team had built this internal leaderboard tracking how much all the Anthropic employees were using this.
但我不知道的是，Claude Code 团队已经建立了一个内部排行榜，追踪所有 Anthropic 员工的使用情况。

And over the weekend, I had shot to the top.
那个周末，我一跃登顶。

And so through that, I got to meet Boris and Cat and some of the early Claude Code team.
因此，我得以认识了 Boris、Cat 和一些早期的 Claude Code 团队成员。

And I was able to start talking to them and say, "Hey, I love this tool. I also know a lot about prompting. Can I help you all out?"
我开始和他们交流，说：“嘿，我喜欢这个工具。我对提示工程也很有经验。我能帮上忙吗？”

And so through that I got involved, and now I'm one of the core contributors on the team, and I do a lot of I work a lot on the prompting the system prompts, how the tools work, the tool descriptions and tool results, as well as I work on how we evaluate this tool.
就这样我参与了进来，现在我是团队的核心贡献者之一，我主要负责提示工程、系统提示、工具的工作方式、工具描述和工具结果，以及评估这个工具的方式。

So when we think about changing the prompts, how do we make how do we know we made things better or the same, and we didn't totally ruin Claude Code.
所以当我们考虑改变提示时，我们如何知道我们改进了东西，或者保持不变，并且没有完全毁掉 Claude Code。

### Claude Code 的工作原理

So with that said, let's kind of dive in.
话不多说，让我们深入了解一下。

So, here's my current mental model of Claude Code and how I describe it to people when people ask me.
这是我对 Claude Code 的当前心智模型，也是当人们问我时，我如何向他们描述它的。

Claude Code is like that co-worker that does everything on the terminal.
Claude Code 就像是那种在终端上完成所有工作的同事。

It's the sort of person that just never touches the GUI. They're a whiz.
它就是那种从不碰 **GUI** (Graphical User Interface: 图形用户界面) 的人，一个高手。

I think of when I was a junior engineer, I had this mentor and I would walk over to his desk and I would say, "Hey, Tony, can you help me with this bug?" and he would whipping it open his terminal and he'd be like doing all these crazy Bash commands and changing things around in Vim, and I'd always walk away thinking, "Wow, that was crazy. I should learn how to do that."
我想起我还是初级工程师时，我有一位导师。我走到他的办公桌前说：“嘿，Tony，你能帮我解决这个 bug 吗？”他会迅速打开终端，输入各种疯狂的 **Bash commands** (Bash 命令: 在 Unix-like 系统中运行命令的 shell 脚本语言) 并在 **Vim** (一款高度可配置的文本编辑器) 中修改文件。我每次都会走开，心里想着：“哇，太厉害了。我应该学学怎么做。”

I never did.
但我从未学会。

But having Claude Code on your computer is kind of like having Tony next to you all the time.
然而，你的电脑上有了 Claude Code，就好像 Tony 随时都在你身边一样。

So, how does Claude Code kind of work under the hood?
那么，Claude Code 在底层是如何工作的呢？

At Anthropic, we try to always do what we call the simple thing that works.
在 Anthropic，我们总是尝试做我们所谓的“简单有效”的事情。

And what that means for Claude Code is it's what we would consider a very pure agent.
对于 Claude Code 来说，这意味着它是一个我们认为非常纯粹的 **Agent** (代理: AI 系统中能够感知环境、做出决策并采取行动的实体)。

And Anthropic, when we talk about agents, what we really mean is some instructions, some powerful tools, and you let the model just run in a loop until it decides it's done.
在 Anthropic，当我们谈论代理时，我们真正的意思是：一些指令、一些强大的工具，然后让模型在一个循环中运行，直到它决定完成任务。

And that's really what Claude Code is.
这正是 Claude Code 的本质。

So it's tools, powerful tools, and the tools that you know someone that was really good at a terminal would be able to use tools to create and edit files to use the terminal.
所以它是一些工具，强大的工具，那些擅长使用终端的人会用这些工具来创建和编辑文件，以及使用终端。

And then you can also do things like pull in other things with **MCP** (Multi-Channel Proxy: 一种多通道代理机制，允许 AI 工具与多种外部系统或服务进行交互)。
然后你还可以通过 MCP 来引入其他功能。

Now, on top of that, there's how Claude understands the codebase.
此外，还有 Claude 如何理解 **Codebase** (代码库: 包含项目所有源代码、资源文件等的集合)。

And if you're going to build a coding agent or a coding tool a year ago, you'd probably have ideas like, well, okay, I'm going to get this user message about something about this codebase, and I'll need to figure out which files are relevant.
如果你在一年前要构建一个编码代理或编码工具，你可能会有这样的想法：好吧，我收到了一条关于这个代码库的用户消息，我需要找出哪些文件是相关的。

So maybe I'll like index the whole codebase and embed it and do this fancy like kind of **RAG** (Retrieval-Augmented Generation: 一种结合信息检索和文本生成的技术) retrieval thing.
所以，我可能会对整个代码库进行索引，进行嵌入，然后做一些花哨的像 RAG 检索那样的事情。

That is not how Claude Code works. We don't do any sort of indexing.
Claude Code 不是这样工作的。我们不做任何形式的索引。

Instead, Claude kind of explores and understands the codebase how you, if you were new to a team and new to a codebase, would explore a codebase.
相反，Claude 探索和理解代码库的方式，就像你初到一个团队、接触一个新代码库时会探索它的方式一样。

And that is through **Agentic Search** (代理式搜索: 一种迭代式的搜索方法，AI 代理会根据搜索结果动态调整后续搜索策略，以逐步理解和解决问题), which is the same sort of search tools you or I would use, things like **Glob** (一种模式匹配工具，用于查找符合特定模式的文件名), **Grep** (一种命令行工具，用于在文件中搜索文本模式) and **Find** (一种命令行工具，用于在文件系统中查找文件)。
这通过代理式搜索实现，它使用的搜索工具与你我使用的类似，例如 Glob、Grep 和 Find。

And it can work its way through a codebase and understand what's going on.
它能够遍历代码库并理解正在发生的事情。

And when we talk about Agentic Search, that really means the model can go do some searches and then it can look at the results and can say, "Hmm, maybe I need to figure out a few more things. I'm going to go do some more searching and then come back."
当我们谈论代理式搜索时，它真正的意思是模型可以进行一些搜索，然后查看结果，并说：“嗯，也许我还需要弄清楚更多事情。我将进行更多搜索，然后返回。”

And then on top of these primitives, on top of this agent, we have a few things.
在这些基本功能之上，在这个代理之上，我们还有一些东西。

We have a very nice light **UI layer** (用户界面层: 软件中负责与用户交互的部分) where you get to watch Claude Code work.
我们有一个非常漂亮、轻量级的用户界面层，你可以在其中观看 Claude Code 工作。

You see all the text fly by, and we have this nice permission system that allows the agent to work and allows and kind of forces the human to butt in when the agent is doing something dangerous.
你看到所有文本飞速闪过，我们还有一个很好的权限系统，它允许代理工作，并在代理执行危险操作时，强制人类介入。

And then on top of that, we also care a lot about security in this tool.
此外，我们也非常重视这个工具的安全性。

And so because Claude Code is just such a lightweight kind of layer on top of the model and the fact that our model is available not just behind Anthropic APIs but also with our cloud providers **AWS** (Amazon Web Services: 亚马逊云计算服务) and **GCP** (Google Cloud Platform: 谷歌云平台), it's very easy and native to point Claude Code at one of these other services if you feel more comfortable consuming Claude that way.
由于 Claude Code 只是模型之上一个非常轻量级的层，并且我们的模型不仅可以通过 Anthropic 的 API 访问，还可以通过我们的云提供商 AWS 和 GCP 访问，如果你觉得以这种方式使用 Claude 更方便，那么将 Claude Code 指向这些其他服务会非常容易和自然。

### Claude Code 的应用场景

Now a lot of people ask me, "Hey Cal, what can I use Claude Code for? Like what is it good at? Where is it interesting?"
现在很多人问我：“嘿，Cal，我可以用 Claude Code 来做什么？它擅长什么？它有趣在哪里？”

And the reality is it's kind of great at everything.
实际上，它几乎在所有方面都很出色。

So let's start with discovery.
所以我们从“发现”开始。

Often times in your career, you will be dropped into a new codebase.
在你的职业生涯中，你经常会被安排到一个新的代码库中。

Whether that means you're switching teams, you're switching companies, I don't know, you're starting to work on some sort of open source project.
无论是换团队、换公司，或者你开始参与某个开源项目。

And probably when you're first getting started and getting familiar, you're not very productive because you're just trying to figure out where things are in the codebase, what patterns kind of the team is using, things like that.
当你刚开始熟悉新环境时，你可能效率不高，因为你只是在努力弄清楚代码库中的东西在哪里，团队使用了哪些模式等等。

And Claude Code can kind of help supercharge that onboarding process.
而 Claude Code 可以在某种程度上帮助加速这个适应过程。

You can ask Claude, "Hey, where is this feature implemented?"
你可以问 Claude：“嘿，这个功能是在哪里实现的？”

Or since it's great at the terminal, you can say, "Hey, look at this file and look at the **Git** (一种分布式版本控制系统) history and just kind of tell me a story about how this code has changed over the past couple weeks."
或者因为它擅长使用终端，你可以说：“嘿，看看这个文件，再看看 Git 的历史记录，然后给我讲讲这个代码在过去几周是如何变化的。”

One thing you can use Claude Code for, and I think this is underrated, is instead of just diving in and starting to work, you can use Claude Code as a thought partner.
你可以用 Claude Code 做一件事，我认为这被低估了，那就是你可以把它当作一个“思考伙伴”，而不是直接投入工作。

So often times when I'm working with Claude and I want to implement a feature or we're going to change something up, I'll open up Claude and I'll say, "Hey Claude, you know, I'm thinking about implementing this feature, can you just kind of like search around and kind of figure out how we would do it and maybe report back with like two or three different options."
所以很多时候，当我使用 Claude 并且想实现一个功能或者我们要修改一些东西时，我会打开 Claude 并说：“嘿，Claude，我正在考虑实现这个功能，你能先搜索一下，找出我们该怎么做，然后给我两三个不同的方案吗？”

"Don't start working. Don't start writing any files writing any files yet," and Claude will go off and use those agentic search capabilities and come back with a few ideas and then I could work with Claude to kind of validate things and then we can jump into the project.
“不要开始工作，不要现在就写任何文件。”然后 Claude 就会利用它的代理式搜索能力，提出一些想法。之后我就可以和 Claude 一起验证这些想法，然后我们再开始项目。

Of course Claude Code is great at building and writing code, and I would say this in on two different fronts.
当然，Claude Code 在构建和编写代码方面也很出色，我将从两个不同方面来说明这一点。

One, it can do the zero-to-one sort of stuff. You drop it in an empty directory and you say, "Hey, build me an app, build me a game that demos very well."
首先，它可以做从零到一的事情。你把它放到一个空目录中，然后说：“嘿，给我构建一个应用程序，构建一个演示效果很好的游戏。”

It's very fun to do, it's very gratifying.
这做起来非常有趣，也很有成就感。

Of course, in reality, what really matters is, is Claude Code good working in existing codebases?
当然，在现实中，真正重要的是 Claude Code 在现有代码库中工作得好不好？

And this is primarily what we focus on.
这主要是我们关注的重点。

On the Claude Code team, we have in our codebase abnormally high, I would say, unit test coverage.
在 Claude Code 团队中，我们的代码库具有异常高的单元测试覆盖率。

And that's because Claude Code makes it so easy and just straightforward to add unit tests.
这是因为 Claude Code 让添加单元测试变得非常容易和直接。

So, we have great code coverage.
所以，我们有很好的代码覆盖率。

And then the other thing we have in Claude Code in our own codebase is we have great commits and **PR messages** (Pull Request 消息: 在版本控制系统中，当开发者请求将自己的代码合并到主分支时，需要提供的描述性信息) because when we finish working, we'll just say, "Hey Claude, write the commit for me, write the PR message for me."
另外，在 Claude Code 自己的代码库中，我们有很棒的提交信息和 PR messages，因为当我们完成工作时，我们只会说：“嘿，Claude，帮我写提交信息，帮我写 PR 消息。”

We also see great opportunities to use Claude Code in kind of the deployment like deployments and in other parts of the lifecycle.
我们还看到在部署以及生命周期的其他部分使用 Claude Code 的巨大机会。

And this is a few other people have talked about this but this is using the **Claude Code SDK** (Software Development Kit: 软件开发工具包，用于构建基于 Claude Code 的应用程序)。
一些其他人也谈到过这一点，这就是使用 Claude Code SDK。

So using it headlessly, using it programmatically, being able to sprinkle in a coding agent anywhere.
这意味着可以无头模式使用它，以编程方式使用它，能够在任何地方嵌入一个编码代理。

And so that's things like sprinkling it into **CI/CD** (Continuous Integration/Continuous Deployment: 持续集成/持续部署，一种软件开发实践，旨在自动化代码集成、测试和部署流程) to use it in **GitHub** (一个基于 Git 的代码托管平台) for instance to help people programmatically.
例如，将其集成到 CI/CD 流程中，以便在 GitHub 等平台上以编程方式帮助人们。

And then finally, it's great kind of with support and scale. It can help you debug errors faster.
最后，它在支持和规模化方面也很出色。它可以帮助你更快地调试错误。

One thing that we saw when we started giving Claude Code to customers and talking to them about it, we didn't totally predict this, was a lot of customers or potential customers said, "Hey, we've been putting off this large codebase migration."
当我们开始向客户提供 Claude Code 并与他们交流时，我们没有完全预料到的一件事是，许多客户或潜在客户说：“嘿，我们一直在推迟这项大型代码库迁移。”

People that are on old versions of **Java** (一种广泛使用的编程语言) trying to get to a new one or a team that's on **PHP** (一种服务器端脚本语言) and they're trying to get to **React** (一个用于构建用户界面的 JavaScript 库) or **Angular** (一个用于构建单页应用的 TypeScript 框架)。
比如那些还在使用旧版 Java 的人想迁移到新版本，或者一个团队使用 PHP 而他们想迁移到 React 或 Angular。

We've talked to multiple teams like this, and having a tool like Claude Code makes projects like that a little more digestible.
我们与多个这样的团队交流过，拥有像 Claude Code 这样的工具，能让这类项目更容易消化。

When you go to your team and you say, "Hey, we're going to spend a month refactoring or rewriting large parts of the codebase."
当你告诉你的团队：“嘿，我们打算花一个月时间重构或重写代码库的大部分内容”时。

And then on top of that, and this kind of matters across all these, is once again remember Claude is great at the terminal.
最重要的是，这一点对所有这些场景都很重要：再次强调，Claude 非常擅长使用终端。

And that means it's going to be great at all those different **CLI tools** (Command Line Interface tools: 命令行界面工具), things like Git, **Docker** (一个用于开发、交付和运行应用程序的开放平台), **Big Query** (谷歌云上的无服务器、可伸缩的企业数据仓库) things like that.
这意味着它将擅长所有不同的 CLI 工具，比如 Git、Docker、Big Query 等等。

I never have to worry about, "Oh, I'm going to get myself, how do I get myself out of this sticky **rebase** (Git 中的一个命令，用于修改提交历史)?"
我再也不用担心：“哦，我该如何摆脱这个棘手的 Git rebase 问题？”

I'll just fire up Claude Code and tell it the situation and be like, "Hey, can you fix this for me?" It's incredible.
我只需启动 Claude Code，告诉它情况，然后说：“嘿，你能帮我解决这个问题吗？”这太不可思议了。

### 最佳实践

Now, let's talk about best practices.
现在，我们来谈谈最佳实践。

And the first one is not going to be a surprise, but the first one is use `Claude.md` files.
第一个可能不会让你感到惊讶，那就是使用 `Claude.md` 文件。

So, remember that Claude Code, like I said, is an agent, and it has some tools, has some lightweight instructions in the prompt, but it doesn't really have memory.
所以，请记住，正如我所说，Claude Code 是一个代理，它有一些工具，在提示中也有一些轻量级的指令，但它并没有真正的记忆。

And so the main way we share state across kind of sessions or across our team when we fire up Claude Code in the same codebase over and over again is this `Claude.md` file.
因此，当我们反复在同一个代码库中启动 Claude Code 时，跨会话或跨团队共享状态的主要方式就是这个 `Claude.md` 文件。

So when we start Claude, what happens is if there's this `Claude.md` file in the working directory, it's just plopped into context.
所以当我们启动 Claude 时，如果工作目录中存在 `Claude.md` 文件，它就会被直接放入上下文。

It's plopped into the prompt.
它被放入提示中。

And basically what it says is, "Hey Claude, by the way, these are important instructions the developer left for you. Be sure to pay close attention to this."
它基本上是说：“嘿，Claude，顺便说一句，这些是开发者给你留下的重要指令。请务必密切关注。”

And there's various places you can put the `Claude.md` file.
你可以把 `Claude.md` 文件放在不同的地方。

You can put it in a project and check it in so all your teammates share it.
你可以把它放在项目里并提交，这样你的所有团队成员都可以共享它。

You could put one in your home directory if there's things you just want Claude to always know about regardless of what you're working on.
如果你希望 Claude 无论你在做什么都能一直了解某些事情，你可以在你的主目录中放一个。

And the things you put in here are things like, "Hey, by the way, maybe this is how you run the unit tests."
你放在这里的内容可以是：“嘿，顺便说一句，这可能是你运行单元测试的方式。”

"Or just so you know, to make kind of your searching and life easier, here's like just like an overview of kind of how this project is laid out, where the tests live, what different modules are, things like that."
“或者只是让你知道，为了让你的搜索和工作更轻松，这里有一个关于项目布局、测试位置、不同模块等内容的概述。”

"Or here's our style guide." All sorts of things like that to just make Claude's life a bit easier.
“或者这是我们的风格指南。”所有这些都能让 Claude 的工作变得更轻松一些。

And you can build these things up over time.
你可以随着时间的推移不断完善这些内容。

The other thing you can do, which is important, is permission management.
另一件重要的事情是权限管理。

When you're running Claude Code, there's all sorts of different kind of permission things flying by.
当你运行 Claude Code 时，会有各种各样的权限提示出现。

Kind of out of the box, what happens when you start our tool is for read actions.
开箱即用时，当你启动我们的工具，对于读取操作。

If Claude is searching or reading, we just let it go.
如果 Claude 正在搜索或读取，我们就会让它继续。

But once it starts writing or running Bash commands or doing things that could change change stuff on your machine potentially, that's when we kick in this UI and it says something like, "Yes, yes, always allow this or no, I want to do something else."
但一旦它开始写入或运行 Bash 命令，或做一些可能改变你机器上内容的事情时，我们就会启动这个 UI，它会显示类似“是，是，总是允许此操作”或“否，我想做其他事情”的提示。

And using that permission management and being smart about it can help you work faster.
明智地使用权限管理可以帮助你更快地工作。

So there's something called **Autoaccept Mode** (自动接受模式: 一种设置，允许 AI 代理在执行某些操作时自动接受权限，无需用户手动确认)，where if you're working with Claude Code and you press Shift+Tab, Claude will just start working.
所以有一种叫做自动接受模式的功能，如果你在使用 Claude Code 时按下 Shift+Tab，Claude 就会开始工作。

There's things you can do like you can configure Claude in the settings where specific commands like on Bash, like if you just are like tired of saying, "Yes, run `npm run test`," you can just always approve that.
你可以在设置中配置 Claude，例如对于 Bash 中的特定命令，如果你厌倦了每次都说“是，运行 `npm run test`”，你可以选择总是批准它。

So fiddling with your permission management is a great way to kind of speed up your workflow integration setup.
因此，调整你的权限管理是加快工作流程集成设置的好方法。

So, one thing that is going to help you get the most out of Claude Code is remember that it's great at the terminal.
那么，帮助你最大化利用 Claude Code 的一件事是记住它非常擅长使用终端。

And if there's applications that you use which have kind of a way to access them through **CLI** (Command Line Interface: 命令行界面)，and GitHub is a great example of that.
如果有些你使用的应用程序可以通过命令行界面访问，GitHub 就是一个很好的例子。

They have a powerful tool called GH.
他们有一个强大的工具叫做 `GH`。

You can basically give more work to Claude Code, and you can do that either by just installing more CLI tools or you can attach more MCP servers.
你基本上可以给 Claude Code 更多的工作，你可以通过安装更多的 CLI 工具，或者连接更多的 MCP 服务器来实现。

I would say just through experience that if you're using something like a CLI tool that's well known and well documented and you're trying to choose between the CLI tool and just installing it on your machine and grabbing an MCP server, I would recommend using the CLI tool.
根据经验，我想说的是，如果你正在使用一个知名且文档完善的 CLI 工具，并且你正在 CLI 工具和直接在你的机器上安装它并获取一个 MCP 服务器之间做选择，我会推荐使用 CLI 工具。

And then also if you internally have your own tools at Anthropic, we have something called `Coup` that does a whole bunch of stuff for us.
此外，如果你在 Anthropic 内部有自己的工具，我们有一个叫做 `Coup` 的东西为我们做了很多事情。

You can also tell Claude about that, and you probably that's the sort of thing you'd put in `Claude.md`.
你也可以告诉 Claude 这些，这可能就是你会写入 `Claude.md` 的内容。

And then context management.
然后是上下文管理。

So remember that Claude is an agent, and when it's an a what what it does it's calls these tools, and the context builds up and up over time.
所以请记住 Claude 是一个代理，它会调用这些工具，上下文会随着时间的推移不断累积。

And at least for Anthropic, our models have a **Context Window** (上下文窗口: AI 模型在一次交互中可以处理的文本长度限制) of 200,000 tokens, and you can max this thing out.
至少对于 Anthropic 来说，我们的模型拥有 200,000 个 tokens 的上下文窗口，你可以把它用满。

So you kind of have two options when you're in a long session with Claude and you're working and you're going back and forth.
所以当你与 Claude 进行长时间会话，来回工作时，你基本上有两种选择。

You'll see in the bottom right you'll start to get this little warning that'll say, "Hey, you're starting to fill up the context window," and kind of depending on what's going on you have two options.
你会在右下角看到一个小的警告，上面写着“嘿，你开始填满上下文窗口了”，根据具体情况，你有两个选择。

You can run `/cle` and just start over, and that clears everything out except for instance `Claude.md`.
你可以运行 `/cle` 命令重新开始，它会清除所有内容，除了例如 `Claude.md`。

Or you can run `/compact`, and what'll happen is basically it's like a user message is inserted and it just says something like, "Hey, I need to go summarize everything we've been up to. I'm going to give this to another developer and they're going to pick up where I left off."
或者你可以运行 `/compact` 命令，这时基本上会插入一条用户消息，大致内容是：“嘿，我需要总结一下我们迄今为止所做的一切。我将把这个交给另一位开发者，他们将从我离开的地方继续。”

And then that summary is what kind of seeds the next session. You can go from there.
然后这个总结就会作为下一次会话的“种子”，你可以从那里继续。

We spend a lot of time tuning this kind of compact functionality so that as you max out the context window and then run compact, you can start back over and keep going efficient workflows.
我们花了很多时间来调整这种压缩功能，这样当你用完上下文窗口后运行压缩命令，你可以重新开始并继续高效的工作流程。

What can you do with Claude Code? And how do you get the most out?
你能用 Claude Code 做什么？以及如何最大化利用它？

So using planning and to-dos.
那就是使用规划和待办事项。

Talked a little bit about this before, but one of the best things you can do is when you open up Claude Code, instead of saying, "Hey, I need you to fix this bug," you can say, "Hey, I have this bug. Can you search around, figure out what's causing it, and just like tell me a plan how we're going to fix it?"
之前稍微提过一点，但你能做的最好的事情之一就是当你打开 Claude Code 时，不要说：“嘿，我需要你修复这个 bug。”而是可以说：“嘿，我有一个 bug。你能搜索一下，找出是什么原因造成的，然后告诉我一个修复计划吗？”

And this can save you a lot of time because you can verify, you can read Claude's plan, and you can verify what it's going to do.
这可以为你节省大量时间，因为你可以验证，你可以阅读 Claude 的计划，并验证它将要做什么。

And then the other thing that we have is we have this **To-do List Feature** (待办事项列表功能: AI 代理在执行复杂任务时自动生成并展示的任务分解列表)。
我们还有另一个功能，就是待办事项列表功能。

So often when Claude's working on a big task, it'll create a to-do list.
所以当 Claude 处理一个大任务时，它会创建一个待办事项列表。

And if you're kind of paying attention, you can kind of watch this to-do list, and if you see anything kind of weirder in there or something that doesn't make sense, that's when you can press Escape and say, "Hey Claude, let's change the to-do list. I think you're on the wrong path."
如果你留意，你可以观察这个待办事项列表，如果你在其中看到任何奇怪或不合理的地方，那时你就可以按下 Escape 键并说：“嘿，Claude，我们来修改一下待办事项列表。我觉得你走错了方向。”

Smart vibe coding.
智能氛围编码。

So it's very tempting and it's very powerful to just let Claude work and press Enter and see what happens at the end.
让 Claude 自己工作，然后按下回车键，最后看看结果，这非常诱人且强大。

I think there's a few things that can help make this better.
我认为有几件事可以帮助改进这一点。

And there's I think a talk later today about just this for 30 minutes.
而且我认为今天晚些时候会有一个 30 分钟的关于这个主题的演讲。

But doing things like having **Test-Driven Development** (TDD: 测试驱动开发，一种软件开发方法，强调先写测试用例，再编写代码使其通过)，having Claude make small changes, run the tests, make sure they pass, always having Claude do things like check the **TypeScript** (一种由微软开发的 JavaScript 超集，增加了静态类型检查) and the **Linting** (代码检查: 静态分析代码以发现潜在错误、风格问题和不符合规范的代码)，and then commit regularly so that if it's kind of going off the rails, you can always fall back and try again.
但做一些事情，比如采用测试驱动开发，让 Claude 进行小幅修改，运行测试，确保它们通过；总是让 Claude 检查 TypeScript 和代码检查；然后定期提交，这样如果它偏离了轨道，你总能回滚并重试。

You can use screenshots to guide and debug.
你可以使用截图来指导和调试。

So Claude is built on top of our **Multimodal Models** (多模态模型: 能够处理和理解多种类型数据，如文本、图像、音频等的 AI 模型)，you can always just grab a screenshot, paste it in, or if you have a file somewhere that's an image, you can just say, "Hey, Claude, look at this `mock.png` and then build the website for me or whatever."
Claude 是建立在我们的多模态模型之上的，你总是可以直接截取屏幕截图，粘贴进去，或者如果你有一个图像文件，你可以直接说：“嘿，Claude，看看这个 `mock.png`，然后帮我构建网站或其他东西。”

And then advanced techniques.
然后是高级技巧。

So, as you're getting used to using Claude, what are some things you can think about to kind of push things to the next level?
那么，当你逐渐习惯使用 Claude 时，有哪些事情可以考虑，以将工作推向更高层次呢？

And one of the things we see both internally and with customers is when you've started to use this tool for a while, it's going to be very tempting to use multiple Claudes at once.
我们内部和客户都看到的一件事是，当你使用这个工具一段时间后，同时使用多个 Claude 会变得非常诱人。

And so I know people at Anthropic and a few customers that run four Claudes at the same time.
我知道 Anthropic 有些人以及一些客户同时运行四个 Claude。

There's various ways to do this. You can have it in **Tmux** (Terminal Multiplexer: 终端复用器，允许在一个终端窗口中管理多个独立的终端会话) or just different tabs, all sorts of crazy things.
有多种方法可以做到这一点。你可以在 Tmux 中使用，或者仅仅是不同的标签页，各种各样疯狂的方法。

So I would challenge you to try getting multiple Claudes running at once and kind of be orchestrating all these things.
所以我鼓励你尝试同时运行多个 Claude 并协调它们的工作。

It's quite fun. I can only do two, but I know people that do four.
这很有趣。我只能同时运行两个，但我知道有人能同时运行四个。

Use escape. So, escape is your best friend.
使用 Escape 键。Escape 键是你的最好朋友。

While Claude is working, you can kind of keep an eye on what it's up to, and you can press Escape to stop it and interject and say, "Hey, I think you're going on the wrong path, or I want you to do something else."
当 Claude 工作时，你可以留意它在做什么，然后按下 Escape 键来停止它并介入，说：“嘿，我觉得你走错了方向，或者我想让你做其他事情。”

Knowing when the right time to press Escape is versus just letting Claude figure it out, is key to getting the most out of the tool.
知道何时按下 Escape 键，而不是任由 Claude 自己解决，是充分利用该工具的关键。

And there's a hidden feature. Not too many people know about it, but if you press Escape twice, you can actually jump back in your conversation.
还有一个隐藏功能。没多少人知道，但如果你连续按两次 Escape 键，你实际上可以回到对话中的上一步。

You can go back and you can kind of reset tool expansion in MCP.
你可以返回并重置 MCP 中的工具扩展。

So, this is taking it to the next level.
所以，这会将它提升到下一个层次。

If you feel like with Bash and with the tools that Claude has that it still can't do something, this is when you should start looking at MCP servers.
如果你觉得 Bash 和 Claude 已有的工具仍然无法完成某件事，那么你就应该开始考虑 MCP 服务器了。

And then headless automation.
然后是无头自动化。

And I think this is the thing we're most excited about, but also we are still trying to wrap our heads around internally, which is how can we use Claude programmatically.
我认为这是我们最兴奋的事情，但同时我们内部也仍在努力理解，那就是如何以编程方式使用 Claude。

We have that in GitHub actions. We want to figure out other creative places we can start using it. I would challenge you all to do the same.
我们在 GitHub Actions 中已经实现了这一点。我们想找出其他可以开始使用它的创意场景。我鼓励大家也这样做。

### 最新功能与更新

So, with that said, I'm going to jump over to my computer because there's one other best practice, which is it's always good to stay on top of everything that's new.
话虽如此，我现在要切换到我的电脑上，因为还有另一个最佳实践，那就是始终掌握所有新功能。

So, we're shipping super fast. I'm going to throw I'm just going to go over a few things that are new as of today.
我们发布速度非常快。我将快速介绍一些截至今天的新功能。

One thing is when you're in Claude now and you fire it up, you can do `/model`.
其中一点是，当你现在使用 Claude 并启动它时，你可以使用 `/model` 命令。

You can see what model you're running on. I'm on default, which happens to be **Sonnet** (Claude 模型家族中的一个中等性能模型)。
你可以查看你正在运行的模型。我目前使用的是默认模型，也就是 Sonnet。

We can jump over to **Opus** (Claude 模型家族中的一个高性能模型)。
我们可以切换到 Opus。

You can do the same thing in `/config`. Switch it here. So that's new. Make sure you're running the model that works for you.
你也可以在 `/config` 中做同样的事情。在这里切换。这是新功能。确保你正在运行适合你的模型。

There's another thing that's new about these models, which is you can say something like, "Can you figure out what's in this project?"
这些模型还有一个新功能，就是你可以说：“你能弄清楚这个项目里有什么吗？”

And for a long time, for a while, we've had this like "Think hard" or "Extended thinking."
长期以来，我们一直有“努力思考”或“扩展思考”这样的功能。

Now this is great, but with our past models, we wouldn't let our model think between tool calls, and that's probably when the thinking matters most.
这很棒，但我们以前的模型不会让模型在工具调用之间进行思考，而那可能正是思考最重要的时候。

So starting with **Claude 4** (Anthropic 推出的第四代 Claude 模型)，they can now our models now think between **Tool Calls** (工具调用: AI 模型在执行任务时，根据需要选择并使用外部工具或 API 的能力)，and we can watch this happen.
所以从 Claude 4 开始，我们的模型现在可以在工具调用之间进行思考，我们可以看到这个过程。

So we have Claude in this project. There's a few different files in here, and I'm just going to tell it to think hard and figure out what's in this project, and we can watch Claude start to work.
所以在这个项目中我们有 Claude。这里有一些不同的文件，我将告诉它努力思考并弄清楚这个项目里有什么，我们可以看到 Claude 开始工作。

And so the way you know you triggered thinking is you'll see kind of this lighter gray text, and then it'll call some file, it'll call some tools, it'll read some stuff, and then we see some more thinking.
所以你知道你触发了思考的方式是，你会看到这种浅灰色的文本，然后它会调用一些文件，调用一些工具，读取一些内容，然后我们看到更多的思考。

And this is awesome.
这太棒了。

So I encourage you when you're working on tasks and solving bugs, throw a "Think hard" in there.
所以我鼓励你们在处理任务和解决 bug 时，加入一个“努力思考”。

And then the other thing, and you know what, we'll just throw it up real quick, is I have this in **VS Code** (Visual Studio Code: 微软开发的一款免费开源代码编辑器)，but of course this is in **JetBrains** (一家开发软件开发工具的公司) as well, but we have these new great integrations with VS Code and and JetBrains.
另外，你知道吗，我们快速展示一下，我虽然是在 VS Code 中展示，但 JetBrains 也同样支持，我们与 VS Code 和 JetBrains 有了这些新的出色集成。

We can do things like Claude's going to know what file I'm in. What file am I in?
我们可以做一些事情，比如 Claude 会知道我正在哪个文件里。我在哪个文件里？

That is not what I meant to say, but Claude's going to figure it out.
那不是我想说的，但 Claude 会搞明白的。

And you can do things like this.
你可以做这样的事情。

So these are the sort of things I would encourage you to stay on top of.
所以这些是我鼓励大家保持关注的事情。

We have a public GitHub project called Claude Code under Anthropic. You can post issues there, but we also post our **Changelog** (变更日志: 记录软件版本更新、功能增减、bug 修复等历史信息的文档) there.
我们在 Anthropic 下有一个名为 Claude Code 的公共 GitHub 项目。你可以在那里提交问题，我们也在那里发布我们的变更日志。

And so I check this once a week and make sure that I'm on top of all the new stuff we're shipping because even I can't keep up with it.
所以我每周都会查看一次，确保我了解所有我们发布的新功能，因为连我也跟不上它的速度。

So, with that said, we have like four minutes left. I'm happy to answer questions about anything Claude Code related.
话虽如此，我们还有大约四分钟时间。我很乐意回答任何与 Claude Code 相关的问题。

We have it here. I can live demo some stuff if you're interested.
我们在这里有它。如果你感兴趣，我可以现场演示一些东西。

Let's do a few. Thanks.
我们来几个问题吧。谢谢。

### 问答环节

**提问者**: Real quick, this might be obvious, but multiple `Claude.md` files in a project. I presume that's possible and it just figures it out or no?
**提问者**: 很快问一下，这可能很明显，但一个项目中有多个 `Claude.md` 文件。我猜这是可能的，它会自动处理，是吗？

So, there's a few options, of course, like in the same directory. You couldn't.
当然，有几种选择，比如在同一个目录中，你不能放多个。

But you could have one here and one in a subdirectory.
但你可以在这里放一个，在子目录中再放一个。

And I think we changed this so that all the subdirectory ones aren't read in because like Anthropic, we have a **Monorepo** (单体代码库: 一个包含多个项目或模块的单一版本控制仓库)，and people would open it at the top and blow up their context with all the `Claude.md`s.
而且我认为我们对此进行了修改，以至于所有子目录中的文件都不会被读取，因为就像 Anthropic 一样，我们有一个单体代码库，人们会在顶层打开它，然后所有的 `Claude.md` 文件会把上下文撑爆。

So, we encourage Claude when it's searching around and it discovers `Claude.md` files in child directories that are relevant to be sure to read them.
所以，我们鼓励 Claude 在搜索时，如果它在相关的子目录中发现 `Claude.md` 文件，一定要去读取它们。

But by default, it just reads the `Claude.md` file in the current working directory when you fire it up.
但默认情况下，当你启动它时，它只会读取当前工作目录中的 `Claude.md` 文件。

And then also you can set one in like your home directory.
此外，你还可以在你的主目录中设置一个。

There are things you can do though. We have this new thing like in your `Claude.md` you can start referencing other files.
不过，你还可以做一些事情。我们有一个新功能，你可以在 `Claude.md` 文件中开始引用其他文件。

So you could for instance do something like this with an at sign if you have other `Claude.md` files that you just kind of know you always want to read in to do something like that.
所以，如果你有一些你知道你总是想读取的其他 `Claude.md` 文件，你可以用 `@` 符号来引用它们，做类似的事情。

**提问者**: Hi. Okay. I um have not had luck getting Claude to respect my `Claude.md`.
**提问者**: 嗨。好的。我……我没能成功让 Claude 尊重我的 `Claude.md` 文件。

Like there's one thing particular. Yes. where I'll ask it to refactor something and then it will leave inline comments explaining the like the what of it is and it's like like something that's extremely obvious and so I'll tell it like go and remove any inline comments that describe the what of what's happening and then it will remove it and then immediately do it again and like the same pass.
比如有一个特别的问题。是的。我让它重构一些东西，然后它会留下内联注释来解释这是什么，而且是那种非常明显的东西。然后我就会告诉它：“去删除所有描述正在发生什么的内联注释。”然后它会删除，但紧接着又在同一个过程中再次添加。

So do you have any strategies for dealing with that?
那么你有什么处理策略吗？

So there's kind of two things that fix that. So that was actually kind of a **Model Problem** (模型问题: 指 AI 模型本身在理解、生成或遵循指令时出现的局限性或偏差)。
有两种方法可以解决这个问题。这实际上有点像一个模型问题。

There's nothing in the prompt. We have actually a lot in the prompt for 37 that said, "Whoa, do not leave comments."
提示中没有任何问题。我们实际上在 37 模型的提示中写了很多内容，比如“哇，不要留下注释。”

And despite that, the model just loves to leave comments.
尽管如此，模型就是喜欢留下注释。

So it doesn't surprise me that your `Claude.md` didn't help much either.
所以你的 `Claude.md` 没能帮上大忙，我并不感到惊讶。

We already did a lot I did a lot of work to try to tamp it down from what happens out of the box.
我们已经做了很多工作，我个人也做了很多努力来抑制它开箱即用的这种行为。

So we mostly fixed that in **Claude 4** (Anthropic 推出的第四代 Claude 模型)。
所以我们大部分在 Claude 4 中修复了这个问题。

Now there might be some new weird behavior quirks, but the other thing we made better in Claude 4 is it's just better at following instructions.
现在可能还会有一些新的奇怪行为，但我们在 Claude 4 中改进的另一点是它更擅长遵循指令。

And we've gotten a lot of feedback from early testers that, all of a sudden, "Whoa, my `Claude.md` is being followed way more closely."
我们从早期测试者那里收到了很多反馈，他们突然说：“哇，我的 `Claude.md` 被遵循得更好了。”

And it might be a good chance to go look in your `Claude.md` and decide, "Do I still need this stuff? Maybe I can take some of it out. Maybe I need to add a few new things."
所以这可能是一个好机会，去查看你的 `Claude.md`，然后决定：“我还需要这些东西吗？也许我可以删除一些。也许我需要添加一些新内容。”

So, moving over to the new models might be a good time to take another look at what's in there and see what you need and what maybe can go.
所以，转向新模型可能是一个好时机，可以重新审视其中的内容，看看你需要什么，以及什么可以被移除。

**提问者**: Uh, for the record, I'm trying to think of something that you might not have thought of.
**提问者**: 嗯，插一句，我正在努力思考一些你可能没想到的事情。

We're doing **Multi-agent Execution** (多代理执行: 多个 AI 代理协同工作来完成一个复杂任务) and **Parallelization** (并行化: 同时执行多个任务或操作以提高效率)。
我们正在进行多代理执行和并行化。

Can you make it so that for four agents, say agents two and three use the context from agent one, maybe agent four uses the context from agent two at a certain point.
你能否让四个代理，比如说代理二和三使用代理一的上下文，而代理四在某个点使用代理二的上下文？

Yeah. Um yeah, etc. That's interesting.
是的。嗯，等等。这很有趣。

We're trying to So, kind of like I said at the beginning, we're trying to do the simple thing that works, which is just one agent that's great at coding and does everything.
我们正在尝试……就像我一开始说的，我们正在尝试做“简单有效”的事情，也就是一个擅长编码并能做所有事情的代理。

I think we want to figure that out.
我认为我们想弄清楚这一点。

Probably what's going to happen is if you wanted to do that, you would ask all your agents to probably like write to a shared **Markdown File** (一种轻量级标记语言的文件) or something like that so they can all kind of like check in and communicate.
很可能如果你想这样做，你会要求所有代理都写入一个共享的 Markdown 文件或其他类似的东西，这样它们都可以签入并进行通信。

Um, sometimes like I'll be working with `Claude.md` or Claude and I'll just say like, "Hey, I need you to write some stuff in like `ticket.md` for another developer and then I'll fire up another Claude Code and I'll be like, hey, read `ticket.md` like another developer left this note for you. Like this is what you're going to work on."
嗯，有时我会在使用 `Claude.md` 或 Claude 时说：“嘿，我需要你把一些东西写入 `ticket.md`，供另一个开发者使用。”然后我会启动另一个 Claude Code，然后说：“嘿，读取 `ticket.md`，就像另一个开发者给你留下了这个便条一样。这就是你要处理的工作。”

So, I would think about trying to write that state to a file and then just kind of like count on the model's ability to just like read files and make sense them is probably the best you can do today.
所以，我会考虑尝试将那种状态写入文件，然后就指望模型能够读取文件并理解它们的能力，这可能是你今天能做的最好的事情了。

And maybe we'll figure out clever ways to expose that in the product as something more native. Cool. All right.
也许我们会找到更巧妙的方法，在产品中以更原生的方式暴露这个功能。酷。好的。

And with that said, I have some rare Claude Code stickers that I found in my backpack.
话虽如此，我的背包里有一些稀有的 Claude Code 贴纸。

So, come find me. I'll be hanging out over there or something.
所以，来找我吧。我会在那边附近。

Um, happy to share them. Thank you. [Applause]
嗯，很高兴分享它们。谢谢大家。[掌声]