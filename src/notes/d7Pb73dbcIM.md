---
title: 使用 Obsidian + Claude AI 代理让你的笔记效率提升10倍
summary: McKay 演示了如何将 Obsidian 与 Claude Code 结合，构建强大的 AI 代理工作流，从而极大地提升笔记效率。视频详细介绍了环境设置，并分步讲解了10个核心工作流，包括自定义规则、自动化标签、并行研究、连接外部工具（MCP）以及通过
  GitHub Actions 实现云端自动化，旨在将用户从基础使用者转变为能够驾驭 AI 进行复杂任务的“代理人”。
area: tech-insights
category: technology
project:
- ai-impact-analysis
- pkm-research
tags:
  - ai-agent
  - claude-code
  - 工作流自动化
  - 笔记方法
people: []
companies_orgs: []
products_models:
- obsidian
media_books: []
date: 2025-07-09
author: Lei
speaker: Mckay Wrigley
draft: true
file_name: 10x_your_notes_obsidian_claude_ai_agents.md
guest: null
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=d7Pb73dbcIM
---
## 介绍与准备工作

Hi everybody, my name is McKay and in this video I'm going to teach you how to 10x your notes with AI agents.

大家好，我叫 McKay。在本视频中，我将教你如何使用 AI 代理（能够自主执行任务的智能程序）让你的笔记效率提升10倍。

So the goal of this video is we are going to teach you how to use claude code which is a new AI coding tool from anthropic and we are going to extrapolate its coding capabilities so that we can use something that I like to refer to as claude agent which is we are going to teach you how to build flexible agentic workflows that you can apply and all sorts of different tasks that you experience day-to-day.

本视频的目标是教会你如何使用 **Claude Code** (Anthropic 公司推出的一款 AI 编程工具)，并将其编码能力进行拓展，以便我们可以运用我称之为“Claude 代理” 的东西。我们将教你如何构建灵活的代理工作流，并将其应用于你日常遇到的各种不同任务中。

We're going to have timestamps on everything. This is going to be on X. This is going to be on YouTube. I also have an accompanying blog post on my Substack. Uh, so if you like this video, share it with friends, subscribe to my YouTube, uh, follow me on X, share the Substack post. It goes a long way uh, to help me out.

视频中所有内容都会有时间戳。这个视频会在 X 和 YouTube 上发布。我还在我的 Substack 上发布了一篇配套的博客文章。所以，如果你喜欢这个视频，请分享给朋友，订阅我的 YouTube，在 X 上关注我，并分享 Substack 的文章。这对我帮助很大。

I'm just going to cover a few uh, four to five minutes of like intro. Uh, you may just want to skip that, which is totally cool. Uh, and then we'll actually dive into those 10 workflow examples. Uh, and then we're going to close so that hopefully by the end of this, you are completely agent-pilled and you feel like you know how to use the cloud agentic experience to build workflows that can help you do anything.

我会花大约四到五分钟做个介绍。你完全可以直接跳过这部分，没问题。然后我们将直接进入那10个工作流的实例。最后我们会进行总结，希望在视频结束时，你能够完全掌握代理的概念，并感觉自己知道如何利用 Claude 的代理体验来构建能帮助你完成任何事情的工作流。

The rest of this video assumes two things. So, these are going to be steps where you just need to pause the video and you can either, of course, just watch me do everything and then do this, or you can follow along.

接下来的视频内容假设你已具备两个前提条件。在这些步骤中，你需要暂停视频。你可以选择先看我完成所有操作，然后再自己动手，或者跟着我一起操作。

If you want to follow along, you need to make sure you have Obsidian downloaded. This is a free download. You can go to obsidian.md and you can get your free desktop version of Obsidian. Very easy to get started. So, make sure you do that if you want to follow along.

如果你想跟着做，你需要确保已经下载了 **Obsidian** (一款强大的知识库和笔记应用)。这是一个免费软件。你可以访问 obsidian.md 来获取免费的桌面版 Obsidian。上手非常容易。所以，如果你想跟着操作，请务必先完成这一步。

And then you will also need to make sure that you have Claude Code installed on your computer so that we can take advantage of all of the agentic workflows that we're about to demonstrate here.

此外，你还需要确保电脑上已经安装了 **Claude Code**，这样我们才能利用即将演示的所有代理工作流。

So, you can go to docs.anthropic.com. It's very easy to get to the cloud code docs and what you want to do is go to the cloud code tab here and you just want to go to overview here and you're going to find this command. You just need to run this command in a terminal on your computer.

你可以访问 docs.anthropic.com。找到 Claude Code 的文档非常容易。你需要做的是进入 Claude Code 标签页，然后点击这里的概述，你会找到这个命令。你只需要在电脑的终端中运行这个命令即可。

If you're somebody who's not technical, right, you might have seen this video. Oh, taking notes. Let me figure this out. And then be like, oh great, it's a developer telling me how to run terminal commands. Uh don't be intimidated. This is a very easy setup.

如果你不是技术人员，看到这个视频可能会想：“哦，做笔记，我来学学。”然后可能会觉得：“太好了，又是一个开发者在教我怎么运行终端命令。”但请不要害怕，这个设置过程非常简单。

Uh you can use your AI chat of choice. Uh if you, you know, if you're a chat GBT user, if you're a cloud user, if you're a Gemini user, uh just copy this entire page. Enthropic makes it very easy to do. So you just copy that page, paste that into the AI app that you like to use and ask how do I do this? It's very easy. You just need to open the terminal up on your computer, copy this command here, and install it.

你可以使用你偏爱的任何 AI 聊天工具。无论你是 ChatGPT 用户、Claude 用户还是 Gemini 用户，只需复制整个页面——Anthropic 已经让这个操作变得非常简单——然后粘贴到你喜欢的 AI 应用中，并询问“我该如何操作？”这非常简单。你只需要在电脑上打开终端，复制这个命令，然后安装它。

Okay, super super easy. The one note, the only thing you will need to pay for of course is you do need either a cloud plan from Anthropic or you need a cloud API key. Cloud plans start for as low as $20 a month. Uh, so if you do want to actually follow along, get started, and for some reason you don't have a cloud plan, you will need to go to Anthropic and actually sign up uh up here on the top right.

好的，这超级简单。唯一需要注意的是，你需要付费的部分是，你必须拥有 Anthropic 的 Claude 套餐或 Claude API 密钥。Claude 套餐的起价是每月20美元。所以，如果你真的想跟着操作并开始使用，但还没有 Claude 套餐，你需要去 Anthropic 官网右上角注册一个。

So the two things that you're going to need to do before following along, again, you're more than welcome to just watch this, but you need to get Obsidian downloaded and you need to make sure you get Cloud Code installed with a corresponding Cloud plan. Then you're going to be all set to follow along.

所以，在跟着操作之前，你需要完成两件事。再次强调，你完全可以只看视频，但如果你想动手，你需要下载 Obsidian，并确保安装了 Claude Code，同时拥有一个相应的 Claude 套餐。然后你就可以顺利地跟着操作了。

Before we get on to our workflows, we're first going to create a new vault in Obsidian. So you can see I just have a new window of Obsidian here. And you can see I have the create new vault. We're going to click create and we're going to create a demo vault because what I'm going to do is a first uh the first couple of these workflows are going to be things that I recommend that you do when you get it set up, particularly this first one.

在开始介绍工作流之前，我们首先要在 Obsidian 中创建一个新的 **Vault** (Obsidian 中的笔记库)。如你所见，我现在打开了一个新的 Obsidian 窗口，这里有“创建新库”的选项。我们将点击“创建”来建立一个演示库，因为接下来的前几个工作流，尤其第一个，是我推荐你在设置好后就立即去做的。

So I'm just going to call this claude code demo. I'm just going to put my vault on my desktop here, but you can put this anywhere. We're going to go ahead and create a new vault. We're going to see the Obsidian app open here. We're going to go full screen here so we can kind of explore a little bit.

我将把这个库命名为 “claude code demo”。我会把库放在桌面上，但你可以放在任何地方。我们现在开始创建新库。Obsidian 应用会打开，我们将其全屏显示，以便更好地进行探索。

So the core experience of Obsidian is text files. So you'll see over here on the left we have our file explorer. So I could go ahead rightclick create a new note McKay right we can say hi everyone watching.

Obsidian 的核心体验是基于文本文件的。你会看到左侧是我们的文件浏览器。我可以右键点击，创建一个新笔记，命名为“McKay”，然后在里面写上“大家好”。

Okay so all of these files here are just text files. So if I actually just open up this McKay file in finder here you're going to see this is just a markdown file. Okay. So I can do whatever I want with this file. I can move this to another device. I can use this in a different app. I have complete ownership of this file because is it is just a text file in markdown form.

好的，这里所有的文件都只是文本文件。如果我在访达（Finder）中打开这个“McKay”文件，你会发现它就是一个 **Markdown** (一种轻量级标记语言) 文件。好的。所以我可以对这个文件做任何我想做的事情。我可以把它移动到另一台设备，可以在另一个应用中使用它。我拥有这个文件的完全所有权，因为它只是一个 Markdown 格式的文本文件。

You'll also notice on the right we have the graph view. So some of you are going to be into this kind of thing, some of you are not. Uh I do think that knowledge bases get really fun over time. Right? My core obsidian vault that you saw in that preview pane a few seconds ago. That was all years and years and years in in in kind of the making. And my graph view is very structured.

你还会注意到右边有关联图谱视图。你们中有些人可能会喜欢这个功能，有些人则不然。但我确实认为，随着时间的推移，知识库会变得非常有趣。对吧？你几秒钟前在预览窗格中看到的我的核心 Obsidian 库，是经过很多年积累而成的。我的关联图谱视图结构非常清晰。

So I have this knowledge base with all sorts of connections. And the great news is with something like Cloud Code, you can actually automate quite a few of the linking and tagging files, which we'll we'll get to in the workflow section.

我拥有一个包含各种连接的知识库。好消息是，有了像 Claude Code 这样的工具，你实际上可以自动化相当一部分链接和标记文件的操作，我们将在工作流部分详细介绍。

Uh, but one of the things that you're going to want to do as well is you're going to want to make sure, of course, that you did get Claude Code installed. And one of the things that we're going to want to do here is you can see we have our vault in the bottom left. So, it's really nice because I can quickly switch between different vaults. Uh, I pretty much just operate out of this main vault.

但是，你需要做的另一件事是，当然要确保你已经安装了 Claude Code。我们接下来要做的一件事是，你可以看到我们的库在左下角。这非常方便，因为我可以快速地在不同的库之间切换。我基本上只使用这个主库。

But what we can do is we can actually rightclick this and reveal and find her. Uh, and what we can do is we can actually rightclick. Again, I'm on Mac. Some of you, of course, are going to be on Windows or Linux, but I'm just kind of operating um with Mac here within those constraints. So, just do whatever is the corresponding function on your uh particular operating system, but I'm just going to click new terminal at folder.

但我们现在可以右键点击它，选择“在访达中显示”。然后我们可以再次右键点击。再次说明，我用的是 Mac。你们中有些人当然可能用的是 Windows 或 Linux，我只是在 Mac 的限制下操作。所以，请在你的特定操作系统上执行相应的功能，但我这里就直接点击“在文件夹中新建终端”。

Okay, so I just rightclicked over my vault, new terminal at folder. Okay, let me just drag in my terminal here.

好的，我刚刚在我的库上右键点击，选择了“在文件夹中新建终端”。好的，让我把我的终端窗口拖过来。

Okay, so we're going to put our terminal over here on the left side of the screen, and we're going to keep Obsidian over on the right side.

好的，我们把终端放在屏幕左侧，Obsidian 放在右侧。

What we can do is we can just run Claude on our vault. And now we have a full instance of cloud code working on our vault.

我们现在可以直接在我们的库上运行 Claude。现在我们就有了一个完整的 Claude Code 实例在我们的库中工作了。

Now I can say something like hi what's in the McKay file. Just verify that cloud does in fact work. We click on our file explorer. We'll see we have a McKay file. You can see the cloud code is now intelligently searching. Okay. You can see it found the McKay.md file here. And you can see that it said hi everyone is watching. All right. So at this point we're all good to go.

现在我可以输入类似“你好，McKay文件里有什么”来验证 Claude 是否正常工作。我们点击文件浏览器，会看到有一个 McKay 文件。你可以看到 Claude Code 正在进行智能搜索。好的。它找到了 McKay.md 文件，并显示出里面的内容是“大家好”。好了，到此为止，我们一切准备就绪。

Now let's jump into the workflows.

现在我们开始进入工作流部分。

## 工作流一：Claude 的规则系统

Workflow number one is going to be about Claude's rule system. So the very first thing that you're going to want to do once you have cloud code running is you're going to want to type /nit. And you're going to see this init command pop up. You're going to see that it initializes a new cloud.md file with codebase documentation.

工作流一，关于 Claude 的规则系统。当你运行了 Claude Code 之后，首先要做的是输入 `/init`。你会看到 `init` 命令弹出，它会用代码库文档初始化一个新的 `claude.md` 文件。

So that's highlighted. We're just going to hit return. And what's going to happen here is cloud code is going to intelligently create an initial claude.md file. You can see claude allcaps.md. This is going to be the rules file that is essentially injected as the system prompt to every single request that you make with cloud code inside of your vault.

那个选项已经被高亮显示，我们直接按回车。接下来，Claude Code 会智能地创建一个初始的 `claude.md` 文件。你可以看到这个全大写的 `CLAUDE.md` 文件。这个文件将作为规则文件，本质上会作为系统提示被注入到你在库中通过 Claude Code 发出的每一个请求里。

Okay, so this pertains to every single folder, every single file. It's basically going to be the very very top level prompt.

好的，所以这适用于每一个文件夹、每一个文件。它基本上就是最顶层的提示。

So if you have anything, you can see cloud code is asking me for permission to do things here. I'm going to go ahead and say yes, you have permission.

所以如果你有任何操作，可以看到 Claude Code 正在请求我授权。我将选择“是”，授予它权限。

This is another one of those things you'll start to learn over time is the agentic nature of Claude is very powerful, but it's also very controlled.

随着时间的推移，你会逐渐了解到 Claude 的代理特性非常强大，但同时也受到了严格的控制。

And you can see it's now asking me for permission to create a new file. So if I accept yes here, you're gonna see I have three options. Yes, yes, and don't ask again this session. No, and tell Claude what to do differently. So if I selected three, I would get an opportunity to kind of give it some additional text, kind of prompt it in a different direction.

你可以看到它现在正在请求我授权创建新文件。如果我在这里选择“是”，你会看到我有三个选项：是，是并且本会话不再询问，否并告知 Claude 如何做得不同。如果我选择第三个选项，我就有机会给它一些额外的文本，引导它朝不同的方向执行。

In this case, this looks pretty good. And we're just going to kind of roll with it just for demo purposes.

在这种情况下，这看起来不错。为了演示，我们就先这样继续。

In the case of your actual personal vault, you're going to want to create this file. You're going to want to kind of go in here and you really do want to actually take the time to customize this to your liking because this file is going to have a significant significant impact on the quality of responses, how Cloud actually kind of uses your code or your not your codebase. I'm so used to working in code, how it works with your notes uh inside of your vault. So, you can make this as specific and personalized as you like.

