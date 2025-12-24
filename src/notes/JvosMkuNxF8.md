---
area: market-analysis
category: business
companies_orgs:
- Stanford
date: '2025-12-11'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Yegor Denisov-Blanch
products_models:
- GitHub Copilot
- Cursor
project:
- ai-impact-analysis
- investment-strategy
series: ''
source: https://www.youtube.com/watch?v=JvosMkuNxF8
speaker: AI Engineer
status: evergreen
summary: 本文深入探讨了在软件工程领域衡量AI工具投资回报率（ROI）的挑战与方法。斯坦福大学的研究揭示，AI的实际效益并非仅由使用量决定，代码库质量、工程实践以及正确的衡量指标至关重要。通过案例研究，作者强调了全面分析AI影响的必要性，并提供了量化ROI的框架，以帮助企业做出更明智的AI采纳决策。
tags:
- ai-adoption
- code
- investment
- productivity
- software-engineering
title: 如何量化AI在软件工程中的投资回报率？斯坦福研究揭示关键洞察
---

### AI在软件工程中的投资回报率：斯坦福研究的深度解析

企业在软件工程的AI工具上投入了数百万美元。但我们真的知道这些工具在企业中的实际效果如何吗？还是说它们仅仅是炒作？为了回答这个问题，在过去两年里，我们一直在研究AI对软件工程生产力的影响。我们的研究是时间序列的，因为我们查看历史数据，这意味着我们可以回溯时间。同时，它也是横截面的，因为我们跨越了不同的公司。我们用来衡量大部分影响的方法是利用一个机器学习模型，该模型能够复制一个专家小组的评估结果。其工作原理是这样的：想象一下，一位软件工程师提交了一段代码（code commit）。这段代码提交会由10到15名独立专家的多个小组进行评估，他们会从实现时间、可维护性和复杂性等方面评估这段代码提交，然后生成一个评估结果。因此，我们收集了这些专家小组在数百万次评估中的标签，然后训练了一个模型来复制这个专家小组的功能。这意味着我们可以大规模部署这个模型，并且如果对模型的输出有任何疑问，你总可以组建自己的专家小组进行验证，你会发现它与现实情况有很好的相关性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So companies spend millions on AI tools for software engineering. But do we actually know how well these tools work in the enterprise or are these tools just all hype? To answer this and for the past two years, we've been researching the impact of AI on software engineering productivity. And our research is time series because we look at get historical data, meaning we can go back in time. And it's also cross-sectional because we cut across companies. And the way we use to measure most of the of the impact is by a machine learning model that replicates a panel of human experts. The way this works is that imagine you have a software engineer who writes a code commit and this code commit would be evaluated by multiple panels or of 10 and 15 independent experts who would evaluate that code commit across implementation time maintainability and complexity and then produce an output evaluation. So we took the labels of these panels across you know millions of of kind of evaluations and then trained a model to replicate this panel of experts meaning that we can deploy this at scale and if there's ever any doubts around the model's output you can always kind of assemble your own panel and see that it correlates pretty well with reality.</p>
</details>

### 驱动AI生产力提升的关键因素与研究方法

今天我们将讨论四件事。首先，我们将探讨驱动软件领域AI生产力提升的一些因素。然后，我们将审视我们开发的一个AI实践基准。接着，我们将探讨我们提议的在软件工程中衡量AI投资回报率（ROI）的方法。最后，我们将以一个案例研究作为结束。

