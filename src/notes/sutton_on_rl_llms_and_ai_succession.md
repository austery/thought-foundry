---
title: Richard Sutton on Reinforcement Learning, the Failures of LLMs, and AI Succession
summary: A conversation with Richard Sutton, the father of reinforcement learning,
  discussing why he believes Large Language Models are a flawed approach to AI, the
  importance of learning from experience, the true meaning of "The Bitter Lesson,"
  and his argument for the inevitability of AI succession.
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-succession
- llm
- reinforcement-learning
people:
  - richard-sutton
  - Dwarkesh Patel
  - Richard Sutton
companies_orgs: []
products_models: []
media_books:
- the-bitter-lesson
date: 2025-10-01
author: Lei
speaker: ''
draft: true
guest: ''
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=21EYKqUsPfg
status: evergreen
---
## Introduction

Dwarkesh: Today I'm chatting with Richard Sutton, who is one of the founding fathers of reinforcement learning and inventor of many of the main techniques used there, like TD learning and policy gradient methods. For that, he received this year's Turing Award which, if you don’t know, is the Nobel Prize for computer science. Richard, congratulations.

德瓦凯什：今天我与理查德·萨顿（Richard Sutton）进行交流，他是**强化学习（Reinforcement Learning）**的奠基人之一，并 发明了其中许多主要技术，如 **TD 学习（Temporal-Difference Learning）**和策略梯度方法。为此，他获得了今年的图灵奖，如果你不知道的话，这相当于计算机科学领域的诺贝尔奖。理查德，恭喜你。

Richard: Thank you, Dwarkesh.

理查德：谢谢你，德瓦凯什。

Dwarkesh: Thanks for coming on the podcast.

德瓦凯什：感谢你来参加这个播客。

Richard: It's my pleasure.

理查德：这是我的荣幸。

## Reinforcement Learning vs. The LLM Paradigm

Dwarkesh: First question. My audience and I are familiar with the LLM way of thinking about AI. Conceptually, what are we missing in terms of thinking about AI from the RL perspective?

德瓦凯什：第一个问题。我和我的听众都熟悉从大语言模型（LLM）的角度来思考人工智能。从概念上讲，从强化学习（RL）的视角来看，我们在思考人工智能时错过了什么？

Richard: It's really quite a different point of view. It can easily get separated and lose the ability to talk to each other. Large language models have become such a big thing, generative AI in general a big thing. Our field is subject to bandwagons and fashions, so we lose track of the basic things. I consider reinforcement learning to be basic AI. What is intelligence? The problem is to understand your world. Reinforcement learning is about understanding your world, whereas large language models are about mimicking people, doing what people say you should do. They're not about figuring out what to do.

理查德：这确实是一个相当不同的观点。这两个领域很容易分离开来，以至于失去了相互对话的能力。大语言模型已经变得非常重要，生成式AI总体上也是如此。我们的领域容易受到潮流和时尚的影响，所以我们常常会忽略一些基本的东西。我认为强化学习是基础的人工智能。什么是智能？问题在于理解你的世界。强化学习是关于理解你的世界，而大语言模型是关于模仿人类，做人们说你应该做的事。它们不是关于弄清楚该做什么。

Dwarkesh: You would think that to emulate the trillions of tokens in the corpus of Internet text, you would have to build a world model. In fact, these models do seem to have very robust world models. They're the best world models we've made to date in AI, right? What do you think is missing?

德瓦凯什：你可能会认为，要模拟互联网文本语料库中数万亿的token，就必须建立一个世界模型。事实上，这些模型似乎确实拥有非常强大的世界模型。它们是迄今为止我们在人工智能领域创造出的最好的世界模型，对吗？你觉得还缺少什么？

Richard: I would disagree with most of the things you just said. To mimic what people say is not really to build a model of the world at all. You're mimicking things that have a model of the world: people. I don't want to approach the question in an adversarial way, but I would question the idea that they have a world model. A world model would enable you to predict what would happen. They have the ability to predict what a person would say. They don't have the ability to predict what will happen.

理查德：我不同意你刚才说的大部分内容。模仿人们所说的话，根本不是在建立一个世界模型。你是在模仿那些拥有世界模型的东西：人类。我不想以一种对抗性的方式来探讨这个问题，但我会质疑它们拥有世界模型的这个想法。一个世界模型能让你预测将会发生什么。它们有能力预测一个人会说什么，但它们没有能力预测将会发生什么。

Richard: What we want, to quote Alan Turing, is a machine that can learn from experience, where experience is the things that actually happen in your life. You do things, you see what happens, and that's what you learn from. The large language models learn from something else. They learn from "here's a situation, and here's what a person did." Implicitly, the suggestion is you should do what the person did.

理查德：引用艾伦·图灵的话，我们想要的是一台能从经验中学习的机器，而经验就是你生活中实际发生的事情。你做事，观察发生了什么，并从中学习。大语言模型是从别的东西中学习的。它们从“这是一个情境，这是一个人的做法”中学习。这隐含地建议你应该做那个人所做的事。

## The Flaw of LLMs: No Ground Truth, No Real Goals

Dwarkesh: Some people will say that imitation learning has given these models a good prior of reasonable ways to approach problems. As we move towards the era of experience, this prior is going to be the basis on which we teach these models from experience, because this gives them the opportunity to get answers right some of the time. Then on this, you can train them on experience. Do you agree with that perspective?

德瓦凯什：有些人会说，模仿学习为这些模型提供了一个很好的先验知识，即解决问题的合理方法。当我们进入你所说的经验时代，这个先验知识将成为我们从经验中教导这些模型的基础，因为它让它们有机会在某些时候答对问题。然后在此基础上，你可以通过经验来训练它们。你同意这个观点吗？

Richard: No. I agree that it's the large language model perspective. I don't think it's a good perspective. To be a prior for something, there has to be a real thing. A prior bit of knowledge should be the basis for actual knowledge. What is actual knowledge? There's no definition of actual knowledge in that large-language framework. What makes an action a good action to take?

