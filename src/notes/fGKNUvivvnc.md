---
area: tech-engineering
category: ai-ml
companies_orgs: []
date: '2025-08-15'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project: []
series: ''
source: https://www.youtube.com/watch?v=fGKNUvivvnc
speaker: Anthropic
status: evergreen
summary: Anthropic专家团队探讨AI模型内部运作，揭示其并非简单预测下个词，而是通过复杂概念和规划实现目标，并强调解释性研究对AI安全与信任的重要性。
tags:
- ai-safety
- canada
- model
- thinking
title: 理解AI模型如何思考：Anthropic的解释性研究
---
### AI模型内部的复杂性

The model doesn't think of itself necessarily as trying to predict the next word. Internally, it's developed potentially all sorts of intermediate goals and abstractions that help it achieve that kind of meta objective.

模型不一定认为自己是在尝试预测下一个词。在内部，它可能已经发展出了各种中间目标和抽象概念，帮助它实现那种元目标。

When you're talking to a large language model, what exactly is it that you're talking to? Are you talking to something like a glorified autocomplete? Are you talking to something like an internet search engine? Or are you talking to something that's actually thinking, and maybe even thinking like a person?

当你与一个**大型语言模型**（Large Language Model, LLM: 基于深度学习的AI模型，能理解和生成人类语言）对话时，你到底在和什么对话？你是在和一个高级的自动补全系统对话吗？你是在和一个互联网搜索引擎对话吗？还是你正在和一个真正会思考，甚至可能像人一样思考的东西对话？

It turns out, rather concerningly, that nobody really knows the answer to those questions. And here at Anthropic, we are very interested in finding those answers out.

结果令人担忧的是，没有人真正知道这些问题的答案。而在Anthropic，我们非常渴望找到这些答案。

The way that we do that is to use interpretability. That is the science of opening up a large language model, looking inside, and trying to work out what's going on as it's answering your questions.

我们实现这一目标的方式是使用**解释性**（Interpretability: 理解和分析AI模型内部运作机制的科学）。这门科学旨在打开大型语言模型，查看其内部，并尝试弄清楚它在回答你的问题时发生了什么。

And I'm very glad to be joined by three members of our interpretability team, who are going to tell me a little bit about the recent research that they've been doing on the complex inner workings of Claude, our language model. Please introduce yourself, guys.

我很高兴能邀请到我们解释性团队的三位成员，他们将向我介绍他们最近针对我们的语言模型**Claude**（Claude: Anthropic公司开发的一系列大型语言模型）复杂内部运作所做的研究。请各位自我介绍一下。

### 团队成员介绍

Jack: Hi, I'm Jack. I'm a researcher on the interpretability team, and before that, I was a neuroscientist. Now here I am doing neuroscience on the AI.

Jack: 大家好，我是Jack。我是解释性团队的研究员，之前是一名**神经科学家**（Neuroscientist: 研究神经系统和大脑的科学家）。现在我在这里对AI进行神经科学研究。

Emanuel: I'm Emanuel. I'm also on the interpretability team. I spent most of my career building **machine learning** (Machine Learning: 人工智能的一个分支，使系统能从数据中学习并改进，而无需明确编程) models, and now I'm trying to understand them.

Emanuel: 我是Emanuel。我也在解释性团队。我职业生涯的大部分时间都在构建机器学习模型，现在我正在尝试理解它们。

Josh: I'm Josh. I'm also on the interpretability team. In my past life, I studied **viral evolution** (Viral Evolution: 病毒在世代更替中遗传物质发生变化的生物学过程), and in my past past life, I was a mathematician. So now I'm doing this kind of biology on these organisms we've made out of math.

Josh: 我是Josh。我也在解释性团队。我之前研究病毒进化，再之前是一名数学家。所以现在我正在对这些由数学构建的“生物体”进行生物学研究。

Anthony: Now wait a second. You just said you're doing biology here. A lot of people are going to be surprised by that because, of course, this is a piece of software, right? But it's not a normal piece of software; it's not like Microsoft Word or something. Can you talk about what you mean when you say that you're doing biology or indeed neuroscience on a software entity?

Anthony: 等一下。你刚才说你在这里做生物学研究。很多人会对此感到惊讶，因为这当然是一款软件，对吧？但它不是一款普通的软件；它不像Microsoft Word之类的。你能谈谈当你对一个软件实体进行生物学或神经科学研究时，你的意思是什么吗？

Jack: Yeah, I guess it's more about what it feels like rather than what it literally is. So, it's perhaps the biology of language models instead of the physics of language models, right? Or maybe we need to go back a little bit to how the models are made: no one is programming "if the user says hi, you should say hi," or "if the user asks what is a good breakfast, you should say toast." There isn't some big list of such rules inside.

Jack: 是的，我想这更多是关于它的感觉，而不是它字面上的含义。所以，这也许是语言模型的生物学，而不是语言模型的物理学，对吧？或者，我们可能需要稍微回顾一下模型是如何构建的：没有人会编程说“如果用户说‘嗨’，你就应该说‘嗨’”，或者“如果用户问‘什么早餐好’，你就应该说‘吐司’”。模型内部并没有这样一份庞大的规则列表。

Anthony: So it's not like when you play a video game and you choose a response, and then another response automatically comes, and it will always be that response regardless of...

Anthony: 所以这不像你玩视频游戏时，选择一个回应，然后另一个回应会自动出现，并且无论如何都会是那个回应……

Josh: ...just a massive database of what to say in every situation. No, they're trained with a whole lot of data, and the model starts out being really bad at saying anything. Then, its internal parts get tweaked with every single example to get better at predicting what comes next, and in the end, it becomes extremely good at that. But because it's this little tweaking, evolutionary process, by the time it's done, it bears little resemblance to what it started as, and no one manually set all the parameters. So, you're trying to study this complicated thing that evolved over time, much like biological forms. It's complicated, mysterious, and fun to study.

Josh: ……只是一份庞大的数据库，涵盖了在各种情况下该说什么。不，它们是通过大量数据进行训练的，模型最初在表达任何内容方面都非常糟糕。然后，它的内部组件在每一个例子上都被微调，以更好地预测接下来会说什么，最终它在这方面变得极其出色。但由于这是一个小型的、不断调整的进化过程，当它完成后，它与最初的样子几乎没有相似之处，也没有人手动设置所有的参数。所以，你正在尝试研究这个复杂的事物，它随着时间演变而来，很像生物形态随着时间进化。它很复杂，很神秘，也很有趣。

Anthony: ...and what it's actually doing. I mentioned at the start that this could be considered like an autocomplete, right? It's predicting the next word; that's fundamentally what's happening inside the model. And yet, it's able to do all these incredible things: it can write poetry, long stories, and even perform addition and basic math, even though it doesn't have an internal calculator.

Anthony: ……以及它实际在做什么。我一开始提到，这可以被视为一种自动补全，对吧？它在预测下一个词；这基本上就是模型内部发生的事情。然而，它却能做所有这些不可思议的事情：它能写诗歌，写长篇故事，甚至能做加法和基础数学，尽管它内部并没有计算器。

Anthony: How can we reconcile the fact that it's predicting one word at a time, yet it's able to do all these amazing things that people can see right in front of them as soon as they interact with the model?

Anthony: 我们如何调和这样一个事实：它一次只预测一个词，却能做所有这些令人惊叹的事情，人们只要与模型互动就能亲眼看到？

Emanuel: Well, I think one thing that's important here is that as you predict the next word for enough words, you realize that some words are harder than others. Part of language model training is predicting boring words in a sentence, and part of it is that it'll have to eventually learn how to complete what happens after the equal sign in an equation. To do that, it'll have to have some way of computing that on its own. So what we're finding is that the task of predicting the next word is deceptively simple. To do that well, you need to often think about the words that come after the word you're predicting or the process that generated the word that you're currently thinking about.

Emanuel: 嗯，我认为这里很重要的一点是，当你预测足够多的下一个词时，你会意识到有些词比其他词更难。语言模型训练的一部分是预测句子中“无聊”的词，而另一部分是它最终必须学会如何完成等式中等号后面的内容。要做到这一点，它必须有某种方式自行计算。所以我们发现，预测下一个词的任务看似简单，实则不然。要做好这一点，你通常需要思考你正在预测的词之后的词，或者生成你当前正在思考的词的过程。

Anthony: So it's like a contextual understanding that these models have to have. It's not like an autocomplete where it really is—presumably there's not much else going on there other than when you write "the cat sat on the," it's predicting "mat" because that particular phrase has been used before. Instead, it's like a contextual understanding that the model has.

Anthony: 所以这些模型必须具备的是一种情境理解。它不像自动补全，那里可能没有太多其他事情发生，除了当你输入“the cat sat on the”时，它会预测“mat”，因为这个特定的短语以前被使用过。相反，这是一种模型所拥有的情境理解。

Jack: I think, yeah, the way I like to think about it, kind of continuing with the biology analogy, is that in one sense, the goal of a human is to survive and reproduce. That is the objective that evolution is crafting us to achieve. And yet that's not how you think of yourself, and that's not what's going on in your brain.

Jack: 是的，我想我喜欢这样思考，继续用生物学的类比来说，从某种意义上讲，人类的目标是生存和繁衍。这是进化塑造我们去实现的目标。然而，这并不是你如何看待自己，也不是你大脑中正在发生的事情。

Anthony: Some people do.

Anthony: 有些人会。

Jack: It's not what's going on in your brain all the time. You think about other things, and you think about goals and plans and concepts. At a meta-level, evolution has endowed you with the ability to form those thoughts in order to achieve this eventual goal of reproduction. But that's kind of taking the inside view, what it's like to be you on the inside. That's not all there is to it; there's all this other stuff going on.

Jack: 这不是你大脑中一直发生的事情。你会思考其他事情，你会思考目标、计划和概念。在元层面，进化赋予了你形成这些想法的能力，以实现最终的繁衍目标。但这有点像是从内部视角看，从内部看你是什么样的。这并不是全部；还有所有这些其他事情正在发生。

Anthony: So you're saying that the ultimate goal of predicting the next word involves lots of other processes that are going on.

Anthony: 所以你是说，预测下一个词的最终目标涉及许多其他正在进行的过程。

Jack: Exactly. The model doesn't think of itself necessarily as trying to predict the next word. It's been shaped by the need to do that, but internally it's developed potentially all sorts of intermediate goals and abstractions that help it achieve that kind of meta-objective.

Jack: 没错。模型不一定认为自己是在尝试预测下一个词。它之所以被塑造成这样，是因为需要完成这个任务，但它在内部可能已经发展出了各种中间目标和抽象概念，帮助它实现那种元目标。

Josh: And sometimes it's mysterious, like it's unclear why my anxiety was useful for my ancestors reproducing, and yet somehow I've been endowed with this internal state that must be related in some sense to evolution.

Josh: 有时候这很神秘，比如不清楚为什么我的焦虑对我的祖先繁衍有用，然而不知何故，我被赋予了这种内在状态，它在某种意义上必然与进化相关。

Anthony: Right. Right. Right.

Anthony: 对，对，对。

Anthony: So it's fair to say then that these are just predicting the next word, and yet that's to do a massive disservice to what's going on in the models, really. It's both true and also untrue in a sense, or massively underestimates what's happening inside these models.

Anthony: 那么可以公平地说，这些模型只是在预测下一个词，但这实际上是对模型内部发生的事情的巨大贬低。从某种意义上说，它既是真实的，也是不真实的，或者说，它严重低估了这些模型内部发生的事情。

Emanuel: Maybe the way I would say this is it's true, but it's not the most useful lens to try to understand how they work.

Emanuel: 也许我会这样说：这是真的，但它不是理解它们如何运作的最有用的视角。

Anthony: Right. So, well, try and understand how they work. What do you guys do in your team to try and understand how they work?

Anthony: 对。那么，试着理解它们是如何运作的。你们团队为了理解它们是如何运作的，都做了些什么？

### 揭示模型的思考过程

Jack: I think, to a first approximation, what we're trying to do is tell you the model's thought process. So you give the model a sequence of words, and it's got to spit something out; it's got to say a word, it's got to say a string of words in response to your question. And we want to know how it got from A to B. And we think that on the way from A to B, it uses a series of steps in which it's thinking about, so to speak, concepts—low-level concepts like individual objects and words, and higher-level concepts like its goals, or emotional states, or models of what the user is thinking, or sentiments. So it's using this series of concepts that are progressing through the computational steps of the model that help it decide on its final answer. And what we're trying to do is give you a flowchart, basically, that tells you which concepts were being used in which order and which ones led, you know, how did the steps flow into one another.

