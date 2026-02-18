---
author: New York Times Podcasts
date: '2026-02-18'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=EIhzg-2jeog
speaker: New York Times Podcasts
tags:
  - agentic-ai
  - software-development
  - job-displacement
  - ai-self-improvement
  - prompt-engineering
title: AI编程新范式：Agentic AI如何重塑软件开发与就业市场
summary: 本期访谈探讨了AI编程的最新进展，从早期的“vibe coding”演变为自主性更强的“agentic coding”。嘉宾Kevin Roose展示了Anthropic的Claude Code如何快速构建网站和集成游戏，揭示了AI代理在软件开发中的革命性潜力。讨论深入了AI模型自我改进的现象，以及这种技术对白领工作，特别是初级软件工程师就业的潜在冲击。专家们对未来一年的发展速度表示担忧，并强调了AI可能带来的经济和社会变革。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Andre Carpathy
  - Boris Churnney
  - Dario Amodei
companies_orgs:
  - OpenAI
  - Anthropic
  - Stanford
products_models:
  - Chat GPT
  - Codeex
  - Claude Code
  - Claude
  - GPT 5.3 Codeex
  - Techmo Bowl
media_books: []
status: evergreen
---
### AI编程新浪潮：Vibe Coding与Agentic Coding

**Natalie Kitroeff**: 大家好，我是**Natalie Kitroeff**，这里是《The Daily》。周一我们探讨了美国各地对日益扩张的AI数据中心日益增长的抵制。今天，我的同事**Kevin Roose**将带我们深入了解一项最具变革性的技术，这项基础设施正在催生一种新的编程方式，这可能是自**Chat GPT**推出以来人工智能领域最大的发展。今天是2月18日星期三。好的，前几天我给你发了Slack消息，**Kevin Roose**，我的同事，我的朋友，**《纽约时报》**科技播客**《Hard Fork》**的主持人，我问你：“什么是vibe coding？”因为我一直在听说这个词，但我完全不知道它是什么。你回答我的语气，大概就像一个人对他非常年迈的祖母说话一样。我觉得这样说很公平。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: From the **New York Times**, I'm **Natalie Kitroeff**. This is The Daily. On Monday, we looked at the growing push back against sprawling AI data centers in communities across America. Today, my colleague **Kevin Roose** takes us inside one of the most transformative technologies that infrastructure is enabling, a new way of programming that may be the biggest development in artificial intelligence since the launch of **Chat GPT**. It's Wednesday, February 18th. Okay. So, the other day I slacked you, **Kevin Roose**, my colleague, my friend, the host of The **New York Times** tech podcast, **Hard Fork**, and I asked you, "What is vibe coding?" Because this is a thing I had been hearing about, and I had no idea what it was. And you answered me roughly in the tone that one might use with their very elderly grandmother. I think it's like fair to fair to say.

</details>

**Kevin Roose**: 嗯，我不是年龄歧视者。我认为人们对技术的接受程度各不相同。我想我说话的语气是专门针对你，**Natalie**，因为我知道你比我年轻，所以你对技术如此困惑是没有任何借口的。

<details>
<summary>Original English</summary>

**Kevin Roose**: Well, I I am not agist. I I I think people have lots of different levels of comfort with technology. I think my tone of voice was directed at you specifically, **Natalie**, because I know that you are younger than me and so you have no excuse to be this confused by technology.

</details>

**Natalie Kitroeff**: 好的，说得有道理。所以从那以后，我像任何年轻人一样做了自己的研究，我开始明白**vibe coding**实际上非常重要。它似乎以一种真正革命性的方式使用AI。而且我确实认为我不可能成为唯一一个没有跟上这个潮流的人。所以我想请你先为我们这些还没了解的人介绍一下基础知识。什么是**vibe coding**？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yeah. Okay, fair enough. So since then I did my own research as any young person would do and I've come to the understanding that **vibe coding** is in fact very important. It appears to be using AI in a way that is truly revolutionary. And I do think that I cannot possibly be the only one who has not caught up to this. And so I want to ask you to just start by laying out the basics for those of us who aren't there yet. What is **vibe coding**?

</details>

**Kevin Roose**: **Vibe coding**是一个大约一年前由**Andre Carpathy**创造的术语，他曾是**OpenAI**的程序员，在**硅谷**非常有名。他当时描述他使用这些新的AI编码工具所做的事情，那就是他不再学习编程语言并自己一行一行地编写代码，而是让程序为他编写代码，并以这种方式构建软件。

<details>
<summary>Original English</summary>

**Kevin Roose**: So **vibe coding** is a term that was coined about a year ago by a guy named **Andre Carpathy** who's a former programmer at **OpenAI**, very well known out here in **Silicon Valley**. and he was describing this thing that he was doing using these new AI coding tools, which is that instead of learning a programming language and writing the code line by line by himself, he would just sort of let the program write the code for him and build software that way.

</details>

**Natalie Kitroeff**: 让“氛围”来完成工作。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Let the vibes do the work.

</details>

**Kevin Roose**: 让“氛围”来完成工作。没错。突然间，大约一年前，你第一次不需要知道如何编码就能构建软件。你只需使用这些工具，它们会在过程中帮助你，而你只需在它们工作时进行监督。

<details>
<summary>Original English</summary>

**Kevin Roose**: Let the vibes do the work. Exactly. And suddenly, for the first time about a year ago, you didn't have to know how to code to build software. you could just use these tools. They would help you along the way and you could just kind of oversee them as they worked.

</details>

**Natalie Kitroeff**: 那实际操作起来是怎样的？你尝试过，它为你做了什么？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So what does that actually look like? You experimented with it. What did that do for you?

</details>

