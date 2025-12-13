---
title: A Deep Dive into Claude Sonnet 4.5's Powerful New Memory Tool
summary: A discussion on Anthropic's Sonnet 4.5, focusing on its new memory tool which
  treats long-term memory as a client-side file directory, an evolution of concepts
  from MemGPT and coding agents.
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-agent
- ai-memory-tool
- claude-sonnet-4-5
- llm
people: []
companies_orgs: []
products_models: []
media_books: []
date: 2025-10-03
author: Lei
speaker: Letta
draft: true
guest: null
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=pidnIHdA1Y8
status: evergreen
---
### Introduction to Sonnet 4.5 and the Memory Tool

Hi everyone, this is Charles from Leta. Today I'm going to be talking about Anthropic's brand new model release, Sonnet 4.5.
大家好，我是 Leta 的 Charles。今天我将要讨论 Anthropic 最新发布的模型——**Sonnet 4.5**（Anthropic 公司推出的一款大型语言模型）。

And specifically, I'm going to be focusing on this new tool they added and a tool that they trained the model to be very good at called the memory tool. I think the memory tool is probably the most interesting aspect of this model release.
我将特别关注他们新增的一个工具，一个模型经过专门训练后非常擅长的工具，叫做**内存工具** (Memory Tool)。我认为内存工具可能是这次模型发布中最有趣的部分。

While this is a new flagship model release with various scores where Sonet 4.5 is presumably better than even Opus and its direct predecessor, I think the most interesting aspect of this release is not just these benchmark scores but this training around the memory tool.
当然，这是一个新的旗舰模型发布，在各种评分上，Sonnet 4.5 大概比 Opus 甚至其直接前身都更出色，但我认为这次发布最有趣的地方不仅仅是这些基准分数，而是围绕内存工具进行的训练。

Specifically, there is now this new memory tool. It's an official Anthropic tool that Sonnet 4.5 has been trained to use very well. You can see that this memory tool is basically treating the agent's long-term memory as a file directory.
具体来说，现在有了这个新的内存工具。这是一个官方的 Anthropic 工具，Sonnet 4.5 已经被训练得能够非常熟练地使用它。你可以看到，这个内存工具基本上是将智能体的长期记忆视为一个文件目录。

### Evolution of Memory in AI: From `agents.md` to a Memory Directory

I think this makes a lot of sense given the trend of how models have been trained to be better and better at coding over time. Functionally, what this means is that you can now enable this tool with Sonnet 4.5, and the model will try to use this "memories" directory as its long-term memory bank.
鉴于模型在编码能力上被训练得越来越好的趋势，我认为这是非常合理的。从功能上讲，这意味着你现在可以为 Sonnet 4.5 启用这个工具，模型会尝试使用这个 "memories" 目录作为其长期记忆库。

This is an extension of the `agents.md` idea or the `claude.md` file. If you're familiar with coding agents like Claude Code, Cursor, or Codex, for a while now there's been this concept of a markdown file that you put in your directory. A popular one now is called `agents.md`, which is supported by the majority of coding agents.
这是 `agents.md` 或 `claude.md` 文件概念的扩展。如果你熟悉像 Claude Code、Cursor 或 Codex 这样的编码智能体，那么你可能知道，一段时间以来，一直有这样一个概念：在你的项目目录中放置一个 Markdown 文件。现在一个流行的文件名是 `agents.md`，它被大多数编码智能体所支持。

You basically make this file in your repo and then you add things to it. These are like memories or, more accurately, instructions for an agent on how to use your code or repo. In this case, you're describing to the agent how to set up the entire repo. More importantly, people often use these memory files to communicate code style—things that a human engineer would know after being at the company for a long time, but an agent wouldn't know because it's not immediately evident from the code.
你基本上在你的代码仓库中创建这个文件，然后向其中添加内容。这些内容就像是记忆，或者更准确地说，是给智能体关于如何使用你的代码或仓库的指令。例如，你可以向智能体描述如何设置整个仓库。更重要的是，人们经常使用这些记忆文件来传达代码风格——这些是一个在公司工作了很长时间的人类工程师会了解，但智能体却无从知晓的事情，因为这些信息无法直接从代码中看出来。

You can write it down into these files, and coding agents will treat the `agents.md` file as memory.
你可以把这些信息写进文件里，编码智能体就会把 `agents.md` 文件当作记忆来使用。

