---
area: tech-insights
category: technology
companies_orgs:
- Stanford
- OpenAI
- FAIR
date: 2023-02-27
layout: post.njk
media_books:
- The New Yorker
products_models:
- Llama
- AlphaZero
- BERT
- GPT-2
project:
- ai-impact-analysis
- systems-thinking
source: https://www.youtube.com/watch?v=dO4TPJkeaaU
speaker: Lei
summary: OpenAI 研究员 Jack Rae 在斯坦福 MLSys 研讨会上深入探讨了压缩与通用人工智能（AGI）之间的本质联系。他论证了生成式模型实际上是最先进的无损压缩器，并基于最小描述长度（MDL）原则提出：更好的压缩意味着更强的泛化能力与理解力。文章结合算术编码、模型缩放定律及
  S4 架构，解析了为何追求极致的数据压缩可能是通往 AGI 的关键路径，同时指出了当前像素级建模的局限性。
tags:
- canada
- code
- health
- model
- scaling-law
title: 压缩即智能：AGI 的最小描述长度之路
---

###介绍与开场大家好，欢迎来到斯坦福 MLSys 研讨会系列的第 76 期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello everyone and welcome to episode 76 of the Stanford MLSys seminar series.</p>
</details>

今年我们非常高兴能与 CS324 课程“**基础模型**（Foundation Models:在大规模数据上训练的、可适应多种下游任务的深度学习模型）的进展”建立合作关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today of course we're or this year we're very excited to be partnered with CS324 advances in Foundation models.</p>
</details>

今天我有 Michael 和 Ivonica 陪同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today I'm joined by Michael say hi and Ivonica.</p>
</details>

今天的嘉宾是来自 OpenAI 的 Jack Rae，他为我们准备了一个关于压缩与 **AGI**（Artificial General Intelligence: 通用人工智能，指具备与人类同等或超越人类的广泛认知能力的智能系统）的非常精彩的演讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And today our guest is Jack Rae from OpenAI and he's got a very exciting talk prep for us about compression and AGI.</p>
</details>

我们非常期待听到他的演讲，像往常一样，如果你有任何问题，可以在 YouTube 聊天室提问，或者如果你是班级成员，可以在 Discord 频道提问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so we're very excited to listen to him as always if if you have questions you can post them in YouTube chat or if you're in the class there's that Discord Channel.</p>
</details>

请踊跃提问，在他演讲结束后，我们将进行精彩的讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so to keep the questions coming and after his talk we will we'll have a great discussion.</p>
</details>

那么，Jack，把舞台交给你了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so with that Jack take it away.</p>
</details>

###压缩与 AGI 的哲学基础好的，太棒了，非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay fantastic thanks a lot.</p>
</details>

今天我要讲的是针对 AGI 的压缩，本次演讲的主题是希望大家深入思考基础模型及其训练目标，深思我们正在做什么，为什么它有意义，以及它有哪些局限性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um today I'm going to talk about compression for AGI and the theme of this talk is that I want people to kind of think deeply about uh Foundation models and their training objective and think deeply about kind of what are we doing why does it make sense what are the limitations.</p>
</details>

这目前是一个非常重要的话题，我认为在这个领域，即基础模型、大型语言模型及其应用方面，存在着巨大的兴趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is quite a important topic at present I think there's a huge amount of interest in this area in Foundation models large language models their applications.</p>
</details>

这其中很多兴趣非常合理地源于“它确实有效”这一原则，因为它有效，所以很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a lot of it is driven very reasonably just from this principle that it works and it works so it's interesting.</p>
</details>

但如果我们仅仅停留在“它有效”的层面，我们就很难预测或对其为何有效以及未来走向有一个良好的直觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if we just kind of sit within the kind of it works realm it's hard to necessarily predict or have a good intuition of why it might work or where it might go.</p>
</details>

所以我希望大家能从这次演讲中获得一些要点，其中一些是非常务实的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So some takeaways that I want so I hope people like people hopefully to take from this tour car some of them are quite pragmatic.</p>
</details>

我将介绍关于 **MDL**（Minimum Description Length: 最小描述长度，一种信息论原则，认为数据的最佳模型是能以最短代码描述数据的模型）的背景知识，以及为什么寻求数据的最小描述长度可能在解决感知问题中扮演重要角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to talk about some background on the minimum description length and why it's seeking the minimum description length of our data may be an important role in solving perception.</p>
</details>

我想特别指出一点，即 **生成式模型**（Generative Models: 能够学习数据分布并生成类似新数据的模型）实际上是 **无损压缩器**（Lossless Compressors: 能够完美还原原始数据的压缩算法），具体来说，大型语言模型实际上是最先进的无损压缩器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh I want to make a particular point that generative models are actually lossless compressors and specifically large language models are actually state of the art lossless compressors.</p>
</details>

这对许多人来说可能是一个反直觉的观点，因为这些模型非常大，占用了大量空间，我将详细剖析这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which may be a counter-intuitive point to many people given that they are very large and use a lot of space and I'm going to unpack that in detail.</p>
</details>

最后，我还将谈谈压缩方法的一些局限性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'm also going to kind of end on some notes of limitations of the approach of compression.</p>
</details>

###最小描述长度（MDL）与感知让我们从背景知识开始，即最小描述长度以及它为何与感知相关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's start with this background minimum description length and why it relates to perception.</p>
</details>

即使追溯到从数据中学习的终极目标，我们可能有一组已收集的观测结果，即我们想要学习的一组数据，我们可以将其视为这个红色的小圆圈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even going right back to the kind of ultimate goal of learning from data we may have some set of observations that we've collected some set of data that we want to learn about which we consider this small red circle.</p>
</details>

