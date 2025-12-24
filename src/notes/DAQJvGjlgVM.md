---
area: tech-insights
category: technology
companies_orgs: []
date: '2025-08-21'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=DAQJvGjlgVM
speaker: Anthropic
status: evergreen
summary: 本文深入探讨了Anthropic的Claude Code工具，从其快速迭代的开发流程、独特的“狗粮”文化，到多样化的用户场景（如“多重Claude”和“计划模式”），以及强大的Claude
  Code SDK如何赋能开发者构建定制化智能代理。
tags:
- ai-agent
- claude-code
- code
- developer-tool
title: Claude Code：加速开发、高效协作的智能助手
---

### 引言与快速迭代的开发模式

These developers tend to like to run multiple Claude sessions at once, and they've started calling this multi-Clauding.
这些开发者倾向于同时运行多个Claude会话，他们将此称为“多重Claude”。

So you might see sessions where people have like six Claudes open on their computer at the same time.
因此，你可能会看到有人在电脑上同时打开了六个Claude会话。

Alex: Hey, I'm Alex. I lead Claude Relations here at Anthropic. Today we're gonna be talking about Claude Code, and I'm joined by my colleague Cat.
Alex: 大家好，我是Alex，Anthropic的Claude关系负责人。今天我们将讨论Claude Code，我的同事Cat也加入了我们。

Cat: Hey, I'm Cat. I'm the product manager for Claude Code.
Cat: 大家好，我是Cat，Claude Code的产品经理。

Alex: Cat, I wanna kick this off just talking about the insane rate of shipping in Claude Code.
Alex: Cat，我想先从Claude Code惊人的发布速度开始谈起。

It feels like literally every time I open it up in my terminal, there's a new product or a new feature, something for me to use.
感觉上，我每次在终端打开它时，都会有新的产品或新功能出现，总有新东西可以使用。

Can you walk me through what the process looks like of the team going from an idea to actually shipping something to end users?
你能否向我介绍一下，团队从一个想法到实际向最终用户发布产品的过程是怎样的？

Cat: Yeah, so the Claude Code team is full of very product-minded engineers and a lot of these features are just built bottom-up.
Cat: 是的，Claude Code团队都是非常有产品思维的工程师，许多功能都是自下而上构建的。

It's like you're a developer and you really wish you had this thing, and then you build it for yourself.
这就像你是一名开发者，你非常希望拥有某个功能，然后你就为自己把它构建出来。

And the way that our process works is instead of writing a doc, it's so fast to use Claude Code to prototype a feature that most of the time people just prototype the feature and then they ship it internally to "Ants".
我们的工作流程是，与其撰写文档，不如直接使用Claude Code快速原型化一个功能，大多数时候人们都是直接构建原型，然后将其内部发布给“**Ants** (Anthropic employees: Anthropic的员工)”。

And if the reception is really positive, then that's a very strong signal that the external world will like it too.
如果反响非常积极，那么这就是一个强烈的信号，表明外部世界也会喜欢它。

And that's actually our bar for shipping it externally.
这实际上就是我们对外发布的标准。

And then of course there's always features that aren't exactly right that need some tweaking.
当然，总有一些功能不够完善，需要进行调整。

And if we feel like, okay, "Ants" aren't really using it that much, then we just go back to the drawing board and we say like, okay, what else could we change about this?
如果我们觉得“Ants”使用得不多，我们就会重新审视，思考还能做哪些改变。

Alex: And when we say "Ants," do we mean Anthropic employees?
Alex: 当我们说“Ants”时，是指Anthropic的员工吗？

Cat: Yes, yes.
Cat: 是的，是的。

### “狗粮文化”与终端的灵活性

Alex: Yeah. That's really fascinating. I've never seen a product have as strong of like a "dogfooding" loop as Claude Code.
Alex: 是的，这真的很有趣。我从未见过一个产品拥有像Claude Code这样强大的“**dogfooding** (内部测试: 公司员工自己使用和测试自家产品) ”循环。

