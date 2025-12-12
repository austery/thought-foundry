---
title: 哥伦比亚大学计算机科学教授：大型语言模型为何无法发现新科学
summary: 哥伦比亚大学计算机科学教授探讨了大型语言模型的局限性，认为它们仅能驾驭现有知识而非创造新科学范式。他将通用人工智能定义为创造新科学的能力，并解释了他的矩阵模型以理解大型语言模型的推理过程。
area: null
category: null
project: []
tags:
- agi-definition
- information-theory
- llm-limitations
- mathematical-models
- new-architectures
people: []
companies_orgs: []
products_models: []
media_books: []
date: '2025-10-13'
author: a16z
speaker: a16z
draft: true
guest: ''
insight: ''
layout: post.njk
series: ''
source: https://www.youtube.com/watch?v=uRuY0ozEm3Q
status: evergreen
---
### 大型语言模型与通用人工智能的界限

Any **LLM** (Large Language Model: 大型语言模型) trained on pre-1915 physics would never have come up with a theory of relativity.
任何一个在1915年前物理学知识上训练的**大型语言模型**，都无法提出相对论。

Einstein had to reject **Newtonian physics** (牛顿物理学: 描述宏观物体运动的物理理论) and come up with this **space-time continuum** (时空连续体: 爱因斯坦相对论中的基本概念).
爱因斯坦必须拒绝**牛顿物理学**，才能提出**时空连续体**的概念。

He completely rewrote the rules.
他彻底改写了规则。

**AGI** (Artificial General Intelligence: 通用人工智能) will be when we are able to create new science, new results, new math.
**通用人工智能**将是我们能够创造新科学、新成果、新数学的时刻。

When an AGI comes up with a theory of relativity, it has to go beyond what it has been trained on to come up with new paradigms, new science.
当一个通用人工智能提出相对论时，它必须超越其训练数据，才能提出新的范式和新科学。

That's by definition of AGI.
这正是通用人工智能的定义。

Martin: I know you wanted to have Val on.
Martin: 我知道你很想请瓦尔来。

What do you find so remarkable about him and his contributions that inspired this?
你觉得他本人和他的贡献有什么特别之处，能引发这样的讨论？

Vashan: Vashan and I actually have very similar backgrounds.
Vashan: 瓦尚和我的背景非常相似。

We both come from networking.
我们都来自网络领域。

He's a much more accomplished networking guy than I am, but that's a high bar given you invent.
他是一位比我更杰出的网络专家，但考虑到你也是发明者，这标准很高。

But we come from that, and so we actually view the world in an **information theoretic way** (信息论方式: 从信息传输、存储和处理的角度看待问题).
但我们都来自那个领域，所以我们实际上以**信息论方式**看待世界。

It is actually part of networking.
这实际上是网络的一部分。

With all this AI stuff, there's so much work trying to create models that can help us understand how these LLMs work.
随着所有这些人工智能的发展，有大量工作试图创建模型来帮助我们理解这些大型语言模型是如何运作的。

In my experience over the last three years, the ones that have most impacted my understanding and I think have been the most predictive are the ones that Vishall has come up with.
根据我过去三年的经验，对我的理解影响最大、我认为最具预测性的模型，正是维沙尔提出的那些。

He did a previous one that we're going to talk about called Matrix, "Beyond the Black Box."
他之前做了一个我们即将讨论的模型，名为“矩阵”，题为“超越**黑箱**（Black Box：指内部机制不透明、难以理解的系统）”。

So actually, the single best talk I've ever seen on trying to understand how LLMs work is one that Fishall did at MIT, which Harvey Baller Christian pointed me to, and I watched that.
实际上，我所见过的关于理解大型语言模型如何运作的最佳演讲，是维沙尔在麻省理工学院做的一次，哈维·巴勒·克里斯蒂安向我推荐了它，我看了。

So he did that work, and then he's doing more recent work that's actually trying to scope out not only how LLMs reason, but it has some reflections on how humans reason too.
所以他做了那项工作，然后他正在进行更近期的研究，实际上不仅试图阐明大型语言模型如何推理，还对人类如何推理有所启发。

I just think he's doing some of the more profound work in trying to understand and come up with models, formal models for how LLMs reason.
我只是认为他正在做一些更深刻的工作，试图理解并提出关于大型语言模型如何推理的**形式模型**（Formal Model：用数学或逻辑语言精确描述系统行为的抽象模型）。

Martin: Well, just on that note, you said his most recent work helped you change how humans think.
Martin: 好的，就此而言，你说他最近的工作帮助你改变了人类的思维方式。

Why don't you flush that out a little bit?
你为什么不详细说明一下呢？

How did it sort of?
它是如何做到的？

Vashan: Okay, can I just try to take a rough sketch at it and then you just tell me how wrong I am?
Vashan: 好的，我能粗略地描述一下，然后你告诉我我错在哪里吗？

You're trying to describe how LLMs work, and one thing that you found is that they reduce a very complex, **multi-dimensional space** (多维空间: 具有多个独立维度的数学空间) into basically a **geometric manifold** (几何流形: 在局部类似于欧几里得空间的数学对象) that's a **reduced state space** (降维状态空间: 复杂系统经过简化后，其状态可以用更少变量描述的空间).
你正在试图描述大型语言模型是如何运作的，你发现它们将一个非常复杂的**多维空间**，基本上简化为一个**几何流形**，这是一个**降维状态空间**。

So it's **reduced degrees of freedom** (自由度: 描述系统状态所需的独立参数数量), but you can actually predict where in the manifold the reasoning can move to roughly.
所以它减少了**自由度**，但你大致可以预测推理在流形中可以移动到哪里。

So you've reduced the dimensionality of the problem to a geometric manifold, and then you can actually formally specify kind of how far you can reason within that manifold.
所以你将问题的维度降到了一个几何流形，然后你实际上可以形式化地指定你可以在该流形内进行多大范围的推理。

And the articulation is that we, or one of the intuitions is that we as humans do the same thing: we take this very complex, heavy-tailed stochastic universe, and we reduce it to kind of this geometric manifold, and then when we reason, we just move along that manifold.
其阐述是，我们——或者说其中一个直觉是——我们人类也在做同样的事情：我们把这个非常复杂、重尾的随机宇宙，简化成这种几何流形，然后当我们推理时，我们只是沿着那个流形移动。

Martin: Yeah, I think you captured it accurately.
Martin: 是的，我认为你准确地抓住了重点。

That's the spirit of the work.
这就是这项工作的精髓。

Vashan: Yeah.
Vashan: 是的。

Martin: Wait, can I just hear it in your words because I'm this lay, I'm a VC.
Martin: 等等，我能听听你的说法吗，因为我是一个外行，我是一个风险投资家。

Vashan: You're a VC with an **H index** (H指数: 衡量学者研究产出数量与影响力的指标) of what, 60 something?
Vashan: 你是一个H指数高达60多的风险投资家？

Yeah, so ultimately what all these LLMs are doing, whether the early LLMs or the LLMs we have today with all sorts of **post training RHF** (Reinforcement Learning from Human Feedback: 基于人类反馈的强化学习, 一种通过人类偏好数据优化模型的技术), whatever you do, at the end of the day, what they do is they create a **distribution** (分布: 描述数据或事件概率的数学函数) for the next **token** (标记: 大型语言模型处理文本的最小单位), right?
是的，所以最终所有这些大型语言模型所做的，无论是早期的还是我们今天拥有各种**后训练强化学习**（Reinforcement Learning from Human Feedback: 基于人类反馈的强化学习）的，无论你做什么，归根结底，它们所做的是为下一个**标记**创建一个**分布**，对吗？

Given a prompt, these LLMs create a distribution for the next token or the next word, and then they pick something from that distribution using some kind of algorithm to predict the next token, pick it, and then keep going.
给定一个提示，这些大型语言模型会为下一个标记或下一个词创建一个分布，然后它们使用某种算法从该分布中选择一个，预测下一个标记，选择它，然后继续下去。

Now, what happens because of the way we train these LLMs, the **architecture of the transformers** (Transformer: 一种神经网络架构，广泛应用于大型语言模型) and the **loss function** (损失函数: 衡量模型预测与真实值之间差异的函数), the way you put it is right: it reduces the world into these Bayesian manifolds.
现在，由于我们训练这些大型语言模型的方式，**Transformer架构**和**损失函数**的作用，你说的很对：它将世界简化为这些贝叶斯流形。

As long as the LLM is traversing through these manifolds, it is confident, and it can produce something which makes sense.
只要大型语言模型在这些流形中遍历，它就充满信心，并且可以生成有意义的内容。

The moment it veers away from the manifold, then it starts **hallucinating** (幻觉: 人工智能模型生成听起来合理但实际上不准确或不真实的信息) and starts spouting nonsense.
一旦它偏离流形，它就会开始产生**幻觉**，并开始胡言乱语。

Confident nonsense, but nonsense.
自信的胡言乱语，但终究是胡言乱语。

### 熵与信息：理解大型语言模型的预测能力

So it creates these manifolds, and the trick is, the distribution that is produced, you can measure the **entropy** (熵: 信息论中衡量信息不确定性或随机性的指标) of the distribution.
所以它创建了这些流形，诀窍在于，它生成的分布，你可以测量该分布的**熵**。

Entropy, the way Shannon described entropy.
熵，香农描述熵的方式。

Not thermodynamic entropy.
不是**热力学熵**（Thermodynamic Entropy: 物理学中衡量系统无序程度的指标）。

Suppose you have a **vocabulary** (词汇表: 模型可以识别和生成的词语或标记集合) of, let's say, 50,000 different tokens, and you have a next token distribution over these 50,000 tokens.
假设你有一个包含50,000个不同**标记**的**词汇表**，并且你有一个关于这50,000个标记的下一个标记分布。

