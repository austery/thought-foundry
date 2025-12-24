---
area: tech-insights
category: technology
companies_orgs:
- Yelp
- GoFundMe
- Persona
- Anthropic
- LinkedIn
- Etsy
date: '2025-10-20'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
- almostmagic.substack
- Community Wisdom Newsletter
people:
- Clarvo
products_models:
- Yelp Assistant
- Claude
- ChatGPT
- Gemini Flash
- Magic Patterns
- Figma
- Figma Make
- Giving Funds
- Parent Pal
- Settlers of Catan Timer
- Lovable
project:
- ai-impact-analysis
- entrepreneurship
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=wDA6DslBeqk
speaker: How I AI
status: evergreen
summary: 本文深入探讨了Yelp的AI产品经理Priya Matthew Badger如何运用独特的“黄金对话”方法进行AI产品开发。她强调通过模拟用户交互来定义产品需求，并利用Claude和Magic
  Patterns等AI工具加速对话流程和用户界面原型迭代。Priya还分享了个人AI应用案例，并提供了AI调试策略，为AI产品经理提供了实用的新思路。
tags:
- canada
- design
- golden-conversation
- llm
- management
title: Yelp AI产品经理：从“黄金对话”到高效原型设计
---

### AI产品管理：从用户界面到幕后逻辑

**Clarvo:** 在设计和构建你工作中正在开发的AI产品时，你通常从何处着手？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where do you start when you're thinking about designing and framing out a AI product for what you're working on at work?</p>
</details>

**Priya Matthew Badger:** 管理由AI驱动的产品，其不同之处在于，除了用户与任何产品或产品功能交互的界面仍然非常重要之外，幕后还有很多事情在发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's different about managing products that are powered by AI is there's the interface of how a user interacts with any product or product feature and that still really matters. And there's also a lot going on behind the scenes.</p>
</details>

此外，如何推动高质量的产品也是一个重要方面，因为这些技术每次使用时都会产生不同的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a lot also about how do you drive good quality products because these technologies produce different results each time you use them.</p>
</details>

因此，我们从“**黄金对话**”（Golden Conversations: 理想的用户交互示例）开始，思考你想要实现什么样的体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we start with golden conversations. What's the experience that you're trying to drive?</p>
</details>

**Clarvo:** 这只是你思考如何编写，并与AI进行一些角色扮演的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so this is just a way for me to think about how to write that role playing a little bit with AI.</p>
</details>

你所说的实际上是编写一个示例对话，它可以代表真实用户可能做的事情，然后你从那个示例对话逆向工作，这是我以前从未见过有人做过的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What you're saying is actually write an example conversation that can represent what a real user might do. and you're working backwards from that example conversation which I have actually not seen anybody do before.</p>
</details>

[音乐]

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[Music]</p>
</details>

**Clarvo:** 欢迎回到“**How I AI**”（How I AI: 一个专注于AI产品和工具的播客）。我是Clarvo，一位产品负责人和AI狂热者，我的使命是帮助大家利用这些新工具更好地进行构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to how I AI. I'm Clarvo product leader and AI obsessive here on a mission to help you build better with these new tools.</p>
</details>

今天，我们邀请到一位AI产品经理向我们展示如何进行AI产品管理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today we have an AI PM showing us how to AI PM.</p>
</details>

Priya Matthew Badger是Yelp的产品经理，她将向我们展示一种全新的方式来思考产品需求、原型设计以及如何使用对话式代理构建有效的对话式代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Priya Matthew Badger is a PM at Yelp and is showing us a completely new way to think about product requirements, prototyping, and how to build effective conversational agents using conversational agents.</p>
</details>

让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's get to it.</p>
</details>

本期节目由**GoFundMe Giving Funds**（GoFundMe Giving Funds: GoFundMe推出的零费用捐赠者建议基金）赞助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This episode is brought to you by GoFundMe giving funds, the zero fee daff.</p>
</details>

我想向大家介绍GoFundMe推出的一款新产品，名为“**Giving Funds**”（Giving Funds: GoFundMe推出的捐赠基金），这是一种更智能、更简单的捐赠方式，尤其是在报税季，现在基本上已经到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to tell you about a new product GoFundMe has launched called Giving Funds. a smarter, easier way to give, especially during tax season, which is basically here.</p>
</details>

GoFundMe Giving Funds是世界第一捐赠平台（受到2亿人信任）的**DAFF**（Donor Advised Fund: 捐赠者建议基金），基本上就是你自己的迷你基金会，无需律师或管理费用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">GoFundMe giving funds is the DAFF or donor advice fund from the world's number one giving platform trusted by 200 million people. It's basically your own mini foundation without the lawyers or admin costs.</p>
</details>

你可以捐款或增值资产，立即获得税收减免，可能减少资本利得，然后稍后决定从140万个非营利组织中选择捐赠对象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You contribute money or appreciated assets, get the tax deduction right away, potentially reduce capital gains, and then decide later where to donate from 1.4 million nonprofits.</p>
</details>

没有管理费或资产费，当资金存放在那里时，你可以进行投资并免税增长，这样你以后就有更多的钱可以捐赠。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are zero admin or asset fees, and while the money sits there, you can invest and grow it tax-free, so you have more to give later.</p>
</details>

所有这些都通过一个简单的中心完成，并获得一份清晰的税务收据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All from one simple hub with one clean tax receipt.</p>
</details>

现在就锁定你的减免，稍后决定捐赠地点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lock in your deduction now and decide where to give later.</p>
</details>

非常适合报税季。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Perfect for tax season.</p>
</details>

加入GoFundMe的2亿人社区，开始节省你的税单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Join the GoFundMe community of 200 million and start saving money on your tax bill.</p>
</details>

同时帮助你最关心的事业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All while helping the causes you care about the most.</p>
</details>

立即在gofundme.com/howiai开始你的捐赠基金，只需几分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Start your giving fund today in just minutes at gofundme.com/howi ai.</p>
</details>

如果你将现有的DAFF转入，我们甚至会承担DAFF的支付费用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll even cover the daff pay fees if you transfer your existing daff over.</p>
</details>

那就是gofundme.com/howiai，开始你的捐赠基金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's gofundme.com/howi ai to start your giving fund.</p>
</details>

Priya，欢迎来到“How I AI”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Priya, welcome to how I ai.</p>
</details>

我非常高兴你能来这里，因为每当有人问我（他们问得很多），“我如何进行AI产品管理？”我必须说，“等等，你是在说用AI进行产品管理吗？因为我对此有些想法。还是你在说产品管理AI产品？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I am so excited to have you here because whenever anybody asks me and they ask me a lot, how do I do AI product management? I have to say, wait, are you talking about product managing with AI? Because I have some ideas about that. Or are you talking about product managing AI products?</p>
</details>

而我们即将进行的对话非常棒，因为你实际上两者都做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what's really great about the conversation we're about to have is you actually do both.</p>
</details>

那么在你看来，使用AI进行产品管理有什么真正不同之处？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what in your mind is really different about product managing products using AI?</p>
</details>

**Priya Matthew Badger:** 是的，我非常高兴能来到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I'm really excited to be here.</p>
</details>

我是这个节目的忠实粉丝，并且从播客中学到了很多关于AI的知识，包括管理AI产品以及如何在日常工作中使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Big fan of the show and have learned a lot about um AI, both managing AI products and how to use it in my day-to-day from the podcast.</p>
</details>

所以能来到这里很令人兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's exciting to be here.</p>
</details>

对我来说，我认为管理由AI驱动的产品，其不同之处在于，用户与任何产品或产品功能交互的界面仍然非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For me, I think you know what's different about managing products that are powered by AI is there's the you know interface of how a user interacts with a with any product or product feature. Um and that still really matters with AI products.</p>
</details>

我将展示我们用来探索这方面的一些工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I'll show some of the tools that we use um to explore that.</p>
</details>

此外，幕后还有很多事情在发生，这些事情决定了消费者的产品体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then there's also a lot going on behind the scenes that determines the product experience for the consumer.</p>
</details>

因此，系统提示以及它们如何引导对话流程非常有趣，我认为当你开发AI驱动的产品时，这是一个新的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um the system prompts and how that guides the conversation flow is really interesting and I think kind of a new challenge when you're working on AI powered products and there's a lot also about how do you drive good quality products because these um technologies produce different results each time you use them.</p>
</details>

此外，如何推动高质量的产品也是一个重要方面，因为这些技术每次使用时都会产生不同的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's a lot of um interesting challenges there too.</p>
</details>

是的，所以我也非常期待从你的流程中学习，因为我也在构建一个AI驱动的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, I'm really excited to myself learn from your flow because I'm building an AI powered product as well.</p>
</details>

那么，让我们深入探讨一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, let's dive into it.</p>
</details>

当你思考设计和构建你工作中正在开发的AI产品时，你从何处着手？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where do you start when you're thinking about designing and framing out a AI product for what you're working on at work?</p>
</details>

