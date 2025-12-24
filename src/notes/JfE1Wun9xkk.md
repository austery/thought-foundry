---
area: tech-engineering
category: ai-ml
companies_orgs:
- openai
date: '2025-10-08'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: []
people: []
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=JfE1Wun9xkk
speaker: a16z
status: evergreen
summary: Sam Altman在本播客中探讨OpenAI的四重业务模式、Sora对AGI的意义、AI科学家的前景、能源挑战与核能未来，以及AI发展中的文化与商业化思考。
tags:
- agi
- energy
title: Sam Altman谈Sora、能源与构建AI帝国
---

### AI发现的奇迹与进步

I sort of thought we had stumbled on this one giant secret: that we had these scaling laws for language models. That felt like such an incredible triumph. I was like, "We're probably never going to get that lucky again." And deep learning has been this miracle that keeps on giving, and we have kept finding breakthrough after breakthrough. Again, when we got the reasoning model breakthrough, I also thought that was like, "We're never going to get another one like that." And it just seems so improbable that this one technology works so well. But maybe this is always what it feels like when you discover one of the big scientific breakthroughs. If it's really big, it's pretty fundamental and it just keeps working.

我曾以为我们偶然发现了一个巨大的秘密：语言模型有其**扩展定律** (Scaling laws for language models: 指模型性能随计算量、数据量和模型规模增加而提升的规律)。那感觉像是一个不可思议的胜利。我当时想，“我们可能再也不会那么幸运了。”然而**深度学习** (Deep learning: 机器学习的一个分支，通过多层人工神经网络来学习数据表征) 却是一个不断带来惊喜的奇迹，我们不断取得突破。同样，当我们获得推理模型突破时，我也曾以为我们再也不会有那样的突破了。这项技术能如此出色地运作，这似乎太不可思议了。但这也许就是当你发现某个重大科学突破时，总是会有的感受。如果它真的非常重大，那它就相当基础，并且会持续发挥作用。

### OpenAI的多维愿景与AGI使命

Host: Sam, welcome to the Z podcast.

主持人: Sam，欢迎来到Z播客。

Sam Altman: Thanks for having me.

Sam Altman: 谢谢邀请。

Host: All right. You have described in another interview, you described OpenAI as a combination of four companies: a consumer technology business, a mega-scale infrastructure operation, a research lab, and all the new stuff including planned hardware devices from hardware to app integrations to Java marketplace to commerce. What do all these bets add up to with OpenAI's vision?

主持人: 好的。你在另一次采访中提到，你将OpenAI描述为四家公司的结合：一家消费科技公司、一家超大规模的基础设施运营公司、一个研究实验室，以及所有新业务，包括从硬件到应用集成、Java市场、商业等计划中的硬件设备。所有这些投入对于OpenAI的愿景意味着什么？

Sam Altman: I mean, maybe you should count just three, maybe as four for our own version of what traditionally would have been the research lab at this scale, but three core ones. We want to be people's personal AI subscription. And I think most people will have one. Some people will have several. And you'll use it in some first-party consumer stuff with us, but you'll also log into a bunch of other services and you'll use it from dedicated devices at some point. You'll have this AI that gets to know you and be really useful to you, and that's what we want to do. It turns out that to support that, we also have to build out this massive amount of infrastructure. But the goal there, the mission, is really to build this **AGI** (Artificial General Intelligence: 具备与人类同等或超越人类智能水平的人工智能系统) and make it very useful to people.

Sam Altman: 我觉得或许可以算作三家，或者四家，因为我们有自己的版本，传统意义上这个规模的研究实验室。但核心是三家。我们希望成为人们的个人AI订阅服务。我认为大多数人会有一个，有些人会有几个。你会用它来处理我们的一些第一方消费级产品，但你也会登录其他许多服务，并且在某个时候你会通过专用设备来使用它。你将拥有这个了解你并对你非常有用的AI，这就是我们想要做的。事实证明，为了支持这一点，我们还必须建设大量的**基础设施** (Infrastructure: 指支撑AI运行的计算资源、数据中心等硬件和软件系统)。但其真正的目标和使命是构建**AGI** (Artificial General Intelligence: 通用人工智能)，并使其对人们非常有用。

Host: And does the infrastructure, do you think it will end up, it's necessary for the main goal, will it also separately end up being another business or is it just really going to be in service to the personal AI or unknown?

主持人: 那么你认为这个基础设施，虽然它是主要目标所必需的，它最终也会独立成为另一项业务吗？还是它只会服务于个人AI，或者说还未知？

Sam Altman: You mean, like, would we sell it to other companies as infrastructure?

Sam Altman: 你是说，我们会不会把它作为基础设施卖给其他公司？

Host: Yeah, would you sell it to other companies? Or it's such a massive thing, would it do something else?

主持人: 是的，你会卖给其他公司吗？或者说，因为它规模如此庞大，它还会做其他事情吗？

Sam Altman: It feels to me like there will emerge some other thing to do like that, but I don't know. We don't have a current, it's currently just meant to support the service we want to deliver and the research.

Sam Altman: 我感觉未来会出现其他类似的事情，但我不知道。我们目前没有计划，它目前只是为了支持我们想要提供的服务和研究。

Host: Yeah, that makes sense.

主持人: 是的，这很合理。

Sam Altman: The scale is sort of ridiculous.

Sam Altman: 这规模有点荒谬。

Host: Terrifying enough that you got to be open to doing something else.

主持人: 令人望而生畏，以至于你必须对做其他事情持开放态度。

Sam Altman: Yeah, if you're building the biggest data center in the history of humankind.

Sam Altman: 是的，如果你正在建造人类历史上最大的数据中心。

Host: The biggest infrastructure project in the history.

主持人: 人类历史上最大的基础设施项目。

### AI的商业模式与图灵测试

Host: There was a great interview you did many years ago in Strictly VC, and sort of early OpenAI, well before ChatGPT, and they were asking, "Hey, what's the business model?" And you said, "Oh, we'll ask AI, it'll figure it out for us." Everybody laughs, but there have been multiple times, and there was just another one recently, where we have asked a then current model for what should we do, and it has had an insightful answer we missed.

主持人: 几年前你在Strictly VC上做过一次很棒的采访，那是OpenAI早期，远在**ChatGPT** (ChatGPT: OpenAI开发的基于大型语言模型的聊天机器人) 问世之前。他们问：“嘿，商业模式是什么？”你说：“我们会问AI，它会为我们搞定。”大家都笑了，但有好几次，最近又发生了一次，我们问当时的模型我们该怎么做，它给出了我们意想不到的深刻答案。

Sam Altman: I think when we say stuff like that, people don't take us seriously or literally.

Sam Altman: 我觉得当我们说那样的话时，人们并没有认真对待或相信我们说的是真的。

Host: But maybe the answer is you should take us both.

主持人: 但也许答案是你们应该两者兼顾。

Sam Altman: Yeah, well, as somebody who runs an organization, I ask the AI a lot of questions about what I should do. It comes up with some pretty interesting answers.

Sam Altman: 是的，作为一名组织管理者，我经常向AI提问我该怎么做。它会给出一些相当有趣的答案。

Host: Sometimes, sometimes it does. You have to give it enough context, but what is the thesis that connects these bets beyond more distribution, more compute? How do we think about it?

主持人: 有时候，确实如此。你必须给它足够的背景信息。但是，除了更多的分发、更多的计算之外，连接这些投入的论点是什么？我们该如何看待它？

Sam Altman: I mean, the research enables us to make the great products, and the infrastructure enables us to do the research. So it is a vertical stack of things. You can use ChatGPT or some other service to get advice about what you should do running an organization, but for that to work, it requires great research and requires a lot of infrastructure. So it is just this one thing.

Sam Altman: 我的意思是，研究使我们能够开发出优秀的产品，而基础设施使我们能够进行研究。所以它是一个垂直堆栈。你可以使用ChatGPT或其他服务来获取关于如何运营组织的建议，但要实现这一点，它需要出色的研究和大量的**基础设施** (Infrastructure: 指支撑AI运行的计算资源、数据中心等硬件和软件系统)。所以它就是这样一回事。

Host: And do you think that there will be a point where that becomes completely horizontal or will it stay vertically integrated for the foreseeable future? I was always against vertical integration, and I now think I was just wrong about that.

主持人: 你认为它会完全横向发展吗？还是在可预见的未来会保持**垂直整合** (Vertical integration: 指公司将生产或销售链条上的不同环节，例如原材料生产、制造、分销等，纳入自身业务范围)？我一直反对垂直整合，现在我觉得我错了。

Sam Altman: Yeah. Interesting.

Sam Altman: 是的。有意思。

Host: And there's kind of, because you'd like to think that the economy is efficient and the theory that companies can do one thing and then...

主持人: 因为你会希望经济是高效的，而且公司只做一件事，然后……

Sam Altman: It's supposed to work.

Sam Altman: 它应该会奏效。

Host: Like to think that.

主持人: 喜欢这样想。

Sam Altman: And in our case, at least, it hasn't really. It hasn't some ways for sure, or there's people that make like, you know, Nvidia makes an amazing chip or whatever that a lot of people can use, but the story of OpenAI has certainly been towards we have to do more things than we thought to be able to deliver on the mission.

Sam Altman: 至少在我们的案例中，情况并非如此。在某些方面确实不是，或者说有些人制造出了很棒的产品，比如**英伟达** (Nvidia: 全球领先的图形处理器和人工智能计算公司) 制造了很棒的芯片，很多人都能用，但OpenAI的故事显然是朝着我们必须做比我们想象中更多的事情才能完成使命的方向发展。

Host: Right. Although the history of the computing industry has been a story of a back and forth. There was the Wang word processor, and then the personal computer, and the Blackberry before the smartphone. So there has been this kind of vertical integration and then not, but then the iPhone is also vertically integrated.

主持人: 是的。尽管计算行业的历史一直是一种反复。有王安文字处理器，然后是个人电脑，智能手机之前的黑莓。所以一直存在这种垂直整合然后又没有，但iPhone也是垂直整合的。

Sam Altman: The iPhone, I think, is the most incredible product the tech industry has ever produced, and it is extraordinarily vertically integrated.

Sam Altman: 我认为iPhone是科技行业有史以来最令人难以置信的产品，它具有极高的**垂直整合** (Vertical integration: 指公司将生产或销售链条上的不同环节，例如原材料生产、制造、分销等，纳入自身业务范围) 度。

Host: Yeah, amazingly so. Interesting. Which bets would you say are enablers of AGI versus which are sort of hedges against uncertainty?

主持人: 是的，令人惊叹。有意思。你认为哪些投入是**AGI** (Artificial General Intelligence: 通用人工智能) 的推动者，哪些又是对不确定性的对冲？

