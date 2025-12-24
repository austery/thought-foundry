---
area: tech-insights
category: technology
companies_orgs:
- DeepMind
- Figma
date: '2025-12-02'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemini
project:
- ai-impact-analysis
- entrepreneurship
series: ''
source: https://www.youtube.com/watch?v=vpP_P85sNsE
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: Spur 公司 CEO Sneha 介绍了其利用 AI 浏览器代理实现软件质量保证自动化（Agentic AI QA）的创新方法。传统测试脚本构建复杂、不稳定且难以扩展，而
  Spur 允许用户通过自然语言编写测试，由 AI 代理模拟真实用户行为执行。该技术显著缩短了发布周期，并能发现传统方法难以捕捉的细微错误，例如 Alo Yoga、Living
  Spaces 和 HelloFresh 上的实际案例，展示了其在提升软件质量方面的巨大潜力。
tags:
- ai-agent
- browser-automation
- language
- quality
- software
title: Spur CEO 详解：如何构建 AI 代理取代不稳定的测试脚本
---

### 介绍 Spur：用 AI 代理革新软件测试

大家好！很高兴见到大家，感谢 First Mark 邀请我今天来到这里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi guys. Um, really nice to meet you all and um, thanks for First Mark for having me here today.</p>
</details>

我是 Sneha，Spur 的联合创始人兼首席执行官，很高兴今天能为大家带来这次演示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Sneha, the co-founder and CEO at Spur and yeah, excited to kind of take you through the presentation today.</p>
</details>

简单介绍一下今天的议程：我将概述 Spur 是什么、我们是谁、我们的客户和投资者，然后将大部分时间用于演示，展示我们称之为“Spurring Time”的功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just a quick agenda. I'm going to go over what Spur is, who we are, our customers, investors, and then really spend most of the session today on um giving you a demo and what we call spurring in time.</p>
</details>

Spur 提供了一种全新的测试方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Spur is a new way to test.</p>
</details>

我们主要构建 **AI 浏览器代理**（AI Browser Agents: 模拟用户行为进行交互的自动化程序），利用**代理式 AI**（Agentic AI: 能够自主规划和执行任务的人工智能）来自动化**软件质量保证**（Software Quality Assurance - QA: 确保软件产品或服务满足预定质量标准的过程）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we are basically building AI browser agents that automate software quality assurance with agentic AI.</p>
</details>

我知道在座有许多技术人员。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know that there's a good number of technical folks in the audience.</p>
</details>

所以，这是当今测试领域的现状，或者说，有了代理系统后，情况已经不再如此了。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">So this is really what the state-of-the-art in testing today or I would say not not no no no longer the case with agentic systems but this is what this is what an end to end test looked like for the longest time.</p>
</details>

长期以来，**端到端测试**（End-to-End Test: 模拟真实用户场景，从头到尾验证整个系统流程的测试）都是非常漫长、难以构建、极不稳定且难以扩展的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's very long very hard to build super flaky and yeah it just doesn't really scale.</p>
</details>

现在有了 Spur，其理念是您可以在 Spur 上构建测试，并且可以在 10 分钟内完成，甚至可能只需一分钟。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now with spur the idea is a test on spur um you know you can kind of build it in 10 minutes. I say 10 minutes this could even be a minute.</p>
</details>

核心思想是您可以用**自然语言**（Natural Language: 人类日常使用的语言）编写测试。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea is you can write tests in natural language.</p>
</details>

测试的输入和意图最终会转化为一个脚本，提供给 AI 浏览器代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The inputs and the intent behind a test is ultimately the script that is given to an AI browser agent.</p>
</details>

我们将深入探讨其内部工作原理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we'll dive deeper into how this actually works under the hood.</p>
</details>

### Spur 团队与技术背景

关于团队的一些背景：Spur 是由我和我的首席技术官 Anushka 共同创立的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a little bit of background on the team. So Spur was co-founded by myself and my CTO Anushka.</p>
</details>

我们两人都有产品和研究背景。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we both have a product and a research background.</p>
</details>

Anushka 曾在 DeepMind 工作，我曾在 Figma 工作，我们相识于**耶鲁大学自然语言处理实验室**（Yale NLP lab: 耶鲁大学专注于自然语言处理研究的实验室）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Anushka used to work at DeepMind and myself at Figma and we met at the Yale NLP lab.</p>
</details>

我们得到了一个由前创始人、客户和竞争对手组成的优秀团队的支持，以及我们非常欣赏的投资者。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're backed by an amazing team and of you know a team of ex-founders, customers and competitors um as well as investors that you know we really love and we have an amazing team here and we're also hiring across um many different roles.</p>
</details>

