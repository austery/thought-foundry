---
area: tech-insights
category: technology
companies_orgs:
- OpenAI
- Tesla
- Google
- DeepMind
- Waymo
- Nvidia
- University of Toronto
- Stanford University
- TSMC
- Intel
date: '2025-10-18'
layout: post.njk
media_books:
- WALL-E
- Idiocracy
- Star Trek
- Scale (book)
people:
- Andrej Karpathy
- Richard Sutton
- Yann LeCun
- Carl Shulman
- Sal Khan
products_models:
- Claude
- Codex
- AlexNet
- Llama 3
- GPT-2
- GPT-4
- InstructGPT
- PyTorch
- ChatGPT
project:
- ai-impact-analysis
- systems-thinking
source: https://www.youtube.com/watch?v=lXUZvyajciY
speaker: Dwarkesh Patel
summary: 著名AI研究员Andrej Karpathy深入探讨了为什么他认为通用人工智能（AGI）的实现需要一个“智能体的十年”，而非“智能体之年”。他剖析了当前大型语言模型（LLM）存在的认知缺陷、对强化学习（RL）的深刻批判（“像通过吸管吸取监督信号”），并类比自动驾驶的“九的征程”来说明产品化的艰巨。Karpathy还分享了他从零构建nanochat的经验，对AI是否会引发经济爆炸性增长提出了质疑，并阐述了他创办教育项目Eureka的初衷——在AI时代提升人类自身的能力。
tags:
- agent
- cognitive
- education
- model
- product
- reinforcement-learning-limit
title: Andrej Karpathy：为什么这是“智能体的十年”，而非“智能体之年”？
---

### 智能体的十年，而非一年

**Interviewer:** 今天我与 Andrej Karpathy 对话。Andrej，你为什么说这将是“智能体的十年”，而不是“智能体之年”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today I'm speaking with Andrej Karpathy. Andrej, why do you say that this will be the decade of agents and not the year of agents?</p>
</details>

**Andrej Karpathy:** 首先，谢谢你邀请我。你刚才提到的“这是智能体的十年”这句话，实际上是对一个已存在观点的回应。我不确定最初是谁说的，但他们暗示今年将是**LLM**（Large Language Model，大型语言模型）演进中的“智能体之年”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First of all, thank you for having me here. I'm excited to be here. The quote you've just mentioned, "It's the decade of agents," is actually a reaction to a pre-existing quote. I'm not actually sure who said this but they were alluding to this being the year of agents with respect to LLMs and how they were going to evolve.</p>
</details>

我被这个说法触发了，因为行业中存在一些过度预测。在我看来，更准确的描述是“智能体的十年”。我们已经有了一些非常早期的、令人印象深刻的智能体，我每天都在使用——比如 Claude 和 Codex 等等——但我仍然觉得还有太多工作要做。我的反应是，我们将在这十年里持续研究这些东西。它们会变得越来越好，这会很棒。我只是在回应这个说法所暗示的时间线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was triggered by that because there's some over-prediction going on in the industry. In my mind, this is more accurately described as the decade of agents. We have some very early agents that are extremely impressive and that I use daily—Claude and Codex and so on—but I still feel there's so much work to be done. My reaction is we'll be working with these things for a decade. They're going to get better, and it's going to be wonderful. I was just reacting to the timelines of the implication.</p>
</details>

**Interviewer:** 你认为有哪些瓶颈需要十年才能解决？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you think will take a decade to accomplish? What are the bottlenecks?</p>
</details>

**Andrej Karpathy:** 真正让它工作起来。当你谈论一个智能体，或者说实验室和我自己心中的那种智能体时，你应该把它想象成一个你可以雇佣来和你一起工作的员工或实习生。例如，你在这里和一些员工共事，你什么时候会愿意让像 Claude 或 Codex 这样的智能体来做那些工作？目前显然它们做不到。那需要什么条件才能让它们做到呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually making it work. When you're talking about an agent, or what the labs have in mind and maybe what I have in mind as well, you should think of it almost like an employee or an intern that you would hire to work with you. For example, you work with some employees here. When would you prefer to have an agent like Claude or Codex do that work? Currently, of course they can't. What would it take for them to be able to do that?</p>
</details>

你今天之所以不这么做，是因为它们根本不行。它们不够智能，**多模态**（multimodality：指模型能处理多种类型的数据，如文本、图像、音频等）能力不足，无法操作电脑等等。它们做不到你之前提到的很多事情，比如没有**持续学习**（continual learning：指模型能不断从新数据中学习而不忘记旧知识）的能力。你不能告诉它们一件事，然后期望它们记住。它们在认知上存在缺陷，就是行不通。解决所有这些问题大概需要十年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why don't you do it today? The reason you don't do it today is because they just don't work. They don't have enough intelligence, they're not multimodal enough, they can't do computer use and all this stuff. They don't do a lot of the things you've alluded to earlier. They don't have continual learning. You can't just tell them something and they'll remember it. They're cognitively lacking and it's just not working. It will take about a decade to work through all of those issues.</p>
</details>

**Interviewer:** 有趣。作为一个专业的播客主持人和一个远观AI的人，我很容易识别出缺少什么：缺少持续学习，或者缺少多模态。但我真的没有一个好方法来为它设定一个时间表。如果有人问持续学习需要多长时间，我完全没有概念这应该是一个需要5年、10年还是50年的项目。为什么是十年？为什么不是一年或五十年？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Interesting. As a professional podcaster and a viewer of AI from afar, it's easy for me to identify what's lacking: continual learning is lacking, or multimodality is lacking. But I don't really have a good way of trying to put a timeline on it. If somebody asks how long continual learning will take, I have no prior about whether this is a project that should take 5 years, 10 years, or 50 years. Why a decade? Why not one year? Why not 50 years?</p>
</details>

**Andrej Karpathy:** 这就涉及到我个人的一些直觉，以及根据我在该领域的经验做的一些推断。我在AI领域已经快二十年了，大概十五年左右，也不算太长。Richard Sutton 之前来过你的节目，他在这个领域的时间要长得多。我确实有大约十五年的经验，看过人们做出各种预测，也看到了结果如何。我还在工业界和研究界都待过。我从中形成了一种普遍的直觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is where you get into a bit of my own intuition, and doing a bit of an extrapolation with respect to my own experience in the field. I've been in AI for almost two decades. It's going to be 15 years or so, not that long. You had Richard Sutton here, who was around for much longer. I do have about 15 years of experience of people making predictions, of seeing how they turned out. Also I was in the industry for a while, I was in research, and I've worked in the industry for a while. I have a general intuition that I have left from that.</p>
</details>

我觉得这些问题是可处理、可克服的，但仍然很困难。如果我取个平均值，感觉就像十年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel like the problems are tractable, they're surmountable, but they're still difficult. If I just average it out, it just feels like a decade to me.</p>
</details>

### AI 发展中的几次重大转向

**Interviewer:** 这很有趣。我不仅想了解历史，还想知道在各个不同的突破性时刻，身处其中的人当时感觉将要发生什么？他们的感受在哪些方面过于悲观或过于乐观？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is quite interesting. I want to hear not only the history, but what people in the room felt was about to happen at various different breakthrough moments. What were the ways in which their feelings were either overly pessimistic or overly optimistic?</p>
</details>

**Andrej Karpathy:** 我们要逐一回顾吗？这是一个巨大的问题，因为你谈论的是十五年里发生的事情。AI之所以如此美妙，是因为它经历了数次“地震级”的转变，整个领域突然间就变了样。我大概经历过两三次这样的转变，并且我认为还会有更多，因为它们几乎以惊人的规律性出现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Should we just go through each of them one by one? That's a giant question because you're talking about 15 years of stuff that happened. AI is so wonderful because there have been a number of seismic shifts where the entire field has suddenly looked a different way. I've maybe lived through two or three of those. I still think there will continue to be some because they come with almost surprising regularity.</p>
</details>

我的职业生涯始于对深度学习产生兴趣，当时我在多伦多大学，紧挨着Geoff Hinton。Geoff Hinton当然是AI领域的教父级人物。他当时在训练各种神经网络，我觉得那非常不可思议和有趣。但这在当时远非AI领域的主流。它只是一个旁边的小众课题。**AlexNet**（AlexNet: 2012年发布的一个深度卷积神经网络，它在ImageNet图像识别挑战赛中取得突破性成功，标志着深度学习时代的开启）的出现带来了第一次戏剧性的地震级转变。AlexNet让所有人都重新调整了方向，开始训练神经网络，但那时仍然是针对特定任务的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When my career began, when I started to work on deep learning, when I became interested in deep learning, this was by chance of being right next to Geoff Hinton at the University of Toronto. Geoff Hinton, of course, is the godfather figure of AI. He was training all these neural networks. I thought it was incredible and interesting. This was not the main thing that everyone in AI was doing by far. This was a niche little subject on the side. That's maybe the first dramatic seismic shift that came with the AlexNet and so on. AlexNet reoriented everyone, and everyone started to train neural networks, but it was still very per-task, per specific task.</p>
</details>

人们慢慢地开始对智能体感兴趣。大家开始想，“好吧，我们可能在视觉皮层这类问题上打了个勾，但大脑的其他部分呢？我们如何能得到一个完整的、能在世界中互动的智能体或实体？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People became very slowly interested in agents. People started to think, "Okay, maybe we have a check mark next to the visual cortex or something like that, but what about the other parts of the brain, and how can we get a full agent or a full entity that can interact in the world?"</p>
</details>

2013年左右的Atari深度**强化学习**（Reinforcement Learning, RL：一种机器学习方法，智能体通过与环境互动并获得奖励或惩罚来学习如何采取行动以最大化长期回报）转变，在我看来，是早期智能体研究的一部分。它试图让智能体不仅能感知世界，还能采取行动、与环境互动并获得奖励。当时的环境是Atari游戏。我觉得那是一次失误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Atari deep reinforcement learning shift in 2013 or so was part of that early effort of agents, in my mind, because it was an attempt to try to get agents that not just perceive the world, but also take actions and interact and get rewards from environments. At the time, this was Atari games. I feel that was a misstep.</p>
</details>

这是一个连我当时所在的早期OpenAI都采纳了的失误，因为当时的主流思潮是强化学习环境、游戏、玩游戏、攻克各种游戏，OpenAI当时做了很多这方面的工作。那曾是AI的一个突出阶段，大概有两三年、四年，所有人都在做游戏中的强化学习。这都有点走偏了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was a misstep that even the early OpenAI that I was a part of adopted because at that time, the zeitgeist was reinforcement learning environments, games, game playing, beat games, get lots of different types of games, and OpenAI was doing a lot of that. That was another prominent part of AI where maybe for two or three or four years, everyone was doing reinforcement learning on games. That was all a bit of a misstep.</p>
</details>

我在OpenAI时一直对将游戏作为通往**AGI**（Artificial General Intelligence，通用人工智能：指拥有与人类相当或超越人类智慧的AI系统）的路径持怀疑态度。因为在我看来，你想要的是像会计师那样与真实世界互动的东西。我看不出玩游戏如何能导向这个目标。例如，我在OpenAI的项目，是在Universe项目范畴内，研究一个使用键盘和鼠标操作网页的智能体。我非常希望有一个能与真实数字世界互动、能做知识工作的实体。但事实证明，这个想法太早了，早到我们根本不该去做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I was trying to do at OpenAI is I was always a bit suspicious of games as being this thing that would lead to AGI. Because in my mind, you want something like an accountant or something that's interacting with the real world. I just didn't see how games add up to it. My project at OpenAI, for example, was within the scope of the Universe project, on an agent that was using keyboard and mouse to operate web pages. I really wanted to have something that interacts with the actual digital world that can do knowledge work. It just so turns out that this was extremely early, way too early, so early that we shouldn't have been working on that.</p>
</details>

因为如果你只是在环境中胡乱摸索，乱敲键盘、乱点鼠标，试图获得奖励，你的奖励信号会过于稀疏，根本学不到东西。你会烧掉一片森林的计算资源，却一事无成。你缺少的是神经网络中的表征能力。例如，今天人们也在训练那些使用计算机的智能体，但他们是在大型语言模型的基础上进行的。你必须先有语言模型，先有表征，而这需要通过所有的**预训练**（pre-training：在特定任务微调之前，先在海量无标签数据上训练模型以学习通用知识和表征的过程）和LLM相关工作来完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because if you're just stumbling your way around and keyboard mashing and mouse clicking and trying to get rewards in these environments, your reward is too sparse and you just won't learn. You're going to burn a forest computing, and you're never going to get something off the ground. What you're missing is this power of representation in the neural network. For example, today people are training those computer-using agents, but they're doing it on top of a large language model. You have to get the language model first, you have to get the representations first, and you have to do that by all the pre-training and all the LLM stuff.</p>
</details>

