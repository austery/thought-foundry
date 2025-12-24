---
area: society-systems
category: psychology
companies_orgs:
- NYU
date: '2025-11-13'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Daniel
products_models:
- ChatGPT
- Llama
project:
- ai-impact-analysis
- personal-growth-lab
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=3SliW74opyY
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: Slingshot AI的首席执行官Daniel探讨了如何构建心理学基础模型，以应对日益严重的心理健康危机和专业治疗师短缺。他详细介绍了其产品Ash的三阶段训练方法：预训练、对齐和强化学习，强调了高质量专业数据、行为校准以及通过用户反馈持续优化的重要性。Daniel还分享了与纽约大学合作的研究成果，表明Ash能有效促进用户建立社交连接，实现积极的行为改变，这与通用AI可能导致孤独感加剧的趋势形成鲜明对比。
tags:
- change
- llm
- mental-health-crisis
- model
- reinforcement-learning
title: AI赋能心理健康：预训练、对齐与强化学习（Slingshot AI CEO分享）
---

### 心理健康危机与AI的应对

很高兴来到这里。今天，我将谈谈如何为心理学构建一个**基础模型**（Foundation Model: 指在大量数据上预训练，可适应多种下游任务的AI模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, great to be here. Um, today I'm going to talk a bit about how to build a foundation model for psychology.</p>
</details>

首先简单介绍一下我自己，我是Daniel，一名机器学习工程师，也是Slingshot的联合创始人兼首席执行官。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, so just to introduce myself real quick, I'm Daniel. Um, I'm a machine learning engineer. I'm the co-founder and CEO at Slingshot.</p>
</details>

你可能知道现在存在**心理健康危机**（Mental Health Crisis: 指社会中普遍存在的心理健康问题及其对个人和社会的负面影响），但你可能不知道心理健康服务提供者严重短缺。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You probably know there's a mental health crisis. You might not know that there's a massive shortage of mental health providers.</p>
</details>

如果在美国均匀分布，每位治疗师大约需要服务1500名有需求的人，而在大多数地方情况更糟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's about 1,500 people in need for every therapist out there if the US were evenly distributed. In most places, it's a lot worse.</p>
</details>

这个问题已经存在了大约60年。约翰·肯尼迪（JFK）在1963年就曾谈到心理健康服务提供者的严重短缺，但情况并未好转。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has been a problem for about 60 years. Uh JFK gave a talk in 1963 about the massive shortage mental health providers. It hasn't gotten any better.</p>
</details>

然而，世界其他地方似乎很快就达成共识，AI的首要用例现在是治疗，而且大部分是由**ChatGPT**（一种大型语言模型）完成的，但它在这方面表现并不出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also, the rest of the world seems to agree uh very quickly. AI AI's number one use case is now therapy. And that's therapy being done by chat GBT for the most part. That's not very good at it.</p>
</details>

因此，我们尝试采取一种非常不同的方法，以实际帮助人们解决心理健康问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, uh, we've tried to take a very different approach to try to actually help people with their mental health.</p>
</details>

### Slingshot AI的独特方法：Ash的构建

通常，我会在此时演示我们的产品。所以，我会简单介绍一下**Ash**（Slingshot AI开发的心理健康AI产品）。今天，我将不展示Ash的外观，因为大家可以亲自尝试，而是会向大家展示我们是如何构建Ash的，让大家一窥其内部运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I usually at this point would jump in and demo our product. So, I'll tell you a little bit about Ash. I'm going to jump in today and instead of showing you how Ash looks because you all can try it yourself. I'm going to show you a little bit about how we build Ash and give you a peak behind the hood.</p>
</details>

我们基本上通过三个阶段来训练我们的模型。这与你可能正在使用的任何语言模型都非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We basically train our model in three stages. Uh, it's pretty comparable to, you know, any language model you'd be working on.</p>
</details>

我们做三件事：**预训练**（Pre-training: 在大量数据上进行初步训练，使模型学习通用知识和模式）、**对齐**（Alignment: 调整模型行为，使其符合特定价值观、目标或用户偏好）和**强化学习**（Reinforcement Learning: 通过与环境互动，根据奖励信号优化决策策略的机器学习方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we do three things. is we do pre-training, alignment, and reinforcement learning.</p>
</details>

