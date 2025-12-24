---
area: tech-insights
category: technology
companies_orgs:
- Haize Labs
- Air Canada
- Character AI
- Chevy
- Deepseek
- Frontier Labs
date: '2025-08-22'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Leonard Tang
products_models:
- ChatGPT
- Llama 3
- Cloud3 Opus
- GPT-4o mini
- GPT-4
- GPT-3.5 Sonnets
- J1 micro
- 01 mini
- 03 mini
- Verdict
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=OMGPvW8TBHc
speaker: AI Engineer
status: evergreen
summary: 本文深入探讨了生成式AI（GenAI）时代大型语言模型（LLM）面临的“最后一公里问题”——即如何验证、核实、审计和可靠地部署这些主观且非结构化的系统。Haize
  Labs的Leonard Tang介绍了其核心解决方案：模糊测试（hazing），通过大规模优化、模拟和搜索，在部署前发现AI应用的脆性和意外行为。文章还详细阐述了传统评估方法的不足，以及如何通过代理（Agent）作为评判者和强化学习（RL）微调等创新方法，实现对AI系统输出的有效评判和输入生成，以构建真正稳健的企业级AI应用。
tags:
- fuzz-testing
- judge-qa
- llm
- technology
title: 生成式AI时代的模糊测试：确保LLM可靠性的关键
---

### 引言：AI可靠性与“磨练式测试”

感谢艾莉出色的介绍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks Ally for the great intro.</p>
</details>

事实上，我们正在解决我认为是AI领域现存的问题，即如何验证、核实、审计和引导像**LLM**（Large Language Model: 大型语言模型）的“垃圾输出”（LLM slop）这样主观且非结构化的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh indeed we're working on what I believe to be the exant problem in AI which is to say how do you validate verify audit steer something that is as subjective and unstructured as literal LLM slop.</p>
</details>

所以今天我们将深入探讨这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today we're going to be talking a lot about this.</p>
</details>

我应该指出，表面上我们属于AI安全领域，但从某种意义上说，我更倾向于将我们视为一家**质量保证**（Quality Assurance: 简称QA）公司和**评估**（Evaluation: 简称Eval）公司，尽管我们在技术上解决问题的方式有很多相似之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I should point out that ostensively we're part of the AI security track although I would really consider us more of a QA company and eval company in some sense although there's a lot of shared similarities in how we approach the problem technically</p>
</details>

我们本质上是一家**基于属性测试**（Property-Based Testing）公司，或者说**模糊测试**（Fuzz Testing: 一种软件测试技术，通过向程序提供非预期、随机或无效的输入来发现软件漏洞）公司，或者用我喜欢的方式称呼，一家“磨练式测试”（hazing）公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right we are essentially a property based testing company or fuss testing company or as I like to call it a hazing company.</p>
</details>

### AI的“最后一公里问题”

好的。为了稍微介绍一下背景，我们为什么创立Haize Labs？“haze”对我们意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So just to set the context a little bit uh why do we start haze? What does haze mean?</p>
</details>

对我们而言，“haze”最终意味着：我们知道AI系统极其不可靠，在实践中难以信任，因此在将其投入实际应用之前，你需要对其进行**压力测试**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">haze to us is ultimately, all right, we know that AI systems are extremely unreliable. They're hard to trust in practice, and you sort of need to pressure test them before you put them out into the wild.</p>
</details>

我们的解决方案基本上是在部署前进行大规模优化、模拟和搜索，并通过一系列测试来确定您的系统是否会按预期运行，然后再将其投入生产环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our solution to doing this is basically, let's just run large scale optimization and simulation and search before deployment and try and figure out through a battery of tests whether or not your system will behave as expected before it actually goes into production.</p>
</details>

我相信过去尝试构建**LLM**（Large Language Model: 大型语言模型）应用程序的各位，都对我在谈论AI中的“**最后一公里问题**”时所指的含义有着深刻的体会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm sure any of you guys who have tried to build LLM apps in the past have understood extremely viscerally uh what I mean when I say the last mile problem in AI, right?</p>
</details>

到了2025年，要做出一个**演示就绪**（demo ready）或**概念验证就绪**（PC ready）的产品极其容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's at this point in 2025 extremely easy to get something that is demo ready uh or PC ready.</p>
</details>

你可以在一个周末内快速开发出一个很酷的产品，给你的产品经理留下深刻印象，但要让同样的产品投入生产，并达到真正稳健、**企业级**（enterprise-grade）和可靠的程度，却非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like you can whip together a cool product over the weekend and impress your PM and whatnot, but uh it's really hard to get that same product into production at a point where it's truly robust and enterprisegrade and reliable.</p>
</details>

你们也知道，这种情况已经持续了两年多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know this has been the case for the past two plus years at this point</p>
</details>

