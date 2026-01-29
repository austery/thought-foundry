---
author: The MAD Podcast with Matt Turck
date: '2026-01-29'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=K5WPr5dtne0
speaker: The MAD Podcast with Matt Turck
tags:
  - reinforcement-learning
  - model-architecture
  - inference-scaling
  - post-training
  - model-evaluation
title: 2026年LLM现状：RLVR、GRPO、推理扩展——Sebastian Raschka深度访谈
summary: 访谈嘉宾**Sebastian Raschka**深入探讨了2026年大型语言模型（LLM）的最新进展。他指出，架构创新已非主要驱动力，后训练（特别是**RLVR**和**GRPO**）及推理扩展是当前提升模型性能的关键。**RLVR**通过可验证奖励机制，大幅提升了模型在数学和编程等领域的推理能力，且成本远低于预训练。此外，工具使用和私有数据在特定行业中对LLM的定制化和性能提升至关重要。他预测，未来企业将更倾向于内部开发LLM，以利用其专有数据，而非完全依赖通用模型，这标志着LLM发展将走向更高效、更专业化的方向。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Sebastian Raschka
companies_orgs:
  - OpenAI
  - Google
  - Meta
  - DeepSeek
  - Mistral AI
  - Nvidia
  - Anthropic
products_models:
  - GPT
  - Gemini
  - Claude
  - Grok
  - Llama
  - Stable Diffusion
  - Mamba
  - DeepSeek
  - Mistral
  - GPTOSS
  - RLHF
  - RLVR
  - GRPO
  - GDPO
  - AdamW
media_books:
  - Build a Large Language Model from Scratch
  - Reasoning from Scratchbook
status: evergreen
---
### 引言

**Matt Tur**: 大家好，我是**Firstark**的**Matt Tur**。欢迎收听**Matt**播客。今天我的嘉宾是**Sebastian Raschka**，一位**AI**研究员，也是该领域最优秀的教育者之一。他以其深入的技术博客文章和题为《**从零构建大型语言模型**》（**Build a Large Language Model from Scratch**）的著作而闻名。在本期节目中，我们将深入探讨2026年**LLM**的现状，包括架构、后训练、扩展、基准测试、工具使用以及这一切对下一波**AI**浪潮的意义。请欣赏与**Sebastian**的这次深入而易懂的对话。

<details>
<summary>Original English</summary>

**Matt Tur**: Hi, I'm **Matt Tur** from **Firstark**. Welcome to the **Matt** podcast. Today my guest is **Sebastian Raschka**, an **AI** researcher and one of the best educators in the field. Well known for his in-depth technical blog posts and his book entitled **Build a Large Language Model from Scratch**. In this episode, we go deep on the state of **LLMs** in 2026 architectures, post-training, scaling, benchmarks, tool use, and what it all means for the next wave of **AI**. Please enjoy this in-depth but very approachable conversation with **Sebastian**.

</details>

**Matt Tur**: **Sebastian**，欢迎你。

<details>
<summary>Original English</summary>

**Matt Tur**: Hey **Sebastian**, welcome.

</details>

**Sebastian Raschka**: 谢谢你今天邀请我来你的播客。我很高兴能谈论任何关于**AI**的话题。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Thanks for inviting me on your podcast today. I'm excited to talk about anything **AI**.

</details>

**Matt Tur**: 太棒了。我们将深入探讨2026年**LLM**的现状，包括后训练和强化学习。但我想从**Transformer**架构本身开始这次对话。它显然是整个生成式**AI**革命的支柱，但现在也已经有八年历史了。尽管过去一年基于**LLM**的系统取得了巨大进步，但似乎在替代架构方面也有一些有趣的发展。那么，有什么引起了你的注意吗？你认为**Transformer**架构的日子可能终于要走到尽头了吗？

<details>
<summary>Original English</summary>

**Matt Tur**: Wonderful. So we are going to go in the state of **LLM** in 2026 in depth including very much post training and reinforcement learning but I wanted to start the conversation with the **Transformer** architecture itself obviously the backbone of the entire generative **AI** revolution but also over 8 years old at this point and for all the tremendous progress in **LLM** based systems over the last year it also seems that there have been some interesting developments in terms of alternative architectures. So has anything caught your eye and do you think that's a world where the days of the **Transformer** architecture could finally be numbered?

</details>

### Transformer架构的现状与未来

**Sebastian Raschka**: 这是一个非常有趣的问题。你提到了八年，我认为差不多是八九年了，因为**Transformer**架构是在2017年发布的。时间确实不短了。你提出的问题是它是否是最终架构。我想人们可能每年都会问这个问题：这是我们未来应该押注的东西吗？比如说在2026年。我目前会说是的，因为它仍然是**最先进的**（**state-of-the-art**）技术。在**最先进的**性能方面，目前还没有真正更好的东西能带来更高质量的结果。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: That is actually a very interesting question to start with. I mean it's starting at the very beginning with the **Transformer** architecture. You said 8 years. I think it's almost 8 9 years because 2026 it came out in 2017. Quite a long time. And I think the question you raised is if it's like the final architecture. I think people probably ask that every year. Is this the thing we should be betting on going forward? Let's say in 2026. I would say right now yes, because it's still the **state-of-the-art**. So there is nothing really better in terms of **state-of-the-art** performance getting better quality results.

</details>

**Sebastian Raschka**: 不过，我们目前看到的是能使其更便宜的替代方案。有一些技巧可以使架构本身更便宜，比如**线性注意力变体**（**linear attention variants**），它们是**Transformer**架构中的一个构建模块。一个重要的进展是**专家混合**（**Mixture of Experts**），它本质上是在不增加使用和推理成本的情况下，使模型变得更大，同时保持合理性并扩展规模。你会看到围绕该架构的各种杠杆、技巧和窍门，但其核心仍然是相同的架构。事实上，你可以拿一个**GPT-1**或**GPT-2**模型，用几行代码就能将其转换为最新的**DeepSeek** **3.2**版本架构。这并不是一个巨大的飞跃，它仍然是相同的骨架。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: What we have seen so far though is alternatives that make it cheaper. So there are tricks to make the architecture cheaper itself like **linear attention variants** that are like a building block in the **Transformer** architecture. A big one was a **mixture of experts** which is essentially making the model bigger without necessarily making it more expensive to use and inference like keeping like that reasonable while expanding the size. you see all kinds of you I would say like levers tips and tricks hacks around that architecture but it's still kind of like the same architecture in the core and you can actually in fact take a **GPT-1** or **GPT-2** model and with a few I mean few lines of code almost you can transform it into the latest **DeepSeek** version **3.2** to architecture. It's not like a big leap. It's still the same scaffold.

</details>

**Sebastian Raschka**: 同时，也有其他替代方案涌现，比如**扩散模型**（**diffusion models**），特别是**文本扩散模型**（**text diffusion**）或**Mamba模型**（**Mamba models**），**状态空间模型**（**state space models**）等等。它们都试图解决**Transformer**模型存在的问题，即它既昂贵又庞大，运行和训练成本都很高。但当然，天下没有免费的午餐。这些模型也有其他权衡。在某些情况下，比如**扩散模型**或**文本扩散模型**，它们的运行成本更低，但你无法从中获得相同的质量。如果你想获得相同的质量，在这种特定情况下，你必须增加去噪步骤，最终会变得非常昂贵。所以，目前我认为我们正处于一个没有免费午餐的阶段，我们仍在努力找出下一个最佳架构。目前还没有任何东西能取代它。所以我的简短回答是，如果我现在要构建一个**最先进的**模型，那仍然会是基于**Transformer**的模型。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: At the same time, you have other alternatives popping up like **diffusion models**, **text diffusion** particular or **Mamba models**, **state space models** and so forth. They all try to address a problem that the **Transformer** has namely that it is expensive and big and expensive to run and train. But then of course there's no free lunch. These have other trade-offs. They are like cheaper to run in certain instances. If you take a look at **diffusion models** or **text diffusion models**, but then you don't get the same let's say quality out of it and if you want to get the same quality out of it in in this particular case, you have to crank up the den noising steps and then you end up with something very expensive. So right now I think we at that point where there is no free lunch we are still you know like we are trying to figure out what is the best next architecture right now. There's nothing on the horizon that would replace that. So my short answer is I would say right now if I were to build a **state-of-the-art** model that would be still a **Transformer**-based model.

</details>

### 世界模型与递归模型

**Matt Tur**: 很好。你对**世界模型**（**world models**）有什么看法？

<details>
<summary>Original English</summary>

**Matt Tur**: Great. What do you make of **world models**?

</details>

**Sebastian Raschka**: **世界模型**也是一个有趣的热门话题。**世界模型**方面主要用于图像和物理等领域。**世界模型**本质上是拥有内部世界模型的模型。它们在内部模拟你外部拥有的东西。例如，如果你有一个下棋模型，它内部就有一个内置的国际象棋模拟器，这样它就能做出更好的预测或预测下一个状态。我认为这对于机器人技术特别有趣。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: **World models** are also an interesting hot topic. So there is the whole **world model** aspect for more like images and physics and that stuff. So **world models** are basically models that have like an internal model of the world. So they kind of simulate something internally what you have externally like for example if you have like a chess playing model it has like an internal chess simulator built inside so it can kind of make better predictions or predict the next states I think that's particularly interesting for robotics.

</details>

**Sebastian Raschka**: 但回到**LLM**，**Meta**也发表了一篇论文，在我看来，它作为基于代码的**LLM**的改进或下一步非常有前景。用于编码的**LLM**仍然是**下一个词元预测器**（**next token predictors**）。但除此之外，他们还尝试预测变量的内部状态。这就像在训练过程中，如果有一段**Python**代码，目标是说：“好的，在这个迭代中，如果有人逐步执行代码，这个变量将具有那个值。”这在某种意义上为模型提供了更多上下文，更多关于训练数据的信息，它还迫使模型在引号中更好地“理解”训练数据。所以，它不是仅仅通过暴力猜测最可能的下一个词元，而是对当前状态有一种理解。我认为人类也是这样工作的。例如，当我作为人类阅读代码时，我也会尝试可视化、口述或写下我的**for**循环中变量的状态。例如，在第一次迭代、第二次迭代时，我学习编码时，我实际上有一个纸质笔记本，用铅笔写下这些迭代类型的东西。这有点像这种方法，但本质上是针对**LLM**的。我确实认为这可能更昂贵，但它也可能在一定程度上推动**最先进的**技术发展。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But coming also back to **LLMs** there was also a paper by **Meta** it looked very promising to me as refinement or a next step for codebased **LLMs**. **LLM** for coding are still **next token predictors**. But in addition to that what they did is they also tried to predict the internal states of the variables like that was like a during training an objective to if you have a **Python** code to say okay this at this iteration when I if someone would step through the code this variable would have that and that value and so this is in a sense giving the model more context more information about the training data and it forces the model also to kind of like in quotation marks understand training data better so it's like instead of just you know brute force just what is the most likely next token, it has kind of like an understanding of what it is right now. I think that's also how humans work. When I for example as a human read through code, I'm also trying to visualize or verbalize or write down what are the states of the variables in my for loop. For example, at this first iteration, second iteration back then when I learned coding, I actually had like a paper notebook and was like writing down things with a pencil basically like these types of iteration. It's kind of like also this approach but for **LLMs** essentially and I do think that is something that is maybe more expensive to do but it is also something that might push the **state-of-the-art** a little bit.

</details>

**Matt Tur**: 那么，**小型递归模型**（**small recursive models**）呢？在这种语境下，“递归”是什么意思？

<details>
<summary>Original English</summary>

**Matt Tur**: And what about **small recursive models**? What does recursive mean in this context?

</details>

**Sebastian Raschka**: 好的，这也是2025年的一个热门话题。当时有**分层推理模型**（**hierarchical reasoning model**），从中我们又看到了另一篇论文，即**微型推理模型**（**tiny reasoning models**）。它们之所以有趣，是因为它们在**ARC基准测试**（**ARC benchmark**）上以非常小的尺寸获得了非常好的性能。**ARC**就像一个智商测试，一个逻辑谜题，里面有不同的符号。你看到一个由不同符号组成的数组，你必须预测缺失的部分，比如右下角的缺失部分。这有点超越了文本和通常在互联网上的内容。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So that was also a big topic in 2025. There was the **hierarchical reasoning model** and from that we had also another paper **tiny reasoning models**. And so they are interesting because they were getting very good performance for their very small size on the **ARC benchmark**. So **ARC** is like a benchmark almost like an IQ test like a logic puzzle where there are like different symbols and you have to you see a let's say an array of different symbols and you have to predict like let's say what's the missing thing here in the bottom corner and it's kind of like going a bit beyond text and beyond things usually on on the internet.

</details>

**Sebastian Raschka**: 从这个意义上说，我认为**ARC基准测试**背后的动机是希望有一个真正测试模型在新任务上的能力的东西，这些任务在训练期间从未出现过。模型如何从该基准测试中获取一些示例并推广到新的棘手问题。这个**ARC基准测试**也有不同的迭代版本，使其变得越来越难。**分层推理模型**之所以流行，是因为它在该基准测试上的表现相对较好，与**Gemini**、**ChatGPT**等非常昂贵的模型相比。它是一个**Transformer**架构。然后是**微型推理模型**，我认为它甚至比**分层推理模型**更简单。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So in that sense I think the motivation between behind this **ARC** benchmark was to have something that really tests the capabilities of that model on something new that hasn't been shown during training like a new task and how well the model can take some examples from that benchmark and generalize to new tricky problems. Also different iterations of this **ARC benchmark** to make it harder and harder and harder. **hierarchical reasoning model** it became like popular because it performed relatively well on that benchmark compared to very expensive models like **Gemini** **Chubbyd** and so forth and it is a **Transformer** architecture and then there's the **tiny reasoning model** that is I think even simpler than the hierarchical reasoning model.

</details>

**Sebastian Raschka**: 它的核心思想是**递归**（**recurse**），所以你有一个潜在的存储向量，你通过多次迭代来细化答案，而不是只做一次性生成。你先写一个中间答案，模型会检查它是否正确，然后进行下一轮，再下一轮，不断细化答案。这也不便宜，但模型本身便宜得多。它也引起了很大的轰动，因为人们觉得“哦，我们不需要这些大型的**ChatGPT**、**Gemini**类型的模型来解决复杂问题”。我认为这在某种程度上是正确的，但我也认为这低估了**ChatGPT**、**Gemini**、**Claude**等的吸引力。它们的吸引力在于，它是一个可以做所有事情的模型，它非常通用，你甚至不需要教人们如何使用它。我可以问任何人，“嘿，这是**ChatGPT**的界面”，那些以前从未使用过它的人也能通过输入一些提示来搞清楚。我可以拖放一张图片，我可以问它一个代码问题，它能同时把很多事情做得很好。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so the idea is that you **recurse** so you have like a latent let's say storage vector or something like that where you refine the answer over multiple iterations instead of just doing a oneshot you let's say write an intermediate answer and the model looks at that looks is this correct or not and takes it another round and another round and and refineses that answer. It is not cheap either but the model itself is much cheaper. it made a lot of waves also because like oh we don't need these big **Chubbyd** **Gemini** type of models to solve complex problems and I think this is to some extent true but I think also that kind of underestimates the appeal of **Chubbyd** **Gemini** **Claude** and so forth and the appeal there is it's like one model that can do it all it's very general purpose you don't have to even really teach people that much how to use that model I can ask anyone like hey you know here's is **Judgly** be the interface and people who have never used it before they will be able to figure it out just typing some prompts and I can drag and drop an image there I can ask it a code problem you know it's doing a lot of things very well at the same time.

