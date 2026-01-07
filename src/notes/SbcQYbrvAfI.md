---
author: AI Engineer
date: '2026-01-06'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=SbcQYbrvAfI
speaker: AI Engineer
tags:
  - prompt-engineering
  - agent-optimization
  - evaluation-metrics
  - llm-feedback
  - system-prompt
title: 构建与优化提示词学习循环
summary: 本次访谈深入探讨了提示词学习（Prompt Learning）的构建与优化，强调其在AI智能体（Agent）开发中的关键作用。演讲者详细介绍了提示词学习如何通过结合人类反馈和LLM评估来动态改进系统提示词，从而提升智能体的可靠性和性能。通过一个编码智能体的案例研究，展示了仅通过添加规则而非微调或架构更改即可实现显著性能提升。讨论还涵盖了提示词学习与传统强化学习、元提示词以及GA优化方法的对比，并强调了高质量评估在整个优化过程中的重要性。最后，提供了构建JSON网页提示词优化循环的实践指导。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Arize
  - OpenAI
products_models:
  - Alex
  - GPT-4o
  - Claude Code
  - Cursor
media_books: []
status: evergreen
---
### 欢迎与介绍

**SallyAnn DeLucia**: 大家好，我们现在开始。非常感谢大家今天加入我们。我是 **Sally**，**RISE** 的总监。我将带领大家了解一些关于大众提示词学习的内容。我们实际上将为本次研讨会构建一个驱动优化循环。我来自技术背景，最初从事数据科学，后来转到产品领域。我今天仍然喜欢接触代码。我认为我最喜欢的项目之一就是将我们自己的智能体 **Alex** 构建到我们的平台中。所以我非常熟悉所有的痛点，以及优化提示词的重要性。所以我会花一点时间在幻灯片上。我喜欢先铺垫一下，确保大家对我们要做的事情有背景了解，然后我们再一起深入代码。那么，**Fuad**，你来做一下介绍吧。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Hey everyone, gonna get started here. Thanks so much for joining us today. I'm Sally. I'm the director of RISE. I'm going to be walking you through some of crowd prompt learning. We're actually going to be building a driven optimization loop for the part of the workshop. I come from a technical background and started off in data science before I made my way over to product. I do like to still be touching code today. I think one of my favorite projects that I work on is building our own agent Alex into our platform. So I'm very familiar with all of the pain points and how important it is to optimize your prompt. So I'm going to spend a little bit time on slides. I like to just set the scene, make sure everybody here has context on what we're going to be doing and then we'll jump into the code with me. So, I'll let you do a little bit of an intro.

</details>

**Fuad Ali**: 好的，非常感谢 **Sally**。很高兴见到大家。很高兴能和大家一起探讨提示词学习。不知道大家昨天有没有机会听 **Harness** 的演讲，但希望那能让大家对提示词和提示词学习的强大之处有所了解。我叫 **Fuad**，也是 **Arize** 的产品经理。就像 **Sally** 说的，我们喜欢编写代码。我们会先讲几张幻灯片，然后我们会讲解代码，我们会在旁边帮助大家调试。我的背景也是技术出身。我曾长期担任后端分布式系统工程师。所以，我深知可观测性基础设施的重要性。我认为在 **AWS** 中设置它很合适。所以，是的，很高兴能和大家一起深入探讨预加载。谢谢大家。

<details>
<summary>Original English</summary>

**Fuad Ali**: Yeah, thank you so much, Ellen. Great to meet all of you. Excited to be walking through prompt learning with you all. I don't know if you got a chance to see a harness talk yesterday, but hopefully that gave you some good background on how powerful prompting and prompt learning can be. So my name is I'm a product manager here at Arise as well. And like Sally said, we like to stay in code. We'll be doing a few slides, then we'll walk through the code and we'll be floating around helping you guys debug and things like that. My background is also technical. So, I was a backend distributed systems engineer for a long time. So, no stranger to how important observability infrastructure really is. And I think it's an appropriate setting in AWS for that. So, yeah, excited to dive deep into front loading with you all. Thank you.

</details>

**SallyAnn DeLucia**: 太棒了。好的，我们开始吧。我将简单介绍一下我将要涵盖的内容。我们将讨论为什么现在的智能体会失败，什么是提示词学习？我想通过一个案例研究向大家展示这为什么有效。我们还将讨论提示词学习与 **GA** 的对比。我想在会议期间有几个人来问我关于 **GA** 的问题。我们对此进行了一些基准测试，然后我们将进入我们的研讨会。但在此之前，我想问一个问题：现在有多少人在构建智能体？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Awesome. All right, so we're gonna get started. Just give you a little bit of an agenda of the things I'm going to be covering. So we're gonna talk about why agents fail today. what is evening prom learning? I want to go through a case study kind of show youall why this actually works. And we'll talk about learning versus GA. I think everybody I had a few people come up to me over the conference about what about GEA? We have some benchmarking against that and then we'll hop into our workshop. But with this I want to ask a question. How many people here are building agents today?

</details>

**观众**: 好的，这和我预期的差不多。那么有多少人觉得他们构建的智能体是可靠的呢？

<details>
<summary>Original English</summary>

**Audience**: Okay, that's what I expected. And how many people actually feel like the agents they're building are reliable?

</details>

**SallyAnn DeLucia**: 是的，我也是这么想的。那么我们来谈谈为什么现在的智能体会失败。它们为什么会失败？嗯，我们从很多人那里看到了一些问题，甚至在我们内部构建 **Alex** 时也看到了智能体崩溃的原因。我认为很多时候并不是因为模型本身弱，而是因为环境和指令不够完善。所以，从它们学习到的环境中没有指令，没有规划或者规划非常死板。我觉得现在很多智能体都没有规划。我们确实有一些很好的规划例子，比如 **Claude Code**、**Cursor**。这些都是非常好的例子，但我并没有看到它普及到我遇到的每一个智能体中。缺少工具是一个大问题。有时你就是没有所需的工具集。然后是缺少工具指导，比如我们应该选择哪些工具。**上下文工程**对大家来说仍然是一个很大的难题。如果我把这些问题提炼出来，我认为是这三个核心问题：**适应性**和**自学习能力**。所以，没有从环境中学习到的系统指令，这涉及到了**确定性与非确定性**的平衡。所以，有规划或者没有规划，与进行非常死板的规划相比，你希望在那里有一些灵活性。然后，**上下文工程**我认为是一个在过去六到八个月才出现的术语，但它非常非常重要。我们发现缺少工具、工具指导，只是没有上下文，或者没有确认你的数据，没有给 **LLM** 足够的上下文。所以这些是核心问题。但我认为还有一件非常重要的事情。那就是职责分配的问题。有这些技术用户，你的 **AI** 工程师、数据科学家、开发人员，他们真正负责代码自动化管道，管理性能和成本。但我们还有领域专家、主题专家、**AI** 产品经理。这些人真正了解用户体验会是什么样子。他们可能非常熟悉我们实际构建 **AI** 应用程序所遵循的原则。他们会跟踪我们的评估，并努力确保产品成功。所以职责之间存在这种划分，每个人都在贡献，但技术能力可能存在差异。所以，通过提示词学习，它将是所有这些因素的结合。所以每个人都需要真正参与进来，我们可以稍后更详细地讨论。那么，究竟什么是提示词？我将首先介绍一些我们在提出提示词学习时借鉴的方法。这是 **Arize** 一直非常致力于研究的领域。我们借鉴的第一件事是**强化学习**。这里有多少人熟悉强化学习的工作原理？好的，很酷。如果我打一个非常简单的比方，我们有一个强化模型。假设它是一个我们试图提升的学生大脑。它将采取一个行动，比如参加考试，然后会有一个分数。老师会来批改试卷，这会产生一种标量奖励。假设学生大脑中有一个算法，可以利用这些分数更新大脑中的权重，从而改变学习行为，然后我们再重新处理。所以，在这种强化学习中，我们根据一些标量更新权重。但是，直接更新权重实际上非常困难，尤其是在 **LLM** 的世界中。所以，当我们进行提示词时，强化学习效果不会那么好。然后是**元提示词**，它与我们使用提示词学习所做的事情非常接近，但仍然不太对。所以，在元提示词中，我们要求 **LLM** 改进提示词。再次使用学生例子。我们有一个智能体，也就是我们的学生。它会产生某种输出，比如用户提问并得到一个输出。这就是我们例子中的测试。然后我们会进行评分。你可以把它看作是评估。它会输出一个分数，然后我们有了元提示词。所以现在老师就像元提示词。它会从我们的评分器中获取结果，并根据结果更新提示词。但这仍然不是我们真正想要做的事情。这就是我们引入提示词学习概念的地方。提示词学习会进行考试，产生一个输出。我们会有 **LLM** 评估。但还有一个非常重要的部分，那就是英文反馈。比如哪些答案是错的？为什么答案是错的？学生需要在哪里学习？真正找出这些问题。然后我们仍然不使用元提示词。我们仍然要求 **LLM** 改进提示词。只是我们提供给 **LLM** 的信息大不相同。所以我们会用所有这些反馈来更新提示词。所以，来自我们的评估，来自主题专家进行标注，并利用这些来通过更好的指令和有时是考试来提升我们的提示词。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah, that's what I also thought. So let's talk a little bit about why agents fail today. So why do they fail? Well, there's a few things that we're seeing with a lot of our folks and we're seeing even internally as we build with Alex for why agents are breaking. So I think that a lot of times it's not because the models are weak. It's a lot of times the environment and the instructions are weak. So having no instructions from their learned environment, no planning or very static planning. I feel like a lot of agents right now don't have planning. We do have some good examples of planning like we have Claude Code, Cursor. Those are really great examples but I'm not seeing it make its way into every agent that I come across. Missing tools big one. Sometimes you just don't have the tool sets that you need. And then missing tool guidance on which of the tools we should be picking and then context engineering continues to be a big struggle for folks. If I were to distill this out, I think it's these three core issues. So adaptability and selfarning. So no system instructions learned from the environment touched on determinism versus non-determinism balance. So having the planning or no planning versus doing a very static planning. You want to have some flexibility there. And then context engineering I think is a term that just emerged in the last six to eight months but it's something that's really important that we're finding missing tools tool guidance just not having context or confirming your data and not giving the LM enough context. So these are the core issues to still. But I think there's one other pretty important thing. And that is this distribution of who's responsible for what. So there's these technical users, your AI engineers, your data scientists, developers, and they're really responsible for the code automation pipelines actually, managing the performance and costs. But then we have our domain experts, subject matter experts, AI product managers. These are the ones that actually knew what the user experience would be. they probably are super familiar with the principles that we're actually building to our AI applications. They're tracking our evals and they're really trying to ensure that the product success. So there's this split between responsibilities but everybody is contributing but then there's this difference in terms of maybe technical abilities. And so with prompt learning it's going to be a combination of all these things. So everybody's going to really need to be involved and we can talk about that a little bit more. So what even is prompting? I'm going to first go through some of the approaches that we borrowed when we came up with prompt learning. So this is something that Arize has been really dedicated to doing some research. And so one of the first things we borrow from which is reinforcement learning. How many folks here are familiar with how reinforcement learning works? All right, cool. So if I were to give a really silly analogy, we have a reinforcement model. Pretend it's a student brain that we're trying to boost up. And so they're going to take an action which might be something like you're just going to take a test an exam and there's going to be a score. A teacher is going to come through and actually score the exam here that's going to produce this kind of scaler reward and pretend the student has an algorithm in their brain that can just take those scores and update the weights in their brain and the learning behavior there and then we reprocess. So in this reinforcement one we're updating weights based off of some scalers. But it's really actually difficult to update the weights directly, especially in the LLM world. So, reinforcement learning isn't going to quite work that well when we're doing things like prompting. So, then there's metaprompting, which is very close to what we do with prompt learning, but still not quite right. So, here with metal prompting, we're asking LM to improve the prompt. So again, we use that student example. We have an agent which is our student. And it's going to produce some output that's a user asking a question getting an output. That's our test in this example. And then we're going to score. Eval is pretty much what you can think of there. Where it's going to output a score and from there we have the metapromp thing. So now the teacher is the metapar prompt. It's going to take the result from our scorer and update the prompts based off of that. But it's still not quite what we want to do. And that's where we introduce this idea of prompt learning. So prompt learning is going to take the exam going to produce an output. We're going to have our LLM evals on there. But there's also this really important piece which is the English feedback. So which answers were wrong? Why were the answers wrong? Where the student needs to actually study? Really pinpointing those issues. And then we still aren't using metapro. We still are asking an LLM to improve the prompt. It's just the information that we are giving that LLM is quite different. And so we're going to update the prompt there with all of this feedback. So from our evals from a subject matter expert going in and labeling and use that to boost our prompt with better instructions and sometimes exams.