自**ChatGPT**推出以来，我们被承诺了自主性、能动性、全面的**生成式AI**（Generative AI: 简称GenAI）以及企业转型的魅力，但两年多过去了，我们仍未完全实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right like we've been promised uh the allure of autonomy and agency and full gen AI and enterprise transformation for two plus years since chat GPT launched and we're still not quite there right</p>
</details>

我认为这最终是因为我们尚未解决围绕信任、可靠性和风险的“最后一公里问题”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I think it ultimately it's because we haven't solved this last mile problem around trust and reliability and risk</p>
</details>

### 标准评估方法的不足与AI的“脆性”

我认为我们未能解决这个问题的一个重要原因在于，人们在评估和衡量AI系统时，仍然采用一种非常直接和天真的方式，这最容易通过以下方式解释：我相信每个人都见过这种做法——由人类领域专家收集有限的、静态的**黄金数据集**（golden data set），包含输入和预期的**真值输出**（ground truth outputs），然后将这些输入通过应用程序运行，获得实际输出，再将其与真值黄金答案进行某种比较。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I think part of the big reasons we haven't solved this is because people still think about eval measuring your AI system in a very straightforward and naive sense which is easiest to explain uh as follows right I'm sure everybody has seen this idea of going out uh being a human subject matter expert collecting a finite static golden data set of inputs and then expected outputs ground truth outputs uh from the uh human and then basically running the inputs through a application getting the the actual output and then comparing it somehow with the the ground truth golden answers</p>
</details>

自深度学习诞生以来，评估一直都是这样进行的，但它在生成式AI时代却行不通。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right this is how eval has been done forever uh since the birth of deep learning uh and prior but it doesn't quite hold up in the genai era</p>
</details>

这尤其因为生成式AI系统具有我称之为“**脆性**”（brittleness）的特性，或者更专业地说，是**利普希茨不连续性**（Lipschitz Discontinuity: 数学概念，指函数在输入微小变化时输出可能发生剧烈变化）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">specifically because of this property of geni systems which is what I like to call brittleleness or more technically lip shits discontinuity</p>
</details>

我的意思是，人们常说AI敏感、AI脆弱、AI**非确定性**（non-deterministic），这些都是事实，但这并不是让AI难以处理的主要问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and what I mean by this is you know people say AI is sensitive AI is brittle AI is non-deterministic which is true this is all true but that's really not the main problem that makes AI so hard to deal with</p>
</details>

如果你将温度（temperature）设置为零，非确定性通常不是大问题；尽管所有LLM提供商都有缓存和奇怪的系统怪癖，使其即使在大规模运行时也有些非确定性，但大多数情况下，在构建AI应用时，非确定性并不会给你带来太多困扰。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right nondeterminism is really fine if you set the temperature to zero yes there's like caching and weird systems uh quirks and all the LM providers that make it somewhat non-deterministic even at scale.</p>
</details>

你大部分时间会将输出限制在温度为零，并通过工作流运行，这通常是相当确定性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for the most part, nondeterminism really doesn't bite you too much when you're building a apps, right? You for the most part are constrain your outputs to temperature zero. You're running things through a workflow. It's fairly deterministic.</p>
</details>

然而，在构建AI应用时真正困扰你的是，当你向AI应用程序发送两个表面上相似的输入，它们可能在语法、语义或文本外观上只有细微差异，但突然间，你会得到截然不同的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What does bite you a lot when you're building AI apps though is when you send two ostensibly similar inputs to your AI application with maybe slight variance uh in the syntax or the semantics or the appearance of the text but all of a sudden you get wildly different outputs on the other side.</p>
</details>

这就是我所说的生成式AI应用极其脆弱的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? This is what I mean when I say gen apps are incredibly brittle.</p>
</details>

我认为这才是让AI构建变得如此困难的核心特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think this is the actual core property that makes building with AI uh with geni so difficult.</p>
</details>

### AI脆性的实际案例

当然，这种脆性以各种有趣的方式表现出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And of course, we see this brittleless manifest itself in all sorts of fun ways.</p>
</details>

我相信我们不必过多赘述这一点，但从**加拿大航空**（Air Canada）的客户支持系统产生**幻觉**（Hallucination: 指AI模型生成虚假、不准确或无意义的信息），到**Character AI**告诉青少年自杀，再到在**雪佛兰**（Chevy）的客户门户网站上以1美元购买皮卡车，这些例子不胜枚举。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm sure we don't have to blabber this point too much, but you've got everything from uh Air Canada customer supports hallucinating to, you know, uh character AI telling teenagers to commit suicide to um buying a pickup truck for $1 on the Chevy uh patient or customer portal, right?</p>
</details>

我认为我们不需要再举更多例子了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I don't think we need to go through more examples of this.</p>
</details>

