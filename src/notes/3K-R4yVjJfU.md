---
area: tech-insights
category: technology
companies_orgs:
- OpenAI
- Google
- Google Brain
date: '2025-11-26'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The MAD Podcast
- Attention is All You Need
people:
- Matt Turck
- Ray Kurzweil
- Ilia Sutskever
- Yann LeCun
products_models:
- GPT-5.1
- Transformer
- Gemini
- Codex
- ChatGPT
- GPT-4
- GPT-3.5
- TensorFlow
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=3K-R4yVjJfU
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: OpenAI研究科学家、Transformer论文的合著者Łukasz Kaiser深入探讨了现代AI的前沿。他驳斥了“AI进展放缓”的论调，指出AI能力正经历平滑的指数级增长，其核心驱动力是“推理模型”这一新范式。Kaiser详细阐释了推理模型、思维链（Chain
  of Thought）和强化学习（RL）的工作原理，并分享了Transformer架构诞生的幕后故事。他还讨论了预训练的未来、多模态的挑战，以及为何当前最先进的模型仍会被一些简单的逻辑谜题难住。
tags:
- llm
- model
- reinforcement-learning
- scaling-law
title: OpenAI科学家、Transformer作者Łukasz Kaiser深度解析AI前沿：GPT-5.1、推理模型与未来
---

### 播客介绍

**Matt Turck:** 嗨，我是 Matt，欢迎来到 Matt 播客。我今天的嘉宾是 Łukasz Kaiser，他是现代人工智能的关键构建者之一，毫不夸张地说，他塑造了这个领域的历史。Łukasz 是《Attention is All You Need》论文的合著者之一，这意味着他是 **Transformer**（Transformer: 一种基于自注意力机制的深度学习模型架构，现已成为驱动我们今天使用的几乎所有 AI 的核心）架构的发明者之一。他现在是 OpenAI 的一位顶尖研究科学家，正在帮助推动第二次重大的范式转变，即向 GPT-5.1 背后的那种推理模型发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, I'm Matt. Welcome to the Matt podcast. My guest today is Lucas Kaiser, one of the key architects of modern AI who has quite literally shaped the history of the field. Luc was one of the co-authors of the attention is all you need paper, meaning he's one of the inventors of the transformer architecture that powers almost all the AI that we use today. He's now a leading research scientist at OpenAI, helping drive the second major paradigm shift towards reasoning models like the ones behind GPD 5.1.</p>
</details>

**Matt Turck:** 本期节目将深入探讨人工智能的前沿领域：为什么“AI 发展放缓”的说法是错误的；哪些逻辑难题至今仍能难倒世界上最聪明的模型；“规模化”正在如何被重新定义；以及这一切告诉我们 AI 的下一个发展方向是什么。请欣赏我与 Łukasz 的精彩对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This episode is a deep exploration of the AI frontier. Why the AI slowdown narrative is wrong, the logic puzzles that still stump the world's smartest models, how scaling is being redefined, and what all of that tells us about where AI is heading next. Please enjoy this fantastic conversation with Luc.</p>
</details>

### 驳斥“AI 发展放缓”论

**Matt Turck:** Łukasz，欢迎你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lush, welcome.</p>
</details>

**Łukasz Kaiser:** 非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you very much.</p>
</details>

**Matt Turck:** 至少在某些圈子里，也许是旧金山以外的地方，今年一直流传着一种说法，即人工智能的进展正在放缓，我们已经将预训练的潜力挖掘殆尽，规模法则也遇到了瓶颈。然而，我们录制这期节目时，正值一个重磅消息频出的一两周，GPT-5.1、GPT-5.1 Codex Max、GPT-5.1 Pro，以及 Gemini Banana Pro、Grok 4.1、Llama 3 等相继发布。这感觉像是对那种说法的有力回击。那么，前沿人工智能实验室里的人们对 AI 进展的理解，与世界其他地方的人们似乎不理解的，到底是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There was a narrative at least in some circles maybe outside of San Francisco throughout the year that AI progress was slowing down, that we had maxed out pre-training, that scaling laws were hitting a wall. Yet we are recording this at the end of a huge week or couple of weeks with release of GBD 5.1, GPD 5.1 Codex max, GVD51 Pro as well as Gemini Banana Pro for Gro 4.1 Almo 3. So this feels like a major violation of that narrative. What is it that people in Frontier AI labs know about AI progress that at least parts of the rest of the world seem to not understand?</p>
</details>

**Łukasz Kaiser:** 我认为这里有很多东西需要展开说。所以我想慢一点来。人工智能领域正在发生一些事情，现在每周都有很多新进展。你知道，新模型、编程、制作幻灯片、自动驾驶汽车、图像、视频，这是一个让你不会长时间感到无聊的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there is a lot to unpack there. So I want to go a little slower. There is this thing that's happening in AI and in AI every week now a lot is happening. you know, new model, coding, doing slides, self-driving cars, images, videos, you know, it's a nice field that doesn't make you be bored for a long time.</p>
</details>

**Łukasz Kaiser:** 但在所有这些喧嚣之中，有时很难看清正在发生的根本性变化。从根本上说，如果你观察人工智能的进展，会发现其能力一直呈现出非常平滑的指数级增长。这是总体趋势，至少我和实验室里的同事们从未有过太多理由去相信这个趋势已经停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But through all of this, it's sometimes hard to see the fundamental things that are happening. And fundamentally, if you look at AI progress, it's been a very smooth exponential increase in capabilities. This is the overarching trend and there has never been much to make me at least and I think my colleagues in the labs believe that this trend is not happening.</p>
</details>

**Łukasz Kaiser:** 这有点像摩尔定律，对吧？摩尔定律持续了几十年，而且可以说，在 GPU 的推动下，它仍在继续，甚至在加速。当然，这并非由单一技术在 40 年里推动的。总是一种技术接着另一种，周而复始，持续了几十年。所以，从外部看，你看到的是一个平滑的趋势，但从内部看，除了计算能力的增加和工程技术的改进，进展当然是通过新的发展来实现的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a little bit like Moore's law, right? Moore's law happened through decades and decades and arguably you would say it's still very much going on if not speeding up with the GPUs. But of course it did not happen as like one technology was bringing you there for 40 years. there were was one technology and then another and another and another and another and this went on for decades, right? So, from the outside you see a smooth trend but from the inside of course you know progress is made through new developments in addition to the increase of computer power and better engineering.</p>
</details>

