---
author: How I AI
date: '2026-01-26'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=LvLdNkgO-N0
speaker: How I AI
tags:
  - prompt-engineering
  - workflow-automation
  - ai-coding-tools
  - software-architecture
title: Claude Code 进阶：资深工程师的 AI 开发工作流
summary: 本期访谈邀请了 egghead.io 的 John Lindquist，深入探讨资深工程师如何利用 Claude Code 和 Cursor 的高级特性。核心话题包括使用 Mermaid 图表预加载上下文、通过系统提示词注入架构信息、利用 Stop Hooks 自动化代码质检，以及构建个人 CLI 工具来优化开发流程。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Anthropic
  - egghead.io
  - WorkOS
  - OpenAI
products_models:
  - Claude Code
  - Cursor
  - Gemini
  - Mermaid
media_books: []
status: evergreen
---
### AI 编码的高级技巧

**Claire Vo**: 肯定有很多像我一样的人，非常想了解那些能够发挥这些 **AI 驱动编码工具**最强大功能的进阶技术。你认为有哪些许多人还没想到的切入点，可以让我们开始探索这些工具的使用方法？

<details>
<summary>Original English</summary>

**Claire Vo**: There are people out there definitely like me that really want to know the advanced techniques that can leverage the most powerful parts of these AI powered coding tools. Where do you want us to get started that you think many people don't think about in terms of how they can use these tools?

</details>

**John Lindquist**: **上下文 (Context)** 和 **图表 (Diagrams)** 是一个很好的起点。它们绝对是让 AI 按你意愿行事的最佳方式。比如，有一种叫做 **Mermaid 图表** 的东西。这是一种可视化数据库操作的方法，本质上是将你的应用程序压缩成非常精简的文本行，展示应用的工作原理。对于人类来说，阅读这种文本是个巨大的挑战，但 AI 可以轻松理解。我甚至可以直接说：“请解释一下身份验证流程。” 因为它已经在上下文中了，AI 就不必为了弄清楚这一点而进行大量的文件读取和代码库探索。它生成结果的速度会快得多。

<details>
<summary>Original English</summary>

**John Lindquist**: Context and diagrams is a great place to start. They're definitely the best way to get AI to do what you want. So, they have what are called mermaid diagrams. This is a way of visualizing database operations and it's a way of essentially compressing your application down into very small lines of text that show how your application works. Now for a human to read this, this is a big challenge. But an AI can consume this easily. I could even just say, "Please explain the authentication flow." And because it already has it in the context, it's not going to have to do a bunch of file reads and codebase exploration to figure this out. It's going to come up with results much quicker.

</details>

**Claire Vo**: 欢迎回到《How I AI》。我是 **Claire Vo**，一名产品负责人和 AI 迷，我的使命是帮助你利用这些新工具构建更好的产品。今天我们邀请到了 **egghead.io** 的 **John Lindquist**，他是 **Cursor** 和 **Claude Code** 等 AI 驱动工程工具的超级用户。虽然我热爱非技术背景的朋友，但这一集是专门为那些想要理解如何利用这些工具的强大功能来优化代码质量、提高开发效率的**资深软件工程师**准备的。

<details>
<summary>Original English</summary>

**Claire Vo**: Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today we have John Linquist at egghead.io who is a super user of AI powered engineering tools like cursor and claude code. Now, I love all you nontechnical folks out there, but this is an episode for the senior software engineers who really want to understand how they can use the power features of some of these AI engineering tools to really both optimize the quality of code that they're generating, but also become more efficient as they use their IDE, terminal, and AI assistance to write, check, and deploy code.

</details>

### 使用图表增强上下文

**John Lindquist**: 我认为上下文和图表对我们来说是一个很好的切入点。我们将全程使用 **Claude Code**。这些图表都是自动生成的，我可以分享一个 **提示词 (Prompt)**，它可以遍历你的代码库，并根据用户操作、事件或频道生成图表，帮助 AI 理解流程以及各部分是如何连接的。**Windsurf** 最近推出了一个叫 **Code Maps** 的功能，概念类似。本质上是预加载有价值的上下文。你要记住，AI 每次启动时都是没有记忆的，它不知道你的应用发生了什么。人们尝试设置很多规则，但通常不包含“我的应用是如何工作的”以及“各部分如何衔接”。所以你会得到很多糟糕的修改，因为它不理解如果修改了 A，会如何影响 B。

