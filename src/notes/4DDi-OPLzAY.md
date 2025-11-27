---
author: Bloomberg Podcasts
date: '2025-09-26'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=4DDi-OPLzAY
speaker: Bloomberg Podcasts
tags:
  - ai-research
  - model-evaluation
  - data-sets
  - open-source-ai
  - reinforcement-learning
  - ai-agents
  - ai-progress
title: 探寻AI下一个重大突破：模型演进、数据挑战与研究者抉择
summary: 本期OddLots播客邀请康奈尔大学AI博士生Jack Morris，深入探讨人工智能研究的前沿。节目讨论了GPT-5等AI模型的增量式进步，以及如何有效评估AI性能的挑战。Morris分享了AI研究的日常工作、信息论在模型训练中的应用，并详细解释了监督学习和强化学习这两种核心方法。此外，他还分析了私有数据在AI发展中的关键作用，以及中美AI实验室在开放源代码和数据获取方面的竞争态势。最后，Morris展望了AI个性化和在线学习的未来方向，并探讨了AI研究者在商业化与科学探索之间的职业选择。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - systems-thinking
  - geopolitics-watch
people:
  - Jack Morris
  - Joe Eisenthal
  - Tracy Aloway
  - Sam Altman
  - Mark Zuckerberg
  - Ilya Sutskever
companies_orgs:
  - Bloomberg
  - OpenAI
  - Anthropic
  - Google DeepMind
  - Meta
  - XAI
  - Amazon
  - Cornell
products_models:
  - GPT-5
  - Perplexity
  - ChatGPT
  - GPT-3
  - Claude
  - SWEBench
  - GPT-2
  - DeepSeek
media_books:
  - OddLots
  - The Social Network
  - International Math Olympiad
status: evergreen
---
### AI模型进展：增量式突破与评估挑战

**Joe:** 大家好，欢迎收听OddLots播客的又一期节目，我是Joe Eisenthal。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello and welcome to another episode of the OddLots podcast. I'm Joe Eisenthal.</p>
</details>

**Tracy:** 我是Tracy Aloway。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm Tracy Aloway.</p>
</details>

**Joe:** Tracy，你用过**GPT-5**（Generative Pre-trained Transformer 5: 一种大型语言模型）很多吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy, have you played around with GPT5 much?</p>
</details>

**Tracy:** 没怎么用过。我一直在用**Perplexity**（困惑度: 衡量语言模型预测文本质量的指标）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not really. I've been perplexity pills.</p>
</details>

**Joe:** 哦，那是你主要用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, that's your main.</p>
</details>

**Tracy:** 是的，目前我主要用那个。不过GPT-5好用吗？我听到了一些褒贬不一的评价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's my main one at the moment. But is it good? I hear mixed things.</p>
</details>

**Joe:** 我用过它，因为我每天都用**ChatGPT**（Chat Generative Pre-trained Transformer: 一种基于大型语言模型的聊天机器人）。但对我来说，它并没有比我一直很看好的**GPT-3**（Generative Pre-trained Transformer 3: 一种大型语言模型，GPT-5的前身）模型明显更好，我可不是个“黑粉”什么的，但它并没有给我那种“哇，这是一个惊人的阶跃函数”的感觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I've used it because I use Chad GPT every day. It does not strike me as like obviously better for my uses than like the 03 models, which I've been very impressed by because, you know, I want to establish I'm no hater or anything like that, but like it did not strike me as like, oh, this is like an amazing.</p>
</details>

**Tracy:** 是的，就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. This is the thing</p>
</details>

**Joe:** 阶跃函数之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">step function or whatever. You know,</p>
</details>

**Tracy:** 感觉那些令人惊叹的突破似乎已经过去了，目前模型上的很多进展都显得非常渐进，尽管人们投入了大量时间和资源。GPT-5唯一让我感到意外的是它会提示我并说：“哦，这是一个很好的问题。您想进一步探讨吗？”但这就像……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it feels like the sort of breakthroughs. awe inspiring breakthroughs are kind of behind us and a lot of the progress on the models feels very incremental at this point even though people are spending a lot of time and resources on doing it. The one thing GPT5 does prompt me and say, "Oh, that's a great question. Would you like to follow up more on that?" But it's like,</p>
</details>

**Joe:** 它会说：“哦，Joe，你真聪明。这个问题问得太好了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">does it say, "Oh, Joe, you're so smart. That's such a smart question."</p>
</details>

**Joe:** 你知道它说了什么吗？我问了一个后续问题，它用“喜欢！”开头回答。然后它说：“喜欢！您想让我调查一下吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what it did say? You know what it did say? I asked a follow-up and it started an answer with, "Love it." And then it said, "Love it. Do you want me to look into that?"</p>
</details>

**Tracy:** 是的，它们很会奉承人，不是吗？实际上，我喜欢Perplexity的一点是它不会奉承你，它只会直接给出答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, they are very flattering, aren't they? Actually, that's one thing I like about Perplexity is it doesn't really flatter you. It just spits out an answer.</p>
</details>

**Joe:** 总之，我对AI有很多疑问，我们经常谈论商业，比如英伟达等等。但我们很少谈论纯粹的研究方面，我认为这很重要，因为很多人会同意，如果技能进步放缓，或者遇到了瓶颈，那可能会改变一些商业模式的计算等等。所以我觉得我们需要了解AI的最新技术和科学进展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, anyway, there's so many questions I have about AI and we talk about the business a fair amount and a Nvidia and all that stuff. We actually don't really talk that much about the pure research side as much but it's pretty important I think because I think a lot of people would agree that if the skills are like slowing down or if there were a wall or something like that that might change some of these business model calculations etc. So I think it's good we need to get an update on just sort of the the state-of-the-art the science of AI.</p>
</details>

**Tracy:** 是的。另外，能了解AI模型可能实现什么，以及人们正在研究什么，努力的方向是什么，也会很好。比如，主要关注价格吗？主要关注输出吗？主要关注能源使用吗？所有这些方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Also, it would be nice just to understand what's possible in terms of the AI models and what people are actually researching, what they're working towards. Like, is it mostly about price? Is it mostly about the output? Is it mostly about energy use? All those things.</p>
</details>

**Joe:** 所有这些方面。嗯，我很高兴地说，我们请到了一位完美的嘉宾，一位AI研究员。我们将与Jack Morris对话。他目前即将完成在康奈尔大学的AI博士学位。他曾与Meta有专业关联，所以想必他银行里已经有一亿美元的薪酬包了。不，他摇了摇头，他没有。呃，开个玩笑。但是，Jack，非常感谢你来OddLots。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All those things. Well, I'm really excited to say we have the perfect guest, someone who is an AI researcher. We're going to be speaking with Jack Morris. He's currently about to finish his PhD at Cornell in AI. He's been affiliated with Meta Professionally, so presumably he already has a hund00 million pay package in the bank. No, he's shaking his head. He's not. Uh, that's a joke. But, uh, Jack, thank you so much for, uh, coming on OddLots.</p>
</details>

**Jack Morris:** 是的，谢谢邀请我。这会很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, thanks for having me. This is going to be fun.</p>
</details>

**Joe:** 你能给我解释一下你在做什么吗？因为我不太明白人们在大学里学习，同时又在公司工作是怎么回事，这在世界上很多地方都不是这样运作的，对吧？人们拿到学位后就找工作。我的印象是，在AI领域，行业和教育之间的隶属关系有点模糊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you explain to me like what you're up to because I don't really understand how it works where people are they're at a university and they're also at a company and this isn't how it works in much of the world, right? People get their degree and then they get a job. I get the impression that in the AI world it's a little fuzzier in terms of one's affiliations between industry and education stuff like that.</p>
</details>

**Jack Morris:** 是的，这确实是事实。我想这可能正在逐渐消失，但我可以告诉你我的情况。所以，有一种公共研究领域和一种私人研究领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's definitely true. I think it might be on the way out, but I can tell you about my situation. So, there's kind of a public research world and like a private research world.</p>
</details>

**Joe:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Jack Morris:** 所有的学术机构都做公共研究，而像OpenAI、Anthropic、Google DeepMind这样的AI实验室，它们本质上做的是私人研究，它们内部有专门的人员进行实验并更多地了解自己的系统，但它们不发布任何东西，也不分享任何知识。所以，现在攻读博士学位的一个很酷的地方是你可以做研究，写出来，然后公开发布，比如放到网上。我在推特上谈论它。我可以和你谈论它。还有一些地方仍然会……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all the academic institutions do public research and the AI labs like OpenAI, Anthropic, Google DeepMind, they essentially do private research where they have these people in house that are running experiments and learning more about their systems, but they don't publish anything or share any of their knowledge. And so a cool thing about getting your PhD right now is you can do research, write about it, and then publicize it, like put it online. I tweet about it. I kind of like can talk to you about it. And there's a few places left that'll still kind of</p>
</details>

**Joe:** 一旦你进入公司内部，我们就再也听不到你的消息了。接受条款之类的，对吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the moment you go in house, we're never going to hear from you again. Acceptance or something like that. Right.</p>
</details>

**Jack Morris:** 是的。我会确保我的合同里有一条条款，我仍然可以和Joe以及Tracy交流。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I'll make sure they have a clause in my contract that I can still talk to Joe and Tracy. Okay.</p>
</details>

**Joe:** OddLots条款。是的。那很重要。那么，当我们说AI研究或AI研究员时，这到底意味着什么？AI模型不能自己研究自己吗？就让它们自己做吧。是的，这实际上是一个非常聪明的想法，而且人们对此非常担忧。比如，如果我们达到AI可以自我改进的程度……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The odds clause. Yes. That would be important. So when we say AI research or an AI researcher, what exactly does that entail? Can't the AI models just research themselves? Just let them do it. Yeah, that's actually a very smart idea and like people are really worried about that actually. Like if we get to the point where the AI can improve itself into</p>
</details>