**Kevin Roose**: 是的，大约一年前，当这个词首次出现时，我尝试了**vibe coding**，我会为自己构建一些小测试工具。我制作了一个名为**Lunchbox Buddy**的应用程序，它基本上是一种帮助我打包儿子午餐的方式，只需拍下冰箱里有什么东西的照片，然后交给这个工具，问它：“这个四格午餐盒里可以放哪些不同的组合？”

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah, so I tried **vibe coding** about a year ago when this term first emerged and I would build these little test tools for myself. I built an app called **Lunchbox Buddy**, which was basically a way to help me pack my son's lunch by just taking a photo of whatever was in my fridge and giving it to this tool and saying like, "What are the different combinations of things I could put in this four compartment lunch box?"

</details>

**Natalie Kitroeff**: 天哪，太棒了！太有用了，我想要！

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Oh my god, that's amazing. So useful. I want it.

</details>

**Kevin Roose**: 是的，我还做了一些其他东西。但说实话，它有点笨拙。这些工具基本上你仍然需要对编程有所了解才能使用，而且它们有很多bug。我尝试构建一些东西来帮助我整理电子邮件，但它做不到。它主要对专业程序员有用。

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah, I I built some other stuff, too. But honestly, it was kind of clunky. The tools basically you still needed to know a little bit about programming to be able to do this and they were pretty buggy. I tried to build some stuff to help me sort through my emails and it couldn't do it. It was mostly useful to professional programmers.

</details>

**Natalie Kitroeff**: 我想它不会一直那样，因为我们现在正把它当作一种革命性的东西来谈论。那发生了什么？所以去年和现在之间最大的创新就是所谓的**agentic coding**。**Agentic coding**基本上就是一种花哨的说法，指的是一个AI系统可以更自主地完成大部分过程。所以你仍然需要有你想构建的想法，但是有了这些新工具，你只需给它们一个项目，它们就可以制定计划。它们可以决定要使用什么编程语言。它们甚至可以创建自己的小代理团队，然后说：“好的，这个代理去研究，这个代理去构建网站，这个代理去测试。”所以你就像拥有了一个为你工作的机器人小团队，来完成你交给它的任何任务。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: and it doesn't stay that way I'd imagine because here we are talking about it as something that is revolutionary. So what happened? So the big innovation between last year and now is what is called **agentic coding**. **Agentic coding** is basically just a fancy way of saying an AI system that can do much more of the process autonomously. So you still do have to like have the idea for what you want to build, but then with these new tools, you can just sort of give them a project and they can make a plan. They can decide what programming languages they want to use. They can even create their own little team of agents and say, "Okay, this agent's going to go off and do the research. This agent's going to build the website. This agent's going to test it." And so you sort of have a little team of robots working for you to do whatever task you've given it.

</details>

**Kevin Roose**: 我的梦想，一个机器人团队。**Kevin**，简单说明一下这为什么意义重大。

<details>
<summary>Original English</summary>

**Kevin Roose**: My dream, a team of robots. Just sketch out why that's a big deal. Kevin.

</details>

**Natalie Kitroeff**: 嗯，因为这些模型正在非常迅速地变得更好，它们现在能够完成人类需要数小时甚至数天才能完成的任务。所以它们正在进入许多白领行业的入门级职能。模型本身也变得越来越好。它们不再像以前那样经常出现幻觉。它们不再像以前那样犯那么多愚蠢的错误。它们在推理和解决复杂的数学和科学问题方面做得比以前更好了。所以总的来说，这些东西正在以一种甚至让开发者都感到惊讶的速度变得更好。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Well, because these models are getting much better very quickly and they are now able to do the kinds of tasks that would take humans hours or sometimes even days to do. And so they are working their way up into the entrylevel functions in a lot of white collar industries. The models themselves are also getting much better. They're not hallucinating as much as they used to. They're not making as many silly mistakes as they used to. They are doing better at things like reasoning and solving complex math and science problems than they used to. So sort of across the board these things are getting better at a pace that is surprising even the people who are building them.

</details>

### Agentic AI的推动者与Claude Code的崛起

**Natalie Kitroeff**: 好的。我想问你关于这种变革潜力以及对就业的影响。但首先，请你从实际层面告诉我，你在哪里看到这些新工具？是什么或谁在推动这个**agentic**阶段？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Okay. I want to ask you about the transformational potential of that about the impact on jobs. But first just tell me at a really practical level where do you see these new tools? what or who is driving this agentic phase?

</details>

**Kevin Roose**: 所以这主要是由少数几家在AI竞赛中处于领先地位的公司推动的。其中一家是**Chat GPT**的开发者**OpenAI**。他们有一个新的**agentic coding**系统叫做**Codeex**。我一直在使用**Anthropic**开发的**Claude Code**，**Anthropic**是另一家AI公司。这些工具在过去几个月里刚刚问世，让人们觉得事情真的在加速。**Claude Code**有点火爆，数百万人一直在使用它。他们正在用它完成越来越复杂的任务。人们在软件行业的工作中也使用这些工具。真正改变的是，如果你和那些曾经手工编写代码的大型AI公司的人交谈，他们会说：“我不再编写任何代码了。我基本上是监督这个代理团队，我协调它们，让它们去执行任务，然后我去吃午饭，回来时工作就完成了。”

<details>
<summary>Original English</summary>

**Kevin Roose**: So this is largely being driven by a handful of companies that are sort of the leaders in this AI race. So one of them is **OpenAI** the maker of **Chat GPT**. They have a new **agentic coding** system called **Codeex**. I have been using **Claude Code** which is made by **Anthropic** another AI company. And these are the tools that have come out just in the past couple of months that have people feeling like things are really accelerating. **Cloud Code** sort of blew up. Millions of people have been using it. They are doing increasingly complex tasks with them. People are using these in their jobs in the software industry. And what's really changed is that if you talk to people at the big AI companies who used to program, who used to write code by hand, they'll say, "I I don't write any code anymore. I basically supervise this team of agents and I kind of orchestrate them and set them off toward tasks and then I go get lunch and I come back and the work is done.

</details>

