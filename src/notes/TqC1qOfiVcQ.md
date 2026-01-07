---
author: AI Engineer
date: '2026-01-05'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=TqC1qOfiVcQ
speaker: AI Engineer
tags:
  - agent-framework
  - prompt-engineering
  - bash-tool
  - code-generation
  - agent-design
title: Anthropic Claude Agent SDK：智能体设计、开发与部署实践
summary: 本次研讨会深入探讨了Anthropic的Claude Agent SDK，旨在帮助开发者理解如何构建高效、自主的AI智能体。主讲人Thariq Shihipar详细介绍了智能体从单一LLM功能到工作流再到自主代理的演进，并强调了Anthropic构建智能体的核心方法论：利用Bash工具、文件系统和代码生成进行非编码任务。研讨会还涵盖了智能体循环的设计（收集上下文、执行动作、验证工作）、安全防护（瑞士奶酪防御）、上下文管理、子智能体应用以及原型开发和部署策略，并通过Pokemon智能体演示了实际操作。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Anthropic
  - OpenAI
  - Cloudflare
  - Modal
  - E2B Daytona
  - Facebook
  - GitHub
  - Slack
  - McKenzie
products_models:
  - Claude Agent SDK
  - Claude Code
  - GPT-3
  - Claude.ai
  - React
  - jQuery
  - Backbone
  - JSX
  - Docker
  - Pokemon Red
  - PokeAPI
  - Smogon
  - Bun
  - Node
media_books: []
status: evergreen
---
### AI智能体演进与Claude Agent SDK

**Thariq Shihipar**: 好的，感谢大家加入。我还在西海岸时间，所以感觉我是在早上7点做这个。所以，是的，但很高兴能和大家谈谈**Claude Agent SDK**。所以，是的，我想这会是一个粗略的议程，但我们将讨论**Claude Agent SDK**是什么？为什么要使用它？有这么多其他的代理框架。什么是代理？什么是代理框架？如何使用**Agent SDK**或一般地设计一个代理？然后我将进行一些实时编码，或者说**Claude**将进行一些实时编码来原型化一个代理。我有一些启动代码。但，是的，我这次演讲的全部目标是，我们有两个小时，我们将进行超级协作，提问。这也不是一个超级预设的演示，因为我们将实时思考问题。我不会马上知道所有答案。我想这会是一个很好的方式来构建一个代理循环，我认为这非常像一种艺术或直觉。所以，是的，但在我们开始之前，只是好奇，举手示意，有多少人听说过**Claude Agent SDK**？好的，太棒了。有多少人使用过或尝试过？好的，太棒了。好的，所以举手的人还挺多的。是的，我将开始介绍代理的概述。我认为这可能是一些人以前见过的内容，但我认为AI功能如何演变仍然需要一些时间才能真正深入人心。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay. Yeah, thanks for joining me. I uh I'm still on the West Coast time, so it feels like I'm doing this at like 7:00 a.m. Uh so yeah, but um glad to talk to you about the Claude agent SDK. So um yeah, I think like this is going to be like a rough agenda, but we're going to talk about we're going to talk about like what is the claud agent SDK? Why use it? There's so many other agent frameworks. What is an agent? What is an agent framework? um how do you design an agent uh using the agent SDK or or just in general? Um and then I'm going to do some like live coding or Claude is going to do some live coding on prototyping an agent. Um and uh I've got some starter code. But uh yeah, I I the whole goal of this is like know we got two hours. We're going to be super collaborative, ask questions. Um, this is also going to be not like a super canned demo in the sense that like we're going to be like thinking through things live. You know, I'm not going to have all the answers right away. Um, and I think that'll be a good way of like building an agent loop I think is like really very much like kind of an art or intuition. So, um, but yeah, before we get started, just curious, a show of hands, like how many people have heard of the cloud agent SDK or Okay, great. Cool. How many have like used it or tried it out? Okay, awesome. Okay, so pretty good show of hands. Um, yeah, so I'll I'll just get started on like the like, you know, overview on agents. I I think that like this is I I I think something that people [clears throat] have seen before, but I think it still is taking some time to like really sink in. Uh how AI features are evolving, you know?
</details>

**Thariq Shihipar**: 所以我想，当**GPT-3**问世时，它主要关注单一的LLM功能，对吧？你可能会说：“哦，你能把这个响应归类到这些类别中的一个吗？”然后我们有了更多像工作流一样的东西，对吧？比如：“嘿，你能处理这封邮件并给它贴标签吗？”或者：“嘿，这是我的代码库，通过RAG进行索引。你能给我下一个完成项或下一个要编辑的文件吗？”这就是我们所说的工作流，它非常结构化。你可能会说：“嘿，给我这段代码，然后给我返回代码。”现在我们正在转向代理。而典型的代理就是**Claude Code**，对吧？**Claude Code**是一个工具，你不需要真正告诉它。我们不限制它能做什么，对吧？你只是通过文本与它交流，它会采取各种各样的行动。所以代理会构建自己的上下文，决定自己的轨迹，非常自主地工作。所以，是的，我认为随着未来的发展，代理会变得越来越自主。我们，是的，我认为我们正处在一个突破点，可以开始构建这些代理。它们并不完美，但现在绝对是开始的好时机。所以，是的，**Claude Code**，我相信很多人都尝试过或使用过。是的，我认为它是第一个真正的代理，对吧？就像我第一次看到一个AI工作10、20、30分钟一样。所以，是的，它是一个编码代理，而**Claude Agent SDK**实际上是建立在**Claude Code**之上的。我们这样做的原因是，基本上我们发现，当我们在**Anthropic**构建代理时，我们一直在重复构建相同的组件。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: So I think like when **GPT**, you know, **3** came out, it was really about like single LLM features, right? You're like, oh, like, hey, can you categorize this like return a response in one of these categories? Um, and then we've got more like workflow like things, right? Hey, like can you like take this email and label it or like, hey, here's my codebase like index via rag. Can you give me like the next completion or the next um the next file to edit, right? And so that's what we'd call like a workflow where you're very like structured. You're like, hey, like given this code, give me code back out, right? And now we're getting to agents, right? And uh like the canonical agent to use is **cloud code**, right? **Cloud code** is a tool where you don't really tell it. We don't restrict what it can do really, right? You're just talking to it in text and it will take a really wide variety of actions, right? And so agents uh build their own context, like decide their own trajectories, are working very very autonomously, right? And so, uh, yeah, and I think like as the future goes on, like agents will get more and more autonomous. Um, and we, uh, yeah, I think it's like we're kind of at a break point where we can start to build these agents. Um, they're not perfect, you know, but it's definitely like the right time to get started. So, um, yeah, **Cloud Code**, I'm sure many of you have have tried or used. Um it is yeah I think the first true agent right like the first uh time where I saw an AI working for like 10 20 30 minutes right so um yeah it's a coding agent and uh the **cloud agent SDK** is actually built on top of **cloud code** and uh the reason we did that is because um basically we found that when we were building agents at **anthropic** we kept rebuilding the same parts over and over again.
</details>

### Claude Agent SDK的设计哲学

**Thariq Shihipar**: 所以，为了让大家了解那是什么样子，当然，首先是模型。然后，在框架中，你有工具，对吧？那是第一个明显的步骤，比如“让我们给这个框架添加一些工具”。稍后，我们也会举例说明如何尝试从头开始构建自己的框架，以及它是什么样子，以及它可能有多大的挑战性。但工具不仅仅是你自己的自定义工具。它可能是与你的文件系统交互的工具，就像使用**Claude Code**一样。音量是不是突然变大了，还是他们没有拿得足够近？好的。现在，无论如何，我们有工具，工具在循环中运行，然后你有提示，对吧？比如核心代理提示，以及类似事物的提示。然后最后你有文件系统，对吧？或者说，不是最后，但你有文件系统。文件系统是一种上下文工程的方式，我们稍后会详细讨论，对吧？我想，我们在**Claude Code**中获得的一个关键见解是，更多地思考上下文，它不仅仅是一个提示，它还包括工具、文件和它可以使用的脚本。然后还有我们最近推出的技能，如果我们大家也对此感兴趣，我们可以更多地讨论技能。然后，是的，还有子代理、网络搜索，你知道，比如研究压缩、钩子、内存，框架周围还有所有这些其他的东西，最终会变得相当多。所以**Claude Agent SDK**就是所有这些东西的打包，供你使用。是的，你有你的应用程序。所以，我想，为了让大家了解，是的，为了让大家了解为什么**Claude Agent SDK**是，是的，很多人已经在**SDK**上构建代理了，很多软件代理，你知道，软件可靠性、安全性、分类、错误查找、网站和仪表板构建器。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: And so to to give you a sense of like what that looks like, of course, they're the models to start, right? Um, and then in the harness, you've got tools, right? And that's like sort of the first obvious step, like let's add some tools to this harness. And later on, we'll give an example of sort of like trying to build your own harness from scratch, too, and and what that looks like and and how challenging it can be. But tools are not just like your own custom tools. might be tools to interact with your file system like with **cloud code**. Um did the volume just go up or were they not holding it close enough? [laughter] Okay. Now anyways um got tools tools you run in a loop and then you have the prompts right like the core agent prompts the um the prompts for the things like that. Uh and then finally you have the file system right and or not finally but you have the file system. The file system is a way of context engineering that we'll talk more about later, right? And I think like I one of the key insights we had through **cloud code** was thinking a lot more through the like context not just a prompt, it's also the tools, the files and scripts that it can use. Um, and then there are skills which we've like rolled out recently and uh we can talk more about skills uh um if that's interesting to you guys as well. Um and then yeah things like uh sub aents uh web search, you know, like um like research compacting hooks memory there all these like other things around the harness as well um and uh it ends up being quite a lot. So the **cloud agent SDK** is all of these things packaged up for you to use right [clears throat] um and yeah you have your application. So I I think like uh to give you a sense of uh yeah to give you a sense of like maybe why the **cloud agent SDK** is um yeah like like so yeah people are already building agents on the **SDK** a lot of software agents uh you know software reliability security triaging bug finding um site and dashboard builders if
</details>

**Thariq Shihipar**: 这些都非常受欢迎。如果你正在使用它，你绝对应该使用**SDK**。我想，办公代理，如果你正在做任何形式的办公工作，那里有很多例子。我们有一些法律、金融、医疗保健方面的例子。所以，是的，有很多人正在其之上进行构建。我想，哦，是的。好的。那么，为什么选择**Claude Agent SDK**呢？对吧？我们为什么以这种方式做？我们为什么在**Claude Code**之上构建它？我们基本上意识到，一旦我们发布了**Claude Code**，是的，工程师们开始使用它，但随后金融人员开始使用它，数据科学人员开始使用它，营销人员也开始使用它。是的，我想它只是，我们意识到人们正在将**Claude Code**用于非编码任务，我们觉得，而且当我们构建非编码代理时，我们不断地回到它，对吧？所以，它就像，我们会更深入地探讨为什么它就是有效，为什么你可以将**Claude Code**用于非编码任务。剧透一下，它就像**Bash**工具。但是，是的，这是我们看到的一种新兴模式，我们想要使用它，我们已经在它之上构建了我们的代理，对吧？这些是我们从部署**Claude Code**中学到的经验教训，我们已经将其融入其中。所以，工具使用错误或压缩之类的东西，这些东西需要大量的规模才能发现，你知道，比如什么是最佳实践，我们已经将其融入了**Claude Agent SDK**。因此，我们对构建代理的最佳方式有很多强烈的看法。我想，**Claude Agent SDK**是相当有主见的。我将讨论其中一些看法以及我们为什么选择它们，对吧？但是，是的，其中一个重要的看法是，**Bash**工具是最强大的代理工具。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: These are extremely popular. If you're using it, you should absolutely use the **SDK**. Um, I guess office agents, if you're doing any sort of office work, tons of examples there. Um, got some like, you know, legal, finance, healthcare ones. Um, so yeah, there are tons of people building on top of it. Um, I want to Oh, yeah. Okay. So, why the **cloud agent SDK**, right? Like why did we do it this way? It's why did we build it on top of **cloud code**? And we realized basically that as soon as we put **cloud code** out, yeah, the engineers started using it, but then the finance people started using it and the data science people started using it and the marketing people started using it and yeah, I think it just like it we just realized that people were using **cloud code** for non-coding tasks and we felt and and as we were building, you know, non-coding agents, we kept coming back to it, right? And so, um, it's a like, and we'll go more into why that just works, why we you could use **cloud code** for non-coding task. Uh, spoiler alert, it's like the **bash** tool. Um, but yeah, it's uh it it was something that we saw as an emergent pattern that we want to use and we've built our agents on top of it, right? And uh these are lessons that we've learned from deploying **cloud code** that we've sort of baked in. So, uh, tool use errors or compacting or things like that, stuff that is like very can take a lot of scale to find, you know, like what are the best practices we've sort of baked into the **cloud agent SDK**. Um, as a result, we have a lot of strong opinions on the best way to build agents. Uh, like I think the **cloud agent SDK** is quite opinionated. I'll talk over some of these opinions and and why like uh why we chose them, right? Um but yeah, one of the big opinions of the **bash** tool is the most powerful agent tool.
</details>

### Anthropic的智能体构建方法

**Thariq Shihipar**: 那么，我所说的**Anthropic**构建代理的方式是什么呢？我并不是说你只能通过这种方式使用API​​来构建代理，对吧？但这就像，如果你正在使用我们**Agent SDK**上我们有主见的堆栈，那它是什么呢？对吧？所以大致上是**Unix**原语，比如**Bash**和文件系统，你知道，我们将讨论如何使用**Claude Code**原型化一个代理，我的目标是真正向你展示它在现实世界中是什么样子，对吧？比如为什么**Bash**有用，为什么文件系统有用，为什么不仅仅使用工具？是的，代理，我的意思是，你也可以创建工作流，我们稍后会讨论这一点，但代理会构建自己的上下文，思考非编码的代码生成，比如我们使用代码生成来生成文档、查询网络、进行数据分析、采取非结构化行动。所以，有很多这样的东西，对一些人来说可能相当反直觉，在原型设计环节，我们将讨论如何将代码生成用于非编码代理。是的，每个代理都有一个容器，或者在本地托管，因为这是**Claude Code**。它需要一个文件系统，它需要**Bash**，它需要能够在其上操作。所以这是一种非常非常不同的架构。我今天不打算过多谈论架构，但如果大家感兴趣，我们可以在最后讨论。或者抱歉，我说的架构是指托管架构，比如如何托管代理，以及那里的最佳实践是什么？我们会在最后讨论。是的，所以，让我暂停一下，因为我觉得我已经讲了很多了。到目前为止，关于**Agent SDK**代理有什么问题吗？是的，比如你能从中得到什么？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: So okay, um what what are like what I would describe as the **anthropic** way to build agents, right? And I'm not I'm not saying that you can only build agents using the API this way, right? But this is like um if you're using our opinionated stack on the **agent SDK**, what is it? Right? So roughly **Unix** primitives like the **bash** and file system and you know we're going to go over like prototyping an agent using **cloud code** and my goal is really to sort of show you what that looks like in real time right like why is **batch** useful why is the file system useful why not just use tools um yeah agents uh I mean you can also make workflows and we'll talk about that a bit later but agents build their own context um thinking about code generation for non-coding um like we use codegen to generate docs, query the web, like do data analysis, take uh unstructured action. So um there's a lot of like uh this can be pretty counterintuitive to some people and again in the like prototyping session, we'll we'll go over how to use code generation for non-coding agents. Um and yeah, every agent has a container or is hosted locally because this is **cloud code**. uh it needs a file system, it needs **bash**, it needs to be able to operate on it. And so it's a very very different architecture. I'm not planning to talk too much about the architecture today, but we can at the end if that's what people are interested in in or sorry by architecture I mean hosting architecture like how do you host an agent and like uh what are best practices there? Have you talked about that at the end? Um [clears throat] yeah so well let me pause there because I feel like I covered a lot already. any questions so far on the **agent SDK** agents um yeah like what you get from it
</details>

### 非编码智能体的代码生成

**听众1**: 你能解释一下非编码的代码生成具体是什么意思吗？

<details>
<summary>Original English</summary>

**Audience 1**: can you can you explain what code generation for non-coding means exactly
</details>

**Thariq Shihipar**: 是的，嗯，这就像，基本上当你要求**Claude Code**执行一项任务时，对吧？比如，假设你让它在旧金山查找天气，然后，你知道，告诉我应该穿什么之类的，对吧？它可能会做的是，它可能会开始编写一个脚本来获取天气API，对吧？然后开始，也许它希望它是可重用的。比如，你可能经常做这个，对吧？所以它可能会获取天气API，然后获取，也许甚至动态地获取你的位置，对吧？根据你的IP地址，然后它会，你知道，检查天气，然后也许会调用一个子代理给你推荐。也许你的衣橱或衣柜有一个API，对吧？这就像一个例子。我想，对于任何一个例子，我们都可以讨论如何使用代码生成。很多时候，它就像组合API，这是思考它的高层次方式。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: yeah um this is um like basically when you ask **cloud code** to do a task right like let's say that you ask it to uh find the weather in San Francisco and like you know tell me what I should wear or something right? Like uh what it might do is it might start writing a script uh to fetch a weather API, right? And then start like maybe it wants it to be reusable. Like maybe you want to do this pretty often, right? So it might fetch the weather API and then get the like maybe even get your location dynamically right based on your IP address and then it will like um you know check the weather and then maybe like call out to like a sub agent to give you recommendations. Maybe there's an API for your closet or wardrobe, right? It's like so that's an example. I I think that like it's kind of um for any single example we can talk over how you might use code codegen. Uh a lot of it is like composing APIs is like the high level way to think about it. Yeah.
</details>

**听众2**: 嗯，是的。

<details>
<summary>Original English</summary>

**Audience 2**: Uh yeah. And [clears throat]
</details>

### 工作流与智能体选择

**听众2**: 是的，工作流与代理，比如对于重复性任务，或者，你知道，一个总是相同的业务流程。你仍然会选择构建一个代理，而不是一个完全确定性的工作流吗？

<details>
<summary>Original English</summary>

**Audience 2**: yeah uh workflow versus agent uh like for repetitive task or you know like a process a business process that is always the same. Do you will still prefer to build an agent versus a fully deterministic workflow?
</details>

**Thariq Shihipar**: 是的。所以，我们确实有……

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So, we do have
</details>

**Thariq Shihipar**: 哦，当然。是的，是的。嗯，所以问题是关于工作流与代理，你是否仍然会为工作流使用**Claude Agent SDK**？是这样吗？嗯，是的。所以，我只是，我们只是告诉你我们在内部是如何做的，基本上，我们在内部做了很多基于**Claude Agent SDK**的**GitHub**自动化和**Slack**自动化。所以，你知道，我们有一个机器人，在问题进来时进行分类。这很像工作流，但我们仍然发现，为了分类问题，我们希望它能够克隆代码库，有时启动一个**Docker**容器并进行测试等等。所以，它最终仍然是一个非常，中间有很多步骤需要相当自由流动。然后你最后给出结构化的输出。所以，是的。好的，我们再提一个问题，然后继续。所以，是的，那位穿蓝色衣服的。是的。你能谈谈安全和防护措施吗？比如，如果你知道你正在使用**Claude Agent SDK**，并且你倾向于使用**Bash**作为，你知道，全能的通用工具，那么构建代理的开发者是否有责任确保你正在防止常见的攻击向量，还是模型本身正在做这些？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh, sure. Yeah. Yeah. Um, so the question the question was about workflows versus agents and would you still use the **cloud agent SDK** for workflows? Is that right? Um, yes. And and so uh I mean we I just we just sort of tell you what we do internally basically and what we do internally is we've done a lot of like **GitHub** automations and **Slack** automations built on the **cloud agent SDK**. So, uh, you know, we have a bot that triages issues when it comes in. That's a pretty workflow like thing, but we've still found that, you know, in order to triage issues, we want it to be able to clone the codebase and sometimes spin up a **Docker** container and test it and things like that. And so, it's still ends up being like a very like there's a lot of steps in the middle that need to be quite free flowing. Um, and then you like give structured output at the end. So, um, yes. All right, we'll take one more question and then we'll keep going. So, yeah, in the blue. Yeah. Uh so could you talk about security and guardians like if if you know you're using **cloud agent SDK** and you know you lean towards using **bash** as the you know all powerful generic tool and is the onus on uh building the agent builder to make sure that you know you're preventing against like common attack vectors or is that something that the model is is is doing itself?
</details>

### 智能体安全与防护

**Thariq Shihipar**: 是的。所以我想这有点像瑞士奶酪。哦，是的。好的。所以问题是关于**Bash**工具的权限，对吧？或者说，当你赋予代理对你的环境和计算机如此大的权力时，你如何考虑权限和防护措施，你如何确保它保持一致，对吧？所以我们思考这个问题的方式是，我们称之为“**瑞士奶酪防御**”，对吧？所以，就像在每一层都有一些防御措施，我们希望它们共同阻止一切，对吧？所以显然在模型层，我们做了很多对齐工作。我们最近发布了一篇关于奖励攻击的非常好的论文。强烈建议你查阅。所以，是的，我认为**Claude**模型，我们努力使它们非常非常对齐，对吧？所以，是的，有模型对齐行为，然后是框架本身，对吧？所以我们有很多权限管理和提示，而且，例如，我们对**Bash**工具进行了解析，所以我们相当可靠地知道**Bash**工具实际在做什么，这绝对不是你想自己构建的东西。然后最后，最后一层是沙盒，对吧？所以，假设有人恶意接管了你的代理，它实际能做什么？我们包含了一个沙盒，你可以在其中沙盒化网络请求，以及沙盒化文件系统操作，使其超出文件系统。所以，是的，最终这就是他们所说的“致命三要素”，对吧？就像，嗯，在环境中执行代码、更改文件系统、窃取代码的能力，对吧？我想我在这里对致命三要素的理解有点错误，但基本思想是，如果他们能窃取你的信息，对吧？嗯，那就像他们仍然需要能够提取信息。所以如果你沙盒化网络，那是一个很好的方法。如果你在沙盒容器上托管，比如**Cloudflare**、**Modal**或**E2B Daytona**，所有这些沙盒提供商也做了一些安全级别的工作，对吧？就像你不是在你的个人电脑上托管它，或者在有你的生产秘密的电脑上托管它。所以，是的，有很多不同的层次，是的，我们可以深入讨论托管。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So I I think this is sort of like the **Swiss chief**. Oh yeah. Okay. So the question was uh permissions on the **bash** tool, right? Or like how do you think about permissions and guardrails the like in like when you're giving the agent this much power over you know your its environment and the computer, how do you make sure it's aligned, right? And so the way we think about this is uh what we call like the **Swiss cheese defense**, right? So like there is um like on every layer some defenses and together we hope that it like blocks everything, right? So obviously on the model layer uh we do a lot of um alignment there. We actually just put out a really good paper on reward hacking. Super recommend you check that out. Um so like definitely I think **cloud** models like we try and make them very very aligned, right? And uh so yeah there's the model alignment behavior then there is like the harness itself, right? And so we have a lot of like permissioning and prompting um and uh like we do a pass par parser on the **bash** tool for example so we know um fairly reliably like what the **bash** tool is actually doing and definitely not something you want to build yourself. Um and then finally the last layer is sandboxing right so like let's say that an someone has maliciously taken over your agent what can it actually do uh we've included a sandbox and like where you can sandbox network request um and sandbox uh file system operations outside of the file system. And so, uh, yeah, ultimately that's what they call like the lethal triacto, right? Is like, um, like the ability to like execute code in an environment, change a file system, um, excfiltrate the code, right? I think I'm getting the lethal trifecta a little bit wrong there, but like the idea is basically like if they can excfiltrate your like information back out, right? Um, that's like they still need to be able to extract information. And so if you sandbox the network, that's a good way of doing it. Um if you're hosting on a sandbox container like **Cloudflare** uh **modal** or you know **E2B Daytona** like all of these like sound sandbox providers they've also done like some level level of security there right it's like you're not hosting it on your personal computer um or on a computer with like your prod secrets or something so uh yeah lots of different layers there and and yeah we can talk more about hosting in depth um so okay so I'm going to uh talk a little bit about **bash** is all you need you Um, I think this is something that Oh,
</details>

