---
author: The MAD Podcast with Matt Turck
date: '2025-11-13'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=3SliW74opyY
speaker: The MAD Podcast with Matt Turck
tags:
  - mental-health-ai
  - foundation-models
  - reinforcement-learning
  - therapeutic-alliance
  - behavioral-change
title: 利用AI应对心理健康危机：Slingshot AI的Ash模型构建之路
summary: Slingshot AI的CEO Daniel分享了如何构建一个用于心理健康的AI基础模型Ash。面对心理健康服务提供者严重短缺的现状，Ash通过三个阶段的训练——预训练、对齐和强化学习，结合多种治疗方式，旨在为用户提供个性化的心理健康支持。初步研究表明，Ash不仅能建立治疗联盟，还能促进用户的心理和行为改变，例如增加社交连接，这与传统AI在心理健康领域的应用形成了鲜明对比。
insight: ''
draft: true
series: ''
category: psychology
area: tech-insights
project:
  - ai-impact-analysis
people:
  - Daniel
  - JFK
companies_orgs:
  - Slingshot AI
  - NYU
products_models:
  - Ash
  - chat GBT
  - llama
  - SLG
  - Quen
media_books: []
status: evergreen
---
### 构建心理健康领域的基础模型

很高兴来到这里。今天我将谈谈如何构建一个用于心理健康的基础模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, great to be here. Um, today I'm going to talk a bit about how to build a foundation model for psychology.</p>
</details>

简单介绍一下我自己，我是Daniel，是一名机器学习工程师，也是Slingshot的联合创始人兼CEO。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, so just to introduce myself real quick, I'm Daniel. Um, I'm a machine learning engineer. I'm the co-founder and CEO at Slingshot.</p>
</details>

大家可能知道存在心理健康危机，但可能不知道心理健康服务提供者严重短缺。如果美国的服务提供者是均匀分布的，那么大约每1500人需要一位治疗师。在大多数地方，情况要糟糕得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You probably know there's a mental health crisis. You might not know that there's a massive shortage of mental health providers. There's about 1,500 people in need for every therapist out there if the US were to be evenly distributed. In most places, it's a lot worse.</p>
</details>

这个问题已经存在大约60年了。约翰·肯尼迪（John F. Kennedy: 美国第35任总统）在1963年的一次讲话中就提到了心理健康服务提供者严重短缺的问题，但情况并没有好转。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has been a problem for about 60 years. Uh JFK gave a talk in 1963 about the massive shortage mental health providers. It hasn't gotten any better.</p>
</details>

但世界其他地方似乎很快就达成了共识，人工智能（AI）的首要用例现在是治疗，主要是通过ChatGPT（OpenAI开发的大型语言模型）进行。但它在这方面做得并不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also, the rest of the world seems to agree uh very quickly. AI AI's number one use case is now therapy. And that's therapy being done by chat GBT for the most part. That's not very good at it.</p>
</details>

因此，我们尝试采取一种非常不同的方法，以真正帮助人们改善心理健康。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, uh, we've tried to take a very different approach to try to actually help people with their mental health.</p>
</details>

通常，在这个时候我会直接演示我们的产品。所以，我会简单介绍一下Ash。今天，我不打算向大家展示Ash的外观，因为大家可以自己尝试。我将向大家展示我们是如何构建Ash的，并让大家了解一下幕后的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I usually at this point would jump in and demo our product. So, I'll tell you a little bit about Ash. I'm going to jump in today and instead of showing you how Ash looks because you all can try it yourself. I'm going to show you a little bit about how we build Ash and give you a peak behind the hood.</p>
</details>

我们基本上分三个阶段训练我们的模型。这与大家正在使用的任何语言模型非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We basically train our model in three stages. Uh, it's pretty comparable to, you know, any language model you'd be working on.</p>
</details>

