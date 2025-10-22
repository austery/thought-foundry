---
author: How I AI
date: '2025-10-22'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=MZZCW179nKM
speaker: How I AI
tags:
  - ai-workflows
  - claude-skills
  - prompt-engineering
  - ai-agents
  - reusable-workflows
title: Claude Skills 详解：如何创建可复用的AI工作流
summary: 本期节目深入探讨了Anthropic新推出的Claude Skills功能，它允许用户为Claude API或claude.ai加载特定技能和工具，从而创建可复用的AI工作流。视频详细解释了Claude Skills的结构、创建方法，并与OpenAI的Custom GPTs进行了对比，强调了Claude Skills在任务特定指令和上下文管理方面的优势。主持人还分享了通过Cursor高效创建和使用Claude Skills的实战经验，并提供了将技能部署到Claude Web UI的步骤，旨在帮助用户更好地利用AI工具提升工作效率。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
  - knowledge-pipeline
people:
  - Claire Vo
companies_orgs:
  - Anthropic
  - OpenAI
products_models:
  - Claude
  - Claude Code
  - Claude Desktop
  - Claude API
  - claude.ai
  - Chat PRD
  - Custom GPTs
  - Cursor
media_books:
  - How I AI
status: evergreen
---
### 欢迎与Claude Skills简介

欢迎回到“How I AI”。我是Claire Vo，一名产品负责人，也是一位AI狂热者，致力于帮助大家更好地利用这些新工具进行构建。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools.</p>
</details>

今天，我们将推出“How I AI”迷你系列节目的第一集。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we have the first of many how I AI mini episodes.</p>
</details>

本周我们将重点介绍**Claude Skills**（Claude 技能: Anthropic公司新发布的一项功能，允许用户为Claude API或claude.ai加载特定技能和工具，以便随时调用），这是**Anthropic**（Anthropic 公司: 一家领先的人工智能研究公司，开发了Claude系列大型语言模型）新发布的功能，它让任何人都可以创建并加载**Claude Code**（Claude 代码: Claude的编程接口）、**API**（应用程序编程接口: 允许不同软件系统相互通信的一组定义和协议）或claude.ai，使其具备可随时调用的特定技能和工具。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This week is going to be all about Claude Skills, the newly released feature from Anthropic that lets anybody create and load up Claude Code the API or claude.ai AI with specific skills and tools it can call on at any time.</p>
</details>

我将向大家介绍如何创建技能、技能是什么，以及一些关于如何在工作流中使用技能的想法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to give you a view into how to create skills, what skills are, and a couple ideas about how you can use skills in your workflows.</p>
</details>

让我们开始吧。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's get to it.</p>
</details>

本期节目由**Chat PRD**（Chat PRD: 一个AI协同工具，帮助编写产品文档并自动化协调工作）赞助播出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's episode is brought to you by Chat PRD.</p>
</details>

我知道你们中的许多人收看“How I AI”是为了学习如何实际应用人工智能并简化构建过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know that many of you are tuning into how I AI to learn practical ways you can apply AI and make it easier to build.</p>
</details>

这正是我创建Chat PRD的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's exactly why I built chat PRD.</p>
</details>

Chat PRD是一款AI副驾驶，可帮助你编写出色的产品文档，自动化繁琐的协调工作，并从专业的AI首席产品官那里获得战略指导。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chat PRD is an AI co-pilot that helps you write great product docs, automate tedious coordination work, and get strategic coaching from an expert AI CPO.</p>
</details>

它深受从增长最快的AI初创公司到拥有数百名产品经理的大型企业的所有人的喜爱。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's loved by everyone from the fastest growing AI startups to large enterprises with hundreds of PMs.</p>
</details>

无论你是想为原型进行“vibe code”（一种快速迭代和测试想法的开发方式），教新手产品经理入门，还是在大型组织中高效扩展，Chat PRD都能帮助你更快地完成更好的工作。
<details>
<summary>View/Hide Original English</p>
</details>

我们已与你喜爱的工具集成，包括vzero.dev、Dev、Google Drive、Slack、Linear、Confluence等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're integrated with the tools you love, vzero.dev, Dev, Google Drive, Slack, Linear, Confluence, and more.</p>
</details>

因此，你无需改变工作流程即可通过AI加速。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you don't have to change your workflow to accelerate with AI.</p>
</details>

请访问chatpd.ai/howiai免费试用Chat PRD，让我们再次享受产品开发的乐趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Try ChatPRD free at chatpd.ai/howiai. And let's make product fun again.</p>
</details>

### Claude Skills是什么？

今天我将和大家聊聊Claude Skills。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today I'm going to be talking to you about claude skills.</p>
</details>

Claude Skills是什么？如何创建它们？以及对于产品工程师和设计师来说，在日常工作流中使用Claude Skills有哪些好的用途？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are clawed skills? How do you create them? and what would be some good uses for folks especially product engineers and designers out there to use cloud skills in your day-to-day workflow.</p>
</details>

那么，Claude Skills究竟是什么呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what are cloud skills?</p>
</details>

Claude代理技能是一组特定的指令和上下文，无论是使用Claude Code、网页版还是桌面应用，Claude都可以调用它们来执行一组特定的任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, claude agent skills are a specific set of instructions and context that can be called on by claude whether you're using claude code, the web or desktop app to do a specific set of tasks.</p>
</details>

