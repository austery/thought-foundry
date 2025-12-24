---
area: tech-insights
category: technology
companies_orgs:
- OpenAI
- Google
- a16z
- GBT
- Open Door
- MIT
- Kora
- Perplexity
- Harmonic Labs
- Atlas Alamos National Labs
- Roxet
date: '2025-11-28'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- YouTube
people:
- Sam Altman
- Greg Brockman
- Adam D'Angelo
- Mark
products_models:
- ChatGBT
- GBT5
- GBT4
- GBT3
- Gemini
- Codeex
- GPOSS
- Dolly
- Sora
- Cursor
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=3x0jhpEj_6o
speaker: a16z
status: evergreen
summary: OpenAI 的 Sherman Woo 深入探讨了公司如何通过 API 和 ChatGBT 等第一方应用服务 8 亿周活跃用户。讨论涵盖了模型专业化、微调
  API 的演进、强化学习的应用，以及 OpenAI 在开放源代码和定价策略方面的思考。此外，还探讨了代理（Agent）构建器的设计理念，以及在不同行业中自动化工作流程的实践。
tags:
- agent
- llm
- model
- reinforcement-learning
title: OpenAI 如何服务 8 亿周活跃用户：模型专业化与微调
---

### OpenAI 的发展与 ChatGBT 的成功

我们希望将 ChatGBT 作为一个第一方应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want chat GBT as a first party app.</p>
</details>

第一方应用是获得 8 亿用户喜爱的好方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First party app is a really great way to get 800 million wows or whatever now.</p>
</details>

十分之一的地球人口，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Tenth of the globe, right?</p>
</details>

是的，全球 10% 的人口每周都在使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. 10% of the globe uses it every week.</p>
</details>

每周都在使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> every week. Every week.</p>
</details>

### 模型专业化的转变

即使在 OpenAI 内部，最初的想法也是会有一个模型统治一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even within OpenAI, the the thinking was that there would be like one model that rose them all.</p>
</details>

但现在这种想法已经完全改变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like definitely completely changed.</p>
</details>

越来越明显的是，会有许多专业化模型存在的空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's becoming increasingly clear that there will be room for a bunch of specialized models.</p>
</details>

可能会出现其他类型的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There will likely be a proliferation of other types of model.</p>
</details>

### 数据宝藏与强化学习微调

公司拥有大量的数据宝藏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Companies just have giant treasure troves of data that they are sitting on.</p>
</details>

最近的一个重大突破是强化学习微调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The big unlock that has happened recently is with the reinforcement finetuning.</p>
</details>

通过这种设置，我们现在允许你运行 **RL**（Reinforcement Learning: 强化学习），这使你能够更多地利用你的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With that setup, we're now letting you actually run RL, which allows you to leverage your data way more.</p>
</details>

### Sherman Woo 的背景介绍

Sherman，非常感谢你的加入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sherman, thanks very much for joining.</p>
</details>

今天我们请到了 Sherman Woo。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're being joined by Sherman Woo.</p>
</details>

如果你能详细介绍一下你的背景，这对那些可能不了解你的人来说会很有帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it'd be great actually if you provided the long form of your background as we get into this, just for those that that may not know you.</p>
</details>

我认为 Sherman 是人工智能领域的顶级思想领袖之一，所以我非常期待这次对话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I I view Sherman as one of the the top AI thought leaders, so I'm really looking forward to this.</p>
</details>

感谢邀请，我很高兴能参与这次播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Thanks for having me. I'm I'm really excited to be be on the podcast.</p>
</details>

关于我的背景，也许我们可以从现在开始倒着说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, yeah. Yeah, a little bit more of my my background. So, uh maybe we can start from present day and go backwards.</p>
</details>

我目前领导 OpenAI 开发者平台的工程团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I I currently lead um the engineering team for the for OpenAI's developer platform.</p>
</details>

其中最大的产品当然是 API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the biggest product in there of course is the the API.</p>
</details>

开发者平台还有比 API 更多的东西吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> is there more for the developer platform than the API?</p>
</details>

我一直认为它们是同义的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I just kind of assume there was synonymous.</p>
</details>