我们做三件事：预训练、对齐和强化学习。我们已经完全垂直整合。我们非常关注训练这种模型的每一个细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we do three things. is we do pre-training, alignment, and reinforcement learning. Uh we've fully vertically integrated. We really obsess over every detail of what it takes to train a model like this.</p>
</details>

这意味着我们关注体验的每一个要素。例如，在心理健康方面，人工智能应该谈论什么？在语音模式下，人工智能应该暂停多久？让人们停止思考多久才合适？什么时候应该打断他们？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that means that we focus on every element of the experience. You know, what does an AI talk about in the context of mental health? How long should an AI pause when it's when you're talking in voice mode? How long would be appropriate to let the person stop and think? When do you interrupt them?</p>
</details>

但在大多数情况下，这一切都归结于从数据中学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for the most part, it all comes down to learning from data.</p>
</details>

上一代心理健康公司通常有一种理念、一种方法、一种理论，并认为，如果每个人都知道我知道的，以我思考的方式思考，心理健康问题就能得到解决。通常是认知行为疗法（CBT: 是一种心理治疗方法，旨在改变患者的思维模式和行为）。也许你有一个领导者，你会想，让我们拿他的书，然后试着把它放到人们的脑海里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the last generation of mental health companies generally had like a philosophy, an approach, a theory and thought, hey, if everyone just knew what I knew, thought the way that I thought mental health would be solved. It was usually CBT. Maybe you have like a leader and you're like, let's take his book and let's try to put it into people's minds.</p>
</details>

我们采取了一种非常不同的方法。我们从各种治疗方式中学习，包括CBT、辩证行为疗法（DBT: 旨在帮助人们调节情绪、改善人际关系和应对压力的心理治疗方法）、接受与承诺疗法（ACT: 强调接受无法控制的想法和感受，并致力于有价值的行为）、内在家庭系统（IFS: 一种心理治疗方法，将人格视为由多个“部分”组成的系统）、精神动力疗法、动机式访谈、躯体疗法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we take a very different approach. We learn from all kinds of modalities of therapy. CBT, DBT, ACT, IFS, psychonamic therapy, motivational interviewing, sematic therapy.</p>
</details>

我们从那些更适合情感聚焦体验或认知聚焦体验、更开放式或更具指导性、更精神化或更世俗的实践和人那里学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We learn from uh practices and people who are uh going to be a better fit for a more emotionally focused experience or more cognitively focused, more open-ended or more directed, more spiritual or more secular.</p>
</details>

我们将所有这些整合到一个模型中。然后，我们引入了临床团队。我们有一个全职的临床团队，致力于调整我们的模型，使其从人类所做的事情转变为适合人工智能的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we put it all together into one model. And then we bring in our clinical team. So we have a full-time clinical team that works to align our model and that's to shift from the kind of things that humans do to what would be appropriate with AI.</p>
</details>

当我们刚开始的时候，我们认为人们与人工智能互动的方式会比现在更像与人互动。我们曾梦想着人工智能的图灵测试（Turing Test: 一种测试机器是否能够表现得像人类一样思考的方法），我们想，如果我们能从足够多的数据中学习，大多数人都会在Zoom上进行治疗。如果我们能做同样的事情，我们显然可以进行治疗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we first got started, we thought that the way people would interact with AI would be much more similar to humans than it is. You know, we had this dream of the AI touring test and we're like, hey, if we could just learn from enough data, most people do therapy on Zoom. If we can do the same thing, you know, we can obviously do therapy.</p>
</details>

但我们所看到的是，人们与人工智能互动的方式是，他们会更快地敞开心扉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and what we've seen is the way that people interact with AI, they open up much more quickly for one thing.</p>
</details>

因此，我们经常会遇到这样的对话：有人一开始说，Ash会说：“嘿，准备好开始了吗？”然后你会说，“是的，我是同性恋。”我从来没有告诉过任何人，我该怎么办？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we often have the conversations where someone starts with like, uh, you know, Ash's like, "Hey, ready to get started?" And you're like, "Yes, I'm gay." and I've never told anyone that what do I do?</p>
</details>