Let's say the prompt is "The cat sat on the..." If that is a prompt, then the distribution will have a high **probability** (概率: 事件发生的可能性) for "mat."
比如说，提示是“猫坐在……”如果这是个提示，那么“垫子”的**概率**就会很高。

Or "hat," or "table," and a very low probability of, let's say, "ship" or "whale" or something like that, right?
或者“帽子”，或者“桌子”，而“船”或“鲸鱼”之类的概率会非常低，对吧？

So because of the way it's trained, it has these distributions.
所以由于其训练方式，它具有这些分布。

Now the distributions can be **low entropy** (低熵: 信息不确定性低，预测结果集中) or **high entropy** (高熵: 信息不确定性高，预测结果分散).
现在，这些分布可以是**低熵**的或**高熵**的。

A high entropy distribution means that there are many different ways that the LLM can go with a high enough probability for all those paths.
一个**高熵**分布意味着大型语言模型可以有许多不同的路径，并且所有这些路径都具有足够高的概率。

Low entropy means that there are only a small set of choices for the next token.
**低熵**意味着下一个标记只有一小部分选择。

And the prompts also, you can categorize into two kinds of prompts.
提示也可以分为两种。

One prompt is **high information entropy** (高信息熵: 提示本身包含大量不确定或多样化信息).
一种提示是**高信息熵**的。

And one prompt is **low information entropy** (低信息熵: 提示本身包含的信息确定性高，选择范围小).
另一种提示是**低信息熵**的。

So the way these manifolds work, the LLM starts paying attention to prompts that have high information entropy and low **prediction entropy** (预测熵: 模型对下一个标记预测的不确定性).
所以这些流形的工作方式是，大型语言模型开始关注那些具有**高信息熵**和**低预测熵**的提示。

What do I mean by that?
我这是什么意思呢？

When I say, "I'm going out for dinner," that phrase, the LLMs have been trained, they've seen it a lot, and there are many different directions I can go with it.
当我说“我要出去吃饭”时，这个短语，大型语言模型已经训练过，它们见过很多次，并且我有很多不同的后续方向。

I can say, "I'm going for dinner tonight," "I'm going for dinner to McDonald's," or "I'm going to dinner blah blah blah."
我可以说是“我今晚要去吃饭”，或者“我要去麦当劳吃饭”，或者“我要去哪里哪里吃饭”。

There are many different, but when I say, "I'm going to dinner with Martin Casado," the LLM, now this is information rich, this is a rare phrase, and now the realm of possibilities reduces because Martin is only going to take me to Michelin star restaurants.
有很多不同，但当我说“我要和Martin Casado一起吃饭”时，大型语言模型，现在这个信息很丰富，这是一个不常见的短语，现在可能性范围就缩小了，因为Martin只会带我去米其林星级餐厅。

I'm not going to go to a McDonald's.
我不会去麦当劳。

You get what I'm saying?
你明白我的意思吗？

The moment you add more **context** (语境: 文本或对话发生的环境和相关信息), you make the prompt information rich, the prediction entropy reduces.
当你添加更多**语境**，使提示信息丰富时，**预测熵**就会降低。

Martin: Yep, yep, yep, yep.
Martin: 对，对，对，对。

Vashan: And another example that I often...
Vashan: 另一个我经常...

Martin: But just quickly, what is your takeaway?
Martin: 但快速问一下，你的结论是什么？

What is your implication on that, which is of course, as you're in, so yeah, you're...
你对此有什么启示，这当然是，因为你身处其中，所以……

Sorry, I forgot how you described it, but the more precise you are, the more tokens you are, I presume, the less options you have for the next token, is that correct or not correct?
抱歉，我忘了你刚才怎么描述的，但你越精确，你的标记越多，我猜想，你下一个标记的选择就越少，这正确吗？

Vashan: Yeah, essentially.
Vashan: 是的，本质上是这样。

Martin: So you're reducing it to a very specific state space.
Martin: 所以你把它简化成一个非常特定的**状态空间**（State Space: 系统所有可能状态的集合）。

When it comes to confidence in an answer, this is kind of a manifold that you can go on.
当谈到对答案的信心时，这就像一个你可以遵循的流形。

Do you have a conclusion of what that means for systems or what that means for reasoning, or is it just a nice way to articulate the bounds of LLM?
你对这对于系统或推理意味着什么有结论吗？还是这只是一种很好地阐述大型语言模型局限性的方式？

Vashan: No, there is something, I don't know if I should say profound, but there is something about it which tells what these LLMs can or cannot do.
Vashan: 不，这里面有一些东西，我不知道是否该说是深刻，但它确实揭示了这些大型语言模型能做什么，不能做什么。

One of the examples that I often tell is, suppose I ask you, "What is 769 * 1?"
我经常举的一个例子是，假设我问你：“769乘以1是多少？”

You have no idea.
你不知道。

You can have some vague idea given the two numbers.
根据这两个数字，你可能会有一些模糊的概念。

In your mind, the next token distribution of the answer is going to be diffuse, right?
在你的脑海中，答案的下一个标记分布会是分散的，对吗？

You don't know, you have maybe a vague guess.
你不知道，你可能有一个模糊的猜测。

If you are mathematically very good, maybe your guess is more precise, but it's still going to be diffuse, and it's not going to be the correct answer.
如果你数学很好，也许你的猜测会更精确，但它仍然是分散的，并且不会是正确的答案。

But if you say, "Can I write it down and do it the way we have learned multiplication tables?"
但是如果你说：“我能把它写下来，用我们学乘法表的方式来做吗？”

Now you know exactly what to do next step, right?
现在你就确切知道下一步该怎么做了，对吗？

You write 769 and then 1025, and then you know exactly.
你写下769，然后是1025，然后你就确切知道了。

So at each stage of that process, your prediction entropy is very low.
所以在这个过程的每个阶段，你的**预测熵**都非常低。

You know exactly what to do because you have been taught this **algorithm** (算法: 解决问题或执行任务的明确步骤序列).
你确切地知道该怎么做，因为你已经学过这个**算法**。

By invoking this algorithm, saying, "Okay, I'm not going to just guess the answer, but I'm going to do it step by step," then your prediction entropy reduces.
通过调用这个算法，说“好的，我不会仅仅猜测答案，而是会一步一步地做”，那么你的**预测熵**就会降低。

You can arrive at an answer which you're confident of and which is correct.
你就能得出一个你确信且正确的答案。

The algorithms are pretty much the same way.
算法也大体如此。

That's why **chain of thought** (思维链: 一种提示技术，鼓励大型语言模型逐步推理以解决复杂问题) works.
这就是为什么**思维链**（Chain of Thought）有效的原因。

What happens with chain of thought is you ask the LLM to do something chain of thought.
思维链的作用是，你要求大型语言模型以思维链的方式做某事。

It starts breaking the problem into small steps.
它开始将问题分解成小步骤。

These steps it has seen in the past.
这些步骤它在过去见过。

It has been trained on maybe with some different numbers, but the concept it has been trained on.
它可能在不同的数字上训练过，但概念是它训练过的。

Once it breaks it down, then it's confident.
一旦它分解了问题，它就有了信心。

"Okay, now I need to do A, B, C, D, and then I arrive at this answer, whatever it is."
“好的，现在我需要做A、B、C、D，然后我得出这个答案，无论它是什么。”

### 个人背景与RAG的意外发明

Martin: Let's zoom back out.
Martin: 让我们把视角拉远一点。

I want to get into LLMs, but first, Michelle, maybe you can give more context on your background and how that informs your work here.
我想深入探讨大型语言模型，但首先，Michelle，也许你可以多介绍一下你的背景，以及它如何影响你在这里的工作。

Vashan: Okay, so, as Martin said, my background is very similar to his.
Vashan: 好的，正如Martin所说，我的背景与他非常相似。

We come from doing networking.
我们都来自网络领域。

My PhD thesis, my early work at Colombia, has all been in networking.
我的博士论文，我在哥伦比亚大学的早期工作，都与网络有关。

But there's another side of me, another hat that I wear, which is both an entrepreneur and a cricket fan.
但我的另一面，我戴的另一顶帽子，是企业家和板球爱好者。

Martin: I was going to say, don't you own a cricket team or something?
Martin: 我正想说，你是不是拥有一支板球队之类的？

Vashan: I am a minority owner at your local cricket team, the San Francisco Unicorns.
Vashan: 我是你们当地板球队——旧金山独角兽队——的小股东。

Martin: That's right.
Martin: 没错。

I'm very proud to have you.
我为你感到非常骄傲。

Vashan: So, in the 90s, I was one of the people who started this portal called Cricket Info.
Vashan: 所以，在90年代，我是创办这个名为Cricket Info的门户网站的人之一。

And Cricket Info, at one point, it was the most popular website in the world.
Cricket Info一度是世界上最受欢迎的网站。

It had more hits than Yahoo.
它的点击量比雅虎还多。

That was before India came on.
那是在印度市场崛起之前。

Martin: It's remarkable.
Martin: 这很了不起。

Vashan: And so, we built, cricket is a very stat sport.
Vashan: 所以，我们建立了，板球是一项非常注重统计数据的运动。

You think baseball multiplied by a thousand.
你可以想象成棒球运动的难度乘以一千倍。

And we had built this free searchable stats database on cricket called Stats Guru.
我们建立了一个名为Stats Guru的免费可搜索的板球统计数据库。

This has been available on Trien for since 2000.
自2000年以来，这个数据库就一直在Trien上可用。

But because you can search for anything, everything was made available on Stats Guru.
但因为你可以搜索任何东西，所以Stats Guru上提供了所有数据。