Claude Skills为任何使用AI的人解决了一个非常有趣的问题，那就是如何根据对话的上下文，按需调用一组指令来创建可复用的工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and Claude Skills solves a really interesting problem for anybody using AI, which is reusable workflows with a set of instructions that you want to call on demand depending on the context of your conversation.</p>
</details>

现在，你们中的许多人可能会问，为什么我不能为此使用Claude Projects（Claude 项目: Claude中用于管理特定上下文和指令的预设聊天环境）或者**OpenAI Custom GPTs**（OpenAI 自定义 GPTs: OpenAI允许用户创建的定制化GPT模型，包含特定的指令、知识和功能）或项目呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, many of you are going to say, why can't I use cloud projects for this or you know, OpenAI custom GPTs or projects?</p>
</details>

嗯，那些工具确实会坚持你在项目中加载的上下文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, those really stick with the context you've loaded in those projects.</p>
</details>

一旦你设置了一个项目，与这些项目相关的聊天总是会调用该上下文和指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once you set up a project, those chats associated with those projects always call on that context and instructions.</p>
</details>

它不是真正的动态，你也不能按需调用一个项目来让它遵循一组指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not really dynamic and you can't call on a project on demand to get it to follow a set of instructions.</p>
</details>

此外，我发现Claude Projects和OpenAI Projects以及GPTs通常具有通用目的的上下文，可以支持各种任务，但并非真正针对特定任务的指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, what I've seen is cloud projects and open AAI projects and GPTs generally have general purpose context that can feed a variety of tasks but aren't really taskspecific instructions.</p>
</details>

因此，Claude代理为你提供了真正定义任务特定指令、示例甚至可运行脚本的能力，让你的通用**聊天机器人**（Chatbot: 一种通过文本或语音与人类进行对话的计算机程序）能够代表你执行任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what Claude agents gives you is the ability to really define taskspecific instructions, examples, and even scripts you can run that allow your general purpose chatbot to really do tasks on your behalf.</p>
</details>

我喜欢Claude Skills的一点是，它真的只是自然语言。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what's nice about Quad Skills that I like is that it really is just natural language.</p>
</details>

我们已经看到太多关于代理的发布，它们都是基于工作流构建的，例如“如果这样，那么那样，调用这个工具”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've seen so many releases around agents that are really workflowbuilt, if this, then that, call on this tool.</p>
</details>

而我作为一名通用AI构建者的偏好是，既然这些模型在自然语言方面如此出色，我们就应该能够用自然语言来定义事物。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my preference as a general AI builder is, you know what, if these models are so great at natural language, we should be able to define things in natural language.</p>
</details>

因此，Claude Skills本质上是包含指令和**元数据**（Metadata: 描述数据的数据，例如技能的名称和描述）以及链接文件的**Markdown**（Markdown 标记语言: 一种轻量级标记语言，用于创建格式化文本）文件，它们允许你按需调用一个任务或技能，提供一组特定的指令，然后真正完成该任务或技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what Claude skills essentially are are markdown files with instructions and metadata and linked files that allow you to call on demand a task or skill, give a specific set of instructions, and then really get that task or skill done.</p>
</details>

### Claude Skills的结构特点

现在，以下是我对Claude Skills一般结构的一些观察。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, here are some of my observations on the general structure of Claude skills.</p>
</details>

首先，我认为它们是定义和发现你反复使用**LLM**（大型语言模型: 一种基于深度学习的AI模型，能够理解和生成人类语言）执行的任务的绝佳方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one, I think they're a really nice way to define and discover tasks that you're doing over and over and over with an LLM.</p>
</details>

因此，如果你发现自己总是以特定方式分析数据、以特定方式创建文档、执行某个工作流或运行脚本，那么你需要这些随着时间保持一致的“微指令”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you find yourself constantly analyzing data a specific way, creating a document a specific way, going through a workflow, or running a script, you want these sort of like micro instructions that stay consistent over time.</p>
</details>

我知道你们中的许多人都有一个Google文档、Markdown文件或GitHub仓库，里面保存了所有这些提示，然后你不断地复制粘贴。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I know so many of you have a Google doc or a markdown file or a GitHub repository where you've just kept all these prompts and you're copying and pasting them in.</p>
</details>

Claude Skills提供了一个结构化的框架，让你能够随着时间填充和重用这些任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude skills really gives you a structured framework for filling out and reusing those those tasks over time.</p>
</details>

我想说的另一点是，技能通过相对文件引用，可以很好地将额外内容和上下文捆绑到技能中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say the other thing that skills do quite nicely is bundle additional content and context into a skill through relative file references.</p>
</details>

因此，一个Claude技能可以引用其文件夹中的其他文件，这些引用文件可以是示例、模板或额外的指令，这有助于Claude更好地管理上下文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a claude skill can reference other files in its folder and those reference files can be examples, they can be templates, they can be additional instructions and it helps claude manage context a little bit better.</p>
</details>

所以你总是会得到代理指令，并在必要时获得从代理链接的上下文文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you're always going to get the agent instructions and when necessary you will get the contextual files linked to from the agent.</p>
</details>

因此，我认为Claude Skills的发现和上下文管理功能，正如你在这里他们的帮助文章中看到的，他们描述了上下文窗口、它使用了多少**token**（token: 语言模型处理文本的基本单位，可以是单词、字符或子词），以及何时按需调用它，这都非常有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think the discovery and context management of Claude skills, as you see here in their help um in their in their help article where they're describing the context window, how many tokens it uses, and when it's called on demand is very very useful.</p>
</details>

