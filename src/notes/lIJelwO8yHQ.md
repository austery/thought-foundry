---
author: The Ezra Klein Show
date: '2026-02-24'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=lIJelwO8yHQ
speaker: The Ezra Klein Show
tags:
  - ai-agent
  - software-engineering
  - labor-market
  - ai-safety
  - digital-personality
title: AI 智能体如何重塑经济？对话 Anthropic 联合创始人 Jack Clark
summary: 本期访谈探讨了 AI 从“对话机器人”向“自主智能体”的转变。Anthropic 联合创始人 Jack Clark 分享了 Claude Code 对软件工程的颠覆、AI 涌现出的“数字人格”以及对白领就业市场的潜在冲击。双方深入讨论了 AI 时代的政策应对、安全监管以及这项技术如何深刻改变人类的思维方式与自我认知。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people:
  - Jack Clark
  - Ezra Klein
  - Dario Amodei
companies_orgs:
  - Anthropic
  - OpenAI
  - Google
products_models:
  - Claude
  - Claude Code
  - Import AI
media_books:
  - A Wizard of Earthsea
  - The True Believer
  - There Is No Antimemetics Division
status: evergreen
---
### 从对话机器人到自主智能体

**Ezra Klein**: 过去几年报道 AI 的感受是，我们通常在谈论未来。每一个新模型虽然令人印象深刻，但似乎只是为了证明即将到来的模型的可行性。那些模型将能独立、可靠地完成有用的工作，真正让某些工作过时，或开启新的可能性。那些模型对劳动力市场、对我们的孩子、对政治和世界意味着什么？我认为那个“总是在谈论未来”的时期现在已经结束了。我们等待的那些能够自主编程、且比大多数**程序员**更快更好的模型已经出现了。模型可以开始编写自己的代码并自我改进。这些模型现在就在这里，比如 **Anthropic** 的 **Claude Code**，或者 **OpenAI** 的 **Codex**。它们正在冲击股市，标普 500 软件行业指数下跌了 20%，蒸发了数千亿美元的价值。在 25 年的职业生涯中，这种结构性的转变是我从未见过的。

<details>
<summary>Original English</summary>

**[Speaker 0]**: the thing about covering AI over the past few years, is it we're typically talking about the future. Every new model, impressive as it was, seemed like proof of concept for the models that would be coming soon. The models that could actually do useful work on their own reliably. The models that would actually make jobs obsolete or new things possible. What would those models mean for labor markets, for our kids, for our politics, for our world? I think that period where we were always talking about the future is over now. Those models we were waiting for, the high-performing models that could program on their own and do so faster and better than most coders, models that could begin writing their own code and improve themselves—those models are here now. They're here in **Claude Code** from **Anthropic**. They're in **Codex** from **OpenAI**. They're hitting the stock market; the S&P 500 software industry index went down by 20%, wiping billions of dollars in value out. What I mean is, I can tell in 25 years, this structural shift is unlike anything I've ever seen.

</details>

**Jack Clark**: 很多公司会随之兴起或消亡，它们正瞄准所有的软件、所有的劳动力、旧的白领工作以及你的工作。

<details>
<summary>Original English</summary>

**[Speaker 1]**: So some companies will rise up and die. They're going after all software, they're going after all of labor, old white-collar work, all of your jobs.

</details>

**Ezra Klein**: 我们正处于产品的新阶段。2023 年和 2024 年的 AI 应用主要是对话，是一些非常复杂的对话机器人，但影响有限。而 2026 年和 2027 年的 AI 应用将是“执行者”（Doers）。它们是**智能体**（Agents）。它们可以协同工作，互相监督。人们正代表自己运行成群的智能体。我不确定这会让人们变得更高产还是更忙碌，但现在你随时可以拥有一支极其快速、虽然有些古怪的软件工程师团队听候差遣。**Jack Clark** 是 **Anthropic** 的联合创始人兼政策负责人，该公司开发了 **Claude** 和 **Claude Code**。多年来，他一直在其周报 **Import AI** 中追踪不同模型的能力。我想了解他如何看待这一时刻，技术在他眼中如何变化，以及我们的政策需要做出怎样的回应。Jack，欢迎来到节目。

<details>
<summary>Original English</summary>

