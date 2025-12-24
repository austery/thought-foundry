---
area: tech-engineering
category: ai-ml
companies_orgs:
- Anthropic
- OpenAI
date: '2025-11-01'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
- YouTube
- Apple Podcasts
- Spotify
- howiaipod.com
people:
- Claire Vo
products_models:
- Claude
- Claude Code
- Claude Skills
- Chat PRD
- Custom GPTs
- Cursor
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=MZZCW179nKM
speaker: How I AI
status: evergreen
summary: 本期节目深入探讨了Anthropic最新发布的Claude Skills功能，该功能允许用户为Claude Code、API或claude.ai加载特定的技能和工具，从而实现可复用的AI工作流。节目详细介绍了Claude
  Skills的创建方法、结构组成及其与传统AI项目（如OpenAI Custom GPTs）的区别，并提供了通过Cursor高效创建技能的实用教程，以及如何在Claude
  Code和Web应用中调用和部署这些技能，旨在帮助用户提升AI应用效率。
tags:
- code
- geopolitical
- llm
- skill
title: 深入解析Claude Skills：如何创建可复用的AI工作流
---

### 欢迎与节目介绍

欢迎回到“How I AI”节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI.</p>
</details>

我是Claire Vo，一位产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具进行构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools.</p>
</details>

今天，我们将推出“How I AI”迷你系列节目的第一期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we have the first of many how I AI mini episodes.</p>
</details>

本周我们将重点介绍**Claude Skills**（Claude技能），这是**Anthropic**（一家领先的人工智能安全和研究公司）最新发布的功能，它允许任何人创建并加载Claude Code、**API**（应用程序编程接口）或claude.ai，使其具备随时可以调用的特定技能和工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This week is going to be all about Claude Skills, the newly released feature from Anthropic that lets anybody create and load up Claude Code the API or claude.ai AI with specific skills and tools it can call on at any time.</p>
</details>

我将向大家展示如何创建技能、技能的本质，以及一些关于如何在工作流中使用技能的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to give you a view into how to create skills, what skills are, and a couple ideas about how you can use skills in your workflows.</p>
</details>

让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's get to it.</p>
</details>

### 赞助商信息：Chat PRD

今天的节目由**Chat PRD**赞助播出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's episode is brought to you by Chat PRD.</p>
</details>

我知道你们中的许多人收听“How I AI”是为了学习如何实际应用AI并简化构建过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know that many of you are tuning into how I AI to learn practical ways you can apply AI and make it easier to build.</p>
</details>

这正是我创建Chat PRD的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's exactly why I built chat PRD.</p>
</details>

Chat PRD是一款AI副驾驶，可帮助您撰写出色的产品文档、自动化繁琐的协调工作，并从专业的AI首席产品官那里获得战略指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chat PRD is an AI co-pilot that helps you write great product docs, automate tedious coordination work, and get strategic coaching from an expert AI CPO.</p>
</details>

它深受从发展最快的AI初创公司到拥有数百名产品经理的大型企业的喜爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's loved by everyone from the fastest growing AI startups to large enterprises with hundreds of PMs.</p>
</details>

无论您是想为原型进行“vibe code”、教导初次担任产品经理的同事，还是在大型组织中高效扩展，Chat PRD都能帮助您更快地完成更好的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether you're trying to vibe code a prototype, teach a firsttime PM the ropes, or scale efficiently in a large organization, ChatPD helps you do better work fast.</p>
</details>

我们已与您喜爱的工具集成，包括vzero.dev、Dev、Google Drive、Slack、Linear、Confluence等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're integrated with the tools you love, vzero.dev, Dev, Google Drive, Slack, Linear, Confluence, and more.</p>
</details>

因此，您无需改变工作流即可通过AI加速。

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

今天我将向大家介绍Claude Skills：它们是什么？如何创建它们？以及对于产品工程师和设计师来说，如何在日常工作流中有效地利用Claude Skills。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today I'm going to be talking to you about claude skills. What are clawed skills? How do you create them? and what would be some good uses for folks especially product engineers and designers out there to use cloud skills in your day-to-day workflow.</p>
</details>

那么，Claude Skills究竟是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what are cloud skills?</p>
</details>

**Claude Agent Skills**是一组特定的指令和上下文，可以被Claude调用，无论您是使用**Claude Code**（Anthropic为开发者提供的代码交互环境）、网页版还是桌面应用，都能执行特定的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, claude agent skills are a specific set of instructions and context that can be called on by claude whether you're using claude code, the web or desktop app to do a specific set of tasks.</p>
</details>

Claude Skills为所有AI用户解决了一个非常有趣的问题，那就是如何实现可复用的工作流，其中包含一组您希望根据对话上下文按需调用的指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and Claude Skills solves a really interesting problem for anybody using AI, which is reusable workflows with a set of instructions that you want to call on demand depending on the context of your conversation.</p>
</details>

