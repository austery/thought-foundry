---
area: tech-insights
category: technology
companies_orgs:
- Flatfile
- Anthropic
- Vercel
date: '2025-08-22'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Lex Fridman
products_models:
- V0
- Claude
- Claude 4
- CSS3
- HTML5
- Obvious
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=CiMVKnX-CNI
speaker: AI Engineer
status: evergreen
summary: 本文探讨了人工智能作为协作工具的演进“形态因子”，超越了传统的UI/UX设计。作者介绍了四种AI交互类型（隐形、环境、内联、对话式），并强调了一种亲身实践的设计哲学：即“感知材料”（理解AI模型的能力）和“发现纹理”（识别其优势与劣势）。文章通过Flatfile的案例，展示了AI在数据迁移和问题解决中产生涌现行为以及人机协作的潜力，并以展望未来AI工具的设计理念作结。
tags:
- data
- design
- human-ai-collaboration
- llm
title: AI协作伙伴的形态因子：从感知材料到发现纹理的设计哲学
---

### AI工具的演进与协作设计

我认为我们都注意到了像**V0**（Vercel V0: Vercel推出的一个用于快速生成UI组件的AI工具）这样的工具，在**生成式用户界面**（Generative UI: 能够根据指令自动生成用户界面的技术）方面表现出色，不仅能创造美观的界面，还能生成**Claude代码**（Claude Code: 指由Anthropic的Claude模型生成的代码）。这使得我们能够在本地运行更复杂的程序并在此基础上进行构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we've all noticed tools like V0 getting pretty good at generative UI and creating good-looking things as well as Claude code, being able to let us run things more complicated locally and build on those things.</p>
</details>

因此，我认为由此产生的结果是设计师、产品经理和工程师将共同协作。我对此感到非常兴奋，因为我从未喜欢过这些角色之间的界限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I think the thing that comes out of this is designers, product people and engineers all building together. And I'm really excited about that because I've never loved the divides between these things.</p>
</details>

所以，这真的让我们可以摆脱——在我看来——摆脱模型图、摆脱点击式原型，以及所有关于我们正在构建的东西是否值得投入工程精力的担忧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so this really lets us get rid of, in my mind, get rid of mock-ups, get rid of the click-through prototypes, and all the hand ringing about whether the thing that we're building is worth the engineering effort.</p>
</details>

因此，当我们进入这个阶段时，是时候深入体验我们正在使用的“材料”，看看会涌现出什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so as we as we go into this, it's time for us to jump in and feel the material that we're working with and see what emerges.</p>
</details>

### Flatfile的AI堆栈与四种形态

我将快速为您概述一下Flatfile的AI技术栈。这并非官方图表，但这是我理解它的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'll give you a super quick overview of of Flat Files AI stack. This is not an official diagram, but it's how I see it.</p>
</details>

我们进行数据迁移，如果您需要频繁地在系统之间移动大量数据，您会使用我们的开发者平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we migrate data, big if if you needed to move a lot of data between systems frequently, you use our developer platform.</p>
</details>

由于我们是一个开发者平台，而**大语言模型**（LLMs: Large Language Models，指具有大量参数的深度学习模型，能够理解和生成人类语言）擅长编写代码，这使其成为许多AI应用的理想场所。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since we're a developer platform, LLMs are good at writing code. Makes it the perfect place for a lot of AI.</p>
</details>

在最底层，我们有客户部署到我们基础设施上的Flatfile应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, at the bottom here, we have our our customers flat file applications that they they deploy to our infrastructure.</p>
</details>

然后是这种实时上下文，即数据和验证结果。所以，那些“脏数据”中存在哪些错误、警告以及其他问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, then there's this like real time context, which is the data and the validation outcomes. So, what are the errors and warnings and things that are in that that data that dirty data?</p>
</details>