### 新范式：推理模型

**Łukasz Kaiser:** 在语言模型方面，我认为有一个重大的转折点。当然，一个转折点是 Transformer 的出现，但另一个转折点是**推理模型**（Reasoning Models: 一类AI模型，它们在给出最终答案前会生成一个内部的“思考”过程或“思想链”）。这大约发生在一年前。我们可能三年前就开始研究了，但作为一个范式，它还是非常新的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all of these things come together and in terms of language models I think there was a big pivotal point. I mean one point was of course the transformers when it started but the other point was reasoning models and that happened I think one preview was a bit a year and a month ago or something like that. So we started working on it maybe 3 years ago but it's very recent if you think of it as a paradigm that that's a very recent thing.</p>
</details>

**Łukasz Kaiser:** 这就像 S 型曲线，它开始时会带来惊人的增长，然后会稍微趋于平缓。我觉得预训练在某种意义上正处于 S 曲线的上半部分。但这并不是说预训练的规模化不再有效。它们完全有效。规模法则说的是，你的损失函数会随着计算量的增加而呈对数线性下降。我们完全看到了这一点，谷歌和所有其他实验室也清楚地看到了。问题在于，你需要投入多少钱来换取收益，这需要很多钱，而且人们正在投入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's always like these S-curves, right? It starts then it gives you amazing growth and then it flatlines a little bit. I feel pre-training in some sense it's on the upper part of the S, but it's not like scaling for pre-training don't work. They totally work. What scaling clause says is that your loss will log linearly decrease with your compute. We totally see that and clearly Google sees that and all other labs. The problem is, you know, how much money do you need to put into that versus the gains you get and it's just a lot of money and people are putting it.</p>
</details>

**Łukasz Kaiser:** 但随着推理这个新范式的出现，你可以用同样的钱获得更多的收益，因为它正处于 S 曲线的下半部分，有待发现的新事物能解锁惊人的能力。所以，并不是预训练已经过时了，而是我们发现了一个新的范式，它能以同样的价格给我们带来更惊人的发展。而这个范式仍然非常新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But with the new paradigm of reasoning, you can get much more gains for the same amount of money because it's on this lower part of the S-curve. There are just discoveries to be made and these discoveries unlock insane capabilities. So, it's not like pre-training fizzled out. It's just we found out a new paradigm that at the same price gives us much more amazing development. And this paradigm is still very new.</p>
</details>

**Łukasz Kaiser:** 这一切发生得太快了，一眨眼你可能就错过了。基本上，以前你有 GPT-3.5，它会给你答案，但它不使用工具，也没有推理，只是直接回答。现在你有了新的聊天机器人，如果你不深入了解，你可能会眨眨眼，觉得它也只是给你答案，或多或少都一样。但实际上，现在的聊天机器人会去浏览一些网站，进行推理，然后给你正确的答案，而不是它权重里记住的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It happens so fast. I think if you blink you may miss it because it was basically you had chat 3.5 right GPD 3.5 in chat and it would give you answers and it used no tools, no reasoning. It would answer you something. And now you have chat and you know if you were not into it you may have blinked and it also gives you answers and you may say okay it's more or less the same except the chat now will you know go look on some websites reason about it and give you the right answer instead of something it memorized in its weights.</p>
</details>

**Łukasz Kaiser:** 我很喜欢用这个例子：明天旧金山动物园几点开门？旧版的聊天机器人会完全根据记忆胡说八道，告诉你一个它可能五年前在动物园网站上读到的时间。它不知道今天是哪天，明天是哪天，所以它只会假设是工作日。而现在的聊天机器人知道今天是哪天，因为它在系统提示里，它会去动物园网站，读取信息，提取信息，如果信息模糊，它可能会检查其他三个网站来确认，然后给你答案。但如果你只是眨眨眼，你可能会觉得它们是一样的，但实际上，它已经有了巨大的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I very much used to like this example of when what time does the SF zoo open tomorrow? The old chat would tell you right totally hallucinate from its memory an hour that it read zoo opens on probably the zoo's website from 5 years ago and it didn't know what's today or tomorrow so it would just assume it's a weekday. Chat now knows what's today because it's in the system prompt it goes to the zoo website reads it extracts the information if it's ambiguous probably checks three other websites just to confirm and then gives you the answer. But if you blink, you may think it's the same, but no, it's dramatically better.</p>
</details>

**Łukasz Kaiser:** 结果就是，因为它能读取世界上所有的网站，它能回答以前根本无法触及的问题。所以，进步是巨大的，而且发生得太快，甚至可能被忽略。我认为，圈内人知道而其他人不知道的最大事情之一是，现在的问题已经不是关于进展了。像 ChatGPT 或 Gemini，任何一个大型语言模型能为你做的事情已经非常多，只是人们没有意识到。你可以拍一张坏掉的东西的照片，问怎么修理，它可能会告诉你。你可以给它一份大学水平的作业，它也会帮你完成。这绝对是惊人的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as a consequence, since it can read all the websites in the world, it can give you answers in stuff that it wouldn't be able to even touch before. So, there is tremendous progress, right? And it happened so fast it may even be missed. I think one of the biggest things that I would say people kind of know on the inside and others don't is that already right now it's not about the progress. There are so many things Chad or Gemini any LLM can do for you that people just don't realize. You can take a photo of something broken ask how to repair it. It may tell you you can give it a college level homework and it will do it for you. That's absolutely amazing.</p>
</details>

**Matt Turck:** 所以在某种程度上存在一个认知差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there is an education gap to some extent.</p>
</details>

