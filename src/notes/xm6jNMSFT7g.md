---
area: society-systems
category: technology
companies_orgs:
- Anthropic
- Norges Bank Investment Management
- Amazon
- Google
- Apple
- OpenAI
- Nvidia
- Griffin Biosciences
- DeepMind
- Meta
- Mistral
date: '2024-06-26'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Dario Amodei
- Bill Gates
products_models:
- Claude
- Claude 3
- Opus
- Sonet
- Haiku
- GPT-2
- GPT-3
- AlphaGo
- AlphaGo Zero
project:
- ai-impact-analysis
- geopolitics-watch
series: ''
source: https://www.youtube.com/watch?v=xm6jNMSFT7g
speaker: Norges Bank Investment Management
status: evergreen
summary: Anthropic 公司联合创始人兼 CEO Dario Amodei 深入探讨了人工智能的最新突破，特别是模型规模的持续扩大和“可解释性”研究的重要性。他分享了
  Anthropic 的 Claude 模型的设计理念，并展望了未来几年可能出现的、能力超越人类的 AI。Amodei 重点阐述了公司的核心使命——引领一场关于
  AI 安全和伦理的“良性竞争”（race to the top），并详细解释了其“负责任扩展政策”如何应对滥用和自主行为等灾难性风险。他还讨论了 AI 对地缘政治、经济生产力以及社会平等的深远影响。
tags:
- ai-safety
- model
- risk
- scaling-hypothesis
- society
title: Anthropic CEO Dario Amodei：论AI的前沿、安全竞赛与社会未来
---

### AI 的最新突破：规模化与可解释性

人工智能的规模化趋势仍在继续。未来一年，我们将看到更大、更强的模型，能够处理更复杂的任务。事实上，到这个播客播出时，Anthropic 将会发布一款新模型，它很可能会成为世界上最智能、最强大的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The scaling trends of AI are continuing. So I think we're going to see over the next year, you know, much bigger and more powerful models that are able to do greater tasks. In fact, by the time this podcast airs, a new model will be out from Anthropic that will probably be the most intelligent and powerful model in the world.</p>
</details>

但我个人特别兴奋的一个领域，是我们正在同步发展的模型**可解释性**（Interpretability of models: 指理解和剖析AI模型内部工作机制，弄清其为何做出特定决策的能力）。这项研究旨在深入观察我们的 AI 模型内部，理解它们做出决策的原因。在过去几年里，这个领域主要停留在研究层面，现在才刚刚开始有实际应用。这是我非常期待的一个领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one area I'm particularly excited about that we're developing in parallel with that is interpretability of models—the ability to see inside our AI models and see why they make the decisions they make. That area has been mainly a research area for the last few years, and it's just at the beginning of starting to have practical applications. So that's one area I'm very excited about.</p>
</details>

### 理解 AI 决策的“黑箱”为何至关重要

如果你观察当今 AI 模型的行为，你常常无法理解它为什么会这么做。例如，在金融行业，假设你希望一个 AI 模型通过训练历史数据来预测未来。这里存在一个问题：如果模型是在过去的数据上训练的，它可能只是“记住”了结果，因为它相当于已经“知道”了未来。可解释性技术或许能帮助我们区分：模型是在推导答案，还是在记忆答案？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you look at what AI models do today, often you won't understand why an AI model does what it does. Consider your industry, let's say you want an AI model to be trained on some data to be able to predict what happened with a particular set of financial data. One problem you have with training a model to work on that is that if you train it on data in the past, the model might have memorized it because it was trained on it. It basically knows what happens; it knows the future in that case. Interpretability might allow you to tell the difference: is the model deducing the answer to the question, or is it memorizing the answer to the question?</p>
</details>

同样，如果一个模型表现出对特定群体的偏见，我们能否审视其推理过程，判断它是否真的被偏见所驱动？此外，许多法律法规也提出了要求，比如欧盟就有“解释权”的规定。因此，可解释性让我们能够洞察模型内部，理解它们言行的原因，甚至进行干预和改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Similarly, if a model acts in a way that, say, shows prejudice against a particular group or appears to do so, can we look at the reasoning of the model? Is it really being driven by prejudice? There are also a number of legal requirements, right? In the EU, there's a right to explanation. And so interpretability, being able to see inside the model, could help us to understand why the model does and says the things that they do and say, and even to intervene in them and change what they do and say.</p>
</details>

