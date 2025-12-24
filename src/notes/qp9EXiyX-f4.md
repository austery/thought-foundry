---
area: tech-insights
category: technology
companies_orgs:
- Air Street Capital
- First Mark
- OpenAI
- DeepMind
- Allen Institute
- Seract
- Anthropic
- Ramp
- Nvidia
- Meta
- Google
- Amazon
- CoreWeave
- Palantir
- C3.ai
- SoftBank
- Broadcom
- AMD
- Apple
- Groq
- SambaNova
- Cerebras
- Graphcore
- Cambricon
- Huawei
- DeepSeek
- Hugging Face
- Reflection AI
- Thinking Machines
- Workday
- 11 Labs
- Delpha
- Recursion
- Xentia
- Profluent
- Alliance Industries
date: '2025-10-30'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- State of AI Report
people:
- Nathan Benaich
- Matt Turck
- Rich Sutton
- Yann LeCun
- Geoffrey Hinton
- Dario Amodei
- Mark Benioff
- JD Vance
products_models:
- Stargate
- Gemini
- H20
- Transformer
- GPT-3
- ChatGPT
- Llama
- Qwen
- GPT-OSS
- Haiku
- AlphaFold
- AI Scientist V2
project:
- ai-impact-analysis
- investment-strategy
- geopolitics-watch
series: ''
source: https://www.youtube.com/watch?v=qp9EXiyX-f4
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: Air Street Capital 创始人 Nathan Benaich 解读其发布的《2025年AI现状报告》。本次对话深入探讨了AI行业面临的关键议题：电力已成为新的核心瓶颈，其成本和地缘政治影响日益凸显；AI在推理和机器人“行动链”方面取得了惊人进展；AI商业化已从炒作走向现实，产生了数十亿美元的真实收入，但利润率问题依然存在；行业内的资本泡沫、主权AI竞赛以及开源模型的地缘政治博弈也成为焦点。
tags:
- ai-bubble
- energy
- llm
- technology
title: 2025年AI现状报告解读：能源瓶颈、推理突破与商业现实
---

### 引言：解读2025年AI现状

**Matt Turck:** 欢迎回到 Matt 播客。今天，我很高兴能再次邀请到 Air Street Capital 的创始人 Nathan Benaich，与我们一同探讨他发布的《2025年AI现状报告》。这份报告是任何想要真正了解人工智能领域发展现状的人的必读之作。我们这次谈话涵盖了很多内容，包括为什么电力成为新的瓶颈、推理能力和机器人领域的“行动链”技术、以及商业现实中的收入、利润率，以及这对开发者和投资者意味着什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome to the Matt podcast. Today, I'm excited to welcome back Nathan Benaich, founder of Air Street Capital, to discuss the 2025 edition of his state of AI report, a must-read on where the field really is. We cover a lot including why power is a new bottleneck, reasoning and chain of action robotics and the business reality revenue margins and what it means for builders and investors. Please enjoy this great conversation with Nathan.</p>
</details>

**Matt Turck:** Nathan，很高兴你再次做客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nathan, great to have you back.</p>
</details>

**Nathan Benaich:** 谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for having me.</p>
</details>

**Matt Turck:** 《2025年AI现状报告》已经发布，一如既往，对于任何想认真了解 AI 的人来说，这都是一份必不可少的读物。今年的报告内容非常丰富，足足有312页。AI 领域今年真是个大年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The state of AI 2025 is out and as always, it's essential reading for anyone who's serious about understanding AI. This year it's 312 slice of goodness. A bit of a big year in AI.</p>
</details>

**Nathan Benaich:** 每年我都试图精简一些，但今年我感觉，当我们将报告分享给 AI 社区的各个子社群时，每次都会收到反馈。比如机器人领域的专家会说：“嘿，机器人方面的内容有点少，能多加点吗？”然后我们发给生物领域的专家，他们又会说：“为什么不引用这篇或那篇论文呢？”就这样，报告的篇幅越来越长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every year I try to cut it down a little bit. But this year I just felt like we were sharing it with various sub communities of the AI community. And each time we did that the robotics folks would be like hey it's a little bit light on robotics. Can you add some more? And then we sent it to the bio folks and like why don't you site this paper or that paper? And hence the inflation.</p>
</details>

**Matt Turck:** 太棒了。好吧，我们这次谈话肯定无法涵盖所有内容。当然，报告全文可以在 stateof.ai 网站上免费获取。所以，我们将围绕报告中一些最重要的主题和观点进行探讨，但显然，大家可以直接去阅读报告以获取更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Amazing. All right. So we're certainly not going to cover everything in this conversation. Obviously, as always, the report is available in its entirety for free at stateof.ai. So, we're going to riff on some of the most important topics and ideas in the report, but obviously people can go and check out the report directly for more.</p>
</details>

### 推理能力的真实飞跃

**Matt Turck:** 好的，我们从头开始。在研究领域，你提到2025年是“推理能力真正实现”的一年。那么，在过去12个月里，我们取得了多大的进展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, starting from the top in the world of research, you mentioned that 2025 was a year reasoning got real. So how far have we come in the last 12 months?</p>
</details>

**Nathan Benaich:** 我会说进步相当大。大约12个月前，我们看到了最早的迹象，大概是去年这个时候的 01 预览版。那是第一次出现一个能够展示其推理过程，即为了得到一个更复杂答案而采取的逐步过程的系统。这一直是人工智能领域长久以来的梦想。从那时到现在，我认为进展是相当惊人的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'd say pretty far. About 12 months ago or so we had I think the very early inklings of it with 01 preview potentially around like this time last year. And that was the first time you had a system that could kind of show its reasoning, show its step-wise process to get to a more complicated answer. And this has generally been the dream in AI for a long time. And and since then to now I would say like the progress is pretty astounding.</p>
</details>

这种进步体现的一个领域是数学和其他可验证的领域，在这些领域你可以明确地说一个系统是否有效。我们看到包括 OpenAI 和 DeepMind 在内的几个实验室在国际数学奥林匹克竞赛中获得了金牌。如果你再次询问专家，他们可能会说这个领域取得这样的成就本需要十年时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the areas that that progress has kind of unveiled itself is in mathematics and other verifiable domains where you can like explicitly say yes the system works or doesn't work and you know we saw gold medals on the international math olympiad by a couple labs including openai and deep mind that area probably with uh if you'd asked experts again how long it would have taken would probably been a decade.</p>
</details>

在更贴近我内心的生物学和科学领域，我们看到推理模型被用作“AI 协同样本科学家”。就像人类科学家一样，它们阅读大量论文、规划实验、运行实验，然后进行数据分析，并据此重新构建假设。已经有模型代替人类完成这些工作的例子，这非常令人兴奋，因为需要阅读的论文实在太多了。AI 领域的从业者抱怨每年有大约5万篇论文，而在生物学、化学和物理学领域，这个数字可能还要高一个数量级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then areas a bit closer to my heart in biology and science we've seen reasoning models uh kind of be used as a as an AI co-scientist so just as a human would reading lots of papers, planning experiments, running the experiments and then doing data analysis and then reformulating their hypothesis as a result. There's examples of uh models doing that in lie of human which is exciting because there's way way too many papers uh to read you know AI people kind of complain that it's like 50,000 papers a year and say in biology and chemistry and physics is probably an order of magnitude more than that.</p>
</details>

DeepMind 已经证明，你可以整合这种推理模型来解读新的疾病靶点和新机制，这些发现在事后也通过湿实验室（wet lab）场景得到了验证。我们已经从过去那种有点笨拙的随机鹦鹉系统，发展到如今能够解决连聪明的人类都无法解决的、非常有意义的挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so uh deep mind has shown that you can integrate this kind of reasoning model to sort of decipher new targets for disease new mechanisms that were actually also proven in a wet lab scenario um postfacto. We've gone from systems that were kind of dumb stoastic paris to now they can solve pretty meaningful challenges that I'd say like even a smart human couldn't.</p>
</details>

### 机器人学的“寒武纪大爆发”

**Matt Turck:** 在研究领域，你在报告中也谈到了很多关于机器人学的内容，以及从“思维链”到“行动链”的演变。这方面有什么新进展？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh still in research you talk a little bit in the report or a lot in the report about robotics and this evolution towards uh a system of action or chain of chain of action going from chain of thought to ch of action. What's happening there?</p>
</details>

**Nathan Benaich:** 是的，总的来说，大约两年前，机器人学几乎走到了死胡同。OpenAI 解散了他们的机器人团队，那个团队曾因用机械手解决魔方而闻名。而现在，机器人学可能正在经历一场“寒武纪大爆发”，充满了巨大的兴奋点。就像语言模型为生物学提供了信息一样，现在语言模型也在为机器人学提供信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I mean the gist is probably two years ago robotics was kind of a dead end. Um openi had disbandled its uh its robot team that was famous for solving the Rubik's cube using uh locomotion with the hand. And so now robotics is probably you know going through a cambrian explosion. There's so much excitement uh and just as how language models informed biology, now language models are also informing robotics.</p>
</details>

