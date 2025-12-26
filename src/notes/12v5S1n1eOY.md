---
area: "tech-engineering"
category: technology
companies_orgs:
- OpenAI
- Anthropic
date: '2025-08-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemini
- Llama
- GPT-2
- GPT-3
project: []
series: ''
source: https://www.youtube.com/watch?v=12v5S1n1eOY
speaker: AI Engineer
status: evergreen
summary: Box公司首席技术官Ben Kuss分享了Box在AI领域的探索，特别是其代理式AI平台的构建历程。Box作为领先的非结构化内容平台，面临从海量企业非结构化数据中提取信息的挑战。尽管早期生成式AI模型表现出色，但面对复杂文档、OCR难题和准确性要求时，传统方法和单纯依赖模型升级不足以解决问题。Box转而采用代理式AI架构，通过智能工作流、多模型协作和反馈机制，显著提升了数据提取的准确性和系统的可演进性。Kuss强调，及早构建代理式AI架构对于解决复杂企业AI挑战至关重要。
tags:
- agentic-ai
- content
- data
- enterprise-ai
- platform
title: Box公司CTO Ben Kuss：构建代理式AI平台——Box的AI代理之旅
---
### Box的AI代理之旅：从非结构化内容到智能平台

大家好。我是Box公司的**CTO**（Chief Technology Officer: 首席技术官）Ben Kuss。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello. Um, so I'm Ben Kuss. I'm CTO Box</p>
</details>

今天我将分享我们在AI领域的旅程，特别是我们的**AI代理**（AI Agent: 能够理解指令、规划行动、使用工具并与环境交互以达成目标的AI系统）之旅。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I'm going to talk today about our journey of uh through AI and in particular our AI agentic journey. Um</p>
</details>

如果您对**Box**（公司名: 一家领先的非结构化内容管理平台提供商）不太了解，这里有一些背景信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and uh if you don't know much about Box, uh a little bit of background. Um so at</p>
</details>

Box是一个**非结构化内容平台**（Unstructured Content Platform: 专注于管理和处理文档、图片、视频等非结构化数据的平台）。我们已经存在了超过15年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Box, we are um a unstructured content platform. Uh we've been around for a while, uh more than 15 years. And um our</p>
</details>

我们非常专注于大型**企业客户**（Enterprise Customers: 指大型公司和组织客户）。我们拥有超过115,000家企业客户，其中包含三分之二的**财富500强**（Fortune 500: 《财富》杂志评选的美国500家最大公司）企业。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we very much concentrate on large enterprises. So uh we've got uh over 115,000 enterprise customers. We've got uh twothirds of the Fortune 500. And um</p>
</details>

我们的主要工作是为这些客户提供他们希望对其内容进行的一切操作，并提供他们可能需要的所有功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">our job really is to bring everything you'd want to do with your content to these customers and to provide them all the capabilities they might want. In</p>
</details>

在许多情况下，对于AI，这些客户的首次AI部署实际上是与Box合作完成的，因为许多企业非常担心数据安全问题，并担心AI导致数据泄露。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">many cases uh for AI many of these customers their first AI deployment was actually with box because um of course many enterprises uh worry a lot about data concern security concerns and worry about data leakage with AI make sure to</p>
</details>

他们希望确保AI使用安全可靠，而这正是我们长期以来一直擅长的领域。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">do safe and secure AI and this is one thing that we have specialized in over time. Um</p>
</details>

我们对AI的思考是在平台层面进行的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the way that we think about um AI is at a platform level. So um we</p>
</details>

我们拥有Box的历史版本，它包含了全球基础设施的概念，即管理和维护大规模内容所需的一切。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">have sort of the historic version of Box which um has the idea of the global infrastructure sort of everything you need to manage and maintain content at scale.</p>
</details>

我们拥有超过一个艾字节的数据，客户信任我们管理着数千亿个文件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've got over an exabyte of data. We have an awful lot of of uh hundreds of billions of of files that our customers have trusted us with. Um</p>
</details>

除了作为非结构化数据平台提供的服务类型之外，我们还拥有保护这些数据的天然方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we have the natural way to protect them in addition to the type of services that you provide when you're an unstructured data platform.</p>
</details>

但在过去的几年里，我们一直在投资的关键领域之一是在平台之上构建AI功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then for the last few years um one of the key things we've been investing in has been in AI on top of the platform. And I'm</p>
</details>

