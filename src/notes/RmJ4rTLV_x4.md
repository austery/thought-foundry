---
area: tech-insights
author: ''
category: technology
companies_orgs:
- Zapier
- GitLab
- Atlassian
date: '2025-12-19'
guest: ''
layout: post.njk
products_models:
- Cursor
- Jira
project:
- ai-impact-analysis
source: https://www.youtube.com/watch?v=RmJ4rTLV_x4
speaker: AI Engineer
summary: 本文介绍了 Zapier 如何应对 8,000 多个集成带来的“应用侵蚀”挑战。通过发起让支持团队直接修复代码的实验，并结合名为 Scout 的
  AI 代码生成项目，Zapier 成功利用 MCP 协议和 Cursor SDK 将 AI 工具嵌入工程流。这不仅显著提升了支持团队的问题解决速度，还证明了支持人员在处理客户痛点和验证解决方案方面的独特优势。
tags:
- code
- engineering
- llm
- technology
title: 从大峡谷到自动化：Zapier 如何利用 AI 辅助支持团队修复代码
---

### 大峡谷与“应用侵蚀”

我很兴奋能在这里分享 Zapier 是如何赋能支持团队去交付代码的。在开始之前，我想问一下，这里有人去过大峡谷吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm so excited to tell you about how at Zapier we are empowering our support team to ship code. Before I tell you about that, has anybody here visited the Grand Canyon?</p>
</details>

人数还真不少。那有人在大峡谷里划过皮艇吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a good amount. Anybody rafted through the Grand Canyon?</p>
</details>

我看到有一位。我刚结束了一次为期 18 天、长达 200 多英里的大峡谷漂流之旅。那太不可思议了。没有互联网，没有手机信号。当我一上岸，我就发现我要来做这场演讲。在河上的日子里，我完全没有想过工作，但一旦上岸，我就开始思考大峡谷和 Zapier 之间的相似之处。我们有一个共同点，那就是侵蚀（Erosion）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I see one person. I just got off an 18-day trip rafting through the Grand Canyon over 200 miles. It was incredible. No internet, no cell service. The moment I got off, I found out I was giving this talk. I didn't think about uh work at all on the river, but once I got off, I started thinking about the parallels between the Grand Canyon and Zapier. And we have one thing in common, and that is erosion.</p>
</details>

自然界的侵蚀是在风、水和时间的共同作用下，历经数百万年发生的。它创造了我们所体验到的美丽峡谷，而且它从未停止，一直在持续。在 Zapier，我们有超过 8,000 个基于第三方 **API**（Application Programming Interface: 应用程序编程接口）构建的集成，这些接口在不断变化，我现在把这种现象称为**应用侵蚀**（App Erosion: 由于第三方 API 的变更、升级或弃用，导致原本稳定的应用集成逐渐产生故障或失效的现象）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, natural erosion happens over millions of years with wind, water, and time. It creates the beautiful canyon that we experience, and it's never stopping, always continuing. At Zapier, we have over 8,000 integrations built on thirdparty APIs, and they are constantly changing, which I'm now thinking of as app erosion.</p>
</details>

我们已经成立 14 年了，有些应用也同样老旧。API 的变更和弃用会影响我们，并引发可靠性问题。再说一次，这种过程从未停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've been around for 14 years. Some of our apps are that old. API changes and deprecations impact us and create reliability issues. Again, it never stops.</p>
</details>

所以，我喜欢把我们的应用看作大峡谷的地层，它们需要持续的关注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I like to think of our apps as like layers in the Grand Canyon and they need constant attention.</p>
</details>

### 应对积压危机：两项平行实验

如果我们建立一个自己的“Zapier 大峡谷”，应用就是峡谷的崖壁，而我们的支持团队就像在中间穿行的河流，时刻关注着应用侵蚀。但我们面临着积压危机。工单进来的速度超过了我们的处理能力，这导致了集成可靠性问题、糟糕的客户体验，甚至造成了客户流失。为了解决应用侵蚀问题，我们开启了两项平行实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if we were to create our own Zap Your Canyon and our apps would be at the walls, here's our support team flowing down the middle watching out for app erosion. And we have a backlog crisis. Tickets were coming in faster than we could handle them. creates integration reliability issues, poor customer experience, even churn. So to solve for app erosion, we kicked off two parallel experiments.</p>
</details>

