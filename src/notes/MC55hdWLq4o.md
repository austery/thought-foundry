---
area: "tech-engineering"
category: technology
date: '2025-08-09'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude 4
- LLMs
project: []
series: ''
source: https://www.youtube.com/watch?v=MC55hdWLq4o
speaker: AI Engineer
status: evergreen
summary: 本文探讨了人工智能评估（evals）的现状与未来趋势。Braintrust团队发现，尽管AI产品日益自动化，但评估过程仍高度依赖人工。为解决这一痛点，Braintrust开发了名为Loop的AI代理，它能自动优化提示词、数据集和评分器。得益于Claude
  4等前沿模型的突破性进展，Loop的性能显著提升，有望彻底改变AI评估的效率和质量，使开发者能更高效地构建顶尖AI产品。
tags:
- ai-evaluation
- automation
- development
- optimization
- performance
title: AI评估的未来：Braintrust如何通过Loop实现自动化和优化
---
### AI评估的现状与未来展望

今天，我们将探讨迄今为止的**评估**（Evals: 人工智能模型或产品的性能评估）现状，以及我们认为评估未来将走向何方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, we're going to talk a little bit about evaluations (evals) to date and where we think evals are going to be going in the future.</p>
</details>

另外，对于那些之前见过我兄弟的人，我将尽力展现出他那样的活力和魅力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, for those of you who saw my brother earlier, I'm going to do my best to live up to his energy and charisma.</p>
</details>

对于我们Braintrust团队来说，这近两年的旅程令人惊叹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's been an amazing, almost two-year journey for us at Braintrust.</p>
</details>

我们有幸与一些最杰出的公司合作，共同打造我认为是世界上最好的AI产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have had the opportunity to work with some of the most amazing companies building, I think, the best AI products in the world.</p>
</details>

我对人们在产品上实际运行的评估数量感到震惊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm blown away by how many evals people actually run on the product.</p>
</details>

平均而言，注册Braintrust的组织每天运行近13次评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The average organization that signs up for Braintrust runs almost 13 evals a day.</p>
</details>

我们的一些客户每天运行超过3,000次评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some of our customers run more than 3,000 evals a day.</p>
</details>

而一些运行评估的最先进公司，每天在产品上花费超过两小时来处理他们的评估工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And some of the most advanced companies that are running evals are spending more than two hours in the product every day working through their evals.</p>
</details>

我认为最让我印象深刻的一点是，尽管我们的客户正在构建世界上一些最酷、最自动化的基于AI的产品和**代理**（Agents: 能够感知环境、做出决策并执行行动的AI系统），但对于评估而言，你所能做的最好的事情就是查看仪表盘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think one of the things that stands out to me is that while we have customers building some of the coolest, most automated AI-based products and agents in the world, the best thing you can do for evaluation is to look at a dashboard.</p>
</details>

我认为我们在Braintrust中有一个相当不错的仪表盘，但它仍然只是一个你查看后离开，然后思考‘我应该对我的代码或**提示词**（Prompts: 指导AI模型生成响应的输入文本）做出什么改变，才能让这次评估表现得更好？’的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we have a pretty cool dashboard in Braintrust, but still, it's just a dashboard that you look at and then you walk away and think, 'Okay, what changes can I make to my code or to my prompts so that this eval does better?'</p>
</details>

而我实际上认为，这一切都将改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I actually think that is all going to change.</p>
</details>

### 隆重推出Loop：自动化AI评估代理

因此，今天我很高兴能谈论一个名为**Loop**的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today, I'm excited to talk about something called Loop.</p>
</details>

**Loop**是我们已经开发了一段时间并内置于Braintrust中的一个代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Loop is an agent that we've been working on for some time now that's built into Braintrust.</p>
</details>

它实际上只有通过评估才能实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's actually only possible because of evals.</p>
</details>

在过去的两年里，我们每个季度都会对**前沿模型**（Frontier Models: 指当前最先进、性能最强大的AI模型）进行评估，以了解它们在实际改进提示词、改进数据集和改进**评分器**（Scorers: 用于衡量AI模型输出质量的工具或算法）方面的表现如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every quarter for the last two years, we've run evals on the frontier models to see how good they are at actually improving prompts, improving data sets, and improving scorers.</p>
</details>

直到最近，它们的表现其实并不理想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And until very, very recently, they actually weren't very good.</p>
</details>

