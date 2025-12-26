---
area: "tech-engineering"
category: technology
companies_orgs:
- OpenAI
- Anthropic
- Google
- Meta
- Thinking Machines
date: '2025-11-25'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Ilya Sutskever
- Yann LeCun
- Garry Kasparov
products_models:
- Gemini
- GPT-3
- AlexNet
- Transformer
- DeepSeek R1
- Neuralink
project: []
series: ''
source: https://www.youtube.com/watch?v=aR20FWCCjAs
speaker: Dwarkesh Patel
status: evergreen
summary: Ilya Sutskever 深入探讨了当前 AI 发展的核心困境：为何模型在评估指标上表现优异，却未能产生相应的经济影响。他认为，AI 发展正从“规模时代”转向“研究时代”，核心挑战在于解决模型的泛化能力远逊于人类的问题。Sutskever
  强调了持续学习、价值函数的重要性，并重新定义了 AGI 的概念，认为真正的超级智能是能够高效学习的智能体，而非无所不知的成品。他还讨论了 AI 安全、对齐策略以及
  SSI 公司的独特技术路径。
tags:
- learning
- llm
- research
- scaling-law
- value
title: Ilya Sutskever 深度对话：超越规模定律，回归 AI 研究的本质
---
### AI 时代的怪诞现实与缓慢起飞

**Ilya:** 你知道什么事最疯狂吗？这一切都是真实发生的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what's crazy? That all of this is real.</p>
</details>

**Dwarkesh:** 什么意思？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Meaning what?</p>
</details>

**Ilya:** 你不这么觉得吗？所有这些 AI 的事情，所有这些湾区发生的一切……它真的在发生。这难道不像是直接从科幻小说里走出来的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't you think so? All this AI stuff and all this Bay Area… that it's happening. Isn't it straight out of science fiction?</p>
</details>

**Dwarkesh:** 另一件疯狂的事是，这种缓慢的起飞给人的感觉是多么正常。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing that's crazy is how normal the slow takeoff feels.</p>
</details>

**Dwarkesh:** 比如我们将 GDP 的 1% 投入到 AI 领域的想法，我本以为这会是件惊天动地的大事，但现在感觉……事实证明，我们适应新事物的速度相当快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea that we'd be investing 1% of GDP in AI, I feel like it would have felt like a bigger deal, whereas right now it just feels... We get used to things pretty fast, it turns out.</p>
</details>

**Ilya:** 但这也有些抽象。这到底意味着什么？意味着你在新闻里看到某某公司宣布了某某金额的投资。你看到的仅此而已。到目前为止，在其他任何方面都感觉不到真实的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also it's kind of abstract. What does it mean? It means that you see it in the news, that such and such company announced such and such dollar amount. That's all you see. It's not really felt in any other way so far.</p>
</details>

**Dwarkesh:** 我们就从这里开始讨论吧？我觉得这个话题很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Should we actually begin here? I think this is an interesting discussion.</p>
</details>

**Ilya:** 当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure.</p>
</details>

**Dwarkesh:** 我认为你提到的那个观点——从普通人的视角来看，一切似乎没什么不同——即便我们进入了技术奇点时代，这个观点可能依然成立。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think your point, about how from the average person's point of view nothing is that different, will continue being true even into the singularity.</p>
</details>

**Ilya:** 不，我不这么认为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, I don't think so.</p>
</details>

**Dwarkesh:** 好吧，有意思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, interesting.</p>
</details>

**Ilya:** 我之前说感觉不到不同，指的是某某公司宣布了一笔难以理解的巨额投资。我觉得没人知道该如何看待这件事。但我认为，AI 的影响终将被感受到。AI 将会渗透到整个经济体系中。这背后会有非常强大的经济力量驱动，我认为其影响将会非常强烈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing which I was referring to not feeling different is, okay, such and such company announced some difficult-to-comprehend dollar amount of investment. I don't think anyone knows what to do with that. But I think the impact of AI is going to be felt. AI is going to be diffused through the economy. There'll be very strong economic forces for this, and I think the impact is going to be felt very strongly.</p>
</details>

### 评估指标与经济影响的脱节

**Dwarkesh:** 你预计这种影响何时会显现？我觉得现在的模型看起来比它们所暗示的经济影响力要聪明得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When do you expect that impact? I think the models seem smarter than their economic impact would imply.</p>
</details>

**Ilya:** 是的。这是目前关于模型最令人困惑的事情之一。如何调和它们在**评估指标**（evals: 用于衡量 AI 模型性能的基准测试）上表现如此出色这一事实？你看着那些评估指标，会觉得：“这些测试相当难啊。”它们做得那么好，但经济影响似乎远远落后。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. This is one of the very confusing things about the models right now. How to reconcile the fact that they are doing so well on evals? You look at the evals and you go, "Those are pretty hard evals." They are doing so well. But the economic impact seems to be dramatically behind.</p>
</details>

**Ilya:** 很难理解，一个模型怎么能一方面做出这些令人惊叹的事情，另一方面在某些情况下又会重复犯错两次？举个例子，假设你用所谓的“**氛围编程**”（vibe coding: 一个俚语，指不完全理解代码但凭感觉或直觉进行编程，通常依赖于大型语言模型的辅助）来做点什么。你到了某个地方，然后遇到了一个 bug。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's very difficult to make sense of, how can the model, on the one hand, do these amazing things, and then on the other hand, repeat itself twice in some situation? An example would be, let's say you use vibe coding to do something. You go to some place and then you get a bug.</p>
</details>

**Ilya:** 然后你告诉模型：“请修复这个 bug。”模型会说：“天哪，你说得太对了。我这里有个 bug。让我来修复它。”结果它引入了第二个 bug。然后你告诉它：“你现在有第二个新 bug 了。”它又回答你：“天哪，我怎么会这样？你又说对了。”然后它把第一个 bug 又带回来了，你就在这两个 bug 之间来回切换。这怎么可能呢？我不确定，但这确实表明有些奇怪的事情正在发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you tell the model, "Can you please fix the bug?" And the model says, "Oh my God, you're so right. I have a bug. Let me go fix that." And it introduces a second bug. Then you tell it, "You have this new second bug," and it tells you, "Oh my God, how could I have done it? You're so right again," and brings back the first bug, and you can alternate between those. How is that possible? I'm not sure, but it does suggest that something strange is going on.</p>
</details>

### 训练方法的局限性：为何模型会“应试”？

**Ilya:** 我有两个可能的解释。比较异想天开的解释是，也许**强化学习**（RL: Reinforcement Learning，一种机器学习方法，智能体通过与环境交互并获得奖励或惩罚来学习）训练让模型变得有点过于专注和狭隘，有点太缺乏意识，尽管它在其他方面也让模型变得有意识。正因如此，它们无法完成一些基本的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have two possible explanations. The more whimsical explanation is that maybe RL training makes the models a little too single-minded and narrowly focused, a little bit too unaware, even though it also makes them aware in some other ways. Because of this, they can't do basic things.</p>
</details>

**Ilya:** 但还有另一种解释。以前人们做**预训练**（pre-training: 在大量无标签数据上训练模型以学习通用知识的过程，是大型语言模型的基础）时，关于用什么数据训练的问题，答案很简单，因为答案是“所有数据”。当你做预训练时，你需要所有的数据。所以你不用去思考是用这个数据还是那个数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there is another explanation. Back when people were doing pre-training, the question of what data to train on was answered, because that answer was everything. When you do pre-training, you need all the data. So you don't have to think if it's going to be this data or that data.</p>
</details>

**Ilya:** 但当人们做强化学习训练时，他们就需要思考了。他们会说：“好的，我们想为这个任务进行这种强化学习训练，为那个任务进行那种强化学习训练。”据我所知，所有公司都有专门的团队，不断地创造新的强化学习环境，并将其加入到训练组合中。问题是，这些环境到底是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when people do RL training, they do need to think. They say, "Okay, we want to have this kind of RL training for this thing and that kind of RL training for that thing." From what I hear, all the companies have teams that just produce new RL environments and just add it to the training mix. The question is, well, what are those?</p>
</details>