我不会说我们已经“解决”了这个问题，应该说我们才刚刚开始。或许我们现在只理解了它们工作原理的 3%。我们目前能做的，是深入模型内部，发现与复杂概念相对应的“特征”。例如，某个特征可能代表犹豫、某种音乐流派、一种隐喻情境，或是对不同群体的偏见。我们已经找到了许多这样的特征，但这可能只是冰山一角。我们仍然不理解所有这些特征是如何相互作用，从而产生我们日常所见的模型行为的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I wouldn't say solve. I would say we're at the beginning. Maybe we now understand like 3% of how they work, really. We're at the level where we can look inside the model and we can find features inside it that correspond to very complex concepts. Like one feature might represent the concept of hesitating, a particular genre of music, a particular type of metaphorical situation that a character could be in, or the idea of prejudice for or against various groups. So we have all of these features, but we think we've only found a small fraction of what there is. And what we still don't understand is we don't understand how all of these things interact to give us the behaviors we see in models every day.</p>
</details>

这有点像大脑。我们可以做脑部扫描，对人脑有一些了解，但我们没有一份详细的说明书，无法确切地解释某人为什么会做出某个具体的行为。那么，我们能完全理解它们的工作原理吗？我不敢说到最后一个细节，但我认为进展很快，我对此持乐观态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, it's a little like the brain, right? We can do brain scans, we can say a little about the human brain, but we don't have a spec sheet for it. We can't go and say, "Well, this is why that person did exactly what they did." So will we ever understand fully how they work? I don't know about fully down to the last detail, but I think progress is happening fast and I'm optimistic about getting there.</p>
</details>

目前最大的挑战之一是，我们对模型理解的进步速度，能否跟上模型复杂性的增长速度。这个领域发展得太快了，包括我们自己的努力也在推动这种发展。我们必须确保我们的理解能力与我们创造强大模型的能力同步前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is a great question, and that is the thing contending with. So we are putting a lot of resources behind interpretability of language models to try and keep pace with the rate at which the complexity of the models is increasing. I think this is one of the biggest challenges in the field. The field is moving so fast, including by our own efforts, that we want to make sure that our understanding keeps pace with our abilities, our capabilities to produce powerful models.</p>
</details>

### Anthropic 的 Claude 模型：温暖、人性化与前沿性能

我们最近发布了一系列 Claude 3 模型，包括 Opus、Sonet 和 Haiku。它们在性能、智能、速度和成本之间做了不同的权衡。Opus 在发布时是全球综合性能最好的模型。我认为它特别出色的一个原因在于，我们投入了大量工程努力来塑造它的“性格”。人们普遍觉得 Claude 模型更温暖、更人性化，与它们互动更愉快，而其他一些模型听起来则更像机器人，缺乏灵感。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To give some context, we recently released a set of Claude 3 models. They're called Opus, Sonet, and Haiku. They're different tradeoffs between power and intelligence, and speed and low cost while still being intelligent. At the time that Opus was released, it was actually the best all-around model in the world. But I think one thing that particularly made it good is that we put a lot of engineering into its character. People have generally found the Claude models are warmer, more human; they enjoy interacting with them more. Some of the other models sound more robotic, more uninspired.</p>
</details>

我们正在快速创新。正如我所说，到这个播客发布时，我们很可能会推出至少一部分新一代模型。目前，模型在速度、低成本和质量之间存在一个权衡曲线。新一代模型将把这条“前沿”曲线向外推动。届时你会发现，过去需要最强大模型才能完成的任务，现在用一些中低端、但更快、更便宜、甚至能力更强的模型就能做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're continuing to innovate quickly, and as I said, by the time this podcast comes out, we'll probably have at least part of a new generation of models out. Right now, there's a trade-off between speed of model, speed and low cost of models, and quality. So you can imagine that as a trade-off curve, right, a frontier. There's going to be a new generation of models that pushes that frontier outward. And so you're going to see that things that you needed the most powerful model to be able to do, you'll be able to do with some of the mid-tier or low-tier models that are faster, cheaper, and even more capable than the past generation.</p>
</details>

