---
area: society-systems
category: geopolitics
companies_orgs:
- Meta
- Qwen
- Deepseek
- Moonshot AI
- Allen Institute for AI
- AI2
- Zhipu AI
- Ant Group
- Meituan
- Nvidia
- OpenAI
- Airbnb
- Cursor
- AMD
- Hugging Face
- Anthropic
- Google
- Amazon
- University of California, Berkeley
- University of Washington
- National Science Foundation
- Bloomberg
- The Economist
date: '2025-11-20'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The MAD Podcast
- Interconnects
people:
- Matt Turck
- Nathan Lambert
- Luca Soldaini
- Paul Allen
- Martin Casado
- Richard Sutton
- Dario Amodei
products_models:
- Llama
- Olmo 3
- Kimmy
- Qwen 3
- Gemma 3
- Nemotron Nano V2
- Chat GPT
- Gemini Flash
- Tulu
- GLM 4.5
- Composer 2
- GitHub Copilot
- Alexa
- Semantic Scholar
- Malmo
- Mmo act
- ASA
- TensorFlow
project:
- us-analysis
- china-analysis
- geopolitics-watch
series: ''
source: https://www.youtube.com/watch?v=HGoQnDFHTVA
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: 艾伦人工智能研究所（AI2）的 Nathan Lambert 和 Luca Soldaini 深入探讨了他们最新发布的 Olmo 3 模型家族。本期内容不仅详细介绍了
  Olmo 3 的“完全开放”理念——超越“开放权重”，提供包括数据、训练方法和中间检查点在内的一切资源，还将其置于当前地缘政治格局下进行分析。面对 Qwen、Deepseek
  等中国开源力量的迅速崛起，以及 Meta Llama 未来不确定性带来的影响，美国开源生态系统正面临严峻挑战。文章详细拆解了构建现代AI模型的六阶段技术流程，并就AI的未来、复杂性以及AGI的发展路径提出了深刻见解。
tags:
- china
- geopolitical-competition
- large-language-model
- model
- open-source-ai
title: 美国能否赢得开源AI竞赛？AI2发布Olmo 3的深度解析
---

### 引言：地缘政治背景下的开源AI新篇章

**Nathan:** Meta 领导层发生了重大变动，Llama 的未来变得不明朗。这导致影响力出现了一个巨大的真空，而这个真空已经被 Qwen、Deepseek、Kimmy Moonshot 等公司所填补，尤其是在那些试图用开源模型构建应用的人群中，这是一个巨大的转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There was a big change in leadership at Meta and Llama's future is unknown. So there's this big vacuum of influence which has been absorbed by the likes of Quen, Deepc, Kimmy Moonshot in terms of like who's trying to build things with open models and that's a big shift.</p>
</details>

**Nathan:** 我们今天发布 Olmo 3 系列，和我们之前发布的每一个模型一样，我们不只是发布最终模型。我们公布了所有细节。这像是第一个完全开放的推理模型，我们展示了如何进行**RL**（Reinforcement Learning: 强化学习，一种机器学习方法，智能体通过与环境互动学习以最大化奖励）和基础模型的构建，以及如何从更大的“思考模型”中进行蒸馏。在美国国内有很多讨论，认为我们有充分的理由应该掌握整个技术堆栈，这其中就包括开源模型。人们正开始真正意识到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're launching Almo 3 family today and just like every single models that we released before, we're not just releasing the final models. We're putting out all the details. It's like the first fully open reasoning model where we show doing RL and base models and distilling from bigger thinking models and there's a lot of discussion within the US that there's like good reason that we should own the whole technological stack and that includes open models. There are people that are really starting to wake up to this.</p>
</details>

**Matt:** 大家好，我是 Matt Turk，欢迎来到 Mad 播客。今天我们有一期特别节目，邀请了来自艾伦人工智能研究所（AI2）的 Nathan Lambert 和 Luca Soldaini，共同探讨 OMO3 模型家族的发布。在大多数开源版本仅仅是“开放权重”的时代，AI2 正在全力投入真正的开放性——模型、数据、方法和中间检查点。在这次对话中，我们深入剖析了 Olmo 3 的架构、“思考模型”的兴起，以及美国开源力量与 Qwen、Deepseek 和 Kimmy 等迅速崛起的中国巨头之间日益激烈的竞争。这是一次罕见的、完全透明的审视，揭示了现代人工智能模型究竟是如何运作的。请欣赏这期与 Nathan 和 Luca 的精彩对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Matt Turk. Welcome to the Mad Podcast. Today we have a special episode with Nathan Lambert and Lucas Sanei from the Allen Institute for AI for the release of the OMO3 model family. At a time when most open source releases are just open weights, AI2 is going all in on real openness, models, data, recipes, and intermediate checkpoints. In this conversation, we break down almost 3's architecture, the rise of thinking models, and the increasingly high stakes race between US open source efforts and fast advancing Chinese powerhouses like Quinn, Deepseek, and Kimmy. This is a rare, fully transparent look at how modern AI models actually work. Please enjoy this great episode with Nathan and Luca.</p>
</details>

### Olmo 3 家族发布：一个真正全开放的模型

**Matt:** 两位，欢迎来到播客。今天是一个重大的发布日，也是开源人工智能的重要一天。请给我们介绍一下你们今天发布的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Guys, welcome to the pod. Uh, big announcement today and a big day for open source AI. Walk us through what it is that you're releasing today.</p>
</details>

**Luca:** 谢谢邀请。是的，我们今天发布 OMO 3 家族。这是我们最新的开源模型系列。我们有一个 7B 模型和一个 32B 模型。我们有能够思考的模型，也有能够遵循指令和使用工具的模型。就像我们之前发布的每一个模型一样，我们不只是发布最终模型，我们还发布了获得这个模型的完整“配方”。包括数据、中间状态、评估框架，所有细节，所有人们需要知道的、用来制造这类模型的点点滴滴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for having us. Yeah, we're launching OMO 3 family today. Um, so this is our latest uh family of open source models. We have a 7B model, a 32B model. We have models that can think, models that can follow instruction and use tools. Um and just like every single models that we released before um we're not just releasing the final models we are releasing you know the entire recipe we follow to get this model. So the data the intermediate states the evaluation frameworks all the details all the bits that uh people need to know to make uh models like</p>
</details>

**Luca:** 具体来说，我们推出了五个旗舰检查点。其中两个是基础模型，也就是在它们被训练来响应用户指令之前的模型。这对于那些希望利用我们花费在预训练上的大量计算资源，然后根据自己的用例进行定制的人来说非常有用。其中一个是较小的 7B 模型，更高效，微调一个用例大约需要一个 **GPU**（Graphics Processing Unit: 图形处理器，最初为图形渲染设计，现广泛用于AI计算）。还有一个较大的 32B 模型，微调大约需要一个装有八个 GPU 的服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">specifically this uh 3 base uh 7B and 32B. So what what are those? probably we have say five you know flagship uh checkpoints that we're putting out. Two of them are base models. That means there these are models before they get trained to respond to user instruction. Um so these are really good for folks who want to take sorry the bulk of our compute that we spend in pre-training these models and then they want to customize them for their use cases. So these are a two-based model. There's smaller one, there's more efficient uh that takes about one GPU to fine-tune for use case. And then there's a larger 32B that takes about one box of AGPUs to fine-tune.</p>
</details>

**Luca:** 在此之上，我们还有针对各种用例进行了微调的后训练模型。有几个是“思考模型”，即 Olmo 7B Think 和 Olmo 32B Think。这些模型，就像市面上许多推理模型或提示模型一样，可以在推理时花费更多的计算能力来思考一个问题，解决它，然后给你最终答案。此外，我们还发布了一个 7B 的指令模型。这是一个更直接的模型，能提供更快的响应。所以它非常适合批量数据处理或那些希望响应延迟低的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then on top of that, we have our fine-tune our uh post train models for various use cases. So there's models, there are a couple of models that are thinking models. Um so there's almost 7B think and almost 32B think. Um these are models that um you know just like a lot of the reasoner or like prom models out there uh they can spend um compute power uh inference time um to sort of think through a problem and solve it and then give you an answer at the end. Um and also we are releasing a 7B instruct model. This is a more like immediate model that gives you faster um responses. So, it's really good for like bulk data processing or or use cases where like you want to have like low latency in your responses.</p>
</details>

**Nathan:** 我想为这些内容补充一些背景。我觉得 Luca 对他们的基础模型说得太谦虚了。今年有更多人发布开源模型，尤其是大型开源模型，但有些人开始不发布基础模型了。我们有很多像 Deepseek 那样巨大的 **MOE**（Mixture of Experts: 专家混合模型，一种神经网络架构，由多个“专家”网络和一个“门控”网络组成）基础模型和一些小型基础模型。但举个例子，Qwen 3，它被大家公认为研究和行业标准，他们就没有 32B 的基础模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to add more color to these things. I think Luca is underelling their base model. Um, we're going to talk more about this, but over this year a lot more people have been releasing open models and especially large open models, but um some people are starting to like not release base models. We have a bunch of like deepseek size giant MOE base models and a bunch of small base models. But for example, Quen 3 which everyone accepts as like a research standard and an industry standard like they don't have this 32b base model.</p>
</details>