### Yelp Assistant案例：从“黄金对话”开始

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

所以，我认为一个很好的例子就是讨论如何将新功能集成到我们的**Yelp Assistant**（Yelp Assistant: Yelp的AI助手产品）中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I thought a good example would be to talk about building a new feature capability into our Yelp Assistant.</p>
</details>

这就是我正在开发的产品。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So that's the product I work on.</p>
</details>

它的工作方式是，消费者可以根据服务需求前来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way it works is a consumer can come in for a service need.</p>
</details>

比如说，你想雇佣一个杂工、一个水管工、一个电工，或者一个修车的人，你可以用自己的话描述问题，然后AI会理解你在说什么，收集一些项目细节，并帮助你匹配专业人士并获得报价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's say you want to hire a handyman, a plumber, an electrician, somebody to fix your car, and you can describe the problem in your own words, and then the AI will understand what you're saying, collect some project details, and um help you get matched to pros and get quotes.</p>
</details>

这就是产品的工作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's how the product works.</p>
</details>

我们最近推出了一项功能，允许消费者上传照片来帮助描述他们的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we recently launched a feature that allowed consumers to upload a photo to help describe their need.</p>
</details>

这很有道理，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that just makes sense, right?</p>
</details>

有时，专业人士能够看到照片和描述会有所帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It it helps for pros sometimes to be able to see a photo along with the description.</p>
</details>

但我们想做的一件事是，因为我们正在Yelp Assistant中实现这一点，所以要思考如何利用这些AI能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one of the things we wanted to do was because we're doing this in our AI assistant, think about, you know, how can we leverage those AI capabilities?</p>
</details>

AI能否理解照片中的内容，并据此定制对话，提供关于消费者下一步应该做什么的建议？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can the AI understand what's in the photo and customize the conversation from there? Um providing, you know, some recommendations around what the consumer should do next.</p>
</details>

**Clarvo:** 作为Yelp用户，我可以想象你的专业人士提供的服务种类繁多，而且，你知道，我没有经营消费者业务，但我可以想象用户在这些对话或图片上传界面中输入的内容可能非常多样化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as a a Yelp user, I can imagine that the variety of services that your pros are providing and um you know with I don't run consumer businesses, but I can imagine the the variety of things a user puts into these conversational or image upload interfaces could be very diverse.</p>
</details>

所以我很好奇你是如何从产品开发角度处理这个问题的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm curious how you approach that from a product development perspective.</p>
</details>

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

是的，Yelp确实涵盖了许多不同类别的服务需求，其中一个挑战是，是的，确保体验适用于消费者可能遇到的所有这些不同用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we certainly cover a lot of different categories of service needs at Yelp and one of the challenges is yeah, making sure that the experiences work across all those different use cases that a consumer might have.</p>
</details>

你想跳进来吗？我来给你展示我的工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you want to jump in and uh I'll I'll show you my workflow.</p>
</details>

**Clarvo:** 是的，我们来做吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, let's do that.</p>
</details>

### 使用Claude进行对话原型设计

**Priya Matthew Badger:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

所以，我将打开**Claude**（Claude: Anthropic公司开发的大型语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to just open up Claude.</p>
</details>

我们从一个全新的窗口开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here we're starting in a totally new window.</p>
</details>

你知道，正如我们所讨论的，我认为这些AI产品有两个部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, as we talked about, like I think there's, you know, two pieces to these AI products.</p>
</details>

有幕后部分，然后是消费者看到的用户界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's the behind the scenes part and then there's the interface. uh user interface that consumers see.</p>
</details>

我喜欢从思考当我们添加这个新功能时，对话流程会是什么样子开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I like to start with thinking about what is that conversation flow going to look like when we add this new functionality.</p>
</details>

所以，我将在这里向你展示如何使用Claude来做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I'm going to show you here how you can do that with claude.</p>
</details>

你也可以使用**ChatGPT**（ChatGPT: OpenAI开发的大型语言模型）或任何其他基础模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and you can also use chat GPT or any other um of these foundational models.</p>
</details>

所以在这里我会说，编写一个完整的消费者与AI助手之间的示例对话，我们希望消费者能够上传他们的照片，然后添加一些场景需求，比如我们希望助手分析照片，可能提供一些建议回复，并继续来回对话，直到他们有足够的信息提交报价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here I'll say write a complete um sample conversation between the consumer and the AI assistant um where we want consumers to be able to upload their photo and then just add some scenario requirements like we want the assistant to analyze the photo maybe provide some suggested replies and uh continue that back and forth until they have enough info to submit quotes.</p>
</details>

关于提示，我想指出的一点是，我确实喜欢对输出的格式给出一些指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing I'll call out on the prompting is I do like to give a little direction on what the output looks like.</p>
</details>

所以你可以在这里看到我说：“使用‘助手:’和‘用户:’作为标签，将其写成一个连续的对话。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see here I'm saying like use assistant colon user colon for labels, write it as one continuous conversation.</p>
</details>

我认为这确实有助于确保你获得所需的输出，并且与AI来回交互的次数会少一些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that really helps make sure that you know you get the output that you're looking for and there's a little less back and forth with the AI.</p>
</details>

**Clarvo:** 对于正在收听的听众，我想指出的一点是，我认为这种方法非常有趣，你正在使用示例对话作为构建对话式AI的首次**线框图**（Wireframe: 产品设计的初步草图）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for the folks listening, one of the things I want to call out that I think is really interesting about this approach is you're sort of using a example conversation as your first pass wireframe for building a conversational AI.</p>
</details>

所以，你不是说“给我一个聊天窗口，给我看这些按钮中显示的消息”，而是说“实际上编写一个示例对话，它可以代表真实用户可能做的事情”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So instead of saying like show me a chat window and show me messages that show up in these buttons, what you're saying is actually write an example conversation um that can represent what a real user might do and um you kind of give some some constraints about what that conversation could look like and you give it some of the capabilities that might be available during that conversation and you're working backwards from that example conversation which I have actually not seen anybody body do before.</p>
</details>

你还给出了一些关于对话可能是什么样子的限制，以及对话中可能可用的某些功能，然后你从那个示例对话逆向工作，这是我以前从未见过有人做过的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think it's a really unique approach that product managers out there working on conversational um AI products including myself can really take a lot of inspiration from.</p>
</details>

所以我认为这是一种非常独特的方法，从事对话式AI产品的产品经理，包括我自己，都可以从中获得很多启发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How did you come to this idea? I mean was this your like are you just a genius and you're like this is the first thing that we need to do or how did you come to this idea?</p>
</details>

你是如何想到这个主意的？我的意思是，这是你的想法吗？你只是一个天才，然后你说这是我们首先需要做的事情，还是你是如何想到这个主意的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, I mean I think this is part of um our standard alumowered playbook at Yelp where we start with golden conversations.</p>
</details>

**Priya Matthew Badger:** 不，我的意思是，我认为这是Yelp标准AI驱动的策略的一部分，我们从“黄金对话”开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's the experience that you're trying to drive? Um, and so, you know, I think, uh, this is just a way for me to like think about how to write that, um, roleplaying a little bit with AI.</p>
</details>

你想要实现什么样的体验？所以，你知道，我认为这只是我思考如何编写，并与AI进行一些角色扮演的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I just want to call this out.</p>
</details>

**Clarvo:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to take a little side uh, detour to just some product management ideas, which is I often tell product managers to prototype their product as close to the end product that a consumer is going to consume, including the content.</p>
</details>

我只是想指出这一点。我们将稍微绕道，谈谈一些产品管理理念，我经常告诉产品经理，他们的产品原型应该尽可能接近消费者最终将使用的产品，包括内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when I worked in dev tools, um I would tell a lot of RPMs, don't write a PRD, write a quick start and documentation guide to the product.</p>
</details>

所以当我在开发工具领域工作时，我经常告诉许多**RPM**（Rotational Product Manager: 轮岗产品经理），不要写**PRD**（Product Requirements Document: 产品需求文档），而是编写产品的快速入门和文档指南。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Write the code snippets. Um and then work backwards into what the product should look like.</p>
</details>

编写代码片段。然后逆向推导出产品应该是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I love this idea of just from a general product perspective, work with the artifact that's closest to what the consumer is actually going to experience and then you can back into all the requirements once you're kind of inspired by what that end state is.</p>
</details>

所以我喜欢这个想法，从一个通用的产品角度来看，使用最接近消费者实际体验的产物进行工作，然后一旦你受到最终状态的启发，你就可以反过来推导出所有的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what does something like this get you?</p>
</details>

那么，这样做能给你带来什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's go through it.</p>
</details>

所以，我们来过一遍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm actually going to upload a real photo of a home service need.</p>
</details>

我实际上将上传一张真实的家庭服务需求照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here's like a picture with a cracked porch. Um,</p>
</details>

所以，这里有一张带有裂缝门廊的照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">not your cracked porch.</p>
</details>

