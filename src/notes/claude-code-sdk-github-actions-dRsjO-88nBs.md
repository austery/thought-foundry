---
title: Claude Code SDK 与 GitHub Actions：构建无头自动化
summary: 深入探讨 Claude Code SDK 及其 GitHub Action，演示如何利用它们实现无头自动化，进行代码审查、功能开发及 bug 修复，并提供详细的安装与使用指南。
area: null
category: null
project: []
tags:
- automation
- claude-code
- code-development
- github-actions
- sdk
people: []
companies_orgs: []
products_models: []
media_books: []
date: '2025-07-31'
author: Anthropic
speaker: Anthropic
draft: true
guest: ''
insight: ''
layout: post.njk
series: ''
source: https://www.youtube.com/watch?v=dRsjO-88nBs
status: evergreen
---
### 介绍与议程概述

Good afternoon, everybody. My name is Sedara. I am an engineer on the Claude Code team. Today, we're going to be talking a little bit about the **Claude Code SDK** (Software Development Kit: 软件开发工具包) and the **Claude GitHub Action** (GitHub 操作: 在 GitHub 仓库中自动化任务的工具) that was just announced today.

大家下午好。我叫 Sedara。我是 Claude Code 团队的一名工程师。今天，我们将讨论一下 Claude Code SDK 和今天刚刚发布的 Claude GitHub Action。

So, a little bit about the agenda. We'll do a quick start for the SDK, just to give some examples of how to get started and how to use the SDK.

接下来简单介绍一下议程。我们将对 SDK 进行一个快速入门，提供一些关于如何开始使用和利用 SDK 的示例。

We will then dive into a live demo of the GitHub Action, which should be fun. The GitHub Action was built on top of the SDK, so it's meant to be a source of inspiration for the kind of things that you can do using the Claude Code SDK. We'll then dive into some more advanced features of the SDK, and then we'll end with having all of you set up the Claude GitHub Action on your repo so you guys can start using it and build on top of it.

随后，我们将深入进行 GitHub Action 的实时演示，这应该会很有趣。这个 GitHub Action 是基于 SDK 构建的，因此它旨在为大家提供灵感，展示如何利用 Claude Code SDK 完成各种任务。之后，我们将深入探讨 SDK 的一些更高级功能，最后，我们将指导大家在自己的代码仓库中设置 Claude GitHub Action，以便大家可以开始使用并在此基础上进行开发。

Actually, before we get started, can I get a show of hands here? How many people have used Claude Code? Okay, it's a lot of people. And, of the people who have used Claude Code, how many have used `cla` or know what that is? Okay. Far fewer people. It's good to know.

实际上，在我们开始之前，我能看到有多少人使用过 Claude Code 吗？好的，很多人。那么，在用过 Claude Code 的人中，有多少人使用过 `cla` 或知道那是什么？好的，少了很多。很高兴了解这一点。

If you guys don't have Claude Code installed on your laptop, that's how you get it. I'd encourage you to install it on your laptops and follow along. There will be parts of this talk that will be beneficial to follow along, and then if you don't want to, you don't have to. It's all good.

如果大家笔记本电脑上没有安装 Claude Code，这就是安装方法。我鼓励大家在自己的笔记本电脑上安装并跟着操作。本次演讲的某些部分，跟着操作会很有益，当然如果你不想，也没关系。

### Claude Code SDK 的功能与优势

So, what is the Claude Code SDK? It is a way to programmatically access the power of the Claude Code agent in **headless mode** (无头模式: 指在没有图形用户界面（GUI）的情况下运行程序或系统，通常通过命令行或 API 进行交互). This is powerful because it's a new kind of primitive and a new kind of building block that allows you to build applications that just weren't possible before.

那么，什么是 Claude Code SDK 呢？它是一种在无头模式下通过编程方式访问 Claude Code 代理功能的方法。这非常强大，因为它是一种新型的基础组件和构建模块，能够让您构建以前不可能实现的应用。

