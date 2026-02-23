---
author: How I AI
date: '2026-02-23'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=s4HGbIhUgVo
speaker: How I AI
tags:
  - prototype-development
  - ai-assisted-coding
  - design-workflow
  - code-first
  - developer-experience
title: Notion原型游乐场：AI如何赋能设计团队实现代码优先原型开发
summary: 本访谈深入探讨了Notion AI设计师Brian Leven如何利用其团队内部的“原型游乐场”（一个基于Next.js的应用程序）推动代码优先的原型开发。他详细介绍了AI编码工具如Claude Code如何加速设计迭代、通过早期接触真实环境提升设计质量，以及如何通过共享原型和组件促进团队协作。访谈还展示了AI驱动的命令和技能（如Figma转代码、自动化部署）如何简化工作流程，并强调了设计师理解AI模型能力在设计AI产品中的重要性。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Brian Leven
companies_orgs:
  - Notion AI
products_models:
  - Prototype Playground
  - Claude Code
  - Next.js
  - Figma
  - Opus 4.5
  - Cursor
media_books: []
status: evergreen
---
### AI编码工具加速原型开发

**Brian Leven**: 我认为设计B2B SaaS产品的方式是，你希望你的设计能尽早地接触到现实。我一直热衷于原型开发，然后突然间这些AI编码工具出现了，现在我可以更快地进行原型开发。我可以在生产环境中进行原型开发。

<details>
<summary>Original English</summary>

**Brian Leven**: The way I think about designing B2B SAS is you want your designs to encounter reality as early as possible. I've always been into prototyping, and then all of a sudden these AI coding tools come along, and now I can prototype faster. I can prototype in production.

</details>

**主持人**: 那么请给我们解释一下这个原型游乐场是什么。

<details>
<summary>Original English</summary>

**主持人**: So explain to us what this prototype playground is.

</details>

**Brian Leven**: 它只是一个**Next.js**应用程序。我们所有的原型都在一个地方。看到其他人正在做什么真的很有趣。而且通常你会发现很酷的想法，然后你会想：“哦，我想试试那个。”代码都在一个地方，它就在一个仓库里，所以我可以从其他人的原型中提取很酷的想法，并将它们整合到我的原型中。

<details>
<summary>Original English</summary>

**Brian Leven**: It's just a **Next.js** app. All of our prototypes are in one place. Seeing what other people are working on is really fun and interesting, and oftentimes you spot cool ideas and you're like, "Oh, I want to try that." The code is all in one place, it's just in one repo, and so I can just yank cool ideas from other people's prototypes and incorporate them into mine.

</details>

**主持人**: 每次有人有点反感AI辅助编码时，我都会说，你知道我以前为了写CSS，必须来回走上坡路吗？做这个一点都不好玩。

<details>
<summary>Original English</summary>

**主持人**: Every time somebody is a little anti-AI assisted coding, I'm like, do you know that I used to have to walk uphill both ways for my CSS? It was not fun to do this.

</details>

**Brian Leven**: 我是说，即使只是坐在这里看着这个，我仍然觉得这很神奇。

<details>
<summary>Original English</summary>

**Brian Leven**: I mean, even just sitting here watching this, I still just find this magical.

</details>

**Claire Velo**: 欢迎回到“我如何AI”。我是**Claire Velo**，产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具进行构建。今天我们有一期以设计师为中心的节目，邀请了**Notion AI**的设计师**Brian Leven**，他将向我们展示他是如何为整个**Notion**设计团队搭建了一个原型游乐场，让他们可以使用**Claude Code**来编写任何所需的原型代码。对于那些希望将设计组织转变为代码优先原型模式，或者学习**Claude Code**高级技术的人来说，这期节目非常棒。让我们开始吧。本期节目由**Work OS**赞助。AI已经改变了我们的工作方式。工具正在帮助团队编写更好的代码，分析客户数据，甚至自动处理支持工单。但有一个问题。这些工具只有在能够深入访问公司系统时才能良好运行。你的副驾驶需要查看你的整个代码库。你的聊天机器人需要搜索内部文档。对于企业买家来说，这引发了严重的安全问题。这就是为什么这些应用程序从第一天起就面临严格的IT审查。要通过审查，它们需要安全的身份验证、访问控制、审计日志以及全套的企业级功能。从头开始构建所有这些，工作量巨大。这就是**Work OS**发挥作用的地方。**Work OS**为你提供了企业功能的即插即用API，让你的应用程序能够具备企业级能力并更快地拓展市场。可以把它想象成企业功能的**Stripe**。**OpenAI**、**Perplexity**和**Cursor**已经在使用**Work OS**来加速发展并满足企业需求。加入他们以及数百家其他行业领导者，请访问workos.com。立即开始构建。

<details>
<summary>Original English</summary>

**Claire Velo**: Welcome back to How I AI. I'm **Claire Velo**, product leader and AI obsessive, here on a mission to help you build better with these new tools. Today we have a designer-centric episode with **Brian Leven**, designer at **Notion AI**, who's going to show us how he set up a prototype playground for the entire **Notion** design team to vibe code using **Claude Code** for any prototype they need. This is a great one for someone looking to either shift their design organization into a code-first prototyping mode or learn some advanced techniques with **Claude Code**. Let's get to it. This episode is brought to you by **Work OS**. AI has already changed how we work. Tools are helping teams write better code, analyze customer data, and even handle support tickets automatically. But there's a catch. These tools only work well when they have deep access to company systems. Your co-pilot needs to see your entire codebase. Your chatbot needs to search across internal docs. And for enterprise buyers, that raises serious security concerns. That's why these apps face intense IT scrutiny from day one. To pass, they need secure authentication, access controls, audit logs, the whole suite of enterprise features. Building all that from scratch, it's a massive lift. That's where **Work OS** comes in. **Work OS** gives you drop-in APIs for enterprise features so your app can become enterprise ready and scale up market faster. Think of it like **Stripe** for enterprise features. **OpenAI**, **Perplexity**, and **Cursor** are already using **Work OS** to move faster and meet enterprise demands. Join them and hundreds of other industry leaders at workos.com. Start building today.

</details>

### 设计师转向代码优先原型开发

**Claire Velo**: **Brian**，欢迎来到“我如何AI”。今天我们的对话让我非常兴奋，因为你将向我们展示像**Notion**这样设计最好的产品之一，是如何由像你这样的人使用**Claude Code**等新的AI工具进行设计的。那么，你为什么要做出这种转变，改变你过去的设计方式，改变原型、设计和构建事物的意义，尤其是对于一个高度重视设计的公司和产品而言？

<details>
<summary>Original English</summary>

**Claire Velo**: **Brian**, welcome to How I AI. What I am so excited about in terms of our conversation today is you're going to show us about how one of the best designed products out there, **Notion** is being designed by people like you using these new AI tools like **Claude Code**. So why did you make this shift to how you were doing design, what it meant to prototype, design and build things, especially for a product and in a company who values design so highly.

</details>

**Brian Leven**: 我认为设计B2B SaaS产品的方式是，你希望你的设计能尽早地接触到现实。如果你想象一个梯度，从在一张餐巾纸上涂鸦到在生产环境中发布并展示给客户，我们作为设计师的目标是尽快地沿着这个梯度向生产环境移动。所以我想说，在我职业生涯的大部分时间里，我一直倾向于对编程感兴趣，主要是在原型开发层面。我发现当你用**Figma**设计一些东西，然后你在浏览器中实际尝试它时，你会发现大量问题。突然间，你点击一些东西，你注意到加载状态，你注意到“啊，这在当前屏幕尺寸下不太对劲。”所以你更早地接触到某种现实，并且能更快地得到更好的设计。所以，我一直热衷于原型开发，然后突然间这些AI编码工具出现了，现在我可以更快地进行原型开发。我可以在生产环境中进行原型开发。或者，我现在在**Notion**最常做的是，在一个我们构建的名为**Prototype Playground**的小型内部工具中进行原型开发。同样，这个想法就是如何尽快地在一种真实的、类似真实的环境中，在我们的例子中是浏览器中，获得一些相对真实的东西，我认为这只会帮助你更快地行动并最终获得更好的设计。

<details>
<summary>Original English</summary>

**Brian Leven**: The way I think about designing B2B SAS is you want your designs to encounter reality as early as possible. If you imagine this gradient, from scribbling on a napkin on one side to shipping to production and showing customers on the other side, our goal as designers is to move up that gradient towards production as quickly as possible. For most of my career, I've biased towards being interested in programming, mostly at the prototyping level. I find that when you're designing something in **Figma** and then you actually try it in the browser, you notice a ton of problems. All of a sudden, you're clicking things, you notice loading states, you notice, 'Ah, that didn't quite work on this screen size.' So you encounter some version of reality sooner, and you end up getting to a better design more quickly. I've always been into prototyping, and then all of a sudden these AI coding tools come along, and now I can prototype faster. I can prototype in production. Or, what I most often do now at **Notion**, is just prototype in a little internal tool we've built called **Prototype Playground**. Again, the idea is just how do we get something that's somewhat realistic in a kind of real environment, in our case, the browser, as quickly as possible? And I think that just helps you move faster and end up with better designs.

</details>

### 原型游乐场：共享代码库与协作

**Claire Velo**: 那么请给我们解释一下这个**原型游乐场**是什么，你是如何设置它的，以及你可能会如何使用它。

<details>
<summary>Original English</summary>

**Claire Velo**: So explain to us what this prototype playground is and how you set it up and how you might use it.

</details>

**Brian Leven**: 好的，所以**原型游乐场**没什么神奇的。它只是一个**Next.js**项目。所以，实际上，这里就是`source/apps`，有一个`app`目录。你会注意到在我们的`app`目录中，通常在一个**Next.js**应用里，你会看到`pages`。嗯，我们只是为团队中的每个设计师、产品经理或工程师——任何注册并想使用它的人——设置了一个命名空间目录。所以，这里是**Brian**。然后每个目录里面都是一个原型。它只是一个**Next.js**应用，但每个页面都是独立的。没有全局布局，也没有你必须遵守的全局结构。所以它在前端看起来就是这样。这就是我们所说的**原型游乐场**。它只是一个原型列表，按最近工作的人排序。所以这里有一些是十二月的，然后一大堆是十一月的。这真的很酷，因为把所有人的原型放在一个地方在两个方面都很有用。首先是从可见性的角度来看，看到其他人正在做什么真的很有趣。而且通常你会发现很酷的想法，然后你会想：“我想试试那个。”另一方面是，如果你发现一个很酷的想法并想尝试它，代码都在一个地方。它就在一个仓库里。所以我可以从其他人的原型中提取很酷的想法，并将它们整合到我的原型中，通常只需告诉**Claude**来完成。

<details>
<summary>Original English</summary>

