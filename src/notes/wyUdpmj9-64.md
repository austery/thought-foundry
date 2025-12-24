---
area: tech-engineering
author: Lei
category: ai-ml
companies_orgs: []
date: 2025-09-25
draft: true
guest: ''
insight: null
layout: post.njk
people:
- Ralph J. ABRY
- Aporna DENEKARAN
- Laurent
- Steve Morren
- Tuana Çelik
- Paige Bailey
- Neil ZEGHDOUD
- Yann Lechelle
- Emil Eifrem
- Tushar Jain
- Martin Woodward
- Andreas Blattmann
products_models: []
project:
- ai-impact-analysis
series: null
source: https://www.youtube.com/watch?v=wyUdpmj9-64
speaker: AI Engineer
status: evergreen
summary: AI工程师巴黎峰会第二天的主题演讲摘要，内容涵盖从AI基础设施和实时语音AI的演进，到提示学习、构建NotebookLM开源替代方案等前沿技术，以及大语言模型突破性的注意力机制。
tags:
- ai-infrastructure
- engineering
- llm
- system
title: AI工程师巴黎峰会：第二天重点回顾
---

### 开场致辞

Ralph J. ABRY: Good morning, Paris. How's it going, guys? Did you guys enjoy yesterday? If you liked yesterday, today is going to be incredible. You're going to just love it. So, I'm very happy to have you here today for day two. Yesterday was a fantastic day. We had an amazing opening ceremony with Swix and Ben, co-founder of AI engineers. And we had a great talk also from Mistral AI who talked to us about the problems that they face in the enterprise world, which I found fascinating.

拉尔夫·J·阿布里：早上好，巴黎。大家好吗？昨天的活动大家还喜欢吗？如果你们喜欢昨天，那么今天将会是不可思议的一天。你们一定会爱上今天的。所以，我很高兴今天第二天还能见到大家。昨天是精彩的一天。我们有Swix和Ben（AI工程师的联合创始人）带来的精彩开幕式。我们还听了Mistral AI的精彩演讲，他们谈到了在企业界面临的问题，我觉得非常吸引人。

Ralph J. ABRY: Um and we also had a welcome party which was incredible in my opinion. I got to admit these are the best moments in these type of conferences is where you get to meet everybody where you get to meet attendees, sponsors and all the engineers and the founders and you can hear it a little bit in my voice. I had a few chats here and there. But these are my favorite moments.

拉尔夫·J·阿布里：我们还有一个欢迎派对，在我看来非常棒。我得承认，这类会议中最美好的时刻就是你能见到每一个人，见到与会者、赞助商、所有的工程师和创始人。从我的声音里你可能也听得出来，我到处聊了聊。但这些是我最喜欢的时刻。

Ralph J. ABRY: So, we have an amazing lineup of speakers for you today. And we're going to cover topics from agents, MCP, open models, generative media, and more. And I've seen some of the talks, and I have to say they're incredible. So, you got to be here. But before we get started, I would like to invite CEO of Koyeb, Yann Lechelle.

拉尔夫·J·阿布里：今天我们为您准备了非常棒的演讲嘉宾阵容。我们将涵盖从**Agent**（智能体：能够在环境中自主感知、决策和行动的计算实体）、**MCP**（模型组件协议：一种允许AI模型动态发现和使用外部工具的协议）、开放模型、生成式媒体等多个主题。我看过一些演讲，必须说，它们非常精彩。所以，你们一定要在场。但在我们开始之前，我想邀请Koyeb的首席执行官Yann Lechelle上台。

### Yann Lechelle - Koyeb CEO

Yann Lechelle: So false starts but here we are for the second day of this amazing event this conference that we assembled. I want to speak a bit about content. So you might have noticed we went from one track to five tracks which is quite incredible in terms of coordination. We have over 35 speakers coming today coming from all part of the world. Some who flew over from the US landed yesterday from Sweden. Emil coming with us just after. And I hope you'll enjoy it.

Yann Lechelle：虽然开场有些波折，但我们还是迎来了这个我们共同组织的精彩活动的第二天。我想谈谈内容。你们可能已经注意到了，我们从一个分会场扩展到了五个，这在协调上是相当了不起的。今天我们有超过35位来自世界各地的演讲者。有些是从美国飞来的，昨天刚从瑞典抵达。Emil紧随其后也会上台。我希望你们会喜欢。

Yann Lechelle: Um one key thing the discovery tracks are also amazing. We had over 500 submissions on the CFP. So you will find incredible content. And if you cannot attend these sessions all of the sessions will be recorded and available on our YouTube channel. So don't fear missing out. You'll be able to see them all.

Yann Lechelle：一个关键点是，探索分会场也非常精彩。我们的议题征集收到了超过500份投稿。所以你们会发现非常棒的内容。如果你们无法参加这些会议，所有的会议都会被录制并上传到我们的YouTube频道。所以不用担心错过，你们将能够看到全部内容。

Yann Lechelle: Um, one last thing I wanted to say is to thank you all again for for joining us. Um, one thing you need to be aware is Koyeb is our serverless platform. We're providing high performance serverless infrastructure to simplify application deployments. You will find our entire team on site today. So, we have two booths there. You're welcome to stop and chat with them. And now I'm going to hand it over back for the next stage of this morning.