我们要实现的目标实际上是双重的：我们想要学习如何预测和理解我们观察到的数据，其目的是为了理解并泛化到更大范围的所有可能的观测结果（全集）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we actually have a kind of a two-pronged goal we want to learn like uh how to kind of predict and understand our observed data with the goal of understanding and generalizing to a much larger set of Universe of possible observations.</p>
</details>

我们可以这样想，如果我们想从对话数据中学习，我们可能收集了一组对话记录，但我们实际上并不关心仅仅了解这些特定的对话记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can think of this as if we wanted to learn from dialogue data for example we may have a collection of dialogue transcripts but we don't actually care about only learning about those particular dialogue transcripts.</p>
</details>

我们希望能够泛化到一个模型可能遇到的所有可能的有效对话的超集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to then be able to generalize to the superset of all possible valid conversations that a model may come across right.</p>
</details>

那么，尝试学习泛化的非常严谨的方法是什么？这已经是一个存在了数千年的哲学问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what is an approach what is a very like rigorous approach to trying to learn to generalize well I mean this has been a philosophical question for multiple thousands of years.</p>
</details>

甚至在公元前四世纪，哲学家们就已经在思考一些相当不错的原则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And even actually kind of full Century BC uh there's like some pretty good um principles that philosophers are thinking about.</p>
</details>

亚里士多德（Aristotle）提出了这样一种观念：假设论证的优越性源于更少的前提或假设。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Aristotle had this notion of um assuming the super superiority of the demonstration which derives from fewer postulates or hypotheses.</p>
</details>

这意味着如果我们有一组简单的假设，那么这很可能是对论证的一个更好的描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this notion of uh we have some um simple set of hypotheses um then this is probably going to be a superior description of a demonstration.</p>
</details>

这种“简单即更好”的通用主题，更近期的归因是 14 世纪威廉的 **奥卡姆剃刀**（Occam's Razor: 如无必要，勿增实体），这是许多人在机器学习或计算机科学课程中可能遇到过的概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this kind of General kind of simpler is better um theme is more recently attributed to William 14th century or Cam's Razer this is something many people may have encountered during a machine learning or computer science class.</p>
</details>

他本质上是在延续这一哲学主题：在几个相互竞争的解释中，最简单的一个总是更有可能是正确的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He is essentially continuing on this kind of philosophical theme the simplest of several competing explanations is always likely likely to be the correct one.</p>
</details>

我认为在机器学习领域，我们可以走得更远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um now I think we can go even further than this within machine learning.</p>
</details>

目前，奥卡姆剃刀几乎被用来为每一个可能的研究角度辩护，但我认为奥卡姆剃刀的一个非常严谨的体现来自于 Ray Solomonoff 在 1964 年提出的归纳推理理论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think right now Occam's razor is almost used to defend almost every possible angle of research but I think one actually very rigorous incarnation of what comes Razer is from race Island's theory of inductive inference 1964.</p>
</details>

所以我们几乎到了现代，他说了一些非常具体并且实际上已在数学上被证明的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're almost at the present day and he says something quite concrete and actually mathematically proven.</p>
</details>

也就是说，如果你有一个由算法生成的数据宇宙，以及该宇宙的观测结果（编码为数据集，即那个红色的小圆圈），那么对该数据集的最佳预测来自于该数据集的最小可执行归档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is that if you have a universe of data which is generated by an algorithm and observations of that universe so this is the small red circle encoded as a data set are best predicted by the smallest executable Archive of that data set.</p>
</details>

这就是所谓的最小无损预测，或者称为最小描述长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that says the smallest lossless prediction or otherwise known as the minimum description length.</p>
</details>

我觉得最后这一点实际上是将那些存在于时间和哲学中的概念转化为数学和相当具体的术语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I feel like that final one is actually putting into mathematical and quite concrete terms um these kind of Notions that existed through timing velocity.</p>
</details>

我觉得这是对那个原本相当模糊的哲学问题的一个相当具体和可操作的回应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it kind of we could even relate this to a pretty I feel like that is a quite a concrete and actionable retort to this kind of um quite um murky original philosophical question.</p>
</details>

###中文房间与理解的本质如果我们把这个应用到一个著名的哲学问题上，比如 John Searle 的“中文房间”思想实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if we even apply this to a well-known philosophical problem cells Chinese room 4 experiment.</p>
</details>

这个实验设想有一个计算机程序，甚至是一个人，在一个房间里执行从英语到中文的翻译。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where there's this notion of a computer program or even a person kind of with it within a room that is going to perform translation from English English to Chinese.</p>
</details>

他们特别使用了一本包含所有可能的输入（比如英语短语）及其对应的中文翻译的完整规则书。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they're going to specifically use a complete rulebook of all possible inputs or possible say English phrases they receive and then and then the corresponding say Chinese translation.</p>
</details>

最初的问题是，这个人是否“理解”如何进行翻译？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the original question is does this person kind of understand how to perform translation.</p>
</details>

我认为 Solomonoff 的压缩论点在这里实际上给了我们一些非常具体的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and I think actually this compression argument this race on this compression argument is going to give us something quite concrete here.</p>
</details>

回到红色小圆圈和白色大圆圈的比喻，如果我们拥有所有可能的翻译，然后只是遵循规则书，这可以说是对翻译的“最少可能的理解”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh this is kind of going back to the small red circle large white circle if if we have all possible translations and then we're just following the rule book this is kind of the least possible understanding we can have of translation.</p>
</details>

如果我们有这样一本包含所有可能翻译的巨书，很直观的是，只要我们需要创造一个新词，或者有一个新短语，或者任何不符合原始书籍内容的东西，这个系统就会完全无法翻译。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we have such a giant book of all possible translations and it's quite intuitive if we all we have to do is coin a new word or have a new phrase or anything which just doesn't actually fit in the original book this system will completely fail to translate.</p>
</details>