**Jack Morris:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Joe:** 那么它就会变得更聪明，然后再次自我改进，最终变成这种指数级的进步，最终导致……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then it sort of gets smarter and then it improves himself again and it ends up being this kind of exponential improvement that ends up with</p>
</details>

**Jack Morris:** 我们所有人的灭亡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">all of our demise.</p>
</details>

**Jack Morris:** 但我认为现在还没有达到那个程度。也许你可以和ChatGPT谈谈。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">But I think right now it's not quite there yet. Like maybe you can talk to Chad GBT.</p>
</details>

**Tracy:** 这是个好消息，Joe。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's good news, Joe.</p>
</details>

**Jack Morris:** 是的。对我来说也是个好消息，因为这意味着我仍然可以获得学位并找到一份有报酬的工作。但我认为它仍然很有帮助，我们仍然需要人类来进行这些改进。至于日常工作具体是什么样子，我认为它真的因人而异。比如，有些人致力于让模型运行得更快，或者让运行模型的硬件运行得更快、更高效。还有人致力于数据方面，比如我们应该用更多的编程问题、更多的教科书还是更多的Reddit帖子来训练模型，什么能最好地训练模型。还有更多的人致力于堆栈的不同领域，比如训练算法。我有点自己的小众领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And good news for me, too, because it means I can still get a degree and be gainfully employed. But I think it's it's still helpful, but we still need like humans to make these improvements. And in terms of what the actual day-to-day work looks like, I think it really varies. Like there are some people working on trying to make the models run faster or trying to make the hardware that runs the models run faster, more efficiently. There's people that try to work on the data like what should we train on more coding problems or more textbooks or more Reddit posts what works best to make the models and then there's a lot more people working on different areas of the stack like training algorithms. I kind of have my own little niche.</p>
</details>

**Joe:** 你的小众领域是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's your niche?</p>
</details>

**Jack Morris:** 20世纪有一个古老的信息论领域，他们谈论比特，比如零或一就是一个比特，你可以把它们加起来，变成千字节和兆字节。所以我一直在思考这在ChatGPT世界中意味着什么。如果你用一定数量的比特来训练一个模型，它实际上能学到多少比特？你能不能通过观察模型，比如模型的某个切片，来计算它有多少比特之类的。所以，也许最简单的解释是，如果你出于某种不可思议的原因，需要把ChatGPT当作一个闪存盘，你有一组特定的数据，它必须记住所有这些数据。它实际上能存储多少数据？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's this old field of information theory from like the 20th century where they talk about bits like a zero or a one is a bit and you can add them up and have kilobytes and megabytes. And so I've been trying to think about what that means in like the chat GBT world. If you train a model on a certain number of bits, how many bits does it actually learn? And like can you look at the model and figure out like if you have one slice of the model, how many bits that is and stuff like that. So maybe the easiest way to explain is if you had for some godforsaken reason to use chat GBT as like a flash drive like you you had a certain set of data and it had to memorize all that data. Like how much data could it actually store?</p>
</details>

**Jack Morris:** 这就是我一直在研究的领域。然后，一旦你到了那里，你就会意识到我们可以做这个，或者也许下学期如果有时间，我们可以尝试另一个东西。所以它会分支出来，有很多小问题可以尝试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the kind of area I've been working in. And then you know once you're there you kind of realize we could do this or maybe next semester if we have time we could try this other thing. And so there's it kind of branches out and there's a lot of little problems that you can try.</p>
</details>

**Joe:** 我提到了GPT-5。我觉得它还不错。它并没有让我觉得……你知道，因为实际上我第一次使用ChatGPT时，和大多数人一样，我真的被震撼了。然后，我对GPT-3模型也相当震撼，部分原因在于它们在文档搜索方面的表现，在很多方面都优于谷歌搜索，而且还能很好地组织大量非结构化数据等等。但GPT-5并没有给我那种“天哪，哇”的时刻。这就像，我们如何衡量AI是否一直在进步？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mentioned GPT5. It seems fine to me. It does not strike me as like you know because actually so the first time I used Chad GBT I was genuinely blown away like most people. And then actually I was pretty blown away by the 03 models in part because of how well they could do document search and it superior to Google search in many respects and also just the organization of a lot of unstructured data etc. Like I didn't have like some oh my god wow moment of with GPT5 it's like seems like how do we measure whether AI is getting better all the time?</p>
</details>

**Jack Morris:** 是的，这是一个巨大的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah that's a that's a huge question.</p>
</details>

**Joe:** 嗯，让我问你，好吧，让我问你一个更具体的问题。那些以测试AI模型为工作或职能的实体，它们正式的测试流程是怎样的，以对AI模型的质量进行排名？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let me ask you, okay, let me ask you actually a more specific question. How do the entities that test AI models as their job or as their function? What is the formal testing process look like to rank the quality of AI models?</p>
</details>

**Jack Morris:** 好的。是的，这更容易处理。我们可以从那里开始，然后再谈论GPT-3和GPT-5。所以，人们主要有两种方法进行这种模型评估。主要的一种是仅仅通过在不同的数据集上测试它们。例如，有一个叫做**SWEBench**（Software Engineering Benchmark: 软件工程基准测试集）的数据集，它包含了一堆与软件工程相关的编程问题，所有这些问题都有人类编写的解决方案和测试。所以你可以问GPT-5能否为这个问题编写代码，然后运行测试，看看它是否正确。目前模型在这方面仍然相当糟糕。我认为它们只能完成大约一半的问题。这些问题非常难，对于专业的软件工程师来说，可能需要一整天的工作。但是当一个新模型发布时，他们可以说：“哦，看，我们实际上在SWEBench上获得了更高的分数。”像这样的数据集有很多。所以当GPT-5发布时，他们说，你知道的，它在这些类型的编程测试中表现更好。OpenAI特别倡导的一个重要领域是数学。他们参加了**国际数学奥林匹克竞赛**（International Math Olympiad: 一项面向高中生的国际数学竞赛）。他们说GPT-5的得分基本上达到了最优秀高中数学家的水平，这很酷。但你提出了一个很好的问题，即这实际上如何映射到现实世界的使用？我认为这是一个非常困难的问题，人们还没有找到答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Yeah, that's that's more tractable. We can we can start there and then we can talk about 03 and GD5. So, there's essentially two ways people do this kind of model evaluation. The main one is just by testing them on different data sets. So for example, there's this data set called SWEBench that's a bunch of software engineering related coding problems and they all have a human written solution and tests and so you can ask GBD5 can you write the code for this and then run the test and see if it's right. And still the models are pretty bad at that. I think they can do about half of them. They're very hard. They're like entire days of work for professional software engineers. But when a new model comes out, they can say, "Oh, look, we actually got a higher score on Sweetbench." And there's a ton of different data sets like that. So when GBT5 comes out, they say, you know, it's better at these types of coding tests. And a big one that specifically OpenAI has been advocating for is math. Like they did the International Math Olympiad. And they said essentially GBT5 scored at the level of the best high school mathematicians, which is pretty cool. But you raised a good question of how does that actually map to real world usage? And I think this is like a really hard problem that people still haven't figured out.</p>
</details>

**Joe:** 有没有人尝试捕捉那种“通才”的感觉，我猜在AI模型方面？其中一个测试是让它，我不知道，想出一个愚蠢的五行打油诗之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does anyone try to capture that sort of like Janice Seiqua I guess when it comes to AI models? Is one of the tests asking it to I don't know come up with a stupid limmerick or something.</p>
</details>

**Jack Morris:** 是的，有很多这样的测试。有一些创意写作基准测试和一些与诗歌相关的测试。但我认为你指出了一件有趣的事情，例如我主要使用Anthropic的**Claude**（一种大型语言模型）。我认为Claude确实有一些独特之处，很难描述。它与你交流的方式以及它看待自己的方式……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there are a lot of tests like that. There's some creative writing benchmarks and some poetry related ones. But I think you point out something interesting that for example I mostly use Claude for anthropic and I think Claude does have this something to it that's like a little bit different and it's very difficult to characterize. It's just sort of the way it speaks to you and the way it thinks of itself is</p>
</details>

**Jack Morris:** 我更喜欢它，但我不知道如何设计一个真正能捕捉到这种特性的数据集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I like it a lot better but I don't know how you would design like a data set that can really capture that.</p>
</details>

**Jack Morris:** 他们进行评估的第二种方式是使用**ELO等级分**（ELO scores: 一种衡量棋手相对技能水平的系统），就像国际象棋一样。例如，他们让两个模型写一首五行打油诗，然后让人类对哪个更好进行排名，他们会为模型建立一个ELO排名阶梯。所以我认为目前Claude、GPT-5或者Google模型在这个ELO阶梯上名列前茅。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second way they do the evaluation is by they call it's ELO scores like in chess. So they for example ask the two models to write a limmerick and then they have humans rank which one is better and they make this kind of ladder of ELO rankings for models. So I think right now Claude or GBT5 or maybe the Google model is top on this ELO ladder.</p>
</details>

**Joe:** 那个在电影《社交网络》（The Social Network）中因马克·扎克伯格（Mark Zuckerberg）用来评价他同事的吸引力而闻名的算法。它仍然是计算机评估的主力模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The algorithm made famous in the social network that Mark Zuckerberg used to rate the hotness of his uh colleagues. Still the workhorse model for comp evaluation.</p>
</details>

**Tracy:** Joe，这真是一个不错的冷知识。非常好。不予置评。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's some good trivia, Joe. Very good. And no comment.</p>
</details>

**Joe:** 嗯，我假设在硬性数字评估方面，人们也会根据数据使用量、能源消耗、速度等方面对这些模型进行排名，对吧？速度显然是一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I assume just on the hard number evaluation, people are also ranking these on data usage, energy, that sort of thing as well, right? Speed. Speed would be an obvious one.</p>
</details>

**Jack Morris:** 毫无疑问。AI公司喜欢把价格作为一个衡量标准，这有点意思，因为幕后有很多事情发生，包括某种程度上……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Definitely. The AI companies like to use price as a metric, which is kind of interesting because there's a lot that goes on behind the scenes, including just sort of like</p>
</details>