### Bash工具的强大功能

**Thariq Shihipar**: 是的。嗯，这就像我的口头禅，你知道吗？我只会一直谈论这个，直到每个人都同意我。嗯，或者说，我想这是我们在**Anthropic**发现的东西。我想这有点像我来到这里后发现的东西。嗯，**Bash**是让代码如此出色的原因，对吧？所以，我想你们可能都见过代码模式或程序化工具使用，对吧？比如，组合MLP的不同方式，**Cloudflare**发布了一些关于这个的博客文章，我们也发布了一些博客文章。我思考代码模式的方式，或者说**Bash**，就是它就像第一个代码模式，对吧？所以**Bash**工具允许你，你知道，将工具调用的结果存储到文件中，动态存储内存，生成脚本并调用它们，组合功能，比如`tail`、`grep`。它让你可以使用现有的软件，比如**ffmpeg**或**LibreOffice**，对吧？所以**Bash**工具可以做很多有趣而强大的事情。再想想，是什么让**Claude Code**如此出色。如果你正在设计一个代理框架，你可能会有一个搜索工具、一个`lint`工具和一个执行工具，对吧？你有很多工具，对吧？每次你想到一个新的用例，你都会想：“我现在需要另一个工具。”对吧？嗯，现在**Claude**只是使用`grep`，对吧？和你的包管理器`npm`。所以它运行`npm run test.ts`或`index.ts`或任何东西，对吧？它能进行`lint`，对吧？它能找出你如何进行`lint`，对吧？如果你没有`linter`，它可以运行`npm run lint`。它可能会说：“如果我为你安装`eslint`呢？”对吧？所以，嗯，这就像，你知道，我说过的，第一个程序化工具调用，第一个代码模式，对吧？你可以非常通用地执行许多不同的操作，对吧？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: yeah. Um, this is like my stickick, you know? I'm just going to like keep talking about this until everyone like uh agrees with me. Um, or like I think this is something that we found at**anthropic**. I think it is sort of something I discovered once I got here. Um, **bash** is what makes code so good, right? So, I think like you guys have probably seen like code mode or programmatic tool use, right? like the uh different ways of like composing MLPS uh **cloudfl** put out some blog post on that we put out some blog posts uh the way I think about code mode is like or **bash** is that it was like the first code mode right so the **bash** tool allows you to you know like store the results of your tool calls to files uh store memory dynamically generate scripts and call them compose functionality like `tail` `graph` uh it lets you use existing software like **fmp** or **libra office** right so there's a lot of like interesting things and powerful things that the **batch** tool can do. And like think about like again what made **cloud code** so good. If you were designing an agent harness, maybe what you would do is you'd have a search tool and a lint tool and an execute tool, right? And like you have end tools, right? Like every time you thought of like a new use case, you're like, I need to have another tool now, right? Um instead now **cloud** just uses `grap`, right? And nodes your package manager. So it runs like `npm run like test.ts` or `index.ts` s or whatever, right? Like it can lint, right? And it can find out how you lint, right? And can run `npm run lint` if if you don't have a llinter. It can be like what if I install `eslint` for you, right? So, um this is like you know like I said the first programmatic tool calling first code mode, right? Like you can do a lot of different actions very very generically, right?
</details>

**Thariq Shihipar**: 嗯，所以，在非编码代理的背景下，稍微谈谈这个，对吧？所以，假设我们有一个电子邮件代理，用户说：“好的，我这周在共享乘车上花了多少钱？”嗯，你知道，它有一个工具调用，或者通常它有搜索收件箱的能力，对吧？所以它可以运行一个查询，比如：“嘿，搜索Uber或Lyft。”对吧？如果没有**Bash**，它会搜索Uber或Lyft，它会得到大约一百封邮件之类的，现在它只需要思考一下。你明白我的意思吗？我想，一个很好的类比是，想象一下，如果有人拿着一叠文件来找你，然后说：“嘿，我这周在共享乘车上花了多少钱？你能帮我读一下我的邮件吗？”你知道，我的意思是，那会非常困难，对吧？你需要非常非常好的精确度和召回率才能做到。嗯，或者使用**Bash**，对吧？比如，假设有一个Gmail搜索脚本，对吧？它接受一个查询函数。嗯，然后你可以开始将该查询函数保存到文件或通过管道传递。你可以用`grep`查找价格。你知道，你可以将它们加在一起。你也可以检查你的工作，对吧？比如，你可以说：“好的，让我获取所有价格，将它们作为带行号的文件存储起来，然后我就可以在之后检查，比如，这真的是一个价格吗？每个价格与什么相关？”对吧？所以使用**Bash**工具，你可以做更多动态的信息来检查你的工作。所以这就像，嗯，只是一个简单的例子，但希望它能向你展示**Bash**的可组合性的强大之处，对吧？所以我会暂停一下，关于“**Bash**就是你所需要的一切”这个**Bash**工具，有什么问题吗？有什么我可以讲得更清楚的地方吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Um and so to talk about this a little bit in the context of non-coding agents, right? So let's say that we have an email agent and the user is like okay how much did I spend on ride sharing this week um a you know like it's got one tool call or generally it's got the ability to search your inbox right and so it can run a query like hey search Uber oryft right and without **bash** it it searches Uber oryft it gets like a hundred emails or something and now it's just got to think about it. You know what I mean? And I I think like a good like analogy is sort of like imagine if someone came to you with like like a stack of papers and like hey, how much did I spend on ride sharing this week? Can you like read through my emails? You know, I mean like that that would be really hard, right? Like uh you need very very good precision and recall to do it. Um or with **bash**, right? Like let's say there's a Gmail search script, right? It takes in a query function. Um, and then you can start to save that query function to a file or pipe it. You can `GP` for prices. You know, you can uh then add them together. You can check your work too, right? Like you can say, okay, let me grab all my prices, store those as like in a file with line numbers and then let me then be able to check afterwards like uh was this actually a price? Like what does each one correlate to? Right? So there's a lot more like dynamic information you can do to check your work with the **bash** tool. So this is like um just a simple example but like hopefully showing you sort of the power of like the composability of **bash** right so I'll pause there any questions on **bash** is all you need the **bash** tool any any thing I can make a little bit clearer
</details>

**听众3**: 你有关于有多少人使用yolo模式的统计数据吗？

<details>
<summary>Original English</summary>

**Audience 3**: do you have stats on how many people use yolo mode
</details>

**Thariq Shihipar**: 嗯，关于yolo模式的统计数据，我们可能确实有。我的意思是，在内部我们没有，但这只是因为我认为我们有更高的安全姿态。嗯，是的，我不确定。嗯，我大概能查到。关于**Bash**还有其他问题吗？好的，酷。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: uh stats on yolo mode we probably do um I mean internally we we don't uh but that's just I think we just have a higher security posture. Um, [clears throat] yeah, I'm not sure. Uh, I can probably pull that. Any other questions on **bash**? Okay, cool.
</details>

### Bash工具应用案例

**Thariq Shihipar**: 嗯，是的，再给你们一些例子，比如，假设你有一个电子邮件API，你想，你知道，遍历，比如告诉我这周谁给我发了邮件，对吧？所以你有两个API。你有一个收件箱API和一个联系人API。嗯，这是一种你可以通过**Bash**来做的方式。你也可以通过代码生成来做。这有点像足够多的**Bash**，它就是代码生成，对吧？**Bash**名义上是一个代码生成工具。嗯，然后，是的，比如，假设你想要，你有一个视频会议代理，对吧？你想说，比如，在这个财报电话会议中，找出所有发言人说“季度业绩”的时刻，对吧？你可以使用**ffmpeg**来分割这个视频，对吧？嗯，你可以使用**jq**来，嗯，之后开始分析信息。所以，嗯，是的，有很多像，嗯，使用**Bash**的强大方式。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Um, yeah, just to give you like some more examples like let's say that you had an email API and you wanted to uh, you know, like go through like fetch my like tell me who emailed me this week, right? So, you've got two APIs. You've got an inbox API and a contact API. Um this is like a way you can do it via **bash**. You can also do it via codegen. This is kind of like enough **bash** that it is codegen, right? Like um **bash** is a ostensibly codegen tool. Um and then yeah like let's say that you wanted to you had a video meeting agent, right? You wanted to say like find all the moments where the speaker says quarterly results in this earnings call, right? You can use **ffmpeg** to like slice up this video, right? um you can use **jq** to like uh start analyzing the information afterward. So um yeah, lots of like def like powerful ways to use uh to use **bash**.
</details>

### 工作流与智能体：深度剖析

**Thariq Shihipar**: 所以我将稍微谈谈工作流和代理。是的，你可以两者都做。你可以使用**Agent SDK**构建工作流和代理。嗯，是的，代理就像**Claude Code**。如果你正在构建一些你希望用自然语言与它交流并灵活采取行动的东西，对吧？那么这就是你构建代理的原因，对吧？比如，你希望有一个代理，它可以与你的业务数据交流，并且你希望获得洞察或仪表板，或者回答问题，或者编写代码之类的，那就是一个代理，对吧？然后工作流有点像，你知道，我们做了很多**GitHub** Actions，例如，对吧？所以你非常紧密地定义输入和输出，对吧？所以你会说：“好的，接受一个PR并给我一个代码审查。”嗯，是的，这两种情况你都可以使用**Agent SDK**。嗯，在构建工作流时，你可以使用结构化输出。我们刚刚发布了这个功能。嗯，是的，你可以搜索**Agent SDK**结构化输出。嗯，但是，是的，所以你可以两者都做。我现在主要会谈论代理。你可以从中学到的很多东西也适用于工作流。所以，嗯，是的，我们会谈论这个。嗯，等等，举手示意。有多少人以前设计过代理循环？好的，酷。好的，太棒了。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: So I'm going to talk a little bit about workflows and agents. Yeah, you can do both. You could use uh build workflows and agents on the **agent SDK**. Um yeah, agents are like **cloud code**. If if you are like building something where you want to talk to it in natural language and take action flexibly, right? Then that's why you're building an agent, right? Like you want you have an agent that talks to your like business data and you want to get insights or dashboards or answer questions or uh write code or something like that's an agent, right? And then a workflow is kind of like, you know, we do a lot of **GitHub** actions for example, right? So you define the inputs and outputs very closely, right? So you're like, "Okay, take it a PR and give me a code review." Um, and yeah, both of these you can use **agent SDK** for. Um, when building workflows, you can use structured outputs. We just released this. Um, you can, yeah, Google **agent SDK structured outputs**. Um, but yeah, so you can do both. I'm going to primarily be talking about agents right now. A lot of the things that you can like learn from this are applicable to workflows as well. So, um, yeah, we'll we'll talk about this. Uh, wait, show of hands. How many people have like designed an agent loop before? Okay, cool. Okay, great. Great.
</details>

### 智能体循环设计

**Thariq Shihipar**: 嗯，所以，是的，我的意思是，我认为设计代理循环的第一件事，也是元学习，就是一遍又一遍地阅读脚本。每次你看到代理运行时，就阅读它，然后弄清楚，嘿，它在做什么？它为什么这样做？我能以某种方式帮助它吗？对吧？嗯，是的，我们稍后会做一些这样的事情，对吧？所以我们会，我们会构建一个代理循环。嗯，但这里是代理循环的三个部分，对吧？所以，首先是收集上下文，对吧？其次是采取行动，第三是验证工作，对吧？嗯，这并不是构建代理的唯一方法，但我认为这是一个很好的思考方式。嗯，收集上下文，嗯，就像，你知道，对于**Claude Code**来说，它就是`grep`并找到所需的文件，对吧？嗯，你知道，对于电子邮件代理来说，它就是找到相关的电子邮件，对吧？嗯，所以这些都是，嗯，是的，我想思考它如何找到这个上下文非常重要，我认为很多人都，嗯，跳过了这一步，或者说考虑不足。这可能非常非常重要。嗯，然后采取行动，嗯，它如何完成它的工作？嗯，它是否有正确的工具来完成它，比如代码生成，嗯，**Bash**，这些都是更灵活的采取行动的方式，对吧？然后验证是另一个非常重要的步骤。所以，基本上我现在想说的是，如果你正在考虑构建一个代理，想想你是否能验证它的工作，对吧？如果你能验证它的工作，那它就是一个很好的代理候选者。如果你不能验证它的工作，比如，你知道，编码，你可以通过`lint`来验证，对吧？你至少可以确保它能编译。所以这很棒。嗯，如果你正在做，比如说深度研究，验证你的工作实际上要困难得多。一种方法是通过引用来源来做，对吧？所以这是验证的一个步骤，但显然研究在某些方面不如代码可验证，对吧？因为代码有一个编译步骤，对吧？你也可以执行它，然后看看它做了什么，对吧？所以，嗯，我想，思考，你知道，随着我们构建代理，那些最接近通用性的代理是那些具有非常强大的验证步骤的代理，对吧？所以，我想这里有一个问题。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Um, so yeah, I mean, I think the number one thing the the metalarning for designing an agent loop to me is just to read the transcripts over and over again. Like every time you see see the agent running, just read it and figure out like, hey, what is it doing? Why is it doing this? can I uh help it out somehow? Right? Um and uh we'll do some of that later, right? So we'll uh we'll build an agent loop. Um but here is the uh the three parts to an agent loop, right? So uh first it's gather context, right? Second is taking action and the third is verifying the work, right? And uh this is like not the only way to build an agent, but I think a pretty good way to think about it. Um gathering context is uh like you know for **cloud code** it's grepping and finding the files needed, right? Um you know for an email agent it's like finding the relevant emails, right? Um, and so these are all like pretty um, yeah, like I I think thinking about how it finds this context is very important and I think a lot of people sort of uh, skip the step or like underthink it. This can be like very very important. Uh, and then taking action um, how does it like do its work? Uh, does it have the right tools to do it like code generation, uh, **bash** these are more flexible ways of taking action, right? And then verification is another really important step. And so the basically what I'd say right now is like if you're thinking of building an agent, think about like can you verify its work, right? And if you can verify its work, it's like a great like candidate for an agent. If you can't verify its work, like it's like you know coding you can verify by lending, right? And you can at least make sure it compiles. So that's great. uh if you're doing let's say deep research for example it's actually a lot harder to verify your work one way you can do it is by citing sources right so that's like a step in verification but obviously research is less verifiable than code in some ways right because like code has a compile step right you can also like execute it then see what it does right so um I think like thinking on you know like as we build agents the ones that are closest to being very general are the ones with the verification step that is very strong right So I I think there was a question here. Yeah.
</details>

**听众4**: 那么，你何时生成工作计划？

<details>
<summary>Original English</summary>

**Audience 4**: So when where do you generate a plan of the work?
</details>

**Thariq Shihipar**: 是的，我的意思是，你可能……

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. I mean you you might
</details>

**听众4**: 问题。

<details>
<summary>Original English</summary>

**Audience 4**: question
</details>

### 智能体规划与待办事项

**Thariq Shihipar**: 哦，是的，抱歉，问题是何时生成计划，嗯，在你执行之前。所以，嗯，就像在**Claude Code**中，你并不总是生成计划。嗯，但如果你想，你会在收集上下文和采取行动之间插入它，对吧？所以，嗯，计划有助于代理逐步思考，但它们会增加一些延迟，对吧？所以这里有一些权衡。嗯，但是，是的，**Agent SDK**也帮助你进行一些规划。所以，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh yeah sorry the the question was when do you generate a plan um before you run through it. So um like in **cloud code** you don't always generate a plan. Uh but if you want to you'd insert it between the gathering context and taking action step, right? And so um plans sort of help the agent think through step by step, but they add some latency, right? And so there is like some trade-off there. Um but yeah, the **agent SDK** helps you like do some planning as well. So yeah.
</details>

**听众5**: 是的。你能让代理创建那个待办事项列表，并百分之百确定它会创建那个待办事项列表并按计划运行吗？

<details>
<summary>Original English</summary>

**Audience 5**: Yeah. Can you like make the agent create that to-do list for like 100% sure that it will create that to-do list and run by it?
</details>

**Thariq Shihipar**: 嗯，是的。所以问题是代理会创建待办事项列表吗？嗯，是的。嗯，如果你正在使用**Agent SDK**，我们有一些随附的待办事项工具，所以它会维护和勾选待办事项，你可以在进行中显示出来。所以，是的。嗯，现在关于这个还有其他问题吗？好的，酷。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Uh yeah. So the question was will the agent create the to-do list? Uh yes. Um if you're using the **agent SDK**, we have like some to-do tools that come with it and so it will like maintain and check off to-dos and you can display that as you go. So yep. Um, any other questions about this right now? Okay, cool.
</details>

### 工具、Bash与代码生成对比

**Thariq Shihipar**: 好的，所以我要快速谈谈这些东西是如何做的。你如何做这些事情？你有哪些工具来做这些？对吧？嗯，你可以做三件事：你有工具、**Bash**和代码生成，对吧？我想传统上，很多人只考虑工具，嗯，是的，基本上，其中一个行动号召就是更广泛地思考它，对吧？所以工具是极其结构化且非常非常可靠的，对吧？比如，如果你想以最快的速度输出，并且错误最少，重试最少，那么工具很棒。缺点是它们上下文使用量大。如果有人用50或100个工具构建了一个代理，对吧？它们会占用大量的上下文，模型会有点困惑，对吧？嗯，工具没有可发现性。嗯，它们不可组合，对吧？我说的工具是指如果你现在正在使用消息或完成API，嗯，工具就是这样工作的，当然，你知道，有代码模式和程序化工具调用，所以你可以混合一些这些，嗯，但是，有**Bash**。所以**Bash**非常可组合，对吧？比如，静态脚本、低上下文使用，嗯，它可能需要更多的发现时间，因为，比如，假设你有什么，你有一个Playwright MCP之类的，嗯，或者抱歉，Playwright CLI，Playwright的**Bash**工具，嗯，你可以通过`playwright-help`来找出所有可以做的事情，但代理每次都需要这样做，对吧？所以它需要发现自己能做什么，嗯，这有点强大，因为它有助于减少高上下文使用，但会增加一些延迟，嗯，调用率可能会稍微低一些，你知道，只是因为，它需要更多的时间来，嗯，它需要找到工具和它能做什么。嗯，但这肯定会随着时间的推移而改善。然后最后，代码生成，高度可组合的动态脚本。嗯，它们执行时间最长，对吧？所以它们可能需要链接、编译。API设计在这里成为一个非常非常有趣的步骤，对吧？我将更多地讨论如何思考代理中的API设计。嗯，但是，是的，我想这就是我们，我们拥有的三个工具。所以，是的，使用工具，你仍然需要一些工具，但你需要将它们视为原子操作，你的代理通常需要按顺序执行，并且你需要对其进行大量控制，对吧？所以，例如，在**Claude Code**中，我们不使用**Bash**来写入文件，我们有一个写入文件工具，对吧？因为我们希望用户能够看到输出并批准它，而且，嗯，我们并没有真正将写入文件与其他东西组合起来，对吧？它是一个非常原子化的操作。嗯，发送电子邮件是另一个例子。任何形式的非破坏性，或者说，你知道，不可逆转的更改，绝对是工具的好地方。嗯，然后我们有**Bash**。嗯，所以，例如，有一些可组合的操作，比如使用**GitHub**搜索文件夹，`lint`代码并检查错误或内存。嗯，所以，是的，你可以将文件写入内存，这可以作为你的**Bash**，比如**Bash**可以作为你的内存系统，对吧？所以，嗯，然后最后，你有了代码生成，对吧？所以如果你想做这种高度动态、非常灵活的逻辑，组合API，嗯，比如你正在进行数据分析或深度研究，或者重用模式，所以，嗯，是的，我们稍后会更多地讨论代码生成。嗯，到目前为止，关于**SDK**循环或工具与**Bash**与代码生成，有什么问题吗？是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay, so I'm going to quickly talk about like like how do you do this stuff? You like what are your tools for doing it, right? And uh there are three things you can do that you have tools, **bash** and code generation, right? And I I think traditionally I think a lot of people are only thinking about tools and uh yeah, basically one of the call to actions is just figuring out like thinking about it more broadly, right? So tools are extremely structured and very very reliable, right? Like if you want to sort of have as fast an output as possible with minimal errors, uh minimal retries, uh tools are great. Uh cons, they're high context usage. If anyone's built an agent with like 50 or 100 tools, right? Like they take up a lot of context and the model it kind of gets a little bit confused, right? Um there's no like sort of discoverability of the tools. Um and they're not composable, right? and and I say tools in the sense of like if you're using you know messages or completion API right now um that's how the tools work of course like you know there's like code mode and programmatic tool calling so you can sort of blend some of these um but [clears throat] there's **bash** so **bash** is very composable right like uh static scripts low context usage uh it can take a little bit more discovery time because like let's say that you have whatever you have like the playright MCP or something like that um or sorry the playright CLI the playright like **bash** tool um you can do `playright-help` to figure out all the things you can do but the agent needs to do that every time right so it needs to like discover what it can do um which is kind of powerful that it helps take away some of the high context usage but add some latency um there might be slightly lower call rates you know just because like it has a little bit more time to um it needs to like find the tools and what it can do. Um but this will definitely like improve as it goes. And then finally, codegen highly composable dynamic scripts. Um they take the longest to execute, right? So they need linking possibly compilation. API design becomes like a very very interesting step here, right? And I and I'll talk more about like uh best like how to think about API design in an agent. Um but yeah I think this is like how we like the the three tools you have and so yeah using tools think you still want some tools but you want to think about them as atomic actions your agent usually needs to execute in sequence and you need a lot of control over right so for example in **cloud code** we don't use **bash** to write a file we have a write file tool right because we want the user to be able to sort of see the output and approve it and um we're not really composing write file with other things, right? It's like very atomic action. Um, sending an email is another example. Like any sort of like non-destruct like destructible or sort of like you know uh unreversible change is definitely like a a tool is a good place for that. Um then [clears throat] we've got **bash**. Uh so for example there are like uh composable actions like searching a folder using **GitHub** linting code and checking for errors or memory. Um and so yeah you can write files to memory and that can be your **bash** like **bash** can be your memory system for example right so um and then finally you've got code generation right so if you're trying to do this like highly dynamic very flexible logic composing APIs uh like you're doing data analysis or deep research or like reusing patterns and so um yeah we'll talk more about uh code generation in a bit um any questions so far about like the **SDK** loop loop or tools versus **bash** versus codegen. Yeah.
</details>

