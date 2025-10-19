---
title: OpenAI 平台工程与产品负责人谈企业级应用、GPT-5 及自主性未来
summary: OpenAI 平台工程和产品负责人 Sherwin Wu 与 Olivier Godement 深入探讨了 OpenAI 企业级业务、客户案例（如
  T-Mobile 和 Amgen）、GPT-5 的权衡与反馈，并分析了数字自主性超越物理自主性的技术原因。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-agent
- forward-deployed-engineering
- model-customization
- openai-enterprise
people: []
companies_orgs: []
products_models:
- gpt-5
media_books:
- bg2-pod
date: '2025-10-06'
author: Bg2 Pod
speaker: Bg2 Pod
draft: true
guest: ''
insight: ''
layout: post.njk
series: ''
source: https://www.youtube.com/watch?v=yLTSqBzKG2s
status: evergreen
---
### 物理自主性领先数字自主性：2025年的现状与技术根源

In San Francisco, you could take a car from one part of SF to the other fully autonomously. As opposed to the digital world, I can't book a ticket online right now. Physical autonomy is ahead of digital autonomy in 2025. I think AI agents are like really in day one here. Like ChatGPT only came out in 2022. The slope I think is incredibly steep. I actually do think self-driving cars have a good amount of scaffolding in the world. You have roads, roads exist. They're pretty standardized. Stoplights. AI agents are just kind of dropped in the middle of nowhere.

在旧金山，你可以完全自动驾驶地从城市的这一头到另一头。与数字世界相反，我现在无法在线预订机票。2025年，物理自主性领先于数字自主性。我认为人工智能智能体（AI agents）仍处于非常早期的阶段。比如 ChatGPT 只是在 2022 年才发布。我认为其增长斜率极其陡峭。我确实认为自动驾驶汽车在世界上拥有大量的“脚手架”（scaffolding）。你有道路，道路是存在的，而且相当标准化。你有交通信号灯。而 AI 智能体则像是被扔到了荒野之中。

### 嘉宾介绍与 OpenAI 平台的定位

Hey folks, I'm Apoorv Agarwal and today at the OpenAI office, we had a wide ranging conversation about OpenAI's work in enterprise. I have with me the head of engineering and head of product of the OpenAI Platform, Sherwin Wu and Olivier Godement. OpenAI is well known as the creator of ChatGPT, which is a product that billions across the world have come to love and enjoy. But today we dive into the other side of the business, which is OpenAI's work in enterprise. We go deep into their work with specific customers and how OpenAI is transforming large and important industries like healthcare, telecommunications and national security research. We also talk about Sherwin and Olivier's outlook on what's next in AI, what's next in technology and their picks both on the long and short side.

大家好，我是 Apoorv Agarwal，今天在 OpenAI 办公室，我们围绕 OpenAI 的企业级工作进行了一次广泛的对话。与我同行的有 OpenAI 平台工程主管 Sherwin Wu 和产品主管 Olivier Godement。OpenAI 以其 ChatGPT 的创造者身份而闻名，这是全球数十亿人都喜爱和享受的产品。但今天我们深入探讨业务的另一面，即 OpenAI 在企业端的工作。我们将深入了解他们与特定客户的合作，以及 OpenAI 如何变革医疗、电信和国家安全研究等重要行业。我们还讨论了 Sherwin 和 Olivier 对 AI、技术下一步发展的展望，以及他们看好（Long）和看空（Short）的领域。

### OpenAI 平台：B2B 业务与使命的契合

You know, I'll open with people know OpenAI as the firm that build ChatGPT, the product that they have in their pocket that comes with them every day to work, to personal lives. But the focus for today is OpenAI for enterprise. You guys lead OpenAI Platform. Tell us about it. What's underneath the OpenAI Platform for B2B for enterprise? Yeah. So this is actually a really interesting question too, because when I joined OpenAI around three years ago to work on the API, it was actually the only product that we had. So I think a lot of people actually forget this, where the original product for OpenAI actually was not ChatGPT. It was a B2B product. It was the API we were catering towards developers.

我想先从大家对 OpenAI 的认知说起，他们是 ChatGPT 的缔造者，是人们每天带在口袋里工作和生活的产品。但我们今天的重点是 OpenAI 企业版。你们领导着 OpenAI 平台。请介绍一下，OpenAI 平台为 B2B、为企业提供的核心是什么？是的。这是一个非常有趣的问题，因为三年前我加入 OpenAI 负责 API 时，它实际上是我们唯一的产品。所以我想很多人可能都忘了，OpenAI 最初的产品并不是 ChatGPT，而是一个面向开发者的 B2B 产品，就是 API。

And so I've actually seen, you know, the launch of ChatGPT and all of everything downstream from that. But at its core, I actually think the reason why we have a platform and why we started with an API is it kind of comes back to the OpenAI mission. So our mission obviously is to build AGI, which is pretty hard in and of itself, but also to distribute the benefits of it to everyone in the world, to all of humanity. And, you know, it's pretty clear right now to see ChatGPT doing that, because, you know, my mom, you know, maybe even your parents are using ChatGPT. But we actually view our platform and especially our API and how we work with our customers, our enterprise customers, as our way of getting the benefits of AGI, of AI, to as many people as possible to everyone in every corner of the world.

我见证了 ChatGPT 的发布以及后续的一切。但其核心在于，我认为我们拥有平台以及从 API 开始的原因，最终都回归到了 OpenAI 的使命。我们的使命是构建 AGI，这本身就非常困难，但也要将 AGI 的益处普及到全世界的每一个人、全人类。目前很明显，ChatGPT 正在做到这一点，我的妈妈，也许你的父母都在使用 ChatGPT。但我们实际上将平台，特别是我们的 API 以及我们与企业客户的合作方式，视为将 AGI、AI 的益处传递给地球上每个角落的尽可能多的人的方式。

### B2B 业务如何实现 AGI 效益的广泛分配

