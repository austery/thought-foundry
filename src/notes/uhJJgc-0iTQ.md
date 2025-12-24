---
area: tech-insights
category: technology
companies_orgs: []
date: '2025-10-17'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- claude
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=uhJJgc-0iTQ
speaker: Anthropic
status: evergreen
summary: Anthropic的Erik和Alex深入探讨了如何构建更高效的AI智能体，解析了Claude在代理任务中的优势、多智能体协作、SDK与技能的应用，以及AI智能体未来在软件工程和计算机使用等领域的广阔前景。
tags:
- ai-agent
- ai-development
- system
title: 构建更高效的AI智能体：Anthropic探讨Claude的多智能体能力与未来展望
---

### 智能体训练与Claude的核心优势

Alex: Hey, I'm Alex, I lead Claude Relations here at Anthropic. Today we're gonna be talking about building more effective agents and I'm joined by my colleague.

Alex: 大家好，我是Alex，Anthropic的Claude关系负责人。今天我们将讨论如何构建更高效的智能体，我的同事也加入了我们。

Erik: I'm Erik, I work on multi-agent research here at Anthropic.

Erik: 我是Erik，在Anthropic从事多智能体研究。

Alex: Erik, to kick us off here, can you just explain why Claude is so good at agent tasks?

Alex: Erik，首先请你解释一下，为什么Claude在智能体任务方面表现如此出色？

Erik: Yeah, sure. So during our training, we let Claude practice being an agent. We give it open-ended problems for it to work on where it can take many steps and use tools, explore where it is and what it's working on before giving a final answer. And by getting lots of practice at being an agent, Claude becomes really good at this.

Erik: 当然。在我们的训练过程中，我们让Claude练习扮演智能体。我们给它开放式问题，让它在给出最终答案之前，可以采取多个步骤、使用工具，并探索其所处的环境和正在处理的任务。通过大量的智能体实践，Claude在这方面变得非常擅长。

Alex: Okay, so it's these long running tasks and a variety of domains basically. And through the process of **RL** (Reinforcement Learning: 强化学习，一种机器学习方法，通过与环境互动、接收奖励或惩罚来学习最优行为策略) and other training mechanisms, Claude is learning an objective of how to do these things with basically limited guidance or feedback.

Alex: 好的，所以它基本上是处理这些长期运行的、跨多个领域的任务。通过强化学习（**RL**）和其他训练机制，Claude正在学习如何在基本没有指导或反馈的情况下完成这些任务的目标。

Erik: Exactly, we do lots of RL on coding tasks, on search tasks, lots of things for Claude to practice being an agent in different environments.

Erik: 没错，我们在编码任务、搜索任务等许多方面都进行了大量的强化学习，让Claude在不同环境中练习扮演智能体。

### 编码能力：智能体的基础技能

Alex: There's kind of this conception, I think of Claude models that they're really, really strong in code, but that doesn't always maybe transfer into other domains or that coding is its own separate thing. What are your kind of views on that generally?

Alex: 我觉得人们对Claude模型有一种看法，认为它们在代码方面非常非常强大，但这种能力可能不总是能转移到其他领域，或者说编码本身是独立的一回事。你对此有什么看法？

Erik: So coding has been the first task that we've really focused on, but once you have an amazing coding agent, a coding agent can do any other kind of work. If you need to do search, you can do web search, you know, via **APIs** (Application Programming Interface: 应用程序编程接口，一套定义了软件组件如何交互的规则和协议), you can plan a weekend by, you know, creating a schedule. So we really see coding as a very fundamental skill for an agent that's gonna have a lot of spillover effect, to be able to make Claude great at all sorts of things and sort of like train on the hardest thing first and then everything else will become easy.

Erik: 编码确实是我们最初重点关注的任务，但一旦你拥有了一个出色的编码智能体，它就能完成任何其他类型的工作。如果你需要进行搜索，可以通过**API**进行网络搜索；你也可以通过创建日程来规划周末。所以我们确实认为编码是智能体一项非常基础的技能，它会产生很大的溢出效应，让Claude擅长各种事情，就像是先训练最难的事情，然后其他一切都会变得容易。

Alex: One interesting thing I've seen here recently with a feature that we released in Claude AI on the web was the ability for Claude to create actual files through writing code. So it was like writing a Python script and then the Python script got ran and all of a sudden you have like a Excel sheet that popped out of that. Is that kind of the future direction that we're headed is like Claude's writing scripts and taking actions on computers to create files or do things that are traditionally not code related?