**Brian Leven**: Okay, so **Prototype Playground** is nothing magical. It is just a **Next.js** project. So, actually, here, just `source/apps`, and there's an `app` directory. You'll notice here in our `app` directory, normally in a **Next.js** app, you would see `pages`. Well, we've just namespaced every designer on the team, or PM, or engineer—whoever signs up and wants to use it—can just namespace a directory. So, here is Brian. And then every directory inside of that is some prototype. It's just a **Next.js** app, but each page is a standalone. There's no global layout, there's no global structure that you have to adhere to. And so what that looks like on the front end is this. This is what we call **Prototype Playground**. It's just a list of prototypes ordered by who is working on stuff recently. So, here's a few from December, and then a bunch from November. It's really cool because having everybody's prototypes in one place is useful in two dimensions. One, just from a visibility point of view, seeing what other people are working on is really fun and interesting. And oftentimes you spot cool ideas and you're like, 'I want to try that.' And then on the other dimension is, if you spot a cool idea and you want to try it, the code is all in one place. It's just in one repo. And so I can just yoink cool ideas from other people's prototypes and incorporate them into mine, usually by just telling **Claude** to do that.

</details>

**Brian Leven**: 我认为在**原型游乐场**之前，**Notion**有很多设计师用代码进行原型开发。不同之处在于，我们都创建了自己的仓库，自己的**Next.js**实例。所以很难知道每个人的东西在哪里，因为每个人都在以不同的方式重新构建它，或者如果人们试图重新创建一些看起来像**Notion**风格的东西，我们都是从头开始做的。所以无论如何，**原型游乐场**是一个**Next.js**应用。我们所有的原型都在一个地方，然后我们有一些共享组件和共享样式。所以如果你想制作一些看起来像**Notion**风格的东西，你可以很快完成。例如，我们这里有一些模板。我可以给你看，比如**Notion UI**只是一个**Notion**侧边栏。实际上，这甚至不太像**Notion**。我想在某个时候我把这个新按钮塞进去了，它显然不存在于产品中。我不认为这些东西有什么用，但它足够接近。如果你想：“哦，我需要用**Notion**侧边栏来制作原型。”我可以直接来这里复制这个模板。然后我们当然会引入我们的一些颜色、排版、图标。所以这样，又可以轻松地获得足够接近**Notion**的样式，而无需付出太多努力。

<details>
<summary>Original English</summary>

**Brian Leven**: Before **Prototype Playground**, there were a lot of designers at **Notion** who prototyped in code. The difference was, we were all creating our own repository, our own **Next.js** instance. And so it was hard to know where everyone's stuff was, as everyone was rebuilding it in different ways, or if people were trying to recreate something that looked Notion-y, we were all doing it from scratch. So anyway, **Prototype Playground** is a **Next.js** app. All of our prototypes are in one place, and then we have a few shared components and shared styles. So if you want to make something that looks Notion-y, you can do that pretty quickly. For example, we have some templates here. I can show you, like, **Notion UI** is just a Notion sidebar. And actually, this isn't even very Notion-y. I think at some point I slipped this new button in here, which obviously doesn't exist in the product. I don't think these things do anything, but it's close enough. If you're like, 'Oh, I needed to prototype something with a Notion sidebar,' I can just come in here and duplicate this template. And then we, of course, pull in a bunch of our colors, typography, icons. So that again, just getting to close enough Notion styles without a whole lot of effort.

</details>

**Claire Velo**: 是的。是的。我想提醒大家，几个月前，我展示了如何为自己构建一个非常相似的**Next.js**应用程序，它结合了你正在处理的文档、模拟Markdown文档和你正在处理的原型，格式非常相似，就像“这是我正在处理的文件夹”。共享组件非常少，共享样式也非常少。我也喜欢这个，因为它有一个团队级别的组织，你可以进去看看你的队友正在和谁一起工作。我有一个操作方面的问题。你是怎么设置这个的？这是你的一个热情项目吗？是工程部门为你设置的吗？这个东西到底是怎么创建的？

<details>
<summary>Original English</summary>

**Claire Velo**: Yeah. Yeah. And I want to call out for people a couple episodes ago, I showed how you could build a very similar **Next.js** app for yourself that had a combination of docs you were working on, mock markdown docs you were working on and prototypes in a very similar format where it was like here's my folder of just stuff I'm working on. Very minimal shared components, very minimal shared styles. I like this too because it's nice to have that team level organization so you can pop in and see who your teammates are working with. I have a question from an operational perspective. Did you set this up? Why like was this like a passion project for you? Uh did engineering set it up for you? Like how did this actually get created?

</details>

**Brian Leven**: 是的，我和另一位工程师一起设置的。我的意思是它只是一个**Next.js**应用，但从操作上讲，只需要一些批准。它部署在**Vercel**上。我们必须经历一些流程才能启动那个项目，并添加一些成员。否则，是的，没什么大不了的。再说一次，它只是一个非常基本的**Next.js**应用，你真的可以使用**Claude**来帮助你制作一个**Next.js**应用，它只会给你默认设置。

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah, I set it up with another engineer. It's just a **Next.js** app, but then operationally, just a few approvals. It's deployed on **Vercel**. We had to go through a little bit of process to get that project spun up, get a few people added as members. Otherwise, it's not that much. Again, it's just a pretty basic **Next.js** app, which you can literally use **Claude** to help me make a **Next.js** app, and it's just going to get you the default.

</details>

**Claire Velo**: 我喜欢，你知道，我喜欢键盘手势。每个人都做同样的键盘手势，就是这样。

<details>
<summary>Original English</summary>

**Claire Velo**: I like, you know, I like keyboard hands. Everybody does the same keyboard hands motion where it's just this.

</details>

**Claire Velo**: 我还有一个问题，就是现在在这个仓库工作的人中，有多少人以前是写代码的，有多少人这是他们第一次克隆到桌面或部署的仓库？设计团队是不是已经技术娴熟了，所以这很自然，还是有些人需要进行入职培训？

<details>
<summary>Original English</summary>

**Claire Velo**: I have one more question which is of the people now working in this repository how many before were working in code versus this is their first repository that they've cloned to you know their desktop or deployed it was the design team pretty technically adept already so this was very natural or were there some people that needed to be onboarded

</details>

**Brian Leven**: 我想是这样。我的意思是，老实说，**原型游乐场**对我来说仍然是主要的，我想我用得最多。你可以在这里看到，有很多人正在创建东西。但如果你仔细看，我可能用得最多。我想在**Notion**大概有五到十个人经常使用它，然后还有很多人要么尝试过但没有坚持下来，我们可以探讨一下原因，要么他们不感兴趣，要么他们单独进行原型开发，对吧？比如，我们仍然有人在**Figma**中进行原型开发。我们仍然有人在自己的代码库中进行原型开发。他们只是更喜欢自己的技术栈。也许他们不喜欢**Next.js**，也许他们不喜欢**React**，所以他们做别的事情。而且我认为所有这些都完全没问题。事实上，我最近添加的一个功能就是能够链接到外部原型。所以，如果你更喜欢使用**Vzero**或**Lovable**或**Figma**的制作文件，无论是什么，你都可以在这里链接它。事实上，这在**原型游乐场**中会显示为一个小小的外部图标。所以，你可以点击它，它会在新标签页中打开。所以理论上，这可以成为任何原型工具的原型游乐场或仓库。我希望随着时间的推移，我们能让这个东西足够有用，让更多人愿意在其中进行原型开发，因为它比其他工具更快。我们还需要弄清楚如何降低非技术人员的入门复杂性。所以，回答你的问题，我不知道。我想说，一些非技术人员在游乐场中制作了他们的第一个代码原型或AI辅助原型。但可能我们这些每天仍然在使用它的大多数人都有一些技术背景。

<details>
<summary>Original English</summary>

**Brian Leven**: I think so. To be honest, **Prototype Playground** is still really for me; I think I use it the most. You can see here, there are a bunch of other people who are creating things, but if you were to go through, I probably use it the most. I think there are maybe five to ten people at **Notion** that use it quite a lot, and then a bunch of people who either have tried it and it didn't stick, and we can get into reasons why that is, or they're just not interested, or they prototype separately. We still have people prototyping in **Figma**. We have people that prototype in their own codebase still; they just prefer their own stack. Maybe they don't like **Next.js**, maybe they don't like **React**, so they do something else. And I think all that is totally fine. In fact, one of the features I added recently was this ability to link to an external prototype. So, if you prefer using **Vzero** or **Lovable** or a **Figma** make file, whatever it might be, you could just link to it here. And in fact, this is what it'll show up as in **Prototype Playground**, just have this little external icon. So, you can click it, and it'll open in a new tab. In theory, this could be the **Prototype Playground** or repo for any prototyping tool. My hope is that over time we make this thing useful enough that more people will want to prototype in it because it's just faster than those other tools. And we have to figure out how to lower the onboarding complexity for people who aren't technical before. So, to answer your question, I'd say some people who weren't technical made their very first code prototypes or AI-assisted prototypes in the playground, but probably the majority of us that are still using it daily had some technical background.

</details>

### 实际操作：AI辅助原型构建

**Claire Velo**: 明白了。太棒了。那么，我们来制作一个原型吧。我想看看它实际是如何运作的。

<details>
<summary>Original English</summary>

**Claire Velo**: Got it. Perfect. Well, let's prototype something. I want to see how it actually works.

</details>

**Brian Leven**: 好的，我们来做吧。嗯，在**Next.js**中创建新东西有几种方法，对吧？比如我们可以在**Cursor**中，然后在这里创建一个新文件夹，创建一堆`page.tsx`和元数据文件，那太糟糕了。我不想那样做。所以有两种方法可以避免这种情况。第一种是当你在本地主机上运行时，你可以点击这个“新建”按钮，然后给你的原型一个名称和描述。我把这个叫做“我如何AI”，然后说“这很有趣”。我创建它。所有这些在幕后所做的，如果我们回到**Cursor**，就是它在我的电脑上为我创建了这些文件。这是我最喜欢的部分，就是**原型游乐场**没有后端；它只是磁盘上的所有文件。然后我们可以把所有这些推送到**GitHub**。所以这里我们有一个小的元数据文件。这些文件会被整理起来，用于在主页上渲染列表。我们这里有一个实际的原型文件，带有一些代码。然后这很好，它会自动给你一个按钮，可以在**Cursor**中打开它。所以现在我可以直接来这里开始原型开发。通常，我的工作流程是，我直接在终端中打开**Claude**。我知道这不是你使用**Cursor**的正确方式，但这只是我做事的方式。这可能甚至不是你使用**Claude Code**的正确方式，但是……

<details>
<summary>Original English</summary>

**Brian Leven**: Let's do it. Um okay, so there are a few ways to make new things in **Next.js**, right? We could be in **Cursor** and we could come in here and create a new folder and create a bunch of `page.tsx` and metadata files, and that sucks. I don't want to do it. So there are two ways around that. The first is, when you're running in localhost, you can actually just click this button that says 'new', and you give your prototype a name and a description. I'll call this one 'How I AI', and this is for fun. And I create that. All that's doing under the hood, if we bounce back over to **Cursor**, is it just created those files for me on my computer. This is my favorite part: there's no backend for **Prototype Playground**; it's just all files on disk. And then we can just push all this to **GitHub**. So here we have a little metadata file. These get collated to render the list on the homepage. We have an actual prototype file here with some code. And then this is kind of nice, it automatically gives you a button to open it in **Cursor**. So now I can just come in here and start prototyping. Typically, my workflow is I just open **Claude** in the terminal. I know this isn't how you're supposed to use **Cursor**, but it's just how I do it. It's probably not even how you're supposed to use **Claude Code**, but...

