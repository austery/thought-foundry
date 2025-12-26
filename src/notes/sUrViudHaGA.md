---
area: tech-engineering
category: ai-ml
companies_orgs:
- Apple
- Coca-Cola
- Google
- Google DeepMind
- OpenAI
- Perplexity
- Cursor
- WorkOS
- Chipotle
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
people:
- Clarvo
products_models:
- ChatGPT
- Whoop
- Gemini 2.5 Pro
- Gemini 2.5 Flash
- Gemini 2.5 Flash Light
- InBody
project: []
series: ''
source: https://www.youtube.com/watch?v=sUrViudHaGA
speaker: How I AI
status: evergreen
summary: 本期节目邀请Cactus公司技术主管Lucas Worthing，分享他如何利用ChatGPT打造个人AI表现教练。通过整合MRI扫描、血液检测、可穿戴设备数据及营养计划等多样化个人健康数据，他优化了自己的营养、锻炼和伤病恢复。讨论强调了AI在整合孤立健康信息、提供个性化可操作建议方面的作用，及其通过为从精英运动员到普通大众提供可及的按需指导，从而变革未来医疗保健的潜力。
tags:
- data
- health
- personal
- strategy
title: AI赋能个人健康：打造你的智能表现教练
---
### 打造专属AI教练的初衷

我一直非常热爱运动，不断挑战身体极限，自然而然地，这意味着受伤。对我来说，伤病变得有点难以承受，所以当**ChatGPT**（Generative Pre-trained Transformer: 一种大型语言模型）一推出，我就开始尝试聚合这些数据，以便更清晰地综合分析如何真正优化身体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have always been super active into sports, really constantly pushing myself to the limits of what my body can do, and naturally that means injuries, right? And for me, it became a little bit too much, and so as soon as Chachi PT launched, I started experimenting with aggregating this data so that I can get a more clear synthesis of what I can do to actually optimize the body.</p>
</details>

有一点我从未见过有人做过。我见过很多人上传他们的日常锻炼或饮食日记，但我从未见过有人在这里上传**MRI**（Magnetic Resonance Imaging: 磁共振成像）和影像资料。对于运动员来说，这提供了重要的背景信息，不仅能说明我的表现如何，还能揭示身体内部的结构状况。因此，将这些数据组合到文件中是非常有趣的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the things that I have never seen anybody do yet. I've seen a lot of folks drop in their daily workouts or their food diaries, but I have not seen MRIs and imaging here. And what important context for somebody who's an athlete to say, not only is this how I'm performing on an output basis, but this is actually like the structural setup under the hood. So, it's really interesting that combination of data into these files.</p>
</details>

Clarvo: 我希望我的身体在40岁时能有25岁的感觉。这让人不禁思考，如果每个人都能拥有一个教练，将所有这些行动整理得清晰明了，那会怎样？我们一直在讨论的是，并非每个人都在追求这种极致表现。大多数人不需要六块腹肌或比赛准备，但他们可以从基础方面获得帮助，对吗？比如少吃加工食品、睡得更好、多运动。我认为AI教练可以根据人们的现状提供必要的指导和信息情境化，帮助他们成为更好的自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm wanting to demand of my body to feel like 25 in a 40year-old's body. And it's interesting to think what if every person could have a coach that organizes all this action into clarity, right? And part of what we've been talking about is that not everyone is looking for this type of performance. Most people don't need six-packs or match prep, but they could use help with the basics, right? Eating less, processed food, sleeping better, moving more. And I think an AI coach could meet people where they are and actually give them the necessary nudges and contextualization of information that they need to be a better version of themselves.</p>
</details>

Clarvo: 欢迎回到《How I AI》。我是Clarvo，一位产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具。今天我们邀请到了Cactus公司的技术主管Lucas Worthing，他曾为苹果、可口可乐、MTV甚至碧昂丝本人等众多知名品牌工作。但今天，我们不谈产品开发。我们将探讨Lucas如何利用**ChatGPT**（Generative Pre-trained Transformer: 一种大型语言模型）打造了一个健康教练，以优化他的营养、锻炼，并让他即使年龄稍长，也能保持25岁的活力。这是一期非常有趣的节目，为那些希望通过AI改善生活的人提供了实用的见解。让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Clarvo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today we have Lucas Worthing, head of technology at Cactus, who has done work for basically everybody, Apple, Coca-Cola, MTV, and even Beyonce herself. But today, we're not going to talk about product development. We're going to talk about how Lucas has built a wellness coach inside Chat GBT to optimize his nutrition, his workouts, and keep him feeling 25, even though he's a little bit older than that. This is a really fun episode with some practical insights for people just trying to make their lives better with AI. Let's get to it.</p>
</details>

Clarvo: 本期节目由**WorkOS**（一家提供企业级功能API的公司）赞助播出。AI已经改变了我们的工作方式。各种工具正在帮助团队编写更好的代码、分析客户数据，甚至自动处理支持工单。但有一个问题：这些工具只有在深度访问公司系统时才能发挥作用。你的副驾驶需要查看整个代码库，你的聊天机器人需要搜索内部文档。对于企业买家来说，这引发了严重的安全担忧。这就是为什么这些应用程序从一开始就面临严格的IT审查。要通过审查，它们需要安全的身份验证、访问控制、审计日志以及一整套企业级功能。从零开始构建所有这些功能是一项巨大的工程。这就是WorkOS的用武之地。WorkOS提供即插即用的企业级功能**API**（Application Programming Interface: 应用程序编程接口），让你的应用程序能够更快地实现企业级就绪并扩大市场。可以把它想象成企业级功能的Stripe。**OpenAI**（一家人工智能研究和部署公司）、**Perplexity**（一家AI搜索引擎公司）和**Cursor**（一款AI驱动的代码编辑器）已经在使用WorkOS来加速发展并满足企业需求。请访问works.com，与他们以及数百家其他行业领导者一起，立即开始构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This episode is brought to you by work OS. AI has already changed how we work. Tools are helping teams write better code, analyze customer data, and even handle support tickets automatically. But there's a catch. These tools only work well when they have deep access to company systems. Your co-pilot needs to see your entire codebase. Your chatbot needs to search across internal docs. And for enterprise buyers, that raises serious security concerns. That's why these apps face intense IT scrutiny from day one. To pass, they need secure authentication, access controls, audit logs, the whole suite of enterprise features. Building all that from scratch, it's a massive lift. That's where Work OS comes in. Work OS gives you drop-in APIs for enterprise features so your app can become enterprise ready and scale up market faster. Think of it like Stripe for enterprise features. OpenAI, Perplexity, and Cursor are already using WorkOS to move faster and meet enterprise demands. Join them and hundreds of other industry leaders at works.com. Start building today.</p>
</details>

Clarvo: Lucas，欢迎来到《How I AI》。感谢您的到来。
Lucas: 谢谢。很高兴来到这里，非常感谢您邀请我参加这个精彩的播客节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lucas, welcome to How I AI. Thanks for being here. Thank you. Uh glad to be here and thank you so much for inviting me to be on this wonderful podcast and show.</p>
</details>

Clarvo: 让我感到兴奋的是，到目前为止，《How I AI》节目更多地关注AI在商业领域的应用，而我非常想展示您的用例，因为它真正体现了AI在个人生活中的应用，以及如何利用AI在日常生活中实现改进并为自己构建一些东西。那么，请您讲讲促使您展示今天成果的故事吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm excited about is so much of how I AI so far has really been how I AI for business and I really want to show your use case because it really is a personal how I AI and how you can actually use AI in your daily life to really make improvements and build something for yourself. And so tell us about the story that got us to what you're going to show us today.</p>
</details>

Lucas: 我一直非常热爱运动，并且认为自己是一个相当有竞争力的人，这意味着我总是不断地将自己推向身体所能承受的极限，以及在这些运动压力下我能应对的程度。自然而然地，这意味着受伤。我的脚做过手术，膝盖做过两次手术，肩膀也做过手术。这些伤病来自各种运动，从冲浪到泰拳，再到打网球、举重，多年来随着伤病的出现，我不得不转而尝试新的运动。我们在节目开始前开玩笑说过，但很明显，当我们步入40岁时，情况开始变得更加严峻，你会开始更加关注身体每天对以前不曾感受到的事物的感觉和反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have always been super active into sports and and would consider myself a pretty competitive person and so that means really constantly pushing myself uh to the limits of what my my body can do and and how much I can deal with in terms of the the stress of of these sports. Um, and naturally that means injuries, right? And so I've had surgeries on my foot to surgeries on my knees, um, surgery on my shoulder. And this is through through various sports from surfing, uh, to Muay Thai, uh, to playing tennis, weightlifting, and kind of changing it up over the years as the injuries come and needing to move into new sports. And we were, you know, joking about this before the show, but obviously as we enter 40, um, things start becoming a little bit more dire and you start paying attention more attention to how your body feels and reacts daily to the things that you didn't feel before.</p>
</details>

我开始痴迷于如何优化我的身体。要知道，我40岁了，经营着一家公司，打竞技网球，举重，并且正在从所有这些旧伤中恢复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I started becoming really obsessed with how I could optimize my body. You know, I'm 40 years old. I'm running a company. I play competitive tennis. I lift weights and I'm recovering from all these old injuries.</p>
</details>

我努力在网球场上跟上那些青少年，参加这些业余比赛，四处奔跑。我希望我的身体在40岁时能有25岁的感觉，抱歉，是在一个40岁的身体里有25岁的感觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm trying to keep up with these teenagers on the tennis court playing these amateur tournaments and running around. And I'm I'm I'm wanting to demand of my body to feel to feel like 40 um to feel like 25, sorry, uh in a 40 year old's body.</p>
</details>

