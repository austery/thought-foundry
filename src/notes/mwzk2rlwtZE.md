---
author: AI Engineer
date: '2026-01-16'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=mwzk2rlwtZE
speaker: AI Engineer
tags:
  - voice-agent
  - ai-sales
  - real-time-ai
  - hardware-acceleration
  - llm-application
title: 构建实时AI销售代理：Cerebras 硬件与软件创新解析
summary: 本次研讨会聚焦于如何构建一个能够进行自然对话的AI销售代理。演讲者详细介绍了Cerebras的创新硬件（如WSE-3）如何通过解决内存带宽瓶颈来加速AI推理，并阐述了如投机解码（speculative decoding）等软件技术。同时，他们演示了如何利用LiveKit SDK整合语音识别（STT）、文本转语音（TTS）和大型语言模型（LLM），以及如何为代理提供业务上下文，最终实现一个可部署的、响应迅速的AI销售助手。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Cerebras
  - Nvidia
  - OpenAI
  - LiveKit
products_models:
  - Llama 3.3
  - H100
  - WSE-3
media_books: []
status: evergreen
---
### 工作坊介绍

**Sarah Chang**: 大家好，我们即将开始下一场会议。非常感谢大家今天前来。今天将是一个“构建你自己的销售代理”的研讨会。我们将一步步讲解你需要了解的一切，来构建你自己的语音代理。我是来自 **Cerebras** 的 Sarah Chang，很高兴能与 Genway 一起。我们都是 Cerebras DevX 团队的成员。

<details>
<summary>Original English</summary>

**Sarah Chang**: Hi everyone, we're about to start the next session. Thank you guys so much for coming out today. Um, this is going to be a build your own sales agent workshop. So, we're going to be walking through everything you need to know to build your own voice agent. My name is Sarah Chang from Cerebras and I am excited to be joined by Genway. Um, and we are both part of the DevX team at Cerebras.

</details>

**Genway**: 是的，谢谢 Sarah。今天我们将讲解如何构建一个能够与客户进行自然对话的语音销售代理，并且我们的销售代理将从外部源拉取产品联系信息以实时响应。所以，我们将构建一个能够说话、倾听并智能响应你公司销售材料的 AI 代理。我们有完整的代码供你跟随。我们有一个笔记本，你稍后可以扫描它来逐步操作，我们将在片刻后一步步带你完成。

<details>
<summary>Original English</summary>

**Genway**: Yeah, thanks Sarah. Um, so today we're going to walk through how to build a voice sales agent that can actually have a natural conversations with customers and our sales agents will pull product contacts from an external source to respond in real time. So, we're going to be building an AI agent that can speak, listen, and respond intelligently um to your company's sales materials. And we have the full code for you to follow along with. We have a notebook that you can scan later um to step through and we'll walk you through it step by step in just a moment.

</details>

### 研讨会收益与准备

**Sarah Chang**: 那么，在我们开始之前，让我们先看看你将从这次研讨会中获得什么。你将获得 Cerebras, LiveKit, Cartisia 的免费 API 积分。你将获得快速入门指南。我们再次会有一个完整的代码笔记本供你跟随，并在最后，你将拥有你自己的销售代理，可以连接到你公司的材料，以便你可以，你知道，在生产环境中实现它。这是我推荐扫描的入门代码，以便你可以跟随。再次强调，这是我们今天将要一步步讲解的内容。并且会有独立的模块，你可以直接运行并看到一些好的输出。我给你几秒钟时间。稍后我们也会有二维码，所以不用担心。

<details>
<summary>Original English</summary>

**Sarah Chang**: So, before we get started, let's go through what you will get out of this workshop. So you will get free API credits for Cerebras livekit cartisia. You will have the quick start. We'll have again have a full code notebook for you to follow along with and at the end you will have your very own sales agent that you can hook up to your company's materials so that you can you know implement this in production. So here's the starter code that I would recommend scanning just so you can follow along. Um, again, this is what we'll be walking through step by step today. And there will be individual modules that you'll be able to just run and see some good outfits. So, I'll give you a few seconds for that.

</details>

**Sarah Chang**: 在我们开始之前，我想稍微谈谈 Cerebras，以及，你知道，Cerebras 推理的秘密武器。所以，对于不熟悉我们的人来说，我们是一家硬件公司。我们正在构建一个 AI 处理器，它比你可能熟悉的 **Nvidia GPUs** 要大得多，也快得多。所以，出于好奇，我想知道这里有多少人听说过 Cerebras 硬件。不算少。好的。比去年多。好的。好的。所以，在我们继续之前，我想分享一下，我想向大家展示我们所谈论的速度。所以，这只是一个聊天机器人。它运行在 Cerebras 上。你可以选择任何模型。所以，我们可以在我们的硬件上托管任何不同的模型。所以，我将选择一个示例模型，比如一个 **Llama model**。我将给它一个提示。我将给它一个故意要求它回复得更长一些的提示。这个 [清嗓子] 有趣的爸爸笑话，但让每个笑话包含几句话。句子。这就是它生成的速度。还有谁想尝试一个提示吗？一个更长的提示。