</details>

**Sebastian Raschka**: 同时，这也是一个缺点，因为它是一个庞大的模型，非常昂贵。所以，如果你有一个简单的任务，运行这样一个大型模型，并且规模如此之大，就会非常昂贵。因此，开发这些**专用模型**（**special purpose models**）就有了吸引力，比如**微型推理模型**、**分层推理模型**，它们非常专注于特定的任务。例如，在论文中，他们有**寻路**（**path finding**），比如在迷宫中寻路，这就像一个玩具问题，然后是**ARC基准测试**。但每一个都是不同的模型，而不是一个模型可以做所有三件事。从这个意义上说，我认为很难与**Gemini**或**ChatGPT**这样的模型进行比较。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: It's also a downside because it's this gigantic model which is very expensive so if you have a simple task that is very expensive to run such a big model and at such a big scale and so there is then this appeal to develop these **special purpose models** so **tiny reasoning models** **hierarchical reasoning models** they are very specific to a particular task task. For example, in the paper they had **path finding** like finding the path through a maze or something like that like a toy problem and then the **ARC benchmark** but each one was a different model. It was not like one model that could do all three things. In that sense, it is I think really hard to compare to something like **Gemini** or **JJP**.

</details>

**Sebastian Raschka**: 同时，我确实认为这是一个非常有趣且有前景的方向，因为即使**ChatGPT**可以做所有事情，它也并非总是最便宜的。如果你有一个商业问题，比如你在制造某种东西，你也许可以从一个通用模型开始，但一旦你确切知道任务是什么，并且想要专注于它，那么用一个更便宜的东西来取代那个昂贵的东西可能是有意义的，比如一个你可以插入的模块。你甚至可以让**ChatGPT**或**Gemini**这样的**LLM**将这些模块作为工具使用。所以，我认为这是一个很好的发展，但我不认为将其与**最先进的LLM**进行比较是完全公平的。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: At the same time, I do think this is a very interesting and promising direction because even though **JPT** can do everything, it's not always the cheapest thing. If you have a business problem, you are maybe manufacturing something, maybe you can start with a generalist model, but then once you know exactly what the task is and you want to hone in on it, maybe it makes sense to replace that expensive thing by something like that that is cheaper, you know, like a module that you can plug in and you can even have an **LLM** like **CHPD** or **Gemini** use those as tools. And so I think that's it's a great development, but I don't see it quite fair comparison to, you know, **state-of-the-art LLMs**. Basically,

</details>

### 文本扩散模型

**Matt Tur**: 我想回到你几分钟前提到的**扩散模型**，特别是用于文本的。去年，我相信**Google DeepMind**发布了一个名为**Gemini Diffusion**的模型。那么，这些模型是什么？它们与**Transformer**模型有何不同？

<details>
<summary>Original English</summary>

**Matt Tur**: I want to come back to something you mentioned a few minutes ago, **diffusion models**, especially for text. Last year, I believe **Google DeepMind** announced one called **Gemini Diffusion**. So, what are those and how different are they from **Transformers**?

</details>

**Sebastian Raschka**: 当然，**扩散模型**是一个很大的领域，起源于图像模型，比如不久前，大概两三年前，**Stable Diffusion**引起了很大的轰动，它基于一篇研究论文，其中有一个模型取代了以前的**生成对抗网络**（**generative adversarial networks**），后者是生成图像的一种想法。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: There's of course the big field of **diffusion models** coming from image models like not too long ago maybe two three years ago there was like the big hype around **Stable Diffusion** which was based on a research paper where they had like a model that replaced going back **generative adversarial networks** which were an idea for generating images.

</details>

**Sebastian Raschka**: **扩散模型**本质上是，不再是**生成器**和**判别器**（**generator and discriminator**）这种两个网络相互竞争的设置，而是一个**去噪管道**（**denoising pipeline**），从随机噪声开始，对图像进行去噪，最终生成逼真的图像。你也可以使用文本提示来引导生成，而不是生成随机图像。这基本上就是我们现在看到的现代**生成式AI图像AI**。人们想知道，我们能否对文本做同样的事情？我们能否使用这种去噪管道来生成文本，而不是使用**Transformer**？

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so the **diffusion models** were essentially instead of having generator and discriminator setup like two networks competing against each other, it was like a pipeline that was denoising starting with random noise denoising an image and coming up basically with so with realistic looking images and you could also have a text prompt and basically guide in terms of it's not like a random image you can basically guide what you want to generate. This is basically the modern generative **AI** image **AI** that we see out there. People were wondering okay can we do the same thing for text. So can we use this pipeline like this the denoising pipeline to generate text instead of using **Transformers**?

</details>

**Sebastian Raschka**: 我说“而不是**Transformer**”，其实**扩散模型**也可以是**Transformer**，因为**Transformer**是一种架构。所以现在的**LLM**，特别是**自回归Transformer**（**auto regressive Transformers**），意味着这些**LLM**一次生成一个词元。下一个词元总是依赖于前面的词元。而**扩散模型**则不同，你一次性并行生成所有内容，但它可能非常混乱，然后你进行多次迭代，对整个内容进行去噪和细化。它的优点是速度快，因为一次迭代生成一些东西，然后通过几个步骤进行细化，这可能比使用**LLM**生成长响应更便宜，因为**LLM**有很多顺序步骤。所以，比如说16个去噪步骤比生成2000个词元、2000个步骤要少。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Or I mean I'm saying instead of **Transformers** **diffusion models** can be **Transformers** are often also **Transformers** because **Transformers** is the architecture. So **LLM** nowadays it's specifically **auto regressive Transformers** which means these are **LLMs** that are generating one token at a time. So like where the next token always depends on the previous tokens. And so with **diffusion models** you don't have that you have you generate everything at once in parallel but it might be very messy and then you have multiple iterations. You take that whole thing and denoise it basically refine it. What's nice about it is well it is fast because it's like a one iteration generates something and then you have a few steps that refine that which might be cheaper than using an **LLM** to generate a long response because then you have a lot of sequential steps and so let's say 16 denoising steps is fewer steps than having I don't know 2,000 tokens 2,000 steps that you generate something with.

</details>

**Sebastian Raschka**: 缺点是，你所有东西都是并行的，而现在有很多任务需要**顺序处理**（**sequential processing**）。例如，如果你考虑推理模型或工具使用，当你有一个推理模型，你要求它回答一个问题，模型可能会进行网络搜索作为其答案的一部分，所以你必须中断生成。我认为**扩散模型**有这些缺点，但你提到的**Gemini**，我记得看到**Gemini Diffusion**的网站上写着“即将推出”，他们将自己的**扩散模型**与他们最新的**Flash**模型（他们称之为最便宜的模型）进行了比较。作为**Flash**模型的替代品，它在相同性能水平下甚至更快，但他们并没有将其作为他们的**最先进的**模型发布。它更像是一个更便宜的模型，可能用于日常使用，或者免费层级。所以，将**扩散模型**作为**自回归Transformer**的替代品是一个有趣的方向，但我认为它还不能取代**最先进的**技术。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: The downside is well you have everything in parallel and there are nowadays a lot of tasks that require **sequential processing**. For example, if you think about reasoning models or tool use when you have a reasoning model and you ask or in general you ask a model to answer a question and the model maybe does a web search as part of its answer and so you have to kind of interrupt the generation. I think the **diffusion models** they have these downsides but like what you mentioned is **Gemini** I remember seeing the **Gemini Diffusion** website where they are saying something like coming soon and they compared their **diffusion model** to their latest I think they call it **Flash** the cheapest model and so as an alternative to the **Flash** model being even like I would say faster at the same performance level but they're not putting it out there as their **state-of-the-art** model. It's more like a cheaper model maybe for everyday use maybe for like the free tier or something like that. So it is a interesting direction to go into these **diffusion models** as alternative to the **auto regressive Transformers** but it is not I would say the replacement at the **state-of-the-art**.

</details>

**Sebastian Raschka**: 我认为今年会有一家公司推出一个大型**扩散模型**。所以现在已经有一些**扩散模型**可以使用了，但我还没有看到任何达到**Gemini**、**ChatGPT**、**Anthropic Claude**规模的模型。但我想今年我们可能会看到这样的模型。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I think one company will launch a big **diffusion model** this year. So there are **diffusion models** out there that you can use already but I I haven't seen anything at you know like **Gemini** **Chip** **Anthropic Claude** scale I I think but this year maybe we will see something like that.

</details>

### LLM架构的改进与优化

**Matt Tur**: 太棒了，非常有趣。在**LLM**领域，你提到了这一点，这引发了一个问题，我想很多人都在思考：我们是否正在**LLM**领域看到真正的架构突破，还是我们目前只是在完善已有的东西？你看到了什么在推动架构改进或优化方面的进展？

<details>
<summary>Original English</summary>

**Matt Tur**: Great. Super interesting. In the the world of **LLMs**, you mentioned and that that triggers a question which is what I think a lot of people are wondering which is like are we seeing real architecture breakthroughs within the **LLM** world or are we effectively at this point polishing what we already have within the **LLM** world? What are you seeing that's moving the needle in terms of architecture improvement or optimization?

</details>

**Sebastian Raschka**: 改进更多地不是来自架构本身，而是来自**后训练**（**post-training**）。但回到架构，我认为这仍然是一个有趣的问题，因为有这么多不同的架构，几乎没有人使用完全相同的。它们都非常相似，但并不完全相同。我认为很多都是巧合，有一些调整。如果你看看在某些情况下，在某些训练数据上，在某些训练管道中，比如将**归一化**（**normalization**）或**RMS范数**（**RMS norm**）移到之前或之后会产生微小的差异。我的意思是，这有理论依据，但也有一些例子，比如**OMO 3**，它非常透明，他们改变了**RMS范数**的位置。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Improvement is not so much coming from the architecture anymore. It is basically the **post-training**. But like coming back to the architecture, I think it's still an interesting question because there are so many different architectures and almost no one uses the same one. Like they're all very similar but they are not identical. I think a lot of it is coincidental where there are some tweaks and if you look at the laws that in some cases on some training data in some training pipelines maybe like moving the **normalization** the **RMS norm** before after makes a small difference. I mean there are theoretical justifications for but also for example **OMO 3** which is very transparent they moved the **RMS norm** placement.

</details>

**Sebastian Raschka**: **Gemini**有前置和后置的范数，两端都有。所以，有一些理由，比如**消融研究**（**ablation studies**）表明这可以稳定训练。但假设训练稳定，我认为这不会让你的模型神奇地表现更好。我的意思是，这就像人们通过更换不同的空气过滤器来稍微调整他们的汽车一样。所以，我认为这处于你可以进行微小调整的水平，但它并没有真正改变引擎本身。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So then **Gemini** had a post and prenor they had both on both ends and so there is some justification where okay **ablation studies** show this stabilizes the training but well assuming a stable training it's not going to I think make your model magically perform better I mean this is just like people tune their cars a little bit by you know putting in different air filters and something like that. So I think it's on that level where you can make small tweaks but it's not really changing the engine itself.

</details>

**Sebastian Raschka**: 不过，我们看到的一件事是，现在很多大型架构都在使用**MoE**（**Mixture of Experts**）。我认为这是2025年的新事物。当然，**MoE**并非2025年发明的。这可以追溯到2022年或2023年的**Google Pathways**论文。然后**Mistral**在2024年有一个重要的**MoE**模型。之后，**MoE**似乎沉寂了一段时间。我的意思是，当时只有**ChatGPT**模型被传言是**MoE**。但现在，今年几乎所有人都推出了**MoE**模型，比如每个开放开发者。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: The one thing though what we've seen is a lot of large architectures now using that I think that's a new 2025 thing. Of course, is not invented in 2025. That was I think going even back to the **Google Pathways** paper in I don't know 2022 three something like that. And then **Mixrol** had a big I think it was 2024. Then I think it was pretty quiet. I mean around there was only I think the **Chad GBD** model which was rumored and to be ane. But now this year really almost everyone has an **OE** out there like every every open developer.

</details>

**Sebastian Raschka**: 我会说**DeepSeek**在2024年12月用**DeepSeek** **3**版本重新启动了这一趋势。他们之前也有一个**MoE**模型，但我认为这是每个人都关注的一个，因为它引起了如此大的轰动，人们觉得“哦，他们正在做的事情也许是足够的，是正确的，我们不要尝试一些疯狂的事情，让我们在此基础上迭代。”所以有很多公司直接采用了**DeepSeek**架构。例如，**Kimmy**采用了**DeepSeek**架构，并将其从670亿参数扩展到1万亿参数。甚至欧洲的**Mistral AI**公司也为他们的新**Mistral 3**模型使用了**DeepSeek** **3**版本架构。这是一种运行良好的架构。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I would say **Deepseek** kind of like restarted that trend in 2024 in December with **Deepseek** version **3**. They had an even model before but I think this is like the one that everyone looked at because that made such a big splash that people like oh what they are doing is maybe sufficient it's the right thing let's not you know try something crazy let's like iterate on that so there were a lot of companies adopting straight up the **DeepSec** architecture so there was like I think **Kimmy** had **DeepSe** architecture scaled it up I think to from 670 billion to 1 trillion parameters and then even the European **Mistral AI** company used the **DeepSeek** version **3** architecture for their new **Mistral 3** model. It is something that is working well.

</details>