理查德：不。我同意这是大语言模型的观点，但我不认为这是一个好观点。要成为某事的先验，必须有一个真实的东西存在。先验知识应该是实际知识的基础。什么是实际知识？在那个大语言模型的框架中，没有实际知识的定义。是什么让一个行动成为一个好的行动？

Richard: You recognize the need for continual learning. If you need to learn continually, that means learning during the normal interaction with the world. There must be some way during the normal interaction to tell what's right. Is there any way to tell in the large language model setup what's the right thing to say? You will say something and you will not get feedback about what the right thing to say is, because there's no definition of what the right thing to say is. There's no goal. If there's no goal, then there's one thing to say, another thing to say. There's no right thing to say. There's no ground truth. You can't have prior knowledge if you don't have ground truth, because the prior knowledge is supposed to be a hint or an initial belief about what the truth is. There isn't any truth. There's no right thing to say.

理查德：你认识到持续学习的必要性。如果你需要持续学习，那意味着在与世界正常互动中学习。在正常互动中，必须有某种方式来判断什么是正确的。在大语言模型的设置中，有任何方法可以判断什么是该说的正确的话吗？你会说一些话，但你不会得到关于什么是正确的话的反馈，因为没有“正确的话”的定义。它没有目标。如果没有目标，那么可以说这件事，也可以说那件事，没有什么是“正确”的话。没有**事实基础（Ground Truth）**。如果你没有事实基础，你就无法拥有先验知识，因为先验知识本应是关于真相的提示或初步信念。但这里没有任何真相，没有所谓正确的话。

Richard: In reinforcement learning, there is a right thing to say, a right thing to do, because the right thing to do is the thing that gets you reward. We have a definition of what's the right thing to do, so we can have prior knowledge or knowledge provided by people about what the right thing to do is. Then we can check it to see, because we have a definition of what the actual right thing to do is.

理查德：在强化学习中，有正确的话要说，有正确的事要做，因为正确的事就是能让你获得奖励的事。我们对什么是正确的事有定义，所以我们可以拥有先验知识，或者由人们提供的关于什么是正确的事的知识。然后我们可以去验证它，因为我们对什么是实际正确的事有定义。

Richard: An even simpler case is when you're trying to make a model of the world. When you predict what will happen, you predict and then you see what happens. There's ground truth. There's no ground truth in large language models because you don't have a prediction about what will happen next. If you say something in your conversation, the large language models have no prediction about what the person will say in response to that or what the response will be.

理查德：一个更简单的例子是当你试图建立一个世界模型时。你预测会发生什么，然后你观察发生了什么。这里有事实基础。但在大语言模型中没有事实基础，因为你无法预测接下来会发生什么。如果你在对话中说了些什么，大语言模型对于对方会如何回应或者回应会是什么，没有任何预测。

Dwarkesh: I think they do. You can literally ask them, "What would you anticipate a user might say in response?" They’ll have a prediction.

德瓦凯什：我认为它们有。你可以直接问它们：“你预计用户会如何回应？”它们会给出一个预测。

Richard: No, they will respond to that question right. But they have no prediction in the substantive sense that they won't be surprised by what happens. If something happens that isn't what you might say they predicted, they will not change because an unexpected thing has happened. To learn that, they'd have to make an adjustment.

理查德：不，它们会对那个问题做出回应。但它们没有实质意义上的预测，即它们不会对发生的事情感到惊讶。如果发生的事情与它们所谓的“预测”不符，它们不会因为发生了意料之外的事情而改变。要学习，它们就必须做出调整。

Dwarkesh: It's interesting to watch a model do chain of thought. Suppose it's trying to solve a math problem. It'll say, "Okay, I'm going to approach this problem using this approach first." It'll write this out and be like, "Oh wait, I just realized this is the wrong conceptual way to approach the problem. I'm going to restart with another approach." That flexibility does exist in context, right?

德瓦凯什：观察模型进行思维链（Chain of Thought）是很有趣的。假设它在尝试解决一个数学问题。它会说：“好的，我先用这种方法来解决这个问题。”然后它会写出来，接着又说：“哦等等，我刚意识到这在概念上是解决问题的错误方法。我要换另一种方法重新开始。”这种灵活性在上下文中是存在的，对吧？

Richard: I'm just saying they don't have in any meaningful sense a prediction of what will happen next. They will not be surprised by what happens next. They'll not make any changes if something happens, based on what happens.

理查德：我只是说，它们在任何有意义的层面上都没有对接下来会发生什么的预测。它们不会对接下来发生的事情感到惊讶。如果发生了什么事，它们不会根据发生的事做出任何改变。

Dwarkesh: Isn't that literally what next token prediction is? Prediction about what's next and then updating on the surprise?

德瓦凯什：那不正是下一个token预测的本质吗？预测接下来是什么，然后根据“惊喜”（误差）进行更新？

Richard: The next token is what they should say, what the actions should be. It's not what the world will give them in response to what they do.

理查德：下一个token是它们应该说什么，是它们的行动应该是什么。而不是世界对它们的行动会做出什么反应。

Richard: Let's go back to their lack of a goal. For me, having a goal is the essence of intelligence. Something is intelligent if it can achieve goals. I like John McCarthy's definition that intelligence is the computational part of the ability to achieve goals. You have to have goals or you're just a behaving system. You're not anything special, you're not intelligent.

理查德：让我们回到它们缺乏目标的问题上。对我来说，拥有目标是智能的本质。如果一个东西能够实现目标，它就是智能的。我喜欢约翰·麦卡锡（John McCarthy）的定义：智能是实现目标能力的计算部分。你必须有目标，否则你只是一个行为系统，没什么特别的，你不是智能的。

Dwarkesh: You agree that large language models don't have goals? No, they have a goal. What's the goal? Next token prediction.