这非常不同。人们期望人工智能不会做出评判。人们期望他们可以这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it's very different. People have this kind of like expectation of a lack of judgment. People expect that they can. Anyway, so we um at the alignment stage, we have to shift.</p>
</details>

因此，在对齐阶段，我们必须转变。我们必须引入策略，引入护栏。今天我将给大家简单介绍一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have to introduce policies. We introduce guardrails. And I'm going to give you a little taste of that today.</p>
</details>

最后，我们进行强化学习。大多数心理健康服务提供者没有机会学习什么有效，对吧？他们总是在想，我说的那些话有什么魔力，产生了影响？它真的有影响吗？之后会发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then finally, we do reinforcement learning. Most mental health providers don't get any opportunity to learn what works, right? They're always wondering what were those magic words that I said that had an impact? Did it have an impact? What's going to happen way later?</p>
</details>

我们可以从每一次对话中学习到大量的信息。例如，这个人多久回复一次？他们开始哭了吗？他们有没有说过我以前从未与其他人分享过？这是我第一次大声说出来。他们有没有说过，嘿，我尝试了你上周说的那件事，结果非常好，或者我尝试了你上周说的那件事，结果非常糟糕，太可怕了，你太糟糕了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we have a huge amount of signal that we can learn from every conversation. So that's signal like uh what did the person uh you know how long did the person take to respond? Did they start crying? Did they say I've never shared that with anyone else before? That was my first time saying that out loud. Did they say hey I tried that thing you said last week and it went super well or I tried that thing you said last week and it went horribly wrong and it was terrible and you suck.</p>
</details>

我们从所有这些中学习，这使我们能够通过持续的在线强化学习来学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We learn from all of this and it allows us to learn through continual online RL.</p>
</details>

我将给大家简单介绍一下幕后的情况，而不是把所有的时间都花在幻灯片上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to give you a little taste behind the hood and not spend all our time on slides.</p>
</details>

让我来给大家展示一下，这实际上是我第一次分享关于Ash是如何构建的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so let me jump in and I'll show you a little bit about and this is actually I think the first time that I've shared much about how Ash is built.</p>
</details>

这里简单介绍一下幕后的情况。我们在训练Ash方面做了很多工作。我想带大家了解一下我们的一些主要工具和我们在内部使用的一些主要工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so here's a little peak behind the hood. Uh, we do a lot in terms of how we train Ash. I'm going to take you through I think some of our major tools and some of the major workflows that we use internally.</p>
</details>

首先，我提到我们使用预训练数据进行训练，我认为关于预训练数据最重要的是拥有真正高质量的数据。因此，我们使用大量的数据进行训练。并非所有数据都是会话式的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the first thing is I mentioned that we train on uh on pre-training data and I think uh most important thing about pre-training data is just having really high quality data. So we train on a huge amount of data. Not all of it is conversational.</p>
</details>

我们通过与行为健康组织的合作获得这些数据，当然，这些数据是在伦理和用户许可的情况下获得的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we get this through partnerships with behavioral health organizations um that we obtain uh ethically with consent of course.</p>
</details>

我想给大家简单介绍一下。我只是想给大家简单介绍一下。我一直在浏览，正如大家所看到的，我们做了大量的预处理来分析对话，以了解什么对人工智能有意义，什么没有意义，特别是使用小型模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'm going to sh I mean you I just wanted to give a little taste. I was like looking through uh we do quite a bit of pre-processing as you can see to analyze the conversations to understand what makes sense for AI what doesn't using especially small models but I think it's also fascinating because we don't really necessarily realize how bad AI today is in a mental health context and how awesome it could be so if you just look you can see the kind of I'll just brought up a couple of examples to give that taste and these were actually literally the first two random uh conversations smart data set I pulled out um these are all anonymized by the way we make significant changes is to make sure that we have no way to connect this back to any humans.</p>
</details>