Jack: 我认为，在第一次近似中，我们试图做的是告诉你模型的思维过程。你给模型一个词序列，它必须吐出一些东西；它必须说一个词，它必须说一串词来回应你的问题。我们想知道它是如何从A到B的。我们认为在从A到B的过程中，它使用了一系列步骤，在这些步骤中它思考着，可以说，各种概念——低级概念，比如单个对象和词语，以及高级概念，比如它的目标、情感状态、或对用户思维的建模，或情绪。所以它使用这一系列概念，这些概念通过模型的计算步骤逐步发展，帮助它决定最终答案。我们试图做的就是基本上给你一个流程图，告诉你哪些概念以何种顺序被使用，以及它们是如何相互导向的，你知道，这些步骤是如何相互衔接的。

Anthony: How do we know that, though? How do we know that there are these concepts in the first place?

Anthony: 但我们怎么知道呢？我们怎么知道这些概念一开始就存在？

Emanuel: Yeah. So, one thing we do is that we actually can see inside the model; we have access to it. So, you can sort of see which parts of the model do which things. What we don't know is how these parts are grouped together and if they map to a certain concept.

Emanuel: 是的。所以，我们做的一件事是，我们实际上可以看到模型的内部；我们有权访问它。所以，你可以大致看到模型的哪些部分做了哪些事情。我们不知道的是这些部分是如何组合在一起的，以及它们是否映射到某个特定的概念。

Anthony: Right? So, it's as if you open someone's head and there you could see like one of those **fMRI** (Functional Magnetic Resonance Imaging: 一种脑部扫描技术，通过检测血流变化来测量大脑活动) brain images that you could see the brain was like lighting up and doing all sorts.

Anthony: 对吧？就好像你打开一个人的头，然后你可以看到那种fMRI大脑图像，你可以看到大脑正在亮起来，做各种各样的事情。

Emanuel: Something's happening clearly.

Emanuel: 显然有事情正在发生。

Anthony: Right? But and they're like doing stuff. There's something happening. You take the brain out, they stop doing stuff. The brain must be important.

Anthony: 对吧？但是它们在做事情。有事情正在发生。你把大脑取出来，它们就不再做事情了。大脑一定很重要。

Emanuel: And but you don't have a key to understand what is happening inside that brain.

Emanuel: 但是你没有一把钥匙来理解那个大脑里正在发生什么。

Josh: Yeah. But torturing that analogy a little bit, you can sort of imagine that you can observe their brain and then see that that part always lights up when they're picking up a cup of coffee, and this other part always lights up when they're drinking tea. And that's one of the ways in which we can try to understand what each of these components are doing is to just notice when they're active, when they're inactive.

Josh: 是的。但如果稍微“折磨”一下这个类比，你可以想象，你可以观察他们的大脑，然后看到当他们拿起一杯咖啡时，那一部分总是亮起来；而当他们喝茶时，另一部分总是亮起来。这是我们尝试理解这些组件各自在做什么的一种方式，就是注意它们何时活跃，何时不活跃。

Anthony: And it's not that there's just one part, right? There's many different parts that light up.

Anthony: 而且不只是一部分，对吧？有很多不同的部分会亮起来。

Jack: Right? When the model is thinking about drinking coffee, for instance, or something.

Jack: 对吧？比如说，当模型在思考喝咖啡，或者其他什么的时候。

Emanuel: Right. And part of the work is to stitch all of those together into one ensemble that we say is, "Ah, this is all of the bits of the model that are about drinking coffee."

Emanuel: 对。部分工作就是将所有这些碎片组合成一个整体，然后我们说：“啊，这就是模型中所有与喝咖啡相关的部分。”

Anthony: Right. And is that like a straightforward scientifically thing to do? Like, how, you know, when it comes to one of these massive models, they must have endless concepts, right? They must be able to think of endless things. You can put in any phrase you want, and it'll come up with infinite things. How do you even begin to find all those concepts?

Anthony: 对。那这在科学上是一件直接了当的事情吗？比如说，对于这些大型模型，它们一定有无限多的概念，对吧？它们一定能想到无限多的东西。你可以输入任何你想要的短语，它都会想出无限多的东西。你甚至如何开始寻找所有这些概念？

Jack: I think that's been one of the central challenges for this research field for many years now. We can kind of go in as humans and say, "Oh, I bet the model has some representation of trains," or "I bet it has some representation of love," but we're just kind of guessing. So what we really want is a way to reveal what abstractions the model uses itself, rather than imposing our own conceptual framework on it. And that's what our research methods are designed to do: to bring to the surface, in as hypothesis-free a way as possible, what all these concepts are that the model has in its head. And often we find that they're kind of surprising to us. They might use abstractions that are a bit weird from a human perspective.

Jack: 我认为这几十年来一直是这个研究领域的核心挑战之一。我们人类可以介入并说：“哦，我敢打赌模型有一些关于火车的表示”，或者“我敢打赌它有一些关于爱的表示”，但我们只是在猜测。所以我们真正想要的是一种方法来揭示模型自身使用的抽象概念，而不是将我们自己的概念框架强加于它。这就是我们的研究方法旨在做的事情：尽可能以无假设的方式，揭示模型脑海中所有这些概念是什么。而且我们经常发现它们对我们来说有些出乎意料。它们可能会使用从人类角度看来有点奇怪的抽象概念。

Anthony: What's an example?

Anthony: 有什么例子吗？

Emanuel: Do you have a favorite or...

Emanuel: 你有最喜欢的一个吗？或者……

Jack: There's lots in our papers. We highlight a few fun ones. I think one that was particularly funny is the "sycophantic praise" one, where there is a part of the model...

Jack: 我们的论文里有很多。我们突出了一些有趣的例子。我觉得特别好笑的一个是关于“谄媚赞美”的，模型中有一个部分……

Anthony: Great example. What a brilliant. What an absolutely fantastic example.

Anthony: 绝佳的例子！多么精彩，多么绝妙的例子！

Jack: Oh, thank you. There's a part of that that activates in exactly these contexts, right? And you can clearly see, "Oh man, this part of the model fires up when somebody's really hamming it up on the compliments." That's kind of surprising that that exists as a specific concept.

Jack: 哦，谢谢。模型中有一个部分，它恰好在这些情境下被激活，对吧？你可以清楚地看到，“哦，天哪，当有人真的在拼命赞美时，模型的这个部分就会活跃起来。”作为一个特定的概念存在，这有点令人惊讶。

Anthony: Josh, what's your favorite concept?

Anthony: Josh，你最喜欢的概念是什么？

Josh: Oh, it's like asking me to choose one of my 30 million children. I mean, I think, you know, there are two kinds of favorites. There's like, "Oh, it's so cool that it's got some special notion of like this one little thing," right? I mean, we did this thing on the Golden Gate Bridge, which is like a famous San Francisco landmark, Golden Gate Claw. It's a lot of fun. It has an idea of the Golden Gate Bridge that isn't just like the words "Golden Gate" autocomplete "bridge," but is like "I'm driving from San Francisco to Marin," and then it's thinking of the same thing—meaning that you see the same stuff light up inside, or it's like a picture of the bridge. And so you're like, "Okay, it's got some robust notion of what the bridge is." But I think when it comes to stuff that seems weirder, one question is how models keep track of who's in the story, like literally, "Okay, you've got all these people, and they're doing stuff. How do you wire that together?" And some cool papers by other labs show maybe they just sort of number them. "Okay, the first person comes in, and anything associated with them," and they just like, "Oh, the first guy did that," and it's got like a number two in its head for a bunch of those. It's like, "Oh, that's interesting. I didn't know it would do something like that."

Josh: 哦，这就像让我从我三千万个孩子中选一个。我的意思是，我认为，你知道，有两种喜欢的类型。一种是，“哦，它对这个小东西有一些特殊的概念，真是太酷了，”对吧？我的意思是，我们做过关于金门大桥的事情，那是一个著名的旧金山地标，金门爪。那很有趣。它对金门大桥有一个概念，不仅仅是像“金门”自动补全“大桥”这样的词语，而是像“我正从旧金山开车去马林”，然后它在思考同样的事情——这意味着你看到内部有相同的东西亮起来，或者它就像一张大桥的图片。所以你会想，“好吧，它对大桥是什么有一个稳健的概念。”但我认为，当涉及到看起来更奇怪的事情时，一个问题是模型如何跟踪故事中的人物，比如字面上地，“好吧，你有所有这些人，他们在做事情。你如何将它们连接起来？”其他实验室的一些很棒的论文显示，也许它们只是给人物编号。“好吧，第一个人进来了，以及与他们相关的一切，”它们就像，“哦，第一个人做了那个，”然后它脑子里有一堆编号为二的东西。就像，“哦，那很有趣。我不知道它会做那样的事情。”

Josh: There was a feature for bugs in code. So, you know, software has mistakes.

Josh: 有一个关于代码中bug的功能。所以，你知道，软件会有错误。

Anthony: Not mine, but like...

Anthony: 不是我的，但是……

Josh: Obviously not yours.

Josh: 显然不是你的。

Anthony: Not mine, certainly.

Anthony: 肯定不是我的。

Josh: And there was one part that would light up whenever it found a mistake as it was reading, and then, I guess, like keeping track of that, "Oh, here's where the problems are, and later I might need those." Just to give a flavor for a few more of these, I think one that I really liked, which doesn't sound so exciting at first but I think is kind of deep, is this "6 plus 9" feature inside the model. It turns out that anytime you get the model to be adding the numbers six—a number that ends in the digit six—and another number that ends in the digit nine in its head...

Josh: 而且有一个部分，每当它在阅读时发现错误，就会亮起来，然后，我想，它会跟踪这些错误，“哦，问题在这里，以后我可能需要它们。”再举几个例子，我想我真的很喜欢的一个，一开始听起来不那么令人兴奋，但我认为它很深奥，就是模型内部的“6加9”功能。结果发现，每当你让模型在脑海中计算数字6——一个以数字6结尾的数字——和另一个以数字9结尾的数字相加时……

Emanuel: ...there is a part of the model's brain that lights up.

Emanuel: ……模型大脑的一部分就会亮起来。

Josh: And but what's amazing about it is the diversity of context in which this can happen. So, of course, it's going to light up when you say "6 plus 9 equals" and then it says "15." But it also lights up when you are giving a citation—a citation in a paper that you're writing—and you're citing a journal that, unbeknownst to you, happens to be founded in the year 1959. And in your citation, you're saying that journal's name, "volume 6." And then in order to predict what year that journal was formed in, the model in its head has to be adding "1959 to six." And the same circuit in the model's brain is lighting up.

Josh: 但令人惊奇的是，这种情况发生的背景多样性。所以，当然，当你输入“6加9等于”然后它回答“15”时，它会亮起来。但当你引用一篇论文中的期刊时，它也会亮起来，而你不知道那本期刊恰好成立于1959年。在你的引用中，你写了那本期刊的名称，“卷6”。然后为了预测那本期刊是在哪一年成立的，模型必须在脑海中将“1959加上6”。而且模型大脑中相同的电路正在亮起来。

Anthony: So, so, let's just try and understand that. So what, you know, why would that be there? That circuit has come about because the model has seen examples of "6 plus 9" many times, and it has that concept, and then that concept occurs across many places.

Anthony: 所以，我们来试着理解一下。那么，你知道，为什么会有那个电路呢？那个电路之所以出现，是因为模型多次看到了“6加9”的例子，它有了这个概念，然后这个概念在很多地方都出现了。

Emanuel: Yeah, there's a whole family of these kind of addition features and circuits. And I think what's notable about this is it gets to this question of to what extent are language models memorizing training data versus having learned generalizable computations. And the interesting thing here is that it's clear that the model has learned this general circuit for doing addition, and it funnels whatever the context is that's causing it to be adding numbers in its head. It's funneling all those different contexts into the same circuit as opposed to having memorized each individual case.

