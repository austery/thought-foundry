---
area: tech-insights
author: Lei
category: technology
companies_orgs: []
date: 2025-08-27
draft: true
guest: ''
insight: null
layout: post.njk
project:
- ai-impact-analysis
series: null
source: null
speaker: ''
status: evergreen
summary: Chroma founder Jeff discusses the journey of building an open-source vector
  database, the importance of developer experience, and the emerging discipline of
  context engineering to make AI applications more like engineering and less like
  alchemy.
tags:
- ai-application
- code
- developer-experience
title: Jeff on Building Chroma - From Open-Source Vector DB to Context Engineering
---

## Introduction and Chroma's Origin

Alessio: Hey everyone, welcome to the Latent Space podcast in the new studio. This is Alessio, partner and CTO of Decible, and I'm joined by Swyx, founder of Smol AI.

阿莱西奥: 大家好，欢迎来到新演播室的 Latent Space 播客。我是 Decible 的合伙人兼首席技术官 Alessio，和我一起的是 Smol AI 的创始人 Swyx。

Swyx: Hey, hey, hey. It's weird to say welcome because obviously actually today's guest, Jeff, has welcomed us to Chroma for many months now. Welcome.

斯维克斯: 嘿，嘿，嘿。说“欢迎”感觉有点奇怪，因为很明显，今天的嘉宾 Jeff 实际上已经欢迎我们来 Chroma 好几个月了。欢迎你。

Jeff: Thanks for having me. Good to be here.

杰夫: 谢谢你们邀请我。很高兴来到这里。

Swyx: Jeff, you're founder CEO of Chroma. I've sort of observed Chroma for a long long time especially back in the the old office and you were you originally sort of got your start in the open source vector database right like you sort of you're the open source vector database of choice of of a lot of different projects particularly with even even projects like the Voyager paper you guys were used in that I don't even know like the the full list but how do you introduce Chroma today?

斯维克斯: Jeff，你是 Chroma 的创始人和首席执行官。我已经关注 Chroma 很长很长时间了，特别是在旧办公室的时候。你最初是从开源**向量数据库** (Vector Database: 一种专门设计用来存储和查询高维向量数据的数据库) 开始的，对吧？你就像是很多不同项目的首选开源向量数据库，甚至包括像 Voyager 论文这样的项目都用到了你们的技术，我甚至都不知道完整的列表。但你今天如何介绍 Chroma？

Jeff: It's a good question. I mean naturally you always want to kind of take your messaging and make it fit your audience. But I think the reason that Chroma got started is because we had worked for many years in applied machine learning and we'd seen how demos were easy to build but building a production reliable system was incredibly challenging and that the gap between demo and production didn't really feel like engineering. It felt a lot more like alchemy. There's some good like XKCD memes about this guy standing on top of a giant steaming pile of garbage and the other character asks this is your data system and he's like yes. He's like how do you know how do you know if it's good or how do you make it better? Oh, you just like stir the pot and then like see if it gets any better. That just seemed intrinsically wrong. And this is back in like 2021 2022 that like we were having these conversations and so that coupled with like a thesis that like latent space was a very important tool.

杰夫: 这是个好问题。我的意思是，你总是希望根据你的受众来调整你的信息。但我认为 Chroma 创立的原因是，我们在应用机器学习领域工作了很多年，我们看到构建演示很容易，但构建一个生产级别的可靠系统却极具挑战性，而且从演示到生产的差距感觉不像是工程学，更像是炼金术。有一些不错的 XKCD 漫画，讲的是一个人站在一堆巨大的、冒着热气的垃圾上，另一个角色问他这是不是你的数据系统，他回答说是。他又问，你怎么知道它好不好，或者怎么让它变得更好？哦，你只需要搅一搅这锅东西，然后看看它会不会变得好一点。这从本质上就感觉是错的。这要追溯到 2021、2022 年，我们当时就在进行这些对话，再加上一个论点，即**潜在空间** (Latent Space: 一个数学概念，指代数据在被降维后的抽象表示空间) 是一个非常重要的工具。

Swyx: That is a plug. Yes, we agree. That is a plug.

斯维克斯: 这是在给我们打广告啊。是的，我们同意。这是个广告。

Jeff: We need to ring the bell. Yeah, exactly. Ring the latent space both the podcast but also the technology was a very underrated tool and a very like important tool for interpretability. It's fundamentally how models see their own data. We as humans can kind of you know have that shared space to understand what's going on. That's where we got started. And so I think that's also where we continue to want to go like what do we want to do? We want to help developers build production applications with AI and want to make the process of going from demo to production feel more like engineering and less like alchemy. Doing a database is like not a side quest. It is a part of the main quest. What we realized along the way was search was really a key workload to how like AI applications were going to get built. It's not the only workload, but it's definitely a really important workload and that you don't earn the right to do more things until you've done one thing at a worldclass level. that requires maniacal and you know kind of maniacal focus. Um and so that's really what we've been doing for the last few years. That was a long kind of rambly introduction but like maybe to sort of land the plane you know if you ask people you know what does Chroma do today? We build a retrieval engine for AI applications. We're working on modern search infrastructure for AI. Um some version of that.

杰夫: 我们得敲钟了。是的，没错。为潜在空间敲钟，既为这个播客，也为这项技术，它是一个被严重低估的工具，一个对于可解释性非常重要的工具。它基本上是模型看待自己数据的方式。我们作为人类可以拥有那个共享的空间来理解发生了什么。这就是我们起步的地方。所以，我认为这也是我们希望继续前进的方向。我们想做什么？我们想帮助开发者用 AI 构建生产级应用，并希望将从演示到生产的过程变得更像工程学，而不是炼金术。做一个数据库不是支线任务，而是主线任务的一部分。我们一路上意识到，搜索是构建 AI 应用的一个关键工作负载。它不是唯一的工作负载，但绝对是一个非常重要的工作负载，而且在你把一件事做到世界级水平之前，你没有资格去做更多的事情。这需要疯狂的，你知道，近乎疯狂的专注。嗯，所以这基本上就是我们过去几年一直在做的事情。这是一个有点冗长而散漫的介绍，但或许为了让话题落地，你知道，如果你问别人 Chroma 今天在做什么？我们会说我们为 AI 应用构建一个检索引擎。我们正在为 AI 开发**现代搜索基础设施**。嗯，大概是这样的说法。

Swyx: I'll do a double click on this. Is information retrieval and search the same thing or are they slightly different in your mind? I just wanted to clarify our terminology.

斯维克斯: 我想深入了解一下。信息检索和搜索是同一回事吗？还是在你看来它们略有不同？我只是想明确一下我们的术语。

Jeff: Yeah, I think that you know that modern search infrastructure for AI. Yeah, we can maybe unpack that for a couple seconds. So modern is in contrast to traditional and mostly what that means is like modern distributed systems. So there's a bunch of primitives in building great distributed systems that have come on to the scene in the last 5 10 years that obviously are not in technology that is older than that by definition. Separation read and write separation of storage and compute. Chrome is written in Rust. It's fully multi-tenant. Um we have we use object storage as a key persistence tier and like data layer for chroma uh distributed in chroma cloud as well. So that's the modern piece and then the 4 AI piece actually I think is it matters in four kind of different ways like 4i means four different things like it means number one the tools and technology that you use for search are different than in classic search systems. Number two the workload is different than classic search systems. Number three, the developer is different than classic search systems. And number four, the people who's the person who's consuming those search results is also different than in classic search systems. Think about like classic search systems like you as the human were doing the last mile of search. You know, you were doing... Exactly. You're like, which of these are relevant? Open a new tabs, summarize, blah blah blah. You the human were doing that and now it's a language model. Humans can only digest 10 blue links. Language models can digest orders of magnitude more. All of these things matter and I think influence like how a system is designed and what it's sort of like made for.

杰夫: 是的，我认为就是你所说的，为 AI 构建的现代搜索基础设施。是的，我们或许可以花几秒钟来解析一下这个概念。所谓“现代”是相对于传统而言的，主要指的是像现代**分布式系统** (Distributed Systems: 一种计算机系统，其组件位于不同的网络计算机上，它们通过消息传递进行通信和协调) 那样的东西。在过去的 5 到 10 年里，构建优秀的分布式系统出现了很多新的**原语** (Primitives: 在计算中，指最基本的操作单元或构建块)，这些显然是更早的技术所不具备的。比如读写分离，存储和计算分离。Chroma 是用 **Rust** 语言编写的。它完全支持**多租户** (Multi-tenant: 一种软件架构，单个软件实例可以服务于多个客户或租户)。嗯，我们将**对象存储** (Object Storage: 一种用于存储大量非结构化数据的计算机数据存储架构) 作为 Chroma 的关键持久层和数据层，在 Chroma Cloud 中也是分布式的。所以，这是“现代”的部分。然后“为 AI”的部分，我认为它在四个不同的方面都很重要。就像“为 AI”意味着四件不同的事：第一，你用于搜索的工具和技术与传统搜索系统不同。第二，工作负载与传统搜索系统不同。第三，开发者与传统搜索系统的开发者不同。第四，消费这些搜索结果的人也与传统搜索系统不同。想想传统的搜索系统，作为人类，你在进行搜索的“最后一公里”。你知道，你在做……没错。你会想，“这些链接中哪些是相关的？”然后打开新标签页，总结，等等。这些都是人类在做，而现在是一个**语言模型** (Language Model) 在做。人类只能消化 10 个蓝色链接。语言模型可以消化多出几个数量级的信息。所有这些都很重要，并且我认为它们影响了一个系统应该如何设计以及它的用途。

## Navigating the Hype: Patience and Vision in AI Startups

Alessio: Back in 2023, I think the Vector DB category was kind of one of the hottest ones and you had Pinecone raise 100 million, you had all these different Weaviate, you had all these companies. how did you stay focused on like what mattered to you rather than just try to raise a lot of money, make a big splash and it took you a while to release Chroma Cloud 2, which rather than just getting something out that maybe broke once you got to production, you kind of took your time. Can you maybe give people advice on in the AI space how to be patient as a founder and how to have your own vision that you follow versus kind of like following the noise around you?

阿莱西奥: 回到 2023 年，我认为向量数据库领域是当时最热门的领域之一，你有 Pinecone 融资 1 亿美元，还有 Weaviate 等等所有这些公司。你是如何保持专注，只做对你重要的事情，而不是试图去融很多钱、制造大新闻？你花了一段时间才发布 Chroma Cloud 2，而不是匆忙推出一个可能在生产环境中就崩溃的产品，你选择了慢慢来。你能不能给 AI 领域的创业者一些建议，关于如何保持耐心，以及如何拥有并追随自己的愿景，而不是随波逐流？

Jeff: There are different ways to build a startup and so you know different schools of thought here. So one school of thought certainly is like the find signal and kind of follow the gradient descent of what people want sort of lean startup style. My critique of that would be that if you follow that methodology, you will probably end up building a dating app for middle schoolers because that just seems to be like the lowest base take of what humans want to some degree. The slot machine would be the AI equivalent of that versus, you know, the other way to build a startup is to have a very strong view, presumably a contrarian view or at least a view that seems like a secret and then to just be maniacally focused on that thing. You know, they're different structures of like, okay, Chroma's single node is like doing really well, getting a bunch of traffic. Clearly, having a hosted service is the thing people want. Like, we could just spend uh we could very quickly get a product in the market. But we felt like, no, really what we want Chroma to be known for is our developer experience. It's like we want our brand to be we want Chroma's brand and the craft expressed in our brand to be extremely wellknown and we felt like by offering a single node product as a service like it was not going to meet our bar of like what great developer experience could and should look like. Yeah. We made the decision of like no we're going to like build the thing that we think is right which was really challenging. Um, it took a long time and obviously I'm incredibly proud that it exists today and that it's like serving hundreds of thousands of developers and they love it but it was hard to get there.

杰夫: 创办一家公司有不同的方式，你知道，这里有不同的思想流派。一种思想流派当然是寻找信号，然后沿着人们需求的**梯度下降** (Gradient Descent: 一种优化算法，常用于机器学习中寻找函数的最小值) 方向前进，有点像**精益创业** (Lean Startup) 的风格。我对这种方法的批评是，如果你遵循这种方法论，你很可能最终会开发一个给中学生用的约会应用，因为这似乎在某种程度上是人类欲望最底层的体现。老虎机就是其在 AI 领域的等价物。而另一种创办公司的方式是，拥有一个非常强烈的观点，可能是一个逆向的观点，或者至少是一个看起来像是秘密的观点，然后就疯狂地专注于那件事。你知道，有不同的结构，比如，好的，Chroma 的单节点版本表现非常好，获得了大量流量。显然，人们想要的是一个托管服务。我们本可以很快地将一个产品推向市场。但我们觉得，不，我们真正希望 Chroma 以此闻名的是我们的**开发者体验**。我们希望我们的品牌，希望 Chroma 的品牌以及品牌中所体现的工艺能够广为人知。我们觉得，通过提供一个单节点产品的即服务版本，是无法达到我们对优秀开发者体验应有样貌的标准的。是的。我们做出了决定，不，我们要构建我们认为正确的东西，这真的很有挑战性。嗯，这花了好长时间，显然我为它今天的存在感到无比自豪，它正在为数十万开发者服务，他们也很喜欢它，但达到这一步非常艰难。

## Building the Team and Culture