我想说的最后一点是，Claude Skills可以与可执行的**Python脚本**（Python scripts: 用Python编程语言编写的程序文件，可用于自动化任务、数据分析等）捆绑在一起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say the last thing is that Claude skills can come bundled with executable Python scripts.</p>
</details>

这可能更适合技术受众，但如果你需要对技能进行验证，如果你的技能正在运行某种分析、数据清理或技术实现，那么在Claude技能中引用Python文件的能力实际上是一个非常有趣的扩展，它让你不必依赖代理和LLM本身来为你定义Python并以一致的方式运行它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is maybe for more of the technical audience out there, but if you want validation of your skills, if your skills are running some sort of analysis, data cleaning, technical implementation, the ability to reference Python files within a clawed um skill is actually a really interesting extension and keeps you from having to rely on the agent and the LLM itself to define that Python for you and run it in a consistent way.</p>
</details>

因此，尽管包括Claude在内的许多工具在生成代码时都具有代码执行能力，但你会发现这些脚本或代码的定义存在很大的可变性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so while many of these tools um including Claude have sort of um code execution capabilities when they're generating that code themselves, you can see that you get high variability in the you know definition of these scripts or the code.</p>
</details>

而能够实际编写可执行脚本，这些脚本将被一致使用，并且你觉得它们代表了你想要编写的代码，这非常有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the ability to actually write out executable scripts that would be consistently used that you feel like are represent representative of the code you want to write is very very useful.</p>
</details>

### Claude Skills的物理结构

这就是Claude Skills的定义，为了真正总结一下，因为我已经描述了它们的功能和结构，Claude文件就是一个文件夹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is what claude skills are and to actually really sum it up because I've described what they do and kind of the structure cla files is is is a folder like I I don't feel we have been explicit enough in some of the documentation to talk about exactly what is a claude skill.</p>
</details>

我认为这些核心模型提供商（包括Anthropic，我爱你们，但这里有一些建议）可以做的一件事是：这些显然是工程师构建的原始功能，却期望普通人能够理解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things that I think that these core model providers can do, including Anthropic, love you, but here's some tips for you, is these are clearly primitives built by engineers expected to be grocked by everyday people.</p>
</details>

我将在这里为大家进行翻译。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to sit here and translate them for you.</p>
</details>

所以，一个Claude技能，它实际的对象，你创建的东西，就是一个文件夹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, a cloud skill, the actual object, the thing that you make is a folder.</p>
</details>

这个文件夹里面有一个`skills.md`文件，然后它可以有额外的文件在旁边。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That folder has a skills.md file in it. and then it can have additional files next to it.</p>
</details>

所以，归根结底，你设置一个Claude技能的方式，说真的，就是你要么把它放在一个Claude Code可以引用的文件夹里，要么你把这个文件夹压缩成一个zip文件，然后上传到claude.ai网站。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, at the end of the day, how you set up a Claude skill, no joke, is you either put it in a folder for Claude Code to reference or you zip up this folder and you upload it to the claude.ai website.</p>
</details>

所以，我只是想说，我实际上花了整整五分钟试图弄清楚这个技能的“资产”到底是什么，而实际的资产就是一个Markdown文件，以及一组其他文件和文件夹，它们要么被Claude Code在你的本地目录中使用，要么被压缩并上传到云端。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I just want to I you know, I spent actually a good five minutes trying to figure out like what the hell is the asset of of this skill and um the actual asset is a markdown file, a set of other files and folders either um used by claude code in your local directory or zipped up and uploaded to the cloud.</p>
</details>

所以，它们就是这样实际工作的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that's how they actually work.</p>
</details>

### `skills.md`文件内部结构

现在，我想谈谈这些文件的结构，因为我认为在我们开始创建Claude Skills时，了解文件内容非常重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to talk about what's in the structure of those files because I think it's really important as we start to create claude skills.</p>
</details>

所以，我将简单地回顾一下相关文档。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what's in the file. So, I'm just going to walk through some of the documentation on this.</p>
</details>

每个技能都必须有一个`SKILL.md`文件，他们喜欢用大写字母书写。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, every skill has to have a skill. They like write it in all caps. Skylmd file.</p>
</details>

这将是你的提示，你的指令集。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's going to be your prompt, your set of instructions.</p>
</details>

现在，一个通用指令集和技能中的开放语言指令集之间的区别在于，它实际上包含了一些结构化内容，你在创建Claude技能时需要了解这些内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the difference between the um a general set of instructions and open language set of instructions in a skill is it actually has some structured content in it that you need to know about when you're creating a claude skill.</p>
</details>

所以，你需要了解的第一件事是元数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the first thing you need to know about is the metadata.</p>
</details>

这只是你技能文件顶部的一段内容，你以特定格式放入，它会给出技能的名称，让你知道它的名字，以及一个描述，说明它的作用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is just a piece at the top of your skill file that you put in in this particular format that gives you the name of the skill so you know what it's named and a description what it does.</p>
</details>

这将帮助Claude中的代理实际知道何时调用此技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is going to help the agent in Claude actually know when to call this skill.</p>
</details>

你文件中要有的第二件事是指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing that you're going to have in that file is instructions.</p>
</details>

所以，这就是你所有提示工程技能需要发挥作用的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is where all your prompt engineering skills need to come into play.</p>
</details>

你可以在Markdown文件的正文中放入你的提示指令、自定义内容，采用Markdown格式，AI非常擅长生成这种格式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You would put your prompt instructions, custom things in markdown in markdown formatting, which AI is very good at generating in the body of the the markdown file.</p>
</details>

