---
area: tech-insights
category: technology
companies_orgs:
- Mozilla AI
- Arthur AI
- OpenAI
- JPMC
- Google
- Meta
- Galileo
- Brain Trust
- Merkor
date: '2025-08-06'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Information
- Nature Machine Intelligence
- iClar
people:
- John Dickerson
- Jamie Dimon
- Sam Altman
products_models:
- ChatGPT
project:
- ai-impact-analysis
- entrepreneurship
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=CQGuvf6gSrM
speaker: AI Engineer
status: evergreen
summary: Mozilla AI首席执行官John Dickerson深入探讨了AI评估（Evals）如何从一个技术小众话题，逐步演变为企业高管层（C-Suite）关注的核心议题。他指出，ChatGPT的出现、宏观经济预算冻结以及智能体（Agentic
  Systems）的崛起，共同推动了AI评估在企业中的战略地位。文章详细阐述了AI评估如何与业务关键绩效指标（KPI）挂钩，以及CEO、CFO、CISO等高管对AI评估的日益重视，预示着AI评估市场即将迎来爆发式增长。
tags:
- ai-evaluation
- business
- canada
- genai-adoption
- system
title: 2025：AI评估终于成为焦点——CEO视角下的AI发展与挑战
---

### 引言：2025，评估之年

大家好，感谢各位的到来。我将主要从Arthur AI联合创始人兼首席科学家的角度来分享这次演讲，我在加入**Mozilla AI**（Mozilla基金会旗下的AI部门，致力于开源AI工具和技术栈）担任首席执行官之前，在Arthur AI工作了六年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks everyone for being here. I'm going to give this talk mostly from the point of view of being a co-founder and chief scientist at Arthur AI, where for six years prior to joining Mosilla AI as CEO. I do want to say Mozilla AI operates in the open source world where we're providing open source AI tooling and we're supporting the open source AI stack. Our end goal is to enable the open source community to be at the same table as a Sam Alman when talking about AI moving forward. So, if you're interested in that, that's not what this talk is going to be about, but we can talk about that offline.</p>
</details>

我想强调的是，Mozilla AI致力于开源领域，提供开源AI工具并支持开源AI技术栈。我们的最终目标是让开源社区在未来AI发展中能与**Sam Altman**（OpenAI首席执行官）等行业领袖平起平坐。如果您对此感兴趣，我们可以在会后交流，但今天的演讲主题是：2025年终于成为评估（Evals）之年。正如介绍中所说，我从事这个领域已经很长时间了。例如，Arthur AI过去和现在都专注于传统机器学习（ML）和人工智能（AI）的**可观测性**（Observability: 监控系统内部状态并理解其行为的能力）、评估和安全性，随后经历了深度学习革命、生成式AI（GenAI）革命，再到现在的智能体（Agentic）革命。我认为我们终于来到了一个转折点，所有这些公司都将开始看到爆发式增长，这令人兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This talk is going to be about 2025 finally being the year of the evals. And as was written uh written as was spoken uh by my introduction, I've been in the space for a very long time. Arthur AI for example was in and still is in obser observability evaluation and security in both traditional ML and AI and then into the deep learning revolution and then into the genai revolution and then into the agentic revolution. And I think we're finally at the point where all of these companies are going to start seeing hockey stick growth which is exciting.</p>
</details>

### 核心论点：AI/ML监控与评估的共生关系

本次演讲的论点之一是，我将**AI/ML监控**（AI/ML Monitoring: 持续跟踪和分析AI/机器学习模型在生产环境中的性能、行为和输出）与评估视为同一把剑或同一把尺子的两面。你无法在不进行测量的情况下进行监控或可观测性，而测量正是评估的核心功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the thesis of this talk, one thing is that I see A IML monitoring and evaluation as two sides of the same sword or ruler, right? You can't do monitoring or observability without being able to measure and measurement is the core functionality for evaluation.</p>
</details>

### 推动AI评估成为焦点的三大因素

直到两件事同时发生，这在**C-Suite**（企业高管层，如CEO、CFO、CIO等）眼中才真正成为首要关注点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was not top of mind really with the seuite uh until two things happened concurrently.</p>
</details>