Do you think that's something we purposely did or that just kind of naturally arise from the product itself?
你认为这是我们有意为之，还是产品本身自然而然产生的？

Cat: It is quite intentional, and it's also a really important reason why Claude Code works so well.
Cat: 这是相当有意的，也是Claude Code之所以能运作得如此出色的一个重要原因。

Because it's so easy to prototype features on Claude Code, we do push people to prototype as much as possible, but it's hard to reason about exactly how a developer will use a tool because developers are so heterogeneous in their workflows.
因为在Claude Code上原型化功能非常容易，所以我们确实鼓励人们尽可能多地进行原型设计，但很难准确推断开发者会如何使用一个工具，因为开发者的工作流程是如此多样化。

So oftentimes, even if you theoretically know you wanna do something, like even if you theoretically know that you wanna build an IDE integration, there's still a range of potential ways you could go about it.
所以，很多时候，即使你理论上知道你想做什么，比如即使你理论上知道你想构建一个IDE集成，仍然存在一系列潜在的实现方式。

And often prototyping is the only way that you can really feel how the product will actually be in your workflow.
而通常情况下，原型设计是唯一能让你真正感受到产品在你的工作流程中实际运作方式的方法。

So yeah, it's through the process of "dogfooding" that we decide what version of a feature we decide to ship.
所以，是的，正是通过“dogfooding”的过程，我们决定了要发布哪个版本的功能。

Alex: I see. And there's something about the, almost like the flexibility but also the constraints of the terminal too that allows for easy addition of new features, which I've kind of noticed where it's like, because we have the primitives built out of slash commands and things, it's easy to add another one on top of that.
Alex: 我明白了。终端的灵活性和约束性兼具，也使得添加新功能变得容易，我注意到，因为我们已经构建了斜杠命令等基本功能，所以很容易在其之上添加更多功能。

Cat: Yeah, it's totally designed to be customizable.
Cat: 是的，它完全被设计成可定制的。

And because so many developers are familiar with the terminal, it makes new feature onboarding super straightforward, because for example, for a feature like hooks, which lets you add a bit of determinism around Claude Code events, because every developer knows how to write a script, and really at the end of the day, all a hook is, is a script.
而且由于许多开发者都熟悉终端，这使得新功能的上手过程非常直接，例如，对于像“hooks”这样的功能，它允许你在Claude Code事件周围增加一些确定性，因为每个开发者都知道如何编写脚本，而归根结底，hook就是一段脚本。

And so you don't need to learn a new technology to customize Claude Code.
所以你不需要学习一项新技术来定制Claude Code。

You write this script that you already know how to do and then you add it to one of the Claude Code events and now you have some determinism.
你编写这段你已经知道如何操作的脚本，然后将其添加到其中一个Claude Code事件中，现在你就拥有了一些确定性。

Alex: We're really trying to meet customers or developers where they are with this tool.
Alex: 我们真的在努力用这个工具满足客户或开发者的需求。

Cat: Definitely.
Cat: 确实如此。

### 增长与多样化的使用模式

Alex: Switching gears slightly, so alongside this insane rate of shipping is also the insane growth rate of Claude Code with developers everywhere.
Alex: 稍微换个话题，除了惊人的发布速度之外，Claude Code在各地开发者中的增长速度也同样惊人。

Can you walk me through what that's been like to kind of be on this rocket ship and how are we seeing various developers, whether it's at startups or individuals or at even large enterprises, use Claude?
你能否告诉我，搭乘这艘“火箭飞船”是怎样一种体验？我们如何看到各种开发者，无论是初创公司、个人还是大型企业，都在使用Claude？

Cat: So one of the magical things about Claude Code is that the onboarding is so smooth.
Cat: Claude Code的奇妙之处之一在于其上手过程非常流畅。

After you do the NPM install, Claude Code kind of just works out of the box without any configuration.
完成NPM安装后，Claude Code基本上无需任何配置即可直接使用。

