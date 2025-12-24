---
area: tech-insights
category: technology
companies_orgs:
- Anthropic
date: '2025-08-06'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemini
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=jryZvCuA0Uc
speaker: AI Engineer
status: evergreen
summary: 本次演讲深入探讨了如何系统化地评估和改进AI应用，特别是检索系统和聊天机器人。Jeff Huber首先介绍了通过“快速评估”（fast evals）来衡量输入数据质量的方法，强调了构建黄金数据集和生成合成查询的重要性。Jason
  Liu接着阐述了如何通过结构化数据提取和传统数据分析来洞察用户交互和产品输出，从而制定数据驱动的产品路线图。演讲强调了持续实验、细分用户群以及基于影响权重进行决策的关键性，旨在帮助开发者更系统、更确定地提升AI系统性能。
tags:
- ai-evaluation
- data
- optimization
- product
- system
title: 如何有效分析数据以提升AI应用性能
---

### 引言：系统化地审视你的数据

大家好，我是Chroma的联合创始人兼首席执行官Jeff Huber，Jason也加入了我们。我们将进行一个两部分的演讲，内容非常丰富。这是今天的最后一场会议，所以我们希望给大家带来很多有价值的信息。今天演示中的所有内容都是开源的，代码也都可以获取。我们不销售任何工具，所以全程都会有二维码供大家获取代码。现在，让我们来谈谈如何审视你的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, welcome everybody. Um, I'm Jeff Huber, the co-founder and CEO of Chroma, and I'm joined by Jason. We're going to do a two-parter here. We're really going to pack in the content. It's the last session of the day, and so we thought I'd give you a lot. Um everything in this presentation today is open source and code available. So we're also not selling you any tools. Um and so there'll be QR codes and stuff throughout to grab the code. So let's talk about how to look at your data.</p>
</details>

你们都是AI从业者，都在构建各种东西，这些问题可能与你们深有共鸣：我应该使用哪种**分块策略**（Chunking Strategy: 将长文本分割成更小、更易于处理的片段的方法）？我的**嵌入模型**（Embedding Model: 将文本、图像等数据转换为数值向量，以便机器学习模型理解和处理的模型）是否最适合我的数据？等等。我们的观点是，你只能管理你所衡量的东西。我想彼得·德鲁克（Peter Drucker）是这句话的原创者，所以我不能独揽功劳，但这在今天仍然是真理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um all of you are AI practitioners. Um you're all building stuff and uh this probably these questions probably resonate quite deeply with you. Uh what chunking strategy should I use? Is my embedding model the best betting embedding model for my data? Um and more. And our contention is that you can really only manage what you measure. Again, I think Peter Ducker is the original who coined that. So, I can't take too much credit. Um, but it certainly is still true today.</p>
</details>

所以，我们有一个非常简单的假设：你应该审视你的数据。我的目标是在这次演讲中至少提到“审视你的数据”15次，这已经是第二次了。最终，出色的衡量是使系统性改进变得容易的关键。而且它确实可以很简单，不必过于复杂。我将谈论第一部分：如何审视你的输入。然后Jason将谈论第二部分：如何审视你的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we have a very simple hypothesis here, which is you should look at your data. Um, the goal is to say look at your data I think at least 15 times this presentation. So, that's two. Um, and great measurement ultimately is what makes systematic improvement easy. And it really can be easy. It doesn't have to be super complicated. So, I'm going to talk about part one, how to look at your inputs. And then Jason's going to talk about part two, how to look at your outputs.</p>
</details>

那么，让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's get into it. All right.</p>
</details>

### 第一部分：审视你的输入——快速评估与黄金数据集

审视你的输入。你如何知道你的**检索系统**（Retrieval System: 在大型语言模型应用中，用于从大量数据中查找相关信息的组件）是否良好？又如何知道如何改进它？有几种选择。一种是猜测并祈祷，这当然是一种选择。另一种选择是使用**大型语言模型**（LLM: Large Language Model: 一种基于深度学习的AI模型，能够理解和生成人类语言）作为判断者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking at your inputs. How do you know whether or not your retrieval system is good? And how do you know how to make it better? Um, there are a few options. Um, there is guess and cross your fingers. That's certainly one option. Um, another option is to use an LLM as a judge.</p>
</details>