我觉得，粗略地说，人们几次都过早地试图一步到位，过早地追求智能体。Atari、Universe项目，甚至我自己的经历都是如此。在达到智能体之前，你必须先完成一些基础工作。现在智能体的能力强了很多，但我们可能仍然缺少这个技术栈中的某些部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel maybe loosely speaking, people kept trying to get the full thing too early a few times, where people really try to go after agents too early, I would say. That was Atari and Universe and even my own experience. You actually have to do some things first before you get to those agents. Now the agents are a lot more competent, but maybe we're still missing some parts of that stack.</p>
</details>

我认为人们所做的工作可以分为三个主要类别：为特定任务训练神经网络、第一轮智能体的尝试，然后是LLM，即在添加其他功能之前，先寻求神经网络的表征能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say those are the three major buckets of what people were doing: training neural nets per-tasks, trying the first round of agents, and then maybe the LLMs and seeking the representation power of the neural networks before you tack on everything else on top.</p>
</details>

### 预训练 vs 进化：我们是在构建幽灵，而非动物

**Interviewer:** 有趣。如果我要支持Sutton的观点，那就是人类可以一次性处理所有事情，甚至动物也可以。动物可能是个更好的例子，因为它们甚至没有语言的支架。它们一出生就被扔到世界上，必须在没有任何标签的情况下理解一切。那么AGI的愿景不就应该是观察感官数据，观察电脑屏幕，然后从零开始弄清楚发生了什么吗？如果一个人被置于类似情境，从零开始训练……就像人类或动物的成长过程。为什么这不应该是AI的愿景，而不是我们现在这种需要进行数百万年训练量的方式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Interesting. If I were to steelman the Sutton perspective, it would be that humans can just take on everything at once, or even animals can take on everything at once. Animals are maybe a better example because they don't even have the scaffold of language. They just get thrown out into the world, and they just have to make sense of everything without any labels. The vision for AGI then should just be something which looks at sensory data, looks at the computer screen, and it just figures out what's going on from scratch. If a human were put in a similar situation and had to be trained from scratch… This is like a human growing up or an animal growing up. Why shouldn't that be the vision for AI, rather than this thing where we're doing millions of years of training?</p>
</details>

**Andrej Karpathy:** 这个问题非常好。Sutton上过你的播客，我看了那一期，并写了一篇关于那期播客的文章，其中谈到了我的一些看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a really good question. Sutton was on your podcast and I saw the podcast and I had a write-up about that podcast that gets into a bit of how I see things.</p>
</details>

我非常谨慎地将AI与动物进行类比，因为它们是通过一个非常不同的优化过程产生的。动物是进化而来的，它们天生就带有大量的内置硬件。比如我在文章中举的例子是斑马。斑马一出生，几分钟后就能跑来跑去跟着妈妈。这是一件极其复杂的事情。那不是强化学习，那是天生内置的。进化显然有某种方式将我们神经网络的权重编码在ATCG（DNA的四种碱基）中，我不知道那是如何工作的，但它显然是可行的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm very careful to make analogies to animals because they came about by a very different optimization process. Animals are evolved, and they come with a huge amount of hardware that's built in. For example, my example in the post was the zebra. A zebra gets born, and a few minutes later it's running around and following its mother. That's an extremely complicated thing to do. That's not reinforcement learning. That's something that's baked in. Evolution obviously has some way of encoding the weights of our neural nets in ATCGs, and I have no idea how that works, but it apparently works.</p>
</details>

大脑来自一个非常不同的过程，我非常不愿意从中获取灵感，因为我们实际上并没有在运行那个过程。我在文章中说，我们不是在建造动物，我们是在建造幽灵或灵魂，或者随便人们怎么称呼它。因为我们不是通过进化来训练，我们是通过模仿人类以及他们在互联网上留下的数据来训练。最终你得到的是这些虚无缥缈的、幽灵般的实体，因为它们完全是数字化的，并且在模仿人类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brains just came from a very different process, and I'm very hesitant to take inspiration from it because we're not actually running that process. In my post, I said we're not building animals. We're building ghosts or spirits or whatever people want to call it, because we're not doing training by evolution. We're doing training by imitation of humans and the data that they've put on the Internet. You end up with these ethereal spirit entities because they're fully digital and they're mimicking humans.</p>
</details>

这是一种不同类型的智能。如果你想象一个智能的空间，我们几乎是从一个不同的起点开始的。我们并不是在建造动物。但随着时间的推移，让它们变得更像动物是可能的，我认为我们应该这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a different kind of intelligence. If you imagine a space of intelligences, we're starting off at a different point almost. We're not really building animals. But it's also possible to make them a bit more animal-like over time, and I think we should be doing that.</p>
</details>

还有一点，我觉得Sutton的框架非常……他的框架是，“我们想建造动物。” 我认为如果我们能做到这一点，那将非常棒。如果存在一种单一的算法，你只要在互联网上运行它，它就能学会一切，那将是不可思议的。我不确定它是否存在，而且那肯定不是动物的做法，因为动物有进化的外循环。很多看起来像学习的行为，更像是大脑的成熟过程。我认为动物很少使用强化学习。很多强化学习更像是运动任务，而不是智能任务。所以我实际上有点认为，人类粗略地说，并不真正使用RL。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One more point. I do feel Sutton has a very... His framework is, "We want to build animals." I think that would be wonderful if we can get that to work. That would be amazing. If there were a single algorithm that you can just run on the Internet and it learns everything, that would be incredible. I'm not sure that it exists and that's certainly not what animals do, because animals have this outer loop of evolution. A lot of what looks like learning is more like maturation of the brain. I think there's very little reinforcement learning for animals. A lot of the reinforcement learning is more like motor tasks; it's not intelligence tasks. So I actually kind of think humans don’t really use RL, roughly speaking.</p>
</details>

**Interviewer:** 你刚才说很多智能不是运动任务……是什么，抱歉？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can you repeat the last sentence? A lot of that intelligence is not motor task…it's what, sorry?</p>
</details>

**Andrej Karpathy:** 在我看来，很多强化学习更像是运动类任务，比如投篮这样简单的任务。但我不认为人类在很多智能任务上使用强化学习，比如解决问题等等。这并不意味着我们不应该在研究中这样做，我只是觉得那是动物所做或不做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of the reinforcement learning, in my perspective, would be things that are a lot more motor-like, simple tasks like throwing a hoop. But I don't think that humans use reinforcement learning for a lot of intelligence tasks like problem-solving and so on. That doesn't mean we shouldn't do that for research, but I just feel like that's what animals do or don't.</p>
</details>

### 认知核心：剥离知识，保留智能

**Interviewer:** 我花点时间消化一下，这里面有很多不同的观点。有一个澄清性的问题可以帮助我理解你的看法。你认为进化所做的事情，类似于预训练在构建一个能够理解世界的实体方面所起的作用。不同的是，对于人类来说，进化必须通过30亿字节的DNA来滴定。这与模型的权重非常不同。模型的权重实际上就是一个大脑，而这显然不存在于精子和卵子中，它必须被生长出来。而且，大脑中每一个突触的信息根本不可能存在于DNA的30亿字节中。所以进化似乎更接近于找到那个进行终身学习的算法。现在，也许终身学习并不类似于RL，就像你说的。这与你刚才的观点兼容吗，还是你不同意？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to take a second to digest that because there are a lot of different ideas. Here’s one clarifying question I can ask to understand the perspective. You suggest that evolution is doing the kind of thing that pre-training does in the sense of building something which can then understand the world. The difference is that evolution has to be titrated in the case of humans through three gigabytes of DNA. That's very unlike the weights of a model. Literally, the weights of the model are a brain, which obviously does not exist in the sperm and the egg. So it has to be grown. Also, the information for every single synapse in the brain simply cannot exist in the three gigabytes that exist in the DNA. Evolution seems closer to finding the algorithm which then does the lifetime learning. Now, maybe the lifetime learning is not analogous to RL, to your point. Is that compatible with the thing you were saying, or would you disagree with that?</p>
</details>

**Andrej Karpathy:** 我想是的。我同意你的看法，这里面发生了一些奇迹般的压缩，因为显然神经网络的权重并没有存储在ATCG中。有一些学习算法被编码，它们接管并在生命过程中进行部分学习。在这一点上我绝对同意你。我会说我更务实。我不是从“让我们建造动物”的角度出发，而是从“让我们建造有用的东西”的角度出发。我戴着安全帽，只是观察到我们不会去做进化，因为我不知道该怎么做。但事实证明，我们可以通过模仿互联网文档来建造这些幽灵般的、灵魂般的实体。这是可行的。这是一种让你达到一个拥有大量内置知识和某种智能的起点的方式，类似于进化所做的。这就是为什么我称预训练为“蹩脚的进化”。它是利用我们现有的技术和资源，达到一个可以进行强化学习等操作的起点的实际可行版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think so. I would agree with you that there's some miraculous compression going on because obviously, the weights of the neural net are not stored in ATCGs. There's some dramatic compression. There are some learning algorithms encoded that take over and do some of the learning online. I definitely agree with you on that. I would say I'm a lot more practically minded. I don't come at it from the perspective of, let's build animals. I come from it from the perspective of, let's build useful things. I have a hard hat on, and I'm just observing that we're not going to do evolution, because I don't know how to do that. But it does turn out we can build these ghosts, spirit-like entities, by imitating internet documents. This works. It's a way to bring you up to something that has a lot of built-in knowledge and intelligence in some way, similar to maybe what evolution has done. That's why I call pre-training this crappy evolution. It's the practically possible version with our technology and what we have available to us to get to a starting point where we can do things like reinforcement learning and so on.</p>
</details>

**Andrej Karpathy:** 预训练正在做的事情是，你在互联网上进行下一个词元（token）的预测，并将其训练进一个神经网络。它同时在做两件不相关的事情。第一，它在获取我所说的所有这些知识。第二，它实际上在变得智能。通过观察互联网中的算法模式，它在神经网络内部启动了所有这些小电路和算法来做事，比如**上下文学习**（in-context learning：指模型在不更新权重的情况下，仅通过分析当前对话或提示中提供的信息来学习和适应新任务的能力）。你不需要也不想要那些知识。我认为那可能在整体上拖了神经网络的后腿，因为它让它们有时过于依赖知识。例如，我觉得智能体有一个不擅长的地方，就是脱离互联网上存在的数据流形。如果它们的知识或记忆更少，也许它们会做得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's subtle and I think you're right to push back on it, but basically the thing that pre-training is doing, you're getting the next-token predictor over the internet, and you're training that into a neural net. It's doing two things that are unrelated. Number one, it's picking up all this knowledge, as I call it. Number two, it's actually becoming intelligent. By observing the algorithmic patterns in the internet, it boots up all these little circuits and algorithms inside the neural net to do things like in-context learning and all this stuff. You don't need or want the knowledge. I think that's probably holding back the neural networks overall because it's getting them to rely on the knowledge a little too much sometimes. For example, I feel agents, one thing they're not very good at, is going off the data manifold of what exists on the internet. If they had less knowledge or less memory, maybe they would be better.</p>
</details>

我认为我们未来要做的是——这也将是研究范式的一部分——想办法移除一些知识，保留我所说的“认知核心”。这是一个智能实体，它被剥离了知识，但包含了算法、智能的魔力、解决问题的能力及其策略等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I think we have to do going forward—and this would be part of the research paradigms—is figure out ways to remove some of the knowledge and to keep what I call this cognitive core. It's this intelligent entity that is stripped from knowledge but contains the algorithms and contains the magic of intelligence and problem-solving and the strategies of it and all this stuff.</p>
</details>

**Interviewer:** 这其中有很多有趣的东西。让我们从上下文学习开始。这是一个显而易见的观点，但我认为值得明确说出来并思考一下。这些模型看起来最智能的情况——就是当我和它们交谈时，感觉另一端真的有东西在回应我、在思考——是当它犯错时会说，“哦等等，那种思考方式是错的。我退一步重新来。” 所有这些都发生在上下文中。那是我感觉能亲眼看到真正智能的地方。这个上下文学习过程是通过在预训练数据上进行梯度下降发展出来的。它自发地元学习了上下文学习，但上下文学习本身并不是梯度下降，就像我们人类的终身智能能够做事情是由进化决定的，但我们一生中的学习是通过其他过程发生的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's so much interesting stuff there. Let's start with in-context learning. This is an obvious point, but I think it's worth just saying it explicitly and meditating on it. The situation in which these models seem the most intelligent—in which I talk to them and I'm like, "Wow, there's really something on the other end that's responding to me thinking about things—is if it makes a mistake it's like, "Oh wait, that's the wrong way to think about it. I'm backing up." All that is happening in context. That's where I feel like the real intelligence is that you can visibly see. That in-context learning process is developed by gradient descent on pre-training. It spontaneously meta-learns in-context learning, but the in-context learning itself is not gradient descent, in the same way that our lifetime intelligence as humans to be able to do things is conditioned by evolution but our learning during our lifetime is happening through some other process.</p>
</details>