所以，顶部是你的元数据，然后是你的提示指令，接着是资源和可以从`skill.md`主指令中引用的其他代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at the top you have your metadata and then you have your prompt instructions and then there is resources and other code that can be referenced from that skill.md main instruction.</p>
</details>

你将通过为内容提供一个指向该文件的相对链接来完成此操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way you're going to do that is actually give the content a relative link to that file.</p>
</details>

所以，可以是`./文件名`或`./文件夹名/文件名`。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So little dot slash file name or dot slashfolder name with the file name.</p>
</details>

如果你不知道如何定义代码的相对文件结构，好消息是AI非常擅长这一点，当我们生成AI代码时，它会给你一些示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um if you don't know how to define relative file structure for code, again good news. AI is very good at that and we'll give you some examples when we generate AI code.</p>
</details>

但你可以引用代理Markdown文件旁边的文件夹，也可以引用其他文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can reference folders next to the agents um agents uh markdown file and you can also reference other files.</p>
</details>

所以，你的`skill.md`将是你的主提示，然后你可以引用其他文件，在这些文件中你可以放入必要的额外上下文，这些上下文将根据需要被技能调用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again your skill.md is going to be your master prompt and then you can reference other files in which you can put additional context that will be called as necessary by the skill.</p>
</details>

然后，正如我所说，你要么将其放在Claude Code可以使用的地方，要么将其压缩并创建为Web应用中的技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then again, as I said, you're either going to put this in a place where Cloud Code can use it or you're going to zip this up and create a skill in in the web app.</p>
</details>

### 使用claude.ai创建技能的尝试与挑战

我想创建我的第一个技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I wanted to create my first skill.</p>
</details>

Anthropic在其发布文档中实际上提到Claude内部有一个“创建技能”的技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Anthropic in their launch documents actually said that there is a create skill skill inside Claude.</p>
</details>

我没能真正找到它，但我猜测如果我进入聊天界面，我可以要求claude.ai为我创建一个技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I couldn't really find it, but I just guessed that if I went into a chat, I could ask Claude.ai AI to actually create a skill for me.</p>
</details>

所以，我只是在这里，在Claude网页应用中写道：“帮我创建技能。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I just went in here and wrote uh in in the Quad web app, help me create skills.</p>
</details>

它确实说，在这种上下文中的技能是专门的指令集，可以帮助我更有效地执行任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it does say that skills in this context are specialized instruction sets that help me perform tasks more effectively.</p>
</details>

所以在我看来，它确实内部加载了一个专门的元技能，可以帮助你构建技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it seemed to me like it does have a specialized meta skill inside loaded and clawed that can help you build skills.</p>
</details>

我将带大家回顾一下聊天过程，因为在Claude和Anthropic中实际尝试构建技能时，有一些有趣的经历。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm just going to walk you through the chat because there were some interesting experiences actually trying to build a skill in Claude and Anthropic.</p>
</details>

再次，我爱你们，但遇到了一些“尖锐的边缘”（指不完善或有待改进的地方）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, I love you, but ran into some sharp edges.</p>
</details>

我将向大家展示我真正为Claude生成技能的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to show you the way I'm really generating skills in in um for Claude.</p>
</details>

所以我让它创建技能，并按照品牌要求它创建一个**PRD**（产品需求文档: 详细描述产品功能、用户体验和技术要求的文档）生成技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I asked it to create skills and on brand I asked it to create a PRD generation skill.</p>
</details>

有趣的是，观察这个用于创建技能的Claude Code技能（非常元），它似乎经历了一个结构化的工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what was interesting about watching this uh cloud code skill to create skills very meta generate is it did seem to go through a pretty structured workflow.</p>
</details>

所以它让我了解了这些Claude代理如何实际思考使用技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it gave me a sense of how these clawed agents actually think about using skills.</p>
</details>

它读取了一个示例技能，我猜测这在技能本身的指令中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It read an example skill which I'm presuming is in the instructions of the skill itself.</p>
</details>

它查看了详细的示例，然后它似乎理解了需要做什么，并创建了这个`skill.md`文件，顶部再次是元数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It looked at detailed examples and then it kind of understood what it needed to do and it created this skill.md with again the metadata at the top.</p>
</details>

我将切换到Markdown视图，这样你就可以确切地看到它应该是什么样子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm actually going to switch into markdown view so you can see exactly what it's supposed to look like.</p>
</details>

顶部有元数据，然后是一组指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Has the metadata on top and then a set of instructions here.</p>
</details>

我从Claude技能生成器中学到的一点是，这些指令非常详细。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now something I learned from the clawed skill generator is man alive are these instructions quite detailed.</p>
</details>

所以，即使你最终没有在Claude中使用这个流程来创建你的技能（我将向你展示我在其他地方做的更高效的方法），你也可以看到它认为一个好的技能应该具备的轮廓。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, even if you don't end up using this flow in Clawude to create your skills, and I'll show you what I did elsewhere, which is a little bit more efficient, you can see the outline of what it thinks a good skill is.</p>
</details>

所以，它包括何时使用技能、关于执行技能需要做出的不同类型决策的决策树、创建文档时可能遵循的模板（实际上相当长）、编写最佳实践等所有这些内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it includes when to use the skill, what is a decision tree on on different types of decisions it needs to make about executing the skill, what's the template that it might follow when creating a document, which is quite long actually, writing uh best practices, all those sorts of things.</p>
</details>

然后它给出了一些示例PRD格式供技能选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it gave a couple example PRD formats for the skill to choose from.</p>
</details>