如果你正在使用一些框架来检查事实性和其他指标，而这些框架需要花费600美元并运行三个小时，如果你喜欢这种方式，当然可以这样做。你也可以使用公共基准测试。例如，你可以查看**MTeb**（Massive Text Embedding Benchmark: 一个用于评估文本嵌入模型性能的基准数据集）等来找出哪种嵌入模型在英语方面表现最佳。这也是一个选择。但我们的观点是，你应该使用**快速评估**（Fast Evals: 一种快速、经济地衡量AI系统性能的方法）。我将准确地告诉你什么是快速评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you're using, you know, some of these frameworks where you're checking factuality and other metrics like this and they cost $600 and take three hours to run. If that is your preference, you certainly can do that. Um, you can use public benchmarks. So, you can look at things like MTeb to figure out, oh, which embedding model is the best on English. That's another option. Um, but our contention is you should use fast evals. And I will tell you exactly what fast evals are. All right. So, what is a fast eval?</p>
</details>

那么，什么是快速评估？快速评估简单来说就是一组查询和文档对。第一步是，如果输入这个查询，就应该输出这个文档。这样的一组数据被称为**黄金数据集**（Golden Data Set: 经过人工验证的、高质量的查询-文档对数据集，用于评估检索系统的准确性）。然后，你衡量系统性能的方式是，输入所有查询，然后查看是否输出了这些文档。显然，你可以检索5个、10个或20个文档，这取决于你的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um a fast eval is simply a set of query and document pairs. So the first step is if this query is put in this document should come out. Uh a set of those is called a golden data set and then the way that you measure your system is you put all the queries in and then you see do those documents come out. Um and obviously you can retrieve five or retrieve 10 or retrieve 20. It kind of depends on your application.</p>
</details>

运行快速评估非常迅速且经济。这非常重要，因为它使你能够快速、廉价地运行大量实验。我相信你们都知道，当你必须点击“开始”然后六小时后才能回来查看结果时，实验时间和精力会大大减少。所有这些指标都应该以极低的成本极快地运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's very fast and very inexpensive to run. And this is very important because it enables you to run a lot of experiments quickly and cheaply. Um you know I'm sure all of you know that like experimentation time and your energy to do experimentation goes down significantly when you have to click go and then come back six hours later. Um all of these metrics should run extremely quickly for pennies.</p>
</details>

### 生成合成查询以模拟真实世界场景

也许你还没有查询，你只有文档、分块，以及检索系统中的内容，但你还没有查询。没关系。我们发现你实际上可以使用LLM来编写问题，而且可以编写出好问题。当然，如果只是简单地对LLM说：“嘿，LLM，为这份文档写一个问题。”这并不是一个好的策略。然而，我们发现你可以教LLM如何编写查询。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So maybe you don't have yet, you have your documents, you have your chunks, you know, you have your stuff in your retrieval system, but you don't have queries yet. That's okay. Um, we found that you can actually use an LLM to write questions and write good questions. Um, you know, I think just doing naive like, "Hey LM, write me a question for this document." Not a great strategy. However, we found that you can actually teach LLMs how to write queries.</p>
</details>

这些幻灯片有点裁剪，我不知道为什么，但我们会充分利用它。举个例子。这实际上是MTeb基准数据集中一个关于嵌入模型的黄金数据集的例子。这也指出一个事实，即许多这样的基准数据集都过于干净，对吧？“凉亭在花园里有什么用？”然后句子的开头是“花园里的凉亭……”真实世界的数据从不如此干净。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, these slides are getting a little bit cropped. I'm not sure why, but we'll make the most of it. Um, to give you an example. So, this is actually a um example from one of the MTe kind of the golden data sets around embedding models, benchmark data sets. Um, this also points to the fact that like many of these benchmark data sets are overly clean, right? What is a pergola used for in a garden? And then the beginning of that sentence is a pergola in a garden dot dot dot dot dot. Um, real world data is never this clean.</p>
</details>

所以，在这份报告中（链接在几张幻灯片之后），我们进行了深入研究，探讨了如何真正对齐代表真实世界查询的查询。用过于针对你的数据的合成查询来欺骗自己，认为你的系统运行良好，这太容易了。这些图表显示，我们实际上能够将合成生成的查询的特异性与用户可能向你的系统提出的真实查询进行语义对齐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so what we did in this report um the link is in a few slides. Um we did a huge deep dive into how can we actually align queries that are representative of real world queries. It's too easy to trick yourself into thinking that your system's working really well with synthetic queries that are overly specific to your data. Um and so what these graphs show is that we're actually able to semantically align the specificity of queries synthetically generated to real queries that users might ask of your system.</p>
</details>