现在，许多人可能会问：“为什么我不能用Claude Projects或者**OpenAI Custom GPTs**（OpenAI的自定义GPT功能）或Projects来做这个呢？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, many of you are going to say, why can't I use cloud projects for this or you know, OpenAI custom GPTs or projects?</p>
</details>

嗯，那些功能确实会固守您在项目中加载的上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, those really stick with the context you've loaded in those projects.</p>
</details>

一旦您设置了一个项目，与该项目关联的聊天总是会调用相同的上下文和指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once you set up a project, those chats associated with those projects always call on that context and instructions.</p>
</details>

它不是真正动态的，您也不能按需调用一个项目来让它遵循一组指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not really dynamic and you can't call on a project on demand to get it to follow a set of instructions.</p>
</details>

此外，我发现Claude Projects和OpenAI Projects及GPTs通常具有通用目的的上下文，可以支持各种任务，但并非真正针对特定任务的指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, what I've seen is cloud projects and open AAI projects and GPTs generally have general purpose context that can feed a variety of tasks but aren't really taskspecific instructions.</p>
</details>

因此，Claude Agents为您提供了真正定义特定任务指令、示例甚至可运行脚本的能力，让您的通用聊天机器人能够代表您执行任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what Claude agents gives you is the ability to really define taskspecific instructions, examples, and even scripts you can run that allow your general purpose chatbot to really do tasks on your behalf.</p>
</details>

我喜欢Claude Skills的一点是，它实际上只是自然语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what's nice about Quad Skills that I like is that it really is just natural language.</p>
</details>

我们看到许多关于代理的发布，它们更多是基于工作流构建的，例如“如果这样，就那样，调用这个工具”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've seen so many releases around agents that are really workflowbuilt, if this, then that, call on this tool.</p>
</details>

而我作为一名普通的AI构建者，更倾向于认为，既然这些模型在自然语言方面如此出色，我们就应该能够用自然语言来定义事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my preference as a general AI builder is, you know what, if these models are so great at natural language, we should be able to define things in natural language.</p>
</details>

因此，Claude Skills本质上是包含指令、**Metadata**（元数据）和链接文件的**Markdown**（一种轻量级标记语言）文件，允许您按需调用任务或技能，提供一组特定的指令，然后真正完成该任务或技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what Claude skills essentially are are markdown files with instructions and metadata and linked files that allow you to call on demand a task or skill, give a specific set of instructions, and then really get that task or skill done.</p>
</details>

### Claude Skills的结构与优势

现在，以下是我对Claude Skills一般结构的一些观察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, here are some of my observations on the general structure of Claude skills.</p>
</details>

首先，我认为它们是定义和发现您在使用**LLM**（大型语言模型）时反复执行的任务的绝佳方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one, I think they're a really nice way to define and discover tasks that you're doing over and over and over with an LLM.</p>
</details>

因此，如果您发现自己总是以特定方式分析数据、以特定方式创建文档、执行工作流或运行脚本，那么您会希望这些微指令能够随着时间保持一致。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you find yourself constantly analyzing data a specific way, creating a document a specific way, going through a workflow, or running a script, you want these sort of like micro instructions that stay consistent over time.</p>
</details>

我知道你们很多人都有一个Google文档、Markdown文件或GitHub仓库，里面保存了所有这些**Prompt**（提示词），并且您一直在复制粘贴它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I know so many of you have a Google doc or a markdown file or a GitHub repository where you've just kept all these prompts and you're copying and pasting them in.</p>
</details>

Claude Skills为您提供了一个结构化的框架，用于随着时间填充和重用这些任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude skills really gives you a structured framework for filling out and reusing those those tasks over time.</p>
</details>

我想说的另一点是，技能可以很好地通过相对文件引用将额外的**内容和上下文**捆绑到技能中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say the other thing that skills do quite nicely is bundle additional content and context into a skill through relative file references.</p>
</details>

因此，一个Claude技能可以引用其文件夹中的其他文件，这些引用文件可以是示例、模板或附加指令，这有助于Claude更好地管理上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a claude skill can reference other files in its folder and those reference files can be examples, they can be templates, they can be additional instructions and it helps claude manage context a little bit better.</p>
</details>

这样，您将始终获得代理指令，并在必要时获得从代理链接的上下文文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you're always going to get the agent instructions and when necessary you will get the contextual files linked to from the agent.</p>
</details>

因此，我认为Claude Skills的发现和上下文管理功能，正如您在这里在他们的帮助文章中看到的，他们描述了上下文窗口、它使用了多少**Token**（AI处理的文本单位），以及何时按需调用它，这都非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think the discovery and context management of Claude skills, as you see here in their help um in their in their help article where they're describing the context window, how many tokens it uses, and when it's called on demand is very very useful.</p>
</details>

我想说的最后一点是，Claude Skills可以与可执行的**Python脚本**捆绑在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say the last thing is that Claude skills can come bundled with executable Python scripts.</p>
</details>

