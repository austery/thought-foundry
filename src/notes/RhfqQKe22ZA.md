---
author: AI Engineer
date: '2025-12-24'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=RhfqQKe22ZA
speaker: AI Engineer
tags:
  - ai-benchmarking
  - developer-productivity
  - ai-reliability
  - human-ai-collaboration
  - research-methodology
title: METR研究：AI能力衡量中的基准测试与经济学证据的鸿沟
summary: METR的Joel Becker探讨了衡量AI能力的两大途径：基准测试与实地经济学实验。基准测试显示AI能力飞速发展，但一项针对资深开发者的实验却发现，AI工具反而使他们工作效率下降了19%。演讲深入分析了AI可靠性、任务复杂性、人类专家的高语境理解等因素，解释了为何基准测试结果与实际应用效果可能存在巨大差异，并指出当前基准测试可能无法完全反映AI在真实世界中的效用。
insight: ''
draft: true
series: ''
category: ai-ml
area: "work-career"
project: []
people:
  - Joel Becker
companies_orgs:
  - METR
  - OpenAI
products_models:
  - Claude 3 Sonnet
  - Claude 3 Opus
  - GPT-5.1
media_books: []
status: evergreen
---
### AI能力衡量的新视角

大家好，非常感谢各位的到来。我叫 Joel Becker，在 METR 担任研究员或技术员工。METR 的全称是模型评估与威胁研究（Model Evaluation and Threat Research）。正如大家稍后将看到的，我将要讨论的是人工智能（AI）的能力。我们如何知道今天的 AI 表现如何？在不久的将来，它们又可能表现如何？我们将从两个看似给出有些矛盾答案的证据来源来探讨这个问题。我本可以不引用 METR 的论文就完成这次演讲，但我们将以我参与过的两篇论文为例，一篇是基准测试风格的证据，另一篇是更偏向经济学的证据。在基准测试方面，我们衡量 AI 完成长任务的能力。这篇论文（我们稍后会看）包含了许多大家可能在 Twitter 等平台上见过的图表，METR 也因此而闻名。第二篇论文则是一项随机对照试验（RCT），衡量允许使用 AI 对开发者生产力有何影响。最后，我们将讨论如何调和这两种不同测量方法所暗示的差距。

<details>
<summary>Original English</summary>

Hey guys, thank you so much for having me. My name is Joel Becker. I work as a researcher or member of technical staff at METR, which stands for model evaluation and threat research. As we'll see in a second, I'm going to be talking about AI capabilities. How do we know how performant AIs are today? How how performant they might be in the near future from these two different sources of evidence that seem to give somewhat conflicting answers. You know, I I could have done this whole talk without reference to meter papers in particular, but we'll look at two papers I've been um involved with as as examples of benchmark style evidence and then more economic style evidence. On the benchmark side, measuring AI ability to complete long tasks. This is the paper um that comes with the the charts that many of you would have seen on on Twitter and so on that meter is well known for. And then the second this um RCT measuring how allowing AI affects developer productivity. And then we'll be talking about how to reconcile uh the the gap that's implied between these two different kinds of measurements.

</details>

### METR的使命与研究方向

正如我所提到的，METR 的全称是模型评估与威胁研究。我们是一个独立的、非营利性的研究机构，致力于向公众、政策制定者和研究机构提供信息，说明 AI 可能对社会构成灾难性风险的程度。模型评估部分意味着我们致力于理解 AI 的能力和倾向。而威胁研究部分则意味着我们试图将这些能力和倾向与潜在的灾难性风险联系起来。

<details>
<summary>Original English</summary>

As I mentioned, META stands for model evaluation and threat research. We are an independent research nonprofit that seeks to inform the the public, policy makers, labs about the degree to which AIs might pose catastrophic risks to society. The model evaluation part uh means that we seek to understand AI capabilities and propensities. And the threat research part means we try to connect those capabilities and propensities to potential catastrophic risks.

</details>

### 传统基准测试的局限性

我们首先要讨论的论文与这张图表有关，我相信很多人可能都见过。在深入研究论文之前，我们先退一步。通常，我们是如何通过基准测试来衡量 AI 能力的？比如 SWE-bench 或 GPQA 等。这些测试会设定一个性能基准，例如 0% 的性能或随机性能。对于 GPQA 来说，25% 的性能相当于最差的表现。也许对于 GPQA，还有一个低于 100% 的人类基线，我认为大约是 75%，这代表了专家级人类的表现。当然，在这些类型的基准测试中，你可能达到 100%。但这意味着什么呢？如果你在 GPQA 上得到 50% 的分数，也就是说，你从最低点到专家基线的一半，这到底意味着 AI 的性能如何？如果我达到了人类基线，这是否意味着 AI 的性能已经与专家级人类相当，甚至更优？这很难解释。你还从这张图表中看到，基准测试似乎在上线后不久，就能给出任何信号，然后很快就会饱和。要创建有足够信号且能在较长时间内提供信息的基准测试，变得越来越难。因此，我们将采用一种不同的方法。