### 嵌入模型的实证评估

这使得你能够做到，如果一个新的、酷炫的嵌入模型发布了，并且在MTeb评分中表现出色，Twitter上每个人都在谈论它，你不再需要只是盲目地修改代码，猜测、检查并希望它能奏效。现在，你可以通过经验来判断它是否对你的数据更好。这里的例子有些牵强和简单，但你可以实际查看成功率。好的，这些是我关心的查询。我是否比以前获得了更多的文档？如果是，也许你应该考虑更改。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">So what this enables is, you know, if a new cool sexy embedding model comes out and it's doing really well in the MTB score and everybody on Twitter is talking about it, instead of just, you know, going into your code and changing it and guessing and checking and hoping that it's going to work, um, you now can empirically say whether it's good, better or not for your data, um, and you know, the kind of example here is quite contrived and simple. Um, you know, but you can actually look at the actual success rate. Okay, great. These are the queries that I care about. Do I get back more documents than I did before? If so, maybe you should consider changing.</p>
</details>

当然，你需要重新嵌入你的数据。这项服务可能更昂贵，可能更慢。该服务的**API**（Application Programming Interface: 应用程序编程接口，允许不同软件之间进行通信）可能不稳定。在做出非常好的工程决策时，显然有很多考虑因素。但显然，衡量我的查询能获得多少文档的成功率是北极星指标。它非常快速和有用，使你的系统改进更加系统化和确定性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, of course, you need to re-mbed your data. That service could be more expensive. It could be slower. The API for that service could be flaky. There's a lot of considerations obviously with making very good engineering decisions. Um, but clearly the north star of like success rate of how many documents that I get for my queries. Super fast and super useful and makes your improvement of your system much more systematic and deterministic. All right.</p>
</details>

我们实际上与Weights & Biases合作，研究他们的聊天机器人，以奠定这项工作的基础。你在这里看到的是Weights & Biases聊天机器人，你可以看到四种不同的嵌入模型，以及这四种不同嵌入模型的**召回率**（Recall: 在信息检索中，指检索到的相关文档数量占所有相关文档总数的比例）@10。我还要指出，蓝色代表真实数据。这些是实际记录在Weave中并发送过来的查询。然后是生成的查询，这些是合成生成的。我们希望看到几件事。我们希望看到它们非常接近，并且在准确性顺序上始终保持一致，对吧？我们不希望看到真实数据和生成数据之间出现大的翻转，我们很高兴看到我们找到了这个答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we actually uh worked with weights and biases um looking at their chatbot um to kind of ground a lot of this work. So what you see here is for the weights and biases chatbot um you can see four different embedding models and you can see the recall at 10 across those four different embedding models. And then I'll point out that uh blue is ground truth. So these are actual queries that were logged um in weave and then sent over. And then there's generated. These are the ones that are synthetically generated. And we want to see is a few things. We want to see that those are pretty close and we want to see that they are always the same kind of in order of accuracy, right? We don't want to see any like big flips between um ground truth and generated and uh we're really happy to see that we found uh that answer.</p>
</details>

这里有一些有趣的发现，当然它们会被裁剪掉，但这没关系。第一，这个应用最初使用的嵌入模型实际上是**text embedding three small**。在所有我们评估的嵌入模型中，它在这个案例中表现最差。所以可能不是最好的选择。第二，如果你查看MTeb，**Gina embeddings v3**在英语方面表现非常好。它比其他任何模型都好得多，但对于这个应用来说，它的表现并不好。实际上，**Voyage 3 large**模型表现最好，这是通过实际运行这个快速评估并审视你的数据而经验性确定的。这是第三点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now there are a few fun findings here which is and of course they're going to get crocked out but that's okay. Um number one uh the original embedding model used for this application was actually text embedding three small. um this actually performed the worst out of all the embedding models that we evaluated just for in this case. Um and so probably wasn't the best choice. Um the second one was that actually if you look at MTeb Gina embeddings v3 does very well in English. It's like you know way better than anything else but for this application uh it didn't actually perform that well. It was actually the voyage 3 large model which performed the best and that was empirically determined by actually running this fast evval and looking at your data. That's number three.</p>
</details>