ChatGPT obviously is really, really, really big now. It's, I think, like the fifth largest website in the world. But we actually, by working through developers using our API, we're actually able to reach even more people in, you know, every corner of the world and every different use case that you might have. And especially with some of our enterprise customers, we're able to reach even use cases within businesses and end users of those businesses as well. And so we actually view the platform as kind of our way of fully expressing our mission of getting the benefits of AGI to everyone.

ChatGPT 现在非常非常庞大，我认为它是全球第五大网站。但通过开发者使用我们的 API，我们实际上能够接触到世界上更多的人，以及你可能遇到的每一种不同的用例。特别是通过一些企业客户，我们能够触及到企业内部的用例以及这些企业的最终用户。所以我们实际上将平台视为充分表达我们使命——将 AGI 的益处带给所有人的方式。

Fascinating. And maybe to double down, like, I think B2B is actually quite core to the OpenAI mission. What we mean by distributing AGI benefits is, you know, I want to live in a world where, you know, there are 10x more medicines going out every year. I want to live in a world where, you know, education, public service, civil service, you know, are increasingly optimized to everyone. And, you know, there are a large category of use cases that only go through B2B, frankly, unless you enable the enterprises. And we talk about Palantir, I think that's probably the same thesis at Palantir. It's like, hey, those are the businesses who are actually making stuff happen in the real world. So if you do enable them, if you do accelerate them, like, that's how essentially you benefit, you know, to distribute AGI.

很有意思。也许我们要再深入一点，我认为 B2B 实际上是 OpenAI 使命的核心。我们所说的“分配 AGI 的益处”，是指我希望生活在一个每年都有十倍多的药物问世的世界；我希望生活在一个教育、公共服务、公务服务都能不断优化以服务所有人的世界。坦率地说，有一大类用例只能通过 B2B 来实现，除非你赋能这些企业。就像我们谈论 Palantir 时，我认为 Palantir 也是同样的论点：那些真正将事情付诸实践的企业，如果你赋能他们，加速他们，这才是你分配 AGI 效益的方式。

### 客户案例一：T-Mobile 语音和文本支持的自动化

So if I were to step back, like, we started our B2B efforts with the API like a few years ago. Initially, the customers were startups, developers, indie hackers, extremely technically sophisticated people... On top of that, you know, over the past couple of years, we've been working one more with traditional enterprises, and also, like, digital natives. Essentially, I think, basically, everyone woke up, like, with their GPT, and, like, those models are working. There is a ton of value, and they could see, essentially, many use cases in the enterprise. A couple of examples which I like the most. One which is very both fresh and, you know, is quite cool. We've been working a lot with T-Mobile.

如果我回顾一下，我们几年前开始 B2B 业务时是从 API 开始的。最初的客户是初创公司、开发者、独立黑客，是技术非常精通的人……在此基础上，过去几年，我们一直在与传统企业以及数字原生企业合作。基本上，每个人都接触了 GPT，并且看到了这些模型的价值，看到了企业中的许多用例。我最喜欢的例子之一是 T-Mobile。

T-Mobile. So T-Mobile, leading, like US telco operator. T-Mobile has, like, you know, a massive customer support load. Like, you know, people asking, like, you know, "Hey, I was charged, like that amount of money was going on," or, you know, "My cell phone, like isn't working anymore." A massive, like, you know, share of that load is, like, you know, voice calls. Like, people want to talk to someone. And so for them, like, you know, to be able to essentially automate, like, more and more, and, you know, to help, like, people, like, self-serve in a way, like, you know, debug their subscription was pretty big. And so we've been working with T-Mobile pretty much for the past year. At that point, to basically automate, like, not only the text support, but also voice support.

T-Mobile 是美国领先的电信运营商，拥有巨大的客户支持压力。人们会问：“我被收取了多少钱？”或者“我的手机坏了。”其中很大一部分是电话咨询。所以，对他们来说，能够自动化越来越多的流程，帮助人们以自助服务的方式调试他们的订阅服务，意义重大。我们已经与 T-Mobile 合作了大约一年，目的是实现文本支持和语音支持的自动化。

### 前线部署工程师（FDE）的角色与系统集成

So today, like, you know, there are features, like, in the T-Mobile app, that if you call, are actually handled by OpenAI models behind the scenes. And, you know, it does sound, like, supernatural, like, you know, human-sounding latency, quality-wise. So that one was really fun. A second one, which is very-- Just on that, can I ask you a follow-up question? So we've got text models. We've got voice models, maybe even video models someday that are deployed at T-Mobile. But what above the models or adjacent to the models might we have helped T-Mobile with, for example? Yeah, there is a ton we're doing. The first one is, you know, you have to put yourself in the shoes of an enterprise buyer. Like, their goal is to automate, you know, reduce, like, you know, optimize customer support. And you're going from, like, a model, like tokens in, tokens out. To that case, it's hard.

因此，如今在 T-Mobile 应用中，如果你致电，有些功能实际上是由后台的 OpenAI 模型处理的。听起来非常自然，延迟和质量都达到了人类水平。第二个问题是，T-Mobile 部署了文本和语音模型，我们还在模型之上或与模型相邻的地方提供了哪些帮助？我们做了很多工作。首先，你需要站在企业买家的角度思考。他们的目标是自动化、优化客服。你不能只停留在“输入 Token，输出 Token”的模型层面，那很困难。

And so, you know, first, like, there's a lot of design, like, you know, system design. We do have actually now forward deployed engineers, who are helping us quite a bit. Forward deployed engineers. Yeah, I mean-- Yeah, that's familiar to the-- We borrow the term from Palantir. Yeah, it's a great term. Were you an FD at Palantir? I was not an FD I was on, I think they called it the dev side, right? It's like software engineering. I was also only an intern at Palantir. But, yeah, it's a great term. I think it accurately describes what we're asking folks to do, which is, like, embed very deeply with customers and, honestly, like, build things specific to their systems. They're deployed onto these customers.

