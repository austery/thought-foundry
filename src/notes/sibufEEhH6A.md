---
author: How I AI
date: '2026-02-16'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=sibufEEhH6A
speaker: How I AI
tags:
  - accessibility
  - personal-software
  - workflow-automation
  - multimodal-ai
  - prompt-engineering
title: AI赋能视障工程师：Chrome扩展提升可及性与效率
summary: 本期节目采访了Baby List的首席软件工程师Joe McCormack，他分享了如何利用AI工具（如Gemini和Claude Code）克服视力障碍，提升日常生活和工作效率。Joe展示了为Slack开发的定制Chrome扩展，包括图片描述工具和拼写检查器，强调了“个人软件”在可及性方面的巨大潜力。他还分享了使用Gemini为孩子阅读的感人故事，并讨论了AI在弥合技术差距、提高开发效率方面的作用，以及在AI产品开发中保持一致性用户体验的重要性。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Baby List
  - OpenAI
  - Google
products_models:
  - Gemini
  - Claude Code
  - GPT-4o
  - Meta Glasses
  - Figma
  - Slack
  - VS Code Copilot
media_books: []
status: evergreen
---
### AI赋能视障工程师

**Joe McCormack**: 在我上大学之前，我因为一种罕见的遗传性疾病——**Leber氏遗传性视神经病变**，失去了大部分中心视力。我最近和一位同样因这种疾病而视力下降的人聊天，他们问了我一些事情，我当时就说：“哦，你现在用**Gemini**或**Chat GPT**就能做到所有这些了，世界变得容易多了。”

<details>
<summary>Original English</summary>

**Joe McCormack**: Right before I started college, I ended up losing most of my central vision due to a rare genetic disorder called **Liber's hereditary optic neuropathy**. I was talking with someone who was losing their sight recently from the same disease and they were asking about different things and I was like, "Oh, you can just do all of that now with **Gemini** or attach the world is a whole lot easier."

</details>

**Claire Vo**: 那么，你将向我们展示你为自己构建的一些工具。

<details>
<summary>Original English</summary>

**Claire Vo**: So, you're going to show us some of the things that you've built for yourself.

</details>

**Joe McCormack**: 当有人给我发图片时，我使用这个工具就能了解图片的大意，而不需要请别人给我解释。如果我在任何消息上按下Control+Shift+D，它就会弹出来，然后为我描述那张图片。最棒的是，我还可以问一些后续问题，比如“这个是给多大孩子用的？”它就会去**Chat GPT**那里获取答案。

<details>
<summary>Original English</summary>

**Joe McCormack**: So, when someone sends me an image, I use this tool to be able to get the gist of an image without needing to ask somebody to explain it to me. If I hit control shift D on any message, it's going to pop up and go off and describe that image for me. And the cool thing is I can go ask some follow-ups. What age child is this for? And it will head off to **Chachi** and get the response for this as well.

</details>

**Claire Vo**: 我很好奇，在**AI**的多模态世界里，你最兴奋的是什么？

<details>
<summary>Original English</summary>

**Claire Vo**: I'm curious for you, what are you most excited about in the multimodal world of **AI**?

</details>

**Joe McCormack**: 我一直害怕的一件事是，我能读故事吗？我能记住故事，我能讲故事。但你的儿子可能会说：“我想读这本书。”而你不得不说：“对不起，我不能。”现在，有了这么多不同工具的帮助，那个“对不起，我不能”变成了“对不起，我可以”。

<details>
<summary>Original English</summary>

**Joe McCormack**: One thing that I was always afraid of, can I read stories? I can memorize stories. I can tell stories. But your son being like, I want to read this book. And you having to be like, sorry I can't. And now that sorry I can't becomes sorry I can with the assistance of so many different tools.

</details>

### 嘉宾介绍与AI赋能之路

**Claire Vo**: 欢迎回到《How I AI》。我是**Claire Vo**，产品负责人和**AI**狂热者，致力于帮助大家更好地利用这些新工具进行构建。今天我们邀请到了**Baby List**的首席软件工程师**Joe McCormack**，他有视力障碍，他将向我们展示如何利用**AI**构建微型**Chrome**应用程序，让他的日常生活和工作更具可及性。你将学习如何使用**Claude Code**编写**Chrome**应用程序，并会受到启发，了解如何通过一些小改变让你的**Slack**更高效。让我们开始吧。本期节目由**Tines**赞助，**Tines**是一个智能工作流平台，为世界上最重要的工作提供支持。业务发展速度快于支持它的系统。团队被重复性任务、分散的工具和难以获取的数据所困扰。**AI**前景广阔，但在底层碎片化时却步履维艰。**Tines**解决了这个问题。它将你的工具、数据和流程统一在一个安全、灵活的平台中，融合了**AI**、自动化和人工干预。团队节省了时间，工作流运行更智能，**AI**真正提供了实际价值。客户现在每周自动化超过15亿次操作。**Tines**受到**Canva**、**Coinbase**、**Databricks**、**GitLab**、**Mars**和**Reddit**等公司的信任。请访问tines.com/hhowIAI试用**Tines**。**Joe**，感谢你加入《How I AI》。我想请你花点时间介绍一下你自己和你的故事，以及**AI**如何影响了你工作、构建有趣事物和参与精彩项目的能力，以及现在有了**AI**之后，你的生活与之前有何不同。

<details>
<summary>Original English</summary>

**Claire Vo**: Now welcome back to **How I AI**. I'm **Claire Vo**, product leader and **AI** obsessive here on a mission to help you build better with these new tools. Today we have **Joe McCormack**, principal software engineer at **Baby List**, who has a vision impairment, and he's going to show us how he uses **AI** to build microchrome apps to make his everyday life and work a lot more accessible. You're going to learn how to use **cloud code** to write **Chrome** apps, and you're going to be inspired at the little things you can do to make your own **Slack** a little bit more efficient. Let's get to it. This episode is brought to you by **Times**, the intelligent workflow platform powering the world's most important work. Business moves faster than the systems meant to support it. Teams are stuck with repetitive tasks, scattered tools, and hard to reach data. **AI** has huge promise, but struggles when everything underneath is fragmented. **Times** fixes that. It unifies your tools, data, and processes in one secure, flexible platform. Blending **Agette AI**, automation, and human-led intervention. Teams get their time back, workflows run smarter, and **AI** actually delivers real value. Customers now automate over 1.5 billion actions every week. **Tines** is trusted by companies like **Canva**, **Coinbase**, **Datab Bricks**, **GitLab**, **Mars**, and **Reddit**. Try **Tines** at times.com/hhow I AI. **Joe**, thanks for joining **How I AI**. And I want you to spend a little bit of time introducing yourself and your story and how **AI** has impacted your ability to do work and build interesting things and engage in lots of awesome projects and what's different about your life now with **AI** versus before.

</details>

**Joe McCormack**: 是的，我叫**Joe McCormack**。我是**Baby List**的首席软件工程师。我认为我进入计算机科学领域的过程比大多数人更有趣一些。在我上大学之前，我因为一种罕见的遗传性疾病——**Leber氏遗传性视神经病变**，失去了大部分中心视力。所以在进入**哈佛**之前，我对机械世界、机器人以及那个领域的一切更感兴趣。后来我发现，用手做事情变得越来越困难，每个月都更难。所以我选修了**哈佛**的计算机科学入门课程，立刻就爱上了它，我发现我获得了同样的创造感，能够提出想法并实现它。但那时，我可能无法完全与当时的竞争对手或我的其他同学处于同等水平。但后来，随着**AI**的兴飞速发展，我变得更加平等，有视力的人和视障人士之间的软件工程师差距正在日益缩小。在我的个人生活中，我认为它的影响甚至更大。我最近和一位同样因这种疾病而视力下降的人聊天，他们问了我一些事情，我当时就说：“哦，你现在用**Gemini**或**Chat GPT**分享你的屏幕就能做到所有这些了。”而当我刚开始失去视力时，我还在使用不同的放大工具，甚至像眼镜之类的东西。现在世界变得容易多了。我是一个狂热的**Meta Glasses**用户，还有其他一些东西也让我的个人生活变得轻松很多。但现在我确实做了很多**AI**产品工程方面的工作，我在**Baby List**领导**AI**赋能，并努力确保我们所有的软件工程师都能在软件开发生命周期的各个阶段尽可能高效地使用**AI**进行构建。

<details>
<summary>Original English</summary>

**Joe McCormack**: So yeah, my name is **Joe McCormack**. I'm a principal software engineer at **Baby List** and I think I took maybe a little bit more interesting journey than most into the computer science world. So, right before I started college, I ended up losing most of my central vision due to a rare genetic disorder called **Liber's hereditary optic neuropathy**. And so, before starting at **Harvard**, I was more interested into the mechanical world and kind of robotics and everything in that space. And then found that that was a lot harder and doing things with my hands was becoming a lot harder month after month. And so I took the intro to computer science course at **Harvard** and immediately fell in love and found that I got the same feeling of creativity and being able to come up with the idea and make it happen. But now I was on maybe not a full equal plane to my competitors at that time or my other students but then obviously as **AI** took off became even more equivalent and the gap between I think software engineer for a sighted person and a visually impaired person is closing day by day and also in my personal life I think it's even been extra impactful I was talking with someone who was losing their sight recently from the same disease and they were asking about different things And I was like, "Oh, you can just do all of that now with sharing your screen with **Gemini** or **Chat VT**." Whereas, when I was first losing my site, it was using different magnification tools or even like glasses and things. And it's like now the world is a whole lot easier. I'm an avid **meta glass** user. And different things to make my personal life a lot easier as well. But yeah, I do lots of **AI** product engineering now and I at **Baby List** lead the **AI** enablement and trying to make sure all of our software engineers can build with **AI** as productively as possible at all different parts of the software development life cycle.

</details>

**Claire Vo**: 所以你找到了一种方法，一是调整你对工程的兴趣，使其对你来说更具可及性；二是利用这些**AI**工具，真正提高你过去可能使用过的辅助技术的可及性和用户体验，并且你能够自己做得更好。我喜欢我们现在所处的这个**个人软件**时代，不幸的是，无障碍软件和满足很多人需求的定制软件，在某些情况下，从经济上来说并不是一个可行的业务。因此，在更广阔的经济世界中，没有太多动力去构建一套完整的强大工具，以满足每个应得之人的需求。我喜欢我们现在能够用**AI**做到的事情，不仅能够构建更有趣的无障碍工具和平台，而且人们可以为自己构建这些解决方案，并且它们可以根据你的经验、需求和优势进行高度定制。我认为这是**AI**一个被低估的好处。所以你将向我们展示你为自己构建的一些东西，你还将带领我们了解你的编码流程，我认为这非常棒，可以让我们一步步地学习如何构建这些工具。

<details>
<summary>Original English</summary>