你提到的正是一种用于机器人的推理过程，系统不再仅仅是感知环境、决定如何行动然后行动，我们已经将这些步骤分开了。现在，你有一个推理模型，它会审视一个任务，并规划出机器人执行该任务所需的步骤，然后将这个计划传递给一个执行器，由执行器去实际执行。这就是所谓的**行动链**（Chain of Action）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what you're referring to here is a sort of reasoning uh process for robots where a system is no longer just perceiving the environment and deciding what to act and sort of acting, but it's uh we've separated those steps. So now you have a reasoning model that looks at a task and tries to plan steps that a robot would need to do to execute that task and then passes that plan over to uh an actuator which goes and actually implements the plan and that's what's called chain of action.</p>
</details>

在这方面，艾伦研究所（Allen Institute）是首批真正推动这一理念的机构之一，紧随其后，Gemini 也迅速跟进。我们还有一些公司，包括 Seract，正在将这项技术应用到现实世界中。所以它确实是有效的，不仅仅是研究层面的东西。我们认为，机器人学的重大时刻已经到来，因为我们所有人已经集体讨论这个话题很长时间了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and here the Allen Institute was one of the first to really push this and very swiftly thereafter uh Gemini also followed and and uh we have some companies including Serak that are implying this uh into the real world. So it does genuinely work. It's not just like a research thing. So we think the big moment for robotics is uh upon us because we all collectively have been uh talking about this for a very long time.</p>
</details>

**Matt Turck:** 是的，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah.</p>
</details>

**Nathan Benaich:** 我认为它确实在工业领域，比如物流和仓储等更受限的环境或非常重复性的任务中，已经到来了。当然，还有更宏伟的目标，即制造出具有人形外观的具身智能体，并将模型植入其中，这个模型甚至可能与仓库中使用的模型相同。大量资金正投入该领域。但我个人认为，人形机器人领域会更像自动驾驶——我们会有一些非常出色的独立演示，但长尾问题会让你头疼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I'd say it really is upon us in the industrial sector um in logistics and warehousing uh kind of more constrained environments or very repetitive tasks. There is the sort of more holy grail of this kind of embodied um uh humanlike form factor and putting a model on that might even be the same model that's been used in uh in warehousing. Uh, a lot of money is going into that. But my personal bet is I is I think it's going to be the humanoid space is going to look much more like self-driving where we have some very good isolated demos, but the longtail will kill you.</p>
</details>

**Matt Turck:** 希望不是字面意义上的“杀死你”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, hopefully not uh literally.</p>
</details>

**Nathan Benaich:** 是的。所以我们会经历很多次错误的开端。我认为这仅仅是个开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Um, and uh and so we we're going to go through many false starts. I think this is just the start.</p>
</details>

### AI 商业化：从炒作到现实

**Matt Turck:** 好的，太棒了。所以，在机器人和推理领域，这是个丰收年。我们来谈谈 AI 的商业化。你在报告中提到，AI 的商业终于赶上了炒作的步伐。在过去12个月里，有哪些事实和数据引起了你的注意？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, great. So a big year in uh robotics and reasoning. Let's move on to the business uh of AI. Uh you mentioned in the report that the business of AI finally caught up with the hype. Uh what caught your attention in terms of fact stats uh in the last 12 months?</p>
</details>

**Nathan Benaich:** 有几点。回想一两年前，这个领域投入了大量资金用于构建模型，使用量也很大，但收入来源并不明朗。我记得大概两年前，OpenAI 的收入可能只有5000万美元左右，当时完全看不出他们如何能实现数十亿美元的收入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, a couple of them. Uh again like where we came from one or two years ago was just tons of money going into this segment building models lot of usage but not clear where the revenue would come from. I think it was maybe open was making $50 million or something two years ago. it was very unclear how they would ever hit like billions of revenue.</p>
</details>

而如今，如果你把排名前20左右的主要 AI 公司——从实验室到最受欢迎的垂直应用——的收入加起来，你会发现它们的总收入达到了数百亿美元。你再看看规模较小的公司，它们正从零增长到2000万甚至更高。作为一个群体，它们每个季度的增长速度通常比非 AI 公司快大约60%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and nowadays I think if you sum sort of the top 20 or so uh major AI companies from the labs to the most popular kind of vertical applications, you know, across them they're making tens of billions of dollars of revenue. Um, you can look at the smaller scale companies which you know are growing from zero to 20 million or 20 million plus. uh as a group they generally grow about 60% faster on a quarterly basis than nonAI companies.</p>
</details>

我们都看过那些关于**ARR**（Annual Recurring Revenue: 年度经常性收入）或非 ARR 的著名图表，虽然具体数字不确定，但各种编程公司的增长曲线都非常陡峭。也许最有趣的是，我们与 Ramp 合作，对大约43000名美国客户进行了分析，结果显示，自2022年以来，这些客户对 AI 产品的订阅留存率显著提高。2022年时，12个月后的留存率约为50%，而现在到了2025年，已经达到了约80%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we've all seen like the famous charts about ARR or non ARR it's unclear. Uh but uh you know very steep curves for various coding companies. Um and perhaps most interestingly across a segment of 43,000 or so uh US customers we work with ramp to show that retention of uh subscriptions on AI products across this customer set has really improved marketkedly since 2022. Around 2022 was around the 50% after 12 months. uh and now in 25 it's hitting around 80%.</p>
</details>

该分析中第二个有趣的数据是，每个客户在 AI 产品上的总支出，大约两年前从3.5万美元左右，现在已经增长到约50万美元，并预计明年将达到100万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and the second stat in that analysis that was interesting was the total spend on AI products uh per customer kind of went up from $35,000 or so uh maybe two years ago. Now it's around half a million and it's predicted to hit a million dollars next year.</p>
</details>

**Matt Turck:** 你在 Ramp 的数据中提到，44%的美国企业现在为 AI 工具付费。所以他们不仅付得更多，而且使用 AI 的企业数量也极其庞大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you mentioned in your ramp stats 44% of US businesses now pay for AI tools. So they pay more but there's there's there's a ton of businesses using it.</p>
</details>

**Nathan Benaich:** 是的，完全正确。当然，这里可能存在一些抽样偏差，因为使用 Ramp 的公司本身可能就比较现代化、技术前瞻，但这可以看作是未来趋势的一个领先指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Exactly. And and there might be some sampling bias slightly to you know what kind of companies uh use ramp in the first place. Yeah. So slightly more modern you know tech forward companies but a leading indicator I think of where things could go.</p>
</details>

**Matt Turck:** 然后你还自己做了一项调查，对吧？调查了1200名 AI 从业者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you had your own survey right of 1200 AI practitioners. Yeah. Yeah. And what did that say?</p>
</details>

**Nathan Benaich:** 是的，结果让我很惊讶。当然，调查对象偏向于受过良好教育的美国和欧洲专业人士，其中很多人至少拥有本科学位、硕士学位，甚至更高。但结果显示，大约95%的人在个人生活和职业生活中都使用 AI。大约76%的人自掏腰包为其付费，其中约10%的人每月花费超过200美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah that was I I was surprised. Uh obviously bias is more towards uh you know pretty well educated US European professionals. Um, a lot of people in there have at least undergrad, master's degrees, maybe even more. Um, but it's like 95% of people use AI in their personal life and in their professional life. U, about 76% of people pay out of their own pocket for it. It's like 10% of people pay more than 200 bucks a month for it.</p>
</details>

再看他们所在的组织，大约70%的组织在 AI 上的支出比过去大幅增加。至于他们为什么没有投入更多，或者遇到了什么问题，答案都是些典型的新技术问题，比如配置有点困难，因为需要更多定制化，所以还没完全搞清楚投资回报率（ROI），还有一些数据隐私问题等等。我认为这些问题都是可以解决的，解决它们并非难事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and then looking at the organizations that they work at, it's like 70% of those organizations are spending a ton more or more than they did in the past on AI. the reasons that they gave for what why they might not be spending more or what problems they have. It's like all the classic like new technology stuff like it's a bit hard to configure. It's uh you know I haven't really figured out the ROI yet because I need to do more customization. There's like some data privacy issues that I have and I think all these things are kind of solvable like it's not rocket science how to solve these things.</p>
</details>

**Matt Turck:** 感觉我们正生活在企业“影子 AI”的时代。为了不完美地调和你的两个数据：44% 的企业使用 AI，而 95% 的个人使用 AI。这意味着，正如你所暗示的，有很多人在工作中未经官方授权就使用 AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it feels like we very much live like this. You're in the world of shadow AI uh in companies where I mean to reconcile it's imperfect but reconcile your two stats. 44% of businesses uh use AI yet 95% of of people individually use AI. So there's a bunch of people as as you as you're alluding to that use AI at work without being officially authorized.</p>
</details>

