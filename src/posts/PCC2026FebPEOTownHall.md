---
title: "从混乱到清晰：PCC的技术纪律重塑与Nexus AI平台发布"
summary: "PointClickCare工程团队召开全员大会，领导层强调通过“纪律创造自由”的文化转型，致力于消除技术债务和“破窗效应”。会议发布了内部AI平台Nexus，该平台基于Azure和LangGraph构建，旨在加速AI功能开发。团队展示了利用Nexus构建的“Billing Advisor”功能，以及利用Anthropic的Claude Code进行遗留代码重构和文档生成的显著成果。"
area: "tech-engineering" # Must select ONE from the provided list
category: "ai-application" # Must select ONE from the provided list based on content

project: []
tags:
  - "legacy-modernization"
  - "internal-developer-platform"
  - "ai-assisted-coding"
  - "observability"
  - "technical-debt"
people: []
companies_orgs:
  - "PointClickCare"
  - "Microsoft"
  - "Anthropic"
  - "LangChain"

products_models:
  - "Nexus"
  - "Claude Code"
  - "Billing Advisor"
  - "LangGraph"
media_books: []
author: Lei
date: 2026-02-11
insight: null
layout: post.njk
speaker: PCC insider
---

### 开场与文化转型：纪律创造自由

**Stephen Cunliffe**: 我想现在应该正常了，Stephen。可能是我弄错了。你能听到我说话吗？

<details>
<summary>Original English</summary>

**Stephen Cunliffe**: I think it is working, Stephen. That could be mistaken. Can you hear me?

</details>

**Dave Wessinger**: 是的，我现在能听到了。

<details>
<summary>Original English</summary>

**Dave Wessinger**: Yes, I can now.

</details>

**Marie Thurston**: 嗨，Dave。谢谢你今天加入我们。

<details>
<summary>Original English</summary>

**Marie Thurston**: Hi, Dave. Thanks for joining us today.

</details>

**Dave Wessinger**: 噢，我太兴奋了。David，给我个预览。

<details>
<summary>Original English</summary>

**Dave Wessinger**: Oh, I so excited. David, give me a preview.

</details>

**Marie Thurston**: 你能做那个小鼓掌动作吗？你能为我做一下那个场记板的动作吗？好了，行了。

<details>
<summary>Original English</summary>

**Marie Thurston**: Can you do that little clap? Can you do your clapper thing for me? There we go, OK.

</details>

**Dave Wessinger**: 噢，我有**高尔夫肘**（Golfer's elbow），Marie，所以有点疼。我和 Carrie 的丈夫 Will 突发奇想决定用左手掰手腕，结果伤势加重了。天哪，都两周了还很痛。所以我现在的鼓掌动作没以前做得那么好了。

<details>
<summary>Original English</summary>

**Dave Wessinger**: Oh, I have golfer's elbow though, Marie, so it's like. I had a randomly Carrie's husband Will and I decided to arm wrestle with our left arms and exacerbated and it's like, Oh my gosh, it's been two weeks. It's still sore. So I can't do the clap quite as well as I used to, but.

</details>

**David Pessis**: 那么，我们现在达到目标了吗？差得远呢。我们还有很长的路要走。这些都不是小事，它们不是偶然发生的。重要的不是胜利本身，而是它们是如何发生的。之所以能发生，是因为我们在做那些艰难的事、那些不光鲜的事、那些并不总能赢得掌声的事。

但它们会随着时间产生复利。你们已经明确了什么才是重要的，对吧？我们定义了目标，统一了优先级。我们写了“六页纸报告”（6-pagers）。现在我们致力于最重要的12个目标，没有任何歧义。正是这些优先级为系统注入了真正的**清晰度**（Clarity）。

我们开始关注数据了，对吧？每个人都在看数据。现在我们有了仪表盘，大大减少了凭直觉和个人观点行事的情况。我们关注指标，这帮助我们做出基于现实的更好决策。你们开始修复“**破窗**”（Broken Windows），而不是视而不见。就像我提到的皮肤和伤口处理以及那些缓慢的体验。

那些充满 Bug 的边缘情况，那些遗留已久的已知问题——我开始看到大家不再容忍这些垃圾，而是真正去修复它们。这非常令人兴奋，你们都变得更加自律了。这并不是因为有人在盯着你们，而是因为你们明白了这一点。

正是这一点区分了伟大的团队和优秀的团队。这引出了我一直强调的下一个观点：**纪律创造自由**（Discipline creates freedom）。

我想花点时间谈谈这个，因为这是我构建这个组织的核心理念，也是我希望我们团队成为的样子。很长一段时间以来，我们在充满歧义的环境中运作。所有权模糊不清，标准随波逐流。

