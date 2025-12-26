---
area: "work-career"
category: ai-ml
companies:
- deepmind
companies_orgs:
- Google DeepMind
- Google
- OpenAI
date: '2025-12-18'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemini 3
- Gemini 1.5
- BERT
project: []
series: ''
source: https://www.youtube.com/watch?v=cNGDAqFXvew
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: Google DeepMind 的 Sebastian Bourjou 深入探讨了 Gemini 3 的研发、AI 领域从数据无限到数据有限的范式转变，以及研究团队的组织方式。他分享了对
  AI 进展的看法，认为我们正超乎预期地前进，并强调了系统性改进、多模态能力及研究与工程的融合。对话还触及了扩展定律、数据策略、模型效率和未来 AI 研究方向。
tags:
- ai-research
- llm
- multimodal-ai
title: Gemini 3 与 AI 的未来：深度对话 Sebastian Bourjou
---
### AI 进展与范式转变

坦白说，我认为我们已经超越了最初的预期。我们不再仅仅是构建一个模型，而是真正地在构建一个**系统**。目前可能发生的是一种范式转变：过去我们主要在数据无限的领域进行扩展，而现在我们正转向**数据有限**的领域。这实际上极大地改变了研究方法和我们思考问题的方式。我暂时看不到这种工作方式会停止带来进展的迹象。

<details>
<summary>Original English</summary>
If I'm being honest with myself, I think we're ahead of where I thought we could go. We're not really building a model anymore. I think we're really building a system at this point. What might be happening instead is kind of a shift in paradigm where before we were kind of scaling in the data unlimited regime, and we're kind of shifting more to a data limited regime, which actually changes a lot of the research and how we think about problems. I don't really see an end in sight for for that kind of line of work to continue giving us progress.
</details>

### Gemini 3 的诞生与研究团队

我是 Matt Turk，欢迎来到 Matt 播客。今天的嘉宾是 **Sebastian Bourjou**，他是 **Google DeepMind** Gemini 3 的预训练负责人。Sebastian 是全球顶尖的 AI 研究者之一，也是 Metas 列表的成员。这一期尤其特别，因为这是他第一次参加播客节目。我们讨论了 Gemini 3 的内部构建、从无限数据世界到数据有限领域的转变、DeepMind 研究团队的组织方式以及 AI 的未来。请享受这次与 Sebastian 的精彩对话。

<details>
<summary>Original English</summary>
Hi, I'm Matt Turk. Welcome to the Matt podcast. My guest today is Sebastian Bourjou, pre-training lead on Gemini 3 at Google DeepMind. Sebastian is one of the top AI researchers in the world and a member of the Metas list. And this is a particularly special episode because it's his first podcast ever. We talked about how Gemini 3 is built under the hood, the shift from an infinite data world to a data limited regime, how research teams at DeepMind are organized, and what's next for AI. Please enjoy this great conversation with Sebastian.
</details>

### 简单背后的复杂性

Sebastian，欢迎你。谢谢。你好。我想从一则来自 **Oral Yilmaz** 的推文开始我们今天的对话。他是 Google DeepMind 的研究与深度学习副总裁，也是 Gemini 的联合负责人。他曾表示，Gemini 3 问世的秘密在于“极其简单”的“更好的预训练和更好的后训练”。考虑到 Gemini 3 相较于先前最先进技术的巨大飞跃，这听起来确实相当谦逊。那么，从你的角度来看，这在某种程度上真的有这么简单吗？

<details>
<summary>Original English</summary>
Sebastian, welcome. Thank you. Hi. So, I was hoping to start uh this conversation with this tweet from oral viney who's the VP of research and deep learning at Google de mind the Gemini co-lead uh who said when Gemini 3 came out that the the secret behind the model uh was remarkably simple better pre-training and better post-training which uh when you think about the leap that Gemini 3 represented over the prior state-of-the-art sounds remarkably modest. Um, so I was curious about your perspective. Is it as simple in some ways as as that?
</details>

### 团队协作的成果

是的，我不确定这算不算一个大秘密。至少从我的角度来看，这似乎相当正常。我认为人们有时会期待 Gemini 的一个版本到下一个版本会有某个巨大的变化，从而带来巨大的差异。根据我的经验，可能有一两件事会比其他事情产生更大的影响，但真正让 Gemini 3 比之前的 Gemini 版本出色如此之多的，是来自一个庞大团队的**无数次累积性改进**。我认为这很可能是一个稍后会再次出现的主题，但它确实是一个大型团队协作的成果，最终体现在 Gemini 3 这样的发布中。这在 AI 进展方面告诉了我们什么？从远处看，那些看似简单的“调整旋钮”为何能带来如此巨大的飞跃？这对我们未来能期待什么意味着什么？

<details>
<summary>Original English</summary>
Yeah, I'm not sure it's a a big secret. At least from my perspective, this seems quite normal. I I think people sometimes have the expectation that from one Gemini version to another, there's a big thing that changes and that that really makes a big difference. In my experience, there's maybe one or two of those things that make a larger than difference than other things, but it's really a culmination of many many changes and many many things from from a very large team that actually makes Gemini 3 uh so much better than than the previous generations of Gemini. And I think this is probably a theme that will recur later, but it's really a large team effort that that comes together in a release like Gemini 3. What does what does that tell us uh in terms of uh where we are in AI progress? What sounds from far as in sort of turning some knobs gives us such a leap? What what does that mean in terms of uh what we can expect going forward?
</details>

### 系统构建与智能演进

有两点。第一，我们能够以这种方式取得如此大的进展，仍然是令人惊叹的，而且进展并未真正放缓。我们找到了**无数的改进点**，几乎每天都能发现让模型变得更好的方法。这是第一点。第二点是，我们不再仅仅是在构建一个模型。我认为我们现在真正是在构建一个**系统**。人们有时会认为我们只是在训练一个神经网络架构，仅此而已。但实际上，我们共同构建的是围绕着网络的整个系统。这就是第二点。

<details>
<summary>Original English</summary>
There there's two things. The the first one is it's still remarkable how how much progress we're able to achieve in in this way and and it's not really slowing down. There's so many of these knobs and so many improvements that that we find on a day-to-day basis. Yeah, almost on a day-to-day basis that that make the model better. So that's the first point. The second point is we're not really building a model anymore. I think we're really building a system at this point. People have sometimes this view that we're just training a neural network architecture and that's it. But it's it's really the entire system around the network as well that that we're building collectively. And so that's the the second part.
</details>

### 智能进展的衡量标准

大家最关心的问题是，这在实际的智能进展方面意味着什么？我们不必非得深入探讨 AGI（通用人工智能）的话题，因为谁也不知道那意味着什么。但这种模型进展是否是通往智能的真正路径，而不是仅仅为了在某个基准测试上取得成功？你有什么信心认为核心模型正在变得更聪明？

<details>
<summary>Original English</summary>
The big question on everybody's mind is um what does that mean in terms of uh actual progress towards intelligence? And we don't need necessarily to go into the whole AGI thing because who knows what that means but is the right way to think about this this kind of model progress as an actual path towards intelligence versus uh you know trying to succeed on this benchmark or that other benchmark. What gives you confidence that the the core model is getting smarter?
</details>

### 基准测试与实际效用

基准测试肯定在不断改进。如果你看看前沿的基准测试是如何设定的，它们正变得越来越困难。即使对我这样有计算机科学背景的人来说，模型回答的一些问题，也需要我花费大量时间才能解答。这只是一种视角，即基准测试的视角。我们确实会频繁地进行评估，并且非常谨慎地保留测试集。但仍然存在一些担忧，即模型可能过度拟合这些测试，也就是人们所说的“基准测试优化”。这是其中一个方面，我不认为这些担忧很有根据。但第二个方面，也是真正让我充满信心的，是人们花费在**使用模型来提高内部工作效率**上的时间正在随之增加。每一代新模型都清晰地表明，模型能够做新的事情，并且在我们的研究和日常工程工作中提供比上一代模型更多的帮助。因此，这方面也应该给我们信心，表明模型正变得越来越强大，并且实际上也在做非常有用的事情。

<details>
<summary>Original English</summary>
The the benchmarks definitely keep improving and and if you look at at the fronts and how the benchmarks are set up, they they are becoming increasingly difficult. And even for for me who has a background in computer science, some of the questions the model answers, it would take me a significant amount of time to answer. This is just one view. It's the benchmark view. And and there's some amount of we we evaluate those frequently etc. we're being very careful about holding out uh the test set but still there's some fears often of of overfitting to those and and just benchmaxing is what people call this but that's one aspect I don't think those fears are very founded but but the second aspect and that's the one that really fills me with confidence is the amount of time people spend using the model to make themselves more productive internally is is increasing over time every new generation of models is pretty clear the model can do new things and and help us uh in our research in our day-to-day engineering work much more so than the previous generation of models. So that aspect should give us confidence as well that the the models are becoming more capable and actually are doing very useful things as well.
</details>

### 超越预期的进展

作为一名深入 AI 核心的研究者，我总是很好奇。当你宏观地审视这一切时，你是否仍然对我们所处的位置感到惊讶？从你的角度看，我们是否远远超出了你几年前的预期？我们是在按计划进行，还是落后了？

<details>
<summary>Original English</summary>
I'm always curious as a as an AI researcher who's like so deep into the very heart of all of this. If you zoom out, uh are you are you still surprised by where we are? Like from your perspective, are we well ahead of where you thought we would be a few years ago? Are we on track? Are we behind?
</details>

### 个人视角与规模的震撼

也许吧。我认为事后看来，说我们在按计划进行很容易。但如果我对自己诚实地说，我认为我们已经**超出了我原先的预期**。从 2019 年或 2020 年开始从事大型语言模型（LLM）的工作，很难相信我们现在所做的一切的规模，以及模型如今的能力。如果当时只看扩展定律，它们无疑指向那个方向，有些人也深信不疑。我不确定我是否会押下重注，认为这一切真的会实现并达到我们今天的水平。所以，由此引出一个有趣的问题：如果我们假设过去五年的进展速度保持不变，那会把我们带向何方？我认为，未来几年也将发生非常非常酷的事情。

<details>
<summary>Original English</summary>
Possibly. I think it's easy to say we're on track in hindsight. I think if if I'm being honest with myself, I think we're ahead of of where I thought we could go. Um, starting work on LLMs in in 2019 or 2020, it's it's kind of hard to believe uh the scale of everything we're doing, but also just what the models are capable of of doing today. If you just if you kind of looked at scaling laws back then, they were definitely pointing uh towards that direction. And some people really believe those deeply. I I'm not sure if I would have bet a lot on on that actually materializing and and being where we are today. So one interesting question that follows from this is where where does that take us if we assume the same or if we assume the same kind of progress we've seen in the last 5 years. I think yeah this it's going to be very very cool what's going to happen in the next few years as well.
</details>