在此，我们选取了46个使用AI的团队，并将他们与46个未使用的相似团队进行匹配，然后按季度衡量他们从AI中获得的净生产力提升。图中的阴影区域代表数据的中间50%，深蓝色线代表中位数，截至今年7月，该队列的中位数约为10%。我想提请大家注意，顶尖表现者和垫底者之间的差距正在扩大。因此，如果我们非常不科学且非常形象地将此趋势向前推演，我们可能会得到类似这样的结果：顶尖表现者会受益于“富者愈富”效应，这些成功的早期AI采纳者可能会不断累积他们的收益，而那些挣扎中的团队则可能进一步落后。在某个时间点，这种差距会收敛，但这只是一个方向性的预测。但我的重点是，如果你是一家公司的领导者，你绝对需要知道你目前属于哪个队列，以便你能及时纠正方向。而如果没有衡量AI对工程师的影响，你就无法做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we'll talk about four things. We'll start off with looking at some of the things that are driving AI productivity gains in software. Then we'll look at a AI practices benchmark that we developed. We'll then look at how we propose to measure AI return on investment in software engineering. And lastly, we'll finish things off with a case study.</p>
<p class="english-text">So here we took 46 teams that were using AI and we matched them with 46 similar teams that were not using AI and we measured their net productivity gains from AI quarterly. And the shaded area is the middle 50% of the data and the dark blue line is the median which as of July of this year stands at about 10% for this cohort.</p>
<p class="english-text">I'd like to direct your attention to the fact that the discrepancy between the top performers and the bottom ones is increasing. There's a widening gap. And so if we very unscientifically and very illustratively project this forward, we might get something like this, right? where uh you can have these top performers being part of this the rich gets richer effect where they these successful early AI adopters might compound their gains while these strugglers could fall further behind.</p>
<p class="english-text">At some point this is going to converge and this is very directional. But my point here is that if you're a leader in a company, you definitely need to know in which cohort you are right now so that you can course correct and without measuring the impact of AI on your engineers, you're not going to be able to do this.</p>
</details>

因此，我们开始调查是什么因素驱动这些顶尖团队表现更好。首先我们关注的是AI的使用量，或者说是花费的token数量。在这张图中，纵轴是生产力提升，横轴是每位工程师每月的token使用量，采用对数刻度。你可以看到，线性相关性相当松散，大约为0.20。在约1000万token的标记处，存在一种“死亡谷”效应，即使用该数量token的团队似乎表现不如使用稍少token的团队。这只是一个方向性的观察，但很有趣。尽管如此，这里的结论可能是，AI使用的质量比AI使用的数量更重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we started investigating what are some of the factors that drive these top teams to perform better and the first thing we looked at is AI usage or basically token spent. In this graph you have the same kind of on the vertical axis the productivity increase and then on the horizontal one you have the token usage per engineer per month on a logarithmic scale. And what you can see is that the correlation is quite loose 0.20 or so linearly and there is a bit of a death valley effect around the 10 million uh token mark whereby teams that were using that amount of tokens seem to be doing worse than teams that were using a bit less tokens. It's very directional but interesting.</p>
<p class="english-text">Nevertheless, the conclusion here might be that AI usage quality matters more than AI usage value.</p>
</details>

我们深入研究，并问道：工程师工作所处的环境是否会影响AI带来的生产力？于是我们提出了一个“环境整洁度指数”（environment cleanliness index）。这是一个相当实验性的综合评分，它考察了测试、文档、模块化和代码质量等因素。该指数位于图表的底部轴上，从0到1；而纵轴则再次显示了相对于未使用AI的团队的生产力提升。你可以看到，R平方值约为0.40，这意味着环境整洁度与AI带来的收益或生产力提升之间存在相当不错的相关性。因此，这里的关键启示是：投资于代码库健康度（codebase hygiene）是释放AI生产力收益的关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We dug deeper and we said well does the environment in which the engineers work impact the productivity from AI and we came up with an environment cleaniness index index it's quite experimental it's a composite score that looks at tests looks at uh types and documentation and at modularity and at code quality and that index is on the bottom axis here from 0 to one and then on the vertical axis once again you have the kind of productivity lift relative to teams not using AI</p>
<p class="english-text">And so what you can see is that there's a point40 R squar meaning a pretty decent correlation around environment cleanliness and gains from uh AI or productivity gains from using AI. And so the takeaway here is to invest in codebase hygiene to unlock these AI productivity gains.</p>
</details>

我们进一步深入，以图解说明这个概念。在这张图中，纵轴显示了AI可能完成任务的百分比，以三种颜色区分。绿色表示AI可以完成该冲刺（sprint）中该任务的大部分工作。黄色表示AI可以提供帮助。红色则表示AI作用不大。这只是一个形象的说明，但它传达了关键信息。因此，任何代码库在任何时间点都对应图中的一条垂直线。你可以看到，干净的代码会放大AI带来的收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We dug deeper to illustrate this concept. And here we have on this graph on the vertical axis the percentage of tasks that might uh be able to be completed by AI based on three colors. And so green means that AI can do most of the work for that task in that sprint. Yellow means that AI can help someone and red uh means that AI is not very useful. And this is quite illustrative but it conveys the point.</p>
<p class="english-text">And so then any code base at any point in time sits on a vertical line across this graphic. And what you can see is that clean code amplifies AI gains.</p>
</details>