好的。如果你想获取完整报告，可以扫描这个二维码。它在research.tra.com上。还有一个附带的视频，这里有截图，其中有更多详细信息。有完整的笔记本，包含所有代码。所有这些都是开源的。你可以在自己的数据上运行它。希望这对你们所有人思考如何系统化、确定性地改进检索系统有所帮助。接下来，我将把时间交给Jason。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. All right. So, if you'd like access to the full report, um, you can scan this QR code. It's at research.tra.com. There's also an adjoining video which is kind of screenshotted here, which goes into much more detail. There are full notebooks with all the code. It's all open source. You can run it on your own data. And um, hopefully this is helpful for you all thinking about how again you can systematically and deterministically improve your retrieval systems. And with that, I'll hand it over to Jason. Thank you.</p>
</details>

### 第二部分：审视你的输出——从对话中提取结构化数据

**Jason Liu:** 好的，如果你正在使用某种系统，我们总是需要审视输入。我们讨论了检索、嵌入模型的工作方式等问题。但最终，我们也必须审视输出，对吧？许多系统的输出可能是对话的输出，或者是代理执行的输出。我们的想法是，如果你能审视这些输出，也许我们可以进行某种分析，找出我们应该构建什么样的产品，我们应该为我们的代理开发什么样的工具组合等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, if you're working with some kind of system, there's always going to be the inputs that we look at. And so we talked about maybe thinking about things like retrieval, how does the embeddings work? But ultimately we also have to look at the outputs, right? And the outputs of many systems might be the outputs of a conversation that has happened, a you know agent execution that has happened. And the idea is that if you can look at these outputs, maybe we can do some kind of analysis that figures out, you know, what kind of product should we build, what kind of portfolio of tools should we develop for our agents and so forth.</p>
</details>

所以，我们的想法是，如果你有大量用户查询，甚至是几百个对话，手动查看所有内容是相当不错的，对吧？仔细思考每一次交互，然后只在有意义的时候使用这些模型。而且，如果我这样说，他们通常会说，你知道吗，如果我们把所有东西都放在03中，然后在这里，通常只有当你认为自己不如语言模型聪明时才使用语言模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the idea is, you know, if you have a bunch of queries that users are putting in or even a couple of hundred of conversations, it's pretty good to just look at everything manually, right? Think very carefully about each interaction and then only use these models when they make sense. And then oftent times if I say this, they can say, you know what, if we just put everything in 03 and then here, generally only use the language models if you think you're not smarter than the language model.</p>
</details>

当你拥有大量用户和真正的好产品时，你可能会收到数千个查询或数万个对话，这时你就会遇到一个问题：手动审查的量太大了。对话中的细节太多，你不再是能够真正找出什么有用、什么好的专家。最终，在这些包含工具调用、链条和推理步骤的冗长对话中，这些输出现在变得很难扫描和理解。但这些对话中仍然有很多价值，对吧？如果你使用过聊天机器人，无论是在Cursor中还是任何一种云代码系统中，你经常会说：“再试一次。这并不是我真正想要的意思，你知道，下次别那么懒惰。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then when you have a lot of users and actual good product, you might get thousands of queries or tens of thousands of conversations and now you run into an issue where there's too much volume to manually review. There's too much detail in the conversations and you're not really going to be the expert that can actually figure out what is useful and what is good. And ultimately with these long conversations with tool calls and chains and reasoning steps, these outputs are now really hard to scan and really hard to understand. But there's still a lot of value in these conversations, right? If you've used a chatbot, whether it's in cursor or any kind of like cloud code system, oftentimes you do say things like, "Try again. This is not really what I meant, you know, be less lazy next time."</p>
</details>

事实证明，你给出的很多反馈都存在于这些对话中，对吧？我们可以构建像反馈小部件或点赞/点踩之类的东西，但很多信息都存在于这些对话中。对话中存在的挫折和重试模式可以从中提取出来，我们的想法是，数据实际上已经存在于这些对话中。如果我们以一个不同行业的简单例子来思考，我们可以想象营销的类比，对吧？也许我们运行评估，结果是0.5。我真的不知道这意味着什么。事实性是0.6。我不知道0.5是好是坏，平均值是多少，谁知道呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It turns out a lot of the feedback you give is in those conversations, right? We could build things like feedback widgets or thumbs up or thumbs down, but a lot of the information exists in those conversations. and the frustration and the retry patterns that exist can be extracted from those conversations and the idea is that the data really already exists in this conversation. If we think of a simple example in a different industry, you know, we can imagine the analogy of marketing, right? Maybe we run our evals and the number is 0.5. I don't really know what that means. Factuality is point6. I don't know if that's good or bad is 0.5. The average, who knows?</p>
</details>