但我也认为这很吸引人，因为我们并没有真正意识到今天的人工智能在心理健康方面的表现有多糟糕，以及它可能有多棒。所以，如果你只是看看，你可以看到那种，我只是举了几个例子来给大家尝尝，这些实际上是字面上我提取出来的最初两个随机对话智能数据集。顺便说一句，这些都是匿名的，我们做了重大的修改，以确保我们无法将这些数据与任何人联系起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'm going to sh I mean you I just wanted to give a little taste. I was like looking through uh we do quite a bit of pre-processing as you can see to analyze the conversations to understand what makes sense for AI what doesn't using especially small models but I think it's also fascinating because we don't really necessarily realize how bad AI today is in a mental health context and how awesome it could be so if you just look you can see the kind of I'll just brought up a couple of examples to give that taste and these were actually literally the first two random uh conversations smart data set I pulled out um these are all anonymized by the way we make significant changes is to make sure that we have no way to connect this back to any humans.</p>
</details>

大家可以看到，你当时崩溃了吗？你是否会怒火中烧？当你从那种状态中平静下来时，你是否会感到内疚和懊悔？你会崩溃吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you can see the like did you melt down at that point? You're flying into a rage sort of maybe. And then when you come down off of that, do you feel this guilt and remorse and everything? Do you melt down?</p>
</details>

那个人说，我的意思是，我觉得自己像一块垃圾。恢复过程和实际的愤怒一样糟糕吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The person says, I mean, I feel like a piece of garbage. Is the recovery just as bad as the actual rage?</p>
</details>

是的，我想说，你知道，如果你能在达到那个临界点之前，找到你触发电路的地方，你就会少惹很多麻烦，对吧？我们可以试着弄清楚。在那段时间里，有什么事情让情况变得更糟吗？比如药物滥用，或者你不喜欢的工作之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I would say, you know, it's and you can see the person. Um, if you could identify where you trip the circuit before you get to that point, you'd be in a lot less hot water, right? we could try to figure that out. Is there anything going on during that time that was making it worse? Compounding issues like substance abuse or anything like that, bad job that you don't like or something like that.</p>
</details>

大家会注意到，这显然是一次深入的对话。这不是用户进行的第一次对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and what you notice is just like obviously this is deep into a conversation. Uh, that's not the first conversation this user's had.</p>
</details>

这些对话再次是与人类进行的，而不是与人工智能进行的。让我们跳到另一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and these are again with uh humans, not with an AI. Let's jump into another.</p>
</details>

大家可以看到，我发现观看这些对话非常着迷，这有点像心理健康背后的丰富性和魔力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see I find these so fascinating to watch just these are this is kind of like the richness behind mental health and magic.</p>
</details>

大家可以看到，我们想让你参与进来，而不是让一些人值得信任。我可以信任一些人。大家可以看到，治疗师正在指导他们说一些话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, you can see um but we want to make it about you, not so not some people are trustworthy. I can trust some people. And you can see that the therapist is kind of coaching them on some of these words.</p>
</details>

治疗师说，或者我可以选择信任谁。是的，这也可以。哪个听起来更真实？我可以信任一些人，还是我可以选择信任谁？我可以选择信任谁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know, and therapist says or I can choose who to trust. Yeah, that works too. Which one sounds more true? I can trust some people or I can choose who to trust. I can choose who to trust.</p>
</details>

好的，我要继续了，但我认为这有时真的很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, all right. I'm gonna move on, but I think this sometimes is just really important.</p>
</details>

只是为了说明为什么预训练如此重要。实际上，我们喜欢谈论提示工程（Prompt Engineering: 一种通过设计和优化输入提示来改善大型语言模型性能的技术），但在这些用例中，你拥有一些数据，这些数据没有出现在大型语言模型的预训练中，因为它们无法在互联网上获得，因为它们无法安全和合乎道德地收集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, just to see why pre-training is so important. Like realistically, we love to talk about prompt engineering, but there are these use cases where you have data sets that are just not present in the pre-training of large language models because they're not available on the internet because they're not able to be collected securely and ethically.</p>
</details>