因此，首先需要大量的系统设计工作。我们现在有了前线部署工程师（Forward Deployed Engineers, FDEs），他们提供了很大的帮助。前线部署工程师？是的，这个术语我们从 Palantir 那里借用。这是一个很棒的术语。你在 Palantir 当过 FDE 吗？我没有，我在开发侧，就是软件工程那边，而且我当时在 Palantir 也只是实习生。但这个术语确实准确地描述了我们对这些人的要求：与客户深度嵌入，为他们的系统构建定制化的东西。

The first one is, you know, you have to orchestrate those models. Like, those models know nothing about, like, you know, the CRM, like, you know, and, like, what's going on. And so, you have to plug the model to, like, many, many different tools. Many of those, like, tools, like, in the enterprise, do not even have, like, APIs or, like, clean interfaces, right? It's the first time they're being exposed, like, you know, to a third party system. And so, there is a lot of, you know, standing up, like, you know, API gateways, like, tools, connecting. Then you have to essentially, like, define what good looks like, you know. Again, like, to put in your exercise for everyone, like, you know, defining, like, a golden set of evals is, you know, easier than it sounds. Harder than it sounds.

首先是模型编排。模型对 CRM 或当前发生的情况一无所知。你必须将模型连接到许多不同的工具上。企业中的许多工具甚至没有 API 或干净的接口。很多工具是第一次暴露给第三方系统。所以需要搭建 API 网关、连接工具等。然后你需要定义“好”的标准，比如定义一组黄金评估指标（evals），这比听起来要难得多。

Evals are important. Evals are super important. Especially, like, audio evals. Evals are, like, extra hard to grade and get right. But, like, the bulk of the use case here is actually audio. And, like, we have, like, I don't know, five minute, like, call transfer, how do you actually know that the right thing happened? It's a pretty tough problem. Yeah, it's pretty tough. And then, you know, actually nailing down, like, the quality of the customer experience, like, you know, until it feels natural. And here, latency and interruptions. They're really, like, you know, important part. We shipped in GA an API, real-time API. I think it was last week. A couple of weeks ago, yeah. Yeah, it was just last week, I think. Which is, like, a beautiful work of engineering...

评估（Evals）非常重要，尤其是音频评估，它们更难评分和把握正确。但这里的核心用例是音频。比如一个五分钟的通话转接，你如何确定正确的事情发生了？这是一个非常棘手的问题。然后是确保客户体验的质量，直到它感觉自然为止。延迟和中断非常重要。我们上周向 GA 推出了实时 API，这是一项出色的工程成果。

### T-Mobile 案例对模型改进的反哺

Yeah. Cobbling all that together, you know, and you get, like, you know, a really good experience. Yeah, that's a lot more than just models. Yeah. One actually really great thing that I think we've gotten from the T-Mobile experience is actually working with them to improve our models themselves. So for example, the last real-time GA last week, we obviously released a new snapshot, the GA snapshot. And a lot of the improvements that we actually got into the model came out of, you know, the learnings that we have from T-Mobile. It brings in a lot of other changes from other customers, but because we were so deeply embedded into T-Mobile and we were able to understand what good looks like for them, we were able to bring that to some of our models.

将所有这些整合在一起，你就得到了一个非常好的体验。这远不止是模型本身。我们从 T-Mobile 体验中获得的一件真正伟大的事情是，我们能够与他们合作来改进我们自己的模型。例如，上周发布的实时 API 版本中，许多改进就来自于我们在 T-Mobile 案例中学到的经验。

### 客户案例二：Amgen——加速药物研发

Is there another one that you guys can share? I like a lot Amgen. Amgen, the healthcare business. Amgen, yeah. So, we are working quite a bit with healthcare companies. Amgen is one of the leading, like, healthcare companies. They specialize into drugs for cancer or, like, you know, inflammatory diseases that are based out of LA. And we've been working, essentially, with Amgen to essentially speed up, like, the drug, like development and the conversation process. So, you know, the sort of the north star is, like, pretty bold.

你们能分享另一个案例吗？我很喜欢 Amgen，这家医疗保健公司。我们与许多医疗保健公司合作，Amgen 是领先的公司之一，他们专注于抗癌或抗炎药物。我们基本上与 Amgen 合作，以加速药物开发和审批流程。

And it's really interesting, like, when I look at those healthcare companies, I feel like they are two big buckets of needs. One is, like, pure R&D. It's like, you know, you're seeing, like, a massive amount of data and, like, you have super smart scientists who are trying to, you know, come by, test out things, you know. So, that's one bucket. A second bucket is, like, you know, much more, like, you know, common across other industries. It's, like, pure, like, you know, admin, document authoring, document-scribing work... And you know, when we looked at essentially those problems, what we knew, what models were capable of, we saw, like, you know, a ton of benefits, a ton of opportunities to automate and, you know, augment essentially the work of those teams. And so, yeah, Amgen has been, like, a top customer of GPT-5, for instance.

有趣的是，医疗保健公司的需求主要分为两类：一是纯粹的研发，涉及海量数据和顶尖科学家；二是与许多其他行业相似的行政工作，例如文档撰写和记录。在评估了这些问题以及模型的潜力后，我们看到了大量自动化和增强这些团队工作的机会。因此，Amgen 已经成为 GPT-5 的顶级客户之一。

### 客户案例三：洛斯阿拉莫斯国家实验室的定制化部署

I know you had one as well. So one of my favorite deployments that we've done more recently, actually, is with the Los Alamos National Labs. So this is the, like, government, national research lab that the U.S. government is running in Los Alamos, New Mexico. It's also where, you know, the Manhattan Project happened back in the 40s and 50s... This one is very interesting because one, just the depth of impact here is, like, unimaginable for me... But, you know, obviously they're doing a lot of actual new research there, so a lot of new science. They're doing a lot of stuff with our Defense Department and Defense use cases as well. So very intense, you know, very intense stuff.

