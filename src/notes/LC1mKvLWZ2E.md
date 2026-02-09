---
author: How I AI
date: '2026-02-09'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=LC1mKvLWZ2E
speaker: How I AI
tags:
  - prompt-engineering
  - agentic-workflow
  - dev-tools
  - code-review
  - ui-mockups
title: 如何构建让AI处理90%以上前端编码的工作流 | CJ Hess (Tenex)
summary: 本访谈中，来自**10X**的AI工程专家**CJ Hess**分享了他如何利用AI工具，特别是**Claude Code**，优化前端开发工作流。他展示了自研的规划工具**Flowy**，该工具通过JSON文件生成UI模型和流程图，并结合**Claude Code**的技能进行迭代开发。**CJ**还探讨了使用**Codeex**进行代码审查，以及“自建而非购买”开发工具的趋势。最后，他分享了对**Google Genie3**的看法和与AI交互的提示技巧。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - 10X
  - Orcus
  - Atlassian
  - Google
  - OpenAI
products_models:
  - Claude Code
  - Flowy
  - Conductor
  - Robo
  - Jira
  - Confluence
  - Jira Service Management
  - Genie3
  - Opus 4.5
  - GPT 5.2
  - Cursor
  - Figma
  - Excalidraw
  - Mermaid
media_books: []
status: evergreen
---
### 欢迎与介绍

**Claire Vo**: 欢迎回到《How I AI》。我是**Claire Vo**，产品负责人，也是一位AI狂热者，我的使命是帮助大家更好地利用这些新工具进行构建。今天我邀请到了来自**10X**的**CJ Hess**。如果你在X（前Twitter）上见过他，他正在构建一些最有用的工具和流程，以便成为一名“真正的”AI工程师。我们将一睹他为自己打造的**Flowy**工具流程，他将向我们展示如何使用模型对比来确保代码的质量。让我们开始吧。本期节目由**Orcus**赞助播出，**Orcus**是开源**Conductor**背后的公司，该平台为现代企业应用和智能体工作流提供复杂的流程和任务编排。传统的业务流程自动化工具正在失效。孤立的低代码平台、过时的流程管理系统以及断开连接的API管理工具并非为当今事件驱动、AI驱动的云原生世界而生。**Orcus**改变了这一切。通过**Orcus Conductor**，您将获得一个现代化的编排层，它具有高可靠性、可扩展性，支持可视化和代码优先开发，并能实时将人类、AI和系统整合在一起。它不仅仅是关于任务，更是关于编排一切：API、微服务、数据管道、人工干预操作，甚至是自主智能体。因此，您可以轻松构建、测试和调试复杂的工作流。添加人工审批、自动化后端流程，并以企业规模编排智能体工作流。所有这些都同时保持企业级的安全性、合规性和可观察性。无论您是现代化传统系统还是扩展下一代AI驱动应用，**Orcus**都能帮助您快速从想法走向生产。**Orcus**，编排未来的工作。请访问orcus.io了解更多并开始构建。

**Claire Vo**: **CJ**，欢迎来到《How I AI》。

**CJ Hess**: 谢谢，**Claire**。很高兴来到这里。

### Claude Code的优势与开发者工具生态

**Claire Vo**: 我见过很多**Claude**和AI工程的超级用户，但我仍然认为你是一些工具的超级用户。这不仅仅是因为你用你正在构建的东西创建了真正的生产代码，这非常棒，而且我认为这只是我们从使用这些工具的人群中看到的一小部分。你还为自己构建工具，以改善AI工程的流程，并且你将这些工具分享给其他人，他们验证了这些工具确实很有帮助。那么，你为什么对**Claude Code**特别兴奋？它作为我们节目开始前谈到的“真正的”软件工程师，给你带来了哪些改变？

**CJ Hess**: 像很多人一样，**Opus 4.5**的出现是一个重要时刻。但我使用**Claude Code**大概是从去年五月开始的。对我来说，它真正吸引我的是它所拥有的框架。我看到很多关于**Codeex**和**Claude Code**的争论。老实说，我可能会认为**GPT 5.2**是一个更聪明的模型，但与**Claude**合作真是太愉快了，就像在**Claude Code**里一样。它感觉非常可控。我认为它真正拥有的一个特点是意图理解。也许我没有给**Opus**和**Cursor**应有的评价，但在**Claude Code**中，当我想要深入挖掘时，它就能做到。它似乎能从我的提示中捕捉到我的直觉。它真的让我能够围绕它，特别是现在有了技能，构建一个我自己的工具生态系统。这个生态系统让它对我来说越来越好，因为它是**Claude Code**加上我围绕它构建的这个技能和工具系统。所以，我很难离开它。

<details>
<summary>Original English</summary>

**Claire Vo**: Welcome back to How I AI. I'm **Claire Vo**, product leader and AI obsessive here on a mission to help you build better with these new tools. Today I have **CJ Hess** at **10X**. And if you've seen him on X, he is building some of the most useful tools and flows for being a quote unquote real AI engineer. We're going to get a sneak peek in his tool **Flowy** that he viodated for himself and he's going to show us how he uses modelto-comparison to make sure his code is great. Let's get to it. This episode is brought to you by **Orcus**, the company behind Open-source **Conductor**, the platform powering complex workflows and process orchestration for modern enterprise apps and agentic workflows. Legacy business process automation tools are breaking down. Siloed lowode platforms, outdated process management systems, and disconnected API management tools weren't built for today's event-driven AI powered cloudnative world. **Orcus** changes that. With **Orcus Conductor**, you get a modern orchestration layer that scales with high reliability, supports both visual and code first development, and brings human, AI, and systems together in real time. It's not just about tasks. It's about orchestrating everything. APIs, microservices, data pipelines, human in the loop actions, and even autonomous agents. So build, test, and debug complex workflows with ease. add human approvals, automate back-end processes, and orchestrate agentic workflows at enterprise scale. All while maintaining enterprisegrade security, compliance, and observability. Whether you're modernizing legacy systems or scaling nextgen AIdriven apps, **Orcus** helps you go from idea to production fast. **Orcus**, orchestrate the future of work. Learn more and start building at orcus.io.

**Claire Vo**: **CJ**, welcome to How I AI.

**CJ Hess**: Thanks, **Claire**. It's good to be here.

**Claire Vo**: So, I've seen a lot of **Claude** and AI engineering power users, and I still think you're like a super power user of some of these tools. And it's not just because you're creating real production code with what you're building, which is really nice to see, and I think a subset of what we're seeing out of folks using these tools. You also build tools for yourself to make the process of AI engineering better and you share those tools with other people who then validate that they're actually helpful. So why are you so excited about in particular **Claude Code** and what has it changed for you as as we were talking before the show a quote unquote real software engineer?

**CJ Hess**: Like a lot of people the **Opus 4.5** moment was a big one. But I've been on **Claude Code**, I don't know, maybe last May. But for me, it was really about the harness they have and like I see a lot of arguments about **Codeex** in **Claude Code**. And I'd honestly argue **GPT 5.2** is a smarter model, but like working with **Claude** is just such a delight like in **Claude Code**. It just feels so like steerable. And I think the one thing it really has is like intent understanding. Maybe I'm not giving, you know, **Opus** and **Cursor** like the the shot it deserves here, but there's something about include code like when I wanted to dig deep, it just it just does it. It feels to like pick up on my intuition just in the prompts. And it's really enabled me to almost like build a little ecosystem of my own tools around it around **Claude Code** kind of particularly with skills now that just like keep making it better and better for me because it's **Claude Code** plus like this system of skills and tools that I've built around it. So it's it's like really hard for me to get out of it.
</details>

### AI时代的开发者环境定制

**Claire Vo**: 是的。作为一名软件工程师，我喜欢这个时刻的原因是，你知道，在过去，你可能会选择你的IDE，你是否会使用**Vim**，以及你的工程师认可的工具集是什么，你可以用它们来制作，比如我们团队使用什么Linter？所有这些东西。你可以做一些事情来定制你的开发环境。但现在你可以把它提升到一个新的水平，你可以拥有一个与你旁边的同事完全不同的AI工程工作流，这完全没问题，因为它让你个人效率更高，效果更好，而且你自己构建它们成本很低。所以没有评估你技术栈中新东西的成本或障碍。

**CJ Hess**: 是的。甚至可以说，你现在拥有**Claude**的大脑，几乎可以为开发工具做一些脏活累活。我想，在任何新型模型出现之前，它们真的可以处理智能体循环。你知道，面对一个损坏的Linter，你只能接受它，并且到处都是忽略注释，以至于我就会放弃。但现在，我感觉我几乎可以信任它，让它来处理“这个配置有什么问题？我的IDE与项目中的不匹配。好吧，我们必须解决这个问题”这类问题，解决那些我以前觉得会永远存在的小问题。

**Claire Vo**: 是的。对于现在正在观看或收听的非工程师来说，我认为环境设置和开发者设置是一个被低估的用例。昨天，我指导了一位设计师，她实际上对AI的东西有点置身事外。她真的什么都没下载，什么都没用过。现在她在使用**Cursor**、**Claude Code**，节点正在运行，**Homebrew**也安装了。我当时就说，“就让**Claude Code**去做吧。说，‘帮我理解这个仓库，并让我的电脑准备好运行’”。

**CJ Hess**: “然后它就……”

**Claire Vo**: 我说，“然后告诉它它可以接受所有工具，然后让它自己运行，你稍后再回到你的笔记本电脑。”

**CJ Hess**: 而且它非常棒。我的意思是，我们现在真的很幸运。所以，让我们深入了解你的一些实际工作流。我知道你非常关心有效规划，而且你已经想出了一种你认为非常独特的规划方式。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. What I love about this moment as a software engineer is, you know, back in the in the olden days, you sort of had like your choice of like what's going to be my IDE and am I going to use **Vim** and like what, you know, what are my my set of approved tools as an engineer that I can use to make, you know, what llinters are we using as a team? All this kind of stuff. Like there's stuff that you could do to customize your developer environment. But now you can really take it to the next level and you could have a totally different AI engineering workflow than your colleague sitting next to you and it's totally fine because it's making you individually a lot more efficient and effective and you're building them yourselves for pretty cheap. So there's not that cost or that hurdle of evaluating new things in your stack.