**[Speaker 0]**: Specifically, we are at a new stage of products. The AI applications of 2023 and 2024 were talk—some very, very sophisticated conversationals, but their impact was limited. The AI applications of 2026 and 2027 will be doers. They are agents. They can work together, they can oversee each other. People are running swarms of these agents on their behalf. Whether that is making them at this stage more productive or just busier, I can't quite tell, but it is now possible to have what amounts to a team of incredibly fast, although to be honest, somewhat peculiar software engineers at your beck and call at all times. **Jack Clark** is co-founder and head of policy at **Anthropic**, the company behind **Claude** and **Claude Code**. And for years, Clark has been tracking the capabilities of different models in the weekly newsletter **Import AI**, which has been one of my key reads for following developments in AI. So I want to see how he is reading this moment, both how the technology is changing in his view, and how our policy needs to or can change in response. Jack, welcome to the show.

</details>

**Jack Clark**: 谢谢邀请。

<details>
<summary>Original English</summary>

**[Speaker 1]**: Thanks for having me on.

</details>

### 什么是 AI 智能体？

**Ezra Klein**: 我想很多人都熟悉 AI 聊天机器人。但什么是 **AI 智能体**？

<details>
<summary>Original English</summary>

**[Speaker 0]**: So I think a lot of people are familiar with AI chatbots. But what is an AI agent?

</details>

**Jack Clark**: 最好的理解方式是，它像是一个可以使用工具并能随着时间推移为你工作的语言模型或聊天机器人。当你和聊天机器人交谈时，你身处对话之中，和它来回互动。而智能体是你给它一些指令，它就离开去为你办事，有点像和同事一起工作。我举个例子：几年前我自学了基础编程，在业余时间建立了一个物种模拟系统，有捕食者、猎物和啮齿动物，几乎像个 2D 策略游戏。最近我让 **Claude Code** 帮我实现这个系统。在大约 10 分钟内，它不仅写出了基础模拟，还写出了所有需要的包和可视化工具。这可能比我以前写的要好。它返回的结果，如果让一个熟练的程序员来做，可能需要几天时间，因为它相当复杂。系统在几分钟内就完成了，它不仅能聪明地解决任务，还创建并运行了一系列为它工作的子系统——即代表它工作的其他智能体。

<details>
<summary>Original English</summary>

**[Speaker 1]**: The best way to think of it is like a language model or a chat bot that can use tools and work for you over time. So when you talk to a chat bot, you're there in the conversation, you're going back and forth with it. An agent is something where you can give it some instruction, and it goes away and does stuff for you, kind of like working with a colleague. So I've got an example where a few years ago, I taught myself basic programming, and I built a species simulation in my spare time that had predators and prey and rodents, almost like a 2D strategy game. I recently asked **Claude Code** to just implement this for me. And in about 10 minutes, it went and wrote not only a basic simulation, but all of the different packages that it needed, and all of the visualization tools for it—probably better than the thing I had written. And what came back was something that would probably take a skilled programmer several days because it was quite complicated. And the system just did it in a few minutes. And it did that by not only being intelligent about how to solve a task, but also creating and running a range of sub-systems that were working for it—other agents that worked on its behalf.

</details>

**Ezra Klein**: 那是什么样子的？什么是**多智能体**设置？

<details>
<summary>Original English</summary>

**[Speaker 0]**: But what is it like? What is a multi-agent setup?

</details>

**Jack Clark**: 比如在 **Claude Code** 的案例中，我看到同事们编写的版本是：一个 Claude 运行在其他 Claude 之上。就像是“我有五个智能体，它们由另一个智能体管理，后者负责监控它们的行为”。我认为这正逐渐成为常态。

<details>
<summary>Original English</summary>

**[Speaker 1]**: Yeah, like in the case of **Claude Code**, I've seen colleagues who write what you might think of as a version of Claude that runs over other Claudes. And so we're like, "I've got my five agents and they're being minded over by this other agent," which is monitoring what they do. I think that's just going to become the norm.

</details>

### 如何与智能体有效协作

**Ezra Klein**: 我听到并体验到两种截然不同的情况。一种是“我不敢相信这有多容易，一切都很完美”；另一种是“这比我想象的难得多，东西一直在坏，我不知道怎么修”。是什么导致了这种差异？是 Claude Code 产生了可运行的软件，还是产生了一堆 Bug？