我们正在招聘各种职位，所以如果您正在寻找应用 AI、研究、设计、销售等方面的机会，请在活动结束后找我。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So short plug, please find me after the event if you're, you know, looking for applied AI, uh, you know, research, design, sales, etc. We're we're hiring across the board.</p>
</details>

我们正在与世界上增长最快的品牌合作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're working with some of the fastest growing brands in the world.</p>
</details>

您可能会想，为什么是品牌呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you might wonder like why why brands, right?</p>
</details>

通常，您之前看到的 Selenium、Cypress、Playwright 测试，品牌和 B2C 公司拥有不断变化的用户界面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So typically you saw the Selenium Cypress Playright test that I kind of showed earlier. brands and BTOC companies, they have user interfaces that are constantly changing, which makes the idea of having rigid tests just doesn't really scale and really bleeds the need to have a more agentic approach for testing.</p>
</details>

这使得僵化的测试难以扩展，并迫切需要一种更具代理性的测试方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with some of our customers, the impact that we've created is really, you know, cutting down that release cycle time from one week to a couple of hours, from 6 months to even 5 days.</p>
</details>

通过与一些客户合作，我们实现的成果是将**发布周期**（Release Cycle: 软件从开发到发布所经历的各个阶段）从一周缩短到几个小时，甚至从六个月缩短到五天。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's it's pretty incredible what a gentic QA can do for um QA teams.</p>
</details>

代理式 QA 对 QA 团队来说，其作用是相当惊人的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the technology powering spur as I mentioned Anushka and myself we both met at the NLP lab.</p>
</details>

正如我之前提到的，我和 Anushka 都相识于自然语言处理实验室，这正是 Spur 背后技术的动力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the underlying technology is really um browser agents and browser agents trained for specifically software testing and quality assurance tasks.</p>
</details>

所以，其底层技术是专门为软件测试和质量保证任务训练的浏览器代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So under the hood it's powered by LLMs.</p>
</details>

在底层，它由**大型语言模型**（Large Language Models - LLMs: 经过海量文本数据训练，能够理解和生成人类语言的人工智能模型）驱动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea is you can now give natural language instructions and instead of having to go through a step of making it into a test script in code, you give those instructions to a browser agent that goes in and executes those actions simulating an actual end user or customer.</p>
</details>

其理念是您现在可以直接给出自然语言指令，无需将其转换为代码测试脚本，而是将这些指令交给浏览器代理，由它模拟实际的最终用户或客户来执行这些操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the idea is the agent can catch a lot more things than a typical script can and even what you and I can which we will I will be putting you guys to the test shortly.</p>
</details>

因此，代理能够捕捉到比传统脚本，甚至比我们人类能捕捉到的更多问题，我很快就会让大家亲身体验一下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So under the hood you know we support all different model providers and because of this you know from a testing perspective right we're going way beyond just functional testing.</p>
</details>

在底层，我们支持所有不同的模型提供商，因此从测试的角度来看，我们远远超越了仅仅是**功能测试**（Functional Testing: 验证软件功能是否符合需求和规格的测试）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we have a whole set of agents that we support from action agents, assertion agents, extraction agents, um UIUX testing agents and persona agents.</p>
</details>

我们支持一整套代理，包括**行动代理**（Action Agents: 执行特定操作的代理）、**断言代理**（Assertion Agents: 验证特定条件是否满足的代理）、**提取代理**（Extraction Agents: 从页面中提取信息的代理）、**UI/UX 测试代理**（UI/UX Testing Agents: 专注于用户界面和用户体验测试的代理）以及**角色代理**（Persona Agents: 模拟特定用户角色行为的代理）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So essentially it's not just QA in the sense of does this flow work but also is this flow optimal?</p>
</details>

所以，本质上，这不仅仅是验证流程是否正常工作的 QA，还在于这个流程是否最优。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does it really feel good as an end user?</p>
</details>

作为最终用户，体验是否真的很好？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then going a little deeper into the underlying architecture.</p>
</details>

再深入探讨一下底层架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the idea is the enentic inputs as I mentioned can be natural language instructions but we take everything from you know a text input a Jira ticket you know a video or loom recording and actually we use Gemini's models for that um and or even like PDF or CSV files of test cases and then that gets into a system of robust robust multi- aent architecture where we have overseer agents kind of overseeing both action and assertion agents.</p>
</details>