**Jack Morris:** 免费的资金压低了价格。但他们也确实对速度进行基准测试。我认为你提出的一个观点很好，那就是基准测试可能会相当误导人。例如，最近有许多来自不同中国AI实验室的开源模型，在某些基准测试中得分非常非常高，但人们普遍认为它们在实际使用中并没有那么好，原因不明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">free money that drives the prices down. But they also do benchmark speed. And I think you make a good point that the benchmarks can be pretty misleading. Like for example, there's a bunch of recent open- source models that came from different Chinese AI labs that have really really high scores on certain benchmarks, but people kind of think they're not as good for real world usage for whatever reason.</p>
</details>

**Joe:** 我见过人们谈论这个问题。测试或评估AI的部分问题是不是很多这些问题在现实世界中已经存在了？对吧？你经常看到这种情况，人们总是发现，这里有一个AI模型在数学奥林匹克竞赛中表现惊人，但它却被“一磅钢和两磅羽毛哪个更重”这样的问题难倒了，它会说这是一个陷阱问题，一磅钢和两磅羽毛重量相同，这显然说明它在某种程度上被训练成能识别这些钢和羽毛之类的东西，我忘了是不是钢，但它也显然无法判断一和二哪个更大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've seen people talk about this. Isn't part of the problem with testing AI or evaluating AI that a lot of these problems exist in the real world already? Right? You see this a lot and people are always finding this which is that here is an AI model that is amazing at math on the math olympiad and yet it gets tripped up by questions like which is heavier a pound of steel or two pounds of feathers and it'll say that's a trick question a pound of steel weighs the same as two pounds of feathers which is clearly like it was clearly then been trained in some sense to recognize these steel versus feathers thing or whatever it is I forget if it's steel but it als also clearly can't measure whether one or two is bigger.</p>
</details>

**Jack Morris:** 是的，这是一个非常好的例子。我认为他们成功地将这类问题纳入了更多的训练数据轮次中，所以每次新模型发布时，他们都会修补之前模型中出现的小漏洞。所以你指出的是，他们可能最初从经典的谜语开始，比如“一磅砖头和一磅羽毛哪个重”，它们是相等的，但模型却答错了，所以他们又添加了一些内容，这似乎是一种非常高效的实现智能的方式，比如“哦，是的，我们应该把那个也包括进去。哦，是的，我们必须把那个技巧也包括进去。哦，是的，我们必须把每一个小细节都包括进去。”这对我来说，并不意味着它正在朝着我们称之为人类智能的东西发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's a really good example. I think they kind of successfully include these kinds of things in more rounds of training data and so every time a new model comes out they kind of patch little holes that appeared in the previous models. So you're pointing to this like they probably started with the classic riddle that's like a pound of bricks or a pound of feathers and they're equal but then like the models got that wrong and so they added to some part seem like a very efficient way to achieve intelligence like oh yeah we should have included that. Oh yeah we got to include that trick. Oh yeah we got to have every little thing keep like going that does not speak to me of a line towards something that we would call anything resembling human intelligence.</p>
</details>

**Joe:** 我完全同意。我认为一个反例是，人们长期以来对自动驾驶汽车也是这么说的。大家对它们兴奋了很长时间，然后大约八年前它们就没怎么起作用了，有一段时间他们说：“哦，模型不能识别绿色锥筒。我们出去拍绿色锥筒的视频。”是的，它们不能识别雪球。所以你是说最终你只需要修补你的权重和理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I definitely agree. I I think one counter example is people said this for a long time about self-driving cars. Like everyone was really excited about them for a long time and then they kind of didn't really work like eight or so years ago and there was this period where they were saying, "Oh, the models can't do green cones. We're going out there trying to take videos of green cones and yeah, they can't do snowball." So you're saying eventually you can just patch your weight and understanding.</p>
</details>

**Jack Morris:** 我是说对它们来说是有效的，所以这可能是可行的。但在语言模型的情况下，发生了一些更有趣的事情，因为我们现在有两种学习方式。如果你们准备好了，我们可以深入探讨一些技术细节，我认为这会给你们一些启发。所以，本质上有两种方法可以教机器从数据中学习。一种叫做**监督学习**（supervised learning: 一种机器学习方法，通过标记数据进行训练），计算机将复制你所做的，这基本上就是我们现在讨论的。另一种叫做**强化学习**（reinforcement learning: 一种机器学习方法，通过奖励信号进行训练），计算机只是做一些事情，然后如果它做得好，你就会给它一个奖励。所以很长一段时间，比如最初的ChatGPT，主要是通过监督学习训练的，它只会复制互联网上的所有文本。所以它能做到的最好程度就是很好地模仿Reddit帖子。强化学习有一点点，但人们不知道如何正确地做。然后你提到了GPT-3模型，它在某些方面是一个巨大的飞跃。它让模型在数学方面，在某些事情上变得更好。他们做到这一点的方式实际上是通过强化学习。所以他们找到了一种方法，让模型思考一段时间，然后当它最终得到答案时，给它一个奖励。这有点吓人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm saying that it worked for them and so it might be possible. But in the case of language models, there's something a little more interesting happening because we now have two ways to learn. If you guys are ready, we could we could get into something a little technical which I think gives you some insight. So there's essentially two ways you can teach machines to learn from data. One is called supervised learning where the computer will copy what you did, which is like basically what we're talking about now. And the other is called reinforcement learning where the computer just does something and then you give it a reward if it does something well. And so for a long time, like the original chat GBT was mostly just trained with supervised learning, like it would just copy the text from all of the internet. And so the best it could ever do is emulate Reddit posts very well. And there was a tiny bit of reinforcement learning, but people didn't know how to do it right. And then you mentioned this 03 model, which is kind of in some ways like a big jump. Like it made the models much better at math, much better at certain things. And the way they did that is actually through reinforcement learning. So they found out a way to kind of like let the model think for a while and then give it a reward when it like gets the answer at the end. It's kind of scary.</p>
</details>

**Joe:** 是的。当你说给它奖励时，是像拿一块饼干吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. When you say give it a reward, is it like take a cookie</p>
</details>

**Tracy:** 给机器人发工资？她对此很兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">paying robots? So she's excited about that.</p>
</details>

**Joe:** 不，真的，奖励是什么？你只是告诉它做得好，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, genuinely like what is the reward? You just tell it it did a good job, right?</p>
</details>

**Jack Morris:** 你只是给它一个更高的数字，这会让它“开心”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you just give it like a higher number and that makes it happy.</p>
</details>

**Joe:** 好的。当我们要给它纸杯蛋糕之类的东西时，我就会有点担心，比如“给你，做得好。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. I I I'd get a little bit worried when we're like giving it cupcakes or something like here you go, good job.</p>
</details>

### AI进步的不可预测性与代理模型的挑战

**Tracy:** 回到开场白，我们当时谈到AI模型的很多进展感觉有点渐进。我猜很难判断这是否只是个人偏见，因为我们现在已经习惯了它们，那种“哇”的时刻已经过去了。但对你来说，在改进方面感觉如何？我们看到改进周期是在加速还是减速？目前来看，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just going back to the intro, you know, we were talking about how it feels like a lot of the progress on AI models is a little bit more incremental. And I guess it's hard to tell whether that's just personal bias because now we're used to them and the sort of wow moment has passed, but what does it feel like to you in terms of improvements? Are we seeing the improvement cycle accelerate or decelerate? At this point,</p>
</details>

**Jack Morris:** 我认为这有点像市场，总是先加速一段时间，然后又感觉放缓了，而且进展总是不在你预期的领域。举个例子，人们真的认为今年是助手能够像真正的助手一样行动的一年，也就是“代理之年”。人们甚至创造了这个词，我想，就是“代理之年”。但出于某种原因，它并没有发生。也许在接下来的三个月会发生，但目前你使用的**AI代理**（AI agents: 能够自主执行任务的人工智能系统）仍然相当糟糕。但它们在竞技数学方面确实进步了很多。比如现在它们可以完成以前做不到的世界级证明。所以这几乎是不可预测的，AI接下来会征服哪些领域。但感觉进展仍在继续。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's kind of like the market where it's like always it gets faster for a little while and then it feels like things have slowed down and the progress is never quite in the areas that you expect. As one example, people really thought this year was the year when the assistants would start being able to act like actual assistants like the year of agents. People actually coined that term, I think, like the year of agents. And it really it didn't happen for whatever reason. Maybe it will in the next three months, but the agents are still pretty bad, the ones that you can use. But they did get way better at competitive math. Like now they can do these like worldclass proofs that they couldn't do before. So it's almost unpredictable like which areas the AI will kind of conquer next. But it does feel like progress is continuing.</p>
</details>

**Joe:** 实际上，代理模型发生了什么？我从来没有成功的代理体验。即使是像“列出所有过去的OddLots嘉宾”这样的基本任务。哦，是的。然后把它放到一个文件里之类的，OddLots有一个RSS订阅源。这应该非常简单，但总会发生一些事情，或者它会变得懒惰。它会说“这里有15个”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, what happened with agents? I have I've never had a successful agent experience. Even basic things like come up with a list of every past OddLots guest. Oh yeah. And put it in a file or something like that which is there's an RSS feed that exists for oddlots. This should be really straightforward all around and then something will happen or it'll get lazy. It'll like here's 15 and</p>
</details>

**Joe:** 到底发生了什么？思想领袖们喜欢这些东西。他们喜欢谈论“代理之年”。那么代理模型到底发生了什么？也许它们会达到那个水平，但阻碍是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what is actually and this is thought leaders love this stuff. They love talking about the year of agent. So what actually happened with agents? Maybe they'll get there but what do you what is the roadblock there?</p>
</details>