其次，你需要管理你的代码库熵（codebase entropy），也就是你的代码库技术债务。因为如果你不加检查地使用AI，它会加速这种熵增，并将你的代码整洁度推向左侧（即降低）。然后，作为人类，你需要从另一侧发力，来改进或维持这种整洁度，以持续获得AI带来的好处。第三，重要的是工程师需要知道何时使用AI，何时不使用。当他们不这样做时，就会出现左侧的这种情况：AI生成的输出被拒绝或需要大量重写，这会导致工程师对AI失去信任，认为“它根本不起作用”，从而不再使用它。这会进一步削弱AI带来的收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Secondly is that you need to manage your codebase entropy, right? Your codebase tech debt because if you just use AI unchecked, this is going to accelerate this entropy which is going to push and degrade your cleanliness to the left kind of right and then you as as a human need to push on the other side to kind of improve or maintain that cleanliness to keep reaping the benefits from AI.</p>
<p class="english-text">Thirdly is that it's important that engineers need to know when to use AI and when not to use AI. And what happens when they don't is this kind of line on the left whereby you have AI AI outputs that are rejected or need heavy rewriting which then leads to engineers losing trust in AI saying okay this just doesn't work. I'm not going to use it. Which then further collapses your AI gains.</p>
</details>

### AI工程实践基准：量化AI使用模式

现在我们想知道，我们能否不仅关注AI的使用量，还能了解这些公司和工程师是如何使用AI的？于是我们提出了一个“AI工程实践基准”（AI engineering practices benchmark）。它的工作原理是，我们可以扫描你的代码库，检测出AI的“指纹”或“痕迹”（artifacts），即你的团队如何使用AI的踪迹。目前它还比较初步，但正在不断发展。我们可以根据你活跃的工程工作中，使用每种AI模式的百分比来量化这一点。然后，我们每月使用Git历史记录重复进行此过程。其工作方式大致分为几个层级。0级是指人类完全不使用AI，编写所有代码。1级是个人使用，工程师不在团队内共享提示词（prompts）或不对其进行版本控制。2级是团队使用，团队会共享这些提示词和规则。然后3级则更为复杂，AI可以自主完成特定任务，但可能不是整个工作流程。而4级则是所谓的“代理式编排”（agentic orchestration），即AI能够运行整个流程。这个工具将是开源的，如果你在Sweeper研究门户网站注册，就可以使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we said can we find out whether we can look not only at usage but at how are these companies and these engineers using AI and we came up with an AI engineering practices benchmark. The way this works is that we can scan your codebase and detect these AI fingerprints or artifacts basically traces of how your team is using AI. It's quite directional at this point but evolving. And we can quantify this based on the percentage of your active engineering work that uses each AI pattern. And then we kind of repeat this monthly using git history. And the way this works is more or less you have kind of a few levels. And level zero might be how humans are just not using AI and write all of the code. Level one is kind of like personal use where engineers are not sharing prompts across the team or not versioning them. Level two is team use whereby teams are are sharing these kind of prompts and rules. And then level three is even more sophisticated. It's where AI autonomously does specific tasks maybe not the entire workflow. And level four is you know agentic orchestration which is where AI just runs the entire process. And so this is going to be an open- source tool which you can leverage if you sign up on the sweeper research portal.</p>
</details>

我们将这个基准应用于我们研究数据集中的一家公司，并看到了这样的结果。这家公司有两个业务部门，他们拥有相同的AI工具访问权限，相同的许可、相同的花费、相同的工具，一切都相同。但不同业务部门的采纳率和使用率却大相径庭。在左侧，第一个业务部门，如你所见，蓝色区域显示他们似乎更多地使用了AI，占了近40%的工作量；而在右侧的第二个业务部门，则显得有些落后。因此，这里的关键启示是：获得AI工具的访问权限，甚至AI的使用本身，并不意味着或不能保证AI会在公司内部以相同的方式被使用。作为领导者，你不仅需要了解他们是否在使用AI，还需要了解你的工程师是如何使用AI的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We applied this benchmark to one of the companies in our research data set and we saw this. This company had two business units with equal access to AI tools, right? Same licenses, same spend, same tools, same everything. But the adoption rate and the usage rate was very different by business unit. On the left, the first business unit, you can as you can see in the area in the blue, seemed to be using AI a lot more for almost 40% of their work, whereas on the on the uh right the second business unit seem to struggle behind a bit more. And so the takeaway here is that access to AI and even AI usage doesn't mean or doesn't guarantee that that AI is going to be used in the same way across a company. As a leader, you really want to be understanding not just whether they're using but also how your engineers are using AI.</p>
</details>