我们在团队间以不同的方式填补空白，导致了摩擦。我们花了更多时间去应对 Bug 和运营问题，只是为了避免干扰。那不是自由，那只是混乱，只是伪装成灵活性的混乱。真正的自由来自于纪律。

<details>
<summary>Original English</summary>

**David Pessis**: So now are are we, are we where we need to be? Not even close. We have a long way to go. These aren't small things, and they didn't happen by accident. And what what matters isn't the wins themselves. What matters is how they happened. They happen because we're doing the hard things, the unglamorous things, the things that don't always get the applause, but.

They compound over time and you got clear on what matters, right? We defined our goals, we aligned in our priorities. We write 6 pages. Now we committed to the top 12 goals. There's no ambiguity. And so those sort of priorities are driving real clarity into the system.

We're starting to look at the data, right? Everyone's looking at data. Now we have dashboards, much less using opinions in the gut. And so we're looking at the metrics and that's helping us make much better decisions that are grounded in reality. You're starting to fix broken windows instead of just walking past them. You know, as I mentioned in the skin and wound and those slow experiences.

Those buggy etch cases, those known issues that have been lingering, like we're I'm starting to see a stop tolerating that crap and actually fixing those things. And so that's super exciting and you're all becoming way more disciplined. And so not because someone was watching, because you understood.

That something separates the great teams from the good ones. And so that leads me into my next point that we've been talking about a lot is discipline creates freedom.

And I want to spend a moment on that because it's it's really at the heart of the way I want to build this organization and the the team that I want us all to be and what we're building towards. For a long time, we operated with a lot of ambiguity. Ownership was fuzzy, standards drifted.

We all filled in gaps differently across the teams. There's friction. We spend more time reacting to bugs, to operation, operational issues to avoid the distractions. And that's not freedom. That's that's just chaos. And we design, you know, disguises flexibility. And so the real freedom comes from discipline.

</details>

**David Pessis**: 这种纪律体现在把事情写下来，因为清晰度迫使我们精确，并暴露差距。这种纪律体现在明确所有权，这样团队就可以果断、快速地行动，而不需要不断地问“接下来是谁”。

<details>
<summary>Original English</summary>

**David Pessis**: And that's the discipline to write things down, because that clarity forces precision and it exposes gaps. The discipline to be explicit about ownership so that teams can move decisively and quickly without constant next someone's.

</details>

**James Donohue**: 他是那个大老板。他来自...

<details>
<summary>Original English</summary>

**James Donohue**: Yeah, he's the he's the head big boss. He came from.

</details>

**David Pessis**: 那个谁，或者是 Marie，能不能把那个人静音？这种纪律还体现在提高质量标准上，这样我们就不用总是忙于“救火”，从长远来看，这将帮助我们走得更快。当我们拥有清晰度、所有权和标准的纪律时，我们就赢回了自由。

那种行动更快的自由，专注于最重要工作的自由，以及开始构建我们渴望已久的创新事物的自由。这就是我们正在做的权衡。我认为过去100天左右的时间确实证明了这一点。再次强调，我们开始看到结果了。

我不希望把这定格为一场庆祝，我认为这更像是一个开始。我想诚实地面对我们的现状。我们比100天前好多了，有意义地好转了，但我们还没有达到我们需要达到的状态。

还没有完全达到。仍然有太多的**技术债务**（Tech Debt），仍然有很多“破窗”，很多地方我们的速度还不够快。但我知道的是：这个组织发生了一些转变。当我在一对一会议中与你们交谈时，我能感觉到；当我在密西沙加（Mississauga）的走廊里走动时，我能感觉到。

我能感觉到演示日（Demo Days）的氛围。当大家展示自己的工作时，有一种热情。看看演示日期间的聊天记录，对话变了，能量变了，一种自信正在建立。这并不是因为我们已经赢了，而是我认为每个人都开始相信——

该死，我们要成事了。这里的事情真的在改变。我知道这种信念现在可能还有点脆弱，我知道现在还为时尚早，但它是真实的，是赢得的。所以我不是来告诉大家我们已经成功了，或者这个公式已经完全奏效了。我要告诉你们的是，我们必须致力于此并坚持下去，因为如果我们日复一日、月复一月地坚持这样做，你们将无法想象我们将变成什么样的组织。

<details>
<summary>Original English</summary>

**David Pessis**: Can you go on mute, whoever that or or Marie, whoever that is the the discipline to raise bar and quality. So we're not always firefighting and that's going to help us go a lot faster in the long run. And so when we're disciplined with clarity and ownership and standards.

