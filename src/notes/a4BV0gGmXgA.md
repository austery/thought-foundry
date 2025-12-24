---
area: tech-engineering
category: ai-ml
companies_orgs:
- Braintrust
- Notion
- Replit
- Google
- OpenAI
date: '2025-08-23'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Ankur Goyal
- Sarah
- Joti
products_models:
- GPT-4
- GPT-4o
- GPT-4o mini
- GPT-3.5
- Claude 3 Sonnet
- Claude 3 Opus
- Gemini
- Gemini 2.5 Pro 0520
- Gemini Flash
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=a4BV0gGmXgA
speaker: AI Engineer
status: evergreen
summary: 本文基于Ankur Goyal的分享，深入探讨了AI评估系统（Evals）的五大关键经验。它强调了评估系统在快速迭代新模型、有效整合用户反馈以及主动探索新用例中的核心作用。文章还深入讨论了构建高质量评估系统所需的工程化投入，包括精心设计数据集、定制评分函数和优化工具定义。最后，它呼吁企业为模型更新做好准备，并优化整个AI系统而非仅关注提示词，以充分利用大模型带来的机遇。
tags:
- ai-evaluation
- development
- model
- system
title: AI评估系统：从防御到进攻的五大实践经验
---

### 评估系统有效性的三个关键指标

让我们来谈谈我们随着时间的推移学到的一些有趣的事情。首先，我认为最重要的是，你需要理解并明确你的**评估系统**（Evals: 用于评估大型语言模型性能的系统）是否真的为你的组织提供了价值。我总结了三个你应该关注的积极迹象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's talk about some of the interesting things we've learned over time. So, the first thing is, I think it's super important for you to understand and define whether evals are actually providing value for your organization or not. And I tried to come up with three signs that you should look for that are good.</p>
</details>

第一个迹象是，如果一个新的模型发布了，你的评估系统应该能让你在24小时内发布一个整合了新模型的产品更新。Notion的Sarah昨天就谈到了这一点，她提到在过去几次模型发布中，每次有新模型问世，Notion都能在24小时内将其整合。我认为这是一个非常好的成功标志。如果你做不到这一点，那就意味着你的评估系统还有改进的空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first is, if a new model comes out, you should be prepared via your evals to be able to launch an update to your product within 24 hours that incorporates the new model. Sarah from Notion, she talked yesterday, she talked about this specifically, but for the past several model releases, every time something comes out, Notion's able to incorporate the new model within 24 hours. And I think that's a really good sign of success. If you can't do that, then it means that you have some work to do on your evals.</p>
</details>

另一个成功迹象是，如果用户抱怨某件事，你是否有清晰直接的路径将他们的抱怨纳入你的评估系统？如果你有，那么你就有机会真正地整合用户反馈，将其引入你的评估系统，并最终做得更好。如果你没有，那么你将失去大量宝贵的信息。所以，我认为这也是一个非常重要的门槛或里程碑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another sign of success is if a user complains about something, do you have a very clear and straightforward path to take their complaint and add it into your evals? If you do, then you have a shot at actually incorporating user feedback, pulling it into your evals, and ultimately doing it better. If you don't, then you're going to lose a lot of valuable information into the ether. So again, I think this is a really important kind of threshold or milestone to hit.</p>
</details>

最后一个迹象，我将在整个演讲中更详细地讨论，是你应该真正开始使用评估系统来主动出击，在实际发布产品之前就了解你可以解决哪些用例以及解决得有多好，而不是像单元测试那样只测试回归问题。如果你真正采纳了评估系统，那么我相信在你发布新产品之前，你就能根据评估系统的结果，很好地了解产品可能会如何运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last one, which I'm actually going to talk about a little bit more throughout the presentation, is you should really start using evals to play offense and understand which use cases you can solve and how well you can solve them before you actually ship things, not like unit tests which allow you to just test for regressions. And so if you really adopt evals, then I think before you launch a new product, you have a really good idea of how well the product might work given what your evals say.</p>
</details>

### 高质量评估系统需要精心设计