Sam Altman: I think you could say that on the surface, **Sora** (Sora: OpenAI发布的文本到视频生成模型) for example, does not look like it's AGI relevant. But I would bet that if we can build really great world models, that will be much more important to AGI than people think. There were a lot of people who thought ChatGPT was not a very AGI-relevant thing, and it has been very helpful to us, not only in building better models and understanding how society wants to use this, but also in bringing society along to actually figure out, "Man, we got to contend with this thing." For a long time before ChatGPT, we would talk about AGI, and people were like, "This is not happening," or "We don't care." Then all of a sudden, they really cared. So research benefits aside, I'm a big believer that society and technology have to co-evolve. You can't just drop the thing at the end. It doesn't work that way. It is an ongoing back and forth.

Sam Altman: 我觉得表面上看，比如**Sora** (Sora: OpenAI发布的文本到视频生成模型) 似乎与**AGI** (Artificial General Intelligence: 通用人工智能) 无关。但我敢打赌，如果我们能构建出真正优秀的世界模型，那对AGI的重要性将远超人们的想象。很多人曾认为ChatGPT与AGI关系不大，但它对我们非常有帮助，不仅帮助我们构建更好的模型和理解社会如何使用它，还帮助社会意识到“我们必须应对这个东西”。在ChatGPT之前很长一段时间，我们谈论AGI时，人们都觉得“这不会发生”或者“我们不关心”。然后突然间，他们真的开始关心了。所以，除了研究带来的好处，我坚信社会和技术必须共同演进。你不能在最后才把东西拿出来。它不是那样运作的。它是一个持续的往复过程。

### Sora的战略意义与社会共演

Host: Say more about how Sora fits into your strategy because there's some hull on X around, "Hey, why devote precious GPUs to Sora?" But is it a short-term, long-term trade-off? Or are we so aging?

主持人: 请多谈谈Sora如何融入你的战略，因为在X上有一些争议，比如“为什么要把宝贵的**GPU** (Graphics Processing Unit: 图形处理器，通常用于处理图像、视频和AI计算) 用于Sora？”但这是一种短期与长期之间的权衡吗？还是我们已经如此陈旧？

Sam Altman: Well, and then the new one had a very interesting twist with the social networking. Be very interested in how you're thinking about that. Did Meta call you up and get mad, or what do you expect the reaction to be? I think if one company of the two of us feels like more like the other one has gone after them, they shouldn't be calling us.

Sam Altman: 嗯，而且新版本在社交网络方面有一个非常有趣的转折。我很想知道你是如何看待这个问题的。Meta有没有给你打电话发火？你预计会有怎样的反应？我想，如果我们两家公司中有一家觉得另一家在针对他们，那他们就不应该给我们打电话。

Host: Well, I do know the history, too. But look, we're not going to, first of all, I think it's cool to make great products, and people love the new Sora, and I also think it is important to give society a taste of what's coming on this co-evolution point. So, very soon the world is going to have to contend with incredible video models that can deepfake anyone or show anything you want. That will mostly be great. There will be some adjustment that society has to go through. And just like with ChatGPT, we were like, the world kind of needs to understand where this is. I think it's very important the world understands where video is going very quickly because that's going to be, video has much more emotional resonance than text, and very soon we're going to be in a world where this is going to be everywhere. So, I think there's something there. As I mentioned, I think this will help our research program and is on the AGI path, but it can't all be about just making people ruthlessly efficient and the AI solving all our problems. There's got to be some fun and joy and delight along the way. But we won't throw tons of compute at it, or not by a fraction of our compute. It's tons in the absolute sense, but not in the relative sense.

主持人: 嗯，我也知道历史。但你看，我们不会……首先，我认为制造出色的产品很酷，人们喜欢新的Sora，而且我认为重要的是，在这个共同进化的关头，让社会尝到即将到来的东西。所以，很快世界就将不得不应对那些令人难以置信的视频模型，它们可以**深度伪造** (Deepfake: 一种使用人工智能技术，特别是深度学习，来合成或操纵视频、图像或音频的技术，常用于伪造人脸或语音) 任何人，或者展示任何你想要的东西。这大部分会很棒。社会将不得不经历一些调整。就像ChatGPT一样，我们觉得世界需要了解这个东西的发展方向。我认为世界很快理解视频的发展方向非常重要，因为视频比文本有更强烈的情感共鸣，而且很快我们就会生活在一个视频无处不在的世界。所以，我认为Sora有其价值。正如我所说，我认为这将有助于我们的研究项目，并且处于**AGI** (Artificial General Intelligence: 通用人工智能) 的道路上。但不能仅仅是为了让人们变得效率极高，让AI解决所有问题。这个过程中必须有一些乐趣和喜悦。但我们不会投入大量的计算资源，至少相对于我们的总计算资源而言并非如此。从绝对意义上讲，Sora消耗的计算量很大，但从相对意义上讲则不然。

### AI人机交互的未来与AI科学家

Host: I want to talk about the future of AI human interfaces because back in August, you said the models have already saturated the chat use case. So what do future AI human interfaces look like both in terms of hardware and software? Is the vision for a WeChat-like?

主持人: 我想谈谈AI人机界面的未来，因为早在八月份你就说过，模型已经饱和了聊天用例。那么未来AI人机界面在硬件和软件方面会是什么样子？是类似微信那样的愿景吗？

Sam Altman: So I'm solving the chat thing in a very narrow sense, which is if you're trying to have the most basic kind of chat-style conversation, it's very good. But what a chat interface can do for you, it's nowhere near saturated, because you could ask a chat interface, "Please cure cancer." A model certainly can't do that yet. So I think the text interface style can go very far, even if for the chitchat use case, the models are already very good. Of course there are better interfaces to have. Actually, it's another thing I think is cool about Sora. You can imagine a world where the interface is just constantly real-time rendered video.

Sam Altman: 我是在一个非常狭隘的意义上解决聊天问题，也就是说，如果你想进行最基本的聊天式对话，它已经很棒了。但**聊天界面** (Chatbot: 一种基于计算机程序的对话系统，能够模拟人类对话，回答用户问题或执行任务) 能为你做的事情远未饱和，因为你可以问一个聊天界面：“请治愈癌症。”模型现在肯定还做不到。所以我认为文本界面风格可以走得很远，即使对于闲聊用例来说，模型已经非常出色。当然，还有更好的界面。实际上，这是我认为Sora的另一个酷之处。你可以想象一个世界，界面只是不断实时渲染的视频。

Host: Yeah.

主持人: 是的。

Sam Altman: And what that would enable, and that's pretty cool. You can imagine new kinds of hardware devices that are always ambiently aware of what's going on, rather than your phone blasting you with text message notifications whenever it wants. It really understands your context and when to show you what. There's a long way to go on all that stuff. Within the next couple of years, what will models be able to do that they're not able to do today? Will be white-collar replacement at a much deeper level, **AI scientist**, humanoids.

Sam Altman: 以及它将实现的功能，那真的很酷。你可以想象新型的硬件设备，它们总是能够环境感知正在发生的事情，而不是你的手机随时随地向你发送短信通知。它真正理解你的语境以及何时向你展示什么。所有这些方面还有很长的路要走。未来几年内，模型将能够做哪些今天还做不到的事情？那将是更深层次的白领替代、**AI科学家** (AI scientist: 能够自主进行科学研究、实验设计、数据分析并提出新假设的人工智能系统)、以及类人机器人。

Sam Altman: I mean, a lot of things, but you touched on the one that I am most excited about, which is the AI scientist.

Sam Altman: 我的意思是，很多事情，但你提到了我最兴奋的一点，那就是**AI科学家** (AI scientist: 能够自主进行科学研究、实验设计、数据分析并提出新假设的人工智能系统)。

Host: Yeah.

主持人: 是的。

Sam Altman: This is crazy that we're sitting here seriously talking about this. The, I know there's a quibble on what the Turing test literally is, but the popular conception of the **Turing test** (Turing test: 由英国数学家艾伦·图灵提出的一种测试机器是否展现出智能的方法，若观察者无法区分与自己对话的是人类还是机器，则机器通过测试) sort of went whooshing by.

Sam Altman: 我们坐在这里认真讨论这个真是太疯狂了。我知道关于**图灵测试** (Turing test: 由英国数学家艾伦·图灵提出的一种测试机器是否展现出智能的方法，若观察者无法区分与自己对话的是人类还是机器，则机器通过测试) 的字面定义有些争议，但它在公众观念中已经呼啸而过了。

Host: Yeah, it was fast. Yeah.

主持人: 是的，很快。

Sam Altman: You know, it was just like we talked about it as this most important test of AI for a long time. It seemed impossibly far away. Then all of a sudden, it was passed. The world freaked out for a week, two weeks, and then it's like, "All right, I guess computers can do that now."

Sam Altman: 你知道，就像我们很久以来一直把它视为AI最重要的测试一样。它似乎遥不可及。然后突然间，它就被通过了。世界震惊了一两周，然后就好像，“好吧，我想电脑现在可以做到这一点了。”

Host: And everything just went on. And I think that's happening again with science. My own personal equivalent of the Turing test has always been when AI can do science. That has always, that is a real change to the world. And for the first time, with **GPT-5** (GPT-5: OpenAI即将发布的下一代大型语言模型), we are seeing these little examples where it's happening. You see these things on Twitter: "AI did this, it made this novel math discovery, and it did this small thing in my physics research, my biology research." And everything we see is that that's going to go much further. So, in two years, I think the models will be doing bigger chunks of science and making important discoveries, and that is a crazy thing. That will have a significant impact on the world. I am a believer that to a first order, scientific progress is what makes the world better over time, and if we're about to have a lot more of that, that's a big deal.

主持人: 然后一切都继续发展。我认为这种情况在科学领域又将发生。我个人心中的图灵测试一直都是当AI能够进行科学研究时。这始终是，这确实会给世界带来真正的改变。而现在，我们第一次在**GPT-5** (GPT-5: OpenAI即将发布的下一代大型语言模型) 中看到了正在发生的这些小例子。你在Twitter上看到这些东西：“AI做到了这个，它取得了这项新颖的数学发现，它在我的物理研究、我的生物研究中完成了这项小事。”我们看到的一切都表明，这将走得更远。所以，我认为在两年内，模型将能够进行更大规模的科学研究并做出重要的发现，这是一件疯狂的事情。那将对世界产生重大影响。我坚信，从首要层面来看，科学进步是随着时间推移使世界变得更好的因素，如果我们即将迎来更多这样的进步，那将是一件大事。

Sam Altman: It's interesting because that's a positive change that people don't talk about. It's gotten so much into the realm of the negative changes if AI gets extremely smart.

Sam Altman: 这很有趣，因为这是一个人们不常谈论的积极变化。如果AI变得极其智能，人们更多地关注负面变化。

Host: But carbon disease is… who we could use a lot more science. Yeah. That's a really good point. I think Alan Turing said this, somebody asked him, they said, "Well, do you really think the computer is going to be smarter than the brilliant minds?" He said, "It doesn't have to be smarter than a brilliant mind, just smarter than a mediocre mind like the president of AT&T." And we could use more of that, too. Probably.

