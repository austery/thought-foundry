---
author: The Pragmatic Engineer
date: '2026-02-23'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=Bo6Gtq3nMXc
speaker: The Pragmatic Engineer
tags:
  - ai-agent
  - software-development
  - developer-productivity
  - prompt-engineering
  - organizational-workflow
title: AI如何重塑软件开发：OpenAI的内部实践与未来展望
summary: 本次访谈深入探讨了AI，特别是**Codex**和AI代理，如何从根本上改变**OpenAI**内部的软件工程实践。嘉宾**VJ**和**Tibo**分享了AI如何显著提升开发效率，引入了如夜间自动测试、AI辅助会议等创新工作流程。他们还讨论了AI对初级工程师（AI原生）和产品经理、设计师角色演变的影响，并就成本考量及未来软件工程的发展趋势提出了独到见解。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
products_models:
  - Codex
  - Codex Box
media_books: []
status: evergreen
---
### AI重塑软件开发

**主持人**: EJ，这是一个多么激动人心的时代啊。你能告诉我们一个很多人都在问的问题吗？**OpenAI**内部现在正在发生什么？更具体地说，在软件构建方面，工程师们的工作方式以及整个行业正在如何变化？

<details>
<summary>Original English</summary>

**主持人**: So what a time to be alive, EJ. Can you tell us a question that a lot of us are asking? What is happening inside OpenAI right now? More specifically, when it comes to building software with how engineers are doing stuff and how the whole thing is changing.

</details>

**VJ**: 是的。很高兴你澄清了这一点。很多事情正在发生。我到这里大约六个月了，我学到的一件事是，公司内部正在进行的研究有太多值得学习的地方。仅仅是展望未来的可能性就令人惊叹。所以我要告诉你，我们编写软件的方式已经发生了根本性的改变。它的变化如此之大，甚至在过去的六个月里，我看到我们从将**Codex**作为一种工具，发展到将其作为扩展，再到代理，现在甚至成为队友。我完全期待工程师们现在会给他们的代理命名，并称它们为自己的队友，而且这一切发生得如此之快。我查看了一些内部使用**Codex**的人的排行榜，有些工程师每周例行处理数百亿个token。这不仅仅是一个代理。上周我们在内部发布了**Codex Box**，这是一种让我们能够在服务器上实际预留开发盒子并触发提示的方式，它在你用笔记本电脑协调所有这些工作时，正在完成这些工作。然后人们可以关掉笔记本电脑，去开会，回来时所有工作都已完成。所以这一切都是并行发生的。这就是**OpenAI**内部软件发生根本性变化的方式，我迫不及待地想看到这一切在硅谷中心，并在几个月内进一步扩展。我认为这将成为常态。每个人都将以这种方式开发软件。这非常酷。

<details>
<summary>Original English</summary>

**VJ**: Yes. I'm glad you clarified that. Lots are happening. I've been there for about six months and one of the things that I've learned is there is so much to learn from the kind of research that's happening in the company. And just to project out what are the possibilities is just mind-blowing. So I'll tell you this, the way we write software has fundamentally changed. It's changed so dramatically, and even in the last 6 months, I've seen us go from **Codex** as a tool to an extension, to an agent, now to a teammate. I fully expect engineers to name their agents now and call themselves as their teammates, and this is happening so fast. I was looking through some of the leaderboards of the people that are using **Codex** internally, and some of the engineers routinely hit hundreds of billions of tokens every week. And this is not just one agent. We're talking about last week we released **Codex Box** internally, which is a way for us to like actually reserve dev boxes on the server and fire off prompts and it's doing the the work. doing the job while you're um on your laptop orchestrating all of this stuff and then people like shut down their laptop, go to a meeting, come back and then like all of the the work has been done. So this is this is happening in parallel. This is how fundamentally software has changed um internally at **OpenAI** and I can't wait for all of this in the kind of like the center of Silicon Valley and then to expand further and further in a few months. I think this will be the norm. Everybody is going to be developing software this way. Uh, and that's pretty cool.

</details>

### Codex团队工作流程

**主持人**: 如果我回到六个月甚至一年前，听到你这么说，我会觉得这像是一个神奇的童话，你编造了一半。然而，我们很多人确实正在使用它，我也在使用，我看到了正在发生的事情。我一直在和**OpenAI**的工程师们交流。我喜欢和工程师们交流，因为他们“没有滤镜”。这是实用引擎工作秘密的一部分。我与那些没有受过媒体培训的工程师交流，他们只是告诉我真实情况。在**OpenAI**内部，有一件事让我感到非常欣慰，老实说，并不是所有工程师都100%使用**Codex**编写代码，他们都在大量使用它，但存在很多层次。有一个团队绝对走在前沿，我又和很多工程师聊过，那就是**Codex**团队。**Tibo**，你领导着**Codex**团队。你能告诉我**Codex**团队现在是如何工作的，以及工程师们目前典型的工作流程是怎样的，就像昨天或今天早上那样？

<details>
<summary>Original English</summary>

**主持人**: So, like if I would just take myself back, you know, 6 months, even a year, and I would hear you you you say this, I would think like, oh, it's it's like a magical fairy tale. You're making half of this up. However, actually like a lot of us are using it. I'm using it. I'm seeing what's happening. And I've been talking with engineers inside of OpenAI. I love talking with engineers because they have hashtag no filter like like this is the secret to part of the prag why the pragmatic engine works. I talk with engineers who they don't have this thing called media training or all that and and they just [laughter] they they just tell me how it is and inside of OpenAI one thing that was pretty comforting to me I'll be honest is not all engineers are writing 100% of their code with with codeex they're all using it a lot more but it's there's there's lot levels there one team that is absolutely on the cutting edge though and again I've talked with a bunch of engineers is a codeex team and uh they're even ahead of others inside open AAI so Tibo like you leading the the Codex team. Can you tell me how the Codex team works today and what the typical workflow of an engineer is like right now as of like yesterday or this morning?

</details>