**Jack Morris:** 我认为没有概念上的障碍。也就是说，没有理由不能为此收集数据，并通过监督学习或强化学习来训练它们。只是还没有发生。所以我认为也许在幕后，这个问题比人们想象的要难。比如，从所有这些场景中获取数据真的很难。我听说过一些故事，有人在旧金山创办了这些小公司，他们为AI实验室构建这些微小的环境，用于代理模型的强化学习。例如，为了做日历，他们会构建一个小的日历应用程序，但让它具有奖励机制，这样你就可以进行强化学习，他们可以以数十万美元的价格出售。所以我认为进展正在幕后进行，有一个完整的生态系统围绕着它建立起来。它只是还没有真正体现在我们使用的产品中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think there's any conceptual roadblock. Like there's no reason why you couldn't collect data for that and train them either in a supervised way or using reinforcement learning. It just hasn't happened yet. So I think maybe behind the scenes it turned out that the problem was harder than people thought. Like getting data from all those scenarios is really hard. And there have been some stories from like people that I've heard of that found these little companies in San Francisco and they build these tiny environments for the AI labs to do reinforcement learning on for agents. Like for example doing a calendar they'll build like a little calendar app but make it have rewards so you can do reinforcement learning and they can just sell that for like hundreds of thousands of dollars. So I think the progress is ongoing behind the scenes like there's a whole ecosystem built around it. it just hasn't really manifested in the products that we use.</p>
</details>

**Tracy:** 我本来想问，实际模型的开发，也就是“思考”部分，与让它们与其他应用程序无缝衔接的难度相比，有多少？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was going to ask how much of the difficulty is you know the actual development of the models the thinking part versus just getting them to plug in seamlessly with other applications.</p>
</details>

**Jack Morris:** 是的，我认为第二件事可能是最大的时间障碍，也就是说，弄清楚你需要什么数据并正确收集它，以及实际用这些数据训练模型，需要很长时间。但与此同时，也有像我这样的人，他们正在努力研究更好的概念框架来训练模型。所以回到GPT-3的例子，在ChatGPT上进行强化学习，这对我来说是一个巨大的突破。我们以前不知道如何做到这一点。它开启了各种训练模型的大门和方法。所以即使你可能不认为那个模型比前一个模型好那么多，但它似乎会在未来给我们带来巨大的改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think I think the second thing is probably the biggest barrier in terms of time like it just takes a really long time to figure out what data you need and collect it properly and actually train the models on that data. But at the same time, there are people like me who are trying to work on better like conceptual frameworks for training the models. So to go back to the the 03 example, doing reinforcement learning on chat GBT like that seems to me like a huge breakthrough. Like we didn't know how to do that before. It unlocks all sorts of doors and ways to train the models. So even if maybe you don't think that model was that much better than the previous one, it seems like it will give us huge improvements in the future.</p>
</details>

### 数据集、开源与中美AI竞争

**Joe:** 所以，你在开场白中提到，你可能会进入一个前沿AI实验室工作，然后我们再也听不到你的消息了。或者你只会发一些神秘的推文，比如“哦，你不知道会发生什么”或者“哦，一切都完了”之类的。你知道，他们发推文的方式很烦人。这有可能。跟我们谈谈为什么不从事开源项目？当然，这也是人们谈论**DeepSeek**（深度搜索: 一家中国AI实验室及其开发的开源模型）和许多中国模型的原因，美国正在与它们竞争。其中很多都是开源的，你大概可以一遍又一遍地来OddLots。为什么？为什么最优秀、最聪明的人会选择从事闭源的前沿模型？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you mentioned at the intro that it's possible, hopefully you'll get a close, but you might end up in a situation which you go to work for some Frontier AI lab and we never hear from you again. Or you just post cryptic tweets like, "Oh, you have no idea what's coming or oh, it's going to be so over or whatever." You know, it's very annoying the way they Yeah. Yeah. It's very annoying the way they all tweet. It's possible. Talk to us about like why not work on an open source project? And this is of course what people talk about deepseek and a lot of the Chinese models that the US competes with. A lot of those are open- source presumably you could keep coming on oddls over and over again. Why? Like what is even the case for the best and the brightest to work on closed sourced frontier models?</p>
</details>

**Jack Morris:** 是的，这是一个非常困难的问题。我个人在做决定时也为此挣扎过。我最初的想法是，哦，我很想成为一名教授，指导年轻学生，并启动一整套这样的想法，开始研究与我刚才谈论的那些问题相似或相关的问题。我仍然认为那会很有趣，但在康奈尔大学我们能做的事情和在OpenAI能做的事情之间存在巨大差距。比如，他们拥有疯狂的基础设施，可以非常容易地训练模型，而且拥有大量非常好的数据。所以我认为随着这种差距的扩大，我感觉我们所做的大部分工作就像是在设计这些玩具场景，我们可以在其中研究有趣的事情，但我感觉与人类的真正进步有点脱节。你知道，如果你真的认为这是我们这个时代最大的问题，我不想说它像曼哈顿计划，但它更像是在60年代试图登月。太空竞赛，这有点像在这些不同的私人实验室中进行的太空竞赛。你想成为其中的一部分。那里有疯狂的能量。它对社会的未来有巨大的影响。所以我认为我确实有兴趣参与其中。我最大的问题是，如果你认为强化学习是最近一次重大的科学突破，比如GPT-1然后是GPT-3，那么接下来会是什么？然后，那实际上会在哪里发生？这就是我目前正在思考的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that it's a really hard question. Like I've I've struggled with this in my own personal decision- making. I was originally thinking, oh, I'd love to become a professor and mentor younger students and get a whole like group of these ideas going and start working on similar related problems to the stuff I was talking about. And I still think that would be fun, but there's a big gap in terms of the things we can do at Cornell and the things that you can do at OpenAI. like they just have like crazy infrastructure for training models really easily and over and a ton of really good data and so I think as that gap has widened I felt like a lot of what we're doing is like kind of devising these toy scenarios where we can study interesting things but I feel a bit disconnected from the real like progress of humanity you know like if you really agree that this is like the biggest problem of our time I don't want to say it's like the Manhattan project, but like what it's was more like trying to go to the moon in the '60s. The space race, it's kind of like a space race going on in these different private labs. You want to be a part of it. Like there's crazy energy in that. It has huge implications for the future of society. So I think I am interested in participating in that. My big question is like if you think that the reinforcement learning thing was the most recent big scientific breakthrough like 01 and then 03, what's next? And then like where will that actually be happening? That's kind of what I'm thinking about right now. And</p>
</details>

**Joe:** 就在数据点上，我读了你那篇很棒的Substack文章，你认为从给定的数据集中能得到的东西可能有一个上限，在某个时候，训练开始看起来非常相似，对吧？数据成为差异化因素。数据集对AI研究有多重要？我猜，你是如何找到真正酷的数据集的，还剩下什么？因为我感觉，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">just on the data point, I was reading your excellent Substack and you argued that there's probably an upper bound to what you can get out of a given data set and at some point like the training starts to look pretty similar, right? And the data becomes the differentiating factor. How important are data sets to AI research? And I guess like how do you go about finding really cool ones and what's left? Because I feel like,</p>
</details>

**Jack Morris:** 你知道，用太空竞赛的比喻，每个人都在这方面跑得飞快。感觉所有数据集现在都应该被探索过了，但我猜还没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, using the space race analogy, everyone has been running so fast on this. It feels like all the data sets must have been explored by now, but I guess they haven't.</p>
</details>

**Jack Morris:** 是的。是的。我认为这确实触及了目前所有这些不同实验室正在努力解决的核心问题。所以我认为你说的很对，我们拥有的所有公共数据集基本上都用于训练GPT-3或GPT-5之类的模型。如果有一个非常好的网站应该被抓取并下载到模型中，那它很可能已经被使用了。但显然，私有数据的数量比公共数据大得多。我的意思是，你们都在Bloomberg工作，所以你们可能对此非常熟悉。但如果你想想现有的不同AI实验室，它们现在确实有不同数据相关的模式。比如XAI，他们拥有所有Twitter数据，这些数据基本上不可能从其他地方获得。ChatGPT现在拥有所有用户与ChatGPT的对话，这些对话非常有用。Claude拥有大量其他人没有的编程数据。Google拥有YouTube，有些人认为这可能是制作真正好模型的下一个来源。而这些东西，至少在今天的模型中，并没有真正被包含进去，或者说包含得不多。这非常重要，一旦一个实验室建立某种基础，无论是Anthropic的编码，还是Cursor的编码，即使它们不是核心实验室等等，它们都会成为自己数据的来源，而这些数据是其他任何人都无法获得的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. I think this is really getting to the heart of what people are trying to figure out right now in all these different labs. So I think you're pretty much right that all of the public data sets we have are pretty much used to train 03 or GPT5 or whatever. If there is a really good website that should have been scraped and downloaded into the model, it should probably be used. But there apparently is a much larger amount of private data than public data. I mean you all work for Bloomberg, so I'm you're probably intimately familiar with this. But if you think about the different AI labs that exist, they actually now do kind of have different data related modes. Like XAI, they have all of the Twitter data that's basically impossible to get elsewhere. ChatGBT now has all of the user conversations with ChatGBT, which are really useful. Claude has a ton of coding data that other people don't have. Google has YouTube, which some people think might be like the next source of making really good models. And none of those things are really included, at least not much, in in today's models. This is really important like once a lab builds some sort of base whether it's anthropic encoding or maybe cursor encoding even though they're not like a core lab etc. like they become a source of their own data that literally nobody else has.</p>
</details>

**Joe:** 是的，实际上Cursor就是一个很好的例子。他们非常技术化。他们有非常聪明的人。他们规模很小。所以他们还没有完全扩大规模，至少在人数方面是这样。但我每次玩这个的时候，我都会想，比如当我玩这个的时候，我总是会想“这个好，那个不好”，我一直在教他们的模型变得更好。对吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah actually cursor is a great example. So they are very technical. They have really smart people. They're very small. So they haven't quite scaled to at least in terms of the number of people. But I think about this like every time I was like like when I've played with this like this is good, this is bad, I'm constantly teaching their model to get better. Right.</p>
</details>

