---
author: The Pragmatic Engineer
date: '2026-01-21'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=5vL6aCvgQXU
speaker: The Pragmatic Engineer
tags:
  - distributed-systems
  - cloud-infrastructure
  - consistency-models
  - formal-methods
  - vector-database
title: 揭秘 AWS S3：支撑 500 万亿对象的架构演进与工程哲学
summary: 本次访谈深入探讨了全球最大云存储服务 AWS S3 的技术内幕。AWS 数据与分析副总裁 Milan 分享了 S3 如何管理数千万块硬盘的超大规模集群，解析了从最终一致性向强一致性跨越的复杂工程，以及如何利用形式化验证确保正确性。对话还涵盖了 S3 Tables 和向量存储等新特性的演进，揭示了“尊重先例”与“技术无畏”并存的工程文化。
insight: ''
draft: true
series: ''
category: data-engineering
area: tech-engineering
project: []
people: []
companies_orgs:
  - AWS
  - Amazon
  - Sony
  - Netflix
  - Pinterest
  - Statsig
  - WorkOS
  - Sonar
products_models:
  - S3
  - S3 Tables
  - S3 Vectors
  - Apache Iceberg
  - Apache Parquet
  - Apache Hadoop
  - Amazon Glacier
media_books: []
status: evergreen
---
### S3 的惊人规模

**[主持人]**: **AWS S3** 是全球最大的云存储服务，但它究竟有多大？它是如何通过工程设计在如此巨大的规模下保持高可靠性的？**Milan** 是 AWS 数据与分析副总裁，已经管理 S3 长达 13 年。今天我们将讨论 S3 的惊人规模、存储的数据量以及运行的服务器数量。

AWS 是如何看似一夜之间从**最终一致性 (Eventually Consistent)** 存储转变为**强一致性 (Strongly Consistent)** 存储的？这一转变背后有着巨大的工程复杂性。什么是**相关性故障 (Correlated Failure)**、**崩溃一致性 (Crash Consistency)** 和**故障容限 (Failure Allowances)**？为什么 S3 的工程师对这些概念了如指掌？此外，我们还会探讨利用**形式化方法 (Formal Methods)** 确保大规模正确性的重要性，以及更多 AWS 工程团队极少公开谈论的话题。如果你对全球最大系统的构建与演进感兴趣，这一集非常适合你。

本集由 **Statsig** 赞助，这是一个集功能旗标、分析、实验等功能于一体的平台。那么，Milan，欢迎来到播客。

<details>
<summary>Original English</summary>

**[Host]**: AWS S3 is the world's largest cloud storage service, but just how big is it and how is it engineered to be as reliable as it is at such a massive scale? Milon is the VP of data and analytics at AWS and has been running S3 for 13 years. Today we discuss the sheer scale of S3 in the data stored and the number of servers it runs on. How seemingly overnight AWS went from an eventually consistent data store to a strongly consistent one and the massive injury and complexity behind this move. What is correlated failure, crash consistency, and failure allowances, and why engineers on S3 live and breathe these concepts, the importance of formal methods to ensure correctness at S3 scale, and many more. A lot of these topics are ones that AWS engineering rarely talks about in public. I hope you enjoy these rare details shared. If you're interested in how one of the largest systems in the world is built and keeps evolving, this episode is for you. This episode is presented by Statsig, the Unified platform for flags, analytics, experiments, and more. So, Milan, welcome to the podcast.

</details>

**Milan**: 谢谢邀请。

<details>
<summary>Original English</summary>

**Milan**: Thanks for having me.

</details>

**[主持人]**: 首先，你能告诉我 S3 现在的规模吗？

<details>
<summary>Original English</summary>

**[Host]**: To kick things off, can you tell me the scale of S3 today?

</details>

**Milan**: 如果你退一步看 S3，它是一个存放海量数据的地方。目前，S3 存储了超过 **500 万亿**个对象。我们拥有数百 **Exabytes**（百亿亿字节）的数据。我们在全球范围内每秒处理数亿次交易。还有一个有趣的统计数据：我们每年处理超过一 **Quadrillion**（千万亿）次请求。

支撑这一切的底层规模也相当惊人。S3 的底层基础是磁盘和服务器，它们安装在机架上，机架存放在机房里。如果你试着想象这一切的规模，我们在 38 个区域的 120 个**可用区 (Availability Zones)** 中管理着数百万台服务器上的数千万块硬盘。这确实非常了不起。

<details>
<summary>Original English</summary>

**Milan**: Well, if you want to take a step back and just think about S3, it is a place where you put an incredible amount of data. And so, right now, S3 holds over 500 trillion objects. We have hundreds of exabytes of data. And we serve hundreds of millions of transactions per second worldwide. And if you want another fun stat, we process over a quadrillion requests every single year. And what's under the hood of all that is also pretty amazing scale. If you think about, you know, what's underneath the hood of S3 at the fundamentally were we're discs and servers which sit in racks and those sit in buildings. And if you try to think about all of the scale of what is under the hood, we manage tens of millions of hard drives across millions of servers. And that is in 120 availability zones across 38 regions, which is pretty amazing if you think about it.

</details>

**[主持人]**: 所以归根结底，这一切始于服务器里的硬盘，服务器放在机架上，然后有机架阵列、成排的机架、整栋的机房，对吧？你刚才说底层有数千万块硬盘。

<details>
<summary>Original English</summary>