Things that you can do with the SDK are like super simple things to get started. For example, you can use it like a Unix tool. The Unix-ish tool philosophy is what really makes Claude Code powerful because you can plug it in anywhere where you can run bash or a terminal. So, you can use it in your Unix pipelines. You can pipe stuff into it, pipe stuff out of it, have complex chains out of it, and stuff like that.

您可以使用 SDK 完成一些非常简单的入门级任务。例如，您可以像使用 Unix 工具一样使用它。这种类 Unix 工具的理念正是 Claude Code 强大之处，因为您可以在任何可以运行 Bash 或终端的地方集成它。因此，您可以在 Unix 管道中使用它。您可以将内容导入其中，将内容导出，构建复杂的链式操作等等。

You can then build **CI automation** (Continuous Integration: 持续集成，一种软件开发实践，开发人员频繁地将代码更改合并到共享主干中) on it. So, you can have Claude review your code. Some people actually get Claude to write new linters for them too. So, Claude can lint your code. If there are specific things that you can't define programmatically, you can get Claude Code to do it.

然后，您可以在此基础上构建持续集成自动化。您可以让 Claude 审查您的代码。有些人甚至让 Claude 为他们编写新的 **linter** (代码检查工具: 用于分析代码以发现编程错误、风格问题和可疑构造的工具)。所以，Claude 可以检查您的代码。如果有些特定的事情您无法通过编程方式定义，您可以让 Claude Code 来完成。

And then we get into fancier applications as well. So, if you want to build your own chatbot that's powered by Claude Code, that's certainly possible. If you want Claude Code to write you code in a new environment or a separate remote environment, you can build those kinds of applications as well.

然后，我们还可以开发更高级的应用。例如，如果您想构建一个由 Claude Code 驱动的聊天机器人，这当然是可行的。如果您希望 Claude Code 在新环境或独立的远程环境中为您编写代码，您也可以构建这类应用。

And finally, these are a few features. We'll talk more about the features in the coming slides. And we have Python and Typescript SDKs or like bindings for the Claude Code SDK coming up soon, so that should make it much easier for you guys to consume it and build on top of it.

最后，这些只是其中一些功能。我们将在接下来的幻灯片中详细讨论更多功能。我们很快会推出 Claude Code SDK 的 Python 和 Typescript 版本或绑定，这将使大家更容易使用和在其基础上进行开发。

### Claude Code SDK 的基本示例

So, let's jump into some basic examples. Calling Claude the Claude Code SDK is as simple as just doing `claude-b` and following it up with the string that you want to ask Claude. So, in this example, I'm telling Claude to write me a Fibonacci sequence generator.

那么，让我们来看一些基本示例。调用 Claude Code SDK 就像执行 `claude-b` 命令并紧随其后输入您想问 Claude 的字符串一样简单。因此，在这个例子中，我让 Claude 为我编写一个斐波那契数列生成器。

And if you notice, I also give it a `d-allow tools write` which is a way for me to proactively give it access to the write tool so it can write files to my file system. And then this is something I like doing too: piping logs to Claude. So, you can do `cat app.log` and then pipe that into `claude-b` looking at logs manually. So, this is something I do quite often. And as you can see, it does a pretty decent job of summarizing what the log failures were.

如果您注意到，我还给它添加了 `d-allow tools write` 参数，这是一种主动授予它写入工具权限的方式，以便它可以在我的文件系统中写入文件。另外，我也喜欢这样做：将日志通过管道传输给 Claude。所以，您可以执行 `cat app.log`，然后将其通过管道输入到 `claude-b` 中，以便手动查看日志。这是我经常做的事情。正如您所看到的，它在总结日志故障方面做得相当不错。

Similarly, if you're anything like me, I just can't get myself to understand the output of `ifconfig`. I still don't know what it means, but Claude does, and Claude does it for me over here.

同样，如果您像我一样，我就是无法理解 `ifconfig` 的输出。我仍然不知道它是什么意思，但 Claude 知道，并且 Claude 在这里为我解释了。