我们已经实现了**垂直整合**（Vertically Integrated: 指公司内部涵盖了产品或服务从生产到分销的多个环节），我们非常关注训练这样一个模型所需的每一个细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we've fully vertically integrated. We really obsess over every detail of what it takes to train a model like this.</p>
</details>

这意味着我们关注体验的每一个要素：例如，在一个心理健康语境中，AI应该谈论什么？在语音模式下，AI应该暂停多久？让用户停下来思考多久是合适的？什么时候应该打断他们？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that means that we focus on every element of the experience. You know, what does an AI talk about in the context of mental health? How long should an AI pause when it's when you're talking in voice mode? How long would be appropriate to let the person stop and think? When do you interrupt them?</p>
</details>

但大部分都归结为从数据中学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for the most part, it all comes down to learning from data.</p>
</details>

上一代心理健康公司通常有一种哲学、一种方法、一种理论，他们认为，如果每个人都了解我所了解的，都像我一样思考，心理健康问题就能解决。这通常是**认知行为疗法**（CBT: Cognitive Behavioral Therapy: 一种心理治疗方法，通过改变思维模式和行为来解决情绪和行为问题）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the last generation of mental health companies generally had like a philosophy, an approach, a theory and thought, hey, if everyone just knew what I knew, thought the way that I thought mental health would be solved. It was usually CBT.</p>
</details>

也许你有一个领导者，你会想：“让我们把他的书中的思想灌输到人们的脑海中。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you have like a leader and you're like, let's take his book and let's try to put it into people's minds.</p>
</details>

我们采取了一种非常不同的方法。我们从各种治疗模式中学习，包括**CBT**、**DBT**（Dialectical Behavior Therapy: 辩证行为疗法，一种认知行为疗法的变体，侧重于情绪调节和人际关系）、**ACT**（Acceptance and Commitment Therapy: 接受与承诺疗法，一种行为疗法，强调接受痛苦和致力于有价值的行动）、**IFS**（Internal Family Systems: 内在家庭系统疗法，一种整合性心理治疗模型）、**心理动力学疗法**（Psychodynamic Therapy: 基于精神分析理论，探索无意识冲突和早期经验对当前行为影响的治疗）、**动机式访谈**（Motivational Interviewing: 一种以人为本的指导性沟通方式，旨在激发和增强内在动机以改变行为）和**躯体疗法**（Somatic Therapy: 一种身心疗法，通过关注身体感觉来处理创伤和情绪问题）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we take a very different approach. We learn from all kinds of modalities of therapy. CBT, DBT, ACT, IFS, psychonamic therapy, motivational interviewing, sematic therapy.</p>
</details>

我们从那些更适合情感导向、认知导向、开放式或指导性、精神性或世俗性体验的实践和人群中学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We learn from uh practices and people who are uh going to be a better fit for a more emotionally focused experience or more cognitively focused, more open-ended or more directed, more spiritual or more secular.</p>
</details>

我们将所有这些整合到一个模型中。然后，我们引入我们的**临床团队**（Clinical Team: 由心理健康专业人员组成的团队）。我们有一个全职的临床团队，负责对齐我们的模型，将其从人类行为方式转变为适合AI的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we put it all together into one model. And then we bring in our clinical team. So we have a full-time clinical team that works to align our model and that's to shift from the kind of things that humans do to what would be appropriate with AI.</p>
</details>

当我们刚开始时，我们认为人们与AI互动的方式会比实际情况更像人类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we first got started, we thought that the way people would interact with AI would be much more similar to humans than it is.</p>
</details>

我们曾梦想着AI通过**图灵测试**（Turing Test: 一种测试机器智能的方法，如果机器在对话中能让测试者误以为是人类，则认为其通过测试），我们想，如果我们能从足够多的数据中学习，大多数人通过Zoom进行治疗，如果我们也能做到同样的事情，那么我们显然也能提供治疗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we had this dream of the AI touring test and we're like, hey, if we could just learn from enough data, most people do therapy on Zoom. If we can do the same thing, you know, we can obviously do therapy.</p>
</details>