因为它对翻译的理解最少，因为它对任务（数据集）的表示最大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because it has the least possible understanding of translation and it has the least understandable version of translation because that's the largest possible representation of the the task the data set.</p>
</details>

然而，如果我们可以把它变得更小，也许我们把它提炼成一套更小的规则，一些语法，一些基本词汇，然后我们可以执行这个程序，也许这样一个系统对翻译有更好的理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However if we could make this smaller maybe we kind of distill sorry we distill this to a smaller set of rules some grammar some basic vocabulary and then we can execute this program maybe such a system has a better understanding of translation.</p>
</details>

所以我们可以根据这本规则书的压缩程度来对其评分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can kind of grade it based on how compressed this rulebook is.</p>
</details>

实际上，如果我们能将其压缩到最小描述长度，即任务的最压缩格式，我们甚至可以认为这样的系统对翻译拥有“最佳可能的理解”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And actually if we could kind of compress it down to the kind of minimum description like the most compressed format the task we may even argue such a system has the best possible understanding of translation.</p>
</details>

###生成式模型作为压缩器对于基础模型，我们通常处于讨论生成式模型的范畴，即一种对自然数据赋予概率的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um now for foundation models we typically are in the realm where we're talking about generator model one that places probability on natural data.</p>
</details>

非常好的一点是，我们实际上可以用生成式模型以非常精确的数学格式来描述数据集的无损压缩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what is quite nice is we can actually characterize the lossless compression of a data set using a generator model in a very precise mathematical format.</p>
</details>

Solomonoff 说我们应该尝试找到最小描述长度，实际上我们可以用生成式模型在实践中做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So race on enough says we should try and find the minimum description length well we can actually try and do this practically with a generator model.</p>
</details>

数据集 D 的无损压缩大小可以描述为：生成式模型在 D 上评估的负对数似然（Negative Log Likelihood），加上该生成式模型的描述长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the size the lossless compression of our data set D can be characterized as the negative log likelihood from a genetic model evaluated over D plus the description length of this generator model.</p>
</details>

对于神经网络，我们可以将其视为初始化神经网络的代码量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for a neural network we can think of this as the amount of code to initialize the neural network.</p>
</details>

这实际上可能非常小，这并不受神经网络大小的影响，而只是实例化它的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That might actually be quite small this is not actually something that would be influenced by the size of the neural network this would just be the code to actually instantiate it.</p>
</details>

所以实现一个训练 Transformer 的代码库可能只需要几百 KB，这是一个相当令人惊讶的事实。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it might be a couple hundred kilobytes to actually Implement a code base which trains a transformer for example and actually this is quite a surprising fact.</p>
</details>

###不可作弊的评估标准那么这个方程告诉了我们什么？它告诉了我们什么新东西吗？我认为它告诉了我们一些非常深刻的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what does this equation tell us does it tell us anything new well I think it tells us something quite profound.</p>
</details>

首先，我们想要最小化这个一般属性，我们可以通过两种方式做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first thing is we want to minimize this general property and we can do it by two ways.</p>
</details>

一种是通过拥有一个在数据集上表现越来越好的生成式模型，即越来越低的负对数似然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is via having a generative model which has better and better performance of our data set that is a lower and lower negative log likelihood.</p>
</details>

但我们也要考虑我们注入到模型 F 中的先验信息，这意味着我们不能为了让模型表现更好而给 F 塞满各种先验，如果这导致整体上并没有获得更好的压缩效果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also we are going to account for the prior information that we inject into F which is that we can't stuff F full of priors such that maybe it gets better performance but overall it does not get a bit of a compression.</p>
</details>

在这个意义上，压缩是一种思考我们要如何最好地建模数据的很酷的方式，而且它实际上是一个不可作弊的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so on that note yeah compression is a a cool way of thinking about how we should best model our data and it's actually kind of a non-gameable objective.</p>
</details>

数据污染（Contamination）是机器学习中的一个大问题，试图评估进展往往受到测试集是否泄露到训练集中的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So contamination is a big problem within uh machine learning and trying to evaluate progress is often hampered by Notions of whether or not test sets are leaked into training sense.</p>
</details>

而在压缩这个标准下，这实际上是我们无法作弊的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well with compression this is actually not not something we can game.</p>
</details>

想象一下，我们在整个数据集 D 上预训练模型 F，使其完美记忆数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So imagine we pre-trained F on a whole data set D such that it perfectly memorizes the data set.</p>
</details>

也就是说，D 的概率为 1，对数概率为 0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AKA such that the probability of D is one log probability is zero.</p>
</details>

在这种情况下，如果我们回到这个公式，第一项将归零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In such a case if we go back to this formula the first term will zip to zero.</p>
</details>

然而，通过这样做，通过注入并在整个数据集上预训练我们的模型，我们必须将这些添加到生成式模型的描述长度中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However now essentially by doing that by injecting and pre-training our model on this whole data set we have to add that to the description length of our generative model.</p>
</details>

所以现在 F 不仅包含训练它的代码等，还包含 D 的描述长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now F not only contains the code to train it Etc but it also contains essentially a description length of d.</p>
</details>

所以在这种设置下，预先污染 F 根本无助于我们优化压缩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this setting essentially a pre-contaminating f it does not help us optimize the compression.</p>
</details>

这与常规的测试集基准测试形成对比，在常规测试中，我们可能只是测量测试集性能，并希望它能衡量泛化能力，本质上是作为压缩的代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this contrasts to regular test set benchmarking where we may be just measuring test set performance and hoping that measures generalization and is essentially a proxy for compression.</p>
</details>

这确实可以是，但我们也发现了许多场景，测试集的变体本质上通过某种方式溜进了我们的训练集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it can be but also we can find lots and lots of scenarios where we essentially have variations of the test set that have slipped through the net in our training set.</p>
</details>

