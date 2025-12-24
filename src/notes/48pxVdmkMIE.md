---
area: tech-work
category: ai-ml
companies_orgs:
- Physical Intelligence
- UC Berkeley
- Google
- Meta
- OpenAI
- Nvidia
- Waymo
- Tesla
date: '2025-09-12'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Sergey Levine
products_models:
- GPT-4
- Claude
- Gemma
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=48pxVdmkMIE
speaker: Dwarkesh Patel
status: evergreen
summary: Physical Intelligence 联合创始人兼加州大学伯克利分校教授**谢尔盖·莱文**探讨了机器人基础模型的现状与未来愿景。他阐述了通用机器人实现路径、数据飞轮效应、感知与常识的重要性，并比较了机器人与大语言模型的发展异同。对话还深入探讨了模拟训练的局限性、硬件成本下降趋势以及自动化对社会经济的深远影响。
tags:
- automation
- data
- model
- perception
- robotic
- simulation
title: 谢尔盖·莱文：机器人基础模型与通用自动化未来
---

### 机器人基础模型愿景

今天，我与**谢尔盖·莱文**（Sergey Levine）进行了交流，他是**Physical Intelligence**（一家机器人基础模型公司）的联合创始人，同时也是**加州大学伯克利分校**（UC Berkeley）的教授，更是机器人学、强化学习（RL: Reinforcement Learning: 通过与环境互动学习最优行为的机器学习范式）和人工智能领域的全球顶尖研究员之一。**Physical Intelligence**致力于构建**机器人基础模型**（Robotic Foundation Models: 能够原则上控制任何机器人执行任何任务的通用模型）。我们之所以关注这一点，是因为我们将其视为**人工智能**（AI: Artificial Intelligence: 模拟人类智能的计算机系统）问题的一个非常基础的方面。机器人本质上涵盖了所有**人工智能**技术。如果我们能拥有一个真正通用的机器人，那么它就有望完成人类所能做的大部分工作。目前，我们已经搭建了许多基础功能，这些基础功能相当出色，运行良好。我们的机器人可以叠衣服，可以进入新家清理厨房。但在我看来，**Physical Intelligence**目前所做的工作仅仅是非常非常早期的开端，它只是奠定了基本构建模块，在此基础上，我们才能解决所有真正棘手的问题。

<details>
<summary>Original English</summary>

Today I'm chatting with Sergey Levine, who is a co-founder of Physical Intelligence, which is a robotics foundation model company, and also a professor at UC Berkeley and just generally one of the world's leading researchers in robotics, RL, and AI. Sergey, thank you for coming on the podcast. Thank you, and thank you for the kind introduction. Let's talk about robotics. Before I pepper you with questions, I'm wondering if you can give the audience a summary of where Physical Intelligence is at right now. You guys started a year ago. What does the progress look like? What are you guys working on? Physical Intelligence aims to build robotic foundation models. That basically means general-purpose models that could in principle control any robot to perform any task. We care about this because we see this as a very fundamental aspect of the AI problem. The robot is essentially encompassing all AI technology. If you can get a robot that's truly general, then you can do, hopefully, a large chunk of what people can do. Where we're at right now is that we've kind of gotten to the point where we've built out a lot of the basics. Those basics actually are pretty cool. They work pretty well. We can get a robot that will fold laundry and that will go into a new home and try to clean up the kitchen. But in my mind, what we're doing at Physical Intelligence right now is really the very, very early beginning. It's just putting in place the basic building blocks, on top of which we can then tackle all these really tough problems.

</details>

### 机器人发展挑战与时间线

关于机器人未来一年的愿景，我曾有机会观看一些机器人演示，它们能够完成相当灵巧的任务，比如使用夹具折叠盒子，这即使对我来说也很困难。如果我们要逐年推进，直到实现全面的机器人爆发，那么每年需要解锁的关键是什么？我们需要做好几件事，其中之一显然是**灵巧性**（Dexterity: 机器人执行精细复杂操作的能力）。一开始，我们希望确保所开发的方法能够处理人类可以完成的复杂任务，例如折叠盒子、叠不同衣物、清理桌子、制作咖啡等。这些都运行良好，我们展示的成果也相当酷。但最终目标并非仅仅是叠好一件T恤，而是确认我们最初的假设——即基础是坚实的。在此之后，还有许多重大的挑战。有时，当研究成果被抽象成三分钟的视频时，人们可能会觉得“哦，这很酷，他们正在做这个”，但实际上并非如此。这只是未来发展的一个非常简单和基础的版本。我们真正希望机器人做到的，不是让它叠T恤，而是告诉它：“嘿，机器人，你现在要为我处理各种家务。我喜欢晚上6点吃晚餐，早上7点起床上班。我喜欢周六洗衣服，所以确保它准备好。顺便说一下，每周一和我确认一下我希望你购物时买什么。”这就是指令。然后机器人应该连续六个月甚至一年执行这些任务。最终，如果这些技术成功，它的能力会大得多。它应该能够持续学习，理解物理世界，具备**常识**（Common Sense: 对世界的基本理解和推理能力），并在需要时获取更多信息。例如，如果我让它今晚做某种沙拉，它应该能弄清楚需要什么，查询食谱，然后去购买食材。这其中涉及很多方面，需要常识，需要理解某些**边缘案例**（Edge Cases: 在正常操作范围之外，可能导致系统异常或失败的特殊情况）需要智能处理，需要更深入地思考。它还需要持续改进的能力，理解安全性，在正确的时间保持可靠，并在犯错时能够纠正错误。

<details>
<summary>Original English</summary>

What's a year-by-year vision? One year in, I got a chance to watch some of the robots, they can do pretty dexterous tasks like folding a box using grippers. It's pretty hard to fold the box even with my hands. If you had to go year by year until we get to the full robotics explosion, what is happening every single year? What is the thing that needs to be unlocked, et cetera? There are a few things that we need to get right. Dexterity obviously is one of them. In the beginning we really want to make sure that we understand whether the methods that we're developing have the ability to tackle the kind of intricate tasks that people can do. As you mentioned, folding a box, folding different articles of laundry, cleaning up a table, making a coffee, that sort of thing. That's good, that works. The results we've been able to show are pretty cool, but the end goal of this is not to fold a nice T-shirt. The end goal is to just confirm our initial hypothesis that the basics are solid. From there, there are a number of really major challenges. Sometimes when results get abstracted to the level of a three-minute video, someone can look at this video and it's like, "Oh, that's cool. That's what they're doing." But it's not. It's a very simple and basic version of what I think is to come. What you really want from a robot is not to tell it like, "Hey, please fold my T-shirt." What you want from a robot is to tell it like, "Hey, robot, you're now doing all sorts of home tasks for me. I like to have dinner made at 6:00 p.m. I wake up and go to work at 7:00 a.m. I like to do my laundry on Saturday, so make sure that it's ready. This and this and this. By the way, check in with me every Monday to see what I want you to pick up when you do the shopping." That's the prompt. Then the robot should go and do this for six months, a year. That's the duration of the task. Ultimately if this stuff is successful, it should be a lot bigger. It should have that ability to learn continuously. It should have the understanding of the physical world, the common sense, the ability to go in and pull in more information if it needs it. Let’s say I ask it, "Hey, tonight, can you make me this type of salad?" It should figure out what that entails, look it up, go and buy the ingredients. There's a lot that goes into this. It requires common sense. It requires understanding that there are certain edge cases that you need to handle intelligently, cases where you need to think harder. It requires the ability to improve continuously. It requires understanding safety, being reliable at the right time, being able to fix your mistakes when you do make those mistakes. There's a lot more that goes into this. But the principles there are: you need to leverage prior knowledge and you need to have the right representations.

</details>

### 机器人“飞轮效应”与部署时间

关于这个宏伟愿景何时实现，如果非要给个估计，我认为这不会是那种在实验室里开发完成，然后到2030年左右，你就能收到一个“盒装机器人”的情况。它会像我们看到的**AI助手**（AI Assistants: 能够理解和响应人类指令，执行各种任务的人工智能系统）一样。一旦机器人达到某种基本能力水平，能够提供有用的服务，它就会走向世界。最酷的是，一旦它走向世界，就能收集经验并利用这些经验变得更好。对我来说，考虑时间线时，我倾向于思考的不是“完成”的日期，而是“飞轮”开始转动的日期。这个**飞轮效应**（Flywheel Effect: 指一个系统或业务通过自身产生的积极反馈循环，不断加速增长和改进）可能很快就会开始。这需要做出一些决定。权衡在于，你把事情的范围界定得越窄，就能越早地将其推向现实世界。我们已经在探索这一点，试图找出机器人能做哪些真正有用的事情，从而启动这个飞轮。至于你真正关心并希望看到的东西，我不知道具体是哪一年，但个位数年内是非常现实的。我真的希望在**一两年内**就能有实际产品问世，但这很难说。所谓“实际产品问世”意味着什么？它意味着有一个机器人能做你真正关心并希望完成的事情，并且它能足够胜任地为真正需要它的人完成这些任务。

<details>
<summary>Original English</summary>

This grand vision, what year? If you had to give an estimate. 25 percentile, 50, 75? I think it's something where it's not going to be a case where we develop everything in the laboratory and then it's done and then come 2030-something, you get a robot in a box. Again, it'll be the same as what we've seen with AI assistants. Once we reach some basic level of competence where the robot is delivering something useful, it'll go out there in the world. The cool thing is that once it's out there in the world, they can collect experience and leverage that experience to get better. To me, what I tend to think about in terms of timelines is not the date when it will be done, but the date when the flywheel starts basically. When does the flywheel start? That could be very soon. There's some decisions to be made. The trade-off there is that the more narrowly you scope the thing, the earlier you can get it out into the real world. But this is something we're already exploring. We're already trying to figure out what are the real things this thing can do that could allow us to start spinning the flywheel. But in terms of stuff that you would actually care about, that you would want to see… I don't know but single-digit years is very realistic. I'm really hoping it'll be more like one or two before something is actually out there, but it's hard to say. Something being out there means what? What is out there? It means that there is a robot that does a thing that you actually care about, that you want done. It does so competently enough to actually do it for real, for real people that want it done.

</details>

### 大语言模型与机器人飞轮效应的异同

我们已经广泛部署了**大语言模型**（LLM: Large Language Model: 基于海量文本数据训练的 AI 系统），但这并没有导致某种明显的飞轮效应，至少对于模型公司而言，**Claude**或**GPT**并没有因此学会经济中的所有工作。那么，为什么这种飞轮效应不适用于**大语言模型**呢？我认为它实际上非常接近成功，而且我百分之百确定许多组织正在为此努力。事实上，可以说已经存在一个飞轮，它不是一个自动化的飞轮，而是一个**人机协作飞轮**（Human-in-the-loop Flywheel: 人类参与到AI系统的反馈循环中，提供监督和修正，从而使系统持续改进）。每个部署**大语言模型**的人当然都会观察它的行为，并利用这些观察来修改其行为。这很复杂，因为它又回到了**表征**（Representations: 数据在模型内部的编码方式）的问题，以及如何正确地推导出监督信号，并将这些监督信号根植于系统的行为中，使其按照你的意愿改进。我不认为这是一个根本不可能解决的问题，只是细节会变得相当棘手，算法和稳定性方面的挑战也变得非常复杂。整个社区集体掌握这些细节需要一定时间。你认为这对机器人来说会更容易吗？或者你认为随着这些技术的发展，通过标记从现实世界收集的数据并将其用作奖励，整个浪潮会兴起，机器人也会随之崛起？或者说，机器人会因此获得更多益处吗？

<details>
<summary>Original English</summary>

We already have LLMs which are broadly deployed. That hasn't resulted in some sort of flywheel, at least not some obvious flywheel for the model companies where now Claude is learning how to do every single job in the economy or GPT's learning how to do every single job in the economy. So, why doesn’t that flywheel work for LLMs? Well, I think it's actually very close to working and I am 100% certain that many organizations are working on exactly this. In fact, arguably there is already a flywheel. It’s not an automated flywheel but a human-in-the-loop flywheel. Everybody who's deploying an LLM is of course going to look at what it's doing and it's going to use that to then modify its behavior. It's complex because it comes back to this question of representations and figuring out the right way to derive supervision signals and ground those supervision signals in the behavior of the system so that it improves on what you want. I don't think that's a profoundly impossible problem. It's just something where the details get pretty gnarly and challenges with algorithms and stability become pretty complex. It's something that's taken a while for the community collectively to get their hands on. Do you think it'll be easier for robotics? Or do you think that with these kinds of techniques to label data that you collect out in the world and use it as a reward, the whole wave will rise and robotics will rise as well? Or is there some reason robotics will benefit more from this?

</details>

### 机器人学习的优势与范围扩展

我不认为机器人学有什么根本性的不同。有一些细微的差异使其更容易管理。特别是当机器人与人合作完成任务时，无论是人监督还是指导它，都有非常自然的监督来源。人们有很大的动力去提供帮助，以确保任务成功。有很多动态情况，你可以犯错并从中恢复，然后反思发生了什么，并在未来避免同样的错误。当你在现实世界中做物理事情时，这种情况比**AI助手**回答问题时更常发生。如果你回答问题答错了，你不能只是回去修改几处。你告诉答案的人可能甚至不知道它是错的。然而，如果你在叠T恤时出了点差错，那是非常明显的。你可以反思，找出原因，下次做得更好。好的，一年后我们会有做一些有用事情的机器人。也许如果有一些相对简单的循环过程，它们可以为你完成，比如不断折叠成千上万个盒子。但随后会有一个飞轮效应……然后会有一个机器，它能像人类管家一样为我管理整个房子。从一年内部署的启动飞轮的机器人，到完全自主的管家机器人之间，差距在哪里？这实际上与我们看到的**大语言模型**在某些方面没有太大不同。这是一个范围问题。想想**编程助手**（Coding Assistants: 辅助程序员编写、调试和优化代码的AI工具）。最初最好的编程工具只能完成一点点代码补全。你给它们一个函数签名，它们会尽力写出整个函数，也许能写对一半。随着这些东西的进步，你愿意给它们更多的自主权。现在最好的编程助手——如果你做一些相对公式化的事情，也许它可以为你完成大部分的**拉取请求**（PR: Pull Request: 软件开发中，开发者将代码更改提交到主代码库以供审查和合并的请求）。机器人也会是这样。随着机器人越来越好，我们愿意赋予它们的范围也会越来越大。最初的范围可能只是你做的某件特定事情，比如冲咖啡。随着它们能力增强，具备常识和更广泛的任务范围，我们就会赋予它们更大的范围。现在，你让它们经营整个咖啡店。

<details>
<summary>Original English</summary>

I don't think there's a profound reason why robotics is that different. There are a few small differences that make things a little bit more manageable. Especially if you have a robot that's doing something in cooperation with people, whether it's a person that's supervising it or directing it, there are very natural sources of supervision. There's a big incentive for the person to provide the assistance that will make things succeed. There are a lot of dynamics where you can make mistakes and recover from those mistakes and then reflect back on what happened and avoid that mistake in the future. When you're doing physical things in the real world, that stuff just happens more often than it does if you're an AI assistant answering a question. If you answer a question and just answer it wrong, it's not like you can just go back and tweak a few things. The person you told the answer to might not even know that it's wrong. Whereas if you're folding the T-shirt and you messed up a little bit, it's pretty obvious. You can reflect on that, figure out what happened, and do it better next time. Okay, in one year we have robots which are doing some useful things. Maybe if you have some relatively simple loopy process, they can do it for you, like keep folding thousands of boxes or something. But then there's some flywheel… and there's some machine which will just run my house for me as well as a human housekeeper would. What is the gap between this thing which will be deployed in a year that starts the flywheel and this thing which is like a fully autonomous housekeeper? It's actually not that different from what we've seen with LLMs in some ways. It's a matter of scope. Think about coding assistants. Initially the best tools for coding, they could do a little bit of completion. You give them a function signature and they'll try their best to type out the whole function and they'll maybe get half of it right. As that stuff progresses, then you're willing to give these things a lot more agency. The very best coding assistance now—if you're doing something relatively formulaic, maybe it can put together most of a PR for you for something fairly accessible. It'll be the same thing. We'll see an increase in the scope that we're willing to give to the robots as they get better and better. Initially the scope might be a particular thing you do. You're making the coffee or something. As they get more capable, as their ability to have common sense and a broader repertoire of tasks increases, then we'll give them greater scope. Now you're running the whole coffee shop.

</details>

### 通用管家机器人何时到来？

我明白这是一个连续的谱系，不会有一个特定的时刻让我们觉得已经实现了目标，但如果你要给出一个中位数估计，那会是哪一年？我的感觉是，这可能是一个**个位数年**（Single-digit Years: 指1-9年）的事情，而不是两位数年。之所以难以确定，是因为像所有研究一样，它确实取决于解决一些悬而未决的问题。关于这些问题的性质，我的回答是，我不认为它们需要根本上、深刻地不同的想法，但它确实需要我们已经知道的各种事物的正确**综合**（Synthesis: 将不同元素或概念结合起来形成一个连贯整体的过程）。有时，坦率地说，综合的难度不亚于提出全新的东西。这是一个在智力上非常深刻和重大的问题。解决它将非常令人兴奋。但我认为我们大致了解这些“拼图块”，这是我们需要努力解决的问题。如果我们努力，并且运气好一点，一切都按计划进行，那么个位数年是合理的。我将进行二分查找，直到找到一个年份。它不到十年，所以你的中位数估计是五年以上吗？我知道有一个范围。我认为**五年**是一个很好的中位数。好的，五年。如果一个机器人能够完全自主地管理一个家庭，那么它也能够完全自主地完成经济中大部分的**蓝领工作**（Blue-collar Work: 主要指体力劳动或操作机器的工作）。你的估计是，在五年内，它应该能够完成经济中大部分的蓝领工作。