</details>

### 提示词学习的工作原理与案例研究

**SallyAnn DeLucia**: 所以这有点像传统的提示词优化，我们把它当作机器学习来处理，我们有数据，有提示词。我们说优化这个提示词，并最大化我们的预测冲动。但这对于 **LLM** 来说效果不佳，因为我们缺少很多上下文。所以我们真正发现的是，关于失败原因的人工指令。想象一下，你拥有应用程序数据、跟踪记录、数据集，无论是什么。你的主题专家会进去，他们不仅会标注正确或不正确，还会说明为什么这是错误的。它未能遵守这个关键指令。它没有遵守上下文。它缺少了任何东西。然后你还会从 **LLM** 作为一个判断者那里得到自我解释，这与之前的原则相同，即它不仅仅提供标签，还提供标签背后的推理。然后我们将其指向需要更改的确切指令。我们正在更改系统提示词以帮助其改进，这样我们就能得到预测标签，同时也能得到这些评估及其解释。所以，我们不仅仅是优化我们的输出。我认为我们学到的一个关键经验是，人工指令中的解释，或通过 **LLM** 作为一个判断者提供的解释，这些文本都非常有价值。我认为这是我们在许多其他广泛优化方法中没有被充分利用的。它们要么是优化分数，要么只是关注输出。但你可以这样想：这些元素是在文本领域中操作的。所以我们拥有所有这些丰富的文本，它们准确地告诉我们如何改进。我们为什么不利用这些来实际改进我们的呢？所以，这就是提示词学习的基础知识，但每个人总是来问我，听起来很棒，但它真的有效吗？它确实有效，我们有一些例子可以证明。我们做了一个小小的案例研究。我认为编码智能体现在几乎每个人都在使用它们，有很多非常成功的例子，比如 **Claude Code** 是一个很好的例子，还有 **Cursor**，但也有 **CL**，它是一个更开放的版本。所以我们决定进行比较，看看我们是否能做些什么来改进。这些是我们开始时的基线。你可以看到不同模型之间的差异。显然，使用 **GPT-4** 和 **Claude** 是目前最先进的，但我们也有机会看到 **CL** 使用 **GPT-4o**，并且在 **30%** 对 **40%** 的情况下表现相当不错。然后就有了围绕它的讨论。所以这就是我们开始的地方，我们尝试优化系统提示词。你可以看到旧的提示词是什么样子。它没有规则部分。它只是非常简单，比如“你是一个云智能体。你基于这个模型构建。你在这里进行编码。”但没有规则。所以我们尝试更新系统提示词。所以有很多不同的规则。比如，在处理错误或异常时，以特定方式处理它们。确保更改与系统设计保持一致。任何更改都应附带适当的测试。所以，这实际上是构建了像一个优秀工程师应该具备的规则，而这些规则以前是完全缺失的。我们发现，通过更新系统提示词，规划表现得更好。这很简单，这就是整个概念。你可以看到这些不同的问题，我们看到以前不正确的事情现在通过简单地添加更多指令就正确地完成了。所以它很好地展示了系统提示词如何改进。我们再次使用 **SWE-bench Lite** 进行了基准测试，以获得这些编码智能体的另一个编码基准，我们仅仅通过添加规则就能够提高 **15%**。所以我认为这非常强大。所以没有微调，没有工具更改，没有架构更改。我认为这些是人们在尝试改进智能体时会追求的重要方面。但有时，这仅仅是关于你的系统提示词和添加规则的问题。我认为我们确实看到了这一点，这也是为什么我们对提示词学习和提示词优化充满热情的原因，因为它感觉是获得智能体巨大改进增益的最省力的方法。**GPT-4** 实现了接近 **GPT-4o** 的性能，后者目前在编码问题方面被认为是业内最先进的，而且成本是其三分之二，这总是非常有益的。所以，这些是一些表格。我们肯定会分发这些，以便大家可以仔细查看。但我认为我希望大家记住的重点是，**15%** 的性能提升是非常强大的。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: So this is the traditional prompt optimization where we're treating it like an ML where we have our data and we have the prompt. We're saying optimize this prompt and maximize our prediction impulse. But that doesn't quite work for LLMs, we're missing a lot of context. So what we really found is that the human instructions of why it failed. So imagine you have your application data, your traces, a data set, whatever it is. Your subject matter expert goes in and they're not only annotating correct or incorrect. They're saying this is why this is wrong. It failed to adhere to this key instruction. It didn't adhere to the context. It's missing out whatever it is. And then you also have your LLM explanations from LLM as a judge, which is same principle where instead of just the label, it provides the reasoning behind the label. And then we're pointing it at the exact instructions to change. We're changing the system prompt to help it improve so that we then get prediction labels, but we also get those evals and explanations of it. So, we're just optimizing more than just our outlet here. And I think a really key learning that we've had is the explanations in human instructions or through your own as a judge. That text is really valuable. I think that's what we see not being utilized in a lot of other broad optimization approaches. They're either optimizing for a score or they're just paying attention to the output. But you can think of it this way. It's these elements are operating in the text domain. So we have all this rich text that tells us exactly what it needs to do to improve. why wouldn't we use that to actually improve our so that's the basics of prompt learning but everybody always comes up to me and sounds great but does it actually work it does and we have some examples of when we do this so we did a little bit of a case study. I think coding agents everybody is pretty much using them at this point there's quite a few that have been really successful. I think Claude Code is a great example Cursor but there's also CL which is more of an open version of this and so we decided to take a look and compare to see if we could do anything to improve. So these are the baseline of where we started here. You can see the difference between the different models. Obviously using GPT-4 and Claude kind of the state-of-the-art there but we also had this opportunity where CL was using GPT-4o and it was working decently well at 30% versus 40. And then there was the conversation around. So this is where we started and we took a pass optimizing the system prompt here. So you can see this is what the old one was looking like. It has no rules section. So it was just very you are a cloud agent. You're built on this model. You're here to do coding. But there was no rules and so we took a pass at updating the system. So there were all of these different rules associated. So when dealing with errors or exceptions, handle them in a specific way. make sure that the changes align with the systems design. Any changes to be accompanied by appropriate test. So really just building in the rules that a good engineer would have which was completely missing before. And so we found that plan performs better with updated system problem. Pretty simple. It's the whole concept here. It's you can see these different problems and we're seeing things that were incorrect now being correctly done just by simply adding more instructions. So it really demonstrates pretty well here how those system prompts can improve and we benchmarked again with SWE-bench Lite to get another coding benchmark for these coding agents and we were able to improve by 15% just through the addition of rules. So I think that's pretty powerful. So no fine-tuning, no tool changes, no architecture changes. I think those are the big things folks reach for when they're trying to improve their agents. But sometimes it's just about your system prompt and just adding rules. I think we've really seen that and that's why we're really passionate about prompt learning and prompt optimization in general is it feels like the lowest lift way to get massive improvement gains in your agent. GPT-4 achieved performance near GPT-4o which is pretty much considered right now state-of-the-art when it comes to coding questions and it's twothirds of the cost which is always really beneficial. So these are some of the tables here. will definitely distribute this so you can take a closer look. But I think the main point I want y'all to come away with is the fact that 15% is pretty powerful improvement in our performance.

</details>

### 过拟合与评估优化