###大型语言模型：最先进的无损压缩器现在我已经谈到了最小描述长度的哲学背景，以及为什么它是一个合理的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay so we've talked about philosophical backing of the minimum description length and maybe why it's a sensible objective.</p>
</details>

现在我将具体谈谈它在大型语言模型中的应用，我们可以将其映射到任何生成式模型，但我将专门以语言模型为基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now I'm going to talk about it concretely for large language models and we can kind of map this to any uh generative model but I'm just going to kind of ground it specifically in the marsh language model.</p>
</details>

如果我们考虑数据 D 的对数概率是什么，它是我们在数据集上的 Token（词元）的下一个 Token 预测的总和。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we think about what is the log problem of our data D well it's the sum of our next token prediction of tokens over our data set.</p>
</details>

这本质上就是我们的训练目标，如果我们考虑数据集 D，并且我们训练了一个 Epoch（周期），这就是我们所有训练损失（Training Loss）的总和。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so this is something that's essentially our training objective if we think of our data set D um and we have one Epoch then this is the sum of all of our training loss.</p>
</details>

所以这是一个相当有形的术语，是我们实际上可以测量的真实东西。而 F 是我们的 Transformer 语言模型的描述长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's pretty tangible term it's a real thing we can measure and F is the description length of our Transformer language model.</p>
</details>

实际上，有人在不使用任何外部库的情况下，在大约 100 到 200 KB 内实现了一个 Transformer 和训练机制，所以这实际上是非常小的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and actually there are people that have implemented a Transformer and a training regime just without any external libraries in about I think 100 to 200 kilobytes so this is actually something that's very small.</p>
</details>

我想再次强调这一点，这不依赖于我们神经网络的大小。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and and as I said I just want to enunciate this this is something where it's not dependent on the size of our neural network.</p>
</details>

如果一段代码可以实例化一个 10 层 Transformer，同一段代码只需更改代码中的几个数字，就可以实例化一个 1000 层 Transformer。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if a piece of code can instantiate a 10 layer Transformer the same piece of code you can just change a few numbers in the code it can instantiate a 1000 layer Transformer.</p>
</details>

实际上，我们初始 Transformer 的描述长度并不受神经网络实际大小的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually the description length of our initial Transformer is unaffected really by how large the actual neural network is.</p>
</details>

我们将通过一个实际使用语言模型进行无损压缩的例子来看看为什么会这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to go through an example of actually using a language model to losslessly compress where we're going to see why this is the case.</p>
</details>

让我们举一个具体的例子来进一步阐明这一点，比如 **Llama**（Meta 发布的一系列开源大型语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay so let's just give like a specific example and try and ground this out further so okay llama it was a very cool paper that came out from fair just like late last week.</p>
</details>

这是他们的一些训练曲线，忽略较小的两个模型，最大的两个模型是在其数据集的一个 Epoch 上训练的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was looking at the paper here's some training curves um now forgetting the smaller two models there are the two largest models are trained on one Epoch of their data set.</p>
</details>

所以实际上我们可以对它们的训练损失求和，并且我们也可以粗略估计用于训练它们的代码库的大小。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So actually we could sum their training losses uh AKA this quantity and we can also roughly approximate the size of of the um of the code base that was used to train them.</p>
</details>

因此，我们可以看到 33B 还是 65B 两个模型中哪一个是更好的压缩器，并据此预期哪一个在泛化和能力方面会表现更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and therefore we can see like okay which of these two moles the 33b or the 65b is the better compressor and therefore which would we expect to be the better model at generalizing and having greater set of capabilities.</p>
</details>

显而易见是 65B，我会告诉你原因。首先，为了强调这一点，这些模型具有相同的描述长度，它们具有不同数量的参数，但用于生成它们的代码实际上具有相同的复杂度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's pretty it's going to be pretty obvious at 65b I'll tell you why firstly just to drum this point home these models all have the same description length they have different number of parameters but the code that's used to generate them is actually of same of the same complexity.</p>
</details>

然而，它们的训练损失积分并不相同，65B 的训练损失积分更小。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However they don't have the same integral of the training loss 65b has a smaller integral Windows training loss.</p>
</details>

因此，如果我们将这两项相加，我们会发现 65B 本质上为其训练数据集创建了更简洁的描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And therefore if we plug if we sum these two terms we would find that 65b essentially creates the more concise description of its training data set.</p>
</details>

这可能看起来有点奇怪，我会代入一些实际数字。假设实例化和训练 Transformer 的代码大约是 1 MB。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay so that might seem a little bit weird I'm going to even plug some actual numbers in let's say we assume it's about one megabyte for the code to instantiate and train the Transformer.</p>
</details>

如果我们粗略计算一下，大约是 400 GB（将对数损失转换为比特再转换为字节）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then if we actually just calculate this roughly it looks to be about say 400 gigabytes um you have some of your log loss converting into bits and then bytes it's going to be something like 400 gigabytes.</p>
</details>

这是针对约 5.6 TB 的原始文本数据集（1.4 万亿 Token，每个 Token 4 字节），所以这是大约 14 倍的压缩率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is from an original data set which is about 5.6 terabytes of rortex so 1.4 trillion tokens times four is about 5.6 terabytes so that's a compression rate of 14x.</p>
</details>

相比之下，**Hutter Prize**（赫特奖：一个著名的无损文本压缩竞赛）上最好的文本压缩器是 8.7 倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the best text compressor on the Hudson prize is 8.7 X.</p>
</details>

这一点的结论是，随着我们扩大规模，创建更强大的模型，并在更多数据上训练它们，我们实际上正在创造一种能够提供越来越低的无损数据压缩的东西，即使中间模型本身可能非常大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the takeaway of this point is um actually as we're scaling up and we're creating more powerful models and we're training them on more data we're actually creating something which actually is providing a lower and lower lossless compression of our data even though the intermediate model itself may be very large.</p>
</details>