We get that freedom back and that freedom to move faster, to focus on the work that matters most and to begin building those innovative things that we wanted to build for so long. And so that's the trade that we're making. And I think the last 100 or so days has has really proved it. And again, we're starting to see those results.

And so, you know, we're not, you know, I don't want to frame this as a celebration. I think it's more of a beginning. You know, we're building and you know, I want to be honest where we are. We're we're way better than we were 100 days ago, meaningfully better, but we're still not where we need to be.

Not quite yet. There's still too much tech debt. There's still a lot of broken windows, still many places where we're slower than we need to be. But here's what I do know. Something has shifted in this organization, and I feel it when I talk to all of you during the one-on-ones. I feel when I'm in Mississauga.

And walk in the halls. I feel the demo days. There's like this enthusiasm when everyone's showing off their work and you look at the chat going on during the demo days and and the conversations are different. The energy is different and there's this confidence starting to build. It's not because we've won, but I think everyone's starting to believe like.

****, man, we're on to something here. Like things are really changing around here. And I know that belief might be a little fragile right now and I know that and I know it's early, but it's real and it's earned. So I'm not here to tell us that we've made it and that the formula is working. But I'm what I'm telling you is we got to commit to this and keep going because if we keep doing this month after month, day after day.

OK. Like you cannot believe the organization that we're going to turn into.

</details>

### Nexus AI 平台发布

**David Pessis**: 好的，接下来是什么议程？我们有一些年度奖项。这很令人兴奋。我就不一一读名字了，但很高兴看到来自产品工程组织（PE Org）的一些人获得代表。祝贺名单上的每一个人。接下来是晋升和职位变动，我喜欢这个，这展示了组织内的职业机会。

还有新员工，看看这些新人。祝贺并欢迎加入。我们很幸运有你们帮助我们实现梦想和目标。第一季度大约有30位新人。好的，下一张幻灯片。

<details>
<summary>Original English</summary>

**David Pessis**: All right, what's next on the agenda? We got some. So the annual annual awards. This is pretty exciting. I'm not going to read through these names, but it was great to see a handful of folks from PEO org represent. It's awesome.

It was very fun to be there actually in person and see. It's a really special ceremony. I'd never been part of it before, something quite like that. So super cool, special part about PCC. So congratulations to everybody on this list.

You're awesome. And the next slide, promotions and role changes. I love this, right? You can see the the career opportunities in the organization. So a lot of promotions, role changes, super poor people getting new experiences. So congratulations to every single person on this list.

Great work. We'll keep it up there for one more second so everyone can read all the names.

In the next slide.

New hires. Look at all these new people. Congratulations. Welcome aboard. We're lucky to have all you help us achieve our dreams and goals.

It's a lot 12345. Yeah, we got about 30 new people in Q1. All right, next slide.

</details>

**Marie Thurston**: David，我们现在进入演示环节了。

<details>
<summary>Original English</summary>

**Marie Thurston**: David, we're on to the demos now.

</details>

**David Pessis**: 好的，这是最激动人心的部分。第一个演示是...

<details>
<summary>Original English</summary>

**David Pessis**: Alright, OK, let's uh. Most exciting part. So demo #1 is.

</details>

**Mehrshad Setayesh**: 好的。大约六个月前，大家能听到我说话吗？很好。大约六个月前，我们踏上了一段旅程，旨在创建 **PointClickCare (PCC)** 自己的 AI 平台，允许所有领域团队以有机的方式自行部署 AI 功能。

我们从 PCC 各地的同事自主创建的7个概念验证（POC）开始。我们聚在一个房间里，收集了共同的特征，涵盖了可观测性、护栏（Guardrails）、内存管理、安全性、Agent-to-Agent 通信和成本管理。这产生了一个评估框架，我们用它来评估所有三个超大规模云服务商（Azure, AWS, GCP）以及 Cohere, Databricks 和 Snowflake。

这导致我们选择了前三名进行实操评估，包括 Azure, AWS 和 Cohere。然后 Brenton 和他的团队对这三者都进行了 POC，看哪一个拥有企业级解决方案，可以在几周到几个月内建立起来。

POC 完成后，我们发现现有的解决方案大多很新，尚未达到企业级就绪状态，不适合我们的用例。因此，团队做出了一个战术决定：通过结合各家可用服务（Hyperscalers）的最佳服务以及第三方工具（如 **Arize**）来构建一个平台。

我们决定使用部署在 Azure 上并由 AKS 扩展的 **LangChain** 和 **LangGraph**。这就成为了我们所说的 **Nexus**，其文档几天前已经分享给大家了。接下来你们将看到 Brenton 介绍 Nexus 的主要特性，随后是 Sandeep 演示其 Agent 构建器，最后是 Jared 和 Jay 演示 **Billing Advisor**（计费顾问），这是 Nexus 上的第一个功能。

