---
area: tech-insights
author: Lei
category: technology
channel: https://www.youtube.com/@101.school
companies:
- google-chrome
created: 2025-08-29T16:34
date: 2025-08-29
draft: true
guest: ''
insight: null
layout: post.njk
products_models: []
project:
- ai-impact-analysis
series: null
source: https://www.youtube.com/watch?v=Jb1U0BH31x0
speaker: ''
status: evergreen
summary: 探讨AI浏览器的定义、其在AI时代的战略重要性、Perplexity对Chrome的收购要约、谷歌面临的创新者困境，以及这对搜索和广告模式的未来颠覆。
tags:
- llm
- technology
- war
title: 深入探讨由Perplexity收购Chrome要约引发的AI浏览器大战
updated: 2025-08-29T16:34
---

## 什么是AI浏览器？

Howie Sheng: First question, help us to define what is an AI browser. So, guru, why don't you start first?

Howie Sheng: 第一个问题，请帮我们定义一下什么是AI浏览器。Guru，你先开始好吗？

Guru Pangal: I think it goes back to a very simple premise. Over the last 20 years, actually more than that, more than 25 years, systematically the system of engagement for a human or a user with computing has moved away from the operating system into the browser. So everything that was relevant at the operating system layer is now also relevant at the browser layer. We used to use operating systems primarily as a mechanism for security, observability, gathering data, running applications. All of that now happens inside the browser.

Guru Pangal: 我认为这可以追溯到一个非常简单的前提。在过去的20年，实际上不止20年，超过25年的时间里，人类或用户与计算设备的交互系统已经系统性地从操作系统转移到了浏览器。因此，所有在操作系统层面相关的东西，现在在浏览器层面也同样相关。我们过去主要使用操作系统作为安全、可观察性、数据收集和运行应用程序的机制。而现在，所有这些都在浏览器内部发生。

Guru Pangal: And so my going in thesis becomes the primary mechanism for AI to interact with tools that were designed for humans is also going to be the browser. That then becomes an interesting choke point where you collect data, where you do automation, where you secure AI to systems interactions and so on. So that's sort of the framing that we use. We've we're already investors in this space.

Guru Pangal: 因此，我的核心论点是，**AI**与为人类设计的工具进行交互的主要机制也将是浏览器。这就成了一个有趣的“咽喉要道”，你可以在这里收集数据、实现自动化、保障AI与系统交互的安全等等。这就是我们使用的框架。我们已经在这个领域进行了投资。

Guru Pangal: As I was sharing with Howie earlier, a few years ago we saw some incredible teams building enterprise browsers, so version of the browser that say Lightspeed would feel comfortable running because our IT team and security teams can then control what can and cannot be done inside the browser. So we invested in a company called Talon which was then acquired by Palo Alto Networks. And we were the lead investors there and we saw how quickly that entire market developed into a very large enterprise browser market today.

Guru Pangal: 正如我早些时候和Howie分享的，几年前我们看到一些非常出色的团队在构建企业浏览器，也就是说，像光速创投 (Lightspeed Venture Partners) 这样的公司会很放心地使用这种浏览器，因为我们的IT和安全团队可以控制在浏览器内部能做什么和不能做什么。所以我们投资了一家名为Talon的公司，后来它被Palo Alto Networks收购了。我们是那里的领投方，我们亲眼目睹了整个市场如何迅速发展成为今天一个非常大的企业浏览器市场。

Guru Pangal: And I think the thing we are going to debate today is whether AI becomes another reason for a net new class of browsers to emerge and become a large market. So I'm excited.

Guru Pangal: 我认为我们今天要辩论的是，AI是否会成为催生一个全新类别浏览器出现并形成一个巨大市场的又一个原因。所以我很兴奋。

Howie Xu: Yeah. I think you know when the Talon acquisition happened, AI wasn't the reason, right?

Howie Xu: 是的。我想你知道，当Talon被收购时，AI并不是原因，对吧？

Guru Pangal: That's right. It was cyber security.

Guru Pangal: 没错，是网络安全。

Howie Xu: That there are other reasons you know that happens but that's an interesting thing still is you know we haven't seen acquisition of browser technology for a long time. Suddenly browser is interesting technology. You and I know each other for so long we discussed so many things but we never discussed a browser in last 20 years and then when I saw this article from guru I was like what you know he's interested in browser now you explain it right you know your initial interest in browser was this enterprise browser. It makes a lot of sense but now you are interested in AI browser, you know why are you interested in AI browser?

Howie Xu: 当然还有其他原因，但这仍然是一件有趣的事情，你知道我们已经很长时间没有看到浏览器技术的收购了。突然之间，浏览器成了一项有趣的技术。你我相识这么久，我们讨论过很多事情，但在过去的20年里，我们从未讨论过浏览器。然后当我看到Guru的这篇文章时，我就想，什么，他现在对浏览器感兴趣了。你现在解释清楚了，你最初对浏览器的兴趣是企业浏览器。这很有道理，但现在你对AI浏览器感兴趣，你知道你为什么对AI浏览器感兴趣吗？

## 浏览器在AI时代的战略重要性

Guru Pangal: So it comes from sort of two key realizations and a foundational belief. Our foundational belief here at Lightspeed is that foundational models and AI in general represent a brand new class of capabilities that bring cognitive labor, make cognitive labor accessible to technology. So for the first time ever since we've been in technology, machines can process language that is semi-structured, understand language, work with it almost like a human would.

Guru Pangal: 这源于两个关键的认识和一个基本信念。我们在光速创投的基本信念是，**基础模型** (Foundational Models: 经过大规模数据训练，可适应多种任务的AI模型) 和AI总体上代表了一类全新的能力，它们将认知劳动带入技术领域，让技术可以进行认知劳动。因此，自从我们进入科技行业以来，机器第一次能够处理半结构化的语言，理解语言，并像人类一样使用它。

Guru Pangal: So then the question becomes okay so what's the limit on this? One is you know how smart could models get? We believe we're barely scratching the surface and models will continue to get better. We're one of the largest investors in companies like Anthropic as an example. So that's our core foundational belief. Now on top of that then the question becomes what holds it back? If these models get really intentional, what holds you back? And essentially two things hold you back. A model's ability to absorb data and learn and do a better job in an enterprise setting. So observe and learn and two to actually take action do something.

Guru Pangal: 那么问题就变成了，它的极限在哪里？一个问题是，模型能变得多聪明？我们相信我们现在还只是触及了皮毛，模型将继续变得更好。举个例子，我们是像**Anthropic** (一家人工智能安全和研究公司，专注于构建可靠、可解释和可控的AI系统) 这样公司的最大投资者之一。所以这是我们的核心基本信念。在此基础上，问题就变成了，是什么阻碍了它？如果这些模型变得非常有目的性，什么会限制你？基本上有两件事会限制你。一是模型在企业环境中吸收数据、学习并做得更好的能力。也就是观察和学习。二是实际采取行动，做些什么。

Guru Pangal: So tool access and there is one piece of technology that is the universal window to both observe what's happening and also take action and that becomes a browser because almost I suspect before you came to this meeting or over the last many years 95% of what you do on a laptop or computer you're doing through the browser which means if I was the browser I would know exactly what you're doing and all the software you're interacting with and I would be then presumably be able to interact with the software in that same way.

Guru Pangal: 所以，工具的访问权限。有一项技术，它既是观察正在发生的事情的通用窗口，也是采取行动的通用窗口，那就是浏览器。因为我怀疑，在你来参加这次会议之前，或者在过去的很多年里，你在笔记本电脑或计算机上所做的95%的事情都是通过浏览器完成的。这意味着如果我是浏览器，我就会确切地知道你在做什么以及你正在与之交互的所有软件，那么我大概也就能以同样的方式与这些软件进行交互。

Guru Pangal: Now, it's not 100%. We have desktop applications too, but if you're going to start somewhere, you would start at the browser. And I think that's why browsers were always very strategic real estate, which is why Google did the entire Chrome project. I mean, think about it. The only reason they did Chrome was because they wanted to own search. But it was such a strategic real estate that in the age of AI, it is several orders of magnitude more important.

Guru Pangal: 当然，这并非百分之百。我们也有桌面应用程序，但如果你要从某个地方开始，你会从浏览器开始。我认为这就是为什么浏览器一直是战略价值极高的领域，也是谷歌推出整个Chrome项目的原因。我的意思是，想一想。他们做Chrome的唯一原因是因为他们想拥有搜索。但它是一个如此具有战略价值的领域，以至于在AI时代，它的重要性要高出好几个数量级。

Guru Pangal: And so that's why this renewed interest in browser that it addresses those two key things. It enables you to gather data in a passive continuous way and it helps you to take action continuously as both a co-pilot but also as an autonomous agent that can do work on your behalf.

Guru Pangal: 因此，这就是为什么人们对浏览器重新燃起兴趣，因为它解决了那两个关键问题。它使你能够以被动、持续的方式收集数据，并帮助你持续地采取行动，既可以作为副驾驶 (co-pilot)，也可以作为一个能够代表你工作的自主代理 (autonomous agent)。

## Perplexity对Chrome的大胆收购要约

Howie Sheng: I was talking to Howie the other day, the news that Perplexity makes a long shot 34.5 billion US offer for Chrome. What's your reaction when firstly reading the news?

Howie Sheng: 前几天我跟Howie聊到，有新闻说**Perplexity** (一家AI搜索公司，提供对话式答案引擎) 对Chrome提出了一个看似希望渺茫的345亿美元的收购要约。你第一次读到这个新闻时，反应是什么？

Guru Pangal: So we're not investors in perplexity. So we don't have any more data than the two of you do. But I will say one thing, there is zero downside to doing something to saying something like that. Zero downside, right? So if it doesn't happen, you got great buzz. And at the end of the day, perplexity is a B2C business. So anything that gets you more attention is all you need.

Guru Pangal: 我们不是Perplexity的投资者，所以我们掌握的信息并不比你们俩多。但我要说一点，说出这样的话是没有任何负面影响的。零负面影响，对吧？如果这事没成，你也能获得巨大的关注度。归根结底，Perplexity是一项B2C（直接面向消费者）业务，所以任何能为你带来更多关注的事情都是你所需要的。

Howie Sheng: Attention is all you need.

Howie Sheng: 关注就是你所需要的一切。

Guru Pangal: That is, I love it. So attention is all you need. So what's the downside? There is zero downside. And on the absolute sort of small probability upside, maybe there is a situation where Google is either forced or wants to divest Chrome and in which case why not make a play for it. And so I see that as a as a very clever, very smart thing that Perplexity put out there.

Guru Pangal: 是的，我喜欢这个说法。所以关注就是你所需要的一切。那么负面影响是什么呢？完全没有。而且从极小概率的积极方面来看，也许会出现一种情况，即谷歌被迫或想要剥离Chrome，在这种情况下，为什么不争取一下呢。所以我认为Perplexity的这一举动非常聪明，非常高明。