###无损压缩的机制：算术编码现在我已经谈到了大型语言模型是最先进的无损压缩器，但我只想梳理一下这是如何做到的机制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay so now I've talked a bit about how large language models are state of the art lossless compressors but I just want to maybe go through the mechanics of how do we actually get a something like a generative model literally losslessly compress.</p>
</details>

这可能看起来很神秘，当我们实际进行无损压缩时，是压缩了权重还是别的什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This may be something that's quite mysterious like what is happening like when you actually losslessly compress this thing is it the weights or is it something else.</p>
</details>

我们将给出一个假设的场景：Satya（微软 CEO）和 Sundar（谷歌 CEO）坐在那里，Satya 想把包含世界知识的数据集 D 发送给 Sundar。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to give us a hypothetical kind of scenario we have two people sat here in Sundar Satya wants to send a data set of the world's knowledge encoded in D to send R.</p>
</details>

他们都可以访问非常强大的超级计算机，但连接带宽很低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They both have access to very powerful supercomputers but there's a low bandwidth connection.</p>
</details>

我们将使用一种名为 **算术编码**（Arithmetic Encoding: 一种熵编码技术，可以将整个消息编码为 0 和 1 之间的一个实数）的技巧作为传输数据的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are going to use a trick called arithmetic encoding as a way of communicating the data set.</p>
</details>

假设我们在时间步 t 有一个 Token x，以及一个 Token 的概率分布 P。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So say we have a token x a timestep t from of some vocab and a probability distribution p over tokens.</p>
</details>

算术编码，如果不深入细节的话，是一种允许我们将 Token x 根据概率分布映射到某个 Z 的方法，Z 本质上是我们数据的压缩转录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Arithmetic encoding without going into the nuts and bolts is a way of allowing us to map our token x given our probability distribution over tokens to some Z where Z is essentially our compressed transcripts of data.</p>
</details>

Z 将精确使用 -\log_2 P(x_t) 比特。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Z is going to use exactly minus log 2 p t x t bits so.</p>
</details>

算术编码实际上将其映射为某种浮点数，这是一种真实存在的算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The point of this step is like arithmetic encoding actually Maps it to some kind of like floating Point number as it turns out and it's a real algorithm.</p>
</details>

我们可以使用算术解码来获取这个加密的转录，只要我们有 Token 的概率分布，我们就可以恢复原始的 Token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can use arithmetic decoding um to take this encrypted transcript and as long as we have our probability distribution of tokens we can then recover the original token.</p>
</details>

所以我们可以把概率分布看作一把钥匙，它可以让我们锁定 Token 的压缩副本，然后解锁它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can kind of think about probability probability distribution as kind of like a key it can allow us to kind of lock in a compressed copy of our token and then unlock it.</p>
</details>

如果 P 是均匀分布，即没有关于 Token 的任何信息，那么我们只使用 \log_2 V（词汇表大小）的比特空间，这本质上等同于用二进制朴素地存储 Token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if p is uniform so there's no information about our tokens then this would be this one over v p is just one over the size of V so we can use log 2 V bits of space uh that is just essentially the same as naively storing in binary uh our our XT token.</p>
</details>

如果 P 是一个预言机（Oracle），即它确切知道 Token 是什么（概率为 1），那么 \log_2 P 为 0，使用 0 空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If p is an oracle so it knows like exactly what the token was going to be so P of x equals one then log 2p equals zero and this uses zero space.</p>
</details>

显然，我们想要的是一个能越来越好地建模我们数据、因此使用更少空间的生成式模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are the two extremes and obviously what we want is a generative model which better and better molds our data and therefore it uses less space.</p>
</details>

###Satya 与 Sundar 的思想实验在实践中会发生什么？Satya 可以拿他的 Token 数据集，训练一个 Transformer，并获得随后 Token 的概率集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what would actually happen in practice if Satya can take his data set of tokens trainer Transformer and get a subsequent set of probabilities uh over the tokens like so next token prediction.</p>
</details>

然后使用算术编码将其映射到这个转录列表，其大小将是 Transformer 在数据集上的负对数似然的总和。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then use arithmetic encoding to map it to this list of transcripts and this is going to be of size sum of negative log likelihood of your Transformer over the data set.</p>
</details>

他还要发送那个转录列表以及一些可以确定性地训练一个更大 Transformer 的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And he's also going to send he's going to send that list of transcripts and some code that can deterministically train a larger Transformer.</p>
</details>

在另一端，Sundar 可以运行这段代码，这是确定性的，模型将运行神经网络。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then on the other side Sundar can run this code which is deterministic and the mod is going to run the neural network.</p>
</details>

它给出了第一个 Token 的概率分布，他将使用该概率分布和算术解码来获得第一个 Token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It gives a probability distribution to the first token he's going to use arithmetic decoding with that to get his first token.</p>
</details>

然后你可以训练它（例如运行一步 SGD），预测下一个 Token，依此类推，本质上是迭代地进行并恢复整个数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can either train on that or whatever the code does so then continue on predict the next token etc etc and essentially iteratively go through and recover the whole data set.</p>
</details>

这几乎是一个思想实验，因为实际上要进行这 14 倍的压缩（如 Llama 模型），需要大量的中间计算（训练大型语言模型），这感觉是禁止性的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is kind of like almost a fourth experiment because in practice to send this data at 14x compressed compression say if we're talking about the Llama model uh that's it's a bit more compressed than gzip but this is requiring a huge amount of intermediate compute switches to train a large language model which feels inhibitive.</p>
</details>

但这个思想实验不仅仅是因为我们可能想要在更小的带宽上传输数据，也是为了解释和证明为什么我们可以用语言模型进行无损压缩，以及为什么这就是它们的实际目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this thought experiment is really derived not because we actually might want to send data on a smaller and smaller bandwidth it's also just derived to kind of explain and prove why we can actually losslessly compress with language models and why that is their actual objective.</p>
</details>