这种情况几乎每周都会发生，并且不断有新的例子涌现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This happens more or less every single week. There's more and more examples popping out.</p>
</details>

这再次说明，生成式AI对输入空间的微小变化极其敏感和脆弱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and again this all comes back to geni being extremely sensitive and brittle to prohibition in the input space.</p>
</details>

### 标准评估的两个主要不足

好的。因此，标准评估当然无法覆盖这种脆性特性，我认为它在两个主要方面是不足的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So standard evals of course doesn't cover uh this brittleleness property and I would say it's insufficient in two senses two primary senses.</p>
</details>

首先是**覆盖率**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is coverage right?</p>
</details>

使用静态数据集，你只能知道你的AI系统在该数据集上的表现如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh with a static data set you only know how good your AI system will be with respect to that data set.</p>
</details>

你的AI系统可能在所有单元测试和黄金数据集点上都表现出100%的准确率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? It might look like your AI system is 100% on all your unit tests on all your golden data set points.</p>
</details>

但是，如果你稍微探索一下，寻找更多能更密集覆盖输入空间的输入，你很可能会发现一些扰动，它们会揭示你的AI应用程序在实际运行中表现出截然不同的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you just push around the corner and look around the corner for more inputs that cover your space more densely, it is entirely possible that you get prohibations that tell a very very different story about how your AI application actually does in the wild.</p>
</details>

所以第一点是，标准评估的覆盖率不足。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So point number one, standard eval don't have sufficient coverage.</p>
</details>

第二点是，要为应用程序的输出和真值输出之间找到一个好的质量衡量标准，甚至是相似性衡量标准，实际上非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Second point too is it's actually really difficult to come up with a good measure of quality uh or even similarity uh between the outputs of your application and your ground truth outputs.</p>
</details>

我们真正想要的，几乎是一位能够持续监督你的AI应用程序的人类领域专家，这位专家拥有正确的判断力和敏感性，并且能够将这种敏感性转化为某种定量指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Really what we would want almost is a human subject matter expert who is constantly overseeing your AI application and a subject matter expert who has all the right taste and sensitivity but is able to translate that sensitivity into some quantitative metric.</p>
</details>

这绝不是一项简单的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This by no means is a trivial task, right?</p>
</details>

我认为这是过去五六年甚至更长时间里，我们在AI领域围绕**奖励建模**（reward modeling）一直试图面对的核心挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is the core challenge that we've been trying to face in the field of AI around reward modeling for the past five, six, seven plus years, right?</p>
</details>

关键挑战在于，如何让非技术领域的领域专家将其敏感性标准转化为定量衡量指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and the key challenge is how do you get that sensitivity from the subject matter expert from a nontechnical domain to be able to translate their criteria into quantitative measures.</p>
</details>

今天的标准评估方法根本无法解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is not even close to something that's being solved with standard evals today.</p>
</details>

人们正在使用诸如精确匹配、分类器、**大语言模型作为评判者**（LM as a judge）、语义相似度等方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People are using things like exact match, um classifiers, LM as a judge, semantic solinity.</p>
</details>

所有这些方法都有其自身的怪癖和不足，我们稍后会看到它们是如何演变的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All these things have their own sets of uh quirks and undesira and we'll see how this this pans out in a second.</p>
</details>

### “磨练式测试”：AI时代的模糊测试

简而言之，我们解决这个评估问题的方式主要是通过“磨练式测试”（hazing），也就是AI时代的**模糊测试**（fuzz testing）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Long story short of how uh we think about tackling this eval problem is essentially through hazing right fuss testing in the AI era.</p>
</details>

从抽象层面看，“磨练式测试”的构成非常简单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Essentially what hazing comprises is very simple in the abstract.</p>
</details>

我们模拟大规模的刺激输入发送给你的AI应用程序，然后接收这些刺激产生的响应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We just simulate uh large scale uh stimuli to send to your AI application. We get the responses as a result of the stimuli.</p>
</details>

我们对AI应用程序的输出进行评判、分析和打分，并将其作为指导下一轮搜索的信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We judge and analyze and score the outputs of your AI application. And we use that as a signal to help guide the next round of search, right?</p>
</details>

我们本质上就是迭代地执行这个过程，直到发现一些会破坏你AI应用程序的错误和边缘情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we essentially just do this iteratively until we discover some bugs and corner cases that break your AI application.</p>
</details>

如果我们没有发现任何问题并且用尽了搜索预算，那就意味着你的产品基本上可以投入生产了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh if we don't discover anything and we exhaust our search budget, that that means you're essentially ready for production, right?</p>
</details>

这就是“磨练式测试”的概括。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is hazing in a nutshell.</p>
</details>

但这说起来容易，实践起来却非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But easy to easy to describe, actually really difficult to execute in practice.</p>
</details>