而我们看到的是，人们与AI互动的方式是，他们更快地敞开心扉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and what we've seen is the way that people interact with AI, they open up much more quickly for one thing.</p>
</details>

所以，我们经常会有这样的对话：有人开始说，“Ash，准备好了吗？”然后他们回答：“是的，我是同性恋，我从未告诉过任何人，我该怎么办？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we often have the conversations where someone starts with like, uh, you know, Ash's like, "Hey, ready to get started?" And you're like, "Yes, I'm gay." and I've never told anyone that what do I do?</p>
</details>

这非常不同。人们对AI有一种不被评判的期望。人们期望他们可以（敞开心扉）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's very different. People have this kind of like expectation of a lack of judgment. People expect that they can. Anyway,</p>
</details>

因此，在对齐阶段，我们必须进行调整。我们必须引入策略，引入**护栏机制**（Guardrails: 指为确保AI系统行为符合预期、安全和道德标准而设置的限制和规则）。我今天会给大家展示一些这方面的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we um at the alignment stage, we have to shift. We have to introduce policies. We introduce guardrails. And I'm going to give you a little taste of that today.</p>
</details>

最后，我们进行强化学习。大多数心理健康服务提供者没有机会学习什么方法有效，对吧？他们总是在想，我说了哪些神奇的话语产生了影响？它真的产生了影响吗？未来会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then finally, we do reinforcement learning. Most mental health providers don't get any opportunity to learn what works, right? They're always wondering what were those magic words that I said that had an impact? Did it have an impact? What's going to happen way later?</p>
</details>

我们有大量的信号可以从每次对话中学习。这些信号包括用户多久回复一次？他们是否开始哭泣？他们是否说“我以前从未和别人分享过这些”？“这是我第一次大声说出来。”他们是否说“我上周尝试了你说的那个方法，结果非常好”，或者“我上周尝试了你说的那个方法，结果糟透了，你真差劲。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we have a huge amount of signal that we can learn from every conversation. So that's signal like uh what did the person uh you know how long did the person take to respond? Did they start crying? Did they say I've never shared that with anyone else before? That was my first time saying that out loud. Did they say hey I tried that thing you said last week and it went super well or I tried that thing you said last week and it went horribly wrong and it was terrible and you suck.</p>
</details>

我们从所有这些信息中学习，这使我们能够通过**持续在线强化学习**（Continuous Online RL: 指AI系统在持续与环境互动中不断学习和优化其行为）进行学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We learn from all of this and it allows us to learn through continual online RL.</p>
</details>

我将给大家展示一些内部运作，而不是把所有时间都花在幻灯片上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to give you a little taste behind the hood and not spend all our time on slides.</p>
</details>

所以，让我来展示一下Ash是如何构建的，这实际上是我第一次分享这么多关于Ash构建方式的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so let me jump in and I'll show you a little bit about and this is actually I think the first time that I've shared much about how Ash is built.</p>
</details>

### 第一阶段：预训练——高质量数据的基石

这是对内部运作的一瞥。我们在训练Ash方面做了很多工作。我将带大家了解我们的一些主要工具和内部工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so here's a little peak behind the hood. Uh, we do a lot in terms of how we train Ash. I'm going to take you through I think some of our major tools and some of the major workflows that we use internally.</p>
</details>

首先，我提到我们在预训练数据上进行训练，我认为预训练数据最重要的就是拥有真正高质量的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the first thing is I mentioned that we train on uh on pre-training data and I think uh most important thing about pre-training data is just having really high quality data.</p>
</details>

所以，我们训练了大量数据，并非所有数据都是对话形式的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we train on a huge amount of data. Not all of it is conversational.</p>
</details>

我们通过与行为健康组织的合作获得这些数据，当然，这些数据都是经过伦理审批并获得同意的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we get this through partnerships with behavioral health organizations um that we obtain uh ethically with consent of course.</p>
</details>

我只是想给大家一点了解。我们做了相当多的预处理，正如你所看到的，通过分析对话来理解什么对AI有意义，什么没有，尤其使用了小型模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'm going to sh I mean you I just wanted to give a little taste. I was like looking through uh we do quite a bit of pre-processing as you can see to analyze the conversations to understand what makes sense for AI what doesn't using especially small models</p>
</details>