**[Host]**: So deep down it it all starts with hard drives sitting inside servers, sitting inside racks, and then you have a bunch of these racks and then rows of them, buildings of them, right? And that's what you said. So there's tens of millions of hard drives deep down in in in the bottom of this.

</details>

**Milan**: 没错。事实上，如果你想象一下这个规模，把我们所有的硬盘一个接一个叠起来，高度可以一直延伸到**国际空间站 (ISS)**，然后再折返回来。对于我们这些从事这项服务的人来说，这是一种有趣的视觉化呈现，但从根本上说，普通人很难理解 S3 的规模。我们的很多客户认为这种规模是理所当然的，他们假设所有的硬盘永远都在那里，他们只关注 S3 对他们的意义：即“它就是好用”，无论什么类型、多少量的数据，它都能正常工作。

<details>
<summary>Original English</summary>

**Milan**: That's right. In fact, if you think about the scale of this, if you imagine stacking all of our drives one on top of another, it would go all the way to the International Space Station and just about back. And so like that, I mean, it's kind of a fun visual to have for us who work on the service, but you know, kind of fundamentally, it's it's really hard to get your brain around the scale of S3. And so a lot of our customers they they don't they they assume the scale is there. They assume that you know all of the drives are always there and they just focus on what S3 is to them which is it just works. It just works for any type of data and all of your data.

</details>

**[主持人]**: 是的，即使对我来说，Exabytes 这个级别也很难想象。我不得不去查了一下，因为我知道 **Petabytes**（千万亿字节）已经非常巨大了。如果一家公司有一两个 PB 的数据，那已经是海量了。而 1 个 Exabyte 等于 1000 个 PB。你告诉我你们是在这个量级上思考的，这简直难以置信。

<details>
<summary>Original English</summary>

**[Host]**: Yeah. Even I mean even for me for the scale when you talk about exabytes I actually had to look up exabytes because I know of pabytes which is already massive. If if a company has like one or two or three pabytes of data it's it's tons. And exabyte is it is is it a yes it's a thousand pabytes is an exabyte and and you told me that you're you're you're thinking in that level. It's just hard hard to hard to fathom.

</details>

**Milan**: 是的，我们甚至有单个客户就拥有数个 Exabyte 的数据。他们称之为**数据湖 (Data Lake)**。不过上周我听到了一个很棒的词，**索尼 (Sony)** 集团的 CEO 在谈论他们的数据业务时，将其称为“数据海洋 (Data Ocean)”，而不是数据湖。如果你在数据湖里有数个 EB 的数据，那它确实是一片数据海洋，而这片海洋的基础基本上就是 S3。

<details>
<summary>Original English</summary>

**Milan**: Yeah, we I mean we have individual customers that have exabytes of data. Individual customers who have exabytes of data and what they call a data lake. Although last week I heard a great term. We had the um Sony group CEO talk about what Sony is doing with data and they refer to it as a data ocean and not a data lake but a data ocean and so like if you have exabytes of data in your data lake it is in fact a data ocean and that ocean is is kind of fundamentally S3.

</details>

### S3 的起源与一致性模型

**[主持人]**: 你能告诉我 S3 是如何开始的吗？我做了一些研究，有一个关于一位**杰出工程师 (Distinguished Engineer)** 坐在西雅图酒吧里的故事。不知道是真是假，但我读到他当时对亚马逊工程师反复构建大量基础设施感到有些沮丧。

<details>
<summary>Original English</summary>

**[Host]**: Can you tell me how S3 started? I I did some research and there was a story about a distinguished engineer sitting in a pub in Seattle. who knows it was true or not but I read that this this was a story that he was a bit frustrated with engineers at Amazon building a lot of infrastructure again and again.

</details>

**Milan**: 是的。S3 的开发实际上始于 2005 年，我们在 2006 年作为第一个 AWS 服务推出。回想 2006 年的技术问题，很多客户在构建像 **Amazon.com** 这样的电子商务网站。亚马逊的工程师知道他们有很多当时非常非结构化的数据，比如 PDF、图像、备份，他们需要一个价格经济的地方来存储这些数据，让他们不用担心存储容量的增长。

于是他们构建了 S3，最初的设计是围绕**最终一致性**展开的。最终一致性的理念是，当你把数据放入 S3 存储时，除非我们确实拿到了你的数据，否则不会给你返回确认 (ACK)。我们拿到了数据，但“最终一致性”意味着如果你立即列出 (List) 你的数据，它可能不会出现。它确实在那里，但可能不会立即出现在列表里。我们当时选择这种一致性模型，是因为我们主要在为**持久性 (Durability)** 和**可用性 (Availability)** 进行优化。

对于电子商务网站来说，这非常有效。因为当人类与电商网站互动时，如果一张图片在上传后的瞬间没有显示出来，那是可以接受的，因为人只需要刷新一下。这里有个有趣的事实：2006 年也是 **Apache Hadoop** 社区开始起步的时候。我们有一批前沿数据客户，比如 **Netflix** 和 **Pinterest**，他们研究了 Hadoop，并将其与 S3 的经济性和属性结合起来——即无限的存储空间、相当不错的性能和极具竞争力的价格。他们决定扩展非结构化存储的概念，将表格数据也包含进来，构建了我们最初称之为“数据湖”的东西。