**Claire Vo**: So you figured out a way one to adjust your interest in engineering to something that's a little bit more accessible for you and then two lean into how these **AI** tools can really increase the accessibility and user experience of supportive technology that you've maybe used in the past but that you've been able to make better yourself. And what I love about this **personal software** moment that we're in right now, which is unfortunately accessibility software and custom software that meets the needs of a lot of people, is simply in some instances not an economically viable business, for example, to build. And so in the kind of broader economic world, there's not a lot of incentive to build a full set of robust tools that can meet the needs of everybody who deserves to have their needs meeting and needs met. And what I love about what we're able to do now with **AI** is not only our more interesting sort of accessibility tools and platforms being able to be built, but people can build these solutions for themselves and they can be very customized to your experience, your needs, your strengths. And I think that's a really underappreciated benefit of **AI**. And so you're going to show us some of the things that you've built for yourself and you're actually gonna walk us through your coding flow, which I think is really awesome on how to build one of these tools so we can follow us step by step.

</details>

### 个人软件的价值与Chrome扩展

**Joe McCormack**: 当然。是的，我们可以直接开始。我将展示我提前构建的两个工具，然后我们将即时构建一个。我确实认为**个人软件**将变得非常重要。嗯，我喜欢构建这些工具的一个原因，我将展示我做过的一些**Chrome扩展**。我喜欢构建这些工具的一个原因是，与我们今天从**AI原生浏览器**获得的一些产品相比，**AI原生浏览器**很棒。嗯，比如我确实使用**Comet**。但它就像使用**瑞士军刀**一样，它什么都能做。但是为了做到这一点，它的一些处理过程肯定会更慢，这对于某些事情来说完全没问题，但对于其他一些步骤，你希望它非常快，你希望使用电钻而不是**瑞士军刀**附带的小螺丝刀。所以，我将展示我已经构建的几个工具，然后我们将进入一个不一定是仅限于无障碍的工具，我认为每个人都可以从中受益。所以，我现在要进入**Slack**。嗯，我工作的**Baby List**是一个大型**Slack**公司。所以我的很多东西都是基于**Slack**的，因为那是我大部分非编码时间所在的地方。所以，我将在这里进入，并展示我目前构建的几个工具。这是一个我们为这次演示设置的临时**Slack**频道，里面有一些示例消息，这些都是我同事实际发送的消息。我只是让他们重新发送到这里。嗯，所以，我演示的第一个工具是**图片描述工具**。当有人给我发送图片时，我使用**屏幕放大镜**。所以我通常以大约10倍的缩放比例查看屏幕，但这并不是最容易做到的，如果可能的话，我更喜欢不必一直关注它。所以我使用这个工具来了解图片的大意，而不需要请别人给我解释，或者我必须实际用眼睛去看。所以，我在**Slack**中有一个快捷键。嗯，如果我按下——我在**Windows**上，所以在任何消息上按下**Control+Shift+D**，它就会弹出来，然后为我描述那张图片，并给我一个简短的描述。所以，我可以看到，嘿，它展示了一个带有汽车座椅的现代婴儿推车。嗯，它有一个顶篷。它有关于这个的所有细节。最棒的是，我还可以问一些后续问题。所以，我可以问，嗯，这个是给多大孩子用的？

<details>
<summary>Original English</summary>

**Joe McCormack**: For sure. So yeah, we can jump right in. I'll show off two that I built myself ahead of time and we're going to do one on the fly. And I do think **personal software** is going to be huge. Um, one reason why I like building some of these, so I'm going to show off a couple **Chrome extensions** that I've worked on. And one thing I like about building some of these is compared to maybe some of the offerings we have today from the **AI native browsers** is **ANA browsers** are great. Uh, like I do use **Comet**. Um, but it's it's using the uh, the **Swiss Army knife** and it does everything. Um, but in order to do that, it some of its processes are definitely slower, which there are certain things that's totally fine for, but there's other steps where you want it to be really quick and you want to use the drill instead of the little tiny screw driver that came with this was **Army Knife**. And so, I'll show off a couple that I've already built and then we'll jump into one that's not necessarily even accessibility only that I think everyone could benefit from. So, I'm going to hop into **Slack** now. Um, **Baby List** where I work is a big **Slack** company. So, lots of my stuff is very **Slack** based um because it's where I spend a lot of my non-coding time. So, I'm going to hop in here and I'll share and show a couple ones I've built so far. So, this is a little temporary **Slack** channel that we have for this um with some example messages that were actual messages sent by my colleagues. I just had them resend it um into here. Um so, first one I demo is a **image description tool**. So, when someone sends me an image, I uh use a **screen magnifier**. So, I typically am looking at my screen at about 10x zoom, but it's not the easiest to uh to to do, and I prefer to not have to always be paying attention to that if possible. So, I use this tool about to show off to be able to get um the gist of an image without needing to ask somebody to explain to me or me have to actually use my eyes to do it. So, I have a shortcut in **Slack**. Uh, if I hit uh I'm on **Windows**, so **control shift D** on any message, it's going to pop up and go off and describe that image for me and uh tell me a little description of it. So, I can see, hey, it shows a modern infant baby stroller with a car seat. Um, it's got a canopy. It's got all details about this. And the cool thing is I can go ask some follow-ups. So, I can say, um, what age child is this for?

</details>

**Joe McCormack**: 它会去**Chat GPT**那里获取答案。所以我们可以在那里得到我们的答案。这对我来说是一个很好的方式，不必非得和别人来回沟通，就能得到我问题的答案。

<details>
<summary>Original English</summary>

**Joe McCormack**: And it will head off to **chatbt**. um and get the response for this as well. And so we can get our answers there. And it's just a nice way for me to not have to necessarily push back and work with people and get some answers to my questions um as as I go on this too.

</details>

**Claire Vo**: 我认为这是人们没有真正认识到的一点，那就是对你来说，你能够放大、查看这些图片，但从时间角度来看，这可能对你来说要繁琐得多。所以人们对**图像到描述**的思考很多，比如为电子商务网站生成元数据，我相信你们也考虑了很多，或者我们有一集节目采访了一位纪录片制作人，他强调使用**图像到文本描述**加上元数据来更轻松地组织档案素材。但这只是一个很好的例子，说明**图像到文本**对于像你这样可能需要以不同方式解析信息的人来说，是一种更高效的信息传输方法。我喜欢这一点，你本可以直接进行图像描述，对吧？就是“这张图片是什么，告诉我？”但你实际上能够更进一步，说：“太棒了，如果我需要查询更多关于这张图片的信息以了解更多上下文，你让这变得非常非常容易。”所以，我喜欢，我就是喜欢这个例子。而且这些都是你自己构建的吗？

<details>
<summary>Original English</summary>

**Claire Vo**: And I think this is something that folks don't really appreciate, which is for you, you know, you have the ability to zoom in, look at this, but it's it's just from a time perspective probably a lot more tedious for you to do. And so folks have thought a lot about **image to description** in terms of generating metadata for e-commerce sites, which I'm sure you all think about a lot, or um we had an episode with a documentary producer that highlighted using **imagetoext descriptions** plus metadata to organize archival footage a lot easier. But this is a great example of **image to text** being just a much more efficient information transfer method for someone like you who might need to parse this this information differently. And then what I love about this is you could have just done the image description, right? Just what what is this image and tell me? But you actually were able to go that next step and say great if I need to query more information about this to understand more context. you make that really really easy. So, I love I just I love this example. And you you built this all yourself?

</details>

**Joe McCormack**: 是的，这大概是25分钟的**Claude Code**会话。它非常简单。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah, this was uh probably 25 minutes of a **cloud code** session. It was it was pretty straightforward. Um

</details>

**Claire Vo**: 太棒了。

<details>
<summary>Original English</summary>

**Claire Vo**: awesome.

</details>

**Joe McCormack**: 我现在正在开发的一个类似版本是直接在**Figma**中工作的，它会根据任何**Figma**节点，用一个非常不同的提示来向我解释它。

<details>
<summary>Original English</summary>

**Joe McCormack**: A flavor of this one I'm working on right now is a version that works in **Figma** directly as well that given any **Figma** node will explain it to me with a a much different prompt.

</details>

**Joe McCormack**: 是的。在**Figma**的案例中，我想了解**CTA**的颜色。我想了解所有这些东西，因为我是一名全栈工程师。所以很明显，你可以从**Figma**中获取所有这些信息，但这需要大量的点击和不同的步骤。而现在，只需按下一个键盘快捷键，就能了解这个设计真正实现了什么，对我来说将是一个轻松愉快的胜利。那个也快完成了。嗯，它还有一些小bug，所以还没准备好完全演示，但那也是我非常期待的一个。那么在我们开始构建其中一个之前，你还有没有其他一些你认为非常有趣，可以向观看或收听的人展示的扩展？

<details>
<summary>Original English</summary>

**Joe McCormack**: Right. In the **Figma** case, I want to hear about the colors of the **CTAs**. I want to hear about all this stuff because I am a full stack engineer. And so obviously you can get all that out of **Figma**, but it's lots of clicks and lots of different steps. And being able to just hit one keyboard shortcut and find out what this design is really accomplishing is going to be a nice easy win for me. And that one is just about done as well. Um it's got a little bit of bug, so it's not ready to fully demo, but that's one that I'm excited about for as well. So before we go into building one of these, are there a couple other extensions that you've built just as inspiration for folks watching or listening that you think are really interesting to show?

</details>

### AI拼写检查工具

**Joe McCormack**: 是的，另一个不一定是专注于无障碍的。嗯，但我认为它很酷。嗯，我打字不是世界上最好的。我甚至不认为这是我视力的问题。嗯，我只是，我喜欢认为我是一个盲打者，但有时我的大脑比我的手指快。所以，我构建了一个非常简单的**拼写检查器**。有很多工具可以做到这一点，比如**Grammarly**等等，但同样，它们并非都对**屏幕阅读器**友好。有时需要多次点击。嗯，所以我构建了一个可以在网页上任何输入字段中工作的工具。我将在这里演示它。我将输入“test testing typos in the message”。然后，如果我在这里按下**Control+Shift+S**，它就会发送到**OpenAI**并返回结果。当它为我做这些时，我的**屏幕阅读器**会说“正在处理拼写检查，拼写检查完成”。所以我知道当我写消息时，我不需要担心所有的润色。嗯，我可以直接做。我听到拼写检查完成，我准备好了。我点击它并发送给人们。我有一个提示，基本上是说“不要改变任何单词，只修正拼写错误”。它非常专注于确保内容是我写的，只是纠正了拼写错误。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah, another one that's not necessarily accessibility focused. Um, but it's I think it's a cool one. Um, so I am not the best typer in the world. I I don't even think that's my vision's fault. Um, I just I I think I'd like to think I'm a touch typer, but I think my brain goes faster than my finger sometimes. So, I have one that I built that is just like a really easy **spell checker**. There's lots of tools that do this **Grammarly** and all this, but similarly, they're not all **screen reader** accessible. They're multiple clicks away sometimes. Um, and so I built one out that works in any input field in uh on the web. I'll demo it here. I'm going to say uh test testing typos in the message. And then if I hit uh **control shifts** here on this one, this is going to go off send that off to **OpenAI** and come back with with that. And while it was doing that for me on my **screen reader**, it said like processing spell check, spell check complete. And so I know when I'm writing a message, I don't need to necessarily worry about all the polish on it. Uh I can just do that. I hear spellch check complete. I'm ready. I go off hit that and send it off to people. And I have a prompt there that's basically like do not change any of the words, just fix typos. was like really hyperfocused to make sure that it's the content that I wrote but just with the typos corrected in it.

</details>

