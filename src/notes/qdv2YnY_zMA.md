---
author: Amit Kukreja
date: '2025-12-10'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=qdv2YnY_zMA
speaker: Amit Kukreja
tags:
  - enterprise-ai
  - data-ontology
  - supply-chain-optimization
  - forward-deployed-engineering
  - digital-transformation
title: Palantir Paragon大会：揭秘与NVIDIA、Cubic、Crisis24等伙伴的深度合作
summary: 本文深入探讨了Palantir在Paragon大会上宣布的与NVIDIA、North Slope、Crisis24、Cubic和Kavanaaugh等公司的战略合作。这些合作展示了Palantir的本体论（Ontology）和AI平台（AIP）如何与NVIDIA的加速计算技术结合，共同赋能企业，实现从供应链优化到战场决策、从医疗健康到建筑施工的全面数字化转型。文章强调了前沿部署工程师（FDE）模式、价值创造负担以及边缘计算在推动AI落地和提升企业运营效率中的关键作用。
insight: ''
draft: true
series: ''
category: business
area: market-analysis
project:
  - ai-impact-analysis
  - systems-thinking
  - us-analysis
people:
  - Amit Kukreja
  - Justin
  - Kevin
  - Bill Ward
  - Sid
  - Jeffrey
  - Steve
  - Joe
  - Jesse
  - Dr. Karp
  - Jensen Huang
  - Unkid
companies_orgs:
  - Palantir
  - NVIDIA
  - North Slope
  - Crisis 24
  - Cubic Corporation
  - Kavanaaugh Corporation
  - Lowe's
  - AWS
  - GCP
  - Azure
  - Tampa General
  - R1
  - PG&E
  - Department of War
  - US Army
products_models:
  - Foundry
  - AIP
  - CUDA
  - Neotron models
  - ChatGPT
  - OSDK app
media_books: []
status: evergreen
---
### Paragon大会开场：Palantir与NVIDIA的AI合作

大家好。我正在Palantir的年终12月活动Paragon现场，我将在这里进行一次非常特别的采访，讨论一个非常特别的合作关系。我与NVIDIA负责商业AI的Justin以及Palantir负责商业销售的Kevin在一起。感谢两位莅临。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello everybody. I'm here at Pounder's end of year December event Paragon and I'm here for a very very special interview to talk about a very special partnership. I'm here with Justin who leads commercial AI at NVIDIA and Kevin who leads commercial sales at Pounder. Thank you both for being here.</p>
</details>

>> 感谢邀请。很高兴见到你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thanks for having me. It's great to be good to see you.</p>
</details>

我想先说一点。我来自散户投资者社区，我们很多人在过去四年里一直在等待NVIDIA和Palantir合作的时刻。我们知道这两家公司掌控着AI领域。Karp博士（**Dr. Karp**：Palantir首席执行官）经常谈论芯片和**本体论**（Ontology：一种数据模型，用于描述和连接不同类型的数据实体及其关系），而一个特别的合作通常需要时间来发展。我想我们今天将要讨论的内容非常特别。那么，Justin，这个合作是如何实现的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So let I I want to start off by saying this. I come from the retail investor community and a lot of us for the past four years have been waiting for the moment that Nvidia and Poundro would work together. We knew that you know these are the two companies controlling AI. Dr. Karp constantly talks about chips and ontology and a partnership usually that is special probably should take time to evolve and I think what we're going to talk about today is pretty special. So I guess we'll get started with you Justin. How did this partnership even come to fruition?</p>
</details>

>> 你知道，我认为，审视Palantir团队通过本体论所做的工作，我们意识到它几乎是每个企业的基础。因此，它是市场上最重要的企业平台之一，我们认为这是一个巨大的合作机会，可以继续通过我们的**CUDA**（Compute Unified Device Architecture: 统一计算设备架构，NVIDIA开发的并行计算平台）库和**Neotron模型**（Neotron models: NVIDIA的AI模型）加速Palantir的工作，共同为全球企业带来，我称之为，专业化智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> You know I think uh just looking at the work that the Palunteer team have done through ontology we realized it's foundational across you know virtually every enterprise. So it's one of the most important enterprise platforms on the market and we thought there was a huge opportunity to work together to continue to accelerate the work that Palunteer has done through uh our CUDA libraries and through Neotron models and bring you know I'll say specialized intelligence to the world's enterprises together.</p>
</details>

Kevin，你对这个合作的开始有什么看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Kevin, your take on how this partnership started?</p>
</details>

>> 嗯，我认为，你知道，一年多以前，Karp博士说过，AI的很多价值将在于连接本体论与芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh I I think for me and you know it it was over a year ago Dr. Karp said that a lot of the value for in AI was going to be about connecting ontology to the chips.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

>> 我想我们逐渐了解到，将我们的本体论连接到你们的加速计算平台，对我们的客户来说是一个巨大的改变。而实际实施并将其投入现场的过程是值得尝试的，我们也没有尝试太久。我们开始合作大约三到四周后，就已经有一个客户在NVIDIA的产品和模型上，通过本体论为我们的客户Lowe's运行起来了。这是一个共同的客户，这有助于加快事情的进展，但是，你知道，当我们的团队能够合作并在大约三周内展示价值时，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And and and I think we we sort of come to came to learn that like connecting our ontology to your accelerated computing platform uh is a big uh game changer for our customers and going through that process um of actually implementing it putting it into the field was worth trying and we didn't have to try for that long. We we started our partnership uh I think maybe 3 4 weeks into it. We already had a customer up and running uh on you know on on Nvidia products with Nvidia models uh in ontology uh for for Lowe's for one of our customers and it was a mutual customer which helped move things quicker but um you know when our teams can work together and show value in what ended up I think being three weeks</p>
</details>

>> 嗯，你知道，这对任何合作来说都是一个很好的开始。是的，我认为Palantir和NVIDIA之间的协同效应令人兴奋，因为你们两家公司都行动非常迅速。**Jensen**（Jensen Huang: NVIDIA首席执行官）和Karp为公司设定的标准，你知道，如果你听一些员工谈论工作文化以及工作文化背后的使命，你就会明白为什么人们愿意如此努力工作。在三到四周内让客户启动并运行是合情合理的。就合作的技术细节而言，你提到本体论对于企业堆栈至关重要。这种认识是何时发生的，你认为为什么本体论被这么多组织采用？从哲学层面看，你认为他们将如何继续采用本体论？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> uh you know that's a pretty good start to any kind of partnership. Yeah, I think the synergist the synergies between Pounder and Nvidia are exciting because you guys both move really fast. Uh the the standard that Jensen and Car pulled the company to, you know, if you just listen to some of the employees speak about the the work culture and the the mission behind the work culture is why people want to work so hard. It it it would make sense that in 3 to four weeks a customer is up and running and getting started. In terms of the technicalities of the partnership, uh you mentioned the ontology is integral towards the enterprise stack. when did that realization happen and why do you think the ontology is being adopted by so many organizations and philosophically how do you think they will continue to adopt the ontology?</p>
</details>

是的，我认为，你知道，当我们开始进行这些首次客户合作时，我们很快意识到Palantir的强大之处在于它能够将供应链中一系列狭隘优化的系统，整合成一个能够进行全球优化、贯穿所有业务系统的方式，并提供一个统一的数据模型，这个数据模型正是你希望将人工智能作为基础，以做出业务决策的数据。因此，一旦我们开始与Lowe's（劳氏公司）合作，你知道，他们有1700家零售店，130个配送中心，以及7000多家供应商，他们试图在这些环节中优化库存，以确保货架满载，从而推动收入增长。通过结合加速计算的力量，我们基本上可以在供应链中发生新事件（例如天气事件）时，实时进行供应链的再优化，这让你能够保持货架库存，并发展业务。因此，对于每家公司来说，当你能够提供这种运营决策智能，让你以更盈利的方式运营公司，并帮助你发展业务时，显然会有非常迅速的合作来交付价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think um you know when I when we started to engage uh in kind of these first customer engagements, we quickly realized uh you know the the power of Palunteer is really taking what were a bunch of let's say narrowly optimized systems across a supply chain and giving you a way to globally optimize across the all the business systems and giving you kind of this unified data model that is the the data that you want to ground artificial intelligence into to make business decisions. Um, and so as soon as we started engaging uh Lowe's in this in this case, you know, they had 1,700, I think, retail locations, 130 distribution centers, and over 7,000 suppliers that they're trying to optimize inventory across to make sure that shelves are full to drive revenue. And, you know, by bringing together the power of accelerated computing, we could basically do that supply chain reoptimization in real time when there's a new event such as like a weather event in the supply chain. um which lets you basically maintain you know stock shelves and grow the business and so for every company when you can basically pro provide this uh let's say operational you know decision intelligence that lets you run your company in a more profitable way and helps you grow your business you know there's there's obviously very very you know fast engagements to deliver value</p>
</details>

>> Kevin，你能谈谈**LLMs**（Large Language Models: 大语言模型）的运营化吗？显然，NVIDIA的硬件对于训练这些LLMs是必不可少的，但Palantir的编排能力对于获取商业智能似乎至关重要，使其在企业中发挥作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Kevin the the oper operationalization of uh LLMs can you speak to that a little bit in terms of obviously Nvidia's hardware is necessary train these LLMs, but it seems like Pounders's orchestration to get the business intelligence is crucial to making them useful in an enterprise.</p>
</details>

>> 是的，我认为，你知道，我们对如何利用这项技术并推动严肃的商业价值进行了很多思考。今晚我们有一位客户在台上谈到他们如何将医院48小时内的死亡率降低了68%。你知道，这些应用，所以这项技术的应用确实很重要。因此，我们可以创建一个技术堆栈。我们可以优化它用于消费者使用，或者你知道，一般的业余爱好者之类的东西，或者我们可以将这项技术实际驱动到机构中，并产生真正的影响。你知道，我们有一家建筑公司在台上说，你知道，这实际上是他们的操作系统。所以，所以我们

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I I think you know, we we we thought a lot about how we take this technology and drive like serious business value. You we had a customer on stage tonight that talked about how they've reduced um 48 hour fatalities at a hospital by 68%. And you know some of these like so the application of the technology really matters. So there's you know we could we could we could create a tech stack. We could uh optimize it for maybe consumer use or you know general kind of like hobbyist kind of things or we can we can drive this technology actually into the institution and you can have real impact. You know we had there was a construction company on stage that said you know that this is actually their operating system right. So, so we</p>
</details>

>> 他们说他们替换了97%的其他软件堆栈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> said they said they replace 97% of all the other software stack.</p>
</details>

>> 是的。是的。在12个月内。是的。在12个月内。这真的是一件非常非常强大的事情。你知道，我们在市场上看到一些事情，我不太确定它们在六个月前是否可行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. In 12 months. Yeah. In 12 months. And and that's a really really powerful thing. And you know there there's some things that we're we're seeing in the market that I I don't really I'm not sure they were even doable 6 months ago,</p>
</details>

>> 你知道。所以，如果我能帮助一家保险公司在几分钟内处理承保或索赔，这在几个月前甚至是不可能的。如果我们能进入一家医院，帮助那些试图安排护士、医生的人在正确的时间、正确的地点配备正确的设备，从而更快地转移病人。嗯，你知道，这能挽救生命。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> you know. So, it's like if if I can help an insurance company, you know, process a uh, you know, an underwriting or a claim in a matter of essentially minutes, like that wasn't really even possible a few months ago. If if we could go into a hospital and help the the person that's trying to schedule, you know, nurses, doctors, like be in the right place at the right time with the right equipment, and therefore you can move patients through faster. um well, you know, that saves lives. Yeah.</p>
</details>

>> 它改变了整个机构的运作方式。所以我想，你知道，我们都曾在手机或口袋里体验过大语言模型。但如果我们能将这项技术带入机构，帮助这些公司、这些组织、这些政府更好地运作，更好地完成与他们使命一致的事情。我想，嗯，这就是我们公司的一切。我们每天醒来都在思考这个问题。我想我们很幸运能遇到一家同样非常关心这个问题，并且能够与我们以同样的速度和节奏前进，拥有优秀工程师的公司。你知道，多年来，我们常常尝试与公司合作，说：“嘿，也许你们也应该有一个**前沿部署工程团队**（Forward Deployed Engineering Team: 一种将工程师直接派驻到客户现场，与客户团队紧密合作，共同解决问题和开发软件的模式）。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And and it changes the whole operation of the institution. So I I I think like, you know, I think we've all experienced large language models in in our in our in on our phones, in our pockets. But if if we can if we could take this technology into the institution and help the the these companies, these organizations, these governments operate better, operate better at the thing that is consistent with their mission. I um well, that's what our company's all about. And and and we wake up every day thinking about that. I think we were, you know, fortunate to meet a company that that also cared a lot about that and could move at pace and speed with us with amazing engineers. You know, we've had um I'd say over the years we've often times tried to work with companies to say, "Hey, maybe you should have a forward deployed engineering team, too."</p>
</details>

