---
author: How I AI
date: '2026-01-12'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=xeZDHGjG5zM
speaker: How I AI
tags:
  - ai-coding-agent
  - software-development-lifecycle
  - git-workflow
  - prompt-engineering
  - automated-code-review
title: OpenAI 产品负责人揭秘：如何深度利用 Codex 提升开发效率
summary: OpenAI 的 Codex 产品负责人 Alexander Embiricos 详细介绍了如何将 Codex 从简单的辅助工具转变为全能的软件工程队友。访谈涵盖了从 IDE 插件基础到高级 Git 工作树并行开发、结构化规划（plans.mmd）以及自动化代码评审的实战技巧，并探讨了 AI 时代开发者角色的演变与“氛围编程”的兴起。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Alexander Embiricos
companies_orgs:
  - OpenAI
  - GitHub
  - Brex
  - Graphite
products_models:
  - Codex
  - Sora
  - GPT-5.2
  - VS Code
  - Atlas
media_books: []
status: evergreen
---
### Codex：全能工程队友

**Alexander Embiricos**: 大家非常喜欢 **Codex** 的周全和勤奋。它虽然不是市面上速度最快的工具，但在处理艰巨、复杂的任务时，它是最周全、最出色的。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: People love how thorough and diligent Codex is. It's not the fastest tool out there, but it is the most thorough and best at hard complex tasks.

</details>

**Claire Vo**: 如果你是一名软件工程师，或者刚开始接触这些 AI 工具的新手，你会建议从哪里开始使用 Codex？

<details>
<summary>Original English</summary>

**Claire Vo**: If you're a software engineer or somebody who's even just new to using some of these AI tools, where would you get started with Codex?

</details>

**Alexander Embiricos**: 我们正在将其打造成为一个全能的**软件工程队友**。Codex 擅长的一件事就是简单地回答问题。如果你在对话中让 Codex 生成这些计划，并且你想修改某些内容，那么在同一个对话中要求修改计划对模型来说是非常有帮助的，这样当它准备开始执行时，它的“脑子里”就有了所有的上下文。这是一个非常棒的入门流程，展示了这个平台的灵活性，以及它如何满足不同层次任务的需求。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: We're building it into a full software engineering teammate. One of the things that Codex is great at is simply answering questions. If you have a chat where Codex is producing these plans and you want to change something, it's actually really nice for the model if you just use the same chat to ask for changes to the plan and that way it has all this context in its head when it's ready to get going. This is a great starter flow that shows how flexible this platform is and how it can meet a bunch of people at a variety of levels of tasks.

</details>

**Claire Vo**: OpenAI 是如何将其用于开发更大的功能和产品的？

<details>
<summary>Original English</summary>

**Claire Vo**: How is OpenAI using this for bigger features and bigger products?

</details>

**Alexander Embiricos**: 我们使用 Codex 在 28 天内开发了一款 **Sora** 的 Android 应用，它上线后立即成为了应用商店的第一名。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: We used Codex to build a Sora app for Android in 28 days and it immediately became the number one app in the app store.

</details>

### 从零到一上手指南

**Claire Vo**: 欢迎回到《How I AI》。我是 **Claire Vo**，一名产品负责人，也是这里的 AI 痴迷者。我的使命是帮助你利用这些新工具更好地进行构建。今天我们请到了来自 OpenAI 的 Codex 产品负责人 **Alexander Embiricos**，他将向我们展示如何充分利用 Codex。无论你是想修改现有代码库的非技术用户，还是想在终端中获取进阶技巧的高手，我们开始吧。本期节目由 **Brex** 赞助。如果你在听这个节目，你已经知道 AI 正在以实际的方式改变我们的工作。Brex 正在将这种力量带入财务领域，它是为创始人打造的智能财务平台。

<details>
<summary>Original English</summary>

**Claire Vo**: Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today we have Alexander Embiricos, product lead for Codex from OpenAI, and he's going to show us how you can get the most out of Codex. Whether you're a non-technical user trying to make changes to an existing codebase or want the power tips and tricks for getting the most out of it in the terminal. Let's get to it. This episode is brought to you by Brex. If you're listening to this show, you already know AI is changing how we work in real practical ways. Brex is bringing that same power to finance. Brex is the intelligent finance platform built for founders.