Alex: 最近，我们在Claude AI网页版发布了一个功能，我发现一个有趣之处，就是Claude能够通过编写代码来创建实际文件。比如，它编写一个Python脚本，脚本运行后突然就生成了一个Excel表格。我们未来的发展方向是否就是让Claude编写脚本，在计算机上执行操作来创建文件或完成传统上与代码无关的任务？

Erik: I think that's one of the really effective ways Claude will be able to do these things. Actually, just a few days ago Claude was helping me make some diagrams for a presentation and it was able to create files just by writing out the **SVGs** (Scalable Vector Graphics: 可伸缩矢量图形，一种基于XML的图像文件格式，用于描述二维矢量图形), but then I wanted it to make a much more detailed diagram that would need a lot of repetition and so Claude was actually able to do this by writing some code to generate the SVG, which ran much, much faster than Claude itself needing to write you know, it was a very, very repetitive image file with lots and lots of sort of detailed patterns in it. So, yeah, I think that for a lot of cases writing code to produce some artifact will be much better than just trying to create that artifact directly. So it's one way to do it for harder cases.

Erik: 我认为这是Claude能够完成这些任务的一种非常有效的方式。事实上，就在几天前，Claude帮我制作了一个演示文稿的图表，它能够通过直接编写**SVG**文件来创建文件。但后来我想要一个更详细的图表，需要大量的重复工作，于是Claude通过编写代码来生成SVG，这比让Claude自己直接编写要快得多。那是一个非常非常重复的图像文件，包含许多详细的图案。所以，是的，我认为在很多情况下，编写代码来生成某个产物会比直接尝试创建该产物要好得多。对于更复杂的任务，这是一种很好的方法。

Alex: Okay, right, yeah. Code allows for kind of this speed up that's not even possible with like a human like clicking and dragging and using their mouse on a computer. Like repeated actions.

Alex: 好的，没错。代码能够实现这种加速，这是人类通过点击、拖拽和使用鼠标在计算机上无法做到的，比如重复的操作。

Erik: Exactly, Claude gets a for loop.

Erik: 没错，Claude得到了一个“for”循环。

### Claude Code SDK：简化智能体开发

Alex: Yeah, if you're a developer and you're building an agent with Claude, one thing that we've started to see become really popular is this Claude Code **SDK** (Software Development Kit: 软件开发工具包，一套用于特定平台或编程语言的开发工具集合，包含库、示例代码等). Can you walk me through what that is and how you're seeing developers starting to use that?

Alex: 是的，如果你是一名开发者，正在使用Claude构建智能体，我们最近看到一个非常受欢迎的东西就是这个Claude Code **SDK**。你能给我介绍一下它是什么，以及你看到开发者是如何开始使用它的吗？

Erik: Yeah, so we're really excited about developers using the Claude Code SDK. This is something where previously if you wanted to build a coding agent or sort of any agent, you had to really go from nothing but hitting an **API** endpoint, build the loops yourself, build all the tools, build executing these tools, interacting with files, interacting with **MCP** (Model-Controlled Program: 模型控制程序，指由AI模型驱动或控制的程序或系统，它将AI模型作为核心组件来执行任务和决策). We basically have already built all of that into Claude Code and even though its name is Claude Code, really Claude Code is just a general purpose agent that is most often used for code. Yeah, we are encouraging a lot of developers to use this SDK as the core of their agent loop and that way they don't have to spend a lot of time reinventing the wheel that we've already put a lot of time into polishing and perfecting that core agent loop and instead they can use that and then just add their tools for their own custom business logic or affordances into that via MCP.

Erik: 是的，我们非常高兴开发者能使用Claude Code **SDK**。以前，如果你想构建一个编码智能体或任何类型的智能体，你必须从零开始，只通过调用**API**端点，自己构建循环、所有工具、工具执行、文件交互以及与**MCP**交互。我们基本上已经将所有这些都内置到了Claude Code中。尽管它的名字叫Claude Code，但实际上Claude Code只是一个通用智能体，只不过最常用于代码。我们鼓励许多开发者将这个SDK作为他们智能体循环的核心，这样他们就不必花费大量时间重复发明我们已经投入大量时间打磨和完善的核心智能体循环，而是可以直接使用它，然后通过MCP为他们自己的自定义业务逻辑或功能添加工具。