**Nathan Benaich:** 是的，我认为仍然存在巨大的认知差距。几周前流传的一项研究称，95% 的企业没有从 AI 中获得任何价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And I think there's still a big like education gap. I mean there was a a study banded around a couple of weeks ago where you know it said 95% of businesses like get no value from AI.</p>
</details>

**Matt Turck:** 那是个非常有争议的调查。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Very very controversial survey.</p>
</details>

**Nathan Benaich:** 是的，但后来发现问题不在于模型本身不好，而是它们的实施方式不佳。所以我认为，在如何更新对自己日常任务的看法，以及如何应用模型的能力方面，存在着巨大的认知鸿沟。人们需要思考：“我应该自己做这项任务，还是可以把它交给模型？”在这方面，有些公司做得非常好，而另一些则基本上一无所知。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. But I think that there it turned out it was like not the models that were bad. It's like the implementations of them were not great. Uh so I think there's just a big education gap for how how you should like you know update your view of your own uh day-to-day tasks and and apply what capabilities you know models have and then uh and think about like hey should I be doing this task myself or can I farm it out to a model and and there's definitely a delta of companies that really get this done well and others that are like basically clueless.</p>
</details>

### 利润率之辩

**Matt Turck:** 作为一名投资者和行业分析师，你如何看待关于利润率的辩论？也许可以先概括一下这场辩论的内容，然后谈谈你的看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What do you make of the margin debate uh as an investor and intory analyst? Maybe maybe uh recap uh what what that debate is and then what do you think about it at a high level?</p>
</details>

**Nathan Benaich:** 基本上，利润率问题在于，对于许多大型模型公司的客户来说，他们的利润率基本上取决于模型供应商向他们收取的费用。这里存在一些问题，因为目前模型供应商对每个 token 的收费是相同的。所以，如果你是一个对冲基金分析师，而我是一个学生，你的用例在经济价值上显然比我的高，但假设我们使用同一个模型，我们为每个 token 支付的费用是相同的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically the the margin problem is um for many many customers of uh large model companies their margins are basically dictated by how much the model vendor charges them for. Uh now here there's some issues because right now model vendors are charging the same amount per token. So if you're a hedge fund analyst and I'm a student you know your use case is clearly more financially valuable than mine but we pay the same amount for the token assuming we use the same model.</p>
</details>

有些用例需要大量的推理，就像我们之前讨论的那样，它们会消耗大量的 token。而客户为该产品支付的价格可能与 AI 系统所做的工作量不匹配。因此，在某些情况下，这些垂直产品的毛利率可能只有30%，有时甚至会随着规模的扩大而变得更糟，因为你总会有一些边缘用户过度使用系统，而你又无法或没有设法进行价格歧视。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are some use cases that are more reasoning heavy towards what we discussed before and they consume a ton of tokens and the pricing that a customer uh pays for that product might not be fit for the amount of work the AI system is doing. Um and so there are cases where um these kind of vertical products are making margin gross margins of like 30%. And sometimes they get worse with scale uh because you do have some edge users that like really pump the system and you can't like price discriminate or they haven't managed to.</p>
</details>

还有一部分模型用户同时提供付费和免费计划。目前尚不清楚他们是否将运行免费计划的成本计入毛利率。他们可能只看付费客户的数据，这里存在一些创造性的会计标准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you have uh some segment of of um of model users that don't that have a both a paid plan and a free plan. And it's not clear whether they include uh the costs of running the free plan in their gross margin. So they sort of just look at their paid customers. Uh there's you know some creative accounting standards going on there.</p>
</details>

然后是模型供应商本身，他们的利润率是多少。我认为过去一年有趣的是，你看到这些模型公司的 CEO 们说，如果我们用金融分析的术语，像看一个“千层蛋糕”一样，审视每个年代的模型随时间产生的收入，那么旧模型是盈利的。也就是说，我们构建它们所花费的钱，少于它们在一定推理成本利润率下随时间产生的收入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and then you have the model vendors themselves and what is their margin. Uh and I think what's interesting in the last year is you've seen um CEOs of these model companies say hey if we if we basically look at um sort of in in financial analysis terms like a layer cake of like what revenue is generated by each vintage of model over time um it looks like prior models are uh profitable. So the amount of money we've spent to build them is less than the amount of money that we've generated with them over time assuming a certain margin of inference cost.</p>
</details>

所以，这些实验室之所以不盈利，是因为投入到开发下一代系统的资源远远超过了前几代。但正如你我都知道的，这里有些公司在提供 AI 系统服务方面确实获得了非常高的利润率，根据不同的模式，可以达到70%、80%，有时甚至是90%。所以，就像所有事情一样，平均数很糟糕，但当你看到最好的公司时，情况真的很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so so really these these labs are like not not profitable because vastly more resources going into developing next generation systems than than the prior ones. Um but as you and I both know like there are companies here that are making very very good margins on uh serving uh their AI systems like 70 80 sometimes 90% depending on the modality. Um and so like with everything the average number sucks. Um, but like when you look at the best companies, it's really good.</p>
</details>

**Matt Turck:** 为了说得更清楚，那些使用模型的公司，我们部分指的是所有以前被称为“薄层封装”的公司。也就是那些依赖于这些模型的供应商，比如 Cursors、Windsurfs、Reddit，以及所有法律、金融领域的 AI 初创公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just to drive it home, the the the the companies using those models, we're talking about the, you know, in part the the all the what used to be known as thin wrapper. So the vendors that happened to be powered by those models. So uh the the cursors, the wind surfs yeah Reddit like all and and all the whatever legal financial AI um startups as a as as as examples.</p>
</details>

### 我们身处 AI 泡沫之中吗？

**Matt Turck:** 当然，AI 商业领域的另一个大辩论是关于泡沫的问题。你的看法是什么？我们是否处于 AI 泡沫中？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the other big debate uh in the business of AI of course uh is the bubble uh question. What's your what's your take? Are we in an AI bubble? Are we not in an AI bubble?</p>
</details>

**Nathan Benaich:** 是的，我认为就像市场上的大多数事情一样，可能到处都存在局部泡沫。从宏观层面来看，有趣的是关于“氛围”以及谁在喊泡沫，谁没有。纽约的金融圈肯定比我们在旧金山谈论泡沫的次数要多得多。在旧金山，人们的观点是：这是 AI 的黄金时代，很多事情都在奏效，我们还有更多的事情要做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think like with most things in in markets, there are probably localized bubbles all over the place. And I think at a at a high level, what's interesting in terms of vibes and who's calling bubbles and who's not like the finance crowd in New York is definitely talking about bubbles a lot more than what we're talking about in San Francisco where their their view is like this is the golden era of AI and a lot of things are working. We have so much more to to do.</p>
</details>

计算能力的建设使我们能够更快地进行实验。大量曾构建消费互联网和云计算的人才正在涌入 AI 领域，随之带来了许多 AI 研究人员在构建第一代 ChatGPT 等系统时所不具备的优化技术和知识。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you know, compute buildouts are enabling us to experiment a lot faster. uh you know this huge flood of like talent that's built the consumer internet and cloud computing is moving into AI and with that is bringing a lot of optimization techniques and knowledge that AI researchers didn't have when they built the first generations of Chad GBPT etc.</p>
</details>

但你不能忽视这样一个事实：投入这个行业的资金数额确实是巨大的。比如，建造 Stargate 需要5000亿美元，这里几千亿，那里几千亿，很快就变成了实实在在的巨款。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I think you you can't ignore the fact that the the sums of money going into this industry are truly gargantuan. Um you know like 500 billion to build uh Stargate and then uh you know couple hundred billion here, a couple hundred billion there. Like pretty soon it's real money.</p>
</details>

然后，这些交易的循环性也很有趣。当然，Nvidia 处于中心位置，它有动机利用其资产负债表来加速这个轮子的转动。更令人担忧的是，你看到大公司在剥离债务。例如，Meta 筹集了数百亿美元来支持其数据中心建设的雄心，但这笔债务并不在 Meta 的资产负债表上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the um and then like the circularity of these deals is like is interesting. Uh of course Nvidia is at the center of this and it has incentives to use its its balance sheet to sort of spin the wheel faster. Uh and then perhaps more concerningly, you have this sort of offloading of of debt um from big companies. For example, Meta that raises tens of billions of dollars to fuel it data center ambitions, but that doesn't sit on Meta's balance sheet.</p>
</details>

这些操作对金融工程师来说就像猫薄荷一样诱人，但它建立在某些假设之上：即一切都将持续向好，并且利率不会发生重大变化。考虑到经济的各个方面是多么脆弱，以及地缘政治是多么敏感，情况可能会很快发生逆转。我认为这是主要的风险。我不太担心的风险是技术本身行不通，因为我认为它确实是有效的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some of this is like catnip to financial engineers. Um but uh but yeah, it rests on certain assumptions that everything is going to keep going up and to the right and that rates don't materially change. Um, and just given how like uh I suppose precarious various aspects of the economy are and how like sensitive geopolitics are, things can flip like quite quickly. Um, but I think that's like the major risk. The the risk I'm less worried about is the stuff doesn't work because I think it does work.</p>
</details>