<details>
<summary>Original English</summary>

I get that there's a spectrum. I get that there won't be a specific moment that feels like we've achieved it but if you had to give a year for your median estimate of when that happens? My sense there too is that this is probably a single-digit thing rather than a double-digit thing. The reason it's hard to really pin down is because, as with all research, it does depend on figuring out a few question marks. My answer in terms of the nature of those question marks is that I don't think these are things that require profoundly, deeply different ideas but it does require the right synthesis of the kinds of things that we already know. Sometimes synthesis, to be clear, is just as difficult as coming up with profoundly new stuff. It's intellectually a very deep and profound problem. Figuring that out is going to be very exciting. But I think we kind of know roughly the puzzle pieces and it's something that we need to work on. If we work on it and we're a bit lucky and everything kind of goes as planned, single-digit is reasonable. I'm just going to do binary search until I get a year. It's less than 10 years, so more than five years, your median estimate? I know there's a range. I think five is a good median. Okay, five years. If you can fully autonomously run a house, then you can fully autonomously do most blue-collar work. Your estimate is that in five years it should be able to do most blue-collar work in the economy.

</details>

### 机器人经济影响与人机协作

这里有一个细微之处。如果我们考虑**编程助手**的类比，这会变得更明显。今天的编程助手并不是说有一个开关一开，所有软件工程师就被解雇了，每个人都用**大语言模型**来做所有事情。实际上，最大的生产力提升来自于专家，也就是软件工程师，他们的生产力现在被这些强大的工具所增强。抛开人们是否会被解雇的问题，另一个问题是，五年后经济影响会是怎样？我之所以好奇这一点，是因为**大语言模型**的收入与它们看似的能力之间的关系一直有些神秘。你拥有一个感觉像是**通用人工智能**（AGI: Artificial General Intelligence: 能够像人类一样理解、学习和应用智能来解决任何问题的AI系统）的东西。你可以进行一次真正通过**图灵测试**（Turing Test: 衡量机器是否能表现出与人类无异的智能行为的测试）的对话。它真的感觉可以完成所有这些知识工作。它显然在进行大量的编程等等。但这些**人工智能公司**的累计收入每年大约在200-300亿美元，这远低于所有知识工作（30-40万亿美元）。五年后，我们会处于与现在**大语言模型**类似的境地，还是机器人会部署到各地，并真正完成大量实际工作呢？这是一个非常微妙的问题。这可能最终归结为**范围**（Scope: 系统能力和应用场景的边界）的问题。**大语言模型**之所以没有完成所有软件工程工作，是因为它们在一定范围内表现良好，但存在局限性。这些局限性每年都在增加，这一点很明确。我认为没有理由认为机器人不会出现同样的情况。

<details>
<summary>Original English</summary>

There's a nuance here. It becomes more obvious if we consider the analogy to coding assistants. It's not like the nature of coding assistants today is that there's a switch that flips and instead of writing software, suddenly all software engineers get fired and everyone's using LLMs for everything. It actually makes a lot of sense that the biggest gain in productivity comes from experts, which is software engineers, whose productivity is now augmented by these really powerful tools. Separate from the question of whether people will get fired or not, a different question is, what will the economic impact be in five years? The reason I'm curious about this is because with LLMs, the relationship between the revenues for these models to their seeming capability has been sort of mysterious. You have something which feels like AGI. You can have a conversation where it really passes the Turing test. It really feels like it can do all this knowledge work. It's obviously doing a bunch of coding, et cetera. But the revenues from these AI companies are cumulatively on the order of $20-30 billion per year and that's much less than all knowledge work, which is $30-40 trillion. In five years are we in a similar situation to what LLMs are in now, or is it more like we have robots deployed everywhere and they're actually doing a whole bunch of real work, et cetera? It's a very subtle question. What it probably will come down to is this question of scope. The reason that LLMs aren't doing all software engineering is because they're good within a certain scope, but there's limits to that. Those limits are increasing, to be clear, every year. I think that there's no reason that we wouldn't see the same kind of thing with robots.

</details>

### 机器人与人类协作的潜力

机器人的应用范围必须从小处着手，因为有些事情这些系统可以做得非常好，而另一些事情则需要更多的人类监督。这个范围会逐渐扩大。这将转化为生产力的提高。其中一部分生产力将来自于机器人本身的价值，另一部分则来自于使用机器人的人在工作中变得更高效。但是，有太多因素可以提高生产力，比如戴手套可以提高生产力。你希望了解的是能将生产力提高一百倍的东西，而不是只有小幅提升的东西。机器人已经提高了工人的生产力。**大语言模型**目前在知识工作中所占的份额，我猜大约是经济中知识工作的千分之一，至少从收入来看是这样。你是说五年后，机器人也能在体力劳动中达到这个比例吗？这是一个非常难以回答的问题。我可能无法立刻告诉你机器人能完成所有劳动工作的百分之几，因为我现在没有足够的能力去理解所有体力劳动中涉及的巨大横截面。但我可以告诉你的是：在**人机协作**（Human-in-the-loop: 人类参与到自动化系统决策或反馈循环中）的设置中，逐步推出有效的系统要容易得多。这正是我们从编程系统中看到的。我认为在自动化领域也会看到同样的情况，即机器人加人类会比单独的人类或单独的机器人好得多。这完全说得通。这也使得所有技术更容易启动。因为现在是机器人加人类，机器人有更多的潜力在工作中学习，获得新技能。

<details>
<summary>Original English</summary>

The scope will have to start out small because there will be certain things that these systems can do very well and certain other things where more human oversight is really important. The scope will grow. What that will translate into is increased productivity. Some of that productivity will come from the robots themselves being valuable. Some of it will come from the people using the robots are now more productive in their work. But there's so many things which increase productivity. Like wearing gloves increases productivity or I don't know. You want to understand something which increases productivity a hundredfold versus something which has a small increase. Robots already increase productivity for workers. Where LLMs are right now in terms of the share of knowledge work they can do, is I guess like 1/1000th of the knowledge work that happens in the economy, at least in terms of revenue. Are you saying that fraction will be possible for robots, but for physical work, in five years? That's a very hard question to answer. I'm probably not prepared to tell you what percentage of all labor work can be done by robots, because I don't think right now, off the cuff, I have a sufficient understanding of what's involved in that big of a cross-section of all physical labor. What I can tell you is this. It's much easier to get effective systems rolled out gradually in a human-in-the-loop setup. Again, this is exactly what we've seen with coding systems. I think we'll see the same thing with automation, where basically robot plus human is much better than just human or just robot. That just makes total sense. It also makes it much easier to get all the technology bootstrapped. Because when it's robot plus human now, there's a lot more potential for the robot to actually learn on the job, acquire new skills.

</details>

### 机器人从语言指令中学习

人类可以标记正在发生的事情，也可以提供帮助和提示。让我讲一个故事。当我们进行**π0.5项目**（π0.5 Project: Sergey Levine团队发布的一项机器人研究项目）时，也就是去年四月发布的论文，我们最初在各种不同设置下通过**遥操作**（Teleoperation: 人类远程控制机器人执行任务）来控制机器人。在某个时候，我们意识到一旦模型足够好，我们不仅可以通过低级动作来监督它，还可以通过语言直接指令来取得重大进展。当然，你需要达到一定的能力水平才能做到这一点，但一旦达到，只需站在那里告诉机器人：“好的，现在拿起杯子，把杯子放进水槽，把盘子放进水槽”，仅仅通过语言，就已经为机器人提供了可以用来改进的信息。现在想象一下这对**人机协作**的动态意味着什么。现在，这些系统的学习不再仅仅是学习原始动作，还在学习语言。最终，它将通过观察人们的行为，以及在与他人共同完成工作时收到的自然反馈来学习。这也是这些大型模型带来的**先验知识**（Prior Knowledge: 在学习新任务之前已经拥有的知识或信息）非常有价值的地方，因为它能让你理解这种互动动态。这些**人机协作**部署有很多潜力可以使模型变得更好。

<details>
<summary>Original English</summary>

Because a human can label what's happening? Also because the human can help, the human can give hints. Let me tell you this story. When we were working on the π0.5 project, the paper that we released last April, we initially controlled our robots with teleoperation in a variety of different settings. At some point we actually realized that we can actually make significant headway, once the model was good enough, by supervising it not just with low-level actions but actually literally instructing it through language. Now you need a certain level of competence before you can do that, but once you have that level of competence, just standing there and telling the robot, "Okay, now pick up the cup, put the cup in the sink, put the dish in the sink," just with words already, actually gives the robot information that it can use to get better. Now imagine what this implies for the human plus robot dynamic. Now basically, learning for these systems is not just learning from raw actions, it's also learning from words. Eventually it’ll be learning from observing what people do from the kind of natural feedback that you receive when you're doing a job together with somebody else. This is also the kind of stuff where the prior knowledge that comes from these big models is tremendously valuable, because that lets you understand that interaction dynamic. There's a lot of potential for these kinds of human plus robot deployments to make the model better.

</details>

### 机器人与自动驾驶的对比

就机器人进展而言，为什么它不会像**自动驾驶汽车**（Self-driving Cars: 能够感知环境并自主导航的车辆）那样呢？**谷歌**（Google）在2009年启动自动驾驶汽车计划至今已超过十年。我记得我十几岁的时候，看到过一些演示，我们可以去买**Taco Bell**然后开车回来。直到现在，它们才真正部署。即使如此，它们也可能犯错等等。可能还需要很多年，大部分汽车才能实现自动驾驶。你说五年内就能实现这种相当强大的功能，但实际上会感觉像20年吗？一旦我们五年后有了酷炫的演示，那么还需要十年才能让**Waymo**和**特斯拉FSD**（Tesla FSD: 特斯拉的全自动驾驶系统）正常工作。这是一个很好的问题。现在与2009年相比，一个很大的不同在于机器学习系统理解周围世界的技术。对于自动驾驶来说，这主要是**感知**（Perception: 机器系统通过传感器收集数据并理解环境的能力）。对于机器人来说，它可能还意味着其他一些事情。2009年，感知技术肯定不尽如人意。感知的问题在于，它属于那种你可以用一个经过一定工程设计的系统做出一个非常好的演示，但当你试图推广它时，就会撞上南墙。现在到了2025年，我们拥有更好的技术，可以实现可推广且鲁棒的感知系统，更普遍地说，是可推广且鲁棒的理解周围世界的系统。当你提到系统是**可扩展的**（Scalable: 系统在处理增加的工作负载或数据量时仍能保持良好性能的能力）时，在机器学习中，可扩展性实际上意味着**可推广性**（Generalizable: 模型在未见过的数据或任务上表现良好的能力）。这为我们今天提供了一个更好的起点。这并不是说机器人比自动驾驶更容易，而只是说2025年比2009年是一个更好的年份。

<details>
<summary>Original English</summary>

In terms of robotics progress, why won't it be like self-driving cars, where it's been more than 10 years since Google launched its… Wasn't it in 2009 that they launched the self-driving car initiative? I remember when I was a teenager, watching demos where we would go buy a Taco Bell and drive back. Only now do we have them actually deployed. Even then they may make mistakes, etc. Maybe it'll be many more years before most of the cars are self-driving. You're saying five years to this quite robust thing, but actually will it just feel like 20 years? Once we get the cool demo in five years, then it'll be another 10 years before we have the Waymo and the Tesla FSD working. That's a really good question. One of the big things that is different now than it was in 2009 has to do with the technology for machine learning systems that understand the world around them. Principally for autonomous driving, this is perception. For robots, it can mean a few other things as well. Perception certainly was not in a good place in 2009. The trouble with perception is that it's one of those things where you can nail a really good demo with a somewhat engineered system, but hit a brick wall when you try to generalize it. Now at this point in 2025, we have much better technology for generalizable and robust perception systems and, more generally, generalizable and robust systems for understanding the world around us. When you say that the system is scalable, in machine learning scalable really means generalizable. That gives us a much better starting point today. That's not an argument about robotics being easier than autonomous driving. It's just an argument for 2025 being a better year than 2009.

</details>

### 机器人操作的独特优势

机器人学还有其他一些与驾驶不同的地方。在某些方面，**机器人操作**（Robotic Manipulation: 机器人通过抓取、移动和放置物体来执行任务的能力）是一个更难的问题。但在另一些方面，它是一个更容易上手的问题空间，可以用更有限的范围启动那个飞轮。举个例子，如果你正在学习开车，你大概不会在没有人帮助的情况下独自学习开车。你不会信任你的青少年孩子独自学习开车，只是把他们扔进车里说：“去吧。”那也是一个已经有相当长时间学习世界经验的16岁孩子。你甚至不会梦想把一个五岁的孩子放进车里，告诉他开始开车。但如果你想让某人洗碗，碗也可能摔碎。但你可能会接受一个孩子尝试洗碗，而不需要有人一直坐在旁边“踩刹车”。对于我们希望通过**机器人操作**完成的许多任务，都有犯错和纠正错误的潜力。当你犯错并纠正它时，首先你已经完成了任务，因为你纠正了错误，但你也获得了知识，使你能够在未来避免这个错误。而驾驶由于其设置的动态性，很难犯错、纠正然后从中学习，因为错误本身会带来严重的后果。并非所有的操作任务都是如此。确实有一些非常**安全关键**（Safety-critical: 任何故障都可能导致严重伤害、死亡或重大财产损失的系统或任务）的任务。

<details>
<summary>Original English</summary>

But there's also other things about robotics that are a bit different than driving. In some ways, robotic manipulation is a much, much harder problem. But in other ways, it's a problem space where it's easier to get rolling, to start that flywheel with a more limited scope. To give you an example, if you're learning how to drive, you would probably be pretty crazy to learn how to drive on your own without somebody helping you. You would not trust your teenage child to learn to drive just on their own, just drop them in the car and say, "Go for it." That's also a 16-year-old who's had a significant amount of time to learn about the world. You would never even dream of putting a five-year-old in a car and telling him to get started. But if you want somebody to clean the dishes, dishes can break too. But you would probably be okay with a child trying to do the dishes without somebody constantly sitting next to them with a brake, so to speak. For a lot of tasks that we want to do with robotic manipulation, there's potential to make mistakes and correct those mistakes. When you make a mistake and correct it, well first you've achieved the task because you've corrected, but you've also gained knowledge that allows you to avoid that mistake in the future. With driving, because of the dynamics of how it's set up, it's very hard to make a mistake, correct it and then learn from it because the mistakes themselves have significant ramifications. Not all manipulation tasks are that. There are truly some very safety-critical stuff.

</details>

### 常识与学习的进步

这就是下一个关键点：**常识**。常识意味着能够对可能发生的事情做出合理的推断，而不需要你提前经历那个错误并从中学习。这极其重要。大约五年前，我们基本上不知道如何做到这一点。但现在我们可以使用**大语言模型**（LLM）和**视觉语言模型**（VLM: Vision-Language Model: 能够同时处理和理解图像与文本信息的AI模型）来提问，它们会做出合理的猜测。它们不会给你专家级的行为，但你可以说：“嘿，有一个牌子写着‘地面湿滑’。我走过去会发生什么？”这很明显，对吧？2009年的自动驾驶汽车无法回答这个问题。常识加上犯错和纠正错误的能力，这听起来非常像一个人在学习新事物时的表现。所有这些并不一定让**机器人操作**变得容易，但它允许我们从较小的范围开始，然后逐步发展。多年来，我们拥有大量的视频数据、语言数据和**Transformer**（Transformer: 一种基于自注意力机制的神经网络架构，广泛应用于自然语言处理和计算机视觉）模型已有5-8年。许多公司，包括**谷歌**、**Meta**等，都尝试过用大量训练数据构建基于**Transformer**的机器人。那么，它们遇到障碍的原因是什么？现在又有什么变化呢？

<details>
<summary>Original English</summary>

This is where the next thing comes in, which is common sense. Common sense, meaning the ability to make inferences about what might happen that are reasonable guesses, but that do not require you to experience that mistake and learn from it in advance. That's tremendously important. That's something that we basically had no idea how to do about five years ago. But now we can use LLMs and VLMs and ask them questions and they will make reasonable guesses. They will not give you expert behavior, but you can say, "Hey, there's a sign that says slippery floor. What's going to happen when I walk up over that?" It's pretty obvious, right? No autonomous car in 2009 would have been able to answer that question. Common sense plus the ability to make mistakes and correct those mistakes, that's sounding an awful lot what a person does when they're trying to learn something. All of that doesn't make robotic manipulation easy necessarily, but it allows us to get started with a smaller scope and then grow from there. So for years, I mean not since 2009, but we've had lots of video data, language data, and transformers for 5-8 years. Lots of companies have tried to build transformer-based robots with lots of training data, including Google, Meta, et cetera. What is the reason that they've been hitting roadblocks? What has changed now?

</details>

### 从实验室到工业规模的飞跃

这是一个很好的问题。我首先对你的评论稍作修改。他们取得了很大的进展。在某些方面，我们**Physical Intelligence**现在所做的许多工作，都是建立在例如**谷歌**等公司之前所做的许多伟大工作的基础上的。我们许多人以前都在**谷歌**工作过，并参与了其中一些工作。有些工作是我们借鉴了其他人完成的。这方面确实取得了很大的进展。但要让**机器人基础模型**真正发挥作用，它不仅仅是一个实验室科学实验。它还需要工业规模的建设努力。它更像是**阿波罗计划**（Apollo program: 美国国家航空航天局在1960年代和1970年代初进行的载人登月计划），而不是一个科学实验。过去工业研究实验室所做的出色研究——我也参与了其中大部分——在很大程度上被框定为一项基础研究工作。这很好。基础研究确实很重要，但它本身还不够。你需要基础研究，还需要将其变为现实的动力。将其变为现实意味着真正将机器人部署出去，获取具有代表性的数据，让它们在现实世界中完成所需任务，大规模获取这些数据，构建系统，并把所有这些都做好。这需要高度的专注，一种对实现**机器人基础模型**本身的单一专注，而不仅仅是将其作为做更多科学研究、发表论文或拥有一个研究实验室的方式。