And this is true whether you are an indie developer through to if you're an engineer at a Fortune 500.
无论是独立开发者还是财富500强的工程师，情况都是如此。

I think this is the magic behind Claude Code.
我认为这是Claude Code的魅力所在。

Because it has access to all of the local tools and files that you have, you have this very clear mental model for what Claude Code is capable of.
因为它能访问你所有的本地工具和文件，所以你对Claude Code的能力有一个非常清晰的心理模型。

We do see different use case patterns though between smaller companies and larger ones.
然而，我们确实看到小型公司和大型公司之间存在不同的使用模式。

We find that engineers at smaller companies tend to run Claude more autonomously using things like "auto-accept mode," which lets Claude make edits by itself without approval of each one.
我们发现，小型公司的工程师倾向于使用“**auto-accept mode** (自动接受模式: 让Claude自主进行编辑，无需每次批准)”等功能，让Claude更自主地运行，无需逐一批准。

We also find that these developers tend to like to run multiple Claude sessions at once, and they've started calling this "multi-Clauding."
我们还发现，这些开发者倾向于同时运行多个Claude会话，他们将此称为“**multi-Clauding** (多重Claude: 同时运行多个Claude会话)”。

So you might see sessions where people have like six Claudes open on their computer at the same time.
所以你可能会看到有人在电脑上同时打开了六个Claude会话。

Maybe each of them are in a different Git workspace or in a different copy of the Git repo, and they're just managing each of them.
也许每个会话都在不同的Git工作区或Git仓库的不同副本中，他们只是在管理这些会话。

Whenever anyone stops and asks for feedback, they'll jump in there and then send it off and let it continue running.
每当有会话停止并请求反馈时，他们就会介入，然后发送出去，让它继续运行。

And on the other end of the spectrum for larger companies, we find that engineers really like to use "plan mode."
而在另一端，对于大型公司，我们发现工程师们非常喜欢使用“**plan mode** (计划模式: 让Claude先探索代码库、理解架构并制定工程计划)”。

So "plan mode" is a way for developers to tell Claude Code to take a second, explore the code base, understand the architecture, and create an engineering plan before actually jumping into the code itself.
因此，“计划模式”是开发者指示Claude Code花点时间，探索代码库，理解架构，并创建一份工程计划，然后再实际着手编写代码的方式。

And so we find that this is really useful for harder tasks and more complex changes.
我们发现这对于更困难的任务和更复杂的变更非常有用。

### 意外的使用模式与定制化选项

Alex: So going back to multi-Clauding just 'cause I think that's a fascinating concept.
Alex: 回到“多重Claude”这个概念，因为它我觉得非常引人入胜。

I'm sure we kind of imagined folks wanting to do things like that, but it was like somewhat surprising.
我确信我们多少设想过人们会想做类似的事情，但这多少还是有点出乎意料。

Is there other things in that domain of like, oh wow, this is a usage pattern that we really did not expect that have kind of popped up organically and we've shifted our roadmap around a little bit?
在这个领域里，还有没有其他让我们意想不到、自然而然出现并因此调整了我们路线图的使用模式？

Cat: Yeah, I think multi-Clauding is the biggest one because this is something that we thought was just a power user feature that like a few people would wanna do.
Cat: 是的，我认为“多重Claude”是最大的一点，因为我们原以为这只是少数高级用户会使用的功能。

But in fact this is actually a really common way in which people use Claude.
但实际上，这是一种非常常见的Claude使用方式。

And so for example, they might have one Claude instance where they only ask questions and this one doesn't edit code.
例如，他们可能有一个Claude实例只用于提问，这个实例不编辑代码。

That way they can have another Claude instance in the same repo that does edit code and these two don't interfere with each other.
这样他们就可以在同一个仓库中拥有另一个会编辑代码的Claude实例，而这两个实例互不干扰。

Other things that we've seen are people really like to customize Claude Code to handle specialized tasks.
我们还看到其他情况，人们非常喜欢定制Claude Code来处理专业任务。