你知道，数据是如此孤立，要理解人们告诉你的、专业人士告诉你的所有信息，并将它们整合起来，实际上非常困难。你会做血液检查，去看营养师，去看物理治疗师，你会从你的**Whoop**（一种可穿戴健康追踪设备）数据、营养计划、**InBody**（一种身体成分分析仪）扫描中获取数据。对我来说，这变得有点太多了。所以，一旦ChatGPT推出，我就开始尝试聚合这些数据，以便更清晰地综合分析如何真正优化身体。因为问题不在于缺乏数据，而在于缺乏综合和整合这些数据的能力。我实际上取得了一些突破，它开始帮助我感觉更好，表现更好，我只是开始每天使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, data is so siloed um and to make sense of everything that people tell you, that professionals tell you, and put it together is actually really hard, right? You get blood tests, you go to the nutritionist, you go to the physical therapist, um you get data from your wool, you know, nutrition plans, inbody scans. And for me, it became a little bit too much. And so as soon as the GP chat GPT launched um I started experimenting with aggregating this data so that I can get more a more clear synthesis of what I can do to actually optimize the body right because the problem isn't the lack of data the problem is the lack of synthesis and putting it all together and I started having a few breakthroughs actually and it started helping me feel better and perform better and I just started using it on a on a daily basis.</p>
</details>

所以，你知道，它源于受伤、努力表现并重回正轨的需求，到现在，我拥有了有趣的技术，让我能够采取非常具体的行动来实际提高表现。在我们深入探讨你实际构建的东西（这会非常有趣）之前，我想先谈谈，你给我的印象，以及你自己描述的，你是一个非常积极主动地寻求数据、寻求建议、咨询医疗专业人士、获取不同建议、阅读的人。所以，你并非不了解情况，也并非无法接触到专家，但尽管拥有所有这些数据、所有这些努力和所有这些途径，你仍然在某些方面遇到了一些困难。令我非常惊讶的是，你告诉我，即使我已经为我的身体和健康目标投入了所有这些努力，我构建的这个AI工具实际上是帮助我解决了困扰我很久的一些问题的关键之一。所以，我非常感兴趣的是，优化的“最后一公里”实际上是由你构建的这个工具驱动的。看到一个深谙此道的专家，仍然能从更深层次的探索中获得巨大价值，这非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, it came from a need of getting injured and trying to perform and getting back on the horse to now actually having interesting technologies that are allowing me to to to have really really specific actions that I can take to actually perform better. And what I want to reflect on before we get into actually what you built, which is going to be really interesting to see, is, you know, you strike me as a person and you've described yourself as a person that is pretty proactive about seeking out data, seeking out advice, going to medical professionals, getting different advice, reading. And so, it's not that you're not informed. It's not that you don't have access to experts, but for all this data and all this effort and all this access, you were still struggling a little bit with with some things here and there. And it's pretty amazing to me that what you're telling me is, you know, even given that whole portfolio of things that I've put against my my body and my wellness goals, this AI tool that I built was actually one of the things that helped me unlock a couple things that had been bothering me for for a really long time. So, I'm really interested that, you know, that last mile of optimization is really being driven by by this tool that you built. And it's it's pretty cool to see somebody who um is a deep expert still get a lot of value out of out of going even further.</p>
</details>

Lucas: 这真是一个非常有趣的对话，因为我认为我们在健康和保健领域的众多互动中都看到了这一点。你知道，你刚才描述了你做了很多**PT**（Physical Therapy: 物理治疗）。我目前正饱受肘部伤病的困扰。今天我和我的物理治疗师谈话时，他们告诉我一个病人因为肘部问题最终不得不接受手术。我说，你知道，这真的很有趣，因为医生做出诊断，你们治疗病人，但这个人需要手术是因为缺少了一个环节。没有人去观察这个人的击球动作，然后说：“嗯，你需要这样改变你的网球握拍方式，或者你需要改变……”本质上，这需要一个生物力学专家，对吗？对我来说，这真的很有趣，因为总是有沟通不足的问题，而且信息有点孤立。我认为我即将展示的内容，当你开始思考它如何扩展的可能性时，即使不通过表现，我们也在讨论如何通过一点点努力变得更好。嗯，我可以对此多说一些，但我认为这真的很有趣，本质上，这是一个表现策略师，对吗？它经过训练，可以根据我的具体情况思考我的关节，优化我的能量，延长我的巅峰状态，你会看到它会根据我创建的规则过滤后给出答案。这有助于我整理所有这些通常非常零散和分离的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's it's a really interesting conversation because I think we all see it in our numerous interactions in the field of health and wellness. You know, you were describing that you you do a lot of PT. I'm dealing with an elbow injury right now. And I was having a conversation with my PT today and they were telling me about a patient that had to have surgery for their elbow after a while. And I said, you know, it's really interesting because the the doctor makes the diagnosis. You guys are treating the patient, but this person needed to go into surgery because there there's a missing link. There wasn't someone looking at this guy's stroke and saying, "Well, you need to change your tennis grip like this or you need to change essentially a biomechanic specialist, right?" And and and to me that's really interesting because there there is always a lack of communication and the information is a little bit siloed. And I think that what I'm about to show when you start thinking about the possibilities of of how this can scale even to not through performance, you know, we're talking about the edge of the edge of the edge of trying to gain a little bit to to to be better. Um, but we're going to I can talk more about that, but I I think it's really interesting how, you know, essentially this is a performance strategist, right? It's it's trained to personally think about my joints, optimize my energy, extend my peak, and you'll see that it it answers me filtered through rules I've created. Um, and that helps me to sort of compile all this information that is usually really desperate and really separate. But yeah.</p>
</details>

### AI教练的配置与数据输入

Clarvo: 好的。那么，我们现在就开始展示吧，因为我非常想看看您是如何达到符合您高标准的成果的。您现在可以分享屏幕，向我们展示您构建的这个精心调教的**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, let's actually let's go ahead and and show it because I'm really interested to see how you got to something that meets your standards, which from what I can hear are are quite high. So, you're going to pull up your screen and show us this well coached GPT that you built.</p>
</details>

Lucas: 好的，我们开始吧。让我深入讲解一下。当我配置这个**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）时，我给它设置了一些重要的文件，以便它能理解我希望信息反映的背景。所以在这里你会看到，它有我左膝和右膝的X光片。它有我的生理周期数据，这是一个来自**Whoop**（一种可穿戴健康追踪设备）数据的**CSV**（Comma-Separated Values: 逗号分隔值）文件。还有我的日记条目，记录了我日常的描述，比如我是否感到压力、是否有焦虑、是否做了桑拿、是否做了加压治疗，以及我每天记录的锻炼情况，还有我的身体负荷和锻炼强度，以及我的睡眠数据，包括我获得了多少优质睡眠、浅睡眠和深度睡眠。因此，这里输入了大量数据。除此之外，我提到我做过几次膝盖手术。所以，它有我膝盖手术前后的**MRI**（Magnetic Resonance Imaging: 磁共振成像）图像，以及今年和去年的几次血液检查报告，总共三份不同的血液检查。这样它就可以比较各项测试的演变情况以及我的身体状况。此外，它还有一份来自营养师/膳食学家提供的营养计划，这份计划帮助我将食物视为燃料，并思考如何通过燃料更好地表现；以及一份**InBody**（一种身体成分分析仪）扫描报告，它主要测量身体的脂肪和肌肉百分比以及分布情况。所以，它利用所有这些文件来思考并获取关于我自己的背景信息。因此，能够手动将这些数据收集并输入到这个GPT中是一个重要环节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, let's let's get into it. Let me um let me dive into this. So when I configured this this GPT, I set it a few files that were important um for it to have the context of what I wanted um information to be reflected on, right? And so here you'll see that it has an X-ray of my left knee, my left knee, my right knee. It has my physiological cycles. This is a CSV file coming in from Whoop data. on my journal entry. So, what I describe in my dayto-day, am I stressed, do I have anxiety, did I sauna, did I do compression therapy, my workouts that are logged on a daily basis, and essentially my strain and how hard I work, and my sleep data on how much good sleep I get, sleep, deep sleep. So, a lot of lot of data being fed into into here. In addition to that, I mentioned I had a couple of knee surgeries. So, it has the MRI of my knee pre-surgery, postsurgery, and it has a few blood exams from uh this year and last year. So, three different blood exams. So it can compare the evolution of the tests and how I'm doing in addition to a nutritional plan from a nutritionist/dietitionian that helps me think about food as fuel and how I can perform better based on on fuel and an inbody scan that essentially measures um percentages of fat and muscle and distribution um across the body. And so it's using all these files um to think about to have context around myself. And so that that was an important element to be able to gather this data manually inputed into this GPT.</p>
</details>

Clarvo: 对于正在收听或观看的听众来说，我认为这有几点很有趣。首先是所有这些数据都以各种不同的格式存在，对吗？你有来自**MRI**（Magnetic Resonance Imaging: 磁共振成像）和X光片的影像数据。你有来自可穿戴设备睡眠数据的半结构化数据。嗯，你还有**PDF**（Portable Document Format: 便携式文档格式）形式的血液检测报告，需要解析大量内容，以及文本形式的营养计划。现在，对于那些可能还没有为自己构建过这些工具的人来说，我喜欢AI的一点是，你可以直接把所有数据都扔进去。你不需要担心它是否干净、是否组织良好、是否结构化，直接放进去就行了。然后，有一点我从未见过有人做过。我见过很多人上传他们的日常锻炼或饮食日记，但我从未见过有人在这里上传MRI和影像资料。对于运动员来说，这提供了重要的背景信息，不仅能说明我的表现如何，还能揭示身体内部的结构状况。因此，将这些数据组合到文件中是非常有趣的。那么，这个**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）是如何设置来实际工作的呢？它的指令是什么？您能给我们讲解一下吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I think is interesting about this for folks that are listening or watching are a couple things. One is all this data is in all these different formats, right? So you have imaging data from MRIs and X-rays. You have like semistructured data from sleep, from a wearable. Um, you have blood tests in PDF form where it's got to parse a bunch of stuff, a textual nutrition plan. And what I love about AI now for people that maybe haven't built some of these tools for themselves is you can just dump all that data in. You don't have to worry about is it clean, is it organized, is it structured, just put it in. And then one of the things that I have never seen anybody do yet. I've seen a lot of folks drop in like their daily workouts or their food diaries, but I have not seen MRIs and imaging here. And what important context for somebody who's an athlete to say not only is this how I'm performing on an output basis, but this is actually like the structural setup under under the hood. So it's really interesting that combination of of data into these files. And then how is this GPT set up to actually work? What are the instructions? Would you walk us through that?</p>
</details>