**Claire Vo**: 所以我凑近了，笑得很开心，一是因为如果你一直在看《How I AI》，你一定听过我那些花哨的指甲。我最近是个花哨指甲的女孩，戴着这些花哨的指甲，我什么都打不出来。全是错别字。所以你为自己构建的这个小工作流真是太棒了，我打算借鉴一下。我想为那些正在观看或没有观看细节的人指出两件事：你现在实际上是在**Chrome**中运行**Slack**。所以一开始我还在想，等等，这些应用程序是如何与**Chrome桌面应用**交互的？但你是在**Chrome**中运行**Slack**，这意味着这些都是可用的**扩展程序**，你可以与**Slack**中的内容进行交互，并通过**Chrome扩展程序**进行修改。所以，我认为这对于那些觉得“好吧，我无法侵入桌面应用程序，但我可以在浏览器中加载**Slack**，然后在此之上添加一个**浏览器扩展程序**，为我做这些有趣的事情”的人来说，是一个非常有趣的技巧。我喜欢的第二件事是你如何使用这么多**键盘快捷键**来触发这些微型应用程序。再说一次，这关乎效率。我总是在这些**AI**产品中说，**延迟**是杀手级功能。所以，从用户体验角度或性能角度来看，任何能让这些小应用程序更高效的事情，它们的感觉就会越好。所以我喜欢你，你知道，敲几个键，就能在你的浏览器中得到一个完全纠正的句子。这是一个很棒的主意。

<details>
<summary>Original English</summary>

**Claire Vo**: So I'm leaning in and smiling a lot one because if you've been watching **how I AI** you have heard about my fancy nails. I'm a fancy nail gale these days and with these fancy nails I cannot type anything. It is all typos. And so this is such a great little workflow that you built for yourself that um I'm I'm going to steal the two things I want to call out for people who are watching or not watching the details is you are actually running **Slack** right now in **Chrome**. So at first I was like wait how are all these apps interacting with the **Chrome desktop app**? But you're running **Slack** in **Chrome**, which means that these are all **extensions** that are available to you to interact with content in **Slack** and make modifications via um a **Chrome extension**. So, I think that's a really interesting hack for folks that are like, "Okay, I can't hack my way into the desktop app, but I can load um **Slack** in the browser and then on top of that add a **browser extension** that can do these interesting things for me." The second thing I love is how you're using so many **keyboard shortcuts** to trigger these micro apps. And again, this is about efficiency. I always say in these **AI** products that **latency** is the killer feature. And so, anything you can do from a **UX** perspective or from a performance perspective to make these little apps more efficient, the better they're going to feel. And so I love that you, you know, type a couple keys and you get a fully corrected sentence here right in your browser. It's a great idea.

</details>

**Joe McCormack**: 是的。我这个的第一个版本只是使用**Chat GPT**的Alt+Space快捷键，它会打开那个小小的迷你聊天窗口。我有一个保存的自定义**GPT**来做这件事。然后我就想，好吧，我为什么要跳出我实际工作的地方呢？我可以在这里节省两步，比如三次点击。所以我认为这就像一开始没有这样做，然后意识到“哦，是的，有更好的方法”。我认为关于**个人软件**的一点是，**投资回报率**变得如此之快。就像以前你有一个想法，你会觉得这每天能为我节省3分钟，但需要我花3天来构建。所以投资回收期根本就不存在。而现在，它每天为我节省3分钟，我只需要花30分钟来构建。对于很多这样的工具来说，投资回收期简直是惊人的。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. The first version I had of this was just using the like **chatbt** uh alt space shortcut that would open up that little like mini chat window. And I had like a saved um uh just custom **GPT** to do it. And then I was like, well, why am I jumping out of where am I actually working? Uh I can I can save uh two steps in like three three clicks here. And so I think it's almost like piloting at first without doing this and then realizing like oh yeah there's a better way. And I think one thing about **per software** is the **return on investment** uh became so much faster. Like before you'd have an idea like that you like this is going to save me like 3 minutes a day but it's going to take me 3 days to build. So the **payback period** is just not totally there. And now it's like it saved me three minutes a day and it takes me 30 minutes to build. Like the **payback period** has just become insane for a lot of this tooling.

</details>

### 构建链接摘要工具

**Claire Vo**: 我喜欢。那么我们来构建一个吧。我想看看你实际构建这些东西的流程是怎样的。

<details>
<summary>Original English</summary>

**Claire Vo**: I I love it. So let's build one. I want to see what your flow is for actually building one of these things.

</details>

**Joe McCormack**: 是的。所以在我们构建它之前，我将谈谈我想构建什么。嗯，在**Baby List**的**Slack**世界以及其他许多公司的**Slack**中，经常出现一件事，那就是人们总是发送链接。嗯，对我来说，我通常只是点击“稍后保存”按钮，然后可能在周末决定是否要阅读它们。但我意识到，也许最好是当下就做那些只需要一分钟的事情，而不是一直推迟。我认为如果有一个简单的快捷方式，让**AI**去获取这篇文章，给我关键的要点，然后我再决定是否要完整阅读并稍后保存，或者当下就跳过它，并且所有这些都在五到十秒内完成，那将是非常棒的。我认为这比推迟并在一周结束时有一大堆待办事项列表要强大得多，那时我才想赶上所有这些消息。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. So, before we build it, I'm going to talk about what I want to build. Um, so one thing that comes up a lot in uh in the **baby Slack** world and probably in many other companies **Slacks** is uh people send links all the time. Um, and for me, uh, I often just hit like the save for later button and then maybe at the end of the week I like decide if I want to read them. But I've realized that like maybe it's the the do the thing that takes you one minute uh in the moment instead of keep deferring it. I think it would be great if there was an easy shortcut where I could have an **AI** go off and fetch this article, give me the key takeaways, and then I'll decide, do I want to actually do a full read and save it for later, or do I just skip it in the moment and have that all work in under five to 10 seconds? I think it would be much more powerful than uh deferring and having this big to-do list at the end of the week when I want to catch up on all these messages.

</details>

**Claire Vo**: 所以你将向我们展示你是如何构建这个的。我不得不说，我们所有人都被太多的上下文、链接和文档所淹没。是的，你知道，我可能会看到这样的东西，无论是合作伙伴还是竞争对手，或者只是别人发现的有趣的东西，你就会想：“哦，是的，我绝对应该读一下。”但你真的应该读一下吗？所以这种快速摘要是一个很棒的主意。所以你将带领我们了解如何使用**Claude Code**来实际编写这段代码，我相信。

<details>
<summary>Original English</summary>

**Claire Vo**: So, you're going to show us how how you built this. And what I have to say is all of us are so overwhelmed with so much context and links and docs and yeah, you know, I would see something like this, whether it's um a partner or a competitor or just something somebody found that was interesting and you want to go, "Oh yeah, I should definitely read that." But should you should you definitely read it? So this quick **summarization** um is is a great idea. And so you're going to walk us through how to actually code this up using **cloud code**, I believe.

</details>

**Joe McCormack**: 是的。我会在过程中穿插一些我对**Claude Code**的调整，或者至少是倾向于让它对**屏幕阅读器**更友好一些。但同样，我同样认为很多对**屏幕阅读器**友好的东西，可能也会对所有人都有用。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. And I'll jump in along the way with a couple like **cloud code** tweaks that I've made or at least lean into to try and make it a little more **screen reader** accessible. But again, I similarly think that lots of things that are uh good for **screen readers** probably are are going to be good tools for everybody across the board.

</details>

**Claire Vo**: 太棒了。

<details>
<summary>Original English</summary>

**Claire Vo**: Great.

</details>

### 利用AI辅助开发

**Joe McCormack**: 嗯，那我们直接开始吧。我将切换到我的终端一小会儿，这样我就可以初始化我们的项目。所以我要运行一个`make dir`命令来设置我们的仓库。所以我们有了我们的**Slack**摘要扩展。我正在创建那个目录，然后我将快速打开**Claude Code**，或者我应该在这个上面打开**VS Code**。所以**VS Code**正在这里打开和初始化。我将把它打开到最大，然后我们将在这个加载完成后立即开始。所以，我将从这里开始，像每个好的**AI**播客一样，创建一个**PRD**。

<details>
<summary>Original English</summary>

**Joe McCormack**: Um so let's let's jump right in. So I'm going to switch over uh to uh my terminal for just a second so I can initialize our project. So I'm going to run a make dur command to get our repo set up. So we have our **slack summary extension**. I'm making that directory and I'm just open up **quad code** quick on this or should I open up **VS Code** on this. So **VS Code** opening and initializing here. I'm going to open it up as big as I can and we are going to jump in as this finishes loading. So, I'm going to start here by making a **PRD** like every good how **ai** podcast goes.

</details>

**Claire Vo**: 完全正确。

<details>
<summary>Original English</summary>

**Claire Vo**: That's exactly right.

</details>

**Joe McCormack**: 我将用语音来做这件事。嗯，有时我会用**Whisper Flow**来做我正在做的事情。但在这个案例中，我发现**VS Code Copilot**的语音功能非常好。所以如果我只是做一些像这样快速的事情，我就会直接使用**Copilot集成**。所以你会看到我可以按下**Control+I**，然后当我再次按下**Control+I**时，它就会听写。所以，我不会，我将暂停我的讲话并切换到那个模式。我将为我们听写一点这个**PRD**，然后看看它会为我们生成什么。我们想要为一个本地运行的**Chrome扩展**构建一个简单的**PRD**，它的工作是只存在于**Slack**中。当聚焦在一条**Slack**消息上时，你可以按下键盘快捷键**Ctrl+Shift+1**，它将搜索该消息以查找任何外部链接。如果找到外部链接，它应该在隐藏的标签页中打开它们，提取其内容，并将其发送到**OpenAI**进行摘要。我们在这里可以看到，我刚刚完成了。它将快速生成一个小的**PRD**。嗯，这根本不需要很长时间。我将接受所有更改，因为我发现用**屏幕阅读器**在那个差异视图中阅读特别痛苦。嗯，这并不是说很糟糕，但直接在文档中阅读要容易得多。既然正在创建一个新文档，我将在这里查看它，看看它是什么样子。所以我们有我们的目标。我们想要一些隐私安全，这很合理。这里有一些用户故事。我们有一些功能需求。它有一个解析功能。所以到目前为止一切都说得通。一些非功能性需求和一些超出范围的图片。是的。我之前已经演示了我的图片处理功能，所以开放性问题。好吧，我们应该在哪里以及如何进行摘要？这很合理。我们不需要成功指标，因为这是内部的。所以我们来回答其中一些问题。所以我们只需全选并添加。我将再次听写。所以我可以按下，然后我将开始。我们想要在这里为一个本地运行的**Chrome扩展**构建一个非常简单的**PRD**，它的工作是当在**Chrome**中的**Slack**中，鼠标悬停在具有焦点的消息上时，你可以运行键盘快捷键**Ctrl+Shift+1**，它将查找消息中的任何外部链接。如果找到任何链接，它将在隐藏的标签页中打开它们，提取其内容并将其发送到**OpenAI**。在**OpenAI**中，我们应该对它们进行摘要，并从文章中提取三到五个关键要点，然后以一个完全对**屏幕阅读器**友好的模态框返回给用户，其中包含文章标题和一个在新标签页中查看文章的链接。好的，我们现在正在生成这个**PRD**。所以我们可以看到它谈到了我们的键盘快捷键。它有我们的目标，最小化用户操作，极致的可及性是关键，一些基本的用户故事，一些功能需求。酷。这看起来不错。