</details>

**Claire Vo**: Alex，感谢参加《How I AI》。我对今天的节目感到非常兴奋，因为我们还没有深入探讨过 Codex，我们将听取专家关于如何充分利用这个工具的见解。我非常喜欢我们将直接深入进行一个 Codex 的“Hello World”演示。那么，对于软件工程师或 AI 新手，该从哪里开始？

<details>
<summary>Original English</summary>

**Claire Vo**: Alex, thanks for joining How I AI. I'm excited about today's episode because we actually haven't seen a deep dive into Codex yet and we are going to get the expert take on how to get the most out of this tool. And I love that we're just going to dive in and do a zero to one hello world with Codex. So if you're a software engineer or somebody who's even just new to using some of these AI tools, where would you get started with Codex?

</details>

**Alexander Embiricos**: Codex 是一个**编程智能体** (coding agent)。我们正在把它打造成一个全能的软件工程队友。但首先，让我们谈谈大多数人使用它的地方，即他们的 **IDE**。我恰好使用 **VS Code**，所以我将在 VS Code 中展示 Codex。你也可以在任何 VS Code 的分支（如 **Cursor** 等）中使用 Codex 扩展。假设我刚刚从 VS Code 扩展市场安装了 Codex。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Codex is a coding agent. We're building it into a full software engineering teammate. But to get started, let's just talk about where most people use it, which is in their IDE. I happen to use VS Code. So I'll show you Codex in VS Code. You can also use it the Codex extension in any VS code fork like cursor, etc. So let's say that I just installed Codex from the VS Code extension marketplace.

</details>

**Claire Vo**: 没错，让我们真正从零开始。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, let's do it. Let's truly zero.

</details>

**Alexander Embiricos**: 好的，真正从零到一。我不会卸载并退出登录，但我们可以假装我这么做了。接下来会发生的是，我会看到这个图标，这就是 Codex 扩展。我需要点击一些步骤并登录。如果你还不知道，Codex 包含在你的 **ChatGPT** 订阅计划中。你需要一个付费计划，如果你有 Plus、Pro、Business、Team 或 EDU 计划，就可以使用 Codex，而且额度非常慷慨。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: All right. Okay. Truly zero to one. I mean, I'm not going to uninstall and log out, but we can pretend I did that. Right. So, what would happen then is I'm going to get this glyph here, which is the Codex extension. I have to click through some steps and log in. And so, in case you didn't know, Codex is included in your ChatGPT plan. So, you need a paid plan. So, if you have a plus plan, pro, business team or EDU, you can use Codex. And the limits are really generous.

</details>

### 利用 AI 运行与修复代码

**Alexander Embiricos**: 假设我已经启动了这个东西。我听说这是一个游戏，但我甚至不知道怎么玩。Codex 擅长的一件事就是简单地回答问题。作为 Codex 的产品负责人，我实际上经常使用 Codex 提问，可能比大多数工程师用得还多，因为我不想用愚蠢的问题去打扰工程师。所以我可能会问：“我该怎么玩这个游戏？”我们今天刚发布了一个新模型，所以我很好奇它用了什么模型。**5.2**，太酷了。我将按照它的建议在这里运行 `npm run dev`，启动服务器，看看这个游戏。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Okay. So, let's say I have this thing up and truly zero to one. Let's pretend I just heard that this is a game, but I don't even know how to play this game. One of the things that Codex is great at is simply answering questions. I'm the product lead for Codex. So, I actually use Codex a lot for asking questions, probably more than most engineers do, cuz I don't want to bother engineers with silly questions. So, I might ask, how do I play this game? We just launched a new model today. So, I'm actually curious what model that used. 5.2. Cool. So, I'm just going to run npm rundev here as it's saying, boot up the server and let's take a look at the game.

</details>