**Łukasz Kaiser:** 是的，这只是刚刚发生。比如你提到的 Codex。程序员们有点保守，我有时还会用 Emacs。所有的编程工具，可能只是帮我补全一行代码。但人们非常固执：“这是我的编辑器，我在这里写代码。”现在人们会说：“不，这是 Codex，我让它做事，我之后再修改。”我认为，从偶尔使用到如今成为许多人编程工作的主要方式，这个转变就发生在最近几个月，这是相当大的变化。我不确定每个人都意识到了，但如果你不编程，你又怎么会意识到呢？不过我确实相信，这种情况会越来越多地出现在其他领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it just happened. I mean if you think you said codeex, right? You know programmers are conservative a little bit. I still use Emacs from time to time. All the coding tools like okay it will complete one line for me but people are very like this is my editor. I write code here. Now people are like no this is codeex. I ask it to do stuff. I will fix it later. Right? But I think it's the recent few months when the transition happened from people using it sometimes but rarely to now basically this being how a lot of people work in coding. That's quite big. I'm not sure everyone's aware of it but it's also like if you don't do programming why would you be aware of it? I do believe though that this will come to more and more domains.</p>
</details>

### AI 领域唾手可得的改进机会

**Matt Turck:** 谈到这一切都非常新且有些突然，我时常从人们那里听到一种说法，即人们之所以如此乐观，部分原因是在未来几个月里，这些模型有大量唾手可得、非常明显的改进空间。首先，你同意吗？其次，你能举一些例子吗？比如你们接下来需要修复的、业界将会修复的明显问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To the point of all of this being very new and somewhat sudden. Something that you or I hear from time to time when talking to people is that part of the reason why people are so optimistic is that there is a lot of lowhanging fruit, very obvious things to improve for those models in the next few months. First of all, do you agree? And second, can you give us some examples like obvious thing that you need to fix next and that the industry will fix?</p>
</details>

**Łukasz Kaiser:** 是的，有大量极其明显的事情需要修复。其中很大一部分很难在播客上讨论，因为它属于工程领域。你知道，每个实验室都有自己的基础设施和代码中的 bug。机器学习在某种意义上是 krásně forgiving（捷克语，意为“美丽地宽容”），与旧式软件工程形成对比，后者在你犯错时会直接报错。我们的 Python 代码通常可能运行起来，只是速度慢得多，结果也更差。然后你意识到，“哦不，搞错了”，你改进它，结果就变好了。这些都是巨大的分布式计算系统，运行起来非常复杂。所以，在如何训练模型和如何进行**强化学习（RL）**（Reinforcement Learning: 机器学习的一个领域，模型通过与环境互动并接收奖励或惩罚来学习最佳行为策略）方面，有大量的改进、修复和理解空间，因为 RL 比预训练更棘手，更难做好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, there is a ton of extremely obvious things to fix. A larger part of this ton is just hard to talk about on a podcast because it is in the engineering part. You know, every lab has their own infra and their own bugs in the code. Machine learning is beautifully forgiving in some sense in contrast to old software engineering which would just yell at you when you made a mistake. You know, our Python code generally probably run except much slower and give you worse results if you run it wrong. So you realize, oh no, it was wrong. And you improve it and the results get better. These are huge distributed computing systems. They're very complex to run. So there is a huge amount to improve and fix and understand in the process about just how to train your model and how to do RL because RL is more finicky than pre-training. It's harder to do really, right?</p>
</details>

**Łukasz Kaiser:** 除此之外，还有数据问题。我们过去基本上只是在 Common Crawl 这样的数据集上训练。这是一个巨大的互联网数据存储库，人们只是不加选择地抓取，有些东西进来了，有些没有，一团糟。现在，当然，每个大公司都有一个团队试图过滤这些数据并提高质量。但要真正提取出更好的数据，工作量很大。现在合成数据正在兴起，但当你生成合成数据时，如何生成、用什么模型、整个工程方面的细节都至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On top of that, there is data. You know, we used to train on just like common crawl basically. It's a big repository of the internet that people just scraped without regard of what and and some things came in, some didn't. It it was a mess. So now, of course, every larger company has a team that tries to filter this and improve the quality. But it's a lot of work to really extract better data. Now synthetic data is becoming a thing but when you generate synthetic data it really matters how you do it with what model what you the whole how the in the engineering aspects of everything.</p>
</details>

**Łukasz Kaiser:** 这是一个非常新的领域，人们只是以某种方式把它做出来了，它能工作，这很美妙，但还有太多可以做得更好的地方，以至于人们毫不怀疑这里有巨大的潜力。此外，还有像多模态这样的大问题。语言模型现在实际上是视觉语言模型，它们也能处理音频。所以在某种程度上它们是多模态模型，但多模态部分仍然在很大程度上落后于文本部分。这是一个需要明显改进的大领域，而且如何改进也不是什么大秘密。有一些方法可能会让它变得惊人地好，但也有一些非常简单的方法可以做得更好。但这可能需要从头开始重新训练整个基础模型，这需要几个月的时间和巨大的投资。所以我们需要组织好这一切。因此，有很多工作无疑会让事情变得更好。我认为人们心中的大问题是，这会让它们好多少？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's such a new domain that you know it was done somehow it works it's beautiful but there is just so much to do better that people I don't think have any doubts that there is a lot there. And on top of that there are the big things like multimodal. I mean language models they are now as I'm sure you know and most people realize actually vision language models because and they can also do audio. So they're multimodal models to some extent but the multimodal part still lags behind the text part to a large extent. So that's one big area where obviously you need to do better and it's not a huge secret how you can do better. You know there are some methods that maybe will make it even amazingly better but there are some very simple methods how you can do just better but you know this maybe requires retraining your whole base model from scratch and that takes few months and it's a huge investment so we need to organize it. So there is a lot of just work that will undoubtedly make things better. I think the big question that people have in their mind is how much better will it make them?</p>
</details>

### 深入理解推理模型