**Clarvo:** 不是你家的裂缝门廊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not. No.</p>
</details>

**Priya Matthew Badger:** 不是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, yeah.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we'll look at what um what Claude comes back with.</p>
</details>

然后我们看看Claude会给出什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I will say one of the pictures I'm going to test is from my bathroom renovation.</p>
</details>

嗯，我要说，我将测试的一张照片来自我的浴室翻新。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you will see my bathroom.</p>
</details>

所以，你会看到我的浴室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one thing I'll call out is Claude now shows you your thought process.</p>
</details>

我想指出的一点是，Claude现在会显示它的思考过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you'll see this in a lot of AI tools.</p>
</details>

你会在很多AI工具中看到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I really like to read the thought process and it's also something to do while you're waiting.</p>
</details>

我真的很喜欢阅读思考过程，这也是你在等待时可以做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but I think it really helps because you can see how it's understanding you.</p>
</details>

但是我认为这真的很有帮助，因为你可以看到它是如何理解你的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If it doesn't come back with what you want, it also is really good for troubleshooting.</p>
</details>

如果它没有给出你想要的结果，它也对故障排除非常有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, definitely something I recommend doing.</p>
</details>

所以，这绝对是我推荐做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Clarvo:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that I'll do while this is loading is call out, I too think that reading the reasoning or the thought process of the AI is interesting for two reasons.</p>
</details>

在加载期间，我想指出一点，我也认为阅读AI的推理或思考过程很有趣，原因有二。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One, it can often help you improve your prompts because you understand what the AI is understanding or not understanding about your prompts.</p>
</details>

第一，它通常可以帮助你改进你的提示，因为你了解AI对你的提示理解了什么或没有理解什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As somebody who likes misspelled, no sentence, low syntax prompts myself, it's good good to see where I'm misleading the AI.</p>
</details>

作为一个喜欢拼写错误、没有句子、语法简单的提示的人，很高兴看到我在哪里误导了AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing is the thought process is often where the AI reveals its personality.</p>
</details>

另一方面，思考过程通常是AI展现其个性的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it is so funny to read like Gemini 25's thought process versus 03 versus Claude is very nice.</p>
</details>

我认为阅读像**Gemini Flash**（Gemini Flash: 谷歌开发的大型语言模型，这里提到的是其特定版本）的思考过程与03或Claude的思考过程相比非常有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude practices self-love.</p>
</details>

Claude会自我关爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um Gemini 25 does not.</p>
</details>

Gemini Flash则不会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I just think it's uh it's also interesting from just like a a model understanding perspective.</p>
</details>

所以我只是觉得从模型理解的角度来看，这也很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we got a we got a chat here.</p>
</details>

所以我们这里有一个聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Priya Matthew Badger:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then we can read through the chat and it's, you know, it's saying like, I can see you've uploaded this photo of a front front porch stabs with a significant crack running through the concrete.</p>
</details>

所以我们可以阅读聊天记录，它说：“我看到你上传了这张前门廊台阶的照片，混凝土上有一条明显的裂缝。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So pretty good recognition of the photo.</p>
</details>

所以对照片的识别相当不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then it says, let's ask, let me ask a few questions, you know, how urgent is this?</p>
</details>

然后它说：“让我问几个问题，你知道，这有多紧急？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, are you looking to repair this?</p>
</details>

“你是想修理它吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Would you prefer to replace the entire steps?</p>
</details>

“你更倾向于更换整个台阶吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I could look through this, you know, and maybe workshop it a little bit, giving it some feedback.</p>
</details>

所以我可以查看这个，你知道，并可能进行一些修改，给它一些反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I also find it's helpful to just create some more examples.</p>
</details>

我还发现创建更多示例很有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um sometimes like when you see a lot of examples, that's when the trends come out and that's when you see, you know, what you might want to improve or change.</p>
</details>

有时，当你看到很多示例时，趋势就会显现出来，那时你就会知道你可能想要改进或改变什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I have a bunch of images now.</p>
</details>

所以我现在有很多图片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now that I've tested it with one and I've seen that, you know, it works pretty well with that one.</p>
</details>

所以现在我已经用一张图片测试过，并且看到它效果很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm now going to test it with a lot more images.</p>
</details>

我现在将用更多的图片进行测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is the prompt I'm going to use.</p>
</details>

这就是我将使用的提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to say now create more examples based on these images.</p>
</details>

所以我会说：“现在根据这些图片创建更多示例。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to your point earlier, you know, Yelp covers lots of different um types of service needs.</p>
</details>

正如你之前所说，Yelp涵盖了许多不同类型的服务需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is where you can kind of test and see how's it going to do across a lot of different problems.</p>
</details>

所以，你可以在这里测试并查看它在许多不同问题上的表现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, here I have, you know, like a appliance repair issue with an error code.</p>
</details>

所以，这里我有一个带有错误代码的电器维修问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have a hornet swap, a wasp nest.</p>
</details>

我有一个大黄蜂巢，一个黄蜂巢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so you can see, you know, a larger variety of things.</p>
</details>

所以你可以看到，种类更多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just because I know you really wanted to see my bathroom, I will also upload and add a picture of my bathroom renovation in progress.</p>
</details>

只是因为我知道你真的很想看我的浴室，我也会上传并添加一张我的浴室正在翻新中的照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then I'm going to say, um, you know, label each conversation with a title and a number at at the top.</p>
</details>

然后我会说，嗯，你知道，在每个对话的顶部用标题和数字进行标记。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, just another example of how just that like little nudge on the output can really help you get something usable.</p>
</details>

所以，这只是另一个例子，说明对输出进行一点点微调，就能真正帮助你获得可用的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great.</p>
</details>

太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're going to see here how this AI thinks about potentially framing responses to consumers on a variety of as a homeowner total nightmare scenarios.</p>
</details>

所以我们在这里将看到这个AI如何思考，在各种对房主来说完全是噩梦的场景中，如何向消费者构建回复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everything from a wasp to a bathroom renovation, which I am also about to start um is just a nightmare to me whether or not I want to do it.</p>
</details>

从黄蜂到浴室翻新，我即将开始，对我来说，无论我是否想做，都是一场噩梦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so you're getting these example conversations and what are you looking for?</p>
</details>

嗯，所以你得到了这些示例对话，你在寻找什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are you are you looking for patterns?</p>
</details>

你在寻找模式吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are you looking for product inspiration?</p>
</details>

你在寻找产品灵感吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what's kind of the thing that you're seeking in these examples?</p>
</details>

你在这些示例中寻求的是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's a great question and I think this like goes in with, you know, there's the the a lot of people talk about like evals are the new PRD and this is like the very early step of of getting getting to the eval process.</p>
</details>

**Priya Matthew Badger:** 是的，这是一个很好的问题，我认为这与，你知道，很多人谈论的“评估是新的PRD”有关，而这正是进入评估过程的非常早期的一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you know, I think you you get a sense of like what are the criteria that are important for this capability.</p>
</details>

嗯，你知道，我认为你对这项能力重要的标准有了一定的了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, the first thing is like did it actually recognize the image?</p>
</details>

所以，你知道，第一件事是它是否真的识别了图像？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, right.</p>
</details>

嗯，对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I can compare and see like in this first one like the oven door lock malfunction where I've uploaded this picture and it is actually looking and seeing that like it has the door locked and it's trying to understand that issue.</p>
</details>

所以我可以比较并查看，比如在第一个例子中，烤箱门锁故障，我上传了这张图片，它确实在查看并发现门被锁住了，它正在尝试理解这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know maybe we would give it feedback to go one step further like pull that E3 error code you know look in your LM see if you uh understanding to see if you can guess what the issue is and and diagnose it better.</p>
</details>

你知道，也许我们会给它反馈，让它更进一步，比如提取那个E3错误代码，你知道，查看你的**LLM**（Large Language Model: 大型语言模型），看看你是否能理解并猜测问题是什么，并更好地诊断它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I think that's like the first step of is it um doing that recognition right and then after that you know we're we're looking through the conversation to first I just look at it qualitatively to see like does this feel like it sounds uh like it flows well is it concise is it easy to understand um and then we'd probably develop like more of a rubric around what are the criteria that we're looking for</p>
</details>

嗯，但我认为这是第一步，它是否正确地进行了识别，然后，你知道，我们正在查看对话，首先我只是定性地看一下，看看它是否听起来流畅，是否简洁，是否易于理解，然后我们可能会围绕我们正在寻找的标准制定更详细的评估标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">okay so you have these different conversations what do you do with them next</p>
</details>

**Clarvo:** 好的，你有了这些不同的对话，接下来你会怎么处理它们？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, and I'll just show one example of refining these conversations and why AI is really great for this.</p>
</details>

**Priya Matthew Badger:** 是的，我将展示一个改进这些对话的例子，以及为什么AI在这方面非常出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, let's say I say I I think it's good, but I don't think it's being as opinionated as it could be about like offering the user a recommendation and maybe sometimes it's talking about budget, which we think the consumer may not know.</p>
</details>