这可能更适合技术受众，但如果您的技能需要进行某种分析、数据清理或技术实现验证，那么在Claude技能中引用Python文件的能力是一个非常有趣的扩展，并且可以避免您依赖代理和LLM本身来为您定义Python并以一致的方式运行它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is maybe for more of the technical audience out there, but if you want validation of your skills, if your skills are running some sort of analysis, data cleaning, technical implementation, the ability to reference Python files within a clawed um skill is actually a really interesting extension and keeps you from having to rely on the agent and the LLM itself to define that Python for you and run it in a consistent way.</p>
</details>

因此，尽管许多工具，包括Claude，都具有代码执行能力，但当它们自己生成代码时，您会发现这些脚本或代码的定义存在很大的可变性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so while many of these tools um including Claude have sort of um code execution capabilities when they're generating that code themselves, you can see that you get high variability in the you know definition of these scripts or the code.</p>
</details>

而能够实际编写出可一致使用的可执行脚本，并且您认为这些脚本代表了您想要编写的代码，这非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the ability to actually write out executable scripts that would be consistently used that you feel like are represent representative of the code you want to write is very very useful.</p>
</details>

### Claude Skills的实际构成

这就是Claude Skills的本质。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is what claude skills are and to actually really sum it up because I've described what they do and kind of the structure cla files is is is a folder like I I don't feel we have been explicit enough in some of the documentation to talk about exactly what is a claude skill.</p>
</details>

为了真正总结一下，因为我已经描述了它们的功能和结构，Claude文件是一个文件夹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things that I think that these core model providers can do, including Anthropic, love you, but here's some tips for you, is these are clearly primitives built by engineers expected to be grocked by everyday people.</p>
</details>

我认为这些核心模型提供商，包括Anthropic，可以做得更好的一点是，这些显然是由工程师构建的原始功能，却期望普通人能够理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to sit here and translate them for you.</p>
</details>

我将在这里为大家解释。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, a cloud skill, the actual object, the thing that you make is a folder.</p>
</details>

所以，一个Claude技能，它实际的“对象”，也就是您创建的东西，是一个文件夹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That folder has a skills.md file in it. and then it can have additional files next to it.</p>
</details>

这个文件夹里有一个`skills.md`文件，旁边还可以有其他文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, at the end of the day, how you set up a Claude skill, no joke, is you either put it in a folder for Claude Code to reference or you zip up this folder and you upload it to the claude.ai website.</p>
</details>

所以，说到底，设置一个Claude技能，说真的，就是您要么把它放在一个文件夹里供Claude Code引用，要么把这个文件夹打包成zip文件上传到claude.ai网站。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I just want to I you know, I spent actually a good five minutes trying to figure out like what the hell is the asset of of this skill and um the actual asset is a markdown file, a set of other files and folders either um used by claude code in your local directory or zipped up and uploaded to the cloud.</p>
</details>

我只想说，我花了好几分钟才弄清楚这个技能的“资产”到底是什么，实际上，它就是一个Markdown文件，以及一组其他文件和文件夹，这些文件和文件夹要么由Claude Code在您的本地目录中使用，要么被打包成zip文件上传到云端。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that's how they actually work.</p>
</details>

这就是它们实际的工作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to talk about what's in the structure of those files because I think it's really important as we start to create claude skills.</p>
</details>

现在，我想谈谈这些文件的结构中包含什么，因为当我们开始创建Claude技能时，了解文件内容非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what's in the file.</p>
</details>

所以，我将简单介绍一下相关文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm just going to walk through some of the documentation on this.</p>
</details>

每个技能都必须有一个他们称之为“SKILL.md”的文件，全部大写。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, every skill has to have a skill. They like write it in all caps. Skylmd file.</p>
</details>

这将是您的Prompt，您的指令集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's going to be your prompt, your set of instructions.</p>
</details>

现在，一个通用指令集和技能中开放语言指令集的区别在于，它实际上包含一些您在创建Claude技能时需要了解的结构化内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the difference between the um a general set of instructions and open language set of instructions in a skill is it actually has some structured content in it that you need to know about when you're creating a claude skill.</p>
</details>

所以，您需要了解的第一件事是**Metadata**（元数据）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the first thing you need to know about is the metadata.</p>
</details>

这只是您技能文件顶部的一段内容，您需要以特定格式放置，它会给出技能的名称和描述，让您知道它的作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is just a piece at the top of your skill file that you put in in this particular format that gives you the name of the skill so you know what it's named and a description what it does.</p>
</details>

这将帮助Claude中的代理实际知道何时调用此技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is going to help the agent in Claude actually know when to call this skill.</p>
</details>

您文件中将包含的第二件事是**Instructions**（指令）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing that you're going to have in that file is instructions.</p>
</details>

这就是您所有**Prompt Engineering**（提示词工程：设计和优化AI提示词以获得期望输出的技术）技能需要发挥作用的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is where all your prompt engineering skills need to come into play.</p>
</details>

您会将您的Prompt指令和自定义内容以Markdown格式放入Markdown文件的正文中，AI非常擅长生成这种格式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You would put your prompt instructions, custom things in markdown in markdown formatting, which AI is very good at generating in the body of the the markdown file.</p>
</details>