And finally, this is kind of what makes the SDK tick, right? It is this is a we have an output format. If you do `d-output format JSON`, Claude Code will actually output things or its response in **JSON** (JavaScript Object Notation: 一种轻量级的数据交换格式) as opposed to plain text. And, you can parse this JSON and build on top of it. So, we'll talk more about details for how this is what else you can do with this JSON, but I wanted to throw that example out there.

最后，这正是 SDK 运作的关键，对吧？我们有一个输出格式。如果您使用 `d-output format JSON`，Claude Code 实际上会以 JSON 格式而非纯文本输出其响应。而且，您可以解析这个 JSON 并在其基础上进行构建。所以，我们稍后会详细讨论如何利用这个 JSON 做更多事情，但我还是想先提出这个例子。

### Claude GitHub Action 实时演示

Let's get into a significantly more complex example now, which is the Claude GitHub Action. So, Claude GitHub Action was built on top of the SDK, and it can be used to review code. It can be used to create new features. It can be used to triage bugs and so on.

现在，让我们来看一个更为复杂的例子，那就是 Claude GitHub Action。Claude GitHub Action 是在 SDK 的基础上构建的，它可以用于代码审查、创建新功能、分类处理 Bug 等等。

And this is also open source. So, I'll include a link at the very end of the talk. So, you guys can go have a look at the source for inspiration for how to use it. But for now, let's jump into a live demo on my laptop. So, I have cloned a popular small open-source quiz app for the purposes of this demo. And we are going to fire it up just to see how that works, and then we will tell Claude to build something on top of it for us.

它也是开源的。所以，我会在演讲的最后附上链接。这样大家可以查看源代码，从中获取使用灵感。但现在，让我们直接进入我笔记本电脑上的实时演示。为了这次演示，我克隆了一个流行的小型开源问答应用。我们将启动它，看看它是如何工作的，然后我们会让 Claude 在此基础上为我们构建一些东西。

So, I just did an `npm start`, which opened up my shiny new quiz app. It's actually pretty nifty. It allows you to choose a bunch of categories, how many questions you want, difficulty, definitely easy for me. I suck at trivia. Type of questions. And then there's like a countdown timer. So, we're not going to actually answer these unless someone feels very strongly, please shout out the answer. But I'm just going to fly through these just to show you guys how this little quiz app works.

我刚刚执行了 `npm start`，它打开了我的全新问答应用。它实际上非常巧妙。您可以选择很多类别、题目数量、难度——对我来说肯定是简单模式，因为我很不擅长问答。还有题目类型。然后会有一个倒计时器。所以，我们不会真正回答这些问题，除非有人强烈要求，请大声说出答案。但我只是快速浏览一遍，向大家展示这个小问答应用是如何运作的。

There we go. Not surprising. We got a great F, but that's okay. So, this was the little demo quiz app that's open-sourced. And if we look at the issues for this repo, we see a couple very interesting ones. There's one issue that says, we should add power-ups for 50/50 elimination of options and skip questions for free.

瞧。不出所料，我们得了个大大的 F，但这没关系。所以，这就是那个开源的演示问答应用。如果我们查看这个代码仓库的问题列表，我们会看到几个非常有趣的问题。有一个问题说，我们应该添加道具，例如 50/50 排除选项和免费跳过问题。

Because I suck at trivia, I really like that feature and I want to build it. And before this presentation, I already installed the Claude GitHub Action on my repo. So, it's already available. But we'll go over how to set that up later too. Okay. So, here's the issue. It has pretty sparse details on how to implement this. It's just literally a feature a wish list, really, like a wish feature. It's saying add a power-up option in the config, 50/50 elimination for the skip question. It should avoid user points even though the user the question was skipped. And user should be able to configure this from the config page.