**Nathan:** 这个基础模型的质量与现有最好的模型相当，比如 Qwen 2.5 32B 仍然是最好的基础模型。我们的优势在于我们拥有所有数据，所以人们可以进行某种形式的持续预训练，并希望能更容易地修改和理解其行为。这对我们来说很令人兴奋，它不仅可能是一流的，而且还是一个完全开放的东西，这在 AI2 并不常见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um this base model is similar in quality to the best available which is like quens 2.5 32b is was still the best base model. Um the upside is that we have all the data so people can actually do some sort of like continued pre-training and hopefully make it a bit easier to modify and understand the behavior. So that's exciting for us though like the actual potentially best-in-class thing. It's also a fully open thing which is not something we get to say a lot at AI too.</p>
</details>

**Nathan:** 我们的 7B 指令模型在同尺寸类别中也是世界顶尖之一。Llama 3.1 8B 是 Hugging Face 上有史以来使用最多的模型之一，而我们的模型应该比它更好。在我们的测量中，我们看到它优于 Llama 3.1 8B。希望这对用户来说也是如此。我们可能没有达到前沿规模，但这些模型在世界上仍被广泛使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes it's like oh we replicated this and now you can do it yourself. Like this is actually a good thing. And then 7B models which Luca was saying used to be like this huge industry standard where there's just so many of them. It's still a standard size category, but there aren't quite as many models there as there used to be. And this like especially the instruct models are less common. And this is up there with one of the best in the world there at that size category again. And I I just think of this like llama 3.18 is one of the most used models on hooking pace of all time. And this should be better. We're in our measurements, we see it as being better than llama 3.18. Hope that holds up for people. We can release more and fix it. But that's just like trying to give we might not be at this frontier scale but these are things that are still widely used in the world</p>
</details>

**Nathan:** 而且，这是第一个完全开放的推理模型，我们展示了如何进行强化学习、构建基础模型，以及从更大的思考模型中进行蒸馏等。我们拥有所有数据，并向人们展示了如何使用。通常，我们开放的后训练方法，比如去年的 Tulu 3 数据集，会成为一个标准。我们希望人们使用这些数据，根据自己的需求进行修改，并研究不同的训练阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then it's like the first fully open reasoning model where we show doing RL and base models and distilling from bigger thinking models and all these things that people have seen a ton of times throughout the year. I think get another thinking model is like what is this one for? But we have all the data and we show people what to use for. So I think a lot of times with our especially open post training it's just like the data sets become a standard. So it's like our two loot 3 data set from last year which we used for mode 2 is in like the thinking machines tinker API and we want people to use this data modify it how they need to and look at the different training stages.</p>
</details>

**Matt:** 太棒了。关于数据方面，谈谈 DOMA 3 吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great great uh fantastic. So uh to the data point uh talk about DOMA 3.</p>
</details>

**Luca:** DOMA 3 是我们用于预训练的数据，也就是我们用来创建基础模型的数据。它主要有三个部分。首先是预训练数据池，大约有 10 万亿个 token，我们用一个完全开源的算法从中采样出约 6 万亿个 token 用于训练。我们采用了一种新技术，不是随机重复文档来获得更多训练 token，而是智能地重复那些价值最高的 token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">DOMA 3 is the data that um we use in pre-training uh for 3. So it's what we use for to create the base model. Um it's really three parts. There's the sort of pre-training pool. Um, this is like a pool of about 10 trillion tokens from which we have like an algorithm also fully open source to like sample about 6 trillion tokens that we use during training. Uh, and it's you know we have kind of new techniques there. is kind of interesting of like we uh do this technique where um you know instead of repeating at random documents to get more training tokens, we intelligently repeat the tokens that have the most value.</p>
</details>

**Luca:** 其次，有一个较小的子集用于“中期训练”阶段。这是一个更集中的数据集，包含大量数学、高质量代码以及模型需要学习的知识点。最后，我们有一组特别有用的文档，用于让模型能够处理长上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have that part uh there's smaller subset uh that we use during this mid-training phase. So this is like a more focused data set um with a lot of math high quality codes um sort of knowledge tidbits that you want the model to pick up um and then finally we have a set of um documents that are particularly useful to make uh models able to work with long context.</p>
</details>

**Luca:** 我对最后一部分特别兴奋，因为历史上，公开可用的语言模型构建数据中，长文档数据并不多。这些是我们自己抓取的 PDF 文档，主要是科学类 PDF，在互联网上公开可供抓取。我们有一个将其转换为纯文本的流程，这个流程也是开源的。与通常很短的网页（95% 的网页 token 数低于 3000）不同，这些文档相当长。我们大约有 6000 亿个 token 的长度超过 8000。这对于人们开发让模型理解超长输入的新方法非常有帮助，这在以前，除非你是大型实验室，否则在开源社区是做不到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">really excited about this one because like historically um of the data that is available openly out there for people to build their language model um you don't have a lot of like long document data so these are documents uh that we crawl ourselves they're PDF um scientifically they're mostly like science PDFs they're openly available um on the internet for crawl um we have a pipeline but it's also open source so everything's open source to turn them into plain text. Um, and of those we have uh like instead of like web pages that are like kind of short like 95% of web pages are um below 3,000 tokens. Um these are quite long. Uh we have about 600 billion tokens are longer than 8,000 tokens. Um so these are really good for people to like develop other ways for models to understand very long inputs. uh which is typically it's something that people are not able to do today in the open unless they are a big lab and they can you know acquire data that it's long enough to to do this phase.</p>
</details>

### 性能与定位：在巨头林立的市场中竞争

**Matt:** 好的，谢谢。你之前提到了一些，现在谈谈性能和效率吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, great. Thank you. Um you alluded to some of this but talk about uh performance and efficiency.</p>
</details>

**Luca:** 基础模型的性能很难衡量。对于指令和思考模型，Nathan 会有更多关于比较基准的信息。但基础模型真的很好。正如 Nathan 所说，发布基础模型的人不多，所以我们的比较对象有限，但它的水平与 Qwen 2.5.3 或 Gemma 3 相当。在某些能力上可能稍好一些，在另一些能力上则不如。但基础模型的绝对性能不像指令模型那么重要，你只需要确保它处在正确的区间，模型足够强大，以便你的后训练团队能对其施展魔法，让它变得非常出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Performance you know it's kind of it's very hard to measure performance a base model. So for like the instruct and the thinking uh Nathan will have more info about like comparative benchmark but like the base model is really good. It's a level of as Nathan was saying not that many people release the base model. So we're kind of limited there in terms of comparison but it's at the level of like Quen 2.5.3 or Gemma 3. um certain capabilities they have maybe a little bit better on some capabilities with better than some others. Uh but ser in the ballpark absolute performance of base model don't matter so much as as um an instruct model at the end you want to be like in the right band where the model is capable enough that then your post training team can do like magic on the checkpoint and make it really really good.</p>
</details>

**Nathan:** 我会说，在后训练阶段，我们是除了 Qwen 3 之外最好的模型，并且有理由说它们与 Qwen 3 相当。在一些基准测试上我们击败了他们，而在另一些上他们则遥遥领先。很多人觉得我们不清楚 Qwen 3 在训练数据中到底放了什么，所以不知道他们是否在某些基准上比我们更努力地进行了优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say in post training we're the best models that don't start with quen 3 and we're like reasonable to say that they are comparable to quen 33 like on some benchmarks we beat them and on some benchmarks they're way ahead. I think a lot of people are like we don't know what quen 3 puts exactly in the in the training data so we don't know if like some benchmarks they benchmark to max a little harder than we did.</p>
</details>

**Nathan:** 我们希望在某些用例中，使用 Qwen 3 8B 或 32B 的人愿意转换过来，并从中获得一些价值，甚至可能根据自己的用例进行修改。但 Qwen 也发布了很棒的模型。所以这是一场永无止境的艰苦战斗，激励你做得更好，努力接近并与他们竞争。他们发布的 Qwen 3VL 视觉模型，在纯文本基准测试上的表现远超他们四月份发布的模型。所以，标准总是在提高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean like we try to hill climb on benchmarks to make our model good. I think there's like always some some level of this but in that it's like in the same ballpark in plenty of things. are hoping that there's use cases where people that use Quen 38B or 32B are willing to switch over and get some value out of this and maybe modify it to their own use cases. But it's like Gwen also releases great models. So it's like ever a never- ending up uphill battle that motivates you to do better to try to get just like get close and compete with what they're doing. It's like they release these Quen 3VL their vision models and like on text only benchmarks it's way better than the models they released in April. So it's like h okay like that's the new baseline and most people don't know about it because they think it's just a vision model but it's actually a much better text model and it's like okay like the bars the bar is always rising</p>
</details>

**Nathan:** 在 7B 规模上，Nvidia 有 Nemotron Nano V2，这是一个 9B 的混合模型，我认为我们的 7B 模型几乎与它相当。这些都是好模型。在这些尺寸范围内，真正强大的模型并不多。所以我们很高兴能达到这个水平，也很高兴指出其他人在这个领域也做得很好。我们不能忽视 Qwen，那将是一个失败的策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but at 7B scale Nvidia had NEAtron Nano V2 which is a 9B hybrid model which I think is like almost equivalent to our like our 7B model is pretty much equivalent to that. These are good models. There's not that many of them that are at in these size spans that are really strong. So it's like I'm I think we're happy to be there and happy to point out other people are doing great work here. It's not it's not like we can ignore Quen. That's a losing strategy.</p>
</details>

### “开放”的真正含义：从开放权重到开放一切