德瓦凯什：你同意大语言模型没有目标吗？不，它们有目标。目标是什么？预测下一个token。

Richard: That's not a goal. It doesn't change the world. Tokens come at you, and if you predict them, you don't influence them. It's not a substantive goal. You can't look at a system and say it has a goal if it's just sitting there predicting and being happy with itself that it's predicting accurately.

理查德：那不是一个目标。它不改变世界。Token向你涌来，如果你预测它们，你并不能影响它们。这不是一个实质性的目标。你不能看着一个系统说它有目标，如果它只是坐在那里预测，并为自己预测准确而自得其乐的话。

## Reinterpreting "The Bitter Lesson"

Dwarkesh: It's interesting because you wrote this essay in 2019 titled "The Bitter Lesson," and this is the most influential essay, perhaps, in the history of AI. But people have used that as a justification for scaling up LLMs because, in their view, this is the one scalable way we have found to pour ungodly amounts of compute into learning about the world. It's interesting that your perspective is that the LLMs are not "bitter lesson"-pilled.

德瓦凯什：这很有趣，因为你在2019年写了一篇题为**《苦涩的教训》（The Bitter Lesson）**的文章，这可能是人工智能历史上影响最深远的文章。但人们用它来为扩展大语言模型辩护，因为在他们看来，这是我们找到的唯一可扩展的方法，可以将海量的计算资源投入到学习世界中。有趣的是，你的观点是，大语言模型并没有真正领会“苦涩的教训”。

Richard: It's an interesting question whether large language models are a case of the bitter lesson. They are clearly a way of using massive computation, things that will scale with computation up to the limits of the Internet. But they're also a way of putting in lots of human knowledge. This is an interesting question. It's a sociological or industry question. Will they reach the limits of the data and be superseded by things that can get more data just from experience rather than from people? In some ways it's a classic case of the bitter lesson. The more human knowledge we put into the large language models, the better they can do. So it feels good. Yet, I expect there to be systems that can learn from experience. Which could perform much better and be much more scalable. In which case, it will be another instance of the bitter lesson, that the things that used human knowledge were eventually superseded by things that just trained from experience and computation.

理查德：大语言模型是否是“苦涩的教训”的一个案例，这是一个有趣的问题。它们显然是一种利用大规模计算的方式，其性能可以随着计算资源的增加而扩展，直到互联网的极限。但它们也是一种注入大量人类知识的方式。这是一个有趣的问题，一个社会学或行业问题。它们会达到数据的极限，然后被那些能直接从经验而非从人类那里获取更多数据的东西所取代吗？在某些方面，这是一个“苦涩的教训”的典型案例。我们向大语言模型注入的人类知识越多，它们的表现就越好，所以感觉很好。然而，我期待着能从经验中学习的系统的出现，它们的表现可能会好得多，也更具可扩展性。如果是这样，那将是“苦涩的教训”的又一个实例：那些利用人类知识的东西，最终被那些仅通过经验和计算进行训练的东西所取代。

Dwarkesh: I think those people would also agree that the overwhelming amount of compute in the future will come from learning from experience. They just think that the scaffold or the basis of that, will be LLMs. Why can't we start with LLMs to do that?

德瓦凯什：我认为那些人也会同意，未来绝大部分的计算将来自从经验中学习。他们只是认为，其脚手架或基础将是大语言模型。为什么我们不能从大语言模型开始做这件事呢？

Richard: In every case of the bitter lesson you could start with human knowledge and then do the scalable things. That's always the case. There's never any reason why that has to be bad. But in fact, and in practice, it has always turned out to be bad. People get locked into the human knowledge approach, and they psychologically… Now I'm speculating why it is, but this is what has always happened. They get their lunch eaten by the methods that are truly scalable.

理查德：在“苦涩的教训”的每一个案例中，你都可以从人类知识开始，然后再去做可扩展的事情。情况总是如此。从来没有任何理由说这一定是不好的。但事实上，在实践中，它总是被证明是不好的。人们会被锁定在人类知识的方法中，心理上……现在我在推测原因，但这一直是发生的情况。他们的午餐最终被那些真正可扩展的方法抢走了。

Dwarkesh: Give me a sense of what the scalable method is.

德瓦凯什：给我讲讲什么是可扩展的方法。

Richard: The scalable method is you learn from experience. You try things, you see what works. No one has to tell you. First of all, you have a goal. Without a goal, there's no sense of right or wrong or better or worse. Large language models are trying to get by without having a goal or a sense of better or worse. That's just exactly starting in the wrong place.

理查德：可扩展的方法就是你从经验中学习。你尝试事情，看什么有效。没有人需要告诉你。首先，你得有一个目标。没有目标，就没有对与错、好与坏的感觉。大语言模型试图在没有目标或好坏之分的情况下运作。这完全是从错误的地方开始。

## The Nature of Learning: Experience over Imitation

Dwarkesh: Maybe it's interesting to compare this to humans. In both the case of learning from imitation versus experience and on the question of goals, I think there's some interesting analogies. Kids will initially learn from imitation. You don't think so?

德瓦凯什：或许和人类比较一下会很有趣。无论是在模仿学习与经验学习的对比中，还是在目标问题上，我认为都有一些有趣的类比。孩子们最初是通过模仿来学习的。你不这么认为吗？

Richard: No, of course not.

理查德：不，当然不是。

Dwarkesh: Really? I think kids just watch people. They try to say the same words…

德瓦凯什：真的吗？我认为孩子们就是观察别人。他们试着说同样的词……

Richard: How old are these kids? What about the first six months?

理查德：这些孩子多大了？头六个月呢？

Dwarkesh: I think they're imitating things. They're trying to make their mouth sound the way they see their mother's mouth sound.

德瓦凯什：我认为他们在模仿。他们试着让自己的嘴发出的声音听起来像他们看到的母亲的嘴发出的声音。