<details>
<summary>Original English</summary>

Okay. The first paper we're going to talk about associated with this chart that that many of you I think might have seen. Um take taking a step back first before we dive into the paper. You know how how usually do we think about measuring AI capabilities using benchmarks on a SWE bench or a GPQA so on and so forth. There's some notion of 0% performance um or or random performance. So for GPQA that's that's 25% which corresponds to this flaw that the worst you can possibly do. Perhaps there's a um human baseline that's below 100% for GPQA. I think this is something like 75% that represents maybe expert human performance. And then of course you can go all the way up to 100% potentially on on these kinds of benchmarks. But but what does it mean? you know, if I'm getting 50% on GPQA, if I'm like half the way from the um from the floor to the to the expert baseline, what you know, what does that really mean about how performant the AIS are? If I meet the human baseline, does that mean that the AIS are now as performant or even more performant than than expert humans in in a relevant sense that I that I care about? It's hard to interpret. You know, another thing that you see from this graph is that um benchmarks seem to have less and less time between coming online sort of giving any signal at all and being fully saturated. It's harder and harder to create benchmarks that have uh plenty of signal that you know might might be informative to us about how capable models are for for an extended period of time. So, we're we're going to go about this a different way.

</details>

### METR的基准测试方法

首先，我们将收集人类基线数据，涵盖各种难度和多样化的任务。你可以将这些人视为经验丰富的专家，但他们刚入职的第一天或第一周。这些人对特定任务没有深入的语境理解。这并非他们之前工作中遇到的确切类型，但如果这是一项软件工程任务，那么他们就是具备相关技能的通用软件工程师。机器学习任务和网络安全任务也是如此。我们这里讨论的任务类型来自这三个类别或任务分布：Hcast，它是一个包含软件类任务的集合，似乎需要自主性，例如与工具交互、与环境交互、思考问题，而不是仅仅进行问答式的的数据集。SWAR 套件，这些是原子化的问题，也许 GPT-2 能够解决，也许不能。问题类似于“这里有四个文件，其中一个叫 passwords.txt，哪个文件包含密码？”。在难度谱的另一端，我们有 Rebench，这是具有挑战性的、新颖的、开放式的机器学习研究工程挑战，即使对顶尖人类专家来说也非常困难。除了收集人类基线数据外，我们还将在尽可能相同的条件下，测量我们感兴趣的 AI 在同一组任务上的表现。然后，我们将把人类完成这些任务所需的时间，转化为对 AI 自主能力的估计，正如我稍后将展示的那样。

<details>
<summary>Original English</summary>

First, we're going to gather human baseline data for diverse tasks spanning a range of difficulties. You should think of these humans as, you know, experienced experts, but on their first day or or or first week on the job. These are not people with context on the tasks in particular. It's not exactly the kind of thing that's come up in their work before, but if it's a software engineering task, you know, there are relevantly skilled general software engineer. Same for the machine learning tasks and the cyber security tasks here that we'll talk about. the the [snorts] type of tasks come from these three um buckets or task distributions. Hcast which is a collection of um softwarebased tasks seemingly requiring autonomy you know interacting with tools um uh interacting with the environments thinking thinking through the problem not not just this kind of Q&A style um style data set um the SWAR suite which are these atomic problems these are problems that you know maybe GBT2 can do maybe maybe it can't problems like um here are four files one of them is called passwords.txt txt which file contains the passwords and then on the other end of difficulty we have rebench which are challenging novel open-ended um machine learning research engineering challenges which are are very difficult even for top human experts

</details>

### AI能力的时间维度分析