第一个实验是将支持团队的工作从仅仅是分拣（Triaging）转变为同时也去修复这些 Bug。这是实验一。实验二，我们想探究：AI 能否帮助更快地解决应用侵蚀？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first was moving support from just triaging to also fixing these bugs. This experiment number one and experiment number two, we were asking, can AI help solve app erosion faster?</p>
</details>

让我们进入实验一。这个实验在两年前就开始了，但必须从明确“为什么”开始。我们需要获得高层的支持，赋能支持团队去交付代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's jump into experiment one. This get kicked off two years ago but had to start with the why. We needed to get that buy in to empower our support team to ship code.</p>
</details>

应用侵蚀是从支持团队流向工程团队的主要 Bug 来源之一。因此这里有巨大的需求，而支持团队也非常渴望这种体验。他们中的许多人最终想转型做工程，而且非正式地，许多支持团队成员已经在帮助维护我们的应用了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So app erosion is one of the major sources of bugs coming through to from support to engineering. So there's a big need support is eager for this experience to a lot of them want to go into engineering eventually and unofficially many support members were already helping to maintain our apps.</p>
</details>

接下来是我们如何展开工作的。我们设置了一些护栏（Guard rails）。我们最初只选择了四个目标应用来集中修复。工程团队负责审查所有来自支持团队的 **MR**（Merge Request: 合并请求，指开发者请求将代码改动合并进主代码库的操作），我们始终把重点放在应用修复上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This moves us into how we started this out. Put on some guard rails. We started with just four target apps to uh focus our fixes on. engineering was set to review any merge requests coming from support and we kept the focus on app fixes.</p>
</details>

### 项目 Scout：利用 AI 进行代码生成

进入实验二，这也是过去几年我一直主导的项目。我们如何利用 **Codegen**（Code Generation: 自动代码生成）来帮助解决应用侵蚀？非常凑巧，这个项目的名字叫 Scout（侦察员），这与我刚刚经历的大峡谷体验非常契合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So jumping into experiment two, this is what I've been leading for the last couple of years. How can we use codegen to help solve for app erosion and so fortuitously the name of this project is scout which ties in so well to the Grand Canyon experience that I've just been through.</p>
</details>

作为一名合格的产品经理，我们从调研（Discovery）开始。我们进行了一些“吃自家狗粮”（Dog fooding: 指公司内部人员亲自使用自己开发的产品，以发现缺陷或改进点）的尝试，我也提交了一些应用修复代码。我们观察了工程师和支持团队成员在修复应用过程中的行为。我们设计出了在这个过程中遇到的痛点是什么？工作的各个阶段是什么，以及每个阶段花费了多少时间？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As any good product manager, we start with discovery. We did some dog fooding, so I shipped some app fixes. Uh we shadowed engineers and support team members as they were going through the app fix process. We designed out uh what are the pain points experienced along the way? What are the phases of the work and how much time is spent?</p>
</details>

我们的一个重大发现是，在收集上下文（Context）上花费了大量时间：查阅第三方 API 文档，甚至在互联网上爬行寻找关于正在出现的 Bug 的信息——也许 Zapier 之外的其他人已经发现并解决了它；还要查看内部的上下文日志。所有这些信息，作为一个人类去搜索是非常耗费精力的，而且理解（Grok）和处理这些信息的工作量也非常大。我们知道这是我们需要解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One big discovery we had is how much time is spent gathering the context going to the thirdparty AP API docs even crawling the internet looking for information about a bug that's emerging maybe somebody else has already discovered and solved for it outside of Zapier internal context logs all of this is a lot of context to go and search for as a human uh and a lot to gro and work through. This is something we knew we needed to solve for.</p>
</details>