但想象一下，我们进行了一次营销活动，我们的广告指标或**关键绩效指标**（KPI: Key Performance Indicator: 衡量业务或项目成功与否的关键指标）是0.5。我们能做的并不多。但如果我们意识到80%的用户年龄在35岁以下，20%在35岁以上，并且我们发现年轻受众表现良好，而年长受众表现不佳。我们所做的只是在用户群体中划清界限。现在我们可以做出决定。我们是想加倍努力向年轻受众营销，还是想找出为什么我们未能成功向年长人群营销，对吧？我是否要寻找更多播客来投放广告？你知道，我应该投放超级碗广告吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But imagine we run a marketing campaign and our, you know, ad metric or our KPI is 0.5. There's not much we can do. But if we realize that 80% of our users are under 35 and 20% are over and we realize that the younger audience performs well and the older audience performs poorly. What we've done is we've just drawn a line in the sand on who our users are. And now we can make a decision. Do we want to double down on marketing to a younger audience or do we want to figure out why we aren't uh successfully marketing to to the older population, right? Do I find more part podcasts to market to? You know, should I run a Super Bowl ad?</p>
</details>

现在，仅仅通过划清界限并决定目标细分市场，我们就可以决定改进什么。而仅仅“让广告更好”是一种非常泛泛的情绪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, just by drawing a line in the sand and deciding which segment to target, we can now make decisions on what to improve. Whereas just making them ads better is a sort of very generic sentiment that people can have.</p>
</details>

### 从对话中提取结构化数据以驱动产品决策

所以，最好的方法之一就是以某种结构化的方式从这些对话中有效地提取一些数据，然后进行非常传统的数据分析。在这里，我们有一个对象，它表示我想提取已发生事件的摘要。也许是它使用的一些工具，也许是我们注意到的对话中发生的错误。也许是满意度的某个指标，也许是挫折感的某个指标。我们的想法是，我们可以构建一个可以提取的元数据组合。然后我们可以嵌入这些数据，找到集群，识别细分市场，然后开始测试我们的假设。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so one of the best ways of doing that is effectively just extracting some kind of data out of these conversations in some structured way and just doing very traditional data analysis. And so here we have some kind of object that says I want to extract a summary of what has happened. Maybe some tools that it's used maybe the errors that we've noticed the conversations that that happened. Maybe some metric for for satisfaction maybe some metric for frustration. The idea is that we can build this portfolio of metadata that we can extract. And then what we can do is we can embed this find clusters identify segments and then start testing our hypothesis.</p>
</details>

所以我们可能想要做的是构建这种提取，将其放入LLM中，然后将这些数据提取出来，然后开始进行非常传统的数据分析，这与任何产品工程师或数据科学家所做的没有什么不同。这往往效果很好。如果你看看Anthropic的**Cleo**（Anthropic公司开发的一个AI模型），他们基本上发现，代码的使用量是云用户GDP价值创造的40倍。他们认为，也许代码是一个好的途径。显然，情况并非如此，但其思想是，通过了解用户如何开发产品，你现在可以找出在哪里投入时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what we what we might want to do is sort of build this extraction, put into an LLM, get this data back out and just start doing very traditional data analysis, no different than any kind of uh product engineer or any kind of data scientist. And this tends to work quite well. You know, if you look at some of the things that Anthropic Cleo did, they basically found that, you know, uh code use was 40x more represented by cloud cloud users than by you know uh GDP value creation. they go okay maybe code is like a good avenue and and obviously that's not the really the case but the idea is that by understanding how your users develop a product you can now figure out where to invest your time.</p>
</details>

这就是为什么我们构建了一个名为Cura的库，它允许我们总结对话、对它们进行聚类、构建这些聚类的层次结构，并最终允许我们比较不同KPI的评估结果。所以现在你知道，如果事实性是0.6，这很难判断，但如果事实性对于需要时间过滤器的查询来说非常低，对吧？或者如果事实性对于围绕合同搜索的查询来说非常高。现在我们知道一个领域发生了什么，另一个领域发生了什么。然后我们可以决定做什么以及如何投入时间。这个流程非常简单。我们有模型进行总结，模型进行聚类，以及模型进行聚合步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so this is why we built a library called cura that allows us to summarize conversations cluster them build hierarchies of these clusters and ultimately allow us to compare our eval across different KPIs again so now you know if we have factuality is 6 that's really hard but if it turns out that factuality is really low for queries that require time filters, right? Or factuality is really high when queries revolve on, you know, contract search. Now we know something's happening in one area, something's happening in another. And then we can make a decision on what to do and how to invest our time. And the pipeline is pretty simple. We have models to do summarization, models to do clustering, and models that do this aggregation step.</p>
</details>