我今天来这里就是想告诉大家我们在这方面的旅程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">here to tell you a bit about our journey here.</p>
</details>

### 生成式AI的早期成功与挑战

我们于2023年开启了我们的旅程，那是在**生成式AI**（Generative AI: 能够生成文本、图像、代码等新内容的AI模型）变得可用于生产之后不久。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um we started our journey in 2023 uh shortly after uh AI became sort of production ready from a generative AI sense and everything I'm talking about</p>
</details>

当然，我今天所讲的一切都将是关于生成式AI的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">here today will be generative AI of course so um we ended up with a set of</p>
</details>

我们最终开发了一系列功能，例如跨文档的**QA**（Question Answering: 问答系统）、**数据提取**（Data Extraction: 从非结构化数据中识别并抽取特定结构化信息的过程）以及AI驱动的工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">features things like QA across documents things like being able to extract data things like being able to do AI power workflows happy to talk about these in</p>
</details>

我很高兴能普遍地谈论这些功能，但今天我将重点关注我们所构建功能的一个方面，那就是数据提取。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">general but um today I'm going to focus on one aspect of uh the features that we built which is the idea of data extraction</p>
</details>

数据提取是指从您的**非结构化数据**（Unstructured Data: 没有预定义格式或组织方式的数据，如文本、图像、音频等）中获取**结构化数据**（Structured Data: 具有预定义格式和组织方式的数据，通常存储在数据库中），并以代理式方式使用它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the idea of taking structured data from your unstructured data and using that inpentic sort of um thing that you might think of</p>
</details>

这与您在考虑如何与AI交互时可能想到的其他示例（例如标准聊天机器人风格的集成）大不相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when you're uh thinking about these other examples about how you interact with AI. This is much less like a standard chatbot style integration. But</p>
</details>

我将告诉您我们学到了什么，以及代理式能力如何远远超出最终用户交互的范畴。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh what we learned and what I'll tell you about is how you the concepts of agentic uh uh capabilities applies well beyond just sort of a end user interactions.</p>
</details>

我们现在来谈谈数据提取。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um we'll be talking about data extraction for a moment. Just quick</p>
</details>

当我们谈论元数据或数据时，我们指的是非结构化数据中的内容，无论是文档、合同还是项目提案，任何可以转化为结构化数据的内容。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">background when we talk about metadata or data we talk about the things in unstructured data be it documents be it contracts be it project proposals anything that then turns into structured data.</p>
</details>

这在企业中是一个非常普遍的挑战：他们大约90%的数据是非结构化的，只有10%的数据是存储在数据库中的结构化数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this is a very common challenge in enterprises is that they have like 90% of their data is unstructured 10% of their data is in databases structured data. Um</p>
</details>

历史上，一直存在一个挑战，就是很难利用这些非结构化数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and uh and historically there has been this this challenge that like it was kind of hard to to utilize this.</p>
</details>

因此，许多客户长期以来一直希望有更好的方法来自动化处理他们的非结构化数据，因为数据量庞大，而且在某些情况下，它甚至是企业中最关键的信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So many many customers have for a very long time wish they had better ways to automate their unstructured data and there's a lot of it and it's really critical in some cases it's the most critical thing in an enterprise.</p>
</details>

您可以利用这些数据进行查询、启动工作流，并对所有数据进行更好的搜索和过滤。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um uh the things you do with it would be to like uh um query your data, being able to kick off workflows, being able to do um just a better search and filtering across all of your data.</p>
</details>

一个典型的例子是合同，它是一份权威的非结构化数据，但其中包含的关键字段非常重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so so this like uh the prototypical example, this is something like a contract where you have an authoritative unstructured piece of data, but then also uh the the key fields in there are are very important.</p>
</details>

### 传统数据提取的局限性

这并不是一个新事物。多年来，包括Box在内的整个世界都对从非结构化数据中提取结构化数据很感兴趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um this is not a new thing. for many many years uh the world uh for box included has been interested in pulling out unstructured structured data from unstructured data and um there were a</p>
</details>

有很多技术可以做到这一点，甚至有一个完整的行业，如果您听说过**IDP**（Intelligent Document Processing: 智能文档处理，利用AI技术从文档中自动提取和处理信息），这是一个价值数十亿美元的行业，其主要工作就是进行这种提取。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">lot of techniques to do this and there there's a whole industry if you ever heard of IDP this is like a a multi-billion dollar industry whose job in life was to do this kind of of of of uh extraction but it was really hard you</p>
</details>

