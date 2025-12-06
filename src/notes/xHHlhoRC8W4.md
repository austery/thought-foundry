---
author: The Pragmatic Engineer
date: '2025-07-23'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=xHHlhoRC8W4
speaker: The Pragmatic Engineer
tags:
  - developer-productivity
  - ai-measurement
  - media-hype
  - developer-experience
  - structured-rollout
title: 超越代码生成：AI 在软件工程中的真实价值与衡量之道
summary: AI 真的会取代程序员吗？本期内容深入探讨了 AI 对软件工程的真实影响，揭穿了媒体的过度炒作。嘉宾 Laura Tacho 指出，AI 的最大价值并非代码生成，而在于调试、重构等耗时任务。有趣的是，研究发现 AI 可能会因自动化了开发者享受的编码部分而降低工作满意度。文章最后提出了一套基于“使用率、影响、成本”的数据驱动框架，帮助工程领导者衡量 AI 的真实投资回报，并分享了 Booking.com、Workhuman 等公司的实践案例，强调了结构化落地和数据驱动决策的重要性。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
people:
  - Laura Tacho
  - Greg KH
  - Jesse Adams
  - Rob Fitzpatrick
  - Marian Nestle
companies_orgs:
  - DX
  - Booking.com
  - Workhuman
  - Forbes
  - CIO magazine
  - Gizmodo
  - OpenAI
  - Wall Street Journal
  - Microsoft
  - Google
  - Meta
  - Asana
  - Ramp
  - Tecton
  - Vercel
  - Dropbox
  - AWS
  - Twilio
  - Indeed.com
  - Shopify
  - DORA
products_models:
  - GitHub Copilot
  - Claude
  - Dependabot
  - Cursor
  - Cody
  - Granola
  - Q Developer Pro
media_books:
  - The Pragmatic Engineer
  - Write Useful Books
  - Unsavory Truth
status: evergreen
---
### 开发者满意度悖论
主持人：节省下来的时间会带来什么影响？作为一名开发者，这对我们意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What happens with the time saving as a developer? What would that mean for me as a developer?</p>
</details>

Laura：当 **DORA**（DevOps Research and Assessment: 一个旨在通过数据和研究帮助组织提升软件交付和运营绩效的项目）研究这个问题时，他们发现许多开发者实际上感到更不满意了，因为 AI 加速的是他们喜欢做的部分。结果，剩下的更多是他们不喜欢的工作：琐事、会议和行政工作。当我读到这个结论时，我停下来思考了很久。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When Dora researched this question, what they found was that many developers were actually feeling less satisfied because AI is accelerating the parts that they enjoy. And so what was left over was more stuff that they didn't enjoy. The toil, the meetings, the administrative work. It gave me pause when I read that.</p>
</details>

### AI 工具对软件工程的真实影响
主持人：AI 工具对软件工程的实际影响究竟是什么？Laura Tacho 是 **DX**（Developer Experience: 一家致力于通过数据衡量开发者生产力的公司）的首席技术官，甚至在 2022 年 AI 工具成为主流之前，他们就已经在从事这项工作了。今天我们讨论为什么媒体上关于 AI 的大多数炒作都因过度简化而产生了误导，以及为什么我们工程师有责任澄清事实。我们会探讨在 Booking.com 和 Workhuman 等公司推广 AI 开发工具的实际数据影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is the actual impact of AI tools and software engineering? Laura Taco is a CTO at DX, a company with a mission to measure developer productivity with data and has been doing so even before AI tools went mainstream from 2022. Today we discuss why most of the hype in the media about AI gets things wrong thanks to oversimplification and why the burden is on us engineers to set the record straight. The actual data of the impact of rolling out AI tools for development at companies Booking.com and Workhuman.</p>
</details>

开发者们报告说，他们最节省时间的用例实际上不是 AI 代码生成，而是更快地调试棘手的堆栈跟踪。我们还会谈到 AI 工具的悖论：使用 AI 工具辅助编码如何可能让开发者对工作感到更不满意，因为我们实际上喜欢编码。以及许多其他有趣的话题。如果你是一位对 AI 现状的数据感兴趣，并希望在媒体炒作中保持清醒的领导者或工程师，那么这一期就是为你准备的。如果你喜欢这个播客，请在任何播客平台和 YouTube 上订阅。好的，Laura，欢迎来到我们的播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How developers report that their most timing saving use case is not actually AI code generation but debugging tricky stack traces and doing it faster. The paradox of AI tools, how using AI tools to help with coding can make developers less satisfied with our jobs because we actually like to code and many more interesting topics. If you're a lead or engineer interested in data about what works today with AI and how to stay on the ground with all the hype in the media, this episode is for you. If you enjoy the podcast, please subscribe to it on any podcast platform and on YouTube. All right, so Laura, welcome to the podcast.</p>
</details>

Laura：嘿，Gary，很高兴再次见到你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey Gary, good to see you again.</p>
</details>

### 媒体炒作的真相：AI 真的会取代程序员吗？
主持人：我经常听到也看到的一件事是，AI 过去、现在以及将来都一直被过度炒作。当我看到媒体的头条新闻时，坦白说，有些标题听起来很荒谬。有些标题让作为开发者的我们感到害怕，有些则感觉像是天方夜谭。我来给你读几个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to kick off, one thing I hear a lot and I I see it as well is how AI is and has been and remains overhyped. Uh so when when I look at media headlines, you know, some of the headlines are are are just frankly they they sound ridiculous. Uh there's some headlines around how actually let me read you a a few. These are some are a bit scary as developers and some just feel like like o over the moon.</p>
</details>

这是《福布斯》的一篇：“程序员的工作有风险吗？AI 对编程未来的影响。”《CIO》杂志：“AI 编码助手——告别初级开发者。”Gizmodo：“OpenAI 刚刚发布了一款编码工具，旨在‘帮助程序员’（括号里写着）取代他们的工作。”可能软件开发将永远改变。这些都不是软件工程师会认为技术上很厉害的出版物，但像 Gizmodo 和《福布斯》这样的媒体，决策者会读，而且这些文章经常被转发给开发者。你对主流媒体的这些说法有什么看法？当你与开发者和工程领导者交谈时，他们对此有什么反应？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's one from Forbes. Are coders jobs at risk? AI's impact on the future of programming. A CIO magazine. AI coding assistants wave goodbye to junior developers. A gizmodo. Open AAI just released a coding tool to quote help programmers in brackets replace their jobs. probably software development may never be the same. Now these are all like you know they're not like tech like not publications where software engineers would say like okay they're like amazing with tech but you know Gizmo and Forbes like decision makers read them uh and they often get forwarded to developers or or you see them what what is your take on what we're hearing with mainstream media and and as you're talking with developers and engineering leaders how are what are they telling you about these?</p>
</details>

Laura：这些标题之所以成为标题，是有原因的，对吧？它们能带来点击量和互动，它们是耸人听闻的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean these headlines are headlines for a reason, right? They get clicks, they get engagement, they're sensational,</p>
</details>

主持人：它们通常是广告支持的媒体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they're ad supported media usually.</p>
</details>

Laura：没错。我认为，总的来说，媒体素养和数据素养都非常重要，这方面也不例外。所以每当我看到那样的标题，我总是会追溯到钱的来源。比如，谁在为此付费？就像你说的，这是广告支持的媒体。报道的是谁？他们是供应商吗？他们在销售 AI 工具吗？我会问所有这些问题。你也应该问所有这些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. And I think anytime I think in general media literacy is really important, data literacy is really important and this is no different. So whenever I see a headline that like that, I always trace it back to the money. Like who's getting paid? As you said, it's ad supported media. Who's being covered? Are they a vendor? Are they selling an AI tool? like I ask all of these questions. You should be asking all of these questions as well.</p>
</details>

主持人：他们是否为报道付费？有时是这样。即使他们不直接付费，他们也可能付钱给公关公司，由公关公司向需要产出内容的杂志推销这些想法。例如，这些杂志靠广告收入运营，所以它们常常会发表这些肤浅的文章，这些文章在某种程度上是为它们预先写好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are are they paying for coverage? Sometimes they are. And even when they're not paying, they might be paying PR agencies who pitch these ideas to magazines and the magazines who need to do output. So they, for example, they're being paid by ads. They will often produce these shallow articles which are kind of pre-written for them.</p>
</details>

### 过度简化之下的误解与工程师的沟通重担
Laura：顺便说一句，这是一个有趣的事实。我认为 AI 领域存在一个挑战，那就是将某件事简化到没有开发背景的人也能理解的程度，可能会过度简化到不正确的地步。我最近读到的一个例子是在《华尔街日报》上，他们谈到公司有“AI 员工”，这些“AI 员工”有“直线经理”（我在这里用了很多引号）和“公司凭证”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the way, this is a fun fact. I think there's a challenge in AI which is that simplifying something to the point where it can be understood by someone who doesn't have a background in developer in development can oversimplify to the point of being incorrect. And so one recent example that I read was actually in the Wall Street Journal and they talked about how um you know companies have AI employees and these AI employees had line managers. I'm using a lot of air quotes here line managers and company credentials.</p>
</details>

当然，你可以把 Co-pilot、Claude 或任何**代理工作流**（Agentic workflow: 指 AI 系统能够自主规划、执行并适应一系列任务以达成复杂目标的工作模式）的“直线经理”看作是分派或验证工作的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, sure. You could think about co-pilot or, you know, claude or any agentic workflow as having a line manager being the person who's dispatching the work or, you know, verifying the work.</p>
</details>

主持人：实例化那个代理的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can think about it instantiated the agent. Yeah.</p>
</details>

Laura：是的。或者说到“公司凭证”，这是否意味着它有权限向 GitHub 提交代码？我的 Dependabot 能开一个 pull request，这算它有公司凭证吗？所以，是的，我能理解在新闻报道的世界里，这算是准确的，但这真的反映了现实吗？有没有工程经理在招聘 AI 代理作为员工，并给它们公司邮箱地址？这根本不是现实情况。我认为这种过度简化可能非常耸人听闻。现在每个人都想从 AI 的热潮中分一杯羹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Or like company credentials. Does that mean it has access to commit to on GitHub? Like does my dependabot have company credentials because it can open a pull request? And so, yeah, I could see in a journalistic world that is accurate, but is that really a reflection? Is there a engineering manager out there hiring AI agents as employees and giving them company email addresses? Like, that's just not really what's happening. And I think the oversimplification can be really sensational. And everyone wants a piece of the AI hype right now.</p>
</details>

所以，当我读到这些时，我想到的是这些事情。我认为这很不幸，因为它给工程领导者带来了巨大的负担，他们需要去教育那些可能没有背景知识和经验来辨别真伪的业务同事。这些工具的真正局限性是什么？现在什么是可能的？不管我们喜不喜欢，我们的工作就是成为那个能够翻译和解释这些事情的人。因为如果我们不这样做，最终会伤害到我们自己和开发者，因为在这个炒作周期中没有人是赢家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, those are the things that I think about when I read this. I think it's really unfortunate because it puts a big burden on engineering leaders to educate their business counterparts who maybe don't have they just don't have the background knowledge and experience to understand what is authentic and what is not authentic. What are the real limitations of these tools? What is possible now? And you know it is our job like it or not to be that person who can translate those and explain it because ultimately it hurts us and it hurts developers when we don't do that because nobody wins in this hype cycle.</p>
</details>