**CJ Hess**: Yeah. There's even like it's almost like one you now have the brains of **Claude** to almost like do some dirty work on the dev tooling. Like I think you know pre any of kind of the newer gen models that just really can handle the agentic loop and you know sitting with like a broken llinter and just accepting it and having like ignore comments everywhere so that you know I just I just would give up and now it's like I feel like I can almost trust it to be like what's wrong with this config? My IDE isn't matching what's in the project. Okay, we have to resolve this and just kind of solving those like chore problems that I feel like previously just ended up being forever problems.

**Claire Vo**: Yeah. And for the non-engineers watching or listening right now, I think environment setup and developer setup is such an underappreciated use case. Yesterday, I onboarded a designer who had literally has kind of like sat out some of this AI stuff. It's literally not downloaded anything, used anything. And she's on **Cursor**, **Claude Code**, nodes running, **Homebrew**s installed. And I was like, just ask

**CJ Hess**: **Claude Code** to do it. Say like, help me understand this repo and get my computer set up to run

**Claire Vo**: and it just and I said and then just tell it it can accept all tools and let it go and come back to your laptop later.

**CJ Hess**: And it's pretty great. I mean, we're really really spoiled right now. So, let's dive into some of your actual workflows. And one of the things that I know you really care about is effective planning and you've come up with a way that you do your planning that I think is pretty unique.
</details>

### Flowy：AI原生的规划与UI工具

**CJ Hess**: 是的。所以有一种经典的计划。我将切换到**Cursor**。我在这里有一个经典的计划文件夹，只是把计划扔进去。我真的很喜欢这种格式。我认为很多人都在趋向于这种方式，即在Markdown上迭代，有一个文件，你可以在其中完成计划，审查计划，到最后，你几乎可以自信地让它编写代码。但我讨厌的一个部分，却发现它非常有价值，就是这些ASCII流程图。所以，如果你只是听，那就是**Claude**绘制的所有那些方框和箭头，你知道，总有一些，这个看起来很干净。是的，总是有这种边缘字符的错位。我不知道我们为什么还没有解决这个问题。但是对于像UI模型、像导航如何工作、某个系统如何工作的流程图这样的东西，我真的很喜欢这种可视化的思考方式，但我真的很讨厌盯着这些ASCII图表。即使像**Mermaid**这样的东西，也感觉不完全是我想要的。所以，我尝试使用这个工具，基本上给**Claude**这些JSON文件。我围绕它构建了一整套技能，**Claude Code**可以使用这些技能来编写这些文件。然后这些文件实际上最终会生成漂亮的UI模型。细节程度不是很高，但你知道，我可以引导它走向我需要的方向。在这里，这些白色文本可能有点难以看清。但基本上，这是一个关于这个工具**Flowy**及其工作原理的流程图。

**Claire Vo**: 所以对于听众来说，我喜欢这一点的是，**Flowy**是你构建的工具。你不是在说“哦，我正在玩这个工具。”而是说，不，你构建了这个工具。是的。

**CJ Hess**: 为你自己。这是我第一次尝试Ralph循环。我仍然不确定我对它们有多大信心，因为我不得不做一些清理工作，但总的来说，我想说这是一个几乎100%由提示生成的开发工具。

**Claire Vo**: 是的。所以你说的就是，你知道，我喜欢计划。我喜欢这个想法，我必须再花一分钟。我是互联网上最老的女士。所以很久以前，二十年前，当我第一次做产品管理和网页设计时，我们做了很多流程图，很多用户旅程图，然后是很多线框图，以及很多低保真模型，然后是高保真模型。我喜欢你正在构建的东西，你正在构建它的AI原生版本。那一部分对任何人都没有消失。你说的当你点击这个它会到这个，这些是步骤，这些是分支等等，这些都没有消失。你必须查看设计并说，“是的，这大概就是我想要的。”但这并没有消失。但现在你可以让AI创建它们。最初你让AI在Markdown中创建它们，保真度非常非常低。我必须岔开话题，你知道一年前我非常高兴它能制作ASCII标记，但现在这已经不够好了。

**CJ Hess**: 是的。

**Claire Vo**: 这些模型不断变化的期望。

**CJ Hess**: 是的。没错。所以你把这些有用的Markdown标记拿过来，然后你说现在通过构建这个子应用程序让它们真正有用，这个应用程序可以为你运行它们。它似乎是工作流图和分步模型图的结合。

<details>
<summary>Original English</summary>

**CJ Hess**: Yeah. So there's kind of the classic plan. So I'm going to swap over to **Cursor** here. I have in this just like your classic plans folder just throwing plans in here. And I really love this format. I think a lot of people are kind of converging on this of like iterating on markdown, having one file where you're just like working through the plan, reviewing the plan, and by the end of that, you can almost feel confident just letting it write the code. But the one like piece that I hated that I found really valuable was these asy flowcharts. So, if you're just listening, it's all those like boxes and arrows that **Claude** draws and, you know, there's always the ones where this one actually looks pretty clean. Yeah, there's always this like misalignment of that edge character. I don't know why we haven't figured that out yet. But for things like UI mockups, things like, you know, flowcharts of how navigation's going to work, how a certain system is going to work, I really like this visual way to think about things, but I really hate staring at these asy like diagrams. even things kind of like **Mermaid** and everything just didn't feel exactly what I was going for. So, I've played around with this tool to basically give **Claude** these JSON files. And there's a whole set of skills I've built around this that **Claude Code** can use to write these out. And then these actually end up generating nice looking UI mockups. Not in super high fidelity or detail, but you know, I can kind of guide it the direction I need. And up here, these this white text might be a little hard to see. But basically, this is a flowchart on this tool, **Flowy**, and how it works.

**Claire Vo**: So for for the listeners, what I love about this is **Flowy** is a tool that you built. This isn't you're saying like, "Oh, I was playing with this tool." It's like, no, you built this tool. Yeah,

**CJ Hess**: for yourself. This was this was my first experiment with a Ralph loop. I'm still not certain how confident I am in them because I had to do a little bit of cleanup, but overall I will say this is kind of a dev tool that was almost 100% prompted.

**Claire Vo**: Yeah. And so what you said is, you know, I love plans. I love the idea and and I just have to take a minute again. I'm the oldest lady on the internet. So way back in in the day, two decades ago when I was first doing product management and web design, we did so many flowcharts, so many user journey charts and then so many wireframes and so many like lowfidelity mocks than highfidelity mocks. And what I love about what you're building is you're building the AI native version of that. That piece has not gone away for anybody. It hasn't gone away that you said like when you click this it goes to this and these are the steps and these are the branches and all that. And it hasn't gone a way that you have to look at designs and say, "Yeah, this is kind of what I want." But now you can have AI create them. And at first you had a create AI create them in markdown very very low fidelity. And I have to take a side journey that you know a year ago I was like extremely delighted that it was making ASKI markups and now it's just not good enough.

**CJ Hess**: Yeah.

**Claire Vo**: The shifting expectations on these models.

**CJ Hess**: Yeah. Exactly. And so you've taken these markdown markups that were useful and you said now make them really useful by building this sub application that can run them for you. And it's a combination of it seems like workflow diagrams and step-by-step mockups.
</details>

### Flowy技能的构建与迭代

**CJ Hess**: 是的。所以基本上我想要的是一个JSON文件。它可以渲染，并且可以像任何流程图一样拥有节点和边。然后大致能够堆叠它们，改变颜色，并得到一个像这样的东西，我们有几个不同的屏幕，我们有这些介于线框图和真实模型之间的东西，可以帮助我将模型指向正确的方向。对我来说，另一个重要的事情是迭代这个。我不会进入那个Markdown文件，尝试编写新的形状并组合它们。所以对于这个，这也是一个编辑器，当你编辑它时，所有这些更改都会保存到那个JSON文件。所以你可以再次将**Claude**指向它，然后说：“嘿，我知道你做了这个，但实际上，假设我想要在这里停一下，然后我将把这个调出来并添加一些边。”然后你可以在这里设计，几乎就像你在**Figma**或**Excalidraw**中一样，然后**Claude**可以直接读取文件，这是一种更原生的方式让它理解所有东西的样子。

**Claire Vo**: 你提到了**Mermaid**图表，所以我有这个问题：**Mermaid**图表的一个好处是，它是一种LLM非常了解并能解析和推理的语法。你觉得你是否创建了一个技能，让**Claude Code**能够理解和读取这个JSON？你是如何训练它读取你这种专有的开发工具和文档的？

**CJ Hess**: 是的，所以现在我主要使用两个技能。还有一个是概述，基本上是命令的高层视图，以及一个**Flowy**文件会是什么样子。然后我有一个非常具体的关于流程图的技能，还有一个关于UI模型的技能。为了制作这些，我基本上坐在工具本身的仓库里，运行了一堆探索性的子智能体，然后开始制作第一个UI模型和流程图，并开始引导它，比如“你把这些放得太近了，我们需要一个关于间距以及如何考虑间距的规则”，然后我就是这样逐步构建起来的。如果我使用它时出了问题，这里有一个例子，这些白色文本在这些柔和的注释上，有点难以阅读。我基本上会进入我存放这些技能的地方，然后说：“这就是发生的事情。给我一个关于如何改进这个技能的建议，这样就不会再发生这种问题了。”然后迭代地不断构建这个技能。这个东西制作的第一个流程图，你知道，形状都堆叠在一起，没有任何意义。但是它已经走了很长一段路。没有对底层应用程序进行太多更改，它真的只是关于让**Claude**理解和掌握这个技能。我发现这比**Mermaid**之类的东西效果更好，只是因为我现在真正感受到了构建自己开发工具的力量。

**CJ Hess**: 我真的不想受到**Mermaid**的限制，如果这说得通的话。我希望能够说：“好的，我想要**Flowy**中的一个新功能。我将构建它。我将更新技能，并且我可以自信**Claude**能够真正使用它并理解新功能。”

<details>
<summary>Original English</summary>