但这真的很难。您必须构建专门的**AI模型**，专注于特定类型的内容，需要庞大的训练数据集。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">had to build these specialized AI models uh you had to like focus on specific types of content you had to have this huge corpus of training data often times</p>
</details>

通常您需要定制供应商，定制**ML模型**（Machine Learning Models: 机器学习模型），而且这些模型非常脆弱。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you need to build custom vendors, your custom uh uh ML models that you make and it was quite brittle and to the point</p>
</details>

以至于很少有公司考虑自动化处理他们最关键的非结构化数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">not a lot of companies ever thought about automating most of their most their critical unstructured data.</p>
</details>

这就是长期以来行业的现状，就像“别费心去处理非结构化数据了，尽一切可能将其转化为某种结构化格式，但不要太努力去处理那些非结构化数据”，直到**生成式AI**的出现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this was sort of the state of the industry for a very long time like uh just um don't bother trying too hard with unstructured data. Do everything you can to get it in in some sort of structured format but don't try to too too hard to deal with that structured data until generative AI came along. And</p>
</details>

所以，我们与AI的旅程就是从这里开始的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so this is where our our journey uh sort of begins with AI uh is for a long time</p>
</details>

长期以来，我们一直以不同的方式使用ML模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we've been using ML models of different uh in different ways and we it in and</p>
</details>

当我们面对**GPT-2**（Generative Pre-trained Transformer 2: OpenAI开发的大型语言模型系列）和**GPT-3**（Generative Pre-trained Transformer 3: OpenAI开发的大型语言模型系列）风格的AI模型时，我们尝试的第一件事就是直接问AI模型：“我有一个问题，你能提取这种数据吗？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the first thing that we tried um when confronted with sort of a GPT2 GPT3 style of of of uh of AI models is that you just say uh I have a question for you AI model would can you extract this kind of data and in the same and and as</p>
</details>

正如我们大多数人都知道的，AI不仅擅长生成内容，还擅长理解内容的细微之处。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we mostly all know is is is uh AI is not only great at um generating uh uh content. It's also great at understanding the nuances of content.</p>
</details>

所以，我们首先进行了一些预处理，例如**OCR**（Optical Character Recognition: 光学字符识别，将图像中的文本转换为可编辑文本的技术）步骤，这是经典的实现方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this uh so what we did we we first start out with um some some uh pre-processing you know doing sort of um OCR steps classic ways to do this um and then</p>
</details>

然后，我们能够说“我想提取这些字段”，通过标准的AI调用，一次性或通过一些提示修饰。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">being able to then say I want to extract these fields standard AI calls single shot or with some some decoration of the on the prompts um and this worked great.</p>
</details>

这效果非常好，令人惊叹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was amazing. This was something where suddenly a standard generic off-the-shelf AI model from multiple</p>
</details>

突然之间，来自多个供应商的标准通用现成AI模型，其性能甚至超过了过去最好的模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">vendors could outperform even the best sort of models that you had seen in the past.</p>
</details>

我们支持多种模型以防万一，而且它们变得越来越好，这非常棒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and uh we supported multiple models just in case and then it got better and better. This was wonderful.</p>
</details>

因此，它非常灵活，可以应用于任何类型的数据，并且表现良好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this was flexible. You could do it across any kind of data. You could it performed well. Um it was uh uh yes you had to do</p>
</details>

是的，您需要进行OCR和预处理，但这很简单。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OCR and pre-process it but that was straightforward. And so we were just</p>
</details>

我们非常兴奋，这就像是AI的新一代。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">thrilled. This was like uh for us it was like this is this is this is a new generation of of of AI and um</p>
</details>

有趣的是，我们会去告诉客户我们可以在各种数据上做到这一点，然后他们会给我们一些数据，并且确实奏效了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">interestingly we would go to our customers and say we can do this across a data and then they would give us some and it would work and then we'd be like</p>
</details>

我们当时觉得AI模型太棒了，直到他们说：“哦，既然你做得这么好，我明白了，那这个呢？这份300页的租约文件，有300个字段，怎么办？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">great AI models are awesome until they said oh now uh now that you do that well and I I get it now what about this one? What about this 300page lease document with 300 fields?</p>
</details>