You can't expect people to write **SQL queries** (SQL查询: 用于管理关系数据库的标准语言) to query everything.
你不能指望人们都写**SQL查询**来查询所有内容。

So how did we do it?
那我们是怎么做的呢？

It was a web form, where you could formulate your query using that form.
它是一个网页表单，你可以用那个表单来构建你的查询。

In the backend, that was translated into SQL query, got the results, and got it back.
在后端，它被翻译成SQL查询，获取结果并返回。

But as a result, because you could do everything, everything was made available.
但结果是，因为你可以做任何事，所以所有东西都提供了。

The web form had 25 different checkboxes, 15 text fields, 18 different drop-downs.
这个网页表单有25个不同的复选框、15个文本字段、18个不同的下拉菜单。

The interface was a mess.
界面一团糟。

It was very daunting.
它非常令人望而生畏。

And ESPN acquired Cricket Info in mid-2006, I think, but they still kept the same interface, and that has always nagged me.
ESPN在2006年中期收购了Cricket Info，但他们仍然保留了相同的界面，这一直困扰着我。

I still know the people.
我仍然认识那些人。

Martin: Wait, wait.
Martin: 等等。

What nagged you is that Cricket Info did not have informal language.
困扰你的是Cricket Info没有非正式语言。

It had a web form for doing queries.
它有一个用于查询的网页表单。

Vashan: That web form was terrible.
Vashan: 那个网页表单太糟糕了。

Martin: Because of that, only the real nerds...
Martin: 正因为如此，只有真正的书呆子……

Of all the things in the world that bother you, the fact that an old website was a web form.
世界上所有困扰你的事情中，一个老网站竟然是一个网页表单。

Vashan: I appreciate your commitment to aesthetic.
Vashan: 我很欣赏你对美学的执着。

So I'm still friendly with the people who run ESPN Cricket.
所以我仍然和管理ESPN板球的人很熟。

The editor-in-chief, whenever he comes to New York, we meet up, we go out for a drink.
主编每次来纽约，我们都会见面，出去喝一杯。

He was here in 2000.
他2000年在这里。

So now the story shifts to how LLM and me met.
所以现在故事转向大型语言模型和我如何结缘。

So January 2000, right before the pandemic, he was here.
所以在2000年1月，就在疫情爆发前，他在这里。

I again said, "Why don't you do something about Stats Guru?"
我又说：“你为什么不为Stats Guru做点什么呢？”

He looks at me and says, "Why don't you do something about Stats Guru?"
他看着我说：“你为什么不为Stats Guru做点什么呢？”

He was kind of joking, but he thought maybe I had some ways to fix the interface.
他有点开玩笑，但他觉得我可能有办法改进界面。

So anyway, then the pandemic hit, the world stopped, but in July of 2020, the first version of **GPT-3** (Generative Pre-trained Transformer 3: 一种大型语言模型) was released.
总之，后来疫情爆发，世界停滞了，但在2020年7月，第一版**GPT-3**发布了。

I saw someone use GPT-3 to write a SQL query for their own database using **natural language** (自然语言: 人类日常交流使用的语言).
我看到有人使用GPT-3，用**自然语言**为他们自己的数据库编写SQL查询。

I thought, "Can I use this to fix Stats Guru?"
我想：“我能用这个来修复Stats Guru吗？”

So I got early access to GPT-3.
所以我获得了GPT-3的早期访问权限。

Getting access those days was difficult, but somehow I got it.
那时获得访问权限很困难，但我不知怎么就得到了。

But soon I realized that I cannot really do it because Stats Guru, the backend databases were so complex.
但很快我意识到，我真的做不到，因为Stats Guru的后端数据库太复杂了。

If you remember, GPT-3 had only a 2048 token **context window** (上下文窗口: 模型在生成响应时可以考虑的输入文本长度).
如果你还记得，GPT-3只有一个2048个标记的**上下文窗口**。

There was no way in hell I could fit the complexities of that database in that context window.
我根本不可能把那个数据库的复杂性塞进那个上下文窗口。

GPT-3 also did not do **instruction following** (指令遵循: 模型理解并执行给定指令的能力) at that time.
当时GPT-3也无法进行**指令遵循**。

But then in trying to solve this problem, I accidentally invented what is now called **RAG** (Retrieval-Augmented Generation: 检索增强生成, 一种结合信息检索和文本生成的技术).
但后来在试图解决这个问题时，我偶然发明了现在所谓的**RAG**。

Where based on the **natural language query** (自然语言查询: 使用日常语言而非编程语言进行的查询), I created a database of natural language queries and **structured queries** (结构化查询: 使用特定语法（如SQL）定义的查询).
基于**自然语言查询**，我创建了一个包含自然语言查询和**结构化查询**的数据库。

I created a **DSL** (Domain-Specific Language: 领域特定语言, 专注于特定应用领域的编程语言), which then translated into a **REST call** (Representational State Transfer API: 一种软件架构风格，用于构建网络服务) to Stats Guru.
我创建了一个**领域特定语言**，然后它被翻译成对Stats Guru的**REST API调用**。

So based on the new query, I would look through my set of natural language queries.
所以根据新的查询，我会浏览我的一组自然语言查询。

I had about 1500 examples, and I would pick the six or seven most relevant ones, and then that and the structured query I would send as a **prefix** (前缀: 添加在主要输入内容之前的信息) and the new query, and GPT-3 magically completed it, and the **accuracy** (准确性: 模型预测与实际结果相符的程度) was very high.
我大约有1500个例子，我会选择其中六七个最相关的，然后把它们和结构化查询作为**前缀**以及新的查询发送，GPT-3奇迹般地完成了它，并且**准确性**非常高。

So that had been running in **production** (生产环境: 软件或系统实际运行并为用户提供服务的环境) since September 2021, about 15 months before **ChatGPT** (ChatGPT: 一种大型语言模型) came, and the whole **revolution** (革命: 重大而根本性的变革) in some sense started and RAG became very popular.
所以这在2021年9月就已经在**生产环境**中运行了，比**ChatGPT**出现早了大约15个月，某种意义上整个**革命**开始了，RAG变得非常流行。

I didn't call it RAG, but this is something I accidentally did in trying to solve that problem for Cricket Info.
我没有称之为RAG，但这正是我在试图解决Cricket Info问题时偶然做到的。

Now, once I built it, I was thrilled that this worked, but I had no idea why it worked.
现在，一旦我构建了它，我很高兴它能工作，但我不知道它为什么能工作。

I stared at that **transformer architecture diagram** (Transformer架构图: 描述Transformer神经网络内部结构的图表), I read those papers, but I couldn't understand how or why it worked.
我盯着那张**Transformer架构图**，我读了那些论文，但我无法理解它如何或为何工作。

So then I started on this journey of developing a **mathematical model** (数学模型: 用数学语言描述系统或现象的模型) trying to understand how it worked.
所以后来我开始踏上开发**数学模型**的旅程，试图理解它是如何运作的。

That's been my journey through this world of AI and LLMs because I was trying to solve this cricket problem.
这就是我通过人工智能和大型语言模型世界所经历的旅程，因为我当时正试图解决这个板球问题。

### 大型语言模型的发展速度与局限性

Martin: Amazing.
Martin: 太棒了。

Reflecting back since the release of GPT-3, what has most surprised you about how LLMs have developed?
回溯到GPT-3发布以来，大型语言模型的发展最让你惊讶的是什么？

Vashan: What has most surprised me?
Vashan: 最让我惊讶的是什么？

The pace of development.
发展的速度。

GPT-3 was a nice parlor trick, and you had to jump through hoops to get it to do something useful.
GPT-3是一个不错的魔术表演，你必须费尽周折才能让它做一些有用的事情。

But starting with ChatGPT, it was an advance over GPT-3, and then you had all these things like chain of thought, instruction following.
但从ChatGPT开始，它就比GPT-3有了进步，然后又出现了思维链、指令遵循等所有这些东西。

GPT-4 really made it polished.
GPT-4真正使其变得完善。

The pace of development has really surprised me.
发展的速度确实让我感到惊讶。

When I started working with GPT-3, I could sort of see what its limitations were, what I could make it do, what I couldn't make it do.
当我开始使用GPT-3时，我能大致看出它的局限性，我能让它做什么，不能让它做什么。

But I never thought of it as what these LLMs have become for me now and what have become for millions of people around the world.
但我从未想过它会变成现在对我以及全球数百万人而言的大型语言模型。

We treat these models as our **co-workers** (同事: 共同工作的人), almost like an **intern** (实习生: 在职学习经验的学生或新员工) that you're constantly chatting with them, brainstorming, making them do all sorts of work.
我们把这些模型当作我们的**同事**，几乎就像一个**实习生**，你不断地和他们聊天、**头脑风暴**、让他们做各种各样的工作。

We could imagine just when ChatGPT was released, it was nice, it could write **poems** (诗歌: 韵律优美、表达情感的文学形式), it could write **limericks** (五行打油诗: 一种幽默的五行诗体), it could answer some hallucinated questions.
我们可以想象，当ChatGPT刚发布时，它很好，可以写**诗歌**，可以写**五行打油诗**，可以回答一些虚构的问题。

But the **capabilities** (能力: 完成特定任务或达到特定目的的本领) that have emerged now, that pace has been very surprising to me.
但现在涌现的**能力**，那种速度，让我非常惊讶。

Martin: Do you see progress **plateauing** (平台期: 发展停滞不前，难以取得更大突破的阶段), either now or in the near future, or how do you see it going?
Martin: 你认为进展正在进入**平台期**吗，无论是现在还是在不久的将来？或者你认为它会如何发展？

Vashan: Yes, in some sense, progress is plateauing.
Vashan: 是的，在某种意义上，进展正在进入**平台期**。