开发者会觉得“这太花哨了”。这是导致采用率低的另一个原因。他们会想：“这东西不可能像说得那么好用。”他们试了一次，结果生成了一堆意大利面条式的代码，然后就觉得“这纯属扯淡”。而在另一边，高管层面，有 CEO 会说：“嘿，我听说微软 30% 的代码是用 AI 写的。我们为什么不这么做？”那些标题暗示微软生产环境中运行的代码有 30% 是由 AI 编写的。这完全不现实。我们从合作的任何公司都没有数据支持这种说法。我们与数百家公司合作，从未见过与那种耸人听闻的说法相符的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Developers are like this is super gimmicky. That's another reason for lower adoption. Like this is super gimmicky. There's no way that this is going to work as good as it says. They try it once. It gives them spaghetti code and they're like this is just a load of BS. And then on the other side, on the executive side, there's CEOs saying like, "Hey, I heard that Microsoft is writing 30% of their code with AI." Like, why aren't we why aren't we doing that? You know, those headlines suggest that 30% of Microsoft's code that's running in production was authored by AI. That is not at all realistic. We don't have data to support that from any of the companies that we work with. And, you know, hundreds of companies, we've never seen data consistent with that kind of sensational claim.</p>
</details>

### 警惕误导性指标：“AI 生成代码”的统计陷阱
主持人：谷歌几个月前也有类似的说法，大概是 25%。后来我和谷歌的一个人聊，他提到，他们确实有很多 AI 集成，比如 AI 代码审查、自动补全等等。他们内部有全套工具栈，就像任何使用 Cursor 等工具的人一样，只是这是内部版本，用谷歌的数据训练的。这位工程师说：“我很确定他们是把接受的自动补全建议算作 AI 生成的。”但这看起来很奇怪，因为我只在它有意义的时候才接受，我是在阅读并理解它。他们说：“我们不知道这个数字从哪里来的。”他们甚至没告诉内部员工。而且，接受建议真的算是 AI 生成的吗？技术上讲是，但即使在 AI 出现之前，我们也可以说很多代码是机器生成的，因为自动补全在预测你输入的类名的前两个字母方面一直很出色。我们的代码是机器生成的吗？技术上讲，是的。所以我同意，这很令人困惑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At Google they had I think 25% a few months ago similar claim. And then I talked with someone at Google and they actually brought up saying like you know when they're like yeah we have all these like AI integrations AI code review we have the autocomplete like they have they have pretty much yeah as as usual you know this because you also talk with Google but uh they have the whole internally they have the the stack that's available for anyone using cursor etc just the internal version which is kind of trained on on Google's uh data and this engineer was saying like I'm pretty sure they're counting accepted completions as AI generated. But that just seems weird because like yeah, I accept it when it makes sense, but I'm I'm like reading it and I'm I'm reading it out and then they're like, we we don't know where this number comes from. Like who's measuring it? They didn't even tell them. And and you know, is acceptance really AI generated? Well, technically yes, but even before AI, then we could have said it was machine generated a lot of your code because autocomplete has always been very good at predicting, you know, at your start to type out the first two letters of a class. Was our code machine generated? Technically, yes. But so yes, I agree it's confusing.</p>
</details>

Laura：是的，你关于接受率的观点正中要害。很多炮制这些头条新闻数字的研究，看的就是“接受的建议数量”，但这根本不是衡量业务影响的好方法，甚至也无法说明这些代码是否最终进入了生产环境。从“我接受了建议”到“它现在正在生产环境中运行”之间，绝对没有直接的联系。所以这相当具有误导性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I think your point about acceptance rate is exactly it. That's a lot of these studies that are producing these numbers for headlines are looking at accepted suggestions and that's just not a great measure of the first of all the business impact, but also even if that code made it to production. There is absolutely no there's not a line between I accepted the suggestion and now it's running in production. So that's that's quite misleading.</p>
</details>

我想，我们可以说“30% 的 pull requests 得到了 AI 的辅助”，这在大多数公司可能都是事实。但这与“30% 的代码由 AI 编写”在影响程度上是完全不同的。我们也可以说，在大多数公司，或者说大多数大公司，100% 的 PR 都经过了某种机器人检查，对吧？比如 Linter 已经运行过了，静态分析也运行过了。这已经持续多年了，它能捕捉所有明显的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think you know we could say are 30% of pull requests being assisted by AI like I think that is probably true at a majority of companies. And so that's just a really different magnitude of influence than 30% of code being written by AI. We can also say that 100% of of PRs at most companies or like most larger companies have been kind of robotically checked, right? Like the llinter has been run on them. Static analysis has has run on them. This has been going on for years and and it and it catches all the obvious things.</p>
</details>

主持人：你能想象那样的标题吗？“Acme 公司只将机器人读过的代码发布到生产环境。这是软件工程的终结吗？”就像你说的，我们当然可以为 **CI/CD**（Continuous Integration/Continuous Delivery: 持续集成/持续交付，一种旨在通过自动化构建、测试和部署流程来频繁、可靠地交付软件的实践）想出一个耸人听闻的标题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I mean can you imagine that headline like Acme Corp only ships code to production that's been you know read by robots? Is this the end of software engineering? like you know we could certainly come up with a sensational headline to just talk about CI/CD as you said</p>
</details>

### 如何衡量 AI 的真实影响：一个三维框架
主持人：你和很多工程领导者交流，对吧？在公司里，工程领导、技术负责人这类人。这些天，你收到的关于 AI 最常见的问题是什么？你从这些工程领导者那里感受到了什么样的情绪？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you talk with a lot of engineering leaders right like on a on a companies engineering leaders tech leads those kind of folks these days what are some of the most common questions you get related obviously to to AI and what kind of sentiment are you gathering when it comes to to AI from from these same engineering leaders?</p>
</details>

Laura：是的，我想我得到的最常见的问题是“我应该做什么？”作为工程领导者，我们习惯于在很多事情上进行模式匹配。比如，如果我试图现代化我的 CI/CD 管道，我可以去和另一个工具的客户交流，看看他们在做什么，他们是如何现代化的，看看他们前后的对比。但在 AI 领域，我们没有这种参照，因为它对每个人来说都是前沿工作。我认为这既令人兴奋，又让人在手握预算却不知道该花在哪里时感到非常痛苦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think the most common question I get is what should I be doing? I think as engineering leaders, we have operated in a space where we can pattern match in a lot of things, right? Like if if I'm trying to modernize my CI/CD pipeline, I can go talk to another customer of a different tool and see what they're doing and how they've modernized and look at their before and after. And in AI, we just don't have that because it's frontier work for everyone. And I think that's very exciting but also very distressing when you're holding the bag of money and you have to figure out where you should spend that money.</p>
</details>

这真的很难。所以问题是“我该做什么？”另一个问题是“我如何衡量它，以及如何证明我现在做的决定是正确的？”因为这是每个工程领导者都要向他们的执行团队和董事会负责的事情。你如何投资 AI？你能给我看结果吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's really tricky. So what should I do? Um the other thing is you know how do I measure it and how do I prove that I've made the right decisions right now? Because that is something that every engineering leader is being held to account by their exec team by their board. How are you investing in AI and can you show me the results?</p>
</details>

主持人：正是针对这一点，我们到底该如何衡量 AI 的影响？实际上，在《The Pragmatic Engineer》中，我们做了一些深入的探讨，其中一次就是和你一起，我们找出了所有行不通的方法，比如代码行数或单一指标，然后我们开始在像 **SPACE 框架**（SPACE framework: 一个由微软研究人员提出的多维度框架，用于衡量和理解开发者生产力，涵盖满意度、性能、活动、沟通和效率五个方面）和后来的 DEVEX 框架这样的东西上取得进展。在这里，有哪些衡量标准是可行的，或者可能对开发者生产力或仅仅衡量 AI 效率有效？你看到了哪些行之有效的方法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know tapping exactly on on this how how can we actually measure the impact of AI actually in the pragmatic engineering we did some deep dives actually we did one of them with you on how you know we figured out all the things that don't work like lines of code or the single metrics and we started to make progress with things like the space framework later the devx framework what are measurements here that work might work even for developer productivity or just measuring the efficiency of of AI what have you seen you know work out</p>
</details>

Laura：是的，棘手之处在于，正如你所说，开发者生产力本身就是一个非常困难的问题，当我们在此之上加上 AI 时，我们肯定没有降低复杂性。所以，那些已经投入大量精力去理解开发者体验和开发者生产力的公司，现在处于更有利的位置来理解其影响，因为他们有了一个基线，了解他们的团队和组织在之前是如何运作的，然后我们就可以采用实验的方式，看看 AI 的影响是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah what's so tricky is that as you said devel developer productivity is just that's it's a really hard problem on its own and when we add AI on top of it we certainly don't reduce complexity here. So you know companies that had invested a lot in understanding developer experience and developer productivity are in a better spot right now to understand the impact because they have that baseline of understanding of how their teams and organization operated before and then we can just do experimentation style. We can look at what the impact of AI is.</p>
</details>

对于任何感觉迷失在森林里，不太明白在讲述 AI 影响的故事时应该关注哪些衡量标准的领导者，我和 DX 的联合创始人 Abby 刚刚一起制定了一个新的 AI 衡量框架。我会在屏幕上分享一下，我们可以一起讨论。这是 DX AI 衡量框架。根据我们与数百家公司的实地经验——这些公司从 AI 还是大家眼中一丝微光的时候就开始使用，到现在进行全面推广并看到一些非常可观的成果——我们建议从**使用率（Utilization）、影响（Impact）和成本（Cost）**这三个方面来看待它。这三个领域结合起来，将为你提供一个关于 AI 运作情况的非常完整的画面，告诉你下一步该做什么，以及如何在你的组织中讲述这个影响的故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think for any leader who is out there sort of feeling like lost in the forest, not quite understanding what are even the measurements to look for when it comes to telling the story about the impact of AI. Abby, who's the co-founder of DX and I have just put together a new AI measurement framework um which I'll just share on the screen. We can kind of talk through it. This is the DX AI measurement framework. And what we recommend based on our field experience working with hundreds of companies who have been working with AI from, you know, the the infancy, the very beginning when AI was a glimmer in everyone's eyes to now sort of full scale rollouts where they're seeing some pretty impressive um results from using AI. Want to look at it across utilization, impact, and cost. And these are really the three areas that will give you together a really complete picture about how AI is working or not working, what you should do next, and then how you can tell that story about impact in your organization.</p>
</details>

主持人：是的。因为我猜最终每个人都在寻找“影响”，对吧？它应该产生一些 tangible 的东西。我这样感觉对吗？作为一个软件工程组织，你要么是构建了更多的东西，要么是构建了更好的东西，要么是创造了更多的收入。如果它对这些或者相关的事情没有任何帮助，那我到底在做什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Because I I guess in in the end like everyone's looking for like impact, right? Like it it it should result in something tangible. Am I feeling this right? in terms of either you're like as a software engineering organization either you're like building more stuff building better stuff or generating more revenue or like somehow if if it doesn't help with any of those or or some related things then you know what am I even doing right</p>
</details>

Laura：是的，我认为作为一个行业，我们一直在寻找产出指标来量化最终结果。一开始，以及你会在很多头条新闻中看到的，都是关于用 AI 可以产生的代码数量。但这与我们所知的关于开发者生产力、开发者体验的一切都脱节了。代码数量并不真正意味着业务影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah and I think you know as an industry we've looked for output metrics to kind of quantify that end result and at the beginning and actually what you'll see in a lot of the headlines is about um the quantity of code that can be produced with AI. But this is really disconnected from everything we know about developer productivity, developer experience. Like quantity of code doesn't actually mean business impact.</p>
</details>