Howie Xu: Look, you know, I'm right now a chief AI officer at a public company. You know, if not, I would have bid for that. Why not, right? You know guru may be supporting me to bid for that, who knows, right? So I totally agree with guru in that you know there's a zero downside and if nothing else you know the worst case is tremendous amount of the attention, right?

Howie Xu: 你看，我现在是一家上市公司的首席AI官。不然的话，我可能也会去竞购。为什么不呢，对吧？说不定Guru还会支持我去竞购呢，谁知道呢？所以我完全同意Guru的看法，这事儿没有任何坏处，最差的情况也能获得巨大的关注度，对吧？

## 谷歌的创新者困境与浏览器大战

Howie Xu: I think the Google is going through a very interesting time, right? You know on the one hand search business is under attack right. You know for me personally I don't use Google search nearly as much as you know I did it before. I can only see that that's going to be more and more true for the mass population in the next 5, 10 years. So that is a big threat to Google, right? But at the same time they are also AI provider, they also have a lot of smart engineers. So it's kind of very interesting time but since today we are focusing on the browser war.

Howie Xu: 我认为谷歌正处在一个非常有趣的时期，对吧？一方面，搜索业务正受到攻击。就我个人而言，我现在使用谷歌搜索的频率远不如从前。我可以预见，在未来5到10年，这种情况对于大众来说会越来越普遍。所以这对谷歌是一个巨大的威胁，对吧？但同时他们也是AI提供商，他们也有很多聪明的工程师。所以这是一个非常有趣的时期，但既然今天我们专注于浏览器战争。

Howie Xu: You know obviously Chrome is what 70%, you know 70% market share plus, right? I mean it's the kind of the gorilla in this market. I personally see that browser war is real. 10 years from now the default browser for 70% of people is not going to be Chrome, not even close. The reasons are very simple for the reason that guru just mentioned. Today if you think about it, Google's revenue roughly $400 billion a year and then you know search is a big part of that. A big part of that is actually sourced from Chrome. So anything they do with Chrome, it has tremendous impact to the revenue immediately.

Howie Xu: 你知道，Chrome显然占据了70%，甚至超过70%的市场份额，对吧？它绝对是这个市场的巨头。我个人认为浏览器战争是真实存在的。十年后，70%的人的默认浏览器将不再是Chrome，甚至差得很远。原因很简单，就像Guru刚才提到的。今天你想想，谷歌的年收入大约是4000亿美元，其中搜索业务占了很大一部分。而这部分收入中又有很大一部分实际上来自Chrome。所以他们对Chrome做的任何改动，都会立即对收入产生巨大影响。

Howie Xu: So there are many different reports but you know the consensus is roughly speaking $80 billion of that $400 billion is directly from Chrome. So if I change the Chrome user interface, I'm changing $80 billion, right? How many company with 80 billion dollar revenue in the entire world, think about it, right? So this is like a big deal. So I think they are going through this innovators dilemma. It's not like they don't know what AI native browser should look like, they don't know the thesis that guru was talking about. With AI I should be able to help the user to do browsing or to access the digital universe much easier, but they cannot possibly do too much a kind of a change.