我知道你们也有一个案例。我最近最喜欢的部署之一是与洛斯阿拉莫斯国家实验室（Los Alamos National Labs）合作。这是一个由美国政府运营的国家研究实验室，曼哈顿计划就发生在那里。这个案例非常有趣，因为其影响深度对我来说是难以想象的，他们正在进行大量新的研究和国防相关的应用。

But the other thing that's actually very interesting about this one was that it's also a story of a very, like, bespoke and, like, new type of deployment that we've done. So because they are so, they're a government lab, they're so, you know, restrictive and high security and high clearance with a lot of their things, we couldn't just do a normal deployment with them... And so we actually did a custom on-prem deployment with them onto one of their supercomputers called Venado. And so this actually involves a bunch of, you know, very bespoke work with some FDEs, also with a lot of our developer team, to actually bring one of our reasoning models, o3, into their laboratory, into an air-gapped, you know, supercomputer Venado and actually deploy it and get it installed to work on their hardware...

但有趣的是，这也是我们进行的一种非常定制化和新型的部署。因为他们是政府实验室，安全级别和限制非常高，我们不能做正常的部署。所以我们为他们做了一次定制化的本地部署，安装在他们名为 Venado 的超级计算机上。这涉及 FDE 团队和开发者团队的大量定制工作，我们将我们的推理模型 o3 部署到他们的实验室中，部署到一个气隙（air-gapped）的超级计算机上。

### 成功企业部署的关键要素

Fascinating. I mean, we've just gone through three pretty large scale enterprise deployments, right, which might touch tens if not hundreds of millions of people. But there was this on the other side of this is the MIT report that came out a couple of weeks ago. 95% of AI deployments don't work. A bunch of, you know, scary headlines... Put this in perspective, like for every deployment that works, there's presumably a bunch that don't work. So maybe we can, you know, maybe talk about that. Like, what does it take to build a successful enterprise deployment...?

太棒了。我们刚刚回顾了三个大规模的企业部署，它们可能影响到数千万甚至数亿人。但另一方面，MIT 几周前发布了一份报告，称 95% 的 AI 部署都失败了。这引发了一些令人担忧的头条新闻……让我们换个角度看，每有一个成功的部署，很可能就有许多失败的部署。也许我们可以谈谈，要建立一个成功的企业部署需要什么？

Number one is like the interesting combination of like top down like buy in and like enabling like, you know, very clear group of like a tiger team, essentially, like, you know, the enterprise which sometimes a mix of like OpenAI, like, you know, enterprise employee. So, you know, typically, like, you know, you take like T-Mobile, like the top leadership was like extremely boring, like it's a priority. But then letting the team like, you know, organize and be like, okay, if you want to start small, start small, you know, and then you can scale it up, essentially. So that would be part number one. So top down buying and a bottom called a tiger team.

第一个要素是高层支持和“老虎团队”（Tiger Team）的组合。这个团队通常由 OpenAI 员工和企业员工组成。以 T-Mobile 为例，高层领导非常明确地将其视为优先事项，但同时允许团队自行组织，可以从小处着手，然后逐步扩展。所以，自上而下的支持和一个由技术和机构知识专家组成的“老虎团队”是关键。

Tiger team, you know, people like, you know, a mix of like technical skills and like people who just have like the institutional knowledge, you know, it's really funny, like in the enterprise, like customer support, a good example, like what we found is that the vast majority of the knowledge is in people's heads. Right. Right. Which is probably like a thing that, you know, we have these like in general, but like, you know, you take a customer support, you would think that, you know, everything is like perfectly documented, etc. The reality is like the standard like operating procedures, like the SOPs are larger than people said.

在企业中，知识的绝大部分都在人们的脑海中，而不是完美记录在文档中。因此，除非你有技术和主题专家的混合团队，否则很难让项目落地。

Two would be evals first. Like, whatever we define as good evals, like that gives like a clearly clear common goal for people to hit. Whenever, like, you know, the customer like fails to come up with good evals, it's a moving target. Essentially, you know, if you've made it or not. And you know, evals are much harder than what it looks to get done. And evals also oftentimes need to come up bottom up, right? Because all of these things are kind of in people's heads, in the actual operator's heads. Like it's actually very hard to have a top-down mandate of like, you got like, this is how the evals should look. A lot of it needs the bottoms-up adoption.

第二是先做评估（evals）。我们定义的“好的评估”能给团队一个明确的共同目标。如果客户无法提供好的评估，目标就会变成一个移动的目标。评估比看起来要难得多，而且通常需要自下而上地制定，因为它源于一线操作人员的经验。

The last thing is, you know, you want to help climb, essentially. You have your evals, the goal is to get to 99%. You start at like, you know, 46. You know, how do you get there? And here, frankly, I think oftentimes, like, you know, a mix of like, like, I will say like almost wisdom from people who've done it before. Like you know, a lot of that is like, you know, like art, sometimes more than science. Like, you know, knowing like the course of the model, the behavior, sometimes we even need to fine tune ourselves, the models, you know, when there are some clear limitation and, you know, being patient, getting your way, you know, up there and then, you know, ship.

最后是如何“攀登”——你从 46% 的评估分数开始，如何达到 99% 的目标？这往往需要依靠那些有经验的人的智慧，这更像是一种艺术而非科学。有时我们需要微调模型，同时保持耐心，逐步提升。

### GPT-5 的智能与行为权衡

You've got the reasoning, the brain. And then you've got the scaffolding, the last mile of making things work. Maybe we can dive into the second part, which is the reasoning, which is the juice that you guys are building with GPT-5, most recently. Huge endeavor, congrats. The first time you guys have launched a full system, not a model or a set of models, but a full system. Talk about that. I mean, the benchmarks all seem so saturated. Like clearly it was more than just benchmarks that you were focused on.