**Tibo**: 是的，这是一个快速演变的情况。**Codex**团队运作的令人愉快之处在于，他们几乎每周都在不断地重塑自己的工作方式。我们追求的目标是识别每一个小瓶颈，而这些瓶颈也在不断变化。所以，以前可能是代码生成，然后转移到代码审查，现在则更多地是“我们如何更快地理解用户需求？我们如何处理工单？我们如何弄清楚每个人在Twitter、Reddit以及所有重要平台上说了些什么，并将其综合成一个策略？”每个人都在使用并尝试利用代理来达到最佳效果。一个有趣的事情是，前几天在一次谈判中，有人想加入**Codex**团队，这个人问我：“我在**OpenAI**构建产品能获得多少计算资源？”我当时想：“嗯，这是一个有趣的问题。”我们确实有很多计算资源，但我从未真正考虑过，所以这就像是每个员工的计算资源配额。通常这更多地是为那些实际训练非常出色模型的研究人员保留的。所以我认为这里有一个转变，人们意识到你可以通过各种新颖的方式极大地提升自己，如果你有很好的品味、很棒的想法，并且知道如何构建软件，那么现在真的是一个激动人心的时代，你能做的事情简直不可思议。

<details>
<summary>Original English</summary>

**Tibo**: Right. It's a it's a fast evolving situation. Uh the thing that's delightful about how the Codex team operates is that they're sort of like constantly reinventing how they're working like almost on a week-toeek basis. And the thing that we go after is like you know we sort of like identify every single little bottleneck and the bottlenecks keeps shifting. So you know it used to be code generation and then you know then it moved to like code review and then now it's very much like hey how do we understand the user needs faster? How do we try tickets? like how do we like figure out you know what everyone is saying on Twitter, Reddit, you know, all the important surfaces and sort of like synthesize that into a strategy and like everyone is using you know and trying to like leverage agents for that to the very best effect and an interesting thing is like the other day it was like the first time in a negotiation like you know someone was trying to join the critics team and like this person asked me like how much compute am I going to get to build products at OpenAI. I was like huh that's an interesting question. I mean we do have a lot of compute but I haven't really thought about you know so it's like a compute envelope per employee. Um usually that's more like reserved to like researchers who are actually training like really phenomenal models. So I think there's like this this shift there where you know people realize you can hyper leverage yourself in you know all sorts of like novel ways and if you do have great taste great ideas you know you know how to build software it's like you know what a time to be alive really like it's just like incredible what you can do

</details>

### 软件工程师角色变化

**主持人**: 回到**Codex**团队之外，**VJ**，你在**OpenAI**内部有很多可见度。软件工程师，或者我应该说产品工程师的工作正在如何变化？**OpenAI**一直以来都非常明确地招聘既是软件工程师又是产品工程师的人。他们的工作正在如何变化？产品方面的事情是如何演变的，还是没有演变？

<details>
<summary>Original English</summary>

**主持人**: and taking a little bit step back outside of the codeex team VJ you're you you have a lot of visibility inside of open AI how is the work of a software engineer or should I say a product engineer changing open AI has always hired software engineers who are product engineers very clearly. How is their work changing? How how is are things morphing with with with product or are they not morphing?

</details>

**VJ**: 从根本上说，我们仍在为人类构建产品。因此，即使在使用**Codex**时，也需要大量的**产品直觉**发挥作用。感谢新的one-app，它让每个人都能更容易地开始编码。在很多情况下，我们必须构想要构建和发布的产品，这是起点，然后你必须不断调整它才能达到正确的位置。我不认为这会改变。只要我们继续为人类构建软件，我的意思是，未来某个时候我们可能会为代理构建软件，但那时代理可能会成为产品工程师或产品经理。但我认为这种速度使其更具吸引力，更具说服力，老实说也更有趣。我曾在飞机上编码，当时无法访问开发盒子。所以你得在空乘人员过来让你关电脑时，把笔记本电脑半开着。不，不，我不想让代理停止，所以我把它稍微开着然后放下。

<details>
<summary>Original English</summary>

**VJ**: Um fundamentally we're still building products for humans to use. And so there's a lot of like product intuition that comes into play even when um so I've been messing around with codeex thanks to the new onep app that uh makes it even more accessible for everyone to like um start coding. Um even in the lot of cases where we have to imagine what the product that we have to build and ship and that's where it starts and then you have to constantly tweak it to get it to the right place. I don't think that's going to change. I as long as we continue to build software for humans. I mean at some point in the future we may build software for agents but then maybe the agents will become the product engineers or product managers at that point. Um, but I I think the the uh the velocity makes it a lot more appealing and compelling and actually more fun to be honest. Um, I was coding in on a plane. Um, and at that time, you know, I didn't have access to the the dev boxes, but so you kind of like keep the laptop open when the flight attendant comes over like you have to shut down your laptop. No, no, but I don't want to like, you know, have the agent stop, so I like keep it slightly open and then put it down.

</details>

**主持人**: 每个人现在都拿着半开的笔记本电脑跑来跑去。

<details>
<summary>Original English</summary>

**主持人**: Everyone just runs around with their laptop like, you know, half closed right now. It's like

</details>

**VJ**: 是的，我们在做什么？我认为现在构建软件更有趣，因为**满足感周期**大大缩短了，看到你正在构建的产品，测试它，验证它，然后回到**Codex**，这真的很酷。

<details>
<summary>Original English</summary>

**VJ**: yeah what are we doing? I I I think I think that's u you know I actually think you know it's more fun now uh building software is because the the the cycle the gratification cycle is so much shorter and it's so really cool to see the product that you're building test it verify it and then go back to codeex

</details>

### 新的工程实践

**主持人**: 作为工程师，我们是工程师，你现在开始看到哪些新的、不同寻常的或奇怪的工程实践，它们现在开始变得有意义，尽管它们看起来很奇怪？

<details>
<summary>Original English</summary>

**主持人**: and as as engineers we're engineers what are new different or weird engineering practices that you're now starting to see that kind of you know it starts to make sense as weird it

</details>

**Tibo**: 以前，你可能需要面对困难的技术权衡，然后你会做一份设计文档，讨论所有内容，然后你可能会想：“还有哪些可行的替代方案？”然后你可能会放弃一些。我认为现在令人愉快的一点是，我看到人们可以同时探索多种不同的实现方式，然后我们可以真正专注于我们认为效果更好的那一个。另外一点是，我也看到规则变得模糊。例如，我们的设计师现在发布的**代码**比六个月前的工程师还要多。这仅仅是因为模型已经足够好，它们生成的代码是我们愿意直接合并的。

