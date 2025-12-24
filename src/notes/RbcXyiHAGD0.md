---
area: society-systems
category: business
companies_orgs:
- OpenAI
- The Globe and Mail
- CBC
- TVO
- Microsoft
- New York Times
date: '2025-12-04'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- ChatGPT
project:
- ai-impact-analysis
- us-analysis
series: ''
source: https://www.youtube.com/watch?v=RbcXyiHAGD0
speaker: TVO Today
status: evergreen
summary: 去年，加拿大媒体公司对OpenAI提起版权诉讼，指控其未经许可抓取大量内容用于训练ChatGPT等产品。本文深入探讨了此案的核心指控，解释了OpenAI使用的“检索增强生成”（RAG）技术，并分析了加拿大版权法中“合理使用”原则的适用性。专家指出，此案的关键在于AI公司是否应为其使用的内容付费，以及这将如何从根本上影响其商业模式。文章还提及了《纽约时报》在美国对OpenAI和微软提起的类似诉讼，强调了全球范围内AI内容版权问题的复杂性及各国法律的差异。
tags:
- content
- industry
- llm
- llm-business-model
title: AI公司抓取内容是否应付费？加拿大版权诉讼案解析
---

### 加拿大媒体起诉OpenAI：版权侵权的核心指控

去年，一群加拿大媒体公司对**OpenAI**（OpenAI: 一家人工智能研究和部署公司）提起了诉讼。当时他们发布了一份联合声明，指出OpenAI通过抓取加拿大媒体的大量内容来开发其产品，例如**ChatGPT**（ChatGPT: OpenAI开发的大型语言模型），从而经常违反版权和在线使用条款。OpenAI在未经许可或未向内容所有者支付报酬的情况下，利用这些内容进行资本运作并从中获利。目前，安大略省法院已决定此案可以继续审理。我向**Gilbert LLP**（Gilbert LLP: 一家律师事务所）的知识产权律师**Kevin Cu**询问了此案的进展，以及OpenAI应如何看待针对其提起的众多诉讼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Last year, a group of Canadian media companies launched a lawsuit against Open AI. Here's a bit of the joint statement they released at the time. Open AAI regularly breaches copyright and online terms of use by scraping large swats of content from Canadian media to help develop its products such as Chat GBT. Open AAI is capitalizing and profiting from the use of this content without getting permission or compensating content owners. Now, an Ontario court has decided the case can proceed here. I asked Kevin Cu, an intellectual property lawyer with Gilbert LLP, how this case is shaping up and how worried Open AI should be about the multiple cases that have been filed against it.</p>
</details>

Kevin，欢迎来到《Rundown》。你好吗？Kevin Cu回答说：“很好，谢谢邀请。”主持人接着说：“没关系。在我们开始之前，我想提一下，我们**TVO**（TVO: 加拿大公共教育媒体机构）没有参与我们正在讨论的这场诉讼，而且你Kevin也没有参与此案，对吗？”Kevin Cu确认道：“没错。我是一名律师，但我没有代表诉讼中的任何一方。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Kevin, welcome to the rundown. How are you doing? >> Good. Thanks for having me. >> Yeah, no worries. Now before we get started, I want to mention that uh and to our viewers that TBO is not participating in this lawsuit that we are talking about and you Kevin are not involved in the case. Correct. >> That's correct. I am a lawyer but I don't represent any of the parties um in the lawsuit.</p>
</details>