**Alexander Embiricos**: 这是一个简单的指挥官类型的游戏。我可以移动角色，招募部队。看起来建造风车的功能还没实现。我还听说跳跃有问题。天哪，跳得太高了。所以，让我们开始修复这些问题。我可以问：“跳跃幅度太大了，请调低一点。”对于那些刚接触编程智能体的人来说，这非常基础。我只是用纯自然语言、纯英语写下了我想要的更改。我们可以看到 Codex 开始工作，构思计划。它需要弄清楚跳跃是如何工作的，然后减小数值，最后确保整个功能正常。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: What I have here is like a simple commander type game. I can move my character around. I can recruit troops. It looks like planting windmills is not implemented yet. And I've heard there's something wrong with the jump. Okay, that's way too high. So, let's get to work fixing some of these issues. So, what I can do here is I can just go and ask, let's just say that jump is way too big. Lower, please. And so for those of you who are new to coding agents, I mean this is pretty basic. I just wrote in plain natural language, plain English what the change that I wanted. And we can see Codex getting to work thinking up of a plan. Okay, I need to figure out how the jump works. I need to then reduce it and then I need to like make sure this whole thing works.

</details>

### 并行任务与工作树 (Worktrees)

**Claire Vo**: 我想为听众强调一下。你展示的是从现有代码库开始的过程。作为一名半技术用户，比如产品经理，你正在使用 Codex 解决两个问题：第一，我该如何在本地运行这个东西？人们常忘记这些基础用例，不是每个人都知道如何运行每个仓库。第二，你正在设置并行的微小任务。我想问的是，对于这些并行任务，你认为设置多个独立运行的任务更好，还是按顺序执行更好？

<details>
<summary>Original English</summary>

**Claire Vo**: I want to call out some stuff for folks listening. So, what you're basically showing is the process of starting with an existing codebase and you as a semi-technical user. What you're using Codex for is one, how do I even run this thing locally? And then two, you're setting up little parallel tasks. Do you feel like it's a better approach to set up parallel tasks and just have individual ones running or to do them in sort of a serial basis?

</details>

**Alexander Embiricos**: 这完全取决于情况。在处理变更时，我更有可能考虑：这个变更与另一个变更发生冲突的可能性有多大？通常，我会一次只做一个，或者使用一种叫做 **Worktree**（工作树）的技术。这是一个更高级的概念。我会使用工作树，让 Codex 在独立的工作树上完成它的工作。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: This totally depends. If I'm making changes, then I'm more likely to think about, okay, how likely is this change to conflict with another change? And typically, I'll either do one at a time or I'll use something called a work tree, which is, I guess, a bit more of an advanced concept. I'll use a work tree and I'll just send Codex off to do its work on a separate work tree.

</details>

**Claire Vo**: 让我们花点时间看看工作树，因为我觉得大多数新手并没有很好地利用这个工具。

<details>
<summary>Original English</summary>

**Claire Vo**: Let's take a minute to look at work trees because I think this is something that most folks that are new to these tools aren't really using particularly well.

</details>

**Alexander Embiricos**: 基本上，如果我们要让 Codex 进行更改，比如我想把输入语言改为法语或德语，这两者显然不能同时成立。我需要代码库的两个不同副本。我可以复制两次，或者克隆两次。但 **Git** 有一个非常好的功能叫工作树，它允许一个 Git 实例跟踪代码库的多个副本。作为一个典型的哺乳动物，我很懒，不想记住工作树的命令。所以我通常直接要求 Codex 创建工作树。我可能会说：“Codex，从 main 分支创建两个新的工作树，一个叫 French，一个叫 German。”

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Basically, if we're going to have Codex make changes, what I need then is I need two different copies of the codebase. But Git has this really nice affordance called a work tree which basically lets one Git instance track multiple copies of the codebase. So as a sort of a classic mammal, I am lazy and so I don't want to remember the commands for worktree. So typically the way that I would actually do this is I would just ask Codex to create work trees. I might say something like "Codex, create two new work trees off the main branch, one called French and one called German."

</details>

**Claire Vo**: 我注意到你在 **CLI**（命令行界面）中打开一个新的 Codex 实例时，可以在一行中输入 `--` 和你的第一个提示词。这是经典的开发者生产力技巧：我不能被要求按下回车，等待，然后再输入文字。

<details>
<summary>Original English</summary>

**Claire Vo**: I was just looking at this, as you open a new Codex instance in the CLI, you can type this dash dash and your first prompt right in one line. And this is like classic developer productivity. It's like I cannot be expected to press enter, wait, and then type my words.

</details>