Yann Lechelle：最后我想说的是，再次感谢大家加入我们。有一件事需要大家了解，Koyeb是我们的无服务器平台。我们提供高性能的无服务器基础设施，以简化应用程序的部署。今天我们整个团队都会在现场。我们在那里有两个展位，欢迎大家随时停下来和他们聊聊。现在我将把舞台交还给今天上午的下一位。

Ralph J. ABRY: Thank you, Yan. Let's give it up for Yan. If you want to have a look at the full schedule, please download the app where you can find everything that you got to know about all the tracks. So this is the main stage, but we have three other stages. We have discovery one, discovery 2, and we have a lot of workshops and we also have coffee at the expo offered by our friends from Tinfoil.

拉尔夫·J·阿布里：谢谢你，Yann。让我们为Yann鼓掌。如果你想查看完整的日程安排，请下载应用程序，在那里你可以找到所有分会场的所有信息。这里是主舞台，但我们还有另外三个舞台。我们有探索一区、探索二区，还有很多工作坊，并且在博览会区，我们的朋友Tinfoil还为大家提供了咖啡。

### Emil Eifrem - Neo4j CEO

Ralph J. ABRY: our next speaker is co-founder and CEO of Neo4j. His work helped investigative journalists cracked the Panama papers and enabled NASA to reach Mars two years ahead of schedule and drove breakthroughs in cancer research and fraud detection and so many more areas. Please join me in welcoming to the stage CEO of Neo4j, Emil Eifrem.

拉尔夫·J·阿布里：我们的下一位演讲者是Neo4j的联合创始人兼首席执行官。他的工作曾帮助调查记者破解“巴拿马文件”，让NASA提前两年到达火星，并推动了癌症研究和欺诈检测等众多领域的突破。请大家和我一起欢迎Neo4j的CEO，Emil Eifrem登台。

Emil Eifrem: Bonjour. That's all the French that I know. My apologies. I have a French chief of staff. I have French investors. My daughter is learning French. So, I'll pick it up for next year. I'll be able to say a little bit more. I promise. So the slide here this is says the state of AI engineering. I'm not going to talk about the state of AI engineering. I don't think that's my talk to give.

埃米尔·艾弗雷姆：Bonjour。这是我会的所有法语了，非常抱歉。我有一个法国籍的幕僚长，有法国的投资者，我的女儿正在学法语。所以，明年我会学一些。到时候我就能多说一点了，我保证。这张幻灯片上写的是AI工程的现状。我不会谈论AI工程的现状，我觉得那不是我该讲的话题。

Emil Eifrem: But I spent two decades of my life in databases and knowledge representation. And so instead I'm going to talk to you all about managing state in AI engineering. And more specifically over the last couple of years we've observed hundreds of projects built inside of big companies and small companies building AI applications. And I'm going to share some of the observations from that.

埃米尔·艾弗雷姆：但是，我在数据库和知识表示领域花了二十年时间。所以，我将和大家谈谈在AI工程中如何管理状态。更具体地说，在过去的几年里，我们观察了数百个在大公司和小型公司中构建AI应用的项目。我将分享一些从中得到的观察。

Emil Eifrem: We've identified four properties of a kick-ass data layer for AI applications. The first property is I believe that in order to make it really easy to write AI applications that requires you to be able to have a data layer that in a very easy way manages unstructured and structured and semistructured all three types of information in a single data layer and do that well.

埃米尔·艾弗雷姆：我们总结出了一个优秀的AI应用数据层所具备的四个特性。第一个特性是，我相信，为了能真正轻松地编写AI应用，你需要一个能够在一个单一数据层中，以非常简单的方式同时管理非结构化、结构化和半结构化这三种类型信息的数据层，并且要做得很好。

Emil Eifrem: The second property of a kick-ass data layer for AI application I believe is the ability to consistently and reliably extract entities out of unstructured data.

埃米尔·艾弗雷姆：我认为一个优秀的AI应用数据层的第二个特性是，能够持续且可靠地从非结构化数据中提取实体的能力。

Emil Eifrem: I believe that the third property of a kickass data layer to make it really easy to write AI application is an ability to link entities across persistent agentic memory and into your application data which tends to come out of your ragged corpus.

埃米尔·艾弗雷姆：我相信，要让编写AI应用变得真正简单，一个优秀数据层的第三个特性是，能够跨持久化的智能体记忆链接实体，并将其链入你的应用数据中，而这些数据通常来自于你的**RAG**（检索增强生成：Retrieval-Augmented Generation，一种将外部知识库检索与大语言模型生成相结合的技术）语料库。

Emil Eifrem: So the fourth property of a kick-ass data layer of for AI applications is the ability to disambiguate between first party data and derived data so that we can handle it differently in the application.

埃米尔·艾弗雷姆：所以，一个优秀的AI应用数据层的第四个特性是，能够区分第一方数据和派生数据，以便我们可以在应用程序中对它们进行不同的处理。