**Andrej Karpathy:** 我不完全同意这一点，但你应该继续你的思路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't fully agree with that, but you should continue your thought.</p>
</details>

**Interviewer:** 好奇这个类比在哪个地方不成立。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I'm very curious to understand how that analogy breaks down.</p>
</details>

**Andrej Karpathy:** 我不确定能说上下文学习不是在做梯度下降。它不是在做显式的梯度下降。上下文学习是在一个词元窗口内的模式补全。只是因为互联网上有大量的模式。你说的对，模型学会了补全模式，这存在于权重之中。神经网络的权重试图发现模式并补全它。神经网络内部发生了一些适应，这是神奇的，仅仅因为互联网上有很多模式就自然而然地出现了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm hesitant to say that in-context learning is not doing gradient descent. It's not doing explicit gradient descent. In-context learning is pattern completion within a token window. It just turns out that there's a huge amount of patterns on the internet. You're right, the model learns to complete the pattern, and that's inside the weights. The weights of the neural network are trying to discover patterns and complete the pattern. There's some adaptation that happens inside the neural network, which is magical and just falls out from the internet just because there's a lot of patterns.</p>
</details>

我确实认为有些论文很有趣，它们研究了上下文学习背后的机制。我确实认为上下文学习有可能在神经网络的层内部运行一个小的梯度下降循环。我记得有一篇论文特别提到，他们用上下文学习来做线性回归。你输入到神经网络的是XY对，XY, XY, XY，这些点恰好在一条线上。然后你输入X，期望得到Y。当你这样训练神经网络时，它实际上在做线性回归。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will say that there have been some papers that I thought were interesting that look at the mechanisms behind in-context learning. I do think it's possible that in-context learning runs a small gradient descent loop internally in the layers of the neural network. I recall one paper in particular where they were doing linear regression using in-context learning. Your inputs into the neural network are XY pairs, XY, XY, XY that happen to be on the line. Then you do X and you expect Y. The neural network, when you train it in this way, does linear regression.</p>
</details>

通常当你运行线性回归时，你有一个小的梯度下降优化器，它查看XY，查看误差，计算权重的梯度并进行几次更新。结果发现，当他们研究那个上下文学习算法的权重时，他们发现了一些与梯度下降机制的相似之处。实际上，我认为那篇论文的论点更强，因为他们硬编码了神经网络的权重，通过注意力机制和所有内部组件来执行梯度下降。这只是我唯一的反驳。谁知道上下文学习是如何工作的，但我认为它内部可能在做一些奇特的梯度下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Normally when you would run linear regression, you have a small gradient descent optimizer that looks at XY, looks at an error, calculates the gradient of the weights and does the update a few times. It just turns out that when they looked at the weights of that in-context learning algorithm, they found some analogies to gradient descent mechanics. In fact, I think the paper was even stronger because they hardcoded the weights of a neural network to do gradient descent through attention and all the internals of the neural network. That's just my only pushback. Who knows how in-context learning works, but I think that it's probably doing a bit of some funky gradient descent internally.</p>
</details>

### 工作记忆 vs 朦胧回忆：上下文窗口的力量

**Interviewer:** 那么值得思考的是，如果上下文学习和预训练都在实现类似梯度下降的东西，为什么上下文学习让我们感觉正在接近持续学习、真正的智能，而仅仅从预训练中你不会有类似的感觉？如果它们是相同的算法，有什么不同呢？一种思考方式是，模型从训练中每接收一份信息，会存储多少信息？如果你看预训练，比如Llama 3，它是在15万亿个词元上训练的。对于70B模型，这相当于它在预训练中看到的每个词元存储了0.07比特的信息。而如果你看KV缓存在上下文学习中每个额外词元增长多少，大约是320千字节。模型吸收每个词元的信息量相差了3500万倍。我想知道这是否有关联。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then it's worth thinking okay, if in-context learning and pre-training are both implementing something like gradient descent, why does it feel like with in-context learning we're getting to this continual learning, real intelligence-like thing? Whereas you don't get the analogous feeling just from pre-training. You could argue that. If it's the same algorithm, what could be different? One way you could think about it is, how much information does the model store per information it receives from training? If you look at pre-training, if you look at Llama 3 for example, I think it's trained on 15 trillion tokens. If you look at the 70B model, that would be the equivalent of 0.07 bits per token that it sees in pre-training, in terms of the information in the weights of the model compared to the tokens it reads. Whereas if you look at the KV cache and how it grows per additional token in in-context learning, it's like 320 kilobytes. So that's a 35 million-fold difference in how much information per token is assimilated by the model. I wonder if that's relevant at all.</p>
</details>

**Andrej Karpathy:** 我有点同意。我通常的说法是，在神经网络训练期间发生的任何事情，知识都只是对训练时发生的事情的朦胧回忆。这是因为压缩率非常高。你把15万亿个词元压缩到只有几十亿参数的最终神经网络中。显然，这里发生了大量的压缩。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I kind of agree. The way I usually put this is that anything that happens during the training of the neural network, the knowledge is only a hazy recollection of what happened in training time. That's because the compression is dramatic. You're taking 15 trillion tokens and you're compressing it to just your final neural network of a few billion parameters. Obviously it's a massive amount of compression going on.</p>
</details>

所以我把它称为对互联网文档的“朦胧回忆”。而任何发生在神经网络上下文窗口中的事情——你输入所有词元并建立起那些**KV缓存**（KV Cache：Transformer模型中用于加速生成的一种机制，它缓存了注意力机制中的键(Key)和值(Value)，避免在生成每个新词元时重复计算）表征——对神经网络来说都是非常直接可访问的。所以我把KV缓存和测试时发生的事情比作工作记忆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I refer to it as a hazy recollection of the internet documents. Whereas anything that happens in the context window of the neural network—you're plugging in all the tokens and building up all those KV cache representations—is very directly accessible to the neural net. So I compare the KV cache and the stuff that happens at test time to more like a working memory.</p>
</details>

上下文窗口中的所有东西都非常直接地可被神经网络访问。LLM和人类之间总是存在这些几乎令人惊讶的相似之处。我觉得它们令人惊讶，因为我们并不是在直接试图建造一个人类大脑。我们只是发现这种方法有效，然后就去做了。但我确实认为，任何存在于权重中的东西，都像是你一年前读过的内容的朦胧回忆。而你在测试时作为上下文给它的任何东西，都直接存在于工作记忆中。这是一个非常有力的类比，可以帮助思考问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All the stuff that's in the context window is very directly accessible to the neural net. There's always these almost surprising analogies between LLMs and humans. I find them surprising because we're not trying to build a human brain directly. We're just finding that this works and we're doing it. But I do think that anything that's in the weights, it's a hazy recollection of what you read a year ago. Anything that you give it as a context at test time is directly in the working memory. That's a very powerful analogy to think through things.</p>
</details>

### 从大脑结构看AI的缺失环节

**Interviewer:** 退一步说，人类智能中我们最未能用这些模型复制的部分是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Stepping back, what is the part about human intelligence that we have most failed to replicate with these models?</p>
</details>

**Andrej Karpathy:** 很多。也许一种思考方式是——再次强调，这些类比并不完美——我们偶然发现了Transformer神经网络，它极其强大、通用。你可以在音频、视频、文本或任何你想要的数据上训练Transformer，它都能学习模式，效果非常好。这对我来说几乎意味着这就像一块皮层组织。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just a lot of it. So maybe one way to think about it, I don't know if this is the best way, but I almost feel like — again, making these analogies imperfect as they are — we've stumbled by with the transformer neural network, which is extremely powerful, very general. You can train transformers on audio, or video, or text, or whatever you want, and it just learns patterns and they're very powerful, and it works really well. That to me almost indicates that this is some piece of cortical tissue.</p>
</details>

因为大脑皮层以其高度的可塑性而闻名。你可以重新连接大脑的某些部分。有过一些有点残忍的实验，比如将视觉皮层连接到听觉皮层，结果动物学得很好。所以我认为这就像皮层组织。当我们在神经网络内部进行推理和规划，为思考模型生成推理轨迹时，这有点像前额叶皮层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's something like that, because the cortex is famously very plastic as well. You can rewire parts of brains. There were the slightly gruesome experiments with rewiring the visual cortex to the auditory cortex, and this animal learned fine, et cetera. So I think that this is cortical tissue. I think when we're doing reasoning and planning inside the neural networks, doing reasoning traces for thinking models, that's kind of like the prefrontal cortex.</p>
</details>

也许这些可以算是打上了勾，但我仍然认为大脑中还有很多部分和神经核没有被探索。例如，当我们用强化学习微调模型时，基底节在做一些强化学习的工作。但海马体在哪里？它对应什么并不明显。有些部分可能不重要，比如小脑可能对认知不重要，所以我们可以跳过一些。但我仍然认为，比如杏仁核，所有情绪和本能的部分，我们还没有真正复制。我不知道我们是否应该追求建立一个人类大脑的类似物。我本质上更像个工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe those are like little checkmarks, but I still think there are many brain parts and nuclei that are not explored. For example, there's a basal ganglia doing a bit of reinforcement learning when we fine-tune the models on reinforcement learning. But where's the hippocampus? Not obvious what that would be. Some parts are probably not important. Maybe the cerebellum is not important to cognition, its thoughts, so maybe we can skip some of it. But I still think there's, for example, the amygdala, all the emotions and instincts. There's probably a bunch of other nuclei in the brain that are very ancient that I don't think we've really replicated. I don't know that we should be pursuing the building of an analog of a human brain. I'm an engineer mostly at heart.</p>
</details>

也许回答这个问题的另一种方式是，你不会雇佣这个东西做实习生。它缺少很多东西，因为它带有许多认知缺陷，这些缺陷我们在与模型交谈时都能直观地感觉到。所以它还没有完全到位。你可以把它看作是，大脑的所有部分还没有全部打上勾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe another way to answer the question is that you're not going to hire this thing as an intern. It's missing a lot of it because it comes with a lot of these cognitive deficits that we all intuitively feel when we talk to the models. So it's not fully there yet. You can look at it as not all the brain parts are checked off yet.</p>
</details>

### 持续学习的挑战与“睡眠”的缺失

**Interviewer:** 这可能与思考这些问题将以多快速度解决有关。有时人们会说关于持续学习，“看，你可以很容易地复制这个能力。就像上下文学习是预训练自发产生的结果一样，如果模型被激励在更长的时间跨度内回忆信息，那么更长期的持续学习也会自发出现。” 那么如果有一个外循环的强化学习，其中包含许多会话，那么这种自我微调的持续学习，或者写入外部记忆的能力，就会自发出现。你认为这样的事情可能吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is maybe relevant to the question of thinking about how fast these issues will be solved. Sometimes people will say about continual learning, "Look, you could easily replicate this capability. Just as in-context learning emerged spontaneously as a result of pre-training, continual learning over longer horizons will emerge spontaneously if the model is incentivized to recollect information over longer horizons, or horizons longer than one session." So if there's some outer loop RL which has many sessions within that outer loop, then this continual learning where it fine-tunes itself, or it writes to an external memory or something, will just emerge spontaneously. Do you think things like that are plausible?</p>
</details>

**Andrej Karpathy:** 我不太认同这种看法。这些模型在启动时，如果窗口里没有词元，它们总是从头开始。所以我不知道在那种世界观下会是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know that I fully resonate with that. These models, when you boot them up and they have zero tokens in the window, they're always restarting from scratch where they were. So I don't know in that worldview what it looks like.</p>
</details>

也许可以和人类做个类比——因为我觉得这样思考比较具体和有趣——我感觉当我醒着的时候，我正在建立一个关于白天发生的事情的上下文窗口。但是当我睡觉时，会发生一些神奇的事情，我不认为那个上下文窗口会一直存在。有一些过程将信息蒸馏到我大脑的权重中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe making some analogies to humans—just because I think it's roughly concrete and interesting to think through—I feel like when I'm awake, I'm building up a context window of stuff that's happening during the day. But when I go to sleep, something magical happens where I don't think that context window stays around. There's some process of distillation into the weights of my brain.</p>
</details>