<details>
<summary>Original English</summary>

**Tibo**: Um it used to be that you know you had like you difficult like technical trade-offs and you sort of like you know do like a design dock and discuss it all and then you know maybe you're like oh what are the other viable alternatives and then you know you sort of like discard that. I think a delightful thing is that now I see people explore like know multiple different implementations like all in parallel and then we can like actually zoom in on the one that you know we sort of like prove to work better. Um the other thing is I also see like rules like blur. Um so like our designers are like shipping more code than like you know engineers were shipping like six months ago. And that's just also because like the models have become like sufficiently good that the code that they're producing you know is actually code that we would want to merge just as is.

</details>

**主持人**: 你在更广泛的**OpenAI**中还看到了什么吗？

<details>
<summary>Original English</summary>

**主持人**: Do you do you have do you see anything else like in the broader OpenAI? Um I

</details>

**VJ**: 我注意到，你们还记得所有命令行工具的命令行吗？我不想挑剔，就像我之前和**Tibo**聊过，他的团队编辑视频文件，如果你了解**ffmpeg**，我想没有人会记住那些命令行。**Codex**是一个非常棒的工具，你可以说：“我想做这个”，然后它会生成命令行，你去执行它。所以这些是我们看到人们使用**Codex**的一些新方式。我还认为，我们现在已经从仅仅是编码，发展到代码审查、安全审查，然后正如**Tibo**所说，我们将发现更多的瓶颈。例如，一旦你解决了编码问题，你就让每个工程师的生产力提高了五倍。接下来会发生的是，会有更多的代码被编写，这意味着代码审查将成为瓶颈，然后代码审查之后，集成和部署（**CI/CD**）将成为瓶颈。所以我们将不得不不断地去解决下一系列问题，这实际上非常令人兴奋。

<details>
<summary>Original English</summary>

**VJ**: have like noticed I don't know do you all remember like the command line for every one of the command line tools you use? I I don't want to pick an it's like I was talking to Tibo his team edits um video files and like you know f if you know ffmpeg it's like I don't think anyone remembers the command lines coex is like such a great tool for you like okay well I want to do this and then craft the command line go execute it. Um so those are kind of like new ways that we're seeing people use um codecs specifically. I also think that we've now moved on from just coding um to code reviews, security reviews and then um as Dibo said we're going to find more bottlenecks. So once you solve coding for example now you've just made every engineer five times more um five times more um productive. What's going to happen is like there's going to be more uh code being written which means that code reviews will become the bottleneck and then after code reviews uh integrations and deployment CI/CD will become the bottleneck. So we're going to have to constantly go solve the next set of problems uh which is really exciting actually.

</details>

### AI的夜间运行与自测试

**主持人**: **Tibo**，我们讨论你正在**Codex**所做的一件非常有趣的事情，我以前从未听说过，那就是夜间运行和自测试。你能给我们讲讲吗？因为这完全是全新的。

<details>
<summary>Original English</summary>

**主持人**: Then TB, one really interesting thing when we talked about what you're doing at Codeex that I've never heard before is these overnight runs and the self- testing. C can you tell us about that because that is like net new.

</details>

**Tibo**: 是的，我认为人们很容易陷入“这只是一个加强版的自动完成，它只会实现一个小功能，10分钟就能完成”的想法。但我们看到的是，如果你给模型一个非常大的任务，它实际上会强大得多。它能够运行好几个小时。所以，我们已经搭建了环境和技能，让**Codex**能够完全自主地测试自己。我们让它在夜间运行，这样它基本上就能在一个循环中执行**QA**，并标记出回归问题。另一件事是，我一直在和团队中一位实际训练模型的研究员交流，他说：“每当我以为自己比**Codex**更强时，我就会发现自己错了，我只是没有正确地提示它，或者没有正确地设置它。”这既令人兴奋，又有点令人沮丧。因为他说：“现在它只是完全独立地训练一个模型，然后在最后写一份小小的PDF报告，里面有它自己的见解和发现。”然后我们只需拿走这些，找出最有希望迭代的东西，然后把它重新输入**Codex**。所以，这些非常非常长时间运行的任务和成就，看到一个模型能够独立完成这些，真是令人难以置信。

<details>
<summary>Original English</summary>

**Tibo**: Yeah, I I think it's easy to sort of get stuck in like, oh, this is, you know, autocomplete on steroids and, you know, it's just going to implement a little feature and sure it will get done in like 10 minutes. But what we're sort of seeing is that the model is like much much more capable actually if you give it like a very large task. It's capable of like running for multiple hours. So, we assemble like we've assembled like the environment and the skills so that Codex can like fully autonomously test itself. uh we run this overnight so that you know it just basically performs like QA in a loop uh and like flags like regressions. The other thing was I keep talking to this researcher on the team who's actually training the models and he's like every time I think I'm more capable than codeex is just I figure out I'm wrong and I just like didn't prompt it right uh or I hadn't set it up in the right way. And you know this is both exciting and a little bit depressing at the same time. Um because he's like oh now it's just you know training a model fully independently uh and like writing a little PDF report at the end you know with like its own insights and findings and then we just take that and then find like you know the most promising things to like iterate on and then just like reput that into codeex. Um, and so like these like very very long running tasks and like achievements that you know just like it's incredible to see like a model do this like independently.

</details>

### AI辅助会议

**主持人**: 是的。我们还讨论了一件事，我觉得有点像科幻小说，你说有时你们开会，**Codex**团队开会讨论**Codex**及其遇到的问题，你告诉我一件有趣的事，就是人们会聚集在会议室里，然后你们会启动**Codex**线程来诊断**Codex**的问题。你能给我们讲讲这是如何运作的吗？因为这就像一个自我循环。

<details>
<summary>Original English</summary>

**主持人**: Yeah. And one more thing that we talked about that felt to me a bit like from a sci-fi is you said that sometimes you have meetings you the codec team has meetings about codecs and like issues that you have and you told me something interesting that you know like people you know get together in a meeting room and then you like fire off codeex threads to diagnose stuff with codecs can you tell us a little bit of of how that's playing because that is like really like a loop of itself.