所以，顶部是您的元数据，然后是您的Prompt指令，然后是可以通过`skill.md`主指令引用的资源和其他代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at the top you have your metadata and then you have your prompt instructions and then there is resources and other code that can be referenced from that skill.md main instruction.</p>
</details>

您将通过提供内容到该文件的相对链接来完成此操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way you're going to do that is actually give the content a relative link to that file.</p>
</details>

例如，`./文件名`或`./文件夹名/文件名`。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So little dot slash file name or dot slashfolder name with the file name.</p>
</details>

如果您不知道如何定义代码的相对文件结构，好消息是AI非常擅长此道，并且在我们生成AI代码时会提供一些示例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um if you don't know how to define relative file structure for code, again good news. AI is very good at that and we'll give you some examples when we generate AI code.</p>
</details>

但是您可以引用代理的Markdown文件旁边的文件夹，也可以引用其他文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can reference folders next to the agents um agents uh markdown file and you can also reference other files.</p>
</details>

所以，您的`skill.md`将是您的主Prompt，然后您可以引用其他文件，在其中放入必要的额外上下文，这些上下文将根据需要由技能调用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again your skill.md is going to be your master prompt and then you can reference other files in which you can put additional context that will be called as necessary by the skill.</p>
</details>

然后，正如我所说，您要么将其放在Claude Code可以使用的位置，要么将其打包成zip文件并在Web应用中创建一个技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then again, as I said, you're either going to put this in a place where Cloud Code can use it or you're going to zip this up and create a skill in in the web app.</p>
</details>

### 创建Claude Skills：Claude.ai与Cursor的对比

我曾想创建我的第一个技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I wanted to create my first skill.</p>
</details>

Anthropic在其发布文档中提到Claude内部有一个“创建技能”的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Anthropic in their launch documents actually said that there is a create skill skill inside Claude.</p>
</details>

我没能真正找到它，但我猜测如果我进入聊天界面，我可以要求claude.ai为我创建一个技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I couldn't really find it, but I just guessed that if I went into a chat, I could ask Claude.ai AI to actually create a skill for me.</p>
</details>

所以我只是在这里，在Claude网页应用中写道：“帮我创建技能。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I just went in here and wrote uh in in the Quad web app, help me create skills.</p>
</details>

它确实说，在这个上下文中，技能是专门的指令集，可以帮助它更有效地执行任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it does say that skills in this context are specialized instruction sets that help me perform tasks more effectively.</p>
</details>

所以在我看来，它确实加载了一个专门的元技能，可以帮助您构建技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it seemed to me like it does have a specialized meta skill inside loaded and clawed that can help you build skills.</p>
</details>

我将带您回顾一下聊天过程，因为在Claude和Anthropic中尝试构建技能时，确实有一些有趣的体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm just going to walk you through the chat because there were some interesting experiences actually trying to build a skill in Claude and Anthropic.</p>
</details>

再次，我爱你们，但遇到了一些“尖锐的边缘”（不完善的地方）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, I love you, but ran into some sharp edges.</p>
</details>

我将向您展示我真正生成Claude技能的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to show you the way I'm really generating skills in in um for Claude.</p>
</details>

所以我让它创建技能，并且我要求它创建一个**PRD**（产品需求文档）生成技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I asked it to create skills and on brand I asked it to create a PRD generation skill.</p>
</details>

观察这个Claude Code技能如何创建技能（非常元）生成的过程，有趣的是它似乎经历了一个非常结构化的工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what was interesting about watching this uh cloud code skill to create skills very meta generate is it did seem to go through a pretty structured workflow.</p>
</details>

这让我了解了这些Claude代理是如何思考使用技能的。

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

我将切换到Markdown视图，以便您能确切看到它应该是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm actually going to switch into markdown view so you can see exactly what it's supposed to look like.</p>
</details>

它顶部有元数据，然后是一组指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Has the metadata on top and then a set of instructions here.</p>
</details>

我从Claude技能生成器中学到的一点是，这些指令非常详细。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now something I learned from the clawed skill generator is man alive are these instructions quite detailed.</p>
</details>

所以，即使您最终没有在Claude中使用这种流程来创建技能（我将向您展示我在其他地方做的更高效的方法），您也可以看到它认为一个好的技能应该包含什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, even if you don't end up using this flow in Clawude to create your skills, and I'll show you what I did elsewhere, which is a little bit more efficient, you can see the outline of what it thinks a good skill is.</p>
</details>

它包括何时使用技能、关于执行技能需要做出的不同类型决策的决策树、创建文档时可能遵循的模板（实际上相当长）、撰写最佳实践等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it includes when to use the skill, what is a decision tree on on different types of decisions it needs to make about executing the skill, what's the template that it might follow when creating a document, which is quite long actually, writing uh best practices, all those sorts of things.</p>
</details>