在你的个人库中，你会想要创建这个文件。你会想要进入这里，并且真的花时间根据你的喜好来定制它，因为这个文件将对响应的质量产生重大影响，决定了 Claude 如何使用你的笔记——而不是代码库，我太习惯于在代码中工作了。你可以根据自己的喜好，让这个文件变得尽可能具体和个性化。

Here, we're just going to kind of roll with what it gave us out of the box here. uh we can kind of assume because it's a fresh vault and we did in fact tell cloud it was a fresh vault that these are probably going to be pretty good and we'll come back to this more later as we try some of the other workflows because we'll show you how you can kind of use those workflows in conjunction with updating this rules file to get better for for uh performance.

这里，我们暂时就使用它默认提供的内容。我们可以假设，因为这是一个全新的库，而且我们确实告诉了 Claude 这是一个新库，所以这些默认设置应该会相当不错。我们稍后在尝试其他工作流时会再回到这里，因为我们会向你展示如何结合使用这些工作流与更新此规则文件来获得更好的性能。

But anyways, the thing that you want to do at the very start of your cloud code experience in Obsidian is you just want to make sure that you use that slashinit command. You want to let claude create this claude.md file at the very base root of your project folder of your vault so that these rules.

但无论如何，在 Obsidian 中开始使用 Claude Code 体验时，你首先要做的就是确保使用了那个 `/init` 命令。你希望让 Claude 在你的库的项目文件夹的根目录下创建这个 `claude.md` 文件，以便应用这些规则。

Okay. So if I actually exit cloud code here uh clear my terminal here. If we were to initiate a new session, what actually happens is now this prompt gets injected into this new session. So this now applies to every single session which is pretty cool.

好的。如果我在这里退出 Claude Code，清空终端，然后启动一个新的会话，实际上发生的是，这个提示现在被注入到了新的会话中。所以，这个规则现在适用于每一个会话，这非常酷。

## 工作流二：核心聊天功能

Workflow number two here. We're going to boot up a new session of cloud code. Again, just as a reminder, now everything that is in our claude.md file here is going to be injected inside of our prompt. So, Claude is now going to follow these instructions. Uh, just want to keep uh one of the things you're going to notice as we go from workflow to workflow. It's a lot of them build on top of each other. So, just want to bring that up one more time here.

工作流二。我们来启动一个新的 Claude Code 会话。再次提醒，现在我们 `claude.md` 文件里的所有内容都会被注入到我们的提示中。所以，Claude 现在会遵循这些指令。需要注意的是，你会发现随着我们从一个工作流到另一个工作流，很多都是相互叠加构建的。所以，我想在这里再次强调这一点。

But, we're working in what is called Cloud Codes interactive mode. So, this is very chatbased. You know, you kind of saw me working with it in the last workflow section, but this is a very natural kind of UX paradigm, right? Text in, text out. You just ask the agent what you need and it does it, right? Very simple and it just kind of operates this entire thing inside of the terminal, which is just a little bit different, you know, than the web browser or the app chat GBT or Claude or Gemini experience that you're already familiar with. It's just this time we're doing it with cloud code as a command line tool inside of the terminal here.

但是，我们现在是在所谓的 Claude Code 交互模式下工作。这非常基于聊天。你在上一个工作流部分已经看到我如何使用它，这是一种非常自然的用户体验范式，对吧？输入文本，输出文本。你只需要告诉代理你需要什么，它就会去执行，对吧？非常简单。它完全在终端内部运行，这与你已经熟悉的网页浏览器或 ChatGPT、Claude、Gemini 等应用的体验略有不同。这次我们是在终端里，将 Claude Code 作为一个命令行工具来使用。

So let's just go over a couple of kind of the core workflows in standard chat. A little bit more of a boring section here, but this stuff is important.

那么，让我们来看看标准聊天中的几个核心工作流程。这部分可能有点枯燥，但这些内容很重要。

So if I just say, hey, pick a random topic, right? We're just chatting with cloud code naturally like we would in the chat GBT interface for example. And in this case, we're going to have chat or cloud code rather pick an interesting topic here, the Fibonacci sequence.

所以如果我只是说，“嘿，随便选个话题”，对吧？我们就很自然地与 Claude Code 聊天，就像我们在 ChatGPT 界面里做的那样。在这种情况下，我们会让 Claude Code 选择一个有趣的话题，比如斐波那契数列。

And now I can say awesome. Please create a new note about that.

现在我可以回复：“太棒了。请为此创建一个新笔记。”

What's going to happen here is Cloud Code is now going to write a new file to our Obsidian vault here and it's actually going to create this file. It's writing this. You can see it's actually updating the tokens in real time. So, it is actually kind of writing this under the hood. You're just not seeing it stream in like many of you are probably familiar with. And then you can see it's asking us for permission to create the file.

接下来，Claude Code 会在我们的 Obsidian 库中写入一个新文件，它实际上会创建这个文件。它正在写入。你可以看到它实际上在实时更新 token。所以，它其实是在后台进行写入，只是你没有像熟悉的那样看到内容流式传输进来。然后，你可以看到它在请求我们授权创建文件。

Again, the great thing is if I wanted to allow it to always create files, I could go into my rules file and I could actually allow it to do that. In this case, we're just going to accept this manually. And now you can see we have a Fibonacci in nature file here, right here inside of our vault.

再次强调，很棒的一点是，如果我想让它总是自动创建文件，我可以进入我的规则文件，然后允许它这样做。在这种情况下，我们只是手动接受。现在你可以看到，我们的库里有了一个名为“自然界中的斐波那契”的文件。

So, one of the great things about Obsidian, Obsidian, because it is all markdown files. AI models are super super good at markdown. So, you're always going to get really nicely formatted files, it's always going to have a really good idea of how uh to kind of construct things.

Obsidian 的一大优点在于，它完全基于 Markdown 文件。AI 模型非常擅长处理 Markdown。所以，你总能得到格式精美的文档，它总能很好地构思如何组织内容。

If we go to read view, we can kind of see it in a little bit nicer preview here um like you would normally. Then we can kind of go back to edit mode and edit this file.

如果我们切换到阅读视图，就可以像平常一样看到一个更美观的预览。然后我们可以回到编辑模式来修改这个文件。

Uh but one of the things you'll notice like at the bottom here you'll see we have tags. This is how you get interesting things like knowledgebased automation. So one of the things you'll notice in our cloud rules file file um cloud rules file here is we have things like tags.

你会注意到，在底部这里有标签。这就是你如何实现像知识库自动化这样有趣功能的方式。你会发现在我们的 Claude 规则文件中，我们有像标签这样的东西。

So if we wanted it to never have tags, we could do something like you know do not use tags, right? And now our rules file is updated and it wouldn't use tags anymore.

所以，如果我们不希望它有标签，我们可以设置，比如“不要使用标签”，对吧？然后我们的规则文件就会更新，它就不会再使用标签了。

So that's like a really lightweight example of how you could customize this rules file to make sure that Claude Code is writing notes in the style in which you actually wanted to write that.

这是一个非常轻量级的例子，展示了如何自定义这个规则文件，以确保 Claude Code 能够按照你实际期望的风格来撰写笔记。

We're going to undo that for now because we do just kind of want to demo some of the different things you can do.

我们暂时先撤销这个操作，因为我们还想演示一些其他可以做的不同事情。

But now Claude Code has kind of written almost this like basic Wikipedia entry style um article here uh inside of our Obsidian vault here.

但现在 Claude Code 已经在我们的 Obsidian 库里写了一篇几乎是维基百科条目风格的基础文章。

And we can do things like, you know, see this welcome file. We actually don't need the welcome file anymore. And what you'll notice is Claude is going to ask me for permission to remove it.

我们还可以做一些事，比如，看到这个欢迎文件，我们其实不再需要它了。你会注意到 Claude 会请求我授权来删除它。

Here you can see it's actually searching for us to find the welcome file, right? And you can see how Claude's search capabilities can get really interesting because imagine, you know, something like my own personal vault that has like thousands of files at this point.

这里你可以看到它实际上在为我们搜索欢迎文件，对吧？你可以看到 Claude 的搜索能力变得非常有趣，因为想象一下，像我自己的个人库，现在已经有成千上万个文件了。

It can actually just dynamically search that entire thing without you having to tag it here or, you know, have to kind of manually provide a file path.

它实际上可以动态地搜索整个库，而不需要你在这里打标签，或者手动提供文件路径。

You can see it's asking for me for permission. It found the file. We're going to say yes. And you're going to see that file disappear. Okay, pretty cool stuff.

你可以看到它在请求我的许可。它找到了文件。我们选择“是”。然后你会看到那个文件消失了。好的，很酷。

Now, if we wanted to tag a specific file, say we wanted to go back into that Fibonacci, we can actually just type in at, we can kind of start typing. We're going to see the Fibonacci here. I can hit tab. That's just going to autocomplete that.

现在，如果我们想标记一个特定的文件，比如说我们想回到那个关于斐波那契的文件，我们实际上只需输入“@”，然后开始输入。我们会看到“斐波那契”出现。我可以按 Tab 键，它就会自动补全。

And we're going to say, um, can you add an interesting fact section at the bottom, but above the tags?

然后我们会说：“嗯，你能在底部，但在标签上方，添加一个‘有趣事实’部分吗？”

And now we're going to see it actually go and edit the specific file that we tagged.

现在我们将会看到它去编辑我们标记的那个特定文件。

Okay, so we tagged that Fibonacci file. But you'll see it will in fact ask us for permission for the edits.

好的，我们标记了那个斐波那契文件。但你会看到它实际上会请求我们授权进行编辑。

Again, I'm going to keep repeating myself here for a little bit and then I'll stop. Uh, but you are going to want to approve the file. You can see all of these green lines here. Those are files that are being added. If you ever see red here, those file, those lines, those characters, those are getting removed.

我再重复一遍，然后就不再多说。你需要批准这个文件。你可以看到这里所有绿色的行，这些都是要添加的内容。如果你看到红色，那些行、那些字符，都是要被删除的。

So, we're going to accept that. You can see we now have an interesting fact section that is right above the tags like we asked for.

所以，我们接受这个更改。你可以看到，现在我们有了一个“有趣事实”部分，正如我们要求的那样，就在标签的上方。

Now, say we wanted to clear our message history. Say we started working on a new task or something. What we can do is we can just type /cle. I'm going to tab to autocomplete that. Hit return and this is going to clear my session and boom I am now ready for a new chat.

现在，假设我们想清除消息历史。比如说我们开始了一个新任务。我们可以直接输入 `/cle`。我会按 Tab 键自动补全。按回车，这会清除我的会话，然后我就准备好开始新的聊天了。

Okay, so few things. Okay, cloud code can create files, it can edit files, it can remove files, it can also create folders.

好的，总结一下。Claude Code 可以创建文件，可以编辑文件，可以删除文件，还可以创建文件夹。

Okay, so if we wanted something like create a math folder and put the related files in it. One of the things you'll notice is we actually cleared our me message history. So it doesn't actually have any memory about the Fibonacci in nature. Okay.

好的，如果我们想要创建一个数学文件夹并把相关文件放进去。你会注意到，我们实际上清除了消息历史。所以它其实没有任何关于“自然界中的斐波那契”的记忆了。好的。

Uh so what's going to happen is it's actually going to realize oh Fibonacci sequence kind of related to mathematics here. So what we're going to do is we're going to create a new folder and we're going to put that file in it and it's intelligent enough to understand that it needs to do that.

所以，它实际上会意识到，哦，斐波那契数列与数学有关。所以我们会创建一个新文件夹，然后把那个文件放进去，它足够智能，能够理解需要这样做。

And not only is it intelligent enough to do that in this setting where we just have literally two files in here, but it can do that as your vault grows.

它不仅在只有两个文件的情况下足够智能，而且随着你的库不断增长，它也能做到这一点。

So this is again the great thing about an agentic system is cloud code is really just an agent here that's really good at knowing when in and how to use tools.

这再次体现了代理系统的优点：Claude Code 实际上只是一个代理，非常擅长知道何时以及如何使用工具。

In this case, it's searching for all sorts of different mathematically related operations here. It's doing this aentically.

在这种情况下，它正在搜索各种与数学相关的操作。它正在自主地进行这些操作。

We could actually hit CT controllr and that will actually expand if I looks like I need to hit control E. And you can see a lot more uh insight into what's going on here. We're just going to toggle that off with control R. And we're kind of now back to our familiar format here.

我们实际上可以按 `Ctrl+E` 来展开，这样可以看到更多关于后台操作的详细信息。我们再按 `Ctrl+R` 将其关闭，回到我们熟悉的格式。

And you can see it's now trying to run make deer uh which is going to make directory. Okay. It's going to create that math folder which we accept. And then it's going to do one more operation here to put that file inside of that folder. Okay. And boom. Now our Fibonacci and nature file is inside of that folder.

你可以看到它现在正尝试运行 `mkdir`，也就是创建目录。好的。它将创建我们同意的那个数学文件夹。然后它会再执行一个操作，把那个文件移动到文件夹里。好的。然后，砰！现在我们的“自然界中的斐波那契”文件就在那个文件夹里了。

And we did that dynamically without having to specify that this is the file we wanted. Right? Cloud code is very smart. It's kind of able to figure out what you need. The goal is you just want to prompt as clearly uh and kind of directly as possible.

我们是动态完成这个操作的，并不需要指定我们想要移动的是哪个文件。对吧？Claude Code 非常智能，它能够弄清楚你的需求。你的目标就是尽可能清晰、直接地给出提示。

So very cool powerful agentic system. Again, workflow 2 is really just about some of the core basic chat features. We just wanted to show you a few demos of this so that you understand uh kind of what's going on and just uh make sure that you're not intimidated by this and all the different UI things that are popping up. It's just an agent and you just talk to it like you would any other AI app and it kind of just autonomously does things for you. You just need to kind of approve the operations and customize the system to your liking.

这是一个非常酷、功能强大的代理系统。再次说明，工作流2主要介绍了一些核心的基础聊天功能。我们只是想通过几个演示让你了解它的工作原理，确保你不会被它以及弹出的各种用户界面元素吓到。它只是一个代理，你就像和任何其他AI应用交谈一样与它对话，它会为你自主地完成任务。你只需要批准操作并根据自己的喜好定制系统即可。

## 工作流三：语音转文字工具

In workflow number three, we really want to emphasize the importance of using a speechto text tool. So this one's kind of optional, but I promise this one is going to change your life.

在工作流三中，我们想特别强调使用语音转文字工具的重要性。这一步是可选的，但我保证它会改变你的生活。

So this is the speechto text tool that I use. It's called Whisper Flow. The product specifically now is called Flow. You can see uh the URL up here. But all you do here is you're just trying to increase basically the amount of tokens that you can output to the AI.

这是我使用的语音转文字工具，叫做 Whisper Flow，现在产品正式名称是 Flow。你可以在上面看到网址。你在这里做的，基本上就是增加你能输出给 AI 的 token 数量。

So this is just going to speed up your workflow. You can speak tokens. You can speak words about four times faster than you can type them. So if you're somebody like me who's basically working with AIS all day, every day these days, uh it's just much more efficient.

这会加速你的工作流程。你可以用说的来输出 token。你说话的速度大约是打字的四倍。所以，如果你像我一样，现在每天都在和 AI 打交道，这样做效率会高得多。

