---
author: AI Engineer
date: '2025-11-24'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=kWOQS3XPZ10
speaker: AI Engineer
tags:
  - coding-agents
  - developer-preferences
  - meta-neuro-symbolic-rl
  - ai-code-generation
  - continuous-learning
title: Command Code：一个能学习你编程品味的AI编码代理
summary: Command Code是一个创新的AI编码代理，由Ahmad Awais及其团队开发，旨在解决现有大型语言模型（LLMs）在代码生成中缺乏个性化“品味”的问题。它通过元神经符号强化学习，持续学习开发者的编码偏好、架构选择和隐式反馈，从而生成高度定制化、可维护且符合个人风格的代码。Command Code的目标是大幅提升开发效率，减少代码审查时间，并允许开发者共享或借鉴他人的编程“品味”，开启编码代理的新篇章。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - entrepreneurship
  - vibe-coding
people:
  - Ahmad Awais
  - Greg Brockman
  - Tanner Linsley
companies_orgs:
  - Command Code
  - Langbase
  - NASA
  - GitHub
products_models:
  - GPT-3
  - ChatGPT
  - GitHub Copilot
  - Claude
  - VS Code
  - Vitest
  - PNPM
  - Commander
  - Meow
  - Next.js
  - TenStack
  - TUP
media_books:
  - stateofiagents.com
  - Stack Overflow
status: evergreen
---
### 介绍Command Code：一个有“品味”的AI编码代理

大家好！今天我非常激动地向大家发布并分享我们已经为此努力了一年多的成果，它叫做**Command Code**（一个带有“品味”的AI编码代理）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, hello there. Today I am really, really excited to both launch and share with you what we have been working on for maybe over an year now. It's called Command Code, a coding agent with taste.</p>
</details>

我是**Ahmad Awais**，Command Code的创始人，也是**Langbase**（一家专注于AI开发工具的公司）的首席执行官兼创始人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, who am I? Um, I am Ahmed, creator of Command Code, CEO and founder of Langbase.</p>
</details>

我从事这个领域大约20年了，一直在不断地创造。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I've been around this blog for I don't know like 20 years building one thing after another.</p>
</details>

我编写了数百个开源软件包，下载量达数百万次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've written hundreds of open source packages with millions of downloads.</p>
</details>

也许你喜欢我的“紫色代码主题”（shades of purple code theme）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you like my shades of purple code theme.</p>
</details>

我喜欢紫色，归根结底，我是一名工程师，我编写了大量的代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love the color purple and I I've I'm I'm an engineer at the end of the day. I write a lot of code and I've been building in the LLM space for about five years now.</p>
</details>

我已经在**LLM**（Large Language Model: 大型语言模型）领域构建了大约五年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've been building in the LLM space for about five years now.</p>
</details>

我实际上构建的第一个工具之一就是一个编码代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I think the one of the first tools that I actually ended up building was a coding agent and at the end of the day like I'm very technical.</p>
</details>

我非常注重技术，曾为**NASA**（美国国家航空航天局）的火星直升机任务做出贡献，我的代码现在运行在火星上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got to contribute to the NASA Mars Engineer helicopter mission. My code lives on Mars.</p>
</details>

所以，当我编写代码时，无论我使用什么LLM或编码代理，我都希望它能向我学习。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when I'm writing code, no matter what LLM or what coding agent I'm using, I want it to learn from me.</p>
</details>

我希望它能学习我如何编辑它的代码，理解我的偏好，并持续适应我所拥有的这种“无形选择架构”中的偏好设置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to I wanted to learn that how I am editing its code. I wanted to understand my preferences and continuously adopt to that uh you know preference set in invisible architecture of choices that I have and that is what I'm excited to demo today. Right?</p>
</details>

这正是我今天很高兴演示的内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that is what I'm excited to demo today. Right?</p>
</details>

这个故事实际上始于2020年，当时**Greg Brockman**（OpenAI的联合创始人）给了我**GPT-3**的访问权限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh the story actually begins in 2020 uh when Greg Brookkeman gives me access to GP3 and I tell him like the one of the first things this is like three years before chat GPD and a year before uh you know GitHub copilot I tell him that I want to build something with GP3 that suggests suggests the next line of code right so let's jump into a demo right away right let's let's look at what this actually looks like and then I'll I'll probably explain you know how we ended up here so on</p>
</details>

我告诉他，我最想做的第一件事就是用GPT-3构建一个能建议下一行代码的工具，这比**ChatGPT**早了三年，比**GitHub Copilot**早了一年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I tell him like the one of the first things this is like three years before chat GPD and a year before uh you know GitHub copilot I tell him that I want to build something with GP3 that suggests suggests the next line of code right so let's jump into a demo right away right let's let's look at what this actually looks like and then I'll I'll probably explain you know how we ended up here so on</p>
</details>

### Command Code的实际演示：学习你的编码“品味”

我们直接进入演示，看看它实际是什么样子，然后我再解释我们是如何走到这一步的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's jump into a demo right away, right? Let's let's look at what this actually looks like and then I'll I'll probably explain you know how we ended up here.</p>
</details>

在左边，你看到的是**Claude**的代码，而这就是我们正在构建的**Command Code**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on On the left here you see uh you know cloud code and this is command code right this is what we are building.</p>
</details>