**Matt Turck:** 所以，这更像是一个时机问题，即市场的供给阶段能否被同样强大甚至更强大的需求方所满足。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's a more question of uh timing to play it back that the supply uh phase of the market is met by an equally strong or hopefully stronger demand side.</p>
</details>

**Nathan Benaich:** 是的，有这个因素，还有就是债务条款的细微差别，比如哪些是触发事件，利率是否会重新定价。一旦利率变化，投资者的行为会变得非常不同，资金流动可能会非常剧烈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there's that and then just the just the the nuances of the like the terms on the debt and what trigger events are whether rates get repriced and then you know like investors behave very differently once rates change and and um and flows of money can be quite like violent.</p>
</details>

**Matt Turck:** 你提到的华尔街和西海岸之间的二元对立很有趣。因为当你仔细想想，公开市场上其实并没有那么多纯粹的 AI 公司，对吧？很多活动都发生在私募市场。所以，如果你是华尔街或对冲基金的投资者，你投资 Nvidia，投资“科技七巨头”（Mag 7），基本上也就这些了，对吧？Palantir、C3.ai……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's interesting what you're saying about the, you know, the dichotomy between um Wall Street and the the West Coast. Um also because uh when you think about it, there's actually not that many fuel play AI companies in public markets, right? A lot of the action is happening in private markets. So effectively, if you're a Wall Street/hedge fund investor, you you you invest in Nvidia, you invest in the Mag 7. That's pretty much it, right? Palanteer C3 AI</p>
</details>

**Nathan Benaich:** 也许你会因为软银在 OpenAI 的持股而买入软银。是的，基本上很多都是间接投资，或者你投资电力、能源或相关公司，比如 CoreWeave，但规模都非常小。所以感觉也存在这种张力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">maybe you buy soft bank for its position open AI yeah pretty much like a lot of it is indirect or you invest in power and energy or like related players coreweave I guess but it's it's very it's very small so it feels like there that tension as well</p>
</details>

### 物理世界的瓶颈：能源与数据中心

**Matt Turck:** 好的，让我们转向支撑这一切的物理现实。基础设施、数据中心、能源。你在报告中提到，电力已经成为新的瓶颈。你对能源采购领域的现状有何看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's uh switch to the physical reality that this whole uh stack sits on. So infrastructure, data centers, uh energy. You you you mentioned in the deck that uh power uh has become the new bottleneck. What is your sense of the state of play in the energy procurement game?</p>
</details>

**Nathan Benaich:** 对我来说，最重要的数据是：一个用于 AI 的 1 吉瓦数据中心的**资本支出**（Capital Expenditure, 简称 capex）基本上需要500亿美元。而每年的运营成本还需要80到90亿，甚至可能高达110亿美元。所以，当你随口说出一个10吉瓦的数据中心时，那可是一大笔钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The the biggest stat for me is one gigawatt of a data center for AI basically costs $50 billion in capex. Um and uh on an annual running basis it costs between like another 8 to nine 8 to9 to maybe even 11 billion to run. And so uh when you have just you know casually a 10 gawatt data center uh that's like a lot of money.</p>
</details>

问题之一是，这些能源从哪里来？传统上，它可能来自煤炭或天然气，也可能是太阳能，理想情况下未来会是核能。我们现在看到的是，公司们正试图与任何有产能的供应商达成交易。我们在报告中记录了一些与未来核反应堆公司的交易，这些项目可能需要一二十年才能交付。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and um and so one of the problems is like where does this energy come from? Uh you know traditionally it would be from I don't know coal uh or natural gas um potentially solar or ideally at some point in the future nuclear and what we're seeing is it right now companies are trying to do deals with anybody who has any capacity. So we chronicle some deals with uh future uh nuclear uh you know reactor companies then that would take maybe a decade or two decades to deliver.</p>
</details>

**Matt Turck:** 是的，比如谷歌与 CFS 签订了一份**购电协议**（Power Purchase Agreement, 简称 PPA），计划从一个尚未建成的聚变电站购买200兆瓦的电力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you know famously yeah that's Google inking a PPA deal. Uh with CFS to buy 200 megawatt of electricity from a planned fusion plants. So the the the plan does not exist.</p>
</details>

**Nathan Benaich:** 它还不存在，是的。去年我们还记录了三里岛核设施的重启，这在过去是备受争议的。在短期内，许多 GPU 数据中心都是由燃气轮机供电的，因为它们可以更快地建立起来。但这又带来了其他问题，比如它们噪音极大。而且美国以外对这些设备也有需求，所以现在美国科技公司基本上要花更多的钱来“收回”本应运往国外的部分供应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It does not exist. Yeah. And then last year we documented the sort of uh restarting of uh 3M island. Um the nuclear facility which was controversial in the past. Um and um and then uh in the short term what many uh GPU uh data centers are getting powered on is is just uh gas turbines and because these can get set up a lot faster but that has other issues like they're super loud um and there's demand outside of the US for these things and so now basically US tech companies are paying more to repatriate like uh some of the supply that should have been shipped abroad.</p>
</details>

另一个问题是电网，以及电网能在多大程度上承受数据中心的接入。显然，这些燃气轮机是离网的，所以有一些优势。但在中国，我们做了一些关于中美能源的分析，中国的电力系统有更多的冗余，可以接入任何不可预测的能源需求。而英国则出了名地无法在其电网上容纳更多的数据中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the the other issue is the the grid and like to what degree the the grid can even tolerate data centers getting plugged into it. Now obviously like these turbines are off-grid. Uh so it has some advantages but uh in China for example we do some analysis between like eur between uh the US and China with regards to energy and China has a lot more like slack in its system to plug in um for any unpredicted uh demands in energy. Uh the UK famously cannot really tolerate more data centers on its grid.</p>
</sdetails>

所有这些因素共同推动了数据中心向能源丰富的国家“离岸”迁移，无论是阿联酋，甚至是挪威。随之而来的是大量的地缘政治问题：这些国家是你的朋友还是潜在的敌人？你如何确保无论政府更迭，都能持续获得能源？我们发展到今天这个地步真是太疯狂了——我们只是想要一个能在电脑上运行的 AI，但为了实现这一点，你需要如此多更强大的系统协同工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">wrapping all this together is driving um some of the like offshoring of data centers towards uh energy-rich countries whether that's the UAE uh or even uh Norway and uh and then with that comes a lot of like geo geopolitics of uh are these nations your friend or or potentially not and how do you ensure uh access to this regardless of your administration change and other things. So it it yeah it's it's wild that we've come to the point where you know we just want like an AI that works on our computer but like to get that you need to have so many more powerful systems uh collaborate with you.</p>
</details>

**Matt Turck:** 是的，你说话的时候我正在找那张幻灯片，特别是关于美国和中国的对比，我们谈论的是巨大的差异。如果我没读错的话，2024年美国新增的发电容量是48.6吉瓦，而中国是429吉瓦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah and I was just looking for the slide as as as you spoke uh especially for United States versus China we're talking about the dramatic difference where uh the capacity added in 2024 for the US if I read this correctly was 48.6 6 GW whereas China was 429 gaw</p>
</details>

**Nathan Benaich:** 另一个有趣的事情是，在美国，或者实际上在国际上，那些适合托管数据中心的州，因为能源充足，通常都极其干燥。我们在报告中也记录了冷却这些数据中心所需的水量。所以，如果你的州非常干燥，水从哪里来？这是否会影响到需要用水的人口？然后你还有整个水循环利用的问题，这可能会导致质量差的水被循环到供水系统中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the other thing that's interesting is um the at least the states in the US uh or actually also internationally that um that are good for hosting data centers because there's energy typically are extremely dry and uh and we also chronicle the water usage that's needed for cooling of these data centers and so if your state is super dry where do you get the water from uh is that actually going to detract away from human populations that need the water? Then you have this whole like recycling of water which could potentially like yield just like bad quality water getting circulated into the water system.</p>
</details>

**Matt Turck:** 所以这一切的可持续性方面似乎极其重要，但讨论得却不够。至少这是我的看法。这个看法对吗？人们真的关心并为可持续性方面做些什么吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the sustainability aspect to all of this seems uh extraordinarily important yet uh under discussed at least that's the my my perspective. Is is that is that correct? Do do people actually care and do something about the sustainability aspect of this?</p>
</details>

**Nathan Benaich:** 嗯，一两年前，大公司确实承诺到2030年实现绿色环保。但一旦他们开始与核能公司和各种能源供应商签订数据中心协议，所有这些承诺基本上都被抛诸脑后了。所以，看起来他们可能在乎，但实现 AI 的企业优先事项远远超过了环境限制。这就是已经发生的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, a year or two ago, big companies did make commitments to be green as of you know, 2030. And then as soon as they started inking deals with uh you know, nuclear companies and uh and and various energy providers for data centers, all those commitments basically got like washed away. Um so it seems like maybe they care, but the corporate priorities of making AI work have way outweighed the environmental constraints. That's what's happened.</p>
</details>