So we've seen people build like SRE agents on Claude Code, security agents, incident response agents.
所以我们看到有人在Claude Code上构建了SRE代理、安全代理、事件响应代理。

And what that made us realize is that integrations are so important for making sure Claude Code works well.
这让我们意识到，集成对于确保Claude Code良好运行至关重要。

And so we've been encouraging people to spend more time to tell Claude Code about, hey, these are the CLI tools we commonly use or to set up remote MCP servers to get access to logs and ticket management software.
因此，我们一直鼓励人们花更多时间告诉Claude Code：“嘿，这些是我们常用的CLI工具”，或者设置远程MCP服务器以获取日志和工单管理软件的访问权限。

Alex: When these engineers are customizing Claude Code, does that mean they're creating sub-agents or are they creating markdown files like CLAUDE.md files?
Alex: 当这些工程师定制Claude Code时，这意味着他们是在创建子代理，还是在创建像CLAUDE.md这样的Markdown文件？

How exactly are they creating these different types of agents?
他们究竟是如何创建这些不同类型的代理的？

Cat: Yeah, I think the most common ways that we've seen people customize is by investing a lot into the CLAUDE.md file.
Cat: 是的，我认为我们看到人们最常见的定制方式是对**CLAUDE.md file** (Claude Code的记忆概念，用于存储团队目标、代码架构、注意事项等)进行大量投入。

So the CLAUDE.md file is our concept of memory.
CLAUDE.md文件是我们对“记忆”的理解。

And so it's the best place for you to tell Claude Code about what your team's goals are, how the code is architected, any gotchas in the code base, any best practices.
所以它是你告诉Claude Code团队目标、代码架构、代码库中的任何陷阱以及任何最佳实践的最佳场所。

And investing in CLAUDE.md we've heard dramatically improves the quality of the output.
我们听说，对CLAUDE.md的投入能够显著提高输出的质量。

The other way that people customize Claude Code is by adding custom slash commands.
人们定制Claude Code的另一种方式是添加自定义斜杠命令。

So if there's a prompt that you're always typing, you can add that into the custom slash commands and you could also check these in so that you share them with the rest of your team.
因此，如果你总是在输入某个提示，你可以将其添加到自定义斜杠命令中，并且你也可以将其提交，以便与团队其他成员共享。

And then you can also add custom hooks.
此外，你还可以添加自定义钩子（hooks）。

So if for example, you want Claude Code to run lints before it makes a commit, this is something that's great for a hook.
例如，如果你希望Claude Code在提交前运行代码检查（lints），这非常适合用钩子实现。

If you want Claude Code to send you a Slack notification every time it's done working, this is actually the original inspiration for making hooks.
如果你希望Claude Code在每次工作完成后向你发送Slack通知，这实际上是创建钩子的最初灵感来源。

And so these are all customizations that people are building today.
所以这些都是人们今天正在构建的定制功能。

### Claude Code SDK：构建通用智能代理的利器

Alex: Tell me more about, what is the Claude Code SDK?
Alex: 能否多告诉我一些关于Claude Code SDK的信息？它是什么？

Cat: The **Claude Code SDK** (一个用于构建通用智能代理的开发工具包) is a great way to build general agents.
Cat: Claude Code SDK是构建通用代理的绝佳方式。

The Claude Code SDK gives you access to all of the core building blocks of an agent, including you can bring your own system prompt, you can bring your own custom tools, and what you get from the SDK is a core agentic loop where we handle the user turns and we handle executing the tool calls for you.
Claude Code SDK让你能够访问代理的所有核心构建模块，包括你可以引入自己的系统提示，你可以引入自己的自定义工具，而你从SDK中获得的是一个核心代理循环，我们负责处理用户交互，并为你执行工具调用。

You get to use our existing permission system so that you don't need to build one from scratch.
你可以使用我们现有的权限系统，这样你就无需从头开始构建一个。

And we also handle interacting with the underlying API.
我们还处理与底层API的交互。