**Matt:** Luca，为了让大家更清楚，AI 领域的“开源”有不同的含义。请解释一下这意味着什么，以及你们处于什么位置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Luka, just to uh drive it home, the concept of open source in AI, this different flavors of it. Uh walk us through what that means and where you guys are at.</p>
</details>

**Luca:** 这是一个经常在讨论中被忽略的话题。当谈到模型时，人们认为的“开源”有不同的层次。大多数发布的模型，我认为用“开放权重”来描述最贴切——比如你的 Qwen、Gemma、Llama、Kimmy。发布的是一组权重，对应模型的最终状态，或者可能是指令模型和基础模型的最终状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's always like a a a topic that gets um sort of overlooked a little bit uh in discussion. Uh but yeah, like um when when it comes to models, there is different level of um what people consider open source. majority of uh models that get um released um I think the best term to describe them is open weights um your Quen your Gemma your llama um you know Kimmy um it's what gets released is a set of weights uh that correspond either to the final state of model that's the most common or maybe final state of the instruct model final state of the base model</p>
</details>

**Luca:** 在很多情况下，这已经足够了，你可以在此基础上构建出色的软件。但同样，在从研究到应用的许多情况下，这还远远不够。你希望拥有模型的中间状态，以便更好地进行定制。你希望访问数据，以便在注入自己数据的同时重做训练的某个步骤。你可能还想访问预训练数据，因为你有一个了不起的研究项目，但你需要知道语言模型是在什么数据上训练的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you know there are plenty of cases where that's enough and you can build great software on top of it um there's an equivalent large set of cases from research to um application where that's just not enough. Um you want to have like intermediate state of the model so that you can customize it better. You want to have access to the data so you can maybe redo a step of the training while infusing your own data. you might want to have access to the pre-training data because you have this incredible research project that's going to change how we think about language models but you need to know what a language model is trained on</p>
</details>

**Luca:** 我们希望支持这些用例。所以，对于 OMO，只要我们能发布，我们就会发布。我们不能把我们的 GPU 发布给全世界，那行不通，但涉及到数据、中间检查点、基准、软件，任何我们能发布的东西，我们都会发布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um so we want to support those use cases um so when it comes to OMO um if we can release it um we will release it um so you know we can't release I don't know our GPUs out to the world that's not doesn't work but uh when it comes to the data, the the intermediate checkpoints, the benchmarks, the software, anything we can, we'll put it out.</p>
</details>

**Nathan:** 如果有人问，嘿，你描述了你流程的这一部分，但你没有发布出来，我们也会发布那一部分。我们总是收到关于 **SFT**（Supervised Fine-Tuning: 监督微调，使用有标签的数据集对预训练模型进行微调以适应特定任务）或其他微调阶段中间检查点的问题。现在我们有了在监督微调推理和指令阶段的中间检查点，还有我们最后几天的 RL 运行的中间检查点。所以对于那些喜欢研究检查点但没有计算资源进行训练的人来说，现在这些都唾手可得了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, if people ask, hey, um, you described this part of your pipeline, but you haven't put it out, we'll release that part as well. Like we've always got questions about like intermediate checkpoints during SFT or other fine-tuning stages. And like now we have intermediate checkpoints during our supervised fine-tuning for reasoning and for instruct and then also for like our multi-day RL runs at the end of these we have intermediate checkpoints. So people that are looking like a lot of people like to understand checkpoints and do research on them but don't have compute to train and now it's like okay this is this is all there.</p>
</details>

### 2025年开源AI回顾：中国力量的崛起

**Matt:** 在我们深入探讨具体细节之前，我想先退一步。今年是开源人工智能领域非常紧张的一年。“Deepseek 时刻”感觉像是三年前的事，但实际上那是在一月底，也就是十个月前。从那时起发生了很多事。Nathan，你能否帮我们回顾一下 2025 年的关键事件，让大家了解发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before we dive into the specifics I'd love to uh take a step back. Uh it's been a very intense year in the world of open source AI. Uh the deepseek moment feels like it was three years ago, but uh in reality that was at the end of January, so so 10 months ago and a lot has happened since. Nathan, could you help us uh maybe recap the the key events of 2025 for people to understand what what's happened?</p>
</details>

**Nathan:** 是的，如果我要列出实际的模型清单，我肯定会漏掉一些，因为值得注意的太多了。我认为从你提到的 Deepseek 开始绝对是重要的一点。如果你和在中国构建模型的人交谈，很多人的共识是，Deepseek 向我们展示了 AI 可以成为一件大事。然后很多公司就觉得，哦，我们应该做他们做过的事。所以今年涌现出了大量的实验室。除了 Deep Seek，知名的参与者还有 Qwen，以及像智谱AI（Z.AI）和 Kimmy Moonshot 这些已经存在的公司，它们都变得更加知名。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, if I try to make a list of actual models, I'm going to forget some because there's so many that are notable. I think starting with deepseek as you mentioned is definitely the important thing and then if you talk to people building models in China that a lot of the consensus is like deepseek showed us that AI could be a big deal and then a lot of these companies were like oh we should we should do what they did. So there's just kind of a ton of labs that have popped up over the year. I think known players in in addition to Deep Seek Quake Quen and I think like Z.AI AI and Kimmy Munch had already kind of existed and like these really stepped up to be much more known names</p>
</details>

**Nathan:** 来自中国的模型数量巨大。比如蚂蚁集团正在发布具有非常强劲基准测试的万亿参数模型。美团，相当于中国的 DoorDash，也在发布模型。在中国，发布开源语言模型已经成为一种标准开发方式。整个生态系统都在向前发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">especially if you're following western like SF centric discourse like these these are things that people are using and talking about which is a kind of big change but there's just this huge mass of models coming from China you have everything like like ant group is releasing trillion parameteres with really strong benchmarks mtoan which is like the Chinese equivalent of door dash which is just like another big tech company in China like the standard way of developing language models has become to release them openly and like that whole ecosystem is going forward with this figuring this out</p>
</details>

**Nathan:** 与此同时，Meta 的领导层发生了重大变动，Llama 的未来变得更加不确定，而它曾是开源 AI 的典范。那条思路就这样中断了。于是出现了一个巨大的影响力真空，这个真空被 Qwen、Deepseek、Kimmy Moonshot 等公司填补了，尤其是在那些试图用开源模型构建应用的人群中，这是一个巨大的转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when at the same time like there was a big change in leadership at meta and llama's future is less unknown which was really like the paradigmatic the like the definition of open source AI and that kind of that that line of thought just ended so there's this big vacuum of influence which has been absorbed by the likes of Quen, Deepseek, um Kimmy Moonshot in terms of like who's trying to build things with open models and that's a big shift and</p>
</details>

**Nathan:** 在美国国内有很多讨论，认为我们有充分的理由应该掌握整个技术堆栈，包括开源模型。因为现实中，美国的科技巨头将从拥有近距离、说同一种语言、习惯相同基础设施的研究人员中获取下游价值。我认为这是我们在科技行业几十年来一直看到的情况。人们正开始真正意识到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there's a lot of discussion within the US that there's like good reason that we should own we should at least have influence over the whole technological stack and that includes open models and because realistically it's the big tech companies in the US that'll capture the downstream value of that from having the researchers be in close proximity and speaking the same language and used to the infrastructure. I think this is something that we've seen for decades in the tech industry. So I don't think I need to explain it that much and there are there are people that are really starting to wake up to this.</p>
</details>

**Nathan:** 大约在六七月份，中国的模型提供商变得不容忽视。那时我们看到了 Kimmy K2 Instruct，Qwen 发布了许多大型模型，比如 Qwen Coder，还有智谱AI的 GLM 4.5。这种情况现在仍在继续。所以，当我们录制和发布这期播客时，人们非常关注美国公司将如何应对。我知道 Nvidia 在这里动作很大。他们向 Reflection 投入了大量资金，还有其他参与者也试图跟上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think in June July is when the Chinese like model providers were really becoming like you cannot ignore them. That's when we had the Kimmy K2 instruct Quen was releasing a lot of their big models like Quen Coder um GLM 4.5 from Z.AI and that's kind of just continuing now. So I think when we're recording and releasing this podcast, there's a lot of interest of like what are the US companies going to do to respond to this. I know that like Nvidia is making a lot of noise here. They invested a lot of money in reflection and there are other players that are trying to get going.</p>
</details>

**Nathan:** 我们 AI2 的计算资源不多，但如果我们能在人们实际使用的一些模型尺寸上有所作为，我认为这很重要。我们专注于研究人员，而密集模型对研究人员来说很棒。我确实认为，如果你在未来几个月关注这个播客，你会看到美国有更多的实验室参与进来。OpenAI 也发布了一些模型。只是在美国，规范的转变需要很长时间，因为它们是以一种不同的方式建立起来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But like urgency and we don't have a lot of compute AI too, but like if we can make a dent in this and some model sizes that people actually use, I think that like we focus on researchers. I think dense models are great for researchers. They take a little bit less compute and engineering resources to use and it's like I I do I do think that there's more if you look at this podcast in the coming months I do think there's going to be look like there's a lot more labs in the US participating. I mean open AAI has released some models. So it's it just takes a long time for the norms to shift in in the US where they're just established in a different way.</p>
</details>