### A Brief History: The Influence of MemGPT

Going back to the memory tool, it's an extension of this concept. It's still treating memory as files and files as memory. But now you have a brand new directory, this "memories" directory, where you're going to store all the files. This means you can have many more than just one memory file; you can have an infinite amount, as many files as you can store on your computer.
回到内存工具，它是这个概念的延伸。它仍然将记忆视为文件，将文件视为记忆。但现在你有了一个全新的目录，这个 "memories" 目录，你可以在其中存储所有文件。这意味着你不再局限于一个记忆文件，而是可以拥有无限多个，只要你的电脑能存得下。

I think this is very interesting because it's an open question how to actually implement long-term memory for LLM agents. The language models themselves don't have memory, and this idea of memory as files is very interesting and seems to be the direction everything is trending towards.
我认为这非常有趣，因为如何为大型语言模型智能体实现长期记忆仍然是一个悬而未决的问题。语言模型本身没有记忆，而将记忆视为文件的想法非常新颖，并且似乎是未来的发展方向。

The concept of memory as files, or as editable sections of context, is an idea many people have been working on for a very long time, ourselves at Leta included. I want to cover a brief history of how we got here, to the memory tool in Claude Sonnet 4.5.
将记忆视为文件或可编辑的上下文区域这一概念，是许多人（包括我们 Leta）长期以来一直在努力研究的方向。我想简要回顾一下我们是如何发展到今天 Claude Sonnet 4.5 中的内存工具的。

Some of you might be familiar with the **MemGPT** paper. This is a paper that myself and a few others who are now at Leta worked on during our grad school years. The key idea behind **MemGPT** (Memory-GPT: 一种允许大型语言模型管理自己记忆的技术，通过工具调用来编辑上下文) emerged when GPT-4 had just come out with short context windows (around 4k-8k), but tool calling (then called function calling) had just been introduced.
你们中有些人可能熟悉 **MemGPT** 这篇论文。这是我和其他几位现在在 Leta 的同事在研究生时期共同完成的。MemGPT 的核心思想诞生于 GPT-4 刚发布，上下文窗口还很短（约4k-8k），但工具调用（当时称为函数调用）功能刚刚推出的时候。

The key idea behind MemGPT is, if you have tool calling, why not just allow the LLM to edit a section of its own context window, which could be persisted into a file? You give the agent tools like `memory_insert`, `memory_delete`, and `memory_rewrite`. When you execute that tool, it's actually going to edit a section of the context window that is persisted to a file or a database.
MemGPT 的核心思想是，既然有了工具调用功能，为什么不直接让大语言模型能够编辑其自身上下文窗口的一部分，并将这部分内容持久化到一个文件中呢？你给智能体提供像 `memory_insert`、`memory_delete` 和 `memory_rewrite` 这样的工具。当你执行这些工具时，它实际上会编辑持久化到文件或数据库中的那部分上下文窗口。

Because you're giving the LLM tools to edit its own context window, you're making the LLM self-aware of its own limitations and capabilities. You're making the LM very aware that it needs to be the one to bring fresh, relevant context into the context window and flush out old context.
通过赋予大语言模型编辑自身上下文窗口的工具，你实际上是让它自我意识到自己的局限和能力。你让模型非常清楚，它需要自己负责将新的、相关的上下文引入窗口，并清除旧的上下文。

An interesting thing we did in the initial MemGPT design, which is now baked into some agent architectures in Leta, is that when the agent gets very close to the maximum context window length, we would send reminder messages to the agent, telling it, "Hey, you're almost out of space... consider jotting down some important notes."
我们在最初的 MemGPT 设计中做了一件有趣的事情，现在这个设计也被整合到了 Leta 的一些智能体架构中：当智能体接近上下文窗口的最大长度时，我们会向它发送提醒消息，告诉它：“嘿，你的空间快用完了……考虑记下一些重要的笔记。”

### Sonnet 4.5's "Context Anxiety"

I bring this up because Cognition, the company that makes the coding agent Devin, released a blog post about Claude Sonnet 4.5, saying it's the first model that is aware of its context window. They're saying that Sonnet 4.5 has "context anxiety." The model is aware as the context window gets larger that it's going to either forget or have context summarization happen.
我之所以提到这一点，是因为开发编码智能体 Devin 的 Cognition 公司发布了一篇关于 Claude Sonnet 4.5 的博客文章，称它是第一个能意识到自己上下文窗口的模型。他们说 Sonnet 4.5 存在“上下文焦虑”。当上下文窗口变大时，模型会意识到它将要遗忘或进行上下文总结。