**听众6**: 是的。嗯，我本来想问你，你会有任何现成的工具来卸载结果吗？

<details>
<summary>Original English</summary>

**Audience 6**: Yeah. Uh I was going to ask [clears throat] you are you going to have any readymade tools for like offloading results [snorts]
</details>

**Thariq Shihipar**: 卸载工具调用的结果，比如到文件系统吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: offloading tool called results like into the file system or
</details>

**听众6**: 比如，假设它进入**Bash**，然后上下文就爆炸了。

<details>
<summary>Original English</summary>

**Audience 6**: like let's say goes to **bash** and then context explodes.
</details>

**Thariq Shihipar**: 它会像，输入一个命令，然后把所有东西都做完吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Does it like [clears throat] typed a command that like do everything up?
</details>

**听众6**: 好的。

<details>
<summary>Original English</summary>

**Audience 6**: Okay.
</details>

**听众6**: 或者，否则，只是长输出污染了你的历史记录。

<details>
<summary>Original English</summary>

**Audience 6**: Or or otherwise just like long outputs polluting your history.
</details>

### 结果卸载与上下文管理

**Thariq Shihipar**: 当然。是的，是的，是的。我想，一直把它们上传到文件。是的，是的，我认为这是一个很好的常见做法。我想，嗯，我记得最近在**Claude Code**上看到一些关于处理非常长输出的PR，我不知道具体情况。我想我们正在朝着一个方向发展，越来越多的东西被存储在文件系统中，这是一个很好的例子。是的，比如它随着时间的推移存储长输出。嗯，我想，通常提示代理这样做是一个很好的思考方式。或者即使你有一个，我想我现在总是这样做，就是每当我有一个工具调用时，我都会将工具调用的结果保存到文件系统中，这样你就可以搜索它，然后让工具调用返回结果的路径。嗯，只是因为这有助于它重新检查它的工作。所以，嗯，是的。嗯，你是否发现你需要使用技能结构来帮助**Claude**更好地使用**Bash**，还是开箱即用就不需要了？你知道，那不是必需的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Sure. Yeah. Yeah. Yeah. I imagine like all the time just uploading them to files. Yeah. Yeah. I I think that's a good common practice. I think um we I I remember seeing some PRs about this very recently on on **cloud code** about handling very long outputs and I I I don't know exactly like I I think I think we are moving towards a place where more and more things are being like just stored in the file system and this is like a good example. Yeah, like it's storing like long outputs uh over time. Um, I think like generally prompting the agent to do this is a good uh way to think about it. Or even if you have I think like something I just do always now is like whenever I have a tool call I um I save it like the results of the tool call to the file system so that you can like search across it and then have the tool call return the path of the result. Um just because like that helps it like sort of recheck its work. So um yes. Um, do you find that you need to [clears throat] use like the skills um kind of structure to help **claude** along to use the **bash** better or out of the box? You know, that's not necessary.
</details>

### 技能与Bash的结合

**Thariq Shihipar**: 是的。所以问题是关于技能，以及我们是否需要技能才能更好地使用**Bash**。嗯，是的，对于上下文技能，也许我可以，好的，技能。好的，是的，技能基本上是一种方式，你知道，允许我们的代理执行更长时间、更复杂的任务，并通过上下文加载东西，对吧？所以，例如，我们有很多**DOCX**技能，这些**DOCX**技能告诉它如何进行代码生成来生成这些文件，对吧？所以，嗯，是的，我认为总的来说，技能，是的，基本上只是一系列文件。它们也像是一个非常文件系统或**Bash**工具驱动的例子，对吧？嗯，因为它们真的只是你的代理可以`cd`进去并读取的文件夹，对吧？嗯，所以，是的，它们提供了我们发现技能真正擅长的东西，那就是非常可重复的指令，其中需要大量的专业知识。嗯，比如，我们最近发布了一个前端设计技能，我非常非常喜欢，嗯，它真的只是一个非常详细且很好的关于如何进行前端设计的提示。嗯，但它来自我们最好的，你知道，比如AI前端工程师，你明白我的意思吗？他真的投入了大量的思考和迭代。所以这是使用技能的一种方式。嗯，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So, the question was about skills and like do we need skills to use **bash** better? Um, yeah, for context skills maybe I can Okay, skills. Okay. Yeah, skills are basically a way of like uh you know allowing our agent to take longer complex tasks and like sort of load in things via context, right? So some like for example we have uh a bunch of **DOCX** skills and these **DOCX** skills tell it how to do code generation to generate these files, right? And so um yeah, I think overall skills are yeah, basically just a collection of files. They're also sort of like an example of being very like file system or **bash** tool pilled, right? Um because they're really just folders that your agent can like `CD` into and like read, right? Um and so yeah, they give like what we found the skills are really good for is pretty like repeatable instructions that need a lot of expertise in them. Uh like for example, we released a front-end design skill recently that I really really like and um it's really just sort of a very detailed and good prompt on how to do front-end design. Uh but it comes from like our best, you know, like uh AI front-end engineer, you know what I mean? And he like really put a lot of top thought and iteration to it. So that's one way of using skills. Um
</details>

**听众7**: 是的，快速提问。为什么要使用那个前端技能？

<details>
<summary>Original English</summary>

**Audience 7**: yeah, quick question. Why use that front skill?
</details>

**Thariq Shihipar**: 当然。它非常好。感谢发布。嗯，我想了解，嗯，有多个**MD**文件，比如**MD**也存在，它也在用户级别，然后有技能文件，比如，有没有优先级顺序？有些东西应该归入**Claude.md**，而有些其他东西应该只归入**skill.md**？所以问题是关于**skill.md**与**Claude.md**以及如何思考，嗯，对吧？嗯，我想说，所有这些概念都非常新，你知道，我的意思是，即使**Claude Code**也是八九个月前发布的，对吧？嗯，技能是两周前发布的，我不会假装知道所有事情的最佳实践，对吧？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Sure. It's pretty good. Thanks for publishing it. Uh I want to understand uh there are multiple **MP** files like **MP** is also there and it is also at the user level and then there are skill files like is there like a priority order should some stuff be relegated to **claw.md** and some other stuff should only come to **skill.md**? H so the question was about **skill.md** versus **claw.md** and how to think about uh that right and uh I think like I I will say all of these concepts are so new you know I mean like even **cloud code** is like released it like eight or nine months ago right like um and so skills were released like two weeks ago like I like I won't pretend to know all of the best practices for for everything right um I think generally
</details>

### 技能文件与模型演进

**Thariq Shihipar**: 我想通常，技能是一种渐进式上下文披露的形式，这是一种我们已经讨论过很多次的模式，对吧？比如使用**Bash**，你知道，比如优先于纯粹的普通工具调用，它是一种让代理说“好的，我需要做这个，让我找出怎么做，然后让我读取这个技能”的方式，对吧？所以你让它创建一个**DOCX**文件，然后它会`cd`到目录中，读取如何做，编写一些脚本，然后继续。所以，嗯，是的，我想仍然需要一些直觉来构建，关于你到底如何定义技能以及如何将其拆分。嗯，但是，是的，我想，是的，仍然有很多最佳实践需要学习。嗯，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: skills are a form of progressive context disclosure closure and that's sort of a pattern that we've talked about a bunch right like with like uh **bash** and you know like preferring that over like you know purely like normal tool calls is like it's a way of like the agent being like okay I need to do this let me find out how to do this and then let me read in this skill empty right so you ask it to make a **docx** file and then it like cds into the directory reads how to do it writes some scripts and keeps going so um yeah I think like there's still some intuition to build around like what what exactly you like define as a skill and how you split it out. Um but uh yeah, I think uh yeah, lots of best practices to learn there still. Um
</details>

**听众8**: 是的，所以昨天我们谈到了技能的未来。你认为这些最终会成为模型的一部分吗？而一些技能这只是目前弥合差距的一种方式吗？

<details>
<summary>Original English</summary>

**Audience 8**: yeah, so yesterday we [clears throat] talked about the future of skills over time. Do you see these as ultimately becoming part of the model and some of the skills this is just a way to bridge the gap for now?
</details>

**Thariq Shihipar**: 是的，是的。所以问题是技能最终会成为模型的一部分吗？它们是弥合差距的一种方式吗？我错过了Barry和M昨天的演讲，但是，是的，我想大致的想法是模型会越来越擅长执行各种任务，而技能是让它执行超出分布任务的最佳方式，对吧？嗯，但是，我大致会说，尤其是在你不在实验室的情况下，真的很难确切地知道模型会走向何方。嗯，我的一般经验法则是，我尝试每六个月重新思考或重写我的代理代码。嗯，只是因为我觉得，事情可能已经发生了足够大的变化，我可能已经做了一些假设。所以，我想，我们的**Agent SDK**旨在尽可能地随着能力的发展而进步，对吧？比如**Bash**工具会越来越好。嗯，我们正在**Claude Code**之上构建它。所以随着**Claude Code**的演进，你会立即获得这些优势。嗯，但与此同时，你知道，现在的情况与一年前在AI工程方面是如此不同，对吧？我认为对我来说，一个普遍的最佳实践是，嘿，我们可以快10倍地编写代码。我们也应该快10倍地抛弃代码。嗯，我想，思考如何不，比如，不要把赌注押在未来会怎样，而是我们今天能做什么真正有效，对吧？比如，让我们今天就获得市场份额，不要害怕以后抛弃代码。嗯，如果你是初创公司，这可以说是你相对于竞争对手的最大优势。他们，你知道，大型公司有六个月的孵化周期。所以他们总是停留在过去，停留在代理能力的过去，对吧？所以你的优势在于你可以说，嘿，代理能力现在就在这里。让我现在就构建一些使用它的东西，对吧？所以，嗯，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Yeah. So the question was are skills ultimately part of the model? Um are they a way to bridge the gap? I missed Barry's talk at Barry and M's talk yesterday, but uh yeah, I think roughly the idea is that the model will get better and better at doing a wide variety of tasks and skills are the best way to give it out of distribution tasks, right? Um, [clears throat] but I I would broadly say that like it's really really hard especially like you know if you're like uh not at a lab to like tell where the models are going exactly. Um my general rule of thumb is like I try and like rethink or rewrite my like agent code like every 6 months. Uh just cuz I'm like uh things have probably changed enough that I've like baked in some assumptions here. And so like I think that like our **agent SDK** is built to as much as possible sort of advance with capabilities, right? Like the **bash** tool will get better and better. Uh we're building it on top of **cloud code**. So as **cloud code** evolves, you'll get those wins out out of the gate. Um but at the same time like you know things are so different now like than they were a year ago in in terms of like AI engineering, right? And I think like a general best practice to me is sort of like, hey, we can write code 10 times faster. We should throw out code 10 times faster as well. Um, and I think thinking about like not so like hedging your bets on like where is the future right now, but like what can we do today that really works, right? And like like let's get market share today and not be afraid to throw out code later. Um, if you're a startup, this is arguably your largest advantage that you have over competitors. They're like, you know, larger [snorts] companies have like six-month incubation cycles. And so they're always like stuck in the past of like the agent capabilities, right? And so your advantage is that you can like be like, hey, the agent the capabilities are here right now. Let me build something that uses this right now, right? So, um, yeah. Uh any any other questions on for we're talking about skills in **bash**. Okay. It seems like there are a lot of skill questions. So um yeah uh I I think at the back someone you might have to shout.
</details>

**听众9**: 是的。那么，你为什么要使用技能而不是API呢？它们看起来和那个Python程序非常相似，那可能是一个包，对吧？

<details>
<summary>Original English</summary>

**Audience 9**: Yeah. So why would you use a skill versus an API? They look very similar to that Python program there could be a package, right?
</details>

### 技能与API的选择

**Thariq Shihipar**: 是的。问题是为什么要使用技能而不是API？嗯，好问题。我想，嗯，当你，这些都基本上是代理渐进式披露的形式，以找出它需要做什么。嗯，我将介绍一些例子，比如你只有一个API，对吧？在我们的原型设计环节中。嗯，这完全取决于用例，对吧？我想，我没有一个通用的规则。我想这就像阅读脚本，看看你的代理想要什么。如果你的代理总是想要，比如认为API最好是一个`API.ts`文件或`API.py`文件，那就这样做。你知道，那很棒。我想技能就像，嗯，一种引入，让你思考文件系统作为存储上下文的方式，对吧？它们是一个很好的抽象。嗯，但是有很多方法可以使用这个系统。嗯，我应该说，关于技能，你需要**Bash**工具，你需要一个虚拟文件系统之类的东西。所以**Agent SDK**基本上是目前唯一能真正充分利用技能的方式。所以，嗯，是的。是的。后面那位。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. The question was why use a skill versus an API? Um, good question. I I think that like um when you like these are all forms of progressive disclosure basically to the agent to figure out what it needs to do. Um, and I'll go over like uh examples of like you just have an API, right? In in our like in our prototyping session. Um, it's totally like use case dependent, right? Like just I think like I don't have a like I don't think there's a general rule. I think it's like read the transcript and see what your agent wants. If your agent always wants like thinks about the API better as like a `API.ts` file or something or `API.py` file, do that. You know, that's great. Like I think skills are like like sort of an introduction into like thinking about the file system as a way of storing context, right? And they're a great abstraction. Um, but there are many ways to use the system. Um, and I I should say that like something about skills that like you need the **bash** tool, you need a virtual file system, things like that. So the **agent SDK** is like basically the only way to really use skills to like their full extent right now. So um yeah. Yeah. Back there.
</details>

**听众10**: 我们可以期待一个技能市场吗？

<details>
<summary>Original English</summary>

**Audience 10**: Can we expect a marketplace for skills?
</details>

### 技能市场与插件

**Thariq Shihipar**: 是的。问题是我们可以期待一个技能市场吗？所以，嗯，是的，**Claude Code**有一个插件市场，你也可以与**Agent SDK**一起使用。嗯，我们正在随着时间的推移发展它，你知道，它就像一个非常v0版本。嗯，我说的市场，我不确定人们是否会为此收费。我想它更多只是一个发现系统。嗯，但是，是的，它现在已经存在了。你可以在**Claude Code**中做`SL plugins`。嗯，是的，你可以找到一些。所以，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. The question was can we expect a marketplace for skills? So um yeah, **clock code** has a plug-in marketplace that you can also use with the **agent SDK**. Uh we're evolving that over time, you know, like it was like a very much a v0ero. Um, and by marketplace, I'm not sure if people will be charging for this exactly. It's more just like a discovery system, I think. Um, but yeah, that exists right now. You can do `SL plugins` in **cloud code**. Um, and and you can find some. So, yeah. Yep.
</details>

**听众11**: 你目前对何时使用**SDK**解决问题的看法是什么？

<details>
<summary>Original English</summary>

**Audience 11**: What's your current thinking about when you're going to reach for like the **SDK**, you know, to solve a problem?
</details>

### 何时选择Agent SDK

**Thariq Shihipar**: 何时？是的。问题是，我何时使用**SDK**解决问题？嗯，如果我正在构建一个代理，基本上我想，嗯，我的总体信念是，对于任何代理，**Bash**工具都能给你带来如此大的力量和灵活性，使用文件系统也能给你带来如此大的力量和灵活性，以至于你总能从中获得性能提升，对吧？所以，嗯，是的，在这次演讲的原型设计部分，我们将看一个只使用工具的例子，以及一个不使用**Bash**和文件系统的例子，并比较两者。嗯，是的，这就是我所说的羞于构建**Bash**。我就是喜欢从**Agent SDK**开始，你知道，我想**Anthropic**的很多人也开始这样做。所以，嗯，当然，我确实想说，有很多时候**Agent SDK**有点烦人，因为你有一个网络沙盒容器，你可能会想，我讨厌它，我不想这样做，你知道吗？我的意思是，我想在我的浏览器本地运行，对吧？嗯，我完全理解。我认为确实存在性能权衡。嗯，我思考它的方式有点像**React**与**jQuery**，你知道，就像我，当我成长时，我非常喜欢Web开发，你知道，我使用**jQuery**和**Backbone**，然后**React**问世了，它是**Facebook**开发的，他们说：“你必须这样做，这是**JSX**，我们刚创造出来的。”现在有一个打包器，对吧？我觉得它太烦人了。嗯，但它们通常使模型，或者说它使Web应用程序更强大，对吧？我想我们**Agent SDK**有点像代理框架中的**React**，因为我们在此之上构建自己的东西。所以，你知道，它是真实的，所有烦人的部分都只是我们也很烦恼的事情，但我们觉得它就是有效，你必须这样做，你知道吗？嗯，所以，是的。嗯，是的。好的。我想还有更多关于技能的问题。是的。就在这里。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: When? Yes. The question is when do I use the **SDK** to solve a problem? uh if I'm building an agent basically I I think that like um my overall belief is that like for any agent the **bash** tool gives you so much power and flexibility and using the file system gives you so much power and flexibility that you can always ek out performance gains over it right and so uh yeah in the prototyping part of this talk we're going to like look at an example with only tools and an example without with you **bash** and the file system and compare those two. Um, and yeah, that's what I mean by being bashful to build. I'm like I I just like start from the **agent SDK**, you know, and I think a lot of people at **Enthropic** have started like doing that as well. So, um, of course I I do want to say that there are lots of times where the **agent SDK** is kind of annoying because you've got like this network sandbox container and you're like, I hate like I don't want to do this, you know? I mean, like I want to run on my browser locally, right? Um, I totally get that. And I think it's there is like a real performance trade-off. Um the way I think about it is sort of like **React** versus like **jQuery**, you know, like I like I when I was coming up, I was like very into webdev and like you know I was using **jQuery** and **Backbone** and then **React** came out and it was by **Facebook** and they're like you have to here's **JSX** like we just made this up and and now there's a bundler, right? I'm like it's so annoying. Um, but like they generally makes the model or it makes it made web apps more powerful, right? And I think we're sort of like the **agent SDKs** are like the **react** of agent frameworks to me because it's like we build our own stuff on top of it. So, you know, it's real and all the annoying parts of it are just like things where we're annoyed about it too, but we're like it just works like you have like got to do this, you know? Um, so yeah. Uh, yeah. Okay. more more skill questions I guess. Yeah. Right here.
</details>

**听众12**: 嗯，问题是什么？**Bash**。

<details>
<summary>Original English</summary>

**Audience 12**: Uh what's the question? **Bash**.
</details>

**Thariq Shihipar**: 哦，当然。**Bash**问题。太棒了。我喜欢**Bash**。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh, sure. **Bash** question. Great. I love **bash**.
</details>

**听众12**: 自定义内部的**Bash**工具。

<details>
<summary>Original English</summary>

**Audience 12**: Custom internal like **bash** tools.
</details>

**Thariq Shihipar**: 是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah.
</details>

**听众12**: 你如何让代理发现这些工具？或者这些工具必须成为工具吗？

<details>
<summary>Original English</summary>

**Audience 12**: How do you let the agent discover that or do those have to become tool tools?
</details>

### 自定义Bash工具的发现机制

**Thariq Shihipar**: 好的。问题是，如果你有自定义代理**Bash**工具，你如何让代理发现它们？你说的自定义**Bash**工具是指**Bash**脚本吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay. The question is if you have custom agent **bash** tools, how do you let the agent discover that? By custom **bash** tools, you mean like **bash** scripts?
</details>

**听众12**: 我们有**Bash**脚本。是的。

<details>
<summary>Original English</summary>

**Audience 12**: We have we have **bash** scripts. Yeah.
</details>

**Thariq Shihipar**: 嗯，是的。所以我想，它在哪里？你只需把它放在文件系统中，然后告诉它，嘿，这是一个脚本。你可以调用它。你知道，我通常在**Claude Agent SDK**的上下文中思考，文件系统和**Bash**工具是绑在一起的。我有时会看到一种反模式，人们会说：“哦，我们要把**Bash**工具托管在这个虚拟化的地方，它不会与代理循环的其他部分交互。”你知道，这会使事情变得困难，因为如果你有一个工具结果保存了一个文件，那么你的**Bash**工具就无法读取它，你知道，我的意思是，除非它们都在一个容器中。所以，这回答了你的问题吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Um yeah. So I I think uh where is it? you just put it in the file system and you tell it like hey like here is a script. Uh you can call it you know I I'm generally thinking in the context of the **cloud agent SDK** where it has the file system and the **bash** tools are tied together. This is kind of an anti pattern I see sometimes where people are like, "Oh, like we're going to host the **bash** tool in this like virtualized place and it's not going to interact with other parts of like the agent loop, you know, and that sort of, you know, makes it hard cuz if if you got a tool result that's saving a file, then your **bash** tool can't like uh read it, you know, I mean, unless it's all in one one container." So, does that answer your question? Like
</details>

**听众12**: 是的，有点。我的意思是，你只是说你把它放在系统提示符中吗？是的，我只是把它放在系统提示符中，比如“嘿，你有权访问这个。”我希望设计我所有的CLI脚本都带有一个`d-help`之类的东西，这样模型就可以调用它，然后它可以逐步披露脚本内部的每个子命令。是的。

<details>
<summary>Original English</summary>

**Audience 12**: Yeah, kind of. I mean, like, so you're just saying you just put it in like system prompt or something? Yeah, I just put in system prompting like hey you have access to this. I would like sort of design all my CLI scripts to have like a `d-help` or something so that the model can call that and then it can like progressively disclose like every like subcomand inside of the script. Yeah.
</details>

**听众13**: 嗯，是的。

<details>
<summary>Original English</summary>

**Audience 13**: Uh yeah m
</details>

### Agent SDK与通用聊天机器人

**听众13**: 是的，所以，嗯，我的问题是关于何时使用**Agent SDK**。那么你是否设计过，或者你会推荐某人使用**Agent SDK**来构建一个通用聊天代理，而不是像“哦，你知道，我正在构建一个代理，你有一些输入，代理会做一些事情，最后我关心输出”这样的代理？你会使用或预见使用**Agent SDK**来构建**Claude.ai**这个应用程序，而不是**Claude Code**吗？是的。所以问题是，我们何时使用**Agent SDK**？嗯，我们会使用**Agent SDK**来构建**Claude.ai**吗？**Claude.ai**是一个更传统的聊天机器人，而不是**Claude Code**。嗯，首先，我认为**Claude Code**是一个非常像，界面不是传统的聊天机器人界面，但输入和输出是，对吧？你输入代码，你得到，或者你输入文本，你得到文本输出，并且它们在此过程中采取行动。嗯，你可能已经看到，当我们为**Claude.ai**推出文档创建功能时。嗯，现在它能够启动一个文件系统，并生成代码来创建电子表格和PowerPoint文件之类的。所以这就像，你知道，我们正在，嗯，合并我们的代理循环之类的。但是，总的来说，嗯，是的，**Claude.ai**会越来越像，你看到它与技能和内存工具之类的东西，越来越像文件系统驱动，对吧？所以，嗯，我们确实认为这是一个广泛的东西，你可以普遍使用，并且很高兴能通过例子来讨论。嗯，是的，再提一个问题，然后我们继续。是的。