首先，AI成为非首席信息官（CIO）或首席技术官（CTO）也能理解的事物。因此，首席执行官（CEO）、首席财务官（CFO）、首席信息安全官（CISO）等高管在**ChatGPT**（由OpenAI开发的大型语言模型，以其生成式对话能力而闻名）问世后，开始理解AI。与此同时，美国企业界发生了一场完美时机的预算冻结，原因是担心即将到来的经济衰退。这发生在ChatGPT发布之前，大约在10月、11月，大多数企业会为下一年制定预算。当时，除了特定“宠物项目”的资金可以解冻外，其他预算都被冻结了。而这个“宠物项目”，因为CEO和CFO都了解了它，就是**生成式AI**（GenAI: 能够生成文本、图像、音频等新内容的AI模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is AI became a thing that people who aren't a CIO or CTO could understand. So the CEOs, the CFOs, the CISOs began to understand it basically when ChatGBT came out. And simultaneously there was a perfectly timed budget freeze across enterprise at least in the US that happened due to a fear of an impending recession. So this is right before chat GBT launched. This is like October, November when most enterprises would set up budget for the next year. At that time there was a freeze except for money that could be opened up for a specific pet project and that PET project because CEOs and CFOs then knew about it uh was Gen AI.</p>
</details>

然后，我们现在有了这个“三角形”的最后一个顶点，它将迫使评估在今年成为首要任务，那就是我们现在有了能够为人类、为团队行动的系统，而不仅仅是为大型系统提供输入。所以，这三件事结合在一起，正如你在**Brain Trust**（一家AI评估初创公司）和**Arthur AI**，以及**Arise AI**或**Galileo**（AI可观测性和评估领域的其他主要参与者）等公司所看到的，我们正因此开始看到巨大的腾飞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that happened and then now we have the final sort of uh vertex on this triangle which is going to force evaluation to be top of mind this year which is that we have systems that are now acting for uh humans acting for teams as opposed to just providing inputs into larger systems. So these three things together are as you saw with Brain Trust, as we're seeing at Arthur, as you're seeing with like Arise AI or Galileo, other big players in this space, we're starting to see big takeoff because of this.</p>
</details>

### 智能体系统：从决策到行动

现在，这就是正在发生的事情：“智能体之年”——我们都在谈论它，在这次会议上也听到了很多。**智能体**（Agent: 能够感知环境、进行推理、学习并采取行动以实现目标的AI系统）正在开始做出决策并采取行动，这些复杂的步骤可以自主或半自主地导向某个行动。正如上次演讲中提出的问题，将人类纳入循环显然在许多系统中仍然是一个非常好的主意，但我们正越来越接近完全自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So right now, this is what's happening. Year of the agent, we all hear about it. We're hearing about it here at this conference. Agents are starting to make decisions and take actions, complex steps that lead toward an action, either autonomously or semi-autonomously. uh as a question on the last talk um um uh brought up you know bringing humans into the loop is still obviously a very good idea on many systems but we're getting closer and closer to full automation</p>
</details>

智能体系统现在正在部署，这包括大型企业、中小型企业（SMBs）以及个人“宠物项目”等。这意味着，根据我之前提到的幻灯片，今年也是我们真正需要评估的一年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and agentic systems are going into deployment now okay and that's in enterprises that's in SMBs that's in pet projects and so on and what that means is by that last slide this is also the year that we need</p>
</details>

回溯到大约一年前，每年我们都会问：“这是ML之年吗？这是评估之年吗？”在这些智能体系统出现之前，机器学习模型基本上只会吐出一些数字，这些数字随后会被摄入到一个更复杂的系统中。这种复杂性往往会掩盖人们对模型本身输出的关注需求。除了在座的各位，我们都知道这非常重要。但对于决策者来说，它常常被包裹在一个不透明的黑箱中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">flash back uh to then up to like a year ago where every year we were asking hey is this the year of ML? Is this the year of evaluations? And prior to sort of these agentic systems coming out, we would have machine learning models basically spitting out numbers that would then be ingested into a more complex system. And that complexity uh would sort of erase uh the top of mind need to think about what's coming out of the model itself. Except for people in this audience, we know that's very important. But when it comes to decision makers, it would often get wrapped up into this sort of opaque box.</p>
</details>

这意味着机器学习部分通常不会超越**CIO**（首席信息官）或其所融入的系统层面，这导致那一年通常不是评估之年，因为评估的需求对整个C-Suite来说并不明显。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that meant that the ML part didn't really bubble up beyond like the CIO or whatever or the system was going into which meant that typically that year was not the year for EVEL because the need for eval was not obvious to the entire seuite.</p>
</details>

### ChatGPT前的AI/ML监控：挑战与局限