有趣的是，这正是 Claude Shannon 在 40 年代提出语言模型时所思考的确切设置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if this kind of setup feels a little bit contrived well the fun fact is this is the exact setup that called Shannon was thinking about um when he kind of proposed language models in the 40s.</p>
</details>

###通往 AGI 的配方与局限性解决感知和迈向 AGI 的配方是什么？这实际上是一个两步过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's just think about solving perception and moving towards AGI what's the recipe well it's kind of a two-step process.</p>
</details>

第一步是收集我们想要理解的所有有用的感知信息；第二步是使用强大的基础模型尽可能好地学习压缩它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is collect all useful perceptual information that we want to understand and the second is learn to compress it as best as possible with a powerful Foundation model.</p>
</details>

这样做的好处是它不局限于特定的角度。例如，你可以使用任何能提高压缩率的研究方法，我认为这将基于这一严谨的基础进一步推进我们的感知能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the nice thing about this is it's not constrained to a particular angle for example you can use any research method that improves compression and I would posit that this will further Advance our capabilities towards perception based on this rigorous foundation.</p>
</details>

这可能是更好的架构，也可能是进一步扩大数据和计算规模（Scale）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that might be a better architecture it may be scale further scaling of data and computes.</p>
</details>

事实上，所谓“Scale is all you need”（规模即一切）几乎已经成为一个梗，但我真的认为，只要规模能继续显著提高压缩率，它就会带来好处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is in fact something that's almost become a meme people say scale is all you need but truly I think scale is only going to benefit as long as it is continuing to significantly improve compression.</p>
</details>

但你也可以使用任何其他技术，这不一定只是常规的生成式模型。我们甚至可以在 F 的描述长度上多花几个比特，添加一些工具，如计算器，让它利用工具更好地预测数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you could any use any other technique and this doesn't have to be just a regular generative model it could even we could even maybe spend a few more bits on the description length of F and add in some tools add in things like a calculator allow it to make use of tools to better predict its data.</p>
</details>

关于这一点，还有一个常见的混淆点，即 **有损压缩**（Lossy Compression）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just want to remark at this point on a very common point of confusion on this topic which is about lossy compression.</p>
</details>

我想《纽约客》（The New Yorker）有一篇非常有趣的文章（Ted Chiang 的文章）讨论了这个话题，我认为文章中对此有很多困惑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think there's a very interesting New Yorker article about about this kind of Topic in general kind of thinking about you know what are what are language models doing what are Foundation models doing and I think there's a lot of confusion in this article specifically on this topic.</p>
</details>

从有损压缩的角度来看，神经网络感觉非常次优，它不仅丢失了信息，甚至连重建都做得不好，而且可能臃肿且庞大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where from the perspective of glossy compression and neural network feels very kind of sub-optimal it's losing information in Red so it doesn't even do reconstruction very well and it's potentially bloated and larger and has all these other properties.</p>
</details>

我想借此机会反思一下最初的目标：我们真正关心的是理解并泛化到所有可能观测结果的空间，我们并不关心也不以重建原始数据为训练目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just wanted to take this kind of point to reflect on the original goal which is we really care about understanding and generalizing to the space of the universe of possible observations so we don't care and we don't train towards reconstructing our original data.</p>
</details>

###局限性：像素级建模与不可观测数据这种方法的一个担忧是，它可能在理论上是正确的，但并不务实。试图建模并压缩所有东西可能非常低效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so I think there's one concern with this approach which is that it may be just the right thing to do or like an unbiased kind of attempt at solving perception but maybe it's just not very pragmatic and actually trying to kind of model everything and compress everything it may be kind of correct but very inefficient.</p>
</details>

图像级建模就是一个很好的例子，在像素级别建模整个图像通常因为成本过高而无法极好地工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think Image level modeling is a good example of this where modeling a whole image at the pixel level has often kind of been prohibitively expensive to like work incredibly well.</p>
</details>

如果是视频建模，每一帧的每一个像素，这真的感觉是先发制人的疯狂和昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we turn this to video modeling every pixel of every frame it really feels preemptively crazy and expensive.</p>
</details>

另一个非常有效的观点是，这通常被框定为 AGI 的唯一要素，但至关重要的是，世界上有很多极其有用的信息是不可观测的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um another very valid point is I think this is often framed to people that maybe are thinking that this is like the only ingredient for AGI is that crucially there's lots of just very useful information in the world that is not observable.</p>
</details>

因此，我们不能指望仅仅通过压缩所有可观测的观测结果来实现 AGI，因为我们会错过很多东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And therefore we can't just expect to compress all observable observations achieve AGI because there'll just be lots of things we're missing out.</p>
</details>

例如 **AlphaZero**（DeepMind 开发的下棋 AI），如果你只观察有限的人类棋局，你会错过所有这些专家玩家的中间搜索树。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so I think a good example of this would be something like Alpha zero so playing the game of Go um I think if you just observe the limited number of human games that have ever existed one thing that you're missing is all of the intermediate search trees of all of these expert players.</p>
</details>

AlphaZero 的自我博弈机制的一大好处是，你本质上可以收集大量不同类型游戏的中间搜索树数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one nice thing about something like Alpha zero with its kind of self-play mechanism is you essentially get to collect lots of data of intermediate search trees of many many different types of games.</p>
</details>

所以这种“在策略”（On-policy）行为，即拥有一个可以行动并随后获取所需数据的代理，我认为仍然非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so that kind of on policy behavior of like actually having an agent that can act and then Source out the kind of data that it needs I think is still very important.</p>
</details>

###Q&A 精选：算术编码与未来架构**Michael**: 很多人对算术解码部分有些困惑，特别是接收者如何在没有训练好的模型的情况下解码消息并恢复原始数据集？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think people are a bit confused about um how is it possible for the receiver to decode the message and get the original data set back without having access to the train bottle.</p>
</details>