<details>
<summary>Original English</summary>

**Sarah Chang**: We'll have the QR code later as well, so not to worry. So, before we get started, I wanted to talk a little bit about Cerebras and, you know, Cerebras inferences secret sauce. So, for those of you who are unfamiliar, we are a hardware company. We are building an AI processor that is much larger and much faster than what you are probably familiar with with Nvidia GPUs. So out of curiosity, I'm wondering how many people here have heard about Cerebras hardware. Not bad. Okay. Higher than last year. Okay. Okay. So before we do go, I want to share um I want to show everyone [clears throat] the speed of what we're talking about here. So So this is just a chat. It's running on Cerebras. You can choose any. So, we can host any different model on our hardware. So, I'm going to choose an example model like a llama model. And I'm [snorts] going to give it a prompt. So, I'm going to give it a prompt that it's intentionally asking it to respond something a little longer. This go [clears throat] funny dad jokes, but make each joke a couple sentences. Sentences. And that's how fast it generates. Does anyone else have a prompt you want to try? A longer prompt.

</details>

**Genway**: 太棒了。好了。

<details>
<summary>Original English</summary>

**Genway**: Amazing. There you go.

</details>

### Cerebras 硬件创新

**Sarah Chang**: 那么，在我们开始之前，我想快速谈一下硬件。我知道这里有很多软件爱好者，但我确实想花点时间谈谈硬件。我想稍微谈谈什么样的硬件创新使得如此快速的推理成为可能，尤其是在我们构建新一代 AI 产品时。所以，我们将进行一点硬件方面的介绍，但 Cerebras 的一个主要秘密武器是，Cerebras 芯片没有内存带宽问题。我不知道大家对 GPU 架构有多熟悉，但我们实际上将快速深入了解 GPU 架构是如何工作的，以及它与人们今天所做的事情相比如何。所以，作为背景，这是我们所有推理运行的硬件。它是 **Wafer Scale Engine 3**。它名副其实，尺寸相当于一个晚餐盘。它拥有 4 万亿个晶体管，90 万个核心，以及非常大量的片上内存。所以，这是我们的硬件与 **NVIDIA GPU** 的对比图。所以，你可以看到一些指标的对应关系。所以，晶体管数量显著更多。但要真正理解 Cerebras 在其硬件方面做了什么，使其能够实现比 Nvidia GPU 快 20 倍、30 倍甚至 70 倍的推理速度，我们需要先看看 Nvidia GPU。这是一个 **H100** 的图。如果你看红色矩形，那就是一个核心。所以在 H100 上大约有 17,000 个核心，而每个核心都在进行所有必要的数学计算，用于训练、推理或任何你需要的计算。所以，每个核心都有一个分配给它的计算子集。那么，当你运行推理时，一个核心需要访问哪些类型的东西来完成其计算？它需要权重、激活、KV 缓存等。在 H100 上，所有这些值都存储在芯片外部。所以，它们存储在外部内存中。所以，你可以想象，在推理过程中，每个核心都在不断地进行数千次计算。每个核心都需要不断地从外部内存位置加载和卸载 KV 缓存、激活、权重等。正如你所能想象的，这会造成非常显著的内存通道，嗯，内存带宽瓶颈。

<details>
<summary>Original English</summary>

**Sarah Chang**: So, really quickly before we get started, I know we have a lot of software geeks here, but I do want to for a second talk about hardware. And I want to talk a little bit about what hardware innovations um make such fast inference possible especially as we build a new generation of AI products. And so we're going to a little bit of a hardware segment, but one of the main secret sauces for Cerebras is that Cerebras chips do not have memory bandwidth issues. And I don't know how familiar you guys are with, you know, GPU architecture, but we're actually gonna de deep dive really quickly into how GPU architecture works and how it compares to what people are doing today. And so for context, this is the hardware that, you know, all of our inference runs on. It's the wafer scale engine 3. It is quite literally the size of a dinner plate. And this has 4 trillion transistors, 900,000 cores, and very significant amounts of onchip memory. And so this is the comparison of what our hardware looks like next to the NVIDIA GPU. So you can see some of those metrics line up. So significantly more transistors.

</details>

**Genway**: 但要真正理解 Cerebras 在其硬件方面做了什么，使其能够实现比 **Nvidia GPUs** 快 20 倍、30 倍甚至 70 倍的推理速度，我们需要先看看 **Nvidia GPU**。这是一个 **H100** 的图。如果你看红色矩形，那就是一个核心。所以在 H100 上大约有 17,000 个核心，而每个核心都在进行所有必要的数学计算，用于训练、推理或任何你需要的计算。所以，每个核心都有一个分配给它的计算子集。那么，当你运行推理时，一个核心需要访问哪些类型的东西来完成其计算？它需要权重、激活、KV 缓存等。在 H100 上，所有这些值都存储在芯片外部。所以，它们存储在外部内存中。所以，你可以想象，在推理过程中，每个核心都在不断地进行数千次计算。每个核心都需要不断地从外部内存位置加载和卸载 KV 缓存、激活、权重等。正如你所能想象的，这会造成非常显著的内存通道，嗯，内存带宽瓶颈。