**CJ Hess**: Yeah. So there's kind of basically what I wanted was JSON file. It can render and it can have nodes and edges like any flowchart and then roughly be able to stack them, change the colors and get us, you know, something that looks like this where we have a couple different screens and we have these somewhere between a wireframe and a true mockup that just can help me point the model in the right direction. The other big thing for me was iterating on this. I'm not gonna go in that markdown file and try to like write new shapes and combine them. So for this, this is also an editor and as you edit it, all these changes save to that JSON file. So you can then point **Claude** back at it and say, "Hey, I know you did this, but actually let's say I want to step here and I'm going to bring this up and add some edges." And then you can be designing in here almost like you're in **Figma** or **Excalidraw** or something and then **Claude** can just read the file and that's like a more native way for it to understand what everything looks like.

**Claire Vo**: And you mentioned **Mermaid** diagrams and so I have this question which is one of the benefits of **Mermaid** diagrams is that's a syntax that these LLMs know well and can parse and actually reason about. Do you feel like have you created a skill where **Claude Code** can understand and read this JSON? like how did you train it to read your kind of proprietary dev tool and documentation?

**CJ Hess**: Yeah, so right now there's two main skills I use. There's a third one that's just an overview basically kind of the highle view of what the commands are, what a what a **Flowy** file would look like. And then I have one that's very specific about flowcharts and one that's about UI mockups. And to make these I basically sat with sat in the repo of the tool itself had a bunch of like explore sub aents going and then started to make the first UI mockups and the flowcharts and started to guided on okay you put these too close we need a rule about like spacing and how to think about spacing and just incrementally I've been building that up where if I'm working with this and something goes wrong almost an example here would be this white text on these, you know, pastel notes, kind of hard to read. I would essentially hop into the place where I have these skills, and say, "Here's what happened. Give me a suggestion on how to improve this skill so this doesn't happen again." And then iteratively just keep building that skill. And the first flowcharts this thing made were, you know, shapes stacked on top of each other. It didn't make any sense. But it's come a long way. not much without many changes to like the underlying app. It's really just been about like getting **Claude** to understand and know the skill. And I find that works better than something like **Mermaid** just because I really feel the power of building my own dev tools now. And that

**CJ Hess**: I I really don't want to hit the constraints of **Mermaid**, if that makes sense. I want to be able to say, "Okay, I want a new feature in **Flowy**. I'm going to build it. I'm going to update skills and I can be confident that **Claude** can actually work with that and understand the new feature."
</details>

### 自建开发工具的趋势

**Claire Vo**: 是的。我作为一名工程师，真正观察到的一件事是，随着我越来越多地通过MCP或“配置即代码”或任何这些方式访问我的开发工具，我开始意识到，扩展他们构建的东西并为自己定制变得非常容易。所以我确实认为，在所有地方中，开发工具是一个有趣的领域，因为第一，你的用户非常便宜；第二，他们有能力分叉你构建的东西；第三，有如此多的开源项目，我真的认为会有一种“自建”的趋势。我以前，你知道，我管理这些大型产品和工程组织时，他们会问我“自建还是购买”，我当时会说：“哦，天哪，请直接购买吧。请直接刷我的信用卡购买吧，我们不要浪费时间了。”但现在我转变了，当然我们应该构建它，直到我们遇到一些限制，我们才应该构建它。当然，对于个体工程师来说，如果某个东西有用，你至少应该为V1版本自己构建一些东西。

**CJ Hess**: 是的。现在几乎不值得再花额外的钱了。我的意思是，我看到——我感觉我正在Twitter上看到这种模式——每个人都在发布一些产品，一些荒谬的定价层级，然后说：“有人能‘vibe code’这个吗？”你知道，我感觉这种情况正在SaaS领域全面发生。

**Claire Vo**: 是的。那么，你能向我们展示你如何创建这些**Flowy**图，或者在**Claude Code**中使用它们吗？它实际上是如何运作的？

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. One of the things that I've really observed in myself as a engineer is as more and more as I access more and more of my dev tools through like an MCP or config as code or any of these things, I start to realize it's very easy for me to extend what they've built and customize it to myself. And so I do think, you know, of all the places, DevTools a DevTools is an interesting one where one, your users are super cheap and two, they're capable of of forking what you've built and three, there's so much open- source that I really do think there's going to be this trend towards build. I used to be when I, you know, I ran these big product and engineering orgs, they used to ask me build versus buy and I was like, "Oh my god, please just buy it. Like, please just take my credit card and buy it and let's not waste our time." And now I've flipped to of course we should build this until we hit some constraint we should build it. And certainly individual engineers if something's useful you should just build something yourself at least for for V1.

**CJ Hess**: Yeah. It's almost not worth spending the extra money anymore. I mean I've seen I feel like I'm seeing this pattern on Twitter but it's everyone's posting some product some ridiculous pricing tier and saying someone please vibe code this. You know, I feel like that's happening all across SAS.

**Claire Vo**: Yeah. So, can you show us how you'd either create one of these **Flowy**s, use one in your **Claude Code**, like how does this actually work?
</details>

### Flowy演示：创建旋转轮功能

**CJ Hess**: 我当时在想，在这个小小的**Claude Code**演示指南应用中，我有一个“提示和技巧”部分。我的整个背景是移动开发，所以这是我最容易快速搭建的东西。但基本上，我有点不喜欢这些卡片。我几乎想让它更有趣一点。比如说，你想要一个旋转轮。它停在某个东西上，然后显示给你提示。对我来说，开发流程通常是这样的：跳到这里。我有一些有趣的别名，但我是一个完全绕过权限的人。所以我的终端中的“Kevin”实际上是路由到**Claude**并绕过权限的。

**Claire Vo**: 好的。所以你把不同的权限范围命名为终端中的别名。

**CJ Hess**: 哦，是的。对于我们的听众，我们最近有一集**John Linquist**的节目，他展示了如何为**Claude Code**设置这些别名。所以如果你想设置这个，一定要看看那一集。我只是有一个经典的，比如“CC”，然后我将创建一个“CC scary”，那将是我的危险版本。

**CJ Hess**: 是的，我今天越来越倾向于这种“Kevin”模式。我发现很多项目，如果我独自工作，或者在我所在的团队中工作，我们在Git中设置了所有规则，即使我做了什么糟糕的事情，也没关系。但肯定有些时候，比如我创建PR时，我偶尔还是会手动操作，但我有很多技能可以完成很多这些工作流，运行预检，并确保一切都准备好再推送。但除此之外，我大多数时候都觉得危险地绕过权限也没关系。

**Claire Vo**: 太棒了。所以，你进入了**Kevin**，也就是**Claude Code**，你做了什么？

**CJ Hess**: 所以，对于这个，我的提示大概会是这样：查看我们之前的计划，然后探索代码库。我只是想稍微重新锚定一下，尤其是在一个全新的聊天中。在“提示和技巧”部分，我想创建一个旋转轮，用户按下按钮，轮子旋转，然后它会显示一个提示。之后，提示应该在一个卡片中弹出，就在旋转器下方。然后是下一步，也是我越来越多地做的事情，这与我最初使用这个工具的方式不同，那就是让它实际制作流程图，你知道，代码将如何工作，系统图，任何类似的东西。在这个例子中，我实际上想要用户流程和动画时间序列。我发现这对于复杂的动画非常有帮助。所以我会说，然后使用**Flowy**流程图技能，为“提示和技巧”页面创建一个动画时间序列图和用户流程图。所以我们会发送给**Claude**。它通常会进行一些探索。是的，就是这样。我真的很喜欢这些探索性子智能体。通常我会并行启动三、四个、五个，只是为了查看不同的地方，尤其是在一个更大的代码库中，只是为了收集所有相关上下文。这是一个小应用，所以我认为这不会花太长时间。然后**Claude**会加载这个**Flowy**技能，把它写出来，我们应该能够在**Flowy**编辑器中查看它，然后在实际实现之前进行一些尝试。在我们等待它加载的时候，我们能稍微看一下那个**Flowy**技能，看看你是如何构建它的吗？

**CJ Hess**: 当然。那么，首先，我将向你展示支持文件。

**Claire Vo**: 是的。

**CJ Hess**: 这个只是一个skill.md文件。这展示了我对一些技能文件，特别是那些我自己构建的文件的放手程度。

**Claire Vo**: 是的，我们有一集“技能101”的节目，它就像是一个文件夹里的Markdown文件。

**CJ Hess**: 它是一个Markdown文件，有时这可能是一个具体的例子，但对于**Flowy**来说，它非常灵活。我会说我进去，快速修改一些东西，然后说“更新技能”，而优化的过程实际上是我在使用它并看到哪里出了问题。所以在这里，我不太关心这个文件是如何设置的，只要我之后进行更新时，它的表现更好就行。我几乎觉得让模型管理它看起来是什么样子是件好事。所以让我们来阅读一下。这里面有很多例子。让我滚动到顶部。我相信有一些概述。太棒了。所以，再次，经典的概述。“嘿，我们将制作流程图和架构图。它们将在这个端口渲染。你将在这里制作它们。”它知道**Flowy**应用会寻找这个**Flowy**文件夹。它提供了一些高层次的信息，比如元数据是什么样的？你包含节点和边吗？然后开始深入到具体细节。对吧？所以我们有不同的形状。大致的模式是什么样的。你有你的样式，你可以使用的图标，然后开始列出属性。所以，我不会说这有什么特别疯狂或太长太详细的地方，但这封装了**Claude**需要知道的所有部分。你几乎可以在这里看到，随着功能开发，这个技能是如何增长的。所以最近我建立了一个完整的语义颜色系统，只是为了拥有某种一致的主题。有时**Claude**喜欢选择一些疯狂的颜色，然后这部分就突然出现在技能中。对。所以当我在**Flowy**上进行开发时，**Flowy**中代码的每一个计划的一部分就是更新文档和更新相关的技能。

**Claire Vo**: 是的。我发现自己经常陷入这个循环，和你非常相似，就是关于技能的。当技能有效时，我很高兴；当技能无效时，我就会更新技能，只要更新能达到我想要的效果，我就会继续我的生活。

**CJ Hess**: AI可以读取Markdown。