<details>
<summary>Original English</summary>

**John Lindquist**: Yeah, I think context and diagrams is a great place to start for us. They're definitely the best way to get AI to do what you want. So we'll be using cloud code throughout. These diagrams are all generated from I can share a prompt with however you want to share with the audience that can walk through your codebase and generate diagrams based on user actions or user interactions the events the channels whatever happens in your code to help the AI understand the flow and how the pieces are connected. I think Windsurf recently came out with something called code maps, a similar concept. Essentially preloading valuable context so that you have to remember that every time an AI starts it has no memory, no idea of what's going on in your application.

</details>

**John Lindquist**: 我们可以使用图表来预加载这些信息。例如，我称之为带有图表的 **Markdown** 文件。它们包含 **Mermaid 图表**，这是一种在 Markdown 中渲染图表的标准格式。这是一种可视化数据库操作的方式。如果你放大看，它会显示“如果记录存在，则执行此操作”。这是一种将应用程序压缩成极简文本的方法。虽然人类看起来像张复杂的图片，但 AI 消耗它非常容易，这是一种非常稳健的解释应用的方式。

<details>
<summary>Original English</summary>

**John Lindquist**: We can do that using diagrams. Uh, so for example, one of these diagrams um will have I I call they're markdown files with diagrams in them. So they have what are called mermaid diagrams and mermaid is a standard format for rendering diagrams inside of markdown. So this is a a way of visualizing uh database operations. And it's a way of essentially compressing your application down into very small lines of text that show how your application works. Now for a human to read this, this is a big challenge. But an AI can consume this easily and it's like a very compressed very um robust way of explaining application.

</details>

### 系统提示词的妙用

**John Lindquist**: 在 **Claude Code** 中，我们要关注的一个选项叫做 **追加系统提示词 (append system prompt)**。在加载任何用户提示词之前，我们会运行一个命令，读取我们 `memory/AI/diagrams` 目录下的所有 Markdown 文件。我使用 **Glob 模式** 读取所有文件，并使用 `cat` 命令将它们连接成一个单一的文本输入到 Claude 中。

<details>
<summary>Original English</summary>

**John Lindquist**: The one we're going to focus on is called append system prompt. So in there before we load in uh any sort of user prompt or anything we're actually going to say claude append system prompt and then you can drop in a command and this command can read in from our memory from AI/diagrams and then this is a called a glob pattern read through all of the markdown files essentially force them into claude once I do this. So this is reading all the files all the markdown files and this is cat will kind of concatenate them all together into a single uh text read.

</details>

**Claire Vo**: 我想提醒大家两点。首先，在你的标准仓库中，创建一个 `memory` 目录来结构化你希望 AI 工具使用的上下文和文件，这是一个非常好的做法。其次，很多人在使用 **Claude Code** 时比较“懒”，没有探索过所有的**系统命令**。通过使用 `help` 命令，你可以看到除了聊天之外你还能做什么。**追加系统提示词** 就是一个被低估的功能。

<details>
<summary>Original English</summary>

**Claire Vo**: One thing I want to call out for folks that are watching this is two things. It seems like, in your standard repos, you're creating a memory directory where you're going to structure some of the context and files you might want any of these AI tools to use. The other thing that I think a lot of people are quite lazy about is they haven't explored the surface area of all the system commands available in cloud code. And appending system prompt is one of those ones that I think people probably underuse.

</details>

**John Lindquist**: 没错，我经常用它。现在运行后，我不需要用 `@` 去引用所有文件，也不需要告诉它我们要处理什么。我甚至可以用**语音听写**说：“请解释一下身份验证流程。” 因为它已经在上下文中了，它不需要搜索代码库。虽然这会消耗更多的 **Token**，但对我来说，节省的时间和任务的可靠性远比 Token 成本更有价值。

<details>
<summary>Original English</summary>

**John Lindquist**: Yeah, absolutely. Um, it's one I use constantly. So when I let this run, you'll notice that it's now prompting the user to do something. And we don't have to try and reference all of the files, which you normally do with AT. I could even just say, like, I use dictation all the time. Please explain the authentication flow. And because it already has it in the context, it's not going to have to do a bunch of file reads and codebase exploration to figure this out. This does come at the cost of a lot more context, a lot more tokens being used up front, but the work that you do, the time that you spend on these tasks is more valuable than that to me.