It's like the **iPhone** (iPhone: 苹果公司开发的智能手机).
这就像**iPhone**。

When the iPhone came out, "Wow, what is this thing?"
当iPhone问世时，“哇，这是什么东西？”

And the early iterations, constantly, we were amazed by new capabilities.
在早期的迭代中，我们不断地被新功能所震惊。

But the last seven, eight, nine years, it's maybe the camera got a little bit better, or one thing changed here, or memory is more, but there has been no fundamental advance in what it's capable of.
但过去七、八、九年，可能只是摄像头好了一点，或者这里那里改变了一点，或者内存更大了，但它的能力并没有根本性的进步。

You can see a similar thing happening with these LLMs.
你可以看到这些大型语言模型也发生了类似的事情。

This is not true for just one company and one model.
这不仅仅适用于一家公司和一个模型。

You look at what OpenAI is coming up with, or what Anthropic, Google, or all these open-source models like Mistral.
你看看OpenAI、Anthropic、Google，或者所有这些开源模型，比如Mistral。

The capabilities of LLMs has not fundamentally changed.
大型语言模型的能力并没有根本改变。

They've become better, they've improved, but they have not crossed into a different realm.
它们变得更好了，有所改进，但它们尚未跨入一个不同的领域。

Martin: Michelle, this is something that I really appreciate about your work.
Martin: Michelle，这是我非常欣赏你的工作的一点。

The thing that really struck me is, as soon as these things showed up, you actually got busy trying to have a **formal model** (形式模型: 用数学或逻辑语言精确描述系统行为的抽象模型) of what they're capable of, which was in stark contrast to what everybody else was doing.
真正让我震惊的是，这些东西一出现，你就忙着尝试建立一个关于它们能力的**形式模型**，这与其他人所做的形成了鲜明对比。

Everybody else is like, "AGI, these things are going to recursively self-improve," or they'll say, "Oh, these are just **stochastic parrots** (随机鹦鹉: 批评大型语言模型缺乏真正理解，只是模仿和重复训练数据的术语)," which doesn't mean anything.
其他人都在说：“通用人工智能，这些东西将**递归自我改进**（Recursively Self-Improve: 系统通过自身学习和优化不断提升能力），”或者他们会说：“哦，这些只是**随机鹦鹉**，”这根本没有任何意义。

So everybody had rhetoric, and sometimes this rhetoric was fanciful, and sometimes this rhetoric was almost **reductionist** (还原论的: 将复杂现象简化为基本组成部分来解释).
所以每个人都有说辞，有时这些说辞是异想天开的，有时这些说辞几乎是**还原论的**。

Like, "Oh, it's just a database," which is clearly not true.
比如：“哦，它只是一个数据库，”这显然不真实。

The thing that really struck me about your work is, you're like, "No, let's figure out exactly what's going on.
你的工作真正让我震惊的是，你就像在说：“不，让我们弄清楚到底发生了什么。

Let's come up with a formal model, and once we have a formal model, we could reason about what that means."
让我们提出一个**形式模型**，一旦我们有了形式模型，我们就可以推断这意味着什么。”

In my reading of your work, I kind of break it up in two pieces.
在我对你作品的解读中，我将其分为两部分。

There's the first one where you basically came up with this **matrix abstraction** (矩阵抽象: 将复杂数据或系统行为简化为矩阵形式进行分析).
第一部分是你基本上提出了这个**矩阵抽象**。

I think it's worth you talking through, and then you took **in-context learning** (上下文学习: 模型在不更新参数的情况下，通过分析输入中的示例来学习新任务) as an example, and you mapped it to **Bayesian reasoning** (贝叶斯推理: 一种基于贝叶斯定理，通过新证据更新概率的统计推断方法), which to me was incredibly powerful because at the time nobody knew why in-context learning worked.
我认为这值得你详细解释，然后你以**上下文学习**为例，将其映射到**贝叶斯推理**，这对我来说非常强大，因为当时没有人知道上下文学习为什么有效。

I think it'd be great for you to discuss that because again, I think it was the first real kind of formal effect on how are these things working.
我认为你讨论一下会很棒，因为再次强调，我认为这是第一次真正形式化地解释这些东西是如何运作的。

And then the more recent work that you're working on now is a more generalized version of what is the **state space** (状态空间: 系统所有可能状态的集合) that these models output when it comes to confidence, which is the manifold that we're talking about before.
然后你现在正在做的更近期的工作是关于这些模型在涉及信心时输出的**状态空间**的更广义版本，也就是我们之前谈论的流形。

So I think it would be great if you just described your matrix model, and then how you use that to provide some balance of what in-context learning is doing, what's happening.
所以我想如果你能描述一下你的矩阵模型，以及你如何用它来平衡地解释上下文学习在做什么，会很棒。

### 矩阵抽象与贝叶斯推理

Vashan: Okay, so, let's start with that matrix abstraction.
Vashan: 好的，那我们从**矩阵抽象**开始。

The idea behind the matrix is you have this gigantic matrix where every row corresponds to a prompt.
这个矩阵背后的想法是，你有一个巨大的矩阵，其中每一行都对应一个提示。

The number of columns of this matrix is the vocabulary of the LLM, the number of tokens it has that it can emit.
这个矩阵的列数是大型语言模型的词汇量，也就是它可以发出的标记数量。

So for every prompt, this matrix contains the distribution over this vocabulary.
所以对于每个提示，这个矩阵都包含这个词汇表上的分布。

Martin: Yep.
Martin: 对。

Vashan: So when you say, "The cat sat on the..." the column that corresponds to "mat" will have a high probability.
Vashan: 所以当你说“猫坐在……”时，对应“垫子”的那一列会有很高的概率。

Most of them will be zero, but reasonable continuations will have a non-zero probability.
大部分会是零，但合理的延续会有非零概率。

You can imagine that there's this gigantic matrix.
你可以想象存在这样一个巨大的矩阵。

Now the size of this matrix is, if you just take just the old first-generation GPT-3 model, which had a context window of 2,000 tokens and a vocabulary of 50,000 next tokens or 50,000 tokens, then the size of it, the number of rows in this matrix, is more than the number of atoms across all galaxies that we know enough.
现在这个矩阵的大小是，如果你只看旧的第一代GPT-3模型，它有一个2000个标记的上下文窗口和50000个下一个标记或50000个标记的词汇表，那么它的行数，也就是这个矩阵的行数，比我们所知的所有星系中的原子总数还要多。

Clearly, we cannot represent it exactly.
显然，我们无法精确地表示它。

Fortunately, a lot of these rows do not appear in real life, an arbitrary collection of tokens you are not going to use that as a prompt.
幸运的是，很多这些行在现实生活中并不会出现，你不会将任意的标记集合用作提示。

Similarly, a lot of these rows are absent, and a lot of the column values are also zero.
同样，很多这些行是不存在的，很多列值也为零。

When you say, "The cat sat on the..." it's unlikely to be followed by the token corresponding to, let's say, numbers or an arbitrary collection of tokens.
当你说“猫坐在……”时，它不太可能后面跟着对应数字或任意标记集合的标记。

Only a very small subset of tokens can follow a particular prompt.
只有非常小的标记子集可以跟随特定的提示。

So this matrix is very, very sparse.
所以这个矩阵非常非常稀疏。

But even after that sparsity, and even after removing the gibberish prompts, the size of this matrix is too much for these models to represent even with a trillion parameters.
但即使在稀疏化之后，即使移除了那些胡言乱语的提示，这个矩阵的大小对于这些模型来说仍然太大了，即使拥有万亿参数也无法表示。

So what in an abstract sense, what is happening is, the models get trained on certain data from the training set, and a subset, a small subset of these rows, you have reasonable values for the next token distribution.
所以从抽象意义上讲，发生的是，模型在训练集中的某些数据上进行训练，这些行的一个子集，一个很小的子集，你对下一个标记的分布有合理的值。

Whenever you give the prompt something new, then it'll try to interpolate with what it has learned and what's there in the new prompt and come up with a new distribution.
每当你给出一个新的提示时，它就会尝试用它所学到的东西和新提示中的内容进行插值，然后得出一个新的分布。

But it's basically, so it's more than a stochastic parrot.
但它基本上，所以它不仅仅是一个随机鹦鹉。

It is Bayesian on this subset of the matrix that it has been trained on.
它是在其训练过的这个矩阵子集上进行**贝叶斯推理**的。

So when I say, "I'm going out for dinner with Martin tonight."
所以当我说：“我今晚要和Martin出去吃饭。”

I'm reasonably sure that it has never encountered that phrase in its training data.
我相当确定它从未在训练数据中遇到过这个短语。

But it has encountered variants of this phrase.
但它遇到过这个短语的变体。

Given that I'm going out with Martin, it can produce a **Bayesian posterior** (贝叶斯后验分布: 在观察到新证据后，对未知参数概率的更新).
鉴于我要和Martin出去，它就能生成一个**贝叶斯后验分布**。

It uses that evidence that Martin is the one that I'm going for dinner with, and it'll produce a next token distribution that will focus on the likely places that we are going.
它利用Martin是我要一起吃饭的人这一证据，生成一个下一个标记的分布，该分布将聚焦于我们可能要去的地方。

So this matrix, because it's represented in a compressed way, yet the models respond to everything, every prompt.
所以这个矩阵，因为它以压缩的方式表示，但模型却能对所有东西、所有提示做出响应。

How do they do it?
它们是如何做到的呢？

They go back to what they've been trained on, interpolate there, and use the prompt as some evidence to compute a new distribution, which...
它们回到训练过的内容，在那里进行插值，并使用提示作为一些证据来计算一个新的分布，这个分布……

Martin: Right.
Martin: 对。

