---
area: tech-insights
category: technology
companies_orgs: []
date: '2025-08-22'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project:
- ai-impact-analysis
- vibe-coding
series: ''
source: https://www.youtube.com/watch?v=WXLVCZIUxpY
speaker: EO
status: evergreen
summary: Traversal公司CEO Anish阐述了在AI生成代码日益增多的时代，软件维护面临的挑战，以及他们如何利用因果机器学习和AI智能体，通过自动化故障排除来显著减少停机时间，使工程师专注于创新而非修复。
tags:
- ai-agent
- ai-software-engineering
- engineering
- learning
- troubleshooting
title: Traversal：AI如何革新软件故障排除，重塑软件维护
---

### 软件复杂性的挑战与停机成本

The code is no longer being written by humans but by AI systems, so much more code is being written now by Cursor or Windsor for Copilot, and AI is going to write so much more code.
代码不再由人类编写，而是由人工智能系统生成，现在Cursor或Windsor for Copilot等工具正在编写更多的代码，未来AI将编写更多代码。

No one really understands all of it; no one has full context; no team has full context about what's happening because it's such a complex system.
没有人真正理解所有代码，没有人拥有完整的上下文信息，也没有任何团队能完全掌握系统运行的所有情况，因为这是一个极其复杂的系统。

When software breaks, it's going to be really difficult to troubleshoot it.
当软件出现故障时，排查问题将变得异常困难。

One of the biggest problems is downtime and troubleshooting.
最大的问题之一就是停机时间和故障排除。

Global IT cyber outage.
全球IT网络中断。

Global outage, major IT outage.
全球性中断，重大IT故障。

It's also affecting hospitals, law enforcement departments, banks, and major airlines.
它还影响了医院、执法部门、银行和主要航空公司。

The cost of downtime annually for all enterprises is around $400 billion, so it's a huge problem.
每年所有企业的停机成本约为4000亿美元，所以这是一个巨大的问题。

It could be several hours or days before the situation is fully resolved.
情况可能需要数小时甚至数天才能完全解决。

### Traversal的解决方案：AI驱动的故障排除

Fundamentally, what we're doing is when we have large complex software systems and they break, we help figure out what happened, having a team of on-call engineers 24/7 looking at all of your data.
从根本上说，我们所做的是，当大型复杂软件系统发生故障时，我们通过一个24/7待命的工程师团队来查看所有数据，帮助找出问题所在。

So by the time an engineer comes onto a Slack channel, the root cause or current root cause is already given.
因此，当工程师进入Slack频道时，根本原因或当前的根本原因已经提供给他们。

So rather than them spending so much time trying to figure out what happened or calling more and more teams, because typically what happens is you'll have one team look at the data, they're like, "Oh, it's not my fault," then they'll call another team and another team and another team.
这样他们就不必花费大量时间去弄清楚发生了什么，或者不断地召集更多团队，因为通常情况下，一个团队会查看数据，然后说“哦，这不是我的错”，接着他们会联系另一个团队，再另一个团队，如此反复。

That's how you go from five people to like 80 people on a channel, and so then rather than 50 people over an hour, it's like 5 to 10 people for a few minutes just verifying the answer.
这就是为什么一个频道上的人数会从5个增加到80个，这样一来，原本需要50个人花一个小时解决的问题，现在只需要5到10个人花几分钟来验证答案。

My name is Anish, I'm the CEO and co-founder of Traversal.
我叫Anish，是Traversal公司的CEO兼联合创始人。

We came ourselves with $48 million in the Series A funding which were led by Sequoia and Kleiner Perkins.
我们获得了由**红杉资本** (Sequoia Capital: 一家风险投资公司) 和**凯鹏华盈** (Kleiner Perkins: 一家风险投资公司) 领投的4800万美元A轮融资。

We just announced our Series A raise and we came out of stealth.
我们刚刚宣布了A轮融资，并正式脱离了隐身模式。

We're building an **AI site reliability engineer** (AI SRE: 一种利用人工智能自动化运维和保障系统可靠性的技术或角色).
我们正在构建一个AI站点可靠性工程师。

So what that means is when you have large complex software systems and they break, we troubleshoot to help you figure out why it broke and then help fix it automatically.
这意味着当大型复杂软件系统出现故障时，我们通过故障排除来帮助您找出故障原因，然后自动协助修复。

But it's sort of like Perplexity, when you ask Perplexity a question, it kind of gives you evidence, right? It gives you citations of how it got to that answer.
但这有点像Perplexity，当你向Perplexity提问时，它会提供证据，对吧？它会给出它是如何得出答案的引文。