因此，当我们考虑衡量 AI 的影响时，我们需要在整个生命周期中跟踪它，但也要真正专注于最终结果，正如你所说，那就是更多的收入，为开发者减少认知负荷，更好的开发者体验，更多的时间，更多的时间去创新。这些事情非常重要，而仅仅关注像接受率这样的指标，并不能告诉你整个故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so when we think about measuring the impact of AI, we need to sort of track it across the life cycle, but also really stay focused on the end result, which is, as you said, it's more revenue, it's reduced cognitive load for developers, it's a better developer experience, it's more time, more time to innovate. These things are really important and focusing on something like acceptance rate for example just by itself isn't really going to tell you the whole story there.</p>
</details>

### 代码行数的谬误：为什么说源代码是一种负债？
主持人：我不知道我们是否会经历一次关于开发者生产力知识的快速回顾，把过去 20 年学到的东西压缩到几年里。我还记得，当第一批衡量开发者生产力的产品出现时，它们开始衡量像每个开发者的代码行数，然后是每个开发者的平均提交次数。第一批产品说：“看，这很好。”然后，作为一个行业，我们开始说：“这纯属扯淡。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wonder if we're going to have a bit of a speedrun of what we've learned about developer productivity over let's say 20 years compressed in a few years because I still remember that when the first kind of developer productivity products came out measuring they started to measure things like lines of code per developer and then they looked at number of commits per developer on average and you know the first product said like this is this is good look at this and then as an industry we started to say that's that's BS</p>
</details>

抱歉，但那个向生产环境推送最多代码或写最多代码行数的开发者，可能不是你最好的开发者，因为他们可能只是在做样板文件的工作，更新框架。实际上，他们可能只是在修复自己制造的 bug，因为他们提交了太多 bug。所以，我觉得我们大概在 10 年前就有过这样的对话，每个人都同意代码行数不是最好的指标。事实上，一些最好的开发者有时甚至不写代码，他们删除代码。但现在我们又回到了这里，说：“哦，是的，AI 生成了很多代码行数，所以它应该很有生产力。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like I'm sorry the developer who pushes the most code to production or writes the most lines of code might not be your best developer because they might just be doing boilerplate stuff, updating frameworks. Uh actually, they might just be fixing their own bugs because they ship so many of them. So I I I feel but we've had that conversation let's say maybe like 10 years ago and everyone agreed like you know like lines of code is not not the best metric. In fact, some of the best developers sometimes don't even write lines, they like delete them. But now we're now back here like, oh yeah, AI generates a lot of lines of code, therefore it should be productive.</p>
</details>

Laura：是的，我有一个比较有争议的观点是，源代码是一种负债。这听起来可能有争议，但当人们仔细思考时，他们会意识到，是的，它确实是。现在我们处在一个可以轻而易举地产生大量源代码的世界。那么，当原本一行可以写完的东西现在写成了五行，这对生产力和业务影响到底意味着什么？我们真的想用生成的代码行数来衡量 AI 的影响吗？我当然不想。我们不推荐这样做。我们没有在我们的框架中包含接受率，这是有充分理由的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I think one of my more controversial opinions is that source code is a liability. I think it sounds controversial and then when people think about it, they realize that yeah, it actually is. And now we're in a world where it is trivially easy to produce a tremendous amount of source code. And so what does that actually mean for productivity and business impact when what could have been written in one line is now written in five lines. Do we really want to measure AI impact in terms of lines of code generated? I certainly don't. We don't recommend it. We did not include acceptance rate in our framework for good reason.</p>
</details>

我认为它确实能提供关于工具是否适合其用途的洞察。但是，当我们从更广泛的角度衡量业务影响、对开发者体验的影响以及对业务的影响时，接受率只是故事中微不足道的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it does give insight into whether the tools are fit for purpose. But when we're looking at broadly measuring business impact and the impact on developer experience and the impact on the business, acceptance rate is just such a tiny part of the story.</p>
</details>

主持人：你说的接受率，是指开发者接受了多少百分比或多少行代码的建议，比如 Tab 键的建议或 AI 输出的其他内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by acceptance rate, you mean like what percent or how many lines did the developers say accept the tap suggestion or whatever the AI is spitting out.</p>
</details>

Laura：是的。我们可以用它来判断它是否只是在吐出意大利面条式的代码和不准确的建议。如果那样的话，接受率会很低，我们可以用这个信号来理解这些工具对于用例来说不够健壮。但如果我们只看“哦，开发者接受了 95% 的建议”，这并不能告诉我们任何关于它是否提高了他们的速度，是否节省了他们的时间，是否会帮助我们更快地创新的信息。这些才是我们真正想看的东西，也是我们在这个 AI 衡量框架中包含的内容，而不仅仅是那些关于接受率或代码行数的细粒度测量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So this we can use that to figure out if it's just spitting you spaghetti code and you know suggestions that are not accurate then acceptance rate is going to be low and we can use that as a signal to understand that okay these tools are not sufficiently robust for the use cases but if we're just looking at oh well you know developers are accepting 95% of the suggestions that that doesn't really tell us anything in terms of is it increasing their velocity is it saving them time is it going to help us innovate faster. Those are the things that we actually want to look at and that's what we've included in this AI measurement framework, not necessarily just those granular measurements of acceptance rate or lines of code.</p>
</details>

### AI 的真正价值：最节省时间的并非代码生成
主持人：我很高兴听到这种更接地气的做法，我想这也有助于你不是一个 AI 供应商，你的目标是找出真正有效的方法。你和 booking.com 做了一个有趣的研究/案例分析，关于他们如何使用 AI。你发现了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm I'm I'm glad to hear a little bit of like kind of more grounded uh approach and I guess it helps that you're not you're not an AI vendor and you're you're not you know you're I guess your goal is to try to figure out like what actually works. Now you did an interesting research/case study with booking.com uh and how they use AI. What did you find there?</p>
</details>

Laura：是的。对于 booking 来说，他们真正意识到的是，采用率是获得更好结果的关键。他们发现，那些采纳工具的开发者——从非用户转变为定期但持续的用户，并将人群从不使用推向每日、每周使用——在这些开发者身上，他们看到了最大的好处。所以他们做了一些非常有组织的、全公司范围的努力来推动采用，比如设立答疑时间（office hours）、举办研讨会和培训。他们将采用率提高到了 65% 的开发者每周或每天使用这些工具，这实际上远高于行业中位数 50%，而前四分位是 60%。所以根据行业基准，他们做得相当不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So for for booking what they really realized was adoption is the key to getting a better result. What they found was that the developers who were adopting the tool so going from non-user to periodic but consistent users and moving you know moving the population up from from not using into daily weekly usage. that was where they were seeing the most benefit. So they did some very concerted organizationwide efforts around enablement for adoption things like office hours, things like you know workshops and trainings and they got their adoption up to 65% of developers using these tools on a weekly daily basis which is actually well above the median which is 50% industrywide and the top cortile is 60%. So they're doing quite well AC you know according to that industry benchmark.</p>
</details>

主持人：所以，我在这里停一下，以便我理解。Booking 的想法是，我们希望尽可能多的开发者使用这些工具，比如 GitHub Copilot 或他们有的任何其他 copilot、聊天工具等，至少每周使用一次。为此，他们会进行培训，领导层会说：“嘿，请使用它”或“试试看”。他们设立了答疑时间，有专门的团队负责。即使做了所有这些，我们说大约 65% 的开发者每周使用它。这意味着还有 35% 的人仍然觉得：“不，我很好。我还是按我以前的方式来。”对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so just to pause here just so I understand. So booking was like okay we'd like as many devs as possible to use these tools GitHub copilot or whatever or any other co-pilot that they had the the chat etc let's say on a weekly basis and we're going to do training on this will leadership will say hey please use it or like try it out and they did office hours they had teams on this and even after doing this we're saying that about 65% of devs use it weekly you know or maybe daily but but mostly weekly So that means 35% are still like, "No, I'm good. I'm just going to, you know, do do what I did before." Right.</p>
</details>

Laura：是的，出于各种原因。但那 65% 的数字，有趣的是，它仍然高于行业 P75（第75百分位数）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. For for a variety of reasons, right? But that 65%, what's interesting is like that's still above the 20, you know, above the P75 industrywide.</p>
</details>

主持人：我在这里停顿是因为我认为有两种听众。这取决于你所处的环境。如果你在创业公司环境，或者你是一个早期采用者，你会说：“嗯，你为什么不用呢？”好像每个人都在用。我不会一直用，也不会在所有事情上都用，但它就在那里。我知道什么时候用，什么时候不用，并且会每天都用。然后可能有些人会说，为什么会有人用这个？但有趣的是，在一个试图让每个人都使用的公司里，即使他们做了很多其他地方没做的事情，比如培训、赋能、投资、与像你们这样的公司合作，对我来说，这个数字只有 65% 仍然很有趣。你从那 35% 的人身上学到了什么？是什么阻碍了他们，或者他们持怀疑态度是正确的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I I'm just pausing here because I think there's two types of people, right, who are who are listening as well. It depends on what environment you are. But if you're in a startup environment or or you're just like an early adopter, you'll be like, "Well, why would you not use it?" like everyone using it. Like I'm not going to use it all the time, not for everything, but like yeah, it's there. Like I I know when when to use it, when to not, and they'll use it daily. And then there might be some people saying, why would anyone use this? But it's interesting that in a company that is trying to say like, okay, let's get everyone to use it. They to me it still feels interesting how it's only 65% when they do all these things that a bunch of places don't do from the training from the enablement from the investing from partnering with uh with you know companies like you so what have you learned about that 35% like why what is either holding them back or or are they right to be skeptical</p>
</details>

Laura：是的，我认为对我来说最大的收获是，不一定是因为这些人是怀疑论者，不想使用任何新技术。其中一些原因仅仅是组织没有向他们提供许可证。他们想用，但许可证不可用。我不是说 booking 的情况是这样，我想澄清这一点，但我在许多组织中都看到了这种模式的重复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah I think the biggest learning for me is that it's not necessarily that these individuals are skeptical leites who don't want to use any new technology. Some of it is just that the organization doesn't make a license available to them. They would like to they would like to use it but the licenses aren't available. And I'm not suggesting that's the that's the case for booking. I want to make it clear but I have seen that pattern repeated in many organizations.</p>
</details>

所以当我们考虑使用率时，在我们的框架中，我们建议查看日活跃用户或周活跃用户的数量。如果你使用 DX 来衡量，你实际上可以将其看作是总人口的百分比，然后你可以查看许可证在你的人口中的分布情况，因为可能想用的人还用不了，因为他们没有许可证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have to when we when we think about utilization you know in our framework we recommend looking at the number of daily active users or weekly active users. If you use DX to measure that, you can actually look at that as a percentage of your total population and then you can actually look at where the licenses line up to be across your population because it might be that the people who would like to use it can't yet because the licenses are not available to them.</p>
</details>

一些公司在实验阶段会说：“好吧，我们买 500 个 Copilot 许可证，500 个 Cody 许可证等等。”所以可用的许可证池是有限的。因此，不可能出现 100% 的开发者都在使用的情况。他们根本没有投入足够的钱为 100% 的开发者提供许可证。所以我会说，这是我们看到采用率不是 100% 的一个相当大的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, some companies right now as they're experimenting will say, "Okay, we're going to get 500 licenses for Copilot, 500 licenses for Cody and whatever." So there's a limited pool to pull from. And so there's no scenario where a 100% of or of developers could be using it. Just they simply haven't invested the money in making licenses available to 100% of their developers. And so I would say that's a fairly big reason where we see not 100% development or 100% adoption.</p>
</details>