第一波前沿数据客户大约在 2013 到 2015 年间开始采用数据湖，他们是云原生的一代。从 2015 年到 2020 年左右，我们看到所有企业都开始采用同样的数据模式：如何利用存储了地球上所有非结构化数据的 S3，并将其扩展到表格数据。大约五年前，也就是 2020 年，我开始看到海量的 **Parquet** 文件。我从 2010 年加入 AWS，2013 年开始在 S3 工作。Parquet 的兴起非常有趣，因为人们说：“我喜欢 S3 的特性，我想把它应用到表上。”于是他们在 S3 上运行自己的 Parquet 数据。

到了 2019、2020 年左右，我们看到了 **Iceberg** 的崛起。Iceberg 非常受欢迎，它为底层的 Parquet 数据赋予了表的属性。我们的许多跨行业的大型数据湖客户都开始使用它。因此，我们在 2024 年推出了 **S3 Tables**。

<details>
<summary>Original English</summary>

**Milan**: Yeah. If you think back into you know S3 development really started in 2005 and we launched as the first AWS service in 2006 and if you think about the technical problems of 2006 you know a lot of customers were building things like like e-commerce websites right like Amazon.com and so the engineers at Amazon knew that they had a lot of data that at the time was very unstructured data it was PDFs it was images it was backups and they needed wanted a place where they could store that at an economic price point that let them not think about the growth of storage. And so they built S3 and they really built it for a certain type of storage. And so the original design of S3 in 2006 was really anchored around eventual consistency. And the idea of eventual consistency is that when you put data in storage for S3, you know, we're not going to give you an act back on your put unless we actually have your data. So, we have your data, but the eventual consistency part is that if you were to list your data, it might not show up because it's being eventually consistent. It's there, but it might not show up on a list. And so, we did that at the time that consistency model at the time, uh, we built that because, you know, we were really optimizing for things like durability and availability. And it worked like a champ for, you know, e-commerce sites and things like that because, you know, when a human was interacting with an e-commerce site and an image happened to not show up exactly at the moment where you put the data into storage, it was okay because a human would just refresh. And so when we launched in 2006, here's a a fun fact for you. 2006 is actually when Apache Hadoop first began as a community as well. And so we had a set of what I think of as frontier data customers like Netflix and uh Pinterest who took a look at things like Hadoop and they put it together with the economics and the attributes of S3 which is you know unlimited storage with pretty good performance at a great price point. And they um they decided to build their you know what we first began to call data lakes at the time. they decided to build to extend the idea of unstructured storage and include things like tabular data. And so the first wave of frontier data customers were adopting quote unquote data links um in about 2013 to 2015. Those were the frontier data customers born in the cloud. And around 2015 to I would say 2020, we started to see all the enterprises take that same data pattern of how can I use S3 the home of all the unstructured data you know on the planet and extend it to tabular data and that's when about five years ago 2020 I started to see a ton of exabytes of you know basically parquet files and you know I I have worked on S3 for a minute I started working on S3 in 20 I guess it was 2013. I'd been at AWS since 2010, so kind of a while. And the rise of parquet was really interesting because what people did is they said, \"Oh, okay. I like the traits and the attributes of S3 and I want to apply it to a table.\" And so I am going to run my own parquet data in S3. And then you know around 20 I would say 19 2020 we started to see basically the rise of iceberg and iceberg at the time you know is incredibly popular and it gives the table attributes to the underlying parquet data and customers started to do it in you know many of my largest data links across different industries and different customers and so one of the things that we did in 2024 is we introduced S3 tables.

</details>

**[主持人]**: 给那些不知道 Iceberg 是什么的人解释一下，它是一种用于大规模分析工作流的开源数据格式，对吧？

<details>
<summary>Original English</summary>

**[Host]**: just for those who don't know what iceberg is. So, it's it's an open-source data format for like massive analytic workflows. Right.

</details>

**Milan**: 没错。如果我问这些“数据海洋”的客户为什么这么看重 Iceberg，是因为他们希望拥有一种**去中心化分析架构 (Decentralized Analytics Architecture)**。不同的业务线或团队可以选择使用不同的分析引擎，只要它符合 Iceberg 标准即可。如果 Iceberg 是表格数据的通用隐喻，那么你在去中心化架构中就拥有了选择的灵活性。

我认为这就是 Iceberg 迅速普及的原因之一：它不仅让大规模使用数据变得容易，还为业务负责人、首席数据官 (CDO) 或 CTO 提供了分析能力的“未来保障”。他们可以更换分析引擎，采用新型的分析和 AI，因为底层有 S3 上的 Iceberg。我们在 2024 年 12 月推出了 S3 Tables，今年已经增加了超过 15 个新功能。当然，今年 7 月我们还推出了 **S3 Vectors**（向量存储）的预览版，上周已经正式商用 (GA)。S3 的故事就像是客户为数据编写的故事，作为工程师，参与这些不断演进的特性开发非常有趣。

<details>
<summary>Original English</summary>

**Milan**: That's right. If I ask our customers of these data oceans why they care so much about iceberg, it's because they want to be able to have what a lot of customers are calling this decentralized analytics architecture where, you know, they can have lines of businesses or different teams within their company that pick what type of analytics to use as long as it's Icebro compliant. And so if iceberg is the common metaphor for data for tabular data then you have choice you have flexibility and choice for what type of analytics engines you use in a decentralized analytics architecture and so I think that's one of the reasons why iceberg has just taken off is that it makes it easy to use data at scale but it also gives a business owner this you know the chief data officers or the CTOs of the world it gives them future proofing for analytics they can replace their analytics they can change it out. They can adopt new types of analytics and AI because you have this iceberg at the bottom turtle of S3. We lost S3 tables in 2000 um in December 2024. This year we've had over 15 um new features that we've added to S3 tables. Um and uh and then this year of course we launched the preview of S3 vectors in July and then last week we were generally available and so you know the story of S3 it's like a story that our customers have written for data but it's been super fun to work on all these different evolving attributes.