在技术上，无论是对输出进行评分，还是生成输入刺激，这两个方面都相当困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um both sides of the equation in terms of scoring the output and also generating the input stimuli are quite difficult technically.</p>
</details>

我将首先谈谈我们如何考虑对输出进行评分，这再次涉及将主观标准转化为定量指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'll first talk about how do we think about scoring the output again translating from subjective criteria into quantitative metrics.</p>
</details>

我们更广义地称之为“评判”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we call this judging more broadly.</p>
</details>

### 评判AI输出的挑战：大语言模型作为评判者的局限性

你们可能熟悉使用**大语言模型作为评判者**（LM as a judge）的方法，即让一个LLM查看你的AI应用程序的输出，并根据你提供给评判者的提示或**评分标准**（rubric）来判断：“这是一个好的响应还是一个坏的响应？请在1到5或1到10的范围内给我打分。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Probably you guys are familiar with uh something like using LM as a judge to essentially have an LM look at the output of your AI application and decide you know based on some prompt or rubric that you give to your judge you know is this a good response or is this a bad response tell me on a scale from 1 to five or 1 to 10 or what have you</p>
</details>

这做起来非常简单，但它有大量的不同失败模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right very simple to do but it has its uh whole large array of different failure modes</p>
</details>

特别是，作为评判者的LLM本身容易产生**幻觉**，它显然是一个LLM，因此容易出现幻觉情况，并且不稳定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in particular LM as a judge itself is prone to hallucinations it's it is obviously an LLM so it's prone to hallucination conditions it is uh unstable.</p>
</details>

你可能对评判标准有非常好的阐述，但它实际上无法很好地转化为模型操作，因此它在输出上是**未校准**（uncalibrated）的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you could have actually really good articulation of the criteria but it doesn't actually operationalize well into a model right so it's um uh unccalibrated in the output</p>
</details>

例如，LLM眼中的“1分”与人类眼中的“1分”大相径庭，人类眼中的“5分”与LLM眼中的“5分”也截然不同，所以它是未校准的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right like a what is what is a one to an LLM that's very different to what is a one to a human right what is a five to a human is very different to what a what is a five to an LM so it's unccalibrated</p>
</details>

它还存在各种偏见：如果你以任何奇怪的方式改变输入位置，例如你先呈现一个响应，再呈现第二个响应，如果你颠倒顺序，结果往往会改变；如果你提供上下文或改变评分标准的某些部分，也会改变作为评判者的LLM的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh it has all sorts of biases right if you change the inputs uh in any weird position right let's say you present uh one response first and the second response if you flip the order that changes the results often time uh if provide context or you change some part some some part of your rubric that changes the result of the LM as a judge too.</p>
</details>

因此，它极其偏颇、极其反复无常。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So extremely biased extremely fickle</p>
</details>

总而言之，将LLM本身作为现成的评判者，通常无法解决你的可靠性问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and TLDDR LM as a judge itself uh as an off the call call offtheshelf call to an LM is oftentimes not going to solve your uh reliability issues.</p>
</details>

所以，我心中的关键问题是，你如何对评判者本身进行**质量保证**（QA）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the key question in my mind is how do you actually QA the judge itself, right?</p>
</details>

你如何达到一个境界，能够评判这个评判者，并说这是我能用来迭代我的底层AI应用程序的最佳黄金标准指标？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you get to a point where you can judge the judge and say that this is the best gold standard metric that I can use to then actually iterate uh my underlying AI application against.</p>
</details>

那么，你如何评判这个评判者呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do you judge this judge?</p>
</details>

### 扩展评判计算时间：代理作为评判者

过去几个月，我们一直秉持的广阔理念，本质上是将**推理时计算扩展**（inference time scaling），或者更广泛地说是**计算时计算扩展**（compute time scaling），推向评判阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The broad philosophy that uh we've been taking over the past few months is essentially pushing the idea of inference time scaling or more broadly compute time scaling to the judging stage.</p>
</details>

我们称之为“扩展评判计算时间”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we call this scaling judge time compute.</p>
</details>

这种理念有两个极端。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's two ends of the spectrum of this philosophy.</p>
</details>

一个极端基本上是从零开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One end of the spectrum is basically just rip from scratch.</p>
</details>

没有**归纳偏置**（inductive biases）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No inductive biases.</p>
</details>

训练出在评估任务上表现非常出色的推理模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Train reasoning models that get really really good at this evaluation task.</p>
</details>

另一个极端是非常结构化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then the other end of the spectrum is be very structured.</p>
</details>

也就是说，不训练任何模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you know don't train any models.</p>
</details>

只使用现成的LLM，它们具有非常强的归纳先验，但基本上是构建**代理**（Agent）作为评判者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just use the offtheshelf LMS have really strong inductive prior but basically build agents as judges.</p>
</details>

