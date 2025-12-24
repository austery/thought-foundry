---
area: society-systems
category: business
companies_orgs:
- Tesla
- Openmind
- Apple
- Walmart
- Amazon
- Nvidia
- Meta
- Hilton
- Marriott
- MGM
- OpenAI
- Foxconn
- BMW
- Silicon Valley Bank
- Munich Re
- SpaceX
- Unitary
date: '2025-11-05'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Asimov's Law
people:
- Evan
- Elon Musk
- Henry Ford
- Jamie Diamond
products_models:
- Optimus
- Android
- Dyson
- iPhone
project:
- ai-impact-analysis
- entrepreneurship
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=FueX88st2OQ
speaker: 硅谷101
status: evergreen
summary: 本文深入探讨了硅谷对人形机器人发展的看法，涵盖了任务专用机器人与通用人形机器人的商业模式之争、大型语言模型对机器人软件开发的赋能、以及大规模普及面临的可靠性、融资、法律责任和数据安全等关键挑战。专家们就机器人手的硬件设计、开源软件的重要性以及如何构建可持续的商业生态系统展开了讨论，揭示了机器人从实验室走向现实世界的复杂路径。
tags:
- business-model
- humanoid-robot
- investment
- open-source-robotic
- technology
title: 硅谷视角：人形机器人普及的挑战与机遇
---

### 欢迎与人形机器人展望

主持人景吴: 好的，欢迎来到 Alignment 2025 的下午场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Um, welcome to the afternoon session of Alignment 2025 and uh, I hope</p>
</details>

主持人景吴: 我希望大家午餐愉快，欢迎来到机器人专题讨论会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you guys had a great lunch and welcome to the robotics panel. I'm your host</p>
</details>

主持人景吴: 我是主持人景吴，我刚刚介绍了我们的三位杰出嘉宾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jing Wu and I just introduced um, you know, our three amazing guests over</p>
</details>

主持人景吴: 我之前说过要讲一个有趣的故事，Anand 去年来过这里，他来之后，今年他的公司实际上获得了8亿美元的基金，用于机器人初创公司的融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">here. The fun story I said I was going to tell is, you know, um Anand was here last year and after he came here, this year his company actually had a $800 million $800 million fund uh used for robotic startup financing.</p>
</details>

主持人景吴: 所以我想说的是，我真心希望我们的活动能成为一个幸运符。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I guess my point is I really hope our event can be a lucky charm.</p>
</details>

主持人景吴: 因此，我希望我们所有的专题讨论嘉宾在参加我们的活动后也能筹集到更多的资金。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So I hope all our panelists can also raise more money after coming to our event.</p>
</details>

主持人景吴: 我们看到了一个非常精彩的演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we saw a really amazing demo, man.</p>
</details>

主持人景吴: 我认为，正如 Chen 介绍的，我们在这个小组中有不同的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think um you know part part of what Chen introduced is we have different ideas in this panel, right?</p>
</details>

主持人景吴: 那么 Anand，让我们从你开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Anna, let's actually start with you.</p>
</details>

主持人景吴: 你将是我们的**X因素**（X factor: 指在某种情况下，其作用或影响无法预知或难以量化的因素），因为这个演示很棒，但老实说，我记不起上一次机器人演示没有叠衣服或摘水果是什么时候了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um uh you're going to be our like X factor here because you know it is an amazing demo but honestly I can't remember when's the last time that a robot demo does not have folding laundry or picking fruits.</p>
</details>

主持人景吴: 所以，在一个对人形机器人如此狂热的环境中，你如何还能保持如此镇定和积极地从事清洁机器人的工作？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I guess in an environment so hyped up about humanoid robots, how can you still stay so poised and motivated to work on cleaning robots?</p>
</details>

Anand: 那是因为我赚钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's because I make money.</p>
</details>

主持人景吴: 好的，这是一个妙语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Okay, that's a punch line.</p>
</details>

Anand: 我有大型企业投入大量资金来解决实际问题，在我看来，你可以分为两个阵营。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I have large enterprises throwing a crap out of money to solve real problems and you can, in my opinion, you fall into two camps.</p>
</details>

Anand: 你可以通过解决问题从客户那里获得收入，或者通过追逐炒作从**风险投资家**（VCs: Venture Capitalists，向初创企业提供资金以换取股权的投资者）那里筹集数百万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can either get revenue from customers by solving problems or raise millions from VCs by chasing hype.</p>
</details>

主持人景吴: 是的，这很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, that's cool.</p>
</details>

主持人景吴: 所以，如果实际应用或任务专用机器人能够赚钱，那么我不确定我们是否意味着人形机器人将来不能赚钱，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if if real application or task specific robots can make money. So I'm not sure if we mean human or robots cannot make money down the road, right?</p>
</details>

主持人景吴: 这是一个敏锐的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's that's a sharp perspective.</p>
</details>

主持人景吴: Evan，你刚刚做了演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess Evan, you just did the demo.</p>
</details>

主持人景吴: 在特斯拉 Optimus 团队与埃隆·马斯克（Elon Musk）合作是怎样的体验？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know, how's how is it like working with Elon at at you know Tesla Optimus because you your background you you were from uh the Optimus team.</p>
</details>

主持人景吴: 这种经历如何影响你创办自己的公司？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um how's it like working with him and how did that experience influenced you to do your own startup as well?</p>
</details>

Evan: 是的，当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, absolutely.</p>
</details>

Evan: 我认为埃隆绝对是一位伟大而独一无二的企业家，他也有着这种深厚的技术驱动思维，他是一个真正的**第一性原理**（first principle: 指从最基本、最原始的假设出发，而不是基于现有知识或经验进行推导）信徒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think Elon is definitely a great and one-of-a-kind entrepreneur and he's also has this uh deep techdriven uh mindset and he is a true believer of first principle.</p>
</details>

Evan: 所以我们每天，基本上作为 Optimus 团队，因为这是他目前的主要关注点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we uh from dayto day uh basically as Optimus since it's his uh main focus these days</p>
</details>

Evan: 我们每周都会和他开会，回顾更新并听取他的总体指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we had a kind of weekly meeting with him to go through the updates and his directions overall.</p>
</details>

Evan: 他总是告诉我们，要一直努力实现人形外形，尽管这将是一条漫长而充满挑战的道路，但他坚信一旦技术到位，最终人形机器人会实现，而且市场将是巨大的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He always tell us to always trying to get the foam human form factor even though it's uh it's going to be a long pass and challenging experience to get there but he truly believes like once uh the technology there uh eventually human uh we will get there and uh also the market will be enormous and yeah that's and we we sometimes even it was him at like 11 p.m.</p>
</details>

Evan: 所以，他会在晚上11点到办公室审查机器人，所有人都得留下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so he come to the office to to review the robot at 11 p.m. Everybody's stay.</p>
</details>

Evan: 所以，他真是一个非常拼命的创业者，我想说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so he's a really hardcore startup founder, I would say.</p>
</details>

主持人景吴: 哇，这太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wow, that's amazing.</p>
</details>

主持人景吴: 这是否意味着你的公司也工作到晚上11点？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Does that mean your company also work until 11 p.m.?</p>
</details>