Alessio: When you're building the team, how do you message that? If I go back maybe like a year and a half ago, you know, I could join Chroma, I could join all these different companies. How do you keep the vision clear to people when on the outside you have, oh, I'll just use PG Vector or like, you know, whatever else the thing of the day is. Do you feel like that helps you bring people that are more aligned with the vision versus more of the missionary type on just joining this company before it's hot and maybe yeah any learning that you have from recruiting early on?

阿莱西奥: 在组建团队时，你如何传达这一点？如果回到大约一年半前，你知道，我可以加入 Chroma，也可以加入所有其他不同的公司。当外界都在说，“哦，我直接用 **PG Vector** 就好了”，或者你知道，用任何当时流行的东西时，你如何让人们清楚地理解你的愿景？你觉得这有助于你吸引那些与愿景更契合的人，而不是那种仅仅因为公司还没火就加入的传教士类型的人吗？也许，是的，关于早期招聘，你有什么经验可以分享？

Jeff: The upstream version of Conway's law like you ship your org chart is you ship your culture cuz I think your org chart is downstream of your company's culture. We've always placed an extremely high premium on that on the people that we actually have here on the team. Um, I think that the slope of our future growth is entirely dependent on the people that are here in this office. And, you know, that could mean going back to zero. That could mean, you know, linear growth, that could mean all kinds of versions of like hyperlinear growth, exponential growth, hockey stick growth. And so, yeah, we've just really decided to hire very slowly and be really picky. And I don't know, I mean, you know, the future will determine whether or not that was the right decision. But I think having worked on a few startups before, like that was something that I really cared about was like I just want to work with people that I love working with and like want to be shoulder-to-shoulder with in the trenches and I think can independently execute on the level of like craft and quality that like we owe developers. And so that was how we chose to do it.

