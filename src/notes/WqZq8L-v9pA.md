---
area: tech-insights
category: technology
companies_orgs:
- Jellyfish
- GitHub
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Nicholas Arcolano
products_models:
- Copilot
- Cursor
- Claude Code
- Devon
- Codeex
- Linear
- Jira
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=WqZq8L-v9pA
speaker: AI Engineer
status: evergreen
summary: 这篇文章基于对2000万次拉取请求数据的分析，深入探讨了AI在软件开发转型中的实际影响。研究发现，交互式AI编码工具的采用率已接近90%，显著提升了拉取请求吞吐量和缩短了开发周期。然而，自主编码代理的普及率仍较低。文章还揭示了代码架构对AI生产力增益的关键影响，指出集中式架构能实现4倍的生产力提升，而高度分布式架构则效果不佳，强调了上下文工程的重要性。
tags:
- ai-adoption
- code
- developer-productivity
- pull-request
- software-development
title: 2000万次拉取请求数据揭示：AI转型如何影响软件开发生产力与代码架构
---

### AI转型中的关键问题与数据驱动的洞察

大家好，我叫尼古拉斯·阿科拉诺，是Jellyfish的研究主管。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, my name is Nicholas Arcolano and I'm the head of research at Jellyfish.</p>
</details>

今天，我想和大家谈谈**AI转型**（AI Transformation: 指企业将人工智能技术整合到其业务流程和产品中，以提升效率和创新能力的过程），特别是真实世界的数据能告诉我们野外实际发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, I'd like to talk to you about AI transformation, specifically what real world data can tell us about what's actually happening in the wild.</p>
</details>

现在，许多AI原生公司正在成立，还有更多现有公司正试图将自己转变为AI原生公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, a lot of AI native companies are being founded right now, and there are many more existing companies that are trying to transform themselves into being AI native.</p>
</details>

我与这些公司的许多人交流过，他们都有相同的重大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've talked to many folks from these companies, and they all have the same big questions.</p>
</details>

第一，AI编码工具和代理的良好采用究竟是什么样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Number one, what does good adoption of AI coding tools and agents actually look like?</p>
</details>

第二，随着我们团队和所用工具的转型，我应该期待怎样的生产力提升？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, number two, what productivity gains should I be expecting as we transform our team and the tools that we use?</p>
</details>

第三，这种转型会带来哪些副作用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, three, what are the side effects of this transformation?</p>
</details>

也许最重要的是，如果AI转型未能如宣传般奏效，那问题出在哪里，我们能做些什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And perhaps most importantly, if AI transformation isn't delivering as advertised, what's going on and what can you do about it?</p>
</details>

在Jellyfish，我们相信获取答案的最佳方式是数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, at Jellyfish, we believe the best way to get answers is with data.</p>
</details>

因此，在接下来的15到20分钟里，我将向大家提供一些基于数据洞察的研究结果，以帮助大家解决这些重大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the next 15- 20 minutes or so, I'm going to give you some databacked insights from studies we've done to help you tackle these big questions.</p>
</details>

### 数据来源与研究方法

好的，在我们深入探讨之前，请允许我花一分钟时间谈谈本次演讲中其他内容背后的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, before we jump in though, uh let's take a minute to talk about the data behind the rest of the stuff in this talk.</p>
</details>

在Jellyfish，我们为软件工程领导者提供分析和洞察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh now at Jellyfish, we provide analytics and insights for software engineering leaders.</p>
</details>

为此，我们结合了来自多个来源的信息，包括与**AI编码工具**（AI Coding Tools: 开发者在编写代码时实时提供建议、自动完成或生成代码的人工智能工具）的交互和使用情况，例如Copilot、Cursor、Claude Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to do this, we combine information from multiple sources, including usage and interactions with AI coding tools like C-pilot, Cursor, Claude Code,</p>
</details>

还包括与**自主编码代理**（Autonomous Coding Agents: 能够独立执行复杂编码任务，从理解需求到生成、测试和部署代码的人工智能系统）的交互，例如Devon和Codeex，以及**PR审查机器人**（PR Review Bots: 自动审查拉取请求并提供反馈的工具）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh interactions uh with autonomous coding agents, things like Devon and Codeex as well as PR review bots.</p>
</details>