但我也认为这很吸引人，因为我们不一定意识到今天的AI在心理健康语境中有多糟糕，以及它能有多么出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but I think it's also fascinating because we don't really necessarily realize how bad AI today is in a mental health context and how awesome it could be</p>
</details>

所以，如果你看，你可以看到这些例子，我只是举了几个例子来让大家感受一下。这些实际上是我从数据集中随机抽取的最初两段对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if you just look you can see the kind of I'll just brought up a couple of examples to give that taste and these were actually literally the first two random uh conversations smart data set I pulled out um</p>
</details>

顺便说一句，这些都是匿名的，我们进行了重大修改，以确保我们无法将这些数据追溯到任何人类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">these are all anonymized by the way we make significant changes is to make sure that we have no way to connect this back to any humans.</p>
</details>

你可以看到，比如“你当时崩溃了吗？你是不是有点暴怒了？”然后当你冷静下来后，你会感到内疚和懊悔吗？你会崩溃吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you can see the like did you melt down at that point? You're flying into a rage sort of maybe. And then when you come down off of that, do you feel this guilt and remorse and everything? Do you melt down?</p>
</details>

那个人说：“我的意思是，我觉得自己像个垃圾。”恢复期是否和真正的愤怒一样糟糕？是的，我会说，你知道，就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The person says, I mean, I feel like a piece of garbage. Is the recovery just as bad as the actual rage? Yeah, I would say, you know, it's and you can see the person.</p>
</details>

如果你能在达到那个点之前找到触发点，你就会少很多麻烦，对吧？我们可以试着找出原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, if you could identify where you trip the circuit before you get to that point, you'd be in a lot less hot water, right? we could try to figure that out.</p>
</details>

在那段时间里，有没有什么事情让情况变得更糟？比如药物滥用或其他类似的问题，你不喜欢的工作等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is there anything going on during that time that was making it worse? Compounding issues like substance abuse or anything like that, bad job that you don't like or something like that.</p>
</details>

你注意到，这显然是一段深入的对话，这不是用户进行的第一次对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and what you notice is just like obviously this is deep into a conversation. Uh, that's not the first conversation this user's had.</p>
</details>

这些对话是与人类进行的，而不是与AI。让我们看另一个例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and these are again with uh humans, not with an AI. Let's jump into another. You can see</p>
</details>

我发现这些对话非常引人入胜，它们展现了心理健康背后丰富的内涵和魔力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I find these so fascinating to watch just these are this is kind of like the richness behind mental health and magic.</p>
</details>

你可以看到，我们希望它关乎你，而不是“有些人值得信任，我可以信任一些人”。你可以看到治疗师正在指导他们使用这些词语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, you can see um but we want to make it about you, not so not some people are trustworthy. I can trust some people. And you can see that the therapist is kind of coaching them on some of these words.</p>
</details>

治疗师说：“或者我可以选择信任谁。”是的，那样也可以。哪一个听起来更真实？“我可以信任一些人”还是“我可以选择信任谁”？“我可以选择信任谁。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know, and therapist says or I can choose who to trust. Yeah, that works too. Which one sounds more true? I can trust some people or I can choose who to trust. I can choose who to trust.</p>
</details>

好的，我要继续了，但我认为这有时非常重要，只是为了理解为什么预训练如此重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, all right. I'm gonna move on, but I think this sometimes is just really important. Um, just to see why pre-training is so important.</p>
</details>

实际上，我们喜欢谈论提示工程，但在某些用例中，存在一些大型语言模型预训练中没有的数据集，因为它们在互联网上不可用，也无法安全、合乎道德地收集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like realistically, we love to talk about prompt engineering, but there are these use cases where you have data sets that are just not present in the pre-training of large language models because they're not available on the internet because they're not able to be collected securely and ethically.</p>
</details>

我认为一旦你将这些数据放入模型中，你就会意识到通过预训练、通过从大量语料库中学习，而不是试图坚持一种哲学，你可以取得多大的成就。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think once you put that into a model, you realize how much more you can achieve through pre-training, through learning from, you know, a large corpus rather than trying to have one philosophy.</p>
</details>