另一件事，你在你的 LeadDev 演讲中也提到了，对于某些服务、组件或产品领域，由于代码的非常新颖或“绿地”（green field）性质，它就是不那么有效。我们可以把这看作一个光谱，一端是写 Terraform 文件或用 YAML 写一些定义非常明确的东西，另一端是做一些以前没人做过的事情。AI 在处理有很多结构和模式的东西时表现得非常出色。但正如你举的那个医疗创业公司的例子，他们希望保持匿名，因为他们甚至不想公开说他们不用 AI，因为 AI 对他们不起作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I think the other thing, and you covered this in your lead dev talk, is that for certain services, components, product areas, it's just not that effective because of the very novel or green field nature of the kind of code. So like we can think about this on a spectrum and one is like writing Terraform files or like one is one is writing something in YAML in like a really defined way like for Terraform and the other one is like doing something that no one has ever done before. AI is amazingly excellent at stuff that has a lot of structure and a lot of pattern. But when you know you use the example of that healthcare startup who wanted to remain nameless because they didn't even want to go on record saying that they don't use AI because it just doesn't work for them.</p>
</details>

所以你可以想象，在像 Booking、Meta 或 Dropbox 这样的大公司里，总会有一些开发者，这些工具还不能很好地为他们服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you know you can imagine at a company as big as Booking or as big as Meta Dropbox, there are going to be pockets of developers who just aren't well served yet by the tools.</p>
</details>

主持人：我也能想到一些情况，这些工具确实会完全失效。比如你试图用一种非常具体、简洁或高性能的方式做某件事，这通常需要理解整个结构并进行微小的调整。例如，我想到我和一个稳定的 Linux 分支维护者 Greg KH 聊天。我问他如何使用 AI，他说他们其实不怎么用，只是用它来做一些工具。但如果我看每一个提交到 Linux 内核的 commit，都只有几行代码，而这几行代码是经过深思熟虑的，并且需要尽可能简洁。性能、所有这些事情都很重要。对于那些用例，尤其是在大公司，我可以想象，如果你在一个平台团队，正在优化你的安卓应用的 **P95 性能**（P95 performance: 指 95% 的请求或操作的响应时间都低于某个特定值，是衡量系统性能稳定性的关键指标），你可能会用它来头脑风暴，但最终你做的改动在代码行数上非常小，但在影响上却非常大，而且很多工作都关乎测试、实现以前没有过的优化或发现新的关联。所以我在想，这其中是否也有一部分是这个原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, and I can also see cases where these tools just really fall flat where you're trying to do something very very specific and in a concise or very performance uh effective way which is usually about understanding the whole structure making small tweaks. For example, if I think of I was talking with a stable Linux branch maintainer, Greg KH. Uh I was saying like how do you use AI and he was like well I mean like we don't really they use it for tools but if I look at every Linux commit to the kernel it's a few lines and those lines have been thought for so long and they need to be as concise as possible. you know performance matters all those things matters and for those use cases especially in big companies I can imagine that if you're in a platform team you're optimizing the P95 performance of your Android app this is like you might use it for brainstorming or here and there but but in the end the the changes you make are so small in terms of lines of code but they're so large in in impact and so much of it is about testing about wins that have not been made before or seeing connections So I I wonder if some of that is also that.</p>
</details>

Laura：是的，我想给你看这个，因为我认为你刚才提到的那一点非常精确：最大的收益可能不在于代码生成，但你仍然可以用它来头脑风暴，可以用它来分析错误。这是公司可以提供的赋能和培训的一部分，以提高采用率和影响力。我们对 180 多家公司做了一项研究，我们观察了那些通过 AI 节省了大量时间的开发者，并试图了解他们到底在做什么。有趣的是，**中循环代码生成**（mid-loop code generation: 指在开发流程中，开发者提供部分上下文或框架，由 AI 填充或完成具体实现的过程）是节省时间的第三大用例，但实际上，堆栈跟踪分析和重构现有代码比中循环代码生成节省了更多时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I want to show this to you because I think that exactly that point that you made that maybe the biggest gain is not in code generation but in like you could still use it for brainstorming, you can still use it for error analysis. This is part of that enablement and training that companies can offer in order to increase adoption, increase impact. We did a study of 180 plus companies and we looked at the developers who were saving a a a serious amount of time with AI and we tried to understand like what are you actually doing and interestingly enough code generation like midloop code generation is the third highest use case for saving time but actually stack trace analysis and refactoring existing code we're saving more time than the midloop code generation.</p>
</details>

这对公司和平台工程团队来说也非常重要，因为我认为普遍的想法是，“我们给开发者一个 Co-pilot 许可证，然后就指望他们自己搞定。”我们很多人都会直接去用中循环代码生成，因为那是被谈论最多的。

<details>
<summary>Veiw/Hide Original English</summary>
<p class="english-text">and so this is also reallyant important for companies and platform engineering teams to understand because I think the idea you know is like well we give our our developers a license for co-pilot and then just expect them to kind of figure it out and a lot of us go to midloop code generation because that's kind of what is mostly talked about</p>
</details>

主持人：是的，大多数演示，最明显的东西，对吧？在我们谈论之前，我就是这么想的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah most demos the most obvious things right like that's what I thought about until we talked about</p>
</details>

Laura：这是最明显的事情。但是像输入 100 行堆栈跟踪分析然后问“这为什么会发生？给我一个能修复这个问题的 diff”这样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's the most obvious thing um but things like you know putting in a 100 lines and stack trace analysis and being like what why is this happening? Give me like give me a diff that would fix this problem</p>
</details>

主持人：或者“给我四个可能的想法”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or or give me four possible ideas.</p>
</details>

Laura：完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Totally.</p>
</details>

主持人：然后其中两个可能是我没想到的，现在我就可以去研究了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then two of them might be things that I didn't think about and now I can go off and research.</p>
</details>

Laura：是的。所以 AI 能帮助的用例种类是没有上限的，尤其是当它有很好的上下文并且能非常透彻地理解你的代码库时。代码文档、头脑风暴和规划。单元测试是一个 AI 能很好服务的领域，任何定义非常明确的东西都行。但我真的很惊讶地听到堆栈跟踪分析是节省时间最多的，而不是中循环代码生成，因为正如你所说，后者是最明显的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And so there's there's kind of like an there's no ceiling on the different kinds of use cases that AI can help, especially when it has really good context and understands your codebase really thoroughly. code documentation, brainstorming and planning. Unit tests are an area that um are really well served by by AI, anything that's like very well defined. Um but I was really surprised to hear about state stock trace analysis being the top times saver and not necessarily being midloop code generation because as you said it's the most obvious thing.</p>
</details>

主持人：当你说“中循环”时，这代表什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when you say mid loop, this is like what does mid loop stands for?</p>
</details>

Laura：是的，就是我可以写出我想要写的函数的框架，给它输入和输出，然后说“给我完成我的函数，为我补全这个东西”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, kind of I can write out the the scaffold of whatever function I want to write and I can give it the the input and the output and then just say give me finish my function make it complete this um thing for me.</p>
</details>

主持人：这真的很有趣，因为它有点违背了主流叙事，即使是在开发者中间。正如你所说，AI 擅长什么？代码生成。它能更快地生成代码。因为我认为这是我们看到的，它确实能吐出代码，而且速度超乎常人，你不可能写得那么快。但如果我们看到主要的用例是堆栈跟踪、重构，好吧，代码生成还在那里，然后还有其他东西，这可能表明，是的，正如你所说，也许我们的想法有点错了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this is this is really interesting as well because I feel it goes a little bit against the mainstream narrative even with developers as you said that what is AI good for code generation it generates code faster because I think that's what we see right it does spit it out it can do it like it is superhuman in term of speed like you you cannot write this fast but if we see that these are the main use cases stack trace refactoring okay code generation is still down there and then we have the other stuff maybe it it suggests that yeah as you say Maybe we're thinking a bit wrong.</p>
</details>

而且我在想，这是否也会影响到那种“现在任何人都可以成为开发者”的说法。你不需要是开发者也能写软件。但如果这些工具真正帮助的是像堆栈跟踪分析和重构这样的事情，除非你是开发者，否则你不会用这些功能。所以，也许这些工具实际上对专家，也就是知道自己在做什么的专业软件工程师来说，要好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I wonder if this might also impact how, you know, there's this narrative that now anyone can be a developer. You don't need to be a developer to like write software. But if these tools really help with like let's say stack trace analysis and refactoring, unless you're a developer, you're not going to use that. And so, so maybe these tools are actually a lot better for experts, you know, professional software engineers who know what they're doing.</p>
</details>

Laura：对我来说，像堆栈跟踪分析或代码重构这样的事情的关键点在于，它们是关于节省时间，而不是与工具的互动。我的意思是，第一，打字速度从来都不是开发的瓶颈。但现在我们有了所有这些比我们打字还快的代码生成。这很棒。但我仍然需要时间来审查那些代码，在认知上确保我理解它并且它是准确的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know to me the sticking point about things like stack trace analysis or um refactoring code is that it's about time savings and not interaction with the tool. And what I mean by that is like number one typing speed has never been the bottleneck in development. But now we have we have all this code generated faster than we can type. That's great. But it still takes me time to review that code to, you know, cognitively make sure that I understand it and that it's accurate.</p>
</details>

审查它需要时间。所以节省的时间，并不是因为我们不用打字而节省了时间。很多时间我们只是重新分配给了审查或其他非打字的代码编写部分。对于堆栈跟踪分析，我们实际上是完全消除了解析这个巨大输出、试图找出问题所在、然后在代码中“探险”的苦差事。所以，说“给我四个例子”或者“最可能的原因是什么”，这确实是一个净正向的时间节省。我可以完全跳过我本来会花 45 分钟敲键盘试图解决问题的过程。而如果我用它来生成代码，是的，是更快，但我也必须投入时间审查那些代码以确保其准确性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Time to review it. And so the time savings, it's not that we're saving time because we don't have to type. A lot of that time we're just reallocating to reviewing or other parts of code authoring that's not typing. For stack trace analysis, we're actually just eliminating the toil completely of parsing through this, you know, huge output trying to figure out what's going wrong and then going spelunking in the code. And so that is truly like a a net positive time saving to say, you know, give me four examples or like what's the what's the most likely cause of this. I can just totally leaprog that whole 45 minutes that I would have spent banging my head against my keyboard trying to figure out. Whereas if I'm using it for code generation, yeah, it's faster, but I also have to invest time reviewing that code to make sure that it's accurate,</p>
</details>