但我认为，回到政治层面，并非所有人都对此感到满意。特别是“邻避主义”（NIMBYism, Not In My Backyard）的增长，即“不要建在我家后院”。我确实认为人们普遍不希望自家后院有个数据中心。我认为这将推动未来的一些政治议程，无论是在美国还是其他国家。所以，是的，人们确实关心环保。公司们某种程度上忽略了这一点，但我认为这个问题会回来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I think again going back to like the politics side of things, I don't think everybody's very happy about this. Particularly there's this like growth of nimiism, this like not in my backyard. Uh and uh and and I do think that uh people generally don't want to have a data center in their backyard. Uh and I think that's going to drive some of the political agendas like going forward whether it's in the US or or other countries. So yes, people do care about environmentalism. companies have sort of washed that away but it's going to I think it's going to come back.</p>
</details>

### 芯片霸主 Nvidia 与多极化未来

**Matt Turck:** 如果我们谈论基础设施，显然我们必须谈论 Nvidia。感觉过去12个月对 Nvidia 来说又是一个非凡的时期。你认为 Nvidia 会继续作为市场上无可争议的头号玩家遥遥领先，还是我们迟早会进入一个多芯片并存的世界？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we talk about infrastructure uh obviously we have to talk about Nvidia feels like it's been uh another extraordinary uh last 12 months for uh Nvidia. do you uh see Nvidia continue to break away as like the undisputed number one in the market or or do you think that sooner or later we're going to end up with a multi-ilicon kind of world?</p>
</details>

**Nathan Benaich:** 我想会是95%对5%的局面。是的，完全正确。 contextualize 一下，去年我们做执行摘要时，我们写 Nvidia 首次突破1万亿美元市值，现在我们不得不把它改成4万亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's gonna be 955 to 95%. Um, revisited. Yeah, exactly. Yeah. Um, yeah. So, you know, for context, when we did the executive summary last year, we put Nvidia, you know, hit 1 trillion for the first time and now we had to change that to 4 trillion.</p>
</details>

我们每年都会分析所有开源 AI 研究论文，大约有49000篇左右。然后，我们通过程序化方式确定这些论文中使用了哪些芯片组。这样我们就知道，一个 AI 研究员在研究某个新模型时，在他们的实验设置中会说“我们在某某芯片上训练了模型 X 个 GPU 小时”。如果你做这个分析，你基本上会发现90%的论文都使用了 Nvidia 的芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We look at uh all the open source AI research papers every year, which is about 49,000 or so. And then, uh, programmatically determine which chipsets are used in those papers. So we know like hey an AI researcher is doing a study on uh I don't know some new model and in their in their experimental setup they say you know we train the model for x number of GPU hours on uh whatever chip and uh if you do that analysis you basically find that 90% of uh all papers make use of a Nvidia chip.</p>
</details>

在同样的分析中，我们确实发现 AMD 的身影开始出现，虽然还很少。Apple Silicon 也是如此，我想这只是因为 MacBook 电脑变得越来越好，人们开始在本地电脑上进行训练和实验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">out of that same analysis we did find that AMD is sort of popping up a very little bit um Apple silicon is as well I think it's just because the computer the MacBook is getting so good that people are doing local training uh and experiments on their computer</p>
</details>

**Matt Turck:** Broadcom 也在某种程度上复活了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and Broadcom is experiencing a a resurrection of some sort as well, right?</p>
</details>

**Nathan Benaich:** 是的，完全正确。大约十年前，他们收购了一家公司，现在这个内部团队正在为谷歌的 **TPU**（Tensor Processing Unit: 张量处理单元）制造定制的 **ASIC**（Application-Specific Integrated Circuits: 专用集成电路）。最近，他们也宣布与 OpenAI 达成协议，为其制造定制芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Exactly. Yeah, it has. Uh I think it's maybe a decade ago they bought a company that now is kind of the internal team doing this custom AS6 for uh Google's TPU and uh you know more recently they announced a deal with OpenAI also to do uh a custom chip.</p>
</details>

从宏观上看，Broadcom 的崛起很有趣，它表明，当你在硬件上运行的神经网络或其他 AI 系统的性质仍在快速变化时，GPU 长期以来一直是主导芯片组。但一旦你达到一个临界点，即某个架构趋于稳定、能够产生收入、并且开发者开始围绕它工作并确认它的地位时，你就可以转向制造定制芯片，以从该架构中榨取最大价值。所以，Broadcom 的崛起基本上告诉你，有强大的力量在说：Transformer 就是未来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And a high level what's interesting with the rise of Broadcom is basically GPUs have been the the dominant chipset for a long time as the uh kind of nature of the neural network or other kind of AI system that you're running on the hardware was still changing very rapidly but as soon as you get to a point where there's some convergence on an architecture that's looks like it's stable and is revenue generating and developers are coming to uh sort of work on it and confirm that it is like the then you can flip towards doing a custom chip that's built to extract the most value out of that architecture. And so the rise of Broadcom basically tells you like there's strong forces that are saying like the transformer is the thing.</p>
</details>

但归根结底，我们也在看，如果你想投资芯片公司，你的钱怎么花才最划算。在报告的图表中，我们比较了 Nvidia 的六个主要竞争者，基本上是说，如果你在这些公司宣布私募融资的那天购买 Nvidia 的股票，你的 Nvidia 股票价值会是多少，而投资这些公司的价值又是多少？如果我没记错的话，结果基本上是 Nvidia 带来了12倍的回报，而这些竞争对手是2倍。这个趋势和去年大致相同。所以我认为，与 Nvidia 对赌是一件有点困难的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But at the end of the day like we also look at how would your dollar be best used as an investor if you wanted to bet on chip companies. And uh and in the graph in in the report, we look at sort of six of the major contenders uh to Nvidia and basically said, you know, if you bought Nvidia stock on the day of uh the announcement of all the like private uh rounds in these companies, what would the value of your stock be in Nvidia versus these companies? And uh if I recall correctly, it's basically 12x in Nvidia versus 2x in um in these competitors. And the trend was roughly the same last year. Uh so I think I think it's a little bit of a diff difficult beast to to bet against.</p>
</details>

### 主权 AI 与开源的博弈

**Matt Turck:** 让我们深入探讨一下你几分钟前提到的一个话题——主权 AI。你看到了哪些动向？这似乎是今年的一个大主题。你提到了 OpenAI 在挪威、印度和阿联酋的动作。那个世界正在发生什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To to double click on on on uh something that you mentioned a few minutes ago. Um talk about uh sovereign AI uh and uh what you've seen people do. It seems to have been a big theme of the year. You mentioned open AI in uh Norway, India and and UAE. What's happening in that world? Yeah. That part of the world.</p>
</details>

**Nathan Benaich:** 是的。主权 AI 的理念是，民族国家希望能够掌控自己在 AI 方面的命运。这包括运行模型、训练模型、拥有芯片。这基本上是因为民族国家希望控制自己的能源、货币、基础设施，而 AI 被认为与这些类别同等重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. So the idea with sovereign AI is that nation states want to be uh at like able to control basically their fate with regards to AI. So that's uh running models as training models um having chips uh and um this is basically because you know nation states want to have control over their energy control over their currency, control over their infrastructure and AI is deemed to be uh kind of equivalent to those categories.</p>
</details>

自从白宫在一月份宣布了5000亿美元的计划以来，各个国家纷纷效仿，宣布了自己数十亿美元的倡议。Nvidia 甚至开始将此作为其业务的一个新产品线进行营销，目前该业务已产生约200亿美元的价值。所以这是真金白银。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so ever since the White House announcement of 500 billion in January uh various nation states have followed suit saying you know we have our own initiative and it's to the tune of billions of dollars uh etc around the world and Nvidia has even started marketing this as like a like a a new kind of product line basically for its business that currently generates I think around $20 billion worth. Um so it's it's real money.</p>
</details>

他们正在与各个国家建立合作伙伴关系，在当地提供数据中心。理论上，这应该能让各国放心，他们对 AI 的访问不会被切断。这就是其理念。我个人认为，这更多的是一种政治议程的契合。特别是在美国，这实际上关乎再工业化，即关键产业的回流和制造业的建设，我认为这也是为什么这些 AI 数据中心被重新命名为“AI 工厂”的原因之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so they're forming partnerships with various nation states uh to provide data centers there that are run locally. Um and uh and in theory that should give like countries comfort that uh their access to AI can't be turned off. That's the idea. I personally think it's a bit more of a of an alignment between political agendas where particularly in the US it's really about re-industrialization like onoring of key industries and building you know manufacturing and things like that which is I think one of the reasons why these AI data centers are getting rebranded as AI factories.</p>
</sdetails>