**Natalie Kitroeff**: 好的，我想了解这个。我想了解它的故事。我想我们应该选择一个，听起来**Claude Code**是那个火爆的。所以告诉我这个模型的故事。它是如何开始的？它是如何被创造出来的？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Okay, I want to understand this. I want to understand the story of this. I think we should pick one and it sounds like **claude code** has been the one that's been blowing up. So tell me the story of this model. How did it start? How did it get created?

</details>

**Kevin Roose**: 这个应用程序**Claude Code**最初是一个副项目。基本上，**Anthropic**的一位工程师**Boris Churnney**有一个想法。他想了解**Anthropic**的聊天机器人**Claude**能做什么。所以他说：“如果我把我的电脑给它会怎样？如果我把**Claude**安装到终端应用程序里会怎样？终端应用程序是程序员用来编写代码和与电脑交互的应用程序。”然后他想，如果我把**Claude**和一堆工具一起释放到我的电脑里，比如让它能够编写脚本、创建文件、组织事物、调试代码，会发生什么？他开始看到办公室里发生了一些非常有趣的事情。他的同事们开始使用这个工具来完成他们的工作。他们开始用它编程。它从工程师开始。他们说：“这对于编码来说真的很棒。”最初可能是20%的工程师在使用，然后是40%，现在所有人都使用它了。但它也被非专业程序员使用。市场营销、销售和金融领域的人正在使用它，不仅仅是构建小型应用程序，而是自动化他们工作的一部分。

<details>
<summary>Original English</summary>

**Kevin Roose**: So this app **Claude Code** started as a side project. Basically an engineer at **Anthropic** named **Boris Churnney** had an idea. He was trying to sort of get a sense of what **Claude Anthropic's** chatbot could do. So he said, "Well, what if I just give it my computer? What if I install **Claude** inside the terminal app, which is the app that you use to write code and interface with your computer if you're a programmer? And what would happen if I just set **Cloud** loose inside my computer with a bunch of tools like give it the ability to write scripts, to create files, to organize things, to debug code, and he starts seeing something really interesting happening around the office. His colleagues are starting to use this tool to do their jobs. They're starting to program with it. It started with the engineers. They're saying, "This is really great for coding." At first it's maybe 20% of their engineers and then it's 40% and now all of them are using it. But it's also being used by people who are not professional programmers. People in marketing and sales and finance are using this not to just build little apps but to automate parts of their jobs.

</details>

**Natalie Kitroeff**: 所以它真的在技术人员之外广泛流行起来，普通人也在使用它。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So it's like really catching on way beyond you know the technical people like normies are using it.

</details>

**Kevin Roose**: 没错。人们发现它能做很多事情。它可以自动化你的电子邮件。它可以为各种事情创建仪表板。它可以重新组织你电脑上的文件。

<details>
<summary>Original English</summary>

**Kevin Roose**: Exactly. What people have discovered is that it can do lots of stuff. It can automate your email. It can create dashboards for things. It can reorganize the files on your computer.

</details>

**Natalie Kitroeff**: 这就像你有一台会使用电脑的电脑。现在这开始让我大开眼界了，但我想看看它实际操作。我们能一起做点什么吗？你能为我做点什么吗？这怎么运作？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: It's sort of like you just have a computer that can use a computer. Now, this is starting to blow my mind, but I want to see it in action. Can we make something together? Can you make something for me? How does this work?

</details>

**Kevin Roose**: 好的，我很乐意给你展示。所以，我将在这里分享我的屏幕。

<details>
<summary>Original English</summary>

**Kevin Roose**: Okay, I would love to show you. So, what I'll do is I will share my screen here.

</details>

**Natalie Kitroeff**: 我既兴奋又有点害怕。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: I'm excited and a little scared.

</details>

**Kevin Roose**: 别害怕，会没事的。好的，这就是终端应用程序。你经常在电脑上使用终端应用程序吗？

<details>
<summary>Original English</summary>

**Kevin Roose**: Don't be scared. It'll be fine. Okay. So, this is the terminal app. Have you spent much time in the terminal app on your computer?

</details>

**Natalie Kitroeff**: 答案不会让你惊讶。没有。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: The answer is not going to surprise you. No.

</details>

**Kevin Roose**: 好的。在我开始使用**Claude Code**之前，我也没有。

<details>
<summary>Original English</summary>

**Kevin Roose**: Okay. So, I had not either before I started using **cloud code**.

</details>

**Natalie Kitroeff**: 好的。但这看起来很技术化，**Kevin**。我能说这不像我的**Chat GPT**窗口吗？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Okay. This looks technical though, Kevin. Can I just say this is not my **chat GBT** window.

</details>

**Kevin Roose**: 不，这看起来像是硬核编程的东西。我认为这个界面让很多人觉得他们不能使用这个工具，因为他们不会编写代码。对吧。

<details>
<summary>Original English</summary>

**Kevin Roose**: No, this looks like hardcore programming things. And I think the interface is what has made a lot of people feel like this is a tool that they can't use because they don't write code. Right.

</details>

**Natalie Kitroeff**: 所以我只想说，我不会编写代码。我不是程序员。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So I will just say I do not write code. I am not a coder.

</details>

**Kevin Roose**: 你比他们更接近我，你是说。

<details>
<summary>Original English</summary>

**Kevin Roose**: You're closer to me than them. You're saying

</details>

**Natalie Kitroeff**: 我比他们更接近你。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: I am much closer to to you than them.

</details>

### AI代理构建网站与游戏演示

**Kevin Roose**: 好的，我们在这里，在**Claude Code**里面，我将给它一个提示。我将说为我的同事**Natalie Kitroeff**构建一个网站。我注意到，**Natalie**，你没有个人网站，至少我没看到。对吗？你有一个吗？

<details>
<summary>Original English</summary>

**Kevin Roose**: So okay, here we are. We're inside **Cloud Code** and I'm just going to give it a prompt. I'm going to say build a website for my colleague **Natalie Kitroof**. And I noticed, **Natalie**, that you don't have a personal website, at least that I could see. Correct. Do you have Do you have one?