>> 这通常效果非常好。就像，即使只是尝试这个概念，有时也非常好。就像，“嘿，我们应该为了交付成果而进行工程设计。”嗯，你知道，我们几周前才在一次会议上简单谈论过，然后，几天之内，NVIDIA的一个前沿部署工程师团队就与我们的人员并肩工作，我很难区分你们的团队和我们的团队，这真的很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And and and that's often times worked really well. It's like even just the concept of trying is is sometimes like really really good. It's like, "Hey, we should do engineering for the purpose of delivering a result." Well, you know, we just barely talked about it at a conference a few weeks ago and then, you know, within days there's a team of NVIDIA, four deployed engineers working side by side with our people and I don't it's very hard to tell the difference between your team and ours and and and that's that's really cool.</p>
</details>

>> 是的。我与一位在合作中扮演核心角色的工程师交谈时，他提到两家公司都承担着价值创造的重担，正如Karp博士所说，你不想在真正证明自己对公司有价值之前就获得报酬。嗯，NVIDIA是一家硬件公司，但从宏观层面看，Justin，你能否更多地解释一下CUDA以及它与Palantir的软件集成，以及为什么这对于此次合作是合理的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. One thing that uh I was speaking to one of the engineers who's who's central to the partnership is that both companies take on the burden of value creation as Dr. Karp says like you don't want to get paid until you actually prove that you can be valuable for a company. Um, Nvidia is a hardware company, but at a high level, Justin, can you explain more about CUDA and the software integration with Pounder and why that makes sense for this partnership?</p>
</details>

>> 是的，我的意思是，我想，你知道，从我们早期开始，人们最初把我们看作一家游戏公司。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I mean, I I think, you know, from our early days, people know us originally as a gaming company. Yes.</p>
</details>

>> 我想Jensen谈论这个问题已经很久了。嗯，为了在市场上创造价值，我们必须加速游戏，为玩家创造更好的视觉互动体验，对吧？然后显然人们想要我们的产品来获得那种一流的互动体验。同样的事情也适用于处理数据分析、数据处理和人工智能。嗯，延迟越低，你在业务中可以查看的数据越多，你就能做出更好的决策，你知道，从客户成功到索赔处理，再到供应链和运营，贯穿你业务的各个方面。所以，这就是这种自然合作关系的原因。正如KK所说，你知道，我们是一家软件公司，我们建立，我们早期通过CUDA为我们想要进入的每个领域构建库。目前，我认为我们有超过200个这样的CUDA库，可以加速这些工作流程的许多不同阶段。因此，与Palantir团队合作的令人兴奋之处在于，每一次合作都始于客户需求，比如他们试图解决的重大业务问题是什么，对吧？我们如何帮助他们更快地获得商业价值？我们如何降低计算成本以推动业务决策，并最终帮助他们将其投入生产？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And I think Jensen has talked about this for a long time. Uh, for us to create value in the market, we had to accelerate games to create a better visual interactive experience for gamers, right? And then obviously people wanted our product to to get that you know best-in-class like interactive experience. And the same thing is true here in terms of uh processing uh data analytics, data processing and artificial intelligence. uh the lower the latency uh the more data that you can look at in your business, the better decisions that you can make uh you know across operations of your business from you know customer success to claims processing to uh supply chain to operations and so uh that's why kind of this natural partnership um and as KK said you know we are a software company we build we uh started our early days with CUDA building libraries for every domain that we wanted to go into at this point I think we have over 200 100 of these CUDA libraries to accelerate many different uh stages of these workflows. And so the exciting thing working with the Palunteer team is every engagement starts with the customer need like what's the big business problem they're trying to solve, right? How do we help them get to business value faster? How do we reduce the let's say the compute cost to drive that business decision and then ultimately help them help them take it to production?</p>
</details>

Kevin，你能谈谈**边缘计算**（Edge computing: 在数据源或其附近执行计算，而不是完全依赖中央云或数据中心）和边缘网络，以及这种合作可能在其中扮演的角色吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Kevin, can you speak a little bit to uh about compute at the edge and edge networking and kind of how this partnership might play a role in that as well?</p>
</details>

>> 是的，我认为这将是至关重要的。我曾深入思考，你知道，如果回到15年前，消费者口袋里有iPhone应用程序，但我们的战场操作员可能只有相当于双向无线电的设备，对吧？所以，将美国任何人都能在手机上拥有的最佳技术，用于外勤任务目的，将非常重要。因此，我认为这确实意味着大量的边缘计算。我认为这意味着要弄清楚如何在客户数据中心内部、在AI工厂、在你们的一些超级产品中进行大量此类操作。所以我们正在处理很多这样的事情，我认为我们已经看到了大量的客户需求，以真正将我们的产品与NVIDIA的产品以及他们可以在其边界内或多或少获得的各种模型一起运行，我认为这与在边缘进行操作的架构是一致的，我认为这将是一个非常大的趋势，因为你希望控制这项技术，并在某种意义上保证你可以访问它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I I think that that's going to be critical. I like I've thought a lot about, you know, if you go back 15 years like when when the consumers had, you know, iPhone applications in their pocket and then but but but maybe our operators downra in a battlefield, you know, had more of equivalent to a two-way radio, right? and and and you know, so it's like getting the technology that that the best technology that we that anybody in the US can have on the phone and and using it for a mission purpose, you know, out in the field is going to be really important. And so I think that does mean a lot of edge. I think it means it means like like figuring out how to do a lot of this stuff on prem inside of customer data centers, uh on you know the AI factories, um the super paws, some of the products you have. So we're we're working through a lot of that and I think I think we're we've already seen a lot of customer demand. um to really you know run our product with Nvidia's product um and the various different models that they can get you know more or less inside their perimeter and and I think that's that's a consistent architecture with doing something on the edge and I I I think that's um I think that's actually going to be a really big trend to use this because you you know you you want to control this technology and be in some sense guaranteed that you have access to it.</p>
</details>

>> 是的。因为有时对于云，你无法保证。我的意思是，有时需要20秒才能获取数据，而这可能是生死攸关的决定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Because sometimes for the cloud you're not guaranteed. I mean, sometimes it takes 20 seconds to get the data back and that's life or death decisions.</p>
</details>

>> 是的。如果出现这样的问题，你就会希望能够端到端地控制它，你知道吗？所以，也许它不会是完美的，但我实际上想要拥有它。我想要对它负起端到端的责任，我们希望帮助我们的客户做到这一点。嗯，我认为这非常重要。你知道，在我们认识的这段时间里，你问了很多关于我们的训练营和我们共同的市场推广的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And and and if and if you're going to have problems like that, like you you kind of want to be able to control it end to end, you know? So, it's like maybe it's not going to be perfect, but like I I want to I actually want to own this. I want to be responsible for it end to end and we want to help our customers do that. Um uh and and I think that's really important. The um you know, you you've asked a lot over over over the the time that we've known each other about about our boot camps and and our joint go to market.</p>
</details>

>> 我今天在NVIDIA的训练营上发言了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I got to speak at an NVIDIA boot camp today.</p>
</details>

>> 是的。我想把这个加进去，因为我想我们只用了两三周的规划，并没有那么多。我们安排了这次活动。我们讨论了一下，说：“嘿，也许我们应该在Paragon活动当天，与客户一起举办一个训练营。”我们说：“好吧，我们试试看。”嗯，我们当时心里有一个，结果我们总共有七个。你知道，七个不是一个巨大的数字，但多样性真的很有趣。我们有一家银行。我们有几家不同的电子设备制造商。我们有一家制药公司。我们有一家制药制造商，一家制药零售公司。嗯，我可能没有全部说出来，但那真的很有趣，真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I want to throw this in because I think we with about I don't know two or three weeks of planning, it wasn't that much. We had this event scheduled. We were talking. We said, "Hey, maybe we should do, you know, a boot camp with a customer um day of our Paragon event." And we said, "Okay, let's try it." And and uh I think we had one in mind. We ended up, I think, with seven total. And and you know, seven is not a massive number, but the variety, I think, was really interesting. We had uh we had a bank. Uh we had a few different sort of like electronic device manufacturers. We had a a a pharmaceutical company. We had a a pharmaceutical manufacturer pharmaceutical uh uh uh retail company. Um I'm probably not naming them all, but there was uh I don't know it was it was it was really interesting, really fun.</p>
</details>

>> 但就你的观点而言，我认为，本体论与加速计算相结合的力量跨越了每一个行业。因此，再举一个**边缘**（Edge: 指靠近数据源的计算环境，而非集中式云端）的例子，Teton牧场正在开始使用视觉分析来观看竞技表演，以帮助裁判和广播员更好地讲述关于竞技表演的故事，这是一个非常棒的用例，它开始跨越到媒体和娱乐领域。因此，我们对这次在展会上的发布感到非常兴奋，但这种合作是多方面的，跨越了如此多的不同行业。我们宣布的另一个行业是这个我们称之为“**链式反应Y**”（Chain Reaction Y: 一个旨在通过合作加速美国经济数字化智能建设的计划）的项目，这是因为我认为两家公司都意识到，我们正处于这样一个时刻，我们希望构建这种数字智能来驱动美国经济。这对美国以这种方式领先是很好的。嗯，美国对这种人工智能有巨大的需求，以驱动一系列新的商业应用。因此，通过合作，我们真的可以开始建设这些千兆瓦数据中心，并审视从发电到配电，再到建设，再到数据中心运营的整个供应链，通过两家公司的合作，更快、更高效地将这些基础设施上线。所以，你知道，这种多方面的合作继续在各个行业中发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> But to your point, I think uh the power of ontology connected to accelerating computing crosses every industry. And so to give another example at the edge uh that that the Teton ranch Yes. is starting to use uh let's say vision analytics uh to watch the rodeo to help both the judges and the broadcasters tell a better story about you know about uh rodeo uh which is a really awesome use case that starts to cross into media and entertainment um and so we're really excited about that announcement here at the show but this partnership is multifaceted across so many different industries the other industry that we made an announcement about is this this uh program we call chain reaction y and that's because I think both companies realize, you know, uh that we're at this moment where we want to build this uh this digital intelligence to power the US economy. It's great for, you know, the US to lead in this in this way. Uh the US has such a huge demand for uh this this artificial intelligence to power a range of new business applications. Um and so by working together we can really start to build these gigawatt data centers uh and and look at the entire supply chain from power generation to distribution to construction to data center operations to bring this infrastructure online faster and more efficiently by the two companies working together. So you know this multiaceted partnership continues to grow really across every industry.</p>
</details>

>> 是的。那将是我的最后一个问题。嗯，再次感谢两位抽出时间。嗯，“链式反应”计划，我们今天都看到了它的公开宣布，它让我非常震惊，因为它几乎像一个突破一样击中了我：显然，数据中心的建设正在呈指数级增长。Palantir的软件在许多不同的能源基础设施公司中发挥了关键作用。PG&E（太平洋煤气电力公司）是其中之一，它在处理野火方面做得很好。Kevin，你能谈谈这种合作继续扩展的想法，以及你为什么认为Palantir软件应该成为数据中心建设的事实上的AI基础设施操作系统？是的，我认为Kavanaaugh（Kavanaaugh Corporation: 一家重型土木工程建筑公司）的那位先生给出的例子，现在，你知道，建筑是这次建设中一个非常重要的方面，但他不一定是在谈论**Foundry**（Foundry平台: Palantir的数据集成和分析平台）作为他的操作系统，或者你知道，使用AI来改进他的操作系统，他是在谈论Kavanaaugh的操作系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And and that was going to be my my last question. Uh thank you again both for taking the time to do this. uh chain reaction uh we all got to see that publicly announced today and it it it blew me away because it it it almost hit me like a break like obviously the data center buildout is growing exponentially. Pounder has software that has been instrumental towards many different energy infrastructure companies. PG&E is one of the ones that comes to mind in terms of dealing with wildfires. Kevin, can you speak to the idea of this partnership continuing to expand and why why you think Palanteer software should be a deacto AI infrastructure operating system for the data center buildout? Yeah, I I think the example that Kavanaaugh guy gave the the gentleman from Kavanaaugh construction gave now now that's you know construction is a really important aspect to this buildout but he wasn't talking about necessarily like you know foundry as his operating system or you know using AI to better his operating system he was talking about the Kavanaaugh operating system</p>
</details>

>> 现在这是一个属于你的操作系统，我认为这是一个非常重要的部分，因为虽然我们可以提供很多开箱即用的东西，我们可以提供很多与许多不同公司一致的软件。但最后一点，最后一英里，前沿部署工程师，独特的本体论构建，这正是让我们的客户和任何公司变得特别的原因，它在某些情况下是胜败的关键。它决定了你的项目是否能按时完成。嗯，建立这些基础设施，你知道，这些数据中心，建筑项目每延迟一天，你都可以用利润来衡量。所以，嗯，我认为，在某种意义上，我们希望构建的操作系统

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right now this is an operating system that is yours and and I think that's a that's a really big piece because while we could deliver a lot out of the box and we we could deliver a lot of software sort of like that is consistent with lots of different companies. That that last bit, that last mile, the forward deployed engineer, the the unique ontology build like that is what makes you these our customers and and any company special and and and it's the difference between winning and losing in some cases. It's the difference between your project being on time or not on time. uh getting this infrastructure stood up, you know, the these data centers every day that the construction project is late, you can measure in profits and and and so um I think that like in in in some sense like we want to build the operating system that</p>
</details>

>> 是我们的客户

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> is our customers</p>
</details>