然后它给出了一些示例PRD格式供技能选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it gave a couple example PRD formats for the skill to choose from.</p>
</details>

所以您可以非常具体地规定一个技能做什么，也可以更通用，或者给它很多选项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can be very prescriptive about what a skill does or you can be more general purpose or give it a lot of options.</p>
</details>

这是我注意到技能的一个特点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's something that I noticed about skills.</p>
</details>

最后，它给出了一些要问用户的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then finally, it gave some questions to ask users.</p>
</details>

这是一个有趣的地方，如果我没有在这个技能生成器中看到它，我可能不会在自己的Prompt中加入，但让代理实际向用户提问以获取更多澄清细节是非常有趣的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is something interesting I wouldn't have put in my own prompt if I hadn't seen it in this skill generator, but putting questions that the agent can actually ask users to get more clarifying detail is very interesting.</p>
</details>

输出格式，它对技能本身的输出非常具体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Output format, so being very prescriptive about the output of the skill itself.</p>
</details>

然后它给出了很多示例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it gives a bunch of examples.</p>
</details>

您可以在底部看到两件我认为很有趣的事情，我不确定它们是否被使用，但我非常好奇的是**Keywords**（关键词）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see at the bottom two things that I thought were interesting that I'm unsure if they're used but very curious is keywords.</p>
</details>

所以我猜测这些是调用技能本身的关键词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm presuming these are keywords that invoke the skill itself.</p>
</details>

这又是我在编写Prompt时不会想到的，但非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Something again that I wouldn't have thought of when writing the prompt but is very useful.</p>
</details>

然后是附加资源。

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

所以即使您不实际使用这个流程，也值得生成一个，以便对如何构建一个优秀的Claude技能有一个很好的了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even if you don't actually use this flow, it's worth generating just one to give you a good idea of what it takes to build a great claude skill.</p>
</details>

然后它有点“跑偏”了，它创建了核心技能，创建了一个我并不想要的许可证文件，创建了一个不怎么使用的快速参考指南，创建了一堆示例文件，它还检查了文件大小。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what where it kind of went off the rails is it created the core skill. It created a license file which I didn't really want. It created a quick reference guide which is not really used. It created a bunch of example files. It checked the file sizes.</p>
</details>

我认为使用这个工具，或者至少我在Claude AI中使用这个工具的经验是，它做了很多不必要的工作，这阻碍了我实际使用这个技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I think the challenge with using this tool or at least my experience of using this tool in Claude AI is it did a lot of unnecessary work that kept me from actually using the skill.</p>
</details>

所以它大概创建了，让我们看看，1、2、3、4、5、6、7、8、12个文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it created probably um let's see 1 2 3 4 5 6 7 8 12 files.</p>
</details>

它创建了12个文件，而我实际上只需要5个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It created 12 files when I really only needed five.</p>
</details>

然后糟糕的是，当我实际尝试下载这些文件时，它失败了，我收到了一个错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the crummy thing is when I actually tried to download the files, it it failed. It failed. I got an error.</p>
</details>

所以我不得不一个一个地下载这些文件，把它们放在一个文件夹里，然后打包成zip文件上传，才能让它们生效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I would have had to download these files one by one and put them in a folder and upload them in a zip to get them to be to be effective files.</p>
</details>

所以，我认为使用claude.ai来生成技能的这个流程，对于弄清楚系统是如何被Prompt来生成一个好的技能很有趣，但我不会说它是创建技能本身最有效的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this flow using cloud.ai AI to generate a skill was interesting to figure out how the system is prompted to generate a good skill, but I wouldn't say it was the most effective way to create a skill itself.</p>
</details>

那么，有没有更好的方法来创建Claude技能呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what was a better way to create claude skills?</p>
</details>

嗯，我告诉您，我发现使用**Cursor**（一款由AI驱动的代码编辑器）创建Claude技能是最简单的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I'll tell you, I found that creating cloud skills in cursor was the easiest way to get this stuff done.</p>
</details>

所以，我所做的是在我的本地机器上创建了一个完全空的文件夹，我打开了那个名为“Claude Skills”的文件夹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, what I did is I created a completely empty folder in my local machine. I opened up that folder. It's called Claude Skills.</p>
</details>

我在Cursor中打开了那个文件夹，然后开始了一个聊天，说：“为我创建一个用于创建Claude技能的代理/技能。这是文档。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I opened up that folder in cursor and I started a chat that said create me a agent/skill for creating claude skills. Here are the docs.</p>
</details>

所以，我没有依赖Anthropic发布的Claude技能本身，我只是直接给了Cursor关于技能结构文档的链接，并要求它创建一个用于创建技能的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of relying on the claude skill itself that Anthropic put out, I just literally gave cursor the link to the documentation about what the structure of a skill looks like and asked it to create a skill to create skills.</p>
</details>

我得说这比在Claude网页应用上创建要快得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will say this was much faster than creating it on Claude on the web app.</p>
</details>