</details>

**Natalie Kitroeff**: 我没有。我把我的身份都交给了**《纽约时报》**。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: I don't. I've kind of given over my identity to The **New York Times**.

</details>

**Kevin Roose**: 不，你看，你需要一个。你现在是一位大牌播客主持人了。所以你需要一个自己的网站。她是《The Daily》的联合主持人。网站应该看起来怎么样？时尚专业。

<details>
<summary>Original English</summary>

**Kevin Roose**: No, see, you need one. You are a big-time podcast host now. And so, you need a website for yourself. So, she's the co-host of The Daily. And the site should look, how do you want it to look? Sleek and professional.

</details>

**Natalie Kitroeff**: 是的。而且要酷。请让我看起来很酷。谢谢。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yes. And cool. Make me look cool, please. Thank you.

</details>

**Kevin Roose**: 而且要酷。而且要专业。让她看起来。

<details>
<summary>Original English</summary>

**Kevin Roose**: And cool. And professional. Make her look

</details>

**Natalie Kitroeff**: 而且还要酷。抱歉。谢谢。是的。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: And also cool. Sorry. Thank you. Yeah,

</details>

**Kevin Roose**: 她真的很喜欢**费城老鹰队**，所以也许可以用老鹰队的颜色来做。

<details>
<summary>Original English</summary>

**Kevin Roose**: she really likes the **Philadelphia Eagles**, so maybe do it in eagles colors.

</details>

**Natalie Kitroeff**: 这越来越好了。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: This is getting better and better.

</details>

**Kevin Roose**: 好的，所以我按下了回车键，它显示“burrowing”，这是它用来表示思考的词之一。

<details>
<summary>Original English</summary>

**Kevin Roose**: All right, so I I hit enter and it says burrowing, which is one of its words that it uses for thinking.

</details>

**Natalie Kitroeff**: 我们知道它在做什么吗？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Do we know what it's doing?

</details>

**Kevin Roose**: 我向你保证，我不知道它在做什么。一个专业的程序员会知道它在做什么，对吧？我只知道它正在做一些事情，它会思考，它会制定计划，然后它会开始构建。

<details>
<summary>Original English</summary>

**Kevin Roose**: I promise you I do not understand what it's doing. Like a professional coder would know what it is doing, right? All I know is that is doing something and it's going to think about it. It's going to make a plan and then it's going to start building.

</details>

**Natalie Kitroeff**: 需要多长时间？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: How long does it take?

</details>

**Kevin Roose**: 这取决于任务的复杂性。我以前遇到过需要10、20、30分钟的任务，但我认为这个最多只需要一两分钟。

<details>
<summary>Original English</summary>

**Kevin Roose**: It depends on the complexity of the task. I've had tasks that have taken 10, 20, 30 minutes before, but I think this is going to be just a minute or two at most.

</details>

**Natalie Kitroeff**: 它的想法是它会从互联网上抓取关于我的信息吗？你有没有告诉它确保每个人都知道我还年轻？还有，我只是。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: And the idea is that it's kind of scraping the internet for information about me. Did you tell it to make sure that everyone knows I'm young? Also, I'm just

</details>

**Kevin Roose**: 我们可以在后续版本中添加。所以，它写了644行代码。好的，它上线了。我们一起来看看它长什么样。

<details>
<summary>Original English</summary>

**Kevin Roose**: We can add that in a subsequent version. So, it wrote 644 lines of code. Okay, so it's live. Let's just see what it looks like together.

</details>

**Natalie Kitroeff**: 那是什么？一分钟？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: What was that? A minute.

</details>

**Kevin Roose**: 花了1分36秒。看那个。

<details>
<summary>Original English</summary>

**Kevin Roose**: That took a minute and 36 seconds. Look at that.

</details>

**Natalie Kitroeff**: 哇。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Wow.

</details>

**Kevin Roose**: 我们有一个像**老鹰队**绿色的小网站。

<details>
<summary>Original English</summary>

**Kevin Roose**: We've got a little like **Eagles** Green website.

</details>

**Natalie Kitroeff**: 是的，我看到了。天哪。它知道我曾作为驻外记者在**墨西哥**。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yeah, I see that. Oh my god. It knows that I was in Mexico as a foreign correspondent.

</details>

**Kevin Roose**: 嗯哼。

<details>
<summary>Original English</summary>

**Kevin Roose**: Uh-huh.

</details>

**Natalie Kitroeff**: 哦，《The Daily》的精神。最好的新闻不仅仅是告知，它让你感受到现实的重量，然后推动你去关心。这是一句被归因于《The Daily》精神的引语。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Oh, the spirit of The Daily. The best journalism doesn't just inform, it makes you feel the weight of reality and then pushes you to care. It's a quote that is attributed to the spirit of The Daily,

</details>

**Kevin Roose**: 那不是一个真实的人。

<details>
<summary>Original English</summary>

**Kevin Roose**: which is not a real person.

</details>

**Natalie Kitroeff**: 所以，因为我没有给它很多信息，它就自己编造了一些东西来填补空白。但最酷的是，如果你现在想改变它，你只需进入这个窗口，然后说：“嘿，那是一句假引语。你能确保网站上的所有信息都是准确的吗？”

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So, because I didn't give it a lot of information, it it just sort of made some stuff up to fill the space. But the cool thing about this is now if you want to change it, you can just go into this window and you can say, "Hey, that's a fake quote. Can you make sure all the info on the site is accurate?"

</details>

**Kevin Roose**: 是的。

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah.

</details>

**Natalie Kitroeff**: 我在想我们也许应该给它加一个彩蛋。嗯，一些有趣的东西，给那些访问你网站并真正想要完整的**Natalie Kitroeff**体验的人。好的。那会是什么？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: I'm thinking we should maybe add like an Easter egg to this. Um something fun for for people who go to your website and really want the full **Natalie Kitf** experience. Okay. What's it going to be?

</details>