**SallyAnn DeLucia**: 现在，我们一直被问到的一个问题是，我们正在使用这些提示词学习的例子。所以，这真正重要的是，我们将使用一个数据集。很多时候，这个数据集将是一组表现不佳的例子。要么是人类对其进行了标注，发现它们不正确，要么是你的评估将其标注为不正确。所以你收集了所有这些例子，这就是我们将用来优化提示词的。所以我经常被问到，我们难道不会根据这些糟糕的例子而过拟合吗？但是存在一个**泛化规则**，即正确地修补会强制执行高级别的可重用编码标准，而不是特定于仓库的修复。我们正在进行**训练-测试拆分**，以确保这些规则能够泛化到超出本地怪癖和我们训练数据集之外。但是，如果你把它想象成你雇佣一名工程师，对吧，让他们在你的公司担任工程师，你确实希望他们对他们正在使用的数据库进行过拟合。所以，我们觉得“过拟合”可能更好的术语是“专业知识”。我们再次不是在传统世界中进行训练。我们正在努力构建专业知识，正如我们将要讨论的，我们不认为这是一次性的事情。你实际上会持续运行它。所以，更多的问题会出现。我们将根据应用程序现在看到的情况来优化我们的提示词。所以，我们实际上不认为这是一个缺陷。我们认为这反而是专业知识。我们可以根据需要进行调整，这就像人类自己完成任务时会做的那样。这只是另一组基准测试，再次证明了这种多样化的评估套件，它专注于那些对大型语言模型来说困难的任务，我们再次看到了改进的成功。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Now, a question we get all the time is we're taking these examples of perform learning. So, how this is really important is we're going to take a data set. A lot of time that data set is going to be a set of examples that didn't perform well. either a human went through and labeled them and found that they were incorrect or you have your evals that are labeling them incorrect and so you've gathered all these examples and that's what we're going to use to optimize our prompt. So I get a question all the time well aren't we going to overfit based off of these bad examples but there's this rule of generalization where mending properly enforces high level reusable coding standards rather than repo specific fixes and we are doing this train test split to ensure that the rules are generalized beyond just local quirks and whatever our training data set is. But if you think of this as you hire an engineer, right, to be an engineer at your company, you do want them to overfit to the database that they're working on. So, we feel that overfitting is maybe a better term for it is expertise. We are again not training in the traditional world. We are trying to build expertise and as we'll talk about this is not something we feel that you do once. You're actually going to continuously be running this. So, more problems are going to come up. we're going to optimize our prompt for what the application is seeing now. And then we'll So, we don't actually think it's a flaw. We feel like it's expertise instead. We can adapt as needed and mirroring what humans would do if they were taking on a task themselves. This is just another set of benchmarking again proving here that this diverse evaluation suite that focuses on the task for those difficult or tasks that are difficult for large language models and we're seeing again success with our improvements.

</details>

### 提示词学习与 **GABA** 的对比

**SallyAnn DeLucia**: 最近 **GABA** 刚刚发布，我认为这让每个人都非常兴奋。我认为之前的 **DSP** 优化器更侧重于优化某个指标，正如我们所讨论的，我们真的希望利用这些应用程序所使用的文本模态，其中包含了许多改进的原因或方式。所以我们肯定想在这里做一些基准测试。那么有多少人熟悉 **GABA**？好的，很酷。我将简单地进行高层次的介绍。我注意到它与其他新的提示词优化器之间的主要区别在于，它们在优化过程中实际使用了**积极的反射和评估**。所以这是一种**进化优化**，其中包含**帕累托（Pareto）**基础的候选选择和提示词的**概率合并**。这在底层真正做的是，我们选择候选交叉，然后进行评估。然后有一个**反射 LLM** 会审查这些评估，然后进行一些变异和更改，并重复这个过程，直到它觉得拥有了正确的提示词集。所以我认为关于 **GABA** 需要注意的一点是，它并不会只选择一个。它会尝试保留顶级的候选者，然后从那里进行合并。但我们对其进行了基准测试，提示词学习实际上做得更好一些。我认为一个关键点是，它在更少的循环次数下完成了这项工作。我认为我们稍后会讨论的一点是，你的评估看起来如何以及它们的可靠性确实很重要。我认为在 **Arize**，我们对此深信不疑，你肯定希望优化你的智能体提示词，但我认为很多人都忘记了你也应该优化你的评估提示词，因为如果你使用评估作为信号，如果对其不自信，你就无法真正依赖它们。所以，投入精力确保你对智能体提示词和评估提示词应用相同的原则，以获得一个真正可靠的信号，然后将其输入到你的提示词优化中，这同样重要。但是，在这两张图表中，粉色线代表提示词学习。我们还将其与 **MetaPrompt** 进行了基准测试，这是我之前提到的他们较旧的优化技术，它有点像围绕分数进行优化，而评估则有所不同。所以我在幻灯片上强调了，通过**评估工程**，我们能够做到这一点。所以我们确实必须确保提示词学习的评估部分具有高质量，因为如果评估本身不起作用，那么整个过程也无法奏效。所以，是的，评估决定一切。花一些时间优化提示词。再次强调，关键在于确保你有正确的指令。同样的规则也适用。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Now GABA just came out recently and I think that's something everybody's really excited about. I think the previous DSP optimizers were a little bit more focused on optimizing a metric and as we talked about we really want to be using the text modality that these applications are working in that have a lot of the reasons or how we need to improve and so we definitely wanted to do some benchmarking here. So how many people are familiar with GABA about it? All right, cool. Well, I'll just give a high level. I just noted that the main difference between their other new pro optimizers is that they are actually using this positive reflection and evaluation while they are doing the optimization. So it's this evolutionary optimization where there's this Pareto-based candidate selection and probabilistic merging of prompts. What this really does under the hood is we take candidate cross we evaluate them. Then there's this reflection LLM that's reviewing the evaluations and then making some mutations some changes and repeating until it feels like it has the right set of prompts. So I think something that is important to notice about GABA is it doesn't really choose just one. It does try to keep the top candidates and then do the merging from there. But we benchmarked it and proper learning actually does do a better job. And I think something that's really key is it does it in a lower number of loops. And I think something that we'll talk about in just a second here is that it does actually matter what your evals look like and how reliable those are. I think that's something we really feel strongly about at Arise is you definitely want to be optimizing your agent prompts, but I think a lot of people forget about the fact that you should also be optimizing your eval prompts because if you're using evals as a signal, you can't really rely on them if you don't feel confident in them. So, it's just as important to invest there, making sure you're applying the same principles that you are to your agent prompt as your eval prompts so you have a really reliable signal that you can trust and then feed that into your prompt optimization. But, in both of these graphs, the pink line is prompt learning. We did also benchmark it against MetaPrompt their older optimization technique that I was mentioning functions off optimizing around score and eval make the difference. So I highlighted on this slide here that with eval engineering we were able to do this. So we did have to make sure that the eval part of prompt learning were really high quality because again it's this only works if the eval itself is working. So, yep, evals make all the difference. Spend some time optimizing a prompt here. Again, it's all about making sure you have proper instruction. The same rules apply.

</details>

### 问答环节：评估设置与多智能体优化

**SallyAnn DeLucia**: 好的，我想回顾一下。我知道内容很多。我认为拥有上下文非常重要。但在我们进入任何研讨会之前，大家对我目前讨论的内容有什么问题吗？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: So, I want to walk through. I know there's a lot of content. I think it's really important to have context. But before we jump into any of the workshops, any questions I could answer about what I discussed so far?

</details>

**观众 1**: 我有一个问题和评论。我认为编码是拥有结构和评估的最佳例子。我有点好奇的是，你们是否有其他例子，比如与系统进行通用交互的通用提示词，这些提示词不容易量化。我只是好奇你们在这方面有什么经验。

<details>
<summary>Original English</summary>

**Audience 1**: Uh, I have a question comment. So I I think coding is the greatest example in terms of having the structure and evals. One thing I'm curious about is if you have other examples general prompts for general interactions with systems that are not as easily quantifiable. I'm just curious about any experience you guys have there.

</details>

**SallyAnn DeLucia**: 是关于通用评估的吗？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah. Is that for eval general?

</details>

**观众 1**: 嗯，我认为很清楚你如何设置评估的样子，我只是想知道你如何为其他类型的任务做这件事。所以问题是，有没有关于如何设置评估的指导？编码似乎是一个非常直接的例子。你希望确保代码是正确的，对吧？但是对于其他一些智能体任务，它就有点难了。我认为我通常给人们的建议是，我们确实有一套开箱即用的评估。你总是可以从 **QA** 正确性或关注任务等方面开始。但我总是建议，让所有利益相关者都参与进来。所以，让那些主题专家和安全负责人参与进来，真正定义成功会是什么样子，然后开始将其转换为不同的评估。所以，我认为一个例子是 **Sterling** 和 **Alex**。我有一些任务级别的评估。比如，我非常关心它是否找到了它应该找到的正确数据。它是否使用语义搜索或结构化搜索创建了过滤器，比如进行了正确的工具调用？然后我关心它是否以正确的顺序调用了事物？计划是否正确？所以要考虑每一步是什么，然后安全部门甚至会说，我们关心人们尝试越狱 **Alex** 的频率。所以，这只是将每个成功标准转换为评估。我们确实有不同的工具可以帮助你，但这通常是我给人们的框架，就是从成功开始，然后担心如何将其转换为评估。

<details>
<summary>Original English</summary>

**Audience 1**: Well I think it's just clear how you would set up what the eval would look like and I'm just wondering how you would do that for other types of so the question is is there any instruction for how you should set up your evals? coding seems a very straightforward example. You want to make sure the code's correct, right? But where some of these other agent tasks it's a little bit harder. I think the advice that I usually give folks is we do have a set of out of box. You can always start with things like QA correctness or focus on the task. But what I always suggest is getting all the stakeholders in the room. So getting those subject matter experts and security leadership and really defining what success would look like and then start converting that to different evaluations. So I think an example is Sterling and Alex. I have some task level evaluation. So I really care did it find the right data that it should have. Did it create a filter using semantic search or structured making the right tool call? And then I care did it call things in the right order? Was the plan correct? So thinking about what each step was and then even security will be well we care how often people are trying to jailbreak Alex. So, it's just taking each of those success criteria, converting it to eval. And we do have different tools that can help you, but that's usually the framework I give folks is start with just success and then worry about converting into an eval after.

</details>

**Fuad Ali**: 是的。补充一点，也许更主观的用例是，比如 **Booking.com** 是我们的客户之一，所以当他们问“什么是好的房产帖子”或“什么是一张好的图片”时，定义这些真的很难，对吧？对你来说，你可能觉得某个酒店的帖子非常有吸引力，对吧？但对其他人来说，它可能看起来非常不同。有时，正如 **Sally** 所暗示的，只要将其分为“好”和“坏”就足够了，然后从那里进行迭代。所以，比如，这是一张好图片还是坏图片？让它决定，然后从那里进一步细化到具体的背景，比如“哦，这张光线昏暗”、“房间布局不同”等等。是的。

<details>
<summary>Original English</summary>