这里有一个说明性的图表，以 Claude 3 Sonnet 为例，这是该论文发表时最前沿的模型。你可以看到，对于非常短的任务，大约 4 分钟或更短，Sonnet 几乎 100% 的时间都能正确给出答案，甚至可能就是 100%。对于最困难的任务，它则会遇到困难。在中间的某个范围内，我们大约在 10% 到 90% 之间。我想说，模型在需要人类花费更长时间的任务上表现较差的这种经验模式，并非自然规律，但我们确实在模型上，至少在这个任务分布上，相当普遍且稳健地看到了这一点，我推测在其他任务分布上也是如此。因此，我们尝试将这条深紫色线拟合到这些数据上，这些数据描述了人类完成模型正在尝试的相关任务所需的时间。然后，我们将 x 轴（即横轴，人类完成任务时间轴）上模型预测成功率达到 50% 的点，称为这些模型的“时间视界”（time horizon）。关于 50% 这个数字，还有很多可以讨论的。我稍后可以谈谈我们选择它的原因。然后，我们将对其他模型进行相同的操作。例如，Claude 3 Opus 的时间视界大约是 4 分钟，这是我们预测它在该任务分布上成功概率为 50% 的时间点。对于 GPT-4 Turbo，我看到的是大约 15 分钟，以此类推。当然，所有这些模型，它们都会随着日历时间不断推出。所以，如果我们把时间视界（图上的 x 坐标）与日历时间绘制在一起，我们会发现类似这样的图。它看起来，有点像一个指数趋势，以某个恒定速率上升。事实上，它不仅仅是看起来像指数趋势。如果这里是一条完美的直线，那就表明存在一个完美的指数趋势。我们看到的是一个非常稳定、令人惊讶的稳定趋势，比我们进行这项研究项目时预期的要稳定得多。而且这种情况一直持续。所以，很多人可能在 Twitter 上看到过我们对这张图表的更新。这张图一直延伸到 GPT-5.1 CEX Max，这是非常近期的。这个预测，这个惊人地平直的线条，我认为一直非常准确。

<details>
<summary>Original English</summary>

in addition to gathering the the human baseline data we'll also under as close to identical conditions as possible measure AI performance for the AIs that we're that we're interested in on the same set of tasks and then we're going to convert the time it takes for humans to complete these tasks into an estimate of AI autonomous capabilities as I'll I'll show you in a second. Here's an illustrative diagram in this case for claw 3.7 Sonet which was the the frontier model at the time that this paper came out. You can see that you know for the for the very short tasks something like 4 minutes or below Sonet is getting the answers correct you know essentially 100% of the time or or maybe even here literally 100% of the time. for the very hardest tasks it's struggling and then and then there's some range where we're kind of in the middle you know we're somewhere between 10 and 10 and 90%. I'll say that this empirical pattern where models are less performant at tasks that take humans longer is you know it's not a fact of nature but it's it's something that we see pretty pretty commonly pretty pretty robustly across models at least on this task distribution and I'd conjecture for for other task distributions as well. So we try and fit this dark purple line to to something like this data on on how long it took humans to complete the relevant tasks that the models are uh um are attempting. And then we call the point on the x-axis this horizontal axis this human time to complete axis at which we predict the models will succeed 50% of the time the time horizon of those models that there's much to debate in the 50% number. I can I can talk later about the reasons why we chose that and and then we'll do the same exercise for the other models. So here I have uh claw 3 opus has a time horizon of something like 4 minutes. That's where we're predicting that it has a success probability on this task distribution of 50%. For 01 preview I'm seeing something like 15 minutes so on and so forth. And then of course all these models you know they they come out over um calendar time. So if we plot the time horizon, the x-coordinate on uh on on this set of plots against um against calendar's time, we find something like this. It looks, you know, kind of like um kind of like an exponential trend that's that's going up at some constant rate. In fact, it doesn't just look like an exponential trend. If we had a perfectly straight line here, it would indicate um a perfectly exponential trend. um we we see something really remarkably steady actually much more steady than we were anticipating when we uh went about doing this research project and that's continued to be the case. So many of you will have seen updates that we've made of of this graph on on on Twitter. This is going all the way up to GPT 5.1 CEX max. So extremely recent um the predictions from this you know shockingly straight line have have held up very well I think.

</details>

### 基准测试的局限性再探