Emil Eifrem: So I don't know if any of you are work in big enterprises and you're buyers of application software. I think I've seen this many many times happen where someone is in front of me a salesperson and they talk about okay here are the needs that you have and then magically they show up with a product that solves exactly those needs. So that is not what we're trying to do here these are our objective intellectually honest observations we don't have this at at Neo4j today but the reason why we spend so much of our cycles in focused on AI engineers is that this is of course where we want to go. And as the CEO I think I have some amount of influence at least over the product roadmap. So this is exactly what we're building towards at at Neoforj.

埃米尔·艾弗雷姆：我不知道在座的是否有人在大型企业工作并负责采购应用软件。我见过很多次这样的情景：一个销售人员站在我面前，谈论你的需求，然后神奇地拿出一个正好能解决这些需求的产品。我们在这里不是要这么做。这些是我们客观、真诚的观察。目前在Neo4j我们还没有实现这一切，但我们之所以投入如此多的精力专注于AI工程师，正是因为这当然是我们的发展方向。作为CEO，我想我至少对产品路线图有一些影响力。所以，这正是我们在Neo4j努力实现的目标。

### Tushar Jain - Docker VP of Product Engineering

Ralph J. ABRY: Our next speaker leads engineering at Docker. Please join me in welcoming to the stage VP of product engineering at Docker, Tushar Jane.

拉尔夫·J·阿布里：我们的下一位演讲者是Docker的工程负责人。请和我一起欢迎Docker的产品工程副总裁Tushar Jain登台。

Tushar Jain: I hope everyone here knows Docker. I'm going to assume you all do. And I hope you all agree that like a key thing Docker has done over the last 10 years is make it easy for all of us and all developers to adopt microservices and containers. bringing standards, easy tooling and trust in the ecosystem with things like official images and hub. We now see a need to do the same for agents and tools. And so that's what I'm going to talk to you about today.

图沙尔·贾恩：我希望在座的各位都了解Docker，我就假定大家都知道了。并且我希望大家都同意，Docker在过去十年里做的一件关键事情，就是让我们所有人和所有开发者都能轻松地采用微服务和容器，通过官方镜像和Hub等方式为生态系统带来了标准、易用的工具和信任。我们现在看到，为智能体和工具做同样的事情也很有必要。这就是我今天要和大家谈论的内容。

Tushar Jain: A framing I like and we like to think about this is agents of the new microservices. The same way we move from monoliths to microservices and needed containers, a similar shift is happening with agents. We're now going to move to agents calling each other. Containers are still the right paradigm, but we need to build on top of them. We need to build standardized packaging for agents that understand what agents are, what the dependencies are. We need trusted catalogues and we need to make it easy for everyone to share and use these.

图沙尔·贾恩：我喜欢并且我们也倾向于这样一种框架来思考这个问题：智能体是新的微服务。就像我们从单体应用转向微服务时需要容器一样，一个类似的转变正在智能体领域发生。我们现在将转向智能体之间相互调用的模式。容器仍然是正确的范式，但我们需要在其之上进行构建。我们需要为智能体构建标准化的打包方式，这种方式要能理解什么是智能体、它们的依赖是什么。我们需要可信的目录，并且需要让每个人都能轻松地分享和使用它们。

Tushar Jain: So today I want to briefly talk to you about two things we're doing in this space. First, this is an early exploration we're doing which is we think there should be standard packaging for agents. You can package them as containers, but it's not aware of what an agent is. We've open sourced C agent. It's an easy to use agent builder that makes it easy to build agents but importantly package them up as OCI artifacts and makes it easy for you to share them around via an OCI registry or hub.

图沙尔·贾恩：所以今天我想简单谈谈我们在这个领域正在做的两件事。首先，这是我们正在进行的一个早期探索，我们认为应该有针对智能体的标准打包方式。你可以将它们打包成容器，但这并不能感知智能体是什么。我们开源了C-Agent，这是一个易于使用的智能体构建器，它不仅能轻松构建智能体，更重要的是，能将它们打包成OCI工件，并让你能方便地通过OCI注册中心或Hub来分享它们。

Tushar Jain: Next, for agents to work well, you know, everyone here has heard about MCP. But we think for developers to use this to make it easy, there are a few things needed. one you need good packaging. Packaging local MCP servers as containers is we think the right thing. You get security with it, you need easy discovery and you need trust. And to do this we are with two things we've done that we'd love to talk to you about. First is our MCP catalog. You can go to hub.docker.com/mcp and you'll see a catalog of MCP servers. Think of this as the docker official images for MCP the trusted verified MCP servers.

图沙尔·贾恩：接下来，为了让智能体良好工作，在座的各位都听说过MCP。但我们认为，要让开发者能够轻松使用它，还需要几样东西。第一，你需要好的打包方式。我们认为，将本地MCP服务器打包成容器是正确的做法，这样能带来安全性。你需要便捷的发现机制，也需要信任。为此，我们做了两件事想和大家分享。首先是我们的MCP目录。你可以访问hub.docker.com/mcp，会看到一个MCP服务器的目录。可以把它想象成是MCP的Docker官方镜像，是可信、经过验证的MCP服务器。

Tushar Jain: And second in docker desktop we've added tooling to make it easy to use MCP servers because today you have to go configure each client using Claude desktop, Claude code, Gemini independently we can make it easy to discover these configure them once use them easily and add a bunch of trust on your laptop when you're doing it so you're not doing just npm installs random software with access to your whole machine but containerized secure.