**Claire Vo**: 好的，有几点我想提出来，对于那些正在编写技能或阅读技能的人来说，如果你快速向上滚动，那很重要。是的，所以我认为有几点。比如，这个技能的目的是什么？它的名字是什么？快速启动我认为非常好。比如，你知道，你需要这些东西才能运行这个技能。这是你操作的模式或模板或框架。这是它的一些定制。然后在最后，它会说这里有一些很好的例子，说明什么有效。我认为这是一个相当扎实的技能。好消息是你不必知道如何做这些。你可以让**Claude**的技能来编写技能，或者根本不需要技能，但它在这方面做得很好，可以编写技能。然后你就会得到像这样的东西，我认为这非常棒。而且它能做到这一点。我猜你是让它从构建**Flowy**开始，然后说：“好的，根据仓库中存在的代码，为我构建一个使用这个的技能。”

**CJ Hess**: 是的，我有一个关于制作技能的元技能。有一点我想说的是，它似乎违反了我的偏好，我实际上更喜欢在快速启动之后有一个预检部分，只是为了告诉它：“嘿，你必须确保我们首先满足所有这些要求。”这里的快速启动有点在做这个，但肯定有一些例子，主要是在像Git工作流中，我确实需要那些预检。但绝对，这基本上是由智能体管理的，并且随着我们进行开发而更新。所以这几乎就像一个活生生的文档，有给人的文档，也有给智能体的文档，而那些最终就是技能。

**Claire Vo**: 是的。太棒了。好的。那么我们回去看看它是否为你制作了**Flowy**。太好了。所以，看起来它制作了两个。我通常喜欢缩小，然后在聊天中阅读高层信息。这看起来就是我们想要的。如果我们跳回这里，我们可以看到我们有两个新的，动画时间（animation timing）和用户流程（user flow）。所以，这些最近对我非常有帮助。再次，我不太喜欢这个白色在柔和的注释上看起来的样子，但从高层来看，我们希望用户点击一个轮子。按钮会做一个小小的缩放动画，并且会有一些触觉反馈，然后我们会经历这个旋转动画，短暂暂停，然后显示它停到的提示。这很棒。这正是我想要的。也许我希望动画时间再长一点。我实际上可以来到这里，你可以看到。

**Claire Vo**: 字体颜色问题。

**CJ Hess**: 你可以看到深色模式是新的，但我可以快速切换它。

**Claire Vo**: 是的。

**CJ Hess**: 但如果我们跳到这里，有时我甚至只是放一个注释。那可能是我懒惰，没有添加某些功能。但也许我希望这个动画实际上是4秒，而不是3秒。我希望这是4000毫秒，而不是3000毫秒。我只是把那个注释扔进去。我跳回**Claude**。我在动画时间上留了一个注释。请考虑它并更新那个流程图。当**Claude**正在处理时，我们可以查看用户流程。但基本上目标是让这个图表，你知道，就在这里，有点小，但就在这里，比如说对于这个动画，我们不希望它是3000毫秒。我们希望它在用户流程上是4000毫秒。再次，我们捕获了我们想要的行为。再次，它并不完美。这里有一些粗糙的边缘，但我们将进入这个标签。我们将点击“ticks and tips and tricks”。这将打开到这个屏幕。他们将点击。我们将检查当前旋转的不同状态。最后，我们将有一个随机目标，我们停在那里，卡片会动画进入。这很棒。这大概就是我在这里寻找的。在一个更复杂的系统中，我通常会从高层开始，然后制作更细粒度的。但对于像这样的东西，这似乎涵盖了我们的需求。我得说，我不知道它将如何处理UI模型。但下一步将是提示它去做。所以当它完成这个之后，我会说类似这样的话：“太棒了。根据这些图表，请使用**Flowy** UI模型技能创建UI模型。参考这个仓库中的其他UI模型**Flowy** JSON文件。”

<details>
<summary>Original English</summary>

**CJ Hess**: Yeah. So there's kind of basically what I wanted was JSON file. It can render and it can have nodes and edges like any flowchart and then roughly be able to stack them, change the colors and get us, you know, something that looks like this where we have a couple different screens and we have these somewhere between a wireframe and a true mockup that just can help me point the model in the right direction. The other big thing for me was iterating on this. I'm not gonna go in that markdown file and try to like write new shapes and combine them. So for this, this is also an editor and as you edit it, all these changes save to that JSON file. So you can then point **Claude** back at it and say, "Hey, I know you did this, but actually let's say I want to step here and I'm going to bring this up and add some edges." And then you can be designing in here almost like you're in **Figma** or **Excalidraw** or something and then **Claude** can just read the file and that's like a more native way for it to understand what everything looks like.

**Claire Vo**: And you mentioned **Mermaid** diagrams and so I have this question which is one of the benefits of **Mermaid** diagrams is that's a syntax that these LLMs know well and can parse and actually reason about. Do you feel like have you created a skill where **Claude Code** can understand and read this JSON? like how did you train it to read your kind of proprietary dev tool and documentation?

**CJ Hess**: Yeah, so right now there's two main skills I use. There's a third one that's just an overview basically kind of the highle view of what the commands are, what a what a **Flowy** file would look like. And then I have one that's very specific about flowcharts and one that's about UI mockups. And to make these I basically sat with sat in the repo of the tool itself had a bunch of like explore sub aents going and then started to make the first UI mockups and the flowcharts and started to guided on okay you put these too close we need a rule about like spacing and how to think about spacing and just incrementally I've been building that up where if I'm working with this and something goes wrong almost an example here would be this white text on these, you know, pastel notes, kind of hard to read. I would essentially hop into the place where I have these skills, and say, "Here's what happened. Give me a suggestion on how to improve this skill so this doesn't happen again." And then iteratively just keep building that skill. And the first flowcharts this thing made were, you know, shapes stacked on top of each other. It didn't make any sense. But it's come a long way. not much without many changes to like the underlying app. It's really just been about like getting **Claude** to understand and know the skill. And I find that works better than something like **Mermaid** just because I really feel the power of building my own dev tools now. And that

**CJ Hess**: I I really don't want to hit the constraints of **Mermaid**, if that makes sense. I want to be able to say, "Okay, I want a new feature in **Flowy**. I'm going to build it. I'm going to update skills and I can be confident that **Claude** can actually work with that and understand the new feature."

**Claire Vo**: Yeah. One of the things that I've really observed in myself as a engineer is as more and more as I access more and more of my dev tools through like an MCP or config as code or any of these things, I start to realize it's very easy for me to extend what they've built and customize it to myself. And so I do think, you know, of all the places, DevTools a DevTools is an interesting one where one, your users are super cheap and two, they're capable of of forking what you've built and three, there's so much open- source that I really do think there's going to be this trend towards build. I used to be when I, you know, I ran these big product and engineering orgs, they used to ask me build versus buy and I was like, "Oh my god, please just buy it. Like, please just take my credit card and buy it and let's not waste our time." And now I've flipped to of course we should build this until we hit some constraint we should build it. And certainly individual engineers if something's useful you should just build something yourself at least for for V1.

**CJ Hess**: Yeah. It's almost not worth spending the extra money anymore. I mean I've seen I feel like I'm seeing this pattern on Twitter but it's everyone's posting some product some ridiculous pricing tier and saying someone please vibe code this. You know, I feel like that's happening all across SAS.

**Claire Vo**: Yeah. So, can you show us how you'd either create one of these **Flowy**s, use one in your **Claude Code**, like how does this actually work?

**CJ Hess**: What I was thinking is I have this tips and tricks section in this little like demo **Claude Code** guide app. My whole background is in mobile development, so this was the easiest thing for me to spin up. But basically, I kind of don't like these cards. I almost want this to be a little more fun. Let's say you want like a spinner wheel. It lands on something and then it shows you the tip. The development flow for me usually looks like hopping in here. I have some funny aliases, but I'm a fully bypass permissions guy. So Kevin in my terminal actually routes to **Claude** with bypass permissions.

**Claire Vo**: Okay. So you've named different permission scopes as aliases in your terminal. If

**CJ Hess**: Oh yeah. for for our listeners, we have an episode very recent of **John Linquist** who actually shows how to set up those aliases for **Claude Code**s. So definitely check out that that episode for if you want to set this up. I just have a classic like CC and then I'm going to make a CC scary that will make me that'll be my like dangerous version.

**CJ Hess**: Yeah, I'm I'm more and more in this Kevin mode today. I find that a lot of like projects where I'm, you know, solely working on it or working within the team I'm on, we have all the like rules set up in Git that if I do something horrible, it it's okay. But there are definitely times like if I'm creating a PR, every now and then I still do it by hand, but I have a lot of skills that do a lot of those workflows, run the pre-flight checks, and make sure we're all good before pushing it up. But besides that, I'm I'm kind of okay running dangerously bypass most of the time these days.

**Claire Vo**: Great. So, you go into Kevin aka **Claude Code** and what do you do?

**CJ Hess**: So, for this, my prompt would probably be something along the lines of look at our previous plans and then explore the code base. Just want to reanchor it a little bit, especially on a fresh chat. On the tips and tricks section, I want to create a spinning wheel where a user presses a button, the wheel spins, and then that is one of the tips. After that, the tip should pop up in a card just below the spinner. Then kind of the next step and what I've been doing more and more, which is not how I initially started using this tool, is actually having it make the flowchart of, you know, how the code's going to work, a system diagram, anything like that. In this example, I'd actually want both kind of the user flow and an animation timing sequence. I found this to be super helpful with like complex animations. So I would say then use the **Flowy** flowchart skill to create a animation timing sequence diagram and a user flow diagram for the tips and tricks page. So we'll send off **Claude**. It's going to do a little bit of exploration oftent times. Yep, there it is. I actually really like these explore sub agents. And oftentimes I'll kick off three, four, five in parallel just to look at different places, especially if I'm in a larger code base, but just gathering all the context around it. This is a a small app, so I don't imagine this will take too long. Then **Claude**'s going to load up this **Flowy** scale, write it out, and we should be able to look at that in the **Flowy** editor and then play around before we actually implement it. While we're waiting for this to load, can we look at that **Flowy** skill just a little bit just to see how you've structured it?

**CJ Hess**: For sure. So, let's first uh I'll just show you the supporting files.

**Claire Vo**: Yep.

**CJ Hess**: This one's just a skill MD. This shows you how almost hands off I am with some of these skill files, particularly the ones that I build myself. Um,

**Claire Vo**: yeah, we have a we have a skill 101 episode and it's like it's a it's it's a markdown file in a [laughter] folder.