<details>
<summary>Original English</summary>

**Mehrshad Setayesh**: All right. So about six months ago, can you guys hear me?
Great. About six months ago, we set out on a journey to create PC C's own AI platform, allowing all domain teams to deploy AI features on their own. In an organic fashion, we started with folks across PCC having created 7 POCS on their own. We all got in a room, collected common characteristics.

Across observability, guardrails, memory management, security, A to A, and cost management. This resulted in an evaluation framework which we applied to evaluate all the three hyperscalers, Azure, AWS, GCP, Coher, Databricks and Snowflake.

And this resulted in top three being chosen for a hands-on evaluation and those top three included Azure, AWS and Coher. Then we had Brenton and his team. They did POCS across all three to see which one had an enterprise solution that we could set up in a matter of weeks to months.

Now, after the POCS were done, we saw that a decent amount of all available solutions were new and they were not enterprise grade ready, so they were not ready for our use case. So the team made a tactical decision to build a platform by combining the best of services from each of the available ones, available hyperscalers.

And then also third parties such as Arise. Now we decided to use Lanchain and Landgraph deployed on Azure and scaled by AKS. This became what we call Nexus, whose doc was shared with you all a few days ago. So now what you're going to see is the main characteristics of Nexus from Brenton.

And then followed by a demo of its agent builder by Sandeep, where he will take you through how to build a template in a UI wizard that then you can add your business logic before deployment. And finally a demo by Jared and Jay on Billing Advisor, which was the first feature on Nexus.

</details>

**Brinthan Yoganathan**: 谢谢 Mehrshad。正如 Mehrshad 所提到的，Nexus 的设计重点是提供领域工程团队快速启动 AI 项目所需的工具。它防止我们每次都重新造轮子。但为了让这行之有效，我们需要明确的原则来指导我们首先构建什么。

实用胜于完美。AI 领域变化剧烈，新框架来去匆匆。所以我们不断扫描这些工具，并根据我们的需求采用目前已验证的技术——即用于工作流的 LangGraph 和用于 Agent 的 LangChain。

我们与 LangChain 和 Microsoft 建立了直接的供应商关系，进行交叉检查，并争取他们的支持来构建和加速模板，以便更快地构建 AI 产品。基于此，我们上个月发布了用于转诊顾问、计费顾问和出院小结的 LangGraph 模板。

这种实用主义促成了我们的第二个原则：在你关注业务逻辑之前，我们处理基础设施。我们使用**六边形架构**（Hexagonal Architecture）构建 Nexus 模板，为您提供清晰的接口，同时我们演进连接护栏、可观测性、内存和合规性的适配器。

鉴于我们处于医疗保健这一高度受监管的行业，这些是任何产品上市的必备条件。这也让领域工程团队能够专注于特定用例的逻辑，从而更快地交付创新。

<details>
<summary>Original English</summary>

**Brinthan Yoganathan**: Thank you, Mishad. So as Mishad mentioned, the Nexus by design focuses on providing tools that domain engineering team needs to kickstart AI projects fast. It prevents us from reinventing the wheel each time. But to make this work, we needed clear principles to guide what we build first.

Pragmatic over perfect AI landscape changes drastically. New frameworks comes and goes fast. So we scan these tools constantly and adapt what's proven today. What we need for what we need, that's Langraph for workflows and Langrain for agents.

We established direct vendor relationship with Land Chain and Microsoft to cross check and also to draw their support to build and accelerate the templates to build the AI products faster. So with this we shipped Landgraff templates last month for referral advisor, billing advisor and discharge summary.

I want to thank the team Shemek, Shaik and Blair to be great partners and rolling with the punches and it's a rough Rd. as a first team, but we got their services launched and you will see one of them in the following demo. So this fragmentism enables our second principle.

Before you focus on business logic, we handle the infrastructure. We built Nexus templates using hexagonal architecture, giving you clean interfaces while we evolve the adapters connecting you to guardrails, observability, memory and compliance.

These are must have for any products to go to market given that we are in healthcare in a very highly regulated industry. So it's also lets the domain engineering team focuses on use case specific logics to deliver innovations faster, which leads to our third principle on how we focus on our energy. So Nexus is a team.

</details>

### Billing Advisor 演示

**Jarrod Stewart**: ...基于阈值，这个设置为：任何给定的一天中超过100美元的药物（基于医嘱时间表）。我还可以为病程记录（Progress Notes）创建规则，识别其中是否存在任何可单独报销的服务。

我们的 AI 应用程序将比较规则名称和描述，并遍历与该居民相关的任何病程记录，以确定是否存在该支付方可能涵盖的服务。