Alex: Right, so it offers that sort of customizability to where you can remove the coding-specific bits.

Alex: 没错，所以它提供了那种可定制性，你可以移除与编码相关的部分。

Erik: Exactly.

Erik: 完全正确。

Alex: And put in whatever sort of prompt or tools that you need, just like slots nicely into the scaffold.

Alex: 然后可以根据需要放入任何提示或工具，就像完美地嵌入到脚手架中一样。

Erik: Yeah, I think also the people have been using Claude Code for all sorts of things. I think the, my strangest use of Claude Code is I once had it plan a date for me where I did a bunch of web searches, found interesting activities and restaurants in the area and so not code related at all, but it has all the tools.

Erik: 是的，我想人们也一直在用Claude Code做各种各样的事情。我用Claude Code最奇怪的一次经历是，我曾让它为我安排一次约会，它进行了大量的网络搜索，找到了该地区有趣的活动和餐厅，所以这完全与代码无关，但它拥有所有这些工具。

Alex: How was the date?

Alex: 约会怎么样？

Erik: It was pretty good. It was great, yeah.

Erik: 挺不错的。很棒，是的。

Alex: Claude did a good job?

Alex: Claude做得好吗？

Erik: Yeah, Filoli Gardens and then a Chinese restaurant nearby.

Erik: 是的，菲洛利花园，然后是附近一家中餐馆。

Alex: Wow, okay.

Alex: 哇，好吧。

Erik: Claude did a good job.

Erik: Claude做得很好。

Alex: I'm impressed.

Alex: 我印象深刻。

### Claude Skills：赋予智能体更多资源

Erik: Yeah. One other thing on Claude Code that has been another popular feature I've seen a lot of software engineers use lately is Claude MD files. So these are files that you, you know, define within a project and gives Claude relevant information about what your programming style is or like what the layout of the directories are, things like that. We've now launched a similar concept that maybe takes a step further called Skills. Can you explain what Skills are and how we're starting to see developers use them and what they mean for Agents?

Erik: 是的。关于Claude Code，另一个我最近看到很多软件工程师使用的热门功能是Claude MD文件。这些文件是你在一个项目中定义的，它们向Claude提供有关你的编程风格或目录布局等相关信息。我们现在推出了一个类似但可能更进一步的概念，叫做“技能”（Skills）。你能解释一下什么是技能，我们是如何看到开发者开始使用它们的，以及它们对智能体意味着什么吗？

Erik: Yeah, so Claude Skills are a very exciting extension of Claude MD files where instead of just giving it notes files, you can give it any sort of file. That can be PowerPoint template files, it can be code and like helper scripts that you want it to use. It can be images or assets. And I think this extension of not just instructions but resources for the agent to use is a really, really powerful tool where you might say, not just these in are my instructions for making PowerPoint presentations, but here's, you know, the head shots of all of our company leadership that you might need to reuse in many presentations and just giving it all to Claude in a reusable way. So it has everything it needs right there.

Erik: 是的，Claude Skills是Claude MD文件的一个非常令人兴奋的扩展，它不仅仅是提供笔记文件，你可以给它任何类型的文件。这可以是PowerPoint模板文件，可以是代码和你想让它使用的辅助脚本，也可以是图像或资产。我认为这种不仅提供指令，还提供智能体可使用资源的扩展，是一个非常强大的工具。你可以说，这不仅仅是我制作PowerPoint演示文稿的说明，而是我们所有公司领导的头像，你可能需要在很多演示文稿中重复使用，以一种可复用的方式把所有这些都交给Claude。这样它就拥有了所需的一切。

Alex: One analogy I've heard used internally that I really, really like is, it's kind of like in "The Matrix" when Neo is learning kung fu for the first time and they like inject him with the Kung Fu information and all of a sudden he is like a Kung Fu master. That feels like very similar to when I give Claude a skill of some type of like, here's how you create spreadsheets. And it's like, oh, all of a sudden Claude's like a banker now and it can create a financial model for me.

Alex: 我在内部听过一个比喻，我非常喜欢，就是它有点像《黑客帝国》里Neo第一次学习功夫的时候，他们把功夫信息注入到他体内，然后他突然就成了一个功夫大师。这感觉很像我给Claude一个某种技能，比如“这是你如何创建电子表格的方法”。然后突然之间，Claude就像一个银行家了，它能为我创建一个财务模型。