我认为，一旦你把这些数据放到模型中，你就会意识到通过预训练，通过从大量的语料库中学习，而不是试图拥有一种理念，你可以取得多大的成就。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think once you put that into a model, you realize how much more you can achieve through pre-training, through learning from, you know, a large corpus rather than trying to have one philosophy.</p>
</details>

好的，我要回到我们的工具上来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, so I'm going to get back into our tools.</p>
</details>

以上是关于预训练方面的内容。在预训练之后，我们的模型有点滑稽。它有很多功能，但没有任何特定的方向。它不知道在这种情况下什么是合适的，什么是不合适的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was on the pre-training side. Um, post pre-training, our model is kind of funny. It has a lot of capabilities, but it doesn't have any particular direction that it goes in. It doesn't know what's appropriate in this context and what's not.</p>
</details>

因此，我想分享我们为调整模型而采取的众多流程之一。但我想介绍的一件事是，我们有所谓的行为概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I'm going to share one of many flows that we take towards aligning our model. But one thing that we do, I was just going to run through is we have this concept of behaviors.</p>
</details>

我们的行为有点像一个堆栈，我们用它来理解模型所做的奇怪的事情，模型所做的有趣的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So our behaviors is kind of a stack that we use to understand uh weird things the model does, interesting things the model does.</p>
</details>

这是我们通过匿名数据在线监控的能力。当你注册该应用程序时，你会看到我们有一个选择加入选项，允许我们使用这些数据来改进模型。大约70%的用户选择加入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, this is our ability to monitor online through anonymized data. When you sign up to the app, you'll see that we have an optin to allow us to use the data to improve the model. uh about 70% of our users opt in.</p>
</details>

对于其他30%的用户，我们绝对无法访问，也无能为力。对于选择加入的用户，我们将其与用户完全分开存储，这就是我们可以分析的数据类型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um for the other 30% we have absolutely no access and there's nothing we can do. For the uh people who do opt in we store completely separate from the users and that's the kind of data we can analyze.</p>
</details>

一件非常有趣的事情是，告诉用户他们做了一些人工智能不可能做到的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one really funny thing is um as telling the user that they did something an AI can't possibly do.</p>
</details>

我们通过查看数据来理解这一点的方式是，我们特别从几个合成示例中快速构建数据集，以训练一个非常小的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the way that we look through data to understand this is we build very quickly data sets especially from just a couple synthetic examples to train a really small model.</p>
</details>

大家可以看到这些例子，比如这是Ash实际说的话。我当时在谈论我的朋友，然后我想起了另一次我和我的狗在公园里，我们看到了这个，我不知道上下文是什么，但显然人工智能做不到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see these examples of like this is something Ash actually said. So I was talking about my friend and then I remember this other time I was at the park with my dog and we saw this really I don't know what the context was but obviously an AI can't do that.</p>
</details>

因此，我们能够搜索并希望能够识别出一些案例。当然，我会告诉你一个关于我尝试学习滑雪的故事。那是几年前的事了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're able to then like search through and hopefully and identify some cases. Sure I'll tell you a story about the time I tried to learn how to snowboard. So this was a few years ago.</p>
</details>

我的意思是，大家可以看到，这并不糟糕，你知道，讲故事，但仍然有一些违反了我们希望人工智能以第一人称说话的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I mean you can see here it's not horrible you know telling a story but there's still some sort of violation of what we would be aiming for with an AI talking in first person.</p>
</details>

所以，如果我点击注释，我希望一切现在都能正常运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if I hit annotate, and I'll hope everything's up and running right now.</p>
</details>

大家可以看到，我们有几个不同的模型。我们有我们的Llama基础模型。我们有我们的SLG，我们自己的基础模型，以及我现在正在比较的Quen模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and you can see that we have a couple different models. Uh, we have our, uh, llama base model. We have our SLG, our own base model, and a Quen model that I'm comparing at the moment.</p>
</details>