>> 你可以通过我们堆栈中的许多技术来实现这一点，但最后一英里，嗯，那就像是你的武器，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and and and you could do that with with having a lot of technology that we have in our stack, but but that last mile is um well that that's sort of like that's your weapon, right?</p>
</details>

>> 我认为这就是我们希望交付给所有客户的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And and I think and I think that that's what we want to deliver to all of our customers.</p>
</details>

Justin，Kevin，感谢你们的时间。这绝对太棒了，祝贺你们的合作，我们希望看到它在未来十年继续扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Justin, Kevin, thank you for the time. This was absolutely awesome and congrats on the partnership and we hope to see it extend over the next decade.</p>
</details>

### Palantir与North Slope：FDE模式的实践与AI时代的转型

好的，大家好。欢迎回到频道。我们正在Palantir 2025年年终活动Paragon现场。我与一位熟悉的老朋友在一起。自2024年6月以来，我就没和他说过话了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right. Hello everybody. Welcome back to the channel. We are here at Pounder's end of year 2025 event, Paragon. I'm here with a familiar guest. Haven't spoke to him since June of 2024.</p>
</details>

>> 是有一段时间了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> No, it's been a minute.</p>
</details>

>> 是有一段时间了，但我们又回来了。我们都留了点胡子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's been a minute, but we're back. We both kind of grew our beards a little bit.</p>
</details>

>> 是的，没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, exactly.</p>
</details>

>> 嗯，来自North Slope的Bill Ward。Bill，谢谢你来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh Bill Ward from North Slope. Bill, thanks for being here.</p>
</details>

>> 天哪，谢谢邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh my gosh, thanks for having me.</p>
</details>

有成千上万的AWS（Amazon Web Services）公司、GCP（Google Cloud Platform）公司、Azure（Microsoft Azure）公司，但Palantir公司并没有那么多，而你是第一批之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's thousands of AWS firms, GCP firms, Azure firms. there's not that many Palunteer firms and you're one of the first ones.</p>
</details>

>> 嗯，我认为这之所以如此，一个重要原因就是Palantir不是一家咨询公司。嗯，我的意思是，这在我还在Palantir工作的时候，很多人很难理解。这种对话总是出现。我认为，人们今天开始理解Palantir的一件非常酷的事情是，构建高质量软件的方式是通过前沿部署，针对特定任务进行构建，并找出如何加速特定结果。而**Foundry**（Foundry平台: Palantir的数据集成和分析平台）就是这样，对吧？它最初是我们更快获胜的方式，现在它已成为一种客户产品，你可以自己通过它获胜，对吧？对我们来说，非常令人兴奋的一点是，我们也不认为自己是一家咨询公司。我们是一家软件公司，在Palantir平台上为客户交付特定的成果。而Palantir是一个企业操作系统。我们构建的应用程序正在复合该平台的价值，以便人们可以完成更多工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, I think one of the big reasons that that's true is that Palunteer is not a consulting company. Uh and I mean this was something that was very hard for uh a lot of people to understand back when I worked at Palanteer. This conversation would come up all the time. And I think one of the very cool things that uh people are starting to understand about Palunteer today is that the way that you build quality software is by forward deploying and building against specific missions and figuring out how you accelerate specific outcomes. And that's what Foundry is, right? It started as uh ways for us to go win faster and it's become this customer product that you can go win on on your own, right? And one of the things that's very exciting for us is we also don't consider ourselves to be a consulting company. We're a software company that ships specific outcomes on the Palunteer platform for our customers. And Palanteer is an enterprise operating system. We build applications that are compounding the value of that platform so that people can get more work done.</p>
</details>

这几乎就像Palantir引入的**FTE模式**（Forward Deployed Engineer: 前沿部署工程师模式，Palantir的工程师直接与客户团队合作，共同解决问题并交付软件）。你们就是这种模式在新公司中的体现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's almost like the FTE model that Palenter introduced. you guys are the manifestation of that in a new company.</p>
</details>

>> 嗯，我们非常荣幸能做这项工作，而且，我认为很难将自己与Palantir的FTE（前沿部署工程师）相比较，但我们非常荣幸能与他们一起做这项工作，而且我认为现在FTE模式周围有很多炒作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh we we uh are very privileged to get to do this work and uh I think it's hard to compare yourself to Palunteer FTEEs, but uh we're very honored to be doing this work alongside them and I think there's there's a lot of hype around the FTE model right now.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yes.</p>
</details>

>> 我们非常坚信的一点，我认为我们这些在Palantir的North Slope团队工作过的人深有体会，那就是你不能仅仅给一个东西贴上标签。是的。嗯，这更多地与我今晚听到的所有故事有关，即与企业中的实际操作人员深入合作，试图与他们一起解决具体问题，就像我们是他们的团队一样，我们自己拥有那个结果。Karp博士经常谈到我们承担客户的价值创造风险，对吧？我们也是这样运作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And one of the things that you know we feel very strongly and I think those of us who worked at Palunteer at the North Slope team uh feel very deeply is uh you can't just slap a label on a thing. Yes. uh it has much more to I mean all the stories that we've been hearing here tonight of going to ground with the actual operators in a business trying to solve the specific problem with them like we are on their team like we own that outcome ourselves Dr. Dr. Karp often talks about us owning the value creation risk right for our customers. That's very much how we operate too.</p>
</details>

>> 是的。价值创造的负担我认为是Palantir最有趣的事情之一。这是我个人一直努力在生活中应用的东西。我如何在我的业务中，向受众提供比我获取的更多的东西，你必须接受价值创造的负担。所以一年前你们决定，世界上有些公司应该实施Palantir软件，但他们不知道如何实施，你们想承担实际展示如何实施的负担。嗯，从那时起，过去一年中，在更多公司至少对围绕在其公司中实施Foundry的对话感兴趣的增长率方面，发生了什么变化？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. The burden of value creation I think is one of the most interesting things about Palenter. It's something I personally have tried to apply in my life. How can I give more to to in my business the audience uh than I take and you have to accept the burden of value creation. So a year ago you guys decided uh that there's companies across the world that should be implementing pounder software but they don't know how to and you guys wanted to take the burden of actually showing how to do this. Um since then what has changed over the past year in terms of the rate of growth you're seeing in more companies that are at least</p>
</details>

>> 对与在他们的公司中实施Foundry进行对话感兴趣？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> interested to have a conversation around implementing Foundry in their corporation?</p>
</details>

>> 是的，我认为人们正在意识到两件事。首先是Palantir真正的魔力在于你可以解决具体问题，当你解决具体问题时，你的业务总是会得到更好的结果，而不是当你试图笼统地解决问题时。对吧？笼统的解决方案会导致商品化。你正在做别人都在做的工作流程。而这里的所有企业，我们合作的所有企业，都在试图做一些重新定义类别的事情，对吧？他们试图改变他们的业务运作方式，他们的行业运作方式。你必须通过做一些特别和不同的事情来做到这一点。Palantir的魔力在于你实际上可以构建软件来做那些特别和不同的事情。嗯，即使你不是像Palantir这样的技术公司。我的意思是，在Palantir，我们构建了许多自己的内部软件。在North Slope，我们也在做同样的事情。我们正在基于AFTD（可能是AIP的笔误，即**AI平台**，Palantir的AI驱动的操作系统）进行构建，这可以说是Palantir产品线的尖端。我们相信这是构建任何类型业务的正确方式。但这传统上是企业技术公司的专属领域。但现在，今晚有一家公司已经存在了140年。他们看起来更像一家技术公司，而不是许多硅谷初创公司，因为他们正在用Palantir上的特定解决方案构建他们的整个组织。我认为这是一个巨大的变化，与几年前人们不太理解它有多强大相比。现在这里有一个社区。它仍然是一个非常小的群体，但有一小群人将引领下一个世纪，他们在这里，他们已经弄清楚了这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I think there's there's two things that people are waking up to. First is the true magic of Palunteer being that you can solve specific problems which you always get a better outcome for your business when you're solving a specific problem than you do when you try to solve it generically. Right? Generic solutions lead to commoditization. You're doing the same workflow everybody else is doing. And all the businesses that are here, all the businesses that we work with are trying to do something category redefining, right? They're trying to change how their business operates, how their industry operates. And you have to do that by doing something special and different. And the magic of Palunteer is you actually get to go build the software to do that special and different thing. Uh even if you're not a technology company like Palunteer. I mean at Palanteer we built a lot of our own internal software. At North Slope we're doing the same thing. We're building it on AFTD which is you know sort of the tip of the spear of Palunteer's product line. And we believe that that's the right way to build any kind of business. But that's traditionally been the preserve of an enterprise technology company. But now companies there was one company tonight that's been around for 140 years. They look more like a technology company than many Silicon Valley startups because they are building their entire organization with specific solutions on Palunteer. And that's that's a thing that I think is a big change from a few years ago where people didn't quite understand how powerful that could be. And now there is this community here. And it's still a very small group, but there's a small group of people who are going to go lead the next century who are here who have figured that out.</p>
</details>

AI的崛起是否促使你们获得更多内向型业务？因为仅仅将**ChatGPT**（ChatGPT: OpenAI开发的大语言模型）连接到企业并不是真正实施AI的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is the rise of AI prompting more inbound for you guys? because uh just hooking up chatgbt to an enterprise is not a way to actually implement AI.</p>
</details>

>> 是的，我的意思是，它确实如此，而且Palantir正在通过提供这种解决方案来创造这个市场，但我认为我们看到的最大变化是人们尝试了ChatGPT实验，他们看到在孤立的筒仓中做这些事情并不能真正奏效。很难一次性解决一个问题。但如果你在Palantir平台上操作，你实际上可以在操作系统之上构建一个复合应用程序层，每次你解决一个新问题时，它实际上都会让你的旧问题的解决方案变得更好、更快。而且，你在业务中运行的代理与你的人员一起操作，实际上也会随着时间的推移变得更智能、更有效。这些代理是企业开始越来越兴奋的。我的意思是，坦帕总医院（Tampa General）和R1（R1 RCM: 医疗收益周期管理公司）看到，像拒绝预防率这样的事情，拥有代理工作流的能力，数据可以立即被消费，然后支付时间增加了200%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I mean it very much is and I I mean Palunteer is creating this market right uh by offering this solution but I think the biggest change that we've seen is people have tried the chat GPT experiment they have seen that doing a bunch of those uh in isolated silos doesn't really work. It's hard to oneshot a solution to a problem. But if you're operating on the Palunteer platform, you actually can build a compounding application layer on top of the operating system where every time you solve a new problem, it's actually making your previous solutions to the old problems better, faster. Uh, and the agents that you have running around your business operating alongside your people are actually getting smarter and more effective over time as well. these agents that enterprises are starting to get more excited about. I mean, Tampa General and R1 seeing how like something like uh denial prevention rates, the ability to have uh agentic workflows where the data is immediately consumed and then the increase of the time for payout is up 200%.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yep.</p>
</details>

>> 当你与这些想要开始实施代理或至少代理概念的客户交谈时，本体论的教育对这些客户来说有多重要？嗯，我的意思是，对我们来说令人兴奋的事情之一是，如此多的人对Palantir能够为他们的业务提供什么感到兴奋，以至于他们某种程度上是为了本体论而来。这从第一性原理来看是直观的，如果你不仅仅是想采购一个软件，而是想真正改变你的业务运作方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> When you're talking to these customers that want to start implementing agents or at least the concept of agents, how important is the uh education of an ontology to these clients? M well I mean one of the things that is exciting to us is so many folks are excited about what Palenter is able to provide to their business that they're kind of there for the ontology right this makes intuitive sense if if you think about it from first principles if you're not just trying to procure a piece of software but you're actually trying to change how your business functions</p>
</details>

>> 那么，你拥有所有这些不同的、分散的数据集，你需要将它们整合到一组名词和动词中，以用于你的业务，这是显而易见的，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> it's sort of obvious that you have all these different disparate data sets and you need to get them into like one set of nouns and verbs for your business right</p>
</details>

>> 真正令人兴奋的是，人们也开始明白，如果你要让机器以LLM（大语言模型）的形式与你的人员一起工作，它们需要一种人类也能理解的语言。我认为本体论为此提供了一个极其强大的飞轮。因此，对于我们的大多数客户来说，他们实际上都理解这一点，我们与他们讨论的是你最困难的问题是什么？我们如何深入了解这个问题？你有什么数据？让我们开始吧。让我们在下周为你构建一些东西，并在第二天发布。所以，我认为有很多这样的事情。然而，非常酷的一点是，通常是一个人或组织中的几个人，他们是这些努力的先锋，并领导着变革，在他们自己的组织内部进行宣传。Palantir的运作方式以及我们努力运作的方式，真正酷的地方在于，它都是“只展示，不讲述”。我们只是去解决问题，证明我们已经解决了，然后突然间，组织中的其他人也对此感到兴奋。这真的非常酷。所以我想这引出了下一个问题，即价值创造的概念。你不会将自己归类为一家纯粹的咨询公司，而更像一家软件公司。你们如何定义你们的付费方式？是为了教育吗？是为了软件的实施吗？还是为了创意？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and what's really really exciting is folks also have started to understand that uh if you're going to have machines working alongside your people uh in the form of LLMs, they need a language that they can understand that humans can also understand. And I think the ontology is this incredibly uh powerful flywheel for that. Uh and so for most of our customers actually, they get it right and what we get to talk about with them is what is your hardest problem? How do we get into the weeds of this? What data do you have? Let's go get going. Let's build you something, you know, in the next week and ship it in the next day and ship it. Uh so I think there's a lot of that. The the thing that is uh very cool to see though is oftentimes it's like one person or a couple of people in an organization who are really tip of the spear on those efforts and are leading the charge and evangelizing inside their own organizations. And what is really cool about the way the Palenterer operates and that we try to operate as well is it's all show don't tell. We just go solve the problem demonstrate that we have and then all of a sudden everyone else in the organization gets excited about it too. It's really really cool to see. So I I think that leads into the next question of uh this concept of value creation. You wouldn't classify yourself as a pure consulting firm uh more of a software company. How do you define the way you guys get paid? Is it for the education? Is it for the implementation of the software? Is it for the ideation?</p>
</details>