Lucas: 是的，补充一点。我认为您提到了一个非常有趣的地方，就是数据的结构化方式，而且这些数据还来自不同的语言，对吗？因为我经常在巴西，我的一些检查报告是葡萄牙语的。虽然很多是英语，但有些是葡萄牙语。所以我也无需担心这个问题。我只需把它们扔进去，它就会处理这些信息。嗯，所以我认为这也是一个很有价值的观点，说明现在将这些数据导入到能够统一它们的系统中是多么容易。是的，您说得完全正确。让我告诉您我是如何配置它的，好吗？我告诉它充当我的表现策略师和健康优化教练。它有权访问我的生理数据、实验室报告、影像资料、可穿戴设备数据，我希望它像指导一个高性能操作员一样指导我。这非常重要。我不是想成为一名职业运动员。我希望它理解我想要表现出色，但我正在平衡网球、举重、恢复，以及主要经营一家公司，这占据了我大部分时间。我不想成为世界上最具竞争力的人，我也不想成为最棒的。我的主要目标是让它保护我的关节，提升我的产出，并延长我的巅峰状态。我希望感觉健康且无痛。这非常重要。但我确实希望在40岁的身体里，能像25岁一样表现。所以我给了它这样的指令。当我分享我的**Prompt**（提示词: 指示AI执行特定任务的文本输入）时，我希望它通过我的上下文进行提问，对吗？查看我的血液检查、扫描、**Whoop**（一种可穿戴健康追踪设备）数据以及它拥有的其他特定信息。我希望它能标记我们所说的红色和黄色区域，对吗？我们在很多可穿戴设备中都看到过这种情况，它们是过度训练、能量不足、炎症的早期迹象，这很重要。我想要高**ROI**（Return On Investment: 投资回报率）的行动。不要空泛，不要投机取巧，不要未经证实的东西。我希望自己能保持在这个无痛运动、能打出高水平网球、身体不垮的区域内。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, just to add something. I think you mentioned something really interesting around how the data is structured and it's also coming in from different languages, right? Um because I spend a lot of time in Brazil. Some of my exams aren't in Portuguese. Um a lot of them are in English, but some of them are in Portuguese. And so I don't need to worry about that either. Um I just dump it in and it process that information. Um, and so I I I think that's also a valid point about how easy it is now to to port that data into something that can unify it. Yeah, you're absolutely right. Let me tell you about how I configure this, right? And so I'm telling you to act as my performance strategist and health optimization coach. It has access to my physiology, labs, imaging, wearables, and I want it to coach me like I'm a high performance operator. That's really important. I'm not trying to be a professional athlete. I wanted to understand that I want to perform, but I'm balancing I'm balancing tennis, lifting, recovery, and mainly running a company which takes the majority of my time. And I I don't want to be the most competitive person in the world. I don't want to be the best. My main objective is for it to safeguard my my joints and to amplify my output and to extend my peak. I want to feel healthy and painfree. That's super important. But I do want to perform like a 25year-old in a in the body of a 40-year-old. So I give it that that that instruction. Um when when I share my prompt, um I wanted to interrogate it through my context, right? looking at my my blood exams, my scans, my whoop, um other um specific information that it has. I wanted to flag what we call red and yellow zones, right? Um we see this in a lot of wearables or early signs of overtraining, under fueling, inflammation, and it's important. I want high ROI actions. Um no fluff, no hacks, nothing that hasn't been proven. And I want to be kept inside this zone where I'm moving painfree. I can play high output tennis. I don't break down.</p>
</details>

Clarvo: 我想向您反馈一些我认为个人层面和**Prompt**（提示词: 指示AI执行特定任务的文本输入）层面都很有趣的事情。您的Prompt开头非常常见，比如“你扮演一个……”，“你是一个……”，这种指令性地给**LLM**（Large Language Model: 大型语言模型）设定角色。而我认为最后一个要点真正有趣的地方在于，它是硬币的另一面，即最终我希望达到X、Y、Z的状态。所以，假设你是一个表现教练，那是你的角色。而我的角色是经营一家公司，我希望在40岁的身体里感觉像25岁，并且希望得到充分休息，无痛运动，还能打网球。这是一种非常清晰的输入输出结构。然后，我内心的人性化一面想要表达的是：这些都是非常合理、美好的目标。所以，我们再次谈论这种“超优化”，但归根结底，你希望早上醒来感觉良好，投入到工作中，并且能够享受你喜欢的运动。因此，我认为这种设定角色，然后为自己设定一个非常现实的结果的理念，对于这种个人教练Prompt来说是一个很好的框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm I want to reflect to you something that one I think is personally interesting and two I think is interesting from a prompt perspective. So you know the top of your prompt is very common. You act like a blank. You are a blank. That sort of instructive point to the LLM to give it a role. What I think is really interesting about this last bullet point here is it's the opposite side of that coin, which is at the end of this, I want to be X, Y, and Z. And so, you know, say you're a performance coach. That's the kind of your role. My role is I'm running a company. I want to feel 25 in a 40-year-old body, and I want to be rested, move painfree, and play tennis. Like, it's a very clear input output structure. And then the human in me wants to reflect. These are very reasonable, nice goals. So again, you know, we're talking about this like hyper optimization and at the end of the day, you want to wake up, you want to feel good, you want to engage in your company, and you want to be able to play the sport that you want to play. And so I think the kind of idea of like a a role and then a really realistic outcome for yourself is a nice framing for something like this kind of personal coach prompt.</p>
</details>

Lucas: 没错。而且非常重要的是，它不会告诉我去做臭氧疗法或者去高压氧舱。嗯，这些可能有效，我并不是说它们不好。但我确实希望它推荐的是我日常生活中可以接触到，并且经过科学验证的东西。这对于我如何看待这些建议来说非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. and super important for it not to tell me to go get ozone therapy um or to go sit inside a hyperbaric chamber. Um which which may work. I'm not necessarily giving it a ding. Um but I I do want things that that are accessible in my dayto-day. Yeah. Um and that are proven that are scientifically backed. That's really important to how I wanted to think about um the recommendations.</p>
</details>

Clarvo: 是的。我发现人们在编写**Prompt**（提示词: 指示AI执行特定任务的文本输入）时，另一个常见问题是他们会走向极端，比如“你是世界上最棒的，你会让我成为最顶级的某某某”。而我喜欢您这种方式，您是在说，通过在合理范围内设定角色和预期，我正在获得好的结果。所以从Prompt设计的角度来看，这是一个非常好的见解。嗯，我们继续往下看，请您展示一下您优化的具体内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And the other thing I see a lot when people prompt is they go to these extremes where they're like you are the best in the whole world and you're going to make me the most elite blah blah blah. And you know what I like about this is you're saying I'm getting good outcomes by like pulling in the bounds of reason on both sides of the hose and having reasonable roles and reasonable expectations. So it's a really good insight from a prompting perspective. Uh let's go down and show me show me what you optimize for.</p>
</details>

Lucas: 是的。我认为这部分内容就是我之前提到的背景，比如它有我的营养计划，对吗？当你考虑表现时，很多表现都与你的饮食和休息方式有关。因此，拥有我希望如何饮食的基础对于它思考建议来说是绝对关键的，对吗？所以，我希望它坚持我的营养计划，除非有数据驱动的理由需要调整。嗯，这一切都基于补充能量和避免炎症，对吗？我希望优先考虑能量、稳定的血糖、低炎症和肌肉保持。第二点是关于训练和负荷管理。你不能过度训练。如果你过度训练，你会筋疲力尽。所以我需要考虑平衡力量、耐力和灵活性。嗯，我需要保护我的膝盖、肩膀和关节，这些都曾因手术而受损。因此，在考虑建议时，我们不能让**HRV**（Heart Rate Variability: 心率变异性）过载。我们不能超出某种准备度分数。嗯，我需要它帮助我控制，因为我确实会过度训练。我确实想变得越来越好，对吗？所以，在研究和思考表现时，我们听到最多的一件事就是人们对恢复和休息不够重视。所以这对我来说非常重要。第三点再次回到恢复和再生，睡眠是这里的主要因素，对吗？是的，物理治疗、活动度训练、桑拿、冷敷按摩、正念都需要很重要，而不是可选项，它们是训练周期的一部分，因为它们是恢复的一部分。所以我需要它给我一些建议，告诉我如何保持这些日常习惯。最后，是追踪和反馈循环的理念，它整合了来自**InBody**（一种身体成分分析仪）数据、实验室报告、饮食、日记条目等各种数据，我需要它交叉验证决策，而不是推荐一些与我所说的内容不符的随机互联网信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So so I think part of this is the context that that I mentioned of how for example it has my nutrition plan, right? And so when you think about performance, so much performance is about how you eat and how you rest. And so having the basis of how I wanted to eat has been absolutely fundamental for to think about the recommendations, right? And so I wanted to stick to my nutrition plan unless there's data a driven reason to adapt. Um so this is all based on fueling and avoiding inflammation, right? I wanted to prioritize energy, um stable glucose, uh low inflammation and muscle retention. Number two, thinking about training and load management. You you can't overtrain. If you overtrain, you burn out. And so I needed to think about balancing strength, endurance, and mobility. Um, is I need to protect my knees and my shoulders and my joints, which have been messed with in in surgery. And so when thinking about recommendations, um, we can't overload um, the HRV. We can't be outside of sort of the readiness score. Um, and I need it to help me pull back because I will overtrain. I I I do want to get better and better and better, right? And so one of the things we hear about the most when studying and thinking about um performance is people don't pay enough attention to recovery and to rest. And so this is super important for me. The third one again going back to recovery and regeneration is uh sleep is the main factor here right and yes PT mobility sauna cold massages mindfulness need to be important and not optional they're part of the training cycle because they're part of recovery so I need recommendations of how to have it give me nudges so I can maintain those up on my dayto-day and lastly these this idea of of tracking and and feedback loops it's integrating data across well inbody labs diet journal entries and I needed to cross validate the decisions and not recommend something that is not aligned um with what I have said it just like from pulling some random thing from the internet</p>
</details>