Evan: 我们正在建造人形机器人，但我们是人类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> We are building humanoid, but we are human.</p>
</details>

主持人景吴: 啊，这是一个完美的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Ah, that's that's perfect answer.</p>
</details>

主持人景吴: 是的，如果你们正在招聘，我相信大家会很高兴知道你们不是**996**（996: 指早上9点上班，晚上9点下班，每周工作6天的工作制度）或类似的工作模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, if you guys are hiring, then I'm sure the folks will be happier that to know you're not, you know, 996 or whatever.</p>
</details>

主持人景吴: 但是，Yan，我知道，说到炒作，我读到过 Openmind，你的公司 Openmind，他们把**阿西莫夫定律**（Asimov's Law: 指科幻作家艾萨克·阿西莫夫提出的机器人三定律，旨在规范机器人的行为以确保其对人类无害）和机器人身份放在了**区块链**（blockchain: 一种去中心化的分布式账本技术，用于安全地记录交易）上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but yeah, coming to you Yan, I know um well, speaking of hype, right? And um I I read somewhere that Openmind's actually your company Openmind um they put Asimov's law and the robot identity actually on blockchain.</p>
</details>

主持人景吴: 如果这些词语组合在一起不算炒作，我不知道什么才算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if that if those words coming together is not hype, I don't know what is.</p>
</details>

主持人景吴: 但我确实知道你看到了真正的潜力，因为你已经是斯坦福大学的教授了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but I actually I I know you saw the real deal though because um you were already a a professor at Stanford.</p>
</details>

主持人景吴: 所以我想知道，现在人形机器人中有什么让你如此兴奋，以至于你愿意出来创办自己的公司，而你已经在斯坦福拥有如此多的声望和资源？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I was wondering what do you see in humanoids now that actually make you so excited to come out and start your own company when you're already have so much prestige and you know resource at Stanford already.</p>
</details>

Yan: 嗯，你的问题有很多值得探讨的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh well uh there's a lot to unpack in your question.</p>
</details>

Yan: 但对我这个热爱机器人的人来说，令人兴奋的是，机器人领域长期存在的问题，即如何清晰地看到“普遍适用”的人形机器人，现在已经有了眉目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but uh what's exciting to me as someone who uh loves robots is that uh the long-standing problem in robotics, which is to have a clear line of sight to quote unquote um universally capable uh humanoids, uh is now there.</p>
</details>

Yan: 这是因为大多数**大型语言模型**（LLMs: Large Language Models，指在海量文本数据上训练的深度学习模型，能够理解、生成和处理人类语言）都能流利地“说”机器人语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's because most large language models uh speak fluent robotics.</p>
</details>

Yan: 所以，关于如何为机器人构建软件的旧观点，无论是**确定性任务导向**（deterministic task-focused: 指软件设计用于执行特定、预定义任务，结果可预测）还是**端到端人工智能**（end-to-end AI: 指一个AI系统直接从原始输入到最终输出，中间没有人工干预或模块化分解），现在我们有了一套新的工具，可以让我们快速地将机器人重新用于医院、家庭、学校、工作场所的各种任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this old perspective on how to build software for robots which is either sort of deterministic task focused or endto-end AI now we have uh another set of tools that allow us to rapidly repurpose um robots for a diverse array of tasks in hospitals, homes, schools, workplaces.</p>
</details>

Yan: 而真正令人兴奋的部分是，许多大型语言模型已经能流利地“说”机器人语言了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's the really exciting part is that large language models, many of them speak fluent robotics already.</p>
</details>

主持人景吴: 你说的“流利地‘说’机器人语言”是什么意思？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> What do you mean by speak fluent robotics?</p>
</details>

主持人景吴: 你是指它们与代码**应用程序接口**（API: Application Programming Interface，定义了软件组件如何交互的一组规则和协议）有良好的连接，还是指人类可以使用语言更好地指挥机器人？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you mean like they they have good connection with the code API or you know do you mean humans can use language to command the robots better?</p>
</details>

Yan: 嗯，一种思考方式是，大型语言模型非常擅长完成故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, one way to think about this is that large language models are very good at completing stories.</p>
</details>

Yan: 如果我给一个大型语言模型一本书的第一章，我可以要求它写接下来的11章。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I give a large language model the first chapter of a book, I can ask it to write the next 11 chapters.</p>
</details>

Yan: 如果我将世界表示为一个连续的文本块，我就可以要求大型语言模型继续这个故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if I represent the world as a uh contiguous block of text, I can then ask a large language model to continue the story.</p>
</details>

Yan: 如果我将大型语言模型连接到一个物理外壳，使其能够移动、探索、互动、发出声音、提问、表达情感，那么突然之间，我面前就有了这样一个物体，它互动性更强。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I then connect the large language model to uh a physical shell that allows it to move, explore, interact, bark, ask, show emotion. um then all of a sudden I have this object in front of me that is uh much more interactive</p>
</details>

Yan: 而且更具吸引力，并且能够以机器人以前从未有过的方式学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and uh much more engaging and can also learn in ways that really hasn't been true before for robotics.</p>
</details>

### 任务专用机器人与人形机器人之争

主持人景吴: 我明白了，这是一个很好的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I see that's a good point.</p>
</details>

主持人景吴: 那么互动方面，Anand，在你听了两位对人形机器人略微看好的人的观点后，你有什么快速的回应或补充吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the interaction side of things um an is there anything any quick comeback or anything quick to add um after you hear from two folks that are you know b slightly bullish on on humanoids maybe do we need like both task specific robots and humanoids in the long term or</p>
</details>

Anand: 我会说，这取决于你所追求的行业或领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> depends on what part of the sector or industry you're going after is what I would argue.</p>
</details>

Anand: 如果你针对的是有足够资金的**B2B**（Business-to-Business: 企业对企业）企业，那么任务专用机器人要好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if you're going after B2B enterprises where people have enough money task specific is far better because just that single task alone will take more than 24 hours for a single robot to complete</p>
</details>

Anand: 而且我不需要一个过度建造的通用机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and then I don't need a general purpose robot that's overbuilt.</p>
</details>

Anand: 我喜欢打个比方，如果亨利·福特（Henry Ford）被问到：“你将如何设计一个更好的交通系统？”他不会把马或人变成一个系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An analogy I like to make is if Henry Ford was asked, okay, how are you going to design a far better transportation system? He's not going to take a horse or a human being and make that into a system.</p>
</details>

Anand: 不，他会造汽车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, he's going to take a car.</p>
</details>

Anand: 汽车在将货物从A地运到B地方面要好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cars are far better at transporting goods from A to B.</p>
</details>

Anand: 我的吸尘机器人将远远胜过任何吸尘人形机器人，或试图用戴森（Dyson）吸尘器吸尘的人形机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My vacuuming robot will far out compete any vacuuming humanoid or humanoid trying to vacuum with a Dyson.</p>
</details>

Anand: 所以，仅这座建筑，如果我要清扫整个空间，我需要大约四五个不同的吸尘机器人才能完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this building alone, if I had to vacuum this entire space, I'd need about four or five different vacuuming robots to be able to take care of that.</p>
</details>