</details>

**Claire Velo**: 我们只是平等地冒犯了这两个工具。

<details>
<summary>Original English</summary>

**Claire Velo**: We're just equal opportunity offending these two tools.

</details>

**Brian Leven**: 我知道。我知道。对不起，各位。但是这就是我喜欢的工作方式。事实上，我这里有一个小快捷键，我可以按下Caps Lock G，然后我就可以在我的电脑上并排显示这两个东西。所以我通常在这里编码，在这里查看更改，然后在这里监控输出。那么我们来看看。我想制作一个原型，我不知道，我们来想一个牵强的例子，也许你可以帮我想一个好的用例。

<details>
<summary>Original English</summary>

**Brian Leven**: I know, I know, sorry everybody. But this is how I like to work. And in fact, I have a little shortcut here where I can just press Caps Lock G, and then I can get these two things side by side on my computer. So I usually am coding over here, reviewing the changes here, and then monitoring the output over here. So let's see here. I want to make a prototype, and I don't know, let's just come up with some contrived example, maybe you can help me think of a good use case.

</details>

**Claire Velo**: 我们可以为我的播客制作一个视频和音频显示模块的原型吗？这可能有点复杂。

<details>
<summary>Original English</summary>

**Claire Velo**: Can we make a prototype for oh like a little a video and audio? This may be complicated. Video and audio like display module for my my podcasts.

</details>

**Brian Leven**: 视频和音频。

<details>
<summary>Original English</summary>

**Brian Leven**: Video and audio.

</details>

**Claire Velo**: 所以它会显示视频，然后可能是一个音频播放器。我们看看。你知道，它是**Opus 4.5**。我想它可以做到。

<details>
<summary>Original English</summary>

**Claire Velo**: So it show like video and then maybe like an audio player. Let's see. I you know it's it's **Opus 4.5**. I think it can do it.

</details>

**Brian Leven**: 好的，我们试试看。所以，通常，我们来走一遍我的实际工作流程。大概有两个步骤。第一步是你可能会打很多字，那不是很有趣。我确实使用一个叫做**Monologue**的工具，你可以直接对着电脑说话。有很多类似的产品；我认为**Monologue**既好用又可爱。所以我们可以直接说话，这比打字输入我们的提示要快得多。你会注意到使用**Claude Code**的第二件事是我切换到了计划模式。我认为在做任何事情之前进行计划真的非常重要。无论出于什么原因，你都会得到更好的结果。现在，使用计划模式的关键是要真正阅读计划。我认为这就是拥有开发背景的优势所在，因为你可以阅读计划并说：“哦，那一部分看起来不太对劲。”而如果你没有那么多编程经验，可能就很难判断。但无论如何，我仍然发现拥有计划模式并在实际编写代码之前创建一些结构会更好。所以，我们同时做这两件事。我们处于计划模式，我将在这里调用**Monologue**，它正在录音。所以假设我想在这个“我如何AI”目录中构建一个新原型，我们是一个播客，我想为一个播客剧集构建一个详情页，它既有视频播放器，下面还有音频播放器。页面应该有剧集标题、描述，如果点击播放，播放器会射出一些小纸屑，怎么样？然后我们结束录音。现在我将删除这个。然后我们进行计划。

<details>
<summary>Original English</summary>

**Brian Leven**: Okay, let's try it. So, normally, let's walk through my actual workflow. There are two steps. One is you can type a lot, that's not that fun. I do use this tool called **Monologue** where you can just talk to your computer. There are many products like this; I think **Monologue** is just nice and cute. So we can just talk, and it's much faster than typing our prompt. The second thing you'll notice with **Claude Code** is I switched over to plan mode. I think it's really, really important to plan before doing anything. For whatever reason, you just get better outcomes. Now, the key thing about using plan mode is to actually read the plan. And I think this is where having a development background gives you an edge because you can read the plan and be like, 'Oh, that part actually doesn't look quite right.' Whereas, if you maybe don't have as much programming experience, it would be harder to tell that. But in either case, I still find that having the plan mode and creating some structure before actually writing code is better. So, let's just do both of these things at the same time. So we're in plan mode, and I'm going to invoke **Monologue** here, and it's recording. So let's say I want to build a new prototype in this 'How I AI' directory, and we are a podcast, and I want to build a detail page for a podcast episode that has both a video player and an audio player underneath. The page should have the title of the episode, a description, and how about if you hit play, there's little confetti that shoots up out of the player. And so we end that. And now I will delete this. And we plan.

</details>

**Claire Velo**: 所以我必须在两件事上表扬你。第一，我也是一个计划模式，比如“写你的规范，写你的PRD”的人。显然，我认为第二件事是，在AI方面，我仍然是一个“阅读代码，阅读输出”的人。实际上，当我使用像**Claude Code**这样的工具，或者看别人使用**Claude Code**时，我的一个挑战是，如果你不在**Cursor**或提供这种界面的工具中操作——我喜欢你的三窗格窗口：你的代码窗口、你的**Claude**窗口、你的输出窗口——因为我看到有人打开了17个**Claude Code**标签页，只是接受一堆更改，而我必须阅读。我认为这就像工程开发背景一样，你可以在当下发现那些没有意义的东西，而不是不得不回去调试。所以，我在这方面和你非常一致。

<details>
<summary>Original English</summary>

**Claire Velo**: So I have to give you props on two things. One, I am also a plan mode, like 'write your spec, write your PRD' person. Obviously, I think the second thing is, I am still such a 'read the code, read the outputs' person when it comes to AI. It's actually one of my challenges when I use something like **Claude Code** or watch people use **Claude Code** is if you don't do it inside a **Cursor** or something that gives you this sort of—I love your three-pane window: your code window, your Claude window, your output window—because I see people with like 17 tabs of **Claude Code** just accepting a bunch of changes, and I have to read. I think this is also just like an engineering development background where you can just spot things that make no sense in the moment, as opposed to having to go back and debug something. So, I am very much aligned with you on that.

</details>

**Brian Leven**: 是的，这很有帮助。而且，你知道，对于很多熟悉使用**Claude Code**的人来说，这可能很明显，但如果你不熟悉，另一个非常重要的部分是提前获取正确的上下文。我们刚刚输入了一些提示，但在幕后，我可以给你看，我们实际上有一些其他文件在帮助我们。所以，我们在项目根目录有一个`claude.md`文件，里面有一些关于我们使用的工具的粗略说明，比如我们使用**Bun**，我们使用**Tailwind**。它有一个粗略的项目结构大纲。我们做的另一件事是，每当有人在本地运行项目时，我们都会创建一个`claude.local.md`文件。这个本地文件不提交到**Git**仓库。所以它是每台电脑私有的，它会添加一些额外的上下文，比如“嘿，这是我在**原型游乐场**中的用户名。”它告诉**Claude**我的目录在哪里，并给出一些说明，比如“嘿，不要去搞乱别人的文件，最好在我的目录中工作”，以及更多关于工作区结构和如何构建单个项目的信息。所以，这些东西都在幕后运行。

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah, it's helpful. And this is probably obvious to a lot of people who are familiar with using **Claude Code**, but maybe if you aren't, another piece that's really important here is getting the right context upfront. We just typed in some prompt, but under the hood, I can show you, we actually have some other files helping us out here. So, we have a `claude.md` file at the root of our project with just some rough instructions around the tooling that we use, like we use **Bun**, we use **Tailwind**. It has a rough outline of the project structure. Another thing that we do is anytime someone runs the project locally, we create a `claude.local.md` file. That local file is not committed to the **Git** repo, so it's personal per computer, and it adds a little bit of extra context, like, 'Hey, this is my username in **Prototype Playground**.' It tells **Claude** where my directory is, and it gives some instructions like, 'Hey, don't go around and mess with other people's files, prefer to work in my directory,' and a little bit more about the workspace structure and how individual projects can be built. So, a couple of those things are working under the hood here.

</details>

**Claire Velo**: 当你接受这些**Claude Code**的更改和问题时，我想提醒大家，因为我认为人们对**Claude MD**的全局设置非常了解，但人们可能会忘记，实际上有这些本地范围的版本可以实现。所以，部署一个版本给每个人，提供使用**Claude**的主规则，然后你可以设置自己的自定义版本，包含自己的特定偏好，这真的很有用。我认为这是一种很好的方式，可以创建一个良好的协作环境，让人们使用类似的AI工具或代理在仓库中工作。

<details>
<summary>Original English</summary>

**Claire Velo**: And while you're accepting some of these **Claude Code** changes and questions, I do want to call this out for folks because I think people are pretty aware of the **Claude MD** global settings, but I think people forget that there are actually locally scoped versions of these that you can implement. And so it's really useful to get one version deployed to everybody that gives you your master rules for using **Claude** and then you can set up your own custom one with your own particular preferences. And I think that's a really nice way to create a good collaborative environment where people are using a similar AI tool or agent to work in the repo.

</details>

**Brian Leven**: 完全正确。是的。好的。我不知道。我们看看会怎么样。但它会安装某种纸屑效果。它会有一个播放器，一个音频播放器。真的很棒。它在计划中做了一个线框图，这太疯狂了。嗯，在这里，我不知道。为了这个例子，我们可以大致浏览一下。嗯，这看起来不错。所以，我们自动接受编辑。现在，我有一个小贴士要告诉大家，因为我认为当你花足够的时间在**Twitter**上或观看其他人使用这些编码工具时，人们总是会问：“你如何让它运行更长时间？”他们发现自己不断地卡住，或者代理做错了事情，或者它在要求他们的输入。我对此的哲学是，每当AI要求你做某事时，在回应之前，你应该尽力看看你是否可以教AI自己回答这个问题。有一个很好的例子。哦，哇。那非常快。

<details>
<summary>Original English</summary>

**Brian Leven**: Totally. Yeah. Okay, I don't know. We'll see how this goes. But it's going to install some sort of confetti. It's going to have a player, an audio player. Really awesome. It does a wireframe in the plan, which is crazy. And here, we can just kind of skim this for the sake of this example. This looks fine. So, let's auto-accept edits. Now, I have a tip for people because I think when you spend enough time on **Twitter** or watching other people use these coding tools, people are always like, 'How do you get it to run for longer?' They find themselves constantly getting stuck, or the agent does the wrong thing, or it's asking for their input. My philosophy on this has been: anytime the AI asks you to do something, you should, before responding, try your best to see if you could teach the AI to answer that question for itself. There's a good example. Oh, wow. That was very fast.

</details>

**Claire Velo**: 哇哦。

<details>
<summary>Original English</summary>

**Claire Velo**: Ooh la la.

</details>