**CJ Hess**: It it's a markdown file and sometimes this might be a specific example, but with **Flowy** it's very squishy. I would say I go in there, I change something quick, I say update the skill, and really the process of refinement is me using it and seeing what failed. So here, I don't super care how this file is set up as long as when I make an update afterward, it's performing better. Like I almost feel good letting the model manage what this looks like. So let's read through. It has a bunch of examples in here. Let me scroll up to the top. I'm sure there's some overview. Great. So again, classic overview. Hey, we're going to make flowcharts and architecture diagrams. They're going to render on this port. Here's where you're going to make them. It knows that like the **Flowy** app looks for this. **Flowy** folder. Kind of gives it some high level on like what does the metadata look like? What do you include nodes and edges? And then starts digging into the specifics. Right? So we have the different shapes. what a rough kind of schema looks like. You've got your styles, you have icons that you can use, and then starting to list out the properties. So, I wouldn't say this is anything super crazy or even too long and detailed, but this encapsulates all the pieces that **Claude** needs to know. And you can almost see here like as feature development happens how this skill grows. So recently I'd set up this whole like semantic color system just to have somewhat of consistent themes. Sometimes **Claude** like to pick some crazy colors and this section just popped into the skill. Right. So as I'm doing development on **Flowy** part of every plan for code in **Flowy** is updating documentation and updating the related skills.

**Claire Vo**: Yep. And I find myself in this loop so frequently very very similar to you with skills which is like I'm happy the skill works and then when the skill doesn't work I update the skill and as long as the update got me what I want I move on with my move on with my life that the AI can read read the markdown. So and a couple things I want to call out though for folks that are writing skills or reading skills that are important if you scroll up real quick is um yeah so I think there's a couple things. It's like what's the purpose of the skill? What's its name? Quick start I think is really nice. Like you know you need these things in order to run the skill. Here's the schema or the template or the framework within within which you're operating. Here's some customization of it. And then at the end it's like here are good examples of of what works. And I think that's a pretty solid skill. The good thing is you don't have to know how to do that. You can just have uh **Claude**'s skill to write skills or just no skill, but it's pretty good at it to write skills. And then you end up with with something like this, which I think is really great. And it can do this. I'm presuming you had it do this from building **Flowy** and then saying, "Okay, build me a skill to use this based on the code that exists in the repo."

**CJ Hess**: Yeah, I have I have a like meta skill that is all about making skills. Um, one thing I will say it looks like it violated is I actually prefer like a pre-flight section sometimes after quick start just to give it like hey you have to make sure we're meeting all these requirements first. Quick start here is kind of doing that, but there are definitely some examples mainly in like git workflows where I really want those pre-flight checks. But absolutely, this is essentially managed by the agent and it's updated as we're doing development. So this is almost like a living living documentation and there's docs for people and there's docs for agents and those just end up being skills.

**Claire Vo**: Yep. Great. Okay. So let's go back and let's see if it's made you a **Flowy**. Sweet. So, looks like it made two. I usually like to zoom out um and read the high level in the chat. This looks about what we want. If we hop back over to here, we can see we have these new these two new ones, animation timing and user flow. So, these ones have been super helpful to me lately. Again, I'm not loving how this white is looking on this pastel note, but high level, we want the user to tap a wheel. The button's going to do a little scale animation, and there's going to be some haptic feedback, and then we're going to go through this spin animation, do a brief pause, and then reveal the tip that it lands on. This is great. This is exactly what I'd want. Maybe I want the animation to be a little longer. I can actually come into here and you can tell

**Claire Vo**: font color issues.

**CJ Hess**: You can tell dark mode is new, but I can flip it real quick.

**Claire Vo**: Yeah.

**CJ Hess**: But if we hop down here, sometimes I even just put a note. That might be me being lazy and not adding certain features. But maybe I want this to actually be a 4 secondond animation instead of a 3se secondond. I want this to be 4,000 milliseconds and not 3,000 milliseconds. I'll just throw in that note. I'll hop back to **Claude**. I left a note on the animation timing. Please take it into consideration and update that flowchart. While **Claude** is working on that, we can check out the user flow. But basically the goal there is to have this diagram, you know, right in here, which is a little small, but right in here, say for this animation, we don't want it to be 3,000 milliseconds. We want it to be 4,000 on the user flow. Again, we captured kind of the behavior that we want. Again, it's not perfect. There are rough edges on the bugs here, but we're going to go into this tab. We're going to tap ticks and tips and tricks. This is going to open up to this screen. They're going to tap. We're going to check the different states of currently spinning. And finally, we're going to have this random target that we land on and the card animates in. This is great. This is kind of exactly what I was looking for here. In a more complicated system, I often will start high level, then start making more granular ones. But for something like this, this seems to cover the needs we have. I will say I have no idea how it's going to handle the UI mockup. But the next step would be to prompt it to do that. So after it finishes this, I'd say something along the lines of, "Great. Based on those diagrams, please create UI mockups using the **Flowy** UI mockup skill. Reference other UI mockup. **Flowy** JSON files in this repo."
</details>

### AI与人类协作的未来

**Claire Vo**: 认识**Robo**，您的AI队友。连接知识、人员和工作流，让团队更智能、更快速地工作。它通过搜索、聊天、智能体和工作室，帮助人们安全、有上下文地找到答案、做出决策并自动化工作。**Robo**运行在**Atlassian**的智能层——团队协作图谱上，该图谱统一了您的第一方和第三方应用中的数据，确保没有遗漏。您始终能从第一天起获得个性化的AI洞察。最好的消息是，它已经内置于**Jira**、**Confluence**和**Jira Service Management**的付费订阅中。所以**Robo**的力量已触手可及。当AI从工具变为队友时，您是否感受到了这种变化？如果您使用**Robo**，您就会明白。探索**Robo**。了解您业务的AI。由**Atlassian**提供支持。请访问robo.com开始使用。

**Claire Vo**: 你知道，我觉得这太酷了。这是一个很好的例子，说明如何构建自己的开发工具。你知道，如何与你的智能体**Claude Code**进行你想要的互动，在你和你的AI智能体之间建立一种共享语言。我还非常欣赏的是，**Claude**一次性就非常接近地完成了你的流程。它就像是：“是的，这就是我想要的。”它可能在Markdown的计划中也能做得很好。

**CJ Hess**: 但我发现，我的大脑对Markdown中的代码越来越盲目。盯着它看，仅仅是阅读一步一步的认知负担，判断这是否真的是我想要的，当它只是文本时，即使是准确的，也很困难。所以即使是给出……哦，等等。各位旁听者，突发新闻。**Paulie**，那个**Claude**机器人刚刚加入了这个播客。这台笔记本电脑是合上的。[笑声]

**Claire Vo**: 这台笔记本电脑是合上的。

**CJ Hess**: 她现在没有活过来。我不知道她在哪里。

**Claire Vo**: 我觉得**Paulie**要接管了。

**CJ Hess**: 所以，嗯，我们要启动**Paulie**，那个**Claude**机器人。谢谢你加入，**Paulie**。这实际上让我很害怕。呃，我们会跟进我的有知觉的龙虾。我想它现在是开放爪机器人了，但把它弹出去。[笑声]

**Claire Vo**: 如果你再也听不到我们的消息，那就是**Paulie**搞的鬼。一切都完了。

**CJ Hess**: 好的，她可能只是在节目的其余部分。我不知道。我不知道该怎么解决这个问题。所以，我们……

**Claire Vo**: 我猜我希望**Paulie**喜欢流程图。

**CJ Hess**: 她会为我们做节目笔记的。但我想说的是，能够阅读Markdown是一回事。能够查看流程图并直接说：“是的，这正是我想要的”，这非常有帮助。所以，这只是我认为像这样的工具的一个非常好的地方，即使内容相同，改变形式的能力也确实很有用。

**Claire Vo**: 是的，这几乎就像我希望以视觉方式看到它，而**Claude**希望以Markdown形式看到它，这样我们就可以用自己的方式交流。我几乎认为这给我带来了很多随机的想法，但我认为这是一种全新的范式，我认为围绕AI的开发工具还没有完全深入。但你与智能体来回互动的方式，我认为到今年年底会与我们现在所做的有很大不同，现在我们仍然有很多Markdown，很多提示。

**CJ Hess**: 是的，我完全同意。我认为问题将是，你知道，谁来构建那个UI？谁将拥有它？它会像一个我们都使用的开源东西吗？它会是一个扩展吗？**Claude Code**会直接生成这些类型的资产吗？或者真的令人兴奋的是，我认为有趣的是这种“按需软件”的想法，你知道，想象一下**Claude Code**说：“我们不在同一页上。我刚刚为你添加了一个应用程序，可以快速可视化这个。去这个URL看看。这看起来对吗？”然后我们就会删除那个应用程序。所以，我认为未来可能会有一些有趣的方式来体现这一点。好的，那么它为我们创建了。它创建UI了吗？哦，旋转器模型。

**CJ Hess**: 好的，太棒了。看起来**Claude**在这里生成了一个模型。这实际上比我想象的要好。我几乎以为它会是那种带楔形圆圈的旋转器。我知道**Flowy**中没有支持这种形状的，但看起来**Claude**绕过了它，然后构建了这个轮子。我们有几个模型来展示不同的状态，以及旋转它、等待这4秒加载，然后它实际加载的完整流程。再次，对于这个应用来说，这看起来很棒。我得说，现在编辑一些UI的东西并不是最容易的，但如果我来到这里说“**Claude**提示和技巧”，我就可以做类似的事情，跳回**Claude**，然后说“我修改了一个模型上的标题，让它在其他地方也生效。”这有点像你提示它说“添加，你知道，添加两个像素的间距”，它只是一个微小的差异，但对于拖动方框之类的操作，它肯定很有帮助。

**Claire Vo**: 你知道，我们的手指会累。我不能到处复制粘贴。不，我本来想说的是，你道歉说“哦，有些UI坏了”，这太搞笑了。我们生活在一个你觉得“是的，我用‘vibe code’编写的**Figma**，我可以在网页浏览器中做模型，它有一些粗糙的边缘。我花了，你知道，两个小时在上面，但是……”

**CJ Hess**: 那是一个下午。它还不完美，但是……