我们还将这些数据与来自GitHub等**源代码控制平台**（Source Control Platforms: 用于管理和跟踪代码变更的系统）的数据结合起来，以便了解实际工作发生的代码库情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also combine this with data from source control platforms like GitHub, so we can understand things about the actual codebase where the work is happening.</p>
</details>

我们还从**任务管理平台**（Task Management Platforms: 用于规划、跟踪和管理项目任务的工具）中提取数据，例如Linear或Jira，这告诉我们正在进行的工作的实际目标是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also pull in data from task management platforms uh things like linear or Jira and that tells you about what the actual goal of uh the work being done is.</p>
</details>

因此，在本次演讲的其余部分，我们将研究来自一个数据集的发现，该数据集包含了我们客户的类似数据，总计约2000万次**拉取请求**（Pull Request, PR: 软件开发中，开发者请求将自己分支的代码合并到主分支的操作）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for the rest of this talk we're going to be looking at findings from a data set with data like this uh across our customers comprises about 20 million poll requests.</p>
</details>

这些拉取请求是由大约20万名开发人员从约1000家公司编写并合并的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh these were written emerged by about 200,000 uh developers from around a thousand companies.</p>
</details>

我们收集这些数据已超过一年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've been collecting this data for more than a year.</p>
</details>

所以今天我们将看到从2024年6月至今的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today we'll be looking at results that span from June 2024 to the present.</p>
</details>

### AI工具的采用现状

好的，让我们深入探讨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so let's dig in.</p>
</details>

问题一：良好的采用是什么样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Question one, what does good adoption look like?</p>
</details>

嗯，我们从代码行数开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, [sighs and gasps] let's start with lines of code.</p>
</details>

我认为这不是一个很好的衡量标准，但它是我们在媒体上经常听到的一个指标，所以值得谈论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think this is a great metric, but it's one we all hear about in the media a bunch, so it's worth talking about.</p>
</details>

这里的数据来自我们自去年6月以来一直在跟踪的一批公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's data from a cohort of companies we've been tracking since June of last year.</p>
</details>

紫色条代表这些公司中50%或更多代码由AI生成的比例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The purple bar represents the fraction of those companies that are generating 50% or more of their code with AI.</p>
</details>

所以如果你看那条紫色条，你会发现从去年夏天开始，只有大约2%的公司有50%或更多的代码是由AI生成的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you look at that purple bar, you can see that starting last summer, only about 2% of these companies were generating 50% or more of their code with AI.</p>
</details>

但你可以看到这个比例一直在稳步增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can see this has been steadily growing.</p>
</details>

截至上个月，在这些公司中，现在近一半的公司有50%或更多的代码是由AI生成的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as of last month, among these same companies, now nearly half are generating 50% or more of their code with AI.</p>
</details>

现在，我认为一个更有用的观察点实际上是开发人员的采用率，因为它反映了你希望在团队中看到的实际行为变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I think a more useful thing to look at actually is developer adoption because this gets at the actual behavior change that you want to see in your team.</p>
</details>

这也是我所见过的与良好生产力结果最直接相关的因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's also the thing I've seen that correlates most directly with good productivity outcomes.</p>
</details>

我们稍后会更多地讨论这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're going to talk about this a lot more later.</p>
</details>

但首先，我们通过计算开发人员在编码时使用AI工具的时间比例来定义AI采用率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but first, we define an AI adoption rate for developers by computing the fraction of time that they use AI tools when they code.</p>
</details>

所以，一个开发人员的100%采用率意味着每次编码都使用AI工具。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So 100% for a developer, that means you're using AI tools every time you code.</p>
</details>

一家公司的整体采用率就是所有个人采用率的平均值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A company's adoption rate for the whole company, that's just the average of the adoption rates for all their individuals.</p>
</details>

所以，一家公司的100%采用率意味着每个开发人员每次编码都使用AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 100% for a company means that every developer is using AI every time they code.</p>
</details>

你在这里看到的是我们一直在跟踪的开发人员和公司每周公司采用率的第25、50和75百分位数图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what you see here, this is a plot of the 25th, 50th, and 75th percentile of company adoption rates uh by week for the developers and companies that we've been tracking.</p>
</details>