<details>
<summary>Original English</summary>

**Joe McCormack**: And I'm going to do this with audio. Um, so sometimes I'll use **whisper flow** for what I'm doing. But in this case, I actually find the **VS Code Copilot** audio to be pretty good. And so if I'm just doing something kind of quick like this, I'll just end up using the **C-pilot integration**. So you'll see I can do uh **control I** and then when I hit **control I** again, it's going to dictate. So, I'm not going to I'm going to pause my talking and switch in that mode. And I'm just going to dictate out for us a little bit of this **PRD** and then see what it comes up with for us. We want to build a simple **PRD** for a locally run **Chrome extension** whose job is it to exist in **Slack** alone. And when focused on a **Slack** message, you can hit the **keyboard shortcuttrlshift 1** and it will search that message to find any external links. If there are external links found, it should open them up in hidden tabs, extract their content, and send it off to **OpenAI** to summarize. And we'll see here, I just finished that. It's going to go off and quickly generate a small **PRD** for that. Um, this doesn't take very long at all. I'm just going to accept all the changes because I find reading in that diff view to be particularly painful with the **screen reader**. Um, it's not like terrible, but it's much easier just to read it in the document. And since there's a new document being made, I'll now look at it here and we'll see how this looks. So, we have our goals. We want some privacy security makes sense. Got some user stories here. We have some function requirements. It's got a parse. So, all is making sense so far. Some nonfunctional and some out of scope images. Yep. I already demoed my image processing and so open questions. All right, where and how should we summarize? Makes sense. We don't need success metrics for this. It's internal. So let's answer some of these questions. So let's just select it all and add it. I'm going to dictate again. So I can hit and I'll start. We want to build a very simple **PRD** here for a locally run **Chrome extension** where the job is when in **Slack** in **Chrome** and hovering over a message that has focus, you can run the **keyboard shortcuttrlshift 1** and that will look for any external links in the message. If any are found, open them up in hidden tabs and extract that content and send it over to **OpenAI**. When in **OpenAI**, we should summarize them and extract three to five key takeaways from the article and return those to the user in a fully **screen reader** accessible modal which includes the article's title and a link out in a new tab to view the article. Okay, we now have this generating the **PRD**. So we can see it talked about our **keyboard shortcut**. It's got our goals, minimize user effort, extreme accessibility is key for this, some basic user stories, some function requirements. Cool. This looks good.

</details>

**Claire Vo**: 我在这里必须指出一件事，你是一名工程师，那是一个相当不错的产品描述，并且产生了一个相当不错的**PRD**。所以，我喜欢**AI**的一点是，正如我所说，没有界限。如果你是一名工程师，并且你有一个想法，你可以借助一点**AI**的帮助，写出一个非常好的**PRD**。如果你需要提示，我知道一两个可以帮助你的工具。

<details>
<summary>Original English</summary>

**Claire Vo**: And one thing I I have to call out here is you're an engineer and that was a pretty good product description and that resulted in a pretty good **PRD**. So one of the things I like about **AI** is um as I say there are no lanes. If you are an engineer and you have an idea, you can write a very good **PRD** using a little bit of **AI** assistance. If you need a tip, I know one or two tools that can help you with it.

</details>

**Joe McCormack**: 是的。这里没有自定义**PRD**提示或类似的东西。这主要就是基础模型的工作。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. And this is no Yeah, no custom **PRD** uh prompts or anything like that. This is just uh mostly the foundational models work here.

</details>

**Joe McCormack**: 酷。所以现在我们要跳到一个新标签页，在这里启动**Claude Code**。在此之前，正如我提到的，我构建了几个这样的**Chrome扩展**。所以，因为我做过几个，我最终构建了一个**Claude技能**来帮助我构建更多的**Chrome扩展**。嗯，所以在我构建了前两个之后，我让**Claude**查看了这两个，并找出它们之间的共同模式，然后开发了一个技能，这样我就可以以更简单的方式构建第三个、第四个、第五个，并提取出那个共同的部分。我发现**Claude技能**在它们实际被自动识别方面是好坏参半的。嗯，所以我将明确地说“使用这个技能”，但从技术上讲，你不需要这样做，但我确实发现它被埋藏在它的方法中。所以我要在这里创建一个提示。它将更多地请求这个技能。

<details>
<summary>Original English</summary>

**Joe McCormack**: cool. So now we're going to hop into a new tab, spin up **claude code** in here. And ahead of this, as I mentioned, I I built a couple of these **Chrome extensions**. So, because I've done a few of them, I end up building out a **Claude skill** to help me build more **Chrome extensions**. Um, so after I built this the first two, I had **Claude** look at both and figure out what was the patterns that were common across them and work on a skill so I could just build the third, the fourth, the fifth in a much simpler version um and extract out that common piece. I have found **Claude skills** to be a mixed bag in terms of them actually being picked up automatically. Um, so I am going to explicitly say like use the skill, but technically you're not supposed to need to do that, but I definitely found that that's uh buried in its approach. So I'm going to make a prompt here. It's going to more request the skill.

</details>

**Claire Vo**: 对于那些想知道如何设置自己的技能的人，我们有一集节目。那是**Claude技能**介绍，我在其中解释了**Claude技能**是文件夹中的文件。有时它们是文件夹中的压缩文件。所以，如果它们对你来说显得神秘，可以去看看十月或十一月的那集迷你节目，学习如何制作你自己的**Claude技能**。它们非常有用。

<details>
<summary>Original English</summary>

**Claire Vo**: And for folks that are wondering how to set up their own um skills, we do have a episode. It is introduction to **claude skills** where I explain that **claude skills** are files in a in a folder. Sometimes they're zipped files in a folder. So, if they seem mysterious to you, go check out that mini episode from um I think it was October or November and learn how to make your own **claude skills**. They're pretty useful.

</details>

**Joe McCormack**: 是的。所以在这里，提示就是——嗯，首先提到**PRD**。所以我们有了那个，然后我们说使用**Claude技能**来创建**Chrome扩展**，以构建这个**PRD**。**Chrome Claude Code**添加了一个功能，你可以在代码文件中编辑提示，而不仅仅是在终端中。所以在**Claude Code**中，如果你按下**Ctrl+G**，它就会在文本编辑器中打开那个提示。所以对我来说，在终端中导航并不是非常对**屏幕阅读器**友好。我现在可以在我日常编写代码的同一个地方导航它，那里对**屏幕阅读器**非常友好。所以，其他人可能会发现这很有用。你可以编写更深入的提示。你可以在这里使用**Control+F**。你可以做任何事情。它只是一个文件。所以我认为这是他们几个版本前添加的一个非常有用的工具，让它更容易使用。我将在这里加一个注释。嗯，使用我共享的**Chrome扩展配置**中的**OpenAI密钥**。所以我有一些，我不想一直粘贴我的**OpenAI密钥**之类的东西。所以我最终提取了一些共享配置，以便在我的所有**Chrome扩展**之间共享。这样我就不需要一遍又一遍地重复那个步骤。所以我现在保存这个文件。现在每当我关闭它时，它就会用那个完成的提示替换**Claude Code**中的提示。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. So, in here, the prompt's just going to be um so first app mention the **PRD**. So, we have that and we're say use the **claude skill** for creating **Chrome extensions** to build out this **PRD**. And one thing um **Chrome** uh **cloud code** has added this feature where you can edit a prompt instead of just in the terminal in a code file. And so in **cloud code** if you hit **ctrl +g g** it will open that prompt in a text editor. So especially for me where navigating that terminal is not super **screen reader** friendly. I now navigating it in the same place that I write code on a day-to-day basis which is very **screen reader** accessible. And so again other people may find this to be useful. You can craft deeper prompts. You can like **control F** in here. You can do whatever. It's just a file. And so I think it's a really useful tool they added a few versions ago to make it a little bit easier to work with. And I'm just going to put a note here. Um, use my **OpenAI key** from my shared **Chrome extension config**. So I've had some I don't want have to keep pasting my **OpenAI keys** and stuff like that. So I end up pulling out some shared config to share across all my **Chrome extensions**. That way I don't need to rinse or repeat that step over and over again. So I save this file now. And now whenever I close this, it's going to replace my prompt in **cloud code** with that completed prompt.

</details>

**Claire Vo**: 哦，有意思。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh, interesting.

</details>

**Joe McCormack**: 是的。所以它非常有效，特别是当你想使用更深入的提示，而不用担心终端方面的事情时。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. So it's super effective, especially as you want to do a deeper prompt to use this and not have to worry about the the whole terminal side of things.

</details>

**Claire Vo**: 酷。现在我们要启动它了。所以我的**Claude Code**会话现在处于规划模式。嗯，你会看到它正在请求使用技能，这很棒。我们想使用我们的技能。我将缩小这个终端，这样我们就可以看到更多的日志。所以，我不太需要这个。好的，它将运行一些命令，这些命令实际上会拉取我之前提到的那个**Chrome扩展配置**。我为了让**Claude Code**更具可及性而做的另一件事是，我不会看到所有弹出的内容。所以我设置了一个**Claude钩子**，每当**Claude**需要用户输入时，它就会在我的电脑上发出“叮”的一声，这样我就可以听到一个声音，就像“哦，**Joe**，你现在需要做点什么来处理这个。”嗯，我实际上不希望**Claude Code**读取这个文件。所以我要说“不”，因为这是一些秘密配置。所以我要说“不，不要读取那个文件”。嗯，现在它有一个**API密钥**在里面，但不要读取它。如果你需要，就用`jq`来提取密钥。所以，幸运的是，我是一名工程师，所以这不像完全从头开始编写代码。我知道有一个工具可以只从**JSON对象**中提取密钥，而**Claude**将无法看到实际的秘密值。所以现在我们在这里。它将为我们创建一个到这个扩展的**符号链接**。嗯，所以我们不需要担心配置。如果我更改了它，它将自动更新到我的所有扩展中。所以，与其让每个扩展都有自己的**API密钥**，并且我的密钥因某种原因失效时，不得不更新所有扩展，我使用了这个叫做**符号链接**的概念。所以只需将同一个配置文件链接到我的所有扩展中。这样一次更改就能修复所有地方。

<details>
<summary>Original English</summary>