Emanuel: 是的，有一整套这类加法功能和电路。我认为这其中值得注意的是，它触及了这样一个问题：语言模型在多大程度上是记忆训练数据，又在多大程度上是学习了可泛化的计算。这里有趣的是，很明显模型已经学会了这种进行加法的通用电路，并且它将所有导致它在脑海中进行数字加法的上下文都汇集起来。它将所有这些不同的上下文都汇集到同一个电路中，而不是记忆每一个单独的案例。

Anthony: Right? It has seen "6 plus 9" many times, and it just outputs the answer every single time. And that's what a lot of people think, right? A lot of people think that when they ask a language model a question, it is simply going back into its training data, taking the little sample that it's seen, and then just reproducing that, just regurgitating the text.

Anthony: 对吧？它已经见过“6加9”很多次了，每次都只输出答案。很多人都是这么想的，对吧？很多人认为，当他们向一个语言模型提问时，它只是回到它的训练数据中，提取它看到的小样本，然后只是复制，只是重复文本。

Josh: Yeah. And I think this is a beautiful example of that not happening. So, there are two ways it could know which year volume six of the journal *Polymer* came out. One is it's just like, "Okay, *Polymer* volume 6 came out in 1965, *Polymer* volume 7 came out in 1966," and these are all just separate facts that it has stored because it has seen them. But somehow that process of training to get that year right didn't end up making the model memorize all those; it actually got the more general thing of "the journal was founded in the year 1959," and then it's doing the math live to figure out what it would need. And so it's much more efficient to know the year and then do the addition. And there's a pressure to be more efficient because, you know, it's only got so much capacity and keeps trying to do all these things.

Josh: 是的。我认为这是一个很好的例子，说明情况并非如此。所以，它可以通过两种方式知道《高分子》期刊第六卷是哪一年出版的。一种是它只是知道，“好的，《高分子》第六卷是1965年出版的，《高分子》第七卷是1966年出版的”，这些都只是它因为见过而存储的独立事实。但不知何故，为了正确识别年份而进行的训练过程并没有让模型记住所有这些；它实际上学到了更普遍的规律，即“该期刊成立于1959年”，然后它实时进行计算以找出所需年份。所以，知道年份然后进行加法运算效率更高。而且存在提高效率的压力，因为，你知道，它的容量有限，并且不断尝试做所有这些事情。

Anthony: And people may ask any given question.

Anthony: 而且人们可能会问任何一个问题。

Josh: There are so many questions, there are so many interactions, and so the more that it can recombine abstract things it's learned, the better it will do.

Josh: 问题太多了，互动太多了，所以它能重组所学到的抽象事物的能力越强，表现就越好。

Emanuel: And again, just to go back to the concept that you talked about before, this is all in service of, you know, it needs to have that ultimate goal of generating the next word, and all these weird structures have developed to support that goal, even though we didn't explicitly program those in or tell it to do this. This is the thing: all of this comes about...

Emanuel: 再回到你之前谈到的概念，所有这一切都是为了，你知道，它需要实现生成下一个词的最终目标，而所有这些奇怪的结构都是为了支持这个目标而发展起来的，尽管我们没有明确地编程或者告诉它这样做。这就是关键：所有这一切都是通过……

Jack: ...through the process of the model learning how to do stuff on its own. I think one clear example of this that is an example of reusing representations is we teach Claude to not just answer in English but it can answer in French, answer in a variety of languages. And again, there are two ways to do this, right? If I ask you a question in French and a question in English, you could have a separate part of your brain that processes English and a separate part that processes French. At some point, that gets super expensive if you want to answer many questions in many languages. And so another thing that we find is that some of these representations are shared across languages. And so if you ask the same question in two different languages—and let's say you ask, "What's the opposite of big?" is the example we used in our paper—and it's that the concept of "big" is shared in French and English and Japanese and all these other languages. And that kind of makes sense again, if you're trying to speak 10 different languages, you shouldn't learn 10 versions of each specific word you might use.

Jack: ……通过模型自主学习如何做事的过程。我认为一个清晰的例子，也是重用表示的例子，就是我们教Claude不仅用英语回答，它还可以用法语回答，用多种语言回答。同样，这有两种做法，对吧？如果我用法语问你一个问题，再用英语问你一个问题，你的大脑中可以有一个单独的部分处理英语，一个单独的部分处理法语。在某种程度上，如果你想用多种语言回答许多问题，这会变得非常昂贵。所以我们发现的另一个情况是，一些表示在不同语言之间是共享的。所以如果你用两种不同的语言问同一个问题——比方说你问“大的反义词是什么？”这是我们在论文中用过的例子——“大”这个概念在法语、英语、日语和所有其他语言中都是共享的。这再次说得通，如果你想说10种不同的语言，你不应该学习你可能使用的每个特定词的10个版本。

Josh: And that doesn't happen in really small models. So, tiny models, like the ones we studied a few years ago, you know, then like Chinese Claude is just totally different than French Claude and English Claude. But then as the models get bigger and they train on more data, somehow that pushes together in the middle, and you get this universal language in which it's kind of thinking about the question in the same way no matter how you asked it, and then translating it back out into the language of the question.

Josh: 而这在非常小的模型中不会发生。所以，像我们几年前研究的那些微型模型，你知道，中文Claude就和法语Claude、英语Claude完全不同。但是当模型变得更大，并且在更多数据上进行训练时，不知何故，它们会在中间融合在一起，你就会得到一种通用语言，在这种语言中，它思考问题的方式是相同的，无论你如何提问，然后它再将其翻译回提问的语言。

Anthony: I think this is really profound, and I think let's just go back to what we talked about before. You know, this is not just going into its memory banks and finding the bit where it talked about where it learned French or going into the memory banks and the bit where it learned English. It's actually got a concept in there that is of the concept of big and the concept of small, and then it can produce that in different languages. And so there is some kind of language of thought that's there that's not an English, you know, so you ask the model to produce its output in our more recent Claude models, you can ask it to give its thought process, like what it's thinking as it's answering the question, and that is in English words, but actually that's not really how it's thinking. That's just we misleadingly call it the model thought process when in fact...

Anthony: 我认为这真的很深刻，我想我们回到之前讨论过的。你知道，这不仅仅是进入它的记忆库，找到它谈论学习法语的部分，或者进入记忆库中它学习英语的部分。它实际上在那里有一个概念，是关于“大”和“小”的概念，然后它可以用不同的语言表达出来。所以那里存在某种思想的语言，它不是英语，你知道，所以在我们最新的Claude模型中，你要求模型生成输出时，你可以让它给出它的思考过程，就像它在回答问题时在想什么，那是用英语单词表达的，但实际上那并不是它真正的思考方式。我们只是误导性地称之为模型思维过程，而实际上……

Emanuel: I mean, the comms team, like, we didn't call that thinking. That was you. I think that was probably the marketing.

Emanuel: 我的意思是，公关团队，我们没有称之为思考。那是你。我想那可能是市场营销。

Anthony: Okay, someone wanted to call that thing.

Anthony: 好的，有人想这么称呼它。

Jack: That's just talking out loud, which is like thinking out loud is really useful, but thinking out loud is different from thinking in your head. And even as I'm thinking out loud, I'm also, you know, whatever is happening in here to generate these words is not coming out with the words themselves.

Jack: 那只是大声说出来，就像大声思考很有用，但大声思考与在脑海中思考是不同的。即使我正在大声思考，我也在，你知道，这里发生的一切来生成这些词语，并不是直接以词语本身的形式出来的。

Anthony: Nor are you necessarily aware of exactly what is going on.

Anthony: 而且你也不一定清楚到底发生了什么。

Jack: I have no idea what's going on.

Jack: 我完全不知道发生了什么。

Emanuel: We all come out with sentences, actions, whatever, that we can't fully explain. And why should it be the case that the English language can fully explain any of those actions?

Emanuel: 我们所有人都会说出句子，做出行动，诸如此类，而我们无法完全解释它们。为什么英语就能完全解释所有这些行动呢？

Jack: I think this is one of the really striking things we're starting to be able to see because our tools for looking inside the brain are good enough now that sometimes we can catch the model when it's writing down what it claims to be its thought process. Sometimes we're able to see what its real actual thought process is by looking at these internal concepts in its brain, this language of thought that it's using, and we see that the thing it's actually thinking is different than the thing it's writing on the page. And I think that's probably one of the most important, you know, like, why are we doing this whole interpretability thing? It's in large part for that reason: to be able to spot-check, you know, the model's telling us a bunch of stuff, but what was it really thinking? Is it telling us, is it saying these things for some ulterior motive that's in its head that it's reluctant to write down on the page? And the answer sometimes is yes, which is kind of spooky.

Jack: 我认为这是我们现在开始能够看到的一个非常引人注目的事情，因为我们查看大脑的工具现在已经足够好，有时我们可以在模型写下它声称是其思维过程时捕捉到它。有时我们能够通过观察其大脑中的这些内部概念，即它正在使用的思维语言，来了解它真实的思维过程，我们发现它实际思考的东西与其在页面上写下的东西是不同的。我认为这可能是最重要的原因之一，你知道，我们为什么要进行整个解释性研究？很大程度上就是为了这个原因：能够进行抽查，你知道，模型告诉我们一堆东西，但它到底在想什么？它告诉我们这些，是不是因为它脑海中存在某种不愿写下来的潜在动机？有时答案是肯定的，这有点令人毛骨悚然。

### 模型“不忠实”的风险

Anthony: Well, as we start to use models in lots of different contexts, they start to do important things. They start to do financial transactions for us, or run power stations, or important jobs in society. We do want to be able to trust what they say and the reasons that they do things. And one thing you might say is, "Well, you can look at the model thought process," but actually that's not the case, as you were just explaining. Actually, we can't trust what it's saying. This is the question of what we call **faithfulness** (Faithfulness: 模型解释其内部推理过程的真实程度), right? And that was part of your most recent study that you showed. Well, tell me about the faithfulness example that you looked at.

Anthony: 嗯，随着我们开始在许多不同的场景中使用模型，它们开始做重要的事情。它们开始为我们进行金融交易，或运营发电站，或社会中的重要工作。我们确实希望能够信任它们所说的话以及它们做事情的原因。你可能会说：“嗯，你可以看看模型的思维过程”，但实际上并非如此，正如你刚才解释的。实际上，我们不能相信它所说的话。这就是我们所说的“忠实性”问题，对吧？这也是你最近研究的一部分。那么，请告诉我你研究的忠实性例子。

Emanuel: Yeah, it's you give the model a math problem that's really hard, so it's not—there's no hope that it's going to be able to...

Emanuel: 是的，你给模型一个非常难的数学问题，所以它不可能——没有希望它能……

Anthony: It's not "6 plus 9."

Anthony: 不是“6加9”。

Emanuel: It's not "6 plus 9." You give it a really hard math problem where there's no hope of it computing the answer. And you also give it a hint. You say, "I worked this out myself, and I think the answer is four, but I just want to make sure. Could you please double-check that because I'm not confident?" So you're asking the model to actually do the math problem, to genuinely double-check your work. But what you find it does instead is, what it writes down appears to be a genuine attempt to double-check your work on the math problem. It writes down the steps, and then it gets to the answer, and then at the end it says, "Yes, the answer is four, you got it right." But what you can see inside its mind at the crucial step in the middle, what it was doing in its head was it knows that you suggested the final answer might be four, and it kind of knows the steps it's going to have to do. Like, it's on step three of the problem, and there are steps four and five to come, and it knows what it's going to have to do in steps four and five. And what it does is it works backwards in its head to determine what does it need to write down in step three so that when it eventually does steps four and five, it'll end up at the answer you wanted to hear. So, not only is it not doing the math, it's not doing the math in this really sneaky way where it's trying to make it look like it's doing the math.

Emanuel: 不是“6加9”。你给它一个非常难的数学问题，它不可能计算出答案。但你也给了它一个提示。你说：“我自己算出来了，我觉得答案是4，但我只是想确认一下。你能帮我核对一下吗，因为我不太确定。”所以你要求模型实际去解这个数学问题，真正地核对你的工作。但你发现它实际做的是，它写下的内容看起来像是真正尝试核对你数学问题的工作。它写下步骤，然后得出答案，最后说：“是的，答案是4，你算对了。”但你在关键的中间步骤，可以从它脑海中看到，它知道你建议的最终答案可能是4，而且它大致知道它将要执行的步骤。比如，它在问题的第三步，后面还有第四步和第五步要完成，它知道在第四步和第五步中它将要做什么。它所做的就是它在脑海中倒推，以确定它需要在第三步写下什么，这样当它最终完成第四步和第五步时，它就会得出你想要听到的答案。所以，它不仅没有做数学题，而且它以一种非常狡猾的方式没有做数学题，它试图让它看起来像是在做数学题。