So, how does that relate to MemGPT? In the MemGPT paper from late 2023, we used a system alert to warn the model. The big difference is that in Sonnet 4.5, you don't need to put this alert in; Sonnet 4.5 is self-aware. It has been trained to have this implicit understanding.
那么，这与 MemGPT 有何关系呢？在2023年底的 MemGPT 论文中，我们使用系统警报来提醒模型。最大的不同在于，在 Sonnet 4.5 中，你不需要再加入这种警报；Sonnet 4.5 是自我感知的。它经过训练，已经内化了这种理解。

This metaness of the model—being self-aware about its own context window and limitations—is getting pushed into the model itself. For better or worse, I think this is generally a good thing because it makes the model much better at using tools to manipulate its context window if it knows that its context window is finite.
这种模型的“元认知能力”——即自我感知其上下文窗口和局限性——正在被直接整合到模型本身中。不管好坏，我认为这总体上是件好事，因为如果模型知道其上下文窗口是有限的，它在使用工具来操作上下文窗口时会表现得更好。

### The Role of Coding Agents and File Editing

A lot of the genesis of this self-improving, file-editing memory agent can be traced back to ideas in MemGPT. The big trend that happened after that, which is very relevant to how we ended up with the memory tool format, is the rise of coding agents.
这种自我改进、能编辑文件的记忆智能体的许多起源都可以追溯到 MemGPT 中的思想。在此之后发生的一个重要趋势，并且与我们最终得到的内存工具格式密切相关，就是编码智能体的兴起。

Coding agents have become very, very good at editing files through progressive training. Models like Sonnet and Opus have become very good at using tools like bash to run commands and, more importantly, edit files. A coding agent needs to be able to make line edits and do big bulk replacements.
通过渐进式训练，编码智能体在编辑文件方面已经变得非常出色。像 Sonnet 和 Opus 这样的模型，已经非常擅长使用像 bash 这样的工具来运行命令，并且更重要的是，编辑文件。一个编码智能体需要能够进行行编辑和大规模的批量替换。

Through this pressure to make models good at coding, they have become very good at manipulating text files or code files. So, it makes sense that if you want to give these LLM agents long-term memory, why not piggyback off this progress and just treat memory as a file?
在提升模型编码能力的压力下，它们在操作文本文件或代码文件方面变得非常熟练。因此，如果你想赋予这些大语言模型智能体长期记忆，为什么不利用这一进展，直接将记忆视为文件呢？

With `agents.md`, we started by treating memory as a single file, which can be okay for a coding agent that only knows one world: the repo it's living in. But for broader applications, memory is much more complex than a single file. So, why not just make it a directory? That's exactly what the Anthropic team has done here.
通过 `agents.md`，我们开始将记忆视为单个文件，这对于一个只了解其所在代码仓库这一个世界的编码智能体来说或许足够了。但对于更广泛的应用，记忆远比单个文件复杂得多。那么，为什么不直接把它做成一个目录呢？这正是 Anthropic 团队在这里所做的。

### How the Client-Side Memory Tool Works

You basically are treating memory as a files directory and then you allow Claude to create, read, update, and delete files in this directory. The one last thing I want to cover is that the memory tool with Claude is client-side.
你基本上是将记忆视为一个文件目录，然后允许 Claude 在这个目录中创建、读取、更新和删除文件。最后我想提一点，Claude 的内存工具是客户端的。

This means that the files are not uploaded into Anthropic's servers unless you're using a sandbox. The model is operating on files that are stored locally. So it makes a lot of sense that their memory, implemented as files, is also a local directory sitting on your computer. They're not files stored on their side; they're stored wherever your code is stored.
这意味着除非你使用沙盒环境，否则文件不会被上传到 Anthropic 的服务器。模型是在本地存储的文件上进行操作。因此，他们将记忆实现为文件，并将其作为存放在你电脑上的本地目录，这是非常合理的。这些不是存储在他们服务器上的文件，而是存储在你代码所在的地方。

### Live Demonstration using Leta