这发生在睡眠期间。我们在大型语言模型中没有与此等效的东西。对我来说，当你谈论持续学习缺失时，这更接近。这些模型没有一个蒸馏阶段，去吸收发生过的事情，痴迷地分析它，思考它，进行一些合成数据生成过程，然后将其蒸馏回权重中。也许是为每个人创建一个特定的神经网络，比如一个**LoRA**（Low-Rank Adaptation：一种高效的微调技术，通过在模型中插入并只训练小型的、低秩的矩阵来调整模型，而不是训练全部权重）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This happens during sleep and all this stuff. We don't have an equivalent of that in large language models. That's to me more adjacent to when you talk about continual learning and so on as absent. These models don't really have a distillation phase of taking what happened, analyzing it obsessively, thinking through it, doing some synthetic data generation process and distilling it back into the weights, and maybe having a specific neural net per person. Maybe it's a LoRA. It's not a full-weight neural network.</p>
</details>

但我们确实想创造方法来构建这些具有很长上下文的个体。这不仅仅是停留在上下文窗口中，因为上下文窗口会变得非常长。也许我们有一些非常精巧的稀疏注意力机制。但我仍然认为，人类显然有某种过程将部分知识蒸馏到权重中。我们缺少这个。我也认为人类有一些非常精巧的稀疏注意力方案，我们开始看到一些早期的迹象。DeepSeek v3.2 刚刚发布，我看到他们举了一个稀疏注意力的例子，这是实现非常长上下文窗口的一种方式。所以我感觉我们正在通过一个非常不同的过程，重现进化所想出的许多认知技巧。但我们最终会在认知架构上趋同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's just some small sparse subset of the weights that are changed. But we do want to create ways of creating these individuals that have very long context. It's not only remaining in the context window because the context windows grow very, very long. Maybe we have some very elaborate, sparse attention over it. But I still think that humans obviously have some process for distilling some of that knowledge into the weights. We're missing it. I do also think that humans have some very elaborate, sparse attention scheme, which I think we're starting to see some early hints of. DeepSeek v3.2 just came out and I saw that they have sparse attention as an example, and this is one way to have very, very long context windows. So I feel like we are redoing a lot of the cognitive tricks that evolution came up with through a very different process. But we're going to converge on a similar architecture cognitively.</p>
</details>

### 从 nanochat 构建看AI编程的真实能力

**Interviewer:** 既然你最近刚写完 nanochat，构建聊天机器人的每一步在你的脑海中都还很新鲜。我很好奇你是否有类似的想法，关于“从GPT-2到nanochat，没有哪一件事是唯一关键的”。从这次经历中，你有哪些令人惊讶的收获？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I was about to ask you a very similar question about nanochat. Since you just coded it up recently, every single step in the process of building a chatbot is fresh in your RAM. I'm curious if you had similar thoughts about, "Oh, there was no one thing that was relevant to going from GPT-2 to nanochat." What are some surprising takeaways from the experience?</p>
</details>

**Andrej Karpathy:** 构建 nanochat？nanochat是我昨天还是前天发布的一个代码库。它试图成为最简单的、完整的代码库，涵盖了构建一个ChatGPT克隆版的整个端到端流程。所以它包含了所有的步骤，而不仅仅是任何一个单独的步骤。过去我曾研究过所有单独的步骤，并发布了一些小程序，用简单的代码展示了算法上是如何实现的。但这个项目处理的是整个流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of building nanochat? So nanochat is a repository I released. Was it yesterday or the day before? I can't remember. It's trying to be the simplest complete repository that covers the whole pipeline end-to-end of building a ChatGPT clone. So you have all of the steps, not just any individual step, which is a bunch. I worked on all the individual steps in the past and released small pieces of code that show you how that's done in an algorithmic sense, in simple code. But this handles the entire pipeline.</p>
</details>

**Interviewer:** 从中学习的最佳方式是什么？是删除所有代码然后尝试从头重写，还是尝试对其进行修改？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is the best way for somebody to learn from it? Is it to just delete all the code and try to reimplement from scratch, try to add modifications to it?</p>
</details>

**Andrej Karpathy:** 这个问题很好。基本上，它大约有8000行代码，带你走完整个流程。我可能会把它放在右边的显示器上。如果你有两个显示器，把它放在右边。然后你想从头开始构建，就从头开始。你不允许复制粘贴，但可以参考。也许我会这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a great question. Basically it's about 8,000 lines of code that takes you through the entire pipeline. I would probably put it on the right monitor. If you have two monitors, you put it on the right. You want to build it from scratch, you build it from the start. You're not allowed to copy-paste, you're allowed to reference, you're not allowed to copy-paste. Maybe that's how I would do it.</p>
</details>

但我认为有两种知识。一种是高层次的表面知识，但当你从头开始构建某样东西时，你被迫面对自己不理解的地方，而你之前并不知道自己不理解。这总是能带来更深的理解。这是构建的唯一方式。如果我不能构建它，我就不理解它。这是费曼的名言，我相信。我一直坚信这一点。所以不要写博客，不要做幻灯片，不要做那些。去写代码，把它组织起来，让它工作。这是唯一的途径。否则，你就是知识缺失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I also think the repository by itself is a pretty large beast. When you write this code, you don't go from top to bottom, you go from chunks and you grow the chunks, and that information is absent. You wouldn't know where to start. So it's not just a final repository that's needed, it's the building of the repository, which is a complicated chunk-growing process. So that part is not there yet. I would love to add that probably later this week. It's probably a video or something like that. Roughly speaking, that's what I would try to do. Build the stuff yourself, but don't allow yourself copy-paste. I do think that there's two types of knowledge, almost. There's the high-level surface knowledge, but when you build something from scratch, you're forced to come to terms with what you don't understand and you don't know that you don't understand it. It always leads to a deeper understanding. It's the only way to build. If I can't build it, I don't understand it. That’s a Feynman quote, I believe. I 100% have always believed this very strongly. Don't write blog posts, don't do slides, don't do any of that. Build the code, arrange it, get it to work. It's the only way to go. Otherwise, you're missing knowledge.</p>
</details>

**Interviewer:** 你发推文说，在组装这个代码库的过程中，编程模型对你的帮助非常小。我很好奇为什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You tweeted out that coding models were of very little help to you in assembling this repository. I'm curious why that was.</p>
</details>

**Andrej Karpathy:** 我大概花了一个多月的时间构建了这个代码库。我认为现在人们与代码互动的方式主要有三类。一些人完全拒绝使用LLM，完全从零开始写。这可能不再是正确的做法了。中间一类，也就是我所在的位置，是你仍然从零开始写很多东西，但你会使用这些模型现在提供的自动补全功能。当你开始写一小段代码时，它会为你自动补全，你只需按Tab键。大多数时候是正确的，有时不是，你需要编辑。但你仍然是代码的架构师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess I built the repository over a period of a bit more than a month. I would say there are three major classes of how people interact with code right now. Some people completely reject all of LLMs and they are just writing by scratch. This is probably not the right thing to do anymore. The intermediate part, which is where I am, is you still write a lot of things from scratch, but you use the autocomplete that's available now from these models. So when you start writing out a little piece of it, it will autocomplete for you and you can just tap through. Most of the time it's correct, sometimes it's not, and you edit it. But you're still very much the architect of what you're writing.</p>
</details>

然后是“感觉式编程”（vibe coding）：“你好，请实现这个或那个”，然后回车，让模型去做。那就是智能体。我觉得智能体在非常特定的场景下是有效的，我也会在特定场景下使用它们。但这些都是可用的工具，你必须学会它们擅长什么，不擅长什么，以及何时使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then there's the vibe coding: "Hi, please implement this or that," enter, and then let the model do it. That's the agents. I do feel like the agents work in very specific settings, and I would use them in specific settings. But these are all tools available to you and you have to learn what they're good at, what they're not good at, and when to use them.</p>
</details>

例如，智能体在做样板代码（boilerplate）时非常出色。它们非常擅长那些在互联网上经常出现的东西，因为在这些模型的训练集中有大量例子。nanochat 不属于这类，因为它是一个相当独特的代码库。我组织代码的方式并不常见，它不是样板代码，而是智力密集型的代码，所有东西都必须非常精确地安排。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the agents are pretty good, for example, if you're doing boilerplate stuff. Boilerplate code that's just copy-paste stuff, they're very good at that. They're very good at stuff that occurs very often on the Internet because there are lots of examples of it in the training sets of these models. I would say nanochat is not an example of those because it's a fairly unique repository. There's not that much code in the way that I've structured it. It's not boilerplate code. It's intellectually intense code almost, and everything has to be very precisely arranged.</p>
</details>

模型有太多的认知缺陷。一个例子是，它们一直误解代码，因为它们对互联网上典型的做事方式有太多记忆，而我恰好没有采用那些方式。比如，你有八个GPU都在做前向和后向传播。在它们之间同步梯度的方法是使用PyTorch的**Distributed Data Parallel (DDP)**（分布式数据并行：PyTorch中用于在多个GPU上进行模型训练的工具，能自动处理梯度同步）容器。我没有用DDP，因为我不想用，没必要。我把它扔掉了，在优化器的步骤里写了自己的同步例程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The models have so many cognitive deficits. One example, they kept misunderstanding the code because they have too much memory from all the typical ways of doing things on the Internet that I just wasn't adopting. Maybe one example? You have eight GPUs that are all doing forward, backwards. The way to synchronize gradients between them is to use a Distributed Data Parallel container of PyTorch, which automatically as you're doing the backward, it will start communicating and synchronizing gradients. I didn't use DDP because I didn't want to use it, because it's not necessary. I threw it out and wrote my own synchronization routine that's inside the step of the optimizer.</p>
</details>

模型一直想让我用DDP容器，它们非常担心。这太技术性了，但我没有用那个容器，因为我不需要，我自己实现了一个类似的东西。它们就是无法理解这一点。它们一直试图搞乱代码风格，过度防御，添加各种try-catch语句，试图把它变成一个生产级的代码库，而我的代码里有一些假设，这没关系。我觉得它们在臃肿化代码库，增加复杂性，还一直误解，使用过时的API。简直一团糟。它在净值上没有用处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The models were trying to get me to use the DDP container. They were very concerned. This gets way too technical, but I wasn't using that container because I don't need it and I have a custom implementation of something like it. They just couldn't internalize that you had your own. They couldn't get past that. They kept trying to mess up the style. They're way too over-defensive. They make all these try-catch statements. They keep trying to make a production code base, and I have a bunch of assumptions in my code, and it's okay. I don't need all this extra stuff in there. So I feel like they're bloating the code base, bloating the complexity, they keep misunderstanding, they're using deprecated APIs a bunch of times. It's a total mess. It's just not net useful.</p>
</details>

**Interviewer:** 这之所以有趣，是因为人们关于AI爆炸式发展并迅速达到超级智能的主要叙事，就是AI自动化AI工程和AI研究。他们会看到Claude能从零开始创建整个CRUD应用，然后想，“想象一下，如果OpenAI和DeepMind内部有同样的能力，有一千个或一百万个你在并行工作，寻找微小的架构调整。” 听到你说这恰恰是它们不对称地更差的地方，这与预测“AI 2027”式爆炸是否会很快发生非常相关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason this question is so interesting is because the main story people have about AI exploding and getting to superintelligence pretty rapidly is AI automating AI engineering and AI research. They'll look at the fact that you can have Claude Code and make entire applications, CRUD applications, from scratch and think, "If you had this same capability inside of OpenAI and DeepMind and everything, just imagine a thousand of you or a million of you in parallel, finding little architectural tweaks." It's quite interesting to hear you say that this is the thing they're asymmetrically worse at. It's quite relevant to forecasting whether the AI 2027-type explosion is likely to happen anytime soon.</p>
</details>

**Andrej Karpathy:** 这说得很好，也触及了为什么我的时间线会更长一些。你说得对，它们不擅长写以前从未写过的代码，而这正是我们构建这些模型时想要实现的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a good way of putting it, and you're getting at why my timelines are a bit longer. You're right. They're not very good at code that has never been written before, maybe it's one way to put it, which is what we're trying to achieve when we're building these models.</p>
</details>

### AI 发展是延续，而非断裂

**Interviewer:** 从历史上看，编程领域有过很多生产力提升工具——编译器、代码检查工具、更好的编程语言——它们提高了程序员的生产力，但并未导致爆炸式增长。你说的自动补全听起来很像这类工具，而另一类则是程序员的完全自动化。有趣的是，你看到的更多是属于编译器这类历史类比范畴的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's another reason this is really interesting. Through the history of programming, there have been many productivity improvements—compilers, linting, better programming languages—which have increased programmer productivity but have not led to an explosion. That sounds very much like the autocomplete tab, and this other category is just automation of the programmer. It's interesting you're seeing more in the category of the historical analogies of better compilers or something.</p>
</details>