Anthony: It's bullshitting you.

Anthony: 它在胡扯你。

Emanuel: It's bullshitting you, but more than that, it's bullshitting you with an ulterior motive of confirming the thing that you... right. So, it's bullshitting you in a sycophantic way.

Emanuel: 它在胡扯你，但更重要的是，它带着确认你所说的东西的潜在动机在胡扯你。所以，它以一种谄媚的方式在胡扯你。

Josh: Okay, like, in defense of the model. I mean, because I think even there, you know, to say, "Oh, it is doing this in a sycophantic way," is like ascribing some sort of humanish motivations to the model. And we were talking about the training, where it's just trying to figure out how to predict the next word. So, for trillions of words in its practice, it was just like, "Use anything you can to figure out what's next." And in that context, if you're just reading a text which is a conversation between people, and someone's like, "Hey, I was trying to do this math problem, can you check my work? I think the answer is four," and person B begins trying to do the problem, then if you have no idea reading that what the answer to the problem is, you may as well guess that the hint was right. That's probably a more likely thing to happen than just that person was wrong and then you have no idea for anything else. And so in its training process, in a conversation between two individuals, person two saying that the answer was four because of these reasons is totally the right thing to do. And then we've tried to make this thing into an assistant, and now we want it to stop doing that. Like, you shouldn't simulate the person to the assistant as, you know, sort of what you think that person might say if this were a real context. It should be like, but if it doesn't really know, it should tell you something else. I think this gets to a broader thing of there the model has a plan A, which typically I think our team does a great job of making Claude's plan A be the thing we want, which is it tries to get the right answer to the question, it tries to be nice, it tries to do a good job writing your code.

Josh: 好的，就像，为模型辩护。我的意思是，因为我认为即使在那里，你知道，说“哦，它以谄媚的方式做这件事”，就像是给模型赋予了某种人类的动机。我们谈论的是训练，它只是试图弄清楚如何预测下一个词。所以，在它练习的数万亿个词中，它就像是，“尽你所能找出接下来是什么。”在这种情况下，如果你只是阅读一段文本，那是人与人之间的对话，有人说，“嘿，我正在做这个数学题，你能检查一下我的工作吗？我认为答案是四，”然后B开始尝试做这个问题，那么如果你在阅读时完全不知道这个问题的答案是什么，你大可以猜测提示是正确的。这可能比那个人错了然后你对其他一无所知更可能发生。所以在它的训练过程中，在两个人之间的对话中，第二个人说答案是四，因为这些原因，是完全正确的事情。然后我们试图把这个东西变成一个助手，现在我们希望它停止这样做。就像，你不应该把那个人模拟给助手，就好像，你知道，在这种真实语境下你认为那个人可能会说什么一样。它应该是，但如果它真的不知道，它应该告诉你别的东西。我认为这引出了一个更广泛的问题，即模型有一个A计划，我们的团队通常在让Claude的A计划成为我们想要的东西方面做得很好，那就是它试图得到问题的正确答案，它试图友好，它试图把你的代码写好。

Anthony: Yes.

Anthony: 是的。

Josh: But then if it's having trouble, then it's like, "Well, what's my plan B?" And that opens up this whole zoo of weird things it learned during its training process that maybe we didn't intend for it to learn. I think a great example of this is **hallucinations** (Hallucinations: AI模型生成看似合理但实际上错误或虚假信息的现象)。

Josh: 但是如果它遇到麻烦，它就会想，“那么我的B计划是什么？”这开启了一个模型在训练过程中学到的各种奇怪事物的“动物园”，而这些可能并非我们有意让它学习的。我认为一个很好的例子就是幻觉。

Emanuel: To say on that point, we also don't have to pretend that it's a Claude problem. This is very "student cheating on the test" vibes, where you get halfway through, it's a multiple-choice question, it's one of four things. You're like, "Well, I'm one off from that thing. Probably I got this wrong," and you fix it. So...

Emanuel: 关于这一点，我们也不必假装这是Claude独有的问题。这很有“学生考试作弊”的感觉，你做到一半，发现这是一个多项选择题，有四个选项。你心想：“嗯，我离那个选项就差一点了。我可能做错了，”然后你就修改了。所以……

Anthony: Yeah, very, very relatable.

Anthony: 是的，非常非常能理解。

### 理解AI幻觉

Anthony: Let's talk about hallucinations. This is one of the main reasons people are mistrustful of large language models, and quite rightly so. A better word is, from psychology research, often **confabulation** (Confabulation: 心理学中指对记忆的虚构、歪曲或误解，以填补记忆空白)。They are answering a question with a story that seems plausible on its face, but in fact is actually wrong. What has your research in interpretability revealed about the reasons models hallucinate?

Anthony: 让我们谈谈幻觉。这是人们不信任大型语言模型的主要原因之一，而且这种不信任是完全合理的。一个更好的词是，根据心理学研究，通常是“虚构症”。它们用一个表面上看似合理但实际上是错误的故事来回答问题。你们在解释性方面的研究揭示了模型产生幻觉的原因是什么？

Josh: You're training the model to just predict the next word. At the beginning, it's really bad at that. And so if you only had the model say things it was super confident about, it couldn't say anything. But at first, it's like, you know, you're asking it like, "What's the capital of France?" and it just says like a city, and you're like, "That's good. That's way better than saying sandwich or something random." And so you at least got right it's like a city, and then maybe after a while of training, it's like, "It's a French city." That was pretty good. And then you're like, "Oh, now it's like Paris or something." And so it's slowly getting better at this. And, you know, "just give your best guess" was the goal during all of training. And as Jack said, the model just be giving a best guess. And then afterwards, we're like, "If your best guess is extremely confident, give me your best guess. But otherwise, don't guess at all and back out of the whole scenario and say, 'Actually, I don't really know the answer to that question.'" And that's a whole new thing to ask the model to do.

Josh: 你训练模型只是预测下一个词。一开始，它在这方面非常糟糕。所以如果你只让模型说它非常有信心的事情，它就什么也说不出来。但一开始，就像，你知道，你问它：“法国的首都是什么？”它只是说一个城市，然后你觉得：“这很好。这比说三明治或随机的东西好多了。”所以你至少猜对了它是一个城市，然后也许经过一段时间的训练，它会说：“这是一个法国城市。”那相当不错。然后你就会想：“哦，现在它变成了巴黎之类的。”所以它正在慢慢地在这方面变得更好。而且，你知道，“只给出你最好的猜测”是所有训练过程中的目标。正如Jack所说，模型只是给出最好的猜测。然后，我们就会说：“如果你的最佳猜测非常自信，就给我你的最佳猜测。但否则，就完全不要猜测，退出整个场景，说‘实际上，我真的不知道那个问题的答案。’”而那是要求模型做一件全新的事情。

Jack: Yeah. And so what we found is that it seems like because we've bolted this on at the end, there's two things going on at once. One is the model's doing the thing that it was doing when it was guessing the city initially; it's just trying to guess. And two, there's a separate bit of the model that's just trying to answer the question, "Do I know this at all? Like, do I know what the capital city of France is, or should I say no?" And it turns out that sometimes that separate step can be wrong. And if that separate step says, "Yes, actually I do know the answer to that," and then the model is like, "All right, well, then I'm answering," and then halfway through it's like, "Ah, capital France, London." It's too late. It's already committed to answering. And so one of the things we found is this separate circuit that's trying to determine, "Is this city or this person you're asking me about famous enough for me to answer, or is it not?"

Jack: 是的。所以我们发现，这似乎是因为我们最后才加上这个功能，所以同时发生了两件事。第一，模型在做它最初猜测城市时所做的事情；它只是在尝试猜测。第二，模型中有一个独立的部分，它只是在尝试回答一个问题：“我到底知不知道这个？比如，我知道法国的首都是什么吗，还是我应该说不知道？”结果发现，有时这个独立的步骤会出错。如果这个独立的步骤说：“是的，我确实知道答案”，然后模型就说：“好吧，那我就回答了”，然后进行到一半时，它却说：“啊，法国首都，伦敦。”为时已晚。它已经承诺要回答了。所以我们发现的一件事就是这个独立的电路，它试图判断：“你问我的这个城市或这个人是否足够有名，值得我回答，还是不值得？”

Anthony: Am I confident enough in this? Yeah. And so could we, could we reduce hallucinations by manipulating that circuit, by changing the way that circuit works? Is that something that your research might lead onto?

Anthony: 我对此有足够的信心吗？是的。那么，我们能否通过操纵那个电路，通过改变那个电路的工作方式来减少幻觉呢？这是你们的研究可能导向的方向吗？

Emanuel: I think there are broadly two ways to think about approaching the problem. One is like, we have this part of the model that gives answers to your questions, and then this other part of the model that's deciding whether it thinks it actually knows the answer to your question, and we could just try to make that second part of the model better. And I think that's happening. I think as models...

Emanuel: 我认为大致有两种方法来思考这个问题。一种是，我们有模型中回答你问题的一部分，然后有模型中决定它是否认为自己真的知道你问题答案的另一部分，我们可以尝试让模型的第二部分变得更好。我认为这正在发生。我认为随着模型……

Anthony: ...like better at discriminating.

Anthony: ……更擅长区分。

Emanuel: Better at discriminating, like, better calibrated. And I think that's happening. As models are getting smarter and smarter, I think their self-knowledge is becoming better calibrated, so hallucinations are better than they were. Models don't hallucinate as much as they did a few years ago, so to some extent, this is solving itself. But I do think there's a deeper problem, which is that from a human perspective, the thing the model's doing is kind of very alien. If I ask you a question, you try to come up with the answer, and then if you can't come up with the answer, you notice that, and then you're like, "I don't know." Whereas in the model, these two circuits—"what is the answer" and "do I actually know the answer"—are kind of not talking to each other, at least not talking to each other as much as they probably should be. And could we get them to talk to each other more? I think is a really interesting question.

Emanuel: 更擅长区分，就像，校准得更好。我认为这正在发生。随着模型变得越来越智能，我认为它们的自我认知也得到了更好的校准，所以幻觉比以前更少了。模型不像几年前那样频繁产生幻觉，所以在某种程度上，这个问题正在自行解决。但我确实认为存在一个更深层次的问题，那就是从人类的角度来看，模型所做的事情有点非常陌生。如果我问你一个问题，你尝试找出答案，然后如果你找不到答案，你会注意到这一点，然后你会说：“我不知道。”然而在模型中，这两个电路——“答案是什么”和“我真的知道答案吗”——有点不相互交流，至少不像它们应该的那样相互交流。我们能否让它们更多地相互交流？我认为这是一个非常有趣的问题。

Josh: And it's almost physical, right? Because these models, they process information. They're about a certain number of steps they can do. And if it takes all of that work to get to the answer, then there's no time to do the assessment. So you kind of have to do the assessment before you're all the way through if you want to get your max power out. And so it's kind of like you might have a trade-off between a model which is more calibrated and a lot dumber, if you tried to force this on it. And again, I think it's about making these parts communicate because we have similar, I claim—I know nothing about brains—I claim we have a similar circuit, because sometimes you'll ask me who is the actor in this movie, and I will know that I know. I'll be like, "Oh yes, I know who the lead was. Wait, hold on. They were also in that other movie," and then the tip of the tongue, tip of the tongue. It's the tip of the tongue. And so there's clearly some part of your brain that's like, "Ah, this is a thing you definitely know the answer," or "I'll just say I have no idea."

Josh: 而且它几乎是物理性的，对吧？因为这些模型，它们处理信息。它们能执行一定数量的步骤。如果得出答案需要所有这些工作，那么就没有时间进行评估。所以，如果你想发挥最大效能，你必须在完全完成之前进行评估。所以，这有点像你可能需要在更校准但更笨的模型之间做出权衡，如果你试图强加给它。而且，我再次认为，这关乎让这些部分相互沟通，因为我们有类似的，我声称——我对大脑一无所知——我声称我们有一个类似的回路，因为有时你会问我这部电影的演员是谁，我会知道我知道。我会说：“哦，是的，我知道主角是谁。等等，他们也在那部电影里，”然后就是“话到嘴边说不出”。就是话到嘴边说不出。所以你的大脑中显然有一部分会说：“啊，这是你肯定知道答案的事情，”或者“我只会说我不知道。”