### AI 的科学发现与研究加速

你对此有什么看法？这是否意味着 AI 能够带来**新颖的科学发现**，甚至赢得诺贝尔奖？你认为在短期内，比如两到三年内，我们会走向何方？

<details>
<summary>Original English</summary>
What do you think on that front? Um does that mean um AI comes up with novel uh scientific discovery I wins the Nobel prize like what where where do you think we are going in in the short term like sort of two to three years
</details>

### 科学突破与日常工作效率

我认为是的，这正是其中一部分。在科学方面，我认为 DeepMind 历史上在这方面做了大量工作，并且肯定也有很多这方面的研究。我认为在未来几年，我们将能够做出一些重大的科学发现。这是一方面。另一方面，在我日常工作中，无论是研究还是工程方面，我都对如何利用这些模型取得更多进展，以及如何更好地理解我们正在构建的系统、进一步发展我们自身的理解和研究感到非常兴奋。是的，业界有一个关于 AI 研究和工程自动化的重大主题，如果将其推演下去，就会导向类似“AI 2027”的情景，即某个不连续的时刻。但从非常实际的层面来看，这意味着今天使用 AI 来完成你自己的工作，以及你认为几年后它将意味着什么？

<details>
<summary>Original English</summary>
I think yeah that that's part of it so on on the science side uh I think deep mind historically has has done a lot of work and and for sure there's there's a lot of work in that direction as well I think we will be able to to make some some large scientific discoveries in the next few years that's one side. I think on the other side is in my day-to-day work as well uh both research and engineering. I'm very excited about how those we can use those models to to make more progress but also to to better understand the systems we're building and and de develop our own understanding and research further. Yeah, there's this um big theme in the industry about automation of uh AI research and engineering which if you extrapolated leads into AI 2027 kind of scenarios where where there's a discontinuity moment just at a very pragmatic level what does that mean using AI for your own work today and what do you think that's going to mean in a couple of years
</details>

### 加速研究而非自动化

我认为这更多的是关于**加速我们的工作进程**，而不是关于自动化。让我们将更多时间投入到研究部分，或许是更高层面的研究。在语言模型研究中，日常工作很大一部分是处理相当复杂且庞大的系统，尤其是在基础设施层面。因此，相当多的时间会花在运行实验、监控实验、分析大量数据、收集结果上。然后，有趣的部分是形成假设，然后设计新的实验。我认为后两个部分是我们将会非常深入参与的。第一部分，尤其是在明年，随着**更具代理（agentic）的工作流程**的实现，应该能够真正加速我们的工作。

<details>
<summary>Original English</summary>
I think it's not so much about automation but more about making us go faster and and spending more of our time in in in the the research part at slightly maybe higher level. A lot of the day-to-day work in in research on language models is we we we're dealing with quite complex and large systems on the infrastructure level. So actually quite a bit of time is dedicated to to running experiments, babysitting experiments, analyzing a lot of data, collecting results and and then the interesting part is forming hypothesis and then and designing new experiments. And so the last two parts I think is something where where we'll be very much involved in. The first part I think especially in the next year with with more agentic workflows being enabled more and more um that should be able to to really accelerate our work there.
</details>

### 行业动态与竞争格局

你是否觉得，各个前沿 AI 实验室基本上都在朝着同一个方向努力，做着同样的事情？你知道，我们作为行业参与者和观察者，都经历过一件奇妙但又令人费解的事情：似乎每周或每隔几周，或者每个月，就会出现一个了不起的新模型，让我们应接不暇。Gemini 3 刚刚发布，就在我们录制节目前的两个小时，GPT 5.2 也发布了。你如何看待这种现象？有人会脱颖而出吗？还是说，行业将继续由少数顶尖实验室以及一些新兴实验室构成？

<details>
<summary>Original English</summary>
Is your sentiment that the various frontier AI labs are effectively all working in the same direction sort of doing the same thing. You know, one one um fantastic but uh in some way perplexing uh thing that we all experience as industry participant observers is uh this uh obvious phenomenon of like every week or other weeks or every month there seems to be like another you know fantastic model and we we're completely spoiled. So Gemini 3 just came out uh at the same time like two hours ago literally before we were recording this GBT 5.2 came out. What do you make uh of that from your perspective and how do you think that plays out? Is is anybody going to break out or uh effectively the uh industry is going to continue with like the handful of top labs plus some neolabs that are appearing?
</details>

### 技术相似性与差异化研究

首先，不同实验室的研究确实存在相似之处。我认为基础技术大致相似。如果所有人都还在训练类似 Transformer 的模型，我可能会感到惊讶，尤其是在架构方面。但在此基础上，确实存在**专业化**。我认为研究正在沿着不同的分支或树状结构探索和发展，并被不同的公司所利用。例如，历史上 DeepMind 在**视觉和多模态**方面一直非常强大，今天依然如此，这体现在人们如何使用模型以及模型在基准测试上的表现。当然，还有像推理这样的领域。OpenAI 推出了第一个模型，但我们也对该领域进行了研究。所以，存在相似之处，但并非完全相同。至于第二个问题，我不知道我是否有好的答案。有一点很清楚，要使像 Gemini 这样的模型取得进展，你需要一个非常庞大的团队和大量的资源。但这并不一定意味着我们今天所做的是最优的，某些颠覆性的研究完全有可能出现，让一个小团队在某些方面占据主导地位。这也是我非常喜欢在 Google 工作的原因之一，Google 拥有进行更多探索性研究的历史，并且这种研究的广度非常高，这至今仍在继续，主要与 Gemini 并行。但我们也能够利用这些优势，并将其中一些进展融入 Gemini。

<details>
<summary>Original English</summary>
Well, the first question there's definitely similarities between what the different labs work on. I think the the base technologies are kind of similar. I might be surprised if if we went all training transformer like models for example in terms of the architecture side but then there's definitely specialization I think happening on top of that and different like maybe tree or yeah branches in in the tree of research that are being explored and exploited by the by the different companies I think historically for example deep mind has and still I think on on the vision and multimodal side we've been actually really really strong and that continues to be the case today and and shows in both how people use the model but also in the benchmarks of course and then yeah the things like reasoning etc. Um open came up with the first model but we also had the strand of research on that. Um so there's similarities but it's it's not exactly exactly the same. I would say for the second question I don't know if I have a good answer. One thing that's clear is to make progress on on a model like Gemini today you do need a very large team and and a lot of a lot of resources. Now, that doesn't necessarily mean that what we're doing today is optimal in in any form and and some disruptive research could definitely come along and and allow a smaller team to actually take over in some form. This is one of the reasons why I actually enjoy being at Google so much as well is Google has this history of of doing more explorative research and and and has a really high breadth of that research and and that continues to be the case uh mostly in parallel to Gemini. But we're definitely able to also utilize that and and bring some of those advances into Gemini. Mhm. Are there other groups uh whether at Deepmind or elsewhere in the industry that are working in semi-secret or complete secret in post transformers architecture that uh and one day something will come out and we'll all be surprised is that is that are there groups like that in the industry?
</details>

### 秘密研究与垂直整合

我相信是的，在 Google 和 DeepMind 内部，都有团队在研究模型架构。至于这些研究是否会成功，很难说，对吧？毕竟这是研究，很少有研究想法能最终成功。那么，在此期间，一家公司可能相对于另一家公司的核心优势仅仅是人才的质量。以 Google 为例，也许是垂直整合。我之前提到的 Oral 的那条推文被 Demi Sasabis 转发并评论，他说真正的秘密是研究、工程和 Frost（可能是指基础设施或部署）的结合。这就是 Google 的“秘密酱料”吗？你们自己构建整个技术栈？

<details>
<summary>Original English</summary>
Uh I believe so there there's groups doing research on on the model architecture side for sure within Google and within deep mind. Whether that research will pan out, it's hard to say, right? It is research. So very few research ideas work out. And so in the meantime, the core advantage that uh one company may have over the other is um just the quality of of people. In the case of Google, I guess the vertical integration that tweet from oral that I was mentioning got uh retweeted a quot tweeted by Demi Sasabis and he was saying that the the the real real secret was a combination of research and engineering and in frost. Is that is that the secret sauce at Google? The fact that you guys do the whole stack
</details>

### 研究与工程的融合

这绝对有帮助，我认为这是重要的一部分。研究与工程的界限也很有趣。我认为随着时间的推移，这个界限已经变得模糊了，因为在处理这些非常庞大的系统时，研究现在看起来就像工程，反之亦也。我认为这是过去几年 DeepMind 的一个重要思维转变，以前可能更偏向传统的**研究思维**，而现在，尤其是在 Gemini 项目中，它更多地是关于**研究工程**。基础设施部分也非常重要，我们正在构建这些超级复杂的系统，因此拥有可靠、可用且可扩展的基础设施是关键，以避免减缓研究和工程的进程。

<details>
<summary>Original English</summary>
it definitely helps. I think it's it's an important part. Um research versus engineering is also interesting. I think over time that boundary has blurred quite a lot because with working on these very large systems now research really looks like engineering and and vice versa and I think that's that's a mindset that has really evolved over the last few years at deep mind especially where maybe there was a bit more of the traditional research mindset before and now with Gemini it's really more about research engineering the infrastructure part is also very important we are building these super complex systems so having infrastructure that's reliable that works that's scalable is is key in terms of of not slowing the research engineering down.
</details>

### Gemini 3 的硬件与个人角色

Gemini 3 是在 TPU 上训练的，对吗？而不是 Nvidia 芯片。所以，这是真正完全整合的。好的。那么，我很想深入探讨一下 Gemini 3。但在那之前，我们先聊聊你本人。你是 Gemini 3 的预训练负责人。这具体意味着什么？然后，我们再聊聊你的背景和经历。

<details>
<summary>Original English</summary>
And Gemini 3 was trained on TPUs, right? Not on Nvidia chips. So, it's truly fully integrated. Okay. So, I'd love to uh do a deep dive on uh Gemini 3. But before we do that, uh let's talk about you a little bit. So, you are the pre-training lead uh on Gemini 3. What does that mean? And then, uh let's go into your your background in your story.
</details>

### 预训练负责人的职责