如你所见，它正在持续学习，我们称之为“品味在线”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see it is continuously learning taste is on this is what we call it and uh I've been building a lot of CLI as you know like you know if you know anything about me you know that I'm all about automation and I have been building a lot of you know CLI over the course of my career so let's uh build a CLI and command here actually knows how I built a CLI yesterday right or before that it kind of understands my preferences of building a CLI. So let's give both of them uh this thing right uh make me a CLI that can tell date in ISO format</p>
</details>

我一直在构建大量的**CLI**（Command Line Interface: 命令行界面）工具，如果你了解我，就知道我热衷于自动化，并且在我的职业生涯中构建了许多CLI。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh I've been building a lot of CLI as you know like you know if you know anything about me you know that I'm all about automation and I have been building a lot of you know CLI over the course of my career.</p>
</details>

所以，让我们构建一个CLI。Command Code实际上知道我昨天或之前是如何构建CLI的，它了解我构建CLI的偏好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's uh build a CLI and command here actually knows how I built a CLI yesterday right or before that it kind of understands my preferences of building a CLI.</p>
</details>

我们给这两个编码代理一个任务：“给我一个能以**ISO format**（International Organization for Standardization: 国际标准化组织日期格式）显示日期的CLI。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's give both of them uh this thing right uh make me a CLI that can tell date in ISO format.</p>
</details>

看看这里发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right so look at what is happening here.</p>
</details>

首先，Command Code会识别我的测试文件，我稍后会分享更多细节。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one of the first things that happen here is uh command kind of picks up on my test file and I'm I'm going to share a little bit more about it but you see what is happening here and I'm going to probably you know enable all these settings so let's give both of these coding agents uh you know a steps on and you can see what command is doing it's it's using t-up it's using uh typescript and it's uh building an ASI art you know banner it's npm linking uh it's going to help LPM link this particular CLI as well and the these are all the things that I kind of care about and while cloud has done something really good it it's very fast but h I don't know man this is not what I wanted it's like a console log of uh uh this or that like I I I I I when I build a CLI, I don't want to build a CLI, you know, a CLI like this. I I want to build something like, you know, please uh use uh Typescript and I want TUP, right? Um and what else? I want uh Commander because I like to uh you know have more control over my CLIs. And what else? I want a lowercase uh version number uh with hyphen-v because I know you know commander does this hyphen capital v thing like I have so many preferences here and by this time uh command has already done what I wanted it to do. How about we actually jump uh into code and see you know what it has actually done right let let's let's open this up into VS code</p>
</details>

我们可以看到Command Code正在做什么：它使用了**TUP**（一个工具或库），它使用了**TypeScript**（一种由微软开发的开源编程语言），它正在构建一个ASCII艺术横幅，并且正在进行**npm link**（Node Package Manager: Node.js 包管理器中的一个命令，用于将本地包链接到全局或另一个项目的 `node_modules` 目录）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see what command is doing it's it's using t-up it's using uh typescript and it's uh building an ASI art you know banner it's npm linking uh it's going to help LPM link this particular CLI as well and the these are all the things that I kind of care about.</p>
</details>

这些都是我非常关心的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the these are all the things that I kind of care about.</p>
</details>

虽然Claude做得很好，速度也很快，但这不是我想要的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And while cloud has done something really good it it's very fast but h I don't know man this is not what I wanted it's like a console log of uh uh this or that like I I I I I when I build a CLI, I don't want to build a CLI, you know, a CLI like this.</p>
</details>

我构建CLI时，不希望它像这样简单地输出到控制台。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I build a CLI, I don't want to build a CLI, you know, a CLI like this.</p>
</details>

我希望它使用TypeScript和TUP。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">I I want to build something like, you know, please uh use uh Typescript and I want TUP, right?</p>
</details>

我还希望它使用**Commander**（一个Node.js命令行界面框架），因为我喜欢对我的CLI有更多的控制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and what else? I want uh Commander because I like to uh you know have more control over my CLIs.</p>
</details>

我还想要一个带有小写“-v”的版本号，因为我知道Commander会使用大写“-V”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what else? I want a lowercase uh version number uh with hyphen-v because I know you know commander does this hyphen capital v thing like I have so many preferences here and by this time uh command has already done what I wanted it to do.</p>
</details>

我有这么多偏好，而Command Code已经完成了我想要它做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have so many preferences here and by this time uh command has already done what I wanted it to do.</p>
</details>

我们来看看它实际做了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How about we actually jump uh into code and see you know what it has actually done right let let's let's open this up into VS code.</p>
</details>

我们用**VS Code**（Visual Studio Code: 一款由微软开发的免费开源代码编辑器）打开它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's open this up into VS Code.</p>
</details>