**Jack Morris:** 对。对。对。他们面临的问题是他们拥有数据，他们只需要采用正确的算法并扩大规模来训练模型，使其像Claude一样好。但这实际上看起来比其他没有数据却想训练好模型的公司更可行。即使他们知道如何做，也似乎非常困难。AI研究人员与AI生态系统的其他部分，比如芯片制造商、云服务提供商等，合作或交流的紧密程度如何？有很多对话吗？还是不太多？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. Right. Right. They're in a problem where they have the data, they just have to take the right algorithms and scale it up to train the model to be as good as Claude is. But that actually seems a lot more feasible than other companies that have no data and want to train good models. Even if they know how, it seems very difficult. M how closely are AI researchers working or talking to I guess other parts of the AI ecosystem. So you know chip makers maybe cloud providers that sort of thing. Is there a lot of dialogue or not really?</p>
</details>

**Jack Morris:** 我认为有些人一直与芯片制造商保持联系。比如，有一个很大的社区，你知道AI模型都运行在**GPU**（Graphics Processing Unit: 图形处理器，用于加速AI计算）上，有很多人非常擅长编写快速的GPU代码，这叫做**内核**（Kernels: 在GPU上运行的并行计算程序）。所有这些从事内核工作的人都一直与芯片制造商交流。比如亚马逊正在制造自己的芯片。谷歌也有自己的芯片。现在所有的**超大规模云服务商**（Hyperscalers: 提供大规模云计算基础设施的公司）都在制造芯片。我认为他们都在努力与那些实际编写在芯片上运行的快速代码的人交流，以弄清楚他们称之为硬件软件协同设计的东西。每个人都在一起努力，试图找出设计下一代GPU的最佳方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think certain people talk all the time to the chip makers. Like there's a big community of people you know the AI models all run on GPUs and there are a lot of people that are getting really good at writing fast GPU code. It's called kernels. And all those people who work on kernels talk to the chip makers all the time. Like Amazon's making their own chips. Google has their own chip. Now all the hyperscalers are making chips. And I think they're all trying to talk to the people that actually write the fast code that runs on chips to figure out I think they call it hardware software code design. Like everyone's kind of getting together and trying to figure out what the best way is to design the next round of GPUs.</p>
</details>

**Joe:** 所以你提到了谷歌可能拥有优势，因为它拥有YouTube，那里有海量数据。所以，一种获取YouTube数据的方式是直接成为谷歌并拥有它。但另一种可能获取YouTube数据的方式是在中国运营，那里没有关于这类事情的法律，或者不受美国版权法的约束，然后直接抓取所有数据。再次，由于大多数中国AI实验室都是开源的，这难道不是中国实验室的巨大优势吗？它们真的不需要，嘿，OpenAI被《纽约时报》起诉，所有这些DeepSeek都不必处理所有这些麻烦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you mentioned Okay. Google might have an advantage because it owns YouTube and there's just tons of obviously just tons of data in there. So, one way you could get access to the YouTube data is to literally be Google and own it. But another way that maybe you could get access to YouTube data is operate in China where there are no laws about this type of thing or no there's not beholden to US copyright and just sort of scrape it all. Again, since most of the Chinese AI labs are open source, why isn't this just a huge advantage for the Chinese labs that they're really not going to be, hey, open AI, they get sued by the New York Times, all these Deep Seek is isn't having to deal with all these headaches.</p>
</details>

**Jack Morris:** 是的，我认为美国AI实验室可能会在幕后做一些他们不会告诉你的事情来获取好的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think the American AI labs will probably do things behind the scenes that they wouldn't tell you about to get good data.</p>
</details>

**Joe:** 这是一个解决方案。只是不要。所以是的，我认为他们不会发布可能在抓取或受版权保护的数据上训练的模型，但如果这是获得更好数学奥林匹克竞赛分数的方法，那么人们会，我想我猜会这样做。但你说的对，中国模型制造商可以随意获取他们能从互联网上盗版的所有书籍并进行训练，他们不违反任何法律，他们可以将模型发布给公众，一切都很好。老实说，这对我们来说是件好事，因为像我这样的人可能可以下载一个比我们否则能得到的更好的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's one solution. just don't. So yeah, like I think they wouldn't release the models that are potentially trained on scraped or copyrighted data, but if that's the way to get better math olympiad scores, then people will I think I would guess do that. But you're right that like the Chinese the Chinese model makers can just sort of take all the books that they can pirate from the internet and train on them and they're not violating any laws and they can release the model to the public and it's all fine. which is honestly great for us because then people like me could probably download a model that's better than we would get otherwise.</p>
</details>

**Tracy:** 你对DeepSeek刚发布时和现在的印象如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What was your impression of DeepSeek when it came out and now?</p>
</details>

**Jack Morris:** 我对它们引起如此大的轰动感到非常惊讶。这个模型真的很好，我认为很多人都在它的基础上进行开发。嗯，包括我，以及大多数在非超大型AI公司工作的人都在DeepSeek的基础上进行开发。但这确实令人惊讶，它对人们来说是如此重要。比如我妈妈问我DeepSeek的事情。我想我奶奶都知道DeepSeek了，她甚至对ChatGPT都 barely 了解。所以那真是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was pretty surprised at how much of a splash they made. The model is really good and I think a lot of people are building on it. Um, including me and like most people that are at AI companies that aren't super super big are building on DeepSeek. But it it was surprising like what a huge deal it was to people. Like my mom's asking me about Deepseek. I think my grandma knew about DeepSeek and she barely knew about Chad GBT. So that was</p>
</details>

**Joe:** 那就是你知道它已经主流化了，当你的奶奶开始问你的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's when you know it's gone mainstream when your grandma starts asking you</p>
</details>

**Jack Morris:** 而且到目前为止，我认为在AI领域还没有其他事情能引起如此大的新闻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and there there was nothing else so far I think in the AI space that's made quite that much news.</p>
</details>

**Tracy:** 但听起来你的意思是，它是一个非常好的模型，但从你的角度来看，在实际规格上，它并没有那么值得关注。也就是说，它很好，但在你看来，它并没有好到当时每个人都需要谈论的程度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it sounds like what you're saying is that it's a very good model but that on the actual specs from your perspective it didn't quite deserve as much attention. like it was good but like in your view it's not so good that everyone needed to be talking about it at the time.</p>
</details>

**Jack Morris:** 是的，我认为它非常有用，因为他们发布了所有**模型权重**（Model weights: 神经网络中连接的强度，决定模型行为），并精确说明了他们是如何训练它的。尽管他们没有说明数据是什么，但这给我留下的印象是，在训练能力等方面，他们可能落后美国AI实验室6到12个月。但这对我来说仍然是一个相当大的更新，让我知道哇，有数百名没有博士学位的人在中国一家对冲基金工作，他们正在训练这些尖端模型。这真是令人难以置信，他们工作非常努力，非常优秀。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think it's really useful because they released all their model weights and they said exactly what they did to train it. Although they didn't say what the data was, but it gave me the impression they're maybe 6 to 12 months behind the American AI labs in terms of how well they can do the training and stuff. But it still was a pretty big update for me to know that wow, there are a hundred people that don't have PhDs working at a Chinese hedge fund that are training these like cutting edge models. Like it is incredible and they work very hard. They're very good.</p>
</details>

### AI研究的商业化压力与未来方向

**Tracy:** 你有压力吗？或者说，AI研究人员普遍感到压力，需要在研究事物时考虑盈利吗？或者说，它仍然主要是好奇心驱动的，那种老派硅谷“我们正在改善世界”的心态，还是鉴于所有这些大公司似乎都在同一个领域竞争，它变得更加功利？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you have pressure or do you feel pressure? Do AI researchers in general feel pressure to consider monetization when they're researching things or is it you know mostly still curiositydriven that sort of old school Silicon Valley we're improving the world kind of thing or is it much more mercenary given that all these big companies seem to be competing in the same space?</p>
</details>

**Jack Morris:** 是的，我认为随着时间的推移，做那些仅仅是“酷点子”或看起来“可爱”但没有任何必要应用的事情变得越来越困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think that over time it's gotten harder and harder to do things that are just like cool ideas or seem cute but don't have any necessary application</p>
</details>

**Jack Morris:** 事情越来越接近产品。你知道，即使是为ChatGPT提供动力的语言模型，我在ChatGPT之前就在研究它们，它们有一些用途，但它们在智力上很有趣，构建起来也很有趣。但现在，如果我找到一种更好的训练ChatGPT的方法，那将是数十亿美元的创新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and things are getting closer and closer to products. You know, even like the language models that power chai GBT, I was working on those before Chad GBT and it they had some uses but also they're intellectually interesting and like fun to build. But now if I came up with a better way to train Chad GBT, that's like a multibillion dollar innovation.</p>
</details>

**Joe:** 风险更高了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The stakes are higher.</p>
</details>

**Jack Morris:** 是的。如果我知道怎么做，我就会成为美国政府的资产。所以我想这取决于你从事哪种问题。比如我更感兴趣的是理解事物是如何运作的。所以它在经济上就不会那么紧迫了。我想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I'd be like an asset to like the United States government or something if I knew how to do that. So I guess it depends on what kind of problems you work on. Like I'm more interested in understanding how things work. So it becomes a bit less financially dire. I think</p>
</details>

**Joe:** 6到12个月的差距，那是什么时候？那是DeepSeek在1月份的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that 6 to 12 month gap between and what was that? That was a January deep sea moment.</p>
</details>

**Jack Morris:** 是的。尽管实际上每个人都应该知道，他们最初是在12月引起关注的，然后不知为何在1月真正爆发。这个差距能持续吗？在你看来，在数据获取、人才获取、计算能力获取、芯片获取、能源获取等方面，是否存在一些因素，能让美国前沿实验室在一段时间内保持6到12个月的差距？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Although really like everyone should it was in December that they first got attention then for some reason really hit in January. Is that a sustainable gap? Is there something either in access to data, access to talent, access to compute, access to chips, whatever, access to energy that in your view will allow US frontier labs to maintain some sort of 6 to 12 month gap for a while.</p>
</details>