对吧？这是一种方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So this is one approach.</p>
</details>

基本上，我们将构建代理框架、管道和工作流来执行评判任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, we'll build agent frameworks, pipelines, workflows to do the judging task.</p>
</details>

我们有一个名为**Verdict**的优秀小库，它能做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we have this nice little library called uh verdict uh that does this.</p>
</details>

我知道这个名字非常直白。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Very on the nose name, I know.</p>
</details>

但Verdict的核心思想是，它借鉴了**可扩展监督**（Scalable Oversight: AI安全领域的一个子领域，旨在通过弱模型监督强模型）社区的许多优秀直觉，该社区是AI安全的一个子领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but the idea of verdict is essentially there's a lot of great intuition from the scalable oversight community, which is subfield of AI safety.</p>
</details>

可扩展监督的目标基本上是如何利用较小的语言模型来审计、纠正和引导更强大的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Goal of scalable oversight is basically how do you take smaller language models and have them audit uh and correct and steer stronger models.</p>
</details>

最初这是一个AI安全概念，因为人们担心在超人类AI时代，如何让较弱的模型（即人类）控制更强的模型，这个领域就是这样开始的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Originally this is an AI safety concept because people were worried about you know in the age of superhuman AI how do you have weaker models i.e humans control the stronger models, right? And that's how the field got started.</p>
</details>

但由于可扩展监督的发展，围绕用于探测、推理和批判更强模型行为的架构、**基元**（primitives）和单元，产生了许多优秀的直觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as a result of scalable oversight, there's been a lot of great intuition around the architectures and primitives uh and units that you would use to probe and reason and uh critique what a stronger model is doing.</p>
</details>

因此，我们将许多这些基元和架构融入了Verdict库中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we baked a lot of those primitives uh and architectures into this vertic library.</p>
</details>

一个例子是让LLM之间进行辩论，让较弱的LLM相互辩论更强模型所说的话是否合理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One example is having LMS debate each other, having the weaker LLMs debate each other about what the stronger model is saying and seeing if that makes sense.</p>
</details>

另一个例子是让LLM中较弱的LLM**自我验证**（self-verify）其自身响应的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh another example is having the LLM's weaker LMS self-verify the results of their own responses.</p>
</details>

对吧？所以，你可以让一个LLM说：“好的，这个更强模型的响应是好是坏。它因为这个原因而不好。”然后，也许再让一个LLM批判它自己的推理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So you know have an LM say okay this response of the stronger model is good or bad. It is bad for this reason and then maybe having an LM critique its own reasoning right.</p>
</details>

所以，自我验证是另一个很棒的基元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So SE verification is another great primitive.</p>
</details>

当然，**集成**（ensembling）在这种情况下也是另一个经典的基元，诸如此类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um ensembling of course another another uh classic primitive in this case and so on and so forth.</p>
</details>

### Verdict系统：高效且低延迟的评判系统

总而言之，通过以这种特定方式——即构建**代理作为评判者**——来扩展评判计算时间，实际上可以让你开发出极其强大的评判系统，这些系统不仅成本低廉，而且**低延迟**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">TLDDR scaling judge time compute in this particular way uh through building agents as judges actually allows you to come up with extremely powerful judging systems that are also quite cheap and also uh low latency.</p>
</details>

这里展示了一张图表，比较了Verdict系统的价格、延迟、成本和准确性，以及一些前沿模型，特别是**Frontier Labs**的推理模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's a plot of price uh and latency and cost uh and and accuracy uh of verdict systems visav uh some of the frontier models uh Frontier Labs reasoning models.</p>
</details>

你可以看到，Verdict在专家QA验证任务上击败了**01 mini**和**03 mini**，当然还有**GPT-4**和**GPT-3.5 Sonnets**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see that verdict is beating uh 01 and 03 mini and of course GP4 and 3.5 sonnets um on the task of expert QA verification.</p>
</details>

这指的是专家领域中主观标准的评分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is uh subjective criteria grading in expert domains.</p>
</details>

关键在于，这里的Verdict系统是由**GPT-4o mini**作为核心支持的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um critically verdict here is powered by a GP40 mini backbone.</p>
</details>

我们基本上积极地堆叠了GPT-4o mini的GPU，并采用了在这种情况下类似于自我验证的辩论集成架构，我们能够以不到三分之一的成本和不到三分之一的延迟击败01 mini。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So we basically have stacked GPU GP40 mini aggressively and what is in this case like a self-verified debate ensemble uh architecture and we're able to beat 01 for a fraction of the cost like less than a third of the cost right and also uh like less than a third of the latency</p>
</details>