<details>
<summary>Original English</summary>

That's a really good question. I'll start out with a slight modification to your comment. They've made a lot of progress. In some ways, a lot of the work that we're doing now at Physical Intelligence is built on the backs of lots of other great work that was done, for example, at Google. Many of us were at Google before. We were involved in some of that work. Some of it is work that we're drawing on that others did. There's definitely been a lot of progress there. But to make robotic foundation models really work, it's not just a laboratory science experiment. It also requires industrial scale building effort. It's more like the Apollo program than it is a science experiment. The excellent research that was done in the past industrial research labs, and I was involved in much of that, was very much framed as a fundamental research effort. That's good. The fundamental research is really important, but it's not enough by itself. You need the fundamental research and you also need the impetus to make it real. Making it real means actually putting the robots out there, getting data that is representative, the tasks that they need to do in the real world, getting that data at scale, building out the systems, and getting all that stuff right. That requires a degree of focus, a singular focus on really nailing the robotic foundation model for its own sake, not just as a way to do more science, not just as a way to publish a paper, and not just as a way to have a research lab.

</details>

### 数据规模化与能力扩展

现在是什么阻碍你进一步扩展数据？如果数据是一个主要瓶颈，为什么不能将办公室规模扩大100倍，让100倍的操作员操作这些机器人并收集更多数据呢？为什么不能立即将其规模扩大100倍？这是一个很好的问题。这里的挑战在于理解哪些**规模轴**（Axes of Scale: 指系统在不同维度上进行扩展的能力，例如数据量、任务种类、鲁棒性等）有助于哪些**能力轴**（Axes of Capability: 指系统在不同能力维度上的表现，例如完成任务的种类、效率、智能响应等）。如果我们想**横向扩展能力**（Horizontally Scaling Capability: 增加机器人能够执行的任务种类），这意味着机器人现在能做10件事，以后我想让它做100件事，这可以通过直接横向扩展我们已有的东西来解决。但我们希望机器人达到一个能力水平，使其能够在现实世界中做实际有用的事情。这还需要沿着其他轴进行扩展。例如，它需要达到非常高的**鲁棒性**（Robustness: 系统在面对各种干扰、错误或异常情况时仍能保持稳定和有效运行的能力）。它需要让它们非常高效、快速地执行任务。它需要让它们识别**边缘案例**并智能地响应。这些事情也可以通过规模化来解决。但我们必须为此确定正确的轴，这意味着要弄清楚收集什么数据，在什么环境下收集，什么方法消耗这些数据，以及这些方法如何工作。更彻底地回答这些问题将使我们更清楚地了解这些轴，这些因变量，以及我们需要规模化的东西。我们现在还不完全清楚那会是什么样子。我认为我们很快就会弄清楚。我们正在积极地研究这个问题。我们希望把这一点做好，这样当我们扩大规模时，它就能直接转化为与实际使用高度相关的能力。

<details>
<summary>Original English</summary>

What is preventing you now from scaling that data even more? If data is a big bottleneck, why can't you just increase the size of your office 100x, have 100x more operators operating these robots and collecting more data. Why not ramp it up immediately 100x more? That's a really good question. The challenge here is understanding which axes of scale contribute to which axes of capability. If we want to expand capability horizontally—meaning the robot knows how to do 10 things now and I'd like it to do 100 things later—that can be addressed by just directly horizontally scaling what we already have. But we want to get robots to a level of capability where they can do practically useful things in the real world. That requires expanding along other axes too. It requires, for example, getting to very high robustness. It requires getting them to perform tasks very efficiently, quickly. It requires them to recognize edge cases and respond intelligently. Those things can also be addressed with scaling. But we have to identify the right axes for that, which means figuring out what data to collect, what settings to collect it in, what methods consume that data, and how those methods work. Answering those questions more thoroughly will give us greater clarity on the axes, on those dependent variables, on the things that we need to scale. We don't fully know right now what that will look like. I think we'll figure it out pretty soon. It's something we're working on actively. We want to really get that right so that when we do scale it up, it'll directly translate into capabilities that are very relevant to practical use.

</details>

### 数据量与自给自足的学习

仅从数量级来看，你收集的数据量与互联网规模的预训练数据相比如何？我知道很难进行逐**Token**（Token: 文本或数据处理中的最小单位）计数，因为视频信息与互联网信息等如何比较。但根据你的合理估计，比例是多少？这很难做到，因为机器人经验由时间步组成，这些时间步彼此高度相关。原始的字节表示非常庞大，但信息密度可能相对较低。也许更好的比较是与用于**多模态训练**（Multimodal Training: 同时使用多种类型数据（如文本、图像、音频）进行模型训练）的数据集进行比较。在那里，我相信我们上次统计时，大约相差**一到两个数量级**。你设想的机器人愿景，是否要等到收集到100倍、1000倍的数据才能实现？这就是问题所在，我们不知道。当然，推断机器人学是一个棘手的问题是非常合理的。它可能需要与语言处理同样多的经验。但因为我们不知道答案，对我来说，更有用的思考方式不是我们需要多少数据才能完全完成，而是我们需要多少数据才能开始。这意味着在我们可以获得一个代表**自给自足**（Self-sustaining: 系统能够自行维持和发展，无需外部持续干预）和不断增长的数据收集方案的**数据飞轮**之前，我们需要多少数据。

<details>
<summary>Original English</summary>

Just to give an order of magnitude, how does the amount of data you have collected compare to internet-scale pre-training data? I know it's hard to do a token-by-token count, because how does video information compare to internet information, et cetera. But using your reasonable estimates, what fraction? It's very hard to do because robotic experience consists of time steps that are very correlated with each other. The raw byte representation is enormous, but probably the information density is comparatively low. Maybe a better comparison is to the datasets that are used for multimodal training. And there, I believe last time we did that count, it was between one and two orders of magnitude. The vision you have of robotics, will it not be possible until you collect what, 100x, 1000x more data? That's the thing, we don't know that. It's certainly very reasonable to infer that robotics is a tough problem. Probably it requires as much experience as the language stuff. But because we don't know the answer to that, to me a much more useful way to think about it is not how much data do we need to get before we're fully done, but how much data do we need to get before we can get started. That means before we can get a data flywheel that represents a self-sustaining and ever-growing data-collection recipe.

</details>

### π0模型与混合自主性

你说的**自给自足**（Self-sustaining）是指在工作中学习，还是指你心中有其他想法？在工作中学习，或者以一种数据获取过程本身就有用且有价值的方式获取数据。我明白了。某种形式的**强化学习**（RL）。做一些真正的事情。理想情况下，我希望它是**强化学习**，因为有了**强化学习**，机器人可以自主行动，这更容易。但拥有**混合自主性**（Mixed Autonomy: 系统在不同程度上由人类和AI共同控制或决策）并非不可能。正如我之前提到的，机器人可以从各种其他信号中学习。我描述了我们如何让机器人从与人交谈中学习。在完全**遥操作机器人**（Teleoperated Robots: 完全由人类远程控制的机器人）和完全**自主机器人**（Autonomous Robots: 能够独立感知、决策和行动的机器人）之间有很大的中间地带。**π0模型**是如何工作的？我们目前的模型基本上是一个**视觉语言模型**（VLM），它已经适应了运动控制。打个形象的比喻，一个**视觉语言模型**基本上是一个**大语言模型**，它被嫁接了一个小型的“伪视觉皮层”——一个**视觉编码器**（Vision Encoder: 将视觉信息转换为模型可理解的数字表示的组件）。我们的模型有一个**视觉编码器**，但它们也有一个**动作专家**（Action Expert: 模型中负责生成具体动作指令的模块），本质上是一个**动作解码器**（Action Decoder: 将模型内部表示转换为机器人可执行动作的组件）。它有一个小小的视觉皮层，概念上也有一个小的运动皮层。

<details>
<summary>Original English</summary>

When you say self-sustaining, is it just learning on the job or do you have something else in mind? Learning on the job or acquiring data in a way such that the process of acquisition of that data itself is useful and valuable. I see. Some kind of RL. Doing something actually real. Ideally I would like it to be RL, because with RL you can get away with the robot acting autonomously which is easier. But it's not out of the question that you can have mixed autonomy. As I mentioned before, robots can learn from all sorts of other signals. I described how we can have a robot that learns from a person talking to it. There's a lot of middle ground in between fully teleoperated robots and fully autonomous robots. How does the π0 model work? The current model that we have basically is a vision-language model that has been adapted for motor control. To give you a little bit of a fanciful brain analogy, a VLM, a vision-language model, is basically an LLM that has had a little pseudo visual cortex grafted to it, a vision encoder. Our models, they have a vision encoder, but they also have an action expert, an action decoder essentially. It has a little visual cortex and notionally a little motor cortex.

</details>

### π0模型架构与先验知识

模型做出决策的方式是读取来自机器人的**感官信息**（Sensory Information: 机器人通过传感器从环境中获取的数据），然后进行一些内部处理。这可能涉及输出中间步骤。你可能会告诉它：“清理厨房。”它可能会自己思考：“嘿，要清理厨房，我需要拿起盘子，拿起海绵，然后把这个和那个放好。”最终，它通过这种**思维链生成**（Chain-of-Thought Generation: 模型通过生成一系列中间推理步骤来解决复杂问题）的方式，到达**动作专家**，由它产生**连续动作**（Continuous Actions: 机器人动作空间中的动作是连续的数值，而非离散的类别）。这必须是一个不同的模块，因为动作是连续的、高频率的。它们与文本**Token**具有不同的数据格式。但从结构上看，它仍然是一个**端到端Transformer**（End-to-end Transformer: 从输入到输出直接进行学习的Transformer模型）。粗略地说，从技术上讲，它对应于一种**专家混合架构**（Mixture-of-Experts Architecture: 一种神经网络架构，其中包含多个“专家”网络，由一个“门控网络”决定哪个专家处理特定输入）。实际发生的是它预测“我应该做X事情”。然后有一个图像**Token**，然后是一些动作**Token**——它实际最终做的事情——然后是更多图像，更多文本描述，更多动作**Token**。基本上，我正在观察正在发生的数据流。没错，除了动作不以离散**Token**表示。它实际上使用**流匹配**（Flow Matching: 一种生成模型技术，用于学习从简单分布到复杂数据分布的连续变换）和**扩散模型**（Diffusion Model: 一种生成模型，通过逐步去噪生成高质量数据），因为动作是连续的，你需要非常精确地控制才能实现灵巧操作。

<details>
<summary>Original English</summary>

The way that the model makes decisions is it reads in the sensory information from the robot. It does some internal processing. That could involve outputting intermediate steps. You might tell it, "Clean up the kitchen." It might think to itself, "Hey, to clean up the kitchen, I need to pick up the dish and I need to pick up the sponge and I need to put this and this." Eventually it works its way through that chain-of-thought generation down to the action expert, which produces continuous actions. That has to be a different module because the actions are continuous, they're high frequency. They have a different data format than text tokens. But structurally it's still an end-to-end transformer. Roughly speaking, technically, it corresponds to a mixture-of-experts architecture. And what is actually happening is that it's predicting "I should do X thing." Then there's an image token, then some action tokens –what it actually ends up doing– and then more image, more text description, more action tokens. Basically I'm looking at what stream is going on. That's right, with the exception that the actions are not represented as discrete tokens. It actually uses flow matching and diffusion because they're continuous and you need to be very precise with your actions for dexterous control.

</details>

### AI领域的通用技术与先验知识

我觉得你正在使用**谷歌**（Google）发布的开源**Gemma模型**（Gemma Model: 谷歌开发的轻量级开源大语言模型），然后在上面添加这个**动作专家**，这非常有趣。不同**人工智能**领域（AI: Artificial Intelligence: 模拟人类智能的计算机系统）的进展不仅基于相同的技术，而且实际上是基于相同的模型，这让我觉得非常有趣。你可以直接使用一个开源的**大语言模型**（LLM），然后在上面添加这个**动作专家**。你可能会天真地认为：“哦，机器人学是一个独立的研究领域，**大语言模型**和自然语言处理是另一个独立的研究领域。”不，它们实际上是相同的。考虑因素相同，架构相同，甚至权重也相同。我知道你会在这些开源模型的基础上进行更多训练，但这让我觉得非常有趣。这里有一个重要的主题需要记住，那就是这些构建模块之所以如此有价值，是因为**人工智能社区**在利用**先验知识**（Prior Knowledge: 在学习新任务之前已经拥有的知识或信息）方面做得更好了。我们从预训练的**大语言模型**和**视觉语言模型**（VLM）中获得的大部分是关于世界的**先验知识**。这是一种有点抽象的知识。你可以识别物体，你可以大致弄清楚图像中物体的位置等等。但如果我用一句话来总结，**人工智能**领域的最新创新给机器人学带来的巨大好处是能够利用**先验知识**。模型是相同的模型，这在**深度学习**（Deep Learning: 机器学习的一个子领域，使用多层神经网络从数据中学习）中一直如此。但正是这种能够引入**先验知识**，这种可以来自许多不同来源的抽象知识的能力，才是真正强大的。

<details>
<summary>Original English</summary>

I find it super interesting that you're using the open-source Gemma model, which is Google's LLM that they released open source, and then adding this action expert on top. I find it super interesting that the progress in different areas of AI is based on not only the same techniques, but literally the same model. You can just use an open-source LLM and add this action expert on top. You naively might think that, "Oh, there's a separate area of research which is robotics, and there's a separate area of research called LLMs and natural language processing." No, it's literally the same. The considerations are the same, the architectures are the same, even the weights are the same. I know you do more training on top of these open-source models, but I find that super interesting. One theme here that is important to keep in mind is that the reason that those building blocks are so valuable is because the AI community has gotten a lot better at leveraging prior knowledge. A lot of what we're getting from the pre-trained LLMs and VLMs is prior knowledge about the world. It's a little bit abstracted knowledge. You can identify objects, you can figure out roughly where things are in image, that sort of thing. But if I had to summarize in one sentence, the big benefit that recent innovations in AI give to robotics is the ability to leverage prior knowledge. The fact that the model is the same model, that's always been the case in deep learning. But it's that ability to pull in that prior knowledge, that abstract knowledge that can come from many different sources that's really powerful.

</details>

### 视频模型与语言模型的表征差异

我曾与**GDM**的研究员**桑德**（Sander）交谈，他研究视频和音频模型。他指出，在他看来，不同模态之间之所以没有看到太多**迁移学习**（Transfer Learning: 将在一个任务上学到的知识应用到另一个相关任务上），是因为在视频和图像上训练语言模型似乎不一定会使其在文本问题和任务上表现得更好，因为图像的语义层面与文本不同。他的论点是，文本在模型内部具有高层次的语义表示，而图像和视频只是压缩的像素。当它们被嵌入时，它们不代表某种高层次的语义信息。它们只是压缩的像素。因此，在它们通过模型的层面上，没有发生**迁移学习**。这显然与你正在做的工作高度相关。你希望通过在机器人看到的视觉数据（甚至可能来自**YouTube**等）上训练模型，加上语言信息，再加上机器人自身的动作信息，所有这些结合起来能使其普遍**鲁棒**（Robust: 系统在面对各种干扰、错误或异常情况时仍能保持稳定和有效运行的能力）。你曾写过一篇非常有趣的博客文章，讨论为什么视频模型不如语言模型鲁棒。抱歉，这不是一个结构非常好的问题。我只是想听听你的看法。

<details>
<summary>Original English</summary>

I was talking to this researcher, Sander at GDM, and he works on video and audio models. He made the point that the reason, in his view, we aren't seeing that much transfer learning between different modalities. That is to say, training a language model on video and images doesn't seem to necessarily make it that much better at textual questions and tasks because images are represented at a different semantic level than text. His argument is that text has this high-level semantic representation within the model, whereas images and videos are just compressed pixels. When they're embedded, they don't represent some high-level semantic information. They're just compressed pixels. Therefore there's no transfer learning at the level at which they're going through the model. Obviously this is super relevant to the work you're doing. Your hope is that by training the model on the visual data that the robot sees, visual data generally maybe even from YouTube or whatever eventually, plus language information, plus action information from the robot itself, all of this together will make it generally robust. You had a really interesting blog post about why video models aren't as robust as language models. Sorry, this is not a super well-formed question. I just wanted to get a reaction.

</details>

### 视频模型与语言模型的挑战与机遇

是的，这是怎么回事？我大概可以讲两点。我有一些坏消息和一些好消息。坏消息是，你所说的确实触及了视频和图像生成模型长期存在的挑战核心。在某些方面，通过预测视频来获得智能系统的想法甚至比通过预测文本来获得智能系统的想法更早。文本处理的东西比视频处理的东西更早地转化为实际有用的东西。我的意思是，视频处理的东西很棒。你可以生成很酷的视频。最近在这方面所做的工作令人惊叹。但这并不是说仅仅生成视频和图像就已经产生了对世界有深刻理解的系统，你可以要求它们做超出生成更多图像和视频的事情。而对于语言来说，显然已经做到了。关于**表征**的这一点确实是关键。我们可以这样思考：想象一下把摄像机对准这栋楼外面，有天空，云在移动，水，汽车在开，行人。如果你想预测未来会发生的一切，你可以用许多不同的方式来做。你可以说：“好的，周围有人。让我非常擅长理解人们在人群中行为的心理学，并预测行人。”但你也可以说：“嗯，有云在移动。让我了解水分子和空气中冰粒的一切。”你可以深入研究。如果你想完全理解亚原子层面发生的一切，作为一个人，你可以花几十年的时间思考，甚至永远也无法触及行人和水。如果你想真正预测那个场景中发生的一切，有太多东西，即使你做得非常出色，捕捉了某样东西的100%，等你处理完所有其他东西，可能已经过了很多年。而对于文本，它已经被抽象成我们人类关心的那些信息。**表征**已经存在了。它们不仅是好的**表征**，它们还专注于真正重要的东西。这是坏消息。