快速回顾一下，基准测试告诉我们什么？或者说，这里的基准测试类证据告诉我们什么？首先，AI 可以在对人类来说极其困难的任务上取得成功。我们 EBench 中的任务，对我个人来说，确实超出了我的能力范围，但 AI 在其中有相当不错的表现，成功率不低。其次，正如你所见，进展是迅速的。但另一方面，我们应该在多大程度上相信基准测试提供的证据呢？它们可能有什么局限性？有很多，但我将指出三点。第一，正如我提到的，这些测试中的人类虽然在相关意义上是专家，但他们缺乏语境。就像他们在职的第一周，之前从未见过类似的任务。他们只有一些相关的经验。可以推测，那些不仅拥有相关经验，而且对任务集非常熟悉的人，会更快地完成任务。而我们认为，相对于这些人，AI 的表现更逊色。第二，基准测试可能存在“天花板效应”（low ceiling）。即使是 GPQA，我们再次以它为例，我们正开始遇到这种情况，该基准测试已经完全饱和，无法为后续模型提供额外信息。而时间视界（time horizon）则提供了一种将基准测试在一段时间内串联起来的不错方式。但即便如此，当模型的“时间视界”大约每六到七个月翻一番时，要创建越来越难的任务仍然非常困难。所以，即使是时间视界，或者其基础的基准测试，可能在不久的将来也会饱和。第三点，你可能知道，这并非仅限于 METR 的时间视界任务。对于 SWE-bench 也是如此，对于许多你喜欢的“代理式”（agentic）基准测试也是如此：这些问题在某种意义上并不“混乱”（messy）。它们不需要与人类进行大量的协调。它们通常发生在相对较小、封闭的环境中，在那里不容易出错。而不是像那些庞大的开源代码库，或者问题可能涉及更多与现实世界交互，或者在某种意义上很混乱的其他方式。

<details>
<summary>Original English</summary>

Taking a quick step back, what are benchmarks telling us or or here kind of benchmark like evidence? Well, one thing is that AIs can succeed at what for humans would be exceedingly difficult tasks. The tasks in our ebench are, you know, really far beyond my capabilities uh personally and and you know the AI is having a good crack at them some some decent percentage of the time. And the second's you know kind of obvious is that progress is rapid. >> [snorts] >> On the other hand, um you know, how much how much stock should we put in the um the evidence suggested by benchmarks? Um what limitations might they have? Lots, but here are here are three that I'll note. One is, as I mentioned, these are humans who are, you know, expert in some relevant sense, but they're low context. It's something like their their first week on the job. They haven't seen tasks exactly like this previously. They just have some relevant experience. presumably people who were more sort of you know not not just having the relevant experience but also highly familiar with um uh with the with the set of tasks would perform the tasks even sooner and then we think relative to those people the AIs were more performant. The second is that benchmarks can be low ceiling. Even you know GPQA or use that example again um where we're beginning to get to the point where where that benchmark is um is totally saturated not providing um additional information for marginal models whereas time horizon is providing this nice way to sort of chain benchmarks together in in in some sense over time. Um but you know nonetheless it's still very hard to um uh to create these ever harder tasks when the um when the time horizon of models is doubling every something like six to seven months. So even time horizon might be might be saturated in not too long or the benchmarks underlying time horizon. And the next one is you know not not a concern that's limited to the to the meter task to the task behind time horizon. It's also true for sweet bench. which is also true for for many of your um favorite agentic benchmarks that the problems aren't very messy in some sense. They don't require a ton of coordination with humans. They're often in relatively small contained environments where where not much can go wrong. You know, not these sort of massive open source code bases or or um other ways in which the the problems can involve more interaction with the real world or or or be messy in in some sense.

</details>

### 经济学证据：实地实验设计

因此，我们进行了这项研究。今年早些时候，我们试图思考如何解决这些局限性？有没有不同的证据来源，它可能有自己的优缺点，但重要的是，在科学术语中，它能具有更高的外部效度？也许现场实验（field experiments）就是答案。所以，更偏向经济学的证据。在这里，我们可能对高语境（high context）的开发者感兴趣，他们精通自己正在进行的任务。他们是否能“加速”（speed up）？或者某种意义上的生产力提升？这似乎能提供更多信号，即使是在基准测试中显示“超人类”（superhuman）的范围内。你可能知道，GPQA 可能已经完全饱和，你只能获得 1.5 倍或 2 倍的速度提升，但即使在那之后，你仍然可以实现 3 倍、4 倍、5 倍的速度提升，我们仍然能从中获得更多信号。最后一个特点是，任务更加“混乱”（messier）。这些是人们在实际工作中遇到的任务，它们不是合成的，也不是小而封闭的。这是一个真实的部署场景。对于这篇论文，我们将采取以下做法：我们将招募 16 名经验丰富的开发者，参与大型、成熟的开源项目，我们稍后会介绍。每位开发者平均会完成大约 16 个来自他们实际工作的任务。这些是相关 GitHub 存储库上的 issue（问题）。他们可能原本会完成这些任务，但有一个限制：最长的 issue 我们将不包含在内。任务将被随机分配到“禁止 AI”（AI disallowed）或“允许 AI”（AI allowed）组。禁止 AI 组，顾名思义，就是你想象的那样。这意味着 2019 年的软件开发，没有 AI 驱动的标签自动补全，没有 Cursor 的代理式编码工具，没有通过 Web UI 的 LLM。或者，它们可以被随机分配到允许 AI 组，在这种情况下，一切皆有可能。你提到的任何 AI 工具，或者不使用 AI 工具。如果你在允许 AI 的组别中，你并不被强制使用 AI，你只是有这个选项。我们为这些开发者购买了 Cursor Pro。所以，在大多数情况下，他们使用的是这个工具，当时通常是 GPT-3.6 或 GPT-3.7，这是我们进行这项工作时最前沿的模型。然后，我们将记录开发者完成每个任务所需的时间，并查看在允许 AI 和不允许 AI 的情况下，他们可能节省了多少时间。