所以，你知道，假设我说我认为它很好，但我认为它在向用户提供建议方面不够有主见，而且有时它可能会谈论预算，我们认为消费者可能不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I can ask it to rewrite these conversations based on this feedback and it will go through and update all those conversations for me, which I think is really nice.</p>
</details>

所以，我可以要求它根据这个反馈重写这些对话，它会为我更新所有这些对话，我认为这非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um you know then you can go through and see you know do you feel like it's taking that feedback well?</p>
</details>

然后，你可以查看，看看它是否很好地采纳了反馈？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it actually rewriting it um based on that guidance?</p>
</details>

它是否真的根据该指导进行了重写？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But definitely you know you can see here it's saying like this definitely requires professional pest control.</p>
</details>

但你肯定可以看到，它在这里说：“这绝对需要专业的害虫防治。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't attempt a DIY removal of this nest.</p>
</details>

“不要尝试自行清除这个巢穴。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um which I think is probably good advice.</p>
</details>

嗯，我认为这可能是一个好建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then to your other point about like how do we get um an artifact that is closest to the ex what the consumer will experience that is the next step that I'm going to show you and something I think that is pretty unique to Claude.</p>
</details>

嗯，然后回到你关于如何获得最接近消费者体验的产物的另一点，那是我将要向你展示的下一步，我认为这是Claude独有的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so Claude has a special functionality built in where it actually can create an artifact that uses the LM that powers Claude to produce those responses.</p>
</details>

嗯，所以Claude内置了一个特殊功能，它可以创建一个使用驱动Claude的LLM来生成这些回复的产物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's very unique to Claude.</p>
</details>

这对于Claude来说非常独特。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you did this in another prototyping tool, you would typically have to set up a API key and um integration which just takes a little bit more work and with pod you can do it out of the box.</p>
</details>

如果你在另一个原型工具中这样做，你通常需要设置一个**API Key**（Application Programming Interface Key: 应用程序编程接口密钥）和集成，这需要更多的工作，而使用Claude你可以开箱即用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here you can see I'm asking it to create an assistant app as an artifact have a chat interface where the AI responds using the LLM that powers Claude and then also create system in uh prompt that is based on these example conversations and then analyze these upload loaded photos and include a camera um icon in the input.</p>
</details>

所以在这里你可以看到我要求它创建一个助手应用程序作为产物，拥有一个聊天界面，其中AI使用驱动Claude的LLM进行回复，然后还创建一个基于这些示例对话的系统提示，然后分析这些上传的照片，并在输入中包含一个相机图标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'm actually going to upload some um screen grabs of our current Yelp Assistant and indicate that it should use these attached screenshots as an example for what the front end should look like just so that it feels a little bit more real.</p>
</details>

然后我实际上将上传一些我们当前Yelp Assistant的屏幕截图，并指出它应该使用这些附加的截图作为前端应该是什么样子的示例，只是为了让它感觉更真实一些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Got it.</p>
</details>

**Clarvo:** 明白了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you really are using example conversations and just reference designs as your PRD here.</p>
</details>

所以你在这里确实将示例对话和参考设计作为你的PRD。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what you called out that's unique about quad artifacts is it has fully integrated quad AI.</p>
</details>

然后你指出Claude产物的独特之处在于它完全集成了Claude AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can actually generate artifacts that do make native LLM calls to the anthropic API.</p>
</details>

所以你实际上可以生成能够对**Anthropic API**（Anthropic API: Anthropic公司提供的应用程序编程接口，用于访问其AI模型）进行原生LLM调用的产物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you are prototyping little AI product out there um check out Claude because it just makes it a little simpler and you don't have to pass it a bunch of API keys.</p>
</details>

所以如果你正在原型设计小型AI产品，可以看看Claude，因为它让事情变得更简单，你不需要传递一堆API密钥。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can see that it's writing the code here and at the top it actually wrote the system instructions.</p>
</details>

你可以看到它正在这里编写代码，并且在顶部它实际上编写了系统指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think this is also a really good way to learn because you can see that based on these example conversations, how is Claude translating that into system instructions.</p>
</details>

我认为这也是一个很好的学习方式，因为你可以看到Claude如何根据这些示例对话将其转化为系统指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's, you know, mirroring some of my initial prompting and redirection around providing suggested replies, um not asking the user about budget.</p>
</details>

所以，它，你知道，反映了我最初的一些提示和重定向，关于提供建议回复，嗯，不询问用户预算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think that's um really helpful.</p>
</details>

所以我认为这非常有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you can see it gives some examples from my examples as part of how to guide the um assistant around photo analysis as well.</p>
</details>

然后你可以看到它从我的示例中给出了一些例子，作为如何指导助手进行照片分析的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I'm going to test it out and we'll see if it works out of the box.</p>
</details>

所以我要测试一下，看看它是否开箱即用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it does sometimes require a little back and forth.</p>
</details>

嗯，有时确实需要一些来回调整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so you can see here I have uploaded the photo of my issue and Claude is thinking.</p>
</details>

所以你可以在这里看到我上传了我的问题照片，Claude正在思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, great.</p>
</details>

好的，太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so here you can see it worked pretty well.</p>
</details>

嗯，所以在这里你可以看到它工作得相当好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it said, you know, I can see it's showing F2 in red and the door locked and this is a common error code relating to the oven lock.</p>
</details>

所以它说：“我看到它显示红色F2，门已锁定，这是与烤箱锁相关的常见错误代码。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, typically you want a repair technician.</p>
</details>

“你知道，通常你需要一个维修技术人员。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's asking about the urgency.</p>
</details>

它正在询问紧急程度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it is, you know, simulating pretty well this conversation.</p>
</details>

所以它，你知道，很好地模拟了这场对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one of the reasons why I think it's helpful to simulate it in this kind of artifact is you can also get a real feel of how this would be for the user.</p>
</details>

我认为在这种产物中模拟它之所以有帮助，其中一个原因是，你还可以真实地感受到这对用户来说会是怎样的体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like you can see like sometimes a response that looks fine when you have it in a doc feels really long when you see it in like the little chat bubble and the mobile interface</p>
</details>

比如，你可以看到，有时在文档中看起来不错的回复，当你在小聊天气泡和移动界面中看到它时，会感觉非常长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you know that waiting period of like the three dots and then the response comes back when you play out the full conversation</p>
</details>

你知道，那种等待期，比如三个点，然后回复出现，当你完整地进行对话时，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">can feel very different.</p>
</details>

感觉会非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think this is also a really good step to do</p>
</details>

所以我认为这也是一个非常好的步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then you can of course share this with your team or your designers or your engineers and they can also start to get a sense of how does this feel?</p>
</details>

然后你当然可以与你的团队、设计师或工程师分享，他们也可以开始感受这感觉如何？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can we actually do this?</p>
</details>

我们真的能做到这一点吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How can we refine it or make it even operate better?</p>
</details>

我们如何改进它，或者让它运行得更好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I I just have never thought of this low.</p>
</details>

所以我从未想过这个流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have to repeat it again for folks.</p>
</details>

我必须再为各位重复一遍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, kind of starting inside out with a conversational agent, prototyping example conversations first, getting them um refine getting a good set of example conversations that you can then put into a um prototype generating tool in this instance claude to then back into the chat experience including the system prompt that would best serve those conversations as such a great flow.</p>
</details>

你知道，从内到外地开始使用对话式代理，首先原型设计示例对话，然后完善，获得一组好的示例对话，你可以将其放入一个原型生成工具（在本例中是Claude），然后反向推导出聊天体验，包括最能服务于这些对话的系统提示，这是一个非常棒的流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm so impressed.</p>
</details>

我印象深刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This episode is brought to you by Persona, the B2B identity platform helping product fraud and trust and safety teams protect what they're building in an AI first world.</p>
</details>

本期节目由**Persona**（Persona: B2B身份平台）赞助，这是一个B2B身份平台，帮助产品欺诈和信任与安全团队在AI优先的世界中保护他们正在构建的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 2024, bot traffic officially surpassed human activity online.</p>
</details>

2024年，机器人流量正式超越了在线人类活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with AI agents projected to drive nearly 90% of all traffic by the end of the decade, it's clear that most of the internet won't be human for much longer.</p>
</details>

随着AI代理预计到本十年末将驱动近90%的所有流量，很明显，互联网的大部分将不再是人类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why trust and safety matters more than ever.</p>
</details>

这就是为什么信任和安全比以往任何时候都更重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether you're building a next-gen AI product or launching a new digital platform, Persona helps ensure it's real humans, not bots or bad actors accessing your tools.</p>
</details>

无论你是在构建下一代AI产品还是推出新的数字平台，Persona都能帮助确保是真实人类，而不是机器人或恶意行为者访问你的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With Persona's building blocks, you can verify users, fight fraud, and meet compliance requirements.</p>
</details>