这完全是因为我们以非常谨慎和智能的方式选择了先验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this is all because of we have of the fact that we've chosen the priors in a pretty careful and uh intelligent way.</p>
</details>

所以，扩展评判计算时间的一种方式就是构建代理来执行这项任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's one way to scale just time compute is basically building agents uh to do the task.</p>
</details>

### 扩展评判计算时间：强化学习微调评判者

另一种方法，在我看来更有趣，基本上就是从零开始进行**强化学习**（Reinforcement Learning: 简称RL），训练模型来执行评判任务，这也是我们过去几个月一直非常兴奋的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Other way to do it and this is a lot more fun in my opinion is basically yeah just rip RL from scratch train models to do the judging task and this is something that we've also been pretty excited about over the past few months.</p>
</details>

再次强调，标准LLM评判者存在一系列问题，但RL解决了其中两个特定问题：一是缺乏连贯的理由来解释为什么LLM评判者认为某项内容是五分满分，或者认为是好是坏；二是标准评判元素无法为任何特殊任务和数据提供真正细致、量身定制的独特标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um again uh for standard LM judges whole host of issues but two particular issues that are solved by RL is one uh there's a lack of coherent ration that explain why an LM judge thinks something is a five out of five or thinks something is good or bad and also standard elements of judge doesn't provide real uh fine grained tailored unique criteria to whatever idiosyncratic task and data you're looking at.</p>
</details>

但这两个问题都可以通过**强化学习微调**（RL tuning），特别是**GRPO微调**（GRPO tuning: Generalized Policy Optimization，一种强化学习算法）来解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but both of these can be solved by uh RL tuning or specifically GRPO tuning.</p>
</details>

最近**Deepseek**发布了一篇具有这种普遍特点的论文，名为**SPCT**（Self-Principled Critique Tuning: 自主原则批判微调）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh one paper recently that uh has come out in this general flavor is from deepseek. This is SPCT self-principled critique tuning.</p>
</details>

这里的核心思想是，能否让一个LLM首先提出针对特定数据集或数据点的测试标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea here is essentially can you get uh an LM to first propose some data set or sorry data point specific criteria about what to test for.</p>
</details>

这就像为你要查看的特定数据点设计**单元测试**，然后让LLM根据每个标准来批判这些数据点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's almost like coming up with unit tests for the specific data point you're looking at and having the LM essentially look at each of those criteria and critique the the data points on against each of those criteria.</p>
</details>

对吧？所以它就像是实例特定的评分标准，然后是实例特定的评分标准批判。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? So it's like instance specific rubric and then instance specific rubric critiques.</p>
</details>

这是一种训练RL模型的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um this is one way to train RL models.</p>
</details>

我们使用这种技术的一个变体，进行了一个相当简单的实验，通过GRPO训练了6亿参数和17亿参数的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We ran a pretty simple experiment using this uh using a variant of this uh technique um to GRPO train 600 million parameter and 1.7 billion parameter models and TLDDR.</p>
</details>

结果是，在**奖励基准任务**（reward bench task）上，我们达到了具有竞争力的性能，与**Cloud3 Opus**（80%）、**GPT-4 mini**（80%）、L 370B（77%）以及**J1 micro**（这个17亿参数的奖励模型）在Words Bench任务上80.7%的准确率相当。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">gets us to you know competitive performance on the reward bench task with cloud3 opus which is at 80% uh GP4 mini which is at 80% L 370B at 77% and J1 micro which is this 1.7 billion parameter reward model at 80.7% uh accuracy on the words bench task</p>
</details>

这完全归功于评判时间扩展，也完全归功于我们通过GRPO为我们关注的特定任务提出了更好的评分标准建议和批判。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right and this is all because of judge time scaling this is all because we did gpo to come up with uh better rubric proposals and better critiques on the specific task that we're looking at</p>
</details>

因此，本质上，训练更小的模型，并投入更多的计算资源，可以让你获得更好的性能，6亿参数的模型也取得了类似的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so training off essentially uh much smaller model uh doing more compute gets you this this much better performance um and similar numbers for the 600 million parameter model.</p>
</details>

### 生成输入：模糊测试与对抗性测试

好的。以上就是关于评判和评分输出的所有内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So that's all judging and scoring the outputs.</p>
</details>

然而，同样重要的是，如何为AI系统生成输入？以及如何随着时间推移运行搜索？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um equally important though is how do you come up with inputs to throw out the AI system, right? And how do you run the search over time?</p>
</details>

简而言之，我们有两种思考方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">TLDDR there's two ways that we think about this.</p>
</details>

一种是广义上的**模糊测试**（fuzzing），这基本上是说，我只想为某个客户的“快乐路径”设计一些变体，并在合理的**分布内**用户输入下测试我的系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is fuzzing in the general sense which is essentially okay I just want to come up with some variance uh of some customer happy path and test my system under some reasonable in distribution uh user inputs</p>
</details>