**Sebastian Raschka**: 但后来**DeepSeek**本身也在此基础上进行了迭代。所以他们有**DeepSeek** **3.2**版本，他们改变了注意力机制。他们有一个**多头潜在注意力**（**multihat latent attention**），这已经是一个很好的调整了。他们添加了**稀疏注意力**（**sparse attention**），**稀疏注意力**也不是新东西，但他们有自己的风格来使其更便宜。我认为其目的是通过训练管道获得更好的建模性能，同时调整架构，以便架构能够吸收这些好处，但同时也要降低运行架构的成本。因为我们看到**GPT-4.5**（也是2025年的传闻）被传言是**GPT-4**的更大版本，但它并不受欢迎，因为它太大太贵了，所以他们放弃了它，转而开发**GPT-5**。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But then **DeepSc** itself they iterated on that too. So they have **DeepSe** version **3.2** where they changed attention mechanism. They had a **multihat latent attention** which is already a nice tweak to they added **sparse attention** where **sparse attention** again it's not new but they had their own flavor of it to make it cheaper. The idea I think is to get better modeling performance through the training pipeline while tweaking the architecture so that benefits can be of course main like absorbed by the architecture but then also at the same time to bring down the cost of running the architecture because we've seen with **GPD-4.5** which was also just 2025 **GPD-4.5** was rumored to be a bigger model a bigger version of **GPD4** but it was not very popular because it was too big too expensive and so they kind of abandoned ed and went a different direction with **GPD5**.

</details>

**Sebastian Raschka**: 所以我确实认为，我不会期待更大的架构。我期待更高效的架构调整，以更少的计算量获得相同的建模性能，因为这样你就可以以相同的成本获得更多的词元，而这些词元会给你带来更好的性能，比如**推理扩展**（**inference scaling**）等。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so I do think well I wouldn't expect bigger architectures. I would expect more efficient architectures tweaks getting the same modeling performance for less compute because then you can have more tokens for the same cost and the tokens they give you better performance like **inference scaling** and so forth.

</details>

**Matt Tur**: 但你认为那里还有进步的空间吗？你不是“预训练已死”阵营的一员。

<details>
<summary>Original English</summary>

**Matt Tur**: But you see room for progress there like you're not in the pre-training is dead camp.

</details>

**Sebastian Raschka**: 我会说**预训练**（**pre-training**）并没有死，但**预训练**很无聊。它不再是唾手可得的成果了。我认为唾手可得的成果曾经在**预训练**中，但现在你仍然需要很好的**预训练**，但我认为这更难了。我的意思是，我不会说更难，但你几乎可以在其他地方获得更好的投资回报。我会说**预训练**并没有死。它只是现在不是最受欢迎的烧钱之处。我认为现在把大部分预算投入到**后训练**中更有意义。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I would say **pre-training** is not dead but **pre-training** is boring. So, it's not where the lowhanging fruit is anymore. I think the low hanging fruit used to be in **pre-training**, but now you need really good **pre-training** still, but it is, I think, harder. I mean, I wouldn't say harder, but you can get better bang for the buck elsewhere almost. I would say **pre-training**, I don't think it's dead. It's just not, let's say, the most popular thing to spend money on right now. I think it would make more sense to put a lot of that budget into **post-training** right now.

</details>

### 后训练技术：RLVR与GRPO

**Matt Tur**: 好的，我们来谈谈**后训练**。在你的博客文章中，你提到2025年是**RLVR**和**GRPO**之年。你有一个很好的时间线，你说2022年是**RLHF**，它给我们带来了**ChatGPT**。2023年是**LoRA SFT**。2024年是**中间训练**（**mid-training**）之年，2025年是**RLVR**和**GRPO**之年。所以，如果你能向我们介绍这些技术，我将非常乐意。那么，公平地说，这两种技术都属于**后训练**的范畴。我们来谈谈**RLVR**，并从定义开始。**RLVR**与常规的**RL**（**强化学习**）有什么区别？

<details>
<summary>Original English</summary>

**Matt Tur**: Okay, let's go into **post-training**. So in your blog post, you mentioned that 2025 was the year of **RLVR** and **GRPO**. So you had like a nice timeline where you say 2022 was **RHF** which gave us **JGPT** plus **PO**. 23 was **Laura SFT**. The 2024 is a year of **mid-training** and 2025 the year of **RLVR** and **GRPO**. So would love it if you could walk us through those techniques. So fair to say so both of those belong to the world of **post-training**. Let's pick **RLVR** and let's start with the definition. What what does **RLVR** mean versus regular **RL**?

</details>

**Sebastian Raschka**: 我会说**RLHF**（**Reinforcement Learning with Human Feedback**，人类反馈强化学习）是我们在**LLM**中长期以来看到的最大飞跃，因为它将**GPT**从**GPT**变成了**ChatGPT**。**RLHF**，也就是带有人类反馈的强化学习，从这个意义上说，**RLVR**（**Reinforcement Learning with Verifiable Rewards**，可验证奖励强化学习）也实现了另一个飞跃，它基本上将模型从简单的聊天模型变成了推理模型。**RLHF**和**RLVR**都包含**RL**，所以两者都基于**强化学习**，但我的意思是，这种**强化学习**与下围棋的**强化学习**有点不同，它在**LLM**的语境中更特殊、更简单。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I would say **RLHF** is the biggest leap in **RLM** we have seen in a long time because that was taking **GPT** from **GPT** to **ChatGPT**. you know like the **RLHF** that **reinforcement learning with human feedback** and in that sense it's almost like **LRVR** which is **reinforcement learning with verifiable rewards** took that other leap basically from just simple chat model to a reasoning model both **RLHF** and **RLVR** have the **RL** in it so both are based on **reinforcement learning** but I mean this **reinforcement learning** is a bit different from the **reinforcement learning** that plays go it's almost like is a special thing in simpler thing in in the context of **LLMs**.

</details>

**Sebastian Raschka**: 但其核心思想是，它不再是做**下一个词元预测**（**next token prediction**），仅仅预测下一个词元，而是更多地关注完整的答案，然后根据该答案给予奖励。比如在**RLHF**中，你有多个答案，然后你说你更喜欢哪个。或者在**RLVR**的情况下，你查看完整的答案，然后假设这是一个数学问题，你说数学问题的最终答案是正确还是不正确。这就是**下一个词元预测**与**预训练**以及这里的**RL**之间的主要区别。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But the idea is that instead of doing **next token prediction**, just predicting what's the next token, it's more like looking at the full answer and then based on that answer, you give a reward like in **RHF**, it's you have multiple answers and then you say which do you prefer or in the case of **LR**, you look at the full answer and then let's say it's a math problem, you say the math problem is correct, the final answer of the math problem is correct or incorrect. That's like the main difference between **next token prediction** and **pre-training**. And then the **RL** here.

</details>

**Sebastian Raschka**: 所以，**RLVR**是由**DeepSeek R1**推广的，它基于**DeepSeek** **3**版本，**R1**于2025年1月发布。与此同时，他们还引入了你提到的**GRPO**算法，它们配合得很好，因为它们使整个过程更高效，但这并非必须。所以，你理论上可以用**RLHF**中使用的**PO**算法来做**RLVR**。现在，为什么我认为这是一个如此强大的组合呢？因为它使事情更高效。在**RLHF**中，你必须让人类对答案进行排名。因为目标本质上是训练一个模型，使其偏爱某种风格而非另一种。例如，为了安全，比如减少脏话。如果有两个答案，就使用脏话较少的一个；或者如果你有一个解释，也许使用更简单易读的解释，诸如此类。但你总是需要有人比较这些答案，并说“好的，这个答案比另一个答案更好”。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So **RLVR** was kind of like popularized by **DeepSync R1** which was based on **DeepSync** version **3** and that came out **R1** came out January 2025 and with that they also introduced the **GRPO** algorithm you mentioned but it well they go well together because they make it more efficient the whole thing but it doesn't have to be. So you could technically do **LRVR** with a **PO** algorithm that was back used back in **RHF**. Now why I think it's such a powerful combination is well it just makes things more efficient with **RHF** you had to have people ranking answers. So because the the goal was essentially to train a model that prefers one style over the other. So, for example, for safety, like reducing swear words. If there are two answers, use the one with fewer swear words or if you have an explanation, maybe use the explanation that is simpler to read and these types of things. But you always have to have someone who compares these answers and says, "Okay, this answer is better than the other answer."

</details>

**Sebastian Raschka**: 但你在**RLHF**过程中所做的是训练一个**奖励模型**（**reward model**），这是另一个**LLM**，它为你提供这些信息。所以，到那时，你可以用模型取代人类来查看这些答案。所以你有了这个在循环中自动完成的另一个模型。这更昂贵。现在你基本上有了两个模型。然后还有一个**价值模型**（**value model**）。**价值模型**在内部有点像**奖励模型**，但它也会更新，作为强化学习信号的一部分进行一些预测。所以你基本上有三个模型在内存中。如果你进行**ChatGPT**风格的训练，比如**DeepSeek** **3**或6000亿参数这样的大型模型，你就有三个6000亿参数的模型。你必须把它们都保存在内存中，这非常昂贵。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: What you do then though is during the **RLHF**, you train a **reward model**, another **LLM** that provides this information for you. So, at that point, so you can replace humans looking at these answers. So you have this other model that does it automatically as part of your loop. It's more expensive. Now you have two models essentially. And then there's also a **value model**. So the **value model** is internally kind of like a **reward model**, but it gets also updated to make some predictions as part of the **reinforcement learning** signal. And so you have basically three models in memory. And if you have **CHPT** style training like large models like or even like **DeepSe** three or 600 billion parameters, you have three times 600 billion parameters. and you have to keep them all in memory. It's very expensive.

</details>

**Sebastian Raschka**: 所以在**RLVR**与**GRPO**中，你替换了其中两个模型。所以对于**RLHF**与**PO**，你有三个模型，你用**可验证奖励**（**verifiable rewards**）替换了那个**奖励模型**。所以，不再是有人说“哦，我更喜欢这个答案而不是另一个”，或者使用**LLM**，你现在有了可以自动验证的任务。例如，数学。你可以有一个数学解析器。它可能像**Wolfram Alpha**一样。你有正确的解决方案，你有**LLM**的解决方案，你只需解析出可以算法比较的部分，然后根据正确性，你可以为强化学习提供奖励。所以你已经消除了一个你必须训练并保持在循环中的大型**LLM**，另一个你也消除了。所以有一个**价值模型**，它在训练期间为每个响应分配一个值，而在**GRPO**中，你只需将它们相互比较。这就是**GRPO**中的“R”的来源，即**群组相对策略优化**（**group relative policy optimization**）。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so in **LRVR** with **GRPO**, you replace two of these models. So you have three models for **RHF** with **PO**, you replace that **reward model** by **verifiable rewards**. So instead of having someone say, oh, I prefer this this answer over the other or using an **LM** or that, you have now tasks that can be automatically verified. So for example, math. You can have a math parser. It could be like something like **Wolfram Alpha**. You have the correct solution and you have the **LLM** solution and you just parse out that part that you can compare algorithmically and then based on the correctness you can give a reward for the **reinforcement learning**. So you eliminate already one big **LLM** that you have to have to train and have to have in the loop and the other one you also eliminate. So there's the **value model** that assigns a value to each of the responses during the training and in **gpo**. So that's the **gRPO** part. You just compare them relative to each other. That's where the R and **GRPO** stand comes from like the **group relative policy optimization**.

</details>

**Sebastian Raschka**: 所以，这使得训练它变得更加可行。它只是更便宜。他们表明它实际上非常强大。所以你可以拿一个基础模型，甚至跳过**监督微调**（**supervised finetuning**）和**RLHF**，只做**RLVR**，你就能得到一个非常好的推理模型。**DeepSeek R1**模型，你仍然可以进行**监督微调**和**RLHF**，而且推荐这样做。推理行为来自**RLVR**。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so yeah and and this makes it much more feasible to train it. It's just cheaper. And they show that it is actually really powerful. So you can take a base model even skipping **supervised finetuning** and **RLHF** and just do this **LRVR** and you get a really good reasoning model out of it. the **Deepseek R1** model, you can still do **supervised fining** in **RLHF** and it's recommended to do it. The reasoning behavior comes from that **RLVR**.

</details>

**Sebastian Raschka**: 当然，也有论文表明基础模型已经具备推理能力，我认为这在一定程度上是正确的，但很难确定，因为你真的不知道**预训练**数据中有什么。所以也有很多**推理数据**（**reasoning data**）。**推理数据**本质上就是具有**思维链**（**chain of thought**）格式的数据，这意味着模型会写下中间步骤，比如它会解释自己的答案。很多**预训练**数据中已经包含了这种风格的数据，所以很难说推理行为是来自**预训练语料库**还是来自**RLVR**。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: There are of course papers showing that the base model already has reasoning capabilities and I think this is actually partly true, but it is hard to say for sure because yeah, you don't really know what's in the **pre-training data** anymore. So there's also a lot of **reasoning data**. So **reasoning data** is essentially just data which has this **chain of thought** format which means that the model writes intermediate steps like it explains its own answer. A lot of the **pre-training data** has already the style of data in it and then it's hard to say does the reasoning behavior come from the **pre-training corpus** or is it from the **RLBR**.

</details>

**Sebastian Raschka**: 根据我的经验，我认为两者兼而有之。例如，我将**Qwen 3**模型作为我的书《**从零开始的推理**》（**Reasoning from Scratchbook**）的一部分，我只用**RLVR**训练了50步，它的**Math 500**数学准确率从5%提高到50%。所以，它在准确率方面实现了三倍的飞跃，仅仅通过50步强化学习。我认为这50步并没有真正学到多少东西，在如何更好地做数学方面。我的意思是，是的，它确实学到了一些，但它并没有学习新的数学知识。这些知识已经在**预训练**中存在，这只是解锁了它。这就像一个步骤，可能向模型展示了如何使用它自己的知识。所以，这就是我的看法。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And in my experience I think a little bit of both. So for example I took the **Qwen 3** model as part of my book the **Reasoning from Scratchbook** and I trained it just for 50 steps with **RLVR** and it goes from 15% so 5% accuracy on **Math 500** to 50% on **MA Math 500**. So it it takes us three times bold leap in terms of accuracy by only doing 50 **reinforcement learning** steps. And I think it's not really learning that much in these 50 steps in terms of how to do math better. I mean yeah it does but it's not learning new knowledge about math. The knowledge is already there in the **pre-training** and this just unlocks it. It's just like a step that maybe shows the model how to use its own knowledge basically. So so that's how I think about it.

</details>

### 过程奖励模型（PRMs）

**Matt Tur**: 太棒了。为了更深入地探讨，你可以理解导致解释的推理步骤。你在一些著作中提到了**过程奖励模型**（**Process Reward Models**，**PRMs**），以及它尚未成功的事实。你能详细解释一下这部分吗？

<details>
<summary>Original English</summary>

**Matt Tur**: Fascinating. Just to unpack some of this, you can understand the reasoning steps that led to the explanation. You mentioned in some of your writing the label **process reward models**, **PRMS**, and the fact that this is not successful yet. Can you unpack that that part?

</details>