借助Persona的构建模块，你可以验证用户、打击欺诈并满足合规要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All through identity flows tailored to your product and risk needs.</p>
</details>

所有这些都通过根据你的产品和风险需求量身定制的身份流程完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You may have already seen Persona in action if you verified your LinkedIn profile or signed up for an Etsy account.</p>
</details>

如果你验证过你的**LinkedIn**（LinkedIn: 领英，职业社交平台）个人资料或注册过**Etsy**（Etsy: 销售手工制品和艺术品的电子商务网站）账户，你可能已经见过Persona在运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It powers identity for the internet's most trusted platforms and now it can power yours too.</p>
</details>

它为互联网上最受信任的平台提供身份验证，现在它也可以为你的平台提供支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Visit withpersona.com/h how I AI to learn more.</p>
</details>

访问withpersona.com/howiAI了解更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, now what I have to call out is this looks pretty good, but it doesn't look quite like Yelp.</p>
</details>

你知道，现在我必须指出的是，这看起来相当不错，但它看起来不太像Yelp。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, how do you take this how do you take this to that next step of, you know, really um designing out what the real product might look like?</p>
</details>

那么，你如何将这个，你如何将它推进到下一步，你知道，真正地设计出真实产品可能的样子？

### 从对话到视觉原型：Magic Patterns的应用

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, for sure.</p>
</details>

我得说，我认为这都只是一个起点，它是与你更大的团队（对吧？与工程师和设计师）对话的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I will say like I think this is all just a starting point and it's a part of a conversation with your larger team, right? With the engineers and with the with designers like I think this is really something that helps me clarify my own thinking and ideas and like refine what is that ideal conversation look like and and also just you know be a better collaborator because I understand system instructions better um as uh as we're going through features.</p>
</details>

我认为这确实有助于我澄清自己的想法和理念，并完善理想的对话是什么样子，而且，你知道，成为一个更好的协作者，因为随着我们开发功能，我能更好地理解系统指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but yeah, so I think um you know, it still goes through our our our usual like design and engineering pro uh processes once we have a good idea of you know where we're headed and it really has been a collaborative process for us between design, product and engineering where we're all writing these conversations together.</p>
</details>

嗯，但是，是的，所以我认为，你知道，一旦我们对方向有了很好的想法，它仍然会经过我们通常的设计和工程流程，这确实是我们设计、产品和工程之间的一个协作过程，我们都在一起编写这些对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're giving each other feedback on them.</p>
</details>

我们互相提供反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so now we're going to I'm going to talk about you know how do we how do we think about the exploring ideas on the other side?</p>
</details>

嗯，所以现在我们将要，我将讨论，你知道，我们如何思考探索另一边的想法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we we went pretty deep on like what does that conversation flow look like?</p>
</details>

所以我们深入探讨了对话流程是什么样子？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How can we use cloud to um explore ideas there and the other piece is like how do use what does the interface look like?</p>
</details>

我们如何使用Claude来探索那里的想法，另一部分是，界面是什么样子？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are the user flows?</p>
</details>

用户流程是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How does a user get into these assistant experiences?</p>
</details>

用户如何进入这些助手体验？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I have seen that a lot of those little details matter as well.</p>
</details>

我发现很多这些小细节也很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know what are the prompts?</p>
</details>

你知道提示是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How how does a user understand the capabilities of the assistant?</p>
</details>

用户如何理解助手的各项功能？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so here with uh I'm going to show another tool which is **Magic Patterns**（Magic Patterns: 一款AI驱动的原型设计工具）。</p>
</details>

所以在这里，我将展示另一个工具，那就是Magic Patterns。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think magic patterns is really great for when you want to explore something visually and like kind of consider what that flow would look like.</p>
</details>

我认为Magic Patterns非常适合当你想要视觉化地探索某些东西，并考虑流程会是什么样子的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know Colin Matthews was on this show earlier and he showed how you can recreate a you know an existing product using component library or screenshots.</p>
</details>

我知道**Colin Matthews**（Colin Matthews: 曾上过How I AI节目的嘉宾）之前来过这个节目，他展示了如何使用组件库或截图重新创建现有产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm not going to cover that in detail.</p>
</details>

所以我就不详细介绍了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here I've recreated our Yelp Assistant um with that kind of approach.</p>
</details>

所以在这里我用那种方法重新创建了我们的Yelp Assistant。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I'm going to show you how you can then move on um to actually explore features within u magic patterns which I think is a lot of fun.</p>
</details>

但我将向你展示如何继续在Magic Patterns中探索功能，我认为这非常有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here I'm going to actually ask it to add a prompt suggestion at the top for start with a photo which allows the user to upload a photo.</p>
</details>

所以在这里我实际上将要求它在顶部添加一个提示建议，用于“从照片开始”，这允许用户上传照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know you can see here it's it's thinking and it's saying I will start um add this prompt suggestion for start with a photo.</p>
</details>

你知道，你可以在这里看到它正在思考，它说我将开始添加这个“从照片开始”的提示建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um this will likely require these things.</p>
</details>

嗯，这可能需要这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um for styling, I'm going to consider this.</p>
</details>

嗯，对于样式，我将考虑这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, like reading those thinking instructions, I think is super helpful.</p>
</details>

所以再次，阅读那些思考指令，我认为非常有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what it's doing now, now that it has those instructions, it looks like it's sort of doing this thing that you see in a lot of these prototyping tools, which is it's creating or updating new components, updating components.</p>
</details>

所以它现在正在做的事情，既然它有了那些指令，它看起来正在做你在许多这些原型工具中看到的那种事情，那就是它正在创建或更新新组件，更新组件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's going to kind of insert those design elements into into this design for you to give feedback and test with.</p>
</details>

它将把这些设计元素插入到这个设计中，供你提供反馈和测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I just have to say, you've been a PM for a little bit.</p>
</details>

我不得不说，你做产品经理已经有一段时间了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've been a PM for a little bit.</p>
</details>

我也做产品经理有一段时间了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Have you ever had access to this kind of like ondemand design and code?</p>
</details>

你有没有接触过这种按需设计和代码？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like is has this totally like changed the way you think about working through designs, wireframes, stuff like that?</p>
</details>

比如，这是否完全改变了你思考设计、线框图之类的方式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it absolutely has.</p>
</details>

**Priya Matthew Badger:** 是的，确实如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think my mind was kind of blown to be honest.</p>
</details>

是的，老实说，我第一次使用这些自然语言提示原型工具时，我的思维被彻底颠覆了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the first time I use these like natural language prompting prototyping tools just because yeah it's just so magical for you as a PM to be like hey I can just describe what's in my head and actually have it you know come to life um in a prototype.</p>
</details>

因为，是的，对于你作为产品经理来说，能够描述你脑海中的想法，并让它在原型中变为现实，这简直太神奇了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it really has uh you know I think the core of the of the PM job and the earliest part of the workflow hasn't really changed and that you're still trying to understand deeply the user problem figure out what to prioritize.</p>
</details>

所以它确实，你知道，我认为产品经理工作的核心和工作流程的最早部分并没有真正改变，你仍然在努力深入理解用户问题，弄清楚要优先处理什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I think it really helps in the phase after that where as a team you're exploring the solution space.</p>
</details>

嗯，但我认为它在之后的阶段真的很有帮助，在这个阶段，作为一个团队，你正在探索解决方案空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What can really solve that problem for a user?</p>
</details>

什么能真正为用户解决那个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we make them aware of it?</p>
</details>

我们如何让他们意识到它？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do we make sure it's easy to use?</p>
</details>

我们如何确保它易于使用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I feel like it's just really fun to be able to like play around in these tools and explore ideas um myself visually and and find better ways where I can communicate something that's in my head.</p>
</details>

我感觉能够像在这些工具中玩耍一样，视觉化地探索想法，并找到更好的方式来传达我脑海中的东西，这真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing.</p>
</details>

**Clarvo:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we have a start with a photo.</p>
</details>

所以现在我们有一个“从照片开始”的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

**Priya Matthew Badger:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah, we have a start with a photo.</p>
</details>

所以是的，我们有一个“从照片开始”的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you can see here, it's got this UI where I can start with a photo.</p>
</details>

正如你在这里看到的，它有一个用户界面，我可以在其中从照片开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so you know that's you know one option.</p>
</details>

嗯，所以你知道那是一个选项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then of course like you know we did something simple when you launch this feature where there's just a camera icon but I'm showing this example as a way that you know you can explore like what would other ways be that we could make this experience um as you're thinking about iterating.</p>
</details>

然后当然，你知道，当我们推出这个功能时，我们做了一些简单的事情，只有一个相机图标，但我展示这个例子是为了说明，你知道，你可以探索在迭代时，我们还可以通过哪些其他方式来改善这种体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so here I'm going to show you this really cool feature within Magic Patterns which is called inspiration mode.</p>
</details>