“这些真正复杂的数字资产怎么办？你们想提出这些真正复杂的问题。我不仅想提取数据，还想进行风险评估等更复杂的字段，怎么办？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What about this really complex uh set of digital assets? You want to give these really complex questions associated with it. what about I want to do not just extract data I want to do risk assessments and things that are these like more complex fields</p>
</details>

您开始意识到：“嗯，作为一个人类，如果有人问我这个问题，我也会很难回答。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you start to realize huh like this as a human when I if you ask me that question I'm struggling to answer it um and then</p>
</details>

同样，AI也开始难以回答。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the same way the AI started to struggle to to answer it so um suddenly</p>
</details>

突然之间，我们面临着更复杂的文档。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we ended up uh with um more complex documents</p>
</details>

此外，OCR本身就是一个难题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um also OCR is just a hard problem uh like like there's no seemingly like no end of of of uh heristics and tricks that you do on OCR to get it right</p>
</details>

似乎没有尽头的启发式方法和技巧可以用来完善OCR。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I've got a scan document, somebody writes stuff in it, somebody crosses stuff out. It's just hard. Um, and then and then um</p>
</details>

比如，一份扫描文档，有人在上面写字，有人划掉内容，这很难处理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for people who have dealt with like things like different file formats, PDFs, like um it's a challenge.</p>
</details>

对于处理过不同文件格式（如PDF）的人来说，这是一个挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, whenever the OCR broke, it would just naturally give bad info to the AI and</p>
</details>

因此，每当OCR出现问题时，它自然会向AI提供错误信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then um languages were a big pain. Um and and so we started to get more and</p>
</details>

语言也是一个大麻烦。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">more challenges as we have an international set of customers across different use cases. Um, also there was</p>
</details>

随着我们拥有跨不同用例的国际客户群，我们面临的挑战也越来越多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a clear limit to the AI in terms of how much it could handle the uh attention to so many different fields.</p>
</details>

此外，AI在处理如此多不同字段时的注意力也存在明显的限制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you say here's 10 fields, here's a 10-page document, figure it out. They're great. Most of them are great.</p>
</details>

如果您说“这里有10个字段，这是一份10页的文档，请解决它”，它们做得很好，大多数都很好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you say here's a 100page document and here's a 100 fields that are each of them complex with separate instructions, then they it loses track and and I have sympathy</p>
</details>

但如果您说“这是一份100页的文档，有100个字段，每个字段都很复杂，并附有单独的说明”，那么它们就会迷失方向，我对此表示理解，因为人类也会迷失方向。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because people would lose track too. And so um this became very problematic</p>
</details>

这变得非常成问题，因为如果您在企业环境中需要高准确性，这种方法就行不通了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because if you want high accuracy in an enterprise setting like this just starts to not work. Um</p>
</details>

而且，什么是准确性？在旧的ML世界中，它们会给您置信度分数，例如0.865。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then also just like well what is accuracy? What does it mean in the old ML world? They give you confidence scores. 865 is this one versus</p>
</details>

当然，**大型语言模型**（LLM: Large Language Model）并不真正了解自己的准确性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then of course large language models don't really know their own accuracy. So we would implement things</p>
</details>

所以我们会实施像“**LLM作为评判者**”（LLM as a judge: 利用大型语言模型来评估另一个AI模型输出质量或准确性的方法）这样的功能，然后它会告诉您：“这是您的提取结果，但我们不太确定这是否正确。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like LM as a judge and we come back and tell you like here's your extraction. also we're not quite sure this is right</p>
</details>

然后我们的企业客户会觉得：“这很有用，但我想让它正常工作，而不是你告诉我它工作不正常。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and then our enterprise customers would kind of be like well that's helpful to know but like I want it to work right not just you tell me it doesn't work right</p>
</details>

因此，这变成了一系列我们专注于解决的挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so this became this kind of set of challenges that that that that um we we we focused on and so</p>
</details>

客户寻求速度和可负担性，他们希望这些功能能够奏效。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">customers were looking for speed they're looking for affordability they're making this work they're saying if AI is this future awesome thing then like you know</p>
</details>

他们说：“如果AI是未来如此棒的东西，那就展示给我看吧。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">show it to me and so and on these more complex documents so at this point we kind of hit our our despair moment um</p>
</details>

在这些更复杂的文档上，我们陷入了绝望。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">our we thought LLM's resolution everything we thought that like we could have these AI models that worked but um</p>
</details>