Erik: That and where they load in all of the racks of equipment and tools and stuff for them to grab.

Erik: 是的，还有他们装载了所有设备和工具的架子，供他们取用。

Alex: Yes.

Alex: 是的。

Erik: It's like, you know, you can start with these things, not just instructions.

Erik: 就像是，你可以从这些东西开始，而不仅仅是指令。

Alex: Yeah, I love that.

Alex: 是的，我喜欢这个比喻。

### 智能体演进：从工作流到智能体循环

Alex: Switching gears a little bit, so last time we chatted on camera here a few months back and we were talking about Agents and at the time we were in this transition from maybe workflows which are like very defined ways of how you chain together prompts to what was just like a single agent system where you're running a model in a loop. Since then, what's been the evolution in the space?

Alex: 稍微换个话题，几个月前我们在这里录制节目时聊过智能体，当时我们正处于一个转型期，从可能是非常明确地将提示链式连接起来的“工作流”，转变为在一个循环中运行模型的“单一智能体系统”。从那时起，这个领域有什么新的发展吗？

Erik: Yeah, so we've really seen Agents take over from workflows where Claude has gotten so good at responding to feedback and correcting its own work that now Agent loops really dramatically outperform workflows for most things where you care most about absolute quality. Workflows are still great, where you need very low latency and you want Claude to just give a best answer, single shot. Agents are really, really high performance now. I think one of the things that I've seen develop since then is what I call workflows of Agents. Whereas previously an application might have had a workflow that had Claude in single shot write a SQL command in order to load data and then that would go to another step in the workflow where it would then write a chart to display that data. And if the SQL command failed, you know this, it doesn't know that it's not returning any data and then the second step of the workflow--

Erik: 是的，我们确实看到智能体已经取代了工作流，因为Claude在响应反馈和纠正自身工作方面变得非常出色，现在智能体循环在大多数你最关心绝对质量的场景中，性能远远超过了工作流。工作流仍然很好，当你需要非常低的延迟，并且希望Claude一次性给出最佳答案时。现在智能体的性能真的非常高。我认为从那时起我看到的一个发展是，我称之为“智能体工作流”的东西。以前，一个应用程序可能有一个工作流，让Claude一次性编写一个SQL命令来加载数据，然后进入工作流的下一个步骤，编写一个图表来显示数据。如果SQL命令失败了，你知道它没有返回任何数据，那么工作流的第二步就——

Alex: Right.

Alex: 没错。

Erik: Is kind of screwed.

Erik: 就有点完蛋了。

Alex: Completely falls apart.

Alex: 完全崩溃了。

Erik: But now I've seen people where each one of those steps in the workflow is actually a closed loop where instead of just writing a single attempt at a SQL query, it then runs, Claude sees the output and then it can keep iterating and repeat until it knows that it got the right value and then it transitions to the next step in the workflow.

Erik: 但现在我看到，人们将工作流中的每个步骤都变成了一个闭环，它不仅仅是尝试编写一次SQL查询，而是运行查询，Claude看到输出，然后可以持续迭代和重复，直到它知道得到了正确的值，然后才过渡到工作流的下一步。

Alex: Okay, interesting. So yes, this evolution I guess of like chaining together prompts to now chaining together agents in these loops themself, we'll see where that goes from there. One other big topic of discussion, I feel like that has taken a lot more chatter as of late is this question around observability and verification. Can you explain what that challenge is and how people are starting to think about it?

Alex: 好的，有意思。所以，这种演进，我猜是从链式连接提示，到现在在这些循环中链式连接智能体本身，我们将拭目以待其发展。另一个我认为最近引起更多讨论的重要话题是关于可观察性（observability）和验证（verification）的问题。你能解释一下这个挑战是什么，以及人们是如何开始思考这个问题的吗？

### 可观察性与验证：复杂系统的挑战

Erik: Yeah, so observability is very hard for Agents, especially as the systems get more complex and I think that's one of the reasons where I still really believe that even though the models are much more capable today than they were a year ago and they can work better in an agent or even more complex setups, I think that simplicity is still a really important thing and that even though you can build a big workflow of agents, you should still start sort of by from the simplest possible thing and then work up to a more complex solution. And you know, that's first trying single shotting things or trying, you know, single shot prompt to Claude Code SDK, which is now just sort of such a simple, easy thing to use. And then I think only as needed adding layers and layers of complexity because that's gonna make the absorbability harder.