你们谈到了推理（Reasoning），也就是大脑，以及“脚手架”，即实现功能的最后一英里。也许我们可以深入探讨第二部分，即推理能力，这是你们用 GPT-5 构建的核心。这是你们第一次发布一个完整的系统，而不仅仅是模型。谈谈这个。基准测试似乎已经饱和了，很明显你们关注的不仅仅是基准测试。

It's been the work of love of many people for a long time. And to your point, I think GPT-5 is amazingly intelligent. You look at the benchmark, like the suite bench and the likes, it is going pretty high. But I think to me equally important and impactful was, I would say, the craft, like the style, the tone, the behavior of the model. So capabilities intelligence and behavior of the model.

这是许多人长期努力的结果。GPT-5 极其智能，基准测试得分很高。但对我来说，同样重要和有影响力的，是模型的“工艺”——风格、语调和行为。即能力、智能和行为。

On the behavior of the model, I think it's the first model, like large model release for which we have worked so closely with a bunch of customers for like month and month, essentially, to better understand what are the concrete blocks, what are the concrete blockers of the model. And often it's not about having a model which is way more intelligent, a model which is a model that better follows instruction, a model that is more likely to say no when he doesn't know about something. And so that super close customer feedback loop on GPT-5 was pretty impressive to see.

在模型行为方面，这是我们第一次在大型模型发布中，与大量客户紧密合作数月，以了解具体的阻碍因素。通常，关键不在于模型更智能，而在于它是否能更好地遵循指令，以及在不知道答案时是否更可能说“不”。GPT-5 紧密的客户反馈循环非常令人印象深刻。

### 权衡：推理时间与性能

Are there trade-offs that you made as you were going through it? Maybe what are the hardest trade-offs you made as you were building GPT-5? I actually think a very clear trade-off, which I honestly think we are still iterating on, is the trade-off between the reasoning tokens and how long it thinks versus performance.

在构建 GPT-5 的过程中，你们做出了哪些艰难的权衡？我认为一个非常明确的权衡是推理 Token 数量（思考时间）与性能之间的权衡。

And honestly, this is something that I think we've been working on with our customers since the launch of the reasoning models, which is these models are so, so smart, especially if you give it all this thinking time. I think the feedback I've been seeing around GPT-5 Pro has been pretty crazy, too... But the trade-off here is you're waiting for 10 minutes. It's quite a long time. And so these things just get so smart with more inference time. But on the product builder on the API side for some of these business use cases, I think it's pretty tough to manage that trade-off.

坦白说，自从推理模型发布以来，我们一直在与客户讨论这个问题：如果你给模型足够的思考时间，它会变得非常非常聪明。GPT-5 Pro 的反馈非常惊人……但权衡是，你可能需要等待 10 分钟。对于某些企业用例的 API 来说，管理这种权衡非常困难。

For us, it's been difficult to figure out where we want to fall on that spectrum. So we've had to make some trade-offs on how much of the model think versus how intelligent should it get. Because as a product builder, there's a real latency trade-off that you have to deal with where your user might not be happy waiting 10 minutes for the best answer in the world. It might be more okay with the substandard answer in no wait at all.

我们很难确定在这个范围内应该如何定位。我们不得不在模型思考的程度和智能程度之间做出权衡。因为作为产品构建者，延迟是一个现实问题，用户可能不愿意等 10 分钟来获得最好的答案，他们可能更接受一个稍逊色但无需等待的答案。

### GPT-5 的积极反馈与建设性反馈

Well, four weeks in, GPT-5, how's the feedback? Yeah, I think feedback has been very positive, especially on the platform side... The model is extremely good at coding, extremely good at kind of like reasoning through different tasks. But especially for like coding use cases, especially at the, you know, when it thinks for a while, it'll usually solve problems that no other models can solve. So I think that's been a big positive point of feedback.

GPT-5 发布四周了，反馈如何？总的来说非常积极，尤其是在平台方面……模型在编程和推理不同任务方面非常出色。特别是编程用例，当它思考一段时间后，通常能解决其他模型无法解决的问题。

The kind of robustness and the reduction in hallucinations has been a really big positive feedback. Yeah, yeah, yeah. I think there's an eval that showed that the hallucinations basically went to zero for a lot of this. It's not perfect, there's still a lot of work to be done, but I think because of the reasoning in there too, it just makes the model more likely to say no, less likely to hallucinate answers. So that's been something that people have really liked as well.

鲁棒性和幻觉减少是另一个非常积极的反馈点。我们有评估显示，许多领域的幻觉几乎为零。虽然不完美，但由于推理能力的增强，模型更倾向于说“我不知道”，从而减少了幻觉。

Other bit of feedback has been around instruction following. So it's really good at instruction following. This almost bleeds into like the constructive feedback that we're working on where for that it's so good at construction following, that instruction following that people need to tweak their prompts or it's almost like too literal. That's why it's an interesting trade-off actually, because you know when you ask people developers like what do you want, like you want the model for instructions, of course, you know. But once you have a model which is like, that is like extremely literal essentially, that essentially forces you to express extremely clearly what you want, otherwise the model may go sideways.

另一个反馈是关于指令遵循（instruction following）。模型在遵循指令方面非常出色，以至于有时会变得过于字面化，这迫使用户需要调整提示词。如果你要求它极其简洁，它可能会过度简化，只用一个词来回答，这反而太短了。

### 多模态进展：实时语音 API 的突破

On the multimodality side of it, obviously you guys announced the real time API last week. I saw T-Mobile was one of the featured customers on there. Talk about that, like how obviously the text models are leading the pack, but then we got audio and we got video. Talk about the progress on the multimodal models.

在多模态方面，你们上周发布了实时 API，T-Mobile 是特色客户之一。请谈谈进展，文本模型目前领先，但音频和视频的进展如何？