我们曾以为LLM能解决一切，以为这些AI模型能奏效，但我们实际上陷入了困境，不知道该怎么办，如何解决这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we actually struggled like what do you do now how do you fix this and I know let's just wait until uh the next Gemini model or uh you know OpenAI seems</p>
</details>

我们想：“那就等下一个**Gemini**模型或者**OpenAI**的下一个模型吧。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to be on top of this so like wait till the next one which is part of it right the models do get better but um the</p>
</details>

这确实是部分原因，模型确实会变得更好，但架构的脆弱性是我们无法独自解决的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">fragility of the architecture was one that was uh we weren't really going to be able to solve on our own so um</p>
</details>

### 转向代理式方法：解决方案

自然地，我们得出的答案之一就是将**代理式方法**（Agentic Approaches: 指构建能够自主规划、执行任务并与环境交互的AI代理的方法）引入我们所做的一切。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">naturally uh one of the answers uh that we were came up with was um bringing agentic approaches to everything that we do.</p>
</details>

这也是我在此次会议中想要强调的关键点之一，即解决数据提取等问题中的所有这些问题的方法是采用代理式交互，这在最初并非显而易见。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is really the the one of the key things that um I want to sort of bring out in this session is that um it certainly was not obvious that the way to fix all these problems in something like data extraction was to do a gentic style of interactions.</p>
</details>

当我提到“代理式”时，我指的是一个AI代理，它能够根据**指令、目标、工具、模型背景**来执行任务，并拥有安全访问权限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when I say agentic, I mean an AI agent that does something like this instructions, objectives with the model background tools, we can make have secure access.</p>
</details>

当然，它具有记忆功能，用于推进和查找系统内部信息，但也具有完整的**有向图**（Directed Graph: 一种图论结构，其中边具有方向性，表示任务或数据流的顺序）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, it has memory from the purposes of of advancing and being able to look up information inside of of of the system, but also with a uh full uh directed graph.</p>
</details>

因此，它能够进行编排，能够执行“先做这个，再做那个”之类的任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the ability to orchestrate it to be able to do things like where you say do this then this.</p>
</details>

它要么自己制定计划，要么我们可以根据我们希望它做什么来亲自编排它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Either it comes up with its own plan or we actually can orchestrate it ourselves because we have knowledge of what we want it to do.</p>
</details>

对我们来说，这在当时是有争议的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this was for us um it was controversial like it was like our engineers like what are you talking about like let's just make the OCR</p>
</details>

我们的工程师会说：“你在说什么？我们不如把OCR做得更好。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">better like uh like let's just add another step somewhere like let's just add a post-processing uh regular regular expression checks and then and then of</p>
</details>

“不如在某个地方再加一步，比如添加一个后处理的正则表达式检查。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">course everybody always like I have a way to do this um based on the old way of doing this why don't we make train ML model like why don't we fine-tune and</p>
</details>

当然，每个人总是说：“我有一种基于旧方法来做这件事的方式，我们为什么不训练ML模型呢？我们为什么不**微调**（Fine-tuning: 对预训练的AI模型进行进一步训练，以适应特定任务或数据集）呢？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then and and then and then and then and then and then and then and then and then and then and then and then and and so</p>
</details>

这样一来，所有的通用性都会在这个过程中丧失。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">suddenly all of the genericness of it would be get lost in this process so um</p>
</details>

所以我们提出了一种机制，这有点像**LangGraph**（一个用于构建基于LLM的复杂代理工作流的库）风格，它们具有代理式能力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we came up with a mechanism which was a uh so this is uh think like kind of langraph style they have agentic capabilities and um so we still we went</p>
</details>

我们仍然有相同的输入和输出，即带有字段和答案的文档。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we still had the same inputs and outputs in document with fields out answers however the approach was an agentic approach and so um you know we</p>
</details>

然而，我们采用的是代理式方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">played with all the models uh reflecting uh back and forth and criticism uh being able to uh uh separate in multiple tasks uh to be able to have different multi</p>
</details>

我们尝试了所有模型，反复进行反思和批评，能够将任务分解为多个子任务，并让不同的多页系统协同工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">page systems work on this and we ended up with something like this where you have a step where you prepare the fields you go through you group the fields</p>
</details>

我们最终得到了这样的结果：您有一个准备字段的步骤，然后对字段进行分组。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we learned quickly that like if if there's like a set of fields that are like customers uh from a contract and then or like like parties and then somewhere</p>
</details>