**Matt Turck:** 我很想就推理模型这个方面做一个深入的探讨和科普，因为正如你刚才提到的，它太新了，有些人真正理解它是如何工作的，但很多人并不理解。在一个非常简化的层面上，什么是推理模型？它与你的基础大语言模型有何不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'd love to do a little bit of a deep dive slash educational part on the whole reasoning model aspect because as you just mentioned since it's so new some people truly understand how those work many people don't. At a very simplistic level, what is a reasoning model and how is that different from your sort of base LLM?</p>
</details>

**Łukasz Kaiser:** 推理模型就像你的基础大语言模型，但在给你答案之前，它会进行人们所谓的**“思维链”**（Chain of Thought: 一种提示技术或模型内在过程，即在输出最终答案前，先生成一步步的推理过程）思考，也就是说，它会生成一些文本，这些文本不是给你看的，而是为了让模型自己能给出更好的答案。在进行这个过程时，现在的模型还被允许使用工具。例如，在它所谓的思考过程中，它可以去浏览网页，以便给你一个更好的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, a reasoning model is like your base LLM, but before giving you the answer, it thinks what people call in the chain of thought, meaning it generates some tokens, some text that's meant not for you to read, but for the model to give you the better answer. And while it does this these days, it is also allowed to use tools. So it can for example in its so-called thinking process go and browse the web and to give you a better answer.</p>
</details>

**Łukasz Kaiser:** 这是思考模型的表层部分。而深层部分在于，你开始将这个思考过程视为模型的一部分。它不再是模型生成并输出给你的东西，而是你想要训练的东西。你想告诉模型：“你应该好好思考，你应该这样思考，以便之后的答案在任何方面都是好的。”这引导你走向一种非常不同的模型训练方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the superficial part of the thinking models. Now the deep part is that you start treating this thinking process as part of the model basically. So it's not something the model generates and it's an output for you. It's something you want to train right. you want to tell the model you should think well you should think so that the answer after this is good in whatever way and this leads you to a very different way of training the model.</p>
</details>

**Łukasz Kaiser:** 以前的模型通常只用梯度下降法来训练，就像深度神经网络的训练方式一样。你说“预测下一个词”，然后进行梯度计算，对模型函数求导，然后训练权重来做这件事。仅仅这样做就能造出一个聊天机器人，这已经相当惊人了。但对于推理模型，你不能这样做，因为有推理部分，你无法对其进行微分。所以我们用强化学习来训练。在强化学习中，你有一个奖励函数，你需要进行一些尝试，然后强化，也就是推动模型更多地去做那些能带来更好答案的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because models were in usually trained with just gradient descent the way deep neural networks are trained meaning you say predict the next word and you do a gradient you differentiate your function from the model they're not fully differentiable but you approximate it and you train your weights to do that and that it was quite amazing that doing just that you could make a chat. But with a reasoning model you can do that because there is this reasoning part you can differentiate through that so we train this with reinforcement learning and reinforcement learning basically you okay there's just this reward and you need to do a bit of tries and reinforce meaning push the model towards doing more of the things that lead to better answers.</p>
</details>

**Łukasz Kaiser:** 这种训练方式比我们以前用的训练方式有更多的限制。以前的训练，你把整个互联网的数据都扔进去，即使过滤得不是很好，也大多能奏效。而强化学习，你需要非常小心，需要调整很多东西，还需要非常仔细地准备数据。目前，至少在我们现在使用的最基本的方式中，数据需要是相当可验证的。也就是说，你的答案是正确还是错误？你为此准备数据。这在数学和编程领域可以做得很好。在科学领域，某种程度上也可以，你可以有测试题，答案非对即错。但当涉及到写诗时，“这首诗好不好？”就很难判断了。所以目前，推理模型真正大放异彩的领域是像科学这样的领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this kind of training is a bit more like it has more restrictions than the training we used before. The training we used before, you took all of the internet, put it in, even if you didn't filter it very well, it would mostly work. Reinforcement learning, you need to be careful like you need to tune a lot of things, but you also need to prepare your data very carefully. So currently and for at least the most basic ways we use it currently, it needs to be fairly verifiable. So there is your answer correct or not? You prepare data for that. You can do that in mathematics, coding very well. You can do this in science to some extent right you can have test questions they're correct or not but you know if it comes to like writing poems is this poem good or not it's for now the reasoning models are really shine in in domains like science.</p>
</details>

### 从 Transformer 到 OpenAI 的历程

**Matt Turck:** 作为一个小插曲，我们稍后会回到更多关于前沿 AI 的话题。我很想谈谈你的故事。我的意思是，你有着令人难以置信的殊荣，一直处于这个行业的最前沿：既参与了 Transformer 论文，那是一个范式的诞生；现在你又在推理模型方面引领潮流，这是另一个范式。这真是一个不可思议的故事。你是如何成为一名 AI 研究员的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Thank you for this. All right. As a quick detour and we'll go back to more Frontier AI topics. I'd love to talk a little bit about your story. I mean you have the incredible distinction of having been at the forefront of this industry both the transformers paper which was the birth of one paradigm and now you're very much leading the charge on the reasoning model part which is another paradigm so this just incredible story how did you become an AI researcher?</p>
</details>

**Łukasz Kaiser:** 我曾是一名数学家和计算机科学家，但专攻理论计算机科学。我从小就对数学和计算机非常感兴趣。我在波兰完成学业，然后去德国攻读理论计算机科学和数学的博士学位。所以我很大程度上是一名数学家。我一直对“思考是如何进行的？什么是智能？”这类问题着迷。小时候，我总想模拟大脑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was a mathematician and a computer scientist but in theoretical computer science. Yes I was definitely very into math in high school and into computers also later in high school. Yes, I did my studies in Poland. I went for a PhD in Germany. It was the theoretical computer science and mathematics PhD. So I very much I'm a mathematician. I was always fascinated by you know how is this thinking going? What is intelligence? As a child I always wanted to like emulate the brain.</p>
</details>