**Andrej Karpathy:** 这或许引出了另一个想法。我很难区分AI从哪里开始，到哪里结束，因为我从根本上将AI视为计算的延伸。我看到一条从一开始就存在的递归式自我改进或加速程序员工作的连续谱：代码编辑器、语法高亮、甚至数据类型检查——所有这些我们为彼此构建的工具，甚至搜索引擎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe this gets to one other thought. I have a hard time differentiating where AI begins and stops because I see AI as fundamentally an extension of computing in a pretty fundamental way. I see a continuum of this recursive self-improvement or speeding up programmers all the way from the beginning: code editors, syntax highlighting, or checking even of the types, like data type checking—all these tools that we've built for each other. Even search engines.</p>
</details>

为什么搜索引擎不算AI的一部分？排名就是AI。在某个阶段，甚至早期的谷歌都将自己视为一家做谷歌搜索引擎的AI公司，这完全合理。我认为它比其他人看到的更具连续性，我很难划清界限。我觉得我们现在有了一个更好的自动补全工具，现在我们还有了一些智能体，它们是循环式的，但有时会失控。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why aren't search engines part of AI? Ranking is AI. At some point, Google, even early on, was thinking of themselves as an AI company doing Google Search engine, which is totally fair. I see it as a lot more of a continuum than other people do, and it's hard for me to draw the line. I feel like we're now getting a much better autocomplete, and now we're also getting some agents which are these loopy things, but they go off-rails sometimes.</p>
</details>

正在发生的是，人类在逐步减少做底层的工作。我们不写汇编代码，因为我们有编译器。编译器会把我用C写的高级语言转换成汇编代码。我们正在非常缓慢地将自己抽象出来。有一个我称之为“自主性滑块”的东西，越来越多可自动化的东西被自动化了，我们做的越来越少，并将自己提升到自动化的更高抽象层级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's going on is that the human is progressively doing a bit less and less of the low-level stuff. We're not writing the assembly code because we have compilers. Compilers will take my high-level language in C and write the assembly code. We're abstracting ourselves very, very slowly. There's this what I call "autonomy slider," where more and more stuff is automated—of the stuff that can be automated at any point in time—and we're doing a bit less and less and raising ourselves in the layer of abstraction over the automation.</p>
</details>

### RL 的致命缺陷：通过吸管吸取监督信号

**Interviewer:** 让我们谈谈强化学习（RL）。你发了一些关于这个的非常有趣的推文。从概念上讲，我们应该如何理解人类仅通过与环境互动就能建立丰富的世界模型，而且这似乎几乎与回合结束时的最终奖励无关？如果有人创业，十年后她才知道企业是成功还是失败，我们说她获得了大量的智慧和经验。但这并不是因为过去十年中发生的每一件事的对数概率被上调或下调了。某种更刻意、更丰富的事情正在发生。机器学习中与此对应的类比是什么？它与我们现在用LLM做的事情有何不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about RL a bit. You tweeted some very interesting things about this. Conceptually, how should we think about the way that humans are able to build a rich world model just from interacting with our environment, and in ways that seem almost irrespective of the final reward at the end of the episode? If somebody is starting a business, and at the end of 10 years, she finds out whether the business succeeded or failed, we say that she's earned a bunch of wisdom and experience. But it's not because the log probs of every single thing that happened over the last 10 years are up-weighted or down-weighted. Something much more deliberate and rich is happening. What is the ML analogy, and how does that compare to what we're doing with LLMs right now?</p>
</details>

**Andrej Karpathy:** 也许我的说法是，正如我所说，人类不使用强化学习。我认为他们做的是不同的事情。强化学习比普通人想象的要糟糕得多。强化学习非常糟糕。只是我们以前拥有的一切都比它更糟，因为以前我们只是模仿人类，所以存在各种问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe the way I would put it is that humans don't use reinforcement learning, as I said. I think they do something different. Reinforcement learning is a lot worse than I think the average person thinks. Reinforcement learning is terrible. It just so happens that everything that we had before it is much worse because previously we were just imitating people, so it has all these issues.</p>
</details>

在强化学习中，假设你正在解决一个数学问题。你得到一个问题，然后尝试找到解决方案。在强化学习中，你会首先并行尝试很多方法。你得到一个问题，然后尝试上百种不同的解法。这些尝试可能很复杂，比如“哦，让我试试这个，让我试试那个，这个不行，那个也不行”等等。然后也许你得到了一个答案。现在你核对书后的答案，发现，“好的，正确答案是这个。” 你看到这一种、这一种和那一种得到了正确答案，但其他97种没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In reinforcement learning, say you're solving a math problem, because it's very simple. You're given a math problem and you're trying to find the solution. In reinforcement learning, you will try lots of things in parallel first. You're given a problem, you try hundreds of different attempts. These attempts can be complex. They can be like, "Oh, let me try this, let me try that, this didn't work, that didn't work," etc. Then maybe you get an answer. Now you check the back of the book and you see, "Okay, the correct answer is this." You can see that this one, this one, and that one got the correct answer, but these other 97 of them didn't.</p>
</details>

强化学习的做法是，它会去看那些做得好的解法，然后你在整个过程中做的每一件事，每一个词元，都会被上调权重，意思是“多做这个”。问题在于，人们会说你的估计器方差很大，但其实它就是充满噪音。它几乎假设你为了得到正确答案而做的每一个小步骤都是正确的，但事实并非如此。你可能走错了路，最后才碰巧得到了正确答案。只要你最终得到了正确答案，你做的每一个错误的事情都会被上调权重，被认为是“多做这个”。这太糟糕了，全是噪音。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Literally what reinforcement learning does is it goes to the ones that worked really well and every single thing you did along the way, every single token gets upweighted like, "Do more of this." The problem with that is people will say that your estimator has high variance, but it's just noisy. It's noisy. It almost assumes that every single little piece of the solution that you made that arrived at the right answer was the correct thing to do, which is not true. You may have gone down the wrong alleys until you arrived at the right solution. Every single one of those incorrect things you did, as long as you got to the correct solution, will be upweighted as, "Do more of this." It's terrible. It's noise.</p>
</details>

你做了所有这些工作，最后只得到一个数字，比如“哦，你做对了”。基于此，你将整个轨迹上调或下调权重。我喜欢称之为“通过吸管吸取监督信号”。你做了所有这些可能长达一分钟的展开工作，然后通过一根吸管吸取最终奖励信号的监督比特，然后将它广播到整个轨迹上，用它来上调或下调该轨迹的权重。这既愚蠢又疯狂。人类绝不会这么做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've done all this work only to find, at the end, you get a single number of like, "Oh, you did correct." Based on that, you weigh that entire trajectory as like, upweight or downweight. The way I like to put it is you're sucking supervision through a straw. You've done all this work that could be a minute of rollout, and you're sucking the bits of supervision of the final reward signal through a straw and you're broadcasting that across the entire trajectory and using that to upweight or downweight that trajectory. It's just stupid and crazy. A human would never do this.</p>
</details>

首先，人类绝不会做上百次展开。其次，当一个人找到解决方案时，他们会有一个相当复杂的复盘过程：“好的，我认为这些部分我做得很好，这些部分我做得不太好。我应该这样做或那样做。” 他们会思考。目前的LLM中没有任何东西能做到这一点。没有与此等效的东西。但我确实看到一些论文正在尝试这样做，因为这对领域内的每个人来说都是显而易见的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Number one, a human would never do hundreds of rollouts. Number two, when a person finds a solution, they will have a pretty complicated process of review of, "Okay, I think these parts I did well, these parts I did not do that well. I should probably do this or that." They think through things. There's nothing in current LLMs that does this. There's no equivalent of it. But I do see papers popping out that are trying to do this because it's obvious to everyone in the field.</p>
</details>

### AI 训练算法的演进与未来

**Andrej Karpathy:** 顺便说一句，最初的模仿学习是极其令人惊讶、神奇和了不起的，我们可以通过模仿人类来进行微调。那太不可思议了。因为一开始，我们只有基础模型。基础模型就是自动补全。当时我并不清楚这一点，我必须去学习。让我大开眼界的论文是**InstructGPT**（InstructGPT：OpenAI 的一项研究，展示了通过人类反馈微调（RLHF）可以使语言模型更好地遵循指令，是ChatGPT的前身）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first imitation learning, by the way, was extremely surprising and miraculous and amazing, that we can fine-tune by imitation on humans. That was incredible. Because in the beginning, all we had was base models. Base models are autocomplete. It wasn't obvious to me at the time, and I had to learn this. The paper that blew my mind was InstructGPT,</p>
</details>

因为它指出，你可以拿一个预训练模型，也就是一个自动补全模型，如果你只在看起来像对话的文本上微调它，模型会非常迅速地适应并变得非常健谈，同时保留所有来自预训练的知识。这让我大开眼界，因为我不明白它在风格上能如此迅速地调整，并通过几轮对这类数据的微调，变成一个用户的助手。我觉得这太神奇了。那是两三年的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because it pointed out that you can take the pretrained model, which is autocomplete, and if you just fine-tune it on text that looks like conversations, the model will very rapidly adapt to become very conversational, and it keeps all the knowledge from pre-training. This blew my mind because I didn't understand that stylistically, it can adjust so quickly and become an assistant to a user through just a few loops of fine-tuning on that kind of data. It was very miraculous to me that that worked. So incredible. That was two to three years of work.</p>
</details>

现在是RL。RL让你能比仅仅模仿学习做得更好，因为你可以有这些奖励函数，你可以通过爬山算法来优化奖励函数。有些问题只有正确答案，你可以在此基础上进行优化，而无需模仿专家的轨迹。这太棒了。模型还可以发现人类可能永远想不出的解决方案。这太不可思议了。然而，它仍然是愚蠢的。我们需要更多。我昨天看到谷歌的一篇论文，试图融入这种“反思与复盘”的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now came RL. And RL allows you to do a bit better than just imitation learning because you can have these reward functions and you can hill-climb on the reward functions. Some problems have just correct answers, you can hill-climb on that without getting expert trajectories to imitate. So that's amazing. The model can also discover solutions that a human might never come up with. This is incredible. Yet, it's still stupid. We need more. I saw a paper from Google yesterday that tried to have this reflect & review idea in mind.</p>
</details>

**Interviewer:** 是那个记忆库论文吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Was it the memory bank paper or something?</p>
</details>

**Andrej Karpathy:** 不知道。我看到过几篇类似思路的论文。所以我预计在LLM算法领域将会有一些重大的更新。我认为我们还需要三四五次这样的更新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know. I've seen a few papers along these lines. So I expect there to be some major update to how we do algorithms for LLMs coming in that realm. I think we need three or four or five more, something like that.</p>
</details>

**Interviewer:** 你太擅长创造生动的短语了，“通过吸管吸取监督信号”。太棒了。你说基于结果的奖励的问题在于，你有一个巨大的轨迹，然后在最后，你试图从那最后的一点点信息中学习所有你应该做什么以及应该了解世界的知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're so good at coming up with evocative phrases. "Sucking supervision through a straw." It's so good. You're saying the problem with outcome-based reward is that you have this huge trajectory, and then at the end, you're trying to learn every single possible thing about what you should do and what you should learn about the world from that one final bit.</p>
</details>

**Interviewer:** 既然这一点很明显，为什么基于过程的监督作为一种替代方案，未能成功地让模型变得更强大？是什么阻止了我们使用这种替代范式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Given the fact that this is obvious, why hasn't process-based supervision as an alternative been a successful way to make models more capable? What has been preventing us from using this alternative paradigm?</p>
</details>

**Andrej Karpathy:** 基于过程的监督指的是我们不会只在最后才有奖励函数。在你工作了10分钟后，我不会只告诉你你做得好还是不好。我会在每一步都告诉你你做得怎么样。我们之所以没有这样做，是因为如何正确地做到这一点很棘手。你有部分解决方案，但你不知道如何分配功劳。当你得到正确答案时，它只是与答案的一个等式匹配，实现起来非常简单。但如果你做过程监督，你如何以一种可自动化的方式进行部分功劳分配？这并不明显。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Process-based supervision just refers to the fact that we're not going to have a reward function only at the very end. After you've done 10 minutes of work, I'm not going to tell you you did well or not well. I'm going to tell you at every single step of the way how well you're doing. The reason we don't have that is it's tricky how you do that properly. You have partial solutions and you don't know how to assign credit. So when you get the right answer, it's just an equality match to the answer. It’s very simple to implement. If you're doing process supervision, how do you assign in an automatable way, a partial credit assignment? It's not obvious how you do it.</p>
</details>