<details>
<summary>Original English</summary>

**Audience 13**: yeah so uh like my question is around when to reach for the **agent SDK**. So have you designed or rather would you recommend someone use the **agent SDK** to build like a generic chat agent as compared to like oh you know I'm building an agent where you have some input and the agent goes and does some stuff and finally I care about the output as compared to let's say someone like are you using or do you foresee using the agent to build like the **agent SDK** to build like **clot** the the app rather than **clot code**. Uh yeah. So the question is when do we reach for the **agent SDK** uh does um like uh like would we use the **agent SDK** to build **cloud.AI** which is a more traditional chatbot uh than **cloud code**. Um I one I think **cloud code** is like a very like like interface is not a traditional chatbot interface but like the inputs and outputs are right like you input code in you you get like or you input text in you get text out and you they take actions along the way um you might have seen that like when we rolled out doc creation for **cloud.ai** AI. Um, now it has the ability to spin up a file system and like create spreadsheets and PowerPoint files and things like that by generating code. And so that is like you know we're in the midst of sort of like um like merging our agent loops and stuff like that. But but broadly like uh like yeah **cloud.ai** will like is getting more and more like you see it with skills and the memory tool and stuff more and more file system pills, right? So, uh, we do think this like a broad thing that you can use just just generally and happy to talk through examples. Um, yeah, one more question then we'll keep going. Yeah.
</details>

**听众14**: 仍然试图理解何时构建工具或使用工具，何时用脚本封装某些东西，或者只是让代理在**Bash**上自由发挥的经验法则，因为我举个例子。假设我需要不时地访问数据库。我可以使用MCP。我可以将其封装在一个脚本中，我也可以直接从**Bash**让代理调用B的端点，对吧？

<details>
<summary>Original English</summary>

**Audience 14**: Still trying to understand the rule of thumb on when to build a tool or use a tool, when to wrap something with a script or just let the agent go wild on the **bash** because I I'll give you an example. Let's say I need to access a database from time to time. I can use an MCP. I can wrap it in a script and I can just let the agent call an endpoint from B directly from **bash**, right?
</details>

### 数据库访问：工具、脚本或Bash

**Thariq Shihipar**: 是的，好问题。好问题。所以，仍然试图理解何时使用工具与**Bash**与代码生成，你举了一个例子，比如：“好的，我有一个数据库。嗯，我希望代理能够以某种方式访问它。我应该怎么做？我应该创建一个工具来查询数据库吗？嗯，我应该使用**Bash**吗？我应该使用代码生成吗？”对吧？这些都是三种不同的做法。嗯，我认为它们就像，你可以使用其中任何一个，我想，嗯，不幸的是，没有一个单一的最佳实践，对吧？这有点像一个系统设计问题。但是，假设你想通过工具访问你的**Bash**数据库。如果你的数据库非常结构化，并且你必须非常小心，比如，我不知道，你正在访问用户敏感信息之类的，你可能会这样做，你可能会说：“嘿，我只能接受这个输入，我需要给出这个输出，我必须向代理屏蔽数据库的所有其他信息。”对吧？显然，这会限制代理能做什么，对吧？比如它不能编写非常动态的查询，对吧？嗯，如果你正在编写一个完整的SQL查询，我肯定会使用**Bash**或代码生成，嗯，只是因为当模型编写SQL查询时，它可能会犯错误，而它修复错误的方式是通过`lint`或运行文件，查看输出，查看是否有错误，然后迭代，对吧？嗯，所以，我通常喜欢，如果我今天正在构建一个代理，我会给它尽可能多的数据库访问权限，然后我会设置防护措施，对吧？比如我可能会以不同的方式限制它的写入权限。但我可能会做的是，我会给它写入权限，并设置特定的规则，然后如果它尝试做一些它不能做的事情，我会给它反馈。你明白我的意思吗？所以，我知道这是一个有点困难的问题，但我想这是我们需要解决的问题集，对吧？比如我们构建了一个**Bash**工具解析器。嗯，那是一个超级烦人的问题。嗯，但我们需要解决它，才能让代理普遍工作，对吧？数据库也是一样，是的，理解查询在做什么确实很困难，但如果你能解决这个问题，你就可以让你的代理随着时间的推移更普遍地工作。所以，嗯，是的，我想尽可能灵活地思考它，并将工具保持为非常非常原子化的操作，对吧？你需要很多保证。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, great question. Great question. So, it still trying to gro like when to use tools versus **bash** versus codegen and you gave an example like okay, I have a database. Um, I want the agent to be able to access it in some way. What should I do? Should I create a tool that queries the database in some way? Um, should I use the **bash**? Should I use codegen? Right? These are all these are three ways of doing it. Um I think that they are like you could use any of them and I I think like part of it is like I I think unfortunately there's no like single best practice, right? This is like kind of a system design problem. But let's say that you want to access your **bash** your database via tool. You would do that if your database was very very structured and you had to be very careful about like I don't know you're accessing like user sensitive information or something like that and you're like hey I I can only take in this input and I need to like give this output and I have to mask everything else about the database from the agent right obviously that like sort of limits what the agent can do right like it can't write a very dynamic query right um if you're writing a full-on SQL query, I would definitely use **bash** or cogen uh just because when the model is writing a SQL query, it can make mistakes and the way it fixes it is is its mistakes is by like linting or like running the file, looking at the output, seeing if there are errors and then iterating on it, right? Um, and so I generally like if I'm building an agent today, I'm giving it as much access to my database as possible and then I'm like putting in guard rails, right? Like I'm probably limiting its like right access in different ways. But what I probably what I would do is like I would give it right access and put in specific rules and then give it feedback if it tries to do something it can't do. You know what I mean? And so I know this is like kind of a hard problem, but I think this is the like set of problems for us to solve, right? Like we built a **bash** tool parser. Um, and that's a super annoying problem. Uh, but we need to solve that in order to like let the agent work generally, right? And same thing with like database like like yes, it's quite hard to understand what is a query doing, but if you can solve that, you can let your agent work more generally over time. So um yeah I think thinking about it uh like flexibly as much as possible and keeping tools to be like very very like sort of atomic actions right that you need a lot of guarantees around. Um
</details>

**听众15**: 关于同一件事的后续问题，对吧？你如何确保基于角色的访问控制得到处理？

<details>
<summary>Original English</summary>

**Audience 15**: a follow on the same thing right uh how do you ensure the role based access controls are taken care of
</details>

### 角色权限控制

**Thariq Shihipar**: 你如何，嗯，所以问题是你如何确保基于角色的访问控制得到处理？通常这取决于你如何配置你的API密钥或你的后端服务之类的，对吧？比如，嗯，我想我可能会做的是，我创建临时API密钥，有时人们会在中间创建代理来插入API密钥，嗯，如果你担心信息泄露的话。嗯，但是，是的，我会为你的代理创建以特定方式限定范围的API密钥，这样在后端你就可以检查它，比如，你知道它正在尝试做什么，而且，嗯，如果它是一个代理，你可以给它不同的反馈。所以，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: how do you uh so the question is how do you ensure that the role based act uh access controls are taken care of usually that's in like how you provision your API key or your backend service or something like that right like um I think that like probably what I do is like I create like temporary API keys sometimes people create proxies in between to insert the API keys um if you're concerned about excfiltration of that. Um but yeah, I would create like API keys for your agents that are scoped in certain ways and so then on the back end you can sort of check it's like you know what it's trying to do and like uh if it's a an agent you can like give it different feedback. So yeah.
</details>

**听众16**: 好的。我还有一个问题。嗯，你能告诉我们更多关于内存工具，内部内存工具的信息吗？

<details>
<summary>Original English</summary>

**Audience 16**: All right. I have one more question. Um anything you could tell us uh more about the the memory tool the internal memory tool? Um,
</details>

**Thariq Shihipar**: 我没有，我不是想保守秘密。我不知道具体情况，我没有读过代码，但我想它通常在文件系统上工作。所以，嗯，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: I have I I'm not trying to like keep a secret. I I don't know exactly like I haven't read the code, but I I think it generally works on on the file system. And so, um,
</details>

**听众16**: 你把它暴露给**SDK**了吗，还是它已经可用了？

<details>
<summary>Original English</summary>

**Audience 16**: you expose it to uh to the uh **SDK** or is it already available?
</details>

### 内部记忆工具与文件系统

**Thariq Shihipar**: 嗯，我想说，我们已经有很多次被问到这个问题了。我只会使用**Claude Agent SDK**中的文件系统。我只会创建一个像“memories”文件夹之类的东西，然后告诉它把记忆写在那里。嗯，我不知道内存工具的具体实现，但它确实以那种方式使用文件系统。所以，是的。嗯，好的，是的，关于这个的最后一个问题。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Um, I would say that like we we've had this question a bunch. I would just use the file system on in the **cloud agent SDK**. I would just create like a memories folder or something and tell it to write memories there. Um it's like I I don't know the exact implementation of the memory tool but it does use the file system in in in that way. So yeah um all right yeah last question on this. Yeah
</details>

**听众17**: 是的，你如何管理**Bash**和代码的重用性？假设同一个代理被部署给数百个用户，并且每次都生成相同的代码，每次都执行相同的代码。那么我们如何利用重用性呢？是的，这是一个非常好的问题。所以，嗯，是的，假设你有两个代理与两个不同的人交互。问题是，你如何考虑代理之间的重用性，或者代理如何通信，对吧？嗯，我想，嗯，这是一个有待发现的事情。我想，但是我认为在，嗯，有很多最佳实践和系统设计需要完成，因为传统上，对于Web应用程序，你为一个应用程序服务一百万人，对吧？而对于代理，比如**Claude Code**，我们服务，你知道，一对一的容器。当你在Web上使用**Claude Code**时，它就像是你的容器，对吧？所以容器之间没有太多的通信，这是一个非常非常不同的范式。我不会说我确切地知道最佳的系统设计是什么，对吧？我想有很多关于，比如，好的，这些代理正在重用工作，嗯，我们如何给它们，比如，将它们完成的工作组合在一起的通用脚本？我们如何让它们共享它？嗯，我通常会认为这有点像一个题外话，但关于代理通信框架，我想说，我们可能不需要一个完整的，我们不需要，我想这更多是个人意见，我想我们可能不需要重新发明，嗯，一个新的通信系统。代理擅长使用我们已有的东西，比如HTTP请求、哈希工具、API密钥、命名管道以及所有这些东西。所以，比如，代理可能只是互相发送HTTP请求，你知道，使用HTTP服务器。嗯，那里有很多有趣的工作。我见过有人为他们的代理创建了一个虚拟论坛，它们在上面发布话题，回复之类的。嗯，有点酷。我想那里有很多东西可以探索和发现。是的。好的。嗯，我将继续讲一点。我们时间怎么样了？好的。我想还剩一个小时。好的。

<details>
<summary>Original English</summary>

**Audience 17**: yeah how you are manage for the b and the code how you are managing the like reusability suppose the same agent is rolled out to hundreds of users and uh same code every time it is generating and every time it is executing. So how can we use the reusability? Yeah, that's a really good question. So, uh yeah, let's say you have two agents interacting with two different people. The question is like how do you think about reusability between agents or how do agents communicate, right? Um I think uh this is a thing to be discovered. I think like but I think there's a lot of best practices and system design to be done on like um because traditionally with web apps you're serving one app to like a million people right and with agents like with **cloud code** we serve like you know a onetoone like container when you use **cloud code** on the web it's like it's your container right and so there's not a lot of like communication between containers it's a very very different paradigm I'm not going to say that like I know exactly the best system design to do that right and like I think there's a lots of best practices on like okay these agents are reusing work um how can we give them like like general scripts that combine together the work that they've done how can we make them share it um I would generally think this is sort of like a tangent but on like agent communication frameworks I would say that like we probably don't need like a whole we don't I I think this is more of a personal opinion I think like we probably don't need to reinvent and uh like a new communication system. There are like the agents are good at using the things that we have like HTTP requests and hash tools and API keys and uh named pipes and all of these things. And so like probably like the agents are just making HTTP requests back and forth from each other, you know, using HTTP server. Um there's a bunch of interesting work there. I've seen people make like a virtual forum for their agents to communicate and they like post topics and like reply and stuff like that. Um kind of cool. I think there's a lot of things to explore and discover there. Yeah. Okay. Um going to keep going a little bit. How are we doing for time? Okay. It's got an hour left, I think. Okay. Um
</details>

### 电子表格智能体设计

**Thariq Shihipar**: 酷。所以，一个设计代理的例子。嗯，这就像，是的，这不是原型设计环节，但我想这会是一个很好的切入点。假设我们正在制作一个电子表格代理。嗯，搜索电子表格的最佳方式是什么？执行代码，或者说在电子表格中采取行动的最佳方式是什么？链接电子表格的最佳方式是什么？对吧？这些都是非常有趣的事情。嗯，我将做一个Figma，我们可以讨论一下。嗯，如果有人能帮我拿杯水，那就太好了。我真的很需要水。嗯，是的。好的。嗯，谢谢。嗯，好的。所以我们要，嗯，是的，让我们来讨论一下。嗯，或者你们自己花几分钟思考一下这个问题？你有一个电子表格代理。你希望它能够搜索。你希望它能够收集上下文、采取行动、验证其工作。你会如何思考它？对吧？所以，花点时间思考一下。记些笔记之类的。好的。大家都有时间思考一下了吗？有人想花更多时间，还是想直接深入讨论？好的。嗯，代理搜索电子表格的最佳方式是什么？我意识到我现在必须单手打字了。嗯，我应该弄清楚这个问题，因为我稍后会打字。好的。嗯，好的，搜索电子表格。嗯，有什么想法吗？你如何搜索电子表格？比如你会怎么做？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: cool. So, an example of designing an agent. Uh this is a like yeah let's this is not the prototyping session but I think this is like will be a good sort of like like lee way into it. Let's say we're making a spreadsheet agent. Uh what is the best way to search a spreadsheet? What's the best way to execute code like or what's the best way to take action in a spreadsheet? What is the best way to link a spreadsheet? Right? These are all like really interesting things to do. Uh I'm going to do like a Figma and we can go over it. Um, if someone could grab a water as well, that'd be great. I like could really use water. I'm uh Yeah. Yeah. Okay. Um, thanks. Uh, okay. So, we're going to um Yeah, let's let's talk through it. Uh, or why don't you spend like a couple minutes yourselves thinking about this question? You have a spreadsheet agent. You want it to be able to search. You want to be able to like gather context, take action, verify its work. How would you think about it? Right? So like just spend some time thinking through that. Take some notes or something. Okay. Is everyone get had a little bit of time to think about this? Does anyone want more time or want to just dive into it? Okay. Uh, what's the best way for an agent to search a spreadsheet? Realizing I have to type with one hand now. Um, I should figure this out because I'm going to type later. Okay. Um, the Okay, searching a spreadsheet. Uh, any any ideas how do you search a spreadsheet? Like what would you do?
</details>

**听众18**: CSV。

<details>
<summary>Original English</summary>

**Audience 18**: CSV.
</details>

**Thariq Shihipar**: 好的。你有一个**CSV**文件。好的。现在你的代理想要搜索这个**CSV**文件。它会怎么做？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay. You've got a **CSV**. Okay. And now like your agent wants to like search the **CSV**. What what does it do?
</details>

**听众19**: `grep`。好的。嗯，`grep`会是什么样子？

<details>
<summary>Original English</summary>

**Audience 19**: A GP. Okay. Uh what does the GP look like?
</details>

**听众20**: 需要查看所有标题。

<details>
<summary>Original English</summary>

**Audience 20**: Needs to look at all the headers.
</details>

**Thariq Shihipar**: 查看标题。好的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Looks at the headers. Okay.
</details>

**听众20**: 所有工作表的标题。

<details>
<summary>Original English</summary>

**Audience 20**: Headers of all sheets.
</details>

**Thariq Shihipar**: 好的。太棒了。是的，是的。假设我正在寻找2024年的收入之类的。嗯，现在我有了标题，比如，嗯，我只是要拉出一个电子表格，对吧？嗯，假设收入在，有一个收入列，然后有一个，嗯，所以，是的，让我们看看，好的，所以，是的，假设是这样的，对吧？比如，我如何获得2026年的收入？对吧？所以，这有点像一个表格问题，对吧？这里有收入，这里也有2026年，对吧？所以，这就像一个多维步骤，对吧？我们可以查看标题，那会给我们，嗯，如果你只拉出这个，你会得到100、200、300，对吧？所以我们需要更多一点。嗯，还有其他想法吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay. Great. Yeah. Yeah. And let's say I'm looking for the revenue in 2024 or something. Um now I've got my headers like uh I'm just going to pull up a spreadsheet, right? Um let's say that the revenue is in there's a revenue column and then there's like a uh so yeah let's see okay so yeah let's say it's something like this right like um How do I get revenue in 2026? Right? So, this is sort of like a tabular problem, right? Like there is revenue here and there's also 2026 here, right? So, it's like a multi-dimensional step, right? We could look at the headers that will then give us uh like if you just pull this, you'll get 100, 200, 300, right? So, we need a little bit more. Uh any other ideas?
</details>

**听众21**: 是的，有一个**Bash**工具可以做到。嗯，**AWK**，我想。

<details>
<summary>Original English</summary>

**Audience 21**: Yeah, there's a **bash** tool for it. Uh, a **AWK**, I think.
</details>

**Thariq Shihipar**: 哦。好的。是的，是的，是的。那它会做什么呢？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: O. Okay. Yeah. Yeah. Yeah. And what would it A for?
</details>

**听众21**: 嗯，这取决于你在找什么。

<details>
<summary>Original English</summary>

**Audience 21**: Well, depends on what you what you're looking for.
</details>

**Thariq Shihipar**: 是的。是的，是的。那是一个问题，对吧？比如用户在找什么，对吧？他们可能在找这样的东西，比如2026年的收入，对吧？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Yeah. Yeah. That that's a question, right? Like what is the user looking for, right? They're probably looking for something like this, like revenue in 2026, right? Um,
</details>

**听众22**: 也许可以使用API来使用**Google**工具将所有数字加起来，或者V查找之类的，对吧？

<details>
<summary>Original English</summary>

**Audience 22**: maybe use the APIs to use the **Google** tools to add all the numbers together or V look up something like this, right?
</details>

**Thariq Shihipar**: 是的。所以想法是使用API，比如使用**Google** API来查找。嗯，那很棒。嗯，但是，是的，假设我们正在本地工作。我们需要设计这些API。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So the idea is like use the APIs like use the **Google** APIs to like look it up. Um that's great. Uh but yeah, let's say we're working locally. We need to sort of design these APIs. Yeah.
</details>

**听众23**: **SQLite**或直接使用**CSV**并工作。

<details>
<summary>Original English</summary>

**Audience 23**: **SQLite** ord **CSV** directly and work.
</details>

**Thariq Shihipar**: 哦，有趣。好的。是的，我不知道。那太棒了。所以，是的，你使用**SQLite**来查询**CSV**。嗯，这是一个很好的、有点创意的思考API接口的方式，对吧？比如，如果你能将某些东西转换成代理非常熟悉的接口，那很棒，对吧？所以，如果你有一个数据源，如果你能将其转换成SQL查询，那么你的代理就真的知道如何搜索SQL，对吧？所以思考这个转换步骤真的非常非常有趣，这是一种很好的设计代理搜索接口的方式。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh, interesting. Okay. Yeah, I didn't know that. That's great. So yeah, you you use **SQLite** to query a **CSV**. Um that's a great like sort of creative way of thinking about API interfaces, right? like um if you can translate something into a interface that the agent knows very well that's great right and so like if you have a data source if you can convert it into a SQL query then your agent really knows how to search SQL right so thinking about this transformation step is really really interesting it's a great way of like designing like an agentic search interface so
</details>

**听众24**: 嗯，是的，那边。抱歉，很快，当我们谈论工具时，因为你也可以将TSV用于一些东西。嗯，在其中是否有任何好的排名？**Claude**是否足够智能，可以开始为正确的工作排名正确的工具？因为这正是我们在这里谈论的，为正确的工作选择正确的工具。

<details>
<summary>Original English</summary>

**Audience 24**: um yeah over there sorry real quick while we're talking about tools because you can use TSV for some of the stuff as well um is there any good ranking within the with Is **Cloud** smart enough to start ranking the right tool for the right job? Because that's kind of what we're talking about here is right tool for the right job.
</details>

### 工具排序与元数据增强

**Thariq Shihipar**: 是的。**Claude**是否足够智能，可以为正确的工作排名正确的工具？嗯，是的，如果你提示它，你知道，或者说，我想那就像那些事情之一，我不知道，让我们找出，让我们阅读脚本。嗯，如果不是，你如何帮助它？是的。就像，我想所有这些东西都像是一种直觉，你知道吗？这就像骑马一样。我从来没有骑过马，但我知道，我想象它就像跑步。是的。就像你，你知道，你正在给马这些信号。你让它平静下来。你试图了解它如何，你如何让它跑得更快？你明白我的意思吗？这有点像一个非常有机的东西，对吧？嗯，我想我们喜欢说模型是“生长”出来的，而不是设计的，对吧？所以我们正在了解它们的能力。是的。嗯，是的，它是什么以及它在哪里。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Is **Cloud** smart enough to write rank the right cool tool for the right job? Uh yeah, if you prompt it, you know, like or like I I think that's one of those things where like I don't know, let's find out like let's read the transcript. Uh if it's not like how can you help it? Yeah. Just sort of like I I think all of these things are like an intuition, you know? It's like like kind of like riding a horse. Not that I've ever rode a horse, but I know just like I imagine it's like running. [laughter] Yeah. Like you like, you know, you're sort of giving these signals to the horse. You're calming it down. You're trying to understand what it how how do you push it faster? You know what I mean? And sort of like it's a very organic like thing, right? Um like I think we like to say that models are grown and not designed, right? And so we're like sort of understanding their capabilities. Yeah. Uh yeah what and where it is. Yeah
</details>

**听众25**: 快速提问。那么，有没有办法给电子表格添加元数据？你可以在不同的文档中给出描述吗？

<details>
<summary>Original English</summary>

**Audience 25**: quick question. So is a way to add like metadata to the spreadsheet? Can you give descriptions in a different document?
</details>

**听众26**: 是的，例如KPI，以构建智能来提问。

<details>
<summary>Original English</summary>

**Audience 26**: Yeah that's for example KPI to build intelligence to ask questions.
</details>