So the context of the prompt impacts the **posterior distribution** (后验分布: 在观察到新证据后，对未知参数概率的更新).
所以提示的**语境**会影响**后验分布**。

Vashan: Exactly.
Vashan: 完全正确。

Martin: Right.
Martin: 对。

And this is you mapped to Bayesian learning where the context is the new evidence.
你把它映射到**贝叶斯学习**（Bayesian Learning：一种统计学习方法，通过贝叶斯定理更新对参数的信念），其中**语境**是新的证据。

Vashan: New evidence, exactly, to learn from.
Vashan: 新证据，没错，从中学习。

So I'll give you, for instance, the cricket example that I spoke about earlier.
所以，我给你举个例子，比如我之前提到的板球例子。

Martin: Yeah.
Martin: 是的。

Vashan: So I created my own DSL.
Vashan: 所以我创建了我自己的**领域特定语言**。

Martin: Yeah.
Martin: 是的。

Vashan: Which mapped a natural language query in cricket to this DSL, which then I can translate into a SQL query or a REST API, whatever.
Vashan: 它将板球中的自然语言查询映射到这个**领域特定语言**，然后我可以将其翻译成SQL查询或REST API，等等。

But getting the DSL is important.
但获得**领域特定语言**很重要。

Now these LLMs have never seen that DSL.
现在这些大型语言模型从未见过那个**领域特定语言**。

I designed it.
我设计的。

Martin: Yeah.
Martin: 是的。

Vashan: Right.
Vashan: 对。

But yet after showing a few examples, it learned it.
但只展示了几个例子，它就学会了。

How did it learn it?
它是怎么学会的呢？

Martin: And this is in the prompt.
Martin: 这在提示中。

You didn't do any training.
你没有进行任何训练。

100% in the prompt, right?
100%在提示中，对吗？

So it's the same.
所以是一样的。

Vashan: Yeah, yeah.
Vashan: 是的，是的。

Yeah, this was happening in October 2020.
是的，这发生在2020年10月。

I had no access to internals of OpenAI.
我无法访问OpenAI的内部结构。

I could just access their API.
我只能访问他们的API。

OpenAI had no access to internal structure of Stats Guru or the DSL that I cooked up in my head.
OpenAI也无法访问Stats Guru的内部结构或我头脑中构思的**领域特定语言**。

Yet after showing it only a few examples, it learned it right away.
然而，在只展示了几个例子之后，它立刻就学会了。

So that's an example where it has seen DSLs or structures in the past, and now using this evidence that I show, "Okay, this is what my DSL looks like."
所以这是一个例子，它过去见过**领域特定语言**或结构，现在利用我展示的这些证据，“好的，我的**领域特定语言**就是这样。”

Now a new natural language query, it is able to create the right posterior distribution for the tokens that map to the example that I've seen.
现在一个新的自然语言查询，它能够为映射到我所见示例的标记创建正确的**后验分布**。

The other beautiful thing about this is this is an example of **few-shot learning** (少样本学习: 模型仅通过少量示例就能快速学习新任务) or in-context learning, but when I give that prompt along with these examples to this LLM, I'm not saying to the LLM, "Okay, this is an example of few-shot learning, so learn from these examples," right?
关于这一点，另一个美妙之处在于，这是一个**少样本学习**或**上下文学习**的例子，但当我和这些例子一起把提示给这个大型语言模型时，我并没有对它说：“好的，这是一个少样本学习的例子，所以从这些例子中学习，”对吗？

You just pass this to the LLM as a prompt, and it processes it exactly the way it would process any other prompt which is not an example of in-context learning.
你只是把它作为一个提示传递给大型语言模型，它处理它的方式与处理任何其他不是上下文学习示例的提示完全相同。

So that really means that the underlying mechanism is the same, whether you give a set of examples and then ask it to complete a task like an in-context learning, or just give it some prompt for continuation that "I'm going out for dinner with Martin tonight."
所以这确实意味着底层机制是相同的，无论你提供一组示例，然后让它完成一个像上下文学习一样的任务，还是仅仅给它一个提示继续说“我今晚要和Martin出去吃饭”。

There's no in-context learning there, but the process with which it's generating or doing this inferencing is exactly the same, and that's what I have been trying to model and come up with a formal model of.
那里没有上下文学习，但它生成或进行这种**推理**（Inference: 模型基于已知信息得出结论的过程）的过程是完全相同的，这就是我一直在努力建模并提出形式模型的原因。

### 递归自我改进的局限性

Martin: What I've found very impressive is you've used this basic model to show a number of things.
Martin: 我发现非常令人印象深刻的是，你用这个基本模型展示了许多东西。

To describe in-context learning and to map to Bayesian learning, but you did it for another one where you've sketched out this almost glib argument on Twitter or on X, where you made a rough argument for why **recursive self-improvement** (递归自我改进: 系统通过自身学习和优化不断提升能力，形成正反馈循环) can't happen without additional information.
它描述了上下文学习并将其映射到贝叶斯学习，但你还用它解释了另一件事：你在Twitter或X上粗略地提出了一个看似轻描淡写的论点，解释了为什么在没有额外信息的情况下，**递归自我改进**是不可能发生的。

Maybe just walk through very quickly how the same model you can just very quickly show that a model can never recursively self-improve.
也许你可以很快地解释一下，同样的模型如何能非常迅速地证明一个模型永远无法**递归自我改进**。

Vashan: So another phrase that we've been using recently is the output of the LLM is the **inductive closure** (归纳闭包: 从给定数据中推导出的所有可能结论的集合) of what it has been trained on.
Vashan: 所以我们最近使用的另一个短语是，大型语言模型的输出是其训练数据的**归纳闭包**。

Martin: Yeah.
Martin: 是的。

Vashan: So when you say that it can recursively self-improve, it could mean one of two things.
Vashan: 所以当你说它可以**递归自我改进**时，它可能意味着两件事之一。

Martin: Well, actually, what's kind of interesting is, most people agree that if you have one LLM and you just feed the output into the input, it's not going to do anything.
Martin: 实际上，有趣的是，大多数人同意，如果你有一个大型语言模型，你只是将输出作为输入反馈，它不会做任何事情。

But then often people will say, "Well, what if you have two LLMs?
但人们通常会说：“那如果有两个大型语言模型呢？

You have no **external information** (外部信息: 不属于模型自身训练数据或当前上下文的额外数据), but you have two LLMs talking to each other.
你没有**外部信息**，但你有两个大型语言模型互相交流。

Maybe they can improve each other, and then you can have like a **takeoff scenario** (起飞情景: 指人工智能能力快速指数级增长，达到远超人类水平的状态)."
也许它们可以互相改进，然后你就可以拥有一个**起飞情景**。”

But again, you even addressed this even in the case of N number of LLMs using kind of the matrix model to show that you just aren't gaining any **information entropy** (信息熵: 信息论中衡量信息量和不确定性的指标).
但你再次强调，即使在有N个大型语言模型的情况下，你也用矩阵模型解决了这个问题，表明你并没有获得任何**信息熵**。

Vashan: Yeah.
Vashan: 是的。

So you can represent the information contained in these models, and let's go back to that matrix analogy, the matrix abstraction.
所以你可以表示这些模型中包含的信息，让我们回到那个矩阵类比，矩阵抽象。

Like I said, these models are represent a subset of the rows.
就像我说的，这些模型代表了行的一个子集。

Martin: Yeah.
Martin: 是的。

Vashan: So a subset of the rows are represented, but some of these rows are able to help fill out some of the missing rows.
Vashan: 所以一部分行被表示出来，但其中一些行能够帮助填补一些缺失的行。

For instance, if the model knows how to do **multiplication** (乘法: 基本算术运算之一), doing the step by step, then every row that is corresponding to, let's say, 769 * 125 or whatever, all those it can fill out the answer because it has those **algorithms** (算法: 解决问题或执行任务的明确步骤序列) embedded in them.
例如，如果模型知道如何进行**乘法**，一步一步地做，那么对应于769 * 125或任何其他乘法的每一行，它都可以填补答案，因为它内置了那些**算法**。

You just need to **unroll them** (展开它们: 逐步执行算法或逻辑过程).
你只需要**展开它们**。

Martin: Yeah.
Martin: 是的。

Vashan: So it can sort of self-improve up to a point.
Vashan: 所以它可以在一定程度上自我改进。

But beyond a point, these models can only generate what they have been trained on.
但超过某个点，这些模型只能生成它们已经训练过的内容。

So let me give you three examples.
所以让我给你三个例子。

Any model, any LLM that was trained on pre-1915 physics would never have come up with a theory of relativity.
任何在1915年前物理学上训练的模型，任何大型语言模型，都无法提出相对论。

Einstein had to reject the Newtonian physics and come up with this space-time continuum.
爱因斯坦必须拒绝牛顿物理学，才能提出这个时空连续体。

He completely rewrote the rules.
他彻底改写了规则。

That is an example of AGI where you are generating new knowledge.
那是一个通用人工智能的例子，你在那里生成新知识。

It's not simply universe, it's not computing, it's actually discovering something fundamental about the universe.
它不仅仅是宇宙，它不是计算，它实际上是发现了宇宙中一些基本的东西。

Fundamental, and for that, you have to go outside your training set.
基础性的，为此，你必须超越你的训练集。

Similarly, any LLM that was trained on it would not have come up with **quantum mechanics** (量子力学: 描述微观粒子行为的物理理论).
同样，任何在此基础上训练的大型语言模型都无法提出**量子力学**。

That's **wave-particle duality** (波粒二象性: 粒子同时具有波和粒子性质的现象) or this whole **probabilistic notion** (概率概念: 事物发生的可能性), or that energy is not continuous, but it is **quantized** (量子化: 物理量只能取离散值).
那是**波粒二象性**，或者这整个**概率概念**，或者能量不是连续的，而是**量子化**的。