好的，让我们快速回顾一下历史。在2022年11月30日ChatGPT发布之前，**ML监控**（ML Monitoring: 专门针对机器学习模型的监控，跟踪模型性能、数据漂移、偏差等）当然是存在的。数据科学团队长期以来一直使用统计方法作为大型系统的一部分来理解正在发生的事情，这是核心。然而，正如我所提到的，它与下游业务**关键绩效指标**（KPI: Key Performance Indicator: 衡量业务目标达成情况的指标）的联系是脆弱的。归根结底，在企业中销售产品，能够谈论节省了多少资金或赚取了多少收入，才是让你的产品被购买的关键。因此，将机器学习组件与下游业务KPI具体联系起来，一直是个挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So let's take a quick step back in time. Before November 30th of 2022, the chatbt launch, uh, ML monitoring was certainly a thing, right? Like data science teams have long used statistical methods as part of larger systems to understand what's going on, right? This is this is core. Um, like I mentioned though, there's a tenuous connection to sort of downstream business KPIs. And at the end of the day, that's what gets your product bought in the enterprise is being able to make a sale about dollars saved or about dollars earned. So being able to connect machine learning the components specifically to a downstream business KPI</p>
</details>

C-Suite，包括CIO和CEO，对**AI/ML**（人工智能/机器学习）的**投资回报率**（ROI: Return on Investment: 衡量投资效益的指标）有很多口头承诺，但这在我们看来，仅仅是口头承诺。它基本上仍然是向CIO销售，这意味着很难向C-Suite以外的人销售。当然，这是一个广阔的领域，大约从2012年开始，AI/ML监控真正兴起，H2O、Algorithmia和Seldon是第一代公司。随后出现了Y Labs、Aporeia、Arise、Arthur、Galileo、Fiddler、Protect AI等等。我在这里将截止时间设在2022年中期，也就是生成式AI革命发生之前。在那之后显然也有公司成立，比如我们刚刚看到的Brain Trust。当然，还有一些大公司，比如Snowflake、Data Bricks、Data Dog、SageMaker、Vert.ex以及微软的产品等。所以，人们一直在思考这个问题，但它从未成为“大事”。再次强调，它很少是CEO、CFO和CISO的首要关注点。它从来都不是一个问题。所以当我们与人交流时，他们总是说：“是的，我们明白我们需要这个，但安全性会是一个更大的问题，或者延迟会是一个更大的问题，或者其他一些更传统的科技问题会是主要问题。”机器学习模型本身并不是问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there was a lot of lip service around a IML around the ROI from the seauite including CIO CEOs um but that was just lip service in our experience at least uh it was still basically selling into the CIO so basically it made it hard to sell outside of that now obviously this is a large space this has been happening since you know about 2012 I would say is when a IML monitoring really started up with like H2O and algorithmia and Seldon sort of the first generation of these companies coming around Y labs Aporeia Arise Arthur Galileo Fiddler protect AAI and so on and so on and so on. I've put the cuto off here at uh like mid 2022 sort of like before the genai revolution happened. There have obviously been companies founded after that. You know, we just saw Brain Trust talking as well. And then, you know, the big players here as well, right? Snowflake, data bricks, data dog, SageMaker, Vert.ex, you know, Microsoft's products and so on. So, people have been thinking about it, but it was never the thing. Again, rarely top of mind for the CEO, the CFO, and the CISO. It's never the issue. So when we would talk to people, it's always yes, we understand that we need this, but security is going to be a bigger issue or latency is going to be a bigger issue or some of these more traditional technology sort of problems are going to be the issue. It wasn't the machine learning model itself.</p>
</details>

所以，我作为一名多次创业者，现在也为风险投资家做了很多尽职调查。基本上，从2010年代中期开始，这个领域里的每个**路演材料**（Pitch Deck: 向投资者展示公司业务、产品和潜力的演示文稿）都有一页幻灯片说：“今年将有CEO因为与ML相关的失误而被解雇。”据我所知，这至今尚未发生。当然，有一些有远见的领导者。这里有一份**JPMC**（摩根大通，一家全球领先的金融服务公司）首席执行官**Jamie Dimon**（杰米·戴蒙）在2022年4月发布的年度报告。它涵盖了JPMC截至2021财年的情况。他谈到了他们在AI方面的支出。但如果你仔细看这些数字，它们仍然小得可笑。例如，在消费领域，他提到从2017年到2021年底，他们投入了1亿美元用于AI/ML。对于JPMC来说，这并不是一个巨大的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So basically, you know, I do a lot of due diligence for venture capitalists as well now as a you know um a multi-time founder and so on. And basically every pitch deck in this space from like the mid2010s onward had a slide that said this is the year that a CEO is going to get fired because of an ML related screw-up. Uh and to my knowledge it just still hasn't happened. There have been some forwardinking leaders. So I have here a um the annual report from Jamie Diamond head of JPMC. Uh this came out in April of 2022. So it covered basically JPMC up through their fiscal year in 2021. Uh and he's talking about the spend that they have going into AI. But if you squint and you look at these numbers, they're still like comically small. So basically, one of these is in the consumer world, he makes the statement that from 2017 up through the end of 2021, they had put $100 million into a IMO, right? That's not a huge amount of money uh for JPMC.</p>
</details>