**Thariq Shihipar**: 是的。所以这是一个很好的模式，比如，好的，你能给电子表格添加元数据吗？所以这些是你可能需要思考的一些问题，在思考搜索之前，比如你可以做哪些预处理来使搜索更好，对吧？所以一个例子是，你将其翻译成SQL格式或类似的东西，你使用可以查询它的东西，对吧？那是一个翻译步骤。另一个步骤是，也许你有一个工具，或者，嗯，一个预处理步骤，另一个代理注释电子表格并添加信息，以便代理可以更好地搜索该信息。对吧？所以，嗯，是的，还有一个。嗯，我只是好奇，我的意思是所有这些工具听起来都很棒，但是，是的，为什么代理不能只是，你知道，做被建议的事情，读取标题，然后获取日期？我觉得那应该很简单，或者重新测试。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So that's another great pattern is like okay can you add metadata to a spreadsheet? So these are some questions that you might want to think about before like when you're thinking about search is like what pre-processing can you do to make the search better, right? And so one example is that you translate it into like a SQL format or something where you use something that can query it, right? That's like a translation step. Another step is like maybe you have a tool or um like a a pre-processing step where another agent annotates the the spreadsheet and and like adds information so that the agent can then like search across that information better. Right. So um yeah, one more. Um, I was just curious what I mean all those tools sound great, but yeah, why can't the agent just, you know, do what was suggested, read the header and then just get the date? Like I feel like that should pretty trivial or retest.
</details>

### 智能体搜索的复杂性

**Thariq Shihipar**: 是的，我可能应该用代码准备这个。但是，是的，我以前构建了很多电子表格代理。基本上，它不是，它有点难做。是的。是的。所以，嗯，基本上，我会怎么想呢？所以我们有了，好的，我，Sean，你有什么建议，它如何同时说话和编码？请说。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, probably I should have like prepared this in code. But yeah, I I built a ton of spreadsheet agents before. Basically, it's not it's kind of hard to do. Yeah. Yeah. So, um, basically what what I would think about is like, so we we've got like Okay, I Sean, do you have suggestions on how it can talk and code at the same time? Go ahead.
</details>

**听众27**: 哦，我明白了。是的。

<details>
<summary>Original English</summary>

**Audience 27**: Oh, I see. Yeah.
</details>

**Thariq Shihipar**: 你在Whisper Flow之类的公司工作吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Do you work at Whisper Flow or something or
</details>

**听众28**: 把麦克风插到衬衫里？

<details>
<summary>Original English</summary>

**Audience 28**: Stick the mic in your shirt?
</details>

**听众29**: 电池上有一个麦克风按钮。

<details>
<summary>Original English</summary>

**Audience 29**: There's a microphone button. [laughter]
</details>

**听众28**: 把麦克风插到衬衫里。

<details>
<summary>Original English</summary>

**Audience 28**: Stick the mic in your shirt.
</details>

**Thariq Shihipar**: 哦，我，我就是不相信那些东西，伙计。好的。嗯，也许我不应该在AI实验室工作。嗯，好的。所以，嗯，让我们看看。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh, I I I just don't trust that stuff, man. Okay. Um, [laughter] maybe I shouldn't be working in an AI lab. Um, okay. So, uh, let's see.
</details>

**听众30**: 等等。等等。嗯，搜索。所以，

<details>
<summary>Original English</summary>

**Audience 30**: Hold on. Hold on. Um, search. So,
</details>

**Thariq Shihipar**: 一种方法是，就像你在电子表格中看到的那样，对吧？你可以说，在这里你可以设计公式，对吧？所以就像B3到B5，对吧？所以这是一个代理非常熟悉的语法，比如B3到B5，对吧？所以你可以设计一个代理搜索接口，它就像这样，对吧？比如B3到B5之类的，对吧？所以你的代理搜索接口可以接受一个范围，对吧？它可以接受一个范围字符串，对吧？这些都是代理非常熟悉的东西，对吧？比如你可以进行SQL查询，对吧？代理非常熟悉SQL查询，对吧？嗯，而且，嗯，这些你也可以做XML，对吧？抱歉，字体太小了。嗯，好的。嗯，是的，你也可以做XML。我不确定你们是否知道，但是，嗯，XLX文件在后端是XML，对吧？而XML是非常结构化的，嗯，你可以进行XML搜索查询，嗯，并且有不同的库可以做到这一点，所以这是一个例子，对吧？就是你如何搜索和收集上下文，我希望这能向你说明，收集上下文真的非常非常有创意，对吧？而且，而且，有很多迭代，如果你只尝试了一次迭代，那可能还不够，对吧？比如思考尽可能多的不同方式，你可以尝试这些，对吧？比如尝试SQL，尝试CER，尝试GP和O，以及所有这些东西，嗯，并进行一些测试，你正在尝试不同的东西，然后看看代理喜欢什么，不喜欢什么。嗯，每个案例都会不同。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: one way to do it is like you see in spreadsheets, right? Like you can say here you can design formulas right so like B3 2 right so this is a syntax for example that the agent's pretty familiar with like B3 to B5 right and so you can design an agentic search interface which is like this right like B3 B5 or something right so like your agentic search interface can take in a range right it can taking a range string, right? And these are things that like the agent knows pretty well, right? Like you can um do SQL queries, right? Agent knows SQL queries pretty well, right? Um and uh like these you can also uh do XML, right? Sorry, the font is so small. Um okay. Uh yeah, you can also do XML. I'm not sure if you guys know but like uh XLX files are XML in the back end right and XML is very structured uh you can do like an XML search query uh and there are different libraries that can do that so that's one example right is like how do you search and gather context and I hope this sort of like illustrates to you that like gathering context is really really creative right like and and like there's so many iterations and if you just if you've only tried one iteration it's probably not enough right like think about like as many different ways as you can like try these out, right? Like try SQL, try try the CER, try try the GP and O and like all of these things and um have a few tests that you're trying across different things and and see what the agent likes and what it what it doesn't like. Um it's going to be different for each case.
</details>

**听众31**: 抱歉。当你提到代理时，你是指模型吗？因为我们正在这里构建一个代理。

<details>
<summary>Original English</summary>

**Audience 31**: Sorry. When you say agent, you're referring to the the model or because we're building an agent here.
</details>

**听众32**: 是的。你依赖于已经存在的处理XML的知识，是谁在做这个？模型吗？

<details>
<summary>Original English</summary>

**Audience 32**: Yeah. and you're relying on already free existing knowledge of how to handle XML who's who's doing that the model.
</details>

### 智能体与模型：问题分布

**Thariq Shihipar**: 是的，因为问题是，知识从何而来？是模型吗？我的意思是，我说的代理是什么意思？是的，通常我想你正在寻找的是，你有一个问题，你想让它尽可能地对代理来说是“在分布内”的，对吧？所以代理对很多不同的事情都很了解。例如，它对金融很了解，对吧？所以如果你让它制作一个DCF模型，它知道DCF是什么，对吧？如果你想给它更多信息，你可以创建一个技能，对吧？所以它知道DCF是什么。它知道SQL是什么。它能把这些东西结合起来吗？对吧？所以，理想情况下，你希望你的问题在某种程度上是“超出分布”的，对吧？比如，有一些信息不在互联网上，或者你有一些独特的信息，你想尝试将其“按摩”成尽可能“在分布内”的形式。嗯，是的，这非常有创意。我想，嗯，你知道，它不像一门科学，更像一门艺术。所以，嗯，是的。好的。所以我们尝试了收集上下文，然后采取行动。嗯，我们可能在这里可以做很多我们以前做过的事情，对吧？比如我们可以插入二维数组，对吧？嗯，如果我们有一个SQL接口，对吧？我们可以，嗯，我们可以执行SQL查询，我们可以编辑XML。嗯，这些通常非常相似，对吧？比如采取行动和收集上下文，你可能希望有一个相似的API来回交互。然后最后一件事是验证工作，对吧？比如你如何思考，你如何思考这个问题？嗯，检查空指针，对吧？这是其中一种方法。嗯，关于验证还有其他想法吗？是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, because the question is like who uh where is the knowledge come from? Is it the model? Is it like what is what do I mean by the agent? Yeah, generally I think what you're looking for is like you have a problem you want to make it as indistribution as possible for the agent, right? And so the agent knows a lot about a lot of different things. It knows a lot about for example finance, right? So if you ask it to make a DCF model, it knows what DCF is, right? And you can if if you want to give it more information, you can make a skill, right? But so it knows what DCF is. It knows what SQL is. Can it combine those things together, right? And so like uh ideally you want to like your your problem is going to be out of distribution in some way, right? like like there's some like information that's not on the internet or something that you have um or something somewhat unique to you and you want to try and like massage it to be as in distribution as possible. Um and uh yeah it's it's very very creative I think like uh you know it's not like a it's not a science to be [laughter] very much like an art. So, um, yeah. Okay. So, we we've tried gathering context, then taking action. Um, we can probably do a lot of the same stuff here that we've done before, right? Like we can do like insert 2D array, right? Um, if we've got like a SQL interface, right, we can um we can do a SQL query, we can edit XML. Um, these are like often very similar, right? Like taking action and gathering context that that you probably want a similar API back and forth. And then the last thing is verifying work, right? Like how do you think about how do you think about that? Um, check for null pointers, right, is one of the ways to do it. Um, any other ideas on on verification or Yeah.
</details>

**听众33**: 抱歉，我有点困惑，如果你说……

<details>
<summary>Original English</summary>

**Audience 33**: Sorry, I'm I'm a bit confused if you say
</details>

**听众33**: 比如，当你使用其他SDK构建代理时，我不需要告诉它如何收集上下文。

<details>
<summary>Original English</summary>

**Audience 33**: like when when you're using other **SDKs** to build Asian, I don't need to tell it how it should gather the context.
</details>

**Thariq Shihipar**: 当然。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Sure.
</details>

**听众33**: 我只是给它上下文，并解释这就是，基本上我用简单的英语解释它应该做什么。

<details>
<summary>Original English</summary>

**Audience 33**: I just give it the context and explain this is what like basically I explain in plain English
</details>

**听众33**: 它应该做什么。

<details>
<summary>Original English</summary>

**Audience 33**: what is meant to do.
</details>

**Thariq Shihipar**: 是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah.
</details>

**听众33**: 我倾向于做的事情，你告诉我我是否错了，我实际上最终会为QA创建一个单独的代理。

<details>
<summary>Original English</summary>

**Audience 33**: And what I tend to do and you tell me if I'm wrong, I actually end up creating a separate agent for QA.
</details>

**Thariq Shihipar**: 哦，有趣。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh, interesting.
</details>

**听众33**: 为了验证，因为我不信任代理自己验证。但我只是，我只是有点困惑，在那个例子中，我需要向代理提供多少细节。

<details>
<summary>Original English</summary>

**Audience 33**: To to verify because I don't trust the agent to verify itself. But I'm just I'm I'm just a bit I confused about the level of detail I need to provide the agent in that example.
</details>

### 验证与QA智能体

**Thariq Shihipar**: 是的。好的。所以问题是关于，嗯，给代理上下文与让它自己收集上下文。你提到你有时使用QA代理。嗯，我能问一下你正在哪个领域构建你的代理吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Okay. So the question is about um giving context to the agent versus having it gather its own context. Uh you mentioned that you sometimes use a Q&A agent. Uh can I ask like what like domain you you're building your agent in or
</details>

**听众33**: 在网络安全领域。

<details>
<summary>Original English</summary>

**Audience 33**: in uh cyber security.
</details>

**Thariq Shihipar**: 好的。当然。是的，是的。嗯，我想，我想我需要更深入地研究具体细节，但**Claude Agent SDK**非常适合网络安全，而且，我想我通常会鼓励人们让代理尽可能多地收集上下文，你知道，让它尽可能多地自己找到工作。嗯，你正在尝试给它工具来找到自己的工作。我思考这个问题的方式有点像，假设有人把你锁在一个房间里，他们给你任务，你知道，就像你的工作一样，就像一个**Mr. Beast**那样的场景，对吧？如果你在这个房间里待六个月，你就能得到50万美元。嗯，那么，比如有人给你一条消息，你希望能够做些什么工具呢？对吧？比如你只想要一份文件清单，还是想要一个计算器，或者一台电脑？对吧？我可能想要一台电脑，对吧？我想要**Google**。我想要所有这些东西，对吧？所以，我不会希望那个人给我一叠文件，然后说：“嘿，这可能就是你需要的所有信息。”我宁愿直接说：“嘿，给我一台电脑。给我问题。让我搜索并找出答案。”对吧？所以这就是我思考代理的方式。比如它们需要，你知道，它们被困在一个房间里。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay. Sure. Yeah. Yeah. Um, I think that I I think I need to like look into more specifics, but the **cloud agent SDK** is great for cyber security and like I would generally push people on like let the agent gather context as much as possible, you know, like let it find its own work as much as possible. Um, you're trying to give it the tools to find its own work. The way I think about this is kind of like let's say that someone locked you in a room and they were they were like giving you tasks, you know, like that's your what your job was like a **Mr. Beast** sort of like scenario, right? Like you get $500,000 if you stay in this room for 6 months. Um then like like someone's giving you a message, what tools would you want to be able to do it, right? Like would you just want like a list of papers or like would you want a calculator or like a computer? Right? Probably I would want a computer, right? I'd want **Google**. I'd want like all of these things, right? And so like I wouldn't want the person to send me like a stack of papers being like, "Hey, this is probably all the information you need." I'd rather just be like, "Hey, just give me a computer. Give me the problem. Let me search it and figure it out." Right? And so that's how I think about agents as well. like they need like like you know they're stuck in a room.
</details>

**听众34**: 所以我需要给它们工具。所以如果你能回到你有的幻灯片，回到你有的图表。

<details>
<summary>Original English</summary>

**Audience 34**: So I need to give them tools. So if you can go back to the slides you have to the graph you had
</details>

**Thariq Shihipar**: 到这样的图表吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: to the graph like this or
</details>

**听众34**: 是的，所以基本上收集上下文就是这些我提供的工具。

<details>
<summary>Original English</summary>

**Audience 34**: yeah the so basically that gathering context is basically these are the tools I'm offering it.
</details>

**Thariq Shihipar**: 是的。没错。是的。你，我正在给它，比如一个用于代码生成的API。也许我正在给它一个SQL工具。也许我正在给它一个**Bash**。这些都是例子，对吧？所以，是的，你还有一个问题。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Exactly. Yeah. You're I'm giving it like maybe an API for code generation. Maybe I'm giving it a SQL tool. Maybe I'm giving a **bash**. These are all like examples, right? So yeah, you have one more question
</details>

**听众35**: 问题。那么，对于你拥有的所有代理，它们共享相同的上下文窗口吗？

<details>
<summary>Original English</summary>

**Audience 35**: question. So for all the agents that you're [clears throat] having, do they share the same context window?
</details>

### 上下文管理与子智能体

**Thariq Shihipar**: 有趣。是的。那么代理共享上下文窗口吗？我想，我想这是一个有趣的问题，总体上关于你如何管理上下文。嗯，我想，我还没有过多谈论这个问题，但子代理是管理上下文的一种非常非常重要的方式。嗯，我想这就像我们在**Claude Code**内部越来越多地使用子代理，我也会非常普遍地考虑使用子代理。所以，比如我们为电子表格代理可能做的是，我们有一个搜索子代理，对吧？所以子代理非常适合当你需要做大量工作并将答案返回给主代理时。所以对于搜索，假设问题是，我如何找到我2026年的收入？也许你需要做很多结果。也许你需要，嗯，搜索互联网，也许你需要搜索电子表格，诸如此类。有很多东西不需要进入主代理的上下文。主代理只需要看到后续结果，对吧？所以那是一个很棒的子代理任务。嗯，我这里没有专门的子代理幻灯片，但是，是的，它们非常非常有用，我认为这是一个很好的思考方式。嗯，是的，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Interesting. Yeah. So do agents share the context window? I think I think this is like an interesting question just overall about how you manage context. Um I think and I haven't talked about this too much yet, but sub agents are like a very very important way of managing context. Um, I think that this is like we're using more and more sub agents inside of **cloud code** and I would think about like doing sub agents very generally. So like what we might do for the spreadsheet agent is maybe we have a search sub agent, right? So like sub aents are great for when you need to do a lot of work and return an answer to the main agent. So for search, let's say the question is like how do I find my revenue in 2026? Maybe you need to do a bunch of results. Maybe you need to like uh search the internet, maybe you need to search the spreadsheet, things like that. And there's a bunch of things that don't need to go into the context of the main agent. The main agent just needs to see the follow result, right? And so that's a great sub agent task. Um I don't have a dedicated sub aent slide here, but like yeah, they're very very useful and I I think a great way to think about things. Um yeah,
</details>

**听众36**: 并且，只是为了补充那个问题，实际上，对于验证，例如，你可以想象通过技能或子代理来完成。你甚至可能希望有一个对抗性的，比如安全示例就是一个很好的例子。希望它能真正投入其中，并且与已经完成的工作没有任何同情关系。这是一个非常，我明白这是一个范围，但你是说，是的，你会在这里使用子代理，你会使用技能吗？你会如何思考这个问题？

<details>
<summary>Original English</summary>

**Audience 36**: and just to just to build on that question actually for verification for example, you can imagine doing that through a skill or a sub agent. You might even want to have an adversarial like the security example is a great one. Want to have really go to town on it and not really have any sympathetic relationship with the work already done. It's a very I I get it's a spectrum, but do you like are you saying yes, you'd use a sub agent here, you'd use a skill? How would you think about this?
</details>

**Thariq Shihipar**: 是的，当然。所以问题是，嗯，你使用子代理还是……

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, definitely. So question on like uh do you sub agents or oh
</details>

**听众37**: 我确定它会起作用，只是为了确保。

<details>
<summary>Original English</summary>

**Audience 37**: I'm sure it'll work just to make sure.
</details>

**Thariq Shihipar**: 哦，当然。好的。是的，是的。谢谢你。我很感激。嗯，好的。是的。嗯，你可以使用子代理进行验证吗？嗯，是的。我想这是一种模式。我想，理想情况下，最佳的验证形式是基于规则的，对吧？你会说，比如有没有空指针之类的？嗯，那就像简单的验证。它不会`lint`或编译。比如，尽可能多地尝试插入规则，并且再次发挥创意，对吧？比如，在**Claude Code**中，如果代理尝试写入一个我们知道它尚未读取的文件，比如我们没有看到它进入读取缓存，我们就会抛出错误。我们会告诉它，嘿，你还没有读取这个文件，请先尝试读取它，对吧？这是一个例子，说明我们如何将确定性工具插入到验证步骤中。所以，尽可能地，每当你思考验证时，第一步就是，你能确定性地做些什么？你能做些什么输出？再次，当你选择要制作哪种类型的代理时，那些具有更多确定性规则的代理会更好，你知道，它们就是，它就是很有意义，对吧？所以，当然，随着模型越来越擅长推理，你就可以拥有这些子代理来检查主代理的工作。主要的事情是避免上下文污染。所以你可能不想分叉上下文。你可能想开始一个新的上下文会话，然后说：“嘿，是的，对抗性地检查，嗯，这个输出是由**McKenzie**的初级分析师制作的，或者类似的东西。他们毕业于，比如不是名校，他们的GPA，你知道，就像，只是给它一堆东西，然后让它批评它，对吧？那就像子代理的工具之一，对吧？所以，嗯，是的，你越是，嗯，是的，随着模型越来越好，那种验证也会变得更好。嗯，但确定性地做是很好的开始。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh, sure. Okay. Yeah. Yeah. Thank you. Appreciate it. Um okay. Yeah. Uh can you use sub agents for verification? Uh yes. I I think this is a pattern. I think like ideally the the best form of verification is rulebased, right? You're like is there like a null pointer or something? Uh that's like easy verification. it it doesn't lint or compile like like as many rules as you can try and insert them and again be creative right like for example uh in **cloud code** if the agent tries to write to a file that we know it hasn't read yet like we haven't seen we haven't seen it enter the read cache we throw it an error we we tell it like hey uh you haven't read this file yet try reading it first right and that's an example of sort of like a deterministic tool that we insert into the verification step and So as much as possible like anytime you are thinking about you know verification first step is like what can you do deterministically what like what like you know outputs can you do and again like when you're choosing which a like types of agents to make the agents that have more deterministic rules are better you know like they just like like it just makes a lot of sense right so um of course as the models get better and better at reasoning then you can have these sub agents that check the work of the main agent the Main thing there is to like avoid uh context pollution. So you probably wouldn't want to like fork the context. You'd probably want to start a new context session and just be like, "Hey, yeah, adversarily check um the work of like this this output was made by a junior analyst at **McKenzie** or something. They graduated from like not a grade school like their GPA like you know like like just like feed it a bunch of stuff and then tell it to critique it, right? Like that's like one of the tools of the sub agent, right? And so um yeah, the more you like uh yeah, as the models get better and better, that sort of verification will become better as well. Um but doing it deterministically is like a great start.
</details>

**听众38**: 是的。只是关于验证工作的问题。

<details>
<summary>Original English</summary>

**Audience 38**: Yeah. Just a [clears throat] question about the verify work. So
</details>

**Thariq Shihipar**: 是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: yeah.
</details>

### 状态管理与可逆性

**听众38**: 嗯，所以假设我们发现了空指针。可能很容易就说：“好的，修复它。”但是，你知道，假设我们将其部署到生产环境，客户端正在使用它，而不是我们，他们不知何故陷入了整个电子表格被删除的境地。所以，比如，我们需要在什么级别上嵌入，比如撤销工具的能力，因为，比如，假设QA代理返回他们的电子表格是空的。

<details>
<summary>Original English</summary>

**Audience 38**: Um so let's say we found no pointers. It's probably easy to just say, "Okay, fix it." But like you know let's say we deploy it to production and the client is using it that's not us and they somehow get into a spot where the whole spreadsheet is deleted and so like like on what level do we need to bake in like the ability to like undo tools and because like um let's say the QA agent returns that their spreadsheet is empty.
</details>

**Thariq Shihipar**: 是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah.
</details>

**听众38**: 不一定能够撤销。那么你的建议是什么？

<details>
<summary>Original English</summary>

**Audience 38**: Not necessarily is able to undo for so like what was your advice there?
</details>