You had to reject Newtonian physics.
你必须拒绝牛顿物理学。

Martin: Yeah.
Martin: 是的。

Vashan: Or **Gödel's incompleteness theorem** (哥德尔不完备定理: 逻辑学和数学基础理论中的重要结果).
Vashan: 或者**哥德尔不完备定理**。

Martin: Yeah.
Martin: 是的。

Vashan: He had to go outside the **axioms** (公理: 无需证明而被接受为真的基本命题) to say that, "Okay, it is incomplete."
Vashan: 他必须超越**公理**，才能说：“好的，它是不完备的。”

So those are examples where you're creating new science or fundamentally new results.
所以这些都是你创造新科学或根本性新成果的例子。

That kind of self-improvement is not possible with these architectures.
这种自我改进在这些架构下是不可能的。

They can refine these, they can fill out these roles where the answer already exists.
它们可以完善这些，它们可以填补那些答案已经存在的角色。

Another example, which has received a lot of press these days, is these **IMO results** (International Mathematical Olympiad: 国际数学奥林匹克竞赛) (International Math Olympiad).
另一个最近备受关注的例子是**国际数学奥林匹克竞赛**的成绩。

Whether it's a human solving it or the LLM solving it, they are not inventing **new kinds of math** (新型数学: 现有数学体系之外的全新数学概念或分支).
无论是人类解决还是大型语言模型解决，它们都没有发明**新型数学**。

They are able to connect known results in a sequence of steps to come up with the answer.
它们能够通过一系列步骤连接已知结果来得出答案。

So even the LLMs, what they are doing is they are exploring all sorts of solutions.
所以即使是大型语言模型，它们所做的也是探索各种解决方案。

In some of these solutions, they start going on this path where their next token entropy is low.
在其中一些解决方案中，它们开始沿着下一个标记熵较低的路径前进。

That's where I say they are in that Bayesian manifold.
这就是我所说的它们处于那个贝叶斯流形中。

Where you have this **entropy collapse** (熵坍塌: 系统不确定性急剧降低，趋于稳定状态).
在这里你拥有**熵坍塌**。

By doing those steps, you arrive at the answer, but you're not inventing new math.
通过执行这些步骤，你得到了答案，但你并没有发明新的数学。

You're not inventing new axioms or new branch branches of mathematics.
你没有发明新的公理或新的数学分支。

You're sort of using what you've been trained on to arrive at that answer.
你只是利用你所受的训练来得出那个答案。

So those things LLMs can do, they'll get better at it of connecting the known dots.
所以这些事情大型语言模型可以做到，它们会越来越擅长连接已知的点。

But creating new dots, I think we need an **architectural advance** (架构进步: 对系统底层设计进行根本性改进).
但要创造新的点，我认为我们需要**架构进步**。

### AGI的定义与新架构的需求

Martin: So Martin was talking earlier about how the discourse was either stochastic parrots or AGI recursive self.
Martin: Martin之前谈到，讨论要么是关于随机鹦鹉，要么是关于通用人工智能的递归自我改进。

How do you conceive of the AGI discourse or even this the concept?
你如何理解通用人工智能的讨论，甚至是这个概念？

What does it mean to the extent that it's useful?
在有用的范围内，它意味着什么？

How do you think about that?
你是怎么看待这个问题的？

Vashan: So the way I think about it, the way we have tried to formulate in our papers, is it's beyond a stochastic parrot, but it's not AGI.
Vashan: 所以我对此的看法，以及我们在论文中试图阐述的方式是，它超越了随机鹦鹉，但它不是通用人工智能。

It's doing Bayesian reasoning over what it has been trained on.
它正在对其训练过的内容进行**贝叶斯推理**。

So it's a lot more sophisticated than just a stochastic parrot.
所以它比一个随机鹦鹉复杂得多。

Martin: So how do you define AGI?
Martin: 那么你如何定义通用人工智能？

Vashan: Okay, so AGI, how do I define AGI?
Vashan: 好的，那么通用人工智能，我如何定义通用人工智能？

The way I would say that LLMs currently navigate through this known Bayesian manifold, AGI will create new manifolds.
我会说，大型语言模型目前是在这个已知的贝叶斯流形中导航，而通用人工智能将创造新的流形。

So right now these models navigate, they do not create.
所以现在这些模型是导航，它们不创造。

AGI will be when we are able to create new science, new results, new math.
通用人工智能将是我们能够创造新科学、新成果、新数学的时刻。

When an AGI comes up with a theory of relativity, I mean it's an extremely high bar, but you get what I'm saying.
当一个通用人工智能提出相对论时，我的意思是这是一个极高的标准，但你明白我的意思。

It has to go beyond what it has been trained on to come up with new paradigms, new science, and that's my definition of AGI.
它必须超越其训练数据，才能提出新的范式和新科学，这就是我对通用人工智能的定义。

Martin: Michelle, do you think that based on the work you've done, can you bound the amount of data, computer, or data or compute that would be needed in order for it to evolve itself?
Martin: Michelle，你认为根据你所做的工作，你能否限制它自我进化所需的数据量、计算量，或者数据或计算量？

One of the problems, if you just take LLMs as they exist, is there was so much data used to create them.
如果你只看现有的大型语言模型，其中一个问题是，创建它们使用了大量数据。

To create a new manifold will need a lot more data just because of the basic mechanisms, otherwise it'll just kind of get consumed into the existing set of data.
创建一个新的流形将需要更多的数据，仅仅因为基本机制如此，否则它就会被现有数据消耗掉。

Have you found any bounds of what would be needed to actually evolve the manifold in a useful way, or do you think we just need a new architecture?
你是否发现有什么限制，是需要真正以有用方式演化流形的？或者你认为我们只是需要一个新的架构？

Vashan: I personally think that we need a new architecture.
Vashan: 我个人认为我们需要一个新的架构。

The more data that we have, the more compute we have, we'll get maybe smoother manifold.
我们拥有的数据越多，计算能力越强，我们可能会得到更平滑的流形。

So it's like a map.
所以它就像一张地图。

Martin: Yeah, because there's this view that people have.
Martin: 是的，因为人们有这种观点。

They're like, "Well, Vish, this is all good and well, but I could just take an LLM, and I can give it eyes, and I can give it ears, and I can put it in the world, and it'll gain information, and based on that information, it'll improve itself."
他们会说：“Vish，这都很好，但我可以拿一个大型语言模型，给它眼睛，给它耳朵，把它放到世界中，它会获取信息，并基于这些信息自我改进。”

"And therefore, it can learn new things."
“因此，它能学习新事物。”

But the counterpoint that I've always just intuitively thought to that is, the amount of data used to train these things is so large.
但我对此一直直觉上的反驳是，训练这些东西所用的数据量是如此之大。

How much can you actually evolve that manifold given an incremental?
在增量的情况下，你实际上能让那个流形进化多少？

Almost none at all, right?
几乎完全没有，对吗？

There has to be some other way to generate new manifolds that aren't evolving the existing one.
必须有其他方法来生成新的流形，而不是仅仅演化现有的流形。

Vashan: I completely agree.
Vashan: 我完全同意。

There has to be a new architectural leap that is needed to go from the current, just throwing more data and more compute, it's going to plateau.
我们需要一个全新的**架构飞跃**（Architectural Leap: 在系统设计或技术范式上的重大突破），而不是仅仅投入更多数据和计算，那样会达到平台期。

It's the iPhone 15, 16, 17.
就像iPhone 15、16、17。

Martin: Are there any research directions that are promising in your mind that might help us go beyond LLM limitations?
Martin: 在你看来，有哪些有前景的研究方向可能帮助我们超越大型语言模型的局限性？

Vashan: I love LLMs.
Vashan: 我喜欢大型语言模型。

They are fantastic, and they are going to increase productivity like nobody's business, but I don't think they are the answer.
它们非常棒，并将极大地提高生产力，但我认为它们不是最终答案。

Yann LeCun famously says that LLMs are a distraction on the road to AGI.
**扬·勒昆**（Yann LeCun: 著名人工智能科学家，图灵奖得主）曾有名地指出，大型语言模型是通往通用人工智能道路上的一个干扰。

They're a dead end.
它们是死胡同。

I don't think I'm not quite in that camp, but I think we need a new architecture to sit on top of LLMs to reach AGI.
我并不完全认同他的观点，但我认为我们需要一个新的架构来建立在大型语言模型之上，以达到通用人工智能。

A very basic thing, what Martin just said, you give them eyes and you give them ears, you make them **multimodal** (多模态: 处理和理解多种类型数据，如文本、图像、音频等).
一个非常基本的事情，就像Martin刚才说的，你给它们眼睛，给它们耳朵，你让它们成为**多模态**的。

They, of course, they'll become more powerful, but you need a little bit more than that.
它们当然会变得更强大，但你需要更多一点。

The way **human brains** (人脑: 人类思考、情感和行为的生物学基础) learns with very few examples, that's not the way **transformers** (Transformer: 一种神经网络架构，广泛应用于大型语言模型) learn.
**人脑**通过极少的例子学习的方式，并不是**Transformer**学习的方式。

I'm not saying that we need to create an Einstein or a Gödel, but there has to be an architectural leap that is able to create these manifolds, and just throwing new data will not do it.
我并不是说我们需要创造一个爱因斯坦或哥德尔，但必须有一个**架构飞跃**，能够创造这些流形，仅仅投入新数据是做不到的。

It'll just smoothen out the already existing manifolds.
它只会使已经存在的流形变得更平滑。

Martin: Is that something?
Martin: 这是什么？

Is your goal to actually help think through new architectures or are you primarily focused on putting formal bounds on existing architectures?
你的目标是实际帮助思考新架构，还是主要专注于为现有架构设定形式界限？