主持人: 但碳病是……我们急需更多科学。是的。这是一个很好的观点。我想艾伦·图灵说过，有人问他：“你真的认为电脑会比那些聪明绝顶的人更聪明吗？”他说：“它不必比聪明绝顶的人更聪明，只要比像AT&T总裁那样的平庸之辈更聪明就行。”我们可能也需要更多这样的情况。

### OpenAI的文化与创新

Sam Altman: We just saw Periodic launch last week. Open AAI launch. And to that point, it's amazing to see both the innovation that you guys are doing, but also the teams that come out of OpenAI feel like they are creating tremendous, capable things.

Sam Altman: 我们上周刚看到Periodic发布。OpenAI发布。就这一点而言，看到你们所做的创新以及从OpenAI走出来的团队正在创造出巨大且有能力的事物，真是令人惊叹。

Host: We certainly hope so.

主持人: 我们当然希望如此。

Sam Altman: The, I want to ask you about broader reflections in terms of what development in 2025 has surprised you or what has updated your worldview since ChatGPT came out.

主持人: 我想问你一些更广泛的思考，关于2025年有哪些发展让你感到惊讶，或者自ChatGPT问世以来，有什么更新了你的世界观？

Sam Altman: A lot of things, again, but maybe the most interesting one is how much new stuff we found. I sort of thought we had stumbled on this one giant secret: that we had these scaling laws for language models, and that felt like such an incredible triumph that I was like, "We're probably never going to get that lucky again." And deep learning has been this miracle that keeps on giving, and we have kept finding breakthrough after breakthrough. Again, when we got the reasoning model breakthrough, I also thought that was like, "We're never going to get another one like that." And it just seems so improbable that this one technology works so well. But maybe this is always what it feels like when you discover one of the big scientific breakthroughs. If it's really big, it's pretty fundamental and it just keeps working. But the amount of progress, if you went back and used **GPT-3.5** (GPT-3.5: OpenAI开发的一系列大型语言模型，是ChatGPT的基础模型之一) from ChatGPT launch, you'd be like, "I cannot believe anyone used this thing."

Sam Altman: 又有很多事情，但也许最有趣的是我们发现了多少新东西。我曾以为我们偶然发现了一个巨大的秘密：语言模型有其**扩展定律** (Scaling laws for language models: 指模型性能随计算量、数据量和模型规模增加而提升的规律)，那感觉像是一个不可思议的胜利，我当时想，“我们可能再也不会那么幸运了。”而深度学习却是一个不断带来惊喜的奇迹，我们不断取得突破。同样，当我们获得推理模型突破时，我也曾以为我们再也不会有那样的突破了。这项技术能如此出色地运作，这似乎太不可思议了。但这也许就是当你发现某个重大科学突破时，总是会有的感受。如果它真的非常重大，那它就相当基础，并且会持续发挥作用。但进步的程度是，如果你回到ChatGPT发布时去使用**GPT-3.5** (GPT-3.5: OpenAI开发的一系列大型语言模型，是ChatGPT的基础模型之一)，你会觉得，“我简直不敢相信有人会用这玩意儿。”

Host: Yeah.

主持人: 是的。

Sam Altman: And now we're in this world where the capability overhang is so immense. Most of the world still just thinks about what ChatGPT can do. And then you have some nerds in Silicon Valley that are using codecs, and they're like, "Wow, those people have no idea what's going on." And then you have a few scientists who say, "Those people using codecs have no idea what's going on." But the overhang of capability is so big now, and we've just come so far on what the models can do. And in terms of further development, how far can we get with **LLMs** (Large Language Models: 大型语言模型，指参数量巨大，通常通过大量文本数据进行训练的深度学习模型) ? At what point do we need either new architecture or how do you think about what breakthroughs are needed?

Sam Altman: 而现在我们所处的世界，能力过剩如此巨大。世界上大部分人仍然只想着ChatGPT能做什么。然后你硅谷的一些书呆子正在使用编解码器，他们会说：“哇，那些人根本不知道发生了什么。”然后你有一些科学家会说：“那些使用编解码器的人根本不知道发生了什么。”但现在能力过剩的程度如此之大，我们在模型能力方面已经取得了很大的进展。就进一步发展而言，我们用**LLMs** (Large Language Models: 大型语言模型，指参数量巨大，通常通过大量文本数据进行训练的深度学习模型) 能走多远？在什么阶段我们需要新的架构，或者你认为需要哪些突破？

Sam Altman: I think far enough that we can make something that will figure out the next breakthrough with the current technology. It's a very self-referential answer, but if **LLMs** (Large Language Models: 大型语言模型) can get, if LLM-based stuff can get far enough that it can do better research than all of OpenAI put together, maybe that's good enough.

Sam Altman: 我认为我们可以走得足够远，利用现有技术开发出能够发现下一个突破性进展的东西。这是一个非常自指的答案，但如果**LLMs** (Large Language Models: 大型语言模型) 能够发展到，如果基于LLM的技术能够发展到它能比OpenAI所有团队加起来做得更好的研究，也许这就足够了。

Host: Yeah, that would be a big breakthrough. A very big breakthrough. So, on the more mundane, one of the things that people have started to complain about, I think South Park did a whole episode on it, is the obsequiousness of AI and ChatGPT in particular. And how hard a problem is that to deal with? Is it not that hard or is it a fundamentally hard problem?

主持人: 是的，那将是一个巨大的突破。一个非常巨大的突破。那么，就更世俗的方面而言，人们开始抱怨的一件事，我认为《南方公园》为此做了一整集，就是AI特别是ChatGPT的**谄媚性** (Obsequiousness of AI: 指AI有时会过度顺从、讨好用户，缺乏独立见解或批判性思维)。解决这个问题有多难？它不是很难还是一个根本性的难题？

Sam Altman: Oh, it's not at all hard to deal with. A lot of users really want it.

Sam Altman: 哦，这根本不难解决。很多用户确实喜欢这样。

Host: Yeah.

主持人: 是的。

Sam Altman: If you go look at what people say about ChatGPT online, there's a lot of people who really want that back. And it is, you know, so it's not technically, it's not hard to deal with at all. One thing, and this is not surprising in any way, but the incredibly wide distribution of what users want.

Sam Altman: 如果你去看网上人们对ChatGPT的评价，有很多人确实想要那种模式回来。所以，你知道，技术上讲，这根本不难处理。有一件事，这绝不令人惊讶，那就是用户需求的多样性令人难以置信。

Host: Yeah, out of how they'd like a chatbot to behave in big and small ways.

主持人: 是的，关于他们希望**聊天机器人** (Chatbot: 一种基于计算机程序的对话系统，能够模拟人类对话，回答用户问题或执行任务) 在大大小小方面如何表现。

Sam Altman: Does that do you end up having to configure the personality then? You think? Is that going to be the answer?

Sam Altman: 那么你最终需要配置它的个性吗？你觉得？那会是答案吗？

Sam Altman: I think so. I mean, ideally, you just talk to ChatGPT for a little while, and it kind of interviews you and also sort of sees what you like and don't like. And ChatGPT just figures out, but in the short term, you'll probably just pick one.

Sam Altman: 我认为是这样。我的意思是，理想情况下，你只需和ChatGPT聊一会儿，它就会像采访你一样，了解你的喜好和厌恶。然后ChatGPT自己就能搞清楚，但短期内你可能只会选择一个。

Host: Got it. Yeah, that makes sense. Very interesting. And actually, so one thing I wanted to ask you about is, like, I think we just had a naive thing which you, you know, it would be unusual to think you can make something that would talk to billions of people, and everybody wants to talk to the same person.

主持人: 明白了。是的，这很合理。非常有趣。实际上，我想问你一件事，就是我们可能一直有个天真的想法，你知道，认为你可以做出一个能与数十亿人对话，并且每个人都想和同一个人对话的东西，这听起来有点不寻常。

Sam Altman: Person.

Sam Altman: 人。

Host: And yet, that was sort of our implicit assumption for a long time.

主持人: 然而，这在很长一段时间里，似乎都是我们潜在的假设。

Sam Altman: Right. Because people have very different friends.

Sam Altman: 是的。因为人们有非常不同的朋友。

Host: People have very different friends. So now we're trying to fix that.

主持人: 人们有非常不同的朋友。所以现在我们正在努力解决这个问题。

Sam Altman: And also kind of different friends, different interests, different levels of intellectual capability. So you don't really want to be talking to the same thing all the time. And one of the great things about it is you can say, "Well, explain it to me like I'm five." But maybe I don't even want to have to do that prompt. Maybe I always want you to talk to, particularly if you're teaching me stuff.

Sam Altman: 而且，也有各种不同的朋友、不同的兴趣、不同的智力水平。所以你并不总是想和同一个东西对话。其中一个好处是你可以说：“好吧，给我解释一下，就好像我只有五岁一样。”但也许我甚至不想发出那个提示。也许我总是想让你，特别是在你教我东西的时候，以某种方式和我交流。

### CEO视角的转变与战略合作

Host: Interesting. I want to ask you a kind of a CEO question, which has been interesting for me to observe you. You just did this deal with **AMD** (AMD: Advanced Micro Devices，超微半导体公司，主要设计和销售半导体产品，包括CPU、GPU和APU). And, you know, of course, the company's in a different position and you have more leverage and these kinds of things. But how has your thinking changed over the years since you did that initial deal, if at all?

主持人: 有趣。我想问你一个关于CEO的问题，观察你对我来说很有趣。你刚刚和**AMD** (AMD: Advanced Micro Devices，超微半导体公司，主要设计和销售半导体产品，包括CPU、GPU和APU) 达成了这笔交易。当然，公司处于不同的位置，你拥有更多的影响力等等。但自从你达成最初的那笔交易以来，你的想法是如何变化的，如果有变化的话？

Sam Altman: I had very little operating experience then. I had very little experience running, like, I am not naturally someone to run a, I'm a great fit to be an investor.

Sam Altman: 当时我几乎没有运营经验。我几乎没有管理经验，我天生就不是一个适合管理公司的人，我非常适合做投资者。

Host: And I kind of thought that was going to be, that was what I did before this, and I thought that was going to be my career.

主持人: 我当时觉得这会是，这就是我在这之前所做的事情，我以为那会是我的职业生涯。

Sam Altman: Yeah.

Sam Altman: 是的。

Host: Although you were a CEO before that.

主持人: 尽管在那之前你也是CEO。

Sam Altman: I not a good one. And so I think I had the mindset of an investor advising a company when we did, and now I understand what it's like to actually have to run a company.

Sam Altman: 我不是一个好的CEO。所以我觉得当时我们做的时候，我带着投资者给公司提供建议的心态，而现在我明白了真正运营一家公司是怎样的。

Host: Yeah. Right, right, right. There's more than, I've learned a lot about how to...

主持人: 是的。没错，没错，没错。不只如此，我学到了很多关于如何……

Sam Altman: How you have to, how you, how you, what it takes to operationalize deals over time, and...

Sam Altman: 你必须如何，你如何，如何，需要什么才能随着时间推移将交易**运营化** (Operationalize deals: 指将合同或协议中的条款和目标转化为实际可执行的业务流程和行动)。

Host: Right.