**Sebastian Raschka**: 有**结果奖励**（**outcome reward**）和**过程奖励**（**process reward**）。**结果奖励**主要关注最终答案是否正确。但还有整个推理模型的解释，它是否导致了正确的答案。所以也有研究在问，为什么我们要抛弃模型生成的所有内容，只看最终答案？我们能否从这个中间解释中获得有用的东西？中间解释有几个原因是有用的。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So there's an **outcome reward** and a **process reward**. And the **outcome reward** is mainly like is the final answer correct or not? But then there's the whole explanation of the reason model whether it leads to the correct answer. And so there's also research like hey why would why should we throw out everything the model generates and only look at the final answer. Can we get something useful out of this intermediate explanation?

</details>

**Sebastian Raschka**: 我的意思是，其中一个原因是，已经证明这有助于模型生成正确的答案，无论解释本身是否正确，那是另一个方面，但仅仅是它生成这些中间步骤的事实，就与更准确的答案相关。那么假设就是，如果我们能改进这个解释，也许它会给出更好的答案，甚至可能提高准确性。如果你想学习一些东西，仅仅看到最终答案是不够的，你还需要看到导致正确最终答案的步骤。**过程奖励模型**也专注于训练模型，根据解释来奖励模型。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And the intermediate explanation is useful for several reasons. I mean one is it has been shown like that this helps the model to generate the correct answer whether it the explanation is correct or not but is a different aspect but just the fact that it generates these intermediate steps is correlated with a more accurate answer then the hypothesis is if we can improve that explanation maybe it gives even a better answer like even if maybe it even drives the accuracy higher if you want to learn something it's not enough to just see the final answer you want to the steps that lead to the right final answer. **Process reward models**, they are also focused on training the model to reward the models based on that explanation.

</details>

**Sebastian Raschka**: 所以，我关于它不那么有前景或有用的说法，主要是基于**R1**论文，他们在底部有一个最后的段落。我的意思是，这已经是一年前的事情了，但他们在底部有一个段落，我认为标题是“不成功的尝试”。他们尝试了，但发现不值得，因为**奖励作弊**（**reward hacking**）。模型会因为通常你需要另一个模型来评估响应，而它们容易受到**奖励作弊**的影响，而且训练那个模型很困难，不可靠，所以根据他们的实验，整个事情不值得。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so my statement that it is not so let's say promising or useful was mainly based on the **R1** paper where they had a final paragraph at the bottom. I mean this is already a year old but they had a paragraph at the bottom that that I think the headline was something unsuccessful attempts. They tried it and they found it wasn't worthwhile because of **reward hacking**. the model was because usually you need another model to grade the responses and they can be susceptible to **reward hacking** and it's hard to train that model and it's not reliable and then that whole thing it's not really worth it according to their experiments.

</details>

**Sebastian Raschka**: 有很多人试图让它奏效，我认为它很有前景，而且我认为我们迟早会看到它奏效。所以，现在让它奏效仍然很棘手，但我很确定我们迟早会看到它成为标准操作的一部分。例如，去年年底，**DeepSeek Math** **2**版本论文中，他们进行了一项很好的研究，他们有一个类似的东西，他们有一个第二个模型来检查第一个模型的答案和解释。这几乎就像**乌龟叠罗汉**（**turtles all the way down**），他们又有一个模型，所以他们有三个模型。他们有一个模型生成答案，一个模型评估答案和中间步骤，他们还有一个模型评估评估者，基本上是说“哦，评估者做得好吗？”所以，他们有三个模型串联。这听起来有点过分，但根据整个设置的性能，它表现得非常好。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: There are a lot of people who try to make it work and I think it is promising and we will see it working at some point I think. So it's just like right now it's still tricky to make it work but I I'm I'm quite sure we'll see it as part of the standard repertoire at some point and there was for example end of the year last year was the **Deepseek Math** version **2** paper where they had actually a nice study they had something like that where they had like an a second model that was checking the answers and explanations of that first model and they it's almost like a **turtles all the way down** they had yet another model so they had three models they had one model generating the answer, one model to like grade the answer and intermediate steps and they had one model to grade the greater basically to say oh is the grader actually doing a good job. So there were like three models in a row. It sounds a bit excessive but based on the performance of that whole setup it performed really well.

</details>

**Sebastian Raschka**: 所以他们也提高了**自我细化**（**self-refinement**）的步骤和迭代次数，并在一些数学基准测试中获得了**黄金级别**（**gold level**）的性能。有人可能会说“好吧，也许是数据作弊了”或者其他什么。我不知道，那是另一个问题，但事实是它比没有它的模型表现更好，这告诉我，它是否真的是**黄金级别**的性能是另一个问题，但它确实比普通模型做得更好。所以它实际上为整个过程增加了实用性，我认为我们会看到更多这样的情况。它只是昂贵，因为现在你必须有更多的模型，更多的训练，更多的东西。但这也就是我之前提到的，这是你获得更大收益的地方，而不是扩展模型大小。我认为这是你会看到更多进展的地方。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So they were cranking up also the self-refinement steps and iterations and they got **gold level** performance on some of the math benchmarks. One could say okay maybe well cheating the data was public or whatever. I don't know that's a different question but the fact that this performed better than the model without it tells me whether let's say it's really **gold level** performance is a different question but it is doing better than just the plain model. So it is actually adding usefulness to the whole process and I think we will see more of it. it's just expensive cuz now you have to have more models, more training, more stuff. But that's what I meant also earlier with that's where you make the bigger gains rather than scaling the model size. I think that's one of those things where you will see more progress coming from.

</details>

### RLVR在其他领域的扩展

**Matt Tur**: 谈到数学，我认为这是**RL**未来发展的一个关键问题，即你是否能将其扩展到数学和编码之外的其他领域。你对此有何看法？

<details>
<summary>Original English</summary>

**Matt Tur**: And speaking of math, I think that's one of the key questions going forward for **RL** whether you can expand this beyond math and coding to other domains. What's your take on that?

</details>

**Sebastian Raschka**: 我认为**RLVR**如此吸引人的地方在于，你不需要人类来检查解决方案。你有一个**验证器**（**verifier**），可以确定性地检查数学答案是否正确，比如给出两个分数，它们是否相同？两个带小数点的数字，如果我四舍五入，它们是否相同？所以，通过编程和算法检查非常容易。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I think what's so attractive about **LRVR** is that you don't have to have humans checking the solutions. you have a **verifier** that deterministically checks for math is the answer correct like giving two fractions are the fractions the same you know that what two numbers with decimal points are they the same if I round them up and so it's like very easy to check programmatically algorithmically.

</details>

**Sebastian Raschka**: 代码也是如此，你有代码和代码问题，你可以编译代码，如果它编译通过，或者你有单元测试，它会检查它是否工作，这非常好检查，没有主观性，非常客观。如果你能说“好的，它编译通过了”或“它没有编译通过”，这非常明确。你提出的问题是，这在其他领域会发生什么？它是否特定于数学或代码？我认为我们也会看到它扩展到其他领域。我个人不是其他领域的专家，所以我不知道这在医学领域会是什么样子。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And the same for code so you have code and you like code problems and you can so in that case they you can compile the code if it compiles or you have unit tests it it checks it works it's very nice to check it's no there's no subjective aspect it's very objective If you can say okay it compiles it doesn't compile it's very clearcut the question you had is does that what happens now in general to other fields is it like specific to math or code and I think we will see also expansions of that to other fields I I'm personally not an expert in other fields so I don't know what that would look like for medicine.

</details>

**Sebastian Raschka**: 我的意思是，我有一些**计算生物学**（**computational biology**）背景，我对药物开发流程有所了解，但奖励是什么样子，我认为它并不那么清晰。但你也可以更有创意。所以它不一定非要通过算法严格验证。它也可以通过**LLM**进行验证。例如，我可以看到，在研究领域，也许可以训练一个模型来给出正确的引用，你可以检查这些引用。你可以有另一个模型访问**URL**，并说“哦，这确实是正确的论文，给出了正确的论文标题”或者类似的东西。这是一个正确的**URL**等等。所以，我认为有很多这样的事情，我们可以将**RLVR**扩展到这些领域，并训练这些东西。所以，我认为我们会看到很多这样的情况。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I mean I have like a **computational biology** background I know a little bit about the drug development pipeline and so forth but it is I think it's not quite as clear of what the reward looks like. But you can also be more creative. So you don't it doesn't have to be strictly verifiable through an algorithm. It can be verifiable maybe through an **LLM**, you know, it could be something like that. So for example, I can see I don't know for research maybe training a model to give correct citations and you can maybe check the citations. you could have another model that goes to the **URL** and say, "Oh, this is in indeed the correct paper giving the correct title of the paper or something like that. It's a correct **URL** and stuff like that." So, I think there are lots of these things where we can expand **RLVR** to and train on those things. So, I think we will see a lot of that.

</details>

### RL的可扩展性与稳定性

**Matt Tur**: 听你描述这些，我想到的是，我听人们说**RL**很难扩展，而且非常挑剔。听你描述不同的技术组合在一起，我开始明白为什么它很复杂。是因为它基本上是一堆不同的东西和模型相互交流，所以很难扩展，还是有其他原因？

<details>
<summary>Original English</summary>

**Matt Tur**: The thought that crosses my mind as you describe this is that I've heard people say that **RL** is very difficult to scale is very finicky and hearing what you describe about different techniques put together. I'm starting to get a sense for for why is that why it's complicated? Is that because it's a basically a bunch of different things and models talking to one another that it is hard to scale or is there another reason?

</details>

**Sebastian Raschka**: 在我们录制这个节目之前，我刚刚在一个**Jupyter Notebook**中从零实现了**GRPO RLVR**。我写了一个39页的章节。所以它不是超级复杂。我会说它就像你可以把它放进**Jupyter Notebook**中，它能工作，并且训练得很好。我想说的是，如果你能搞清楚**预训练**的规模，你就能搞清楚这个，因为如果你也看看**DeepSeek** **3**版本在**GPU**小时上的成本，他们给出的价格标签是500万美元，假设每**GPU** 2美元。这个假设是否正确是另一个问题。但如果你将其与**R1**的成本进行比较，我认为**R1**在他们训练时大约是30万美元，他们在自然科学版的论文中给出了一个数字。所以它基本上比**预训练**便宜十倍以上。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Well, I just implemented before we recording this **GRPO LVR** from scratch in a **Jupyter Notebook**. I wrote up a chapter 39 pages. So it is not super complicated. I would say it's like you can fit it into **Jupyter Notebook** it works and it trains fine. What I'm trying to say is if you can figure out **pre-training** the scale at **pre-training**, you can figure out this because if you also look at the numbers of how much it cost just in **GPU** hours, **Deepseek** version **3**, they had like a $5 million price tag on that given the I think $2 per **GPU** they assumed. Whether that's a correct assumption or not is a different question. But if you compare it relative to the cost of **R1**, I think **R1** was about $300,000 when they trained it had they had a number in the nature version of the paper. So it's basically more than 10 times cheaper than **pre-training**.

</details>

**Sebastian Raschka**: 所以，它与**预训练**使用相同的**基础设施**（**infrastructure**），你必须确保**GPU**不会崩溃。如果它们崩溃，你可以恢复等等。而且在**预训练**期间，你可能会遇到糟糕的损失，你希望回滚到旧的检查点，同样的事情也适用。你有多个模型，但你说的没错，在**RLVR**中，由于更新的性质等等，确实有更多的试错。我的意思是，我观察到，当我训练我的模型时，你经常会遇到，我的意思是，不那么频繁，但每隔几百或几千步，模型就会变差。所以模型一开始工作得很好，你训练得越来越久，突然模型变得非常糟糕。所以你只需回到上一个检查点。但这并不是什么新鲜事，在**预训练**中也一直发生。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So and it's the same **infrastructure** where you have to make sure I think the complexity comes from making sure that **GPUs** don't crash. If they crash that you can resume and so forth and also during **pre-training** you might have bad losses where you want to you know re-roll the old checkpoint and the same things apply. you have multiple models but yeah you are right there is a bit more I would say well trial and error in in **RLVR** where just due to the nature of the updates and so forth you can't I mean that's what I observed when I was training my models you often get I mean not that often but every so and so many hundreds or thousands of steps the model gets bad you know like so the model works totally fine and you train longer and long and suddenly the model is really bad and so you just go back to the previous checkpoint point but it's not new in terms of a new thing that's happening all the time in **pre-training** as well.

</details>

**Sebastian Raschka**: 但我认为**香草GRPO**（**vanilla GRPO**），即原始算法，相当不稳定，你必须在一年中不断地照看它。很多人都有这些技巧和窍门，有些人说删除**KL散度**（**KL divergence**）项，比如如果你在数学中直接删除它，它的性能会更好；删除**标准差**（**standard deviation**）的**归一化**（**normalization**）项；或者如果所有奖励看起来都一样，你可以跳过它们以加快速度。有很多这样的技巧和窍门，这些行业诀窍使其更稳定。我认为，如果你将所有这些技巧结合起来，它实际上是一个相当稳定的算法。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But I think **vanilla grpo** the original algorithm it is pretty flaky like where it is you have to babysit it over the course of the year many people had these tips and tricks where some people were saying remove the **KL divergence** term like if you just drop it for math it performs better remove the **standard deviation** the **normalization** term or if all the rewards look the same you can skip them to make it faster you know like there's like there's a lot of tips and tricks like these tricks of the trade that make it more stable and I think like if you apply all of them together it is actually a pretty stable okayish algorithm.

</details>

**Sebastian Raschka**: 就像上周，**Nvidia**也发表了一篇关于**GDPO**的论文。他们也专注于算法改进，特别是针对**多重奖励**（**multiple rewards**）。如果你有不止一个奖励，比如简单地，你有一个准确性奖励，但你通常也有一个格式奖励，因为你希望模型将最终答案放在这些**思考标签**（**think tags**）中。所以有一个**思考词元**（**think token**），老实说，这更多是为了风格目的。我认为优势在于有些人开发了**混合模型**（**hybrids**），它们能够以正常模式和思考/推理模式运行。思考代表推理。这里的吸引力在于你并不总是想使用推理模式，因为它很昂贵，会消耗大量词元，有时你有一个简单的答案，你不想为简单的答案花费2000个词元。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Just like last week **Nvidia** also had a paper on **GDPO** I think **GDPO** so they were focused on also algorithmic improvements with respect to **multiple rewards** so if you have more than one reward could be something as simple as you have the accuracy reward but you usually have also a format reward because you want the model to put in the final answer in you don't have to but you can put that into these **think tags** so there's like a token a **think token** it's more honestly for stylistic purposes I think the advantage is some people develop models that are **hybrids** which are capable of a normal mode and a thinking a reasoning mode so thinking stands for reasoning the appeal here is you don't always want to use reasoning modes because it's expensive it uses a lot of tokens and sometimes you have a simple answer and you don't want to spend 2,000 tokens on the simple answer.