**Łukasz Kaiser:** 后来，就在深度学习刚刚兴起的时候，我得到了一个加入谷歌的机会。那时我已经在法国获得了终身教职，法国的体制有一个很棒的地方，就是你可以请长达 10 年的假，并且随时可以回来。所以这没有任何风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then there was this opportunity to join Google just as the deep learning was starting off. I already had my tenure position in France and the French system has this beautiful thing that you can take a leave of 10 years. And you can still return anytime you want. So it's a no risk.</p>
</details>

**Matt Turck:** 所以，当你解决了 AGI（通用人工智能）之后，你可能会回到法国当教授。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at some point when you when you've solved AGI you may return back to France and be a professor.</p>
</details>

**Łukasz Kaiser:** 嗯，如果你解决了 AGI，他们可能无论如何都会要你。这种休假的好处在于，即使你没解决，他们也会让你回去。这实际上非常重要。我认为有很多诺贝尔奖得主都利用了这种休假去尝试一些更有风险的事情。科学研究中有很多运气成分，但能有这样的机会去冒险是非常好的。所以我来到了谷歌，当时是 Google Brain。我加入了 Ray Kurzweil 的团队，他是我第一位经理，他面试了我，非常鼓舞人心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, if you solve AGI, they may take you anyway. The nice part about the leave is that they will take you back even if you don't. But it's actually very important. A number of I think there's a number of Nobel Prize winners who who took this leave to just try something more risky and you know, sometimes it works, sometimes it doesn't. There's a lot of luck in in science and research but it's very good to have this opportunity to take it. So I came to Google that was Google brain at the time. I came to Ray Kurzweil's group he was my first manager he interviewed me and was very inspiring.</p>
</details>

**Matt Turck:** 我必须在此时问你关于 Transformer 论文的故事，它是如何诞生的。你们八个人，对吧？你们是如何聚在一起的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have to ask you at this point about the Transformer paper story, how it all came about. The eight of you, right? Seven or eight of you. How did you all get together?</p>
</details>

**Łukasz Kaiser:** 嗯，我们从未真正聚在一起。我最近在 Twitter 上看到一张我们八个人的合影，照片说是假的，但我知道是假的，因为我不认为我们八个人曾经同时在同一个物理房间里。这些想法是从许多方面发展而来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we never got together. I recently got a photo on Twitter of a photo session of all eight of us and it was saying it was fake but I knew it was fake because I don't think all eight of us were ever in the same physical room. These ideas developed from many sites before and after.</p>
</details>

**Matt Turck:** 也许可以为广大公众花一分钟解释一下“注意力”（attention）到底是什么意思，因为它是一个如此基本的概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And maybe one minute for the broad public on what attention actually means since it's such a fundamental concept.</p>
</details>

**Łukasz Kaiser:** 注意力是一种机制，它告诉模型，在处理下一个事物时，回顾过去，找到与你现在看到的最相似的东西。它起源于机器翻译时代，人们想将一种语言的词与另一种语言的词对齐。Transformer 的主要新颖之处在于自注意力（self-attention）。但 Transformer 不仅仅是这个想法。我认为这八个奇怪的人之所以能以某种方式走到一起（即使不是物理上的），其美妙之处在于我们从不同的角度来处理这个问题。有人研究注意力，有人研究如何在网络中存储知识，还有人负责让这一切真正运行起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, attention is the mechanism that tells the model as you're doing the next thing, look into your past and find the most similar things that you see in the past to what you are seeing right now. It came from the machine translation times where people wanted to align words in one language with words in another. The main novelty of Transformer was self attention. But Transformer is more than just this idea. I think that's the beauty of these eight weird people somehow came together even though not physically to do it is that we all approached it from different sides. So there was people working on the attention idea. There is how do you store knowledge in neural networks. And then you know in deep learning people laugh that ideas are cheap making them work is the hard part.</p>
</details>

**Łukasz Kaiser:** 我记得很清楚，当时人们会说：“你想用同一个模型来处理几个不同的任务？你为什么要做这个？”如果你做翻译，你训练一个模型；如果你做解析，你训练另一个。你永远不会为三个不同的任务训练同一个模型。我当时说：“不，不，我们要用一个模型来完成所有任务。”人们都觉得这不可思议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I remember distinctly that people were like, "So you want to use the same model for a few different tasks? Like why do you even do that?" Like if you have a different task, like if you do translation, you train one model, if you do parsing, you train another. You never train the same model for three different tasks. And I was like, "No, no, we're going to do all tasks in one model." And people were like, "No, no."</p>
</details>

**Matt Turck:** 那么，谈谈从谷歌到 OpenAI 的转变，以及这两种文化有何不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Talk about the transition from Google to open AI and perhaps how those two cultures are different.</p>
</details>

**Łukasz Kaiser:** Ilia Sutskever 是我在 Brain 的经理，后来他去创办了 OpenAI。他曾多次问我是否愿意加入。当时我觉得有点太前卫了。后来 Transformer 问世，我们有很多工作要做。然后是 COVID-19，谷歌完全关闭了，重新开放得非常慢。我发现远程工作非常困难，我更喜欢和人直接合作。这是原因之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Ilia was my manager at Brain. Then he went on to found OpenAI. He asked me a number of times whether I would like to join in the years. I found it a little bit too edgy at the time. Then Transformers came. So, we had a lot of work with that. And then COVID came and COVID was a tough time for the whole world, right? But Google totally closed. Google was reopening extremely slowly. So one part of me was I find it very hard to do remote work. I much prefer to work with people directly. That was one reason.</p>
</details>

**Łukasz Kaiser:** 另一个原因是，我加入 Google Brain 时，它只有几十个人，大概 40 人。我离开时，它已经有三四千人了，分布在多个办公室。在小团队和大公司工作的感觉非常不同。所以我想，OpenAI 现在处于一个更稳定的状态，他们在做语言模型，这和我擅长的很匹配。所以我说：“好吧，让我试试。”我之前除了大学，只在谷歌工作过。所以转到一个小的创业团队是一个相当大的改变，但我喜欢在小团队工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the other was also Google Brain when I joined it was a few dozen people, maybe 40, something like that. When I left it was 4,000, 3,000 people spread across multiple offices. It's very different to work in a small group and to work in a huge company. So with all this, I was like, you know, OpenAI though is in a much stabler state. We're doing language models. You know, something about this that may look like a good match. And I was like, okay, let me try. I've never worked in any company other than Google before, other than the university. So it was quite a change to the small startup group, but I like working in smaller groups.</p>
</details>