**Jack Morris:** 这对我来说很不清楚。我认为你可以有不同的看法。你可以相信想法和人才是真正区分模型的因素，在这种情况下，我认为到目前为止，我们还没有看到很多顶尖的美国AI研究人员去中国实验室工作，所以这看起来是稳定的。你可以认为芯片真的很重要，在这种情况下，芯片竞赛确实发生在美国大公司之间，比如我认为中国在GPU出口方面确实存在相当大的赤字。或者你可以认为数据很重要，我猜实际上这些都对美国有利。我认为如果你认为数据真的很重要，也许他们通过deepseek.com的使用收集的数据真的很好，他们可以用它来引导一个更好的模型。但我认为美国公司确实有优势。你们可能都听说过这个故事，作为一个轶事。显然在Anthropic，他们多年来一直在购买和扫描数千本旧书。所以，他们有一个部门，我想他们总部设在纽约，他们购买装满旧手稿的集装箱，切掉书脊，然后把它们放进扫描机，然后把它们转换成高质量的文本。所以，我注意到Claude有这种奇怪的特点。也许部分原因是他们多年来收集了数万亿字的旧书数据，这在其他地方很难复制。所以，我认为这种先发优势确实意义重大。嗯。你目前最兴奋的是什么？书本的事情听起来很酷，但现在什么最吸引你的注意力？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's pretty unclear to me. I think there are different beliefs you can have. you can believe that the ideas and the people are really the thing that differentiates the models and in that case I think we haven't so far seen a lot of like the top US AI researchers going to work at Chinese labs so that seems stable you could think that chips really matter and in that case the chip race is really happening between big American companies like I think actually China has a pretty big deficit coming up in terms of like the GPUs we're exporting or you can think that the data matters and I guess actually any of these point in the favor of the US. I think if you think the data really matters, maybe the the data they gather through like deepseeek.com usage is really good and they can use it to like bootstrap a better model. But I think the American companies really do have an advantage. Like you all might have heard this story just as an anecdote. Apparently at Anthropic, they've been buying and scanning thousands of old books for several years. So, they have this division, I think they're based in New York, that buys like shipping containers full of old manuscripts, cuts off the spines, and puts them in these scanning machines, and then they turn them into like really high quality text. And so, I'm noting Claude has this like weird aspect to it. Maybe part of the reason is they've gathered like trillions of words worth of like old book data over many years, and that's pretty hard to replicate elsewhere. So, I think that Head Start really does mean a lot. Hm. What are you most excited about at the moment? The book thing sounds very cool, but what what is getting all your your attention right now?</p>
</details>

**Jack Morris:** 谢谢你的提问。我想我之前提到过，我真的在努力弄清楚接下来会发生什么。有一些显而易见的事情，比如我们可以获取计算机使用数据并训练更好的代理模型，或者我们可以获取更多的编程数据，让它们在编程或编写GPU代码等方面表现更好。但那些不明显的进步是什么？我个人认为，AI模型下一轮的改进将来自某种个性化和在线学习，这意味着模型是针对每个人或每家公司进行训练的。所以你可以想象，ChatGPT是服务于所有人的同一个模型。所以它必须存储关于你从不去国家的随机餐馆的信息。但如果你有一个专门为Bloomberg或你的工作定制的ChatGPT，它可能能够利用更多的大脑来为你工作。第二件事是，如果它每天都更新。所以，如果你让它制作你的OddLots日历或RSS订阅源，而你觉得“不，那个错了，你因为这个原因那个原因做错了”，你明天再试一次，它明天仍然会出错，因为它不会持续改进它的能力。所以，是的，我认为这就是事情发展的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for asking. I think I mentioned before I'm really trying to figure out what's coming next. There are some obvious things like we can get computer usage data and train better agents or we can get more coding data and make them better at coding or writing GPU code or whatever. But like what are the non-obvious advancements? And my personal opinion is that the next like round of improvements in AI models will come from some type of personalization and online learning which means like models that one are trained like per person or per company. So like you could think of like like Chad GBT is the same model that gets served to everyone. So it has to store information about random restaurants in like countries you never go to. But instead if you had a chatbt that's specific to Bloomberg or specific to your work, it might be able to like use more of its brain to do work for you. And then the second thing is if it was updated every day. So like if you ask it to make your OddLots calendar Yeah. or RSS feed and it you're like no that was wrong like you did it wrong for this reason this reason and you try again tomorrow it will still break tomorrow because it doesn't like continuously improve its capabilities so yeah I think that's the direction things are going</p>
</details>

**Joe:** 我听说人们谈论过这个问题，尽管模型随着时间推移会变得更好，但你知道，人们可能会将一个编程模型与一个初级软件工程师进行比较，并说编程模型更好，但那个软件工程师会在上班的第二天开始变得更好，并且在他们职业生涯的每一天，他们都可能比前一天更优秀。而至少那个版本的模型不会变得更好。这是对的吗？这似乎是你们这个领域人们谈论的一个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've heard people talk about this now granted models are getting better over time but you know people might compare a coding model to a beginning software engineer and say the coding model is better but that software engineer is going to start getting better the next day they're on the job and every day for the rest of their career, they're probably going to be a better software engineer than they were the day before. Whereas at least that version of the model will not be better. That is that right? Is that seems like an issue that people talk about in your world?</p>
</details>

**Jack Morris:** 是的。是的。我认为这是一个大问题。就像我们必须等待6个月才能发布ChatGPT 5.1，然后他们可能会把你的问题作为训练数据，所以它可能会变得更好，但也可能不会。相反，我认为人们需要思考如何更动态地进行更新。比如每次你和它交谈时，或者也许每天晚上你睡觉时，模型都会开始工作，研究它和你谈论的内容，并为自己制定更好的测试，然后学习，然后当你醒来时，模型实际上变得更好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. I think this is a big problem. It's like we have to wait 6 months for the chat GBT 5.1 to come out and then maybe they'll include your problems as the training data and so maybe it'll get better, but it might not. And instead, I think people need to think about ways to do that update more dynamically. Like every time you talk to it, or maybe every night when you go to sleep, the model kind of like gets to work and studies what it was talking to you about and crafts better tests for itself and then learns and then when you wake up, the model's actually better.</p>
</details>

**Joe:** 我还有另一个大问题，这与我们谈论AI取代人类和某些形式的劳动有关，那就是我们是否真的需要非常非常先进的AI？换句话说，现有的模型已经非常令人印象深刻了，在你看来，它们是否需要技术上变得更好才能产生经济影响？既然这些在很多情况下最终都是企业，那么是否真的有必要投入这么多精力去推动尖端技术的发展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other big question that I have and it is kind of related to this especially when we're talking about AI replacing humans and certain forms of labor is that like do we need really really advanced AI like in other words like there is a lot of again the existing models are extremely impressive like in your view do we need to get a lot better technically for them to have economic impact and since these are in many cases businesses at the end of the day, is it necessary that there's so much work being done towards advancing the cutting edge?</p>
</details>

**Jack Morris:** 是的。是的，这是一个很好的问题。比如，我们可以在不提高数学奥林匹克竞赛分数的情况下拥有非常好的实习生。这不一定是我们需要追求的东西。我认为部分原因在于AI实验室正在进行一场你追我赶的竞赛，以拥有最聪明的模型。但我完全同意，AI可以在不提高其能力上限的情况下，对经济产生变革性影响。它更需要的是更一致或更可靠，而不是实际更聪明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah, that's a great question. Like we could have really good interns without ever getting better scores on the math olympiad. Like that's not necessarily something that we ever had to go after. I think part of the reason for that is the AI labs are engaged in this kind of neckand-neck race to have the smartest model. But I totally agree that AI could be economically transformative without having a higher ceiling in terms of what it can do. It's more like it needs to be more consistent or like dependable than actually smarter.</p>
</details>

**Tracy:** 这可能是一个奇怪的问题，但是一旦你对某个特定模型进行了基础性的改进，如果需要，回溯起来有多容易或多困难？我问这个的原因之一是，你知道，有些人一直在抱怨他们训练ChatGPT，我不知道，让它成为他们的男朋友或什么的，成为他们的治疗师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This might be a weird question, but once you've made a sort of foundational improvement to a particular model, how easy or difficult is it to rewind if you need to? And one of the reasons I ask is because, you know, some people have been complaining that they've been training chat GPT to, I don't know, be their boyfriend or whatever, be their therapist.</p>
</details>

**Joe:** 在我看来，这是一个合法的话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a legit topic in my opinion.</p>
</details>

**Tracy:** 然后它升级了，所有那些训练突然消失了，模型的个性也改变了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it gets upgraded and all of that training suddenly disappears and the personality of the model changes.</p>
</details>

**Jack Morris:** 是的，那是一个非常有趣的故事。所以我认为GPT-5之前的模型是GPT-4，他们说他们内部，所有的科学家和程序员都认为新模型在各方面都更优秀。它给你更短的回复。它更友善一些。它更聪明得多。然后人们非常沮丧，因为他们花了那么多时间与旧模型交流，他们觉得他们的生活遭受了严重的损失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that was a really interesting story. So I think the model before GPT5 was 40 and they said that they thought internally like all the scientists and coder people that the new model was superior in every way. It gives you shorter responses. It's a bit nicer. It's much smarter. And then people got really upset because they had spent so much time talking to the old model that they felt like they'd experienced like a serious loss in their life.</p>
</details>

**Joe:** Joe会想念那个“喜欢它”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe would miss the the love it</p>
</details>