图沙尔·贾恩：其次，在Docker Desktop中，我们增加了工具，使其能轻松使用MCP服务器。因为现在，你必须独立配置每一个客户端，比如Claude桌面版、Claude Code、Gemini。我们可以让发现这些服务变得简单，一次配置，轻松使用，并在你的笔记本电脑上增加一层信任，这样你就不是在随意地`npm install`一些能访问你整个机器的随机软件，而是在一个容器化的安全环境中操作。

### Martin Woodward - GitHub VP of Developer Relations

Ralph J. ABRY: Our next speaker leads the developer experience at community at HuggingFace. He's the vice president of developer relations at GitHub where he helped shape open source communities and has been involved with GitHub copilot since the very beginning. Today he's here to talk about the MCP protocol and and share some hard-earned lessons from running one of the most widely used MCP servers at GitHub scale. Please give a warm welcome to vice president of developer relations at GitHub, Martin Woodward.

拉尔夫·J·阿布里：我们的下一位演讲者在HuggingFace社区领导开发者体验。他是GitHub的开发者关系副总裁，在那里他帮助塑造了开源社区，并从一开始就参与了GitHub Copilot项目。今天，他将在这里谈论MCP协议，并分享在GitHub规模下运行一个最广泛使用的MCP服务器所获得的宝贵经验。请热烈欢迎GitHub开发者关系副总裁Martin Woodward。

Martin Woodward: My name is Martin Woodward. I work at GitHub and we're going to talk about our MCP server at GitHub. But actually what I'm going to be talking about mostly is the MCP protocol and how you can get involved in the MCP community.

马丁·伍德沃德：我的名字是马丁·伍德沃德。我在GitHub工作，我们将讨论GitHub的MCP服务器。但实际上，我主要要讲的是MCP协议以及你如何参与到MCP社区中来。

Martin Woodward: MCP has now become the API layer of AI. It's how it's going to work. I don't see anything else coming along here. There are complimentary things like A2A for being able to talk between agents. But in terms of tool calling, being able to do things, MCP is the protocol we're going to be using. MCP is fully open. It's available for everybody to use and talk to. So I would encourage everybody to get involved. If you want to be part of this community, now is the time to influence the direction of what we're probably all going to be relying on for the next 20 years.

马丁·伍德沃德：MCP现在已经成为AI的API层。未来的工作方式就是这样。我看不到有其他东西能取代它。虽然有一些补充性的东西，比如用于智能体之间通信的A2A，但在工具调用和执行任务方面，MCP将是我们使用的协议。MCP是完全开放的，每个人都可以使用和交流。所以我鼓励大家参与进来。如果你想成为这个社区的一部分，现在就是影响我们未来20年可能都将依赖的技术方向的时候。

### Laurent - H Company Co-founder & CTO

Ralph J. ABRY: Our next speaker has actually nearly a decade at Deep Mind where he was working in super cool projects like AlphaGo, Alpha Fold, Alpha Star, and he worked also in Chinchilla, Retro, Gemma, and Gemini. but now he co-founded and he's a CTO of the H company. Please join me in welcoming to the stage Laurent, co-founder and CTO at the H company.

拉尔夫·J·阿布里：我们的下一位演讲者在DeepMind工作了近十年，期间参与了AlphaGo、AlphaFold、AlphaStar等超酷的项目，也参与了Chinchilla、Retro、Gemma和Gemini的研发工作。但现在，他联合创办了H公司并担任CTO。请和我一起欢迎H公司的联合创始人兼CTO，Laurent登台。

Laurent: What we are building at H we are trying to build something at the intersection of agentic UI automation and also models. So what we are building at H we are building computer user agent so agents that can control a computer the same way a human would. So through the the graphical user interface. So basically you take a screenshot and some context you pass that to the agent and the agent outputs actions but in the same action space as you would like mouse clicks, scrolls, keystrokes.

洛朗：我们在H公司正在构建的产品，处于智能体UI自动化和模型的交叉领域。我们在H公司构建的是计算机用户智能体，也就是能够像人类一样控制计算机的智能体。它是通过图形用户界面进行操作的。基本上，你截取一张屏幕截图和一些上下文，将其传递给智能体，然后智能体输出相应的动作，而且是在与你相同的动作空间内，比如鼠标点击、滚动和键盘输入。

Laurent: And the for that is that right now agent is a big word. you have many agent company a lot of that is really **RAG**（检索增强生成：Retrieval-Augmented Generation，一种将外部知识库检索与大语言模型生成相结合的技术） or tool call MCP APIs and so on. So plugging at LLM interfacing at the LLM with a with like strongly type tools but we think you know it's not going to work for the long tails of tasks that I showed at the beginning. You know not all software will have APIs MCPS soon.

洛朗：这样做的原因是，现在“智能体”是一个很宽泛的词。有很多智能体公司，但其中很多实际上做的是RAG，或者是工具调用、MCP API等。也就是将**LLM**（大语言模型：Large Language Model，一种经过海量文本数据训练，能够理解和生成人类语言的深度学习模型）与强类型工具进行接口对接。但我们认为，对于我一开始展示的那些长尾任务，这种方式是行不通的。你知道，不是所有的软件都会很快拥有API或MCP。

