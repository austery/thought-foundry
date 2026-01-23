---
author: EO
date: '2026-01-22'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=LgewaIpQVko
speaker: EO
tags:
  - prompt-engineering
  - ai-search
  - neural-networks
  - startup-journey
  - large-language-models
title: 从争议到独角兽：You.com创始人如何重塑AI搜索与提示工程
summary: 本文聚焦You.com创始人Richard Socher的创业历程与AI理念。他回顾了2010年提出神经网络用于自然语言处理（NLP）时的巨大争议与学术界的普遍质疑，以及他如何坚持从第一性原理出发，最终发明了提示工程（Prompt Engineering）。文章阐述了语言作为人类智能核心的意义，并强调了构建强大的搜索基础设施对于防止大型语言模型（LLM）“幻觉”的关键作用。Socher分享了他从学术界转向工业界，创办MetaMind、被Salesforce收购，再到创立You.com，将LLM融入搜索引擎的创新之路，并探讨了AI发展的现实影响与未来加速的必要性，以及企业级解决方案的价值。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - You.com
  - OpenAI
  - Google
  - Salesforce
products_models: []
media_books: []
status: evergreen
---
### 早期争议与学术质疑

在2010年，我提出了一个大胆的想法：将神经网络应用于自然语言处理（NLP）。这在当时是一个极具争议的观点。许多该领域的专家断言：“哦，神经网络永远行不通。” 我的大部分论文因此被拒，因为当时人们普遍排斥神经网络在NLP中的应用。即使是像麻省理工学院（MIT）和特别是湾区这里的加州大学伯克利分校，也对神经网络在自然语言处理中的应用持否定态度。然而，正是这段经历孕育了**提示工程**（Prompt Engineering）的雏形，我们当时就认为人们应该能够接触到这项技术。

这种坚持源于对有意义事物的追求，而非仅仅追逐流行。当一个想法从第一性原理出发，让你觉得它切实可行时，你就必须拥有内在的信念，相信自己能够克服重重阻碍和拒绝，并坚持下去。

<details>
<summary>Original English</summary>
had the crazy idea in 2010 to use neural networks for natural language processing which was a very controversial idea at the time. A lot of people in the field said, "Oh, neural networks, they never work. They won't ever work." Most of my papers got rejected cuz people hated neural nets for NLP. MIT and especially Berkeley here in the Bay Area, they hated neural networks for natural language processing too. We had invented prompt engineering and so we thought people should get access to this. We felt like well someone's got to do it. In 2020 when we started.com a lot of people said search is dead. nothing you can do. But I don't really generally care about what's popular. I just care about what's meaningful. When you once you really love an idea and you feel like that idea makes sense from first principles, you have to have a little bit of that belief inside of you that you can make it prevail through a lot of rejection and still keep on going.
</details>

### 探索语言与智能的本质

我最初来自德国，年轻时曾深入思考生命的意义。早在高中时期，我就对自然语言产生了浓厚兴趣，学习了英语、法语和中文。同时，我也热爱数学。数学与语言学通常被视为截然不同的领域，但它们在计算机科学中交汇，即利用数学来理解语言。因此，我最终在2003年选择了攻读**语言学计算机科学**（Linguistic Computer Science）。在当时的德国，这绝对不是一个热门或广为人知的专业。语言学计算机科学，正如当时所称呼的那样，是一个非常小众的“稀有品种”，研究者寥寥无几。我至今仍记得父亲的担忧：“我的儿子将来会怎样？这个语言学计算机科学听起来一点用都没有。” 但我始终坚信，我所追求的是有意义的，而非仅仅是流行的。我预感到，如果能在研究层面真正实现它，将产生巨大的影响。