Anand: 这比让一个或一群人形机器人做同样的事情要便宜得多，可靠得多，也容易得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's far cheaper, far more reliable, far easier to be able to get that done than to have a single humanoid trying to do or a team of humanoids trying to do the same thing.</p>
</details>

Anand: 所以这一切都归结为我们追求什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it all boils down to what are we going after?</p>
</details>

Anand: 在企业中，任务足够有意义，足够大，以至于应用专用机器人能更可靠地实现你的**投资回报率**（ROI: Return On Investment，衡量投资效率的指标）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in enterprises, tasks are meaningful enough, large enough that an application specific gets you to your ROI far more reliably.</p>
</details>

主持人景吴: 是的，这是一个完美的观点，我相信你，因为 Anand 的一些客户实际上包括一些我们都知道的大公司，比如苹果（Apple）或硅谷的这些公司都是你的客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, that's a perfect point and I I believe you because some of Anna's clients actually include some really big names that we know, you know, um big big tech companies like, you know, Apple or these companies in the in the valley are your clients.</p>
</details>

主持人景吴: 所以，关键似乎是如何将机器人部署到其合适的应用中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So definitely um so it seems like the key is how do we roll out robots to its uh proper applications.</p>
</details>

主持人景吴: 那么，机器人大规模普及的障碍是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are the roadblocks to um the mass adoption of robots, right?</p>
</details>

主持人景吴: 所以 Evan，从机械方面来说，你的手非常棒，因为我们可能不知道它只花了300美元，而且它将通常需要数千美元的手的功能和**自由度**（degrees of freedom: 描述物体在空间中运动或姿态变化的独立参数数量）压缩了进去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I guess on the mechanical side coming to you Evan um kind of you know I your your hand is really amazing because we might not know it's it only cost $300 and it squeezes in the features and the degrees of freedoms of hands that usually cost thousands of dollars.</p>
</details>

主持人景吴: 所以我想知道你们是如何做到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wonder how how you guys are able to make it.</p>
</details>

主持人景吴: 最近有什么突破吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are there any recent breakthrough and what what still makes it so hard for you guys to you know um do some of these complicated tasks?</p>
</details>

Evan: 当然，绝对是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Sure. Absolutely.</p>
</details>

Evan: 所以我认为，在机器人手设计方面，特别是人形外形，不仅仅是我们需要让这个关节移动多少自由度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think coming to a robotic hand design especially human form factor it's not only about uh you know like we just need to uh get this joint to move this many degree of freedom.</p>
</details>

Evan: 更多的是要理解最终结果，即人手的功能性，为什么是这样的外形，以及人们如何与周围物体互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's more about understanding the end result the functionality of a human hand why it's such a form factor and how people are interacting with object around you.</p>
</details>

Evan: 这就是为什么我们坚持使用这种**缆索驱动架构**（cable tendon driven architecture: 一种机器人设计，通过缆索和肌腱模拟生物肌肉和骨骼的运动方式）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's why we are uh sticking with this uh cable tendon driven form uh architecture and I know there are some other like different architecture like linkages or direct actuator drives those are uh like you see them move smoothly and nicely but they are not built to really uh like work like a human hand.</p>
</details>

Evan: 我知道还有其他一些不同的架构，比如**连杆机构**（linkages: 一系列相互连接的刚性构件，用于传递力和运动）或**直接驱动执行器**（direct actuator drives: 驱动器直接连接到负载，没有中间传动装置），你看到它们平稳漂亮地移动，但它们并不是为了真正像人手一样工作而设计的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that that's kind of very important that's why we picked this cabled driven architecture.</p>
</details>

Evan: 所以这非常重要，这就是我们选择缆索驱动架构的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh yeah that's uh my two cents from uh from mechanical design perspective.</p>
</details>

Evan: 是的，这是我从机械设计角度的一些看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah that's great.</p>
</details>

主持人景吴: 是的，是的，这很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I guess then from the software perspective because Evan just said right we have different software based on different type of hardware.</p>
</details>

主持人景吴: 所以我想从软件角度来看，因为 Evan 刚才说了，我们有基于不同硬件的不同软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's also kind of the uh what companies usually do um if figure or if um you know um Nvidia their robots is built in a specific way they're going to have a specific model for that.</p>
</details>

主持人景吴: 这也是公司通常的做法，如果像 Figure 或英伟达（Nvidia）的机器人以特定方式建造，他们就会有特定的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Yan, you believe in open- source and modular software.</p>
</details>

主持人景吴: 但 Yan，你相信开源和模块化软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You believe in different types of hardware might be able to work with the same open source software that you have.</p>
</details>

主持人景吴: 你相信不同类型的硬件可能能够与你拥有的相同开源软件协同工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I guess why do you believe u the robot operating system needs to be open source and yeah how how does that help solve some of the bottlenecks in software?</p>
</details>

主持人景吴: 所以我想知道你为什么认为机器人操作系统需要开源，以及这如何帮助解决软件中的一些瓶颈？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, well um again there's loads going on uh in your question.</p>
</details>

Yan: 好的，嗯，你的问题又有很多内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh there's uh why is open source useful?</p>
</details>

Yan: 有一点是，为什么开源有用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And of course the internet runs on open source software and most phones on earth run on open source software.</p>
</details>

Yan: 当然，互联网运行在开源软件上，地球上大多数手机也运行在开源软件上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's called Android.</p>
</details>

Yan: 它叫安卓（Android）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's certainly um a lot of examples for how open source software powers really important things.</p>
</details>

Yan: 所以，开源软件如何驱动非常重要的事物，肯定有很多例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the other thing you alluded to is um the uh optimal architecture to use for thinking machines.</p>
</details>

Yan: 你提到的另一件事是用于思考机器的最佳架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh as we've already heard in robotics, it's extremely important to be extremely specific.</p>
</details>

Yan: 而且，正如我们在机器人领域已经听到的，极其具体是非常重要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> When people throw around things like robotics or humanoids, um it is vital to be specific about the task you're trying to accomplish.</p>
</details>

Yan: 当人们谈论机器人或人形机器人时，明确你试图完成的任务至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, for example, um, if you're building a humanoid sex robot, obviously you're trying to accomplish a very different set of, uh, like, uh, it's a very different business case and form factor compared to a vacuum cleaner compared to something BMW would like to use to put Torx bolts into their engine control units.</p>
</details>

Yan: 例如，如果你正在建造一个性爱机器人，显然你试图完成的任务与吸尘器或宝马（BMW）希望用于将内六角螺栓拧入其发动机控制单元的机器人相比，其商业案例和外形尺寸都非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you think about the global economy, uh something like a third of that is based on uh manual labor like people doing things.</p>
</details>

Yan: 如果你考虑全球经济，大约三分之一是基于人工劳动，比如人们做事情。

<<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's something like 30 trillion a year is based on humans doing stuff in the physical world and something like a third of that third involves hands.</p>
</details>