**Fuad Ali**: Yeah. Just to add to that, maybe more of a subjective use case is for example Booking.com is one of our clients and so when they do what is a good posting for a property what is a good picture? Defining that is really hard, right? To you, you might think something is a very attractive posting for a hotel or something, right? But to someone else, it might look really different. And sometimes, as Sally was alluding to, it's sufficient to just gate it as a good, bad, and then iterate from there. So is this a good picture or bad picture? Let decide and then gate from there into specific background, this was dimly lit, the layout of the room was different, etc., etc. Yeah.

</details>

**观众 2**: 是的。你实际上正在基于我本来要问的问题进行阐述，那就是它们最终会得到一个二元结果，这不一定能给你一个前进的梯度。那么你是否有效地利用了那些问题，比如“光线昏暗”，而不是为了获得一个更连续的空间，是这样吗？

<details>
<summary>Original English</summary>

**Audience 2**: Yeah. That's that you're actually building on the question I was going to ask which is that they end up with that binary outcome which doesn't necessarily give you a gradient to advance upon are you then effectively using those questions dimly lit not to get a more continuous space is that

</details>

**Fuad Ali**: 完全正确，然后从那里，当你获得更多信号时，你可以进一步完善你的评估器，然后使用这些状态，你实际上可以将很多内容放入你自己的提示词中，对吧？所以，是的。

<details>
<summary>Original English</summary>

**Fuad Ali**: exactly right and then from there as you get more signal you can refine your evaluator further and further and then use those states and you can actually put a lot of that in your prompting itself right so yeah

</details>

**观众 3**: 我有两个问题，我不确定是否应该都问，或者你们的研讨会是否会回答。第一个是关于规则和规则部分，或者说操作规程。我很好奇你们是如何在英语中持续完善这些规则，并减少任何相互矛盾的规则带来的摩擦。这是第一个问题。另一个问题是，我很想看看关于评估的幻灯片。如果你能多谈谈你们是如何处理的，因为我在这项工作中的问题是，是否要有一个产品模拟器，然后由模拟器进行评估，或者做我喜欢做的事情，那就是构建一个端到端的评估。如果你能谈谈这个，我会很乐意。

<details>
<summary>Original English</summary>

**Audience 3**: I have two questions and I'm not sure if I should ask both of them or maybe your workshop will answer it. One is about rules and the rule section or operating procedures. I'm curious how you do you just continuously refine that in the English language and maybe reduce the friction of any contradictory rules. That's the first question. And then the other was I would love to see the slide on eval. if you could just say a little bit more on how you approach that because my issue in doing this work is whether or not to have an a simulator of the product and then the simulator is evaluating or to do what I'd like to do which is an end toend evaluation that I build but I would love to see you talk about that if you could.

</details>

**SallyAnn DeLucia**: 是的，当然。所以关于第一个问题，关于指令，我认为这绝对是你需要随着时间迭代的东西。很多时候，我们认为我们最好的办法是手动编写它们，对吧？我认为我们通过提示词优化试图做的是利用数据来动态地改变它们。我认为在移除冗余指令等方面非常出色。但目标是，我们希望摆脱静态指令。我们非常自信地认为，那并不能真正扩展。它不会带来可持续的性能。所以提示词学习的理念正是你可以随着时间运行的东西。我们甚至看到这最终会成为一个长期运行的任务，你会在其中积累不正确事物的例子，也许让人类对其进行标注，然后任务会一直运行，生成优化的提示词，然后你可以将其投入生产使用，它就像一个循环，随着时间重复。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah, absolutely. So from the first one about how the instructions it's definitely something I think that you iterate over time on them. So a lot of times I think we take our best bet we write them by hand, right? And I think what we're trying to do with proper optimization is leverage the data to dynamically change them. And is I think great at removing redundant instructions, things like that. But the goal is we want to move away from static instructions. We feel very confidently that that is not going to really scale. It's not going to lead to sustainable performance. So the idea exactly with prompt learning is something that you can run over time. We see this even a long running task eventually where you're building up examples of incorrect things maybe having a human annotate them and then the task is always running producing optimized prompts that you can then pull in production and it it is a cycle that repeats over time.

</details>

**观众 3**: 抱歉，打断一下。所以你是说，当你长时间做这件事，然后有了例子，你只是把这些例子重新输入到你的规则部分吗？

<details>
<summary>Original English</summary>

**Audience 3**: Sorry just to intervene. So, are you saying that when you're doing this over a long period of time and then you have examples, you're just running the shots back into your rules section?

</details>

**SallyAnn DeLucia**: 有点像。它会传递它，就像当我们进入我们将要构建的实际优化循环时，你会看到你正在输入数据，这些数据将构建一套新的指令，然后你就可以将其推送到生产环境中使用。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Kind of. It's going to pass it when we get to the optimization actual loop we're going to build, you'll see it as you are feeding the data in that's going to build a new set of instructions that you would then, push to production to use.

</details>

**观众 3**: 好的。

<details>
<summary>Original English</summary>

**Audience 3**: Okay.

</details>

**SallyAnn DeLucia**: 我想你的第二个问题是关于评估，以及如何开始、如何编写和如何优化它们。是这样吗？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: I think your second question was around evals and how to where to start, how to write them and how to optimize those. Is that right?

</details>

**观众 3**: 是的。

<details>
<summary>Original English</summary>

**Audience 3**: Yes.

</details>

**SallyAnn DeLucia**: 是的。所以，这是一个非常相似的方法。我认为你正在审查的数据有点不同。我应该把循环图调出来。我不知道你能不能找到。我来快速尝试一下，给大家展示一下。好了。所以，这就是我们看待它的方式，你有两个**协同演化循环**。我一直在谈论左边的蓝色循环，关于我们如何改进智能体，收集失败案例，然后将其用于微调或提示词学习。但你基本上也想对你的评估做同样的事情，即我们正在收集失败的数据集，但我们不是将失败视为智能体的输出，而是将其视为评估的输出。所以，让某人去评估评估器，或者使用**对数概率**作为置信度分数，或者使用 **LLM** 作为一个判断者来确定哪些地方不够自信。我们正在做同样的事情。所以，找出你的评估在哪里置信度低，然后你收集这些数据，进行标注，也许让某人去检查并说“好的，这里是评估出错的地方”。所以，优化你的评估提示词的过程几乎是相同的。只是，我认为人们认为他们可以随便拿一个现成的东西，或者写一次就忘掉它。但这个循环，我已经说过几次了，左边的循环只有在你的评估做得好的情况下才能发挥作用。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah. So, it's a very similar approach. I think it's the data that you're reviewing is almost a little bit different. So, I should have pulled up the the loops. I don't know if you can find it. Let me just try something really quick to show this. There we go. So, this is how we see it is you have two co-evolving loops. I've been talking about the one on the left, the blue one a lot about we're improving agent, we're collecting failures, setting that to do fine-tuning or prompt learning, but you basically want to do the same thing with your evals where we're collecting the data set of failures, but instead of thinking about the failures being the output of your agent, we're actually talking about the eval output. So having somebody go through and evaluate the evaluators or using things like log probabilities as confidence scores or LLM as a judge to determine where things are not confident. We're doing the same thing. So figuring out where your eval is low confidence and then you're collecting that annotating maybe having somebody go through and say okay this is where the eval went wrong. And so it's the same pretty much process of optimizing your eval prompt. It's just I think folks think they can just grab something off the shelf or write something once and then they can just forget about it. But this loop, I've said it a few times, but the the left loop only works as well as your eval.

</details>

**观众 3**: 抱歉，我认为我的问题实际上更静态、更基础。我的意思是，你是在说这个橙色圆圈，比如你正在为评估构建一个系统或模拟器，还是你只是在谈论系统提示词、用户提示词、评估？

<details>
<summary>Original English</summary>

**Audience 3**: Sorry, I think my question is actually way more static and basic. It's do you are you talking about this orange circle as are you building a system or simulator for the eval or are you just talking about system prompt, user prompt, eval?

</details>

**SallyAnn DeLucia**: 是的，我认为我们现在谈论的更多是不同类型的提示词。你当然可以进行模拟，但我认为那是一个完全不同的研讨会。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah, I think it's more right now what we're talking about is just the different prompts. You could definitely do simulation, but I think that's a whole different workshop.

</details>

**观众 3**: 谢谢。在我们进入桥牌俱乐部之前，还有其他问题吗？要切换回去吗？

<details>
<summary>Original English</summary>

**Audience 3**: Thank you. Any more maybe questions before we get to the bridge club? Any switch back?

</details>

**SallyAnn DeLucia**: 好的。嗯，这里有一个 **QR** 码，用于我们的提示词学习仓库。我会给大家几分钟时间来获取它。把它弄到你们的笔记本电脑上。我知道添加这个 **QR** 码并像 **AirDrop** 一样有点笨拙。我不确定有没有更好的方法。我也可以在这里给大家展示一下，如果你想找到它的话。它会在我们的 **Rise AI** 仓库中，在提示词学习下面，你只需要克隆它。我们将在本地运行它。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: All right. So here is going to be a QR code for our prompt learning repo. So I'll give everyone a few minutes to get such with that. Get it on your laptops. I know it's a little bit clunky to add this QR and AirDrop it. was not sure a better way. I can just show you also here if you want to find it. It is going to be in our Rise AI repo here and under prompt learning and you just want to clone that. We are going to be running it locally here.

</details>

**观众 4**: 你回到有 **URL** 的那个页面。

<details>
<summary>Original English</summary>

**Audience 4**: You go back to the page with the URL.

</details>

**SallyAnn DeLucia**: 是的。抱歉。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yes. Sorry about that.

</details>

**观众 4**: 哦，不，有 **URL** 的那个页面。哦，

<details>
<summary>Original English</summary>

**Audience 4**: Oh no, the page with the URL. Oh,

</details>

**SallyAnn DeLucia**: 我们会给大家几分钟时间来获取。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: we'll give folks just a few minutes to get

</details>

**观众 5**: 你们在构建新的智能体或任何可以评估的工作时，流程是怎样的？你们会先尝试原型，然后看看哪里有问题，再进行评估吗？

<details>
<summary>Original English</summary>

**Audience 5**: What do you What's your process when you're building a new agent or work for anything that could be evaluated? Do you guys start by just try something prototype and then see where it's bad and then do eval?

</details>