针对这些痛点，我们开始构建一些我们认为可以解决这些问题的 API。其中一些 API 使用了 **LLM**（Large Language Models: 大语言模型）来构建诊断工具，代表支持人员或工程师收集所有上下文，对其进行整理，并生成诊断结果。还有一些则没有使用 LLM，比如我们的单元测试生成器，其中的测试案例查找器（Test case finder）只是通过简单的搜索查询来寻找合适的测试案例。我们构建了一堆 API，有很多很棒的想法。虽然测试的东西很多，但在第一阶段我们也遇到了一些挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where we started with all this great uh opportunities and pain points is we started building APIs that we believed would solve for these individual um pain points. And some of these APIs are using LLMs to you know for our diagnosis tool gathering all that context on behalf of the uh support person engineer and curating that context and building a diagnosis that's [clears throat] using an LLM and then some aren't like we have a unit test uh unit test generator is but the um test case finder is simply using a search query to look for the right test cases to pull in for your unit test. We built a bunch of APIs. We had a bunch of great ideas. So there was a lot for us to test with, but we ran into some challenges in this first phase.</p>
</details>

### 从独立工具到流程嵌入

我们虽然有了 API，但它们没有嵌入到工程师的工作流程中。正如我刚才提到的，工程师们不喜欢为了找齐上下文而跳转太多的网页，他们希望所有信息都能主动推送到面前。然而，我们在内部创建了一个名为 Autocode 的网页交互界面，一个可以试用我们 API 的沙盒。我们对团队的要求是：“来试试我们的 API 并给我们反馈。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We had APIs, but they were not embedded into our engineers process. So our tool I just said they don't like to go to so many web pages to find all their context. They would love all this information to come to them. And yet our web interface where we've we've created a playground we call autocode internally where you can come and play around with our APIs and our ask to the teams was come try out our APIs and give us feedback.</p>
</details>

但这只是又多开了一个窗口。所以参与度并不高。而且因为我们上线了太多的 API，我们的团队精力分散得很厉害。与此同时，**Cursor**（一款集成了 AI 的代码编辑器）发布了，并在 Zapier 内部获得了广泛应用。我们都是 Cursor 的死忠粉，但从我们这一方的角度来看，这使得我们的一些工具变得不再必要了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this is just one more window to go to. So we didn't get a lot of engagement also because we had shipped so many uh APIs our team was spread pretty thin. Cursor launched at the same time which has gotten great adoption at Zapier. We're all huge fans of Cursor. But from our side, it made some of our tools no longer necessary.</p>
</details>

但在这一阶段，有一个巨大的收获：我们的一个 API 成为了支持团队的心头好，那就是“诊断”（Diagnosis）工具。针对那个“需要外出寻找并整理所有上下文才能开始解决问题”的核心痛点，我们通过诊断 API 代表支持团队完成了这项工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there was one major win in this phase, which is one of our APIs became a support darling. It's diagnosis. That number one pain point of needing to go out and find all of your context, curate it for yourself so you can start solving the problem. We were doing that on uh the sport team's behalf with the diagnosis API</p>
</details>

支持团队非常喜欢这个工具，以至于他们决定将其嵌入到自己的流程中。他们要求我们在 Autocode API 上构建一个 Zapier 集成，这样他们就可以将其嵌入到那个“从支持问题创建 **Jira**（由 Atlassian 开发的广泛使用的项目与工单追踪系统）任务”的自动化流程中。现在，诊断结果已经包含在任务中了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and support loved it enough that they decided to embed it into their process. They asked us to build a zap year integration on our autocode APIs so they could embed it into their zap that creates the jur ticket from the support issue and now diagnosis is included.</p>
</details>

事实证明，嵌入工具是提高使用率的关键。那么我们如何嵌入更多工具呢？这时，**MCP**（Model Context Protocol: 由 Anthropic 发起的、允许 AI 模型与外部数据源和工具安全连接的开放协议）出现了，它解决了我们的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So embedding tools is the key to usage as we find out. So how can we embed more of our tools? Well, then MCP spins up and that solves our problem.</p>
</details>