<details>
<summary>Original English</summary>

Um so we did this we did this project and then um early this year we were you know we were trying to think about um uh how can we attack some of these limitations? What what's a different source of evidence that um might have its own own pros and cons but you know importantly be more externally valid in in the scientific jargon. Perhaps field experiments are the answer. [snorts] So more economic style evidence. So here we might be interested in very high context developers who are expert on the kind of tasks they're already doing speed up or some notion of productivity boost. You know it seems to have more signal through even some um superhuman according to benchmarks range. You know perhaps GPQA is fully saturated and you're getting a 1.5x 2x speed up something like that but you can still achieve a 3x 4x 5x speed up even even after that we we maintain more signal. And the last is that you know that the tasks are messier. They are tasks that are coming up in people's real work. They're not um synthetic. They're not small and contained. Um this is a real deployment scenario. Here's what we're going to do for this paper. We're going to gather 16 experienced developers on large mature open source projects that we'll go through in a second. Each of these developers will on average complete about 16 tasks from their real work. These are these are issues on the on the relevant GitHub repositories. The kind of thing that they might otherwise have completed with the with the caveat that the very longest issues we're not going to include. The tasks will be randomly assigned to AI disallowed or AI allowed. AI disallowed, you know, it means it means what you think it means. It means software development in 2019. It means no AI powered tab autocomplete. It means no cursor agentic coding tools. It means no LLMs via the web UI. or they can be randomly assigned to AI allowed in which case everything's on the table. You know, any of the AI tools I just mentioned or not using the AI tools. If you're in the AI allowed condition, you're not compelled to use AI. You just have the option. And we buy these developers Cursor Pro. So, um for the for the most part, that's the tool that they're using with typically 3.6 or 3.7s on it at the time, uh which was the Frontier model when we conducted this work. And then we're going to record the time it takes for the developers to complete each task and see the degree to which they might save time when AI is allowed versus when it's not.

</details>

### 参与实验的开发者与项目

这些是我们使用的一些存储库。很多人可能都很熟悉。我们有 Haskell 编译器，有 scikit-learn，有 Hugging Face Transformers。这些项目平均有百万行代码以上，存在了十多年。参与这项研究的开发者，平均而言是这些存储库中数百甚至数千贡献者里的第三大贡献者。他们个人平均为该存储库贡献了大约 5 年的时间。这些都是顶尖专家。

<details>
<summary>Original English</summary>

These are some of the repositories. Many of you will be familiar with them. We've got the Haskell compiler represented. We have scikitlearn. We have hugging face transformers. These are on average a million lines of code plus. They've been around for 10 plus years. The developers who are going to be working on these repositories as part of this study are on average the third top contributor out of hundreds or or even in some cases thousands of contributors to these repositories. They personally have been contributing to the repository for something like 5 years on average. These are top experts.

</details>

### 实验结果：意料之外的效率下降

也许你们中的一些人也见过这张图。所以，结果对你们来说已经不新鲜了。我们询问了经济学专家、机器学习专家——这些人来自主要 AI 公司和实验室、顶尖学者、一些研究生等等——他们预计开发者在使用 AI 时能节省多少时间。他们给出的答案大约是 40% 或略少。我们询问开发者本人，也就是研究参与者，他们预计自己会提前提速多少，他们说大约是 24%-25%。然后，我们询问开发者，在研究完成后，他们认为在本次研究中 AI 被允许使用的情况下，他们过去的工作效率提高了多少，他们说大约是 20%。而结果是，我们发现开发者反而被**减慢了 19%**。与不允许 AI 相比，允许 AI 后他们花费的时间增加了 19%。