### 宏观经济与ChatGPT的催化作用

让我们继续回顾到ChatGPT之前，但现在转向宏观经济方面。在ChatGPT发布之前，经济状况开始变得相当不稳定。ChatGPT是在11月底发布的，而许多企业的预算是在10月、11月为下一年设定的。到2022年中后期，人们对即将到来的经济衰退深感担忧，尽管最终并未发生，但这些担忧导致大多数企业冻结或削减了2023年的IT预算。这意味着，如果不是因为ChatGPT这个特殊的“顺风”，我们可能在2023年不会看到这些大型企业IT部门开发出许多新技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So keep sitting back in time pre-hat GPT and so on, but let's now flip to the macroeconomic side of things. So the economy started getting pretty dicey um right up until about chatbt um uh um launched right so that was the end of November for chatbt uh a lot of enterprise budgets are set in October November for the following year and toward mid to the end of 2022 there were very deep fears about an impending recession that didn't end up happening but those fears basically made it so that most enterprises either froze or shrunk their IT budgets for 20 uh 23 three. Okay. So, what that meant is were it not for particular tailwinds called JBT, we probably wouldn't have seen a lot of new technology being developed in the IT departments at these large enterprises in 2023.</p>
</details>

这是一种苦乐参半的混合。我刚才已经谈了很多。这是一种苦乐参半的混合，因为它确实促使我们将“索伦之眼”聚焦在一个特定的、小的“宠物项目”上，可以投入少量预算。而这个小的“宠物项目”来自我们的朋友**OpenAI**（一家人工智能研究和部署公司），他们在假期前发布了ChatGPT。我确信，通过与美国各地企业的一些C-Suite高管交流，基本上发生的情况是，现在CEO、CFO以及那些在计算机科学意义上技术背景不那么强的人，能够通过互联网上的一个简单用户界面（UI）迅速轻松地与AI互动，并被AI所震撼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So, this is sort of a bittersweet uh mix. I guess I just talked about a lot of this. Um, this was sort of a bittersweet mix in the sense that it did set us up to put the eye of Sauron on a particular specific small pet project where uh a small amount of budget could be applied and that small pet project uh came from our friends at OpenAI launching chatbt right before the holiday break and I'm convinced just from talking to some seuite folks across the enterprises here in the US that basically what happened is now CEOs and CFOs and you know less technical and the computer science sense of the word were able to interact swiftly and easily with a single UI on the internet and get wowed by AI.</p>
</details>

我当时也被AI震撼了。事实上，Arthur AI当时正在与我们的A轮融资领投方**Index Ventures**（一家风险投资公司）在主要的机器学习会议**NeurIPS**（神经信息处理系统大会）上举办一场活动，就在ChatGPT发布的那晚。它基本上吸引了一群极客，他们都惊叹：“哇，这太令人印象深刻了！”同样的事情也发生在其他人身上。回到11月30日，你可以让**Eminem**（一位美国说唱歌手）像**Taylor Swift**（一位美国流行歌手）一样说唱，或者开玩笑说：“我想写诗，但要用说唱歌手的语言。”这种事情一遍又一遍地发生。这意味着那些存在的**可自由支配预算**（Discretionary Budget: 企业可以根据自身需求和优先级自由分配的资金）现在被专门用于CEO的“宠物项目”，也就是生成式AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So I was also wowed by AI. In fact, we were hosting um Arthur was hosting with our um series A leaders index ventures an event at Nurups, the major machine learning conference the night that chatbt came out and it basically took over a bunch of nerds in a room being like wow this is very very impressive and that happened to everybody else right flip back to November 30th you know you can make Eminem rap like Taylor Swift oh hey isn't this funny oh hey my mom did this sort of like joke about you know I want to have poetry but in the uh uh written in the you know the words of a rapper or whatever this started to happen over and over again And what that meant is that that discretionary budget uh which exists uh was unlocked specifically for now the CEO's pet projects which were called Genai.</p>
</details>

### AI应用的发展轨迹：2023-2025

2023年，由于预算冻结甚至削减，我们仍然被迫实行紧缩政策。但当时正在发生的事情是，唯一可以分配的资金专门流向了生成式AI。所以每个人都专注于此。首先，这是一项很酷的技术。每个人都专注于此，企业内部开始出现各种“科学项目”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 2023 uh we still had austerity forced on us because of those frozen budgets um or even reduced budgets. But the thing that was happening here is that now the only money going around that could be allocated was going to specifically genai. And so everybody focused on this. A it's a cool technology. Everybody focused on this and the science projects started to sort of float around within enterprise.</p>
</details>