So we make sure that we have backoff if there's any API errors.
因此，我们确保在出现任何API错误时进行退避（backoff）。

We very aggressively prompt cache to make sure that your requests are token-efficient.
我们非常积极地进行提示缓存，以确保你的请求是令牌高效的。

If you are prototyping building an agent from scratch, if you use the Claude Code SDK, you can get up and running with something pretty powerful within like 30 minutes or so.
如果你正在从头开始原型化构建一个代理，使用Claude Code SDK，你可以在大约30分钟内启动并运行一个相当强大的东西。

We've been seeing people build really cool things with it.
我们看到人们用它构建了许多很棒的东西。

We open-sourced our Claude Code on GitHub integration, which is completely built on the SDK, and we've seen people build security agents on it, SRE agents, incident response agents.
我们开源了基于SDK完全构建的Claude Code on GitHub集成，我们看到人们用它构建了安全代理、SRE代理、事件响应代理。

And these are just within the coding domain.
这些仅仅是在编码领域内。

Outside of coding, we've seen people prototype legal agents, compliance agents.
在编码之外，我们还看到人们原型化了法律代理、合规代理。

This is very much intended to be a general SDK for all your agent needs.
这非常旨在成为一个满足你所有代理需求的通用SDK。

### SDK的未来与使用技巧

Alex: The SDK is pretty amazing to me. I feel like we've lived in the single request API world for so long.
Alex: SDK对我来说相当惊人。我觉得我们已经在单请求API的世界里生活了太久。

And now we're moving to like a next level abstraction almost where we're gonna handle all the nitty-gritty of the things you mentioned.
现在我们正迈向一个更高层次的抽象，几乎所有你提到的细节都将由我们来处理。

Where is the SDK headed? What's next there?
SDK的未来走向如何？接下来有什么计划？

Cat: We're really excited about the SDK as the next way to unlock another generation of agents.
Cat: 我们对SDK作为解锁下一代代理的又一途径感到非常兴奋。

We're investing very heavily in making sure the SDK is best-in-class for building agents.
我们正在大力投入，确保SDK在构建代理方面达到一流水平。

So all of the nice features that you have in Claude Code will be available out of the box in the SDK, and you can pick and choose which ones you wanna keep.
因此，你在Claude Code中拥有的所有出色功能都将在SDK中开箱即用，你可以选择保留哪些功能。

So for example, if you want your agent to be able to have a to-do list, great.
例如，如果你的代理需要拥有一个待办事项列表，没问题。

You have the to-do list tool out of the box.
你可以直接使用现成的待办事项列表工具。

If you don't want that, it's really easy to just delete that tool.
如果你不需要，删除该工具非常容易。

If your agent needs to edit files, for example, to update its memory, you get that out of the box.
如果你的代理需要编辑文件，例如更新其内存，你也可以开箱即用。

And if you decide, okay, mine won't edit files or it'll edit files in a different way, you can just bring your own implementation.
如果你决定，好的，我的代理不会编辑文件，或者会以不同的方式编辑文件，你只需引入自己的实现即可。

Alex: Okay, so it's extremely customizable, basically general purpose in the sense that you could swap out the system prompt or the tools for your own implementations.
Alex: 好的，所以它是极其可定制的，基本上是通用目的的，你可以用自己的实现来替换系统提示或工具。

And they just nicely slot in to whatever thing you're building for, whether it's in an entirely different domain than code. Right?
而且它们可以很好地融入你正在构建的任何东西中，无论它是否与代码完全不同的领域。对吗？

Cat: Yeah, totally. I'm really excited to see what people hack on top of this.
Cat: 是的，完全正确。我非常期待看到人们在此基础上能创造出什么。

I think like especially for people who are just trying to prototype an agent, this is like, I think by far the fastest way to get started.
我认为，特别是对于那些只是想原型化一个代理的人来说，这无疑是目前最快的入门方式。

Like we really spent almost a year perfecting this harness, and this is the same harness that Claude Code runs on.
我们确实花了将近一年的时间来完善这个框架，而这正是Claude Code运行所依赖的框架。