Yan: 每年大约有30万亿美元是基于人类在物理世界中做事情，而这三分之一中的大约三分之一涉及手部操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So obviously if you're going after something like iPhone assembly then uh exquisite hands are critical.</p>
</details>

Yan: 所以很明显，如果你追求的是像 iPhone 组装这样的任务，那么精巧的双手至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um then with respect to your question um what is the right architecture for humanoid robots?</p>
</details>

Yan: 那么，关于你的问题，人形机器人的正确架构是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's no simple answer.</p>
</details>

Yan: 没有简单的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again it depends on what you're trying to do.</p>
</details>

Yan: 再次强调，这取决于你想要做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um if you're physically manipulating things that is requires exquisite techn technology like we saw earlier today uh with hands but it also requires amazing compute.</p>
</details>

Yan: 如果你正在物理操作需要精湛技术的东西，就像我们今天早些时候看到的机器人手，那它也需要惊人的计算能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, the difficulty of making sense of your physical world, deciding what you should do with the hand, and then being able to deal with all those degrees of freedom to accomplish a task is a uh big compute problem.</p>
</details>

Yan: 理解你的物理世界，决定用手做什么，然后能够处理所有这些自由度来完成任务的难度，是一个巨大的计算问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">with respect to what a lot of companies are doing right now which is exploring the possibility of modular Lego block like architectures for humanoid including um intrinsic including OpenAI's robotics including Nvidia Foxcon humanoid including everyone else who's currently working on software for humanoids the central idea is that it's much easier to debug smaller pieces of software rather than uh like fine-tuning some end to-end AI or something like that.</p>
</details>

Yan: 关于目前许多公司正在做的事情，即探索人形机器人**模块化乐高积木式架构**（modular Lego block-like architectures: 指将机器人系统分解为可互换、可组合的小模块，像乐高积木一样）的可能性，包括 OpenAI 的机器人和英伟达-富士康（Nvidia Foxconn）的人形机器人，以及所有其他目前正在开发人形机器人软件的公司，其核心思想是调试更小的软件片段要比**微调**（fine-tuning: 指在预训练模型的基础上，使用特定任务的数据集进行进一步训练，以适应新任务）某个端到端人工智能或类似的东西容易得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's not only us that is thinking about modular architectures, it's many other people in in the industry as well.</p>
</details>

Yan: 所以，不只是我们在思考模块化架构，行业内还有许多其他公司也在这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah, that's a great point.</p>
</details>

主持人景吴: 是的，是的，这是一个很好的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess Evan coming back to you very quickly because you working on hands before um you know right now on robotic hand we probably saw the demo succeeded one time today but yesterday uh you know we there's like a number of tries and we were talking about how difficult it is with the you know uh tactile sensors or there there's um maybe a lack of force feedback on the hand.</p>
</details>

主持人景吴: Evan，我很快回到你这里，因为你之前从事过机器人手的工作，我们今天可能只看到演示成功了一次，但昨天我们尝试了很多次，我们当时在讨论**触觉传感器**（tactile sensors: 能够检测并测量物理接触压力的传感器）或手上缺乏**力反馈**（force feedback: 机器人或人机界面中，通过力、振动或运动向用户提供触觉信息的技术）是多么困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what are your thoughts on some of these uh hardware working with the you know smaller uh modular software like professor Ya mentioned?</p>
</details>

主持人景吴: 那么，你对这些硬件与 Yan 教授提到的更小、模块化软件协同工作有什么看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Okay. Okay.</p>
</details>

Evan: 好的，好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh I think your question is about uh like uh uh some hardware sensing and</p>
</details>

Evan: 所以，我认为你的问题是关于一些硬件传感和……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah like software working with different type of hardware like do you guys write specific software for your hardware or can do you see it being able to work with other types of software in the future?</p>
</details>

主持人景吴: 是的，比如软件与不同类型的硬件协同工作，你们是否为自己的硬件编写特定的软件，或者你认为它将来能够与其他类型的软件协同工作？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Absolutely.</p>
</details>

Evan: 绝对可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with the hand we showed today, it's a total pure open source hand including the hardware and also software.</p>
</details>

Evan: 所以我们今天展示的这只手，它是一个完全纯粹的开源手，包括硬件和软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are going to rely on industrial and academic um people and even hobbyists trying to uh contribute to this whole thing and to uh create this ecosystem around the hardware to make it better and better.</p>
</details>

Evan: 我们将依靠工业界、学术界的人员甚至业余爱好者来贡献，共同创造围绕硬件的生态系统，使其变得越来越好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why we just marketed at $314.</p>
</details>

Evan: 这就是为什么我们只以314美元的价格推向市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like it's it's a really easy to enter this uh dextrous manipulation world without like breaking the bank.</p>
</details>

Evan: 所以，进入这个**灵巧操作**（dextrous manipulation: 指机器人或机器手能够以高精度和灵活性抓取、移动和操作物体的能力）的世界非常容易，而且不会倾家荡产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah.</p>
</details>

主持人景吴: 是的，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a good point.</p>
</details>

主持人景吴: 这是一个很好的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I don't I guess come to you.</p>
</details>

主持人景吴: 嗯，我想问你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you've seen robot deploying in the real world.</p>
</details>

主持人景吴: 你见过机器人在现实世界中部署。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you feel like is the bottleneck um to the mass adoption of robots?</p>
</details>

主持人景吴: 你觉得机器人大规模普及的瓶颈是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is it on the hardware side or on the software side or maybe it's something else?</p>
</details>

主持人景吴: 是在硬件方面，还是在软件方面，或者可能是其他方面？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So between us and our partners we have about 35,000 robots deployed in the real world.</p>
</details>

Anand: 我们和我们的合作伙伴在现实世界中部署了大约35,000台机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clients include Walmart, Amazon, Apple, Nvidia, Meta, Hilton, Marriott, MGM, etc.</p>
</details>

Anand: 客户包括沃尔玛（Walmart）、亚马逊（Amazon）、苹果（Apple）、英伟达（Nvidia）、Meta、希尔顿（Hilton）、万豪（Marriott）、美高梅（MGM）等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> The challenges that BC the biggest challenge today that we are actually overcoming is not building the robot.</p>
</details>

Anand: 我们今天正在克服的最大挑战不是制造机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not the software.</p>
</details>

Anand: 不是软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not even the hardware.</p>
</details>

Anand: 甚至不是硬件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's the fact that robots break down all the bloody time.</p>
</details>

Anand: 而是机器人总是出故障。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Question for you, Evan.</p>
</details>

Anand: 问你一个问题，Evan。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How often do your robotic arms break down?</p>
</details>

Anand: 你的机械臂多久坏一次？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's uh so so yeah I would imagine once we really deployed it that's a quite a big issue at this moment.</p>
</details>

Evan: 是的，嗯，是的，我想一旦我们真正部署了它，那将是一个相当大的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. So in the 48 states we are deployed in today, pick any state, I will tell you a city right now I have a broken robot</p>
</details>

Anand: 是的。所以，在我们今天部署的48个州中，随便选一个州，我都可以告诉你一个城市，现在那里有一台坏掉的机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and that is my biggest headache</p>
</details>