</details>

### 机器友好的文件格式

**Claire Vo**: 我们正进入一个“文件类型”的时代。很多人认为 **Markdown** 和 **JSON** 是向 **LLM** 注入上下文的有效方式。但在本期节目中，我们发现像 **Mermaid 图表** 这种对人类来说难以解析的格式，对机器却非常有效。机器非常擅长利用这些文件的组件结构或语法。

<details>
<summary>Original English</summary>

**Claire Vo**: This is the era of the file type and I think so many people think about markdown and JSON files as effective ways to inject context into LLMs. In this one, you have mermaid diagrams, which again are hard to parse as a human. But to a machine, it's very effective. I think this is an interesting moment where we can all use different file types in a more extensive way than our human brains could because the machines are so good at using the different component structures or syntax of those files.

</details>

**John Lindquist**: 是的，目前有很多关于如何将信息压缩成单一图像或特定文件类型的研究。我个人非常看重视频的使用。**Gemini** 是目前上传视频并理解内容最好的模型。我最近做了一个工具，可以处理我 6 小时的研讨会视频，提取笔记、示例和常见问题。这样我每次迭代研讨会时，就不需要手动去翻视频了。

<details>
<summary>Original English</summary>

**John Lindquist**: Yeah, absolutely. There's a lot of research being done into how they can compress all of this information down into like a single image. I'm huge on video and using videos. Gemini being the best model for uploading video and understanding. I recently built a tool that can take one of my six-hour workshops and process the entire thing and take out notes and examples and thoughts and frequently asked questions.

</details>

### 自动化文档与图表生成

**Claire Vo**: 你在开发流程的哪个阶段生成这些图表文件？对我来说，我有一个 **GitHub Action**，当 **Pull Request (PR)** 关闭时，它会自动为新功能生成文档和图表。

<details>
<summary>Original English</summary>

**Claire Vo**: Where in your development process do you find that you generate those files? So for me, I actually have a GitHub action that generates files almost exactly like you have with documentation and diagrams for new features of a specific scope. And so I do it when a pull request is closed and then I go back and update our diagrams.

</details>

**John Lindquist**: 通常在 PR 阶段是个好主意。一旦功能按预期工作，你就可以说：“好了，现在它工作正常了，请为它画个图。” 对于很多没有图表的现有项目，我们会先对现有代码进行绘图，以加速 AI 开发。如果你是从零开始，先用 **Plan Mode (计划模式)** 构建，等跑通了再绘图。这些图表甚至能帮你理清：“我刚才到底写了什么？” 如果图表看起来很奇怪，说明代码逻辑可能有问题。

<details>
<summary>Original English</summary>

**John Lindquist**: Yeah, usually I think pull request is a good paradigm there. As soon as you have something working where you want it to be working and then you can say okay now this is working as expected. Please diagram it. I think for a lot of the projects, we already have pre-existing code bases that don't have diagrams. And so that's been the major use case is taking existing stuff and diagramming all of that so that our AI development is accelerated.

</details>

**Claire Vo**: 没错。我还利用从代码生成的 Mermaid 图表来回答客户复杂的安全和数据流要求。如果让工程师手动去画，成本非常高。现在我们可以按需生成这些资产，甚至用于 **SOC 2 合规性** 审计。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And then I will give folks just a couple other use cases of generating mermaid diagrams from code. I use a lot of diagram generating out of our repo to answer very complex security and data flow requirements from our customers. This is a workflow that is actually pretty expensive if you ask an engineer to do it. Also if you're going through sock 2 compliance, these are assets that historically have been so tedious to create efficiently and now you can kind of generate them on demand.

</details>

### 别名与 CLI 效率工具

**Claire Vo**: 你提到过如何通过 **别名 (Alias)** 让命令使用更高效。我们要不要聊聊这个？

<details>
<summary>Original English</summary>

**Claire Vo**: You showed us how to just pull all of these documents into a system prompt. And this seems like a command that you're using over and over again. And that's something you and I talked about before we started recording, which is how to alias and make more efficient your use of of different commands.

</details>