**SallyAnn DeLucia**: 是的，我认为对此有不同的看法。我们的观点是，评估绝不应该阻碍你。你需要开始，你需要快速构建一些东西。我们不认为你应该浪费时间进行评估。我认为在某些情况下，使用现成的评估会有帮助，因为梳理数据很困难。我们用 **Alex** 体验过，当你刚开始时，手动运行测试和审查会很痛苦。所以我认为有评估是有帮助的，但不应该成为障碍。可以先使用现成的评估，然后随着迭代，你了解了问题所在，然后随着你改进智能体，你开始完善你的评估。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah, I think there's different perspectives on this. Our perspective is Evals should never block you. You need to get started and you need to just build something really scrappy. We don't think you should waste time doing eval. I think it's helpful to pull something out of the box sometimes in those situations just because it's hard to comb through your data. that's something we've experienced with Alex when you're getting started just running a test manually reviewing it's painful. So I think that having eval is helpful but shouldn't be a blocker. Pull something off the shelf maybe start with that then as you're iterating you're understanding where your issues are then you're starting to refine your evals as you're refining your agent.

</details>

**观众 5**: 是的。最后一个问题。是的。

<details>
<summary>Original English</summary>

**Audience 5**: Yeah. One last question. Yeah.

</details>

**观众 6**: 那么优化系统，比如子智能体或命令，或者你们如何考虑这种多智能体的情况，这有意义吗？

<details>
<summary>Original English</summary>

**Audience 6**: So it makes sense to optimize the system sub-agents or commands or how are you thinking about this multi-agent?

</details>

**SallyAnn DeLucia**: 是的。所以问题是，你是否只使用一个提示词，或者你如何考虑这种**多智能体**的情况？我认为我们现在认为这是一种独立的任务，可以独立优化你的提示词，然后运行测试，以进入将所有智能体一起运行的智能体模拟。但目前，我们的方法有点孤立，但我肯定看到了一个未来，我们将达到子智能体和现在正在发生的一切的标准。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yeah. So the question is are you just doing one single prompt or how do you think about this in a multi-agent? I think we're thinking that this right now is independent tasks that can optimize your prompts independently and then running tests to get into the agent simulation of running them all together. But right now, our approach is a little bit isolated, but I definitely see a future where we're going to meet the standard of sub-agents and everything else that's going on right now.

</details>

**Fuad Ali**: 不，我认为这非常准确。而且，即使在单个智能体用例与多智能体用例中，最终每个智能体都可能专业化。它们可能有自己需要学习的提示词。所以我认为这种隔离的做法对整个多智能体系统仍然有益，可以随着时间的推移在交接等场景中传递，并使其变得非常专业化。所以我想，我们讨论的关于过拟合的问题，也是我们一直被问到的问题，但作为一名工程师，你确实希望对你的代码库进行过拟合。你不想过于泛化，以至于你不再擅长处理代码库中的特定工作。是的。

<details>
<summary>Original English</summary>

**Fuad Ali**: No, I think that's pretty accurate. And also I mean even in a single agent use case versus a multi-agent use case ultimately each of those agents may be specialized. They may have their own prompts that they need to learn from. So I think doing this in isolation still has benefits for the multi-agent system as a whole that can pass on over time in scenarios hand off etc and making something really specialized. So I guess what we're talking about with the overfitting as well which is again question we get all the time but really you want to be overfit on your code base as an engineer. You don't want to be so generalized that you're no longer good at picking up specific works in your code base. Yeah.

</details>

**SallyAnn DeLucia**: 好的。大家都在阅读模式了吗？好的。有人需要帮助吗？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: All right. Everybody getting to read the mode. Okay. Anybody need any help?

</details>

### 研讨会：JSON 网页提示词优化

**SallyAnn DeLucia**: 好的。所以，我们将为此使用 **OpenAI**。所以，我认为接下来我会让大家做的就是花点时间获取你的 **API 密钥**。我们稍后会用到它，然后我就会开始讲解我们的笔记本。所以，我们将演示一个 **JSON** 网页提示词的例子。你会在这里的“notebooks”下找到它。我们会给大家一点时间来把它取出来。我们将对这个例子做一些小的调整，只是为了让它运行得更快，效果更好。首先，这个例子是做什么的？这将是一个非常简单的 **JSON** 网页提示词例子。如果有人有想要一起编写代码的提示词或用例，**Fuad** 和我非常乐意帮助大家将你们正在处理的内容适配到这里的用例中。这是一个非常简单的例子，只是为了演示原理。我们将使用它，我们当然可以进行实验。如果你想替换任何其他提供商，我们也可以帮助你完成。但这个目标本质上是使用数据集迭代不同版本的提示词。我们将进行优化。所以首先，我们显然需要进行一些安装。我将让大家更新它。它显示的是大于 **2.0.0**。但我们今天实际上将使用 **2.2**。然后接下来是为了让它运行得更快一些。所以我们将以异步方式运行一些缺失的东西。所以你也可以继续在单元格中添加这些行。好的，大家都能跟上吗？我不想走得太快。看起来大家都在点头。好的。我们来谈谈配置。我在讲幻灯片的时候已经稍微提过一点。我们将进行一些循环。所以总体的想法是，我们从一个包含一些反馈的数据集开始，我们会在拿到数据集后查看它。但是你会希望有**人工评估**，比如标注，无论是自由文本、标签，或者你希望有一些评估数据。但反馈非常重要。这就是它能够奏效的原因。然后，我们将把它传递给 **LLM** 进行优化，然后它基本上会进行评估。所以，在优化过程中，它会使用该数据集来运行并评估是否应该继续优化。然后，它还会为你提供数据，你可以用这些数据来衡量它在生产环境中输出的哪些提示词。所以我们将进行一些配置。我在这里写出了每个配置的含义。我们有**样本数量**。这控制了样本数据集的行数。你可以将其设置为零以使用所有数据，或者你可以使用一个正数来限制，以进行更快的实验。所以我认为有时人们会使用不同的方法。有时你希望快速进行，所以你设置一个较低的样本数。有时你希望更具代表性，所以你增加它。我在这里将其设置为 **100**。请随意调整。然后是**训练集拆分**。我认为大家可能对训练-测试拆分的概念非常熟悉，但它只是我们希望将多少数据用于训练？再次强调，这就是我们实际用于优化的数据。然后，在测试新提示词时，我们希望使用多少数据进行测试？然后是**规则数量**。基本上是用于评估的特定规则数量。这只是决定使用哪些提示词。所以，当我们运行这些循环时，我们会输出很多不同的提示词。所以这只是说明我们应该使用多少个进行评估。然后这里有一个关键点，**优化循环次数**。这设置了每个实验要运行多少次优化迭代。每个循环基本上都会生成这些输出，评估它们并完善提示词。所以这些只是控制实验范围、数据拆分，以及我们希望使用多少数据来完成整个提示词学习循环。所以你可以按原样运行这些，或者如果你想调整它们，请随意。然后下一步非常简单。我们只需要获取 **OpenAI API 密钥**，如果你还没有设置的话。所以，它会弹出一个获取通道。我在这里快速给你展示一下。它会弹出来。你可以在那里粘贴你的 **API 密钥**，然后我们再开始查看数据。如果有人遇到任何问题，请告诉我。好的。我想这个特定的部分，我们通过这个。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: All right. So, we are going to be using OpenAI for this. So, I think the next thing that I'll have everyone do is probably spend some time just grabbing your API key. We'll get to it and then I'll start walking through our notebook here. So, we are going to be doing a JSON webpage prompt example. So, you're going to find that under notebooks here. And so we'll give everybody a second to pull it out. There's going to be just some slight adjustments we're going to add to this example just to make it run a little faster and work a little better. The first is what this is even doing this is going to be a very simple example for just a JSON web page prompts. If anybody has a prompt or use case that they want to code along, Fuad and I are absolutely glad to help adapt what you're working on to the use case here. It's something very simple just to demonstrate the principles and we are going to be using we can definitely experiment. If you want to swap out any other providers that you want to use, we can also definitely help you do that. But the goal of this is essentially going to be to iterate through different versions of a prompt using a data set. And we will optimize. So the first thing is obviously we need to do some installs. I am just going to have you all update it. It says greater than 2.0.0. But we're going to actually just use I think 2.2 today. And then the next thing is just to make this run a little faster. So we're going to run things in async which is missing. So you can go ahead and add these lines in the cell as well. All right, everyone follow along and I never want to move too fast. Seems to head nods. Cool. Let's talk about configuration. So I talked about it a little bit when I was going through the slides. So we are going to be doing some looping. So the general idea is we start out with the data set with some feedback in it and we'll look through the data set once we get it. But you're going to want to have either human evaluation. So annotations, either free text, labels, or you're going to want to have some evaluation data. But the feedback is really important. That's what makes this work. We're going to then, pass that to LLM to do the optimization and then it's going to basically have eval. So as it's optimizing, it's using that data set to then run and assess whether or not it should keep optimizing. And then it also provides you data that you can use to gauge which of the prompts that it outputs in a production setting. So we're going to do some configuration. So I've wrote out here what each of these means. So we have the number of samples. So this controls how many rows of the sample data set. You can set to zero to use all data or you can use a positive number to limit for faster experimentation. So I think that sometimes folks use different approaches here. Sometimes you want to just move really quick so you set a low sample. Sometimes you want to be a little bit more representative so you up it. I have it here set as 100. Feel free to adjust. And then the next thing is train split. So I think folks are probably pretty familiar with the concept here of a train test split, but it's just how much of the data do we want to use into our training? Again, that's what we're using to actually optimize. Then how much of it do we want to use when we're testing when we're running the eval on the new prompt? And there's number of rules. Basically the specific number of rules to use for evaluation. This just determines which prompts to use. And so this is as we're running these loops, we're outputting a bunch of different prompts. So this is just saying how many we should use for evaluation. And then key one here, number of optimization loops. So this sets how many optimization iterations to run per experiment. And each loop basically generates those outputs, evaluates them and refineses the prompt. And so these just control the experiment scope the data splitting just went through the whole prompt learning loop and and how much data we want to use. So you can just run these as you are or if you want to adjust them feel free. And then the next step pretty simple. We're just going to grab that open AI key if you haven't already set that up. So, get passage is going to pop up. I'll show you here quick. It's going to pop up there. You can just paste in your API key there before we start looking at the the data a little bit. Just if anybody runs into any issues, you just give this away. All right. I think this particular we get through this

</details>

**观众 7**: 我做得很好，但如果你有一个免费的，你想给我。