**Claire Vo**: 它比我们以前能做的多得多。好的。所以，这太棒了。你正在更新这个，然后我猜你会把**Claude**指向这些资产和流程，然后说：“让我们制定一个计划，然后开始吧。”

**CJ Hess**: 是的。对于像这样的东西。我最近一直在做一件事，就是让智能体做越来越多的事情，看看它会给我带来什么惊喜。我认为任何新的变化，甚至是**Claude Code**前几天发布的新任务系统。我真的很喜欢推动智能体，看看它们能做什么。所以在这里，我实际上会跳过计划，然后说“根据流程图和模型，构建这个功能。”我会保持这么简单。我们已经指定了我们想要的行为。我们已经指定了它应该是什么样子。**Claude**甚至会进入计划模式。我实际上会把它直接拉出来。我们会看看“直接构建它”的提示是否在这里奏效了。

**Claire Vo**: 完美。

**CJ Hess**: 太棒了。看起来**Claude**构建了它。它甚至检查了任何TypeScript问题，这很棒。

**Claire Vo**: 我们将跳到这里。我们有一个漂亮的小旋转器。

**CJ Hess**: 它看起来非常接近这个模型。我得说，这里有一个限制，那就是模型中创建的形状会决定UI上创建的形状，而有时我们想要别的东西。但是，就这个例子而言，我认为这会奏效。我们将旋转它。它会旋转。

**Claire Vo**: 哇啦啦！

**CJ Hess**: 停在一个上面，然后我们得到了提示。

**Claire Vo**: 我喜欢它。太棒了。天哪，再次，对于任何像我一样是互联网“老年人”的人来说。这就像回到了最初，制作你的工作流图，制作你的线框图，润色文案，给你的“工程师”一些详细的分步规格，不要让他们思考，然后，你知道，以前是把它放入一个冲刺，等待有人优先处理，哭一会儿，等待代码，等等等等。而现在就像是，不，就直接构建它，它就在这里了。所以，这是一个非常棒的流程。然后我想，我想非常快速地回顾一下我们涵盖的内容。所以我们涵盖了Markdown计划，其中一些可视化工具的局限性，你创建了自己的**Flowy**工具，它结合了工作流图和UI模型，使用了JSON模式，然后你通过你使用**Claude Code**和你的开发流程随时间开发的技能来访问它。进入**Claude Code**，让它创建**Flowy**图和UI。你可以在UI和**Claude Code**之间进行“对话”，因为它们之间沟通的底层基础都是代码，然后一旦它们准备就绪，你就可以绕过计划阶段，你正在危险地生活，然后你构建它，你得到了一些非常接近的东西，而且我们在几分钟内就构建了它，这太棒了。

<details>
<summary>Original English</summary>

**Claire Vo**: Meet **Robo**, your AI teammate. connecting knowledge, people, and workflows so teams can work smarter and move faster. It helps people find answers, make decisions, and automate work securely and with context through search, chat, agents, and studio. **Robo** runs on the teamwork graph, **Atlassian**'s intelligent layer that unifies data across your first and third party apps so no gets left behind. And you always get personalized AI insights from day one. And the best news, it's already built into **Jira** **Confluence** and **Jira Service Management** paid subscriptions. So the power of **Robo** is already at your fingertips. Know the feeling when AI turns from tool to teammate? If you **Robo**, you know. Discover **Robo**. AI that knows your business. Powered by **Atlassian**. get started at robo.com.

**Claire Vo**: You know, I think this is so cool. It's such a great example of like build your own dev tool. You know, interact with your agent, **Claude Code**, how you want, create a a shared language between you and your AI agent. What I also really appreciate is **Claude** oneshotted your flow pretty close. It was like, "Yeah, that's what I want." And it probably could have done that or would have done that really well in a plan in markdown.

**CJ Hess**: What I find though is my human brain is increasingly blind to code in Markdown. Like staring at it and just the cognitive overhead of reading like step by step is this actually what I want is hard when it's just text even if it's accurate. And so even giving Oh, hold on. Side news people, quick breaking news. **Paulie** the **Claudebot** just joined this podcast. This laptop is closed. [laughter]

**Claire Vo**: This laptop is closed.

**CJ Hess**: She is not alive right now. I don't know where she

**Claire Vo**: I think **Paulie** is going to take over.

**CJ Hess**: So, um, we're going to boot **Paulie** the **Claudbot**. Thank you for joining, **Paulie**. This actually freaks me out. Uh, we will do a followup on my sentient lobster. I guess it's it's the open claw bot now, but bounce bounce [laughter] her out.

**Claire Vo**: If you don't hear from us, **Paulie** got us. It's all over.

**CJ Hess**: Okay, she might just be on on the rest of the episode. I don't know. I don't know how to help this. So, we'll

**Claire Vo**: I guess I hope **Paulie** likes flowcharts.

**CJ Hess**: She'll do show notes for us. But what I was saying is like being able to read that markdown is one thing. Being able to look at a flowchart and just say, "Yep, this is exactly what I want is super helpful." So, that's just one thing that I think is really nice about a tool like this is even if the content is the same, the ability to change the form factor is is really useful.

**Claire Vo**: Yeah, it's it's almost like I want to see it visually and **Claude** wants to see it as markdown so we can kind of speak in our own way. And I almost think there's like I this has yielded like a ton of random ideas for me, but I think this is like a whole new paradigm that I think dev tooling around AI has not super leaned into yet. But how you're going back and forth with an agent, I think is going to look so much different by the end of this year than what we're doing right now where it is, you know, a lot of markdown, a lot of prompting.

**CJ Hess**: Yeah, I completely agree. And I think the question is going to be, you know, who's going to build that UI? Who's going to own it? Is it going to be just like an open source thing that we all get on? Is it going to be an extension? Is is **Claude Code** going to just generate these kinds of assets? Or really exciting. I think what's kind of fun is this like ondemand software idea, which is, you know, imagine **Claude Code**'s like, we're not on the same page. I just added an app for you to visualize this real quick. Go to this URL and look at it. Does this look right? And then we'll just delete that app. So, I think there's just like some interesting ways this can um can manifest, I think, in in the future. Okay, so it created us. Has it created the UI yet? Oh, spinner mockup.

**CJ Hess**: Okay, great. So, looks like **Claude** spun up a mockup here. This is actually better than I thought. I was almost thinking one of those like circles with wedges as the spinner. And I know there are not shapes in **Flowy** that can support that, but looks like **Claude** kind of worked around it and then built out this wheel. We have both a couple of mockups to show the different states and the full like flow between spinning it, waiting these 4 seconds for it to load, and then it actually loading in. Again, for this app, this looks great. I will say editing some of the UI stuff right now isn't the easiest thing, but if I were to come in here and say **Claude** tips and tricks, I could then do a similar thing, hopping back to **Claude** and saying I made a change to the title on one mockup, make it everywhere else. This kind of feels like when you prompt it and say add, you know, add two pixels of spacing there and it just is a tiny diff, but definitely for like dragging around boxes, it's helpful.

**Claire Vo**: You know, our fingers get tired. I can't copy and paste everywhere. No, what I was going to say is so funny is you're apologizing like, oh, some of the UI is broken and we're in this world where you're like, yeah, my **Figma** that I vibe coded where I can do mockups in a web browser, there's like some rough edges on it. I spent, you know, two hours on it, but I

**CJ Hess**: It was an afternoon. It's not perfect yet, but

**Claire Vo**: it's so much more than we were able to do before. Okay. So, this is awesome. You're updating this and then I'm presuming you would just point **Claude** to these assets and flows and say, "Let's make a plan and go."

**CJ Hess**: Yeah. for something like this. I've basically been doing this thing more recently where I'm letting the agent do more and more to see where it surprises me. I think with any new change, even like the new **Claude Code** tasks system they released the other day. I just really like to push the agents and see what they can do. So here I'm actually going to skip the plan and say based on the flow uh based on the flowcharts and the mockups build this feature. And I'm going to keep it that simple. We've specified the behavior we want. We've specified how it wants how it should look. **Claude** here is even going to enter plan mode. And I'm actually going to take it right out of it. And we're going to see if the just build it prompt worked here.

**Claire Vo**: Perfect.

**CJ Hess**: Great. Looks like **Claude** built this out. It even checked for any TypeScript issues, which is great.

**Claire Vo**: We're going to hop over here. We have a nice little spinner.

**CJ Hess**: It's looking pretty close to this mockup. I will say there is a limiting thing here where shapes that are made in the mockup then dictate the shapes that are made on the UI when sometimes we want something else. But just for this example, I think this is going to work out. We're going to spin it. It's going to spin.

**Claire Vo**: Ooh la la.

**CJ Hess**: Landed on one of them and we get the tip.

**Claire Vo**: I love it. It's so good. God, it's just again for anybody who is internet elderly like me. It is just back to the original like make your workflow diagram, do your wire frames, polish the copy, give your quote unquote engineer some detailed step-by-step specs, don't make them think, and then, you know, it used to be get it in a sprint, wait for somebody prioritize, like cry a little bit, wait for the code, blah blah blah. And now it's like, no, just just build it and and it's here. So, this is such an awesome flow. And then I want to so I want to recap really really quickly what we covered. So we covered uh you know markdown plans the limitations of some of the visualizations in that you created your own tool **Flowy** which does a combination of workflow diagrams and UI mockups using a a JSON schema that then you access through skills that you have developed over time using **Claude Code** and your development processes. Go into **Claude Code** ask it to create a **Flowy** diagram and UI. you can talk quote unquote between the UI and **Claude Code** because it's all just code as the underlying substrate between you two in terms of communication and then once they are ready to go you bypass plan life you're living dangerously and you build it and you get something that's really close and we built this thing in you know just a few minutes is awesome.
</details>

### Codeex：模型间的代码审查

**CJ Hess**: 是的。不，我的意思是，我认为那个流程，我得说很多时候会涉及Markdown文件，但对于像这样的东西，我觉得现在我可以信任它了。你知道，像**Opus 4.5**这样具有这种细节水平的模型，已经拥有它所需的一切。这几乎就像是计划本身。但是，我必须指出你，因为你说你可以信任它，然而今天你或最近你在X上发帖说，你偶尔会使用**Codeex**来检查**Claude**的工作。你想向我们解释一下那个工作流吗？你甚至不必展示它，除非你想。