Vashan: A bit of both.
Vashan: 两者兼而有之。

The former goal is the more ambitious one that everybody is chasing, and I think about that constantly.
前者是每个人都在追求的更宏大的目标，我一直在思考这个问题。

Martin: Are there any new, even sort of hints at a new architect, or have we started to make any progress on new architectures?
Martin: 有没有关于新架构的任何线索，或者我们是否在新架构上开始取得进展？

Vashan: Yann has been pushing at this **JPA architecture** (Joint Embedding Predictive Architecture: 联合嵌入预测架构, Yann LeCun提出的一种自监督学习架构).
Vashan: 扬一直在推动**联合嵌入预测架构**。

**Energy-based architectures** (基于能量的架构: 一种机器学习模型，通过定义能量函数来学习数据分布) they seem promising.
**基于能量的架构**看起来很有前景。

The way I have been thinking about it is, there's this set of benchmarks or the **ARC prize** (Abstraction and Reasoning Corpus: 抽象推理语料库, 一项旨在衡量人工智能系统泛化能力的基准测试), that **François Chollet** (弗朗索瓦·肖莱: Keras深度学习库的创建者) has.
我一直在思考的方式是，有一套基准测试，或者说**抽象推理语料库**，**弗朗索瓦·肖莱**提出的。

If you understand why the LLMs are failing on this test, maybe you can reverse engineer a new architecture that will help you succeed in that.
如果你理解大型语言模型为什么在这个测试中失败，也许你可以逆向工程出一个新的架构，帮助你成功。

I agree with a lot of what several people say that language is great, but language is not the answer.
我同意许多人所说的，语言很棒，但语言不是答案。

When I'm looking at catching a ball that is coming to me, I'm mentally doing that simulation in my head.
当我看着一个球向我飞来时，我会在脑海中进行模拟。

I'm not translating it to language to figure out where it'll land.
我不会把它翻译成语言来计算它会落在哪里。

I do that simulation in my head.
我在脑海中进行那种模拟。

So one of the new architectural things is how do we get these models to do **approximate simulations** (近似模拟: 以简化或估计的方式模拟复杂系统行为).
所以新的架构方向之一是，我们如何让这些模型进行**近似模拟**。

To test out that idea and whether to proceed or not.
来测试那个想法，以及是否继续。

So, another thing that I've always wondered about is, did we develop as humans, did we develop language because we were intelligent, or because we developed language, we accelerated our intelligence?
所以，我一直想知道的另一件事是，作为人类，我们是因为聪明才发展出语言，还是因为发展了语言才加速了我们的智力？

Martin: I don't know which side of the camp you follow on that question.
Martin: 我不知道你在这个问题上支持哪一方。

What's interesting is, you have these anecdotal examples of humans developing languages **de novo** (从头开始: 从无到有地创造) that have been recorded.
有趣的是，有一些**轶事证据**（Anecdotal Evidence: 基于个人经验或观察而非系统研究的证据）表明人类**从头开始**发展语言，并被记录下来。

It's either the **Guatemalan or Nicaraguan sign language** (危地马拉或尼加拉瓜手语: 两个国家聋哑儿童自发发展出的手语).
这要么是**危地马拉或尼加拉瓜手语**。

Where there are these students that develop their own language without being taught.
那里的学生在没有被教导的情况下发展出了自己的语言。

So that would suggest that language follows intelligence.
所以这可能表明语言是智力的产物。

The problem is, they're all anecdotal, right?
问题是，它们都是**轶事证据**，对吗？

Who knows if somebody didn't teach them sign language?
谁知道是不是有人教过他们手语呢？

Nobody really knows.
没有人真正知道。

There are no controls.
没有对照组。

So this is all these **observational studies** (观察性研究: 不干预研究对象，仅观察并记录现象的研究), and there's so few of them, you have to wonder if it's just kind of sloppy observation.
所以这些都是**观察性研究**，而且数量如此之少，你不得不怀疑这是否只是一种粗略的观察。

I think that the question is still outstanding.
我认为这个问题仍然悬而未决。

Vashan: Yeah.
Vashan: 是的。

I mean, language definitely accelerated our intelligence.
我的意思是，语言无疑加速了我们的智力。

There's no question about that.
这一点毫无疑问。

Martin: Yeah.
Martin: 是的。

Vashan: But which followed which, we don't know.
Vashan: 但谁先谁后，我们不知道。

But I view it as a **networking problem** (网络问题: 涉及通信、连接和信息交换的问题) naturally, which is once you have languages, you can communicate, and when you communicate, you can replicate.
但我自然而然地将其视为一个**网络问题**，即一旦你有了语言，你就可以交流，当你交流时，你就可以复制。

Martin: Yeah, exactly.
Martin: 是的，完全正确。

Vashan: Exactly.
Vashan: 完全正确。

### 人工智能社区的挑战与未来方向

Martin: Cool.
Martin: 酷。

Again, this is kind of a wonky question, but I think one thing that you've brought to the discourse, and for those that are listening to this, I really think that you should look up Val's work and read it.
再次，这可能是一个有点怪异的问题，但我认为你为这场讨论带来了一点，对于正在听这个节目的人，我真的认为你们应该去查阅并阅读瓦尔的作品。

I just think it'll give you a really, especially if you have a **systems background** (系统背景: 具备理解和设计复杂系统知识和经验), like a networking or systems background, give you a really, really good understanding of the bounds on these.
我只是觉得它会给你一个非常，特别是如果你有**系统背景**，比如网络或系统背景，它会让你对这些系统的局限性有一个非常非常好的理解。

But the toolkit that you draw from is like **information theory** (信息论: 研究信息量化、存储和通信的数学理论) and more **formal models** (形式模型: 用数学或逻辑语言精确描述系统行为的抽象模型).
但你所借鉴的工具包是**信息论**和更**形式的模型**。

Have you found that the AI community is receptive to this, or is it like two different cultures, two different planets trying to communicate and not a lot of common ground?
你是否发现人工智能社区对此持开放态度？还是说这就像两种不同的文化、两个不同的星球试图交流，但共同点不多？

How have you found bringing the networking view of the world to the AI realm?
你觉得将网络的世界观带入人工智能领域的效果如何？

Vashan: Some of them are receptive to it, definitely, but these large conferences and their **reviewing process** (评审过程: 对提交的研究论文或项目进行评估和反馈的系统) it's so random, and the kind of questions they ask.
Vashan: 毫无疑问，其中一些人对此持开放态度，但这些大型会议及其**评审过程**非常随意，他们提出的问题也是如此。

I'm a **modeling person** (建模者: 专注于创建数学或概念模型来理解和预测系统行为的人), I like to model things, and I submitted one version of this work to one very famous machine learning or AI conference, and the reviewer said, "Okay, this is the model.
我是一个**建模者**，我喜欢建模，我把这项工作的一个版本提交给了一个非常著名的大型机器学习或人工智能会议，审稿人说：“好的，这是模型。

So what?"
那又怎样？”

Martin: That's absolutely remarkable.
Martin: 这绝对令人震惊。

You've actually taken a system that nobody understands, we have no models for, you actually provided some model that we can use to analyze it, and that alone wasn't sufficient.
你实际上拿了一个没人理解、我们没有模型的系统，你提供了一些我们可以用来分析的模型，但这本身还不够。

They're asking, "So where are the **large-scale experiments** (大规模实验: 涉及大量数据、资源或参与者的实验) to prove this?"
他们问：“那么证明这个的**大规模实验**在哪里？”

I honestly, I mean, I find there's so much **empiricism** (经验主义: 强调通过观察和实验获取知识的方法) in the current AI community, exactly because we don't understand the systems.
老实说，我发现当前的人工智能社区存在太多**经验主义**，正是因为我们不理解这些系统。

It kind of reminds me, I feel like systems went the other way, right?
这让我想起，我觉得系统领域走了另一个方向，对吧？

It's like we had all of these models, but then we didn't understand how the systems worked, and then we just actually did measurement.
就像我们有所有这些模型，但我们不理解系统是如何工作的，然后我们只是实际进行了测量。

It feels like ML and the AI stuff is the opposite, which is like we know we don't understand them, and so we just measure them, but now we're trying to come up with the models.
感觉机器学习和人工智能是反过来的，我们知道我们不理解它们，所以我们只是测量它们，但现在我们正在尝试提出模型。

Vashan: Yeah, exactly.
Vashan: 是的，完全正确。

So it was so easy in some sense to build these **artifacts** (人工制品: 由人类创造的物体或系统) and then just measure them that people have been going around trying to do that.
所以在某种意义上，构建这些**人工制品**然后测量它们是如此容易，以至于人们一直在尝试这样做。

One term I really dislike is **prompt engineering** (提示工程: 设计和优化给大型语言模型的输入提示，以引导其生成所需输出的技术).
我真的不喜欢的一个术语是**提示工程**。

Martin: Why?
Martin: 为什么？

Vashan: **Engineering** (工程: 应用科学原理和技术来设计、建造和维护结构、机器和系统的学科) used to mean sending a man to the or providing 59's reliability.
Vashan: **工程**过去意味着把人送上太空，或者提供99.999%的可靠性。

**Prompt engineering** (提示工程) is **prompt twiddling** (提示调整/瞎搞: 随意修改提示以期获得不同结果，缺乏系统性或理论指导).
**提示工程**就是**提示瞎搞**。

Martin: Yeah.
Martin: 是的。

Vashan: You fiddle with a prompt, and the model changes, and the inference, the output changes.
Vashan: 你摆弄一个提示，模型就会改变，**推理**，输出就会改变。