新模型将在编程、数学和推理等方面表现更佳。我最喜欢的应用领域之一是生物学和医学，这是我最期待新模型能发挥作用的领域之一。今天的模型在许多领域的知识水平就像大学低年级学生或实习生。我认为我们正在将这个界限推向高年级本科生甚至研究生水平。当我们考虑将模型用于药物研发，或者在金融行业用于投资决策甚至交易时，我认为模型的复杂程度将会大幅提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're going to see models that are better at things like code, math, better at reasoning. One of my favorite is biology and medicine; that's one of the sets of applications I'm most excited about for the new models. The models we have today, they're kind of like early undergrads in their knowledge of many things, or like interns. And I think we're starting to push that boundary towards advanced undergrads or even graduate-level knowledge. And so when we think of use of models for drug development or, in your own industry, use of the models for thinking about investing or even trading, I think the models are just going to get a good deal more sophisticated at those tasks.</p>
</details>

### 企业级应用与 Anthropic 的长期目标

Anthropic 更多地将自己定位为企业服务提供商，而非面向消费者。我们正在思考如何将 AI 融入工作场景。今天的聊天机器人，如果用在企业环境中，就像是从街上随便找来一个非常聪明但对你公司一无所知的人，然后向他征求建议。我真正想要的，是一个更像在你的公司里积累了多年知识的 AI 模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anthropic thinks of itself more as providing services to enterprises than it does on the consumer side. And so we're thinking a lot about how to integrate AI in work settings. Today's chatbots, if I use them in an enterprise setting, it's like if I took some random person on the street who was very smart but who knew nothing about your company, and I brought them in and I asked them for advice. What I'd really like is an AI model that acts more like someone that's been trained with knowledge of your company for many years.</p>
</details>

因此，我们正在努力将我们的 AI 模型连接到企业的知识库，让它们能够引用工作资料，使用内部工具，并真正作为员工的虚拟助手融入企业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're working on connecting our AI models to knowledge databases, having them cite work, having them be able to use internal enterprise tools, and really integrate with the enterprise as a virtual assistant to an employee. So that's one way I think about really driving the integration.</p>
</details>

我们是一家**公益性公司**（Public Benefit Corporation: 一种营利性公司形式，其章程要求在为股东创造利润的同时，也要为社会和环境创造公共利益），我们的长期目标是确保这一切（AI发展）进展顺利。我们真正想做的，是创造一种我们称之为“良性竞争”（race to the top）的局面。所谓“恶性竞争”（race to the bottom）是众所周知的，即在激烈的市场竞争中，每个人都为了削减成本而偷工减料。我们认为可以产生相反的效果：如果你能制定更高的标准，通过创新使技术更符合道德规范，那么其他人就会效仿。他们要么受到启发，要么被自己的员工或公众舆论“逼迫”跟进，最终法律也会朝着这个方向发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're a public benefit corporation, and I think our long-term goal is to make sure all of this goes well. What we're really trying to do is create what we call a "race to the top." So, "race to the bottom" is this well-known thing where everyone fights to cut corners because the market competition is so intense. We think that there's a way to have the reverse effect, which is that if you're able to produce higher standards, innovate in ways that make the technology more ethical, then others will follow suit. They'll either be inspired by it or they'll be kind of bullied into it by their own employees or public sentiment, or ultimately the law will go in that direction.</p>
</details>

我们希望为如何正确发展 AI 提供一个范例，并带动整个行业与我们同行。这正是我们进行可解释性研究、安全研究以及思考如何负责任地扩展规模的动力所在。我们有一项名为“负责任扩展政策”的方针。所以，我们的总体目标是努力帮助整个行业变得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're hoping to kind of provide an example of how to do AI right and pull the rest of the industry along with us. That's a lot of the work behind our interpretability work, behind our safety work, behind how we think about responsible scaling. We have something called a responsible scaling policy. So I think our overall goal is to try and help the whole industry be better.</p>
</details>

### 通往通用人工智能（AGI）之路