Anand: 而那是我最大的烦恼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> is uptime being able to make sure my robots are operating to that end like we are hiring thousands of veterans to go out and train them and be a robot technician.</p>
</details>

Anand: 是正常运行时间，能够确保我的机器人正常运行，为此我们正在招聘数千名退伍军人，对他们进行培训，让他们成为机器人技术员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> But that is the real world challenges that need to be overcome.</p>
</details>

Anand: 但这些是需要克服的现实世界挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Along with that there's the entire finance aspect to this like how do you actually get the capital to be able to do all of these systems?</p>
</details>

Anand: 除此之外，还有整个财务方面的问题，比如你如何才能获得资金来完成所有这些系统？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Robots aren't cheap.</p>
</details>

Anand: 机器人不便宜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hardware is not cheap.</p>
</details>

Anand: 硬件也不便宜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

主持人景吴: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And then a lot of the tasks people go after such as laundry folding is this is minimum wage tasks.</p>
</details>

Anand: 很多人们追求的任务，比如叠衣服，都是最低工资的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Most parts of the country we are still at $12 $10 per hour.</p>
</details>

Anand: 在这个国家的大部分地区，我们仍然是每小时10到12美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do you make the math work in that front?</p>
</details>

Anand: 那么你如何让这方面的经济账算得过来呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah absolutely.</p>
</details>

主持人景吴: 是的，绝对是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you talk about business model and reliability and that actually are the two more talking points that we're going to get into.</p>
</details>

主持人景吴: 所以你谈到了商业模式和可靠性，这实际上是我们接下来要深入讨论的两个话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess in terms of business model, Evan, um Elon last year said the Optimus robot will cost only around 20 to $30,000.</p>
</details>

主持人景吴: 我想就商业模式而言，Evan，埃隆去年说 Optimus 机器人只会花费大约2万到3万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you feel like that's feasible?</p>
</details>

主持人景吴: 你觉得这可行吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if it is, how can you know startups like you guys to compete with companies like Tesla because they have so much more manufacturing capacity?</p>
</details>

主持人景吴: 如果可行，你们这样的初创公司如何与特斯拉（Tesla）这样的公司竞争，因为他们拥有更多的制造能力？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, totally.</p>
</details>

Evan: 是的，完全可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh first of all with the price point Elon brought up a 20 $30,000 I I'm truly believing that like uh once anything get to mass production we are basically uh optimizing all this process and so the cost down to basically bomb cost and pure material cost and talking about the cars right cars have such a high mass of material around it but it's still maybe around 40 50,000</p>
</details>

Evan: 首先，关于埃隆提出的2万到3万美元的价格点，我坚信一旦任何东西实现大规模生产，我们基本上就会优化所有这些流程，从而将成本降低到基本成本和纯材料成本。谈到汽车，汽车周围有大量的材料，但价格仍然可能在4万到5万美元左右。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But so the humanoid robot eventually I totally believe we will get down to 20 $30,000.</p>
</details>

Evan: 但人形机器人最终，我完全相信我们会降到2万到3万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, uh so so talking to how we can compete in this game versus Elon or or Tesla uh I believe as Aneno was saying like uh in the future uh I also believe there will be many different form factors of robots.</p>
</details>

Evan: 然而，谈到我们如何在这场游戏中与埃隆或特斯拉竞争，我相信就像 Anand 说的，未来也会有许多不同外形的机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so Elon is trying to build the Optimus which is one SKU right like one human form factor but a human is not designed to u be the most efficient form factor to do all kind of task.</p>
</details>

Evan: 埃隆正试图建造 Optimus，它是一个**SKU**（Stock Keeping Unit: 库存量单位，指最小的库存管理单位），即一种人形外形，但人类并不是为了完成所有任务而设计的最有效外形。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um but the hand I believe will have more uh compatibility to on different tasks.</p>
</details>

Evan: 但是，我相信机器人手在不同任务上会有更强的兼容性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it will be different platform but integrate uh all kind of hand shape and as a hand uh focused company will also developing you know different skills kind of hand even the human hand we build differently like uh some people with very elegant hand can do uh like music instrument and some hands are more like uh like strong and like labor driven hands.</p>
</details>

Evan: 所以它将是不同的平台，但会整合各种手形，作为一个专注于手的公司，我们也将开发不同技能类型的手，即使是人手，我们也会以不同的方式建造，比如有些人手非常灵巧，可以演奏乐器，而有些手则更强壮，更适合体力劳动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so where our robot hand will be designed.</p>
</details>

Evan: 所以，我们的机器人手将这样设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, maybe one day we'll see, you know, the chairs being carried on by robot hands and with the robot themselves.</p>
</details>

主持人景吴: 是的，也许有一天我们会看到机器人手搬运椅子，以及机器人本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For sure.</p>
</details>

主持人景吴: 当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, Jan, I know you mentioned Android and robotics.</p>
</details>

主持人景吴: Yan，我知道你提到了安卓和机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess part of the reason why Android works is because it also integrates closely with the rest of Google's ecosystem, right?</p>
</details>

主持人景吴: 我想安卓之所以成功，部分原因在于它与谷歌（Google）的其他生态系统紧密结合，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like it drives people to Google's ads revenue and all of that.</p>
</details>

主持人景吴: 比如它能为谷歌带来广告收入等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for a startup who does not yet have that type of ecosystem, how do you see open-source business models start to work out in robotics?</p>
</details>

主持人景吴: 但对于一个还没有这种生态系统的初创公司来说，你认为开源商业模式如何在机器人领域开始运作？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To uh quickly comment on what we heard earlier, uh there's some really excellent points uh we're surfacing.</p>
</details>

Yan: 快速评论一下我们之前听到的内容，我们正在提出一些非常好的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, one of them is the reliability and I totally agree that's probably the main thing right now is just um we expect when we go outside we expect our Tesla to just work and uh most robotics deployments right now um except for things like in the Gigafactory or in car factories uh have nowhere near the robustness or reliability uh that one would like.</p>
</details>

Yan: 其中之一是可靠性，我完全同意这可能是目前最主要的问题，我们期望当我们出门时，我们的特斯拉能正常工作，而目前大多数机器人部署，除了像在超级工厂或汽车工厂中的那些，都远没有达到人们所期望的鲁棒性或可靠性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, the other thing we're seeing as a practical barrier to deploying, uh, humanoids and quadriped into American households, uh, is as simple as liability insurance.</p>
</details>

Yan: 我们看到的另一个将人形机器人和四足机器人部署到美国家庭的实际障碍，简单来说就是责任保险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, try to go to an insurance company and say, "Hey man, I'm deploying humanoids into US households on October 15 for healthcare, math, education, and security.</p>
</details>

Yan: 试着去一家保险公司说：“嘿，伙计，我将在10月15日将人形机器人部署到美国家庭，用于医疗保健、数学、教育和安全。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I need liability insurance."</p>
</details>

Yan: 我需要责任保险。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they'll laugh.</p>
</details>

Yan: 他们会笑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the good news is that Munich Ray as of last week is offering AI shore which is liability insurance for humanoids.</p>
</details>