On voice, image, video, frankly, the last generation models have been unlocking quite a few cool use cases. One of the feedback that we've received is because text was so much leading the pack on the intelligence, people felt like in in voice that the model was somewhat a little less intelligent. Until you actually see it, it does feel weird to have a better answer on text versus voice. That's pretty much the focus that we have at the moment. I think we filled part of that gap, but not the full gap for sure. I think catching up, I would say with the text would be one.

在语音、图像、视频方面，上一代模型已经解锁了不少酷炫的用例。我们收到反馈，由于文本模型的智能领先太多，人们觉得语音模型的智能性稍逊一筹。我认为我们目前正在努力缩小与文本模型的差距。

A second one, which is absolutely fascinating, is the model is excellent at the moment on easy casual conversation, talk to your coach, your therapist. We basically had to teach the model to speak essentially better in actual work economically valuable setups. To give an example, the model has to be able to understand what an SSN is and what it's meant to spell an SSN. If one digit is fuzzy, it actually has to repeat versus guess.

第二个非常有趣的点是，模型目前非常擅长轻松随意的对话，比如与教练或治疗师交谈。但我们必须教会模型在实际的、具有经济价值的工作场景中更好地“说话”。例如，模型必须理解什么是 SSN（社会安全号码），以及在其中一个数字模糊时，它应该重复而不是猜测。

### 实时 API 如何取代“拼接模型”

That's an excellent question. The reason why we should do real-time API is that we saw that for the stitch model. The stitch model. Yeah. The real-time API. The stitch. We call it a stitch together. Like a speech to text, thinking, text to speech. We saw essentially a couple of issues. One, slowness, like you know, more hops essentially. Two, loss of signal, like a close stitch model. The speech to text model is less intelligent. Yeah, you'd lead through the emotion. Exactly. Exactly. Right. Pauses.

这是一个极好的问题。我们做实时 API 的原因是看到了“拼接模型”存在的问题。拼接模型（Speech-to-Text -> Thinking -> Text-to-Speech）存在两个问题：一是慢，即增加了更多的中间环节；二是信号丢失，比如语音转文本模型不够智能，会丢失情绪和停顿等信号。

When you are doing actual voice, like phone calls, essentially, those signals are so important. One of the challenges that we have is what you mentioned, which is, it means a slightly different architecture, essentially, for text versus voice. That's something that we are actively working on. But I think it was the right call to start essentially with, let's make the voice experience like natural sounding to a point where essentially you're feeling comfortable putting in production and then working backward to unify the orchestration logic, essentially, across modalities.

在实际的电话通话中，这些信号至关重要。我们目前的一个挑战是，文本和语音需要不同的架构，但我们正在积极解决这个问题。我认为我们的首要任务是让语音体验自然到可以投入生产的程度，然后再反过来统一跨模态的编排逻辑。

To me, it's actually crazy that this works at all, let alone the fact that it can understand accents and tone and pauses and things like that, and then also be intelligent enough to handle a support call or something like that. If you've gone from text-in, text-out to voice-in, voice-out, that's pretty crazy.

对我来说，这个系统能工作本身就令人难以置信，更不用说它还能理解口音、语调、停顿，并能处理客服电话了。从文本输入/输出到语音输入/输出的转变，非常惊人。

### 模型定制：SFT 与强化微调（RFT）

Talk about what OpenAI offers enterprises who need a customized version of a great model to make it great for them. Yeah, so model customization is actually been something that we've invested very deeply in on the API platform since the very beginning. So even pre-ChatGPT days, we actually had a supervised fine-tuning API available... The most exciting thing actually I'd say around model customization, it obviously resonates quite well with customers because they want to be able to bring in your own custom data and create your own custom version of o3 or o4-mini or something or GPT-5 even suited to their own needs.

你们为需要定制化模型的企业提供了什么？模型定制一直是我们在 API 平台从一开始就投入巨资的地方。即使在 ChatGPT 出现之前，我们也提供了监督微调（Supervised Fine-Tuning, SFT） API。

The most recent development I think is very exciting has been the introduction of reinforcement fine-tuning. For something we announced late last year, I think in the 12 days of Christmas, we've GA'd it since and we're continuing to iterate on it. What is it, break it down for us? Yeah, so it's called, it's actually funny, I think we made up the term reinforcement fine-tuning. It's like not a real thing until we announced that. It's stuck now.

我认为最近最令人兴奋的发展是引入了强化微调（Reinforcement Fine-Tuning, RFT）。SFT 使用监督学习，需要大量的提示词/完成对（prompt completion pairs）。RFT 引入了强化学习（RL），虽然复杂得多，但也强大得多。

With RFT, the discussion is less of like creating a custom model that's specific to your own use case. It is, you can actually use your own data and actually crank the RL, yeah, turn the crank on RL to actually create a like best-in-class model for your own particular use case. And so that's kind of the main difference here. With RFT, the data set looks a little bit different. Instead of prompt completion pairs, you really need a set of tasks that are very gradable. You need a grader that is very objective that you can use here as well.

有了 RFT，重点不再是为特定用例定制模型，而是利用您自己的数据，通过调整 RL 的“曲柄”，为您的特定用例创建一个最佳模型。为此，您需要一组可评分的任务和一个客观的评分器。

### 投资观点：长短线选择

Let's jump into my favorite section, which is a rapid-fire question. We had a lot of great friends of ours send in some questions for you guys. We'll start with Altimeter's favorite game, which is a long, short game. Pick a business, an idea, a startup that you're long, and the same short that you would bet against that there's more hype than there's reality.

我们来进入我最喜欢的部分：快速问答。我们从 Altimeter 最喜欢的游戏开始，即长短线投资选择。选一个你长期看好的企业或想法，以及一个你认为被过度炒作的领域。

My long is actually not in the AI space, so this is going to be slightly different. Wow. Here we go. My short is, though, in the AI space. So I'm actually extremely long esports. And so what I mean by "esports" is the entire, like, professional gaming industry that's emerging around video games. I actually think there's incredible untapped potential in esports and incredible growth to be had in this area.