我们很快发现，如果有一组字段，比如合同中的客户或当事方，然后在其他地方有当事方的地址，您需要AI将它们一起处理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">else there's like the address of the parties like you need the AI to handle those together otherwise it's like you have three parties and two sets of addresses which don't match match</p>
</details>

否则，您可能会有三个当事方和两组不匹配的地址。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we we so we had to break up intelligently the set of fields we had to go through and we had to um uh like uh uh do multiple queries on a document</p>
</details>

所以我们必须智能地分解字段集，进行多次文档查询。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then after we got that, we would then use a set of tools to check and to double check the results.</p>
</details>

然后，在获取结果后，我们会使用一套工具来检查并再次核对结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In some cases, we use OCR. We then double check it by looking at pictures of the pages. Um,</p>
</details>

在某些情况下，我们使用OCR，然后通过查看页面图片进行双重检查。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and then using multiple models. Sometimes they vote and they're like, "Wow, like this is a hard question.</p>
</details>

然后使用**多模型**（Multiple Models: 指同时使用来自不同供应商或架构的多个AI模型）。有时它们会投票，然后说：“哇，这是一个难题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Three models from different vendors, two of them think this is the answer. That was probably a good answer."</p>
</details>

来自不同供应商的三个模型，其中两个认为这是答案。那可能是一个好答案。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then on to the idea of the element as a judge. not just a judge to tell you that this is a um this is the answer, but a</p>
</details>

然后是“LLM作为评判者”的概念。它不仅仅是告诉您这是答案的评判者，还是一个告诉您“嘿，这里有一些反馈，请继续尝试”的评判者。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">judge to tell you uh hey uh here's some feedback, keep trying. Now, of course, this takes a little bit longer um but uh</p>
</details>

当然，这会花费更长的时间，但这最终会带来您想要的整体准确性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is something that then leads to the kind of accuracy that you'd want overall.</p>
</details>

所以对我们来说，这就是帮助我们解决一系列问题的架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for us, this was the um the uh uh the architecture that then helped us solve a set of problems.</p>
</details>

这变得很有趣，因为每次出现新的挑战时，答案都不是“重新思考一切”或“让我们尝试一套全新的方法，哦，给我们六个月，我们会想出一个新主意”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it became um interesting because every time there was a new set of challenges, the answer was not rethink everything or let's then try like a whole new set of like oh you know give us six months and and we'll come up with a new idea but uh</p>
</details>

而是“如果我们改变那个提示，或者在最后再加一个双重检查，我们就能解决这个问题。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wonder if we change that prompt on that one note or I wonder if we add another double check at the end then we can actually start to solve this problem.</p>
</details>

所以我们利用AI的智能来帮助我们解决以前认为是标准功能的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we bring the power of AI intelligence to help us then solve something that we used to think of as a standard function.</p>
</details>

### 代理式架构的演进与经验教训

不仅如此，它还在其他方面帮助了我们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then not only that, it it helped us in other ways. Like, so we we're naturally as an unstructured content</p>
</details>

作为非结构化内容存储平台，您总是会看到人们做的第一件事是：“我有很多文档，我有一个问题。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">store, like one of the first things you always see people if I can give you a demo right now, it's I have a bunch of of documents. I have a question.</p>
</details>

我们也遇到了同样的情况。我们有一个评判者，它会告诉我们：“哦，这是一个好答案”或“这不是一个好答案”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we had the same thing. We had a judge and it would be like it would tell us like, oh, that was a good answer or that wasn't.</p>
</details>

那么，如果答案不好，为什么不尝试再次尝试，并告诉AI“再试一次”呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then why not just if it's not a good answer, we'll take another bait and and tell the AI like, uh, try again.</p>
</details>

在您告诉用户这个答案之前，我希望您先反思一下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before you tell the user this answer, like I want you to um, uh, like reflect on it for a second.</p>
</details>

这种做法只会带来更高的准确性，但也带来了更多的复杂性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this kind of thing just leads to higher accuracy. And then it also leads to much more complexity.</p>
</details>

所以我们刚刚宣布了我们对内容进行深度研究的能力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we just announced our deep research capabilities on your content. So in the same way that like</p>
</details>

就像OpenAI或Gemini在互联网上进行深度研究一样，我们让您可以在Box中对自己的数据进行深度研究，这看起来会是这样的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OpenAI or Gemini does deep research on the internet, we let you do deep research on your data in box would look something like this.</p>
</details>