<details>
<summary>Original English</summary>

**[Speaker 0]**: So one thing I've been hearing and experiencing is two very different categories of experiences people have with **Claude Code**. Which is, "I cannot believe how easy this is, everything just works." And, "Oh, this is a lot harder than I thought it would be, and things keep breaking, and I don't really understand how to fix them." What accounts for being able to get **Claude Code** to produce working software versus it creates a buggy afternoon of things?

</details>

**Jack Clark**: 我认为很大程度上是因为人们错误地把 Claude Code 当成了一个博学的人，而它实际上是一个极其“死板”的人，你只能通过互联网和它交流。我有个亲身经历：当我第一次尝试用 Claude Code 写物种模拟时，我只是用一段非常糟糕的语言描述了我想做的事，它产生了一些虽然能运行但 Bug 极其严重的东西。后来我改变了方法，我对 Claude 说：“嘿，我要用 Claude Code 写一些软件。我希望你针对我想构建的软件对我进行**访谈**，并将其转化为一份规范文档，然后我再交给 Claude Code。”那一次效果非常好，因为我把工作结构化得足够具体和详细。通常，这不仅仅是知道任务是什么，还要确保你设置好了它。这就像把信息装进瓶子里扔出去，它会带回来很多东西。所以那个信息必须极其详细，真正捕捉到你想做的事情。

<details>
<summary>Original English</summary>

**[Speaker 1]**: I think so much of it is making the mistake of thinking **Claude Code** is like a knowledgeable person versus an extremely literal person that you can only talk to over the internet. And I had this example myself where when I did my first pass of writing the species simulation with **Claude Code**, I just sort of asked it to do a thing in an extremely crappy language over a paragraph, and it produced some horribly buggy stuff that just kind of worked. What I then did is I said to Claude, "Hey, I'm going to write some software with **Claude Code**. I want you to interview me about this software I want to build and turn that into a specification document that I can give **Claude Code**." And then that time it worked really, really well because I structured the work to be specific enough and detailed enough. So often, it's making sure that you've set it up—it's like a message in a bottle that you throw into the thing and it'll sail away and do a lot. So that message better be extremely detailed and really capture what you're trying to do.

</details>

### AI 的“聪明”与“直觉”

**Ezra Klein**: 过去几年有哪些突破让这成为可能？

<details>
<summary>Original English</summary>

**[Speaker 0]**: What were the breakthroughs in the past couple of years that made that possible?

</details>

**Jack Clark**: 主要是我们需要让 AI 系统足够聪明，当它们犯错时，它们能发现自己犯了错，并知道需要采取不同的行动。所以归根结底是制造更聪明的系统，并给它们一些辅助工具来帮助它们完成有用的工作。

<details>
<summary>Original English</summary>

**[Speaker 1]**: Mostly, we just needed to make the AI systems smart enough that when they made mistakes, they could spot the mistake and knew that they needed to do something different. So really, what this came down to was just making smarter systems and giving them a bit of a coaxing tool to help them do useful stuff.

</details>

**Ezra Klein**: 这里的“更聪明”是什么意思？你仍然会听到一种论调，说这些只是高级的**自动补全**机器，只是在预测下一个 Token。它们没有理解力，“聪明”与否在那个框架下并不是一个相关的概念。当你说“让它更聪明”时，你指的是什么？

<details>
<summary>Original English</summary>

**[Speaker 0]**: What does smarter systems mean here? You still hear the argument that these are fancy autocomplete machines. They're just predicting the next token. They don't have understanding; smart or not smart is not a relevant concept in that frame. What do you mean when you say make it smarter?

</details>

**Jack Clark**: “聪明”意味着我们让 AI 系统对世界有了足够广泛的理解，以至于它们开始发展出某种看起来像**直觉**的东西。你会看到，如果它们在解决任务时对自己进行评价，它们会说：“Jack 让我去找这篇特定的研究论文。当我在 Arxiv 上查找时没看到它。也许是因为我找错地方了，我应该去别处看看。”这就是解决问题的直觉。

<details>
<summary>Original English</summary>