<details>
<summary>Original English</summary>

Yeah, what’s up with that? I have maybe two things I can say there. I have some bad news and some good news. The bad news is what you're saying is really getting at the core of a long-running challenge with video and image generation models. In some ways, the idea of getting intelligent systems by predicting video is even older than the idea of getting intelligent systems by predicting text. The text stuff turned into practically useful things earlier than the video stuff did. I mean, the video stuff is great. You can generate cool videos. The work that's been done there recently is amazing. But it's not like just generating videos and images has already resulted in systems that have this deep understanding of the world where you can ask them to do stuff beyond just generating more images and videos. Whereas with language, clearly it has. This point about representations is really key to it. One way we can think about it is this. Imagine pointing a camera outside this building, there's the sky, the clouds are moving around, the water, cars driving around, people. If you want to predict everything that'll happen in the future, you can do so in many different ways. You can say, "Okay, there's people around. Let me get really good at understanding the psychology of how people behave in crowds and predict the pedestrians." But you could also say, "Well, there's clouds moving around. Let me understand everything about water molecules and ice particles in the air." You could go super deep on that. If you want to fully understand down to the subatomic level everything that's going on, as a person you could spend decades just thinking about that and you'll never even get to the pedestrians or the water. If you want to really predict everything that's going on in that scene, there's just so much stuff that even if you're doing a really great job and capturing 100% of something, by the time you get to everything else, ages will have passed. Whereas with text, it's already been abstracted into those bits that we as humans care about. The representations are already there. They're not just good representations, they focus on what really matters. That's the bad news.

</details>

### 机器人目标导向的感知优势

好消息是，我们不必仅仅从指向建筑物外部的摄像头中获取所有信息。当你拥有一个机器人时，这个机器人正在努力完成一项工作。它有一个目的，它的**感知**（Perception: 机器系统通过传感器收集数据并理解环境的能力）是为了实现这个目的而服务的。这是一个非常强大的**聚焦因素**（Focusing Factor: 引导系统关注特定信息或任务的机制）。我们知道对于人类来说，这确实很重要。你所看到的东西实际上会受到你正在尝试做的事情的影响。有大量的心理学实验表明，人们几乎具有惊人的**隧道视野**（Tunnel Vision: 过于专注于某个目标而忽略周围其他重要信息），如果某件事与他们正在努力实现的目标无关，他们甚至会 literalmente 视而不见。这极其强大。人们这样做一定有原因。当然，如果你在丛林中，看得多总比看得少好。如果你拥有这种强大的**聚焦机制**（Focusing Mechanism: 引导系统关注特定信息或任务的机制），那么它对于你实现目标来说一定非常重要。机器人将拥有这种**聚焦机制**，因为它们正在努力实现一个目标。视频模型不够鲁棒，这对机器人学来说是利空吗？你将不得不使用的大部分数据……我猜你是在说其中很多数据都会被标记。理想情况下，你只是希望能够把**YouTube**上的所有视频，我们录制过的所有视频都扔给它，让它学习物理世界如何运作以及如何移动。只是观察人类执行任务并从中学习。我猜你是在说仅仅从这些数据中学习很难，它需要自己练习任务。

<details>
<summary>Original English</summary>

Here's the good news. The good news is that we don't have to just get everything out of pointing a camera outside this building. When you have a robot, that robot is trying to do a job. It has a purpose, and its perception is in service to fulfilling that purpose. That is a really great focusing factor. We know that for people, this really matters. Literally what you see is affected by what you're trying to do. There's been no shortage of psychology experiments showing that people have almost a shocking degree of tunnel vision where they will literally not see things right in front of their eyes if it's not relevant to what they're trying to achieve. That is tremendously powerful. There must be a reason why people do that. Certainly if you're out in the jungle, seeing more is better than seeing less. If you have that powerful focusing mechanism, it must be darn important for getting you to achieve your goal. Robots will have that focusing mechanism because they're trying to achieve a goal. The fact that video models aren't as robust, is that bearish for robotics? So much of the data you will have to use… I guess you're saying a lot of it will be labeled. Ideally, you just want to be able to throw everything on YouTube, every video we've ever recorded, and have it learn how the physical world works and how to move about. Just see humans performing tasks and learn from that. I guess you're saying it's hard to learn just from that and it needs to practice the task itself.

</details>

### 互动学习与泛化能力

让我这样说吧。假设我给了你大量的录像带或不同体育赛事的录像，让你花一年时间只看体育比赛。一年后，我告诉你：“好的，现在你的工作是打网球。”这听起来很蠢，对吧？然而，如果我先告诉你你要打网球，然后让你去学习，现在你就会真正知道自己在寻找什么。这里有一个非常现实的挑战。我不想低估这个挑战。但**具身基础模型**（Embodied Foundation Models: 能够与物理世界互动并从中学习的基础模型），即通过互动、通过控制机器人系统来学习的模型，在吸收其他数据源方面具有很大的潜力，因为它们知道自己正在尝试做什么。我不认为这本身是一个**银弹**（Silver Bullet: 指能够解决所有问题的简单而神奇的解决方案）。我不认为它能解决所有问题，但它确实帮助很大。我们已经看到了这种开端，我们发现将网络数据纳入机器人训练确实有助于**泛化**（Generalization: 模型在未见过的数据或任务上表现良好的能力）。我怀疑从长远来看，这将使那些迄今为止难以使用的数据源更容易被利用。

<details>
<summary>Original English</summary>

Let me put it this way. Let's say that I gave you lots of videotapes or lots of recordings of different sporting events and gave you a year to just watch sports. After that year, I told you, "Okay, now your job, you're going to be playing tennis." Okay, that's pretty dumb right? Whereas if I told you first you're going to be playing tennis and then I let you study up, now you really know what you're looking for. There's a very real challenge here. I don't want to understate the challenge. But there's also a lot of potential for foundation models that are embodied, that learn from interaction, from controlling robotic systems, to be better at absorbing the other data sources because they know what they're trying to do. I don't think that by itself is a silver bullet. I don't think it solves everything, but it does help a lot. We've already seen the beginnings of that where we can see that including web data in training for robots really does help with generalization. I have the suspicion that in the long run, it'll make it easier to use those sources of data that have been tricky to use up until now.

</details>

### 机器人涌现能力与组合泛化

众所周知，**大语言模型**（LLM）拥有许多**涌现能力**（Emergent Capabilities: 模型在达到一定规模后，表现出训练时未明确编程或预期的能力），这些能力从未被刻意设计，因为互联网文本中包含了训练数据，使其能够获得执行某种任务的知识。对于机器人来说，你似乎正在手动收集所有数据。因此，数据集中不会出现你没有刻意收集的神秘新能力。这似乎会使得获得鲁棒的、**分布外能力**（Out-of-distribution Capabilities: 模型在训练数据分布之外的数据上表现良好的能力）变得更加困难。我不知道未来5-10年的发展是否会是这样：每个子任务，你都必须给它数千个**Episode**（Episode: 在强化学习中，指从开始到结束的一个完整任务序列）。那么，仅仅通过完成子任务就很难真正自动化很多工作。如果你想想咖啡师、服务员、厨师的工作，很少一部分是只坐在一个工作台前做事情。你必须四处走动，补货，修理机器等等，在柜台、收银台和机器之间穿梭。是否会存在一个长尾任务和技能，你必须不断手动添加**Episode**，标记并观察它们做得如何？或者有什么理由认为它会更普遍地发展？这里有一个微妙之处。**涌现能力**不仅仅来自于互联网数据中包含大量信息的事实。它们还来自于**泛化**一旦达到一定水平，就会变得**组合化**（Compositional: 能够将已知元素以新颖方式组合起来以解决新问题）。

<details>
<summary>Original English</summary>

Famously, LLMs have all these emergent capabilities that were never engineered in, because somewhere in internet text is the data to train and to be able to give it the knowledge to do a certain kind of thing. With robots, it seems like you are collecting all the data manually. So there won't be this mysterious new capability that is somewhere in the dataset that you haven't purposefully collected. Which seems like it should make it even harder to then have robust, out-of-distribution capabilities. I wonder if the trek over the next 5-10 years will be like this: Each subtask, you have to give it thousands of episodes. Then it's very hard to actually automate much work just by doing subtasks. If you think about what a barista does, what a waiter does, what a chef does, very little of it involves just sitting at one station and doing stuff. You got to move around, you got to restock, you got to fix the machine, et cetera, go between the counter and the cashier and the machine, etc. Will there just be this long tail of things and skills that you have to keep adding episodes for manually and labeling and seeing how well they did? Or is there some reason to think that it will progress more generally than that? There's a subtlety here. Emergent capabilities don't just come from the fact that internet data has a lot of stuff in it. They also come from the fact that generalization, once it reaches a certain level, becomes compositional.

</details>

### 国际音标与机器人涌现案例

我的一个学生在一些演示中非常喜欢用一个有趣的例子。你知道**国际音标**（IPA: International Phonetic Alphabet: 一种用于记录语音的标准化符号系统）是什么吗？如果你查字典，你会看到单词的发音用一些奇怪的字母写出来。那基本上就是**国际音标**。它几乎只用于在字典中记录单个单词的发音。你可以要求一个**大语言模型**（LLM）用**国际音标**给你写一份制作某种餐点的食谱，它会做到。这简直令人难以置信。这绝对是它从未见过的事情，因为**国际音标**只用于记录单个单词的发音。这就是**组合泛化**（Compositional Generalization: 系统能够将已学习的知识或技能以新颖的方式组合起来，以解决未曾直接训练过的问题）。它将你见过的事物以新的方式组合起来。可以说，这里没有什么根本性的新东西，因为是的，你见过以这种方式写的不同单词，但你已经弄清楚，现在你可以像组合英语单词一样，组合这种其他语言的单词。这实际上就是**涌现能力**的来源。因此，原则上，如果我们有足够多样化的行为，模型应该能够根据情况需要，以新的方式组合这些行为。

<details>
<summary>Original English</summary>

There was a cute example that one of my students really liked to use in some of his presentations. You know what the International Phonetic Alphabet (IPA) is? No. If you look in a dictionary, they'll have the pronunciation of a word written in funny letters. That's basically International Phonetic Alphabet. It's an alphabet that is pretty much exclusively used for writing down pronunciations of individual words and dictionaries. You can ask an LLM to write you a recipe for making some meal in International Phonetic Alphabet, and it will do it. That's like, holy crap. That is definitely not something that it has ever seen because IPA is only ever used for writing down pronunciations of individual words. That's compositional generalization. It's putting together things you've seen in new ways. Arguably there's nothing profoundly new here because yes, you've seen different words written that way, but you've figured out that now you can compose the words in this other language the same way that you've composed words in English. That's actually where the emergent capabilities come from. Because of this, in principle, if we have a sufficient diversity of behaviors, the model should figure out that those behaviors can be composed in new ways as the situation calls for it.

</details>

### 机器人短期记忆与莫拉维克悖论

我们甚至在目前的模型中也看到了这些情况。从长远来看，五年后回首，我们可能会觉得这些规模很小。但我们已经看到了我所说的**涌现能力**。当我们测试一些叠衣服的策略时，我们实际上是偶然发现的。机器人不小心从篮子里拿了两件T恤而不是一件。它开始叠第一件，另一件碍事了，它就拿起另一件，扔回篮子里。我们不知道它会这样做。真是令人惊讶。然后我们尝试着玩，是的，它每次都会这样做。它在做它的工作。把别的东西掉在桌子上，它会捡起来放回去。好的，这很酷。它开始把东西放进购物袋。购物袋翻倒了，它会捡起来并扶正。我们没有告诉任何人收集这些数据。我敢肯定有人在某个时候不小心，或者可能是有意地捡起了购物袋。当你大规模学习时，就会出现这种**组合性**（Compositionality: 系统能够将简单的概念或技能组合成更复杂的概念或技能）。这才是所有这些非凡能力的真正来源。现在你把这与语言结合起来。你把这与各种**思维链推理**（Chain-of-Thought Reasoning: 通过生成一系列中间推理步骤来解决复杂问题）结合起来，模型有很大的潜力以新的方式组合事物。没错。我参观你们办公室的机器人时，也有一个类似的例子。它正在叠短裤。我不知道训练集中是否有这样的**Episode**，但为了好玩，我把其中一条短裤翻了个面。然后它能够理解，它首先需要把它翻过来，然后才能正确地叠好。

<details>
<summary>Original English</summary>

We've actually seen things even with our current models. In the grand scheme of things, looking back five years from now, we'll probably think that these are tiny in scale. But we've already seen what I would call emerging capabilities. When we were playing around with some of our laundry folding policies, we actually discovered this by accident. The robot accidentally picked up two T-shirts out of the bin instead of one. It starts folding the first one, the other one gets in the way, picks up the other one, throws it back in the bin. We didn't know it would do that. Holy crap. Then we tried to play around with it, and yep, it does that every time. It's doing its work. Drop something else on the table, it just picks it up and puts it back. Okay, that's cool. It starts putting things in a shopping bag. The shopping bag tips over, it picks it back up, and stands it upright. We didn't tell anybody to collect data for that. I'm sure somebody accidentally at some point, or maybe intentionally picked up the shopping bag. You just have this kind of compositionality that emerges when you do learning at scale. That's really where all these remarkable capabilities come from. Now you put that together with language. You put that together with all sorts of chain-of-thought reasoning, and there's a lot of potential for the model to compose things in new ways. Right. I had an example like this when I got a tour of the robots at your office. It was folding shorts. I don't know if there was an episode like this in the training set, but just for fun I took one of the shorts and turned it inside out. Then it was able to understand that it first needed to get… First of all, the grippers are just like this, two opposable finger and thumb-like things. It's actually shocking how much you can do with just that. But it understood that it first needed to fold it inside out before folding it correctly.

</details>

### 莫拉维克悖论与认知负荷

尤其令人惊讶的是，这个模型似乎只有**一秒钟的上下文**（Context: 模型在进行推理或生成时可访问和利用的信息范围）。**语言模型**通常可以看到整个代码库。它们在输出之前会观察数十万个**Token**并思考。它们在制定如何编写代码的计划之前，会观察自己的**思维链**数千个**Token**。你的模型只看到一张图像，即上一秒发生的事情，它模糊地知道它应该折叠这条短裤。它看到的是上一秒发生的事情的图像。我猜它能工作。令人惊讶的是，一秒钟的上下文足以执行一个长达一分钟的任务。是的。我很好奇你当初为什么做出这个选择，以及为什么能够实际完成任务……如果一个人只有一秒钟的记忆，并且必须做体力活，我觉得那根本不可能。当然，记忆力差并不是什么好事。增加记忆力，增加更长的上下文，所有这些，增加更高分辨率的图像，这些都会让模型变得更好。但为什么它对于你访问我们时看到的那些技能来说不是最重要的，在某种程度上，这又回到了**莫拉维克悖论**（Moravec's Paradox: 指人工智能领域中，对人类来说容易的任务（如感知和运动）对机器来说很难，而对人类来说很难的任务（如数学和逻辑）对机器来说相对容易）。

<details>
<summary>Original English</summary>

What's especially surprising about that is it seems like this model only has one second of context. Language models can often see the entire codebase. They're observing hundreds of thousands of tokens and thinking about them before outputting. They're observing their own chain of thought for thousands of tokens before making a plan about how to code something up. Your model is seeing one image, what happened in the last second, and it vaguely knows it's supposed to fold this short. It's seeing the image of what happened in the last second. I guess it works. It's crazy that it will just see the last thing that happened and then keep executing on the plan. Fold it inside out, then fold it correctly. But it's shocking that a second of context is enough to execute on a minute-long task. Yeah. I'm curious why you made that choice in the first place and why it's possible to actually do tasks… If a human only had a second of memory and had to do physical work, I feel like that would just be impossible. It's not that there's something good about having less memory, to be clear. Adding memory, adding longer context, all that stuff, adding higher resolution images, those things will make the model better. But the reason why it's not the most important thing for the kind of skills that you saw when you visited us, at some level, comes back to Moravec's paradox.

</details>

### AI的“难易”之谜

**莫拉维克悖论**（Moravec's Paradox）基本上是说，如果你想了解机器人学的一件事，那就是这件事。**莫拉维克悖论**指出，在**人工智能**（AI）中，容易的事情很难，而困难的事情却很容易。这意味着我们认为理所当然的事情——比如拿起物体、看、感知世界，所有这些——都是**人工智能**中的难题。而我们觉得有挑战性的事情，比如下棋和做微积分，实际上往往是更容易的问题。我认为这种记忆问题实际上是**莫拉维克悖论**的伪装。我们认为那些我们觉得困难、需要我们思考、让我们“汗流浃背、努力工作”的认知要求高的任务，才需要我们记住大量信息。如果你正在解决一个大的数学问题，如果你正在播客上进行复杂的专业对话，这些都需要你把所有这些“拼图块”都放在脑子里。如果你正在做一个熟练的任务——如果你是一名奥运游泳运动员，以完美的姿势游泳——并且你完全进入了“心流”状态，人们甚至会说这是“活在当下”。这就像你练习了太多次，已经把它“烘焙”到你的大脑神经网络中。你不需要仔细思考如何保持所有这些上下文。这真的只是**莫拉维克悖论**的体现。这并不意味着我们不需要记忆。它只是意味着，如果我们想达到人类的灵巧度和身体熟练度水平，我们应该首先做好其他事情，然后逐步向上，进入更具认知要求的领域，进入推理、上下文、规划等等。这些东西也同样重要。