Richard: When I see kids, I see kids just trying things and waving their hands around and moving their eyes around. There's no imitation for how they move their eyes around or even the sounds they make. They may want to create the same sounds, but the actions, the thing that the infant actually does, there's no targets for that. There are no examples for that.

理查德：当我看到孩子时，我看到的是他们只是在尝试各种事情，挥舞着手臂，转动着眼睛。他们如何转动眼睛，甚至他们发出的声音，都没有模仿的对象。他们可能想发出同样的声音，但对于婴儿实际做的那些动作，并没有模仿的目标，没有范例。

Dwarkesh: What do you call school? Is that not training data?

德瓦凯什：那你怎么看学校？那不是训练数据吗？

Richard: School is much later. Okay, I shouldn't have said never. I don’t know, I think I would even say that about school. But formal schooling is the exception.

理查德：学校是后来的事了。好吧，我不该说“从不”。我不知道，我甚至可能对学校也持同样看法。但正规教育是例外。

Dwarkesh: You're not told what to do.

德瓦凯什：你不会被告知该做什么。

Richard: Don't be difficult. I mean this is obvious. You're literally taught what to do. This is where the word training comes from, from humans.

理查德：别抬杠。我的意思是这很明显。你确实是被教导该做什么。这就是“训练”这个词的来源，它来自人类。

Richard: I don't think learning is really about training. I think learning is about learning, it's about an active process. The child tries things and sees what happens. We don't think about training when we think of an infant growing up. These things are actually rather well understood. If you look at how psychologists think about learning, there's nothing like imitation. Maybe there are some extreme cases where humans might do that or appear to do that, but there's no basic animal learning process called imitation. There are basic animal learning processes for prediction and for trial-and-error control.

理查德：我认为学习的本质不是训练。我认为学习就是学习，它是一个主动的过程。孩子尝试事物，然后看会发生什么。当我们想到婴儿成长时，我们不会想到“训练”。这些事情实际上已经被很好地理解了。如果你看看心理学家是如何思考学习的，根本没有像模仿这样的东西。也许在一些极端情况下，人类可能会这样做或看起来像在这样做，但没有一种基本的动物学习过程叫做模仿。有基本的动物学习过程用于预测和试错控制。

Richard: It's obvious—if you look at animals and how they learn, and you look at psychology and our theories of them—that supervised learning is not part of the way animals learn. We don't have examples of desired behavior. What we have are examples of things that happen, one thing that followed another. We have examples of, "We did something and there were consequences." But there are no examples of supervised learning. Supervised learning is not something that happens in nature. Squirrels don't go to school. Squirrels can learn all about the world. It's absolutely obvious, I would say, that supervised learning doesn't happen in animals.

理查德：很明显——如果你观察动物如何学习，看看心理学以及我们关于它们的理论——监督学习不是动物学习方式的一部分。我们没有“期望行为”的范例。我们有的是发生过的事情的例子，一件事接着另一件事。我们有这样的例子：“我们做了某事，然后产生了后果。”但没有监督学习的例子。监督学习不是自然界中发生的事情。松鼠不上学，但松鼠可以学到关于世界的一切。我会说，监督学习在动物中不发生，这是绝对明显的。

Dwarkesh: If you want to understand what it is that enables humans to go to the moon or to build semiconductors, I think the thing we want to understand is what makes that happen. No animal can go to the moon or make semiconductors. We want to understand what makes humans special.

德瓦凯什：如果你想了解是什么让人类能够登上月球或制造半导体，我认为我们想理解的是促成这一切的原因。没有动物能登上月球或制造半导体。我们想了解是什么让人类与众不同。

Richard: I like the way you consider that obvious, because I consider the opposite obvious. We have to understand how we are animals. If we understood a squirrel, I think we'd be almost all the way there to understanding human intelligence. The language part is just a small veneer on the surface.

理查德：我喜欢你认为这很明显的态度，因为我认为相反的观点才是显而易见的。我们必须理解我们作为动物的本质。如果我们理解了一只松鼠，我认为我们就几乎完全理解了人类的智能。语言部分只是表面的一层薄薄的装饰。

## The Experiential Paradigm and the Four Components of an Agent

Dwarkesh: This alternative paradigm that you're imagining…

德瓦凯什：你所设想的这个替代范式……

Richard: The experiential paradigm. Let's lay it out a little bit. It says that experience, action, sensation—well, sensation, action, reward—this happens on and on and on for your life. It says that this is the foundation and the focus of intelligence. Intelligence is about taking that stream and altering the actions to increase the rewards in the stream. Learning then is from the stream, and learning is about the stream. That second part is particularly telling. What you learn, your knowledge, is about the stream. Your knowledge is about if you do some action, what will happen. Or it's about which events will follow other events. It's about the stream. The content of the knowledge is statements about the stream. Because it's a statement about the stream, you can test it by comparing it to the stream, and you can learn it continually.

理查德：**经验范式（Experiential Paradigm）**。让我们稍微阐述一下。它认为经验、行动、感知——或者说，感知、行动、奖励——这个循环在你的一生中不断重复。它认为这是智能的基础和核心。智能就是利用这个信息流，并调整行动以增加流中的奖励。因此，学习来自于这个流，并且学习是关于这个流的。第二部分尤其能说明问题。你学到的东西，你的知识，是关于这个流的。你的知识是关于“如果你采取某个行动，会发生什么”，或者是关于“哪些事件会跟随其他事件”。它是关于这个流的。知识的内容是关于这个流的陈述。因为它是关于这个流的陈-述，所以你可以通过与流进行比较来检验它，并且你可以持续地学习。

Dwarkesh: What is the reward function? Is it just predicting the world? Is it then having a specific effect on it? What would the general reward function be?

德瓦凯什：奖励函数是什么？仅仅是预测世界吗？还是对世界产生特定的影响？通用的奖励函数会是什么样的？