这大致就是您将拥有的有向图，您会经历以下过程：首先搜索数据，花一段时间找出相关内容，进行双重检查，然后制定一个大纲，准备一个计划，然后制定一个流程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this would be like roughly the the directed graph that you'd have where you go through you know first we searched for the data kind of do that for a while figure out what's relevant double check then make an outline kind of prepare a plan go through um um make make a a process.</p>
</details>

这都是代理式思维，如果没有建立代理式基础的框架，这种事情真的不可能实现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is all agentic thinking and it and and this kind of thing wouldn't really be possible if we hadn't kind of laid the fra the framework of having an agentic foundation overall.</p>
</details>

最后，我想和大家分享一些经验教训。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um I will leave you with uh these uh a few lessons learned here. Um so this</p>
</details>

这些是基于我们过去几年经验的总结。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is based on our time in the last few years. Um the first is uh that um it</p>
</details>

首先，我们最初并没有意识到，但从架构角度来看，代理式抽象层实际上非常清晰。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">wasn't obvious to us at first but the agentic uh abstraction layer from an architecture perspective is actually quite clean.</p>
</details>

一旦您开始以这种方式思考，就会很自然地认为：“我将运行一个智能工作流，一个由AI模型驱动的智能有向图，每一步都能完成一项任务。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is it is very um once you start to think this way it is very natural to think I'm going to run an intelligent workflow intelligent directed graph powered by a models are every step to be able to accomplish a task not everything but sometimes that's</p>
</details>

并非所有任务都如此，但有时这是一种很好的方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a great that's a great approach and this and this is independent of some of a highcale set of of sort of distributed system design and and in both are</p>
</details>

这与一些大规模分布式系统设计是独立的，两者都很重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">important like at some point you have to deal with you know 100 million documents that day at the same other point you have to deal with that one and so being</p>
</details>

在某个时候，您必须处理每天1亿份文档，而在另一个时候，您必须处理那一份文档。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">able to separate these two systems into like somebody who thinks about the agentic framework and somebody who thinks about the the how to scale a generic process is this is this is very helpful to keep these distinct.</p>
</details>

因此，将这两个系统分开，让一个人思考代理式框架，另一个人思考如何扩展通用流程，这对于保持它们的区别非常有帮助。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, also it's just easy to evolve. Like, uh, in that deep research example, one of our biggest we we we did it and then it</p>
</details>

此外，它很容易演进。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">worked really well except for the output was kind of sloppy and so we were like, ah, I guess we got to redesign the whole thing or add another note at the end to</p>
</details>

在深度研究的例子中，我们做得很好，但输出有点粗糙，所以我们想：“啊，看来我们得重新设计整个系统，或者在最后再加一个节点，让它按照这个要求进行总结。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">say summarize this in according to this and it would just take that in and just redo the output. Took not that long to fix.</p>
</details>

它就会接受这个指令并重新生成输出，修复起来并没有花很长时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this was something that was not obvious to me until later, which is that um if you're going to be using um a</p>
</details>

直到后来我才明白这一点，那就是如果您要与一个经验丰富的团队一起使用代理式AI，您需要让他们首先开始以代理式思维、AI优先的思维方式思考。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">aentic uh uh AI with a team who's been around for a while, like you start to need to get them to think about agentic first kind of thinking, AI first thinking.</p>
</details>

做到这一点的一种方法是让他们构建一些东西，这样他们就可以开始思考：“哦，这不仅是我们如何构建更多东西的方式，而且因为我们也是为企业客户提供服务的平台，他们可以思考如何让它变得更好，为他们做得更好。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one way to do that is to um let them build something so they can start to think, oh, like this is not only how we can build more things, but also because we're also a platform for our enterprise customers, they can think about how to make it better make it better for them.</p>
</details>

所以，比如，真正加倍努力地思考“我们发布MCP服务器，对他们来说工具有哪些？我们能做些什么让它更容易？我们如何进行代理到代理的通信等等。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So things like uh really doubling down on the idea of um we we publish MCP servers, what are the tools like for them, what can we do to make it easier, how can we do our agent to agent communications and so on.</p>
</details>

所以，如果遇到挑战，我们学到的教训是，如果一套AI模型有可能帮助您解决问题，那么您应该尽早构建这种AI代理式架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um this is uh all kind of summed up with is if you're confronted with a challenge, the lesson that we learned is that if it's plausible that an a set of AI models uh could help you solve that problem, then you should build this AI agentic architecture early.</p>
</details>