归根结底，语言是人类智能最迷人的体现。并非所有文明都发展出了书面语言，而那些未能做到的文明，最终都落后了。如今，我们看到类似的趋势：不使用人工智能（AI）的文明正在落后。因此，帮助我们理解语言，最终意义非凡，因为它帮助我们理解作为人类的自身。它也为理解智能本身提供了路径，并有助于创造智能，因为我们能够创造的东西，往往也能通过工程化手段更好地理解。

<details>
<summary>Original English</summary>
I originally from Germany. I thought a lot about sort of the meaning of life when I was younger. In high school already, I love natural languages. You know, I studied English. I'm originally from Germany and French and Chinese and but I also love math. And so math and languages don't intersect often, right? It's very different fields of study, but they do intersect in a computer where you try to use math to understand language. And so I ended up deciding study linguistic computer science in 2003. It was definitely not famous or or popular in Germany. Linguistic computer science as it was called then was very much a niche orchid type of subject that very few people were studying. Still remember my my dad thinkingh what what will become of my son cuz this linguistic computer science thing doesn't sound like anything useful for ever like uh for a long time and but I don't really generally care about what's popular. I just care about what's meaningful. And then it felt to me like if we could really get that to work uh on the research side, it would have an amazing impact. Ultimately, language is the most interesting manifestation of human intelligence. Several civilizations were able to create written language to not all of them, right? And the ones that didn't were falling behind and we're saying similar things. Civilizations that don't use AI now are falling behind. And so ultimately I think it's very meaningful to help us understand language because it helps us understand who we are as humans. And then it uh also uh actually helps in on the journey to understanding intelligence. It helps to create it because anything we can create we can engineer we understand a lot better afterward.
</details>

### 神经网络的理论基石

我们的大脑和你的大脑一样，都充满了紧密连接并相互通信的神经元。在计算机中，我们可以构建所谓的**人工神经网络**（Artificial Neural Network），其技术术语也称为“连接主义学习算法”。我们可以构建一个神经网络来模拟所有这些神经元相互连接和通信的过程。在斯坦福大学，我有幸听安德鲁·吴（Andrew Ng）谈论深度学习和用于计算机视觉的神经网络。从第一性原理出发，我认为神经网络是正确的方向，因为当时许多研究都集中在**特征工程**（Feature Engineering）上。例如，在情感分析中，人们会定义“积极词汇”，处理“否定词”，并由语言学家设计各种特征。但这种方法显然无法扩展到更复杂的任务，如机器翻译。我希望统一这个领域，这最终引导我们走向了提示工程及其发明。

博士毕业后，我意识到我们已经掌握了核心要素：知道如何让它工作，需要大型神经网络和海量数据。我在所有研究论文中都展示了这一点。现在，我们需要将其规模化，将这些想法应用于真实世界的应用，服务于真实的人们。过去几年发表的许多论文都对现有技术有所改进，但**端到端可训练神经网络**（End-to-end Trainable Neural Networks）和**大规模数据集**（Large Datasets）这两个核心理念，才是真正推动该领域前进的关键。我感觉现在是时候大规模推广这些技术了。然而，在学术界，你缺乏真正实现规模化所需的资源。虽然我当时对扩展技术感到兴奋，但我认为我本应做得更多。我曾以为筹集了1000万到2000万美元就足够了，但现在回想，我应该筹集2亿美元甚至10亿美元才能真正实现更大规模的推广。因此，我清楚地认识到，要实现真正的规模化，必须在工业界进行。当时，技术已经成熟，可以从学术研究走向现实世界。当你追求最大化影响，并意识到核心理念已得到充分研究，是时候将其应用于现实世界时，创办一家初创公司就显得顺理成章了。