</details>

**Sebastian Raschka**: 所以你可以用这些**思考词元**稍微引导它。例如，在**Qwen 3**中，你可以添加空的**思考词元**。所以你有一个开始词元和一个结束词元。如果你添加了它，中间的“思考”内容是空的，那么模型就不会生成任何推理链。长话短说，在训练期间，你可以教模型遵守这些不同的格式。这样你突然就有了第二个奖励。所以一个奖励是正确性：答案是否正确？第二个奖励是模型输出的内容是否符合我的格式？然后你有两个奖励，以及如何将它们结合起来。通常最初你只是将它们加在一起，但后来在**GRPO**的稳定性方面出现了一些缺点。所以**GDPO**有一些算法改进来提高稳定性。所以一年中有很多这样的小技巧，使**RLVR**更稳定。但它是一个较新的范式。所以它只需要几次迭代就能找到规范的版本。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so you can with these **think tokens** steer it a bit. For example, in **Qwen 3** you can add empty **think tokens**. So you have a opening token and a closing token. If you add that the think whatever in between is empty and then the model will not generate any reasoning **chain of thought**. And long story short so during training you can teach the model to adhere to these different formats. So then you suddenly have a second reward. So one reward is correctness. Is the answer correct? The second reward is does the model output something that fits my formatting here? And then you have two rewards and how you combine them. Usually originally you just add them up together, but then there were some yeah downsides in the **GRPO** in stability. And so **GDBO** had some algorithmic improvements to yeah improve the stability. And so there are lots of these little tricks over the year to make **RVR** more stable. But it is a new a newer paradigm. So it it just takes a few iterations to find the canonical one.

</details>

**Sebastian Raschka**: 这类似于优化器中的**Adam**。所以**Adam**，我的意思是现在有**AdamW**，以前有**SGD**和所有其他**RMSProp**以及它们的名字，它们最终都通过添加越来越多的技巧收敛到**AdamW**。我认为**RLVR**与**GRPO**现在也是如此，通过添加更多的技巧来获得在许多不同场景下都相当稳定的东西。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: It's similar to you know optimizers with **Adam**. So **Adam** is I mean right now there's **AdamW** there was **SGD** and all the other **RMSProp** and how they were called and they kind of of all converge to **LMW** by adding more and more tricks and I think that's the same right now with **LVR** with **GRPO** where adding more tricks to get to something that kind of like is pretty stable across a lot of different scenarios.

</details>

### 进步的本质：小技巧的累积

**Matt Tur**: 听你谈论这些技巧和窍门以及不同的技术，这让我想到你在博客文章中用一种很好的方式来表达，并暂时从细节中抽离出来。你谈到了2025年所有事情的一个**元教训**（**meta lesson**），以及进步实际上来自何处。你想深入探讨一下吗？我认为这会很有趣。

<details>
<summary>Original English</summary>

**Matt Tur**: It's fascinating to hear you talk about tips and tricks and and different techniques that triggers the thought that you had a like a nice way of putting it in your blog post and taking a a step back for for a second from the weeds. But you talked about a a **meta lesson** for all the things in 2025 and where progress actually comes from. Do you want to get into that? I think that'd be interesting.

</details>

**Sebastian Raschka**: 是的。所以**元教训**本质上是，我们现在已经谈论了半个小时的不同事情。所以我认为主题是，没有一件事能解决所有问题。它是由很多小技巧和窍门组成的，如果你把它们加起来，就会带来进步。但我认为没有神奇的杠杆，没有神奇的**银弹**（**magic bullet**）能给你一切。它是在这里那里调整东西，使其更健壮。我认为当时的调整是**Transformer**架构，现在本质上是让我们使其更好，我想是细化它，这里一点**后训练**，那里一点可能提高**预训练**的质量，一些架构调整，算法调整，基本上是所有东西都来一点。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so **meta lesson** would be essentially here that well the whole I think we are talking right now for half an hour about different things. So I think the theme would be well there's no one thing that fixes it all. It's a lot of little tricks and tips tips and tricks all over the place and if you add them up that will give you the progress but I yeah I think there's no magic lever no magic I guess **bullet** that gives you everything. It is kind of of tweaking things here and there and making things more robust. I think the tweak was the **Transformer** architecture back then and now it's essentially let's you know make it even better I guess refining it and a little bit of **post-training** here a little bit maybe improving the quality and **pre-training** maybe some architecture tweaks algorithmic tweaks it's all a little bit of everything basically.

</details>

**Sebastian Raschka**: 我还会说，你不需要了解所有这些东西，因为在实践中，这就像一个大公司里有一个庞大的团队，每个人都有专长，每个人都在**后训练**团队或**预训练**团队。不是一个人必须了解所有东西和所有技巧，因为那真的不可能。所以，我认为这仅仅是由于工作性质造成的，因为工作量太大了。训练这些大型模型需要大量工作，所以你有点像将这些角色分开，然后每个人都可以同时处理所有事情，这也很不错，然后你将所有这些改进整合到模型中。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Yeah it's also that I would say you don't have to know all these things because like in in practice it's like a big big team at a big company and everyone has a specialty like everyone is either like on **post-training** team or the **pre-training** team. It's not that one person has to know everything and all the tricks because that would be really impossible. And so I think it's also just due to the nature of work because it's so much work. It's a lot of work to train these big models that you kind of like separate these roles and then everyone is working on can work on everything at the same time which is also nice and then you bring back together all these improvements into the model.

</details>

**Matt Tur**: 你对行业持续提出新技巧和窍门的能力有信心吗？

<details>
<summary>Original English</summary>

**Matt Tur**: Yeah. any confident in the industry's ability to keep coming up with tricks and tips going forward?

</details>

**Sebastian Raschka**: 是的，这是一个好问题。我的意思是，如果我看看**DeepSeek**，例如，因为我一直在这个播客中选择**DeepSeek**，因为我认为他们有一个非常好的模型发展轨迹。我希望我能更多地谈论**Gemini**和**ChatGPT**，但他们并没有真正发布这些技术，所以很难谈论。所以在这里选择**DeepSeek**，我的意思是，如果你看看**3**版本，然后是**R1**，然后他们有**3.2**版本模型，带有**稀疏注意力机制**，然后还有**Math 2**版本，带有**自我细化**等等。所以他们现在仍然有改进的记录，而且有传言说他们将在2月份发布一个新模型，**DeepSeek** **4**版本。但我认为到目前为止，我们仍然处于那个轨迹上，我们还没有用尽想法。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: That is a good question. I mean, if I look at **DeepSeek** for example, because I mean, I'm I'm always picking here **Deepseek** in this podcast because I think they have a really nice trajectory of models. I wish I could also talk more about **Gemini** and **Chad Chubidi**, but they don't really release the yeah like techniques, so hard to talk about it. So picking on **Deepseek** here I mean if you look at version three and then **R1** and then they had version **3.2** model with the **sparse attention mechanism** and then also this **Math** version **2** with a **self-refinement** and everything. So they do have right now still a track record of improving things and they are rumored to release a new model in February the **Deepseek** version **4** but I think all so far I think we are still on that trajectory where we haven't run out of ideas.

</details>

**Sebastian Raschka**: 所以，我认为我们唯一用尽的东西是**基准测试**（**benchmarks**）。所以**基准测试**的改进，衡量起来有点困难。我认为也许不再是**一次性问题**（**oneshot problem**），不再是真正回答知识问题。它不再是在**基准测试**的一次迭代中真正解决数学问题。它可能更像**代理循环**（**agentic cycle**），你有一个更像目标的东西，不是回答问题，而是设计一些东西，然后它开始运行，以及它能运行多久，或者需要多久，或者能运行多久直到问题解决。我认为衡量进展可能更倾向于此，而不是我们在**基准测试**上获得90%或95%或97%。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So I think the only things we're running out of is really **benchmarks**. So the improvement on **benchmarks** it's kind of like harder to measure and I think maybe well maybe it's not the **oneshot problem** anymore where it's not really answering knowledge question. It's not really solving math problems in in one iteration of the **benchmark**. It is maybe more like the **agentic cycle** like where you have like a more like a objective that is not let's say answer the question but more like design something blah blah blah and then it goes off and how long it can or how long it needs or how long it can run until the problem is solved and I think it's maybe more towards that how we measure progress rather than whether we get 90 or 95% or 97% on a **benchmark**.

</details>

### 基准测试作弊（Benchmaxing）

**Matt Tur**: 是的。你在一些文章中用“**基准测试作弊**”（**benchmaxing**）这个词表达得很好。你指的是什么？

<details>
<summary>Original English</summary>

**Matt Tur**: Yeah. you had this nice expression **benchmaxing** in your in some of your post. What do you mean by that?

</details>

**Sebastian Raschka**: 是的，**基准测试作弊**是这样，我经常在**X**上阅读东西，因为那里有很多**AI**社区。我认为**基准测试作弊**是2025年出现的一个新术语。它大致的意思是，人们训练模型在**基准测试**上表现良好，但它并没有真正转化为实际性能。一个流行的例子是**Llama 4**模型。我的意思是，根据我听到的传闻，他们有一个单独的模型专门用于**基准测试**和**排行榜**。但撇开这一点不谈，如果有人训练一个模型以在**排行榜**上表现良好，这并不意味着该模型在现实生活中必然表现更好，因为**排行榜**也容易受到风格的影响。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So **benchmarks maxing** is so I'm often often reading things on **X** because it's like where a lot of the **AI** community is. I think **benchmarking** is one of the ones that came up in 2025 like new generation term and so loosely how that what it means is essentially that well it's almost like exploiting the **benchmarks** like people train models do well on the **benchmarks** but it doesn't really translate to real world performance like a popular example was the **Llama 4** model I mean based on rumors I heard they had a separate model just for the **benchmarks** the **leaderboards** but let's say even that aside if someone let's say trains a model on **leaderboard** board performance, it doesn't mean the model necessarily performs better in real life because **leaderboards** are susceptible also to style.

</details>

**Sebastian Raschka**: 所以，对于**排行榜**来说，棘手的部分在于人类会比较他们更喜欢哪个模型。如果我有一个非常复杂的数学问题，我问一个**LLM**，假设我甚至不知道答案，然后它应该帮助我完成报税或其他什么。有一个**LLM**给我一个非常好的解释。也许结果是错误的，但表达非常好，易于理解。我可能会喜欢那个。所以，我可能会给它一个赞，因为“哦，它易于理解，很合理”，因为我不知道什么是正确的，因为我不是文本专家。所以，我认为这是**排行榜**的一个问题。它奖励风格多于正确性，因为没有正确性检查。就像，是的，作为专家，你必须知道它是否正确。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so with **leaderboards**, the tricky part is because humans compare which model they prefer. And if I have, let's say, a very complicated math problem, I ask an **LLM** and let's say I don't even know the answer and then I well, it should help me with my tax report or something like that. And there's one **LM** that gives me a really nice explanation. Maybe the result is wrong, but the expression is really nice, easy to follow. I probably like that one. And so I would probably give it a thumbs up because, oh, it's understandable. It's reasonable because I don't know what's correct because I'm not a text expert. And so, um, and I think that's one problem with **leaderboards**. It rewards the style more than the correctness because there is no correctness check. It's like, yeah, you as a expert, you have to know whether it's correct or not.

</details>

**Sebastian Raschka**: **LLM**开发者在训练**LLM**时，它也会偏向于遵循某种风格，以及使用这些**排行榜**的人的风格。然后从这个意义上说，你最终得到的模型在**基准测试**上获得了非常好的分数，但它们可能并不比以前的模型做得更好。然后这有点像，是的，一个棘手的问题，衡量这种方式的进展有多难。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so also **LLM** developers when you're training the **LLM** it kind of gets biased to follow a certain style and the style of people who use those **leaderboards** and then in that sense you end up with models that have let's say have been **benchmarks** they have been getting really good **benchmark** scores but they might not do better than previous models and then it's kind of like yeah a tricky thing you know it's like how hard to measure progress this way.

</details>

**Matt Tur**: 你认为人们这样做主要是出于经济动机吗？比如公司需要筹集更多资金，人们需要成功的职业生涯，因此他们希望看起来表现良好。这是驱动因素吗？

<details>
<summary>Original English</summary>

**Matt Tur**: And you think people do that just out of largely economic incentives like the companies need to raise more money and people need to have successful careers and therefore they want to look good. Is that the is that the driver?

</details>

**Sebastian Raschka**: 我的意思是，我不想指责任何人。我不知道具体情况。我只知道互联网上公开的信息。我在**Reddit**上几次看到**Llama 4**是一个单独的模型。所以可能有一些公司领导的决定导致了这种情况。我真的不知道。也许是为了获得好的头条新闻等等，但我想**开源社区**（**open weight community**）是一个非常聪明的社区。所以，我认为冒这样的风险不值得。而且我认为大多数人不会冒险。这只是隐性的，它自然而然地发生了。就像你迭代太多次一样，这是一个经典的**深度学习**（**deep learning**）问题或**机器学习**（**machine learning**）问题。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I mean I don't want to accuse anybody. I don't know for sure. I I I mean I only know what is known on the internet. I read on **Reddit** a few times that **Llama 4** was a separate model. So there might have been I know some company leader decisions that have led to that. I I honestly don't know. And maybe incentives getting good headlines and that stuff, but well, I think the **open weight community** is a pretty smart community. So, it's like I think it's not worth worth risking something like that. And I think most people don't risk it. It's just implicit. It just happens. It's like if you iterate too many times, it's a it's a classic **deep learning** problem or **machine learning** problem.

</details>

**Sebastian Raschka**: 但这里的好处是，这并不是一个大问题，因为它发生在所有模型身上。所以所有模型在这个新数据上的表现都差了5-10%，而且非常一致。所以如果你要对这些模型进行排名，排名仍然会是一样的。所以用**LLM**的术语来说，假设**ChatGPT**和**Gemini**在**基准测试**上作弊，模型表现差了10%。但如果排名仍然相同，假设**Gemini**仍然比**GPT**好，那么如果两者都这样做，就不是问题。所以，我认为我们现在在**LLM**中就是这样，我不会说他们在作弊，他们只是大量使用数据，而从大量使用数据中，数据在某种意义上泄露了，所以你有点偏向，但如果它们都偏向，那么再次没问题，因为排名仍然相同。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But the nice the beautiful thing here was actually it's not a big concern because it happened to all the models. So all of the models performed like five 10% worse on this new data and it was pretty consistent. So if you were to rank those models, the ranking would still be the same. So in **LLM** terms, let's say **CHPT** and **Gemini**, let's say they cheat on the **benchmarks** and the models are 10% worse. But if the ranking is still the same, let's say **Gemini** is still better than **GPT**, then it it's not a problem if both of them do that. So and I think we have right now that in **LLMs** where I wouldn't say they are cheating they are just using the data a lot and from using the data a lot well the data leaks in a sense so you kind of of like you're biased in a sense but then if they're all biased then it's again fine because the ranking is still the same.