But in our world, the citations aren't web links; the citations are links to your **observability system** (可观测性系统: 收集、处理和分析系统数据以理解其内部状态和行为的工具和实践).
但在我们的世界里，引文不是网页链接；引文是您可观测性系统的链接。

That we can now publicly talk about, we've been working with them for the last six months now very closely, is Digital Ocean.
我们现在可以公开谈论的是Digital Ocean，我们已经与他们密切合作了六个月。

So they're a large public cloud service provider; I think they're the third largest actually by number of people using them as their cloud provider.
他们是一家大型公共云服务提供商；我认为按使用他们作为云服务提供商的人数计算，他们实际上是第三大。

I think they have over 600,000 people using them as their core infrastructure.
我认为他们有超过60万人将他们用作核心基础设施。

And you can imagine when they break, every person that is using them feels the pain because that's the main thing powering their system.
你可以想象，当他们出现故障时，每个使用他们服务的人都会感受到痛苦，因为这是他们系统运行的主要动力。

We've been working with them for six months now, and we found that in that six-month period, we've dropped the time to resolution by over 40%, like 37% to be exact, which is incredible, right?
我们已经与他们合作了六个月，发现在这六个月期间，我们将解决问题的平均时间缩短了超过40%，确切地说是37%，这非常惊人，对吧？

Because as I said, every minute of downtime is worth thousands of millions of dollars.
因为正如我所说，每分钟的停机时间都价值数千甚至数百万美元。

### 个人成长与创业契机

I like sports; I like competing a lot, and I always naturally gravitated to math and science.
我喜欢运动；我非常喜欢竞争，而且我总是自然而然地被数学和科学所吸引。

I just liked how abstract and clean it was, and it felt quite universal in what you could do.
我只是喜欢它的抽象和简洁，以及它所能做的事情的普适性。

I came to MIT just because I thought machine learning and AI was really important and I wanted to understand it really deeply.
我来到麻省理工学院，只是因为我认为机器学习和人工智能非常重要，我想深入理解它。

This is like 2016, about eight years ago, and once I got there, I think one of the biggest moments in my academic research career was NeurIPS 2017, and the keynote was given by the Google AlphaGo team.
这大约是2016年，也就是大约八年前，我到那里后，我认为我学术研究生涯中最重要的时刻之一是2017年的NeurIPS会议，主题演讲是由Google AlphaGo团队发表的。

And I just found that incredible that a system can learn this creative thing by itself because the complaint you always had before was that it's just copying people, but this was purely it was learning creativity by self-play.
我发现一个系统能够通过自我学习掌握这种创造性的事物是不可思议的，因为以前人们总是抱怨它只是在模仿人类，但这次它纯粹是通过自我对弈来学习创造力。

So I was like, we should apply that everywhere, this kind of architecture.
所以我想，我们应该把这种架构应用到所有地方。

I was fortunate enough to get into Columbia's faculty, and I like thinking about theoretical problems, mathematical abstractions, and I think university is an amazing place to do that.
我很幸运能进入哥伦比亚大学的教职团队，我喜欢思考理论问题、数学抽象，我认为大学是做这些事情的绝佳场所。

The thing that changed, and that was the time when everything with ChatGPT was happening.
而改变发生的时候，正是ChatGPT相关的一切都在蓬勃发展。

And so it just felt like something incredible has happened in the world, and it's like a once-in-a-lifetime thing where the world is fundamentally changed.
所以感觉世界上发生了一些不可思议的事情，这就像一生只有一次的经历，世界正在发生根本性的改变。

People don't even realize it; it just felt like this almost religious experience as to what was happening in the world.
人们甚至没有意识到这一点；这感觉就像是对世界上正在发生的事情的一种近乎宗教般的体验。

I really like uncertainty; I like creating something from zero to one.
我真的很喜欢不确定性；我喜欢从零到一创造事物。

Similar between research and entrepreneurship is that the uncertainty, you have no idea what's happening most of the time, and you have to find ways of creating structure from nothing.
研究和创业的相似之处在于不确定性，大多数时候你不知道发生了什么，你必须找到从无到有创造结构的方法。

I think obviously the difference is in here the time spans are compressed, in research you get five years, ten years to make an impact; here you get one month, so the feedback cycle is very quick.
我认为显而易见的区别在于，这里的（创业）时间跨度被压缩了，在研究中你有五年、十年去产生影响；而在这里你只有一个月，所以反馈周期非常快。