**Ilya:** 这里有太多的自由度，你可以创造出种类繁多的强化学习环境。有一种做法，我认为是在无意中发生的，就是人们从评估指标中获取灵感。你会说：“嘿，我希望我们的模型在发布时表现得非常出色。我希望评估指标看起来很棒。什么样的强化学习训练能帮助完成这个任务呢？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are so many degrees of freedom. There is such a huge variety of RL environments you could produce. One thing you could do, and I think this is something that is done inadvertently, is that people take inspiration from the evals. You say, "Hey, I would love our model to do really well when we release it. I want the evals to look great. What would be RL training that could help on this task?"</p>
</details>

**Ilya:** 我认为这种情况确实存在，并且可以解释很多正在发生的事情。如果再结合模型泛化能力实际上不足这一点，就很有可能解释我们看到的很多现象——评估性能与实际真实世界性能之间的脱节，而我们今天甚至还不理解“真实世界性能”到底意味着什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that is something that happens, and it could explain a lot of what's going on. If you combine this with generalization of the models actually being inadequate, that has the potential to explain a lot of what we are seeing, this disconnect between eval performance and actual real-world performance, which is something that we don't today even understand, what we mean by that.</p>
</details>

**Dwarkesh:** 我喜欢这个想法，即真正的“奖励投机”（reward hacking）其实是人类研究员，他们过于关注评估指标了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I like this idea that the real reward hacking is the human researchers who are too focused on the evals.</p>
</details>

### 泛化能力：两种思路与一个比喻

**Dwarkesh:** 对于你刚才指出的问题，我认为有两种理解或思考的方式。第一种是，如果一个模型仅仅在编程竞赛中达到超人水平，并不会自动让它在改进你的代码库方面更有品味、做出更好的判断，那么你就应该扩展环境套件，这样你测试的就不仅仅是它在编程竞赛中的最佳表现。它还应该能够为 X、Y 或 Z 创造出最好的应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there are two ways to understand, or to try to think about, what you have just pointed out. One is that if it's the case that simply by becoming superhuman at a coding competition, a model will not automatically become more tasteful and exercise better judgment about how to improve your codebase, well then you should expand the suite of environments such that you're not just testing it on having the best performance in coding competition. It should also be able to make the best kind of application for X thing or Y thing or Z thing.</p>
</details>

**Dwarkesh:** 另一种方式，也许这正是你所暗示的，是去问：“为什么在编程竞赛中达到超人水平，一开始就不会让你成为一个更具品味的、更全面的程序员呢？”也许该做的不是不断堆砌环境的数量和多样性，而是找出一种方法，让你能从一个环境中学习，并提高在其他方面的表现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another, maybe this is what you're hinting at, is to say, "Why should it be the case in the first place that becoming superhuman at coding competitions doesn't make you a more tasteful programmer more generally?" Maybe the thing to do is not to keep stacking up the amount and diversity of environments, but to figure out an approach which lets you learn from one environment and improve your performance on something else.</p>
</details>

**Ilya:** 我有一个人类的比喻可能有助于理解。既然你提到了，我们就以编程竞赛为例。假设有两个学生。第一个学生决定要成为最顶尖的编程竞赛选手，所以他将在那个领域练习一万个小时。他会解决所有问题，记住所有证明技巧，并且能非常熟练、快速、正确地实现所有算法。通过这样做，他成为了顶尖选手之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have a human analogy which might be helpful. Let's take the case of competitive programming, since you mentioned that. Suppose you have two students. One of them decided they want to be the best competitive programmer, so they will practice 10,000 hours for that domain. They will solve all the problems, memorize all the proof techniques, and be very skilled at quickly and correctly implementing all the algorithms. By doing so, they became one of the best.</p>
</details>

**Ilya:** 第二个学生觉得：“哦，编程竞赛很酷。”他可能只练习了 100 个小时，少得多，但也表现得很好。你认为他们俩谁在后来的职业生涯中会做得更好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Student number two thought, "Oh, competitive programming is cool." Maybe they practiced for 100 hours, much less, and they also did really well. Which one do you think is going to do better in their career later on?</p>
</details>

**Dwarkesh:** 第二个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second.</p>
</details>

**Ilya:** 对。我认为现在的情况基本上就是这样。模型更像是第一个学生，甚至有过之而无不及。因为我们会说，模型应该擅长编程竞赛，所以我们把有史以来所有的编程竞赛题目都拿来。然后我们再做一些数据增强，这样我们就有更多的编程竞赛题目，然后用这些来训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. I think that's basically what's going on. The models are much more like the first student, but even more. Because then we say, the model should be good at competitive programming so let's get every single competitive programming problem ever. And then let's do some data augmentation so we have even more competitive programming problems, and we train on that.</p>
</所有不同的算法和证明技巧都信手拈来。而且，在这种程度的准备下，它不一定能泛化到其他事情上，这一点也更符合直觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now you've got this great competitive programmer. With this analogy, I think it's more intuitive. Yeah, okay, if it's so well trained, all the different algorithms and all the different proof techniques are right at its fingertips. And it's more intuitive that with this level of preparation, it would not necessarily generalize to other things.</p>
</details>

**Dwarkesh:** 那么，对于第二个学生在进行 100 小时微调之前所做的事情，有什么样的类比呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then what is the analogy for what the second student is doing before they do the 100 hours of fine-tuning?</p>
</details>

**Ilya:** 我认为他们拥有“那个东西”（it），那种“天赋因子”（the "it" factor）。我读本科的时候，记得有个这样的学生和我一起学习，所以我知道这种人是存在的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think they have "it." The "it" factor. When I was an undergrad, I remember there was a student like this that studied with me, so I know it exists.</p>
</details>

### 预训练的本质与人类学习的差异

**Dwarkesh:** 我觉得区分这种“天赋”和预训练所做的事情很有趣。你刚才说预训练时不必选择数据，一种理解方式是，这其实和那一万小时的练习没什么不同。只是你免费得到了那一万小时的练习，因为它已经存在于预训练的分布中了。但也许你的意思是，预训练并没有带来那么多的泛化能力。预训练的数据量确实巨大，但它不一定比强化学习的泛化能力更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's interesting to distinguish "it" from whatever pre-training does. One way to understand what you just said about not having to choose the data in pre-training is to say it's actually not dissimilar to the 10,000 hours of practice. It's just that you get that 10,000 hours of practice for free because it's already somewhere in the pre-training distribution. But maybe you're suggesting there's actually not that much generalization from pre-training. There's just so much data in pre-training, but it's not necessarily generalizing better than RL.</p>
</details>

**Ilya:** 预训练的主要优势在于：A，数据量极其庞大；B，你不需要费力思考该把什么数据放进预训练。这些数据非常自然，其中包含了大量人类的行为：人们的思想和许多特征。它就像是整个世界被人类投射到文本上，而预训练试图用海量数据来捕捉这一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The main strength of pre-training is that: A, there is so much of it, and B, you don't have to think hard about what data to put into pre-training. It's very natural data, and it does include in it a lot of what people do: people's thoughts and a lot of the features. It's like the whole world as projected by people onto text, and pre-training tries to capture that using a huge amount of data.</p>
</details>

**Ilya:** 预训练很难进行推理分析，因为很难理解模型依赖预训练数据的方式。每当模型犯错，会不会是因为某些东西碰巧没有得到预训练数据的充分支持？“预训练的支持”这个说法可能比较宽泛。我不知道在这方面我还能补充什么更有用的信息。我不认为存在与预训练相对应的人类类比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pre-training is very difficult to reason about because it's so hard to understand the manner in which the model relies on pre-training data. Whenever the model makes a mistake, could it be because something by chance is not as supported by the pre-training data? "Support by pre-training" is maybe a loose term. I don't know if I can add anything more useful on this. I don't think there is a human analog to pre-training.</p>
</details>