**Joe McCormack**: Cool. Now we're going to kick this off. And so I do have this **Cloud Code** session right now in planning mode. Um you'll see it's requesting use the skill, which is great. We want to use our skill. I'm going to shrink this terminal so we can see more clog. So, I don't really need this as much. Okay, it's going to run some commands um that actually pull in that cloud uh that **Chrome extension config** that I talked about. Another thing I have to make **cloud code** a little more uh accessible is again I'm not necessarily seeing everything that pops in as it's going. And so I set up a **Claude hook** that whenever **Claude** needs user input, it will um basically like ding a bell on my computer so I could hear uh a sound that is like, "Oh, **Joe**, you need to do something right now to work on this." Um I actually don't want **Claude code** to read this file. So I'm going to say no because this is is some secret configuration. So I'm going to say no, don't read that file. Uh now that has a **API key** in the but don't read it. If you need you then use **jq** to extract the keys. So again luckily I am an engineer so it's not like fully vibe coding this uh from scratch. I know that there's a utility that will extract just the keys out of a **JSON object** and **claude** won't be able to see the values which is the actual uh secrets there. So now here we are. it's um just going to make a **sim link** to this extension for us. Uh so we don't need to worry about the configuration. And if I ever do change it, it will automatically update in all my extensions. So instead of having each one have their own **API key** and my key becomes invalidated for some reason, um having to update all of them, I use this uh concept called a **symbolic link**. So just link the same config file into all my extensions. So one change fixes everywhere.

</details>

**Claire Vo**: 是的。当你本地运行这些东西或者只是为自己构建东西时，这很容易做到，你只是让这些东西的维护和部署对你自己来说变得非常容易，并尽可能简化重复构建和使用相同**API密钥**等操作。你知道，当你想公开分享所有这些并发布到**Chrome扩展市场**时，我们可以做一些清理工作。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And this is one of those things that's just easy to do when you're running these things locally or just building stuff for yourself is you just make the maintenance and um uh the maintenance and deploy of these really easy for yourself and make it as simple as possible for you to repeat um building things and using the same for example **API keys** and you know when you want to share all these publicly and publish them to the **Chrome extension marketplace** we can we can do a little cleanup.

</details>

**Joe McCormack**: 完全正确。嗯，这是我们的计划。就像之前一样，**Ctrl+G**也适用于在编辑器中编辑计划。所以同样，这在终端中用**屏幕阅读器**阅读会很痛苦。但此外，如果我想在这里对某件事进行微调，我不需要担心告诉**Claude**更新它或将其写入文件，我只需按下**Control+G**，它就会在这个文件中打开，现在我们有了完整的计划。你可以根据需要调整它的不同部分并修改它。所以这是**Control+G**快捷键的另一个很棒的用法。

<details>
<summary>Original English</summary>

**Joe McCormack**: Exactly. Um, so here's our plan. And just like before, **CtrlG** also works to edit plans in the editor. So similarly, this is uh going to be a pain to read in this terminal for **Shreader**. But also, if I want to make a tiny tweak to one thing here, I don't need to worry about telling **Claude** to update it or write it to a file, I just hit **control G**, opens it up in this file, and now we have our full plan here. And you can just tweak different parts of it if you want and uh and modify it. So it's another another great usage of the **control G** shortcut.

</details>

**Claire Vo**: 是的，我想为人们指出这一点，因为很多人会得到这样的东西，然后如果它错了，就会说：“不，这是错的。请更新XYZ或ABC。”你知道，你指出这不仅是你与这个文件交互的一种相当低效的方式，就可访问性和你对**屏幕阅读器**的需求而言，它也不是提供反馈的最快方式。所以你能够直接将它移到代码中，使用这个**Control+G**，我相信，编辑它，关闭它，运行它，这又高效了很多。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, I want to call this out for people because so many folks would get something like this and then if it was wrong kind of say, "No, this is wrong. Please update XYZ or ABC." And you know, you're calling out not only is that a pretty inefficient way for you to interact with this file in terms of accessibility and your need for a **screen reader**, but it's also just not the fastest way to give it feedback. And so your ability to just take this uh move it into code, use this **control G**, I believe, edit it, close it out, run it is just again a lot more efficient.

</details>

**Joe McCormack**: 是的。所以我们将快速浏览一下这个计划。嗯，我再次使用了一些**键盘快捷键**来分解它并折叠Markdown标题，这样从我的角度来看，我很难在视觉上扫描页面。所以阅读一个大文件时，我通常在代码或Markdown中依赖折叠。这样我就可以折叠不同的部分来阅读它们，然后只展开我关心的部分。所以我并不关心这里的某些方面，但比如我可能想深入了解错误处理部分。所以我将展开那个部分，只阅读这部分。所以我们有一些日志记录，一些关键模式，但这个计划总的来说对我来说很好。所以现在我将保存这个，然后再次关闭文件，这就是提示中显示的内容，因为我没有修改它。它没有花任何时间。它只是准备好了。但如果我修改了它，它会在加载新计划时花一秒钟，然后继续前进。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. So we'll do a quick run through of this plan. It's uh I'm using again some more **keyboard shortcuts** just to break it down and and uh fold the markdown heading so I can from my perspective, it's hard for me to visually I don't visually scan the page. So reading through a big file, I typically in code or markdown rely on folding. So I can collapse different sections and read them and then expand only the sections I care about. So I don't care about certain aspects here, but like maybe I want to get deep into the error handling piece. So I'll expand that section and just uh read this part. So we got some just logging, some key patterns, but this plan generally looks good to me. So now I will just save this and again close the file and that is what is over here in the prompt because I didn't modify it. It it didn't take any time. It was just ready. But if I modified it, it would take a split second while it loads that new plan in and then it moves forward.

</details>

**Claire Vo**: 是的。我必须再次为那些可能正在收听播客或者没有注意这里使用**屏幕阅读器**意味着什么的人指出这一点，那就是你现在戴着你的小耳机。嗯，你一边向我们演示，一边使用**屏幕阅读器**，这让我印象深刻。我认为观看你的工作流程如此引人入胜的原因是它非常高效和快速，即使你不考虑你正在使用**屏幕阅读器**。所以，你能够构建这些快捷方式、这些工具，更有效地使用**Claude Code**。嗯，然后你又增加了这一层，它让使用这种**屏幕阅读器**对你来说更具可及性，这非常令人印象深刻。我不想让人们错过，这里有一个我们现在看不到或听不到的无形层，你也在其中添加了一些微小的摩擦。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And I just have to call this again out again for people who are maybe listening to the podcast or again are not paying attention to what it means to use a **screen reader** here, which is you got your little your little headphone plugged in right now. And um I am so impressed that you're using the **screen reader** while walking us through this demo. And what I think is so so fascinating about watching your workflow here is it's super efficient and very fast. even if you don't take in to account you're using a **screen reader**. So, the fact that you've been able to build these shortcuts, these tools, use **cloud code** in a more effective way. Um, and then you add on this layer of and it makes using this this kind of **screen reader** a lot more accessible to you is just very impressive. And I don't want people to miss that there's this invisible layer that we don't get to see or hear right now that you're also putting in between this which adds a little bit of microf.

</details>

**Joe McCormack**: 是的。我认为**Claude Code**的一个优点是，嗯，就像现在，视觉上有一个选项被选中为蓝色。我不一定知道是哪一个，而且使用方向键，**屏幕阅读器**不会告诉我选中了什么。但是**Claude Code**在标准化方面做得很好，其中“1”表示“是”，嗯，“2”通常表示“是”，但带有手动变体，然后“3”表示“否”或“输入额外内容”。所以，我可以，嗯，我可以基本上不用方向键和回车键，我可以直接说：“是的，我想，我想在这里继续前进。我确定我按下了数字1。”是的。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. And I think one thing that's great about **cloud code** uh so like right now visually one of the options is selected in blue. I don't necessarily know which one it is and using the arrow keys it does not tell me with the **screen reader** what's selected but **cloud code** has done a great job of standardizing where one means yes um two means often yes but like manually with with like a variation and then three is is like no or or type something extra. And so I can uh I can basically instead of using the arrow keys and enter, I can just be like, "Yeah, I want I want to just move forward here. I'm sure I hit the the number one." Yeah.

</details>

**Joe McCormack**: 所以他们做得很好，使用了许多不同的输入和许多不同的方式，使其在运行时更具可及性。

<details>
<summary>Original English</summary>

**Joe McCormack**: And so they've done a good job of using I think lots of different inputs and lots of different ways to make this a little more accessible as it goes as well.

</details>

**Claire Vo**: 是的。所以这种一致性，再次强调，也许这适用于那些正在构建**AI产品**并试图强化工作流程的人，特别是那些可能正在构建这些终端UI的人，我认为这些UI非常可爱和有趣。你希望，你知道，人们喜欢终端，因为它非常快。你希望它既能性能快，也能UI/UX快，也就是说，如果你的用户总是知道1是X，2是Y，3是Z，那么他们就可以始终如一地使用这些键盘模式，通过一个键或两个键高效地通过你的UI。我认为，你知道，通过驱动一致性和人们可以明确或隐含地学习的模式，消除用户的心理摩擦，认知摩擦，这是一个非常有用的工具，当你使用更受限制的UI时。嗯，因为再次强调，终端UI自然地基本上受限于文本。

<details>
<summary>Original English</summary>

**Claire Vo**: Yep. And so that consistency again, maybe this is for folks that are building **AI products** in trying to reinforce workflows, especially for folks that are building maybe these **terminal UIs** that I think are really lovely and interesting to build is you want, you know, people love the terminal because it's so fast. And you want it to both be performance fast, but you also want it to be **UI/UX** fast, which is if your user always knows one is X, two is Y, three is Z, then they can consistently use these keyboard patterns of one key or two keys to efficiently get through your UI. And I think, you know, taking that mental friction, that cognitive friction off a user by driving consistency and patterns that people can either explicitly or implicitly learn is a really useful tool when you're using UI um that is more constrained. Um because again, a **terminal UI** is naturally constrained to basically text.

</details>

**Joe McCormack**: 是的。**Claude Code**一直在开发并发布了一个**VS Code扩展**，它更像是一个图形用户界面。我只是发现它在一些最新功能方面有点滞后，我想立即拥有所有东西。嗯，有点被宠坏了，但我认为这也会随着时间的推移而赶上来，也许对于其中一些东西来说，它是一个潜在的更对**屏幕阅读器**友好的选项。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. And **cloud code** is has been working on and and has released a **VS Code extension** that is more of a a guey. I've just found that it's a little bit lacking behind some of the the latest and greatest features and I'm like I want everything immediately. Uh some of the spoiled but I I think that's going to catch up as we go too and and maybe a potentially more **screen reader** accessible option for some of these things too.

</details>

**Claire Vo**: 是的。再说一次，我们喜欢在代理完成时发出“哔哔”声。所以，我喜欢，我喜欢光标的声音。我喜欢你在这里为**Claude Code**使用一个，因为我再次假设你的**屏幕阅读器**不会读取整个流。不，那太多了。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And again, we love a um beep boop at the end of an agent completion. So uh I love I love the cursor sound. I love um that you're using one here for for **claude code** because again I'm presuming with your **screen reader** you're not going to read this whole stream of what no that's too much.

</details>

**Joe McCormack**: 我认为**随性编码**和**生产质量代码**之间也有很大的区别，对吧？这里最终的输出只是给我用的。它将在我的**Chrome**中运行。我根本不关心代码是什么样子。嗯，而当我为我的全职工作构建软件，并且实际构建将被数百万用户和许多开发人员使用的东西时。我确实会做很多不同的事情。我将非常详细地阅读计划，了解它实际将做什么。嗯，我将阅读代码，我将进行更小的提交，并逐块地审查它，并变得更加详细。在这种情况下，嗯，是的，当最终输出只是一个用户时，代码质量就没那么重要了。

<details>
<summary>Original English</summary>