**Brian Leven**: 好的，我们先等等，看看纸屑效果是否有效。实际上，这里的例子是，我已经教**Claude**在完成工作后总是自行检查代码，对吧？最烦人的是，当它构建了一堆东西，然后你去浏览器查看时，发现有一些错误，对吧？所以，例如，我教**Claude**：“嘿，检查你的工作。”第一，你可以运行像`eslint`这样的命令，对吧？然后查找实际的**TypeScript**错误。第二，你可以让它访问**MCP**工具。所以，**Playwright**是一个，**Chrome DevTools** **MCP**是另一个。你可以说，嗯，实际上，在安装这个之前，**Claude**会告诉你：“嘿，我已经实现了你的功能。你去看看，告诉我你觉得怎么样。”请记住，我们的规则是，每当**Claude**让你做某事时，问问你是否可以教它自己做那件事。所以，我不想每次都必须查看浏览器来确认我是否做对了。所以，我反而教**Claude**：“实际上，你应该去打开浏览器。”所以它知道如何启动**Chrome**。它知道如何导航到这里。它知道如何点击播放按钮，寻找纸屑，确保音频正常工作，所有这些。所以现在我们能够让这个任务运行更长时间，而无需我的输入，并且实际上得到了一个运行良好的东西。

<details>
<summary>Original English</summary>

**Brian Leven**: Well, here, let's hold on that and see if the confetti works. The example is, I've already taught **Claude** to always lint itself after it's done, right? What's really annoying is when it builds a bunch of stuff and then you go and look in your browser and there's some error. So, for example, I've taught **Claude**, 'Hey, check your work.' One, you can run commands like `eslint`, right? And look for actual **TypeScript** errors. The second is, you can give it access to **MCP** tools. So, **Playwright** is one, the **Chrome DevTools** **MCP** is another one. And you can say, well, actually, before installing this, **Claude** would say to you, 'Hey, I've implemented your feature. Go take a look at it and let me know what you think.' And remember, our rule is anytime **Claude** tells you to do something, ask if you can teach it to do that thing for itself. So, I don't want to have to look at the browser every time to see if I did it correctly. So, instead, I teach **Claude**, 'Actually, you should be the one to go and open the browser.' So, it knows how to launch **Chrome**. It knows how to navigate here. It knows how to click the play button, look for confetti, make sure the audio is working, all that kind of stuff. And so now we were able to run this task for much longer without my input and actually get to something that is working well.

</details>

**Claire Velo**: 我对这个原型印象深刻。它比我想象的要可爱得多。也更健壮。纸屑看起来很棒。

<details>
<summary>Original English</summary>

**Claire Velo**: I I'm actually very impressed with this prototype. It's much more lovely than I thought it was going to to end up. Much more robust. And the confetti looks great.

</details>

**Brian Leven**: 纸屑看起来很棒。是的。好吧，我给你看另一个例子。我认为这就是**MCP**力量变得疯狂的地方。所以，我们来清空这个。我们只是要开始一个新的对话。我将完全撤销所有操作。让我们从头开始。所以，我构建的其他一些东西，你知道，我想，嗯，记住，我正在努力让我的团队的入职流程尽可能简单。

<details>
<summary>Original English</summary>

**Brian Leven**: The confetti looks great. Yeah. Well, here I'll I'll show you another example. This is, I think, where the power of **MCP** gets crazy. So, let's let's actually clear this. We're just going to start start a new new conversation here. I'm going to just totally undo everything. Let's just start from scratch. So, uh, a couple other things that I've built in, you know, I think, uh, remember like I'm trying to make the onboarding flow as simple as possible for people on my team.

</details>

**Claire Velo**: 是的。

<details>
<summary>Original English</summary>

**Claire Velo**: Yep.

</details>

**Brian Leven**: 嗯，所以**Claude**有所谓的斜杠命令。

<details>
<summary>Original English</summary>

**Brian Leven**: Um, so what **Claude** has is called slash commands.

</details>

**Brian Leven**: 你可以自己构建这些命令，它们基本上是美化过的提示，但它们也可以运行脚本。所以我们在项目中加入了一些斜杠命令，帮助人们快速上手。我有一个叫做`create prototype`的命令。然后你可以给它一个可选的名称。所以我们把这个叫做“我如何AI”。这和点击浏览器上的“新建”按钮做的是同样的事情，也就是我们之前做的。当然，不同之处在于我不需要点击东西。我有点想这样设计，让我基本上只在终端中操作。

<details>
<summary>Original English</summary>

**Brian Leven**: And you can just build these yourselves and they're basically glorified prompts, but they can also run scripts. And so we have some slash commands in the project that help people get going really quickly. So I have one called `create prototype`. And then you can give it an optional name. So we'll call this one how I AI. And that's going to do the same thing as clicking the new button on on the the browser, which is what we did earlier. Uh the difference of course is I don't have to click things. I kind of want to design this so that I basically live over in the terminal.

</details>

**Claire Velo**: 你能快速向我们展示一下你的仓库中这些命令是如何定义的吗？太棒了。谢谢。

<details>
<summary>Original English</summary>

**Claire Velo**: Can you show us really quickly in your repo just how these these commands get defined? Perfect. Thank you.

</details>

**Brian Leven**: 是的，当然。所以，嗯，它基本上是一个美化过的提示。它有一个名称、一个描述，然后是一些指令。所以在我们的例子中，我们说如何根据用户提供的内容来命名，告诉它在哪里查找以确定当前用户的用户名，如何创建新事物。它实际上提供了一些示例代码，用于创建页面和元数据文件。我想我还需要批准这个。所以它会……我们现在就用空白的吧。以及创建元数据。所以，你知道，AI在有良好上下文时会更好，但如果你只是提供了如何做事的例子，它也会非常非常好。所以，提供这些代码片段很重要，是为了向它展示成功是什么样子的，对吧？

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah, sure. So, uh, again, it's basically a glorified prompt. Um, it has a name, a description, and then some instructions. So in our case, uh, we say, uh, kind of how to come up with a name based on what the the user provides, tells it, uh, where to look to determine the current user's username, how to create the new thing. It actually provides some sample code to use for both creating the page and the the metadata file. I think I need to also approve this. So it goes, let's just do blank for now. Uh, as well as creating the metadata. So, you know, AI is better with good context, but it's also really, really good if you just provided examples of how to do things. So, the reason it's important to provide these code snippets is to show it what success looks like, right?

</details>

**Claire Velo**: 是的。

<details>
<summary>Original English</summary>

**Claire Velo**: Yep.

</details>

**Brian Leven**: 如果这只是创建空白文件的指令，它就不会知道要创建什么。所以，在我们的例子中，我们只是向它展示一个成功的例子。我们可能可以简化这个。它实际上是一个相当长的命令，但我们开始吧。所以它创建了这个和一个空白文本。这很棒。所以这只是一个开始的方式。你只需输入`/create a prototype`，然后它就会创建。但也许我们在**Figma**中有一些设计，我们想构建它。这可能行不通，但我们试试看。嗯，所以我们可以连接到**Figma MCP**，我可以复制这个框架的链接，然后说：“我们来构建这个**Notion UI**。”所以，嗯，以前你可以直接粘贴**Figma** URL的链接，然后尝试手动调用**Figma MCP**，它有时会问一些澄清问题，有时会构建它，然后中途停止。我不喜欢任何这些。所以，我们实际上构建了一个名为`/figma`的命令，它大致做了几件事。首先，它会检查你是否安装并运行了**MCP**服务器。你知道，对于团队中以前从未做过**MCP**工作的人来说，他们可能不知道如何做。所以，它会检测你是否安装了它，如果发现没有安装，它就会教你如何做。所以，它实际上会向用户返回如何设置所有这些东西的说明。然后它会进入A阶段，设计或从**Figma**中提取设计。然后它会实现它。然后最重要的是，我们进入第三个阶段，叫做验证循环，它会打开浏览器，并将它创建的实现与原始的**Figma**文件进行比较。我想我的指令基本上是不断循环，直到你完成了两个循环，没有更多的更改。哦，是的，这里。重复直到实现匹配，或者在三次迭代后没有更改，然后停止迭代。所以，我们看看会发生什么。我想说它大概80%的时间能做到80%正确，但这就是现在AI的现状。

<details>
<summary>Original English</summary>

**Brian Leven**: If this was like just instructions to create blank files, it wouldn't know what to create. So, in our case, we're just showing it an example of of success. And we could probably simplify this. It's actually quite a long command, but but here we go. So it created this and a blank piece of text. That's great. So that's just one way to start. You just type `/create a prototype` and then and then that'll create. But maybe we have some design in **Figma** and we want to build this. This might not work, but let's try it. Um, so we can connect to the **Figma MCP** and I can just copy a link to this frame and say like let's build this uh this **Notion UI**. So, uh, before you could just paste uh a link to a **Figma** URL and try and manually invoke the **Figma MCP** and it would sometimes ask clarifying questions and sometimes it would build it and then sort of stop halfway through. I don't like any of that. So, we actually built a command called `/figma` and it roughly does a couple of things. The first is it actually checks that you have the **MCP** server installed and running. You know, for people on the team who have never done **MCP** stuff before, they might not know how to do this. And so, it detects if you have it installed and if it doesn't if if it finds that it's not installed, it'll just teach you how to do it. So, it actually returns instructions to the user on how to set all this stuff up. And then it moves on to phase A designing uh or extracting the design from **Figma**. Then it'll implement it. And then the most important thing is we enter this third phase called the verification loop where it's going to open the browser and compare the implementation it created to the original **Figma** file. And I think my instructions are basically keep looping until you've gone through like two loops where there were no more changes. Oh yeah, here. repeat until the implementation matches or after three iterations with no changes and then stop iterating. So, let's just see what happens. This I would say it gets like 80% correct 80% of the time, but that's just that's just how AI is right now.

</details>

**Claire Velo**: 我本来想说大概60%。所以，我想我猜对了。嗯，实际上，你知道，我认为是60%，但这个命令、这个循环和这些指令，以及两个**MCP**的结合，实际上让我们达到了80%。

<details>
<summary>Original English</summary>

**Claire Velo**: I was going to say about 60%. So, I think I was right. Well, actually, you know, I think it is 60%, but this this command and this loop and these instructions and like the pairing of the two **MCPS** actually gets us to 80%.

</details>

**Claire Velo**: 我想向大家指出这一点，因为我发现使用**MCP**最令人沮丧的事情之一，即使作为一个相当熟练的用户，就是你必须使用这些“魔法关键词”来调用**MCP**以及正确的工具和正确的东西。你知道，有时我遇到的一个挑战是，我有很多**MCP**使用相同的工具名称，因为SaaS中很多东西都命名相同，比如每个人都有“项目”的概念，每个人都有“页面”或“文档”的概念。所以我喜欢这种想法，通过斜杠命令强制调用特定的**MCP**，甚至不仅仅是强制调用特定的**MCP**，而是强制调用该**MCP**中的特定工具集。这非常非常有用。然后我要表扬你顶部的说明，它教导那些完全不知道自己在做什么的人如何安装这个东西。对于这个斜杠命令的消费者来说，这是一个非常好的用户体验补充，而这个消费者可能不是你。所以这是人们应该认真思考的事情。