如果你看去年夏天的AI采用率，你会发现中位采用率约为22%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you look at the AI adoption rates as of last summer, you can see the median adoption rate was around 22%.</p>
</details>

这意味着，中位公司开发人员在22%的编码时间里使用AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, uh, median company developers are using AI 22% of the time that they code.</p>
</details>

自那时以来，它一直在稳步增长，今天我们看到中位采用率接近90%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's grown steadily since then, and today we're seeing median adoption rates close to 90%.</p>
</details>

现在，如果你像我一样，不断地并行使用多种工具，包括同步和异步模式，那么你的采用率就是100%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if you're like me and you're using multiple tools constantly in parallel, both synchronous and asynchronous modes, uh, you're you're at 100%.</p>
</details>

你可能会觉得，为什么不是所有人都达到100%呢，这似乎很疯狂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might seem crazy to you that not everyone else is at 100%.</p>
</details>

然而，现实是对于许多团队来说，完全采用这些工具仍然存在真正的技术、组织和文化障碍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, the reality is that for many teams, there are still real technical, organizational, and cultural barriers to adopting these tools more completely.</p>
</details>

### 自主编码代理的早期阶段

这让我谈到关于采用的最后一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, that brings me to my final point on adoption.</p>
</details>

你可能会问，那自主编码代理呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You might ask, what about autonomous coding agents?</p>
</details>

我刚才向你展示的结果绝大多数来自交互式编码工具，例如Copilot、Cursor、Claude Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the results I've just shown you, those are overwhelmingly from interactive coding tools, things like Copilot, Cursor, Claude Code.</p>
</details>

我们知道这些工具都有交互式代理模式，但那些真正的完全自主代理，比如Devon或Codeex呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we know that these tools all have interactive agentic modes, but what about your your kind of true fully autonomous agents like your Devons or your codeexs?</p>
</details>

也许你正在高效地使用这些代理或类似的东西，或者你还没有真正开始使用自主代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you're using agents like these or something else to great effect or maybe you haven't really gotten going with autonomous agents yet.</p>
</details>

没关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's fine.</p>
</details>

无论你处于旅程的哪个阶段，如果感觉自主代理的起步进展缓慢，我告诉你，你并不孤单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, wherever you are in your journey, but if it feels like you're slow going getting off the ground with autonomous agents, I'm here to tell you you're not alone.</p>
</details>

在我们的数据集中，过去三个月只有约44%的公司对自主代理做过任何尝试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in our data set, we only see about 44% of companies have done anything with autonomous agents at all in the past 3 months.</p>
</details>

其中绝大部分工作是你认为是试用和实验性质的，而不是全面生产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The vast majority of that work is what you'd consider um triing and experimentation type stuff like not full scale production and ultimately it all amounts to less than uh 2% of the millions of PRs that were merged over that time frame.</p>
</details>

最终，这只占同期合并的数百万次拉取请求的不到2%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so you know still very early days.</p>
</details>

所以，你知道，这仍然是非常早期的阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's move on.</p>
</details>

### AI带来的生产力提升

好的，让我们继续。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I'd like to talk about productivity.</p>
</details>

现在，我想谈谈生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, even though autonomous agents aren't yet delivering at scale, we're still seeing big gains from adoption of interactive coding agents.</p>
</details>

尽管自主代理尚未实现规模化交付，但我们仍然从交互式编码代理的采用中看到了巨大的收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's talk about what we're seeing.</p>
</details>

那么，我们看到了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First though, what do we mean by productivity?</p>
</details>

首先，我们所说的生产力是什么意思？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This can be a very loaded term, kind of squishy, overloaded.</p>
</details>

这是一个含义非常丰富、有些模糊、超载的术语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's many ways to attack it.</p>
</details>

有很多方法可以解决它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, a good place to start though, just plain old PR throughput.</p>
</details>

不过，一个好的起点是简单的**拉取请求吞吐量**（PR Throughput: 单位时间内完成的工作量，此处指每位工程师每周合并的拉取请求数量）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many pull requests does the average engineer merge per week?</p>
</details>

平均每位工程师每周合并多少个拉取请求？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not the most exotic metric, but it's proven.</p>
</details>