<details>
<summary>Original English</summary>

**Audience 7**: I'm doing good but if you have a free one you want to give me that

</details>

**SallyAnn DeLucia**: 我希望有。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: I wish

</details>

**观众 7**: 好的，我们来谈谈数据。我们为你提供了带有查询的数据。你可以在这里看到我们正在根据上面设置的配置进行 **80/20** 拆分。我将在这里提取这个训练集，然后我们来看看。

<details>
<summary>Original English</summary>

**Audience 7**: all right let's talk about the data so we provided data with you with queries you can see here that we're doing the 8020 split based off of configuration we set above I'm just going to pull this train set here and let's just

</details>

**观众 8**: 是的，我运行了，因为在减 **50**。

<details>
<summary>Original English</summary>

**Audience 8**: Yeah, I run because in the minus 50

</details>

**SallyAnn DeLucia**: 哦，是的。你说的对。那是我的一个错误。是的，是 **50**。嗯，我们来看看这个数据集是什么样子的。不。只是为了让大家理解。所以，从这里开始，有一些基本的输入和输出。在这些我打印出来的行中，我们没有任何反馈，但你可以想象，你可以有不同的正确性标签、解释，任何真实的验证数据都可以是任何你想要的样子。有些人使用多个评估反馈，有时是组合，但你确实希望有输入和输出，这样才能使用。我的训练集输出应该和你的一样吗？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Oh, yep. You're right. That's a mistake on my part. Yeah, it is the 50. Let's take a look at what this data set looks like. No. Just so folks can understand. So starting here with some just basic input and output. Transcript we don't have any of the feedback in these rows that I printed out here but you can imagine you can have different correctness labels here explanations any real validation data can be whatever it is that you'd like it to be. Some folks use multiple eval feedback sometimes it's a combination but you really want to have the input and output that will use that way. Should my output of train set be the same as you?

</details>

**观众 9**: 不一定。取决于。

<details>
<summary>Original English</summary>

**Audience 9**: Not necessarily. Depends on

</details>

**SallyAnn DeLucia**: 我不知道头部是否排序。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: I didn't know if head was sort or not.

</details>

**观众 9**: 这完全取决于是什么，但我们可以看看，如果你这样做，这应该和你的一样，也许只是为了确认。

<details>
<summary>Original English</summary>

**Audience 9**: It all depends on what the the same but we could look at if I did this this should be the same for you maybe just to make sure.

</details>

**观众 10**: 是的。你就是这个意思。好的。是的。快速提问。输入是否可以是聊天记录，而不仅仅是？

<details>
<summary>Original English</summary>

**Audience 10**: Yeah. That's what you're saying. Okay. Yeah. Quick question. Um, is it possible for the input to be a chat history and not just

</details>

**SallyAnn DeLucia**: 好问题。我认为这取决于你想要做什么。如果你只是做一个简单的输入系统，你希望它是一对一的。你不想给它大量与你正在优化的提示词无关的对话数据。我们通常只使用单个输入，但我认为有些应用程序可以进行对话级别的输入。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Great question. So, I think it depends on what it is you're trying to do. If you're doing just a simple system of the input, you want it to be one to one. You don't want to give it a ton of conversation data that's not relevant to the prompt that you're optimizing. we generally just use the single input but I think that there are applications that you could do conversation level inputs.

</details>

**观众 10**: 是的。因为失败常常发生在对话中间，对吧？所以如果你只输入原始任务，那么你在对话中间遇到失败的概率就会很高。

<details>
<summary>Original English</summary>

**Audience 10**: Yeah. Because because quite often the failure is somewhere mid-conversation right. So so if you put just the original task in then the probability of you hitting a failure in the middle of the

</details>

**SallyAnn DeLucia**: 完全正确。所以那种情况下，我们通常看到的是不同的行，比如每一次来回都像独立的行，因为你可能会评估它们每一个，而且说实话，可能会对它们每一个都获得人工反馈。所以我们通常会那样把它们分开。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: totally. So in that case, what we generally see is different rows of having each of the back and forths be independent rows because you're probably going to evaluate each of them and honestly probably get the human feedback on each of them. So we usually separate them out in that way.

</details>

**观众 10**: 但这是一个很好的观点。如果你总是只关注第一轮，那可能有很多冗余。你肯定需要跳过对话的某些部分。

<details>
<summary>Original English</summary>

**Audience 10**: But it's a good point. If you just always are focusing on the first turn, there's probably a lot of redundancy there. you definitely will have to say over parts of the conversation

</details>

**观众 11**: 以及我们如何区分指令，我们也有一些上下文。所以

<details>
<summary>Original English</summary>

**Audience 11**: and and how we can differentiate instructions and we have some context also. So

</details>

**观众 12**: 不应该触及上下文。它应该只操作系统指令或提示词上下文，它应该是静态的，不应该根据答案改变我的上下文。

<details>
<summary>Original English</summary>

**Audience 12**: should not touch the context. It should only whatever the manipulate the system instruction or the prompting context it should be the static it should not be based on the answer it will change my context.

</details>

**SallyAnn DeLucia**: 是的。你说的意思是，查看输入时，可能有一个工具卷上下文，你正在传递它。你绝对可以将其包含在你的数据集中，这样应用程序就能理解，或者说提示词学习的 **LLM** 能够理解所有可用的数据。所以如果你愿意，你可以将其作为额外列传递。大多数人从输入和反馈开始。但你绝对可以添加你认为相关的其他数据，而且在重新运行实验进行测试时，你肯定总是希望拥有回答问题所需的数据。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yes. What you're saying is looking at the input there might be a tool volume context you're passing that in. You can absolutely include that in your data set so that the application understands what other or not the application but the prompt learning LLM can understand all of the data that's available. So you can just have that passed in as extra column if you want. Most people start with just input and the feedback. But you can absolutely add what other data you think is relevant and if when for the rerunning when we're doing the experiment of testing you'll definitely always want to have the data that would be required to answer

</details>

**观众 12**: 即使是非常简单的一些调用，或者一些上下文，它正在拉取一些 **API** 调用，无论提示词工程如何，它都应该基于输出，获得正确的输出，以及无论上下文是什么，加上我所做的工具调用，**API** 调用，所有这些上下文工程，然后最终确定。

<details>
<summary>Original English</summary>

**Audience 12**: any even very simple some call some call or some context it is pulling some API call whatever the prompt engineering it should be based on the out getting the output right and whatever the context front my plus whatever the tool call I have done API call all the context engineering and then last finalize

</details>

**SallyAnn DeLucia**: 完全正确，是的。所以再次强调，在这一点上，我们只是在测试一个提示词，而不是那种端到端的测试，但你肯定希望拥有所有流入你正在优化的提示词的数据。所以，如果你的系统提示词接收用户输入，例如来自外部 **API** 的一些数据，你肯定会希望提供所有这些数据。这有道理吗？因为你是在说，轨迹，工具调用，以及智能体将根据工具调用做什么，这就是你想要优化的。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: totally yeah so again at this point we're testing just one prompt and not that end to end but you definitely want to have everything that is flowing into the prompt that you're optimizing so if your system prompt takes in the user input for example some data from an external API you would definitely want to provide all of that data does that make sense Because you're saying that the the trajectories the tool calls and what the agent's going to do depending on what the tool call was is what you're trying to optimize.

</details>

**观众 12**: 是的，没错。我们只是因为我们试图重放并优化其中的一个步骤。我们绝对不想完全孤立地进行。所以，如果有一些数据流入那个提示词，那就是上下文，它正在使用它来产生输出，对吧？所以我们希望确保我们包含了它。我们不想排除任何东西。但如果数据是在不同的步骤中产生的，那可能就不需要那样做。这就像思考一下，对于我们正在尝试优化的这个步骤来说，什么才是相关的。

<details>
<summary>Original English</summary>

**Audience 12**: Yeah, exactly. We want to just because we're trying to replay and optimize one step of it. We definitely don't want to do it completely in isolation. So if there's data that flows into that prompt that's context that's using that's producing the output, right? So we want to be sure that we're including that. We don't want to exclude anything. But if it's data that comes at a different step probably not then you don't want to do that that way. It's just think about what's relevant for the the step that we're trying to optimize in this.

</details>