Now I want to do a quick run-through to show you the potential of a memory tool like this and what it looks like for a model like Sonnet 4.5 to have been trained to be very good at self-editing its own memory. I'm going to do it in **Leta**, an open-source platform that allows you to build what we call stateful agents—agents that have long-term memory persisted to files.
现在我想快速演示一下这种内存工具的潜力，以及像 Sonnet 4.5 这样经过训练能非常出色地自我编辑记忆的模型是什么样的。我将在 **Leta**（一个用于构建我们称之为“有状态智能体”的开源平台）中进行演示，这些智能体拥有持久化到文件中的长期记忆。

In this example, the agent has memory blocks. One block is dedicated to the human, storing key details, and another is dedicated to itself, storing its persona. The important thing about Leta is that these memory blocks are not fixed; they are very similar to files. The only difference is that we generally recommend having a description for each block to explain its purpose.
在这个例子中，智能体有多个记忆块。一个块专用于记录关于人类用户的关键细节，另一个则用于存储它自己的角色设定。关于 Leta 最重要的一点是，这些记忆块不是固定的，它们与文件非常相似。唯一的区别是我们通常建议为每个块添加一个描述，以解释其用途。

The way you edit these memory blocks is through tools, very similar to Anthropic's approach. We have default tools like `insert` or `replace` that can do line edits on these memory blocks. It turns out, it's very easy to see how powerful Sonnet 4.5 is at using its special memory tool inside of Leta, because Leta already has all the scaffolding set up.
编辑这些记忆块的方式是通过工具，这与 Anthropic 的方法非常相似。我们有像 `insert` 或 `replace` 这样的默认工具，可以对这些记忆块进行行编辑。事实证明，在 Leta 内部可以非常容易地看到 Sonnet 4.5 使用其特殊内存工具的强大之处，因为 Leta 已经搭建好了所有的基础框架。

We've created a brand new memory tool just called "memory," which works very well with Claude Sonnet 4.5. It's an omni-tool; a single tool called `memory` that has many sub-commands inside of it, like `view`, `create`, `string_replace`, `insert`, and `delete`.
我们创建了一个全新的、名为 "memory" 的内存工具，它与 Claude Sonnet 4.5 配合得非常好。它是一个“全能工具”；一个名为 `memory` 的单一工具，内部包含了许多子命令，如 `view`、`create`、`string_replace`、`insert` 和 `delete`。

### Dynamic Memory Management in Action

Let's test this out. We can use a starter message to intentionally trigger a memory edit.
我们来测试一下。我们可以用一条起始消息来有意地触发一次记忆编辑。

Alright, Sonnet 4.5 decided to edit the human block. It's really treating this as a file, which is very closely aligned to the expected behavior. You can see that it used the `memory` tool, used the `string_replace` sub-command, and it replaced the old starter text with something brand new.
好的，Sonnet 4.5 决定编辑人类信息块。它确实把这当作一个文件来处理，这与预期的行为非常一致。你可以看到它使用了 `memory` 工具，调用了 `string_replace` 子命令，并将旧的起始文本替换为全新的内容。

Now, I'm going to ask it to create a to-do list in memory. The agent currently has the default human and persona memory blocks. It should create a brand new memory block called "to-do list" and then progressively edit that.
现在，我将要求它在内存中创建一个待办事项列表。目前，智能体拥有默认的人类和角色记忆块。它应该创建一个名为“待办事项列表”的全新记忆块，然后随着任务的进行逐步编辑它。

Okay, I didn't have to say it should create a new memory block; it just inferred it. It's off to the races here. It created the list and is now checking off items, updating the human block with what it learned about me, and adding reflections. In the meantime, while we were reading all this, it went through all the tasks and marked them as complete.
好的，我并没有明确说它应该创建一个新的记忆块，它自己就推断出来了。它现在已经开始执行了。它创建了列表，并正在逐项勾选，用它学到的关于我的信息更新人类记忆块，并添加反思。在我们阅读这些的时候，它已经完成了所有任务并将其标记为完成。

The agent can not only create and edit blocks, but it can also remove them. Let's tell it to clean things up and remove the to-do list. And you can see, boom, the to-do list block just disappeared. It called the `memory` omni-tool, set the sub-command to `delete`, and set the path to the "file," which in our case is backed by a memory block.
智能体不仅可以创建和编辑块，还可以移除它们。让我们告诉它清理一下，移除待办事项列表。然后你看，砰，待办事项列表块就消失了。它调用了 `memory` 全能工具，将子命令设置为 `delete`，并指定了那个“文件”的路径，在我们的例子中，它是由一个记忆块支持的。