所以你可能想要做的是加载一些对话。在这里我们创建了一些假数据集，可能是来自**Gemini**（Google开发的一系列多模态大型语言模型）的对话，假对话。我们的想法是，首先我们可以提取某种摘要模型，其中包含我们讨论的主题、挫折、错误等。然后我们可以对它们进行聚类以找到有凝聚力的群组。在这里我们可以发现，也许有些对话是关于数据可视化、SEO内容请求和身份验证错误的。现在我们对人们如何使用软件有了一些了解。然后，当我们把它们组合在一起时，我们意识到，好的，确实有一些围绕技术支持的主题。代理是否有工具可以做到这一点？我们是否有工具来调试这些数据库问题？我们是否有工具来调试身份验证？我们是否有工具来做数据可视化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what you might want to do is just load in some conversations. And here we've made some a fake data set, maybe conversations, fake conversations from Gemini. And the idea is that first we can extract some kind of summary model where there's topics that we discuss, frustrations, errors, etc. We can then cluster them to find cohesive groups. And here we can find maybe you know some of the conversations are around data visualization, SEO content requests and authentication errors. And now we get some idea of how people are using the software. And then as we group them together, we realize, okay, really there are some themes around technical support. Does the agent have tools that can do this? as well. Do we have tools to debug these database issues? Do we have tools to debug authentication? Do we have tools to do data visualization?</p>
</details>

这将非常有用。在这个流程的最后，我们看到这些聚类的打印输出，对吧？我们知道工具是什么，聊天机器人在更高层面是如何被使用的，比如SEO、内容、数据分析，以及在更低层面，比如博客文章和营销。仅仅通过查看这些，我们就可以提出一些假设，关于我们应该构建什么样的工具，我们应该如何开发，甚至我们的营销策略，或者我们如何考虑改变我们的提示。我们可以做很多这类事情。这是因为最终目标是了解下一步该做什么，对吧？你进行细分是为了找出你可以提出什么样的新假设。然后你可以在这些特定细分市场中进行有针对性的投资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, that's something that's going to be very useful. And at the end of this pipeline, we're sort of presented with these printouts of clusters, right? We know what the tools are, how the chatbot is being used at a higher level, you know, SEO, content, data analysis, and at a lower level, you know, maybe it's blog post and marketing. And just by looking at this, we might have some hypothesis as to what kind of tools we should build, how we should, you know, develop, you know, even our marketing or how we can think about changing our prompts. We can do a ton of these kinds of things. And this is because the ultimate goal is to understand what to do next, right? You do the segmentation to figure out what kind of new hypotheses that you can have. And then you can make these targeted investments within these certain segments.</p>
</details>

如果事实证明，我与聊天机器人进行的对话中有80%是关于SEO优化的，也许我应该有一些集成来做这件事。也许我应该重新评估提示或有其他工作流程来使这个用例对他们来说更强大。再次强调，目标实际上是创建一个工具组合、元数据过滤器、数据源的组合，让代理能够完成它的工作。而且通常情况下，解决方案并不是真正让AI变得更好。它实际上只是提供正确的基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If it turns out that, you know, 80% of the conversations that I'm having with the chatbot is around SEO optimization, maybe I should have some integrations that do that. Maybe I should reevaluate the prompts or have other workflows to make that use case more powerful for them. And again, the goal really is to just make a portfolio of tools of metadata filters of data sources that allows the agent to do its job. And oftent times the solution isn't really making the AI better. It's really just providing the right infrastructure.</p>
</details>

对吧？很多时候，如果你发现很多查询都使用了时间过滤器，而你只是没有添加时间过滤器，这可能会大大提高你的评估结果。我们遇到过这样的情况，我们想知道合同是否已签署，如果我们只是在**光学字符识别**（OCR: Optical Character Recognition: 将图像中的文本转换为可编辑的机器编码文本的技术）过程中多提取一步，现在我们就可以进行大规模过滤，并找出存在哪些数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? A lot of times if you find that a lot of queries use time filters and you just didn't add a time filter that can probably improve your eval by quite a bit right we have situations where we wanted to figure out if contracts were signed and if we just extracted one more step in the OCR process now we can do this large scale filters and figure out you know what data exists</p>
</details>