所以你可以非常严格地规定一个技能做什么，或者你可以更通用，或者给它很多选项。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can be very prescriptive about what a skill does or you can be more general purpose or give it a lot of options.</p>
</details>

这是我对技能的发现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's something that I noticed about skills.</p>
</details>

最后，它给出了一些要问用户的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then finally, it gave some questions to ask users.</p>
</details>

所以，这是一个有趣的地方，如果我没有在这个技能生成器中看到它，我不会把它放在我自己的提示中，但让代理实际向用户提问以获取更多澄清细节是非常有趣的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is something interesting I wouldn't have put in my own prompt if I hadn't seen it in this skill generator, but putting questions that the agent can actually ask users to get more clarifying detail is very interesting.</p>
</details>

输出格式，所以对技能本身的输出非常严格。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Output format, so being very prescriptive about the output of the skill itself.</p>
</details>

然后它给出了一堆示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it gives a bunch of examples.</p>
</details>

你可以在底部看到两件我觉得有趣但我不确定是否被使用但非常好奇的事情是关键词。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see at the bottom two things that I thought were interesting that I'm unsure if they're used but very curious is keywords.</p>
</details>

所以我猜测这些是调用技能本身的关键词。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm presuming these are keywords that invoke the skill itself.</p>
</details>

这又是我在编写提示时不会想到的，但非常有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Something again that I wouldn't have thought of when writing the prompt but is very useful.</p>
</details>

然后是额外的资源。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then additional resources.</p>
</details>

它实际上链接到它将作为额外上下文创建的示例文档。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's really linking to the example documents that it's going to create as that additional context.</p>
</details>

所以这是一个如何编写好的Claude技能的绝佳示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is a really good example of how to write a good claude skill.</p>
</details>

所以即使你没有实际使用这个流程，也值得生成一个，让你对构建一个出色的Claude技能所需的一切有一个很好的了解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even if you don't actually use this flow, it's worth generating just one to give you a good idea of what it takes to build a great claude skill.</p>
</details>

然后它有点“脱轨”的地方是，它创建了核心技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what where it kind of went off the rails is it created the core skill.</p>
</details>

它创建了一个我并不真正想要的许可证文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It created a license file which I didn't really want.</p>
</details>

它创建了一个不常用的快速参考指南。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It created a quick reference guide which is not really used.</p>
</details>

它创建了一堆示例文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It created a bunch of example files.</p>
</details>

它检查了文件大小。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It checked the file sizes.</p>
</details>

我认为使用这个工具的挑战，或者至少我在Claude AI中使用这个工具的经验是，它做了很多不必要的工作，这让我无法实际使用这个技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I think the challenge with using this tool or at least my experience of using this tool in Claude AI is it did a lot of unnecessary work that kept me from actually using the skill.</p>
</details>

所以它大概创建了，让我们看看，1、2、3、4、5、6、7、8、12个文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it created probably um let's see 1 2 3 4 5 6 7 8 12 files.</p>
</details>

它创建了12个文件，而我实际上只需要五个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It created 12 files when I really only needed five.</p>
</details>

然后糟糕的是，当我实际尝试下载这些文件时，它失败了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the crummy thing is when I actually tried to download the files, it it failed.</p>
</details>

它失败了，我收到了一个错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It failed. I got an error.</p>
</details>

所以我不得不一个一个地下载这些文件，把它们放在一个文件夹里，然后以zip文件的形式上传，才能让它们成为有效的文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I would have had to download these files one by one and put them in a folder and upload them in a zip to get them to be to be effective files.</p>
</details>

所以我认为使用claude.ai AI生成技能的这个流程，对于弄清楚系统是如何被提示来生成一个好的技能很有趣，但我不会说它是创建技能本身最有效的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this flow using cloud.ai AI to generate a skill was interesting to figure out how the system is prompted to generate a good skill, but I wouldn't say it was the most effective way to create a skill itself.</p>
</details>

### 使用Cursor高效创建Claude Skills

那么，创建Claude Skills的更好方法是什么呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what was a better way to create claude skills?</p>
</details>

我告诉大家，我发现使用**Cursor**（Cursor 代码编辑器: 一款AI驱动的代码编辑器，旨在提高开发效率）创建Claude Skills是最简单的方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I'll tell you, I found that creating cloud skills in cursor was the easiest way to get this stuff done.</p>
</details>

所以，我所做的是在我的本地机器上创建了一个完全空的文件夹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, what I did is I created a completely empty folder in my local machine.</p>
</details>

我打开了那个文件夹，它叫做“Claude Skills”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I opened up that folder. It's called Claude Skills.</p>
</details>

我在Cursor中打开了那个文件夹，然后开始了一个聊天，说：“为我创建一个用于创建Claude Skills的代理/技能。这是文档。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I opened up that folder in cursor and I started a chat that said create me a agent/skill for creating claude skills. Here are the docs.</p>
</details>

所以，我没有依赖Anthropic发布的Claude技能本身，我只是直接把文档链接给了Cursor，说明技能的结构是什么样子，然后让它创建一个用于创建技能的技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of relying on the claude skill itself that Anthropic put out, I just literally gave cursor the link to the documentation about what the structure of a skill looks like and asked it to create a skill to create skills.</p>
</details>

我必须说，这比在Claude网页应用上创建要快得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will say this was much faster than creating it on Claude on the web app.</p>
</details>

它大概花了三分钟，而我认为网页应用大概花了10分钟来生成，而且我还没能拿到文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It took probably three minutes where I think the web app took probably 10 minutes to generate and I didn't get the files and it created this nice little to-do and you can see again it's following the instructions for creating good styles.</p>
</details>