**Thariq Shihipar**: 是的。所以问题是，你如何思考状态，以及撤销和重做，能够，嗯，基本上修复错误，对吧？我认为这是一个非常好的问题，老实说，另一个，嗯，就像当你思考代理擅长什么，对吧？或者代理擅长解决什么问题领域？工作的可逆性是一个非常好的直觉，对吧？所以代码是相当可逆的。你可以直接回去，你可以撤销**Git**历史。我们，我们开箱即用就提供了这些原子操作，对吧？比如我通过**Claude Code**不断使用**Git**。我不再输入**Git**命令了，对吧？所以，嗯，那是一个很好的例子。一个非常糟糕的例子是计算机使用，你知道，因为计算机使用在状态上是不可逆的，对吧？比如，假设你去了**DoorDash.com**，你添加了用户想要你订购可乐，你添加了订购百事可乐，现在你不能只是回去点击可乐。你必须去购物车，你必须移除百事可乐，对吧？所以你的错误已经使这个状态复杂化了，状态机变得更复杂了，对吧？所以，每当你处理非常非常复杂的、你无法撤销或重做的状态机时，它确实会变得更困难，对吧？我想，作为一名工程师，你的问题之一是，你能否将其变成一个可逆的状态机，就像你说的，你是否可以在检查点之间存储状态，以便用户可以说：“哦，我的电子表格现在搞砸了，回到上一个检查点。”对吧？嗯，甚至模型是否可以回到上一个检查点？嗯，我想有人有这个时间旅行工具，嗯，他们给了其中一个编码代理，这有点酷，你就像，你可以时间旅行回到事情发生之前的某个点。你明白我的意思吗？嗯，这有点有趣。我想所有这些工具，有些工具现在还不能很好地工作，但是，你知道，我们会成功的。嗯，是的，思考状态和验证非常有用，对吧？所以，嗯，是的，后面快速提问。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So the question is like how do you think about state and like undoing and redoing being able to um fix errors basically right? I think this is like a really good question and honestly another sort of like um like when you think about like what are agents good at right like or what problem domains are agents good at? How reversible is the work is like a really good intuition right? So code is quite reversible. you can just like go back, you can undo the **git** history. We we come with like, you know, these atomic operations right out of the gate, right? Like I use **git** constantly through **cloud code**. I I don't type **g** commands anymore, right? So, um that's like a really good example. A really bad example is computer use, [clears throat] you know, because computer use has is not reversible in state, right? Like let's say you go to like **door-ash.com** and you add like the user wants you to order a Coke and you add order a Pepsi now like you can't just go back and click on the Coke. You have to like go to the cart and you have to remove the Pepsi, right? And so your mistake has like compounded this like you know this state and the state machine has gotten more complex, right? And and so like whenever you're dealing with like very very complex state machines that you can't undo or redo of it does become harder, right? And I think one of the questions for you as an engineer is like can you turn this into a reversible state machine kind of like you said can you store state between checkpoints such that the user can be like oh my spreadsheet is messed up right now just go back to the previous uh checkpoint right uh potentially even can the model go back to previous checkpoints um I I think someone had this like time travel tool um that they were giving one of the coding agents which was kind of cool where you're like it's like you can time travel back to a point before this happened. You know what I mean? Uh it's kind of fun. I think like all of these tools, some of them don't work that well yet, but you know, we'll we'll get there. Um yeah, thinking about state and verification is is very useful, right? So, um yeah, quick question at the back.
</details>

**听众39**: 是的。嗯，我有点好奇规模问题。嗯，如果电子表格有数百万行，数十万列，对吧？或者任何类型的数据库，在这种情况下，你如何进行搜索？显然有一个上下文你需要考虑。

<details>
<summary>Original English</summary>

**Audience 39**: Yeah. Um I'm kind of curious about scale. Um so what if the spreadsheet is like millions of rows million and thou hundreds of thousands of columns right or just like any sort of database like in that type of situation how would you go about searching there's obviously a context you have to commentate for
</details>

### 大型数据处理策略

**Thariq Shihipar**: 是的，这很棒。嗯，我可能应该把电子表格的例子作为我的编码例子，作为预览。我的编码代理是一个**Pokemon**代理。嗯，可能电子表格会更好。好的。嗯，问题是如果电子表格非常大怎么办？如果你有数百万行，嗯，你如何思考？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: yeah this is great um I probably should have done the spreadsheet example as my coding example for for a preview my coding like agent is a **Pokemon** agent um probably spreadsheet would have been Okay. Uh the question was what if the spreadsheet is very big? If you have a million rows, uh how do you think about
</details>

**听众40**: 100列。

<details>
<summary>Original English</summary>

**Audience 40**: 100 column
</details>

**Thariq Shihipar**: 是的，10万列或100列或任何东西，你如何思考它，对吧？比如你的数据库也非常大，你如何做？嗯，我想对于所有这些事情，嗯，当然，随着数据越来越大，问题就越来越难，你知道，它就是绝对会降低你的准确性，对吧？比如**Claude Code**在大型代码库中的表现不如在小型代码库中，对吧？随着模型越来越好，它们会在所有这些方面变得更好。嗯，对于所有这些，我会思考，如果我有一个数百万列和数百万行的电子表格，我会怎么做？我的意思是，我需要开始搜索它。对。我需要像，如果我正在搜索收入，我就会像`Ctrl+F`搜索收入，然后我会检查每个结果，然后我会说：“这是对的吗？”然后我会看到，嘿，这里有一个数字吗？然后我可能会保留一个草稿本，比如一个新工作表，上面写着：“嘿，比如收入等于这个。”你知道，然后存储这个引用并继续。所以我想这是一个很好的思考方式，就是模型不应该，你不应该让它将整个电子表格读入上下文，因为它会占用太多，对吧？比如，嗯，你希望给它一个起始的上下文量，你也是这样工作的，对吧？比如，假设你打开电子表格，你看到的是行，这是对的，你看到的是前10行和前，你知道，30列之类的，对吧？这就是你看到的。你不会立即将所有内容都加载到上下文中，对吧？你可能有一种直觉，比如，嘿，我应该将更多内容加载到上下文中，对吧？而且，哦，我应该导航到另一个工作表，对吧？而这个工作表有更多数据，对吧？嗯，但你需要，比如，你自己收集上下文，对吧？所以代理也可以以同样的方式操作。它可以导航到这些工作表，读取它们，比如尝试保留一个草稿本，记一些笔记，然后继续。所以这就是我思考它的方式。嗯，是的，后面那位。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: yeah 100,000 columns or 100 columns or whatever like how do you think about it right like your database is also very big like how do you how do you do that? Um I think for all of these things uh one of course as the data becomes larger and larger it's just a harder problem like you know it just absolutely is your accuracy will go down right like **cloud code** is worse in larger code bases than it is in smaller code bases right as the models get better they will get better at all of that um for all of these I would think about like how would I do this if I had a spreadsheet that was like a million columns and a million rows what would I do I I mean I would need to start searching for it Right. I would need to be like like if I'm searching for revenue, I'd be like searching `Ctrl+F` revenue and then I'd go check each of these like results and I'd be like is this right? And then like I'd see like hey is there a number here? And then I'd probably keep a scratch pad like a new sheet where I'm like hey like equals revenue equals this you know and and and store this reference and and keep going. So I I think that's a good way of thinking about it is like the model should you should never like read the entire spreadsheet into context because it would it would take too much right like um you want to give it like the starting amount of context that's also how you work right like let's say that you open up the spreadsheet what you see is rows is this right you see like the first 10 rows and the first like you know 30 columns or something right that's what you see you don't load all of it into context right away you probably have an intuition for like, hey, I should load more of this into context, right? And and like, oh, I should navigate to this other sheet, right? And this other sheet has more data, right? Um, but you need to like sort of you gather context yourself, right? And so the agent can operate in the same way. It can like navigate to these sheets, read them, like try and like keep a scratch pad, keep some notes and keep going. So that's how I would think about it. Uh, yeah, in the back.
</details>

**听众41**: 是的。所以我的问题是关于管理上下文污染，实际上我想这与上一个问题有关。嗯，你有没有一个经验法则，关于在开始出现收益递减或效果变差之前，你使用了多少上下文窗口的比例？

<details>
<summary>Original English</summary>

**Audience 41**: Yeah. So my question is about managing context pollution and actually I guess relates to the previous question. Um do you have a rule of thumb for you know what fraction of the context window do you use before you start hitting diminishing returns or it becomes less effective?
</details>

### 上下文污染与管理

**Thariq Shihipar**: 是的，问题是，是的，上下文管理。你有没有一个经验法则，关于在上下文窗口变得不那么有效之前，使用多少上下文窗口？这实际上，我想说，现在是一个非常有趣的问题。嗯，我想很多时候，当我与使用**Claude Code**的人交谈时，他们会说：“我正在进行第五次压缩。”我就会想：“什么？我几乎从来没有进行过压缩。”你明白我的意思吗？我必须自己测试用户体验，通过强迫自己进行压缩。嗯，只是因为我倾向于在使用**Claude Code**时经常清除上下文窗口，只是因为，嗯，至少在代码中，状态是在代码库的文件中，对吧？所以假设我做了一些更改，**Claude Code**可以查看我的**Git**差异，然后说：“哦，嘿，这些是你所做的更改。”它不需要知道我与它的整个聊天历史，你知道，为了继续一个新的任务，对吧？所以在**Claude Code**中，我经常清除上下文，然后说：“嘿，看看我未提交的**Git**更改。我正在做这个。你能帮我以这种方式扩展它吗？”对吧？这是一种思考方式。嗯，当你构建自己的代理时，比如我们正在构建一个电子表格代理，它会变得更复杂，因为你的用户技术水平较低，对吧？他们不知道上下文窗口是什么，对吧？嗯，我想说那是一个难题。我想那里有一些用户体验设计，比如你能否重置对话状态，对吧？比如，每次用户提出新问题时，你是否可以进行自己的压缩，或者类似的东西，你是否可以，嗯，总结上下文？嗯，它是否像在电子表格中，很多状态都在电子表格本身中，所以它可能不需要，你知道，知道整个上下文。嗯，你是否可以存储用户偏好，嗯，随着它的进行，这样你就可以记住一些东西，你知道，就像有很多，再次，就像一门艺术，有很多不同的角度和方式你可以这样做，对吧？嗯，但是，是的，你正在尝试，比如最小化上下文使用，嗯，你可能不需要一百万个上下文之类的，你知道，我的意思是，你只需要良好的上下文管理，比如用户体验设计，是的，嗯，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah the question is yeah context management. Do you have a rule of thumb for like uh how much of the context window to use before it becomes less effective? This is actually I'd say a pretty interesting problem right now. Um, I think a lot of times when I talk to people who are using **cloud code**, they're like, I'm on my fifth compact. I'm like, what? Like like I've I like almost have never done a compact before. You know what I mean? Like I have to like test the UX myself by like like forcing myself to get compacted. Um just because like I I tend to like clear the context window very often right when I'm using **cloud code** myself just because like um at least in in code the state is in the the files of the codebase right so let's say that I've made some changes uh **cloud code** can just look at my **git** diff and be like [snorts] oh hey these are the changes you made it doesn't need to know like my entire chat history with it you know in order to continue a new task right and so in **cloud code** I clear the context very very often often and I'm like, "Hey, look at my outstanding **get** changes. I'm working on this. Can you help me extend it in this way?" Right? That's like a way of thinking about it. And um when you're building your own agent, like let's say we're building a spreadsheet agent, it gets a little bit more complex because your users are less technical, right? And they don't know what a context window is, right? Um that is like I'd say a hard problem. I think there's like some UX design there of like can you reset the conversation state, right? like can you maybe every time the user asks a new question can you do your own compact or something and can you like uh summarize the context? Um does it like in a spreadsheet a lot of the state is in the spreadsheet itself so it probably doesn't need you know to know the entire context. um can you store user preferences um as it goes so that you remember some of this stuff you know like there's a lot of like again like it's an art there's like so many different angles and ways in which you can do this right um but yeah you are trying to like sort of minimize context usage um you probably don't need s a million context or something you know I mean like you just need good context management like UX design yeah um yeah
</details>

**听众42**: 嗯，我只是想问一下子代理是为了保护核心代理的行为而创建的。对吧。

<details>
<summary>Original English</summary>

**Audience 42**: um just I just want to ask the sub agents were made to protect the conduct of the core agent. Right.
</details>

**Thariq Shihipar**: 没错。是的。子代理是为了……

<details>
<summary>Original English</summary>

**Thariq Shihipar**: That's right. Yeah. Sub agents were made to
</details>

### 子智能体处理大型电子表格

**听众42**: 电子表格。我们能否使用多个子代理，并尝试创建一个流程，在电子表格非常大的情况下将其分块？这样代理就可以并行地处理每个部分。

<details>
<summary>Original English</summary>

**Audience 42**: spreadsheet. Would we be able to use multiple sub agents and try to make a process where we chunk up the spreadsheet in the case where it's super large. So then the agents can kind of run through each portion like in parallel with each other.
</details>

**Thariq Shihipar**: 是的。是的。我的意思是，嗯，是的。所以，我喜欢**Claude Code**的一点是，我们是使用子代理的最佳体验，尤其是使用**Bash**的子代理。它非常非常好。我以前没有真正意识到所有的痛苦。嗯，我想如果有人要去QCON，我相信**Adam Wolf**会在QCON上发表关于我们如何制作**Bash**工具的演讲。**Adam**是个传奇，**Bash**工具做得非常好。嗯，当你同时运行并行子代理时，**Bash**会变得非常复杂，并且有很多像竞争条件之类的东西，所以我们已经解决了很多问题，对吧？所以这是我喜欢**Claude Code**的一点，你可以直接说：“嘿，启动三个子代理来完成这个任务。”它就会这样做，在**Agent SDK**中，你也可以直接要求它这样做。所以，第一，子代理是**Agent SDK**中一个很棒的原语，我还没有见过任何人做得这么好。所以这是一个使用它的重要原因。嗯，是的，通常你希望这些子代理能够保留上下文。假设你有一个电子表格，你可能可以同时运行多个读取子代理，对吧？所以主代理可能会说：“嘿，这个代理能读取并总结工作表一吗？这个代理能读取并总结工作表二吗？这个代理能重新代理总结工作表三吗？”然后它们返回结果，然后代理可能会再次启动更多的子代理。对吧？所以这就像另一个你可以控制的旋钮。嗯，我想说的是，我们已经谈论了这么多关于所有这些不同的创意方式，你可以做事情。这就像你应该思考你的问题的层面。在我看来，你不应该真正思考，嗯，比如我如何启动一个进程来制作一个子代理，或者，你知道，比如在“压缩”之类的背后的系统工程，对吧？所以，我们为你处理了框架中的所有这些问题，这样你就可以思考，嘿，我需要启动哪些子代理，对吧？以及我如何创建一个通用的搜索接口，以及我如何验证它的工作，这些才是你必须解决的真正核心和困难的问题，任何你没有花时间解决这些问题，而是在解决低级问题的时间，你可能都没有为你的用户提供价值，你知道，所以，嗯，是的，我想子代理，我是**Agent SDK**的忠实粉丝，是的，嗯，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Yeah. I mean um Yeah. So like one of the things I love about **cloud code** is that we are like the best experience for using sub agents like especially sub agents with **bash**. It is very very good. I didn't really quite realize uh all the pain. Um I think if anyone's going to **QCON**, I believe **Adam Wolf** is giving a talk on **QCON** about how we did the **bash** tool. **Adam**'s a legend and the **bash** tool such a good job. Um when you're running parallel sub agents at the same time, **bash** becomes like very complex and there are lots of like like race conditions and stuff like that and and so there's a lot of work that we've solved there, right? So this is like one of the things I love about **cloud code** is you can just be like hey like spin up three sub agents to do this task and it will do that and in the **agent SDK** as well you you can just ask it to do that. So number one sub agents are a great primitive in the **agent SDK** and I haven't seen anyone do it as well. So that's like a big reason to use it. Um yes generally you want it you want these sub agents to preserve context. Let's say you have if you have a spreadsheet, you could potentially have multiple read sub aents going on at the same time, right? So maybe the main agent is like, "Hey, can this agent read and summarize sheet one? Can this agent read and summarize sheet two? Can this re agent summarize sheet three?" And then they return their results and then the agent maybe spins off more sub agents again. Right? So this is like another knob you have. Um, and I I think what I want to say is like there's like we've talked so many so much about like all these different creative ways that you can like do things. This is like the level at which you should think about should have to think about your problem. You should not really in my opinion think about like uh like how like how do I spin off a process to make a sub agent or like you know like the system engineering between like behind like what is a compact or something right? So like we take care of all of this for you in the harness so that you can think about like hey what sub agents do I need to spin off right and like how do I create a a a genic search interface and how do I like verify it's work these are the really core and hard problems that you have to solve [laughter] and any time you spend not solving these problems and and solving like lower level problems you're probably not delivering value to your users you know and and so um yeah I I think sub agents big fan of the **agent SDK** in case of yeah uh yeah
</details>

**听众43**: 所以，嗯，我们有这个文本和验证任务，那么我们到底需要把验证放在哪里呢？在这个例子中，假设在生成SQL查询之后，我可以验证它是否生成了正确的查询，那是第一条路径。第二条路径是直接执行查询，一旦我得到输出，我就会进行验证。那么，嗯，代理如何动态选择哪一条是正确的路径呢？

<details>
<summary>Original English</summary>

**Audience 43**: so uh like we have this uh text and the verification task so where exactly we need to put the verification in this example I let's say after generation of the SQL query I can verify it is the right query is generated or not that is the one path second path is like generation the query directly executing and once I will get the output then I will do the verification so uh and how how agent can choose dynamically like which one is the right path?
</details>

### 验证点的设置与确定性

**Thariq Shihipar**: 是的。所以问题是，你把验证放在哪里？嗯，它只在最后吗？你在中间做吗？诸如此类。我想说，你可以随时随地进行验证，对吧？比如，嗯，就像我说的，我们在**Claude Code**的读取步骤中进行了一些验证，对吧？那是一个很好的例子。嗯，你可以在最后做，你绝对应该在最后做，但在任何其他时候，如果你有规则或启发式方法，特别是，嗯，比如，如果你说：“嘿，我的规则之一是，你不应该搜索的总列数应该少于10,000或少于1,000。”那是一个很好的方法，对吧？比如，类似地，这里，也许你不应该插入一个巨大的行值，比如给模型反馈，说：“嘿，把它分块。”对吧？你抛出一个错误并给出反馈，而模型最棒的地方在于它会听取反馈，它会读取错误输出，对吧？然后它会继续进行，所以，是的，验证绝对是，我知道我把它放在这里作为一个循环，但是，嗯，它绝对更像是验证可以发生在任何地方，而且应该发生在任何地方，比如，尽可能多地把它放在你能放的地方。所以，嗯，好的，我确实需要开始做一些原型设计了，但我会再提一个问题。所以，就在这里。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So the question is like where do you do verification? Uh is it only at the end? You do it in the middle like things like that. I would say like everywhere you can just like constantly verify right like uh like I said we do some verification in the read step of the of **cloud code** right so that's like a great example um you can do it at the end you should absolutely do it at the end but at any other point if you have rules or heruristics especially uh like if for example you're like hey one of my rules is that you shouldn't do like the the total number of columns you should search is should be under 10,000 or under a thousand or something that's like a a nice way of doing it, right? Like similarly here like maybe you shouldn't be inserting like a huge like row like of of values like give feedback to the model be like hey chunk this up right you throw an error and give a feedback and the great thing about the model is like it listens to feedback it will read the error outputs right and then it'll just keep going so yeah verification is definitely like I I know I have it in this like as a sort of a loop but um it's definitely more like verification can happen anywhere and and should happen anywhere like like put it in as many places as you can. So, um all right, I do need to start doing some of the prototyping, but I'll take one more question. So, right here. Yeah.
</details>

**听众44**: 我们如何说，我们如何形成步骤？我的意思是，我们如何告诉代理先去搜索，然后这个步骤，然后做那个步骤？

<details>
<summary>Original English</summary>

**Audience 44**: How do we say how do we form the steps? I mean, like how do we say the agent that go search first and then this step and then do that step?
</details>

**听众45**: 循环实际上是如何从起点到终点的？我们如何……

<details>
<summary>Original English</summary>

**Audience 45**: How does the loop actually from the start point to the end? How do we
</details>

**Thariq Shihipar**: 你直接告诉它。所以，比如，嗯，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: you just tell it? So, like uh
</details>

**听众45**: 比如在系统提示符中吗？

<details>
<summary>Original English</summary>

**Audience 45**: like is it in a system prompt or
</details>

### 智能体循环的步骤形成

**Thariq Shihipar**: 是的，在系统提示符中。是的。所以，比如使用**Claude Code**，我们只是给它**Bash**工具，然后说：“嘿，比如收集上下文，读取你的文件，嗯，做一些事情，比如运行你的`lint`。”你明白我的意思吗？嗯，所以，是的，再次，对于代理，你不需要强制执行这个，对吧？你不需要告诉它：“嘿，你需要做这个。”因为，比如有时它可能不是必需的，对吧？比如，假设有人正在为你的电子表格提出一个只读问题。你不需要验证，嗯，比如你没有编译错误，对吧？因为你没有做任何写入错误，写入操作，对吧？所以，嗯，让代理变得智能，并且，就像你希望在做你的工作时拥有同样的自由一样，对吧？嗯，你被困在这个盒子或其他什么里面，就像同样的方式，对吧？嗯，所以，好的，酷。我，我确实想尝试看看我是否能做一些原型设计，现在我们也有这个，嗯，嗯，这个支架了。嗯，好的，是的，执行`lint`。我们做了很多问答。好的。原型设计。好的。假设你有一个代理，对吧？比如你想要，你想构建一个代理。你听完这次演讲后，你会觉得太棒了。我有很多想法。我该怎么做呢？我想我总的来说会说，构建一个代理应该很简单。你的代理最终应该很简单，但简单不等于容易，对吧？所以，它应该非常容易上手，而且确实如此，只需去**Claude Code**，给**Claude Code**一些脚本和库，以及自定义的**Claude**身份，然后让它去做，对吧？这就是我们要做的，对吧？嗯，这就像，它应该非常容易，就像说：“嘿，这是我的API。这就像一个API密钥。”嗯，你能，比如，搜索，你知道，我，嗯，我不知道，比如我的客户支持工单之类的，并按优先级组织它们，或者类似的东西，对吧？然后看看**Claude Code**做了什么，然后迭代它，对吧？这是一种很好的方式，可以跳过那些困难的领域特定问题，对吧？所以你有很多领域问题，比如你如何组织你的数据，你的代理搜索，你如何，比如，在你的数据库上创建防护措施，所有这些问题你都可以立即开始使用**Claude Code**解决，对吧？所以尝试，比如构建一些使用**Claude Code**感觉很好的东西。我想通常我看到的是，你可以这样做，并且开箱即用就能获得非常好的结果，在本地使用**Claude Code**，对吧？而且你最终应该有很高的信心，对吧？所以，嗯，是的，我想，我忘了更多信息。观看我的AI工程师演讲。嗯，这就像我们内部使用的演示文稿。嗯，好的。所以，嗯，是的，所以，是的，使用**Claude Code**。嗯，再次，简单但简单不等于容易，对吧？所以，你的代理中的代码量不应该非常大。不需要很大。不需要极其复杂，但它确实需要优雅。它需要像模型想要的那样。你想要有这个有趣的见解。让我们把模型变成一个SQL查询。哦，让我们把这个电子表格变成一个SQL查询，然后从那里开始，对吧？所以，嗯，以这种方式思考它。而**Claude Code**是一种很好的方式来做到这一点。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: you just tell it? So, like uh like is it in a system prompt or Yeah, in the system prompt. Yeah. So like with **cloud code**, we just give it the **bash** tool and we're like, "Hey, like gather context, read your files, uh do stuff like run your linting, you know what I mean?" Um, and so yeah, again with the agent, you don't need to enforce this, right? You don't need to tell it, hey, like you need to do this because like sometimes it might not be necessary, right? Like let's say that someone is asking a readonly question for your spreadsheet. you don't need to like verify that uh like you're that there are no compile errors, right? Because there you haven't done any write errors, write write operations, right? So, um let the agent be intelligent and and like in the same way that you would like that same freedom when you're doing your work, right? Uh you're trapped in this box or whatever like same way, right? Uh so, okay, cool. I I I do want to try and see if I can do some prototyping now that we have this uh uh the the holder as well. Um okay, yeah, execute lint. We've done a bunch of Q&A. Okay. Prototyping. Okay. Let's say that you have an agent, right? Like you want you want to build an agent. You come out of this talk and you're like great. I have a bunch of ideas. How how do I do this? Um I think what I say overall is like building an agent should be simple. Your agent at the end should be simple, but simple is not the same as easy, right? So like it should be very simple to get started and it is just go to **cloud code**, give **cloud code** some scripts and libraries and uh custom **cloud** identities and ask it to do it, right? That's what we're going to do, right? Um that's like it should be so easy to be like, hey, this is my API. This would be like an API key. uh can you like go search like you know I [clears throat] don't know like my customer support tickets or something and organize them by priority or something like that right and then look at what **cloud code** does and and and iterate on it right and this is like a great way of like just skipping to like the hard domain specific problems that you have right so you have a lot of like domain problems like how do you organize your data your agentic search how do you like create guard rails on your database these are all questions that you can just start solving right away with **cloud code**, right? And so try and like build something that feels pretty good with **cloud code**. And I think generally what I've seen is that you can do this and get really good results just out of the bat using **cloud code** locally, right? And and you should have high conviction by the end of it, right? And so um yeah, I think like [laughter] I forgot more info. Watch my AI engineer talk. Uh this is like a deck for internal that we were using. Um okay. So uh yeah, I'm going to be inserting this. So yeah, you're getting what we what we show customers, right? So um okay. Uh yeah. So yeah, use use **cloud code**. Uh again, simple but simple is not easy, right? So like the amount of code in your agent should not be like super large. Doesn't need to be huge. doesn't need to be extremely complex, but it does need to be elegant. It needs to be like what the model wants. You want to have this interesting insight. Let's turn the the model into a SQL query. Oh, let's turn this spreadsheet into a SQL query and then go from there, right? So, um, think about it that way. And **cloud code** is like a great way of doing that.
</details>