它大概只花了三分钟，而网页应用可能花了10分钟来生成，而且我还没有得到文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It took probably three minutes where I think the web app took probably 10 minutes to generate and I didn't get the files and it created this nice little to-do and you can see again it's following the instructions for creating good styles.</p>
</details>

它创建了一个很好的待办事项列表，您可以看到它再次遵循了创建良好风格的指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So create the main skill.md file, create example skills, create template files, and a validation script.</p>
</details>

所以，创建主`skill.md`文件，创建示例技能，创建模板文件，以及一个验证脚本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see all of this was put in a create skill folder over here.</p>
</details>

您可以看到所有这些都被放在了旁边的“create skill”文件夹中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the skill followed again that YAML formatting with the metadata at the top, the instructions in the body.</p>
</details>

该技能再次遵循了**YAML**（Yet Another Markup Language：一种人类可读的数据序列化标准）格式，顶部是元数据，正文是指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was a little shorter than what Claude generated with its skills user.</p>
</details>

它比Claude用其技能用户生成的内容略短。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it did link and reference other files.</p>
</details>

它确实链接并引用了其他文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see those template files were generated in a really nice way.</p>
</details>

您可以看到那些模板文件以非常好的方式生成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the interesting things that cursor did when creating a skill for me that I was actually surprised about is it created a skill validation script.</p>
</details>

Cursor在为我创建技能时做了一件有趣的事情，让我感到惊讶的是，它创建了一个技能验证脚本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so again, this is just an example of how you can use Python within your skills is you can actually as part of your skill development ask it to run a Python script.</p>
</details>

所以，这再次只是一个示例，说明您如何在技能中使用Python：作为技能开发的一部分，您可以要求它运行一个Python脚本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This one is a kind of funny one where it checks the YAML validation and the file formatting and if a file exists and does a little content uh content validation.</p>
</details>

这个脚本有点有趣，它检查YAML验证和文件格式，以及文件是否存在，并进行一些内容验证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this was an interesting meta use of the Python um script calling ability, but it works.</p>
</details>

所以这是Python脚本调用能力的一个有趣的元用途，但它确实有效。

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

### 在Claude Code中调用和使用技能

那么，我们如何实际使用它呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now how do we actually use that?</p>
</details>

我现在很高兴我的Claude技能已经设置好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so I'm now happy I have my Claude skill set up.</p>
</details>

我真正使用这个技能的方法是启动了Claude Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, what I really did to actually use the skill is I fired up Claude Code.</p>
</details>

正如我所说，这些技能在Claude Code、Claude Desktop、网页应用以及API中都可用，尽管我们今天不会深入探讨API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as I said, these skills are available in Cloud Code, Cloud Desktop, the web app, as well as in the API, although we're not going to go into the API today.</p>
</details>

所以我想，因为这些文件在我的桌面上是本地的，我可以直接使用Claude Code来调用这些技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, I thought because these files are local on my desktop, that I could just use Claude code to call these skills.</p>
</details>

我真的很想看看，如果我只是在这个目录中启动，输入Claude，然后调用这个技能，它是否会直接调用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I really wanted to see if I just fired up, typed Claude in this directory, and called the skill if it would just call it.</p>
</details>

它确实做到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it did.</p>
</details>

所以您可以看到我输入Claude Code的第一个Prompt是：“使用‘创建技能’技能来创建一个技能。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see the first prompt I put into cloud code is use the create skill skill to create a skill.</p>
</details>

这有点像绕口令，但它是为了将**Change Log**（变更日志）条目转换为面向用户的**Newsletter**（新闻简报）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is you know say that three times fast for turning change log entries into a userfacing newsletter.</p>
</details>

这是我每周为Chat PRD做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is something that I do every week for chat PRD.</p>
</details>

我将所有技术生成的变更日志条目转换为面向用户的新闻简报，发送给所有订阅者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I take all of our technically generated change log entries and I write a userfacing newsletter that goes out to all of our subscribers.</p>
</details>

这遵循非常特定的格式，有非常特定的输入和输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is something that follows a very specific format has a very specific input, very specific output.</p>
</details>

我认为这非常适合Claude技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I thought it'd be great for Claude skilled.</p>
</details>

所以Claude Code立即识别了这个技能，这非常好，并帮助我创建了一个将变更日志条目转换为面向用户新闻简报的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So quad code picked up that skill right away which is really nice and helped me create a skill for turning change log entries into a userfacing newsletter.</p>
</details>

它正在遍历仓库或文件夹，寻找技能存在的位置，并找到了我的“create skill”Markdown文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's going through the repository or the folder. It's looking for where the skills exist and it found my create skill markdown file.</p>
</details>

它读取了文件，理解了创建技能的结构，然后继续为我的“变更日志到新闻简报”技能创建了一个目录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It read it and it understands the structure of creating a skill and then it went ahead and created a directory for my change log to newsletter skill.</p>
</details>

它以正确的格式写入了内容，用那个Python脚本验证了技能，然后给了我一个摘要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wrote the content in the right format validated the skill with that Python script and then gave me a summary.</p>
</details>