<details>
<summary>Original English</summary>
>> Your brain and mine are jam-packed full of neurons that are tightly connected to and they talk to each other. in a computer. We can therefore build what's called an artificial neuronet network or the the other technical term is a sponse learning algorithm. But we can build a neuronet network that simulates all of these neurons being connected to and talking to each other. And then I was very fortunate uh at Stanford to hear Andrew talk about deep learning and neural nets for computer vision. It made sense to me from first principles that neural networks would be right because a lot of the research actually was about feature engineering that were people were doing at the time like in sentiment analysis you might say oh these are positive words and this is how negation works and here's like all these like linguists would come up with features and that clearly wouldn't scale to more complex things like translation and I wanted to unify also uh the field and that eventually led us to prompt engineering and inventing that but then after the PhD I was like now we have the main ingredients. We know how to make it work. We need large neural networks. We need a lot of data. And I showed that in all my research papers. And now we need to actually scale it up. We need to like take those ideas and apply them into real applications for real people. And I think a lot of the papers that came out in the last couple of years, they made everything a little bit better. But those main ideas of endtoend trainable neural networks on large data sets, that is the main idea. That's those those ingredients are the main ideas that push the field forward. And I felt like it made more sense now to majorly scale that. And then in academia, you just don't have the resources to really scale. And then while I was excited about scaling it, I should have scaled it even more. You know, I thought, oh, I raised like 1020 million, but I should have raised $200 million or a billion dollars to really scale it more. So it was clear to me that to really scale it, you had to do it in industry. And that the technology was ready now to move out of academic research into the real world. And then when you maximize impact and you realize well the main ideas have we've been researched now it's time to really apply them in the real world and so startup uh felt like it made sense.
</details>

### 从MetaMind到You.com的创业之路

2014年毕业后，我创立了**MetaMind**。MetaMind本质上是一个AI平台，极大地简化了神经网络的训练过程。我们开始将其销售给企业，但销售模式要求我们必须专注于一个非常狭窄的细分市场。然而，我们构建了一个功能强大的通用平台。我意识到，如果这个平台能被一个庞大的销售团队掌握，它就能产生更大的影响力。在Salesforce，我们确实通过这种方式实现了巨大的影响力，这得益于我们构建公司的方式。我曾一度认为，在Salesforce进行令人惊叹的研究并改进大量产品就足够了，我们不仅在提示工程方面取得了进展，还在生物学领域为蛋白质构建了语言模型。

之后，我们发明了提示工程。我们训练了一个能够提供各种答案的神经网络。我们认为，显然人们应该获得这项技术的使用权。我们发表了一篇论文，这篇论文被OpenAI的其他人，如Alec Ratford和Ilya，引用并称赞为一个有趣的想法，他们在此基础上进行了扩展。但我们觉得，他们主要还是一个研究实验室，我们需要将这项技术带给真实的用户。而**Google**当时却无所作为，因为他们是垄断者，靠销售广告就能赚取越来越多的钱，所以他们看不到创新的必要性，也没有对我们搜索的根本方式进行任何有趣的改进。因此，我们觉得必须有人来做这件事。于是，我们创立了**You.com**。我们认为必须是一家新公司才能产生足够的影响力，真正成为在线信息发现的更好方式。最终，我们成为了首家将**大型语言模型**（Large Language Model, LLM）集成到搜索引擎中的公司。想象一下，就像Google Gemini一样，人们提问，然后获得AI的答案。我们在2021年就实现了类似的功能。这与众不同，因为这并非源于一个已有的研究背景，而博士研究的本质就是创造不存在的事物，提出新想法和新模型。当你思考应该构建哪些新想法和模型时，那些对人们有用的东西就显而易见了。当你问“如何编写一个斐波那契函数”或“如何编写一个能做某事的HTML页面”时，直接从LLM获得答案，显然比得到一堆链接列表，然后需要打开10个标签页去查找答案要好得多。因此，这便是我们发明这项技术的方式。