<details>
<summary>Original English</summary>

**Claire Velo**: I want to call call this out for folks because one of the things that I find most frustrating using **MCPS** even as a fairly sophisticated user is one, you just have to use these like magic keywords to invoke the **MCP** and the right tool and the right thing. And you know sometimes I have one of the challenges I have is I have a lot of **MCPS** that use the same tool names um because so much across SAS is named the same like everybody has the concept of projects everybody has the concepts of pages or documents and so I like this idea of like force invoking a specific **MCP** via a slash command and not even just force invoking that specific **MCP** but force invoking a specific set of tools in that **MCP**. super super useful. And then I will give you props for the instructions at the top that teach somebody if you have no idea what you're doing here, how to even get this thing installed. That's such a nice piece to add in as user experience for a consumer of this um slash command that might not be you. Um and so that's something that people should really really think about.

</details>

**Brian Leven**: 是的。是的。嗯，我还要说，这很有趣，因为我实际上看过很多这样的视频，即使是回顾六个月前的那些视频，工具的发展速度也令人惊讶。所以我可以想象，出于某种原因，六个月后观看这个视频的人会看着我们现在所做的事情，然后说：“哦，多么天真，你知道，我们已经走了这么远，**MCP**已经不再是主流了。”或者类似的话，对吧？我现在也有这种感觉，**MCP**它不是最好的东西，但它是我们目前拥有的最好的东西，对吧？它上下文效率很低。有时它会永远运行。有时它会，是的，它只是会把你的上下文窗口撑爆，但它是我们目前拥有的最好的东西。所以即使只是看着这个，对吧？这就是我们构建的设计。这实际上只是粘贴了**Figma**文件的链接。没有其他自定义指令。现在在右边，它应该是，嗯，我想我之前遇到了一个问题。是的，这个东西出了点问题。我们再试试**Chrome DevTools MCP**。我想我中途退出了，因为它检测到与窗口的一些冲突。但无论如何，这默认情况下已经很不错了。然后从这里开始，我将进行迭代。你知道，你可能会注意到一些事情，比如没有悬停状态，一些图片损坏了，但这些都只是很容易的后续任务。

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah. Yeah. Um, I would say also it's funny because I I've actually watched a bunch of these videos and looking even back at the ones from 6 months ago, it's crazy how far the tooling has come. And so I imagine that people who for whatever reason might be watching this video in 6 months will look at what we're doing here and be like, "Oh, how naive, you know, we've come so far **MCP** is no longer a thing." Or something like that, right? And I kind of feel that way now where **MCP** is it's like not the best thing, but it's the best we have so far, right? Like it's very context inefficient. Sometimes it runs forever. Sometimes it Yeah, it just like blows up your context window, but it's the best we have right now. So even just watching this, right? Like here's our design that got built. This was literally just pasting the link to the **Figma** file. No other custom instructions. And now over here on the right, it should be uh I think I ran into an issue earlier. Yeah, the something got busted with this. Let's try the **Chrome DevTools MCP** again. I think I quit it midway through because it was detecting some conflict with the window. But anyways, this is pretty good by default. And then from here, I would iterate. You know, some things things you might notice would be like there's no hover states, some of these images are broken, but those are just some easy follow-up tasks.

</details>

**Claire Velo**: 嗯，你这是从设计角度做的，但想想有多少工程师坐在那里，像像素一样把**Figma**原型拉到前端。你知道，如果你有一个很棒的设计系统，也许这更容易做到，但这并不是我们刚刚看到的27秒内就能完成的。

<details>
<summary>Original English</summary>

**Claire Velo**: Well, and you're doing this from a kind of design perspective, but think about how many engineers sit there and like pixel pull over **Figma** prototypes into the front end. And you know, if you have a great design system, maybe that's easier to do, but it's not what the 27 seconds that we just watched to scaffold stuff out.

</details>

**Claire Velo**: 所以我只是觉得，你知道，在这些资产到资产的交接中减少摩擦，这在我20多年的技术生涯中一直是实现某项功能最昂贵的部分，设计师给你一个设计，然后你必须进入前端，或者前端必须连接到后端。所有这些小部分都可以被简化并更快地完成。然后你就可以把时间花在优化、性能、感觉、运作方式上。我认为这真的很有趣，从一个构建者的角度来看。

<details>
<summary>Original English</summary>

**Claire Velo**: And so I just think you know the friction reduction in these um you know assetto asset handoffs which for my entire career 20 plus years in tech have been the most expensive part of implementing something where a designer gives you a design and then you have to get into the front end or the front end has to be hooked up to the back end. all those little pieces can be smoothed out and done much faster. And then you can spend the time on the optimizations, the performance, the how it feels, how it how it works. And I think that's just really it's really fun from a builder perspective.

</details>

**Brian Leven**: 完全正确。太有趣了。是的，我的意思是，即使只是坐在这里看着这个，我仍然觉得这很神奇，对吧？就像现在它正在使用**Chrome DevTools MCP**，它循环并修复了损坏的图像，并创建了这个清单，比如“好的，一切看起来都正常。”它有这个底部栏。这些东西显然是错的，但我们可以用后续提示来修复它们。但再说一次，目标是，我们能否在字面上一个提示中达到80%？我只是粘贴了一个链接，它就自行迭代，达到了大致完成的状态。

<details>
<summary>Original English</summary>

**Brian Leven**: Totally. It's so fun. And yeah, I mean, even just sitting here watching this, I still just find this magical, right? Like now that it's using the the **Chrome Dev Tools MCP**, it like looped and fixed the broken images and like created this checklist of stuff like, okay, everything appears to be right. It's got this bottom bar. These things are obviously wrong, but we could go and fix those with the follow-up prompt. But again, the goal is like, can we get 80% in literally one prompt? I just pasted a link and it just iterated itself towards something that's roughly complete.

</details>

**Claire Velo**: 我知道。每次有人有点反感AI辅助编码时，我都会说：“你知道我以前为了写CSS，必须来回走上坡路吗？做这个一点都不好玩。”

<details>
<summary>Original English</summary>

**Claire Velo**: I know. And every time somebody is like a little anti-AI assisted coding, I'm like, do you know that I used to have to walk uphill both ways for my CSS? Like it was not fun to do this.

</details>

**Brian Leven**: 哈哈。我发现这简直令人着迷。这太令人着迷了。

<details>
<summary>Original English</summary>

**Brian Leven**: Like [laughter] I I find this just mesmerizing. This is so mesmerizing.

</details>

**Claire Velo**: 这太棒了。本期节目由**Orcus**赞助，该公司是开源**Conductor**的幕后推手，该平台为现代企业应用和代理工作流提供复杂的流程编排。传统的业务流程自动化工具正在失效。孤立的低代码平台、过时的流程管理系统以及断开连接的API管理工具并非为当今事件驱动、AI驱动的云原生世界而构建。**Orcus**改变了这一切。通过**Orcus Conductor**，你将获得一个现代化的编排层，它具有高可靠性、支持可视化和代码优先开发，并能实时将人类、AI和系统整合在一起。它不仅仅是关于任务。它是关于编排一切：API、微服务、数据管道、人工干预操作，甚至自主代理。因此，你可以轻松构建、测试和调试复杂的工作流。添加人工审批，自动化后端流程，并以企业规模编排代理工作流。所有这些都同时保持企业级的安全性、合规性和可观察性。无论你是现代化遗留系统还是扩展下一代AI驱动的应用程序，**Orcus**都能帮助你快速从想法到生产。**Orcus**，编排未来的工作。了解更多并开始构建，请访问orcus.io。

<details>
<summary>Original English</summary>

**Claire Velo**: This is great. This episode is brought to you by **Orcus**, the company behind Open-source **Conductor**, the platform powering complex workflows and process orchestration for modern enterprise apps and agentic workflows. Legacy business process automation tools are breaking down. Siloed low code platforms, outdated process management systems, and disconnected API management tools weren't built for today's event-driven AI powered cloudnative world. **Orcus** changes that. With **Orcus Conductor**, you get a modern orchestration layer that scales with high reliability, supports both visual and code first development, and brings human AI and systems together in real time. It's not just about tasks. It's about orchestrating everything. APIs, microservices, data pipelines, human in the loop actions, and even autonomous agents. So build, test, and debug complex workflows with ease. add human approvals, automate back-end processes, and orchestrate agentic workflows at enterprise scale. All while maintaining enterprisegrade security, compliance, and observability. Whether you're modernizing legacy systems or scaling nextgen AIdriven apps, **Orcus** helps you go from idea to production fast. **Orcus**, orchestrate the future of work. Learn more and start building at orcus.io. That's o r kes.io.

</details>

### AI技能与命令：提升效率

**Claire Velo**: 还有其他你认为超级有用的命令吗？

<details>
<summary>Original English</summary>

**Claire Velo**: Are there any other commands that you think are super useful?

</details>