我是 Gemini 的预训练负责人之一。我的工作内容是多方面的。一部分是实际的**研究**，即努力让模型变得更好。但如今，我不再亲自运行太多实验，而是帮助设计实验并与团队成员一起审阅结果。这是第一部分。第二部分，也很有趣，更多的是**协调与整合**。目前这是一个相当大的团队。很难精确量化，但大约有 150 到 200 人每天都在为预训练方面工作，涉及数据、模型、基础设施和评估等。将所有这些人的工作协调起来，形成一个我们可以共同构建的东西，这实际上相当复杂，需要花费相当多的时间，尤其是在做好方面。对我来说，这非常重要，因为让每个人都能取得进展，这才是我们取得最大进步的关键，而不是让一两个人或一小群人领先于其他人。这在短期内可能有效，但从长远来看，我们成功的关键在于整合**众多人员的工作成果**。

<details>
<summary>Original English</summary>
I I'm one of the the Gemini pre-training leads. So what this entails it's a mix of of different things. So part of my job is is actual research. So trying to to make the models better. But these days it's it's less running experiments myself, but help design experiments and and review results with with people on the team. So So that's the the first part. The the second part, which is quite fun, is more of the the coordination and integration. So it's a fairly large team at this point. Um it's a bit hard to quantify exactly but maybe 150 200 people work on a day-to-day on on the pre-training side between data model infrastructure evolves and so coordinating the work of all of these people into something that we can build together is actually quite complicated and and takes quite a bit of of time um especially time to do well. To me, this is super important because actually being able to get progress out of everyone is is really what makes us make the most progress rather than enabling maybe one or two or small group of 10 people to to run ahead of everyone else. That might work for a short period of time, but over longer periods of time, what's really been successful for us is is being able to integrate the work from for many many people.
</details>

### 成长经历与教育背景

就你个人的成长背景而言，我一直很好奇：你在哪里长大？你小时候和青少年时期是怎样的孩子？你是否曾试图去“逆向工程”这些顶尖 AI 研究者？他们来自哪里？你又是如何成为今天的你？

<details>
<summary>Original English</summary>
So, in terms of your of your personal background, I'm uh I'm always curious where where did you grow up? what kind of you know kid and teenager where where you was trying to like reverse engineer like you know this this top AI researchers uh where where do they come from and how did they become or why did you become uh to to to to be who you are?
</details>

### 欧洲的成长与剑桥求学

我在欧洲各地长大，搬家很多次。我出生在荷兰，七岁时搬到了瑞士。我的父亲是瑞士人，母亲是德国人。我在瑞士完成了大部分学业，包括高中初期，主要用法语和德语学习。15岁时，我搬到了意大利，在那里完成了高中学业，直到大约19岁。那时我打算去苏黎世联邦理工学院（ETH Zurich）学习，但可能只是出于偶然，一天早上我查看了大学排名，发现剑桥大学名列前茅。于是我想，为什么不申请试试呢？几个月后，我收到了录取通知书。于是我决定搬到剑桥，并在那里的计算机实验室完成了我的本科和硕士学位。

<details>
<summary>Original English</summary>
I I grew up a bit all over the place in Europe. I moved around quite a bit. So I was actually born in the Netherlands uh and I moved when I was seven uh to Switzerland. So so my dad is from Switzerland and and my mom is from from Germany. So I did most of my school um and the beginning of my high school in in Switzerland mostly in in French and also in German and parts and then at age 15 I think I moved to Italy uh where I finished my high school till around uh uh when I was 19. And at that point I was going to go to the ETH in Zurich to do my studies but I think just by random events one morning I I just looked up the the top universities in some kind of ranking and I saw Cambridge was at the top. So I I thought I'll just apply. Why not? And yeah, few months later I got the acceptance letter. So I I decided to to move to Cambridge uh where I did my undergrad and masters in the computer lab.
</details>

### 数学与编程的启蒙

你小时候是个数学很强的孩子，喜欢计算机科学吗？我父亲有技术背景。我记得大约十岁或十一岁时，我开始和他一起编程，并从中学习，我一直很喜欢。而且我在学校的数学和科学方面一直很轻松，成绩也很好。当然，这种情况在大学时发生了变化。但那是我高中时的经历。

<details>
<summary>Original English</summary>
Yeah. And you were uh growing up you were just a super kind like math strong uh kind of a kind of kid, computer science kind of a kind of kid. My dad has a technical uh background. So I remember some when I was 10 or 11 starting to program a bit with him and and and learning and I I I kind of always liked that. Um and then I always had like easiness in in math and and science at school. Um I remember never having to really study for math exams but always doing quite well. Um that definitely changed uh at university. Uh but that was that was uh yeah that was my my high school experience.
</details>

### 从学术到 DeepMind 的机遇

从学校到你现在的位置，你的职业道路是怎样的？我想那又是一次幸运的机遇。在我硕士期间的一门课程，授课老师同时也是 DeepMind 的一位研究员。我记得在最后一节课结束时，我正在收拾东西，心想，不如就向他要个推荐信吧？有什么风险呢？他可能会拒绝，但无所谓。于是我鼓起勇气走上前去，问他是否愿意给我写推荐信。果然，他说：“当然，发我简历，我看看能做什么。”就这样，我获得了在 DeepMind 的面试机会。那是在 2018 年。我加入了当时的 DeepMind，还不是 Google DeepMind，作为一名研究工程师。

<details>
<summary>Original English</summary>
Great. and what was your uh path from school into where you are today? Yeah, so that's again that's uh it was a bit of a lucky moment I would say. Um one of the lectures we had uh in my masters was someone who was also a researcher at Deep Mind and I just remember at the end of the last lecture um I was packing my stuff. I was you know what I'll just ask him for ref referral. Um what's the risk right? You might just say no but whatever. And so I actually took the courage and I went up to him and asked if he would give me a referral. And sure enough, he was like, "Sure, send me your CV and I'll see what I can do." And and that's kind of how I got my my interview at DeepMind. Um this was in uh 2018. And I so I joined Deep Mind at the time, just Deep Mind, not Google Deep Mind. Um as a as a research engineer after university.
</details>

### 从强化学习到表征学习

你在最初做了什么？后来又是如何成为 Gemini 3 的预训练负责人之一的？刚加入 DeepMind 时，它以强化学习（RL）闻名，所以我最初参与的项目是关于 RL 的。具体来说，我们训练了一个无监督网络来学习 Atari 环境中的关键点，并尝试让智能体玩 Atari 游戏。我做了大约六个月。也许这不够，因为我不喜欢这种**合成的（synthetic）**方面。我一直想更多地处理**真实世界的数据**，并产生更实际的影响。总的来说，我喜欢构建东西，构建能起作用的东西。我不喜欢纯粹的学术研究部分。这促使我开始研究**表征学习**（representation learning），即训练具有良好表征以执行不同任务的神经网络。这里有一个有趣的轶事，我经常和团队成员分享。我参与的第一个项目叫做“从真实世界数据中学习表征”。当时我们不得不在项目名称中加上“来自真实世界数据”，因为人们会认为否则就是合成环境或合成数据。从那以后，情况已经完全改变了。所以，那是我在这方面的第一个项目，特别是 LLM 和 Transformer。我们研究了像 Transformer 这样的架构，以及像 BERT 和 XLNET 这样的模型，学习这些表征并尝试改进它们。

<details>
<summary>Original English</summary>
And what did you do at first and how did that evolve to uh being one of the pre-training leads on Gemini 3? Yeah. So it's it's uh at the beginning having joined deep mind and deep mind being known for RL um the first project I I managed to to work on or decide to work on was something on on the RL side. So specifically we're training uh some unsupervised network to to learn key points on on Atari environments and try to to get the the agent to play Atari, right? Um so I did this for about 6 months. maybe it wasn't enough for in the sense I didn't like the the synthetic aspect of this. Um I I always wanted to to work more on on on real world data and have more of a a real world effect. I think in general I like to build things and and build things that work. I don't really like the the academic pure research part. And so that kind of drove me um to to start working on on representation. So creating these or training these neural networks that have good representations to do different tasks and and one funny anecdote here is something I I tell along the people on my team. But um the first effort I joined on this was called representation learning from real world data. And at the time we had to add this from real world data to the to the name of the project because people would assume otherwise it would be synthetic environments or or synthetic data. um and and that definitely has shifted uh completely since then. So yeah, that was kind of my first project on on on that side and specifically LLMs and transformers. We're looking at architectures like transformer and and models like BERT and XLNET that we're learning these representations and and trying to improve those um those representations and do research uh on that side.
</details>

### LLM 的规模化与研究方向

然后你又参与了 Retro 项目，对吗？能谈谈那个项目吗？是的。在那之后，我们开始着手**扩展 LLM**。我们首先从 Gopher 开始，我认为这是 DeepMind 发表的第一个 LLM 论文。那时团队大约有 10 到 12 人。所以，那时就很清楚，你无法独自完成这项研究。这正是我开始进行**大规模预训练**的地方，也发展了我对研究的品味，以及我喜欢它的哪些方面。我们训练了第一个**密集型 Transformer 模型**，拥有 2800 亿参数，当时处理了 3000 亿个 token。我们当时的做法肯定与现在不同，但那是一次很棒的学习经历。之后，出现了两个主要项目：Chinchilla 和 Retro。在 Chinchilla 项目中，我们重新审视了如何扩展模型大小和数据量，尤其是在计算最优化的角度。问题是：给定固定的训练计算量，如何训练出最好的模型？是应该增加模型大小，还是增加数据量？我们重新审视了 OpenAI 在这方面的一些先前工作，并发现我们应该**更快地扩展数据量**，而不是模型本身。有趣的是，这在今天的日常工作中仍然非常相关，因为它对模型的服务成本和使用成本有很大影响。这是其一。另一条工作线是 Retro 项目，这更多地是关于**架构创新**。我们研究了如何通过让模型能够从大量的文本语料库中检索信息来改进模型。也就是说，模型不必将所有知识都学习并存储在参数中，而是可以在训练和推理过程中查找特定信息。