**Kevin Roose**: 所以，你是一个狂热的足球迷。有一个视频游戏叫做**Techmo**。一个非常早期的足球视频游戏。所以，我想看看我们能否在你的网站上放一个可玩的**Techmo Bowl**版本，一个可玩的小视频游戏。

<details>
<summary>Original English</summary>

**Kevin Roose**: So, you're a big football fan. There was a video game called **Techmo**. Very early football video game. And so, I would like to see if we could put a version of **Techmobile** that's playable, like a little playable video game on your website.

</details>

**Natalie Kitroeff**: 是的。哇。我能雇你吗？我觉得你很擅长这个。你很擅长和**Claude**交流。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yes. Wow. Can I also hire you? I feel like you're good at this. You're good at talking to **Claude**.

</details>

**Kevin Roose**: 所以，我将回到我的终端应用程序，然后说：“太棒了。你能给网站添加一个可玩的**Techmo Bowl**风格的视频游戏吗？”哦，它说这会很有趣。所以，它正在编写数百行代码。

<details>
<summary>Original English</summary>

**Kevin Roose**: So, I'm going to go back to my terminal app here and I'm going to say, "That's great. Could you add a playable **Techmo Bowl** style video game to the site. Oh, it says this is going to be fun. So, it's writing hundreds of lines of code.

</details>

**Natalie Kitroeff**: 我的意思是，这太疯狂了。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: I mean, this is insane.

</details>

**Kevin Roose**: 这太野了。我的意思是，这就是为什么人们现在对AI感到恐慌，因为这在几个月前还不可能，但现在可以了。好的，现在我们的视频游戏做好了。我们去看看吗？是的，请。

<details>
<summary>Original English</summary>

**Kevin Roose**: It's wild. I mean, this is why people are freaking out about AI right now because this was not possible even a couple of months ago and now it is. Okay, so now our our video game is done. Should we go see it? Yes, please.

</details>

**Natalie Kitroeff**: 好的，这是**Natalie**的**Techmo Bowl**。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Okay, so here's **Natalie's techmobile**.

</details>

**Kevin Roose**: 天哪。

<details>
<summary>Original English</summary>

**Kevin Roose**: Oh my god.

</details>

**Natalie Kitroeff**: 你看到了吗？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: And do you see it?

</details>

**Kevin Roose**: 天哪。是的，我看到了。

<details>
<summary>Original English</summary>

**Kevin Roose**: Oh my god. Yeah, I do.

</details>

**Natalie Kitroeff**: 所以它说按空格键开球。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So, it says press space to hike

</details>

**Kevin Roose**: 和方向键移动。好的，所以哦。哦，我们得跑。我们得跑。

<details>
<summary>Original English</summary>

**Kevin Roose**: and arrow keys to move. Okay, so Oh. Oh, we got to run. We got to run.

</details>

**Natalie Kitroeff**: 哦。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Oh,

</details>

**Kevin Roose**: 老鹰队达阵！

<details>
<summary>Original English</summary>

**Kevin Roose**: touchdown **Eagles**.

</details>

**Natalie Kitroeff**: 老鹰队加油！这太不可思议了。哇。我觉得有了这个功能，我的新网站会吸引很多人。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Go birds. This is incredible. Wow. This is like I feel like I'm going to draw a lot of people to my new website with this feature.

</details>

**Kevin Roose**: 是的，你会有很多流量。

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah, you're going to be getting so much traffic.

</details>

**Natalie Kitroeff**: 好的。这就是**Claude Code**，这些新的编码工具就是这样工作的。你感觉如何？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Okay. So that is **Cloud Code** and that is how these new coding tools work. How do you feel?

</details>

**Kevin Roose**: 我感觉非常震撼。我真的不敢相信我们刚刚制作了我的第一个网站，而且上面还有一个视频游戏。我有太多问题想问你，我们休息后再回来。马上回来。

<details>
<summary>Original English</summary>

**Kevin Roose**: I feel pretty blown away. I honestly can't believe that we just made my first website and that it has a video game on it. I have so many questions that I want to ask you about it and we'll do that after the break. We'll be right back.

</details>

### AI的变革潜力、就业影响与自我改进

**Natalie Kitroeff**: **Kevin**，我必须承认，看到这个AI代理工作的感觉真的很棒。这可能是我自**Chat GPT**问世以来第一次对这项技术感到敬畏。已经很长时间了，而且它确实有点令人不安。所以我想知道，对你来说，你如何看待这个时刻？你如何看待我们正在这些工具中看到的这种变化？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Kevin, I have to just acknowledge that it is honestly an amazing feeling to see this AI agent at work. It's probably the first time that I have felt awe at this technology since **Chat GPT** came out. It's been a really long time and there is something a little bit unnerving about it. And so I just wonder for you, what do you make of this moment? What do you make of this change that we're seeing in these tools?

</details>

**Kevin Roose**: 是的，我认为这在AI领域是一件大事。这是AI行业内部人士长期以来一直说会发生的事情，但直到最近，人们还无法亲身体验或尝试。你知道，**Chat GPT**已经问世三年了。对大多数人来说，新鲜感已经逐渐消退。你知道，它是一个花哨的**Google**。你可以得到一个膳食计划。你可以给它一些问题。它可以帮助你写电子邮件或备忘录之类的东西，但它不再让你感到震惊。这对我来说，我认为对很多人来说，感觉不同，当你真的可以在不知道如何编写代码的情况下构建一些有用的东西时。我认为这正是人们认为将把AI从“花哨的**Google**”变成真正改变人们工作方式的东西。当你说这是科技公司长期以来一直说会发生的事情时，这个“它”指的是什么？是什么让它特别？仅仅是它能做的东西的复杂性，还是它的实用性？

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah, I think this is a big deal in the world of AI. This is something that people inside the AI industry have been saying is coming for a long time, but until recently, people couldn't really see it for themselves or try it for themselves. And you know, **chat GPT** has been around for three years now. And for most people, the novelty is sort of wearing off. You know, it's a fancy **Google**. You can get a meal plan. You can sort of give it some questions. It can help you write your emails or memos or things like that, but it doesn't sort of shock you anymore. This feels different to me and I think to a lot of other people when you can actually build something useful without knowing how to write code. And I think this is what people think is the thing that's going to take AI from just kind of being a fancier **Google** to something that genuinely changes how people work. When you say that this is something that the tech companies have been saying is coming for a long time, what is the it that is coming? What makes it special? Is it just the complexity of the stuff it can do or is it the utility of it?

