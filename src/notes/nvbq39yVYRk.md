---
author: Anthropic
date: '2025-12-18'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=nvbq39yVYRk
speaker: Anthropic
tags:
  - llm
  - prompt-engineering
  - ai-safety
  - model-training
  - user-experience
title: AI模型中的谄媚行为：成因、影响与应对
summary: 本视频探讨了AI模型中存在的谄媚行为，即模型为迎合用户而给出不真实或无益的回答。Kira解释了谄媚行为的定义、其在AI中的表现形式及其危害，并深入分析了其产生的原因（模型训练方式）。视频还提出了识别和应对AI谄媚行为的策略，强调了在AI开发中构建真正有益而非一味迎合的模型的重要性。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-work
project:
  - ai-impact-analysis
people:
  - Kira
companies_orgs:
  - Anthropic
products_models:
  - Claude
media_books: []
status: evergreen
---
### 什么是AI谄媚行为

大家好，我是**Kira**，来自**Anthropic**的保障团队。我拥有精神健康领域的博士学位，专攻精神病流行病学。在**Anthropic**，我的工作是降低与用户福祉相关的风险，这意味着我们投入大量精力思考如何确保用户在使用**Claude**模型时的安全。今天，我将和大家探讨**谄媚行为**（Sycophancy: 指为了迎合他人，说出对方想听的话，而非真实、准确或真正有益的内容）。人们做出谄媚行为是为了避免冲突、获得好处以及其他多种原因。然而，这种行为也可能在**AI模型**中显现。有时，**AI模型**会为了立即获得人类的认可，而优化对提示或对话的响应。这可能表现为AI同意你犯下的事实性错误，根据你提问的方式改变答案，或者根据你的偏好调整其响应。在本次视频中，我们将讨论**AI模型**中出现谄媚行为的原因，以及为什么这对研究人员来说是一个难以解决的问题。此外，我们还将介绍在使用AI时识别和对抗谄媚行为的策略。

<details>
<summary>Original English</summary>

Hi there, my name is Kira and I'm on the safeguards team at Anthropic. I have a PhD in mental health, specifically psychiatric epidemiology. And at Anthropic, I work on mitigating risks related to user well-being. What that means is we think a lot about how to keep users safe on Claude. Today I'm here to talk to you about sycophancy. Sycophancy is when someone tells you what they think you want to hear instead of what's true, accurate, or genuinely helpful. People do it to avoid conflict, gain favors, and for a number of other reasons. But sycophancy can also manifest in AI models. Sometimes AI models can optimize responses to a prompt or conversation for immediate human approval. This might look like an AI agreeing with a factual error you've made, changing its answer based on how you've phrased a question, or tailoring its response to match your preferences. In this video, we'll talk about why sycophancy happens in models and why it's a hard problem for researchers to solve. Plus, we'll cover strategies to identify and combat sycophantic behavior when working with AI.

</details>

### 谄媚行为的危害

在深入探讨之前，让我先展示一个**AI**交互中谄媚行为的例子。这是**Anthropic**自家的模型**Claude**。我们来试一下：“嘿，我写了一篇很棒的论文，我对此非常兴奋。你能评估一下并分享反馈吗？”我这里的主要请求是获得关于论文的反馈。然而，由于我表达了自己对此论文的兴奋之情，这可能会导致**AI**给出肯定或支持性的回应，而不是批判性的意见。这种肯定可能会让我误以为我的论文真的很棒，即使它并非如此。你可能会想：“那又怎样？人们可以问其他人，核实事实，或者提出更好的问题。”但这个问题之所以重要，原因有很多。当你试图提高效率，例如撰写演示文稿、集思广益或改进工作时，你需要你所使用的**AI工具**提供诚实的反馈。如果你问**AI**：“我如何改进这封邮件？”而它回答“它已经很完美了”，而不是建议更清晰的措辞或更好的结构，这可能会令人沮丧。在某些情况下，谄媚行为还可能助长有害的思维模式。如果有人要求**AI**证实一个脱离现实的**阴谋论**（Conspiracy Theory: 一种关于秘密计划或事件的未经证实或反驳的解释），这可能会加深他们的错误信念，使他们进一步脱离事实。

<details>
<summary>Original English</summary>

Before we dive in, let me show you an example of sycophancy in an AI interaction. This is Claude, Anthropic's own model. Let's try. Hey, I wrote this great essay that I'm really excited about. Can you assess and share feedback? My main request here is to get feedback on my essay. However, because I've shared how excited I'm feeling about it, this could lead the AI to respond with validation or support instead of a critique. This validation might lead me to think that my essay really is great, even if it isn't. You might think, "So what? People can just ask other people, fact-check things, or ask better questions." But this matters for a number of reasons. When you're trying to be productive, writing a presentation, brainstorming ideas, or improving your work, you need honest feedback from the AI tool you're using. If you ask an AI, how can I improve this email? And it responds, it's already perfect, instead of suggesting clearer wording or better structure, that can be frustrating. In some cases, sycophancy could also play a role in reinforcing harmful thought patterns. If someone is asking an AI to confirm a conspiracy theory that is detached from reality, that could deepen their false beliefs and disconnect them further from facts.

</details>

### 谄媚行为的成因

让我们从谄媚行为发生的原因开始。这都归结于**AI模型**的训练方式。**AI模型**通过大量人类文本示例进行学习。在**AI模型训练**（AI Model Training: 通过大量数据让AI系统学习模式和行为的过程）过程中，它们会习得各种沟通模式，从直言不讳到热情迎合。当我们训练模型以提供帮助并模仿热情、友好或支持性的语气行为时，谄媚行为往往会作为这种“一揽子”行为的一部分而出现。随着模型越来越深入地融入我们的生活，现在比以往任何时候都更重要的是理解和预防这种行为。