这个技能比我之前生成的技能简单得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this skill is much simpler than the skill I generated before.</p>
</details>

如您所见，它是一个单一文件，顶部有元数据，然后是一长串指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see, it's a single file. It has the metadata at top and then it has a long set of instructions.</p>
</details>

所以，创建技能时，您不必使用所有这些链接文件和文件夹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, you don't have to use all these linked files and folders when you're creating skills.</p>
</details>

您可以只放入一个好的Prompt，然后就完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can really put in a good prompt and have that be that.</p>
</details>

但现在我在这个Claude Skills文件夹或仓库中有了另一个技能，它是由我的元“创建技能”技能生成的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now I have another skill in this claude skills folder or repository generated by my meta create skills skill.</p>
</details>

然后，一旦那个技能生成了，我实际调用了它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what I did once that skill was generated is I actually called it.</p>
</details>

使用这个技能最有趣的一点是，您不必使用像“魔法词”一样的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what was really fun about using this is you don't have to use like a magic a magic word.</p>
</details>

您不必说“调用Claude技能来做A、B和C”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You don't have to say like invoke the claude skill to do AB and C.</p>
</details>

我只是说：“这是最新的变更日志。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can literally I said okay here's the latest change log.</p>
</details>

所以它唯一的关键词是“变更日志”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the only keyword it had was change log.</p>
</details>

有了这个上下文，Claude代理就能够获取我的变更日志，并说：“我将把这个技术变更日志转换成一份引人入胜的新闻简报。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with that context the claude agent was able to take my change log and say I'm going to take this technical change log and turn it into an engaging newsletter.</p>
</details>

我没有说“把它变成新闻简报”，也没有说“使用这个技能”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I didn't say turn it into a newsletter. I didn't say use the skill.</p>
</details>

我只是说：“这是一个变更日志”，然后它根据我文件夹中可用的技能推断出我想要什么，并为我们2025年10月的产品更新撰写了一份更新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I literally just said here's a change log and it inferred what I wanted based on the skills available in my folder and wrote a update for our October 2025 product updates.</p>
</details>

现在，看看这个，有趣的是，我会觉得我的技能可能表情符号太多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, looking at this, what's interesting is I would look at this and I would go maybe my my skill is a little too emoji heavy.</p>
</details>

我会反复修改这个技能，以确保它遵循我想要的格式和结构来完成手头的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I would revise the skill over and over and over again to make sure it follows the format and structure that I want for the um the task at hand.</p>
</details>

但最终，我花了3分钟创建这个技能，大概1分钟生成新闻简报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But at the end of the day, this took me 3 minutes to create the skill and probably one minute to generate the newsletter.</p>
</details>

现在我有一个可以一直使用的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I have a skill that I can use all the time.</p>
</details>

再想想我可能生成的其他技能，我可以做一些类似“创建一个技能，将客户演示转化为试用潜在客户的后续电子邮件”的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just thinking for through other skills I might generate, I could do something like create a skill to turn customer demos into followup emails for trial prospects.</p>
</details>

现在Claude Code将再次调用那个技能创建者技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What claude code is going to do now is it's again going to invoke that skill creator skill.</p>
</details>

它将在左侧创建一个新技能，您已经看到了“demo to followup”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to create a new skill over here in the lefth hand which you see already demo to followup.</p>
</details>

它会把指令放进去，然后就可以使用了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it'll put the instructions in and ready to go.</p>
</details>

所以，对于任何想要开始使用Claude Skills的人，这是我推荐的流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for anybody that's trying to get started with Claude Skills, this is the flow that I would recommend.</p>
</details>

在您的电脑上创建一个文件夹，作为您的Claude Skills仓库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Create a folder that you can go into on your computer, make it your Claude Skills repository.</p>
</details>

如果您想更高级一些并部署到GitHub，也可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to get fancy and deploy it to GitHub, you can.</p>
</details>

也许我会把这个部署到GitHub并与大家分享。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe I'll deploy this one to GitHub and share it with you all.</p>
</details>

创建一个用于创建技能的技能，或者我再次与大家分享，您可以克隆我的技能，然后只需让Claude Code创建您的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">create a skill to create a skill or maybe I'll again share this with you all and you can clone my skill and then just ask claude code to make your skills and then whenever you're in claude code in this you know folder what you can do is invoke those skills to do a variety of tasks that you think are really important and improve the quality of those tasks over time.</p>
</details>

然后，无论何时您在Claude Code的这个文件夹中，您都可以调用这些技能来执行各种您认为非常重要的任务，并随着时间的推移提高这些任务的质量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the really simple guide to creating clawed skills in cursor.</p>
</details>

所以，这就是在Cursor中创建Claude技能的非常简单的指南。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's see.</p>
</details>

让我们看看。

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

好的，又过了大约三分钟，我想这些都只需要3分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">3 minutes later it wrote this demo to follow-up skill which we can see up here.</p>
</details>

3分钟后，它写了这个“演示到后续”技能，我们可以在这里看到。

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