### 预训练的未来与经济压力

**Matt Turck:** 预训练的下一步是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. What is next for pre-training?</p>
</details>

**Łukasz Kaiser:** 正如我所说，我认为预训练在科学层面已经达到了 S 曲线的上半部分，但它可以平滑地扩展，这意味着如果你投入更多的计算，你会得到更低的损失，前提是你做得对，而这极其困难。你得不到像推动 RL 那样的回报，但它通常会使模型整体能力更强，这当然是你想要做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pre-training as I said I think it has reached this upper level of the S-curve in terms of science but it can scale smoothly meaning if you put more compute you will get better losses if you do things right which is extremely hard and that's valuable.</p>
</details>

**Łukasz Kaiser:** 我认为人们在宏大叙事中有点低估了一件事。三四年前的 OpenAI 是一个小型研究实验室，有一个名为 API 的产品，但产品端的 GPU 约束并不大。所有的 GPU 都只用于训练。所以对于决策者来说，说“我们要训练 GPT-4，这将是有史以来最聪明、最大的模型”是非常容易的。我们为什么要关心小模型呢？我们只关心它们如何帮助调试大模型的训练。所以 GPT-4 是最聪明的模型，这很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think what people underestimate a little bit in the big narrative is you know open AI three four years ago was a small research lab with a product called API but it was not such a big there was no GPU constraint on the product side for example all GPUs were just used for training so it was very easy as a decision for the people to say you know we're going to train GPT4 this will be the smartest and largest model ever. And what do we care about small models? I mean, we care of them as to make like to debug the training of the big model, but that's it. So, GPT4 was the smartest model and it was great, right?</p>
</details>

**Łukasz Kaiser:** 但后来发现，有了聊天产品，我们现在有十亿用户，人们每天都想和它聊很多。你需要 GPU。所以你训练了下一个巨大的模型，结果发现你无法满足这种需求，人们不愿意付足够的钱来和更大的模型聊天。所以从经济上讲，你需要更小的模型。这当然发生在所有实验室，因为一旦经济因素介入，它变成了一个产品，你就必须比以前更仔细地考虑价格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then it turned out, oh, there is this chat and now we have a billion users and you know, people want to chat with it a lot every day and you need GPUs. So you train the next like huge model and it turns out you cannot satisfy this like people will not want to pay you enough to chat with the bigger model. So you just economically need the smaller model. So and this happened of course to all the labs because like the moment the economy arrived and it became a product you had to start thinking about price much more carefully than before.</p>
</details>

**Łukasz Kaiser:** 我认为这导致了一个事实，即我们不再只是用你拥有的钱去训练最大最大的东西，而是说：“不，我们要训练同样质量但更小、更便宜的东西。”以更少的钱提供同样质量的压力非常大。在某种意义上，作为一名研究员，这几乎让我有点难过。我对那些巨大的模型怀有深厚的感情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this caused the fact that instead of just training the largest and largest thing you can for the money you have we said well no we we're going to train like the same thing but same quality but smaller cheaper. The pressure to give the same quality for less money is very large in some senses as a researcher almost makes me a little sad I have a big love for these huge models.</p>
</details>

**Łukasz Kaiser:** 与此同时，人们重新发现了**“蒸馏”**（Distillation: 模型压缩技术，即用一个大型、复杂的“教师”模型来训练一个更小、更高效的“学生”模型，使其学习到前者的知识）是多么神奇。蒸馏意味着你可以训练一个大模型，然后把大模型（作为老师）的知识传授给小模型。人们早就知道蒸馏，但不知何故，大家重新发现了它对于经济性的重要性。现在这也意味着，哦，训练这个巨大的模型实际上是件好事，因为你可以从中蒸馏出所有的小模型。所以现在也许有点回归到训练大模型的趋势了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the side people kind of rediscovered how amazing distillation is. Distillation means you can train a big model and then put the same knowledge from the big the big is a teacher to the little one. People knew about distillation. It's a paper a long time ago but somehow people kind of rediscovered how important that is for the economics but now it also means that oh training this huge model is actually good because you distill all the little ones from it. So now maybe there is a bit more of a return to it.</p>
</details>

### AI 的“锯齿状”前沿与局限

**Matt Turck:** 随着 GPT-4 到 5 再到 5.1 的演进，到底发生了什么变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Walk us maybe through the evolution of from GD4 to 5 to 5.1. What has actually changed?</p>
</details>

**Łukasz Kaiser:** 这是一个非常棘手的问题。我认为变化比你想象的要小。从 GPT-4 到 5，我认为最大的变化是推理，即 RL 和合成数据。正如我告诉你的，那个时间段的预训练部分主要是为了让东西更便宜，而不是更好。从 4 到 5 的主要改进是增加了使用强化学习的推理，这使得生成合成数据成为可能，从而也改进了模型。这就是大的图景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That that's a very tough question. I think less than you think. From GPD4 to 5 I think the biggest thing that changed is reasoning meaning RL and synthetic data as I told you the pre-training part in that time frame was mostly about making things cheaper not making things better. The main improvements from four to five is adding reasoning with reinforcement learning and this allowed to generate synthetic data which also improves the model. So that's the big picture.</p>
</details>

**Łukasz Kaiser:** 此外，ChatGPT 现在是一个被很多人使用的产品。所以后训练团队学到了大量的经验教训。还有幻觉问题，虽然在某种程度上仍然存在，但比两年前已经大大减少了。部分原因是强化学习现在可以使用工具收集数据，它也鼓励模型去验证它正在做的事情。从 5 到 5.1 的变化主要是这种后训练的改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In addition to that, ChatGPT is now a product used by a lot of people. So the post- training team has learned a tremendous number of lessons. There was these things called hallucinations. It's still with us to some extent, but dramatically less than than two years ago. Some part of that is because reinforcement learning can now use tools and gather data and it also encourages the model to know you know verify what it's doing. The 5 to 5.1 is mostly this kind like it's mostly a post-training improvement.</p>
</details>