### 如何衡量AI在软件工程中的投资回报率（ROI）

很好。现在让我们深入探讨，我们究竟如何衡量AI在软件工程中的投资回报率（ROI）。理想情况下，我们应该基于业务成果来衡量这一点，对吧？我给我的AI工程师们提供AI工具，然后我赚更多的钱，更多的收入，净收入留存，任何你想追踪的业务KPI都可以。问题在于，从“干预”（即提供AI）到“结果”（即业务成果）之间存在太多的噪音，而且还有混淆变量，例如你的销售执行情况、宏观环境、产品策略等。因此，尽管这会是理想情况，但很不幸，我认为我们需要寻找替代路径。最合乎逻辑的路径是简单地关注工程成果，因为那里有一个清晰的信号。但在这里，我们需要超越衡量AI使用量，转而衡量工程成果。这里有几个需要注意的地方，这个话题讨论得非常多，所以我想提几点。第一点是，这假设我们的产品功能能够有效地将增加的产能转化为产生价值的东西。如果他们没有引导这些产能，那么这就是一个产品问题，尽管它与工程紧密相关，但略有不同，对吧？第二个需要注意的地方是，这假设工程是产生价值的有意义的瓶颈，而事实上它通常是。并且你可以通过使用一套平衡的指标，以及拥有一个不将这些指标武器化的良好公司文化来规避“古德哈特定律”（Goodhart's Law）。第三，AI仍然非常新，衡量代理指标（proxy metrics）总比不衡量要好。在这场AI竞赛中会有赢家和输家。进步比完美更重要。因此，指标不必完美无瑕才能有用，这是我想说明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Now let's dive into how do we actually measure AI return on investment in software engineering.</p>
<p class="english-text">Oh uh there we go. Okay. So here ideally we would be measuring this based on business outcomes right? I give my AI engineer my engineers AI and then I make more money more revenue net revenue retention whatever business KPI you want to track. The problem is that there's too much noise between the treatment right giving AI and the result which is the business outcome and on top of this there's confounding variables such as your sales execution the macro environment your product strategy and therefore although that would be ideal unfortunately uh I think we need to find alternative paths and the most logical one is to simply look at the engineering outcomes because there is a clear signal right but here we need to go beyond measuring AI usage into measuring engineering outcomes.</p>
<p class="english-text">There's a few caveats and this topic is quite heavily discussed and so I want to mention some of them.</p>
<p class="english-text">The first one is that this is assuming that our product function can properly direct that increased capacity into something that generates value. And if they aren't directing that then it's a product problem which although sits quite close to engineering it's slightly different. Right?</p>
<p class="english-text">The second caveat is that this assumes that engineering is a meaningful bottleneck for value which frankly it typically is and that you can guard against good hards law by using a balanced set of metrics and also by having a good company culture that doesn't weaponize these metrics.</p>
<p class="english-text">And thirdly is that AI is still very new and measuring proxy metrics is still better than not measuring. There's going to be winners and losers in this AI race. And progress is better than perfection here. And so metrics don't need to be flawless to be useful is what I want to illustrate.</p>
</details>