>> 是的。是的。是的。是的。嗯，它是为了构建软件，这就是我们所做的。所以我的意思是，我认为作为Palantir、North Slope或其他任何地方的前沿部署工程师的核心，很少有地方能以我们思考的方式做到这一点。你有一个问题，你拥有数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Yeah. Yeah. Uh it it is for building software that that's what we do. So I mean I think the the core of being a Ford deployed engineer at Palunteer, at North Slope or anywhere else uh there are very few places but anywhere else that does it in the in the way that we think about it. You have a problem and you have data.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yes.</p>
</details>

>> 然后，前沿部署工程师的工作就是通过发布软件来解决那个问题，利用那些数据。是的。这就是我们所做的。Palantir真正酷的地方在于，他们找到了一种方法，使其如此强大、快速，并能达到生产规模，安全，并能够在一个非常复杂的组织中进行联邦化。这就是为什么在这个平台上构建是一种乐趣。但我们每次与客户合作时所做的事情是，我们从数据开始。我们从问题开始，我们就在那里编写代码并发布软件。嗯，我们都在Palantir中完成。我们可以比我们无法利用产品杠杆和平台杠杆时快得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And then the job of the forward deployed engineer is to solve that problem with that data by shipping software. Yeah. And that's what we do. And what's really cool about Palenteer is they figured out a way to make that so incredibly powerfully fast and production scale secure and able to be federated out across a very complex organization. And that's why it's a joy to build on this platform. But what we do every time we show up with a customer is we start with the data. We start with the problem and we are there writing code and shipping software. Um, we're doing it all in Palunteer. We can do it way faster than we could if we were uh not able to leverage the product leverage of the platform.</p>
</details>

**AIF FTEE**（AI-powered Forward Deployed Engineer: AI驱动的前沿部署工程师），很多人对此很好奇。你知道，我八个月前和Unkid（可能是Palantir的某位负责人）谈过，他我认为是这个项目的负责人，你知道，五个月后它就到了客户手中，真的很酷。你们现在说：“嘿，我们要把这个提升到新的水平。”为客户实施这个过程是怎样的？是的，我的意思是，我认为在Palantir生态系统中工作最令人兴奋的事情之一是，有如此多的产品开发。有如此多的东西被发布。嗯，对我们来说有趣的是，我们能成为其中的先锋。之所以如此，部分原因是我们自己的业务也在Palantir上运行，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> AIF FTEE, this is something a lot of people are curious about. It's a, you know, I was talking to Unkid who I think is the lead on this uh 8 months ago and you know, it was really cool 5 months later. It's like in customers hands. You guys now are saying, "Hey, we're going to take this and take it to the next level." How is that process been implementing it for customers? Yeah, I mean I think that one one of the really exciting things working in the palentry ecosystem is there is so much product development. There's so much that gets shipped. Um and what's fun for us is we get to be the tip of the spear of that. The reason that's true is partly because we run our business on Palunteer, right?</p>
</details>

>> 嗯，所以我们每天都在使用这个软件来完成我们自己的工作，并确保我们正在像我们自己的重新定义类别的公司一样运行。你知道，我们认为服务的未来是软件，对吧？为了做到这一点，我们必须在内部构建我们自己的软件，而AFT（可能是AIP的笔误）使我们做到这一点快得多。我认为对客户来说，一件很酷的事情也是，嗯，弄清楚如何在这个新时代成为工程师。Palantir提供了这种令人难以置信的广泛工具，让你能够从各种不同的背景进行工程工作。如果你想完全代码优先，North Slope的许多人都是这样，嗯，我们在Palantir平台上有如此多的工具可以使用，让我们能够做到这一点。AIFT（可能是AIP的笔误）为我们这些编写大量代码的人以及那些不编写代码的人开辟了一个全新的领域。嗯，你可以更快地发布东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh and so we are using the software every day for our own work uh and to make sure that we are running uh as like our own version of a category redefining company. You know, we think the future of services is software, right? And to do that we have to build ourselves our own software internally and aft makes us so much faster at doing that. One of the cool things for customers I think is also uh figuring out how to be engineers in this new era. Palunteer provides this incredible really wide range of tools that allow you to do engineering work from a variety of different backgrounds. If you want to be completely code first which many of the folks at NorthSlope are uh we have so many tools that we can use in the Palunteer platform that allow us to do that. AIFT opens up a whole new frontier both for those of us who write a lot of code and also for those who don't. Um, and you can ship things so much faster.</p>
</details>

>> 所以，所以，所以AID（可能是AIP的笔误）对客户来说的一个例子是，一个不编码的人，一个自然语言提示，需要大量的后端编码，而传统上FTE会编写这些代码。现在，AI正在做这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, so, so an example of AID for a customer would be a someone who doesn't code, a natural language prompt that requires a lot of backend coding that traditionally an FTE would code up. Now, the AI is doing it.</p>
</details>

>> 我会把它想象成，你知道，你和我正在一起解决一个问题，我是一名FTE，你是一名客户，正在努力解决一个问题。嗯，在很大程度上，你仍然需要一个North Slope的人或一个Palantir的人在场，但是有很多问题，而且AFT（可能是AIP的笔误）的未来非常令人兴奋，我们可以通过Foundry作为代理的帮助，共同解决这个问题，我们对这个未来感到非常兴奋，而且North Slope正在努力构建我们的软件方向，就是如何利用这种力量，为客户快速构建特定的工作流程，并实现非常高的规模。所以AFT（可能是AIP的笔误）是一个令人难以置信的起点，能够推动这一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I I would imagine it as, you know, you and I are working on a problem together and I'm an FTE and you're at a customer trying to solve a problem. uh you know to a large degree you still need uh a north slope person or a palunteer person around the hoop but uh there are a lot of problems and really exciting future for aft where like we can solve that problem together with the help of foundry acting as an agent on its own and we're really excited about that future and a lot of where you know we as north slope are trying to build our software direction uh is on how do we harness the power of that and build specific workflows for customers really really quickly and uh at very very high scale and so aft is this incredible jumping off point to be able to get that moving.</p>
</details>

客户是否愿意尝试这些全新的事物，还是他们有点犹豫？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are the customers open to trying these brand new things or are they a bit more hesitant?</p>
</details>

>> 是的，当然。嗯，你知道，这因组织而异，但我认为我们合作的大多数人都全身心投入。这是过去一年真正改变的第二件事，人们开始明白，如果你想改变你的组织运作方式，你必须全面进行。是的。如果你想像一家企业技术公司那样运作，这意味着整个公司都需要在AI上运作。是的。而AFT（可能是AIP的笔误）是一个令人难以置信的机制，可以更快地将许多产品投入生产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, absolutely. Um and I you know it varies from organization to organization, but I think that most folks who we work with, they're they're all in. And that's the other that's a second thing that's really changed in the last year is folks are starting to understand that if you want to transform how your organization operates, you kind of have to do it full scale. Yeah. And you want to operate like an enterprise technology company that means the whole company needs to operate on AI. Yeah. And a FTE is this incredible mechanism for getting many many of those products into production much much faster.</p>
</details>

North Slope不仅瞄准了哪些行业，而且在哪些行业中看到了更广泛的成功？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What uh industries were is North Slope not only targeting but are you seeing kind of more broad-based success in?</p>
</details>

>> 是的。是的。我的意思是，这非常Palantir。我的意思是，每个人都有问题。世界上任何试图做独特和具体事情的人都有问题。这是一个未解决的问题，从定义上来说，通用软件

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. I mean it's it's very palenteer. I mean everybody has problems. Anyone who's trying to do something that is unique and specific in the world has a problem. It's an unsolved problem by definition. generic software</p>
</details>

为各种行业的客户提供服务。我们的许多客户都在这里，非常令人兴奋。嗯，但我想说，我们非常自豪的一些事情是，我们正在帮助医疗机构确保医生能够为患者提供更高质量的护理，通过围绕他们提供的质量拥有更多数据，并减少在质量相关文书工作上的时间。嗯，我们也非常自豪我们正在帮助许多不同的能源公司向全球电网输送更多能源，特别是清洁能源，这非常非常酷，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for customers across a huge variety of industries. Many of our customers are here, really exciting. Um, but I'd say that, you know, some of the things we're very proud of is we're helping uh healthcare institutions make sure that doctors are able to provide one much higher quality care for their patients by having more data around the quality they're providing and spend a lot less time on the paperwork around that quality. Uh we're also really proud that we're helping many different energy companies ship more energy onto the worldwide grid, especially clean energy, which has been very very cool,</p>
</details>

>> 这在数据中心领域非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> which in the world of data centers is pretty important.</p>
</details>

>> 没错。特别是在我们现在进入的时代。嗯，我们与投资管理公司合作，与航空航天公司合作，嗯，我们与消费服务公司合作，嗯，兽医医院，诸如此类。这些人是如何找到你们的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Exactly. Especially in the the era we're entering right now. Um we work with investment management firms, work with aviation companies, uh we work with consumer services companies, uh veterinary hospitals, things like that. How are these guys finding you?</p>
</details>

>> 范围非常广。嗯，人们来找我们是因为他们喜欢与Palantir合作，他们想要更多，对吧？嗯，我认为对我们来说，真正令人兴奋的事情之一是，这并不是说，我的意思是，在这个领域有如此多的工作要做。Palantir生态系统中有如此多的动力，人们只是想更快地行动。嗯，我们就在那里提供额外的能力。所以，如果你没有一个完全专注的内部团队，或者你的团队和你正在合作的Palantir团队已经忙于构建用例1到10，但你想做20个，嗯，那通常就是我们接到电话的时候。你认为在未来十年，会有成千上万的这些Palantir衍生公司来实施它吗？因为AWS和Google就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Huge, huge swath. Uh well, people come to us because they love working with Palunteer and they want more, right? Uh, and I think one of the really exciting things for us is it it isn't I mean there's so much work to do in this space. There's so much momentum in the Palunteer ecosystem that folks are just trying to move even faster. Uh, and we're there to be that extra capacity. So, if you don't have a fully dedicated internal team or your team and the Palunteer team you're working with are already tied up building, you know, use cases 1 through 10, but you want to do 20, uh, that's usually when we get a call. Do you think there will be over the next decade thousands of these Palunteer derivative companies that are implementing it because is that's what exists for AWS and Google?</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

>> 嗯，我的诚实回答，我当然有偏见，对吧？嗯，但我的诚实回答是，我不认为会这样。我认为会有少数非常优秀的公司。嗯，我们非常渴望成为其中之一。嗯，我认为之所以如此，原因与许多Palantir客户本身如此独特的原因相同，他们试图构建一个独一无二的公司，这就是你与Palantir合作的原因，这就是我们与Palantir合作的原因，我们认为在大多数美国企业和世界各地，传统的企业技术方式是错误的，我们合作的许多客户认为在他们的行业中，其他人都做错了，他们希望建立一个别人无法追赶的复合优势。我认为我们的秘诀是在Palantir平台上进行前沿部署工程，这意味着我们可以成为一家软件公司。我们可以将软件作为我们的产出交付给客户，而不是像Karp博士所说的那样，与他们建立一种寄生关系。嗯，这对于许多传统参与者来说，实际上是一个非常困难的举动。对于许多，你知道，单一行业或单一工作流程的SaaS（Software as a Service: 软件即服务）软件公司来说，也很难做到。嗯，所以我非常有信心会有像我们这样的公司。我们在这个领域有很多朋友，他们是我们的友好同行。有太多的工作要做。嗯，但我确实认为这是一个相对较小的社区，而且世界正在发生变化，如果你现在开始，特别是如果你是今天在这里的客户，那么别人将很难追上你，因为你已经领先Palantir两三年了。我的意思是，以你将能够加速超越其他所有人的速度，从零到一真的非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um my my honest answer I'm I'm biased, right? Uh but my honest answer is I don't think so. I think there will be a small number of very good ones. Uh and we very much aspire to be one of those very good ones. Uh the reason I think that's true there's the same reason why a lot of Palunteer customers are uh themselves so unique like they are trying to build uh a an N of one company like that's why you work with Palunteer that's why we work with Palunteer we think that the traditional way of doing enterprise technology is wrong uh in most of corporate America and around the world and a lot of the customers we work with think that in their industry everyone else is getting it wrong and they want to build a compounding advantage that no one else can catch up to and I think that the the secret sauce for us is forward deployed engineering on the Palunteer platform means that we can be a software company. We can ship software as our output to our customers rather than having uh you know as as Dr. Karp describes it like a parasitic relationship with them. Uh and that's actually a very hard motion for a lot of traditional players to do. It's also very hard for a lot of you know uh single industry or single workflow SAS software companies to do as well. Uh and so I am very confident there are going to be others like us. We have a lot of friends who are working in this space uh who are sort of our friendly peers. There's so much work to do. Um but I do think it's a relatively small community and and the world is changing to a place where if if you start now uh especially if you're a customer who's here today, it's going to be really hard to catch you because you've got, you know, a two three fouryear head start on Palunteer. I mean, it's really difficult to go zero to one at the pace that you're going to be able to be accelerating away from everyone else.</p>
</details>