**Brian Leven**: 是的。是的，我可以给你看几个。嗯，我想稍微往上滚动一点。实际上，很早之前有一个步骤，你可以看到它反复运行一个叫做`bun run claude skills find icon`的技能。那是什么？嗯，如果你看我们这里的设计，我们实际上有很多**Notion**特有的图标，对吧？比如我们有这个AI脸，我们有主页，收件箱。我们项目中有所有的图标。问题是AI在估计图标名称方面真的很差。或者更确切地说，它使用最明显的名称，这并不总是与代码中的名称匹配。例如，像这个脸部图标，AI不可能知道我们称之为“什么”。或者一个非常常见的情况是，如果你有一个搜索放大镜，对吧？它会直接假设它叫做`search icon`，而实际上在我们的代码中它叫做`magnifying glass icon`。所以这种图标幻觉变得非常非常烦人。所以，我写了一个叫做`find icon`的小技能。这个技能基本上说，听着，每当你打算实现一个图标时，首先去实际查看整个项目，但也要查找图标的同义词或密切相关的词。所以，如果你要查找一个叫做`search icon`的东西，也尝试搜索`magnifying glass icon`。它实际上编写了一个**TypeScript**脚本来完成这项工作，只是遍历我们图标目录中的所有文件，大概有5000个，对吧？这很多。所以，如果它试图将所有这些加载到上下文中，效率会非常低。它需要自己编写一个脚本来进行更有效的搜索。所以，在这个循环中，是的，你可以看到它找到了——它查找了“magnifying”并找到了`magnifying glass icon`。它查找了“inbox”，查找了“gear”和“trash”，以便正确获取所有这些东西。现在，这个技能之所以存在，是因为我们团队中的所有人都对它反复出现幻觉感到非常非常沮丧。嗯，很遗憾它显然错过了下面三个；它没有正确获取它们。但是它在第一次尝试中就获取了这些，这是一个巨大的进步。所以我认为，我们有这些你手动运行的命令，而技能是AI应该自动检测并在适当时候使用的能力，它会根据你给它的描述和标题来知道这样做。所以在这种情况下，`find icon`，然后是如何搜索图标。当然，最好的部分就是让它通过调用实际的编码脚本，在你的电脑上以编程方式完成事情。所以，这真的很有帮助。它为我们节省了大量时间，只是修复导入，然后“不，`search icon`不存在”，这些烦人的步骤。

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah, I can show you a couple. I want to scroll back up a little ways actually. There was this step very early on where you can see it was running over and over again this skill called `bun run claude skills find icon`. What's that? Well, if you look over here in our design, we actually have a bunch of very **Notion**-specific icons, right? Like we have this AI face, we've got home, inbox. We have all of the icons in our project. The problem is **AI** is really bad at estimating what the name of an icon should be. Or rather, it uses the most obvious name possible, which doesn't always match what's in code. For example, this face icon, there's no way **AI** would know what we call this. Or a very common one is, if you have a search magnifying glass, it will just assume that it's called `search icon` when in fact in our code it's called `magnifying glass icon`. And so this icon hallucination was getting really, really annoying. So, I wrote a little skill called `find icon`. The skill basically says, 'Look, anytime you're going to implement an icon, first go and actually look through the whole project, but also look for synonyms or closely related words to the icon.' So, if you're going to look up something called `search icon`, also try search for `magnifying glass icon`. And it actually wrote a **TypeScript** script to do this, to just iterate through all of the files in our icons directory, which is like 5,000, right? It's a lot. So, it would actually be very inefficient for it to try and load all of that up into context. It needs to write itself a script to do more effective searching. So, in that loop here, you can see it found—it looked up 'magnifying' and found the `magnifying glass icon`. And it looked up 'inbox' and it looked up 'gear' and 'trash' in order to get all of these things correctly. Now, this skill had to exist after all of us on the team just got really, really frustrated with it hallucinating over and over and over again. It's sad because it obviously missed these bottom three; it didn't get them correct. But the fact that it got these on the first pass is a huge step up. So the way I think about it is, we have these commands that you run manually, and skills are these capabilities that the **AI** should detect automatically and sort of use at the appropriate time, and it'll know to do that based on the description and title you've given it. So in this case, `find icon`, and then how to search for icons. And of course, the best part is just letting it do things programmatically on your computer by calling actual coded scripts. So, this was really helpful. Saves us a lot of time and just fixing imports and, 'Nope, `search icon` does not exist,' those kinds of annoying steps.

</details>

**Claire Velo**: 嗯，我喜欢这个，第一，这正是你会对一个初级设计师或工程师进行入职培训时所做的事情，你会解释说：“有时我们称之为‘搜索’，但实际上不是。它是‘放大镜’。你只需要去找到最接近的同义词。”

<details>
<summary>Original English</summary>

**Claire Velo**: Well, what I like about this uh is one, this is exactly what you would do to like a junior designer or engineer onboarding, you would like explain you'd be like sometimes we call it search, but not really. It's magnifying glass. You just got to go find like the closest synonym.

</details>

**Claire Velo**: 能够向代理、技能或工具描述这一点，然后让它为你以编程方式完成，这真的很有用。嗯，我们确实有一期关于**Claude**技能的“我如何AI”节目，但我们没有详细讨论的一个非常重要的部分是，**Claude**技能可以与脚本捆绑在一起。所以，将自然语言提示（在`skill.mmarkdown`中）与一组编程工具（脚本）结合起来的能力是一个非常强大的组合。而且**Claude**非常擅长制作这些。

<details>
<summary>Original English</summary>

**Claire Velo**: And the ability to be able to describe that to an agent or a skill or a tool and then let it do it programmatically for you is really useful. Um, we do have a how I how I AI episode on **Claude** skills, but one piece we don't go into in detail, which I think is really important is **Claude** skills can be bundled with scripts. And so the ability to combine both um, you know, natural language prompting, which is in the `skill.mmarkdown`, with a set of programmatic tools in terms of scripts is a very powerful combination. And **Claude's** very good at making these.

</details>

**Brian Leven**: 哦，是的，所有这些，我没有写一行代码，对吧？这100%是：“嘿，我只需要解决这个问题。为此创建一个技能。”在创建该技能时，也创建一个脚本，以便你可以更有效地工作。这100%是提示生成的。

<details>
<summary>Original English</summary>

**Brian Leven**: Oh yeah, like all this like I did not type a single line of code in this, right? Like this is 100% like, hey, I just need this problem to be solved. Create a skill for it. And in creating that skill, also create a script so that you can work more effectively. Like this is 100% prompted.

</details>

**Claire Velo**: 向我们展示你最后一个命令，因为我认为这是一个非常有用的命令。

<details>
<summary>Original English</summary>

**Claire Velo**: Show us your your last command because I think this is a really useful one.

</details>

**Brian Leven**: 好的，这个是相当新的。我想我上周才合并它。回到**原型游乐场**的问题，它仍然是一个**Next.js**应用。它仍然是**React**、**TypeScript**和**Git**以及分支，这对于一个可能只习惯在**Figma**中进行原型开发，或者被终端或代码吓倒的人来说，概念太多了。所以我正在努力弄清楚如何让这个东西更容易上手？如何让它更容易入门，但又不会变得太简单，对吧？

<details>
<summary>Original English</summary>

**Brian Leven**: Okay, this is fairly new. I think I emerged this last week. Going back to sort of the problem with **Prototype Playground**, it's still a **Next.js** app. It's still **React** and **TypeScript** and **Git** and branches and it's just a lot of concepts to throw at someone who maybe is used to only prototyping in **Figma** or they're intimidated by a terminal or code. And so I'm trying to figure out like how do we make this thing more approachable? How do we make it easier to onboard but also not dumbed down, right?

</details>

**Brian Leven**: 我希望人们学习如何使用电脑。我希望人们甚至能潜意识地吸收**Git**、分支、拉取请求和合并的概念。所以我不知道最好的方法是什么，但我的第一次尝试是创建这个技能，或者说这个命令，叫做`deploy`。`deploy`基本上做两件事。第一，它会检查先决条件，确保你的电脑上安装了**GitHub CLI**工具，并且你已经通过了身份验证。如果你没有，它会引导你完成这些步骤。然后第二步是，它会一步一步地引导你如何部署你刚刚创建的原型，以便你可以与团队中的某人分享链接。嗯，我们看看会发生什么。我现在就试试。我将点击`deploy`，我们看看会发生什么。嗯，这里面有几个非常酷的循环，我认为它们为人们节省了大量时间。所以，我们可以看到它正在执行先决条件步骤。它正在确保我已登录**GitHub**。现在，这里的第一个问题是，它正在查看我是否在一个**Git**分支上。它注意到我不在。我在`main`分支上，它不应该这样做，对吧？我们绝不希望推送到`main`。所以我想它应该做的是帮助我创建一个新分支。嗯，我们看看它是否真的能正确完成。它还在尝试查找一些**TypeScript**错误，并且会运行一些测试。我基本上告诉它做所有这些事情，因为如果你把代码推送到**GitHub**，然后等待所有的检查通过，如果它们失败了，你又得回到你的电脑上修复东西，那真的非常烦人。

<details>
<summary>Original English</summary>

**Brian Leven**: I want people to learn how to use computers. I want people to even subconsciously absorb the ideas of **Git** and branching and pull requests and merging. So I don't know the best way to do that but my first attempt is to create this skill called or this command called `deploy`. And `deploy` does basically two things. The first is it like goes through prerequisites and makes sure that it has the **GitHub CLI** tool installed on your computer and that you're authenticated. And if you're not, it like walks you through those steps how to do it. And then the second step is it will just walk you through step by step how to get this prototype you've just created deployed so that you can share the link with someone on your team. Uh let's see what happens. I'm going to try it now. I'm going to hit `deploy` and we'll see what happens. Um there's a couple of really cool loops in here that I think save people a lot of time. So, we can see it going through the prerequisite steps here. It's making sure I'm logged into **GitHub**. Now, the first thing here, look, it's looking to see if I'm on a **Git** branch. It notices I'm not. I'm on `main`, and it shouldn't be doing that, right? Like, we never want to push to `main`. So, I think what it should do is help me create a new branch. Um, and we'll see if it actually does it correctly. It's also trying to find some **TypeScript** errors and it's going to run some tests. I basically told it to do all this stuff because it's really annoying if you push code to **GitHub**, wait for all the checks there to pass. If they fail, then you got to come back to your computer, fix stuff.

</details>

**Claire Velo**: 好的，太棒了。所以它创建了一个分支。

<details>
<summary>Original English</summary>

**Claire Velo**: Okay, great. So, it created a branch.

</details>

**Brian Leven**: 现在它正在暂存我们的更改。

<details>
<summary>Original English</summary>

**Brian Leven**: Now, it's staging our changes.

</details>

**Claire Velo**: 分支名称不错。

<details>
<summary>Original English</summary>

**Claire Velo**: Nice branch name.

</details>

**Brian Leven**: 太完美了。正在创建提交。

<details>
<summary>Original English</summary>

**Brian Leven**: It's perfect. Creating the commit.

</details>

**Claire Velo**: 我会给……我喜欢这个。这是个好主意。我也会给所有还没用过**Git**的人一个学习**Git**的小窍门。我就是喜欢**Git GitHub**桌面应用。它就像，它给你所有这些操作的按钮。你可以看到你的差异。你可以用按钮创建分支。所以我认为这很棒。如果你被命令行吓倒了，那真的有一个设计精美的桌面应用你可以使用。没错。它很不错。

<details>
<summary>Original English</summary>

**Claire Velo**: I'll give I love this. This is a great idea. I will also give my just like hack to learning **Git** for anybody who hasn't used it. I just love the **Git GitHub** desktop app. It just like it gives you buttons for all of this. You can see your diffs. You can like create branches with buttons. So I think this is awesome. And if you are intimidated by the command line, there's like literally a beautifully designed desktop app that you can use. True. It's pretty nice.

</details>

**Brian Leven**: 没错。

<details>
<summary>Original English</summary>

**Brian Leven**: True.

</details>

**Brian Leven**: 好的，现在看看这个。所以它创建了PR，在指令中我告诉**Claude**：“嘿，每当你创建PR时，就在用户的默认浏览器中打开它。”所以，现在我们这里打开了我们的PR。嗯，这个部署到**Vercel**的检查会失败，但这没关系，因为我给它多加了一步。所有这些红色看起来很吓人，但其实不然。我告诉**Claude**每30秒或每60秒监控一次CI，直到所有检查通过，我告诉它我关心的具体检查。如果任何检查失败，就自行修复，然后推送更改。所以，你知道，如果人们将某些东西推送到**GitHub**，并且出现**TypeScript**错误，他们会在**GitHub UI**中看到一些错误。他们会截图。他们会通过**Slack**发给我，然后说：“我的东西为什么不工作？”我完全想避免这种情况。你知道，回到我的第一原则，如果AI要求你做某事，比如检查PR或告诉我CI状态，你真的应该思考如何教**Claude**自己做这件事。所以在这里，这个`/deploy`命令实际上就是端到端的。我只是坐着看它一遍又一遍地循环，检查它的提交状态，它的CI状态，确保一切正常。然后当这里所有的复选标记都变成绿色时，脚本就会停止。我认为这非常棒。我希望它能降低学习所有这些工具的门槛和恐惧感，但同时，你知道，如果你好奇，你也可以跟着阅读并理解正在发生的事情。它被指示用清晰的英语沟通它正在做什么。