如果时光倒流，我希望我们能更早地做到这一点，因为那样我们就能继续利用它的优势。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I go back in time, I would wish to done this sooner because then we'd kind of be have been able to continue to take advantage of that.</p>
</details>

这就是我的旅程，也是我给您的教训。谢谢。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and so that's my uh that's my journey and that's my my my lesson for you. Uh, so thank you</p>
</details>

### 问答环节：API、评估与微调

我们还有两分钟。好的，如果有人有问题，我很乐意回答。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh an are we um two minutes. Okay. So um if any what >> two questions okay if anybody has any questions I'm happy to answer them</p>
</details>

问题是：“这是否可以通过**API**（Application Programming Interface: 应用程序编程接口）获得？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> uh question being is this available as API? Yes.</p>
</details>

是的。我们非常注重API优先。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so we are very API first oriented. So we have an agent API that you can call upon these agents to do things and give them the arguments.</p>
</details>

我们有一个代理API，您可以调用这些代理来执行任务并提供参数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yes uh we we we provide agent uh just APIs across everything and tools um to to call our APIs.</p>
</details>

是的，我们为所有功能提供代理API和调用我们API的工具。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um >> okay think when you start using a more manual approach as well.</p>
</details>

关于如何评估我们的代理，我们不仅使用“LLM作为评判者”，还创建了**评估集**（Eval Sets: 用于评估AI模型性能的测试数据集）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um in terms of evaluating our agents and how do we do that? Um so we we not only use LM as a judge but we also create eval sets.</p>
</details>

我们有标准的评估集。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have our standard set of eval sets. Um and then we've learned that um since the gets go so good over</p>
</details>

我们发现，随着时间的推移，模型会变得越来越好，所以我们创建了一套“挑战评估集”，以便更好地探索那些不常被问到但如果被问到会非常困难的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">time we created a challenge set of of eval sets to so that we can better explore like things that not everybody asked but if they did it would be really hard and then that way you can better</p>
</details>

这样，您就可以更好地判断您是否不仅为现在做好了准备，而且随着人们提出更具挑战性的问题，我们知道我们能够应对。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">decide on whether or not you're not only prepared for now but as people get more challenging things we we know that we can grow across that.</p>
</details>

所以，这是评估集、LLM作为评判者以及让人提供反馈的结合。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a mixture of eval plus as a judge plus the idea of just having people give feedback. We we have limited ability to look as an</p>
</details>

作为一家企业公司，我们查看正在发生的事情的能力有限，但他们告诉我们的反馈在所有情况下仍然有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">enterprise company what happening but the the the idea of them telling us this is still useful in all cases</p>
</details>

如果您想大声喊，我会听到您的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> you can yell if you want I'll hear you >> so apologies if</p>
</details>

问题是：“既然可以微调模型，为什么还要费心使用代理？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you seems like you're mostly building agents but at least together you know by >> uh so the question being why bother with agents if you can find tune a model. Um,</p>
</details>

我们目前非常反对微调，因为一旦您微调了某个东西，您就必须微调其未来的所有演进版本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> no. >> Have you tried Have you tried fine-tuning agents? >> We're um we're pretty anti- fine-tuning at this moment because um of the challenges of once you fine-tune something, you have to then fine-tune all of the evolutions of them going forward.</p>
</details>

我们支持多种模型，包括Gemini、Llama、OpenAI和Anthropic，很难在所有模型上始终如一地进行微调。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We support mult multiple models, Gemini, Llama, OpenAI, Anthropic, and it's just hard to consistently fine-tune across the board</p>
</details>

而且通常模型的下一个版本会变得更好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in ways that like not only and usually just the next version of the model gets better.</p>
</details>

所以我们已经达到了使用**提示工程**（Prompt Engineering: 设计和优化给AI模型的输入提示，以获得更好的输出）、**缓存提示**（Cached Prompts: 存储和重用常用或优化过的AI提示，以提高效率和一致性）或代理式方法，而不是微调的程度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we've we've got to the point where we use use prompts or cache prompts or agenticness as opposed to fine-tuning.</p>
</details>

对于我们特定的用例，这种方法效果非常好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the approach for our particular use cases that works quite well.</p>
</details>

好的，谢谢大家。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, thank you everyone.</p>
</details>