那么，为了从AI中获得ROI，你需要做两件事：你需要衡量使用量，然后你需要衡量工程成果。让我们从使用量开始。对于企业来说，主要有两种方式。在研究环境中可能更复杂，但简单来说，有基于访问（access-based）和基于使用（usage-based）两种。基于访问是指查看人们何时获得了工具的访问权限。你可以设立一个试点小组，给予他们AI工具，然后与一个没有AI的相似小组进行比较；或者你可以跨时间衡量同一个团队。问题在于，基于访问的方法噪音很大。而黄金标准是基于使用的方法，它利用来自这些编码助手（coding assistants）API的遥测数据（telemetry），为你提供准确的数据，了解谁在使用AI以及在哪里使用。需要注意的是，供应商的API各不相同。不幸的是，像GitHub Copilot这样的工具会聚合数据，而像Cursor这样的工具则提供更细粒度的数据。一个重要的启示是，你可以通过使用Git历史记录来追溯性地衡量AI的影响。因此，你不需要现在就设置一个实验并等待六个月。如果你已经采纳了AI，你可以回溯过去并进行这项工作，这相当容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then um here we have uh two parts which you need to do to get the ROI from AI, right? You can need to measure usage and then you need to measure engineering outcomes. And so let's start with usage.</p>
<p class="english-text">There's really two buckets for enterprises. There's kind of more in a research environment, but to make it simple, there's access based and there's usage based. Accessbased is basically looking at when did people get access to the tool. And here we have you can kind of do a pilot group, give that group AI and then compare it to a similar group without AI or you can measure the same team across time. The problem is that access based is noisy and the gold standard is really usage based which uh uses telemetry from APIs from these coding assistants right to uh give you the right data to know who's using AI and and where and the caveat here is that the vendor API is different unfortunately tools like GitHub copilot aggregate the data and other tools like cursor give you more granular data</p>
<p class="english-text">the big takeaway is that you can measure impact of um retroactively by using git history and so you don't need to set up an experiment now and wait 6 months you can actually if you've already adopted AI you can go back in time and and and do this it's quite easy</p>
</details>

现在我们已经了解了使用量，让我们来看看如何实际衡量工程成果，以及我们提出的一些指标。这里是我们提出的框架，它使用一个主要指标（primary metric）和一个护栏指标（guardrail metric）。主要指标是工程产出（engineering output），它不是代码行数，不是PR数量，也不是DORA指标。它基本上是基于我们之前提到的复制专家小组的机器学习模型。第二组指标是护栏指标，你希望将它们维持在健康水平，但不需要最大化它们，因为最大化它们没有真正意义。护栏指标包含三个类别：返工与重构（rework and refactoring）、质量技术与风险（quality tech and risk），以及人员与DevOps（people and devops）。第三个类别很重要，需要强调的是，这些不是生产力指标。它们很有用，但你不能仅仅为了最大化开发者生产力而最大化它们。它们在某个点会失效。因此，这里的目标可能是保持护栏指标的健康，同时尽可能地提高主要指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now we've seen usage let's look into how do we actually measure engineering outcomes what are some of the metrics we propose</p>
<p class="english-text">here we have um our framework which we propose which is using a prim primary metric and a guardrail metric and so here um the primary metric is engineering output it's not lines of code it's not PR counts and it's not DORA and it's basically based on this machine learning model that replicates the panel of experts right and the second set of metrics are the guardrail ones which you want to maintain at a healthy level but you don't want to maximize it doesn't make sense to maximize them truly</p>
<p class="english-text">and so then there's three categories within the guardrail ones rework and refactoring quality tech and risk and then people and devops</p>
<p class="english-text">The third bucket is important to highlight that these are not productivity metrics. They're useful, but you cannot just kind of use them like maximize them to maximize developer productivity. They kind of fall off at some point. And so the goal here might be to keep your guardrail metrics healthy while increasing the primary metric to whatever degree possible.</p>
</details>

### 案例研究：AI采纳的真实影响

现在让我们深入到一个案例研究。我们与一家大型企业合作。我们选取了一个由一位副总裁领导的350人团队，并测量了他们的Pull Request（PR）数量。我们这样做的原因是说明，你不能仅凭PR数量来判断AI是否在帮助你。这个团队在今年5月采纳了AI，我们测量了采纳前后的四个月数据。我们看到了14%的增长。太棒了。但这关于评审者负担呢？代码质量又如何？所以我们测量了代码质量。在这里，我们看到的是……首先，代码质量可以理解为可维护性，从0到10分。这里有不同的等级划分。它使用了我们的方法论，你可以在网上阅读。但基本上，你看到的是，在AI采纳之前，他们的代码质量相当稳定和一致。一旦他们采纳了AI，发生了两件事：代码质量下降了，并且变得更加不稳定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let's dive into a case study. Here we worked with a company that uh large enterprise. We took a team of uh 350 people under a vice president and we measured pull requests. The reason we did this is to illustrate that you cannot measure pull requests to understand whether AI is helping you.</p>
<p class="english-text">And so here this team adopted um AI in May of this year and we measured the four months before 4 months after. We saw a 14% increase. Great. That's fantastic. But what about reviewer burden? What about code quality? So we measured code quality.</p>
<p class="english-text">And here what we saw is um I mean firstly actually code quality think of it as maintainability scale from 0 to 10. And uh there's kind of these bands. Uh it uses our our methodology. You can read it online. [snorts] But basically what you see is that in the preAI period their code quality was quite stable and consistent. And once they adopted AI two things happened. code quality decreased and then code quality became more erratic.</p>
</details>