我也会考虑我们放入平台侧的其他东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so I I also think about uh other things that we put into our platform side.</p>
</details>

从技术上讲，我们的政府工作也在不同的领域提供部署。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, like technically our government work uh is is also like offering deploying this different areas.</p>
</details>

就像我之前提到过的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Like I've talked about</p>
</details>

所以你们有本地部署？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, so you have like a local deployment like</p>
</details>

是的，我们确实在 Atlas Alamos 国家实验室进行了本地部署，这非常酷，我去参观过，它和我习惯的非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. So, we actually do have a local deployment Atlas Alamos National Labs. It's super cool. I went to visit it. It's like very different than what I'm used to.</p>
</details>

在一个保密的超级计算机上运行着我们的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but yeah, in a like, you know, classified supercomput with with our with our model running there.</p>
</details>

真酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's cool.</p>
</details>

所以有这个，但主要是 API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so there's that. Um, but like mostly the the API. Um, cuz</p>
</details>

你去过洛斯阿拉莫斯吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Did you go to Los Alamos?</p>
</details>

是的，我们去过洛斯阿拉莫斯，他们带我们四处参观，向我们展示了一些历史遗址。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> We did. Yeah, I did go to Los Alamos. It was great. They showed us around. They showed us some of the historic sites.</p>
</details>

真正的历史。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Real history. Um, yeah.</p>
</details>

我过去在利弗莫尔工作过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I used to work at Livermore, man. So, I've got like an</p>
</details>

我的第一份大学毕业后的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, yeah. Yeah. My first job out of college. So,</p>
</details>

对，对，对，你听起来像是下一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right. Right. Right. You sounded that next.</p>
</details>

我们希望，我们希望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Yeah. Well, we we hope to we hope to.</p>
</details>

我在开发者平台工作，已经大约三年了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but uh yeah, so I work on the developer platform. I've been working on it for around uh 3 years uh now.</p>
</details>

我于 2022 年加入，基本上是被聘来开发 API 产品的，当时这是 OpenAI 唯一的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I joined in 2022. Uh was basically hired to work on the the API product which at the time was the only product that that opening I had.</p>
</details>

我基本上一直在做这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and I've basically just worked on it the uh the entire time.</p>
</details>

我一直对开发者方面和这项技术的创业故事非常感兴趣，所以看到它的发展真的非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I've always been super interested in the developer side and kind of like the startup story of this technology. And so it's been really really cool to kind of see see this evolve.</p>
</details>

这就是我在 OpenAI 的经历。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so um that's my time in OpenAI.</p>
</details>

在 OpenAI 之前，我在 Open Door 工作了大约 6 年，负责定价方面的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before OpenAI um I was at uh Open Door uh for around 6 years. I was working on the pricing side. My my general background before</p>
</details>

我认为这是一个不和谐的组合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think it's such a dissonant like you know</p>
</details>

在 Open Door 做定价，然后运行 API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[laughter] pricing at open door to like running API and</p>
</details>

这非常不同，对我来说，看到这两家公司的差异非常有趣，它们的运营方式截然不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's such a different uh it's been fascinating actually for me to see the differences between the companies like they're run so differently.</p>
</details>

它们的名字里都有 "Open"，所以有一些重叠，但基本上就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um they both have open in the name so there's some overlap but like that's bas that's pretty much it. Um</p>
</details>

我在那里工作了大约六年，在定价团队工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but yeah I was there for around six years uh working on the pricing team. So</p>
</details>

我们的团队基本上会运行 ML 模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">our team basically would run the ML models.</p>
</details>

这不是在 Open Door 上定价资产，比如库存。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This isn't actually pricing the assets on Open Door like the inventory.</p>
</details>

### Open Door 的定价挑战

没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Exactly.</p>
</details>

Open Door 会购买和出售房屋，他们的主要项目是从人们手中直接购买房屋，并提供全现金报价，所以我的团队负责确定我们为这些房屋支付多少钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So open so yeah, Open Door would buy and sell homes and their main project was buying homes directly from people selling them for with all cash offers and so my team was responsible for how much we would pay for them. Uh</p>
</details>