这就是Command Code为我做的：它使用了TUP和TypeScript，它知道我偏爱**pnpm**（performant npm: 一种快速、节省磁盘空间的包管理器），我完全忘了告诉Claude这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what command did for me right so it is using tap it is using typescript it knows pmppn uh that I prefer pnpm uh I completely forgot to tell that to uh claude and if we go into this particular uh CLI here uh you can see what it is kind kind of doing right like it is using hyphen-v uh for version it is not like hard coding a package version in here and one more thing it should have picked up is like I want all of these commands to be in separate directory called commands so there you go the date command is here so when I grow this CLI into like you know tell me human date or whatnot it is going to put all of these commands here it's very very easy to test that way I wonder if it is also using vitest there you go because I prefer Vest for uh you know writing uh a lot of tests and one of the those things you know it it is using 0 0.0.1 version I like to start here instead of 1.0.0 right and that is probably not what you know uh uh claude was doing on this side right if I were to open the same uh CLI that claude built for me you will see that you know 1.0 O and it's like again not using vit like every single preference that I have it is probably not going to do that and then again this thing everything is here I don't want it like this uh this is kind of again it cla knows cloud is a is an amazing model but it knows what to do and with command right now we are also using cloud but it's it's kind of like I have to steer it so much that I kind of feel like it should be learning from me and by the way it's it is quite transparent And if you look at this, we have a command code folder in here. And if you see in here, there's a taste file. And if you go inside of it, there's a, you know, CLI taste that it has picked up. And these are all my preferences. I can assure you, none of this is written by me. So command code is continuously learning from me and it is creating a lot of these taste like things. This is not spec. This is not scale. It's like my intuition uh built into a metaano symbolic uh model, an architecture model that is more deterministic that kind of figures out it's more like a reix of my preferences and it figures out like this is what I want when I'm using and building uh you know with uh writing with AI code or whatnot. So let's step back in and let's take a step back uh why and how we got here right and I'm going to share we are going to publish a paper about it as well.</p>
</details>

如果我们查看这个CLI，你会发现它正在使用“-v”作为版本号，而不是在这里硬编码一个包版本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if we go into this particular uh CLI here uh you can see what it is kind kind of doing right like it is using hyphen-v uh for version it is not like hard coding a package version in here.</p>
</details>

它还应该识别出我希望所有命令都放在一个名为“commands”的独立目录中，所以“date”命令就在这里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one more thing it should have picked up is like I want all of these commands to be in separate directory called commands so there you go the date command is here.</p>
</details>

这样，当我将这个CLI扩展为“告诉我人类日期”或其他功能时，所有命令都会放在这里，测试起来非常方便。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when I grow this CLI into like you know tell me human date or whatnot it is going to put all of these commands here it's very very easy to test that way.</p>
</details>

我猜它也使用了**Vitest**（一个快速的单元测试框架），没错，因为我偏爱使用Vitest来编写大量测试。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wonder if it is also using vitest there you go because I prefer Vest for uh you know writing uh a lot of tests.</p>
</details>

它还使用了0.0.1版本，我喜欢从这里开始，而不是1.0.0。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one of the those things you know it it is using 0 0.0.1 version I like to start here instead of 1.0.0 right and that is probably not what you know uh uh claude was doing on this side right if I were to open the same uh CLI that claude built for me you will see that you know 1.0 O and it's like again not using vit like every single preference that I have it is probably not going to do that and then again this thing everything is here I don't want it like this uh this is kind of again it cla knows cloud is a is an amazing model but it knows what to do and with command right now we are also using cloud but it's it's kind of like I have to steer it so much that I kind of feel like it should be learning from me and by the way it's it is quite transparent And if you look at this, we have a command code folder in here. And if you see in here, there's a taste file. And if you go inside of it, there's a, you know, CLI taste that it has picked up. And these are all my preferences. I can assure you, none of this is written by me. So command code is continuously learning from me and it is creating a lot of these taste like things. This is not spec. This is not scale. It's like my intuition uh built into a metaano symbolic uh model, an architecture model that is more deterministic that kind of figures out it's more like a reix of my preferences and it figures out like this is what I want when I'm using and building uh you know with uh writing with AI code or whatnot. So let's step back in and let's take a step back uh why and how we got here right and I'm going to share we are going to publish a paper about it as well.</p>
</details>

这可能不是Claude那边会做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that is probably not what you know uh uh claude was doing on this side right if I were to open the same uh CLI that claude built for me you will see that you know 1.0 O and it's like again not using vit like every single preference that I have it is probably not going to do that and then again this thing everything is here I don't want it like this uh this is kind of again it cla knows cloud is a is an amazing model but it knows what to do and with command right now we are also using cloud but it's it's kind of like I have to steer it so much that I kind of feel like it should be learning from me.</p>
</details>

如果我打开Claude为我构建的同一个CLI，你会看到它是1.0.0版本，而且也没有使用Vitest，它可能不会满足我的每一个偏好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I were to open the same uh CLI that claude built for me you will see that you know 1.0 O and it's like again not using vit like every single preference that I have it is probably not going to do that and then again this thing everything is here I don't want it like this uh this is kind of again it cla knows cloud is a is an amazing model but it knows what to do and with command right now we are also using cloud but it's it's kind of like I have to steer it so much that I kind of feel like it should be learning from me.</p>
</details>

而且所有东西都堆在一起，我不喜欢这样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then again this thing everything is here I don't want it like this.</p>
</details>

Claude是一个很棒的模型，它知道该做什么，但使用Command Code时，我们也在使用Claude，但我必须引导它太多，以至于我觉得它应该向我学习。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this is kind of again it cla knows cloud is a is an amazing model but it knows what to do and with command right now we are also using cloud but it's it's kind of like I have to steer it so much that I kind of feel like it should be learning from me.</p>
</details>

顺便说一句，它是非常透明的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by the way it's it is quite transparent.</p>
</details>

如果你看这里，我们有一个`.commandcode`文件夹，里面有一个“taste”文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you look at this, we have a command code folder in here. And if you see in here, there's a taste file.</p>
</details>