<details>
<summary>Original English</summary>
So I graduated in 2014 then started Metammind. Metammind uh was basically an AI platform that made it very easy to train neural networks. we had uh started selling it to but for selling you had to be very very focused on one small niche but we had built this very powerful platform and so felt like in the hands of a no pun intended sales force that is very large we could actually have much much more impact and the impact within Salesforce was much much larger for the way we had built that company and then I thought for a long time like I'll just be very happy cuz uh Salesforce and do amazing research and improve a lot of the products we did not just prompt engineering but we also built the are just language model for proteins for instance and biology. And then we had invented prompt engineering. And so we trained this one neural network that can give you all different kinds of answers. And so we thought clearly people should get access to this. and we published a paper and you know the paper got cited by other people at OpenAI and Alec Ratford and Ilia and they said oh this is an interesting idea and they extended it and and so on but we felt like well they're also a research lab so we needed to bring this to real people and Google was just not doing anything cuz they're a monopoly they're making money and more and more money just selling advertisement and so they didn't see a need reason and weren't making any interesting sort of modifications to fundamentally how we search and so we felt like well someone's has got to do it. And so we we started you.com and we felt like it had to be a new company to have the impact to really become a better way of finding information online. And eventually we became the first to put an LM into a search engine. Imagine you know Google Gemini like people also ask and you get like answers from AI. We did those kinds of things but in 2021. So it is different because it was no no one that didn't exist you know a research background where you the whole idea of being a PhD is to do things that don't exist right to create new ideas and and new models uh and and then you can often think about what kinds of new ideas and models should you build the kinds of things that are useful for people and when you ask like oh how do I write a Fibonacci function or how do I write an HTML page that does something it's just obvious that it's better to just get an answer from an LM than to guess get a list of blue links where you then have to click on 10 open tabs and open them up and then kind of uh find the answer somewhere else. Uh and so that just seems like from first principles it's better to get an answer than lists of links that may have the answer or not. So that's how we invented that one.
</details>

### 搜索基础设施与企业价值

我认为我们最大的突破在于向**企业级市场**（Enterprise）的转型。这是一个非常明智的战略重点。如今，许多公司都意识到AI的必要性，但只有专家才明白，要使AI准确无误，要让LLM不产生“幻觉”（Hallucinate），就必须拥有一个强大的搜索基础设施来为其提供信息。因此，我们构建了这个基础设施层，我们从2022年就开始致力于此。我们发现，越来越多的公司希望利用底层基础设施来构建自己的解决方案，融入其自有产品中。

这就像一个业务的“转型”（Pivot）。你可以说我们从制造相机转变为销售软饮料，这是一个巨大的转变。但我们从提供答案，到现在依然提供答案，只是销售这些答案的方式不同了。追随收入流是明智的：一部分人希望免费使用产品，而另一部分人则愿意为获取基于其自有定制数据集的优质答案付费。你应该追随那些愿意付费的人，追随真实的收入，而不是仅仅追逐“炒作”（Hype）。有些人说：“哦，我想免费使用这个产品。” 你可以回应：“太好了。” 但如果你构建了能让公司愿意付费的东西，你就真正创造了价值。

<details>
<summary>Original English</summary>
I think the biggest thing for us was the pivot into enterprise. That was a really good focus. A lot of folks now realize they need AI, but only the experts realize that in order to make AI accurate, in order to make an LM not hallucinate, you actually need to have a good search infrastructure to inform that LM. So, we built that infrastructure layer cuz we've been at it since 2022. What we found is more and more companies actually want to use the underlying infrastructure for their own solutions inside their own products. I guess you know there's sort of different pivots in the world right you can say oh we're make cameras and now we sell soft drinks right that's a big pivot but we gave people answers and now we give people answers but how we're selling those answers is different and it's good to follow the revenue here are a bunch of people who want to use the product for free and then here a bunch of people who want to use and get really good answers over their own custom data sets and they're willing to pay you follow the people that pay follow real revenue, not like, okay, hype. Some people say, oh, I want to use this product for free, and you're like, okay, that's great. But if you build something that uh companies are willing to pay for, you know, you've built something of value.
</details>

### 加速AI发展与现实影响