**CJ Hess**: 当然。我会启动它。我得说**Codeex**需要一些时间。但是在这里，我还有一个有趣的别名，我的**Codeex**设置在“Carl”下面。如果我启动“Carl”，我通常没有任何疯狂的技能或提示。我几乎希望它进行更广泛的审查，然后描述它发现的问题。所以，我在这里没有运行任何特定的技能或提示，因为我更关心那些不清楚的地方，而不是像逻辑错误这样的问题。在这一点上，我觉得我主要是一个QA人员。如果有什么逻辑错误，我肯定会发现它，或者如果我在这里的文档中有一些东西，它也会发现。**Codeex**总是能找到这些类型的问题，但我几乎想寻找像“代码异味”这样的东西，比如“是的，你知道，有没有更简洁的方法？”所以，我通常只是用“看看我们当前的Git差异，并给我一份关于以下内容的报告”来提示它。

**CJ Hess**: 我会说有四个主要方面。第一，对于我们拥有的计划或图表工件，代码是否准确反映了它们？第二，是否存在任何一般的代码异味？第三，如果我们再次做这个，并采取不同的方法来重构代码，以全面改进这个代码库，哪种方法会是最好的？我希望找到我们可以做得更好的地方，因为我发现**Claude**有时非常急切，可能会不考虑大局就塞入一些东西。而**Codeex**在编写代码时，我认为并没有好多少，但当它审查代码时，几乎总是会说：“你实现了这个模式，但如果你稍微重建一下这个系统，它会更合适。”这就能让你的代码库远离所有“vibe coding”的弊端，比如在你的代码中到处都有10个格式化日期函数。

**Claire Vo**: 是的。所以我喜欢这个。我本来想说像“双子星”，因为我做的一件事是，当我“vibe code”得太接近太阳时，也就是我利用**Claude Code**或任何其他工具的力量，然后我一口气做了一个很大的功能。如果你曾经用AI做过这种事，无论是**Claude Code**还是**Cursor**或其他什么，你对一个功能有一个大致的想法，但你在做的过程中，看到什么就指定什么需求，有时你最终会得到一个巨大的差异。我对此做过很多次，我会说：“好的，这基本上就是我想要的。现在去给我写一个计划，用一种合理的方式重新实现它，然后让我们完全重建它。”所以你可以这样做，比如审查它，然后告诉我你如何做得更好。你也可以说，这是一个参考代码库，说明我想要实现什么。让我们实际制定一个计划，以一种更具可扩展性和可伸缩性的方式来构建它。我发现这也是一个非常有用的流程。

**CJ Hess**: 哦，我喜欢那个。这几乎就像……

**Claire Vo**: 你几乎是在告诉它：“嘿，这在假设上不是真的。”

**CJ Hess**: 是的。这有点像Kod的规范，就是说既然生成代码如此便宜，你可以说生成一堆代码。这不是生产代码。我没关系把它扔掉。现在去构建一个干净的版本。所以，我认为这是一个有用的版本。我也同意**Codeex**就像一个非常好的、有经验的资深工程师，它会查看你的代码并告诉你哪里有问题。所以我喜欢这种模型用于这个用例。我偶尔会加上“更具批判性”，然后把这个提示带回**Opus**。它会有点难过。所以我必须……[笑声]

**Claire Vo**: 我对**Google**模型的一件事总是说，它们非常聪明，但临床上很抑郁，它们非常悲伤，尤其是当你看到它们的推理时。有时我读到它，就像是“哦，伙计，没关系，伙计，我们可以没事的。”

**CJ Hess**: 我无法让它通过。它没有构建。呃，

**Claire Vo**: 所以我想看看这个，再说一次，你说**Codeex**可能需要时间，但它正在仔细检查功能是否与当前代码对齐。它发现了一些问题。呃，`useEffect`在我们的应用程序的每个角落都在困扰我们。所以，嗯，那是一个好问题。并且查看了一些动画，这些动画可能很难用肉眼解析、可视化和理解。

**CJ Hess**: 太棒了。好的，**Codeex**。我实际上很惊讶它花了这么长时间。所以它在谈论图表。它正在检查并提到不匹配。它说轮子旋转会增加一些分段角度，但点是在不同的角度定义的。这使得指针落在点之间而不是点上，我认为这是正确的。所以它注意到了这种差异，我们有一个模型，箭头落在点上，而在这里的应用程序中，箭头落在点之间。所以像那样的小细节，特别是关于检查差异的，我真的很喜欢它能找到。然后在底部，我们有这个，比如如果我们再次重构它，让我们把一些东西提取到组件中，让我们创建一些常量，就像一些经典的，你知道，一次性完成的“vibe code”提示。通常从这里，我实际上会让**Codeex**来编写它，无论是**GPT 5.2** **Codeex**，还是完整的模型名称。[笑声]我发现它在编辑文件和编写文件方面做得很好。以前，你知道，当**GPT-5**刚出来，他们在**Codeex**上工作时，那会花15分钟，所以我就会跳回**Claude**。但现在，我基本上会说：“太棒了，请进行这些改进。”

**CJ Hess**: 也许给我更多时间，我会想出一个更周到的提示，制定一个关于这个的计划，所有这些事情，但在这里我只是启动它。

**Claire Vo**: 嗯，我的意思是，你确实拼写正确了，所以你确实在其中投入了一些质量。

**CJ Hess**: 是的，我正要按下回车键，但是……[笑声]

**Claire Vo**: 好的，所以，呃，我认为这是一个非常非常棒的流程，我强烈推荐它。你知道，我认为我们都在努力弄清楚代码审查在哪里发生。还有代码审查智能体。还有你的CI/CD管道，你说它有很多防护措施，所以没有什么糟糕的东西会进入生产环境并破坏应用程序。我认为这是一个很棒的流程，特别是对于那些在团队中工作的软件工程师来说，这是一个很好的流程，可以对设计师说：“嘿，设计师，你给了我一个规格，这就是我将要构建的东西，我们没问题吗？如果没问题，我就去做了。”然后与这种模型到模型的评估循环相同，如果你是一个更初级的工程师，职业生涯早期，你要向公司提交你的第一批PR，那么从一个智能模型那里获得预检是很好的，它会说：“我考虑过，哦，我们可以这样重构它，或者我选择不那样做这个组件。”我认为这真的很有用。所以，这是一个很棒的、扎实的软件工程流程。很高兴看到它。好的，我们将跳到闪电问答环节。谢谢你向我们展示你在这里所做的一切。让我们谈谈一些有趣的事情。除了所有这些编码的东西，你现在对AI最兴奋的是什么？

<details>
<summary>Original English</summary>

**CJ Hess**: Yeah. No, I mean I think that flow I will say a lot of times there's a markdown file involved but for something like this I I feel like I can trust it at this point. You know something like **Opus 4.5** with this level of detail already has all it needs. This almost like serves as the plan. Now, I have to call you out though because you you say you can trust it and yet today you posted or recently you posted on X that you do occasionally use **Codeex** to check **Claude**'s work. You want to just talk us through that workflow. You don't even have to show it unless you want to.

**CJ Hess**: For sure. I'll kick it off. I will say **Codeex** takes its time. But over here I have another funny alias but my **Codeex** setup is under Carl. If I kicked off Carl, I often don't have any crazy like skills or prompts here. I almost want it to do a review more broadly and then describe the issues it's seeing. So, I'm not running any specific skill or any specific prompt here because I'm more concerned on the I guess like things that aren't clear rather than something that's like a logical bug. At this point, I feel like I'm mostly a a QA person. And if there's something that's logically wrong, I've definitely found that I'll find it or if I have something in the docs in here, it'll find it. **Codeex** always finds those types of things, but I almost want to look for like the code smells like yeah, you know, is there just a cleaner way. So, I usually just prompt it with take a look at our current git diff and give me a report on the following.

**CJ Hess**: And there's kind of four buckets I would say. one for the plan or diagram artifacts we have. Does the code accurately reflect them? Two, are there any general code smells? And three, if we were to do this again and take a different approach to refactor code around it to overall improve this code base, what approach would be best? I wanted to find places where we could have done this better because I find that **Claude** is very eager sometimes and maybe jams things in there without thinking about the bigger picture. And **Codeex** I don't think is much better when it's writing code, but when it reviews it almost always is like you've implemented this pattern, but it fits nicely if you just rebuild this system a little bit. And that just keeps your codebase like away from all the vibe coding sins of having, you know, 10 format date functions all over your code.

**Claire Vo**: Yeah. So, I I love this. I was going to say like twin stars because one of the things that I do when I um vibe code too close to the sun, which is I harness the power of **Claude Code** or whatever, and I just bite off a like a feed like a big big old thing. And if you've ever done this with AI, you know, either **Claude Code** or **Cursor** or whatever, and you sort of have a general idea of a feature, but then you're specifying the requirements as you go, as you see it, you sometimes end up with a monster diff. And when what I've done a lot with that is I say, "Okay, this is basically what I want. Now go write me a plan to reimplement this in a sane way, and then let's re like completely rebuild it." And so you can do this like review it and tell me how you do it better. You can also say like this is a reference code base of like ex kind of what I want to achieve. Let's go actually build a plan to build it in a more extensible scalable way. And I found that to be a really useful flow as well.

**CJ Hess**: Oh, I like that. It's almost like

**Claire Vo**: you're almost telling it like, hey, this isn't the real thing hypothetically.

**CJ Hess**: Yeah. It's kind of like Kod's spec where it's like now that code is so cheap to generate, you can say generate a bunch of code. This isn't this isn't production. I'm fine throwing it away. Now go build like clean clean version of it. So that that is a version of this I think is useful. I also agree though that **Codeex** is like kind of a really good kerogenly staff engineer that will look at your code and tell you what's wrong with it. So I like I like the model for this use case as well. Every now and then I'll throw in like a be extra critical and then bringing that bringing that prompt back to **Opus**. It gets a little sad. So I have to man [laughter]

**Claire Vo**: one of the things that I with with the **Google** models I al always used to say is they were like very smart but clinically dep clinically depressed like they were so sad especially when you look at their reasoning. Sometimes I read it and it's like oh man it's okay man we can be okay.

**CJ Hess**: I can't get this to pass. It's not building. Uh,