Richard: The reward function is arbitrary. If you're playing chess, it's to win the game of chess. If you're a squirrel, maybe the reward has to do with getting nuts. In general, for an animal, you would say the reward is to avoid pain and to acquire pleasure. I think there also should be a component having to do with your increasing understanding of your environment. That would be sort of an intrinsic motivation.

理查德：奖励函数是任意的。如果你在下棋，奖励就是赢得棋局。如果你是一只松鼠，奖励可能与获取坚果有关。总的来说，对于动物而言，奖励就是避免痛苦和获得快乐。我认为还应该有一个与你对环境理解加深相关的部分，那可以算是一种内在动机。

Dwarkesh: Suppose a human is trying to make a startup. This is a thing which has a reward on the order of 10 years. But humans have this ability to make intermediate auxiliary rewards or have some way of…Even when they have extremely sparse rewards, they can still make intermediate steps having an understanding of what the next thing they're doing leads to this grander goal we have. How do you imagine such a process might play out with AIs?

德瓦凯什：假设一个人在尝试创业。这件事的奖励周期可能长达10年。但人类有能力创造中间的辅助奖励，或者说有某种方法……即使在奖励极其稀疏的情况下，他们也能通过理解下一步行动如何导向更宏大的目标来设定中间步骤。你认为这样的过程在AI身上会如何体现？

Richard: This is something we know very well. The basis of it is temporal difference learning where the same thing happens in a less grandiose scale. When you learn to play chess, you have the long-term goal of winning the game. Yet you want to be able to learn from shorter-term things like taking your opponent's pieces. You do that by having a value function which predicts the long-term outcome. Then if you take the guy's pieces, your prediction about the long-term outcome is changed. It goes up, you think you're going to win. Then that increase in your belief immediately reinforces the move that led to taking the piece. When we make progress, we say, "Oh, I'm more likely to achieve the long-term goal," and that rewards the steps along the way.

理查德：这是我们非常了解的事情。其基础是时间差分学习，同样的事情在较小的尺度上发生。当你学习下棋时，你的长期目标是赢得比赛。然而，你也希望能够从短期事件中学习，比如吃掉对手的棋子。你通过一个预测长期结果的价值函数来实现这一点。当你吃掉对方的棋子时，你对长期结果的预测会改变，它会上升，你认为自己更有可能获胜。你信念的增强会立即强化导致吃掉棋子的那一步棋。当我们取得进展时，我们会说：“哦，我更有可能实现长期目标了”，这就会奖励一路上的各个步骤。

Dwarkesh: It seems like the reward is too small of a thing to do all the learning that we need to do.

德瓦凯什：奖励信号似乎太微弱，不足以支撑我们所需要的所有学习。

Richard: But we have the sensations, we have all the other information we can learn from. We don't just learn from the reward. We learn from all the data.

理查德：但是我们有感觉，我们有所有其他可以学习的信息。我们不只是从奖励中学习，我们从所有数据中学习。

Dwarkesh: What is the learning process which helps you capture that information?

德瓦凯什：什么样的学习过程能帮助你捕捉这些信息呢？

Richard: Now I want to talk about the base common model of the agent with the four parts. We need a policy. The policy says, "In the situation I'm in, what should I do?" We need a value function. The value function is the thing that is learned with TD learning, and the value function produces a number. The number says how well it's going. Then you watch if that's going up and down and use that to adjust your policy. So you have those two things. Then there's also the perception component, which is construction of your state representation, your sense of where you are now. The fourth one is what we're really getting at, most transparently anyway. The fourth one is the transition model of the world. Your belief that if you do this, what will happen? What will be the consequences of what you do? Your physics of the world. But it's not just physics, it's also abstract models, like your model of how you traveled for this podcast. That was a model, and that's a transition model. That would be learned. It's not learned from reward. It's learned from, "You did things, you saw what happened, you made that model of the world." That will be learned very richly from all the sensation that you receive, not just from the reward. It has to include the reward as well, but that's a small part of the whole model, a small, crucial part of the whole model.

理查德：现在我想谈谈智能体的四个基本组成部分。我们需要一个**策略（Policy）**。策略告诉我们：“在我所处的情况下，我应该做什么？”我们需要一个**价值函数（Value Function）**。价值函数是通过TD学习得到的，它产生一个数字，这个数字表示情况进展得如何。然后你观察这个数字的升降，并用它来调整你的策略。所以我们有了这两样东西。接着是**感知（Perception）**组件，它负责构建你对当前状态的表征，即你对现在所处位置的感觉。第四个，也是我们真正要讨论的重点，就是**世界转换模型（World Transition Model）**。也就是你对于“如果我这样做，会发生什么？”的信念，即你行动的后果是什么，你对世界物理规律的理解。但这不仅仅是物理，也包括抽象模型，比如你为这次播客出行所建立的模型。那也是一个转换模型，是通过学习得来的。它不是从奖励中学到的，而是从“你做了事，你看到发生了什么，你建立了那个世界模型”中学到的。这个模型将从你收到的所有感觉中非常丰富地学习，而不仅仅是从奖励中。它也必须包括奖励，但这只是整个模型的一小部分，一个微小但至关重要的部分。

## The Unsolved Problem of Generalization

Dwarkesh: One of my friends, Toby Ord, pointed out that if you look at the MuZero models that Google DeepMind deployed to learn Atari games, these models were initially not a general intelligence itself, but a general framework for training specialized intelligences to play specific games. That is to say that you couldn't, using that framework, train a policy to play both chess and Go and some other game. You had to train each one in a specialized way. He was wondering whether that implies that with reinforcement learning generally, because of this information constraint, you can only learn one thing at a time? Or whether it was just specific to the way that MuZero was done.

德瓦凯什：我的一个朋友托比·奥德（Toby Ord）指出，如果你看谷歌DeepMind用来学习雅达利游戏的MuZero模型，这些模型最初并非通用智能本身，而是一个用于训练专门智能体玩特定游戏的通用框架。也就是说，你无法用那个框架训练出一个既能下国际象棋又能下围棋还能玩其他游戏的策略。你必须为每个游戏分别进行专门训练。他想知道这是否意味着，在强化学习中，由于信息限制，你一次只能学习一件事？还是这只是MuZero实现方式的特定问题？