第二个经验是，优秀的评估系统必须经过精心设计。它们不会随着合成数据集和你在网上读到的随机**大型语言模型**（LLM: Large Language Model）作为评判者的分数而免费获得。我认为这可能有两种思考方式。没有哪个数据集能完美地与现实对齐。我认为在那些完美对齐的情况下，基本上没有什么可做的，用例已经奏效了，比如解决竞赛数学问题，但这样的情况很少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second lesson is that great evals, they have to be engineered. They don't just come for free with synthetic data sets and random LLM as a judge scores that you read about online. And I think there's maybe two ways of thinking about this. There's no data set that is perfectly aligned with reality. I think in the cases that there are, there's like basically nothing to do and the use cases already work, which there are a few that are kind of like that, like solving competition math problems for example.</p>
</details>

但对于大多数现实世界的用例，你提前想出的任何数据集都无法代表用户实际体验到的情况。我认为最好的数据集是那些你可以随着现实中实际发生的情况不断调整和修正的。要做好这一点需要相当多的工程投入。当然，Braintrust可以帮助你解决这个问题。但关键在于，你必须将数据集视为一个工程问题，而不仅仅是理所当然的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for most real-world use cases, any data set that you can come up with ahead of time is not going to represent what users are actually experiencing. And I think the best data sets are those that you can continuously reconcile as you actually experience what happens in reality. And doing that well requires quite a bit of engineering. Of course, Braintrust can help you with that. But I think the point is you have to think about a data set as an engineering problem, not just something that's given to you.</p>
</details>

评分器也是如此。我认为我们与很多人交流时，他们会问Braintrust提供了哪些评分器，以及我们如何使用它们，这样就不需要考虑评分了。我们确实有一个非常强大的开源库，叫做Auto Evals，但它之所以非常开源和灵活，是因为我们合作的每一家足够先进的公司都在编写自己的评分函数，并不断修改它们。我认为思考评分器的一种方式是，它们就像你的AI应用程序的规范或**产品需求文档**（PRD: Product Requirements Document）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the same is true with scorers. I think a lot of people we talk to ask, "Hey, what scorers does Braintrust come with and how can we use those so that we don't need to think about scoring?" And we actually have a really powerful open-source library called Auto Evals, but it's very open-source and flexible for a reason, which is that every company that we work with that's sufficiently advanced is writing their own scoring functions and modifying them constantly. And I think one way to think about scores is they're like a spec or like a PRD for your AI application.</p>
</details>

如果你这样看待它们，首先，这实际上证明了在评分方面进行投资是合理的，而不仅仅是使用现成的东西。其次，希望很明显，如果你只使用一个开源或通用的评分器，那只是别人的项目规范，而不是你自己的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you think about them that way, one, it actually justifies making an investment in scoring beyond just using something off the shelf. And two, hopefully it's fairly obvious that if you just use an open-source or generic scorer, that's a spec for someone else's project, not yours.</p>
</details>

### 提示词工程的演变：上下文与工具的重要性

在提示词中，已经出现了一种向上下文的真正转变，而不仅仅是你编写的系统提示词。我实际上认为，传统的**提示工程**（Prompt Engineering: 设计和优化给大型语言模型的指令以获得更好结果的方法）正在发生很大的演变，考虑上下文而不仅仅是提示词非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's been a real shift towards context in prompts that's not just the system prompt that you write. And I actually think that just traditional prompt engineering, people say this in different ways, but I think traditional prompt engineering is evolving quite a bit and it's very important to think about context, not just a prompt.</p>
</details>

因此，这是一个现代**智能体系统**（Agentic Systems: 能够自主规划、执行任务并与环境交互的AI系统）提示词的示例。通常你有一个系统提示词，然后是一个for循环，它运行LLM调用，发出工具调用，将工具调用整合到提示词中，然后迭代再迭代。我实际上从我们看到的野外智能体中提取了一些轨迹，并总结了这些数字。正如你所看到的，平均提示词中的绝大多数token并非来自系统提示词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is an example of what kind of a modern prompt looks like for an agent. Usually you have a system prompt and then a for loop which runs LLM calls, issues tool calls, incorporates the tool calls into the prompt and then iterates and iterates. And I actually took a few trajectories from agents that we see in the wild and summarized these numbers. And as you can see, a vast majority of the tokens in the average prompt are not from the system prompt.</p>
</details>