主持人：审查它，迭代它。你可能会重构它。很多时候，我认为作为开发者，我们知道它会生成一些东西，但如果你有自己的编码风格或者编码方式，你会调整它，重写它，改变它，它会出错，等等。所以，好的。所以这说得通。回到第一个，它确实节省了时间。当它节省了时间会发生什么？比如说，到现在为止，我通常需要花很多时间分析堆栈跟踪，我被卡住了 15 分钟，但随着经验的增长，这个时间会减少到 10 分钟，然后是 5 分钟，现在我是一个高级工程师，我一看就知道问题所在。但是节省下来的时间会发生什么？作为一名开发者，这对我和我的组织意味着什么？我能早点下班吗？我现在会有更多空间去帮助别人，开始思考一些更大的事情，而不是日常琐事和一些战略性的东西吗？你看到了什么情况？因为这并不新鲜，对吧？开发者节省时间，我们也在其他工具上看到过。最大的问题是，组织会想：“哦，如果我的每个开发者平均节省 10% 的时间，我就可以解雇 10% 的人。”这是邪恶大公司的想法。或者我可以不招聘，我的生产力就能提高 10%。这是业务部门的想法，但现实并非如此，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">reviewing it, iterating on it. You might refactor it. Often times, you know, I think as developers, we know that it generates something, but if you have some coding styles or if you have a way of coding, you will tweak it, rewrite it, change it, it gets it wrong, etc. So, okay. So, so this makes sense. Going back to that, the the first one where like, okay, it truly saves time. What happens when it saves time? Like let's say okay I until now I've usually had to spend a bunch of time analyzing the sack trace and I was stuck on it for you know 15 minutes at first but by the way with experience it would have gone down to like 10 and then five and now I'm a senior engineer and boom I look at it I know uh what that is but what happens with the time saving like as a developer like what would that mean for for me as a developer or me as an organization do I just you know clock out earlier uh will I now have a bit more space to help out others to start to think about like bigger things instead of the day-to-day and you know some strategic stuff where have you seen it because this is not new right like developers saving time you know we've seen this with with other tools as well uh the big question is the organization thinks like oh if my developers spend 10% time each of them on average I can either fire 10% of them this is the you know the big evil corporation or I can just not hire and my productivity goes up 10% this is what the business thinks, but it's not really what happens, does it?</p>
</details>

### 开发者满意度悖论：为何 AI 会降低工作乐趣？
Laura：这绝对不是现实情况。我认为需要记住的一件事是，即使在最好的一天，开发者也不会花 80% 的时间在编码上。我认为行业平均水平大概是 25%。AWS 有一项研究表明，一个普通的 AWS 工程师只有 20% 的时间在编码。所以，当我们把 AI 应用到编码任务上时，我们从一开始就只在处理那 20% 的时间。然后当我们节省了那 20% 时间中的 10%，这实际上并不等于“哦，我们可以一夜之间推出 10 个新产品线”。这不现实。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's definitely not what happens. I think one thing to keep in mind is that on the very best day, developers are not spending even 80% of their time coding. I think the industry average is like 25%. There was a study at AWS that an average AWS engineer only spends 20% of their time coding. And so when we apply AI to the coding tasks, we're only working with 20% of that time to begin with. Then when we save 10% of that time, that actually doesn't that doesn't amount to, oh, we can, you know, ship 10 new product lines, you know, overnight, that's just not realistic.</p>
</details>

不过，我认为事情在这里变得有点奇怪。那么，节省下来的时间去哪了？因为我们可能会想：“哦，这对开发者来说会很棒。他们节省了时间，可以把这些时间重新投入到偿还技术债或其他事情上。”但当 DORA 研究这个问题时，他们发现许多开发者实际上感到更不满意了，因为 AI 加速的是他们喜欢做的部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is though where things get a little bit weird. So what happens with that time? Because we would like to think like, oh, this is going to be really great for developers. They're going to be saving, you know, they're saving time. They can reinvest that time in tech.rement repayment or you know other stuff. When Dora researched this question, what they found was that many developers were actually feeling less satisfied because AI is accelerating the parts that they enjoy.</p>
</details>

结果，剩下的更多是他们不喜欢的工作：琐事、会议、行政工作。所以这是一个有趣的结果，来自他们几个月前发布的 AI 工程指南。当我读到这个时，我停下来思考了，因为我一直坚信，AI 节省的时间不会来自编码任务。我们都从这个最明显的地方开始，这是有道理的，但在组织层面上，我们创造代码的速度从来都不是瓶颈。瓶颈一直是围绕着它的所有其他事情。而现在，当我们为喜欢编写代码的人拿走或加速了代码编写过程，这会产生一些影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what was left over was more stuff that they didn't enjoy, the toil, the meetings, um you know, the administrative work. And so that was an that was an interesting result and that's from their um their guide on AI engineering that came out a couple months ago. It gave me pause when I read that because I thought I've always had the very strong conviction that AI time savings is not going to come from the coding task. It makes sense that that's the obvious place where we all started but organizationally how fast we can create code has never been the bottleneck. It's been everything around it. And now when we take away or make that faster the code authoring process for people who like to author code that has some impact.</p>
</details>

主持人：我想，当我还是一个开发者，后来成为一个有开发者的经理时，我思考过：作为开发者，什么样的一天是美好的一天？我认为，一个普通的美好的一天是这样的：我来上班，和大家打个招呼，也许聊点什么。通常我们没有会议。我脑子里有一个明确的目标，是一个我想完成的、有挑战性的任务。也许是昨天剩下的，或者是我今天刚开始的。我进入了心流状态，我把它搞定了，让它工作起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I I I think you you know when I was thinking when I was a developer and then was a manager with developers like what is a good day as a developer and I think you know an average good day like again there can be different days but it was like I come into work you know we say hi to people you know maybe we talk about something usually it's it's we don't have meetings I have a clear goal in mind it's something challenging that I I want to complete some maybe it might have been from yesterday or I'm now just starting as fresh. I get into the zone. I, you know, get it together. I get it working.</p>
</details>

我把它清理干净，它工作得很好，太棒了。我提交了代码，或者测试了它，检查了它，我提交了一个 pull request，然后我完成了。如果这发生在下午 2 点，而且这是一个有挑战性的任务，本应花我 8 小时，但我 4 小时就完成了，我为此感到非常自豪。它能用，它做到了。也许我可以再清理一下。然后我去帮助一些人。当我有这样的一天时，这就是美好的一天。而糟糕的一天则相反。我来上班，有件我需要做的事情，然后我被打断了。我去开会，然后我试着回去工作，现在又一个会议，或者我终于回到了工作中，但现在我被卡住了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, I clean it up. It's working. It's amazing. I commit it or I test it. I check it. I I I put up a pull request and I'm done. And you know, if this happens at 2 p.m. And it was something challenging. It should have taken me eight hours, but I got it done in four and I'm really proud of it. Uh, it it works. It does. Maybe I could clean up. And then I I help out some people. when I had that like it's been a good day and the bad day is the opposite. It's like I get into work, I have this thing that I need to do and I get interrupted. I go to a meeting and it and I try to go back and now another meeting or I I finally get back into it but now I'm just stuck.</p>
</details>

它比想象的更复杂，我回到家，当我试图入睡时，我还在想这个该死的东西，我真的想打开我的笔记本电脑，我睡不好。你知道，在 AI 出现之前，我们做过一些事情，比如“无会议日”，把会议集中起来，给人们进入心流的机会，因为当你进入心流状态一天，或者一段时间，那种感觉很好，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's more complex and I go home and I'm when I'm trying to falling asleep, I'm still thinking about this goddamn thing and I actually want to open my laptop and I don't sleep well. You know, we used to do things before AI uh just like things like no meeting days and like bunching meetings to give people the chance to be in the flow because there is something about that when when you are in the flow for a day like for for some time. It's it's it's good like right like yeah</p>
</details>

Laura：是的，回到那个关于衡量的问题，我们如何衡量 AI 的影响？这是我个人非常好奇的一个领域，那就是 AI 是否能让我们更好地管理中断？它是否能帮助开发者保持心流状态？它是否能减少认知负荷？这些数字不一定会体现在每个开发者节省的时间上，但会体现在开发者体验的其他方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is, you know, going back to that question about measurement and how do we measure the impact of AI? This is one area that I'm personally very curious about, which is does AI allow us to manage interruptions better? Does it help developers stay in flow state? Does it reduce cognitive load? And these are numbers that aren't going to show up necessarily in time savings per developer, but will show up in other areas of developer experience.</p>
</details>

因为一个假设是，使用 AI 工具，当你必须切换任务时所付出的“税”（代价）会减少。比如，你从 10 点到中午是专注时间，然后 12:00 到 12:30 有个会议，然后你可以继续专注。你知道，切换前后的代价。拥有一个 AI 编码助手是否能减少你重回心流状态所需的时间？因为你基本上有一个“替身”或者说一个“结对程序员”，他为你保持和持有上下文，让你更容易从你离开的地方继续。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because one hypothesis is that with the use of AI tooling, the tax that you pay when you have to switch tasks, so going from, you know, um maybe you have from 10 to noon focus time and then you have a meeting from 12:00 to 12:30 and then you can focus for the rest. You know, that tax beforehand and the tax after. Does having an AI coding assistant reduce the amount of time that it helps you or that it takes you to get back into flow because you have basically a body double um or a pair programmer so to speak who is holding context and keeping context for you and it's easier for you to pick up where you left off.</p>
</details>

这很难仅凭工作流数据系统地衡量，这可能是我在谈论衡量框架时没有强调的另一件事，但在衡量 AI 工具的影响时，将自我报告的指标与系统和工作流指标相结合是绝对必要的，因为它确实对编写体验有影响。其中一些我们无法从我们的系统中观察到。我们实际上必须与开发者交谈才能弄清楚。这是一个领域。所以，谈论变革能力、开发者体验测量、AI 工具的客户满意度（CSAT），这些都是非常重要的部分，因为如果我们只看工作流工具本身，我们可能会错过关于 AI 如何影响代码编写体验或其他软件开发生命周期部分的重要信号。所以我们需要一个更健壮、更全面的方法来跨组织进行衡量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is really difficult to measure systemically with only workflow data alone, which is maybe another thing that I didn't emphasize when I talked about the measurement framework, but combining self-reported metrics with system and workflow metrics is absolutely essential when measuring the impact of AI tools because it does have an impact on the authoring experience as well. And some of that we cannot observe from our systems. We actually have to talk to developers in order to figure it out. And this is one area. So talking about um you know change competence, developer experience uh measurements, seesat for the AI tools, those are all things that are really important parts because we might actually miss important signal about how AI is impacting the code authoring experience or you know other parts of the software development life cycle but we we might miss them if we're only looking at the workflow tools themselves. So we need to have a more robust comprehensive way of measuring across the organization.</p>
</details>

### 为 AI 优化架构：清晰的接口与面向未来的文档
主持人：让我们谈谈什么是有效的，你看到了哪些有效的方法。我们之前谈过，一些真正善用 AI 的团队开始对他们的代码库进行一些架构上的改变，并做出一些架构决策，使其更容易被代理模式等读取。你看到了哪些有效的方法，进展如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let let's talk about what is working and what you've seen working. And one of the things that we we previously talked about is how some of the teams who are actually making pretty good use of of AI are starting to make some architectural changes to their codebase uh and and make some architectural decisions to to make it easier to read for like let's say agentic modalities. what have you seen work and and how how is this coming along?</p>
</details>

Laura：是的，这里有两大类事情我会谈到。一个是架构本身，另一个是架构和系统的可发现性。架构本身方面，我从我自己的交谈中看到的，只是轶事，是领导者们重新致力于服务之间建立清晰的接口。我会说这可能是最常被提及的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there's two um kind of two broad things that I'll talk about here. And one is the architecture itself and then the other is sort of the discoverability of the architecture and of the system. And there's a lot more going on there. On the architecture itself, what I have seen just sort of anecdotally from my own conversations is leaders re recommitting to like clean interfaces between services. I would say that's probably the top thing that comes up into um</p>
</details>