But I think in this age of AI, when AI is shooting so quickly, being in that quick feedback cycle is actually very important.
但我认为在人工智能时代，当AI发展如此迅速时，处于这种快速反馈周期中实际上非常重要。

We've kind of entered into the industrial age of artificial intelligence.
我们仿佛已经进入了人工智能的工业时代。

And I also saw some of the smartest people around me, they were either at OpenAI or Anthropic or Meta, or they were creating companies, and that's what makes me really excited.
我还看到我身边一些最聪明的人，他们要么在OpenAI，要么在Anthropic，要么在Meta，或者他们在创办公司，这让我非常兴奋。

And so I think starting a company felt to me like a great expression of that.
所以我觉得创办一家公司对我来说是这种激情的绝佳表达。

I guess I think the best AI companies are always going to be at the edge of where the models are going to be, right?
我想，最好的AI公司总是会处于模型发展的最前沿，对吧？

That's how you differentiate yourself is you're always at the edge.
这就是你如何脱颖而出，你总是走在前沿。

If you're at the edge, sometimes it works, sometimes it doesn't work, and you need to know quickly when it's working and when it's not working and correct for that.
如果你走在前沿，有时会成功，有时会失败，你需要快速知道何时奏效、何时不奏效，并及时纠正。

### 创业初期与产品方向的确定

When we started the company in like January of 2024, we started without an idea, but we had a clear taste of the type of problem we wanted to take on.
当我们大约在2024年1月创办公司时，我们没有一个具体的想法，但我们对想要解决的问题类型有清晰的认识。

So we wanted to do something that was at the intersection of our research, which was in **causal machine learning** (因果机器学习: 研究如何从数据中识别和量化因果关系，而非仅仅相关关系), and **reinforcement learning** (强化学习: 一种机器学习范式，通过试错学习如何在特定环境中最大化累积奖励), and how it intersected with **AI agents** (AI智能体: 能够感知环境、做出决策并采取行动以实现目标的自主人工智能实体).
所以我们想做一些与我们研究领域交叉的事情，即因果机器学习和强化学习，以及它们如何与AI智能体结合。

Causal machine learning is a study of cause and effect, and what you want to understand is how do you get these AI systems to pick up cause and effect relationships from data.
因果机器学习是对因果关系的研究，你想要理解的是如何让这些AI系统从数据中识别出因果关系。

AB test is an example of learning cause and effect relationships; like clinical trial is another example.
A/B测试是学习因果关系的一个例子；临床试验是另一个例子。

So these are like basic ways of running experiment, and so that's what the study of causal machine learning is, and we're trying to see how did that intersect with AI agents, which we thought was like super cool and something we followed for like now almost two and a half years.
所以这些都是进行实验的基本方法，这就是因果机器学习的研究内容，我们正在尝试研究它如何与AI智能体交叉，我们认为这非常酷，并且已经关注了近两年半。

We went through a few different ideas.
我们尝试了几种不同的想法。

The fourth person who joined us, our fourth co-founder Ahmed, he pitched us the problem of dealing with incidents.
加入我们的第四位联合创始人艾哈迈德向我们提出了处理事件的问题。

And as we looked into it, it kind of felt like a perfect problem, finding this needle in a haystack with many fake needles everywhere.
当我们深入研究时，感觉这就像一个完美的问题，在满是假针的干草堆中寻找真针。

So it fit with our research in causal machine learning and reinforcement learning really well.
因此，它与我们在因果机器学习和强化学习方面的研究非常契合。

It fit with **LLMs** (Large Language Models: 大型语言模型，一种基于深度学习的AI模型，能够理解和生成人类语言) really well because the haystack is composed of logs and metrics and traces and code and configuration files and so on and so forth.
它与大型语言模型（LLMs）也非常契合，因为这个“干草堆”由日志、指标、追踪、代码和配置文件等组成。

It fits with AI agents really well because you have to automate this complex workflow where you're querying all these different pieces of software, you're reasoning over them, and then you're writing more queries, and it's like this sequential adaptive flow.
它与AI智能体也非常契合，因为你必须自动化这个复杂的流程，在这个流程中，你要查询所有这些不同的软件组件，对它们进行推理，然后编写更多查询，这就像一个序列化的自适应流程。

And so it's a big market because everyone cares about software not going down.
这是一个巨大的市场，因为每个人都关心软件不宕机。