</details>

### S3 的核心原语与定价策略

**[主持人]**: 作为一个工程师，当我开始使用 S3 时，应该了解哪些基础架构和术语？

<details>
<summary>Original English</summary>

**[Host]**: as an engineer. What is the kind of basic architecture and the basic terminology I should know about when I'm starting to work with S3?

</details>

**Milan**: 当我们在 2006 年首次推出时，整个目标是提供非常简单的开发者体验，我们一直努力坚持这一点。事实上，当工程师们坐在一起讨论下一步该构建什么时，我们总是回到那个想法：如何让使用 S3 变得非常简单。

从根本上说，S3 现在有很多不同的功能，但核心始终是 **Put** 和 **Get**。把数据存进去 (Put)，把数据取出来 (Get)。我们能在如此大规模下把这两件事做得非常好，这就是 S3 的核心。

<details>
<summary>Original English</summary>

**Milan**: When we first launched in 2006, the whole goal for SRE is to provide a very simple developer experience and we've really tried to stick with that. In fact, when the engineers and you know when we're sitting around and we're talking about what do we build next, we always go back to that idea of how do you make things really simple to use to use S3. And so fundamentally S3 we have a lot of different capabilities now, but it's really about the put and the get. the put of the storage in in and the get of the storage out and where we can do that really well at scale that that is kind of the heart of S3. Now we have a ton of extra capabilities that we've launched over time but you know fundamentally when customers think about using S3 they think about the put and the get.

</details>

**[主持人]**: 是的，Put 数据，Get 数据。我想其他一些操作有点像 HTTP，对吧？还有 Delete、List、Copy 等原语。

<details>
<summary>Original English</summary>

**[Host]**: Yeah. So like put data get data and I guess some of the other like operations it's a bit like HTTP right? There's also delete, list, copy, a few kind of other like I guess primitives.

</details>

**Milan**: 确实如此。随着时间的推移，我们根据开发者的需求增加了更多功能。以 Put 为例，我们最近增加了一组**条件操作 (Conditionals)**。去年我们增加了 `Put-if-Absent`（不存在则存）或 `Put-if-Match`（匹配则存）。今年我们增加了 `Copy-if-Absent` 和 `Delete-if-Match`。条件操作的核心在于赋予开发者根据应用程序行为进行操作的能力。

<details>
<summary>Original English</summary>

**Milan**: there is and you know if I think about where we have gone over time we've added capabilities on top of that just based on what developers are trying to do. Okay, let's just take put. Okay, um we recently added a set of conditionals to the put capability and like last year we did put if absent or put if match. Um this year we did a copy if absent or a put if match and we did delete if match. And the the core thing about for for us with conditionals is that we can give developers the capabilities of doing things like the put but to do it based on the behaviors of their application.

</details>

**[主持人]**: 除了 Get 和 Put 这些基本操作，我想基础术语还包括 **Buckets**（存储桶）、**Objects**（对象）和 **Keys**（键），对吧？这是我们思考数据的方式。

<details>
<summary>Original English</summary>

**[Host]**: Outside of the the get and put the basic operations I guess the base terminology that you should just know about is the buckets, objects and keys, right? That's how we think about our data.

</details>

**Milan**: 是的。现在不仅仅是对象了。如果你看我们作为 S3 原生引入的两个最新构建块，一个是基于 S3 Tables 的 Iceberg 表，另一个是向量。在 S3 Table 的底层，是一组我们代为管理的 Parquet 文件。但向量不同，向量基本上是一长串数字。这是一种全新的数据结构，它像对象一样存在于 S3 中。

<details>
<summary>Original English</summary>

**Milan**: Yeah. And now it's not just objects. If you think about um the two latest um primitives or building blocks we've introduced as as native to S3, one of them is the iceberg table with our S3 tables and the other one is is vectors. And you know under the hood of an S3 table is a set of parquet files that we're managing on your behalf. But that's not the case for vectors. A vector is just basically a long string of numbers. And that is a new data structure for us and it's sitting um in S3 just like your objects.

</details>

**[主持人]**: 我想回到 S3 的早期。它刚推出时，定价非常令人震惊：每月每 GB 15 美分，比当时任何其他产品都便宜三到五倍。当时的市场价大约是 50 到 75 美分。我读到第一天就有 12,000 名开发者注册。令人惊讶的是，S3 之后一直在降价。这在以前是闻所未闻的。你 2010 年代就在团队里，能告诉我当时团队是怎么想的吗？今天同样的存储价格大约是 2 到 2.3 美分，而发布时是 15 美分。

<details>
<summary>Original English</summary>