因为我问答能力很差，我非常喜欢这个功能，并想实现它。在这次演示之前，我已经在我的代码仓库中安装了 Claude GitHub Action。所以它已经可用了。但我们稍后也会介绍如何设置它。好的。这就是问题。它关于如何实现这个功能的细节非常稀少。它实际上就是一个功能愿望清单，一个希望实现的功能。它说要在配置中添加一个道具选项，用于 50/50 排除和跳过问题。即使跳过了问题，用户也不应该被扣分。用户应该能够从配置页面进行设置。

So, there's a lot of creative room for Claude to do whatever it wants to do in this case, and I'm excited to see what it actually ends up building. So, what I'm going to do is say `@cloud please implement this feature` and comment on it. So, it usually does take four or five seconds for it to respond. And while it's doing that, for good measure, we'll just also take this other GitHub issue. This is talking about a per-question timer. So, we saw there was like a global timer on the quiz app, but there was no per-question timer. So, that's what this one's talking about. So, let's go and say `@cloud please build this`. And now we have two things building.

因此，在这种情况下，Claude 有很大的创作空间来做它想做的事情，我很期待看到它最终会构建出什么。所以，我要做的就是说 `@cloud please implement this feature` 并评论它。它通常需要四五秒才能响应。在它处理的同时，为了以防万一，我们也将处理另一个 GitHub 问题。这个是关于每个问题计时器的。我们看到问答应用上有一个全局计时器，但没有每个问题的计时器。所以，这就是这个问题的讨论内容。那么，我们去说 `@cloud please build this`。现在我们有两项任务正在构建中。

So, now when I get back to this tab, you see that Claude responded with a comment on this GitHub issue, saying that it's working. It also has a link to the job run, which is the GitHub Action run. If I click into it and if I actually click on the logs, I'll see that it's doing a bunch of stuff. You can see all this JSON being output. This is from the SDK.

所以，现在当我回到这个标签页时，您会看到 Claude 在这个 GitHub 问题上回复了一条评论，说它正在工作。它还有一个指向作业运行的链接，也就是 GitHub Action 的运行。如果我点击进去，并实际点击日志，我就会看到它正在做很多事情。您可以看到所有这些 JSON 输出。这来自于 SDK。

So, we won't look at the JSON too much because it's not much fun to parse it manually. But over here, we can see that it also created a to-do list for us. So, Claude is now going to actually go through this to-do list and try to implement the power-up feature. And similarly for the question timer, it's going to do something similar. One more thing that we should do here is there are already a couple pull requests that have been opened for this repo. And let's get Claude to review it or change some of these pull requests just for fun.

所以，我们不会过多地查看 JSON，因为手动解析它并不有趣。但在这里，我们可以看到它还为我们创建了一个待办事项列表。因此，Claude 现在将实际通过这个待办事项列表，并尝试实现道具功能。同样，对于问题计时器，它也将做类似的事情。我们这里还应该做一件事，就是这个仓库已经有几个拉取请求被打开了。我们让 Claude 审查一下或者修改其中一些拉取请求，只是为了好玩。

There's this one which is change background color to blue. All right. I actually think I like green better. So, I'm just going to be like, "All right, Claude, please change this to green." This one is fairly easy, and I'm pretty sure Claude's going to do this, but I just wanted to show you guys that it can also add commits for a pull request that's already open. Okay, so this is going to take a few minutes to run. And while this runs, let's go back to the presentation, and then we'll check up on how this is doing towards the end.

有一个是把背景颜色改为蓝色。好的。我实际上觉得绿色更好。所以，我打算说：“好的，Claude，请把这个改成绿色。”这个比较容易，我相当确定 Claude 会做到，但我只是想向大家展示它也可以为已经打开的拉取请求添加提交。好的，所以这需要几分钟才能运行。在这运行期间，让我们回到演示文稿，然后我们会在最后检查它的进展。

### SDK 进阶功能：权限、输出与交互

Okay, cool. So, let's do a little bit of a deep dive on the features of the SDK. When you call `claude-b`, it has no edit or destructive permission access, which is great for safety, but it's not great for actually getting things done. Which is why there is a `d-allowed tools` option which allows you to preconfigure Claude with any permissions that you think it might need in the future for your given task.