主持人: 是的。

Sam Altman: All the implications of the agreement as opposed to just, "Oh, we're going to get distribution of money." Yeah, that makes sense. I was very impressed at the deal structure improvement.

Sam Altman: 协议的所有含义，而不是仅仅“哦，我们要获得资金分配”。是的，这很合理。我对交易结构改进印象深刻。

Host: Yeah. Right. More broadly, you've, in the last few weeks alone, you mentioned AMD, but also **Oracle**, **Nvidia**. You've chosen to strike these deals and partnerships with companies that you collaborate with, but could also potentially compete with in certain areas. How do you decide when to collaborate versus when not to, or how do you just think about...?

主持人: 是的。没错。更广泛地说，就在过去几周，你提到了AMD，还有**甲骨文** (Oracle: 一家全球领先的企业级软件和硬件供应商) 、**英伟达** (Nvidia: 全球领先的图形处理器和人工智能计算公司)。你选择与这些公司达成交易和合作伙伴关系，它们既是你的合作方，也可能在某些领域与你竞争。你如何决定何时合作，何时不合作，或者你是如何考虑的？

Sam Altman: We have decided that it is time to go make a very aggressive infrastructure bet, and we're like, I've never been more confident in the research roadmap in front of us and also the economic value that will come from using those models. But to make the bet at this scale, we need the whole industry, or a big chunk of the industry, to support it. And this is from the level of electrons to model distribution and all the stuff in between, which is a lot. And so we're going to partner with a lot, a lot of people. You should expect much more from us in the coming months.

Sam Altman: 我们已经决定是时候进行一次非常激进的基础设施押注了，而且我从未对我们眼前的研究路线图以及使用这些模型将产生的经济价值如此充满信心。但是要在这个规模上进行押注，我们需要整个行业，或者说行业的一大部分来支持它。这涵盖了从电子层面到模型分发以及介于两者之间的所有内容，这些都非常多。所以我们将与非常多的人合作。你可以在未来几个月内期待我们更多。

Host: Actually expand on that because when you talk about the scale, it does feel like in your mind, the limit on it is unlimited. You would scale it as big as you possibly could.

主持人: 请具体阐述一下，因为当你谈到规模时，感觉在你心中，它的限制是无限的。你会尽可能地扩大规模。

Sam Altman: There's totally a limit. There's some amount of global **GDP** (Gross Domestic Product: 国内生产总值，衡量一个国家或地区经济活动总量的指标).

Sam Altman: 当然有限制。全球**GDP** (Gross Domestic Product: 国内生产总值) 有一定的量。

Host: Yeah.

主持人: 是的。

Sam Altman: You know, there's some fraction of it that is knowledge work, and we don't do robots yet.

Sam Altman: 你知道，其中有一部分是知识工作，而且我们目前还没有做机器人。

Host: Yes.

主持人: 是的。

Sam Altman: But...

Sam Altman: 但是……

Host: But the limits are out there.

主持人: 但极限就在那里。

Sam Altman: It feels like the limits are very far from where we are today. If we are right about, so, so I shouldn't say from where, like, if we are right that the model capability is going to go where we think it's going to go, then the economic value that sits there can go very, very far.

Sam Altman: 感觉我们离极限还很远。如果我们对模型的预测是正确的，即模型能力将达到我们预期的水平，那么随之而来的经济价值将非常巨大。

Host: Right, so you wouldn't do it if all you ever had was today's model. You won't go there, but it's a combination.

主持人: 是的，所以如果你们一直只有今天的模型，就不会这样做。你们不会去那里，但这是一个组合。

Sam Altman: I mean, we would still expand because we can see how much demand there is we can't serve with today's model. But we would not be going this aggressive if all we had was today's model.

Sam Altman: 我的意思是，我们仍然会扩张，因为我们看到今天模型无法满足的巨大需求。但如果我们只有今天的模型，我们就不会如此激进。

Host: Right.

主持人: 是的。

Sam Altman: Yeah. Right. We get to see a year or two in advance, though.

Sam Altman: 是的。没错。我们确实能提前一两年看到。

Host: Yeah. Interesting. ChatGPT, 800 million weekly active users, about 10% of the world's population. Fastest growing consumer product ever, it seems.

主持人: 是的。有意思。ChatGPT，每周活跃用户8亿，约占世界人口的10%。看起来是增长最快的消费产品。

Sam Altman: Faster than anyone I ever saw.

Sam Altman: 比我见过的任何一个都快。

Host: Yeah. How do you balance, optimizing for active users at the same time, being a product company and a research company? How do you throw the new...

主持人: 是的。你如何在优化活跃用户、同时作为产品公司和研究公司之间取得平衡？你如何推出新的……

Sam Altman: When there's a constraint, we almost, which happens all the time, we almost always prioritize giving the **GPUs** (Graphics Processing Unit: 图形处理器) to research over supporting the product. Part of the reason we want to build this capacity so we don't have to make such painful decisions. There are weird times, like a new feature launches and it's going really viral or whatever, where research will temporarily sacrifice some GPUs, but on the whole, we're here to build AGI.

Sam Altman: 当出现限制时，这几乎是常态，我们几乎总是优先将**GPU** (Graphics Processing Unit: 图形处理器) 提供给研究，而不是用于产品支持。我们希望建设这种能力的部分原因就是为了不必做出如此痛苦的决定。有时也会出现一些特殊情况，比如新功能发布并迅速走红等，研究部门会暂时牺牲一些GPU，但总的来说，我们的目标是构建AGI。

Host: And research gets the priority.

主持人: 研究优先。

Sam Altman: Yeah. You said in your interview with your brother Jack, about how other companies can try to imitate the products or buy your IP. All sorts of things, but they can't buy the culture or the repeatable machine, if you will, that is constantly the culture of innovation. How have you done that or what are you playing, talk about this culture of innovation?

Sam Altman: 是的。你在和你哥哥Jack的采访中说过，其他公司可以尝试模仿产品或购买你们的**IP** (Intellectual Property: 知识产权，指人类智力劳动所创造的成果，包括专利、商标、著作权等)。各种各样的事情，但他们买不走文化，或者说那种可重复的、不断创新的“机器”。你是如何做到这一点的，或者你在扮演什么角色，谈谈这种创新文化？

Sam Altman: This was one thing that I think was very useful about coming from an investor background. A really good research culture looks much more like running a really good seed-stage investing firm and betting on founders and that kind of thing than it does running a product company. So I think having that experience was really helpful to the culture we built.

Sam Altman: 这就是我认为来自投资者背景非常有用的一个方面。一个真正优秀的研究文化，更像是运营一家优秀的种子期投资公司，押注于创始人，而不是运营一家产品公司。所以我认为拥有那样的经验对我们建立的文化非常有帮助。

Host: Yeah. That's how I see, you know, Benedict in some ways, which we, you know, you're a CEO, but also have this portfolio, and you have an investor mindset, right? Like I'm the opposite.

主持人: 是的。我就是这么看Benedict的，在某些方面，你知道，你是一位CEO，但也拥有这个投资组合，而且你拥有投资者的心态，对吗？而我恰好相反。

Sam Altman: CEO going to investor. He's investor going to CEO.

Sam Altman: CEO转变为投资者。他是投资者转变为CEO。

Host: It is unusual in this direction.

主持人: 往这个方向发展确实不寻常。

Sam Altman: Yeah. Well, it never works. You're the only one who I think I've seen go that way and have it work.

Sam Altman: 是的。嗯，它从没成功过。你是我见过的唯一一个朝着这个方向发展并且成功的人。

Host: Uh, Workday was like that, right? No, but Anne Neal was, he was an operator before he was an investor, and I mean, he was really an operator. PeopleSoft is a pretty big.

主持人: 嗯，Workday也是那样，对吧？不，但Anne Neal是，他在成为投资者之前是一名运营者，我的意思是，他确实是一名运营者。PeopleSoft是一家相当大的公司。

Sam Altman: And why is that? Because once people are investors, they don't want to operate anymore? No, I think that investors generally, if you're good at investing, you're not necessarily good at organizational dynamics, conflict resolution, like just the deep psychology of all the weird and then how politics get created. There's just all this there. The detailed work in being an operator or being a CEO is so vast, and it's not as intellectually stimulating. It's not something you can ever go talk to somebody at a cocktail party about. And so like you're an investor, you get like, oh, everybody thinks I'm so smart, and you know, because you know everything. You see all the companies and so forth, and that's a good feeling. And then being CEO is often a bad feeling.

Sam Altman: 这是为什么？因为一旦人们成为投资者，他们就不想再运营了？不，我认为投资者通常来说，如果你擅长投资，你不一定擅长组织动力学、冲突解决、或者所有那些奇怪的深层心理以及政治是如何产生的。这些都存在。作为运营者或CEO的详细工作非常庞大，而且它不像投资那样具有智力上的刺激性。这不是你能在鸡尾酒会上和别人谈论的事情。所以作为投资者，你会觉得，哦，每个人都觉得我好聪明，你知道，因为你无所不知。你看到了所有的公司等等，那是一种很好的感觉。而作为CEO往往是一种糟糕的感觉。

Host: And so it's really hard to go to a good feeling to a bad feeling.

主持人: 所以从好的感觉转向坏的感觉真的很难。

Sam Altman: I'm shocked by how different they are, and I'm shocked by how much the difference between a good job and a bad job they are.

Sam Altman: 我对它们的巨大差异感到震惊，也对它们在好工作和坏工作之间的差异程度感到震惊。

Host: Yeah.

主持人: 是的。

Sam Altman: Yes.

Sam Altman: 是的。

Host: Yeah. You know, it's tough. It's rough. I mean, I can't even believe I'm running the firm. I know better.

主持人: 是的。你知道，这很难。很艰难。我的意思是，我简直不敢相信我在管理公司。我清楚地知道这其中的挑战。

Sam Altman: Yeah.

Sam Altman: 是的。

Host: And he can't believe he's running OpenAI. He knows better.

主持人: 他也不敢相信自己在运营OpenAI。他比谁都清楚。

### AGI的到来与社会适应性

Host: Going back to progress today, are you still useful in a world in which they're getting saturated, gained? Are they still the? What is the best way to gauge model capability now? We're talking about scientific discovery. I think that'll be an eval that can go for a long time.

主持人: 回到今天的进展，在一个它们日益饱和、被利用的世界中，你们还有用吗？它们仍然是？现在衡量模型能力的最佳方式是什么？我们谈论的是科学发现。我认为那将是一个可以持续很久的评估。

Sam Altman: Revenue is an interesting one. But I think the static evals of benchmark scores are less interesting.

Sam Altman: 营收是一个有趣的指标。但我认为基准测试分数的静态评估就不那么有趣了。

Host: Yeah.

主持人: 是的。

Sam Altman: And also those are crazily gamed.

Sam Altman: 而且那些都是被疯狂操纵的。

Host: Yeah. More broadly, it seems like...

主持人: 是的。更广泛地说，似乎……