### Aporna DENEKARAN - Arise AI CPO

Ralph J. ABRY: Our next speaker built machine learning infrastructure at Uber, Apple, and Adobe before she co-founded Arise AI. She also been recognized on Forb's 30 under 30 list for her impact on AI. Today, she'll show us why system prompts shouldn't stay static and how agents can actually evolve their instructions in the real world in real world environments. Please join me in welcoming to the stage chief product officer at Arise AI, Aporna DENEKARAN.

拉尔夫·J·阿布里：我们的下一位演讲者在联合创立Arise AI之前，曾在Uber、苹果和Adobe构建机器学习基础设施。她还因其在AI领域的影响力而被《福布斯》评为“30位30岁以下精英”。今天，她将向我们展示为什么系统提示不应该保持静态，以及智能体如何在真实世界的环境中实际地演进它们的指令。请和我一起欢迎Arise AI的首席产品官Aporna DENEKARAN登台。

Aporna DENEKARAN: Today I'm going to talk to you all about prompt learning. What we're going to be talking about today is kind of a new approach prompt learning inspired by Karpathy which actually uses the English feedback so not just the scalar scores but it actually uses the English feedback back to improve the prompt.

阿波尔娜·德内卡兰：今天我要和大家谈谈“提示学习”。我们今天要讨论的是一种受Karpathy启发的新方法——提示学习，它实际使用的是英文反馈，而不仅仅是标量分数，它是利用英文反馈来改进提示。

Aporna DENEKARAN: So just to recap on what system prompt learning is, it basically takes the data. So this is the inputs, the outputs, also the explanations or the annotations. It takes the original prompt. You're going to pass that into a meta prompt and then you're going to get a new prompt.

阿波尔娜·德内卡兰：简单回顾一下什么是系统提示学习：它基本上是获取数据，包括输入、输出，以及解释或注释。它会拿到原始的提示，然后你将它传递给一个元提示（meta prompt），最后你会得到一个新的提示。

Aporna DENEKARAN: So I think the key takeaway that we wanted to share with you guys is one collecting those errors and actually either running evals or doing any kind of annotations on them is actually really important because you won't really be able to understand what to go fix if you're not collecting those examples.

阿波尔娜·德内卡兰：所以，我认为我们想和大家分享的关键 takeaway是，收集那些错误，并对它们进行评估或任何形式的标注，实际上非常重要。因为如果你不收集这些案例，你将无法真正理解要去修复什么。

### Tuana Çelik - Llama Index Developer Relations Engineer

Ralph J. ABRY: Our next speaker is our developer relations engineer at Llama Index where she helps developers build product ready agentic applications. Today she's here to show us realistic abstractions on how to build an alternative to notebook. Please join me in welcoming to the stage developer relations engineer at Llama Index, Tuana Chelik.

拉尔夫·J·阿布里：我们的下一位演讲者是Llama Index的开发者关系工程师，她帮助开发者构建可用于生产的智能体应用。今天她将向我们展示如何构建Notebook替代方案的现实抽象。请和我一起欢迎Llama Index的开发者关系工程师Tuana Chelik登台。

Tuana Çelik: So I'm going to be talking about building a notebook LM alternative fully open source and hopefully I can inspire some of you to try it out. This whole talk is about realistically what are the abstractions we need to actually build an alternative to Notebook LM.

图阿娜·切利克：我将要讨论的是如何构建一个完全开源的Notebook LM替代品，希望能激励你们中的一些人去尝试。整个演讲的核心是，要真正构建一个Notebook LM的替代品，我们现实中需要哪些抽象？

Tuana Çelik: So we set off and the two main Llama cloud products that we initially started with are Llama Pars and Llama Extract. So one thing we wanted to do is make sure that users that want to use what we now are going to from now on call notebook Llama could be able to upload documents of any shape or form. So llama paths are super useful here. We don't worry if there's any tables, images, um layout differences at all. And also Llama Extract.

图阿娜·切利克：所以我们着手开始，最初使用的两个主要的Llama Cloud产品是Llama Parse和Llama Extract。我们想做的一件事是，确保想要使用我们称之为“Notebook Llama”的用户能够上传任何格式或形式的文档。所以Llama Parse在这里非常有用，我们不用担心文档中是否有表格、图片或任何布局差异。还有Llama Extract。

Tuana Çelik: We also make use of claim verification. And for that we have Llama index Llama cloud indexes which you can connect up to any of your own vector stores. And once you have your data there, you get to decide when you're at the rag process where you want to do retrieval augmented generation or claim verification etc.

图阿娜·切利克：我们还利用了事实声明验证（claim verification）功能。为此，我们有Llama Index和Llama Cloud索引，你可以将其连接到任何你自己的向量存储。一旦你的数据在那里，你就可以在RAG流程中决定何时进行检索增强生成或声明验证等操作。

### Paige Bailey - Google Deep Mind AI Developer Experience

Ralph J. ABRY: Our next speaker leads the AI developer experience at Google Deep Mind, where she's helping shape how builders everywhere use the latest generations of models. Today she'll take us beyond chat bots showing us live demos on V3, Gen3 and Gemini 2.5 Pro. So please join me in welcoming to the stage AI developer experience at Google Deep Mind, Paige Bailey.