</details>

**Tibo**: 是的，我们主要做两件大事。我们每周都会进行一次**分析审查**，回顾功能采用情况、用户留存率，分析我们的漏斗。我们总是以一些在仪表板中没有答案或我们没有深入研究过的问题开始会议，例如“哦，这看起来很有趣”。然后我们的数据分析师就会说：“好的，我们开会吧，在后台启动一个**Codex**线程，它会在20分钟内给出答案。”我们可以在会议的最后10分钟讨论它。然后我们会对会议室里人们提出的五六个问题都这样做。这就像一种神奇的体验，你会有一些小顾问在后台为我们工作。另一件事是，对于任何我们称之为“随叫随到”的情况，**Codex**都会在那里帮助我们找出哪里出了问题，以及最快的恢复路径是什么。在那里，它感觉一切都大大加速了，我们能收集到多少信息，以及我们能多快地解决问题。所以这是其中之一，而且它正在绝对加速。我们也在其他地方看到了这一点。

<details>
<summary>Original English</summary>

**Tibo**: Yeah, there are two big things that we do there. So we have this like weekly analytics review where we go over you know like feature adoption um you know retention like you know we analyze our funnel and we always start a meeting with like questions we have that you know just not answered in our dashboards or you know we haven't looked into like you know we're just like oh this looks interesting and then our data analyst is just like okay let's just meet let's fire off like a little codex thread in the background like you know it will like come back in 20 minutes we'll have the answer like by you know just like and we can talk about it like in the last 10 minutes of the And then we do that you know for five six questions that people have in the room and it's sort of like this magical experience where you know just have like this little consultants like you know working for us uh in the background and then the other thing is like for um whatever um you just like we get paid as call is like you know just codex is there like you know helping figure out like what went wrong what is the fastest path to recovery um and there it just sort of feels like you know so much accelerated and like you know how much uh how much information we can gather and like how quickly can solve for things. So this is one and it's absolutely accelerating right and we see this we see it elsewhere as well.

</details>

### 新生与初级工程师

**主持人**: 行业中一直有一个大问题：“新毕业生怎么办？初级工程师怎么办？”我与**OpenAI**的工程主管交流时，他提到了一件有趣的事情，那就是你们正在招聘早期职业工程师。听到这个消息真是太棒了。你能谈谈进展如何，你看到了什么？关于初级工程师不如高级工程师的担忧有多少是真实的，因为现在高级工程师可以使用AI代理。这些担忧的基础是什么，他们又是如何快速适应的？

<details>
<summary>Original English</summary>

**主持人**: One big question that is keeps coming back across the industry is what about new grads? What about junior engineers? And what I was talking with head of engineering at OpenAI uh he was saying something interesting that you are hiring early career engineers. Can you talk a little bit about this is great to hear. Can you talk about how it's going what you're seeing with them? How much are the fears of you know juniors are are not great because now seniors can just use like an AI agents. how how are this founded and you know how are they getting up to speed?

</details>

**VJ**: 我们正在招聘很多刚毕业的大学生。我们今年还有一个非常健全的**实习项目**。我真的相信，新一代的软件工程师将是**AI原生**的。他们将以一种原生的方式了解这些工具，并且能够从第一天起就利用我们的AI工具。我认为给他们这个机会将是至关重要的，在这种环境中培养他们将是惊人的。我迫不及待地想看到这一点。所以今年夏天将是我们第一批新毕业生进入**OpenAI**，我对此非常兴奋。这将大约有100人左右。然后，我希望继续发展我们在**OpenAI**内部的实习项目。所以，是的，在这个时代，这将是一件非常非常酷的事情。

<details>
<summary>Original English</summary>

**VJ**: Um we are hiring a lot of uh um new grad folks uh straight from college. We're also having u so this year we have a pretty robust internship program um I actually truly believe that the new uh software engineers that are being created are going to be AI native. They're going to know these tools in a native way. um and they're going to be able to leverage um our AI tools uh from day one. And I think giving them the opportunity is going to be critical and important and growing them in this kind of like the environment is going to be amazing. I can't wait to see this. And so this summer um is our kind of like a first batch of uh new grads that are going to be coming into OpenAI and I'm really excited for that. Uh it's going to be about 100 people or so. And then uh I want to like continue growing our internship program uh within OpenAI. So yeah, so this is going to be a really really cool thing to witness um in this age.

</details>

**主持人**: 那么**Tibo**，你是如何让人们适应**Codex**体验的呢？特别是在**OpenAI**内部，我的感觉是**Codex**团队可能比其他团队领先几个月或几周。当新人，无论是外部的还是**OpenAI**内部的，加入团队时，他们如何快速适应团队的工作方式？

<details>
<summary>Original English</summary>

**主持人**: And then Tibo, how are you onboarding people to the code experience specifically? Even within OpenAI, my sense is that the Codex team is maybe a little bit you know like a few months or or weeks or ahead of of how you're working. when someone new either from the outside or even from OpenAI comes like how do they get up to speed on how the team works?

</details>

**Tibo**: 我以一种非常扁平化的方式管理团队。我有33名直接下属，他们只是四处奔跑，做着很酷的事情。我不想成为瓶颈。我认为作为领导者，我们很容易不及时改变组织结构，以适应人们实际构建的速度。一个人成为每一个决策的瓶颈显然不再可行。但人们首先接触到的，显然是**Codex**本身。所以**Codex**负责入职培训。你只需向**Codex**提问，浏览代码库，了解其他人在做什么，你会收到每日报告。但负责入职培训以及团队文化和构建方式的人，也是最近才加入团队的人。我发现，谈到新毕业生，我有一个非常出色的新毕业生六个月前加入了团队，他表现得非常出色。这有点出乎意料，但我明白这个人拥有无限的能量，比我多得多。而且他非常非常快。我认为我的大脑可能已经在衰退了，而像**Ahmed**这样的人的大脑正处于巅峰状态。他是一个非常出色的人，在团队中取得了巨大的成功，这真的令人欣喜。

<details>
<summary>Original English</summary>