**Dwarkesh:** 人们提出过一些关于预训练的人类类比。我想听听你对它们为什么可能不成立的看法。一种是把预训练看作一个人生命中的前 18、15 或 13 年，这段时间他们不一定有经济产出，但他们在做一些让他们更好地理解世界的事情。另一种是把进化看作一种持续了 30 亿年的搜索过程，最终产生了一个人类生命的实例。我想知道你是否认为这两者中的任何一个可以类比预训练。如果不是预训练，你认为人类的终身学习是怎样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here are analogies that people have proposed for what the human analogy to pre-training is. I'm curious to get your thoughts on why they're potentially wrong. One is to think about the first 18, or 15, or 13 years of a person's life when they aren't necessarily economically productive, but they are doing something that is making them understand the world better and so forth. The other is to think about evolution as doing some kind of search for 3 billion years, which then results in a human lifetime instance. I'm curious if you think either of these are analogous to pre-training. How would you think about what lifetime human learning is like, if not pre-training?</p>
</details>

**Ilya:** 我认为这两者都与预训练有相似之处，预训练也试图扮演这两种角色。但我认为也存在一些巨大的差异。预训练的数据量非常非常惊人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there are some similarities between both of these and pre-training, and pre-training tries to play the role of both of these. But I think there are some big differences as well. The amount of pre-training data is very, very staggering.</p>
</details>

**Dwarkesh:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

**Ilya:** 不知何故，一个人类即使到了 15 岁，接触到的数据量只是预训练数据的极小一部分，他们知道的要少得多。但他们所知道的任何东西，在某种程度上都理解得更深刻。在那个年纪，你已经不会犯我们现在的 AI 所犯的错误了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Somehow a human being, after even 15 years with a tiny fraction of the pre-training data, they know much less. But whatever they do know, they know much more deeply somehow. Already at that age, you would not make mistakes that our AIs make.</p>
</details>

### 情感、价值函数与进化

**Ilya:** 还有一点。你可能会问，这会不会像进化？答案是也许。但在这种情况下，我认为进化可能实际上更具优势。我记得读过一个案例。神经科学家了解大脑的一种方式是研究大脑不同部位受损的人。有些人的症状是你所能想象到的最奇怪的。这真的非常非常有趣。一个相关的案例浮现在我脑海中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is another thing. You might say, could it be something like evolution? The answer is maybe. But in this case, I think evolution might actually have an edge. I remember reading about this case. One way in which neuroscientists can learn about the brain is by studying people with brain damage to different parts of the brain. Some people have the most strange symptoms you could imagine. It's actually really, really interesting. One case that comes to mind that's relevant.</p>
</details>

**Ilya:** 我读到过一个人，他因为某种脑损伤，比如中风或事故，导致他的情感处理功能丧失了。他不再有任何情感。他仍然能言善辩，能解决一些小谜题，在测试中看起来也完全正常。但他感觉不到任何情绪。他感觉不到悲伤，感觉不到愤怒，也感觉不到激动。不知何故，他变得极其不擅长做任何决定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I read about this person who had some kind of brain damage, a stroke or an accident, that took out his emotional processing. So he stopped feeling any emotion. He still remained very articulate and he could solve little puzzles, and on tests he seemed to be just fine. But he felt no emotion. He didn't feel sad, he didn't feel anger, he didn't feel animated. He became somehow extremely bad at making any decisions at all.</p>
</details>

**Ilya:** 他会花上几个小时来决定穿哪双袜子。他会做出非常糟糕的财务决策。这对于我们与生俱来的情感在使我们成为一个有效行动的个体方面所扮演的角色，说明了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It would take him hours to decide on which socks to wear. He would make very bad financial decisions. What does it say about the role of our built-in emotions in making us a viable agent, essentially?</p>
</details>

**Ilya:** 回到你关于预训练的问题，也许如果你足够擅长从预训练中获取一切，你也能得到那种能力。但那种东西似乎……嗯，它可能能从预训练中获得，也可能不能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To connect to your question about pre-training, maybe if you are good enough at getting everything out of pre-training, you could get that as well. But that's the kind of thing which seems... Well, it may or may not be possible to get that from pre-training.</p>
</details>

**Dwarkesh:** “那种东西”是什么？显然不只是直接的情感。它似乎是一种类似于**价值函数**（value function: 在强化学习中，用于评估一个智能体在特定状态或采取特定行动后能获得的预期累积奖励）的东西，告诉你任何决策的最终回报应该是什么。你认为这种东西不会隐含地来自预训练吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is "that"? Clearly not just directly emotion. It seems like some almost value function-like thing which is telling you what the end reward for any decision should be. You think that doesn't sort of implicitly come from pre-training?</p>
</details>

**Ilya:** 我认为有可能。我只是说这并非百分之百显而易见。但那是什么？你如何看待情感？情感在机器学习中的类比是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it could. I'm just saying it's not 100% obvious. But what is that? How do you think about emotions? What is the ML analogy for emotions?</p>
</details>

**Ilya:** 它应该是一种价值函数之类的东西。但我认为目前还没有一个很好的机器学习类比，因为现在价值函数在人们所做的事情中并没有扮演非常重要的角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It should be some kind of a value function thing. But I don’t think there is a great ML analogy because right now, value functions don't play a very prominent role in the things people do.</p>
</details>

**Dwarkesh:** 如果你愿意的话，也许值得为观众定义一下什么是价值函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might be worth defining for the audience what a value function is, if you want to do that.</p>
</details>

**Ilya:** 当然，我很乐意。当人们进行强化学习时，现在强化学习的实现方式是怎样的？你有一个神经网络，给它一个问题，然后告诉模型：“去解决它。”模型可能会采取数千、数十万次行动或思考，然后产生一个解决方案。这个解决方案会被评分。然后这个分数被用来为你的整个行动轨迹中的每一个动作提供训练信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Certainly, I'll be very happy to do that. When people do reinforcement learning, the way reinforcement learning is done right now, how do people train those agents? You have your neural net and you give it a problem, and then you tell the model, "Go solve it." The model takes maybe thousands, hundreds of thousands of actions or thoughts or something, and then it produces a solution. The solution is graded. And then the score is used to provide a training signal for every single action in your trajectory.</p>
</details>

**Ilya:** 这意味着，如果你正在做一个需要很长时间才能完成的事情——如果你在训练一个需要很长时间才能解决的任务——在你想出解决方案之前，它根本不会进行任何学习。这是朴素的强化学习的实现方式。o1、R1 表面上就是这么做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That means that if you are doing something that goes for a long time—if you're training a task that takes a long time to solve—it will do no learning at all until you come up with the proposed solution. That's how reinforcement learning is done naively. That's how o1, R1 ostensibly are done.</p>
</details>

**Ilya:** 价值函数的概念是说：“也许我有时可以，不是每次，告诉你你做得好还是不好。”价值函数的概念在某些领域比其他领域更有用。例如，当你下棋时，你丢了一个子，你就知道自己搞砸了。你不需要下完整盘棋才知道刚才那步是坏棋，因此之前的步骤也是不好的。价值函数让你能够缩短等待时间，不必等到最后。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The value function says something like, "Maybe I could sometimes, not always, tell you if you are doing well or badly." The notion of a value function is more useful in some domains than others. For example, when you play chess and you lose a piece, I messed up. You don't need to play the whole game to know that what I just did was bad, and therefore whatever preceded it was also bad. The value function lets you short-circuit the wait until the very end.</p>
</details>

**Ilya:** 假设你正在做一些数学或编程方面的事情，并且你正在尝试探索一个特定的解决方案或方向。经过比如说一千步的思考后，你得出结论这个方向没有前途。一旦你得出这个结论，你就可以在之前决定走这条路的一千个时间步前就获得一个奖励信号。你会说：“下次在类似情况下我不应该走这条路了，”这远早于你真正提出解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's suppose that you are doing some kind of a math thing or a programming thing, and you're trying to explore a particular solution or direction. After, let's say, a thousand steps of thinking, you concluded that this direction is unpromising. As soon as you conclude this, you could already get a reward signal a thousand timesteps previously, when you decided to pursue down this path. You say, "Next time I shouldn't pursue this path in a similar situation," long before you actually came up with the proposed solution.</p>
</details>

