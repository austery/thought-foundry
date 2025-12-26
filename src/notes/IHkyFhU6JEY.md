---
area: "tech-engineering"
category: technology
companies_orgs:
- Anthropic
- OpenAI
date: '2025-08-09'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Latent Space podcast
people:
- John
- Greg Brockman
- Einstein
- Marie Curie
products_models:
- GPT
- MCP
- Copilot
- ChatGPT
- Notebook LM
project: []
series: ''
source: https://www.youtube.com/watch?v=IHkyFhU6JEY
speaker: AI Engineer
status: evergreen
summary: 本次大会的主讲人swyx深入探讨了AI工程领域的演进，强调了从演示阶段迈向生产的重要性。他提出AI工程正处于类似物理学“标准模型”形成的关键时期，并介绍了LM
  OS、LN SDLC和构建有效智能体等候选标准模型。swyx还通过他开发的“AI新闻”产品，提出了“人类输入与AI输出价值比”的思维模型，并详细阐述了用于构建AI密集型应用的SPAD模型。他鼓励参会者共同思考并定义AI工程的未来标准模型。
tags:
- ai-application
- conference-insight
- development
- engineering
- model
title: 设计AI密集型应用：AI工程的标准模型与未来方向
---
### 欢迎与大会概览

大家好，欢迎来到本次大会。通常，我会在大会开幕时进行一次简短的演讲，介绍大会的进展，并分享AI工程的最新状况以及我们如何组织这次会议。这次演讲将结合这些内容，我将尝试回答大家关于大会、AI新闻以及AI未来发展的所有问题，让我们直接开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Hi everyone. Welcome to the conference. How you doing? Excellent. Usually I open these conferences with a small little talk to introduce uh you know what's going on and then give you a little update on where the state of AI engineering is and how we put together the conference for you. Uh this is a this is one of those combined talks. I'm trying to answer every single question you have about the conference about AI news about where this is all going and we'll just dive right in.</p>
</details>

有三千人临时注册了本次会议，感谢大家带来的“压力”。我实际上可以量化这种压力，我称之为AI工程组织者压力的**吉尼系数**（Genie coefficient: 此处指一种幽默的衡量标准，与经济学中的吉尼系数无关）。与去年相比，这个数字非常高。请大家以后早点买票，既然决定要来，就早点行动吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So um 3,000 of you all of you registered last minute. Uh thank you for that stress. Um I actually can quantify this. I call this the genie coefficient for uh the AI AIE organizer stress. Uh this is compared to last year. Uh it is please just buy tickets earlier like I mean you know you're going to come just just do it. Okay.</p>
</details>

我们还希望利用这次大会来追踪AI工程的演进。这些是去年的议题，今年我们把每个议题都增加了一倍。所以基本上，大家在这里获得的价值也翻了一番。我认为这已经是我们希望达到的最大并发量了。我知道大家可能会有选择疲劳，但我们也在努力涵盖AI的所有方面，所以请大家理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we also uh like to use this conference as a way to track the evolution of AI engineering. Uh that's those are the tracks for last year. We've just doubled every single track for you. Um so basically it's basically you know like double the value for whatever you uh get here and I think like uh I think this is as much concurrency as we want to do like I know I I hear that people have decision fatigue and all that uh totally but also we try to cover all of AI so deal with it.</p>
</details>

我们还引以为豪的是，我们比其他会议（如欧洲的会议）响应更迅速，并且比TED等会议更具技术性。因此，我们询问了大家想听什么。这些是调查结果。我们尝试了各种主题，包括使用智能体的计算机，以及AI与加密货币，这总是一个有趣的话题。但大家告诉了我们你们想要什么，我们都将其纳入了会议内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we also pride ourselves in doing well by being more responsive than other conferences like Europe's and being more technical than other conferences uh like TED or whatever what have you. So we asked you what you wanted to hear about. These are the surveys. Uh we tried all sorts of things. We tried computer using agents. We tried AI and crypto. It's always a fun one. And uh but you guys told told us what you wanted and we put it in there.</p>
</details>