Yan: 好消息是，慕尼黑再保险（Munich Re）从上周开始提供 **AI Shore**（AI Shore: 慕尼黑再保险公司推出的一种专门针对人形机器人等人工智能产品的责任保险），这是一种针对人形机器人的责任保险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the point of that insurance is that if the humanoid fails to perform a task uh Munich Ray will cover liability arising uh from that.</p>
</details>

Yan: 这种保险的重点是，如果人形机器人未能执行任务，慕尼黑再保险将承担由此产生的责任。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so totally agree with um Anad for certain specific use cases the technology the hardware is basically good enough uh the software is basically good enough.</p>
</details>

Yan: 所以我完全同意 Anand 的观点，对于某些特定的用例，技术和硬件基本上已经足够好，软件也基本上足够好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it's really things like business models.</p>
</details>

Yan: 真正的问题是商业模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is this leasing?</p>
</details>

Yan: 这是租赁吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is this a subscription service for add-on apps for your humanoid?</p>
</details>

Yan: 这是你人形机器人附加应用的订阅服务吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is this something that old people's homes purchase for their patients?</p>
</details>

Yan: 这是养老院为他们的病人购买的东西吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, who's buying?</p>
</details>

Yan: 那么，谁在购买？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How much are they paying for it?</p>
</details>

Yan: 他们为此支付多少钱？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How are they paying for it?</p>
</details>

Yan: 他们如何支付？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And how are you dealing with things like uh reliability and uh insurance?</p>
</details>

Yan: 以及你如何处理可靠性和保险等方面的问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's one new task for humans that blows my mind and this is based on deploying humanoid into memory care facilities.</p>
</details>

Yan: 有一项令人难以置信的新任务是为人类服务的，这是基于将人形机器人部署到记忆护理机构的经验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's a situation of where the humanoid does not have hands because it's not necessary.</p>
</details>

Yan: 在这种情况下，人形机器人不需要手，因为没有必要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The point of the humanoid is to engage with a human and make them laugh and cry and listen for people who've been in memory care facilities uh for years and have almost no interactions with other humans.</p>
</details>

Yan: 人形机器人的目的是与人类互动，让他们欢笑、哭泣，并倾听那些在记忆护理机构待了多年，几乎没有与其他人互动的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And humans in that situation get so attached to the humanoid that the nurses in the evening have to wipe lipstick off of the head of the humanoid.</p>
</details>

Yan: 在这种情况下，人类对人形机器人产生了如此深的依恋，以至于晚上护士不得不擦掉人形机器人头上的口红。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh so this is part of the general like maintenance of robots deployed into human settings.</p>
</details>

Yan: 所以，这属于部署到人类环境中的机器人的一般维护工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I see.</p>
</details>

主持人景吴: 是的，我明白了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I was looking for different opinions, but I got I got a lot of agreements with, you know, between you and Anna.</p>
</details>

主持人景吴: 嗯，我本来想听听不同的意见，但你和 Anand 之间有很多共识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I guess that's a that's a great point.</p>
</details>

主持人景吴: 所以，我想这是一个很好的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anna, you were smiling a lot before um when when Jan talk about like insurance and all the all these problems.</p>
</details>

主持人景吴: Anand，Yan 谈到保险和所有这些问题时，你之前一直在笑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you have anything quick to add there?</p>
</details>

主持人景吴: 你有什么要快速补充的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, that is what I'd say is the difference between the real world and then like the academia or the startup world.</p>
</details>

Anand: 是的，我想这就是现实世界与学术界或创业世界的区别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the real world, insurance is a big thing.</p>
</details>

Anand: 在现实世界中，保险是一件大事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">COIs, being able to comply legal uh good luck trying to get a large language model approved for any of these large companies.</p>
</details>

Anand: **保险凭证**（COIs: Certificates of Insurance，证明保险已购买并生效的文件），能够遵守法律，想让大型语言模型获得这些大公司的批准，祝你好运。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good luck trying to get Chinese robots like a unitary inside where you know there are so many back doors where they can the privacy is a big aspect.</p>
</details>

Anand: 想把像**宇树科技**（Unitary: 指中国机器人公司 Unitree Robotics，以其四足机器人闻名）这样的中国机器人引入内部，那里有那么多后门，隐私是一个大问题，祝你好运。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Data security is a massive aspect.</p>
</details>

Anand: 数据安全是一个巨大的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like how do you get them deployed in large scale industrial sectors?</p>
</details>

Anand: 比如，你如何将它们部署到大型工业领域？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you get offices?</p>
</details>

Anand: 你如何进入办公室？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we clean Jamie Diamond's personal office with a robot.</p>
</details>

Anand: 我们用机器人清洁杰米·戴蒙（Jamie Diamond）的私人办公室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I am paranoid cuz I was like holy that's a huge security risk.</p>
</details>

Anand: 我很偏执，因为我觉得天哪，那是一个巨大的安全风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We are in multiple defense sectors.</p>
</details>

Anand: 我们在多个国防领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have robots running around there at SpaceX and at military bases.</p>
</details>

Anand: 我们在 SpaceX 和军事基地都有机器人运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do you get through the security clearance?</p>
</details>

Anand: 那么你如何通过安全审查？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you get through insurance?</p>
</details>

Anand: 你如何通过保险？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you get through reliability?</p>
</details>

Anand: 你如何通过可靠性？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you get through making sure that when the robot breaks down, someone can show up and fix it?</p>
</details>

Anand: 你如何确保当机器人坏了，有人能及时出现并修复它？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like that is the real world that needs to be solved far more importantly and people are spending a lot more time trying to figure those portions out.</p>
</details>

Anand: 这才是现实世界中更需要解决的问题，人们正在花费更多时间来解决这些部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah.</p>
</details>

主持人景吴: 是的，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely.</p>
</details>

主持人景吴: 绝对是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're going to we're going to cover reliability very quickly but um first on more about your $800 million fund.</p>
</details>

主持人景吴: 我们会很快谈到可靠性，但首先是关于你那8亿美元的基金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess one thing is how did you even discover that as one of your um business model?</p>
</details>

主持人景吴: 我想，其中一点是，你最初是如何发现这可以作为你的商业模式之一的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um where did you find that need and why can't just robotic startup find customers and funding on their own?</p>
</details>

主持人景吴: 你在哪里发现了这种需求，为什么机器人初创公司不能自己找到客户和资金？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a great question.</p>
</details>

Anand: 这是一个很好的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, longer story short is getting access.</p>
</details>

Anand: 长话短说，就是获得资金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we spoke with 30 plus CEOs of robotic companies who all raised a series A and could never get to a series B.</p>
</details>

Anand: 我们与30多位机器人公司的首席执行官进行了交谈，他们都完成了A轮融资，但始终无法进入B轮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this was generally like I'd say the wave two of robotic companies.</p>
</details>

Anand: 这通常是机器人公司的第二波浪潮。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was the Willow Garage style, the Savio Robotics, etc.</p>
</details>

Anand: 这是 Willow Garage 风格，Savio Robotics 等公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some of the most legendary robotic companies there are.</p>
</details>