在仪表盘页面上，你可以看到所有与我有计费机会的居民相关的规则。你可以看到我有三个居民，我有药物、流感疫苗、交通费、其他疫苗和其他药物规则的计费机会。

为了确定定价，该规则被设置为从病程记录中为每个相关规则添加潜在价值，而药物则使用基于 **NDC代码**（National Drug Code）的国家药物采购成本来识别基于阈值的任何计费机会。

当我进入审查对话框时，它会告诉我这种药物被提取的医嘱、潜在价值、药物名称和 NDC 代码。在当前的工作流程中，他们可以根据该事件是否实际可计费来更新状态（计费、不可计费、审查）。然后他们可以创建费用，最终向保险公司就提供给居民的服务或药物进行计费。

<details>
<summary>Original English</summary>

**Jarrod Stewart**: Based on a threshold, so this one is set. I need any medication in a given day that's over $100 based on the order schedule, and then I also can create rules for progress notes, identify if there's any separately reimbursable services in progress notes.

Our AI application will compare the rule name and the description and go through the any progress notes associated with that resident to determine if there's any services that are potentially available for that payer.

On the dashboard page, this is where you see all of the rules that are associated with the residents that I that have billable or billing opportunities. So you can see here I have three residents. I have billable opportunities for medications, flu vaccine, transportation in this case, other vaccinations and other medication rules.

So in order to determine this pricing, the rule is set up for progress notes to add the potential value to each associated rule, while the medication is using the national drug acquisition costs based on the NDC codes to identify any billable opportunities based on the thresholds.

So as I come into the review dialogue, it tells me the order in which this medication was pulled from, the potential value, the name of the medication and the NDC code. In the current workflow, they're able to update the status to build not billable review just based on what the actual.

If this event is actually billable or not, from there then they can create charges and they within that area of the application to eventually bill the insurance company for the services or medications that were given to the rest of them.

</details>

**Speaker (Façade)**: 在第一阶段，正如我在视频中提到的，目的是识别与高成本药物和合同中其他可单独报销服务相关的计费机会。

在后续阶段（我们目前正在进行的），我们将更多地关注食宿费用（Room and Board），并能够识别授权和在院记录（Census）之间的任何不匹配，以避免对保险公司的任何少计费情况。同时理解诊断和级别，确保根据合同中适用于这些级别的诊断代码进行正确的诊断或级别计费。

之后的下一步，我们希望利用合同 AI（Contract AI）自动化并推荐规则创建，从合同中提取数据并自动创建这些规则。用户随后批准并保存这些规则，系统就会开始工作以寻找这些机会。

最后，我们希望以更有意义的方式自动化审查对话框，以便一旦发现机会，他们就可以从这些屏幕创建费用，并更新在院记录工作流，而无需来回导航。

<details>
<summary>Original English</summary>

**Speaker (Façade)**: So within the first phase of this, like I just mentioned in the video, the intent is to identify billable opportunities related to high cost medications and other separately reimbursable services on the contracts.

In later phases, which we're currently working on, is looking more at the room and board charges and being able to identify any mismatches between authorization and census to avoid any under billing to the insurance company as well as understanding, diagnosis and levels to make sure that they're bill.

The right diagnosis or the right level based on the diagnosis codes that are applied to those levels within the contracts.

The next steps after that we want to automate and recommend rule creation based on contracts leveraging contract AI where you'd extract the data from the contract and be able to automatically create those rules.

The user would then approve and save those rules and then the system would start working to try and find those opportunities.

Lastly, we're looking to automate the review dialogue more in a more meaningful way so that once they identify an opportunity, they can create charges from those screens as well as updating the census workflows from those screens without having.

Do the back and forth navigation so the resident level to make sure that those census lines and charges are built but they stay.

They remain in the workflow to make them more productive.

</details>

**Speaker (Technical)**: 对于 Billing Advisor，我们目前专注于药物医嘱和病程记录以寻找计费机会。这两个工作流都利用 PCC API 医嘱服务和药物库来获取客户的医嘱和病程记录。

对于药物医嘱，Nautilus 医嘱包含 NDC 代码。为了丰富缺失的数据，我们查询药物库以获取 NDC 代码。利用该数据，我们调用国家平均药物采购成本来获取实时定价。对于每种药物，剔除规则（Carve-out rules）将应用于实际药物成本以寻找机会。

在病程记录方面，相同的规则为我们的 AI 提供收入代码。基于 Nexus 框架构建的 Promote AI 服务使用剔除规则来指导检测，应用基于置信度的过滤，并提取支持证据代码以确保准确性和可审计性。