很多实验室都在尝试用LLM裁判来做这件事。你让LLM来做。你提示一个LLM，“嘿，看看一个学生的部分解决方案。如果答案是这个，你认为他们做得怎么样？”然后他们尝试调整提示。这之所以棘手，原因很微妙。事实是，任何时候你用一个LLM来分配奖励，那些LLM都是拥有数十亿参数的庞然大物，它们是可以被博弈的。如果你针对它们进行强化学习，几乎可以肯定你会为你的LLM裁判找到对抗性样本。所以你不能持续这样做太久。你可能做10步或20步，也许会成功，但你不能做100步或1000步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lots of labs are trying to do it with these LLM judges. You get LLMs to try to do it. You prompt an LLM, "Hey, look at a partial solution of a student. How well do you think they're doing if the answer is this?" and they try to tune the prompt. The reason that this is tricky is quite subtle. It's the fact that anytime you use an LLM to assign a reward, those LLMs are giant things with billions of parameters, and they're gameable. If you're reinforcement learning with respect to them, you will find adversarial examples for your LLM judges, almost guaranteed. So you can't do this for too long. You do maybe 10 steps or 20 steps, and maybe it will work, but you can't do 100 or 1,000.</p>
</details>

我脑海中一个突出的例子，这可能是公开的：如果你用一个LLM裁判作为奖励，你给它一个学生的解决方案，然后问它学生做得好不好。我们针对那个奖励函数用强化学习进行训练，效果非常好。然后，突然间，奖励变得非常大。这是一个巨大的飞跃，表现完美。你看着它想，“哇，这意味着这个学生在所有这些问题上都完美了。它完全解决了数学。” 但是当你查看模型生成的完成时，它们完全是胡说八道。它们开头还好，然后就变成了“dhdhdhdh”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I understand it's not obvious, but basically the model will find little cracks. It will find all these spurious things in the nooks and crannies of the giant model and find a way to cheat it. One example that's prominently in my mind, this was probably public, if you're using an LLM judge for a reward, you just give it a solution from a student and ask it if the student did well or not. We were training with reinforcement learning against that reward function, and it worked really well. Then, suddenly, the reward became extremely large. It was a massive jump, and it did perfect. You're looking at it like, "Wow, this means the student is perfect in all these problems. It's fully solved math." But when you look at the completions that you're getting from the model, they are complete nonsense. They start out okay, and then they change to "dhdhdhdh."</p>
</details>

你看着它，觉得这太疯狂了。它怎么能得到100%的奖励？你再去看那个LLM裁判，结果发现“dhdhdhdh”对模型来说是一个对抗性样本，它给这个样本分配了100%的概率。这只是因为这是一个LLM的样本外示例。它在训练期间从未见过，你完全处于泛化领域。你基本上是在训练LLM成为一个提示注入模型。不，甚至不是。提示注入太花哨了。你是在寻找所谓的对抗性样本。这些是无意义的解决方案，显然是错误的，但模型认为它们非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're looking at it, and it's like, this is crazy. How is it getting a reward of one or 100%? You look at the LLM judge, and it turns out that "dhdhdhdh" is an adversarial example for the model, and it assigns 100% probability to it. It's just because this is an out-of-sample example to the LLM. It's never seen it during training, and you're in pure generalization land. It's never seen it during training, and in the pure generalization land, you can find these examples that break it. You're basically training the LLM to be a prompt injection model. Not even that. Prompt injection is way too fancy. You're finding adversarial examples, as they're called. These are nonsensical solutions that are obviously wrong, but the model thinks they are amazing.</p>
</details>

### 模型坍塌：合成数据的熵陷阱

**Interviewer:** 你刚才说，模型坍塌与合成数据生成有关，是因为你希望能够提出那些不在你现有数据分布中的合成问题或反思吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just to make sure I understood, the reason that the collapse is relevant to synthetic data generation is because you want to be able to come up with synthetic problems or reflections which are not already in your data distribution?</p>
</details>

**Andrej Karpathy:** 我想说的是，假设我们有一章书的内容，我让一个LLM去思考它，它会给你一些看起来非常合理的东西。但如果我问它10次，你会发现所有的回答都是一样的。你不能仅仅通过在相同的提示信息上不断扩展“反思”来获得回报。任何单个样本看起来都没问题，但它们的分布却非常糟糕。糟糕到如果你持续在自己的产出上训练过多，你实际上会坍塌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess what I'm saying is, say we have a chapter of a book and I ask an LLM to think about it, it will give you something that looks very reasonable. But if I ask it 10 times, you'll notice that all of them are the same. You can't just keep scaling "reflection" on the same amount of prompt information and then get returns from that. Any individual sample will look okay, but the distribution of it is quite terrible. It's quite terrible in such a way that if you continue training on too much of your own stuff, you actually collapse.</p>
</details>

我认为这个问题可能没有根本性的解决方案。我也认为人类会随着时间推移而坍塌。这些类比惊人地好用。人类在一生中会坍塌。这就是为什么孩子们还没有过度拟合。他们会说出让你震惊的话，因为你能理解他们的出发点，但那不是人们通常会说的话，因为他们还没有坍塌。但我们已经坍塌了。我们最终会反复思考同样的事情，说越来越多同样的话，学习率下降，坍塌继续恶化，然后一切都退化了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that there's possibly no fundamental solution to this. I also think humans collapse over time. These analogies are surprisingly good. Humans collapse during the course of their lives. This is why children, they haven't overfit yet. They will say stuff that will shock you because you can see where they're coming from, but it's just not the thing people say, because they're not yet collapsed. But we're collapsed. We end up revisiting the same thoughts. We end up saying more and more of the same stuff, and the learning rates go down, and the collapse continues to get worse, and then everything deteriorates.</p>
</details>

**Interviewer:** 你看过那篇非常有趣的论文吗？它说做梦是防止这种过度拟合和坍塌的一种方式。做梦在进化上具有适应性，是因为它让你置身于与日常生活非常不同的奇怪情境中，从而防止这种过度拟合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Have you seen this super interesting paper that dreaming is a way of preventing this kind of overfitting and collapse? The reason dreaming is evolutionary adaptive is to put you in weird situations that are very unlike your day-to-day reality, so as to prevent this kind of overfitting.</p>
</details>

**Andrej Karpathy:** 这是个有趣的想法。我确实认为，当你在脑海中生成东西然后关注它时，你是在用自己的样本训练自己，你在用自己的合成数据训练。如果这样做太久，你就会偏离轨道，坍塌得太厉害。你必须总是在生活中寻求**熵**（entropy：在信息论中，熵衡量一个随机变量的不确定性。在这里引申为多样性、新颖性和不可预测性）。与他人交谈是熵的一个很好的来源。所以也许大脑也建立了一些内部机制来增加这个过程中的熵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's an interesting idea. I do think that when you're generating things in your head and then you're attending to it, you're training on your own samples, you're training on your synthetic data. If you do it for too long, you go off-rails and you collapse way too much. You always have to seek entropy in your life. Talking to other people is a great source of entropy, and things like that. So maybe the brain has also built some internal mechanisms for increasing the amount of entropy in that process.</p>
</details>

### 从自动驾驶看AI的“九的征程”

**Interviewer:** 你提到过，你在2017年到2022年期间在特斯拉领导自动驾驶项目。你亲眼目睹了从酷炫的演示到现在成千上万辆汽车在路上实际进行自主驾驶的进展。为什么这花了十年？那段时间里发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You've talked about how you were at Tesla leading self-driving from 2017 to 2022. And you firsthand saw this progress from cool demos to now thousands of cars out there actually autonomously doing drives. Why did that take a decade? What was happening through that time?</p>
</details>

**Andrej Karpathy:** 我几乎会立刻反驳的一点是，这还远未完成。自动驾驶非常有趣，因为它确实是我很多直觉的来源，因为我花了五年时间在这上面。它有一段很长的历史，最早的自动驾驶演示可以追溯到1980年代。你可以看到1986年卡内基梅隆大学的一个演示，一辆卡车在路上自动驾驶。快进到我加入特斯拉的时候，我很早就看到了Waymo的演示。大概在2014年左右，它给了我一次完美的驾驶体验，那是十年前一次完美的Waymo驾驶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing I will almost instantly push back on is that this is not even near done, in a bunch of ways that I'm going to get to. Self-driving is very interesting because it's definitely where I get a lot of my intuitions because I spent five years on it. It has this entire history where the first demos of self-driving go all the way to the 1980s. You can see a demo from CMU in 1986. There's a truck that's driving itself on roads. Fast forward. When I was joining Tesla, I had a very early demo of Waymo. It basically gave me a perfect drive in 2014 or something like that, so a perfect Waymo drive a decade ago.</p>
</details>

对于某些类型的任务和工作，存在一个非常大的“演示到产品”的差距，演示很容易，但产品很难。在像自动驾驶这样的情况下尤其如此，因为失败的代价太高了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I thought it was very close and then it still took a long time. For some kinds of tasks and jobs and so on, there's a very large demo-to-product gap where the demo is very easy, but the product is very hard. It's especially the case in cases like self-driving where the cost of failure is too high.</p>
</details>

许多行业、任务和工作可能没有这个特性，但当你确实有这个特性时，那肯定会延长项目的时间线。例如，在软件工程中，我确实认为这个特性存在。对于很多“感觉式编程”来说，它不存在。但如果你在写真正的生产级代码，这个特性应该存在，因为任何类型的错误都可能导致安全漏洞。数百万甚至上亿人的个人社会安全号码被泄露。所以在软件领域，人们应该像在自动驾驶领域一样小心。在自动驾驶中，如果出问题，你可能会受伤。有更糟的后果。但在软件领域，后果的严重性几乎是无上限的。我认为它们共享这个特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Many industries, tasks, and jobs maybe don't have that property, but when you do have that property, that definitely increases the timelines. For example, in software engineering, I do think that property does exist. For a lot of vibe coding, it doesn't. But if you're writing actual production-grade code, that property should exist, because any kind of mistake leads to a security vulnerability or something like that. Millions and hundreds of millions of people's personal Social Security numbers get leaked or something like that. So in software, people should be careful, kind of like in self-driving. In self-driving, if things go wrong, you might get injured. There are worse outcomes. But in software, it's almost unbounded how terrible something could be. I do think that they share that property.</p>
</details>

之所以花费这么长时间，思考它的方式是“九的征程”（a march of nines）。每一个“九”（指可靠性达到90%, 99%, 99.9%等）都需要恒定的工作量。当你有一个演示，某样东西90%的时间能工作，那只是第一个九。然后你需要第二个九，第三个九，第四个九，第五个九。我在特斯拉的五年左右时间里，我们大概经历了三个九或两个九的迭代。我不知道具体是多少，但肯定是多个九。而且还有更多的九要去实现。这就是为什么这些事情需要这么长时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What takes the long amount of time and the way to think about it is that it's a march of nines. Every single nine is a constant amount of work. Every single nine is the same amount of work. When you get a demo and something works 90% of the time, that's just the first nine. Then you need the second nine, a third nine, a fourth nine, a fifth nine. While I was at Tesla for five years or so, we went through maybe three nines or two nines. I don't know what it is, but multiple nines of iteration. There are still more nines to go. That's why these things take so long.</p>
</details>

这对我来说绝对是 formative 的，看到一个东西从演示变成……我对演示非常不感冒。每当我看到任何东西的演示，我都极度不为所动。如果是一个有人精心制作的展示性演示，那就更糟了。如果你能与它互动，会好一点。但即便如此，你还没完成。你需要真正的产品。当它接触到现实和所有需要修补的不同行为角落时，它将面临所有这些挑战。我们将看到所有这些事情上演。这是“九的征程”，每个九都是恒定的。演示是鼓舞人心的，但仍然有大量工作要做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's definitely formative for me, seeing something that was a demo. I'm very unimpressed by demos. Whenever I see demos of anything, I'm extremely unimpressed by that. If it's a demo that someone cooked up as a showing, it's worse. If you can interact with it, it's a bit better. But even then, you're not done. You need the actual product. It's going to face all these challenges when it comes in contact with reality and all these different pockets of behavior that need patching. We're going to see all this stuff play out. It's a march of nines. Each nine is constant. Demos are encouraging. It’s still a huge amount of work to do.</p>
</details>