主持人：很好。这能从这件事中产生，真是件好事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nice. That that's kind of a nice thing to come out of this.</p>
</details>

Laura：太棒了。我很高兴看到这一点。我认为，我们可以把 AWS 的“一切皆 API”作为一个模型，当你的系统也像那样运作时，接口如此清晰和明确，代理模型就更容易使用你的代码库，因为边界被更清晰地定义了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. I love to see it. I think um you know we can think about sort of AWS's everything is an API as a model here like when your own system systems operate like that the interfaces are so clear and well defined it becomes easier for agentic models to use your codebase because the boundaries are more clearly defined and so</p>
</details>

主持人：顺便说一句，对人类也是如此，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">by the way also for humans right like</p>
</details>

Laura：对人类也是如此。这就像，效果非常好。关于“对人类也是如此”这一点，引出了关于文档的有趣话题。因为这是我看到越来越普遍的转变。我实际上在你去蒙古的时候在阿姆斯特丹，否则我们本可以再吃一次牛排。但当我在阿姆斯特丹时，我与大约 45 位其他工程领导者进行了一次炉边谈话，很快进入问答环节，问题是：“我们应该为 AI 写文档还是为人类写文档？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">also for humans yeah it's kind of like it's like it works really great um and so that actually that point also for humans is the interesting point about documentation Um because this is the shift that I'm seeing more often. I was actually in Amsterdam while you were in Mongolia otherwise we could have had another stake. Um but while I was in Amsterdam I did a fireside chat with about 45 other engineering leaders and you know very quickly into Q&A the question was should we be be writing documentation for AI or for humans?</p>
</details>

我对这个问题的回答是，是的，两者都需要。但这是我看到在过去六周左右开始兴起的一件事。人类的文档通常有视觉依赖，比如会有一张截图，需要一种叙事流程。而对于 AI 来说，有代码示例非常好，不能有视觉依赖。那样效果不好，因为开发者不一定会去文档页面或看 YouTube 教程来学习如何使用你的东西。他们会在他们的 IDE 中与 AI 助手互动，并尝试实现它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And my question my answer to that question is yeah both. Um, but here's one thing that I've seen kind of pick up, I would say, in the last six weeks. So, human documentation often has like visual dependencies. It'll be a screenshot of something. It needs this sort of like narrative flow. Whereas for AI, it's really good to have the coding examples. There need can't be visual dependencies. uh it doesn't work great that way because developers aren't going to a documentation page necessarily or watching a YouTube tutorial to see how to use your thing. They're going to cla interacting, you know, in their IDE with an AI assistant and trying to implement it.</p>
</details>

所以文档需要为 AI 准备好，这样开发者才能以最好的方式获得他们需要的信息。我认为像 Vercel 这样走 AI 优先路线的公司，他们有非常非常扎实的 AI 优先文档示例。因为它是一个飞轮效应：他们有很棒的文档，然后当一个开发者试图实现这个东西时，他们实际上能得到一个好的建议，并能成功地在他们的 IDE 中用任何编码助手完成。然后那个编码助手就有更多关于什么实际有效的数据，这会不断地加强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so documentation needs to be there for AI so that that developer gets the information they need in the best way. And I think companies that are going AI first like Verscell clerk for example they have really really solid examples of AI first documentation because it's a flywheel like you know they have great documentation then when a developer is trying to implement this thing they actually get a good suggestion and can do it successfully from within their ID with whatever coding assistant then that coding assistant has more data about what actually works and it just keeps reinforcing it.</p>
</details>

所以对于内部开发团队，比如平台团队，这是一个很好的思考模型：你如何制作文档，让人们在需要的时候——现在是在编辑器里，而不一定是在你的文档页面上——得到他们需要的信息。然后对于外部开发者，如果你在做一个生态系统中的开发者工具，这就是人们发现和实现你的工具的方式。开发者接触和使用工具的方式真的不同了。所以这是我看到公司思考或已经开始尝试改变他们架构服务以及记录服务方式的最大变化，以使它们在这个 AI 辅助编码的世界里更好地工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for internal development teams like platform teams, this is a great model to think about like how can you make documentation that is getting people the information they need at the moment they need it which is now in the editor not in your document you know your documentation necessarily. And then for external developers if you're making a dev tool that's like out there in the ecosystem this is the way that people are discovering your tool and implementing it. um there, you know, the just the way that pe that developers are are coming across tools and using them is really different. So that's been the biggest way that I've seen companies think about or already start trying to change the way that they architect their their services, but also document their services to make them work better in this sort of AI assisted coding world.</p>
</details>

主持人：这很有趣。我也喜欢你的想法，即这也为那些为开发者构建 API 或工具的创业公司创造了很多机会。如果你让它们易于使用，并且对 AI 爬虫或任何这些工具的摄取更友好，你以后可能会获得更多用户或为你的用户扫清障碍。因为我猜，未来，比如两年后，开发者会说：“好吧，我想用这个技术创建一个项目。”作为开发者，你会指定这个技术。如果不指定，它会默认使用别的。但如果你在这个技术上遇到太多麻烦，最终，你知道，会有这样一个学习过程，你会选择一个你熟悉的技术，你知道它能用，你知道如果你卡住了，解决起来更容易。所以，这些事情对于我们这些专业软件工程师来说，仍然很重要：技术、SDK、供应商的可靠性、可维护性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's interesting. I also like your thinking of how this also creates a bunch of opportunities for uh especially company startups who are building APIs or things for developers to use. If you make it easy for them to use and also make it a bit more friendly for AI crawlers or or any any of these to ingest, you know, you might be getting more users later on or unblocking your users because in the end I'm I'm going to guess like in in the future like you know two years from now developers will be like all right I want to create a project using this technology. As a developer, you will specify this technology. If not, it'll default to whatever. But if you have too much trouble with the technology eventually, you know, there's going to be this learning thing, you will choose a technology that as as today the one that you're familiar with, you know, it works, you know, if you get stuck, uh, it's easier to do. So, these things will remain important. technology SDK vendor vendor uh you know reliability maintainability these things are going to remain important for professional software engineers that you know we are and we will be</p>
</details>

Laura：我喜欢你说的“这对人类也有好处”，而且“这对人类有好处，对 AI 也有好处”。在开发者体验和我所处的这个世界里，有很多领域，“对开发者有好处”和“对业务有好处”是一个维恩图的交集。而现在，“对 AI 代理有好处”和“对人类有好处”也是一个交集，比如服务之间更清晰的边界。我认为这是一个非常有趣的操作空间。就好像我们需要 AI 作为一种商业上的“当头棒喝”，告诉我们：“嘿，我们从 AI 投资中得不到那么多回报，因为现在我们的钱包是敞开的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I like what you said about this is also good for human beings and also it's good for human beings and it's good for AI like there's so many areas about developer experience and the kind of the world that I operate in where like what's good for the developer and good for the business is a circle that ven diagram and this is you know what's good for the AI agent and good for the human being is also a circle like clearer boundaries between services. I think that's such an interesting space to operate in. It's like we needed AI as sort of like the business kick in the pants of like hey we're not going to get as much out of our investment in AI because now our wallets are open.</p>
</details>

以前是“好吧，读手册吧”，或者“绕过糟糕的工具”。但现在有了重大的财务投资，情况就不同了。并不是说开发团队不是一项重大的财务投资，但我认为容忍度是不同的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before it was like well read the manual um kind of work around bad tooling but now that there's significant financial investment around it. Not that development teams aren't a significant financial investment, but I think the tolerance is different, you know.</p>
</details>

主持人：是的，我喜欢你的想法，这是一个很好的维恩图。因为，当你入职一家新公司时，入职一直是个问题。入职很难。入职文档过时了，演示文稿过时了，没人告诉我怎么做。所以人们需要一个月才能变得有生产力。现在你可以说：“好吧，我们更新它。”这样我们的 AI 工具也能派上用场，但这也是双向的，对吧？当人们入职时，他们也可以阅读这些东西，他们现在可以求助于聊天代理，而这个代理会给他们准确的信息。我喜欢这个，我觉得有很多这样的双赢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I I like your thinking that this is this is a good ven diagram to to to to draw because again when you onboard to a new company, it's always been a problem. Onboarding has been just difficult. There's the onboarding documentation is out of date. The presentation is out of date. No one tells me how to do this. So then people take you know a month to get productive and now you can say okay let's update it. So now our AI tool can also be helpful but also it goes both ways right like when people on board they can also read their thing they can now turn to the chat agent which will actually give them accurate information. I I love it like I feel I feel there's a lot of like these these wins like this it's always nice to discover these.</p>
</details>

### 企业实践：从 Workhuman 到 Indeed 的 AI 落地经验
主持人：说到双赢，作为一家正在采用 AI 的组织的工程领导者，无论是被强制要求，还是你自己想做，或者两者兼有。你如何衡量什么是有效的？你之前跟我提过一家叫 Workhuman 的公司，他们做了类似的事情，他们实际上弄清楚了要衡量什么，以及如何以一种实用的方式来衡量。这是怎么做的？那里的故事是怎样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So speaking of of wins as an engineering leader uh at a at an organization that is adopting AI you know there's either a mandate or you want to do it or both. How can you measure what is working? And before you told me about this company called workhum uh who did something similar where where they actually figured out what to measure how to measure in a practical way. How did this this work? What was the story there?</p>
</details>

Laura：Workhuman，我想和许多其他公司一样，开始使用 Copilot。它对大多数开发者来说都很容易上手。他们发现，他们知道它在起作用，他们从开发者那里听说他们喜欢使用这个工具，但真正困难的是弄清楚如何量化它起了多大作用，以及在哪里起了作用。所以 Workhuman 所做的就是，他们使用了 AI 衡量框架中的那些指标，跨越使用率、影响和成本，试图弄清楚我们如何能实际地画出一张地图，标明哪里进展顺利，哪里不顺利。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">workhum I think like many other companies started working with copilot. Um it's very accessible to most developers and what they found was like they knew that it was working like they heard from the developers that they enjoyed using this tool but what was really hard was figuring out how to quantify how much it was working and where it was working. And so what work human did was they, you know, used those metrics in the AI measurement framework across utilization, impact and cost to try to figure out how we can actually kind of draw a map of where things are are going well and where things are not going well.</p>
</details>

他们发现，通过更广泛地审视开发者体验，他们能够弄清楚 AI 对我们公司有好的影响，因为它改善了开发者体验。我认为，从非常广泛的角度来说，这是我给每一家试图弄清楚“我如何理解 AI 对我公司的影响”的公司提供的建议。我告诉他们，AI 是一个改善开发者体验的工具。当你改善了开发者体验，你就会有更好的结果。就是这样，每家公司的模式都是一样的。AI 不是能解决一切问题的灵丹妙药。我们谈论的是改善开发者体验。Workhuman 发现，开发者体验提升了 11%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what they found was that looking at developer experience more broadly, they were able to figure out that AI has a good impact on our company because it improves developer experience. And I think this is sort of very broadly speaking the advice that I give to every single company when they're trying to figure out like how do I how do I reason about AI's impact on my company. I tell them AI is a tool to improve developer experience. When you improve developer experience, you have better outcomes. It is it it follows like that. It's the same pattern in every single company. AI isn't this like magic bullet that's going to solve everything. We're talking about improving developer experience. And so Workhum found that it's an 11% boost in developer experience.</p>
</details>

主持人：他们是怎么发现的？是通过某种调查吗？他们测量了数据吗？还是混合的方式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And how did they find was it via kind of a survey? Did they measure data? Is it a mix?</p>
</details>