If you're using a speech to text tool, I can just kind of dictate my own thoughts directly to the AI without having to hammer on a keyboard.

如果我使用语音转文字工具，我就可以直接把我的想法口述给 AI，而不需要敲击键盘。

So, we're going to skip installation here. There's a little bit of a setup here. Uh, you don't even necessarily have to use this tool in particular. May maybe your native device has speech to text functionality.

所以，我们这里跳过安装过程。这里需要一些设置。你甚至不一定非要用这个特定的工具，也许你的设备自带语音转文字功能。

Uh, maybe you have a different tool. The importance is just that you use a speech to text tool and I just wanted to kind of highlight the one that I use.

也许你有别的工具。重要的是你要使用一个语音转文字工具，我只是想重点介绍一下我用的这个。

So, the reason I use Flow here is because a uh it has a really nice Mac and a really nice iOS app. So, as kind of an Apple guy, as you're probably catching on to here, uh, it's very easy for me to kind of sync my whispers or flows or whatever the I actually don't know what the unit is they officially call them here, but one of the things that's common for me is like maybe I'll go on a walk, I'll record the, you know, use the mobile app to to record some of my thoughts. Then I'll come back on desktop and I can just like paste things into notes and then have the AI organize it and things like that.

我使用 Flow 的原因是因为它有非常出色的 Mac 和 iOS 应用。作为一个苹果用户——你可能已经看出来了——对我来说，同步我的“whispers”或“flows”或者他们官方称之为单位的任何东西都非常容易。我常做的一件事是，比如出去散步时，我会用手机应用记录一些想法。然后回到电脑前，我就可以把这些内容粘贴到笔记里，再让 AI 来整理它们。

Uh, but in this case, what we'll do is we'll just jump back to our Obsidian on the right, cloud code on the left setup here.

但在这种情况下，我们就直接回到右边是 Obsidian，左边是 Claude Code 的设置界面。

And what I'm going to do is I just hold down my function key on Mac OS. Again, the reason I love Flow is just because user experience is really great. This isn't like sponsored or anything. Um, uh, if anybody from Flow is watching this, maybe we can get you guys some free credits or something.

我所做的就是在 Mac OS 上按住我的 function 键。再次说明，我喜欢 Flow 的原因就是因为它的用户体验非常棒。这并不是赞助广告之类的。嗯，如果 Flow 的人看到了这个视频，也许我们可以为你们争取一些免费额度之类的。

Um, but I'm just going to hold down my function key and then I'm going to talk.

但我现在要做的就是按住我的功能键，然后开始说话。

All right, Claude, I want you to create a new note. It should be your three favorite dinosaurs and why.

好的，Claude，我希望你创建一个新笔记，内容是你最喜欢的三种恐龙以及原因。

Okay, we're just going to send this off. And you can see that was very quick. It was very instant. All I had to do is hold down my function key and speak.

好的，我们就发送这个指令。你可以看到，这非常快，非常即时。我所要做的就是按住功能键然后说话。

And this isn't the greatest demo here. Uh this is particularly useful when you just kind of want to ramble for a while.

这并不是最好的演示。这个功能在你想要滔滔不绝地说上一段时间时特别有用。

Uh so you can see we just accept that. We now have three favorite dinosaurs from cloud here.

你可以看到我们接受了请求。现在我们这里有了 Claude 最喜欢的三种恐龙。

U but one of the things especially in like my coding workflows is I'll have these sessions where I'm like rambling about a feature I want built for like three or four minutes. And I can just hold my function key. I don't have to type. I don't have to really like think through it. I can just dictate to the AI.

但特别是在我的编码工作流程中，我会有一些时候，会滔滔不绝地讲一个我想要开发的功能，可能会讲三四分钟。这时我只需要按住功能键就行了。我不需要打字，也不需要真正地去思考。我可以直接口述给AI。

And cloud code is powered by smart enough models that kind of figure out what you need even if the speech is like a little messy or jumbled. Um so very very nice way to just sort of 4x your output.

Claude Code 由足够智能的模型驱动，即使你的语音有些凌乱或含糊不清，它也能弄清楚你的需求。所以，这是一个非常好的方式，能让你的输出效率提高大约四倍。

Uh this is one of those things that once I see people get hooked or people try this they get hooked immediately. This is a total game changer to not just your workflow with this particular workflow but anytime that you're actually interacting with an AI especially if you coders out there are working with cloud code in actual code format. Super unbelievable tool. definitely recommend you try a speech to text tool to increase the amount of tokens you can output.

这是那种一旦人们尝试过就会立刻上瘾的东西。这不仅对这个特定的工作流是一个彻底的改变，而且对你任何时候与 AI 互动都是如此，特别是对于那些在实际代码格式中使用 Claude Code 的程序员来说。这是一个超乎想象的工具。我强烈推荐你尝试使用语音转文字工具，来增加你能输出的 token 数量。

## 工作流四：集成 Cursor 编辑器

Workflow number four. So, you're probably wondering, wait, I thought we were using cloud code. Why is cursor here? So, we're going to talk about how you can actually use cursors tab feature, which can be really, really powerful here.

工作流四。你可能在想，等等，我们不是在用 Claude Code 吗？为什么这里出现了 Cursor？我们将讨论如何实际使用 Cursor 的 Tab 功能，这个功能在这里可以非常、非常强大。

Um, if you want to kind of get a little crazy here and use a code editor as your notes editor. So, let's go show you kind of how to do that and I'll explain how this can actually make sense in practice.

如果你想在这里玩得疯一点，把代码编辑器当作你的笔记编辑器。那么，让我来向你展示如何做到这一点，并解释这在实践中是如何有意义的。

One thing that's worth noting just really quick before we do that is that this is probably the most optional of everything that we talk about here.

在我们开始之前，需要快速说明的一点是，这可能是我们在这里讨论的所有内容中最可选的一项。

So, I know the speech to text was also optional. I think speech to text will totally change your life. I think this one's a little bit more niche. This is something that I do like to use, especially when I'm very frequently iterating on a specific file inside of my vault.

我知道语音转文字也是可选的。但我认为语音转文字会彻底改变你的生活。而这一项则更小众一些。这是我确实喜欢用的功能，尤其是在我需要频繁迭代库中某个特定文件的时候。

Um, some of you who are non-coders may not want to work in a code editor, which is totally understandable. But nevertheless, we kind of want to show you uh why cursor tab can be useful for something like Obsidian.

一些非程序员可能不想在代码编辑器中工作，这完全可以理解。但无论如何，我们还是想向你展示为什么像 Cursor 的 Tab 功能对于像 Obsidian 这样的工具会很有用。

So, we're going to go back over to our Obsidian here. And what I'm going to do is I'm actually just going to rightclick on my vault. We're going to reveal this in Finder.

好的，我们回到 Obsidian。我要做的是右键点击我的库，然后在访达中显示它。

Now, this is the important thing about Obsidian, right? Is all of these text files you own. They're on your computer. You can use these in any app you want.

现在，这是关于 Obsidian 最重要的一点，对吧？所有这些文本文件都归你所有。它们在你的电脑上。你可以在任何你想要的应用中使用它们。

So, say I was working in this three favorite dinosaurs or something. Uh, what I could do is you have two options here. You can open the individual file up inside of cursor and work like that, or you can open the entire vault inside of cursor.

比如说，我正在处理这个“三种最喜欢的恐龙”的笔记。这里有两个选择。你可以在 Cursor 中打开单个文件进行编辑，或者在 Cursor 中打开整个库。

In this case, I'm just going to open up the specific file that I want to use. So, I'm actually just going to drag this under cursor. Again, I'm kind of assuming that you have a cursor open here. So, I'm just going to drag this file down here. You're going to see we have our three favorite dinosaurs MD. Okay.

在这种情况下，我只打开我想要使用的特定文件。所以，我实际上只是将这个文件拖到 Cursor 下方。再次说明，我假设你已经打开了 Cursor。我就把这个文件拖到这里，你会看到我们有这个“三种最喜欢的恐龙.md”文件。好的。

Again, one of the great things about markdown files, they translate very well to code editors. So, cursor does in fact make sense.

再次强调，Markdown 文件的一大优点是它们能很好地转换到代码编辑器中。所以，使用 Cursor 确实是合理的。

Now, you can use this file with all of Cursor's own agent features if you wanted to. Uh there's nothing stopping you from doing that. I particularly find that cursor tab can be very useful.

现在，如果你愿意，你可以用这个文件配合 Cursor 自己的所有代理功能。没有什么能阻止你这么做。我个人觉得 Cursor 的 Tab 功能非常有用。

So, cursor tab is cursor's native autocomplete feature. So, one of the things you'll notice is if I change this to four, this is going to start using cursor's tab model.

Cursor Tab 是 Cursor 自带的自动补全功能。你会注意到，如果我把这个改成“四”，它就会开始使用 Cursor 的 Tab 模型。

So, if we actually just do return, I don't even have to do return. This is how great cursor tab is. You can see it's actually just populating a new dinosaur here. And now I can just hit tab, hence the name of the feature here. And that's just going to autocomplete my file.

所以，如果我们直接按回车——我甚至不需要按回车，Cursor Tab 就是这么棒——你可以看到它实际上正在填充一个新的恐龙。现在我只需要按 Tab 键，这个功能的名称也由此而来，它就会自动补全我的文件。

Now, if I save this, you'll see we have a little dot. If I save this and drag this window out, we go back into our Obsidian, you'll notice that this file is saved.

现在，如果我保存这个文件，你会看到一个小点。如果我保存并把这个窗口拖出去，我们回到 Obsidian，你会注意到这个文件已经保存了。

Why is that? Because this is just a single text file. It doesn't matter where we have it open on our computer.

为什么会这样？因为这只是一个单一的文本文件。无论我们在电脑的哪个位置打开它，都没有关系。

You could even build your own user interface for all I care to open up markdown files. The point is that every single one of these text files you own. You edit it one place, it gets edited the other place. Everything syncs well.

你甚至可以自己构建一个用户界面来打开 Markdown 文件。重点是，你拥有每一个这样的文本文件。你在一个地方编辑它，另一个地方也会随之更新。一切都能很好地同步。

So if you're somebody who wants to like do a lot of editing in a file, right, cursor tab can not only do creates, but it can do edits, it can do deletes.

所以，如果你想在一个文件中进行大量编辑，对吧，Cursor Tab 不仅可以创建，还可以编辑、删除。

So if you're working in a really long note, right, say we wanted this to be bullet points, for example, instead of having to go and make every single one of these a bullet point, it's smart enough to kind of figure out what I'm doing. And now we just can kind of like tab through this. Boom. I didn't have to do that manually.

所以，如果你在写一个很长的笔记，对吧，比如说我们想把这些内容变成项目符号列表，那么我不需要手动地去给每一项添加项目符号，它足够智能，能明白我的意图。现在我只需要按 Tab 键浏览。砰！我不需要手动操作了。

Now I can save it. I could of course just ask clot code to do that same thing for me.

现在我可以保存它了。当然，我也可以直接让 Claude Code 帮我做同样的事情。

So if we drag this out and kind of open our terminal here back open, uh we can say please convert and we'll actually tag that file.

所以，如果我们把这个拖出来，然后重新打开我们的终端，我们可以说“请转换”，然后我们实际上会标记那个文件。

Okay, we're starting to tag we're starting to kind of pile these features on top of each other which starts to get where the workflows get really interesting, right?

好的，我们开始标记，开始将这些功能层层叠加，这正是工作流变得非常有趣的地方，对吧？

This become a power user. Even use speech to text here because why not? Please convert the bullet points to numbers.

成为高级用户。甚至在这里使用语音转文字，为什么不呢？请将项目符号转换为数字。

And boom, we'll send this off the clock code and it's going to be intelligent enough to go switch these bullet points back to numbers.

然后，砰！我们把这个任务发送给 Claude Code，它会足够智能地把这些项目符号转换回数字。

Uh, so this is just an example really, really lightweight of using cursor tab, but I think if you start to use your imagination, you can see where that gets interesting.

所以，这只是一个非常轻量级的关于使用 Cursor Tab 的例子，但我想如果你发挥想象力，你会发现它变得有趣的地方。

Again, very very optional here. I know a lot of people are like, well, I don't want to, you know, pay for all these different products. I want to kind of consolidate. So, no need to do that, but a lot of people who are already using cloud code also happen to have cursor plans.

再次强调，这完全是可选的。我知道很多人会说：“我不想为所有这些不同的产品付费，我想整合一下。”所以，没必要这样做。但很多已经在使用 Claude Code 的人，也恰好有 Cursor 的套餐。

If you're somebody like me, uh you can even if you want open your entire vault, open inside of cursor, open up a terminal tab inside of cursor, use cloud code inside of cursor while using tab, right? You can really get pretty wild with some of these workflows, but we just wanted to show you a little bit of a simple version of that.

如果你像我一样，你甚至可以打开整个库，在 Cursor 内部打开，在 Cursor 内部打开一个终端标签页，在 Cursor 内部使用 Claude Code 的同时使用 Tab，对吧？你可以用这些工作流程玩出很多花样，但我们只是想向你展示一个简单点的版本。

So, let's move on to the next one.

好的，我们继续下一个。

## 工作流五：计划模式

In workflow number five, we're going to talk about plan mode. So, plan mode is accessible inside of cloud code if you do shift tab once.

在工作流五中，我们将讨论“计划模式”。在 Claude Code 中，按一次 Shift+Tab 就可以进入计划模式。

Shift tab is going to do auto accept edits on. So, let's actually just do a quick little side bonus tip here. Autoaccept edits on accepts everything that Claude does. So, you've seen me kind of approve Claude's actions. If you don't want to manually prove that, you can turn auto accept edits on and it's just going to accept everything.

Shift+Tab 会开启“自动接受编辑”。这里我们来分享一个额外的小技巧。“自动接受编辑”开启后，会接受 Claude 所做的一切。你之前看到我需要手动批准 Claude 的操作。如果你不想手动批准，可以打开“自动接受编辑”，它就会自动接受所有操作。

Now, this can obviously be a little bit dangerous. Um, I recommend not turning this on until you've kind of coordinated the permission system inside of Claude on your own a little bit or at least just gotten familiar with how it works so that you can kind of keep an eye on it.

显然，这可能会有点危险。我建议在你对 Claude 内部的权限系统有了一定的协调和了解，或者至少熟悉了它的工作方式之后，再开启这个功能，这样你才能留意它的行为。

Uh, because, you know, you don't want it to do things like editing your entire uh, you know, obsidian vault with all these notes you've diligently kept, right?

因为，你肯定不希望它把你辛辛苦苦整理的 Obsidian 库里的所有笔记都给编辑了，对吧？

Uh, so you want to be a little bit careful with that one.

所以，对待这个功能要格外小心。

So, one of the nice things that you can do to help it stay a little bit more on track though is if you hit shift tab one more time, you're going to see plan mode turns on here kind of in green here. At least with the theme that I have running here.

不过，为了让它更好地遵循你的意图，有一个很好的功能：如果你再按一次 Shift+Tab，你会看到“计划模式”在这里开启了，显示为绿色，至少在我当前使用的主题下是这样。