<details>
<summary>Original English</summary>

**Genway**: But to actually understand what Cerebras did with their hardware that is makes it able to achieve 20x 30x f 70x faster speeds than in inference on Nvidia GPUs. We're going to actually start by taking a look at the Nvidia GPU. So this is a diagram of an H100. And if you look at the red rectangle, that is a core. And so on the H100 there's about 17,000 cores and each of these cores is the is what is actually doing all of the mathematical computations needed in training or inference or whatever computation you need to do. So every core has a subset of the computations um that is assigned. So when you run inference what are some of the types of things that a core will need access to to do its computation? it needs its weight, activations, KV cache, etc. On the H100, all of these values are stored offchip. So, they're stored in an offchip memory. And so, as you can imagine, during inference, each of these cores, there's thousands of computations happening constantly. And each core is needing to constantly load and offload the KV cache, activation, weights, etc. from an off-memory location. And as you can imagine this creates a very significant memory channel um memory bandwidth bottleneck.

</details>

**Genway**: Cerebras 的做法是，不是将所有这些值存储在芯片外，而是 Cerebras 硬件 WSC3（拥有 90 万个核心，相比之下比 17,000 个核心大得多）上的每个核心都有直接的片上内存。所以，它自己的 SRAM。所以，这个晶圆上的每个核心旁边都有内存。这意味着，每个核心进行计算所需的如权重、KV 缓存等所有值，都可以直接访问，并且访问速度更快，就在那里。所以，这就是 Cerebras 在硬件方面的一个例子。

<details>
<summary>Original English</summary>

**Genway**: What Cerebras has done instead is that instead of storing all these values off chip every single core on the Cerebras hardware the WSC3 there's 900,000 cores which in comparison to 17,000 is already a lot larger. Um every single core has direct its own direct onchip memory. So its own SRAM. So every single core on this wafer has a memory right next to it. And what that means is that all of the values that every single core needs for computations like weights, KB cache, etc. is directly accessible and much faster to accessible and it's right there. And so as you the other and so that's a little bit that's one example of what Cerebras has done on the hardware side.

</details>

### 软件加速：投机解码

**Sarah Chang**: 但是，回到软件方面，我还想快速谈谈 Cerebras 在软件方面用于加速推理的一个方面。所以，加速推理的一种方法是通过一种称为 **spec**（标准解码）或 **speculative decoding**（投机解码）的技术。在标准解码中，你有一个模型一次生成一个 token。这是顺序的，对吧？你必须等待前一个 token 生成才能生成下一个 token。所以在投机解码中，你结合了两个模型。你使用的是一个较小的模型，它像一个草稿模型，可以非常快速地生成所有 token。然后，你使用你的大型模型来回溯并验证较小模型输出的正确性。通过结合这两个模型，你能够获得较小模型的速度和较大模型的准确性。如果你仔细想想，你的速度上限是这个，你的速度上限是大型模型的速度。所以，你最多只能达到大型模型的速度，但永远不会超过它。所以，它只会更快。

<details>
<summary>Original English</summary>

**Sarah Chang**: Um, but going back to software, I also want to talk about really quickly one thing that Cerebras implements on the software side to accelerate inference. And so one way that you can accelerate inference is through a technique called spec um standard decode or speculative decoding. So in standard decoding you have one model generate every single token one at a time. And this is sequential, right? You have to wait for the previous token to be generated to generate the next token. So in speculative decoding, you combine two models. And what you're doing is you use a smaller model that's like a draft model that can generate all of the tokens very quickly. And then you use your larger model to go back and verify that the output of the smaller model is correct. And by combining these two models, you're able to get the speed of the smaller model and the accuracy of the larger model. And if you think about it, your speed is capped by this uh your like this the speed um is capped by the speed of the larger model. So you will up to the large like the speed will be up to the larger model um but it will never go beyond it. So it will only be ever be faster.

</details>

**Sarah Chang**: 作为一个简短的总结：硬件，内存带宽，我们已经谈过了；软件，投机解码，但那只是一个小插曲，我现在想回到研讨会。现在你有了所有需要的背景知识。

<details>
<summary>Original English</summary>

**Sarah Chang**: So as a kind of a short recap, hardware, memory, bandwidth, we talked through that software, specular decoding, but that was a little side moment and I want to go and now back to the workshop. Now that you have all the context that you need.

</details>

**Genway**: 干得漂亮。

<details>
<summary>Original English</summary>

**Genway**: Awesome job.