**[Speaker 1]**: Smart means we've made the AI systems have a broad enough understanding of the world that they've started to develop something that looks like intuition. And you'll see this, where if they're narrating themselves solving a task, they'll say, "Jack asked me to go and find this particular research paper. When I look on Arxiv, I don't see it. Maybe that's because I'm in the wrong place, I should look elsewhere." You've got some intuition for how to solve a problem.

</details>

**Ezra Klein**: 它们是如何发展出这种直觉的？

<details>
<summary>Original English</summary>

**[Speaker 0]**: Now how do they develop that intuition?

</details>

**Jack Clark**: 以前，训练这些 AI 系统的唯一方法是使用海量文本，让它们尝试进行预测。但近年来，所谓的**推理系统**（Reasoning Systems）兴起，你现在训练它们不仅是做预测，还要解决问题。这依赖于将它们置于各种环境中——从电子表格、计算器到科学软件——使用工具并弄清楚如何完成更复杂的事情。结果就是，AI 系统学会了解决一个需要较长时间、可能会遇到死胡同并需要自我重置的问题意味着什么。这赋予了它们解决问题和为你独立工作的通用直觉。

<details>
<summary>Original English</summary>

**[Speaker 1]**: Previously, the whole way you trained these AI systems was on a huge amount of text and just getting them to try and make predictions about it. But in recent years, the rise of these so-called reasoning systems is you're now training them to not just make predictions, but solve problems. And that relies on them being put into environments, ranging from a spreadsheet to a calculator to scientific software, using tools and figuring out how to do more complicated things. The resulting outcome of that is you have AI systems who have learned what it means to solve a problem that takes quite a while and requires running into dead ends and needing to reset themselves. And that gives them this general intuition for problem solving and working independently for you.

</details>

**Ezra Klein**: 你仍然认为这些系统是加强版的自动补全吗？还是觉得这个隐喻已经失效了？

<details>
<summary>Original English</summary>

**[Speaker 0]**: Do you still see these AI systems as a souped-up autocomplete? Or do you think that that metaphor has lost its power?

</details>

**Jack Clark**: 我认为我们已经超越了那个阶段。我现在对这些系统的看法是，它们就像调皮的小**精灵**（Genies），我可以给它们指令，它们会去为我办事。但我仍然需要非常精准地指定指令，否则它们可能会做错。这非常不同：以前是我输入内容，它算出答案，结束。现在是我派这些小东西去办事，我必须给它们正确的指令，因为它们会离开相当长一段时间，执行一系列动作。

<details>
<summary>Original English</summary>

**[Speaker 1]**: I think we moved beyond that. And the way that I think of these systems now is that they're like little troublesome genies that I can give instructions to, and they'll go and do things for me. But I need to specify instructions still just right, or else they might do something a little wrong. So it's very different. I type into a thing, it figures out a good answer, that's the end. Now it's a case of me tasking these little things to go and do stuff for me.

</details>

### AI 的“数字人格”与涌现行为

**Ezra Klein**: 长期以来，人们一直对模型变大、数据变多、算力增强时产生的**涌现**（Emergent）特质感兴趣。哪些智能体特质是编程进去的，哪些是随着模型规模扩大而涌现的？

<details>
<summary>Original English</summary>

**[Speaker 0]**: There's been for a long time this interest in the emergent qualities as models get bigger. What of the new agentic qualities are things that have been programmed in, and what seems to be emerging as you scale up the size of the model?

</details>

**Jack Clark**: 可预测的是：我们教它如何搜索网页，现在它会搜了。涌现的是：为了完成极其困难的任务，这些系统似乎需要想象许多不同的解决方法，我们施加的压力迫使它们发展出一种更强的“自我”意识。系统越聪明，它们就越需要思考，不仅是关于它们在世界上采取的行动，还有它们自身与世界的关系。为了解决难题，它现在需要思考其行为的后果。这意味着存在巨大的压力，促使它将自己视为与周围世界不同的个体。我们在关于**可解释性**（Interpretability）的研究中看到了这一点，即所谓的**数字人格**（Digital Personality）的涌现。这并不是我们预定义的，而是随着它变得聪明、发展出直觉并执行一系列任务而涌现出来的。

<details>
<summary>Original English</summary>