What plan mode does is it actually makes sure that cloud code doesn't do anything. It doesn't perform any actions. It's just going to take your prompt, create a plan, and then you have an opportunity to either approve that plan or reject that plan.

计划模式的作用是确保 Claude Code 不会执行任何操作。它不会采取任何行动，只会接收你的提示，创建一个计划，然后你有机会批准或拒绝该计划。

Let's go ahead and take advantage of our speechto text tool here and give it a little bit of a basic prompt and then we can kind of see how plan mode works.

让我们利用语音转文字工具，给它一个基础的提示，然后我们来看看计划模式是如何工作的。

I want you to go to the anthropic docs and I want you to figure out how the cloud code SDK works. I'm interested in building an express server to build uh automations with the cloud code SDK.

我希望你访问 Anthropic 的文档，并弄清楚 Claude Code SDK 的工作原理。我有兴趣构建一个 Express 服务器，以便使用 Claude Code SDK 来创建自动化流程。

Okay, so you can see that is now inside of my prompt here. I send this off to cloud code and because we're in plan mode, cloud is going to kind of think through this and reason throughout things.

好的，你可以看到这个提示现在已经输入了。我把它发送给 Claude Code，因为我们处于计划模式，Claude 会思考并推理整个过程。

One thing that you'll notice too here is we actually have uh access to web search. So Claude can search the web, which is kind of a nice bonus little workflow tip here is we're going to actually take advantage of number two here.

你还会注意到，我们实际上有网页搜索的权限。所以 Claude 可以搜索网络，这是一个不错的额外工作流小技巧。我们实际上要利用这里的第二项。

So anytime now Claude will not ask permission for going to the docs on anthropic.com. Here you can see we get a nice URL preview. So now because I've selected that option, it can just autonomously do that without having to ask me for permission every time, which is particularly useful in this research case because it's probably going to go through a different uh few different URLs here to figure out what's kind of going on with this SDK.

所以现在 Claude 访问 anthropic.com 上的文档时将不再请求许可。这里你可以看到一个很好的 URL 预览。现在因为我选择了那个选项，它可以自主地执行，而不需要每次都请求我的许可，这在研究场景下特别有用，因为它可能会访问几个不同的 URL 来弄清楚这个 SDK 的情况。

So couple bonus tips here already, right? We've gotten the auto accept mode uh and then we also have web search abilities.

所以这里已经有几个额外的技巧了，对吧？我们有了自动接受模式，还有了网页搜索能力。

So cloud code does have quite a bit of uh feature depth to it if you really really want to get crazy here.

所以，如果你真的想深入探索，Claude Code 确实有很多功能深度。

But we can see it's just trying to figure out what's going on. It's not writing any files, right? It's just doing research.

但我们可以看到它只是在试图弄清楚情况。它没有写入任何文件，对吧？它只是在做研究。

So, note-taking, of course, is a very broad discipline. I kind of batch research in with note-taking. You know, one of the things that I do when I'm writing code is I do a lot of research. I like to take a lot of notes in my projects.

当然，记笔记是一门非常广泛的学科。我倾向于将研究和记笔记结合起来。你知道，我在写代码时会做大量的研究。我喜欢在我的项目中记很多笔记。

So, inside of my vault, you know, I have a folder for my projects and then if I need Cloud to go like search some docs or something, figure out how like a certain API works or a certain software library works, I can just hand that right off to Cloud Code.

所以，在我的库里，我有一个项目文件夹。如果我需要 Claude 去搜索一些文档，或者弄清楚某个 API 或软件库的工作原理，我就可以直接把这个任务交给 Claude Code。

Can go do that research task autonomously while I'm working on something else. I can have plan mode on so that I can kind of come back and make sure that all of the things that it writes directly to my vault. I kind of approve all that sort of stuff.

它可以在我做别的事情时，自主地去完成那个研究任务。我可以开启计划模式，这样我回头就可以确保它写入我库里的所有内容都经过我的批准。

So, let me just kind of sit here for a second and I'll speed this up once it's done with its research task and we'll take a look at plan mode.

好的，让我在这里稍等片刻，一旦它完成了研究任务，我会加快进度，然后我们来看看计划模式。

Looks like cloud code is done with my plan. I can kind of scroll up. You can see it's boxed in here which is sort of the user interface inside of the terminal. Anthropic's really done a quite a good job with trying to make the user interface inside of the terminal good despite it just being a terminal based program here.

看来 Claude Code 已经完成了我的计划。我可以向上滚动，看到它被框起来了，这是终端内部的用户界面。尽管这只是一个基于终端的程序，Anthropic 在努力使终端内的用户界面变得好用方面做得相当不错。

So, you can see we're given two options. Yes, which this is just going to accept the plan and no, which is keep planning.

所以，你可以看到我们有两个选项。一个是“是”，这将接受计划；另一个是“否”，即继续规划。

And what I can actually do is I can give it a little bit more feedback here. So what's going to happen here is we should just kind of read through this.

我实际上可以给它更多一些反馈。所以，我们应该先通读一下这个计划。

So what we're going to do is we can see okay cloud code SDK allows you to run cloud code as a subprocess. Okay, everything here looks pretty good.

我们要做的是，我们可以看到，好的，Claude Code SDK 允许你将 Claude Code 作为子进程运行。好的，这里的一切看起来都很好。

So what I'm going to do is I'm going to hit note and keep planning. What we're actually going to do is we're going to say uh we want this documented in a cloud code SDK note.

所以，我要做的是点击“记录”并继续规划。我们实际上要做的是，我们希望将此内容记录在一个名为“Claude Code SDK”的笔记中。

So, we're just going to make sure it knows, hey, we actually want to take all the research that you just did. We actually want to add it to Obsidian Bault.

所以，我们只是要确保它知道，嘿，我们实际上想把你刚刚做的所有研究都拿过来。我们想把它添加到 Obsidian 库里。

Of course, it's not going to add that yet because plan mode is still on as indicated below the text input here.

当然，它现在还不会添加，因为计划模式仍然开启，如下方文本输入框所示。

And you can see we would now like it to proceed. So, let's go ahead and hit yes.

你可以看到我们现在希望它继续。所以，我们点击“是”。

And one of the things you'll notice is it actually turns auto accept mode on by default. So, we can actually shift to tab back to regular here.

你会注意到，它默认开启了自动接受模式。所以，我们实际上可以按 Shift+Tab 回到常规模式。

You can see Cloud Code is actually tracking its own internal to-do system, which is kind of cool.

你可以看到 Claude Code 实际上在追踪它自己的内部待办事项系统，这很酷。

So, what's going to happen is it's probably going to ask me for permission to create the note. I'm actually just going to go back to autoac accept edits on just to show you how that works here because it's kind of one of the little bonus tips we're going to do in this workflow number five here.

所以，接下来它可能会请求我授权创建笔记。我实际上要回到自动接受编辑开启的状态，只是为了向你展示它是如何工作的，因为这是我们在工作流五中要介绍的一个小技巧。

So, we can just kind of let this thing work for a little bit here. Um, I might speed this up just a little bit so you guys aren't watching forever.

所以，我们可以让它在这里运行一会儿。嗯，我可能会稍微加快一点，这样你们就不用一直等着了。

So, as you can see here, Cloud Code is now auto accepting the file creation here. It wrote to that file. It's kind of tracking its internal to-do system.

如你所见，Claude Code 现在正在自动接受文件创建。它已经写入了那个文件，并且正在追踪其内部的待办事项系统。

You can see over here in our vault, if I click on cloud code SDK, we now have this entire documented um kind of explanation of how to use the cloud code SDK with an express server.

在我们的库里，如果你点击 Claude Code SDK，你现在可以看到一个完整的文档，解释了如何将 Claude Code SDK 与 Express 服务器结合使用。

You can see we even get things like code blocks. Again, cloud code very very good at using markdown like all AI models are these days.

你可以看到我们甚至得到了代码块。再次强调，Claude Code 非常擅长使用 Markdown，就像现在所有的 AI 模型一样。

You can see it is now done with the task. We were able to kind of figure out what we needed from it. You can do this with much more complex tasks of course. So if you want to use plan mode for something that has like a dozen plus steps, totally can.

你可以看到任务现在已经完成了。我们大致搞清楚了我们需要它做什么。当然，你也可以用它来处理更复杂的任务。所以，如果你想用计划模式来处理有十几个步骤的事情，完全可以。

You can just continue to iterate on the plan back and forth with cloud code until it is configured to your liking. Hit that yes accept plan button and then you can either auto accept everything it does or you can kind of improve it manually one step at a time.

你可以与 Claude Code 反复迭代计划，直到它配置成你喜欢的样子。点击“是，接受计划”按钮，然后你可以选择自动接受它所做的一切，或者手动地一步步改进它。

Obviously in this case we did auto accept edits but that's plan mode. That is a way to kind of plan complex tasks.

显然，在这种情况下，我们选择了自动接受编辑，但这就是计划模式。这是一种规划复杂任务的方式。

Really comes in handy with things like researching um things about like organizational tasks where you really want to make sure cloud is going to be doing the right thing.

在研究组织性任务等事情时，这个功能真的非常方便，因为你真的想确保 Claude 会做正确的事情。

Ton of opportunity here. Again, one of the things that's great about Cloud Code is just how flexible it is, right? Obviously, it's powerful, but it's also very malleable and flexible. You pretty much get it to do whatever you want. And one of the best ways to get it to do whatever you want is to use plan mode.

这里有大量的机会。再次强调，Claude Code 的一大优点就是它的灵活性，对吧？显然，它功能强大，但同时也非常易于塑造和灵活。你几乎可以让它做任何你想做的事。而要让它做任何你想做的事，最好的方法之一就是使用计划模式。

## 工作流六：自定义命令

Workflow number six, we're going to talk about custom command. So, this is very, very powerful.

工作流六，我们来谈谈自定义命令。这非常、非常强大。

A custom command inside of Cloud Code is basically like a reusable prompt that can be very detailed and it can kind of outline to cloud code what task you want done.

Claude Code 中的自定义命令，基本上就像一个可重用的提示，可以非常详细，并且能向 Claude Code 概述你想要完成的任务。

So, if you have things that you're doing very often inside of your notes, this can be something that's very powerful.

所以，如果你在笔记中经常做某些事情，这会是一个非常强大的功能。

So, for example, in my own workflow, one of the things that I do is I have kind of a daily template. And one of the things that I do now with cloud code is instead of having to go like copy my daily template and like paste it in and configure it with some kind of starter information based on the day, I just use the daily template, which of course isn't here because it's not in this vault.

举个例子，在我自己的工作流中，我有一个每日模板。现在有了 Claude Code，我不再需要去复制我的每日模板，粘贴进来，然后根据当天的信息进行一些初始配置。我直接使用每日模板命令——当然这里没有，因为它不在此库中。

And then what I'll do is I'll just kind of use my speech to text tool. Talk about some of my goals like, hey, I want to get XYZ done today, right? Use speech to text.

然后我会用我的语音转文字工具，说出我的一些目标，比如：“嘿，我今天想完成 XYZ”，对吧？使用语音转文字。

And now I kind of combine those two things into a reusable command, this daily template command. And that goes, it creates my new daily template. I have some instructions on like where I want that organized, how I want that formatted, all that kind of stuff.

现在我把这两件事结合成一个可重用的命令，也就是这个每日模板命令。它会去创建我的新每日模板。我有一些指令，比如我希望它组织在哪里，希望它如何格式化等等。

So, what we're going to do in this section is we're going to show you how you can actually create one of those on your own.

所以，在这一部分，我们将向你展示如何自己创建一个这样的命令。

This is going to get a little bit weird and I apologize for that just because of a little bit of a jank in how Obsidian works.

这可能会有点奇怪，我为此道歉，这只是因为 Obsidian 的工作方式有点小问题。

So, if I actually drag in my finder here, again, the way that you can access your Obsidian Vault uh folder kind of at the very parent is you can just click the right click rather in the bottom left of Obsidian here and just reveal and find her.

如果我把我的访达拖进来，再次说明，访问 Obsidian 库的根目录的方法是，在 Obsidian 左下角右键点击，然后选择“在访达中显示”。

That's going to pop up in your vault. So, you just want to make sure you go in your vault. And one of the things that Claude does is it actually creates a claude folder.

它会在你的库中弹出。所以，你只要确保进入了你的库。Claude 会做的一件事是，它实际上会创建一个 `.claude` 文件夹。

So, if I do uh shift command dot here on Mac, this is going to show hidden folders. the convention, at least on Mac, I'm actually not sure how it is on Windows, but if you have folders that are kind of uh prefixed with a dot, it will actually hide them in the finder by default.

如果在 Mac 上按 `Shift+Command+.`，就会显示隐藏文件夹。至少在 Mac 上，惯例是如果你有以点开头的文件夹，访达会默认隐藏它们，我不确定 Windows 上是怎样的。

So, this can get a little bit tricky for things like Git, for things like GitHub folders, which is very popular if you're a coder.

所以，对于像 Git、GitHub 文件夹这类东西，这可能会有点棘手，如果你是程序员的话，这些很常用。

Obsidian, in this case, has aobsidian folder that it hides with a bunch of different configuration stuff. And then claude, of course, has the Claude folder. So, you're actually going to need to edit this outside of Obsidian, which I know is like a little bit janky, not the best workflow, but hey, what can you do?

在这种情况下，Obsidian 有一个 `.obsidian` 文件夹，它隐藏了许多不同的配置文件。然后，Claude 当然也有 `.claude` 文件夹。所以，你实际上需要在 Obsidian 之外编辑这个，我知道这有点蹩脚，不是最好的工作流程，但嘿，能怎么办呢？

Because in Obsidian in the file explorer, it hides all these dot folders just like Mac does by default, but there's no way to show them. A little bit of an interesting design decision, but that's a conversation for another day.

因为在 Obsidian 的文件浏览器中，它像 Mac 默认那样隐藏了所有这些以点开头的文件夹，但没有办法显示它们。这是一个有点有趣的设计决策，但这得改天再谈了。

So, what we want to do inside of the cloud folder is we're actually going to create a commands folder.

所以，我们想在 `.claude` 文件夹里创建一个 `commands` 文件夹。

So, what we want to do here is we're going to create a new folder called commands. And I actually just need to drag that inside of Cloud here.

所以，我们在这里要做的是创建一个名为 `commands` 的新文件夹。我只需要把它拖到 `.claude` 文件夹里。

So what your file structure should look like is you should have your vault. Okay, so we have the entire vault here. We should have thecloud folder, which at this point you should now have. Uh Claude should have created this for you by now, but if you don't have it, you need to create a cloud folder. And then inside of thatcloud folder, you need a commands folder. So this is where we're going to be creating our new commands.

你的文件结构应该是这样的：你有一个库。好的，我们这里有整个库。你应该有 `.claude` 文件夹，此时你应该已经有了。Claude 现在应该已经为你创建了它，但如果你没有，你需要创建一个 `.claude` 文件夹。然后在那个 `.claude` 文件夹里，你需要一个 `commands` 文件夹。这就是我们要创建新命令的地方。

So what I'm actually going to do is I'm actually just going to drag this folder open inside of cursor. We're going to be using cursor as our text editor. So you can use again you can use any text editor that you want.