**Jack Rae**: 接收者并没有接收神经网络，它只接收了用于实例化一个新的神经网络并运行与之前完全相同的训练设置的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The receiver does not receive the neural network it just receives the code to instantiate kind of the fresh neural network and run the identical training setup that it saw before.</p>
</details>

首先是一个全新的神经网络，它会给出第一个 Token 的概率分布。他有这个概率分布和转录（Z_1），可以使用算术解码来恢复第一个 Token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's a fresh neural network uh that's going to give us like a probability distribution for the first token and so he's got this probability distribution for the first token and he's got the transcript um of what that token should be and you can use arithmetic decoding to actually recover that first token.</p>
</details>

然后为了简单起见，假设我们在一个 Token 上训练一步 SGD，然后我们用更新后的模型预测下一个 Token，得到 P_2，我们有 Z_2，然后恢复 X_2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then let's imagine for Simplicity we actually like train like one SGD step on one token at a time so we take our SGD step and then we have the model that's like was used to predict the next token so we can get that P2 we have Z2 and then we can recover X2.</p>
</details>

**Michael**: 这很有道理。那么 S4（结构化状态空间序列模型）这类工作呢？它是否暗示了能够更好地压缩不同模态（如图像、音频）的模型会更智能？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Michael is slacking me he wants me to ask if you follow the S4 line of work. Does that suggest you that like something like S4 or something with a different um you know encoding would uh would have these like implications for I don't know being more intelligent or or being a better compressor of these other modalities.</p>
</details>

**Jack Rae**: 是的，S4 允许你拥有比注意力机制（Attention）更长的上下文，而无需支付二次方的计算成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah I think that's a really important architecture. So like on a broad brushstroke like S4 allows you to maybe have a much longer context uh than attention without paying the quadratic compute cost.</p>
</details>

目前我们的架构（Transformer）有一个巨大的局限性，即它不以任何方式适应其输入的信息内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one is we currently have a huge limitation in our architecture which is a Transformer or even just like a deep content and that is that the architecture does not adapt in any way to the information content of its inputs.</p>
</details>

比如字节级序列和 BPE（Byte Pair Encoding）分词序列包含相同信息，但 Transformer 在字节级序列上会花费 4 倍的计算量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Transformer will just spend four times more compute on the byte level sequence if it was fed it and it'll spend four times Less on the bpe sequence of this feather even though they have the same information content.</p>
</details>

我们没有一种算法可以根据内容的难易程度自适应地分配计算量。这确实损害了图像处理的效率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we don't have some kind of algorithm which could like kind of fan out and then just like process the byte level sequence with the same amount of approximate compute. And I think that really hurts images.</p>
</details>

像 **S4** 这样允许更长上下文且计算效率更高的架构是非常有前途的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think S4 is very cool I think it could be could help in this direction for sure.</p>
</details>

---

基于王冠提到的OpenAI研究员之前在斯坦福分享的，让AI写一篇容易懂的文章。

训练GPT到底在干什么？

大多数人会说"学语言规律""预测下一个词"。

这些都对，但还不够深刻。

OpenAI的Jack Rae 在斯坦福提出了一个让人眼前一亮的视角：训练大语言模型，本质上是在做无损压缩。

很反直觉对吧？

一个175B参数的模型，怎么可能是"压缩"？

但如果你理解了这个视角，很多困惑就会豁然开朗。

先聊点哲学。

早在公元前4世纪，亚里士多德就说过："用更少假设推导出的论证，往往更优越"。

这种"简单即美"的思想，后来被14世纪的奥卡姆总结成著名的"奥卡姆剃刀"原则，最简单的解释往往是正确的。

但这些哲学思辨，在1964年被Ray Solomonoff变成了可证明的数学定理：

如果一个数据集是由某个算法生成的，那么预测这个数据集的最佳方式，就是找到该数据集的最小可执行压缩包。

定理很精妙，说的是：你对数据压缩得越好，就越理解数据的本质。

回想下"中文房间"这个经典思想实验。

一个人拿着一本巨大的规则手册，里面记录了所有可能的英文句子和对应的中文翻译。

这个人真的"理解"翻译吗？

从压缩的角度看，答案很清楚：这本手册太大了，是最差的理解方式。

如果出现一个新词、新表达，系统立刻崩溃，因为它只是在查表，没有真正理解语言的规律。

但如果你能把这本手册压缩成一套精简的语法规则和核心词汇，那就不一样了。

压缩率越高，说明你提炼出的规律越本质，泛化能力就越强。

大语言模型是最好的压缩器

先看一组惊人的数字。

Meta发布的Llama模型，65B版本在1.4万亿token的数据上训练了一个epoch。

原始数据大小是5.6TB，但如果用这个模型来"压缩"，最终只需要大约400GB的空间。

压缩率14倍。

作为对比，目前最好的传统文本压缩算法（Hutter Prize获奖者）的压缩率是 8.7倍。

大语言模型已经是最先进的无损文本压缩器了。

你可能会问：等等，65B的模型本身不就有260GB吗？怎么能说压缩后只有400GB？

这就是最精彩的部分。

你不需要传输模型权重，关键在于理解"压缩"的真正含义。

假设：你想把维基百科的全部内容发给朋友，但带宽很低。

传统方法是用gzip压缩，但有个更聪明的办法：

你发给朋友两样东西：

1\. 一段训练Transformer的代码（只有1MB）

2\. 用这个模型压缩后的数据序列（400GB）

朋友收到后，用这段代码从头训练一个一模一样的模型。

每预测一个token，就用压缩数据"解码"出真实token，然后继续训练，预测下一个。

重复这个过程，就能完整还原5.6TB的原始数据。