所以在这里我将向你展示Magic Patterns中一个非常酷的功能，叫做“灵感模式”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and definitely recommend digging into this menu in general.</p>
</details>

嗯，总的来说，绝对推荐深入研究这个菜单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, they have like a lot of nice little shortcuts, but this inspiration mode is my favorite because you can quickly explore lots of different options.</p>
</details>

嗯，他们有很多不错的小快捷方式，但这个灵感模式是我的最爱，因为你可以快速探索许多不同的选项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here I can say, "Give me some options on how the start with the photo flow could work to make it feel more guided for the user."</p>
</details>

所以，在这里我可以说：“给我一些关于‘从照片开始’流程如何运作的选项，让用户感觉更有引导性。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this part of the prompt I workshopped a little bit, but I think works to help have the inspiration mode come up with different ideas.</p>
</details>

这个提示的一部分我稍微修改了一下，但我认为它有助于让灵感模式提出不同的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I say like think expansively and make each option differentiated and then explain in in your response which option um what each option is.</p>
</details>

我说：“广阔地思考，让每个选项都有所区别，然后在你的回复中解释每个选项是什么。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so I'm going to go ahead and submit that and it will generate for me four different options.</p>
</details>

嗯，所以我将提交它，它将为我生成四个不同的选项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you'll see that um once it goes through this process, it will actually have four different boxes on the screen.</p>
</details>

你会看到，嗯，一旦它完成这个过程，屏幕上实际上会有四个不同的方框。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as you want to explore those options, you can click through those boxes and it'll update what's on the left side.</p>
</details>

当你想要探索这些选项时，你可以点击这些方框，它会更新左侧的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can really quickly explore and see the different ideas and you know decide what you like.</p>
</details>

所以你可以非常快速地探索并查看不同的想法，然后决定你喜欢什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I like doing this because I think sometimes we come in and we feel like we need to have a whole PRD before we can start prototyping.</p>
</details>

嗯，我喜欢这样做，因为我认为有时我们进来时会觉得在开始原型设计之前需要有一个完整的PRD。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's definitely one approach and use case for AI prototyping tools.</p>
</details>

这当然是AI原型工具的一种方法和用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I've also found that they're helpful even earlier when you you do understand your you know your user problem, what you're trying to solve for, but you may not know really what those solution looks like and you want to explore and maybe get some ideas from AI as well.</p>
</details>

但我也发现它们甚至在更早的阶段就很有帮助，当你确实了解你的用户问题，你想要解决什么，但你可能不知道解决方案到底是什么样子，并且你想探索并可能从AI那里获得一些想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, this just makes me think I don't know if designers are going to love this or hate this.</p>
</details>

**Clarvo:** 是的，这让我想到，我不知道设计师会喜欢这个还是讨厌这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I remember this experience when I was a designer where somebody would give me a purity or a feature like this and I would give them back a design like what we see on the left and they'd be like great but can we like try it over here and try it over there and move it up there and make it this button and like make it a link and that like manual iteration where it wasn't really um moving the product forward.</p>
</details>

我记得我做设计师时有这样的经历，有人会给我一个像这样的纯度或功能，我会给他们一个像我们在左边看到的这样的设计，他们会说太棒了，但是我们能不能在这里试试，在那里试试，把它移到上面，把它做成这个按钮，把它做成一个链接，这种手动迭代并没有真正推动产品前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was kind of getting our own minds around what the problem space and the solution space could be so that we could move the product forward just took a lot of time and so I think it's really interesting to compress the time for ideiation so that you can get to the ultimate product a little bit faster.</p>
</details>

这有点像让我们自己弄清楚问题空间和解决方案空间可能是什么，以便我们能够推动产品前进，这花费了大量时间，所以我认为压缩构思时间以更快地达到最终产品是非常有趣的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like some of our designers are also using using magic patterns or even other AI prototyping tools like Figma has it Figma make and and so I think it's really just part of the conversation.</p>
</details>

而且我们的一些设计师也在使用Magic Patterns，甚至其他AI原型工具，比如**Figma**（Figma: 一款基于网络的界面设计协作工具）有**Figma Make**（Figma Make: Figma中可能指代AI驱动的设计功能），所以我认为这真的只是对话的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, I'll ping a designer, hey, I was thinking about this and, you know, was thinking maybe we could go in this direction and send them a link and they'll be like, oh, I was, you know, exploring something similar and we'll just trade notes.</p>
</details>

你知道，我会给设计师发消息说：“嘿，我正在考虑这个，你知道，我在想我们也许可以朝这个方向发展”，然后给他们发送一个链接，他们会说：“哦，我正在探索类似的东西”，然后我们就会交流想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, to me, it's a replacement for what I was doing before, which was really hacky Figma mockups and like not so great wireframes.</p>
</details>

所以对我来说，它取代了我以前做的事情，那些是非常粗糙的Figma模型和不太好的线框图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so I I think it's an extension of that like wireframing hacky Figma prototype process where it just is easier for someone to understand because they can actually click through and see the flow.</p>
</details>

嗯，所以我认为它是那种线框图、粗糙Figma原型过程的延伸，因为它让人们更容易理解，因为他们可以实际点击并查看流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's just more interactive I think is really it might not be higher fidelity, but it's a richer kind of prototype experience than you would get from sort of a flat design.</p>
</details>

**Clarvo:** 是的，我认为它只是更具交互性，它可能不是更高保真度，但它是一种比平面设计更丰富的原型体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, we at least have three successful generations.</p>
</details>

好的，我们至少有三个成功的生成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can click through with with with all AI, you know, sometimes you get errors, but you know, here it says it's like a guided category selection flow.</p>
</details>

**Priya Matthew Badger:** 我们可以点击查看，你知道，所有的AI有时都会出错，但是，你知道，这里它说这是一个引导式类别选择流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we'll click through and see what they did.</p>
</details>

所以我们将点击查看他们做了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you can see here it's like kind of customizing it a little bit for the category of um of the service.</p>
</details>

所以你可以在这里看到它正在根据服务的类别进行一些定制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to go back and maybe select another category and see how it's different.</p>
</details>

所以我要回去，也许选择另一个类别，看看有什么不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's like, you know, kind of customizing some of the tips um in this one.</p>
</details>

所以它，你知道，正在定制一些提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's see.</p>
</details>

我们看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I might need to actually select a photo to see what it does.</p>
</details>

我可能需要实际选择一张照片才能看到它会做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so you can see it's like going through an analysis.</p>
</details>

嗯，所以你可以看到它正在进行分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, this is not using the LLM behind the scenes.</p>
</details>

你知道，这并没有使用幕后的LLM。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you can see it's not uh not making sense, but I think the idea here makes sense where it's like, okay, it's going to do this like kind of real time detection.</p>
</details>

所以，你可以看到它没有，嗯，没有意义，但我认为这里的想法是有道理的，它会进行这种实时检测。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then in this one, it looks like it's like multiple photos.</p>
</details>

嗯，然后在这个例子中，它看起来像是多张照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see here it's you know showing like you know you could um prompt the user to maybe take multiple pictures.</p>
</details>

所以你可以在这里看到它，你知道，展示了你可以提示用户拍摄多张照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will just click on this to show that you know this is how AI works or sometimes sometimes you get errors and you need to fix them.</p>
</details>

我将点击这个来展示，你知道，这就是AI的工作方式，有时你会遇到错误，你需要修复它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know usually there's that like shortcut to like try to fix it.</p>
</details>

嗯，你知道，通常有那个快捷方式来尝试修复它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, if it doesn't work, um, there is also like a debug command within magic patterns, which I found pretty useful, which just tells it to like look through your code, try to come up with what's wrong to fix it.</p>
</details>

嗯，如果它不起作用，嗯，Magic Patterns中还有一个调试命令，我发现它非常有用，它只是告诉它查看你的代码，尝试找出问题所在并修复它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, let's see if it did fix it.</p>
</details>

**Clarvo:** 嗯，我们看看它是否修复了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For our listeners that are not wa not are not watching, I will spare you reading the uncaught react errors about um incompatible React versions.</p>
</details>

对于没有观看的听众，我将不向你们宣读关于不兼容的React版本的未捕获React错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that is what we are looking at right now, which is we are looking at a compatibility issue between 18 and 19.</p>
</details>

但那正是我们现在正在看的，我们正在看18和19之间的兼容性问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Priya Matthew Badger:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

**Clarvo:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like all good AI demos, this one did not work.</p>
</details>

所以就像所有好的AI演示一样，这个没有成功。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I do want to say just stepping back what I wanted to just call out is you have demoed for us a completely new way of thinking about product management prototyping and product requirements in a way that is very different than I think what classic product management has looked at.</p>
</details>

但我想说的是，退一步讲，我想要指出的是，你向我们展示了一种全新的产品管理原型设计和产品需求思考方式，这与我认为经典产品管理所关注的方式非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you're starting from a kind of example consumer experience first.</p>
</details>