**Tibo**: So we I run the team in a very it's like a very flat uh organization like I I have 33 direct reports uh on the team and they just you know run around and like do cool things and uh it's you know I don't want to be the bottleneck. I think this is like one of the things where as leads I think it's very um it's it's very tempting to not change organizational structure fast enough for like you know how quickly people can actually build and like a single person being the bottleneck on every single decision is just like obviously not going to work anymore but the first thing that people um you know get introduced to obviously is like Codex itself right so like Codex is responsible for the onboarding um you know you just like ask codeex questions you navigate the codebase like understand like what other people are doing you receive like you know daily reports but then the people who are responsible for the onboarding and like you know the culture and how we built are like also the people that just most recently onboarded onto the team. Um and I I find that actually like you know just talking about the new grats is like you know I have this like phenomenal new grat joined the team like you know 6 months ago and he's absolutely crushing it. Um and that was like a little bit of a surprise but like I understood you know this person has like sort of like unbound unbounded energy like much more than I do. Um and you know it's just like you know super super quick. Uh I think you know my my brain is probably already in decline. Um you know this this person like Ahmed's brain is just like absolute peak peak. Um and you know just phenomenal person and he's been like so successful on the team and that's been like really delightful to see.

</details>

### 基础知识的重要性

**主持人**: 现在，我们扮演一下“魔鬼代言人”的角色。我们这些经验丰富的人，看到新毕业生逐渐成长为非常成功的专业人士，我们发现至少到目前为止，**基础知识**非常重要。那么，你认为如果新毕业生在他们的基础阶段就使用AI编码，并且可能跳过了我们过去10、20年所做的工作，会发生什么？他们是在建立正确的基础吗？或者我们在这里问的问题正确吗？

<details>
<summary>Original English</summary>

**主持人**: Now playing a bit of devil's advocate [clears throat] a lot of us more experienced folks who have seen like you know like new grads grow into like really successful professionals we have seen that at least up to now foundations were so important and so what do you think will happen if we have news whose foundations are are using AI coding and they probably skipped the stuff that we did for 10 20 more more years. Are they building the right foundations or or are are we asking the right question here? Even

</details>

**VJ**: **基础知识**仍然非常重要，对吧？所以我们非常注重设计整体代码库，注重整体架构。我们确实会进行代码审查，正如你所说，我们不会完全依赖**Codex**编写所有东西，然后闭着眼睛说“这会没事的”。我们也有最优秀的工程师参与这项工作。但我发现新毕业生能够吸收这些，然后，如果你为你的代码库设置了正确的结构，并且设置了正确的**护栏**，那么他们就会非常有生产力。所以我认为这仅仅取决于你所建立的环境，以及你是否提前思考了代码库将如何演变。

<details>
<summary>Original English</summary>

**VJ**: foundations remain super important, right? So we we take great care in like designing the overall codebase, you know, just like taking care like overall architecture. You know, we do code review as you said like you know we don't fully rely on like you know codeex like writing everything and just like closing our eyes and like being like this is going to be fine. um you know we have like the very best engineers like working on this as well but I find like new grads are able to sort of like absorb that and then you know it's like if you have like the right structure for your codebase and you know you set like the right guard rails then you know they're like incredibly productive and so I think it's just about the environment that you're setting up um and like you know thinking ahead of time of like you know like how is this like codebase going to evolve

</details>

### 软件工程师的日常

**主持人**: 那么，软件工程师的角色，与六八个月前相比，是如何变化的？软件工程师现在做什么？如果你要向一个新入职的工程师解释他们每天会做什么，他们会问：“嘿，**VJ**，我每天会做什么？”他们会做什么？

<details>
<summary>Original English</summary>

**主持人**: and how is the role of of starting with like software engineers uh changing compared to even like six or eight months ago. go. What does a software engineer do? Like if if you had to explain to a new journey what they're going to ask like, "Hey, VJ, what am I going to do dayto-day?" What are they going to do?

</details>

**VJ**: 是的，我认为**基础知识**这个概念永远不会过时。所以无论如何，它都将永远重要。我想我们都在这里，因为我们拥有强大的基础，这把我们带到了这里。然后，就软件工程师的角色而言，它已经改变了很多。我不知道你是否，我可能在说我25年前的事了，我在这个行业看到了很多**范式转变**。我曾在**微软**从事开发工具工作，为**Visual Studio**编写编辑器和语言服务。所以当我第一次看到**IntelliSense**时，那是一个非常酷的时刻，你可以输入，然后点击点，选项就显示出来了。

<details>
<summary>Original English</summary>

**VJ**: Yeah, I think um so the idea of foundations, foundations will never go out of fashion. So that is going to be always important no matter what. Um I think we're all here because we have strong foundations um that's brought us here. Um and then in terms of like you know the role of a software engineer, it's changed quite a bit. I don't know if you I may be dating myself 25 years um uh in the industry I've seen so many paradigm shifts and uh I actually worked on uh developer tools in Microsoft uh wrote the editor for visual studio and language services. So when first time I saw IntelliSense that was kind of like a really cool moment where you could kind of like type hit the dot and then the options showed up.

</details>

**主持人**: 是的。但你还记得吗？我大约在那个时候进入这个行业，我周围的开发者都在说：“如果你使用**IntelliSense**，你就不是一个真正的开发者。”

<details>
<summary>Original English</summary>

**主持人**: Yeah. But do you remember I I was joining the industry around that time and the devs around me were saying like you're not a developer if you use intellisense.

</details>

**VJ**: 是的。我见过那些。我的意思是，这可能是在我那个时代之前，人们可能认为“如果你不写汇编语言，你就不是一个好的软件工程师”，然后是**C++**，然后抽象层不断提高。然后人们开始抱怨**JavaScript**。还记得那些日子吗？我认为这些事情实际上并不重要。关键是，只要你拥有扎实的基础，只要你拥有**产品直觉**，知道你在构建什么，并且能够深入到技术栈的各个层面来解决问题，这些才是更重要的。我不认为这会过时。我觉得情况会一直如此。

<details>
<summary>Original English</summary>

**VJ**: Yes. [laughter] And I mean I' I've seen those I mean like this is probably be before my time when people probably saw like okay if you're not writing assembly um you're not a good um software engineer and then C++ and then um you know the abstractions kept going up and up and then people used to complain about JavaScript. Remember those days? Um I don't think those things actually matter. The point is that as long as you have the strong foundations, as long as you have product intuition, know what you're building and be able to like go down up and down the stack um to be able to like solve problems, those are going to be the more important ones. And I don't think that'll ever go out of fashion. I I feel like that is always going to be the case.