**SallyAnn DeLucia**: 好的。还有其他问题吗？好的。很酷。所以我们将设置我们的初始系统提示词。你可以看到这非常非常基础。我们肯定能做得比这好得多，但我只是想说明一些我们将要测试和优化的东西。所以我们只是说“你是一个 **JSON** 网页创建专家。你的任务是输入。”然后，我们看到的所有这些输入都将是我们实际生成输出并尝试优化的内容。现在我之前已经提过这一点。评估器对于使这一切工作至关重要，对吧？所以我们将初始化两个评估器，它们使用 **LLM** 作为一个判断者来评估生成输出的质量。所以我们正在使用 **LLM** 作为一个判断者。如果你有任何其他基于代码的评估，无论你需要做什么来评估，你都可以替换掉它们。但我们将进行输出评估。这将是一个全面的评估器，它根据输入查询和评估规则评估 **JSON** 网页的正确性。它将提供“正确”或“不正确”的输出标签。所以这是一个非常简单的二元分类。再次强调，你可以使用多标签。然后它还将提供详细的解释。然后我们有一个规则检查器。这是一个更专业的评估器，它执行细粒度的逐条规则分析。它检查每条规则是否合规。然后这两个都将生成反馈，这些反馈将进入我们的优化循环，以迭代地改进系统提示词。解释、规则违反指南。我们将通过提示词学习优化器来创建更有效的提示词。我这里有一些导入。我们来看看实际的评估输出有什么。我们确实有一些规则在这里。它们将在一个仓库中。所以我们将把它作为一个文件打开。我们有这个 **LLM** 提供商，我们在这里使用 **OpenAI**。然后我们将进行分类评估器。所以，我们只是称之为输出评估。我们有一个评估模板，我们正在从底部读取。然后我们只有“正确”和“不正确”的选择。现在我们将标签映射到分数。有时能够添加或评分会很有帮助。有时数字比查看一堆标签更容易。如果你有多类别用例，你可以选择性地映射这些。你可以相应地设置分数。但这些将是我们的选择，就像我们希望 **LLM** 作为一个判断者遵守的规则。然后我们在这里所做的就是获取结果。我让它进行一些打印，这样你就可以查看。所以这会与你在笔记本中看到的内容略有不同。所以我将在这里暂停。如果你想更改你版本中看到的代码，现在是时候了。评估器的设置对所有关键部分来说都有意义吗？它将是规则。它将是输出。当然还有我们的模板。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: All right. Any other questions coming? All right. Cool. So we're going to set up our initial system prompt. You can see this is something very basic. We'll definitely I think we can do a whole lot better than this, but I just want to illustrate something that we're going to test and optimize. So we're just saying you are an expert in JSON web page creation. Your task is input. And then so all these inputs that we're seeing are going to be what we're actually generating outputs for and trying to optimize. Now I already touched on this. Evaluators are extremely important to make all of this work, right? So we're going to initialize two evaluators that use LLM as a judge to assess the quality of generated outputs. So we are using LLM as a judge. If you have any other codebased evaluations, whatever you need to do to evaluate, you can definitely swap those out. But we're going to do evaluate output. This is going to be a comprehensive evaluator that assesses the JSON webpage correctness against the input query and the evaluation rules. It's going to provide an output label of correct or incorrect. So pretty simple binary. Again, you can use multi-label. And then it's going to have the detailed explanations as well. And then we have a rule checker. This is a more specialized evaluator that performs a granular rule by rule analysis. And it examines if each rule was compliant. And then both of these are going to generate feedback that goes into our optimization loop to iteratively improve the system prompt. Explanation, rule violations guide. And we'll get to this the prompt learning optimizer and creating the more effective prompts. So I have some imports here. Let's take a look at what the actual eval output has. So we do have some rules that are in in here wait they're going to be in a repo. So we're going to open that as a file. We have this llm provider and we're using open AI here. And then we're going to do our classification evaluator. So, we're just calling it evaluate output. It's al we have an evaluation template that we're reading from the bottom here. Then we just have choices correct and correct. Now we're mapping a label to a score. Sometimes it's helpful to be able to add or score. Sometimes a number is easier than just looking at a bunch of labels. It is optional you want to map these if you have a multiclass use case. You can set the scores accordingly. But these are just going to be our choices the rails that we want our LLM as a judge to adhere to. And then all we're doing here is getting our results. I have it doing some printing so you can take a look. So this is going to be slightly different than what you're seeing in the notebook. So I'm just going to pause here. If you want to make the code changes from what you're seeing in probably your version, this is a good time for that. Does the setup of the evaluator make sense to all the key. It's going to be the rails. It's going to be the output. And of course our template.

</details>

**观众 13**: 是的，你将需要在这里获取你自己的 **OpenAI** 密钥来设置。

<details>
<summary>Original English</summary>

**Audience 13**: Yeah, you will want to grab your own OpenAI key here to set

</details>

**SallyAnn DeLucia**: 如果你想使用不同的提供商，我们可以帮助你。我们可以帮助你替换掉它，这会对任何人都有帮助。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: and we can help you if you want to use different provider. We can help you swap this out that is helpful to anybody.

</details>

**SallyAnn DeLucia**: 好的，我将开始带领大家了解输出生成。所以这只是你可以想象成你自己的智能体逻辑，或者你正在测试的部分。这只是一个实际生成 **JSON** 输出的函数。我们在这里使用 **JSON** 响应格式，温度设置为零，以获得一致的输出。它接收一个数据集，一个系统提示词，为所有行生成输出，并返回结果进行评估。它在每次迭代期间被调用以生成输出。所以这就像我们正在编写的实验函数。所以当我们传入数据时，它会生成新的提示词。我们需要一种方法来测试它、评估它、理解我们如何在这里推动进展。所以这就是它的全部内容。所以这是一个非常直接的函数，就叫 `generate_output`。我们有那个输出模型。再次强调，我们正在使用 **OpenAI**。如果有人需要帮助切换，我很乐意提供帮助。我们正在使用响应格式，因为我们在这里处理 **JSON**。所以我们知道你刚刚提示了什么。我的意思是，一些较新的模型在这方面表现不错，但使用响应格式确实很有帮助。然后我们还将温度设置为零。这里就是我们传入所有数据的地方。所以数据集，因为我们希望在所有测试数据上运行它，系统提示词将是输入。所以当我们进入优化循环时，我们将向它传入一个新的提示词和数据集，然后进行评估。我们已经传入了输出模型、并发性等所有好东西。它只是返回所有输出。对于当前一代的模型，因为这个模型在 **AI** 术语中基本上是“古老”的，你仍然会建议将温度设置为零，还是会尝试鼓励一些创造性？

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Okay, I'm going to start walking you through the output generation. So this is just you can imagine this as your own agent logic or the the part that you're testing. This is just going to function that actually generates the JSON outputs. We're using for one here with JSON response format zero temperature for consistent outputs. It's taking a data set a system prompt generates outputs for all rows returns the results for evaluation. And it's called during each iteration to produce output. So this is our experimentation function that we're writing. So as we're passing in data, it's producing new prompts. We need a way to test it, evaluate, understand how we are moving the needle here. So that's all this is. So it's pretty straightforward function just called generate output. We have that output model. Again, we're using OpenAI. If anybody wants help switching things around, happy to help. We are using response format because we are dealing with JSON here. So we know that what you just prompted. I mean some of the the newer models are decent at it, but using response format is really helpful. And then we're also setting temperature to zero. And here is where we're passing all the data in. So the data set because again we want to run this on all of the the testing data, the system prompt that will be input. So as we get to the optimization loop, we're going to be passing in a new prompt to this with the data set and then evaluating. We have our output model that we've already passed, concurrency, all that good stuff. And it's just returning all of the outputs there. Would you for the current generation of models since this one's basically in AI terms ancient would you still recommend setting the temperature to zero or would you actually want to try to encourage some of the creativity to

</details>

**观众 14**: 我认为这有点取决于用例和你想做什么。你当然可以尝试实验，并从一致性有多重要的角度来看待它。对于像 **JSON** 网页这样的东西，我认为一致性可能意味着温度为零是有道理的，但我绝对不认为对于每个智能体、每个用例，你都想使用零。

<details>
<summary>Original English</summary>

**Audience 14**: I think it depends on the use case a little bit and what you're you're trying to do. You can definitely experiment that and take it through the lens of how how important is consistency to use something I feel JSON web page I feel consistency probably temperature zero makes sense but I definitely think not for every agent every use case do you want to use zero

</details>

**SallyAnn DeLucia**: 还有其他问题吗？好的。附加指标。我们之前谈到过，我们正在使用一些**分数映射**。这部分是可选的，你可以使用对你来说有意义的指标。我们不直接将其作为我们是否优化的依据，但它不是我们成功的唯一指标。在这里，我们将计算一些非常基本的指标。你可以选择**准确率**、**F1 分数**、**精确率**、**召回率**，只是一些基本的分类指标，以便我们理解。因为我们正在使用二元映射分数，所以我们可以这样做。这就是你在这里看到的情况。我们映射到二元，然后根据分数计算指标。所以这是一个非常简单的辅助函数。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: any other questions get moving all right additional metric so we talked about before that we are using some score mapping this part is optional you want to use the metrics that make sense to you we're not directly using this as we are using it to know whether or not we optimize but it's not we're using this as our sole indicator for the success. Here we are just going to calculate some very basic metrics. It's just you can choose something accuracy, F1 precision, recall just some basic classification metrics for us to understand and because we are using binary mapping scores we can do that. And so that's what you're seeing happen here. We're mapping to binary and then just based off the score we calculate the metric. So very simple helper function here.

</details>

### 优化循环与结果保存