**Dwarkesh:** DeepSeek R1 的论文中提到——行动轨迹的空间如此之大，以至于可能很难学习从中间轨迹到价值的映射。而且考虑到，例如在编码中，你会有错误的想法，然后你会回头，然后你会改变一些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was in the DeepSeek R1 paper— that the space of trajectories is so wide that maybe it's hard to learn a mapping from an intermediate trajectory and value. And also given that, in coding for example you'll have the wrong idea, then you'll go back, then you'll change something.</p>
</details>

**Ilya:** 这听起来像是对深度学习缺乏信心。当然，这可能很困难，但没有什么事是深度学习做不到的。我的期望是价值函数应该是有用的，我完全期待它们在未来会被使用，如果现在还没有的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This sounds like such a lack of faith in deep learning. Sure it might be difficult, but nothing deep learning can't do. My expectation is that a value function should be useful, and I fully expect that they will be used in the future, if not already.</p>
</details>

**Ilya:** 我之前提到那个情感中枢受损的人，更多的是想说，这可能表明人类的价值函数在某种重要方面受到情感的调节，而这是由进化硬编码的。也许这对于人们在世界上有效行动至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I was alluding to with the person whose emotional center got damaged, it’s more that maybe what it suggests is that the value function of humans is modulated by emotions in some important way that's hardcoded by evolution. And maybe that is important for people to be effective in the world.</p>
</details>

### 从规模时代到研究时代

**Dwarkesh:** 人们一直在谈论扩展数据、扩展参数、扩展计算。有没有更通用的方式来思考扩展？还有哪些其他的扩展维度？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People have been talking about scaling data, scaling parameters, scaling compute. Is there a more general way to think about scaling? What are the other scaling axes?</p>
</details>

**Ilya:** 我有一个观点，我认为可能是对的。过去机器学习的工作方式是，人们只是修修补补，试图得到一些有趣的结果。这就是过去发生的事情。然后，规模化的洞见出现了。规模定律、GPT-3，突然间所有人都意识到我们应该扩大规模。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's a perspective that I think might be true. The way ML used to work is that people would just tinker with stuff and try to get interesting results. That's what's been going on in the past. Then the scaling insight arrived. Scaling laws, GPT-3, and suddenly everyone realized we should scale.</p>
</details>

**Ilya:** 这是语言如何影响思想的一个例子。“Scaling”（规模化）只是一个词，但它如此强大，因为它告诉人们该做什么。他们说：“让我们试着扩大规模。”所以你会问，我们在扩展什么？预训练是需要扩展的东西。它是一种特定的扩展配方。预训练的重大突破在于认识到这个配方是好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is an example of how language affects thought. "Scaling" is just one word, but it's such a powerful word because it informs people what to do. They say, "Let's try to scale things." So you say, what are we scaling? Pre-training was the thing to scale. It was a particular scaling recipe. The big breakthrough of pre-training is the realization that this recipe is good.</p>
</details>

**Ilya:** 你会说：“嘿，如果你把一些计算资源和一些数据混合到一个特定大小的神经网络中，你就会得到结果。你会知道，只要扩大这个配方的规模，你就会变得更好。”这也很棒。公司喜欢这样，因为它提供了一种风险非常低的资源投资方式。投资研究要困难得多。比较一下，如果你做研究，你需要说：“研究员们，前进吧，去研究，拿出点东西来”，而另一种方式是获取更多数据，获取更多计算资源。你知道通过预训练你会得到一些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You say, "Hey, if you mix some compute with some data into a neural net of a certain size, you will get results. You will know that you'll be better if you just scale the recipe up." This is also great. Companies love this because it gives you a very low-risk way of investing your resources. It's much harder to invest your resources in research. Compare that. If you research, you need to be like, "Go forth researchers and research and come up with something", versus get more data, get more compute. You know you'll get something from pre-training.</p>
</details>

**Ilya:** 确实，根据一些人在 Twitter 上说的各种事情来看，似乎 Gemini 已经找到了一种从预训练中获得更多东西的方法。但到某个时候，预训练的数据会耗尽。数据显然是有限的。接下来你该怎么办？你要么做一些增强版的预训练，一个与你之前做过的不同的配方，要么你做强化学习，或者其他什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Indeed, it looks like, based on various things some people say on Twitter, maybe it appears that Gemini have found a way to get more out of pre-training. At some point though, pre-training will run out of data. The data is very clearly finite. What do you do next? Either you do some kind of souped-up pre-training, a different recipe from the one you've done before, or you're doing RL, or maybe something else.</p>
</details>

**Ilya:** 但现在计算能力已经非常强大了，非常非常大。在某种意义上，我们又回到了研究的时代。也许可以换一种说法。从 2012 年到 2020 年，是研究的时代。现在，从 2020 年到 2025 年，是规模化的时代——这些年份可以加上误差范围——因为人们说：“这太神奇了。你必须扩大规模。继续扩大。”就一个词：规模化。但现在规模已经如此之大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now that compute is big, compute is now very big, in some sense we are back to the age of research. Maybe here's another way to put it. Up until 2020, from 2012 to 2020, it was the age of research. Now, from 2020 to 2025, it was the age of scaling—maybe plus or minus, let's add error bars to those years—because people say, "This is amazing. You've got to scale more. Keep scaling." The one word: scaling. But now the scale is so big.</p>
</details>

**Ilya:** 人们真的相信，“哦，规模已经这么大了，但如果你再增加 100 倍，一切都会变得截然不同”吗？肯定会有所不同。但人们真的相信只要把规模扩大 100 倍，一切都会被改变吗？我不认为这是真的。所以，我们又回到了研究的时代，只是这次有了大型计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is the belief really, "Oh, it's so big, but if you had 100x more, everything would be so different?" It would be different, for sure. But is the belief that if you just 100x the scale, everything would be transformed? I don't think that's true. So it's back to the age of research again, just with big computers.</p>
</details>

**Dwarkesh:** 这是一个非常有趣的说法。但让我问你刚才提出的问题。我们在扩展什么？拥有一个“配方”意味着什么？我不知道有什么像物理定律一样清晰的关系存在于预训练中。数据、计算或参数与损失之间存在幂律关系。我们应该寻求什么样的关系，我们应该如何思考这个新配方可能是什么样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a very interesting way to put it. But let me ask you the question you just posed then. What are we scaling, and what would it mean to have a recipe? I guess I'm not aware of a very clean relationship that almost looks like a law of physics which existed in pre-training. There was a power law between data or compute or parameters and loss. What is the kind of relationship we should be seeking, and how should we think about what this new recipe might look like?</p>
</details>

**Ilya:** 我们已经见证了从一种类型的扩展到另一种不同类型的扩展的转变，从预训练到强化学习。现在人们正在扩展强化学习。根据人们在 Twitter 上的说法，他们现在在强化学习上花费的计算资源比在预训练上还要多，因为强化学习实际上可以消耗相当多的计算资源。你进行非常长的**推演**（rollouts: 在强化学习中，指智能体与环境交互产生的一系列状态、动作和奖励的序列），所以产生这些推演需要大量的计算。然后你从每次推演中获得的学习量相对较少，所以你真的可以花费大量的计算资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've already witnessed a transition from one type of scaling to a different type of scaling, from pre-training to RL. Now people are scaling RL. Now based on what people say on Twitter, they spend more compute on RL than on pre-training at this point, because RL can actually consume quite a bit of compute. You do very long rollouts, so it takes a lot of compute to produce those rollouts. Then you get a relatively small amount of learning per rollout, so you really can spend a lot of compute.</p>
</details>