</details>

### 产品经理和设计师的角色演变

**主持人**: 我们这里主要是工程师和工程领导者，但让我们也思考一下产品经理和设计师。你认为他们的角色将如何变化，尤其是在工程师和他们都能更快地构建功能的情况下？这会如何改变他们的角色，或者我们是否正在变得更接近，或者他们仍然拥有独特的角色？

<details>
<summary>Original English</summary>

**主持人**: We're here between mostly engineers, engineering leaders, but let's just spare a thought on on product managers and designers. How do you see their roles changing especially now that both engineers and and them can build features a lot faster? How does it that change their roles or are are we getting closer or do they still have a distinct role from what you see?

</details>

**VJ**: 我回到那句话：只要我们为人类构建产品，我们就需要人类设计师，我们需要人类产品经理。我认为这是一种，我不知道，产品感或设计感是无法替代的。这些东西会演变，会变得更有效率，会有更多的抽象，但我们会继续发展。他们正在变得越来越有生产力，如果说有什么变化的话。所以产品经理正在编写代码，设计师正在编写代码，他们正在将他们的设计投入生产，投入原型，并在交给工程师之前进行验证。所以我认为这些已经变得更有效率了。产品经理也在使用**Codex**来制作**PowerPoint**幻灯片，我们还有**Excel**插件，所以它无处不在，不仅仅是工程师，周围的每个人都在变得更有效率。

<details>
<summary>Original English</summary>

**VJ**: Um I go back to the as long as we're building products for humans to use, we will need human designers, we will need human product managers. I think this is a you know I don't know um there is a substitution for a product sense um or design sense those things will evolve will get even more productive even more um abstractions but um we will continue to evolve that the they're they're getting more and more productive if anything so product managers are writing code designers are writing code they're taking their pro design um into production um into prototypes and validating it before they come to engineers. So I think those are already getting a lot more productive. Um you know this may be uh the product managers are also using codecs for building PowerPoint slides and we have Excel plugins and so it's kind of like all around it's not just engineers um everyone around is getting more productive.

</details>

### 内部知识共享与AI杠杆

**主持人**: 你们在**OpenAI**内部做的一件很酷的事情，我听说过，就是这种内部知识共享，这种“展示与讲述”活动，团队会展示他们所做的工作。你能告诉我们你们是如何想到这个主意的吗？你们是如何实际操作的？你能告诉我们一些你看到的团队展示的酷炫东西，以及其他团队可能采纳的东西吗？

<details>
<summary>Original English</summary>

**主持人**: One cool thing that you're doing inside OpenAI which which I've heard is this internal knowledge sharing this show and tell where where teams show what they do. Can you tell us how you came up with it? How you're actually doing the mechanics? And can you tell us like some cool things that you've seen teams show and and like maybe other teams adopt?

</details>

**Tibo**: 是的，这很有趣，因为我们正在发现技术并使其发展，同时我们也与技术共同演进。所以，就像你们所有人都在发现“嘿，AI能为我做什么，这对组织或我的项目意味着什么”一样，我们也在几乎同时发现它。一旦我们觉得某个东西开始奏效，我们就会把它推向世界。所以我们有一小段非常短的时间，能够比你们所有人拥有更多的“水晶球”。而且，好的想法在组织中快速传播非常重要。所以我们使用**Slack**，**Codex Slack**频道和“热门提示”是两个非常活跃的频道。然后我们组织定期的**黑客马拉松**，比如“展示与讲述”活动。我们只是尝试尽快传播与AI合作的新颖方式，这是一个高度创新的时代。所以我认为没有一种“唯一正确”的使用方法。它仍然处于发现阶段。我们**Codex**团队有一位非常出色的产品经理，**Alexander Emberos**。他是整个**Codex**团队唯一的**产品经理**，他借助**Codex**极大地提升了自己的效率。就像前几天，他组织了一次**Bug Bash**，一个小时的活动，人们审查我们即将发布的功能。然后他派**Codex**收集所有人的反馈，这些反馈最终汇总到一份**Notion**文档中。然后他派遣**Codex**将**Bug报告**和**功能改进**作为工单提交到**Linear**，并分配给每个人，然后跟进每个人的进展。所以他正在通过利用AI，成为一个10倍甚至50倍的**项目经理**。我认为这很重要，再次回到瓶颈问题，你需要不断地回顾，你的产品经理不能成为瓶颈，所以你需要以一种有原则的方式来看待它。

<details>
<summary>Original English</summary>

**Tibo**: Yeah, it's um it's interesting because we're sort of like discovering the technology and evolving it as and we're co-evolving with that as well. So like you know we're like just as all of you are discovering like hey this is what you know AI can do for me and this is like what it means for the organization or this is what it means for my project like we're also discovering it you know like pretty much at the same time like as soon as you know like when we have something that so like feels like it's starting to work is like you know we ship it to the world right so it's like that we have like a very small um small amount of time where you know we we actually are able to like you know have like more of the crystal ball than than all of you. Um, and it's super important that like good ideas diffuse very fast through the organization. So like you know we we use Slack and like the Codex Slack channels and like hot tips are like you know two channels that are like um super super active and then you know we organize like regular hackathons like show and tell um we just like try and diffuse like you know novel ways of like working with AI as fast as possible and like it's a highly creative time. So I think there's no like one true way to use this stuff. It's like you know very much still like in discovery and then our we have like this phenomenal product uh manager on codeex um Alexander Emberos and he's just like the single pro product manager like for the entire codeex team and he hyper leverages himself like you know with the help of codeex like I like the other day he organized this bug bash it was like an hour like people were going through like you know features that we were about to ship and then he sent codeex to collect like feedback from everyone this ended up in a notion doc and then he dispatched Codex to like then file feature uh like bug reports and like you know feature improvements like tickets into linear and then assign it to everyone and then follow up with everyone on like how it was going and so like he's like becoming like a 10x like you know 50x like program manager just you know by leveraging AI as well and I think it's important to so like again going to the bottlenecks is like you know you need to continue going back like you know your product manager cannot become the bottleneck so it's like you know you need to look at it in a principled way