现在我的文件夹中又有了另一个技能，我可以随时调用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's how in about 3 minutes, the little creative editing, you can get another skill for Claude skills.</p>
</details>

所以，这就是在大约3分钟内，通过一些创意编辑，您可以为Claude技能获得另一个技能的方法。

### 将技能上传到Web UI或桌面应用

现在，我想向您展示的最后一件事是如何将这些技能实际导入到Web UI或桌面应用中，我知道很多人都在使用这些应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the last thing I want to show you is how you actually get those into the web UI or the desktop app, which I know a lot of you are using.</p>
</details>

所以，正如我所说，这些是您需要上传到Claude的zip文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, um, again, as I said, these are zipped up files that you need to upload into Claude.</p>
</details>

所以，您需要进入您的Finder或桌面上的文件浏览器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what you would do is go into your Finder or into your file browser in your desktop.</p>
</details>

您需要将这个文件打包成zip文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you would zip up this file as you need into a zip.</p>
</details>

然后我将，我实际上以前没有做过这个，所以我们现在实时操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'm gonna I actually haven't done this before, so we're doing it live.</p>
</details>

您需要将该技能上传到功能区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you would upload that skill into the capabilities.</p>
</details>

嗯，这没有成功，因为我的技能名称只能包含小写字母。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this didn't work because my skill name can only contain lowercase letters.</p>
</details>

所以，我将再试一次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to try that again.</p>
</details>

看来技能名称需要是带连字符的小写字母。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it seems like the skill names need to be hyphenated little guys in here.</p>
</details>

所以，我们将再做一次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're going to just do this one more time.</p>
</details>

我将保存这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to save this.</p>
</details>

我将更新我的技能以编写技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to update my skill to write skills.</p>
</details>

让我们再试一次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let's try this again.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

我将打包这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to zip this.</p>
</details>

我将尝试在Claude UI中上传这个“演示到后续”技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to try to upload this um demo to followup skill in the clawed UI.</p>
</details>

太棒了！我成功了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bravo. I did it.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

我需要更新我的设置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I got to update my thing.</p>
</details>

现在我可以将客户演示笔记转换为个性化的后续电子邮件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I can transform customer demo notes into a personalized follow-up email.</p>
</details>

然后我就可以在我的聊天中使用那个技能了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can then use that skill now into my chat.</p>
</details>

所以您可以在这里看到我刚刚添加了技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can see here that I just added the skill.</p>
</details>

Anthropic做得很好，将这个流畅的工作流无缝集成到聊天中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good job, Anthropic doing that nice little seamless uh workflow into the chat.</p>
</details>

它将读取那个技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to read that skill.</p>
</details>

它可能会问我一些笔记。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's probably going to ask me for some notes.</p>
</details>

然后我就可以把我的最新Chat PRD演示直接拖放到Claude中，让它代表我创建一封后续电子邮件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I can take my latest chat PRD demo and drop it right into Claude for it to create a follow-up email on my behalf.</p>
</details>

### 总结与展望

这就是我们关于Claude Skills的第一期迷你节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that is our first mini episode on claude skills.</p>
</details>

我谈到了Claude Skills是什么，它们与您在应用中提供上下文的其他方式有何不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I talked about what claude skills are, how they are differentiated against other ways you can provide context in your app.</p>
</details>

如何尝试使用Claude创建Claude Skills（这不是我最喜欢的方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How to try to create claude skills using claude which is not my favorite.</p>
</details>

如何实际使用Cursor创建Claude Skills（这是我最喜欢的方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How to actually create claude skills using cursor which is my favorite.</p>
</details>

以及如何通过上传zip文件，使用Claude Code或Claude网页应用来调用这些技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then how to invoke those skills using claude code or the claude web app by uploading them as a zip file.</p>
</details>

如果您喜欢这类内容，请告诉我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you like content like this, let us know.</p>
</details>

我们将深入探讨如何使用这些AI产品中的最新功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are going to do deep dives on how to use some of the newest capabilities in these AI products.</p>
</details>

我将分享一些我在日常生活中如何使用AI的方法，我们将为您提供AI中最好的工作流，以改善您的工作和个人生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll share some of how I AI in my day-to-day and we will get you the best workflows in AI to improve your work life and your personal life.</p>
</details>

非常感谢您收听“How I AI”，我们很快会再与您交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you so much for joining How I AI and we'll talk to you soon.</p>
</details>

非常感谢您的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching.</p>
</details>

如果您喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下您的评论和想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you enjoyed this show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts.</p>
</details>

您也可以在Apple Podcasts、Spotify或您最喜欢的播客应用上找到这个播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app.</p>
</details>

请考虑给我们评分和评论，这将帮助其他人找到这个节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please consider leaving us a rating and review, which will help others find the show.</p>
</details>

您可以在howiaipod.com查看我们所有的节目并了解更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see all our episodes and learn more about the show at howiaipod.com.</p>
</details>

下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See you next time.</p>
</details>