**Joe McCormack**: I think it's a big difference too between like **vibe coding** things and um like **production quality code**, right? The final output here is just for me. It's going to run in my **Chrome**. I don't really care what the code looks like at all. Um versus when I am building software for my my uh full-time day job and actually building stuff that's going to be in the hands of millions of users and many developers. I do uh do things a lot differently. The plan I'm going to read very detailed what it's going to actually do. um the the code I'm going to be reading, I'm going to be doing smaller commits and reviewing it uh kind of chunk by chunk and and getting much more detailed. In this case, uh yeah, when the final output is is just a user of one, the the code quality is a lot less important.

</details>

**Claire Vo**: 是的。重要的是它是否有效？

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. What matters is does it does it work?

</details>

**Joe McCormack**: 是的，完全正确。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yes, exactly.

</details>

**Claire Vo**: 而且它是否有效，以及你是否泄露了你的**API密钥**？这是我们想要担心的两件事。

<details>
<summary>Original English</summary>

**Claire Vo**: And a does it work and a little bit of like did you leak your **API key**? Those are the two things we want we want to worry about.

</details>

**Joe McCormack**: 但除此之外，我们正在前进。你知道，我认为这里另一个真正有趣的事情是，因为你已经构建了，我认为你为你的**个人软件**选择一个平台或框架，然后通过一个技能建立最佳实践，然后只是为其他用例重复使用，这是非常好的方式来熟练使用这些**AI工具**。所以我看到很多人说，我所做的就是为我的文档和所有其他东西构建基于Markdown的仓库，我构建的一切都只是一个基于Markdown的仓库，然后我非常擅长使用**Cursor**来做这个。然后，你知道，你就有这个例子，你知道，不是所有东西，但我确定，我构建的很多东西都将是**Chrome扩展**。所以我要制作，你知道，这个框架，让它运行起来，然后我就可以非常擅长**Claude Code**，因为我不是在重新学习一项技术，也不是在重新学习一个工具。所以我确实认为，嗯，当你试图学习这些编码工具时，通过停留在相同的技术领域，你会获得复合效应，因为你不是在两个方面学习。你只是在工具方面学习，而一些技术部分已经建立起来了。

<details>
<summary>Original English</summary>

**Joe McCormack**: But other than that, we are we are on our on our way. And you know the the other thing that I think is really fun here is because you've built I think the idea that you pick a platform or a framework for a set of your **personal software** and then establish best practices through a skill and then just rinse and repeat for other use cases is a really good way to get super fluent with some of these **AI tools**. And so I've seen a lot of people say all I do is build **markdownbased repos** for my documentation and everything else and everything I build is just a **markdown based repo** and then I've gotten really good at using **cursor** for this and then you know you have this example of every you know not everything I'm sure but like a lot of what I build are going to be **Chrome extensions**. So I'm going to make, you know, this framework, get it going, and then I can get really good at **clawed code** because I'm not relearning a technology and on top of relearning a tool. And so I do think it's um you get compounding effects by staying in the same technical space when you're trying to learn these **voding tools** because you're not trying to learn you're not trying to learn on two fronts. You're trying to learn on just the tool the tooling front and some of the technical pieces have already been established.

</details>

**Joe McCormack**: 当然。我认为正如我们之前开始时谈到的，**投资回报率**会越来越好，因为我构建这个作为我的第三个，所需时间是第一个的一半，当我构建第五个时，我认为所需时间将是第一个的五分之一，就像我每次构建时，**Claude技能**都会变得更好。我只会把它反馈回去，然后说这个技能缺少什么，让它变得更好。所以我认为这会使投资回报率可能变成两天，或者一些疯狂的数字。嗯，所以，是的，我觉得尝试许多不同的事情很酷，但能说“我有一个想法。它在30分钟内就在我手中了”也感觉很棒。这真是太酷了。

<details>
<summary>Original English</summary>

**Joe McCormack**: For sure. And I think as we talked about before when we were starting like the **return on investment** gets better and better because building this one as my third takes half the time as the first one and when I build the fifth I think it's going to take a fifth the time of the first one like I am getting better the **claude skill** each time I build one I'm just going to feed it back in and be like what was the skill missing like make make it better and so I think it makes uh the **return investment** may turn into be like two days a **payback period** or something crazy. Um, so yeah, it does it does feel like it's cool to to I think spread out and try many different things, but it does also just feel great to be like, I have an idea. It is in my hands in under 30 minutes. Like it's it's just very cool.

</details>

**Claire Vo**: 是的。再说一次，这是我告诉人们要制定他们的**反待办事项清单**的事情之一。当你有一个重复的任务或一个重复的摩擦点，你总是像在**Slack**中打开链接到一个新标签页，然后试图稍后回来阅读它们，或者你知道你会不断地做这样的事情，比如让我们放大这张图片，弄清楚它是什么，以及我是否需要担心它。当你遇到这些重复的任务时，100%值得花时间去永远不必再做那个任务，而不是花时间在任务本身上。我喜欢这种**个人软件**的**投资回收期**基本上归零的想法，因为它真正说明了我们在**AI**的效率和价值方面所处的位置，那就是学习构建其中一些工具比现在完成任务重要得多。学习如何自动化任务的回报比完成任务高得多。如果你能做到，嗯，改变你的肌肉记忆，每次你做任务时，停下来告诉自己：“实际上，我将学习如何自动化任务。”你真的可以在你的日常生活中，甚至在你的个人生活中，创造出巨大的杠杆作用。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And again, this is one of those things where I tell people to work on their **anti-to-do list**. And when you have a recurring task or a recurring point of friction where you're constantly like opening links from **Slack** in a new tab and then trying to come back to them later and read them or you know you would be constantly doing this like let's zoom in on this image and figure out what it is and is it something I need to worry about. When you have those recurring tasks, it's 100% worth it instead of spending the time on the task itself to spend the time never having to do that task again. And I like this idea of the **payback period** of **personal software** basically collapsing to zero because it really just illustrates where we are in terms of the efficiency and value out of **AI** which is it is much more important to learn to build some of these tools than to do the task right now. Like the payoff is so much higher to learn how to automate the task versus doing the task. And if you can just do the um change your muscle memory to every time you do the task, pause yourself and say, "Actually, I'm going to learn how to how to automate the task." You can really really create a lot of leverage in in your um day-to-day life, even in your personal life.

</details>

### 调试与优化

**Joe McCormack**: 是的，当然。我们这里差不多完成了。所以，我正在检查我们的小待办事项清单，它刚刚完成。嗯，所以它正在进行一些最后的步骤，但我们差不多准备好实际加载它了。嗯，现在它只是在分析，看看，嗯，是的，完美。所以它正在运行这最后一个步骤，它基本上是在告诉我们，嘿，去加载它。所以一旦我们完成了这个，我们需要，嗯，实际将它加载到**Chrome**中。所以**Chrome**有一个用于扩展的模式，叫做**开发者模式**。你会看到我在顶部已经打开了它。它基本上意味着你可以安装不是来自**Chrome网上应用店**的扩展。你可以从你的本地计算机安装扩展。所以你通常不希望打开它，因为有人可能会侧载一些你导入的信用卡盗刷器之类的东西。但如果你知道你在做什么，嗯，你知道你刚刚构建了一个东西，你可以在这里打开它。然后一旦你打开它，它看起来会有点不同，与你们这些没有打开它的人在**Chrome扩展**世界中看到的样子相比，因为我们这里有这些选项可以加载一个未打包的扩展。所以这意味着一个没有完全部署在应用商店中的扩展。所以我们点击这个，它将打开我们的小文件浏览器。所以我们回到上一步，我们把这个叫做**Slack摘要扩展**。好的，所以它现在已经加载进去了。这个软件的真相时刻是，你只能在**Chrome**中测试它，或者轻松地测试它。嗯，所以我们实际上要试一下。嗯，每当你下载一个新的扩展时，你确实需要刷新你的标签页，这样它才能识别那个扩展。所以如果我现在尝试使用它，它仍然在使用我加载它时拥有的扩展。所以我将刷新这个**Slack**，这样它就可以识别我们新的扩展了。我们的真相时刻将是，我们将聚焦在这条消息上。我将按下我的快捷键**Control+Shift+1**，然后我们看看。我们成功了吗？

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah, for sure. And we are just about done here. So, I was checking back in on our little uh to-do list, which it just finished. Um, so it's doing some final steps here, but we're just about ready to actually load this in. Um, right now it's just kind of analyzing to see uh, yeah, perfect. So, it's running this one last step, which is going to be it's basically telling us, hey, go load this in. So, once we are uh, done with this, we need to um, actually load it into **Chrome**. So, **Chrome** has a mode for extensions called **developer mode**. You'll see I have that toggled on at the top. And it basically means that you can install extensions not from the **Chrome web store**. You can install extensions like from your local computer. So, you don't want to generally have that on cuz like somebody could have sideloadaded in some uh some credit card skimmer that you've imported or something. But if you know what you're doing uh and you know you just built a thing, you can go in here and turn this on. And then this looks a little bit different once you have this on compared to probably what you guys who are not having this on look in your **Chrome extensions** world because we have these options on the side here to load an unpacked extension. So this means an extension that's not like fully deployed in the app store. So let's hit this and this is going to open up our little uh file browser here. So let's just pop back and we had called this **Slack summary extension**. Okay, so that is now loaded in. The moment of truth with the truth of this software is you can only test it uh or easily test it in **Chrome**. Um so we're going to actually try it out. Uh whenever you download a new extension, you do need to refresh your tab so it picks up that extension. So if right now I tried to use it, it's still working with the extensions that I had at the time I loaded it. So I'm going to refresh this **Slack** so I can pick up our new uh extension here. And our moment of truth is going to be we're going to focus on this message. And I'm gonna hit my shortcut of **control shift one** and we'll see. Did we uh did we nail it?

</details>

**Claire Vo**: 哦，看我们的链接。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh, look our link.

</details>

**Joe McCormack**: 黑色，对吧？

<details>
<summary>Original English</summary>

**Joe McCormack**: Black color, right?

</details>

**Claire Vo**: 是的，这有点意思。所以它正在处理我们的链接。我们看看。它成功了吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, it's kind of interesting. So, it's processing our link. We'll see. Did it work?

</details>

**Joe McCormack**: 所以，有点工作，但我们这里有**JSON**，对吧？它不完美。嗯，所以，我们来做一点改进。所以，我将快速截取这个的片段。所以，我们将截取这个的屏幕截图，然后，嗯，我们将把它发回给**Claude Code**，并说“差不多了”。所以，再说一次，如果我们一次性成功会很酷。嗯，一个非常酷的演示。嗯，但它不是完美的一次性成功。所以，我们将在这里做一点小调整。我实际上将使用我编写的自定义斜杠命令来处理屏幕截图。所以，因为我是在**Windows**上开发，但我实际上是在**Windows Subsystem for Linux**中运行**Claude Code**。它无法访问我的**Windows剪贴板**。所以我不能像其他人那样，直接在这里按下**Control+V**并粘贴。所以，我在这里添加了一个斜杠命令，叫做`paste image`，它使用一些**PowerShell快捷方式**从我的剪贴板中提取图像并与**Claude**共享。所以，我可以截取那个片段并分享它。再说一次，这同样，我以前会复制一个文件，然后我会在**Windows**中保存它，然后将其移动到**Linux**，然后用一个应用程序提及导入它。然后我就想，肯定有更好的方法。我现在总是使用这个斜杠命令来构建东西。