所以你首先从一种示例消费者体验开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you're backing into kind of a rough prototype of what could support that experience.</p>
</details>

你正在反向推导出可以支持这种体验的粗略原型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're using a AI prototyping tool, in this instance, magic patterns, to then put that experience in your brand and design guidelines.</p>
</details>

你正在使用一个AI原型工具，在本例中是Magic Patterns，然后将这种体验融入你的品牌和设计指南。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you're using that as a jumping off point to fork and inspire a couple different versions of what that ultimate user experience could look like.</p>
</details>

然后你将其作为一个起点，分叉并启发最终用户体验的几种不同版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'm presuming you're going to take one of these and you're gonna say I think we want to start here for our **MVP**（Minimum Viable Product: 最小可行产品） or our **V1**（Version 1: 第一版本） and then that you know you get the team together and then and then that's where you start.</p>
</details>

然后我假设你将选择其中一个，然后你会说我们想从这里开始我们的MVP或V1，然后，你知道，你召集团队，然后从那里开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think for the product people listening what I like about AI is it's not just multimodal and that you can put any sort of um file type or data type in.</p>
</details>

所以我认为对于正在收听的产品人员来说，我喜欢AI的地方在于它不仅仅是**多模态**（Multimodal: 指AI能够处理和理解多种类型的数据，如文本、图像、音频等），你可以放入任何类型的文件或数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It also allows you to approach problems from the front door, the back door, the side door, the window.</p>
</details>

它还允许你从前门、后门、侧门、窗户等多种途径解决问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, you know, you can come at your product problems in a much less linear way.</p>
</details>

比如，你知道，你可以以一种更不线性的方式处理你的产品问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in fact, you can start at the end, go back to the beginning, come to the middle, fork off, go back to the beginning, and reprototype.</p>
</details>

事实上，你可以从终点开始，回到起点，来到中间，分叉，再回到起点，然后重新原型设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's not expensive, it's fast, and it's interesting.</p>
</details>

而且它不贵，速度快，而且很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think what you've inspired me to do is actually think a little bit differently about what the starting point of product management could be not just for AI products but for product in general.</p>
</details>

所以我认为你启发我做的是，实际上以一种不同的方式思考产品管理的起点可能是什么，不仅仅是针对AI产品，而是针对一般产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then of course you showed some great ways that AI can help with that.</p>
</details>

然后你当然展示了一些AI在这方面可以提供帮助的绝佳方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I will say yeah to your point you know you can pick which one you like the best um which you think fits your you know where you are um in your in your product journey and your user needs.</p>
</details>

嗯，我得说，是的，正如你所说，你可以选择你最喜欢的一个，嗯，你认为最适合你的，你知道，你在产品旅程中的位置和你的用户需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you can also like if there's one that feels like, hey, this like AI assisted one seems really interesting or this multifoto one seems really interesting, but maybe not like where we're going to go right away, you can fork this design and it will create um a totally separate window and chat for you um of just that variant and then you can just run off with that, you know, maybe on the side um while you're continuing down the original path you were in.</p>
</details>

嗯，你也可以，如果有一个感觉像是：“嘿，这个AI辅助的看起来真的很有趣，或者这个多照片的看起来真的很有趣，但也许不是我们马上要走的方向”，你可以分叉这个设计，它会为你创建一个完全独立的窗口和聊天，嗯，只包含那个变体，然后你就可以带着它离开，你知道，也许在旁边，嗯，同时你继续沿着你原来的路径前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I love that.</p>
</details>

**Clarvo:** 我喜欢这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have seen your AI powered AIPM process and usually I would bump us to lightning round but part of our lightning round is going to have a couple demos in it.</p>
</details>

所以我们已经看到了你的AI驱动的AI产品管理流程，通常我会直接进入闪电问答环节，但我们闪电问答的一部分将包含几个演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as my first lightning round question can you do a quick world tour of a couple nonworkreated AI use cases that you think our listeners would really get a lot of value from?</p>
</details>

所以作为我的第一个闪电问答问题，你能快速介绍几个你认为我们的听众会从中获得很多价值的非工作相关的AI用例吗？

### 个人AI应用案例与调试策略

**Priya Matthew Badger:** 是的，当然，我也可以分享一些个人案例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah absolutely I can share a few personal examples also.</p>
</details>

嗯，所以，嗯，一个例子是，你知道，我在Yelp启动了这个“**Talk AI**”（Talk AI: Yelp内部的AI讨论频道）频道，它实际上是受到**Lenny**（Lenny: 可能指Lenny Rachitsky，知名产品博主）社区中一个Talk AI频道的启发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so um one is you know I have started this um you know talk AI channel that was at Yelp which was actually inspired by a talk AI channel in Lenny's community and um I wanted to create a monthly newsletter that gets sent out that just summarizes all the great discussion and content that was being created there.</p>
</details>

我想要创建一个每月发送的通讯，它能总结那里产生的所有精彩讨论和内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um I'm just going to show an example of how to do that using Lenny's community.</p>
</details>

所以，嗯，我将展示一个如何使用Lenny社区做到这一点的例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so here I have this um, set of project instructions that say, you know, I'm a community manager writing a weekly newsletter.</p>
</details>

嗯，所以这里我有一组项目指令，上面写着，你知道，我是一个社区经理，正在编写每周通讯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, use these Slack conversations and format them just like the community wisdom newsletter.</p>
</details>

嗯，使用这些Slack对话，并按照“**Community Wisdom Newsletter**”（Community Wisdom Newsletter: Lenny社区的通讯名称）的格式进行排版。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I think what's really cool is I can just come in here and I can say, you know, I want to just make a version of this community ver uh wisdom using this slack chat and I can upload the file of all those slack chats and I did randomize the names or um replace the names for privacy also using GPT.</p>
</details>

然后我认为真正酷的是，我可以直接进来，然后说，你知道，我想用这个Slack聊天创建一个这个社区智慧的版本，我可以上传所有这些Slack聊天文件，而且我还使用GPT随机化了名字或替换了名字以保护隐私。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then you can see here it's going to make a version of that community wisdom newsletter just using those Slack chats and um, reuse that same format.</p>
</details>

嗯，然后你可以在这里看到它将仅使用那些Slack聊天创建一个社区智慧通讯的版本，并且，嗯，重用相同的格式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by using a project, I can, you know, save myself some time on the prompting.</p>
</details>

通过使用项目，我可以，你知道，在提示方面节省一些时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great.</p>
</details>

**Clarvo:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you're copying and pasting um, like a week's worth of Slack conversations.</p>
</details>

所以你正在复制粘贴，嗯，大约一周的Slack对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">M you're putting it into this cloud project which you've been given a um you've given a template and then you're having it generate on a weekly basis or whatever kind of a summary of what's going on in that community and other kind of like content that's being shared.</p>
</details>

你把它放入这个云项目，你已经得到了一个模板，然后你让它每周或以任何方式生成该社区中正在发生的事情以及其他正在分享的内容的摘要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely.</p>
</details>

**Priya Matthew Badger:** 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you can see, you know, kind of follows that community with some uh format and pulls out what the top threads are.</p>
</details>

然后你可以看到，你知道，它遵循了那个社区的一些格式，并提取了热门话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you might want to make some edits to this afterwards, but it really, you know, gets a really good first draft that you can then edit.</p>
</details>

所以你可能需要在之后对此进行一些编辑，但它确实，你知道，提供了一个非常好的初稿，你可以随后进行编辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing.</p>
</details>

**Clarvo:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you're probably everybody's favorite community member.</p>
</details>

你可能是大家最喜欢的社区成员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's definitely a lot of fun um to yeah, see what people share.</p>
</details>

**Priya Matthew Badger:** 是的，这确实很有趣，嗯，是的，看看人们分享了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I'll show a couple other examples.</p>
</details>

然后我将展示另外几个例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, I showed the example of creating the Yelp Assistant and I actually used the same workflow to create this **Parent Pal**（Parent Pal: Priya为个人育儿需求创建的AI助手） to explain how artifacts work to my husband and he was really excited about it.</p>
</details>

所以，你知道，我展示了创建Yelp Assistant的例子，我实际上使用了相同的工作流程来创建这个Parent Pal，向我丈夫解释产物是如何工作的，他对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He was like, "Hey, like let's try it out with, you know, Tommy where Tommy throws toys down the stairs."</p>
</details>

他就像是：“嘿，我们用，你知道，Tommy来试试看，Tommy把玩具扔下楼梯。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, I did like, you know, my two-year-old um throws toys down the stairs and uh it's some the same kind of artifact where it's powered by Claude's LLM and it's going to ask me some clarifying questions like what's the trigger and it's like always at dinnertime when we are cleaning up.</p>
</details>