**Ilya:** 我甚至不会称之为扩展。我会说：“嘿，你在做什么？你正在做的是你能做的最高效的事情吗？你能找到一种更高效地使用计算资源的方式吗？”我们之前讨论过价值函数的事情。也许一旦人们擅长使用价值函数，他们会更高效地利用资源。如果你找到一种全新的模型训练方法，你可以说：“这是扩展还是仅仅是利用你的资源？”我认为这就变得有点模糊了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wouldn't even call it scaling. I would say, "Hey, what are you doing? Is the thing you are doing the most productive thing you could be doing? Can you find a more productive way of using your compute?" We've discussed the value function business earlier. Maybe once people get good at value functions, they will be using their resources more productively. If you find a whole other way of training models, you could say, "Is this scaling or is it just using your resources?" I think it becomes a little bit ambiguous.</p>
</details>

**Ilya:** 在某种意义上，当人们回到那个研究时代时，情况是：“让我们试试这个，这个，还有这个。让我们试试那个，那个，还有那个。哦，看，有趣的事情发生了。”我认为我们会回归到那种状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the sense that, when people were in the age of research back then, it was, "Let's try this and this and this. Let's try that and that and that. Oh, look, something interesting is happening." I think there will be a return to that.</p>
</details>

### 核心症结：泛化能力

**Dwarkesh:** 如果我们回到了研究时代，退一步看，我们需要最多思考的配方部分是什么？当你说价值函数时，人们已经在尝试当前的配方，但随后有了 LLM-as-a-Judge 等等。你可以说那是一个价值函数，但听起来你心里想的是更根本的东西。我们是否应该重新思考预训练，而不仅仅是在这个过程的末尾增加更多步骤？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we're back in the era of research, stepping back, what is the part of the recipe that we need to think most about? When you say value function, people are already trying the current recipe, but then having LLM-as-a-Judge and so forth. You could say that's a value function, but it sounds like you have something much more fundamental in mind. Should we even rethink pre-training at all and not just add more steps to the end of that process?</p>
</details>

**Ilya:** 关于价值函数的讨论，我认为很有趣。我想强调的是，我认为价值函数会让强化学习更有效率，我认为这会带来改变。但我认为，任何你能用价值函数做到的事情，不用它也能做到，只是速度更慢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The discussion about value function, I think it was interesting. I want to emphasize that I think the value function is something that's going to make RL more efficient, and I think that makes a difference. But I think anything you can do with a value function, you can do without, just more slowly.</p>
</details>

**Ilya:** 我认为最根本的事情是，这些模型在泛化能力上不知何故比人类差得太多了。这一点超级明显。这似乎是一个非常根本性的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing which I think is the most fundamental is that these models somehow just generalize dramatically worse than people. It's super obvious. That seems like a very fundamental thing.</p>
</details>

**Dwarkesh:** 所以症结在于泛化。这里有两个子问题。一个是关于样本效率：为什么这些模型学习需要比人类多得多的数据？第二个问题是，即使不考虑所需数据量，为什么教给模型我们想要的东西比教给人类要困难得多？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the crux: generalization. There are two sub-questions. There's one which is about sample efficiency: why should it take so much more data for these models to learn than humans? There's a second question. Even separate from the amount of data it takes, why is it so hard to teach the thing we want to a model than to a human?</p>
</details>

**Dwarkesh:** 对于人类，我们不一定需要一个可验证的奖励才能……你现在可能正在指导一群研究人员，你和他们交谈，给他们看你的代码，向他们展示你的思维方式。他们从中学习你的思维方式和如何做研究。你不需要为他们设定一个可验证的奖励，比如：“好了，这是课程的下一部分，现在这是你课程的下一部分。哦，这次训练不稳定。”没有这种繁琐、定制化的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For a human, we don't necessarily need a verifiable reward to be able to… You're probably mentoring a bunch of researchers right now, and you're talking with them, you're showing them your code, and you're showing them how you think. From that, they're picking up your way of thinking and how they should do research. You don’t have to set a verifiable reward for them that's like, "Okay, this is the next part of the curriculum, and now this is the next part of your curriculum. Oh, this training was unstable." There's not this schleppy, bespoke process.</p>
</details>

**Dwarkesh:** 也许这两个问题在某种程度上是相关的，但我很想探讨第二个问题，它更像是持续学习，而第一个问题，感觉就像是样本效率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Perhaps these two issues are actually related in some way, but I'd be curious to explore this second thing, which is more like continual learning, and this first thing, which feels just like sample efficiency.</p>
</details>

**Ilya:** 你其实可以思考一下，对于人类的样本效率，一个需要考虑的可能解释是进化。进化给了我们少量但最可能最有用的信息。对于视觉、听觉和运动等能力，我认为有很强的证据表明进化给了我们很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You could actually wonder that one possible explanation for the human sample efficiency that needs to be considered is evolution. Evolution has given us a small amount of the most useful information possible. For things like vision, hearing, and locomotion, I think there's a pretty strong case that evolution has given us a lot.</p>
</details>

**Ilya:** 例如，人类的灵巧性远远超过……我的意思是，如果你让机器人在模拟中进行大量训练，它们也可以变得灵巧。但在现实世界中训练一个机器人，让它像人一样快速掌握一项新技能，似乎遥不可及。在这里你可以说：“哦是的，运动能力。我们所有的祖先都需要出色的运动能力，比如松鼠。所以在运动方面，我们可能有一些难以置信的先验知识。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, human dexterity far exceeds… I mean robots can become dexterous too if you subject them to a huge amount of training in simulation. But to train a robot in the real world to quickly pick up a new skill like a person does seems very out of reach. Here you could say, "Oh yeah, locomotion. All our ancestors needed great locomotion, squirrels. So with locomotion, maybe we've got some unbelievable prior."</p>
</details>

**Ilya:** 你可以对视觉提出同样的论点。我相信 Yann LeCun 曾指出，孩子们经过 10 小时的练习就能学会开车，这是事实。但我们的视觉能力太强了。至少对我来说，我记得我五岁的时候，那时我对汽车非常着迷。我敢肯定，我五岁时对汽车的识别能力已经足以应付驾驶了。一个五岁的孩子接触到的数据量并不多。你大部分时间都待在父母家里，所以数据多样性很低。但你也可以说，这可能也是进化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You could make the same case for vision. I believe Yann LeCun made the point that children learn to drive after 10 hours of practice, which is true. But our vision is so good. At least for me, I remember myself being a five-year-old. I was very excited about cars back then. I'm pretty sure my car recognition was more than adequate for driving already as a five-year-old. You don't get to see that much data as a five-year-old. You spend most of your time in your parents' house, so you have very low data diversity. But you could say maybe that's evolution too.</p>
</details>

**Ilya:** 但在语言、数学和编程方面，可能就不是这样了。它似乎仍然比模型更好。显然，模型在语言、数学和编程方面比普通人强。但它们在学习方面比普通人强吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in language and math and coding, probably not. It still seems better than models. Obviously, models are better than the average human at language, math, and coding. But are they better than the average human at learning?</p>
</details>

**Ilya:** 哦是的。哦是的，绝对是。我想说的是，语言、数学和编程——尤其是数学和编程——表明，使人们擅长学习的东西，可能更多的是某种根本性的东西，而不是一个复杂的先验知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh yeah. Oh yeah, absolutely. What I meant to say is that language, math, and coding—and especially math and coding—suggests that whatever it is that makes people good at learning is probably not so much a complicated prior, but something more, some fundamental thing.</p>
</details>

**Dwarkesh:** 我不太明白。为什么会是这样？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm not sure I understood. Why should that be the case?</p>
</details>

**Ilya:** 考虑一种人们表现出某种高度可靠性的技能。如果这项技能对我们的祖先在数百万年、数亿年里都非常有用，你可以说人类擅长它是因为进化，因为我们有一个进化的先验知识，以某种非常不明显的方式编码着，不知何故让我们如此擅长。但如果人们在一个直到最近才存在的领域表现出强大的能力、可靠性、鲁棒性和学习能力，那么这更多地表明，人们可能只是拥有更好的机器学习能力，句号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So consider a skill in which people exhibit some kind of great reliability. If the skill is one that was very useful to our ancestors for many millions of years, hundreds of millions of years, you could argue that maybe humans are good at it because of evolution, because we have a prior, an evolutionary prior that's encoded in some very non-obvious way that somehow makes us so good at it. But if people exhibit great ability, reliability, robustness, and ability to learn in a domain that really did not exist until recently, then this is more an indication that people might have just better machine learning, period.</p>
</details>