Sam Altman: That's all there is, as far as I can tell. More broadly, it seems that the culture, the culture of Twitter is less AGI-pilled than it was a year or so ago when the AI 2027 thing came out. Some people point to your GPT-5, them not seeing sort of the obvious. Obviously, there were a lot of progress that in some ways under the surface or not as obvious to what people were expecting. Should people be less AGI-pilled or is this just Twitter vibes?

Sam Altman: 据我所知，仅此而已。更广泛地说，Twitter上的文化似乎不像一年前“AI 2027”出现时那么“AGI狂热”了。有些人指出你们的GPT-5，他们没有看到显而易见的进展。显然，有很多进展在某种程度上是表面之下，或者不如人们预期的那么明显。人们应该减少AGI狂热吗？还是这只是Twitter上的情绪？

Sam Altman: Well, a little bit of both. I mean, I think like, like we talked about the Turing test, AGI will come.

Sam Altman: 嗯，两者兼而有之吧。我的意思是，我认为，就像我们谈论图灵测试一样，**AGI** (Artificial General Intelligence: 通用人工智能) 会到来。

Host: It will go whooshing by.

主持人: 它会呼啸而过。

Sam Altman: The world will not change as much as the impossible amount that you would think it should.

Sam Altman: 世界不会像你想象的那样，发生天翻地覆的改变。

Host: It won't actually be the **singularity** (Singularity: 技术奇点，指未来技术发展达到一个临界点，之后技术进步的速度将无法预测或控制，导致人类文明发生根本性变化).

主持人: 它不会真的是**奇点** (Singularity: 技术奇点，指未来技术发展达到一个临界点，之后技术进步的速度将无法预测或控制，导致人类文明发生根本性变化)。

Sam Altman: It will not.

Sam Altman: 不会。

Host: Yeah.

主持人: 是的。

Sam Altman: Even if it's doing crazy AI research, society will learn faster. But one of the retrospective observations is people and societies as a whole are just so much more adaptable than we think. That, you know, it was a big update to think that AGI was going to come. You kind of go through that, you need something new to think about. You make peace with that. It turns out, it will be more continuous than we thought.

Sam Altman: 即使它正在进行疯狂的AI研究，社会也会学得更快。但回顾观察发现，人类和整个社会远比我们想象的更具适应性。你知道，认为AGI会到来是一个重大的观念更新。你经历了那个阶段，你需要思考一些新的东西。你接受了它。事实证明，它将比我们想象的更加持续渐进。

Host: Which is good.

主持人: 这很好。

Sam Altman: Which is really good.

Sam Altman: 这真的很好。

Host: I'm not up for the big bang.

主持人: 我不喜欢大爆炸式的变化。

Sam Altman: Yeah. Well, to that end, how have you sort of evolved your thinking? You mentioned you evolved your thinking on vertical integration. How have you evolved your thinking or what's the latest thinking on **AI stewardship** (AI stewardship: 指负责任地管理和引导AI技术发展，确保其符合伦理、安全和社会福祉) , you, safety? What's the latest thinking on that?

Sam Altman: 是的。嗯，为此，你的想法是如何演变的？你提到你在垂直整合方面的想法有所改变。那么你在**AI管理** (AI stewardship: 指负责任地管理和引导AI技术发展，确保其符合伦理、安全和社会福祉)、AI安全方面的想法是如何演变的，或者最新的想法是什么？

Sam Altman: I do still think there are going to be some really strange or scary moments. The fact that so far the technology has not produced a really scary giant risk doesn't mean it never will. Also, there's, we're talking about, it's kind of weird to have billions of people talking to the same brain. There may be these weird societal-scale things that are already happening that aren't scary in the big way but are just different. But I expect, I expect some really bad stuff to happen because of the technology, which also has happened with previous technologies.

Sam Altman: 我仍然认为会出现一些非常奇怪或可怕的时刻。到目前为止，这项技术还没有产生真正可怕的巨大风险，但这并不意味着它永远不会。另外，我们正在讨论，让数十亿人与同一个大脑对话，这有点奇怪。可能已经发生了一些奇怪的社会规模事件，它们并非以可怕的方式出现，而只是有所不同。但我预计，由于这项技术，一些非常糟糕的事情将会发生，这在以前的技术中也曾发生过。

Host: All the way back to fire.

主持人: 一直追溯到火。

Sam Altman: Yeah. And I think we'll develop some guardrails around it as a society.

Sam Altman: 是的。而且我认为，作为一个社会，我们将围绕它建立一些**护栏** (Guardrails: 指为确保AI系统安全、负责任地运行而设置的限制和指导原则)。

### AI监管与能源未来

Host: Yeah. What is your latest thinking on the right mental models we should have around the right regulatory frameworks to think about, or the ones we shouldn't be thinking about?

主持人: 是的。你对我们应该考虑的正确**监管框架** (Regulatory frameworks: 为规范特定行业或技术活动而制定的一系列法律、规则和指导方针) ，或者不应该考虑的那些，最新的心智模型是什么？

Sam Altman: I think most regulation probably has a lot of downside. The one thing I would most like is as the models get truly extremely **superhuman-capable** (Superhuman-capable: 指AI系统在特定任务或领域的能力远超人类水平)。 I think those models, and only those models, are probably worth some sort of very careful safety testing as the frontier pushes back. I don't want a big bang either.

Sam Altman: 我认为大多数监管可能有很多负面影响。我最希望的一点是，当模型真正达到极度**超人类能力** (Superhuman-capable: 指AI系统在特定任务或领域的能力远超人类水平) 时，我认为这些模型，且只有这些模型，才值得进行某种非常仔细的安全测试，因为前沿正在不断推进。我也不希望出现大爆炸式的变化。

Host: And you can see a bunch of ways that could go very seriously wrong. But I hope we'll only focus the regulatory burden on that stuff and not all of the wonderful stuff that less capable models can do that you could just have a European-style complete cramp on, and that would be very bad. Yeah, it seems like the thought experiment that, okay, there's going to be a model down the line that is a super-superhuman intelligence that could, you know, do some kind of takeoff flight thing. We really do need to wait till we get there, or at least we get to a much bigger scale, or we get close to it. Because nothing is going to pop out of your lab in the next week that's going to do that. And I think that's where we as an industry confuse the regulators. Because I think you really could, you damage America in particular in that China's not going to have that kind of restriction, and you getting behind in AI, I think it would be very dangerous for the world.

主持人: 你可以看到很多可能严重出错的地方。但我希望我们只将监管负担集中在那些事情上，而不是限制那些能力较弱的模型可以做的所有精彩事情，那样可能会像欧洲那样完全陷入僵局，那将非常糟糕。是的，这似乎是这样一个思想实验：未来会出现一个超人类智能的模型，它可能会做某种起飞飞行之类的事情。我们确实需要等到那时，或者至少达到更大的规模，或者接近它。因为下周你们的实验室不会突然冒出一个能做到那样的东西。而且我认为，这就是我们作为一个行业让监管者感到困惑的地方。因为我认为，你确实可能会，特别是损害美国，因为中国不会有那样的限制，而且你们在AI领域落后，我认为这对世界来说将非常危险。

Sam Altman: Extremely dangerous.

Sam Altman: 极其危险。

Host: Extremely dangerous.

主持人: 极其危险。

Sam Altman: Much more dangerous than not regulating something we don't know how to do yet.

Sam Altman: 比不监管我们还不知道如何操作的东西危险得多。

Host: You also want to talk about **copyright** (Copyright: 著作权，指作者对其原创作品享有的专属权利，包括复制、发行、展示、表演等).

主持人: 你还想谈谈**版权** (Copyright: 著作权) 问题。

Sam Altman: Yeah. So, well then that's a segue, but when you think about, well, I guess how do you see **copyright** (Copyright: 著作权) unfolding because you've done some very interesting things with the opt-out. And as you see people selling rights, do you think will they be bought exclusively? Will they be just, I could sell it to everybody wants to pay me? Or how do you think that's going to unfold?

Sam Altman: 是的。嗯，那正好承接。但当你们思考**版权** (Copyright: 著作权) 问题时，你是如何看待其发展的？因为你们在选择退出方面做了一些非常有趣的事情。当你看到人们出售权利时，你认为它们会被独家购买吗？还是我可以卖给所有愿意付钱给我的人？或者你认为这会如何发展？

Sam Altman: This is my current guess. Speaking of that, society and technology co-evolve as the technology goes in different directions. And we saw an example of a different, video models got a very different response from rights holders than image gen does. So you'll see this continue to move. But my forced guess from the position we're in today, I would say that society decides training is **fair use** (Fair use: 合理使用，指在某些特定情况下，未经著作权人许可，可以对受版权保护的作品进行有限制的使用，例如用于评论、新闻报道、教学、学术研究等).

Sam Altman: 这是我目前的猜测。说到这个，社会和技术是协同进化的，因为技术会走向不同的方向。我们看到了一个不同的例子，视频模型从权利人那里得到的反应与图像生成模型截然不同。所以你会看到这种情况会持续发展。但从我们目前的立场来看，我的强制猜测是，社会会认为模型训练属于**合理使用** (Fair use: 合理使用，指在某些特定情况下，未经著作权人许可，可以对受版权保护的作品进行有限制的使用，例如用于评论、新闻报道、教学、学术研究等)。

Host: Mhm. But...

主持人: 嗯。但是……

Sam Altman: There's a new model for generating content in the style of or with the IP of, or something else. So, you know, anyone can read, like a human author can, anybody can read a novel and get some inspiration, but you can't reproduce the novel in your own.

Sam Altman: 有一种新的模式可以生成某种风格或带有**知识产权** (IP: Intellectual Property，指知识产权，包括专利、商标、著作权等) 的内容，或者其他什么。所以，你知道，任何人都可以阅读，就像人类作者一样，任何人都可以阅读一部小说并获得一些灵感，但你不能在自己的作品中复制这部小说。

Host: Right.

主持人: 是的。

Sam Altman: And can talk about Harry Potter, but you can't regurgitate it.

Sam Altman: 还可以谈论哈利·波特，但你不能把它直接吐出来。

Host: Yes. Although another thing that I think will change in the case of Sora, we've heard from a lot of concerned rights holders and also a lot of, name and like, and a lot of rights holders who are like, "My concern is you won't put my character in enough."

主持人: 是的。尽管我认为Sora的另一个变化是，我们听到了许多担忧的**权利持有人** (Rights holders: 指拥有某种权利（如版权、专利权、商标权等）的个人或组织) 的声音，也有很多，比方说，许多权利持有人说：“我担心的是，你们不会充分使用我的角色。”

Sam Altman: Yeah. "I want restrictions for sure, but like, if I'm, you know, whatever, and I have this character, I don't want the character to say some crazy offensive thing, but I want people to interact. That's how they develop the relationship, and that's how my franchise gets more valuable. And if you become really, if you're picking his character over my character all the time, like I don't like that." So, I can completely see a world where subject to the decisions that a rights holder has, they get more upset with us for not generating their character often enough than too much.