接着是我们的**AI代理**（AI Agents: 能够感知环境、做出决策并执行任务的智能程序），它们拥有的工具以及它们可以运行的任务，以及最终呈现给用户的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then our AI agents, the tools they have, and the jobs that they can run, and then what gets shown to users.</p>
</details>

我将其分为四个主要类别，当然还有更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I see it as four buckets here. There's more.</p>
</details>

首先是“隐形”模式，它有点像“机器中的幽灵”，我几乎称之为幽灵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um there's invisible, so it's kind of like the ghost in the machine almost called that ghost.</p>
</details>

其次是“环境”模式，它在后台运行，但您不直接与之交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um ambient, so it's kind of happening in the space, but you're not directly working with it.</p>
</details>

然后是“内联”模式，它实际存在于您的工作中，存在于您的工作流程中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um inline, so it's actually in your work, in your workflow.</p>
</details>

最后是“对话式”模式，我想这是我们都在讨论的。我认为这是我在此次会议上学到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then conversational, the ones that we're, I guess, all arguing about. I think that's what I learned being here at this conference.</p>
</details>

这是一个“隐形”模式的例子：当您注册Flatfile时，我们在后台获取您的电子邮件地址，找到您工作的公司，并进行查询。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um here's an example of invisible. So when you start, if you sign up for a flat file, we go in the background, we we take your email address, we find the company you work for, we look it up.</p>
</details>

在后台，AI代理正在编写一个Flatfile应用程序。它们正在编写代码，并基本上为您发送一个完全符合您用例的演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and in the background, the AI agents are writing a flat file application. So they're writing code and essentially sending you up a demo that is perfect for your use case.</p>
</details>

因此，如果您来自一家人力资源公司，您将获得一个人力资源演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you come in from a HR company, you're going to get an HR demo.</p>
</details>

当它运行时，您无需知道AI正在处理它。所以，我认为这就像它在后台工作一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and while that's running, you don't need to know that AI is working on it. Um so that I'd say is like it's working in the background.</p>
</details>

这里有一些更“环境”化的工作。这只是一个非常初步的尝试，但您可以看到有一个代理正在后台分析数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's something working more ambiently. It's a very initial take on this, but you can see there's something an agent analyzing the data in the background.</p>
</details>

这实际上是一个工具，我领导着这个AI转型团队，当它发现修复机会时，您会看到列上弹出小火花。所以这是“环境”模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um this is a tool actually, I lead this team for AI transformation, and you can see the little sparkles pop up on the columns when it finds opportunities to fix it. So that's ambient.</p>
</details>

这是“内联”模式。您正在忙碌地处理数据，AI能够直接在工作流中帮助您修复数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um this is inline. So you're busy working in the data, and the AI is able you're able to use the AI directly in line here to fix the data.</p>
</details>

这些代理正在编写代码，然后这些代码会在这个数据集上运行。所以您可以有一百万行和五十列，或者任何您想要的数据，这些代码会运行得非常快，这非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These agents are are writing code that then gets run on this data set. So you could have a million rows and 50 columns or whatever you want and and that code will run really fast, which is pretty cool.</p>
</details>

最后是“对话式”模式，我们都习惯了这种模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then finally the conversational ones we're all used to.</p>
</details>

所以这是“构建模式”（Build Mode），它是一个无代码/低代码的代理系统，现在可以编写Flatfile应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is build mode. It's the no code low code agentic system that writes flat file apps now.</p>
</details>

以前您可能需要公司里的工程师来构建这些应用程序，现在所有这些都可以自动构建。所以这很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So before you would probably have to have had a engineer at the company building these applications, now it can all be built up. So that's pretty cool.</p>
</details>

这就是我所思考的通用界面。我听了Anthropic的Amanda Askell与Lex Fridman谈论如何构建Claude的“性格”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and that's that's kind of the the general surfaces I think about. Um, I listened to Amanda Askell from Anthropic talking to Lex Fridman about building Claude's character.</p>
</details>