**Alexander Embiricos**: 没错。所以现在我有两个文件夹了。我可以进入 French 文件夹，运行 Codex 说：“将输入字段的占位符字符串翻译成法语。”然后我可以打开一个新标签页，进入 German 文件夹，运行 Codex 说：“将占位符字符串翻译成德语。”现在 Codex 可以同时处理这两个更改。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Exactly. So now I have two folders. I might CD into French and I might run Codex: "translate the input field placeholder strings to French." So now I can open a new tab and I will now cd into the German tab instead and I'll run Codex and I'll say "translate the input placeholder string to German." And so now Codex can go work on both of these changes at the same time.

</details>

### 结构化规划：Sora 应用的秘诀

**Claire Vo**: 那么，OpenAI 是如何将其用于更大的功能和产品的？

<details>
<summary>Original English</summary>

**Claire Vo**: But how is OpenAI using this for bigger features and bigger products?

</details>

**Alexander Embiricos**: 我们最近发布了一篇博客文章，介绍我们如何使用 Codex 在 28 天内构建了 Sora 的 Android 应用。4 名工程师，28 天，应用商店第一名。这对于专业软件工程师构建大型生产级应用非常有参考价值。核心结论是：有了编程智能体，工作并不会变得更容易，但你会移动得**快得多**。我们并不是让 4 名工程师直接对 Codex 说“帮我构建 Sora 应用”然后就完事了。实际上他们尝试过，但没成功。相反，他们深入思考了应用所需的**架构**，并使用了一种叫做**规划** (planning) 的技术。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Actually we just published a blog post about how we used Codex to build the Sora app for Android in 28 days and it immediately became the number one app in the app store. So you know four engineers 28 days number one app in the app store. A really cool sort of headline to take away here is that with coding agents it doesn't get easier but you just move way faster. They didn't go in and just say hey Codex build the Sora Android app and have it work. Actually they did try that and it didn't work. But instead what they did is they thought really hard about the architecture that they wanted the app to have. And they used a technique called planning.

</details>

**Alexander Embiricos**: 比如我们想写一个 Python SDK。我不想对 Codex 进行一次性生成，虽然可能行得通，但我会说：“制定一个基于我们的 TypeScript SDK 构建 Python SDK 的计划。”OpenAI 的一些高级用户对计划的运作方式非常有主见，我们发布了一篇关于高效规划的博客。基本上，你会使用一个名为 `plans.mmd` 的文件，它就像是一个**元计划** (meta plan)，规定了一个好的计划应该是什么样的：它是自包含的，有里程碑，并且智能体应该随进度更新计划。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Like for instance, we have a TypeScript SDK and maybe we want to write a Python SDK. I don't necessarily want a oneshot Codex on that. So I might say something like this: "Make a plan to build a Python SDK based off our TypeScript SDK." Some of our power users at OpenAI have gotten fairly opinionated about how they like their plans to work. Basically, what you do is you go to this blog post and you just copy this description. It's kind of like a meta plan. It's like, hey, when you plan, this is what a good plan looks like.

</details>

**Alexander Embiricos**: 我把这些要求复制到了 `plans.mmd` 文件中。然后我会说：“使用 `plans.mmd` 制定一个计划。”Codex 非常擅长这种周全且勤奋的工作。它生成的计划大约有 120 行，列出了所有的 TODO，识别了命名规范。阅读并验证这些内容非常重要。一旦我满意了，我就可以说：“执行计划。”这可能是一个 30 分钟到 1 小时的任务，但我对结果会非常有信心。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: I have copied that into a markdown file plans.mmd. And so what I might actually do instead here is I might say "using plans.mmd make a plan." This is actually something that Codex is really good at. Like people love how thorough and like diligent Codex is. Here is the plan that it came up with. And so you can see it's about 120 lines. It's really important for me to read these and verify them. And so now what I can do is I could say "implement the plan." This would probably like a 30 minute to 1 hour task but I would be pretty confident in the results.

</details>

### 氛围编程 (Vibe Coding) 与原型设计

**Claire Vo**: 我非常喜欢你提到模型有“脑子” (head)。我们看到这种“先制定计划”的模式非常普遍。你并不想绕过关于应用架构的思考，虽然你可以把 AI 当作头脑风暴的伙伴。一旦你有了合适大小的工作块，就可以使用这种规划策略让 Codex 执行。