Bill，我向你提出最后一个问题，再次感谢你抽出时间。谢谢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Let me throw this last question at you, Bill, and thank you again for taking the time to do this. Thank you.</p>
</details>

>> 嗯，现在有很多关于AI是否是泡沫，或者AI是否被过度炒作的讨论，而你们每天都在为客户在这些公司中实施AI。你如何看待效率、利润、生产力、成本节约等概念？所有这些都是假的，还是企业软件中正在发生一些真实的事情？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, lot of conversations right now about if AI is a bubble or if AI is hyped up and you are implementing on the ground floor AI at these companies every single day for your customers. How are you thinking of the concept of efficiency, margins, productivity, saving cost like is all this fake or is there something real happening in enterprise software?</p>
</details>

>> 是的，确实有一些真实的事情正在发生，但也有很多炒作。嗯，我认为我们所处的这个领域的所有人，以及在这个房间里的所有人，独特之处在于正在发生一场筛选，人们正在努力弄清楚如何真正从中获取价值，而Palantir的酷之处在于AI是一种机制，对吧？嗯，我认为LLM（大语言模型）正在被本体论**代谢**（Metabolization: 指将LLM的能力整合到本体论中，使其成为本体论的一部分，从而更好地服务于工作流程），作为一种完成工作的方式，这极其强大，但正是本体论本身才使其成为可能，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, there is something real happening and also there's a lot of hype. Uh and I think one of the things that's unique about the space that we get to occupy all the folks who are in this room uh is there's a sifting that's happening where folks are trying to figure out how do I actually get the value out of this and what's cool about Palunteer is the AI is a mechanism right uh I think there's there's this metabolization of LLM into the ontology as like a way to get work done which is incredibly powerful but it is the ontology itself that enables that correct</p>
</details>

>> 所以我认为有很多炒作，嗯，AI将接管世界。我实际上认为它会，但这需要以生产企业的方式来做，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and so I think there's a lot of hype uh AI is going to go take over the world. I actually think it will, but it requires doing it in like a production enterprise way, right?</p>
</details>

>> 我认为Palantir做得非常正确的一点是，它始终是关于公司试图解决的具体问题。它是关于需要拥有该结果的具体用户，无论他们是自己完成工作流程，还是信任代理来完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And one of the things that I think a lot of uh there, you know, there's these LLM wrapper companies and, you know, software companies going after a single vertical. I think one of the things that Palunteer gets really right is it's still always about the specific problem that the company has that you're trying to solve. It's about the specific user who needs to be uh owning that outcome whether they are doing a workflow themselves or they're trusting an agent to do it</p>
</details>

>> 这创造了一个真实的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> which creates a real use case.</p>
</details>

>> 没错。没错。而且除了Palantir之外，任何人都很难在这方面竞争，因为实现这一点所需的复杂技术已经酝酿了20年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Exactly. Exactly. And it's really really hard for anyone other than Palunteer to go compete on that because the amount of complex technology it takes to enable that is 20 years in the making.</p>
</details>

>> 没错。对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Correct. Right.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

我喜欢。Bill Ward，谢谢你来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love it. Bill Ward, thank you for being here for me.</p>
</details>

如果有人看到这个并想从你那里获得一些Palantir的教育，他们如何联系你？嗯，请通过northslope.com联系我们，或者hell@northslope.com是我们的电子邮件地址。嗯，我们很乐意与你交谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If anyone sees this and wants to get some pounder uh education from you, how can they reach out? uh reach out to us at northslope.com or hell@northslope.com is our email address. Uh and we would love to talk to you.</p>
</details>

谢谢你的董事会。很感激。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you for the board. Appreciate it.</p>
</details>

>> 保重。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Take care.</p>
</details>

### Palantir与Crisis 24：AI驱动的地缘政治与地缘经济洞察

好的，大家好。欢迎回到频道。我们正在Palantir的年终活动Paragon现场。我与Crisis 24的Sid和Jeffrey在一起。谢谢你们来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right. Hello everybody. Welcome back to the channel. We are here at Paler's end of year event Paragon and I'm here with Sid and Jeffrey from Crisis 24. Thank you guys for being here.</p>
</details>

>> 非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you very much.</p>
</details>

>> 非常感谢。你们与Palantir的合作实际上发生在三年前。我基本上在2021年2022年合作宣布时开始围绕这家公司制作内容，那是当时最有趣的合作之一。当时没有人真正关心Palantir，没有人知道Palantir。所以每一份新闻稿都会立即被剖析。所以我想很快把发言权交给你们。嗯，你们可以介绍一下自己，你们在Crisis 24做什么，以及Crisis 24是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you very much. So your partnership with Paler actually happened about 3 years ago. Uh I started making content around the company back in basically 2021 2022 when the partnership was announced and it was one of the more interesting partnerships that came out during that time. No one really cared about Palanteer. No one knew about Palanteer. So every press release would be like immediately dissected. So I just want to give you the floor real quick. Uh you can introduce yourself what you do at Crisis 24 and what is Crisis 2024 or 24.</p>
</details>

>> 当然。谢谢邀请。我们非常感激。Crisis 24是一家真正致力于如何让最杰出的组织和个人在世界任何地方自信地开展业务的公司，而无需担心在当今日益不确定的世界中他们可能不得不担心的事情，对吧？他们的物理安全、健康安全、网络安全，所有这些。作为Crisis 24，我们提供解决方案，让我们的客户能够做他们最擅长的事情，那就是他们的业务，对吧？或者他们的家庭。我认为这就是看到公司过去和现在的发展方向非常有趣的地方，因为我们确实将自己视为公司和个人当今发展轨迹中不可或缺的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Sure. Well thanks for having us. We really appreciate it. Crisis 24 is uh a company really premised on how do we allow the most uh distinguished organizations and individuals that operate? How do we allow them to do what they do anywhere in the world with confidence without having to worry about things that in today's increasingly uncertain world they may have to, right? Their physical security, their health security, their cyber security, all those sorts of things. As Crisis 24, we bring solutions for to allow our clients to do what they do best, which is their business, right? Or their family. And that's where I think it's been really interesting to see uh where the company has been and where it's going because we really look at ourselves as being instrumental to that fabric of where uh companies and individuals are going these days.</p>
</details>

>> 对。Jeffrey。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right. Jeffrey.</p>
</details>

>> 太好了。是的。嗯，我的职责是领导IA，这是Crisis 24的一部分，它实际上是与Palantir的合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Great. Yeah. Um so my role is I uh lead ya uh which is the part of crisis 24 uh that is actually a partnership with palunteer right</p>
</details>

>> 嗯，所以IA（Intelligence Assessment: 情报评估）真正专注于如何使用AI和AI工具为市场带来企业解决方案。我们的第一个产品，**总统简报**（Presidential Brief: 模仿美国总统每日情报报告的AI驱动产品），模仿了美国总统每天收到的情报报告，它审视并获取全球所有地缘政治和地缘经济问题的所有数据点，并进行优先级排序，以了解为什么某个问题对关键高管很重要。嗯，它不仅进行优先级排序，还使用情报界**专业技能**（Tradecraft: 指情报收集、分析和行动的专业方法和技术）中开发的标准分析技术进行影响评估，以帮助决策者从被动决策转向主动决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> um and so a is really focused on uh how do we use AI and AI tools uh to bring enterprise solutions uh to the market. Our first product uh the presidential brief uh modeled after the intelligence report that the president of the United States gets uh every day uh looks at and uh uh takes all the data points of all the geopolitical and geoeconomical uh issues uh that exist around the world uh and look to do a prioritization that understands why something should be important to a key executive. uh but not just uh a prioritization but an impact uh assessment using standard analytical techniques uh developed in the tradecraft of the intelligence community uh to help the decision maker uh move from reactive decisioning to proactive decisioning.</p>
</details>

>> 是的。我三年前就觉得这很有趣，因为Palantir的核心就是数据驱动的决策。你如何从数据中收集洞察，然后有效地大规模做出决策？所以我想我们从这个问题开始。嗯，收到这份总统简报的高管，我认为这是一个非常有趣的概念，你们称之为IO报告。Palantir通过Foundry或本体论在实现这份简报方面扮演了什么角色？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And the reason I thought this was so interesting uh even 3 years ago was because Palier is all about datadriven decision-m right? How do you gather insights from the data and then effectively make the decision at scale? So I guess we'll get started with this question. um executives that get this presidential brief I think is a very interesting concept and you guys call it this IO report. What exactly does Pounder's role I guess through Foundry or the ontology play with making this thing real for executives?</p>
</details>

>> 是的。这是一个很好的问题，Jeffrey会对此进行扩展，但我认为关键是利用Foundry平台， literally数十亿条信息汇集在一起，它们被摄取、结构化和分析，这是基础。我们与Crisis 24所做的是，我们将情报专业技能和安全专业技能带入其中。因此，凭借专有的情报框架和安全设备，我们能够获取这些信息并将其放入情报界通常会分析和结构化信息的结构中，使其不仅成为有趣的信息，而且成为你可以查看并能够解读关键洞察和可采取的关键行动决策的反应性信息。因此，这就像一位CEO收到关于其供应链的更新，并立即意识到如果出现问题，需要采取一些措施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Well, it's a great question and Jeffrey will expand upon this, but I think the key is uh leveraging the the Foundry platform where literally billions of pieces of information are coming together and they're being ingested, they're being structured, and they're being analyzed and that is the foundation and what we do with uh a crisis 24 is we bring intelligence tradecraftraft and security tradecraftraft to that. So with proprietary intelligence frameworks um and and security uh uh kind of apparatus we're able to take that information and put it in a structure which the intelligence community normally would analyze and structure information such that it becomes not just um interesting information but it becomes uh reactionary information that you can look at and then be able to decipher not just key insights but key actionable decisions to be taken. And so this would be like a CEO getting an update on their supply chain and immediately realizing something needs to be done if something's not going well.</p>
</details>

>> 没错。绝对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Correct. Absolutely.</p>
</details>

>> 是的。嗯

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yes. And um</p>
</details>

>> 把麦克风靠近一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> put the mic a little bit closer.</p>
</details>

>> 哦，当然。是的。所以，嗯，关键是能够将所有不同的信息片段结合起来，我们通过摄取各种不同的数据点来做到这一点。从天气、政治动荡，到经济报告，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, of course. Yeah. So, um the uh the key is is being able to have all of the different uh bits of information combined and and we do that through ingesting uh all kinds of different data points. Everything from weather uh political unrest um to uh you know economic reports,</p>
</details>

>> 对吧？嗯，如果我们没有Foundry和**AIP**（AI Platform: Palantir的AI平台）平台，我们无法实时完成所有这些。嗯，以前需要数周才能分析和理解影响的事情，现在可以实时发生。嗯，这是一个非常有趣的机会，因为如果你思考过去20年企业软件发生了什么，其中很多都专注于业务运营，了解从会计到薪资，再到ERP系统、销售系统、开发系统的一切，真正专注于提高高管对其业务的了解程度，而IA（Intelligence Assessment: 情报评估）真正旨在重塑我们对企业外部世界的思考，并对从供应链到交易员、保险、医疗保健的一切建立结构化理解，当我们开始应用我们为推出TPB（The Presidential Brief: 总统简报）所做的所有工作时，或者总统简报，将在我们围绕新用例推出新产品时重复使用，利用创建结构化理解的相同概念，从全球数据中提取噪音，这些数据在Foundry平台上对我们可用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right? Um and and and we wouldn't be able to do that all in real time uh if it wasn't for both uh the foundry and AIP platforms. Um and uh the ability for uh something that would have happened to take weeks uh or uh you know to to analyze and understand the impact uh now happens in real time. uh which is a really interesting opportunity because if you think about uh what's happened in enterprise software for the last 20 years a lot of it has been focused on uh the business operations uh understanding you know everything from accounting to payroll to ERP systems uh sales uh systems uh de development systems really focuses on increasing the level of fidelity that an executive can know about their business and IA really uh uh aims to reshape uh what we can think about is the world external to a business and making uh structured understanding of everything from supply chain uh to a trader uh insurance healthcare uh finding those use cases uh as we start to apply uh all of the work that we've done to launch TPB uh or the presidential uh brief uh will be reused as we launch new products around new use cases uh leveraging that same concept of creating structure out of the noise uh that exists AC with all of the global data uh that is available to us on the uh Foundry platform.</p>
</details>

>> 我也许会补充一点，嗯，它确实给了高管层舒适和信心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And I would maybe add um to that it's it's really giving um those the executive suite comfort and confidence.</p>
</details>

>> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

>> 并且能够做出决策，因为它们不仅来自AI驱动的机制，而且来自像Palantir Foundry平台这样值得信赖的来源，而且它们是可引用的。你可以看到信息来自哪里。它可归因于特定来源。所以它不仅仅是凭空猜测，而是一个黑盒子，它实际上是可归因和可分析的。我举一个例子或一个案例。嗯，我认为理解这种能力的一个有趣方式是，想象一家全球制造公司。他们面临一种情况，他们从世界不同地方采购材料，而且可能有一套稀土材料，他们只从世界某个特定地方采购。而稀土在过去几年变得非常稀有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And in the ability to take decisions because not only are they uh coming from an AIdriven uh mechanism and coming from something as trusted as the the Palunteer Foundry platform, but they are referencable. You can you can see where information comes. It's it's attributable to specific sources. So it's not just finger in the winding it and a black box, but it's actually attributable and uh analyzable. I would give a a story maybe or a case in point. Uh I think one interesting way of understanding what the capability is um is just think of a a global manufacturing company. They're in a situation where they're sourcing materials from different parts in the world and there might be a rare earth set of materials that they source from only a certain place in the world. And rare earths have become very rare the past couple of years.</p>
</details>

>> 举个例子，嗯，在乌克兰入侵发生之前。很多稀土都在乌克兰发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And put a situation for instance uh you know before the the invasion of Ukraine happened. A lot of rare earths are found in Ukraine</p>
</details>

>> 有些制造公司在那里采购。试想一下，如果有了情报，可以获取关于部队编队、部队集结地点、训练地点、天气信息等安全情报信息，从而能够预测俄罗斯入侵乌克兰的风险概率。供应链本可以提前调整，以防止中断，对吧？嗯，这就是与Palantir合作的独特之处，因为通过IA平台，AI情报每天早上都会送到高管套件，他们可以查看这些信息，并真正获得关键决策和选项集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and there are manufacturing companies that were sourcing there. Just think if there was the intelligence to take uh security intelligence information on troop formations where where uh troops were massing, where they were training, weather information otherwise where there was a ability to really maybe even uh forecast a a risk probability of an invasion in Ukraine by Russia. Supply chains could have been adjusted in advance to prevent disruptions, right? And um this is where the offering with pounder is really unique because with the IA platform the AI intelligence comes every morning to the intellig to the uh seauite where they can be able to look at that and really have key decisions and option sets presented in front of them.</p>
</details>

>> 这些情报来自公司内部的所有数据吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And this intelligence is coming from all the data inside the company.</p>
</details>

>> 它是专有的，但也从全球40,000个开源数据源中提取。因此，它来自多种语言来源，并且都可以翻译，但都可引用。但仅仅获取这些信息，然后是AI生成的智能选项，用户可以利用这些选项与自己的内部情报团队合作。没错。但他们也可以利用它来呼叫，Crisis 24有230名情报分析师，他们覆盖全球每个国家，涉及多个领域。所以能够说：“天哪，我看到乌克兰可能发生中断。呼叫Crisis 24，我能联系乌克兰部门吗？”你联系乌克兰部门的负责人，与该国的专家交谈。甚至在此之外，我们在乌克兰和世界其他地方都有实地资产。所以你甚至可以更进一步，获取这些专有情报来支持业务决策。对。所以它真的是洞察先机，能够将威胁转化为商机。你们会将自己归类为一家SaaS（Software as a Service: 软件即服务）公司，主要提供这种服务，客户之所以付费给你们，是因为通过本体论获得情报，甚至理解和情境化呼叫乌克兰某人的必要性，这才是价值所在。是的，我认为理解这一点很重要，无论是SaaS还是AI，你知道，我认为关键在于它不仅仅是技术，我认为Sid暗示了这一点，因为作为商业领袖做出决策时，信任是一个非常重要的因素。没错。而且能够理解从采购到查看多种语言，能够使用情报专业技能中开发的那些标准分析技术，它超越了数字层面，但正如Sid所暗示和谈论的，它真正关乎我们如何将数字与人类因素结合起来。嗯，我们看到有趣的是，过去那些制作报告的人，现在正在加入决策团队，因为这更多地关乎影响和战略反应，以及识别更多机会，就像乌克兰的情况一样，他们可以做出增量决策，而当你可以采取行动来预防、加速或改变方向时，这些决策的价值就更高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's it's proprietary but it's also pulling from 40,000 open source data sources around the world. So it's coming from multiple language sources and it's all translatable but all referenceable. But then just taking that information and then there uh AI generated um intelligence uh option options that are presented and what the the user can do is leverage that with their own internal intelligence teams. Correct. But they can also then leverage it to call in and crisis 24 has 230 uh intelligence analysts on staff that cover every country in the world across multiple vectors. So being able to say, "Oh my gosh, I see a potential disruption happening in Ukraine. call crisis 24, can I get the Ukraine desk? You get the lead of the Ukraine desk and you talk to that person who's a specialist in that country. And then even beyond that, we have assets in situ in Ukraine and other parts around the world. So you can even take it one step further and get that proprietary intelligence to feed a business decision. Right. So it's it's really seeing around corners and being able to take threats and turn them into opportunities for a business. And you guys would classify yourself as a SAS company that essentially uh provides this offering and the reason customers pay you guys is because the intelligence via the ontology to even understand and contextualize the necessity to call someone in Ukraine is where the value kind of lies. Yeah, I think it's important to understand that um whether it's SAS or AI, you know, I think I I think the the key piece is is that it's not just the technology and I think Sid was alluded alluding to that uh because as as business uh as business leaders make decisions, trust is a really important equation. Correct. And to be able to uh understand everything from the sourcing uh to be able to look at uh multiple languages uh to be able to uh use those standard uh analytical uh techniques uh developed in in in in the intelligence tradecraft uh it it goes beyond just the digital uh but as Sid alluded to and is talking about uh it really is about how can we also merge that with the human component as well. Uh and what we're seeing is interesting uh what's happening and is those uh those people who in the past were creating those reports um are now uh joining the decision-m team because it's more about the impact of and the uh strategic reaction to uh and uh identifying more opportunities uh like the situation in Ukraine where they can make incremental decisions and those val the decision is is is is ever more valuable when you can actually take an action to either prevent accelerate right or uh change course.</p>
</details>

>> 是的，这真的很了不起，因为我认为这个解决方案和与Palantir的合作之所以如此具有变革性，是因为在这个世界中，它更加不确定，但也存在更多的噪音，而获得清晰度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, it really is amazing because I think this this solution and this partnership with Palunteer is so transformational is because in this world where it is more uncertain but it also there's so much more noise out there and getting clarity</p>
</details>

>> 从噪音中获取信号

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> getting signal through the noise</p>
</details>

>> 从噪音中获取信号是关键，我认为这种合作关系正是实现了这一点，特别是在当今的商业世界中，它比以往任何时候都更具差异化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and signal with it from the noise is key and that's what I think this partnership enables and specifically that is even more differentiating in the business world today than it ever has been in the past.</p>
</details>

>> 同意。嗯，作为一种产品和核心软件服务，这种情报简报存在哪些风险？它从所有这些开源数据中提取信息，数据可能不好吗？数据可能被错误翻译吗？你们如何看待风险，以及公司如何预防或缓解这些风险？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Agreed. uh what risks are there to this intelligence briefing as a product and as a like s a core software offering that it's pulling from all this open source data like could the data be bad could the data be mistransated how do you think of risks and then the company's prevention mechanism for or mitigation mechanis mechanism for those risks</p>
</details>

>> 是的，我认为，嗯，这很有趣，对吧？我的意思是，有几件不同的事情浮现在脑海中。首先，嗯，我们从情报界的专业技能中借鉴的一件事是，嗯，**ICD 206和203**（ICD 206 and 203: 美国情报社区指令，旨在确保情报分析的客观性和准确性，减少偏见）标准，它们基本上审视并理解我们如何消除偏见，对吧？所以，无论我们称一个国家的领导人为“政权”，嗯，都会有特定的后果，以及我们如何消除这种后果，所以它关乎正在发生的事情和决策。嗯，所以，我认为，当我们开始思考，嗯，一个工具的好坏取决于你投入了什么。嗯，所以信任，正如我们之前谈到的，非常重要。嗯，但如果你开始思考像聊天机器人一样，你知道，X对我的业务有什么影响，这只取决于你对业务的了解程度。所以我们看到的机会是扩展和理解战略增长、关键风险和问题、供应链，能够在一个基于信任的平台中摄取这些信息，嗯，真正使我们能够为决策者提供他们所需的信息，嗯，以实现加速的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah I think it's um it's it's it's interesting right I mean there's a couple of different things that uh come to mind uh first of all um one of the things that we leverage from the trade craft of the intelligence community uh is uh the standards ICD ICD 206 and 203 uh which basically looks at and understands uh how do we remove bias right uh so whether we call a uh country's leadership a regime uh you know has specific consequences uh and how do we remove that so it's about what's happening and the decision um so uh also I think as we start to think about uh how uh a tool is only as good as as what you put into it. Um so trust as we talked about before is really important. Uh but if you start to think about like the chatbot, you know, what is the impact of X on my business uh is only as good as uh knowing the business. And so where we're seeing is the opportunity to extend and understand both strategic growth uh key risks uh and problems uh supply chains uh being able to ingest that information uh in a trustbased platform uh really allows us to actually uh enable that decision maker with the type of information they need uh to see uh accelerated outcomes.</p>
</details>

>> 对。我还要补充Jeffrey所说的，即压力测试AI产出的能力，在我们的许多案例中，实际上来自我们的客户拥有内部情报团队，这可能是一个优势。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right. And and I would also add to what Jeffrey said that that uh ability to pressure test what the AI produces really comes from in a lot of our cases our clients actually have internal intelligence teams which can be a veter. Yeah.</p>
</details>

>> 同时，我们有230名经过培训的分析师，他们也进行审查，这样在真正发布之前，几乎有一个良好的批准测试必须发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And then at the same time we have our 230 analysts that are trained in this and they also vet such that there's almost a um a a good seal of approval test that has to happen before it really goes right</p>
</details>

>> 发布。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> to press.</p>
</details>

这太棒了。给你们两位的最后一个问题，Sid，Jeffrey。谢谢你们抽出时间。嗯，我们一直在谈论AI，但我很好奇你们的看法。过去三年，AI席卷了世界。Palantir已成为最大的AI公司之一。嗯，AI是如何运营你们的业务的？你们在使用LLM吗？你们在编排LLM吗？对你们来说，成为一家AI优先的公司意味着什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has been awesome. Last question for you both Sid Jeffrey. Thank you guys for taking the time to do this. Um, we've been talking a little bit about AI, but I'm curious about your perspectives. Past three years, AI has taken over the world. Palunteer has become one of the largest AI companies. Um, how is AI operationalizing your business? How are LLMs, are you using LM? Are you orchestrating LM? What is what does it mean for you guys to be an AI first company?</p>
</details>

>> 这是一个很好的问题。我们思考如何将AI优先融入我们所做的一切。因此，它确实是我们每个流程的核心。不仅是我们内部使用的，而且因为我们内部使用，我们希望将其放入我们面向外部的产品中。因此，它确实是我们视为一种倍增器，可以扩大我们所做的工作，并在我们的客户群中扩展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's a great question. We think about a how we can make AI first in everything we do. And so it really is at the core of every process. Not that just we we use internally but because we use internally we look to put it in our externally facing products. And so it really is something that uh we see as a force multiplier for how we can take what we do and expand that amongst our our client base.</p>
</details>

>> 是的。我认为，嗯，我们团队经常讨论的一件事是，嗯，我们有一个AI赋能的产品，但成为一家AI公司意味着什么，对吧？嗯，你知道，随着一切变化的步伐，AI以如此多的不同方式触及业务，嗯，从我们的角度来看，有趣的是我们能多快地嵌入市场上的东西，以便我们同时也是消费者。嗯，但当我们思考产品时，嗯，你知道，有许多模型在那里，而且似乎每天都有新的更新，嗯，我们发现每个模型的功能都因公司而异。所以我们可能有一个模型可以帮助我们撰写报告，嗯，然后我们可能会与另一个模型合作来对报告进行质量保证。嗯，所以，嗯，你知道，我认为这是一个很好的例子，说明我们如何看待AI影响我们的业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And I think uh one of the things we talk about as a team often is uh we have an AI enabled product uh but what does it mean to be an AI company, right? And uh you know with the pace of change of everything there's so many different ways that AI is touching business and uh from our perspective what makes it interesting is how quickly can we embed uh what is uh in the market so that we are consumers at the same time. Um but as we think about the product uh you know with mo uh with many models out there and every day there seems to be a new update to one of them uh what we're finding is is that the the capabilities of each model change uh from from company to company. And so where we might have something work with us to write a report um then we might work with another model to QA the uh the report. Um and so um you know in that I think that that's a good example of how we see uh AI impacting our business.</p>
</details>

Jeffrey，Sid，非常感谢你们。非常感激。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jeffrey Sid, thank you guys so much. Pleas deeply appreciate it.</p>
</details>

>> 荣幸。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Pleasure.</p>
</details>

Crisis 24和Palantir在Paragon大会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Crisis 24 and Pounder at Paragon.</p>
</details>