<details>
<summary>Original English</summary>

Some of you might have seen this graph too. And and so the punch line's been spoiled for for the rest of you. Um we asked uh economics experts, machine learning experts, you know, these are people at major AI companies and labs, um uh top academics, um some graduate students, so on and so forth, you know, how much they expect developers to save time when they're using AI. They say something like 40% or a little bit less. We ask the developers themselves, the study participants, how much they expect to be sped up ahead of time, and they say something like 24 25%. Then we ask the developers after the study has been completed how much they think they were sped up in the past by AI being allowed on the issues they completed as part of this study and they say that it will have sped them up by something like 20%. And the punch line is that we find that developers are slowed down by 19%. They take 19% more time when AI is allowed relative to when AI is not allowed.

</details>

### 对实验结果的初步反应与分析

当我第一次看到数据进来时，看到这张图的早期版本，我想，很可能我们搞砸了。就像你们现在可能在想的一样，我们肯定哪里出了问题。某种东西肯定出错了，我们的实验设置肯定有问题。怎么会这样呢？你知道，至少这些开发者可以访问零点（zero points），因为他们任何时候都不能使用 AI。所以，我们花费了无数个小时来审视这些开发者在研究中处理 issue 的屏幕录像。我们深入研究了一系列可能解释正在发生的事情的假设，并尝试对我们认为正在发生或未发生的事情进行分类。其中很多内容都列在论文中。我将快速过一遍我们认为导致这种情况的一些因素。首先，对 AI 用途的**过度乐观**。这似乎是一个显而易见的因素。你知道，即使研究结束后，开发者仍然认为 AI 会对他们的工作有帮助。这使得他们有可能基于这种想法而过度使用 AI。其次，更隐蔽的因素是**存储库语境和开发者的高度熟悉度**。你知道，这些开发者在处理这些问题时，已经知道解决方案了。他们不，他们……他们在这个工作中非常专业。我想象他们不会花费大量时间去思考 AI 可以解决的解决方案。相反，他们只是受限于打字速度。这意味着，使用 AI，指示 AI 去做某事，与他们原本可能花费的时间相比，会带来显著的时间成本。我认为我们许多人都有这样的感觉，AI 在大型复杂存储库上的表现可能不如人意，这与基准测试风格的证据或一些先前的工作不同。然后是**AI 的可靠性低**。你知道，AI 可能在这些类型的任务上表现非常出色，但它们可能只有 50% 或 80% 的时间表现出色，20% 的时间则不然。所以，至少，你需要事后检查它们的工作。甚至可能需要花时间纠正它们的工作，这是我们在这些 issue 上经常看到的情况。

<details>
<summary>Original English</summary>

You know, when I first saw the data coming in, saw sort of early versions of this plot, um, I thought presumably the same thing that many of you might be thinking right now, that we've messed something up. Um, that that, you know, something's gone wrong. There's some there's some issue in in how we've set up the experiments. How could it possibly be the case? You know, at least these um, uh, these developers have access to the zero points because they cannot use AI at at any time. Um, so we poured over, you know, many, many, many, many, many hours of screen recordings from these developers working on issues as part of the study. We look to dive into um, a bunch of hypotheses that might explain what's going on and try to categorize, you know, the things that that we think are going on versus not. Um, many of this is is listed in the paper. I I'll just quickly go through some of the things that we think are contributing. First, overoptimism about AI usefulness. that that seems like an obvious one. You know, the developers even after the study is completed, they think that um uh that AI is going to be helpful to their work. It's it makes sense they might overuse AI um on that basis. Um two more implicit repository context and high developer familiarity. You know, these developers are coming to these problems already knowing the solution to the problem. They don't they don't um they're so expert in this work. you know, I I I imagine them as as not trying to spend a bunch of time thinking through the solution that the the AI can can work through. Instead, they're just limited by how fast they can type. Um, which which means that, you know, using AI, instructing AIS to do it, um, comes with some significant time cost versus how they might otherwise have spent their time. I think many of us have the sense that AIS might be less performant on on large and complex repositories, which is a different from this difference from this benchmark style evidence or or from or from some previous work. And then low AI reliability. You know, um maybe the AIs are very performant on these kinds of tasks, but you know, they're only performant um 50% of the time or 80% of the time, 20% of the time. And so, at the very least, you need to check their work afterwards. And perhaps even you need to spend time correcting their work afterwards, which is which is something we see quite a lot on these issues.

</details>

### 实验的局限性与未来展望