And I think it's only going to get bigger because so much more code is being written now by companies like Cursor or Windsurf or Copilot or what have you, just like a Cambrian explosion of code being written.
而且我认为它只会变得更大，因为现在Cursor、Windsurf或Copilot等公司正在编写更多的代码，就像代码正在经历一场寒武纪大爆发。

No one understands it in some ways, and so when software breaks, it's going to be really difficult to troubleshoot it.
在某些方面，没有人真正理解它，所以当软件出现故障时，排查问题将变得异常困难。

And so I think that's what gave us confidence that this is the problem we should be taking on.
因此，我认为这给了我们信心，让我们相信这正是我们应该解决的问题。

And then honestly, the first VC I met in my life was Sequoia, and I think they've been looking for a team to solve this problem.
老实说，我生命中遇到的第一个风险投资人就是红杉资本，我认为他们一直在寻找一个团队来解决这个问题。

They reached the same thesis; they felt this is the problem where the AI risk and technical risk is high, and the market risk is low, because if you can solve it, there's a big market.
他们得出了同样的论点；他们认为这是一个AI风险和技术风险高，但市场风险低的问题，因为如果你能解决它，就有一个巨大的市场。

And so people like us who don't come from this world but are good on the AI side are the right people to solve it.
所以像我们这样，虽然不来自这个领域，但在AI方面表现出色的人，正是解决这个问题的合适人选。

And so obviously that validation also gave us confidence that this is the right problem.
显然，这种验证也给了我们信心，认为这是正确的问题。

### AI代理的创新与MVP到生产系统的挑战

A lot of what these AI agent companies are doing is trying to replicate what humans have done, but there's so much more that can be done.
许多AI智能体公司正在做的事情是试图复制人类已经完成的工作，但实际上还有更多可以做的事情。

And so thinking from first principles what AI systems are good at and exploiting that versus just trying to replicate what a human has done, I think, is also going to be very important to reinvent and actually get to the next level of innovation.
因此，从第一性原理思考AI系统擅长什么并加以利用，而不是仅仅复制人类所做的事情，我认为对于重新发明并真正达到下一个创新水平也非常重要。

Creating an **MVP** (Minimum Viable Product: 最小可行产品，指具有最少功能但足以满足早期用户需求的产品版本) is so easy with all the tools out there.
有了所有可用的工具，创建一个最小可行产品（MVP）是如此容易。

You can really iterate quickly with putting a product in people's hands.
你可以通过将产品交到用户手中来快速迭代。

We built our first MVP probably last year in June or July, about three months in.
我们大约在去年六七月，也就是公司成立大约三个月后，构建了我们的第一个MVP。

And with small companies, it worked great because the scale of the data was small.
对于小型公司来说，它运行得非常好，因为数据规模很小。

We could kind of look at their historical incidents, see what the playbook was, and then put that into an AI agent, and so our accuracy was like 90%.
我们能够查看他们的历史事件，了解其操作手册，然后将其整合到AI智能体中，因此我们的准确率达到了90%。

Something amazing, right? So we felt really confident that this is going to work.
这很了不起，对吧？所以我们对它会成功非常有信心。

Just because it works in the one time doesn't mean it's always going to work because the world is constantly changing.
仅仅因为一次成功并不意味着它会一直有效，因为世界在不断变化。

And then we hit some of the larger enterprises, including Digital Ocean, our accuracy went to 0%, which is very difficult to see.
然后我们接触了一些大型企业，包括Digital Ocean，我们的准确率降到了0%，这非常令人沮丧。

It was a tough week.
那是一个艰难的一周。

Creating an MVP is easy, but creating a production system that works in complex environments is really hard.
创建MVP很容易，但在复杂环境中创建能够正常运行的生产系统则非常困难。

And so I think one should not confuse an MVP with a production AI system; those are like two very, very different things.
因此，我认为不应将MVP与生产型AI系统混淆；它们是两个非常、非常不同的概念。

But then we rearchitected a lot of things.
但后来我们重新设计了许多架构。

We said, how do we make sure that we're no longer trying to use our creativity and seeing, you know, get that into an agent, but really use what these AI systems are good at, which is using computation, using inference?
我们思考如何确保不再试图利用我们自己的创造力并将之融入智能体，而是真正利用这些AI系统擅长的东西，即计算和推理？

That's really what unlocked us, and suddenly our accuracy went back up to 90%.
这正是我们突破的关键，我们的准确率突然回升到了90%。

How do you make sure that your system gets better with the reasoning models?
如何确保您的系统能随着推理模型变得更好？