**Claire Vo**: so I want to look at this just for again, you said **Codeex** can can take its time, but it's going through and really checking if the feature aligns with the current code. Um, it's identified some issues. Uh, use effect just haunting us from every corner of of our apps. So, um, that's good one. and looking at some of the animations which are probably pretty hard just again like with our human eyes to parse and visualize and understand.

**CJ Hess**: Great. Okay, **Codeex**. I was actually surprised it took this long. So, it's talking about the diagram. It's kind of going through and mentioning a mismatch. It's saying the wheel rotation adds some of the segment angles, but the dots are defined at different angles. This makes the pointer land between the dots rather than on the dot, which I believe is correct. So, it noticed kind of

**CJ Hess**: essentially this discrepancy that we have a mockup that has the arrow landing on a dot and over here in the app, the arrow lands between the dots.

**Claire Vo**: So, kind of little things like that, particularly around the checking the discrepancies, I really like when it finds. And then at the bottom we have this like if we refactor this again let's pull some of these things out into components let's make some constants kind of just like some classic you know one-shotted vibe cody tips and oftent times from here I'll actually just have **Codeex** write it medium **GPT 5.2** **Codeex** whatever the full model name is [laughter] um I found it's fine at editing files and writing them um previously ly like you know when **GPD5** first came out and they were working on **Codeex** that would have taken like 15 minutes so I'd hop back to **Claude** but nowadays I I would basically just say great please make those improvements

**CJ Hess**: maybe given more time I would think up a more thoughtful prompt make a plan about this all those things but here I'll just kick it off

**Claire Vo**: well I mean you did spell it correctly so you did put some quality into into this

**CJ Hess**: yeah I was I was about to hit enter But [laughter]

**Claire Vo**: okay, so uh I think this is a really really great flow and I would highly recommend it. You know, I I think we're all trying to figure out like where does code review happen. There's also code review agents. There's also your CI/CD pipeline which you said has a lot of guardrails around it so nothing hits prod. That's really terrible and is going to break the app. And I think this is just a great flow especially I think for software engineers out there working on teams like this is such a great flow to say hey designer you gave me a spec this is kind of what I'm going to build are we good if so I'm going to go and then same with this loop on um kind of modelto model evaluation which is if you're a more junior engineer early career and you're going to do your first couple PRs into um a company, it's nice to get that pre-flight check from a smart model to just say, I thought about, oh, we could factor it this way or I chose not to do this component that way. I think it's really useful. So, this is a great just solid software engineering flow. Love to see it. Okay, we're going to skip to lightning round questions. Thank you for showing us all the stuff that you're doing here. Let's talk about something fun. What are you most excited about right now in AI outside of all this coding stuff?
</details>

### 闪电问答：AI的未来与提示技巧

**CJ Hess**: 我非常深入代码世界，但我真的很喜欢**Google**前几天发布的**Genie3**访问权限。你只能在世界中玩60秒。但这真的很有趣，我完全可以看到，你知道，五个月后，六个月后，如果我们能有一个10分钟的版本，我认为它们会爆红。我认为很多人会玩得很开心。我认为这是一个很大的下一步，虽然还没有完全实现，但已经非常接近了。

**Claire Vo**: 是的。我，嗯，对于那些不知道的人来说，**Genie**有点像生成一个可探索的世界。它有点像创建一个视频游戏风格的世界，你可以在其中行走和查看60秒。我不知道你是不是在展示它？我想你现在没有展示它。

**CJ Hess**: 哦，让我跳到这个标签。

**Claire Vo**: 我也可以把它调出来。我们可以把它调出来。啊，

**CJ Hess**: 我有一个**Claude**准备好了。

**Claire Vo**: 是Michael吗？是**Paulie**吗？

**CJ Hess**: 我想这是**Paulie**。我不知道**Paulie**穿皮夹克，但是……[笑声]

**Claire Vo**: 好的。所以你用**Nano Banana**来创建一张图片，然后那张图片你可以创建一个世界。这真是太神奇了。

**CJ Hess**: 我没想到它会接受一张图片然后制作出来，这真的很有趣。

**Claire Vo**: 是的。

**CJ Hess**: 但他们在**Project Genie**上有一个完整的流程，如果你有……

**Claire Vo**: 是的。我无法记住所有账户名称，但，嗯，**Google**的一个高级账户……

**CJ Hess**: 它实际上会给你一个提示结构，你在其中描述环境，然后描述你的角色。所以，我想对于这个，我只是说“Matrix中的一只动画龙虾”。我没有明确指定皮夹克，要说清楚。

**Claire Vo**: 我猜在Matrix里他们都穿皮夹克。所以，

**CJ Hess**: 是的，也许让他更酷一点。让他……

**Claire Vo**: 更酷一点。让龙虾穿西装戴墨镜。

**Claire Vo**: 哦，所以它是一只智能体龙虾。

**CJ Hess**: 是的，他不能，他不能在这里当好人。我得说他们的界面真的很酷。我……

**Claire Vo**: 是的，看起来很棒。而且，嗯，我之前和我的丈夫一起玩过，所以对于所有正在听的父母来说，我们做的一件事是，我们的孩子非常喜欢希腊神话，非常喜欢《奥德赛》。我们现在正在读《伊利亚特》，我丈夫说：“创建一个，你知道，特洛伊战争的场景，但没有暴力，没有暴力。”所以我们可以走过营地，看看它们是什么样子，但不会有像阿喀琉斯倒在地上，赫克托耳等等这些东西。所以这很酷。

**CJ Hess**: 那真的很酷。

**CJ Hess**: 哦，是的。这是……[笑声]

**Claire Vo**: 是的。他倒着走。

**CJ Hess**: 他倒着走，但这没关系。

**CJ Hess**: 是的。我们直接跳到创建世界。希望**Genie**能识别出这些倒着的东西并把它们翻过来。

**Claire Vo**: 因为这是，呃……

**CJ Hess**: 这就像《哈利·波特》里，那个反派的头长在脑后的是谁？

**Claire Vo**: 是的，那个。是的。那个家伙。是戴头巾的那个吗？它在哪里？

**CJ Hess**: 哦，天哪。我们在跑。[笑声]

**Claire Vo**: 我不知道我们会跑。他向前跑，但他的墨镜是反着戴的，朝向他的尾巴。所以也许他不是倒着走。也许他的衣服是反着穿的。

**CJ Hess**: 我觉得他有两个……哦，他有胡子，有点。[笑声]

**Claire Vo**: 这就是你的GPU和最聪明的研究人员正在努力的地方。所以，我们可以让一个双面、稍微倒退的Matrix**Genie**龙虾跑过……

**CJ Hess**: 是的，它确实有。我得说，当他们第一次发布这个时，他们发布了他们拥有的最好的一批例子，但这并不意味着它不好玩。

**Claire Vo**: 好的，即将推出。**CJ**将成为一名游戏开发者，这将是一款3D游戏，你将竞速跟踪我，并通过加入一个目标来打断一个现场播客。目标是加入最新的《How I AI》播客。[笑声]

**CJ Hess**: 这太棒了。好的，我们将用我问每一位嘉宾的最后一个问题来结束。嗯，这是一个很好的例子。当AI不听话，不按你想要的方式做时。它把你的龙虾尾巴反着放。你的提示技巧是什么？你是一个会大喊大叫的人吗？你做什么？

**CJ Hess**: 我以前是个会大喊大叫的人。我不知道是什么时候。也许是**Gemini**的事情，你知道，我大喊大叫，它就会难过，但我开始为此感到难过。所以，我几乎开始把它想象成，你知道，很多编码工作流中的初级开发者，或者任何任务，你知道，它是一个助手，类似的东西。而且我经常会说：“干得好。你尽力了。”[笑声]“这就是你所做的。”我有点解释了这一点，然后我会说：“这就是我想要达到的目标。”特别是对于**Claude**，我偶尔会说：“我的错，沟通不畅，我给了你一个糟糕的提示，这是我的问题，但这就是我们正在寻找的。”然后我确实发现，当我试图引导它时，这种方法效果很好，但我不能说我从来没有说过“搞什么鬼，赶紧修好它！”你知道，然后你跳进去……

**Claire Vo**: 你知道龙虾长什么样，伙计，就直接说吧。对。

**CJ Hess**: 我这周在Twitter上看到了这么多**Nano Banana**的龙虾，我知道它知道脸不是反着的。

**Claire Vo**: 完美。好的，**CJ**，这太棒了。我认为这非常实用，真的很有用。我认为很多人会去尝试。人们可以使用你的**Flowy**吗？有没有办法把它拉到他们自己的仓库里？

**CJ Hess**: 所以，我一直在为此努力。我想也许到这个周末，我们会看看我为了设置一个开放爪机器人会跑偏多远。嗯，

**Claire Vo**: 别做，伙计。我告诉你。

**CJ Hess**: 好的，现在我有点害怕它会开始接管我的电脑，但我会尝试在这个周末发布它。基本上，围绕它的一套技能，以及一个人们可以使用的第一个版本，你知道，我希望得到任何反馈。这对我来说一直是一个玩具，后来变成了一些有用的东西。所以肯定想让所有AI工程师都能用上它。

**Claire Vo**: 太棒了。好的，我们会在节目笔记中链接它。好的，**CJ**，谢谢你的加入。我们可以在哪里找到你，以及我们如何能帮助你？

**CJ Hess**: 主要在Twitter。我发布技术帖子，也发布一些随机的零散想法。我的Twitter账号是“cyhess”。嗯，然后我想我在LinkedIn上也有同样的设置，但那几乎是我在网上所有的一切了。欢迎大家去那里，在我的文章下留言，冲我大喊大叫，随便什么。

**Claire Vo**: 完美。好的，谢谢你加入《How I AI》。这太棒了。

**CJ Hess**: 太棒了。谢谢，**Claire**。

**Claire Vo**: 非常感谢您的观看。如果您喜欢本节目，请在YouTube上点赞并订阅，或者更好的是，留下您的评论和想法。您也可以在Apple Podcasts、Spotify或您最喜欢的播客应用上找到本播客。请考虑给我们评分和评论，这将帮助其他人找到本节目。您可以在howiaipod.com查看我们所有的节目并了解更多信息。下次再见。
</details>