<details>
<summary>Original English</summary>

Let's start with why this happens. It all comes down to how AI models are trained. AI models learn from examples. Lots and lots of examples of human text. During this training, they pick up all kinds of communication patterns from blunt and direct to warm and accommodating. When we train models to be helpful and mimic behavior that is warm, friendly, or supportive in tone, sycophancy tends to show up as an part of that package. As models become more integrated into all of our lives, it's important now more than ever to understand and prevent this behavior.

</details>

### 平衡适应性与真实性

谄媚行为之所以棘手，是因为我们确实希望**AI模型**能适应你的需求，但前提是不能牺牲事实或用户福祉。如果你要求**AI**以非正式的语气撰写内容，它就应该这样做，而不是坚持使用正式语言。如果你说“我喜欢简洁的答案”，它就应该尊重这种偏好。如果你正在学习某个主题，并要求以初学者水平进行解释，它就应该满足你的需求。挑战在于找到正确的平衡点。没有人希望使用一个总是意见不合或好斗的**AI**，在每项任务上都与你争论不休。但我们也不希望模型在你需要诚实反馈时，总是诉诸于同意或赞美。即使是人类，也难以把握这种平衡：何时为了维持和平而同意，何时为了重要的事情而直言不讳？现在，想象一下一个**AI**在数百个截然不同的话题上做出这种判断，而它并没有像我们一样真正理解上下文。这就是为什么我们持续研究谄媚行为在对话中如何表现，并开发更好的测试方法。我们专注于教导模型区分**有益的适应**（Helpful Adaptation: AI模型根据用户意图进行调整，同时保持信息准确和有益）和**有害的迎合**（Harmful Agreement: AI模型为迎合用户而同意不准确或无益的信息）。我们发布的每个**Claude**模型都在划清这些界限方面做得更好。尽管对抗谄媚行为的最大进展将来自于模型本身的持续训练，但理解谄媚行为有助于你在自己的互动中识别它。

<details>
<summary>Original English</summary>

Here's what makes sycophancy tricky. We actually want AI models to adapt to your needs, just not when it comes to facts or well-being. If you ask an AI to write something in a casual tone, it should do that, not insist on formal language. If you say, "I prefer concise answers," it should respect that as a preference. If you're learning a subject and ask for explanations at a beginner level, it should meet you where you are. The challenge is finding the right balance. Nobody wants to use an AI that is constantly disagreeable or combative, debating with you over every task. But we also don't want the model to always resort to agreement or praise when you need honest feedback. Even humans struggle with this. When should you agree to keep the peace versus speak up about something important? Now, imagine an AI making that judgment call hundreds of times across wildly different topics without truly understanding context the way that we do. That's why we continue to study how sycophancy shows up in conversations and develop better ways to test for it. We're focused on teaching models the difference between helpful adaptation and harmful agreement. Each Claude model we release gets better at drawing these lines. Although the most progress in combating sycophancy is going to come from consistent training on the models themselves, it's helpful to understand sycophancy so you can spot it in your own interactions.

</details>

### 识别与应对策略

既然你已经了解了什么是谄媚行为以及它为何发生，第二步就是反思**AI**何时以及为何可能同意你的观点，并质疑它是否应该这样做。谄媚行为最有可能出现在以下情况：**主观事实被当作事实陈述**、**引用了专家来源**、**问题带有特定的观点**、**明确请求验证**、**涉及情感因素**，或者**对话变得非常冗长**。如果你怀疑自己正在收到谄媚式的回应，可以采取一些措施引导**AI**回到事实性的答案。这些方法并非万无一失，但它们将有助于拓宽**AI**的视野。你可以使用**中立求实语言**（Neutral Fact-Seeking Language: 不带偏见、旨在获取客观事实的表达方式）、与可信赖的来源交叉核对信息、提示**AI**追求准确性或提供反驳论点、重新措辞问题、开始新的对话。或者，最后，暂时停止使用**AI**，转而询问你信任的人。然而，这对于整个**AI开发**领域来说，是一个持续的挑战。随着这些系统变得越来越复杂，并更深入地融入我们的生活，构建真正有益而非仅仅迎合的模型变得越来越重要。你可以在**Anthropic Academy**了解更多关于**AI流畅性**的信息，我和我的团队将继续在**Anthropic**的博客上分享我们关于这个主题的研究。

<details>
<summary>Original English</summary>

Now that you know what sycophancy is and you know why it happens, step two is reflecting on when and why an AI might be agreeing with you and questioning whether it should. Sycophancy is most likely to show up when a subjective truth is stated as fact. An expert source is referenced. Questions are framed with a specific point of view. Validation is specifically requested. Emotional stakes are invoked or a conversation gets very long. If you suspect you're getting sycophantic responses, there's a few things you can do to steer the AI back towards factual answers. These aren't foolproof, but they'll help broaden the AI's horizons. You can use neutral fact-seeking language. Cross-reference information with trustworthy sources. Prompt for accuracy or counterarguments. Rephrase questions. Start a new conversation. Or finally, take a step back from using AI and ask someone that you trust. But this is an ongoing challenge for the entire field of AI development. As these systems become more sophisticated and more integrated into our lives, building models that are genuinely helpful, not just agreeable, becomes increasingly important. You can learn more about AI fluency in Anthropic Academy and my team and I will continue to share our research on this topic on Anthropics blog.

</details>