所以，是的，编写一个好的系统提示词并不断改进它非常重要。但如果你对如何定义工具以及如何定义它们的输出不够精确，那么你就会失去很多机会。我认为我们与一些客户一起学到的最重要的事情之一是，你不能仅仅将工具视为你的**应用程序编程接口**（API: Application Programming Interface）或你现有产品的反映。你必须根据LLM想要看到的内容来思考工具，以及如何精确地利用你呈现给LLM的内容使其运行良好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, yes, it's very important to write a good system prompt and continue to improve it. But if you're not very precise about how you define tools and how you define their outputs, then you're leaving a lot on the table. And I think one of the most important things we've learned together with some customers is that you can't just take tools as a reflection of your APIs or your product as it exists today. You have to think about tools in terms of what the LLM wants to see and how you can use exactly what you present to the LLM to make it work really well.</p>
</details>

我认为在大多数项目中，当你编写好的工具时，它实际上是非常具有颠覆性的。它不仅仅是你现有事物之上的一层API。它们的输出也是如此。我们最近为一个内部项目工作时，有一个例子是，将工具的输出从**JSON**（JavaScript Object Notation: 一种轻量级的数据交换格式）转换为**YAML**（YAML Ain't Markup Language: 一种人类可读的数据序列化标准）实际上带来了显著的差异。我知道这在AI领域有点像个梗，但对于LLM来说，在进行分析时，查看YAML格式的数据比极其冗长的JSON更节省token且更容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that in most projects, it's actually very disruptive when you write good tools. It's not something that's just like an API layer on top of the stuff that you already have. And the same is true with their outputs. There's one example that we worked on recently for an internal project where shifting the output of a tool from JSON to YAML actually made a significant difference. And I know that's a little bit of a meme in the AI universe, but it's just so much more token efficient and easy for an LLM to look at a YAML shaped data while doing analysis than extremely verbose JSON.</p>
</details>

现在，如果你正在编写代码并将其插入到图表库中，这没有任何区别，因为对于JavaScript来说，YAML和JSON都是结构化数据。但对于LLM来说，它们非常不同。因此，我认为你必须非常非常仔细地思考如何实际构建工具的定义以及如何构建其输出，以便LLM能够从中获得最大益处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if you're writing code and you're plugging something into, you know, a charting library, it makes no difference because to JavaScript, YAML and JSON are both structured data. But to an LLM, they're very different. And so I think you have to be very, very thoughtful about how you actually construct the definition of a tool and how you construct its output for the LLM to maximally benefit from it.</p>
</details>

### 为新模型迭代做好准备

我认为我们学到的最重要的事情之一是，每次有新模型发布时，一切都可能改变。我认为你需要对你的产品、你的团队以及你的思维方式进行工程化设计，以便当新模型发布时，如果它为你改变了一切，你就能抓住这个机会，发布一些以前不可能实现的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think one of the most important things we've learned, and actually I would credit some of the folks at Replit for really pioneering this pattern, but you know, every time a new model comes out, everything might change. And I think you need to engineer your product, engineer your team, engineer your mindset so that when a new model comes out, if it changes everything for you, you can jump on that opportunity and ship something that maybe wasn't possible before.</p>
</details>

我将向你展示我们即将发布的一个产品功能的数字，今天我也会稍微展示一下。我们有一个评估系统已经运行了一段时间，它告诉我们这个功能可能运行得有多好，我们每隔几个月运行一次。你可以看到，不久前**GPT-4**还是最好的模型。但情况已经改变了，**GPT-4o**表现得更好一些，**Claude 3 Sonnet**好得多，而**Claude 3 Opus**的表现更是显著提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to show you some numbers for a product feature that we're actually launching and I'm going to show you a little bit of it today. But we've had an eval for a while that tells us how well this feature might work and we run it every few months and you can see it wasn't that long ago that GPT-4 was the best model out there. But things have changed and you know, progressively GPT-4o did a little bit better. Claude 3 Sonnet is much better and Claude 3 Opus is actually even more remarkably better.</p>
</details>

这对我们意味着，这个在10%的准确率下对用户来说不可行的功能，突然变得可行了。所以，Claude 3 Sonnet实际上是两周前发布的。我们今天发布这个功能的第一版，仅仅是两周之后。我们之所以能够抓住这个机会，是因为我们运行了这个评估系统。我们已经准备好了，我们看到“太棒了，我们终于跨过了这个门槛”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what that's meant for us is that this feature that at 10% would really not be viable for our users to use suddenly becomes viable. And so Claude 3 Sonnet actually came out two weeks ago. And we're shipping the first version of this feature today, which is just two weeks later. But we were able to jump on that opportunity because we ran this eval. We were ready to do it and we saw that, okay, great, we've actually finally crossed this threshold.</p>
</details>

