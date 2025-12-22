---
author: Dwarkesh Patel
date: '2024-10-09'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=J7yvSkIOZLw
speaker: Dwarkesh Patel
tags:
  - llm
  - gpu
  - data-center
  - compute-infrastructure
  - ai-training
title: AI算力竞赛：微软与OpenAI的百亿级数据中心扩张与未来展望
summary: 本文深入探讨了AI训练所需的庞大计算基础设施。分析了微软和OpenAI在数据中心、GPU（如H100、GB200）规模上的巨额投资，以及未来几年内计算能力的指数级增长预测。讨论了电力需求、网络连接和资金挑战，并展望了AI算力发展的关键趋势。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-work
project:
  - ai-impact-analysis
people:
  - Dwarkesh Patel
  - Dylan Patel
  - Sam Altman
  - Elon Musk
companies_orgs:
  - Microsoft
  - OpenAI
  - Anthropic
  - Amazon
  - Lumen Technologies
  - Zayo
  - Cor-weave
  - Oracle
  - QTS
  - Cooper
products_models:
  - H100
  - GB200
media_books: []
status: evergreen
---
### 训练新范式

You could imagine that the training regime becomes much more paralyzable, where most of the compute for training is used to come up with synthetic data or do some kind of search. And that can happen across a wide area. You have synthetic data, you have this search stuff, you have all these post-training techniques, you have all these ways to soak up **FLOPs** (Floating Point Operations Per Second: 每秒浮点运算次数，衡量计算能力的指标), or you just figure out how to train across multiple data centers.

### 巨头基建投资

I think at least **Microsoft** and **OpenAI** have figured it out. Their actions show this: Microsoft has signed deals north of **$10 billion** with fiber companies to connect their data centers together. There are some permits already filed to show people are digging between certain data centers. So, we think with fairly high accuracy, we can say that there are five regions that they're connecting together, which comprises of many data centers.

### 算力与电力

What will be the total power? Depends on the time, but easily north of a **gigawatt** (GW: 10亿瓦特，衡量大功率的单位), which is like **close to a million GPUs**. Well, each GPU is getting more power, higher power consumption too. The rule of thumb is like GPU **H100** (Nvidia H100: 英伟达公司推出的高性能GPU型号) is like 700 Watts, but then total power per GPU all-in is like 1200-1400 Watts. But next-generation Nvidia GPUs are, it's 1,200 Watts for the GPU, but then it actually ends up being like **2,000 Watts all-in**.

### GPU功耗趋势

So there's a little bit of scaling of power per GPU. But like, you already have **100K clusters**, right? **OpenAI** in Arizona, **XAI** (XAI: 指代AI研究机构或项目，此处指代与AI计算相关的实体) in Memphis, and many others already building 100K clusters of H100s. You have multiple, at least five, I believe, **GB200** (Nvidia GB200: 英伟达公司推出的下一代AI计算芯片，集成了CPU和GPU) 100K clusters being built by **Microsoft** and partners for them. And then potentially even more **500K GB200s**.

### 数据中心建设

That's a gigawatt, and that's like online next year. And the year after that, if you aggregate all the data center sites and how much power, and you only look at net adds since 2022 instead of the total capacity at each data center, then you're still north of **multi-gigawatt**. So they're spending $10+ billion dollars on these fiber deals with a few fiber companies like **Lumen Technologies** (Lumen Technologies: 美国一家领先的通信技术公司) and **Zayo** (Zayo: 美国一家领先的光纤网络和通信服务提供商), and a couple of other companies.

And then they've got all these data centers that they're clearly building 100K clusters on, like old crypto mining sites with **Cor-weave** (Cor-weave: 美国一家数据中心基础设施提供商) in Texas, or like this **Oracle** (Oracle: 美国一家跨国科技公司，提供数据库软件、云计算服务等) infrastructure in Texas, and then like in Wisconsin and Arizona, and a couple of other places.

There's a lot of data centers being built up by providers like **QTS** (QTS: 美国一家大型数据中心服务提供商) and **Cooper** (Cooper: 指代数据中心相关服务商，具体公司需结合上下文确认), and you go down the list, there's so many different providers, and self-build data centers I'm building myself.

### 2025年算力

So, let's give the number: Okay, 2025, **Elon Musk**'s cluster is going to be the big one. It doesn't matter who it is. Then there's a definition game, right? Like, Elon Musk claims he has the largest cluster at 100K GPUs because they're all fully connected. Then who it is... like, I just want to know how many. I don't know if it's better to denominate in 100,000 GPUs this year for the biggest cluster. Next year, 300,000 to 500,000, depending on whether it's one site or many. 300,000 to 700,000, I think, is the upper bound of that.

### 集群定义挑战

But anyways, it's about when they turn it on, when they can connect them, when the fibers are connected together. Anyways, 300,000 to 700,000, let's say. But those GPUs are 2 to 3x faster versus the 100K cluster. So on an H100 equivalent basis, you're at a **million chips next year**, one cluster by the end of the year.

Yes, no, no, no. Well, so one cluster is like, the wishy-washy definition, right? Multi-site? Can you do multi-site? What's the efficiency loss when you go multi-site? Is it possible at all? I truly believe so. What is it? Whether it's... what's the efficiency loss is a question, right? Okay, would it be like 20% loss, 50% loss?

### 资金挑战

Great question. This is where you need like the secrets of like, and **Anthropic** (Anthropic: 一家领先的人工智能安全与研究公司) has similar plans with **Amazon** (Amazon: 美国一家跨国电子商务和云计算公司), and you go down the list, right? People. And then the year after that, the year after that, is where this is 2026. There is a single gigawatt site. And that's just part of the multiple sites, right? For Microsoft, the Microsoft 5 GWatt thing happens in 2026. One gigawatt, one site in 2026. But then you have a number of other... you have five different locations, each with multiple sites, some with single sites. You're easily north of 2-3 GWatt.

And then the question is, can you start using the old chips with the new chips? And the scaling, I think, is like you're going to continue to see FLOPs scaling much faster than people expect, as long as the money pours in.

That's the other thing: there's no way you can pay for the scale of clusters that are being planned to be built next year for **OpenAI** unless they raise like **50 to 100 billion**. Which I think they will raise that, like end of this year, early next year. 50 to 100 billion? Are you kidding me? No. Oh my God. This is like, **Sam Altman** has a superpower. No, like it's like recruiting and like raising money. That's like what he's got.