那一刻我意识到我一直在做一些有点傻的事情。我一直在给工程师们关于我们代理的反馈，比如：“哦，它不应该这样开头，它不应该用这些词，为什么它要这样做？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in that moment, I realized I'd been doing something a little silly. I'd been giving engineers feedback on our agents like, "Oh, it shouldn't start saying this and it shouldn't use these words and and why should it do this?"</p>
</details>

我意识到我当时是在像做设计文案一样做这件事，对吧？我是在凭着我的正常本能行事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I realized I was I was doing it like I would do design copy, right? I was I was I'm in my my my normal instinct.</p>
</details>

当我听到她谈话时，我意识到我需要从“控制”转变为“角色教练”，并真正构建我想要的“性格”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when I heard her talk, I realized I needed to go from controlling to being a character coach and and and actually building out the the nature that I wanted.</p>
</details>

### 设计AI：从控制者到角色教练

这是一个**V0**。我希望你们大多数人都用过Vercel的V0？是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is a V0. I hope have you most of you used V0 from Vercel before? Um yeah.</p>
</details>

这是我早期构建的一个V0，我称之为“聊天调谐器”。它看起来不怎么样，但这并非重点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so this is a V0 I built one of my early ones and it was um I called it a chat tuner. It doesn't look like much but that wasn't the focus.</p>
</details>

但我基本上可以把我们的**编排器**（Orchestrators: 在复杂系统中协调和管理多个组件或服务的工具），也就是我们用于构建模式的AI编排器的**系统提示**（System Prompt: 给AI模型设定的初始指令或角色，用于指导其行为和输出），放在这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but I could essentially put our orchestrators, so the system prompt for our AI orchestrator for build mode in here.</p>
</details>

然后我可以修改它。我可以问，如果我告诉Claude更友好、更平衡或更简洁，会是怎样的？对于这个模型来说，“更谨慎”意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I can modify it. I can say what is it like if I tell Claude to be more friendly versus more balanced versus more concise? What what does more cautious mean to this model?</p>
</details>

我展示这个的目的是想说，最终产品的设计总是一个诱人的设计点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and the point of me showing this is just to say like the design of the final thing is always a tempting thing to design too.</p>
</details>

但现在我们实际上可以去构建工具来帮助我们进行这种设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but now we can actually go and build tools to help us to design that.</p>
</details>

这让我想到我有三个主题。第一个主题是“感知材料”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and this brings me to like uh I have like three themes. Um the first theme which is feeling the material.</p>
</details>

### 主题一：感知材料

我是一名木工，所以您得原谅我使用物理材料的比喻。但如果您要用物理材料设计东西，您必须去感受它，对吧？您必须了解它的属性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm a woodworker so you'll have to forgive the analogies to physical material but if you're going to uh design something with a physical material, you have to feel it, right? You have to what are the properties of it? Um and you need to understand it.</p>
</details>

所以我感觉以前在设计时，我们都是通过层层叠叠的方式来看待一切，对吧？模型图和原型，试图看看什么会奏效，什么不会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I feel like before with design, we were kind of looking at everything through like layers, right? Mockups and prototypes and and kind of trying to see what was going to work and what wasn't.</p>
</details>

我们现在需要做的是去感受材料，感受这些模型是如何运作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What we need to do now is go feel the material, feel feel how these models work.</p>
</details>

我的新北极星目标是为这些LLM创造一个闪耀的环境，对吧？这种“形态因子”是什么，可以帮助它们完成任务，保持一致，并随着模型的改进而成长，对吧？这就是我的新目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, my new north star is like creating an environment for these LLMs to shine, right? what's what's this form factor that can help them nail their assignment, stay aligned, and grow as the models get better, right? That's that's my new goal.</p>
</details>

基本上，我们对LLM所做的任何事情，我都觉得我们把它放进了一个盒子里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, we're basically anything we do with an LLM, I feel like we're putting it in a box.</p>
</details>