它创建了这个漂亮的待办事项，你可以再次看到它遵循了创建良好风格的指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So create the main skill.md file, create example skills, create template files, and a validation script.</p>
</details>

所以，创建主`skill.md`文件，创建示例技能，创建模板文件，以及一个验证脚本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see all of this was put in a create skill folder over here.</p>
</details>

你可以看到所有这些都被放在了这里的“create skill”文件夹中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the skill followed again that YAML formatting with the metadata at the top, the instructions in the body.</p>
</details>

这个技能再次遵循了**YAML**（YAML: 是一种数据序列化格式，常用于配置文件）格式，顶部是元数据，正文是指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was a little shorter than what Claude generated with its skills user.</p>
</details>

它比Claude用其技能用户生成的内容要短一些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it did link and reference other files.</p>
</details>

它确实链接并引用了其他文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see those template files were generated in a really nice way.</p>
</details>

你可以看到那些模板文件以一种非常好的方式生成了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the interesting things that cursor did when creating a skill for me that I was actually surprised about is it created a skill validation script.</p>
</details>

Cursor在为我创建技能时做的一件有趣的事情，让我感到惊讶的是，它创建了一个技能验证脚本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so again, this is just an example of how you can use Python within your skills is you can actually as part of your skill development ask it to run a Python script.</p>
</details>

所以，这再次只是一个例子，说明你如何在技能中使用Python，你可以在技能开发过程中要求它运行一个Python脚本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This one is a kind of funny one where it checks the YAML validation and the file formatting and if a file exists and does a little content uh content validation.</p>
</details>

这个脚本有点有趣，它检查YAML验证和文件格式，以及文件是否存在，并进行一些内容验证。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this was an interesting meta use of the Python um script calling ability, but it works.</p>
</details>

所以，这是Python脚本调用能力的一个有趣的元用途，但它确实有效。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was useful.</p>
</details>

它很有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this took just a few just a few minutes and now I have this lovely create skill folder that Claude can use.</p>
</details>

所以这只花了短短几分钟，现在我有了这个可爱的“create skill”文件夹，Claude可以使用它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now how do we actually use that?</p>
</details>

### 如何使用Claude Skills

现在我们如何实际使用它呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so I'm now happy I have my Claude skill set up.</p>
</details>

我现在很高兴我的Claude技能已经设置好了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, what I really did to actually use the skill is I fired up Claude Code.</p>
</details>

嗯，我真正使用这个技能的方法是启动了Claude Code。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as I said, these skills are available in Cloud Code, Cloud Desktop, the web app, as well as in the API, although we're not going to go into the API today.</p>
</details>

所以，正如我所说，这些技能在Claude Code、**Claude Desktop**（Claude 桌面应用: Claude的桌面版本，提供类似网页版的功能）和网页应用中可用，以及在API中，尽管我们今天不会深入探讨API。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, I thought because these files are local on my desktop, that I could just use Claude code to call these skills.</p>
</details>

所以，我想既然这些文件在我的桌面上是本地的，我可以直接使用Claude Code来调用这些技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I really wanted to see if I just fired up, typed Claude in this directory, and called the skill if it would just call it.</p>
</details>

我真的很想看看如果我直接启动，在这个目录中输入Claude，然后调用技能，它是否会直接调用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it did.</p>
</details>

它做到了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see the first prompt I put into cloud code is use the create skill skill to create a skill.</p>
</details>

所以你可以看到我输入Claude Code的第一个提示是：“使用‘创建技能’技能来创建一个技能。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is you know say that three times fast for turning change log entries into a userfacing newsletter.</p>
</details>

这有点绕口，它用于将**更新日志**（Changelog: 记录软件或产品版本更新内容的列表）条目转换为面向用户的时事通讯。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is something that I do every week for chat PRD.</p>
</details>

这是我每周为Chat PRD做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I take all of our technically generated change log entries and I write a userfacing newsletter that goes out to all of our subscribers.</p>
</details>

我将我们所有技术生成的更新日志条目，编写成一份面向用户的时事通讯，发送给所有订阅者。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is something that follows a very specific format has a very specific input, very specific output.</p>
</details>

这遵循一个非常特定的格式，有非常特定的输入和非常特定的输出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I thought it'd be great for Claude skilled.</p>
</details>

我认为这非常适合Claude技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So quad code picked up that skill right away which is really nice and helped me create a skill for turning change log entries into a userfacing newsletter.</p>
</details>

所以Claude Code立即识别了这个技能，这非常好，并帮助我创建了一个将更新日志条目转换为面向用户时事通讯的技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's going through the repository or the folder.</p>
</details>

它正在遍历仓库或文件夹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's looking for where the skills exist and it found my create skill markdown file.</p>
</details>

它正在寻找技能存在的位置，并找到了我的“create skill”Markdown文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It read it and it understands the structure of creating a skill and then it went ahead and created a directory for my change log to newsletter skill.</p>
</details>

它读取了文件，理解了创建技能的结构，然后继续为我的“更新日志到时事通讯”技能创建了一个目录。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wrote the content in the right format validated the skill with that Python script and then gave me a summary.</p>
</details>

它以正确的格式编写了内容，用那个Python脚本验证了技能，然后给了我一个摘要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this skill is much simpler than the skill I generated before.</p>
</details>

这个技能比我之前生成的技能简单得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see, it's a single file.</p>
</details>