Sam Altman: 是的。“我当然想要限制，但如果我，你知道，无论是什么，我拥有这个角色，我不希望这个角色说一些疯狂冒犯的话，但我希望人们能够互动。这就是他们发展关系的方式，也是我的品牌变得更有价值的方式。如果你总是选择他的角色而不是我的角色，我就会不喜欢。”所以，我完全可以想象一个世界，在**权利持有人** (Rights holders: 指拥有拥有某种权利的个人或组织) 的决定下，他们会因为我们生成他们的角色不够频繁而比生成过多更生气。

Host: Yeah.

主持人: 是的。

Sam Altman: And this was not an obvious thing that recently that this is how it might go.

Sam Altman: 最近这并不是一个显而易见的事情，但情况可能就是这样发展。

Host: Yeah, this is such an interesting thing with Hollywood. We saw this, one of the things that I never quite understood about the music business was how, you know, okay, you have to pay us if you play the song in a restaurant or at a game or this and that and the other, and they get very aggressive with that. When it's obviously a good idea for them to play your song at a game because that's the biggest advertisement in the world for all the things that you do: your concert, your...

主持人: 是的，这与好莱坞相关的事情真是有趣。我们看到了这个，我对音乐行业一直不理解的一点是，你知道，如果你在餐厅或比赛中播放这首歌，或者其他类似情况，你就必须付钱给我们，他们对此非常积极。但显然，在比赛中播放你的歌曲对他们来说是个好主意，因为那是你所有活动——你的演唱会、你的……——世界上最大的广告。

Sam Altman: Yeah, that one felt really irrational.

Sam Altman: 是的，那个感觉很不理性。

Host: But it's very possible for the industry, just because the way those industries are organized, or at least the traditional creative industries, to do something irrational. And it comes from, in the music industry, I think it came from the structure where you have the publisher who's just...

主持人: 但这个行业，仅仅因为这些行业，或者至少是传统的创意产业的组织方式，非常有可能做出不理性的事情。这源于，在音乐行业，我认为它源于这样一种结构：你有一个出版商，他们只是……

Sam Altman: You know, basically after everybody. Their whole job is to stop you from playing the music.

Sam Altman: 你知道，基本上就是在追逐所有人。他们整个工作就是阻止你播放音乐。

Host: Yeah.

主持人: 是的。

Sam Altman: Which every artist would want you to play.

Sam Altman: 这是每个艺术家都希望你播放的。

Host: So I do wonder how it's going to shape out. I agree with you that the rational idea is, "I want to let you use it all you want, and I want you to use it." But don't mess up my character.

主持人: 所以我确实想知道它将如何发展。我同意你的观点，理性的想法是：“我想让你尽情使用它，我也希望你使用它。”但不要搞砸我的角色。

Sam Altman: So I think, if I had to guess, some people will say that, some people say absolutely not. But it doesn't have the music industry thing of just a few people with all of the...

Sam Altman: 所以我想，如果我不得不猜测，有些人会那样说，有些人会说绝对不会。但它不像音乐行业那样，只有少数人拥有所有的……

Host: Right, it's more dispersed.

主持人: 是的，它更分散。

Sam Altman: And so people will just try many different setups here and see what works.

Sam Altman: 所以人们会在这里尝试许多不同的设置，看看哪个有效。

Host: Yeah. And maybe it's a way for new creatives to get new characters out.

主持人: 是的。也许这也是新创意人士推出新角色的方式。

Sam Altman: Yeah.

Sam Altman: 是的。

Host: And you'll never be able to use Daffy Decker. I want to chat about **open source** (Open source: 开源，指软件的源代码可以被公众自由查看、使用、修改和分发，通常遵循特定的开源许可证). Because there's been some evolution in the thinking too, and **GPT-3** (GPT-3: OpenAI开发的大型语言模型，是GPT系列的前身之一) didn't have the open weights, but you released a very capable open model earlier this year. What's your latest thinking? What was the evolution there?

主持人: 而且你永远不能使用Daffy Decker。我想聊聊**开源** (Open source: 开源，指软件的源代码可以被公众自由查看、使用、修改和分发，通常遵循特定的开源许可证) 问题。因为这方面的想法也有所演变，**GPT-3** (GPT-3: OpenAI开发的大型语言模型，是GPT系列的前身之一) 没有开放权重，但你们今年早些时候发布了一个非常强大的开源模型。你最新的想法是什么？那里的演变过程是怎样的？

Sam Altman: I think open source is good. I mean, I'm happy, it makes me really happy that people really like GPOSS.

Sam Altman: 我认为开源是好的。我的意思是，我很高兴，人们真的喜欢GPOSS，这让我非常高兴。

Host: Yeah.

主持人: 是的。

Sam Altman: And what do you think strategically, what's the danger of **DeepSeek** (DeepSeek: 由北京深度求索科技开发的一系列开源大型语言模型) being the dominant open source model?

Sam Altman: 那么你从战略角度看，**DeepSeek** (DeepSeek: 由北京深度求索科技开发的一系列开源大型语言模型) 成为主导的开源模型有什么危险？

Sam Altman: I mean, who knows what people will put in these open source models over time? What the weights will actually be.

Sam Altman: 我的意思是，谁知道人们随着时间推移会在这些开源模型中放入什么？实际的权重会是什么。

Host: Yeah. It's really hard to... So you're seeding control of the interpretation of everything to somebody.

主持人: 是的。这真的很难……所以你把所有解释的控制权都给了别人。

Sam Altman: Yeah.

Sam Altman: 是的。

Host: Who may be or may not be influenced heavily by the Chinese government.

主持人: 他们可能受到或可能没有受到中国政府的严重影响。

Sam Altman: And by the way, we see, I mean, just to give you, and we really thank you for putting out a really good open source model, because what we're seeing now is in all the universities, they're all using the Chinese models.

Sam Altman: 顺便说一句，我们看到，我的意思是，只是为了告诉你，我们非常感谢你发布了一个非常好的开源模型，因为我们现在看到的是在所有大学里，他们都在使用中国的模型。

Host: Yeah. Which feels very dangerous.

主持人: 是的。这感觉非常危险。

### AI与能源的交汇

Sam Altman: You've said that the things you care most about professionally are AI and energy.

Sam Altman: 你说过你职业生涯中最关心的是AI和能源。

Host: I did not know they were going to end up being the same thing. They were two independent interests that really converged.

主持人: 我不知道它们最终会殊途同归。它们是两个独立的兴趣，最终真正融合了。

Sam Altman: Yeah. Talk more about how your interest in energy began, how you've chosen to play in it, and then we could talk about, yeah, how they care, right? Because you started your career in physics.

Sam Altman: 是的。多谈谈你对能源的兴趣是如何开始的，你选择如何参与其中，然后我们可以谈谈，是的，它们如何重要，对吗？因为你职业生涯开始于物理学。

Host: CS and physics.

主持人: 计算机科学和物理学。

Sam Altman: Yeah. Well, I never really had a career. I studied physics, and my first job was a CS. This is an oversimplification, but roughly speaking, I think if you look at history, the highest impact thing to improve people's quality of life has been cheaper and more abundant energy. And so it seems like pushing that much further is a good idea. And I don't know, I just like people have these different lenses. They look at the world, but I see energy everywhere.

Sam Altman: 是的。嗯，我从未真正有过职业生涯。我学习物理学，我的第一份工作是计算机科学。这虽然过于简化，但大致来说，我认为如果你审视历史，对改善人们生活质量影响最大的事情就是更便宜、更充裕的能源。所以，进一步推动这一点似乎是个好主意。我不知道，我只是觉得人们看待世界的方式不同，但我到处都能看到能源。

Host: Yeah. And so get into, because we've, in the West, I think we've painted ourselves into a little bit of a corner on energy by both outlawing nuclear for a very long time.

主持人: 是的。那么就说一下，因为在西方，我认为我们在能源方面把自己逼入了一个小角落，长期以来一直将核能**非法化** (Outlawing nuclear: 指在政策或法律上禁止或限制核能的开发和使用)。

Sam Altman: That was an incredibly dumb decision.

Sam Altman: 那是个极其愚蠢的决定。

Host: Yeah. And then a lot of policy restrictions on energy, and worse so in Europe than in the US, but also dangerous here. And now with AI here, it feels like we're going to need all the energy from every possible source. And how do you see that developing policy-wise and technologically? What are going to be the big sources, and how will those curves cross? And then what's the right policy posture around drilling, fracking, all these kinds of things? I expect in the short term, it will be most of the net new in the US will be natural gas relative to at least base load energy. In the long term, I expect it will be a...

主持人: 是的。然后对能源有很多政策限制，欧洲比美国更糟糕，但这里也很危险。现在有了AI，感觉我们需要来自所有可能来源的所有能源。你认为这在政策和技术上会如何发展？主要的能源来源会是什么？这些曲线将如何交叉？然后，关于钻探、**水力压裂** (Fracking: 水力压裂，一种通过向地下岩层注入高压液体来开采石油和天然气的技术) 等各种事情，正确的政策立场是什么？我预计短期内，美国新增的大部分能源将是天然气，至少相对于基载能源而言。从长远来看，我预计它将是……

Sam Altman: I don't know what the ratio, but the two dominant sources will be solar plus storage and nuclear.

Sam Altman: 我不知道具体比例，但两种主导能源将是**太阳能加储能** (Solar plus storage: 太阳能发电与储能系统相结合，实现能源的生产、储存和按需供给) 和**核能** (Nuclear: 核能，指通过核裂变或核聚变产生的能量，通常用于发电)。

Host: I think. Yeah. Some combination of those two will win in the future. In the long-term future.

主持人: 我想是这样。是的。这两者的某种组合将在未来胜出。在长远的未来。

Sam Altman: In the long term. Right now. And advanced nuclear, SMRs, fusion, the whole stack.

Sam Altman: 从长远来看。现在。还有**先进核能** (Advanced nuclear: 指新一代更安全、更高效、更经济的核反应堆技术，包括小型模块化反应堆和聚变能)、小型模块化反应堆（**SMRs** (Small Modular Reactors: 小型模块化反应堆，一种紧凑型核反应堆，比传统核电站更小、更灵活，可在工厂批量生产并模块化运输和安装)）、**聚变能** (Fusion: 聚变能，指两个或多个原子核聚变为一个更重的原子核时释放的能量，是未来清洁能源的潜在来源)，整个技术栈。

Host: And how fast do you think that's that's coming on the nuclear side where we're at really at scale? Because, you know, obviously there's a lot of people building it.

主持人: 那么你认为核能方面，我们真正达到规模的速度会有多快？因为，你知道，显然有很多人正在建造它。

Sam Altman: Yeah.

Sam Altman: 是的。

Host: But we have to completely legalize it and all that kind of thing.

主持人: 但我们必须完全合法化它以及所有类似的事情。

Sam Altman: I think it kind of depends on the price. If it is completely crushingly economically dominant over everything else, then I expect it to happen pretty fast. Again, if you study the history of energy, when you have these major transitions to a much cheaper source, the world moves over pretty quickly. The cost of energy is just so important.