我们现在可以将这些 API 工具嵌入到工程师的工作流中。具体来说，我们的工程师在使用 Cursor 时，会直接调用这些 Scout MCP 工具。我们的构建者们在使用 Scout MCP 工具时，离开 **IDE**（Integrated Development Environment: 集成开发环境，如 VS Code、Cursor 等）的次数减少了，更多的时间花在同一个窗口中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can now embed these API tools into our engineers workflow. Specifically, our engineers are pulling in these MCP tools as they're using cursor. Our builders using Scout MCP tools are leaving the IDE less, spending more time in one window.</p>
</details>

### 迈向 Agent：Scout Agent 的诞生

挑战依然存在。我们最核心的“诊断”工具虽然非常有价值，能提供上下文和建议，但运行时间太长。虽然我们可能会缩短运行时间，但在 IDE 中同步处理工单时，这种等待让人沮丧。我们也无法跟上定制化的需求。不仅 MCP 发布了并被我们利用，Zapier 官方的 MCP 也发布了。如果我们的工具跟不上定制化需求，内部工程师就会转而使用 Zapier 的官方 MCP，这虽然很好（因为大家在同一个团队解决同一个问题），但我们的一些工具就走到了死胡同。此外，采用率也比较分散。我们有一整套工具，我们认为每个工具在不同阶段解决不同问题都有其价值，但并不是每个工程师都在用，即使在用，也只用其中几个。我们因此产生了一个假设：真正的价值将来自于将这些工具串联在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Still coming into challenges. One of our uh our our key tool diagnosis uh is so valuable to pull all that context and to provide a recommendation, but it takes a long time to run. Now, we might run down that runtime. However, as you're working synchronously on a ticket in your ID, this was frustrating. We also weren't keeping up with the customization needs. Not only did MCP launch and we started leveraging it, Zap Your MCP launched too. And some of our tools, if we weren't keeping up with the customization needs, our engineers internally looked to Zap Your MCP, which is great. We're all on the same team solving the same problem, but some of our tools had a dead end. Also adoption was scattered. We had a whole suite of tools and we thought there was value in each of them as it solves for different problems across the different stages. Not every engineer was using our tools and if they were using tools, they're only using a few of them. So we have tool usage. We're happy about that. But we were under the hypothesis that true value is going to come from tying these tools together.</p>
</details>

那么，如果我们来负责这些工具的编排（Orchestration），而不是简单地说“这里有一套工具，随你便怎么用”，会怎么样？如果我们把它们结合起来并创建一个 **Agent**（智能体）来编排这一切呢？我们称之为 Scout Agent。我们运行针对工单的诊断，利用这些信息启动代码生成工具，然后结合正确的上下文生成一个合并请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what if we owned orchestration of these tools rather than saying here's a suite of tools you use them as you wish what if we combined them and created an agent to orchestrate this. So this we are calling scout agent. We take that diagnosis run that against a ticket uh use that information to actually spin up a codegen tool which will then produce a merge request using all the right context.</p>
</details>

那么，谁会从这种编排中受益最多呢？Zapier 有几个集成团队在负责修复各种复杂程度的应用 Bug，还有支持团队。当我们思考谁应该是 Scout Agent 的第一个客户时，我们认为应该是那个处理队列中刚冒出来的、紧急的小 Bug 的团队，也就是支持团队。现在，我们的两项实验合二为一了，Scout Agent 诞生了，它是专门为支持团队打造的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So who would benefit the most from orchestration? There are several integration teams at Zapier who are solving for these app fixes of various levels of complexity and there's the support team. So when we're saying who should be our first customer scout agent, we were thinking it should probably be the the team fielding small bugs that are emergent and coming hot off the queue which is the support team. And now our two experiments merge and we have scout agent. We are building for the support team.</p>
</details>

### Scout Agent 的工作流程

这是它的工作流程：支持人员向 Scout Agent 提交一个问题。我们首先对问题进行分类。接着，我们评估它是否可修复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is the flow of how it works. Support is submitting an issue to scout agent. We first categorize the issue. We next assess its fixability.</p>
</details>