</details>

**VJ**: 我要补充一点，我参加过这些**演示日**，我们看到了很多项目被演示。我记得参加这些**黑客马拉松**并观看演示。我注意到的一件事是，这些演示的深度一直在持续提升。所以它不仅仅是表面上的“这是可能的”。其中一些演示实际上是“这是可能的，而且我已经处理了所有这些**边缘情况**，它实际上是一个非常可用的产品。”所以，人们构建的所有这些产品，即使只是为了展示一些功能，其深度也一天天在加深。

<details>
<summary>Original English</summary>

**VJ**: one thing I'll add is like I I've been to um these demo days and we've seen a whole bunch of these projects being demoed. I remember um going to these hackathons and looking at like the demos. Um one thing I'm noticing is the depth of these demos have been consistently going up. So it's not just like a surface level here here's what is possible. Um some of these demos are actually like here's what's possible but also I've taken care of all of these corner cases and actually like a very usable product. So the depth um day by day of all of these products that people are building uh even to just show off uh some of the capabilities is definitely going down um going up and getting deeper.

</details>

### 成本考量与AI代理

**主持人**: 我们需要补充一个声明：在**OpenAI**内部，每个人都可以无限制地访问token。没有成本，人们都在笑，因为这确实很重要，对吧？在外部世界，成本仍然是一个问题。你购买了最高订阅，当它用完时，你就开始使用积分。有些人，尤其是创始人，对此很满意，但有时人们会考虑到许多地方都受到成本的限制，仅仅出于实际目的，你会对那些受到**OpenAI**团队工作方式启发，但又受到这些成本限制的人提出什么建议和策略？

<details>
<summary>Original English</summary>

**主持人**: One kind of disclaimer that we need to add is inside OpenAI everyone has access to unlimited tokens. there's no cost and people are laughing because it's kind of a big deal, right? It's a in the outside world if if if you may cost is is still a problem. You get the max subscription and when it runs out you're now on credits and you know some some some people are cool with it especially founders but sometimes people ask questions with this in mind that a lot of places are constrained with with cost just just for practical purposes. What suggestions and tactics would you have for folks who who w are inspired by how the team at OpenAI is is worked but they have these constraints/h handcuffs to work with.

</details>

**VJ**: 成本是我们不断思考的问题。首先，显然我们希望我们的模型越来越强大，并将其提供给我们的用户。然后，我也相信在某个时候，思维会转变，因为现在你应该想象，你有一个24/7为你工作的队友，你可以向你的队友发送指令，例如你可以将**Linear**任务或**Jira**任务分配给你的队友，然后期望，你应该完全期望你的队友能够处理这些事情。然后问题就变成了，你愿意为这个队友支付多少钱，而不是你将使用多少token。所以，如果你开始以每个工程师的生产力来衡量，每个工程师都有四五个这样的队友，那么它就变得更有意义了。现在，你应该要求我们负责，让这些**代理**足够强大，能够将它们视为队友。这就是我们正在努力的方向。

<details>
<summary>Original English</summary>

**VJ**: Cost is something that we constantly think about. Uh one is obviously we want to make our models more and more capable and offer that um to um our users. Um and then the I I also believe that at some point the thinking will shift because now you should imagine like now you have a teammate that is working for you 24/7 and you can send instructions to your teammate like you know you can assign linear tasks or Jira tasks to your teammate and then expect um and you should fully expect uh your teammate to be capable of taking care of those things. And then the question then becomes like you know how much will you pay this teammate not necessarily like how many tokens are you going to use. Um and so if you start to measure in the terms of like productivity of every engineer having a team of four or five of these teammates then it starts to make a lot more sense. Now you should like hold us responsible to make these agents a lot more capable enough to treat them as teammates. And that's kind of like you know what we're working on.

</details>

**Tibo**: 是的。我认为考虑它如何分摊公司成本也很有用。现在你可以做一些事情，实际上非常便宜。例如，进行市场研究，审查你所有的**功能积压**，并找出哪些是可以轻松实现的。以前，你可能需要分配大约15名工程师来查看这些积压，而现在，这几乎是免费的。显然，并非所有人都能为员工提供无限推理的福利，但我确实认为过早限制它也是一种风险。我们正处于非常非常早期的阶段，关于人们可以如何充分利用它，所以我肯定会说：“嘿，公司里有最优秀的人，给他们提供非常舒适、大量的推理资源。”

<details>
<summary>Original English</summary>

**Tibo**: Yeah. I I think it also you know is is useful to think about you know how it displaces costs across uh you know the company and there are things that you know you can do now that are actually like you know it's very cheap for you to do so like you know doing like marketing research like going over like the entirety of like your feature backlog and like figuring out like which ones are like the ones that you can trivially implement. Um you know before that you would have needed to allocate like you know maybe like 15 engineers to go and like look through that uh backlog and now it's like you know like almost free. Um obviously like not everyone can you know provide the perk of like having unlimited like inference um you know to their employees but I do think limiting it prematurely is you know as a risk uh as well and we're we're very very early stages at like you know how well leveraged people can get and so I would definitely like sort of be saying like hey there's like the best people at your company like you know give them like you know very very comfortable like large amounts of like inference.

</details>

### 变革的速度与未来展望

**主持人**: 回顾变革的速度，我们知道它很快，而且正在变得非常非常快。感觉就是这样。但回溯到你加入**OpenAI**之前，**VJ**，你在这个行业已经很久了，超过25年。回顾过去，有没有哪个时期变革也感觉很快？我们过去是否看到过类似的情况？

<details>
<summary>Original English</summary>

**主持人**: Reflecting on the pace of change, we know it's fast and and it's getting really really fast. It feels like that, but taking a step back from your times before open AI and and VJ, you you've been in in this business for a long time, more than 25 years. Looking back, what was a time where change also felt fast? And did we see anything somewhat comparable in the past?

</details>