</details>

**Genway**: 是的，谢谢 Sarah。对于那些晚点加入的各位，你们可以扫描二维码获取入门代码。我们之前在幻灯片里展示过，但因为我们要教大家如何构建这些销售代理，所以你们可以跟着我们的代码来操作。嗯，是的，我认为在未来，大多数客户互动都将是 AI 驱动的。但是，你知道，与其仅仅与聊天机器人来回打字，不如真正拥有这些客户互动最好的方式是通过真实的对话，这就是为什么语音代理如此强大。那么，在我们深入探讨之前，语音代理究竟是什么？

<details>
<summary>Original English</summary>

**Genway**: Yeah, thanks Sarah. Um, for those who folks who join in late, you guys can scan the QR code to get the starter code. We had it in the early slide, but um since we'll be teaching you guys how to build these sales agents, you can follow along with our code. Um yeah, so I think in the future, most customer interactions will probably be AI powered, but you know, instead of just typing back and forth with the chatbot, what the best way to kind of really have these customer interactions is really through real conversations, which is why voice agents are so powerful. So before we dive deep into it, what exactly is a voice agent?

</details>

### 语音代理的核心能力

**Genway**: 绝对。嗯，所以语音代理是能够同时运行推理、在你说话时持续倾听，并能进行真实且非常自然的对话的状态化智能系统。我想强调四项关键能力。第一，它们能理解并响应语音语言。它们不仅仅是根据字符串匹配或关键词吐出答案，而是能够真正理解人们所说内容的含义。这同样意味着它们可以处理很多复杂的任务。比如，有人可能会问“我正在寻找产品推荐”，然后代理可以随后查看用户的购买历史、商店当前的库存水平，并推荐他们真正喜欢的东西。你可能在某些地方看到这被称为多代理或工作流。语音显然是沟通意图最快的方式。我们现在正在说话，我想 [笑声] 但你可以直接说出你想要什么。没有打字，没有点击菜单，也没有学习曲线。最后，除非代理能够跟踪对话的状态，否则这一切都不可能实现。这意味着通信显然是非常高语境的，你的代理需要拥有状态，以便它们能够随着时间的推移进行连贯的对话。所以，正如你所能想象的，这使得语音代理非常完美。你现在看到很多初创公司涌现，尤其是在客户服务、销售、技术支持等方面。所以，今天我们将专注于销售代理的用例。那么，首先，让我们谈谈当你在进行对话时，语音代理内部到底发生了什么，并将其分解。

<details>
<summary>Original English</summary>

**Genway**: Absolutely. Um so voice agents are stateful intelligent systems that can simultaneously run inference while constantly listening to you when you're speaking and they can actually engage in real and very natural conversations. Um I would like to highlight four key uh capabilities. First, they understand and respond to spoken language. um they don't just spit out answers based on string matching or keywords but rather they can actually understand the meaning behind what people are saying. Um this also means that they can handle a lot of complex tasks. So someone might ask like I'm looking for a product recommendation and the agent can subsequently kind of look into the users's purchase history, the shops's current stock levels and recommend something that they actually like. And you actually might see this referred in some places called multi-agent or workflows. Um speech is obviously the fastest way to communicate your intent in any system. We're speaking now I guess [laughter] but you can just say what you want. There's like no typing, no clicking through menus and no learning learning curves. And lastly um none of this would be possible unless the agent can keep track of the state of the conversation. uh which means the communications obviously is very highly contextual and your agents needs to have like state so they can actually hold a coherent conversation across time. So as you can imagine this makes um voice agents perfect. You see a lot of startups happening right now especially in customer service, sales, tech support etc. And so today we're going to be focusing on the sales agent use case. So, first let's talk about what's actually happening inside a voice agent when you're having a conversation and break it down.

</details>

### 语音代理架构解析

**Sarah Chang**: 是的。所以，你们可以看到右边的这个图，一旦检测到语音，语音数据就会被转发到 **STT**，也就是语音转文本。它会实时监听并将你的话语转换为文本。这个过程的最后一步是**话语结束**或**轮次结束检测**。每次你停顿，AI 都会打断你。这非常令人讨厌。所以，虽然 VAD（语音活动检测）可以帮助系统知道你何时说话以及何时不说话，但分析你所说的内容、你说话的上下文以及预测你是否已完成表达想法也非常重要。所以，我们这里还有一个更小的模型，它在 CPU 上快速运行，它会指示系统在你仍然说话时等待。所以，一旦你的轮次结束，最终的文本转录就会被转发到下一层。

<details>
<summary>Original English</summary>

**Sarah Chang**: Yeah. So, you guys can see on this diagram on the right, once speech is detected, the voice data is forwarded to ST or that's called speech to text. This listens and converts to your your words to text in real time. And the last step in this process is end of utterance um or end of turn detection. um being interrupted by AI every time you pause. It's like very annoying. So, while VAD can help the system know when you are and you aren't speaking, it's also very important to analyze like what you're saying, the context of your speech, and to predict like whether you've done sharing your thoughts. So, we have another small smaller model here that runs quickly on the CPU, which will instruct the system to wait if it predicts you're still speaking. So, once your turn is done, the final text transcription is forwarded to the next layer.