并不是每个来自支持团队的问题都能被修复。如果我们认为它是可修复的，我们就会进入生成合并请求的阶段。到那时候，当支持团队第一次拿起这张工单时，它上面已经附带了一个合并请求。他们会进行审查和测试。如果他们认为这并不能完全满足客户需求，或者不是最佳解决方案，他们可以在 GitLab（我们工作的地方）中直接请求调整，Scout 会再次进行处理。希望到那时我们已经搞定了，支持团队就可以将该 MR 提交给工程团队进行审核。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not every issue that comes from support can be fixed. If we thinks it's fixable, we'll move on to generating a merge request. At that point, the support team, this is the first time they're picking up the ticket. It already has a merge request attached to it. They'll review and test. If it's not satisfying what they believe is the actual solution or the the what what the solution should be to best address the customer's need, they will make a request for an adjustment that can happen right in GitLab, which is where we do our work and Scout will do another pass and hopefully at that point we've gotten it right and support can submit that MR for review from engineering.</p>
</details>

我们运行 Scout 的方式完全是由一个 Zap 启动的。这是我们其中一个 Zap 的图片。有很多 Zap 在运行整个过程，它直接嵌入到我们支持团队的自动化流程中。在 Zapier，我们做了大量的“吃自家狗粮”式测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How we are running Scout, it's all kicked off by a zap. This is a picture of one of our zaps. There are many zaps that's run this whole process and it embeds right into our support team's zaps. We do a ton of dog fooding at Zapier.</p>
</details>

我们首先运行诊断，并将结果发布到 Jira 工单上，说明分类情况以及是否认为可修复。如果我们认为可修复，就会启动一个 GitLab **CI/CD Pipeline**（Continuous Integration/Continuous Deployment Pipeline: 持续集成与持续交付流水线，指自动执行代码构建、测试和部署的一系列自动化步骤）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We first run diagnosis and post that result to the Jira ticket saying what the categorization is if we believe it's fixable. And then if we do believe it's fixable, we then are kicking off a GitLab CI/CD pipeline.</p>
</details>

我们在流水线中运行三个阶段：计划（Plan）、执行（Execute）和验证（Validate），以此来生成合并请求。这个流水线中使用的工具就是 Scout MCP。所以，我们一年前投入的所有 API 现在真正结合到了一起，我们在 GitLab 流水线中对它们进行编排，并且我们还利用了 Cursor **SDK**（Software Development Kit: 软件开发工具包）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we run three phases in that pipeline. plan, execute and validate to generate this merge request. The tools used in this pipeline is Scout MCP. So all those APIs we invested in a year ago now are really coming together and we're orchestrating it uh within the GitLab pipeline and we're also leveraging cursor SDK.</p>
</details>

一旦合并请求完成，我们将其关联到 Jira，由支持团队接手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once the M merge request has been completed, we attach it to Jira and support picks it up.</p>
</details>

最近新增的一项功能是快速迭代：当带有合并请求的工单发布后，如果支持团队查看并认为需要一些微调，为了给他们节省更多时间，他们不必非得把代码拉到本地 IDE 修复再推上去。他们可以直接在 GitLab 中与 Scout Agent 聊天，这会根据新反馈启动另一个阶段的流水线，并发布新的合并请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The latest addition to this is doing a rapid iteration once a um uh once a ticket has been posted with the merge request and support team is looking at it and they say, you know, it needs some tweaks to save them more time so they don't have to go pull that down to their ID, do the fixes, and push it back up. they can simply chat with the uh scout agent in gitlab that'll kick off another uh pipeline which does that phase with that new feedback and posts the new merge request</p>
</details>

### 成果与支持团队的“超能力”

在我们这一方，我们希望确保 Scout Agent 真的有效，所以我们问了三个问题：分类对吗？它真的可修复吗？代码修复准确吗？到目前为止，我们有两项评估（Eval）显示，分类和可修复性的准确率达到了 75%。随着我们获得更多反馈和处理更多工单，这些都会变成我们的测试用例，我们可以随着时间的推移不断改进 Scout Agent。那么，Scout Agent 对应用侵蚀产生了什么影响呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on our side we want to make sure scout agent is working so we ask three questions categorization right is was it actually fixable uh and was the code fix accurate so far we have two eval to 75% accuracy for categorization and fixibility. As we get more feedback and process more tickets, those become our test cases and we can move forward improving scout agent over time. So what has been scout agents impact on app erosion</p>
</details>