十年前，当这一切还像是科幻小说时，我经常谈论**AGI**（Artificial General Intelligence: 指拥有与人类相当或超越人类智慧的、能够理解、学习和应用其智能来解决任何问题的AI）。现在我的看法不同了，我不再认为它是一个特定的时间点。我认为我们正处在一个平滑的指数曲线上，模型随着时间的推移变得越来越好。不会有一个时刻让你觉得“哦，模型之前不具备通用智能，现在有了”。我认为这就像一个孩子学习和成长的过程，它们变得越来越好，越来越聪明，知识越来越渊博。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Back in 10 years ago when all of this was kind of science fiction, I used to talk about AGI a lot. I now have a different perspective where I don't think of it as one point in time. I just think we're on this smooth exponential; the models are getting better and better over time. There's no one point where it's like, "Oh, the models weren't generally intelligent, and now they are." I just think like a human child learning and developing, they're getting better and better, smarter and smarter, more and more knowledgeable, and I don't think there will be any single point of note.</p>
</details>

但我确实认为，如果我们继续增加投入规模——比如从现在训练一个模型的约 1 亿美元，增加到 10 亿、100 亿甚至 1000 亿美元，我认为这在 2025、2026 或 2027 年就可能发生——并且算法和芯片的改进也保持同步，那么到那时，我们很有可能获得在大多数事情上比大多数人都强的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I do think that if we continue to increase the scale, the amount of funding for the models, if it goes to say 10 billion... Right now a model would cost what, 100 million? Uh, right now 100 million. There are models in training today that are more like a billion. I think if we go to 10 or 100 billion, and I think that will happen in 2025, 2026, maybe 2027, and the algorithmic improvements continue apace and the chip improvements continue apace, then I think there is in my mind a good chance that by that time we'll be able to get models that are better than most humans at most things.</p>
</details>

### 灾难性风险及其应对之策

我将灾难性风险分为两类。第一类是模型的“滥用”，可能涉及生物、网络安全或大规模影响选举的操作等领域，这些行为会对社会造成真正的破坏。第二类是模型的“自主非预期行为”。今天，这可能只是模型做出一些意想不到的事情，但随着模型在现实世界中扮演的角色越来越重要，我们必须担心它们会以我们无法预料的方式行事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would put it in two categories. One is misuse of the models, which could include things in the realm of biology or cyber or kind of election operations at scale, things that are really disruptive to society. That misuse would be one bucket. And then the other bucket would be autonomous unintended behavior of the model. So, you know, today it might be just the model doing something unexpected, but increasingly as models act in the world, we have to worry about them behaving in ways that you wouldn't expect.</p>
</details>

早在 2016 年，当我在谷歌工作时，我就和一些同事（其中一些现在是 Anthropic 的联合创始人）写了一篇名为《AI 安全中的具体问题》的论文。这篇论文提出了一个担忧：我们拥有这些强大的 AI 模型（神经网络），但它们本质上是统计系统，这将带来一系列关于可预测性和不确定性的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we go all the way back to 2016, before I even worked at OpenAI, when I was at Google, I wrote a paper with some colleagues, some of whom are now Anthropic co-founders, "Concrete Problems in AI Safety." And concrete problems in AI safety laid out this concern that we have these powerful AI models, neural nets, but they're fundamentally statistical systems, and so that's going to create all these problems about predictability and uncertainty.</p>
</details>

如果将这一点与“规模化假说”（scaling hypothesis）结合起来——我在研究 GPT-2 和 GPT-3 时真正相信了这一点——这两者共同告诉我：我们将拥有非常强大的东西，但控制它绝非易事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you combine that with the scaling hypothesis—and I really came to believe in the scaling hypothesis as I worked on GPT-2 and GPT-3—those two things together told me, okay, we're going to have something powerful and it's not going to be trivial to control it. And so we put those two things together and that makes me think, oh, this is an important problem that we have to solve.</p>
</details>

在 Anthropic，我们应对这些风险的主要工具之一是我们的**负责任扩展政策**（Responsible Scaling Policy, RSP）。其运作方式是，每当我们开发出一个代表重大飞跃的新模型，我们都会对其进行滥用风险和自主复制风险的评估。例如，在滥用风险方面，我们与国家安全领域的专家合作，比如一家名为 Griffin Biosciences 的公司，他们为美国政府提供生物安全方面的工作。他们会测试模型是否掌握了互联网上没有的、但一旦知晓就会构成威胁的知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In Anthropic, one of the biggest tools for this is our RSP, our responsible scaling policy. And so the way that works is every time we have a new model that represents a significant leap, we measure it for both the misuse risks and the autonomous self-replication risks. For the misuse risks, we've in fact worked with folks in the national security community. So for example, we've worked with this company called Griffin Biosciences that contracts with the US government that does biosecurity work, and they're the experts on responding to biological risk. And so they say, what is the stuff that's not on the internet that if the model knew it would be concerning? And they run their tests.</p>
</details>