Because there are a lot of people we saw in competing companies and so on and so forth where as the reason models came out, they didn't get any better.
因为我们看到很多竞争公司的人，当推理模型问世时，他们的系统并没有变得更好。

So how do you make sure that you're exploiting what the reasoning models are good at?
那么，你如何确保你正在充分利用推理模型擅长的东西呢？

And the way I put it is that the reasoning models are very good at like detective stories.
我的看法是，推理模型非常擅长处理侦探故事。

You have a mystery novel, and you're trying to figure out who did the crime.
你有一本悬疑小说，你正试图找出谁是罪犯。

There's all these different pieces of evidence that you're seeing, and you're trying to figure out who is the person who did it.
你看到了所有这些不同的证据，你正试图找出谁是作案者。

Connecting all those dots and figuring out the thing, you know, the person who did it.
连接所有这些点，然后找出那个，你知道的，作案者。

That kind of detective story type workflow, which I think these reasoning models are very good at, where you have a clear answer at the end, and you have lots of moving pieces that you have to connect the dots between to get to the clear answer.
这种侦探故事类型的工作流程，我认为这些推理模型非常擅长，你在最后有一个明确的答案，并且有很多零散的线索需要你连接起来才能得到这个明确的答案。

That felt kind of perfect for us, because for us, you have all these different symptoms that happen at the same time; you find ways to connect the dots to find that specific right answer, like who did it.
这感觉对我们来说非常完美，因为对我们而言，你同时遇到了所有这些不同的症状；你找到方法将这些点连接起来，以找到那个特定的正确答案，比如“谁干的”。

Making sure we were exploiting them to the maximum was crucial, I think, and so I think that's the way I would put it.
我认为，确保我们最大限度地利用它们是至关重要的，所以我认为这就是我的看法。

### 软件维护的未来与工程师的职责转变

AI is going to write so much more code, and no one really understands all of it, right?
AI将编写更多的代码，但没有人真正理解所有这些代码，对吧？

If you wrote all of it, you have in your head just how it all fits.
如果你写了所有代码，你脑海中就会知道它们是如何组合在一起的。

And as you get to bigger and bigger systems already, you work with some of the largest Fortune 100 companies, no one has full context; no team has full context about what's happening because it's such a complex system.
而当你面对越来越大的系统时，你与一些最大的财富100强公司合作，没有人拥有完整的上下文；没有一个团队能完全掌握正在发生的一切，因为它是一个如此复杂的系统。

And that's just happening not just at the large companies, but also at the small companies because the code is no longer being written by humans or engineers but by AI systems, right?
这种情况不仅发生在大公司，也发生在小公司，因为代码不再由人类或工程师编写，而是由AI系统编写，对吧？

So the lack of context means that when an incident happens, it's just so much harder to debug it because you just don't have all of the context you need.
因此，缺乏上下文意味着当事件发生时，调试它会变得异常困难，因为你根本没有所需的所有上下文信息。

And actually it's already happening; most people now are not developing code.
实际上，这种情况已经发生了；现在大多数人已经不再是开发代码了。

They're starting to validate QA code or troubleshoot code, and that doesn't scale.
他们开始验证QA代码或排查代码，但这无法扩展。

So that's the big problem.
所以这是一个大问题。

And I think the second big problem is that with all the developments happening with AI software engineering, our belief is that as engineers, we get to do the really creative fun work, architecting system design.
我认为第二个大问题是，随着AI软件工程的所有发展，我们相信作为工程师，我们应该做真正有创造性、有趣的工作，即架构系统设计。

Over time, all engineers will be doing will be troubleshooting, which would be sad in my opinion.
随着时间的推移，所有工程师都将只做故障排除工作，这在我看来会很悲哀。

Like they should be doing the most, we as engineers should be doing the most creative work, right?
他们应该做最有创造性的工作，我们作为工程师应该做最有创造性的工作，对吧？

And to make that a reality, you need to have systems not just developing your software and building it, but also maintaining it.
为了实现这一点，你不仅需要有开发和构建软件的系统，还需要有维护软件的系统。

And so I think all of software maintenance needs to be reinvented.
因此，我认为所有的软件维护都需要被重新定义。

### 创业之路：韧性与人际关系的重要性

You have to just kind of persevere.
你必须坚持不懈。

If something goes wrong, that's okay.
如果出了问题，没关系。

I think in some ways it's a good thing because if it was easy, then everyone could do it, right?
我认为在某些方面这是一件好事，因为如果很容易，那么每个人都能做，对吧？