2024年，我们开始看到基于生成式AI的应用投入生产，聊天应用是最明显的例子，比如内部聊天应用、内部招聘工具等。这是因为2023年唯一投入新项目的预算都流向了生成式AI，现在随着这些项目在2024年主要在内部投入生产，那些穿着商务套装的人开始提出关于**投资回报率**（ROI）、**治理**（Governance: 确保系统按照预期运行并符合政策和法规的框架）、**风险**（Risk: AI系统可能带来的负面影响或潜在危害）、**合规性**（Compliance: 遵守相关法律、法规和行业标准的行为）和**品牌形象**（Brand Optics: 品牌在公众眼中的形象和感知）等问题。所以，我们现在开始让机器学习、数据科学、计算机科学领域以及CIO办公室以外的人也开始关注评估了。如果我需要对风险进行定量评估，那么我就需要进行评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">2024 we started to see genai based applications going into production right chat applications are the obvious one internal chat applications internal hiring tools things like that and that's because basically the only budget going into new projects in 2023 was going to genai and now as things go into production primarily internally in 2024 uh we have the folks who tend to dress in business suits uh asking questions around ROI governance risk compliance brand optics and that kind of thing so now we're starting to get a little bit closer to people outside of the machine learning, the data science, the computer science world, the CIO's office caring about evaluation, right? If I need to quantit quant uh if I need to have a quantitative estimate of risk, then I need to do evaluation.</p>
</details>

2025年，我们看到了规模化发展。看看任何**前沿模型提供商**（Frontier Model Provider: 提供最先进、能力最强的AI模型的公司）的收入数据，看看在座许多公司的收入数据，一切都在飙升，这是因为使用量增加了，这很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">2025, we've seen, you know, scaleups, right? Look look at the revenue numbers for any frontier model provider. Look at the revenue numbers for a lot of us in this room. Just everything is really going up right now. And that's because of usage, which is great.</p>
</details>

这也意味着C-Suite高管们基本上已经习惯了讨论AI并投入大量实际预算。2023年和2024年的IT预算，为下一年设定的那些预算，都没有被冻结，它们被专门用于AI应用和类似项目。所以，2023年的“科学项目”在2024年投入生产，现在在2025年正在出货和规模化。而且坦率地说，技术本身也变得非常出色。在座的各位都是技术人员，但即使是我，每次有新模型发布时都会感到惊讶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That also means that's a function of the seuite basically becoming comfortable basically talking about and putting large real budget into AI right so 2023's IT budgets 2024's IT budgets uh set for the following year those weren't frozen right those are earmarked specifically for AI applications and things along those lines so we had science projects in 2023 go into production in 2024 and they're now shipping and scaling uh in 2025 and also like frankly the the technologies just gotten really amazing Right? Like all of us in this room are are technical, but even I'm just amazed every time a new model is dropped.</p>
</details>

社区也真正支持了这一点。开源社区支持了它。风险投资、大型科技公司都在向前沿模型提供商投入巨额资金。所以，2025年一切都在汇聚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The community has also really gotten behind this. You know, open source has gotten behind this. Venture capital, big tech is writing huge checks into uh into frontier model providers and so on. So everything is sort of coming together in 2025.</p>
</details>

### 智能体革命与风险管理

另外，请记住第三个顶点，我们的机器学习系统现在正朝着自主化发展。好的，2025年，我们都听说了，这是智能体之年。这里不再需要问号，这显然是智能体之年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And also remember that third vertex, we have machine learning systems now moving toward autonomy. Okay, so 2025 we all hear it. It's year of the agent. I no longer is a question mark needed here. It's clearly the the year of the agent.</p>
</details>

现在，快速用30秒定义一下智能体。正如20世纪50年代后期及以后所定义的，智能体需要感知环境、学习、抽象和泛化。与传统机器学习不同，它们将进行推理和行动。我们有推理模型，我们有在虚拟环境或赛博物理环境中行动的系统。这意味着系统中引入了大量的复杂性，也引入了大量的风险，这对我们这些从事评估工作的人来说是件好事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, quick 30 secondond definition of an agent. As defined, you know, in the late 50s onward, um agents need to perceive the environment. They need to learn. They need to abstract and generalize. And unlike traditional machine learning, they're going to reason and act, right? We have reasoning models out there. We have systems that are acting in virtual environments or cyber physical environments. And what that means is you have a lot of complexity introduced into the system and you have a lot of risk introduced into the system and that's great for those of us in uh ebo.</p>
</details>