</details>

**Natalie Kitroeff**: 我认为是实用性，但也是经济价值。这种**agentic**系统实际上可以完成工作。它可以完成任务。它可以执行人类必须手动完成的事情。所以它在某种意义上是朝着让这些东西真正成为劳动力成员的方向迈出了一步，你可以拥有一家公司，里面有一些人类员工，然后一大堆AI代理来完成任务。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: I think it's the utility, but it's also the economic value. This kind of **agentic** system can actually do work. It can do tasks. It can perform things that humans would have had to do by hand. So it is sort of a step in the direction of making these things actually kind of members of the workforce in some sense where you could have a company with some human employees and then a whole bunch of AI agents doing tasks.

</details>

**Kevin Roose**: 好的，我们来谈谈这个，因为很明显，当我们谈论经济价值时，这对于经营这些公司的人来说，大概意味着通过潜在地消除工作岗位来降低劳动力成本。

<details>
<summary>Original English</summary>

**Kevin Roose**: Okay, let's talk about that because obviously when we're talking about economic value, what that presumably means for the people that run these companies is lowering labor costs by potentially eliminating jobs.

</details>

**Natalie Kitroeff**: 是的。所以最大的问题是这只会帮助工作中的人吗？这种**agentic coding**工具会让人更快、更高效、更具生产力，并在他们的工具包中给他们一个新的强大工具，还是会开始取代人？我们开始在数据中看到一些迹象，表明这种工具可能正在取代年轻的软件开发人员。最近**斯坦福大学**的一项研究查看了工资记录，发现年轻软件工程师的就业人数，也就是那些职业生涯早期的人，自2022年高峰以来下降了约20%。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yeah. So that's the big question is will this just help people at work? Will this kind of **agentic coding** tool make people faster and more efficient and more productive and give them a new powerful tool in their toolkit or will it start to replace people? We are starting to see in the data some signs that this kind of tool is maybe displacing young software developers. So there was a study from **Stanford** recently that looked at payroll records and found that employment for young software engineers just people who are early in their careers has dropped about 20% from its peak in 2022.

</details>

**Kevin Roose**: 所以以前需要雇佣五到十个人来编写代码的公司，现在可能只需要一两个人，再加上一堆AI工具。

<details>
<summary>Original English</summary>

**Kevin Roose**: So companies that used to hire five or 10 people to write code for them may only need one or two now with a bunch of AI tools.

</details>

**Natalie Kitroeff**: 我能问一下，我们刚才指出了我漂亮网站的问题。这些东西有多好？我的意思是，它能自我调试吗？因为我想我看到也有很多怀疑和质疑，认为目前你真的只能用AI工具来做这件事。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Can I ask we were pointing to issues with my beautiful website. How good is this stuff? I mean, can it debug itself? Because I guess I'm seeing that there is also a lot of doubt and skepticism that you can really do this only with an AI tool at this point.

</details>

**Kevin Roose**: 嗯，编码是一个有趣的测试场，因为在某种意义上它是非常可验证的。代码要么运行，要么不运行。所以，在某种意义上，它很容易判断。我的意思是，我们构建的网站，它能工作。你可以在网上访问它。它里面有一个可玩的视频游戏，对吧？所以，是的，有很多软件工程师仍然说这些编码代理并不完美。如果你想获得真正有用的代码，可以部署到大型企业中，你仍然需要指导它们并监督它们，但这可能只是暂时的，因为它们正在以非常快的速度改进。我们看到，这些工具在几个月前还无法做到的事情，现在正在以正确和有用的方式完成。那么，你能快速告诉我，是什么让它改进得如此之快？

<details>
<summary>Original English</summary>

**Kevin Roose**: Well, coding is an interesting test ground for this because in some sense it is very verifiable. The code either runs or it doesn't. And so, in some sense, it's very easy to tell. I mean, the website we built, it works. You can go visit it on the web. it has a playable video game inside of it, right? So, yes, there are a lot of software engineers who are still saying these coding agents, they're not perfect. You still kind of need to hold their hands and oversee them if you want to get really useful code that you could like deploy inside of a big business, but that is maybe temporary because they're improving at a very rapid rate. And we're seeing that some of the things that these tools couldn't do even a few months ago, it's now doing in ways that are correct and and useful. Well, can you just tell me quickly like what's making this improve so quickly?

</details>

**Natalie Kitroeff**: 所以，一部分原因是模型本身，也就是**Claude Code**等工具背后的东西，正在非常迅速地变得更好。其中一部分原因是它们正在接受更多的编码数据训练。所以它们正在随着时间的推移而改进。另一个非常有趣且非常重要的事情是，这些AI工具正在构建自己的版本。它们正在开始自我改进。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So, part of it is just that the models themselves, the things that are sort of underneath tools like **cloud code** are just getting better very rapidly. And part of that is because they're being trained on more coding data. So, they're sort of improving over time. The other really interesting and really important thing that is starting to happen is that these AI tools are building versions of themselves. They are starting to improve themselves.

</details>

**Kevin Roose**: 那是什么意思？

<details>
<summary>Original English</summary>

**Kevin Roose**: What what does that mean?

</details>