为了构建 Nautilus AI 服务，我们采用了 Nexus 框架。Nexus 框架是一个选择性采用框架，你可以选择你想要的组件，而不必一次性全部选择。对于 Billing Advisor，我们专注于提供强大基础的核心能力：用于编排的 LangGraph，用于可观测性的 **Arize**，用于安全的输入输出护栏，以及从第一天起就具备的企业级安全性。

<details>
<summary>Original English</summary>

**Speaker (Technical)**: For the billing advisor job, currently we are focus on the medication orders and the progress notes to find the billable opportunity.

Both the workflow leverages PCCAPI order service and Drug library to fetch clients, orders and progress notes will define are entered by the customers and those rules become the foundation for finding the billable opportunities for.

For medication orders, not orders, contains NDC code to enrich the missing data. We query the drug library to get the NDC code. Using that data, we call the national average drug acquisition cost to get the real time pricing.

For each of those drugs, karma rules are applied against the actual drug cost to find the opportunity on progress note side the same.

Rules provide the Revenue Code to our AI. Promote AI service, which is built on the Nexus framework, uses the carve out rules to detect.

To guide the detection, apply confidence based filtering and extract supporting evidence codes to ensure accuracy and auditability.

So for building the next Nautilus AI service, we adopted the Nexus framework, which was built, which was presented just before this presentation.

The Nexus framework is a selective adoption framework wherein you can select what you want instead of having all to select at once.

Team for for building advisor. We focus on core capabilities that provide strong foundation that is land graph for orchestration arise for observability input and output guardwills for safety.

And enterprise security from day one.

</details>

**Jarrod Stewart**: 这是 Arize 在 Billing Advisor Agent 中的实际应用。通过双重仪表化，我们获得了从输入到执行再到输出的整个 Agent 的端到端可追溯性，并且每个阶段都有清晰的执行时间。

我们可以确切地检查发送给大语言模型（LLM）的内容。在这里你可以看到病程记录连同计费规则一起被发送去评估。在底部，你可以看到模型响应的输出以及它是如何得出该输出的。

每一个追踪（Trace）都捕获了延迟、Token 使用量以及执行调用所需的时间。这种级别的可见性使 AI 系统具备了生产就绪的能力。当出现问题时，我们不是在猜测。我们确切地知道哪里出了问题，我们需要在哪里修复它，以及我们需要修复什么。

<details>
<summary>Original English</summary>

**Jarrod Stewart**: This is arising action for the billing advisor agent. With dual instrumentation in place, we get end to end traceability across the entire agent from input to execution to output with a clear execution time at each of the stages.

We can inspect exactly what has been sent to the LLN. Here you can see the progress node along with the billing will being sent to evaluate. At the bottom you can see the output of the or the model response and how it arrived at the output.

Every trace captures the latency, token usage, as well as the time it takes to execute the call. This is the level of visibility what makes the AI system production ready. When something goes wrong, we are not guessing. We know exactly where it went wrong.

Where we need to fix it and what we need to fix it.

</details>

### AI 辅助工程与 Claude Code

**Tony Chen**: 因为现在文档是自动生成的，这意味着如果需要，我们有一个清晰的审计线索可以回溯。这里有一张给技术人员看的幻灯片，展示了我们是如何构建它的。

我们基本上使用了 **Claude Code**，这是一个可以直接在我们的代码库上读取、编写和测试代码的 AI 工具。通过所谓的提示工程（Prompt Engineering）过程，我们提出了一系列可重复的结构化提示，称为“命令”或“技能”。它们本质上包含了强制执行 PCC 模式、最佳编码实践等的指令。

让我们看看前后对比。以前，工程师会花几周时间进行重构，现在 Claude 会处理所有的分析、代码生成、测试创建，时间缩短到几天，我们预计这将节省超过 75% 的开发时间。

以前，由于时间压力，测试和文档往往受到限制。现在，每一次迁移都包含完整的测试、完整的文档，任何工程师都可以验证并推进这项工作。

为什么这很重要？我们相信这不仅仅是技术改进，也直接支持我们的业务。首先是速度。更快的现代化意味着更快的功能发布，花在繁琐迁移工作上的时间更少，意味着工程师可以专注于更高价值的工作并推动创新。

这也让我们为未来做好了准备，现代代码让我们为即将到来的事情做好准备。事实上，Claude 刚刚在上周五发布了 3.5 Opus 模型（注：原文口误为4.6，根据上下文推测指最新模型），而且他们不会很快停下脚步。最后，这个过程使我们更具可扩展性，因为我们的工作流程本质上验证了 AI 辅助工程在 PCC 的存在，并表明我们可以拥有一个其他团队可以采用的可重复工作流程。