不知道Llama怎么了。大家可以看到，你知道，我想听听你的故事，或者你说的故事。我可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't know what's up with llama. And you can see, you know, I think I'd rather hear one from you or a story you say. I can do that.</p>
</details>

假设目前我们更喜欢我们的临床团队将时间花在这些界面上，我们可以通过DPO（Direct Preference Optimization: 直接偏好优化）示例向模型表明我们更喜欢这个消息而不是那个消息，让我将其保存为草稿，我也可以附加，你知道，这就像一种人类行为，假设那是不可接受的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so let's say for the moment that we would prefer our clinical team that spends their time on these kinds of interfaces where we can just indicate to the model basically through a DPO example that we prefer this message over this one and let me save it as a draft and I could also attach um, you know, this is like a human behavior let's say that was unacceptable.</p>
</details>

我们会标记这些，以了解哪里出了问题，然后我们将此用于直接偏好优化，并用于跟踪和创建评估，以了解人工智能可能做出的不可接受的行为类型，以及什么可能被认为是更好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We would tag these to understand what was wrong and then we use this u both for direct preference optimization and also to track and create evals to understand the kinds of unacceptable behaviors that an AI might do and what might be considered better.</p>
</details>

以上是关于对齐的一些内容。我们还有很多关于对齐的内容可以展示，但我想介绍一下强化学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so that's a little bit about alignment. Um we have quite a few more things around alignment I can show but I want to get into a little bit about reinforcement learning.</p>
</details>

关于像我们这样的对话，有趣的是它们很长，对吧？它们可能会持续几个月。没有明确的结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing that's interesting about a conversation like the ones that we have is that they are they're long, right? they're they can go on for months. There's no definitive end.</p>
</details>

因此，如果你将其与像国际象棋这样的游戏进行比较，在国际象棋中，你有一个明确的结束，我们没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you think compared to like a game of chess where you have like a definitive end, we don't have that.</p>
</details>

另一方面，大家有大量的信息。因此，在国际象棋游戏中，大家通常会采用的机器学习方法通常涉及价值模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the other hand, you have a huge amount of signal. So in a game of chess, the kind of machine learning approaches you would take would generally involve value models.</p>
</details>

我不打算深入探讨大量的技术细节，但国际象棋中的关键思想是，你不需要下完整盘棋就可以知道一步棋有多好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We uh I'm not going to go into a huge amount of technical detail, but the key idea in chess is that you don't need to play the entire game of chess to know how good a move is.</p>
</details>

实际上，你可以看看棋盘，了解棋盘的状态有多好，对吧？就像我们有多少棋子一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can actually look at the board and get a sense of how good the state of the board is, right? Like how many pawns in our context, there's a huge amount of signal that you can get from the conversation, how open someone's being or how closed, how connected they're feeling.</p>
</details>

在我们的上下文中，大家可以从对话中获得大量的信息，比如某人有多开放或多封闭，他们感觉有多联系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can actually look at the board and get a sense of how good the state of the board is, right? Like how many pawns in our context, there's a huge amount of signal that you can get from the conversation, how open someone's being or how closed, how connected they're feeling.</p>
</details>

我们从所有这些信息中学习，并将它们整合到一个模型中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We learn from all of that signal and put it together into one model.</p>
</details>

从根本上说，我们有四个目标，我们将它们视为顺序的和相关的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fundamentally for us, we have uh four goals that we think of and we think of them as sequential and correlated.</p>
</details>

首先，我们希望与用户建立意图。我们只是希望他们在心理健康方面有意识地交谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First and foremost, we want to build intent with the user. We just want them to be talking intentfully in a mental health context.</p>
</details>

即使他们没有解决他们所有的生活问题，但他们想解决。他们来这里的原因是正确的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's okay if they don't solve all of