<details>
<summary>Original English</summary>
Great. And then you worked on a retro, right? Do do you want to talk about that? Yeah. So after that uh we started working on on scaling up LLMs and LLMs in general. So so we started this work first on on Gopher which is I think the the first deep mind LLM paper that was published. So already at that point it was a team maybe of 10 12 people. So already at that point it was pretty clear you needed uh you couldn't just do that research uh on your own. And this is really where where I started doing pre-training and and pre-training at scale and and and yeah develop my research taste but also yeah what I enjoy about this um so we we we trained the first dense uh transformer model that it was 280 billion uh parameters I think 300 billion tokens at that time and and trained that and uh we were definitely we would definitely not do things like we were doing them back in the day but it was it was great and a very fun uh learning experience. After that there were kind of two two projects that emerged. The first one was Chinchilla and and the second one retro. So in Chinchilla we were kind of uh we we were reexamining how you should scale the model size and how you should scale the data um especially from a computer training computer optimal perspective. So so the question is you have a fixed amount of training compute. How do you train the best possible model? Should you increase your model size or should you increase your your data size? And there was some previous work uh in in this domain from from open eye specifically that we've reexamined and and we we actually found that you want to scale the data side much more quickly than than the than what was thought before rather than scaling the model side. Funny enough, this is still really relevant in in our day-to-day work today, especially because it has a lot of implications on the serving cost and how expensive it is to to use the models once they're trained. So that was one side. The the other line of work was more on on retro and this is more on the architectural innovation side of things. So here we were looking at how you can improve models by giving them the ability to to retrieve from a large corpus of text. So rather than having the model learn and store all the knowledge in its parameters, you you give the ability of the to the model to to look up specific things during training but also uh during inference.
</details>

### 研究品味：整合与简洁

你提到了“研究品味”（research taste），我认为这非常有趣。它意味着什么？你会如何定义它？它对研究者有多重要？这在如今非常重要，而且很难量化。但有几点很重要。第一点是，你的研究不应该是孤立的。正如我之前提到的，你的研究必须与其他人的研究协同工作，并能整合进去。比如，你对模型进行了一项改进，但却让其他人使用模型变得困难了 5%。这可能不是一个好的权衡，对吧？因为你会拖慢其他人的研究进度，从而累积性地减缓整体研究进展。这是第一点。第二点是，要对**复杂性保持警惕**。复杂性本身是相当主观的，取决于人们的熟悉程度。但我们确实有一个**可用的复杂性预算**和一个**研究风险预算**，在超出这些之前，事情可能会变得糟糕。因此，意识到并管理这一点非常重要。所以，我们通常不一定想要使用研究理念的最佳性能版本，而是宁愿为了一个稍微低复杂性的版本而牺牲一些性能，因为我们认为这将使我们未来能够取得更多进展。我认为这就是研究品味的核心所在。

<details>
<summary>Original English</summary>
you use the word um research taste uh which I think is is super interesting. What what does that mean? How would you define that and how important is that for a researcher? Yeah, it's it's very important these days and it's quite hard to to quantify but the few things that that matters the first one maybe is your research is not uh standalone. This is what I was mentioning before, but your research has to play well with everyone else's research and has to integrate, right? So, let's say you have some improvement on the model, but it makes the model 5% harder to use for everyone else. This is probably not a good trade-off, right? Because you're going to slow down everyone else and and their and their research, which would then cumulatively slow down the durable research progress. That's the first thing. Um, the second thing is being allergic to complexity. Um but complexity is quite subjective is in terms of what people are familiar but still this we have a certain I think budget of complexity we can use and a certain amount of like almost research risk we can accumulate before things go bad and so being aware of that and managing that is very important. So often times we don't necessarily want to to use the best best performance version of of a research idea, but we'd rather trade off some of the performance for a slightly lower complexity version because we think that will allow us to do more and more progress in the future. So so these are kind of the main two things I think around research taste.
</details>

### 直觉与计算瓶颈

这很迷人。而且，这其中一部分必然涉及到对什么可能奏效、什么可能无效的直觉判断，对吧？考虑到计算资源有限。这种说法公平吗？是的，绝对是。这也是一个重要部分。有些人在这方面比其他人更有天赋，而丰富的经验非常有帮助。但研究方面确实受到计算资源的限制。如果我们有更多的计算资源，我认为我们会更快地取得更多进展。所以，你必须在一定程度上猜测，你想探索研究树的哪个部分，以及其中的哪些实验是正确的。但同时也要知道，研究总是如此，大多数研究想法都会失败。所以你需要判断在哪个节点上，你已经在这方面做了足够的工作，可以知道何时该转向其他方向，或者是否应该继续推进。另一个有趣的点是，尤其是在深度学习领域，负面结果并不意味着某个东西行不通，它通常意味着你还没有让它成功。所以，意识到这一点也很棘手。

<details>
<summary>Original English</summary>
That's fascinating. And and then presumably a part of it has to do with having an intuitive sense for what may work and not work, right? given there's only so much compute you can use. Is that fair? Yeah, definitely that's that's also an important part. Um I think that's some people have that much more than others and and a lot of experience really helps but for sure we we are bottleneck on the research side by by compute. If we had a lot more computer, I think we'd make a lot more progress a lot quicker. And so you have to to guess to some extent what the right first like the which part of the of the tree of research tree you want to explore and then within that what are the the right experiments but then also knowing research always it's most research ideas fail right um and so you need to figure out at what point have I done enough in this direction uh to know to move on to something else or should I keep pushing and then the other interesting thing is especially in deep learning A negative results doesn't mean something doesn't work. It means you haven't made it work yet often. And so being aware of that as well is quite tricky.
</details>

### 短期与长期权衡

既然我们谈论的是研究，以及如何组织一个成功的研发团队，让我们深入探讨一下。你提到了权衡。其中一种权衡显然是短期与长期。这具体是如何运作的？你们是如何考虑这个问题的？这也是我花费大量时间思考的问题之一。总是有**关键路径上的任务**需要完成，比如模型的某个部分需要改进，或者我们知道模型的某个部分不够理想。所以我们投入了相当多的精力来解决这些紧迫的问题。这有几个原因。首先，我们知道这将使模型变得更好，所以这是一个相对安全的赌注。其次，我们也知道那些看起来不那么好或不那么完美的方面，往往会在后期出现问题，无论是在扩展时还是在模型变得更强大时。因此，非常认真地处理并修复这些问题确实非常重要。这是第一部分。第二部分是稍微更具**探索性的研究**，那些可能出现在下一个 Gemini 版本或之后版本中的想法，它们可能对模型性能产生更大的影响，但尚未完全验证。如何平衡这两者，我没有一个非常明确的答案。这也具有一定的周期性。例如，当我们进行大规模扩展时，通常会有更多一些探索性研究，因为目前没有需要同时解决的问题。但在我们准备扩展新的架构或模型之前，重点会放在降低风险的最后几个环节上，这非常侧重于执行。

<details>
<summary>Original English</summary>
Since we're on the on this topic of research and how to organize research team to be uh successful. Let's double click on on some of this. So you mentioned tradeoffs. Presumably one kind of trade-off is uh short-term versus long-term. How does that work? How do you all think about that? This is part of what I spend a lot of time thinking about as well. um there's always critical path things to be be done or like this part of the model needs improving or we know this part of the model is is suboptimal. Um so we we invest quite a lot in just fixing those immediate things. There's a few reasons for that. The first one is we know this will make the model better. So it's a fairly safe bet. But also we know that things that don't look quite good or quite perfect often tend up tend to have issues later either when you scale up or when the model just becomes more more powerful. And so actually really having being very diligent about tackling those and and fixing those is is really important. So so that's kind of the the first part. The second part is slightly more exploratory research. ideas that could land in the next version of Gemini or or the version after that that have maybe a bit bigger effect on on the model performance but aren't quite validated. How we balance these is I don't think I have a very clear answer. It's also a bit periodical. So when we're doing a scaleup for example, there's often more slightly more exploratory research because there's nothing right now that that needs to be fixed in parallel. But uh just before we we ready to scale up a new architecture or new model, it's very much like let's derisk the the last pieces. It's very execution focused.
</details>

### 研究与产品的张力

这又是如何运作的？在同一思路下，研究与产品之间的张力是怎样的？正如我们之前讨论的，你们与其他实验室进行着持续的竞赛。那么，是否存在一种压力，比如“哦不，我们需要在 IMO 或其他什么比赛中取得更好的分数”？即一种非常务实的、即时的产品目标，与那些我们知道会随着时间推移而改进模型的努力相比。这到底是如何运作的？我猜这只是同一主题的一个变体。这就是为什么 Google 在这方面几乎没有这种压力。我认为，因为所有领导层都有研究背景，他们非常清楚，是的，在某种程度上你可以强行加速特定的基准测试和某些目标，但最终，研究的进展和成功才是真正重要的。所以，至少就我个人而言，在日常工作中，我从未真正感受到那种压力。

<details>
<summary>Original English</summary>
How does that work? A little bit you know in the same vein uh the tension between um research and and product. So as we're discussing earlier you all are in this constant race with like other labs and so is there presumably some pressure in like oh no no we need to you know have a better score or like win IMO or whatever it is so like a very pragmatic immediate product goal versus stuff that we know is going to improve the model over time like how does that how does that work? I guess it's just a variation of the same theme. This is why like Google as well there's actually very little of that I think because all all of the the leadership has a research background they're very much aware that yes to some extent you can you can force and accelerate specific benchmarks and certain goals but but in the end the progress and making the research work is really what matters. So I personally at least on a day-to-day I I never really feel that that pressure.
</details>

### DeepMind 团队组织结构

DeepMind 的团队是如何组织的？你提到预训练团队有几百人，如果我没听错的话。那么，是否有后训练团队？是否有对齐团队？大家是如何协同工作的？

<details>
<summary>Original English</summary>
How is the team at Deep Mind organized? So you mentioned pre-training as several hundred people if I heard correctly. Is there like a then a post-training team? Is there like an alignment team? How does everyone work together
</details>

### 预训练、后训练与基础设施

总的来说，我们有一个预训练团队和一个后训练团队。在预训练方面，我们有负责模型、数据、基础设施和评估的人员。评估非常重要，我认为人们常常低估了评估研究的重要性，而且做好评估实际上相当困难。然后，是的，有一个后训练团队，当然还有一个庞大的团队负责基础设施和模型服务。

<details>
<summary>Original English</summary>
at a super high level? Um so we have a pre-training team, post- training team. Uh on the pre-training side we have people working on the model on the data the infrastructure evals as well very important. I think people often underestimate the the importance on on eval research and and it's actually quite hard to do this well. And then yes, there's a post training team and and of course there's a large team working on infrastructure and and serving as well.
</details>

### Gemini 3 的架构：混合专家模型

好的，谢谢。我们稍微切换一下话题，正如承诺的那样，让我们深入探讨 Gemini 3。Gemini 3 的内部构造、架构、深度思考、数据扩展等等。从高层面上谈谈架构。Gemini 3，作为一名忠实用户，感觉与 2.5 版本截然不同。是否存在一个重大的架构决策解释了这种差异？然后，你会如何描述这个架构？