**John Lindquist**: 没错。在 Mac 上默认是 **ZSH**，Windows 上我用 **PowerShell**。你可以轻松设置别名。比如，我设置 `X` 为开启绕过权限模式，`H` 为使用 **Haiku** 模型（更快但不那么聪明），或者 `CDI` 来执行那个加载图表的命令。因为我经常用，所以我把它们设成非常短的快捷键。你甚至可以为特定项目设置别名，比如 `CC-项目名`，一键进入带有特定上下文的 Claude Code 模式。

<details>
<summary>Original English</summary>

**John Lindquist**: So there are a lot of uh with with on Mac it's ZSH is the default shell. Depending on what tools you use the most, you can easily set up aliases for things like setting the default model for for claude. If I just type X now, anything I type has bypass permissions enabled. Or if I type H, this will be Haiku. Or if I type in the scenario CDI, this will do that diagram loading. I keep them in very short shortcuts.

</details>

**John Lindquist**: 我还做了一个叫 **Sketch** 的工具，它接入了 **Gemini CLI**。我可以输入我想构建的网站类型（比如圣诞装饰商店），选择主题，然后它会自动生成多张设计稿。这是一个脚本化的方式，基于预加载的提示词生成图像。与其不断去想“那个提示词是什么”，不如构建这些属于你自己的小工具。我喜欢这种**受限的 UI 空间**（终端），因为它让你专注于核心工具，而不会被 UI 设计分散注意力。

<details>
<summary>Original English</summary>

**John Lindquist**: So I tend to build any idea I come up with. Um so for example this is one I'm working on called sketch and this feeds into the Gemini CLI. You can tell an AI like listen I want to use like this is a wrapper around Gemini where it will execute Gemini with specific prompts. You can have these little CLIs and these little projects that are be just for you. Because you just like build the tools that you need now.

</details>

### 使用 Stop Hooks 自动化质检

**Claire Vo**: 当你处理复杂的编码项目时，如何使用进阶技术保持高质量？

<details>
<summary>Original English</summary>

**Claire Vo**: I think we're going to close out and spend a little bit of time on your workflow for when you're doing more complex coding projects or features, how you keep those really high quality using some advanced techniques in I think in cloud code and cursor.

</details>

**John Lindquist**: AI 生成代码时经常会犯错。即便它说“完成了”，你可能发现还有一堆错误。通常你会用 **TypeScript**、**Linting** 或格式化工具来检查。在 Claude 中，你可以设置 **Hooks (钩子)**，特别是 **Stop Hook (停止钩子)**。

<details>
<summary>Original English</summary>

**John Lindquist**: Often when the AI is generating code it'll often build out mistakes. So you would run something like bun type check and you would see that it has this error but your claude code and the other agents don't know that this error exists. What Claude has is the concept of hooks. I'm going to set what's called a stop hook.

</details>

**John Lindquist**: 我定义了一个脚本，当 Claude 完成对话并进入等待状态（Stop）时，脚本会检查是否有文件发生了变动。如果有，它会自动运行 `bun type check`。如果发现 **TypeScript** 错误，它会将错误报告发回给 Claude 并说：“嘿，这里有错误，请修复。” 如果没有错误，它就自动执行 **Git commit**。这节省了大量的脑力负担，你不需要手动运行命令再把错误贴回去。

<details>
<summary>Original English</summary>

**John Lindquist**: We're going to focus on is we're going to see step one were their files changed when we stopped. And a stop is once Claude has kind of finished its conversation. If there's files changed we're going to say okay then let's go ahead and run that bun type check. And if there is a type check then we can say back to claude hey there were typescript errors this is the report and then send them back the output. Otherwise, if there were no errors, then go ahead and commit.

</details>

**Claire Vo**: 这种将终端的结构化命令与 Claude 的自然语言指令相结合的方式非常棒。对于工程主管来说，如果你还没有为核心仓库创建这些 Hooks，让团队成员在使用 Claude Code 时受益，那你可能错过了这些工具的规模化杠杆作用。

<details>
<summary>Original English</summary>

**Claire Vo**: I like this combination of kind of like structured commands in the terminal combined with natural language calls back into Claude to then kind of put the bow on the end of any work that this AI system does. If you haven't created these hooks for key repos where everybody is benefiting from this when they're using something like claude code then you're missing out on some of the scaled leverage of these tools.