**VJ**: 我认为我从未见过这样的事情。我可以回顾过去25年，我见过**互联网泡沫**破裂，那是在我大学时期。然后我记得**Y2K**，我记得**移动革命**，我实际上是**社交网络革命**的一部分，而这次感觉非常不同。这次变革正在大规模发生，而且发生得非常快。它发生的速度，其中一些图表简直说不通。所以我确实认为这是一件非常非常特别和独特的事情，生活在这个时期也很酷。

<details>
<summary>Original English</summary>

**VJ**: I don't think I've ever seen anything like this. Um I can look back in uh in the 25 years I've seen the dotcom bubble burst and that was during my college time and then I remember Y2K I remember the mobile uh revolution and I was actually part of the social network revolution and this one feels very different. This one is happening um at a massive scale and ma and also happening very fast. the speed at which this is happening um some of these charts don't make sense um and so I do think this is something very very special and unique and it's also cool to be living in this uh period

</details>

**主持人**: 现在作为最后一个问题，变革很快，但你们两位在**OpenAI**已经有一段时间了，所以我想请你们诚实地预测一下，两年后软件工程会是什么样子，工程管理又会是什么样子，就凭你们现在所知道的？

<details>
<summary>Original English</summary>

**主持人**: now as a closing question it changes fast but the two of you have been in open AI for for now quite some time so I'm going to ask you to make an honest prediction in two years time what do you think software engineering will look like and what will engineering management look like just knowing what you know

</details>

**Tibo**: 显然，两年时间太长了。我认为从现在起六个月后，我非常自信地说，我们可能会在速度上再提升一个数量级，那将再次改变一切。另一件我们将实现的事情是，大型的**多代理网络**将能够协同合作，实现非常非常大的目标。例如，应该在可行范围内说，就像**Cursor**所展示的那样，在同一个团队中，“嘿，从头开始重建一个浏览器”，然后24小时后，你就有了这个由数百万行代码构建的东西。这几乎是无法理解其内部实际发生的情况的。所以，我认为我们将开始看到的是，我们将围绕正在构建的东西设置**护栏**，这样你就不必再实际查看代码了。你可以通过某种方式证明它是正确的，或者它以一种安全的方式受到约束，你只需查看输入和输出，然后代码将被抽象化，一切都将围绕实际的挑战和事物的系统属性展开。

<details>
<summary>Original English</summary>

**Tibo**: obviously two years is like way too long of a time frame. Uh [laughter] I think six six months from now like the things that I'm sure you know it's like I feel very confident saying is like you know we will get maybe another order of magnitude on like speed um and that will you know change things again and the other thing that we will get working is like you know large networks of like multi- aent uh that can collaborate together on like you know very very big goals you know for example it should be you know within the realm of like feasible to say like you know alongside in the same team of like you know what cursor demonstrated like you know hey rebuild a browser from scratch like you know just like go and then 24 hours later like you know you have this like this thing that was built you know like two millions of lines of code it's like you know pretty much like untractable uh to like understand you know like what actually is happening under the hood and so there I think what we'll start seeing is we will set guard rails around you know what is getting built so that you don't actually have to look at the code anymore more and you can sort of either prove that it's correct in some way or the it is constrained in a way where you know it is secure and you can just look at the inputs and outputs and then code will become like abstracted away and it will all become about you know what are the actual challenges and things and you know the the properties of the system

</details>

**VJ**: 软件的**抽象化**程度一直在提高，这使我们更容易用很少的代码构建大量产品代码。所以，多年来，这种抽象化程度一直在提高，我觉得我们正处于一个抽象化程度和变化速度都迅速提高的时期。在某个时候，我担心，我在这里说出来，因为任何足够复杂或精密的系统都变得更难调试。所以你依赖**症状**来调试这些东西。所以我想在几年内，我们将达到软件如此复杂，软件拥有如此多层次的程度，我们将非常擅长通过查看症状来识别问题，我们的工具也将在这方面变得非常出色。所以，我认为这将是软件开发者需要掌握的独特功能或能力。

<details>
<summary>Original English</summary>

**VJ**: software has been increasing in abstraction makes it easier for us to go build massive amounts of uh product um code um with very little code. So it's kind of like um over the years that abstraction has increased and I feel like we're in a time frame where that abstraction is increasing the rate of change has also increased uh quite rapidly. um at some point I worry um I I'll say this right there because um any sufficiently complex or sophisticated system um becomes harder to debug and so you rely on symptoms to debug these things and so I I I I get I think in a few years we'll get to the point where software um is is so complex software has gotten like so many layers in it and we get really good at identifying issues by looking at symptoms and our tools are going to get like really good at that too. Um, and so I I think that will be a unique um uh function or I think that will be a unique uh ability for software developers to pick up.

</details>

**Tibo**: 我想补充一下未来会是什么样子。我认为你将能够直接呼叫你的助手并检查工作，你将拥有一个专门的个人助手，能够代表所有在幕后为你高效工作的AI代理的工作，而不是需要监控和检查一百个或两百个单独的小代理。我认为我们很快就会看到这种情况，包括今年。

<details>
<summary>Original English</summary>

**Tibo**: I want to add something to like what the future will look like. Um I think very much you will just be able to call your assistant and check on the work as well and you know you will have like one dedicated sort of like personal assistant that is able to represent the work of like you know all the AI agents that are sort of like doing things for you productively behind the scenes instead of having like to monitor and like you know check in with like a hundred or like 200 individual like little agents. Uh I think that's something that we'll see actually like fairly quickly including this year.

</details>

**主持人**: 是的。非常感谢**VJ**和**Tibo**，让我们得以一窥**OpenAI**内部正在发生的事情以及你们团队的工作方式，这感觉比行业曲线领先几个月、几周甚至更长时间，但它正在发生。也感谢你们分享了在这个激动人心的时代我们可能会或可能不会看到的东西。非常感谢。

<details>
<summary>Original English</summary>

**主持人**: Yeah. Well, thanks so much to VJ and Tibo for giving us a peak of what is actually happening inside and how your teams are working, which it feels is is either months or weeks or or sometimes longer ahead of the curve, but it is happening. And also just like what we might or might not see in this like really exciting time. Thank you so much.

</details>

**VJ**: 谢谢。

<details>
<summary>Original English</summary>

**VJ**: Thank you.

</details>

**Tibo**: 谢谢。

<details>
<summary>Original English</summary>

**Tibo**: Thank you.

</details>