</details>

**Sebastian Raschka**: 但我认为问题仍然存在，**基准测试**已经饱和，很难展示或检测或对进展有任何概念。现在，老实说，我个人已经停止关注**基准测试**数据了。我只是使用模型几天，看看它是否更好。我不能说“好的，这好多少多少百分比”。它更像是“哦，我使用它，我觉得它做得更好”。我甚至无法用语言表达。我认为这就是我们现在面临的挑战。你如何用语言表达这种进展？我认为这将是未来几年更难解决的问题。如何实际评估你正在使用的东西？我的意思是，**LLM**的强大之处在于它们是如此**自由形式**（**free form**），但这也是评估的缺点，因为如果你想让评估是数字化的和精确的，那么**自由形式**就不那么容易处理了。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But I think yeah the problem still remains the **benchmarks** are saturated and it's hard to demonstrate or detect or have any type of notion of progress. It's really right now I honestly personally I stopped looking at the **benchmark** numbers. I just use the model and see for a few days and I see if it's better or not. Like I can't say okay this is better by so and so many%. It's more like oh I use it and it I feel like it's doing a better job. I can't even put it into words. And I think that's the challenge we have right now. How do you put that into words to communicate the progress? And I think that will be in the upcoming years the more difficult problem to solve. How to actually evaluate what you're using? I mean the the the power of **LMS** is that they are so **free form** but that's also the downside for evaluations because evaluations if you want to be numeric and precise well **free form** is not so easy to deal with basically.

</details>

### 推理扩展与工具使用

**Matt Tur**: 非常有趣。所以回到技巧和窍门，以确保我们涵盖2026年初**LLM**的现状。我们谈到了**后训练**。你认为过去一年左右的最新进展有多少来自非架构和非**后训练**的东西？我特别想到的是**推理扩展**和**工具使用**。

<details>
<summary>Original English</summary>

**Matt Tur**: Super interesting. So going back to tips and tricks to make sure that we cover the state of **LLMs** in I guess early 2026. So we talked about **post-training**. How much in the recent progress in the last year or so do you think comes from non-archchitectural and non-postraining stuff and I'm thinking in particular **inference scaling** and then **tool use**?

</details>

**Sebastian Raschka**: 我确实认为有很多。我之前提到了**后训练**，但老实说，我认为今年最大的驱动力之一也是**推理扩展**。所以**推理扩展**本质上意味着你不改变模型的权重，你只是在消费者或用户使用模型时，在模型使用过程中投入更多的计算。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I do think a lot. I yeah I mentioned previously **post-training** but honestly I think one of the biggest drivers this year has been also the **inference scaling** so **inference scaling** essentially means you don't change the weights of the model you just expend more compute during using the model during when the consumer or the person the user uses the model.

</details>

**Sebastian Raschka**: **OpenAI**在2024年10月发布了一张漂亮的图表。他们有两张子图。一张用于扩展训练，一张用于扩展推理，你可以看到两者都以相似的增长率上升。所以你基本上可以在训练期间投入更多的资金，这是一次性成本，然后你有一个固定大小的模型，以后再也不用花钱了。但从某种意义上说，这有点行不通，因为推理模型会生成更多的词元，所以在推理期间使用它们也很昂贵。所以**推理扩展**包括模型生成更多词元，因为如果你生成两倍的词元，成本就会是两倍，因为现在你有两倍的步骤。这是一种**推理扩展**的形式，但它可以带来更准确的答案。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And a beautiful example or chart was back in October 2024 when **OpenAI** came out. They had like this chart where they had two subgraphs. One was for scaling the training and one was for scaling the inference and you could see for both both were going up with a similar like increase. And so you can basically invest either more money during training which is a onetime cost and then you have with a fixed size you never have to pay money again later on but then that breaks a bit in a sense because reasoning models they generate more tokens so they are also expensive to use during inference. So **inference scaling** includes that it includes like models that generate more tokens because if you generate twice as many tokens it's twice as expensive because now you have twice as many steps. That is one form of **inference scanning** but it can lead to more accurate answers.

</details>

**Sebastian Raschka**: 另一种是**并行采样**（**parallel sampling**）。你只是多次询问模型，更像是一种**多数投票**（**majority vote**）。大多数人在看**基准测试**时都会这样做。它被称为“**最佳**”（**best at**）之类的，比如“五中选一”（**best of five**）或者“@5”之类的，运行五次，然后选择答案。所以你可以进行**多数投票**，但现在成本是五倍，因为你必须运行模型五次。还有一些方法是人们使用一个**判断模型**（**judge model**）来评估这些结果。如果你不能进行**多数投票**，你可以有一个分数，然后选择得分最高的答案。这有点脆弱，因为那个模型也可能犯错误。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: The other one is **parallel sampling**. You just have the mo you ask the model multiple times more like a **majority vote**. And most people if you see the **benchmarks** they do that. It's called **best at** something like that like **best of five** or something or best they say I think an at sign five or something running it five times and then selecting the answer. So you can do **majority vote** but it's five times more expensive now because you have to have to run the model five times. There are also methods where people have a **judge model** that judges these results. Like if you can't do **majority voting**, you can have a score and then score the highest answer. It's a bit brittle because well that model can also make mistakes.

</details>

**Sebastian Raschka**: 但所有这些类型的技巧或**自我细化**，你进行多次迭代。**自我细化**也像这些迭代一样，你让一个**LLM**写答案，然后你说“好的，看看这个答案”，然后它会说“哦，我这里犯了一个错误”，然后它**自我细化**。我的意思是，推理模型有时也会在内部以**思维链**的形式这样做，但你也可以有一个明确的版本。或者，另一篇非常酷的论文是1月份发布的**RLM**。他们所做的是，他们获取提示，而不是一次性处理所有内容，他们将其分成几个更小的提示，或者**LLM**决定它如何将其分成代码块，然后再次对每个块运行提示。所以基本上是将一个提示变成更小的提示，然后有多个请求。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But there are all these types of tricks or **self-refinement** where you have multiple iterations. **Self-refinement** is also like basically like this iterations where you you have one **LLM** write the answer and then you say okay take a look at this answer and then it oh I made a mistake here and it **self-refineses**. I mean reasoning models do that internally as a **chain of thought** also sometimes but you can also have an explicit version of that or another really cool paper that came out in January was **RLMs** and so what they do is they take that prompt so instead of processing it all at once they chunk it up into several smaller prompts or the **LM** decides it learns how to or sees how it should chunk it up in code and then runs a prompt on each of those again. So basically making one prompt into smaller prompts and then having multiple requests.

</details>

**Sebastian Raschka**: 我会说这也是一种**推理扩展**的形式，因为我的意思是，这取决于情况，但我确实认为它可能更昂贵，因为现在你有更多的**LLM**调用，如果你想深入，每次调用最终可能会花费更多的词元，不是在一个请求中，而是在所有请求的总和中。但有很多这样的事情，我认为在某种意义上被低估了，因为它们并没有被谈论太多。但我认为它是使**LLM**表现良好的一个重要驱动力。我认为我之所以这样认为，是因为如果你在本地使用**DeepSeek**或使用平台，假设你使用本地**LLM**和**ChatGPT**，我认为**ChatGPT**当然是一个非常好的模型，但我确实认为领先的**开源模型**（**open weight models**）并没有落后太多，但如果你在本地使用它们，它们感觉就不那么好。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And this I would say is also a form of **inference scaling** because I well it depends but I do think it's it can be more expensive because now you have more more **LLM** calls and each one if you want to go deep you can end up spending more tokens not more tokens in one request but in the sum of all the requests but there are all these things I think that underappreciated in a sense because they are not I mean in this case it was a popular paper but often **inference scaling** is talked about that much. But I think it is a big driver of making **LLMs** perform well. And I think why I think that is if you use **DeepSseek** locally or use the platform, let's say you use a local **LM** and use **CH GPT**, I think **CHB** of course is a really good model, but I do think the leading **open weight models** are not that far behind, but if you use them locally, they don't feel as good.

</details>

**Sebastian Raschka**: 我认为这是因为**ChatGPT**有一个非常好的界面。他们拥有的平台，不仅仅是运行**LLM**，它可能还会清理你的提示。再说一次，这只是我的假设，但我认为，与其让**LLM**学习，当然它可以学习如何处理拼写错误的单词，但你也可以在某些情况下清理输入，这可能会提高准确性。我认为所有这些小的工程技巧，不仅仅是**推理扩展**，还包括清理提示、如何管理上下文、历史等等，所有这些都对用户感受到的很多进展做出了贡献。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And I I think that's because **JBD** has a really good interface. Like the the platform they have, it's not just running the **LM**, it's maybe cleaning up your prompt. Again, this is like I would say a hypothesis or like I'm I'm guessing here, but like instead of having the **LLM** learn, of course, it can it does learn how to deal with missspelled words, but you can also just clean that up the input in certain cases where that might improve the accuracy. And I think all these little engineering tricks, not just **inference scaling**, but just cleaning up the prompt, how to manage the context, the history and everything, I think that all contributes to a lot of progress that is felt by the user.

</details>

**Sebastian Raschka**: 另一个例子是**工具调用**（**tool calling**）。我认为这也是2025年的一个大事件。我不记得**ChatGPT**何时引入**工具调用**的，但可能是在2025年初或2024年。**GPTOSS**，他们在2025年夏天推出了那个**开源模型**，**GPTOSS**支持**工具调用**。**工具调用**意味着**LLM**可以调用网络搜索，或者它可以调用代码解释器等等，这非常非常强大，因为我认为这是你可以减轻幻觉的一种方式，不是完全减轻，但至少可以减少幻觉，因为**LLM**突然不必记住所有东西了。你可以将很多困难的事情外包给工具。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Yeah. And then another example would be **tool calling** too. I think that was also a big one in in 2025. I don't remember when **Jet GPD** introduced **tool calling**, but might might have been early 2025 or 2024. Um but **GPTOSS** so they had that open source model in let's say summer 2025 and **GPTOSS** has **tool calling** support. So **tool calling** means that the **LLM** can call a web search or it can call code interpreters and so forth and and that is very very powerful because I think this is one of the ways you can mitigate not totally mitigate but let's say reduce hallucinations because then the **LM** suddenly doesn't have to remember everything anymore. You can outsource a lot of things that are hard to tools.

</details>

**Sebastian Raschka**: 就像我们人类一样，我们使用计算器，我们使用网络搜索，我们不试图记住所有东西。所以，我认为从这个意义上说，这是一个巨大的突破。唯一的问题是，你必须信任**LLM**在你的计算机上运行，这就是为什么现在我认为它更多地局限于**专有LLM**（**proprietary LMS**），比如**Gemini**和**ChatGPT**，因为如果它在你的计算机上运行，执行一些代码并搞砸了，那不是你的问题。但我认为我们将在未来几年看到更多这样的情况，当**开源工具**变得更健壮，人们更信任在自己的计算机上运行它时，也许仍然在**Docker容器**中，但会是类似的东西。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: So like we humans do right we humans we use calculators we use the web search we don't try to memorize everything and so I think in that sense that is really a big unlock the only problem is well you have to trust the **LLM** to run on your computer so which is why right now I think it's more like confined to these **proprietary proprietary LMS** like **Gemini** and **Chetchd** because well it's not your computer it runs on if it goes somewhere executes some code and messes it up well not your problem but I think we will see more of that in the upcoming years when the **open-source tooling** kind of like I would say gets more robust and people have more trust in running that on on their own computer maybe in a **Docker container** still but yeah something like that.

</details>

**Sebastian Raschka**: 我的意思是，现在很多人已经在他们的计算机上运行**代码代理**（**code agents**），它们通常受到更多限制，但我认为人们越来越信任它们做以前不信任它们做的事情，并给予它们权限。但随着**LLM**变得更好，人们会建立更多信任，或者我的意思是，在安全的**虚拟环境**（**virtual environment**）中运行它。我认为这将是很多飞跃，即使**LLM**没有变得更大。你可以查看**GPTOSS**的发布博客，他们确实有**基准测试**来展示在启用和禁用**工具调用**的相同模型上的性能，你确实可以看到性能有提升，虽然不是两倍，但可能是1.2倍。但你确实可以看到，仅仅通过允许模型使用工具，能力就有了明显的飞跃。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I mean right now a lot of people already run **code agents** on their computer they're usually kind of of more restricted but I think people are more and more trusting these to do things they wouldn't have trusted them to do like a year ago and give them permissions but as **LMS** get better people develop more trust or I mean run it in a secure **virtual environment** and I think that will be a a lot of also leaps we will see even though the **LLM** doesn't get bigger or anything like that and oh you can actually go to the **GPOSS** release block and they did have **benchmarks** to show how the performance on the **benchmarks** is with the same model with **tool called** enabled and disabled and you can actually see there is I mean it's not like two times the the performance it's maybe 1.2 two times the performance. But you can see there's definitely a jump in in capabilities just by allowing the model to use tools basically.

</details>

### 开源模型与私有数据：LLM的未来

**Matt Tur**: 这也是你看到世界发展方向的一部分，对吧？这种**开源模型**和**私有数据**的结合。我想你在博客文章中称之为“**边缘**”（**edge**）。

<details>
<summary>Original English</summary>

**Matt Tur**: And that's part of where you see the world go, right? This combination of like **open source model** and **private data**. I think you call that the **edge** in your in your blog post.

</details>

**Sebastian Raschka**: 现在不同的**LLM**有什么区别？它们都差不多好。我会说**开源模型**有很多**LLM**都差不多好。我的意思是，我个人不会一直使用所有模型，但我通常一次只使用一个**LLM**。但如果你使用或比较**ChatGPT**、**Gemini**、**Claude**、**Grok**，我认为它们都差不多处于同一水平，我认为那是因为它们都在尝试做所有事情，它们是通用模型，供普通人做很多事情。我的意思是，**Claude**现在更专注于代码，但其他模型更像是通用模型，我不会说哪个比另一个好很多。它们有一些小的差异等等。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: What distinguishes different **LM** right now? They're all kind of similarly good. I would say like **open weights**. There are a lot of **LM** that are similarly good. I mean, personally, I don't use all of them all the time, but so I usually use one **LLM** at a time, but like if you use or compare **Chachi**, **Gemini**, **Claude**, **Grock**, I think they're all pretty much on the same level like and and I think that's because they're trying to do everything like they they're generalist models for a general person to do a lot of things. I mean, **cloud** is a bit more specialized to code now, but the other ones they are more like general models and I I wouldn't say one is significantly better than the other. they have like small I mean differences and so forth.

</details>

