---
title: Fal.ai AI视频的未来、推理优化与创成式媒体市场的激烈竞争
summary: 本视频探讨Fal.ai如何通过极致的推理优化，在竞争激烈的AI视频市场中脱颖而出，并将其定位为创成式媒体云平台。
area: tech-insights
category: technology
project:
- ai-impact-analysis
- cultural-critique
tags:
- infrastructure
- media
- optimization
- startup-culture
companies_orgs: []
products_models: []
media_books:
- ai-video
date: 2025-08-01
author: Lei
speaker: a16z
draft: true
guest: null
insight: null
layout: post.njk
series: null
source: http://www.youtube.com/watch?v=NKNYKYoDSNA
status: evergreen
---

# Fal.ai：AI视频的未来与推理优化

## 创成式媒体的激烈竞争与市场演变

In general there is still a lot of demand for image models and there seems to be some kind of convergence on like quality but then each model really has its own differentiation. [00:00:00]

总的来说，对图像模型的需求仍然很大，而且在质量上似乎出现了一定程度的**趋同**，但每个模型都有自己的差异化。

With video we're earlier in the competition there's still a lot of leaprogging happening there's just so much more to build and there's just like you know we haven't hit like a quality bar where there's just like marginal improvements we're not there yet. [00:00:09]

在视频领域，我们处于更早期的竞争阶段，仍在发生大量的**跨越式发展**，有太多东西需要构建，而且我们尚未达到一个只有边际改进的质量门槛，我们还没有到达那个阶段。

I remember when Sora came out even in our team people were like oh my god OpenAI is like so far ahead that no one's going to be able to catch up. [00:00:35]

我记得当 Sora 发布时，甚至在我们团队内部，人们都说：“天哪，OpenAI 领先太多了，没人能追得上。”

And then like Luma released their model Runway released their model Cling released their model Minimax released and every release like if you're not the best you're not releasing generally that's how it works. [00:00:43]

然后 Luma 发布了他们的模型，Runway 发布了他们的模型，Cling 发布了他们的模型，Minimax 也发布了。通常的规律是，如果你的产品不是最好的，你就不会发布。

You can never like say oh this is the model and then this is not going to have any competition for like even a month right like even like two weeks is like I think that we are operating at like weeks as I said. [00:00:53]

你永远不能说：“这是最好的模型，未来哪怕是一个月都不会有竞争对手。” 就像我说的，我们目前是以**周**为单位进行运营的。

## Fal.ai 的技术起源与架构策略

### 从Python运行时到SD1.5的性能优化

The origin story is I I used to work at Coinbase and they had a lot of infra issues with respect to machine learning and fraud was a big problem there. [00:01:06]

我们的起源故事是，我曾在 Coinbase 工作，他们在机器学习方面存在很多基础设施问题，欺诈是一个大问题。

About a year and a half into us starting the company Chhat GPT happened Delhi happened the whole world of machine learning and AI changed so we sort of adopted uh as as things were developing. [00:01:32]

在我们创办公司大约一年半后，ChatGPT 和 DALL-E 出现了，整个机器学习和 AI 的世界都改变了，所以我们随着事态的发展而进行了**调整和适应**。

We just kept asking ourselves why the heck is it so damn slow. I remember SD15 taking 19 seconds maybe 10 plus seconds to like run. [00:06:23]

我们不断问自己：“为什么它（Stable Diffusion 1.5）慢得要命？” 我记得 SD1.5 运行一次需要 19 秒，甚至超过 10 秒。

We just went super deep into SD15 and just like optimized the hell out of it that was like really the start of it and it it didn't really have anything to do with we think this is going to be massive it really started with like a technical curiosity. [00:06:45]

我们深入研究了 SD1.5，并对其进行了**极致的优化**，这才是真正的起点。这与我们认为它会变得非常庞大无关，它始于一种**技术上的好奇心**。

### 稀缺GPU资源下的第一性原理优化