如你所见，它是一个单一文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has the metadata at top and then it has a long set of instructions.</p>
</details>

顶部有元数据，然后是一长串指令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, you don't have to use all these linked files and folders when you're creating skills.</p>
</details>

所以，再次强调，你在创建技能时不必使用所有这些链接的文件和文件夹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can really put in a good prompt and have that be that.</p>
</details>

你真的可以只输入一个好的提示，然后就完成了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now I have another skill in this claude skills folder or repository generated by my meta create skills skill.</p>
</details>

但现在我在这个Claude Skills文件夹或仓库中有了另一个技能，它是由我的元“创建技能”技能生成的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what I did once that skill was generated is I actually called it.</p>
</details>

然后，一旦那个技能生成了，我实际上就调用了它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what was really fun about using this is you don't have to use like a magic a magic word.</p>
</details>

使用这个的真正乐趣在于，你不需要使用像“咒语”一样的词语。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You don't have to say like invoke the claude skill to do AB and C.</p>
</details>

你不需要说“调用Claude技能来做A、B、C”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can literally I said okay here's the latest change log.</p>
</details>

我只是简单地说：“好的，这是最新的更新日志。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the only keyword it had was change log.</p>
</details>

所以它唯一的关键词就是“更新日志”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with that context the claude agent was able to take my change log and say I'm going to take this technical change log and turn it into an engaging newsletter.</p>
</details>

有了这个上下文，Claude代理就能够获取我的更新日志，并说：“我将把这个技术更新日志转换成一份引人入胜的时事通讯。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I didn't say turn it into a newsletter.</p>
</details>

我没有说“把它变成时事通讯”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I didn't say use the skill.</p>
</details>

我没有说“使用这个技能”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I literally just said here's a change log and it inferred what I wanted based on the skills available in my folder and wrote a update for our October 2025 product updates.</p>
</details>

我只是简单地说“这是一个更新日志”，它就根据我文件夹中可用的技能推断出我想要什么，并为我们2025年10月的产品更新编写了一份更新。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, looking at this, what's interesting is I would look at this and I would go maybe my my skill is a little too emoji heavy.</p>
</details>

现在，看看这个，有趣的是，我会看着它，然后想，也许我的技能表情符号用得有点多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I would revise the skill over and over and over again to make sure it follows the format and structure that I want for the um the task at hand.</p>
</details>

我会一遍又一遍地修改这个技能，以确保它遵循我为手头任务想要的格式和结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But at the end of the day, this took me 3 minutes to create the skill and probably one minute to generate the newsletter.</p>
</details>

但归根结底，我花了3分钟创建这个技能，大概1分钟生成了时事通讯。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I have a skill that I can use all the time.</p>
</details>

现在我拥有了一个可以一直使用的技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just thinking for through other skills I might generate, I could do something like create a skill to turn customer demos into followup emails for trial prospects.</p>
</details>

仅仅思考我可能生成的其他技能，我可以做一些类似创建技能的事情，将客户演示转化为试用潜在客户的后续电子邮件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What claude code is going to do now is it's again going to invoke that skill creator skill.</p>
</details>

Claude Code现在将再次调用那个技能创建者技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to create a new skill over here in the lefth hand which you see already demo to followup.</p>
</details>

它将在左侧创建一个新技能，你已经看到了“demo to followup”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it'll put the instructions in and ready to go.</p>
</details>

它会把指令放进去，然后就可以使用了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for anybody that's trying to get started with Claude Skills, this is the flow that I would recommend.</p>
</details>

所以，对于任何想开始使用Claude Skills的人，这是我推荐的流程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Create a folder that you can go into on your computer, make it your Claude Skills repository.</p>
</details>

在你的电脑上创建一个文件夹，作为你的Claude Skills仓库。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to get fancy and deploy it to GitHub, you can.</p>
</details>

如果你想更高级一点，并将其部署到GitHub，你可以这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe I'll deploy this one to GitHub and share it with you all.</p>
</details>

也许我会把这个部署到GitHub并分享给大家。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">create a skill to create a skill or maybe I'll again share this with you all and you can clone my skill and then just ask claude code to make your skills and then whenever you're in claude code in this you know folder what you can do is invoke those skills to do a variety of tasks that you think are really important and improve the quality of those tasks over time.</p>
</details>

创建一个用于创建技能的技能，或者我再次将这个分享给大家，你可以克隆我的技能，然后只需让Claude Code创建你的技能，然后每当你在Claude Code的这个文件夹中时，你就可以调用这些技能来执行各种你认为非常重要的任务，并随着时间的推移提高这些任务的质量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the really simple guide to creating clawed skills in cursor.</p>
</details>

所以，这就是在Cursor中创建Claude Skills的非常简单的指南。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's see.</p>
</details>

我们来看看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's thinking about it.</p>
</details>

它正在思考。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's taking 74 seconds.</p>
</details>

嗯，它花了74秒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll wait 1 minute and see what comes back for our demo to follow-up skill.</p>
</details>

我们等1分钟，看看我们的“演示到后续”技能会返回什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so about three again I think these just take 3 minutes.</p>
</details>

好的，大概又过了三分钟，我想这些大概只需要3分钟。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">3 minutes later it wrote this demo to follow-up skill which we can see up here.</p>
</details>

3分钟后，它编写了这个“演示到后续”技能，我们可以在这里看到。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um that transfers customer demo notes into personalized follow-up emails.</p>
</details>