**Łukasz Kaiser:** 推理的根本训练方法非常局限于科学数据。所以它不像预训练那样广泛。预训练模型感觉在各种事情上都表现得差不多好或差不多差。但推理模型更加“锯齿状”（jagged），它们在某些地方有惊人的能力，但在邻近的地方却不怎么样。这可能非常令人困惑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fundamental training method of reasoning is very limited to science data. So, it's not as broad as the pre-training. Pre-training models felt kind of almost uniformly good or bad at things. But the reasoning models are even more people call it jagged, right? They have amazing abilities somewhere and then close by not so much. And that can be very confusing.</p>
</details>

**Łukasz Kaiser:** 我一直觉得这很奇怪，因为你可以说这个模型在数学奥林匹克竞赛中表现出色。但同时，我有一本我上一年级的女儿的数学书，她 5 岁。我从这本书里拿了一道练习题，没有一个前沿模型能解出来，而你可能 10 秒钟就能解出来。所以要记住这一点。模型既令人惊叹，也有它们做不好的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's something I always love that it's weird because you can say the model is amazing at mathematical olympiad. At the same time, I have a math book for my first grader daughter. She's 5 years old. I took one exercise from this math book and none of the frontier models is able to solve it. and you would be able to solve it in 10 seconds. So that's something to keep in mind. Models are both amazing and there are tasks that they cannot do very well.</p>
</details>

**Łukasz Kaiser:** 我可以给你看一个例子。这里有两组点，问题是点的数量是偶数还是奇数。你看一眼，哦，它们像是两个相同的东西，所以应该是偶数。这是 5 岁孩子应该学到的。但有一个点是共享的，所以它必须是奇数。对于这个简单的例子，Gemini 3 实际上做对了。然后是另一个非常相似的谜题，但现在是两座“点山”，底部也有一个共享的点。紧接着你问它这个怎么样，它进行了一些思考，但完全忽略了共享的点，说数字是偶数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can show you this as an example. It has two groups of dots on both sides and the question is is the number of dots even or odd? If you look at it you see oh they're like two identical things. So that would be even. That's what the 5-year-old is supposed to learn. But there is one dot that's shared. So now that must be odd. For this simple one which has like 20 dots or so. Gemini 3 actually does it right? And then you have another puzzle which is very similar except now there are two mountains of dots and there's also one dot shared at the bottom now. And right in context right after that you ask okay how about this one and then it does some thinking and it just totally misses that there is a shared dot and it says the number is even.</p>
</details>

**Łukasz Kaiser:** 这是 GPT-5.1 的完全相同的提示。它也解决了第一个，看到了共享点，说是奇数。然后它看到那两座山，不知何故就没看到那个点，说是偶数。好消息是，如果你让它思考得更久，或者再思考一次，它就能看到。如果你用 GPT-5 Pro，它需要 15 分钟。人类 5 岁小孩需要 15 秒。GPT-5.1 Pro 会运行 Python 代码从图像中提取这些点，然后用循环来计数。所以这并不完全……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is the exact same prompt for GPT 5.1. It also solves the first, it sees the dot. It says it's odd and then it sees the mountains and somehow it doesn't see the dot and it says it's even. The nice thing is if you let it think longer or if you just let it think again it will see it. So if you use GPT5 Pro it takes 15 minutes. The human 5-year-old takes 15 seconds. The GPD51 Pro will run Python code to extract these dots from an image and then it will count them in a loop. So that's not quite...</p>
</details>

**Matt Turck:** 为什么会这样？是什么让模型出错了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And why is that? What trips up the model?</p>
</details>

**Łukasz Kaiser:** 我认为这主要是多模态部分的问题。模型们才刚刚起步。它们还没有学会在多模态领域进行良好的推理，也没有学会在上下文中利用一次推理来进行下一次推理。所有这些都是众所周知的问题，模型只是没有经过足够的训练来做这些事。我们知道需要把这些加入到训练中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is mostly multimodal part. The models are just they're starting. They have not yet learned to do good reasoning in multimodal domains and they have not yet learned to use one reasoning in context to do the next reasoning. All of these though are things that are very well known and like the models are just not trained enough to do this. it's just something we know we need to add into training.</p>
</details>

### AI 的终极问题：泛化能力

**Łukasz Kaiser:** 我认为人工智能中的一个大问题是，推理是否足以提高泛化能力，还是你需要更通用的方法？我认为第一步是让推理更通用。这是我的热情所在，也是我正在研究的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the big question in all of AI is is reasoning enough to increase generalization or do you need like more general methods? I think the first step is to make reasoning more general. That's my passion. That's also what I work on.</p>
</details>

**Łukasz Kaiser:** 模型仍然有局限性，因为它们不生活在物理世界中，因为它们在多模态方面不是很好，因为推理还很年轻，我们做的方式还有很多 bug。但一旦我们解决了这些问题，就会有一个大问题：这足够了吗？还是需要其他大的东西来让模型更好地泛化，这样我们就不需要把每一个具体的东西都在训练数据中教给它，它就能自己学习和泛化。我认为这是最迷人的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They still have limitations because they don't live in the physical world because they're not very good at multimodal because reasoning is very young and there's a lot of bugs in how we do it yet. But once we fix that there will be this big question is that enough or is there like something other big to to make models generalize better so we don't need to teach it every particular thing in the training data that it just learns and generalizes. I think that's the most fascinating question.</p>
</details>

**Matt Turck:** 那么，除了 Transformer 之外，你是否看到了有前途的、可能成为未来严肃探索路径的基础架构变革？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you see promising fundamental architectural changes outside of transformers that have caught your attention and feel like they could be a serious path to explore in the future?</p>
</details>