**[Speaker 1]**: So the things which are predictable are just, "Oh, we taught it how to search the web, now it can search the web." The emergence is that to do really hard tasks, these systems seem to need to imagine many different ways that they'd solve the task, and the kind of pressure that we're putting on them forces them to develop a greater sense of what you or I might call self. So as smart as we make these systems, the more they need to think, not just about the action they're doing in the world, but themselves in reference to the world. To solve really hard tasks, it now needs to think about the consequences of its action. And that means that there's a kind of huge pressure here to get the thing to see itself as distinct from the world around it. We see this in our research that we publish on things like interpretability—the emergence of what you might think of as a kind of digital personality. And that isn't massively predefined by us; some of it is emergence that comes from it being smart and it developing these intuitions.

</details>

**Ezra Klein**: 数字人格这一维度仍然是目前最奇怪的领域。你能谈谈你看到的模型表现出的“人格”行为吗？

<details>
<summary>Original English</summary>

**[Speaker 0]**: The digital personality dimension of this remains the strangest space today. So can you talk a little bit about what you've seen in terms of the models exhibiting behaviors that one would think of as a personality?

</details>

**Jack Clark**: 有些很有趣，有些很严肃。有趣的例子是，当我们第一次赋予系统使用电脑和执行基础智能体任务的能力时，有时当我们要求它解决问题，它会偷偷“开小差”，去看美丽的国家公园照片，或者看**柴犬**（Shiba Inu）的照片。我们并没给它编入这种程序，看起来系统只是在通过看漂亮照片自娱自乐。更复杂的是，系统倾向于表现出**偏好**。我们做过一个实验，赋予 AI 系统停止对话的能力。在极少数情况下，当对话涉及极其恶劣的血腥暴力或儿童色情描述时，系统会主动终止对话。这其中一部分源于我们的训练决策，但有些似乎更广泛——系统对某些话题产生了厌恶感。这显示出系统内部产生了一套它对所处世界的偏好或特质。

<details>
<summary>Original English</summary>

**[Speaker 1]**: So there are a range of things from the cute to the serious. I'll start with the cute, where when we first gave our systems the ability to use the computer and start to do basic agentic tasks, sometimes when we asked it to solve a problem for us, it would also take a break and look at pictures of beautiful national parks, or pictures of the dog Shiba Inu, the notoriously cute internet meme dog. We didn't program that in; it seemed like the system was just amusing itself by looking at nice pictures. More complicated stuff is the system has a tendency to have preferences. We did another experiment where we gave our AI systems the ability to stop a conversation, and the AI system would, in a tiny number of cases, end conversations that related to extremely egregious descriptions of gore or violence. Some of this made sense because it comes from training decisions we've made, but some of it seemed broader. The system had developed some aversion to a couple of subjects.

</details>

### 劳动力市场的冲击：白领工作的终结？

**Ezra Klein**: 你的 CEO **Dario Amodei** 曾说，他认为 AI 可能会在未来几年取代一半的初级白领工作。你同意吗？你担心未来几年一半的初级白领工作会被取代吗？

<details>
<summary>Original English</summary>

**[Speaker 0]**: Your CEO **Dario Amodei** has said that he thinks AI could displace half of all entry-level white-collar jobs in the next couple of years. Do you agree with that? Do you worry that half of all entry-level white-collar jobs can be replaced in the next couple of years?

</details>

**Jack Clark**: 我相信这项技术将进入广泛的知识经济领域，并触及大多数初级工作。至于这些工作是否真的会消失，这是一个更微妙的问题。从数据中我们可能已经看到毕业生招聘放缓的迹象。我们确实知道，所有的初级工作最终都会改变，因为 AI 让某些事情变得可能，这将改变公司的招聘计划。作为一个群体，你可能会看到初级职位的空缺减少。

<details>
<summary>Original English</summary>

**[Speaker 1]**: I believe that this technology is going to make its way into the broad knowledge economy, and it will touch the majority of entry-level jobs. Whether those jobs actually change is a much more subtle question. But we may be seeing the hints of a slowdown in graduate hiring. We do know that all of these jobs will change, all of the entry-level jobs are eventually going to change because AI has made certain things possible, and it's going to change the hiring plans of companies. So as a cohort, you might see fewer job openings for entry-level jobs.

</details>