好的，很棒。那么，让我们深入探讨一下 SDK 的功能。当您调用 `claude-b` 时，它默认没有编辑或破坏性权限访问，这对于安全性来说很好，但对于实际完成工作来说就不太方便了。这就是为什么有一个 `d-allowed tools` 选项，它允许您预先配置 Claude，赋予它您认为在未来完成给定任务可能需要的任何权限。

So, in this case, the first example, you see that I've given it permissions `bash` permissions to `npm run build`, `npm test`, and the `write` tool, which is a good set of permissions because this allows Claude to self-verify what it's writing and build your project and test and then continue writing. Similarly for **MCP** (Managed Cloud Platform: 托管云平台), if you have MCP servers configured, you can allowlist those MCP tools as well. So, it's a very similar process.

所以，在这个例子中，您可以看到我赋予了它 `bash` 权限，可以执行 `npm run build`、`npm test` 以及 `write` 工具，这是一组很好的权限，因为这允许 Claude 自我验证它正在编写的内容，构建您的项目并进行测试，然后继续编写。同样，对于 MCP，如果您配置了 MCP 服务器，您也可以将这些 MCP 工具列入白名单。所以，这是一个非常相似的过程。

Then structured output, we already saw an example of structured output both from the GitHub Actions logs and also the little screenshot I showed you earlier. But there are two modes here: there's `stream JSON` and `JSON`. It does exactly what it sounds like. If you select `stream JSON`, it'll actually stream messages to you as and when they're available versus `JSON` will just give you one giant blob of JSON at the end. And parsing this JSON and building on top of it is really how you can make use of the Claude Code SDK and create features for your users.

然后是结构化输出，我们之前已经从 GitHub Actions 日志以及我向您展示的小截图中看到了结构化输出的示例。但这里有两种模式：`stream JSON` 和 `JSON`。它们的功能正如其名称所示。如果您选择 `stream JSON`，它实际上会在消息可用时立即将它们流式传输给您，而 `JSON` 则会在最后给您一个巨大的 JSON 块。解析这个 JSON 并在其基础上进行构建，才是您真正利用 Claude Code SDK 并为用户创建功能的方式。

And then you can also configure the system prompt. So, you can do `d-system prompt "talk like a pirate"` and you can get Claude Code to talk like a pirate for the rest of your day, which is actually quite fun. If you haven't done it, I'd encourage you to try it out.

然后您还可以配置系统提示。所以，您可以输入 `d-system prompt "talk like a pirate"`，然后让 Claude Code 整天都像海盗一样说话，这实际上非常有趣。如果您还没有尝试过，我鼓励您去试试看。

We also have a few user interaction features built into the SDK. And what that means is like the first one is resuming session state. So, when you call `claude-p` in structured output or JSON mode, it's going to return a **session ID** (会话ID: 用于唯一标识用户会话的字符串). And this session ID is useful because you can then reference the session ID to go back to the same context state that Claude had when it finished that process. So, by preserving these session IDs and keeping track of them, you can enable or like build user interactive features where the user says something, you pass that on to Claude, Claude returns a response, and now you want the user to give feedback on that response, and that's how this kind of enables you to build those types of interactions in your apps.

我们还在 SDK 中内置了一些用户交互功能。这意味着第一个功能是恢复会话状态。因此，当您在结构化输出或 JSON 模式下调用 `claude-p` 时，它会返回一个会话 ID。这个会话 ID 很有用，因为您可以引用它来回到 Claude 完成该过程时的相同上下文状态。所以，通过保存这些会话 ID 并跟踪它们，您可以启用或构建用户交互功能，例如用户说些什么，您将其传递给 Claude，Claude 返回一个响应，现在您希望用户对该响应提供反馈，这就是这种方式能够让您在应用程序中构建这些类型的交互。