**SallyAnn DeLucia**: 好的，好东西来了，**优化循环**。我们做到了。好的，这个单元格实现了核心的提示词优化算法。这是一个三部分的过程。所以我们想要**生成和评估**。使用当前提示词在测试数据集上生成输出并评估其正确性。我们想要**训练和优化**。如果结果不令人满意，则在训练集上生成输出，评估它们，使用反馈来改进提示词，然后**迭代**。所以我们希望重复这个过程，直到达到阈值或所有循环完成。所以如果你还记得上面，我们将其设置为五个循环。然后我们可以根据这个重复，或者达到阈值。它将跟踪所有迭代的指标。所以会返回详细的结果，包括训练-测试准确率分数、优化的提示词和原始值。正如我一开始提到的，当我们对实验运行这些不同的循环时，我们会产生很多不同的提示词。所以我们会得到这些信息，你可以使用它们。这些是我们的关键参数。我会在我们看到代码时讲解它们，但只是提前提醒一下。这是停止优化的目标准确率分数。它也可以是任何其他指标，你会看到我们有一个分数，所以你可以确定优化迭代的循环次数。我们已经设置了那个分数，然后是规则数量。再次强调，这些是我们已经设置的一些配置。好的。所以，优化循环。这将接收我提到的所有那些参数。它只是启动，说“嘿，我们开始了”。它将进行初始评估，这样我们就能了解事情是如何开始的。再次强调，你也可以传入数据。你可以跳过这个初始评估。我们在这里一开始就运行它。但如果你是在生产环境中运行，你可能已经有了评估。然后它将根据我们的初始评估来评估阈值。再次强调，当我们从生产环境运行时，这可以跳过，但我们希望从零开始，这样我们就能真正体验到它。然后它开始循环。所以我们正在生成输出。它将其设置为训练输出。所以当我打印训练时，你看到了输出。我跳过了一些。然后它还会设置正确性、解释、任何规则违反。然后我们将实际使用我们的**提示词学习优化器**。所以这与 **SDK** 一起提供，你可以使用 **Arize** 的提示词学习 **SDK**。所以我们正在发送那个提示词优化，最佳选择，然后是 **API**。所以，正如我们在幻灯片中讨论的，在底层，它接收反馈，接收原始提示词，并尝试优化以获得更好的结果，然后输出提示词。然后还可以添加一个评估器。所以再次强调，我们希望获得的三个反馈列是正确性、解释，以及是否有任何规则违反。然后从那里，我们启动了优化器，并使用我们的训练集输出那些反馈列进行优化，然后你可以添加任何上下文大小限制。下一步，优化器将再次接收我们的数据，生成一个提示词，我们想要评估，这样我们就能理解我们做得如何，这个代码块在这里正在做什么，所以尝试再次获取新的提示词，包括所有这些细节，获取我们的结果，然后我们对测试集也这样做，然后我们得到分数和指标值，然后进行检查，然后我们再次重复所有这些，直到我们达到阈值以上，或者我们达到了最大循环次数，然后返回我们的结果。所以这就是这里将要发生的事情。对此有什么问题吗？只是一些结果保存函数，这里有更多的辅助函数。所以我们显然希望保存所有这些结果。我们不希望它们只是临时的，我们以后无法再次访问。所以只是保存它们。你也可以保存所有单个实验，这样你就可以在最后拥有所有这些数据。我们将能够提取这些数据，并确定最佳提示词是什么。但这些只是非常基本的辅助函数。我不会花太多时间只是在一天结束时将它们保存到 **CSV** 中。现在我们执行它。所以这个单元格运行提示词优化实验，保存结果。我们得到 **JSON** 格式，**CSV** 格式。它包括迭代次数、规则数量、测试、训练、准确率分数，所有我们实际需要评估这个东西是否成功的数据，然后我们将开始获取结果。所以，这确实需要相当长的时间才能运行。所以我们将运行它，我认为这将是一个很好的讨论点，但当你运行它时，你会开始看到不同的循环。输出也会出来。是的，我们会在它运行时逐步处理。它可能需要 **20-30** 分钟才能运行，但我很乐意回答任何问题，并帮助任何遇到问题的人。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: All right, the good stuff the optimization loop. We made it. Okay, so this cell implements the core prompt optimization algorithm. It's a three-part process. So we want to generate and evaluate. So generate outputs using the current prompt on the test data set and evaluate their correctness. We want to train and optimize. If results are unsatisfactory, generate outputs on the training set, evaluate them, use the feedback to improve the prompt, and then iterate. So we want to repeat until either the threshold is met or all the loops are completed. So if you remember above, we're setting that to just five loops. And then we can repeat based off of that or the thresh met it's going to track metrics across all the iterations. So turn to detailed results including a train test accuracy scores the optimized prompts and the raw value. So as I mentioned at the beginning as we're running these different loops on the experiments we're going to be producing a lot of different prompts. And so we're getting that information back that you can use. And these are our key parameters. I'll go through them, as we get to the code, but just to give you a heads up. This is the target accuracy score to stop optimizations. It could also be whatever other metric you'll see, we have a score so you can determine the number of loops of the optimization iterations. We've set that score and then the number of rules. Again, these are some configurations we've already set. Cool. So, optimization loop. This is going to take in all of those parameters that I've mentioned there. It just kicks off saying hey we're starting it's going to do the initial evaluation so we understand how things are starting off. Again you can pass in data too. You can skip this initial evaluation. We're running it at the start here. But if you were running production setting, you might already have evalu. And then it's going to assess the threshold against our initial valuation. Again, this could be skipped when we're coming from a production setting, but wanted to start us off from scratch so that we can get a real feel for this. And then it starts the loop. So, we're generating output. It's setting that as the train output. So, when I printed train, you saw the outputs. I skipped ahead there. And then it also will set correctness, explanation, any rule violations. And then we'll actually use our prompt learning optimizer. So this comes with the SDK the prompt learning SDK that you can use with the rise. So we're sending in that prompt optimization the best choice and then that API. So under the hood as we talked about in the slides taking in that feedback taking in the original prompt and trying to optimize to get better results and then spinning out prompt and then can also add an evaluator. So again those three feedback columns we're looking to get back as correctness explanation for that if there are any rule violations and then from there we just kicked off the optimizer and optimize with our train set output those feedback columns again and then any context size limitations you want to add next step so the optimizer again is going to take our data produce a prompt we want to evaluate so we understand how we're doing what this code block doing is doing here so trying to get that new prompting again with all those details getting our result and then we do that with our test set as well and then we're getting back our score and our metric value and then doing the checks and then we repeat it all again till we either get above our threshold or we've hit the max number of loops and then returning our results. So that's what's going to be happening other here. Any questions on that? just some result saving function more helper functions here. So we do want to obviously save all these results. We don't want them just be ephemeral that we can't ever access again. So just saving them all. You can also save all the single experimentation so you have all of that data towards the end. We'll be able to pull this and determine what the best prompt is. But these are just very basic helper functions. I don't spend too much time just saving them to CSV at the end of the day. Now we execution it. So this cell runs the prompt optimization experiment, saves the results. We're getting the JSON format, the CSV format. It includes calls for the iteration number, the number of rules, test, train, accuracy scores, all the data that we're actually going to need to evaluate whether or not this thing is successful, and then we're going to start getting results here. So, this does take quite a while to run. So, we'll run and I think this will be a great point for discussion, but as you are running it, you're going to start seeing the different loops. outputs coming out as well. And yeah, we'll just work through it as it it runs. It's probably going to take 20 30 minutes for things to run, but happy to take any questions and help anybody out as they run into issues.

</details>

**观众 15**: 有一件事，你能滚动回我们需要更改的代码部分吗？

<details>
<summary>Original English</summary>

**Audience 15**: One thing, can you scroll back to the part of code that we needed to change?

</details>

**SallyAnn DeLucia**: 更改。它会是。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Change. It's gonna be

</details>

**观众 15**: 所以，一个提醒是运行到这里。我想我没有。

<details>
<summary>Original English</summary>

**Audience 15**: So, one reminder are running into this. I don't think I was

</details>

**SallyAnn DeLucia**: 对于这一行，当你进行安装时，你确实需要设置为等于 **2.2**。因为我认为这里有一个包问题。所以请确保你没有遇到评估错误。如果没有，请告诉我，我会尝试修复它。这就是为什么。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: for this line here, when you're doing install, you do want to be equals 2.2. Because I think there's a a little bit of a package issue. So just make sure that's you're hitting errors with the eval. If not, let me down and try to fix it. This is the reason why

</details>

**观众 15**: 使用了通用评估。

<details>
<summary>Original English</summary>

**Audience 15**: uses a generic evaluation.

</details>

**SallyAnn DeLucia**: 是的。如果你去仓库，你就可以看到评估问题。我们已经把那部分从这里去掉了，但我们肯定可以深入探讨。所以如果你看这里，在这一行，我们正在读取提示词下的内容，如果你好奇的话，可以在那里找到评估。这就是为什么每个人都讨厌 **Docker** 的原因。这就是我们使用所有这些的原因。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: Yes. And you can see the evaluation problem if you go to the We've just taken that part out of this, but we can definitely go through that. So if you look here on this line here, we're reading in under prompts here, you can find the evaluation if you're curious. And this is the reason why everyone hates on docker. This is why we use all.

</details>

**观众 16**: 是的，绝对。

<details>
<summary>Original English</summary>

**Audience 16**: Yes, absolutely.

</details>

**观众 17**: 笔记本。

<details>
<summary>Original English</summary>

**Audience 17**: The notebook.

</details>

**SallyAnn DeLucia**: 所以我还建议，如果你还没有的话，用 **nestio** 修补你的代码。这有助于它运行得更快。另外，为了研讨会的目的，我把我们的循环改成了 **1** 次。那花了我六分钟才运行完。所以建议也这样做，而不是用五次。显然，在你实际优化提示词时，不建议这样做，但现在它会帮助你完成研讨会。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: So I would also recommend patching your code with nestio if you haven't already. Helps it run a lot faster. Also for the purpose of the workshop I switched our loops to one. that took me six minutes to run. So would recommend also doing that instead of having five. Obviously wouldn't recommend doing that when you're actually optimizing your prompt, but for now it'll help you get through the workshop.

</details>

**SallyAnn DeLucia**: 好的，我只是想在这里强调最后一点。

<details>
<summary>Original English</summary>

**SallyAnn DeLucia**: All right, I just want to call out the the last little bit here.

</details>

**观众 18**: 在大家之前，最后一步，我们看看。好的。嗯，这里最后一点代码只是为了提取达到最佳测试准确率的提示词。所以我提到了我们是如何保存所有结果以供使用的。我们只是有一个函数，它本质上获取该类型的最后一个或最佳版本，向你展示原始版本和最佳优化版本，然后你可以用它来提取并放入你的代码中。我确实想强调一点，正如你今天所看到的，管理起来可能有点困难，所以我想提醒那些可能正在寻找 **Arize** 中的企业解决方案的人，你确实有这些提示词优化任务。你可以将你的提示词存储在我们的**提示词中心**中，数据集包含你所有的人工标注或评估，你可以从跟踪记录中创建，或者只是将其摄取到 **Arize** 中。然后从那里，你真正需要做的就是给它一个任务名称，选择你想要你的训练数据集是什么，输出存储在哪里，所有反馈列在哪里。你可以调整所有你想要的参数。然后从那里，你就可以启动它，它将在中心为你生成一个优化的提示词。所以，如果我到这里，我想我有一些。不，也许没有。它基本上会在这里创建一个新版本，显示它是优化的提示词，包含所有结果，我们正在此基础上进行构建，所以你可以将所有评估添加到其中，让它们都在循环中运行，但只是想指出，如果你不感兴趣维护代码循环，也不想自己构建任务基础设施，这是我们在 **Arize** 中提供的一项服务。但，是的，希望我知道有些人还在，我们还会在这里待一会儿，我们可以帮助你解决问题。但非常感谢大家的加入。希望你学到了一些有用的东西。

<details>
<summary>Original English</summary>

**Audience 18**: the last step before folks, let's see. Okay. So the the last little bit of code here is just to extract the prompt that achieves the best test accuracy. So I mentioned how we're saving up all the results to use. We just have a function that essentially gets the last or the best version of that showing you the original and then the best optimized version which you can then use to pull and put into your code. I did want to just give one call out as you saw today can be a little bit difficult to to manage and so I want to call out for those of you who are looking for more of an enterprise solution to this in Arise you do have these prompt optimization tasks. You can have your prompts living in our prompt hub data sets with all of your human annotations or eval that you can either create from traces or just by ingesting it into Arise. And then from there, all you really need to do is give it a task name, choose what you want your training data set to be, where the output lives, where all your feedback columns are. You can adjust all of the parameters that you'd like. And then from there, you can just kick it off and it will produce an optimized prompt in the hub for you. So if I go over here, I think I have some. No, maybe not. it will basically just create a new version here that says it's optimized prompts with all the results and we are building on this so you can add all your evals to it have that all running in the loop but just wanted to call out that if you're not interested in maybe maintaining code loops and having to build a task infrastructure yourself it is something that we do offer in Arise but yeah hopefully I know some folks are hanging out we'll be sticking around here for a little while as we can help you work through issues But thanks so much for joining us. Hopefully you learned something useful.

</details>