好的，我们来谈谈这个案子。在安大略省针对OpenAI的版权案件中，原告包括**加拿大通讯社**（Canadian Press）、**多伦多星报**（Tourar）、**环球邮报**（The Globe and Mail）、**邮报传媒**（Post Media）和**加拿大广播公司**（CBC）。他们的主要诉求是什么？Kevin Cu解释说，这是一个由加拿大大部分大型新闻出版商组成的联合体，他们的诉求相当广泛，但主要集中在OpenAI对他们从网上抓取的各种新闻文章的使用上。正如大家所知，可以访问CBC或《多伦多星报》获取一些新闻文章，其中一些是付费墙内容。他们的投诉是OpenAI复制、下载、抓取了这些文章，并用它们来训练其**ChatGPT**模型，从而生产出ChatGPT产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Well, let's talk about the case. Uh the plaintiffs in the copyright case against Open AI in Ontario include the Canadian Press, Tourar, the Glob and Mail, Post Media, and CBC. What are their main complaints? So this is a conglomeration of I think most of Canada's biggest news publishers and their complaints are um pretty broad but largely they focus on um OpenAI's use of various news articles that they've scraped from um online. So as you know you know you can access CBC or the Toronto Star and get some news articles. um some of them are paywalled and you can access those articles and their complaint is that OpenAI has um copied, downloaded, scraped some of these articles and used it to train um their chat GPT model in order to produce the product chat GPT.</p>
</details>

### 理解RAG技术及其与“幻觉”的关系

OpenAI使用一种被称为**检索增强生成**（Retrieval Augmented Generation: 简称RAG，一种结合了信息检索和文本生成的AI技术）的技术，这对于本案来说非常重要。对于不了解的人，包括我自己，这到底意味着什么？Kevin Cu解释说，检索增强生成，或者常用的缩写RAG，指的是这些**大型语言模型**（Large Language Models: 简称LLMs，基于大量文本数据训练的AI模型）输出过程中的一个环节。如果曾使用过ChatGPT，输入一些内容，然后ChatGPT机器人会说些什么，它会经历几个过程。一个过程是接收输入，确定应该做什么，然后在输出的末端有一个称为RAG的过程，用于防止或限制**AI幻觉**（Hallucinations: 指AI模型生成虚假或不准确信息的情况）。它的作用是，当大型语言模型即将输出时，RAG系统通常被设计为访问事实存储或访问互联网，并在给出答案之前对自己的输出进行事实核查，从而限制聊天机器人产生幻觉的量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. OpenAI uses what's known as retrieval augmented generation. Uh and it's quite central to this case for people who don't know including myself. What does that actually mean? Yeah. So, retrieval augmented generation or RAG is the acronym that's often used. RA a um that refers to one part of the sort of output process for these large language models. So, if you've ever used chat GPT and you um you know enter some input and the chat GPT bot says something um it goes through a couple of processes. One process is is sort of taking your input um determining what it should do and then there's a process at the end called uh RA which is used to prevent or limit hallucinations. What it does is um when the output is about to be um coming out from the LLM, the large language model, the rag system usually is designed to um access a fact storage or or access the internet and fact check its own output before giving you an answer so that it can you know limit the amount of hallucination um that the uh the chatbot gives you.</p>
</details>

我们经常听到关于AI技术中“幻觉”的说法。当谈论新闻文章以及那些可以快速在网站上搜索到的信息时，这种情况是否常见？Kevin Cu表示，这取决于提示。他认为大多数AI模型都试图使用某种形式的检索增强生成来限制所有这些幻觉，以便它们可以进行事实核查。例如，如果有人问它某事发生在什么日期，ChatGPT模型可能会在给出答案之前查找该信息，但这并不能完全阻止所有幻觉。他认为，如今大多数模型在不同程度上仍然存在这个问题，具体取决于用户提出的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we hear a lot about hallucinations with uh with AI technology. Is that something that happens commonly when we're talking about news articles and things that you know you could quickly search up if you went to one of their websites? >> I mean this depends on the prompt. I think most AI models try to use some version of um retrieval augmented generation to sort of limit all of that so they can you know fact check the the articles if someone asks it you know on what date did something happen and the you know the the chat GPT model will probably look up um that information before giving it to you but it doesn't really prevent all hallucination. And I think most models today still suffer some degree of that to to a greater or lesser extent depending on what you're asking it.</p>
</details>

### 加拿大“合理使用”原则的界限