### SSI 的策略与 AI 的未来

**Dwarkesh:** 如果我们回到了研究时代，你从 2012 年到 2020 年都在其中。如果我们回到研究时代，现在的氛围会是怎样的？例如，即使在 AlexNet 之后，用于运行实验的计算量仍在不断增加，前沿系统的规模也在不断扩大。你认为现在这个研究时代仍然需要巨大的计算量吗？你认为这需要我们回到档案中阅读旧论文吗？你在谷歌、OpenAI 和斯坦福这些地方时，研究氛围更浓厚？我们应该期待社区里出现什么样的东西？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm curious. If you say we are back in an era of research, you were there from 2012 to 2020. What is the vibe now going to be if we go back to the era of research? For example, even after AlexNet, the amount of compute that was used to run experiments kept increasing, and the size of frontier systems kept increasing. Do you think now that this era of research will still require tremendous amounts of compute? Do you think it will require going back into the archives and reading old papers? You were at Google and OpenAI and Stanford, these places, when there was more of a vibe of research? What kind of things should we be expecting in the community?</p>
</details>

**Ilya:** 规模化时代的一个后果是，规模化吸走了房间里所有的空气。因为规模化吸走了所有的空气，所有人都开始做同样的事情。我们到了这样一个地步：世界上的公司比想法多得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One consequence of the age of scaling is that scaling sucked out all the air in the room. Because scaling sucked out all the air in the room, everyone started to do the same thing. We got to the point where we are in a world where there are more companies than ideas by quite a bit.</p>
</details>

**Ilya:** 实际上，关于这一点，硅谷有句名言：“想法很廉价，执行才是一切。”人们经常这么说，这也有道理。但我看到有人在 Twitter 上说：“如果想法那么廉价，为什么没人有想法呢？”我认为这也很有道理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually on that, there is this Silicon Valley saying that says that ideas are cheap, execution is everything. People say that a lot, and there is truth to that. But then I saw someone say on Twitter something like, "If ideas are so cheap, how come no one's having any ideas?" And I think it's true too.</p>
</details>

**Ilya:** 如果你从瓶颈的角度来思考研究进展，有几个瓶颈。一个是想法，另一个是你将想法付诸实践的能力，这可能是计算能力，也可能是工程能力。如果你回到 90 年代，比如说，当时有些人有很好的想法，如果他们有更大的计算机，也许他们可以证明他们的想法是可行的。但他们做不到，所以他们只能做一个非常非常小的演示，无法说服任何人。所以瓶颈是计算能力。然后在规模化时代，计算能力大大增加了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you think about research progress in terms of bottlenecks, there are several bottlenecks. One of them is ideas, and one of them is your ability to bring them to life, which might be compute but also engineering. If you go back to the '90s, let's say, you had people who had pretty good ideas, and if they had much larger computers, maybe they could demonstrate that their ideas were viable. But they could not, so they could only have a very, very small demonstration that did not convince anyone. So the bottleneck was compute. Then in the age of scaling, compute has increased a lot.</p>
</details>

**Ilya:** 当然，需要多少计算能力是个问题，但计算能力已经很强大了。计算能力已经足够强大，以至于要证明某个想法并不明显需要那么多更多的计算能力。我给你举个例子。AlexNet 是在两块 GPU 上构建的。这就是它使用的全部计算量。Transformer 是在 8 到 64 块 GPU 上构建的。没有一篇 Transformer 论文的实验使用超过 64 块 2017 年的 GPU，那相当于今天的多少？两块 GPU？还有 ResNet，对吧？你可以说 o1 的推理并不是世界上计算最密集的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, there is a question of how much compute is needed, but compute is large. Compute is large enough such that it's not obvious that you need that much more compute to prove some idea. I'll give you an analogy. AlexNet was built on two GPUs. That was the total amount of compute used for it. The transformer was built on 8 to 64 GPUs. No single transformer paper experiment used more than 64 GPUs of 2017, which would be like, what, two GPUs of today? The ResNet, right? You could argue that the o1 reasoning was not the most compute-heavy thing in the world.</p>
</details>

**Ilya:** 所以对于研究来说，你肯定需要一定量的计算，但远非明显需要史上最大量的计算。你可能会说，而且我认为这是对的，如果你想构建绝对最好的系统，那么拥有更多的计算能力会有帮助。特别是如果大家都在同一个范式内，那么计算能力就成了主要的差异化因素之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for research, you definitely need some amount of compute, but it's far from obvious that you need the absolutely largest amount of compute ever for research. You might argue, and I think it is true, that if you want to build the absolutely best system then it helps to have much more compute. Especially if everyone is within the same paradigm, then compute becomes one of the big differentiators.</p>
</details>

**Dwarkesh:** SSI（Safe Superintelligence Inc.）将如何盈利？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How will SSI make money?</p>
</details>

**Ilya:** 我对这个问题的回答是这样的。现在，我们只专注于研究，然后这个问题的答案会自行揭晓。我认为会有很多可能的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My answer to this question is something like this. Right now, we just focus on the research, and then the answer to that question will reveal itself. I think there will be lots of possible answers.</p>
</details>

**Dwarkesh:** SSI 的计划仍然是直奔超级智能吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is SSI's plan still to straight shot superintelligence?</p>
</details>

**Ilya:** 也许吧。我认为这有其价值。我认为这很有价值，因为它很好地避免了日常市场竞争的影响。但我认为有两个原因可能导致我们改变计划。一个是务实的，如果时间线被证明很长，而这很可能。第二，我认为让最好、最强大的 AI 走出去影响世界，具有很大的价值。我认为这是一件有意义且有价值的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe. I think that there is merit to it. I think there's a lot of merit because it's very nice to not be affected by the day-to-day market competition. But I think there are two reasons that may cause us to change the plan. One is pragmatic, if timelines turned out to be long, which they might. Second, I think there is a lot of value in the best and most powerful AI being out there impacting the world. I think this is a meaningfully valuable thing.</p>
</details>

**Dwarkesh:** 那为什么你的默认计划是直奔超级智能？因为听起来像 OpenAI、Anthropic 和所有这些其他公司，他们的明确想法是：“看，我们有越来越弱的智能体，公众可以逐渐适应和准备。”为什么直接构建一个超级智能可能更好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then why is your default plan to straight shot superintelligence? Because it sounds like OpenAI, Anthropic, all these other companies, their explicit thinking is, "Look, we have weaker and weaker intelligences that the public can get used to and prepare for." Why is it potentially better to build a superintelligence directly?</p>
</details>

**Ilya:** 我来谈谈支持和反对的理由。支持的理由是，当人们身处市场时，他们面临的挑战之一是必须参与这场“老鼠赛跑”（rat race）。这场赛跑相当困难，因为它让你面临需要做出的艰难权衡。能够说“我们将自己与这一切隔离开来，只专注于研究，直到我们准备好了才出来，而不是提前”，这是很好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll make the case for and against. The case for is that one of the challenges that people face when they're in the market is that they have to participate in the rat race. The rat race is quite difficult in that it exposes you to difficult trade-offs which you need to make. It is nice to say, "We'll insulate ourselves from all this and just focus on the research and come out only when we are ready, and not before."</p>
</details>

**Ilya:** 但反方的观点也同样成立，这两者是相互对立的力量。反方的观点是：“嘿，让世界看到强大的 AI 是有用的。让世界看到强大的 AI 是有用的，因为这是你唯一能沟通它的方式。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the counterpoint is valid too, and those are opposing forces. The counterpoint is, "Hey, it is useful for the world to see powerful AI. It is useful for the world to see powerful AI because that's the only way you can communicate it."</p>
</details>