所以，你知道，我做了，你知道，我的两岁孩子，嗯，把玩具扔下楼梯，而且，嗯，它也是同一种产物，由Claude的LLM驱动，它会问我一些澄清问题，比如触发因素是什么，然后它总是发生在晚餐时，当我们正在收拾的时候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then you can, you know, see how the AI will provide some parenting guidance.</p>
</details>

嗯，然后你就可以，你知道，看到AI会提供一些育儿指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think the really fun thing for this is that, you know, you can build something that's just really for your own personal use case.</p>
</details>

我认为这真正有趣的地方在于，你知道，你可以构建一些真正只为你个人用例的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and it's a a really fun process to do that.</p>
</details>

嗯，这是一个非常有趣的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll show one other one, which is um my siblings and I like to play this board game, **Settlers of Katan**（Settlers of Catan: 卡坦岛，一款策略图板游戏）。</p>
</details>

我再展示一个，那就是，嗯，我和我的兄弟姐妹喜欢玩这个棋盘游戏，卡坦岛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the bad thing is it kind of takes a long time, especially if people don't go fast.</p>
</details>

但糟糕的是它有点耗时，特别是如果人们玩得不快的话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm working on this **Settlers of Katan Timer**（Settlers of Catan Timer: Priya为卡坦岛游戏制作的AI计时器）where um I actually have a timer for me and my siblings and both for the setup and the main game play.</p>
</details>

所以，我正在开发这个卡坦岛计时器，嗯，我实际上为我和我的兄弟姐妹设置了一个计时器，包括设置时间和主要游戏时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this one I actually built in **Lovable**（Lovable: 一个AI驱动的应用程序构建平台）because my siblings had a lot of feature requests about tracking the future uh you know who who's won over time and having a leaderboard and handicaps and all sorts of other ideas.</p>
</details>

但这个我实际上是在Lovable中构建的，因为我的兄弟姐妹有很多功能请求，比如跟踪未来的，你知道，谁随着时间赢得了比赛，以及拥有排行榜和障碍等等各种其他想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I definitely think it's a lot of fun to prototype with AI for your personal use cases.</p>
</details>

所以，我绝对认为用AI为你的个人用例进行原型设计非常有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I know some PMs are like, "Hey, I really want to work on AI products, but I don't have that opportunity right now."</p>
</details>

我知道有些产品经理会说：“嘿，我真的很想从事AI产品工作，但我现在没有这个机会。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the fun thing about these prototyping tools is you can build a use case that's just for you or just for you and a family member.</p>
</details>

我认为这些原型工具的有趣之处在于，你可以构建一个只为你自己或只为你和家人使用的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and learn a lot as you're doing it.</p>
</details>

嗯，并且在做的过程中学到很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You just gave me such a good idea because I don't play a lot of board games, but my kids get like 10 to 15 minutes of Minecraft every day, but we only have one</p>
</details>

**Clarvo:** 你刚刚给了我一个非常好的主意，因为我不怎么玩棋盘游戏，但我的孩子们每天有10到15分钟的《我的世界》时间，但我们只有一个计时器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like uh time timer.</p>
</details>

嗯，一个计时器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so so I need an iPad where they can like both click their button and have it have it countdown.</p>
</details>

嗯，所以我需要一个iPad，他们可以点击各自的按钮，让它倒计时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then they're also really worried about fairness.</p>
</details>

然后他们也非常担心公平性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I will also use a uh relational database to store all their time</p>
</details>

所以我也会使用一个关系型数据库来存储他们所有的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and say I promise every week you are getting an equal amount of Minecraft.</p>
</details>

然后说我保证每周你们都会得到等量的《我的世界》时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is no no lack of fairness and then when they fight about it I'll use your parent pal GBT.</p>
</details>

没有不公平，然后当他们争吵时，我就会使用你的Parent Pal GPT。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love it.</p>
</details>

**Priya Matthew Badger:** 我喜欢这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you can just direct them to check the dashboard.</p>
</details>

是的，你可以直接让他们去查看仪表板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing.</p>
</details>

**Clarvo:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, last question and then I will get you back to all your prototyping and all your AI building.</p>
</details>

好的，最后一个问题，然后我将让你回到你的所有原型设计和AI构建工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When AI is not listening, other than clicking that debug button in magic patterns, what is your tactic?</p>
</details>

当AI不听话时，除了点击Magic Patterns中的调试按钮，你的策略是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you do?</p>
</details>

你会怎么做？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I think that when AI is not working and you've already tried some of the debug um methods, I think it's helpful to actually think about the ways that AI is different than a human.</p>
</details>

**Priya Matthew Badger:** 我认为当AI不工作，并且你已经尝试了一些调试方法时，实际上思考AI与人类的不同之处是很有帮助的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like often we just get in this chat and we're like, this is just like talking to someone.</p>
</details>

比如，我们经常进入这个聊天，然后觉得这就像和某人说话一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but when you're hitting the wall, it it helps to like take a step back and be like, "This thing is actually not a human.</p>
</details>

嗯，但是当你遇到瓶颈时，退一步想：“这个东西实际上不是人类。”这会有所帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, what could be going wrong?"</p>
</details>

“比如，可能出了什么问题？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And think about AI's limitations.</p>
</details>

并思考AI的局限性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And, you know, the ones that I try to keep in mind are it tends to lose context as you go through many different turns.</p>
</details>

而且，你知道，我尽量记住的一点是，当你进行许多不同轮次的对话时，它往往会失去上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it has a limited context window.</p>
</details>

而且它的上下文窗口是有限的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, when you start having a really long conversation with AI, sometimes it just goes haywire.</p>
</details>

所以，当你开始与AI进行非常长的对话时，有时它就会失控。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the um methods I um recommend are if you're doing AI prototyping, you can use that fork or you know a remix to start a new chat with the context of that code and that actually resets the context window.</p>
</details>

所以，嗯，我推荐的方法是，如果你正在进行AI原型设计，你可以使用那个分叉或者，你知道，一个混音来开始一个新的聊天，带上该代码的上下文，这实际上会重置上下文窗口。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so that's a good idea if you're going really far and deep with a prototype.</p>
</details>

嗯，所以如果你在原型设计方面走得很远很深，那是个好主意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and the same thing applies to a chat.</p>
</details>

嗯，同样适用于聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like if it's going haywire and you've had like a hundred back and forths, you can ask the AI to summarize the chat and the context and start a new chat.</p>
</details>

比如，如果它失控了，你已经来回了一百次，你可以要求AI总结聊天和上下文，然后开始一个新的聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You gave me such a good idea with your last two answers because I am going to prototype a parenting pal for the relationship between me and my a my AI.</p>
</details>

**Clarvo:** 你最后的两个回答给了我一个非常好的主意，因为我将为我和我的AI之间的关系原型设计一个育儿伙伴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Be like, AI parenting pal, my my 4-second old AI is no longer listening to me.</p>
</details>

我会说：“AI育儿伙伴，我那4秒大的AI不再听我的话了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do what do I do?</p>
</details>

“我该怎么办？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, that's that's really great really great feedback.</p>
</details>

嗯，那真是非常棒的反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And yes, reminder, AI is not human until the AI overlords take over and then you can be whatever you want.</p>
</details>

是的，提醒一下，AI在AI霸主接管之前都不是人类，然后你就可以成为任何你想成为的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, Priya, this was such a practical, super useful, inspirational conversation.</p>
</details>

好的，Priya，这是一次如此实用、超级有用、富有启发性的对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where can we find you and how can we be helpful?</p>
</details>

我们可以在哪里找到你，我们如何能提供帮助？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you can find me on LinkedIn and then I also have a Substack called almostmagic.substack where I share some prototyping tips and other tips about building AI products.</p>
</details>

**Priya Matthew Badger:** 是的，你可以在**LinkedIn**（LinkedIn: 领英，职业社交平台）上找到我，然后我还有一个名为**almostmagic.substack**（almostmagic.substack: Priya分享原型设计和AI产品构建技巧的Substack）的Substack，我在上面分享一些原型设计技巧和其他关于构建AI产品的技巧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing.</p>
</details>

**Clarvo:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, thank you for sharing and joining How I AI.</p>
</details>

非常感谢你的分享和加入“How I AI”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Awesome.</p>
</details>

**Priya Matthew Badger:** 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for having me.</p>
</details>

非常感谢邀请我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching.</p>
</details>

**Clarvo:** 非常感谢观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts.</p>
</details>

如果你喜欢这个节目，请在YouTube上点赞并订阅，或者更好的是，留下你的评论和想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app.</p>
</details>

你也可以在Apple Podcasts、Spotify或你最喜欢的播客应用上找到这个播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please consider leaving us a rating and review, which will help others find the show.</p>
</details>

请考虑给我们留下评分和评论，这将帮助其他人找到这个节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see all our episodes and learn more about the show at howiipipod.com.</p>
</details>

你可以在howiipipod.com查看我们所有的剧集并了解更多关于节目的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See you next time.</p>
</details>

下次再见。