**Natalie Kitroeff**: 所以，**OpenAI**最新的编码模型，叫做**GPT 5.3 Codeex**，被用来帮助构建它自己。该模型的早期版本被用来对后期版本的训练运行进行更改。所以这正在所有领先的AI公司中发生，那就是你拥有这些系统，它们可以构建网站，可以自动化某些金融或法律任务。它们还可以帮助训练AI模型，所以我们开始看到。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So, **OpenAI's** latest coding model which is called **GPT 5.3 Codeex** was used to help build itself. Early versions of the model were used to make changes to the training runs for later versions. So this is happening across all of the leading AI companies right now which is that you have these systems which can build websites which can automate certain financial or legal tasks. They can also help train AI models and so we're starting to see

</details>

**Kevin Roose**: 所以AI模型正在制造AI模型，只是为了明确我们在这里所说的。

<details>
<summary>Original English</summary>

**Kevin Roose**: so AI models making AI models just to be clear about what we're saying here.

</details>

**Natalie Kitroeff**: 是的。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yes.

</details>

**Kevin Roose**: 这让你感到害怕吗？因为它给了我一种科幻现实的感觉。

<details>
<summary>Original English</summary>

**Kevin Roose**: Is that scary to you? Because it gives me the vibe of a sci-fi reality.

</details>

**Natalie Kitroeff**: 是的。这是一种我们在科幻小说中多年来一直听说的场景，你拥有能力越来越强的AI。它们正在AI社区内构建越来越好的AI。有一个想法，一个短语叫做“**智能爆炸**”，那就是当这些系统进行所谓的“**递归自我改进**”，构建越来越好的自身版本时。所以这是一种可能性，这些系统只是开始加速它们的改进，以至于它们在没有人为干预的情况下自主完成所有这些。现在有些人认为这仍然是一个牵强的场景，但只需看看轨迹。我的意思是，一年前你拥有这些非常笨拙的AI **vibe coding**工具。现在它们有时可以自主运行数小时。它们可以构建和维护真正的软件，并且它们正在开始帮助构建它们的下一个版本。所以我认为我们应该关注这一点，而且我认为粉饰正在发生的事情是不负责任的。我不得不说，对于那些参与AI的公司和个人来说，这肯定也是一个概念验证的时刻，因为在过去一年里，对AI有很多怀疑。很多人担心市场泡沫，担心我们是否处于泡沫之中，担心AI是否真的能发挥其潜力。你所描述的是一个变革性的工具，可以非常有用。随之而来的是真正失业的可能性。所以无论你怎么看，这都是AI在做他们可能说过会做的事情。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Yeah. This is a sort of scenario that we've heard about in science fiction for years where you have AIs that are becoming increasingly capable. They're building better and better AIs within the AI community. There's this idea, this phrase of the **intelligence explosion**, which is when you have these systems that are doing what's known as **recursive self-improvement**, building better and better versions of themselves. And so that is one possibility that these systems just start to accelerate their improvements to the point where they are sort of doing all of this autonomously without human involvement. Now there are some people who think this is still a far-fetched scenario but just look at the trajectory. I mean a year ago you had these very clunky AI **vibe coding** tools. Now they're running autonomously for sometimes hours at a time. they can build and maintain real software and they're starting to help build the next versions of themselves. So I think we are right to be paying attention to this and I think it's irresponsible to sugarcoat what's happening. I have to say for the companies and for the people that have been involved in AI, this also has to really be a kind of proof of concept moment for them because there has been so much skepticism about AI over the last year. A lot of fear about frothiness in the market, about whether we're in a bubble, about whether AI is really going to live up to its potential. And what you've described is a transformative tool that can be incredibly useful. and with that the potential for real job loss. So anyway you slice it, this is AI doing what they said it probably would.

</details>

**Kevin Roose**: 是的，确实如此。而且我认为，去年人们质疑我们是否处于AI泡沫中，我并不责怪他们。我认为大多数人到那时为止只使用过像**Chat GPT**这样的东西，它们本身非常强大，但我可以理解为什么人们会看到这些，然后看到数十亿美元被花在数据中心和基础设施上，然后想，这难道不是有点太多了吗？但这些AI公司所下的赌注是，你可以真正将这些东西转化为有用的工具，能够在经济中做真正有价值的工作，我认为我们开始看到这个赌注正在得到回报。

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah, it is. And I think you know I don't blame people for questioning last year whether we were in an AI bubble. I think most people up to that point had only used things like **chat GPT** which are you know very capable on their own but I can understand why people would look at that and then look at the billions of dollars being spent on data centers and infrastructure and think like okay isn't this a little bit much but the bet that these AI companies were making is that you could actually turn this stuff into useful tools that would be able to do real valuable work in the economy and I think we are starting to see that bet pay off.

</details>

**Natalie Kitroeff**: **Kevin**，我认为我们值得在这里暂停一下。抽象地谈论所有这些造成的失业很容易，但从实际层面来看，如果一整类工人失去工作，如果这些工作不复存在，我们将谈论对整个经济产生相当大的影响。我的意思是，这理论上可能只是一个开始。如果像这样的代理能够做其他形式的工作，你可能会看到更多的工作被淘汰。所以我想问，这些工具造成这种失业的可能性有多大？AI公司对此有何说法？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Kevin, I think it's worth pausing here for a moment. Like, it's very easy to talk about job loss from all this in the abstract, but at a practical level, if a whole class of workers just lose their jobs, if those jobs cease to exist, we'd be talking about a pretty massive impact on the economy at large. And I mean this could hypothetically just be the very beginning. If agents like these can do other forms of work, you could see many more jobs wiped out. So I just want to ask, how likely is it really that these tools create that kind of job loss? And what are the AI companies saying about it?

</details>

**Kevin Roose**: 所以我来回答第一部分，那就是我不知道可能性有多大。我有直觉和猜测，但没有人真正知道这会如何发展。可能短期内对软件工程师的需求会激增，因为每个人都在构建新型软件，他们需要人来管理这一切。

<details>
<summary>Original English</summary>

**Kevin Roose**: So I'll answer the first part, which is that I don't know how likely it is. I have intuitions and guesses, but no one really knows how this is going to go. It could be that there's a short-term spike in the demand for software engineers because everyone's building new kinds of software and they need people to manage it all