### 构建数据驱动的产品路线图

通常，改进应用程序的做法是相当直接的，对吧？我们都知道如何定义评估，但并非所有与我合作的人都真正考虑过寻找集群并比较集群之间的KPI。但一旦你这样做了，你就可以开始决定构建什么、修复什么以及忽略什么。也许你有一个双向的象限，对吧？也许你有低使用率和高使用率，以及高绩效评估和低绩效评估，对吧？如果你的大部分用户都在使用你做得不好的工具，那显然是你必须解决的问题。但如果大部分人都在使用你做得好的工具，那完全没问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and generally the practice of improving your applications is pretty straightforward right we all know to define eval but not everyone that I work with has really been thinking about something like finding clusters and comparing KPIs across clusters. But once you do, then you can start making decisions on what to build, what to fix, and what to ignore. Maybe you have a two-sided uh quadrants, right? Maybe you have low usage and high usage, and you have high performing evals and low performing evals, right? If a large portion of your population are using tools that you are bad at, that is clearly the thing you have to fix. But if a large proportion of people are using tools that you're good at, that's totally fine.</p>
</details>

如果一小部分人使用你做得好的东西，也许你需要做一些产品更改。也许是关于教育用户。也许是添加一些预填充或自动化问题来向他们展示我们可以提供这些功能。如果有一些事情没有人做，但当我们做的时候，它们表现不佳，也许那只是提示中的一行更改，说：“抱歉，我帮不了你。去找你的经理谈谈。”对吧？现在我们可以做出这些决定，仅仅通过查看我们的对话中有多少比例属于某个类别，以及我们是否能在这个类别中做得好。当你理解了这一点，你就可以出去构建这些分类器来识别这些特定的意图。也许你构建路由器，也许你构建更多工具。然后你就可以开始做一些事情，比如监控和进行这些团购，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If a small proportion of people use something that do something that you're good at, maybe there's some product changes you need to make. Maybe it's about educating the user. Maybe it's adding some, you know, pre-filler or automated questions to show them that we can do these kind of capabilities. And if there are things that nobody does, but when we do them, they're bad, maybe that's a oneline change in the prompt that says, "Sorry, I can't help you. Go talk to your manager." Right? These are now decisions that we can make just by looking at, you know, what proportion of our conversations are of a certain category and whether or not we can do well in that category. And as you understand this, then you can go out, you can build these classifiers to identify these specific intents. Maybe you build routers, maybe you build more tools. And then you can start doing things like monitoring and having the ability to do these group buys, right?</p>
</details>

所以现在你有了不同类别的查询类型随时间的变化，你可以看到性能如何，对吧？0.5可能没有任何意义，但一个指标在某个类别中随时间的变化可以很大程度上决定你的产品是如何被使用的。通过这样做，我们发现，你知道，一些客户在入职时使用我们的应用程序的方式与我们历史客户的使用方式大相径庭，我们现在可以进行其他投资，以改进这些系统，最终目标是创建一个数据驱动的方式来定义产品路线图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now you have different categories of query types over time and you can just see what the performance looks like, right? where 0.5 doesn't really mean anything but whether or not a metric changes over time across a certain category can determine a lot about how your products is being used. By doing this we figured out that you know some customers when we onboard them they they use our applications very differently than our historical customers and we can now then make other investments in how to improve these systems and ultimately the goal is to create a datadriven way of defining the product roadmap.</p>
</details>

通常是研究导致更好的产品，而不是产品来证明我们不知道是否可能的研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oftentimes it is research that leads to better products now rather than products justifying some research that we don't know is possible.</p>
</details>

再次强调，进步的真正标志是你能够提出高质量的假设，以及你能够测试大量这些假设的能力。如果你进行细分，你可以提出更清晰的假设。如果你使用更快的评估，你可以运行更多的实验。通过监控获得这种持续反馈，这就是你实际构建产品的方式，对吧？这与是否是AI产品无关。这只是你构建产品的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again the real marker of progress is your ability to have a high quality hypothesis and your ability to test a lot of these hypotheses. And if you segment you can make clearer hypotheses. If you use faster evals you can run more experiments. And by having this continuous feedback through monitoring this is how you actually build a product. Right? This is regardless of being an AI product. This is just how you build a product.</p>
</details>

### 关键要点与资源