<details>
<summary>Original English</summary>
All right, thank you for that. Uh let's switch tax a little bit and uh as promised let's go uh fairly deep into Gemini 3 if you if you will. So Gemini 3 under the hood the architecture deep thinking data scaling all those good things. for starting at a high level on the architecture. Uh so Gemini 3 which um you know as a as a devoted user feels uh very different from from 2.5. Was there a big archite architectural decision that explains the difference? Uh and then how would you describe that architecture?
</details>

### Transformer 与 MoE 的结合

从高层来看，我认为架构与之前的版本相比没有太大变化。这更多地是我之前所说的，即**多种不同改进的结合**带来了巨大的提升。不过，从高层来看，它是一个**混合专家（Mixture of Experts, MoE）架构**，基于 Transformer。所以从这个角度看，如果你足够仔细地观察，你会认出其中有很多原始 Transformer 论文中的元素。

<details>
<summary>Original English</summary>
At a high level I don't think the architecture has changed that much compared to the the previous one. It's more of what I was saying before where uh a few different things come together to to together give a large large improvement. At a high level though it's it's an mixture of expert architecture transformer based. Um so from that perspective if you squint enough you will recognize a lot of the the original transformer paper pieces in that.
</details>

### 混合专家（MoE）架构解析

你能为教育目的解释一下 MoE 架构吗？高层来看，Transformer 有两个主要模块：一个是**注意力模块**，负责混合不同 token 之间的信息；另一个是**前馈模块**，它更多地是提供模型的记忆和计算能力来做出推断，并且这些模块是**逐个 token** 操作的，并行运行。在原始的 Transformer 架构中，这只是神经网络中的一个单一隐藏层。它是一种密集计算，输入被线性变换到一个隐藏维度，应用一个激活函数，然后再次线性变换到密集模块的输出。这就是原始论文。在此之前，在 Transformer 出现之前，就有关于混合专家（Mixture of Experts）的工作。其思想是，你将使用的计算量与参数量解耦。你动态地将计算能力路由到你想要使用的**特定专家**，而不是将它们耦合在一起。

<details>
<summary>Original English</summary>
Yep. Can you describe for people to make this educational what an MOE architecture is? At a high level the the transformer kind of has two two blocks. So there's an attention block which is responsible for for mixing the information across uh times across different tokens and then there's the the then the the feed forward block uh which is uh which is more about giving the the the memory but also the the compute power for the model to make these inferences and and those operate on a single token um at the time. So they they operate in parallel. Um so in in the original transformer architecture this is just a single um hidden layer in a neural network. So it's a dense computation where where the input gets linearly transformed into a hidden dimension. You apply some activation function and that one gets linearly transformed again uh into the output of the dense block. Um so that that's the original paper and then there's a lot of work before transformers as well on mixtron experts and here the idea is um you kind of decouple the amount of compute you use with how how large the the the parameter is to use that and so you you dynamically route effectively to which expert you want the computational power to be used on uh rather than having that coupled.
</details>

### 原生多模态的含义

Gemini 是原生多模态的。从实际角度来看，这意味着什么？模型如何处理文本、图像或视频？这意味着没有专门的模型来处理图像，也没有另一个模型来处理音频，还有一个模型来处理文本。**它是同一个模型，同一个神经网络**，能够一起处理所有这些不同的模态。

<details>
<summary>Original English</summary>
Gemini is uh natively multimodal. In practical terms, what does that actually mean for the model to think about text, images or or videos? Yeah, what this means uh is that there's no specific model trained to to handle images and a different model trained to handle audio, a different model trained to handle uh text. It's the same model, the same neural network that processes all these different modalities uh together.
</details>

### 多模态的成本考量

这是否意味着从 token 的角度来看，成本会更高？这是一个非常好的问题。这其中有两种成本。我认为**好处很大程度上超过了成本**，这也是我们训练这些模型的原因。第一种成本可能不那么明显，那就是**复杂性成本**，以及我之前提到的研究方面的投入，因为你在做更多的事情，尤其是不同的模态以某种方式相互作用，这会影响研究的不同部分，并带来复杂性成本，所以我们必须花时间思考这些问题。第二种成本是，是的，图像的输入尺寸通常比纯文本大，因此实际的计算成本——如果你 naively 地处理——会更高。当然，这其中也有有趣的研究可以进行，关于如何让这些事情变得高效。

<details>
<summary>Original English</summary>
Presumably, there is a a cost aspect to to this. Does being natively multimodal mean um your more expensive from a token perspective? Yeah, this is a really good question. There's kind of two two costs to this. I would say that the benefits largely outweigh the cost here and this is why why we train these models. uh the first cost is maybe less obvious to people but it's this complexity cost and this research uh bit I was talking about because you're doing a lot of more things and especially different modalities interact in some ways this this can interact with different parts of the research and has and has a complexity cost so we have to spend time thinking about these things. The second cost is yes uh images are often uh larger in terms of input size than than pure text and so the the actual computational cost um is if you do it naively is is higher but of course then there's interesting research to be done on on how you make these things efficient.
</details>

### 扩展定律的持续性

我们来谈谈预训练，因为这是你特别关注的领域。从宏观问题开始，我们之前提到了“扩展定律”。几分钟前我们还谈到了 Chinchilla。2025 年，曾有一个备受讨论的观点，即“扩展定律已死”，尤其是在预训练领域。Gemini 3 是否是对此的解答，证明这一切并非如此，并且扩展定律仍在继续？

<details>
<summary>Original English</summary>
All right let's talk about uh pre-training uh since uh it's the area that you cover in in in in particular. So starting with the high level question, we we we mentioned of course the term scaling laws uh towards the beginning of this conversation. We talked about chinchilla a few minutes ago as as well in 2025. there was like this um uh you know much discussed theme of like the the death of scaling laws particularly for for pre-training is Gemini 3 uh the answer that that shows that all of this is is not true and that indeed the scaling laws are are continuing.
</details>

### 规模、架构与数据协同

我认为这些讨论对我来说总有些奇怪，因为我的经验与那些观点不符。我认为我们所看到的是，**规模**是预训练中一个非常重要的方面，也是我们改进模型的方式。但我认为人们过去高估了这一方面。它确实是一个非常重要的方面，但并非唯一方面。所以，规模有助于让你的模型变得更好。规模的好处在于，它相当可预测。这就是扩展定律告诉我们的：随着模型规模的扩大，模型实际会好多少？但这只是其中一部分。其他部分是**架构和数据创新**。这些在预训练的性能中也扮演着非常重要的角色，甚至可能比纯粹的规模更重要。但规模仍然是一个重要因素。

<details>
<summary>Original English</summary>
Yeah, the discussions they have to me were always slightly strange um because my my my experience didn't match those. I think what we've seen is scale is is a very important aspect in pre-training specifically and and how we make models better. Um I think what's been the case though is that people overvalued that aspect. So it is a very important aspect but it's not the only aspect. So so scale will help to make your model better. And what's nice about scale it it does so fairly predictably. And that's kind of what the the scaling laws tell us is as you scale the model how much better will the model actually be? But this is only one part. The the other parts are architecture and data innovation. Um these also play a really really important part in in in the performance of of pre-training and probably even more so than than pure scale these days. But scaling is still an an important factor as well,
</details>

### 预训练的加速动力

是的，我们正在谈论的是预训练，对吧？因为今年我们似乎在后训练中实现了规模化的 RL（强化学习），以及规模化的测试时间计算等等。对于预训练，你是否看到不仅扩展定律没有放缓，而且由于数据和不同架构的进步，还出现了一些加速？

<details>
<summary>Original English</summary>
right? And we're talking about pre-training specifically, right? Because this year we seem to have a scaled RL in in in post- trainining and scaled uh test time compute uh and all those things. like for pre-training you seeing uh not only scaling loss not slowing down but like you see some some acceleration is that is that do I understand this correctly due to data and different architectures
</details>

### 协同效应驱动进展

我认为这些因素是协同作用的。规模是一方面，但模型和数据也会提升实际性能。是的，有时是创新部分带来的好处超过了规模化的收益，有时纯粹的规模化是让模型变得更好的正确答案。这是预训练方面的情况。是的，在 RL 和 RL 规模化方面，我认为我们看到了许多与预训练相同或相似的现象。有趣的是，因为我们有预训练的经验，很多经验教训可以应用，然后我们可以将其中一些知识重新应用于 RL 规模化。

<details>
<summary>Original English</summary>
I think the the way to put this is is these all compound so scale is one axis but this model and data also will make the the the actual performance better and yes sometimes it's the the the innovation part out outweighs the the benefits of scaling more and sometimes just raw scaling is the is the right answer to make the the model better. So that's on the pre-training side and and yes on on the RL and RL scaling side I think we we're seeing a lot of the same things we're we're seeing in pre-training or we saw in pre-training. What's interesting here is because we have the experience of pre-training as a lot of the lessons apply and then we can reapply some of that knowledge to to RL scaling as well.
</details>

### Gemini 3 的预训练数据构成

说到数据，Gemini 3 的预训练数据混合了什么？我认为你们发布过一个模型卡片，谈论过其中的一些内容。那么，它包含了什么？这是一个混合了多种不同类型数据的构成。数据从根本上就是**多模态的**，并且有许多不同的来源。

<details>
<summary>Original English</summary>
Speaking of data, so what is the pre-training data mix on Gemini 3? I think you guys had a a model card out for a bit that that talked about some some of this. Uh so what what what went into it? Yeah, it's a mix of of different things. So the the data is is multimodel uh from the ground up and yeah there's uh many different sources that go into this.
</details>

### 合成数据的使用与数据限制

另一个经典问题是：我们是否即将耗尽数据？总有人问，我们是否有足够的计算能力？另一个问题是，我们是否有足够的数据？今年，合成数据的**使用量明显增加**。在你日常工作或普遍来看，你认为合成数据在哪些方面有帮助，在哪些方面没有？合成数据很有趣。你必须非常谨慎地使用它，因为它很容易用错方式。通常情况下，你会使用一个强大的模型来生成合成数据，然后进行小规模的消融实验来验证合成数据的影响。但一个真正有趣的问题是：你是否能够生成合成数据来训练一个你未来想要的模型，使其比生成合成数据的模型本身更好？我们花了大量时间思考这个问题并进行这方面的研究。至于你问题的另一部分，我们是否正在耗尽数据？我不这么认为。还有更多的数据，我们肯定也在努力。但更重要的是，我认为可能发生的是一种**范式转变**。过去我们处于数据无限的领域，数据可以随心所欲地扩展。现在我们正转向**数据有限**的领域。这实际上极大地改变了研究方法和我们思考问题的方式。一个很好的类比是，在 LLM 出现之前，很多人都在研究 ImageNet 和其他基准测试，那也是一个非常数据有限的领域。因此，那个时期的许多技术现在也变得有趣起来。