因此，我鼓励我个人合作或交谈的每个人都创建非常雄心勃勃的评估系统，这些系统可能在今天的模型下不可行，但要以一种方式构建它们，以便当新模型发布时，你可以直接插入新模型并进行尝试。在Braintrust，我们有一个名为**Braintrust Proxy**（Braintrust代理: Braintrust提供的一种工具，用于在不同模型提供商之间切换而无需更改代码）的工具。有很多类似的工具。你可以使用我们的，也可以使用其他的。但关键是，你不需要更改任何代码就能跨模型提供商工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So everyone that I personally work with or talk to, I encourage to create evals that are very, very ambitious and likely not viable with today's models and construct them in a way that when a new model comes out, you can just plug the new model in and try it. In Braintrust, we have this tool called the Braintrust Proxy. There's a lot of similar tools. You could use ours or you could use something else. But really the point is that you don't need to change any code to work across model providers.</p>
</details>

所以，Google刚刚发布了最新版本的**Gemini**。实际上，**Gemini 2.5 Pro 0520**在这个基准测试中得分只有1%。所以我们甚至没有把它放上来。但也许他们今天发布的新版本（可能是**Gemini Flash**）会表现得好得多。我们可以在这次演讲结束后，只需敲几下键盘就能发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, Google just launched the newest version of Gemini. Actually, Gemini 2.5 Pro 0520 scores 1% on this benchmark. So we didn't even put it on here. But maybe the thing they launched today actually does a lot better. We can find out with just a few keystrokes maybe right after this talk.</p>
</details>

### 优化整个AI系统，而非仅是提示词

最后一点是，如果你考虑优化提示词，那么优化整个系统至关重要。这意味着要全面地思考你的AI系统，包括你用于评估的数据、任务（也就是提示词）、智能体系统、工具等等，以及评分函数。每次你考虑改进你的应用程序时，你需要思考如何改进这个整体系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last thing is it's super important if you think about optimizing your prompts to optimize the entire system. So that means thinking holistically about your AI system as the data that you use for your evals, the task which is the prompt, the agentic system, tools, etc., and the scoring functions. And every time you think about making your app better, you need to think about improving this overall system.</p>
</details>

我们实际上运行了一个基准测试，就是我之前展示的那个。它使用LLM自动优化提示词。我们运行了一次，只给它提示词，说“请优化这个提示词”。第二次，我们给它提示词、数据集和分数，并说“请优化这个整个系统”。你可以看到，结果有非常显著的差异。所以，再次强调，有些东西从不可行变得可行。但优化整个系统而不仅仅是提示词，这一点非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We actually ran a benchmark, which is the same benchmark that I showed previously. It auto-optimizes prompts using an LLM. And we ran it once by just giving it the prompt and saying, "Hey, please optimize the prompt," and a second time giving it the prompt, the data set, and the scores and said, "Please optimize this whole system." And you can see there's a very dramatic difference. So again, something goes from unviable to viable. But it's just super important to optimize the entire system, not just the prompt.</p>
</details>

实际上，这是我们今天开始发布的一个新产品功能。如果你是Braintrust用户，你可以去Braintrust的功能标志部分，打开一个名为**Loop**（Loop: Braintrust推出的一项新功能，可自动优化评估系统）的新功能标志。Loop是一个令人惊叹的全新功能，它实际上可以直接在Braintrust内部自动优化你的评估系统。所以你可以在我们的游乐场中工作，给它一个提示词、一个数据集和一些分数，它实际上也可以创建提示词、数据集和分数，然后你就可以使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And actually, this is a new product feature that we are starting to launch today. If you're a Braintrust user, you can go to the feature flag section of Brain and turn on a new feature flag called Loop. And the Loop is this amazing cool new feature that actually auto-optimizes your eval directly within Braintrust. So you can work in our playground and give it a prompt, a data set, and some scores and it can actually create prompts, data sets, and scores too and just work with it.</p>
</details>