您也会听到人们说LLM就像实习生，比如：“哦，它是一个拥有博士学位的实习生。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and that you also hear people say that LLMs are like interns, like, oh, it's an intern with a PhD.</p>
</details>

所以现在我试着想，如果你把一个拥有博士学位的实习生放进一个盒子里，那么这个盒子最好是好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I try think now if you're putting an intern with a PhD in a box, like it better be a good box.</p>
</details>

因此，我们需要投入精力。这是我们当时讨论的一个话题：我们应该给这个新的协作伙伴，这个新的“形态因子”，这个新的模型提供哪些工具，当它开始工作时？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so we need to put effort in. Um this was a conversation we were having about what tools does this uh co-worker this new form factor this new model like what tools do we give it when it shows up for work?</p>
</details>

我当时迷恋于“光标”这个想法。我想，如果它有一个鼠标或触控板会怎样？我是一个触控板使用者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh I got fixated on this idea of cursors. I was like oh what happens if it just had a mouse or a trackpad? I'm a trackpad person.</p>
</details>

这可能有点争议，但基本上，如果我们给AI这些工具会发生什么？所以我创建了这个V0，并将其移入“光标”模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so um that's probably controversial but uh essentially what happens if we gave the AI um those tools and so I I created this v0ero and moved it into cursor.</p>
</details>

我想，我经常使用设计工具，所以我不经常迁移数据，这是我感受这种“材料”的最佳方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I was like well I work in design tools a lot so I don't migrate a lot of data so this is the best place for me to feel this right to feel this material.</p>
</details>

所以我创建了一个画布，我可以给它指令，比如“嘿”。老实说，我在几秒钟内对此非常热情，感觉就像我触摸到了**通用人工智能**（AGI: Artificial General Intelligence，指能够像人类一样执行任何智力任务的AI）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I created a canvas and I could give it orders and be like hey and honestly I was I was very enthusiastic about this for like a few seconds um it felt like I was touching the AGI a little bit.</p>
</details>

但我也很快开始感觉自己像是在把一个F1赛车手放进了一辆普锐斯里。感觉我是在限制和控制它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but I also very quickly started feeling like I was putting a Formula 1 driver in a Prius. It just it felt like I was constraining it and controlling it.</p>
</details>

它一次只能移动一个东西。但从中学到的东西是，这就像是一个V0，我最终在上面使用了Claude代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it could only move one thing at a time. Um but so so learning from that um was uh something like this was just also um a a vzero um that I use clawed code on eventually.</p>
</details>

这是一个我们正在开发的新产品，它将我们学到的所有关于向消费者迁移数据的知识带给他们，让他们处理自己的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is a new uh product that we're working on which brings like the all the stuff we've learned about u migrating data to consumers to let them work on their data.</p>
</details>

但您可以看到AI正在这个空间中运行，它具有存在感，所以它能够同时读取多个文件并写入另一个文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but you can see the AI is is operating in the space um and it's it's got presence and so it's it's able to read multiple files while writing into another one.</p>
</details>

它不像我，一次只能专注于一件事。尽管我以为我能专注于更多，但那不是真的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it's not like me who can only focus on one thing at a time. Even though I think I can focus on more, um, it's not true.</p>
</details>

所以这是我们从**确定性**（Determinism: 指系统行为可预测，由初始状态和输入完全决定）转向**推理**（Inference: 指AI模型根据已知数据进行预测或决策的过程），并弄清楚这种“材料”感觉如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is us moving from determinism to infer and figuring out what this material feels like.</p>
</details>

所以，这就是“感知材料”，对吧？与模型合作，让它进入您的空间，了解与它一起工作的感觉，它能做什么，以及我们给它设定的“形态因子”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, um, that's feeling the material, right? working with the model, getting it into your space, understanding how it feels um to work alongside it, what's it capable of, and then the form factors that we're putting on them.</p>
</details>