<details>
<summary>Original English</summary>

**Joe McCormack**: So, kind of work, but we have **JSON** here, right? It's not it's not perfect. Uh so, let's let's work on one one level of refinement here. So, I'm going to take a a quick snippet shortcut of of this. So, we're gonna take a screenshot of this and uh we're gonna send this back to **Cloud Code** and say almost. So, again, it' be cool if we oneshot it. Uh a really cool demo. Um but it's not a perfect oneshot. So, we'll make one slight tweak here. And I'm actually use a custom **slash command** I wrote to deal with screenshots. So, because I'm developing on **Windows**, but I actually run **Cloud Code** in uh this thing called the **Windows Subsystem for Linux**. It doesn't have access to my **Windows clipboard**. So, I can't do what everyone else can do, which is just like hit **controlV** here and paste it. So, I added a **slash command** here called **paste image** that uses some **PowerShell shortcuts** to pull images out of my clipboard and share them with **Claude**. And so, I can take that snippet and share it. And again, this is similarly, I like would copy a file and I'd like save it in **Windows**, then move it to **Linux**, and then import it with an app mention. And I was like, there's got to be a better array. And I use the **slash command** now all the time for for building stuff out.

</details>

**Claire Vo**: 这是极端的软件工程师行为，你就像在说：“好吧，我在这个操作系统上运行，但我的终端在这个上面，现在我无法访问我的剪贴板，但我仍然喜欢这种方式。所以我要写一个小脚本，给自己一个两个字的快捷方式来实现这个。”

<details>
<summary>Original English</summary>

**Claire Vo**: This is this is extreme software engineer stuff where you're like, okay, I run on this OS, but I run my terminal on this and now now I can't access my clipboard, but I still like it that way. So, I'm going to write a little script to give myself a a two-word shortcut to make this happen.

</details>

**Joe McCormack**: 所以它导入了这个，它只是把屏幕截图放到我的TMP目录中。所以我只需要说：“是的，请阅读它。”嗯，所以，再说一次，它每天节省那两分钟。嗯，很快就累积起来了。嗯，所以它只是要修复这个小**JSON**部分。再说一次，这有点意思。它很接近。它得到了正确的内容。它只是没有正确显示。所以现在它将继续工作一秒钟，我们应该很快就会有一个快速更新。好的是，对于**Chrome扩展**在**开发者模式**下，只需一个简单的点击按钮，你就可以更新并获取所有扩展的最新副本。所以如果你同时处理多个扩展或其他任何东西，你只需点击那个按钮，它就会为我们更新。所以我们看到它正在这里完成。

<details>
<summary>Original English</summary>

**Joe McCormack**: And so, it ported this and it just it drops the screenshots in our in my **TMP directory**. So, I just have to say, "Yep, please read it." Um, so again, it's it's saving those uh those two minutes every day. Uh, adds up adds up fast. Um, and so it's just gonna fix this little **JSON** piece here. And again, it was kind of interesting. It was close. It it it got the right content. It just didn't display it, right? And so now it's going to go off and work on this for another second here, and we should hopefully have a a quick update. And the nice thing is with uh with **Chrome extensions** in the **developer mode**, there's just an easy one-click button where you will update and grab the latest copy of all of your extensions. So if as you're working on multiple at a time or whatever, you can just hit that button and it's going to update for us. So we'll see it's finishing up here.

</details>

**Claire Vo**: 我在这里为那些正在向**OpenAI**编写查询的人指出一件事。它将**JSON**从提示中移出，它说“请返回**JSON**”。我认为它实际上只是将**JSON**作为字符串文本返回，而它实际上将其移动以将响应对象更改为**JSON**。这样它就可以被**Chrome扩展**以更结构化的方式读取。

<details>
<summary>Original English</summary>

**Claire Vo**: And one of the things that it's doing just I'm calling this out for people who are writing um queries to **OpenAI**. It's moving the **JSON** out of the prompt which it's saying please return **JSON**. I think it's actually just returning **JSON** as a um string in text and it actually moved that to change the response object to being **JSON**. So then it can actually be read by the um by the **Chrome extension** in a in a more structured way.

</details>

**Joe McCormack**: **Control+Shift+1**。看看它是否有效。

<details>
<summary>Original English</summary>

**Joe McCormack**: **Control shift one**. See if it works.

</details>

**Claire Vo**: 我们正在验证。

<details>
<summary>Original English</summary>

**Claire Vo**: We're doing truths.

</details>

**Joe McCormack**: 完美。

<details>
<summary>Original English</summary>

**Joe McCormack**: Beautiful.

</details>

**Joe McCormack**: 我们成功了。搞定了。所以，再说一次，我们有了这些要点。我们现在可以根据这个采取行动，我可以决定，我真的关心**Iterable**添加了**MCP**吗？我关心。嗯，剧透一下。嗯，但，是的，再说一次，我们做到了，嗯，我认为在25分钟内。它在你的**屏幕阅读器**中工作吗？可访问性呢？

<details>
<summary>Original English</summary>

**Joe McCormack**: We got it. Nailed it. So again, we've got these takeaways. We can now action on this and I can decide, do I actually care that **iterable** added **MCP**? I do. Uh spoiler alert. Um but yeah, again, we did it uh I think under under 25 minutes here. And is it working in your **screen reader**? Did the accessibility

</details>

**Joe McCormack**: 完全，完全可访问。嗯，所以这些模态框通常有时会有问题。嗯，因为**屏幕阅读器**有时会读取模态框后面的内容。嗯，但令人惊讶的是，尽管很多网页都不可访问，但如果你告诉一些基础模型“请让它可访问”，那么可访问性标准实际上记录得非常好。所以它们确实做得很好。所以它们使用了正确的所谓**ARIA角色**，并使这个模态框具有正确的焦点，不让你读取它后面的内容。所以，嗯，开箱即用它们不会让所有东西都变得极其可访问，但如果你说“嘿，去这样做”，它会很乐意遵循规范并使其可访问。

<details>
<summary>Original English</summary>

**Joe McCormack**: fully fully accessible? Um so this modals in general can be sometimes problematic. Um because a **screen reader** will sometimes read behind the modal. Um but surprisingly although not a bunch of the web is not accessible if you tell some of the foundational models like please make this accessible the accessibility standards are actually incredibly well documented. So they they do actually a great job of this. So they they use the right what's called **Arya A R I A roles** and make this modal have the right focus not let you read behind it. So uh out of the box they're not going to make everything extremely accessible but you say hey go do this it it'll gladly go follow the spec and make it accessible.

</details>

### 多模态AI的个人应用

**Claire Vo**: 这是一个元问题，也许在我进入元问题之前，我们先为人们回顾一下我们看到了什么。所以你构建了一个**Chrome扩展**，它专注于**Slack**的网页版。嗯，这个**Chrome扩展**在本地运行，因为你在**Chrome设置**中打开了**开发者模式**，它会获取同事或**Slack**中其他人分享的焦点链接。它会出去解析那个链接。我们会看看里面是否有任何链接。它会解析它。它会提取一些关键要点。你构建它的方式是，你跳进了**VS Code**。你口述了一个简短的**PRD**。嗯，你让**AI**来构建它。你对它做了微小的调整，但基本上就发布了。你使用了**Claude Code**，包括一些自定义的斜杠命令，嗯，以及一个专门用于构建**Chrome扩展**的**Claude技能**，然后搭建了那个**Chrome扩展**。嗯，你向我们展示了**Claude Code**中的**Control+G**，你可以在其中实际将提示和输入作为代码进行修改，这从可访问性角度和一般用户体验角度来看都更高效。你，嗯，我向我们展示了一个自定义的屏幕截图，所以你非常特殊的，嗯，正如我所说，独特的**雪花软件工程师环境**可以按照你想要的方式运行，即使存在一些技术障碍。然后现在我们有了这个很棒的小扩展，我希望它能在我的应用程序上运行。所以这很棒，**Joe**，我喜欢这个。我想进入一些闪电轮问题，这让我产生了一个我真正想问你的想法，那就是关于**MCPS**。所以，我认为**MCPS**最有趣的事情之一是它允许你绕过所有UI，直接获取**SaaS产品**的核心功能。我可以想象，虽然有很多可访问的企业软件产品，但并非所有产品都在其设计或底层实现方式上都追求最大程度的可访问性。你是否发现**MCPS**以及与这些**SaaS工具**的接口改善了你的可访问性？还是没有？你对此有何看法？

<details>
<summary>Original English</summary>

**Claire Vo**: So this is a meta question and maybe before before I get into the meta question let's just recap for folks what we saw. So you built a **Chrome extension** that's focused to the web version of **Slack**. um that that **Chrome extension** that's running locally because you've toggled on **developer mode** in your **Chrome settings** will take a focused link that's shared by a colleague or somebody in **Slack**. It will go out. It will parse that link. We'll see if there any links in it. It'll parse it. It'll take some key takeaways. The way you built this is you bopped into **VS Code**. You dictated a short **PRD**. Um you let **AI** kind of build that out. You made minor tweaks to it, but basically shipped it. You used **Claude code** including some custom **slash commands** um and a **cloud skill** specifically around building uh **Chrome extensions** to then scaffold out that **Chrome extension**. Um you showed us **control G** in **cloud code** where you can actually just modify prompts and inputs as code which is much more efficient both from an accessibility perspective and just general user experience perspective. and you uh I showed us a custom screenshot so your very special um as I say you know unique snowflake software engineer environment can operate as if you as you want even if there are some technical hurdles and then now we have this great little extension that I want running on on my app. So this is great **Joe** I love this. I want to hop into some lightning round questions and this has given me an idea of one that I really want to ask you which is about **MCPS**. So, one of the things that I think are is so interesting about **MCPS** is it allows you to bypass all **UI** and just get to the bones of what a **SAS product** does. And I can imagine that while there are lots of okay accessible enterprise software products, not all of them are building for maximum accessibility either in their design or in their kind of under underlying way they're implemented. Have you found **MCPS** and just that interface into some of these **SAS tools** has improved accessibility for you? Has not? What are your thoughts there?

</details>

**Joe McCormack**: 我认为我的最终目标是，我希望能在同一个地方做所有事情，而不必切换工具，无论是上下文切换成本还是仅仅是切换成本。所以拥有**MCPS**在这方面非常棒。嗯，幸运的是，我实际上认为很多企业软件令人惊讶地构建得相当快，比如我真的想向**Google Docs**致敬。**Google Docs**就其功能而言，其可访问性令人难以置信，而人们不知道为了实现这一点所付出的努力，比如正在做的每一件事都通过这种秘密系统，人们不知道的叫做**ARIA实时公告**，基本上是逐字逐句地传达给**屏幕阅读器**，这有点疯狂。嗯，但我确实发现，嘿，我需要从三个网站获取一些东西，这有点痛苦，比如我能直接使用**Notion MCP**和**Google Docs MTP**或者**Glean**吗，这大大简化了。**Notion**是一个有点难的。我认为他们从可访问性的角度来看，在某些方面尽力了，但**Notion帖子**或**Notion文章**中有很多内容。所以，我认为这是另一个例子，就像，是的，我可以把它拉下来，在Markdown版本中工作，那会容易得多。嗯，再说一次，我可以通过这些**键盘快捷键**和折叠功能更容易地导航。所以，我会拉下一些**Notion帖子**，然后说：“把这个转储到Markdown文件中给我。”然后使用我的小代码快捷键来帮助导航其中一些部分。