**Sebastian Raschka**: 所以，如果你想真正区分它们，并在某些行业中使它们更好，我确实认为**私有数据**（**private data**）有所帮助，比如金融公司多年来、一百年或五十年收集的所有**数据宝库**（**treasure troves of data**），或者医疗数据，比如患者的医疗记录。我认为**JDP**现在有一个合同来处理它们，使其安全和私有，但我老实说，我认为这些公司不想轻易放弃这些数据。首先，它们不能，或者我的意思是，作为患者或客户，如果有人将我的健康数据提供给未经我同意的其他公司，我会感到非常糟糕。但这些公司也不想轻易放弃所有这些数据，因为一旦它们这样做了，那么它们可能就会变得过时，因为它们所有的宝藏，基本上是它们与其他公司不同的地方，现在都被拿走了。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But so if you want to really distinguish them and make them better in in certain industries I do think yeah the **private data** is what helps like all the **treasure troves of data** that a finance company has over the years over 100 year or 50 years collected or medical data like medical records from patients I think **JDP** had like a contract now to process them to make it secure and private but I honestly think these companies they don't want to just give away that data At first they can't or they I mean it makes also sense you just really as a patient or customer I would feel really bad if someone gives my health data to some other company that I didn't agree with or agree with with this sharing but then also the companies they don't want to just give away all that data because once they do well then maybe they become then really kind of obsolete in that sense where it's all all their treasure is basically all their what makes them different from other companies is now taken basically.

</details>

**Sebastian Raschka**: 所以在过去的一个月里，我的意思是，人们也联系了我，我知道一些大公司现在正在内部训练**LLM**，真正的大公司，那些有财力训练**ChatGPT**这样模型的公司，正在招聘训练**LLM**的人。我认为这也是我们将看到的，与其去找这些大型**LLM**提供商并给他们数据，人们会尝试为自己的公司和**私有数据**制作自己的**LLM**。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so over the last month I mean people reached out to me also I know for a fact that big companies are training **LLMs** inhouse really like big companies who have the financial means to train **ChatGPT** like model are hiring people who train **LLM** and I think that is also what we will see that instead of going to this big **LLM** provider and giving them the data people will try to make their own **LLMs** for their own company and **private data**.

</details>

**Matt Tur**: 这很有趣，对吧？有点像回到过去，因为最初人们认为他们会训练模型，然后他们就放弃了。但你现在说的是，你看到人们又回去了，也许是有了更好的**开源LLM**状态，他们可以将其作为构建模块。你说的就是这个，对吧？

<details>
<summary>Original English</summary>

**Matt Tur**: It's fascinating, right? So, sort of back to the future because initially people thought that they were going to train the models and then they kind of like gave up. But what you're saying is that you're seeing people going back maybe with a better state of **open-source LLMs** that they can build on as a building block. That's what you're saying, right?

</details>

**Sebastian Raschka**: 是的，也不是。我认为你说的没错。我的意思是，**开源模型**和**开放权重模型**（**open weight models**）在几年前非常流行，现在仍然非常流行，我喜欢与它们合作，但我认为**ChatGPT**模型和**开源开放权重模型**之间仍然存在差距。也许现在有了**DeepSeek** **3**版本，差距不那么大了，但这几乎是一个不同的社区，比如像我这样的修补匠社区，小型系统。**DeepSeek** **3**版本对我来说每天运行太昂贵了，我每天每周都要花费数千美元的托管费用。所以我玩的是更小的专用模型。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Yes. And no, I think you're right. I mean, **open weight** and **open source models** are very or were very popular like a few years ago and are still very popular and I love working with them but I think well there's still a gap between a **ChatGPT** model and an **open-source open weight model** maybe now with **Deepseek** version **3** not so much but that's almost like a different community like the tinker community like me like small system well **Deepseek** version **3** would be way too expensive to run for me every day I would have to spend thousands of dollars on just hosting costs every every day every week and so I toy around with smaller special purpose models.

</details>

**Sebastian Raschka**: 但我的意思是，首先，**开源社区**从这个意义上说，可能会在这些公司中卷土重来，但我甚至更进一步，他们实际上从零开始开发模型，真正的大型模型。与我所说的常规**开源**不同的是，它真的是大规模的，它就像**ChatGPT**规模的数据中心大型**LLM**。它不是你在你的计算机上运行的东西。它真的是一个大型数据中心风格的**LLM**。所以我知道有人对此感兴趣，他们正在探索它是否会成功，我不知道，但我认为现在如果你在大学里学习**LLM**，那就是大事。所以你从**开源**开始，你开始训练小型**LLM**，然后你逐步发展。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: But what I meant is so first yeah the **open source community** in that sense will have maybe a comeback at these companies but I even mean a step further that they actually develop models from scratch like really big models and what's different from I would say the regular **open source** here is that it is really large scale it's like it's like a **Chache** scale data center large **LM**. It's not something you run on your computer basically. It's really like a big data center style **LM**. So I know that there are I mean I can't say any names but I know people are interested in that like they are exploring that whether it will work out or not I don't know but I think I mean right now if you are in college you are learning about **LLMs** that's the thing that's the big thing. So you start with **open source**, you start training small **LLMs** and you you work your way up.

</details>

**Sebastian Raschka**: 然后在某个时候，你可能想被**Gemini**、**ChatGPT**等公司雇用，在那里进行大型模型开发，但不是每个人都能做到。我的意思是，你不可能有10万人做这件事。所以会有很多人分布在不同的公司，他们会做类似的事情。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Or and then at some point well you probably want to get hired either by **Gemini** **Chat Gribbd** or so forth and do the big model development there but not everyone I mean you can't have 100,000 people doing that. So there will be people distributed across different companies who will do something similar.

</details>

**Sebastian Raschka**: 另一方面，我认为**OpenAI**和**Gemini**的人在某个时候，我的意思是，大型金融公司有很多资金，他们也会使其有吸引力，在他们公司做类似的事情。所以，我认为我们现在看到的是这些公司非常集中，但我们将会看到知识传播得更广，其他公司也会开发模型。我们可能不会在新闻中听到这些，我的意思是，新闻当然会报道，但不会有论文，不会有大型公告，因为它不会是这种面向大众的模型，所以更多的是他们会在内部做的事情。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And also on the other hand people who are I think at **OpenAI** and **Gemini** at some point I mean big finance companies have a lot of deep pockets they will make it attractive to do something similar at their company too. So I think we will see right now it's very concentrated at these companies but we will see I think the knowledge being a bit more spread out where other companies will develop models too. we will probably not hear about it you know it's like on in the news or anything maybe the news of course but not there won't be papers there won't be big announcement because it won't be this general audience model so it's more something they will do internally right.

</details>

**Matt Tur**: 是的，特别是如果你是一家大型对冲基金或国防公司，我想我们谈论的就是这类公司。是的，它们有非常隐秘的**DNA**。好的，太棒了，太棒了。

<details>
<summary>Original English</summary>

**Matt Tur**: Yeah especially if you're a big hedge fund or defense company like I assume that's the kind of companies we're talking about yeah those are have a very secretive **DNA** okay fascinating fascinating.

</details>

### 持续学习的未来

**Matt Tur**: 你认为今年还会发生什么？我很有兴趣了解你对**持续学习**（**continual learning**）的看法，这在**NeurIPS**上曾是热门话题，但你认为它更像是2027年的事情，而不一定是2026年的事情。

<details>
<summary>Original English</summary>

**Matt Tur**: What else do you see happening this coming year I was interested to to read your thoughts on **continual learning** which was sort of the talk of the town **nurips** but you view viewed it or you view it as a 2027 thing not necessarily a 2026 thing.

</details>

**Sebastian Raschka**: 是的，**持续学习**是一个有趣的话题。我认为它在那里被非常激烈地讨论，但总的来说，如果你访问社交媒体上与**AI**相关的话题，**持续学习**无处不在。老实说，我不知道为什么它在2025年如此热门，因为我认为并没有什么重大突破。也许是对突破的希望，或者像“嘿，什么都没有改变，所以我们也许应该更多地关注它，以强制一些改变”。但**持续学习**我认为是一个有趣的话题，因为它听起来很有吸引力，如果你有一个**LLM**能够自我改进，或者一个代理能够做一些事情，失败然后学习。我认为今年没有任何类似的事情是可行的。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Yeah the **continual learning** is an interesting one. I think it was discussed there very heavily but also in general if you went to social media **AI** related topics **continual learning** was there all the time everywhere and to be honest with you I don't know why exactly it was such a hot topic in 25 because I don't think there was a big breakthrough I mean maybe it's the hope for breakthrough or the like hey nothing has changed so maybe we have to focus more on that to force some change but yeah so **continue learning** I think is an interesting topic because it is it sounds attractive if you have an **LLM** that self-improves or like an agent that does something fails and learns. I don't think anything like that is feasible this year.

</details>

**Sebastian Raschka**: 我的意思是，你理论上可以做**持续学习**，如果你愿意，用你拥有的数据，比如当你想到**RLVR**时。所以你理论上可以，它只是更新模型，但问题仍然是**灾难性遗忘**（**catastrophic forgetting**），或者你不想用垃圾数据训练模型。所以人们会做，我认为我会称之为**持续学习**，但它是在一个更受控的环境中，他们会收集失败案例和数据，然后构建数据集，然后以更受控的方式进行。但你可以看到，根据模型发布情况，它发生的频率比以前更高，因为我的意思是，以前是**GPT-1**、**GPT-2**、**GPT-3**，现在是**GPT-4**、**4.1**、**4.2**或**4.5**、**5.1**、**5.2**，所有模型现在都在迭代，或者**DeepSeek**也是如此。所以它就像这个相同的架构，你迭代多次，但仍然以更受控的方式。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I mean so right now I mean well you could technically do **continue learning** if you wanted to with the data you have like when you think even of **RLVR** um so you could technically it's just updating the model but the problem is still the **catastrophic forgetting** or also you don't want to train the model on garbage data. So people kind of do I think I mean I would call it **continual learning** but in a more controlled setting where well instead of just updating the model letting the model update itself they collect failure cases and data and then construct the data set and then do it in a more controlled manner but you can see based on the model releases it happens more frequently than it used to because I mean back then it was **GPD-1** **GPD2** **GPD 3** and now it's **GPD 4** **4.1** **4** I think two or five **51** **52** and all the models they are iterating now or even the same with **Deepseek** so it's like this same architecture you iterate multiple time but still in a more controlled way.

</details>

**Sebastian Raschka**: 我认为这很有道理，因为它是一件如此昂贵的事情，你不能，我甚至不知道你如何做**持续学习**，如果你有这个模型，它托管在数据中心，你不能随便更新它，它是一个非常昂贵的模型，你不能随便更新它，祝你好运。所以它是一件有风险的事情，你甚至不能作为一个人来做，你必须非常小心地监控很多事情。我不知道那会如何运作，因为现在我们仍然处于每个人都使用相同模型的时代。人们没有定制模型。当我使用**ChatGPT**时，我使用的模型和你使用的模型是一样的。是的，提示有点不同，比如内存等等，但所有都在提示中。它是相同的模型权重。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And I think it makes sense because it's such a expensive thing to do you can't I don't even know how you would do **continue learning** if you have this model it is hosted in a data center you can't just update it it's a very expensive model you can't just update it on good luck you know so it's like a risky thing to do and you can't do it even as a single person you have to be really careful monitoring a lot of things. I don't know how that would work because right now we are still in this era where everyone uses the same model. People don't have custom models. When I go to **Chetchup**, I have the same model as you do. And yeah, the prompt is a bit different like the memory and everything but it's all in the prompt. It's the same model weights.

</details>

**Sebastian Raschka**: 只要我们有这种情况，我认为我们就不会看到任何**持续学习**的东西。我的意思是，有一些公司，比如**Tinker API**，它在一定程度上**民主化**（**democratizing**）了训练，通过**API**，你现在可以更便宜地训练你的模型，或者不是拥有硬件，而是在他们的数据中心。人们有自己的副本，但你知道，我认为这离**持续学习**还很远，它只是提供了其他公司在大规模云实例上进行训练的能力，而你无需自己设置。但我认为2026年不会有任何真正使**持续学习**成为效率或我不知道的重大突破的东西。所以2027年甚至都很雄心勃勃。所以我不知道。所以也许我们会在2027年看到一些东西，考虑到它是一个如此重要的话题。有很多聪明的人正在思考和研究这个问题。所以，我们可能会看到一些东西，或者至少我不知道，一些新鲜的想法，或者一些可行的原型，或者有趣的东西。但是，真的很难说出任何具体的东西，因为没有看到任何东西。所以，这只是我提出的一个预测。也许我们会在2027年看到更多**持续学习**的东西。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And as long as we have that I don't think yeah we will see anything like **continual learning**. I mean there are companies I guess like I mean **Tinker API** it is something where it is **democratizing** a bit like the training where through an **API** you can now train your model more cheaply or instead of having the hardware it's on their data centers people have their own copy but you know it's I think very very far from **continual learning** it's just making available what other companies have in terms of training on a large cloud instance without you having set it But I don't see anything 2026 that really makes **continued learning** like the big breakthrough in efficiency or I don't know. And so 27 is even ambitious. So I don't know. So maybe we'll see something there 2027 given that it is such a big topic an important topic. There's a lot of smart people thinking about this and working on. So, we'll probably see something or at least I don't know some ideas that are fresh or things that prototypes that work or interesting. But well, really hard to say anything concrete without having, you know, seen anything. So, it's a prediction that I just put out there. Maybe we'll see more **continual learning** stuff in 2027.

</details>

**Matt Tur**: 嗯，姑且听之。

<details>
<summary>Original English</summary>

**Matt Tur**: But, well, with a grain of salt.

</details>

**Sebastian Raschka**: 是的。也许会变成一个**自我实现的预言**（**self-fulfilling prophecy**），对吧？如果足够多的聪明人决定这就是方向，那么也许它就会发生。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Yeah. Maybe becomes a **self-fulfilling prophecy**, right? And if you have enough smart people that decide it's the thing, then maybe it does does happen.

</details>

### Sebastian Raschka的工作流与LLM使用

**Matt Tur**: 好的。那么，也许我们来结束这次对话，谈谈你的工作以及你是如何工作的。你在2025年出版了一本书，关于如何从零开始构建**LLM**。我相信你目前正在写续集，关于如何从零开始构建推理模型。这是书名吗？你创作了令人难以置信的大量作品。所以人们应该在你的网站和你的**Substack**上找到你。你是如何吸收所有这些知识的？**LLM**在你的工作流程中占据多大比重？只是好奇你现在是如何工作的？

<details>
<summary>Original English</summary>