**[Host]**: So I I I'd like to still go back to the beginning of of S3. When it was launched, it was pretty shocking for the broader community because S3 launched with a pricing of 15 cents per gigabyte per month, which was about a third to fifth cheaper than anything else. The going rate at the time was something like 50 cents or 75 cents. And on the first day, I I read that like 12,000 developers signed up immediately. A lot of companies immediately or very quickly moved over and then the surprising thing was that S3 kept cutting prices. It was unheard of before. You were there in the 2010s when some large price cuts happen. Can you tell me what was the thinking inside the S3 team on the this unusual pricing it seemed customers would have been willing to pay more and also the the cutting of prices continuously even today? I think today it's something like 2 cents or 2.3 cents, something like that for the same storage as as as it was 15 cents on launch.

</details>

**Milan**: 这要追溯到 S3 的目标。S3 的使命是提供地球上最好的存储服务。IDC 数据显示，全球数据量正以每年 27% 的速度增长，但我们的很多客户增长速度远超于此。

为了让客户能够存储并增长这些数据，必须保证经济性。你必须让价格维持在客户不需要考虑“因为空间不够，我现在该删掉哪些数据”的水平。我们通过两件事来实现这一点：一是降低存储或功能的成本；二是降低总拥有成本 (TCO)。我们提供了分层存储和归档能力，比如 2018 年推出的**智能分层 (Intelligent Tiering)**。如果你一个月没动某些数据，我们会自动提供折扣，最高可达 40%。这种动态折扣让你无需操心。我们的目标是让你能保留数据，用于训练模型、微调 AI 或进行分析，无论现在还是未来，数据都应该在那里。

<details>
<summary>Original English</summary>

**Milan**: Yeah. You know, I think part of this goes back to what the goal is for S3. Okay. And so the mission of S3 is to provide the best storage service on the planet. Okay. And our goal too is that if you think about the growth of data, IDC says that data is growing at a rate of 27% year-over-year. But I have to tell you, we have so many customers that are growing so much faster than that. ... And in order to have all that data and to grow it you have to be able to grow it economically. You have to be able to grow it at a price point where you don't really think okay what data am I going to delete now because I'm running out of space. You don't have that conversation with S3 customers because of of two things. One is, you know, we do lower the price of either storage or the capabilities of what we're doing. ... We give you the ability to do something called intelligent taring, which is if you don't touch your data for a month, we'll give you an automatic discount on that data because we're watching your storage and you don't touch it for much, we'll give you up to 40% discount on that storage. And it's like dynamic discounting so you don't even have to think about it. And so our whole goal is that you can grow the data that you need to grow because we know that's being used to pre-train models. We know it's being used to fine-tune and do any type of post-raining of AI. ... whatever you need the data should be there and you should be able to grow it and keep it and use it any way you want.

</details>

### 深入底层：持久性与强一致性

**[主持人]**: 我想问问 **Amazon Glacier**。它在 2012 年推出，价格仅为每 GB 每月 1 美分，比当时 15 美分的市价便宜了 10 倍以上。代价是访问数据可能需要等待数小时。你们是怎么做到的？工程团队在权衡什么？

<details>
<summary>Original English</summary>

**[Host]**: Yeah, I I did want to ask you about this part. So there's intelligent taring which was launched in 2018. So like 12 years after S3 was launched. One thing that really got my attention Amazon Glacier which is was launched in 2012. So a long time ago and it's you can store data that you don't need immediate access to. You're okay waiting for some time to uh to get access to it. I think maybe even hours. when it launched it was only one cent per gigabyte per month which was again this was something back then the going rate for storage was like 15 cents so almost like almost 10 times cheaper. How do you do that? Like what what is the architecture and thinking behind how you're able to have this trade-off of like look if you don't need your data quickly we can do it a lot cheaper. How h how could I imagine the kind of trade-offs that that you and the engineering team were were were thinking of making?

</details>

**Milan**: 很多工程设计其实就是关于**约束 (Constraints)**。在 S3，当我们思考可用性、存储成本等约束时，我们会变得非常有创意。因为我们一直构建到硬件的最底层，包括硬盘和硬件功能，所以我们能够驱动整个技术栈每一部分的效率。

我们的工程师会设定一个“每字节成本”的目标，然后在流程的每个环节去实现它，甚至包括数据中心。我们的数据中心技术人员如何从硬件和物理建筑的角度操作 S3 服务，就像我们编写软件层一样。当你拥有跨越整个栈的能力，一直深入到物理建筑，并且深度思考每一字节的成本和寿命时，你就能做出像 Glacier 这样的产品。

<details>
<summary>Original English</summary>

**Milan**: Well, you know, I mean, a as you know, I mean, you're an engineer yourself and you know, as you know, a lot of engineering is about constraints, right? And that is the fun part about working on on S3 is that when you think about constraints, you think about constraints that we have for availability, you consider you think about constraints that we have around, you know, the cost of storage, we start to get really really creative. Okay? And in S3, because you know we build all the way down to the metal of S, you know, of the drives and the capabilities that we have in our hardware, we're able to drive, you know, efficiencies at every single part of our stack. Okay? And so our engineers when they get together and they and they talk about the constraints, they talk about the design goals, we'll do something like we'll set a a a target for you know the cost of a bite and we'll drive for that and we'll drive for it at every single part of the process. And the part of the process that we are also including is is you know it includes a data center. How do our data center tech uh technicians be able to operate the the service of S3 from a hardware and a data center perspective like the physical buildings just like we do the same thing for the software and the layers of S3 itself and when you have that when you have that ability to to run across the whole stack all the way down to the physical buildings and we're thinking about so deeply about the cost and the lifetime of every bite it you're able to do things like like Glacier.

</details>