如果你打开它，你会看到它已经收集了CLI的“品味”，这些都是我的偏好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you go inside of it, there's a, you know, CLI taste that it has picked up. And these are all my preferences.</p>
</details>

我可以向你保证，这些都不是我写的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can assure you, none of this is written by me.</p>
</details>

所以Command Code正在持续向我学习，并创建了许多这种“品味”类似的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So command code is continuously learning from me and it is creating a lot of these taste like things.</p>
</details>

这不是规范，也不是规模，它更像是我的直觉，内置在一个**元神经符号模型**（meta neuro-symbolic model: 一种结合了符号推理和神经网络的AI模型）中，这是一个更具确定性的架构模型，它能理解我的偏好，并知道我在使用AI代码或进行其他操作时想要什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is not spec. This is not scale. It's like my intuition uh built into a metaano symbolic uh model, an architecture model that is more deterministic that kind of figures out it's more like a reix of my preferences and it figures out like this is what I want when I'm using and building uh you know with uh writing with AI code or whatnot.</p>
</details>

### AI的“懒惰”与“品味”的必要性

让我们回顾一下，我们为什么以及如何走到这一步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's step back in and let's take a step back uh why and how we got here right and I'm going to share we are going to publish a paper about it as well.</p>
</details>

我们也将发表一篇关于它的论文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to share we are going to publish a paper about it as well.</p>
</details>

我将分享更多关于我们目前所处的位置、我们将如何思考它、为什么它很重要以及它背后的架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to uh share a little bit more about like where we are and how we are going to think about it, why this kind of matters and what is the architecture behind all of this.</p>
</details>

我再次从2020年开始，我构建的第一个东西是一个编码代理，这导致了许多事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again I started in 2020. Uh the first thing I built was a coding agent and that led to so many things.</p>
</details>

我最终构建了Langbase，并从许多优秀的人那里筹集了500万美元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I ended up building Langbase and we raised $5 million from all these amazing people.</p>
</details>

事实上，**GitHub**的创始人领导了我们的融资轮，许多优秀公司的创始人都支持了我们的使命。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, uh founder of GitHub uh led our uh round in you know founders of all these amazing company companies kind of supported uh you know our mission here.</p>
</details>

我们试图解决的问题是记忆，这种记忆不是简单的RAG（Retrieval Augmented Generation: 检索增强生成），而是一个无服务器的知识存储，它可以根据你的数据进行推理，并持续学习如何帮助你。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the idea that we were we were trying to fix was memory and this memory was not rag it was like a serverless rack store which can reason over your data reason over how to help you and continuously learn.</p>
</details>

我们看到了很多问题，我认为这是AI中最大的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we saw a lot of things like I think this is the biggest problem in AI.</p>
</details>

我认为AI从人类那里学到的最好的一点是：人类是懒惰的，AI也是如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the best thing that [laughter] AI has kind of learned from humans is that humans are lazy and that is what AI is.</p>
</details>

AI默认是懒惰的，它非常草率。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI is lazy by default. It's very sloppy.</p>
</details>

如果你要求它在楼梯扶手上画一匹马，你得到的就是这种草率的结果，然后你必须一遍又一遍地提示它才能得到左边那种理想的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you ask for a you know horse on a staircase banister, this is kind of what you get and then you have to uh you know prompt it again and again and again to get to this left side of things.</p>
</details>

这就像你看到我用Claude构建CLI时所做的那样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know this is sort of what you saw me do with Claude when I was trying to build that CLI. Right?</p>
</details>

为了解决这个问题，我们发布了一系列原语，包括线程、工作流、记忆等等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To fix this problem, we basically launched a bunch of primitives. of threads, workflows, memory, what have you.</p>
</details>

我们希望人们能开始构建出色的代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And our hope was that people will start building amazing agents.</p>
</details>

然后我们看到，每月有大约700TB的数据和12亿次代理运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we saw uh you know like we doing like I think 700 terabytes and 1.2 billion agent runs a month.</p>
</details>

我们看到了巨大的规模，但我们又发现了另一个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we saw major scale but we saw another problem.</p>
</details>

我们研究了这个问题，你可以访问**stateofiagents.com**（一个关于代理研究的网站）来查看我们关于人们如何构建代理的所有研究，这些都是公开的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We we studied that problem and you can go to stateofiagents.com. You can study all of our uh research into how people were building agents. This is all public by the way. [snorts]</p>
</details>

我们发现即使是代理也常常非常草率。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we figured out like even agents uh were very way very sloppy like you know I'm like I think like I I use AI for everything except for when I am writing right because every time I build an agent uh to write or every time I use an LLM to write something this sort of slob I kind of get back right so we have a collaborative dev tool can you write me a fun headline for it and what I'd get back is like power of synergistic teamwork or whatn not and this is my friend I actually saw him do this and he was like, "Oh god, no. Please fix it."</p>
</details>

我几乎所有事情都使用AI，除了写作，因为每次我构建一个写作代理或使用LLM写作时，我都会得到这种草率的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm like I think like I I use AI for everything except for when I am writing right because every time I build an agent uh to write or every time I use an LLM to write something this sort of slob I kind of get back right.</p>
</details>

比如，我们有一个协作开发工具，你能不能为它写一个有趣的标题？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have a collaborative dev tool can you write me a fun headline for it.</p>
</details>