Howie Xu: 有很多不同的报告，但普遍共识是，在那4000亿美元中，大约有800亿是直接来自Chrome的。所以如果我改变了Chrome的用户界面，我就是在改变800亿美元的生意，对吧？想想看，全世界有多少公司的年收入能达到800亿美元？所以这是件大事。因此我认为他们正在经历这种**创新者困境** (Innovator's Dilemma: 指大公司为了维持现有市场和利润，往往会忽视颠覆性创新，最终被新进入者超越的现象)。并不是他们不知道AI原生浏览器应该是什么样子，也不是他们不明白Guru所说的那些理论。有了AI，我应该能帮助用户更轻松地浏览或访问数字世界，但他们不可能做出太大的改变。

Howie Xu: So this is a kind of a from first principal point of view, that's a pretty obvious. You know when I talk to people internal it's also the same thing. They they literally told me that my hands are tied, right? You know I cannot do a lot. You know what to do but my hands are tied. So in a way this is a very interesting that we are going through a period that number one guy is gone, that's my assumption for the next 10 years. So then who's the next, right? You know Perplexity obviously has a comet, there's Adept. You wrote up these two browsers in your article which I disagreed is you should have put my browser ahead of these two.

Howie Xu: 所以从第一性原理的角度来看，这是相当明显的。当我与他们内部人员交谈时，情况也是一样。他们真的告诉我，我的手被束缚住了，对吧？我做不了太多事。你知道该怎么做，但你的手被绑住了。所以在某种程度上，我们正在经历一个非常有趣的时期，那就是头号玩家即将出局，这是我对未来10年的假设。那么，下一个是谁呢？你知道，Perplexity显然有Comet，还有Adept。你在你的文章中提到了这两款浏览器，我不同意的是，你应该把我的浏览器排在这两个前面。

Howie Xu: With all the kidding aside, I think all of us are at the very beginning, right? Call me at Adept, Norton, Neo. You know this is kind of a let me just give a very brief introduction right I actually joined the Gen Digital about a year ago as a chief AI and the innovation officer and among many other things I do, I kind of started this AI browser project a year ago with pretty much I don't want to repeat what you said everything you said is what we saw at Gen Digital, right? The browser needs AI component big time, not just hey there's a button AI summarize this page. That's not, that's like AI assist, right? You know I think the world needs a AI native browser, you know you have to start from scratch rethink about right in the past is like a human okay I want to go to CNN Fox News I click a link you know if browser give me that page fast I'm going to use this browser.

Howie Xu: 玩笑归玩笑，我认为我们所有人都还处于起步阶段，对吧？无论是Adept，还是诺顿的Neo。让我简单介绍一下，我大约一年前加入Gen Digital担任首席AI与创新官，在我做的许多事情中，我一年前启动了这个AI浏览器项目，基本上你说的每一点都是我们在Gen Digital所看到的，我就不重复了。浏览器非常需要AI组件，而不仅仅是“嘿，这里有个AI按钮可以总结这个页面”。那不是AI原生，那只是AI辅助。我认为世界需要一个**AI原生浏览器** (AI Native Browser)，你必须从头开始重新思考。过去是人类说，好吧，我想去CNN、福克斯新闻，我点击一个链接，如果浏览器能快速给我那个页面，我就会用这个浏览器。

Howie Xu: That's pretty much why Chrome even went over the Microsoft IE, right? You know at some point the JavaScript run much faster on Chrome, you know, that's why Chrome disrupted IE. But these days, I think that's you still need that. But the way I interact with the digital universe shouldn't be like that. I know a link. The browser should know about me. The browser should bring the information to me even before I click the link. The browser should summarize or maybe even negotiate certain things or do whatever the task I wanted to do, right? It's not just agentic. The browser should be ahead of you rather than browser reacting to you and it's a very personalized. So there's so much you can do with that.

Howie Xu: 这基本上就是为什么Chrome能够超越微软IE的原因，对吧？在某个时候，**JavaScript** (一种编程语言，是万维网的核心技术之一) 在Chrome上运行得快得多，这就是Chrome颠覆IE的原因。但如今，我认为你仍然需要速度，但与数字世界互动的方式不应该是那样的。我知道一个链接。浏览器应该了解我。浏览器应该在我点击链接之前就把信息带给我。浏览器应该总结，甚至可能协商某些事情，或者完成我想要做的任何任务，对吧？它不仅仅是代理。浏览器应该领先于你，而不是对你做出反应，而且它应该是高度个性化的。所以在这方面有很多可以做的事情。

Howie Xu: So a year ago we said let's actually rethink about the browser and then we started this project and then along the way obviously Perplexity, you know Arc, right, you know these guys are probably thinking about the same line and then the way I think of the browser today is a very much like search 1997. You know I don't even think you know the future of the Google in this place is necessarily born or even there or maybe in garage, right? But I think the the idea is there, right? You know Larry Page already start thinking about this right 97, 98 when he started at Google this is where we are.

Howie Xu: 所以一年前我们说，让我们重新思考一下浏览器，然后我们开始了那个项目。在此过程中，显然Perplexity、Arc这些公司可能也在思考同样的问题。我认为今天的浏览器很像1997年的搜索。我甚至不认为这个领域的未来谷歌已经诞生，或者可能还在车库里。但我认为这个想法已经存在了，对吧？拉里·佩奇在97、98年创立谷歌时就已经开始思考这个问题了，我们现在就处在那个阶段。

How-to-do this: As far as what's the business model as far as what the product looks like exactly I think it will take you know some time for us to learn and figure out but there's no question that we would have a totally different browser that the browser shouldn't be I click a link give me the content. That's like nothing, right? You know the browser should be my personal assistant giving me 10x productivity helping me to do a lot of things 10x faster, right? How to do this? So, that's kind of how we think about it. You know, Neo was introduced in May this year and we believe that with our sort of the execution in terms of the bringing AI to the browser, the safety, privacy, you know, we can talk more about it. You know, I think consumers are going to love it and they're going to have totally different experience.

Howie Xu: 至于商业模式是什么，产品具体是什么样子，我认为我们需要一些时间来学习和摸索。但毫无疑问，我们将拥有一个完全不同的浏览器，它不应该只是我点击一个链接，然后给我内容。那太简单了，对吧？浏览器应该是我的个人助理，给我带来10倍的生产力，帮助我把很多事情做得快10倍。如何实现这一点？这就是我们的思考方式。我们的Neo浏览器是今年五月推出的，我们相信，凭借我们在将AI融入浏览器、安全性、隐私性方面的执行力，我们可以聊更多关于这方面的话题。我认为消费者会喜欢它，他们将拥有完全不同的体验。

## 未来AI浏览器的格局

Howie Sheng: He said the number one guy will be gone, like Google probably won't be the leader in AI browser. That's what Howie said. Do you agree, Guru?

Howie Sheng: 他说头号玩家将会出局，比如谷歌可能不会成为AI浏览器的领导者。这是Howie说的。Guru，你同意吗？

Guru Pangal: I think the landscape is wide open for the first time in 15 years. Both of the major call them strategic pieces of real estate that Google owns. One is search and the other one is browser. There's two most strategic pieces of real estate that they own. I think both are under threat. I think the opportunity exists. And it's up to us to folks like Howie and others to think through how do you not just do something evolutionary, slightly better, but revolutionary, right? You have to rethink the system of engagement.

Guru Pangal: 我认为，这是15年来第一次，整个格局变得完全开放。谷歌拥有的两大战略资产——一个是搜索，另一个是浏览器，我认为这两大最核心的资产都受到了威胁。机会是存在的。这取决于像Howie这样的人去思考，如何不仅仅是做一些渐进式的、稍好一点的改进，而是要进行革命性的变革，对吧？你必须重新思考整个交互系统。

Guru Pangal: If your browser is only slightly faster that was great for Chrome in the in the war with IE, it's not enough now, right? What is enough now is yet to be invented. It's a complete rethink of how that interaction of a human user with the with the worldwide web happens and what's the opportunity to rethink that portal through which we interact with the web. So, I'm excited to see the innovation coming out in this. I'm really excited. I think for the first time we're going to see something that is magical because that opportunity exists now. I think voice will be part of that. Better security, more automation, easier discoverability. I think this all of these things are up for grabs.

Guru Pangal: 如果你的浏览器只是快一点点，这在当年Chrome与IE的战争中很有用，但现在已经不够了，对吧？现在需要的是什么，还有待发明。这是一个对人类用户如何与万维网互动，以及如何重新思考我们与网络互动的那个门户的彻底反思。所以，我很高兴能看到这个领域即将出现的创新。我真的很兴奋。我认为我们将第一次看到一些神奇的东西，因为现在机会已经存在。我认为语音将是其中的一部分。更好的安全性、更多的自动化、更容易的发现性。我认为所有这些东西都充满了机会。

Howie Sheng: That's excellent. You guys mentioned some AI browser products already like Perplexity's Comet, and Norton Neo, right? The rumor says OpenAI is going to launch its AI browser.

Howie Sheng: 太棒了。你们已经提到了一些AI浏览器产品，比如Perplexity的Comet，还有诺顿的Neo，对吧？有传言说OpenAI也要推出它的AI浏览器。

Guru Pangal: I too will bet that over the next two to three years we will see tremendous innovation and more browsers in this space. We will see startups. We will see large AI labs. We will see certainly perhaps even companies like Google reinventing either Chrome or a net new browser in different ways. We're going through this Darwinian sort of explosion of a complete change to how we interact with the world and I think to some extent even Claude on your desktop or ChatGPT on your desktop is competing with the browser to your point you know I couldn't agree more you said I'm using Google less and less. Man, my first stop is not Google for anything now when I'm looking for information.

Guru Pangal: 我也敢打赌，在未来两到三年内，我们将看到这个领域出现巨大的创新和更多的浏览器。我们会看到初创公司，会看到大型AI实验室，当然也可能会看到像谷歌这样的公司以不同方式重塑Chrome或推出全新的浏览器。我们正在经历一场达尔文式的爆炸，彻底改变了我们与世界互动的方式。而且我认为，在某种程度上，你桌面上的Claude或ChatGPT也在与浏览器竞争。你说你越来越少用谷歌了，我完全同意。天啊，我现在查找任何信息，第一站都不是谷歌。

Guru Pangal: Somebody says quantum computing. I was like I don't know anything about quantum computing. I don't go to Google and say please tell me about quantum computing. I literally go to Claude and say give me sort of a quick introduction to quantum computing. 5 seconds later I've got the perfect sort of write up. I go through it and now I'm at least conversant in it. And so I think there's some fundamental changes happening. Browser is going to be a key part of that. I will not at all be surprised if OpenAI either develops their own or makes a play for Chrome. It will happen. I think we'll see tremendous innovation in this space.

Guru Pangal: 有人提到**量子计算** (Quantum Computing: 一种遵循量子力学规律进行高速数学和逻辑运算、存储及处理量子信息的物理装置)，我当时想，我对此一无所知。我不会去谷歌搜索“请告诉我关于量子计算”，我直接去Claude说“给我一个关于量子计算的快速介绍”。5秒钟后，我就得到了一份完美的概述。我读完之后，至少能参与相关对话了。所以我认为一些根本性的变化正在发生。浏览器将是其中的关键部分。如果OpenAI要么开发自己的浏览器，要么试图收购Chrome，我一点也不会感到惊讶。这将会发生。我认为我们会看到这个领域的巨大创新。

Howie Sheng: While we have not heard the rumors that Anthropic is developing a browser.

Howie Sheng: 不过我们还没听到传言说Anthropic正在开发浏览器。

Guru Pangal: Don't tell me no comments that I cannot comment on. We look as as you both know, we are huge fans of Anthropic for a very simple reason. It's the best team that is pushing the frontiers of intelligence but in a way that is safe, secure, trustworthy, interpretable and these are things that matter to folks like Howie and I because of our enterprise roots. And so we think there's just a tremendous future in applying intelligence and cognitive intelligence especially in enterprise settings. For sure Anthropic will continue to experiment with new ways in which you can connect their models and their intelligence to both the data that an enterprise needs and also the actions that these models need to take to automate. Could that be a browser? Sure. But that's up to Mike Krieger who's a CPO and his team.

Guru Pangal: 别告诉我无可奉告，我不能评论。你看，你们都知道，我们是Anthropic的忠实粉丝，原因很简单。他们是推动智能前沿的最佳团队，但他们的方式是安全、可靠、值得信赖、可解释的，这些对于像我和Howie这样有企业背景的人来说非常重要。所以我们认为，在应用智能，特别是认知智能方面，尤其是在企业环境中，有着巨大的未来。可以肯定的是，Anthropic将继续试验新的方式，将他们的模型和智能连接到企业所需的数据，以及这些模型为实现自动化所需采取的行动。那会是浏览器吗？当然可能。但这取决于首席产品官Mike Krieger和他的团队。

Howie Sheng: Right. Do you think the AI browser war will be the battleground for giants only or startups also have an opportunity because we can see the LLM game is totally like big players game already.

Howie Sheng: 好的。你认为AI浏览器大战只会是巨头们的战场，还是初创公司也有机会？因为我们看到，大语言模型（LLM）游戏已经完全是大玩家的游戏了。

Guru Pangal: 100% startups have it's a level playing field. It's a level playing field and the reason for that is actually interestingly the fact that Chromium which is the underlying engine inside Chrome is open source. Maybe 15 years ago I wouldn't have been so bold to say that a startup will just come out and and write a browser from scratch. The reality is the internet is such a diverse place that supporting all the different types of things that you need to support to create a browser is a pretty tall task.

Guru Pangal: 初创公司百分之百有机会，这是一个公平的竞争环境。之所以如此，有趣的是因为**Chromium** (一个由Google主导开发的开源浏览器项目，是Google Chrome及许多其他浏览器的基础) 是开源的。大概15年前，我不敢这么大胆地说一个初创公司能从零开始写一个浏览器。现实是，互联网如此多样，要支持所有需要支持的东西来创建一个浏览器，是一项非常艰巨的任务。

Guru Pangal: But I'll give you the proof point for what makes me very bullish on new players emerging not just the larger companies. Howie and I have a bit of a cyber security background as well and about five or six years ago a few founders decided there is an opportunity to build a brand new browser for enterprises that is secure and you would have a blink reaction say that people like Chrome or Safari or others there's no way that's a real market and the reality is we were lead investors in a company called Talon that got picked up extremely quickly by Palo Alto Networks and is now an extraordinary large business inside Palo Alto Networks which is a large cyber security company. There's another company called Island which is also doing really well. And so there is an opportunity for startups. Both of these are startups. They built the stuff off Chromium. You can pick up Chromium as a startup engine as your startup building block and then rethink everything else about the user interface and the system of engagement. Optimize for security, optimize for automation, optimize for AI in different ways. And build something new. So I think the field is wide open.

Guru Pangal: 但我给你一个证据，说明为什么我非常看好新玩家的出现，而不仅仅是大公司。我和Howie都有一点网络安全背景，大约五六年前，几个创始人决定有机会为企业构建一个全新的、安全的浏览器。你可能会下意识地反应说，人们喜欢Chrome或Safari之类的，这不可能是一个真正的市场。但现实是，我们领投了一家名为Talon的公司，它很快就被Palo Alto Networks收购了，现在在Palo Alto Networks（一家大型网络安全公司）内部成了一项非常大的业务。还有另一家叫Island的公司也做得非常好。所以初创公司是有机会的。这两家都是初创公司。他们都是基于Chromium构建的。你可以把Chromium作为你的启动引擎，作为你的基础构建块，然后重新思考关于用户界面和交互系统的其他一切。针对安全性进行优化，针对自动化进行优化，以不同方式针对AI进行优化，然后创造出新的东西。所以我认为这个领域是完全开放的。

Howie Xu: Well, you know I would say it's only for small players. However, I agree with Guru that Google may have a different project outside of Chrome, right? You know, that's a to me that's a small player within a giant. That's possible. I just cannot see the giants that this sort of the number one players current number one applications is going to shift too much for the reason I just mentioned. I just don't see that possibility. I do see a possibility another interesting project you know surfaced but usually you know how it goes in a big company it's tough right that's for the you know typically so I would say that's I might be biased but I would say you know it's actually for people who doesn't have market share it's actually you know time for them or me.

Howie Xu: 嗯，我想说这只适合小玩家。不过，我同意Guru的看法，谷歌可能会在Chrome之外有另一个项目，对吧？对我来说，那就像是巨头内部的一个小玩家。这是有可能的。我只是看不到现在的头号玩家的应用会因为我刚才提到的原因而发生太大的转变。我就是看不到这种可能性。我确实看到可能会出现另一个有趣的项目，但通常在大公司里，你知道，这很困难。所以我可能会有偏见，但我想说，这实际上是为那些没有市场份额的人准备的，是他们或者我的机会。

## AI浏览器将如何颠覆搜索和广告

Howie Sheng: And how will AI browsers disrupt the current way of advertisers? Because search engines like browsers are the main traffic entrance for a lot like SEOs rankings display ads right so how will this new AI browser thing disrupt the money-making machine for Google and Meta?

Howie Sheng: AI浏览器将如何颠覆当前的广告模式？因为像浏览器这样的搜索引擎是SEO排名、展示广告等的主要流量入口，那么这个新的AI浏览器将如何颠覆谷歌和Meta的赚钱机器呢？

Guru Pangal: I think you're asking the right question but it's a narrow question. I would encourage you to take a step back and ask a bigger question, what is search in this brave new world that we are going in? So historically, all of us used search as a discovery mechanism for us as a human. You want to travel somewhere, you say Hawaii, great hotels, and then you would search. And you have to ask yourself five years from now or some long arc of time, five years from now, 10 years from now, are you really doing that? Because are you really going to this bar and typing in Hawaii great hotels to see 10 blue links and one by one clicking through those and figuring out who else is reviewing this? And is that really going to be the system of engagement?

Guru Pangal: 我认为你问的是个正确的问题，但也是个狭隘的问题。我鼓励你退后一步，问一个更大的问题：在我们即将进入的这个美丽新世界里，搜索是什么？从历史上看，我们所有人都把搜索作为一种人类的发现机制。你想去某个地方旅行，你会输入“夏威夷，很棒的酒店”，然后进行搜索。你必须问问自己，五年后，或者更长的时间，五年或十年后，你真的还会这么做吗？因为你真的会去那个搜索框里输入“夏威夷，很棒的酒店”，然后看到10个蓝色链接，再一个一个点进去看谁在评论这个酒店吗？这真的会是未来的交互方式吗？

Guru Pangal: I can tell you my bet is zero chance. Zero chance five or 10 years from now you're going to this small bar whether from Google or Bing or some other search engine. I think that entire world gets completely disrupted, completely changed because what you will do is to a trusted agent or a browser that you trust and say I'm thinking of going to Hawaii, what do you think it's like? Well here's some options. The search will happen but it's getting pushed one layer down and is getting done by AI.

Guru Pangal: 我可以告诉你，我的赌注是零机会。五年或十年后，你不可能再去那个小小的搜索框里输入信息，无论是谷歌、必应还是其他搜索引擎。我认为整个世界都将被彻底颠覆、彻底改变。因为你将会对一个你信任的代理或浏览器说：“我正在考虑去夏威夷，你觉得怎么样？”然后它会给你一些选项。搜索仍然会发生，但它被推到了下一层，由AI来完成。

Howie Xu: I call this to your travel agent which is the browser about hey here's my plan you figure out maybe you need to do search maybe you need to talk to Claude or OpenAI whatever right you know that's your job my job is to talk to my travel agent.

Howie Xu: 我把这称为你的旅行代理，也就是浏览器。你对它说：“嘿，这是我的计划，你来搞定。”也许你需要进行搜索，也许你需要和Claude或OpenAI对话，随便什么，那是你的工作，我的工作就是和我的旅行代理谈话。

Guru Pangal: That's right. Now think about the repercussions of that. The entire search industry today, entire search industry is based on a very simple assumption that there's a somewhat impatient human who doesn't have perfect quering abilities sitting there and wants an answer right away. And that's why, ever ask think why do they only show 10 search links? That's because if you showed 40, I would be overwhelmed. If you showed only three, I won't quite trust you. So you know somehow with enough experimentation you decided 10 seems like the right number. And so the entire industry is focused on this this act of me going to this one bar, you know, typing in an imperfect search query and then going through results one by one.

Guru Pangal: 没错。现在想想这会带来什么后果。今天的整个搜索行业都基于一个非常简单的假设：有一个有点不耐烦、查询能力不完美的人坐在那里，想要立刻得到答案。这就是为什么，你有没有想过他们为什么只显示10个搜索链接？那是因为如果显示40个，我会不知所措。如果只显示3个，我又不太会相信你。所以经过足够的实验，他们决定10个似乎是合适的数字。因此，整个行业都专注于我去的那个搜索框，输入一个不完美的搜索查询，然后一个一个地浏览结果。

Guru Pangal: That AI agents, that is not how. So for instance, one of our companies XA UI is building a search engine specifically for AI agents because AI agents the way they search, the things they search for and the kind of queries they can ingest back is vastly different from human. Human today does this, great hotels in Hawaii, 10 links show up. I click on each one of those. Here's what I do, by the way. I open each tab. Now I've got 11 tabs in my browser. Then I go one by one each tab. I don't like any of these. Then I go next page and I click through. Oh my god it takes hours. What a frustrating thing.

Guru Pangal: 对于AI代理来说，情况并非如此。例如，我们投资的一家公司XA UI正在专门为AI代理构建一个搜索引擎，因为AI代理的搜索方式、它们搜索的内容以及它们能接收的查询类型与人类截然不同。今天的人类是这样做的：输入“夏威夷的好酒店”，出现10个链接。我点击每一个链接。顺便说一下，我是这么做的：我把每个链接都在新标签页中打开。现在我的浏览器里有11个标签页。然后我一个一个地看。我一个都不喜欢。然后我翻到下一页，继续点击。天啊，这要花好几个小时。真是件令人沮丧的事。

Guru Pangal: You know what an AI does? Doesn't care for 10 tabs. It's not going to open 10 tabs and then go browse those hotels. It makes one query, says give me 100 hotels and give me all the metadata associated with it and give me all the reviews all in one shot. One shot comes back jammed into the context window. Ask for people based on what you know about Guru. What are hotels you think I might like on these days? And by the way, don't even suggest something that's not available on those dates. And it shows me three things I was like you know what I feel like going to this one right now.

Guru Pangal: 你知道AI是怎么做的吗？它不在乎10个标签页。它不会打开10个标签页然后去浏览那些酒店。它只发一个查询，说：“给我100家酒店，并给我所有相关的元数据和所有的评论，一次性全部给我。”一次查询的结果就全部塞进了上下文窗口。然后它会根据对Guru的了解，筛选出“你认为我这几天可能会喜欢哪些酒店？”顺便说一下，不要建议那些在那些日期没有空房的。然后它给我展示了三个选项，我就想：“你知道吗，我现在就想去这一家。”

Guru Pangal: So the entire notion of how search happens changes and that is the bigger threat to search. The threat to search is not just the browser moving from Chrome to Neo. The bigger threat to search is the fact that it's not a human searching anymore. I just don't believe that human initiated search queries will be the dominant search 10 years from now. it is just not the case. It is AI that is doing that search and discovery. And so we are investing in teams that are making that world a reality. And so the browser becomes more of an interaction mechanism through which you're driving automation. You're having conversations. You're doing things that matter to you as a system of engagement for entertainment or work. Search as a function gets delegated to AI that does it, fetches the right piece of information for you in that moment.

Guru Pangal: 所以，整个搜索发生的方式都改变了，这才是对搜索更大的威胁。对搜索的威胁不仅仅是浏览器从Chrome换成Neo。更大的威胁在于，搜索的不再是人类了。我就是不相信10年后，由人类发起的搜索查询还会是主流。情况不会是那样的。是AI在进行搜索和发现。所以我们正在投资那些让这个世界成为现实的团队。因此，浏览器更多地成为一个交互机制，你通过它来驱动自动化，进行对话，做那些对你来说重要的事情，作为一个娱乐或工作的交互系统。搜索这个功能被委托给了AI，它来完成，为你捕捉那个时刻最合适的信息。

Howie Xu: I very much agree. You know, before you talk about monetization business model, we first need to talk about what the future looks like, right? You know, you just laid out the future. Chrome to Neo browser, right? That's just one part of the future but also how the search is being done, which layer you know in the tech stack. I totally agree with you know but just one additional color to share about this business model right I would say we don't know what the business model is in the sense that if you think about search, why Google even you know why we even have a Google that's because Google, when Larry Page, actually I heard this acquired podcast that was a fascinating story.

Howie Xu: 我非常同意。在讨论商业化模式之前，我们首先需要讨论未来是什么样的，对吧？你刚刚描绘了未来。从Chrome到Neo浏览器，这只是未来的一部分，还有搜索是如何完成的，在技术栈的哪一层。我完全同意。但关于商业模式，我想补充一点。我想说，我们还不知道商业模式是什么。如果你想想搜索，为什么会有谷歌？那是因为当拉里·佩奇...实际上我是在一个播客里听到的这个故事，非常引人入胜。

Howie Xu: It was 1997 before Google started. Larry Page went to this company called Excite, right? You know it was one of the you know double digit number of search companies right. And Excite was doing pretty well and then they tested right, I search and then Google search and their team is like, you know, felt strongly Google search is far better, far better. So the CEO, in the last meeting CEO went to the room and said hey you know let me figure out you know should I you know acquire the technology or whatever you know we wanted to do, right? The moment he saw like a Google search was a far better and then people will you know the first link is so relevant, he basically said get out of the room. Why is that? Because of the business model. Because the Excite business model is about banner ads so the longer people stay on that page the better. So if the first blue link is actually the relevant one, my banner ads revenue is going to be shrinking not increasing.

Howie Xu: 那是在1997年，谷歌还没成立。拉里·佩奇去了一家叫Excite的公司，当时有十几家搜索公司。Excite做得还不错，然后他们做了测试，用他们的搜索和谷歌搜索对比，他们的团队强烈地感觉到谷歌的搜索要好得多，好太多了。所以在最后一次会议上，CEO走进房间说：“嘿，让我考虑一下，我们是否应该收购这项技术或者做点什么。”当他看到谷歌搜索结果好得多，第一个链接就如此相关时，他基本上就说：“（对拉里·佩奇）滚出这个房间。”为什么？因为商业模式。因为Excite的商业模式是基于横幅广告，所以人们在页面上停留的时间越长越好。如果第一个蓝色链接就是最相关的，那我的横幅广告收入就会减少，而不是增加。

Howie Xu: So so to me like for us to thinking about okay ads revenue this and we're going through another major shift. So I would say whoever thinking about ads revenue the way you know it's being sort of done today which is enormous you know is wrong. Now the only guy who couldn't say that is Google right he cannot say Google cannot say well I cannot I mean they have to right they have to report to the go to the Wall Street every quarter right hundred billion dollar I mean most of that is ads so I would say Google is screwed for that reason now of course Google has a Gemini model has you know a lot of other things right they may have a spin up new projects so I think the future is unclear from that point of view but I want to say to answer your question one is what I totally agree is what guru says you know think about what the future looks like you know I think it's a different future and the secondly what is the business model for the that new future rather than the what's the business model in the current way of thinking of ads.

Howie Xu: 所以对我来说，当我们思考广告收入时，我们正经历着另一个重大的转变。所以我想说，任何以今天这种巨大的方式思考广告收入的人，都是错的。现在唯一不能这么说的人就是谷歌，对吧？他不能说，他们必须向华尔街报告每个季度数百亿美元的收入，其中大部分是广告。所以我认为谷歌因此而陷入困境。当然，谷歌有Gemini模型，还有很多其他的东西，他们可能会启动新项目。所以我认为从这个角度看，未来是不确定的。但我想回答你的问题，第一，我完全同意Guru说的，要思考未来是什么样子，我认为那是一个不同的未来。第二，那个新未来的商业模式是什么，而不是用当前的方式思考广告的商业模式。

Guru Pangal: You know there's a way to think about this, when you look at a particular market are the products serving the business model or is the business model serving the product? In the early days of development of a market. You come up with a great product and then you attach a business model to it to serve the product because you want to build more product. You want more people to use it. This is the early days of Google. And then you get to a point at some point after tremendous success, you're stuck in that business model and the product serves the business model.

Guru Pangal: 有一种思考这个问题的方式，当你审视一个特定市场时，是产品在为商业模式服务，还是商业模式在为产品服务？在一个市场发展的早期，你创造出一个很棒的产品，然后为它附加一个商业模式来服务于产品，因为你想创造更多的产品，希望更多的人使用它。这就是谷歌的早期。然后，在取得巨大成功后的某个时刻，你被困在了那个商业模式中，产品开始为商业模式服务。

Guru Pangal: This is when you go from Google's search engine tremendously successful is now stuck with this business model. So instead of three or four banners on the right side, you start showing those results at the top of the search results. And then slowly you start making them look more and more and more like an actual search result. How many times you do you do a search query nowadays on Google and you're like is this a is this a sponsored result or a real result. Like I have to pay attention to that little italics at the bottom sponsored. I was like nope. Scrolling right past. But I doubt everyone is that careful because they make it look like a search. Now you have a situation where the product is serving the business model. That's where the opportunity is and that's why venture capital exists.

Guru Pangal: 这就是谷歌搜索引擎从巨大成功到如今被商业模式困住的转变。所以，你不再是在右边放三四个横幅广告，而是开始把那些广告结果放在搜索结果的顶部。然后你慢慢地让它们看起来越来越像真正的搜索结果。现在你在谷歌上搜索时，有多少次会想：“这是一个赞助结果还是一个真实结果？”我必须得注意底部那个小小的斜体字“赞助”。我看到就直接划过去了。但我怀疑不是每个人都那么小心，因为他们让它看起来就像搜索结果。现在，你就有了产品为商业模式服务的局面。而这正是机会所在，也是风险投资存在的原因。

Guru Pangal: Those founders that we are funding, they don't care for the business model. They want to build the absolute best product. We've both been founders. We didn't start our companies going, man, what's a business model. I believe no, we saw an opening in the market to create an amazing product and then we bolted on a business model to that to serve that product in the right way. And I think that's the opportunity. The market is a natural way of the world. I don't blame Google or anyone else for that. It's their success that lands them in that place and it is the fact that you're stuck to your business model and the product is merely serving the business model now and not trying to be the best product it can be that is the opportunity for founders and we're pretty excited about that.

Guru Pangal: 我们资助的那些创始人，他们不关心商业模式。他们想打造出绝对最好的产品。我们都曾是创始人。我们创办公司时，不是想着“天啊，商业模式是什么”。我相信不是的，我们看到了市场上的一个机会，去创造一个了不起的产品，然后我们为它附加了一个商业模式，以正确的方式服务于那个产品。我认为这就是机会。市场是世界的自然规律。我不会因此责怪谷歌或任何人。是他们的成功让他们走到了那一步，而正是因为你被困在你的商业模式中，产品现在仅仅是在为商业模式服务，而不是努力成为它能成为的最好的产品，这才是创始人的机会，我们对此感到非常兴奋。

Howie Sheng: Yeah yeah yeah that's great timing as you said I often click the first or second one in the Google page and then turn out to be something totally different.

Howie Sheng: 是的，是的，时机太好了。就像你说的，我经常点击谷歌页面上的第一个或第二个链接，结果发现是完全不同的东西。

Guru Pangal: You know sometimes I joke about this. There are times on my mobile I can't even use Google anymore if I use it I have to go through one screen and then a second screen now I'm pass the sponsored results to get to the actual search query. Why would I use that but I can just fire up Claude and say here's my query give me the answer.

Guru Pangal: 有时候我开玩笑说，在我的手机上，有时我甚至没法再用谷歌了。如果用它，我得划过一屏，再划过第二屏，才能越过那些赞助结果，看到真正的搜索结果。我为什么要用那个呢？我可以直接启动Claude，说出我的问题，然后得到答案。

Howie Xu: That's because they have a product serving the business model. That's the reason.

Howie Xu: 那是因为他们的产品在为商业模式服务。这就是原因。

Guru Pangal: That's exactly, that's an easy explanation.

Guru Pangal: 完全正确，这是个简单的解释。

## AI浏览器发展的三个阶段

Howie Sheng: What are some technology breakthroughs or advancement do we need in order to overcome the current barrier?

Howie Sheng: 为了克服当前的障碍，我们需要哪些技术突破或进步？

Howie Xu: Since I have been living and the breathing in the browser revolution the last one year, this is a topic dear to my heart 24 by 7, right? So I think we are go for the AI native browser we are going through three different phases at this point. You know the first phase is pretty much chat and then search right the merge or like why do I need a chat and when do I need a chat when do I need a search? It doesn't make any sense for people to say oh go to Google for search and then this question. I mean you need to give me a unified experience so that I have a questions I have something go one place you know that place will give me chat if needed give me search if needed right give me the direct navigation. If I want to go to my bank account I don't want to go to ten blue links, I want to go to Bank of America, right? So the navigation, chat, search, that uniform experience needs to be there, you know.

Howie Xu: 过去一年我一直沉浸在浏览器革命中，所以这个话题对我来说是7天24小时都非常关心的。我认为，对于AI原生浏览器，我们正在经历三个不同的阶段。第一阶段基本上是聊天和搜索的融合。比如，我为什么需要聊天？我什么时候需要聊天，什么时候需要搜索？让人们说“哦，去谷歌搜索”，然后问这个问题，这没有任何意义。你需要给我一个统一的体验，这样当我有问题或有事情时，我去一个地方，那个地方如果需要就给我聊天，如果需要就给我搜索，对吧？给我直接导航。如果我想去我的银行账户，我不想看到十个蓝色链接，我想直接去美国银行。所以，导航、聊天、搜索，这种统一的体验是必须的。

Howie Xu: I think for the AI native browser like Neo, we already have gone to that phase and I think many other browsers either realize that or about to get there, right? You know the search and the chat merge. So I would say this is kind of a phase one.

Howie Xu: 我认为像Neo这样的AI原生浏览器，我们已经进入了那个阶段，而且我认为许多其他浏览器要么已经意识到这一点，要么即将达到，也就是搜索和聊天的融合。所以我会说这是第一阶段。

Howie Xu: The phase two and the phase three the timing is a little bit controversial. I'll give you my point of view but I think you know the industry has a different point of view. My phase two in my opinion is you know the browser you know not that search and the chat needs to be merged. The browser needs to be a lot more proactive a lot more personalized. It cannot be just I go I want to go to CNN or Fox News and then give me the link before I go there right. There is something it's being done maybe notification maybe I'm reading this part of the news right you know and of course I didn't pay attention all the details and then two days later it will say hey you know Howie you are interested in F1 right by the way there's event of F1 of the page you actually browsed either right now or just two days ago and then do you want to be kind of a notified of such things, right?

Howie Xu: 第二阶段和第三阶段的时间点有点争议。我会给出我的观点，但行业内可能有不同的看法。在我看来，第二阶段是浏览器需要变得更加主动和个性化，而不仅仅是搜索和聊天的融合。不能只是我想去CNN或福克斯新闻，然后它给我链接。它应该做更多，也许是通知。比如我正在阅读这篇新闻，当然我没有注意所有细节，然后两天后它会说：“嘿，Howie，你对F1感兴趣，对吧？顺便说一下，你两天前浏览的那个页面上提到的F1有个活动，你想收到这类通知吗？”

Howie Xu: So there is a superman sitting next to you almost, right? You know, browsing together with you and then if you if it will keep you it will help you to memorize things, it will help you to grab things. It will help you to go to 50 different websites if needed and summarize if needed. Right? So I call it some personalized proactive agent sitting next to you or Superman sitting next to you doing that. So that's kind of a what Neo browser is working on delivering the value.

Howie Xu: 所以，几乎就像有个超人坐在你旁边，对吧？和你一起浏览，然后它会帮助你记忆、抓取信息。如果需要，它会帮你访问50个不同的网站并进行总结。对吧？我称之为个性化的主动代理，或者说超人坐在你旁边做这些事。这就是Neo浏览器正在努力提供的价值。

Howie Xu: The faith three is agentic. By agentic is you can do a lot more complex things right you know for instance I want it's not just some simple form filling, you know, I wanted to achieve some complex things. The agentic browser is like my assistant right? You know I wanted to go to Hawaii it will figure out you know not just you know the top places I wanted to go to but give me you know very detailed the potential booking of this, you know a lot of more things.

Howie Xu: 第三阶段是**代理化 (Agentic)**。代理化意味着你可以做更复杂的事情，不仅仅是简单的表单填写。我想完成一些复杂的任务。代理化浏览器就像我的助手，对吧？比如我想去夏威夷，它不仅会找出我想去的顶级地点，还会给我非常详细的潜在预订信息，以及更多的事情。

Howie Xu: I view that the merge of the chat and the search as a phase one, phase two is the personalized proactive browser and then phase three is agentic. I think in the industry there are people who actually believe we need to go jump to the agentic browser right away. I don't disagree. I mean in fact we do phase two and phase three at the same time. I don't believe the technology is quite ready for full-blown agentic browser right for instance you know if I want to buy a iPhone cover on Amazon right I wouldn't trust the agentic browser to do that yet because you know it may work eight out of 10 times or nine out of the 10 times but what if the one out of the 10 times and it doesn't give me a iPhone cover it gives me a iPhone right that's not what I want right. So I wouldn't trust the the AI nearly as much yet.

Howie Xu: 我将聊天和搜索的融合视为第一阶段，第二阶段是个性化主动浏览器，第三阶段是代理化。我认为行业里有些人相信我们应该直接跳到代理化浏览器。我并不反对。事实上，我们同时在做第二和第三阶段。但我不认为技术已经为完全成熟的代理化浏览器做好了准备。例如，如果我想在亚马逊上买一个iPhone手机壳，我还不敢相信代理化浏览器能做到这一点，因为它可能10次里有8、9次能成功，但万一有一次它不给我手机壳，而是给我买了个iPhone呢？那不是我想要的。所以我还不太信任AI。

Howie Xu: But if we are able to get to that phase three that's not just a search navigation chat merge but also search chat and the action merge. I feel like the technology is not quite here in terms of the action right you know simple action sure that's what we are trying to do as well. So we are going through you know for the neo browser we already finished the phase one, right? We feel like we are leading the rest of the pack. We are leading the rest of pack in terms of the moving forward on the personalized the browser and then the proactive browser and then you know Guru is going to try out and say wow I didn't realize it can be this personalized surely. And I'm going to quote you once you said that but in all seriousness right you know there's a lot of things to be done. By the way it's not like you know just integrating with Anthropic and OpenAI it's done. You have to think much harder in terms of what's the user experience, right? Because at the end of the day, I might be proactive but it could be very annoying, right? So how to balance the user experience it's a very tough problem. So we are going through that phase two agentic stuff you know we are also delivering some agentic stuff but I view that as potentially a year maybe 18 months maybe longer, right? You know we are going to gradually making some progress that's sort of how I see the technology on the browser side.

Howie Xu: 但如果我们能达到第三阶段，那就不仅是搜索、导航、聊天的融合，而是搜索、聊天和行动的融合。我觉得在行动方面技术还没完全到位，简单的行动当然可以，我们也在尝试。对于Neo浏览器，我们已经完成了第一阶段，我们觉得我们领先于其他竞争者。在推动个性化和主动浏览器方面，我们走在前面。然后Guru会来试用，然后说：“哇，我没想到可以这么个性化。”等你这么说之后，我一定会引用你的话。但说真的，还有很多事情要做。顺便说一下，这不仅仅是与Anthropic和OpenAI集成一下就完事了。你必须在用户体验方面进行更深入的思考，对吧？因为归根结底，我可能很主动，但也可能很烦人。所以如何平衡用户体验是一个非常棘手的问题。我们正在经历第二阶段的代理化工作，我们也在交付一些代理化功能，但我认为这可能需要一年，也许18个月，甚至更长时间。我们会逐步取得进展，这就是我对浏览器端技术的看法。

## 语音和视觉在未来浏览器中的作用

Guru Pangal: Yeah I like this framing. I like this framing of phase by phase of you know starting in a way that consumers can very easily sort of adapt to the new model, then the personalization, then the action and orientation. It almost in the way you were describing it, something struck me like this might be the time that the browser actually becomes sort of the AI operating system. That might be the larger opportunity in the fullness of time that the browser is no longer sort of this this little window through which we access information and take actions on the internet or applications but truly an operating system for our lives where it is agentic, it is proactive, and of course it is a true partner in terms of combining chat and search and sort of brainstorming with it. And I think that's a world I'm excited in. I would take the other side of that agentic bet though. I think the some of the stuff that Anthropic and others are working on is just so remarkable. I think we're all going to be surprised by how quickly automation comes into our lives. And that's exciting.

Guru Pangal: 是的，我喜欢这个框架。我喜欢这种分阶段的框架，从消费者可以轻松适应的新模式开始，然后是个性化，再到行动和导向。在你描述的过程中，我突然想到，这可能是浏览器真正成为AI操作系统的时刻。从长远来看，这可能是更大的机会——浏览器不再是我们访问信息、在互联网或应用程序上采取行动的小窗口，而是真正成为我们生活的操作系统，它是代理化的、主动的，当然，在结合聊天、搜索和头脑风暴方面，它也是一个真正的伙伴。我认为这是一个让我兴奋的世界。不过，对于代理化的赌注，我会持相反的观点。我认为Anthropic和其他公司正在做的一些事情非常了不起。我想我们都会惊讶于自动化进入我们生活的速度。这很令人兴奋。

Howie Xu: Cool. You know, I'm a big fan of agentic stuff. I'm not saying that when I say a year, 18 months from now. I mean the high accuracy, right? You know, the the agentic sort of the outcome, you know, but otherwise agentic is here and the now. So, you know, I'm fascinated about.

Howie Xu: 酷。你知道，我是代理化技术的忠实粉丝。当我说一年或18个月时，我指的是高准确性，代理化结果的可靠性。但除此之外，代理化技术已经到来了。所以我对此非常着迷。

Guru Pangal: What do you think about voice, Howie? Does it have a renewed place here? I mean, it's gotten so good. Like sometimes I'm not even typing. I'm just sort of talking.

Guru Pangal: Howie，你怎么看语音？它在这里有新的位置吗？我的意思是，它已经变得非常好了。有时候我甚至不打字，我只是在说话。

Howie Xu: Yeah, that's very interesting. So, when we started working on Neo, and the first version we shipped, you know, the alpha version, about December, we already had a voice in it. I would say it's interesting. There's not as much adoption of the voice initially but it's unclear because the voice is a wrong feature or human just need to adapt to it right because for mobile I think people are more used to doing the voice for the desktop right I don't think people are kind of okay I'm talking to a laptop it's it's less kind of a natural but who knows right you know it may be a matter of time.

Howie Xu: 是的，这很有趣。当我们开始开发Neo时，我们发布的第一版，大约在12月的alpha版，就已经加入了语音功能。我想说这很有趣。最初语音的采用率并不高，但不清楚是因为语音这个功能不对，还是因为人类需要时间去适应。因为在移动设备上，我认为人们更习惯使用语音，但在桌面上，我不认为人们会觉得“哦，我在和笔记本电脑说话”很自然。但这谁知道呢，也许只是时间问题。

Howie Xu: Or maybe you know I think there are two different things here one Is is the voice technology mature enough, natural, cheap enough, low latency enough? I want to say we have as a industry right has made a tremendous impact, tremendous improvement in the last 12 months. So I would say the excuse is no longer the technology readiness. So that's number one, the technology readiness. And the second thing is, you know, is the technology suitable for that use case scenario. I would say we haven't seen that yet. I was a big fan of the adopting voice into the browser you know you know working with my team we got this feature in but you know I was also told that no one used that feature.

Howie Xu: 或者，我认为这里有两件事。第一是语音技术是否足够成熟、自然、便宜、低延迟？我想说，作为一个行业，我们在过去12个月里取得了巨大的进步。所以我认为技术准备度不再是借口。这是第一点。第二点是，这项技术是否适合那个使用场景。我想说我们还没看到。我曾是浏览器采用语音的忠实拥护者，我和我的团队把这个功能加了进去，但后来我被告知，没人用那个功能。

Guru Pangal: I think your instinct is right by the way that there is like voice is so finicky you know it 95% accuracy is not enough like it has to deeply understand what I'm saying with my accent with the kind of words I use if I'm a specialist in some domain in finance or I'm a doctor. It needs to understand those terms. It needs to be real time. I need to be able to see very quickly what it's typing. So there is a very high bar. My instinct is we're very close. We're very close.

Guru Pangal: 我认为你的直觉是对的，语音非常挑剔，95%的准确率是不够的。它必须深刻理解我用我的口音、我使用的词汇所说的话，如果我是金融领域的专家或医生，它需要理解那些术语。它需要是实时的。我需要能很快看到它在输入什么。所以门槛非常高。我的直觉是我们非常接近了，非常接近了。

Guru Pangal: There's also a very high bar for the user experience because if I'm talking, I'm talking. If it waits for all of that to finish and then show me the text, that's not going to work. I I need to see it getting typed up right away to get confidence that it's doing what. So I think the technical bar is very high, but we're almost there. It feels almost there and then you're absolutely right on the other side too is it suitable for that use case and I think there will be a few set of use cases where it will become habit forming very quickly very quickly that's my instinct but we'll see I'd be curious if you turn that back on and invest more in it how that goes maybe that's a follow on conversation.

Guru Pangal: 用户体验的门槛也非常高，因为如果我在说话，它不能等我说完再显示文本，那行不通。我需要立刻看到它被打出来，才能确信它在做什么。所以我认为技术门槛很高，但我们几乎达到了。感觉就快到了。然后你在另一方面也完全正确，它是否适合那个使用场景。我认为会有一些使用场景，它会很快成为习惯。这是我的直觉，但我们拭目以待。我很好奇如果你们重新开启这个功能并投入更多，效果会如何，也许这是我们下次可以聊的话题。

Howie Xu: And then you are going to be the user of our voice.

Howie Xu: 然后你就会成为我们语音功能的用户。

Guru Pangal: 100%.

Guru Pangal: 100%。

Howie Sheng: And how about visual? I think visual probably is the next stage for browsers because visual has like tons of other information that probably voice or language couldn't describe, right? Yeah. But we're still probably a little bit too early nowadays as we're waiting for the AI hardware.

Howie Sheng: 那么视觉呢？我认为视觉可能是浏览器的下一个阶段，因为视觉包含大量语音或语言无法描述的信息，对吧？是的。但现在可能还有点早，我们还在等待AI硬件的发展。

Guru Pangal: I think I'm very excited about new visual interaction models that AI enables. I do think it's a bit early right now. But the technology is getting there. To give you an example, today the entire browser engagement model is I go to a website and a pre-laid out website with its images and text and everything shows up. Maybe there's an opportunity based on what AI knows my intent is. It generates that entire output. Could be a video, could be an image, could be text. Everything is generated just for me in that moment and visuals are a huge part of that including how it's presented, right? Maybe it's a mind map of some sort because that's what I like. Maybe it's mostly images because AI has learned that for me I'm a visual thinker and I like to see images. Maybe it's mostly text because AI has learned that I don't like images. I actually like to read through stuff as quickly as possible.

Guru Pangal: 我对AI所能实现的新视觉交互模型感到非常兴奋。我确实认为现在还有点早，但技术正在进步。举个例子，今天整个浏览器的交互模式是我访问一个网站，一个预先布局好的网站，带着它的图片、文本等所有东西出现。也许未来有机会，基于AI知道我的意图，它来生成整个输出。可能是一个视频，可能是一张图片，可能是文本。所有东西都在那一刻为我而生成，而视觉是其中的重要部分，包括它的呈现方式，对吧？也许是某种思维导图，因为我喜欢那个。也许主要是图片，因为AI了解到我是一个视觉思考者，喜欢看图片。也许主要是文本，因为AI了解到我不喜欢图片，我喜欢尽快阅读。

Guru Pangal: So I do think the ability to generate images and videos is tremendously exciting but it is right now expensive. Unpredictable. The same prompt will get you two very different images every time. And fairly high latency. I know teams that are working on all three of those making it more predictable making it very low latency to real-time video generation. We are beginning to see some demos, especially in gaming of infinite games, right? As you're playing, it's generating the world. It just never finishes. So, it is generating the world in real time faster than wall clock time. And so, you'll never see the end of that video. So we're beginning to see that. That's exciting. It's a bit low resolution right now, but it's beginning to get there. And then the cost has to drop. I think as that happens, I'm excited. It's not a six-month thing it feels like, but it is there out there.

Guru Pangal: 所以我确实认为生成图片和视频的能力非常令人兴奋，但目前成本高昂、不可预测。同一个提示每次都会得到两个截然不同的图片，而且延迟相当高。我知道有团队正在解决这三个问题，让它更可预测，实现非常低延迟的实时视频生成。我们开始看到一些演示，特别是在无限游戏领域。在你玩的时候，它就在生成世界，永不结束。它以比现实时间更快的速度实时生成世界，所以你永远看不到视频的尽头。我们开始看到这些了，这很令人兴奋。现在分辨率还有点低，但正在进步。然后成本必须下降。当这些发生时，我会很兴奋。这感觉不是六个月就能实现的事情，但它就在那里。

Howie Xu: So this time Guru talked about the engineering side of thing right the cost the latency the technology maturity part I'm going to talk about the vision side. This is where I see that 10 years from now maybe less than 10 years, not two years but some years from now when we look back the way we use browser is totally unbelievably wrong. Why do I say that? Right today, you know, you go to whether again Fox News or CNN, whatever your favorite news website is, you go there, you see the text, you see the video that, you know, they give to you, right? But guess what, right? You know, why do I consume text just because CNN, Fox News give to me, right? It should be me, right? I need a video when I want to watch video. I need a text when I want to, you know, read a text. The source of the data is, I wouldn't say irrelevant. is not shouldn't be static right so we do need to see the browser that's multimodality meaning that it's a layer in between.

Howie Xu: 这次Guru谈论了工程方面的事情，成本、延迟、技术成熟度。我来谈谈愿景方面。我看到的是，十年后，也许用不了十年，但也不是两年，当我们回首时，会发现我们使用浏览器的方式是完全难以置信的错误。我为什么这么说？今天，你去福克斯新闻或CNN，无论你最喜欢的新闻网站是什么，你看到的都是他们给你的文本和视频，对吧？但你想想，我为什么要因为CNN、福克斯新闻给我文本我就消费文本呢？应该是我来决定。我想看视频时就需要视频，我想读文本时就需要文本。数据的来源，我不会说不相关，但它不应该是静态的。所以我们需要看到一个多模态的浏览器，它是一个中间层。

Howie Xu: I have a need okay I'm going to watch news I'm going to watch video right then you know whether the CNN Fox News everything it doesn't matter if it's a text it will be converted into video for me but at sometimes right you know I'm driving you know and on the passenger side seat and then I just want to scroll some even if I go to YouTube right you know I just want to see the summary of the text rather than you know video right because it's the wrong environment for me to do it things like that so I would say multimodality is is a different way you know it's going to allow us to unlock the value of me as a consumer consume information in the in the more appropriate in the more efficient way instead of me being locked into CNN give me this piece of things in text give me this in in audio I have to stuck with it I don't have to be stuck with it.

Howie Xu: 我有需求，好吧，我要看新闻，我要看视频。那么无论CNN、福克斯新闻提供的是什么，都无关紧要。如果是文本，它会为我转换成视频。但有时候，比如我在开车，坐在副驾上，我只想滚动浏览一些东西，即使我去了YouTube，我也只想看文本摘要而不是视频，因为那不是适合我看视频的环境。所以我认为**多模态 (Multimodality)** 是一种不同的方式，它将让我们作为消费者，以更合适、更高效的方式消费信息，而不是被锁定在“CNN给我文本，我就得看文本；给我音频，我就得听音频”的模式中。我不必被它困住。

Guru Pangal: You know what's the most exciting demo I've seen in there. I'm sure you've played around with this product too. It's a product called Notebook LM from Google. It was so amazing, right? We all read papers or blogs or press releases. You take that same paper, you feed it to Notebook LM. While you're driving, it appears at a podcast. Really well done product. Now imagine a next iteration of that where it discovers, you know what, Guru, instead of a podcast, prefers to watch a YouTube video of this thing as a talking head. Now you've got two avatars in a freshly created video just for you that are discussing that technical paper and going with each other. I mean, we're we're going into a brave new world that that's going to be really exciting. The mode or the modality in which you consume information will be decided in a personalized way in real time. If in this moment I want to consume that information as text, it'll appear as text. As a podcast or audio, it will appear as podcast or audio. If a video, it'll appear as a video. That's a world we're headed in and that's pretty exciting. I think a lot of opportunities in sort of especially in consumer land related to that.

Guru Pangal: 你知道我在这方面看过的最激动人心的演示是什么吗？我肯定你也玩过这个产品，它叫谷歌的Notebook LM。太神奇了，对吧？我们都读论文、博客或新闻稿。你把同一篇论文喂给Notebook LM，当你在开车时，它就变成了一个播客。做得非常好的产品。现在想象一下它的下一个迭代，它发现，Guru不喜欢播客，他更喜欢看一个关于这个东西的YouTube视频，就像一个访谈节目。现在你就有一个为你新鲜创建的视频，里面有两个虚拟化身在讨论那篇技术论文。我的意思是，我们正在进入一个美丽新世界，那将非常令人兴奋。你消费信息的方式或模态，将以个性化的方式实时决定。如果此刻我想以文本形式消费信息，它就以文本出现。想听播客或音频，它就以音频出现。想看视频，它就以视频出现。这就是我们正在走向的世界，这非常令人兴奋。我认为尤其是在消费领域，有很多与之相关的机会。

Howie Sheng: So the browser war is real.

Howie Sheng: 所以，浏览器战争是真的。

Guru Pangal: It is real.

Guru Pangal: 是真的。

## 在AI浏览器时代驾驭隐私与信任

Howie Sheng: I know like the AI browsers offer convenience and a whole new future as we talked about, but they could also centralize user data collection in ways that could raise privacy concerns for sure. So how risky is that from both governance as well as the trust perspective? Maybe Howie you go first.

Howie Sheng: 我知道AI浏览器提供了便利和我们讨论的全新未来，但它们也可能以一种集中用户数据收集的方式引发隐私担忧。所以从治理和信任的角度来看，这有多大风险？也许Howie你先说。

Howie Xu: Yeah, I can go first because this is a topic that I kind of see both sides of the coin, right? On the one hand, a lot of time people want convenience, you know, just to get you know ship anything and everything to your you know whether the model provider or whoever as long as I get the best answer right but then there are people who care about do I give sensitive information do you retain my prompts right because my prompts is you know for some people they don't want you know other people to see about it right so to me you know it's very important for the consumers to have the choice.

Howie Xu: 是的，我可以先说，因为这是一个我能看到硬币两面的话题。一方面，很多时候人们想要便利，只要能得到最好的答案，他们愿意把任何东西都发送给模型提供商或其他任何人。但另一方面，也有人关心我是否泄露了敏感信息，你是否保留了我的提示，因为有些人不希望别人看到他们的提示。所以对我来说，让消费者有选择权非常重要。

Howie Xu: So the analogy I would use is if you think about messenger right you know there are messenger do end to end encryption and then you know the extreme version of that is probably signal right you know people have the peace of mind you know whatever I do with signal I get to see it you get to see it if I do it no one in middle right you know that's great and then there are other messengers there are always you know there's a visibility by people in the middle right so there's a wider spectrum. Our design, I'm not saying that everyone needs that but at least from Neo point of view, we wanted to give a browser that's almost like signal of the browser so that you have the confidence that as long as that's your choice that's your configuration that's your setting the prompt saves on your local device only. It doesn't you know saved on my server or whoever's server.

Howie Xu: 我用的类比是即时通讯软件。有些软件是端到端加密的，极端版本可能是Signal，人们可以安心，因为他们知道在Signal上做的事情只有收发双方能看到，中间没有任何人。这很棒。但也有其他软件，中间人是可以看到内容的。所以这是一个很宽的范围。我们的设计，我不是说每个人都需要，但至少从Neo的角度，我们想提供一个像浏览器界的Signal一样的浏览器，让你有信心，只要你选择、配置、设置了，你的提示就只保存在你的本地设备上，而不是保存在我的服务器或任何人的服务器上。

Howie Xu: One may argue well you know cloud days isn't that shouldn't be a big deal anymore but guess what certain people really care about it right so so I want to say for people care about privacy for people care about security. That's why you know a lot of people came to Norton Neo because of that reason because Norton carries the security sort of the peace of mind for them and also our design. But I would also say that I'm pretty sure there are people who would tell me that I don't care about any of that. All I care is doing some fancy agentic workflow as long as I get that thing done you know sure you know that's there will be those kind of the scenarios too.

Howie Xu: 有人可能会说，在云时代这不应该是什么大问题了，但事实是，有些人真的很在乎。所以我想说，对于关心隐私和安全的人来说，这就是为什么很多人选择诺顿Neo的原因，因为诺顿品牌给他们带来了安全感，也因为我们的设计。但我也敢肯定，会有人告诉我他们根本不在乎这些，他们只关心能完成一些花哨的代理工作流，只要能把事情搞定就行。这种情况也肯定会存在。

Guru Pangal: There's a few words that are all interrelated here. A few concepts. Security, privacy, trust, because privacy and trust. If I trust you, I don't need to be very private. If I don't trust you, I need to be very private. So, and then finally, alignment. Are we aligned in our worldview? When I say something, share something with you, do you treat it with the the same way I would treat it? It's treat others like you would treat yourself kind of. So, is there alignment? Is there trust? Is there security? And then is there privacy? Because privacy in of itself doesn't mean anything. Obviously, you share everything with your spouse. But you don't share much with a stranger. That's all related to trust.

Guru Pangal: 这里有几个相互关联的词和概念。安全、隐私、信任。因为隐私和信任是相关的。如果我信任你，我不需要非常注重隐私。如果不信任你，我就需要非常注重隐私。然后是**对齐 (Alignment)**。我们的世界观是否一致？当我告诉你一些事情，和你分享一些东西时，你是否会以我对待它的方式来对待它？这就像己所不欲，勿施于人。所以，是否存在对齐？是否存在信任？是否存在安全？然后才谈得上隐私。因为隐私本身没有任何意义。显然，你和你的配偶分享一切，但你不会和陌生人分享太多。这都与信任有关。

Guru Pangal: And so when we think about these four things, our core belief is every layer in the technology stack needs to think of these primitives and give the user as much control, give the upper layer as much control as possible. Howie's team is doing this with the end user. So when we use it, we can decide how much how much do we want to trust, how much privacy we will dial. I think most consumer applications will have to offer that choice because this technology unlike preceding technologies is a extremely powerful but needs access to your life and your information to be even more powerful. So the delta between not giving it any information and giving it information its effectiveness is very is actually quite different. And so I think the temptation for giving it more information is going to be very high. And so I think it would be very difficult for application providers, browser builders to defacto assume how where to set that dial. I think what is more important is to recommend certain settings and give that dial.

Guru Pangal: 所以当我们思考这四件事时，我们的核心信念是，技术栈的每一层都需要考虑这些基本要素，并给予用户尽可能多的控制权，给予上层应用尽可能多的控制权。Howie的团队正在为最终用户做这件事。所以当我们使用它时，我们可以决定我们想要信任多少，我们想要设置多少隐私。我认为大多数消费者应用都必须提供这种选择，因为这项技术与以往的技术不同，它极其强大，但需要访问你的生活和信息才能变得更强大。所以，不给它任何信息和给它信息，其有效性的差距其实非常大。因此，我认为提供更多信息的诱惑会非常大。所以我认为应用提供商、浏览器构建者很难去默认设置那个开关的位置。我认为更重要的是推荐某些设置，并把开关交给用户。

Guru Pangal: There's probably an integration with Anthropic that Neo has. And so we're again, you know, we love Anthropic's vision here because again that focus on trust, safety, security, alignment is extraordinarily important because as an application builder, you can provide all those controls, but at the end if the intelligence doesn't really respect those directives, then you've got a bigger problem on your hand.

Guru Pangal: Neo可能与Anthropic有集成。我们再次强调，我们喜欢Anthropic的愿景，因为对信任、安全、保障和对齐的关注至关重要。因为作为应用构建者，你可以提供所有这些控制，但如果最终底层的智能不真正尊重这些指令，那你就有大麻烦了。

Howie Xu: Along this line do you see that in the future the consumers will own some I don't know the digital vault and I say hey this part I give to browser I this part I give to that AI agent because I'm going to have six agents or 60 agents I'm dealing with anyways you know I'm going to sort of keep the memory the data in one place I can centrally manage and then depending on which agent do you see that or how do you think about it I'm curious because you see so many different applications. That's why I'm asking you this question.

Howie Xu: 沿着这条线，你是否认为未来消费者会拥有某种数字保险库，然后说：“嘿，这部分我给浏览器，那部分我给那个AI代理。”因为我可能要和6个或60个代理打交道。我会把记忆和数据集中管理在一个地方，然后根据不同的代理授权。你看到这种趋势了吗？或者你是怎么想的？我很好奇，因为你看到了那么多不同的应用。

Guru Pangal: I think there's a few cyber security nerds like Howie and I who are extremely careful with managing information and which applications get what application. But my observation is the average consumer the cognitive burden of parceling information into these sandboxes and then giving individual sandboxes to individual applications. The cognitive burden is too much for the average consumer. I can tell you people outside Silicon Valley or people outside the cyber ecosystem, when you log into something with Google and then Google says this thing will have access to these seven Google services are you okay with it, the number of people who read that and take action on that is zero. People are just like yes I just want to use this application.

Guru Pangal: 我认为有像我和Howie这样的一些网络安全极客，对管理信息和授权应用非常小心。但我的观察是，对于普通消费者来说，把信息分装到不同的沙盒里，然后再把单个沙盒授权给单个应用的认知负担太大了。我敢说，硅谷之外或者网络安全生态之外的人，当他们用谷歌登录某个应用，谷歌提示“这个应用将有权访问这七项谷歌服务，你同意吗”时，会去读并采取行动的人数是零。人们只会点“是”，因为他们只想用那个应用。

Guru Pangal: So the answer is for a small subset of people yes this ability to enclave information will be important and a lot of those use cases will be economically valuable because if you're working at the NSA obviously it's very valuable so you might be able to build a business around it but I do not see a world in which individual consumers uninformed masses billions of customers out there will be able to parcel this information in the right way we can barely do that in our personal lives like it's just so difficult to remember what did I tell my spouse and what did I tell my kid and what did I tell my cousin like it's just hard you know the cognitive burden is too much now if AI can help us with that that could be interesting.

Guru Pangal: 所以答案是，对于一小部分人来说，是的，这种隔离信息的能力很重要，而且很多这样的用例会有经济价值，因为如果你在美国国家安全局工作，这显然很有价值，你或许能围绕它建立一个业务。但我看不到一个世界，在那里，普通消费者、不知情的大众、数十亿的客户能够以正确的方式划分这些信息。我们甚至在个人生活中都很难做到这一点，比如要记住我跟我配偶说了什么，跟我孩子说了什么，跟我表亲说了什么，这太难了，认知负担太重了。现在如果AI能帮助我们，那可能会很有趣。

Howie Xu: I think consumers you know when it comes to privacy security stuff, the consumers do not like the cognitive friction, right? And also they do not like pay for it. When it's a free and the frictionless, they will say privacy. But as long as one of the two things or maybe both, they say, well, I don't know what are the privacy focused search engines would have been the dominant search engine on the planet and not Google if consumers really truly walk the walk. People like to talk about privacy, but at the end of the day, they want to just do what they want to do. Needs to be frictionless. They want to pay for if it's free. If you're going to incorporate privacy into it, great. If you can't, most consumers, in my experience, don't care.

Howie Xu: 我认为当涉及到隐私安全问题时，消费者不喜欢认知摩擦，也不喜欢为此付费。当它是免费且无摩擦的时候，他们会高喊隐私。但只要涉及其中之一或两者，他们就说：“嗯，我不知道。”否则，注重隐私的搜索引擎早就成为地球上主导的搜索引擎，而不是谷歌了，如果消费者真的言行一致的话。人们喜欢谈论隐私，但最终，他们只想做他们想做的事。这需要无摩擦，而且他们不愿付费。如果你能把隐私融入其中，那很好。如果不能，根据我的经验，大多数消费者不在乎。

Howie Sheng: Wow. They don't care.

Howie Sheng: 哇，他们不在乎。

Howie Xu: Hey, another question. So, consumers do not want to pay for anything in the past, right? Gmail or anything, right? But now they pay $20 a month for anthropic or OpenAI. Do you see that kind of the behavior it's a shift of behavior. What do you see?

Howie Xu: 嘿，另一个问题。过去消费者不想为任何东西付费，对吧？Gmail或其他任何东西。但现在他们愿意为Anthropic或OpenAI每月支付20美元。你认为这是一种行为上的转变吗？你怎么看？

Guru Pangal: I think the actually going back to a previous discussion I think the long-term business models are still to be discovered here. I think the initial paying 20 bucks a month, five bucks a month, 100 bucks a month depending on the utility you get. It makes a lot of sense. I think it provides very high signal back to these companies. It also pays for the very high cost of inference in some cases. And the thing I love about that is it could historically even we technical technically relatively forward-leaning people, we didn't spend 20 bucks a month on five, six, seven different applications. Now we do. And the thing I love about that is that's the value we're getting out of AI is so high that we finally got broke out of that habit and started paying. Imagine like 20 years. 20 years we did pay for never paid for anything and then starting a year or two ago we were like oh my god like I can't live without this stuff. Swipe a credit card and go for it. So that's amazing. Long-term is that the business model? Unclear. I think we'll have a mixture of everything. The winning business model is still to be discovered. Could be hey we provide you the most secure and private browser. Could be and so you should pay for it. Could be ads. Could be something else. So that's I think unclear.

Guru Pangal: 回到之前的讨论，我认为长期的商业模式还有待发现。最初根据你获得的效用每月支付20美元、5美元或100美元，这很有意义。它为这些公司提供了非常强的信号，在某些情况下也支付了高昂的推理成本。我喜欢的一点是，历史上即使是我们这些技术上相对前沿的人，也不会每月在五、六、七个不同的应用上花费20美元。现在我们这样做了。这说明我们从AI中获得的价值如此之高，以至于我们终于打破了那个习惯并开始付费。想象一下，20年来我们从不为任何东西付费，然后从一两年前开始，我们觉得：“天啊，我离不开这个东西了。”刷信用卡就买了。这太神奇了。长期来看，这是商业模式吗？不清楚。我认为我们会有一个混合体。获胜的商业模式还有待发现。可能是“我们提供最安全、最私密的浏览器，所以你应该付费”，也可能是广告，也可能是其他东西。所以我认为这还不清楚。

## 新浏览器生态系统中的创业机会

Howie Sheng: I do have one last question. So, what are the most exciting startup opportunities you see for the next 5 to 10 years as we watch this AI browser war starts?

Howie Sheng: 我还有最后一个问题。当我们看到AI浏览器战争开始时，你认为未来5到10年最令人兴奋的创业机会是什么？

Guru Pangal: Obviously it goes without saying that AI is so foundational and such an amazing building block that nearly every part of the technology market and beyond will present great opportunities. So, I won't rule out anything. Having said that, some of the most interesting opportunities and a great test for founders is could this be built three years ago? It's a very simple question, but are you doing something that could have been done 3 years ago, you're just doing it slightly better, or are you doing something that 3 years ago was just economically or from a technical reason just not possible?

Guru Pangal: 显然，AI是如此基础和神奇的构建块，以至于几乎技术市场的每个部分及以外都会出现巨大的机会，这一点不言而喻。所以我不会排除任何可能性。话虽如此，对于创始人来说，一些最有趣的机会和一个很好的考验是：这东西三年前能做出来吗？这是一个很简单的问题，但你在做的事情是三年前就能做的，只是做得好一点，还是在做三年前因为经济或技术原因根本不可能做到的事情？

Guru Pangal: Three years ago, could you build technology? Or four years ago, could you build technology that could go through all the PDFs that a company publishes in their financial disclosures and give you a summary of those, practically impossible today super easy. Build against that. So that's a test I use. I'm pretty excited by businesses that three or four years ago were simply not feasible either economically or technically. It's a very clear why now. So I enjoy that but I'm curious how you view that.

Guru Pangal: 三年前，你能构建技术吗？或者四年前，你能构建一种技术，可以浏览一家公司在其财务披露中发布的所有PDF文件并给你一个摘要吗？当时几乎不可能，现在超级容易。就针对这个来构建。这是我使用的一个测试。我对那些三四年前在经济上或技术上根本不可行的业务感到非常兴奋。现在有一个非常明确的“为什么是现在”。我很喜欢这个，但我很好奇你怎么看。

Howie Xu: Well, going back to one of the points you made earlier, right? Browser is not just the browser. It's going to be the AI operating system, right? So from my point of view, you know, I have bias but you know Neo is going to take over Chrome completely at that point. This is the future of the operating system. I'm going to work with 60 million applications working with my browser. So there are tons of startup opportunity hosting on Neo. That's what I see for the next 10 years.

Howie Xu: 回到你之前提到的一个观点，对吧？浏览器不仅仅是浏览器，它将成为AI操作系统。所以从我的角度来看，我有偏见，但我认为Neo到那时会完全取代Chrome。这是操作系统的未来。我将与6000万个应用程序一起在我的浏览器上工作。所以在Neo上托管的创业机会将会有很多。这就是我对未来10年的看法。

Guru Pangal: Actually that's a great point. You are pushing the frontiers of what a browser can be and those frontiers then enable a new class of applications on top in the same way that the incorporation of JavaScript inside a browser led to Ajax, Gmail and all kinds of fun stuff that was built on top. Actually that's I wasn't thinking about that but this is a great point. The innovations at the browser level innovate themselves might offer a new class of applications to emerge.

Guru Pangal: 实际上，这是一个很好的观点。你正在推动浏览器的前沿，而这些前沿又催生了在其之上一类新的应用程序，就像在浏览器中集成JavaScript导致了Ajax、Gmail和所有在其之上构建的有趣的东西一样。我之前没这么想，但这是一个很好的观点。浏览器层面的创新本身可能会催生新一类应用的出现。

Howie Xu: Yeah. And all the agents working with my browser is the lead generation for Lightspeed. And

Howie Xu: 是的。所有在我的浏览器上工作的代理都是光速创投的潜在客户来源。而且…

Guru Pangal: There you go. So 50% of the leads will be hosted on my browser anyways.

Guru Pangal: 这就对了。所以50%的潜在客户反正都会托管在我的浏览器上。

Howie Xu: I'm definitely subscribing and paying for this browser then.

Howie Xu: 那我肯定会订阅并为这个浏览器付费。

Guru Pangal: Okay, here you go.

Guru Pangal: 好的，就这么定了。

Howie Sheng: Sounds exciting. Wow. All right, gentlemen. That's all my questions. Do you have anything else to add? I still have the question about why we don't hear about from Anthropic on that.

Howie Sheng: 听起来很令人兴奋。哇。好的，先生们。我的问题都问完了。你们还有什么要补充的吗？我还是想知道为什么我们没有听到Anthropic在这方面的消息。

Guru Pangal: I only wish the NDAs were any less tighter. All I can tell you is it is an incredible company and I wish I could share more. I have never worked with a sharper, more thoughtful bunch of people. It's just an incredible team. And as you and I, we've had long careers, you know, at this point in our careers, it's about working with incredible people who push our own sort of point of view of the world, our own thinking, and and I couldn't be more privileged to work with that team. So stay tuned is all I would say. But anyway, this was great, Howie. I'm really glad you suggested it, and thank you for moderating. This was amazing.

Guru Pangal: 我只希望保密协议能不那么严格。我能告诉你的就是，这是一家不可思议的公司，我希望能分享更多。我从未与一群如此敏锐、如此深思熟虑的人共事过。这真是一个了不起的团队。在我们职业生涯的这个阶段，重要的是与那些能挑战我们世界观、推动我们思考的了不起的人一起工作，能与那个团队合作，我感到无比荣幸。所以我只能说，敬请期待。但无论如何，Howie，这次谈话很棒。我很高兴你提议了这次对话，也谢谢你的主持。这太棒了。