Clarvo: 我想在这里回顾一下我在其他播客中（更多是在商业背景下）提到过的一点，那就是当人们设计这些**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）时，我读这些**Prompt**（提示词: 指示AI执行特定任务的文本输入）会觉得它们反映了完美的员工或完美的团队。而当我看到这个时，它反映了在一个理想世界中，所有支持你的专家——你的医生、你的**PT**（Physical Therapy: 物理治疗师）、你的教练——都会完全整合，在策略上保持一致，他们的建议都是数据支持的。但现实是，当你把一群独立的专家召集在一起时，首先，他们都会有自己独特的主张。其次，仅仅从战术上来说，就很难在建议上保持一致并全面解决问题。所以我喜欢这一点，你知道，理想情况下，你能够让所有这些专家和你一起坐在一个房间里，然后说：“嘿，伙计们，我希望你们这样照顾我。”但因为这实际上不切实际，你所做的是将这些人的数据和见解，你自己的抱负和目标，然后将其放入一个系统，这个系统会随着时间的推移为你最佳地运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one of the things I I want to reflect on here that I've said in other podcasts more in sort of a business context is when people are designing these GP PTS I really read these prompts and I'm like oh they reflect like the perfect employee or they reflect the perfect team. And when I'm looking at this this sort of reflects how in an ideal world all these experts that are supporting you your doctor your PT your coach would all be fully integrated aligned on a strategy like consistent in their recommendations databacked. But the reality is when you bring a team of individual experts together, one, they're all going to come with their unique point of view. Two, it's very hard just just tactically to stay aligned on recommendations and kind of resolve things across the board. And so what I like about this is, you know, ideally you'd be able to sit all those experts in a room with you and say, "Hey, hey guys, this is how I want you to take care of me." But because that's not actually practical, what you're doing is bringing some of the data and the insights those people have your own ambitions and goals and then sort of like putting it in the system that will operate optimally for you uh over time.</p>
</details>

Lucas: 没错。我们稍后会更多地讨论愿景，以及我对这个方向未来发展的一些启发性思考，以及这如何成为一个更大规模事物的原型，未来许多从业者、医疗系统和医生都将采用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Absolutely. and and we'll talk more about the vision and and and a little bit of provocation of where I think this will will go and how this is a a prototype of something that um will be much bigger and that many many um practitioners, health systems, physicians will adopt in the future.</p>
</details>

Clarvo: 是的。好的。然后您做了每个人都会做的事情，就是给它一大堆要做的事情，然后一大堆不要做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Okay. And then you do what everybody does, which is you give it a bunch of stuff to do and then a bunch of stuff to not do.</p>
</details>

Lucas: 完全正确。所以要设定严格的界限，对吗？当指标显示恢复不足时，不要突破训练量和强度。如果我的**Whoop**（一种可穿戴健康追踪设备）显示红色或黄色区域，我就不能进行高强度训练。不要推荐任何不明来源的补充剂。不要，你知道，不要告诉我服用肌酸或其他任何目前虽然非常流行，但我们不知道是否绝对可衡量、有科学依据且有**ROI**（Return On Investment: 投资回报率）的东西，不要给我新奇的东西。嗯，坚持那些真正有效的东西，甚至可以追溯到古代的数据，并对危险信号采取行动。如果我告诉你有很多酸痛，或者**HRV**（Heart Rate Variability: 心率变异性）很低，或者睡眠质量下降，那可能意味着我生病了。在我无法承受的时候，不要强迫我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. So hard hard boundaries, right? No pushing past the volume and intensity. One metrics show under recovery. My whoop is showing a red or yellow. I can't go train hard. Don't get any supplements that are unknown. Don't, you know, don't tell me to go take uh creatine or anything that although super popular at the moment, right, that that we we don't know is absolutely measurable, scientific backed and has ROI, don't give me novelties. Um stick to to what actually works to perhaps even ancient data and act on red flags. Uh if if I tell you there's a lot of soreness or low HRV or decreased sleep quality, that means perhaps I'm getting sick. Don't don't push when I can't push.</p>
</details>

Clarvo: 是的。太棒了。我认为这再次适用于那些想要为自己构建东西的人，我只是提供一些元评论，即这是一种非常常见的**Prompt**（提示词: 指示AI执行特定任务的文本输入）结构：给**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）一个角色，给它一个目标，给它一些输入和数据，给它一个我称之为“反Prompt”的东西，也就是告诉它不要做什么，然后我喜欢您最后强调它是否遵循所有规则以及您希望它如何回应的部分。所以我们可以很快地过一遍，然后也许展示几个例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Great. And I think this again for people I'm just kind of giving the meta commentary which is it's a very common prompt structure for anybody trying to build something for themselves is like give you a role give the GPT role give it a goal um give it some input and data give it uh an anti-prompt I say which is like tell it what not to do and then I like that you're closing on like the the check that it's all following the rules and this is how I want you to respond piece. So we can go through that really quickly and then maybe show a couple examples.</p>
</details>

Lucas: 完全正确。所以是价值观，对吗？精确、能量、适应、动力学，都与运动有关。都与能量有关。都与精确有关。然后是语气，对吗？像教练一样。清晰、有策略、不空泛、不讲大道理。将点连接起来。这对于我们所谈论的一切都非常重要。并优先考虑本周重要的事情，而不是关于可能性的一些模糊的长期理论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Totally. So values, right? Precision, energy, adaptation, kinetics, all about movement. It's all about energy. It's all about precision. And then the tone, right? Like a coach. Be clear, tactical, no fluff, no lectures. Connect the dots. That's super important about everything that we're talking about. And prioritize what matters on this week, not vague long-term theory around what's possible.</p>
</details>

Clarvo: 太棒了。所以，很明显您为此投入了大量思考。您是否也使用**ChatGPT**（Generative Pre-trained Transformer: 一种大型语言模型）来帮助您构建这个**Prompt**（提示词: 指示AI执行特定任务的文本输入）的结构？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. And so, you know, it's very clear you put a lot of thought into this. Did you also use Chat PT to help you like craft the structure of this prompt</p>
</details>

Lucas: 很多次吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">many times?</p>
</details>

Clarvo: 是的，我从表情符号就能看出来。嗯，表情符号，你总是能看出来。本播客由**Google**（一家跨国科技公司）赞助。大家好，我是来自**Google DeepMind**（Google旗下的人工智能研究实验室）的Shishta。**Gemini 2.5**（Google开发的一系列多模态AI模型）系列模型现已全面上市。我们最先进的模型2.5 Pro非常适合处理复杂的推理任务。2.5 Flash在性能和价格之间找到了最佳平衡点，而2.5 Flash Light则非常适合低延迟、高吞吐量的任务。请访问a.dev，在Google AI Studio中开始构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I I can tell from the emojis. Uh, the emojis, you can always tell. This podcast is supported by Google. Hey everyone, Shishta here from Google Deep Mind. The Gemini 2.5 family of models is now generally available. 2.5 Pro, our most advanced model, is great for reasoning over complex tasks. 2.5 Flash finds the sweet spot between performance and price and 2.5 Flash Light is ideal for low latency, high volume tasks. Start building in Google AI Studio at a.dev.</p>
</details>

Clarvo: 好的，太棒了。这是一次关于指令的深入探讨，我希望大家能认真关注，因为首先，这是一个多么棒的**Prompt**（提示词: 指示AI执行特定任务的文本输入）。感谢您的分享，它非常有用。其次，它的结构非常经典，非常适合设置一个**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）。所以无论是这个话题还是其他话题，我认为人们都可以从您的设置方式中学到很多。那么它是如何工作的呢？请向我展示您通常会用这个GPT做些什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, awesome. So, this is a great deep dive into instructions and I hope people are paying attention to it because one, like what a great prompt. Thank you for sharing. is super useful and two just the structure of it is very classically uh uh well set up for setting up a GBT. So whether it's this topic or another one I think people can learn a lot from how you've set it up. So how does it work? Show show me what what are common things that that you would do with this GBT.</p>
</details>

### 日常饮食与伤病恢复的实际应用