在加拿大，我们有**合理使用**（Fair Dealing: 加拿大版权法中允许在特定目的下无需许可使用受版权保护材料的原则）原则，对于不了解的人来说，这是一项允许我们在未经许可的情况下，为特定目的使用受**版权**（Copyright: 法律赋予作者对其原创作品的专有权利）保护材料的法律，其中之一就包括新闻报道。那么，OpenAI是否可以利用其受版权保护的材料来援引这项原则呢？Kevin Cu指出，合理使用是一个非常微妙的话题。它经常被用作辩护，但在加拿大也被称为用户的权利。因此，如果我和你只是为了自己的教育目的研究新闻，那么我们就可以购买报纸或在线访问它，我们可以阅读它，或许还可以复制其中的一小部分，例如为了研究而互相发送或标记。这些都属于允许的合理使用目的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here in Canada we have fair dealing uh which for people who don't know is a law that allows us to use copyrighted material without permission for certain purposes. One of them including news reporting as well. Um could open AI have its copyrighted material use that instead? >> Yeah. So fair dealing is a very nuanced subject. Um, it's often used as a defense, but it's it's called it's also been called a user's right in Canada. So, if you or I were just researching news um for our own educational purposes, then we would be able to, you know, uh buy a newspaper or access it online and we can read it and perhaps um you know, reproduce a bit of it, you know, send it back and forth for mark it up for research. Um and those are sort of allowable fair dealing purposes.</p>
</details>

在加拿大，用户被允许对书籍和新闻文章等受版权保护作品进行一系列许可活动。这是加拿大**版权法**（Copyright Law: 规范版权的法律体系）中的一个核心原则，但它也有一定的限制。有特定的目的，如教育和研究，在这些情况下，你肯定被允许以符合合理使用原则的方式使用受版权保护的作品，但也有一些限制。这通常取决于你正在做什么，以及你使用该作品的程度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there sort of a scope um of permitted activities that users in Canada are allowed to do with copyrighted works like books and news articles. And this is a central doctrine in Canadian copyright law. Um but it has certain limits to it. There are specified purposes like education um and research where you're definitely allowed to um use the fair deal uh work in a manner that is in accordance with fair dealing subject to some limitations. But it often depends on what you're doing and how much um you're using that work for.</p>
</details>

### 版权诉讼的商业影响与全球视角

请帮助我们理解此案的利害关系。很多人可能会认为，这些加拿大新闻机构的广告份额正在急剧下降，收入不足，所以这可能是他们抓住这个机会。但请帮助我们真正理解原告和OpenAI之间此案的利害关系。Kevin Cu认为，至少有两个方面，当然还有更多。一方面正如所指出的，是金钱和商业方面的考量，这又回到了上一个关于合理使用的问题。根据加拿大法律，判断某种使用是否合理的一个因素是其商业性质。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Help us understand what's at stake. A lot of people might be looking at this and be like, "Oh, well, there's these are some Canadian news organizations who are probably seeing uh you know, their advertising shares plummeting and and and not making enough money." So, this is maybe them kind of looking at that opportunity, but help us understand really what's at stake here with those the plaintiff and open AI. >> Yeah. So, I mean, I think there are two aspects to it, at least two aspects. There are many more than that but one is as you've identified it's it's monetary it's commercial um which you know goes back to your last question about fair dealing. One of the factors as to whe whether some use is fair or not under Canadian law um includes how commercial that is.</p>
</details>

所以，像OpenAI或任何其他公司是否通过使用《多伦多星报》或CBC的新闻文章赚取了大量金钱？他们确实对使用其产品的一些专业版或高级版收取费用，所以他们确实赚取了一定数额的钱。因此，部分利害关系在于谁可以从这些作品中获利。对于新闻机构来说，他们的核心业务是销售报纸、网站订阅以及将其内容授权给各种媒体。据我们所知，并且在诉讼中也提到了，OpenAI并未为使用这些作品支付任何许可费。因此，此案的一个重要方面是，OpenAI是否应该为使用这些作品付费，以及应该支付多少费用。因为如果只是你我购买报纸，我们支付的金额很低，并且我们并没有从中获利。但像OpenAI这样拥有数百万用户的大公司，他们应该为使用文章支付多少费用？他们使用了数百万篇文章。所以，这是此案的一个关键方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So is is someone like OpenAI or any other company making a lot of money off of right you know Toronto Star or CBC's news articles and you know they do charge a fee for um using some of their you know pro or plus versions of their products. So they are making some amount of money. Um and so at stake in part is who can profit off of those works. You know obviously for news organizations um the core of their business is you know selling newspapers, selling subscriptions to their website and licensing their content to various outlets. And you know as far as we know and as complained in the lawsuit, OpenAI hasn't paid any licensing fees for the use of those works. So a large aspect of this is you know should open AI pay for the use of those works and how much should they pay for the use of those works because you know some aspect of it is if you're again let's take an example if it's just me and you going to buy a newspaper you know we're paying a pretty low amount of money and we're not really profiting off of it but a large company like Open AI which is you know has millions of users how much should they pay for um the use of articles and they use many millions of articles. Um, so that's, you know, a key aspect of the case.</p>
</details>