我得到的回复可能是“协同团队合作的力量”之类的，这很糟糕。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I'd get back is like power of synergistic teamwork or whatn not and this is my friend I actually saw him do this and he was like, "Oh god, no. Please fix it."</p>
</details>

为了解决这个问题，我们尝试了Command Code，最初以“Chai”发布，并在过去五个月中更名为“Command New”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it got even worse, right? Uh to fix this, we we tried this command. We launched it as chai. And rebranded to command new in last five months.</p>
</details>

这是一个“代理的代理”，你给它一个提示，比如“我想要构建这种代理”，它就会为你配置和创建所有基础设施。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was an agent of agents. You would give it a prompt like this is the kind of agent I want to build. It will provision and create all of the infrastructure for you.</p>
</details>

我也分享过一个关于它的演讲。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I shared a talk about it as well.</p>
</details>

在五个月内，我们看到有15万个代理通过它进行了“**vibe coding**”（情境编码: 一种通过上下文工程和提示来引导AI生成代码的方法）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In five months, we have seen 150,000 agents vip coded with it.</p>
</details>

但总觉得少了点什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there's just something missing, right?</p>
</details>

“Vibe coding”比草率的生成要好，但它不如我职业生涯中积累的那些规则和选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Vibe coding I think is better than slob but it's not better than the rules and choices that I have made that I have kind of built my career around right.</p>
</details>

所以我们再次开始解决这个问题，这也是我五年学习的成果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we started to fix this problem again and this is sort of again this is my five years of learning is around this.</p>
</details>

我认为AI默认是草率的，这是几乎所有LLM的默认设置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think by default AI is sloppy this is the default setting of almost every LLM.</p>
</details>

它们试图尽快做到正确，但我认为这对于代码来说并不适用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're trying to be correct and they're trying to be correct as soon as possible that I think doesn't really work with code.</p>
</details>

然后我们有了“vibe coding”，有人进行上下文工程，每个人都有不同的叫法，但幕后都是上下文工程、记忆和一堆提示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we get this vibe coding thing where somebody does the context engineering you know everybody has a different name for it you know uh behind the scene it's context engineering memory and a bunch of prompts and you know you most of the times you don't really have a lot of control over it.</p>
</details>

大多数时候你对此没有太多控制权。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you most of the times you don't really have a lot of control over it.</p>
</details>

为了寻求这种控制，许多开发者开始编写规则文件，比如`cloudmd`、`agents.mmd`。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to seek that control what a lot of developers do is they they start writing these rules files like cloudmd agents.mmd.</p>
</details>

但规则永远不够。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And rules are never enough.</p>
</details>

我经常开玩笑说，我们的司法系统很糟糕，因为我们的规则不够，然后我们不得不依靠人类律师、人类法官和人类陪审团来决定在特定情况下该怎么做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I I often tell I often joke about this that our justice system sucks because our rules are not enough and then we have to go out with this human lawyer and a human you know judge and a jury of humans to figure out what to do in that particular situation right.</p>
</details>

所以我认为应该有某种东西能从我们这里学习规则，学习我们编写代码的“品味”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I feel like uh there should be something that is learning rules from us and it should be learning our taste of writing code and that is why I've put this thing taste here what what does that look like let me let me like uh like I I think this should be something that is acquiring our taste.</p>
</details>

这就是我把“品味”放在这里的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that is why I've put this thing taste here what what does that look like let me let me like uh like I I think this should be something that is acquiring our taste.</p>
</details>

我认为应该有某种东西能获得我们的“品味”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this should be something that is acquiring our taste.</p>
</details>

所以，Command Code就是一个有“品味”的编码代理，如果我大胆地说，它是一个具有“习得品味”的编码代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, uh, command code a coding agent with taste or if I if I'm bold enough to say it's it's something that is a coding agent with an acquired taste.</p>
</details>

它学习你编写代码的“品味”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It learns what is your taste of writing code.</p>
</details>

这就是它的样子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is sort of what it looks like.</p>
</details>

我知道这可能是一个非常愚蠢和糟糕的例子，我不想在这里放太多文字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I know this might be a very silly and bad example. I didn't want to put a lot of text here.</p>
</details>

但是当我看到这段AI生成的代码时，我会说不，这不好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when I look at this code which is AI generated, I'm like, no, no, no. This is not good.</p>
</details>

我想要JavaScript对象参数，当参数超过两个时，我希望它这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want JavaScript uh object parameters. Anytime there are more than two parameters, I want that.</p>
</details>

但AI不会听我的，LLM不会知道我的这些偏好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But AI won't uh you know listen to me. LLMs won't know my preferences of this thing.</p>
</details>

所以，当我要求它创建一个`sum.js`函数时，这又是一个非常简化的例子，Claude不会做我希望它做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, when I ask for make me a sum.js function, this is again a very dumbed down version of an example. U cloud code won't do what I want it to do.</p>
</details>

但Command Code自然知道这是我偏爱的，因为它看到我编辑AI代码并以这种方式修复它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In command just naturally knows this is what I prefer because it has seen me go and edit AI code and fix it this way right.</p>
</details>

同样，当我要求它构建一个日期CLI时，我们也看到了这种情况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And similarly we kind of saw this happen when I asked to build a date CLI.</p>
</details>