接下来，我们查看了我们的指标——工程产出。这不是代码行数。在这里，每个月你都会看到sigma值，即当月交付的产出总和，细分为四个类别：返工（rework）和重构（refactoring）。返工是指你修改或编辑那些还比较新的代码；重构是指你修改那些稍微旧一些的代码。然后是添加和移除的代码，这很容易理解。你还可以看到这些基准比较。我们可以将这家公司与其所在行业的类似公司进行基准比较。在这里，AI的使用产生了两个影响：首先，返工增加了2.5倍，这非常糟糕。而有效产出（effective output），可以作为生产力的代理指标，并没有真正改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we took a look at our metric which is engineering output. It's not lines of code. And here for every month, you see the sigma, the sum of the output delivered for that month broken down into four buckets. Rework and refactoring. So rework is when you're changing or editing code that was it's still kind of fresh, so it's recent. Refactoring is when you're changing code that's a bit older. And uh what uh then like added and removed it's pretty self-explanatory. And then also you can see these kind of benchmarks. So we can benchmark this company against similar companies in their industry. And here AI usage had two effects. Firstly is that rework went up by 2.5 times which is really bad. And effective output which is kind of like a proxy for productivity or so didn't really change.</p>
</details>

那么，结论是什么呢？让我们来回顾一下。我们看到PR数量增加了14%。但这没有定论，因为更多的PR并不意味着更好。我们看到代码质量下降了9%，这很成问题。我们看到有效产出没有显著增加。然后我们看到返工大幅增加。那么，问题来了：这次AI采纳的ROI是多少？它可能是负的。我想指出的是，如果这家公司没有进行更彻底的测量，而仅仅测量PR数量，他们会认为：“嘿，我们做得很好。我们的生产力提高了14%。”然后他们会计算数字，得出数百万美元的收益。这足以抵消AI许可费用吗？当然可以，对吧？另一件事是，我认为这家公司不应该放弃AI。他们应该利用这些数据来了解自己哪里做错了，如何改进？因为AI将长期存在。它是一种将改变工程师工作方式的工具，对吧？你不能就此放弃它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so then what's the conclusion here? Let's do a recap. So we saw that PRs went up by 14%. But this is inconclusive because more PRs doesn't mean better. We saw that code quality decreased by 9% which is problematic. We saw that effective output didn't increase meaningfully. And then we saw that rework increased by a lot. And so then the question here is what is the ROI of this AI adoption? Right? It might be negative. And what I want to point out here is that had this company not measured this more thoroughly and simply measured PR counts, they would have thought, hey, we're doing great. We increased our productivity by 14%. Let's run the numbers. That's how many million lots of millions of dollars. And does this offset the AI licenses? Sure thing it does, right? The other thing is that I don't think this company should abandon AI. They should simply use this data to understand what they're doing wrong. How can they improve? Because AI is here to stay. It's a tool that's going to transform how engineers are are working, right? and you can you just um kind of like abandon it or so.</p>
</details>

### 结论与研究参与邀请

好的。今天的分享就到这里。如果你喜欢这次演讲，并希望为你的公司获得类似的洞察，我邀请你参与我们的研究。今天你看到的一切，都可以通过参与我们的研究来获取，其中一些内容可以在我们研究门户网站的实时仪表板上查看。我特别邀请拥有Cursor Enterprise访问权限的公司参与，因为我们对此有很高的需求，以便我们能够发表关于AI在软件工程中精细化使用的论文。你可以在software engineering productivity.stanford.edu注册。非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. So, this concludes our insights for today. If you've enjoyed this uh talk and you would like similar insights for your company, I invite you to participate in our research. Everything you've seen today can uh be accessed through kind of participating in our research, some of them through live dashboards in our research portal. And especially I'd like to invite companies that have access to cursor enterprise to participate because we have a high need for this so we can publish papers around the granularity of using AI um in software engineering. You can sign up at software engineering productivity.stanford.edu.</p>
<p class="english-text">Thank you so much.</p>
<p class="english-text">[music]</p>
</details>