拉尔夫·J·阿布里：我们的下一位演讲者在Google DeepMind领导AI开发者体验团队，帮助塑造全球构建者使用最新一代模型的方式。今天她将带我们超越聊天机器人，现场演示Veo3、Genie3和Gemini 2.5 Pro。请和我一起欢迎Google DeepMind的AI开发者体验负责人Paige Bailey。

Paige Bailey: Gemini is special in a number of ways. One of which is that it's natively multimodal. It can understand video and images and audio and text and code and all of the above all at once in multiple languages. But it can also output multiple modalities. So Gemini models are kind of unique in the market in the sense that they can do many many things. They can output text and code but also images. They can edit images. They can output audio.

佩奇·贝利：Gemini在很多方面都很特别。其中之一是它的原生多模态能力。它可以同时理解视频、图像、音频、文本和代码，并且支持多种语言。不仅如此，它还可以输出多种模态。所以Gemini模型在市场上是独一无二的，因为它能做很多事情。它可以输出文本和代码，也可以输出图像，还能编辑图像和输出音频。

Paige Bailey: Um but with V3, the process is much simpler as you can see. So you just have the original video. You ask Gemini 2.5 Pro to create the prompt or the collection of prompts. In this case, I only wanted the first 8 seconds. Um, it generated the detailed text description and then that's what I used to kind of give to the Veo model to get that final output.

佩奇·贝利：但是使用Veo3，过程就简单多了。你只需提供原始视频，然后让Gemini 2.5 Pro来创建提示或一系列提示。在这个案例中，我只需要前8秒。它生成了详细的文本描述，然后我把这个描述给Veo模型，就得到了最终的输出。

Paige Bailey: Um so interestingly uh for Gemma 3, Gemma 3 is remarkable in a few ways, right? Like so you can see here that our 27 billion parameter version of Gemma 3 um is uh kind of able to fit on just a single H100. Um, so just one GPU as opposed to the 32 that you would need to run DeepSeek V1 or DeepSeek V3.

佩奇·贝利：有趣的是，关于Gemma 3，它在几个方面都非常出色，对吧？你可以看到，我们的270亿参数版本的Gemma 3，只需要一张H100就能运行。只需要一块GPU，而不是运行DeepSeek V1或DeepSeek V3所需的32块。

### Neil ZEGHDOUD - QAI Chief Modeling Officer

Ralph J. ABRY: Our speaker led generative audio research at Google Brain and and earlier worked at the speech recognition at Facebook AI research before he co-founded Qai uh, where he serves now as chief modeling officer. Today he'll talk about full duplex conversation with Moshi, speech-to-speech, and more. Please join me in welcoming to the stage Chief Modeling Officer Neil ZEGHDOUD.

拉尔夫·J·阿布里：我们的演讲者曾在Google Brain领导生成式音频研究，并在此之前在Facebook AI研究中心从事语音识别工作，之后他联合创立了Qai，现任首席建模官。今天他将谈论与Moshi的全双工对话、语音到语音技术等。请和我一起欢迎首席建模官Neil ZEGHDOUD登台。

Neil ZEGHDOUD: So the first project we did at we did at QAI called Moshi, it was about creating the first **full duplex**（全双工：允许数据在两个方向上同时传输的通信模式，在对话中指双方可以同时说话和倾听） conversational AI. Now it's something that people are used to to have conversational chatbots all of them without exception even today still rely on half duplex setting. It's a bit like a walkie talkie. So either the AI is speaking or it's listening which means that it requires this discipline.

尼尔·泽格杜德：我们在QAI做的第一个项目叫做Moshi，它是关于创造第一个全双工对话AI。现在人们已经习惯了拥有对话式聊天机器人，但即使在今天，所有这些机器人无一例外都依赖于半双工设置。这有点像对讲机，要么是AI在说话，要么是它在听，这意味着用户需要遵守这种（轮流说话的）纪律。

Neil ZEGHDOUD: So what we did is we invented what we call multistream modeling. It's very simple idea. Uh we just have two streams in parallel which means that both can be speaking at the same time. Both can be silent at the same time. One can talk and and the other around. And what it gives is the demo we did more than a year ago now at CAM. You're going to see two things. The first thing is conversation with Moshi where you're going to see that the model has still the lowest latency ever at this point. Uh sometimes when it guesses where you're going, it starts answering before you're done.

尼尔·泽格杜德：所以我们发明了我们称之为“多流建模”的方法。这个想法很简单。我们只是并行设置了两个流，这意味着双方可以同时说话，也可以同时保持沉默，或者一方说话另一方听。它带来的效果，就是我们一年多前在CAM大会上做的演示。你会看到两点：首先是与Moshi的对话，你会发现这个模型至今仍拥有最低的延迟。有时当它猜到你要说什么时，它会在你结束前就开始回答。

### Andreas BLATTMANN - Black Forest Labs Co-founder

Ralph J. ABRY: Our next speaker is the co-founder of Black Forest Labs, the team behind the state-of-the-art model Flux. Before that, he was a researcher at LMU Munich, Nvidia, and stability AI, where he co-invented latent diffusion that powers stable diffusion, midjourney, and DALL-E. Please join me in welcoming co-founder of Black Forest Labs, Andreas BLATTMANN.