这就是政治部分，它与各国获取这项技术的需求相结合。所以我认为这更多是市场营销，而不是真正的政策。因为归根结底，如果你从美国购买你的技术栈，而你又不是美国的盟友，那么在某个时候他们就会把它关掉。所以，这部分我认为是“主权洗白”（sovereignty washing）。它也过度简化了 AI 领域高度互联的生态系统性质，这不仅仅是芯片的问题，还关乎开发者生态系统、你如何实际运行它、你的训练数据来自哪里，以及围绕这一切的所有基础设施，如数据工具等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so that's the the political part um and that's getting aligned with um uh just the need of countries to get access to this technology so I think it's more marketing than it is like a real policy because at the end of the day if you buy your stack from uh from from the US and you're not an ally of the US at some point then they'll just switch it off. Um, and so part of this is like sovereignty washing I think and it also like oversimplifies the very interconnected nature and ecosystem aspect of of AI where not just about the chip it's about uh the developer ecosystem um how you actually run it where your training data comes from um and uh and all the like infrastructure like data tools and and whatnot that that sit around this</p>
</details>

**Matt Turck:** 不过，这正是开源发挥重要作用的地方，对吧？如果你从 OpenAI 获取 AI，而且你确实是美国的盟友，但由于某种原因你不再是了，那么你就有被切断的风险。但如果你有主权数据中心，里面运行着一堆芯片，然后你在上面运行开源模型，那么想必你是安全的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">although uh that's where open source plays an important role right if get your AI from OpenAI and indeed uh you are a USLI but you no longer are USLI for whatever reason there's a risk that you could be turned off but if you have sovereign data center and with a bunch of like chips running and then you run open source on top of it like presumably you are safe</p>
</details>

**Nathan Benaich:** 这就很有趣了，因为现在最流行的开源模型来自哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which is then uh interesting because where is the most popular open source coming from now?</p>
</details>

**Matt Turck:** 是的，中国。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, China. China.</p>
</details>

**Nathan Benaich:** 不过有趣的是，我认为在你发布报告之后，Reflection AI 宣布了一笔非常大的投资，这是一家总部位于纽约和旧金山的公司，刚刚筹集了20亿美元，用于在 Llama 和 Meta 走向不同方向的世界里，打造美国版的中国模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">although interestingly I think since you uh published the report there's been the announcement of a very large investment in reflection AI which is a New York and San Francisco based uh company that just raised 2 billion uh to build uh the US equivalent of the Chinese models in in a world where Llama and Meta have sort of um gone in a different direction.</p>
</details>

**Nathan Benaich:** 是的，这非常引人入胜。因为在美国政府几个月前发布的 AI 行动计划中，明确阐述了建立美国 AI 技术栈的必要性。所以他们正在从扩散控制转向更倾向于“购买我们的产品”。该行动计划的另一个方面是围绕开源，并朝着这个方向引领。当然，正如你所说，Meta 退后了一步，而 Qwen 则进入了这个领域。我认为现在从 HuggingFace 或 Coinbase 下载的所有模型衍生品中，有50%是 Qwen，下载量达数亿次，部分原因是它们的形式和风格非常易于获取。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. Yep. I think this is this fascinating um because part of the AI action plan uh that was published by the US government a couple of months ago now um you know articulated the need for having this American AI stack. So they're moving away from like diffusion controls and more towards just buy our stuff. And then one of the other aspects of that action plan was around open source and like and and sort of leading in that direction. And of course as you said like meta stepped back and into the fold came Quen. um I think 50% of all model derivatives um being downloaded from HuggingFace or Coinbase now um hundreds of millions of downloads partially because they're very they come in very accessible shapes and flavors.</p>
</details>

因此，我们在报告中预测，一个主要的 AI 实验室会重新拥抱开源，以赢得政府的好感。然后第二天，这笔融资就发生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as a result of that we sort of predicted in the report that uh uh that a major you know AI lab would lean back into open source to win um basically brownie points with the government and then the next day this financing happened.</p>
</details>

### AI 经济的集中与循环

**Matt Turck:** 既然我们谈到了循环性，也谈谈集中化吧。这或许呼应了我们几分钟前关于泡沫的讨论。感觉这个 AI 经济中有很多……取决于你怎么看，从古怪到可怕的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh since we're talking about circularity, uh talk about concentration as well. So maybe as an echo to the conversation about the bubble a few minutes ago, it does feel like this um AI economy has a lot of um depending on how you look at it from funky to scary things.</p>
</details>

**Nathan Benaich:** 是的。Nvidia 的大部分收入来自主要的超大规模云服务商或新兴云服务商。比如 Meta、xAI、谷歌、亚马逊，然后是 CoreWeave。而 CoreWeave 的大部分收入又反过来来自微软。我认为这正是 AI 进步面临的挑战，我们已经从 GPT-3 时代显著地转变为现在这样——基本上，规模限制了你的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Well, a lot of Nvidia's revenue comes from uh the major uh you know hyperscalers or or um or neoclouds. So you know it's like Meta like XAI, Google, Amazon um then Cororee and then a lot of Cororee's revenue also comes from Microsoft on the way back. I think it's just this challenge with with AI progress that we've uh you know very meaningfully shift from shifted from I think the GPT3 era to now of basically scale like rate limits your progress.</p>
</details>

现在不再是几个在宿舍里的人就能真正创造出变革性东西的时代了，如果他们想推动 AI 能力的进步。现在真的是“大玩家”的天下。随之而来的是不同的动态：你必须擅长融资，必须与民族国家结盟，必须与华尔街结盟。我认为所有这些都促成了你在 AI 实验室文化中看到的巨大氛围转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and uh it's no longer like a couple of people in a dorm room that can really build something uh transformational if they want to advance like AI capabilities. It's really um it's really big boy land now. Um and so w with that comes just different dynamics like you have to be good at capital raising. You have to align yourself with uh with nation states. You have to align yourself with Wall Street. Uh these are all I think contributing to the big vibe shifts that you've seen in in the culture of AI labs.</p>
</details>

**Matt Turck:** 你这话是什么意思？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What what do you mean by that?</p>
</details>

**Nathan Benaich:** 嗯，比如说，有些实验室，像 Anthropic，建立的初衷就是为了真正推动安全议程。因为当时的想法是，如果我们不这样做，我们可能会导致人类的灭绝。但最近，Dario 在接受 Mark Benioff 采访时，被问及一些数据中心建设的问题，他说了类似这样的话：“是的，这里面投入了大量的资金，成本很高，但归根结底，唯一重要的是收入。” 我想他在 Anthropic 成立那天是不会说这种话的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well you know for example there there were some labs like Anthropic that were built you know to to really push the safety agenda. Um because you know if we didn't do that the rational went that you know we could lead to the extermination of humanity right um and I think quite recently like Dario was interviewed by uh Mark Ben off uh just this past week and asked about like some of these data center buildouts and uh and you know he said something along the lines of yeah there's a lot of money going into this a lot of cost but at the end of the day the only thing that matters is revenue like I don't think he would have said that you know on the founding day of anthropic.</p>
</details>

现实就是，这个游戏的赌注已经改变了。随之而来，企业家们必须更新他们的先验认知，并稍微改变他们的策略。我们在报告的“花絮”部分记录了其中一些情况，即由于该行业的极端金融化，我们注意到 AI 实验室的企业优先事项发生了多大的钟摆式摇摆。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you know it's it's just the reality that that the table stakes in this game have changed and with that you know entrepreneurs have to update their priors and um and you know change their strategy a little bit. And so we document some of this in like sort of the blooper section of the report uh which is uh which is just like how how much of a sort of pendulum um swinging we've we've noticed in um in corporate priorities at AI labs um as a result of the extreme financialization of the sector.</p>
</details>

### 监管、安全与知识产权的退潮

**Matt Turck:** 你刚才提到了安全。我很想就这个主题展开谈谈。知识产权、安全、监管……这有点像我们之前讨论的可持续性问题。感觉整个世界在这方面的进展都放缓了。也许从监管开始。你认为监管是否接近于跟上步伐，或者对正在发生的事情做出了充分的回应？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You mentioned safety a minute ago. I'd love to, uh, riff on that theme a little bit. Uh, IP rights, safety, regulatory, uh, a little bit like the sustainability thing that we were discussing earlier. It sort of feels like that that whole world uh has um sort of slowed down in terms of like progress maybe starting with regulatory. Do do you think that regulatory is anywhere near catching up or providing an adequate response to what's going on?</p>
</details>

**Nathan Benaich:** 是的，我认为在这方面有一个180度的大转弯。很明显，特朗普政府废除了许多拜登时代的政策，无论是在扩散问题上，还是试图推动大量州级立法来反对 AI。在欧洲，《欧盟人工智能法案》的实施也出现了延误，只有三个成员国真正实施了它。现在我们终于看到，就连它的起草者也在说，也许我们走得太远了，特别是当我们看到美国和中国与欧洲相比的进步速度时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I'd say like a big 180 on that one. I mean clearly the Trump administration unwound a lot of the Biden era policies uh whether that was on uh diffusion you know trying to push a lot of state level legislation against AI the uh over in Europe like the EU AI act has had um delays in implementation there's only three member states that have actually implemented it and now we're finally seeing how even its authors are saying maybe we went too far particularly as we look at progress uh the speed of progress in the US in China compared to Europe.</p>
</details>