然后是更有趣的部分，即如何进行**对抗性测试**（adversarial testing）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right then there's the more fun part which is how do you do adversarial testing</p>
</details>

你如何模拟某人试图进行**提示注入**（prompt inject: 一种攻击技术，通过在用户输入中插入恶意指令来操纵大型语言模型）和**越狱**（jailbreak: 指绕过AI模型的安全或伦理限制，使其执行不被允许的任务），从而大规模地干扰你的AI系统？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right how do you basically emulate some person trying to sit down and prompt inject and jailbreak and mess with your AI systems at large</p>
</details>

这在解决优化问题方面更具侵略性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh and this is much more aggressive in terms of how we pursue the optimization problem.</p>
</details>

简而言之，AI领域的模糊测试比传统的安全、软件或硬件测试更具结构性，也更受优化驱动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Long story short is, you know, fuzzing in the AI sense is much more structured and optimization driven than in classical security or or software or hardware, right?</p>
</details>

在任何合理短的时间内，对自然语言的输入空间进行**暴力搜索**（brute force search）是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is impossible to like search over the input space of natural language and do a brute force search uh in any reasonably short amount of time.</p>
</details>

比如，我们正在处理一个**Llama 3**分词器，每个独立输入有128,000个token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we're dealing with, you know, let's say we're doing a llama 3 tokenizer. is uh 128,000 tokens per individual input, right?</p>
</details>

如果你将其扩展到1亿个token，那么扫描整个输入空间简直是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You scale this up to like 100 million tokens and you're like literally impossible to scan this entire input space.</p>
</details>

因此，在进行“磨练式测试”和模糊测试时，你必须非常聪明、有指导性地修剪搜索空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have to be very clever and guided and prune the search space as you do hazing and fuzzing.</p>
</details>

我们本质上将这项任务视为一个优化问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We treat this task essentially as an optimization problem.</p>
</details>

简而言之，这只是**离散优化**（discrete optimization）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? This is long story short just discrete optimization.</p>
</details>

过去六七十年里，有大量丰富的离散数学研究文献可以支持如何完成这类任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's plenty of rich literature over the past 60 70 years of uh discrete math research to go and support how to do this sort of task.</p>
</details>

当然，你必须对其进行调整，使其适用于LLM领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have to massage it of course to work for the LM domain.</p>
</details>

但总而言之，搜索空间就是自然语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but TLDDR the shirt space is just natural language.</p>
</details>

在这种情况下，我们试图最小化的目标本质上就是我们用来对输出进行评分的任何评判者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The objective that we're trying to minimize in this case is essentially whatever judge uh that we're using to score the output.</p>
</details>

我们基本上希望找到能够破坏你的AI应用程序的输入，即评判者对输出的某个衡量指标打分非常低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We basically want to find inputs that break your A application visav the judge gets the output to score very low on some uh measure of the judge.</p>
</details>

我们可以运用一系列有趣的优化算法来解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And yeah we we can rip and throw a bunch of fun optimization algorithms at this.</p>
</details>

我们可以使用**基于梯度的方法**（gradient based methods）从评判者损失（judge loss）通过模型一直**反向传播**（back prop）到输入空间，并用它来指导我们想要翻转哪些token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we can use gradient based methods to back prop all the way from the judge loss through the model to the input space and use that to guide uh what tokens we want to flip.</p>
</details>

我们可以使用各种形式的树搜索和**蒙特卡洛树搜索**（MCTS: Monte Carlo Tree Search）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we can use various forms of tree search and MCTS.</p>
</details>

我们可以在**潜在空间**（latent space）的**嵌入模型**（embedding models）中进行搜索，然后从嵌入模型映射到文本，并将其应用于底层AI应用程序或待测试的应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can search over the latent space of uh embedding models and then map from the embedding models to text and throw that at the underlying AI application or the application under test.</p>
</details>

我们可以使用**DSPI**（Deep State Policy Iteration: 深度状态策略迭代）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we can use DSPI.</p>
</details>

我们可以使用各种其他优秀的工具和技巧来解决这个优化问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can use all sorts of other great uh tools and tricks to solve this optimization problem.</p>
</details>

### 案例研究与实际影响

最后几分钟，我们分享一些有趣的案例研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some fun case studies in the last few minutes.</p>
</details>

总而言之，你可能会想象到，“磨练式测试”对于受监管行业的人来说非常重要，事实上，我们与银行、金融服务和医疗保健等领域有大量合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, TLDDR, you could probably imagine that this hazing thing matters a lot for people in regulated industries and indeed we work a lot with uh banks and financial services and healthcare and so on.</p>
</details>