这不是最奇特的指标，但它经过验证，被广泛接受。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's widely accepted.</p>
</details>

请注意，拉取请求吞吐量的绝对水平是会变化的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh do note that the absolute level of PR throughput is something that varies, right?</p>
</details>

它取决于你如何划分工作范围等因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It depends on things like how you like to scope work.</p>
</details>

它实际上也取决于你的架构，请记住这一点，因为我们稍后会更多地讨论它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It actually also depends on your architecture and put a pin in that because we're going to talk about that more later.</p>
</details>

然而，衡量拉取请求吞吐量的变化，特别是保持所有其他因素不变的情况下，是衡量团队生产力提升的好方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh however, measuring the change in PR throughput, especially to keep all these other things constant. Measuring that for your team is a good way to uh track productivity gains.</p>
</details>

另一个好的指标是**周期时间**（Cycle Time: 从代码首次提交到合并部署所需的时间）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another good one, cycle time.</p>
</details>

你知道，有很多不同的方法来定义它，但基本上它是代码部署的延迟或交付时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you know, lots of different ways to define that one, but basically the latency or lead time to code getting deployed.</p>
</details>

为了我们的目的，我们将针对每个拉取请求，测量从首次提交到合并的时间范围。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For our purposes, we'll take each PR and we'll measure the time frame from the first commit in the PR until it was merged.</p>
</details>

好的，这就是我们看到的拉取请求吞吐量的变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so here's what we're seeing for changes in PR throughput.</p>
</details>

让我解释一下这张图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And let me explain this chart.</p>
</details>

这里的每个数据点都是特定公司在特定一周的快照。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, every data point here is a snapshot of a given company on a given week.</p>
</details>

x轴是我们之前讨论的公司AI采用率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The x-axis is the company's AI adoption rate that we discussed earlier.</p>
</details>

y轴是该公司该周每位工程师的平均拉取请求数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The y-axis is the company's average PRs per engineer that week.</p>
</details>

所以你可以在这里看到AI采用率和拉取请求吞吐量之间存在明显的关联。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see here a clear correlation between AI adoption and PR throughput.</p>
</details>

这里的平均趋势是，从零采用到完全采用，大约有2倍的变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The average trend here is about a 2x change as you go from zero to full adoption.</p>
</details>

因此，平均而言，如果一家公司从完全不使用AI（现在几乎没有人这样做）到100%采用AI编码工具，他们应该期望拉取请求吞吐量翻倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on average, a company should expect to double their PR throughput if they go from not using AI at all, which not really anybody's doing anymore, to 100% uh adoption of AI coding tools.</p>
</details>

现在，我们还看到周期时间有所缩短。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we also see some gains in cycle time.</p>
</details>

这意味着更多的工作正在发生，而且发生得更快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So more work is happening and it's happening faster.</p>
</details>

这与之前的图表类似，但现在y轴上我们看到的是每周合并的拉取请求的中位周期时间，而不是拉取请求吞吐量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is similar to the previous chart, but now on the y- axis, we're looking at median cycle time for PRs merged each week instead of PR throughput.</p>
</details>

这是一个很酷的图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, this is a cool chart.</p>
</details>

顺便说一句，我喜欢周期时间分布，因为你可以看到两条清晰的水平带。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As an aside, I like the cycle time distribution because you can see these two clear bands horizontally.</p>
</details>

所以，下面那个水平集群对应的是耗时不到一天的任务，然后你会看到一个“山谷”，接着中间有一条带，对应的是耗时大约两天的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that lower horizontal cluster that corresponds to tasks that take less than a day and then you see sort of a valley and then there's a band in the middle for tasks that take about two days.</p>
</details>

然后y轴上方还有很长的尾部，对应的是耗时更长的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then there's a long tail of stuff going up the y-axis that takes much longer.</p>
</details>

我在这里截断了它，因为我们都知道有些事情可能需要相当长的时间才能合并。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've truncated it here because as we all know some things can take uh quite a while [laughter] to to get merged.</p>
</details>

但令人兴奋的是，平均趋势显示，从0%到100%采用AI编码工具，周期时间平均减少了24%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but you know what's exciting here is the average trend is a 24% decrease in cycle times as you go from 0% to 100% adoption of AI coding tools.</p>
</details>