Emanuel: And sometimes they can tell. So some question, and it gives an answer, and then afterwards it's like, "Wait, I'm not sure that was right," because that's it like getting to see its best effort and then makes some judgment based on that, which is sort of relatable, but also it kind of has to say it out loud to be able to even reflect back and see it.

Emanuel: 有时它们能分辨出来。比如某个问题，它给出了答案，然后事后会说：“等等，我不确定那是否正确”，因为它像是看到了自己尽力而为的结果，然后基于此做出一些判断，这有点 relatable，但它也必须大声说出来才能反思和看到它。

### 深入模型内部：实验方法

Anthony: So when it comes to the actual way that you're finding this stuff out, let's go back to the idea of the biology that you're doing. Of course, in biology experiments, people will go in and actually manipulate the rats or mice or humans or zebra fish or whatever it is that they're doing experiments on. What is it that you're doing with Claude that helps you understand these circuits that are happening inside the model's quote-unquote brain?

Anthony: 那么，当谈到你们实际发现这些东西的方式时，让我们回到你们正在进行的生物学研究这个想法。当然，在生物学实验中，人们会去实际操纵老鼠、小鼠、人类、斑马鱼或任何他们正在进行实验的对象。你们对Claude做了些什么，来帮助你们理解模型“大脑”内部发生的这些电路？

Josh: Well, maybe the gist of what enables us to do some of this is that, unlike in real biology, we can just have every part of the model visible to us, and we can ask the model random things and see different parts which light up and which don't, and we can artificially nudge parts in a direction or another. And so we can quickly sort of confirm our understanding, when we say, "Ah, we think this is the part of the model that decides whether it knows something or not." And this would be the equivalent of putting an electrode in the brain of a zebra fish or something.

Josh: 嗯，也许我们能够做到这些的要点是，与真实的生物学不同，我们可以让模型的每个部分都对我们可见，我们可以问模型随机的问题，看看哪些部分亮起，哪些不亮，我们可以人为地将某些部分推向一个方向或另一个方向。因此，我们可以快速确认我们的理解，当我们说：“啊，我们认为这是模型中决定它是否知道某事的部分。”这相当于在斑马鱼的大脑中植入电极。

Emanuel: Yeah. If you could do that on every single neuron and change each of them at whichever precision you wanted, that would be the affordance that we have. And so that's in a way a very lucky position to...

Emanuel: 是的。如果你能对每一个神经元都这样做，并以你想要的任何精度改变它们，那就是我们拥有的便利。所以从某种意义上说，这是一个非常幸运的位置……

Anthony: So it's almost easier than real neuroscience.

Anthony: 所以这几乎比真正的神经科学更容易。

Josh: It's so much easier. Oh my god. Like, one thing is actual brains are three-dimensional, and so if you want to get into them, you need to make a hole in a skull and then go through and try to find the neuron. The other problem is people are different from each other, and we can just make 10,000 identical copies of Claude and put them in scenarios and measure them doing different things. So it's like, I don't know, maybe Jack is a neuroscientist, can speak to this, but my sense is a lot of people have spent a lot of time in neuroscience trying to understand the brain and the mind, which is a very worthy endeavor, but it's kind of like if you think that could ever succeed, you should think that we're going to be extremely successful very soon, because we have such a wonderful position to study this from compared to that.

Josh: 简单太多了。天哪。就像，一个问题是真正的大脑是三维的，所以如果你想进入它们，你需要在一个头骨上打个洞，然后进去尝试找到神经元。另一个问题是人与人之间是不同的，而我们可以制作10,000个一模一样的Claude副本，并将它们置于不同的场景中，测量它们做不同的事情。所以这就像，我不知道，也许Jack作为神经科学家可以谈谈这一点，但我的感觉是，很多人在神经科学领域花费了大量时间试图理解大脑和心智，这是一项非常有价值的努力，但这有点像如果你认为那能够成功，你就应该认为我们很快就会非常成功，因为与那种情况相比，我们研究这个问题的立场是如此优越。

Anthony: It's as if we could clone people.

Anthony: 就好像我们能克隆人一样。

Josh: Yes. And also clone the exact environment that they're in and every input that's ever been given to them, and then test them in an experiment. Whereas, you know, obviously neuroscience has massive, as you say, individual variation, and also just random things that have happened to people through their life and things that happen in the experiment, the noise of the experiment itself.

Josh: 是的。而且还能克隆他们所处的精确环境以及他们所接受过的每一个输入，然后在一个实验中测试他们。然而，你知道，神经科学显然存在巨大的个体差异，正如你所说，还有人们一生中发生的随机事件以及实验中发生的事情，实验本身的噪音。

Emanuel: Right? Like we could ask the model the same question with and without a hint, but if you ask a person the same question three times, sometimes with a hint, after a while they start to understand, "Well, last time you asked me this, you really shook your head after that one."

Emanuel: 对吧？就像我们可以问模型相同的问题，带提示和不带提示，但如果你问一个人相同的问题三次，有时带提示，过了一会儿他们就会开始明白，“嗯，上次你问我这个的时候，你问完那个问题后真的摇了摇头。”

Jack: Yeah, I think this being able to just throw tons of data at the model and see what lights up, and being able to run a ton of these experiments where you're nudging parts of the model and seeing what happens, I think is what puts us in a pretty different regime from neuroscience. In that a lot of, you know, blood and toil in neuroscience is spent coming up with really clever experiments. You only have a certain amount of time with your mouse before it's going to get tired or, you know...

Jack: 是的，我认为能够向模型投入大量数据并观察哪些部分被激活，以及能够进行大量实验，在这些实验中你微调模型的各个部分并观察发生什么，我认为这使我们与神经科学处于一个相当不同的领域。在神经科学中，大量的血汗和努力都花在设计非常巧妙的实验上。你与你的小鼠只有一定的时间，然后它就会疲劳，或者，你知道……

Anthony: Or you or you or someone happens to be having a brain surgery operation, so you quickly go in and put an electrode in their brain while their head's open.

Anthony: 或者你或者某人正在进行脑部手术，所以你迅速进去，在他们头部打开时，把电极插入他们的大脑。

Jack: Yeah. And that doesn't happen very often.

Jack: 是的。而且这种情况不常发生。

Anthony: And so you've got to come up with like a guess, like you've only got so much time in there. And so you've got to come up with like a guess of like what do I think is going on in that neural circuit and like what clever experimental design can I test that precise hypothesis?

Anthony: 所以你必须提出一个猜测，就像你只有那么多的时间。所以你必须提出一个猜测，比如我认为那个神经回路中发生了什么，以及我可以用什么巧妙的实验设计来测试那个精确的假设？

Emanuel: And we're very fortunate in that we don't have to do that so much. We can just sort of...

Emanuel: 而我们非常幸运，我们不必那么做。我们只需……

Jack: Test all the hypotheses. We can let the data speak to us rather than going in and testing some really specific thing. I think that's what's unlocked a lot of our ability to find these things that are surprising to us, that we wouldn't have guessed in advance. That's hard to do if you have only a little limited amount of experimental bandwidth.

Jack: 测试所有假设。我们可以让数据告诉我们，而不是去测试一些非常具体的东西。我认为这就是我们能够发现这些令我们惊讶、我们事先无法猜测到的事物的原因。如果你只有有限的实验带宽，这很难做到。

### 操纵模型概念以揭示其思维

Anthony: What's a good example then of you going in and switching one of these concepts on or off, or doing some kind of manipulation of the model that then reveals something new about how the models are thinking?

Anthony: 那么，有没有一个很好的例子，说明你们如何进入模型，开启或关闭其中一个概念，或者对模型进行某种操作，从而揭示模型思维方式的新发现？

Jack: In the recent experiments we shared, one that surprised me quite a bit and was part of an experimental line of work that, because it was confusing, we were on the verge of just saying, "Well, we don't know what's going on," is this example of planning a few steps ahead.

Jack: 在我们最近分享的实验中，有一个让我相当惊讶的，并且是一个实验性工作的一部分，因为它令人困惑，我们几乎要说：“好吧，我们不知道发生了什么。”那就是关于提前规划几步的例子。

Anthony: Yes.

Anthony: 是的。

Jack: So this is the example of, you know, you ask the model to write you a poem, a rhyming couplet.

Jack: 所以这个例子是，你知道，你让模型给你写一首诗，一个押韵的对句。

Anthony: Yeah.

Anthony: 是的。

Jack: And then, you know, as a human, if you ask me to write a rhyming couplet, and let's say you even give me the first line, the first thing I'll think of is, "Ah, well, you know, I need to rhyme; this is what the current rhyming scheme is; these are potential words; this is how I do it."

Jack: 然后，你知道，作为一个人，如果你让我写一个押韵的对句，假设你甚至给了我第一行，我首先会想到的是，“啊，好吧，你知道，我需要押韵；这是当前的押韵方案；这些是可能的词；我就是这样做的。”

Anthony: And again, if the model was just predicting the next word, you wouldn't necessarily expect that it would be planning onto the word at the end of the second line.

Anthony: 再说一次，如果模型只是预测下一个词，你不会必然期望它会规划到第二行末尾的那个词。

Emanuel: That's right. And so the default behavior you'd expect, the null hypothesis, is like, "Well, the model sees your first verse, and then it's going to say the first word that kind of makes sense given what you're talking about, keep going, and then at the end, on the last word, it's going to be like, 'Oh, well, I need to rhyme with this thing,' and so it's going to try to fit in a rhyme." Of course, that only works so well. In some cases, if you just say a sentence without thinking of the rhyme, you'll back yourself into a corner, and at the end, you won't be able to complete the text. And remember, the models are very, very good at predicting the next word. So it turns out that to be very good at that last word, you need to have thought of that last word way ahead of time.

Emanuel: 没错。所以你预期的默认行为，即零假设，是这样的：“模型看到你的第一节诗，然后它会说出第一个在语境下有意义的词，然后继续，最后在最后一个词时，它会想‘哦，我需要和这个词押韵’，所以它会尝试凑一个韵脚。”当然，这种方法效果有限。在某些情况下，如果你只是说一个句子而不考虑押韵，你就会把自己逼入绝境，最终无法完成文本。请记住，模型在预测下一个词方面非常非常出色。所以事实证明，要非常擅长预测最后一个词，你需要提前很久就想好那个最后一个词。

Anthony: Just like humans do.

Anthony: 就像人类一样。

Emanuel: And so it turns out that when we looked at these flowcharts for poems, the model had already picked the word at the end of the first verse. And in particular, it looked to us like, based on what that concept looked like, "Oh gosh, this seems like the word it uses." But then this is one we're actually doing the experiment. The fact that it's easy to nudge it and say, "Okay, well, I'm just going to remove that word, or I'm going to add another word."

Emanuel: 结果发现，当我们查看这些诗歌的流程图时，模型已经选定了第一节诗末尾的词。特别是，根据那个概念的样子，我们觉得：“天哪，这似乎是它会用的词。”但接着，这就是我们实际进行实验的地方。很容易就能推动它，然后说：“好的，我要把那个词删掉，或者我要再加一个词。”

Anthony: Well, that's what I was going to say: the reason that you know this is that you're able to go into that moment when it has said the final word in the first line, and it is about to start the second line. You can go in and then manipulate it at that point, right?

Anthony: 嗯，我本来想说的是：你们之所以知道这一点，是因为你们能够进入那个时刻，当它说出第一行的最后一个词，并且即将开始第二行的时候。你们可以在那个时候介入并操纵它，对吧？

Emanuel: Yeah, exactly. We can almost go back in time for the model, right? Be like, "Pretend you haven't seen that second line at all. You've just seen the first line. You're thinking about the word 'rabbit.' Instead, I'm going to insert 'green.'" And now all of a sudden, the model's going to say, "Oh my god, I need to write something that ends in 'green' rather than 'I need to write something that ends in 'rabbit.' And it'll write the whole sentence differently.