<details>
<summary>Original English</summary>
Another classic question in this whole discussion is um are we about to run out of data? So there's always the are we do we have not enough compute? And the other question is do we not have enough data? Uh clearly there's been a a rise in the usage of synthetic data uh this year in your day-to-day work or or perhaps in general. Where do you think synthetic data helps and where does it not help? Yeah. So synthetic data is interesting. You have to be very careful in in how you use it because it's it's quite easy to to to use it in the wrong way. And what's often the case as well with synthetic data is you use a a strong model to generate the synthetic data and then then you run smaller scale ablations to to validate the effect of of the synthetic data. But one of the really interesting question is if can you actually generate synthetic data to make a model that's you want to train in the future which will actually be better than the model that generated the synthetic data in the first place. Can you actually make that one better as well? and and so we we spend a lot of time thinking about this and doing research uh in this direction. The other part of your question uh are we running out of data? I I don't think so. So there's more um we can we are definitely working on that as well. Um but more than that I think what might be happening instead is kind of a shift in paradigm where before we were kind of scaling in the data unlimited regime where where data would scale as much as you would like and we're kind of shifting more to a data limited regime which actually changes a lot of the research and how we think about problems but one one good analogy of this is before LLMs a lot of people were working on on imagelet and and other benchmarks and there was very uh in a very very data limited regime as well. So a lot of techniques from from that time start to become interesting as well
</details>

### 推理过程与模型训练

也许这正是我们之前讨论的，我不知道你能在多大程度上谈论它，但整个行业都存在一个概念：基于**推理过程（reasoning traces）**来训练模型。基本上是强迫模型展示其工作过程，说明它是如何得出某个结果的，然后利用这些信息来训练下一个模型。这是你们在做的事情吗？你认为这有趣或是一个未来的方向吗？很抱歉，我无法评论具体细节。我知道我问的是关键问题。但也许总的来说，这是业内人士在做的事情吗？我相信是这样，而且这也涉及到你之前关于合成数据的问题，以及我们对此的看法是相似的。

<details>
<summary>Original English</summary>
and perhaps that's one of those and I don't know to which extent you can talk about it if not talk about it in in general but there is this concept throughout the industry um of uh training models uh based on reasoning traces. So basically forcing the model to show its work how it got to a certain outcome and then taking that to train the next model. Is that something that you do or that you think is interesting or a future direction? What is your perspective? Yeah, unfortunately I can't comment on on on the specifics. This is I know I'm asking the right questions. uh but maybe maybe in general is that something that people in the industry
</details>

### 数据效率与模型学习

这属于我之前提到的，我相信是这样，并且这也属于你之前关于合成数据的问题，以及我们对此的看法是相似的。也许，不把这个话题引向未来，但另一个重要的问题和主题似乎是：模型如何从更少的数据中学习？这正是我之前提到的，关于**数据有限领域**的讨论，无论是在 DeepMind 还是普遍而言。你是否看到有趣的途径，让模型像孩子一样学习？

<details>
<summary>Original English</summary>
falls in I believe so and and this is also falls into the the previous question around synthetic data you were you were asking and kind of our approach to that is similar And perhaps without taking this into um a futuristic conversation but like another big question and theme seems to be indeed um how can models learn from less data which uh I think what is what you were alluding to talking about the data limited regime again whether at Deep Mind or or in general uh are you seeing interesting approaches to use the the famous analogy a model can learn like a like a child does
</details>

### 数据有限与模型架构

为了澄清我之前所说的，在“数据有限领域”我并非一定指数据量少，而是指**数据量是有限的**。所以范式转变更多是从“我们拥有无限数据”转变为“我们拥有有限数据”。其次，在某种意义上，模型架构研究正是你所提到的。当你改进模型架构时，通常意味着使用相同的数据量进行训练会获得更好的结果；或者，等效地，用更少的数据可以获得与先前模型相同的结果。这是其中的一个方面。但今天，我们所需的数据量仍然比人类可用的数据量高出几个数量级。当然，还有整个进化过程，我发现这些高层讨论很难理解或跟进，因为你需要做出很多假设才能将数据量转换为今天的预训练数据。但至少从第一性原理来看，我们确实使用了比人类多得多的数据。

<details>
<summary>Original English</summary>
just to maybe clarify what I said earlier um in a data limited regime I didn't necessarily mean with less data but we're rather with a finite amount of data so the paradigm shift is more from like we have infinite data to we have a finite amount of data the second point is in in some sense model architecture research is exactly what you mentioned. So when when you make an improvement on the model architecture side, what it typically means is you get a better results a better result if you use the same amount of data to train the model, but equivalently you could get the same result as the previous model by training on less data. So that's kind of the the first aspect of that. But it it is true in terms of the the volume of data needed today. We're still orders of magnitude higher than than what the human has available to. Of course, there's the whole evolution process as well, which I I find these high level discussions quite hard to to understand or follow because you have to make so many assumptions to to to convert that amount of data into what is today's pre-training data. But at least at first order, it does seem like we're using a lot more data than than humans do.
</details>

### 预训练的未来方向

在整体预训练进展方面，你对业界还有哪些令人兴奋的方向？我认为 Gemini 1.5 在**长上下文能力**方面取得了巨大飞跃，这确实能够赋能模型和代理（agents）完成诸如处理代码库等工作，因为上下文长度会显著增长。我认为未来一年左右，在这一领域将会有更多创新，以提高长上下文的效率，并扩展模型的上下文长度本身。因此，在能力方面，我认为预训练有很大的贡献空间，并且非常有趣。同样，我认为在注意力机制方面，我们最近取得了一些非常有趣的发现，我认为这将塑造我们未来几个月的研究方向，我个人对此非常兴奋。再次强调，我认为我开头提到的观点很重要：事情的进展是**多种因素的综合结果**。我们已经看到许多中小型改进，比如我们解决了某个问题，修复了某个 bug，或者某个有趣的研究显示了有希望的结果。所有这些因素的结合，我认为将推动大量的进展。

<details>
<summary>Original English</summary>
What other directions uh in overall pre-training progress are you uh excited about throughout the industry? Yeah, I think the one thing is in Gemini 1.5 I think we we had a really good leap in in the long context capabilities of the model and I think that's really enabling um the ability of of models and and agents today uh to do this this work where you have maybe a code base and you do a lot of work on it so your context length really grows. I think there's going to be a lot more innovation on that side in the next year or so to to to make long context more efficient but also just to to extend the context length of of models themselves. So so that on the capabilities front I think it's something where where pre-training specifically has has a lot to offer and and is very interesting. Relatedly, I think on for us at least on the attention side, uh we've made some some really interesting discoveries recently that I think will will shape a lot of the research we're doing in the next few months and I'm I'm personally very excited about that. Yeah. Again, I think I want to emphasize the point I made towards the beginning, but the way things work is it's really a culmination of of many different things. So there's a lot of small medium-sized things that we can already see coming up where I think we fixed this issue, we fixed this bug, this is an interesting research that showed promising things and and these all of these things coupled I think will will drive a lot of the progress. Again,
</details>

### Retro 与 Gemini 3 的演变

你提到了 Retro，我们之前也谈过。你是 Retro 的合著者之一，Retro 关注的是效率和更小的模型做更多事情。而现在你身处 Gemini 3 的世界，拥有海量数据和极长的上下文窗口。你认为这种拥有更大模型、更大上下文窗口的范式是否会消除对 RAG（检索增强生成）和搜索的需求，将一切都融入模型本身？显然，有企业数据方面的原因，但总的来说……

<details>
<summary>Original English</summary>
it's interesting you thinking about retro that we talked about a bit earlier. you know, you're you're the co-author of of of of retro, which was about efficiency and like smaller models doing more and now you are in the world of Gemini 3, which is like massive amounts of data and and training in very long context windows. Do you think that uh this paradigm of having again larger models, large context windows effectively obiates the need for kind of rag and search um and that everything gets folded into the model. I mean obviously there's a corporate data part but uh in general
</details>

### 检索与预训练的未来

这里有一些有趣的问题。首先，我认为 Retro 真正关注的是**信息检索**，而不是存储。它并非旨在让模型变小。它是关于我们如何在预训练阶段利用模型进行更多的推理，而不是仅仅存储知识。所以，这在今天仍然非常重要。有趣的是，预训练的迭代周期曾经比后训练慢得多，直到最近。因此，在预训练阶段进行重大更改的成本很高，涉及风险和时间。然后，你有 RAG 或搜索等方法，可以在后训练阶段进行，并更快地迭代，从而获得非常强大的性能。我认为，从根本上说，我相信长期的答案是**以可微分的方式端到端学习**，这意味着可能在未来，预训练或任何形式的训练都将学会检索，并将其作为训练的一部分，学会进行搜索，作为大规模训练的一部分。我认为 RL 规模化可能开启了这个过程，但我认为还有更多工作要做，尤其是在架构方面。但这将在未来几年内实现，而不是立即。我想强调的一点是，人们经常谈论模型架构，这无疑是使预训练更好的一个方面，但还有其他方面，如基础设施、数据和评估，它们并不总是得到同样的关注。特别是评估，极其困难，而且在预训练中更加困难。因为它需要弥合两个差距。一方面，我们使用的评估或训练的模型通常比最终扩展的模型要小且能力较弱，这意味着评估必须能够预测最终性能，或者仍然对大型模型有效，并指向正确的方向。因此，它必须是一个好的代理。然后还有第二个差距，即当我们评估预训练模型时，还存在一个**后训练差距**。模型的使用方式是，它们并非仅在预训练后使用。之后还有更多的训练。因此，我们在预训练中使用的评估或预训练模型必须是之后情况的良好代理。因此，在评估方面取得进展非常重要且相当困难，并且也推动了我们在衡量模型或数据方面的实际改进方面取得了很多进展。