如果这个法院案件通过，OpenAI的商业模式发生变化，他们必须为某些内容付费，这将如何影响他们的底线和商业模式？Kevin Cu回答说，他不是OpenAI的负责人，谢天谢地，但他认为这对其运营方式是相当根本性的。他觉得，如果从更宏观的角度来看大多数开发大型语言模型的公司，他们声称带来的技术创新的一部分是，他们已经将互联网的很大一部分（如果不是全部）摄取到了他们的AI模型中。他们声称，这就是大型语言模型中的“大型”所在。如果他们必须为他们消费的大部分或所有内容付费，那么这真的会影响他们的底线，因为他们确实使用了大量数据。他们不断抓取信息，而且，根据他们需要支付多少费用才能访问或使用这些内容，这真的会影响这些模型是否能在财务上可行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What happens, uh, let's say this court case goes through and and the business model of Open AI changes where they do have to pay for something. How does that impact their bottom line and their business model? >> Well, you know, I'm not the I'm not in charge of Open AI, uh, thank goodness, but um, you know, I think it it it's pretty fundamental to how they operate. And I think um if you sort of take apart and look at it at a at a more high level view for most of these companies who develop large language models, right, a part of the technological innovation that they they claim to have brought um to the forefront these days is that they've they've used or they've ingested into their AI models a large portion if not all of the internet. You know, they claim you know that's the large in large language model. Um, and if they have to pay for a significant or all of the content that they're consuming, then it really could um impact their bottom line because they, you know, they're they're certainly using a lot of data. They're they're continually scraping um information and, you know, depending on how much they have to pay to access or use that content. Um, it could really impact whether or not those models become financially viable.</p>
</details>

我们还有大约30秒，但我还有一个问题。我们现在讨论的案件是加拿大媒体公司在安大略省起诉OpenAI。但在纽约，目前也正在发生一个类似的案件，**《纽约时报》**（The New York Times）正在起诉**微软**（Microsoft）和OpenAI侵犯版权。我们能从这个案件中学到什么吗？在安大略省关注此案的人们是否需要密切关注那边的进展？Kevin Cu说，从经济角度来看，是的，因为OpenAI的商业模式将受到世界各地诉讼的影响，而不仅仅是加拿大。但从另一个角度来看，又不是这样，因为加拿大法律与美国法律非常不同，两国之间的版权抗辩和原则也不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have about 30 seconds left, but I do have one more question for you. The the case we're talking about right now is Canadian media companies suing OpenAI in Ontario. Uh but in New York, there is a similar case happening right now where New York Times is suing Microsoft and Open AI for copy copyright infringement. Is there something that we can learn from this case? Do do the folks who are following this case here in Ontario uh need to keep a close eye on and what's happening with that? Yeah, I mean from an economic perspective, yes, because OpenAI's business model is going to be influenced by lawsuits all around the world, not just in Canada. But to another extent, not really, because you know, Canadian laws are very different than American laws and there are copyright defenses and doctrines that are different between the two countries.</p>
</details>

好的，Kevin，我们就到此为止。非常感谢你的见解，当然，我们也会继续关注此事。谢谢。Kevin Cu说：“谢谢邀请。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Well, Kevin, we are going to leave it there. Really appreciate the insights and of course something that we will continue to follow. Appreciate it. >> Thank you for having me.</p>
</details>