为了获取更多数据，我们希望大家能完成我们的调查，因为调查尚未结束。如果大家能访问那个网址，我们将在明天完整公布结果。我们希望大家都能填写，以便我们获得具有代表性的样本，这将为我们明年的会议提供参考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um for all for more data um we would actually like you to to finish out our survey where survey is not done. So if you want to head to that URL um we will present the results in full tomorrow. We would love all of you to to fill it out so we can get a representative sample of what you want and uh that will inform us next year. Okay.</p>
</details>

### AI工程的演进与地位

我认为AI工程的另一个特点是，我们作为工程师也在不断创新。我们是第一个在首次会议上就拥有**MCP**（Multi-modal Communication Protocol: 多模态通信协议）演讲的会议，也是第一个接受MCP演讲的会议。在此特别感谢来自Writer的Sam Julian与我们合作开发官方聊天机器人，以及来自Daily的Quinn和John与我们合作开发官方语音机器人，还有来自Vappy的Elizabeth Triken，她最初也帮助我们原型化了语音机器人。我们正在努力不断提升会议体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know I think the other thing about AI engineering is that we also have been innovating as engineers right we we're the first conference to have an MCP. at our first conference to have an MCP talk accepted by MCP where shout out to Sam Julian from Writer for working with us on the official chatbot and Quinn and John from Daily for working with us on the official voice bot as well as Elizabeth Triken from uh Vappy. I need to give her a shout out because she originally uh helped us uh prototype uh the the voice bot as well. So we're trying to constantly improve the experience.</p>
</details>

我想强调的另一点是，这些是我在2023年和2024年的演讲内容。在2023年首次AI工程大会上，我谈到了三种类型的AI工程师。在2024年，我谈到了AI工程如何变得越来越跨学科，这就是为什么我们以“世界博览会”的形式启动了多个议题。在2025年纽约的会议上，我们讨论了智能体工程的演变和重点。那么，在2025年6月，我们现在处于什么阶段呢？这就是我们将要关注的重点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the other thing I think I want to emphasize as well is like these are the talks that I give like in 2023 uh the very first AIE I talked about the uh the three types of AI engineer in 2024 I talked about um how AI engineering was becoming more multi disciplinary and that's why we started the world's fair with with multiple tracks in 2025 in in New York we talked about the evolution and the focus on agent engineering so where where are we now in sort of June of 2025 Um, that's where we're going to focus on.</p>
</details>

我认为我们已经取得了长足的进步。过去人们常常嘲笑AI工程，但我预料到了这一点。我们曾经地位低下，人们只是开发**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）的封装器，但现在大家都很富有。所以，我们将听取在座的一些人的分享。感谢各位赞助商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we we come a long way regardless like, you know, we people used to make fun of AI engineering and and I anticipated this. We used to be low status. People just derive GPT rappers and look at all the GPT rappers. Now all of you are rich. Um, so we're going to hear from some of these folks uh in the room. Um, and uh, thank you for sponsoring as well.</p>
</details>

但另一个非常有趣的事情是，我们一直听到的一个不变的教训是不要把事情搞得过于复杂。从Anthropic在**Latent Space podcast**（一个播客节目）上的分享中，我们听到了这一点。我们从Eric Suns那里听到了他们如何用一个非常简单的脚手架就击败了Sweetbench。Greg Brockman（大家稍后将在闭幕主题演讲中听到他的分享）的深度研究以及AMP的代码也是如此。AMP的同事们在哪里？我想他们可能在另一个房间。但你知道，这就像“皇帝的新衣”，这个领域仍然非常早期，我认为在座的AI工程师应该对此感到非常鼓舞，因为仍有大量的**Alpha**（Alpha: 超额收益，指超出市场平均水平的回报）可以挖掘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but uh you know I think the other thing that's also super interesting is that like you should we the consistent lesson that we hear is to not over complicate things from enthropic on the lat space podcast. Uh we hear we hear we hear from uh Eric Suns about how they beat Sweetbench with just a very simple scaffold. Uh same about deep research from Greg Brockman who you're going to hear later on um in the uh sort of closing keynotes as well as AMP code. Where's the AMP folks here? AMP amp amp I think they're probably back in the other room but um also you know there's there's a sort of emperor has no clothes like there's it's still very early fuel and I think the um AI engineers in the room like should be very encouraged by that like there's there's still a lot of alpha to mind.</p>
</details>