Erik: 是的，对于智能体来说，可观察性非常困难，尤其是当系统变得越来越复杂时。我认为这也是我仍然坚信的一点：尽管今天的模型比一年前强大得多，并且可以在智能体或更复杂的设置中更好地工作，但我认为简单性仍然非常重要。即使你可以构建一个庞大的智能体工作流，你也应该从最简单的事情开始，然后逐步构建更复杂的解决方案。比如，首先尝试一次性完成任务，或者尝试使用Claude Code **SDK**进行一次性提示，这现在已经是一种非常简单易用的方式。然后，我认为只有在需要时才添加一层又一层的复杂性，因为这会使可观察性变得更加困难。

### 多智能体系统：并行与任务委派

Alex: Another term here maybe in parallel to workflows of agents is multi-agent, is that the same thing or is that something different?

Alex: 这里还有一个词，可能与智能体工作流并行，那就是“多智能体”。这和智能体工作流是同一回事，还是有所不同？

Erik: Yeah, so multi-agent is my main area of research now. I'd say it's pretty different from a workflow of agent. Workflows of agents, where sort of an one agent goes, finishes and then it transitions or its output gets sent to the next agent to work on. Multi-agent is where fundamentally you have multiple agents or multiple Claudes working at the same time where maybe one parent agent delegates tasks to five sub-agents that can each then work in parallel. And this is how our deep research search product works is the main orchestrator agent will decide and create several sub-agents. They can do lots of searches in parallel and that's way better for the user because you know, all this happens in parallel and you get the answer back much sooner. We also see things like in Claude Code the model will use a subagent. So if something, if some sub-task is gonna take tens of thousands of tokens, like maybe finding a certain implementation of a class, but the answer really boils down to something very small, it can do that work in a sub-agent to protect the main context from all of that, those tokens that aren't necessary for the main work. So yeah, basically can offload this piece of work and just get back the final answer that it needs.

Erik: 是的，“多智能体”是我目前主要的研究领域。我想说它与智能体工作流相当不同。智能体工作流是其中一个智能体完成任务后，其输出会传递给下一个智能体继续工作。而多智能体从根本上来说，是你有多个智能体或多个Claude同时工作，可能一个父智能体将任务委托给五个子智能体，每个子智能体都可以并行工作。我们的深度研究搜索产品就是这样运作的：主协调智能体将决定并创建几个子智能体。它们可以并行进行大量搜索，这对用户来说要好得多，因为所有这些都并行发生，你更快地得到答案。我们还在Claude Code中看到，模型会使用子智能体。所以，如果某个子任务将消耗数万个token，比如查找某个类的特定实现，但最终答案非常小，它可以在子智能体中完成这项工作，以保护主上下文不受所有那些对主任务不必要的token的影响。所以，是的，基本上可以卸载这部分工作，只获取它需要的最终答案。

Alex: So are we exposing then this subagent in this case is like a tool that Claude can call upon?

Alex: 那么在这种情况下，我们是将这个子智能体作为Claude可以调用的工具来暴露吗？

Erik: Exactly.

Erik: 没错。

Alex: Pass in, it'll pass in the prompt as like a parameter or something?

Alex: 传入提示，它会像参数一样传入提示吗？

Erik: Exactly, yeah. So to the, to Claude sub-agents look like a tool where it can pass prompts to the sub-agents that will then go and do work. And part of my research is training Claude to be a better manager and know how to--

Erik: 完全正确，是的。所以对Claude来说，子智能体就像一个工具，它可以将提示传递给子智能体，然后子智能体就会去执行任务。我研究的一部分就是训练Claude成为一个更好的管理者，知道如何——

Alex: Oh interesting.

Alex: 哦，这很有趣。

Erik: Give clear instructions to its sub-agents and make sure that they gets the right things and needs out of them.

Erik: 给它的子智能体清晰的指令，并确保它们能从中得到正确的东西和需求。

Alex: How is this different than, or is this maybe like a specialized part of tool calling overall or is it different in some ways?

Alex: 这与工具调用整体上有什么不同，或者说这只是工具调用中一个专门的部分，还是在某些方面有所不同？

Erik: I would say that this uses the framework of tool calling for that communication protocol and it just happens to be a tool that itself is backed by Claude, by another Claude.

Erik: 我会说，这使用了工具调用的框架作为其通信协议，只不过它碰巧是一个由Claude自身（另一个Claude）支持的工具。