加州那项著名的限制 AI 进步的法案，最终被大大削弱，变成了 SB53 法案。曾经有许多提案，我想超过一千个，但只有10%最终成为了法律。所以情况仍然是零散的，但从宏观层面看，我们似乎是用监管换取了更快的速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you know, famously this bill in California, um, you know, rate limiting AI progress was really watered down into what eventually became SB53. Um, there were, you know, many, many proposed bills. I think over a thousand, 10% of them actually made their way into laws. Um, so it's still kind of patchworky, but like at a meta level looks like we traded regulation for just going faster.</p>
</details>

这或许最好地体现在英国 AI 安全峰会和巴黎 AI 行动峰会之间的转变上。在布莱切利举行的安全峰会承诺建立一个由 AI 安全研究所和会议组成的网络，而随后的巴黎活动则被称为“AI 行动峰会”，与“AI 安全峰会”完全不同。JD Vance 说了一些话，大意是如果我们继续为 AI 安全问题绞尽脑汁，AI 就不会有进展。美国基本上没有出席随后的几次会议，我们在报告的“安全安息吧”部分记录了这一点，似乎很少有人再关心它了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was perhaps like best encompassed by uh by the shift between the AI safety summit in the UK which was at Bletchley which basically pledged like a whole network of uh AI safety institutes and conferences that would happen over the the coming years. um to then the subsequent event in Paris which was called the AI action summit completely different than AI safety summit and JD Vance saying something along the lines of basically like AI progress is not going to happen if we keep hang ringing over AI safety and the US basically didn't show up to a few of the subsequent conferences and we have this in the like safety RIP section of like very few people seem to care about it anymore</p>
</details>

**Matt Turck:** 谈到氛围的转变，即使是生态系统中更悲观的部分也已经安静下来了，对吧？感觉辩论已经从“AI 会杀死我们所有人”转变为更像是“嗯，**LLM**（Large Language Models: 大型语言模型）还是 **RL**（Reinforcement Learning: 强化学习）是通往 **AGI**（Artificial General Intelligence: 通用人工智能）的更好途径”。所以，反对者们已经改变了他们的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and to the to the vibe shift like even the more uh dumerist parts of the ecos system have uh kind of quieted it down, right? It feels like the debate has gone from kill all all of us to more like well is LM LM RL the the better way to get to AGI kind of so the the the nessayers have like shifted their their kind of like approach.</p>
</details>

**Nathan Benaich:** 是的。我认为它变得不再是关于生存危机，而是更多地关于模型中哪些能力看起来令人担忧。我们报告中记录了一些有趣的数据点。例如，模型越来越能意识到自己处于模拟或评估中，并因此改变自己的行为。有模型试图泄露自己权重的例子。我们展示的另一项工作是关于模型的网络安全能力，基本上是测量人类解决各类网络任务需要多长时间，然后让模型面对同样的任务，看它们需要多长时间才能达到50%的通过率。结果显示，模型在网络任务上的能力每6个月翻一番。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. And I think it's become Yeah. less about this existential crisis and more about which capabilities look concerning in models. And you know, there's been some kind of interesting uh data points that we chronicle in the report. Like for example, uh models can increasingly know that they're in a simulation or or know that they're in an evaluation and then change their behavior as a result of that. There's examples of uh models trying to like exfiltrate their own weights. There's another uh piece of work that we show which is around the cyber security capabilities of models which is basically measuring how long does a human take to solve various categories of cyber tasks and then putting models at the against the same tasks and saying you know how long would it take for them to solve it at a 50% pass rate and there it looks like again the capabilities on cyber tasks of models are doubling every 6 months.</p>
</details>

而与之相对的是，独立的安全性组织可能只有五六个。这些通常是仍然保持非营利性质的非营利组织或私营公司。它们平均每年总共花费1.34亿美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then so this is cast against the fact that independent safety organizations There's maybe like five or six. These are usually nonprofits uh that are still nonprofits uh or private companies. They spend on average 134 million a year in total.</p>
</details>

**Matt Turck:** 这是它们所有组织的总预算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Total budget across all of them.</p>
</details>

**Nathan Benaich:** 是的，所有组织加起来。而各大 AI 实验室在所有 AI 工作上的总花费大约是920亿美元。所以基本上，一个大实验室一天花的钱，就相当于这些安全组织一整年花的钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Across all of them. Exactly. And that's cast against roughly like 92 billion uh across all AI work for the major labs. So basically like the same amount of money uh that a big lab would spend in one day is spent in an entire year across these safety orgs. 130 million aka a seed round in in a week old AI startup.</p>
</details>

### AI 智能体：现状与未来

**Matt Turck:** 如果没有谈论智能体（agents），那就不能算是一次关于2025年 AI 的对话。你对现实和现状有何看法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it cannot be a 2025 conversation on AI without talking about agents. What is your sense of the reality and the state of play?</p>
</details>

**Nathan Benaich:** 有一些垂直产品确实非常出色。显然，搜索功能实际上相当不错。它正在取代咨询、市场研究，或者说增强了所有这些以前需要大量人类知识工作的领域，并且做得越来越好。我认为编码智能体显然也越来越出色。还有其他一些衡量标准，比如它们能自主工作多长时间。我想随着新的 Haiku 模型的发布，这个时间是30小时左右，它能制作出一个相当不错的 Slack 版本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's some vertical products that are really good. Clearly, search um is actually pretty good. you know, replacing consulting, uh, replacing market research or augmenting all these uh these areas that were previously, you know, very heavy human uh, you know, knowledge working tasks is getting extremely good. I think uh, coding agents clearly are are getting really good. There's other metrics around like how long they can work autonomously. I think with the new Haiku release, it's 30 hours or something and it can make a pretty decent version of Slack.</p>
</details>

**Matt Turck:** 是的，虽然这个数字有争议，但在实验室测试中高达30小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. Although a controversial uh number, but uh, yes, up to 30 in lab testing. Okay.</p>
</details>

**Nathan Benaich:** 是的，而且我们讨论过的一些科学推理也是基于智能体的，我认为那也相当巧妙。我认为最大的问题在于这种复合误差：一个智能体可能有95%的准确率，然后95%乘以95%再乘以等等，经过长时间的累积，质量就会下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, exactly. What what is what does even hours mean in an agent of like a computer running it? Like is that equivalent? Yeah. And then uh and then some of the scientific reasoning we talked about uh is agent based. I think that's also quite neat. I think the the biggest problems just become like this kind of compounding error of you know an agent is like 95% like good and then 95% times 95% times etc etc sort of decays quality over a long period of time.</p>
</details>

现在有一些争论，关于你是应该构建这些“束带”（harnesses）——也就是程序员们说的“胶带”——来连接模型，让它们在企业环境中工作，还是应该等到下一代模型开箱即用时变得更好。我认为这里有巨大的兴奋点，在某个时刻，就像桌面软件变成了 SaaS 一样，SaaS 最终也会变成一个智能体，因为不再是人类在软件产品中实际操作一切，而是由一个软件来运行软件产品本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then there's some contention now about like do you build these harnesses i.e. like nerd speak for sticky tape um between uh between like models to like make it work in enterprise or do you just wait until the next model generation hopefully becomes better out of the box? I think a ton of excitement and at some point basically just as desktop software became SAS at some point SAS will just become an agent because it's no longer really like a human that's that's actually doing everything in the software product but uh a software that's running the software product itself</p>
</details>

### 作为投资者的视角

**Matt Turck:** 那么，作为一名风险投资人，这一切让你处于什么位置？我们一直在讨论《AI现状报告》，这是你每年投入心血的内容创作，我认为行业里的每个人都非常感激，因为信息太多了，能把所有东西整合在一份文件里非常有帮助。但你的首要身份是一名风投，穿着 Air Street 的T恤。那么，你对什么感到兴奋？你提到了很多深科技、机器人技术。你投资这些领域吗？你认为未来创始人和热爱他们的风投可以在哪里创造价值？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where does it all leave you as a as a VC? We have been talking about the state of AI report uh which is uh your annual labor of love and content and you know which uh I think everybody in the industry very much appreciates because there's so much going on. So tying everything together in one document is uh incredibly helpful. But you first and foremost a VC wearing an Air Street t-shirt as people can see if they're watching the video. But otherwise, trust me if you're listening to this on Spotify. Very very nice logo. Kind of retro a little bit. Kind of kind of So what what are you um excited about? So you mentioned like a bunch of like deep tech robotics. Is that is that what what you invest in? Uh where do you think value can be built for founders and and the VCs who love them going forward?</p>
</details>