<details>
<summary>Original English</summary>
there's some some interesting questions here. So so first of all I think retro was really about retrieving information rather than storing it. Not necessarily about making models smaller. So it's about how we can use the model to do more reasoning already in in a pre-training sense of reasoning rather than just just store the knowledge. So so this is still very much um the aspect today the interesting part is um the the the iteration cycle maybe of pre-training uh used to be a lot slower than than that of post- training until until fairly recently. And so making these large changes on the pre-training side is is quite costly in terms of risk and and how long it takes. And then you have approaches like rag or search which you can do during post training and iterate much more quickly on which which give very strong performance as well. I think deep down I I do believe that the long-term answer is is to learn this uh in differentiable end way which means probably doing pre-training or or whatever that looks like in the future learn to retrieve as part of the the training and learn how to do search as part of the the large part of of training and I think that's kind of RL scaling maybe starts that process but I think there's a lot more to do also on the architecture side but this is something that we'll see in the next few years and not immediately I would say the One thing I I want to highlight is people often talk about model architecture and and that's definitely one part of what makes pre-training better but there's other parts as well infra and data and eval specifically that don't always get the same mention. Evals specifically is extremely hard and it's even harder in pre-training I would say because it kind of has these two gaps uh you need to to close. So on the one side the evals we use or the models we train regularly are much smaller and less powerful than than the when we scale up. So that means the eval has to be predictive of what the performance or have to still work for the large model and point in the right direction. So have to be a good proxy on that side. And then there's a second gap as well which is when we evaluate pre-training models there's a post-training gap as well. So the way model the models get used is they don't just get used after pre-training. There's more training happening after. And so the evals we use in pre-training or pre-trained models have to be good proxies of what happens after as well. And so making progress on evals is is is really important and quite hard and has also driven a lot of the progress we have in terms of being able to measure what an actual improvement is on the model or on the data side.
</details>

### 评估的挑战与内部构建

评估是内部构建的吗？是的，在很大程度上是这样。而且越来越是这样，因为我们发现外部基准测试可以暂时使用，但很快就会被污染。它们开始在不同的论坛或网络的各个部分被复制。然后，如果我们基于这些进行训练，就很难检测到泄露的评估。所以，唯一真正保护自己免受作弊并认为自己做得比实际更好的方法，就是创建**保留的评估集**，并且不真正使用它们。

<details>
<summary>Original English</summary>
And eval internally built like you have your own set of evals. Yes. Uh to a large extent and more and more so because um what we found is that uh external benchmarks that you can use them for for a little while but very quickly they they become contaminated. So uh they start to to be replicated on different forms different forums or different parts of of the web and then if we end up training on those it's really hard basically to detect uh leaked eval. So, so the only way you really have to protect against cheating yourself and thinking you're doing better than you are is by actually creating held out emails and and not really keeping them held out.
</details>

### 对齐的关注点

同样，对齐（alignment）是你们在预训练阶段会大量考虑的问题吗？还是更多地是后训练的讨论，或者两者兼有？我可以说，**绝大部分是后训练的范畴**，但肯定有一些部分与预训练相关。我不能透露太多细节，但有些部分与预训练相关，我们也会考虑。

<details>
<summary>Original English</summary>
In the same vein, is alignment uh a part of uh what you all think a lot about at the pre-training level uh or is that more of a post-training kind of conversation or both? It's a majority of post training I would say, but there's definitely some some parts of it which are relevant of pre-training. I can't go into too many details here but some parts are relevant to pre-training and and we do think about that as well. Yeah.
</details>

### 互联网数据与模型“知识”

那么，在一个非常简化的层面上，我总是好奇，在 Gemini 或其他模型的背景下，如果核心数据集是互联网，互联网上有很多糟糕的东西，那么对齐是否意味着 101% 的事情是，有些东西你就是不包含在模型里？这是一个有趣的问题，我没有一个确切的答案。但你**不希望模型去做那些糟糕的事情**。所以，在根本层面上，你需要模型了解那些事情，这样它才知道那些是什么，并知道要避开它们。否则，当用户提到糟糕的事情时，模型甚至不知道在谈论什么，可能就无法说出“这是糟糕的事情”。

<details>
<summary>Original English</summary>
And at a very simplistic level I always wonder again in the context of Gemini or otherwise if the core data set is the internet there's a lot of terrible things on the internet is alignment 101 that there's stuff that you just do not include in the model. This is an interesting question and I don't think I have a definitive answer but you don't want the model to do these terrible things. So at the fundamental level you did you do need the model to know about those things. So you have to train a bit at least on those so that it knows what those things are and knows to stay away from those right. Um otherwise when a user would mention something terrible the model wouldn't even know what what it's talking about and then might not be able to say this is something terrible right
</details>

### Deep Thinking 模型

我们来谈谈 Deep Thinking 模型，也就是在 Gemini 3 发布几天后发布的那个思考模型。首先，这是一个不同的模型，还是同一个模型的一部分？我们应该如何理解它？我不能评论太多。

<details>
<summary>Original English</summary>
let's talk about deep think like the the thinking model that was released a few um days after Gemini 3. So first of all is that different model or is that part of the same model? How should one think about it? I'm not allowed to I can't comment too much.
</details>

### 模型思考过程

当模型进行思考时，你等待 10 秒或 20 秒，这期间发生了什么？是的，我认为这在之前的播客中也讨论过。它是关于**生成思考过程**。所以，不是仅仅在模型深度或模型层面进行计算，你还进行计算，并允许模型在序列长度方面进行更多思考。模型实际上开始形成假设，测试假设，调用一些工具来验证假设，进行搜索调用等，然后在最后可能会展示思考过程，从而为用户提供明确的答案。

<details>
<summary>Original English</summary>
What happens when uh the model thinks and you know you wait for 10 seconds or 20 seconds or whatever time what happens behind the scenes? Um yes. So I mean I think this has been covered quite a bit in in in some of your previous podcasts as well the on the it's about uh generating thoughts and so um rather than just doing compute in in the the depth or in the model side you also do compute and and allow the model to to think more on on the on the sequence length side of things. So the model actually starts to form hypothesis, test hypothesis, invoke some tools to validate the hypothesis, do search calls etc and then um at the end may be able to to view the thought process to provide a definite answer um to the user.
</details>

### 代理（Agentic）AI 与 Anti-gravity

行业已经围绕着“训练思考”的范式标准化了。你能稍微谈谈这个代理（agentic）部分和 Google 的 Anti-gravity 吗？你觉得有什么有趣的地方？人们应该了解它什么？是的，这可能就是我之前提到的，尤其是在我自己的工作中。我认为这很有趣。我们日常工作很大一部分是执行性的，比如监控实验等。我认为这是我至少看到最多影响的地方。回到预训练的话题。我认为**感知和视觉**方面对于这一点非常重要，因为现在你要求模型与计算机屏幕进行交互。因此，能够很好地进行屏幕理解至关重要。所以，这是预训练方面的一个重要部分。

<details>
<summary>Original English</summary>
The industry has normalized around that that paradigm of of train thought that's for yeah Can you talk a little bit about the agentic part of this and Google anti-gravity? What do you find interesting about it? What should people know about it? Yeah, this is I guess what I was mentioning before around my own work especially. I think that's that's interesting. A lot of the the work we do on a day-to-day basis is more execution based babysitting experiments etc. And I think this is where where I at least see see the most impact from those. Bring it back to the topics of of pre-training. Um I think that the perception and and vision side is very important for this because now you're asking models to to interact with with computer screens. So being able to to do screen understanding really really well is is critical. Um and so so that's that's an important part on on the printing side at least.
</details>

### Vibe Coding 与模型“感觉”

在 Anti-gravity 中，有一个“Vibe Coding”方面，它真的很有“Vibe”，就像你甚至不真正了解发生的事情一样。这是 Vibe Coding 的问题吗？这是预训练问题吗？还是仅仅是后训练问题？如何将“Vibe”构建到模型中？这是一个有趣的问题。我认为你可能会问五个不同的研究者，得到五个不同的答案。还有“大模型领域”（large model field）的说法，人们称之为，尤其是 GPT 4.5 历史上就有一些。也许更大的模型感觉不同。我不会这样具体地定义它，但我认为“Vibe”归结于这一点，而且实际上，预训练在今天对模型的“感觉”方面可能扮演着比后训练更大的角色。我认为这总体上是这样，特别是对于 Vibe Coding，我认为这更多地是 RL 规模化和后训练的问题，你可以获得大量数据并训练模型做得很好。

<details>
<summary>Original English</summary>
And in uh anti-gravity there's a whole um vibe coding aspect truly vibes in that like you don't even really see what happens when you ask is is vibes same question. Is that a pre-training thing? Is that just a post-training thing? How do you build vibes into a model? Yeah, this is interesting. I think you can probably ask five different researchers and and you'll get five different answers. Um there's also this this notion of uh large model field. Um people call this especially I think GPT 4.5 historically had some of this presumably where where larger models maybe feel differently. I I wouldn't actually just I I wouldn't put it in in this these terms specifically, but I think vibes comes down to this and actually pre-training probably plays a larger role today in some of that in how the model feels and and in generally than than post- training. I think this is yeah, this is in general for for VIP coding specifically, I think that's that's maybe more of an RL scaling and and post- training thing where where you you can actually get quite a lot of of data and and train the model to do that really well.
</details>

### 持续学习与模型更新

总的来说，也许是这次对话的最后一部分，我很好奇事情的总体发展方向。今年 NeurIPS 上讨论的一个关键主题是**持续学习**（continual learning）。我很想听听你的看法，特别是从预训练的角度来看。因为我们正处于这样一个范式：每隔几个月或几年，我们——我指的是你们——就会训练一个非常大的新基础模型。首先，什么是持续学习？其次，如果持续学习成为现实，它将如何影响模型的再训练？

<details>
<summary>Original English</summary>
So, zooming out uh a little bit uh maybe for the last part of this um conversation, I'm curious about where things are going in in general, there was a u a key theme discussed at New RIPs this year around continual learning and I'm curious about your perspective, especially from a pre-training perspective, right? Because we are in this paradigm where like every few months or years we and by we I mean you train a uh a very large new base model. First of all, what is continual learning? And two, how does that impact um retraining if continual learning becomes a thing?
</details>

### 持续学习的实现方式

我认为持续学习是关于**用新知识更新模型**，当新知识被发现时。比如，明天一项新的科学突破被做出，我们昨天训练的基础模型在预训练阶段不会知道它。我认为在过去几年里，这方面已经取得了很大进展。这主要是在后训练阶段，通过搜索工具，然后进行搜索调用，模型就能在某种意义上访问这些新信息。这与我们之前谈到的 Retro 项目所做的类似，通过检索数据并尝试将知识库外部化，并结合推理部分。这是第一点。我认为第二点是关于预训练本身，正如我之前提到的长上下文能力。一种实现方式是，如果你能不断扩展用户的上下文，模型就能获得越来越多的信息，从而在某种程度上实现持续学习。当然，还有一种更根本的范式转变。也许这就是人们讨论的：你是否能改变训练算法，使其能够持续地在来自世界的数据流上进行训练？