拉尔夫·J·阿布里：我们的下一位演讲者是Black Forest Labs的联合创始人，该团队是顶尖模型Flux的幕后推手。在此之前，他曾在慕尼黑大学、英伟达和Stability AI担任研究员，期间他共同发明了潜在扩散（latent diffusion）技术，该技术是Stable Diffusion、Midjourney和DALL-E的核心。请和我一起欢迎Black Forest Labs的联合创始人Andreas BLATTMANN。

Andreas BLATTMANN: Um and with flux context that we released in June 2025. So earlier this year we published the first diffusion model or flow matching model that combined text to image generation and editing. And that really unlocked new properties that we have not seen before. Things like character consistency, style reference, local and global editing. everything within one model available within seconds once you prompt it.

安德烈亚斯·布拉特曼：我们在2025年6月，也就是今年早些时候，发布了Flux Context。我们发表了第一个结合了文本到图像生成与编辑功能的扩散模型或流匹配模型。这真正解锁了我们以前从未见过的新特性，比如角色一致性、风格参考、局部和全局编辑，所有这些都在一个模型中实现，并且在输入提示后几秒钟内即可使用。

Andreas BLATTMANN: So this is the flow matching algorithm combined with this latent generative modeling. So this is how you can generate images based on text. But now how does this apply to flux context because that also can do image editing right? We do this with a very simple trick I would say. We train a general transformer model um which is the backbone of what we're doing for the flux models and we condition that this is the same for image editing and text to image generation on a text prompt. This is here on the um top left part here but instead of only conditioning on one image that we want to generate we condition at on an additional image that is now the context image for the model.

安德烈亚斯·布拉特曼：这就是流匹配算法与这种潜在生成建模的结合。这样你就可以根据文本生成图像了。但现在，这如何应用于同样能进行图像编辑的Flux Context呢？可以说，我们用了一个非常简单的技巧。我们训练了一个通用的Transformer模型，它是我们Flux模型的核心。对于图像编辑和文本到图像生成，我们都以一个文本提示作为条件。但不同的是，我们不只对要生成的一个图像进行条件约束，我们还会额外加入一个图像作为模型的上下文图像。

### Andreas KOLLIG - Neo4j Generative AI Lead

Ralph J. ABRY: Our next speaker calls himself a technology, technological humanist. He's built systems for NASA, brought medical informatics to Zambia, and today at Neo4j, he's helping democratizing graph databases. His motto, everything is connected. Please join me in welcoming to the stage generative AI lead for developer relations at Neo4j, Andreas KOLLIG.

拉尔夫·J·阿布里：我们的下一位演讲者自称为技术人文主义者。他曾为NASA构建系统，将医学信息学带到赞比亚。如今在Neo4j，他正致力于图数据库的普及化。他的座右铭是“万物互联”。请和我一起欢迎Neo4j开发者关系生成式AI负责人Andreas KOLLIG登台。

Andreas KOLLIG: The idea that as soon as you go down the route of making any kind of agents, you run into all kinds of challenges that lead you down to making a multi-agent system. And you do multi-agent system for a couple of reasons. You do that because the agents have got too many responsibilities. They get confused. They have context rot that happens, semantic drift that happens. So you break down the problem to make it simpler and have more agents that are focused on different parts of the problem.

安德烈亚斯·科利格：一旦你开始着手构建任何类型的智能体，就会遇到各种挑战，这些挑战最终会引导你走向构建一个多智能体系统。你之所以构建多智能体系统，有几个原因。这样做是因为单个智能体承担了太多的责任，导致它们会感到困惑，出现上下文腐烂和语义漂移的问题。因此，你需要将问题分解，使其更简单，并让更多的智能体专注于问题的不同部分。

Andreas KOLLIG: Along the way, because you've got multiple agents, you have the opportunity to use specialized models the way that we saw in the previous talk. Specialized models outperform general models in all tasks. So you have the opportunity as soon as you break things up to have models that do just one part of a puzzle.

安德烈亚斯·科利格：在这个过程中，因为你拥有多个智能体，你就有机会像我们在上一个演讲中看到的那样，使用专门化的模型。在所有任务中，专门化的模型都优于通用模型。因此，一旦你将任务分解，你就有机会让不同的模型只负责拼图中的一小部分。

### Steve Morren - ZML Founder

Ralph J. ABRY: Our next speaker was part of the founding team of Zenley, later acquired by Snap, and he's the founder of ZML, a high performance AI inference technology aiming to push the limits of what's possible beyond GPUs. Today, he's introducing a breakthrough attention mechanism. Please join me in welcoming to the stage founder of ZML, Steve Morren.

拉尔夫·J·阿布里：我们的下一位演讲者是Zenly的创始团队成员之一（后被Snap收购），他也是ZML的创始人。ZML是一种高性能AI推理技术，旨在突破GPU的可能性极限。今天，他将介绍一种突破性的注意力机制。请和我一起欢迎ZML创始人Steve Morren登台。

Steve Morren: Um we are building this universal inference uh stack and engine. So essentially it's like the same literally the same code the same binaries even uh that runs on you know any for any models on any language sorry any chip sorry any language model or any model on any chip.