Claude基本上是从一个控制台输出开始的，我不得不告诉它不，我想要pnpm，我想要TypeScript以及所有那些有趣的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is you know claude basically started with here's a console and I had to tell it no I I want PNPM I want I want TypeScript and all of that fun stuff.</p>
</details>

而Command Code则自然知道我偏爱Commander，我偏爱我刚才在这个演示中展示的所有那些东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whereas command just kind of knows that I prefer commander I prefer all of those things that I just you know demoed earlier in this particular talk.</p>
</details>

### Command Code的架构与未来愿景

总而言之，我认为当程序员谈论“好代码”时，他们谈论的不是正确的代码，而是他们在职业生涯中做出的“无形选择架构”，这些选择使他们的代码可读、可维护、人性化，并且更像他们自己。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So to sum it up, I think when programmers talk about good code, they're not talking about code that is correct. They're talking about this invisible architecture of choices that they have made throughout the course of their career to make their code, you know, kind of like readable, maintainable and humane and more like, you know, you which is which is I think what is stopping me to write a lot of code.</p>
</details>

这正是我认为阻碍我编写大量代码的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is which is I think what is stopping me to write a lot of code.</p>
</details>

我希望能够一天内完成很多事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to generate my mission is like what if I could do a lot of things in one day.</p>
</details>

如果我能合并一千个**pull requests**（拉取请求: 软件开发中将代码更改合并到主分支的机制）到**main**（主分支），并且我的审查时间能减少90%或99%呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What if I can have like a thousand poll requests merged to main uh you know and my review time would just go down by 90% or 99%.</p>
</details>

如果一个LLM，一个编码代理，能做我希望它做的事情，而不是仅仅从2015年的**Stack Overflow**（一个流行的程序员问答网站）上随便找些草率的代码，然后应用到我的每个请求中，而我却没有时间教它所有规则。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If an LLM if a coding agent was doing what I wanted to do right if it is not just picking up some sloppy code from 2015 Stack Overflow and slapping it to you know every request I have and I don't have time to teach it all the rules.</p>
</details>

我要么编写代码，要么教它编写代码，我不能同时做这两件事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can either write code or I can teach it to write code. I I cannot be the one who's uh you know telling it when I'm using Nex.js GS or oh no this even though those both those both of those are you know creating API route files what is the difference when I'm in this project and that project it should just learn that in this situation this is the confidence level it has around the conflicts that uh you know that arise from different rules and different projects right so I I I don't I don't think I can do that again this is this excites the hell out of me I think this is the invisible architecture of choices that every programmer is making and that is that is what we are trying to build here uh you know a meta neuros symbolic reasoning space with reinforcement learning.</p>
</details>

我不能告诉它什么时候使用**Next.js**（一个基于React的开源Web开发框架），或者在这个项目和那个项目中创建API路由文件有什么区别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I cannot be the one who's uh you know telling it when I'm using Nex.js GS or oh no this even though those both those both of those are you know creating API route files what is the difference when I'm in this project and that project it should just learn that in this situation this is the confidence level it has around the conflicts that uh you know that arise from different rules and different projects right.</p>
</details>

它应该自己学习在不同规则和不同项目产生的冲突中，它应该有多大的置信度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It should just learn that in this situation this is the confidence level it has around the conflicts that uh you know that arise from different rules and different projects right.</p>
</details>

这让我非常兴奋，我认为这是每个程序员都在做的“无形选择架构”，这正是我们试图在这里构建的——一个带有强化学习的**元神经符号推理空间**（meta neuro-symbolic reasoning space with reinforcement learning: 一种结合了符号推理和神经网络，并通过强化学习不断优化的AI系统）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I I I don't I don't think I can do that again this is this excites the hell out of me I think this is the invisible architecture of choices that every programmer is making and that is that is what we are trying to build here uh you know a meta neuros symbolic reasoning space with reinforcement learning.</p>
</details>

这是一个非常简化的公式，说明我们如何设定这个目标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is this is a very dumbed down version uh a formula of how we have set this objective.</p>
</details>

如果你不了解，神经符号架构是一种比**Transformer**（一种神经网络架构）更具确定性和可解释性的架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh if if you don't know trans you know neurosymbolic architecture is a more deterministic inexplainable architecture than transformers.</p>
</details>

Transformer是生成式的，它们非常具有概率性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Transformers are generative. They they they are very probabilistic right.</p>
</details>

所以我们在这里尝试做的是，我认为Claude和GPT已经足够好了，它们确实非常出色。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we are trying to do here is we are trying to I think claude and GPD are good enough really they are really good and you can use whatever LLM with command code but that LLM will be combined with your taste which is built up o upon this meta neurosy symbolic space you can think of it like uh you know a reax of your uh you know choices in petrit right and we have a kale divergence loop here as you can see like if you do end up doing something wrong we want the lm to you know [clears throat] correct you as Well, it's it's this amazing continuous learning tool that is both learning from your explicit and your implicit feedback.</p>
</details>

你可以将任何LLM与Command Code一起使用，但那个LLM将与你的“品味”结合，而这个“品味”是建立在这个元神经符号空间之上的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can use whatever LLM with command code but that LLM will be combined with your taste which is built up o upon this meta neurosy symbolic space you can think of it like uh you know a reax of your uh you know choices in petrit right.</p>
</details>