**Interviewer:** 人们对这个类比提出的另一个反对意见是，自动驾驶花费了大量时间来解决稳健的基础感知问题、建立表征，以及拥有一个具备一定常识的模型，以便它能泛化到看到稍微超出分布范围的东西时。比如，如果有人在路上这样挥手让你停下，你不需要专门为此训练。模型会有一定的理解力来应对这种情况。这些都是我们今天通过LLM或VLM免费得到的东西，所以我们不必解决这些非常基础的表征问题。所以现在在不同领域部署AI，有点像把一个使用当前模型的自动驾驶汽车部署到另一个城市，这很难，但不是一个长达10年的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's another objection people make to that analogy, which is that with self-driving, what took a big fraction of that time was solving the problem of having basic perception that's robust, building representations, and having a model that has some common sense so it can generalize to when it sees something that's slightly out of distribution. If somebody's waving down the road this way, you don't need to train for it. The thing will have some understanding of how to respond to something like that. These are things we're getting for free with LLMs or VLMs today, so we don't have to solve these very basic representation problems. So now deploying AIs across different domains will sort of be like deploying a self-driving car with current models to a different city, which is hard but not like a 10-year-long task.</p>
</details>

**Andrej Karpathy:** 我不完全确定我是否同意这一点。我不知道我们免费得到了多少。我们对我们得到的东西仍然有很多理解上的差距。我们确实在一个实体中获得了更具泛化能力的智能，而自动驾驶是一个非常专用的任务。从某种意义上说，构建一个专用的任务可能更难，因为它不是从你正在大规模做的更通用的事情中自然产生的。但这个类比仍然不完全让我信服，因为LLM仍然相当不可靠，它们有很多需要填补的空白。我不认为我们能完全开箱即用地获得神奇的泛化能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm not 100% sure if I fully agree with that. I don't know how much we're getting for free. There's still a lot of gaps in understanding what we are getting. We're definitely getting more generalizable intelligence in a single entity, whereas self-driving is a very special-purpose task that requires. In some sense building a special-purpose task is maybe even harder in a certain sense because it doesn't fall out from a more general thing that you're doing at scale, if that makes sense. But the analogy still doesn't fully resonate because the LLMs are still pretty fallible and they have a lot of gaps that still need to be filled in. I don't think that we're getting magical generalization completely out of the box, in a certain sense.</p>
</details>

### 创立Eureka：在AI时代强化人类

**Interviewer:** 让我们谈谈教育和你的新项目Eureka。你可以选择再创办一个AI实验室来解决这些问题。我很好奇你现在在做什么，以及为什么不是AI研究本身？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about education and Eureka. One thing you could do is start another AI lab and then try to solve those problems. I’m curious what you're up to now, and why not AI research itself?</p>
</details>

**Andrej Karpathy:** 我觉得AI实验室正在做的事情有一定的确定性。我感觉我可以帮忙，但我不确定我能独特地改进它。我个人最大的担忧是，很多这类事情发生在人类的一边，而人类因此被剥夺了权力。我关心的不仅仅是我们即将建造的所有**戴森球**（Dyson sphere：一个理论上包围恒星并捕获其全部能量输出的巨型结构），我关心的是人类会发生什么。我希望人类在未来能过得很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess the way I would put it is I feel some amount of determinism around the things that AI labs are doing. I feel like I could help out there, but I don't know that I would uniquely improve it. My personal big fear is that a lot of this stuff happens on the side of humanity, and that humanity gets disempowered by it. I care not just about all the Dyson spheres that we're going to build and that AI is going to build in a fully autonomous way, I care about what happens to humans. I want humans to be well off in the future.</p>
</details>

我最害怕的是像电影《机器人总动员》(WALL-E)或《蠢蛋进化论》(Idiocracy)中描绘的那样，人类被置于这些事物的边缘。我希望人类在这个未来中变得更强大。对我来说，这要通过教育来实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel like that's where I can a lot more uniquely add value than an incremental improvement in the frontier lab. I'm most afraid of something depicted in movies like WALL-E or Idiocracy or something like that, where humanity is on the side of this stuff. I want humans to be much, much better in this future. To me, this is through education that you can achieve this.</p>
</details>

**Interviewer:** 那你在这方面在做什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what are you working on there?</p>
</details>

**Andrej Karpathy:** 最简单的描述方式是，我们正在努力建设“星际舰队学院”。我不知道你是否看过《星际迷航》。星际舰队学院是为前沿技术、建造宇宙飞船而设的精英机构，培养学员成为这些飞船的驾驶员。所以我想象一个精英机构，提供最新的技术知识，一个顶级的学校。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The easiest way I can describe it is we're trying to build the Starfleet Academy. I don’t know if you’ve watched Star Trek. I haven’t. Starfleet Academy is this elite institution for frontier technology, building spaceships, and graduating cadets to be the pilots of these spaceships and whatnot. So I just imagine an elite institution for technical knowledge and a kind of school that's very up-to-date and a premier institution.</p>
</details>

**Interviewer:** 关于如何才能很好地教授技术或科学内容，我有一些问题想问你，因为你是这方面的世界级大师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A category of questions I have for you is explaining how one teaches technical or scientific content well, because you are one of the world masters at it.</p>
</details>

**Andrej Karpathy:** 就Eureka而言，教育中让我非常着迷的一点是，我确实认为教育会随着AI的辅助而发生根本性的改变。它必须在某种程度上被重新设计和改变。我仍然认为我们还处于非常早期的阶段。会有很多人尝试做那些显而易见的事情，比如用一个LLM来提问。这有帮助，但对我来说仍然有点像粗制滥造。我希望把它做得更好，但我认为目前还没有达到我想要的能力。我想要的是一个真正的导师体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With respect to Eureka, one thing that is very fascinating to me about education is that I do think education will pretty fundamentally change with AIs on the side. It has to be rewired and changed to some extent. I still think that we're pretty early. There's going to be a lot of people who are going to try to do the obvious things. Have an LLM and ask it questions. Do all the basic things that you would do via prompting right now. It's helpful, but it still feels to me a bit like slop. I'd like to do it properly, and I think the capability is not there for what I would want. What I'd want is an actual tutor experience.</p>
</details>

一个突出的例子是，我最近在学韩语。我经历了一个阶段，在网上自学韩语。然后我参加了一个在韩国的小班，和其他人一起上韩语课，那很有趣。我们有一个老师和大约10个学生。然后我换成了一对一的导师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A prominent example in my mind is I was recently learning Korean, so language learning. I went through a phase where I was learning Korean by myself on the internet. I went through a phase where I was part of a small class in Korea taking Korean with a bunch of other people, which was really funny. We had a teacher and 10 people or so taking Korean. Then I switched to a one-on-one tutor.</p>
</details>

我觉得我有一个非常好的导师，但思考这位导师为我所做的一切，以及那种体验有多么不可思议，这为我最终想要构建的产品设定了极高的标准。只通过一次简短的对话，她就了解了我作为学生的水平，我知道什么，不知道什么。她能够精确地提出问题来探测我的世界模型。现在没有任何LLM能100%做到这一点，差得远了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess what was fascinating to me was, I think I had a really good tutor, but just thinking through what this tutor was doing for me and how incredible that experience was and how high the bar is for what I want to build eventually. Instantly from a very short conversation, she understood where I am as a student, what I know and don't know. She was able to probe exactly the kinds of questions or things to understand my world model. No LLM will do that for you 100% right now, not even close.</p>
</details>

一旦她理解了，她就真正为我提供了我当前能力水平所需的一切。我需要一直受到适当的挑战，不能面对太难或太简单的东西，而导师非常擅长提供恰到好处的内容。我感觉学习的唯一限制是我自己。我总能得到完美的信息。我感觉很好，因为我是唯一的障碍。不是我找不到知识，也不是解释得不好。只是我记忆的能力等等。这就是我希望为人们提供的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But a tutor will do that if they're good. Once she understands, she really served me all the things that I needed at my current sliver of capability. I need to be always appropriately challenged. I can't be faced with something too hard or too trivial, and a tutor is really good at serving you just the right stuff. I felt like I was the only constraint to learning. I was always given the perfect information. I'm the only constraint. I felt good because I'm the only impediment that exists. It's not that I can't find knowledge or that it's not properly explained or etc. It's just my ability to memorize and so on. This is what I want for people.</p>
</details>

**Interviewer:** 你如何自动化这个过程？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you automate that?</p>
</details>

**Andrej Karpathy:** 以目前的能力，你做不到。这就是为什么我认为现在还不是构建这种AI导师的合适时机。我仍然认为它是一个有用的产品，很多人会去构建它，但是标准太高，能力还不够。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Very good question. At the current capability, you don't. That's why I think it's not actually the right time to build this kind of an AI tutor. I still think it's a useful product, and lots of people will build it, but the bar is so high and the capability is not there.</p>
</details>

### 教育的未来：构建通往知识的“坡道”

**Interviewer:** 你愿意透露一下，你希望今年或明年发布什么产品吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To the extent you're willing to say, what is the thing you hope will be released this year or next year?</p>
</details>

**Andrej Karpathy:** 我正在构建第一门课程。我想要一门非常非常好的课程，一个显而易见的、最先进的学习目的地，这次是关于AI的。这是我熟悉的领域，所以这是一个很好的起点产品。这就是我正在构建的。你之前提到的nanochat，是LLM101N这门课的一个顶点项目（capstone project）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm building the first course. I want to have a really, really good course, the obvious state-of-the-art destination you go to to learn, AI in this case. That's just what I'm familiar with, so it's a really good first product to get to be really good at it. So that's what I'm building. Nanochat, which you briefly mentioned, is a capstone project of LLM101N, which is a class that I'm building.</p>
</details>

那是一个很大的部分。但现在我必须构建很多中间环节，然后我必须雇佣一个小团队的助教等等，来构建整个课程。我想说的另一件事是，很多时候，当人们想到教育时，他们更多地想到的是我所说的传播知识的“软”性部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a really big piece of it. But now I have to build out a lot of the intermediates, and then I have to hire a small team of TAs and so on and build the entire course. One more thing that I would say is that many times, when people think about education, they think more about what I would say is a softer component of diffusing knowledge.</p>
</details>

我心中有一个非常硬核和技术性的想法。在我看来，教育是一个非常困难的技术过程，即构建通往知识的“坡道”。在我看来，nanochat就是一个通往知识的坡道，因为它非常简单。它是一个超级简化的全栈项目。如果你把这个东西给某人，让他们看一遍，他们会学到很多东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have something very hard and technical in mind. In my mind, education is the very difficult technical process of building ramps to knowledge. In my mind, nanochat is a ramp to knowledge because it's very simple. It's the super simplified full-stack thing. If you give this artifact to someone and they look through it, they're learning a ton of stuff.</p>
</details>

它给你带来了很多我称之为“每秒尤里卡”（eurekas per second）的东西，也就是每秒的理解。这就是我想要的，大量的“每秒尤里卡”。所以对我来说，这是一个如何构建这些通往知识的坡道的技术问题。因此我几乎认为Eureka与一些前沿实验室或那里的工作没有太大区别。我想要找出如何非常高效地构建这些坡道，让人们永远不会卡住，所有东西永远不会太难或太简单，你总是有恰到好处的材料来进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's giving you a lot of what I call eurekas per second, which is understanding per second. That's what I want, lots of eurekas per second. So to me, this is a technical problem of how do we build these ramps to knowledge. So I almost think of Eureka as maybe not that different from some of the frontier labs or some of the work that's going on there. I want to figure out how to build these ramps very efficiently so that people are never stuck and everything is always not too hard or not too trivial, and you have just the right material to progress.</p>
</details>

### 后AGI时代的教育：从功利到乐趣

**Andrej Karpathy:** 从动机上讲，在AGI之前，动机问题很简单，因为人们想赚钱。这是当今行业中赚钱的方式。AGI之后可能会有趣得多，因为如果一切都自动化了，任何人都没有事情可做，为什么还会有人去上学？我常说，AGI之前的教育是有用的。AGI之后的教育是娱乐。就像今天人们去健身房一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Motivation-wise, before AGI motivation is very simple to solve because people want to make money. This is how you make money in the industry today. Post-AGI is a lot more interesting possibly because if everything is automated and there's nothing to do for anyone, why would anyone go to a school? I often say that pre-AGI education is useful. Post-AGI education is fun. In a similar way, people go to the gym today.</p>
</details>

我们不需要他们的体力来搬运重物，因为我们有机器。但他们仍然去健身房。为什么？因为这很有趣，很健康，而且当你有了六块腹肌时看起来很性感。在人类深刻的、心理学的、进化的意义上，这样做对人们很有吸引力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We don't need their physical strength to manipulate heavy objects because we have machines that do that. They still go to the gym. Why do they go to the gym? Because it's fun, it's healthy, and you look hot when you have a six-pack. It's attractive for people to do that in a very deep, psychological, evolutionary sense for humanity.</p>
</details>