代理的输入，正如我所说，可以是自然语言指令，但我们接受各种形式的输入，包括文本输入、**Jira 工单**（Jira Ticket: 在 Jira 项目管理工具中用于跟踪任务、缺陷或需求的工作项）、视频或**Loom 录屏**（Loom Recording: 一种屏幕录制和分享工具），实际上我们为此使用了 Gemini 模型，甚至可以是测试用例的 PDF 或 CSV 文件。然后这些输入进入一个强大的**多代理架构**（Multi-Agent Architecture: 多个独立或协作的 AI 代理共同完成任务的系统），其中我们有**监督代理**（Overseer Agents: 负责协调和管理其他代理的代理），它们监督行动代理和断言代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is just one example.</p>
</details>

这只是一个例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I kind of shared that we have many different agents.</p>
</details>

我分享过我们有许多不同的代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So each agent actually has its own um custom under the hood architecture.</p>
</details>

所以每个代理实际上都有自己定制的底层架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that's really where the magic happens.</p>
</details>

但这正是奇迹发生的地方。

### 实际案例：Spur 如何发现关键错误

好的，现在我想带大家看几个 Spur 上的例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So um now I kind of want to walk us through a couple of examples on spur.</p>
</details>

好的，我将介绍我们在 **Alo Yoga**（Alo Yoga: 一个知名的瑜伽服饰品牌）上发现的一个 bug。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So I'm going to cover a bug that we found on Alo Yoga.</p>
</details>

这个屏幕上有一个 bug，它没有被解决。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a bug on this screen. So it's not addressed.</p>
</details>

那么，这种问题是典型的代码脚本能捕捉到的吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, is this something typically like a coded script can catch?</p>
</details>

可能不行，这几乎是不可能的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Probably not. It's impossible.</p>
</details>

但像这样的错误对**转化率**（Conversion Rate: 访问者完成特定目标行为（如购买）的比例）至关重要，特别是对于大型品牌。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">But errors like this are critical to conversion, especially for large brands.</p>
</details>

想象一下在黑色星期五，您正在进行促销活动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like imagine on Black Friday, you're going on a sale.</p>
</details>

评论与您购买的产品不符，您还会购买吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reviews don't even match up to the product that you're buying. Are you going to actually buy it?</p>
</details>

对于像 Alo Yoga 这样年收入超过 3 亿美元的品牌来说，这会损失数百万美元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and this is millions of dollars lost for a brand like Alo Yoga that's doing 300 plus million dollars in revenue.</p>
</details>

所以，这实际上是 Spur 为客户捕捉到的一个真实 bug 的例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is actually an example of a real bug that Spur caught for the customer.</p>
</details>

这是 Spur 上的一个测试结果示例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is an example of a test result on Spur.</p>
</details>

这个测试的输入实际上在屏幕的左侧。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The inputs for this test are actually on the left hand side of the screen.</p>
</details>

正如您所看到的，指令非常动态。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as you can see, um the instructions are very dynamic.</p>
</details>

我稍微放大一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to just zoom in a little bit.</p>
</details>

如果您能看到这里的一些步骤，例如“如果存在密码页面则关闭，然后等待主页加载”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you can see some of the steps here, which is close the password page if present, then wait for a homepage to load.</p>
</details>

这些步骤就像您在与另一个人交谈一样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea is these step these steps are exactly like you would be talking to another human.</p>
</details>

所以我们告诉客户如何思考编写测试的方法，实际上是从“我如何将这些步骤编码”转变为“我如何对 Spur 代理进行**提示工程**（Prompt Engineering: 设计和优化输入提示，以引导 AI 模型生成期望输出的过程），使其按照我想要的方式对我的网站进行 QA”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the way we tell our customers in terms of how they should think about writing tests is really taking a shift from how can I codify these steps to really like how can I prompt engineer the spur agent to QA my site in the way I wanted to.</p>
</details>

所以，回到实际的 bug 和错误描述。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So kind of going into the actual bug and error description.</p>
</details>

这通常是测试的输出，特别是这一步，它基本上捕捉到之前提取的评论摘要指的是一条裙子，但当前产品是 3 英寸高腰短裤，而不是 3 英寸（我不知道那个 3 代表什么）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is typically the output of a test and particularly this step which is basically caught that the review summary that was extracted earlier refers to a dress but the current product is a 3-in high-waist shot shorts not 3 in I don't know what that three means but [laughter] um [clears throat] the specific review summary about dress versatility fall weddings and girls night out is not displayed on the page because it's not relevant to the shorts product being viewed and this error description is also generated by the agent.</p>
</details>