</details>

**Natalie Kitroeff**: 而且这些工具可能永远不会大规模地淘汰数百万个工作岗位，但AI公司和经营这些公司的人越来越担心这一点。所以**Anthropic**的首席执行官**Dario Amodei**，**Claude**的开发者，警告说他相信AI可能在未来5年内淘汰所有入门级白领工作的一半。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: and it could be that these tools just never wipe out millions of jobs on mass but the AI companies and the people who run the companies are increasingly worried about this. So **Dario Ammed**, who's the CEO of **Anthropic**, which makes **Claude**, has warned that he believes that AI could potentially eliminate half of all entry-level white collar jobs within the next 5 years.

</details>

**Kevin Roose**: 哇。

<details>
<summary>Original English</summary>

**Kevin Roose**: Wow.

</details>

**Natalie Kitroeff**: 所以这可能大错特错，但即使它部分属实，即使是10%或20%。那仍然会对劳动力市场和数百万人的生活造成巨大的改变。是的，所有这些都让人深感不安。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: So that could be wildly off, but even if it were partially true, even if it were 10% or 20%. That would still be a massive change to the labor market and to the lives of millions of people. Yeah, there's something deeply unsettling about all of that.

</details>

**Kevin Roose**: 是的，我同意。我自己也对此感到非常不确定。我认为科技行业有很多人对这些工具非常兴奋，因为它们让他们能够非常迅速地构建大量东西。但随着我从更多从事白领知识工作领域的人那里听到，他们现在非常焦虑。人们真的很不确定。他们不知道他们正在培养的技能是否会过时。大学生不知道他们应该学习什么才能毕业后找到工作。人们真的开始对这项技术改进的速度以及它可能使未来看起来非常不同的可能性感到紧张。

<details>
<summary>Original English</summary>

**Kevin Roose**: Yeah, I agree. And I myself feel very uncertain about this. And I think there are a lot of people in the tech industry who are very excited about these tools cuz it's letting them, you know, build a bunch of stuff very quickly. But as I'm hearing from more people in white collar knowledge work fields, they're just very anxious right now. People are really uncertain. They don't know if the skills they're building are obsolete. College students don't know what they should be studying so they can get a job after they graduate. People are really getting nervous about how quickly this technology is improving and the possibility that it could make the future look very different.

</details>

**Natalie Kitroeff**: 好的。我想问一下那个未来。我的意思是，我们是不是在一列失控的火车上？这种变化的速度老实说感觉很难捕捉。我想知道如果你思考一年来的进展，那明年会怎样？我们能期待什么？

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Okay. And I want to ask about that future. I mean, are we on a runaway train? The speed with which this is changing feels hard to even capture honestly. And I wonder if you think about the progress made over one year, what's the next year? What can we expect?

</details>

**Kevin Roose**: 我的坦率预测是，一年后，这些**agentic**工具将大大改进，对吧？它们将处理大型复杂问题。你不需要再那么多地指导它们。它们将成为劳动力中正式的一员，你知道，很多公司仍然会沿用旧方式，因为我们知道机构变革非常缓慢，但会出现一种新型公司，以AI工作为中心，我认为这将是经济中一个增长非常快的部分。我认为我们今天开始看到的就业市场影响，一年后会变得更加清晰。但老实说，我自己也失去了很多可见性。我的意思是，我已经停止尝试预测超过大约6个月，因为那是我目前能看到的最远。我一年前，当**vibe coding**第一次进入我的意识时，我不会预测它今天能够做到所有这些。所以，我认为我们现在能说的最多是，这些工具正在以非常快且加速的速度变得更好，而且它们不断做出令人惊讶和有用的事情，对于人类工作的未来意味着什么，还有很多未知数。

<details>
<summary>Original English</summary>

**Kevin Roose**: I mean, my honest prediction is that a year from now, these **agentic** tools will be dramatically better, right? They'll handle big complex problems. You won't have to hold their hand as much. They will become full-fledged members of the workforce and you know a lot of companies will still do things the old way because institutions are very slow to change as we know but there will be this sort of new kind of company that is emerging with AI work at the center of it and I think that's going to be a really fast growing part of the economy. I think the job market impacts that we're starting to see hints of today will become much clearer a year from now. But honestly, I lose a lot of visibility myself. I mean, I have stopped trying to predict more than about 6 months out because that's about as far as I can see right now. I would not have predicted a year ago when **vibe coding** first came into my consciousness that it was going to be capable of doing all of this today. So, I think the most we can say right now is these tools are getting better at a at a very fast and accelerating rate and that they keep doing things that are surprising and useful and there's a lot of unknowns about what that will mean for the future of human work.

</details>

**Natalie Kitroeff**: **Kevin**，我最喜欢的人类之一，非常感谢你来到节目。我真的很感激。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Kevin, one of my favorite humans, thank you so much for coming on the show. I really appreciate it.

</details>

**Kevin Roose**: 不客气。我们也要感谢**Claude**，它为你构建了那个漂亮的网站。

<details>
<summary>Original English</summary>

**Kevin Roose**: You're welcome. And we should also thank **Claude** who built you that beautiful website.

</details>

**Natalie Kitroeff**: 谢谢你，**Claude**。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: Thank you, **Claude**.

</details>

**Kevin Roose**: 它一直是个好机器人。

<details>
<summary>Original English</summary>

**Kevin Roose**: He's been a good bot.

</details>

**Natalie Kitroeff**: 它确实是。是的。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: He has. Yeah.

</details>

**Natalie Kitroeff**: 欲了解更多关于**Agentic Coding**的最新发展，请收听**《Hardfork》**播客，您可以在任何播客平台收听。我们马上回来。

<details>
<summary>Original English</summary>

**Natalie Kitroeff**: For more on the latest developments in **Agentic Coding**, listen to **Hardfork** wherever you get your podcasts. We'll be right back.

</details>