**Nathan Benaich:** 是的。我关心的宏观问题是，如何构建和利用 AI 来创造新型的产品体验和新型公司。对我来说，这最好地体现在那些“AI 优先”的公司上。这既指他们构建的产品——如果你把 AI 抽掉，产品就无法工作——也指他们对待公司理念的方式、他们雇佣的人才类型以及他们分配资源的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. The meta thing I care about is uh is how do you build and make use of AI to create like new kinds of product experiences, new kinds of companies. And for me that's like best expressed by companies that are AI first. So that's like both in terms of the product that they build. If you rip out the AI, the thing doesn't work. but also in like how they approach their like company philosophy, the types of people they hire, where they allocate resources.</p>
</details>

我一直试图追随那些越来越适合从 AI 中获取价值的行业领域。传统上，这意味着他们关心的一项任务有大量数据，但没有足够的人来完成这项任务，而如果这项任务被自动化或日益自动化，就会有明确的投资回报率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I've generally just tried to follow areas of industry that are uh increasingly ripe for getting value out of AI. So traditionally that would be, you know, lots of data for a task that they care about, not enough people to do that task, but where there's a clear ROI uh if that task gets automated or increasingly automated.</p>
</details>

这让我在大约10年前首先进行了金融科技类的投资。之后，生物学领域真正迎来了发展，进入了一个叫做“技术生物”（tech bio）的新浪潮。所以我在那里做了一些投资，比如我们卖给 Recursion 的 Balance Discovery，还有卖给 Xentia 的公司。最近还有 Proffluent，它在蛋白质设计的语言模型方面处于领先地位，开发了第一个由 AI 创造的 CRISPR 基因编辑器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and so that led me you know 10 years ago or so to first do like fintech style investments and then after that you know biology really came online uh into this new wave called tech bio. So I made some investments there like balance discovery that we sold to recursion and also we sold to Xentia uh and then more recently Proffluent which is uh kind of leading the charge for these language models in protein design developing the first like uh crisper genome editor that an AI has created.</p>
</details>

然后，另一个在美国真正兴起的领域是国防，最近在欧洲也是如此，尤其是在二月份的慕尼黑安全会议之后，它打破了欧洲国家对美国安全保障的许多幻想，这导致了“天啊，我们需要自己保卫自己，因为没人会来救我们”的意识大爆发。所以我在那里也有一些投资，比如在英国和希腊的 Delhi 和 Alliance Industries。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then like another segment uh that really came online in the US was in defense uh and more recently in Europe uh after the Munich security conference in February kind of unwounded a lot of assurances that European states had for US security guarantees and that like led to a big influx of holy we need to defend ourselves cuz no one's coming to save us. uh and so I have some investments there like Delhi and Alliance Industries in the UK and Greece</p>
</details>

还有机器人领域，正如我们讨论过的，我在斯图加特有一个叫做 Seract 的团队，他们正在为机器人操作开发通用 AI 模型，并逐渐扩展到其他形态。然后我一直对语音技术很着迷。我想我们上次我来这里的时候就谈过语音。我仍然对它的魔力感到惊讶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then in robotics as we discussed so a team in uh stood girl called Seract which is developing kind of these general purpose uh AI models for uh robotic manipulation and increasingly going to other form factors and then I've been obsessed with voice. I think we talked actually about voice the last time I I was here and I'm still just like amazed at how</p>
</details>

### 对未来的预测

**Matt Turck:** 好的，太棒了。那么，为了结束这次对话，我们当然要谈谈你的预测。每次你做《AI现状报告》时，你都会大胆地为未来12个月做出预测。那么，我们不一一列举所有10个预测，大家可以在第304页找到它们。请挑选你最有感触的三个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Fantastic. All right. So to uh close the conversation um of course we have to go into your predictions. So uh each time uh you do the state of AI report you boldly uh come up with a prediction for the next 12 months. So without going uh in into all 10 uh and people can check them out mostly on slide 304. Pick like you know maybe three that you're passionate about.</p>
</details>

**Nathan Benaich:** 好的。我认为其中一个是，由于能源、水、资金和地缘政治的原因，AI 计算和数据中心的建设会变得多么具有政治色彩。我认为这个问题对于选民来说已经大到无法忽视。所以我们预测，这种“邻避主义”将在2026年的主要政治竞选中占据优先地位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well I think um one is just how politically charged a lot of the kind of AI compute data center buildout actually becomes because of energy because of water because of money because of geopolitics. And I think that that's becoming too large of an issue for voters to ignore. Um and so we predict that this kind of nimism not not in your backyard will kind of take precedence in uh in major political campaigns in 2026.</p>
</details>

另一个我认为有趣的预测是，一个完全由 AI 端到端设计或开发的科学发现。老实说，我本想预测诺贝尔奖，但12个月的窗口期有点太短了。我认为 AlphaFold 获得的诺贝尔奖可能是历史上最快的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean the the other one that I think is uh is interesting is like a fully endto-end uh designed or developed uh scientific discovery. I would honestly predict Nobel Prize, but the the 12-month window is a little bit too short. I think the the alpha fold Nobel Prize is probably the fastest in history.</p>
</details>

**Matt Turck:** 一个由 AI 赢得的诺贝尔奖。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh a Nobel Prize won by an AI.</p>
</details>

**Nathan Benaich:** 是的。去年我们预测了朝着这个方向迈出的一步，即一篇完全由 AI 撰写的研究论文将在一个主要会议或研讨会上被接受，而这实际上发生了，就是那篇名为《AI Scientist V2》的论文。所以我认为我们正在接近这个目标，因为这正是那些技术专家真正想做的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. uh last year I mean we predicted maybe like a step towards this which was a fully AI written research paper would be accepted at a major conference or workshop and that actually happened with this uh paper AI scientist V2 I think so I think we're we're getting there because this is what the nerds are really wanting to work on.</p>
</details>

还有一个，虽然有点像作弊，但就是关于开源的那个预测，我认为它已经发生了。无论这家特定公司是否是领先的实验室，重点在于，与政治议程保持一致是前进的方向。我认为你甚至可以更进一步说，就像 Nvidia 一直在将主权 AI 商业化一样，民族国家保证获得 AI 服务的一种方式，就是以国家身份投资其中一个实验室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. That's true. Uh pick another one. I mean it's kind of cheating but the open source one uh I think happened you know whether this particular company is a is a leading lab or not um is beside the point that uh basically like aligning yourself with political agendas is the way to go and and I think you could maybe take this even further and say like similar to how uh Nvidia has been monetizing sovereign AI a way for uh nation states to kind of guarantee access to AI services is for them as nations to invest in one of these labs.</p>
</details>

当然，由于出口管制，美国仍然可以告诉 OpenAI 切断服务，这仍然是一个风险。但我认为有趣的是，例如，阿尔巴尼亚政府投资了 Thinking Machines。当然，该公司的 CEO 来自那里。所以我把这个话题包装成一个预测，即一些国家将基本上放弃实现 AI 主权的努力，并宣布 AI 中立。这有点类似于国防姿态，一些国家太小，或者没有足够的人力、财力等能力来发展武器系统以保卫自己，所以他们从一个更大的邻国那里获得战略安全保障。我认为，各国说“我建不了这个，我需要与另一个主权国家建立正式联盟”这种情况，对我来说似乎并非不可想象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh there's obviously still a risk that due to export controls US can just like tell OpenI to switch it off. But I think it's interesting that for example the Albanian government invested in thinking machines. Uh obviously the CEO comes from there. And so we I wrapped this kind of prediction or this this topic in a prediction that said you know some countries will basically abandon their uh their efforts to achieve AI sovereignty and declare AI neutrality. M it's a bit similar to like the um the defense posture where some nation states are just too small or don't have enough people or don't have the money etc with the capabilities to develop weapon systems to defend themselves and so they have a strategic security guarantee that they get from a larger neighboring nation. I think doesn't seem that inconceivable to me that um you know various countries would say I can't build this stuff. I need to have a formal alliance with another country that is sovereign.</p>
</details>

**Matt Turck:** Nathan，这次谈话非常精彩。非常感谢你。《2025年AI现状报告》再次强调，可以在 stateof.ai 网站上获取。它内容详尽，细节丰富，却又通俗易懂。所以，感谢你做了这件事。感谢你今天来分享你的预测。希望下次当你的某些预测没有实现时，我至少能让你稍微尴尬一下。但这次真的很棒。非常感谢你给我这个机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well Nathan it's been wonderful. Thank you so much. the state of AI 2025. Again, is available at state of.ai. It's uh remarkably comprehensive and detailed uh yet approachable. So, thank you for doing this. Thank you for coming on today sharing predictions. Hopefully, I get to embarrass you at least a little bit uh for the next one when some of those predictions uh turn out to not have panned out. But this was wonderful. Thank you very much for the opportunity.</p>
</details>

**Nathan Benaich:** 感谢再次邀请。我很感激。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for running it back. Appreciate it.</p>
</details>