Alex: Does Claude have like an intuitive understanding of what a subagent is or do we have to like teach it? Like you're actually talking to another version of yourself, Claude, like don't get freaked out sort of thing?

Alex: Claude对子智能体有直观的理解吗？还是我们需要教它，比如“你实际上在和另一个版本的自己对话，Claude，别慌张”之类的？

Erik: I would say that Claude makes a lot of the same mistakes that first time managers make of where it will give incomplete or sort of unclear instructions. To a sub-agent. And you know, kind of expect the subagent to have the right context when actually it doesn't. And I think something we've seen during training on sub-agents is that Claude starts to get much more verbose and much more detailed and give its subagent the overall context of what's going on. So that they can do better work that adds them to the whole, so. I'd say that, you know, it definitely Claude, Claude has a lot to learn and is learning to get better at this.

Erik: 我会说，Claude会犯很多第一次当经理的人常犯的错误，比如给出不完整或模糊的指令。给子智能体。而且，它有点期望子智能体拥有正确的上下文，但实际上并没有。我认为我们在训练子智能体时看到的是，Claude开始变得更加冗长和详细，并给它的子智能体提供整体的上下文，以便它们能更好地完成工作，从而融入整体。所以，我想说，Claude肯定有很多东西要学，而且正在学习如何在这方面做得更好。

Alex: Okay, cool. What are, what are some of the use cases here? So their search is one in like preserving context, is there other things that people are using multi-agent for right now?

Alex: 好的，很酷。这里有哪些用例呢？搜索是一个，比如保留上下文，那人们目前还在用多智能体做其他什么事情吗？

Erik: Yeah, I think coding is, there's a lot of subagent use in coding. Anything that can be parallelized or MapReduced. If you have something where you need to produce a lot of output or there's maybe 10 parts of some output you're creating, if you can split that up among 10 sub-agents, that can be really, really effective for saving context and getting faster results. I think there's also a lot of interesting things to explore of multi-agent as a form of test time compute. Basically letting Claude, many Claudes work on a problem can be, you know, get you a better final answer than just one. Just like with people, you know, a bunch of people putting their heads together can get better results.

Erik: 是的，我认为编码领域有很多子智能体的应用。任何可以并行化或进行MapReduce的任务。如果你需要产生大量输出，或者你正在创建的输出有10个部分，如果你能将这些任务分配给10个子智能体，这在节省上下文和加快结果方面会非常非常有效。我认为还有很多有趣的事情可以探索，那就是将多智能体作为一种测试时计算（test time compute）的形式。基本上，让Claude，或者说许多Claude，共同解决一个问题，可以让你得到比单一Claude更好的最终答案。就像人类一样，一群人集思广益可以得到更好的结果。

Alex: In that case, are we specializing these agents in any way? Do we gear them towards like one type of persona or another, or is it just kind of let them take whatever form?

Alex: 在这种情况下，我们会对这些智能体进行某种专业化分工吗？我们会让它们倾向于某种角色，还是只是让它们采取任何形式？

Erik: I think you can do either. You know, sometimes it's helpful to give a bunch of people the same exact task and see what the different answers they come up with are. Sometimes it's good to have many people or many agents work from different approaches to the same problem or split it up. One thing I've seen a lot is customers that have a lot of tools, maybe 100 or 200 tools that they want an agent to use, they found that it's really good to split up those tools among sub-agents. So the main agent, all it has to know is hey, I want to use this bucket of tools and then there's a subagent that goes and does the actual work there. So that each subagent just has maybe 20 tools that it needs to understand and know how to use.

Erik: 我认为两者都可以。有时，让一群人执行完全相同的任务，看看他们得出什么不同的答案会很有帮助。有时，让许多人或许多智能体从不同的方法来解决同一个问题，或者将问题分解开来，也是很好的。我看到很多情况是，拥有大量工具的客户，可能有一两百个他们希望智能体使用的工具，他们发现将这些工具分配给子智能体非常有效。这样，主智能体只需要知道“嘿，我想使用这组工具”，然后会有一个子智能体去执行实际的工作。这样每个子智能体只需要理解和知道如何使用大约20个工具。

Alex: Have we tried like scaling agents like all the way up? Like what happens if you have like a thousand versions of Claude all working on one problem? Does it just turn into chaos?

Alex: 我们有没有尝试过将智能体扩展到极致？比如，如果有一千个版本的Claude都在解决一个问题，会发生什么？它会变成一片混乱吗？