</details>

**Sarah Chang**: 然后在那之后，我们进入思考阶段。所以，你的整个问题现在被传递给大型语言模型。嗯，这基本上就是大脑，它理解你在问什么。它可能需要查找信息，我们稍后会讲解。嗯，比如在这个例子中，如果我们正在进行销售电话，我们会想拉取额外的上下文，比如文档，你的其他，比如更多关于你公司的信息。

<details>
<summary>Original English</summary>

**Sarah Chang**: And then after that phase, we have the thinking phase. So your entire question is now passed onto the large language model. Um, and this is basically, you know, the brain like understands what you're asking. So it might need to look things up, which we'll walk through later. Um, like checking in this case, if we're doing a sales call, we'll want to pull additional context like documents, your other like more information about your company basically.

</details>

**Genway**: 是的。然后是第三个也是最后一步，即说话阶段。当 LLM 将响应流式传输回代理时，代理会立即开始将这些 LLM token 转发给 **TTS** 引擎，即文本转语音。这个生成的音频从 TTS 流式传输回你的客户端应用程序，实时进行，这就是为什么代理在它还在思考时就能开始响应。所以，最终结果是所有这些组件的结合，造就了一个感觉非常响应迅速、非常连贯且即时的 AI 代理，尽管幕后进行了大量的复杂处理。所以，有很多活动部件。在这种情况下，我们将使用 **LiveKit** 的代理 SDK 来处理所有这些编排。它将管理音频流，跟踪上下文，并协调我们刚刚讨论过的所有这些不同的 AI 服务。

<details>
<summary>Original English</summary>

**Genway**: Yeah. And then the third and the final step is the speaking phase. So as LM streams response back to the agent, the agent will immediately starts forwarding these LLM tokens to the TTS engine or text to speech. Um this generated um audio from TTS streams back to your client's application in real time and that's why the agent can actually start responding when it's still thinking. So the final result is that all of these components tied together is what's making, you know, an AI agent that feels very responsive, that feels very cohesive and immediate, even though there's a lot of complex processing happening behind the scenes. So there's a lot of moving pieces. In this case, we're going to be using LiveKit's agent SDK to handle all this orchestration for us. Um, it's going to manage the audio streams, keep track of the context, and coordinate all these different AI services that we've just talked about.

</details>

### 代码准备与工具介绍

**Genway**: 好了，现在我们有了一点背景知识，你可以访问这里的入门代码。我们已经分享过了。如果你想运行第一个部分，它将允许你安装所有必需的包。所以，如果你点击它，你将能够看到一些包被下载的输出。所以，它将使用支持 **Cartisia**、用于语音活动检测的 Cilero 以及 **OpenAI** 兼容性的 LiveKit 代理。我们已经非常简要地谈到了 Cerebras。它的速度比 GPU 快 50 倍。嗯，我将跳过这里。所以，作为最后的说明，对于这次研讨会，我们将使用 **Llama 3.3**。如果你看右下角的图表，这是来自 **Artificial Analysis** 的图表。Artificial Analysis，如果你不熟悉，是一个独立的基准测试，它对许多不同的模型、API 提供商等进行基准测试，包括智能、速度、延迟等所有方面。所以，你可以看到这里的比较，Cerebras 在最左边，就每秒 token 而言，以及你其他的提供商，比如 Nvidia。

<details>
<summary>Original English</summary>

**Genway**: So, now that we have a little bit of context, um you can access the starter code here. We shared it already. And if you want to run the first section right here, it'll allow you to install all of the necessary packages. So, if you click on it, um you'll be able to see some of the output of the packages being downloaded. And so, this is going to use live kit agents with support for Cartisia, Cilero for voice activity detection, and openai compatibility. And so we've very briefly talked about Cerebras. It is 50 times faster than GPUs. And um I'll skip here. And so as a final note, so for this um for this workshop, we're actually going to be using Llama 3.3. And if you see in the chart on the bottom right, this is a chart from artificial analysis. Artificial analysis, if you're unfamiliar, is an independent benchmark that benchmarks a lot of different models, API providers, etc. um on intelligence, speed, latency, everything. And so you can see a comparison here of Cerebras on the very left in terms of tokens per second and any of your other providers like Nvidia.

</details>

**Sarah Chang**: 太棒了。嗯，回到我们的代码，希望大家都有时间安装好这些包。嗯，现在我们也可以安装 Live CLI。这对我们今天的研讨会来说是可选的，但如果你想在本次研讨会之后继续使用 LiveKit，这里是命令，取决于你的系统。嗯，总的来说，我们今天显然使用的是 Python notebook。所以，开始时没有人需要为你的环境而烦恼。但再次强调，如果你想持续构建和部署语音代理，CLI 可能是最简单的方式。所以，只需输入 `lk app create`，你就可以立即克隆一个预先构建好的代理，就像这个一样。