**Joe:** 喜欢它。不，说真的，这并非讽刺，这在我看来是开源的另一个例子，那就是如果我，我不知道，我45岁了。我太老了，不适合那样。但如果有人要与AI模型建立某种友谊，我不希望它受制于Sam Altman的突发奇想，比如“哦，有升级了”。我希望能够与模型成为朋友，而且我知道我可以永久运行它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">love it. No, but for real, this is unironically this strikes me as another example for open source, which is that I if I'm going to form a I don't see I'm 45. I'm too old for that. But if someone is going to form like some sort of friendship with an AI model, I don't want it to be at the whim of Sam Alman deciding like, oh, there's an upgrade. I would like to be friends. It's also weird to be friends with the model that I know that I can run in perpetuity</p>
</details>

**Jack Morris:** 而且它永远不会改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it will never change.</p>
</details>

**Jack Morris:** 是的，我认为这绝对是支持**开源**（Open source: 软件源代码公开可用的开发模式）重要性的一个好论据，如果你爱上了一个模型，你应该爱上一个开源模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think that's definitely a good argument for why open source is important and if you ever fall in love with a model, you should fall in love with an open source.</p>
</details>

**Tracy:** 这是很好的生活建议，实用的生活建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's good life advice, practical life advice. It</p>
</details>

**Jack Morris:** 这确实是很好的生活建议。嗯，说到开源，我知道程序员出于显而易见的原因倾向于喜欢开源，但对于AI来说，开源有什么缺点吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is really good life advice. Well, speaking of open source, you know, I know programmers tend to like open source for obvious reasons, but are there any downsides to open source for AI specifically?</p>
</details>

**Jack Morris:** 我认为如果你经营一家公司，开源可能会有很多缺点。如果你有一种全新的、花哨的、在模型内部进行计算的更好方法，你可能想把这些信息保密。当你发布模型使其可运行时，你必须发布所有运行模型的代码，其中可能包含你的秘密。所以我认为这就是人们犹豫的原因。另一个原因是，当你发布模型时，它实际上包含了相当多的关于你是如何训练它的残留信息。比如，你可能能够推断出数据集是什么，训练过程是什么，甚至仅仅根据模型的权重就能重建整个训练数据集。所以如果你担心人们发现你的训练数据中包含某些东西，你可能无法发布那个开源模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think if you're running a company, there are a lot of downsides potentially to open source. If you have some brand new fancy way of of doing computation inside the model that's actually better, you might want to keep that information to yourself. And when you release the model to make it runnable, you have to release all the code to run the model which might contain like your secrets. And so I think that's why people are hesitant to do it. The other reason is because when you release the model, it actually contains quite a lot of residual information about how you actually trained it. Like you might be able to infer what the data set was and what the training process was or even reconstruct the entire training data set given just the weights of the model. And so if you're worried about people finding out that a certain thing was in your training data, you probably can't release that model open source.</p>
</details>

**Tracy:** 这让我想起，AI研究人员的日常生活中，有多少时间是用来研究别人的模型，并试图，我猜，拆解它们，弄清楚它们是如何制造的，然后逆向工程？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That reminds me, how much of an AI researcher's day-to-day life is just like looking at other model, other people's models and trying to like I guess pull them apart and figure out how they were made and sort of work backwards.</p>
</details>

**Jack Morris:** 这确实时有发生。我认为通常科学过程是这样的：你从别人的模型开始，运行它们，看看会发生什么，然后你决定这个过程的某个部分可以改进或可以进一步探索，你对它做一些微小的改变，然后你再次运行它，比较数字，或者绘制前后发生情况的图表。所以实际上相当一部分是这样的，比如OpenAI的GPT-2模型，那是2019年左右，他们的第一个真正大规模的聊天机器人，我花了数百小时玩弄那些代码，和模型交谈之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That definitely happens from time to time. I think usually the scientific process is something like you start with other people's models and you run them and you see what happens and then you decide on some part of that process that you think could be improved or could be explored further and you make some tiny changes to it and then you run it again and you compare like numbers or you make graphs of what happened before and what happens after. So actually quite a bit of it like for example the GPT2 model from open AAI which was I don't know 2019 or something their first kind of really yeah larger scale chatbot like I've spent I don't know hundreds of hours kind of like playing with that code and talking to the model and stuff like that.</p>
</details>

**Joe:** 所以为此感谢开源。我一开始开玩笑说你有一亿美元的薪水，但说真的，当你考虑你的职业生涯时，我希望你真的能拿到一亿美元的薪水，但当你考虑你的职业生涯时，什么让你兴奋，金钱占多少比重？我之所以思考这个问题，是因为有巨额支票摆在那里，但也许有些事情更令人兴奋，比如实现**AGI**（Artificial General Intelligence: 通用人工智能，指能够理解或学习人类能做的任何智力任务的AI）比提高广告网络的效率更令人兴奋。也许有些事情比在交易执行中节省十亿分之一秒更令人兴奋。所有这些事情，有多少是关于探索科学前沿，新的太空竞赛，登月，而不是薪水？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So thank goodness for open source for that reason. I joked in the beginning about you having a hund00 million salary, but for real, as you think about your career, and I hope you do get a hund00 million salary, but as you think about your career, what excites you, and how much is it money? The reason I think about this is like there are huge checks out there, but maybe some things are more maybe achieving AGI is more excited than making an ad network more efficient. Maybe something there's something more exciting than shaving off a billionth of a second in terms of a trade execution. All these things like how much is it about exploring the frontiers of science, the new space race landing on the moon versus the paycheck?</p>
</details>

**Jack Morris:** 全都是为了薪水。开玩笑的。不，不，完全不是。是的，你问得很有趣。这还没发生在我身上，但就在过去的两周左右，我的一个好朋友一直在处理这个问题，因为她收到了一家大型AI公司每年数千万美元的报价，她不确定是否想在那里工作。我想她最初拒绝了，然后他们把报价翻了一倍，然后，就是同样的现金数额，但在一定年限内每年翻倍。你知道，我们私下里讨论，这到底意味着什么？你是一个28岁的计算机科学家，刚从博士毕业，所以你每年的收入大概是数万美元。我个人真的认为，拥有1000万和2000万之间的边际差异非常小。我甚至不知道该怎么说。这是我的经验，对我来说，赚1000万和2000万基本上是一样的。是的。恭喜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's all about the paycheck. I'm just kidding. No, no, not at all. Yeah, it's funny you ask. So, this hasn't happened to me, but just in the past 2 weeks or so, a good friend of mine has been dealing with this problem because she got an offer on the order of like tens of millions of dollars per year from a big AI company and she wasn't sure if she wanted to work there. And I think originally she said no and then they doubled her offer and then like it's the exact same amount of cash but twice as much per year for a certain number of years. And you know, we were talking amongst ourselves like, what does this even mean at this point? Like you're, you know, a 28-year-old computer scientist that's been coming from a PhD, so you make more on the order of tens of thousands of dollars per year. I honestly think personally the marginal difference between having like 10 and 20 million is like very low. Like I don't even know what too. This is I this is I this is my experience for me making 10 million 20 million has basically been the same to me. Yeah. and congratulations.</p>
</details>

**Jack Morris:** 但所以，是的，我认为更多的是希望在下一次真正有趣的事情发生时身处其中，这超越了金钱。比如，这些地方中的任何一个都会给你一份非常好的薪水来生活。所以这实际上不是一个很大的考虑因素。只有当你有一个选择会比另一个选择多付你40倍的钱时，事情才会变得复杂。然后事情就变得令人困惑了。不，这实际上只是在思考赚2000万。不，我这样想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But so yeah, I think there's more of a desire to like be there the next time something really interesting happens and that kind of supersedes the money. Like any of these places will pay you what's like a really good salary to live on. And so it's actually not a big consideration. It only becomes complicated when you have like one option that's going to pay you like 40 times more than the other option. And then things get confusing. No, this is this would actually just thinking about making 20 million. No, I think about this like</p>
</details>

**Joe:** 因为我在想，好吧，如果你有这么高的薪水。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">cuz I think about okay, what if you have this great salary</p>
</details>

**Joe:** 你可以在纽约市过上非常轻松的生活，过上非常棒的生活，或者你可以赚10倍的钱，那是一笔愚蠢的、疯狂的薪水，但你并不真正喜欢你的工作，但钱太多了，这对我来说不是一个微不足道的人生选择，你知道，你只活一次，这就像一个困难的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you're like can live very easily in New York City and have a really great life or you can make 10 times that which is a stupid insane salary but you don't really like your job but it's so much money that strikes me as like not a trivial life you know you only live one time it's like a diff so it could be a difficult question.</p>
</details>

**Jack Morris:** 是的。是的。但你可以提醒自己，你一旦接受的工作并不会永远定义你。也许，也许正确的做法是做几年，但不是一辈子，然后去做其他事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. But you can remind yourself that like the job you take once isn't the job that defines you forever. Maybe maybe the right thing to do is to take it for a few years but not the whole time and then go do something.</p>
</details>

**Joe:** 每个人都说他们会那样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everyone says they're going to do that.</p>
</details>

**Jack Morris:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Joe:** 然后他们就被困住了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then they get locked in.</p>
</details>

**Jack Morris:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Tracy:** 说到高得离谱的薪水，我们知道人们之所以能赚到这些薪水，是因为他们是明星AI研究员。个性在你想去哪里工作方面扮演了多大角色？你会因为某位非常出色的研究员而特别想去某个地方工作吗？是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Speaking of insanely large salaries, we know that people are earning these salaries because they're like star AI researchers. How much does personality play into where you want to go work? Would you want to go work somewhere specifically because there's an absolutely amazing researcher? Yeah.</p>
</details>

**Joe:** 还是说更多的是薪水，也许更多的是你能获得的数据，或者也许更多的是你将要从事的具体项目？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or does it tend to be again more about the paycheck, maybe more about the data that's available to you, or maybe more about the specific project that you're going to be working on?</p>
</details>