实际上，您现在可以去构建它并玩弄它，去感受它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, actually, you can now go build it and play with it, um and feel it.</p>
</details>

### 主题二：发现纹理

我下一个关于材料的比喻是“发现纹理”。一旦您了解了材料的特性，您就理解了它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the next material analogy I have, which is finding the grain. Um once you've got the characteristics of the material, you understand it.</p>
</details>

通常，您用来构建和创造的材料本身可能具有其特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um usually the piece of material that you're building with and you're creating with might have its own characteristics.</p>
</details>

因此，当我们创建这些“形态因子”时，“发现纹理”就是去感受它。它在哪里光滑，在哪里粗糙？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so as we're creating these form factors, uh, finding the grain is about feeling it out. Where is it smooth and rough?</p>
</details>

它在哪里脆弱？在哪里强大？我们必须保持谦逊，因为事物正在并将继续快速变化，我们所构建的任何东西很可能都需要重建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, where is it weak? Where is it strong? Um, and we'll have to remain humble here because, um, things are going to change and are changing so quickly that whatever we we build is going to most likely need to be rebuilt.</p>
</details>

这是一个“构建模式”代理的例子。我让它做一件事，就是启用自动化插件。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">This was an example of that build mode agent. I asked it to do one thing, which was enable the automat plugin.</p>
</details>

这只是自动将源数据映射到目标数据，我得到了一大段文字，这并不坏，因为它为我节省了大约一周的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this just automatically maps data from the source. um data to the target data and I get a wall of text and it's not bad because this went and and I saved me probably a week of work.</p>
</details>

我不需要产品经理编写**产品需求文档**（PRD: Product Requirements Document，产品需求文档），发送给工程师，将其纳入路线图，让工程师编写，然后进行**质量保证**（QA: Quality Assurance，质量保证）。所有这些都完成了，对吧？所有的代码都写好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I didn't have to have a product manager write a PRD, send it to an engineer, get the in the road map, get the engineer to write it, QA. This was all just done, right? All that code was written.</p>
</details>

但这些冗余信息会妨碍我们。所以这是一个V0，它重新思考了工具的用户体验。它会是怎样的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but the noise gets in the way. And so this was a vzero of of kind of rethinking the tool UX. What could it be like?</p>
</details>

所以，我对此的思考方式是，如果您要与一个同事合作，并且您要为他们做一些复杂的事情，并且您想要沟通，您会想：“好吧，我要仔细选择我的词语。我要进行视觉沟通。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, um, the way I thought about this was if you're designing for a if you're if you're going to a co-orker and you're going to do something complicated for them and you want to communicate, you think, okay, I'm going to choose my words carefully. I'm going to communicate visually.</p>
</details>

我会停下来检查它是否正确。所以，我希望这感觉相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I'm going to stop and check um whether whether it's right. And so, I wanted this to feel similar.</p>
</details>

所以，您可以在这里看到“拆分个人详细信息”。它通过视觉方式告诉您它正在做什么，并说：“嘿，这正确吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, you can see here split personal details. It's visually telling you what it's doing. Saying, "Hey, is this right?"</p>
</details>

然后它说：“我已对齐。我拍了快照。您可以回滚。我让您负责。您批准了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then it's saying, "I'm aligned. I took a snapshot. You can roll back. I'm holding you accountable. You approved this."</p>
</details>

然后告诉您接下来可以做什么。我们还希望它能够表达自己。所以如果出了问题，它会有点摇头，有点沮丧，这可能也是用户在出问题时的感受。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then telling you what you can do next. We also wanted to it to be able to express itself. So if something went wrong, kind of shaking its head and a little bit of frustration, which is probably what the user is feeling too um when something goes wrong.</p>
</details>

最后，当它做错事时，它会退让，并说：“好吧，我把控制权交还给您。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then finally, it can back off uh when it gets something wrong and sort of say, "Okay, I'm handing control back over to you."</p>
</details>