And then the last one, and this one's actually pretty interesting, and it's fairly recent, too. It's `d-permission prompt tool`. We talked a little bit about how to give Claude permissions using the `allowed tools` flag. And that requires you to preconfigure them in advance. But what if you didn't want to do them because you don't know what tools Claude would want to use in the future? In that case, you can use the `d-permission prompt tool` and offload the permission management to an MCP server. So, you can ask users in real time whether they want to accept a tool or reject a tool, and you can have an MCP server kind of handle that for you as opposed to trying to predict which tools are okay and which tools are not. So, this is fairly recent, and we'd love to get feedback on this if you guys end up trying it out.

然后是最后一个功能，这个实际上非常有趣，而且也是最近才推出的。它是 `d-permission prompt tool`。我们之前讨论了如何使用 `allowed tools` 标志赋予 Claude 权限。这需要您提前预配置它们。但是，如果您不想这样做，因为您不知道 Claude 将来会使用哪些工具呢？在这种情况下，您可以使用 `d-permission prompt tool` 并将权限管理卸载到 MCP 服务器。这样，您可以实时询问用户是否要接受或拒绝某个工具，并且可以由 MCP 服务器为您处理，而不是试图预测哪些工具是安全的，哪些不是。所以，这是一个相当新的功能，如果您尝试使用它，我们很乐意获得您的反馈。

### 演示成果回顾与验证

Okay, let's go back to our demo and see what Claude's done. All right. So, this is the power-up issue. We can see that Claude has actually gone through its to-do list.

好的，让我们回到演示，看看 Claude 都做了些什么。好的。这就是道具问题。我们可以看到 Claude 已经完成了它的待办事项列表。

Okay. I'm going to open a PR. There's a link over here to create a PR. And I'm going to click that and see what that gives us. I'll actually create the pull request too so it's easier for us to review. I don't really know how this codebase works, but we'll still eyeball it just to see if you know it's doing the right thing. So, you see some set power-up stuff seems all right.

好的。我将打开一个 PR。这里有一个创建 PR 的链接。我将点击它，看看会给我们带来什么。我也会实际创建一个拉取请求，这样我们更容易审查。我不太了解这个代码库是如何工作的，但我们仍然会大致看一下，看看它是否做了正确的事情。所以，你看到一些设置道具的东西看起来还不错。

Okay. There's some configuration in the main component. All right. I think what we should do and what would make this fun is we should just get this branch locally and see what Claude did because there's no way that we can actually figure out what it did in the short amount of time that we have. So, I'm going to go back to my terminal, do a good fetch, check out the branch that Claude just created, and restart our process.

好的。主组件中确实有一些配置。好的。我想我们应该做的是，为了更有趣，我们应该在本地获取这个分支，看看 Claude 做了什么，因为在这么短的时间内我们无法真正弄清楚它做了什么。所以，我将回到我的终端，执行一次 `fetch`，切换到 Claude 刚刚创建的分支，然后重新启动我们的进程。

Okay. Awesome. It looks like we have a power-up section now at the bottom of our config page. And it's a little checkbox. I like that touch. We'll keep both of them on. And, no, let's select general knowledge. Let's start playing this game. Let's see what it did. Oh, sweet. So, you see it has like this little 50/50 button on the bottom left and a skip questions button on the right. I'm just going to use 50/50 because I have no idea what the answer to this is. Does anybody know what that is? D. Okay, there we go. That makes sense. Cadbury. Yeah.

好的。太棒了。看起来我们现在在配置页面的底部有了一个道具部分。它是一个小复选框。我喜欢这个细节。我们把它们都打开。不，我们选择常识。让我们开始玩这个游戏。看看它做了什么。哦，太棒了。所以，您看到左下角有一个小小的 50/50 按钮，右边有一个跳过问题的按钮。我将直接使用 50/50，因为我完全不知道这个问题的答案是什么。有人知道那是什么吗？D。好的，对了。这说得通。吉百利。是的。

All right. I'm going to skip this one and then let's just breeze through the other ones for sake of time. All right. All right. Still got an F, but we got one correct answer, which is better than zero correct answers. And yeah, I guess, yeah, it tricked us. That was a good one. But yeah, I mean, it seems like it worked. I think there's definitely more we could do here. We could show how the power, like which questions we use the power upon over here. And there's definitely more we can do. But at the most basic level, I think Claude was able to do the task that we assigned it to do, which is exciting.