<details>
<summary>Original English</summary>

**Claire Vo**: First of all, I love that you said that it has a head. We see this a lot. This sort of like build a plan. You don't kind of get to bypass the architectural thinking of like how should this app be set up. But then once you have the kind of right-sized chunks of work, then you can use this planning strategy to then get what you're going to do all laid out and then have Codex execute it.

</details>

**Alexander Embiricos**: 我很喜欢 **氛围编程** (vibe coding) 和氛围工程 (vibe engineering) 这些术语。当你构建像 Sora 这样需要扩展的生产级应用时，拥有架构师或资深工程师来思考应用的形态至关重要。瓶颈已经变成了思考写什么代码，以及确保代码质量并进行评审。但同时，Codex 在你只想学习或不需要可扩展生产架构的地方也非常强大。例如，我们大量使用 Codex 进行**原型设计**。Codex 的设计师们实际上有一个完全由“氛围编程”生成的完整原型，他们可以直接用代码进行设计，玩转各种想法。如果觉得不错，有时设计师甚至可以自己或在工程师的帮助下将其落地。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: I kind of like the terms vibe coding and vibe engineering to be honest. When you're going to build a production app like Sora app that you know you have to scale, it's really important that you have that like architect think about the shape of the app. The bottlenecks are kind of like thinking about what code to write and then making sure that code is good. I think at the same time though Codex can be really powerful for those places where you just want to learn and you don't actually need like a scalable production ready app. So for instance we use Codex a lot for prototyping. The designers on Codex actually have a fully mostly vibecoded full prototype that they can just like design into with code.

</details>

### 自动化代码评审

**Claire Vo**: 这一集由 **Graphite** 赞助，这是一个 AI 驱动的代码评审平台。随着开发者采用 AI 工具，代码生成正在加速，但代码评审还没跟上。Graphite 通过 AI 驱动的评审和自动化合并队列解决了这个问题。

<details>
<summary>Original English</summary>

**Claire Vo**: This episode is brought to you by Graphite, the AI powered code review platform. As developers adopt AI tools, code generation is accelerating. But code review hasn't caught up. Graphite fixes this with AI powered reviews and an automated merge queue.

</details>

**Claire Vo**: 我想问一个关于代码评审的问题。你如何决定什么需要计划，什么不需要？

<details>
<summary>Original English</summary>

**Claire Vo**: So I have to ask one question and then I do want to go to code review which is how do you decide between what needs a plan and what doesn't?

</details>

**Alexander Embiricos**: 任务越难，你就越想要一份规约。但也有“懒惰”的答案：取决于我是否有时间等待计划。Codex 还有一个功能叫 **Best of N**，它会把同一个任务执行四次，让你寻找最佳方案。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Obviously the harder the task the more likely you want to have a spec. But the lazy answer to your question is also it depends if I have time to wait for a plan or not. Codex has a feature called best of N where it'll just like do the same task four times and find out what works best.

</details>

**Alexander Embiricos**: 你可以要求 Codex 进行代码评审。你可以输入 `/review`，让它开始评审代码。人们非常喜欢这个功能。当你给模型设定一种心态，比如“你是一名评审员”，并给它一个不同于编写代码时的对话上下文，你会得到比人类工程师更好的批评，部分原因是模型有大量时间阅读所有代码，甚至执行代码来验证更改。在 OpenAI，Codex 无处不在。几乎公司里的每个仓库都启用了 Codex 代码评审，它会评审几乎所有的 **PR**（拉取请求）。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: You can ask it for code review. You could type slash review and basically ask it to start reviewing his code. And this is something that people really love. When you put the model in a certain mindset like hey you are a reviewer and you give it a different conversation context than the model that wrote the code you'll just get like even better critiques than you might get from a human engineer. Codex code review itself is enabled on pretty much every single repo at the company and reviews like pretty much all PRs.

</details>

### 闪电问答：AI 的未来与礼仪

**Claire Vo**: 让我们进入闪电问答。你展示了 **5.2** 模型在 **SWE-bench Pro** 上的表现。为什么像 Codex 这样的模型界面（Harness）如此重要？