<details>
<summary>Original English</summary>

**Brian Leven**: Well, now check this out. So, it's created the PR and in the instructions I've told **Claude**, hey, whenever you create the PR, open it in the user's default browser. So, now we have our our PR opened here. And uh this check to deploy it to **Vercel** will fail, but that's okay because I give it one more step here. And all this red looks scary, but it's not. I tell **Claude** to just monitor the CI every 30 seconds or every 60 seconds until all of the checks pass and I tell them the the specific checks that I care about. And if any of the checks fail, just fix yourself and then push the changes. So, you know, if people push something to **GitHub** and there's a **TypeScript** error, they'll see some error over here in the **GitHub UI**. They'll take a screenshot. they'll send it to me on **Slack** and be like, "Why is my thing not working?" I want to just avoid that entirely. And you know, going all the way back to my first principles, like if the AI is asking you to do something like check the PR or tell me the CI status, you should really be thinking about how do I teach **Claude** to just do that for itself. So over here, this `/deploy` command literally is just end to end. I just sit back and watch it loop over and over and over again, checking its its commit status, its CI status, making sure everything works. And then when all of the check marks over here are green, the script will stop. I think this is pretty awesome. I I feel uh I hope it lowers the barrier and like the intimidation factor of having to learn all these tools, but at the same time, you know, if you are curious, you can just sort of read along and understand what's happening. It's like instructed to communicate in clear English what it's doing.

</details>

**Claire Velo**: 我最喜欢的部分，而且这不会是人们想的那样。我认为斜杠命令很棒。我认为运行所有预处理也很棒。我喜欢你直接在浏览器窗口中打开它。这是那种事情，你知道，即使你创建了分支，创建了拉取请求，说它准备好了，人们还是会想：“好吧，那现在我该怎么办？”而仅仅是强制打开浏览器窗口，然后说：“它在**GitHub**上就在这里。”我的问题是，你需要在**原型游乐场**中进行代码审查吗，还是你只是……

<details>
<summary>Original English</summary>

**Claire Velo**: My favorite part of this, and it's not going to be what people think. I think the slash command is amazing. I think running through all the um pre-pro. I love that you just open it up in a browser window. It's one of those things that, you know, even if you created the branch, created the pull request, said it was ready to go, people are like, "Okay, well now now what do I like now what do I do?" And just forcing open the browser window and saying like, "This is where it lives on **GitHub**." My question is, do you have to get your code reviewed in prototype playground or do you just...

</details>

**Brian Leven**: 嗯，对于**原型游乐场**？不用。我的意思是，人们总是可以要求，但我们基本上是“yolo merge”（直接合并）。我想我主要检查的是，我的PR是否意外地搞砸了别人的原型？

<details>
<summary>Original English</summary>

**Brian Leven**: Uh for **Prototype Playground**? No. I mean, people can always ask for it, but no, we pretty much just yolo merge. I think the thing that I mostly check for is like, did my PR accidentally mess up someone else's prototype?

</details>

**Claire Velo**: 是的。

<details>
<summary>Original English</summary>

**Claire Velo**: Yeah.

</details>

**Brian Leven**: 但再说一次，这种情况发生过几次，很烦人。所以后来我们创建了这个`claude.local`文件，上面写着“重要，不要这样做”，你知道，这似乎解决了问题。所以是的，很多“yolo enable automerge”。当然，它并不完美。我不知道。它似乎在这里产生了一些幻觉。比如它认为这些通过了，即使它们没有。我不知道。它很接近了。

<details>
<summary>Original English</summary>

**Brian Leven**: But again, like that happened a couple of times and that was annoying. So then we created this `claude.local` file that's like important, do not do this, you know, and that seems to have have fixed the the problem. So yeah, a lot of uh yolo enable automerge. And of course, it's not perfect. I don't know. It's it seems to be hallucinating some stuff here. Like it thinks it thinks these passed even though they haven't. I don't know. It It's close.

</details>

### AI时代设计团队的转变

**Claire Velo**: 那么我来总结一下我们讨论的所有内容。你为整个团队创建了一个共享仓库，其中可以有按名称划分的目录。没有数据库。我们只是使用元数据JSON和共享代码将不同的原型放入这个仓库中。你设置了全局**Claude**规则和本地**Claude**规则，以及**Claude**命令和**Claude**技能，以引导人们沿着常见路径前进。我最喜欢的是**Figma**转代码。

<details>
<summary>Original English</summary>

**Claire Velo**: So I'm just going to zoom out everything that we went over. You created a shared repo for your entire team where you could have name level directories. No database. We're just using metadata JSON and and and um shared code to put different prototypes inside this repo. You set it up with both global **Claude** rules as well as local **Claude** rules plus **Claude** commands and **Claude** skills to sort of guide people along common paths. My favorite one is going to be **Figma** to code.

</details>

**Brian Leven**: 太酷了。

<details>
<summary>Original English</summary>

**Brian Leven**: It's so cool.

</details>

**Claire Velo**: 太棒了。太好了。然后你今天告诉我的第一条规则是，当**Claude**要求你做某事时，教**Claude**自己做。

<details>
<summary>Original English</summary>

**Claire Velo**: Beautiful. It's so good. And then the number one rule that I've heard from you today is when asked to do something by **Claude**, teach **Claude** to do it. It's itself.

</details>

**Brian Leven**: 是的。

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah.

</details>

**Claire Velo**: 所以，你有了这个很棒的原型游乐场。你设置了所有这些东西。这种从可能完全在**Figma**或这些低保真原型模型中进行设计，到真正依赖**Claude Code**、基于代码的原型开发，这种转变如何改变了设计团队？它改变了设计团队的一小部分吗？你觉得整个组织都在以某种方式发生转变吗？你觉得它如何改变了人们一起工作的方式？

<details>
<summary>Original English</summary>

**Claire Velo**: So, you have this amazing prototype um playground. You've set all this stuff up. How has let's just do a couple lightning round questions and get you on your way. And my first one is how is this shift from doing things, you know, maybe exclusively in **Figma** or in these lower fidelity prototype models to really leaning on things like **Claude Code**, codebased prototyping? How has that changed the design team? Has it changed a small part of the design team? Do you feel like overall things in the organization are shifting in in a way? How do you feel like it's changing the way people work together?

</details>

**Brian Leven**: 我仍然使用**Figma**。嗯，我可能仍然有60%到70%的时间花在**Figma**上。你知道，有些东西你制作出来，不需要在浏览器中，不需要编码。你只需要看看它，然后说：“是的，大致正确。我们应该发布它。”我发现当你设计使用AI的东西时，情况并非如此。所以，例如，如果你正在构建一个聊天机器人，或者在我的情况下，我从事**Notion AI**的工作，我认为你无法在**Figma**中设计一个好的聊天体验。你可以设计聊天输入的样子。你可以设计一个小聊天气泡和一个发送按钮，以及一个模型选择器的下拉菜单。我认为所有这些在**Figma**中都没问题，但你在**Figma**中无法设计的是实际使用这个东西时的感受。我可能应该在一开始就说这个，但**原型游乐场**之所以存在，是因为当我开始从事**Notion AI**的工作时，我实际上是在**Figma**中设计对话。你知道，就像用户会说这个，然后AI会说这个，然后它会完美地工作，创建一个页面或数据库，就像你在**Figma**中模拟这些“黄金路径”。

<details>
<summary>Original English</summary>

**Brian Leven**: I still use **Figma**. Um, I probably still spend 60 to 70% of my time in **Figma**. You know, there's just certain things that you're making that don't need to be in the browser. They don't need to be coded up. You can just look at it and be like, "Yeah, that's roughly right. We should just ship that." I find that as you're designing for things that use AI, that is not true, though. So for example, if you are building a chatbot or in my case, I work on **Notion AI**, I don't think you can design a good chat experience in **Figma**. You can design what the chat input looks like. You could design a little chat bubble and a send button and like a drop down for model picker. I think all that's fine in **Figma**, but what you can't design in **Figma** is what it actually will feel like to use that thing. I probably should have said this at the very beginning, but the reason **Prototype Playground** existed is because when I started working on **Notion AI**, I was literally designing conversations in **Figma**. you know, is like the user's going to say this and then the AI is going to say this and then it's going to work perfectly and create a page or a database and like you mock these golden paths in...

</details>

**Brian Leven**: 然后工程师去构建它，然后它根本就不是那样工作的，对吧？你发送一条消息，AI卡住了，或者它问了一个后续问题，或者它做错了事情，你需要纠正它。而**原型游乐场**对我来说，是一种连接到真实AI模型的方式，只是开始感受：“好吧，如果我提交这种提示，模型会如何工作？如果我将它连接到**Notion MCP**，它甚至知道如何创建一个页面吗？如果它遇到错误会发生什么？哦，对了，我们需要为此设计一个错误状态。如果模型思考了两分钟，而用户盯着一个空白的聊天屏幕，我们应该在那中间时间做什么来帮助他们感到自信它正在工作，它正在做事情。有没有办法显示增量进度？”我发现这些东西在**Figma**中设计起来非常非常困难。所以回到回答你的问题，我认为随着越来越多的人设计既用于AI又以某种方式整合AI的应用程序，他们将需要一些其他的、代码优先的原生工作方式，来真正理解模型能做什么。老实说，这感觉有点糟糕。感觉浪费了很多时间，每个月整个行业都必须学习：“哦，这个模型4.3.2 Max Pro的新功能是什么？”然后一个月后，所有这些都变得无关紧要，因为新的东西又出来了，然后你又去学习那个。嗯，这感觉像是在浪费时间。不幸的是，我认为这是必要的，因为模型的性能仍在每次发布时稳步提升。作为设计师，理解模型能够做什么真的非常重要，这样我们才能创造出恰好处于模型能力边缘的产品体验和设计。嗯，真正令人沮丧的是，如果你设计的东西是：“哦，用户只会要求一个很酷的网站，然后另一边就会出现一个完美的输出网站。”模型无法正确做到这一点，或者它们需要大量的微调和某种中间提示才能做到。设计师必须了解幕后发生的事情，才能设计出合理且可能的东西。所以我认为，随着越来越多的产品整合AI，设计师将不得不转向“原型优先”的思维方式，但可能是在底层有实际代码的原型优先，在那里你可以整合现代模型，看看它们在哪里出问题，看看它们在哪里表现良好，在哪里表现不佳，并真正形成关于哪些模型适合哪些事情的看法。嗯，就是这些。所以，说到哪些模型适合哪些事情，你正在使用我目前最喜欢的宝贝**Opus 4.5**。

<details>
<summary>Original English</summary>