### 寻找AI工程的“标准模型”

如果你回顾这次会议的开端，我们实际上将这个时刻与物理学蓬勃发展的时期进行了比较。那是1927年的**索尔维会议**（Solvay Conference），爱因斯坦、居里夫人以及其他物理学界的家喻户晓的人物都聚集在一起。这正是我们希望通过这次会议实现的。我们汇集了世界上最优秀的AI工程师和研究人员，共同建设并推动前沿发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um if you watch back all the way to the start of this conference we actually compared this moment a lot to uh the time when sort of physics was in was in full bloom right this is the solve conference in 1927 when Einstein Mary Cury and all the other household names in physics all gathered together And that's what we're trying to do for this conference. We've gathered the entire the best um sort of AI engineers in the in the world um and and researchers and and and all that uh to to build and push the frontier forward.</p>
</details>

我们的论点是，现在正是做这件事的最佳时机。我两年半前就说过，现在依然如此。但我认为，在某个非常特定的时期，一个行业形成时，人们会提出所有基本思想，这些思想将贯穿该行业的其余发展历程。这就是物理学中的**标准模型**（Standard Model），在20世纪40年代到70年代有一个非常特定的时期，他们解决了所有问题，而接下来的50年里，我们并没有真正改变这个标准模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the thesis is that there's this is the time this is the right time to do it. I said that two and a half years ago still true still true today. But I think like there's a very specific time when like basically what people did in in that time of the formation of an industry is that they set out all the basic ideas that then lasted for the rest of that industry. So this is the standard model in physics and there was a very specific period in time from like the 40s to the 70s where they figured it all out and the the next 50 years we haven't really changed the standard model.</p>
</details>

所以我想在这里提出的问题是，AI工程中的标准模型是什么？我们在其他工程领域都有标准模型，对吧？每个人都知道**ETL**（Extract, Transform, Load: 数据抽取、转换、加载），每个人都知道**MVC**（Model-View-Controller: 模型-视图-控制器），每个人都知道**CRUD**（Create, Read, Update, Delete: 创建、读取、更新、删除），每个人都知道**MapReduce**（MapReduce: 一种分布式计算编程模型）。我在构建AI应用时也使用了这些东西，它们非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the question that I want to phrase here is what is the standard model in AI engineering right we have standard models in the rest of engineering right everyone knows ETL everyone knows MVC everyone knows CRUD everyone knows map reduce and I've used those things in like building AI applications and like it's pretty much like yes rag is there but I heard rag is dead I I don't know you guys can tell me um this day is like long long context killed rag the other day fine tuning kills rag I don't know but I I don't think I definitely don't think is the full answer.</p>
</details>

是的，**RAG**（Retrieval-Augmented Generation: 检索增强生成）确实存在，但我听说RAG已经“死了”。我不知道，你们可以告诉我。有人说长上下文杀死了RAG，也有人说微调杀死了RAG。我不知道，但我肯定不认为RAG是完整的答案。那么，还可能出现哪些其他的标准模型来指导我们的思考呢？这正是我希望推动大家去思考的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what other standard models might emerge to help us guide our thinking and that's really what I want to push you guys to. So uh there are a few candidates standard models and AI engineering. I'll pick out a few of these. I I don't have time to talk about all of them but definitely listen to the DSP talk from Omar later uh tomorrow.</p>
</details>

### 候选标准模型：LM OS、LN SDLC与智能体

AI工程中有几个候选的标准模型。我将挑选其中几个进行介绍，我没有时间谈论所有模型，但请务必收听Omar明天关于**DSP**（Declarative Self-improving Programs: 声明式自改进程序）的演讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so we're going to cover uh a few of these. So first is the LM OS. Uh this is one of the earliest standard standard models um basically uh from Karpavi in 2023. Um I have updated it for 2025 um for multimodality for the standard set of tools that have come out um as well as um MCP which uh is is has become the default protocol for connecting with the outside world.</p>
</details>