Lucas: 是的，我给您举个例子。我给您几个有趣的例子。嗯，今天早上我醒来，我妻子告诉我我们要去参加一个生日晚宴。嗯，我们的一些好朋友要去庆祝一个**Omakase**（お任せ: 日语，意为“厨师发办”，指由厨师决定菜单的用餐方式）生日晚宴，这意味着会有很多米饭和清酒。那么，我应该如何安排我的一天，以平衡晚上要尽情享受美食的事实呢？这可能听起来很简单。但实际上，它能思考如何改变我实际的饮食习惯，这真的很有趣。对吗？早上我通常会在训练后吃点东西，但这里它基本上是说只吃蛋白质，少量碳水化合物。午餐也是同样的要求。所以它根据我晚上要尽情享受美食的事实，指导我如何度过这一天，并且让我不会感到身体被摧毁。所以它正在为即将发生的事情做准备。这真的很有用，因为我不用去思考。我给它**Prompt**（提示词: 指示AI执行特定任务的文本输入），我问它，它给我一个回应，然后我尝试去适应，对吗？所以，好的，太棒了。它告诉我不要吃碳水化合物。我拍了一张早餐的照片。一点鸡蛋、牛油果、咖啡。嗯，然后它给我反馈信息，说：“好的，这太棒了。加一点胡椒粉可以抗炎。”你知道，我也非常清楚，嗯，这对于大多数人来说，并不是他们所需要的，对吗？如果我们考虑大多数人，他们可能只需要多动一点，睡得好一点，不吃加工食品。嗯，我也非常清楚，这是针对我个人正在寻找的非常具体的东西，但它对于我如何安排我的一天以及如何思考第二天都非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, let me give you let me give you an example. I'll give you a few fun ones here. Um, so this morning I I woke up and my wife told me that we have a a birthday dinner that we need to attend. Um, good friends of ours going to celebrate an Amakasi uh birthday dinner, which means plenty of rice and saki. And so how should I manage my day to balance the fact that I'm going to indulge in the evening? And this may be simple. Um but actually it's really interesting that it it thinks about how to change my actual diet. Right? In the morning I would usually eat something post training, but here it's saying basically like eat only protein, minimal carbs. Um at lunch it's saying the same thing. And so it's guiding me how to go along my day um based on the fact that I'm going to indulge in the evening um and have something that's going to be a little bit different and not necessarily feel destroyed. And so it's prepping me for something that's going to happen. And it's really useful because I don't have to think about it. I prompt it. I asked it. It gives me a response and I try to adapt, right? And so okay, great. It told me to have um no carbs. I took a picture of my breakfast. A little bit of eggs, avocado, coffee. Um, and then it it feeds me information about, okay, that's fantastic. Add a little bit of pepper for inflammation. You know, I'm very cognizant also that uh this is this is most people um not what most people need, right? If we think about most people, they perhaps just need to move a little bit more, sleep a little bit better, not eat processed food. Um, and I I I'm very cognizant also that this is for something very specific that I'm personally looking for, but it's very useful to how I can then program my day and how I can think about the next day as well.</p>
</details>

Clarvo: 嗯，我认为另一点是，是的，您的目标可能比普通人对自身表现和健康目标的要求更高。但归根结底，比如我稍后要去参加一个生日派对，我不想明天感觉糟糕。在生日派对前我能做些什么来避免明天感觉糟糕，这是一个非常实际的问题，我认为这是其一。我认为第二点是，按需教练、营养师和专家都很昂贵，很多人都无法接触到。而这种短循环的反馈，比如“我做得对吗？给我一个答案”，我很喜欢您展示的这个部分，它就像“看，我做到了”，然后您会得到一个非常简短的积极反馈，这实际上可以帮助人们强化那些我认为会随着时间推移而累积的习惯。所以，我认为像这样的东西，让一些听起来很基础的策略变得更容易获取，更容易实施，并为您提供了一种按需的反馈循环，作为社会性的人类，我们对此会有所回应。因此，我认为它与大多数人认为有用的东西并不遥远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I think the other thing is yes, your goals are maybe um a higher level of what the kind of like baseline person might have for their own performance health goals. And at the end of the day, the like I'm going to a birthday party later and I don't want to feel crummy tomorrow. Are there any things that I can do before this birthday party to keep me from feeling crummy is like a very applicable problem? I think one. I think the second thing is, you know, it's a really ondemand coaches and nutritionists and experts are expensive. They are inaccessible to a lot of people. And just this sort of short loop like am I doing the right thing? You know, give me an answer. And I like this piece that you showed us, which is like, look, I did it. and you get like a very short blip of a good positive feedback loop can actually help people reinforce habits that I think compound over time. And so, you know, I do think something like this makes some of these like tactics, you know, that that sound very basic a little bit more accessible, a little bit easier to implement and gives you sort of an ondemand feedback loop that as social human beings we we respond to. And so I don't think it's kind of too too far a ground from what most people would find useful.</p>
</details>

Lucas: 我认为这是一个非常棒的观点。而且现在你口袋里就有一个教练，这非常有趣，因为情况总是在变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's a that's a great point. And the fact that you now have a coach in your pocket is super interesting because things change.</p>
</details>

Lucas: 嗯，我前几天还提到了另一个场景，我说我要出去吃饭。我提前做好了当天的准备，但计划有变，我们去参加了一个派对，准备喝很多金汤力，凌晨三点才回家。我不需要过多思考我应该做什么，因为我给它提供了信息，然后它根据计划的改变做出了反应。所以，现在有这么多人可以接触到这种服务，无论你是在家能够根据食物情况做出改变。但即使你知道你需要在**Chipotle**（一家墨西哥风味快餐连锁店）吃饭，而它能告诉你可以在Chipotle吃什么或应该点什么，因为那是你唯一的选择。我认为这是一个非常有趣的观点，说明了对你来说，获取优质信息以达到最佳状态变得多么容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, another scenario I said it the other day is I said I was going out to dinner. I prepped the day, but there was a change of plans and we went to a party and we were going to drink and have a bunch of ginonics and get home at 3:00 a.m. and I didn't need to think so much about what I needed to do because I prompted it gave it that information and then it reacted based on that change of plan. And so having that be accessible now to so many people whether you are able to make that change at home because you have access to food. But even if you know you need to go eat at Chipotle and it can tell you the things that you can eat or that you should order at Chipotle because that is your only option. I think is a super interesting point of just how accessible um good information for you to be optimal um is becoming.</p>
</details>

Clarvo: 所以我很想看看，我认为这是一个非常棒的日常实用例子。我很好奇您是否有任何能更多地展示生理学方面的东西。您知道，您一开始提到了很多关于伤病、保护关节和取得进展的内容。这些在您的教练中是否有所体现？我们看到了营养方面，但我很好奇是否有其他方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I would love to see I think this is a really great sort of like day-to-day practical example. I'm curious if you have anything that shows a little bit more of the kind of like physiology side of things. You know, you mentioned a lot at the beginning injuries and protecting joints and making progress. has have has any of that come into play in in your coaching? You know, we see the the nutrition side, but I'm curious if there's anything else there.</p>
</details>

Lucas: 当然。嗯，我给您展示一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Totally. Um, let me show you.</p>
</details>

Clarvo: 我还想向大家指出一点，我很喜欢您在滚动时，上下文和内容都在变化。就像是，现在我想谈谈营养。现在我想截取我的锻炼截图。现在我想做这个做那个。而聊天机器人可以适应所有这些信息，不需要您遵循任何规则、任何时间表或任何结构。所以，我认为这真的很有趣。然后我喜欢它有些部分是葡萄牙语，然后又切换到英语。嗯，我在屏幕分享中注意到了这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I also want to call out for folks that I love as you're scrolling is context changing, content changing. It's like, now I want to talk about nutrition. Now I want to take a screenshot of my workouts. Now I want to do do this and do that. and and the chat can kind of adapt to all that information and not need you to follow any rules or any schedule or any structure. So, I think that's really interesting. And then I love that this is in Portuguese some of it and then switches to English. Uh I I caught that on the screen share.</p>
</details>

Lucas: 所以，我认为这个例子真的很有趣。嗯，我一直在处理的不是网球肘，而是肘部受伤，然后我去看医生。我把医生的诊断结果告诉了它。我把物理治疗的处方也给了它，基本上我每天都会谈论我的疼痛，我会拍照，我会录制视频来记录我的疼痛感受，它基本上会证实医生所说的。你知道，我告诉它医生排除了网球肘，然后我就问它，我已经一周没打球了，还需要多久？医生和**PT**（Physical Therapy: 物理治疗师）都告诉我了，但我试图测试它是否会说出不同的东西，结果它说的还是一样。我真的很沮丧，你知道，我遵循了所有的处方，我做了所有的练习，但它就是没有好转。然后有一天，我真的去做了物理治疗，感觉确实好多了，因为他们同时使用了电流和力量训练做了些特别的事情。所以现在我正在给它**Prompt**（提示词: 指示AI执行特定任务的文本输入），让它思考，你知道，根据我一直告诉它的恢复进展，我是否能参加我希望在9月18日参加的这个业余比赛？所以它正在思考还剩下几周，什么是现实的，你知道，决策检查点，嗯，它的想法是什么，然后我要求它把所有东西都摆到台面上，思考恢复计划，嗯，我们该如何实施这个计划。老实说，它说的和**PT**（Physical Therapy: 物理治疗师）告诉我的完全一样，这真的很有趣。但它以一种我能理解的方式情境化了。现在，我每天都在想“疼痛消失了吗？疼痛消失了吗？疼痛消失了吗？”这种焦虑有所缓解，因为我可以用一种非常直观的方式管理对结果的预期，而这通常是你的PT或医生无法提供的。所以我正在向它提供这些信息，这样它就可以像他们一样思考，但也许能更好地处理和综合数据，因为它对我自己、我正在做的事情以及我的行为方式有如此多的了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think this one's really interesting. Um I have been dealing with not a tennis elbow but an elbow injury and um I went to a doctor. I I gave it um the diagnosis of the doctor. Um I gave it the prescription of physical therapy and basically I talk about my pain. I would talk about my pain on a daily basis and I would take pictures and I would record movies of how I'm feeling pain and basically it would confirm what the doctor um has said you know I tell it the doctor discarded tennis elbow um and it's like you know I've been I've been off the courts for a week how much longer and the doctor has told me and the PT has told me but I'm trying to test it if if it's going to say something different and it's saying the same thing and really frustrated you know, I'm following all the prescriptions. I'm I'm doing all the exercises, but it's like it's not not getting better. And then one day, I actually go into PT and it does feel better because of something specific that they did with electrical currents and strength training at the same time. And so now I'm prompting it to think about if, you know, based on the evolution of the recovery that I've been telling it, will I be able to play this amateur tournament that I I want to play on September 18th? And so it's thinking about how many weeks are left, what's realistic, you know, decision checkpoints, um what it thinks, and then I ask it to put put everything on the table to think about the recovery um the recovery uh plan um for for how we're going to do this. And honestly, it is exactly the same thing the PT told me, which is really interesting. But it is contextualized in a way that I can digest. And now sort of the anxiety of me every day thinking, man, is the pain gone? Is the pain gone? Is the pain gone? Is eved a little bit because I can manage the expectations of what will happen in just a very visual manner that you don't usually get um from your PT or from your doctor. And so I'm contributing it this information so it can think like them but perhaps process and synthesize the data a little bit better because it has so so much knowledge about myself and what I'm doing and how I act.</p>
</details>