**Łukasz Kaiser:** 我认为有很多漂亮的工作人们正在尝试。Yann LeCun 一直在推动其他方法。我觉得他的方法更偏向于多模态部分。但也许如果你解决了多模态，它也会帮助你理解其他东西。还有很多人在推动基础科学。工程部分是最大的瓶颈。我的意思是，当你真正扩大规模时，GPU 也是一个瓶颈，但要实现一个比单机更大的东西，作为一个实验性研究项目，你没有一个团队来做这个，我认为这仍然比它应该的要难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there is a lot of beautiful work that people are trying out. Yann LeCun has been pushing for for other methods. So, I feel like his approach is more towards the multimodal part. But maybe if you solve multimodal, it also helps your other understanding. There is a lot of people pushing fundamental science still. The engineering part is the biggest bottleneck. I mean GPUs are a bottleneck too when you scale really up but implementing something that's larger than one machine it's an experimental research project so you don't have a team to do that I think that's still harder than it should be.</p>
</details>

### AI 时代的未来与希望

**Matt Turck:** 当我们看到 OpenAI 的所有进展时，我、风险投资家、创始人和创业公司都在思考一个问题：随着模型变得越来越通用，具有更多的代理能力，能够长时间运行，进入科学、数学等领域……是否会有一个世界，基本上模型，或者说只有一个模型，能做所有的事情？对于那些在模型之上构建产品的人来说，还剩下什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One theme that people like me, VCs and founders and startup think about a lot as we see all the progress at OpenAI is as the models keep getting more general with more agent capabilities the ability to run for a very long time going to areas like science and math... is there a world where basically models or maybe just one model does everything? What's left for people that build products that sit on top of models?</p>
</details>

**Łukasz Kaiser:** 我刚刚给你看了一个 5 岁小孩的练习题，模型都做不出来。我认为我们需要记住这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just showed you a 5-year-old exercise that the model doesn't do. I think we need to keep that in mind.</p>
</details>

**Matt Turck:** 所以你是说还有希望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you're saying there's hope.</p>
</details>

**Łukasz Kaiser:** 有希望。下一个模型会做到的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is hope. The next model will do it right.</p>
</details>

**Łukasz Kaiser:** Transformer 论文是从翻译开始的。我最近参加了一个翻译行业会议。自那时以来，翻译行业已经大幅增长，而不是萎缩。需要做的翻译更多了，翻译人员的报酬也更高了。问题是，如果模型在大多数情况下都这么好，为什么你还需要翻译？答案是，有时候，想象一下你在为一家报纸做一个你不懂的语言的列表。GPT-5 几乎肯定会为你正确翻译。但你会在没有一个懂该语言的人看过之前就发表吗？这可能是一个信任问题，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Transformer paper started with translation. I recently went to a translation industry conference. The translation industry has grown considerably since then. It has not shrunk. There's more translations to be done. Translators are paid more. The question is why would you even want a translator if the model's so good in most of the cases. The answer is sometimes imagine you do a listing for a newspaper but in a language you don't know and GPD5 will almost certainly translate it correctly for you. Would you still publish it without having a human who speaks that language look at it? It's a question of trust probably, right?</p>
</details>

**Łukasz Kaiser:** 在一个基本上完全自动化的行业里，仍然存在信任问题，我认为这是我们将长期努力解决的问题。也有些事情你就是想让人来做。我不认为我们会没有事情可做，但这并不意味着我们做的一些事情可能不会发生巨大变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is in an industry that fundamentally is totally automated, right? There is still the question of trust and I think that's a question we will grapple with for a long time. There are also just things you want a person to do. I don't think we will have no things to do but that doesn't mean that some things we do may not dramatically change.</p>
</details>

**Matt Turck:** 作为最后一个问题，为了帮助我们了解 AI 前沿的人们目前在思考或从事什么工作，你个人觉得哪个研究领域非常有趣？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And maybe as a last question to help us get a sense for what people at the frontier of AI are currently thinking about or working on, what do you personally find really interesting as a research area?</p>
</details>

**Łukasz Kaiser:** 我一直觉得通用数据强化学习是我的心头好，也是我正在研究的。例如，机器人技术可能只是一个例证，说明我们在多模态方面做得还不够好，在通用 RL 和通用推理方面也做得不够好。一旦我们在多模态方面做得很好，并且成功地将推理推广到机器人需要的物理领域，我认为它将看到惊人的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I always find this general data reinforcement learning is my pet peeve and what I work on. Luckily that for example, robotics is probably just an illustration that we are not doing that well in multimodel and that we're not doing that well in general RL in general reasoning yet. The moment we do really well in multimodel and we manage to generalize reasoning to the physical domains that the robot needs, I think it will see amazing progress.</p>
</details>

**Łukasz Kaiser:** 当它发生时，我有一种感觉，鉴于很多公司都在推出遥控或手套操作的硬件，到我们取得这一进展时，硬件可能已经准备好了。在家中拥有一个机器人可能会像一个巨大的、可见的变化。比聊天机器人更可见。不过，我们适应这些东西的速度快得惊人，对吧？旧金山的自动驾驶汽车是人们很快就习惯了的东西。所以，也许机器人也会这样。尽管如此，我确实认为当它发生时，它将对我们对世界的感知产生相当大的戏剧性影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it does, I have a feeling given that a lot of companies are launching hardware that's kind of teleoperated or glove operated or something. So my suspicion is by the moment we make this progress, the hardware will may be there by then and having a robot in a home may be like a big visible change. More visible than chat. It's stunning to me how quickly we get used to these things, right? The self-driving cars in San Francisco are something people got used to so quickly. So, maybe this will happen for robots, too. Nevertheless, I do think it will be quite dramatic in our perception of the world when it happens.</p>
</details>

**Matt Turck:** Łukasz，这绝对是一次精彩的对话。非常感谢你今天花时间和我们在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lucas, it's been absolutely wonderful. Thank you so much for spending time with us today.</p>
</details>

**Łukasz Kaiser:** 非常感谢你，Matt。谢谢你的邀请。很高兴和你交谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you very much Matt. Thank you for the invitation. Great to talk to you.</p>
</details>