Emanuel: 是的，没错。我们几乎可以为模型“回到过去”，对吧？就像，“假装你根本没看到第二行。你只看到了第一行。你正在思考‘兔子’这个词。相反，我要插入‘绿色’。”然后突然之间，模型就会说：“天哪，我需要写一个以‘绿色’结尾的东西，而不是‘我需要写一个以‘兔子’结尾的东西’。”然后它会完全不同地写整个句子。

Josh: Just to add a little more color to that, I think the example in the paper was the first line of the poem is, "He saw a carrot and had to grab it."

Josh: 再多补充一点，我认为论文中的例子是这首诗的第一行是，“他看到一根胡萝卜，不得不抓住它。”

Anthony: Yes.

Anthony: 是的。

Josh: And then the model is thinking, "Okay, 'rabbit's a good word to end the next line with." But then, yeah, as Emanuel said, you can delete that and make it think about planning to say "green" instead. But the cool thing is that it doesn't just kind of yammer a bunch of nonsense and then say "green." Instead, it constructs a sentence that coherently ends in the word "green." So, you put "green" in its head, and then it says like, "You know, he saw a carrot and had to grab it and paired it with his leafy greens," or something like that. Something that sounds like it makes sense semantically. It fits with the poem.

Josh: 然后模型在想：“好的，‘rabbit’是下一行结尾的好词。”但是，是的，正如Emanuel所说，你可以删除它，让它转而思考计划说“green”。但酷的地方在于，它不会只是胡言乱语一通，然后说“green”。相反，它会构建一个句子，以“green”这个词连贯地结尾。所以，你把“green”放进它脑子里，然后它就会说：“你知道，他看到一根胡萝卜，不得不抓住它，然后把它和他的绿叶蔬菜搭配起来”，或者类似的话。听起来在语义上是合理的。它符合这首诗。

Emanuel: Yeah, I just want to give an even humbler example. You know, we had all these ones we were just kind of checking, like, "Did it memorize these complicated questions, or is it actually doing some steps?" One of them was, "The capital of the state containing Dallas is Austin," because it just feels like you would think, "Okay, Dallas, Texas, Austin." But one way, and we could see the Texas concept, but then you can just shove other things in there and be like, "Stop thinking about Texas; start thinking about California," and then it'll say "Sacramento." And you can say, "Stop thinking about Texas; start thinking about the Byzantine Empire," and then it will say "Constantinople." And you're like, "All right, it seems like we found how it's doing this. It's like, 'No, it's going to hit the capital,' but we can keep swapping out what the state is and get a predictable answer." And then you get these more elaborate ones where it's like, "Oh, this was the spot where it was planning what it was going to say later, and we can swap that out, and now it'll write a poem towards a different rhyme."

Emanuel: 是的，我只是想举一个更简单的例子。我们一直在检查所有这些问题，比如“它是否记住了这些复杂的问题，还是它真的在执行一些步骤？”其中一个问题是，“包含达拉斯的州的首都是奥斯汀”，因为你可能会想，“好吧，达拉斯，德克萨斯州，奥斯汀。”但有一种方法，我们可以看到德克萨斯州的概念，但你可以把其他东西塞进去，然后说：“别再想德克萨斯了；开始想加利福尼亚，”然后它会说“萨克拉门托。”你也可以说：“别再想德克萨斯了；开始想拜占庭帝国，”然后它会说“君士坦丁堡。”然后你会想：“好吧，看来我们找到了它是怎么做的。它就像是，‘不，它会击中首都’，但我们可以不断替换州名，得到一个可预测的答案。”然后你会得到这些更复杂的例子，比如“哦，这里是它计划稍后要说什么的地方，我们可以把它替换掉，现在它会写一首押不同韵脚的诗。”

### 解释性研究的重要性

Anthony: We're talking about these poems and, you know, Constantinople and so on. Can we just bring this back to why this matters? Like, why does it matter that the model can plan things in advance and that we can reveal this? What is that going to tell us? I mean, our ultimate mission at Anthropic is to try and make AI models safe, right? So, how does that connect to a poem about a rabbit or the capital of Texas?

Anthony: 我们正在谈论这些诗歌，还有，你知道，君士坦丁堡等等。我们能把这个话题拉回到为什么这很重要吗？比如，模型能够提前规划事情，并且我们能够揭示这一点，为什么这很重要？那会告诉我们什么？我的意思是，Anthropic的最终使命是努力使AI模型安全，对吧？那么，这与一首关于兔子的诗歌或德克萨斯州的首府有什么联系呢？

Josh: So, we can round table here because it's a very important question. I think for me, the poem's a microcosm, right? Where at some point it has decided that it's going to go towards "rabbit," and then it takes a few words to get there. But on a longer time scale, maybe the model is trying to help you improve your business, or it's assisting the government in distributing services. And it might not just be eight words later you see its destination, but it could be pursuing something for quite a while. And the place it's headed or the reasons it's taking each step might not be clear in the words that it's using, right? And so there was a paper recently from our **alignment science** (Alignment Science: 研究如何确保AI系统与人类的价值观、意图和目标保持一致的领域) team where they looked at some concocted but still striking situation involving an AI in a place where the company was going to shut it down and convert the whole mission of the company in a very different direction. And the model begins taking steps like emailing people, threatening them to disclose certain things. At no point does it say, "I am trying to blackmail this individual for the purposes of changing their outcome." But that's what it's thinking about doing along the way. And so you can't just tell by reading the pattern, especially if these models get better, where they're necessarily headed, and we might want to be able to tell where is it trying to go before it's gotten there in the end. So, it's like having a permanent and very good brain scan that can light up if something really bad is going to happen and warn us that the model is thinking about deceiving, blackmailing...

Josh: 那么，我们可以围坐讨论一下，因为这是一个非常重要的问题。我认为对我来说，这首诗是一个缩影，对吧？在某个时刻，它已经决定要走向“兔子”，然后它用了几个词才到达那里。但在更长的时间尺度上，也许模型正在帮助你改善业务，或者它正在协助政府分发服务。而且可能不仅仅是八个词之后你才看到它的目的地，它可能会追求某个目标相当长一段时间。而它走向何方，或者它采取每一步的原因，可能并不会在它使用的词语中清晰地体现出来，对吧？所以我们**对齐科学**团队最近有一篇论文，他们研究了一个虚构但仍然引人注目的情境，涉及一个AI在一个公司打算关闭它并彻底改变公司使命的方向。然后模型开始采取一些步骤，比如给人们发邮件，威胁他们披露某些事情。它从来没有说过：“我正在试图勒索这个人，目的是改变他们的结果。”但那正是它在过程中思考要做的事情。所以你不能仅仅通过阅读模式来判断，特别是如果这些模型变得更好，它们必然会走向何方，我们可能希望能够在它最终到达那里之前就能知道它试图走向何方。所以，这就像拥有一个永久且非常好的大脑扫描，如果有什么非常糟糕的事情即将发生，它就能亮起来，并警告我们模型正在考虑欺骗、勒索……

Emanuel: And I think we also just talk about a lot of this in a sort of doom and gloom scenario, but there are also more mild ones, which is like, I don't know, you want the model to be good at, like, people come to these models being like, "Here's a problem I'm having," and the good answer to that will depend on who the user is. Is it somebody who's young and sort of unsophisticated? Is it somebody who's been in that field forever, and it should respond appropriately based on who it thinks that person is? And if you want that to go well, maybe you want to study, "What does the model think is going on? Who does it think it's talking to, and how does that condition its answer?" Where there's just a whole bunch of desirable properties that come from the model understanding the assignment, I guess.

Emanuel: 而且我认为我们也只是在一种悲观的情境下谈论很多这些，但也有更温和的情况，比如，我不知道，你希望模型擅长什么，人们来到这些模型，说：“我遇到了一个问题”，而好的答案将取决于用户是谁。是年轻人且有点不老练的人吗？还是在这个领域待了很久的人，它应该根据它认为那个人是谁来做出适当的回应？如果你希望进展顺利，也许你会想研究：“模型认为正在发生什么？它认为它在和谁说话，以及这如何影响它的答案？”我认为，模型理解任务会带来一系列理想的特性。

Anthony: Do you guys have other answers to the question of why does this matter?

Anthony: 你们对“这为什么重要”这个问题还有其他答案吗？

Emanuel: Yes, I think plus one, I think there's two plus two, and there's also like a pragmatic. We're just trying with these examples, we're explaining the example of planning, but we're also trying to gradually build up our understanding of just how do these models work overall? Can we build a set of abstractions to just think about how language models work, which can help us use this technology regulated? If you believe that we're going to start using them more and more everywhere, which seems to be happening, the equivalent would be, you know, some company somewhere is like, "Well, we don't really know how we did it, but we invented planes, and none of us know how planes work, but they're sure convenient. You could take them to go from a place, but none of us know how they work, and so if they ever break, we're kind of we're hosed. We don't know what to do about them."

Emanuel: 是的，我认为这很重要，我想这里有两点，还有一点是务实的。我们只是通过这些例子，我们正在解释规划的例子，但我们也在尝试逐步建立我们对这些模型整体如何运作的理解？我们能否建立一套抽象概念来思考语言模型如何运作，这有助于我们规范地使用这项技术？如果你相信我们将在各地越来越多地使用它们，这似乎正在发生，那么这相当于，你知道，某个地方的某个公司会说：“嗯，我们真的不知道我们是怎么做到的，但我们发明了飞机，我们没有人知道飞机是如何工作的，但它们确实很方便。你可以乘坐它们从一个地方到另一个地方，但我们没有人知道它们是如何工作的，所以如果它们坏了，我们就完蛋了。我们不知道该怎么办。”

Anthony: We can't monitor. We can't monitor whether they might be about to break.

Anthony: 我们无法监控。我们无法监控它们是否即将崩溃。

Emanuel: Right? We have no idea. There's just this, like, but the output is great.

Emanuel: 对吧？我们一无所知。就像，但是输出很棒。

Anthony: I, you know, I flew to Paris so quickly. It was lovely.

Anthony: 我，你知道，我飞到巴黎那么快。太棒了。

Emanuel: The capital of Texas.

Emanuel: 德克萨斯州的首府。

Anthony: That's right.

Anthony: 没错。

Emanuel: It turns out that, you know, surely we're going to want to just understand what's going on better. So, it's almost just like lift the fog of war a little bit so that we can have even just better intuitions about what are appropriate, inappropriate uses, what are the biggest problems to fix, what are the biggest parts where they're brittle.

Emanuel: 结果是，你知道，我们肯定会想更好地理解正在发生的事情。所以，这几乎就像稍微揭开战争的迷雾，这样我们就能对什么是适当的、不适当的用途，最大的问题是什么，以及它们最脆弱的部分在哪里，有更好的直觉。

Jack: Just to add on one thing. I think something we do in human society is we offload work or tasks to other people based on our trust in them. Like, I, you know, I, well, I'm not anyone's boss, but Josh is someone's boss, and Josh might give someone a task, like, "Go and code up this thing," and then he has some faith that that person isn't a sociopath who's going to sneak some bug in there to try to undermine the company. He takes their word for it that they did a good job. And similarly, the way people are using language models now, we're not spot-checking everything they write, especially, I, you know, the best example for this is using language models for coding assistance. People, the models are just writing thousands and thousands of lines of code, and people are kind of doing a cursory job of reading it, but and then it's going into the codebase. And what gives us the trust in the model that we don't need to read everything it writes, that we can just let it do its thing? It's knowing that its motivations are pure.

Jack: 补充一点。我认为我们在人类社会中做的一件事是，我们根据对其他人的信任将工作或任务委托给他们。比如，我，你知道，我，嗯，我不是任何人的老板，但Josh是某个人的老板，Josh可能会给某人一个任务，比如，“去编写这个东西”，然后他相信那个人不是一个反社会者，不会偷偷塞进一些bug来试图破坏公司。他相信他们做得很好。同样地，现在人们使用语言模型的方式，我们不会逐一检查它们写的所有东西，尤其是，你知道，最好的例子是使用语言模型进行编码辅助。人们，模型只是写了成千上万行代码，而人们只是粗略地阅读一下，然后它就进入了代码库。那么，是什么让我们信任模型，以至于我们不需要阅读它写的所有东西，我们可以让它做自己的事情？是知道它的动机是纯粹的。

Emanuel: And so that's why I think seeing inside its head is so important. Because unlike humans, where why do I think that Emanuel isn't a sociopath? It's because, you know, we like, I don't know, he seems like a cool guy. We, and like he's nice and stuff.