**[主持人]**: 你提到 S3 最初是最终一致性的，因为可用性更重要。你能解释一下你们是如何在不牺牲可用性的情况下，将其转变为**强一致性**的吗？这通常非常困难，因为会有分布式故障等问题。

<details>
<summary>Original English</summary>

**[Host]**: You mentioned something really interesting that when S3 started it was eventually consistent which means that you know data eventually arrives it it might not be there and you might be behind and there's a lot of things that you can do with this and and it gives you some constraints but you mentioned that the reason that the team launched this because durability and availability was more important and I I assume of course cost as well but during those initial phases while S3 was eventually consistent what what kind of benefits does it give to have eventual consistency? Is it a cost uh constraint? Is it just easier to do high availability systems from from an engineering perspective?

</details>

**Milan**: 核心优化确实是可用性。让我们退一步看，一致性是指对象获取 (Get) 能反映对该对象最近一次存入 (Put) 的属性。在 S3 中，这主要涉及我们的**索引子系统 (Indexing Subsystem)**。它保存了所有对象元数据：名称、标签、创建时间等。每一次 API 调用（Get, Put, List, Head, Delete）都会访问索引。

我们的索引系统本身也是一个存储系统。为了实现可用性和持久性，数据分布在多个副本上，使用**法定人数 (Quorum)** 算法。这种算法对故障非常宽容。我们在不同可用区的服务器上实现 Quorum，以避免单一故障域的相关性。

为了在不牺牲可用性的情况下实现强一致性，我们发明了一种新的数据结构：**复制日志 (Replicated Journal)**。这是一个分布式数据结构，我们将节点链接在一起，写操作按顺序流经这些节点。每个节点都会学习到值及其序列号。因此，在后续通过缓存读取时，可以检索并存储序列号。这就是 S3 强一致性且高可用的核心。

<details>
<summary>Original English</summary>

**Milan**: Well, I mean from an engineering perspective, the the main optimization was it was availability. ... So if you think about the indexing subsystem in S3, that holds all of your object metadata. And so that's like its name, its tags, its creation time, and the index, our index is accessed on every single get or put or list or head or delete, any API call like that. ... And so the data is basically in our in our in our index system is stored across a set of replicas and it uses something called you know it's it's basically a quorum based algorithm. Okay. And a quorum based algorithm tends to be very forgiving to to failures. ... And so when we have quorum at the index storage layer, we can see reads and writes overlap, but in in the cache, they don't because we're optimizing for availability. ... And so the engineers had to come up with a new data structure. ... we had to build this replicated journal. Okay. And the replicated journal is basically a distributed data structure where we're chaining nodes together so that when this write is coming into the system it's flowing through the nodes sequentially. ... And therefore on a subsequent read like through our our cache, the sequence number can be retrieved and stored. And so now you have this strongly consistent and highly available capability in S3. And the heart of that is actually this replicated journey.

</details>

**[主持人]**: 但代价是什么？工程中没有免费的午餐。如果序列中的一个节点失败了怎么办？

<details>
<summary>Original English</summary>

**[Host]**: Okay. But what's what's the catch on one on one end because there's always always something with trade-offs. You always have something. So on one end you obviously have more complicated business logic. And then I guess the second obvious question is what about failures? Because in the case of eventual consistency, you don't worry too much about one failure. Clearly in this case uh what if a node in the sequence fails either at the time at the first time or or later or how does the system monitor this recover because that that's I guess that's going to be the tricky part right.

</details>

**Milan**: 我们还实现了一个**缓存相干协议 (Cache Coherency Protocol)**，并构建了**故障容限 (Failure Allowance)**。这意味着系统保留了多个服务器接收请求且允许部分服务器失败的属性。复制日志与缓存相干协议协同工作，实现了强一致性。

这确实有硬件成本。我记得当时和工程师们辩论：我们是否要把这些成本转嫁给客户？我们最终做出了明确的决定：不转嫁。强一致性应该是免费的，且适用于 S3 的每一个请求，而不是仅限某些存储桶类型。这是 S3 的一种思维方式：如何将这些能力变成 S3 的基础构建块，而让客户无需考虑成本。

<details>
<summary>Original English</summary>

**Milan**: there's another piece to this puzzle that we implemented which is um you know it's it's basically a cash coherency protocol and the idea is that um this is where we built what we think of as a failure allowance where in in this mode, we uh needed to retain the property that like multiple servers can receive requests and some are allowed to fail. And so it's kind of this combination of this replicated journal as a as a new data structure plus we implemented this new cache coherency protocol that gave us a failure allowance and those two things working in concert gave us this uh strong consistency. I will say too this does come at some um actual cost. ... We said that when we launch this, we should launch strong consistency. We should make it free of charge to customers and it should just work for any request that comes into S3. We shouldn't sort of say it's only available on this bucket type or what have you. This should be true for every request made to S3.

</details>

### 形式化方法与 11 个 9 的承诺

**[主持人]**: 你们如何确保它是正确的？在 S3 这种规模下，仅仅宣称强一致性是不够的。

<details>
<summary>Original English</summary>

**[Host]**: How do you know that you're strongly consistent?

</details>

**Milan**: 这就是为什么我们使用**自动推理 (Automated Reasoning)**。它是计算机科学的一个专门分支，就像是计算机科学和数学“结婚生子”后的产物。

<details>
<summary>Original English</summary>