首先是**LM OS**（Large Language Model Operating System: 大型语言模型操作系统）。这是最早的标准模型之一，基本上是Karpavi在2023年提出的。我为2025年对其进行了更新，以适应多模态、已出现的标准工具集以及**MCP**（Multi-modal Communication Protocol: 多模态通信协议），MCP已成为与外部世界连接的默认协议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um second one would be the LN SDLC software development life cycle. Um I have two versions of this one with the intersecting concerns of all the tooling that you buy. Uh by the way this is all on the laten space blog if you want and I'll tweet out the slides so uh and it's live stream so whatever um but I think uh for me the most interesting insight and the aha moment when I was talking to anker of brain trust who's going to be keynoting tomorrow um is that you know the early parts of the SDLC is are increasingly commodity right LLM's kind of free you know um monitoring kind of free and rag kind of free obviously there's it's just free tier for all of them and you you only get start paying but like when you start to make real money from your customers is when you start to do evals and you start to add in security orchestration and do real work uh that is real hard engineering work um and I think that's those are the tracks that we've added this year um and I'm very proud to you know I guess push AI engineering along from demos into production which is what everyone always wants.</p>
</details>

第二个是**LN SDLC**（Large Language Model Software Development Life Cycle: 大型语言模型软件开发生命周期）。我有两个版本，其中一个涵盖了你购买的所有工具的交叉关注点。顺便说一句，这些内容都可以在Latent Space博客上找到，我也会在Twitter上发布幻灯片，并且有直播。对我来说，最有趣的见解和顿悟时刻是当我与Brain Trust的Anker（他将在明天发表主题演讲）交谈时，他指出**SDLC**（Software Development Life Cycle: 软件开发生命周期）的早期部分正日益商品化。例如，**LLM**（Large Language Model: 大型语言模型）基本免费，监控也基本免费，RAG也基本免费。当然，它们都有免费层级，你只有在开始付费时才需要花钱。但当你开始从客户那里赚取真正的收入时，就是你开始进行评估、增加安全编排并做真正的、艰巨的工程工作的时候。我认为这些正是我们今年增加的议题，我非常自豪能够推动AI工程从演示阶段走向生产，这正是大家一直想要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another form of standard model is building effective agents uh our last conference we had uh Barry one of the co-authors of building effective agents from enthropic give an extremely really popular talk about this. Um I think that this is now at least the the received wisdom for how to build an agent. And I think like that's like that is one definition. Open AI has a different definition and I think we're we're contining to iterate. I think Dominic yesterday uh released another improvement on the agents SDK which builds upon the swarm concept that OpenAI is pushing.</p>
</details>

另一种标准模型是构建有效的智能体。在上次会议上，我们邀请了Anthropic公司《构建有效智能体》的合著者之一Barry，就此发表了一场非常受欢迎的演讲。我认为这至少是目前构建智能体的公认智慧。我认为这是一种定义。**OpenAI**（一家人工智能研究和部署公司）有不同的定义，我们正在不断迭代。我认为Dominic昨天发布了智能体**SDK**（Software Development Kit: 软件开发工具包）的另一个改进，它建立在OpenAI正在推广的**群集概念**（swarm concept: 指多个智能体协同工作的概念）之上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um um the way that I approach sort of the agent standard model has been very different. So you can refer to my talk from the previous conference on that. Um basically trying to do a descriptive u top down u model of what people use the words people use to describe agents like intent um you know control flow um memory planning and tool use. So there's all these there's all these like really really interesting things. But I think that the thing that really got me um is like I don't actually use all of that to build AI news.</p>
</details>

### 重新思考智能体：关注输入与输出的价值