**Matt Tur**: All right. So maybe to close the conversation, let's talk about your work and how you do your work. So you you published a book this past year in 2025 on how to build **LLM** from scratch. I believe that you are writing the **SQL** currently how to build reasoning models from scratch. is at the is that the the title and you produce an incredible amount of of of work. So people should find you on your website on your **Substack** letter. How do you absorb all of this knowledge? To which extent are **LLMs** part of your workflow? Just curious how you work these days?

</details>

**Sebastian Raschka**: 好问题。我必须说，我没有什么神奇的方法。我认为我可能拥有的东西是，我对事物非常兴奋，当我兴奋时，事情就会变得非常容易和快速。我不知道，就像你可能注意到，我目前只写某些主题，例如我不涉及图像模型，因为我只是对**LLM**非常兴奋，然后我不知道，我就是忍不住。我变得非常兴奋，阅读所有关于它的东西，写关于它的东西，你知道，这主要是我几乎凭直觉行事。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Good question. So I must say like well I don't have like a magic well approach or anything. I think I I think the thing I have maybe is I get very excited about things and then when I'm excited about something it goes very easy and very fast. I don't know it's like well if you notice maybe I write only about certain topics I don't cover image models at the moment for example because I am just very excited about **LLMs** and then I don't know it's just I can't help it. I get very excited, read all the things about it, write about it and you know that that's that's mainly I almost go by intuition basically what I.

</details>

**Sebastian Raschka**: 从这个意义上说，我很幸运，就像我的博客一样，我发现有趣的东西，其他人现在也发现有趣。所以，我认为这是一个幸运的巧合，我老实说只写我发现有趣的东西。所以我不会强迫自己“哦，我必须涵盖**XYZ**，因为它应该被涵盖”。它更像是“哦，这个**递归语言模型**（**recursive language model**）是如何工作的？让我们读一下论文”，然后我就写关于它的东西。你知道，更像是，是的，对事物感到兴奋。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And I'm kind of lucky in that sense that like with my blog what I find interesting other people also right now find interesting. So I think there's like a lucky coincidence that I honestly write only about things I find interesting. So I'm not kind of trying to force myself oh I have to cover **XYZ** because well it's something that should be covered. It's more like oh how does this let's say **recursive language model** work? Let's just read the paper and then I write about it you know like more like um yeah getting excited about things.

</details>

**Sebastian Raschka**: 写书，嗯，也有点不同，因为我的博客更侧重于研究论文，当我兴奋时，我会阅读并把它放进去。对于书，我同样兴奋，但这更像是一本编码书，它更侧重于基础知识。因为我认为老实说，理解事物的最好方法是看到它实际运行。它不是任何模糊的图表。我的意思是，现在有很多图表，比如第六章，我前几天刚完成，有21张图表，它们花费了最多的工作量。也许有一天**LLM**可以帮助我解决这个问题，但图表有助于解释代码和所有内容，但代码基本上不会说谎，它要么工作，要么不工作。我认为这是一种非常有用的学习方式，对我来说也很有趣。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And yeah the book writing is well it's also a bit different because my blog is more research paper focused where I put all the like when I get excited about something I read about it and put it in there. For the book I'm similarly excited but that's more like a coding book where it's like the fundamentals. It's like because I think that's like to be honest the best way to understand something is to see to see it actually working. It's not any like handwavy figures. I mean there are a lot of figures like right now for chapter six just I finished it the other day 21 figures they take the most work. Maybe one day **LMS** can help me with that but figures help to explain the code and everything but code basically doesn't lie if it it either works or it doesn't work you know.

</details>

**Sebastian Raschka**: 当我写代码并看到它运行时，我感到非常满足，你得到了一个实际工作的东西。所以，我应该说，我在这本书中没有构建任何**生产级系统**（**production level systems**）。它被称为“**从零开始构建LLM**”或“从零开始构建大型语言模型”，但它不是一个你会在生产中使用的**LLM**。它，如果你做一些调整，你可以在生产中使用它，但目标是**代码可读性**（**code readability**）和教学**LLM**。因为我认为，要真正看到我如何格式化我的训练数据？它是如何处理的？损失函数是什么？什么被更新了？我认为这解释了比我说“哦，它做**下一个词元预测**”然后这里那里模糊不清要多得多。你实际上可以字面上看到它是如何做的，以及什么被输入。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And I think that's a very useful way to learn also and it's just alo a lot of fun for me. It's like when I write code and I see it working it's very satisfying and you have something that actually works. So I should say I'm not building in that book any **production level systems**. It's called **build an LLM from scratch** or build I mean **large language model from scratch** but it's not like an **LLM** that you would use in production. It is it well if you make a few tweaks you could use it in production but the goal is **code readability** and teaching **LLM** basically to because I think to see actually what how do I format my training data? How does it get processed? What is the loss function? What gets updated? I think this explains so much more than if I say, oh, it does **next token prediction** and then hand wavy hand wavy here and there. You can actually literally see how it does that and what feeds in.

</details>

**Sebastian Raschka**: **RLVR**也是如此。我们在这个播客开始时对**GRPO**的解释希望不会太糟糕。但如果你实际看到图表，里面有数字，但数字可能是错误的，如果你有一个图表，你画箭头等等。但如果你在代码中实现它，并且你得到完全相同的结果，模型训练并且你获得50%的准确率，那是一种很好的感觉，你会觉得“哦，它真的在工作”。它不是凭空捏造的数字。它真的在工作。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And the same with **LVR**. I we had like a hopefully not too bad explanation in this podcast at the beginning of a **gpo**. But if you actually see the diagram, I have the numbers in there, but the numbers could be wrong though if you have a figure and you draw arrows and everything. But then if you implement that in code and you get exactly the same results and the model trains and you you get 50% accuracy, it's like a nice thing where you can oh it's actually working. It's not just made up numbers. It's actually it actually works.

</details>

**Sebastian Raschka**: 我也是这样学习**LLM**架构的。所以我有这个博客，现在有13000字的**大型LLM架构比较**（**big LLM architecture comparison**），因为我一直在扩展它。我阅读一篇论文，我查看一个**LLM**的架构。我真的理解它吗？所以我画出架构，但那时我真的理解它吗？通常除非它是一个万亿参数模型，我经常会编写模型代码。所以我仍然有我的**GPT-2**架构，它们相对相似，所以如果有一个新架构，我就会选择最相似的一个，并对其进行一些更改。但这里的好处是，有人已经在**Hugging Face**的**Transformers**架构中实现了它，所以我有了一个参考模型。我可以运行我的模型，我可以看看如果我使用相同的提示，我是否得到完全相同的**logits**，相同的数字。所以通过这种方式，你可以**自我检查**。我是否正确实现了所有东西？结果是否正确？我认为这很有趣。工作量很大，但很有趣，而且它不会说谎。它会给你正确的答案。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And also that's how I learn about **LLM** architecture. So I have this blog the **big LLM architecture comparison** with now I think 13,000 words because I keep extending it. I read a paper, I look at the architecture of an **LLM**. Do I really understand it? So I draw the architecture but then do I really understand it and often unless it's like a one trillion parameter model I often code the model and so I have still my **GPT2** architecture and they are relatively similar and so if there's a new architecture I take the most similar one and make a few changes to it but then the beautiful thing here is so someone already implemented that in **hugging phase** the **transformers** architecture so I have a reference model I can run I run my model and I can see do I get the exact same **logits** the same numbers if I have the same prompt And so with that, you can actually **selfch checkck** yourself. Did I implement everything correctly? Are the results correct? And I think that that's just a lot of fun. It's a lot of work, but it's a lot of fun and it doesn't lie. It gives you the the correct answer.

</details>

**Sebastian Raschka**: 完美。在一些提示上，其他人扩展了它，我发现了一个错误，现在我对他们如何实现**Yarn Scaling**有了更好的理解。这是你仅仅通过阅读论文永远无法理解的东西。你必须真正地，我不知道，查看代码并玩弄它。所以，是的，这就是我尝试工作的方式。我尝试将阅读和编码结合起来，**LLM**我也使用，但我尝试以这种方式使用它。所以，我会说对于博客写作和书籍写作，没有那么多，因为老实说，我为了好玩尝试过，它生成的文本还行，但它，我不知道，它不会。我可以让它生成像我一样的文本，但那时我几乎不喜欢它，我最终会编辑它，然后对我来说，直接写出我想要的方式几乎更快。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Perfect. On some prompts, someone else extended that and I found a bug and now I have a better understanding how they implemented the **yarn scaling**. That is something you would never understand by just reading the paper. You have to really, I don't know, look at the code and to play around with that. And so yeah, so that's that's basically how I try to work. I try to combine you know like reading and coding and **LLM** I also use but I try to use it um so I I would say for blog writing on bookw writing not so much because honestly I for fun I tried it out it's just it generates okay text but it's I don't know it does not um I can ask it to generate text like me but it's almost like then I don't like it I end up editing it and then it's almost faster for me to just write it out the way I want it.

</details>

### LLM倦怠与工作满足感

**Matt Tur**: 你对**LLM倦怠**（**LLM burnout**）有一些有趣的看法，即使用**LLM**往往会耗尽精力。

<details>
<summary>Original English</summary>

**Matt Tur**: And you had interesting thoughts on **LLM burnout**, how using **LLM** tends to deplete energy.

</details>

**Sebastian Raschka**: 我会说首先，如果你只是让**LLM**去做，那也不是很令人满意。这就像作业作弊。老实说，我理解有些工作和人，只关心你完成了多少，以及你完成得有多快，那么使用**LLM**来为你完成工作是有道理的。但我认为有不同类型的人，他们享受不同的事情。例如，我更喜欢做研究工作而不是管理。当我是一名教授时，我做了研究，但我也必须监督其他学生。我喜欢与其他学生合作，但我发现我实际上更喜欢自己做研究，而不是告诉其他人如何做研究或管理。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I would say first also the thing is it's not super satisfying if you just ask the **LLM** to do it. It's you know like cheating at homework. I honestly I understand there are jobs and people where it just matters how much you get done and how fast you get something done and then it it makes sense to use an **LM** to do the job for you. But I think that different types of people who enjoy different things. For example, I enjoy doing the work more than managing. When I was a professor, I well, I did research, but I had to also, you know, supervise other students. And I liked working with other students, but I noticed I actually like doing the research myself more than telling other people how to do research or like managing.

</details>

**Sebastian Raschka**: 所以，我认为如果你只使用**LLM**来生成所有东西，我不会说它毫无用处，但我可能会感到空虚，比如“好吧，你使用了那个**自豪感**（**pride**）”。我认为那种“哦，我做了一些有效且很酷的事情”的**自豪感**，你会为此感到自豪。所以，我通常在使用**LLM**时，会尝试让我的工作变得更好，而不是为了做得更多或更快。我的意思是，在某种程度上我确实会这样做，但随后我尝试思考如何让我的工作变得更好。所以我使用**LLM**更多是为了“嘿，我实际上使用了**GPT-5 Pro**，当我写完一篇文章后，我把它放进去。嘿，你能找到任何错误或打字错误吗？”我经常会有数字标错，图表标错，比如图11、12、15、16之类的。我可以自己检查，但**LLM**更快地找到所有这些东西，比如如何让事情变得更好，或者是否有不清楚的地方？

<details>
<summary>Original English</summary>

**Sebastian Raschka**: And so I think if you use only **LLMs** to just generate everything and I wouldn't say useless but I would feel maybe empty like okay you you use that **pride** I think the **pride** oh I did something that worked and it's cool and you're proud of this and so what I try to do is generally when I use **LLM** I try to make my work better not to like not necessarily to make more or make it faster I mean to some extent I do but then I try to like how can I make what I do kind of better. So what I use **LM** for is more like hey I use actually the **GPD5 Pro** when I written an article and put it in there. Hey, can you find any mistakes or typos? Often I have mis numbered mislabeled figures like oh like figure 11 12 15 16 and things like that I can check myself but it's just faster for an **NLM** to find all these things like how to make things better or are there any things that are unclear?

</details>

**Sebastian Raschka**: 我的意思是我不是母语人士，所以有时我写句子时会感到疲惫，就是写不好，然后它会给我建议，“哦，是的，那样说也许不错”。然后我就会采纳那个句子，例如，就是这样的事情。嗯，我试图让工作变得更好，而不是完全取代自己。我的意思是，也许这有点目光短浅，因为**LLM**最终将能够做所有事情，但我太喜欢这份工作了，以至于不想完全放弃所有东西，如果这说得通的话。所以，我很幸运，这对我来说仍然有效。我知道有些企业，是的，执行速度更快真的很重要。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: I mean I'm not a native speaker so sometimes I have problems with a sentence that I'm tired. just can't get it right and then it suggests me, oh yeah, that that is maybe not a bad way to say it. And I I would then take that sentence for example, like things like that. Um where yeah, I'm trying to make let's say the work better without fully replacing myself. I mean, maybe that's like shortsighted because **LM** will eventually be able to do everything, but I kind of like enjoy the work too much to just give everything away if that makes sense. So, and I have the luxury that this is still works for me. So I know there are some businesses where yeah it is really important to execute faster and you know so yeah.

</details>

**Matt Tur**: 非常感谢你的工作，你的写作质量非常受欢迎，你所有的推文，你在**X**上有很多粉丝，你的名字在人们学习的地方的对话中不断出现。感谢你做了这部分工作。非常感谢你的时间。这非常引人入胜，非常有教育意义，非常有见地。所以真的非常感谢。非常感谢你，**Sebastian**。

<details>
<summary>Original English</summary>

**Matt Tur**: Thank you very much for your work very popular for the quality of your writing all your tweets you have like a big **X** following and your name keeps coming back in conversations about where people go to to learn. Thank you for doing this part. Really appreciate your time. That was super fascinating and very educational, very insightful. So really appreciate it. Thank you so much, **Sebastian**.

</details>

**Sebastian Raschka**: 谢谢你的邀请。我玩得很开心。我认为这可能是一个半小时都在谈论**LLM**和**AI**。我的意思是，这，嗯，这就是梦想，对吧？谢谢你的邀请。谢谢。

<details>
<summary>Original English</summary>

**Sebastian Raschka**: Thank you for inviting me. I had a lot of fun. I think it was maybe one and a half hours just talking about **LLMs** and **AI**. I mean, this is um well, that's the dream, right? Thanks for having me. Thank you.

</details>

**Matt Tur**: 大家好，我是**Matt Turk**。感谢收听本期**MAD**播客。如果你喜欢本期节目，如果你还没有订阅，或者在你观看或收听本期节目的任何平台上留下积极的评论，我们将不胜感激。这真的有助于我们建立播客并邀请到优秀的嘉宾。谢谢，下期节目再见。

<details>
<summary>Original English</summary>

**Matt Tur**: Hi, it's **Matt Turk** again. Thanks for listening to this episode of the **MAD** podcast. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks and see you at the next episode.

</details>