**Matt:** 而且 Qwen 的使用非常广泛，人们可能没有完全意识到，对吧？有个轶事是几周前 Airbnb 谈到使用 Qwen 而不是 Chat GPT。你有什么关于 Qwen 使用情况的统计数据或轶事证据吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then Quen is is widely widely used in a way that people may not have completely realized, right? There was a as an anecdote the the example of Airbnb talking about using Quen over Chat GPT a few weeks ago. But do you have any sort of stats or anecdotal evidence on on the usage of Quen?</p>
</details>

**Nathan:** 另一个著名的引述是 Martin Casado 在《经济学人》中的话，他说 80% 的公司都在基于 Qwen 进行构建。这句话后来被修正为：80% 使用开源模型构建的公司在使用 Qwen，这大约占他投资组合的 16% 到 24%，这仍然是一个很大的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other famous quote was a Martin Casado quote in the economist where he said 80% of companies are building on Quen. That has been corrected where it's 80% of companies building with open models are using Quen which is like 16 to 24% of the his portfolio which is still a lot like like it's a meaningful amount of people are trying open models for things and most of them are using Quen</p>
</details>

**Nathan:** 还有像 Cursor 这样的公司，他们发布了自己的模型 Composer 2。大家普遍认为它是基于某个公开发布的大型中国模型构建的。有一些明显的迹象，比如它会切换到中文。但这类公司就是不想自己预训练模型，但在为自己的用例定制模型方面有巨大的价值，所以他们自然会基于这些优秀的模型进行构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then there's the likes of like cursor released their own model like composer 2. It's accepted that it is built on a large Chinese whether of some sort that was released openly. Um there's some obvious tales of like it switching to Chinese and things like this, but that's just like that is the sort of company that doesn't want to pre-train their own models, but has immense value in specifying models for their use case that is just going to build on these on these great models.</p>
</details>

**Nathan:** 我认为他们希望有更多的选择，尤其是在他们试图进入更多市场时。现实情况是，很多美国公司不想部署中国模型。目前，很多陈述的理由都是“未知的未知”，以及一些你无法证明的事情。比如你无法证明模型没有某些后门，尽管我相当确定它们现在没有。但仅仅因为你无法证明，就造成了这种奇怪的市场博弈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think they would want more options to choose from as they try to sell into more markets. I think realistically it's a thing where a lot of US companies don't want to deploy Chinese models. I think currently a lot of the stated reasons are just unknown unknowns and things you can't prove. Like you can't prove that the models aren't doing certain back doors where I'm fairly certain they defin they they aren't now. But like just because you can't prove it makes this kind of weird market dance which is like yes these are stocastic things that are kind of amorphous.</p>
</details>

**Nathan:** 作为一名研究员，我不想夹在中间。我只想提供信息和人们真正想用的好东西，把所有地缘政治和其他信息传递留给那些风险比我大得多的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's like I don't I don't love being in the middle of this as a researcher. But it's like I would like to just provide information and good things that people actually really want to use and leave all of the geopolitical and other messaging to people that have probably realistically like way more on the line than I do. Like I don't know. We work in a nonprofit. I have my dog</p>
</details>

### 中美开源生态的差异与未来

**Matt:** 你认为为什么生态系统会发展成这样——美国非常商业化、闭源，而中国非常开源？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why why do you think this uh happened uh that the ecosystems developed in in this way that the US was uh very uh commercial closed source and China very open source?</p>
</details>

**Nathan:** 历史上，美国有更强的为服务付费的意愿。我从比我更了解中国的人那里听到一些轶事，他们说在中国，估值超过十亿美元的中大型公司也会盗用 SaaS 软件。这听起来可能比实际情况更糟，但事实是，美国公司习惯于为服务付费，**API**（Application Programming Interface: 应用程序编程接口）模型和按 token 付费已被证明是一种非常好的商业模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Historically the US has a lot more willingness to pay for services. I hear anecdotes from people that know China a lot more than I do that are like yeah mediumly large like billion dollar plus valuation companies in China will just like pirate SAS software. I don't like it that sounds worse than it is, but it's just like I think that the thing is that US companies are used to paying for services and an API model and paying for tokens has been proven as a very good like selling tokens is a good business in the US right now.</p>
</details>

**Nathan:** 我相信通过销售 token 可以建立盈利的业务，而我认为在中国公司中，AI 将以非常不同的方式嵌入。我与其中一些实验室交谈过，他们说为了进入美国市场，他们知道美国公司不会为服务付费。他们不期望企业会大规模订阅 Kimmy 的编码计划，但他们觉得有机会让这些企业使用他们的模型。这是一种影响并分享市场份额的实用方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there's a lot of debate over profitability but the demand and usefulness of these tokens is high. So I I have a lot of belief that there can be profitable businesses from selling tokens where I think that like AI will be embedded in very different ways when it comes to Chinese companies. And I've talked to a few of these labs and they're like in order to sell into the US market like they will not pay for they've said this they like US companies will not pay for services. So like they don't expect enterprises to sign up for the the Kimmy coding plan in mass, but they're like we have a chance that they'll use our models and it's like that is a practical way to influence and getting a piece of the sharing pie.</p>
</details>

**Nathan:** 在中国构建这些模型的人对不同生态系统的了解是一样的。他们看到了相同的限制。他们足够聪明，知道如果他们发布非常好的模型，美国的人们就无法忽视，这就是他们在这个生态系统中分一杯羹的方式。所以，这是 Deepseek 设定的标准和他们务实策略的结合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's like the people building these models in China know the same things about the different ecosystems. It's like that's why I've enjoyed starting to talk to them. I was like these people the same thing. They they see the same constraints. It's not that complicated. So they're smart enough to know that if they drop really good models like people in the US can't ignore it and like that's their way to like have a part in this ecosystem. So there's a mix of like the deepseek standard and then they're kind of like yeah like this this is this is something that works for us. Let's let's keep doing it. It's it's getting them a lot of mark like mind share and some use in prominent ways. So so I think it makes sense.</p>
</details>

**Matt:** 美国是否有更具组织性的应对措施正在形成？我知道你参与了，或者可能就是 Atom 项目的幕后推手。

<details>
<summary>View/Hide Original English</任何协调一致的回应，只有在它真正公开时你才能看到。我认为在不同的利益相关者之间有很多投资和对话正在进行，但这并不是那么有用。所以我没有证据给你，但我确实认为合适的人正在讨论这个问题，并希望投入更多，因为相对于万亿美元的 AI 基础设施建设，成本并不算高。就像，哦，如果 0.001% 的投入能让我们得到更好的开源模型，我们可能就应该这么做。我认为这其实并不复杂。问题只是在于，你如何将一亿美元的预算项目交给有才能去做这件事的合适人选，并设定好激励机制。>
<p class="english-text">I think any concerted response you only see when it actually is public and I think there's a lot of investment at different stakeholders and conversations that are happening, but like that's not use that useful. So, it's like I don't I don't have the proof for you, but I do think the right people are talking about it and want to invest more because realistically the cost is not that high relative to the trillion dollar buildout of AI infrastructure. It's like, oh, if 001% gets us better open models, like we should probably do that. I think that's actually not that complicated. is just like how do you get the hundred model million dollar line item to the right people that have the talent to do it and like okay the right incentives.</p>
</details>

**Matt:** 今天的发布和你们的工作是美国应对中国在开源人工智能领域崛起的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's release and you guys work is a part of that uh American response to uh China's rise in open source AI.</p>
</details>

**Nathan:** 我在七月份发起了 Adam 项目，当时以为会获得更多关注，但现在我收到了大量的媒体和新闻垂询，每个人都想分享这个故事。所以我想，“好吧，我猜我只是早了四个月，但这就是我。” 就在今天，我看到彭博社发表了一篇文章，标题和我七月份关于 Kimmy 的文章几乎一样。我说，“好吧。” 我很高兴人们现在开始关注了，迟到总比不到好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I would say I launched Adam in July and thought it would get more visibility but now I'm getting like a crazy amount of media inbound and press and brown and everybody wants to share the plot. So I was like, "Okay, I guess I was just four months too early, but that's what I really am." It's like just today I saw Bloomberg like published a post that pretty much had the same title as my Kimmy post from July. I was like, "Okay." Like I'm gl I'm glad that people are paying attention now is like better late than never.</p>
</details>

### “思考模型”的兴起

**Matt:** 好的。祝贺你。这是最好的奉承方式。好吧，转换一下话题，为了让这些对话对更广泛的人群具有教育意义。这次发布的一个关键方面是“思考模型”。你能提醒一下大家，思考模型到底是什么，与其他形式或前几代模型相比有何不同吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Well, congratulations. Best form of flattery. All right. Switching tax and um in an effort to to to make those conversations educational for a broad group of people. Uh so one of the key aspects of the release is the thinking model. Could you remind folks uh what a thinking model actually is versus other forms of models or prior generations of models?</p>
</details>

**Nathan:** 很多人都听说过“推理时间扩展”，这是有道理的，即如果你在推理时花费更多的计算，你会得到更好的答案。思考模型实际上是一种训练模型以充分利用这一点的方法。它会花费大量的 token——这些 token 通常对用户是隐藏的，就像一个长长的思维链——因此模型在数学任务、编码任务和代理任务上会有一个阶跃式的提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of people have heard about inference time scaling which makes sense which if you spend more compute at inference time you get a better answer. A thinking model is really a way to train the model to exploit that a lot. So you spend a lot of tokens which is the tokens are usually hidden from the user as like a long chain of thought and the model therefore kind of has this step change where it's way better at math tasks, coding tasks, agentic tasks.</p>
</details>