I come from like a traditional compilers background and everything is like performance engineering like you just take a program profile it under different conditions figure out where's the bottlenecks and try to understand why isn't this operating at the maximum achievable speed for your CPU for your clock speed whatever. [00:08:35]

我来自传统的**编译器**背景，一切都关乎**性能工程**：对程序进行配置分析，找出瓶颈，并理解为什么它没有以 CPU 或时钟速度所能达到的最大速度运行。

I did the same math with GPUs this is the GPU this is the horsepower this is the maximum achievable flops that I could get out of the GPU and this is how much flops this workload needs what is the difference there. [00:08:52]

我对 GPU 进行了同样的计算：这是 GPU 的马力，这是我可以从 GPU 获得的**最大可实现浮点运算** (Flops) 次数，而这个工作负载需要多少 Flops？两者之间的差距在哪里？

We were able to extract an insane amount of value just by optim optimizing these programs going to the first principles trying to understand why the slow where are the bottlenecks and how can we resolve those. [00:08:14]

我们通过**优化**这些程序、回归**第一性原理**来提取了巨大的价值，试图理解为什么会慢、瓶颈在哪里以及如何解决。

I guess distributed file system caching was one of the biggest points you know just making making sure that if I load the same model weights in the same data center I can just read from my peers which I'm connected the 100 gigabit. [00:27:18]

我认为**分布式文件系统缓存**是最大的优化点之一，确保如果我在同一个数据中心加载相同的模型权重，我可以从通过 100 千兆位连接的**对等节点**读取数据。

We started building our own orchestration system to be **multicloud** (多云/多云：指在多个云服务提供商的环境中部署和管理应用) and when you when you go multicloud another big component is you need to be able to have access to the same data. [00:26:10]

我们开始构建自己的**编排系统**以实现多云部署。当你使用多云时，另一个重要组成部分是你需要能够访问**相同的数据**。

## 聚焦“创成式媒体”市场

### 市场分化与工作流的复杂性

The point when it kind of clicked for us was actually I think Llama 2 was a a pretty pretty big turning point when Llama 2 got released there was this big rush towards inference platforms in general. [00:10:21]

对我们来说，**关键的顿悟时刻**发生在 Llama 2 发布时，这是一个非常重要的转折点。Llama 2 发布后，业界普遍涌向**推理平台**。

The other reason was these image models there's so much demand and the use cases are starting to appear and it's looking like its own thing. [00:10:55]

另一个原因是这些图像模型的需求巨大，用例开始出现，它看起来像是一个**独立的领域**。

That was kind of like the first moment where we said there's something here that is is kind of special about these models maybe they should be its own market like maybe we should be a specific platform for just images. [00:11:13]

那是我们第一次觉得这些模型有其特殊之处，也许它们应该成为一个**独立的市场**，也许我们应该成为一个**专门针对图像的平台**。

We want to be the torchbearer of the space and we're just going to be super focused here a few months after that I think Sora got announced and that was like definitely the right bet. [00:11:47]

我们想成为这个领域的**火炬手**，并将超级专注于此。几个月后，Sora 发布了，这无疑证明了我们的赌注是正确的。

It's a pretty complex and bespoke custom workflow that requires not just the inference engine itself but also how you built this workflow on top of it the whole **confi** (ComfyUI/工作流界面：一个基于节点流程的工具，允许用户通过连接模块来构建复杂图像生成流程) community are focused on that and that's just very different from language model. [00:14:40]

这是一个相当复杂且**定制化**的工作流，它不仅需要**推理引擎**本身，还需要你如何在其之上构建这个工作流。整个 **Confi UI** 社区都专注于此，这与**大型语言模型** (LLM/大型语言模型：专注于文本和语言处理的人工智能模型) 有很大不同。

### Fine-Tuning 与双边市场

It just adds more capabilities into the overall pipeline we also saw **fine tuning** (微调/模型微调：指使用特定数据集对预训练模型进行二次训练，以适应特定任务或风格) being like a major component to this where if I have to guess I think there's been 1,000 times more fine-tunings in the image space than the language space. [00:16:24]