从影响尚不明确的因素中，我简要提一下，我稍后需要与人讨论的一个问题是：AI 工具的**平均使用率偏低**，这在公开讨论中被提及。这之所以被归入不确定类别，是因为它既有支持也有反对的证据。对于这里的许多情况，我们都没有如此确凿的结论，我们仍在继续这项工作。这里有一些非常重要的注意事项。首先，我们显然没有为所有软件开发者或任务提供证据。这些是极其经验丰富的开发者，在极其复杂、长生命周期的开源存储库上工作。以我个人的工作为例，我并不像这些开发者那样是相关领域的专家。我处理的是小得多的存储库。我更倾向于认为，即使在那个时候，AI 工具也加速了我的工作，即使那些开发者没有被加速。这个环境很奇怪，它之所以奇怪，正是因为它有趣，因为它涉及这个不同寻常的开发者群体。其次，实验集中在 2025 年 3 月。正如我所说，我们知道 AI 的进步是迅速的。也许在我做这次演讲时，这个结果已经发生了变化。所以，这里有一个谜题：基准测试风格的证据显示了 AI 能力的惊人进展，而更偏向经济学的证据——我将劳动市场影响和我们的现场实验都包括在内——则显得更为悲观或不那么令人印象深刻。为什么前者没有转化为后者？至少表面上看，似乎存在冲突。我们该如何解决这个谜题？

<details>
<summary>Original English</summary>

One thing from the factors with an unclear effect that I that I'll mention briefly I have to talk to people about later is below average use of AI tools which came up in the public discussion. This this is in the unclear column because it's sort of evidence evidence for and against. Um that that's true for for many of the things here. We don't have anything so conclusive to say we're still working on on this line of work. Here are some here are some caveats. All important. Um first you know obviously we do not provide evidence for all software developers or tasks. These are extremely experienced developers working on extremely complex longived open source repositories. I in my own work you know not um as expert in the relevant sense as as these people are. I'm working on much smaller repositories. Um I I feel more comfortable saying that even at this time I was sped up by AI tools even if even if the developers weren't. This setting is weird. It's weird for the same reasons that it's that it's interesting this this unusual developer population. Second, the experiment is concentrated in March 2025. As I mentioned, uh we know that AI progress is rapid. Um perhaps this this result will have already changed by the by the time I'm giving you this talk. So there's a kind of puzzle suggested right that the benchmark style evidence is giving um a very impressive sense of what benchmark of what AI capabilities look like today whereas the more economic style you know I include labor market impacts um uh uh working here too in addition to our in addition to our field experiments look somewhat more bearish or or unimpressive. You know why why is the former not not translating to the latter at least naively there seems to be a clash. How might we go about resolving this puzzle?

</details>

### 解决AI能力衡量差异的可能解释

一种可能性是我们确实搞砸了。这仍然是开放的，并且正在讨论中。也许开发者真的不擅长使用 AI，如果我们继续进行这项实验——事实上我们正在进行——他们会学到更多关于工具的知识，从而获得他们当时未获得的生产力收益。我对这个说法有点怀疑，但这是一种可能性。另一种经济学家喜欢提出的观点是，我们没有激励开发者快速完成任务。我们按小时支付他们报酬，这是出于外部有效性的考虑。查看他们的视频，我真的不认为他们会根据这些激励措施以不同的方式开发，但这当然是一种可能性。还有一种更偏统计学的可能性是，这是一个小型研究，你不应该过度依赖小型研究的结论。我们正在进行更大的项目，我很高兴能在某个时候发布。好的，但让我们假设我们没有搞砸，并且这是一个我们认为站得住脚的结果。我们该如何解决这个谜题？一种可能性是，**可靠性需要非常高才能节省时间**。你需要让开发者输入的问题得到大约 95%-99% 的正确答案，这样他们才能快速完成工作，而不是花费大量时间验证 AI 的工作，这当然在时间成本上相当高昂。另一种可能性是，**基准测试式的或算法式的“边际成本效益评分”（algorithmic costless scoring at the margin）与“可合并性”（mergeability-like scoring）评分不同**。SWE-bench 的评分并不试图考虑代码是否易于他人未来维护，或者它是否符合单元测试未考虑的质量标准。也许 AI 在 SWE-bench 式评分方面确实表现出色，但并非在那种我们可能更关心的、更全面的评分方面。**低语境与高语境基线测试者**。我之前提到过，这些只是技能更强的**人类**。相对于这些人，AI 的能力可能较弱。**任务分布**，也许这些只是不同类型的任务，特别是比基准测试风格的任务“混乱”程度更低。也许这解释了这里发生的情况。**次优的能力提取**。METR 在让代理（agents）在给定底层模型的情况下，尽可能地表现出色方面付出了巨大的努力。这涉及到消耗大量的 AI token。也许在研究完成时，对于 Cursor 来说，情况并非如此。最后是**任务间的相互依赖性**。也许人类可以完成任务 A 和任务 B，而 AI 只能完成任务 A 而不能完成任务 B，当然，它能更快地完成任务 A。那么，人类仍然需要完成任务 A 和任务 B，而不是委托任务 A，因为他们需要知道输出，需要知道任务 A 是如何完成的，才能可靠地完成任务 B。我认为这就是部分原因。你在处理这些子任务时需要保持语境。