<details>
<summary>Original English</summary>

**Joe McCormack**: I think the ultimate goal uh Moh of mine is I would love to do everything in one place and not have to switch tools like whether it's a context switch cost or just a a switch cost. So have **MCPS** has been great for that. Um luckily I actually think lots of enterprise software surprisingly is being built pretty fastly like I want to really give strong kudos to like **Google Docs**. **Google Docs** for what it does is so crazy accessible and the work that people don't know that goes into make it that like every single thing that is being done is being communicated to the **screen reader** basically letter by letter um via this like secreting uh the secret system that people don't know about called like **ara live announcements** is kind of crazy um but I do find like hey I need to get something from three sites like that's kind of painful like can I just use the **notion MCP** and **cool docs MTP** or **glean** in there is greatly **notion** is one that is a little bit harder. I think they they do their best from accessibility standpoint in some ways, but there's a lot going on in a **notion post notion article**. So, I think that's another example where it's like, yeah, I can just pull this down and work in the **markdown version** that's going to be a lot easier. Um, and again, I've got it's way easier for me to navigate with these like **keyboard shortcuts** and the folding feature. So, I will pull down some **notion posts** and just be like, dump this into a **markdown file** for me and then use my little code shortcuts to help navigate some of those pieces.

</details>

**Claire Vo**: 是的，我喜欢那个。所以我的第二个问题再次是关于**个人软件**以及转换的能力，就像你说的，你可以将一个相当复杂的**Notion页面**转换成**Markdown**，这让你能够以更高效的方式阅读和解析它。所以我认为这种转换文件或格式的能力是**AI**一个非常令人兴奋的部分，我们在这集节目中也提到了一些，比如**图像到文本**，**语音到文本**。但我很好奇，对你来说，在**AI**的多模态世界中，你最兴奋的是什么？你知道，最近有什么让你眼前一亮并感到兴奋的东西，或者你希望在未来几个月或几年内看到什么，你认为它能真正为你个人或作为产品构建者带来突破？

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, I love that. And so my second question again is around **personal software** and the ability to translate sort of as you said you can take a pretty complex **notion page** turn it into **markdown** that allows you to you know read and parse it in a much more efficient way and so I think this ability to translate files or formats is a really exciting part of **AI** and we've hinted at a couple things we've seen in this episode a little bit of like **image to text**, a little bit of **voice to text**. But I'm curious for you, what are you most excited about in sort of like the **multimodal world of AI**? And you know, what recently has come out that's, you know, caught your eye and made you excited or what are you hoping to see in the next couple months or years that you think could really open up stuff either for you personally or just as a product builder?

</details>

**Joe McCormack**: 是的，我将谈谈个人领域。我有两个孩子。一个5岁，一个3岁。嗯，给他们读书是一个挑战。我不懂**盲文**。我一直在努力学习，但33岁学习一项新技能很难。嗯，所以我记住了几本书。嗯，我会读那些书，但这并不是真正的阅读。那是假装阅读。嗯，但我还是要大力赞扬**Gemini应用**及其实时分享功能。我现在可以阅读任何书。嗯，听起来像是我在读，但我和我三岁的儿子**Cole**会坐在沙发上。他会拿一本书过来，我就会说：“嘿，我能读这本，或者不，**Gemini**能为我们读这本。”我们会翻页，然后说“**Gemini**，下一页”，**Gemini**就会读那一页，然后我们翻到下一页，它就会读那页的内容。所以我认为，只是对一切的公平访问，嗯，这很棒，而这一点是我一直害怕的，那就是我能读故事吗？我能记住故事。我能讲故事。但你的儿子可能会说：“我想读这本书。”而你不得不说：“对不起，我不能。”现在，那个“对不起，我不能”变成了“对不起，我可以”，有了这么多不同工具的帮助。但我认为**Gemini**这个特别有用，我发现它在轻松分享方面最强大，只需说“下一页”。它知道所有上下文。它立即开始阅读。嗯，我有**Meta Glasses**。我有**Chat GPT Pro**。我拥有所有这些东西，但我认为**Gemini**现在做得最好。这还是在我尝试任何刚刚发布的**Gemini Pro 3**之前，看看它是否能让情况变得更好。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah, I'll talk in the personal space. So, I have a I have two kids. I have a 5-year-old and a three-year-old and um reading books to them is is a challenge. I don't know **Braille**. I've uh been trying to learn, but it's a a hard skill to pick up at 33. Um and so I've memorized a handful of books. Um and I'll read those, but it's uh it's not really reading. It's fake fake reading. Um but I big shout out to the **Gemini app** and its uh like live share features. I can now read any book. Uh it sounded like me reading it, but me and my three-year-old **Cole** will sit on the couch. He'll bring a book over and I'll be like, "Hey, let's I I can read this one or no, **Gemini** can read this one for us." and we'll turn the pages and say like **Gemini** next page and **Gemini** will read that page and then we'll turn to the next one and it'll read the content of that. And so I think just like equitable access to everything um is is great and that piece is one thing that I was always afraid of is like can I read stories? I can memorize stories. I can tell stories but there is something to just like your son being like I want to read this book and you having to be like sorry I can't. And now that sorry I can't becomes like sorry I can with the assistance of so many different tools now. But I think the **Gemini** one is particularly useful and I found that one to be the strongest for just like easy sharing just saying next page. It knows all the context. It immediately starts reading it. Um I have like **metagasses**. I have the **chatb pro**. I've got all these things but I think **Gemini** is doing the best job of it right now. And this is before me trying any of the **Gemini Pro** uh 3 that just came out to see if any of that makes it even better.

</details>

**Claire Vo**: 嗯，那是一个非常非常感人的故事。是的，我当时就在想，我希望，嗯，我喜欢并且每天都在使用的**Meta Glasses**也能在这方面做得更好。但很高兴听到**Gemini**能为与孩子共度的特殊时光增添色彩，正如你我节目开始前所说，你知道，我们都是男孩的父母，那是一段非常特殊的时光。所以我的最后一个问题是，当**AI**不听话时，我很好奇你是打字还是说话，你的提示技巧是什么？你有没有对你的**AI**大喊大叫过，或者，你知道，当**AI**或**Claude**真的卡住时，你有什么诀窍可以告诉我们吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Well, that is a very very sweet story. And yes, I was just thinking I wish um the **Meta Glasses**, which I love um and and use every day, would would would also help do a better job there. But it's awesome to hear that **Gemini** can add to that that special time with kids, which as you and I were talking before the show, you know, we both are boys, parents of boys, is just is is such a special time. So my last question is when **AI** is not listening and I'm curious if you type or if you speak this what are your **prompting techniques** have you ever **whisper flow** yelled at your **AI** or you know do you have any tricks for us when **AI** or **Claude** gets really really stuck?

</details>

**Joe McCormack**: 我认为这是一个有点书呆子的答案，这对我来说很合理，但，嗯，我通常的模式基本上是清除上下文，然后尽可能重新开始。我认为很多人会尝试不断地“按摩”它，并认为如果我在这段对话中再发送一个额外的提示，它就会弄明白。就像不，你必须从头开始，并从上次的经验中吸取教训。嗯，所以有些人会说这进展不顺利。你从中吸取了什么教训？把这些教训融入到下一个提示中。但大多数时候我都会说：“让我们从头开始。”显然，在这个上下文中有些东西被污染了。我们从头开始。我觉得一切都会感觉更顺畅。

<details>
<summary>Original English</summary>

**Joe McCormack**: It's kind of I think a nerdy answer which makes sense for for me but uh I my typical mode is basically like clear cont the context and uh and start fresh as much as possible. I think I think a lot of people uh will will try and like keep massaging it and being like if I just send this one extra prompt in this conversation it'll figure it out. It's like no you just have to start from scratch and take the learnings that you have from the last time. Um and so some would be like this hasn't been going great. What did you what did you learn about this? take that and feed that into the next prompt. But most time I used to be like, "Let's start from scratch." Something clearly got poisoned in this context. And we start from scratch. I feel like it just everything just feels smoother.

</details>

### 总结与展望

**Claire Vo**: 我喜欢。好的，**Joe**，非常感谢你展示这些。我认为这只是我们以前从未见过的工作流程之一。每个人都能找到一个用例。我正在思考我生活中所有各种微小的摩擦点，一个或两个**键盘快捷键**就能让事情对我来说变得更好一些。那么，我们可以在哪里找到你，我们如何能帮助你呢？

<details>
<summary>Original English</summary>

**Claire Vo**: I love it. Well, **Joe**, thank you so much for showing this. I think it's just one of those uh workflows that we haven't seen before. Everybody can find a use case. I am thinking of all sorts of little micro frictions in my own life where a **keyboard shortcut** or two could really make things a little bit better for me. So, where can we find you and how can we be helpful to you?

</details>

**Joe McCormack**: 是的。嗯，我提到了，嗯，在**Baby List**，**Baby List**正在积极招聘。嗯，如果你喜欢在日常软件构建中使用**AI**，并且你是一名软件工程师，嗯，我们是一家使用**Ruby on Rails**和**React**的公司，嗯，但我们正在全面招聘，各个级别都有。所以，嗯，请访问babos.com查看我们，嗯，我个人也在**LinkedIn**上。所以请随时联系，特别是如果你有任何无障碍问题或任何关于**Chrome扩展**路径的问题，我总是很乐意在**LinkedIn**上回答。

<details>
<summary>Original English</summary>

**Joe McCormack**: Yeah. Um, so I mentioned um at **Baby List**, **Baby List** is very actively hiring. Um, and if you are somebody who likes using **AI** in your day-to-day building of of software and you're a a software engineer uh we are a **Ruby on Rails** and **React** shop um but hiring across the board, all different levels. So, uh check us out on uh on babos.com and uh personally I'm on **LinkedIn** as well. So feel free, especially if you have any accessibility questions or any questions on some of the **Chrome extension** path, I'm always happy to answer on **LinkedIn**.

</details>

**Claire Vo**: 好的，感谢你加入《How I AI》。

<details>
<summary>Original English</summary>

**Claire Vo**: Well, thanks for joining **How I AI**.

</details>

**Joe McCormack**: 谢谢。

<details>
<summary>Original English</summary>

**Joe McCormack**: Thank you.

</details>

**Claire Vo**: 非常感谢大家的观看。如果你喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下你的评论和想法。你也可以在**Apple Podcasts**、**Spotify**或你喜欢的播客应用上找到这个播客。请考虑给我们评分和评论，这将帮助其他人找到这个节目。你可以在howiipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>Original English</summary>

**Claire Vo**: Thanks so much for watching. If you enjoyed this show, please like and subscribe here on **YouTube** or even better, leave us a comment with your thoughts. You can also find this podcast on **Apple Podcasts**, **Spotify**, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiipod.com. See you next time.

</details>