I think this is one of those problems where the problem statement is very easy to state, but to actually solve it is really hard.
我认为这是那种问题描述起来非常简单，但实际解决起来却非常困难的问题之一。

And I think that's where there's like a lot of companies trying it, but very few actually succeeding.
我认为这就是为什么有很多公司尝试，但真正成功的却很少。

And I think having the ability to stay resilient and have grit when something doesn't work and just stick with the problem is, I think, a big part of what differentiates us as a company.
我认为，当事情不顺利时，能够保持韧性、坚韧不拔，并坚持不懈地解决问题，是我们公司与众不同的一个重要部分。

Think about what's going to be important ten years from now, regardless of whatever happened in the world.
思考一下十年后什么会变得重要，无论世界上发生了什么。

You have no idea what's happening most of the time, and you have to find ways of creating structure from nothing.
大多数时候你不知道发生了什么，你必须找到从无到有创造结构的方法。

And so one way I say it is that in typically hard jobs, whether it's in finance or it's in technology as an engineer, you have a point A, if you get to a point B, and it's very hard to get from point A to point B.
所以我的一种说法是，在通常的困难工作中，无论是金融领域还是作为工程师的技术领域，你都有一个A点，如果你到达B点，从A点到B点是非常困难的。

In the world of research and also in the world of entrepreneurship, you don't really know where point A is, you don't know where you are, you don't know where point B is, you don't know where you want to go.
在研究领域和创业领域，你并不知道A点在哪里，你不知道自己身处何方，你也不知道B点在哪里，你不知道自己想去哪里。

And if you did know, it's still very hard, and so you're constantly in this game of trying to just decide where you are and where you're trying to go.
即使你知道，它仍然非常困难，所以你不断地在玩这个游戏，试图决定你身处何处以及你想去哪里。

And that's exactly the same thing in research as well.
这在研究中也是完全一样的。

What's interesting in this job is that the stresses can be very high, lows can be very low.
这份工作有趣的地方在于，压力可能非常大，低谷可能非常低。

So I think getting used to very high highs and low lows is important.
所以，我认为习惯于大起大落很重要。

But I think that one thing I've learned is that the time it takes me to recover is very fast.
但我认为我学到的一点是，我恢复的时间非常快。

Even if I'm super stressed, I'm super tired, within one or two days, if I just take it off, I'm back to full force.
即使我压力巨大，非常疲惫，只要休息一两天，我就能恢复到最佳状态。

And so I think that's been a good learning is that if you're really enjoying what you're doing, and even though there's these moments of massive stress, levels of stress that you'll never face otherwise, if you really love a problem and you're attracted by it, that's where it attracts other people, right?
所以我认为这是一个很好的经验，如果你真的喜欢你正在做的事情，即使面临巨大的压力，那种你平时绝不会遇到的压力水平，如果你真的热爱一个问题并被它吸引，那它也会吸引其他人，对吧？

We all love the problem; we're all faced in our lives, and so we really feel like a great deep desire to solve it.
我们都热爱这个问题；我们都在生活中面临它，所以我们真的感到一种强烈的、深刻的解决它的愿望。

And probably the most important thing out of anything is surround yourself with people that you care, that you like, that you want to be like.
也许最重要的事情是，让你身边围绕着你关心、喜欢并想成为那样的人。

And if you do that, life will be okay.
如果你这样做，生活就会好起来。

I think about my research life, I found the right PhD advisers that really molded me and guided me the right way.
我回想我的研究生涯，我找到了正确的博士导师，他们真正塑造了我，并以正确的方式引导了我。

If I think about this world, I found the right investors that guided me at the start, the right customers that helped define the product.
如果我想到这个世界，我找到了在最初阶段指导我的正确投资者，以及帮助定义产品的正确客户。

You live and die by the people you surround yourselves with, and the people will kind of guide you through these different parts.
你的成败取决于你身边的人，这些人会引导你度过这些不同的阶段。

And so I think building a taste for the right people to mentor you and be a partner with you is the most important thing.
因此，我认为培养识别合适的人来指导你并成为你的合作伙伴的能力是最重要的事情。

The rest of it, I think, will figure itself out if you can find the right people around you.
我认为，如果你能找到合适的人在你身边，其余的问题都会迎刃而解。

But I wouldn't just start a company for the sake of it.
但我不会为了创业而创业。

I think you should feel like something deep in you, because it's not easy.
我认为你内心应该有某种深刻的感受，因为它并不容易。

And so you need that kind of deep belief or motivation to sustain you over time.
因此，你需要那种深刻的信念或动力来长期支持你。