### AI转型的副作用：更大的拉取请求但质量未受影响

所以，从大局来看，生产力提升是个好消息，也许你自己的组织也看到了这些变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So big picture is good news for productivity gains and maybe you're seeing these things in your own organization but uh what about the side effects?</p>
</details>

但副作用呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We all know there's no free lunch.</p>
</details>

我们都知道没有免费的午餐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what other things change as you go through an AI transformation?</p>
</details>

那么，当你经历AI转型时，还有哪些事情会改变呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, one thing we've observed is that PRs are getting bigger.</p>
</details>

嗯，我们观察到的一件事是拉取请求变得更大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here's a plot like the previous ones I've showed, except now the y-axis is PR size.</p>
</details>

所以，这是我之前展示的图表之一，只是现在y轴是拉取请求的大小。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, on average, teams that have fully adopted AI coding tools are pushing PRs that are 18% larger in terms of net lines of code added.</p>
</details>

因此，平均而言，完全采用AI编码工具的团队正在提交的拉取请求，其净增代码行数平均增加了18%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that size change is due much more uh you know when I say net it's due more to additions than deletion.</p>
</details>

现在，这种大小变化更多地是由于新增而非删除。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that means that the combined change is primarily coming from net new code not necessarily just uh you know fully rewritten or heavily reworked code.</p>
</details>

这意味着总的变化主要来自净新增代码，而不一定是完全重写或大量重构的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh another kind of interesting detail is that the average number of files touched is about the same.</p>
</details>

另一个有趣的细节是，平均触及的文件数量大致相同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this change is more about code that's uh it's more thorough or maybe just more verbose.</p>
</details>

所以这种变化更多地是关于代码更彻底，或者可能只是更冗长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's not the case that AI is touching more files and changing code in more different places in in the code base.</p>
</details>

但并非AI正在触及更多文件，并在代码库中更多不同的地方更改代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is largely happening within the same files.</p>
</details>

这主要发生在相同的文件中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, now if teams are pushing more PRs and writing and merging them faster and the PRs are getting bigger, then you might be wondering about quality.</p>
</details>

那么，如果团队正在提交更多的拉取请求，并且更快地编写和合并它们，而且拉取请求变得更大了，你可能会担心质量问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, are we seeing effects on quality as we use more AI and push code faster?</p>
</details>

那么，当我们更多地使用AI并更快地提交代码时，我们是否看到了对质量的影响？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, right now the answer is not really.</p>
</details>

嗯，目前答案是“不尽然”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're not really seeing any big effects.</p>
</details>

我们没有看到任何大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've looked at bug tickets created and we looked at rates of PR reverts code that had to be rolled back and we haven't found any statistically significant relationship with the rate of AI adoption.</p>
</details>

我们查看了创建的bug工单，以及拉取请求回滚（即不得不回滚的代码）的频率，我们没有发现与AI采用率有任何统计学上的显著关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh interestingly we have found increases in the rates of bugs resolved.</p>
</details>

有趣的是，我们确实发现已解决bug的频率有所增加。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh when you dig into the data you find this is because um teams are disproportionately using AI to tackle bug tickets in their backlog.</p>
</details>

当你深入研究数据时，你会发现这是因为团队不成比例地使用AI来处理积压的bug工单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you see a lot more uh bug tickets being um uh addressed by AI but not necessarily being caused by AI.</p>
</details>

所以你会看到更多的bug工单由AI处理，但这些bug不一定是由AI引起的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this makes sense.</p>
</details>

这很合理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, bugs are often well scoped verifiable tasks that AI coding tools can be set up well to succeed at.</p>
</details>

你知道，bug通常是范围明确、可验证的任务，AI编码工具可以很好地胜任。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're seeing uh a lot of people having success throwing AI at those kinds of tasks.</p>
</details>

我们看到很多人在处理这类任务时，通过AI取得了成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but basically there's there's no smoking gun on quality yet though you know we're going to keep digging in here especially as usage of of asynchronous agents grows.</p>
</details>

但基本上，目前还没有关于质量问题的确凿证据，不过我们会继续深入研究，特别是随着异步代理的使用增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right last question.</p>
</details>

### 代码架构对AI生产力增益的影响