<details>
<summary>Original English</summary>

Moravec's paradox basically, if you want to know one thing about robotics, that's the thing. Moravec's paradox says that in AI the easy things are hard and the hard things are easy. Meaning the things that we take for granted—like picking up objects, seeing, perceiving the world, all that stuff—those are all the hard problems in AI. The things that we find challenging, like playing chess and doing calculus, actually are often the easier problems. I think this memory stuff is actually Moravec’s paradox in disguise. We think that the cognitively demanding tasks that we do that we find hard, that cause us to think, "Oh man, I'm sweating. I'm working hard." Those are the ones that require us to keep lots of stuff in memory, lots of stuff in our minds. If you're solving some big math problem, if you're having a complicated technical conversation on a podcast, those are things where you have to keep all those puzzle pieces in your head. If you're doing a well-rehearsed task—if you are an Olympic swimmer and you're swimming with perfect form—and you're right there in the zone, people even say it's "in the moment." It's in the moment. It's like you've practiced it so much you've baked it into your neural network in your brain. You don't have to think carefully about keeping all that context. It really is just Moravec's paradox manifesting itself. That doesn't mean that we don't need the memory. It just means that if we want to match the level of dexterity and physical proficiency that people have, there's other things we should get right first and then gradually go up that stack into the more cognitively demanding areas, into reasoning, into context, into planning, all that kind of stuff. That stuff will be important too.

</details>

### 机器人三难困境：速度、上下文与模型规模

你面临一个**三难困境**（Trilemma: 指在三个相互冲突的目标之间进行选择，无法同时优化所有目标）。你有三个不同的方面，它们在**推理**（Inference: 模型根据输入数据生成预测或决策的过程）过程中都需要更多的计算资源，而你希望同时提升它们。首先是**推理速度**（Inference Speed: 模型处理输入并生成输出所需的时间）。人类每秒处理24帧或更多，我们对事物的反应速度极快。然后是**上下文长度**（Context Length: 模型在处理信息时能够考虑的输入序列的最大长度）。对于那种只清理你家的机器人，我认为它必须意识到几分钟前或几小时前发生的事情，以及这些事情如何影响它对下一个任务的计划。最后是**模型规模**（Model Size: 模型中参数的数量）。至少在**大语言模型**（LLM）中，我们看到增加参数数量会带来收益。我认为目前你们的**推理速度**是100毫秒，**上下文长度**是一秒，模型是几十亿参数？这些方面，至少其中两个，都比人类的等效水平小了许多个数量级。人脑有数万亿参数，而这个模型只有大约20亿参数。人类的处理速度至少和这个模型一样快，实际上要快得多，而且我们有数小时的上下文。这取决于你如何定义人类上下文，但确实是数小时、数分钟的上下文。有时甚至是数十年的上下文。没错。你必须在所有这三个看似相互对立的方面实现多个数量级的改进。增加其中一个会减少你在**推理**中可以分配给另一个的计算资源。我们该如何解决这个问题？

<details>
<summary>Original English</summary>

You have this trilemma. You have three different things which all take more compute during inference that you want to increase at the same time. You have the inference speed. Humans are processing 24 frames a second or whatever it is. We can react to things extremely fast. Then you have the context length. For the kind of robot which is just cleaning up your house, I think it has to be aware of things that happened minutes ago or hours ago and how that influences its plan about the next task it's doing. Then you have the model size. At least with LLMs, we've seen that there's gains from increasing the amount of parameters. I think currently you have 100 millisecond inference speeds. You have a second-long context and then the model is a couple billion parameters? Each of these, at least two of them, are many orders of magnitude smaller than what seems to be the human equivalent. A human brain has trillions of parameters and this has like 2 billion parameters. Humans are processing at least as fast as this model, actually a decent bit faster, and we have hours of context. It depends on how you define human context, but hours of context, minutes of context. Sometimes decades of context. Exactly. You have to have many order-of-magnitude improvements across all of these three things which seem to oppose each other. Increasing one reduces the amount of compute you can dedicate towards the other one in inference. How are we going to solve this?

</details>

### 上下文表征与多模态创新

这是一个非常大的问题。让我们来稍微剖析一下。其中有很多内容。其中一个是非常有趣的技术问题。在未来几年，我们可能会看到很多真正有趣的创新。这就是**上下文表征**（Representation for Context: 如何有效地编码和存储模型在处理信息时所需的背景信息）的问题。你举了一些例子，比如如果有一个家用机器人正在做事情，它就需要跟踪。作为一个人，有些事情你确实会非常象征性地，几乎用语言来记录。我有我的清单。我要去购物。至少对我来说，我可以在脑海中清晰地想象我的清单。拿起酸奶，拿起牛奶，拿起任何东西。我不是在想象牛奶货架上放着牛奶。我只是在想“牛奶”。但还有其他一些事情更具空间性，几乎是视觉的。当我试图去你的工作室时，我在想：“好的，这条街看起来是这样的。那条街看起来是那样的。我预计门廊会是什么样子。”以正确的形式表示你的上下文，捕捉你真正需要实现目标的东西——并丢弃所有不必要的东西——我认为这非常重要。我们正在**多模态模型**（Multimodal Models: 能够处理和理解多种类型数据（如文本、图像、音频）的AI模型）中看到这种开端。但我认为**多模态**不仅仅是图像加文本。这是一个有很多空间可以进行真正激动人心的创新的领域。

<details>
<summary>Original English</summary>

That's a very big question. Let's try to unpack this a little bit. There's a lot going on in there. One thing is a really interesting technical problem. It's something where we'll see perhaps a lot of really interesting innovation over the next few years. It’s the question of representation for context. You gave some of the examples, like if you have a home robot that's doing something then it needs to keep track. As a person, there are certainly some things where you keep track of them very symbolically, almost in language. I have my checklist. I'm going shopping. At least for me, I can literally visualize in my mind my checklist. Pick up the yogurt, pick up the milk, pick up whatever. I'm not picturing the milk shelf with the milk sitting there. I'm just thinking, "milk." But then there's other things that are much more spatial, almost visual. When I was trying to get to your studio, I was thinking, "Okay, here's what the street looks like. Here's what that street looks like. Here's what I expect the doorway to look like." Representing your context in the right form, that captures what you really need to achieve your goal—and otherwise discards all the unnecessary stuff—I think that's a really important thing. We're seeing the beginnings of that with multimodal models. But I think that multimodality has much more to it than just image plus text. That's a place where there's a lot of room for really exciting innovation.

</details>

### 大脑效率与并行处理

你是指我们如何**表征**吗？我们如何**表征**上下文，包括过去发生的事情，以及**计划**（Plans: 模型为实现目标而制定的一系列步骤或行动）或**推理**（Reasoning: 模型根据已知信息得出结论或解决问题的能力），就像你在**大语言模型**（LLM）世界中称呼的那样，即我们希望未来发生的事情，或者解决任务的中间处理阶段。以多种模态来做这件事，包括潜在的适合这项工作的**学习模态**（Learned Modalities: 模型通过学习自动发现和构建的，用于表示信息的新型数据模态），具有克服其中一些挑战的巨大潜力。有趣。当我们讨论**推理**方面的这些艰难权衡时，我还有另一个问题，那就是将其与人脑进行比较。人脑能够拥有数小时、数十年的上下文，同时能够以10毫秒的量级行动，并且拥有100万亿个参数，或者无论你想如何计算。我想知道理解这里发生的事情的最佳方式是，人脑硬件比我们拥有的**GPU**（GPU: Graphics Processing Unit: 图形处理器，常用于加速AI计算）硬件先进得多，还是编码视频信息的算法效率高得多。也许它是一些疯狂的**专家混合**（Mixture of Experts: 一种神经网络架构，其中包含多个“专家”网络，由一个“门控网络”决定哪个专家处理特定输入），其中活跃参数也处于数十亿的量级。或者两者兼而有之。如果你必须思考为什么我们的模型在许多维度上比大脑效率低几个数量级，是硬件还是算法的原因？

<details>
<summary>Original English</summary>

Do you mean in terms of how we represent? How we represent both context, both what happened in the past, and also plans or reasoning, as you call it in the LLM world, which is what we would like to happen in the future or intermediate processing stages in solving a task. Doing that in a variety of modalities, including potentially learned modalities that are suitable for the job, is something that has enormous potential to overcome some of these challenges. Interesting. Another question I have as we're discussing these tough trade-offs in terms of inference is comparing it to the human brain. The human brain is able to have hours, decades of context while being able to act on the order of 10 milliseconds, while having 100 trillion parameters or however you want to count it. I wonder if the best way to understand what's happening here is that human brain hardware is just way more advanced than the hardware we have with GPUs, or that the algorithms for encoding video information are way more efficient. Maybe it's some crazy mixture of experts where the active parameters are also on the order of billions, low billions. Or it’s some mixture of the two. If you had to think about why we have these models that are, across many dimensions, orders of magnitude less efficient compared to the brain, is it hardware or algorithms?

</details>

### 未来机器人硬件与算法发展

这是一个很好的问题。我肯定不知道答案。我绝不是一个精通神经科学的人。如果我必须猜测，并提供一个更倾向于我所知道的事情的答案，那大概是这样的。大脑是极其并行的。这仅仅是因为生物物理学的原因，但它比你的**GPU**（GPU: Graphics Processing Unit: 图形处理器，常用于加速AI计算）更并行。如果你想想现代**多模态语言模型**（Multimodal Language Model: 能够同时处理和理解多种类型数据（如文本、图像、音频）的AI模型）如何处理输入，如果你给它一些图像和一些文本，它首先读取图像，然后读取文本，然后一次一个**Token**地生成输出。对我来说，对于一个**具身系统**（Embodied System: 能够与物理世界互动并从中学习的AI系统）来说，拥有并行处理过程更有意义。现在，从数学上讲，你可以在并行和顺序之间建立紧密的等价关系。**Transformer**（Transformer: 一种基于自注意力机制的神经网络架构，广泛应用于自然语言处理和计算机视觉）本质上不是顺序的。你通过添加**位置嵌入**（Position Embeddings: 在Transformer模型中，用于编码输入序列中词语位置信息的向量）使它们变得顺序。**Transformer**本质上是非常可并行化的东西。这就是它们如此出色的原因。我不认为从数学上讲，这种高度并行的事情——你同时进行**感知**（Perception: 机器系统通过传感器收集数据并理解环境的能力）、**本体感受**（Proprioception: 机器人感知自身身体姿态和运动的能力）和**规划**（Planning: 模型为实现目标而制定的一系列步骤或行动）——必然需要与**Transformer**看起来非常不同，尽管其实际实现会有所不同。你可以想象，系统会并行思考：“好的，这是我的长期记忆，这是我十年前看到的东西，这是我的短期空间信息，这是我的语义信息，这是我现在看到的东西，这是我正在规划的东西。”所有这些都可以以一种存在非常熟悉的**注意力机制**（Attentional Mechanism: 神经网络中用于选择性地关注输入序列中重要部分的技术）的方式实现，但在实践中，所有这些都并行运行，可能以不同的速率，可能更复杂的事情运行得更慢，更快的反应性事情运行得更快。

<details>
<summary>Original English</summary>

That's a really good question. I definitely don't know the answer to this. I am not by any means well-versed in neuroscience. If I had to guess and also provide an answer that leans more on things I know, it's something like this. The brain is extremely parallel. It has to be just because of the biophysics, but it's even more parallel than your GPU. If you think about how a modern multimodal language model processes the input, if you give it some images and some text, first it reads in the images, then it reads in the text, and then proceeds one token at a time to generate the output. It makes a lot more sense to me for an embodied system to have parallel processes. Now mathematically you can make close equivalences between parallel and sequential stuff. Transformers aren't fundamentally sequential. You make them sequential by putting in position embeddings. Transformers are fundamentally very parallelizable things. That's what makes them so great. I don't think that mathematically this highly parallel thing—where you're doing perception and proprioception and planning all at the same time—necessarily needs to look that different from a transformer, although its practical implementation will be different. You could imagine that the system will in parallel think about, "Okay, here's my long-term memory, here's what I've seen a decade ago, here's my short-term spatial stuff, here's my semantic stuff, here's what I'm seeing now, here's what I'm planning." All of that can be implemented in a way that there's some very familiar attentional mechanism, but in practice all running in parallel, maybe at different rates, maybe with the more complex things running slower, the faster reactive stuff running faster.

</details>

### 机器人部署的系统与算法挑战

如果五年后我们有一个在与世界互动方面像人类一样鲁棒的系统，那么是什么让运行这些模型在物理上成为可能？要让视频信息实时传输，或者数小时的先前视频信息以某种方式被编码和考虑，同时在毫秒级进行解码，并且参数更多。仅仅是**英伟达**（Nvidia）推出了更好的**GPU**，还是你们提出了更好的**编码器**（Encoders: 将输入数据转换为模型可处理的内部表示的组件）等等？五年内发生了什么？这个问题有很多方面。当然，这是一个非常引人入胜的**系统问题**（Systems Problem: 关于如何设计、构建和优化复杂计算系统的问题）。我绝不是一个系统专家。我想象中，在实践中，正确的架构，特别是如果你想要一个负担得起的低成本系统，将是至少将一部分思考**外部化**（Externalize: 将计算或处理任务从本地设备转移到外部服务器或云端）。你可以想象，未来你将拥有一个机器人，如果你的互联网连接不好，机器人就会处于一个更“笨”的**反应模式**（Reactive Mode: 系统根据当前感知直接做出反应，不进行复杂规划）。但如果你的互联网连接良好，它就会更智能一些。这很酷。这里也有研究和算法方面的东西可以提供帮助，找出正确的**表征**，简洁地表示你过去的观察以及观察的变化。你的感官流在时间上是高度相关的。每次额外观察获得的**边际信息**（Marginal Information: 新数据点带来的额外信息量）与整个观察结果不同。我现在看到的图像与我之前看到的图像高度相关。原则上，我希望简洁地表示它。如果我独立表示图像，我可以用更压缩的表示方式。在算法方面，有很多可以做的事情来解决这个问题。这是一个非常有趣的算法工作。还有一个非常引人入胜的**系统问题**。说实话，我还没有深入研究系统问题，因为一旦你知道机器学习解决方案的形态，你才会想去实现这个系统。但那里有很多很酷的事情要做。

<details>
<summary>Original English</summary>

If in five years we have a system which is as robust as a human in terms of interacting with the world, then what has happened that makes it physically possible to be able to run those models? To have video information that is streaming at real time, or hours of prior video information is somehow being encoded and considered while decoding in a millisecond scale, and with many more parameters. Is it just that Nvidia has shipped much better GPUs or that you guys have come up with much better encoders and stuff? What's happened in the five years? There are a lot of things to this question. Certainly there's a really fascinating systems problem. I'm by no means a systems expert. I would imagine that the right architecture in practice, especially if you want an affordable low-cost system, would be to externalize at least part of the thinking. You could imagine in the future you'll have a robot where, if your Internet connection is not very good, the robot is in a dumber reactive mode. But if you have a good Internet connection then it can be a little smarter. It's pretty cool. There is also research and algorithms stuff that can help here, figuring out the right representations, concisely representing both your past observations but also changes in observation. Your sensory stream is extremely temporally correlated. The marginal information gained from each additional observation is not the same as the entirety of that observation. The image that I'm seeing now is very correlated to the image I saw before. In principle, I want to represent it concisely. I could get away with a much more compressed representation than if I represent the images independently. There's a lot that can be done on the algorithm side to get this right. That's really interesting algorithms work. There's also a really fascinating systems problem. To be truthful, I haven't gotten to the systems problem because you want to implement the system once you know the shape of the machine learning solution. But there's a lot of cool stuff to do there.

</details>

### 云端机器人与实时控制

也许你们只需要雇佣运营**YouTube**数据中心的人，因为他们知道如何编码视频信息。这提出了一个有趣的问题。对于**大语言模型**（LLM），理论上你可以在自己的笔记本电脑或其他设备上运行模型。但实际上，最大、最有效的模型是在数千甚至数百万用户同时使用的情况下批量运行的，而不是在本地运行。机器人领域也会发生同样的事情吗？因为**批量处理**（Batching: 将多个请求或数据项组合在一起进行处理，以提高效率）的固有效率，加上我们必须执行这种计算密集型**推理**任务的事实？你不会希望每个机器人携带价值5万美元的**GPU**（GPU: Graphics Processing Unit: 图形处理器，常用于加速AI计算）。你只希望这些计算发生在其他地方。在这个机器人世界中，我们是否应该预料到需要无处不在的连接性？你需要超高速的机器人。你正在来回传输视频信息，或者至少是单向传输视频信息。这对于机器人部署的方式会有什么有趣的影响吗？我不知道。但如果我必须猜测，我会猜测我们会看到两种情况。我们会看到具有**离板推理**（Off-board Inference: 计算任务在机器人外部的服务器或云端执行）的低成本系统，以及更可靠的系统。例如，在户外机器人或其他无法依赖连接性的场景中，这些系统会更昂贵，并具有**板载推理**（Onboard Inference: 计算任务直接在机器人内部的硬件上执行）。

<details>
<summary>Original English</summary>

Maybe you guys just need to hire the people who run the YouTube data centers because they know how to encode video information. This raises an interesting question. With LLMs, theoretically you could run your own model on this laptop or whatever. Realistically what happens is that the largest, most effective models are being run in batches of thousands and millions of users at the same time, not locally. Will the same thing happen in robotics because of the inherent efficiencies of batching, plus the fact that we have to do this incredibly compute-intensive inference task? You don't want to be carrying around $50,000 GPUs per robot or something. You just want that to happen somewhere else. In this robotics world, should we just be anticipating something where you need connectivity everywhere? You need robots that are super fast. You're streaming video information back and forth, or at least video information one way. Does that have interesting implications about how this deployment of robots will be instantiated? I don't know. But if I were to guess, I would guess that we'll see both. That we'll see low-cost systems with off-board inference and more reliable systems. For example, in settings where you have an outdoor robot or something where you can't rely on connectivity, those will be costlier and have onboard inference.