这感觉好多了，感觉我们找到了“纹理”，找到了放置这种材料的正确位置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and that's a lot more inter that feels a lot better and it and it felt like we had found the grain and found the right place to put this this material um with this.</p>
</details>

所以这个最酷的地方在于，当我们实施它时，我们意识到它可以在其他地方发挥作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what's really cool about this one is that as we're implementing it, we've realized that it can um it can fit in other places.</p>
</details>

所以，不仅仅是在对话流中，它还可以内联使用。这很快就会出现在我们的内联转换功能中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh not just in conversational flow, it can fit in line. Um and this is going to be in our kind of like inline transform functionality um really soon.</p>
</details>

所以我认为，当我们发现一项新技术并与之合作时，我们面临着仅仅自动化那些繁琐工作的风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I I think like as we as we find a new technology and work with it, we run the risk of just automating the tedious things.</p>
</details>

我对前两次演讲感到非常兴奋，因为其中有一些“涌现”的东西，对吧？一些我们以前无法做到的有趣事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was so excited about those previous two talks because there's kind of like some emergence in there, right? Like something interesting that we weren't be able to do before.</p>
</details>

我最兴奋的是那些从“玩耍”中涌现出来的事情。我们有几年停止了玩耍，当时我们有了互联网，我们非常兴奋，CSS3和HTML5问世时，我们玩了很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I'm most excited about those thing like what what emerges from from playing. Um we stopped playing for a few years um when we were kind of got the internet and we were like really excited and CSS3 came out and then like HTML 5 we were playing a lot.</p>
</details>

现在我觉得我们又都在玩了，所以这让我非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um now I feel like we all playing again and so that's really exciting for me.</p>
</details>

这是一个我玩耍的例子。我创建了这个V0，我们一直在寻找一种“前倾”的代理特性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um this is an example of me playing. Um I created this uh V0 and I I we've been in search of this characteristic of an agent that is that feels forwardleaning.</p>
</details>

我的意思是，它是一个好奇且兴奋的代理，但它喜欢完成任务，并且非常专注。所以不会失控，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I mean by that is it's an agent that's curious and it's excitable, but it likes getting done. Um, and it's very focused. Um, so not going crazy, right?</p>
</details>

我们都见过LLM在您给它任务时做得太过火，那感觉不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we've all seen the LLMs kind of go too far when you give it a task and that doesn't feel good.</p>
</details>

所以在这里，我拖入了一个**JSON**（JavaScript Object Notation: 一种轻量级数据交换格式）文件和一个**CSV**（Comma-Separated Values: 逗号分隔值文件）文件。代理决定，将这两者合并会很好，因为数据看起来非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so here I dropped a JSON file and a CSV file. Um, and the agent decided, um, you know, it'll be good to do is combine those two things because the data look pretty similar.</p>
</details>

所以在这里我们可以看到它将这两个文件合并成一个。这是它做得很好的一件事，我不需要要求它这样做。它自己发现了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so here we can see it's it's combined the the file the two files into one. Um, that's a good thing that it did. I didn't have to ask it to do that. Um, it picked up on it.</p>
</details>

然后，它写了一份报告。所以它告诉我们它在做什么。它说：“嘿，我发现了一些重复项。这可能是您接下来需要做的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then after that, it wrote a a report. So, it told us what it was doing. Said, "Hey, I found some duplicates. This is probably what you need to do next."</p>
</details>

所以它建立了上下文。我当时只是想用Claude 4玩玩，感受一下材料，看看会是怎样的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, it built up context. Um, and I was actually just trying to play with Claude 4 here and feel the material and kind of see how it would be.</p>
</details>

但我意识到我偶然发现了我们正在寻找的这种特性。它提出了一些建议，并生成了一个我要求的幻灯片演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I realized um I'd kind of come across this nature that we were after. Um it made some suggestions and generated a slide deck which I I asked it for.</p>
</details>