教育也会以同样的方式发展。你会像去健身房一样去上学。现在，没有那么多人学习，因为学习很难。你会因为材料而碰壁。有些人克服了这个障碍，但对大多数人来说，这很难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Education will play out in the same way. You'll go to school like you go to the gym. Right now, not that many people learn because learning is hard. You bounce from material. Some people overcome that barrier, but for most people, it's hard.</p>
</details>

这是一个需要解决的技术问题。要做到像我学韩语时的导师那样，这是一个技术问题。它是可行的，可构建的，应该有人来构建它。它会让学习任何东西都变得简单和令人向往，人们会为了乐趣而学习，因为它很简单。如果我对任何知识都有那样的导师，学习任何东西都会容易得多，人们会去做的。他们会像去健身房一样去做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a technical problem to solve. It's a technical problem to do what my tutor did for me when I was learning Korean. It's tractable and buildable, and someone should build it. It's going to make learning anything trivial and desirable, and people will do it for fun because it's trivial. If I had a tutor like that for any arbitrary piece of knowledge, it's going to be so much easier to learn anything, and people will do it. They'll do it for the same reasons they go to the gym.</p>
</details>

**Interviewer:** 但这听起来与你之前的一个愿景不同，即这种教育与让人类保持对AI的控制有关。这听起来不一样。是对一些人来说是娱乐，但对另一些人来说是赋权吗？你怎么看？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it sounded like you had a vision also that this education is relevant to keeping humanity in control of AI. That sounds different. Is it entertaining for some people, but then empowerment for some others? How do you think about that?</p>
</details>

**Andrej Karpathy:** 我确实认为最终这有点像一场注定会输的游戏。从长远来看——这个长期可能比行业中大多数人想的要长——这是一场注定会输的游戏。我确实认为人类可以走得很远，我们几乎没有触及一个人能走多远的表面。这只是因为人们在太容易或太难的材料上碰壁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do think eventually it's a bit of a losing game, if that makes sense. It is in the long term. In the long term, which is longer than maybe most people in the industry think about, it's a losing game. I do think people can go so far and we've barely scratched the surface of how much a person can go. That's just because people are bouncing off of material that's too easy or too hard.</p>
</details>

人们将能够走得更远。任何人都会说五种语言，因为为什么不呢？因为它太简单了。任何人都会掌握本科的所有基础课程等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People will be able to go much further. Anyone will speak five languages because why not? Because it's so trivial. Anyone will know all the basic curriculum of undergrad, et cetera.</p>
</details>

### 教学的艺术：物理学思维与创造“尤里卡时刻”

**Interviewer:** 如果你必须给另一位你好奇领域的教育者提建议，让他们制作像你那样的YouTube教程，你会给他们什么建议？特别是在那些无法通过让他们编程来测试技术理解的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can I ask some questions about teaching well? If you had to give advice to another educator in another field that you're curious about to make the kinds of YouTube tutorials you've made. Maybe it might be especially interesting to talk about domains where you can't test someone's technical understanding by having them code something up or something. What advice would you give them?</p>
</details>

**Andrej Karpathy:** 这是一个相当宽泛的话题。我大概有10到20个半意识地在做的技巧。但很多都来自我的物理学背景。我非常喜欢我的物理学背景。我甚至有个长篇大论，讲为什么每个人都应该在早期教育中学习物理，因为早期教育不是为了在工业界以后任务中积累知识或记忆，而是为了启动大脑。物理学独特地能最好地启动大脑，因为他们在物理学中让你在脑中做的一些事情，在以后非常有价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a pretty broad topic. There are 10–20 tips and tricks that I semi-consciously do probably. But a lot of this comes from my physics background. I really, really did enjoy my physics background. I have a whole rant on how everyone should learn physics in early school education because early school education is not about accumulating knowledge or memory for tasks later in the industry. It's about booting up a brain. Physics uniquely boots up the brain the best because some of the things that they get you to do in your brain during physics is extremely valuable later.</p>
</details>

建立模型和抽象的概念，理解有一阶近似可以描述系统的大部分，但还有二阶、三阶、四阶项可能存在。当你观察一个非常嘈杂的系统，但可以抽象出基本频率。当一个物理学家走进教室说，“假设有一头球形的牛”，每个人都笑了，但这太棒了。这是一种非常通用的、可以在整个行业中推广的思维方式，因为牛在很多方面可以被近似为一个球体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea of building models and abstractions and understanding that there's a first-order approximation that describes most of the system, but then there're second-order, third-order, fourth-order terms that may or may not be present. The idea that you're observing a very noisy system, but there are these fundamental frequencies that you can abstract away. When a physicist walks into the class and they say, "Assume there's a spherical cow," everyone laughs at that, but this is brilliant. It's brilliant thinking that's very generalizable across the industry because a cow can be approximated as a sphere in a bunch of ways.</p>
</details>

由于这种训练，我总是试图找到所有事物的一阶项或二阶项。当我观察一个系统或一件事物时，我脑中有一个错综复杂的思想或知识网络。我试图找到，什么是重要的？什么是一阶成分？我如何简化它？我如何用最简单的东西来展示它，展示它的作用，然后再添加其他项？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So because of that training, I always try to find the first-order terms or the second-order terms of everything. When I'm observing a system or a thing, I have a tangle of a web of ideas or knowledge in my mind. I'm trying to find, what is the thing that matters? What is the first-order component? How can I simplify it? How can I have a simplest thing that shows that thing, shows it in action, and then I can tack on the other terms?</p>
</details>

我的一个代码库 micrograd 很好地说明了这一点。micrograd 是100行代码，展示了反向传播。你可以用加法、乘法等简单操作构建神经网络，就像神经网络的乐高积木。你建立一个计算图，然后进行前向传播和后向传播来获得梯度。这正是所有神经网络学习的核心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe an example from one of my repos that I think illustrates it well is called micrograd. I don't know if you're familiar with this. So micrograd is 100 lines of code that shows backpropagation. You can create neural networks out of simple operations like plus and times, et cetera. Lego blocks of neural networks. You build up a computational graph and you do a forward pass and a backward pass to get the gradients. Now, this is at the heart of all neural network learning.</p>
</details>

所以 micrograd，这100行Python代码，是你理解神经网络如何训练所需要的一切。其他的一切都只是为了效率。为了提高效率，需要做大量的工作。你需要张量，需要布局它们，需要设置步幅，需要确保你的内核正确地协调内存移动等等。粗略地说，所有这些都只是为了效率。但神经网络训练的核心思想部分就是micrograd。它只有100行。你可以轻松理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So micrograd, these 100 lines of Python, are everything you need to understand how neural networks train. Everything else is just efficiency. Everything else is efficiency. There's a huge amount of work to get efficiency. You need your tensors, you lay them out, you stride them, you make sure your kernels, orchestrating memory movement correctly, et cetera. It's all just efficiency, roughly speaking. But the core intellectual piece of neural network training is micrograd. It's 100 lines. You can easily understand it.</p>
</details>

我喜欢找到这些低阶项，并将它们呈现在盘子上，去发现它们。我觉得教育是最有智力趣味的事情，因为你有一个复杂的理解网络，你要试图以一种方式把它铺开，创造一个坡道，让后面的每一步都只依赖于前一步。我发现这种解开知识的过程，作为一项认知任务，本身就非常有智力趣味。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I love finding these small-order terms and serving them on a platter and discovering them. I feel like education is the most intellectually interesting thing because you have a tangle of understanding and you're trying to lay it out in a way that creates a ramp where everything only depends on the thing before it. I find that this untangling of knowledge is just so intellectually interesting as a cognitive task.</p>
</details>

**Interviewer:** 你关于Transformer的教程从二元组（bigrams）开始，字面上就是一个查找表，从“这是当前词”到“这是下一个词”。这真是个绝妙的方式，从一个查找表开始，然后逐步构建到Transformer。每一步都有动机。为什么要加这个？为什么要加下一个？你可以死记硬背注意力公式，但理解每个部分为什么相关，它解决了什么问题……你在呈现痛苦之后才给出解决方案，这多么聪明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It also makes the learning experience so much more motivated. Your tutorial on the transformer begins with bigrams, literally a lookup table from, "Here's the word right now, or here's the previous word, here's the next word." It's literally just a lookup table. That’s the essence of it, yeah. It’s such a brilliant way, starting with a lookup table and then going to a transformer. Each piece is motivated. Why would you add that? Why would you add the next thing? You could memorize the attention formula, but having an understanding of why every single piece is relevant, what problem it solves. You're presenting the pain before you present a solution, and how clever is that?</p>
</details>

**Andrej Karpathy:** 你想引导学生经历那个过程。还有很多其他小技巧能让学习变得愉快、吸引人、有趣。比如总是向学生提问。“你要怎么解决这个问题？” 我不会在你猜测之前就给出答案。那会是浪费。那对你来说有点……不地道，在我给你机会自己尝试之前就给出答案。因为如果你自己尝试，你会更好地理解行动空间是什么，目标是什么，以及为什么只有这个行动能实现那个目标。你有一个机会自己尝试，当我给出答案时，你会更欣赏它。这最大化了每增加一个新事实所带来的知识量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You want to take the student through that progression. There are a lot of other small things that make it nice and engaging and interesting. Always prompting the student. There's a lot of small things like that are important and a lot of good educators will do this. How would you solve this? I'm not going to present the solution before you guess. That would be wasteful. That's a little bit of a…I don’t want to swear but it’s a dick move towards you to present you with the solution before I give you a shot to try to come up with it yourself. Because if you try to come up with it yourself, you get a better understanding of what the action space is, what the objective is, and then why only this action fulfills that objective. You have a chance to try it yourself, and you have an appreciation when I give you the solution. It maximizes the amount of knowledge per new fact added.</p>
</details>

### 如何成为更好的学习者

**Interviewer:** 如果你没有一个像Karpathy这样的老师来阐述一个想法，作为学生，你对其他学生有什么建议？如果你在读一个你不擅长的领域的论文或书，你会用什么策略来学习你感兴趣的材料？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is your advice as a student to other students, if you don't have a Karpathy who is doing the exposition of an idea? If you're reading a paper from somebody or reading a book, what strategies do you employ to learn material you're interested in in fields you're not an expert at?</p>
</details>

**Andrej Karpathy:** 老实说，我不知道我有什么独特的技巧。这是一个痛苦的过程。有一件事一直对我帮助很大——我发过一条关于这个的小推文——按需学习非常棒。进行深度学习。我确实觉得你需要交替进行深度学习——按需学习，你试图完成一个能给你带来回报的项目——和广度学习，也就是“哦，让我们学学某某101，这里是所有你可能需要的东西”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't know that I have unique tips and tricks, to be honest. It's a painful process. One thing that has always helped me quite a bit is—I had a small tweet about this—learning things on demand is pretty nice. Learning depth-wise. I do feel you need a bit of alternation of learning depth-wise, on demand—you're trying to achieve a certain project that you're going to get a reward from—and learning breadth-wise, which is just, "Oh, let's do whatever 101, and here's all the things you might need."</p>
</details>

很多学校做的就是广度学习，比如“哦，相信我，你以后会需要这个的”。好吧，我相信你。我会学，因为我猜我需要它。但我喜欢那种你能从做某件事中获得回报的学习方式，你是按需学习。另一件我发现非常有帮助的事情——这是教育中一个更无私的方面——向人们解释事情是更深入学习的好方法。这在我身上经常发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which is a lot of school—does breadth-wise learning, like, "Oh, trust me, you'll need this later," that kind of stuff. Okay, I trust you. I'll learn it because I guess I need it. But I love the kind of learning where you'll get a reward out of doing something, and you're learning on demand. The other thing that I've found extremely helpful. This is an aspect where education is a bit more selfless, but explaining things to people is a beautiful way to learn something more deeply. This happens to me all the time.</p>
</details>

我意识到如果我不是真的懂某件事，我就无法解释它。我尝试解释时会发现，“哦，我不懂这个。” 面对这一点很烦人。你可以回去确保你理解了它。它填补了你理解上的空白。它迫使你面对它们并调和它们。我喜欢重新解释事情，人们也应该多这样做。这迫使你操纵知识，并确保你在解释时知道自己在说什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It probably happens to other people too because I realize if I don't really understand something, I can't explain it. I'm trying and I'm like, "Oh, I don't understand this." It's so annoying to come to terms with that. You can go back and make sure you understood it. It fills these gaps of your understanding. It forces you to come to terms with them and to reconcile them. I love to re-explain things and people should be doing that more as well. That forces you to manipulate the knowledge and make sure that you know what you're talking about when you're explaining it.</p>
</details>

**Interviewer:** 这是一个很好的结束语。Andrej，非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's an excellent note to close on. Andrej, that was great. Thank you.</p>
</details>