Clarvo: 是的。你知道，我想回顾一下您刚才展示的内容，因为我认为这里有几个非常有趣的点值得大家关注。首先，我认为人们真的低估了您刚才展示的功能，那就是将视频或图片圈出某个东西，然后输入到**ChatGPT**（Generative Pre-trained Transformer: 一种大型语言模型）中。我发现这对于刚接触AI，不确定它能做什么的人来说，是一种非常有用的工作流程。嗯，我不知道这个比喻是否恰当，但我住在一栋114年的老房子里。这就像生活在我40岁的身体里一样。嗯，我们这里漏水，那里有裂缝，或者这里有鼓包什么的，我不断地拍下某个东西，圈出来，然后问：“这可能是什么？告诉我这可能是什么。”所以你可以这样做，你知道，我有一个不是网球肘，而是“坐在笔记本电脑前的肘部”问题，因为我把手臂以一个不好的角度放在桌子上。我知道我这样做。嗯，但是拍下它，然后说：“我这里疼，不是这里，也不是这里，而是这里。”嗯，这可能是什么，这是一个非常好的用例。我认为人们也不知道，嗯，很多这些模型可以很好地处理视频，所以这是你可以输入的另一种信息，然后你可以做他们在**PT**（Physical Therapy: 物理治疗）时让你做的事情，比如“我能到这里，但不能再远了”，或者“我能做这个”。所以我认为这是一个非常有趣的工作流程。我认为人们大量使用ChatGPT的第二件事就是验证专家意见。这并不是要否定专家意见。但你知道吗？我的私人医生不是24小时随叫随到的。当我离开办公室时，我能从他们那里得到的就差不多了。所以能够回去问：“你能给我重新解释一下吗？还有其他可能性吗？”嗯，这只是为您提供了一个更便捷的途径来验证一些信息。然后我要说的最后一件事是，当你离开一个专家（尤其是在医疗行业）那里，他们会给你一些要点，对吗？他们会以他们给你的格式给你，他们会口头向你解释，他们会发短信给你，他们会给你一张小小的总结单，而你可能会说：“不，我想要这个，但我需要它以每天的计划形式直到九月。”或者，“你能用这种格式重新向我解释一下吗？”我还认为，通过**LLM**（Large Language Model: 大型语言模型）翻译，以不同的格式理解相同信息的能力，真的非常有用，特别是当这些信息来自专家，而你可能不理解其中的术语、语言或机制时。所以我认为这三点都是AI非常有趣的用例，你可以在这一个流程中全部看到它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. One of the, you know, I want to just go back and reflect on what you just showed us because I think there's a couple really interesting things here for people to listen to. One is I think people really underuse what you just showed, which is a video or a picture circling a thing into into chat GBT. I found that that's such a useful um a useful kind of workflow for folks that are new to AI and not sure what it can do for it. Uh I don't know if this is an appropriate metaphor or not, but I live in a 114year-old house. It's like very similar to living in my 40-year-old body. And uh we you know we have leaks here or cracks there or bubbles here or whatever and I'm constantly taking a picture of something circling it and saying what could this you know tell me what this could be. And so you can do that you know I have a it's not tennis elbow it's I sit at my laptop elbow um and put my my arm on my desk at a bad angle. I know I do it. Um, but taking that and just saying like I've got pain here, not not here, not here, but like here. Um, what could that possibly be is really good use case. I think people also don't know. Uh, a lot of these models can process video really well and so that is another input you can put in and you know kind of do the thing that they make you do at PT which is like I can go to here but not further or I can do this. So I think that's a really interesting workflow. I think the second thing people are using chat GBT for a lot is just validating expert opinions. Not to dismiss expert opinions. But you know what? My, you know, personal doctor is not on demand 24 hours a day. When I leave the office, that's about as much as I'm going to get for them. So being able to go back and saying, "Can you reexlain this to me? Is there anything else it could be?" Uh, just gives you a more accessible outlet for sort of validating some of that stuff. And then the last thing I would say is often when you leave a certainly in the health profession but an expert and they give you some takeaways, right? They give it to you in the format they give it to you. They explain it to you verbally. They text it to you. They give you a little takeaway sheet and you're like, "No, I want this, but I need it in a dayby-day plan until September." Or, "Can you reexplain this to me in this format?" And I also think this ability to grock the same information through a different format by having an LLM translate it, it's really useful, especially when it's information from an expert where you may not understand the terms or the language or the mechanics. And so I think those three things are really interesting use cases of of AI and you can see them all in just this one flow.</p>
</details>

### AI教练的未来愿景与更广泛的应用

Lucas: 我认为这是一个非常棒的观点，我认为我们可以推断并思考我在这里为自己所做的事情。你知道，手动上传**MRI**（Magnetic Resonance Imaging: 磁共振成像）、**Whoop**（一种可穿戴健康追踪设备）数据、实验室报告，这只是揭示了一个更大的机会。嗯，AI可以成为个人健康的“缺失的整合者”。我认为医疗保健显然存在互操作性问题，数据是孤立的。这让人不禁思考，如果每个人都能拥有一个教练，将所有这些行动整理得清晰明了，那会怎样？我们一直在讨论的是，并非每个人都在追求这种极致表现。大多数人不需要六块腹肌或比赛准备，但他们可以从基础方面获得帮助，对吗？比如少吃加工食品、睡得更好、多运动。我认为AI教练可以根据人们的现状提供必要的指导和信息情境化，帮助他们成为更好的自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's a really fantastic point and I think we can extrapolate and think about what what I'm doing here for myself. You know, manually uploading MRIs, whoop data labs just exposes a much bigger opportunity. Um, and and AI could be a a missing synthesizer of personal health. And I think that healthcare has obviously an inter interoperability problem and the data is siloed. And it's interesting to think what what if every person could have a coach that that organizes all this action into into clarity, right? And part of what what we've been talking about is that not everyone is looking for this type of performance. Most people don't need six-packs or match prep, but they could use help with the basics, right? Eating less, processed food, sleeping better, moving more. And I think an AI coach could meet people where they are and actually give them the necessary nudges and contextualization of information that they need to be a better version of of themselves.</p>
</details>

Clarvo: 嗯，这真的很有趣，我正在把您看作一个高性能的运动员操作员。我刚才在想，我想为我8岁的儿子制作这个，他想在篮球方面变得更好。那就像他的表现学校。我就想，哦，你可以采用同样的框架，对吗？他八岁了。他有这么多时间。你知道，我们必须步行去篮球场。我们该怎么做？你可以做所有的事情，从视频到图片，所有这些。所以，我认为思考这个问题真的很有趣。无论你的目标是什么，建立一个这样的框架，可以帮助你日复一日地逐步实现它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, what's really funny about this is I'm thinking about you as, you know, a more high performance athlete operator. I was just reflecting, I want to make this for my 8-year-old wants to get much better at basketball. Like that's his performance school. I'm like, oh, you could take the same framework, right? He's eight. He's got this much time. You know, we have to walk to the basketball court. What what do we do? And you can do everything from videos to to um you know, pictures, all that kind of stuff. And so, I think it's just really interesting to think about this. no matter what your goals are, setting up a framework like this that can help you day by day increment your way to them.</p>
</details>

Clarvo: 所以在我们结束之前，您已经稍微谈到了一点，但您认为这方面的未来会是怎样？每个人都会自己制作这个吗？您认为这里有产品机会吗？您认为我拥有一个**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）和每个人都能自己做这件事之间有什么差距？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So before we before we wrap this up, you know, you've you've kind of um talked about it a little bit, but you know, what do you think the future of this is? Are everybody going to make this themselves? Do you think there's a product here? Like what what do you think is the gap between I have a GBT and everybody can kind of do this on their own?</p>
</details>