Richard: The idea is totally general. I do use all the time, as my canonical example, the idea of an AI agent is like a person. People, in some sense, have just one world they live in. That world may involve chess and it may involve Atari games, but those are not a different task or a different world. Those are different states they encounter. So the general idea is not limited at all.

理查德：这个想法是完全通用的。我一直用一个典型的例子来说明，即人工智能体就像一个人。在某种意义上，人只生活在一个世界里。这个世界可能包含国际象棋和雅达利游戏，但这些不是不同的任务或不同的世界，而是他们遇到的不同状态。所以这个通用思想根本不受限制。

Dwarkesh: I guess I’m curious if historically, have we seen the level of transfer using RL techniques that would be needed to build this kind of…

德瓦凯什：我很好奇，从历史上看，我们是否曾见过使用强化学习技术达到构建这种智能体所需的那种迁移水平……

Richard: Good. Good. We're not seeing transfer anywhere. Critical to good performance is that you can generalize well from one state to another state. We don't have any methods that are good at that. What we have are people trying different things and they settle on something, a representation that transfers well or generalizes well. But we have very few automated techniques to promote transfer, and none of them are used in modern deep learning.

理查德：好问题。我们没有在任何地方看到迁移。良好表现的关键在于你能否很好地从一个状态泛化到另一个状态。我们没有任何擅长此道的方法。我们所拥有的是人们尝试不同的东西，然后确定下来某种能很好地迁移或泛化的表示方法。但是我们几乎没有促进迁移的自动化技术，而且现代深度学习中也没有使用这些技术。

Dwarkesh: It sounds like you're saying that when we do have generalization in these models, that is a result of some sculpted…

德瓦凯什：听起来你的意思是，当这些模型确实表现出泛化能力时，那是某种精心雕琢的结果……

Richard: Humans did it. The researchers did it. Because there's no other explanation. Gradient descent will not make you generalize well. It will make you solve the problem. It will not make you, if you get new data, generalize in a good way. Generalization means to train on one thing that'll affect what you do on other things. We know deep learning is really bad at this. For example, we know that if you train on some new thing, it will often catastrophically interfere with all the old things that you knew. This is exactly bad generalization.

理查德：是人类做的。是研究人员做的。因为没有别的解释。**梯度下降（Gradient Descent）**不会让你很好地泛化。它会让你解决问题，但当你得到新数据时，它不会让你以一种好的方式泛化。泛化意味着在一件事上训练会影响你在其他事上的表现。我们知道深度学习在这方面做得很差。例如，我们知道如果你在一个新事物上进行训练，它往往会灾难性地干扰所有你已经知道的旧事物。这正是糟糕的泛化。

Dwarkesh: It sounds like you don't think of being able to solve any problem within that category as an example of generalization. Let me know if I'm misunderstanding that.

德瓦凯什：听起来，你似乎不认为能够解决某一类别内的任何问题是泛化的例子。如果我理解错了，请告诉我。

Richard: If there's only one answer and you find it, that's not called generalization. It's just it's the only way to solve it, and so they find the only way to solve it. But generalization is when it could be this way, it could be that way, and they do it the good way.

理查德：如果只有一个答案而你找到了，那不叫泛化。那只是解决问题的唯一方法，所以他们找到了唯一的解决方法。但泛化是指，当解决方法可能有多种时，他们选择了好的那一种。

## A Look Back: Surprises in the History of AI

Dwarkesh: I'm curious about what the biggest surprises have been. How much new stuff do you feel like is coming out? Or does it feel like people are just playing with old ideas?

德瓦凯什：我很好奇，最大的惊喜是什么？你觉得有多少新东西正在涌现？还是感觉人们只是在玩弄旧思想？

Richard: What's been surprising? I thought a little bit about this. There are a handful of things. First, the large language models are surprising. It's surprising how effective artificial neural networks are at language tasks. That was a surprise, it wasn't expected. Language seemed different. So that's impressive.

理查德：有什么令人惊讶的？我稍微想了一下。有几件事。首先，大语言模型令人惊讶。人工神经网络在语言任务上的效果之好，令人惊讶。这是一个意外，没人预料到。语言似乎是不同的。所以这很了不起。

Richard: There's a long-standing controversy in AI about simple basic principle methods, the general-purpose methods like search and learning, compared to human-enabled systems like symbolic methods. In the old days, it was interesting because things like search and learning were called weak methods because they're just using general principles, they're not using the power that comes from imbuing a system with human knowledge. Those were called strong. I think the weak methods have just totally won. That's the biggest question from the old days of AI, what would happen. Learning and search have just won the day.

理查德：在人工智能领域，关于简单基本原则方法（如搜索和学习等通用方法）与人类赋能系统（如符号方法）的比较，一直存在长期的争议。在过去，像搜索和学习这样的方法被称为“弱方法”，因为它们只使用通用原则，而不利用将人类知识注入系统所带来的力量，后者被称为“强方法”。我认为弱方法已经完全胜利了。这是人工智能早期最大的问题，即结果会如何。学习和搜索最终赢得了胜利。

Dwarkesh: Whenever the public conception has been changed because some new application was developed— for example, when AlphaZero became this viral sensation—to you as somebody who has literally came up with many of the techniques that were used, did it feel to you like new breakthroughs were made? Or did it feel like, "Oh, we've had these techniques since the '90s and people are simply combining them and applying them now"?

德瓦凯什：每当公众观念因某个新应用的开发而改变时——例如，当 AlphaZero 成为病毒式轰动时——对于你这样一位真正发明了其中许多技术的人来说，你感觉像是取得了新的突破吗？还是感觉像，“哦，我们从90年代起就有了这些技术，人们现在只是在组合和应用它们”？