**Nathan:** 构建思考模型是通往做更多有趣事情的大门，比如云端编码，或者明年我们可能会有全能编码模型。思考模型就是 2025 年的那个东西，它为每个答案使用更多的计算，从而在各种事情上变得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we we have some like our future plans are adding more tool use to the model. So we're not talking a lot about like agentic search or agentic code execution on the fly and stuff for this model. But like building thinking models is the gateway to doing a lot more interesting things like cloud code or like maybe we'll have all code next year and all these things that we want to do like like the thinking model has just been the thing in 2025 that use a lot more compute per answer model gets way better at various things.</p>
</details>

**Luca:** 思考模型确实是未来所在，尤其是在与智能体集成方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't like thinking models but it's fine. No, they're good. They're very useful. Um it's um thinking models are really like work mode and uh regular instruct models are usually more fun to build. They can be more quirky. Uh but yeah, I think that's that's really what where they're like 90% of the cases especially like userf facing cases folks I'm okay spending time waiting for these models to craft a better answer. Um there's still a space for models that can respond faster. Like you see like stats that Google released about like adoption of Gemini Flash. Um and that's where like non-thinking models that can at least approximate have a good approximate first answer are really useful. They're also more fun to build. Uh but yeah, thinking models like where the future is especially when it comes to like um agents integration.</p>
</details>

### AI2与Olmo团队的幕后故事

**Matt:** 在我们深入探讨 Olmo 家族的具体流程之前，我想谈谈你们的背景和 AI2。AI2 是生态系统中一个非常重要的参与者，人们可能听说过也可能没有。谁先来？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">before we go into uh the pipeline very specifically of the Almo family um because as as you alluded to that's one of the amazing things about open source is that we can uh in a discussion like this uh truly understand uh how the model works versus you know other conversations with commercial players. So before we go into the pipeline, I'd love to talk a little bit about uh you guys, your your backgrounds and AI2 which is a very important player in the ecosystem that um people may or may not have heard about. So who wants to go first?</p>
</details>

**Luca:** 我进入这个角色有点偶然，只是因为选择了一些有趣的问题。我的背景是，我最初来自意大利，为了读博来到美国。我的博士专业是信息检索，简单说就是如何构建搜索引擎。我慢慢地越来越多地接触到自然语言领域。研究生毕业后，我加入了亚马逊，最初在 Alexa 团队工作，负责 Alexa 的搜索部分，后来我发现用户与 Alexa 对话的部分更有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I sort of stumbled into this role uh by just picking problems that are interesting. Uh so my background originally from Italy, moved to US for PhD. My PhD is in information retrieval. how do you build search engine to just simplify a lot. I slowly got into more and more uh the sort of natural language. Um first joined after grad school I joined Amazon. I was working on Alexa at the beginning working on like the search part of Alexa and then I got way the the actual part where the users talk Alexa is the interesting part.</p>
</details>

**Luca:** 我最初加入 AI2 是在一个名为 Semantic Scholar 的项目工作，它是一个学术论文搜索引擎。我进入大语言模型领域，以及构建语言模型，与 AI2 如何进入这个领域是紧密相连的。这一切都始于 2022 年 11 月左右，大约是 ChatGPT 发布的同时。AI2 的一群研究人员，这是一个非常基层的倡议，对构建一个完全开放的模型产生了浓厚的兴趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So slowly moving towards that initially joined um AI2 working on um a project called semantic scholar is still active um it's a search engine for academic paper um and there the interesting interesting bits were actually like the interacting with users and less so the actual uh text of of the papers that you were searching on and then the the way I got into LLM is uh and then building language model is really intertwined of how AI2 got into building language models. Um there was it all started around um uh what is it November of 2022. This is around the same time um charge got released a bunch of um researchers AI2 this is like individual contributors um not uh the it was not direction from the top as a bunch like a very grassroot initiative too a bunch of researchers got really interested in build building a model that would be um fully open</p>
</details>

**Luca:** 我们联系了几家可能对支持这些倡议感兴趣的公司。我们从 AMD 那里获得了最初的资助，大约是 200 万 GPU 小时。所以我们有了想法，有了感兴趣的研究人员，有了计算资源。于是我们去找当时的领导层，告诉他们，嘿，我们准备做这件事。AI2 的一个好处是，我们本质上是一个研究实验室。所以每个人都说，“当然可以，你们自己搞定一切，玩得开心就好。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um AI2 um had already built um sort of proto language age models around 2017 2018. Um so a lot of the interest was in you know recapturing expanding that line of work. Um so a bunch of us got together start started planning um got in touch with um a few companies who might be interested in supporting these initiatives. We got an initial grant from um AMD at the time that was about 2 million GPU hours and so had the idea had the researchers interested. We had the compute. So we went to leadership at that time and sort of told them hey we're going to go do this thing. Um I hope you're okay with it. One of the nice thing about it too is like at heart we're like a research lab. Uh, so everyone was like, "Sure." Um, it you figure everything out. Uh, just have fun.</p>
</details>

**Matt:** 很好。Nathan，你呢？你是个多才多艺的人。你做研究，写一个非常有趣的博客通讯叫 Interconnects，还做播客。告诉我们你的经历吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. All right, Nathan. How about you? So, you you're a man of uh many talents. You do research. You write uh this uh very interesting um uh blog newsletter called Interconnects. Uh you do podcasts, you do like a bunch of different things. So, tell us about your journey.</p>
</details>

**Nathan:** 我说我身兼数职，是为了完成我想做的事情。我 2017 年以电气工程博士生的身份来到伯克利，然后我看到 AI 正在兴起，决定尝试一下。我的博士研究主要是基于模型的强化学习。我的一份研究工作是加入 Hugging Face，当时他们说要创建一个开源版的 DeepMind。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I say I wear many hats to try to get the things that I want to do done. Um, I showed up to Berkeley as a EE mostly PhD admit in 2017 and then I saw that AI was happening and I decided that I want to try to do this which started by going to all the names that people know like Sergey Levan and Peter and asking to the BN group and then they respectfully say no and then starts the long process of becoming um learning how to actually do it without being directly embedded in these elite groups which was a mix of robotics and reinforcement learning. and finding my way there. So my PhD was in mostly modelbased reinforcement learning and then my one research avenue job was to go do join hugging face when they said they were going to make an open source version of deep mind to do a bunch of research.</p>
</details>

**Nathan:** 直到 ChatGPT 出现，我才觉得我的工作真正有影响力。当时我想，哦，我也许应该了解一下 **RHF**（Reinforcement Learning from Human Feedback: 基于人类反馈的强化学习，一种使用人类偏好数据来训练奖励模型，进而优化AI模型的方法）。这立刻引起了广泛关注。后来我厌倦了远程工作，在夏威夷的一个有趣的会议上遇到了 Luca，心想，哇，我可以有现实生活中的朋友了。于是我加入了 AI2，在现实中工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Realistically my job was not that impactful or useful at hugging face until chatbt came out and then I was like oh I should maybe just learn about rof and that got very immediate traction as somebody trying to work in public with the team there. So like Lewis Tonstall and other people at Hugging Face are still doing a great job on this and we worked together for a while and then mostly I was just like getting burnt out on remote work and met Luca in Hawaii at a fun conference and was like wow I could have real life friends and I joined the AI2 to work in person and tried to do the same thing</p>
</details>

**Nathan:** AI 领域有如此多的资金，而且只会越来越多，以至于能够公开谈论这些事情、教育和传播知识以吸引更多人参与的人越来越少。所以我将我的职业生涯描述为在很大程度上是填补那个真空，并思考在那里做什么才是有影响力的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which kind of takes an evolution of the OMO story which was just like I had a lot of motivation on trying to figure out these what what was mostly reinforced learning from human feedback at the time and make versions of these post-training techniques public and then that kind of evolved through both Elmo and we have our like post- training methods that was named Tulu which is like we we spent a long time to try to replicate um what we thought was close to llama 3 post training with multiple stages and optimizers which is the project that like came up with the name reinforce learning with verifiable rewards with a bunch of people so it's kind of this evolving journey at AI2 to and in in search for impact which is what we think people are actually doing and then like the EOS largely the opportunity that Luca and I and others AI too fill is that like there's so much money in AI and it only becomes increasingly so that the amount of people that can talk about these things in public and educate and um get more people involved by spreading knowledge is ever smaller. So I I describe my career journey as a lot of it is filling that vacuum and and thinking about what's impactful there. So it it kind of pulls you when when there's such a when there's such a void, it it has a sort of gravity to make it clear what you should be doing.</p>
</details>

**Matt:** AI2 是由保罗·艾伦创立的，对吧？AI2 代表艾伦人工智能研究所。它是一个非营利组织。它现在规模有多大？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI2 was uh started by Paul Allen right? AI2 stands for Allen Institute uh for artificial intelligence. U this uh you you mentioned some grant Luca I u and I think earlier in the conversation we talked about a recent grant as well. I saw uh that it was 152 million from NSF and Nvidia. So uh what is AI2? Uh how did it start? Has it founded at a high level? So we alluded to some of it but maybe a few words about uh AI2. Just maybe one last question like in terms of size like what are we talking about? Like how many of you guys are there?</p>
</details>

**Luca:** 大约有 200 人，包括研究人员、工程师、顾问和其他支持性角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">200 people between you know the research stuff, engineering, um cons um and and other support roles.</p>
</details>