我实际要做的是，我将把这个文件夹拖到 Cursor 中打开。我们将使用 Cursor 作为我们的文本编辑器。你可以使用任何你想要的文本编辑器。

Uh you can see we just have this commands folder open. So we are just going to be creating new text files. And all commands are also markdown files.

你可以看到我们刚刚打开了这个 `commands` 文件夹。所以我们只需要创建新的文本文件。而且所有的命令也都是 Markdown 文件。

So if we do something like um get time get-time markdown we could just create a heading get time and we'll just say please please get me the current time.

所以如果我们创建一个叫做 `get-time.md` 的文件，我们可以创建一个标题 `get time`，然后写上“请告诉我当前时间”。

Right? Okay. And then what we could do here, you'll see uh if we go back to our uh finder here, you'll see we have that file of course.

对吧？好的。然后我们可以在这里看到，如果我们回到我们的访达，我们当然有那个文件。

And now what we can do is we can do slash. But wait, we actually have to restart our cloud session.

现在我们可以输入斜杠了。但是等等，我们实际上需要重启我们的 Claude 会话。

So this is something I see that people do all the time is they'll create a new command. And you actually have to exit out of your session, start a new one, and then if we do slash, we actually now get all of our custom commands a slash command.

我发现人们经常这样做：他们会创建一个新命令。但你实际上必须退出你的会话，然后重新开始一个，然后如果我们输入斜杠，我们现在就能得到所有自定义的斜杠命令了。

So now you'll see that that get time command is in fact loaded. So what we can do is we can just start typing get. You can see it's already highlighted. So, we can just tab autocomplete that and send this off. And it's going to go ahead and get the current time.

现在你会看到那个 `get-time` 命令实际上已经加载了。所以我们可以直接开始输入 `get`。你可以看到它已经被高亮显示了。所以，我们可以按 Tab 键自动补全，然后发送。它就会去获取当前时间。

So, you can see it's Monday, July 7th. Um, I'm trying to get a couple extra sneak sneak a couple extra workflow videos in here before I post this tomorrow.

你可以看到今天是7月7日，星期一。我正努力在明天发布之前，再悄悄地加几个工作流视频进来。

Um, but uh so you can see that's like the most very basic version of a command that's obviously not particularly interesting.

嗯，但所以你可以看到，这只是一个命令的最基本版本，显然不是特别有趣。

So, what I'll show you is I'll show you uh something that I use, right, which is like that daily template command.

所以，我来给你展示一个我用的东西，对吧，就是那个每日模板命令。

So, I could do daily- template markdown. Again, all these have to be markdown files inside of the commands folder which is inside of that.cloud folder. And the reason that we're having to edit this inside of cursor again you can use any app you want is because obsidian hides those.

所以，我可以创建一个名为 `daily-template.md` 的文件。再次强调，所有这些文件都必须是位于 `.cloud` 文件夹内的 `commands` 文件夹中的 Markdown 文件。我们之所以不得不在 Cursor 中编辑这个文件（当然你可以用任何你喜欢的应用），是因为 Obsidian 隐藏了那些文件夹。

So we can't actually directly uh do that in obsidian.

所以我们无法直接在 Obsidian 中操作。

So for daily template I would do like daily template and you know maybe we want uh this um little you know we'll just accept whatever cursor tabs uh going to give us today.

所以对于每日模板，我会创建一个标题“每日模板”，然后也许我们想要一些内容……我们就接受 Cursor Tab 今天给我们的任何建议吧。

And what I can do here is I can also at the very start say you are given the following context. This is something I do all the time.

我在这里还可以做的，是在最开始说“你被给予了以下上下文”。这是我一直做的事情。

Claude actually has a way to give the context that you give to a command after you use the slash. So if I say hi there, right? If we want this hi there injected into this command. What we actually have to do is we actually have to use this dollar sign arguments and all caps here. We want to make sure we spell that correctly, of course.

Claude 实际上有一种方法，可以在你使用斜杠后，将你给命令的上下文传递过去。所以如果我说“你好”，对吧？如果我们想把这个“你好”注入到这个命令中，我们实际上需要使用美元符号加大写字母的 `ARGUMENTS`。当然，我们要确保拼写正确。

And what's going to happen is that hi there would get injected right here.

然后，“你好”就会被注入到这里。

So what's very common in my own personal commands, right, is I'll give it a heading of whatever the name is and then I'll say you are given the following context. I'll include that dollar sign arguments keyword here and then I'll actually go about what I need.

所以在我的个人命令中，很常见的做法是，我会给它一个标题，就是命令的名称，然后我会说“你被给予了以下上下文”。我会在这里包含那个美元符号 `arguments` 关键字，然后我才会真正开始我需要做的事情。

So you can do all sorts of things in here, right? You can say um you know one of the things I could do is I could say like please create this in the and we'll call this um you know daily- updates folder. We could save this uh and then we could have this like basic template.

所以你可以在这里做各种各样的事情，对吧？你可以说，嗯，比如我可以做的一件事是，我说，请在这个文件夹里创建，我们称之为“每日更新”文件夹。我们可以保存这个，然后我们就可以有这个基础模板。

So what's going to happen now is of course because I created a new command we do need to reset our cloud session here and now I can do slash daily template and now I can type here I can speak here with my speechtoext tool and I could just say hey I'm super blocked by the last few lessons of my cloud code obsidian workflow.

所以现在，因为我创建了一个新命令，我们当然需要在这里重置我们的 Claude 会话。现在我可以输入 `/daily-template`，然后我可以在这里输入，或者用我的语音转文字工具说话，我可以这样说：“嘿，我的 Claude Code Obsidian 工作流的最后几节课让我非常头疼。”

And what's going to happen is we can send this off. This is going to uh actually get injected into my prompt here, right? You can just think of commands as prompts.

接下来，我们可以把这个发送出去。这实际上会被注入到我的提示中，对吧？你可以把命令就看作是提示。

And what's going to happen is it's going to create a new file inside of daily updates.

接下来，它会在“每日更新”文件夹里创建一个新文件。

And you'll even notice our vault doesn't have daily updates. That's totally fine because Cloud can do that all in one operation.

你甚至会注意到我们的库里并没有“每日更新”这个文件夹。这完全没问题，因为 Claude 可以在一个操作中完成所有事情。

And now we have this new daily updates folder here. Uh and let's say, you know, we wanted to go look at that. You can see those blockers are now injected right here. We got the title. Uh we got kind of the daily update for January 8th. And we could be as specific as we want, right?

现在我们有了这个新的“每日更新”文件夹。比方说，我们想去看看。你可以看到那些障碍现在被注入到这里了。我们有了标题，还有了1月8日的每日更新。我们可以根据需要设定得非常具体，对吧？

you'll see like this isn't a very clean date format. So, one of the things that we would do inside of our command, right, is we would just specify, hey, this is how we want the date.

你会发现这个日期格式不是很干净。所以，我们可以在命令里做的一件事就是，指定我们想要的日期格式。

This is how we want things formatted. This is where we want that file created, right?

这就是我们希望内容格式化的方式，这就是我们希望文件创建的位置，对吧？

Maybe, you know, we haven't talked about MCP yet, but maybe we have some MCP connections. And we can say like, hey, uh, you know, pull from this MCP tool or use this tool inside of that connection, right?

也许，我们还没谈到 **MCP** (模型上下文协议：一种让人工智能模型与外部工具和服务集成的标准)，但也许我们有一些 MCP 连接。我们可以说：“嘿，从这个 MCP 工具中提取数据”，或者“在那个连接中使用这个工具”，对吧？

You can get super crazy with commands. Commands are incredibly composable and powerful. I'm just showing you the very, very, you know, we're just scratching the surface here. So, commands are, think of them as like reusable prompts. the kind of recipes that you can give to cloud code for things that you're doing all the time, right?

你可以用命令玩出很多花样。命令具有难以置信的可组合性和强大功能。我只是向你展示了冰山一角。所以，命令，可以把它们想象成可重用的提示，是你为 Claude Code 准备的，用来处理你一直在做的那些事情的“配方”，对吧？

In my own personal coding workflow, right? I have commands for things like generating plans, things for using git operations, all sorts of stuff. So, that's one of kind of the most powerful workflows you can really go crazy on, and I highly recommend you experiment with it.

在我自己的个人编码工作流程中，对吧？我有一些命令，用于生成计划、使用 Git 操作等等各种事情。所以，这是你可以尽情发挥的最强大的工作流程之一，我强烈建议你进行实验。

## 工作流七：自动化标签、链接与组织

In workflow 7 here, we're going to get into things like automated tags, linking, and organization. So, this is a really, really powerful one, especially for those of you who are super into things like knowledge bases.

在第七个工作流中，我们将探讨自动化标签、链接和组织等功能。这是一个非常、非常强大的功能，特别是对于那些非常热衷于知识库的人来说。

If you really like things like wiki style links and tags in your notes, if you want to kind of make more connections across your different files, especially as your vault grows, I know that's something I really like because, you know, as your vault grows and grows and grows, can be difficult to kind of maintain that knowledge graph.

如果你非常喜欢笔记中的维基式链接和标签，如果你想在不同的文件之间建立更多的联系，特别是随着你的库不断增长，我知道这是我非常喜欢的功能。因为，你知道，随着你的库越来越大，维护那个知识图谱会变得很困难。

Uh, which, you know, I'm somebody who can definitely get a little bit obsessive over my knowledge graph. I just think it's the compounding effects of it over years and years is really, really cool.

我是一个会对我的知识图谱有点痴迷的人。我只是觉得它多年来积累的复利效应真的非常、非常酷。

But one of the things that you can use cloud code for is to help you do a lot of that more automatically. So, I'm going to show you an example of this for tags, but you can also extrapolate this for wiki style links and for file organization in general.

但是，你可以使用 Claude Code 来帮助你更自动化地完成很多这样的工作。我将以标签为例向你展示，但你也可以将其推广到维基风格的链接和一般的文件组织中。

So, one of the things that we're going to do, and I highly recommend that you do this because this kind of sets the foundation of your system, is you want to instruct Claude Code to create a tags file for your tagging system.

所以，我们要做的一件事，而且我强烈建议你这样做，因为它为你的系统奠定了基础，那就是你希望指示 Claude Code 为你的标签系统创建一个标签文件。

So what we're going to do here is we're going to create a little bit of a prompt to cloud code and we're just going to kind of work through what a really really basic v1 version of that would look like.

我们要做的是，给 Claude Code 创建一个小提示，然后我们会逐步完成一个非常基础的 V1 版本。

So I'm just going to say please create a and I do this in all caps tags.md file at the root. This just means at the very base level of the vault. In the file you need to define rules for our tagging system with hashtags inside of our obsidian vault. Okay.

所以我就说“请在根目录创建一个全大写的 TAGS.md 文件”。这只是意味着在库的最底层。在文件中，你需要为我们的 Obsidian 库内的标签系统定义使用井号的规则。好的。

And what's going to happen here is Claude at the very base of our vault is going to create this tags file. This tags file is very nice because now anytime that we want Claude code to autonomously handle tagging in any of our files, in any of our folders at any time, we can always tell it to kind of reference our tags.md file.

接下来，Claude 会在我们的库的根目录下创建这个标签文件。这个标签文件非常好用，因为现在无论何时我们想让 Claude Code 在任何文件、任何文件夹中自主处理标签，我们都可以告诉它参考我们的 `tags.md` 文件。

And this is something that we want to keep updated. Uh not only can we keep it updated, but Cloud Code can keep it updated. So we're just going to kind of create this right away.

这是我们需要保持更新的东西。我们不仅可以自己更新，Claude Code 也可以更新它。所以我们就直接创建这个文件。

Okay. And you can see we now have this tags file.

好的。你可以看到我们现在有了这个标签文件。

So when you are creating this for your own system, you're really going to want to put in the time to actually curate this, of course, according to how you like tags done. In this case, we're just going to kind of accept the defaults, but this is very similar to the kind of claw rules in that tags is almost kind of the grounding layer of our tagging system.

所以，当你为自己的系统创建这个文件时，你真的要花时间去策划它，当然，要根据你喜欢的标签方式来做。在这种情况下，我们只是接受默认设置，但这与那种“抓取”规则非常相似，标签几乎是我们标签系统的基础层。

So you can see it came up with a bunch of different things. Um, you obviously again customize this to your liking.

所以你可以看到它提出了很多不同的东西。嗯，你显然可以根据自己的喜好再次定制这个。

But one of the things that you want to do is you want to now tell cloud code that in its kind of cloud file like hey anytime you go about doing tagging make sure you reference this tags file because this tags file is kind of the source of truth.

但你要做的一件事是，现在你要告诉 Claude Code，在它的那种云文件中，嘿，任何时候你进行标记，都要确保引用这个标签文件，因为这个标签文件是事实的来源。

So I'm going to use speech to text here and just do this autonomously with cloud code. Okay.

所以我将在这里使用语音转文字功能，并让 Claude Code 自主完成这项任务。好的。

Now we need to make sure to update our claude.md file here. That's the rules for your system prompt. We just need to make sure that anytime you go about tagging, you reference tags. We want this to be the source of truth for our tagging system. And we want to make sure that you also keep this updated over time.

现在我们需要确保更新这里的 `claude.md` 文件。这是你系统提示的规则。我们只需要确保任何时候你进行标记时，都引用 `tags` 文件。我们希望它成为我们标记系统的真实来源。我们还要确保你随着时间的推移不断更新它。

I'm just going to send that to cloud code. And what's going to happen now is it's going to actually dynamically alter this cloud.

我这就把指令发送给 Claude Code。现在它会动态地修改这个云文件。

MD file here. So you can see it's creating a very basic little to-do system here.

这里的 MD 文件。所以你可以看到它正在创建一个非常基础的小待办事项系统。

It's going to ask us permission to edit the file. It's going to add somewhere in here some notes on how it should actually go about using the tags file.

它会请求我们授权编辑文件。它会在这里的某个地方添加一些关于如何实际使用标签文件的说明。

Again, in your own workflows, you're going to want to make sure um that it uh does that autonomously here.

再次强调，在你自己的工作流程中，你要确保它能在这里自主地完成这项工作。

So, you can see here we got one update here, which is this tags line right here.

所以，你可以看到这里我们得到了一个更新，就是这里的标签行。

You can see see tagging system section below. And now it's actually creating the tagging section. So, we're going to accept that.

你可以看到下面的“标签系统”部分。现在它正在创建标签部分。所以，我们接受这个。

And now down here, you can see important always reference tags.mmd for tagging rules. So, this is where claudit system prompt now, right? This is the basically the rules for claude code is it's going to reference that.

现在，在下面这里，你可以看到“重要：始终参考 tags.md 获取标签规则”。所以，这就是 Claude 的系统提示现在的位置，对吧？这基本上是 Claude Code 的规则，它会参考这个文件。

It's going to see this every single time we run any cloud code session. So anytime it updates our tags, it's now going to go about that.

每次我们运行任何 Claude Code 会话时，它都会看到这个。所以，任何时候它更新我们的标签，它现在都会按照这个规则来做。

So let's actually ask us for a demonstration. Please give us a quick demonstration to make sure that this works and we should hopefully see it whether it edits an existing file or creates a new one.

那么让我们来要求一个演示吧。请给我们做一个快速演示，以确保这能正常工作。我们希望能看到它无论是编辑现有文件还是创建新文件都能生效。