关于裙子多功能性、秋季婚礼和女孩之夜的特定评论摘要没有显示在页面上，因为它与正在查看的短裤产品不相关，并且这个错误描述也是由代理生成的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the customer can really trust the agent to catch everything that even you know even like a human tester might not see.</p>
</details>

所以客户可以真正信任代理捕捉到人类测试员可能都看不到的所有问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea is for any test that runs um we give users a video playback of the actual agent execution as well.</p>
</details>

其理念是，对于任何运行的测试，我们还会向用户提供实际代理执行的视频回放。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to hop into the next example.</p>
</details>

我将跳到下一个例子。

### 更多案例：Living Spaces 与 HelloFresh

好的，第二个 bug 挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, second bug challenge.</p>
</details>

这是昨天在 **Living Spaces**（Living Spaces: 一家家具零售商）上发现的一个 bug，就在他们黑色星期五代码冻结之前。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, this is a bug found on living spaces just yesterday. Um, right before their like code freeze before Black Friday.</p>
</details>

左边是之前，右边是之后。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the left is the before and on the right is the after.</p>
</details>

这个 bug 实际上在“之后”的图片中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The bug is actually on the after image.</p>
</details>

是的，没错，没有存储选项。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. Um, no storage.</p>
</details>

所以，这又是代理发现错误的一个例子，您已经设置了存储过滤器，但在验证步骤中，代理将其标记为错误。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so again, this is kind of another example of an error that the agent finds where you've basically set up the filter for storage and in that validation step, the agent is basically flagging this as an error.</p>
</details>

最后一个例子是关于 **HelloFresh**（HelloFresh: 一家提供食材配送服务的公司），代理的提示实际上非常宽泛。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last example, which is um on HelloFresh, the prompt for the agent is actually pretty broad.</p>
</details>

我们没有真正给出具体的指令，而是给代理设定了一个**用户画像**（Persona: 对目标用户群体特征的详细描述）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you know, we've not really given we're giving the agent a persona.</p>
</details>

我不会为您读完整个用户画像，但基本上是：“您是一个高效、有灵感的用户。您想要在餐桌上享用美味、新鲜的家常饭菜等等。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm not going to read the full persona for you, but basically, you are a efficient, inspired user. You want to get tasty, fresh, home-cooked meals on the table, etc.</p>
</details>

这个用户画像是他们的 UX 或研究团队会提供的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This persona is something that their UX or research team would provide.</p>
</details>

通过这个测试，对于像 HelloFresh 这样的品牌，他们通常会因为**不满意路径**（Unhappy Paths: 用户在使用系统时遇到问题或偏离预期流程的场景）而发现很多 bug。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With this test, typically for a brand like HelloFresh, they get a lot of bugs just by the unhappy parts, right?</p>
</details>

测试不仅仅是关于“满意路径”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not always just about testing the happy parts.</p>
</details>

这里给出的提示实际上是“探索页面并点击其他页面。评估您所看到的、您缺少什么以及对更改和警告的建议。不要太快放弃。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the prompt given here is actually explore the page and click through the other pages. Evaluate what you see, what you're missing, and suggestions for changes and warnings. Don't give up too fast.</p>
</details>

正如您所看到的，这是一个长达 25 分钟的测试。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as you can see, this is a 25m minute long test.</p>
</details>

所以代理在执行过程中实际上会来回操作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the agent is actually going back and forth while it's performing the execution.</p>
</details>

我将播放发现的 bug。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to just play the the bug that was found.</p>
</details>

这发生在 hellofresh.com 的美国网站上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this was on hellofresh.com US.</p>
</details>

所以您可以想象这有多严重。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can just imagine how big this was.</p>
</details>

在这个测试中，代理实际上正在通过漏斗，正如您所看到的，它基本上回退了一步，在回退的过程中，整个页面实际上都空白了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this test the agent is actually going through the funnel and as you can tell um it's basically gone back a step and in that process of going back the entire page is actually blanked out and this is it you know this is a simple react state bug but you're not going to catch something like this if you test things purely linearly which again a coded script um is really not going to be able to give you that level of coverage.</p>
</details>

这是一个简单的**React 状态错误**（React State Bug: 在 React 应用中，由于组件状态管理不当导致的错误），但如果您纯粹线性地测试，您是无法捕捉到这样的问题的，而代码脚本也无法提供这种级别的覆盖。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the idea is with these prompts, it's really up to the end user to kind of um be creative and you know come up with different use cases for the agent and kind of go beyond that functional um codified test approach.</p>
</details>

所以，这些提示的理念是，最终用户可以发挥创造力，为代理设计不同的用例，超越那种功能性的、编码的测试方法。