Erik: I've not tried that yet.

Erik: 我还没试过。

Alex: Okay.

Alex: 好的。

Erik: But I'll get back to you.

Erik: 但我会给你回复的。

Alex: Good research idea right there. What are some of other like failure modes that we're seeing right now with agents or multi-agents?

Alex: 那是个不错的科研想法。目前我们在智能体或多智能体方面还看到哪些其他失败模式？

### 智能体失败模式与最佳实践

Erik: Yeah, I think just like any sort of complex system, I think it's easy to overbuild something and lose a lot of efficiency and just create sort of a lot of like dead weight. And so I've seen overbuilt multi-agent systems spend too much time just talking back and forth with each other and not actually making progress on the main task, and you know, human agents or human organizations suffer from the stew. As companies get bigger, you have more communication overhead and you know, less and less work is actually, you know, the people on the ground making progress on things. And so I think that's another interesting thing to study is like how can we make organizations of Claudes very effective while keeping the overhead small?

Erik: 是的，我认为就像任何复杂的系统一样，很容易过度构建某些东西，从而损失大量效率，并制造出很多“死重”。所以我看到过度构建的多智能体系统花费太多时间相互沟通，却未能实际推进主要任务。人类智能体或人类组织也面临同样的问题。随着公司规模扩大，沟通开销增加，实际在地面上推动工作进展的人越来越少。因此，我认为另一个有趣的研究课题是：我们如何才能让Claude的组织非常高效，同时保持较小的开销？

Alex: If I'm a developer and I want to get started with agents, whether I'm building on the Claude Code SDK or just trying to on my own, do you have any tips or best practices that you'd give them?

Alex: 如果我是一名开发者，想开始使用智能体，无论是基于Claude Code **SDK**构建还是自己尝试，你有什么建议或最佳实践可以分享吗？

Erik: Yeah, I think the best practices really remain start simple and make sure, you know, you only add complexities you need. I think another really important thing is think from the point of view of your agents. If you are giving Claude tools or prompts or sort of any affordances, put yourself in Claude's shoes and read what it actually gets, what it sees as the model and make sure there's actually enough information there for you to solve the problem. It's very easy to sort of forget, you know, that we're seeing everything and the model only sees what we showed.

Erik: 是的，我认为最佳实践仍然是：从简单开始，并确保只添加你真正需要的复杂性。我认为另一个非常重要的事情是站在你的智能体的角度思考。如果你正在给Claude工具、提示或任何功能，请设身处地为Claude着想，阅读它实际得到的东西，它作为模型所看到的东西，并确保其中有足够的信息来解决问题。我们很容易忘记，我们看到了一切，而模型只看到了我们展示给它的东西。

Alex: Right.

Alex: 没错。

Erik: And it's.

Erik: 而且它。

Alex: Yeah.

Alex: 是的。

Erik: Yeah, I feel like it's always important to go back into like the raw transcript of like your tool calls and your logs and everything and just view that.

Erik: 是的，我觉得总是回到原始的工具调用记录和日志中查看一切，这很重要。

Alex: Exactly, and I think another thing is that as people are building more things like **MCPs** (Model-Controlled Program: 模型控制程序，指由AI模型驱动或控制的程序或系统，它将AI模型作为核心组件来执行任务和决策) and trying to connect Claude to more things, I think a very natural first instinct that people have that's very wrong is that an MCP or tools should be one-to-one with your **API** and I think actually tools for the model or MCPs should be one-to-one with your UI, not your API. Because ultimately the model is a user of these things. It's not, it doesn't work like a traditional program. So if your API might have three separate endpoints for say loading a Slack conversation and turning a user ID into a username and turning a channel ID into a channel name. If those are the tools you give the model to understand Slack, for it to understand anything, it's gonna have to make three tool calls. Versus as a user, you know, we just see everything all nicely rendered.

Alex: 没错，我认为还有一点是，当人们构建更多像**MCP**这样的东西，并试图将Claude连接到更多事物时，我认为人们有一个非常自然但却非常错误的直觉，那就是MCP或工具应该与你的**API**一一对应。而我认为实际上，为模型或MCP设计的工具应该与你的用户界面（UI）一一对应，而不是你的API。因为最终模型是这些东西的使用者。它不像传统的程序那样工作。所以，如果你的API可能有三个独立的端点，比如用于加载Slack对话、将用户ID转换为用户名、以及将频道ID转换为频道名。如果你给模型这些工具来理解Slack，那么它要理解任何东西，就必须进行三次工具调用。而作为一个用户，你知道，我们看到的一切都经过了很好的渲染。