你可以把它想象成你选择的混合体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of it like uh you know a reax of your uh you know choices in petrit right.</p>
</details>

我们这里有一个**KL散度循环**（Kale divergence loop: 一种衡量两个概率分布之间差异的方法），如你所见，如果你最终做错了什么，我们希望LLM也能纠正你。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we have a kale divergence loop here as you can see like if you do end up doing something wrong we want the lm to you know [clears throat] correct you as Well, it's it's this amazing continuous learning tool that is both learning from your explicit and your implicit feedback.</p>
</details>

这是一个惊人的持续学习工具，它既能从你的显式反馈中学习，也能从你的隐式反馈中学习。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it's it's this amazing continuous learning tool that is both learning from your explicit and your implicit feedback.</p>
</details>

然后，它再次创建那个神经符号空间，以强制执行你选择周围的“无形逻辑”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then again, it is creating that neuros symbolic space to enforce that invisible logic uh around your choices.</p>
</details>

你脑海中的那种架构，比如“当我构建一个TypeScript项目时，这就是我做事情的方式”，这种事情你的大脑永远无法真正转化为规则文件，否则你将不会编写代码，而会编写大量的规则文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The architecture that is in your head, it is in your brain like oh yeah, when I'm building uh you know a TypeScript project, this is the type of thing I do, right? that kind of thing that can never really like you you your brain can never really translate that into a you know rules file otherwise like you won't be writing code you'll be writing a lot of rules files right.</p>
</details>

最后，为了使用新的神经部分，即LLM部分，我们有**反射式上下文工程**（reflective context engineering: 一种自我感知、持续学习和适应的上下文管理方法），它是自我感知的，持续学习和适应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then again, uh at the end to use the new neural part the LLM part we have reflective context engineering which is self-aware which is continuously learning and adopting like oh this guy used to use meow for writing CLI and I don't know what happened but two months ago it's he switched to commander I'm talking about this guy by the way. This literally happened, right?</p>
</details>

比如，“这个人以前用**Meow**（一个Node.js命令行界面框架）来编写CLI，但不知道发生了什么，两个月前他改用Commander了。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like oh this guy used to use meow for writing CLI and I don't know what happened but two months ago it's he switched to commander I'm talking about this guy by the way. This literally happened, right?</p>
</details>

这确实发生了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This literally happened, right?</p>
</details>

它会自动更新我的规则，我的学习，我的“品味”，即我现在更喜欢使用Commander而不是Meow。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it will automatically update my rules, my uh learning from me, my taste that now Emmeth prefers to use commander over meow.</p>
</details>

我不需要去教它，我应该以极快的速度编写代码，而它应该从我这里学习所有这些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't need to go and teach it. I should be writing code at I don't know god speed and it should be learning all of this from me.</p>
</details>

随着时间的推移，我们相信这将使Command Code拥有一种直觉技能，你可以与你的团队分享。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And over time we've believed that this will turn it uh into a skill of intuition that command code will have that you can share with your team.</p>
</details>

我们的使命是围绕它构建一个巨大的生态系统。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our mission is to build a huge ecosystem around this.</p>
</details>

想象一下，如果你真的很喜欢某个开发者的**React**（一个用于构建用户界面的JavaScript库）代码，比如**Tanner Linsley**（知名开发者）在**TenStack**（一个React相关的库集合）上所做的工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine if you could if you really like a developer out there uh whose react uh uh you know code is amazing, right? I I love what Tanner is doing at Tenner St with ten stack, right?</p>
</details>

如果我在编写React代码时能拥有Tanner的“品味”呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what if I could have tanner taste when I'm writing React code?</p>
</details>

你可以用Command Code做到这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do that with command code.</p>
</details>

我经常用它来做的一件事是，我的设计工程师比我拥有更好的设计技能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What if like one of the things that I have been using it a lot for like my design engineer has a much better design skill than I do.</p>
</details>

每当我编写任何前端代码时，我都会借用设计工程师的“品味”，这包括所有那些边距、填充以及他“品味”中那些惊人的微小细节，我现在不需要关心这些，但我的Command Code中的LLM，我的编码代理，会将那个LLM和那个元神经符号设计“品味”与我的请求结合起来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh whenever I'm writing any kind of front-end code, I actually borrow the design engineer taste I have which is which is messy like all sort all those margins and paddings and uh amazing tiny little details in his taste that I don't need to now care about but my LLM in my command code my coding agent kind of puts that LLM and that meta neurosy symbolic design taste alongside my request like build me a model that does this but it does it with my design engineer st which is unbelievable right.</p>
</details>

比如“给我构建一个做这个的模型，但要用我的设计工程师的风格来做”，这简直令人难以置信。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like build me a model that does this but it does it with my design engineer st which is unbelievable right.</p>
</details>

### Command Code的发布与展望

这就是我们今天所处的位置，今天我们正在发布Command Code。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh this is this is this is where we are today uh today we are launching command code you can you can you know feel free to go to commandcode.ai AI you know check it out this is the very beginning of all of it and I think large language models have captured the world stacks everything out there all of the stack overflow and whatnot and I believe what we are building with taste models is the world's intuition right and their intentions right what do you intend to do and how do you generally do it what are the patterns what is your taste in that taste with your preferred LLM is I think the next frontier of coding, right?</p>
</details>