### 将评估与业务关键绩效指标挂钩

归根结底，真正重要的是，当你向企业或中小型企业（SMB）销售任何产品时，而不仅仅是我们在这里的产品，你都需要能够将你的产品与某种下游业务**关键绩效指标**（KPI），如风险缓解、收入增长、减少损失等挂钩。所以，现在评估，你需要能够做到这一点，因为你正在量化事物。它们终于成为了一个一流的讨论点，这太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, at the end of the day, the thing that really matters, like I mentioned, is connecting when you're selling any product, not just our products in this room. When you're selling any product into an enterprise or SMB, is being able to attach uh your product into some sort of downstream business KPI, risk mitigation, revenue gains, uh you know, losing less money, whatever. So, now evaluations, you need to be able to do this because you're quantifying things. And they're finally a first class discussion point, which is fantastic.</p>
</details>

### C-Suite对AI评估的共识

所以，正如我提到的，从2022年11月30日开始，CEO现在至少了解了这项技术。我并不是说他们知道“注意力机制”意味着什么，但我确实是说他们了解这些生成模型的一些能力，他们了解智能体和多智能体系统的一些能力，并且他们乐于与专家讨论，分配预算，并与董事会和股东讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have the CEO like I mentioned November 30th 2022 and onward now at least knows what the tech is and I'm not saying they know you know what attention means uh right but I am saying that they know some of the capabilities around these generative models they know some of the capabilities around agentic and multi-agent systems uh and they're comfortable um you know talking to experts about it uh allocating budget for it uh and talking to their board of directors and shareholders about it as well.</p>
</details>

**CFO**（首席财务官）因为CEO关心这些事情，所以她也显然需要关心。但她会关心对底线的影响，对吧？CFO就是做这个的。他们进行分配，他们进行预算规划，他们需要基本上将一些数字写入Excel电子表格，而这些数字必须部分来自定量评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, we have the CFO who because the CEO cares about this stuff, uh, also obviously needs to care about it, but she's going to care about the impact to the bottom line, right? That's what a CFO does. They're doing allocation, they're doing budget planning, uh, and they're going to need to basically write some numbers into an Excel spreadsheet, and those numbers have to come from, in part quantitative evaluation.</p>
</details>

**CISO**（首席信息安全官）现在将这视为巨大的安全风险和机遇。对于那些以前没有向企业销售过产品的人来说，CISO通常更愿意更快地开出支票，特别是对初创公司，并且比CIO的流程更少。CIO通常拥有更大的组织，并且流程更多。CISO往往更灵活，更愿意尝试工具。所以这实际上发生在智能体革命之前，当生成式AI开始出现时，CISO们就说：“嘿，**幻觉检测**（Hallucination Detection: 识别AI模型生成不准确或虚假信息的能力）、**提示注入**（Prompt Injection: 通过恶意提示操纵AI模型行为的攻击），这些都属于安全领域。”这就是为什么你看到很多**防护栏产品**（Guardrail Products: 旨在确保AI系统行为符合预期、安全且道德的工具），包括Arthur AI以及我们竞争对手的产品，都进入了CISO办公室，并且基本上能够签下大量交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, CISOs now see this as, you know, a huge security risk and opportunity. And for those who haven't sold into enterprises before, slicers are typically willing to write checks uh smaller checks especially for startups uh more quickly and with less overhead than like a CIO would. CIOS tend to have a bigger org for one and also tend to have a lot more process. CISOs tend to be a little bit more scrappy and willing to try out tools and so on. And so this actually happened before the agentic uh revolution. This actually happened when Genai started coming up where CISOs were like, hey, hallucination detection, prompt injection, things like that. that's firmly in the security space, which is why you've seen a lot of guardrail products, including Arthur, including the ones that come from our competitors going into the CISO's office and and basically being able to sign a lot of deals.</p>
</details>

**CIO**和**CTO**仍然支持。CIO想要保住他们的工作。而CTO现在总是想要标准化，对吧？他们需要根据数据做出决策。这些数据部分来自像**Hôtel标准**（Hôtel Standards: 可能是指行业或技术标准，具体指代不明确，此处按原文音译）这样的标准。这很棒，我在这里列出了很多C-Suite高管，我还没有谈到首席战略官或其他职位，但像CEO、CFO、CTO、CIO、CISO，他们控制着大量预算，现在他们都愿意讨论并且都对理解AI评估的需求达成共识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the CIO, corporate, they're still on board. Uh they want to keep their job. And the CTO's now, uh they always want standard, right? They need to make these decisions based on numbers. Those numbers are coming in part from like hotel standards standards like that and that's great right so I've listed a lot of the seauite here I haven't talked about chief strategy officers or otherwise but like the CEO the CFO the CTO the CIO the CISO they control a lot of budget and now they are all willing to talk about and they're all aligned about basically the need to understand evaluation from AI</p>
</details>