### AGI 概念的误区与持续学习的重要性

**Ilya:** 我想给你另一个语言如何影响思维的例子。这次是两个词，我认为它们塑造了每个人的思维。第一个词：**AGI**（Artificial General Intelligence: 通用人工智能）。第二个词：预训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll give you another example of how language affects thinking. In this case, it will be two words that have shaped everyone's thinking, I maintain. First word: AGI. Second word: pre-training.</p>
</details>

**Ilya:** 让我解释一下。AGI 这个词，为什么会存在？这是一个非常特殊的词。它为什么存在？是有原因的。在我看来，AGI 这个词存在的原因，与其说是因为它是一个非常重要、本质上描述某种智能终极状态的词，不如说它是对另一个已存在术语的反应，那个术语是“狭义 AI”（narrow AI）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me explain. The term AGI, why does this term exist? It's a very particular term. Why does it exist? There's a reason. The reason that the term AGI exists is, in my opinion, not so much because it's a very important, essential descriptor of some end state of intelligence, but because it is a reaction to a different term that existed, and the term is narrow AI.</p>
</details>

**Ilya:** 如果你回到游戏和 AI 的远古历史，跳棋 AI、象棋 AI、电脑游戏 AI，每个人都会说，看这个狭义智能。当然，象棋 AI 可以击败卡斯帕罗夫，但它做不了任何其他事情。它是如此狭隘，是人工狭义智能。所以作为回应，作为对此的反应，一些人说，这不好。它太狭隘了。我们需要的是通用 AI，一个能做所有事情的 AI。这个词获得了巨大的关注。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you go back to ancient history of gameplay and AI, of checkers AI, chess AI, computer games AI, everyone would say, look at this narrow intelligence. Sure, the chess AI can beat Kasparov, but it can't do anything else. It is so narrow, artificial narrow intelligence. So in response, as a reaction to this, some people said, this is not good. It is so narrow. What we need is general AI, an AI that can just do all the things. That term just got a lot of traction.</p>
</details>

**Ilya:** 第二个获得巨大关注的是预训练，特别是预训练的配方。我认为人们现在做强化学习的方式可能正在消除预训练的概念印记。但预训练有这个特性。你做更多的预训练，模型在所有方面都会变得更好，或多或少是均匀的。通用 AI。预训练产生 AGI。但 AGI 和预训练发生的事情是，在某种意义上，它们超出了目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing that got a lot of traction is pre-training, specifically the recipe of pre-training. I think the way people do RL now is maybe undoing the conceptual imprint of pre-training. But pre-training had this property. You do more pre-training and the model gets better at everything, more or less uniformly. General AI. Pre-training gives AGI. But the thing that happened with AGI and pre-training is that in some sense they overshot the target.</p>
</details>

**Ilya:** 如果你思考“AGI”这个词，特别是在预训练的背景下，你会意识到，人类并不是一个 AGI。是的，人类有技能基础，但人类缺乏大量的知识。相反，我们依赖于持续学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you think about the term "AGI", especially in the context of pre-training, you will realize that a human being is not an AGI. Yes, there is definitely a foundation of skills, but a human being lacks a huge amount of knowledge. Instead, we rely on continual learning.</p>
</details>

**Ilya:** 所以当你思考，“好吧，假设我们取得了成功，我们生产了某种安全的超级智能。”问题是，你如何定义它？在持续学习的曲线上，它会处于哪个位置？我生产了一个超级智能的 15 岁少年，他非常渴望前进。他们根本不知道很多东西，是一个很棒的学生，非常渴望。你去当程序员，你去当医生，去学习。所以你可以想象，部署本身将涉及某种学习试错期。这是一个过程，而不是你扔下一个成品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you think about, "Okay, so let's suppose that we achieve success and we produce some kind of safe superintelligence." The question is, how do you define it? Where on the curve of continual learning is it going to be? I produce a superintelligent 15-year-old that's very eager to go. They don't know very much at all, a great student, very eager. You go and be a programmer, you go and be a doctor, go and learn. So you could imagine that the deployment itself will involve some kind of a learning trial-and-error period. It's a process, as opposed to you dropping the finished thing.</p>
</details>

**Dwarkesh:** 我明白了。你是在说，你所指的超级智能不是一个已经完成的、知道如何做经济中每一项工作的心智。因为像最初的 OpenAI 章程之类的东西定义 AGI 的方式是，它能做每一项工作，人类能做的每一件事。你提出的则是一个能够学习做每一项工作的心智，而那才是超级智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I see. You're suggesting that the thing you're pointing out with superintelligence is not some finished mind which knows how to do every single job in the economy. Because the way, say, the original OpenAI charter or whatever defines AGI is like, it can do every single job, every single thing a human can do. You're proposing instead a mind which can learn to do every single job, and that is superintelligence.</p>
</details>

**Ilya:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

**Dwarkesh:** 但一旦你有了学习算法，它被部署到世界上的方式就和一个人类劳动力加入一个组织一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But once you have the learning algorithm, it gets deployed into the world the same way a human laborer might join an organization.</p>
</details>

**Ilya:** 完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly.</p>
</details>

### 超级智能的对齐与长期挑战

**Dwarkesh:** 我的思维方式发生了变化，我现在更加重视 AI 的增量部署和提前部署。关于 AI 的一个非常困难的事情是，我们正在谈论尚不存在的系统，很难想象它们。我认为正在发生的一件事是，在实践中，很难感受到 AGI。很难感受到 AGI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the ways in which my thinking has been changing is that I now place more importance on AI being deployed incrementally and in advance. One very difficult thing about AI is that we are talking about systems that don't yet exist and it's hard to imagine them. I think that one of the things that's happening is that in practice, it's very hard to feel the AGI. It's very hard to feel the AGI.</p>
</details>

**Ilya:** 我们可以谈论它，但想象一下，当你年老体弱时，谈论变老是什么感觉。你可以进行对话，你可以尝试想象，但这很难，然后你又回到现实中，情况并非如此。我认为很多围绕 AGI 及其未来力量的问题，都源于它太难想象了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can talk about it, but imagine having a conversation about how it is like to be old when you're old and frail. You can have a conversation, you can try to imagine it, but it's just hard, and you come back to reality where that's not the case. I think that a lot of the issues around AGI and its future power stem from the fact that it's very difficult to imagine.</p>
</details>

**Ilya:** 未来的 AI 将会不同。它将是强大的。确实，整个问题，AI 和 AGI 的问题是什么？整个问题就是力量。整个问题就是力量。当力量真的很大时，会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Future AI is going to be different. It's going to be powerful. Indeed, the whole problem, what is the problem of AI and AGI? The whole problem is the power. The whole problem is the power. When the power is really big, what's going to happen?</p>
</details>

**Ilya:** 在过去的一年里，我改变想法的方式之一是——这个想法的改变，我稍微保留一下，可能会反向传播到我们公司的计划中——如果很难想象，你该怎么办？你必须展示这个东西。你必须展示这个东西。我坚持认为，大多数从事 AI 工作的人也无法想象它，因为它与人们日常所见太不相同了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the ways in which I've changed my mind over the past year—and that change of mind, I'll hedge a little bit, may back-propagate into the plans of our company—is that if it's hard to imagine, what do you do? You’ve got to be showing the thing. You’ve got to be showing the thing. I maintain that most people who work on AI also can't imagine it because it's too different from what people see on a day-to-day basis.</p>
</details>

**Ilya:** 我坚持认为，这是我预测会发生的事情。这是一个预测。我坚持认为，随着 AI 变得更强大，人们会改变他们的行为。我们会看到各种前所未有的事情，这些事情现在没有发生。我举一些例子。我认为，无论好坏，前沿公司将在发生的事情中扮演非常重要的角色，政府也是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do maintain, here's something which I predict will happen. This is a prediction. I maintain that as AI becomes more powerful, people will change their behaviors. We will see all kinds of unprecedented things which are not happening right now. I’ll give some examples. I think for better or worse, the frontier companies will play a very important role in what happens, as will the government.</p>
</details>