And so if you want to just jump right into the specific integrations that your agent needs and you wanna jump right into like just working on the system prompt to share context about the problems faced with the agent, and you don't wanna deal with the agent loop, this is like the best way to circumvent all the general purpose harness and just add your like special sauce to it.
所以，如果你想直接专注于代理所需的特定集成，并直接着手处理系统提示以分享代理面临问题的上下文，而不想处理代理循环，那么这是绕过所有通用框架，只添加你“独家秘方”的最佳方式。

Alex: Hmm, all right. Well, you heard it here. You gotta go build on the SDK.
Alex: 嗯，好的。你在这里听到了。你得去基于SDK进行构建。

Before we wrap up here, I'm really curious to hear your own tips for how you use Claude Code, and what are some best practices we can share with developers?
在我们结束之前，我非常想听听你关于如何使用Claude Code的个人技巧，以及我们可以与开发者分享的一些最佳实践是什么？

Cat: When you work with Claude Code or any agentic tool, I think the most important thing is to clearly communicate what your goals are to the tool.
Cat: 当你使用Claude Code或任何代理工具时，我认为最重要的是向工具清晰地传达你的目标。

I think a lot of people think that prompting is this like magical thing, but it really isn't.
我认为很多人认为提示（prompting）是一种神奇的东西，但它真的不是。

It's very much about, okay, did I clearly articulate what my purpose is?
它更多地是关于，我是否清楚地阐明了我的目的？

Like what my purpose with this task is, how I'm evaluating the output of the task, any constraints in the design system.
比如我执行这个任务的目的是什么，我如何评估任务的输出，设计系统中有哪些限制。

And I think usually when you can clearly communicate these things, Claude Code will either be able to do them or just tell you that like, "Okay, this thing, like I'm not able to do because A, B, C and do you wanna try like D, E, F instead?"
我认为通常当你能清楚地传达这些信息时，Claude Code要么能够完成它们，要么会告诉你：“好的，这个事情，我无法完成，因为A、B、C，你是否想尝试D、E、F呢？”

Alex: So it's all about the communication just as if you're working with another engineer.
Alex: 所以这完全是关于沟通，就像你与另一位工程师合作一样。

Cat: Yeah, totally. And another thing is if you notice that Claude Code did something weird, you could actually just ask it why it wanted to do that.
Cat: 是的，完全正确。还有一件事是，如果你注意到Claude Code做了些奇怪的事情，你实际上可以直接问它为什么想那样做。

And it might tell you something like, oh, okay, there was something in CLAUDE.md that said this, or I read something in this file that like gave me this like impression.
它可能会告诉你一些事情，比如，哦，CLAUDE.md文件里有这样一句话，或者我在这份文件里读到了什么，让我有了这种印象。

And then that way you can actually use like talking to Claude as a way to debug.
这样你就可以把与Claude对话作为一种调试方式。

It doesn't always work, but I think it's definitely worth trying.
它并非总是有效，但我认为绝对值得一试。

And it's like a common technique that we use.
这是我们常用的一种技术。

Alex: You use Claude Code to debug Claude Code. I love it.
Alex: 你用Claude Code来调试Claude Code。我喜欢这个！

Cat: Yeah, yeah. Like the same way that when working with a human, if they say something that you didn't expect, you might feel like, "Oh, interesting. Like, what gave you that impression? Or why did you think this?"
Cat: 是的，是的。就像与人合作时，如果他们说了你意想不到的话，你可能会觉得：“哦，有意思。是什么让你产生那种印象？或者你为什么会这么想？”

And I think you can do the same with agents too.
我认为你也可以对代理做同样的事情。

Alex: That's fascinating. Well, Cat, this has been great. Really, we appreciate the time. Thank you.
Alex: 这太吸引人了。Cat，这次谈话非常棒。我们真的很感谢你的时间。谢谢。

Cat: Thanks for having me.
Cat: 谢谢邀请。