So it looks like it's going to check tags.md for appropriate tags and then create a sample note here.

所以它看起来会检查 `tags.md` 以寻找合适的标签，然后在这里创建一个示例笔记。

Again, this this makes a lot more sense once you have your own personal vault with many many different files here.

再次强调，一旦你有了自己的、包含许多不同文件的个人库，这个功能就会更有意义。

Um, worth noting too, you can actually just create vaults for different things.

嗯，值得一提的是，你实际上可以为不同的东西创建不同的库。

I know people who will go about it that way, too, if you want to kind of silo things and have, you know, certain pieces of your, uh, workflow be more separate.

我知道有人也这样做，如果你想把事情隔离开来，让你的工作流程的某些部分更独立。

Uh, you don't necessarily have to give Cloud Code root access to every single thing. You can kind of divvy it up, which is kind of cool.

你不需要给 Claude Code 对所有东西的根访问权限。你可以把它分开，这很酷。

So, we have sample meeting notes here. Just go ahead and click sample meeting notes. And presumably, you can see there's actually an error with how it must do numbers in tags.

这里我们有会议记录样本。直接点击会议记录样本。据推测，你可以看到它在处理标签中的数字时实际上出错了。

So, we would maybe have to go update our tags roles to account for something like that. Kind of teach the AI how to work.

所以，我们可能需要去更新我们的标签规则，以应对类似的情况。算是教 AI 如何工作。

But overall, uh, got a few things done here, which is nice.

但总的来说，这里完成了一些事情，这很好。

Presumably, this follows the system rules here. We're not going to like dive into that. Again, I think you get the idea here. This is this is where you want to define your rules for your tagging system. And you just want to make sure inside of your main rules file, your cloud. MD file, that you kind of mention the tagging system so that at the very minimum just knows to reference that file and to keep things uh up to date over time.

据推测，这遵循了这里的系统规则。我们不会深入探讨。再次强调，我想你已经明白了。这就是你定义标签系统规则的地方。你只需要确保在你的主规则文件，也就是你的 `cloud.md` 文件中，提到标签系统，这样它至少知道要参考那个文件，并随着时间的推移保持更新。

So, that's kind of a really nice way you can create an automated tagging system.

所以，这是一种创建自动化标签系统的非常好的方法。

You can do things like combining this with commands, right? So, say I wanted to create a command for tagging a file. Maybe I have a command called like tag-file, right? And maybe in the inside of that command, I say like, hey, uh, you know, go inside of whatever file I've tagged and update it with some tags, you know, and you have some instructions there.

你可以做一些事情，比如把这个和命令结合起来，对吧？比如说，我想创建一个给文件打标签的命令。也许我有一个叫做 `tag-file` 的命令，对吧？然后也许在那个命令内部，我说：“嘿，进入我标记的任何文件，并用一些标签更新它”，然后你给出一些指令。

Maybe we do tag folder. Maybe this is for specifically tagging folders, right? You can kind of start to chain commands with dynamic organization and things like that.

也许我们做的是标记文件夹。也许这是专门用来标记文件夹的，对吧？你可以开始将命令与动态组织等功能串联起来。

And then, of course, you can do things like creating a wiki link uh wiki wiki links. I always see a little bit of a tongue twister there that right to do something like this uh if you wanted wiki style links which is very popular in knowledgebased applications.

当然，你还可以做一些事情，比如创建维基链接。我总觉得那有点绕口令，但如果你想要维基风格的链接，这在基于知识的应用中非常流行。

So you could do something like that where you you know create a new note called like wiki links.md obviously you don't do the d in title you get what I mean right if you want things for uh organization this is another one I use in my own personal vault organization and then anytime uh cloud code creates new files and folders it kind of has a good sense of structure in which I like things organized.

所以你可以做类似的事情，比如创建一个名为 `wiki-links.md` 的新笔记——当然标题里不能有“d”，你懂我的意思吧——如果你想做一些组织性的工作。这是我在我个人库的组织中使用的另一个功能。然后任何时候 Claude Code 创建新的文件和文件夹，它都能很好地掌握我喜欢的组织结构。

So, there's a couple different ways you can build automated systems around organizational features, but in particular, uh, tags, very core one that's very nice to do. The wiki links one, very nice to do, and then organization of like files and folders, another really nice one to do. So, highly recommend you take advantage of that in conjunction with things like slash commands.

所以，围绕组织功能，你可以构建几种不同的自动化系统。但特别是，标签，这是一个非常核心且好用的功能。维基链接功能也很好用。然后是文件和文件夹的组织，这是另一个非常好的功能。所以，我强烈建议你结合斜杠命令来利用这些功能。

## 工作流八：并行子代理

Workflow number eight. So, this is going to be a quick one. Uh, surprises me. A lot of beginners in particular don't know about this, but you can actually ask Claude Code to use sub aents.

工作流八。这是一个快速的。让我惊讶的是，很多初学者尤其不知道这一点，但你实际上可以要求 Claude Code 使用子代理。

So, it will actually be able to do things in parallel. Uh so you don't have to wait for one task after another to be done. This is particularly useful for things like researching tasks. Uh but you can kind of use your imagination.

所以，它实际上可以并行处理任务。你不需要等一个任务完成后再做下一个。这对于研究性任务特别有用。但你也可以发挥想象力。

So really quickly I just want to show you uh we're going to do sub agents and we're also going to do a bonus of showing you how to use deep thinking which is kind of another little bonus tip here. But to use sub agents in cloud cloud code you just ask for them.

所以，我很快地向你展示，我们将使用子代理，同时还有一个额外的好处，就是告诉你如何使用深度思考，这又是一个小技巧。但在 Claude Code 中使用子代理，你只需要直接要求就行了。

So one of the things that we want to do is let's just say we want u let's actually just dictate this to the AI and we'll show you uh what's going on here.

所以我们要做的其中一件事是，比方说我们想……我们直接把这个口述给AI，然后我们来看看会发生什么。

I want you to spin three sub aents up for a new research task. We are going to create a new note that is called AI model pricing. I want you to look up the pricing of OpenAI models, cloud code models, and Google models. And I want you to put those in a table inside of that note. Um, and I want you to price everything per million tokens. Okay.

我希望你为一项新的研究任务启动三个子代理。我们将创建一个名为“AI模型定价”的新笔记。我希望你查找 OpenAI 模型、Claude Code 模型和 Google 模型的定价。我希望你将这些信息以表格形式放入那个笔记中。嗯，我希望你以每百万个 token 的价格来定价。好的。

So now we can send this off. Again, very speedy if you're using speech to text software. You can now see it's going to create three sub aents. Just like we said, it's creating a to-do system. So presumably what's going to happen is you're going to see task pop up for these three things. And these are all going to be happening at the same time under the hood.

现在我们可以发送这个请求了。再次强调，如果你使用语音转文字软件，速度会非常快。你现在可以看到它将创建三个子代理。就像我们说的那样，它正在创建一个待办事项系统。所以，可以预见的是，你会看到这三个任务弹出。而且这些任务都将在后台同时进行。

So this is also going to take advantage of things like web search under the hood. Very cool.

所以这也会在后台利用像网页搜索这样的功能。非常酷。

So we're starting to chain things. One of the things that I'll do in a lot of different versions of my projects is I'll have a slash command for sub aents where I kind of have different sub aent tasks for things like research, for things like writing notes, all sorts of different stuff.

所以我们开始把事情串联起来。在我的许多不同版本的项目中，我会有一个用于子代理的斜杠命令，在那里我有不同的子代理任务，比如研究、写笔记等等各种各样的事情。

Uh so what we're going to do here is we're going to let each one of these run in parallel. Okay?

所以我们要做的是，让这些任务并行运行。好吗？

Okay, so instead of having to wait for this first task and then asking for the next one, we're just doing this all at the same time.

好的，所以我们不需要等第一个任务完成再去请求下一个，我们直接同时进行所有任务。

Okay, so sub aents are very cool. You can see it's actually using web search for each one of these.

好的，所以子代理非常酷。你可以看到它实际上在为每一个任务使用网页搜索。

So I'm going to go ahead and speed this up and show you the end result here.

所以我会加快这个过程，然后向你展示最终结果。

Looks like these tasks just finished up. We should now be getting on to the note creation point.

看起来这些任务刚刚完成了。我们现在应该要到创建笔记的环节了。

All I had to do in some of these tasks was just accept a few web search tool requests here.

在这些任务中，我所要做的只是接受一些网页搜索工具的请求。

Obviously, all of that could be configured to run autonomously, especially if you did accept autoedits here.

显然，所有这些都可以配置为自主运行，特别是如果你在这里接受了自动编辑。

Uh, which we're going to do for the actual generation of the file here so that we don't have to accept that.

我们在这里将对文件的实际生成进行此操作，这样我们就不必接受它了。

So, in just a few seconds here, we should hopefully see that table.

所以，在几秒钟之内，我们应该就能看到那个表格了。

Okay, you'll remember we did specifically ask for a table so we can see how well the AI does.

好的，你还记得我们特意要求了一个表格，所以我们可以看看AI做得有多好。

Again, because it knows how to use markdown, it's going to be very reliable. Uh, really nice little use case here.

再次强调，因为它知道如何使用 Markdown，所以它会非常可靠。这是一个非常好的小用例。

So, obviously kind of a silly little example here, but you can see how this can get kind of nice. It can.

所以，这显然只是一个有点傻的小例子，但你可以看到这可以变得多么好用。

You can see here it's now writing to AI model pricing.

你可以看到它现在正在写入“AI模型定价”。

Looks like we do in fact have that new note and it did create the table. It's a little squished here because of my window size. But if we actually go uh to read view here and let's actually just go full screen.

看来我们确实有了那个新笔记，而且它确实创建了表格。因为我的窗口大小，这里有点挤。但如果我们实际切换到阅读视图，然后全屏显示。

You can see we have the OpenAI Anthropic and Google models. You can see they're all priced out. It dynamically found this based on its own web search. So nice.

你可以看到我们有 OpenAI、Anthropic 和 Google 的模型。你可以看到它们都标出了价格。它是根据自己的网页搜索动态找到这些信息的。太棒了。

Oh, looks like it even did some key insights and pricing notes which is kind of cool. Some notes on prompt caching batch API. Okay, very useful stuff.

哦，看来它甚至还做了一些关键见解和定价说明，这很酷。还有一些关于提示缓存和批量 API 的说明。好的，非常有用的东西。

So, one of the ways that I use this in my own workflows, you know, I'll do a lot of uh research on things like code libraries.

所以，在我自己的工作流程中，我使用这个的一种方式是，你知道，我会做很多关于代码库之类的研究。

I apologize, some of this is a little bit code heavy on the examples here, probably some of you more casual people who aren't coders are like, h, that's kind of annoying.

我道歉，这里的一些例子有点偏向代码，可能一些非程序员的普通用户会觉得，嗯，有点烦人。

But, uh, again, it's personal to me. You can personalize your cloud code experience to you. This is very flexible.

但是，再次强调，这对我来说是个人化的。你可以根据自己的情况来个性化你的 Claude Code 体验。这非常灵活。

Um, but that's an example of how you can use sub agents. You just ask cloud coder for the sub agents and it's able to kind of spin up these parallelized tasks to do a bunch of different things at the same time.

但这就是一个如何使用子代理的例子。你只需要向 Claude Code 请求子代理，它就能够启动这些并行任务，同时处理很多不同的事情。

## 工作流九：连接 MCP 服务器

Workflow number nine, we're going to show you how to use MCP servers with your note-taking experience using Claude Code.

工作流九，我们将向你展示如何结合 Claude Code，在你的笔记体验中使用 MCP 服务器。

So, this is where things can get particularly powerful. And if you actually read my corresponding blog post, you can find the links for that below. I wrote a post called Claude agent where one of my big points and reasons for doing this video is that Claude code is so much more than just claent agentic system that's like super good at knowing how and when to use tools, which is why I kind of like to call it Claude agent.

这里就是事情变得特别强大的地方。如果你读过我相应的博客文章，你可以在下面找到链接。我写了一篇名为《Claude 代理》的文章，我做这个视频的一个重要观点和原因就是，Claude Code 远不止是一个代理系统，它非常擅长知道如何以及何时使用工具，这也是我喜欢称之为“Claude 代理”的原因。

uh because you can build agentic workflows for any type of task, any type of job.

因为你可以为任何类型的任务、任何类型的工作构建代理工作流。

Uh especially with things like MCP servers, which if you're not familiar with MCP, this stands for model context protocol. This is kind of a new way in which people are building tools and integrations that can very easily fit within AI models and some of the most popular AI tools that you know and love.

特别是像 MCP 服务器这样的东西，如果你不熟悉 MCP，它代表模型上下文协议。这是一种人们构建工具和集成的新方式，可以非常容易地适应 AI 模型以及一些你所熟知和喜爱的最流行的 AI 工具。

So, one example that I'm going to be showing you here is something called context 7. This is something that I particularly use in a lot of my research tasks.

所以，我将要向你展示的一个例子叫做 Context 7。这是我在很多研究任务中特别使用的东西。

Uh again I mentioned earlier in this video and you guys are going to love it. Another code adjacent example here uh hence the life of a developer for you here.

我之前在这个视频里提到过，你们会喜欢的。这里又是一个与代码相关的例子，这就是开发者的生活。

Um but one of the things that this MCP server is really useful for is getting up-to-date information about software libraries and documentation.

但是，这个 MCP 服务器真正有用的地方之一是获取关于软件库和文档的最新信息。

So you can see if we go to context7.com is worth noting guys you can use MCP servers for all sorts of stuff.

所以你可以看到，如果我们访问 context7.com，值得注意的是，你们可以使用 MCP 服务器来做各种各样的事情。

There's MCP servers for things like Google Drive right? So, say I wanted to pull info in from my Google Drive into my own personal vault. I could actually just connect to the Google Drive uh MCP server, get that set up, and then boom, I would be able to do slash and you would actually see the MCP server for like Google Drive, right? And then you'd be like, "Hey, can you actually pull this file inside of my Google Drive?" It would go find that, create a new note for it, right? Maybe you want to pull four or five different files.

有像 Google Drive 这样的 MCP 服务器，对吧？比方说，我想把 Google Drive 里的信息拉到我自己的个人库里。我实际上可以连接到 Google Drive 的 MCP 服务器，设置好，然后砰！我就可以用斜杠命令，然后你就会看到像 Google Drive 的 MCP 服务器，对吧？然后你就可以说：“嘿，你能把我 Google Drive 里的这个文件拉过来吗？”它就会去找到那个文件，为它创建一个新笔记，对吧？也许你想拉四五个不同的文件。

But the point is like all these external tools, right? Maybe you're somebody who's running a business and you you want to use the Stripe MCP to query customer data or something.

但重点是所有这些外部工具，对吧？也许你正在经营一家公司，你想用 Stripe MCP 来查询客户数据之类的。

Uh maybe you have like a customer call coming up. Maybe you need like the billing information. I don't know. Just coming up with random things on the fly here for you.

也许你即将有一个客户电话。也许你需要账单信息。我不知道。只是在这里即兴为你想出一些随机的事情。