**Milan**: And that is why we used automated reasoning. ... automated reasoning is a specialized form of computer science. Okay. And girly, if you if you kind of think about if computer science and math got married and had kids, right, it would be automated research.

</details>

**[主持人]**: 是**形式化方法 (Formal Methods)** 吗？

<details>
<summary>Original English</summary>

**[Host]**: is it formal formal methods or based on formal methods?

</details>

**Milan**: 没错。我们在 S3 的很多地方使用形式化方法。为了确保强一致性，我们编写了数学证明，并将其集成到代码提交 (Check-in) 的流程中。每当有人修改索引子系统的代码，我们都会通过形式化方法证明一致性模型没有退化。

在某种规模下，数学必须拯救你。你无法通过测试覆盖每一个边缘情况的所有组合，但数学可以。我们证明了跨区域复制、API 正确性等。这不仅是证明一次，而是在每一次提交、每一个请求上进行验证。

<details>
<summary>Original English</summary>

**Milan**: That is right. And we use formal methods in many different places in S3. But one of the first places that we adopted was for us to feel good that we actually had delivered strong consistency across every request. So what we did is we proofed it, right? We basically built a proof for it and then we incorporated our proof on check-ins into this index area that I talked about... And so when somebody anybody is working on our index subsystem now and they're checking in code into the code paths that that are being used um for uh consistency we are proofing through formal methods that we haven't regressed our consistency model. ... at a certain scale math has to save you right because at a certain scale you can't do all the combinatorics of every single edge case but math math can save you and help you on this uh at S3 scale.

</details>

**[主持人]**: S3 有一个非常高的持久性承诺：**11 个 9 (99.999999999%)**。我不得不反复确认这个数字，因为在后端系统中，4 个 9 的可用性已经很难实现了。你们如何验证自己达到了这个标准？

<details>
<summary>Original English</summary>

**[Host]**: Amazon S3 has very very like high durability promises. I think it's 11 9 which I I had to like do a double check on because in in uh backend systems whenever you say three nines it's like h when you say four 9ines of availability we're not talking dur availability four 9s is already hard to achieve and beyond that it just gets very expensive and I have never heard of 11 9 of durability... How can you prove that not just in a formal way but you're now storing as you said 500 trillion uh objects... do you actually like validate it on the actual data as well on outside of the proof?

</details>

**Milan**: 持久性主要在存储层。它是软件与物理布局（硬盘、服务器、机架、机房）的结合。我们有数千万块硬盘和 120 个可用区。

在分布式系统中，最重要的部分是我们的**审计系统 (Auditors)**。S3 由 200 多个微服务组成，其中相当一部分专门负责持久性。审计系统会检查全网的每一个字节。如果发现需要修复的迹象，修复系统就会介入。这些系统在后台不断运行，与客户看到的 Get/Put 是完全分开的。我们可以回答过去一周、一月、一年的持久性是多少。

我们的设计假设服务器随时会发生故障。就在我们谈话的这一刻，就有服务器在损坏。我们的系统一直在检查故障如何影响特定的字节，并自动触发修复。

<details>
<summary>Original English</summary>

**Milan**: ...we really think about it in the storage layer. And so if you think about it in the storage layer, you have this design, this promise of you know the design here and underneath that is a combination of things. It's software but it's also the physical layout of where our data is across everything that we have in S3. ... I think the most important thing for us is our auditors. ... Collection of systems, which are over 200 microservices now, that all sit behind one S3 regional endpoint. And a fair number of those subsystems, those microservices are all dedicated to the notion of durability. ... And you know, part of our design is that at any given moment in this conversation that you and I have had just just today, we're we're having servers fail because servers fail. And so what we are building and what we've built in S3 is an assumption that servers fail.

</details>

### 工程文化：尊重先例与技术无畏

**[主持人]**: 对于大多数工程师来说，机器宕机是大事件，但在 S3 的规模下，这是日常。你提到了**相关性故障 (Correlated Failure)**，那是什么？

<details>
<summary>Original English</summary>

**[Host]**: I understand in your business or or when you work at S3 scale, this is just every day. ... and what is a correlated failure?

</details>

**Milan**: 相关性故障是影响可用性的关键。如果一个节点失败没问题，但如果所有节点同时失败（比如因为它们在同一个机架或同一个可用区），那你就失去了故障容限。所以我们在设计时必须确保工作负载不会暴露在相同层级的故障中。当你 Put 一个对象时，我们会进行多次复制，并分布在不同的故障域中。

我们还关注**崩溃一致性 (Crash Consistency)**。任何系统在发生“失败即停止”的故障后，都应该能恢复到一致状态。我们的工程师每天都在思考这些：崩溃一致性、相关性故障、故障容限。

<details>
<summary>Original English</summary>

**Milan**: Okay. So that's super interesting. So if you think about what I talked about with, you know, eventual consistency, we talked about quorum. Okay? And quorum is okay for one node to fail, but if all of the nodes go south, for example, and they're in the same availability zone or on the same rack, then you're really going to be messing with your availability of the underlying storage, okay? ... So when you upload an object to S3 with a put, we replicate that object. Okay? We don't just store one copy of it. We store it many times. And that replication is important. It's important for durability. But what's interesting about it, it's also important for availability because if any of those correlated failure domains fail, like if a whole a fails, there's still a copy somewhere else... The whole idea of crash consistency is that a system any system that you build it should always return to a consistent state after a a fail stop failure.

</details>