### 行业转向：多智能体系统监控

很好，快速提醒一下，你们应该相信我所说的。所有评估公司、可观测性公司、监控公司、安全公司，无论你如何称呼它们，都已转向**多智能体系统监控**（Multi-Agent Systems Monitoring: 监控由多个相互作用的AI智能体组成的复杂系统）。关于你应该监控整个系统，而不应该只监控一个特定智能体使用的单个模型的观点，在行业和政府中都得到了很好的采纳和理解。我认为将这一点提升到高层讨论是件好事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">great so uh quick remind me you know you should hold me truthful All the evaluation companies, observability companies, monitoring companies, security companies, whatever you want to call them, have shifted into a multi-agent systems monitoring, right? The point around you should monitor the whole system. You shouldn't just monitor the one model that is being used by one particular agent. That's well taken and well understood in industry and in government. And I think that's that's great to have that at that topline discussion point.</p>
</details>

但是，请相信我。4月中旬，**The Information**（一家专注于科技和商业的媒体）发表了一篇文章，披露了一些评估领域初创公司的营收数据，包括Bias、Galileo、Brain Trust等，但这些数据滞后了大约6到8个月。而根据我与业内朋友的交流，这些数字已经不再代表这个领域公司目前的收入水平。所以，让我们看看The Information在2026年初会泄露什么数据，也许我们会看到AI评估初创公司的营收不再滞后，因为今年就是AI评估之年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But, you know, keep me honest here. Uh there was an article that came out in midappril uh in the information uh showing some leaked revenue numbers for a variety of startups in the evaluation space and biases Galileo Brain Trust and so on but they were lagged by about 6 months or eight months um and just from talking to friends in the space uh those numbers are no longer representative of what folks in this area are making. And so let's see what the information leaks in early 2026 about this and maybe we'll see something like revenue no longer lags at AI evaluation startups because this is the year for AI evaluation.</p>
</details>

### AI评估初创公司的市场展望

好的，我将留一些时间提问。我确实提到Mozilla AI并非完全专注于评估领域。我们有一个非常好的开源项目，完全不盈利，我们称之为**轻量级大型语言模型**（Light LLM: 可能是指针对多智能体系统优化的小型或高效LLM）用于多智能体系统。所以，如果你正在尝试不同的多智能体系统框架，可以看看“Any Agent”。我们为你实现了其中许多框架，并提供统一的接口。所以对于在座的各位来说，这可能是一个有趣的尝试项目。谢谢大家。我将有三分钟时间回答问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. So I'll leave it with some time for questions. Um I did mention Mozilla is not firmly in the evaluation space. We do have a very nice open source not monetized at all what we're calling a light LLM for multi-agent systems. So if you're playing around with different multi-agent system frameworks check out any agent. We implement a lot of them for you under a unified interface. So for people in this room that might be a fun project to play around with. So thank you. I'll uh have three three minutes for questions.</p>
</details>

### 问答环节：领域专业知识与LLM作为评估者

问：好的，谢谢，非常棒的演讲。我有一个关于企业价值的问题，即大多数生成式AI的评估都需要领域专业知识。例如，如果你正在构建一个多智能体系统来做金融投资分析，进行**折现现金流**（Discounted Cash Flow: 一种估值方法，通过预测未来现金流并将其折现到当前价值来评估投资）电子表格，那么这个智能体做得对不对？我只是想了解这个问题是如何解决的？因为大多数人都是从机器学习背景出身，处理的是结构化数据，但现在有很多非结构化数据，你必须衡量质量，比如它是否像人类一样行动？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So okay thanks uh thanks great presentation. I just have a question really about the enterprise value about the most of the evaluations in Genead require domain expertise. So for example, if you're building a multi- agent system to do financial investment analysis to do something called a discounted cash flow spreadsheet, is the agent doing it correctly or not? Uh I'm just trying to understand is how is that problem getting solved? Because most of them are, you know, coming from an ML background where it was structured data, but this is a lot of unstructured data and you have to measure the quality like is it in acting like a human, right?</p>
</details>