你可以随时访问**commandcode.ai**查看它，这仅仅是开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can you can you know feel free to go to commandcode.ai AI you know check it out this is the very beginning of all of it.</p>
</details>

我认为大型语言模型已经捕获了世界上的所有知识，包括Stack Overflow上的所有内容，我相信我们正在用“品味模型”构建的是世界的直觉和意图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think large language models have captured the world stacks everything out there all of the stack overflow and whatnot and I believe what we are building with taste models is the world's intuition right and their intentions right.</p>
</details>

你打算做什么，你通常怎么做，有哪些模式，你的“品味”是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you intend to do and how do you generally do it what are the patterns what is your taste in that taste with your preferred LLM is I think the next frontier of coding, right?</p>
</details>

将这种“品味”与你偏爱的LLM结合起来，我认为是编码的下一个前沿。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That taste with your preferred LLM is I think the next frontier of coding, right?</p>
</details>

我完全相信“品味”将极大地加速我们编写代码的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Taste I totally believe is going to really really speed up how we write code.</p>
</details>

它将真正创建那些神经符号的“护栏”，或者说是你作为团队、项目或知名库所拥有的“无形选择架构”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Really really create that neuros symbolic uh guard rails or your you know again invisible architecture of choices that you have as a team as a project as a famous library or I don't know maybe you are an enterprise who care about doing things in a particular way right.</p>
</details>

或者，也许你是一个关心以特定方式做事的企业。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or I don't know maybe you are an enterprise who care about doing things in a particular way right.</p>
</details>

这就是你可以围绕其构建“品味”并与他人分享的东西，无论是作为开源“品味”还是仅仅与你的团队分享。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is the kind of thing that you would be able to build taste around and share it with uh uh you know as an open source taste or share it with uh just your team like for example uh for example if you go sign up.</p>
</details>

例如，如果你去注册，这仍然非常新。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example if you go sign up. Uh again, this is very very new.</p>
</details>

这可能是它未来的样子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this is potentially it will look like right.</p>
</details>

我们已经不再分享所有这些，我们正在研究如何找到正确的组合，让所有这些元学习成为你项目的一部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we've already kind of moved away from uh sharing all of this and we are figuring out I would love your help to figure out what is the right mix of uh having all of this metalarning uh you know uh be part of your projects.</p>
</details>

目前，它更多地以透明的Markdown文件形式存在，但它可以以任何方式存在。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now it kind of ends up as more of a you know what should I say a transparent markdown file but it could exist in any which way.</p>
</details>

它是一个元神经符号空间中的模型，持续学习你的偏好，我们可以将这种学习以任何特定形式导出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a metano symbolic space in a model that is continuously learning your preferences and we can dump that learning in any particular form.</p>
</details>

目前，它可能看起来像这样：你可以使用**npx**（Node Package eXecute: Node.js 包执行器）来安装我的CLI“品味”，然后你就可以使用Command Code，你构建的CLI将非常接近我使用你喜欢的LLM构建CLI的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now this is potentially what it looks like. You should be able to you know npx taste and install my CLI taste and then you can use command code and the CLI that you will build will be very very close to you know how I would build that CLI using your favorite LLMs.</p>
</details>

是的，差不多就是这样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah, that's pretty much it.</p>
</details>

如你所见，我非常兴奋。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can as you can see, I am pretty excited.</p>
</details>

我们在Langbase内部看到的最大收获是，我们合并到**main repository**（主仓库）中的代码量可能增加了10倍。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you know, uh our our biggest gains that we have seen uh internally at Langbase are we have probably 10xed the amount of code that we are merging uh uh in our main repository, right, in our maiden branch, right?</p>
</details>

通常我们开玩笑说，当我们意见不合并与主分支比较时，这种情况发生的次数增加了10倍。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is generally we joke about it like when we disagree and compare to main the amount of that happening has increased 10x.</p>
</details>

而且，我在审查大量代码时感觉更加自信。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um I I I'm feeling a lot more confident uh when I'm reviewing a lot of code right.</p>
</details>

所以，我们任何类型的代码**pull requests**的审查时间都显著减少了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our review uh time for any kind of coding pull requests have gone down significantly.</p>
</details>

我迫不及待地想看看大家会用它构建出什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can't wait to see you know what everybody out there builds with it.</p>
</details>

我们非常兴奋，我们希望LLM能持续学习我们编写代码的“品味”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again we're very excited we want that LLMs should continuously be learning from our taste of writing code and I would love to see uh you know what you build with command code u that's pretty much it uh feel free to reach out and uh maybe you know uh send me a tweet or post or whatever you call uh we call it these days uh and I would love to see you know what everyone builds this is me uh thanks for having me ciao peace.</p>
</details>

我很想看看大家会用Command Code构建出什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I would love to see uh you know what you build with command code u that's pretty much it uh feel free to reach out and uh maybe you know uh send me a tweet or post or whatever you call uh we call it these days uh and I would love to see you know what everyone builds this is me uh thanks for having me ciao peace.</p>
</details>

差不多就是这样，欢迎大家联系我，或者给我发推特或帖子，我很想看看大家会构建出什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's pretty much it uh feel free to reach out and uh maybe you know uh send me a tweet or post or whatever you call uh we call it these days uh and I would love to see you know what everyone builds this is me uh thanks for having me ciao peace.</p>
</details>

谢谢大家。再见。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is me uh thanks for having me ciao peace.</p>
</details>