**Ilya:** 我认为你会看到的事情，你已经看到了开端，是那些激烈竞争的公司开始在 AI 安全方面进行合作。你可能已经看到 OpenAI 和 Anthropic 迈出了第一小步，但这在以前是不存在的。这是我在大约三年前的一次演讲中预测会发生的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The kind of things that I think you'll see, which you see the beginnings of, are companies that are fierce competitors starting to collaborate on AI safety. You may have seen OpenAI and Anthropic doing a first small step, but that did not exist. That's something which I predicted in one of my talks about three years ago, that such a thing will happen.</p>
</details>

**Ilya:** 我还坚持认为，随着 AI 继续变得更强大，更明显地强大，政府和公众也会有做点什么的愿望。我认为展示 AI 是一股非常重要的力量。这是第一点。第二点，好吧，AI 正在被构建。需要做什么？我坚持认为会发生的一件事是，现在从事 AI 工作的人，我坚持认为他们感觉不到 AI 的强大，因为它的错误。我确实认为，在某个时候，AI 会开始让人感觉强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I also maintain that as AI continues to become more powerful, more visibly powerful, there will also be a desire from governments and the public to do something. I think this is a very important force, of showing the AI. That's number one. Number two, okay, so the AI is being built. What needs to be done? One thing that I maintain that will happen is that right now, people who are working on AI, I maintain that the AI doesn't feel powerful because of its mistakes. I do think that at some point the AI will start to feel powerful actually.</p>
</details>

**Ilya:** 我认为当那发生时，我们会看到所有 AI 公司对待安全的方式发生巨大变化。他们会变得更加偏执。我这么说是作为一个预测，我们会看到它发生。我们会看看我是否正确。但我认为这是会发生的事情，因为他们会看到 AI 变得更强大。我坚持认为，现在发生的一切，都是因为人们看着今天的 AI，很难想象未来的 AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think when that happens, we will see a big change in the way all AI companies approach safety. They'll become much more paranoid. I say this as a prediction that we will see happen. We'll see if I'm right. But I think this is something that will happen because they will see the AI becoming more powerful. Everything that's happening right now, I maintain, is because people look at today's AI and it's hard to imagine the future AI.</p>
</details>

**Ilya:** 还有第三件事需要发生。我是在更广泛的层面上谈论它，不仅仅是从 SSI 的角度，因为你问了我们公司。问题是，公司应该立志建造什么？他们应该立志建造什么？有一个大想法，所有人都被锁定在其中，那就是自我改进的 AI。为什么会这样？因为公司比想法多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a third thing which needs to happen. I'm talking about it in broader terms, not just from the perspective of SSI because you asked me about our company. The question is, what should the companies aspire to build? What should they aspire to build? There has been one big idea that everyone has been locked into, which is the self-improving AI. Why did it happen? Because there are fewer ideas than companies.</p>
</details>

**Ilya:** 但我坚持认为，有更好的东西可以建造，我认为每个人都会想要那个。那就是对有情生命特别关心的、鲁棒对齐的 AI。我认为特别有理由说，建造一个关心有情生命的 AI，比建造一个只关心人类生命的 AI 要容易，因为 AI 本身也将是有情的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I maintain that there is something that's better to build, and I think that everyone will want that. It's the AI that's robustly aligned to care about sentient life specifically. I think in particular, there's a case to be made that it will be easier to build an AI that cares about sentient life than an AI that cares about human life alone, because the AI itself will be sentient.</p>
</details>

### 研究的品味：美感、简洁与自上而下的信念

**Dwarkesh:** 最后一个问题：什么是研究品味？你显然被认为是世界上在 AI 研究方面品味最好的人。你是深度学习历史上最重大事件的合著者，从 AlexNet 到 GPT-3 等等。它是什么？你如何描述你是如何想出这些想法的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Final question: What is research taste? You're obviously the person in the world who is considered to have the best taste in doing research in AI. You were the co-author on the biggest things that have happened in the history of deep learning, from AlexNet to GPT-3 to so on. What is it, how do you characterize how you come up with these ideas?</p>
</details>

**Ilya:** 我可以就我个人而言对此发表评论。我认为不同的人有不同的做法。对我个人而言，指导我的一件事是一种关于 AI 应该如何的美学，通过思考人类是怎样的，但要正确地思考。错误地思考人类是怎样的很容易，但正确地思考人类意味着什么？我给你举一些例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can comment on this for myself. I think different people do it differently. One thing that guides me personally is an aesthetic of how AI should be, by thinking about how people are, but thinking correctly. It's very easy to think about how people are incorrectly, but what does it mean to think about people correctly? I'll give you some examples.</p>
</details>

**Ilya:** 人工神经元的想法直接受到大脑的启发，这是一个伟大的想法。为什么？因为你说大脑有所有这些不同的器官，它有褶皱，但褶皱可能不重要。我们为什么认为神经元重要？因为它们数量众多。这感觉是对的，所以你想要神经元。你想要一些局部的学习规则来改变神经元之间的连接。大脑这样做感觉是可信的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea of the artificial neuron is directly inspired by the brain, and it's a great idea. Why? Because you say the brain has all these different organs, it has the folds, but the folds probably don't matter. Why do we think that the neurons matter? Because there are many of them. It kind of feels right, so you want the neuron. You want some local learning rule that will change the connections between the neurons. It feels plausible that the brain does it.</p>
</details>

**Ilya:** 分布式表示的想法。大脑对经验做出反应，因此我们的神经网络应该从经验中学习。大脑从经验中学习，神经网络就应该从经验中学习。你有点像在问自己，某件事是根本性的还是非根本性的？事情应该是什么样的。我认为这在很大程度上指导了我，从多个角度思考，寻找近乎美的东西，美和简洁。丑陋，没有丑陋的余地。是美、简洁、优雅，以及来自大脑的正确灵感。所有这些东西需要同时存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea of the distributed representation. The idea that the brain responds to experience therefore our neural net should learn from experience. The brain learns from experience, the neural net should learn from experience. You kind of ask yourself, is something fundamental or not fundamental? How things should be. I think that's been guiding me a fair bit, thinking from multiple angles and looking for almost beauty, beauty and simplicity. Ugliness, there's no room for ugliness. It's beauty, simplicity, elegance, correct inspiration from the brain. All of those things need to be present at the same time.</p>
</details>

**Ilya:** 它们越是同时存在，你就越能对一个自上而下的信念有信心。自上而下的信念是在实验与你相悖时支撑你的东西。因为如果你总是相信数据，嗯，有时你可能在做正确的事情，但有一个 bug。但你不知道有 bug。你怎么能判断有 bug？你怎么知道你应该继续调试，还是得出结论这是错误的方向？这就是自上而下的信念。你可以说事情必须是这样的。像这样的东西必须能行，因此我们必须继续前进。这就是自上而下的信念，它基于这种多方面的美和来自大脑的灵感。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The more they are present, the more confident you can be in a top-down belief. The top-down belief is the thing that sustains you when the experiments contradict you. Because if you trust the data all the time, well sometimes you can be doing the correct thing but there's a bug. But you don't know that there is a bug. How can you tell that there is a bug? How do you know if you should keep debugging or you conclude it's the wrong direction? It's the top-down. You can say things have to be this way. Something like this has to work, therefore we’ve got to keep going. That's the top-down, and it's based on this multifaceted beauty and inspiration by the brain.</p>
</details>

**Dwarkesh:** 好的，我们就到这里。非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alright, we'll leave it there. Thank you so much.</p>
</details>

**Ilya:** Ilya，非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ilya, thank you so much.</p>
</details>

**Dwarkesh:** 好的。感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alright. Appreciate it.</p>
</details>

**Ilya:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was great.</p>
</details>

**Dwarkesh:** 是的，我很享受。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I enjoyed it.</p>
</details>

**Ilya:** 是的，我也是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, me too.</p>
</details>