杰夫: **康威定律** (Conway's Law: 一个组织设计的系统，其结构会复制该组织的沟通结构) 的上游版本，即你交付的是你的组织结构图，其实是你交付了你的文化，因为我认为组织结构图是你公司文化的下游产物。我们一直非常重视这一点，非常重视我们团队里的人。嗯，我认为我们未来增长的斜率完全取决于在这个办公室里的人。而且，你知道，这可能意味着归零，也可能意味着线性增长，还可能意味着各种超线性增长、指数增长、**曲棍球棒式增长** (Hockey Stick Growth: 指业务在初期缓慢增长，然后突然急剧上升的模式)。所以，是的，我们决定非常缓慢地招聘，并且非常挑剔。我不知道，我的意思是，未来会决定这是否是正确的决定。但我认为，在之前创办过几家公司之后，这是我真正关心的一件事，就是我只想和我喜欢一起工作的人共事，愿意在战壕里并肩作战，并且我认为他们能够独立地执行我们欠开发者的那种工艺和质量水平。所以，这就是我们选择的方式。

Swyx: We'll talk about standard connation on all the other fun stuff towards the end, but we'll focus on Chroma. I always want to put like some headline numbers up front. So, I'm just trying to do a better job of like giving people the brain dump on what they should know about Chroma.

斯维克斯: 我们稍后会聊到标准内涵和其他所有有趣的东西，但现在我们先专注于 Chroma。我总想先给出一些头条数字。所以，我只是想做得更好，让人们对 Chroma 有个全面的了解。

## Chroma by the Numbers

Alessio: 5 million monthly downloads is what I have on Pi

阿莱西奥: 我在 Pi 上看到的数据是每月 500 万次下载。

Swyx: and 21,000 GitHub stars. Anything else people should know? Like that's like the typical sales call like headline stuff like that, you know?

斯维克斯: 还有 21,000 个 GitHub 星标。还有什么人们需要知道的吗？就像那种典型的销售电话里的头条信息，你知道的？

Jeff: Yeah. Um yeah, 21,000 GitHub stars, 5 billion plus monthly downloads. Um, I've looked at the number recently. I think it's like over 60 or 70 million alltime downloads now. For many years running, Chrome has been the number one used project broadly, but also within communities like Lang Chain, Llama Index.

杰夫: 是的。嗯，是的，21,000 个 GitHub 星标，每月超过 50 亿次下载。嗯，我最近看了这个数字，现在总下载量好像超过了 6000 万或 7000 万。多年来，Chroma 一直是使用最广泛的项目，在像 Lang Chain、Llama Index 这样的社区里也是如此。

Swyx: Okay, cool. Fair enough.

斯维克斯: 好的，酷。说得有理。

## The Philosophy Behind Chroma Cloud

Swyx: Yeah, I think like when you say single node Chroma, like I think you're describing the core difference between like what Chroma cloud has been and I think we're releasing this in in line with like your GA and Chroma cloud. Uh, yes. So like what should people know about Chroma cloud and like how you've developed this experience from from the start like you you you mentioned separation of storage and compute like what does that mean?

斯维克斯: 是的，我认为当你说单节点 Chroma 时，你描述的是 Chroma Cloud 过去和现在的核心区别，我想我们发布这个正好配合你们 Chroma Cloud 的正式版（GA）。呃，是的。那么人们应该了解 Chroma Cloud 的哪些方面？以及你是如何从一开始就开发这种体验的？你提到了存储和计算的分离，这是什么意思？

Jeff: 100%. Chroma is known for its developer experience. I don't know that we were the first to do this. I think we were with Chroma you just pip install chroma and then you can use it.

杰夫: 完全正确。Chroma 以其开发者体验而闻名。我不知道我们是不是第一个这样做的。我认为我们是的，用 Chroma 你只需要 `pip install chroma` 然后就可以使用了。

Swyx: It's just like in memory

斯维克斯: 就像在内存里一样。

Jeff: like I think the first... you can persist. It could be the first database to ever be pip installable.

杰夫: 就像我认为是第一个……你可以持久化。它可能是第一个可以通过 `pip` 安装的数据库。

Swyx: any SQLite wrapper is pip installable technically you know.

斯维克斯: 任何 SQLite 的封装库理论上都可以通过 `pip` 安装，你知道的。

Jeff: No, SQLite was not like PIP installable even to this day. I don't think you probably have a deeper dive in knowledge of this. I'm just speculating myself. Yeah. So that that led to like a very seamless onboarding experience for new users because you could just run a command and then you could use it. We did all the work to make sure that like regardless of the deployment target or architecture that you're running it on, like it would just work. In the early days, we had people do really good stuff like run it on Arduinos and Power PC architectures and like really esoteric stuff, but like we would like go the extra mile to like make sure that it worked everywhere and just it just always worked. So that was Chroma single node. So going back to like the developer experience we wanted to have in a cloud product like we thought that in the same way that you could run pivots and like not have to think about it, you to learn a bunch of abstractions, you don't have to like spend a bunch of time learning which this really complicated API. That same story had to be true for the cloud. And so what that meant is like having a version of the product where you have to be forced to think about like how many nodes you want or how to size those nodes or how what your sharding strategy should be or your backup strategy or your data ting strategy or I could go on like that just wasn't wasn't good enough. It needed to be like zero config, zero knobs to tune. It should just be always fast, always very cost- effective, and always fresh without you having to do or think about anything regardless of how your traffic goes up and down and how your data scale goes up and down. That was sort of the the motivating criteria. It also like usage based billing. That was really important because that just is like so fair. We only charge you for the minimal slice of compute that you use and like nothing more, which not all serless databases can claim, but it is true inside of Chroma that we like truly only charge you for the narrow slice of what you use. And so like that was the criteria that we entered kind of the design criteria process.

杰夫: 不，SQLite 即使到今天也不能通过 `pip` 安装。我不认为你可能对这个有更深入的了解。我只是自己推测。是的。所以这为新用户带来了非常无缝的入门体验，因为你只需要运行一个命令就可以使用它。我们做了所有的工作来确保无论你在什么部署目标或架构上运行它，它都能正常工作。在早期，有人做了一些非常棒的事情，比如在 Arduinos 和 Power PC 架构上运行它，以及一些非常深奥的东西，但我们愿意多走一步，确保它在任何地方都能工作，而且它总是能工作。所以那是单节点的 Chroma。回到我们希望在云产品中拥有的开发者体验，我们认为，就像你可以运行数据透视表而不用去思考它，去学习一堆抽象概念，你不需要花大量时间去学习这个非常复杂的 API。同样的故事也必须适用于云端。所以这意味着，如果我们有一个产品版本，你被迫去思考需要多少节点，或者如何确定这些节点的大小，或者你的**分片** (Sharding: 一种数据库架构模式，将数据水平分区到不同的数据库服务器上) 策略、备份策略、数据策略应该是什么，我可以一直说下去，那样就是不够好的。它需要做到零配置，没有旋钮可以调节。它应该永远快速，永远性价比高，并且永远保持最新，而你无需做任何事或思考任何事，无论你的流量如何波动，数据规模如何变化。这基本上是我们的驱动标准。还有基于使用量的计费。这非常重要，因为它非常公平。我们只为你使用的最小计算单元收费，仅此而已，并非所有**无服务器** (Serverless) 数据库都能做到这一点，但在 Chroma 内部，我们确实只为你使用的那很小一部分收费。所以，这就是我们进入设计标准流程时所依据的准则。

Swyx: which is you know de facto you're also building a serverless compute platform.

斯维克斯: 也就是说，事实上，你也在构建一个无服务器计算平台。

Jeff: Yeah you have to no exactly that motivated the design of chroma distributed. Chroma distributed is also a part of the same monor repo that's open source Apache 2 and then the control and data plane are both fully open source Apache 2 and then Chroma cloud uses Chroma distributed to run a service and that service you can sign up create a database and load in data in under 30 seconds and this is a time of filming people get like five bucks of free credits which is actually enough to load in like a 100,000 documents and query it 100,000 times which obviously for a lot of use cases actually might mean they use for free for years, which is fine. And to get there, we had to do kind of all the all the hard work.

杰夫: 是的，你必须这样做，没错，这正是我们设计分布式 Chroma 的动机。分布式 Chroma 也是同一个单一代码库的一部分，它是开源的 **Apache 2** 协议。然后控制平面和数据平面也都是完全开源的 Apache 2 协议。而 Chroma Cloud 使用分布式 Chroma 来运行服务，你可以注册、创建数据库，并在 30 秒内加载数据。在录制这个视频的时候，用户可以获得大约 5 美元的免费额度，这实际上足够加载 10 万个文档并查询 10 万次，对于很多用例来说，这可能意味着他们可以免费使用好几年，这没关系。为了实现这一点，我们必须做所有这些艰苦的工作。

Swyx: Yeah. I think every blog should basically have semantic indexing. So like, you know, host your personal blog on Chroma, you know, like we're not

斯维克斯: 是的。我认为每个博客基本上都应该有语义索引。所以，你知道，把你的个人博客托管在 Chroma 上，你知道，我们不是...

Jeff: Yeah. I mean, you know, the the mission of organizing the world's information remains unsolved.

杰夫: 是的。我的意思是，你知道，组织世界信息的使命仍未完成。

Swyx: Yeah.

斯维克斯: 是的。

## The Rise of Context Engineering

Swyx: Yeah. You have one of your usual cryptic tweets and you text you tweeted context engineering a couple months ago. What was it? Uh, April. I think everybody now is talking about context engineering. Can you give the canonical definition for you and then how um Chroma plays into it and then we'll talk about all the different pieces of it.

斯维克斯: 是的。你发了一条你惯常的神秘推文，几个月前你发推文说“上下文工程”。那是什么时候？呃，四月。我觉得现在大家都在谈论**上下文工程** (Context Engineering)。你能给出你心目中的权威定义吗？然后 Chroma 是如何参与其中的？之后我们再讨论它的各个方面。

Jeff: I think it's something that's incredibly important when like a new market is emerging is abstractions and the primitives that you use to reason about that thing. And AI, I think like in part of its hype, has also had a lot of primitives and abstractions that have gotten thrown around and have led to a lot of developers not actually be able to think critically about what is this thing, how do I put it together, what problems can I solve, what matters, where should I spend my time. For example, the term rag. We never use the term rag. Like I hate the term rack.

杰夫: 我认为当一个新市场出现时，非常重要的一件事是抽象和你用来理解这件事的原语。而 AI，我认为在其炒作的一部分中，也出现了很多被随意使用的原语和抽象，导致很多开发者无法真正批判性地思考这到底是什么，我该如何把它组合起来，我能解决什么问题，什么才是重要的，我应该把时间花在哪里。例如，**RAG** 这个词。我们从不使用 RAG 这个词。我讨厌 RAG 这个词。

Swyx: Yeah, I killed the rag track partially because of your influence.

斯维克斯: 是的，我取消了 RAG 这个主题，部分是受了你的影响。

Jeff: Thank you. Thank you. A, it's just retrieval first of all. like retrieval event generation are three concepts put together into one thing like that's just really confusing and of course rag got known now as is branded as like you know oh you're just using single dense vector search and that's what rag is it's also dumb I think one of the reasons I was really excited about the term I mean obviously AI engineering which you did a ton of work for like context engineering is in some ways a subset of AI engineering like what is it it's a it's a high status job context engineering is the job of figuring out what should be in the context window any given LM generation step and there's both an inner loop which is setting up the in you know what should be in the context window this time and there's the outer loop which is how do you get better over time at filling the context window with only the relevant information and we recently released a technical report about context rock which goes sort of in detail in depth about how the performance of LLM is not invariant to how many tokens you use as you use more and more tokens the model can pay attention to less and then also can reason sort of less effectively. I think this really motivates the problem. You know, context rot implies the need for context engineering. And I guess like why I'm really excited about the meme and you know, I I got maybe both lucky uh to some degree that you know, called it back in April. This is going to be a big meme is that it elevates the job to it. It clearly describes the job and it elevates the status of the job. This is what frankly most AI startups any AI startup that you know of that you think of today that's doing very well like what are they fundamentally good at? What is the one thing that they're good at? It is context engineering.

杰夫: 谢谢你。谢谢你。首先，它只是检索。像检索、增强、生成是三个概念被放在一起，这真的很令人困惑。当然，RAG 现在被贴上了标签，好像是说“哦，你只是在用单一的密集向量搜索”，这就是 RAG，这也很愚蠢。我认为我对此感到兴奋的原因之一，我是说，很明显，你为 AI 工程做了大量工作，而上下文工程在某种程度上是 AI 工程的一个子集。它是什么？它是一项高地位的工作。**上下文工程**的工作是弄清楚在任何给定的 LM 生成步骤中，上下文窗口里应该放什么。这里既有一个内循环，即设置这次上下文窗口里应该放什么；也有一个外循环，即你如何随着时间的推移，更好地只用相关信息来填充上下文窗口。我们最近发布了一份关于**上下文腐烂** (**Context Rot**: 指当提供给大型语言模型的上下文窗口过长或包含过多无关信息时，模型性能下降的现象) 的技术报告，详细深入地探讨了 LLM 的性能如何随着你使用的 token 数量变化而变化。当你使用的 token 越来越多时，模型能关注到的就越少，推理能力也相应地变得不那么有效。我认为这真正激发了这个问题。你知道，**上下文腐烂**意味着需要上下文工程。我想，我为什么对这个迷因如此兴奋，而且，你知道，我在某种程度上可能很幸运，在四月份就预见到了这一点。这将成为一个大迷因，因为它提升了这份工作的地位。它清晰地描述了这份工作，并提升了它的地位。坦白说，今天你所知道的、做得非常好的大多数 AI 创业公司，他们从根本上擅长什么？他们擅长的一件事是什么？就是**上下文工程**。

Swyx: Particularly, I would feel like the the a lot of pieces I've read, a lot of it focuses on agents versus non- agent stuff. Like the context engineering is more relevant for agents. Do you make that distinction at all or you're just looking at context engineering generally?

斯维克斯: 特别是，我觉得我读过的很多文章都把重点放在了**智能体** (Agent) 与非智能体的东西上。好像上下文工程与智能体的关系更密切。你是否做了这种区分，还是你只是笼统地看待上下文工程？

Jeff: No, I mean there's interesting agent implications of like you know agent learning can you know can agents kind of learn from their interactions which maybe are less relevant and like static sort of knowledge based corpuses chat your documents obviously then again like you know I think you can make the argument that even like chat your document use cases like should get better with more interactions I don't draw a distinction between agent and non- agent I don't actually know what agent means still but again primitives abractions words they matter I don't know like what does agent I don't know.

杰夫: 不，我的意思是，智能体有一些有趣的应用，比如智能体学习，你知道，智能体能否从它们的交互中学习，这在静态的、基于知识库的语料库（比如和你的文档聊天）中可能不那么相关。但话又说回来，你知道，我认为你可以论证，即使是像“和你的文档聊天”这样的用例，也应该随着更多的交互而变得更好。我没有在智能体和非智能体之间做区分。我实际上仍然不知道智能体意味着什么，但是，再次强调，原语、抽象、词语，它们都很重要。我不知道，智能体到底是什么？我不知道。

Swyx: Well, there's many definitions out there. I've taken a stab.

斯维克斯: 嗯，外面有很多定义。我也尝试过下定义。

Jeff: Most terms that can mean anything are just a vehicle for people's hopes and fears.

杰夫: 大多数可以有任何含义的术语，都只是人们希望和恐惧的载体。

Swyx: Yeah.

斯维克斯: 是的。

Jeff: Um I think you know agent is the same thing

杰夫: 嗯，我认为智能体也是同样的情况。

Swyx: for sure. Well, maybe we'll try to be more concise or precise about context engineering so that it doesn't uh it actually means something and you know people can actually use it to to do stuff.

斯维克斯: 当然。好吧，也许我们应该试着让上下文工程这个概念更简洁或精确一些，这样它就不会……它才能真正有意义，人们才能实际用它来做事情。

## Context Rot and Model Performance

Swyx: One thing I definitely will call out for context engineering or context rot in general is I think that there's been a lot of marketing around needle in a haystack where every frontier model now comes out with like completely green perfect charts of like full utilization across you know 1 million tokens. I'm wondering what you guys' uh takes are all on on that kind of marketing and Yeah.

斯维克斯: 关于上下文工程或者说上下文腐烂，我肯定要指出的一点是，我认为围绕“**大海捞针**” (Needle in a Haystack) 测试有很多营销宣传，现在每个前沿模型出来都带着那种全绿色的完美图表，声称在 100 万个 token 的范围内实现了完全利用。我想知道你们对那种营销有什么看法。

Jeff: Yeah. So maybe to back up a little bit. The way that we came to work on this research was we were looking actually at agent learning. So we were very curious like could you give agents access to like prior successes or prior failures and if you did would that help boost agent performance? So we specifically looking at a couple different data sets uh sweep bench inclusive and you we started seeing interesting patterns where like on sort of multi-turn agent interactions where you're giving it the whole conversation window like the number of tokens explodes extremely quickly and instructions that were clearly in there like were being ignored and were not being enacted upon and we're like oh that that clearly is a problem. We've now felt the pain. sort of a meme amongst people in the know that like this was true and like I think also you know some of the research community's reaction to the context technical report is like yeah we know and you know that's fine but nobody else knew and like kind of nice if like you can actually teach builders what is possible today versus what is not possible today I don't blame the labs I mean building models is so insanely competitive everybody invariably is like picking the benchmarks that they want to do the best on they're training around those are also the ones that you know find their way into their marketing you know, most people are not motivated to come out and say, "Here are all the ways that our thing is great, and here are the ways that our thing is not great." You know, I don't know. I can have I have some sympathy for, you know, why this was not reported on. But yeah, I mean, there was there was this bit of like this sort of implication where like, oh, look, our model is perfect on this task, needle in a haystack. Therefore, the context window you can use for whatever you want. There was an implication there. And well, I hope that that is true someday. That is not the case today.

杰夫: 是的。所以也许可以稍微回溯一下。我们之所以开始做这项研究，是因为我们实际上在研究智能体学习。我们当时很好奇，你是否可以给予智能体访问先前成功或失败案例的权限，如果可以，这是否有助于提升智能体的性能？所以我们特别研究了几个不同的数据集，包括 sweep bench，然后我们开始看到一些有趣的模式，比如在多轮智能体交互中，你给它整个对话窗口，token 的数量会急剧爆炸，而那些明明在里面的指令却被忽略，没有被执行。我们就觉得，哦，这显然是个问题。我们现在感受到了痛苦。在圈内人中，这已经成了一个梗，大家都知道这是真的。而且我认为，研究社区对我们上下文技术报告的反应也是“是的，我们知道”。你知道，这没关系，但其他人不知道。如果能真正告诉构建者们今天什么是可能的，什么是不可能的，那就很好了。我不怪那些实验室，我的意思是，构建模型竞争太激烈了。每个人都无一例外地选择他们希望表现最好的基准，他们围绕这些基准进行训练，而这些也正是他们会用在市场营销中的东西。你知道，大多数人没有动力站出来说，“这是我们产品很棒的所有方面，而这是我们产品不那么好的方面。”你知道，我不知道。我对为什么这一点没有被报道，抱有一些同情。但是的，我的意思是，确实有这样一种暗示，就是“哦，看，我们的模型在‘大海捞针’这个任务上表现完美。因此，你可以随心所欲地使用上下文窗口。”这里面有一种暗示。嗯，我希望有一天这会是真的，但今天还不是。

Swyx: Yeah. Yeah. will uh send people at least on the YouTube video we'll put this chart which is kind of your figure one of the context rot report. It seems like Sonnet 4 is the best in terms of area under curve is how I think about it. Then Quinn wow and then GPC 41 and Gemini Flash are are uh degrade a lot quicker in terms of the context length.

斯维克斯: 是的，是的。我们会给人们看，至少在 YouTube 视频里，我们会放出这张图，它基本上是你们上下文腐烂报告里的图一。看起来 Sonnet 4 在**曲线下面积** (Area Under Curve: 一种评估模型性能的指标) 方面是最好的，我是这么看的。然后是 Quinn，哇，接着 GPC 41 和 Gemini Flash 在上下文长度方面性能下降得快得多。

Jeff: Yep. I don't have much commentary. That is what we found for this particular task. Again, how that translates people's actual experience and real world you know tasks is entirely different. I mean there is a certain amount of love that developers have for Claude and like maybe those two things are correlated.

杰夫: 是的。我没有太多评论。这就是我们在这个特定任务上发现的。再说一次，这如何转化为人们在现实世界任务中的实际体验是完全不同的。我的意思是，开发者们对 Claude 有一定程度的喜爱，也许这两件事是相关的。

Swyx: Yeah, I think it shows here if if this is this is true, that's that's a big explanation for why

斯维克斯: 是的，我认为这里显示了，如果这是真的，那就很好地解释了为什么……

Jeff: you follow my instructions, you know, like is a clear baseline uh you know thing people want.

杰夫: 你遵循我的指令，你知道，这是一个人们想要的清晰的基线。

Swyx: I don't think it's super answered here, but I have a theory also that reasoning models are better at context utilization because they can loop back. Normal autogressive models, they just kind of go left to right, but uh reasoning models in theory, they can loop back and look for things that they needed connections for that they may not have paid attention to in the initial pass. There's a paper today that showed I think maybe the opposite.

斯维克斯: 我不认为这里有非常明确的答案，但我也有一个理论，那就是推理模型在上下文利用方面做得更好，因为它们可以回溯。普通的**自回归模型** (Autoregressive Model)，它们只是从左到右地进行，但理论上，推理模型可以回溯，寻找它们需要但可能在初次扫描时没有注意到的连接点。今天有篇论文似乎展示了相反的观点。

Jeff: really,

杰夫: 真的吗？

Swyx: I I'll send to you later.

斯维克斯: 我晚点发给你。

Jeff: Yeah, that'd be fascinating to figure out.

杰夫: 好的，那会很有意思去弄清楚。

Swyx: There papers every day.

斯维克斯: 每天都有新论文。

Alessio: I thought the best thing was that you did not try to sell something. You're just like, "Hey, this thing is broken. Kind of sucks." How do you think about problems that you want to solve versus research that you do to highlight some of the problems and then hoping that other people will participate? like does everything that you talk about is on the Chroma road map basically or are you just advising people hey this is bad work around it but don't ask us to fix it kind of going back what I said a moment ago like Chroma's broad mandate is to make the process of building a applications more like engineering and less like alchemy um and so you know this pretty broad tent but we're a small team and we can only focus on so many things we've chosen to focus very much on one thing for now and so I don't think that I don't have the hubris to think that we can ourselves solve this stuff conclusively for a very dynamic and large emerging industry. I think it does take a community. It does take like a rising tide of people all working together. We intentionally wanted to like make very clear that like we do not have any like commercial motivations in this research. You know, we do not posit any solutions. We don't tell people to use Chroma. It's just here's the here's the problem.

阿莱西奥: 我觉得最好的一点是，你没有试图推销什么。你只是说：“嘿，这东西坏了，有点糟。” 你是如何看待你想要解决的问题，和你为了凸显问题而做的研究，并希望其他人能参与进来的关系？比如，你谈论的所有事情基本上都在 Chroma 的路线图上吗？还是你只是建议人们，“嘿，这个不好，绕开它，但别指望我们来修复”？这有点回到我刚才说的，Chroma 的广泛使命是让构建应用程序的过程更像工程，而不是炼金术。嗯，所以你知道这是一个相当大的范围，但我们是一个小团队，我们只能专注于有限的事情。我们目前选择非常专注于一件事。所以我认为，我没有那种傲慢，认为我们自己就能为一个充满活力和庞大的新兴行业彻底解决这些问题。我认为这需要一个社区，需要一股由所有人共同努力形成的浪潮。我们故意想明确表示，我们在这项研究中没有任何商业动机。你知道，我们没有提出任何解决方案，我们没有告诉人们要使用 Chroma。我们只是说，问题在这里。

Swyx: It's implied.

斯维克斯: 这是暗示的。

Jeff: Um, listen, we weren't sad that that was maybe it may be a positive indication, you know, but like still there's still reasons around SP, you know, speed and cost regardless, I think. But there's just a lot of work to do. And I think that like it's interesting where like the labs don't really care and they're not motivated to care. Increasingly as the market to be to be a good LM provider, the main market seems to be consumer. You're just not that motivated to like help developers

杰夫: 嗯，听着，我们并不因为这可能是一个积极的迹象而难过，你知道的，但无论如何，我认为在速度和成本方面仍然存在原因。但还有很多工作要做。而且我认为有趣的是，那些实验室似乎并不真正关心，也没有动力去关心。随着市场的变化，要成为一个好的 LM 提供商，主要的市场似乎是消费者。你就不那么有动力去帮助开发者。

Swyx: as a secondary concern.

斯维克斯: 作为次要考虑。

Jeff: as a secondary concern. You're just like not that motivated really to do the leg work to like help developers learn how to build stuff. And then like if you're a SAS company or you're a consumer company building with AI, you're you know AI native company like this is your like this is your secret sauce. You're not going to market how to do stuff. And so like I think there's just like a there's a natural empty space which is people that are actually have the motivations to like help show the way for how developers can build with AI. Like they're just there's not a lot of obvious people who are like obviously investing their time and energy in that. But I think that is obviously a good thing for us to do and so that's kind of how I thought about it.

杰夫: 作为次要考虑。你就是没有那么大的动力去做那些基础工作，去帮助开发者学习如何构建东西。然后，如果你是一家 **SaaS** 公司，或者是一家利用 AI 构建产品的消费品公司，你是 AI 原生公司，这就像是你的秘密武器。你不会去宣传如何做这些事。所以我觉得这里有一个自然的空白，就是那些真正有动力去帮助开发者指明如何用 AI 构建东西的人。就是说，没有太多明显的人在明显地投入时间和精力去做这件事。但我认为这显然是件好事，我们应该去做，所以我就是这么想的。

Swyx: Just a bit of push back on the consumer thing like you say labs and you know don't you think like opening I building memory into chatbt and making available to literally everybody probably too much in your face I would argue but like they would really care to make the memory utilization good. I think context utilization context engineering is important for them too even if they're only building for consumer and don't care about developers.

斯维克斯: 我想稍微反驳一下关于消费者市场的观点。你说实验室，但你不觉得像 OpenAI 把记忆功能内置到 ChatGPT 并向所有人开放——我甚至觉得有点太咄咄逼人了——但他们会非常关心如何让记忆利用率变得更好吗？我认为上下文利用和上下文工程对他们也很重要，即使他们只为消费者构建产品，而不关心开发者。

Jeff: Yeah. How good is it today is obviously one important question. Um, but we'll skip that one. Like even if that's the case, are they actually going to publish those findings?

杰夫: 是的。它今天到底有多好，这显然是一个重要的问题。嗯，但我们跳过这个问题。就像，即使是这样，他们真的会公布那些研究结果吗？

Swyx: No. Never.

斯维克斯: 不会，永远不会。

Jeff: Exactly. It's alpha, right? Why would you give away your secrets? And so I think there's just like very few companies that actually are like in the position where like they have the incentive and they really care about like trying to teach developers how to build useful stuff with AI. And so I think that we have that incentive.

杰夫: 没错。这是核心优势，对吧？你为什么要泄露你的秘密？所以我认为很少有公司真正处于这样的位置，他们既有动力，又真正关心去教开发者如何用 AI 构建有用的东西。而我认为我们有这个动力。

Alessio: But do you think you could get this to grow to the point of being the next needle in a haystack and then forcing the models providers to actually be good at it?

阿莱西奥: 但你认为你能让这个问题发展到成为下一个“大海捞针”测试的程度，从而迫使模型提供商们真正把它做好吗？

Jeff: There's no path to forcing anybody to do anything. And so uh we thought about that when we were kind of putting this together. We're like oh maybe we should like sort of formulate this as a formal benchmark that you can make it very easy to like we did open source all the code. So like you could you know if you're watching this and you're from a large model company you can do this. You can take your new model you haven't released yet and you can run you know these numbers on it. And you know, I would rather have a model that has a 60,000 context token context window that is able to perfectly pay attention to and perfectly reason over those 60,000 tokens than a model that's like 5 million tokens. Like just as a developer, the former is like so much more valuable to me than the latter. I certainly hope that model providers do like pick this up as a thing that they care about and that they train around and that they, you know, evaluate their progress on and they communicate to developers as well. That would be great.

杰夫: 没有办法强迫任何人做任何事。所以，我们当时在整理这个的时候也考虑过这个问题。我们当时想，哦，也许我们应该把它制定成一个正式的基准测试，让它变得非常容易使用，就像我们开源了所有代码一样。所以，你知道，如果你在看这个视频，并且来自一家大型模型公司，你可以这样做。你可以用你还没发布的新模型来跑这些数据。而且，你知道，我宁愿要一个有 60,000 token 上下文窗口，并且能够完美地关注和推理这 60,000 个 token 的模型，也不想要一个有 500 万 token 的模型。作为一名开发者，前者对我来说比后者有价值得多。我当然希望模型提供商们能把这当成一件他们关心的事情来做，并围绕它进行训练，评估他们的进展，并与开发者沟通。那将会很棒。

Alessio: Do you think this will get better lessons as well? How do you decide which of the because you know you're basically saying yeah the models will not learn this. It's going to be a a trick on top of it that you won't get access to.

阿莱西奥: 你认为这也会带来更好的教训吗？你如何决定哪些是……因为你基本上是在说，是的，模型不会学到这个。这会是一个你无法接触到的、在模型之上的技巧。

Jeff: I'm not saying that.

杰夫: 我不是那么说的。

Alessio: Well, but when you're saying that they will not publish how to do it, well, it means that the model API will not be able to do it, but they will have something chat GBT that will be able to do it.

阿莱西奥: 嗯，但是当你说他们不会公布如何去做时，那就意味着模型的 API 将无法做到，但他们会有像 ChatGPT 这样的东西能够做到。

Jeff: I see.

杰夫: 我明白了。

Alessio: Yeah. It's very risky to bet what's going to be better lesson versus what is not. I don't think I'll hazard a guess. Hopefully not AI engineers.

阿莱西奥: 是的。去赌什么会成为更好的教训，什么不会，风险很大。我不想冒险猜测。希望不是 AI 工程师。

Swyx: Yeah. Hopefully not all of humanity. I don't know, you know.

斯维克斯: 是的。希望不是全人类。我不知道，你知道的。

## Evolving Retrieval Techniques

Swyx: to me also an interesting discipline developing just around context engineering. Um, Lance Martin from Lang Chain did a really nice blog post with like all the different separations and then you in New York you had you hosted your your first meetup. We're going to do one here in San Francisco as well. But I'm just kind of curious like what are you seeing in the in the fields like who's doing interesting work? What are the top debates? That kind of stuff.

斯维克斯: 对我来说，围绕上下文工程也正在发展一个有趣的学科。嗯，Lang Chain 的 Lance Martin 写了一篇非常好的博客文章，里面有各种不同的分类。然后你在纽约举办了你的第一次聚会。我们也要在旧金山办一个。但我只是好奇，你在这些领域看到了什么？谁在做有趣的工作？最热门的辩论是什么？诸如此类。

Jeff: I think this is still early. I mean a lot of people are doing nothing. A lot of people are just still yeeting everything into the context window. That is very popular.

杰夫: 我认为这还为时过早。我的意思是很多人什么都没做。很多人仍然只是把所有东西都扔进上下文窗口。这很流行。

Swyx: Yeah.

斯维克斯: 是的。

Jeff: And you know they're using context caching and that certainly helps but like their cost and speed but like isn't helping the context raw problem at all. And so yeah I don't I don't know that there's lots of best practices in place yet. I mean I'll highlight a few. So the problem fundamentally is quite simple. It's you know you have n number of sort of candidate chunks and you have y spots available and you have to do the process to curate and call down from 10,000 or 100,000 or a million candidate chunks which 20 matter right now.

杰夫: 而且你知道，他们在使用上下文缓存，这当然有帮助，但只是在成本和速度上，对解决上下文腐烂问题毫无帮助。所以是的，我不知道现在是否已经有很多最佳实践。我的意思是我可以强调几点。所以，问题从根本上讲很简单。就是，你有 n 个候选的文本块（chunks），但你只有 y 个可用的位置。你必须经过一个筛选过程，从 1 万、10 万甚至 100 万个候选文本块中，挑选出当下最重要的那 20 个。

Swyx: Yeah, for this exact step

斯维克斯: 是的，为了这 конкретный 步骤。

Jeff: that optimization problem is not a new problem to many applications and industries. sort of a classic um a classic problem and of course like what tools people use to solve that problem again I think it's still very early um it's hard to say but a few patterns that I've seen so one pattern is to use what a lot of people call first stage retrieval to do a big call down so that's would be using signals like vector search like full text search like metadata filtering metadata search and others to go from let's say 10,000 down to 300 like we were saying a moment ago like you don't have to give an LLM 10 blue links, you can brute force a lot more. And so using an LLM as a reranker and brute forcing from 300 down to 30, I've seen now emerge a lot. Like a lot of people are doing this and it actually is like way more cost effective than I think a lot of people realize. I've heard of people that are running models themselves that are getting like a penny per million input tokens

杰夫: 这个优化问题对许多应用和行业来说并不新鲜。算是一个经典的，嗯，经典的问题。当然，人们用什么工具来解决这个问题，我认为现在还为时过早，嗯，很难说。但我看到了一些模式。一种模式是使用很多人所说的**第一阶段检索** (First Stage Retrieval) 来进行大规模筛选。这会使用像向量搜索、全文搜索、元数据过滤、元数据搜索等信号，把候选数量从比如说 1 万个减少到 300 个。就像我们刚才说的，你不需要给 LLM 10 个蓝色链接，你可以用暴力方式处理更多。因此，我看到现在出现了很多使用 LLM 作为**重排器** (Reranker) 并通过暴力方式从 300 个筛选到 30 个的做法。很多人都在这样做，而且实际上比很多人意识到的要划算得多。我听说有人自己运行模型，每百万输入 token 的成本大概是一美分。

Swyx: and like the output token cost is basically zero because it's like a you know the simplest.

斯维克斯: 而且输出 token 的成本基本为零，因为它就像一个最简单的……你知道的。

Jeff: These are dedicated reanker models, right? Not full LM.

杰夫: 这些是专门的重排模型，对吧？不是完整的语言模型。

Swyx: No, these are LLMs.

斯维克斯: 不，这些是大型语言模型。

Jeff: Okay.

杰夫: 好的。

Swyx: They're just using LM as reankers.

斯维克斯: 他们只是把大型语言模型当作重排器来用。

Jeff: Okay. And of course, there are also dedicated reanker models that by definition are going to be so like cheaper because they're much smaller and faster because they're much smaller. But like what I've seen emerge is like application developers who already know how to prompt are now applying that tool to reranking. And I think that like this is going to be the dominant paradigm. I actually think that like probably purposebuilt reankers will go away in the same way that like

杰夫: 好的。当然，也有专门的重排模型，根据定义，它们会更便宜，因为它们小得多，也更快，因为它们小得多。但我看到出现的情况是，那些已经知道如何写提示词（prompt）的应用开发者，现在正在将这个工具应用于重排。而且我认为这将成为主导范式。我实际上认为，专门构建的重排器可能会像……一样逐渐消失。

Swyx: purpose-built they'll still exist right like if if you're if you're at extreme scale extreme cost yes you'll care to optimize that and the same way that if you're running with hardware right like you're just going to use a CPU or GPU unless you absolutely have to have an ASIC or an FPGA and I think the same thing is true about like reankers where like as LM become 100 a thousand times faster 100 a thousand times cheaper that like people are just going to use LMS for reankers and that actually like brute forcing information curation is going to become extremely extremely popular. Now today the prospect of running 300 parallel LLM calls even if it's not very expensive you know the tail latency on any one of those like 300 LM calls API availability like it's all still really bad and so like there are good reasons to not do that today in a production application but those will also go away over time. So those patterns I think I've seen emerge that are that that's a that is a new thing that I think I've only seen start to really become popular in the last few months and by popular I mean like popular in like the leading tip of the spear but I think will become a very very dominant paradigm.

斯维克斯: 专门构建的它们仍然会存在，对吧？就像如果你在极端的规模和成本下，是的，你会关心去优化它。同样，如果你在运行硬件，对吧，你只会使用 CPU 或 GPU，除非你绝对需要一个 **ASIC** (Application-Specific Integrated Circuit: 专用集成电路) 或 **FPGA** (Field-Programmable Gate Array: 现场可编程门阵列)。我认为重排器也是如此。当大型语言模型变得快 100 倍、1000 倍，便宜 100 倍、1000 倍时，人们就会直接使用大型语言模型作为重排器。而且实际上，通过暴力方式进行信息筛选将会变得极其流行。现在，运行 300 个并行的 LLM 调用，即使不是很昂贵，你知道，这 300 个 LLM 调用中任何一个的**长尾延迟** (Tail Latency: 指在一组请求中，完成时间最长的那部分请求所经历的延迟)、API 的可用性，都还很糟糕。所以今天在生产应用中不这么做是有充分理由的，但这些问题也会随着时间的推移而消失。所以，我认为我看到的这些模式正在涌现，这是一个新事物，我认为我只是在过去几个月才看到它真正开始流行起来，我说的流行是指在最前沿的领域流行，但我认为它会成为一个非常非常主导的范式。

Swyx: Yeah, we've we've also covered a little bit on especially on the code indexing side of this the house. So everything we've been talking about applies to all kinds of context. I think code is obviously a special kind of context and corpus that you want to index. We've had a couple of episodes the cloud code guys and the the client guys talk about they don't embed or they don't index your codebase. They just give tools and use the use the tools to code search. And I've often thought about whether or not like this should be the primary context retrieval paradigm where when you build an agent you effectively call out uh to another agent with all these sort of recursive reankers and summarizers or another agent with tools.

斯维克斯: 是的，我们也稍微涉及了一点，特别是在代码索引方面。所以我们一直在讨论的一切都适用于各种上下文。我认为代码显然是一种特殊的上下文和语料库，你想要索引它。我们有几期节目，Cloud Code 的人和 Client 的人谈到他们不嵌入或索引你的代码库。他们只是提供工具，并使用这些工具进行代码搜索。我常常在想，这是否应该成为主要的上下文检索范式，即当你构建一个智能体时，你实际上是调用另一个拥有各种递归重排器和摘要器的智能体，或者另一个拥有工具的智能体。

Jeff: Y um or do you sort of glom them on to a single agent? I don't know if you have an opinion obviously because agent is very illdefined but I'll just put it out there pull that apart. So you know indexing by definition is a trade-off like when you index data you're trading right time performance for query time performance. You're making it slower to ingest data but much faster to query data which obviously scales as data sets get larger. And so like if you're only gpping very small you know 15 file code bases you probably don't have to index it and that's okay. If you want to search all of the open source dependencies of that project, you all have done this before in VS Code or cursor, right? You like run a search over like the node modules folder. It takes a really long time to run that search. That's a lot of data. Like to make that indexed and sort of you got make that trade-off of right time performance or create time performance. Like that's what that's what indexing is like. Like just like demystify it. What is this, right? Like that's what it is. You know, embeddings are known for semantic similarity today. Embeddings is just a generic concept of like information compression. There's actually like many tools you can use embeddings for. I think embeddings for code are still extremely early and underrated, but Reax is obviously an incredibly valuable tool. And you know, we've actually worked on now inside of Chroma, both single load and distributed. We support Reax search natively. So you can do Reax search inside of Chroma because we've seen that as like a very powerful tool for code search. It's great. And we build indexes to make red search go fast at large data volumes. On the coding use case that you mentioned, another use case that another feature we added to Chroma is the ability to do forking. So you can take an existing index and you can create a copy of that index in under 100 milliseconds for pennies. And in so doing, you then can just apply the diff for what files changed to the new index. So any like corpus of data that's logically changing.

杰夫: 嗯，或者你把它们都整合到一个智能体里？我不知道你是否有什么看法，很明显，因为“智能体”的定义非常不明确，但我还是提出来，把它拆开来看。所以，你知道，**索引** (Indexing) 从定义上讲就是一种权衡。当你索引数据时，你是在用写入时间的性能换取查询时间的性能。你让数据摄入变慢，但查询数据变得快得多，这在数据集变大时显然很有优势。所以，如果你只是在非常小的，比如 15 个文件的代码库里搜索，你可能不需要索引它，这没关系。但如果你想搜索那个项目的所有开源依赖项，你们都在 VS Code 或 Cursor 里做过这个，对吧？你对 `node_modules` 文件夹进行搜索，那会花很长时间。那是大量的数据。为了让它被索引，你必须做出写入时间性能和创建时间性能的权衡。这就是索引的本质。就是，把它神秘化，这到底是什么，对吧？它就是这个。你知道，**嵌入** (Embeddings) 今天以其**语义相似性** (Semantic Similarity) 而闻名。嵌入只是一个信息压缩的通用概念。实际上有很多工具你可以使用嵌入。我认为代码嵌入仍然处于非常早期和被低估的阶段，但 **Reax** 显然是一个非常有价值的工具。而且，你知道，我们现在已经在 Chroma 内部，无论是单节点还是分布式版本，都支持 Reax 搜索。你可以在 Chroma 内部进行 Reax 搜索，因为我们认为它是一个非常强大的代码搜索工具。它很棒。我们构建索引来让 Reax 搜索在大量数据下也能很快。关于你提到的编码用例，我们为 Chroma 添加的另一个功能是**分叉** (Forking) 的能力。所以你可以拿一个现有的索引，在 100 毫秒内用几分钱创建一个该索引的副本。这样做之后，你就可以只将文件变化的差异（diff）应用到新的索引上。所以任何逻辑上在变化的语料库。

Swyx: So very fast reindexing is

斯维克斯: 所以非常快的重新索引是……

Jeff: yeah basically the result. But now you can like have an index for like different each commit. So if you want to search different commits, search different branches or different release tags like any corpus that's kind of logically versioned, you now can search all those versions very easily and very cheaply and cost effectively. And so yeah, I think that you know that's kind of how I sort of think about like reax and indexing and embeddings. I mean yeah the needle continues to move here. I think that anybody who claims to have the answer, you just like shouldn't listen to them.

杰夫: 是的，基本上就是这个结果。但现在你可以为每个不同的提交（commit）建立一个索引。所以如果你想搜索不同的提交、不同的分支或不同的发布标签，任何逻辑上版本化的语料库，你现在都可以非常容易、非常便宜且划算地搜索所有这些版本。所以是的，我认为这就是我对 reax、索引和嵌入的看法。我的意思是，是的，这个领域的标准在不断变化。我认为任何声称有答案的人，你都不应该听他们的。

Alessio: When you say that code embeddings are underrated, what do you think that is?

阿莱西奥: 当你说代码嵌入被低估时，你认为原因是什么？

Jeff: Most people just take generic embedding models that are trained on the internet and they try to use them for code and like it works okay for some use cases, but does it work great for all use cases? I don't know. Another way to think about these different primitives and what they're useful for. Fundamentally, we're trying to find signal. Text search works really well. Lexical search, text search works really well when the person who's writing the query knows the data. If I want to search my Google Drive, I just for the spreadsheet that has all my investors, I'm just going to type in cap table because I know there's a spreadsheet in my Google Drive called Cap Table full text search. Great. It's perfect. I'm a subject matter expert in my data. Now, if you wanted to find that file and you didn't know that I had a spreadsheet called cap table, you're going to type in the spreadsheet that has the list of all the investors. And of course, in embedding space, in semantic space, that's going to match. And so I think again these are just like different tools and it depends on like who's writing the queries. It depends on what expertise they have in the data like what blend of those tools is going to be the right fit. My guess is that like for code today it's something like 90% of queries or 85% of queries can be satisfactory run with reax. Rejax is obviously like the dominant pattern used by Google code search, GitHub code search, but you maybe can get like 15% or 10% or 5% improvement by also using embeddings. Very sophisticated teams also use embeddings for code as a part of their code retrieval code search stack. And uh you know, you shouldn't assume they just enjoy spending money on things unnecessarily. They're getting some either eating out some benefit there. And of course, like for companies that want to be like top of their game and want to like, you know, corner their market and want to serve their users the best, this is kind of what it means to build great software with AI. 80% is quite easy, but getting from 80% to 100% is where all the work is. And like, you know, each point of improvement like is a point on the board and is a point that like I think users care about and is a point that you can use to yeah, fundamentally just like serve your users better.

杰夫: 大多数人只是拿那些在互联网上训练的通用嵌入模型，然后尝试用它们来处理代码。对于某些用例来说，效果还行，但对所有用例都效果很好吗？我不知道。另一种思考这些不同原语及其用途的方式是：从根本上说，我们是在寻找信号。文本搜索效果很好。当写查询的人了解数据时，词法搜索、文本搜索效果非常好。如果我想在我的 Google Drive 里搜索包含我所有投资人信息的电子表格，我只会输入“cap table”，因为我知道我的 Google Drive 里有一个名为“Cap Table”的电子表格，全文搜索。太棒了。完美。我是我数据领域的专家。现在，如果你想找到那个文件，但你不知道我有一个名为“cap table”的电子表格，你会输入“包含所有投资人列表的电子表格”。当然，在嵌入空间、语义空间里，这会匹配上。所以，我认为这些只是不同的工具，这取决于谁在写查询。这取决于他们对数据有多了解，以及哪种工具的组合才是最合适的。我的猜测是，对于今天的代码来说，大约 90% 或 85% 的查询可以通过 reax 满意地运行。Rejax 显然是 Google 代码搜索、GitHub 代码搜索使用的主要模式，但你或许可以通过使用嵌入获得 15%、10% 或 5% 的改进。非常成熟的团队也会将代码嵌入作为他们代码检索、代码搜索技术栈的一部分。而且，你不应该认为他们只是喜欢把钱花在不必要的事情上。他们肯定从中获得了一些好处。当然，对于那些想成为行业顶尖、想占领市场、想为用户提供最好服务的公司来说，这就是用 AI 构建优秀软件的意义所在。做到 80% 很容易，但从 80% 做到 100% 才是所有工作的关键。而且，你知道，每一点改进都像是在计分板上得分，是用户关心的点，也是你可以用来……是的，从根本上更好地服务你的用户的点。

Alessio: Do you have any thoughts on the developer experience versus agent experience? Like this is another case where well we should maybe reformat and rewrite the code in a way that it's easier to embed and then train models there. Where are you on that spectrum?

阿莱西奥: 你对开发者体验和智能体体验有什么看法吗？这又是另一个例子，我们或许应该重新格式化和重写代码，让它更容易嵌入，然后在那基础上训练模型。你在这个光谱的哪个位置？

Jeff: Yeah, I mean one tool that I've seen work well for some use cases is instead of just embedding the code, you first have an LLM generate like a natural language description of like what this code is doing. And either you embed like just the natural language description or you embed that and the code or you embed them separately and you put them into like separate you know vector search indexes. Chunk rewriting is kind of like the broad category for like what that is. Again this is like the idea here is like it's related to indexing which is as much structured information as you can put into your write or your ingestion pipeline you should. So all of the metadata you can extract do it at ingestion. all of the chunk rewriting you can do it at ingestion. If you really invest in like trying to extract as much signal and kind of pre-bake a bunch of the signals at the ingestion side, I think it makes the downstream query task like much easier. But also, you know, just cuz we're here like it's worth saying like people should be creating small golden data sets of what queries they want to work and what chunks should return and then like they can quantitatively evaluate what matters. Maybe you don't need to do a lot of fancy stuff for your application. It's entirely possible that again just using reax or just using vector search depending on the use case that's maybe all you need. I guess again anybody who's claiming to know the answer you should the first thing you should ask is let me see your data and then if they don't have any data then you have your answer already.

杰夫: 是的，我的意思是，我看到一个在某些用例中效果很好的工具是，不仅仅是嵌入代码，而是先让一个 LLM 生成一段自然语言描述，说明这段代码是做什么的。然后，你要么只嵌入这段自然语言描述，要么把描述和代码一起嵌入，要么分开嵌入到不同的向量搜索索引中。**文本块重写** (Chunk Rewriting) 大致就是这类操作的总称。再次强调，这里的想法与索引相关，那就是你应该在你的写入或摄入管道中尽可能多地加入结构化信息。所以，所有你能提取的元数据，在摄入时就做。所有文本块的重写，在摄入时就做。如果你真的投入精力去提取尽可能多的信号，并在摄入端预处理好大量信号，我认为这会使下游的查询任务变得容易得多。但同时，既然我们在这里，也值得一说，人们应该创建小型的**黄金数据集** (Golden Datasets: 指高质量、经过验证和标记的、用作基准或训练标准的数据集)，包含他们希望生效的查询以及应该返回的文本块，然后他们就可以量化评估什么才是重要的。也许你的应用不需要做很多花哨的事情。完全有可能，再次强调，只用 reax 或者只用向量搜索，取决于用例，可能就足够了。我想再次强调，任何声称知道答案的人，你首先应该问的是，“让我看看你的数据”，如果他们没有任何数据，那么你已经有答案了。

## The Importance of Data and Benchmarking

Swyx: I'll uh give a plug to a talk that you gave at the conference uh how to look at your data. Yes, looking at your data is important having having golden data sets. So these are all like good practices that I feel like somebody should put into like a little pamphlet. Call it the ten commandments of AI engineering or something.

斯维克斯: 我要推荐一下你在大会上做的一个演讲，关于如何看待你的数据。是的，看你的数据很重要，拥有黄金数据集也很重要。所以这些都是很好的实践，我觉得应该有人把它们写成一个小册子，叫做“AI 工程十诫”之类的。

Jeff: Okay, you might do that. Thou shall look at your data.

杰夫: 好的，你或许可以这么做。“汝应审视汝之数据”。

Swyx: We're about to move on to memory, but like I want to sort of leave space for like, you know, any other threads that you feel like you always want to get on the soap box about that.

斯维克斯: 我们马上要谈到记忆了，但我想留点空间，你知道，谈谈你一直想站上讲台大声疾呼的其他话题。

Jeff: Yeah, that that's dangerous. That's really dangerous thing to ask. Um,

杰夫: 是的，那很危险。问这个真的很危险。嗯……

## The Future of Retrieval: A Decoupled Transformer?

Swyx: I have one to to key off of because I think u I didn't I didn't know I didn't know where to insert this in the conversation but we were kind of skirting near it that I'm trying to explore which is you know uh I think you had this rant about RA and G where the original transformer was sort of like an encoder decoder architecture then GBT turns most transformers into decoder only but then we're also encoding with all the u um embedding models as encoder only models. So in some sense we sort of decoupled the transformer into first we encode everything with the encoder only model put it into a vector database like chroma and chroma also does other stuff but you know um then then we decode with uh the LLMs and I just think it's like a very interesting meta learning about the overall architecture like it is stepping out of just the model to models and system and I'm curious if you have any reflections on that or if you have any modifications to what I just said.

斯维克斯: 我有一个话题可以引申一下，因为我觉得……我不知道该在对话的哪个地方插入这个，但我们刚才有点擦边了，我想探讨的是，你知道，你之前对 RAG 有过一番抨击，说最初的 **Transformer** 是一种**编码器-解码器** (Encoder-Decoder) 架构，然后 GPT 把大多数 Transformer 变成了只有解码器，但我们同时又在用所有那些嵌入模型作为只有编码器的模型来进行编码。所以在某种意义上，我们把 Transformer 解耦了，首先我们用只有编码器的模型对所有东西进行编码，把它放进像 Chroma 这样的向量数据库里——Chroma 也做其他事，但你知道……然后我们再用 LLM 来解码。我只是觉得这是关于整体架构的一个非常有趣的元学习，它超越了模型本身，进入了模型和系统的层面。我很好奇你对此有什么看法，或者对我刚才说的有什么修正。

Jeff: I think there's some intuition there which is like the way we do things today is very crude and will feel very caveman in five or 10 years. You know, why aren't we just why are we going back to natural language? Why aren't we just like passing the embeddings like directly to the models who are just going to functionally like reput space, right?

杰夫: 我认为这里面有一些直觉，就是我们今天做事的方式非常粗糙，在五到十年后会感觉非常原始。你知道，我们为什么不直接……为什么还要回到自然语言？我们为什么不直接把嵌入传递给模型，它们在功能上就像是在处理空间，对吧？

Swyx: Yeah. They have a very thin embedding uh layer. Yeah.

斯维克斯: 是的。它们有一个非常薄的嵌入层。是的。

Jeff: Yeah. So, I think like there's a few things that I think might be true about retrieval systems of the future. So, like number one, they just stay in lat space. they don't go back to natural language. Number two, instead of doing like this is actually starting out to change, which is really exciting, but like for the longest time, we've done one retrieval per generation.

杰夫: 是的。所以，我认为关于未来的检索系统，有几件事可能是真的。第一，它们就停留在潜在空间里，不返回到自然语言。第二，我们不再是……其实这个情况已经开始改变了，这很令人兴奋，但在很长一段时间里，我们每次生成只做一次检索。

Swyx: Okay,

斯维克斯: 好的。

Jeff: you retrieve and then you stream out a number of tokens. Like why are we not

杰夫: 你检索，然后流式输出一些 token。我们为什么不……

Swyx: continually retrieving? Yeah.

斯维克斯: 持续检索呢？是的。

Jeff: As we need to, Greg,

杰夫: 在我们需要的时候，格雷格，

Swyx: don't call it that.

斯维克斯: 别那么叫。

Jeff: Um, but there was a paper or a paper in a in a you know, maybe like a GitHub that came out a few weeks ago. I think it was called unfortunately ragar one where they like teach uh deepcar1 you know kind of give it the tool of how to retrieve and so like kind of in its internal chain of thought and it's infant compute it's actually like searching

杰夫: 嗯，但几周前有一篇论文，或者说是在一个 GitHub 上的东西。我想它不幸地叫做 ragar one，他们在里面教 deepcar1 如何检索，所以它在内部的**思维链** (Chain of Thought) 和推理计算中，实际上是在进行搜索。

Swyx: there's also retrieval augmented language models I think this is an older paper

斯维克斯: 还有检索增强语言模型，我想这是一篇更早的论文。

Jeff: yeah yeah there's a bunch of you know realm and retro and it's kind of a long history here um so I think that you know

杰夫: 是的，是的，有很多，你知道，realm 和 retro，这里面有很长的历史。嗯，所以我认为，你知道……

Swyx: somehow not that popular I don't know why

斯维克斯: 不知为何不太流行，我不知道为什么。

Jeff: somehow not that popular well there a lot of those have the problem where like either the retriever or the language model has to be frozen and then like the corpus can't change which most developers don't want to like deal with the developer experience around.

杰夫: 不知为何不太流行，嗯，很多那些模型都有一个问题，就是要么检索器，要么语言模型必须被冻结，然后语料库就不能改变，而大多数开发者不想处理这种开发者体验。

Swyx: I would say like we would do it if if the gains were that high or

斯维克斯: 我想说的是，如果收益那么高，我们是会做的，或者……

Jeff: the labs don't want you to do it. I don't know about Yeah,

杰夫: 实验室不希望你这么做。我不知道，是的。

Swyx: the labs have a huge amount of influence.

斯维克斯: 实验室有巨大的影响力。

Jeff: Labs have a huge amount of influence. I think it's also just like you don't get you don't get points on the board by doing that well. You just like don't no one cares. The status games don't don't reward you for solving their problem. So yeah, so broadly continual retrieval I think will be interesting to see come out of the scene. Number one. Number two, staying in embedding space will be very interesting. And then yeah, there's some interesting stuff also about kind of like GPUs and how you're kind of like paging information into memory on GPUs. that I think can be done like much more efficiently. Um, and this is more like five or 10 years in the future we're kind of thinking about. But yeah, I think I think when we look back and think this was like like hilariously crude the way we do things today.

杰夫: 实验室有巨大的影响力。我认为这也像是你做得再好也得不到认可。就是没人关心。那些地位游戏不会因为你解决了他们的问题而奖励你。所以，是的，总的来说，持续检索的出现会很有趣。这是第一点。第二点，停留在嵌入空间会非常有趣。然后是的，还有一些关于 GPU 以及你如何将信息分页到 GPU 内存中的有趣的东西，我认为这可以做得更高效。嗯，这更像是我们在思考未来五到十年的事情。但是的，我认为当我们回过头来看，会觉得我们今天做事的方式简直是粗糙得可笑。

## Memory, Learning, and AI Systems

Swyx: Maybe maybe not. You know, we're solving IMO uh challenges with just language, you know. Yeah, it's great. I'm still working on the implications of that. Like it's it's still a huge achievement, but also very different than how I thought we would do things. You said that memory is the benefit of context engineering. I think there's you had a rant on Twitter about stop making memory for AI so complicated. How do you think about memory and is what are like maybe the other benefits of context engineering that maybe people are not connecting together?

斯维克斯: 也许，也许不是。你知道，在我看来，我们只是用语言来解决挑战，你知道的。是的，这很棒。我还在思考这其中的含义。这仍然是一个巨大的成就，但也和我以为我们会做事的方式很不一样。你说记忆是上下文工程的好处。我记得你在推特上抱怨过，别把 AI 的记忆搞得那么复杂。你是如何看待记忆的？上下文工程可能还有哪些人们没有联系起来的好处？

Jeff: I think memory is a good term. It is very legible to a wide population. Again, this is sort of just continuing the anthropomorphization of LLMs. You know, we ourselves understand how we are, we as humans use memory. We're very good at well some of us are very good at using memory to learn how to do tasks and then those learnings being like flexible to name environments and you know the idea of being able to like take an AI sit down next to an AI and then instruct it for 10 minutes or a few hours and kind of just like tell it what you want it to do and it does something and you say hey actually do this next time the same you would with a human at the end of that 10 minutes at the end of those few hours the AI is able to do it now and the same level of reliability that a human could do it like is incredibly attractive and exciting vision. And I think that that will happen. And I think that memory again is like the memory is the term that like everybody can understand like we all understand. Our moms all understand. And and and the benefits of memory are also very appealing and very attractive. But what is memory under the hood? It's still just context engineering, I think, which is the domain of how do you put the right information into the context window. And so yeah, I think of memory as the benefit. context engineering is the tool that gives you that benefit and there may be stuff as well. I mean maybe there's some version of memory where it's like oh you're actually like using RL to improve the model through data scene and so I'm not suggesting that like only changing context is the only tool which you know gives you great performance on tasks but I think it's a very important part.

杰夫: 我认为**记忆** (Memory) 是个好词。它对广大民众来说非常易懂。这再次延续了对 LLM 的拟人化。你知道，我们自己理解我们是如何作为人类使用记忆的。我们很擅长，好吧，我们中有些人很擅长使用记忆来学习如何完成任务，然后这些学到的东西能够灵活地应用于不同的环境。你知道，能够让一个 AI 坐在旁边，然后指导它 10 分钟或几个小时，告诉它你希望它做什么，它做了之后你再说，“嘿，下次实际上应该这样做”，就像你对待一个人一样。在那 10 分钟或几个小时结束时，这个 AI 现在能够做到这件事了，并且达到了和人类一样的可靠性水平，这是一个极具吸引力和令人兴奋的愿景。我认为这将会发生。而且我认为，记忆这个词是每个人都能理解的，我们都懂，我们的妈妈们都懂。记忆的好处也非常吸引人。但在底层，记忆是什么？我认为它仍然只是上下文工程，也就是如何将正确的信息放入上下文窗口的领域。所以，是的，我认为记忆是好处，上下文工程是给你带来这个好处的工具，可能还有其他东西。我的意思是，也许有某种版本的记忆，实际上是使用 **RL** (Reinforcement Learning: 强化学习) 通过数据来改进模型，所以我不是说只改变上下文是唯一能让你在任务上获得良好性能的工具，但我认为这是一个非常重要的部分。

Alessio: Do you see a big difference between synthesizing the memory which is like based on this conversation what is the implicit preference? Yeah, that's one side and then there's the other side which is based on this prompt what are the memories that I should put in.

阿莱西奥: 你认为在合成记忆（即根据这次对话，隐含的偏好是什么）和根据这个提示我应该放入哪些记忆之间，有很大的区别吗？

Jeff: I think they will be all fed by the same data. So the same feedback signals that tell you how to retrieve better will also tell you what to remember better. So I don't think they're actually different problems. I think they're the same problem.

杰夫: 我认为它们都将由相同的数据提供支持。所以，告诉你如何更好地检索的反馈信号，也会告诉你什么该更好地记住。所以我不认为它们是不同的问题，我认为它们是同一个问题。

Swyx: To me, the the thing I'm wrestling with a little more is just um what are the structures of memory? That makes sense. So, there's like obviously all these analogies with like long-term memory, short-term memory, let us trying to coin something around sleep. I do think that there there definitely should be some sort of batch collection cycle, maybe sort of garbage collection cycle where where it's like where the LM is sleeping. But I don't know what makes sense. like we're making all these analogies based on what we think how we think humans work, but maybe AI doesn't work the same way.

斯维克斯: 对我来说，我更纠结的一点是，记忆的结构是什么？这很有道理。所以，很明显有很多类比，比如长期记忆、短期记忆，我们试图围绕“睡眠”创造一些概念。我确实认为应该有某种批处理收集周期，也许是某种**垃圾回收** (Garbage Collection: 在计算机科学中，一种自动内存管理的机制) 周期，就像是 LM 在“睡眠”一样。但我不知道什么才合理。我们正在根据我们认为人类是如何工作的来做这些类比，但也许 AI 的工作方式不一样。

Alessio: Yeah,

阿莱西奥: 是的。

Swyx: I'm curious about uh anything you see that's working.

斯维克斯: 我很好奇你看到了什么行之有效的方法。

Jeff: Yeah, I always again, you know, as a through line of this conversation, I always get a little bit nervous when we start creating new concepts and new acronyms for things and then all of a sudden there's, you know, info charts that are like here are the 10 types of memory and you're like why? These are actually if you squint they're all the same thing like do they have to be different? You know, like

杰夫: 是的，我总是，你知道，作为这次对话的一条主线，每当我们开始为事物创造新的概念和新的缩写时，我总是会有点紧张。然后突然之间，就出现了信息图表，上面写着“这是 10 种类型的记忆”，你会想，为什么？如果你眯着眼看，它们实际上都是一回事，它们真的需要被区分开吗？你知道，就像……

Swyx: you have to blow the people's minds. No, I I don't think you do. I don't know. You got you got to resist the slot machine. The slot and the slot machine. Um, compaction has always been a useful concept in

斯维克斯: 你必须让人们大开眼界。不，我不认为你应该这么做。我不知道。你得抵制住老虎机。老虎机，老虎机。嗯，**压缩** (Compaction) 一直是一个有用的概念。

Jeff: even in databases

杰夫: 即使在数据库里。

Swyx: in databases on your computer. We all remember running defrag on our Windows machines in 1998 and uh you know so yeah again

斯维克斯: 在数据库里，在你的电脑上。我们都记得 1998 年在我们的 Windows 机器上运行碎片整理程序，所以，是的，再次强调……

Jeff: some of us not old enough to do that.

杰夫: 我们中有些人还没那么老去做那个。

Swyx: I I am not at this table. Um and uh yeah so ob obviously offline processing is helpful and I think that is also helpful in this case and as we were talking about before like what is the goal of indexing? The goal of indexing is to like trade right time performance for query time performance. Compaction is another tool in the toolbox of like sort of right time performance. You're you're reingesting data.

斯维克斯: 我……我不是这张桌子上的人。嗯，是的，所以很明显，离线处理是有帮助的，我认为在这种情况下也是有帮助的。就像我们之前谈到的，索引的目标是什么？索引的目标是用写入时间的性能换取查询时间的性能。压缩是工具箱中另一个有点像写入时间性能的工具。你在重新摄入数据。

Jeff: It's not indexing but actually it is indexing.

杰夫: 它不是索引，但实际上它就是索引。

Swyx: It's sort of reindexing. Yeah. You're taking data like oh maybe those two data points should be merged. Maybe they should be split. Maybe they should be like rewritten. Maybe there's new metadata we could extract from those. like let's look at the signal of how our applications performing. Let's try to figure out like are we remembering the right things or not? Like the idea that there's going to be like a lot of offline compute and inference under the hood that helps make AI systems continuously self-improve is a sure bet.

斯维克斯: 有点像重新索引。是的。你拿到数据后会想，哦，也许这两个数据点应该合并。也许它们应该被拆分。也许它们应该被重写。也许我们可以从中提取新的元数据。让我们看看我们的应用程序性能的信号。让我们试着弄清楚我们是否记住了正确的东西。那种认为会有大量的离线计算和推理在底层帮助 AI 系统持续自我改进的想法，是肯定会实现的。

Alessio: What part of the sleeptime compute thing that we talked about was precomputing answers. So based on the data that you have, what are likely questions that the person is going to ask and then can you premputee those things? Mhm. How do you think about that in terms of Chroma?

阿莱西奥: 我们谈到的“睡眠时间计算”中，有一部分是预计算答案。所以根据你拥有的数据，用户可能会问什么问题，然后你能预先计算好这些答案吗？嗯。从 Chroma 的角度来看，你是怎么想的？

Jeff: We released a technical report maybe 3 months ago. The title is generative benchmarking. And the idea there is like well having a golden data set is really powerful. Having a what a golden data set is is you have a list of queries and you have a list of chunks that those queries should result in. And now you can say okay this retrieval strategy gives me for these queries gives me 80% of those chunks. Whereas if I change the embedding model now I get 90% of those chunks. that is better and then you also need to consider cost and speed and API reliability and other factors obviously when making good engineering decisions but like you can measure now like changes to your system and so what we noticed was like developers had the data they had the chunks they had the answers but they didn't have the queries we did a whole technical report around how do you teach an LLM to write good queries from chunks because you you want like chunk query pairs and so if you have the chunks you need the queries Okay, we can have a human do some manual annotation obviously, but humans are inconsistent and lazy and you know QA is hard and so can we teach an LLM how to do that and uh so we sort of did a whole techical report and proved a strategy for doing that well. So I think generating QA pairs is really important for benchmarking a retrieval system golden data set frankly is also the same data set that you would use to fine-tune in many cases and so yeah there's definitely something like very underrated there.

杰夫: 我们大概三个月前发布了一份技术报告，标题是《**生成式基准测试**》(Generative Benchmarking)。其中的想法是，拥有一个黄金数据集真的非常强大。黄金数据集是什么呢？就是你有一系列查询，以及这些查询应该返回的文本块列表。现在你就可以说，好的，这个检索策略在这些查询上给了我 80% 的目标文本块。而如果我换一个嵌入模型，现在我能得到 90% 的目标文本块，这就更好了。当然，在做好的工程决策时，你还需要考虑成本、速度、API 可靠性等其他因素，但现在你可以衡量系统的变化。我们注意到的是，开发者有数据，有文本块，有答案，但他们没有查询。我们写了一整份技术报告，关于如何教一个 LLM 从文本块生成好的查询，因为你需要文本块-查询对。所以如果你有文本块，你就需要查询。好的，我们当然可以让人工进行一些手动标注，但人类是不一致和懒惰的，而且质量保证很难。所以我们能不能教一个 LLM 来做这件事呢？嗯，所以我们做了一整份技术报告，并证明了一种能做好这件事的策略。所以我认为，生成问答对对于基准测试一个检索系统非常重要。坦白说，黄金数据集在很多情况下也是你会用来**微调** (Fine-tuning) 的数据集。所以，是的，这里面肯定有非常被低估的东西。

Swyx: Yeah, I'll throw a plus one on that. I think as much attention as the context rock paper is getting, I feel like generative benchmarking was a bigger aha moment for me just because I I actually never came across concept before. And I think like actually more people will apply it to their own personal situations. Whereas context ro is just generally like yeah don't trust the models that much but there's not much you can do about it except do better context engineering. Yeah. Yes. Yes. uh whereas generate benchmarking you're like yeah generate your your your evals and and you know part of that is going you're going to need uh the data sets and it'll sort of fall you into the place of all the bit best practices that everyone advocates for. Um so yeah it's a very nice piece of work.

斯维克斯: 是的，我对此表示赞同。我认为尽管上下文腐烂那篇论文得到了很多关注，但生成式基准测试对我来说是一个更大的顿悟时刻，只是因为我之前从未接触过这个概念。而且我认为实际上更多人会把它应用到他们自己的个人情况中。而上下文腐烂通常只是说，是的，别太相信那些模型，但除了做得更好的上下文工程，你也做不了什么。是的，是的，是的。而生成式基准测试就像是，是的，生成你的评估，而你知道，这其中一部分是你需要数据集，它会引导你走向每个人都倡导的最佳实践。嗯，所以是的，这是一项非常好的工作。

Jeff: I think having worked in applied machine learning developer tools now for 10 years like the returns to a very high quality small label data set are so high. Everybody thinks you have to have like a million examples or whatever. No, actually just like a couple hundred even like high quality examples is extremely beneficial. Yeah. And customers all the time I say, "Hey, what you should do is say to your team Thursday night. We're all going to be in the conference room. We're ordering pizza and we're just going to have a data labeling party for a few hours and that's that's all it takes to bootstrap this.

杰夫: 我认为，在应用机器学习开发者工具领域工作了 10 年，一个非常高质量的小型标记数据集的回报是如此之高。每个人都认为你必须有一百万个例子之类的。不，实际上，即使只有几百个高质量的例子也极其有益。是的。我一直对客户说，“嘿，你应该做的是告诉你团队，周四晚上，我们都到会议室来，我们点披萨，然后我们开一个数据标注派对，持续几个小时，这就是启动这一切所需要的全部。”

Swyx: Google does this. Open does this. Anthropic does this. You're not above doing this." Great, you know? Right.

斯维克斯: 谷歌这么做，OpenAI 这么做，Anthropic 也这么做。你并不比他们更高贵，不能不做这个。很棒，你知道吗？对。

Jeff: Yeah. Exactly.

杰夫: 是的，没错。

Swyx: Yeah. Look at your data. It's again it's what matters. label.

斯维克斯: 是的。看你的数据。这再次是关键。标记。

Jeff: Maybe should classify that as label your data, not look at cuz look at seems a bit too

杰夫: 也许应该把它归类为“标记你的数据”，而不是“看”，因为“看”似乎有点太……

Swyx: I agree with that. Yeah, there's some more

斯维克斯: 我同意。是的，这里面有更多……

Jeff: view only,

杰夫: 只是看。

Swyx: right? I agree with that. Yeah. Yeah.

斯维克斯: 对吧？我同意。是的，是的。

Jeff: Read and write.

杰夫: 读和写。

Swyx: Read and write.

斯维克斯: 读和写。

## Vision, Values, and Building with Conviction

Swyx: While you mentioned it, I should correct myself. It wasn't standard cognition. It was standard cyborg. My favorite fact about you is you're also a cyborg with your with your leg that people if you see Jeff in person, you should ask him about it. Or maybe not. Maybe don't. I don't know.

斯维克斯: 既然你提到了，我应该纠正一下自己。不是 Standard Cognition，是 Standard Cyborg。关于你，我最喜欢的一个事实是，你也是一个半机械人，你的腿……如果大家亲眼见到 Jeff，应该问问他这件事。或者也许不该问。也许别问。我不知道。

Jeff: I don't care.

杰夫: 我不在乎。

Swyx: Don't care. Uh standard cyborg, Mighty Hive, and know it. What were those lessons there that you're applying to Chroma?

斯维克斯: 不在乎。嗯，Standard Cyborg、Mighty Hive 还有 Know It。你在那里学到的哪些经验教训，现在应用到了 Chroma？

Jeff: Yeah, more more than I can count. Um, I mean, it's a bit of a cliche. Um, and it's very hard to be self-reflective and honest with yourself about a lot of this stuff, but I think viewing your life as being very short and kind of a, you know, a vapor in the wind and therefore like only doing the work that you absolutely love doing and only doing work that you doing that work with people that you love spending time with and serving customers that you love serving is a very useful like north star. Um, and you know, it may not be the north star to like print a ton of money in some sense. There may be faster ways to scam people into making $5 million or whatever. Um, so, but if I reflect on, and I'm happy to go more detail obviously, but if I reflect on like my prior experiences, like I was always making trade-offs. I was making trade-offs with like the people that I was working with or I was making trade-offs with the customer that I was serving. I was making trade-offs with like the technology and like how proud I was of it. And maybe it's sort of like an age thing, I don't know. But like, you know, the older that I get, I just more and more want to do the best work that I can. And I want that work to not just be great work, but I also want to be seen by the most number of people because ultimately that is what impact looks like. You know, impact is not inventing something great and then nobody using it. Like impact is inventing something great, as many people using as possible.

杰夫: 是的，多到数不清。嗯，我的意思是，这有点老套。嗯，而且要对自己进行自我反思并坦诚相待，这很难，但我认为，把你的生命看作非常短暂，就像风中的一缕青烟，因此只做你绝对热爱的工作，只和你喜欢与之共度时光的人一起工作，为你热爱的客户服务，这是一个非常有用的指路明灯。嗯，而且你知道，在某种意义上，这可能不是通往赚大钱的指路明灯。或许有更快的方法去骗人赚 500 万美元之类的。嗯，但是，如果我反思一下，我当然很乐意讲得更详细，但如果我反思我之前的经历，我总是在做权衡。我和我一起工作的人做权衡，或者我和我服务的客户做权衡。我和技术做权衡，以及我对此有多自豪。也许这有点像年龄问题，我不知道。但是，你知道，我年纪越大，就越想做我能做的最好的工作。我希望那份工作不仅是伟大的工作，我还希望它能被尽可能多的人看到，因为最终那才是影响力的样子。你知道，影响力不是发明了伟大的东西然后没人用。影响力是发明了伟大的东西，并让尽可能多的人使用它。

Swyx: Is any of that uh you know, and we can skip this question if it's sensitive, but like is any of that guided by religion, by Christianity? Uh I and I only asked this because I think you're one of a growing number of openly outwardly positively religious people in the valley and I think that it's kind of what I want to explore. You know I'm not I'm not like that religious myself but I just kind of like how does that inform how you view your impact your you know your choices that there was a little bit of of that in what you just said but I wanted to sort of tease that out more.

斯维克斯: 这里面有没有……你知道，如果这个问题敏感我们可以跳过，但这其中有没有受到宗教，受到基督教的指引？我之所以问这个，是因为我觉得你是硅谷越来越多公开、外向、积极的宗教人士之一，我想探索一下这个。你知道我本人不是那么虔诚，但我只是好奇这如何影响你对你的影响力、你的选择的看法。你刚才的话里有一点点这方面的意思，但我想把它更深入地挖掘出来。

Jeff: I think increasingly modern society is nihilist. Nothing matters. It's uh absurdist, right? Everything is a farce. Everything is power.

杰夫: 我认为现代社会越来越**虚无主义** (Nihilist)。什么都不重要。它是**荒诞主义** (Absurdist) 的，对吧？一切都是一场闹剧。一切都是权力。

Swyx: Everything's a comedy.

斯维克斯: 一切都是一场喜剧。

Jeff: Everything's a comedy meme. Yeah. Exactly. And so like it's very rare and I'm not saying that I always am the living exemplar of this, but like it's very rare to meet people that have genuine conviction about what flourishing for humanity looks like. And it's very rare to meet people that are like actually willing to sacrifice a lot to like make that happen and to start things that like they may not actually see complete in their lifetimes. Like it used to be common place that people would start projects that would take centuries to complete.

杰夫: 一切都是喜剧迷因。是的。没错。所以，很少见，我不是说我总是这方面的活榜样，但你很少能遇到对人类繁荣的样貌有真正信念的人。也很少遇到那种真正愿意牺牲很多来实现这一点，并开始一些他们可能在有生之年都看不到完成的事情的人。过去，人们开始需要几个世纪才能完成的项目是很常见的。

Swyx: Yeah.

斯维克斯: 是的。

Jeff: And you know that's like less and less the case.

杰夫: 而且你知道，现在这种情况越来越少了。

Swyx: The comes to mind is the Saga Familia in Barcelona which uh I think was started like 300 years ago and it's completing next year.

斯维克斯: 我想到的是巴塞罗那的**圣家堂** (Sagrada Familia)，我想它大概是 300 年前开始建的，明年就要完工了。

Jeff: Yeah.

杰夫: 是的。

Swyx: I've seen it in construction, but I can't wait to see it completed as well.

斯维克斯: 我见过它在建的样子，但我等不及要看它完工的样子了。

Jeff: Yeah. I'm sure the places are booked out already. Yeah. And so, you know, it's it's common. There actually, you know, a lot of like religions in Silicon Valley. I think AGI is also a religion. It has a problem of evil. We don't have enough intelligence. It has a solution, a deosex machina. It has the second coming of Christ that AGI the singularity is going to come. It's going to save humanity because we will now have infinite and free intelligence. Therefore, all of our problems will be solved and uh you know we will live in sort of like the palm of grace for all eternity. It's going to solve death, right? And so like I think that like religion still exists in Silicon Valley. I think that it's like you know there's a conservation of religion. You kind of can't get rid of it. Yeah.

杰夫: 是的。我确定那些地方已经预订满了。是的。所以，你知道，这很普遍。实际上，硅谷有很多像宗教一样的东西。我认为 **AGI** (Artificial General Intelligence: 通用人工智能) 也是一种宗教。它有一个“恶”的问题：我们没有足够的智能。它有一个解决方案，一个“**机械降神**” (Deus Ex Machina)。它有基督的第二次降临，即 AGI 的**奇点** (Singularity) 将会到来。它将拯救人类，因为我们届时将拥有无限和免费的智能。因此，我们所有的问题都将得到解决，我们将在恩典的怀抱中永生。它将解决死亡问题，对吧？所以我觉得宗教在硅谷仍然存在。我认为这就像宗教守恒定律一样，你无法摆脱它。是的。

Swyx: Um but the god gene

斯维克斯: 嗯，但是“上帝基因”。

Jeff: Yeah. Yeah. I mean, you know, people have different terms for this, but uh like I think that I'm always skeptical of religions that haven't been around for more than 5 years. Put it that way.

杰夫: 是的，是的。我的意思是，你知道，人们对此有不同的说法，但是，我觉得我总是对那些存在不到 5 年的宗教持怀疑态度。就这么说吧。

Swyx: Yeah. This survivorship bias. Anyway, I I I do think like you are one of the more prominent ones that I that I know of and uh I think you you guys are a force for good and uh I like to encourage more of that. I don't know that you know people should believe in something bigger than themselves and build for uh plant trees under which they will not sit. Um it's Am I mangling the quote? Is that is that actually a biblical quote?

斯维克斯: 是的。这是**幸存者偏差** (Survivorship Bias)。不管怎样，我确实认为你是我所知道的比较突出的一位。而且我认为你们是一股向善的力量，我希望鼓励更多这样的人。我不知道，你知道，人们应该相信比自己更伟大的东西，并为了……种下自己无法乘凉的树。嗯，我是不是把这句名言说错了？这实际上是圣经里的话吗？

Jeff: I don't think it's biblical quote, but I like that quote. That's a good one. So yeah, plus one.

杰夫: 我不认为这是圣经里的话，但我喜欢这句话。这是句好话。所以，是的，赞成。

Swyx: Like I think society is really collapsed when like you just live for yourself. That that that really is true.

斯维克斯: 我觉得当人们只为自己而活的时候，社会就真的崩溃了。这真的没错。

Jeff: Agreed.

杰夫: 同意。

## Design, Brand, and Hiring at Chroma

Swyx: Who does your design? Because uh all of your swag is great, your office looks great, the website looks great, the docs look great. How much of that is your input? How much of that do you have somebody who just gets it? And how important is that to like making the brand part of the culture?

斯维克斯: 谁负责你们的设计？因为你们所有的周边产品都很棒，办公室看起来很棒，网站看起来很棒，文档也看起来很棒。这里面有多少是你的投入？有多少是你找到了一个真正懂行的人？这对于让品牌成为文化的一部分有多重要？

Jeff: I think all value, you know, again going back to the Conway's law thing, like you ship your org chart, you ship what you care about as a founder in some sense and like I do care deeply about this aspect of what we do. And so I think it does it does it does come from me in some sense. Um I can't take at all credit for everything we've done. We've had the opportunity to work with some like really talented designers and we're hiring as well for that. So if people, you know, are listening to this and want to apply, please do. I think I mean it's cliche to uh decri um Patrick Collison quotes, but he does seem to be one of the like most sort of public embodiers of this idea that like how you do I'm not sure if this is a direct quote from him to be clear. This is more of just a broad aism, but like how you do one thing is how you do everything. and just ensuring that there's a consistent experience of what we're doing where like you said if you come to our office like it feels intentional and thoughtful if you go to our website it feels intentional and thoughtful use our API it feels intentional and thoughtful if you go through interview process it feels intentional and purposeful I think that's so easy to lose it's just so easy to like lose that and in some ways the only way that you keep that is by insisting on that that standard remain. And I think that that is like one of the main things that like I can do really for the company like as a leader. It's sort of cringe to say, but like you do kind of have to be like the curator of taste. It's not that I have to stamp everything that goes out the door before it does, but at a minimum companies, you know, maybe it's not even like downhill in quality. It's not sort of legible that any one thing is bad or worse, but it's like more like people just have their own expressions of what good looks like and like you know they turn that up to 11 and then like the brand becomes incoherent. Like what does this thing mean and like what do they stand for? Again, this not longer a single voice. Yeah. I don't again I'm not claiming that I'm good at perfect at this or good at this. We certainly we we we wake up we wake up every day and we try.

杰夫: 我认为所有的价值，你知道，再次回到康威定律，你交付的是你的组织结构图，在某种程度上，你交付的是你作为一个创始人所关心的东西。我确实非常关心我们所做的这方面。所以我认为，在某种程度上，这确实是源于我。嗯，我不能把我们所做的一切功劳都归于自己。我们有机会和一些非常有才华的设计师合作，我们也在为此招聘。所以如果人们在听这个并且想申请，请务必申请。我认为，引用 Patrick Collison 的话可能有点老套，但他似乎是这个想法最公开的体现者之一，就是你如何做一件事就是你如何做所有事。我不确定这是否是他的原话，需要澄清一下。这更像是一个普遍的格言。就是确保我们所做的一切都有一个一致的体验。就像你说的，如果你来我们的办公室，感觉是有意图和周到的；如果你访问我们的网站，感觉是有意图和周到的；使用我们的 API，感觉是有意图和周到的；如果你经历面试过程，感觉是有意图和有目的的。我认为这很容易失去，太容易失去了。在某些方面，保持这一点的唯一方法就是坚持那个标准。我认为这作为领导者，我能为公司做的主要事情之一。这么说有点尴尬，但你确实得像是品味的策展人。不是说每件东西出门前我都要盖章，但至少公司，你知道，也许质量甚至没有下降，也不是说任何一件东西是好是坏，更多的是人们对“好”有自己的表达方式，然后他们把这个发挥到极致，然后品牌就变得不连贯了。这个东西意味着什么？他们代表什么？这不再是一个单一的声音。是的。我再次声明，我不是说我在这方面很完美或很擅长。我们当然每天醒来都在努力。

Swyx: you have a lot of uh it's very powerful that the the skill you have to convey like straightforward principles and values and thoughtfulness I think in in everything that you do like yeah I you know you know you know I've I've been impressed with your work for a while

斯维克斯: 你有很多……你拥有的那种传达直接原则、价值观和深思熟虑的能力非常强大，我认为在你做的每件事中都是如此。是的，你知道，我一直对你的工作印象深刻。

Jeff: thank you

杰夫: 谢谢你。

Swyx: anything we're missing you're hiring designers any other roles that you have open that you want people to to apply for

斯维克斯: 我们还有什么遗漏的吗？你在招聘设计师，还有其他开放的职位希望人们申请吗？

Jeff: if you're a great product designer um that wants to work on developer tools I think we have one of the most kind of unique opportunities at Chroma If you are interested in extending the kind of research that we do, that's also an interesting opportunity. We're always also hiring like very talented engineers that want to work with other people that are very passionate about kind of low-level distributed systems and in some ways solving all the hard problems so that application developers don't have to.

杰夫: 如果你是一位优秀的产品设计师，想从事开发者工具方面的工作，我认为我们在 Chroma 有一个非常独特的机会。如果你有兴趣扩展我们所做的研究，那也是一个有趣的机会。我们也一直在招聘非常有才华的工程师，他们希望和其他对底层分布式系统充满热情的人一起工作，在某种程度上解决所有难题，这样应用开发者就不用操心了。

Swyx: When you say that, can you double click on low-level distributed systems? People always say this and then like okay, Rust like like you know like Linux kernel, what are we talking here?

斯维克斯: 当你这么说的时候，你能深入解释一下“底层分布式系统”吗？人们总是这么说，然后就……好吧，Rust，比如，你知道，Linux 内核，我们在这里谈论的是什么？

Jeff: Yeah, I mean like that maybe like you know a useful encapsulation of this is like if you care deeply about things like Rust or deterministic simulation testing or

杰夫: 是的，我的意思是，也许一个有用的概括是，如果你非常关心像 Rust 或确定性模拟测试这样的事情，或者……

Swyx: raft paxos

斯维克斯: Raft、Paxos。

Jeff: TA plus consensus

杰夫: TLA+ 共识。

Swyx: TA plus really

斯维克斯: TLA+，真的吗？

Jeff: um

杰夫: 嗯……

Swyx: wow

斯维克斯: 哇。

Jeff: you know if you just keep I'm saying these these are like proxies for you would like you would like the work that we do here.

杰夫: 你知道，如果我只是说这些，这些就像是代表，你会喜欢我们在这里做的工作。

Swyx: I just really want to tease out the hiring message, but also I um part of my goal is also to try to identify who are what what is the type of engineer that people that startups are really trying to hire and they cannot get because the better we can identify this thing I can you know maybe create like some kind of branding around it create an event and like get these like there's a there's a supply side and a demand side and they can't find each other and that's why I put AI engineer together was that that was that was part of it but then this distributed systems person which like I have heard heard from you and like a hundred other startups. What is the skill set? What are they called? What do they do? And part of that is like part of that is cloud engineering because a lot of times you're just dealing with AWS.

斯维克斯: 我只是想把招聘信息说清楚，但同时，我的一个目标也是试图找出创业公司真正想招聘但又招不到的那种工程师是什么样的。因为我们越能识别出这类人，我就能围绕它创造某种品牌，举办活动，把这些人聚集起来。这里有供给方和需求方，但他们找不到彼此。这就是我把“AI 工程师”这个概念整合起来的原因之一。但现在这个“分布式系统人才”，我从你这里和上百家其他创业公司都听说过。他们的技能是什么？他们叫什么？他们做什么？其中一部分是云工程，因为很多时候你只是在和 AWS 打交道。

Jeff: Sure.

杰夫: 当然。

Swyx: A lot of that a lot of times you're just dealing with I don't know debugging network calls and and uh consistency things if you're doing replication or whatever. Um where do they go? What do they do? Yeah. Yeah. Like but they don't use TA plus at work, you know.

斯维克斯: 很多时候你只是在处理，我不知道，调试网络调用，以及如果你在做复制或其他事情时的一致性问题。嗯，他们去哪儿了？他们做什么？是的，是的。但是他们在工作中不用 TLA+，你知道的。

Jeff: Probably not. Yeah. I mean last year I started like the SF systems group.

杰夫: 可能不会。是的。我的意思是，去年我创办了旧金山系统小组。

Swyx: Yes. the reading group.

斯维克斯: 是的，那个读书会。

Jeff: Um, yeah, there's like presentations and the point of that was like let's bring let's create a meeting place for people that like care about this topic because like there wasn't really a place in the Bay Area for people to do that. Um, so that continues to go now and continues to run which is great. I mean to be clear we have a lot of people in the team who are extremely good at this and so like it's not that we have zero it's that we have six or seven um 120 but yeah we yeah it's not that we want more but we are in some ways like I feel like our product road map is very obvious and we know exactly what we need to build for the next even like 18 months but quality is always a limiting function quality and focus are always limiting functions and like well yes I will always make my land acknowledgement to mythical mammoth month eventually like

杰夫: 嗯，是的，有演讲，目的就是让我们为关心这个话题的人创造一个聚会的地方，因为在湾区并没有一个真正的地方让人们做这个。嗯，所以现在这个小组还在继续，还在运作，这很棒。我的意思是，需要明确的是，我们团队里有很多非常擅长这个的人，所以不是说我们一个都没有，而是我们有六七个，嗯，120个，但是是的，我们，是的，不是说我们想要更多，而是在某些方面，我觉得我们的产品路线图非常明显，我们清楚地知道未来 18 个月需要构建什么，但质量永远是限制因素，质量和专注永远是限制因素。而且，是的，我最终总会向《人月神话》致敬，就像……

Swyx: it's good more people

斯维克斯: 有更多人是好事。

Jeff: you do you kind of do need more people because you need more focus like you need more people to care deeply about the work that they do I think AI is certainly an accelerant as helpful the reason that our team is still very small today relative to many of our competitors is because like I think we've really embraced like those tools

杰夫: 你确实需要更多的人，因为你需要更多的专注，你需要更多的人深深地关心他们所做的工作。我认为 AI 无疑是一个有帮助的加速器。我们团队今天相对于许多竞争对手来说仍然很小，原因是我认为我们真正地拥抱了那些工具。

Swyx: your cursor shop cloud code windsurf

斯维克斯: 你的 cursor shop、cloud code、windsurf……

Jeff: people use whatever they want yeah so I think all of those tools get some usage internally so far uh we've still not found that really any AI coding tools are particularly good at rust though. Um I think not sure why that is other than the obvious there's just like not that many examples of great Russ on the internet

杰夫: 人们用他们想用的任何东西，是的，所以我想所有这些工具在内部都有一些使用。到目前为止，我们仍然没有发现任何 AI 编码工具在 Rust 方面特别出色。嗯，我不确定为什么会这样，除了很明显的原因，就是互联网上没有那么多优秀的 Rust 示例。

Swyx: and so um you know

斯维克斯: 所以，嗯，你知道的……

Jeff: yeah you you would think that you know Russ errors would be help you debug it itself right

杰夫: 是的，你会认为 Rust 的错误信息会帮助你调试它自己，对吧？

Swyx: you would think

斯维克斯: 你会这么想。

Jeff: apparently not okay

杰夫: 显然不是，好吧。

Swyx: I have zero experience in that in that front

斯维克斯: 我在那方面零经验。

Jeff: uh I have I've contributed three things to the rest SDK of temporal and that was my total experience with Rust but I I think it's definitely on the rise. It's It's Zigg, it's Rust,

杰夫: 嗯，我为 Temporal 的 Rust SDK 贡献了三样东西，这就是我全部的 Rust 经验。但我认为它肯定在崛起。是 Zigg，是 Rust。

Swyx: and I I don't know if there's a third. Cool languages.

斯维克斯: 我不知道还有没有第三个。很酷的语言。

Jeff: I think ghost accounts.

杰夫: 我觉得 Go 也算。

Swyx: Golang. Yeah, ghost accounts. If you're in in those in that in that bucket, uh, reach out to Jeff. But, uh, otherwise, I think we're good.

斯维克斯: Golang。是的，Go 也算。如果你属于那个范畴，呃，联系 Jeff。但是，呃，除此之外，我想我们差不多了。

Alessio: Thanks for coming on.

阿莱西奥: 谢谢你来参加。

Jeff: Thanks for having me, guys. Good to see you.

杰夫: 谢谢你们邀请我，伙计们。很高兴见到你们。

Swyx: Thank you.

斯维克斯: 谢谢你。