### Palantir与Cubic Corporation：加速国防供应链与战场决策

大家好。欢迎回到频道。我们正在Palantir的年终活动Paragon现场。我与Cubic Corporation（**Cubic Corporation**：一家多元化的运输和国防公司）的总裁兼首席执行官Steve在一起。Steve，谢谢你来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right. Hello everybody. Welcome back to the channel. We are here at Pounder's end of year event called Paragon. I'm here with Steve who is the president and CEO of Cubic Corporation. Steve, thanks for being here.</p>
</details>

>> 嘿，谢谢邀请。很高兴来到这里。我认为这次活动最酷的地方在于，客户正在展示真实的用例，并展示他们正在参与的合作关系。嗯，对于那些不知道Cubic Corporation做什么的人，如果你能简单介绍一下它的背景，然后我们将讨论你们今天与Palantir共同发布的新闻稿中的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Hey, thanks for having me. Nice to be here. The thing about this event that is super cool, I think, is that customers are showing real use cases and showing the partnerships that they're engaging in. Uh for those that don't know what Cubic Corporation does, if you can give a little bit of a background about what it is and then we'll get into the use cases in the press release that you guys announced today with Pounder.</p>
</details>

>> 是的，当然。是的。嗯，Cubic是一家多元化的运输和国防公司。我们，嗯，有点像我们称之为在技术与政府的交汇处运营，我们真正专注于关键的客户用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, sure. Yeah. Uh Cubic is a diversified transportation and defense company. We uh kind of refer to it as we operate at the intersection of technology and the government and we really focus on critical customer use cases.</p>
</details>

>> 是的。嗯，我今天读到的新闻稿中一个有趣的地方是，技术与政府之间的交汇点也确实不容易探索。我的意思是，Palantir的整个历史都是从向政府提供技术开始的，而这些用例最终变得有些有价值，并使他们成为了今天的公司。所以我想，与Palantir合作的核心理念是什么，以及它如何扩展到你所看到的有价值的用例中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. The uh interesting thing as well about the press release that I was reading today is that the intersection around technology and government is also really not easy to explore. I mean Pounder's entire history started with providing technology to the government and those use cases ended up being somewhat valuable and they turned into the company they are today. So I guess what is the core thesis of the collaboration with Pounder and how has that expanded into the use cases that you've seen value in?</p>
</details>

>> 是的，你知道，我们的，嗯，我们与Palantir的合作，嗯，正在利用两家公司的独特能力，主要是为了响应**国防部**（Department of War: 指美国国防部）优先考虑速度和创新的号召。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, you know, our our um our partnership with with Palunteer is uh is one that's leveraging the unique capabilities of both companies primarily to respond to the Department of War's rally cry to prioritize speed and innovation.</p>
</details>

>> 对。嗯，你知道，如果我们来看，我们主要关注两个用例。一个是关于供应链。供应链已经过时了。它们并没有真正建立起来以支持国防部的需求，特别是如果他们确实需要大幅度提升能力的话。嗯，所以我们正在与Palantir合作。我们将利用他们的供应链优化软件。我们将把它整合到我们的生产环境中，彻底改造我们的供应链。这实际上是为了解锁我们分散系统中所有的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right. And um you know if you look at there's really two use cases that we're focused on. One is around the supply chain. Supply chains are antiquated. They're not set up really to scale to support uh the Department of of War's needs, especially if they do need a a serious ramp up. And uh so we're working with Palunteer. We're going to be utilizing their um supply chain optimization software. We're going to integrate that into our production environment, completely transform our supply chain. It's it's really an attempt to unlock all the data that sits in our disparant systems</p>
</details>

>> 以推动周期时间的缩短，提供对我们供应基地状态和健康状况的实时可见性，但最终是为了提高我们的能力和加快速度。所以这符合速度和创新的要求，这主要围绕着供应链。你能谈谈本体论在你们业务交汇点的核心软件产品，以及为什么你们认为它比其他软件提供商更适合你们正在做的事情？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> to drive cycle time reductions to provide real-time visibility into the status and health of our supply base, but ultimately to increase our capacity and ability to go faster. So that that hits the speed and innovation piece, and that's really around the supply chain. Can you speak a little bit to the uh kind of core software offering of the ontology at the intersection of your business and why you guys thought that over the other software providers made more sense for what you guys are doing?</p>
</details>

是的，你知道，我认为，Cubic是一家已经存在了70年的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, you know, I I think uh you know, Cubic is a company that's been around for 70 years and</p>
</details>

>> 嗯，我们通过大量的收购实现了增长和扩张。所以，你可以想象，我们今天拥有的，是许多不同的系统，它们之间沟通不畅。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and uh we've grew and expanded through a lot of acquisitions. And so, as you can imagine, what what what we have today is a lot of different systems that don't talk well to each other,</p>
</details>

>> 对吧？所以要将它们全部整合起来，需要大量的体力劳动，嗯，大量的离线电子表格。当我们开始与Palantir交谈时，嗯，我们看到一个机会，几乎可以彻底改变我们处理供应链的方式。所以我们不把它看作是一种叠加。我的意思是，它会先以叠加的方式开始，将我们的系统整合起来，但我认为随着时间的推移，当我们真正深入了解本体论时，我们会发现我们可能想要围绕它进行彻底改造，然后摆脱所有系统，并以这种方式利用其能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right? And so to stitch it all together, a lot of manual effort, uh, a lot of offline spreadsheets. And you as we started talking to Palunteer, um, you know, what we saw was an opportunity to almost clean sheet the way we do our supply chain. So we see it as not as a kind of an overlay. I mean, it'll it'll start off more like an overlay to stitch our systems together, but I think over time as we start to really get into the ontology, we're going to see that we'll probably want to clean sheet it around it and then get rid of all the systems and leverage the capability that way.</p>
</details>

>> 是的。是的，我认为Palantir与其他公司之间这种共生关系是，如果你能清理所有数据，你知道，Palantir经常说，数据一开始不必是干净的，但它必须有雄心，让用例从数据的本体化中演变出来，让所有数据汇集到一个地方，这确实倾向于替换软件堆栈的许多其他部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah, and I think that the sort of symbiotic relationship between Palunteer and other companies is if you can clean all the data, you know, something that Paler says a lot is that the data doesn't have to be clean in the beginning, but it just has to have the ambition to have the use cases evolve from the ontologization of the data, having all the data come in one place and that really does tend to replace a lot of other parts of the software stack.</p>
</details>

>> 是的。听着，我知道我们的数据不干净，但这不重要，我们实际上可以使用系统来清理数据。所以这就是看待它的方式，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Look, our I know our data is not clean, but that doesn't matter what we can actually use the system to clean the data. So that's that's the way to look at it,</p>
</details>

>> 对吧？嗯，国防领域，国防部，我们有一个新的政府。他们对国防的看法有不同的范式方法。作为CEO，你如何考虑定位Cubic，以响应你所说的国防部所关心的号召？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right? Um the defense space, Department of War, we have a new administration. They have a different paradmatic approach about how they think of defense. How do you as a CEO think about positioning Cubic uh for this rallying cry that you've said the Department of War is caring about?</p>
</details>

>> 是的，我给你一个具体的用例，这与我们与Palantir的合作有关。我们长期以来一直是国防部，特别是美国陆军的战术边缘计算和网络设备的供应商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I I'll give you one specific use case which is relevant to our our our our partnership with with with Palunteer. We've been a a longtime provider to Department of War and specifically the US Army of their tactical edge computing and networking equipment.</p>
</details>

>> 对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right?</p>
</details>

>> 所以，想象一下你被部署了，需要在战场上建立指挥和通信。我们就是做这个的。嗯，但如果你思考未来的样子，嗯，以及围绕AI赋能的战场这个机会，你知道这意味着什么？你如何将决策时间从几天、几周、几个月缩短到几秒钟？你如何提高决策质量？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, think of that as you're deployed and you need to be able to set up command and communication on the battlefield. We do that. That's what we do. Um but if you think about you know what the future looks like uh and this opportunity around an AI enabled battlefield and you know what does that mean? How do you take the decision time from days, weeks, months and make it in seconds? How do you improve the quality decision?</p>
</details>

>> 这就是硬件和软件结合的地方。所以我们在这个特定用例中是硬件提供商，Palantir是软件提供商。因此，将这些能力整合到陆军的下一代系统中，就是我们关注的重点。这是合作的关键部分，即我们如何利用他们正在构建的软件，以减少决策时间和提高质量，同时利用我们下一代产品中提供的网络和计算能力。当你说在边缘时，我想象你需要一个能够真正在边缘操作的软件伙伴才能实现这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's where hardware and software come together. So we're a hardware provider in this particular use case and Palunteer is a software provider. And so merging those capabilities into the next generation systems for the army is is is what we're focused on. And that's a key part of the partnership is how do we leverage the software that they're building that's going to reduce decision time and quality with the network and computing horsepower that we're providing in our next generation products. And when you say at the edge, I would imagine you need a software partner that can actually operate at the edge to make this work.</p>
</details>

>> 是的。是的。是的。对我们来说，我把它看作是，嗯，嗯，作为硬件提供商，我们对软件是某种程度上的不可知论者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Yeah. It's it's uh for us, I look at it as um um being a a hardware provider, we're sort of agnostic to to to software.</p>
</details>

>> 嗯

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um</p>
</details>

>> 我们正在努力帮助陆军或国防部在完全断开连接的环境中作战。所以，你知道，一个不完美的环境是数据无法从卫星或无人机流向士兵的环境。那么，你如何将这些数据传给士兵呢？对吧？你可以通过软件解决方案做到这一点，你也可以通过将软件和硬件结合起来，以模块化的用例部署它，让士兵可以前沿部署，不连接。是的。但在下一个机会获得完全连接时，所以这是一个软件硬件组合，这就是我们试图解决这些问题的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> what we're trying to do is help the army or the department of war in any case um operate in a completely disconnected environment. So, you know, an imperfect environment is one where um data doesn't flow from satellites or drones to the soldier. So, how do you get that data to the soldier, right? And you can do that through software solutions and you can do that through merging software and hardware and putting it out in a modular use case where the soldier can actually be forward deployed not connected. Yes. but at the next opportunity to get the the full connection of the so that's a software hardware combination and that's that's how we're trying to solve those problems.</p>
</details>

Steve，非常感谢你抽出时间。给你的最后一个问题。嗯，本届政府，特别是国防部门，非常拥抱AI，他们说我们将在AI领域处于领先地位。我们希望在与同样拥抱AI的敌对国家竞争时获胜。作为CEO，你从哲学上如何看待AI以及它与国防的交汇？是的，我认为，嗯，大概两年前，我很难清楚地说明我们技术投资中有多少比例用于AI，而现在我会说几乎全部都是。所以，对我们来说，它真的围绕着我们必须迅速朝着那个方向前进。嗯，所以我们正在拥抱它。嗯，我们正在寻找可以快速部署以提供即时效益的用例，然后与客户和像Palantir这样的合作伙伴协作迭代，以进行这些改进。所以对我们来说，它就是利用商业上可用的软件和硬件，并将其部署在快速迭代的环境中。这就是我们试图将AI技术推向市场的方式。Steve，非常感谢你的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Steve, thank you so much for taking the time to do this. Last question for you. Uh this administration and particularly the defense part of this administration has really embraced AI and they've said that we are going to be on the cutting edge of AI. We want to win when it comes to the adversarial nations that are also embracing AI. How are you as a CEO philosophically thinking about AI and at the intersection of defense? Yeah, I look I I I we think we're uh probably two years ago I would have a hard time articulating what percentage of our technology investment was in AI and now I would say almost all of it is. So it's it's it's it's really around for us we think that we have to move in that that direction quickly. Um so we're we're embracing it. uh we're looking for use cases that can be deployed quickly to provide uh immediate benefit and then uh iterating collaboratively with the customers with partners like Palunteer to make those improvements. And so for us it's it's you know taking advantage of commercially available software and hard hardware and deploying it in a rapid iteration environment. That's how we're trying to bring the AI technologies to the market. Steve, thank you so much for your time.</p>
</details>

>> 很高兴与你交谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Great talking to you.</p>
</details>

### Palantir与Kavanaaugh Corporation：Foundry驱动的建筑业运营系统

好的，大家好。我们正在Palantir的年终12月活动Paragon现场。我今天与Kavanaaugh Corporation（**Kavanaaugh Corporation**：一家重型土木工程建筑公司）的Joe以及Palantir的Echo Jesse在一起。谢谢你们来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> All right. Hello everybody. We are at Palanter's end of year December event called Paragon. I'm here today from Kavanaaugh Corporation. Joe and their echo Jesse from Palanteer. Thank you guys for doing this.</p>
</details>

>> 很高兴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Happy.</p>
</details>

>> 谢谢邀请。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thanks for having us. Yeah.</p>
</details>

那么Joe，我们开始吧。我们在AIPCON（**AIPCON**：Palantir AI平台大会）五号会议上做过一次小采访。嗯，从那时起发生了很多变化，鉴于我一小时前刚看到的演示，似乎很多变化都是积极的。自从你们开始与Palantir合作以来，发生了什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So Joe, let's get started. We did a little bit of a small interview back at the AIPCON number five. Uh, a lot has changed since then and given the presentation that I just saw an hour ago, seems like a lot has changed in the positive sense. What has happened since you guys first started working with Palunteer?</p>
</details>