我们看到效果非常好的一些事情是：“优化这个提示词”，或者“这个数据集中我缺少了什么，对于这个用例来说会是很好的测试点？”“为什么我的分数这么低？”或者“为什么我的分数这么高？你能帮我写一个比我现在更严格的评分器吗？”你也可以用不同的模型来尝试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The kinds of things that we've seen work really well are, "Optimize this prompt," or, "What am I missing from this data set that would be really good to test for this use case?" "Why is my score so low?" Or, "Why is my score so high? Can you please help me write a score that is harsher than the one that I have right now?" You can also try it out with different models.</p>
</details>

所以，正如你所看到的，我们肯定在Claude 3 Sonnet上看到了最好的性能，而Claude 3 Opus的表现又提高了几个百分点。但我们鼓励你用不同的模型来尝试。你可以使用**GPT-3.5**，你可以使用**GPT-4o mini**，你可以使用Gemini，也许你正在构建自己的LLM或微调模型。你也可以尝试一下。我们对此感到非常兴奋。我认为我稍后会再谈论这一点。我很乐意通过问答环节来做这件事，但我真的认为，现在LLM能够查看提示词和数据并自动进行建设性改进，评估系统的工作流程将发生巨大变化。过去迭代评估系统所需的大量手动工作不再需要了。所以，这真的令人兴奋。我们很高兴能发布这个功能并开始获得一些反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as you could see from this, we've definitely seen the best performance with Claude 3 Sonnet and Claude 3 Opus performs a couple of percentage points better. But we encourage you to try it out with different models. You can use GPT-3.5, you can use GPT-4o mini, you can use Gemini, maybe you're building your own LLM or fine-tune model. You can try that as well. And yeah, we're very excited for this. I think I'm going to talk about this a little bit later. And I'm happy to do it with some Q&A as well, but I actually really think that the workflow around evals is going to dramatically change now that LLMs are capable of looking at prompts and looking at data and actually making constructive improvements automatically. A lot of the manual labor that went into iterating with evals doesn't need to be there anymore. So, it's really exciting. We're excited to ship this and to start to get some feedback.</p>
</details>

总而言之，我认为有五个非常重要的经验：
有效的评估系统会不言自明。重要的是要了解你的组织是否已经达到了评估系统能力的某个水平。如果没有也没关系，这并不容易，但重要的是要诚实面对并为此努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So just to recap, five lessons that I think are really important. Effective evals speak for themselves. It's important to understand whether you've kind of reached a point of eval competence in your organization or not. It's okay if you haven't. It's not easy, but it's important to be honest about that and work towards it.</p>
</details>

当你进行评估时，对整个系统进行工程化设计非常重要。所以不要只考虑提示词。不要只考虑改进提示词。请不要只使用合成数据或Hugging Face数据集。我知道它们很棒，但请使用更多。请不要只使用现成的评分器。编写你自己的。非常审慎地思考如何将你正在处理的规范融入你的评分函数中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you're working on evals, it's very important to engineer the entire system. So don't just think about the prompt. Don't just think about improving the prompt. Please don't just use synthetic data or Hugging Face data sets. I know they're awesome, but please use more than just that. Please don't use off-the-shelf scores only. Write your own. Think very deliberately about how you can craft the spec of what you're working on into your scoring functions.</p>
</details>

非常仔细地思考上下文。我认为对我个人有帮助的是，像编写提示词一样思考编写工具。这是我与LLM沟通并使其成功的机会。我如何定义工具的API接口以及我如何定义其输出，对这一点有非常显著的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think very carefully about context. And I think in particular what helps me personally is to think about writing tools like I would think about writing a prompt. It's my opportunity to communicate with an LLM and set it up for success. And how I define the API interface of the tool and I define its output has a very dramatic impact on that.</p>
</details>

确保你已为新模型的发布做好准备，并随时准备改变一切。所以，如果一个新模型发布了，你希望能够立即知道，最好是在它发布的那一天。并且还要准备好彻底推翻一切，用一个从根本上利用新模型的全新架构来取代它。我认为这其中一部分显然是拥有正确的评估系统。一部分是以一种实际允许你这样做的产品工程方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Make sure that you're ready for new models to come out and to just change everything. So, if a new model comes out, you want to be prepared to know that immediately, ideally the day that it comes out. And also be prepared to like rip out everything and replace it with a fundamentally new architecture that takes advantage of that new model. And I think part of that is obviously having the right eval. Part of it is engineering your product in a way that actually allows you to do that.</p>
</details>