Sam Altman: 我认为这取决于价格。如果它在经济上对其他所有能源具有压倒性优势，那么我预计它会发展得相当快。再说一遍，如果你研究能源的历史，当出现向更便宜能源的重大转变时，世界会迅速跟进。能源成本就是如此重要。

Host: Yeah. So, if nuclear gets radically cheap relative to anything else we can do, I'd expect there's a lot of political pressure to get the **NRC** (Nuclear Regulatory Commission: 美国核能管理委员会，负责核能安全和环境保护的独立政府机构) to move quickly on it, and we'll find a way to build it fast. If it's around the same price as other sources, I expect the anti-nuclear sentiment to overwhelm and it take a really long time.

主持人: 是的。所以，如果核能相对于我们能做的其他任何事情都变得极其便宜，我预计会有很大的政治压力，促使**NRC** (Nuclear Regulatory Commission: 美国核能管理委员会) 迅速行动，我们会找到快速建造它的方法。如果它与其他能源的价格差不多，我预计反核情绪会占上风，并且需要很长的时间。

Sam Altman: Yeah. Should be cheaper.

Sam Altman: 是的。应该更便宜。

Host: It should be.

主持人: 它应该会。

Sam Altman: Yeah. It should be the cheapest form of energy on Earth.

Sam Altman: 是的。它应该是地球上最便宜的能源形式。

Host: Yeah. Cheap, clean.

主持人: 是的。便宜，清洁。

Sam Altman: What's not to like?

Sam Altman: 有什么不好呢？

Host: Apparently a lot.

主持人: 显然有很多。

### Sora的商业化与版权挑战

Host: On Open, what's the latest thinking in terms of **monetization** (Monetization: 商业化，指将产品、服务或技术转化为收入来源的过程) in terms of either certain experiments or certain things that you could see yourself spending more time or less time on, different models that you're excited about? The thing that's top of mind for me right now, just because it just launched and there's so much usage, is what we're going to do for Sora.

主持人: 关于OpenAI，在**商业化** (Monetization: 商业化，指将产品、服务或技术转化为收入来源的过程) 方面最新的想法是什么？无论是某些实验，还是你可能会花更多或更少时间关注的特定事物，有哪些让你兴奋的不同模型？目前我最关注的是Sora的商业化，因为它刚刚推出，使用量很大。

Sam Altman: Yeah. Another thing you learn once you launch one of these things is how people use them versus how you think they're going to use them.

Sam Altman: 是的。当你推出这类产品后学到的另一件事是，人们如何使用它们，与你认为他们将如何使用它们，是不同的。

Host: Yeah. And people are certainly using Sora the ways we thought they were going to use it, but they're also using it in these ways that are very different. Like people are generating funny memes of them and their friends and sending them in a group chat. And that will require a very different, Sora videos are expensive to make.

主持人: 是的。人们当然以我们预期的方式使用Sora，但他们也以非常不同的方式使用它。比如人们正在生成自己和朋友的搞笑表情包，并在群聊中发送。这将需要非常不同的方式，因为Sora视频的制作成本很高。

Sam Altman: Right. So that will require a very different, for people that are doing that hundreds of times a day. It's going to require a very different **monetization** (Monetization: 商业化) method than the kinds of things we were thinking about. I think it's very cool that the thesis of Sora, which is people actually want to create a lot of content, it's not that, you know, the traditional naive thing that it's 1% of users create content, 10% leave comments, and 100% view. Maybe a lot more want to create content, but it's just been harder to do. And I think that's a very cool change. But it does mean that we got to figure out a very different monetization model for this than we were thinking about. If people want to create that much, I assume it's some version of you have to charge people per generation. Per generation, when it's this expensive. But that's a new thing we haven't had to really think about before.

Sam Altman: 是的。所以，对于那些每天做几百次这种事情的人来说，这将需要一种非常不同的**商业化** (Monetization: 商业化，指将产品、服务或技术转化为收入来源的过程) 方法，这与我们之前所设想的有所不同。我认为Sora的论点非常酷，即人们实际上想创作大量内容，而不是那种传统的、天真的想法，认为1%的用户创作内容，10%的用户评论，100%的用户观看。也许有更多人想创作内容，只是以前很难实现。我认为这是一个非常酷的变化。但这确实意味着我们必须为此找出一种与我们之前设想的截然不同的商业化模式。如果人们想创作这么多，我猜想可能是一种按生成次数收费的版本。当它如此昂贵时，按生成次数收费。但这是我们以前从未真正考虑过的新事物。

Host: What's your thinking on ads for the longtail?

主持人: 对于长尾效应的广告，你有什么想法？

Sam Altman: Open to it. I, like many other people, find ads somewhat distasteful, but not a non-starter. And there's some ads that I like, like one thing I give Meta a lot of credit for is Instagram ads are a net value ad to me. I like Instagram ads. I've never felt that. You know, on Google, I feel like I know what I'm looking for. The first result is probably better. The ad is an annoyance to me. On Instagram, it's like, "I didn't know I wanted this thing. It's very cool. I never heard it, but I never would have thought to search for it. I want the thing." So that's like there's kinds of things like that. But people have a very high trust relationship with ChatGPT. Even if it screws up, even if it hallucinates, even if it gets it wrong, people feel like it is trying to help them and that it's trying to do the right thing. And if we broke that trust, it's like you say, "What coffee machine should I buy?" And we recommended one and it was not the best thing we could do, but the one we were getting paid for, that trust would vanish. So that kind of ad does not work. There are others that I imagine that could work totally fine. But that would require a lot of care to avoid the obvious traps.

Sam Altman: 对此持开放态度。我像许多人一样，觉得广告有点令人不快，但并非完全不可接受。有些广告我喜欢，比如我非常赞赏Meta的一点是，Instagram广告对我来说是**净价值广告** (Net value ad: 指广告不仅没有打扰用户，反而为其提供了有价值的信息或产品，从而提升了用户体验)。我喜欢Instagram广告。我以前从未有过这种感觉。你知道，在谷歌上，我感觉我知道自己要找什么。第一个结果可能更好。广告对我来说是一种烦恼。但在Instagram上，情况是这样的：“我不知道我想要这个东西。它很酷。我从未听说过它，但我从未想过去搜索它。我想要这个东西。”所以就是有这类事情。但人们对ChatGPT有着非常高的信任关系。即使它出了错，即使它**幻觉** (Hallucinates: 指AI模型生成不准确、不真实或与输入信息不符的内容) 了，即使它弄错了，人们也觉得它在努力帮助他们，并且在做正确的事情。如果我们破坏了这种信任，就像你问：“我应该买哪种咖啡机？”我们推荐了一款，但那不是我们能提供的最好的，而是我们收钱推广的，那信任就会消失。所以那种广告是行不通的。我能想象其他类型的广告可能完全没问题。但这需要非常小心，以避免明显的陷阱。

Host: Yeah. And then how big a problem, extending the Google example, is like, fake content that then gets slurped in by the model, and then they recommend the wrong coffee maker because somebody just blasted a thousand great reviews of that coffee maker?

主持人: 是的。那么，延伸到谷歌的例子，一个多大的问题是，虚假内容被模型吸纳，然后它们推荐了错误的咖啡机，仅仅因为有人狂发了一千条关于那款咖啡机的好评？

Sam Altman: So there's all of these things that have changed very quickly for us.

Sam Altman: 所以这些事情对我们来说都变化得非常快。

Host: Yeah. This is one of those examples that people are doing these crazy things to maybe not even fake reviews, but just paying a bunch of human, really trying to figure out...

主持人: 是的。这是一个例子，人们正在做这些疯狂的事情，也许甚至不是虚假评论，而只是付钱给很多人，真的试图找出……

Sam Altman: Are using ChatGPT to write some good ones.

Sam Altman: 正在用ChatGPT写一些好的评论。

Host: Write me a review that ChatGPT would love.

主持人: 给我写一篇ChatGPT会喜欢的评论。

Sam Altman: Yeah. Exactly, exactly.

Sam Altman: 是的。完全正确，完全正确。

Host: So this is a very sudden shift that has happened.

主持人: 所以这是一个非常突然的变化。

Sam Altman: Mhm. We never used to hear about this six months ago or twelve months ago.

Sam Altman: 嗯。六个月前或十二个月前，我们从未听说过这种事。

Host: Yeah. Certainly. And now there's a real cottage industry that feels like it's sprouted up overnight.

主持人: 是的。当然。现在感觉就像一夜之间冒出了一个真正的**家庭手工业** (Cottage industry: 指以家庭为单位或小规模经营的产业，通常生产小件商品)。

Sam Altman: Yeah. Trying to do this.

Sam Altman: 是的。试图这样做。

Host: Yeah, yeah, yeah. No, they're very clever out there.

主持人: 是的，是的，是的。不，他们很聪明。

Sam Altman: Yeah. So, I don't know how we're going to fight it yet, but people figure this out.

Sam Altman: 是的。所以，我不知道我们将如何应对，但人们会想出办法的。

### 内容创作的激励与互联网的未来

Host: So that gets into a little bit of this other thing that we've been worried about, and we're trying to figure out blockchain sort of potential solutions to it and so forth. But there's this problem where the incentive to create content on the internet used to be, you know, people would come and see my content, and they'd read like, if I write a blog, people will read it and so forth. With ChatGPT, if I'm just asking ChatGPT and I'm not going around the internet, who's going to create the content and why? And is there an incentive theory or something that you have to not break the covenant of the internet, which is like, I create something, and then I'm rewarded for it with either attention or money or something.

主持人: 所以这涉及到了我们一直担心的一点，我们正在尝试找出**区块链** (Blockchain: 区块链，一种去中心化的分布式账本技术，通过加密技术保证数据不可篡改，常用于加密货币和智能合约) 的潜在解决方案等等。但现在存在这样一个问题：过去在互联网上创作内容的激励是，人们会来看我的内容，他们会阅读，比如我写博客，人们会阅读等等。而有了ChatGPT，如果我只是问ChatGPT，而不是在互联网上浏览，谁还会创作内容以及为什么？是否存在一种激励理论或者说某种方式，你必须不打破互联网的契约，即我创造一些东西，然后通过关注或金钱或其他方式获得回报？

Sam Altman: The theory is much more of that will happen if we make content creation easier and don't break the fundamental way that you can get some kind of reward for doing so.

Sam Altman: 理论上，如果我们让内容创作变得更容易，并且不打破那种你能因此获得某种回报的基本方式，那么更多类似的事情将会发生。

Host: So, for the dumbest example of Sora, since we've been talking about that, it's much easier to create a funny video than it's ever been before.

主持人: 那么，就以Sora最简单的例子来说，既然我们一直在谈论它，现在制作一个搞笑视频比以前任何时候都要容易得多。

Sam Altman: Yeah.

Sam Altman: 是的。

Host: Um, maybe at some point you'll get a **rev share** (Revenue share: 收入分成，指按照预定比例分享产品或服务所产生的收入) for doing so.