### 第二阶段：对齐——塑造AI的治疗行为

好的，我要回到我们的工具了。那是关于预训练方面的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, so I'm going to get back into our tools. That was on the pre-training side.</p>
</details>

预训练之后，我们的模型有点有趣。它有很多能力，但没有任何特定的方向。它不知道在这种语境下什么是合适的，什么是不合适的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, post pre-training, our model is kind of funny. It has a lot of capabilities, but it doesn't have any particular direction that it goes in. It doesn't know what's appropriate in this context and what's not.</p>
</details>

所以，我将分享我们对齐模型众多流程中的一个。我们做的一件事是，我们有一个“行为”的概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I'm going to share one of many flows that we take towards aligning our model. But one thing that we do, I was just going to run through is we have this concept of behaviors.</p>
</details>

我们的行为是一种堆栈，我们用它来理解模型做的奇怪的事情和有趣的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our behaviors is kind of a stack that we use to understand uh weird things the model does, interesting things the model does.</p>
</details>

这是我们通过匿名数据进行在线监控的能力。当你注册应用程序时，你会看到我们有一个选择加入的选项，允许我们使用数据来改进模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, this is our ability to monitor online through anonymized data. When you sign up to the app, you'll see that we have an optin to allow us to use the data to improve the model.</p>
</details>

大约70%的用户选择加入。对于另外30%的用户，我们完全无法访问，也无能为力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh about 70% of our users opt in. Um for the other 30% we have absolutely no access and there's nothing we can do.</p>
</details>

对于选择加入的用户，我们存储的数据与用户完全分离，这就是我们可以分析的数据类型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the uh people who do opt in we store completely separate from the users and that's the kind of data we can analyze.</p>
</details>

所以，一个非常有趣的事情是，AI会告诉用户它不可能做到的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one really funny thing is um as telling the user that they did something an AI can't possibly do.</p>
</details>

我们查看数据以理解这一点的方式是，我们通过一些合成示例快速构建数据集，以训练一个非常小的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the way that we look through data to understand this is we build very quickly data sets especially from just a couple synthetic examples to train a really small model.</p>
</details>

所以你可以看到这些例子，比如这是Ash实际说过的话：“我正在谈论我的朋友，然后我记得另一次我和我的狗在公园里，我们看到了这个……”我不知道当时的语境是什么，但显然AI不可能做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see these examples of like this is something Ash actually said. So I was talking about my friend and then I remember this other time I was at the park with my dog and we saw this really I don't know what the context was but obviously an AI can't do that.</p>
</details>

所以我们能够通过搜索来识别一些案例。当然，我会给你讲一个我尝试学习滑雪板的故事。这发生在几年前。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're able to then like search through and hopefully and identify some cases. Sure I'll tell you a story about the time I tried to learn how to snowboard. So this was a few years ago.</p>
</details>

我的意思是，你可以在这里看到，讲故事本身并没有那么糟糕，但仍然存在某种违反我们对AI以第一人称说话的期望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I mean you can see here it's not horrible you know telling a story but there's still some sort of violation of what we would be aiming for with an AI talking in first person.</p>
</details>

所以如果我点击注释，我希望现在一切都正常运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if I hit annotate, and I'll hope everything's up and running right now.</p>
</details>

你可以看到我们有几种不同的模型。我们有**Llama**（Llama: Meta AI开发的一系列大型语言模型）基础模型，我们有自己的**SLG**（Slingshot AI自研基础模型）基础模型，以及我目前正在比较的**Quen**模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and you can see that we have a couple different models. Uh, we have our, uh, llama base model. We have our SLG, our own base model, and a Quen model that I'm comparing at the moment.</p>
</details>

不知道Llama怎么了。你可以看到，我想我宁愿听你讲一个故事。我说我可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't know what's up with llama. And you can see, you know, I think I'd rather hear one from you or a story you say. I can do that.</p>
</details>