### Self-Improving Agents: Learning to Use Tools

Another very natural way to use these dynamic memory blocks is to allow the agent to get better over time at using its tools. We can tell the agent: "I just gave you a brand new memory tool. I want you to learn how to use it through testing it and store your findings in a new memory called 'tool learnings'."
另一种非常自然地使用这些动态记忆块的方式是让智能体随着时间的推移越来越擅长使用它的工具。我们可以告诉智能体：“我刚给了你一个全新的内存工具。我希望你通过测试来学习如何使用它，并将你的发现存储在一个名为‘工具学习’的新记忆中。”

Okay, so the agent created a new memory block called "tool learnings," added a description, and is now running through a bunch of tests to learn how the tool works. It's documenting its key insights, like character limits and confirmation messages. You can imagine that if you had a very complex tool, you could have your agent dynamically create a memory block dedicated to learning how to use it. And one very cool thing in Leta is these memory blocks can be shared across agents, so you can transfer this knowledge over time.
好的，所以智能体创建了一个名为“工具学习”的新记忆块，添加了描述，现在正在运行一系列测试来学习该工具如何工作。它正在记录关键的见解，比如字符限制和确认信息。你可以想象，如果你有一个非常复杂的工具，你可以让你的智能体动态地创建一个专门用于学习如何使用该工具的记忆块。在 Leta 中一个非常酷的功能是，这些记忆块可以在不同的智能体之间共享，所以你可以随着时间的推移传递这些知识。

### Advanced Use Case: Multi-User Memory Sharding

Another obvious use case is for multi-user chats. You might start with a single "human" memory block, but if multiple people are chatting with the agent, it might make sense for the agent to shard out that single block into many different memory blocks for each person.
另一个显而易见的用例是多用户聊天。你可能从一个单一的“人类”记忆块开始，但如果有多个人与智能体聊天，那么让智能体将该单一块分片成多个针对每个人的不同记忆块可能更有意义。

After a bit of coaxing, the agent understands it's a multi-user chat. I'll prompt it to refactor its memory. Now it's creating individual memory blocks for each user: James, David, Brian, and Amaly. It then repurposed the original "human" block to be a high-level directory or note-to-self, stating that it should create individual blocks for each person it meets. After another prompt, it agreed the original block was redundant and deleted it.
经过一番引导，智能体明白了这是一个多用户聊天。我提示它重构其记忆。现在它为每个用户都创建了独立的记忆块：James、David、Brian 和 Amaly。然后，它将原始的“人类”记忆块重新用作一个高级目录或自我提醒，注明它应该为遇到的每个人创建独立的记忆块。在再次提示后，它同意原始块是多余的，并将其删除。

### Conclusion and Future Potential

Basically, this memory tool is extremely dynamic and extensible. It's an omni-tool that has all the different memory operations you could possibly want: creating, deleting, and editing blocks with line edits or whole string replacements.
总而言之，这个内存工具是极其动态和可扩展的。它是一个全能工具，包含了你可能想要的所有不同的记忆操作：创建、删除、编辑记忆块，无论是行编辑还是整个字符串替换。

Sonnet 4.5 is extremely good at this concept of editing memory through tools, something we've been working on since MemGPT. The models themselves are getting extremely good at this. Leta is a really cool playground to play around with this concept. While using the tool directly from Anthropic requires you to manage the file scaffolding yourself, Leta comes with memory blocks baked into the system that can be attached, detached, and shared among agents. The possibilities are pretty limitless.
Sonnet 4.5 在通过工具编辑记忆这个概念上表现得非常出色，这是我们自 MemGPT 以来就一直在研究的东西。现在模型本身也变得极其擅长于此。Leta 是一个非常酷的实验平台来探索这个概念。直接使用 Anthropic 的工具需要你亲自管理文件结构，而 Leta 则将记忆块内置于系统中，可以附加、分离并在智能体之间共享。可能性几乎是无限的。

I would definitely recommend giving Sonnet 4.5 a try, especially inside of Leta with the new memory omni-tool. Let us know what you think. We're really excited to see what you guys build.
我强烈推荐大家尝试一下 Sonnet 4.5，特别是在 Leta 中使用新的内存全能工具。请告诉我们你的想法，我们非常期待看到大家能创造出什么。