### Pokemon智能体演示：API生成

**Thariq Shihipar**: 好的，嗯，让我们制作一个**Pokemon**代理，对吧？这就是我们要做的。嗯，**Pokemon**是一个有很多信息的游戏。有数千种**Pokemon**，每种都有大量的招式。嗯，嗯，我们希望它非常通用。所以实际上有一个**PokeAPI**。嗯，我选择**Pokemon**的原因只是因为我知道你们也有自己的API，对吧？而且它们都非常独特，对吧？嗯，所以我选择了一个API有点复杂，我以前没有尝试过的东西。嗯，所以**PokeAPI**就像，你知道，你可以搜索像**Ditto**这样的**Pokemon**。嗯，你可以搜索像物品之类的东西。嗯，所以它有这个，是的，这个自定义API。你拥有游戏中所有的一切，对吧？所以，嗯，是的，就像其中一个任务，你的用户可能想要做的是组建一个**Pokemon**团队，对吧？我喜欢**Pokemon**。我对如何组建一个有趣的**Pokemon**团队进行竞技对战知之甚少。嗯，我的代理能帮我吗？那会很酷，对吧？所以，嗯，我的目标是制作一个可以聊**Pokemon**的代理，然后我们就会，你知道，看看我们能做什么，对吧？以及我们能走多远。所以，嗯，我已经完成了一些工作，我将打开并展示给你们。所以，嗯，这里的第一个步骤和提示是，第一个步骤是我将主要为此进行代码生成，对吧？所以，嗯，让我……

<details>
<summary>Original English</summary>

**Thariq Shihipar**: So, okay, uh, let's make a **Pokemon** agent, right? This is what we're going to do. Uh, **Pokemon** is a game with a lot of information. There are thousands of **Pokemon**, each with a ton of moves. Um, uh, we want to be pretty general. And so there is actually like a **Pokey API**. Um, and the reason I chose **Pokemon** is just because like I know that you guys have your own APIs as well, right? And they're all like very unique, right? And uh, so I wanted to choose something with a kind of complex API that I haven't tried before. Um, so the **Poke API** has like, you know, you can search up **Pokemon** like **Ditto**. Uh, you can search up like items and things like that. Um, and so it's got this like yeah, this custom API. You've got everything in the games, right? So, um, and yeah, like one of the Quest things agent might want, your user might want to do is make a **Pokemon** team, right? I love **Pokemon**. I know very little about making an interesting **Pokemon** team for competitive play. Uh, could my agent help me with that? That'd be that'd be cool, right? So, um, my goal is to make an agent that can chat about **Pokemon** and then we will like, you know, see what we can do, right? And and and how far we get. So, um, I've done like some of this work already and I will like open up and show you. So, um, the first step and the prompt here is like the first step is I'm I'm going to do mostly code generation for this, right? And so, um, let me
</details>

**听众46**: 那会在**GitHub**上吗？

<details>
<summary>Original English</summary>

**Audience 46**: Is that going to be on **GitHub** somewhere?
</details>

**Thariq Shihipar**: 嗯，实际上是的。嗯，是的，它在我的个人**GitHub**上。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Uh, actually it is. Uh, yeah, it's on my personal **GitHub**.
</details>

**听众47**: 哦，是的。我本来打算也提交所有这些。

<details>
<summary>Original English</summary>

**Audience 47**: Oh, yeah. I was going to commit all of this as well.
</details>

**Thariq Shihipar**: 是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah.
</details>

**Thariq Shihipar**: 嗯，是的。是的。所以，嗯，我想我的个人**GitHub**是，让我们看看。好的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Um, yeah. Yeah. So, uh, I think my personal **GitHub** is, let's see. All right.
</details>

**听众48**: 是安全的**GitHub**还是有恶意软件？

<details>
<summary>Original English</summary>

**Audience 48**: Is it secure **GitHub** or does it have malware in [laughter] it?
</details>

**Thariq Shihipar**: 你们是AI工程师。是的。比如，如果你被攻破了，那是你的错。嗯，是的。所以，嗯，是的，如果你愿意，你可以克隆这个。嗯，我需要推送最后的更改。所以，好的。所以，嗯，是的。你们能看到这个吗？我应该把它改成暗模式吗，还是这样就行？比如，嗯，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: You guys are AI engineers. Yeah. Like, if you can get owned, that's that's your fault. Um, yeah. So, um, yeah, you can you can clone this if you'd like. Um, I need to push the last change this. So, okay. So, um, yeah. Can you guys see this? Should I put it in dark mode instead or is this fine? Like, um,
</details>

**听众49**: 暗模式。

<details>
<summary>Original English</summary>

**Audience 49**: dark mode.
</details>

**Thariq Shihipar**: 暗模式。好的。好的。这样更好吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Dark mode. Okay. [laughter] Okay. Okay, this better.
</details>

**听众50**: 不。

<details>
<summary>Original English</summary>

**Audience 50**: No.
</details>

**Thariq Shihipar**: 你想要不同的暗模式吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: You want a different dark mode?
</details>

**听众51**: 暗硬。好的。我想这不会变得更好了，伙计们。嗯，好的。我，它怎么工作？你们还能听到我说话吗？

<details>
<summary>Original English</summary>

**Audience 51**: Dark hard. Okay. I don't think this as good as it's going to get, guys. Um, okay. I Is it How does this work? Can you guys still hear me or
</details>

### Pokemon智能体演示：工具与代码生成

**Thariq Shihipar**: 好的。嗯，好的。所以这里有一个例子，我给它的提示是：“嘿，去**PokeAPI**搜索它的API，并创建一个**TypeScript**库。”所以这都是通过代码生成的。所以你可以在这里看到它创建了这个**Pokemon**的接口，对吧？所以它创建了这个**Pokemon API**。我可以通过名字获取，我可以列出**Pokemon**，我可以获取所有**Pokemon**，我可以获取物种和能力之类的。所以这只是我给它的一个提示，对吧？它生成了这个**TypeScript** API。它也为招式做了同样的事情。嗯，然后它创建了这个，嗯，就像，它创建了这个API，我可以使用`import PokeAPI`，对吧？从**PokeAPI SDK**。而且，是的，你可以看到它是如何设置的。现在，相比之下，对吧？所以这是**Claude.md**，对吧？这是一个用于**PokeAPI**的**TypeScript SDK**。嗯，这是**PokeAPI**中的模块。这里有一些关键功能。嗯，嗯，我要求它在`examples`目录中编写脚本，然后它会执行这些脚本来帮助我进行查询，对吧？嗯，我给它一些示例脚本。它并不总是需要所有这些信息，对吧？比如，嗯，但是，是的，获取**Pokemon**，列出资源，获取数据之类的。所以这就像我的代理。它就像我给它的一个提示，用于生成**TypeScript**库，然后是这个**Claude.md**，我可以在**Claude Code**中与它聊天。我还会向你展示一个只使用工具的版本，对吧？所以在这里我正在使用消息完成API，对吧？我给了它一堆来自API的工具。所以像获取**Pokemon**，获取**Pokemon**物种，嗯，获取**Pokemon**能力，获取**Pokemon**类型，获取招式。所以你已经定义了所有这些工具，你可以看到，你知道，我也只是给了它一个提示，并告诉它制作工具。嗯，它不想制作100个工具，对吧？比如有很多**Smogon**，或者抱歉，嗯，**PokeAPI**数据。嗯，但是，你知道，它只能做这么多参数。所以它有了这个工具调用，现在，嗯，我制作了一个小的聊天界面。对。所以现在让我到这里，然后说，嗯，这是我的工具调用。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay. Um, okay. So here's an example of like I've taken the the prompt I gave it was hey I go search **Pokey API** for its API and create a **TypeScript** library right and so this is all by coded um and so you can see here that it's created this like interface for **Pokemon** right and so it's created like this **Pokemon API** I can get by name I can list **Pokemon** I can get all **Pokemon** I can get species and ability abilities and stuff like that. And so like this is just a prompt that I gave it, right? And it generated this like **TypeScript** API. It also did it for moves. Um and then it's created this um like uh it's created this like API that I can use `import PokeAPI` right from the **Poke API SDK**. And uh yeah, you can see like sort of how it's like set set this up. And uh now in contrast, right, and and so this is the **cloud. MB**, right? This is a **TypeScript SDK** for the **Pokey API**. Um, this is like the the modules in the **Pokey API**. Here are some of the key features. Um, uh, I'm asking it to write scripts in the `examples` directory and then it will execute those scripts to help me with my queries, right? Um, and I give it some example scripts. It doesn't always need all this information, right? Like, uh, but yeah, fetching **Pokemon**, listing the resources, getting data, things like that. So this is like my agent really. It's like a prompt I gave it to generate a **TypeScript** library and then this **cloud.md** and I I can chat with it in **cloud code**. I'll also show you a version of it that is just tools, right? So here I'm using the messages completion API, right? And I've given it a bunch of tools from the API. So like get **Pokemon**, get **Pokemon** species, uh get **Pokemon** ability, get **Pokemon** type, get move. So you've defined all of these tools and you can see that like you know I also just gave it a prompt and told it to make the tools. Um it doesn't want to make a 100 tools right like there's a ton of smoke on or sorry um **pokey API** data. Um but like it you know there's only so many parameters it can do. So it's got this like tool call and now um and I I made like a little chat interface with it. Right. So let me now go here and say like uh this is my tool calling. Um
</details>

**Thariq Shihipar**: 我……太棒了。所以，是的，这里我们有这个`chat.ts`，对吧？嗯，我使用**Bun**进行原型设计，只是因为我不想从**TypeScript**编译到**JavaScript**。嗯，而且，**Bun**内置了`linting`。嗯，这是一种为代理简化操作的方式，这样代理就不需要记住编译，但**TypeScript**更适合生成，因为它有类型，对吧？我将开始这个有趣的聊天，然后我将尝试，好的，第二代水系**Pokemon**有哪些？嗯，你会看到它开始搜索，我在这里记录了所有的工具调用。这非常非常重要，对吧？因为，比如它需要执行工具调用。所以你可以看到它正在做的是，它正在搜索一堆**Pokemon**。嗯，然后它告诉我，好的，这是第二代的水系**Pokemon**，对吧？它有**Toadile**、**Crocenoff**或**Alligator**。你可以看到它是如何思考的，比如在每个步骤之间，它都在思考之前的步骤。现在，比如，如果我想用**Claude Code**来做。我想我可能需要……

<details>
<summary>Original English</summary>

**Thariq Shihipar**: did I great. So yeah, here we've got this `chat.ts`, right? Um I I use **bun** when I'm prototyping stuff just cuz like I don't want to compile from **Typescript** to **JavaScript**. Um and uh again **bun** has like linting built into it. Uh it's a way of like simplifying for the agent so the agent doesn't need to remember to compile but **TypeScript** is better for generation because it has types right. I'm going to start this like fun chat and then I'm going to try like, okay, what are the generation two water **Pokemon**? Um, and you'll see that it's it's starting to like search and I'm logging all the tool calls here. This is very very important, right? Because like it needs to like do the tool calls. And so you can see that what it's doing is like it's searching a bunch of **Pokemon**. Um, and then it told me, okay, here are the water **Pokemon** for Gen 2, right? It's got **Toadile**, **Crocenoff**, or **alligator**. You can see sort of like how it's thought like in between each step, it's thinking through um the previous steps. Right now, like let's say that I want to do with **claw code**. I think I might need to
</details>

**Thariq Shihipar**: 嗯，我需要删除这个例子。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: uh I need to delete this example.
</details>

**听众52**: 嗯，哦，是的。

<details>
<summary>Original English</summary>

**Audience 52**: Um Oh, yeah.
</details>

**听众53**: 小问题。你如何记录工具调用？就像有一个参数你可以……

<details>
<summary>Original English</summary>

**Audience 53**: Small question. How do you log the the tool calls? It's like there's just an argument you can
</details>

**Thariq Shihipar**: 哦，是的，这，嗯，这就像在正常的API中，对吧？所以我只是，嗯，在模型中，每次它记录时，我都会调用这个，这在正常的**Anthropic API**中，嗯，在**SDK**中。我会回到**SDK**。嗯，它就像你只是记录每条系统消息。所以，嗯，只是在控制台日志中这样做。这有意义吗？是的。好的。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Oh yeah, this is um this is like in the normal API, right? So I just like uh in the model every time it logs it, I just call this this is in the like normal **anthropic API** um in the **SDK**. I I'll get back to get to the **SDK**. Um it's just like you just log every system message. So, um, just doing it in console logs. Does that make sense? or Yeah. Okay. Yeah.
</details>

**听众54**: 所以，所以你展示的那个聊天界面，它只是使用了常规API吗？

<details>
<summary>Original English</summary>

**Audience 54**: So, so that chat interface you were showing, is that just using the regular API or
</details>

**Thariq Shihipar**: 是的，它使用了常规API。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, that's using the regular API.
</details>

**听众54**: 所以不是**Agent SDK**？

<details>
<summary>Original English</summary>

**Audience 54**: So, not the agent **SK**,
</details>

**Thariq Shihipar**: 不是**Agent SDK**。是的。是的。所以，我在这里要做的是，嗯，我在这里要删除脚本，因为我不想让它作弊。嗯，但是，好的。所以，在这里，你知道，我只是打开**Claude Code**。我在这里创建了一堆文件。我将说：“你能告诉我所有第二代水系**Pokemon**吗？”嗯，然后我们会看看它能做什么，对吧？所以，嗯，我忘了我是否需要提示它写一个脚本之类的。我想它会没事的。我们会看看会发生什么。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: not the **agent SDK**. Yeah. Yeah. And so, what I'm going to do here is um here I'm going to delete the script because I don't want it to cheat. Um, but okay. So, here you know that um I've I'm just opening **cloud code**. I've created a bunch of files here. I'm going to say like, can you tell me all the generation 2 water **Pokemon**? Um, and then we'll see what it can do, right? So, um, [clears throat] I forget if I need to prompt it to write a script or something. I think it'll be fine. We'll see what happens.
</details>

**听众55**: 你介意去核心**SDK**文件，然后展示一下你谈到的获取上下文，然后行动，然后验证吗？你能展示一下代码中是如何配置工具描述的吗？

<details>
<summary>Original English</summary>

**Audience 55**: Do you mind going to the core **SDK** file and just showing you talked about getting context and then action and then verification? Can you show that in the code and how we're configuring the tool description?
</details>

**Thariq Shihipar**: 是的。所以，嗯，我们还没有做**SDK**部分。所以，到目前为止，我只是在**Claude Code**中放了一些API。是的。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So, uh, we haven't done the **SDK** part yet. So, so far I've just put put some APIs in **cloud code**. Yeah. Yeah.
</details>

**听众55**: 抱歉，我以为我错过了。

<details>
<summary>Original English</summary>

**Audience 55**: Sorry, I thought I missed that. That's
</details>

**Thariq Shihipar**: 是的。是的。是的。当然。好的。嗯，但是，是的。所以，好的。你可以在这里看到，嗯，它给了我更多，对吧？而且，嗯，是的，它给了我更多。所以，它说有20种水系**Pokemon**，对吧？我想这大致是对的。我，嗯，它做了什么？我想它只是知道。好的。那很有趣。实时演示。嗯，无论如何，嗯，是的，**Pokemon**有点超出分布，这，我想，是好事。但是，是的，它会做的是，它会尝试编写一个脚本，嗯，因为你不想让它思考太多，对吧？所以这里它就像，好的，我要做的是，嗯，让我们看看第二代水系**Pokemon**，它在哪里？好的。所以，是的，你可以在这里看到它知道，比如，好的，世代的开始。它获取这些，嗯，每个API。嗯，我想它决定不使用我预构建的API。嗯，然后，嗯，是的，然后运行它，对吧？所以，嗯，我想我需要改进**Claude.md**。但是无论如何，你可以看到它能够检查200多种**Pokemon**，然后检查它们的类型，你知道，获取它们的信息，对吧？所以这就像一个快速的例子，说明如何进行代码生成以及如何使用**Claude Code**来做，对吧？所以，嗯，我们会运行这个脚本，然后，嗯，嗯，继续，对吧？所以，嗯，它会给我输出，嗯，是的，基本上我想展示的是，让我们看看，我们大约还剩15分钟。嗯，

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Yeah. Yeah. Of course. Okay. Um, but yeah. So, okay. You can see here um it's it's given me a lot more, right? And um yeah, it's given me a lot more. So, it it it's it's saying there's 20 water **Pokemon**, right? And I think this is roughly right. I've like um uh what did it do? I think it just knows. Okay. That's funny. Live this. Um um anyways uh yeah **Pokemon** is slightly in distribution which is which is I I guess good [laughter] um but yeah so like what what it will do is like it will try and like write like a script and uh because you don't want it to think as much right so here it's like okay what I'm going to do is um let's see gen two water type **Pokemon** and where is it? Okay. So, yeah, you can see here it knows like, okay, the start of the generations. It fetches these uh per API. Um I guess this decided not to use like my pre-built API here. Um and then uh yeah, and and then runs it, right? So, um I think I need to like improve the **cloud. MV** for this. But anyways, you can see that like it's able to like check 200 plus **Pokémon** and then check for their type and and you know get their get their information, right? So this is like uh just a quick example on like how to do codegen and how to use **cloud code** to do it, right? So um we'll run this script and then like uh um like keep going, right? So, uh it will give me the output and um yeah, basically what I want to show, let's see, we have roughly 15 minutes left. Um
</details>

**听众56**: 玩**Pokemon**。

<details>
<summary>Original English</summary>

**Audience 56**: play **Pokemon**.
</details>

### Pokemon智能体演示：Claude Code实践

**Thariq Shihipar**: 玩**Pokemon**的时间。是的。是的。实际上，这是我正在考虑做的一个演示。嗯，**Claude Code**玩**Pokemon**。所以，比如，假设你想做一个代理版本的**Claude**玩**Pokemon**。你会怎么做？嗯，我想你会做的是，你会让它访问，嗯，ROM的内部内存，对吧？所以假设它想找到它的队伍，它可以在内存中搜索，而**Pokemon Red**是一个非常好的、经过逆向工程的游戏，对吧？所以它可以在内存中搜索，比如：“嘿，这些是**Pokemon**。嗯，这些是，我如何找出地图在哪里，我如何导航它。”对吧？所以这就像给读者的一个练习，如果你想尝试一下的话。就像，嗯，有一个**Node.js GBA**模拟器。嗯，我想我必须合法地说，你必须去购买**Pokemon Red**并尝试它。嗯，但是，是的，我想，嗯，是的，好例子。无论如何，这里，所以它已经获取了所有这些，它列出了它们所有的类型，而且，嗯，是的，你可以看到它是如何使用代码生成来完成这个的，对吧？所以，嗯，这是一个使用**Claude Code**进行原型设计的快速例子。嗯，现在这里可能有更多有趣的数据。所以，嗯，我想留出时间给例子。所以我想我只会，嗯，回答问题。所以我只会，嗯，浏览一个例子。假设你正在制作竞技**Pokemon**。竞技**Pokemon**有很多不同的变量和数据。所以，这就像一个文本文件，来自这个在线的，比如一个库，它基本上存储了所有**Pokemon**以及它们的招式，以及它们与谁配合得好，与谁配合得不好，你知道，以及它们被谁克制，以及所有这些东西，对吧？所以这里有很多数据，对吧？而且它都在文本文件中。嗯，这实际上对**Claude Code**来说非常好，对吧？因为我可以说：“好的，嗯，嘿，我将给它更多的数据。通常，我把这个放在，嗯，检查数据文件夹中。告诉我，我想围绕**Venusaur**组建一个团队。你能根据**Smogon**数据给我一些建议吗？”嗯，**Smogon**就像这个在线API。所以，我，我还不完全确定它会在这里做什么。我以前没有做过这个查询。嗯，但我们会看看。我想它会很有趣。嗯，我在哪里？哦，我明白了。嗯，是的。但我想做的是，嗯，处理这些数据，对吧？然后，嗯，从第一性原理中找出，在没有见过这些数据的情况下，我如何回答我的查询，对吧？所以，嗯，当它做这些的时候，我会回答任何问题。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: play **Pokemon**. The time play **Pokemon**. Yeah. Yeah. Actually, this is one of the demos I was thinking of doing. Um **Cloud Code** plays **Pokemon**. So, like let's say you want to do like an agentic version of **Cloud Plays Pokemon**. How would you do it? um what you would do I think is like you would give it access to the internal memory of the uh the ROM right and so let's say that it wanted to find its party it could search that in memory and **Pokémon Red** is like a very well in distribution uh reverse engineered uh game right and so it could search in memory to be like hey these are the **Pokemon** um these are like this is how I figure out where the map is this how I navigate it right so this is like maybe exercise to the reader if you want to try it out. It's like um there is like a **no.js GBA emulator**. Um I think I have to legally say you have to go buy **Pokemon Red** and try it. Um but yeah, I think like uh yeah, good example. Anyways, here so it's it's fetched all of them and it's listed all their types and um yeah, you can see how it's like used code generation to do this, right? So um a quick example of using **cloud code** to prototype this. Um now there can be like more interesting like data here. So um I do want to leave time for example. So I think I'll just sort of like for questions. So I'll just sort of go through like an example. Let's say you're making competitive **Pokemon**. Competitive **Pokemon** has a lot of different variables and data. So, this is like a a text file from this online like a library basically which stores like all of the **Pokemon** and their like moves and who they work well with and don't work well with and you know like who they're countered by and all of these things, right? So, there's a ton of data here, right? And it's all in text file. Um, which is actually pretty good for **cloud code**, right? because I can say like, okay, um, hey, I'm going to give it a little bit more data. Normally, I put this in the, um, check the data folder. Tell me, I I want to make a team around **Venusaur**. Can you give me some suggestions based on the **Smogon** data? Um, and **Smoke** on is like this online API. And so I'm I'm not entirely sure what it'll do here yet. I haven't done this query before. Uh, but we'll see. I think it'll be it'll be fun. Um, where am I? Oh, I see. Um, yeah. But what I wanted to do is sort of grapple through this this data, right? And and sort of figure out from itself from first principles, not having seen this data before, how can I like answer my query, right? So um while it does does that I'll I'll take any questions. Yeah.
</details>