所以，假设我们目前更倾向于让我们的临床团队花时间在这些界面上，我们基本上可以通过**DPO**（Direct Preference Optimization: 一种基于偏好数据的强化学习算法，直接优化策略以匹配人类偏好）示例向模型指示我们更喜欢这条消息而不是另一条。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so let's say for the moment that we would prefer our clinical team that spends their time on these kinds of interfaces where we can just indicate to the model basically through a DPO example that we prefer this message over this one</p>
</details>

让我将其保存为草稿，我还可以附上，你知道，这就像一种人类行为，假设这是不可接受的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and let me save it as a draft and I could also attach um, you know, this is like a human behavior let's say that was unacceptable.</p>
</details>

我们会标记这些行为，以了解问题所在，然后我们将其用于直接偏好优化，也用于跟踪和创建评估，以了解AI可能做出的不可接受的行为以及哪些可能被认为是更好的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We would tag these to understand what was wrong and then we use this u both for direct preference optimization and also to track and create evals to understand the kinds of unacceptable behaviors that an AI might do and what might be considered better.</p>
</details>

这就是关于对齐的一点内容。我们还有更多关于对齐的内容可以展示，但我想谈谈强化学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so that's a little bit about alignment. Um we have quite a few more things around alignment I can show but I want to get into a little bit about reinforcement learning.</p>
</details>

### 第三阶段：强化学习——持续优化与行为改变

我们进行的对话有趣之处在于它们很长，对吧？它们可以持续数月，没有明确的结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing that's interesting about a conversation like the ones that we have is that they are they're long, right? they're they can go on for months. There's no definitive end.</p>
</details>

所以，如果你将其与像国际象棋这样有明确结局的游戏相比，我们没有那种明确的结局。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you think compared to like a game of chess where you have like a definitive end, we don't have that.</p>
</details>

另一方面，你有大量的信号。所以在国际象棋游戏中，你通常会采取的机器学习方法会涉及价值模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the other hand, you have a huge amount of signal. So in a game of chess, the kind of machine learning approaches you would take would generally involve value models.</p>
</details>

我不会深入太多技术细节，但国际象棋的关键思想是，你不需要下完整个棋局就知道一步棋有多好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We uh I'm not going to go into a huge amount of technical detail, but the key idea in chess is that you don't need to play the entire game of chess to know how good a move is.</p>
</details>

你实际上可以查看棋盘，了解棋盘状态有多好，对吧？比如有多少兵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can actually look at the board and get a sense of how good the state of the board is, right? Like how many pawns</p>
</details>

在我们的语境中，你可以从对话中获得大量的信号，比如一个人有多开放或多封闭，他们感觉有多么连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in our context, there's a huge amount of signal that you can get from the conversation, how open someone's being or how closed, how connected they're feeling.</p>
</details>

我们从所有这些信号中学习，并将其整合到一个模型中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We learn from all of that signal and put it together into one model.</p>
</details>

从根本上说，我们有四个目标，我们认为它们是顺序且相互关联的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fundamentally for us, we have uh four goals that we think of and we think of them as sequential and correlated.</p>
</details>

首先，我们希望与用户建立意图。我们只是希望他们在心理健康语境中有意图地进行对话。即使他们没有解决所有生活问题也没关系，但他们愿意这样做。他们来这里是为了正确的理由。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First and foremost, we want to build intent with the user. We just want them to be talking intentfully in a mental health context. It's okay if they don't solve all of their life's problems, but they want to. They're here for the right reason.</p>
</details>

我们希望建立**治疗联盟**（Therapeutic Alliance: 指治疗师与来访者之间建立的信任、合作和共同目标的积极关系）或工作联盟，这意味着你正在做正确的事情，以正确的方式进行，你正在合作设定目标，你已经建立了相互尊重的关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to build a therapeutic alliance or working alliance, which is a sense that you're working on the right thing, that you're working on it in the right way, that you're collaborating to set goals, that you've developed a relationship with respect.</p>
</details>

在此基础上，我们希望实现**心理改变**（Psychological Change: 指个体思维、情感、行为模式等方面的深层转变）。有大量的指标可以判断心理改变是否正在发生，是否正在进行中。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">From that, we want to achieve psychological change. And there are huge number of indicators of psychological change to know that it's happening, to know that it's in progress.</p>
</details>