<details>
<summary>Original English</summary>
Yeah, I guess continual learning is about um updating the the the the model with with new knowledge as as new knowledge is discovered, right? Let's say a new scientific breakthrough is made tomorrow. the base model we trained yesterday wouldn't actually know about it in in its pre-training first. I think a lot of progress has been made on on this front since in the last few years. I think this is mostly around post training around search use search tools and then and make search calls then they would have access to that uh new information in some sense. This is also what retro that we talked about was doing by by retrieving data and trying to externalize the the knowledge corpus with the with the reasoning part. So so that's the first part. I think the second part is on on the pre-training side specifically is is what I was mentioning on long context as well and one way of doing this is if you can keep expanding the the context of the user the model keeps getting more and more information in that context and so you kind of have have this uh continual learning aspect part of that. Um but then of course there's there's a more of a paradigm shift. Uh maybe uh this is what people discuss is can you change the the training algorithm such that you can continuously train them on on a stream of of data coming from from the world basically
</details>

### 当前研究的热点

除了持续学习，你认为当前研究中还有哪些热门、有趣或引人入胜的方向？有很多小方面的进展正在累积。这是我首先想到的，而且历史上这确实推动了进步。所以我不会低估这一点。我之前提到的关于长上下文架构和研究，以及注意力机制，都是预训练方面的重要方面。然后，从数据无限到数据有限（或有限数据）的范式转变，我认为这将带来很多变化，并且有很多有趣的研究。这只是预训练方面。另一个今天非常有趣的方面是，模型的使用量正在迅速增长，因此我们在预训练方面也必须更多地考虑模型的服务成本，以及如何使其更便宜地提供服务并消耗更少的资源。

<details>
<summary>Original English</summary>
beyond the continual learning. What what do you think is hot slash interesting or intriguing in current research uh today? Yeah, there's there's a lot of again there's a lot of small things right now that that accumulate. So that's that's kind of the the first thought that that comes to my mind and and that historically has really driven progress. So I wouldn't just bet against that uh continuing to to drive progress. The the things I mentioned before around the long context architecture and long context research is one aspect I think on the the attention mechanism as well on the pre-training side. And then the this paradigm shift from uh infinite data to to the limited data or finite data regime is something as well I think where where a lot of things will change and there's a lot of interesting research. Um that's kind of on the pre-training alone side. The other side which is quite interesting today is these models become the amount of people using these models is growing quite rapidly and so more and more what we have to think about on the pre-training side as well is how expensive is the model to to use uh to serve and and have really deployed at a large scale and what side what things on the pre-training side specifically can we do to to make this model have better quality and maybe be cheaper uh to serve and and consume fewer resources uh during inference
</details>

### 对未来研究者的建议

对于任何正在收听的博士生或想在几年后成为你这样的研究者，你认为他们应该关注哪些问题？哪些问题不是一两年内就能解决的，而是更具长远意义的？越来越重要的是，**能够进行研究，并意识到系统方面的问题**。我们现在正在构建相当复杂的系统。因此，能够理解从 TPU 到研究的整个技术栈是如何工作的，这是一种“超级能力”，因为它能让你发现其他研究者可能没有注意到的不同层之间的差距，并且能够通过你的研究想法一直推理到 TPU 堆栈。能够做到这一点的人，我认为会产生巨大的影响。所以，在专业化方面，真正要考虑的是模型研究的**研究、工程和系统方面**，而不仅仅是纯粹的模型架构研究。这是第一点。我认为，就我个人而言，我仍然对我们开始时提到的那种**检索研究**很感兴趣，当时 Retro 项目认为时机尚未成熟，但现在情况正在改变。我认为在未来几年内，像 Gemini 这样的领先模型可能会真正变得可行。

<details>
<summary>Original English</summary>
during inference for any uh student or like yeah PhD student listening to this uh if they want to become you in a in a few years what problems do you think they should think about or focus on that's not you know like a year or two out but like more interesting sort of a few years out? One thing that's that's becoming increasingly important is being able to do research but being aware of the system side of things. So we're building these these fairly complicated systems now. So being able to understand how the stack works all the way down from TPUs to research is kind of a superpower uh because then you you're able to kind of find these gaps uh in between different layers that other people weren't necessarily able to see, but also to reason through the implication of your research idea all the way down to to the to the TPU stack. and and people that can do that well I think have have a lot of impact in general. So in terms of like specialization it's really thinking about this research engineering and and systems aspect of the model research and not just the pure model architecture research. That's one. I think personally I I still have a lot of interest in kind of this retrieval research as well that we started with retro and I think wasn't quite ripe until now but the things are changing and I don't I just think it's it's not unreasonable to to think in the next few years something like that might actually become viable for for a leading model like Germany.
</details>

### 检索研究的成熟度与未来

它为什么不成熟？又为何可能改变？我认为这与我之前提到的复杂性有关，以及**后训练阶段的迭代速度更快**。所以，正如我所说的，通过搜索和后训练数据，你可以用一种更简单的方式为模型提供非常相似的能力。随着后训练和 RL 规模化的发展，也许这会再次转向预训练方面。你认为现在 AI 领域有哪些领域被过度投资了？即，哪些方面存在不合理之处，而行业却在投入资金？

<details>
<summary>Original English</summary>
And why was it not ripe and why may that change? I think that's that's around the complexity side of things I was mentioning and also the fact that uh all the capabilities it brings you can iterate much more quickly in in post- training. So so what I was saying with search and and post- training data you can you can give very similar capabilities to the model in a much simpler way and um as post training grows and and RL scaling grows as well maybe that that shifts again towards more on the on the pre-training side. Do you think there are areas of of AI right now that are overinvested in where where there's a disconnect between what makes sense and where the industry is actually going and investing dollars in?
</details>

### 避免过度专业化

我认为情况已经好多了。大约两年前，我看到的是人们仍然试图创建**高度专业化的模型**来解决那些通用模型在半年或一年内就能解决的任务。我认为人们现在已经意识到了这一点，并且更倾向于认为，对于那些不需要极端专业化模型的通用任务，使用通用模型，也许是下一代版本，就能完成。这意味着，在**如何使用模型和进行集成**方面的研究变得越来越重要，以及如何让模型和这些集成更加**健壮**，能够容忍错误并从中恢复。

<details>
<summary>Original English</summary>
I think it's got a lot better. I think maybe two years ago what I was seeing is is people were still trying to very much create specialized models to to solve tasks that were maybe within half a year or a year of reach of of generalist models. And I think people have caught up to that much more and now kind of believe that for generalist task or tasks which are not don't require extreme specialized models trying to use a generalist model and and maybe not the current version but the next version might be able to do that. uh and then so so what that means is research in in terms of how how you use models and and the harness etc is is becoming increasingly important and also how you make models and these harnesses more robust um to making errors and recover from from such errors.
</details>

### 给初创公司的建议

在这方面，你对初创公司有什么建议或推荐吗？从创始人或风险投资者的角度来看，有一种感觉是基础模型越来越强大，并且在多个数据集上进行了训练。以前模型只能对话，但现在它能处理财务工作、股本表等等，这似乎缩小了初创公司的可能性空间。你对此有什么看法？

<details>
<summary>Original English</summary>
Yeah, in that vein like do you have any uh advice or recommendation for startups? Right. So seen from the perspective of a founder or the the VCs who love them there is this um feeling that the base models are becoming ever so powerful and then trained on like multiple data sets. So it used to be uh you know the model is able to converse but like now it's able to do financial work and cap tables and that kind of thing which seems to shrink the area of possibility for for startups. Do you have thoughts on that?
</details>

### 寻找未被充分开发的领域

我认为可以看看一到一年半前模型能做什么，再看看今天模型能做什么，并尝试进行推断。我认为模型正在改进的领域将继续改进。然后，可能有一些领域进展不大，这些可能是有趣的研究领域。我现在没有具体的例子，但这会是普遍的建议。

<details>
<summary>Original English</summary>
Yeah, I think so. Maybe have look at what models were able to do a year or a year and a half ago and then look at what models are able to do today and try to extrapolate that. I think the models the areas where the models are improving I think will continue to improve and then there's maybe some areas where there's not been that much progress and that might be more interesting areas to to do research. I I don't really have a specific example in mind right now but that would be the general advice.
</details>

### 个人旅程与未来展望

对于你个人的旅程，你对未来一到两年有什么期待？我非常喜欢我日常工作的其中一点是与**许多人共事**，并能向许多研究者学习。这在很大程度上驱动着我。每天我来上班，都会与一些非常聪明的人交谈，他们教会我以前不知道的东西。我真的很喜欢我工作的这一部分。正如我多次提到的，有**太多不同的因素在协同作用**，并且在许多方面仍有改进的空间。我真的很好奇，因为我现在看不到这种工作方式停止带来进展的迹象。能够亲眼见证这一切，并看到它能将我们带多远，这真的很有趣。但至少在未来一年左右，我看不出任何减缓的迹象。

<details>
<summary>Original English</summary>
What are you excited about for the next sort of like year or two in terms of like your personal sort of journey? What I like very much about my daytoday is uh working with many people and and being able to to learn from from a lot of researchers. So that's what drives me to to a large extent. Every day I come to work and I talk to to to really really brilliant people and they teach me things that I didn't know before. Uh and and so that that's I I really like that part of my job. what I was saying multiple times at this point, but there are just so many different things that will compound and and different things where there's headroom to improve. I'm really really curious because I right now I don't really see an end in sight for for that kind of line of work to to continue giving us progress. So actually being able to see this through and and see how far this can take us is really interesting. But at least for the next year or so, I I don't see this slowing down in any way.
</details>

### 结语

太棒了。这感觉是一个很好的结束点。Sebastian，非常感谢你来到播客。非常感谢。谢谢你。我是 Matt Turk，再次感谢收听 Mad Podcast 的这一期节目。如果你喜欢，我们将非常感激你考虑订阅（如果你还没有的话），或者在你观看或收听此节目的任何平台留下积极的评价或评论。这真的能帮助我们发展播客并邀请到优秀的嘉宾。谢谢，我们下期节目再见。

<details>
<summary>Original English</summary>
Great. Well, that feels like a wonderful place to leave it. Sebastian, thank you so much for being on the podcast. Really appreciate it. That was fantastic. Thank you. Thank you much. Hi, it's Matt Turk again. Thanks for listening to this episode of the Mad Podcast. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already, or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks, and see you at the next episode.
</details>