最近，我们对匈牙利最大的银行进行了“磨练式测试”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, we did something recently where we um hazed uh the largest bank in Hungary.</p>
</details>

他们有一个向客户展示的贷款计算AI应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh they had this like loan calculation AI application that they're showing to customers.</p>
</details>

该客户应用程序必须遵循他们称之为“18行行为准则”的规定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The customer application had to follow this 18 line code of conduct is what they called it.</p>
</details>

我们基本上利用平台上的所有优化和评分工具来模拟攻击者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh and we basically threw everything under the sun uh from our platform in terms of optimization and scoring to uh emulate adversaries.</p>
</details>

我们发现了大量的**提示注入**（prompt injections）和**越狱**（jailbreaks），以及他们行为准则中未考虑到的意外边缘情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We were able to discover a ton of uh prompt injections and jailbreaks and honestly just like unexpected corner cases that they didn't account for in their code of conducts.</p>
</details>

他们得以修复这些问题，并最终将其产品投入生产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and they're able to patch this up and then finally unblock their production into prod.</p>
</details>

我们目前正在为一家财富500强银行做这项工作，他们希望通过语音代理进行外呼催收。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are doing this right now for a fortune for Fortune 500 bank that wants to do uh outbound debt collection with voice agents.</p>
</details>

这个问题实际上更复杂一些，因为我们现在不仅仅是在文本空间进行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh little bit actually more complex problem because now we're not just testing in the text space.</p>
</details>

我们还在音频信号中引入了大量的变异。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're actually introducing a lot of uh variance to just the audio signal as well.</p>
</details>

例如，添加背景噪音，在输入域中叠加奇怪的静电，改变频率等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So adding things like background noise um stacking you know weird static into the the input domain changing the frequencies of things etc.</p>
</details>

对吧？但归根结底，这仍然是一个优化问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? But still an optimization problem at the end of the day.</p>
</details>

总而言之，这个团队用他们的内部运营团队花了大约3个月时间完成的工作，用他们自己的话说，我们的平台只用了5分钟就完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um TLDDR what took this team you know 3 months or so to do with their internal ops teams uh took in their own words uh only 5 minutes for a platform to do</p>
</details>

因此，扩展对抗者模拟对这项任务也同样有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um so scaling up adversary emulation uh works for this task as well</p>
</details>

另外，对于另一家语音代理公司，我们一直在帮助他们扩展其评估套件，这与“磨练式测试”不同，主要是通过Verdict系统扩展他们主观的人工标注员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and a little bit more different uh for another voice agent company we've been helping them with uh scaling up their eval uh suite right so not so much hazing but basically scaling up their subjective human annotators uh through verdicts</p>
</details>

与使用其内部运营团队相比，他们在使用Verdict后，真值人工一致性提高了38%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh they've seen a 38% increase in ground truth human agreements using verdicts um as opposed to using uh their internal ops teams.</p>
</details>

我们在这里使用的，本质上是Verdict库中一个久经考验的架构，我们称之为**评分标准扇出**（rubric fanout）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we're using here is essentially uh a triedand-rue architecture from the verdict library which is what we call rubric fanout.</p>
</details>

它基本上是为任何特定数据点提出独立的单元测试和标准，对其进行批判，自我验证批判，最后汇总结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it is basically propose individual uh unit test and criteria for any particular data point uh critique it self-verify your critique and then aggregate results at the very end.</p>
</details>

### 总结与招聘

好的。我们还有几分钟时间进行提问，但“磨练式测试”非常有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. So we got a few minutes left uh for questions but um yeah hazing is a ton of fun.</p>
</details>

我认为它对于我们正在构建的这个软件新时代至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it matters a lot for this new era of software that we're building.</p>
</details>

我们正在积极招聘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we're very aggressively hiring.</p>
</details>

我们面临着我认为是不可逾越的企业需求，而我们团队只有四个人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're, you know, facing what I would deem to be insurmountable enterprise demand and we're only a team of four people.</p>
</details>

所以我们真的需要扩大团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so we really need to scale up our team</p>
</details>

我们总部设在纽约，如果大家想搬到这座城市的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and yeah, we're based in New York in case you guys want to move out to the city.</p>
</details>

好的，还有什么最后的问题吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and yeah, any uh any last questions for me</p>
</details>

提问：对于“磨练式测试”的输入，是多轮（multi-shot）还是单轮（single shot）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> for the hazing input? Is it multi-shot or single shot?</p>
</details>

是的，好问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, great question.</p>
</details>

我们两者都做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we do both.</p>
</details>

我们支持单轮、多轮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we do single turn, multi-turn.</p>
</details>

如果你在处理语音，我们还支持持续对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we do persistent conversations if you're doing voice.</p>
</details>

是的，各种模态，各种输入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um yeah, all sorts of modalities, all sorts of inputs.</p>
</details>