好的，最后一个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What if what you're seeing at your or doesn't align with the kind of results we've been talking about here so far?</p>
</details>

如果你在自己的组织中看到的结果与我们目前讨论的这些结果不符怎么办？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what if you're listening to this and it is just not your reality.</p>
</details>

你知道，如果你听了这些，但它并不是你所面临的现实，该怎么办？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I think I've made it clear uh so far that the most important thing to focus on first is adoption.</p>
</details>

嗯，我想我到目前为止已经明确表示，首先最重要的是关注采用率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're not going to see gains until you get folks using these tools at scale.</p>
</details>

除非你让人们大规模使用这些工具，否则你不会看到收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's common sense, but maybe you are seeing high adoption and you're still not seeing the kind of productivity gains that all your friends on LinkedIn are crowing about.</p>
</details>

我认为这是常识，但也许你看到了高采用率，但仍然没有看到LinkedIn上所有朋友都在吹嘘的那种生产力提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what's going on?</p>
</details>

那么，这是怎么回事？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we've looked at a lot of things here and there's plenty more to investigate, but I'd like to share one that's particularly interesting and uh that's code architecture.</p>
</details>

嗯，我们在这里研究了很多东西，还有很多需要调查，但我想分享一个特别有趣的点，那就是**代码架构**（Code Architecture: 指软件代码库的组织方式，如单体仓库或多体仓库，以及服务结构如单体服务或微服务）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By code architecture uh what I mean is how are the code for your products and services organized across your repositories.</p>
</details>

我所说的代码架构是指你的产品和服务的代码如何在你的仓库中组织。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh think about code being organized into monor repos versus poly repos and that arrangement of of your code.</p>
</details>

所以，想想代码是组织成**单体仓库**（Monorepo: 将所有项目代码存储在一个大型版本控制仓库中的做法）还是**多体仓库**（Polyrepo: 将不同项目代码存储在多个独立版本控制仓库中的做法），以及你代码的这种排列方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It could be indicative of monolithic services versus microservices.</p>
</details>

它可能表明是**单体服务**（Monolithic Services: 指将所有功能打包在一个独立部署单元中的传统软件架构）还是**微服务**（Microservices: 一种架构风格，将应用程序构建为一组小型、独立部署的服务）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It could be the difference between a centralized versus a more federated product strategy.</p>
</details>

它可能是集中式与更联邦化的产品策略之间的区别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and the way that we actually measure this, you know, one key metric for understanding it is active repos per engineer.</p>
</details>

我们实际衡量这一点的方式，你知道，理解它的一个关键指标是“每位工程师活跃仓库数”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is actually a pretty straightforward one.</p>
</details>

这实际上是一个相当直接的指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's just how many distinct repos typical engineer uh pushes code in in a given week.</p>
</details>

它只是指典型的工程师在给定一周内向多少个不同的仓库提交代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One really cool thing about this metric is that it's scale independent.</p>
</details>

这个指标一个非常酷的地方是它与规模无关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it turns out that you know by computing this per engineer normalizing by the number of engineers you remove any correlation with the size of of the company uh with the size of the team.</p>
</details>

所以事实证明，通过计算每位工程师的这个指标，并按工程师数量进行标准化，你可以消除与公司规模或团队规模的任何关联。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in other words this metric it tells you something about the shape of the code that your engineers have to work with on a daily and weekly basis and it tells you that regardless of how big your company is.</p>
</details>

换句话说，这个指标告诉你一些关于你的工程师日常和每周工作所接触的代码形态的信息，而且它告诉你这些信息，无论你的公司有多大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you know this metric that that I'm introducing here this is what the distribution of that metric looks like.</p>
</details>

所以你知道，我在这里介绍的这个指标，它的分布是这样的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh here's a probability distribution across the companies in our study.</p>
</details>

这是我们研究中所有公司的概率分布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The more centralized architectures you can see on the left uh and then there's a long tail of highly distributed architectures to the right and then more balanced architectures, you know, balanced and lightly distributed line between these two extremes.</p>
</details>

你可以看到左侧是更集中的架构，然后右侧是高度分布式架构的长尾，而更平衡的架构，也就是平衡和轻度分布式架构，则介于这两个极端之间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we we've got these four regimes as you increase um the active repos per engineer.</p>
</details>