事实上，我们认为**Claude 4**尤其是一个真正的突破性时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, we think that Claude 4 in particular was a real breakthrough moment.</p>
</details>

它的性能比之前的领先模型提高了近六倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it performs almost six times better than the previous leading model before it.</p>
</details>

因此，Loop在Braintrust内部运行，它能够自动优化你的提示词，甚至包括非常复杂的代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Loop runs inside of Braintrust, and it can automatically optimize your prompts all the way to very complex agents.</p>
</details>

但同样重要的是，它还能帮助你构建更好的数据集和评分器，因为正是这三者的结合才能带来真正出色的评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But just as importantly, it also helps you build better data sets and better scorers, because it's really the combination of these three things that make for really great evals.</p>
</details>

### Loop的用户界面与灵活性

这是用户界面（UI）的一个小预览。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a little preview of the UI.</p>
</details>

如果你是Braintrust的现有用户或注册了该产品，今天就可以开始使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can actually start using it today if you are an existing Braintrust user or you sign up for the product.</p>
</details>

有一个名为Loop的功能开关，你只需打开它就可以立即开始使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a feature flag that you can just flip on called Loop and start using it right away.</p>
</details>

默认情况下，它使用**Claude 4**，但你实际上可以选择任何你有权限访问的模型并开始使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By default, it uses Claude 4, but you can actually pick any model that you have access to and start using it.</p>
</details>

无论是**OpenAI模型**、一个**Gemini模型**，或者你们中的一些人正在构建自己的**大型语言模型**（LLMs: Large Language Models），你都可以使用这些模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether it's an OpenAI model, a Gemini model, or maybe some of you are building your own LLMs, you can use those as well.</p>
</details>

正如你所看到的，它直接在Braintrust内部运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as you can see, it runs directly inside of Braintrust.</p>
</details>

我们从与许多用户的合作中了解到，在处理数据和提示词时，实际查看它们是多么重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things that we learned from working with a lot of users is how important it is to actually look at data and look at prompts while you're working with them.</p>
</details>

在引入Loop时，我们不希望这一功能消失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we didn't want that to go away when we introduced Loop.</p>
</details>

因此，每当它建议修改你的数据、提出新的评分想法，或者建议修改你的某个提示词时，你都可以在用户界面中直接并排查看这些更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So every time it suggests an edit to your data, or it suggests a new idea for scoring, or it suggests an edit to one of your prompts, you can actually see that side by side directly in the UI.</p>
</details>

当然，对于那些更喜欢冒险的用户，还有一个开关可以打开，它会说‘放手去做吧’，然后它就会自动进行优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, for the more adventurous among you, there's also a toggle that you can turn on that says, 'Just go for it,' and it will go and optimize away.</p>
</details>

这实际上效果非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which actually works really well.</p>
</details>

### 总结与展望

总结一下，迄今为止，评估一直是构建世界上一些最佳AI产品的关键部分，但实际执行评估的任务却极其依赖人工。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, just to recap, to date, evals have been a critical part of building some of the best AI products in the world, but the task of actually doing evaluation has been incredibly manual.</p>
</details>

我很高兴看到，在未来一年里，评估本身将通过**前沿模型**的最新和最伟大进展而彻底变革，我们也非常期待将这些进展整合到Braintrust中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm excited about how, over the next year, evals themselves are going to be completely revolutionized by the latest and greatest coming out from the frontier models themselves, and we're very excited to incorporate that into Braintrust.</p>
</details>

如果你还没有使用我们的产品，请务必尝试一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please, if you're not already using the product, try it out.</p>
</details>

试用Loop，并向我们提供反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Try out Loop, give us your feedback.</p>
</details>

我们还有很多工作要做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a lot of work to do.</p>
</details>

我们很乐意与你交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we'd love to talk to you.</p>
</details>

我们也在招聘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're also hiring.</p>
</details>

因此，如果你对解决这类问题感兴趣，无论是用户界面（UI）部分、AI部分还是基础设施方面，我们都非常乐意与你交谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you're interested in working on this kind of problem, whether it's the UI part of it, the AI part of it, or the infrastructure side of it, we'd love to talk to you.</p>
</details>

你可以扫描这个二维码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can scan this QR code.</p>
</details>

它应该就在那边。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It should be over there.</p>
</details>

是的，你可以扫描二维码与我们取得联系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, you can scan the QR code and get in touch with us.</p>
</details>

我们很乐意与你交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'd love to chat.</p>
</details>

谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you.</p>
</details>