所以仅仅通过拖入两个文件，它就完成了一些“涌现”的事情。现在我们正在将这功能融入到我们即将推出的新产品“Obvious”中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so within just dropping two files um it's it's done something emergent. Um and now we're baking this into our our new product called obvious um which is coming soon.</p>
</details>

另一个想法是给我们的代理一个知识库。所以我们所有的客户电话都被录音和转录了，就像我们大多数的电话一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another one was we had this idea of giving our agents a knowledge base. So all the customer calls we'd had with them were all recorded and transcribed like most of ours are.</p>
</details>

我们有客户的文档，所以我们将其放入知识库中，然后当我们分析所有这些客户数据时，我们根据这些数据提出了建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and we had documentation from the customer and so we put it in to knowledge base and then when we analyzed all of this customer data, we surfaced up um suggestions based off that.</p>
</details>

我完全期待更好的建议，我完全期待更多的建议，我也得到了这些。但在这里，代理决定：“我无法修复这个问题，但我知道如何修复它，所以我将告诉您如何修复它。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was fully expecting better suggestions. I was fully expecting more suggestions got those. But then here um the the agent decided I can't fix this but I know how to fix it and so I'm going to tell you how to fix it.</p>
</details>

所以它在这里建议用户实际上应该去找人力资源部门，让他们生成缺失的员工ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it suggests here that the user actually goes to HR and gets them to generate the missing employee IDs.</p>
</details>

这里涌现出了一些我没有预料到的东西。也许您看到这个会觉得这很明显，但对我来说，我没有想到它能够帮助人类去完成它自己无法完成的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what emerged here was something I wasn't expecting. Maybe you look at this and say that makes a lot of obvious sense, but to me I wasn't expecting it to be able to help the human to go and do the job um where it couldn't.</p>
</details>

所以这非常令人兴奋。我想如果没有玩耍和好奇心，我可能无法达到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so that was really exciting. I don't think I would have be able to get to that without um playing and and being curious.</p>
</details>

### 主题三：展望未来

最后我想谈谈的是“展望未来”。我们都展望未来，因为你怎能不这样做呢？现在模型总是有新的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then the last thing I I want to talk a little bit about is eyes on the future. And we all have our eyes on the future because how can you not? There's always something new now um with models.</p>
</details>

所以，我喜欢把它想象成：“你的自行车上的鹈鹕是什么？”我的自行车上的鹈鹕之一就是自动补全。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so I I like to think about it as like what's your pelican on a bicycle? Um, and one of my pelican on a bicycles is autocomplete.</p>
</details>

我对此非常兴奋。实际上，用LLM来做这个可能不是一个好主意，但我想制作一个由LLM支持的自动补全功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm super excited about. It's probably a bad idea um actually to use an LLM for this, but I'm like I want to make an autocomplete that um is backed by an LLM.</p>
</details>

所以这个有100个修复数据的建议。这有点像这两者之间的竞争。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this one has 100 suggestions for fixing some data. Um and it's kind of like a bake off um between these two things.</p>
</details>

我还没有找到一个既非常快又非常擅长解决这个问题的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm yet to find um a model that is both very fast and very good at this problem.</p>
</details>

但这只是我为自己创建的一个基准或工具，以便能够感受我们正在获得的这些材料。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but this is a a a benchmark or something that I've created just for myself to be able to feel the materials um that we're getting.</p>
</details>

所以我现在在我的设计实践中思考这个问题，比如我关心的是什么？我能否设计未来，并开始思考我想要的“形态因子”，然后构建一个能够实际测试它的应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think about that for my design practice now, like what are the things I care about and can I like design into the future and start to think about the form factors I want and then build an application that can actually test that.</p>
</details>

所以，是的，这就是我今天想分享的全部内容。我非常期待看到我们用新工具构建的所有新“形态因子”。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah, that's uh all I have for you today. I I'm very excited to see all the new form factors um that we build um with our new tools. Thank you.</p>
</details>