>> 是的，我们花了很多时间来构建我们的核心本体论，我们称之为基础本体论，你知道，最近，正如我们所看到的，我们正在以指数级的速度推出越来越多的工具，仅仅因为我们现在拥有了干净的本体论。我们能够非常非常快速地构建工具。你能向听众介绍一下Kavanaaugh做什么，以及一年前开始与Palantir合作的哲学原因是什么吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, well, we spent a lot of time up front kind of building out our core ontology, the foundational ontology we call it, and you know, just recently, as we saw there, we're just rolling out more and more tools at kind of an exponential rate just because we have that clean ontology now. We're just able to build tools really, really quickly. And can you give the audience a little bit of background about what Kavanaaugh does and kind of what was even the the philosophical reason to begin working with pounder a year ago?</p>
</details>

>> 嗯，是的，我们只是一家位于加拿大渥太华的重型土木工程建筑公司。你知道，每天有500台大型挖掘机、铲车、卡车在路上。嗯，我们偶然参加了Palantir举办的一个训练营，我们看到了它，然后我们惊呼：“天哪，他们做到了！”因为我们一直在努力连接他们的数据，你知道，在建筑业，每天都像“土拨鼠日”（Groundhog Day: 指每天重复相同的事情，没有进展）。是的。所以我们有点厌倦了现状，我一直是PowerBI（微软的商业智能工具）的人，VLOOKUP（Excel函数）的人。一旦我看到本体论对象被连接起来，你知道，有一个关于我们卡车的训练营，我当时想：“天哪，他们做到了。这现在就是我的生活。我们必须，我们必须让它奏效。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, yeah, we're we're just a heavy civil construction company in Ottawa, Canada. You know, like 500 big excavators, shovels, trucks on the road every day. And uh we just so happened to stumble into a boot camp Palunteer was putting on and we saw it and we just went, "My god, they've done it." Because we we're trying to connect their data and you know, in construction, it's Groundhog Day every day. Yep. And so we were kind of sick of the status quo and I was always the PowerBI guy, the VLOOKUP guy. And as soon as I saw that ontology objects being connected, you know, there's a boot camp about our trucks and I was like, "Oh my god, they've done it. This is now my life. We have to we have to make this work."</p>
</details>

我喜欢。Jesse，你一直是他们的Echo。你能向听众解释一下Echo到底做什么，以及你如何看待他们作为早期客户的进展吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love it. Jesse, you've been their Echo. Can you explain to uh the audience what exactly an Echko does and how have you seen their progression as a early customer?</p>
</details>

>> 当然。我参加了我们举办的第一个训练营。嗯，部署策略师的角色是Palantir的一个技术角色，你需要深入与客户互动，了解他们的问题，感受他们的痛苦，并帮助构建他们需要的解决方案，以及他们可能还不知道自己需要的解决方案，以真正推动目标前进。嗯，所以我们最初开始时只是一个简单的问题，嘿，数据是分散的。它在不同的地方。嗯，我们从这个想法开始，如果调度员早上工作时知道哪些卡车正在维修，那不是很好吗？就这么简单。从那里开始，就像工作成本核算的想法一样，嘿，当我提交一些东西时，我能看到它是否已经通过了流程吗？比如查看审批阶段，了解这些，这样我就可以开始计划明天。从这些微不足道的开始，我们现在一年内推出了40个工作流程，涵盖了从安全、调度、估算到为他们构建HRMS系统、**OSDK应用**（OSDK app: Ontology Software Development Kit，本体论软件开发工具包，用于在Palantir Foundry平台上构建应用程序）的一切，这太疯狂了。我们，嗯，我们开始时只是不知道它会有多难，然后就飞速完成了。所以它现在在他的手机上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Sure. So I was there at the the first boot camp that we ran. Um, so the deployment strategist role is a technical role at Palanteer where you engage deeply with a customer to understand their problems, feel their pain, and help build the solutions that they need and possibly solutions that they don't know they need yet to really help drive that goal forward. Um, and so what we first started out with was just kind of a simple problem of, hey, the data is fractured. It's in different places. Uh, we started with this idea of just wouldn't it be nice if when dispatch was working in the morning, they knew what trucks were out for repair. Just something simple like that. And right from there as along with just kind of the the job costing idea of like hey when I submit something can I just see if it's gotten through the process yet like look at the approval stages understand that so I can start to plan tomorrow. From those humble beginnings we've now rolled out 40 workflows in a year stretching everything from safety dispatch estimating built them an HRMS system an OSDK app which is crazy. We uh we started that we just didn't know how hard it was going to be and just flew through it. So it's it's on his phone now.</p>
</details>

好的。所以显然增长速度是指数级的。你说97%的公司每天都在使用Palantir。你还说它几乎取代了你们所有的其他软件堆栈。嗯，为什么Palantir的增长速度如此之快？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So obviously the rate of growth is exponential. You said 97% of the the companies using Pounder uh daily. You also said that it's kind of replaced pretty much every other software stack that you guys have. Uh why has the rate of growth been so exponential on Pounder?</p>
</details>

>> 我认为是因为我们让人们的生活变得更轻松。就像主要目标是为运营提供他们日常工作所需的工具。所以当你出现时，工具更容易使用，采用就很容易，对吧？采用。你希望当人们得到工具时，他们会说：“哦，是的，这正是我需要的。”而且这更容易。我们正在努力让人们的生活变得更轻松。这是主要目标。100%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think because we're making people's lives easier. Like the main goal is giving operations the tools that they need to do their work dayto-day. And so when you show up and the tools easier, the adoption is just easy, right? The adoption. You want when people get the tools to go, "Oh yeah, that's exactly what I needed." And this is easier. We're trying to make people's lives easier. That's the main goal. 100%. A</p>
</details>

作为一家建筑公司，我的意思是，你提到了几个不同的用例，但是，嗯，对于可能从未在建筑公司工作过，甚至不了解挑战的听众，你能给我们举一些例子，说明使用Excel表格管理与在Foundry上管理有什么困难吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as a construction company, I mean, you named a couple of different use cases, but uh to the audience that maybe has never worked in a construction company or even understands the challenges, can you can you give us some examples of what is so difficult about using an Excel sheet to manage something versus having it on Foundry?</p>
</details>

>> 是的。就是连接性，对吧？就像，对于建筑类比，我们称之为“二次搬运材料”。就像如果你挖一个洞再把它填回去，那是，你知道，那是低效的。所以数据也一样。如果你填写一个电子表格，你有一些数据，然后有人必须查看这些数据，然后重新输入到其他地方，那是低效的。所以我们看待它的方式完全相同。所以电子表格本质上是低效的，因为它们没有与你的业务的其他部分互联。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. It's just the the connectivity, right? Like it's the for a construction analogy, we call it double handling material. Like if you dig a hole and fill it back in, that's, you know, that's inefficient. So data is no different. If you fill in a spreadsheet and you have data somewhere and someone has to look at that data and then retype it in somewhere else, it's inefficient. So we kind of see it the exact same way. So spreadsheets are inherently inefficient because they're not interconnected with the rest of your business,</p>
</details>

>> 对吧？嗯，Jesse，我刚才和Palantir的销售主管Kevin谈过，他提到了Kavanaaugh，说，你知道，Kavanaaugh不仅仅在Palantir Foundry上运行。Kavanaaugh正在运行的是由Foundry提供支持的Kavanaaugh自己的操作系统。你能谈谈一家公司构建一个操作系统，与一家公司仅仅将东西插入你的操作系统有什么不同吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right? Um Jesse, I was just talking to Kevin who leads sales at Hounder and and uh he was referencing Kavanaaugh and said that, you know, Kavanagh is not just running on Pounder Foundry. Kavanaaugh is running on Kavanaaugh's operating system that is powered by Foundry. Can you speak a little bit to uh a company making an operating system versus a company just plugging stuff into your operating system?</p>
</details>

>> 是的，我认为这部分是Palantir的核心理念，即我们与客户在他们所在的地方相遇，并构建满足他们业务需求的软件，而不是说：“嘿，削减你业务中不方便的部分，以适应这种千篇一律的模式。”这有时是一个困难的对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I think part of that is that this is the core philosophy of Palunteer is that we meet the customer where they are and build software that meets their business needs as opposed to saying, "Hey, cut the awkward parts off of your business to meet this kind of cut cookie cutter mold." which which is a difficult conversation sometimes with</p>
</details>

>> 业务。这绝对是一个困难的对话，但我认为我们开始的地方只是核心运营，嘿，一家建筑公司的核心是什么？它是一家利用劳动力、材料和设备，并根据合同工作的公司。所以我们说太好了，我们将构建一些东西，让你能够管理所有这些部分，然后从那里我们将衍生出所有其他相互作用的东西。调度是什么，不就是将一个人放在卡车里去完成一项工作吗？所以从那里，你从核心开始，然后向外构建，而不是可能只处理一个工作流程，然后试图向下追溯到本体论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> business. It's definitely a difficult conversation but I think where we started with was just the core operations of hey what is a construction company at its core? It's a company that takes labor materials and equipment and works against the contract. And so we said great we're going to build something that lets you manage all of these pieces and then from there we'll spring all of the other things that interact between them. What is you know a dispatch other than putting a person in a truck against a job? And so from there, you kind of start at the core and build out from there as opposed to maybe tacking like one workflow and then trying to work down to the ontology.</p>
</details>

>> 绝对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Absolutely.</p>
</details>

给你们两位的最后一个问题。非常感谢你们抽出时间。嗯，这里的合作关系我认为非常特别，因为Karp博士甚至没有把你们称为客户。他把你们称为合作伙伴。嗯，显然FTE模式正被企业越来越多地采用。现在每个人都想要一个前沿部署工程师。你如何看待与Palantir的合作关系，与软件公司那种交易性的供应商关系有什么不同？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Last question for you guys. Thank you so much for taking the time to do this. Um the partnership here I think is really special because Dr. Karp doesn't even, you know, mention you guys as a customer. He mentions you guys as a partner. Um obviously the FTE model is starting to get more adopted into the enterprise. Now everyone wants a Ford deployed engineer. How are you thinking of the partnership with Palunteer versus the sort of transactional vendor relationship with a software company?</p>
</details>

>> 是的，我们觉得我们是合作伙伴。就像Jesse和我有一个很好的关系，我们真的被关在一起，我们称之为训练室，但我们被关在一个房间里三个月，白板讨论。建筑业是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I we feel like we are partners. Like Jesse and I have a great relationship where we were literally locked in, we called it the training room, but we were locked in a room for 3 months whiteboarding. What is construction?</p>
</details>

>> 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wow.</p>
</details>

>> 完全没有披萨或啤酒。嗯，但我认为就是那种信任，对吧？就像Jesse在很多方面挑战我们，甚至是我们没有意识到的假设。我喜欢认为我能回到第一性原理，你知道，我是公正的，但你知道，有很多情况下Jesse会再次从哲学上问为什么，然后你会说，天哪，我不知道我做了那个假设。所以我想就是信任，对吧？就像信任他们是真心为你的最佳利益着想，他们会告诉你真相，无论你是否想听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> There was no pizza or beer at all. Um but I think just that trust, right? Like Jesse challenged us a lot on just the assumptions we didn't even know we were making. Like I like to think I get to first principles and you know I'm unbiased but you know there's so many instances where Jesse would just well again phil philosophically go why and you go well crap I didn't know I was making that assumption. So I think it's just trust right like trust that they're they're there with your best interest in mind and they're going to tell you the truth whether you want to hear it or not.</p>
</details>

同样的问题问你，Jesse。是的，我的意思是，我认为这种合作关系，你知道，随着我们前进，对吧？我希望我能永远在Kavanaaugh工作，对吧？就像，嗯，我喜欢我们在那里所做的工作。当我们一起开始这段旅程时，我对建筑业了解不多。所以我开始时说，我可能会问一些非常愚蠢的问题，比如你为什么费心做成本核算，对吧？或者你为什么关心调度，或者估算如何运作？但我希望你相信，只有当我真的认为它没有意义时，我才会推动。我将从你那里学习。如果你相信我真心为你的最佳利益着想，我是软件专家，我也会相信你真心为这种合作关系的最佳利益着想，你是你的业务专家。我们将一起彻底改变建筑业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same question to you Jesse. Yeah, I mean I think the partnership is, you know, as we move forward, right, I wish I could work on Kavanaaugh forever, right? Like, uh, I love the work that we've done there. And when we when we started this this journey together, I didn't know too much about construction. And so I started by saying like I'm probably going to ask some really stupid questions here like why do you bother doing costing, right? Or like why do why do you care about dispatch or how does estimating work? But I want you to trust that like I'm only going to push when I really don't think it makes sense. And I'm going to learn this from you. And like if you trust me that I have your best interest in mind and that I'm the expert in the software, I'm going to trust that you have like this partnership's best interest in mind and you're the expert on your business. And together we're going to revolutionize construction.</p>
</details>

我喜欢。Joe，Jesse，谢谢你们的时间。非常感谢你们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love it. Joe, Jesse, thank you for the time. Appreciate you guys.</p>
</details>