</details>

### 规划与反馈循环

我将从技术角度说几点，可能有助于理解这一点。虽然实时系统显然需要实时控制，而且通常是高频率的，但每个时间步所需的思考量可能出奇地低。同样，我们在人类和动物身上也看到了这一点。当我们规划动作时，大脑中确实会发生真实的规划过程。如果你记录猴子的大脑活动，你会发现与规划相关的神经关联。在动作发生之前，会发生一些事情。当动作发生时，动作的形态与动作发生之前的情况相关。这就是**规划**（Planning: 模型为实现目标而制定的一系列步骤或行动）。这意味着你设置好一些东西，设定某个过程的初始条件，然后展开这个过程，这就是动作。这意味着在动作过程中，你进行的**处理**（Processing: 系统对数据进行操作和转换以完成任务的过程）较少，并且你提前进行了**批量处理**（Batching: 将多个请求或数据项组合在一起进行处理，以提高效率）。但你并非完全**开环**（Open Loop: 系统在没有实时反馈的情况下执行预设指令）。你不是在播放录音机。你是在行动过程中做出反应。你只是在不同抽象层次上，一个更基本的抽象层次上做出反应。这又回到了**表征**（Representations: 数据在模型内部的编码方式）的问题。找出哪些**表征**足以提前规划然后展开，哪些**表征**需要紧密的**反馈循环**（Feedback Loop: 系统输出影响其未来输入的机制）。对于这种紧密的**反馈循环**，你正在对什么进行反馈？如果我正在驾驶车辆，我可能正在对车道标记的位置进行反馈，以便保持直线行驶。在较低的频率下，我大致判断自己在交通中的位置。

<details>
<summary>Original English</summary>

I'll say a few things from a technical standpoint that might contribute to understanding this. While a real-time system obviously needs to be controlled in real time, often at high frequency, the amount of thinking you need to do for every time step might be surprisingly low. Again, we see this in humans and animals. When we plan out movements, there is definitely a real planning process that happens in the brain. If you record from a monkey brain, you will find neural correlates of planning. There is something that happens in advance of a movement. When that movement takes place, the shape of the movement correlates with what happened before the movement. That's planning. That means that you put something in place and set the initial conditions of some process and then unroll that process, and that's the movement. That means that during that movement, you're doing less processing and you batch it up in advance. But you're not entirely an open loop. It's not that you're playing back a tape recorder. You are reacting as you go. You're just reacting at a different level of abstraction, a more basic level of abstraction. Again, this comes back to representations. Figure out which representations are sufficient for planning in advance and then unrolling, and which representations require a tight feedback loop. For that tight feedback loop, what are you doing feedback on? If I'm driving a vehicle, maybe I'm doing feedback on the position of the lane marker so that I stay straight. At a lower frequency, I sort of gauge where I am in traffic.

</details>

### 模仿学习与强化学习的结合

你几年前的一些讲座中提到，即使对于机器人学，**强化学习**（RL: Reinforcement Learning: 通过与环境互动学习最优行为的机器学习范式）在许多情况下也优于**模仿学习**（Imitation Learning: 通过观察专家演示来学习任务）。但到目前为止，模型几乎只进行**模仿学习**。我很好奇你对此的看法是否有所改变。也许没有改变。但那样的话，你需要为**强化学习**做这些。为什么你现在还不能做**强化学习**？这里的关键是**先验知识**（Prior Knowledge: 在学习新任务之前已经拥有的知识或信息）。为了有效地从自身经验中学习，事实证明，对你正在做的事情已经有所了解非常非常重要。否则，需要太长时间，就像一个人小时候需要很长时间才能学会非常基本的东西，例如第一次学习写字。一旦你已经有了一些知识，你就能非常快地学习新事物。现在通过**监督学习**（Supervised Learning: 使用带有标签的数据进行训练的机器学习范式）训练模型的目的是建立这个基础，提供**先验知识**，这样它们以后就能更快地解决问题。同样，这也不是一个新想法。这正是我们在**大语言模型**（LLM）中看到的。**大语言模型**最初纯粹通过**下一个Token预测**（Next Token Prediction: 预测序列中下一个元素的任务，常用于语言模型训练）进行训练。这提供了一个极好的起点，首先用于各种**合成数据生成**（Synthetic Data Generation: 创建人工生成的数据，用于训练模型）然后用于**强化学习**。我们完全有理由期望任何**基础模型**（Foundation Model: 在大量广泛数据上训练的巨型AI模型，可以适应各种下游任务）的努力都遵循相同的轨迹。我们首先以某种**暴力**（Brute-force: 指通过尝试所有可能的解决方案来解决问题的方法）方式建立基础。这个基础越强大，就越容易通过更容易获得的训练使其变得更好。

<details>
<summary>Original English</summary>

You have a couple of lectures from a few years back where you say that even for robotics, RL is in many cases better than imitation learning. But so far the models are exclusively doing imitation learning. I'm curious how your thinking on this has changed. Maybe it hasn’t changed. But then you need to do this for the RL. Why can't you do RL yet? The key here is prior knowledge. In order to effectively learn from your own experience, it turns out that it's really, really important to already know something about what you're doing. Otherwise it takes far too long, just like it takes a person, when they're a child, a very long time to learn very basic things, to learn to write for the first time, for example. Once you already have some knowledge, then you can learn new things very quickly. The purpose of training the models with supervised learning now is to build out that foundation that provides the prior knowledge so they can figure things out much more quickly later. Again, this is not a new idea. This is exactly what we've seen with LLMs. LLMs start off being trained purely with next token prediction. That provided an excellent starting point, first for all sorts of synthetic data generation and then for RL. It makes total sense that we would expect basically any foundation model effort to follow that same trajectory. We first build out the foundation essentially in a somewhat brute-force way. The stronger that foundation gets, the easier it is to then make it even better with much more accessible training.

</details>

### 机器人与知识工作的融合

十年后，最好的知识工作模型也会是机器人模型，或者附带一个**动作专家**（Action Expert: 模型中负责生成具体动作指令的模块）吗？我之所以问这个问题，是因为到目前为止，我们已经看到了使用更通用模型处理事务的优势。机器人学也会属于这个范畴吗？我们是否会拥有一个能够完成所有任务的模型，包括体力劳动和知识工作，或者你认为它们会继续保持分离？我真的希望它们最终会是同一个模型。显然我非常偏颇。我热爱机器人学，我认为它对**人工智能**（AI）来说非常基础。但乐观地看，我希望情况恰恰相反，即机器人学元素会使所有其他方面变得更好。我可以告诉你两个原因。一个与**表征**（Representations: 数据在模型内部的编码方式）和**聚焦**（Focus: 系统集中注意力于特定信息或任务的能力）有关。我之前说过，对于视频预测模型，如果你只是想预测所有发生的事情，那么很难弄清楚什么才是相关的。如果你有来自尝试完成任务的**聚焦**，它会以一种能够更有效地利用其他信号的方式来构建你对世界的看法。这可能极其强大。第二个原因是，在非常深层、基础的层面上理解物理世界，达到超越我们仅用语言所能表达的水平，可以帮助你解决其他问题。我们一直都在经历这种现象。当我们谈论抽象概念时，我们会说：“这家公司有很多**动能**（Momentum: 在物理学中指物体运动的量度，此处引申为公司发展的势头）。”我们会用社会隐喻来描述无生命的物体：“我的电脑讨厌我。”我们以特定的方式体验世界，我们的主观经验以非常深刻的方式塑造了我们对世界的看法。然后我们将其作为一把锤子，基本上敲击所有其他抽象到无法以其他方式处理的“钉子”。

<details>
<summary>Original English</summary>

In 10 years, will the best model for knowledge work also be a robotics model or have an action expert attached to it? The reason I ask is, so far we've seen advantages from using more general models for things. Will robotics fall into this bucket? Will we just have the model which does everything, including physical work and knowledge work, or do you think they'll continue to stay separate? I really hope that they will actually be the same. Obviously I'm extremely biased. I love robotics, I think it's very fundamental to AI. But optimistically, I hope it's actually the other way around, that the robotics element of the equation will make all the other stuff better. There are two reasons for this that I can tell you about. One has to do with representations and focus. What I said before, with video prediction models if you just want to predict everything that happens, it's very hard to figure out what's relevant. If you have the focus that comes from trying to do a task now that acts to structure how you see the world in a way that allows you to more fruitfully utilize the other signals. That could be extremely powerful. The second one is that understanding the physical world at a very deep, fundamental level, at a level that goes beyond just what we can articulate with language, can help you solve other problems. We experience this all the time. When we talk about abstract concepts, we say, "This company has a lot of momentum." We'll use social metaphors to describe inanimate objects. "My computer hates me." We experience the world in a particular way and our subjective experience shapes how we think about it in very profound ways. Then we use that as a hammer to basically hit all sorts of other nails that are far too abstract to handle any other way.

</details>

### 协同训练与模拟的局限性

可能还有其他与实体机器人相关的考虑因素，例如**推理速度**（Inference Speed: 模型处理输入并生成输出所需的时间）和**模型规模**（Model Size: 模型中参数的数量）等，这些可能与知识工作的考虑因素不同。也许仍然是同一个模型，但你可以以不同的方式提供服务。**协同训练**（Co-training: 同时在多个相关任务或数据源上训练模型，以提高整体性能）的优势足够高。我想知道，五年后如果我使用一个模型为我编写代码，它是否也知道如何做机器人方面的事情？也许代码编写对机器人学的优势足够高，值得这样做。编程可能是抽象知识工作的巅峰，从计算机编程的数学性质来看，它是一种极其抽象的活动，这就是为什么人们会如此挣扎。我对为什么**模拟**（Simulation: 在虚拟环境中模拟真实世界过程以进行测试或训练）对机器人没有更好的效果感到有些困惑。如果我观察人类，聪明的**人类**（Humans: 指人类个体）在有意学习时，会很好地注意到**模拟**与现实生活中的相似之处，并关注这些相似之处并从中学习。如果你有飞行员在**模拟**中学习，或者F1赛车手在**模拟**中学习，我们是否应该期望随着机器人变得更智能，它们也能够通过**模拟**学习更多东西？还是说这是个诅咒，我们需要永远的真实世界数据？

<details>
<summary>Original English</summary>

There might be other considerations that are relevant to physical robots in terms of inference speed and model size, et cetera, which might be different from the considerations for knowledge work. Maybe it's still the same model, but then you can serve it in different ways. The advantages of co-training are high enough. I'm wondering, in five years if I'm using a model to code for me, does it also know how to do robotics stuff? Maybe the advantages of code writing on robotics are high enough that it's worth it. The coding is probably the pinnacle of abstract knowledge work in the sense that just by the mathematical nature of computer programming, it's an extremely abstract activity, which is why people struggle with it so much. I'm a bit confused about why simulation doesn't work better for robots. If I look at humans, smart humans do a good job of, if they're intentionally trying to learn, noticing what about the simulation is similar to real life and paying attention to that and learning from that. If you have pilots who are learning in simulation or F1 drivers who are learning in simulation, should we expect it to be the case that as robots get smarter they will also be able to learn more things through simulation? Or is this cursed and we need real-world data forever?

</details>

### 目标导向与元学习

这是一个非常微妙的问题。你用飞行员使用**模拟器**（Simulator: 模拟真实系统行为的设备或软件）的例子非常有趣。但要记住的是，当飞行员使用**模拟器**学习驾驶飞机时，他们是极其**目标导向**（Goal-directed: 行为或学习过程以达成特定目标为导向）的。他们的人生目标不是学习使用**模拟器**。他们的人生目标是学习驾驶飞机。他们知道之后会有考试。他们知道最终将负责几百名乘客，他们真的不能让飞机坠毁。当我们用来自多个不同领域的数据训练模型时，模型并不知道它们应该解决一个特定的任务。它们只是看到：“嘿，这里有一件事我需要掌握。这里有另一件事我需要掌握。”也许更好的类比是，如果你正在玩一个可以驾驶飞机的视频游戏，然后最终有人把你放进了一架真飞机的驾驶舱。这并不是说视频游戏没用，但它不是一回事。如果你正在玩那个视频游戏，你的目标是真正掌握视频游戏，你不会以完全相同的方式去玩。你能否在这上面做某种**元强化学习**（Meta-RL: 学习如何学习强化学习任务，使系统能够更快地适应新环境或任务）？你2017年写过一篇非常有趣的论文。也许损失函数不是它在特定视频游戏或特定**模拟**中表现得有多好。我让你来解释。但它是关于在不同视频游戏中训练得有多好，能让它在某个下游任务中表现得更好。我解释得很糟糕，但你能否更好地解释一下我想说什么？

<details>
<summary>Original English</summary>

This is a very subtle question. Your example with the airplane pilot using simulation is really interesting. But something to remember is that when a pilot is using a simulator to learn to fly an airplane, they're extremely goal-directed. Their goal in life is not to learn to use a simulator. Their goal in life is to learn to fly the airplane. They know there will be a test afterwards. They know that eventually they'll be in charge of a few hundred passengers and they really need to not crash that thing. When we train models on data from multiple different domains, the models don't know that they're supposed to solve a particular task. They just see, "Hey, here's one thing I need to master. Here's another thing I need to master." Maybe a better analogy there is if you're playing a video game where you can fly an airplane and then eventually someone puts you in the cockpit of a real one. It's not that the video game is useless, but it's not the same thing. If you're trying to play that video game and your goal is to really master the video game, you're not going to go about it in quite the same way. Can you do some kind of meta-RL on this? There's this really interesting paper you wrote in 2017. Maybe the loss function is not how well it does at a particular video game or particular simulation. I'll let you explain it. But it was about how well being trained at different video games makes it better at some other downstream task. I did a terrible job at explaining but can you do a better job and try to explain what I was trying to say?

</details>

### 真实数据与模型知识的来源

你试图表达的是，也许如果我们有一个真正智能的模型正在进行**元学习**（Meta-learning: 学习如何学习，使系统能够更快地适应新任务或环境），它或许能够找出其在下游问题（现实世界问题）上的表现可以通过在**模拟器**（Simulator: 模拟真实系统行为的设备或软件）中做一些事情来提高。然后专门将此作为**损失函数**（Loss Function: 衡量模型预测与真实值之间差异的函数），对吗？没错。但这里有个问题。有一系列这样的想法，它们都类似于：“通过利用其他东西来训练它，使其在真实事物上表现得更好。”所有这些的关键在于能够训练它在真实事物上表现得更好。我怀疑在现实中，我们甚至可能不需要如此明确地做一些事情。**元学习**（Meta-learning）是**涌现**（Emergent: 模型在达到一定规模后，表现出训练时未明确编程或预期的能力）的，正如你之前指出的。**大语言模型**（LLM）本质上通过**上下文学习**（In-context Learning: 模型在不更新参数的情况下，通过分析输入中的示例来学习新任务）进行某种**元学习**。我们可以争论这在多大程度上是学习，但关键是，在正确目标和真实数据上训练的大型强大模型，在利用所有其他东西方面会变得更好。我认为这才是关键。回到你的飞行员例子，飞行员是在真实世界的目标上进行训练的。他们的目标是成为一名优秀的飞行员，取得成功，拥有良好的职业生涯。所有这些都会反过来影响他们采取的行动以及利用所有这些其他数据源。

<details>
<summary>Original English</summary>

What you're trying to say is that maybe if we have a really smart model that's doing meta-learning, perhaps it can figure out that its performance on a downstream problem, a real-world problem, is increased by doing something in a simulator. And then specifically make that the loss function, right? That's right. But here's the thing with this. There's a set of these ideas that are all going to be something like, "Train to make it better on the real thing by leveraging something else." The key linchpin for all of that is the ability to train it to be better on the real thing. I suspect in reality we might not even need to do something quite so explicit. Meta learning is emergent, as you pointed out before. LLMs essentially do a kind of meta learning via in-context learning. We can debate how much that's learning or not, but the point is that large powerful models trained on the right objective and on real data, get much better at leveraging all the other stuff. I think that's actually the key. Coming back to your airplane pilot, the airplane pilot is trained on a real world objective. Their objective is to be a good airplane pilot, to be successful, to have a good career. All of that kind of propagates back into the actions they take and leveraging all these other data sources.

</details>

### 模拟与反事实推理

因此，我认为利用包括**模拟**（Simulation: 在虚拟环境中模拟真实世界过程以进行测试或训练）在内的辅助数据源的关键，是构建一个真正优秀并具备**涌现能力**（Emergent Capabilities: 模型在达到一定规模后，表现出训练时未明确编程或预期的能力）的**基础模型**（Foundation Model: 在大量广泛数据上训练的巨型AI模型，可以适应各种下游任务）。正如你所说，要达到如此优秀，它必须有正确的目标。现在我们知道如何从真实世界数据中获得正确的目标，也许我们可以从其他事物中获得，但这目前更难。同样，我们可以看看其他领域发生的事情的例子。如今，如果有人训练一个**大语言模型**（LLM）来解决复杂问题，他们会使用大量的**合成数据**（Synthetic Data: 人工生成的数据，用于训练模型）。他们之所以能够有效地利用这些**合成数据**，是因为他们有一个起点，这个起点是在大量真实数据上训练的，并且理解了这些数据。一旦它理解了，它就更能利用所有其他东西。也许具有讽刺意味的是，利用包括**模拟**在内的其他数据源的关键，是真正擅长使用真实数据，理解世界的运作方式，然后你才能有效地利用这些数据。一旦我们在2035年或2030年拥有了这个科幻世界，你是否对真正的**通用人工智能**（AGI: Artificial General Intelligence: 能够像人类一样理解、学习和应用智能来解决任何问题的AI系统）构建**模拟**的能力感到乐观，在这些**模拟**中，它们可以排练人类或**人工智能**从未有机会练习过的技能？它们需要练习成为宇航员，因为我们正在建造**戴森球**（Dyson Sphere: 一种假想的巨型结构，完全包围恒星以捕获其所有能量），它们可以在**模拟**中完成。或者**模拟**的问题会一直存在，无论模型变得多智能？