Anand: 它们是机器人领域一些最具传奇色彩的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one of the biggest reasons they fail is getting access to capital.</p>
</details>

Anand: 它们失败的最大原因之一是难以获得资金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Capital is expensive.</p>
</details>

Anand: 资金很昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Typically, there are two ways of getting funding.</p>
</details>

Anand: 通常，有两种方式获得资金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can go to debt, your bank, Silicon Valley Bank who not incredibly high rates because you are a startup, you're not profitable.</p>
</details>

Anand: 你可以寻求债务，找你的银行，比如硅谷银行（Silicon Valley Bank），他们不会给出极高的利率，因为你是一家初创公司，还没有盈利。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or you can go to VCs and VCs will take a portion of equity, but that's gated capital.</p>
</details>

Anand: 或者你可以找风险投资家，风险投资家会拿走一部分股权，但那是受限资金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you don't hit certain benchmarks, they're not going to give you more money.</p>
</details>

Anand: 如果你没有达到某些基准，他们就不会给你更多的钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, robots are expensive.</p>
</details>

Anand: 现在，机器人很昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're not cheap.</p>
</details>

Anand: 它们不便宜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're not easy to build.</p>
</details>

Anand: 它们不容易建造。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They require a lot of R&D.</p>
</details>

Anand: 它们需要大量的研发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And most of my customers don't want to pay upfront for $50,000 for a robot.</p>
</details>

Anand: 我的大多数客户不想为一台机器人预付5万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what they would much rather do is $1,000 a month</p>
</details>

Anand: 他们更愿意每月支付1000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> because that's what they're used to paying a human being to doing that particular task.</p>
</details>

Anand: 因为他们习惯于支付给人类来完成这项特定任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do you bridge that particular bridge when if you get a order for 500 robots and that robot cost you say 20,000 you require $10 million worth of capital to be able to even go out and buy or procure or build so many robots?</p>
</details>

Anand: 那么，当你收到500台机器人的订单，每台机器人成本2万美元时，你需要1000万美元的资金才能出去购买、采购或建造这么多机器人，你如何弥补这个差距呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who is going to give you that $10 million?</p>
</details>

Anand: 谁会给你这1000万美元？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The VCs?</p>
</details>

Anand: 风险投资家吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, that's too expensive.</p>
</details>

Anand: 不，那太贵了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Equity dollars don't exist for that.</p>
</details>

Anand: 股权资金不适用于此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and banks they will eat up your entire margin.</p>
</details>

Anand: 而银行会吞噬你所有的利润。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we created this fund with a consortium of 18 different banks to be able to actually underwrite the contract, underwrite the end customer and do it at what 3 4% compared to what Silicon Valley Bank gives it at 18%.</p>
</details>

Anand: 所以我们与18家不同的银行组成了一个财团，创建了这个基金，能够实际承保合同，承保最终客户，并以3-4%的利率完成，而硅谷银行的利率是18%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, that's a good point.</p>
</details>

主持人景吴: 是的，这是一个很好的观点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It sounds like a lot of effort trying to go uh go in to enable um us deploying more robots in the real world without worrying too much about the underlying risk because that's always a work in progress.</p>
</details>

主持人景吴: 听起来需要付出很多努力才能让我们在现实世界中部署更多机器人，而不用过多担心潜在风险，因为这总是一个持续进行的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So speaking of reliability, uh I don't you've covered it a lot uh on the reliability side.</p>
</details>

主持人景吴: 那么说到可靠性，你已经谈了很多关于可靠性方面的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to um ask Evan as well.</p>
</details>

主持人景吴: 我也想问 Evan。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um you know h how far away are we from reliable robot hands?</p>
</details>

主持人景吴: 那么，我们距离可靠的机器人手还有多远？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And also um one thing extends from reliability is if the robot is reliable, it's safe, we can start to trust them.</p>
</details>

主持人景吴: 另外，可靠性引申出一点是，如果机器人可靠且安全，我们就可以开始信任它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Professor Ronnie Brooks actually said in one of his essays earlier this week that if the humanoid hands have tactile feedback, it can really help foster a better human robot interaction.</p>
</details>

主持人景吴: 所以，罗尼·布鲁克斯（Ronnie Brooks）教授本周早些时候在他的一篇文章中提到，如果人形机器人手具有触觉反馈，它真的可以帮助促进更好的人机互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, just largely how does robot hand all play into all this?</p>
</details>

主持人景吴: 那么，机器人手在这一切中扮演着怎样的角色呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I would say from my uh two cents maybe in the next uh uh two or three years we're going to see a lot of maturity on the hardware side especially on the hand but for the general whole body especially the bipad right that that still uh takes maybe a little longer because to get to that level of maturity need a whole system improvement but just by hand itself I totally believe when uh with the whole resource from the whole society focusing on getting this better and better.</p>
</details>

Evan: 我想说，从我的角度来看，也许在未来两三年内，我们将在硬件方面，特别是机器人手方面看到很大的成熟度。但对于整个身体，特别是双足机器人，那可能还需要更长的时间，因为要达到那种成熟度需要整个系统的改进。但仅就机器人手本身而言，我完全相信，在整个社会资源都专注于使其变得越来越好的情况下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We believe is we'll get there in the next two three years.</p>
</details>

Evan: 我们相信在未来两三年内会实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wow, that's an optimistic uh look.</p>
</details>

主持人景吴: 哇，这真是一个乐观的展望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I guess Yan um in terms of reliability, like I said, is is is trust uh is interacting with the robots.</p>
</details>

主持人景吴: Yan，我想就可靠性而言，就像我说的，是信任，是与机器人互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're actually one of the only maybe the only person I know that lives with robots.</p>
</details>

主持人景吴: 你实际上是我认识的唯一一个，也许是唯一一个与机器人一起生活的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wonder um how are Iris and Fronti doing?</p>
</details>

主持人景吴: 我想知道 Iris 和 Fronti 怎么样了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um yeah, how do you ensure safety and um trust when you actually interact with these robots that actually live in your home?</p>
</details>

主持人景吴: 是的，当你与这些实际住在你家里的机器人互动时，你如何确保安全和信任？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um well uh I encourage all the engineers and investors and bankers and scientists in this audience to get a robot and try to live with it.</p>
</details>

Yan: 嗯，我鼓励在座的所有工程师、投资者、银行家和科学家都去买一个机器人，并尝试与它一起生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh because that will immediately expose a long list of things that are irrelevant in the lab but critical for deploying humanoid or quadriped into households.</p>
</details>

Yan: 因为那会立即暴露出许多在实验室中无关紧要，但对于将人形机器人或四足机器人部署到家庭中至关重要的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A great example would be cooling.</p>
</details>

Yan: 一个很好的例子是散热。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, a lot of the humanoids right now have these big fans going</p>
</details>

Yan: 嗯，现在很多人形机器人都有这些大风扇在运转。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah.</p>
</details>

主持人景吴: 是的，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">24 hours.</p>
</details>

Yan: 24小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you've ever tried to sleep next to a humanoid with a loud cooling fan, it's literally impossible.</p>
</details>