You have hundreds of papers just doing one experiment on the other, changing a prompt this way, that way, and writing their observations.
你有数百篇论文只是在做各种实验，这样那样地改变提示，然后写下它们的观察结果。

As a result, lots of these papers are being written, are being submitted for review.
结果是，许多这样的论文正在被撰写，并提交审查。

Reviews get busy looking at all this kind of **empirical work** (实证工作: 基于观察或实验数据进行的研究), and my personal taste is to first try to understand model it.
评论者忙于审阅所有这类**实证工作**，而我个人的偏好是首先尝试理解并建模它。

Martin: Yeah.
Martin: 是的。

Vashan: And then you can do the other.
Vashan: 然后你可以做其他的。

Martin: Sound like a true **theory guy** (理论家: 专注于发展理论和概念框架，而非实证实验的人).
Martin: 听起来像个真正的**理论家**。

I don't know about this bit twiddling.
我对这种微调不太了解。

Let me ask one more LLM question, which is, are there any **benchmarks** (基准: 用于评估系统性能或能力的标准测试) or **real-world tasks** (实际任务: 在现实世界中执行的功能或活动) that if they occurred, you'd sort of reevaluate and say, "Hey, maybe LLMs are closer to the path to AGI than I thought"?
我再问一个大型语言模型的问题，有没有一些**基准**或**实际任务**，如果它们发生了，你会重新评估并说：“嘿，也许大型语言模型比我想象的更接近通用人工智能的道路”？

If there were any real-world tasks for LLMs or these models, the one domain where you have the most training data is probably coding.
如果大型语言模型或这些模型有任何实际任务，那么拥有最多训练数据的领域可能是编码。

**Coding** (编程: 编写计算机程序的过程) is where you can also have the most structure.
**编程**也是你可以拥有最多结构的地方。

Martin: Yeah.
Martin: 是的。

Vashan: And yet anyone who has used these tools, whether it's Cursor or whatever or Cloud Codes, LLMs continue to hallucinate, continue to generate unreasonable code.
Vashan: 然而，任何使用过这些工具的人，无论是Cursor、Cloud Codes还是其他什么，大型语言模型仍然会产生幻觉，继续生成不合理的代码。

You have to constantly **babysit these models** (看管这些模型: 持续监控和纠正模型输出，以确保其正确性).
你必须不断地**看管这些模型**。

The day an LLM can create a **large software project** (大型软件项目: 复杂且需要大量资源和协调的软件开发工作) without any babysitting is the day I'll be a little bit convinced that it's towards AGI.
当一个大型语言模型能够在没有任何**看管**的情况下创建一个**大型软件项目**时，我才会有点相信它正走向通用人工智能。

But again, I don't think it'll be able to create new science.
但再说一遍，我认为它无法创造新科学。

If it does, that's when I'll be convinced.
如果它能做到，那时我就会信服。

Martin: I think that you can almost take a **definitional approach** (定义性方法: 通过明确概念的定义来解决问题或回答问题) to answer this question, Vash.
Martin: 我认为你可以几乎采取一种**定义性方法**来回答这个问题，Vash。

The problem with these types of questions is, if you have billions of dollars and you can collect whatever data you want, you can make a model do anything you want, right?
这类问题的问题在于，如果你有数十亿美元，并且可以收集你想要的任何数据，你就可以让一个模型做任何你想做的事情，对吗？

At some level, you've got this entire capital structure machinery behind these models.
在某种程度上，这些模型背后有整个资本结构机器。

So you're like, "Oh, it can be good at science."
所以你会说：“哦，它可能擅长科学。”

Well, sure, you put a billion dollars in solving **material science** (材料科学: 研究材料的组成、结构、性质、加工和应用之间关系的学科) and collect all this data, you'll be good at material science or whatever it is.
当然，你投入十亿美元解决**材料科学**问题，并收集所有这些数据，你就会擅长材料科学或其他任何领域。

But there is a definitional answer, which is, and I'm going to draw from your work, which is there is a manifold that's in there based on the data it's been training on.
但有一个定义性的答案，我将借鉴你的工作，那就是里面有一个基于它训练数据的流形。

And then the question is, is if it ever produces something that's off, like a new manifold.
然后问题是，如果它产生了偏离的东西，比如一个新的流形。

So considering the existing trained data, if it ever does that, if it does something that's outside of that distribution, then clearly we're on a path to learning new things, and if not, then everything is just a computational step from what's already known.
所以考虑到现有的训练数据，如果它真的做到了，如果它做了超出那个分布范围的事情，那么显然我们正在走向学习新事物的道路，否则，一切都只是从已知事物进行计算的步骤。

Vashan: Yeah, that's all I mean.
Vashan: 是的，我就是这个意思。

Martin: And I guess the counter to that would be, maybe all humans do is work on their own manifold, and Einstein was lucky or something.
Martin: 我想对此的反驳可能是，也许所有人类所做的只是在他们自己的流形上工作，而爱因斯坦只是运气好之类的。

Vashan: So there are several Einstein examples, and yeah, it's creating this new manifold.
Vashan: 所以有几个爱因斯坦的例子，是的，它正在创造这个新的流形。

I didn't want to use that definitional answer.
我不想用那个定义性的答案。

I thought it might sound too wonky, too mathematical.
我以为那听起来可能太古怪，太数学化。

But essentially, if LLMs really created this new manifold, then I would be convinced.
但本质上，如果大型语言模型真的创造了这个新的流形，那我就会信服。

But so far, they have just gotten better at navigating the existing manifold, the existing training set, which is hugely powerful and is going to change the world.
但到目前为止，它们只是在现有流形、现有训练集上导航得更好了，这已经非常强大，并将改变世界。

I'm not denying that, I think they are extremely good at what they can do, but there's a limit to what they can do.
我不是否认这一点，我认为它们在它们能做的事情上非常出色，但它们能做的事情是有限的。

### 下一步：架构飞跃与Token Probe

Martin: So I have one quick question, what's next for you?
Martin: 我有一个快速问题，你接下来有什么打算？

You've tackled in-context learning, you've got a model for LLMs, and now you've got a generalized model for their **solution space** (解决方案空间: 包含所有可能解决方案的集合).
你已经解决了上下文学习的问题，你有一个大型语言模型的模型，现在你有一个用于其**解决方案空间**的广义模型。

What are you thinking about tackling next?
你接下来打算解决什么？

Vashan: In terms of modeling or academically an LLM?
Vashan: 就建模而言还是学术上研究大型语言模型？

Martin: Academically, yeah, academically, I'm thinking of this.
Martin: 学术上，是的，学术上，我正在思考这个问题。

What is the **architectural leap** (架构飞跃: 在系统设计或技术范式上的重大突破) that is needed to create this new manifold?
创造这个新流形所需的**架构飞跃**是什么？

Martin: Oh, that's exciting.
Martin: 哦，那太令人兴奋了。

Vashan: And how do we use **multimodal data** (多模态数据: 包含多种类型信息（如文本、图像、音频）的数据) to expand that?
Vashan: 我们如何利用**多模态数据**来扩展它？

Martin: Awesome.
Martin: 太棒了。

Come back, talk to us.
回来，和我们聊聊。

Vashan: That's right.
Vashan: 没错。

We'd love that.
我们很乐意。

Even with LLMs, in the paper we say that you can improve the inference by following this low or **minimum entropy path** (最小熵路径: 在决策过程中选择不确定性最低、最确定的路径).
即使是大型语言模型，我们在论文中也提到，你可以通过遵循这种低**熵路径**或**最小熵路径**来改进推理。

So that's a very small step that we are taking.
所以这是我们正在迈出的非常小的一步。

We are building and training models that will do inference based on the **entropic path** (熵路径: 决策或生成过程中，根据熵值高低选择的路径).
我们正在构建和训练将基于**熵路径**进行推理的模型。

Martin: Yeah.
Martin: 是的。

By the way, is **Token Probe** (Token Probe: 一个用于可视化和理解大型语言模型内部工作机制的软件工具) still up?
顺便问一下，**Token Probe**还在运行吗？

Vashan: Token Probe is still up, and you can see actually the, Token Probe is a software that we built, and thanks to Martin and A16Z's generosity, it's running on your servers, and anyone can go and test.
Vashan: **Token Probe**还在运行，你实际上可以看到，Token Probe是我们构建的一个软件，感谢Martin和A16Z的慷慨，它正在你的服务器上运行，任何人都可以去测试。

What we have done there is we actually show the entropy.
我们在那里做的是，我们实际上展示了熵。

Martin: Yeah, it is so enlightening.
Martin: 是的，它非常有启发性。

I recommend anybody listening to this who's interested, actually check out Token.
我建议任何对此感兴趣的听众，都去看看Token。

It shows you the limit.
它向你展示了极限。

Vashan: As you go along, it's remarkable.
Vashan: 随着你的进展，它非常了不起。

So in-context learning, you create your new DSL, and you give it to the prompt, and you can see the confidence rising with each new example, the entropy reducing, and that sort of is a **validation of the model** (模型验证: 评估模型是否准确反映真实世界现象或任务的过程).
所以，在上下文学习中，你创建了新的**领域特定语言**，然后将其作为提示输入，你可以看到随着每个新示例的出现，信心在增加，熵在减少，这在某种程度上是**模型验证**。

You can see it sort of **unfurling** (展开: 逐渐显露或发展) right in front of your eyes.
你可以看到它就在你眼前**展开**。

The Token Probe is running.
Token Probe正在运行。

Thanks, thanks again.
再次感谢。

Martin: Michelle, thanks so much for coming on the podcast.
Martin: Michelle，非常感谢你来参加播客。

This is a great conversation.
这是一次很棒的对话。

Vashan: It was great fun.
Vashan: 非常愉快。

Thank you, thank you so much again.
再次非常感谢。
[Music]
[音乐]