最后，我们希望实现**行为改变**（Behavioral Change: 指个体在行动、习惯和生活方式上的具体转变）。当一个人说“我感到孤独，我没有朋友”时，我们希望他们能交到朋友。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, we want behavioral change. And that's when the person says, um, you know, I'm lonely and I have no friends. We want them to have friends.</p>
</details>

### Ash的成功案例与未来展望

到目前为止，我们通过Ash展示的最酷的事情，我将深入探讨强化学习，但我们即将分享我们与**纽约大学**（NYU）合作进行的第一项研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The coolest thing we've actually been able to show with Ash so far, and I'll dive into the RL. Uh, but we're about to share our first study that we conducted with NYU.</p>
</details>

我们实际上已经证明在所有这些方面都有显著的改变。我认为行为改变是最酷的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've actually demonstrated significant changes on all of these axes. I think behavioral change being the coolest one.</p>
</details>

在我们的研究中，使用Ash的用户平均在使用了大约10周后，平均多了一个朋友或亲密的个人联系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On average, people who use Ash in our study had one more friend or close personal connection on average after using Ash for about 10 weeks.</p>
</details>

与**ChatGPT**及其同类AI相比，平均而言，人们在使用AI进行这些目的时实际上会变得更孤独，联系更少，因为它取代了人际连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So compared to AI when you think about chachi and equivalent on average people are actually more lonely they become less connected the more they use AI for these purposes it replaces human connection</p>
</details>

但如果你只为这些目标进行优化，我们已经能够证明Ash可以加强联系，重建社会结构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but if you just optimize for these kinds of objectives we have been able to show that ash can strengthen connections rebuild that social fabric</p>
</details>

所以基本上，当我们得到，我将演示一下价值模型，通过运行我们的价值模型来一窥究竟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so basically when we get I'm just going to demonstrate kind of the value model take a peek by running our value model here</p>
</details>

所以我们的价值模型会随着时间跟踪大量的信号，你可以在这种情况下看到它正在比较这条原始消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so our value model is tracking a whole lot of signals over time and you can see in this case it's comparing this original message.</p>
</details>

这些数字未经校准，我不会深入太多细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and these numbers are not calibrated. I won't go into too much detail.</p>
</details>

但我们实际上可以看到模型在许多不同信号上的比较，比如这些是关于我们期望接下来会发生什么的随时间变化的概率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but we can actually see how the model compares on a whole bunch of different signals like the like and these are likelihoods over time of what we expect to happen next.</p>
</details>

所以这些事情包括我们是否期望用户忽略Ash所说的话，或者感到困惑，它一直延伸到建立对齐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are things like um whether we expect the user to ignore what Ash says or be confused and it goes all the way towards building alignment.</p>
</details>

总的来说，作为评估，你可以在这里看到最好的消息实际上是原始消息。谢谢你，我很欣赏这个赞美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and overall as an assessment you can see here that the best message actually was the original one. Thank you. I appreciate the compliment.</p>
</details>

你可以看到这条更长的消息。我可能时不时能做那种事情，但如果我们放大看。是的，这有点烦人且冗长。仍然可以。分数相似，但略低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see this longer message. I might be able to do the kind of thing from time to time, but if we zoom it. Yeah, it's kind of annoying and verbose. Still okay. Similar score, but a little bit lower.</p>
</details>

我鼓励大家尝试Ash。它今天已在应用商店上市。我们刚刚上线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would encourage you to try Ash. It's available today on the app store. We've just launched. Uh, so we we're just live as of very recently if you want to give it a try.</p>
</details>

如果你正在找工作，我们是一个小团队。我们倾向于是一个相当资深的团队。大多数人在之前的职位上都是经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you are looking for a job, we are a small team. Uh, we tend to be quite a senior team. Most folks have been managers in a past role.</p>
</details>

我们倾向于极度以使命为导向。如果这看起来是AI的一个有价值的用例，请联系我，我就是那个带着狗的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, we tend to be extremely missiondriven. If this seems like a valuable use case for AI, please, I'm the guy with the dog.</p>
</details>