这是一个非常有趣的机器学习挑战，它也有很大的运营成分，因为显然不是所有东西都是自动化的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so it was a really fun like ML challenge. Uh it had a huge operational element to it as well cuz not everything was automated obviously</p>
</details>

这是一个非常有趣的技术挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but it was a really fascinating technical challenge and um</p>
</details>

在 API 方面，是否有类似的 GPU 容量购买，或者它们完全不相关？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> is there any sense of that on the API side like like GPU capacity buying or is it just totally unrelated?</p>
</details>

在 API 方面，我们对模型进行定价的方式有一点点相关，但我认为我们没有像 Open Door 那样复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh on the on the API side um there's is a small bit of like how we price the the models but uh I don't think we do anything as sophisticated as uh uh as open door.</p>
</details>

Open Door 解决的是一个非常困难的问题，它涉及非常昂贵的资产，持有成本非常高，你可能要持有几个月，而且持有时间的可变性很大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Open door is just like such a hard problem. It's like such a like expensive asset. It's like like the the holding costs are very expensive. You're like holding on to it for like months at a time. There's like a variability in like the holding time.</p>
</details>

大量的潜在因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> A massive long tail of like potential things that could</p>
</details>

长尾效应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">long tail.</p>
</details>

你需要从投资组合的角度来考虑，如果其中一个你持有了两年，那就会毁掉一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. And like you know you have the you try to think about it from a portfolio perspective and like if one of them just like you're holding on it for two years it blows everything.</p>
</details>

一切都会变成负数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Everything like goes negative.</p>
</details>

这是一个非常非常不同的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's uh it's a very very different different challenge.</p>
</details>

我在那里工作了六年，经历了很多起起落落，看到了繁荣，也看到了挣扎，然后在离开之前进行了首次公开募股（IPO）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Six years there. Uh lots of up and downs. uh saw a lot of the booms, saw a lot of the struggles and then we IPOed uh before I before I left.</p>
</details>

总的来说，这是一次非常棒的经历。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but yeah, just in general it was a very great experience.</p>
</details>

对我来说，它有非常业务运营的特点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think uh for me it was uh it was also just like had such a very like business operations and like</p>
</details>

一种非常按章办事的文化，而 OpenAI 则非常不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> like a very like by the book type of culture whereas open is like very different.</p>
</details>

有趣的是，即使对于像 Open Door 这样的公司，你不会认为它是一家科技公司，但如果存在深层次的技术问题，那实际上是定价问题，实际上是一个机器学习问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's so interesting I was just thinking about it now is like even for a company like that like you don't think about it as a tech company but if there is a deep technology problem it actually is the pricing right. It's actually an ML problem.</p>
</details>

不是网站，不是平台，不是 API，而是定价本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not what it drives. like the website, it's not the, you know, it's not the platform, it's like, it's not the API, it's literally that.</p>
</details>

没错，这就是吸引我的地方，我认为这很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yep. Yep. Yep. And that's what attracted me to it. I think that's was interesting.</p>
</details>

它的利润率也比 OpenAI 低得多，因为你在这些房屋上的利润很小。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, uh, it's also a way like lower margin business than, uh, OpenAI. Uh, cuz you're like making a tiny spread on these homes.</p>
</details>

他们谈论的是像早餐一样吃掉基点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, they talk about like basis points like eating bits for breakfast and all that.</p>
</details>

我在 Open Door 工作了大约 6 年，在那之前，我的第一份大学毕业后的工作是在 Kora，与 Adam Dans 合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um, anyways, I was at Open uh, Open Doorf around 6 years. Um, and then before that, uh, was my first job out of college which was at Kora um, with Adam Dans from group there.</p>
</details>

我负责新闻推送。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So I was working on the newsfeed.</p>
</details>

### Kora 的早期经历与人才团队

我在新闻推送排名方面做了一些工作，也在产品方面做了一些工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh so worked on newsfeed ranking for a bit. Worked on the product side.</p>
</details>

那是我第一次接触到实际的机器学习和行业，我从 Kora 的工程师那里学到了很多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but was uh that was actually my first exposure to like actual ML and industry and uh learned a lot from uh uh from from the engineers at core.</p>
</details>

我们基本上雇佣了很多早期的 feed 工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We basically hired a lot of the the early like feed engineers.</p>
</details>