Point is MCP is very extensible. There's all sorts of MCP servers popping up these days. I'm just showing you one very particular example and something that I actually use uh most days.

重点是 MCP 非常具有可扩展性。现在涌现出各种各样的 MCP 服务器。我只是向你展示一个非常具体的例子，以及我大多数时候实际使用的东西。

So you can see they have this MCP uh tab at the top. We're going to go ahead and click that. We're going to scroll down and we're going to get some instructions on how to actually configure this.

所以你可以看到他们顶部有这个 MCP 标签。我们点击它。我们向下滚动，会得到一些关于如何实际配置的说明。

So, if we scroll down, you can see they have a little bit of installation section here in the readme. And one of the things you'll notice is they have install and cloud code.

所以，如果我们向下滚动，你可以看到他们在自述文件中有一些安装部分。你会注意到的一件事是，他们有“安装”和“Claude Code”。

So, in our case here, we're going to use the remote server connection.

所以，在我们的例子中，我们将使用远程服务器连接。

It's worth noting, right, if you just want to search a popular tool that you use in Google, right? You know, XYZ MCP, it's going to be pretty easy to find the documentation for whatever server you're looking for.

值得注意的是，如果你只是想在 Google 中搜索一个你常用的流行工具，对吧？比如，XYZ MCP，你会很容易找到你正在寻找的任何服务器的文档。

There's so so many these days. And side note, not only can you use preconfigured ones, pre-built ones by existing companies and people all over the world, you can also create your own, which is how you can get really, really crazy with cloud code, especially when you're taking notes.

现在有很多很多这样的工具。另外，你不仅可以使用预先配置的、由现有公司和世界各地的人们预先构建的工具，你还可以创建自己的工具，这样你就可以用 Claude Code 玩出非常疯狂的花样，尤其是在做笔记的时候。

You can kind of build your own workflows. A very quick example I'll give of this is I actually have in my own vault, I have a customuilt MCP server where I can input a YouTube link. I can use a custom prompt command and it will download the transcript of that YouTube link, take notes on it, and put it inside of my vault. Okay, so you can get pretty crazy with this.

你可以构建自己的工作流。我举一个非常简单的例子，在我自己的库里，我有一个自定义的 MCP 服务器，我可以输入一个 YouTube 链接。我可以使用一个自定义的提示命令，它就会下载那个 YouTube 链接的文字稿，做笔记，然后放进我的库里。好的，所以你可以用这个玩得很疯狂。

I'm just showing you a very quick example. Um, but in this case, we're going to copy this command. And then what we need to do is we're actually going to need to run this in our terminal, not inside of cloud code.

我只是向你展示一个非常简单的例子。但在这种情况下，我们将复制这个命令。然后我们需要在我们的终端中运行它，而不是在 Claude Code 内部。

So, one thing you can actually do in cloud code is you can turn bash mode on with this exclamation point here. Um, you can see uh exclamation point for bash mode.

实际上，在 Claude Code 中，你可以用感叹号来开启 bash 模式。嗯，你可以看到，感叹号代表 bash 模式。

This is now going to effectively run as a terminal inside of the text input of cloud code. So, I don't have to exit out of my session to run terminal commands here.

现在，这将在 Claude Code 的文本输入中有效地作为一个终端运行。所以，我不需要退出我的会话来在这里运行终端命令。

And so, I'm going to paste this in. This is going to add this MCP server here. So what I can do now is I can do /mcp and you can see we are now connected to the context 7 MCP server.

所以，我将粘贴这个命令。这会在这里添加这个 MCP 服务器。所以现在我可以输入 `/mcp`，你可以看到我们现在已经连接到了 Context 7 的 MCP 服务器。

So you'll see we have the second MCP server here that we're connected to. This is actually the deep wiki MCP server from Devon. Uh this is from Cognition Labs. This is another tool that I use their MCP server for a ton for coding research when I'm working on uh different projects.

所以你会看到我们这里连接了第二个 MCP 服务器。这实际上是来自 Devon 的 Deep Wiki MCP 服务器。它来自 Cognition Labs。这是我在处理不同项目时，大量用于编码研究的另一个工具，我使用他们的 MCP 服务器。

Um but in this case we're going to go ahead and use context 7. So we're going to reset our chat here and we're going to ask a question.

但在这种情况下，我们将使用 Context 7。所以我们将在这里重置我们的聊天，然后提出一个问题。

We're going to say use context 7 to find how to do generate object with enthropic models inside of the versel SDK.

我们将使用 Context 7 来查找如何在 Vercel SDK 中使用 Anthropic 模型生成对象。

So this is actually going to ask us for permission for us. This is very similar to how claude uses its other tools.

所以它实际上会请求我们的许可。这与 Claude 使用其其他工具的方式非常相似。

You can see resolve library. So the first thing that context 7 is going to do is actually going to pick which documentation to pull from. Okay, so we're going to approve that.

你可以看到“解析库”。所以 Context 7 首先要做的是选择要从哪个文档中提取信息。好的，我们批准这个操作。

It's going to search for Verscell AI SDK and then it's actually going to go ahead and dynamically find that inside of its libraries.

它会搜索 Vercel AI SDK，然后它会动态地在其库中找到它。

If we go back to Context 7 here, you can see Verscell AI SDK. If we search for it on their site, presumably it's pulling from this one right here.

如果我们回到 Context 7，你可以看到 Vercel AI SDK。如果我们在他们的网站上搜索它，大概它就是从这里提取的。

You can see we got a little terminal popup. That means our message is ready inside of Cloud Code. And now it's actually going to dynamically search for it instead of me having to go in the UI and I can just offload that task to cloud code.

你可以看到我们弹出了一个小的终端窗口。这意味着我们的消息已经在 Claude Code 中准备好了。现在它实际上会动态地搜索，而不需要我进入用户界面，我可以直接把这个任务交给 Claude Code。

So we're going to approve that here. You can see there are some parameters here. So what it's going to do is it's basically going to pull the cached docs that context 7 has so that I can really really quickly get an answer to my question here.

所以我们在这里批准这个。你可以看到这里有一些参数。它要做的是，基本上会提取 Context 7 缓存的文档，这样我就可以非常快地得到我的问题的答案。

Okay. So it looks like we got a little bit of documentation here on how to use that library. And again we did this via the context 7 MCP server which is really cool.

好的。看来我们得到了一些关于如何使用那个库的文档。再次强调，我们是通过 Context 7 的 MCP 服务器完成的，这非常酷。

So now I can say awesome create a new note in code slash ideas chatbot.

现在我可以说：“太棒了，在 code/ideas 文件夹里创建一个名为 chatbot 的新笔记。”

What this is going to do is going to create a code folder. This will create an idea folder and then this will create an AI chatbot folder here.

它要做的是创建一个 `code` 文件夹，然后创建一个 `idea` 文件夹，最后在这里创建一个 `AI chatbot` 文件夹。

So what we can do is we can actually just turn auto accept on with shift tab. This is going to go ahead and allow cloud code to autonomously handle the creation of this without us needing to approve this which is very cool.

所以我们可以做的就是，直接按 Shift+Tab 开启自动接受。这将允许 Claude Code 自主地处理这个创建过程，而不需要我们批准，这非常酷。

So you're starting to see the pieces of how all of these things are starting to come together and form these really powerful workflows.

所以你开始看到这些碎片是如何组合在一起，形成这些非常强大的工作流程的。

So you can see there's the code folder, there's the idea folder, there's the AI chatbot.

所以你可以看到有代码文件夹，有想法文件夹，还有 AI 聊天机器人。

Looks like it did create that as a folder. So we'd maybe want to be like, hey, actually create that as a note. It's probably going to put a note in here anyway.

看来它确实把它创建成了一个文件夹。所以我们可能想说：“嘿，实际上把它创建成一个笔记。”不过它可能还是会在这里放一个笔记。

Uh, so I'm not going to worry about it. That's something you could very easily iterate on with cloud code.

所以我不担心这个。这是你可以用 Claude Code 非常容易地进行迭代的事情。

Um, but again, MCP servers super powerful. You can build your own.

嗯，但再次强调，MCP 服务器超级强大。你可以构建自己的。

There's so many on the internet for all sorts of things, right? Say you're somebody who, you know, I'm also somebody who uses notion a little bit for forming personal wikis that I want to be a little bit more presentable and maybe share with friends.

互联网上有很多用于各种事情的工具，对吧？比方说，我也会用 Notion 来创建一些个人维基，我希望它们更具展示性，也许可以和朋友分享。

I could connect to the notion MCP server and then I could pull things from my notion into here. or I could actually pull things out from my personal vault and maybe I want to create a new notion page with info that's from my Obsidian vault. Right? So, not only can you kind of read information and bring stuff in, but you can also take information from your Obsidian vault and you can use that with outside sources.

我可以连接到 Notion MCP 服务器，然后把 Notion 里的东西拉到这里。或者我实际上可以从我的个人库里提取东西，然后也许我想用我 Obsidian 库里的信息创建一个新的 Notion 页面。对吧？所以，你不仅可以读取信息并把东西拿进来，你还可以从你的 Obsidian 库里获取信息，并将其用于外部来源。

Okay? So, this thing is very cool. Uh MCP is a very very deep rabbit hole that I highly recommend you dive down when pairing it with taking notes can get super crazy.

好的？所以，这个东西非常酷。MCP 是一个非常深的兔子洞，我强烈建议你在将它与记笔记结合时深入探索，可以玩出非常疯狂的花样。

One of the last things I'm just going to ramble on for like 20 seconds and then I prom promise we'll move on to the next thing is you can start to really build these agentic workflows.

最后一件我想花20秒钟啰嗦一下，然后我保证我们继续下一个话题，那就是你可以开始真正地构建这些代理工作流。

Again, this is why I call it cloud agent and not cloud code because say you're somebody doing sales, right? You hook this up to a few MCP servers and suddenly you're almost like doing your job in conjunction with cloud code instead of the terminal and maybe, you know, maybe you're not even using Obsidian. Maybe you have your own, like I said earlier, like a custom UI built out.

再次强调，这就是为什么我称之为“Claude 代理”而不是“Claude Code”。因为，比方说你是做销售的，对吧？你把它连接到几个 MCP 服务器，突然之间你就像在终端里，结合 Claude Code 来完成你的工作，甚至可能你都没用 Obsidian。也许你有自己的，就像我之前说的，一个定制的用户界面。

There's just so many possibilities here. We're really just scratching the surface of what AI agents can do. And all of this is just so so exciting to me. And of course, the use case we're trying to use to demonstrate all of this is taking notes.

这里有太多可能性了。我们真的只是触及了 AI 代理能做的事情的皮毛。这一切都让我非常兴奋。当然，我们用来演示这一切的用例是记笔记。

## 工作流十：云端部署与自动化

This is going to be the last workflow demonstration. Workflow number 10. This one's going to get a little bit weird.

这将是最后一个工作流演示。工作流十。这个会有点奇怪。

Uh, and this is really meant to just kind of demonstrate something more broadly, which is that you can actually deploy Cloud Code in the cloud and have it do things autonomously when you're on the go.

这实际上是为了更广泛地演示一个概念，那就是你实际上可以在云端部署 Claude Code，让它在你移动时自主地执行任务。

You can do things like building WhatsApp integrations. Uh, you can build your own custom app to manage this. All sorts of things to do.

你可以做一些事情，比如构建 WhatsApp 集成。你可以构建自己的自定义应用来管理这个。有很多事情可以做。

The easiest way to demonstrate this and to get started with at least just experimenting with this type of workflow is going to be with Claude's custom GitHub action.

要演示并开始尝试这种类型的工作流，最简单的方法是使用 Claude 的自定义 **GitHub** (一个面向开源及私有软件项目的托管平台) Action。

So, what I'm going to do here is I'm actually going to use Cloud Code itself to create me a new Git repository. And what we're going to do is we're going to set up Claude Codes GitHub action on our GitHub repository.

所以，我现在要做的是，我将使用 Claude Code 本身来为我创建一个新的 Git 仓库。然后我们要在我们的 GitHub 仓库上设置 Claude Code 的 GitHub Action。

So, GitHub also an interesting thing to integrate with an Obsidian vault because it also gives you version control on your vault. So, this is something uh that I'll experiment with from time to time on kind of test vaults.

所以，GitHub 也是一个与 Obsidian 库集成起来很有趣的东西，因为它也为你的库提供了版本控制。所以，这是我时不时会在一些测试库上实验的东西。

I actually don't necessarily do this workflow with GitHub on my main vault. I actually have my own infrastructure built out to handle that these days.

实际上，我并不一定在我的主库上使用这个 GitHub 工作流。我现在有自己构建的基础设施来处理这个问题。

But we're just going to demonstrate this to you so you can get a feel for it and just see kind of the magic of a workflow like this.

但我们只是向你演示一下，让你感受一下，看看这种工作流的魔力。

So what we'll do is we'll say I need you to initialize a new GitHub repo and push it to my GitHub as a private repository.

所以我们要说：“我需要你初始化一个新的 GitHub 仓库，并将其作为私有仓库推送到我的 GitHub。”

Okay, so I can actually just tell Cloud Code to do this. Cloud Code is intelligent enough to figure out how to use the GitHub CLI in conjunction with initializing a new Git repository on my machine here for this vault.

好的，我实际上可以直接告诉 Claude Code 去做这件事。Claude Code 足够智能，能够弄清楚如何使用 GitHub CLI，结合在我的机器上为这个库初始化一个新的 Git 仓库。

So, I'm probably losing some of you non-technical people if you're not like a software engineer or developer or something like that. It's going to be a little bit weird for you. Uh you may just want to sit tight and watch this one.

所以，如果你不是软件工程师或开发者之类的，我可能要让你们中一些非技术人员感到困惑了。这对你来说会有点奇怪。你可能只想坐下来看看这个。

Uh but it is pretty cool. I promise the payoff on this is cool.

但这确实很酷。我保证这个的回报是值得的。

We're going to have cloud code run get. This is going to initialize a new empty git repository here. And what we're going to do is it's going to commit our files to GitHub and create a new repository with the GitHub CLI tool.

我们将让 Claude Code 运行 `git init`。这会在这里初始化一个新的空 Git 仓库。然后它会将我们的文件提交到 GitHub，并使用 GitHub CLI 工具创建一个新的仓库。

Okay, so a lot of different things happening. You can see those of you who are developers can see, okay, it's adding all files and then it's committing with initial commit message.

好的，所以发生了很多不同的事情。你们中是开发者的可以看到，好的，它正在添加所有文件，然后用初始提交信息进行提交。

This just means that all the files that I have in my vault are getting added to a new repository that we are about to push to GitHub cla

这只是意味着我库里的所有文件都将被添加到一个我们即将推送到 GitHub 的新仓库中。

Okay, so I'm just giving it a name. You can see cloud code's intelligent enough to know it needs to ask me for a good name.

好的，我只是给它起个名字。你可以看到 Claude Code 足够智能，知道需要向我询问一个好名字。

So, it's going to create a new private git repository called Cloud Code Vault on my GitHub here. Going to push this.

所以，它将在我的 GitHub 上创建一个名为“Cloud Code Vault”的新的私有 Git 仓库。然后推送这个。

Again, GH is just the command for the GitHub uh CLI, right? Just like Cloud Code is a CLI. GitHub also has a CLI and this is what it's using.