我的长期看好领域不在 AI 领域。但我看空的领域在 AI 领域。我对电子竞技（esports）非常看好。这意味着围绕视频游戏兴起的整个职业游戏产业。我认为电子竞技具有巨大的未开发潜力和增长空间。

My short, my short's a little spicy, which is I'm short on the entire category of like tooling around AI products. And so this encapsulates a lot of different things. Kind of cheating because some of these, you know, I think are starting to play out already. But I think like two years ago, it was maybe like evals products or like frameworks or vector stores. I'm pretty short those. I think nowadays there's a lot of additional excitement around other tooling around AI models. So RL environments, I think, are really big right now as well. Unfortunately, I'm very short on those.

我的看空有点辛辣，我看空整个围绕 AI 产品的“工具”（tooling）类别。两年前可能是评估产品、框架或向量存储，我看空它们。现在围绕 AI 模型的其他工具，比如 RL 环境也很火爆，但我非常看空它们。

If the last two years have shown us anything, the space is evolving so quickly and it's so difficult to try and like adapt and understand what the exact stack is that will really carry through to the next generation of models. I think that just makes it very difficult when you're in the tooling space because, you know, today's really hot framework or really hot tool might just not get used in the next generation of models.

过去两年表明，这个领域发展太快，很难确定确切的技术栈能支持到下一代模型。这使得工具领域非常困难，因为今天的热门框架或工具可能在下一代模型中就被淘汰了。

Olivier, over to you, sir. Long short. I've been thinking a lot about education for the past month in the context of kids. I'm pretty short on any education which basically emphasizes human memorization at that point. Frankly, I think healthcare is probably the industry that will benefit the most from AI in the next like year or two. I would say more. I think all the ingredients are here for a perfect storm. A huge amount of like structured and structural data...

奥利维尔，轮到你了。我在思考教育领域。我看空任何强调人类记忆的教育。坦率地说，我认为医疗保健是未来一两年内从 AI 中受益最大的行业。我认为所有要素都已具备，形成了一场完美的风暴，比如大量的结构化数据，而 AI 模型非常擅长消化这些数据。

### 潜力工具：对 Granola 和 Codex CLI 的青睐

Next one. Favorite underrated AI tool other than ChatGPT maybe. I love Granola. Oh man, you stole mine. You stole my answer. Two votes for Granola. ... The easy answer for me is Codex. That as a software engineer. It's just like, it's gone so good recently. Codex CLI, especially with GPT-5.

下一个问题。除了 ChatGPT 之外，最喜欢的被低估的 AI 工具是什么？我喜欢 Granola。哦，你偷了我的答案。Granola 获得两票。对我这个软件工程师来说，最简单的答案是 Codex，尤其是结合 GPT-5 之后的 Codex CLI。

What's changed about Codex? Because, you know, Codex has also been through a journey. Codex has been around for a bit. I remember, like, it's been launched for, like, more than over a year ago... I'm talking about our coding product within ChatGPT, which are the Codex Cloud offering, and then also Codex CLI. So, actually, maybe if I were to narrow my answer a little bit more, it's Codex CLI, which I've really, really liked. I like the local environment set up. The thing that's actually made it really useful in the last, I'd say, like, month or so is, one, I think the team has done a really good job of just, like, getting rid of all the paper cuts... And then the second thing, honestly, is GPT-5. I just think GPT-5 really allows the product to shine.

Codex 发生了什么变化？Codex 已经存在一段时间了。我指的是 ChatGPT 中的编码产品，包括 Codex Cloud 和 Codex CLI。如果让我更具体一点，我非常喜欢 Codex CLI。真正让它在过去一个月变得有用的，一是团队消除了所有小问题，让它用起来很愉快；二是 GPT-5，它让产品真正大放异彩。

### 软件工程师的未来与角色重塑

Will there be more software engineers in 10 years or less? There's about 40, 50 million... full-time, professional software engineers. Yeah, because it's a hard one, because, like, I think without a doubt there's going to be a lot more software engineering going on. Yes, of course.

十年后软件工程师会更多还是更少？是指全职专业软件工程师吗？我认为毫无疑问会有更多的软件工程工作，是的，当然。

I think that highlights this. It was a really touching story. It was a Reddit post about someone who has a brother who's non-verbal... Basically a custom software application just for them. Because of that, he now has this custom setup that was written by his brother and allows him to browse the internet... The amount of code, the amount of building that'll happen, I think, is just going to go through an incredible transformation. I'm not sure what that means for software engineers like myself.

我记得一篇感人的 Reddit 帖子，讲述了一个人利用 ChatGPT 为他不会说话的兄弟创建了一套量身定制的工具和应用程序。因此，未来发生的代码量和构建量将经历巨大的变革。我不太确定这对像我一样的软件工程师意味着什么。

I buy completely a thesis that there is a massive software shortage in the world. We've been sort of accepting it for the past 20 years. But the goal of software was never to be that super rigid, super hard to build artifact. It was to be customized, malleable. And so I expect that we'll see way more-- sort of a reconfiguration of people's job and skillset where way more people code. I expect that product managers are going to code more and more, for instance.

我完全赞同世界上存在巨大的软件短缺这一观点。软件的目标从来不是成为一个僵硬、难构建的产物，而是可定制、可塑的。我预计人们的工作和技能结构将发生重组，更多的人会写代码。例如，我预计产品经理会写更多的代码。

### 对年轻人的职业建议

Advice for high school students who are just starting out their career. My advice is-- I don't know. Maybe it's evergreen. Prioritize critical thinking above anything else. If you go in the field, which requires extremely high critical thinking, like skills-- I don't know, math, physics, or maybe philosophy's in that bucket-- you will be fine regardless.

给刚开始职业生涯的高中生什么建议？我的建议是——也许是永恒的建议：把批判性思维放在一切之上。如果你从事需要极高批判性思维的领域，比如数学、物理或哲学，无论如何你都会过得很好。