最后，当你考虑优化或改进评估系统性能时，你必须考虑优化整个系统：数据以及你如何获取这些数据，任务本身（包括提示词、工具等），以及评分函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then finally when you think about optimizing or improving your eval performance, you have to think about optimizing the whole system: the data and how you get that data, the task itself, which you know the prompt, tools, etc., and the scoring functions.</p>
</details>

### 问答环节

主持人：好的，我们有一些时间进行问答。这里有两个麦克风，一个在左边，一个在右边。请随意站起来提问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with that, we have some time for Q&A. Yeah, there's two microphones up here, one on the left side, one on the right side. Feel free to stand up and ask your questions.</p>
</details>

Joti：你好，我是Joti。你的一张幻灯片上说“获取反馈并将其转化为评估系统”。你是否担心在这种情况下评估系统会**过拟合**（Overfitting: 模型过度适应训练数据，导致在新数据上表现不佳），即每个反馈都转化为一个评估系统？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, this is Joti. One of your slides said, "Take feedback and turn it into an eval." Are you concerned about overfitting evals at that point where every feedback then turns into an eval?</p>
</details>

Ankur Goyal：哦，这是一个很好的问题。也很高兴见到你。所以，问题是关于幻灯片上提到的，从真实数据中获取反馈并将其添加到数据集中，并将其纳入评估系统。你是否担心过拟合？我认为答案是，我实际上更担心在没有用户反馈的情况下对数据集过拟合，而不是担心调整拟合以纳入用户反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, that's a great question. Also nice to see you. So the question was, one of the slides was about taking feedback from real data and adding it to a data set and incorporating it in an eval. Are you worried about overfitting? And I think the answer is I'm actually way more worried about overfitting to the data set without the user's feedback than I am to adjusting the fit to incorporate the user's feedback.</p>
</details>

关于数据集最重要的不是数据集在任何时间点的状态。而是你如何能够很好地调整数据集以符合你想要的现实。我实际上认为，我们产品中不鼓励的一件事，有些人对此向我们抱怨，我理解，如果你是其中之一的话。但我们目前不会自动获取用户反馈并将其添加到数据集中。我们实际上希望有一个有品味、并且能够对问题建立一些直觉的人，来找出用户反馈中那些有趣的数据点，并将它们添加到数据集中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like the most important thing about a data set is not the state of the data set at any point in time. It is how well you are equipped to reconcile the data set with the reality that you want. And I actually think one of the things that we discourage in the product, and some people complain to us about this. I get it if you're one of those people. But we don't automatically take user feedback and add it to data sets right now. We actually want a human who has some taste and maybe can build some intuition about the problem to find the data points from users that are interesting and add them to the data set.</p>
</details>

我认为这是你作为用户运用判断力的机会，比如“哦，好的，这个用户试图做的事情显然应该有效。我的产品中它不起作用真是令人难过。让我把它添加到数据集中，这样我就可以确保它能起作用。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that is your opportunity as a user to apply some judgment about like, "Oh, okay, this user is trying to do something that should obviously work. It's really sad that it doesn't work in my product. Let me add it to the data set so I can make sure it does."</p>
</details>

提问者：你有一张幻灯片，我想是在工具描述中，上面有一些百分比。是的，就是这张。那是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You had a slide, I think in the tool descriptions about like with some percentages on it. Yeah, this one. What what is that?</p>
</details>

Ankur Goyal：是的。我们选取了一些智能体，我们有很多追踪数据，我们分析了不同消息类型的相对token数量。系统提示词是一种消息类型。工具定义是模型可以调用的工具的规范。用户和助手是来自用户和助手的纯文本交互的token。然后工具响应是工具本身生成的token。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, we took a few agents, like we have a lot of traces, and we analyzed the relative number of tokens for different message types. So the system prompt is one message type. Tool definitions are the spec of what tools the model can call. User and assistant are tokens from user and assistant just text interactions and then tool responses are tokens from the that you know that the tool generates itself.</p>
</details>

提问者：哦，这是token的百分比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh this is the percentage of tokens</p>
</details>