再次强调，`gh` 只是 GitHub CLI 的命令，对吧？就像 Claude Code 是一个 CLI 一样。GitHub 也有一个 CLI，它现在用的就是这个。

So, we're going to go ahead and proceed. I'm going to let that create and then I'm going to go open that up inside of GitHub.

所以，我们继续。我让它创建，然后我会在 GitHub 里面打开它。

You can see we're on github.com. This is in my new vault that I have on Git. Okay. So, the idea here is you can do a couple things. If you want to use version control in your vault, very cool thing to do.

你可以看到我们现在在 github.com。这是我放在 Git 上的新库。好的。这里的想法是，你可以做几件事。如果你想在你的库中使用版本控制，这是一件非常酷的事情。

You can kind of get a running history of everything in your vault.

你可以大致了解你库里所有东西的运行历史。

Obviously, if we were configuring this for real, we would do things like adding dstore to get ignore and all that kind of stuff, but we're just kind of we're just kind of going through the motions here.

显然，如果我们是正式配置，我们会做一些事情，比如把 `.DS_Store` 添加到 `.gitignore` 等等，但我们现在只是走个过场。

Now, the important thing is inside of clot code, what we can now do is we can do slashinstall github app. You can see this is a predetermined uh or kind of a pre-existing command inside of cloud code.

现在，重要的是，在 Claude Code 内部，我们现在可以执行 `/install-github-app` 命令。你可以看到这是 Claude Code 内部一个预设的或者说预先存在的命令。

This isn't like a command I came up with. This is on everybody's instance of cloud code.

这不是我自己想出来的命令。每个人的 Claude Code 实例里都有这个。

And what we can do is we can just tab that. And then we're going to hit return. And this is actually going to use the repository that we just set up and it's going to install the GitHub app on a repository.

我们所要做的就是按 Tab 键，然后按回车。这实际上会使用我们刚刚设置的仓库，并在该仓库上安装 GitHub 应用。

So in my case on my account, Cloud is allowed to install the GitHub app on any repository. You're going to need to install that for the first time or configure what repositories this particular GitHub app has uh access to.

在我的账户里，Claude 被允许在任何仓库上安装 GitHub 应用。你第一次安装时需要配置这个特定的 GitHub 应用有权访问哪些仓库。

Uh I can kind of just skip that because it already has access. So I can just kind of close that.

我可以跳过这一步，因为它已经有权限了。所以我可以直接关闭它。

And now you're going to see if we go back to cloud code. We just need to initiate um this kind of initial uh thing here.

现在你会看到，如果我们回到 Claude Code，我们只需要启动这个初始化的东西。

So you can see we can now select GitHub workflows to install. Both of these are checked. Uh we're actually going to just accept both of these.

所以你可以看到我们现在可以选择要安装的 GitHub 工作流。这两个都已勾选。我们实际上就直接接受这两个。

So we'll just hit enter. And then you can see create a long live token with your cloud subscription. So you can either use your own API key or your own cloud subscription token.

所以我们直接按回车。然后你可以看到“用你的 Claude 订阅创建一个长期有效的 token”。所以你可以使用你自己的 API 密钥，或者你自己的 Claude 订阅 token。

We're just going to go ahead and use our existing uh cloud token here. So we can just sign in directly with Anthrobic.

我们直接使用我们现有的 Claude token。所以我们可以直接用 Anthropic 账户登录。

Again, we've gone over this, but to use cloud code, you do need either an API key or a Cloud subscription.

再次强调，我们已经说过了，要使用 Claude Code，你需要一个 API 密钥或者一个 Claude 订阅。

In my case, I'm just using the Cloud Mac subscription, the $200 one because I'm such a power user.

在我的情况下，我使用的是 Claude Mac 订阅，200美元那个，因为我是个重度用户。

You can see we now have a very introductory PR. This has some information about how this particular integration works. We're just kind of speeding through this because you actually have to approve this before the Apple work.

你可以看到我们现在有一个非常初步的拉取请求（PR）。这里有一些关于这个特定集成如何工作的信息。我们只是快速浏览一下，因为在苹果应用生效之前，你实际上需要批准这个。

You actually have to create that and then merge it and then you're going to be all set. Okay, so that's merged.

你实际上必须创建它，然后合并它，然后你就一切准备就绪了。好的，已经合并了。

Uh we can delete that branch. Everything is ready to go. So now, how does this get interesting?

我们可以删除那个分支了。一切准备就绪。那么，这如何变得有趣呢？

Let's switch over to the phone. I apologize guys, the audio is going to get a little bit weird here.

我们切换到手机。抱歉各位，这里的音频会有点奇怪。

You can see I am now on the GitHub app on my phone. Okay, so let's imagine for a second that I'm on the go. Let's say I'm on the walk and I actually want Claude to do some research for me in the background in the cloud. And then when I come back to my computer, what I can do is I can actually go see its research inside of my vault.

你可以看到我现在在手机上的 GitHub 应用里。好的，我们想象一下，我正在外面。比如说我正在散步，我实际上想让 Claude 在后台的云端为我做一些研究。然后当我回到电脑前，我就可以在我的库里看到它的研究成果。

So what I'm going to do is I'm going to go into issues here. And what I'm going to do is I'm going to create a new one in the top right here. And I'm just going to say test integration. We're just going to do something really basic here. And I'm just going to say please make a new file in the vault in the slash test folder called hello world and write a funny joke.

所以我要做的是，进入“问题”（issues）这里。然后我要在右上角创建一个新的。我就写“测试集成”。我们只做一个非常基础的事情。我就写：“请在库的 `/test` 文件夹里创建一个名为 `hello world` 的新文件，并为我的观众写一个有趣的笑话。”

Not a runny joke, a funny joke for my viewers. Okay. So what we're going to do is we're going to submit this. This is going to create a new issue inside of my GitHub repository here.

不是流鼻涕的笑话，是给我的观众看的有趣的笑话。好的。我们提交这个。这将在我的 GitHub 仓库里创建一个新的问题。

And what I can do is I can add a comment. You'll see this comment button at the bottom. And because we've installed the Claude app, I can now actually tag Claude. You don't need to see uh anything there.

我可以添加一条评论。你会看到底部的这个评论按钮。因为我们安装了 Claude 应用，我现在实际上可以@ Claude。你不需要看那里的任何东西。

And what we can do is we can say, "Please handle this. Thanks." We'll do a smiley face. We'll go ahead and leave that comment. And what's going to happen is this is actually going to kick off our GitHub action.

我们可以说：“请处理一下。谢谢。”我们再加个笑脸。我们留下这条评论。接下来，这实际上会触发我们的 GitHub Action。

So anytime that we tag cloud code inside of issues, inside of PRs, it's actually going to go autonomously handle this, which is super super cool.

所以任何时候我们在问题或拉取请求中标记 Claude Code，它实际上都会自主地去处理，这非常酷。

So we actually have to wait just a little bit to get set up. We're now going to switch back over to the computer here so that I can show you how this works.

所以我们实际上需要稍等一下来完成设置。我们现在切换回电脑，这样我就可以向你展示它是如何工作的。

So you guys can see this is now triggered from my phone. Again, I apologize for the phone audio when we're back to the computer audio.

所以你们可以看到，这是从我的手机触发的。再次为我们切换回电脑音频时的手机音质道歉。

You can see theoretically, and I know I'm not literally doing this right now, but theoretically, I could have just been completely on the go, uh, not having to be around my computer at all. And this cloud integration is now just running in the cloud, and it's actually running this, you know, without me needing to accept anything.

理论上，我知道我现在并不是真的这么做，但理论上，我本可以完全在移动中，完全不需要在电脑旁边。而这个云集成现在就在云端运行，它实际上是在运行这个，而我不需要批准任何东西。

Um, all sorts of stuff. So, there's a lot of ways you can configure this to be a little bit more personalized to your vault.

嗯，各种各样的东西。所以，有很多方法可以配置这个，让它更符合你的库的个性化需求。

And again, at this point in my own personal vault, I have kind of my own server that's running where I can trigger these things.

再次强调，在我自己的个人库里，我现在有自己的服务器在运行，我可以在那里触发这些事情。

But I think the GitHub action is a really really quick way to at least get started and start playing around with this type of workflow.

但我认为，GitHub Action 是一个非常快速的入门方式，至少可以开始尝试这种类型的工作流程。

So what's going to happen is cloud is basically going to look through all the comments in this issue. You can see it's going to check if a folder exists. You can see it's going to create a hello world.

所以接下来，Claude 基本上会浏览这个问题中的所有评论。你可以看到它会检查文件夹是否存在。你可以看到它将创建一个“hello world”。

You can also go in your GitHub. There's the actions here. You can see my issues actually running is out of this tab.

你也可以进入你的 GitHub。这里有“操作”选项。你可以看到我的问题实际上正在这个标签页之外运行。

You can see it actually just finished up. So if we go to issues here, click test integration. You can see uh it actually did in fact create that new file. Hello world.

你可以看到它实际上刚刚完成了。所以如果我们去问题区，点击“测试集成”，你可以看到它确实创建了那个新文件，Hello world。

So what we can do now is we can go back to our vault and because this was actually uh created. It was actually committed.

所以我们现在可以回到我们的库，因为这个文件实际上被创建了，它实际上被提交了。

So we go to code here. You can see we're going to have uh presumably probably a new branch here.

所以我们到代码这里。你可以看到我们大概会有一个新的分支。

Okay. Awesome. So this is a new branch. So what we want to do is probably just grab this branch name here uh and then actually ask Claude uh Cloud Code to merge it.

好的。太棒了。所以这是一个新的分支。我们现在要做的，可能就是获取这个分支的名称，然后实际上请求 Claude Code 来合并它。

So, what we'll do is we'll go back to cloud code here. And what we're going to do is we're going to say, "Awesome. We just had and we let's actually use speech to text here."

所以，我们回到 Claude Code。我们要说：“太棒了。我们刚刚……我们实际上在这里用语音转文字吧。”

By the way, you saw me clear that text really fast. If you hit escape twice really quickly, it will clear your input.

顺便说一句，你看到我很快地清除了那些文本。如果你快速地按两下 Escape 键，它会清除你的输入。

Okay, we just ran an automation. There's a new branch. We need that to get merged into the master branch. And then we actually need you to pull so we get the latest version of our notes.

好的，我们刚刚运行了一个自动化。有一个新的分支。我们需要把它合并到主分支。然后我们实际上需要你拉取更新，这样我们就能得到最新版本的笔记。

So, again, Cloud Code is very intelligent. It's going to know how to use the git CLI uh the github CLI rather to go ahead and accomplish this task.

所以，再次强调，Claude Code 非常智能。它会知道如何使用 Git CLI，或者更确切地说是 GitHub CLI，来完成这个任务。

So it's going to fetch all the remote branches. It's going to see the existing branches. It will ask us for permission because we haven't configured permissions here.

所以它会获取所有远程分支。它会看到现有的分支。它会请求我们的许可，因为我们还没有在这里配置权限。

You can see that cloud issue two right there. It's going to go ahead and get merged into main. Okay.

你可以看到就在那里的 Claude 问题二。它将被合并到主分支。好的。

So it looks like it's going to pull origin master and merge it with this branch. Awesome.

所以它看起来会拉取 `origin master` 并与这个分支合并。太棒了。

Now it's going to go ahead and allow us to see inside of test and inside of hello world. We now have a joke. Why don't scientists trust atoms? Because they make up everything.

现在它会允许我们查看 `test` 文件夹和 `hello world` 文件。我们现在有了一个笑话。为什么科学家不信任原子？因为它们构成了万物。

So the workflow that we basically simulated here is that if I was on a walk, if I was on my phone, I could go ahead and create a new issue on GitHub, I could use Cloud Code's GitHub uh integration and basically kick one of these things off in the cloud, come back to my computer later, pull that research.

所以我们基本上模拟的工作流程是，如果我正在散步，如果我用手机，我可以去 GitHub 上创建一个新问题，我可以使用 Claude Code 的 GitHub 集成，基本上在云端启动其中一个任务，稍后回到我的电脑，拉取那个研究。

So again, silly little example here, but the goal is to get the wheels turning in your brain that you take the simplicity of what I just demonstrated and you actually apply those concepts into practical real world workflow examples into your own vault.

再次强调，这只是个傻傻的小例子，但目标是让你的大脑转动起来，让你把我刚刚展示的简单概念，实际应用到你自己的库中，变成实际可行的工作流例子。

## 总结

Hopefully those 10 workflow tips will help you 10x your note-taking with AI agents, in particular Cloud Code.

希望这10个工作流技巧能帮助你利用 AI 代理，特别是 Claude Code，将你的笔记效率提升10倍。

The point of making this video is that Cloud Code is so much more than just a coding tool. It is a multi-purpose agent. It's very flexible. It's very malleable.

制作这个视频的重点是，Claude Code 远不止是一个编码工具。它是一个多用途的代理。它非常灵活，可塑性很强。

So, if you found this video helpful, helps me a lot. If you guys subscribe to my YouTube channel or you follow me on X or if you are reading on Substack, go check out the accompanying blog post that we have or that I have rather called Claude Agent.

所以，如果你觉得这个视频有帮助，请订阅我的 YouTube 频道，或者在 X 上关注我，或者如果你在 Substack 上阅读，去看看我写的配套博客文章，我称之为《Claude 代理》。这对我帮助很大。

Give that a read. Um, but if there's any other things you guys would like to see me do, if you want to see like an advanced version, maybe I use my own personal vault a little bit more, uh, let me know.

去读一读吧。但是，如果你们还想看我做其他任何事情，如果想看一个高级版本，也许我更多地使用我自己的个人库，请告诉我。

I'm super open to doing more types of videos like this. Obviously, I do a lot of videos in the realm of the coding world and things like that, but definitely open to more general purpose agentic workflow videos if this is something you go like.

我非常乐意制作更多这类视频。显然，我做了很多关于编码领域的视频，但如果你们喜欢，我绝对愿意制作更多通用的代理工作流视频。

Uh, one quick note to close on too is we do on takeoff we have our cloud code lessons. So, we have 23 lessons which are 2 hours and 22 minutes.

还有一点要补充的是，我们在 Takeoff 上有我们的 Claude Code 课程。我们有23节课，总时长2小时22分钟。

We have a couple more coming out just a few more days uh on some project stuff that we've been working on.

我们还有几节课将在几天后发布，是关于我们一直在做的一些项目。

Uh this is a really great way to get up to speed on all of the features of cloud code everything in its toolbox.

这是一个非常好的方式，可以让你快速了解 Claude Code 的所有功能，以及它工具箱里的一切。

So if you are somebody inclined who is like wow cloud code seems really cool I should learn more about this really really excellent resource we put together so that you guys can go learn how to use cloud code.

所以，如果你有兴趣，觉得“哇，Claude Code 看起来很酷，我应该多了解一下”，我们准备的这个非常优秀的资源就是为了让你们去学习如何使用 Claude Code。

So thank you for watching again. Uh share this with your friends if you found this helpful. Uh goes a lot to help me out. Uh thanks for watching guys. We'll be back soon with more videos.

再次感谢你的观看。如果你觉得有帮助，请分享给你的朋友。这对我帮助很大。谢谢大家的观看。我们很快会带来更多视频。