</details>

### 终端 UI vs. IDE 之争

**Claire Vo**: 现在似乎正在发生一场“界面战争”。你认为对于真正的软件工程师来说，谁会胜出？是 **终端 UI (TUI)**、**IDE** 还是两者结合？

<details>
<summary>Original English</summary>

**Claire Vo**: I think there's interface wars happening right now. Are people going to love these terminal UIs and command line tools like Claude Code? Do people want the IDE? What do you think wins for real software engineers out there?

</details>

**John Lindquist**: 我认为两者都需要。**CLI** 的优势在于高度可配置，正如你看到的别名，我可以一键启动加载了特定 **MCP (Model Context Protocol)** 或提示词的 Claude 版本，并在后台运行。而 **IDE** 在阅读文件、选择特定行进行精确修改时是不可替代的。**Cursor** 正在通过其 **Agent Mode (智能体模式)** 做出大胆尝试。要脱颖而出，你必须提供独特且用户友好的体验，比如一键启动开发服务器、点击元素并说“让它变紫”。AI 领域的质量门槛极高，你必须在 **UX (用户体验)** 上做到极致。

<details>
<summary>Original English</summary>

**John Lindquist**: Yeah, so I think you need both. I think you need an IDE and there are so many use cases for the CLIs. The reason being that the CLIs have a lot of configuration and a lot of settings. But if you have an IDE and you're reading through the files and you're selecting lines and you want to modify certain bits like focused work, there's so many use cases for IDE. For one IDE to stand out above the other they have to separate themselves like cursor is doing with their agent mode. You have to focus on the UX you have to make that experience better than everyone else.

</details>

### 给资深工程师的建议

**Claire Vo**: 对于那些对 AI 工具持怀疑态度的资深工程师或工程领导，你会如何推销这些工具的价值？

<details>
<summary>Original English</summary>

**Claire Vo**: What would you tell kind of senior principal software engineers, engineering leaders? How do you make that pitch for the value proposition of these tools?

</details>

**John Lindquist**: 我首先想到的是自动化 Issue 处理流程。你可以设置触发器，当有人在 GitHub 提交 Issue 时，让 Claude 自动进行第一轮审查。在我的职业生涯中，处理一个 Issue 的前一两天通常都在熟悉环境：这不是我写的代码，这是谁写的？通过图表和 AI，它可以瞬间告诉你谁改动了文件、有哪些潜在风险。它能扫除所有这些枯燥的辅助工作。如果你不用它来进行调查、研究和环境熟悉，那你真的错过了太多。

<details>
<summary>Original English</summary>

**John Lindquist**: The first thing that jumps to mind is anytime an issue is opened like you can set up streamlined workflows that someone opens an issue and you can have claude automatically tackle it. All of that busy drudgery that you're going through to even get started on the issue, it can wipe out so much of that. If you're not using it to like inspect and investigate and write orientation and all that stuff, then like you're really missing out.

</details>

**Claire Vo**: 没错。我常告诉人们，不要在任务层面思考（比如“我要写代码”），而要思考：如果我给你无限的初中级人才，且他们永远在线，你会让他们做什么？你会让他们去追踪代码历史、写技术规范、调用风险。现在，这些都可以变成一个提示词。

<details>
<summary>Original English</summary>

**Claire Vo**: What I often tell people is a good way to think about how to design your AI workflows is do not think in a task level orientation like I'm going to write code. I say, think about if I gave you infinite junior to mid-career talent who is always available, who would do the work you would do if you had unlimited amount of time and no meetings. All of that could just become a prompt.

</details>

**John Lindquist**: 甚至连 **Commit 信息** 都变得更好了，因为开发者不再需要亲手写它们了（笑）。以前的提交信息全是“第二次尝试”、“求求你跑通吧”或者是脏话。

<details>
<summary>Original English</summary>

**John Lindquist**: And something as simple as the commit messages are so much better than they used to be because developers didn't have to write them. Commit messages used to be like second attempt or like please work or swear words.

</details>

**Claire Vo**: 哈哈，没错。非常感谢 John 分享你的工作流。大家可以在 **egghead.io** 找到 John 的 AI 工具课程和每周通讯。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Thank you so much for joining us and sharing your workflows. You can find John on egghead.io.

</details>