好的。我将跳过这个问题，然后为了节省时间，我们快速浏览其他问题。好的。好的。仍然得了 F，但我们答对了一个问题，这比答对零个问题要好。是的，我想，是的，它骗了我们。那是个好问题。但是的，我的意思是，它看起来奏效了。我认为这里肯定还有更多我们可以做的事情。我们可以展示道具是如何作用的，比如我们在哪些问题上使用了道具。当然还有很多可以做。但在最基本的层面上，我认为 Claude 能够完成我们分配给它的任务，这令人兴奋。

Like this is kind of the power of the GitHub Action because you didn't really have to run this on your own infra. You can just literally comment on a thread saying, "Please build this for me." It uses your GitHub Action runners and just does the thing.

这就像是 GitHub Action 的强大之处，因为您实际上不必在自己的基础设施上运行它。您只需在讨论串上评论说：“请为我构建这个。”它就会使用您的 GitHub Action 运行器，然后完成任务。

We let's also look at the PR that we told it to change from blue to green. It's all hex code. So, let's just see what it did in the commits. So, you see there are two commits and Claude has added this last one to switch it from blue to green. And it did it for all three of the places where the color was defined, which is awesome. Okay. I'm not going to go over the last one, the question timer, because we might run out of time. But this hopefully gives you insight into what the Claude GitHub Action can do for you.

我们再看看我们让它把蓝色改为绿色的 PR。它都是十六进制代码。所以，我们来看看它在提交中做了什么。您可以看到有两个提交，Claude 添加了最后一个提交，将其从蓝色切换为绿色。而且它在所有三个定义颜色的地方都进行了更改，这太棒了。好的。我不会再讲最后一个问题计时器了，因为我们时间可能不够。但希望这能让您了解 Claude GitHub Action 能为您做什么。

### Claude GitHub Action 功能总结

Let's go back to the presentation now. Okay. So, just as a recap, the Claude GitHub Action, as it's implemented today, is able to read your code. It's able to create PRs for you from GitHub issues like we just saw. It's able to create commits for you. So, if you already have a PR and you commit or you comment on it, it can add a commit to an existing branch or an existing PR. It can answer questions. It doesn't have to do something. It can just literally answer questions for you. If you don't understand something, you can be like, "Hey Claude, how does this work?" And you can get it to answer questions, and it can, of course, review your code.

现在让我们回到演示文稿。好的。总结一下，Claude GitHub Action，就目前实现而言，能够读取您的代码。它能够像我们刚才看到的，根据 GitHub 问题为您创建 PR。它能够为您创建提交。所以，如果您已经有一个 PR，并且您提交或评论它，它可以在现有分支或现有 PR 上添加提交。它能够回答问题。它不一定非要做些什么。它真的可以为您回答问题。如果您不理解什么，您可以说：“嘿 Claude，这怎么运作？”它就能为您解答问题，当然它也可以审查您的代码。

The best part of all of this is that you don't have to take care of the infra. It runs on existing GitHub runners which almost everyone has configured if you're using GitHub Actions. So, that's kind of the really nice thing about this is you don't have to worry about any of the infra.

所有这些中最棒的部分是您不必担心基础设施。它运行在现有的 GitHub runners 上，如果您使用 GitHub Actions，几乎每个人都配置了这些 runners。所以，这正是它非常好的地方，您不必担心任何基础设施问题。

### Actions 的构建方式与安装

Okay. So, how were actions built, right? I think I may have mentioned that these actions were built on top of the SDK. We so the SDK does form the foundation of how these actions were built, and then we have two other actions on top. We have the **Claude Code Base Action** (Claude Code 基础操作: Claude Code GitHub Action 的核心组件), this is a thin layer that just it just implements the piece which talks to Claude Code and returns the response from Claude Code.