所以，如果你看看这些要点，当你考虑衡量输入时，我们真的不想使用公共基准，而是要在你的数据上构建评估，并首先关注检索，因为这是LLM改进无法修复的唯一问题，对吧？如果检索很差，LLM会随着时间的推移变得更好，但你需要通过良好的检索来获得修改LLM的权利。最后，如果你没有任何客户或用户，你可以开始考虑将合成数据作为一种补充方式。一旦你有了用户，也要审视你的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if you look at the takeaways really when you think about measuring the inputs, we really want to think about not using public benchmarks, building evals on your data and focusing first on retrieval because that is the only thing a LLM improvement won't fix, right? If the retrieval is bad, the LLM will still get better over time, but you need to earn the right to sort of twink tinker with the LLM by having good retrieval. And then lastly, if you don't have any customers or any users, you can start thinking about synthetic data as a way of augmenting that. And once you have users, look at your data as well.</p>
</details>

审视输出，对吧？从这些对话中提取结构。了解，你知道，发生了多少对话？工具被误用的频率是多少？错误是什么？以及人们感到沮丧的原因是什么？通过这样做，你可以进行人口层面的数据分析，找到这些相似的集群，并对工具的作用有一个影响加权（impact-weighted）的理解，对吧？说“也许我们应该为数据可视化构建更多工具”是一回事。说“嘿老板，我们40%的对话都围绕数据可视化，而代码引擎或代码执行做得并不好。也许我们应该再构建两个绘图工具，然后看看是否值得”是另一回事。你可以证明这一点，因为我们知道40%的用户正在使用数据可视化，而我们只在10%的时间内做得好，对吧？这是影响加权的。最终，当你比较这些集群之间的KPI时，你可以在整个产品开发过程中做出更好的决策。所以，再次强调，从小处着手，寻找结构，理解该结构，并开始比较你的KPI。一旦你能做到这一点，你就可以决定修复什么，构建什么，以及忽略什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Look at the outputs, right? Extract structure from these conversations. Understand, you know, how many conversations are happening? How often are tools being misused? What are the errors? And how are people frustrated? And by doing that, you can do this population level data analysis, find these similar clusters, and have some kind of impact weighted understanding of what the tools are. Right? It's one thing to say, you know, maybe we should build more tools for data visualization. It's another thing to say, hey boss, 40% of our conversations are around data visualization and the, you know, the code engine or the code execution can't really do that well. Maybe we should build two more tools for plotting and then see if that's worth it. And you can justify that because we know there's a 40% of the population is using data visualization and we do that, you know, maybe only 10% of the time, right? This is impact weighted. And ultimately as you compare these KPIs across these clusters, you can just make better decisions across your entire product development process. So again, start small, look for structure, understand that structure, and start comparing your KPIs. And once you can do that, you can make decisions on what to fix, what to build, and what to ignore.</p>
</details>

如果你想找到更多资源，请随时查看这些二维码。第一个是Chroma云，可以了解更多关于他们的研究。第二个实际上是我们构建的一组笔记本，它们详细介绍了这个过程。我们加载了Weights & Biases的对话。我们进行了聚类分析，并向你展示了如何利用这些来做出更好的产品决策。所以那个仓库中有三个Jupyter笔记本。请自行查看。感谢大家的聆听。我们确实有时间回答一个简短的问题，当然也可以在外面提问。所以，如果有人想拿起麦克风，请随意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to find more resources, feel free to check out these QR codes. Uh the first one is the Chroma cloud to understand a little bit more about their research. And the second one is actually a set of notebooks that we've built out that go through this process. So we load the weights and biases conversations. We do this cluster analysis and we show you how we can use that to make better product decisions. So there's three Jupyter notebooks in that repo. Check them out on your own time. And uh thank you for listening. We do have time for we do have time for like one quick question and of course as well outside as well. So thank you if anybody wants to grab the mic there and over there.</p>
</details>

### 问答环节：关于AI服务定价的“辛辣”观点

**问：** 有什么“辛辣”的观点吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Y for spicy. What's the spicy take today?</p>
</details>

**Jason Liu:** 顺便说一句，不是KPI，那不“辛辣”。我认为更多的代理业务应该尝试根据完成的工作而不是使用的**令牌**（Tokens: 大型语言模型处理文本的基本单位，可以是单词、子词或字符）来定价他们的服务。是的。根据成功定价，根据价值定价。这与本次演讲非常无关，但是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not KPI, by the way. That's not the spicy. I think I think more agent businesses should try to price and like price their services on the work done than the tokens used. Yeah. Price on success, price on value. Very unrelated to this talk, but</p>
</details>