**Brian Leven**: And then the engineers go and they build it and then it just doesn't work that way, right? It you send a message, the AI gets stuck or it asks a follow-up question or it does the wrong thing and you need to correct it. And **Prototype Playground** was for me a way to connect to real AI models and just start feeling out like okay how are the models going to work if I submit this kind of prompt what happens if I connect it to the **Notion MCP** doesn't even know how to create a page what happens if it runs into an error oh right we need to design an error state for this what happens if the model is thinking for two minutes and the user staring at an empty chat screen like what should we do in that intermediary time to help them feel confident that it's working that it's doing the thing. Is there any way to show incremental progress? Like I just found those things very very hard to design in **Figma**. So to go all the way back to answering your question, I think as more and more people are designing apps that both are for AI or incorporate AI in some way, they're going to need some other like native code first way of working to actually understand what the models can do. It feels honestly kind of bad. It feels like a lot of wasted time where every month the whole freaking industry has to learn like oh what are the new capabilities of this model 4.3.2 Max Pro and then a month later it's all irrelevant because the new thing has come out and then you learn that. Um it feels like a waste of time. Unfortunately, I think it's necessary because the model capabilities are still advancing quite steadily with each release. And it's really important as designers to understand what models are capable of doing so that we can create product experiences and designs that sort of live right at the edge of what the model's going to be able to do. Well, what's really frustrating is if you design something that's like, you know, oh, a user is just going to ask for a cool website and it's going to be this perfect output website on the other side. Models can't do it right or or they require a bunch of fine-tuning and and sort of like intermediary prompting to get that right. Designers just have to know what's going on under the hood there to to design something that's plausible and possible. So I I suppose the more products incorporate AI, the more designers will have to shift to thinking sort of prototype first, but probably prototype first with actual code under the hood where you can incorporate modern models and see where they break and see where they're good and see where they're bad and actually form an opinion about which models are good for which things. Uh that kind of stuff. So, speaking of which models are good for which things, and you're using my my current fave, my babe **Opus 4.5**.

</details>

### 工具栈选择：Claude Code与Cursor

**Claire Velo**: 为什么？为什么是**Claude Code**？为什么是**Cursor**，而不是这种非**Cursor**配置？告诉我你是如何选择这个工具栈的。

<details>
<summary>Original English</summary>

**Claire Velo**: Why? Why **Claude Code**? Why **Cursor** in this non-cursory configuration? Tell me how you arrived at this is your your tool stack.

</details>

**Brian Leven**: 我需要多玩玩**Cursor**的东西。我实际上认为**Cursor**的代理模式非常棒。我显然尝试过一点，但我还没有走那么远。我仍然非常欣赏**Cursor**的一点是，我实际上在技术上两者都用，比如如果我有一个文件，并且这里有一些错误。我仍然非常欣赏能够直接将鼠标悬停在错误上，然后有一个按钮显示“在聊天中修复”。

<details>
<summary>Original English</summary>

**Brian Leven**: I need to play with more of the **Cursor** stuff. I actually think **Cursor** agent mode is pretty awesome. I've like clearly tried it a little bit. I just haven't gotten that that far. The thing that I still really appreciate about **Cursor** I actually technically use both like if I have I don't know like some file and there's there's like some error here. I still really appreciate being able to just hover over the error and there's a button that says fix in chat.

</details>

**Claire Velo**: 是的。

<details>
<summary>Original English</summary>

**Claire Velo**: Y

</details>

**Brian Leven**: 那仍然比复制粘贴到**Claude Code**中更快。所以我实际上两者都用了一点。我只是觉得**Claude Code**做得最好。我不知道该怎么形容。当你使用不同的模型做不同的事情时，会有一种奇怪的感觉。就像对不同的人来说，它们就是感觉对了。对我来说，**Opus 4.5**在做我想要的事情上简直是好得离谱。我喜欢它解决问题的方式。我喜欢它的计划方式。我喜欢它的执行方式。我喜欢它与我沟通的方式以及它提出的后续问题。然后，你知道，为什么不在**Cursor**中使用**Opus 4.5**，而不是在终端UI中呢？我不知道。我认为这纯粹是个人偏好。有些人看到这个会说：“这看起来像垃圾。”他们想要按钮、UI、组件和下拉菜单之类的东西。而对我来说，我不知道。这只是感觉很好，很容易。

<details>
<summary>Original English</summary>

**Brian Leven**: That's still faster than like copying and pasting it down into **Claude Code**. So I actually use both a little bit. I just think **Claude Code** does the best work. I don't know how else to describe it. There's this weird feeling as you use all the different models for different things. It's like to different people, they just feel right. For me, **Opus 4.5** is just insanely good at doing what I want. And I like the way it approaches problems. I like the way it plans. I like the way it executes. I like the way it communicates back to me and the the follow-up questions it asks. And then, you know, why not use **Opus 4.5** in **Cursor** versus in the the terminal UI? I don't know. I think this is just purely personal preference. Like, some people look at this and they're like, "This looks like shit." Like, give me buttons and UI and components and and drop downs and things like that. And for me, I don't know. This just feels nice and easy.

</details>

**Claire Velo**: 感觉很好。就像我们在Every的朋友说的，每个模型都有“口”感。

<details>
<summary>Original English</summary>

**Claire Velo**: It just feels good. As our friends over at every say, each model has a mouth feel.

</details>

**Brian Leven**: 是的。是的。没错。**Claude Code**和**Opus**都有很好的“口”感。好的。然后我最后一个问题，因为你看起来像一个专业的提示工程师。

<details>
<summary>Original English</summary>

**Brian Leven**: Yeah. Yeah. Exactly. and **Claude Code** and **Opus** have a good one. Okay. And then my very last question because you are you seem like a uh expert prompter.

</details>

**Claire Velo**: 但是当AI不听话时，当它不听话时，当它编造出通过了但实际上没有通过的CI检查时，你的提示技巧是什么？

<details>
<summary>Original English</summary>

**Claire Velo**: But when AI is not listening when it's not listening when it makes up you know CI checks that passed where it didn't it didn't actually pass what is your prompting technique?

</details>

**Brian Leven**: 基本上，我注意到我能做出的东西有多好与我有多累之间存在直接关联。如果我到了某个地步，觉得“天哪，**Claude**太糟糕了。它做错了事情”，然后我回去重读我所说的话，我意识到我说的毫无意义。所以对我来说，编写更好提示的最佳解决方案就是去睡觉，明天再试。嗯，我不知道这算不算一个敷衍的答案。它并不是真正地编写更好的提示，但是，你知道，你的输出与你提供给它的上下文有多好直接相关。如果你给它的是困倦、疲惫、懒惰的“请修复这个”类型的命令，它就会做得不好。

<details>
<summary>Original English</summary>

**Brian Leven**: Basically, I notice there's a direct correlation with how good of things I can make and how tired I am. If I ever get to the point where, 'Man, **Claude** just sucks. It's doing the wrong stuff,' and I go back and I reread the thing that I said, I realize I made no sense. So the best solution for me to write better prompts is to go to bed, try again tomorrow. Which I don't know if that's a copout answer; it's not actually writing better prompts, but your output is directly correlated with how good of context you give the thing. And if you're giving it sleepy, tired, lazy, 'please fix this' type commands, it's going to do bad work.

</details>

**Claire Velo**: 我不知道你是不是这个意思，但你给了我很好的关系和育儿建议，我正在思考。我今天早上想让我的孩子做点什么。我很累，显然我的输入无法得到我想要的输出。

<details>
<summary>Original English</summary>

**Claire Velo**: I don't know if this is what you intended, but you gave me very good both relationship and parenting ad advice there, which I'm thinking about. I was trying to ask my kid this morning to do something. I'm pretty tired, and I clearly the inputs were not going to get get the outputs that I wanted.

</details>

**Brian Leven**: 嗯，这很容易。我的意思是，去睡个午觉就行了。你不是随时都可以这样做吗？

<details>
<summary>Original English</summary>

**Brian Leven**: Well, it's easy. I mean, just go take a nap. Can't you do that at any point that you need?

</details>

**Claire Velo**: 我喜欢这个。你知道，我最喜欢的小代理之一，**Devon**，它确实有睡眠功能。你可以让代理去睡觉，宝贝。我们只需要代理让我们去睡觉。嗯，**Brian**，这太棒了。

<details>
<summary>Original English</summary>

**Claire Velo**: I love that. You know, one of my my one of my favorite little agents, **Devon**, does have a sleep. You you can send the agent to sleep, baby. We just need we need the agents to send us to sleep. Well, **Brian**, this has been...

</details>

**Claire Velo**: 这真是一次深入的探讨，我认为是对设计团队如何开展工作，尤其是像你所说的，那些将要构建AI产品的团队，提供了一个非常有前瞻性的视角。那么，我们可以在哪里找到你，以及我们如何在**Notion**帮助你？

<details>
<summary>Original English</summary>

**Claire Velo**: Awesome. Just a deep dive, I think, in a very forward-looking view into how design teams, as you say, especially ones that are going to be building AI products, are going to start doing their work. So, where can we find you and how can we be helpful to you in **Notion**?

</details>

**Brian Leven**: 嗯，你可以在**Twitter**或X上找到我，我的账号是`Brian_1`，或者我的网站brianloven.com。然后我在**Notion AI**工作，我认为它确实是少数几个有用的知识工作代理之一。所以如果你还没试过，请试试看，并给我反馈。我们一直在努力让它变得更好，帮助它做得更多、更好、更快。所以请尝试**Notion AI**。

<details>
<summary>Original English</summary>

**Brian Leven**: Uh you can find me I'm mostly on **Twitter** or X uh `Brian_1` or my website brianloven.com. And then I work on **Notion AI** and I think it's genuinely uh one of the few useful sort of knowledge work agents. So if you haven't tried it, try it and send me feedback. We're always trying to make it better, help it do more things better, faster. So try **Notion AI**.

</details>

**Claire Velo**: 是的。我们播客也**Notion AI**的忠实粉丝。所以一定要去看看，一定要给出一些反馈，我们会直接发送给**Claude**，并把它放到**原型游乐场**中。**Brian**，感谢你加入“我如何AI”。

<details>
<summary>Original English</summary>

**Claire Velo**: Yeah. And we're big fans of **Notion AI** too here at the podcast. So definitely give it a look and definitely give some feedback and we will send it directly to **Claude** and put it in **Prototype Playground**. **Brian**, thank you for joining How I AI.

</details>

**Brian Leven**: 谢谢你的邀请。

<details>
<summary>Original English</summary>

**Brian Leven**: Thank you for having me.

</details>

**Claire Velo**: 非常感谢大家的观看。如果你喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下你的评论和想法。你也可以在**Apple Podcasts**、**Spotify**或你喜欢的播客应用上找到这个播客。请考虑给我们评分和评论，这将帮助其他人找到这个节目。你可以在howiiaipod.com上查看我们所有的剧集并了解更多关于节目的信息。下次再见。

<details>
<summary>Original English</summary>

**Claire Velo**: Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts. You can also find this podcast on **Apple Podcasts**, **Spotify**, or your favorite podcast app. Please consider leaving us a rating and review which will help others find the show. You can see all our episodes and learn more about the show at howiiaipod.com. See you next time.

</details>