Lucas: 是的，我认为当你思考这个问题以及它在不久的将来如何潜在地扩展时，有一个非常有趣的概念。我预见到一个愿景，在五年或更短的时间内，每个人都将拥有一个个人AI健康教练，它不是为了取代医生，而是为了帮助我们更知情地去看医生，在两次就诊之间过上更健康的生活，并每天做出这些微小的决定。此外，我确实认为医生也会拥有这个，所以我们的AI将与医生的AI对话，思考一旦发生这种情况，需要设计哪些空间以及会发生什么样的互动，这很有趣。那将是一个不同的世界，因为它们将拥有所有的上下文。嗯，它们将拥有所有的上下文，当医生和病人出现时，对话会更加清晰。所以我认为健康的未来不仅仅是关于医学突破。它更多地是关于综合能力，以及将这些海量数据转化为简单且高度个性化的能力。我还相信一个无缝采集的时代。你知道，我们现在谈论的是手动将所有这些东西上传到**GPT**（Generative Pre-trained Transformer: 一种大型语言模型），但未来它将是无缝的。我们可能会在你的血液中拥有微型传感器，追踪信息，如血糖、荷尔蒙、智能织物，最终甚至会有马桶传感器，测量微生物组、水合作用，所有这些都将是环境的、被动的和无形的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I think there's a really interesting notion when you think about this and you think about how this can potentially scale in the near future. I I see a vision in which in five years or less everyone will have access to a personal AI health coach and not to replace doctors but to help us show to doctors um show up more informed and to live healthier between visits and to make these micro decisions every day. Additionally, I do think that the doctors will also have this and so our AI will talk to the doctor's AI and it's interesting to think about what are the spaces that need to be designed and what type of interactions will occur once that happens. It's going to be a different world because they will have all the context. Um they will meet have on all the context and when the doctor and the patient show up there's just much more clarity. um to have the conversation. And so I think that the the the future of health isn't just about medical breakthroughs. It's a lot about synthesis and the ability to turn this overwhelming amount of data into something that's simple and very very personalized. I also believe in an era of seamless capture. You know, we're talking about manually uploading all these things to the GPT, but it will be seamless. We will have micro sensors around potentially in your bloodstream, tracking information, glucose, hormones, smart fabrics, eventually toilet sensors, measuring microbiome, hydration, and it will all be ambient, passive, and invisible.</p>
</details>

Lucas: 我认为未来会出现这样一个世界：医疗保健领域的领导者最终将把他们的知识作为训练有素的AI模型出售。想象一下，你的口袋里有一个教练，它不仅根据你的数据进行训练，还基于**Mayo Clinic**（梅奥诊所: 美国著名的非营利性学术医疗中心）或**Advent Health**（一家美国非营利性医疗系统）等机构数十年的患者数据进行训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that there's a world where the healthc care leaders will eventually sell their knowledge as trained AI models. You know, imagine having a coach in your pocket that's been trained not just on you, but on decades of patient data from institutions like Mayo Clinic or Advent Health.</p>
</details>

Clarvo: 是的。嗯，思考当你将这些被动数据与基于最佳医学科学并为你量身定制的指导结合起来时会发生什么，这真的很有趣。我认为这还让医生能够摆脱电脑，成为一个故事讲述者和长期策略师，并在饮食、补充剂、习惯方面拥有这种超个性化的方面。嗯，所以我笑是因为我认为十年后我们会回顾并谈论我们为健康追踪付出了多少手动努力，我们会想到就像今天没有人会手动输入**GPS**（Global Positioning System: 全球定位系统）坐标到手机里一样，未来也没有人会手动记录运动或餐食，健康数据将自动捕获，我们口袋里将有教练来回互动并不断发展。所以最后我想说，我认为重要的是要反思这绝不是花哨的东西。嗯，它实际上是一个用于保持一致性的精密工具。我正在寻找高**ROI**（Return On Investment: 投资回报率）的选择，它正在帮助我通过伤病或食物来实现这一点。而且我确实认为，当我们考虑潜在的人口层面影响时，这才是它变得强大的地方，可以想象它会是什么样子。嗯，这实际上也是我公司经常做的事情。你知道，也许这里不适合谈论它，但我看到健康系统、健康公司和医生正在迅速采纳这种思维方式。我认为一个勇敢的新世界正在到来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Um it it it's it's just really interesting to think about what happens when you combine that passive data and you put it next to the guidance that's grounded in the best medical science and personalized to you. And I think this also gives the ability for the doctor to get out from in front of the computer and be a storyteller and a long-term strategist and to have this hyper personalized aspect around food, supplements, habits. Um, and so I I I think that I laugh because I think that in 10 years we'll look back and talk um about how much manual effort we've put into health tracking and we'll think about just like no one today types in GPS coordinates into their phone, no one will manually log boards or meals and health data will capture itself and we will have coaches in our pockets to go um back and forth and and evolve. And so just last words, I do think that's important to reflect that this is absolutely not about gimmicky. Um it's it's really a precision tool for consistency. I am looking for high ROI choices and it's helping me do that through injuries or food. And I do think that when we think about a potential population level impact, that's where this becomes powerful to imagine um what this can be. Um and it's actually something that my company does quite a bit. And you know, maybe maybe this is not the place to talk about it, but it it's something that I'm seeing a a fast adoption to how health systems and wellness companies and doctors are thinking about this. I think there's there's a brave new world coming.</p>
</details>

Clarvo: 嗯，我对那个世界感到兴奋。我刚才在想，我在健康科技领域待了一段时间，我就在想，我的**FHI Epic**（FHI: Federal Health Information，美国联邦健康信息；Epic: 一家领先的医疗软件公司）**MCP**（Master Control Program: 主控程序，这里指一个可以接入的中央系统）在哪里，我可以接入它，然后我就可以大展身手了。但再次强调，我认为那是一个未来。我想把它带回到那些可能正在观看播客的人，他们会说：“这对我有什么用？我不是运动员。”我认为的用例是照护。当你照护一位年迈的亲戚时，你会有如此多的信息，如此多的专家，如此多的数据点，你有那些体检，你知道，你去探望，你有照片，你有录音，你有所有这些东西。而拥有这个教练来帮助照护之旅就是其中之一。我认为孩子们的案例也非常有趣。我认为体育运动非常有趣。我认为对于那些——显然现在有很多正在录制这个播客的人——39岁即将40岁但想感觉像25岁的人来说，可能存在产品市场契合点。嗯，所以我只是觉得，你知道，也许听众没有完全相同的目标，但这个框架确实适用于很多医疗保健和健康挑战，或者人们的目标。所以我很高兴您向我展示了这个。它给了我很多很多想法。我不会用我酸痛的臀部和肘部来烦大家，但我确实有，还有睡眠问题，嗯，这我可以归咎于我的孩子。但我认为这真的很有趣，它启发了我，让我想要为我拥有的不同教练主题构建几个这样的东西。好的。嗯，我们，这太棒了。我想问三个闪电式问题。第一个是您提到了其他一些工作流程。所以这是您最喜欢的，但您能告诉我一两个您在工作中使用的，您认为有趣且人们可以思考的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I'm I'm excited for for that world. I was just think I I spent a hot minute in health tech and I was like, where is my FHI Epic uh uh MCP that I can plug into uh and then and then I'm going to go wild. But again, I I think that is a future. I want to bring it back to people who are maybe watching the podcast saying, "How does this apply to me? I'm not an athlete." And and just the use cases that I think of are caregiving. When you're a caregiver of an elderly relative, you have so much information, so many specialists, so much points of data that you have that PE, you know, you go visit, you have pictures, you have recordings, you have all this stuff. And just having this this coach to maybe help with a caregiving journey is one. I think kids are super interesting. I think athletics is very interesting. I think there's probably product market fit for people that um apparently there are many on this podcast recording right now that are 39 turning 40 but want to be 25. Um and so I just think like you know maybe people listening don't have the exact same goals but the framework really applies to a lot of healthcare and wellness challenges um or or goals for people. So I'm really excited that you showed this to me. It gave me so many I have so many ideas. I won't bore everybody with my um achy hip and elbow, but I have and and sleep issues uh which I can attribute to my kids. But I think it's it's a really interesting and it's inspired me to want to go build a couple of these for different different coaching topics I have. Okay. Well, we are this was fa fabulous. I want to do kind of three lightning round questions. One is just you mentioned a couple other workflows. So, this is your your favorite, but can you just tell me a couple other maybe that you use in work? Uh, maybe flash us one or two that you think are are interesting that people can think about.</p>
</details>

Lucas: 是的，当然。嗯，我也很乐意分享**Prompt**（提示词: 指示AI执行特定任务的文本输入），这样您和其他人就可以配置自己的**GPT**（Generative Pre-trained Transformer: 一种大型语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely. Um, I'm also happy to share um the prom so that you and others um can configure their own GBTs.</p>
</details>

Clarvo: 是的，我们会把它放在节目说明里。**Cactus**（一家公司，Lucas Worthing是其技术主管）是一家在物理空间和数字技术交叉领域工作的公司，我们为医疗保健和健康领域开发数字产品并思考物理空间。它是咨询公司和设计公司的结合。所以很多时候我们都在为客户思考新产品、新服务。这是一个例子，我们有一个非常出色、优秀的医生客户，但她非常忙碌，所以我们综合了大量来自文章、其他播客和互联网上的信息。我们设置了这些信息，以便在她无法联系时我们可以向它提问，并尝试将工作完成到我们认为她会同意的80%或90%的程度，这样当我们向她展示时，就不会占用可以跳过的时间，因为我们对她的思维方式和决策方式有很多了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we'll put that in the show notes. Cactus is a firm that works at the intersection um of physical space and digital technology and we work for healthcare and wellness uh developing uh essentially digital products and thinking about physical space. It's an intersection of a consulting firm and a design firm. And so many times we're thinking about new products, new services for our clients. And this is an example where we have taken the client who is a brilliant fantastic doctor but she is extremely busy and so we have synthesized a lot of this information from articles and other podcasts and things that are available on the internet. And we have seted this information so that we can ask it questions when she's unavailable and try to get the work to 80 or 90% of where we think she would agree with so that when we present it to her, it's not taking time that could be skipped over because we have a lot of how she thinks and how she makes decisions.</p>
</details>