有些人认为我们应该放慢脚步，但我认为我们应该加速。我认为我们应该全力加速一切。理解AI的现状很有趣，也很困难。一方面，它带来了真实的**实际影响**（Real Impact）。我们的客户已经构建了超过10万个**智能体**（Agents），它们为他们的工作自动化了真实的任务，并且他们为此付费，因为这确实有价值且有效。另一方面，AI领域充斥着大量“炒作”，关于我们离**超级智能**（Super Intelligence）还有多远，我们是否走在正确的轨道上，浏览器能在多大程度上自动化任务而不了解我。有时，这些时间表会有些偏差，可能需要更长的时间。但这个领域发展如此之快，你必须以2到4周的周期来思考，以保持快速前进。

因此，重要的是要思考正确的应用场景，最好能创造**良性数据循环**（Virtuous Data Cycles）。即你先手动完成某项工作，收集数据，然后让决策过程变得更好，最终达到一个可以自动化的程度。例如，我当初不愿投资那些声称“我们甚至不需要方向盘，只需要一辆全自动驾驶汽车”的自动驾驶公司。我当时想：“天哪，在完美之前，你根本卖不出那辆车。” 这通常不是一个好策略。AI并非一开始就完美，人类也不是完美的，对吧？人类仍然会犯驾驶错误，AI也会犯一些驾驶错误。因此，拥有一个“方向盘”（即允许人类干预的机制）是好的。那些最终实现全自动驾驶的公司，要么是非常聪明的，比如**Tesla**。你购买汽车，支付产品费用，使用产品，然后通过使用产品创造了训练数据，AI随后可以利用这些数据来自动化流程。

当你看到持续的、微小的改进时，你就会获得极大的动力。我的一个座右铭是：“更好，更好，永无止境”（Better, better, never done）。你总能改进自己、公司和流程。总的来说，我会用“兴奋”来总结。我热爱AI，热爱它的一切方面，从基础研究和思考超级智能的上限，到如何让它现在真正工作，并将其交付给更多公司和用户，让他们生活得更好。

<details>
<summary>Original English</summary>
Some people think we should like slow down. I think we should accelerate more. I think we should accelerate everything a lot more. It's kind of interesting. It's hard to navigate AI because on the one hand there's real impact, right? Our customers have built over 100,000 agents that are automating real tasks for their work, right? And they're telling us and they're paying us for it because it's valuable and it's it works. At the same time, there's a lot of hype and around AI like how quickly and how far are we on super intelligence? Uh are we on the right track for that? How much could uh a browser automate complete tasks without knowing enough about me and things like that? And sometimes the timelines are a little bit off. You know, maybe it will take a little bit longer, but the field moves so quickly, you have to mostly think of like 2 to 4 week cycles to try to move quickly. Okay. And so it's important to think about what are the right applications where you can create ideally virtuous data cycles where you do something manually. You collect data and then you make that decision process a little bit better and then at some point you've made it good enough that you can automate it. And so I for instance didn't want to invest in a bunch of self-driving car companies that said we don't even need a steering wheel. We just need to like have a full self-driving car. And I was like, "Oh man, you can't sell that car until you're perfect." And so that's not generally good. AI is not right away perfect. Humans aren't perfect, right? Humans still make driving mistakes and so on. AI will make some driving mistakes, too. And so it's good to have a steering wheel. And so the companies that were able to eventually get to full self-driving were either the really clever ones like Tesla. You buy the car, you pay for the product, you use the product, you're now creating training data by using the product. And then the eye can use that training data and eventually automate uh the process. When you see small but continuous improvements, that's when you you can, you know, be very motivated too. So that's one of my mottos is better, better, never done, right? You can always improve uh yourself, your company, your processes. Overall, I would summarize it as excitement. I love AI. I love AI in all of its facets from foundational research and thinking about the upper bounds of super intelligence uh all the way down to like how do we make it really work now and get it into the hands of more companies and people to like to make their lives better.
</details>