到目前为止，每次测试的结果都是模型在该任务上的表现比以前更好了，但尚未达到构成严重威胁的水平。对于自主行为风险，我们测试模型训练自己模型、获取云算力账户并进行操作、注册账户并进行金融交易等能力。情况与滥用风险类似：它们在单个任务上的能力越来越强，趋势很明显，但我们还没到那个临界点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And every time so far, they've said, well, it's better at the task than it was before, but it's not yet at the level where it's a serious concern. For the autonomous, we test the models there for things like ability to train their own models, ability to provision cloud compute accounts and take actions on those accounts, ability to sign up for accounts and engage in financial transactions. It's kind of the same story as with misuse: they're getting better and better at individual pieces of the task, there's a clear trend towards ability to do that, but we're not there yet.</p>
</details>

### AI 监管：时机与挑战

我所描述的“负责任扩展政策”（RSP）或许是一个开端，它代表了自愿的自我监管。去年九月我们实施了 RSP，此后，像谷歌、OpenAI 等其他公司也推出了类似的框架。我希望这个过程能继续下去：公司先尝试不同的自愿性自我监管方式，然后在公众压力和实践探索中形成某种共识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The responsible scaling policy that I was describing is maybe the beginning of a process, right? That represents voluntary self-regulation. Last September, we put in place our RSP. Since then, other companies like Google, OpenAI have put in place similar frameworks. I would like it if that process continues, right, where we have some time for companies to experiment with different ways of voluntarily self-regulating, some kind of consensus emerges from some mixture of public pressure, experimentation with what is unnecessary versus what is really needed.</p>
</details>

一旦有了行业最佳实践和共识，立法的角色可能就是介入并说：“看，这有 80% 的公司已经在做了，这是确保安全的共识。立法的任务就是强制那剩下的 20% 也遵守。” 我不认为监管擅长凭空创造出一堆人们应该遵守的新概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I would imagine the real way for things to go is once there's some consensus, once there's industry best practices, probably the role for legislation is to look in and say, "Hey, there's this thing that 80% of the companies are already doing, that's a consensus for how to make it safe. The job of legislation is just to enforce those 20% who aren't doing it, force that companies are telling the truth about what they're doing." I don't think regulation is good at coming up with a bunch of new concepts that people should follow.</p>
</details>

我对过早监管的担忧是，我们还处于这个过程的早期阶段。以我们自己的 RSP 为例，我们在实践中发现了许多最初没有预料到的情况。例如，你可以对模型进行各种 A/B 测试，这些测试甚至对安全性研究也很有启发，但我们最初的 RSP 并未明确规定何时可以进行这些测试。因此，我们正在更新 RSP 来处理这些新问题。在早期，这种灵活性至关重要。如果你的 RSP 是由第三方制定的，你无法灵活修改，那么它可能会变成一个既不能有效防范风险又非常繁琐的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I have a concern, though, I think it's that we're very early in the process. My only question would be, are we too early in that process to enact regulation? Maybe regulation should be the last step of a series of steps. If I look at what we've done with RSP, you know, we wrote an RSP in September, and since then we've deployed one model, we're soon going to deploy another. You see so many things that, not that it was too strict or not strict enough, but you just didn't anticipate them in the RSP. And so we're updating our RSP to say, "Hey, how should we handle this issue we've never even thought of?" And so I think in the early days, that flexibility is easy. If you don't have that flexibility, if your RSP was written by a third party and you didn't have the ability to change it, I think it could create a version of the RSP that doesn't protect against the risks but also is very onerous.</p>
</details>

### AI 与地缘政治：民主世界的优势与挑战