Clarvo: 我喜欢这个。我们在播客中见过一两个合成老板，我从咨询公司、设计公司的角度来看，也很喜欢这个，因为合成客户是非常有趣的方式，正如您所说，回到我们一直在谈论的一切，您的专家不总是可用，您的客户不总是可用，人们的时间是宝贵的。但如果您足够了解他们可能对信息做出何种反应，您不仅可以给自己一些见解，还可以给您的团队一些见解，了解他们可能对事情做出何种反应。然后，你知道，我喜欢这些，当人们为他们的老板或客户制作它们时。给那里的老板和客户一个小小的专业提示，如果你想让这变得更容易，就制作一个你自己的**GPT**（Generative Pre-trained Transformer: 一种大型语言模型），你可以与人们分享。因为你可能最了解什么对你很重要以及事情如何影响你。所以这是我告诉大家要做的一个建议，就是在GPT中复制你自己，给你的团队提供一线被动反馈，然后有时你最终会像我一样，你构建了那个GPT，然后它意外地变成了一个企业软件业务，这就是我公司开始的方式。所以，我认为这是一个很棒的主意。然后我们之前在节目开始前还谈到了一件事，也许您可以在这里简单地介绍一下，那就是您还有一个AI联合创始人。所以，有很多合成人物。请给我们介绍一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I love this. We have seen one or two synthetic bosses on on the podcast and I love this from a kind of like consulting firm, design firm perspective, which is like synthetic clients are very interesting ways because as you said, you know, just going back to everything we've been talking about, your experts not always available, your clients not always available, people's time is scarce. But if you know enough about how they might react to information, you can not only give yourself some insight, but you can also give um your team insight into how they might react to things. And then, you know, I I I love these uh as people make them for their bosses or for their clients. A little pro tip to the bosses and clients out there, you want you want to make this even easier, make one of yourself that you can share with people. um because you probably have the best understanding of what's important to you and how things matter. And so it's one of those tips I tell everybody to do is go replicate yourself in a GPT to give your team a first-line passive feedback and then sometimes you end up like me whereas you build that GPT and then it accidentally becomes an enterprise software software business which is how my company started. So, I think this is a this is a great idea. And then one other thing we you we talked about before the show and maybe you can just voice over what you do here is you have an AI co-founder as well. So, lots of synthetic people. Tell us a little bit about that.</p>
</details>

Lucas: 是的，我爱我的联合创始人。他们非常出色。嗯，我并不需要一个AI联合创始人，但我们生活在一个新的世界里。我们经营的公司是一个分布式公司。我们不再在办公室工作，也不再能够随时接触到彼此。嗯，你知道，通过走过去拍拍他们说：“嘿，你有空吗？”你必须安排通话或打电话给他们。很多时候，你只是需要一个小小的伙伴来思考一个潜在的棘手问题，而这个问题你通常只会和你的联合创始人一起思考。用关于你的联合创始人如何思考、你如何思考、你正在经历的一些问题的数据来加载它，并成为一个与你一起头脑风暴的声音，这样你就不会从一张白纸开始，这显然是你经常听到的，但它真的很有帮助。这几乎就像商业疗法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, my I love my my co-founders. They're they're brilliant. Um and I do not need uh an an AI co-founder, but this is a new world that we're living in. the the the the company that we run is a distributed firm. We're no longer in an office and we no longer have access to each other. Um you know, by going and and tapping on them and saying, "Hey, do you have a minute?" And you have to schedule a call or call them. And many times you just need a little bit of a partner to think about a potential thorny problem um that you would only think with your co-founder. And it's really interesting to load it up with data around how your co-founder thinks, how you think, some of the problems that you're going through, and being a voice to brainstorm with you so that you're not starting from a blank slate, which is something obviously you hear a lot, but it's really helpful. It's almost like business therapy.</p>
</details>

Clarvo: 是的。嗯，说到这一点，我自己在笑，因为当您描述这个的时候，我正在想：“哦，也许我可以做一个合成的Claire，这样就能给我丈夫省点麻烦了。”然后他就会反复确认，比如：“我应该在做这件事之前对Claire说或做这个吗？”但我确实认为我们正处于一个有趣的世界，你知道，按需获得某人的专业知识并不总是可能的，而AI已经使这种近似版本成为可能，它不是，你知道，它不是真实的东西。嗯，但它确实能在当下帮助你。嗯，特别是在一个分布式世界里，你知道，当你在晚上11点思考一个问题时，你不想在**Slack**（一款团队协作和通讯工具）上@你的同事，所以我同样发现AI可以是一个非常棒的，再次强调，副驾驶或伙伴，嗯，在那些你需要快速检查一下的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, on that point, I'm laughing to myself cuz as you were describing this, I was thinking, "Oh, maybe I can save my husband a little bit of trouble if I make a synthetic Claire." And he just double checks like, "Should I should I say or do this to Claire before before I do it?" But I I do think that there we're this interesting world where you know wanting the expertise of someone on demand is is not always possible and AI has made an approximate version of that possible and it's not you know it's not the real thing. Um but it does help you in in the moment. um especially in a distributed world where you know you don't want to atmentntion your colleague in Slack at you know 11:00 when you're thinking about a problem and so I found similarly that AI can be a really great uh again co-pilot or partner um in some of those moments where you just need a quick check</p>
</details>

Lucas: 我能提一下，回到合成客户的话题，只是为了避免和我的客户产生麻烦，重要的是要强调我们放入合成客户中的所有信息都不是专有的。它们都可以在互联网上找到。所以我们没有用从客户那里获得的信息来训练任何模型。这只是我们通过公开可用的演示文稿进行的一种练习。是的。所以，嗯，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">can I just mention going back just just to the synthetic client uh just so I don't get in trouble with with my clients it's important to highlight that none of the information that we put in the synthetic client are proprietary. They're all available on the internet. And so we're not training any of the models with the information that we get from our clients. It's just an exercise that we run through presentations publicly available. Yeah. So um yeah.</p>
</details>

### AI教练的调教与展望

Clarvo: 嗯，这太棒了。你知道，我将用我们最后最喜欢的问题来结束，那就是您显然是一位**Prompt**（提示词: 指示AI执行特定任务的文本输入）专家，我很高兴看到这一点，但是当您的教练给出糟糕的建议，或者您知道AI没有按照您喜欢的方式回应时，您看起来是一个非常理性的人，所以您可能会表现得很有礼貌，但您的首选策略是什么？您如何让AI回到正轨？嗯，您会感到沮丧吗？您会怎么做？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this is awesome. you you know I'll wrap with our our final favorite question which is you are clearly an expert prompter which I love to see but when your coach is giving you bad advice or you know the AI is not responding how you like you seem like a very reasonable person so you probably act quite politely but what is your go-to tactic how do you how do you get AI back on track um do you ever find yourself frustrated what do you do</p>
</details>

Lucas: 不会感到沮丧，嗯，我认为这与模型如何演变有关，我们看到了模型的迭代。我确实看到了它在减少幻觉或编造信息方面的演变。我确实认为，围绕我们允许它思考的方式设置护栏，而不是必然访问外部信息，会使其更容易一些。嗯，所以当它出错时，嗯，我将其视为技术演进的一部分。这是全新的技术。它会出错的。我尝试像帮助我的孩子犯错时那样帮助它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">not frustrated um and I think this ties to how the models have evolved as we see the iteration of models. I see definitely an evolution of how it hallucinates less or it makes up less things. I do think that putting guard rails around how we're allowing it to think and not necessarily access outside information makes it a little bit easier. Um, and so when it gets something wrong, um, I see it as the evolution of technology. This is brand new technology. It's going to get it wrong. And I try to perhaps help it like I help my children when they when they get things wrong.</p>
</details>

Clarvo: 我在这个播客上一直这么说。这个问题的答案总是反映了你的育儿策略。好的，Lucas，这太棒了。非常感谢您分享您的教练。我实际上要去**ChatGPT**（Generative Pre-trained Transformer: 一种大型语言模型）上尝试一下了。我有一个非常好的想法，也许我也会在节目说明中分享。感谢您参加《How I AI》。我们可以在哪里找到您，我们能提供什么帮助？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I have said this consistently on this podcast. The answer to that question is always a reflection of your parenting tactics and and strategies. Well, Lucas, this has been amazing. Thank you so much for sharing your coach. I'm actually going to go spin off into Chad GBT. I have a really good idea for one that maybe I'll share in the show notes as well. I appreciate you joining How I AI. Where can we find you and how can we be helpful?</p>
</details>

Lucas: 嗯，您可以在……我实际上已经不用社交媒体了。嗯，所以我们不能通过社交媒体找到我。
Clarvo: 那我们可以在哪里找到您的公司？
Lucas: 您可以找到我的公司。它是Cactus，就像字母S开头的Sam一样。嗯，老实说，我大部分时间都在那里。所以，如果您想找到我，就去Cactus。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you can find me at I'm actually off social media. Um, so we can't social media. Where can we find your company? You can find my company. It's captive. As in Sam. Um, and that's where I spend most of the my time to be honest. So, if you want to find me, just just go to Cactus.</p>
</details>

Clarvo: 太棒了。去Cactus，并在9月18日的那个业余网球比赛中找到他。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Go to Cactus and find him at that amateur tournament, tennis tournament on September 18th.</p>
</details>

Lucas: 或者，或者向我发起一场网球挑战赛。那是引起我注意的另一种方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or or challenge me to to a tennis match. That's that's the other way to get my attention.</p>
</details>

Clarvo: 是的。完美。非常感谢您的加入。我真的很感激。这是一次很棒的对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Perfect. Well, thank you so much for joining. I really appreciate this. It's been a great conversation.</p>
</details>

Lucas: 好的。谢谢Claire。很高兴认识您，也感谢您邀请我参加节目。非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Thanks, Claire. It's a pleasure to meet you and thanks for having me on the show. It's been wonderful.</p>
</details>

Clarvo: 非常感谢您的观看。如果您喜欢本节目，请在YouTube上点赞并订阅，或者更好的是，留下您的评论。您也可以在**Apple Podcasts**（苹果播客）、**Spotify**（一家音频流媒体服务公司）或您喜欢的播客应用上找到本播客。请考虑给我们留下评分和评论，这将有助于更多人发现本节目。您可以在howiipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube, or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiipod.com. See you next time.</p>
</details>