Laura：是的，他们是混合测量。他们使用 DX，所以他们使用了开发者体验指数，这是我们对 14 个有研究支持的开发者体验驱动因素的综合指标。所以，从事件管理到本地开发迭代速度，涵盖了许多在开发者日常工作中扮演重要角色的不同因素。所以，他们看到了 11% 的增长，这也都与时间节省相关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, they're measuring a mix. So they're using they use DX. So they use the developer experience index which is our kind of composite metric of 14 researchbacked developer experience drivers. So everything from incident management to local dev iteration speed um lots of these different factors that play a big important role in the day-to-day work of developers. So um they are seeing you know an 11% gain and that's all correlated as well to time savings.</p>
</details>

主持人：我理解一下，他们之前就在测量这些东西，对吧？然后在推广 AI 的过程中，他们继续测量，现在他们看到了增长。对吧？因为你只能在你测量的东西上看到改进。如果我在一家从未测量过任何东西的公司工作，我现在可以开始测量并建立一个基线，但除非我在 AI 之前就这么做了，否则我很难告诉你它改进了多少，因为我没有之前的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and just so I I understand I think for anyone like saying so they were measuring these things before right and then as they rolled it out they kept measuring it and now they're seeing a gain right cuz because you can only get an improvement on something that you measure. So if I'm working at a company which never measured anything I'm going to have a like I can measure now and have a baseline but unless I I did it before AI it's going to be a bit harder for me to tell you know how much has it improved because I don't have data before.</p>
</details>

Laura：是的，完全正确。所以我另一个普遍的建议是：现在就开始测量。我们可以拉取历史数据，来填补一些空白，我们可以回顾 GitHub、Jira 和那些工具的历史数据。当涉及到开发者体验的调查和那些自我报告的东西时，从小处着手，开始就行。不要等着雇佣另一个人，不要等着做任何事。你只是在延迟成功。所以，开始吧，建立一个基线。这就是帮助 Workhuman 弄清楚最大收益在哪里的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Exactly. And so my other general advice is like start measuring now. Um we can pull in historical data, you know, to cover some gaps in, you know, we can look at GitHub and and Jira and those tools historically when it comes to surveying on the developer experience and from those self-reported things. Just do start small. Just get started. Don't wait to hire that other person. Don't wait to, you know, do anything. You're just delaying success. So get started. Get a baseline. That's what helped work human be able to figure out what the the biggest gains were.</p>
</details>

主持人：那么他们发现了哪些收益？你说了整体提升 11%。那具体是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what were the gains that they found? You said 11% across the board. What does that</p>
</details>

Laura：是的。他们进行了全公司范围的测量，发现整个组织的开发者体验上升了 11%，这很棒。他们发现使用 AI 的开发者——我们这里只是分段看，比如每天、每周使用的用户和不使用的用户——前者的速度高出 15%。所以，他们能够向生产环境交付更多代码，完成更多工作。这些数字是几个月前的。他们注意到的是，这个数字在不断地复合增长，越来越高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So they were um they kind of measured organizationwide and found that developer experience went up 11% across the whole organization which was great. the developers that they found that use AI, so we're just segmenting here, like daily, weekly users with users who are not had a 15% higher velocity. So, they were able to um ship more code to production, get more stuff done than non-users. These numbers are from several months ago. And what they've noticed is like it just keeps compounding and getting higher and higher.</p>
</details>

所以这是一个很好的例子。我们知道，如果你和我都是开发者，我们知道这些工具在大多数时候用起来很愉快，我们知道它们在享受工作、把开发的乐趣带回来方面，对我们很多人来说都产生了很大的影响。但是，去跟你的副总裁、CTO 或董事会说：“嗯，开发者喜欢用它们”，这很难说服他们继续为这些工具提供更多资金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is a great example of you know we know and if you and I are developers like we know that these tools are delightful to use most of the time we know that they make a big difference when it comes to you know enjoying work and and bringing the joy back to doing development work for a lot of us. Um, but going to your VP or CTO or board and saying, "Well, the developers like to use them is not a, you know, like that's a that's a that's a hard sell to keep the wallet open for getting more funding for these tools."</p>
</details>

主持人：是的。因为这些东西要花钱，尤其是现在有了代理模式的 token，它们能烧掉很多钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Cuz because these things cost money, especially now with the Agentic uh tokens, you know, they can burn through a lot of money.</p>
</details>

### 展望未来：AI 工具的成本演变与对交付稳定性的挑战
Laura：是的，绝对是。这实际上是另一个值得在这里讨论的事情，因为在很多已经使用 AI 较长时间、稍微成熟一些的公司里，他们之前是在“有许可证”和“没有许可证”的二元选择中运作的。现在，在衡量方面，我们面临的最大挑战之一是看待基于消费的定价，并弄清楚哪些开发者能获得最大收益，哪些开发者收益最少，从能够获得更多 token 的角度来看。哪些用例影响最大？例如，堆栈跟踪分析。因为我现在从工程领导者那里听到的是：“我就是不知道怎么分配预算。我应该给高级工程师比初级工程师更多的钱吗？还是反过来？我应该给初级工程师更多的钱，因为通过 AI 辅助，我能从他们那里获得更多的生产力价值，而高级工程师不需要那么多。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Absolutely. That's actually another thing that you know is worth discussing here because in a lot of these you know companies that have been using AI for a longer time and are a little bit more mature they were sort of operating in that binary you have a license you don't have a license right now one of the biggest challenges when it comes to measurement in front of us is looking at consumption based pricing and figuring out who are the developers that have the most to gain who are the developers that have the least to gain from, you know, being able to to have access to more tokens. What are the use cases that have the biggest impact? For example, stock stock trace analysis because what I'm hearing from engineering leaders right now on the ground is like, I just don't know how to allocate the buckets uh of money. Do I give a bigger bucket of money to senior engineers than junior engineers? Or is it the other way around? Do I give a bigger bucket to junior engineers because I can get more, you know, productivity value from them with AI assistance and the senior engineers don't need as much.</p>
</details>

主持人：这太有趣了，因为我感觉有点似曾相识。如果你还记得科技行业上一次有公司每年为每个开发者花数千美元在开发者工具上，那是在 2000 年到 2010 年左右。那时，很多创业公司和科技公司每年为每个开发者花费大约 3000 到 8000 美元购买 Visual Studio 许可证，这不仅仅是为了 Visual Studio，还为了文档。那是在互联网之前的时代，互联网上的文档很糟糕，而那个文档非常棒，还能获得早期发布的软件，他们可以使用像 SQL Server 这样的东西。那是一大笔钱，甚至创业公司也付钱，因为他们可以得到一个用于胖客户端（比如 Windows 应用程序、Web、数据库服务器等）的一体化开发套件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This this is just so interesting because I feel a little bit of deja vu. Now, if you remember back to the last time in in the tech industry where we've had companies spend thousands of dollars per year on developer tools was around 2,000 to 2010 where a lot of startups and a lot of tech companies spent about 3,000 to up to up to five or up to $8,000 per year per developer on Visual Studio licenses, which was not just for Visual Studio, but it was for documentation. This was pre- internet documentation was terrible on the internet and that was amazing and access to early release software where they could use like SQL server all these things and it was it was huge amounts of money and even startups uh paid because uh they could get an all-in-one development kit for like thick clients so like Windows applications web database servers etc.</p>
</details>

这持续了几年，后来逐渐消失了。但当时几乎每家公司都这么做，因为他们本可以用开源的，但那样更慢。他们会想：“哦，如果我们每年为一个开发者支付 10 万美元，即使在当时也是这个价，我们愿意再多付 8 千或 1 万美元，让他们更有生产力，并在竞争中领先。”所以，我们以前经历过这个，但现在感觉我们又回到了这个状态，会有公司说：“你知道吗？我们干脆硬着头皮上，即使我们没有数据。”Shopify 就在这么做，他们没有预算限制。还有一些公司会说：“我不确定。感觉很贵。我们习惯了每年为每个开发者分配 200 美元之类的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this this lasted for for a few years. It kind of died out. But there was a case where almost every company who said and they did it because well they could have just used open source but it was slower and they were like oh it's you know if we're paying 100k for developer per year even back then it was that we'll pay 8k more or 10k more per year to get them more productive and to get ahead of the competition. So, we've had this before, but now it feels we're we're getting back to this where like there will be companies that say, "You know what? Let's just bite the bullet, do it, even if we don't have the data." Shopify is doing this. They have no budget limits. And there are the the companies that are like, "I'm not sure. It feels expensive. We're used to like $200 per year per developer allocation, that kind of stuff."</p>
</details>

Laura：是的，历史总是重演，对吧？当你到了一定的年纪，像你我这样，我们会一次又一次地看到这些模式。所以，这可能给了我一些安慰，就像，我经历过很多炒作周期。我昨天和 Twilio 的 Jesse Adams 聊天，他负责他们的开发者平台，他和我当时都深陷 Kubernetes 的炒作中。我们比较了一下，这感觉和 Kubernetes 及容器的炒作有什么不同。有很多相同之处，也有很多不同之处。炒作最终都会以某种方式结束。所以，我们现在不再生活在容器的炒作周期里。最终，我们会看到一些稳定。现在我们正处于工具泛滥的**寒武纪大爆发**（Cambrian explosion: 一个生物学比喻，用来形容某个领域在短时间内出现大量新物种或新创新的现象）中，有太多未知。定价是未知的，最终我们会整合，达到一个更稳定的状态，但这可能需要一两年的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I think um history always repeats itself, right? in when you're of a certain vintage uh as you and I are, we see these patterns over and over again. And so, you know, that's been providing maybe some comfort to me is like, you know, I've lived through quite a lot of hype cycles. I was talking with Jesse Adams from Twilio yesterday who leads their developer platform and like he and I were both like in the thick of the Kubernetes hype. We were kind of comparing notes of like how does this feel compared to like the Kubernetes and container hype? You know, there's a lot that's the same. There's a lot that's different. And the hype eventually, you know, it all concludes one way or another. So, we're not still living in the container hype cycle. Eventually, the we're going to see some stabilization. Right now, we're in this like Cambrian explosion of tool sprawl and there's just so much unknown. pricing is unknown and eventually we're going to kind of consolidate and and come to something that's a little bit more stable, but it's going to probably take us a year or two to get there.</p>
</details>

但是，Gary，如果在 18 个月后，我们每个月花 1200 到 2000 美元在一个能自主完成任务的代理上，即使这些任务需要人类在环验证，我也不会感到惊讶。我认为会有公司愿意打开钱包，因为这可能让他们避免以之前的速度增加员工数量，或者只是让他们的高级开发者能花更多时间在更复杂的工作上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Gary, I would not be surprised um in 18 months if we're spending Yeah. Like what did you say 3,000? It was $3,000 to $8,000 per year. So if if you that was per year. So per on a monthly basis that would have been something like you know 400 or 300 to like $800 per month per developer on those tools that back in 2000. Yeah. And so I mean we can adjust that for inflation but my my sort of prediction has always been you know or is right now if we think about 18 18 months in the future I don't think it's unrealistic to spend 1,200 to2,000 US on an agent who can complete tasks autonomously even if they have to be verified by a human in the loop and I you know I think that there are going to be companies who are willing to open their wallets because maybe this does allow them to to avoid increasing headcount at a the previous rate or it just allows their senior developers to be spending more time on more complex work.</p>
</details>