### 深入剖析：Olmo 3 的六阶段训练流程

**Matt:** 好的，我们来谈谈 Olmo 3 的整个流程，从预训练到后训练，用简单的英语解释每个部分的作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's let's uh as as previewed, let's uh switch tax uh and uh go into uh Almo3 uh/lo thinking/mo reasoning, whatever you guys end up uh calling it. Uh and I think uh it's it's it's a perfect um opportunity to talk about how uh those reasoning models actually work. uh you know in prior episodes of of this podcast we've had great conversation with folks like at anthropic or open AI but um not not surprisingly there's only so much they can talk about and the beauty of what you guys do u which is the very uh essence of it all is to make it open and um and accessible to everyone. So I I'd love for us to talk about uh the whole pipeline from pre-training to post-training the different parts and um and make that super educational and explain in plain English what part does what. So uh could either of you start with just a high level of architecture of what the various uh you know subcategories of the pipeline are and then we'll go into those one by one.</p>
</details>

**Nathan:** 我们将讨论六个阶段。第一阶段是**大规模预训练**，即在整个互联网上进行训练，预测下一个 token。第二阶段我们称之为**中期训练**，即在更高质量的网络数据上进行训练，并改变学习率。第三阶段是**长上下文扩展**，这对推理模型至关重要，因为它们在给出答案前会生成大量中间 token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're going to talk about six stages. One is like large scale pre-training which is this training on all the internet predicting next tokens. Two is what we call mid-training which is debatable whether or not it actually should exist. What technically it is is you train on higher quality web data and with a change in the learning rate. Three is long context extension which is absolutely essential for these reasoning models because they generate so many intermediate tokens before um sharing an answer with you.</p>
</details>

**Nathan:** 然后我们进入**后训练**阶段。在我们的案例中，后训练阶段的工具箱包括**指令微调**、**偏好微调**，最后我们再次进行了一些**基于可验证奖励的强化学习（RLVR）**。如果我们要训练一个大十倍的模型，所有这些后训练的东西都会改变，但预训练、中期训练和长上下文部分看起来会非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Luca has a lot of battle stories from that. And then we go into post- training which in our case like like those three building blocks of pre-training are I would say more set and super essential. And then post- training you when you approach this you have a bag of tools which are like optimizers and you apply them in the order that suits your model depending on size capabilities you want. So we'll talk about things that we did which is like instruction tuning, preference tuning and then we did some reinforce learning with verifiable awards again. But if like if we were to train a model that was 10 times as big like all this post- trainining stuff would change but the pre-training and mid-training and long context I think would actually become looking pretty similar. So it's kind of a difference across the two phases of training where post-training is like a bit of an art and you have to do what is best for your specific use case and and that'll change but we'll kind of go we can go through these too.</p>
</details>

**Matt:** 好的，Luca，你是预训练专家，Nathan，你是后训练专家，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, great. And uh Luca, you're the pre-training guy and Nathan, you're the post-training guy, right? Is that fair?</p>
</details>

**Luca:** 我喜欢把预训练阶段看作是模型非常昂贵的初始化。我想要一个对世界有丰富知识的模型，并且你能开始看到你希望聊天模型拥有的能力的火花。所以，这是一个非常昂贵且计算密集的过程，但关键是让模型拥有大量的世界事实和信息，并让它开始表现得有点像聊天模型，这样当我们把它交给后训练团队时，就有一些行为可以被强化和奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the the way I like to think of it is um the pre-training phase um it's really like um a very expensing expensive initialization of the model. Um, right. You want to like when I think of like, oh, what do we want to um what is a good uh final set of weights that I can pass to to Nathan and the rest of the post training team is well, I want a model that has great knowledge about the world. Um, and it also can sort of you can start seeing sparks of of of capabilities uh that you will want to model that then you know you want to chat with have have great capabilities. So um it is a very expensive and very compute inensive uh way to like create an initial models out of like what is essentially like random parameters. Uh but it's all about like yeah let's let's have this model have like a lot of knowledge of of world facts and and information. Um and let's have it so that it can start behaving a little bit um like a chat model so that when we pass it to post training and you have this reinforcement learning uh there is some some behavior to reinforce uh and to give rewards on so the model can pick it up.</p>
</details>

**Nathan:** 目前关于人们应该关心预训练还是后训练的讨论之所以困难，是因为我们优化预训练已经很多年了，而在 RL 方面还有很多未被开发的潜力。今年，我们之所以有这些疯狂的新模型，是因为我们有一个很好的平台——这些我们已经迭代了很长时间的可塑性强的预训练模型。所以，是的，目前 RL 的改进速度更快，但最终，这将是两者之间的博弈。你需要一个更好的基础模型，因为一个更好、更大的基础模型更容易通过 RL 来改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say that generally the reason why discussions are hard right now on whether or not people should care about pre-training or post- trainining is that we optimize pre-training for multiple years and then there's a lot of um kind of untapped potential on this type of RL where like a couple like what is said is that open AI figured out a whole bunch of tricks to get 01 to work and then it kind of showed that this area was possible and then this year has been a race to capture lowhanging fruit on RL where I think that's kind of the biggest story is why we have all these crazy new models that appear like 03 with this thinking and tool use which are just downstream of like oh we could do very different things because we've done such a we have such a good platform as these malleable pre-trained models that we've been iterating on for a long time that this RL stuff we just kind of could have tapped into it much earlier but there's a lot of potential so like yes the rate of improvement right now in RL is higher but in in the end of the day it's going to be a dance between both of them where you need a better base model like it's said very commonly that a better base model and a bigger base model is much easier to improve with RL. So like if you take that as one of the core things of doing RL research, it's pretty obvious that pre-training is very important to enabling that.</p>
</details>

**Matt:** 让我们逐一来看这六个模块。先谈谈预训练。你们具体为这个模型做了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for that. So uh let's take those uh six modules turn by turn. So let's talk about pre-training. Uh what did you guys do specifically for this model?</p>
</details>

**Luca:** 预训练非常有趣。我们必须非常有条不紊。首先，预训练需要很长时间，行业标准是把最终的大规模预训练控制在两个月内。为了确保在这两个月内不出问题，你需要做大量的准备工作。通常，你会确定运行时间、可用的 GPU 数量，然后编写最快的代码来训练模型。通过这三者，你可以计算出能给模型看多少数据。在我们的案例中，这个数字是 6 万亿个 token。然后我们回头去想，最好的 6 万亿个 token 是什么。我们把自己限制在公开可用的数据上，比如互联网文本、PDF 文档或代码。我们从最初的 300 万亿 token 的数据池中，通过去重、评估文档质量等方式，筛选到目标数量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pre-training is very interesting. um the way uh we sort of planned so a a good background is to have is that um pre-training all that happens during we have to be very methodical in how we do it uh because uh first of all it takes a long time to pre-train I think it's standard practice among the uh frontier labs to try to cap your big final pre-training run to two months uh not more than that uh but to get to like something that will not crush and burn in two months uh during these two months uh you have to do a lot of preparation around it. So we're really um everyone who works on prey is fairly methodical um and just to sketch out how that works. is usually you have a sense of okay the duration of this running is fixed. Um the number of of GPUs I have available is will be fixed. Um and therefore you know you write the fastest possible code to train this model. Uh you have these three you can figure out okay how much data can I show my model. Um in our case that number was like six trillion tokens. Um given that number um then we go back and we we figure out out okay where what are the best six trillion tokens out there. Um and the way you figure out is a combination of like what data you have access to. Um you know we want to do this with we want to eventually release the data. So we we limit ourselves to data that is um publicly available. So either um internet text or um PDF documents that you can find on the internet or code that you can find on the internet. And then among this pool you you know our initial pool was uh closer to 300 trillion tokens. You shrink it down till you reach your target number and hopefully as you shrink you only keep the best part uh of this. Um so you remove duplicates. um you have way to judge is this document better than this other document. Um you know we have a way to evaluate the capability of the model. So you pick you know if your evaluations once I don't know medical documents because there's a medical test there you figure out how do you pick documents that have good medical information it may be to the expense of some other domains. Uh but yes this delicate balancing act uh to find this data</p>
</details>

**Matt:** 好的，第二阶段，中期训练。这个术语我个人以前没听说过。请详细解释一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, let's get into that. So that phase two, so mid-training. So again, a term I I personally hadn't heard of before. And uh Nathan, briefly describe what it is, but uh just um double click on that.</p>
</details>

**Luca:** 有些实验室不叫中期训练，他们称之为“尾部修补”（tail patching），我认为这个词更好。意思是在预训练的尾声，你修补模型，让它学习在预训练期间没有学到的东西。当然，做这个的时候，你也要确保模型不会忘记预训练中学到的东西，所以你会混合一些预训练中最好的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um heard that some labs instead of mid training they call it tail patching. uh which I think is a much better term and and you know the term is like at the tail of training a tale of pre-training you patch the model so that the things that hasn't learned during pre-training you will learn after um you learn at that phase um and of course once you do when you do that you also need to make sure that um the model doesn't forget um stuff that during pre-training so that's why like you you mix some of the best data from pre-training you do carry over</p>
</details>

**Matt:** 然后你提到了长上下文，这是六阶段流程中的第三个阶段。为什么关注长上下文？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you mentioned long context which is the third stage in the six stage uh pipeline. So why why the focus on long context and I guess what does long context mean in the first place?</p>
</details>