Ankur Goyal：没错，这是这些token的相对百分比。是的。是的。是的。所以我们在这里试图说明的观点是，我认为在现代智能体系统中，工具实际上非常显著地占据了LLM的token预算。我认为非常重要的是，要思考你如何定义工具的定义以及如何定义它们的输出，以便你能够为LLM的成功进行工程化设计，而不仅仅是简单地将你的**GraphQL API**作为一堆工具调用提供给LLM。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Correct and this is the relative percentage of those tokens. Yeah. Yeah. Yeah. Yeah. So the point that we're trying to make here is that I think in modern agentic systems, tools actually very, very significantly dominate the token budget of the LLM. And I think that it's very important to think about how you define the definition of tools and how you define their outputs so that you engineer the LLM for success. Not just sort of take your GraphQL API and give it as a bunch of tool calls to the LLM.</p>
</details>

提问者：首先，关于“点赞/点踩”的观点非常好。我正在与政府合作，人们不喜欢他们得到的答案，例如关于税收的答案，他们就会给它一个“踩”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um first off that point about the thumbs down is such a good point. I'm working with the government and people don't like the answer they got for example about taxes and they give it a thumbs down.</p>
</details>

Ankur Goyal：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

提问者：对。所以，加入这种人性化的方面是一个非常好的主意。我们甚至还添加了一个小功能，说“答案是正确的，但我就是不喜欢它”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. So like adding that human aspect is a really good idea. We actually even added a little thing that said the answer is right, but I just don't like it.</p>
</details>

Ankur Goyal：太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's awesome.</p>
</details>

提问者：但是我的问题是关于你说的“新模型改变一切”的观点。我们已经更新了我们的模型好几次，并且使用了Code和**OpenAI**的模型，但我们没有发现巨大的差异，除了最近有人真的想用**GPT-4o mini**，它似乎忽略了一切。我发誓它完全忽略了系统提示词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but my question is about your point that the new model changes everything. We've updated our models several times and and use Code and OpenAI and we haven't found huge differences other than recently someone really cheap wanted to use 4.1 mini and like it seemed to ignore every it. I swear it ignored the system prop completely.</p>
</details>

Ankur Goyal：是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

提问者：但是当你提到“改变一切”时，你能告诉我更多关于你看到了什么样的变化吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what kind of things when you say it changes everything, can you tell me a little more about what kind of changes you're seeing?</p>
</details>

Ankur Goyal：当然。我认为我们刚刚通过Loop发布的使用案例就是一个很好的例子。这是一个非常雄心勃勃的智能体。它查看提示词、数据集和分数，并根据数据集和分数自动优化提示词。这是一个我们很久以前就编写了基准测试的功能，我们用每次连续的模型发布来运行它，并且很长一段时间内，这些数字看起来更像是你为GPT-4看到的那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For sure. I think the use case that we just shipped with Loop is a really good example of that. So this is a very ambitious agent. It's looking at prompts and data sets and scores and automatically optimizing the prompts based on the data sets and scores. And this is something that we wrote a benchmark for a while ago and we ran with every consecutive model launch and the numbers looked more like what you see for GPT-4 for a very long time.</p>
</details>

这并非适用于所有基准测试。因此，作为这项工作的一部分，我们实际上有一堆Loop优化的评估系统。这就是我们的评估集。有些评估系统，比如对电影台词进行分类并找出它们来自哪部电影，自GPT-3.5以来一直运行良好。所以有些用例根本不重要。还有一些用例，它们非常雄心勃勃，以至于今天根本无法实现。我认为你希望创建评估系统，以便如果你将来想做一些雄心勃勃的事情，当新模型发布时，你就能做好充分准备，只需按一下按钮就能发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This isn't true for every benchmark. So as part of this exercise, we actually have a bunch of evals that Loop optimizes. That's our eval set. And there's some evals like classifying taking movie quotes and figuring out what movie they're coming from that have worked really well since GPT-3.5. And so there are certain use cases where it just doesn't matter. There are other use cases where they're so ambitious that they just don't work today. And I think you want to create evals so that if there's something ambitious that you want to do in the future, you are very well prepared when a new model comes out to just push a button and find that out.</p>
</details>

提问者：好的，谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Thank you.</p>
</details>