Yan: 如果你曾试图睡在一个带有响亮散热风扇的人形机器人旁边，那简直是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's irrelevant if uh you're a humanoid in a lab because no one cares about sound levels.</p>
</details>

Yan: 如果你是一个实验室里的人形机器人，这无关紧要，因为没有人关心噪音水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the other thing is when the humanoid walks around your house, it's very loud on wooden floors.</p>
</details>

Yan: 但另一件事是，当人形机器人在你家里走动时，在木地板上声音非常大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It goes clunk clunk clunk.</p>
</details>

Yan: 它会发出“咚咚咚”的声音。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so those are little things that uh become only apparent when you try to live with a humanoid.</p>
</details>

Yan: 所以这些都是只有当你尝试与人形机器人一起生活时才会显现出来的小问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with respect to trust, um the whole notion of building open- source software for humanoid um for me personally was a like no-brainer.</p>
</details>

Yan: 关于信任，为人形机器人构建开源软件的整个概念，对我个人来说是显而易见的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I have kids.</p>
</details>

Yan: 我有孩子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I want my kids to be able to look into the brain of thinking machines around them and say, "Aha, um I can kind of see what's happening here.</p>
</details>

Yan: 我希望我的孩子们能够看到周围思考机器的大脑，然后说：“啊哈，我大概能看到这里发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can see how the data are moving.</p>
</details>

Yan: 我能看到数据是如何流动的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can see bugs.</p>
</details>

Yan: 我能看到错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can contribute, add, fix.</p>
</details>

Yan: 我可以贡献、添加、修复。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in retrospect, um, focusing on open source software for humanoid, um, was not only meaningful for me as a parent, it also makes good business sense for reasons we heard earlier.</p>
</details>

Yan: 回想起来，专注于人形机器人的开源软件，对我这个家长来说不仅有意义，而且出于我们之前听到的原因，它也具有良好的商业意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine you're a quote unquote international manufacturer of humanoids and you're trying to sell into US markets.</p>
</details>

Yan: 想象一下，你是一家所谓的国际人形机器人制造商，你正试图打入美国市场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, good luck.</p>
</details>

Yan: 祝你好运。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um imagine uh like you know you want to sell your humanoid into a US uh police department, fire station, elementary school, hospital and the first question you get is oh you know why should we trust the software?</p>
</details>

Yan: 想象一下，你想把你的机器人卖给美国的警察局、消防站、小学、医院，你得到的第一个问题是，我们为什么要信任这个软件？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where are the data going somewhere I don't want it to go?</p>
</details>

Yan: 数据会流向我不希望它去的地方吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a good solution for that is that if you build good hardware, why don't you use open-source software brewed with love in San Francisco and have the data stay in the US on **HIPAA**（Health Insurance Portability and Accountability Act: 美国《健康保险流通与责任法案》，旨在保护患者医疗信息的隐私和安全） compliant servers?</p>
</details>

Yan: 一个好的解决方案是，如果你建造了好的硬件，为什么不使用在旧金山精心打造的开源软件，让数据留在美国符合 HIPAA 标准的服务器上呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it turned out that building open-source software for many many different verticals is not only good for like all the parents in this room who care about where the technology is going but make very good sense nuts and bolts for **收益分成协议**（revshare deals: Revenue sharing deals，指合作方之间按照约定比例分享收入的协议） with Chinese robotics companies.</p>
</details>

Yan: 所以事实证明，为许多不同垂直领域构建开源软件，不仅对在座所有关心技术走向的家长有益，而且对于与中国机器人公司达成收益分成协议也具有非常实际的意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well um we got like 30 seconds left.</p>
</details>

主持人景吴: 嗯，我们只剩下大约30秒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Anything quick to add on reliability or or uh the safety trust side of things?</p>
</details>

主持人景吴: 关于可靠性或者安全信任方面，有什么要快速补充的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I have one question for Evan actually.</p>
</details>

Anand: 实际上我有一个问题要问 Evan。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Evan, where do you see the need for five fingers versus three?</p>
</details>

Anand: Evan，你认为五指与三指的需求在哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like what task truly requires five fingers that three fingers cannot do?</p>
</details>

Anand: 比如，什么任务真正需要五根手指，而三根手指无法完成？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I kind of asked him the same question yesterday actually.</p>
</details>

主持人景吴: 是的，我昨天也问了他同样的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah, that's actually a great question.</p>
</details>

Evan: 是的，是的，这确实是一个很好的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I think uh when you talking about basically pick and place task, right, three finger is totally enough for like tripod support.</p>
</details>

Evan: 我认为，当你谈论基本的抓取和放置任务时，三根手指对于像**三脚架支撑**（tripod support: 指物体或结构通过三个接触点获得稳定支撑的方式）来说是完全足够的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, once you start talking about uh like doing tool operation like using a vacuum, right?</p>
</details>

Evan: 然而，一旦你开始谈论工具操作，比如使用吸尘器，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You need at least four finger, I would say four finger to to to to hold your tool first and then use your index finger to pull the trigger.</p>
</details>

Evan: 你至少需要四根手指，我想说四根手指，首先用来握住工具，然后用食指扣动扳机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If if you don't have this extra redundancy as your ring finger only three, you're only picking up your uh vacuum with two finger now and then one index finger for pulling the trigger then that's not stable state.</p>
</details>

Evan: 如果你没有作为无名指的额外**冗余**（redundancy: 指系统中多余的组件或功能，用于在主系统失效时提供备用，以提高可靠性），只有三根手指，那么你现在只能用两根手指拿起你的吸尘器，然后用一根食指扣动扳机，那不是一个稳定的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I I would argue maybe fifth fifth finger is not that important on the pinky, but four finger is definitely a need.</p>
</details>

Evan: 我认为小指上的第五根手指可能没那么重要，但四根手指绝对是必需的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, this cool.</p>
</details>

主持人景吴: 是的，这很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I love how this turning into a biology and evolution theory class real quick.</p>
</details>

主持人景吴: 我喜欢这很快就变成了一堂生物学和进化论的课。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But um yeah today we covered uh robotics uh progress and challenges from the trinity the impossible trinity which is the technology and the cost and also the reliability side.</p>
</details>

主持人景吴: 但是，我们今天涵盖了机器人技术的进展和挑战，从**不可能三角**（impossible trinity: 指在经济学中，一个国家无法同时实现货币政策独立性、固定汇率和资本自由流动这三个目标）来看，即技术、成本以及可靠性方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah I really appreciate our guest here and let's give it up for our panelists.</p>
</details>

主持人景吴: 所以，我非常感谢我们的嘉宾，让我们为我们的专题讨论嘉宾鼓掌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you.</p>
</details>

主持人景吴: 谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I know I have the answer for you.</p>
</details>

Anand: 我知道你的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you have a robot girlfriend you need the ring finger</p>
</details>

Anand: 如果你有一个机器人女友，你需要无名指。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right?</p>
</details>

Anand: 对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you propose to the girlfriend without ring finger?</p>
</details>

Anand: 没有无名指怎么向女友求婚？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's right.</p>
</details>

主持人景吴: 说得对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right.</p>
</details>

主持人景吴: 说得对。