**Luca:** 你希望这些模型能够处理非常长的文本序列，无论是作为输入还是输出。我们不从一开始就训练模型具备这个能力，是因为模型训练的输入越长，它变慢的速度就越快，这是一种二次方的减速。所以我们把这个阶段留到最后，这样可以更高效地完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You want these models to be able to work with very long sequence of text both as input. Imagine you want to give a I don't know a collection of documents and you also want this model to be able to generate a lot of text uh in the output. um especially now that you have this reasoning traces, right? This this thinking tokens. Why don't we train from the beginning the model to be able to do that is because the longer the input that a model is trained on, the slower is the rate at which it gets slower. It's um uh higher than the length of a context is is a quadratic slowdown. Um so we definitely don't want to do the entire pre-training at this extremely long sequence but as at some point we have to teach the model to actually work with this long sequences and we save it for the very end um so that um you know we can do it in an efficient way</p>
</details>

**Matt:** 好的，现在让我们切换到后训练世界。Nathan，从 SFT，也就是监督微调开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, so that's uh the pre-training world between pre-training itself, mid-training, and long context. Uh so, now let's switch to the post training world. Nathan, if you will. So, starting with um SFT, which stands for supervised fine-tuning.</p>
</details>

**Nathan:** 对于像我们这样的小模型，我们非常专注于一个狭窄的目标，因此我们采用了许多人都在做的方法，即从更大的教师推理模型中进行“蒸馏”。蒸馏是指你从一个模型中获取输出，然后在另一个模型上进行微调。这个监督微调阶段，或者说指令微调，就是从现有的推理模型或社区中获取最好的推理轨迹，然后教我们新训练的基础模型去模仿它们的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think one of the things that one of the things especially for a model like Mo where we're scrappy and putting everything together over time is that one of the biggest changes is that when reasoning models become popular, the like quoteunquote invogue evaluation suite of the industry shifts to add a whole bunch more new things in. So one of the things that happens at every stage is like even if a lot of the data has overlap is that you mix it in a different way. So I think like Kyle Low and May Chen as that's another researcher and intern like did this whole mixing procedure that we use across all all these stages just to like upweight the math code and and reasoning stuff to to make sure that like what happens later in postrading is much more tractable and that all this stuff is set up. So that's like the type of thing that we have to do that's kind of baked into everything. And then post- training um I think for this model everything we're doing is operating in the assumption that this is about like a 7B model. We are very narrowly focused and therefore we're going to do what many people have done which is called distilling from bigger teacher reasoning models. I think distillation is described as when you take the outputs from one model and then you fine-tune on it later. I think there's been a lot of broader discussions on this in the community. And then this supervised fine-tuning stage or SFT or instruction tuning is all about just getting the best traces from reasoning models out there or the community and then just teaching your recently trained base model to behave really really closely to what is going on there.</p>
</details>

**Nathan:** 在我们的案例中，我们混合使用了现有的数据集，并生成了大量新数据。我们最终使用了来自 Deepseek R1、Deepseek R10528 和 Qwen 推理模型 QWQ 的教师模型。这些通常都是非常强大的教师模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that in our case we took a mix of existing data sets like open thoughts 3 and modified it which is from bespoke AI labs a startup and then we also generated a whole bunch of new data. So we ended up using a mix of teachers from like Deepseek R1, Deepseek R10528, which was their updated version, and then Quen's reasoning model, QWQ. It's like these tend to be pretty strong teachers. And then</p>
</details>

**Matt:** 为什么这么做？你有一个预训练好的模型，但为了监督微调，你却用一个不同的模型进行蒸馏。简单来说，为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">why is that? So you you you have a pre-trained model, but you um for supervised fine-tuning, you distill using a a different model. Why is that in in simple terms?</p>
</details>

**Nathan:** 本质上是因为我们的小模型无法输出同样强大的文本。如果我们有一个更大的模型，我们会从一开始就进行大量的强化学习，模型会花时间学习这些有趣的行为并获得强大的性能。但对于一个较小的模型，其性能上限相当低，它没有能力从更难的数学问题中学习。所以通常的做法是，你找到你能获得的、有良好许可的、最好的推理模型，然后自己生成新数据并在上面进行训练，再发布给社区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">essentially because our small model is not going to be able to output as strong of text even if so there's a kind of a fork in process where I'm talking about a small model if we had a bigger model what we would do is do a lot of reinforcement learning to start and the model then would take time to learn these interesting behaviors and have strong performance but with a smaller model the ceiling on that is fairly low like it just doesn't have the capacity to learn from these harder math problems so what the common practice is is you take the absolute best reasoning models you can get that are openly available with a good license where you can just generate new data yourself and train on it and release it to the community which is something we've been seeing a lot of this year</p>
</details>

**Matt:** 好的。那我们来谈谈流程中的下一个阶段，第五阶段：**DPO**（Direct Preference Optimization: 直接偏好优化，一种无需显式训练奖励模型，直接根据偏好数据优化语言模型的方法）和偏好微调。那是什么？它做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So let's uh talk about the next uh stage in the pipeline. Stage five uh DPO and preference tuning. What what is that? What does that do?</p>
</details>

**Nathan:** DPO，即直接偏好优化，是一种优化偏好的方法，与我们提到的 RHF 相关。从技术上讲，它是一个解析推导出的损失函数，本质上是将随机梯度下降应用于 RHF 目标，因此实现起来比其他方法容易得多。问题是，我们能否直接将其应用于推理模型之上？我们不确定在损失函数中包含这些长推理轨迹会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So this is one of the things that is um thought of as like hey let's try this. We're not sure if it'll work kind of later in the process when you spend a lot of time on other things and it it works very well. I think um DPO or direct preference optimization is not exactly new. I think it's a it's a way of optimizing for preferences. It's related to this whole ROF thing that we mentioned. Techn technically speaking in one sentence it's a analytically derived um loss function that like is essentially applying stoastic gradient descent to the RHF objective. So it becomes much easier to implement than other things. And we use this in the past with mo 2 with tulu 3 tulu 2 other. And the question was like can we apply this out of the box on top of a reasoning model and we knew that it works in many different situations because we weren't sure what would happen with these long reasoning traces being included in the loss function and so on.</p>
</details>

**Nathan:** 偏好学习的核心是你对同一个提示有多组成对的或分组的补全。我们的一位学生的研究表明，被选择和被拒绝的例子之间的对比比答案本身好坏的确切程度更重要。所以他花了很多时间来为推理模型找到一个好的配对。我们最终也使用了相同的 Qwen 32B 和 Qwen 0.6B。问题在于，这些小型的公共推理模型实际上非常强大，以至于很难找到与另一个模型之间有足够差异来应用这种偏好学习技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then essentially like there's a student Scott that has been working on this what he calls the delta learning hypothesis which is like a intuition for understanding DPO as being more about the contrast between your chosen and rejected examples. So the core of preference learning is that you have kind of pairs or some grouping of completions to the same prompt. So you have one question with multiple completions and his intuition and work is showing that this contrast is more important than the exact magnitude of goodness of the answer. So what he did is he spent a lot of time and trying to come up with a good pairing of reasoning models which is they're open source so that or like they're open weights and they have a permissive license and they include the reasoning traces because we kind of need this and you need them to be sufficiently well spread about. So we spent a bunch of time generating this data and doing some like normal kind of like h let's f fiddle with the learning rate and small things and and it's kind of just like yes this works I think like after we did it we saw that hugging face did something similar with small LM so they trained like a fully open like 3B model where they pre-trained it as well and the funny thing is that like we converged on using the same Quen 32B and Quen 06B. So like the Quinn the problem is that these small Quinn models and these small public reasoning models are actually so strong that getting a sufficient delta to another model to apply this preference learning technique was was kind of hard.</p>
</details>

**Matt:** 好的，为了完成这次旅程，我们来谈谈 **RLVR**（Reinforcement Learning with Verifiable Rewards: 基于可验证奖励的强化学习），也就是第六个阶段。Nathan，我理解这是你的心血结晶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. And to to complete the the journey since we started talking about um RL so RL VR reinforcement on verifiable rewards let let's spend a little bit of time on that six stage uh in particular Nathan I understand that's your baby uh or you're one of the fathers of the of the the baby. Uh, do you want to walk us maybe a little bit through the the history quickly?</p>
</details>

**Nathan:** 我是那个把它公之于众的人。众所周知，整个行业的人们多年来一直在做这件事。广义上讲，它是采用现有的强化学习算法，并用它们来训练模型，根据它们是否答对问题，或者在代码的情况下，测试是否能成功执行而不失败来进行训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I think that I'm the person that got to bring it publicly to the world. I it's well known that people across industry have been doing this for years and then the technique started to get far more impactful. It's it's broadly taking existing reinforcement learning algorithms or downstream evolution of like proximal policy optimization PO which is like an evolution of reinforce and then deepseeek had their group group relative policy optimization. I always try to say like group robust and I think it's group relative. Um and like all these algorithms are really quite similar and it's you're you're training the models with whether or not they got the answers right or in the case of code whether or not the tests execute and don't fail.</p>
</details>

**Matt:** 你能用简单的语言解释一下 RLVR 和 RHF 的区别吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You want to give the the plain English definition of RLVR versus RHF?</p>
</details>