<details>
<summary>Original English</summary>

**Sarah Chang**: Awesome. Um going back to our code, um hopefully everyone has had a second to kind of install the packages. Um, and now let's also in we can also install the live CLI. This is optional for our workshop today, but if you want to use live kit beyond this, um, here are the commands depending on your system. Um, in general, we're obviously using Python notebook today. So, no one has to battle around your environment when we're getting started. But again, if you want to continuously build and deploy uh the voice agent, the CLI probably is the easy way easiest way to do it. So just uh type in LK app create and you can instantly clone a pre-built agent like this one.

</details>

### LiveKit 平台介绍

**Genway**: 酷。我们来稍微谈谈 **LiveKit** 到底是什么，以及为什么我们需要它来构建语音代理。现有的互联网并不完全是为构建语音代理应用程序而设计的。HTTP 代表超文本传输协议。所以，它是为在网络上传输文本而设计的，显然，对于我们正在构建的内容，我们需要在网络上传输语音数据，而不是仅仅是文本，并且延迟要低。嗯，LiveKit 是一个用于此目的的实时基础设施平台。所以，它不使用 HTTP，而是使用一种称为 **WebRTC** 的不同协议来传输客户端应用程序与 AI 模型之间的语音数据，延迟低于 100 毫秒，遍布全球，这太棒了。它非常健壮，可以处理大量并发会话，并且是完全开源的。所以，你可以深入研究代码，看看它是如何工作的，甚至可以自己托管基础设施。

<details>
<summary>Original English</summary>

**Genway**: Cool. And um let's talk a little bit about what exactly LifeKit is and why we need it for a voice agent. So the existing internet isn't exactly designed to build voice agent a uh application. So HTTP stands for hypertext transfer protocol. So it was designed for transferring text over a network and obviously for what we're building we need to transfer voice data instead of just text over a network with low latency. Um and kit is a real-time infrastructure platform for doing just that. So instead of using HTTP actually uses a different protocol called web RTC to transport voice data between your client application AI model with less than 100 millisecond of latency anywhere in the world which is awesome. It's very resilient, handles a lot of concurrent sessions and it's fully open source. So you can kind of dig into the code and you can see how it works or even host infrastructure yourself as well.

</details>

**Genway**: 嗯，是的，你可以使用 LiveKit 来构建任何类型的语音代理，比如可以加入你会议的代理，可以接听电话中心的电话的代理，以及在我们今天的案例中，一个可以在你的网站上代表你与潜在客户交谈的代理。在这里，你可以看到它与我们之前展示的原始图表的连接。所以，你看到了 LLM、TTS、STT 以及我们之前讨论过的所有 AI 组件。现在你可以看到，你知道，像 LiveKit、Tart、Cartisia、你的推理提供商，所有这些东西是如何协同工作来帮助你创建一个语音代理的。所以，正如我提到的最后一个组件是实际的语音处理。所以，除了 Cerebras 和 LiveKit 之外，正如我提到的，我们将使用 Cartisia 将语音转换为文本，然后在最后将文本转换回语音。

<details>
<summary>Original English</summary>

**Genway**: Um yeah, so you can use live kit to build any of type of like voice agents, the ones that can join your meetings, the ones you're answering phone calls and sell centers and call centers and in our case today an agent that can speak to prospective customers on your website on your behalf. And here you can see connecting it to the original diagram that we showed. So you see like the LLM, TTS, ST and all the AI components that we talked about earlier. And now you can see, you know, how these actual tools like Live Kit, Tart, Cartisia, your inference provider, all of these things are actually playing together to help you create a voice agent. And so the final component as I mentioned is the actual speech processing um which so in addition to cerebrus and lifkit and as I mentioned we'll be using cartisia to turn the voice into text and then at the end text back to voice.

</details>

### 为 AI 销售代理提供业务上下文

**Sarah Chang**: 好了，现在我们的 API 密钥已设置完毕，第二步是教我们的 AI 销售代理了解我们的业务。当你培训新员工时，你必须向他们提供关于你业务的信息和背景。所以，这就是我们现在要做的事情。

<details>
<summary>Original English</summary>

**Sarah Chang**: So now that our API keys are set up, step two is all about teaching our AI sales agent about our business. So when you train a new employee, you have to give it information and context on your business. And so that's what we're going to be doing now.

</details>