**听众57**: 嗯，首先，干得好。所以这就像真的在**Claude Code**之上。所以我的问题是，如果我们将其部署给客户，基本上我们是否应该让**Claude Code**在一个集群中运行，还是我们能够以某种方式将**Claude Code**部分移除，只留下机器人和**Agent SDK**？

<details>
<summary>Original English</summary>

**Audience 57**: Um first of all great work job. Uh so this is like really on top of **cloud code** and so my question is if we were to deploy this customer basically are we supposed to have **cloud code** running in like a like a swarm or are we somehow able to take the **cloud code** part out just bot and the **agent SDK**?
</details>

### 智能体部署与Agent SDK结构

**Thariq Shihipar**: 是的。所以，让我非常快速地向你展示这里使用**Agent SDK**是什么样子。嗯，所以我已经完成了这个文件系统，对吧？再次，我希望你将文件系统视为一种进行上下文工程的方式，对吧？这就像代理的许多输入。所以，我的实际代理文件大约有50行，对吧？嗯，它大部分只是随机的样板代码，对吧？我想，是的，它决定阻止它在自定义脚本目录之外编写脚本。再次，完全是后端编码。所以，嗯，是的，你可以看到它只是运行这个查询，获取工作目录，嗯，而且，嗯，它以循环方式运行它，对吧？所以，我可能想在这里添加一些允许的工具之类的，但它非常简单。所以，嗯，如果我要将其投入生产，我做的第一步是，好的，我已经在**Claude Code**上测试过了。它看起来运行得很好。我编写这个文件。然后我把它放在那里，有两种方法可以做到。所以，一种是，我确实认为本地应用程序可能会随着AI的出现而回归，因为我认为运行它有很大的开销。比如，**Claude Code**是一个前端应用程序，对吧？它在你的电脑上运行。所以也许我将其作为**Pokemon**应用程序的方式是，嘿，我有一个你安装的应用程序，它在你的电脑上本地运行，并编写脚本。我想那是一种方式，对吧？嗯，另一种方式是，是的，你将其托管在沙盒中。嗯，再次，有很多不同的沙盒提供商，它们使它变得非常容易，比如**Cloudflare**有一个很好的例子，嗯，使用**Agent SDK**，它就像`sandbox.st start`，你知道，然后像`bun agent.ts`，这就是它所需要的一切，对吧？它就像，它们已经抽象掉了大部分。嗯，所以你运行沙盒，嗯，然后你与它通信，嗯，是的，我想有一些非常有趣的东西，我不确定我是否有时间去讲，但是，嗯，我想一些有趣的问题是，嗯，是的，比如你如何做这种服务，现在你只是为每个用户启动一个子沙盒。嗯，这里有很多，我想说，最佳实践需要解决。我只想提醒你们思考一件事，嗯，如果你正在制作一个带有UI的代理，比如，假设你有一个，是的，我的**Pokemon**代理，我希望它有一个可以适应用户的UI，对吧？比如，有些用户正在组建团队，有些用户正在帮助它玩游戏，有些用户只是想要**Pokemon**的图片。我如何让一个代理实时适应我的用户呢？对吧？嗯，我会这样做，在我的沙盒中，我会有一个开发服务器，对吧？开发服务器会暴露一个端口。嗯，它会在**Bun**或**Node**之类的东西上运行。它会暴露一个端口。代理可以编辑代码，它会实时刷新，你的用户会与那个网站交互。很多网站构建器，比如**Lovable**之类的，就是这样工作的，对吧？它们使用沙盒，它们基本上托管一个开发服务器。所以，如果你想要一个自定义界面，为你的用户思考这个问题是一个很好的方法。嗯，好的，让我们看看。让我们看看它做了什么。嗯，好的，酷。好的。所以，嗯，它编写了这个脚本，生成了一些基本数据，并建议了一个招式组合和一些队友，你可以看到，嗯，它做了什么？嗯，`Ctrl+E`。嗯，是的。好的。好的。所以，你可以在这里看到它开始搜索**Venusaur**，对吧？它开始查找那些类型，那些**Pokemon**，当它这样做时，它还会获取其他提到**Venusaur**的**Pokemon**。所以它会获取它的队友和它的克制者之类的，对吧？它在这段时间里找到了一些有趣的**Pokemon**，对吧？它可能与它们一起工作，对吧？所以它做了很多这样的搜索，它获取了这些资料。它找到了最常见的队友，并编写了一个脚本来分析它，对吧？所以这都是基于一个文本文件。当然，我可以对文本文件进行更多预处理。嗯，但是，是的，它就像为我做了这种有趣的分析，对吧？再次，我将把更多代码推送到**GitHub**仓库。而且，嗯，我也会在Twitter上发推文。我的Twitter账号是**TRQ212**。嗯，我发了很多推文。所以，嗯，绝对是，主要关于**Agent SDK**的东西。嗯，但是，是的，我们大约还剩8分钟，所以我想把剩下的时间用来回答任何问题，你知道，我很抱歉我们没有做更多的原型设计。嗯，但是，嗯，是的，那边那位。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. So, let me show you like very quickly like what the what it looks like to use the **agent SDK** here. Um, so I've already done this file system, right? And again, I want you to think about the file system as a way of doing context engineering, right? Like this is like a lot of the inputs into the agent. So, my actual agent file is like 50 lines, right? Um, and it's mostly just like random like boiler plate, right? Like I guess, yeah, it's decided to stop it from uh writing scripts outside of the custom scripts directory. Again, fully backcoded. So, um yeah, you can see like it just runs this query, takes in the working directory um and uh like like runs it in a loop, right? And so probably I'd want to like turn into like some allowed tools here and stuff, but it it's very simple. And and so um if I were to like productionize this, the first step I do is like okay, I I've tested it on **cloud cloud code**. It seems to do pretty well. I write this file. Then I put it there are two ways to do it. So one is I do think that like local apps might be coming back with AI because I think that like there's such an overhead to running it. Like for example, **cloud code** is a front-end app, right? Like it works on your computer. So maybe the way I shift this as a **Pokemon** app is like hey I have like an app that you install and it works locally on your computer and writing scripts. I think that's one way of doing it, right? Um the other way is yeah you have you [clears throat] host it in a sandbox. Um and again there's a bunch of different sandbox providers that make it really easy like **Cloudflare** has a good example um of using the **agent SDK** and it's just like `sandbox.st start` you know and then like `bun agent.ts` ts and that's kind of all it takes, right? Like it's like like they've abstracted away a lot of it. Um so you run like the sandbox um and then you communicate with it and um yeah I think there is like some very interesting stuff that I'm not sure I had time to get to but um like I I think some interesting questions are like um yeah like how do you do this sort of like service now you're just spinning up a sub like a sandbox per user. Um, there's a lot of like I'd say best practices to solve here. One thing I just want to call out for you guys to think about, um, if you're making a an agent with a UI, like let's say that you have, uh, yeah, my **Pokemon** agent and I wanted to have an UI that is adaptable to the user, right? Like maybe some users are doing team building, some users are helping it with their game, some users just want pictures of **Pokemon**. How would how would I have an agent that adapts in in real time to my user, right? Um the way I would do it is in my sandbox, I would have a dev server, right? And the dev server would expose a port. Um it would run on **bun** or **node** or something. It would like expose a port. The agent could edit code and it would live refresh and and your user would be interacting with that website. This is how a lot of like site builders like **lovable** and stuff work, right? they they use sandboxes and they host essentially a dev server. And so thinking about this for your users, if you want a customized interface, this is a great way to do it. Um, okay, let's see. Let's see what it did. Um, okay, cool. Okay. So, um it's like written this like script has generated like show me some base stats and suggested it a like um uh a move set and some teammates and you can see sort of like see what did it do? Um `control E`. Um yeah. Okay. Okay. So, you can see here what it started doing is is like it started searching for **Venusaur**, right? And it started finding uh those types the like those **Pokemon** and when it does that it also gets other **Pokemon** that mentioned **Venusaur**. So, it gets like its teammates and it counters and stuff, right? And it's sort of over this time found interesting **Pokemon**, right, that like it might work with, right? So, it's done a bunch of these searches and it's gone these profile. It's found most common teammates and and written a script to to analyze it, right? And so this is all based on a text file. Of course, I could have pre-processed a text file a little bit more. Um, but yeah, it's like done this sort of like interesting um analysis for me, right? And again, I'll I'll push out more code to the **GitHub** repo. And um I'll also tweet about this. I'm on Twitter. I'm uh **TRQ212**. Uh I tweet a lot. So, uh, definitely like mostly about **agent SDK** stuff. Um, but yeah, we have about 8 minutes left, so I want to spend the rest of time taking questions about kind of anything, you know, and I'm sorry we didn't get to do more prototyping. Um, but, uh, yeah, over there.
</details>

**听众58**: 是的，我想说这是一个缺陷。你能，嗯，把它插入到那个里面，只是为了看看代理是否会，嗯，对它试图捕获的团队更具选择性吗？

<details>
<summary>Original English</summary>

**Audience 58**: Yeah, I was going to say it's a flaw play. Can you uh sort of plug this in with that just to see if the agent will uh be more selective with the team it uh tries to capture?
</details>

**Thariq Shihipar**: 是的，把它放到**Claude Play's Pokemon**中。是的。是的，我确实想玩**Claude Code Plays Pokemon**。我想那会很有趣。是的。是的。我想**Claude Plays Pokemon**。我想我们尽量让它尽可能是一个纯粹的推理任务。是的。嗯，还有其他问题吗？是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, put it in in **Cloud Play's Pokemon**. Yeah. Yeah, I do want to play **CL codeplays Pokemon**. I think that would be fun. Yeah. Yeah. I I think **cloud plays Pokemon**. I think we try and keep it like a pure reasoning task as much as possible. Yeah. Um other questions? Yeah.
</details>

**听众59**: 我很好奇人们是如何通过这种方式赚钱的，你知道，你有点失去了获得所有利润的机会。

<details>
<summary>Original English</summary>

**Audience 59**: I was curious about how people are monetizing like you know kind of like you kind of like lose the opportunity to get all the margins.
</details>

**听众60**: 是的。我很好奇，比如，发布你自己的**SDK**，这样他们就可以利用使用量。

<details>
<summary>Original English</summary>

**Audience 60**: Yeah. I'm curious like shipping your own **SDK** so that they kind of take the usage base.
</details>

### 智能体商业化与定价

**Thariq Shihipar**: 是的。我确实认为总的来说，尤其是在现在，代理有点昂贵，你明白我的意思吗？因为，嗯，模型刚刚开始具备代理能力。我们真正专注于拥有最智能的模型，你知道，而且，你知道，通常这就像一个整体的SaaS业务软件。你宁愿向少数人收取更多的钱，他们真正有一个难题，你知道吗？所以我想这仍然很好。比如你可能应该找到，嗯，你知道这些困难的用例，但我想说，第一，确保你正在解决人们愿意付费的问题，对吧？这是第一步，对吧？然后第二，嗯，是的，我想你可以做订阅或基于令牌的。我想这有点取决于你期望人们使用你的产品多少，嗯，与你期望他们偶尔使用它的频率相比，比如**Claude Code**显然人们使用很多，为了，比如我们做了一个混合，如果我们给你一些速率限制，如果你超过了，我们就会做基于使用量的定价。嗯，我想，是的，这非常取决于你自己的用户群以及他们会做什么，但我想说，商业化是你应该提前考虑并围绕你的代理进行设计的事情，因为这些承诺很难收回。嗯，是的，后面那位。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. I I do think overall, especially right now, agents are kind of pricey, you know what I mean? Because like um the models are have just started to get agentic. We really focus on like having the most intelligent models, you know, and like you generally this is just like an overall like SAS business software thing. You'd rather charge fewer people more money that really have like a hard problem, you know? And so I think this is still good. like you probably should find um you know these hard use cases but I would say like number one make sure you're solving a problem that people want to pay for right is like the number one step right and then number two um yeah I think you could do subscription or token based I I think this kind of comes down to like how much you expect people to use your product uh versus like how much you expect them to like use it occasionally like **cloud code** obviously people use a lot and in order to like we do a mix of like if we give you some rate limits and if you exceed it we do uh usage based pricing. Um I think that like yeah it's very like dependent on your own user base and kind of like what they will do but I will say monetization is something you should think about up front and design your you know agent around because it's hard to walk back these promises. Um, yeah, back there.
</details>

**听众61**: 我完全没有听到你谈论钩子，我很想听听你对钩子的看法。

<details>
<summary>Original English</summary>

**Audience 61**: I haven't heard you talk at all about hooks and be curious to hear your take on how
</details>

### 钩子（Hooks）的应用

**Thariq Shihipar**: 嗯，是的，有很多东西要谈。嗯，钩子很棒。我们确实提供了钩子。嗯，钩子是一种进行确定性验证，或者特别是插入上下文的方式。所以，嗯，你知道，我们以事件的形式触发这些钩子，你可以在**Agent SDK**中注册它们。有一个关于如何做到的指南。嗯，你可能会使用钩子的例子是，比如，嗯，是的，你可以每次运行它来验证电子表格。嗯，你也可以，比如我正在与一个代理合作，而且，嗯，代理正在进行一些电子表格操作，用户也更改了电子表格。这是一个使用钩子的有趣地方，因为你可以说：“嘿，在每次工具调用之后，插入用户所做的更改。”嗯，所以你正在以一种有趣的方式给它实时上下文更改。所以，嗯，是的，我想，嗯，是的，文档中还有更多关于钩子的内容，嗯，也很乐意之后再谈论它。是的，更多问题。是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: uh Yeah, there's so much to talk about. Um, hooks are great. We we do ship with hooks. Um, hooks are a way of doing deterministic verification in particular or inserting context. So, um, you know, we fire these hooks as events and you can register them in the in the **agent SDK**. There's like a guide on how to do that. Um, examples of things you might use hooks for is like for example, um, yeah, you can run it to verify the like a spreadsheet each time. Uh, you can also like let's say I'm working with an agent and, uh, I'm the agent is doing some spreadsheet operations and the user has also changed the spreadsheet. This is an interesting like place to use a hook because you can be like hey has after every tool call insert changes that the user has made uh and and so you're giving it kind of live context changes um in an interesting way. So um yeah I think uh uh yeah there there's more stuff on like the docs about hooks um and happy to like talk about it afterwards as well. Yeah, more questions. Yeah.
</details>

**听众62**: 就像我做的那样。

<details>
<summary>Original English</summary>

**Audience 62**: like I do in
</details>

**听众63**: 我意识到它正在工作。我想把我已经完成的对话，因为我正在经历，并将其转换成一个新的，好的，那就是我遵循了一些步骤，现在它实际上正在工作，但我不想重写所有代码来编写它，因为它可以工作。

<details>
<summary>Original English</summary>

**Audience 63**: I realize it's working. I want to take the same conversation that I've already done because I'm going through and convert that into a new okay which is that I followed a few steps now it's actually working but I don't want to rewrite all of the code to write [clears throat] it like because it works.
</details>

### 原型到生产代码的转换

**Thariq Shihipar**: 是的。当然。是的。所以，比如，假设你已经完成了这个原型设计，你发现了一些有效的东西。我会做的是，比如，我，**Claude MD**的某个地方，显然，当我尝试做这个一次时，它没有直接使用我的API，它编写了**JavaScript**。我应该在我的**Claude.md**中更具体一点，比如：“嘿，你应该使用这个。”嗯，是的，我想那是一件事。嗯，第二件事是，嗯，是的，用术语总结，拥有你需要的辅助脚本，然后，比如编写像这个`agent.ts`脚本来再次运行测试。嗯，是的，还有更多问题。嗯，是的，我只是放了一个**Pokemon**，我想它在谎报使用脚本的答案。它尝试了几次，比如我的**SDK**不是很好，它尝试了两次，然后它说：“哦，这是你的比较表。”但这只是因为它是一个分布。你对这类问题有什么建议吗？

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah. Sure. Yeah. So like let's say you've done this prototyping, you found something that works. What I would do is like I somewhere the **cloud MD** like obviously like when I tried doing this one time it like didn't use my API directly and it wrote **JavaScript**. I should have been more specific in my **cloud. Mmd** to be like hey you should use this. Um [snorts] I yeah I think like that's one thing. Um the second thing is uh yeah do summarize in terms have the helper scripts that you need and then like write something like this `agent.ts` script for like to run the test again. Uh yeah more questions in the grade. Uh yeah, I just put it a **Pokemon** and I think it's lying about using the scripts answer. It tries a couple times like my **SDK** isn't very good it tries twice and then it's like oh here's your comparison table but it's just because it's a distribution. Do you have any advice for that kind of problem?
</details>

### 智能体“撒谎”与问题解决

**Thariq Shihipar**: 是的，这是一个好问题，而且，你知道，我想，我想确实有一些混乱，对吧？我想，如果一个代理知道一个答案，嗯，而你想，比如，有点对抗它，比如：“好的，不，现在是第九代了，**Venusaur**的数据已经改变了，而且有这个新的，比如特征。”嗯，这很难。我实际上认为，嗯，一种方法是使用钩子。所以你可以说，例如：“嘿，嗯，如果它在没有编写脚本的情况下返回了响应，你知道，你可以检查一下，你可以像给出反馈一样，比如请确保你编写了脚本，请确保你读取了这些数据。”对吧？你可以使用钩子来给出反馈，就像在**Claude Code**中，我们有这些规则，比如：“确保你在写入文件之前读取了它。”对吧？所以添加一些确定性。嗯，它肯定会像我说的，它是一门艺术，你知道，有时，你知道，是的，也许就像，比如写作课程，我想大概是吧。嗯，是的，还有那位穿灰色衣服的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Yeah, this is a good question and and you know like I'm I think there is some messiness, right? Like I I think one of the things if an agent knows an answer um and you want to like sort of like fight it kind of to be like okay like no it's generation 9 now and like **Venusaur** stats have changed and there's like this new like charact like um this is hard I actually think uh one of the ways of doing that is hooks. So you can say for example like hey uh don't if if you've like returned a response without writing a script you know you can check that you can be like give feedback to bit like please make sure you write a script please make sure you read this data right and and you can use hooks to like give that feedback in in the same way that in **cloud code** uh we have these like rules like make sure you read a file before you write to it right so add some determinism uh it can definitely be like I said it's an art you know sometimes you know yeah maybe like like writing course I guess probably um [laughter] yeah and the gray
</details>

**听众64**: 你们是如何处理大型代码库的？我正在处理一个超过5000万行的代码库，所以**grep**工具真的不起作用。嗯，所以我不得不构建自己的语义索引之类的东西来帮助解决这个问题，对吧？**Anthropic**有没有考虑过如何让这更原生于产品？比如，你知道，几个月后我正在编写的东西会不会就消失了？或者你们是如何思考的？

<details>
<summary>Original English</summary>

**Audience 64**: how are you guys dealing with like large code bases I'm working like a 50 million plus code base and so bre tool doesn't work really um so I'm having to build like my own like semantic indexing type thing to kind of help with that right is there any kind of like addthropic maybe thinking about how that can be more native to the product like you know in a couple months is the thing I'm writing just going to go away or like how how do you guys think about
</details>

### 大型代码库管理与语义搜索

**Thariq Shihipar**: 好的，你的最后一个问题是，几个月后你正在思考的东西会消失吗？通常。是的。是的。每次你问AI，是的。嗯，我想，嗯，语义搜索，这更像是一个**Claude Code**问题，而不是一个安全问题，但我很乐意回答。比如，嗯，我们，你知道，语义搜索有权衡。它更脆弱。嗯，我想你必须索引，而且，而且搜索，我们，模型没有经过语义搜索的训练，所以我想那有点像一个问题，你知道，`grep`，它经过了训练，因为它很容易做到，但是像语义搜索，你正在实现你的定制查询，嗯，对于非常大的代码库，你知道，我们有很多客户在大型代码库中工作，我想我看到的是，他们只是做好的**Claude.md**，你从你想要的目录开始，拥有好的验证步骤和钩子和链接之类的东西。所以，你知道，这就是我们所做的。我们没有，你知道，一个自定义的，我们内部使用**Claude Code**，对吧？所以，嗯，是的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Okay, your last question in a couple months is you're thinking to go away generally. Yes. Yeah. [laughter] Anytime you ask about AI, yeah. Uh I think that um semantic search this is a **cloud code** question more than a security question, but happy to answer it. Like um we you know there are trade-offs of semantic search. It's more brittle. Um I think you have to like index and and and search and we it's not necessar the model is not trained on semantic search and so I think that's sort of like a problem like you know `grap` it's trained on because it's like it's easy to do that but like semantic search you're implementing your bespoke query um for like very large code bases you know we have lots of customers that work in large code bases I think what I've seen is sort of like they just do like good **claw mds** you start in you know trying Make sure you start in the directory you want, have like good like verification steps and hooks and links and things like that. And so u you know that's what we do. We don't have you know a custom we dog food **clunk code**, right? So um yeah.
</details>

**听众65**: 好的。是的。最后一个问题。

<details>
<summary>Original English</summary>

**Audience 65**: Okay. Yeah. Last question.
</details>

**Thariq Shihipar**: 我们不得不结束了，不幸的是。大家为**Thariq**鼓掌。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: We have to close unfortunately actually. Give it up for **Tariq** everyone. [applause] [music]
</details>

**Thariq Shihipar**: 好的。

<details>
<summary>Original English</summary>

**Thariq Shihipar**: Heat.
</details>