它为整个管线增加了更多功能。我们还看到**微调**成为了一个主要组成部分。我猜，图像领域的微调次数可能比语言领域多了 1000 倍。

On one side you have a lot of this developer attention customers and users that have unique use cases that coming to you for the device and also for the API endpoints on these uh image video models. [00:21:34]

一方面，你有大量开发者、客户和用户的关注，他们有独特的用例，来找你们寻求关于这些图像视频模型的建议和 API 接口。

On the other side because you have this developer attention which is awesome and more and more signing up every every day every week the model players wants to you know expose their models to the end users as well. [00:21:46]

另一方面，由于你们获得了开发者关注，而且每天每周都有更多人注册，模型厂商也希望将他们的模型展示给终端用户。

## 企业文化：客户至上与持续迭代

### 工程驱动与以客户为中心

I think pretty early on we put a lot of effort in engineering obviously like I think until we were like 28 people or so we were all engineers years and I think like the 28th hire was a non-engineer so like our core is like very engineering heavy. [00:29:36]

我认为在很早的时候，我们就投入了大量精力在**工程方面**。我想在我们公司大约有 28 人时，我们都是工程师，第 28 个雇员才是一个非工程师，所以我们的核心是非常**工程驱动**的。

We are like really customer centric when consider a company i think we might be one of the company like we might in the in the top leaderboard of Slack connects across all Slack users. [00:34:19]

说到公司，我们是非常**以客户为中心**的。我想我们在所有 Slack 用户中，可能是使用 Slack Connects 排名靠前的公司之一。

The channels are open so engineers are inside the channels like every channel might have like an average three four different engineers from applied ML team product. [00:34:28]

我们的渠道是开放的，所以工程师都在渠道里，每个渠道平均可能有三四个来自**应用机器学习团队**和产品团队的不同工程师。

### 速度不是护城河，而是焦点

I don't see inference engineering speed as like that more it's always focus and being one step ahead always being at the peak right. [00:28:25]

我并不认为**推理工程的速度**是**护城河**（A Mode）。它永远是**专注**，是永远领先一步，永远保持在巅峰状态。

It's like if you're just saying "Oh I built this great thing here's the good set of kernels." it's going to get outdated because Nvidia has like 50 people working on these sort of stuff i don't know Meta has like 100 people working on this stuff so for us it's always this is our focus. [00:28:37]

如果你只是说：“哦，我构建了这个很棒的东西，这是很好的内核集合。” 它会过时的，因为 NVIDIA 有 50 个人在研究这些东西，Meta 有 100 个人在研究。所以对我们来说，**保持专注**永远是重点。

### AI视频的未来：新用例的爆发

If generative video do not take off or as big as it is what would be the reason that caused the slop i think it's impossible that it doesn't take off it's here it's all over my feed. [00:35:56]

如果**创成式视频**没有起飞或达到预期规模，原因可能是什么？我认为它不可能不起飞，它已经来了，我的信息流里到处都是。

I think the question is more like how is it going to be distributed across like different industries where are the biggest opportunities and like how can we actually go invest in those areas. [00:36:23]

我认为问题更多在于它将如何在不同行业中**分配**，哪里是最大的机会，以及我们如何能够真正去投资这些领域。

I think what we all agree is that we're very excited about the **net new use cases** (全新用例/全新用例：指生成式AI技术催生出以往不可能实现的应用场景). [00:36:53]

我认为我们一致同意的是，我们对**全新用例**感到非常兴奋。

We're most excited about these net new use cases which is not to say like everything else is small but it really feels like these technologies are so powerful that like we're going to get a lot of net new things being built on top. [00:37:21]

我们对这些全新用例最为兴奋，这并不是说其他一切都很小，而是感觉这些技术如此强大，我们将在其之上构建出大量全新的事物。