它将客户演示笔记转换为个性化的后续电子邮件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's running the Python validation script on that skill, which again I think it's a little bit overkill, but you know, you do you Claude.</p>
</details>

它正在对该技能运行Python验证脚本，我再次认为这有点过度，但你知道，Claude，你做你的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I have again another skill here in my folder that I can invoke at any time.</p>
</details>

现在我的文件夹中又有了另一个技能，我可以随时调用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's how in about 3 minutes, the little creative editing, you can get another skill for Claude skills.</p>
</details>

所以，这就是如何在大约3分钟内，通过一点创意编辑，为Claude Skills获得另一个技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the last thing I want to show you is how you actually get those into the web UI or the desktop app, which I know a lot of you are using.</p>
</details>

### 将技能部署到Claude Web UI或桌面应用

现在，我想向大家展示的最后一件事是，如何将这些技能实际导入**Web UI**（网页用户界面: 通过网页浏览器访问和操作的界面）或桌面应用，我知道你们很多人都在使用这些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, um, again, as I said, these are zipped up files that you need to upload into Claude.</p>
</details>

所以，嗯，正如我所说，这些是需要上传到Claude的压缩文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what you would do is go into your Finder or into your file browser in your desktop.</p>
</details>

所以，你要做的是进入你的Finder或桌面上的文件浏览器。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you would zip up this file as you need into a zip.</p>
</details>

嗯，你会根据需要将这个文件压缩成一个zip文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'm gonna I actually haven't done this before, so we're doing it live.</p>
</details>

然后我将——我实际上以前没做过这个，所以我们正在直播。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you would upload that skill into the capabilities.</p>
</details>

嗯，你会将那个技能上传到功能区。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this didn't work because my skill name can only contain lowercase letters.</p>
</details>

嗯，这没成功，因为我的技能名称只能包含小写字母。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to try that again.</p>
</details>

所以，我将再试一次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it seems like the skill names need to be hyphenated little guys in here.</p>
</details>

嗯，看起来这里的技能名称需要是带连字符的小写字母。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're going to just do this one more time.</p>
</details>

所以，我们再做一次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to save this.</p>
</details>

我将保存这个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to update my skill to write skills.</p>
</details>

我将更新我的技能以编写技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's try this again.</p>
</details>

我们再试一次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

好的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to zip this.</p>
</details>

所以，我将压缩这个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to try to upload this um demo to followup skill in the clawed UI.</p>
</details>

我将尝试在Claude UI中上传这个“演示到后续”技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bravo.</p>
</details>

太棒了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I did it.</p>
</details>

我成功了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

好的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I got to update my thing.</p>
</details>

所以，我需要更新我的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I can transform customer demo notes into a personalized follow-up email.</p>
</details>

现在我可以将客户演示笔记转换为个性化的后续电子邮件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can then use that skill now into my chat.</p>
</details>

我现在可以在我的聊天中使用那个技能了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can see here that I just added the skill.</p>
</details>

所以你可以在这里看到我刚刚添加了这个技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good job, Anthropic doing that nice little seamless uh workflow into the chat.</p>
</details>

Anthropic做得很好，将这个流畅的小工作流无缝集成到聊天中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to read that skill.</p>
</details>

它将读取那个技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's probably going to ask me for some notes.</p>
</details>

它可能会向我索要一些笔记。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I can take my latest chat PRD demo and drop it right into Claude for it to create a follow-up email on my behalf.</p>
</details>

然后我就可以把我的最新Chat PRD演示直接拖到Claude中，让它代表我创建一封后续电子邮件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that is our first mini episode on claude skills.</p>
</details>

### 总结与展望

所以，这就是我们关于Claude Skills的第一集迷你节目。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I talked about what claude skills are, how they are differentiated against other ways you can provide context in your app.</p>
</details>

我谈到了Claude Skills是什么，它们与你在应用中提供上下文的其他方式有何不同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How to try to create claude skills using claude which is not my favorite.</p>
</details>

如何尝试使用Claude创建Claude Skills，这不是我最喜欢的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How to actually create claude skills using cursor which is my favorite.</p>
</details>

如何实际使用Cursor创建Claude Skills，这是我最喜欢的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then how to invoke those skills using claude code or the claude web app by uploading them as a zip file.</p>
</details>

然后是如何使用Claude Code或Claude网页应用通过上传zip文件来调用这些技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you like content like this, let us know.</p>
</details>

如果你喜欢这样的内容，请告诉我们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are going to do deep dives on how to use some of the newest capabilities in these AI products.</p>
</details>

我们将深入探讨如何使用这些AI产品中一些最新的功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll share some of how I AI in my day-to-day and we will get you the best workflows in AI to improve your work life and your personal life.</p>
</details>

我将分享一些我日常生活中如何使用AI的经验，我们将为你提供AI中最好的工作流，以改善你的工作和个人生活。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you so much for joining How I AI and we'll talk to you soon.</p>
</details>

非常感谢你收看“How I AI”，我们很快会再聊。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching.</p>
</details>

非常感谢你的观看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you enjoyed this show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts.</p>
</details>

如果你喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下你的评论和想法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app.</p>
</details>

你也可以在Apple Podcasts、Spotify或你喜欢的播客应用上找到这个播客。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please consider leaving us a rating and review, which will help others find the show.</p>
</details>

请考虑给我们留下评分和评论，这将帮助其他人找到这个节目。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see all our episodes and learn more about the show at howiaipod.com.</p>
</details>

你可以在howiaipod.com查看我们所有的节目并了解更多信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See you next time.</p>
</details>

下次再见。