支持团队修复的应用 Bug 中，有 40% 是由 Scout 生成的。所以，我们代表支持团队完成了更多工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">40% of supports support teams app fixes are being generated by scout. So we're doing more of the work on behalf of the support team.</p>
</details>

这使得我们支持团队中某些成员的处理速度翻了一番，从每周处理 1 到 2 个工单提升到 2 个，这已经很了不起了。从一个最初不交付任何修复代码的支持团队（好吧，非正式地偶尔会有），到现在的每人每周 1 到 2 个，再到如今在 Scout 的帮助下达到每周 3 到 4 个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is resulting and for some of our support team it's doubling their velocity from one to 2 tickets per week which already is amazing. That's going from a support team that wasn't shipping any fixes, well unofficially they were sometimes to now shipping one to two per week per person to now shipping three to four with the help of Scout.</p>
</details>

另一个流程上的改进是，Scout 将具有潜在修复可能的工单直接放在分拣流程中。这消除了大量从积压任务中挑选工作的摩擦感。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another uh process improvement, Scout puts potentially fixable tickets right there in the triage flow. takes away a lot of the friction of looking for something to grab from the backlog.</p>
</details>

受益的不只是支持团队，还有工程团队。一位工程经理说：“这是工具发挥作用的一个极佳范例，它让我们能够专注于更复杂的工作。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not just the support who's benefiting, it's also engineering. Engineering manager said, uh, it's a great example of when it works. This tool allows us to stay focused on the more complex stuff.</p>
</details>

如果你能从这次演讲中带走任何感悟，我希望是：支持团队与代码生成技术的结合蕴含着强大的魔力。赋能支持人员去修复 Bug，是因为他们拥有三个超能力：第一，他们最接近客户的痛苦，这意味着他们最了解哪些上下文对于查明问题和解决问题真正重要。第二，他们是在实时排查。这些工单不是陈旧的，上下文是新鲜的，日志也不会丢失。如果你把这个工单扔进工程团队的积压任务中，几个月后，你可能再也拿不到那些日志了。第三，他们最擅长验证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you take away anything from this talk, I hope it is that there is a really powerful magic between support and empowering them with codegen and allowing them to ship fixes because they have three superpowers. The first they are the closest to customer pain which mean they're closest to the context that really matters for figuring out what's the problem and how to solve it. They're also troubleshooting in real time. These tickets aren't stale. the context is fresh, the logs aren't missing. You put this ticket into a engineering backlog months later, you might not get access to those logs anymore. And then three, they're best at validation.</p>
</details>

还是那句话，你把同一个工单扔进工程积压任务里，工程师想出的解决方案可能会改变应用行为，这对某些客户可能是好事，但对于那个写信投诉问题的客户来说，未必是最佳选择。此外，这样做还有一个重大好处：参与过这项实验的支持团队成员，现在已经成为了工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've again, you put the same ticket into an engineering backlog. The solution an engineer might come up with may change the behavior and that might be good for some customers but might not necessarily be best for that one customer who wrote in about the problem. And one other major benefit of this is support team members who have been part of this experiment are now engineers.</p>
</details>

我想向帮助建立这个流程、构建所有工具和 Scout Agent 的出色团队表示感谢。Andy 今天就在观众席里。所以，向 Andy 致敬。如果你想聊任何技术细节，他就在这儿。我想向大家强调两件事：我们在招人，但更重要的是，如果你还没在大峡谷划过船，请务必考虑一下。那是足以改变人生的经历。非常感谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to say thank you to the amazing team who's helped built this process or built all the tools and the scout agent. Andy is actually here in the audience. So shout out to Andy. If you want to talk about any of the technical bits, he's here. And I want to impress upon you two things. We're hiring, but mostly if you haven't rafted through the Grand Canyon, please consider it. It's lifechanging and you should go with ORS. Thank you very much.</p>
</details>