好的。那么，这些 Actions 是如何构建的呢？我想我可能提到过这些 Actions 是在 SDK 的基础上构建的。所以，SDK 确实构成了这些 Actions 构建的基础，然后我们在此之上还有另外两个 Actions。我们有 Claude Code Base Action，这是一个薄层，它只实现了与 Claude Code 对话并返回 Claude Code 响应的部分。

And then we have another action on top of this which is called the PR Action. And this action is responsible for all the fancy things that you saw on the PR. So, it's responsible for making comments, for the to-do list, for rendering it the right way, for adding the PR links and things like that. So, it's kind of three layers in which it's built. Both the Base Action and the PR Action are open sourced. So, I would encourage you guys to go have a look, you know, take inspiration from how that works and maybe that inspires more ideas.

然后我们在这个之上还有另一个 Action，叫做 PR Action。这个 Action 负责您在 PR 上看到的所有炫酷功能。所以，它负责发表评论、生成待办事项列表、以正确的方式渲染它、添加 PR 链接等等。所以，它是通过三个层面构建的。Base Action 和 PR Action 都是开源的。所以我鼓励大家去看看，从中获取灵感，也许能激发更多想法。

And then finally, we also you guys can install the Claude GitHub Actions today. The easiest way to do this is to open up Claude Code in a terminal in the repo that you want to install it in. And once you open up Claude Code, just do `/install github action`. And that is going to present you with a nice flow which guides you through configuring your GitHub Action as well as merging it. So, the end result of this would be a PR which would be a **YAML file** (YAML: 一种人类可读的数据序列化语言) for your GitHub Action.

最后，大家今天就可以安装 Claude GitHub Actions。最简单的方法是在您想要安装它的仓库中，在终端打开 Claude Code。一旦打开 Claude Code，只需输入 `/install github action`。这会为您呈现一个友好的流程，指导您配置 GitHub Action 并将其合并。所以，最终结果将是一个 PR，其中包含一个用于您的 GitHub Action 的 YAML 文件。

And once you merge that in and you configure your **API keys** (应用程序编程接口密钥: 用于验证应用程序或用户身份的令牌) and things like that, you're off to the races and you can go ahead and start tagging Claude and using Claude like we just did right now. Small caveat, if you're a **Bedrock** (AWS Bedrock: 亚马逊云科技提供的一项生成式人工智能服务) or **Vertex** (Google Cloud Vertex AI: 谷歌云提供的一项机器学习平台服务) user, the instructions are a little bit different and a tiny bit more manual. So, please have a look at the docs. The docs are pretty comprehensive in helping you set up the GitHub Action for both Bedrock and Vertex.

一旦您合并了它并配置了您的 API 密钥等，您就可以立即开始，像我们刚才那样标记并使用 Claude。一个小小的提醒，如果您是 Bedrock 或 Vertex 用户，说明会有些不同，并且需要多一点手动操作。所以，请查阅文档。这些文档在帮助您为 Bedrock 和 Vertex 设置 GitHub Action 方面非常全面。

### 资源与反馈

Finally, resources. These are resources for things that we've talked about today. If you want to snap a picture, go ahead. The open-source repos for both the Base Action and the Claude Code Action are here. And we absolutely love your feedback as well. So, if you guys have any feedback on the SDK, on the GitHub Action, or on Claude Code, please go to our public Claude Code GitHub repo and file an issue there, and someone will have a look and get back to you. Cool. That's all I have for today. Thanks for joining me, and I hope you guys have a good rest of the day.

最后，是资源。这些是我们今天讨论过内容的资源。如果您想拍照，请随意。Base Action 和 Claude Code Action 的开源仓库都在这里。我们也非常乐意收到您的反馈。所以，如果您对 SDK、GitHub Action 或 Claude Code 有任何反馈，请前往我们的公共 Claude Code GitHub 仓库提交一个 Issue，会有人查看并回复您。好的。这就是我今天想分享的全部内容。感谢大家的参与，希望大家度过愉快的一天。