<details>
<summary>Original English</summary>

So what I think is actually the key here to leveraging auxiliary data sources including simulation, is to build the right foundation model that is really good and has those emergent abilities. To your point, to get really good like that, it has to have the right objective. Now we know how to get the right objective out of real world data, maybe we can get it out of other things, but that's harder right now. Again, we can look to the examples of what happened in other fields. These days if someone trains an LLM for solving complex problems, they're using lots of synthetic data. The reason they're able to leverage that synthetic data effectively is because they have this starting point that is trained on lots of real data that gets it. Once it gets it, then it's more able to leverage all this other stuff. Perhaps ironically, the key to leveraging other data sources including simulation, is to get really good at using real data, understand what's up with the world, and then you can fruitfully utilize that. Once we have, in 2035 or 2030, basically this sci-fi world, are you optimistic about the ability of true AGIs to build simulations in which they are rehearsing skills that no human or AI has ever had a chance to practice before? They need to practice to be astronauts because we're building the Dyson sphere and they can just do that in simulation. Or will the issue with simulation continue to be one regardless of how smart the models get?

</details>

### AI与人类思维的类比

我会这样说。从非常基础的层面来看，你自己创造的**合成经验**（Synthetic Experience: 通过模拟或生成而非真实世界互动获得的经验）并不能让你更多地了解世界。它让你排练事物，让你考虑**反事实**（Counterfactuals: 与实际发生情况相反的假设情景）。但某种程度上，关于世界的信息需要被注入到系统中。你提出这个问题的方式很好地阐明了这一点。在经典机器人学中，人们通常将**模拟**视为注入人类知识的一种方式。一个人知道如何写出微分方程，他们可以编写代码，这会给机器人比以前更多的知识。但我们越来越多地从其他领域的经验中学习，从视频生成如何从**合成数据**（Synthetic Data: 人工生成的数据，用于训练模型）用于**大语言模型**（LLM）的经验中学习，最强大的创造**合成经验**的方式可能来自于一个非常好的模型。模型可能比人类更了解那些细粒度的细节。但当然，这个模型从哪里获得知识呢？从体验世界中。从某种意义上说，你说的很对，一个非常强大的**人工智能系统**可以模拟很多东西。但到那时，这几乎不重要了，因为从**黑箱**（Black Box: 指其内部运作机制不透明或难以理解的系统）的角度来看，这个系统正在发生的是信息输入，能力输出。处理信息的方式是通过想象一些东西和**模拟**，还是通过某种**无模型方法**（Model-free Method: 在强化学习中，不显式构建环境模型而直接学习策略或价值函数的方法），这在理解其能力方面是无关紧要的。你对人类的等效物有什么看法？我们**白日梦**（Daydreaming: 清醒时进行的幻想或想象）或**睡觉**（Sleeping: 休息状态）时所做的一切。我不知道你对我们正在做的这种辅助活动有什么感觉，但如果你必须做一个机器学习类比，那会是什么？

<details>
<summary>Original English</summary>

Here’s what I would say. Deep down at a very fundamental level, the synthetic experience that you create yourself doesn't allow you to learn more about the world. It allows you to rehearse things, it allows you to consider counterfactuals. But somehow information about the world needs to get injected into the system. The way you pose this question elucidates this very nicely. In robotics classically, people have often thought about simulation as a way to inject human knowledge. A person knows how to write down differential equations, they can code it up and that gives the robot more knowledge than it had before. But increasingly what we're learning from experiences in other fields, from how the video generation stuff goes from synthetic data for LLMs, is that probably the most powerful way to create synthetic experience is from a really good model. The model probably knows more than a person does about those fine-grained details. But then of course, where does that model get the knowledge? From experiencing the world. In a sense, what you said is quite right in that a very powerful AI system can simulate a lot of stuff. But also at that point it almost doesn't matter because, viewed as a black box, what's going on with that system is that information comes in and capability comes out. Whether the way to process that information is by imagining some stuff and simulating or by some model-free method is kind of irrelevant in our understanding of its capabilities. Do you have a sense of what the equivalent is in humans? Whatever we're doing when we're daydreaming or sleeping. I don't know if you have some sense of what this auxiliary thing we're doing is, but if you had to make an ML analogy, what is it?

</details>

### 自动化对社会经济的影响

当然，当你睡觉时，你的大脑会做一些与清醒时非常相似的事情。它看起来非常像回放经验，或者可能生成新的统计学上相似的经验。非常合理地猜测，通过**学习模型**（Learned Model: 通过数据训练得到的模型）进行的**模拟**（Simulation）可能是你的大脑如何计算**反事实**（Counterfactuals: 与实际发生情况相反的假设情景）的一部分。比这更根本的是，**最优决策**（Optimal Decision Making: 在给定条件下选择最佳行动以最大化预期结果）的核心，无论你如何做，都需要考虑**反事实**。你基本上必须问自己：“如果我做了这个而不是那个，会更好吗？”你必须以某种方式回答这个问题。无论你通过使用**学习模拟器**（Learned Simulator: 通过学习真实世界数据来模拟环境行为的模型），还是通过使用**价值函数**（Value Function: 在强化学习中，评估在特定状态下采取某个行动或遵循某个策略的长期回报）或其他东西，通过使用**奖励模型**（Reward Model: 评估行动好坏的AI模型）来回答这个问题，最终都是一样的。只要你有一些机制来考虑**反事实**并找出哪个**反事实**更好，你就成功了。我喜欢这样思考，因为它简化了问题。它告诉我们，关键不一定是进行非常好的**模拟**。关键是弄清楚如何回答**反事实**。是的，有趣。再次回到大局。我之所以对何时部署这个机器人经济有具体的理解感兴趣，是因为它与理解**通用人工智能**（AGI）将如何快速发展有关，这显然与**数据飞轮**（Data Flywheel: 通过数据收集和模型改进形成正反馈循环）有关。

<details>
<summary>Original English</summary>

Certainly when you sleep your brain does stuff that looks an awful lot like what it does when it's awake. It looks an awful lot like playing back experience or perhaps generating new statistically similar experience. It's very reasonable to guess that perhaps simulation through a learned model is part of how your brain figures out counterfactuals, basically. Something that's even more fundamental than that is that optimal decision making at its core, regardless of how you do it, requires considering counterfactuals. You basically have to ask yourself, "If I did this instead of that, would it be better?" You have to answer that question somehow. Whether you answer that question by using a learned simulator, or whether you answer that question by using a value function or something, by using a reward model, in the end it's all the same. As long as you have some mechanism for considering counterfactuals and figuring out which counterfactual is better, you've got it. I like to think about it this way because it simplifies things. It tells us that the key is not necessarily to do really good simulations. The key is to figure out how to answer counterfactuals. Yeah, Interesting. Stepping into the big picture again. The reason I'm interested in getting a concrete understanding of when this robot economy will be deployed is because it's relevant to understanding how fast AGI will proceed in the sense that it's obviously about the data flywheel.

</details>

### AI基础设施建设与机器人助力

此外，如果你推断到2030年**人工智能**（AI）的**资本支出**（Capex: Capital Expenditure: 资本性支出，指用于购买或升级固定资产的资金）规模，人们有不同的估计，但许多人估计在数百吉瓦——100、200、300吉瓦。你可以计算一下，到2030年部署100-200吉瓦的电力。每年的**边际资本支出**（Marginal Capex: 额外增加一单位生产能力所需的资本支出）将达到数万亿美元。每年2-4万亿美元。这对应于你必须建造的实际数据中心，必须建造的实际芯片工厂，必须建造的实际太阳能电池板工厂。我非常好奇，到2030年，最大的瓶颈是铺设数据中心旁边的太阳能电池板或组装数据中心的人力，还是机器人经济会足够成熟，能够在这个过程中提供显著帮助。这很酷。你基本上是在说，我现在应该购买多少混凝土来建造数据中心，以便到2030年能够为所有机器人供电。这是一种比我曾想到的更雄心勃勃的思考方式，但这是一个很酷的问题。当然，好消息是机器人可以帮助你建造这些东西。但到那时它们能做到吗？还有非机器人领域的东西，这也需要大量的**资本支出**。然后是机器人领域的东西，你需要建造机器人工厂等等。整个产业链都会出现工业爆炸式增长。机器人能在多大程度上加速或实现这一进程？

<details>
<summary>Original English</summary>

But also, if you just extrapolate out the capex for AI by 2030, people have different estimates, but many people have estimates in the hundreds of gigawatts – 100, 200, 300 gigawatts. You can just crunch numbers on having 100-200 gigawatts deployed by 2030. The marginal capex per year is in the trillions of dollars. It's $2-4 trillion dollars a year. That corresponds to actual data centers you have to build, actual chip foundries you have to build, actual solar panel factories you have to build. I am very curious about whether by 2030, the big bottleneck is just the people to lay out the solar panels next to the data center or assemble the data center, or will the robot economy be mature enough to help significantly in that process. That's cool. You're basically saying, how much concrete should I buy now to build the data center so that by 2030 I can power all the robots. That is a more ambitious way of thinking about it than has occurred to me, but it's a cool question. The good thing, of course, is that the robots can help you build that stuff. But will they be able to by that time? There's the non-robotic stuff, which will also mandate a lot of capex. Then there's robot stuff where you have to build robot factories, etc. There will be this industrial explosion across the whole stack. How much will robotics be able to speed that up or make it possible?

</details>

### 机器人作为生产力倍增器

原则上，机器人可以提供相当大的帮助。我们有时倾向于将机器人视为机械人，但事实并非如此。人是人，机器人是机器人。机器人更好的类比是你的汽车或推土机。它的维护要求低得多。你可以把它们放到各种奇怪的地方，它们根本不需要看起来像人。你可以制造一个100英尺高的机器人。你可以制造一个微型机器人。如果你有智能来驱动非常**异构**（Heterogeneous: 指系统由多种不同类型或功能的组件组成）的机器人系统，你可能会比仅仅拥有机械人做得更好。这可以极大地提高实际人类的生产力，并让你解决非常困难的问题。例如，我绝不是数据中心专家，但你可以把数据中心建在非常偏远的地方，因为机器人不必担心附近是否有购物中心。这里有一个问题是软件在哪里，然后是我们将拥有多少实体机器人。你们**Physical Intelligence**正在训练的这些桌面机械臂，世界上实际有多少个？到2030年会有多少个？这些都是棘手的问题，智能爆炸需要多少个机器人。这些都是非常棘手的问题。此外，机器人学中的**规模经济**（Economies of Scale: 随着生产规模的扩大，单位产品成本下降的现象）到目前为止并没有像长期那样发挥作用。

<details>
<summary>Original English</summary>

In principle, quite a lot. We have a tendency sometimes to think about robots as mechanical people, but that's not the case. People are people and robots are robots. The better analogy for the robot, it's like your car or a bulldozer. It has much lower maintenance requirements. You can put them into all sorts of weird places and they don't have to look like people at all. You can make a robot that's 100 feet tall. You can make a robot that's tiny. If you have the intelligence to power very heterogeneous robotic systems, you can probably do a lot better than just having mechanical people, in effect. It can be a big productivity boost for real people and it can allow you to solve problems that are very difficult to solve. For example, I'm not an expert on data centers by any means, but you could build your data centers in a very remote location because the robots don't have to worry about whether there's a shopping center nearby. There's the question of where the software will be, and then there's the question of how many physical robots we will have. How many of the robots you're training in Physical Intelligence, these tabletop arms, are there physically in the world? How many will there be by 2030? These are tough questions, how many will be needed for the intelligence explosion. These are very tough questions. Also, economies of scale in robotics so far have not functioned the same way that they probably would in the long term.

</details>

### 机器人硬件成本的下降趋势

举个例子，当我2014年开始从事机器人学工作时，我使用了一款非常好的研究机器人，叫做**PR2**（PR2: Personal Robot 2: 一款由Willow Garage开发的通用研究机器人），购买成本是40万美元。当我在**加州大学伯克利分校**（UC Berkeley）建立我的研究实验室时，我购买的机械臂是3万美元。我们**Physical Intelligence**现在使用的机器人，每个机械臂大约3000美元。我们认为它们可以以更小的成本制造出来。这种学习率的原因是什么？有几个原因。当然，其中一个与**规模经济**（Economies of Scale: 随着生产规模的扩大，单位产品成本下降的现象）有关。定制的、高端的研究硬件，当然会比更**生产化**（Productionized: 指产品或技术从研发阶段转向大规模生产和实际应用）的硬件昂贵得多。然后当然，还有技术因素。随着我们越来越擅长制造**驱动机器**（Actuated Machines: 能够通过执行器产生运动或力的机器），它们变得更便宜。还有软件因素。你的**人工智能系统**越智能，硬件需要满足某些要求的程度就越低。工厂中的传统机器人需要进行高度可重复的动作。因此，它需要一定程度的精度和**鲁棒性**（Robustness: 系统在面对各种干扰、错误或异常情况时仍能保持稳定和有效运行的能力），而如果你可以使用廉价的**视觉反馈**（Visual Feedback: 通过视觉传感器获取信息并用于调整系统行为），则不需要那么高的要求。**人工智能**也使机器人更经济实惠，并降低了对硬件的要求。

<details>
<summary>Original English</summary>

Just to give you an example, when I started working in robotics in 2014, I used a very nice research robot called a PR2 that cost $400,000 to purchase. When I started my research lab at UC Berkeley, I bought robot arms that were $30,000. The robots that we are using now at Physical Intelligence, each arm costs about $3,000. We think they can be made for a small fraction of that. What is the cause of that learning rate? There are a few things. One, of course, has to do with economies of scale. Custom-built, high-end research hardware, of course, is going to be much more expensive than more productionized hardware. Then of course, there's a technological element. As we get better at building actuated machines, they become cheaper. There's also a software element. The smarter your AI system gets, the less you need the hardware to satisfy certain requirements. Traditional robots in factories need to make motions that are highly repeatable. Therefore it requires a degree of precision and robustness that you don't need if you can use cheap visual feedback. AI also makes robots more affordable and lowers the requirements on the hardware.

</details>

### 硬件瓶颈与未来展望

有趣。你认为这种学习率会持续下去吗？你认为到本世纪末，购买移动机械臂的成本会是几百美元吗？这是一个很好的问题，应该问我的联合创始人**阿德南·埃斯梅尔**（Adnan Esmail），他可能是世界上回答这个问题最好的人。当然，我每年看到的成本下降都让我感到惊讶。世界上大概有多少个机械臂？是超过一百万还是少于一百万？我不知道这个问题的答案，但这也是一个棘手的问题，因为并非所有机械臂都是平等的。可以说，工厂里组装汽车的机器人并不是我们应该考虑的那种。你想要训练的那种机器人。很少，因为它们目前并未作为工厂机器人进行商业部署。少于10万个吗？我不知道，但很可能。好的。我们想要数十亿个机器人，至少数百万个机器人。如果你只是考虑实现这种爆炸性**人工智能**（AI）增长所需的工业爆炸式增长，你不仅需要机械臂，还需要能够四处移动的东西。基本上，我只是想知道，在你需要更多劳动力来推动这场**人工智能**繁荣时，这是否可能实现？

<details>
<summary>Original English</summary>

Interesting. Do you think the learning rate will continue? Do you think it will cost hundreds of dollars by the end of the decade to buy mobile arms? That is a great question for my co-founder, Adnan Esmail, who is probably the best person arguably in the world to ask that question. Certainly the drop in cost that I've seen has surprised me year after year. How many arms are there probably in the world? Is it more than a million? Less than a million? I don't know the answer to that question, but it's also a tricky question to answer because not all arms are made equal. Arguably, the robots that are assembling cars in a factory are just not the right kind to think about. The kind you want to train on. Very few because they are not currently commercially deployed as factory robots. Less than 100,000? I don't know, but probably. Okay. And we want billions of robots, at least millions of robots. If you're just thinking about the industrial explosion that you need to get this explosive AI growth, not only do you need the arms, but you need something that can move around. Basically, I'm just trying to think whether that will be possible by the time that you need a lot more labor to power this AI boom?

</details>

### 机器人硬件生态系统与地缘政治

嗯，当需求量大时，经济非常擅长满足需求。2001年世界上有多少部**iPhone**？这确实是一个挑战。这是一个值得思考的问题。对我这样的研究人员来说，一个特别重要的问题是**人工智能**（AI）如何影响我们对硬件的思考。有些事情将非常非常重要。你可能希望你的东西不会一直坏掉。有些事情明确属于“问号”范畴。我们需要多少根手指？你之前自己说过，一个只有两根手指的机器人能做很多事情让你感到惊讶。也许你仍然想要更多，但找到能保持良好功能的最低限度是很重要的。这在“问号”框中。有些东西我们可能不需要。我们可能不需要机器人超级精确，因为我们知道**反馈**（Feedback: 系统接收到的关于其行为结果的信息）可以弥补这一点。我认为我目前的工作是找出我们可以接受的最小化方案。我真的从最小化方案的角度思考机器人，因为我不认为我们会拥有一个终极机器人，也就是一个机械人。我们将拥有的是一系列优秀、高效机器人需要满足的东西。就像好的智能手机需要有触摸屏一样。这是我们都同意的。然后它们还需要一系列其他可选的东西，取决于需求，取决于成本点等等。将会有很多创新，一旦我们拥有非常强大的**人工智能系统**，可以插入任何机器人，赋予其某种基本智能水平，那么许多不同的人就可以创新如何使机器人硬件针对每个**利基市场**（Niche Market: 指一个产品或服务所针对的特定、狭窄且需求独特的市场细分领域）达到最佳。