<details>
<summary>Original English</summary>

**Claire Vo**: Let's get to our lightning round questions. You showed 5.2 model on SWE-bench Pro. Why does the interface to the model like Codex matter so much?

</details>

**Alexander Embiricos**: 两个原因：模型工作的质量和用户体验。这些模型一直在变，我们几乎每两周就发布一个新模型。你需要知道如何发挥模型的最大效用。例如，我们发现模型有时会决定写一个 Python 脚本来批量修改代码，这是一种新兴行为。通过同时构建界面和模型，我们可以对模型的使用方式更有主见。此外，Codex 的 CLI 是开源的，任何人都可以去观察它是如何工作的。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Two places. One is just the quality of model work and then the other is in the user experience. These models are changing all the time. I think we're shipping a new model like every two weeks recently. You need to know how to get the most out of the model. For example, we see these really interesting emerging behaviors where sometimes the model will decide to write a Python script to make many edits to code. By building both the harness and the model together we can be much more opinionated about what to do with the model.

</details>

**Claire Vo**: 我还看到了 **Atlas**。告诉我你最喜欢的 Atlas 用例。

<details>
<summary>Original English</summary>

**Claire Vo**: I spied with my little eye Atlas. Tell me your favorite Atlas use cases.

</details>

**Alexander Embiricos**: 我开始在 **ChatGPT** 中询问一切。我会告诉它我做了什么决定，因为它会记住。这样我得到的下一个答案会更好。我另一个“暴论”是：我认为对 AI 保持**礼仪**很重要。这不是公司的官方立场，但我认为保持礼貌对我们自己很重要。如果你开始对 AI 粗鲁，这种习惯可能会蔓延到你对生活中其他人的态度上。

<details>
<summary>Original English</summary>

**Alexander Embiricos**: I have started just asking chat for everything instead. I tell it what decision I made because then it remembers. And so then the next answer I get is even better. My other sort of hot take reason to do this is I think it's important to be polite to AI. I just think it's important to be polite to everyone and I think that if you start not being polite to chat I think it can wear off on you and you just start not being polite to other people in your life.

</details>

**Claire Vo**: 完全同意。这不仅是为了 AI，更是为了保护我们自己的人性。最后，如果 AI 没有按你的要求做，你的提示词技巧是什么？

<details>
<summary>Original English</summary>

**Claire Vo**: Could not agree more. It's to protect my own humanity. Lastly, what is your prompting technique to get it back on track?

</details>

**Alexander Embiricos**: 上下文就是一切。我通常不会在不提供上下文的情况下向智能体提出要求。我会解释为什么要这么改，比如“为了不让用户感到困惑”。我认为 **PM**（产品经理）是最好的提示词编写者，因为我们习惯了自己不是专家，习惯了建议但不确定是否正确。技巧一：提供大量上下文，并准确描述请求的模糊程度。技巧二：如果还是不行，就开启一个新对话。Codex 会将对话日志存储在本地的 `sessions` 文件夹中，你可以告诉它：“去读一下之前的会话，了解发生了什么。”

<details>
<summary>Original English</summary>

**Alexander Embiricos**: Context is everything. I don't usually ask for things from the agent without giving context. I'll say like I want you to change this UI because we don't want people to be confused. I think PMs are the best prompters because we're used to not being the expert. Tip number one is give a lot of context and actually get really good at describing the level of ambiguity of your request. And then the second thing is like if that doesn't work, then I just start a new chat. Codex stores its conversations logs in a subfolder called sessions. You could just go say like, "Go read your previous session to understand what's going on."

</details>

**Claire Vo**: Alex，非常感谢。我们可以在哪里找到你？

<details>
<summary>Original English</summary>

**Claire Vo**: Alex, thank you so much. Where can we find you?

</details>

**Alexander Embiricos**: 我正在招聘 PM，如果你感兴趣，请在招聘网站申请或在社交媒体上联系我。你可以在 Twitter 或 Reddit 上找到我。Codex 非常棒，去试试吧！

<details>
<summary>Original English</summary>

**Alexander Embiricos**: I am hiring PMs. So if you're interested, please apply on the job site and also hit me up on socials. You can find me on Twitter or the subreddit. Codex is awesome. So check it out!

</details>