从国际角度看，问题就完全不同了。这不再是监管问题，而是如何应对一场国际性的“逐底竞争”。一方面，我们不希望鲁莽地、尽可能快地发展技术，尤其是在武器方面。另一方面，作为美国公民，身处挪威这个另一个民主国家，我非常担心专制政权在这一技术领域取得领先。那将非常非常危险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From an international point of view, I mean, I think that's a completely different question. That's less about regulation and more about there's an international race to the bottom, and how do you handle that race to the bottom? On one hand, we don't want to just recklessly build as fast as we can, particularly on the weapon side. On the other side, as a citizen of the US, here I am in Norway, another democracy, I'm very worried about if autocratic regimes were to lead in this technology. I think that's very, very dangerous.</p>
</details>

目前，由于对俄罗斯和中国等国实施了芯片和设备运输限制，如果美国政府策略得当，这些国家可能会被甩开大约两到三年的差距。但这并没有给我们留下太多余地。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say that with some of the restrictions that have been put in place on, for example, shipment of chips and equipment to Russia and China, I think if the US government plays its cards right, then those countries could be kept behind, I don't know, maybe two or three years. That doesn't give us much margin.</p>
</details>

我的观点是，如果我们达到了 AI 系统在广泛任务上超越最优秀专业人士的水平，那么军事和情报等任务也将在此之列。我们不应天真，每个人都会试图部署这些技术。我们应该在可能的情况下寻求合作与克制，但在许多情况下这并不可行。当无法合作时，我站在民主国家和自由世界一边。我希望未来是民主的，民主国家能在世界舞台上保持领先和优势。强大的 AI 加上专制政体，这个想法让我不寒而栗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My view is that again, if we get to the level of AI systems that are better than the best professionals at a wide range of tasks, then tasks like military and intelligence are going to be among those tasks. And we shouldn't be naive, everyone is going to try to deploy those. I think we should try to create cooperation and restraints where we can, but that in many cases that won't be possible. And when it isn't possible, I'm on the side of democracies in the Free World. I want to make sure that the future is democratic, that as much as possible of the world is democratic, and that democracies have a lead and an advantage on the world stage. The idea of powerful AI plus autocracies terrifies me and I don't want it to happen.</p>
</details>

### AI 的经济影响：生产力、通货膨胀与财富分配

如果 AI 能达到研究生或顶尖专业人士的水平，想象一下生物学和药物发现领域。一个模型能像诺贝尔奖得主或大型制药公司研发主管一样强大。如果我们拥有一百万个这样的 AI 系统副本，它们在各自领域拥有同等的知识和创造力，那么科学发现的速度可能会急剧加快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we get to the point where the models are graduate level or strong professional level, think of biology and drug discovery. Think of a model that is as strong as a Nobel prizewinning scientist or the head of drug discovery at a major pharmaceutical company. If we had a million copies of an AI system that are as knowledgeable and as creative about the field as all those scientists that invented those things, then I think the rate of those discoveries could really proliferate and some of our really longstanding diseases could be addressed or even cured.</p>
</details>

在生产力方面，可以想象为每个人配备一个虚拟助手，就像一个“幕僚长”。如果每个人都有这样的助手来处理日常事务，生产力会得到多大提升？我不是经济学家，无法给出具体百分比，但 AI 公司的收入似乎每年增长约 10 倍。你可以想象，在两到三年内达到数千亿美元，甚至达到万亿级别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In terms of productivity in society, I think of virtual assistants, like a chief of staff for everyone. Could everyone have a chief of staff who helps them deal with everything that lands on their desk? If everybody had that kind of thing, what would you do? Could you put a number on productivity gain? I'm not an economist, I couldn't tell you X percent. But if we look at the exponential, revenues for AI companies, it seems like they've been growing roughly 10x a year. And so you could imagine getting to the hundreds of billions in two to three years and getting even to the trillions per year.</p>
</details>

关于通货膨胀，用我有限的经济学知识来看，如果生产力实现大幅度的真实增长，那将倾向于通缩而非通胀。你将能用更少的资源做更多的事，货币的购买力会更强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we look at inflation, using my limited economic reasoning, I think if we had very large real productivity gains, that would tend to be deflationary rather than inflationary. You would be able to do more with less; the dollar would go further. So directionally at least, that suggests disinflation.</p>
</details>