**Nathan:** RLVR 中的“可验证奖励”就在名字里。本质上，你从环境中得到的奖励就是你是否答对了问题。而在 RHF 中，奖励来自于一个奖励模型，它根据人类喜好的代理来评价回答的质量。RLVR 的奖励更容易理解，因为奖励模型往往有很多问题，你更容易过度优化它们，因为奖励模型可能会捕捉到一些你实际上不关心的特征，比如表情符号。RLVR 更侧重于性能特征，而不是风格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">RLVR and verifiable rewards is in the name. I think essentially the reward that you get from the quote unquote environment which is like the completion or the greater is whether or not you got the problem right. RHF the reward is some is a essentially a reward model which is rating the quality of the response based on a proxy to what humans would like. So, it's described as being a much like the RLVR reward is much easier to understand because these reward models tend to have a lot of problems and you can overoptimize them much more easily because the reward models will pick up on features that are maybe emojis or something like this that you don't actually care about where RLVR is much better matched to like performance characteristics rather than style.</p>
</details>

### 展望未来：AGI、复杂性与AI的平稳演进

**Matt:** 你们刚刚描述的流程凸显了系统的复杂性。一方面是让这些模型工作的现实，另一方面，每次你打开新闻或社交媒体，每个人都在谈论 **AGI**（Artificial General Intelligence: 通用人工智能，指拥有与人类相当或超越人类智慧的AI系统）以及我们离它有多近。这之间存在一点认知失调。Nathan，你对 AI 进展的看法似乎比一些 AI 研究人员更为温和。你最近的思考是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the everything that you guys have have described because um in particular it sort of highlights the complexity of the systems like the multiple stages uh and I love what you mentioned Nathan a few minutes ago when you said the pre-training is scientific and uh post-training uh my words not not yours but my interpretation of your words was like it's a lot of tinkering and putting things together in a way that you hope is going to to to work and and and truly diving into how those models work on the one hand, but on the other hand, you know, each time you're uh like open a newspaper online or go on Twitter, like everybody's talking about uh AGI and how we're almost there and how it's going to change everything. There's there's a little bit of a cognitive dissonance between like the the the reality of uh trying to make those models work with all the unbelievable progress that we've seen of course but like uh you know that on the one hand and the discourse on the other hand. Uh Nathan you've you've you've had um a much more I would say tempered view of AI progress uh compared to some uh AI researchers. you had a a great blog post very recently uh that you called Thought on the Curve. Um and I'm I'm I'm curious what your latest thinking is and and look obviously feel free to jump in any time but in terms of um uh what you described in that essay in a prior one as um complexity and complexity complexity tax uh which again like in view of the pipeline you just described like it's one starts to understand the level of sheer complexity that's involved in all of this.</p>
</details>

**Nathan:** 我肯定把自己描述为对 AGI 有点信心的，但我远不相信任何形式的奇点是可能的，原因就是复杂性。一方面，我们谈论了所有这些改进模型的低垂果实。但与此同时，随着系统变得越来越复杂，变革的步伐会变慢。任何科技公司都见过这种情况。而且现实中，我们能建造的基础设施数量也存在物理限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. So ultimately I I definitely describe myself as lightly AGI pilled and I think you have to be to appreciate the magnitude and gravity of the situation that we're in. But also I think that the like I'm very far from believing in any sort of singularity being possible due to these things like complexity like on one hand we talked about all these things which are low hanging fruit to improve the models and I don't doubt that it I mean like you Shto commented this on the pod and other places where like at these labs they still see lowhanging fruit in improving the models in many ways I don't think that their approach feels that different they've just been refined it that relative to what we're doing but at the same time as things get complex with tools and and like adding more layers to the stack and you have to build a product to scaffold it. It's like if the requirement to get the best out of cloud is to use cloud floor cloud code which is some magic product and prompting relative to GitHub copilot like this is one thing that you're going to need to get right onto the in order to get AGI along with all these tool uses and stuff. So it's like as any system gets more complex the pace of change is slower. I think any tech company has seen this and then realistically there's going to be physical constraints on the amount of infrastructure that we could build.</p>
</details>

**Nathan:** 现实情况是，会有一个物理限制在某个时刻起作用。但将这一点与复杂系统和低垂果实相平衡，结果就是，我认为这些研究人员将在未来几年里不断取得进步，但绝不会导致我们被卷入那种加速的漩涡中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this belief is simultaneously giving us these new data centers and I personally think hopefully new power generation but there's there's a cap and for having a in order to like all these things are plateauing and then you 10x the compute and you get a big jump like you can't do this forever. So realistically there's going to be some physical constraint that kicks in at some point. But balancing that with complex systems and the lowhanging fruit results in like I think these researchers are going to grind out improvements for multiple years but never in a way that results in this kind of accelerating well that we get drawn into. So it's kind of like it's like you I don't know some ways it feels like I'm having my cake and eating it too but it seems like the likely outcome if you look at other types of technology.</p>
</details>

**Luca:** 我认为我们不太可能在任何时候看到一个“不连续点”。我们是否会达到人们满意的 AGI 或超级智能的定义，这无关紧要。我们会达到那个目标。但不太可能有一个时刻，它会是一个回溯性的审视，比如“哦，这些是重要的里程碑，这才是真正有效的。” 构建这个模型更像是一个不断改进以解锁下一阶段的集合，它将是一条平滑的轨迹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the progress is also going to be incredible and normally the the growth in capability of these models but like having working on one I think it's very unlikely that we will see like a discontinuity at any point that has nothing to do with whether like we'll get to a definition of of of AGI or or super intelligence that people are happy with. we will get there. It seems unlikely that the moment like it's going to be a looking back kind of kind of exercise of like oh these were the important milestone and this is what really worked. It's building this model is so much a collection of like refinements till to unlock the next stage that it's it's going to be this smooth trajectory.</p>
</details>

**Matt:** 所以你们俩都说，对 AGI 持肯定态度，但对不连续性或奇点持否定态度。这是公平的吗？如果是这样，你们是说当前的范式，也就是我们刚刚描述的预训练加 RL，就能让我们达到目标吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so to play it back you're both saying uh yes to AGI but no to discontinuity slash singularity and one is it fair and and and two if that's um what you're saying then uh for AGI you saying the current paradigm basically what we just described in the last hour of pre-training plus RL gets us there.</p>
</details>

**Nathan:** 我认为 AGI 这个词其实没什么用。我描述的方式是，大型科技公司都集体意识到，这些语言模型加上外部支持框架（scaffolding）将释放出绝对不可思议的价值。我很有把握，除非出现极端的地缘政治情况，大型科技公司将在未来两到五年内执行这一愿景，构建出我们物理能力和 LLM 能力所能达到的 95% 到 98%。到 2030 年，由此带来的变革将对整个社会产生极其强大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the AGI word is actually pretty not useful. I think that how I describe it is that big tech has all collectively realized that these language models plus scaffolding is going to unlock absolutely incredible value. And I have very high probability barring extreme geopolitical situations that big tech executes on this vision across the two to five years to build 95 to 98% of the way there of what you can do with our physical power constraints and what an LLM's ability is. And I think that that will be extreme like the transformation from that by 2030 is going to be so powerful across society.</p>
</details>

**Nathan:** 将会有大规模的社会调整，以适应互联网、媒体和信息的新含义，这将在 5 年内发生。这主要是我做这件事的原因。我认为，争论它是否是 AGI，相对于这个事实的到来是次要的，我们希望人们研究和理解正在发生的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there's a bunch of longtail like there's going to be mass societal readjustment to what the internet and media and information means and like within 5 years and that's mostly why I do this and I think like whether debating whether or not it's AGI is kind of secondary to the fact that this is coming and we want people to study and understand what is happening</p>
</details>

**Luca:** 从更积极的角度看，如果外部支持框架是真正推动从原始能力模型到具有实际意义影响的关键，那么这个框架不仅仅是训练模型的人才能做的。能够为此做出贡献的人数，无论是技术专家还是非技术专家，都将大得多。一旦你开始将这项技术融入真实人们的生活，一旦你开始在高风险的医疗应用或其他高风险领域工作，那么大量的人口都可以为使这项技术变得更好、为每个人服务做出贡献。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other part maybe on a more positive note is like if if the scaffolding is what really moves a lot of like from from you know raw capability model to like something that actually has meaningful impact that scaffolding is not just like oh only the labs of people trained models can do it like the the number of people can contribute to that both in terms of people with technical expertise people with and people with nontechnical expertise it's it's much larger if the scaffolding is what really moves capabilities what gets us to like this incredible technology being realized then the number of people can contribute to it is not just those who work at Frontier Labs. uh there's a tremendous amount of technical work to do uh but also non-technical as soon as you start integrating in uh this technology in the life of real people as as soon as you start working on you know highstake medical application or other highstake domains then you know large amount of like population can contribute in making this technology better and make it work for for everyone just the base model uh like I feel like the number of people can really can help making this technology really work for everyone. It's large. Everyone in society is feels like can contribute.</p>
</details>

**Matt:** 好的。这似乎是一个很好的结束点。非常感谢你们俩，不仅为这次对话，也为你们在开源前沿 AI 领域所做的所有工作，这感觉非常需要且极其重要。所以，非常感谢你们的时间和所有的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Well, that feels like a wonderful place to leave it. Uh thank you so much both uh not just for this conversation but for all the work that you're doing uh in open source frontier AI uh which uh you know feels sorely needed and uh extremely important. So, uh, really appreciate really appreciate the time and and all the thoughts. Thank you so much.</p>
</details>