**Genway**: 是的。嗯，我认为 LLM 经常面临的挑战是，它们了解很多关于一切的事情，但它们可能不了解你公司的许多具体事物或领域知识。嗯，它们的好坏程度与其训练集相当。所以，如果我们想用非普遍公开知识的任何信息来回应，我们应该真正尝试将它加载到 LLM 的上下文中，以最大限度地减少幻觉或任何“我无法帮助您”之类的罐头回复。所以，在这种情况下，我们将只是向 LLM 提供一个包含额外信息的文档。例如，如果有人询问定价，我们可以加载我们的定价详情。但我们也可以加载产品描述、定价信息、关键优势等信息。我们还可以做的另一件大事是编写对常见异议的预先编写的回复。所以，例如，如果有人经常说“太贵了”，你可以写一个预先编写的消息，这样我们的代理就能始终保持在主题上，并拥有正确的上下文。所以，如果你查看笔记本，你可以看到实际的上下文是什么样的。你不需要只给它访问一个完整的文档。你可以看到我们已经将销售代理所需的所有信息组织成一个非常简单的结构化格式，供 AI 理解和引用。所以，你可以看到一个好的销售人员需要的一切，比如描述，然后正如我们提到的，它也有这些预先编写的消息，这样你就可以更密切地控制你的语音代理的行为。

<details>
<summary>Original English</summary>

**Genway**: Yeah. Um, I think the challenge a lot of the times with LLMs is that they know a lot about everything, but they might not know many specific things or domain things about your company. Um, and they're only really as good as their training set. So, if we want to respond with any information that isn't common public knowledge, we should really try and load it into the LLM's context to minimize hallucination or any sort of canned responses such as, "I can't help with that." So, in this case, we're just going to be feeding the LLM a document with additional information. So, for example, we can load our pricing details if someone asks about pricing. But we can also load information like product descriptions, pricing info, key um key benefits. And another big thing that we can do is write pre-written responses to common objections. So, for example, if it's common that someone says it's too expensive, you can write a pre-written message so that our agent will always stay on message and it has the correct context. So, if you look at the notebook, you can see what that context looks like in practice, right? you don't have to just give it access to a full document. Um you can see that we've in um organized all the information that our sales agent needs into a very simple structured format for the AI to understand and reference. So you can see everything that you um a good salesperson would need like the descriptions and then as we mentioned it has these pre-written messages as well so that you can control the out um the behavior of your voice agent more closely.

</details>

### 创建与运行销售代理

**Sarah Chang**: 嗯，现在我们进入更激动人心的部分，甚至更激动人心的部分，第三步，我们实际创建我们的销售代理。这就是我们刚才讨论过的所有组件，我们将把它们连接起来，形成一个可工作的系统。嗯，在你运行任何东西之前，让我们实际看看销售代理类中发生了什么。所以在代码中，你可以看到我们通过使用我们之前定义的 `load_context` 函数来加载我们的联系人。这使我们的代理能够访问我们设置的所有产品信息、定价和异议处理程序。哦，抱歉。所以，最后，我想看看我们如何在代码中实现所有内容，以创建实际的销售代理。所以，笔记本中有更多代码，但作为一个高级概述，你想开始，有大约四个组件。所以，你想开始，你知道，告诉你的销售代理，你的语音代理，沟通，你的销售代理通过语音沟通，并给它适当的规则，比如你知道，不要使用项目符号，因为一切都是口头表达的。所以，你想做一些提示。然后最重要的是，只使用你提供的上下文中的信息。所以，你要非常小心，特别是对于语音代理，要尽量减少幻觉的风险。然后 `super()` 调用是初始化我们的代理并将所有配置传递给父代理。这正在用 LLM、TTS、VA 和所有指令一起设置我们的代理。然后，我们要做的最后一件事是，我们还将定义一个 `onenter` 方法，它将启动实际的对话。所以，一旦有人加入与代理的对话，而不是坐在沉默中，它会立即，嗯，这会在有人加入对话时触发。所以，而不是一直沉默，你将立即生成那个问候语，而一个好的销售人员会提供帮助。

<details>
<summary>Original English</summary>

**Sarah Chang**: Um, now we're off to the more exciting part, even more exciting part, step three, where we actually create our sales agent. So, this is where everything that we've just talked about, the components, and we're going to wire them all together into a working system. Um, and before you run anything, let's actually walk through what is happening in the sales agent class. So, in the code, you can see we start by loading our contacts by using the load context function we defined earlier. And this gives us our agent access to all the product information, pricing, and objection handlers that we set up. Oh, sorry. So, and finally, I want to look at how we're implementing everything in code in terms of creating the actual sales agent. So the there's way more of the code in the notebook, but as a high level um you want to start there's kind of four components. So you want to start by you know telling your sales agent your voice agent communicating um your sales agent commun communicating by voice um and give it proper rules like you know don't use bullet points because everything is spoken aloud. So you want to do um a bit of prompting and then most importantly only use information from the context that you provided. So you want to make be very careful especially with voice agents that you are not allowing um that you're reducing the risk of hallucinations as much as possible. And then the super call is what's initializing our agent and passes all of our configurations to the parent agent. And this is setting up our agent with the LMC TTS VA and all the instructions working together. And then the last thing that we're going to do is we're also going to define an onenter method which is what's going to start the actual conversation. So, as soon as someone joins the conversation with the agent, instead of sitting in silence, it immediately um or this is triggered as soon as someone joins the conversation.