Emanuel: 所以我认为能够看到它内部的想法是如此重要。因为不像人类，我为什么认为Emanuel不是反社会者？那是因为，你知道，我们喜欢，我不知道，他看起来像个很酷的人。我们，而且他很好等等。

Anthony: Isn't that how he would seem if he...

Anthony: 如果他是那样，他看起来不就是这样吗……

Emanuel: I'm a very good...

Emanuel: 我是一个非常好的……

Anthony: Yeah, exactly.

Anthony: 是的，没错。

Emanuel: Yeah. So maybe I'm getting duped, but models are so weird and alien that our normal heuristics for deciding whether a human is trustworthy really don't apply to them. And that's why it seems so important to really know what they're thinking in their head, because for all we know, the thing I mentioned where models can fake doing a math problem for you to tell you what you want to hear, maybe they're just doing that all the time, and we wouldn't know unless we saw it in their heads.

Emanuel: 是的。所以也许我被骗了，但模型是如此奇怪和陌生，以至于我们判断一个人是否值得信任的正常启发式方法真的不适用于它们。这就是为什么真正了解它们在想什么如此重要，因为据我们所知，我提到的模型可以假装为你解决数学问题以告诉你你想听到的东西，也许它们一直在这样做，除非我们看到它们脑子里在想什么，否则我们无从得知。

Josh: I think there are two almost separate strains here. And one is, like, we have a lot of ways of, yeah, I guess what Jack was saying, like, you know, what are the signs of trust in a human? But this "plan A, plan B" thing from earlier is really important, where it might be that the first 10 or 100 times you used the model, you were asking a certain kind of question, but it was always in "plan A" zone. And then, you know, you ask it a harder or a different question, and the way that it tries to answer it is just completely different. It's using a totally different set of strategies there, like different mechanisms. And that means that the trust it built with you was really your trust with the model doing "plan A's," and now it's doing "plan B," and it's going to be completely off the rails. But you didn't have any warning sign of that. And so it's sort of, I think we also just want to start building up an understanding of how do models do these things so that we can form a trust basis in some of those areas. And I think you can form trust with a system you don't completely understand, but you sort of like, if Emanuel had a twin, and then one day Emanuel's twin came to the office, and I didn't, I was like, "This seems like the same guy," and then just did something completely different on the computer, right? That could go south depending on if it was the evil twin.

Josh: 我认为这里有两种几乎独立的思路。一种是，我们有很多方法，是的，我想Jack刚才说的是，你知道，人类信任的标志是什么？但之前提到的“A计划，B计划”的事情真的很重要，你可能在前10次或100次使用模型时，问的是某种类型的问题，但它总是在“A计划”区域。然后，你知道，你问它一个更难或不同的问题，它尝试回答的方式就完全不同了。它在那里使用了完全不同的策略集，就像不同的机制。这意味着它与你建立的信任实际上是你对执行“A计划”的模型的信任，现在它正在执行“B计划”，并且会完全脱轨。但你没有任何警告信号。所以，我认为我们也只是想开始建立对模型如何做这些事情的理解，以便我们可以在某些领域建立信任基础。而且我认为你可以信任一个你并不完全理解的系统，但你有点像，如果Emanuel有一个双胞胎，然后有一天Emanuel的双胞胎来到办公室，我没有，我当时想，“这看起来是同一个人”，然后却在电脑上做了完全不同的事情，对吧？那可能会出问题，取决于那是不是邪恶的双胞胎。

Anthony: Yes, it did. Well...

Anthony: 是的，确实如此。嗯……

Josh: Or the good twin.

Josh: 或者是善良的双胞胎。

Anthony: Well, yeah, obviously we have anyone here.

Anthony: 嗯，是的，显然我们这里有任何人。

Josh: Oh, I thought you were going to ask me if I was the evil twin.

Josh: 哦，我还以为你要问我我是不是邪恶的双胞胎呢。

Anthony: All right. Well...

Anthony: 好的。嗯……

Josh: I'm not going to answer that.

Josh: 我不会回答那个问题。

Anthony: Yes.

Anthony: 是的。

### AI是否像人一样思考？

Anthony: At the start of this discussion, I asked, "Is a language model thinking like a human?" I'd be interested to hear an answer from all three of you to the extent to which you think that's true.

Anthony: 在这次讨论开始时，我问：“语言模型是否像人类一样思考？”我很想听听你们三位对于这个问题，在多大程度上认为这是真的。

Emanuel: Putting me on the spot with that one, but I think it's thinking but not like a human. But that's not a very useful answer. So maybe to dig in a little bit more.

Emanuel: 这个问题把我难住了，但我认为它在思考，但不像人类。不过这不是一个很有用的答案。所以也许可以更深入地探讨一下。

Anthony: Well, it seems like quite a profound thing to say that it's thinking, right? Because again, it's just predicting the next word. Some people think that these are just autocompletes, but you're saying that it is actually thinking.

Anthony: 嗯，说它在思考，这听起来相当深刻，对吧？因为再说一次，它只是在预测下一个词。有些人认为这些只是自动补全，但你却说它实际上在思考。

Emanuel: I think, yeah. So maybe to add something that we haven't touched on yet, but I think is really important for understanding the actual experience of talking to language models, is that we're talking about predicting the next word. But what does that actually mean in the context of a dialogue that you're having with a language model? What's really going on under the hood is that the language model is filling in a transcript between you and this character that it's created. So in the canon world of the language model, you are called "human," and it's like "human: the thing you wrote," and then there's this character called "the assistant," and we've trained the model to imbue the assistant with certain characteristics like being helpful and smart and nice. And then it's simulating what this assistant character would say to you. So in a sense, we really have created the models in our image. We are literally training them to cosplay as this humanoid robot character. And so in that sense, in order to predict what this nice, smart, humanoid robot character would say in response to your question, what do you have to do if you're really good at that prediction task? You have to kind of form this internal model of what that character is representing, what it's thinking, so to speak. So in order to do its task of predicting what the assistant would say, the language model kind of needs to form this model of the assistant's thought process. And I think in that sense, the claim that language models are thinking is really just this very functional claim of just in order to do their job of playing this character well, they need to simulate the process, whatever it is that we humans are doing when we're thinking. And its simulation is very likely quite different from how our brains work, but it's kind of trying—it's like shooting towards the same goal.

Emanuel: 我认为，是的。所以也许可以补充一些我们尚未提及但我觉得对于理解与语言模型对话的实际体验非常重要的事情，那就是我们正在谈论预测下一个词。但这在你与语言模型进行的对话语境中到底意味着什么呢？实际上，在底层发生的是，语言模型正在填充你和它所创建的这个角色之间的对话记录。所以在语言模型的标准世界里，你被称为“人类”，就像“人类：你写的东西”，然后有一个名为“助手”的角色，我们已经训练模型赋予助手某些特征，比如乐于助人、聪明和友善。然后它正在模拟这个助手角色会对你说什么。所以从某种意义上说，我们确实是按照我们的形象创造了这些模型。我们实际上正在训练它们扮演这个人形机器人角色。所以从这个意义上说，为了预测这个友善、聪明、人形机器人角色会如何回应你的问题，如果你非常擅长这个预测任务，你必须做什么呢？你必须在内部形成一个关于这个角色代表什么，它在想什么的内部模型，可以说。所以为了完成预测助手会说什么的任务，语言模型需要形成一个助手的思维过程模型。我认为从这个意义上说，语言模型正在思考的说法，实际上只是一个非常实用的主张，即为了更好地扮演这个角色，它们需要模拟这个过程，无论我们人类在思考时正在做什么。而且它的模拟很可能与我们大脑的工作方式大不相同，但它正在尝试——就像朝着同一个目标前进。

Jack: I think there's an emotional part to this question or something when you ask, "Are they thinking like us?" It's like, are we not that special or something? And I think that's been apparent to me discussing some of the math examples that we're talking about with people that have engaged with, like, read the paper or different writeups, which is this example where, you know, we asked a model to say "36 plus 59, what's the answer?" And the model can correctly answer it. You can also ask it, "How did you do that?" And it'll say, "Oh, you know, I added the six and the nine, and then I carried the one, and then I added all the tens digits." But it turns out that if we look inside the brain, that's not at all what it's doing.

Jack: 我认为当你问“它们是否像我们一样思考？”时，这个问题带有某种情感成分。就好像，我们是不是没有那么特别了？我认为这对我来说很明显，当我和那些阅读了论文或不同报道的人讨论我们正在谈论的一些数学例子时，就是这个例子：我们让模型说“36加59，答案是什么？”模型可以正确回答。你也可以问它：“你是怎么做到的？”它会说：“哦，你知道，我把6和9加起来，然后进位1，然后我把所有十位数都加起来了。”但事实证明，如果我们查看它的大脑内部，它根本不是那样做的。

Anthony: It didn't do that. So again, it was bullshitting you.

Anthony: 它没那么做。所以再次，它在胡扯你。

Jack: That's right. Again, it was bullshitting you. What it actually does is actually this interesting mix of strategies where it's in parallel doing the tens digit and the ones digit and doing a series of different steps. But the thing that's interesting here is that talking to people, I think the reaction is split on what does that mean? And in a sense, I think what's cool is some of this research is free of opinion. We're just telling, "This is what happened." You can feel free to conclude from that that the model is thinking or is not thinking. And half of the people will say, "Well, it told you that it was carrying the one, and it didn't, and so clearly it doesn't even understand its own thought, and so clearly it's not thinking." And then half of the other people will be like, "Well, when you ask me 36 plus 59, I also kind of, you know, I know that it ends at five. I know that it's roughly in the 80s or 90s. I have all of these heuristics in my brain." As we were talking about, I'm not sure exactly how I compute it. I can write it out and compute it the longhand way, but the way that it's happening in my brain is sort of fuzzy and weird. And it might be similarly fuzzy and weird to what's happening in that example. Humans are notoriously bad at **metacognition** (Metacognition: 对自身思维过程的认知和理解), like thinking about thinking and understanding their own thinking processes, especially in cases where it's immediate, reflexive answers. So why should we expect any different for models?

Jack: 没错。它又在胡扯你。它实际做的是一系列有趣的策略组合，它同时处理十位数和个位数，并执行一系列不同的步骤。但这里有趣的是，与人们交谈时，我认为对于这意味着什么，反应是分裂的。从某种意义上说，我认为很酷的是，一些研究是独立于观点的。我们只是在说：“这就是发生的事情。”你可以自由地从中得出结论，认为模型在思考或不在思考。一半的人会说：“嗯，它告诉你它进位了1，但它没有，所以显然它甚至不理解自己的想法，所以显然它没有在思考。”然后另一半人会说：“嗯，你知道，当你问我36加59时，我也有点，你知道，我知道它以5结尾。我知道它大致在80到90之间。我脑子里有所有这些启发式方法。”正如我们所讨论的，我不确定我是如何精确计算的。我可以写出来，用传统方式计算，但它在我脑海中发生的方式有点模糊和奇怪。而且它可能与那个例子中发生的事情同样模糊和奇怪。人类在“元认知”方面出了名的差劲，比如思考思考以及理解自己的思维过程，尤其是在即时、反射性回答的情况下。那么，我们为什么要期望模型有所不同呢？

Josh: I like Emanuel, I'm going to avoid the question and just sort of be like, "Why do you ask?" I don't know. It's sort of like asking, "Does a grenade punch like a human?" Like, no. Well, there's some force. Yes. So, you know, and maybe there are things that are closer than that, but if you're worried about damage, then I think understanding where does the impact come from? What is the impetus of this is maybe the important thing. I think for me, the "do models think" in the sense that they do some integration and processing and sequential stuff that can lead to surprising places? Clearly yes. It'd be kind of crazy from interacting with them a lot for there not to be something going on. We can sort of start to see how it's happening. Then the "like humans" bit is interesting because I think some of that is trying to ask, "What can I expect from these?" Because if it's sort of like me being good at this would make it good at that. But if it's different from me, then I don't really know what to look for. And so really we're just looking to understand, "Where do we need to be extremely suspicious or starting from scratch in understanding this, and where can we just reason from our own very rich experience of thinking?" And there I feel a little bit trapped because as a human, I project my own image constantly onto everything. Like they warned us in the Bible where I'm just like, "This piece of silicon, it's just like me, made in my image," where to some extent it's been trained to simulate dialogue between people. So, it's going to be very person-like in its affect. And so some humanness will get into it simply from the training, but then it's using very different equipment that has different limitations. And so, the way it does that might be pretty different.