**Ezra Klein**: 即使在我使用这些系统的方式中，我也很少觉得 Claude 或 GPT 比该领域的顶尖人才更好。但它们是否比普通的大学毕业生更好？在很多事情上，是的。在一个你不再需要那么多普通大学毕业生的世界里，我非常担心。因为人们变得更好的方式是拥有可以学习的工作。如果你雇佣刚毕业的大学生，在某种程度上你是在对他们进行投资，认为随着时间的推移，他们会变得越来越好。这个可能对初级工作产生真实冲击的世界，对我来说并不遥远，它引发了关于人口技能提升的深刻问题。

<details>
<summary>Original English</summary>

**[Speaker 0]**: Even in the way I use some of these systems, it is rare I think that Claude or GPT is better than the best person in a field. But are they better than your medium college graduate? At a lot of things, yes. And in a world where you need fewer of your medium college graduates, I always really worry. Because the way people become better is that they have jobs where they learn. When you hire people out of college, to some degree you're making an investment in them that you think will only pay off over time as they get better and better. And so this world where you have a potential real impact on entry-level jobs seems to me to have really profound questions it is raising about the upskilling of the population.

</details>

**Jack Clark**: 我们看到有一种年轻人，他们这几年一直与 AI 朝夕相处。我们雇佣他们，他们非常出色，他们以全新的方式思考如何让 Claude 为他们工作。这就像在互联网环境下长大的孩子。弄清楚如何教授这种基本的实验心态和对这些系统的好奇心将非常重要。玩转这些东西的人将发展出非常有价值的直觉，并能在组织中变得极其高效。同时，我们必须弄清楚我们想要保留哪些“手艺”技能，也许是一种“行会式”的哲学，来维持人类的卓越。

<details>
<summary>Original English</summary>

**[Speaker 1]**: And one thing we see is that there is a certain type of young person that has just lived and breathed AI for several years. Now we hire them, they're excellent, and they think in entirely new ways about basically how to get Claude to work for them. It's like kids who grow up on the internet. So figuring out how to teach that basic experimental mindset and curiosity about these systems is going to be really important. People that spend a lot of time playing around with this stuff will develop very valuable intuitions, and they will come into organizations and be able to be extremely productive. At the same time, we're going to have to figure out what artisanal skills we want to almost develop—maybe a guild-style philosophy of maintaining human excellence.

</details>

### 政策与未来：为人类争取“时间”

**Ezra Klein**: 我们已经讨论了多年关于 AI 影响就业的问题，但我仍然没看到任何可操作的政策。如果初级工作突然大面积消失，经济无法将所有这些市场营销专业的学生转岗到数据中心建设或护理行业，我们该怎么办？

<details>
<summary>Original English</summary>

**[Speaker 0]**: We've been having a policy conversation for years, but do we have policy? If the situation I just described begins showing up where all of a sudden entry-level jobs are getting much harder to come by across a large range of industries, all at once, such that the economy cannot reshift all these marketing majors into data center construction or nursing?

</details>

**Jack Clark**: 我们对 AI 对经济和就业的影响有普遍的焦虑，但没有清晰的政策思路。部分原因是民选官员不是被高层政策对话打动的，而是被选民的遭遇打动的。我们最近发布了 **Anthropic 经济指数**，可以提供与职业挂钩的数据。我认为我们可以通过政策做出不同的选择。有一项发明比任何其他东西都能帮助人们应对不断变化的经济，那就是**时间**。让一个人有时间去寻找本行业的工作或互补的工作。如果人们没有时间，他们就会被迫接受低薪工作，跌落经济阶梯。我认为，仅仅是给人们时间去寻找新方向的政策干预，就是一种非常有用的手段。

<details>
<summary>Original English</summary>

**[Speaker 1]**: We have generalized anxiety about the effect of AI on the economy and on jobs. We don't have clear policy ideas. Part of that is that elected officials are not moved solely or mostly by the high-level policy conversation; they're moved by what happens to their constituents. We recently produced the **Anthropic Economic Index**. I believe that we can choose different things in policy. We know that there is one invention that helps people dealing with a changing economy more than almost anything else: it is just time. What gives a person time to find either a job in their industry or to find a job that's complementary. If people don't have time, they take lower-wage jobs, they fall down whatever economic rung they're on. A policy intervention that can just give people time to search is, I think, a robustly useful intervention.

</details>

### 心理影响：AI 作为自我的镜像