因此，随着每位工程师活跃仓库数的增加，我们有这四种模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you know, here's where it gets really interesting.</p>
</details>

所以你知道，这才是真正有趣的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So remember those 2x gains in PR throughput that I showed you before.</p>
</details>

还记得我之前向你们展示的拉取请求吞吐量2倍的增长吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's a flashback.</p>
</details>

回顾一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Remember this.</p>
</details>

记住这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh well, if we take this plot, you know, take all these data points, all these different companies, and you segment on um this active repos per engineer.</p>
</details>

嗯，如果我们拿这张图，你知道，把所有这些数据点，所有这些不同的公司，然后根据“每位工程师活跃仓库数”进行细分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've got, you know, four different regimes that we can do this analysis in.</p>
</details>

我们有四种不同的模式可以进行这种分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we've got centralized, balanced, distributed, and highly distributed.</p>
</details>

所以我们有集中式、平衡式、分布式和高度分布式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if we perform that same analysis, we see big differences.</p>
</details>

如果我们进行相同的分析，我们会看到巨大的差异。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So looking at that top row, you can see centralized and balanced code architectures, uh, they trend more like 4x, not like 2x.</p>
</details>

所以看最上面一行，你会发现集中式和平衡式代码架构的趋势更像是4倍，而不是2倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they're doing much better than the average.</p>
</details>

所以它们比平均水平好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the distributed architecture there, uh, in the the lower leftand corner in the teal, that that looks more like that global 2x trend that we see when you look at all the data.</p>
</details>

而左下角青绿色的分布式架构，看起来更像是我们查看所有数据时看到的全球2倍趋势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's really interesting is this highly distributed case.</p>
</details>

真正有趣的是这种高度分布式的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's essentially no correlation here between AI adoption and PR throughput.</p>
</details>

这里AI采用率和拉取请求吞吐量之间基本上没有关联。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and actually the the weak trend that does exist is actually slightly negative.</p>
</details>

而且，实际上存在的微弱趋势甚至是略微负面的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what's what's going on here?</p>
</details>

那么，这里发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like why are teams with highly distributed architectures struggling?</p>
</details>

为什么具有高度分布式架构的团队会遇到困难？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They don't seem to be getting real gains, at least not on average from AI.</p>
</details>

他们似乎没有从AI中获得真正的收益，至少平均来看是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, a big part of what you're seeing here is really the problem of context.</p>
</details>

嗯，你在这里看到的一个重要部分实际上是**上下文**（Context: 指AI工具在生成或理解代码时需要考虑的相关信息，如项目结构、依赖关系和业务逻辑）的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So most of today's tools are really set up uh best to work with one repo at a time.</p>
</details>

所以，今天的大多数工具最适合一次处理一个仓库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we've used these uh you know, you pick a repo and and you dive in and combining context across repos, it's often challenging.</p>
</details>

你知道，我们用过这些工具，你选择一个仓库然后深入其中，而跨仓库结合上下文通常是具有挑战性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's challenging uh for humans as well as for coding tools and for agents.</p>
</details>

这对人类以及编码工具和代理来说都是挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh moreover, the relationships between these repos and the systems and products they relate to, they're often not even written down very clearly.</p>
</details>

此外，这些仓库与它们相关的系统和产品之间的关系，通常甚至没有非常清晰地记录下来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They might be largely locked in the heads of senior engineers.</p>
</details>

它们可能主要存在于高级工程师的脑海中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they're definitely not accessible often to coding tools and agents.</p>
</details>

它们肯定通常无法被编码工具和代理访问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's going to take some time for for teams to invest in the context engineering that's needed here.</p>
</details>

所以，团队需要花一些时间投资于这里所需的**上下文工程**（Context Engineering: 指设计和优化系统以确保AI工具能够准确理解和利用相关代码及系统信息的过程）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's an interesting challenge and especially you know in light of the fact that uh a lot of folks are saying you may have heard this too that microservices are the right way to go for a native development.</p>
</details>

这是一个有趣的挑战，特别是考虑到很多人都在说（你可能也听过），微服务是AI原生开发的正确方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I could see a world certainly where we solve these context challenges.</p>
</details>