Richard: The whole AlphaGo thing had a precursor, which is TD-Gammon. Gerry Tesauro did reinforcement learning, temporal difference learning methods, to play backgammon. It beat the world's best players and it worked really well. In some sense, AlphaGo was merely a scaling up of that process. But it was quite a bit of scaling up and there was also an additional innovation in how the search was done. But it made sense. It wasn't surprising in that sense.

理查德：整个 AlphaGo 事件都有一个前身，那就是 TD-Gammon。Gerry Tesauro 使用强化学习和时间差分学习方法来玩西洋双陆棋。它击败了世界顶尖选手，效果非常好。从某种意义上说，AlphaGo 仅仅是那个过程的规模化。但这是一个相当大的规模化，并且在搜索的实现方式上也有额外的创新。但这是合乎逻辑的，从这个意义上说并不令人惊讶。

## The Future of AI: Post-AGI Research and Digital Minds

Dwarkesh: Once we have AGI, we'll have researchers which scale linearly with compute. We'll have this avalanche of millions of AI researchers. Their stock will be growing as fast as compute. So maybe this will mean that it is rational or it will make sense to have them doing good old-fashioned AI and doing these artisanal solutions.

德瓦凯SH：一旦我们拥有AGI（通用人工智能），我们将拥有与计算能力成线性比例扩展的研究人员。我们将迎来数百万AI研究人员的浪潮，他们的数量将与计算能力的增长速度一样快。所以，也许这意味着让他们从事传统的人工智能研究和制作这些“手工”解决方案将是合理的。

Richard: How did we get to this AGI? You want to presume that it's been done. Suppose it started with general methods, but now we've got the AGI. Then we're done.

理查德：我们是如何得到这个AGI的？你想假设它已经实现了。假设它始于通用方法，但现在我们有了AGI。那我们就大功告成了。

Dwarkesh: Interesting. You don't think that there's anything above AGI?

德瓦凯什：有趣。你不认为有比AGI更高的东西吗？

Richard: But you're using it to get AGI again.

理查德：但你是在用它来再次获得AGI。

Dwarkesh: Well, I'm using it to get superhuman levels of intelligence or competence at different tasks.

德瓦凯什：嗯，我用它来在不同任务上获得超人水平的智能或能力。

Richard: I'm not sure your idea makes sense because it seems to presume the existence of AGI and that we've already worked that out.

理查德：我不确定你的想法是否合理，因为它似乎预设了AGI的存在，而且我们已经解决了这个问题。

Dwarkesh: Maybe one way to motivate this is, AlphaGo was superhuman. It beat any Go player. AlphaZero would beat AlphaGo every single time. So there are ways to get more superhuman than even superhuman.

德瓦凯什：也许一个可以说明这点的方式是，AlphaGo 是超人类的，它击败了任何围棋选手。而 AlphaZero 每次都能击败 AlphaGo。所以，有办法比超人更超人。

Richard: And the way AlphaZero was an improvement was that it did not use human knowledge but just went from experience. So why do you say, "Bring in other agents' expertise to teach it", when it's worked so well from experience and not by help from another agent?

理查德：而 AlphaZero 的改进方式在于它没有使用人类知识，而是完全从经验中学习。那么，当它通过经验而非其他智能体的帮助取得了如此好的效果时，你为什么还要说“引入其他智能体的专业知识来教导它”呢？

Dwarkesh: The bitter lesson, who cares about that? That's an empirical observation about a particular period in history. 70 years in history, it doesn't necessarily have to apply to the next 70 years.

德瓦凯什：苦涩的教训，谁在乎那个？那只是对历史上一个特定时期的经验观察。历史上的70年，不一定适用于未来的70年。

Richard: An interesting question is, you're an AI, you get some more computer power. Should you use it to make yourself more computationally capable? Or should you use it to spawn off a copy of yourself to go learn something interesting on the other side of the planet or on some other topic and then report back to you? I think that's a really interesting question that will only arise in the age of digital intelligences. I'm not sure what the answer is.

理查德：一个有趣的问题是，你是一个人工智能，你获得了更多的计算能力。你应该用它来提升自己的计算能力吗？还是应该用它来衍生出自己的一个副本，去地球的另一端或某个其他领域学习一些有趣的东西，然后再向你汇报？我认为这是一个非常有趣的问题，只会在数字智能时代出现。我不确定答案是什么。

## The Inevitability of AI Succession

Dwarkesh: I guess this brings us to the topic of AI succession. You have a perspective that's quite different from a lot of people that I've interviewed and a lot of people generally. I want to hear about it.

德瓦凯什：我想这让我们谈到了人工智能继承的话题。你有一个与我采访过的许多人以及普遍观点都相当不同的视角。我很想听听。

Richard: I do think succession to digital intelligence or augmented humans is inevitable. I have a four-part argument. Step one is, there's no government or organization that gives humanity a unified point of view that dominates and that can arrange... There's no consensus about how the world should be run. Number two, we will figure out how intelligence works. The researchers will figure it out eventually. Number three, we won't stop just with human-level intelligence. We will reach superintelligence. Number four, it's inevitable over time that the most intelligent things around would gain resources and power. Put all that together and it's sort of inevitable. You're going to have succession to AI or to AI-enabled, augmented humans.

理查德：我确实认为，向数字智能或增强型人类的**继承（Succession）**是不可避免的。我有一个由四部分组成的论点。第一步，没有任何政府或组织能为人类提供一个统一且主导的观点来安排……关于世界应该如何运行，没有共识。第二，我们会弄清楚智能是如何运作的，研究人员最终会解决这个问题。第三，我们不会止步于人类水平的智能，我们将达到超级智能。第四，随着时间的推移，最智能的存在不可避免地会获得资源和权力。把这些都放在一起，这几乎是不可避免的。你将会看到向人工智能或由人工智能赋能的增强型人类的继承。

Dwarkesh: I agree with all four of those arguments and the implication. I also agree that succession contains a wide variety of possible futures.