答：是的，是的，这个问题很好。实际上，我在《**自然机器智能**》（Nature Machine Intelligence: 一本专注于机器学习和人工智能的科学期刊）上发表过一篇论文，讨论了当你使用基于角色的智能体时可能出现的一些问题，比如我说“扮演一个40多岁的俄亥俄州农民”。这其中有价值，但你无法做到完美。我的直觉反应是，**Merkor**（一家提供专家众包服务的公司）泄露了一份电子表格，该公司可以雇佣专家，显示谷歌、Meta或大型银行等公司以每小时50美元、100美元、200美元的价格雇佣专家，做你所说的事情，即让专家与多智能体系统并排工作。基本上，他们就像坐在那个可能在一两年内取代你工作或改变你工作的实习生旁边。也许“取代”不是正确的词，但他们基本上是在与多智能体系统同步进行昂贵的人工验证。如果你要做折现现金流分析，这种事情你可能赚很多钱也可能亏很多钱，而且如果做错了可能会丢掉工作。那么花大笔钱进行人工验证是值得的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. It's it's great. Actually, I have a paper in nature machine intelligence talking about some of the problems that can come around when you do persona based agents where I say act like a farmer in Ohio in your mid-40s and so on. There's value in that, but you can't do it perfectly. And my gut reaction to this is um there was a leaked spreadsheet from Merkor, which is a company that uh can hire in experts showing, you know, $50 an hour, $100 an hour, $200 an hour for experts to be hired by, for example, Google or for example, Meta or for example, large banks to do kind of what you're saying, which is you're going to have an expert sitting alongside the multi- aent system. Uh basically sitting next to, you know, the intern who's going to come in and take your job in like a year or two or change your job. Maybe take is not the right word, but they're basically doing that expensive human validation and lock step with the multi- aent system, which you know, if you're going to be doing discounted cash flow analysis, right, the kind of thing where a you can either make or lose a lot of money and b lose your job if you get it wrong. Uh it's worth spending that large amount of money doing the human validation. It's a question for everyone though is like what does that look like in five years once that data is incorporated into the systems themselves and that can be a mode as well, right?</p>
</details>

不过，对所有人来说，问题是五年后，一旦这些数据被整合到系统本身中，会是什么样子？那也可以成为一种模式，对吧？当你与评估领域的任何人交谈时，他们都会说数据集创建和环境创建比任何事情都重要，这也是你所提到的。所以，如果我花很多钱来建立一个非常好的、有竞争力的折现现金流环境或其他什么，那就可以帮助我超越竞争对手。所以，这方面是有**资本支出**（Capex: Capital Expenditure: 企业用于购买、维护或升级实物资产的资金）的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when you talk to anyone in the eval space like it's the data set creation and the environment creation that matters more than anything which is the point you're getting at as well. So if I if I spend a bunch of money to have a very good competitive like uh DCF environment or whatever that can help me versus my competitors. So there is like um there is capex going into that.</p>
</details>

问：嗯，是的。谢谢你的演讲。你对评估何时主要由生成式AI或**大型语言模型**（LLM: Large Language Model: 能够理解和生成人类语言的AI模型）驱动，大概有什么时间表吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh yeah >> thanks for the presentation. Um do you have a rough uh maybe timeline on when you think um eval will primarily be driven by uh maybe gen AI or LMS?</p>
</details>

答：是的，**LLM作为法官**（LLM as a Judge: 使用大型语言模型来评估其他AI模型或系统的性能和输出）的范式，我认为在上次演讲中也提到了。我们看到它在实践中被使用，因为它确实存在一些问题。我们上个月在**iClar**（可能是指ICLR，国际学习表征会议，一个顶级的机器学习会议）上发表了一篇论文，讨论了LLM作为法官与人类相比存在的一些偏差，以及简洁性或有用性等一些**Anthropic**（一家AI安全和研究公司，以其“宪法AI”方法闻名）词汇。但总而言之，它在某种程度上解决了数据集创建的问题，你可以给LLM一个角色，它就像一个“穷人版”的人类法官。所以我们看到很多人现在将它作为产品使用，但你需要确保你正在验证它，并确保你没有走向某种奇怪的偏见方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, the LLM as a judge paradigm is and I think this was talked about in in the previous talk as well. Uh we see it getting used in practice because there are issues with it, right? We have a paper in iClar uh from last month talking about some of the biases that LLMs as judges have versus humans and things like conciseness or helpfulness and some of those anthropic words. But the long and short of it is that like it it solves the data set creation problem in some sense and that like you can ask you you give a persona to an LLM and it it it is like a poor man's version of like a human doing the judging and so we see a lot of people using that as a product right now but you need to toward the toward the last question that was asked you do need to make sure you're validating this and and making sure that you're not going off in some weird bias direction</p>
</details>

时间到了。哦。很高兴会后继续交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's time. Oh. Uh, happy to chat offline.</p>
</details>