所以我当然可以看到一个世界，在那里我们解决了这些上下文挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We adopt autonomous agents at scale.</p>
</details>

我们大规模采用自主代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're set up for success and this whole thing flips and this highly distributed category becomes the most productive way to do things.</p>
</details>

它们被设定为成功，然后整个情况会发生逆转，这种高度分布式类别将成为最有效率的做事方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But right now this is what we're seeing out in the world.</p>
</details>

但目前这就是我们在世界上看到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um as an aside, another thing you might notice here is that all of these distributions they you know as you go from the most centralized to the most distributed uh these uh you know this um PR per engineer uh shifts upward uh you know what's happening is the absolute number of repos uh increases as architectures get more distributed.</p>
</details>

顺便说一句，你可能还会注意到，所有这些分布，你知道，从最集中到最分布式，每位工程师的拉取请求数都会向上移动，你知道，发生的情况是随着架构变得更加分布式，仓库的绝对数量会增加。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, in a highly distributed architecture, it just takes more PRs overall to get things done due to things like migrations, cross reaper coordination.</p>
</details>

基本上，在一个高度分布式架构中，由于迁移、跨仓库协调等原因，完成任务总体上需要更多的拉取请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I bring this up because this is one of the many reasons why counting PRs in the absolute sense isn't isn't a great metric.</p>
</details>

我提出这一点是因为，这是为什么绝对意义上计算拉取请求不是一个好指标的众多原因之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You really need to be tracking change in PR throughput to understand productivity.</p>
</details>

你真的需要跟踪拉取请求吞吐量的变化来理解生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh because these things vary due to to factors like architecture choices.</p>
</details>

因为这些事情会因架构选择等因素而异。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, so that's it.</p>
</details>

### 总结与展望

好的，就这些了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh to recap, you know, probably not news to anyone uh watching this, but AI coding tools are being used in a big way.</p>
</details>

总结一下，对于观看此视频的任何人来说，这可能不是什么新闻，但AI编码工具正在被大规模使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Autonomous agents though, not so much.</p>
</details>

然而，自主代理的使用情况则不那么普遍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's still uh still early days.</p>
</details>

这仍然是早期阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we're seeing big productivity gains with mo more code being shipped and faster.</p>
</details>

我们看到了巨大的生产力提升，更多的代码被更快地发布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even if all you're using is interactive AI coding tools like Copilot, Cursor, and Cloud Code, you feel like maybe, you know, you're not uh as up on agentic, you know, fully autonomous agentic coding as you ought to be.</p>
</details>

即使你只使用Copilot、Cursor和Claude Code等交互式AI编码工具，你可能觉得自己在代理式、完全自主的代理式编码方面没有达到应有的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">two exchange of PR throughput uh should be your your expectation.</p>
</details>

拉取请求吞吐量2倍的提升应该是你的预期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You should you should be seeing that or more.</p>
</details>

你应该看到这个或更多的提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but also you should expect bigger PRs.</p>
</details>

但你也应该预期更大的拉取请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but maybe we can all ease up on some extreme quality anxiety.</p>
</details>

但也许我们可以都减轻一些极端的质量焦虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we want to keep an eye on that, but we're just not seeing big issues there.</p>
</details>

我们希望密切关注这一点，但目前我们没有看到大的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At least not yet.</p>
</details>

至少目前还没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, there are a lot of reasons why your mileage may vary and we're going to continue looking at this.</p>
</details>

最后，你的实际情况可能有所不同，原因有很多，我们将继续研究这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one place you can start is to think about your code architecture.</p>
</details>

但你可以从思考你的代码架构开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">how it might be holding you back, what you can do um you know to to compensate for some of the context limitations you have and ultimately try to unlock some of those uh the sweet AI productivity gains.</p>
</details>

它可能如何阻碍你，你可以做些什么来弥补一些你所面临的上下文限制，并最终尝试释放那些甜美的AI生产力收益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's it.</p>
</details>

就这些了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's all I've got.</p>
</details>

这就是我所要说的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Nicholas Arcolano, head of research at Jellyfish.</p>
</details>

我是尼古拉斯·阿科拉诺，Jellyfish的研究主管。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you so much for listening.</p>
</details>

非常感谢大家的聆听。