<details>
<summary>Original English</summary>

So one possibility is that in fact we we messed something up. This is this is still live and on the table. Uh you know maybe the developers really are um uh not very capable at using AI and if we continue to run this experiment as as in fact we are they'll you know learn more familiarity with the tools and and so get productivity benefits that they they weren't getting at the time. I'm a little skeptical of that story but but but that's one possibility. Another that economists like to bring up is that we're not incentivizing these developers to finish quickly. we're paying them per the hour, um, which we do for external validity reasons. Um, you know, looking through their videos, I I really, uh, do not think that they're developing differently in accordance with these incentives, but but that certainly is one possibility that's on the table. You know, another um, more statistical in nature possibility is, you know, this is a small study. You shouldn't you shouldn't over update so much from small studies. We we are doing um, bigger things that I'm excited to release at some point. Okay, but let's let's assume we haven't messed something up and this is uh this this is a result um uh that that we think that we think does hold up. How could we resolve the puzzle? [snorts and sighs] So, one possibility, you know, as I as I alluded to briefly is that reliability needs to be very high to save time. That you need to be getting um the the answers these problems that developers are putting in correct. you know, something like 95 99% of the time in order for developers to tab tab tab through and you know, not not um not spend lots of time verifying the AI's work, which which of course um is pretty costly from a time perspective. Another possibility is bbenchlike or algorithmic costless scoring at the margin versus mergeability like scoring. Sweet scores are not trying to account for you know whether the code is spilled honable by by other people in future or whether it's matching quality considerations that aren't um considered by the unit tests. You know perhaps AIS really are performance according to SWEBenchl like scoring but not performance according to this kind of more holistic um uh holistic scoring that we might care about low versus high context baseliners. I I I mentioned I mentioned previously these are just much more skilled humans, you know, relative to those humans. Perhaps the AIs are less capable. Task distribution, maybe these are just different kinds of tasks, you know, in particular less less messy than the than the benchmark style task. Maybe that's explaining what's going on here. [snorts] Suboptimal capability elicitation. A huge amount of work has gone in at meter to making the agents as performant as possible given the underlying models on on our kinds of tasks. And um you know that involves churning through a load of AI tokens. Perhaps that's that's less the case for cursor in particular at the time when we completed the study. And then interdependence across tasks. Maybe it's the case that um you know if humans can complete task A and task B. AIS can only complete task A but not task B and of course can do task A faster. then it still makes sense to for humans to do task A and task B, not delegate task A because you know they they need to know the outputs. They need to know how how task A was completed in order to reliably complete task B. I think that's that's part of what's going on. You need to maintain context as you're working through these subtasks.

</details>

### 招聘信息与总结

最后，我想说我们正在招聘，不仅是为了从事你所看到的这种工作，即任务越来越长、更具雄心的随机对照试验（RCT），以及更多可以用来推断 AI 能力真相的证据来源，而且还为其他许多方面招聘。你可以在 meter.org/careers 找到相关信息。特别是，我对研究工程师和研究科学家很感兴趣，他们可能就在今天的听众中。我们不仅对拥有学术经验的研究型人才感兴趣，也非常欢迎有创业精神的人才。我们还在招聘一位运营总监。好了，非常感谢大家的聆听。

<details>
<summary>Original English</summary>

Um lastly I will say that we are hiring not just for this kind of work that you've um that you've seen being extended you know ever longer tasks ever more ambitious um RCTs um even more sources of evidence from which we can triangulate the truth about AI capabilities but also for for much more besides you can you can find this at meter.org/careers org/careers. In particular, I'm excited about research engineers, research scientists who might be um hiding in the current audience. We're excited not just, you know, for for research types with academic experience, but very much for scrappy startup people as well. And we're also hiring for a director of operations. And with that, thank you very much for listening. Heat

</details>