查理在你工作的时候还在那里吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Was Charlie still there when you were there?</p>
</details>

查理在我之后才离开，那是一个非常传奇的团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Charlie was not there when I when I right after that was a really legendary team, you know.</p>
</details>

它仍然被认为是这个超级标志性的创始团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was still known to be kind of this super iconic founding team.</p>
</details>

早期的创始团队非常强大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. the the the early founding team was really solid.</p>
</details>

即使在我工作的时候，我仍然对我们拥有的人才质量感到惊讶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I still think that even while I was there, I was I I still like am amazed at the quality of the talent that we had.</p>
</details>

我认为有一个公司只有 50 到 100 人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think there's like one company's like 50 to 100 people, but like</p>
</details>

很多 Perplexity 团队的人都在那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah, like a bunch of the perplexity team was there.</p>
</details>

Dennis 和我在 feed 团队一起工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Dennis Dennis was on the feed team with me. Uh uh uh Johnny Ho, Jerry Ma,</p>
</details>

没错，还有 Alexander，你知道，他当时在高中和大学之间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that's right. And then Alexander the scale now, you know, like was there he was he was he was there between high school and college.</p>
</details>

这是一个令人难以置信的团队，我在那里的时候，我有点认为这是理所当然的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it was an incredible team. I I don't think I I think I kind of took it for granted while I was there.</p>
</details>

这是一个很好的团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was a good group. But um</p>
</details>

你是如何进入 Kora 的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> uh and how did you how did you get to Kora? What did you study in undergrad?</p>
</details>

在此之前，我在麻省理工学院（MIT）读本科，学习计算机科学。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, so before that I was at MIT for undergrad. I studied computer science.</p>
</details>

我参加了一个计算机科学和硕士学位的那种速成项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um uh did like one of those like computer science and the master's degree kind of like crammed it in.</p>
</details>

### 在 Kora 的实习经历

我最终去了 CORE，因为我在那里得到了一份实习机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um uh I ended up at CORE because I got an uh what we call an externship there.</p>
</details>

在麻省理工学院，你实际上可以休一月份的假。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like uh at MIT uh you actually get January off.</p>
</details>

秋季学期结束后，一月份放假，然后是春季学期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's like the fall semester and then January's off and then you have uh the spring semester.</p>
</details>

这被称为独立活动期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it's kind of this it's called independent activities period.</p>
</details>

有些人只是上课，有些人什么也不做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So some people just like take classes, some people just do nothing,</p>
</details>

有些人会做为期一个月的实习，一些疯狂的公司会向大学生提供为期一个月的实习机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but it's uh some people will do like month-long internships and some crazy companies will like offer a month-long internship to a college student.</p>
</details>

这实际上只是一种让人进入的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it really is just kind of like a way to get uh people into</p>
</details>

你是从波士顿来的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Did you come out here from Boston or</p>
</details>

是的，太疯狂了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it was crazy.</p>
</details>

你必须申请，我记得那是 2013 年 1 月左右，你必须申请，我记得 CORE 的实习是薪水最高的，大约 8000 到 9000 美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um so so so uh you had to apply. I remember uh yeah this is like I think 2013 uh January or something um you had apply and I remember the core internship was the one that just paid the most. They paid I think it was like $8,000 $9,000</p>
</details>

对于一个大学生来说，这太棒了，而且他们会把你飞到这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">[laughter] and I was like wow that's like for a month and you're kind of ramping up like half the time >> I can eat for a year. >> Yeah. Yeah. As a college student like this like great and you get a and yeah they would they would kind of like fly out fly you out here and so I did the interviews and then luckily got an offer</p>
</details>

我来这里度过了一个一月，当时他们刚搬进新的 Mountain View 办公室，我基本上花了两个星期的时间来适应，然后有两周的时间在 feed 团队高效工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so yeah I came out for a January. Um that was right when they moved into their new Mountain View office and I basically uh yeah honestly just ramped up for like 2 weeks and then had like two weeks of good productivity working on the feed team.</p>
</details>

那是面向用户的产品吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So was that on the was that like userf facing like userf facing product? Yeah.</p>
</details>

我清楚地记得我的实习项目是在那