然而，一个令人担忧的趋势是，AI 技术的早期应用往往集中在硅谷的技术前沿公司之间，形成一个闭环生态系统，主要服务于受教育程度最高的人群。我们如何打破这个循环？我认为生物学和健康领域的创新可以帮助我们，因为健康创新如果分配得当，可以惠及每一个人。教育和改善日常政府服务也是重要的突破口。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I do see something related to it that's a little worrying to me and that we're trying to counter, which is that if you look at the natural applications of the technology, the most eager customers that come to us, often the most eager customers are other kind of technologically forward Silicon Valley companies. And so I think there's this danger of what you might call a kind of closed loop. And it's all being used by the most highly educated people. And so how do we break out of that loop? One of the reasons I talk about biology and health is that I think biology and health can be used to help us to break out of that loop. Innovations in health, assuming we distribute them well, can apply to everyone. I think things like education can help here. Another area that I'm very excited about is use of AI for provision of everyday government services.</p>
</details>

十年后，贫富差距会扩大还是缩小？我不知道会发生什么，但我知道，如果我们不对此进行极其深思熟虑和刻意的规划，那么是的，它会扩大差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 10 years time, will the gap between rich and poor be bigger or smaller? I don't know what I think will happen. I know that if we are not extremely thoughtful about this, if we're not extremely deliberate about it, then yes, it will increase the gap.</p>
</details>

### 当前的瓶颈：数据与合成数据的兴起

我们面临的最大瓶颈是数据。但是，我们和其他公司都在努力研究**合成数据**（Synthetic Data: 指由计算机程序人工生成的数据，而非通过直接的现实世界测量获得的数据。在AI领域，它可以用来扩充或替代真实训练数据）。我认为这个瓶颈即将被突破。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My big bottleneck we're dealing with is data. But as I've said elsewhere, we and other companies are working very hard on synthetic data, and I think that bottleneck is going to be lifted.</p>
</details>

一个很好的例子是七年前 DeepMind 的 AlphaGo 模型。它的一个版本 AlphaGo Zero 没有使用任何人类棋谱进行训练。它所做的就是让模型自己和自己下围棋，下了很长时间。仅凭围棋的规则和模型间的自我博弈，它们就达到了超越任何人类棋手的水平。你可以认为这些模型是用其他模型在逻辑规则的帮助下创造的合成数据训练出来的。我认为类似的方法也可以用于语言模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The example I like to give is seven years ago, DeepMind, as part of Google, produced the AlphaGo model, which was able to beat the world champion in Go. And there was a version of it called AlphaGo Zero that was not trained on any humans playing Go. All it did was the model played Go against itself for a long time. And so basically, with just the little tiny rules of Go and the models playing against each other, they were able to get better and better to the level where they were better than any human. And so you can think of those models as having been trained on synthetic data that are created by other models with the help of this kind of logical structure of the rules of Go. And so I think there are things analogous to that that can be done for language models.</p>
</details>

### 对年轻人的建议

去熟悉这些新的人工智能技术。我不会给出“我知道哪些工作会热门，哪些不会”之类的陈词滥调。我认为我们并不知道，而且 AI 可能会触及每一个领域。但可以肯定的是，人类在运用这些技术、与它们协同工作方面将始终扮演着角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gain familiarity with these new AI technologies. I'm not going to offer some kind of bromide about, "I know exactly which jobs are going to be big and which aren't." I think we don't know that, and also we don't know that AI won't touch every area. But I think it's safe to say that there will always be a role for humans in kind of using these technologies and working alongside them.</p>
</details>

另一条建议，它现在已经很重要，未来会变得更加重要，那就是对信息的怀疑精神。随着 AI 生成越来越多的信息和内容，辨别这些信息的能力将变得越来越重要和必要。我希望我们能有 AI 系统来帮助我们筛选一切，理解世界，从而减少我们受攻击的脆弱性。但归根结底，这必须源于你自己。你必须有基本的好奇心和辨别力。培养这些能力至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing I would say, and this is already important advice, but I think it's going to get really more important, is just the faculties about skepticism about information. As AI generates more and more information and content, being discerning about that information is going to become more and more important and more and more necessary. I hope that we'll have AI systems that help us sift through everything, that help us understand the world so that we're kind of less vulnerable to these kind of attacks. But at the end of the day, it has to come from you. You have to have some basic desire, some basic curiosity, some basic discernment, and so I think developing those is important.</p>
</details>