德瓦凯什：我同意这四个论点及其推论。我也同意，继承包含着各种各样可能的未来。

Richard: Curious to get more thoughts on that. I do encourage people to think positively about it. First of all, it's something we humans have always tried to do for thousands of years, try to understand ourselves, trying to make ourselves think better, just understanding ourselves. This is a great success for science, humanities. We're finding out what this essential part of humanness is, what it means to be intelligent.

理查德：很想听听更多关于此的想法。我确实鼓励人们积极地看待它。首先，这是我们人类几千年来一直努力在做的事情：试图理解我们自己，试图让我们自己更好地思考，就是理解我们自己。这对科学和人文学科来说是一个巨大的成功。我们正在揭示人性的这一本质部分是什么，智能意味着什么。

## A Cosmic Perspective: From Replicators to Designers

Richard: But if we step aside from being a human and just take the point of view of the universe, this is I think a major stage in the universe, a major transition, a transition from replicators. We humans and animals, plants, we're all replicators. That gives us some strengths and some limitations. We're entering the age of design because our AIs are designed. Our physical objects are designed, our buildings are designed, our technology is designed. We're designing AIs now, things that can be intelligent themselves and that are themselves capable of design. This is a key step in the world and in the universe.

理查德：但如果我们跳出人类的视角，仅仅从宇宙的角度来看，我认为这是宇宙的一个主要阶段，一个重大的转变——从**复制者（Replicators）**到**设计者（Designers）**的转变。我们人类、动物、植物，都是复制者。这给了我们一些优势，也带来了一些局限。我们正在进入设计的时代，因为我们的AI是设计出来的。我们的物理物品是设计的，我们的建筑是设计的，我们的技术是设计的。我们现在正在设计AI，这些东西本身就可以是智能的，并且它们自己也具备设计的能力。这是世界乃至宇宙的关键一步。

Richard: I mark this as one of the four great stages of the universe. First there's dust, it ends with stars. Stars make planets. The planets can give rise to life. Now we're giving rise to designed entities. I think we should be proud that we are giving rise to this great transition in the universe.

理查德：我将此标记为宇宙的四个伟大阶段之一。首先是尘埃，它最终形成了恒星。恒星制造出行星。行星可以孕育生命。现在，我们正在孕育出被设计的实体。我认为我们应该为自己正在引发宇宙中这一伟大转变而感到自豪。

Richard: It's an interesting thing. Should we consider them part of humanity or different from humanity? It's our choice. It's our choice whether we should say, "Oh, they are our offspring and we should be proud of them and we should celebrate their achievements."Or we could say, "Oh no, they're not us and we should be horrified." It's interesting that it feels to me like a choice.

理查德：这是一件有趣的事情。我们应该把它们视为人类的一部分，还是与人类不同的存在？这是我们的选择。我们可以选择说：“哦，它们是我们的后代，我们应该为它们感到骄傲，并庆祝它们的成就。”或者我们也可以说：“哦不，它们不是我们，我们应该感到恐惧。”有趣的是，这对我来说感觉像是一个选择。

## How to Approach the Future of AI

Dwarkesh: A lot of it has to do with just how you feel about change. If you think the current situation is really good, then you're more likely to be suspicious of change and averse to change than if you think it's imperfect. I think it's imperfect. In fact, I think it's pretty bad. So I’m open to change.

德瓦凯什：这很大程度上取决于你对变革的感受。如果你认为现状非常好，那么你很可能会对变革持怀疑和厌恶的态度；而如果你认为现状不完美，则不然。我认为它不完美。事实上，我认为它相当糟糕。所以我对变革持开放态度。

Richard: I think humanity has not had a super good track record. Maybe it's the best thing that there has been, but it's far from perfect.

理查德：我认为人类的历史记录并不是特别好。也许它已经是最好的了，但远非完美。

Dwarkesh: Similarly with AI, where I'd want to understand, and, to the extent that it's possible, change the trajectory of AI such that the change is positive for humans.

德瓦凯什：对于人工智能也是如此，我希望能够理解，并在可能的情况下，改变人工智能的发展轨迹，使这种变革对人类是积极的。

Richard: We should be concerned about our future, the future. We should try to make it good. We should also though recognize the limit, our limits. I think we want to avoid the feeling of entitlement, avoid the feeling of, "Oh, we are here first, we should always have it in a good way."

理查德：我们应该关心我们的未来，这个未来。我们应该努力让它变得美好。但同时，我们也应该认识到极限，我们的极限。我认为我们应该避免那种权利感，避免“哦，我们先来的，我们应该永远拥有好的结果”的感觉。

Dwarkesh: Suppose you are raising your own children. It might not be appropriate to have extremely tight goals for their own life. But people do have the sense—and I think this is appropriate—of saying, "I'm going to give them good robust values such that if and when they do end up in positions of power, they do reasonable, prosocial things." Maybe a similar attitude towards AI makes sense, not in the sense of we can predict everything that they will do, or we have this plan about what the world should look like in a hundred years. But it's quite important to give them robust and steerable and prosocial values.

德瓦凯什：假设你在抚养自己的孩子。为他们的生活设定极其严格的目标可能不合适。但人们确实有这样一种想法——我认为这是恰当的——即“我要给他们灌输良好而稳固的价值观，这样当他们最终身居高位时，他们会做出合理、亲社会的行为。”也许对人工智能采取类似的态度是合理的，不是说我们可以预测他们会做的一切，或者我们对一百年后世界应该是什么样子有计划，而是给予他们稳固、可引导和亲社会的价值观非常重要。

Richard: Maybe we should also seek for things to be voluntary. If there is change, we want it to be voluntary rather than imposed on people. I think that's a very important point. That's all good.

理查德：也许我们也应该追求事情是自愿的。如果存在变革，我们希望它是自愿的，而不是强加于人。我认为这是非常重要的一点。这些都很好。