这是我们在 DX 的数据中看到的另一件事。我们有一个核心衡量框架，是我们开发者生产力的常青、坚实的基础。我可以在这里展示一下，给好奇的人看看。我们关注的事情之一是速度。当我们考虑衡量 AI 时，我们视 AI 为一个赋能者，我们会看到它对所有核心生产力和性能指标的影响。并不是因为 AI 的存在，我们就需要重新思考一切。我们仍然需要回到我们的基本面，理解性能意味着什么，然后看 AI 对它的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, which is another thing that we've seen in our data at DX. So, we have a uh core measurement framework which is our sort of evergreen solid foundation of developer productivity. I'll actually I can show that right here for those who are are curious to see it. But one of the things that we look at is speed. And when we think about measuring AI, we see AI as like an enabler and we're going to see the impact on all of the core measurements of productivity and performance. It's not that we need to rethink everything because AI exists. Like we still need to just go back to our fundamentals, understand what performance means, and then see the AI impact on it.</p>
</details>

特别是在速度这个类别中，我们看到每个工程师的 diffs（代码变更）数量增加了。所以我们能够获得更高的吞吐量，但它们的复杂性也增加了。所以 AI 用户能够处理更复杂的工作，并让更多这样的工作通过系统进入生产环境，这很有趣。我部分认为，这种复杂性是好是坏？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And specifically in this speed category, what we've seen is that the diffs per engineer increase. So we're able to get more throughput, but also the complexity of them increases as well. So AI users are able to work on more complex work and get more of that work through the systems to production which is interesting. Part of me thinks is that complexity good or bad?</p>
</details>

主持人：当我们进行三角验证时，这又有点回到了“源代码是负债”的观点，对吧？我们也看到 diffs 在增加，最终，出现 bug 的机会也会增加。事实上，bug 可能会增加，除非你有更彻底的测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We see when we triangulate it also goes back a little bit to you know source codes being a liability, right? We're also seeing diffs increase and eventually you know opportunities for bugs will increase. In fact probably bugs will increase unless you have more thorough testing.</p>
</details>

Laura：你知道吗，你说的很对，这实际上是我们已经看到的趋势。这是 DORA 发布的关于 AI 影响的研究报告中的数据，几个月前发布的。他们已经看到，交付吞吐量实际上在稍微放缓，我的假设是批次大小在增加。这就是关于 AI 的事情，它不会改变我们已经理解的关于软件开发的基本物理定律。更大的批次大小风险更高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what you're very right about that and actually that's a trend that we're seeing already. Let me show you this from the a um yeah I'm I'm speaking the future here predict predicting first principles thinking. This is from the Dora's um like impact of AI study that they released a couple a couple months ago. What they've seen already is that delivery throughput is actually slowing a little bit because my hypothesis is batch size is increasing. And this is the thing about AI like it doesn't change the fundamental physics of things we already understand to be true about software development. Bigger batch sizes are riskier.</p>
</details>

所以我们希望保持批次大小。但这里有一个预测，如果 AI 采用率增加 25%，他们实际上预测交付稳定性会降低 7.2%。我们可以推测这背后有多种原因，但部分原因回到了那个基本点：更大的变更风险更高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we want to keep batch size small. Um but here's the batch size usually it's you know the diff size for Yeah. Exactly. how much how much work is being shipped is it a small amount small chunk big chunk and then here's this um kind of forecasting like if AI adoption increases by 25% they actually predict that it's going to be a minus 7.2% 2% reduction in delivery stability for I mean we can hypothesize about the number of different reasons that might be I mean part of it goes back to that fundamental thing that bigger changes are riskier.</p>
</details>

AI 使得一次性写出非常非常大的变更变得轻而易举。这是我们在制定 AI 衡量框架时考虑到的。我认为衡量 AI 的最大风险之一是，当我们对代码行数或接受率这样的东西产生隧道视野时，我们就会忽略质量、稳定性、可靠性、可维护性的全局。我们不能为了短期收益而牺牲长期稳定。我们知道那不是一个可行的解决方案。为了保护自己，你必须有好的衡量标准，确保你看到的是全局，而不仅仅是过分关注速度的提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. AI makes it trivially easy to write very very big changes all at once. So, and this is something that you know when we put together the the AI measurement framework, I think one of the a biggest risks about measuring AI is that when we do get tunnel vision on stuff like lines of code or acceptance rate, we miss the picture about quality, stability, reliability, maintainability, and we can't get short-term gains at the sacrifice of long-term stability. Like, we know that that's not a viable solution. And in order to be able to protect yourself, you have to have good measurements in place that you're seeing all parts of the picture and not just hyperfocusing on the speed gains.</p>
</details>

### 结论：数据是戳破炒作的最佳利器
主持人：作为工程领导或技术负责人，他们想要保持务实，并在有意义的时候使用 AI 工具。他们如何能更好地避免炒作，坚持有效的方法？你对他们有什么建议？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing. And a as as closing for engineering leads, tech leads who who want to stay grounded and they do want to use AI tools when it makes sense. How can they get better at kind of, you know, avoiding the hype and and sticking to what works? And what what is your advice to them?</p>
</details>

Laura：数据每次都能战胜炒作。所以我认为，关注行业动态，寻找机会，寻找新颖的方法，并思考如何将其融入你正在做的事情中，这当然很重要。但最终，要在组织规模上让 AI 发挥作用，需要将其视为一个组织性问题，你需要在衡量绩效方面有非常扎实的组织卫生习惯，将 AI 视为一个实验，然后试图弄清楚 AI 的影响是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh data beats hype every time. So I think it's of course important to keep an eye out in the industry and look for opportunities, look for new and novel approaches and think how you might be able to fold that into what you're doing. But ultimately AI to work on an organizational scale needs to be thought about as an organizational problem and you need to have really solid like organizational hygiene when it comes to measuring your performance treating AI as an experiment trying to figure out then what's the impact of AI.</p>
</details>

所以，尽快建立你的基线测量，然后开始进行实验。不要指望 AI 是灵丹妙药，也不要指望每个工程师天生就知道如何使用它，因为就像任何其他工具一样，我们仍然需要培训和赋能。所以，当你有了数据，并且能围绕数据讲故事时，那也能保护你免受炒作周期的影响，以及可能来自媒体夸大期望的不必要压力。所以这是我的建议：数据战胜炒作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you know get your baseline measurement as quickly as you can and then start running experiments. Don't just expect AI to be a silver bullet or that every engineer is going to inherently know exactly how to use it because just like any other tool, we still need training and enablement. So when you have the data and you can storyt tell around the data, that's going to also protect you from the hype cycle and maybe some un unnecessary pressure from inflated expectations from the media. So that's my advice. Data beats hype.</p>
</details>

### 嘉宾推荐
主持人：太棒了。最后，我们来做一些快速问答，如果你不介意的话。我问，你直接回答想到的。有什么你喜欢使用的数字或实体工具，为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Love it. So to to wrap up, I'll just do some rapid questions if that's okay with you. So I I ask and then you just shoot what comes. What's a tool is your is your digital physical that you love using and why?</p>
</details>

Laura：我必须推荐 Granola，因为我从没用过一个能像 Granola 一样极大地提高我生活质量的工具。我记笔记很差，而且很健忘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have to shout out to Granola because there has never been a tool that I've used that's like dramatically increased my quality of life as much as Granola has. I'm a bad notetaker and a forgetful person.</p>
</details>

主持人：这是那个 AI 会议记录工具，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is the AI meeting notetaker, right?</p>
</details>

Laura：是的。Granola 的作用是，当然，你要确保得到与会者的许可，它是一个 AI 笔记记录器，但我喜欢它的一点是，我可以记下我自己那种零散的笔记，然后 Granola 会回来，用我错过的所有上下文把它们填补完整。这真的很神奇。这是让我觉得“哇，AI 真的很了不起”的时刻之一。它是一个如此具有变革性的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, what Granola does, um, of course, make sure that you get permission from the person that you're in a meeting with, but you know, it's an AI notetaker, but what I love about it is that I can take my own sort of like disjointed notes and then Granola comes back and fills them in with all of the context that I missed. It's really magical. And this was like one of the the times that I was like, "Wow, AI really is amazing." But it's been such a transformational tool.</p>
</details>

主持人：有什么你会推荐的书，为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is a book that you would recommend and why?</p>
</details>

Laura：我想推荐两本书，如果可以的话。第一本更像是一本商业书籍，叫做《Write Useful Books》，作者是 Rob Fitzpatrick。这本书能让你的写作清晰、干脆，去掉很多废话。所以它非常有用。它就是为快速浏览而设计的，你大概一个小时就能消化完。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's two books that I want to recommend if that's okay. First one is like a more business book and it's called Write Useful Books by Rob Fitzpatrick. This will get your writing clear and snappy and just cut out a lot of the fluff. So, it's incredibly useful. It's meant to be skimmed and you can really digest it in like an hour.</p>
</details>

另一本不是专业书籍，但我认为同样有用的书叫做《Unsavory Truth》，作者是 Marian Nestle。她是一位食品科学家、作家、历史学家。这本书真正剖析了食品营销和食品游说团体，主要是在美国，以及一切是如何被建构起来的。我认为现在我们正在谈论 AI 炒作，我们正在谈论媒体素养、数据素养。没有哪本书能像这本书一样，真正加强了我对这一切与政治、资金和游说者之间深层联系的理解。它虽然是关于食品而不是科技，但很多概念是完全可以迁移的，而且非常引人入胜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, use it. I think the other book that's not a professional book, but I think useful nonetheless is called Unsavory Truth by Marian Nestle. She's like a food scientist, author, historian. And it really breaks down like food marketing and the food lobby more more in the United States and about how like everything is kind of constructed. And I think right now we're talking about AI hype. We're talking about like media literacy, data literacy. There has been no book that has really just strengthened my understanding of like how deep this all goes with politics and funding and lobbyists than that particular book. It is about food and not about tech, but a lot of the concepts are really um transferable and it's just very fascinating.</p>
</details>

主持人：太棒了，Laura。这次能更深入地探讨数据，看看什么真正有效，什么无效，真是太好了。非常感谢你来到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, amazing, Laura. This was nice to go a bit more deeper into data and and like seeing what actually works and and doesn't work. So, it was really good to have you here.</p>
</details>

Laura：是的，谢谢你，Gary。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, thanks Gary.</p>
</details>

主持人：希望你喜欢这次与 Laura 的数据驱动对话。我非常喜欢 Laura 说的，应对炒作的最好方法就是用数据。要查看 Laura 提到的更多数据和详细案例研究，请参阅下面的节目说明中收集的这些内容。要更深入地阅读我们作为软件工程师如何以一种务实的方式使用 AI 工具，请查看《The Pragmatic Engineer》的深度文章，链接也在节目说明中。如果你喜欢这个播客，请务必在你最喜欢的播客平台和 YouTube 上订阅。这有助于更多人发现这个播客，如果你留下评分，我将特别感谢。谢谢，我们下一期再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I hope you enjoyed this data driven conversation with Laura. I really like how Laura said that the best way to deal with hype is with data. To check out more data and detailed case studies that Laura referenced, see these collected in the show notes below. For more in-depth reading about how we can use AI tools as software engineers in a grounded way, check out the pragmatic engineer deep dives, also linked in the show notes. If you enjoy this podcast, please do subscribe on your favorite podcast platform and on YouTube. This helps more people discover the podcast and a special thank you if you leave a rating. Thanks and see you in the next</p>
</details>