**[主持人]**: 管理这样一个拥有数百个微服务、数据量惊人的“巨兽”一定很令人畏惧。你们工程师是如何驾驭它的？

<details>
<summary>Original English</summary>

**[Host]**: How do you think of this this beast this this really complex system hundreds of microservices data that is hard to fathom... how do you engineers kind of wrangle this because it does feel a bit intimidating I'm not going to lie.

</details>

**Milan**: 这源于团队的文化和承诺。我们有两条并行的工程准则，它们之间存在一种有趣的张力：

1.  **尊重先例 (Respect what came before)**：如果某些东西已经稳定运行多年，你必须尊重它。在 S3 这种规模下，你必须非常谨慎。
2.  **技术无畏 (Be technically fearless)**：我们必须敢于发明新能力，比如条件操作、原生支持 Iceberg 或向量存储。

这种结合让我们既能保持 S3 “就是好用”的特质，又能不断扩展存储的边界。

<details>
<summary>Original English</summary>

**Milan**: well I think so much of this just comes back to the culture and the commitment on the team... we have this principle engineering tenant called respect what came before and that's an Amazon engineering tenant which is if it has worked for many many years you have to respect that but then there's this also this tenant these two tenants are a little bit in tension with each other which is kind of what makes it so fun Amazon engineering tenant is called um be technically fearless.

</details>

### 未来展望：S3 Tables 与向量存储

**[主持人]**: S3 正在从非结构化存储向结构化存储演进。既然 S3 已经可以存储任何对象了，还有什么新东西可以做？

<details>
<summary>Original English</summary>

**[Host]**: Now going back to the evolution of of S3 from unstructured to structured data. ... is it done Is is it finished or or is it still evolving? Because there is this notion that S3 can store anything already, right? Like any any object, any blob? What what new thing is there?

</details>

**Milan**: 我认为未来世界的表格数据都将存储在 S3 中。**SQL** 是数据的通用语言，全球的 LLM 都是基于数十年的 SQL 和 Python 数据训练的。通过 S3 Tables，你不需要成为云应用专家，只要会 SQL 就可以与 S3 中的数据交互。

至于 **S3 Vectors**，向量本质上是一长串数字。随着嵌入模型 (Embedding Models) 的兴起，它们能实现对数据的“语义理解”。客户希望存储数十亿个向量。在 S3 中，我们不把向量存在内存里，而是存在硬盘集群上，但我们仍能提供低于 **100 毫秒**的查询延迟。我们通过预计算“向量邻域 (Vector Neighborhoods)”来实现这一点。

在 S3，我们有一个准则：**规模是你的优势 (Scale is to your advantage)**。你不能构建一个规模越大性能越差的系统，必须设计成规模越大，性能越好。S3 越大，运行其中的工作负载就越不相关（去相关），这就是规模带来的优势。

<details>
<summary>Original English</summary>

**Milan**: ...I actually think that the world's data for tabular data is going to live in the future in S3. ... SQL as we know is a lingua frana of data and the world's LLMs have all been trained on decades of SQL and therefore... You just need to know SQL. ... With vector we built a new data structure a new data type... we were getting about um 100 milliseconds or less for a warm query to our vector space, which is actually pretty fast. ... We have S3 service tenants as well. And one of the tenants and one phrase that I use all the time and our engineers do too is scale is to your advantage. ... The bigger S3 gets, the more decorrelated the workloads are that run in S3. That is a great example of scale is to your advantage.

</details>

**[主持人]**: 听起来 S3 就像一个活生生的有机体。

<details>
<summary>Original English</summary>

**[Host]**: It it kind of sounds like you have all these microservices. It's kind of evolving almost like a plant or a living organism.

</details>

**Milan**: 没错。我曾是一名森林保护志愿者，所以我经常用自然界来打比方。S3 是一个活生生的、呼吸着的数据仓库。我们不断简化它，确保每个微服务只做一两件擅长的事。

对于想加入 S3 的工程师，我建议保持**持久的好奇心**。不要只满足于在既定框架内工作，要敢于退后一步，看看最新的研究，重新画出未来的线条。

<details>
<summary>Original English</summary>

**Milan**: No. Yes, I uh I am in fact a former peacecore volunteer from forestry... yeah I mean S3 is this living breathing repository of data that lets people do things with data that they never thought possible. ... There's a a strong value and relentless curiosity. Okay. And you know, I talked a little bit about coloring within the lines and how when you work on S3 or a large scale distributive system which continues to reinvent what storage means, you're not really coloring within the lines. you're just kind of looking, you're taking a step back and you're saying, you know, I I will draw what the lines are today and I will know that I might have to rub those out and draw new lines in the future for wherever things go.

</details>

**[主持人]**: 谢谢你，Milan。这非常精彩，让我们得以窥见这个庞大系统的冰山一角。

<details>
<summary>Original English</summary>

**[Host]**: Well, Miline, thank you very much. This was fascinating and and very interesting to get a peak into this massive world of scale of data and and respecting the bite and and treating it and making sure that it's durable.

</details>

**Milan**: 谢谢。感谢所有使用 S3 的听众，没有你们的反馈，我们无法做到今天这一切。

<details>
<summary>Original English</summary>

**Milan**: It was great talking to you and thank you to both yourself. I know you're a fan of S3 and to all of your listeners who use S3. Uh we quite literally wouldn't be able to do what we do without the feedback and the encouragement from everybody who uses S3 today. So thank you for that.

</details>