我处理智能体标准模型的方式非常不同。大家可以参考我上次会议上的相关演讲。基本上，我试图建立一个描述性的自上而下的模型，来描述人们用来描述智能体的词语，比如意图、控制流、记忆规划和工具使用。这些都非常有趣。但真正让我思考的是，我实际上并没有用所有这些来构建**AI News**（AI新闻: 演讲者开发的一款产品）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um by the way who here reads AI news? I don't know if there's like a Yeah. Oh my god, like that's half of you. Thanks. Uh uh it's it's a really good tool I built for myself and you know hopefully uh now over 70,000 people are reading along as well. Um and the thing that really got me was Sum at the last conference. Uh you know he's the lead of PyTorch and he says he reads AI news he loves it but it is not an agent. And I was like what do you mean it's not an agent? I call it an agent. You should call it an agent. Um but he's right.</p>
</details>

顺便问一下，这里有多少人阅读AI新闻？天哪，差不多一半的人。谢谢！这是一个我为自己构建的非常好的工具，现在希望有超过7万人也在阅读。真正让我思考的是上次会议上的Sum。他是PyTorch的负责人，他说他阅读AI新闻，很喜欢，但它不是一个智能体。我当时想，你是什么意思，它不是智能体？我称它为智能体，你也应该称它为智能体。但他说的没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it's actually uh it's actually I'm going to talk a little bit about that, but like like why does it still deliver value even though it's like a workflow and like you know is that still interesting to people, right? Like why do we not brand every single track here? Voice agents uh you know like uh like workflow agents, computer use agents like why is every single track in this conference not an agent? Well, I think basically we want to deliver value instead of arguable terminology.</p>
</details>

我将稍微谈谈这一点，但为什么它仍然能提供价值，即使它只是一个工作流？人们仍然觉得它有趣吗？为什么我们不把这里的每一个议题都冠以“智能体”之名？例如语音智能体、工作流智能体、计算机使用智能体，为什么这次会议的每一个议题都不是智能体？我认为，我们基本上是想提供价值，而不是争论术语。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the assertion that I have is that it's really about human input versus valuable um AI output and you can sort of make a mental model of this and track the ratio of this and that's more interesting than arguing about definitions of workflow versus agents. So for example in the copilot era you had sort of like a debounce input of like every few characters that you type then maybe it will do an autocomplete u in chatbt every few queries that you type it would maybe output a responding query.</p>
</details>

所以我的主张是，这实际上是关于人类输入与有价值的AI输出之间的关系。你可以对此建立一个思维模型并追踪这个比率，这比争论工作流与智能体的定义更有趣。例如，在**Copilot**（GitHub Copilot: 一款AI代码补全工具）时代，你输入几个字符后，它可能会进行自动补全。在**ChatGPT**（ChatGPT: 一款对话式人工智能模型）中，你输入几个查询后，它可能会输出一个响应查询。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it starts to get more interesting with the reasoning models with like a 1 to10 ratio and then obviously with like the new agents now it's like more sort of deep research notebook. Uh by the way Ryzen Martin also speaking on the product uh product management track. Um she's she's incredible on uh talking about the story of notebook LM. Um the other really interesting angle if you want to take this mental model to the stretch to stretch it is the zero to one the ambient agents with no human input. What kind of interesting uh AI output can you get? So to me that's that's more a useful discussion about input versus output than what is a workflow wise and an agent how agentic is your thing versus versus not.</p>
</details>

当涉及到推理模型时，事情开始变得更有趣，例如1:10的输入输出比。显然，现在有了新的智能体，它更像是一种深度研究笔记本。顺便说一句，Ryzen Martin也将在产品管理议题上发表演讲。她在讲述**Notebook LM**（Notebook LM: 一款由Google开发的AI笔记工具）的故事方面非常出色。如果你想将这个思维模型进一步延伸，另一个非常有趣的视角是“从零到一”，即没有人类输入的**环境智能体**（ambient agents: 指在后台运行，无需直接人类干预的智能体）。你能从中获得什么样的有趣AI输出？所以对我来说，这是一个关于输入与输出的更有用的讨论，而不是争论什么是工作流，什么是智能体，或者你的东西有多像智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um talking about AI news uh so you know it is it is like a bunch of scripts in a in a in a trench code. Um and I realized I've written it three times. I've written it for the Discord scrape. I've written it for the Reddit scrape. I've written it for the Twitter scrape. And basically it's just it's always the same process. You scrape it. You plan. You recursively summarize. You format and you evaluate. Um and and yeah, that's the three kids in the trench coat. Um and that's really how what it is. I run it every day and like we improve it a little bit, but then I'm also running this conference.</p>
</details>