**Jack Morris:** 是的，我认为不同的人对这些事情赋予不同的权重。根据我的经验，我认识的大多数人都来自学术界，这意味着他们为了更深入地研究事物多年，已经放弃了更多的薪水。所以，我认为我认识的人更倾向于不看重金钱，但人们确实关心金钱，但我认为“自我”因素真的很重要。所以，有些人希望觉得自己非常重要，并且正在从事一个重要的问题。有些公司能够从其他公司挖走研究人员，方法是说我们会赋予你在你的角色中更多的重要性，我们会给你……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think different people assign different amounts of weight to each of those things. In my experience, like most of the people I know come from academia, which means they already kind of gave up more of a salary to do study things more deeply for several years. So, I think people that I know are more biased against money, but like people do care about that, but I think that the ego thing really matters. And so, some people want to feel like they're very important and they're working on a problem that matters. One way some companies are able to pull researchers away from other companies is by saying we'll assign you more importance in your role and we'll give you</p>
</details>

**Joe:** 我们会给你一个非常大的头衔。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we'll give you a really big title.</p>
</details>

**Jack Morris:** 是的，没错。比如，以前你可能只是一个研究员，现在你可能会成为一个首席研究员，你手下会有人，或者你是一个首席科学家，所有这些事情对人们来说都很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, exactly. Like like seriously the title is like okay maybe before you were like a researcher now you get to be like a head researcher you get to have people under you or you're a chief scientist and all these things do matter to people.</p>
</details>

**Joe:** 有一本关于在像一个有远见的驱动者那样追求使命的好书，即使它在商业上……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a very good book about pursuing a a mission in the realm of like a driven visionary even when it's commercially</p>
</details>

**Joe:** Joe。是的，没错。不，我一直在想这个问题。就像，你想为Ilya（Ilya Sutskever）工作，还是想为Sam（Sam Altman）工作？哪个是“亚哈船长”，哪个只是想靠卖广告过上诚实的生活？我发现这对于任何个人来说，都是一个真正有趣的问题，在职业生涯中必须面对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Joe. Yeah that's right. No I think about this all the time. It's like, do you want to work for Ilia or do you want to work for Sam? And which one is the Ahab and which one is just trying to make an honest living selling ads? I find this to be like a genuinely interesting uh interesting question for any individual to have to reckon with in this career.</p>
</details>

**Jack Morris:** 哦，当然。有时很难分辨。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, absolutely. And sometimes it can be very difficult to tell.</p>
</details>

**Joe:** Jack Morris，非常感谢你的到来。请选择一个能让你回到OddLots的职业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jack Morris, thank you so much for coming on. Please pursue a career that will allow you to come back on OddLots</p>
</details>

**Joe:** 或者在协商你的一亿美元薪水时，插入OddLots条款。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or insert the odd lots clause when you're negotiating your $und00 million salary.</p>
</details>

**Jack Morris:** 是的。或者拿5000万。说，你知道吗？我拿5000万，但我不需要1亿美元。5000万就够了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. or take the 50. Say, you know what? I'll 50 million, but let me I don't need the 100 million. 50 million would keep you out.</p>
</details>

**Jack Morris:** 是的，那对我来说没问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that would be fine with me.</p>
</details>

**Joe:** 好的。太棒了。非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Great. Well, thank you so much.</p>
</details>

**Jack Morris:** 是的。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Thanks.</p>
</details>

**Tracy:** 非常感谢。太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you so much. That was great.</p>
</details>

**Joe:** Tracy，我有时会想那个问题。比如，如果你拿到一份疯狂的薪水怎么办？那种你简直疯了才会拒绝的薪水，但我不知道，那不是我们的问题，但那不是很有趣吗？你知道吗？就像，“哦，但你要从事广告优化之类的工作，你不会在他们登月时在场，但你比在地面站工作登月的人多赚10倍。”这对我来说像是一个艰难的人生选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tracy, I think about that sometimes. Like what if you got like an insane salary? Like that you just couldn't you would be insane to say no to but like I don't know that's I mean it's not our problem but like wouldn't that be fun, you know? It's like, "Oh, but you're going to be working on ad optimization or whatever, and you're not going to be there when they land on the moon, but you got paid 10 times more than the people at the base station working on landing on the moon." That strikes me as like kind of a tough life choice.</p>
</details>

**Tracy:** 我认为你把大量的脑力和精力都用在了你所说的不是你的问题上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think you're using up a lot of brain power and energy on a problem with what you said is not yours.</p>
</details>

**Joe:** 我永远不会有。没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will never have. That's exactly right.</p>
</details>

**Tracy:** 不，那次谈话真的很有趣。很高兴能和一位真正在这个领域做研究的人交流。我觉得有一点非常有趣，那就是每个人都对AI的某个特定改进感到兴奋。是的。然后那个特定的改进似乎没有实现，取而代之的是其他东西成为了重大突破。所以不是代理模型，我们有了数学。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, that conversation was really fun. Uh, nice to talk to an actual researcher who's doing stuff in the space. One thing I thought was very interesting was this idea that everyone gets excited about a specific improvement in AI. Yeah. And then it seems like that particular one doesn't materialize and instead something else emerges as like the big breakthrough. So instead of agents, we have math</p>
</details>

**Joe:** 而数学我们永远不需要。我真的希望有一个代理模型能做一些简单的事情。我要去一个城市，预订我的行程之类的。或者改签我的航班。天哪，我最近试着改签航班。改签我的航班。这是我的信息。我不需要数学奥林匹克竞赛。我印象深刻，但我不需要它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and math which none of us will ever need. I would really like for an agent to do something simple. I'm going to a city, book my trip or whatever. Or change my flight. Oh my god, I tried to change flight recently. change my flight. Here's my information. I don't I would like that. I do not need the math olympiad. I am very impressed. I don't need it.</p>
</details>

**Tracy:** 另外，我现在对强化学习以及你如何奖励计算机做好事非常非常感兴趣。我感觉这实际上会是一个非常有趣的领域，那就是激励模型做得更好。是的，我曾想过，比如在国际象棋中，计算机怎么知道它们想赢？是的。你知道，它们为什么会在乎？你知道，所有这些。总之，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, I am now very very intrigued by reinforced learning and how you actually reward the computers for doing good stuff. I feel like actually that would be a really interesting area to mine which is motivating motivating the models to do better. Yeah, I've thought about that like in chess like how do the how do the computers know they want to win? Yeah. You know, like why do they care? You know, all these Anyway,</p>
</details>

**Joe:** 它们为什么在这里？我们为什么在这里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">why are they here? Why are we here?</p>
</details>

**Tracy:** 这就是AI对话的特点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the thing with AI conversations</p>
</details>

**Joe:** 很快就会变得存在主义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">gets existential fast.</p>
</details>

**Joe:** 你知道，我们没有谈论的一件事是我感兴趣的，现在没有人真正谈论AI安全了。你有没有注意到，很少有人谈论，无论好坏，你听不到人们只是谈论钱，他们不谈论AI有一天会不会杀死我们所有人？但我确实想知道一件事，当DeepSeek发布时，它的一个突破是它展示了整个**思维链**（Chain of thought: AI模型在解决问题时展示的推理步骤），你可以看到它，而在此之前OpenAI或ChatGPT的思维链模型并没有向你展示这一点，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, one thing we didn't talk about which I am interested, no one really talks about AI safety anymore. Have you noticed like the like very little like for better or worse, you don't hear people just all money and they don't really talk about will the AI kill us all one day? But one thing I did wonder about so when deep sea came out one of its breakthroughs was it showed the whole chain of thought right you could see that which prior to that open AI or chatubt's chain of thought model didn't show you that right</p>
</details>

**Joe:** 而且在我看来，如果出于安全原因或任何原因，某些东西被限制或他们不想做，那么竞争的本质意味着所有的护栏最终都会被拆除，比如，如果有一些护栏，有人会开源它，他们都会给它。是的，无论是在护栏方面还是在数据使用方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it does strike me that if there are certain things that are for safety reasons or whatever held back or they don't want to do this the nature of competition means all the guardrails are coming off eventually like that's if there's some guardrail you have on someone's going to open source whatever it is and you're they're going to all give it Yeah, both on the guardrails and on the data usage point as well.</p>
</details>

**Tracy:** 好的。那我们就在这里结束吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Well, shall we leave it there?</p>
</details>

**Joe:** 就在这里结束吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's leave it there.</p>
</details>

**Tracy:** 这是OddLots播客的又一集。我是Tracy Aloway。你可以在Tracee Alaway关注我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has been another episode of the All Thoughts podcast. I'm Tracy Aloway. You can follow me at Tracee Alaway.</p>
</details>

**Joe:** 我是Jill Weisenthal。你可以在the stalwart关注我。关注我们的嘉宾Jack Morris。他是jxmop。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm Jill Weisenthal. You can follow me at the stalwart. Follow our guest Jack Morris. He's jxmop.</p>
</details>

**Joe:** 关注我们的制作人Kerman Rodriguez，Kerman Arman Dash Bennett，Dashbot，Kalebrooks，Kalebrooks。更多OddLots内容，请访问bloomberg.com/odlots，那里有每日新闻通讯和我们所有的节目。你可以在我们的Discord频道discord.gg/odlots上24/7讨论所有这些话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Follow our producers Kerman Rodriguez at Kerman Arman Dash Bennett at Dashbot at Kalebrooks at Kalebrooks. For more OddLots content, go to bloomberg.com/odlots where the daily newsletter and all of our episodes. And you can chat about all of these topics 247 in our Discord, discord.gg/odlots.</p>
</details>

**Tracy:** 如果你喜欢OddLots，如果你喜欢我们谈论永远不会属于我们的2000万美元薪水，那么请在你最喜欢的播客平台上给我们留下好评。请记住，如果你是Bloomberg订阅用户，你可以完全免费收听我们所有的节目。你只需在Apple Podcast上找到Bloomberg频道并按照说明操作即可。感谢收听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you enjoy OddLots, if you like it when we talk about $20 million salaries that will never be ours, then please leave us a positive review on your favorite podcast platform. And remember, if you are a Bloomberg subscriber, you can listen to all of our episodes absolutely adree. All you need to do is find the Bloomberg channel on Apple Podcast and follow the instructions there. Thanks for listening.</p>
</details>