</details>

**Genway**: 是的。然后我们进入第四步。我们实际上正在启动一个序列并运行代理。嗯，将整个入口点函数想象成我们代理的“开始”按钮。当有人想要进行对话时，它会启动所有齿轮，让代理准备好交谈。所以，这个入口点函数正在做三件主要的事情。它将代理连接到一个虚拟房间，对话将在其中进行。所以，这就像拨打一个电话会议。然后，它将创建一个我们刚刚配置的销售代理实例。最后，它将启动一个管理对话来回的会话。所以，这就是设置销售代理的基础或主要框架。但是，为了让这个项目更健壮，我们将讨论一些可以扩展你的销售代理的方法。所以，这是一个例子。

<details>
<summary>Original English</summary>

**Genway**: So, instead of ever sitting in silence, you're going to immediately generate that grading um and the good salesperson will help. Yeah. And then we're off to our step four. We're actually launching a sequence and running the agent. Um, think of this entire kind of uh entry point function as a start button to our agent. And when someone wants to have a conversation, obviously it kicks off every in the gear and gets the agent ready to talk. So this entry point function is doing three main things. So it's connecting the agent to a virtual room where the conversation will happen. So it's like dialing into a conference call. Um, then it's going to create an instance of our sales agent with the setup that we just configured. And so finally, it's going to start a session that manages the back and forth conversations. And so that is it for the basis or like I guess the main framework for how you would set up a sales agent.

</details>

### 扩展销售代理：多代理系统

**Genway**: 是的。所以，你可以做的一件事就是将我们的单个代理扩展成一个多代理系统。嗯，就是，你知道，如果有人打电话来询问关于 API 集成的非常深入的技术问题，你真的希望他们与你最好的技术人员交谈，而不是仅仅与你的定价专家交谈。嗯，再次强调，所有 LLM 都有有限的上下文窗口，这意味着与人一样，它们在可以专门处理的事情上有局限性。嗯，这里是另外三个代理，除了我们今天帮助大家运行的那个入门代理之外。我们在此案例中提出的三种不同代理是问候代理，我们的主要销售代理，它负责筛选潜在客户。我们有一个技术专家代理，如你所见，它专门负责解决技术问题。然后，最后，我们有定价专家代理，它负责预算、投资回报率以及交易谈判。所以，你想在这里考虑的主要事情是，你知道，在一个真正的销售团队或任何多代理系统中，你希望你所有的代理都能做非常不同的事情。所以，在这个实现中的一个关键点是，我们有一个交接。所以，我们的问候代理会弄清楚客户实际需要什么，然后能够将其路由到相关的子代理。而所有这些不同代理的代码也都已在笔记本中完全实现。

<details>
<summary>Original English</summary>

**Genway**: But to make this project a little more robust, we're actually going to talk about one a few ways that you can expand your sales agent. So here's one example. Yeah. So one thing you can do um to expand our single agent into a multi-agent system is um to just you know if someone calls asking really deep technical questions about API integrations you really want them talking to your best technical person and not just your spicing pricing specialist. Um again all limbs have limited context windows which means that similar to people they have limits on the amount of things that they can actually specialize. Um and here are the three other agents in addition to that single agent that um the the starter co has just helped you guys run. Um three of the different agents that we propose in this case are um greeting agents um our main sales agent who qual qualifies leads. We have a technical specialist agent as you can see on the left um who are obviously specialized in sol solving technical issues is the intent and then finally we have the pricing specialist agent on the right which handles budget ROI and also deal negotiations. So the main thing that you want to think about here is you know on a real sales team you want or any like multi-agent system you want all of your agents to be able to do very different things. And so one of the key things in this um implementation is that we have a um is that we have a handoff. So our greeting agent is what figuring out what the customer actually needs and then being able to route to the um to the relevant sub agent. And the code for all of these different agents is fully fleshed out in the notebook as well.

</details>

**Genway**: 然后最后一件事当然是添加工具调用。所以，例如，当客户询问技术细节时，你知道，我们可以正确地路由。这也在代码笔记本中实现了。好了，这就是全部内容。所以，非常感谢大家的参与。再次强调，所有包含说明和步骤的笔记本都在我们提供的笔记本中。我们将在这里回答你们可能有的任何问题。谢谢大家。

<details>
<summary>Original English</summary>

**Genway**: And then the last thing of course is you can is adding tool calling. So for example when someone a customer asks about technical details you know we can properly route and then this is also implemented as well in the code notebook and that is it. So thank you guys so much for coming. Um all again all of the notebook with all the instructions and the step by step is in the notebook that we're provided and have built. Um and we'll be up here to answer any questions that you guys might have. Thank you guys.

</details>

[applause]

[music]