<details>
<summary>Original English</summary>

**Tony Chen**: And because now that documentation is automatically generated, this means that there is a clear audit trail for us to refer back to if needed.

OK, and here's a slide.

Here's a slide for the more technical folks out there of how we built this. And we essentially use Claude code, which is an A I tool that can read, write, test code directly on our code base. And we came up with these repeatable structured prompts called commands or skills.

Through a process called prompt engineering and they essentially contain instructions that enforce PCC patterns, best coding practices and a lot more.

Let's take a look at the before and after. Before, engineers would spend weeks on refactoring and now Claude will handle all the analysis, the code generation, the test creation, and it'll be reduced down to days and we expect this to save over 75% of developer time.

Before the tests and documentations, they were often limited due to time pressure and now every migration contains full tests, full documentation and any engineer can validate and move this work forward.

Tony Chen 1 hour 11 minutes 24 seconds
So why does this matter? So we believe this is not just a technical improvement, but also directly supports our business. Firstly, we have speed. So faster modernization means faster shipping of features and less time on tedious migration work means engineers can focus on higher value work.

And drive innovation. This also makes us more future ready, so modern code prepares us for what's to come. In fact, Claw just released the 4.6 Opus model last Friday, and they're not stopping anytime soon.

And finally, this process makes us more scalable because our workflow is essentially validating the existence of a I assisted engineering at PCC and shows that we can have a repeatable workflow that other teams can adopt.

</details>

**Aayush Jha**: 谢谢 Tony。我是 Aayush，Marketplace 团队的高级产品经理。今天我们将分享我们使用 Claude Code 的经验，特别是产品、工程、内容和用户体验（UX）如何更好地协作。

两年前我们遇到了 ChatGPT，它很神奇，知道互联网上的一切。但很快我们意识到，要在工作中使用它，我们需要文档、电子邮件、团队对话，而 Copilot 做到了这一点。

我想这里的每个人每天都在使用 Copilot 来产生更好的输出。我和 Kyle 学到的是，我们在这一点上遇到了一个鸿沟，特别是对于非技术人员。如果你想要更丰富的输出，你需要提供更丰富的上下文。比如 Aha 支持工单、JIRA、Confluence 上的架构图，最重要的是代码库本身，因为我们都知道并非所有内容都有文档记录，有很多隐藏的业务逻辑只能从代码中获取。

让我演示一下我现在使用 Claude Code 的一天是怎样的。我切换到 VS Code，正在与 Claude Code 进行新的对话。

如你所知，我是开发者门户（Dev Portal）的新产品经理，我只需要了解这个产品是做什么的。我就照我刚才说的问它，并给它我们的 GitHub 仓库链接。它会扫描代码库，并用通俗易懂的英语给我一些产品经理能理解的内容。不需要工程人员花宝贵的时间坐下来向我解释一切。

所以在2分钟内，它告诉了我项目是什么，我们使用了什么技术栈，我们有什么基础设施，文件夹结构是什么，我在哪里可以找到什么样的资源以及所有的功能。显然，我可以问更多问题，并迅速熟悉我的新产品。

这很好。但是接下来有一个与工程师的细化会议，我们需要进行一次大的 UX 品牌重塑。我只知道我们需要 UX 品牌重塑，我不知道从 UX 角度来看影响在哪里。我不知道我们需要多少个 Jira 任务，以及按什么顺序来细化它们。

再一次，为什么不试试 Claude Code 呢？所以我准确地告诉它我需要什么：浏览代码库，告诉我影响，作为产品经理，帮我写一个迷你 **PRD**（产品需求文档），然后我可以拿去给我的工程人员审查。

这次花了5分钟，它再次扫描了代码库并给了我一个非常好的 PRD。这是一份写得很专业的 PRD，告诉了我问题陈述、目标、今天的 UX 究竟是如何工作的，然后是净新需求、技术计划和建议的用户故事分解及优先级。

但我不能太自信，我需要与我的工程对应方审查，不是吗？为此，我要去同一个聊天窗口，要求它直接从这里创建一个 Confluence 页面。这样我的工程团队就可以提供评论。它已经做到了，如果我们拉到底部，这就是 Confluence 页面，我的工程师已经在那里提供反馈了。最棒的是，我可以要求它读取这些反馈，更新 PRD，然后直接从这里创建 Jira 故事，甚至不需要切换屏幕。

<details>
<summary>Original English</summary>

**Aayush Jha**: Thanks, Tony. OK. Can you all see my slides? Awesome. OK, I'm Ayush, a senior PM on Prasanna, then LM's team on Marketplace, and with me I have my partner Kyle, who is a lead PM on the senior living team. Today we will share our experience with Cloud Code and more specifically on how product engineering content in UX can collaborate better.