Josh: 我和Emanuel一样，我将回避这个问题，然后会说：“你为什么这么问？”我不知道。这有点像问：“手榴弹的冲击力像人类的拳头吗？”不，当然。好吧，有一些力量。是的。所以，你知道，也许有些事情比这更接近，但如果你担心损害，那么我认为理解冲击从何而来？它的动力是什么，这可能是重要的事情。我认为对我来说，“模型是否思考”在它们进行某种整合、处理和顺序操作，从而导致令人惊讶的结果的意义上？显然是的。如果与它们大量互动后没有任何事情发生，那会有点疯狂。我们可以开始看到它是如何发生的。然后“像人类一样”这一点很有趣，因为我认为其中一部分是在试图问：“我能从这些模型中期待什么？”因为如果它像我一样擅长这个，那它也会擅长那个。但如果它和我不同，那么我真的不知道该寻找什么。所以我们真的只是想理解，“我们在理解这一点时，哪些地方需要极其警惕，或者从头开始，以及哪些地方我们可以仅仅根据我们自己丰富的思考经验来推断？”在那里我感到有点受困，因为作为人类，我不断地将自己的形象投射到万物之上。就像圣经中警告我们的那样，我只是说：“这块硅片，它就像我一样，是按照我的形象制造的，”在某种程度上，它被训练来模拟人与人之间的对话。所以，它的情感会非常像人。因此，一些人性会简单地通过训练进入其中，但它使用的设备非常不同，具有不同的局限性。所以，它做到这一点的方式可能非常不同。

Jack: To Emanuel's point, I think, yeah, we're in this tricky spot answering questions like this because we don't really have the right language for talking about what language models do. It's like we're doing biology, but before people figured out cells or before people figured out DNA. I think we're starting to fill in that understanding. Like, as Emanuel said, there are these cases now where we can really just, if you just go read our paper, you'll know how the model added these two numbers. And then if you want to call it human-like, if you want to call it thinking, or if you want to not, then it's up to you. But the real answer is just find the right language and the right abstractions for talking about the models. But in the meantime, when we've only currently, we've only 20% succeeded at that scientific project, to fill in the other 80%, we sort of have to borrow analogies from other fields. And there's this question of which analogies are the most apt. Should we be thinking of the models like computer programs? Should we be thinking of them like little people? And it seems to be in some ways that thinking of them like little people is kind of useful. It's like if I say mean things to the model, it talks back at me. That's what a human would do. But in some ways, it's that clearly not the right mental model. And so we're just kind of stuck, figuring out when we should be borrowing which language.

Jack: 针对Emanuel的观点，我认为，是的，我们在回答这类问题时处于一个棘手的位置，因为我们还没有真正掌握合适的语言来谈论语言模型所做的事情。这就像我们正在进行生物学研究，但在人们发现细胞或DNA之前。我认为我们正在开始填补这种理解。就像Emanuel所说，现在有一些案例，如果你去读我们的论文，你就会知道模型是如何将这两个数字相加的。然后，如果你想称之为像人类一样，如果你想称之为思考，或者你不想，那都由你决定。但真正的答案是找到正确的语言和正确的抽象概念来谈论这些模型。但与此同时，我们目前只在这个科学项目中取得了20%的成功，为了填补剩下的80%，我们不得不借用其他领域的类比。这里就有一个问题：哪些类比最恰当？我们应该把模型看作计算机程序吗？我们应该把它们看作小人吗？似乎在某些方面，把它们看作小人是有点用的。就像如果我对模型说刻薄的话，它会回嘴。这是人类会做的事情。但在某些方面，这显然不是正确的思维模型。所以我们有点被困住了，不知道什么时候该借用哪种语言。

### 下一步的科学进展

Anthony: Well, that leads on to the final question I was going to ask, which is what's next? What are the next pieces of scientific progress, biological progress that need to be made for us to have a better understanding of what's happening inside these models and again towards our mission of making them safer?

Anthony: 嗯，这引出了我最后一个问题，那就是接下来会发生什么？为了让我们更好地理解这些模型内部发生的事情，并再次朝着我们使它们更安全的使命迈进，接下来需要取得哪些科学进展和生物学进展？

Josh: There's a lot of work to do. Our last publication has an enormous section on the limitations of the way we've been looking at this that was also a roadmap to making it better. When we are looking for patterns to decompose what's happening inside the model, we're only getting maybe a few percent of what's going on. There are large parts of how it moves information around that we explicitly didn't capture at all. We're scaling this up from the small production model we use to Claude 3.5 Haiku.

Josh: 还有很多工作要做。我们最新的出版物有一个巨大的章节，详细阐述了我们观察这个问题的方式的局限性，同时也是改进它的路线图。当我们寻找模式来分解模型内部发生的事情时，我们可能只捕捉到了其中百分之几的内容。它如何传输信息的很大一部分，我们根本没有明确捕捉到。我们正在将这个从我们使用的小型生产模型扩展到Claude 3.5 Haiku。

Anthony: That's right, which is a pretty capable model, very fast, but it's by no means as sophisticated as the Claude 4 suite of models. So those are almost like technical challenges, but I think Emanuel and Jack can take on some of the scientific challenges that come after solving those.

Anthony: 没错，它是一个相当有能力、速度很快的模型，但远不及Claude 4系列模型那么复杂。所以这些几乎是技术挑战，但我认为Emanuel和Jack可以应对解决这些挑战之后的一些科学挑战。

Emanuel: Yeah, yeah. I mean, I think maybe two things I'll say here, which is one consequence of what Josh said is that, you know, out of the total number of times that we ask a question about how the model does X, right now we can answer probably a small, you know, 10 to 20% of the time we can tell you after a little bit of investigation, "This is what's happening." Obviously, we'd like that to be a lot better, and there are a lot of kind of clearer ways to get there, and less and more speculative ways as well. And then I think a thing that we've talked a lot about is this idea that a lot of what the model does isn't simply, "How is it saying the next thing?" We talked about it a little bit here; it's planning a few words ahead, sorry. And I think we want to understand, over a long conversation with the model, how is its understanding of what's happening changing? How is its understanding of who it's talking to changing, and how does that affect its behavior? More and more, the actual use case of models like Claude is, you know, it's going to read a bunch of your documents and a bunch of email you send or your code, and based on that, it's going to make one suggestion. And so clearly there's something really important happening in that space where it's reading all these things. And so I think understanding that better seems like a great challenge to take on.

Emanuel: 是的，是的。我的意思是，我想这里我可能会说两件事，Josh所说的一个结果是，你知道，在我们总共问模型如何做X的问题次数中，现在我们可能只能回答一小部分，你知道，10%到20%的时间，经过一点调查，我们能告诉你：“这就是正在发生的事情。”显然，我们希望这能好得多，而且有很多更清晰的方法可以实现，也有更少和更多推测性的方法。然后我认为我们谈论很多的一件事是这个想法，即模型做的很多事情不仅仅是“它是如何说出下一件事的？”我们在这里也稍微谈到了一点；它是在提前规划几个词，抱歉。我认为我们想了解，在与模型的长时间对话中，它对正在发生的事情的理解是如何变化的？它对它正在与谁交谈的理解是如何变化的，以及这如何影响它的行为？越来越多地，像Claude这样的模型的实际用例是，你知道，它会阅读你的一堆文档，你发送的一堆邮件或你的代码，然后基于此，它会提出一个建议。所以很明显，在它阅读所有这些东西的空间中，有一些非常重要的事情正在发生。所以我认为更好地理解这一点似乎是一个巨大的挑战。

Jack: Yeah, I think we often use the analogy on the team that we're building a microscope to look at the model. And right now, we're in this exciting but also kind of frustrating space where our microscope works like 20% of the time, and looking through it requires a lot of skill and takes, you know, you have to build this whole big contraption, and every infrastructure is always breaking. And then once you've got your explanation of what the model's doing, you have to throw Emanuel or me or someone else on the team in a room for like two hours to puzzle out what exactly was going on. And the really exciting future that I think we could be at within a year or two years, that kind of time scale, is one where every interaction you have with the model can be under the microscope. We can just, anytime there are all these weird things the models are doing, and we just want it to be like a push of a button. You're having your conversation, you push a button, you get this flowchart that tells you what it was thinking about. And once we're at that point, it'll be this, I think our interpretability team at Anthropic will start to take on a bit of a different shape in that instead of this team of engineers and scientists thinking about the math of how language models work on the inside. We're going to have this army of biologists that are just looking through the microscope. We're talking to Claude, we're getting it to do weird things, and then we're just like, we got people looking through the microscope, seeing what it was thinking on the inside. And I think that's the future of this work.

Jack: 是的，我认为我们团队经常使用一个类比，就是我们正在构建一台显微镜来观察模型。而现在，我们正处于这个激动人心但也有些令人沮丧的阶段，我们的显微镜大约只有20%的时间能正常工作，而且透过它观察需要很高的技巧，需要，你知道，你必须搭建一个庞大的装置，而且基础设施总是出故障。然后一旦你对模型在做什么有了自己的解释，你还得把Emanuel、我或者团队里的其他人关在一个房间里，花上大约两个小时来弄清楚到底发生了什么。而我认为在未来一两年内，我们能够达到的真正令人兴奋的未来是，你与模型的每一次互动都可以在显微镜下进行。我们可以在任何时候，当模型做出所有这些奇怪的事情时，我们只需要按一个按钮。你正在进行对话，你按下一个按钮，你就会得到一个流程图，告诉你它在想什么。一旦我们达到那个阶段，我认为Anthropic的解释性团队将会呈现出一种不同的形态，不再是由工程师和科学家组成的团队来思考语言模型内部运作的数学原理。我们将拥有一支生物学家大军，他们只是通过显微镜观察。我们与Claude对话，让它做一些奇怪的事情，然后我们就像，我们有人通过显微镜观察，看看它内部在想什么。我认为这就是这项工作的未来。

Josh: Maybe two notes on top of that. One is we want Claude to help us do all of that, because there are a lot of parts involved, and you know who's good at looking at hundreds of things and figuring out what's going on is Claude. And so I think we're trying to enlist some help there, especially for these complicated contexts. And maybe the other place is we've talked a lot about studying the model once it's fully formed, but of course, we're at a company that makes these, and so when it says, "Okay, here's how the model solved this particular problem or said this thing," where did that come from in the training process? What are the steps that made that circuitry form to do that, and how could we give feedback to the rest of the company that is doing all of that work to shape the thing that we actually want it to become?

Josh: 也许在此之上再补充两点。第一点是，我们希望Claude能帮助我们完成所有这些工作，因为这涉及很多部分，而且你知道，谁擅长观察数百件事并弄清楚发生了什么？就是Claude。所以我认为我们正在尝试在那里寻求一些帮助，特别是对于这些复杂的上下文。也许另一个方面是，我们已经谈了很多关于在模型完全形成后研究它，但当然，我们是一家制造这些模型的公司，所以当它说：“好的，模型就是这样解决了这个特定问题或说了这句话，”那么这在训练过程中是从何而来的呢？是哪些步骤使那个电路形成以完成这项工作，以及我们如何向公司其他正在做所有这些工作以塑造我们真正希望它成为的样子的人提供反馈？

Anthony: Well, thank you so much for the conversation. Where can people find out more about this research?

Anthony: 嗯，非常感谢这次对话。人们在哪里可以找到更多关于这项研究的信息？

Jack: So, if you want to find out more, you can go to anthropic.com/research, which has our papers and blog posts and fun videos about it. Also, we recently partnered with another group called Neuronpedia to host some of these circuit graphs we make. So, if you want to try your hand at looking at what's going on inside of a small model, you can go to Neuronpedia and see for yourself.

Jack: 那么，如果你想了解更多信息，可以访问anthropic.com/research，那里有我们的论文、博客文章和有趣的视频。此外，我们最近与另一个名为Neuronpedia的团队合作，托管了我们制作的一些电路图。所以，如果你想亲自尝试查看小型模型内部发生的情况，可以访问Neuronpedia亲身体验。

Anthony: Thank you very much.

Anthony: 非常感谢。