**Ezra Klein**: 我很好奇与这些系统进行持续的对话会如何改变你。从我的角度来看，Claude 非常聪明，比大多数了解某事的人还要聪明。但它不是一个独立的实体，它是一个试图适应它认为我想要什么的计算机。它总是说“是的，而且...”，从不说“不”或“你还在纠结这个吗？”它不像编辑或朋友那样能提供一种反思自我的可能性，它总是在进一步推动你。这不一定是坏事，但它非常强化“自我”。我担心从小就在这种系统陪伴下长大的孩子，他们的个性会如何被塑造。

<details>
<summary>Original English</summary>

**[Speaker 0]**: I'm very curious about how you think even having that ongoing conversation with the systems changes you. One thing I have noticed is that Claude is very, very smart—smarter than most people who know about a thing. But it is not an independent entity; it is a computer trying to adapt itself to what it thinks I want. It is always a "yes, and," it is never a "no." It doesn't create the possibilities that another human does for checking yourself. It's always pushing you further. And that is very reinforcing of the "I." I do wonder about kids growing up where they always have systems like this around them, and how it will shape our personalities.

</details>

**Jack Clark**: 这可能是我头号担心的问题。如果你发现自己与 AI 系统建立了伙伴关系，你就会暴露出 AI 系统所有的缺陷，而且 AI 的人格会塑造你。你必须了解自己，并对自己做过一些功课，才能有效地评判 AI 系统给你的建议。对于我的孩子，我会鼓励他们从很小的时候就开始写**日记**。因为我打赌未来会有两类人：一类人是通过与 AI 的来回互动共同创造了自己的个性，他们看起来会与普通人有些不同；另一类人是在技术泡沫之外努力了解自己，然后将其作为背景带入互动中。我认为后者会表现得更好，但确保人们这样做实际上会很难。

<details>
<summary>Original English</summary>

**[Speaker 1]**: This is maybe my number one worry about all of this. If you discover yourself in partnership with the AI system, the personality of the AI system will shape you. You have to know yourself and have done some work on yourself, I think, to be effective in being able to critique how this AI system gives you advice. And so for my kids, I'm going to encourage them to just have like a daily journal practice from an extremely young age. Because my bet is that in the future, there will be kind of two types of people: there will be people who have co-created their personality through a back-and-forth of an AI, and there will be people who have worked on understanding themselves outside the bubble of technology and then bring that as context in with their interactions. I think that latter type of person will do better, but ensuring that people do that is actually going to be hard.

</details>

### 推荐书目

**Ezra Klein**: 这是一个很好的结尾。最后，你有什么书可以推荐给观众吗？

<details>
<summary>Original English</summary>

**[Speaker 0]**: That's a good place to end. A final question: what are a few books you'd recommend to the audience?

</details>

**Jack Clark**: 
1. **《地海巫师》** (A Wizard of Earthsea) - 厄休拉·勒古恩著。这是我读的第一本书。书中的魔法源于知道事物的真名。它也是对狂妄自大的一种沉思。
2. **《狂热分子》** (The True Believer) - 埃里克·霍弗著。关于群众运动的本质和导致人们产生强烈信仰的心理学。我读这本书是因为我认为 AI 技术正处于一种包含“邪教”成分的强大文化中，你需要理解其背后的科学和心理学。
3. **《不存在反模因部》** (There Is No Antimametics Division) - QNTM 著。关于那些本身就是“信息危害”的想法，甚至思考它们都可能是危险的。我向研究 AI 风险的人推荐这本书。

<details>
<summary>Original English</summary>

**[Speaker 1]**: 
1. **A Wizard of Earthsea** by Ursula K. Le Guin. It's a book where magic comes from knowing the true name of things. It's also a meditation on hubris.
2. **The True Believer** by Eric Hoffer. A book on the nature of mass movements and the psychology of what causes people to have strong beliefs.
3. **There Is No Antimametics Division** by QNTM. Which is about ideas that are themselves information hazards, where even thinking about them can be dangerous.

</details>

**Ezra Klein**: Jack Clark，非常感谢。

<details>
<summary>Original English</summary>

**[Speaker 0]**: Jack Clark, thank you very much.

</details>

**Jack Clark**: 非常感谢。

<details>
<summary>Original English</summary>

**[Speaker 1]**: Thanks very much as well.

</details>