OK, two years back we met ChatGPT. It was magical. It knew everything on Internet. But very soon we realized for us to use it at work, we need documentation, emails, team conversations and Copilot just did that.

I think all of us here use Copilot to generate better output every day. What me, what me and Kyle learned that we are kind of hitting a chasm at this point, especially for non-technical folks. If you want richer output, you need to give richer context.

Like aha support tickets in JIRA, an architecture diagram from Confluence, and most importantly the code base itself, because we all know not everything is documented and there's a lot of hidden business logic.

That we can only get from code. OK. Let me demo how my day is starting to look like with Cloud Code now. I'm going to switch to VS code where I'm having a new conversation with plot code.

OK, as you know, I'm a new product manager on Dev portal and I just need to understand what this product does. I'm going to ask you exactly what I just said and give it link to our GitHub repository.

It's going to scan the code base and give me something that a product manager can understand in plain English. Instead of me needing engineering folks, spend their valuable time to sit with me and explain me everything. I already had it run to save time.

So in 2 minutes they told me what the project is, what text stack we are using, what infrastructure we have, what is the folder structure, where I can find what kind of resources and all the features and obviously I can ask more questions.

And quickly get up to speed on my new product. Well, that's good. But then there's a refinement session coming in with engineers and we have a big UX rebrand. All I know we need a UX rebrand. I don't know where the impact is from a UX perspective.

I don't know how many Jiras do we need and in what order to refine them.

Again, why don't we try Cloud Code? So I exactly tell it what I need, which is let's go through the code base, tell me the impact, and as a PM, help me write a mini PRD that I can then take to my engineering folks and review with them.

Well, this one took 5 minutes and it again scanned the code base and gave me a very good PRD. And let's actually jump into what I got last time. It's a professionally written PRD that tells me the problem statement.

Goals exactly how the UX works today and then what would be the net new requirement, a technical plan and proposed user stories breakdown with priority.

Well, but I shouldn't get more confident. I need to review with my engineering counterpart, don't I? And then for that, what I'm going to do is go to the same chat and ask it to create a Confluence page right from here.

So that I can have my engineering team provide comments. It already did that and if we go to the bottom, here's the confluence page where my engineers are already giving feedback and the best part is I can ask it to read this feedback.

Update the PRD and then create Jira stories right from here without even changing my screen. This even if I had all my engineering team helping me.

</details>

### 结语与问答

**David Pessis**: Aayush，抱歉打断一下。能不能再用一分钟左右总结一下？因为我们时间不多了，我想留点时间给问答环节。非常感谢。

<details>
<summary>Original English</summary>

**David Pessis**: Are you sorry to interrupt? Just can you can you wrap up in another minute or so? Just because we're running out of time and I want to use Q&A. Thank you so much. Appreciate it.

</details>

**David Pessis**: 谢谢大家。我觉得这做得很好，真的很令人兴奋。我希望 Dave 和我的信息能引起共鸣。我们在这里回答任何人的问题。让我们保持这种势头，保持纪律，获得清晰度，然后去大干一场。

<details>
<summary>Original English</summary>

**David Pessis**: Christy, thank you. So I like I like just well done. Really exciting. I hope the I hope the messages, you know start from Dave and me resonated and we're here to answer any questions anybody has and let's keep it going. Keep this, stay disciplined, get that clarity and let's go kick some ***.

</details>

**Dave Wessinger**: 还有一件事，David。有一个关于奥运金牌的问题。我觉得我们也许应该回答一下。我们为谁加油，谁会赢？

<details>
<summary>Original English</summary>

**Dave Wessinger**: There is. There's one more thing, David. There is a question about Olympic gold. I feel like maybe we should answer that. Who are we cheering for and who's gonna win? There is a question.

</details>

**David Pessis**: 听着，如果是正面对决，我为美国加油；如果是加拿大对别人，我总是为加拿大加油。

<details>
<summary>Original English</summary>

**David Pessis**: Look, if if it's head to head, if it's head to head, I cheer for United States, if it's Canada. Otherwise, I'm always cheering for Canada.

</details>

**Dave Wessinger**: 我有一个更好、更政治正确的答案。我只想看一场精彩的比赛。就这样。去吧，去赢吧。大家玩得开心。大家做得真棒。谢谢。很高兴能参与其中。

<details>
<summary>Original English</summary>

**Dave Wessinger**: I got. I have a better, more politically correct answer. I just want to watch a good game. That's it. Go get them. Go get them. Have fun. Really great job, everyone. Thank you. Appreciate being included.

</details>
[BODY_END]