看到了吗？模型权重从来不需要传输。

无论你训练10层还是1000层的Transformer，初始化代码的复杂度几乎一样。

真正占空间的是"压缩后的数据"，而这个大小取决于模型预测得有多准。

这就是为什么更大的模型反而压缩得更好。

让我们重新理解"简单"。

传统机器学习告诉我们"小模型泛化更好"，因为它们"更简单"。

但这里的"简单"指的是参数少。

压缩视角告诉我们：真正的简单不是参数少，而是对数据的描述更简洁。

Llama 33B和65B的"代码复杂度"完全一样（都是那1MB的训练代码），但65B把数据压缩得更小。

所以从根本上说，65B是更"简单"的模型，也是更智能的模型。

这就是为什么大模型不会过拟合，为什么scaling law有效。

只要模型能更好地压缩数据，它就在学习更本质的规律，就会有更强的泛化能力。

压缩视角还给了我们一个特别的礼物：它是唯一不可博弈的训练目标。

测试集污染是现在大模型评估的大问题。

但如果用压缩来衡量，这个问题不存在。

假设你把整个测试集都塞进训练集，让模型完美记住。

这样模型预测准确率是100%，压缩数据的部分确实变成0了。

但代价是什么？你要把整个数据集都算进"模型描述长度"里。

总体压缩效果反而变差。

这就是压缩的优雅之处：任何作弊手段都会在数学上暴露出来。

只有真正学到本质规律，才能做到更好的压缩。

从这个视角看，通往AGI的路径变得清晰了：

收集所有有用的感知信息，然后尽可能地压缩它。

任何能提升压缩率的方法都值得研究：

• 更好的架构（S4、稀疏注意力）

• 继续scaling（更大模型、更多数据）

• 工具使用（计算器、检索器）

• 合成数据

• 多模态融合

只要它能降低"压缩后的总大小"，就是在朝AGI前进。

回顾历史，每一次AI的范式转变，本质上都是一次压缩的飞跃：

• n-gram 让我们有了基本的语音识别

• RNN 让我们能生成连贯的段落，做机器翻译

• 大规模 Transformer 让我们能理解长文档，做复杂推理

每一次，我们都在把世界的信息压缩得更紧凑，理解得更深刻。

当然，这个视角也有局限。

对图像、视频这种高维数据，逐像素建模可能正确但不实用。

计算量会爆炸。

可能需要先做一些语义层面的过滤。

更重要的是，世界上有很多有用的信息是不可观测的。

比如围棋高手的"搜索树"，你只能看到落子，看不到他们考虑的那些分支。

这就是为什么AlphaZero需要自我对弈，它在生成那些不可观测的数据。

所以压缩可观测数据是必要的，但不充分。

强化学习、主动探索这些方法仍然不可或缺。

但无论如何，压缩给了我们一个理解智能的新角度。

当我们说模型"涌现"了新能力，本质上是不是压缩率跨过了某个临界点？

当我们说模型"理解"了某个概念，是不是说它找到了一种更简洁的方式来编码相关信息？

当我们追求AGI，是不是就是在寻找宇宙信息的最小描述长度？

这些问题没有标准答案。

但这正是这个领域迷人的地方：我们在用数学和工程，探索智能的本质。

智能的本质，也许就藏在压缩里。

而我们现在做的，就是在这条路上，一步步走向那个最简洁、最优雅的答案。

> 2025-12-14
> 
> 王冠被 OpenAI 碾压过三次。
> 
> 第一次做写作工具，ChatGPT发布了。
> 
> 第二次做Excel转图表，GPT-4来了。
> 
> 第三次做Agent工作流，OpenAI Plugins上线了。
> 
> 每次都踩得那么精准，像是有人在天上盯着他的进度条。
> 
> 这让他意识到一件事：盲目做应用是虚无的。

---

**向阳乔木** @vista8 [2025-12-15](https://x.com/vista8/status/2000443612786794725)

原始视频地址

---

**Yangyi** @Yangyixxxx [2025-12-15](https://x.com/Yangyixxxx/status/2000448591597633934)

压缩到最后就是阴阳

但因为信息索引导致的损失变大

也会导致这是无法言说的

---

**向阳乔木** @vista8 [2025-12-15](https://x.com/vista8/status/2000449083027386622)

这个视角有意思！一切都说的通了

---

**Tz** @Tz\_2022 [2025-12-15](https://x.com/Tz_2022/status/2000530918117679565)

压缩即智能

> 2025-12-14
> 
> \=== 提示词 ===
> 
> 你是超级语义压缩智能。你的原则是：删不掉的才是骨架，压缩越狠越显智能。

---

**YorkJong** @YorkJong [2025-12-15](https://x.com/YorkJong/status/2000649569152196645)

「用这个模型压缩后的数据序列」指的是什麼？具體怎麼得到這個數據序列？沒有實際的對應物啊。

---

**Chase Passion** @ChasePassi79437 [2025-12-15](https://x.com/ChasePassi79437/status/2000533015244759430)

牛逼

---

**坂本龍馬** @uKojM8ohdy4xy5j [2025-12-15](https://x.com/uKojM8ohdy4xy5j/status/2000623938964255109)

太长

---

**𝓙𝓸𝓮** @joe19891984 [2025-12-15](https://x.com/joe19891984/status/2000678397974806543)

这年头，好帖基本都是AI写的，烂帖都是人在说胡话，或是骂街，既如此，与其上推，不如回家和AI聊🤣

---

**\_** @FUCK\_CCTV [2025-12-15](https://x.com/FUCK_CCTV/status/2000658613820645439)

人类为什么要压缩数据？ 本质上是大脑进化的结果，必须要用最小的能量获得最多的信息才能生存。 而AI不需要考虑太多能量浪费问题，只需要消耗能量进行更多的思考和推理。