<details>
<summary>Original English</summary>

Well, economies are very good at filling demand when there's a lot of demand. How many iPhones were in the world in 2001? There's definitely a challenge there. It's something that is worth thinking about. A particularly important question for researchers like myself is how can AI affect how we think about hardware? There are some things that are going to be really, really important. You probably want your thing to not break all the time. There are some things that are firmly in that category of question marks. How many fingers do we need? You said yourself before that you were surprised that a robot with two fingers can do a lot. Maybe you still want more than that, but still finding the bare minimum that still lets you have good functionality, that's important. That's in the question mark box. There are some things that we probably don't need. We probably don't need the robot to be super duper precise, because we know that feedback can compensate for that. My job, as I see it right now, is to figure out what's the minimal package we can get away with. I really think about robots in terms of minimal package because I don't think that we will have the one ultimate robot, the mechanical person basically. What we will have is a bunch of things that good, effective robots need to satisfy. Just like good smartphones need to have a touchscreen. That's something that we all agreed on. Then they’ll need a bunch of other stuff that's optional, depending on the need, depending on the cost point, et cetera. There will be a lot of innovation where once we have very capable AI systems that can be plugged into any robot to endow it with some basic level of intelligence, then lots of different people can innovate on how to get the robot hardware to be optimal for each niche.

</details>

### 硬件瓶颈与中国在全球供应链中的地位

就制造商而言，机器人领域有像**英伟达**（Nvidia）这样的公司吗？目前还没有。也许有一天会有。也许我有点理想主义，但我真的希望看到一个机器人具有高度**异构性**（Heterogeneity: 指系统由多种不同类型或功能的组件组成）的世界。作为算法设计者，你认为当今硬件最大的瓶颈是什么？这是一个很难回答的问题，主要是因为事物变化太快。对我来说，我在硬件方面花费大量时间思考的问题更多是**可靠性**（Reliability: 系统在指定条件下持续稳定运行的能力）和成本。我并不是特别担心成本。只是成本会转化为机器人的数量，而机器人的数量又会转化为数据量。作为一名机器学习从业者，我非常喜欢拥有大量数据。我真的希望拥有低成本的机器人，这样我就可以拥有更多机器人，从而获得更多数据。**可靠性**也很重要，原因或多或少相同。随着事情的进展，我们会对此有更清晰的认识。基本上，当今的**人工智能系统**并没有将硬件推向极限。随着**人工智能系统**越来越好，硬件将被推向极限，然后我们希望能更好地回答你的问题。

<details>
<summary>Original English</summary>

In terms of manufacturers, is there some Nvidia of robotics? Not right now. Maybe there will be someday. Maybe I'm being idealistic, but I would really like to see a world where there's a lot of heterogeneity in robots. What is the biggest bottleneck in the hardware today as somebody who's designing the algorithms that run on it? It's a tough question to answer, mainly because things are changing so fast. To me, the things that I spend a significant amount of time thinking about on the hardware side is really more reliability and cost. It's not that I'm that worried about cost. It's just that cost translates to the number of robots, which translates to the amount of data. Being an ML person, I really like having lots of data. I really want to have robots that are low cost, because then I can have more of them and therefore more data. Reliability is important, more or less for the same reason. It's something that we'll get more clarity on as things progress. Basically, the AI systems of today are not pushing the hardware to the limit. As the AI systems get better and better, the hardware will get pushed to the limit, and then we'll hopefully have a much better answer to your question.

</details>

### 自动化与国家竞争力

这是我问过很多嘉宾的问题。如果你审视这场**人工智能**（AI）爆炸的任何一个层面，你会发现除了芯片之外，许多实际的源头供应链都在**中国**制造。你谈到数据中心，你会说：“哦，太阳能电池板的所有晶圆，以及许多电池和模块等等，都是**中国**制造的。”你只需查看供应链。显然，机器人手臂也是**中国**制造的。你将生活在一个硬件制造规模化极其重要的世界中，因为每个机器人都能产生人类工人一部分的价值。这不仅是事实，而且人类工人或任何工人的价值都急剧飙升，因为我们需要大量劳动力来铺设数万英亩的太阳能农场、数据中心、铸造厂以及所有其他设施。在这个繁荣的世界中，最大的瓶颈就是你能实际部署多少机器人？你能制造多少机器人？因为你们现在将提出算法。我们只需要硬件。这是我问过许多嘉宾的问题。如果你观察你所关注的链条部分，**中国**为什么不会默认获胜？如果他们生产所有机器人，而你提出了使这些机器人非常有价值的算法，他们为什么不会默认获胜？这是一个非常复杂的问题。我将从更广泛的主题开始，然后尝试深入探讨一些细节。

<details>
<summary>Original English</summary>

This is a question I've had for a lot of guests. If you go through any layer of this AI explosion, you find that a bunch of the actual source supply chain is being manufactured in China, other than chips obviously. You talk about data centers and you're like, "Oh, all the wafers for solar panels and a bunch of the cells and modules, et cetera, are manufactured in China." You just go through the supply chain. Obviously robot arms are being manufactured in China. You’ll live in this world where it’s just incredibly valuable to ramp up manufacturing of the hardware, because each robot can produce some fraction of the value that a human worker can produce. Not only is that true, but the value of human workers or any worker has tremendously skyrocketed because we need tons of bodies to lay out the tens of thousands of acres of solar farms and data centers and foundries and everything. In this boom world, the big bottleneck there's just how many robots can you physically deploy? How many can you manufacture? Because you guys are going to come up with the algorithms now. We just need the hardware. This is a question I've asked many guests. If you look at the part of the chain that you are observing, what is the reason that China just doesn't win by default? If they're producing all the robots and you come up with the algorithms that make those robots super valuable, why don't they just win by default? This is a very complex question. I'll start with the broader themes and then try to drill a little bit into the details.

</details>

### 平衡的机器人生态系统

这里一个更广泛的主题是，如果你想拥有一个通过高素质劳动力——即拥有高生产力的人，意味着每个人每小时的工作都能完成大量工作——来取得领先的经济体，那么**自动化**（Automation: 使用技术使任务或过程自动执行）是非常非常好的。**自动化**是倍增每个人生产力的关键。同样，这就像**大语言模型**（LLM）编程工具一样。**大语言模型**编程工具放大了软件工程师的生产力。机器人将放大基本上所有工作者的生产力。现在，这是一个最终状态，一个理想的最终状态。如何达到这个状态，如何使其成为对社会有吸引力的旅程，如何驾驭其中的地缘政治维度，所有这些都非常复杂。它需要做出许多非常好的决策。关于投资一个平衡的机器人生态系统，同时支持软件创新和硬件创新的良好决策。我不认为这些是不可逾越的问题。它只需要一定程度的长期愿景和正确的投资平衡。

<details>
<summary>Original English</summary>

One broader theme here is that if you want to have an economy where you get ahead by having a highly educated workforce—by having people that have high productivity, meaning that for each person's hour of work, lots of stuff gets done—automation is really, really good. Automation is what multiplies the amount of productivity that each person has. Again, it’s the same as LLM coding tools. LLM coding tools amplify the productivity of a software engineer. Robots will amplify the productivity of basically everybody that is doing work. Now that's a final state, a desirable final state. There's a lot of complexity in how you get to that state, how you make that an appealing journey to society, how you navigate the geopolitical dimension of that. All of that stuff is pretty complicated. It requires making a number of really good decisions. Good decisions about investing in a balanced robotics ecosystem, supporting both software innovation and hardware innovation. I don't think any of those are insurmountable problems. It just requires a degree of long-term vision and the right balance of investment.

</details>

### 机器人制造的反馈循环

让我对此感到非常乐观的是最终状态。我们都同意，在美国，我们希望拥有一个人们生产力高、受过良好教育的人从事高价值工作的社会。因为这种最终状态在我看来与**自动化**（Automation）、与机器人学非常兼容，在某种程度上，应该有很大的动力去达到这种状态。然后，我们必须解决所有有助于我们实现目标的细节。这并不容易。在私营产业、投资、政治维度方面，需要做出许多复杂的决策。但我对此非常乐观，因为在我看来，隧道尽头的光明方向是正确的。我想还有一个不同的问题。如果价值受硬件限制，而你只需要生产更多硬件，那么在美国或与盟友如何制造数亿甚至数十亿机器人？我不知道如何解决这个问题，但这似乎与“人类工资会受到什么影响？”这样的问题不同。关于如何具体实现这一点，那是一个很长的对话，我可能不是最有资格谈论的人。但就其组成部分而言，这里重要的组成部分是机器人有助于物理事物，即体力劳动。如果生产机器人本身就是体力劳动，那么在机器人学方面做得好应该会有所帮助。当然，这有点循环，就像所有循环事物一样，你必须启动它，并努力让这个引擎运转起来。但这似乎是一个比例如数字设备问题更容易解决的问题。

<details>
<summary>Original English</summary>

What makes me really optimistic about this is the final state. We can all agree that in the United States we would like to have a society where people are highly productive, where we have highly educated people doing high-value work. Because that end state seems to me very compatible with automation, with robotics, at some level there should be a lot of incentive to get to that state. Then from there we have to solve for all the details that will help us get there. That's not easy. There's a lot of complicated decisions that need to be made in terms of private industry, in terms of investment, in terms of the political dimension. But I'm very optimistic about it because it seems to me that the light at the end of the tunnel is in the right direction. I guess there's a different question. If the value is bottlenecked by hardware and you just need to produce more hardware, what is the path by which hundreds of millions of robots or billions of robots are being manufactured in the US or with allies? I don't know how to approach that question, but it seems like a different question than, "Well, what is the impact on human wages or something?" For the specifics of how we make that happen, that's a very long conversation that I'm probably not the most qualified to speak to. But in terms of the ingredients, the ingredient here that is important is that robots help with physical things, physical work. If producing robots is itself physical work, then getting really good at robotics should help with that. It's a little circular, of course, and as with all circular things, you have to bootstrap it and try to get that engine going. But it seems like it is an easier problem to address than, for example, the problem of digital devices.

</details>

### 硬件、基础设施与社会规划

工作投入到创造计算机、手机等。但计算机和手机本身并不能帮助工作。没错。我想**反馈循环**（Feedback Loops: 系统输出影响其未来输入的机制）是双向的。它们可以帮助你，也可以帮助他人，这是一个**正和世界**（Positive Sum World: 指所有参与者都能从中受益，而非零和博弈）。它们帮助他人不一定是坏事。但在很大程度上，许多构成这个**反馈循环**的东西——子组件、制造和供应链——已经存在于**中国**，这似乎意味着更强的**反馈循环**将存在于**中国**。然后还有一个单独的讨论。也许这很好，也许这没问题，也许他们会继续向我们出口。但我只是觉得值得注意的是，每当我与嘉宾谈论不同的事情时，他们都会说：“是的，几年之内，这里供应链的每个环节的关键瓶颈都将是**中国**作为全球80%供应商的产品。”这就是我之前说的，这里真正重要的是建立一个平衡的机器人生态系统。**人工智能**（AI）极其令人兴奋，但我们也应该认识到，仅仅做好**人工智能**并不是我们唯一需要做的事情。我们需要思考如何平衡我们的优先事项、我们的投资以及我们花费时间做的事情。

<details>
<summary>Original English</summary>

Work goes into creating computers, phones, et cetera. But the computers and phones don't themselves help with the work. Right. I guess feedback loops go both ways. They can help you or they can help others and it's a positive sum world. It's not necessarily bad that they help others. But to the extent that a lot of the things which would go into this feedback loop—the sub-component, manufacturing and supply chain, already exist in China—it seems like the stronger feedback loop would exist in China. Then there's a separate discussion. Maybe that's fine, maybe that's good, and maybe they'll continue exporting this to us. But I just find it notable that whenever I talk to guests about different things, it's just like, "Yeah, within a few years the key bottleneck to every single part of the supply chain here will be something that China is the 80% world supplier of." This is why I said before that something really important to get right here is a balanced robotics ecosystem. AI is tremendously exciting, but we should also recognize that getting AI right is not the only thing that we need to do. We need to think about how to balance our priorities, our investment, the kind of things that we spend our time on.

</details>

### 全自动化社会与教育的重要性

举个例子，在**Physical Intelligence**，我们非常重视硬件。我们自己制造很多东西，并且希望硬件路线图与我们的**人工智能**（AI）路线图并行。但这只是我们。对于**美国**，甚至可以说对于整个人类文明，我们需要非常**全面地**（Holistically: 以整体的、全面的方式考虑问题）思考这些问题。当某个领域，比如**人工智能**，有很多兴奋点和进展时，有时很容易分心。我们很容易忽视其他事情，包括你提到的硬件组件、计算等基础设施组件。总的来说，对这些事情有一个更**全面**的看法是好的。我希望我们有时能有更多关于这方面的**全面对话**（Holistic Conversations: 涵盖所有相关方面，以整体视角进行的对话）。从整个社会的角度来看，他们应该如何看待机器人学和知识工作的进步？基本上，社会应该为**全自动化**（Full Automation: 所有任务和过程都由机器自动执行，无需人类干预）做准备。将会有一段时间，人们的工作变得更有价值，因为经济出现巨大繁荣，我们正在建造所有这些数据中心和工厂。最终，人类可以用身体做事，也可以用思想做事。没有第三种秘密的东西。社会应该为**全自动化**做准备。社会也将变得更加富裕。

<details>
<summary>Original English</summary>

Just as an example, at Physical Intelligence we do take hardware very seriously. We build a lot of our own things and we want to have a hardware roadmap alongside our AI roadmap. But that's just us. For the United States, arguably for human civilization as a whole, we need to think about these problems very holistically. It is easy to get distracted sometimes when there's a lot of excitement, a lot of progress in one area like AI. We are tempted to lose track of other things, including things you've said. There's a hardware component. There's an infrastructure component with compute and things like that. In general it's good to have a more holistic view of these things. I wish we had more holistic conversations about that sometimes. From the perspective of society as a whole, how should they be thinking about the advances in robotics and knowledge work? Basically society should be planning for full automation. There will be a period in which people's work is way more valuable because there's this huge boom in the economy where we’re building all these data centers and factories. Eventually humans can do things with their body and we can do things with our mind. There's not some secret third thing. What should society be planning for? It should be full automation of humans. Society will also be much wealthier.

</details>

### 变化的旅程与教育的价值

据推测，有办法做到这一点，让每个人都比今天过得更好。但最终状态，隧道尽头的光明，是**全自动化**（Full Automation），加上一个超级富裕的社会，并进行一些**财富再分配**（Redistribution: 重新分配财富或资源以减少不平等）或其他方式来解决这个问题。我不知道你是否不同意这种描述。在某种程度上，这是一种非常合理的看待事物的方式。但如果说我从技术中学到了一件事，那就是它很少会像人们预期的那样发展。有时，旅程与目的地同样重要。提前规划一个最终状态是非常困难的。从方向上看，你说的很有道理。我确实认为，我们集体思考如何构建我们周围的世界，使其适应所有领域越来越高的**自动化**（Automation），这非常重要。但我们应该像思考目的地一样思考旅程，因为事物会以各种不可预测的方式发展。我们会发现**自动化**出现在各种地方，可能不是我们最初期望的地方。这里真正重要的不变因素是**教育**（Education）非常有价值。**教育**是人们抵御变化负面影响的最佳缓冲。如果作为一个社会，我们能集体施加一个杠杆，那就是更多的**教育**。

<details>
<summary>Original English</summary>

Presumably there are ways to do this such that everybody is much better off than they are today. But the end state, the light at the end of the tunnel, is the full automation but plus super wealthy society with some redistribution or whatever way to figure that out. I don't know if you disagree with that characterization. At some level that's a very reasonable way to look at things. But if there's one thing that I've learned about technology, it's that it rarely evolves quite the way that people expect. Sometimes the journey is just as important as the destination. It's very difficult to plan ahead for an end state. Directionally, what you said makes a lot of sense. I do think that it's very important for us collectively to think about how to structure the world around us in a way that is amenable to greater and greater automation across all sectors. But we should really think about the journey just as much as the destination, because things evolve in all sorts of unpredictable ways. We'll find automation showing up in all sorts of places, probably not the places we expect first. The constant here that is really important is that education is really, really valuable. Education is the best buffer somebody has against the negative effects of change. If there is one single lever that we can pull collectively as a society, it's more education.

</details>

### 莫拉维克悖论与教育的灵活性

这是真的吗？**莫拉维克悖论**（Moravec's Paradox）指出，对人类来说，从**教育**（Education）中受益最大的事物，可能也是最容易被**自动化**（Automation）的事物，因为**教育人工智能**（AI）非常容易。你可以在一个下午就把需要你八年研究生院才能完成的教科书扔给它们。**教育**赋予你的是**灵活性**（Flexibility: 适应新情况或变化的能力）。它不那么关乎你所知道的具体事实，而更多地关乎你获取技能、获取理解的能力。它必须是良好的**教育**。是的。好的，**谢尔盖**，非常感谢你来参加播客。非常引人入胜。是的，这很紧张。问题很棘手。

<details>
<summary>Original English</summary>

Is that true? Moravec's paradox is that the things which are most beneficial from education for humans might be the easiest to automate because it's really easy to educate AIs. You can throw the textbooks that would take you eight years of grad school to do at them in an afternoon. What education gives you is flexibility. It's less about the particular facts you know, as it is about your ability to acquire skills, acquire understanding. It has to be a good education. Yeah. Okay, Sergey, thank you so much for coming on the podcast. Super fascinating. Yeah, this was intense. Tough questions.

</details>