What's a good way to sharpen critical thinking? Use ChatGPT and have it test you. That's a tricky test. Having a work-class tutor who essentially knows how to put the bar about 20% of what you can do all the time is actually probably a really good way to do it.

磨练批判性思维的好方法是什么？使用 ChatGPT 让你接受测试。拥有一个世界级的导师，能让你时刻保持在能力范围以上一点点的水平，这可能是一个很好的方式。

I think the advice would be don't underestimate how much of an advantage you have relative to the rest of the world right now because of how AI native you might be or how in the ways of the tools you are... My hunch is high schoolers, college students, when they come into the workplace, they're going to have actually a huge leg up on how to use AI tools, how to actually transform the workplace.

我的建议是：不要低估你现在相对于世界上其他人所拥有的优势，因为你们可能是 AI 原生代，更熟悉这些工具……我的直觉是，高中生和大学生进入职场时，在如何使用 AI 工具、如何变革工作场所方面将占据巨大优势。

### 三年回顾：高光时刻与低谷（花、苞、刺）

In your OpenAI journey, what has been the rose moment, your favorite moment, the bud moment where you're most excited about something, but still opportunity ahead, and the thorn, toughest moment of your three-year journey?

在你们的 OpenAI 之旅中，你们的“花”（高光时刻）、“苞”（充满期待但仍有机遇的时刻）和“刺”（最艰难的时刻）分别是什么？

The thorn is easy for me. What we call the blip, which is the coup of the board. That was a really tough moment... I feel it made OpenAI stronger for real now, essentially, when they look after the fact.

对我来说，“刺”很简单，就是董事会政变（the blip）。那是一个非常艰难的时刻……但事后来看，它确实让 OpenAI 变得更强大了。

I have a separate worst moment, which was the big outage that we had in December of last year. You remember. I do. It was like a multi-hour outage. Really highlights to us how essential of almost like a utility the API was. That was just really tough just from a customer trust perspective.

我有一个单独的最糟糕的时刻，是去年 12 月的大规模宕机。这凸显了 API 对我们来说是多么像一种公用事业。从客户信任的角度来看，那段时期非常艰难。

On the happy side, like on the roses, I think I have two of them. The first one would be GPT-5 was really good. The sprint up to GPT-5, I think really showed the best of OpenAI. Having cutting edge, science research, extreme customer focus, extreme infrastructure and inference talent. The fact that we were able to ship such a big model and scale it to many, many, many tokens per minute almost immediately, I think speaks to it. With no outages.

在高兴的一面，我有两个“花”的时刻。第一个是 GPT-5 表现出色。冲刺 GPT-5 的过程展现了 OpenAI 的最佳状态：前沿的科学研究、极度的客户专注、顶尖的基础设施和推理人才。我们能够立即发布如此大的模型并将其扩展到每分钟数万亿 Token，而且没有宕机。

The second rose happy moment for me would be the first dev day was really fun. It felt like a coming of age, like OpenAI. We are embracing that we have a huge community of developers. We are going to ship models and products.

我第二个高兴的时刻是第一届开发者日（DevDay），感觉像是 OpenAI 的一个“成年礼”，我们拥抱了庞大的开发者社区，并准备发布模型和产品。

That was actually going to be mine as well. So I'll just piggy back off of that, which is the very first dev day, 2023 November. I remember it... I just remember being in the back of the audience, sitting with the team, and waiting for the demo to happen. Once it finished happening, we all just let out a huge sigh of relief.

那也将是我的“花”的时刻，就是 2023 年 11 月的第一次 DevDay。我记得当时我们团队在后台，等待 Sam 的主题演讲中的演示开始。演示成功后，我们都松了一大口气。

### AGI 认同时刻

I assume you guys are, but please tell me if you're AGI-pilled, yes or no? And if so, what was the moment that got you there? What was your aha moment? When did you feel the AGI? I think I'm AGI-pilled? I think I'm AGI-pilled. You're definitely AGI-pilled.

我假设你们是 AGI 坚信者（AGI-pilled），是或不是？如果是，是哪个瞬间让你有了这种感觉？

The first one was the realization in 2023 that I would never need to code manually like ever ever again... The second feel the AGI moment for me was maybe the progress on voice and multimodality. Like text, like at some point you get used to it... Voice makes it real. But once you start actually talking to something that actually understands your tone, like understand my accent like in French, it felt like sort of a moment, like okay, machines are going beyond like cold, mechanical, deterministic, like you know, like logic to something like much more like emotional and like, you know, tangible.

对我来说，第一个 AGI 瞬间是 2023 年意识到我再也不需要手动写代码了。第二个 AGI 瞬间可能是语音和多模态的进展。当你可以和能理解你的语调、你的口音（比如法语口音）的东西交谈时，感觉机器正在超越冰冷、机械、确定的逻辑，向更具情感和有形的方向发展。

For me, I think they actually line up with two like general breakthroughs. So the first one was right when I joined the company in September 2022. It was pre-ChatGPT. About the time GPT-4 already existed internally. And I think we were trying to figure out how to deploy... going from nothing to GPT-4 was just the most mind-blowing experience for me.

对我来说，AGI 瞬间与两个主要突破相吻合。第一个是我 2022 年 9 月加入公司时，那时 GPT-4 已经在内部存在。从一无所有到 GPT-4 的飞跃对我来说是最令人震惊的体验。

And then the other one was, like, is the other breakthrough, which is like the reasoning paradigm. I actually think the purest representation of that for me was deep research. And throwing, like, asking it to really look up things that I didn't think it would be able to know. And seeing it think through all of it, be really persistent with the search, get really detailed with the write-up and all of that. That was pretty crazy.

另一个突破是推理范式。对我来说，最纯粹的体现是深度研究（Deep Research），我让它查找一些我认为它不可能知道的信息，看到它能坚持搜索、详细撰写报告，那太疯狂了。