### AI密集型应用开发模型：SPAD

谈到AI新闻，它就像是一堆“穿着风衣的脚本”（指多个简单脚本协同工作）。我意识到我已经写了三次。我为Discord抓取写了一次，为Reddit抓取写了一次，为Twitter抓取写了一次。基本上，它总是相同的过程：抓取、规划、递归总结、格式化和评估。是的，这就是“穿着风衣的三个孩子”。这就是它的本质。我每天都运行它，我们也在不断改进，但同时我也在组织这次会议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so if you generalize it, that actually starts to become an interesting model for building AI intensive applications where you start to make thousands of AI calls to serve serve a particular purpose. Um so you sync you plan and and you sort of parallel process you analyze and sort of reduce that down to uh from from many to one and then you uh deliver uh deliver the contents um to the to the user and then you evaluate and to me like that conveniently forms an acronym SP AD um which is which is really nice.</p>
</details>

所以，如果你将其泛化，它实际上就成为了一个构建AI密集型应用的有趣模型，在这种应用中，你需要进行数千次AI调用来服务于特定目的。你进行同步（Sync），你进行规划（Plan），然后你进行并行处理、分析并将其从多到一地进行归纳（Analyze/Reduce），然后你向用户交付内容（Deliver），最后你进行评估（Evaluate）。对我来说，这恰好构成了一个非常好的首字母缩略词——**SPAD**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's also sort of interesting AI engineering elements that are that are fit in there. So you can process all these into a knowledge graph. you can um turn these into like structured outputs and you can generate code as well. So for example um you know chat GBT with canvas or cloud with um artifacts is a way of just delivering the output as a code artifact instead of just uh text output and I think it's like a really interesting way to think about this. So this is my mental model so far. Um I I wish I had the space to go into it but ask me later. This is what I'm developing right now.</p>
</details>

其中还包含了一些有趣的AI工程元素。你可以将所有这些处理成知识图谱，你可以将它们转化为结构化输出，你还可以生成代码。例如，**ChatGPT**（ChatGPT: 一款对话式人工智能模型）与**Canvas**（Canvas: 一个可视化工具/平台）结合，或者**Cloud**（Cloud: Anthropic公司的大型语言模型）与工件（artifacts）结合，就是将输出作为代码工件而不是纯文本交付的一种方式，我认为这是一种非常有趣的思考方式。这就是我目前的思维模型。我希望有更多空间深入探讨，但大家可以稍后问我。这是我目前正在开发的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think what I what I would really emphasize is, you know, I think like there's all sorts of interesting ways to think about what the standard model is and whether it's useful for you in in taking your application to the next step of like how do I add more intelligence to this in in a way that's useful and not annoying. Uh, and for me, this is it.</p>
</details>

### 展望未来：共创AI工程标准模型

我认为我真正想强调的是，有很多有趣的方式来思考什么是标准模型，以及它是否能帮助你的应用程序迈向下一步，即如何以一种有用而不烦人的方式增加更多智能。对我来说，这就是答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, I've I've thrown a bunch of standard models in here, but that's just my current hypothesis. I want you at this conference when in all your conversations with each other and with the speakers to think about what the new standard model for AI engineering is. What can everyone use to improve their applications and I guess ultimately build products that people want to use which is what Lori uh mentioned at the start. So um I'm really excited about this conference. It's so it's been such an honor and a joy to get it together for you guys and I hope you enjoy the rest of the conference. Thank you so much.</p>
</details>

好的，我在这里提出了一系列标准模型，但这只是我目前的假设。我希望大家在这次会议中，在彼此之间以及与演讲者的所有交流中，思考AI工程的新标准模型是什么。每个人都可以用什么来改进他们的应用程序，并最终构建出人们想要使用的产品，正如Lori在开场时提到的那样。我对这次会议感到非常兴奋。能够为大家组织这次会议是我的荣幸和快乐，希望大家享受接下来的会议。非常感谢大家。