史蒂夫·莫伦：我们正在构建这个通用的推理堆栈和引擎。基本上，它就是完全相同的代码，甚至是相同的二进制文件，可以在任何芯片上运行任何模型，无论是任何语言模型还是其他模型。

Steve Morren: But there's it's very nice, you know, very promising, but there's a tiny tiny problem. The tiny problem is that because it's a graph, we need branching. And this this means that for this GPUs are close to useless. They are very bad at branching. They can do it. But if you have you know worked on GPUs you might you know understand a bit deeper why. Um but CPUs are good right and we get into this thing in which we might do the calculation and we might you know model this as a graph problem uh but only on CPU.

史蒂夫·莫伦：这非常美好，前景广阔，但有一个很小很小的问题。问题在于，因为它是一个图，我们需要进行分支处理。而这意味着，对于这项任务，GPU几乎是无用的。它们非常不擅长分支。虽然它们可以做，但如果你在GPU上工作过，你可能会更深入地理解为什么。但是，CPU是擅长这个的，于是我们就面临这样一种情况：我们可能需要进行计算，并将这个问题建模为一个图问题，但只能在CPU上进行。

### Omar Sanseviero - Hugging Face Head of DevEx & Community

Ralph J. ABRY: So, our next speaker leads a developer experience at community at HuggingFace, uh, where he's been championing open source, audio, and ondevice machine learning. He's here to walk us through the state of open source and uh uh open source LLMs in 2025. Please join me in welcoming to the stage head of developer experience and community at hugging phase VB.

拉尔夫·J·阿布里：我们的下一位演讲者在Hugging Face社区领导开发者体验，他一直倡导开源、音频和设备端机器学习。他今天将为我们介绍2025年开源及开源LLM的现状。请和我一起欢迎Hugging Face开发者体验和社区负责人VB登台。

Omar Sanseviero: Um so when we talk about open LLMs like the one one of the first questions that that pops to the mind is like how do they stack up against u the likes of GPT5 the likes of um Claude Sonet and so on and so forth. What you see on the screen is the average performance of recent LLMs on a bouquet of events ranging from uh math, coding, um scientific rigor and so on and so forth. The black bars that you see are um are proprietary models. And the blue bars that you see are uh open models. And um what you can see right now on the screen is that the like in the in the top 10 there are pretty sizable amount of um open models.

奥马尔·桑塞维耶罗：当我们谈论开放的LLM时，首先想到的问题之一就是，它们与GPT-5、Claude Sonet等模型相比表现如何？你在屏幕上看到的是近期LLM在一系列评测中的平均表现，这些评测涵盖了数学、编码、科学严谨性等多个方面。你看到的黑色条代表的是专有模型，蓝色条代表的是开放模型。你现在可以在屏幕上看到，排名前10的模型中有相当数量是开放模型。

Omar Sanseviero: And of course like we've we've all heard the lore, right? like Sonet is dumber during the day but you know it becomes much smarter during the evening like you know uh when you're when you're coding in the night like cloudset is much nicer and so on and um um of course a lot of this is is is placebo but the fact that we don't really have access to the model weights makes it much difficult to be able to um narrow it down down to one thing um and as uh one of the one of my favorite researchers that I look up to quite a bit Andre says um not your weights, not your brain.

奥马尔·桑塞维耶罗：当然，我们都听说过那些传闻，对吧？比如Sonet在白天比较笨，但到了晚上就变得聪明多了，比如当你在深夜编码时，Claude会更好用等等。当然，这其中很多是安慰剂效应，但事实是我们无法真正接触到模型权重，这使得将问题归结为单一原因变得非常困难。正如我非常敬仰的一位研究者Andrej所说：“没有权重，就没有大脑。”

Omar Sanseviero: Um and last but not the least um um proprietary models have a sort of very nice well- definfined safety and jailbreak scaffolding. Uh open models when when it comes to open models you often have to define this yourself. you have to make sure that they are um you know covered from all sorts of issues or all sorts of uh potential um jailbreaks and so on and this is something which like proprietary models have kind of mastered at this point.

奥马尔·桑塞维耶罗：最后同样重要的是，专有模型拥有一套非常完善、定义明确的安全和反越狱框架。而对于开放模型，你通常需要自己来定义这些。你必须确保它们能够应对各种问题或潜在的越狱风险等，而这正是专有模型在目前已经相当熟练掌握的方面。

### Closing Remarks

Ralph J. ABRY: Look, this event wouldn't have happened without you, without your support, the support of the community, and the support of our sponsors. So I just wanted to thank uh everyone. So I wanted to thank Docker, Neo4j, Sentry, Deep Mind, Arise, Alolia, and everybody else who supported us throughout this this uh this event. And uh and we're super happy uh like the quality of the speakers were just amazing.

拉尔夫·J·阿布里：看，没有你们，没有你们的支持，没有社区的支持，没有我们赞助商的支持，这个活动是不可能举办的。所以我想感谢每一个人。我想感谢Docker、Neo4j、Sentry、DeepMind、Arise、Algolia以及所有在这个活动中支持我们的每一个人。我们非常高兴，演讲者的质量简直太棒了。