Erik: Oh, that's interesting.

Erik: 哦，这很有趣。

Alex: So you wanna create a tool or an MCP for the model that it presents everything all at once with as little interaction as possible. Just like for a user it'll be terrible if every time you had Slack you had to like click on a user ID to see what the name was, et cetera.

Alex: 所以你希望为模型创建一个工具或MCP，让它一次性呈现所有内容，并尽可能减少交互。就像对用户来说，如果每次使用Slack都必须点击用户ID才能看到名字等等，那体验会非常糟糕。

Erik: Right, right, I like that. So kind of working back from like the end state almost instead of like just trying to map the technical specs one to one.

Erik: 没错，没错，我喜欢这个想法。所以有点像从最终状态倒推，而不是试图将技术规范一一映射。

Alex: Exactly, and sort of surround whatever context you need with it.

Alex: 没错，并且用你需要的任何上下文来包围它。

### 智能体的未来：自我验证与计算机使用

Alex: What do you think the future of Agents has in store for us? Any predictions on these next six to 12 months?

Alex: 你认为智能体的未来会给我们带来什么？对未来六到十二个月有什么预测吗？

Erik: I think Agents are gonna become a lot more pervasive sort of starting in areas that are verifiable like software engineering. You know, coding agents have already changed how I work and how tons of people at Anthropic work and I think there's still a huge amount to be be gained there. I think one of the really exciting things is if agents can start getting better at verifying their own work with things like computer use of, they can write a web app, but can they go actually open it up and test it and then find their own bug instead of you needing to do that. I think that's one of the most exciting things. Is like closing that loop of testing so that I don't have to be Claude's QA engineer.

Erik: 我认为智能体将变得更加普及，尤其是在像软件工程这样可验证的领域。你知道，编码智能体已经改变了我的工作方式以及Anthropic许多人的工作方式，我认为这方面仍有巨大的潜力可挖掘。我认为最令人兴奋的事情之一是，如果智能体能够通过计算机使用等方式，更好地验证自己的工作——它们可以编写一个网络应用，但它们能否真正打开它并进行测试，然后自行发现错误，而不是由你来做这些。我认为这是最令人兴奋的事情之一。就像是闭合测试循环，这样我就不必成为Claude的质量保证（QA）工程师了。

Alex: Right, so kind of combining all these things from the software engineering abilities to the computer use abilities once we put all these pieces together.

Alex: 没错，所以一旦我们将软件工程能力和计算机使用能力等所有这些部分整合起来，就能实现这种结合。

Erik: Yep, and I think the computer use is also gonna really open up a lot of other avenues and domains where agents have been sort of locked out of so far.

Erik: 是的，我认为计算机使用也将真正开启许多其他途径和领域，而这些领域此前智能体一直未能涉足。

Alex: What would be an example of that?

Alex: 能举个例子吗？

Erik: I think that if you want to have Claude sort of do work for you in a Google Doc. Right now it's, you know, Claude can write for you but you're copy and pasting back and forth. But if you have computer use and you say, Hey Claude, can you clean up this Google doc? It can just do it right there for you. Scrolling around, clicking, editing the text and that's just such a nicer experience than needing to copy and paste back and forth. It's like wherever you are, Claude can be there with you if it has with computer use.

Erik: 我认为，如果你想让Claude在Google文档中为你做一些工作。现在的情况是，Claude可以为你写作，但你需要来回复制粘贴。但如果你有计算机使用功能，你可以说：“嘿，Claude，你能整理一下这个Google文档吗？”它就可以直接为你完成。滚动、点击、编辑文本，这比需要来回复制粘贴的体验要好得多。这就像无论你在哪里，如果Claude拥有计算机使用能力，它就能在你身边。

Alex: Well I'm very excited to have Claude write my Google Docs and respond to all of my comments for me.

Alex: 好的，我非常期待Claude能为我撰写Google文档并回复我的所有评论。

Erik: Exactly.

Erik: 没错。

Alex: That'd be a very nice future. Erik, this has been great. Thank you so much for the conversation.

Alex: 那会是一个非常美好的未来。Erik，这次对话非常棒。非常感谢你。

Erik: Absolutely, thank you.

Erik: 当然，谢谢你。