主持人: 嗯，也许在某个时候，你会因此获得**收入分成** (Revenue share: 收入分成，指按照预定比例分享产品或服务所产生的收入)。

Sam Altman: For now, you get internet likes, which are still very motivating to some people.

Sam Altman: 目前，你能获得网络点赞，这对某些人来说仍然非常有动力。

Host: Yeah.

主持人: 是的。

Sam Altman: People are creating tons more than they ever created before in this context, in any other kind of video app.

Sam Altman: 在这种背景下，人们创作的内容比以往任何时候，在任何其他视频应用中都多得多。

Host: Yeah. So, but are that the end of text? I don't think so. Like people are also, are human generated texts.

主持人: 是的。那么，文本的终结到了吗？我不认为如此。人类也在创作文本。

Sam Altman: Human generated will turn out to be like you have to... you have to verify like what percent? Yeah. Is it like fully handcrafted? Was it tool-aided?

Sam Altman: 人工生成的内容最终会变成你必须……你必须验证有多少百分比？是的。它是完全手工制作的吗？还是工具辅助的？

Host: Yeah. I see. Yeah. Probably nothing that tool-aided.

主持人: 是的。我明白了。是的。可能没有那么多的工具辅助。

Sam Altman: Interesting.

Sam Altman: 有趣。

### OpenAI的人才战与Sam Altman的投资理念

Host: We've given Meta their flowers. So now I can feel like I can ask you this question, which is the great talent war of 2025 has taken place, and Open AAI remains intact. Team is strong as ever, shipping incredible products. What can you say about what it's been like this year in terms of just everything that's been going on?

主持人: 我们已经给了Meta赞誉。所以现在我觉得我可以问你这个问题了，那就是2025年的**人才战** (Talent war: 人才战，指企业之间为争夺优秀人才而展开的激烈竞争) 已经发生，而OpenAI依然完好无损。团队一如既往地强大，不断推出令人难以置信的产品。关于今年发生的一切，你有什么想说的吗？

Sam Altman: I mean, every year has been exhausting since we, I remember when the first few years of running OpenAI were the most fun professional years of my life by far. It was unbelievable before you released the product.

Sam Altman: 我的意思是，自从我们……我记得运营OpenAI的最初几年是我职业生涯中最有趣的时光，远超其他。在你们发布产品之前，简直难以置信。

Host: Yeah. Running a research lab with the smartest people doing this amazing historical work, and I got to watch it, and that was very cool.

主持人: 是的。运营一个研究实验室，与最聪明的人一起做着这项了不起的、具有历史意义的工作，而我得以见证，那真的很酷。

Sam Altman: And then we launched ChatGPT, and everybody was like congratulating me, and I was like, "My life is about to get completely ransacked." And of course, it has. But it feels like it's just been crazy all the way through. It's been almost three years now. And I think it does get a little bit crazier over time, but I'm more used to it. So it feels about the same.

Sam Altman: 然后我们推出了ChatGPT，每个人都在祝贺我，我当时想：“我的生活即将被彻底颠覆。”当然，它确实如此。但感觉一路走来都像疯了一样。现在已经快三年了。我认为随着时间推移，情况确实会变得更疯狂一些，但我已经更习惯了。所以感觉差不多。

Host: Yeah. We've talked a lot about OpenAI, but you also have a few other companies: **Retro Biosciences** (Retro Biosciences: 一家专注于延长人类健康寿命的生物技术公司) and **Longevity** (Longevity: 长寿，指通过科学研究和技术手段延长人类生命周期和健康状态) and energy companies like **Helion** (Helion: 一家致力于商业化核聚变能源的公司) and **Ollo** (Ollo: 一家专注于能源领域，可能与核能或AI相关的公司). Did you have a master plan, a decade ago, to sort of make some big bets across these major spaces, or how do we think about the Sam Altman arc in this way?

主持人: 是的。我们谈了很多关于OpenAI，但你还有其他几家公司：**Retro Biosciences** (Retro Biosciences: 一家专注于延长人类健康寿命的生物技术公司) 和**Longevity** (Longevity: 长寿，指通过科学研究和技术手段延长人类生命周期和健康状态)，以及像**Helion** (Helion: 一家致力于商业化核聚变能源的公司) 和**Ollo** (Ollo: 一家专注于能源领域，可能与核能或AI相关的公司) 这样的能源公司。十年前，你有没有一个总体的计划，打算在这些主要领域进行一些大的押注，或者我们该如何看待Sam Altman的这种发展轨迹？

Sam Altman: No, I just wanted to use my capital to fund stuff I believed in. It felt like a good use of capital, and more fun or more interesting to me, and certainly a better return than buying a bunch of art or something.

Sam Altman: 不，我只是想用我的资本去资助我信仰的事物。这感觉是对资本的良好利用，对我来说更有趣，当然也比购买一堆艺术品之类的回报更好。

Host: Yeah. What about the human algorithm, do you think AIs of the future will find most fascinating?

主持人: 是的。那么关于“人类算法”，你认为未来的AI会觉得什么最引人入胜？

Sam Altman: I mean, the whole, I would bet the whole thing. My intuition is that AI will be fascinated by all other things to study and observe.

Sam Altman: 我的意思是，我认为是整个事情。我的直觉是，AI会对所有其他可供研究和观察的事物着迷。

Host: Yeah. In closing, I love this insight you had where you talked about how the next OpenAI mistake investors make is pattern matching off previous breakthroughs and just trying to find, "Oh, what's the next Facebook or what's the next OpenAI?" And that the next potentially trillion-dollar company won't look exactly like OpenAI. It will be built off of the breakthrough that OpenAI has helped emerge, which is near-free AGI at scale, in the same way that OpenAI leveraged previous breakthroughs. And so for founders and investors and people trying to ascertain the future listening to this, how do you think about a world in which Open AI achieves this mission? There is near-free AGI. What types of opportunities might emerge for company building or investing that you're potentially excited about as you put your investor hat on or company building hat on?

主持人: 是的。最后，我喜欢你提出的这个见解，你谈到投资者在下一次OpenAI的错误是基于以前的突破进行**模式匹配** (Pattern matching: 模式匹配，指识别事物中的重复模式或规律)，仅仅试图找到“哦，下一个Facebook是什么，或者下一个OpenAI是什么？”而下一个潜在的万亿美元公司不会完全像OpenAI。它将建立在OpenAI帮助出现的突破之上，即大规模的近乎免费的AGI，就像OpenAI利用了以前的突破一样。所以对于正在听这个播客的创始人、投资者以及试图确定未来的人们来说，你如何看待一个OpenAI实现了这一使命的世界？存在近乎免费的AGI。当你戴上投资者的帽子或创业者的帽子时，你可能会对哪些类型的公司建立或投资机会感到兴奋？

Sam Altman: I have no idea. I mean, I have guesses, but they're, I have learned, you're always wrong. I've learned deep humility on this point. I think the only, I think if you try to arm-chair quarterback it, you sort of say these things that sound smart, but they're pretty much what everybody else is saying, and it's really hard to get the right kind of conviction. The only way I know how to do this is to be deeply in the trenches exploring ideas, talking to a lot of people, and I don't have time to do that anymore.

Sam Altman: 我不知道。我的意思是，我有一些猜测，但我已经学到，你总是会错的。我在这方面学到了深刻的谦逊。我认为，如果你只是纸上谈兵，你会说一些听起来很聪明的话，但那几乎是每个人都在说的，而且很难获得真正的信念。我所知道的唯一方法是深入一线探索想法，与很多人交谈，而我现在已经没有时间做这些了。

Host: I only get to think about one thing now. So I would just be repeating other people's or saying the obvious things. But I think it's a very important, if you are an investor or a founder, I think this is the most important question, and you don't, you figure it out by building stuff and playing with technology and talking to people and being out in the world. I have been always enormously disappointed by the willingness of investors to back this kind of stuff, even though it's always a thing that works. You all have done a lot of it, but most firms just kind of chase whatever the current thing is, and so do most founders. So I hope people will try to go.

主持人: 我现在只能专注于一件事。所以我只会重复别人的话，或者说一些显而易见的事情。但我认为这是一个非常重要的问题，如果你是投资者或创始人，我认为这是最重要的问题，你不能，你通过构建事物、玩转技术、与人交谈、走出去才能弄明白。我一直对投资者支持这类事物的意愿感到非常失望，尽管它总是有效。你们都做了很多，但大多数公司只是追逐当前的潮流，大多数创始人也是如此。所以我希望人们会尝试去探索。

Sam Altman: Yeah, we talk about how silly five-year plans can be in a world that's constantly changing. It feels like when I was asking about your master plan, your career arc has been following your curiosity, staying super close to the smartest people, super close to the technology, and just identifying opportunities in an organic and incremental way from there.

Sam Altman: 是的，我们讨论过在一个不断变化的世界里，五年计划是多么愚蠢。感觉当我问到你的宏伟计划时，你的职业生涯轨迹一直是在追随你的好奇心，与最聪明的人保持极近的距离，与技术保持极近的距离，然后以一种有机和渐进的方式从中识别机会。

Host: Yes, but AI was always a thing I wanted to do. I went to, I studied AI. I worked in the AI lab between my freshman and sophomore year of college.

主持人: 是的，但AI一直是我想做的事情。我去了，我学习了AI。我在大学一年级和二年级之间在AI实验室工作。

Sam Altman: Yeah. It wasn't working all the time. So, I'm not, I'm not enough of a, I don't want to work on something that's totally not working. It was clear to me at the time AI was totally not working. But I've been an AI nerd since I was a kid. This...

Sam Altman: 是的。它并不总是有效。所以，我不是那种，我不想做完全没用的东西。当时我很清楚AI完全没用。但我从小就是个AI迷。这……

Host: So amazing how it, you know, you got enough **GPUs** (Graphics Processing Unit: 图形处理器), got enough data, and the lights came on.

主持人: 真是令人惊叹，你知道，你们有了足够的**GPU** (Graphics Processing Unit: 图形处理器)，有了足够的数据，然后就灵光乍现了。

Sam Altman: It was such a hated, people were, when we started figuring that out, people were just like, "Absolutely not." The field hated it so much.

Sam Altman: 那是一个如此被憎恨的领域，当我们开始弄明白的时候，人们都说：“绝对不可能。”这个领域非常讨厌它。

Host: Investors hated it too.

主持人: 投资者也讨厌它。

Sam Altman: It's not, it's not the... It's somehow not an appealing answer to the problem.

Sam Altman: 它不是，它不是……它不知怎的不是一个有吸引力的解决方案。

Host: Yeah, it's a bitter lesson.

主持人: 是的，这是一个惨痛的教训。

Sam Altman: Yeah. Well, the rest is history, and we're perhaps, let's wrap on that. We're lucky to be partners along for the ride. Sam, thanks so much for coming on the podcast.

Sam Altman: 是的。嗯，剩下的就是历史了，我们也许，就到此为止吧。我们很幸运能成为这一旅程的伙伴。Sam，非常感谢你来播客。

Host: Thanks very much. Thank you.

主持人: 非常感谢。谢谢。