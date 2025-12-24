---
area: market-analysis
category: business
companies_orgs:
- AWS
- Grammarly
- Cursor
- Replet
- Stripe
- Figma
- Brevo
- Muro
- Hex
- Observable
- Jupiter
- Monday.com
- Notion
- Canva
- Microsoft
- JetBrains
- Tableau
- PowerBI
- Adobe Analytics
date: '2025-10-29'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- A framework for pricing AI products
products_models:
- Serenity Notebook
- Aura AI
- Copilot
- ChatGPT
- Microsoft 365
project:
- ai-impact-analysis
- entrepreneurship
series: ''
source: https://www.youtube.com/watch?v=bEy9kv1M000
speaker: TechButMakeItReal
status: evergreen
summary: 本文深入探讨了AI产品独特的定价挑战与成功策略。传统软件即服务（SaaS）模式在AI领域面临单位经济效益的冲击，导致许多初创公司因成本失控而失败。文章分析了Grammarly、Cursor、Replet等公司的案例，提出了基于消费、工作流和结果的多种定价模型。此外，还针对一款名为Serenity
  Notebook的产品，提供了关于免费增值、定价水平和B2B市场定位的详细建议，强调了正确的定价策略对于AI产品长期成功的关键作用。
tags:
- business
- business-model
- llm
- strategy
title: AI产品定价策略：如何避免破产并实现可持续增长
---

### AI产品定价的挑战与机遇

想象一下，你正在开发一款**AI**（Artificial Intelligence: 人工智能）产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine you're building an AI product.</p>
</details>

它在一夜之间获得了10,000名用户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It gets 10,000 users overnight.</p>
</details>

然后，**AWS**（Amazon Web Services: 亚马逊网络服务，一种云计算平台）给你寄来了一张比你收入还高的账单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then AWS sends you a bill that is bigger than your revenue.</p>
</details>

那些无法实现经济效益的AI公司，不一定是因为产品不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The AI companies that can't make economics work aren't necessarily the ones with bad products.</p>
</details>

它们通常是因为定价策略不佳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're often the ones with bad pricing.</p>
</details>

与此同时，那些正在盈利的公司，其收费是传统软件的10倍，而且客户也愿意支付。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Meanwhile, the ones that are making money charge 10 times more than traditional software, and customers are paying.</p>
</details>

Grammarly将其免费AI服务削减了95%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Grammarly slashed their free AI offering by 95%.</p>
</details>

Cursor的价格从每月20美元跃升至200美元，这是一个10倍的价格差距，足以扼杀任何传统的**SaaS**（Software as a Service: 软件即服务）公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cursor jumped from 20 to $200 a month, a 10 times price gap that would kill any traditional SAS company.</p>
</details>

Replet开始根据计算工作量而非功能收费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Replet started charging based on computational effort, not features.</p>
</details>

而且这种方式奏效了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's working.</p>
</details>

今天，我将深入探讨哪些定价模型适用于AI产品，哪些会破坏**单位经济效益**（Unit Economics: 指单个产品或服务的收入和成本关系）和利润率，以及如何为AI产品定价才能避免创始人破产。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today I'm doing a deep dive into which pricing models work for AI products, which ones destroy unit economics and margins, and how to price an AI product that will not make the founder go bankrupt.</p>
</details>

让我们深入了解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's dive in.</p>
</details>

### AI产品单位经济效益的独特挑战

我是在看到Stripe的一篇文章《AI产品定价框架》后，受到启发制作了这一期节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got inspired to make this episode after seeing Stripe's article, a framework for pricing AI products.</p>
</details>

该框架描述了大多数AI公司遵循的三种盈利模式：基于消费（按API调用或**LLM**（Large Language Model: 大语言模型）令牌收费）、基于工作流（按完成的任务收费）或基于结果（按成功的产出收费）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The framework describes three monetization formats most AI companies follow: consumption-based per API call per LLM token, workflow-based per completed task or outcome-based per successful outcome.</p>
</details>

听起来很简单，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Simple, right?</p>
</details>

嗯，不完全是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, not quite.</p>
</details>

在传统SaaS领域，利润率通常为80%到90%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In traditional SAS, margins are 80 to 90%.</p>
</details>

一旦基础设施部署完毕，增加一个额外用户几乎不产生额外成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once infrastructure is deployed, adding an extra user costs you nothing.</p>
</details>

然而，在AI产品中，利润率据报道只有50%到60%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In AI products, the margins are reportedly 50 to 60%.</p>
</details>

这是因为你每增加一个用户，你的产品就会消耗令牌和计算能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that is because every user that you add to your product burns tokens and computing power.</p>
</details>

因此，你维护现有客户或吸引新客户的成本可能会不可预测地增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So your costs to maintain clients or your cost to onboard new clients can scale unpredictably.</p>
</details>

我给你举个例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll give you an example.</p>
</details>

假设你是Figma，你有一个企业客户A。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say you're Figma and you have an enterprise customer, customer A.</p>
</details>

你增加了一个新的AI功能，用户可以根据描述生成设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You add a new AI feature where a user can generate designs based on their description.</p>
</details>

你的客户A公司非常喜欢这个功能，并开始每天多次使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your customer, company A, loves the feature and they start using it multiple times every single day.</p>
</details>

你曾希望他们会使用，但可能没想到会用得如此频繁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You were hoping that they'd use it, but maybe not as much.</p>
</details>

当他们开始大量使用时，你的**GPU**（Graphics Processing Unit: 图形处理器）使用量飙升，一周后你收到AWS账单，发现费用激增了300%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when they start doing it, your GPU usage shoots up and a week later you get your AWS bill and you see a 300% spike.</p>
</details>

这种情况在AI出现之前是不可能发生的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This situation was not possible before AI.</p>
</details>

AI对企业单位经济效益的影响是，它将**年度经常性收入**（Annual Recurring Revenue, ARR: 指企业在一年内从订阅或经常性服务中获得的收入）从接近100%可预测变为70%可预测，其中30%是因消费而产生的意外开销。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what AI has done to the unit economics of businesses is that it changed annual recurring revenue from close to 100% predictable to 70% predictable, 30% consumption surprise.</p>
</details>

我们已经到了一个地步，你的成本预测需要从年度规划转变为90天周期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We got to a point where your cost forecasting needs to move from annual planning to 90day cycle.</p>
</details>

这就是大多数AI创始人破产的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why most AI founders go bankrupt.</p>
</details>

嗯，他们不会突然变得无家可归，但你懂我的意思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it's not like they become homeless all of a sudden, but you know what I mean.</p>
</details>

这就是企业失败的原因，也是AI创始人无法长期维持其事业的原因，因为他们像SaaS一样定价，但成本却像公用事业一样运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the reason why businesses fail and why AI founders cannot sustain their ventures for a long time because they price like SAS. But the costs behave like utilities.</p>
</details>

### Brevo：一体化营销与CRM解决方案 (赞助内容)

为一家企业进行营销并非易事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Running marketing for a business is not for the faint of heart.</p>
</details>

一个工具用于电子邮件，一个用于社交媒体，另一个用于**CRM**（Customer Relationship Management: 客户关系管理），还有一些用于WhatsApp，然后是三个独立的应用程序，用于跟踪三种不同用例的分析数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One tool for email, one for social media, another one for CRM, something else for WhatsApp, and then three separate apps that track analytics for three different use cases.</p>
</details>

所有这些都只是为了了解你的客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all of it just to understand your customers.</p>
</details>

但如果所有这些都能协同工作，而你无需花费巨资呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what if all of that just worked and you didn't have to spend a fortune?</p>
</details>

Brevo提出了同样的问题，并构建了解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brebo asked the same question and they built the answer.</p>
</details>

它是一个一体化的营销和CRM套件，专为不想陷入企业级混乱或企业级定价的成长型团队设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An all-in-one marketing and CRM suite for growing teams that don't want enterprise chaos or enterprise pricing.</p>
</details>

通过Brevo，你可以在一个简洁的平台运行电子邮件、短信、WhatsApp和聊天营销活动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With Brebo, you can run email, SMS, WhatsApp, and chat campaigns from one clean platform.</p>
</details>

没有应用程序疲劳，无需管理无休止的平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No app fatigue, no endless platforms to manage.</p>
</details>

只需与客户无缝沟通，无论他们在哪里找到你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just seamless communication with your customers wherever they find you.</p>
</details>

只需点击几下即可构建自动化流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Build automations in a few clicks.</p>
</details>

发送欢迎系列邮件，挽回废弃的购物车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Send a welcome series. Recover a cart.</p>
</details>

重新激活第二季度“消失”的潜在客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Re-engage that lead who ghosted you in Q2.</p>
</details>

并构建对话仪表板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And build that dashboard for conversations.</p>
</details>

这绝对会让你的支持团队工作轻松许多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It will definitely make your support's life a lot easier.</p>
</details>

而且它不仅仅是营销。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's not just marketing.</p>
</details>

Brevo包含一个强大的**客户数据平台**（Customer Data Platform, CDP: 整合客户数据的系统），它本质上是将CRM和业务分析结合在一个地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brevo includes a powerful customer data platform, which is essentially CRM and business analytics combined in one place.</p>
</details>

它将所有客户数据转化为单一的事实来源，并为你提供每个客户的360度视图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It turns all of your customer data into a single source of truth and gives you a 360 view of every single customer you have.</p>
</details>

此外，Brevo的Aura AI帮助你编写更智能、个性化的电子邮件，并在完美的时间发送，这个功能甚至在免费套餐中也可用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, Brevo's Aura AI helps you write smarter, personalized emails and send them at the perfect time, and that feature is available even on the free plan.</p>
</details>

与其他按合同收费的工具不同，Brevo只按你的发送量收费，透明的定价比竞争对手便宜高达72%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unlike other tools that charge per contract, Brevo charges only for what you send with transparent pricing that's up to 72% cheaper than competitors.</p>
</details>

所以，如果你准备好简化营销、统一团队并优化营销支出，请查看Brevo。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you're ready to simplify your marketing, unify your team, and optimize your marketing spend, check out Brevo.</p>
</details>

非常感谢Brevo赞助本视频的这一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Huge thanks to Brevo for sponsoring this part of the video.</p>
</details>

### Serenity Notebook案例分析：定价策略的根本缺陷

我们收到了一位名叫Chandler的年轻创始人的电子邮件，他正在咨询如何为他正在开发的应用程序定价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We received an email from a young founder whose name is Chandler and Chandler was asking for advice on how he should approach pricing for the app he's building.</p>
</details>

我承诺他这个视频已经快两个月了，甚至更久。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have been promising him this video for almost 2 months, maybe more.</p>
</details>

所以，Chandler，这是为你准备的，但我真的很抱歉花了两个月时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Chandler, this is for you, but I am really sorry it took me 2 months.</p>
</details>

Chandler正在开发一款名为Serenity Notebook的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chandler is building a product called Serenity Notebook.</p>
</details>

你可以查看它，链接在描述中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Check it out. The link is in the description.</p>
</details>

它有什么功能？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What does it do?</p>
</details>

Serenity Notebook让你能够使用AI技术，在一个地方创建和分享不同类型数据的实时可视化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Serenity notebook lets you use AI technology to create and share real-time visualizations with different types of data in just one place.</p>
</details>

你可以轻松地为CSV数据构建图表，探索**CAD**（Computer-Aided Design: 计算机辅助设计）模型，并构建实时更新的富数据笔记本，不受编程语言或框架的限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can easily build charts for CSV data, explore computer a design models, and build datarrich notebooks that update in real time independent of programming language or framework.</p>
</details>

一个重要的澄清是，Chandler正在构建的核心产品无需AI也能工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Important clarification, the core product that Chandler is building works without AI.</p>
</details>

它不依赖AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It doesn't require AI.</p>
</details>

目标用户：根据创始人所说，是数据科学家，他们可以使用任何语言编写代码，将其输入Serenity，它就会生成图表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">target users. According to the founder, data scientists who can use code in any language they write in, feed it to serenity and it'll build the charts.</p>
</details>

各种工程师，如电气、机械、化学、生物化学工程师，可以使用CAD模型或任何其他类型的专业文件来可视化他们的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Engineers of various kinds, electrical, mechanical, chemical, biochemical, can visualize their work using computer a design models or any other type of specialized files.</p>
</details>

商业和分析团队可以使用Serenity创建网络仪表板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">business and analytics teams who can use Serenity to create web dashboards.</p>
</details>

科学家可以构建自定义可视化或物理模拟作为示例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and scientists who can build custom visualizations or physics simulations as an example.</p>
</details>

Chandler目前的定价是：桌面版暂时免费，无限使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chandler's pricing so far desktop version free for the time being unlimited usage.</p>
</details>

云端套餐每月8美元起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cloud plan starts at $8 a month.</p>
</details>

这背后的理由是分摊硬件和托管成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The rationale behind this is to advertise hardware and hosting costs.</p>
</details>

Chandler，如果你正在听，我真的希望你在听，我有一些建议给你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chandler, if you're listening to this, and I really hope that you are, there are a couple things that I would recommend that you do, because your pricing strategy has fundamental flaws and risks that could cost you tens of thousands of dollars per year and possibly your entire business long term.</p>
</details>

因为你的定价策略存在根本性的缺陷和风险，这可能会让你每年损失数万美元，甚至可能长期导致你的整个业务失败。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because your pricing strategy has fundamental flaws and risks that could cost you tens of thousands of dollars per year and possibly your entire business long term.</p>
</details>

### Serenity Notebook的三个根本风险与建议

在我看来，你正在承担的三个根本风险是：风险一，桌面版蚕食云端版。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the three fundamental risks that you're signing up for in my view. Risk number one, desktop cannibalization.</p>
</details>

如果你将桌面版永久免费或在可预见的未来无限免费，我实在看不出你如何能销售你的云端组件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you make desktop truly free for life or for the foreseeable future with no limits, I do not see how on earth you're going to be selling your cloud component because why would anyone pay for cloud if they can use your desktop for free?</p>
</details>

因为如果用户可以免费使用你的桌面版，为什么要为云端付费呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because why would anyone pay for cloud if they can use your desktop for free?</p>
</details>

从你提供的比较中已经有证据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is already evidence from your own comparisons that you provided.</p>
</details>

Jupiter是免费的，但它不赚钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jupiter is free and it makes no money.</p>
</details>

Jupiter是一个依靠拨款生存的非营利组织。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jupiter is a nonprofit living off of grants.</p>
</details>

Observable尝试过免费的私人笔记本，后来不得不将其付费墙化，结果用户反抗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Observable tried free private notebooks. Then they had to payw wall those and when they did the users revolted.</p>
</details>

如果你让桌面版免费且无限制，它就不是一门生意，而是一个个人项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you keep desktop free with no limits, it's not a business. It'll be a pet project.</p>
</details>

我的建议是，保持**免费增值**（Freemium: 免费提供基本功能，高级功能收费）模式，但要施加限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My recommendation to you, keep it on premium, but impose limits.</p>
</details>

例如，两到三个本地笔记本，而不是无限量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, two to three local notebooks, not unlimited.</p>
</details>

一次只能处理一个CAD文件，每月五个AI积分，没有云端托管，也没有协作功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one computer aid file at a time, five AI credits per month, no cloud hosting, no collaboration features.</p>
</details>

我建议你看看Muro公司是如何构建其免费层的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would recommend that you look at how the company called Muro structures their free tier.</p>
</details>

他们提供足够的功能让你看到完整的价值，但又不足以让你永远不需要升级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They give you enough to see the full value, but not enough to never upgrade.</p>
</details>

风险二，定价过低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Risk number two, underpricing.</p>
</details>

每月8美元，你正在损失巨大的价值，因为市场情况是这样的：商业级CAD软件的许可证每月75美元起，最高可达4000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At $8 a month, you leaving massive value on the table because here is what the market looks like. The license for a computer aid design commercialgrade software starts at $75 a month and goes all the way up to $4,000.</p>
</details>

你的潜在竞争对手Hex起价36美元，每用户最高75美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your potential competitor Hex starts at $36 and goes all the way up to $75 per user.</p>
</details>

Observable每用户22到25美元起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Observable starts at $22 to $25 per user.</p>
</details>

最重要的是，工程团队工具的价格每用户100美元起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And most importantly, the prices for the engineering team tools start at $100 per user.</p>
</details>

你却打算定价8美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You are thinking to price at eight.</p>
</details>

这意味着你每月每用户损失了10到60美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's between $10 to $60 per month per user left on the table.</p>
</details>

如果有1000个用户，每年损失的收入将超过10万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At 1,000 users, that is more than $100,000 per year in lost revenue.</p>
</details>

我的建议是，至少从每月18美元开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My recommendation, start at $18 a month minimum.</p>
</details>

如果你的用户不愿意为一款能够以语言无关的笔记本形式可视化数据并具备CAD功能的工具支付18美元，那么你面临的是产品问题，而不是定价问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If your users don't pay $18 for a tool that visualizes data in a language agnostic notebook with computer aid design capabilities, you have a product problem, not a pricing problem.</p>
</details>

当我说产品问题时，我的意思是它要么没有解决目标用户的问题，要么在产品认知上存在不匹配（这是一个营销问题，不同但仍然是问题），要么产品不够强大，无法完全解决问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I say product problem, I mean that it either doesn't solve the problem of your target user or there is a mismatch in terms of perception of the product, which is a marketing problem, different one but still, or the product is not strong enough to solve the problem all the way to the end.</p>
</details>

但你的产品定价18美元是最低限度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But 18 bucks for your product is less than minimal.</p>
</details>

风险三，AI成本溢出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Risk number three, AI cost spillover.</p>
</details>

你的AI功能，如自定义可视化工具，将产生不可预测的计算成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your AI features, custom visualizers will have unpredictable compute costs.</p>
</details>

一旦你获得一个重度用户，你的单位经济效益将崩溃，利润率将被吞噬。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The moment you get a power user, your unit economics will collapse and your margins will be buried.</p>
</details>

我的建议是，从发布之初就采用基于积分的AI定价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My recommendation, credit-based AI pricing from the time you launch.</p>
</details>

你可以这样做：每月提供五个免费AI积分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can do something like this. You can give five free AI credits per month.</p>
</details>

对于专业版，你每月提供100个积分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For a pro plan, you offer 100 credits per month.</p>
</details>

你可以自己计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You do the math.</p>
</details>

这些数字是假设的，我不知道你的成本是多少，但你明白我的意思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These numbers are hypothetical. I don't know what your costs are, but you get what I'm saying.</p>
</details>

这个例子类似于Canva和Grammarly。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This example is a Canva Grammarly example.</p>
</details>

用户已经习惯了理解积分的使用方式，而作为创始人，你也能避免意外账单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Users have adopted behavior when they understand credits and you as a founder avoid surprise bills.</p>
</details>

### 现代AI产品定价模型：成功案例分析

为了理解为什么你的定价可能行不通，我想看看目前AI定价中哪些是有效的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To understand why your pricing won't work, I want to look at what's actually working in AI pricing right now.</p>
</details>

因为AI定价的游戏规则已经完全改变了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because the game and AI pricing has changed completely.</p>
</details>

我们所熟知的免费增值模式已经消亡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Premium as we knew it is dead.</p>
</details>

传统SaaS的黄金法则一直是免费提供40%到60%的核心功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The golden rule in traditional SAS has always been to offer 40 to 60% of core features for free.</p>
</details>

其目的是培养用户习惯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The whole point was habit formation.</p>
</details>

用户会使用你的产品很长时间，遇到功能限制，如果他们足够喜欢产品，就会升级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Users would come to your product, they would use it for a long time, they would hit feature limitations, and if they like the product enough, they go to upgrade.</p>
</details>

如今的AI SaaS公司已将其免费层功能削减至之前的20%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today's AI SAS companies have slashed their free tier features to just 20% of what they had before.</p>
</details>

这意味着用户免费获得的功能减少了80%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is an 80% reduction in what users get for free.</p>
</details>

心态从“先试后买”转变为“先尝后订”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The mindset shifted from try before you buy to taste before you subscribe.</p>
</details>

那么，让我们来看看现代AI免费增值模型中现在提供什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's go through what is now being offered in modern AI premium models.</p>
</details>

Grammarly免费提供每月100个AI提示，而付费版为2000个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Grammarly, 100 monthly AI prompts for free versus 2,000 paid.</p>
</details>

Notion总共提供20次AI回复，不重置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Notion, 20 total AI responses, no reset.</p>
</details>

Monday.com每月提供500个AI积分，额外积分包每月200美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Monday.com, 500 monthly AI credits and additional packs at $200 per month.</p>
</details>

Cursor是AI如何创建高级定价层的完美例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cursor is a perfect example of how AI creates premium pricing tiers.</p>
</details>

在免费层，他们提供2000次完成和50次慢速请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the free tier, they've got 2,000 completions and 50 slow requests.</p>
</details>

在专业层，他们提供无限次完成和无限次慢速请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the pro tier, they've got unlimited completions and unlimited slow requests.</p>
</details>

在超级层，他们的使用量是专业层的20倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the ultra tier, they've got 20 times more usage than Pro.</p>
</details>

AI功能创造了传统软件中前所未有的定价差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI features create pricing gaps never seen in traditional software.</p>
</details>

Cursor有10倍的跳跃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cursor had a 10 times jump.</p>
</details>

Copilot和JetBrains都有两倍的跳跃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Copilot had a two times jump and so did JetBrains.</p>
</details>

而且，用户并没有抵制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the thing is, users aren't pushing back.</p>
</details>

市场已经从心理上接受了这种免费但有计量限制的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The market has mentally accepted this model where free comes with a meter.</p>
</details>

然后Replet出现了，他们提出了一个问题：如果定价能真正匹配你的GPU成本痛苦呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then Replet showed up and asked what if pricing actually matched the pain of your GPU.</p>
</details>

Replet可能引入了市场上所有AI应用中最合乎逻辑的定价模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Replet introduced probably the most logical pricing model among all AI apps on the market.</p>
</details>

他们称之为“基于工作量的检查点系统”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They call it an effortbased checkpoint system.</p>
</details>

他们完全脱离了传统软件定价模式，开始根据执行的计算工作量向用户收费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They completely departed from traditional software pricing and started charging users based on computational work that is being performed.</p>
</details>

该模型的工作原理是：对于简单任务，他们收取最高15美分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The model works like this. For simple tasks, they charge up to 15 cents.</p>
</details>

对于复杂任务，最高收取一美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For complex tasks, up to a dollar.</p>
</details>

他们收取的费用与AI模型推理成本直接相关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The price that they charge directly correlates with AI model inference costs.</p>
</details>

它的工作原理是这样的：从技术上讲，系统实时测量计算单位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here is how it works. Technically, the system measures computational units in real time.</p>
</details>

一个代理在执行前分析任务复杂性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An agent analyzes task complexity before execution.</p>
</details>

它估算CPU周期、内存使用量和所需的模型调用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It estimates CPU cycles, memory usage, and required model calls.</p>
</details>

它根据预测的计算工作量计算成本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It calculates the cost based on predicted computational effort.</p>
</details>

之后，它在任务执行期间跟踪实际资源消耗，然后在结束时根据实际工作量收费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After that, it tracks actual resource consumption during the task and then at the end it charges based on actual effort.</p>
</details>

Replet所做的是，他们本质上将定价与成本痛苦对齐，而Serenity却打算免费提供这种痛苦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What Replet did is that they essentially aligned pricing to the pain and serenity is about to give away the pain for free.</p>
</details>

Replet的例子展示了当你将定价与原始计算成本对齐时，定价可以推到多远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Replet's example shows how far pricing can be pushed when you align it to raw compute.</p>
</details>

但并非所有产品都能或应该走那么远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But not every product can or should go that far.</p>
</details>

让我向你展示哪些定价模型适用于不同类型的AI产品，以及Serenity适合哪种。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me show you what works across different types of AI products and where Serenity fits.</p>
</details>

当AI提供离散且可衡量的结果，直接替代人工工作时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When AI delivers a discrete and measurable outcome that directly replaces human work.</p>
</details>

例如，文档审查或客户支持工单的解决。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example, things like a document review or a customer support ticket that gets resolved.</p>
</details>

有效的方法是基于结果的定价，即按成功的产出收费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What works is outcomebased pricing when you charge per successful outcome.</p>
</details>

例如，医疗影像AI每次扫描收费2到15美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, medical imaging AI charges between $2 to $15 per scan.</p>
</details>

面向销售团队的AI工具按预约成功的合格会议收费，而不是按外联尝试次数收费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI tools for sales teams charge per qualified meeting booked, not per outreach attempt.</p>
</details>

当AI自动化重复性工作流、合规性检查或索赔处理时，有效的方法是订阅加使用积分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When AI automates repetitive workflows, compliance checks or claims processing, what works is subscription plus usage credits.</p>
</details>

基础订阅涵盖平台访问，当自动化执行时，积分开始生效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The base subscription covers platform access and credits kick in when automation executes.</p>
</details>

这种定价类型的一些例子：医疗保健领域的收入周期AI，按收回账单收入的2%到5%收费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A few examples for this type of pricing. Revenue cycle AI in healthcare 2 to 5% of recovered billing revenue.</p>
</details>

合规AI提供每月5到25,000美元的订阅费，加上按检查文档数量收费的积分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Compliance AI offers 5 to $25,000 a month subscription plus credits per documents checked.</p>
</details>

当AI增强个人生产力，如写作辅助、设计工具、代码补全时，有效的方法是免费增值加积分消费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When AI augments individual productivity, writing assistance, design tools, code completion, what works is premium plus credit consumption.</p>
</details>

你提供慷慨的免费层，受AI积分限制，然后将其打包为分层订阅，多个基于席位的计划，AI配额逐步增加。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You provide generous free tier limited by AI credits and then you package it as a tiered subscription, multiple seedbased plans with escalating AI quotas.</p>
</details>

例如：ChatGPT，基础功能免费，高级模型和更高限制需付费。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Examples: Chad GPT, free for basic, paid for advanced models and higher limits.</p>
</details>

Canva免费用户获得非常有限的AI提示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Canva free users get very limited AI prompts.</p>
</details>

Microsoft Copilot集成到Microsoft 365中，但完整功能需要付费订阅。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Microsoft Pilot integrates into Microsoft 365 but full features required paid subscription.</p>
</details>

当AI提供洞察、预测或分析时，有效的方法是分层订阅。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When AI delivers insights, forecasts or analytics, what works is subscription tiers.</p>
</details>

你将基于席位的定价与功能层级结合起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You combine seedbased pricing with feature tiers.</p>
</details>

例如：营销分析AI，每月每用户100到1000美元，用于仪表板访问，外加按查询次数收费的积分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Examples: marketing analytics AI from $100 to $1,000 per user per month for dashboard access plus credits per query.</p>
</details>

HR绩效AI，每月每用户10到100美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">HR performance AI from $10 to $100 per user per month.</p>
</details>

绝大多数成功的AI公司都遵循这些模式之一，你也需要这样做，因为这确实有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The vast majority of successful AI companies follow one of these patterns and you need to do the same because this works.</p>
</details>

让我将Serenity映射到这些垂直领域之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me map Serenity to one of these verticals.</p>
</details>

### Serenity Notebook的市场定位与定价建议

在我看来，你的产品符合以下两个类别：生产力应用，因为你通过图表、数据、CAD设计和即时AI可视化工具，提高了技术专业人员的生产力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In my opinion, the way I see your product, you map to two of these categories. Productivity apps because you make technical professionals more productive with tools for charts, data, computer A designs, and instant AI visualization and analytical and insight platforms because you take raw data and produce visualizations.</p>
</details>

以及分析和洞察平台，因为你处理原始数据并生成可视化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and analytical and insight platforms because you take raw data and produce visualizations.</p>
</details>

根据我刚才所说，我的建议是采用免费增值加积分消费模式，因为你的产品遵循**产品驱动增长**（Product-Led Growth, PLG: 一种以产品为核心驱动用户获取、留存和变现的策略）模式，其中获取、留存和用户引导都由产品驱动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My recommendation based on what I just said, premium with credit consumption because your product is following a productled growth motion where acquisition, retention, and onboarding are driven by the product.</p>
</details>

对于AI密集型功能，采用基于积分的定价，因为你需要抵消计算成本，以免被账单淹没。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Credit based pricing for AI heavy features because you're going to need to offset compute costs so you don't drown in bills.</p>
</details>

最后，我知道你没有问这个，但我还是要说，因为如果我不说我会后悔。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, and I know you didn't ask for this, but I'm going to do it anyway because I'm going to regret if I don't.</p>
</details>

我想挑战你对**B2C**（Business-to-Consumer: 企业对消费者）市场定位的看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would like to challenge your thinking around B2C market orientation.</p>
</details>

我为你做了一个快速的用户分析，我真的非常建议你重新考虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I did a quick audience analysis for you and I really really recommend that you reconsider.</p>
</details>

你的产品已经有很多独特的卖点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your product already has a lot of unique selling points.</p>
</details>

如果我没记错的话，你是唯一一个将CAD设计与数据可视化结合到笔记本风格应用中的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I'm not mistaken, you're the only one combining computer a designs with data visualizations in a notebook style app.</p>
</details>

你的产品是语言无关的，这是市场上一个巨大的差异化优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You are language agnostic which is a massive differentiator on the market.</p>
</details>

最后，我认为非常棒的一点是，你不是AI优先的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lastly, which I think is fantastic, you are not AI first.</p>
</details>

你的产品没有AI优先的定位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your product does not have AI first positioning.</p>
</details>

你不是一个AI应用，这是一个巨大的优势，因为即使没有AI，你的产品也能解决问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're not an AI app, which is a huge plus because your product solves a problem even if there is no AI.</p>
</details>

我想回到你的目标受众。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I want to come back to your target audience.</p>
</details>

你提到了工程师、数据科学家、机器学习专家、业务分析师和科学家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You said engineers, data, machine learning, business analysts, and scientists.</p>
</details>

我的建议是将工程师作为你的主要目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My recommendation is to make engineering your primary target.</p>
</details>

当我说工程师时，我指的是所有类型的工程师：电气、化学、土木、机械、物联网。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I say engineering, I'm talking about all kinds of engineering. Electrical, chemical, civil, mechanical, IoT.</p>
</details>

基本上，是远远超出软件领域的所有类型的工程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, all kinds of engineering far beyond software.</p>
</details>

为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why?</p>
</details>

因为你的产品解决了他们最大的痛点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because your product solves their highest pain.</p>
</details>

目前市场上没有统一的CAD加笔记本解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is no unified computer a design plus notebook solution on the market today.</p>
</details>

你将要瞄准的工程师拥有非常高的购买力，因为面向工程师的产品很容易就能收取每月每用户25到50美元，而团队计划则在每月100到200美元之间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">engineers that you're going to be targeting have very high purchasing power because engineer oriented products easily charge $25 to $50 per month per user and for team plans it's between $100 to $200 per month.</p>
</details>

你将拥有非常高的扩展潜力，因为整个工程组织都需要这个工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're going to have a very high expansion potentials because entire engineering orgs need this tool for data machine learning deep learning.</p>
</details>

将数据、机器学习、深度学习作为你的次要目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Make them your secondary target.</p>
</details>

为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why?</p>
</details>

因为你将解决中等痛点，痛点之所以是中等，是因为他们有Jupiter或Matplotlib等替代品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because you're going to be solving medium pain and the pain is medium because they have alternatives like Jupiter or Mattplot lib.</p>
</details>

你在这个垂直领域有很好的扩展潜力，而且数据科学作为一个整体，其**潜在市场总额**（Total Addressable Market, TAM: 指一个产品或服务在理想情况下的最大市场规模）比工程领域更大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have a good expansion potential in this vertical and data science as a whole has a larger total addressable market than engineering.</p>
</details>

科学家和研究人员，将他们作为你的第三级受众。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Scientists and researchers make them your tertiary audience.</p>
</details>

为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why?</p>
</details>

因为他们痛点高但预算低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because they have high pain but low budgets.</p>
</details>

学术界依赖于拨款。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Academia relies and depends on grants.</p>
</details>

他们不断为一切而奋斗，包括软件许可证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They constantly fight for everything including software licenses.</p>
</details>

这个受众的优点是免费层对他们非常有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The upside of this audience is that the free tier will work really well for them.</p>
</details>

他们会为你建立一个社区。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They will build a community for you.</p>
</details>

总的来说，学术界对于品牌建设和口碑传播非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in general, academic community is fantastic for brand building and word of mouth.</p>
</details>

他们不会给你带来大量金钱，但对于品牌建设来说非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're not going to bring you a ton of money, but they're fantastic for branding.</p>
</details>

最后，业务分析师和各种商业用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lastly, business analysts and all kinds of business use cases.</p>
</details>

我建议你放弃这个群体，因为这些人的痛点不够大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I recommend that you drop this because pain for these folks is not big enough.</p>
</details>

你将与至少Tableau、PowerBI和Adobe Analytics竞争。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're going to be competing with at least Tableau, PowerBI, and Adobe Analytics.</p>
</details>

如果你分散精力过多，你将与强大的竞争对手作战，而无法全力以赴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you spread too thin, you're going to be fighting massive competitors without going allin.</p>
</details>

记住，“**护城河**”（Moat: 指企业相对于竞争对手的竞争优势）越窄越好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And remember, narrow is the moat.</p>
</details>

### 从B2C转向B2B：团队协作与营收潜力

我认为你遗漏了一些东西，我真的想推荐给你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is what I think you are missing and something that I really want to recommend.</p>
</details>

考虑转向**B2B**（Business-to-Business: 企业对企业）市场定位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think about switching to B2B market orientation.</p>
</details>

为什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why?</p>
</details>

让我们回到你的受众。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's go back to your audience.</p>
</details>

机械工程师或数据工程师何时使用数据可视化工具或3D建模软件？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When do mechanical engineers or data engineers use data visualization tools or 3D modeling software?</p>
</details>

在工作中，而不是在家里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At work, not at home.</p>
</details>

工程本质上是协作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Engineering is collaborative by definition.</p>
</details>

有多少工程师独自工作？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many engineers work alone?</p>
</details>

我在科技行业工作了近10年，从未见过一个不属于团队的工程师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've been in tech for almost 10 years. I haven't met a single engineer who wasn't on the team.</p>
</details>

科学家在哪里花费时间？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Where do scientists spend time?</p>
</details>

研究和开发实验室。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">research R&D labs.</p>
</details>

博士生基本上就住在那些实验室里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">PhD students basically live at those labs.</p>
</details>

主要用例包括可视化实验、与合作者进行研究、创建用于出版的笔记本或管理实验室数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Primary use cases, visualizing experiments, research with collaborators, creating notebooks for publications, or managing lab data.</p>
</details>

科学家几乎总是在团队中工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Scientists almost always work in groups.</p>
</details>

他们的工作成果必须可复现、可共享，并为合规性而存储。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The results of their work must be reproducible. They must be sharable and stored for compliance.</p>
</details>

你所针对的每一个用户画像都将在工作中使用你的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every single user profile you're targeting will be using your product at work.</p>
</details>

这就是B2B定位的定义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the definition of B2B orientation.</p>
</details>

你的产品迎合了生物技术、制造业、研发实验室、工程咨询公司、大学博士部门、研究实验室、物联网和实体产品开发团队的需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your product caters to biotech, manufacturing, R&D labs, engineering consultancies, university PhD department, research labs, IoT and physical product development groups.</p>
</details>

B2B的营收潜力是巨大的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The revenue potential in B2B is enormous.</p>
</details>

你正在构建的产品是一个相当小众但又不过于小众的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What you're building is a fairly niche, but not too niche of a product.</p>
</details>

你已经具备了产品差异化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You already have product differentiation.</p>
</details>

你显然很有品味，你的网站也证明了这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You clearly have taste and your website proves it.</p>
</details>

这不是很多B2B创始人具备的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is a skill that not many B2B founders have.</p>
</details>

我的意思是，你见过B2B软件吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, have you seen B2B software?</p>
</details>

这引出了我的最终建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This leads me to my final recommendation.</p>
</details>

开始为团队设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Start designing for teams.</p>
</details>

目前，你显然是为B2C用例设计的，但我建议你开始从团队和网络效应的角度思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now, you're clearly designing for a B2C use case, but I recommend that you start thinking in teams and network effects.</p>
</details>

协作将是你的核心竞争力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Collaboration will be your bread and butter.</p>
</details>

无缝的用户引导、邀请队友、与队友分享、笔记本上的实时协作。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Seamless onboarding, inviting a teammate, sharing with a teammate, real time collaboration on notebooks.</p>
</details>

研究Loom、Miro、Dropbox在起步时如何建立他们的网络效应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Explore how Loom, Mero, Dropbox set up their network effects when they were starting out.</p>
</details>

B2C可以作为你验证、数据收集和品牌建设的切入点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">B2C can be your entry point for validation, data gathering, brand building.</p>
</details>

但你的收入在B2B。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But your revenue sits with B2B.</p>
</details>

让我们快速算一下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's do a quick math.</p>
</details>

目前专注于B2C，每月每用户8美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Current B2C focus, $8 per month per user.</p>
</details>

1000个用户，每年就是96,000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At 1,000 users, that is 96,000 per year.</p>
</details>

另一种情况，专注于B2B，每个团队席位每月50美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alternative scenario, B2B focus, $50 per month per team seat.</p>
</details>

这是一个保守的估计，远低于典型的CAD查看器定价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's a conservative estimate. Way below typical computer a design viewer pricing.</p>
</details>

假设你的目标是40家公司共200个团队席位，平均每家公司五个席位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say your target is 200 team seats across 40 companies, five seats on average.</p>
</details>

那每年就是120,000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is $120,000 a year.</p>
</details>

而这才是真正的机会所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here is the real opportunity.</p>
</details>

典型的工程团队预算，用于专业工具，每用户在100到200美元之间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Typical engineering team budget is between $100 and $200 per user for specialized tools.</p>
</details>

如果Serenity将自己定位为一款工程工具，你可以收取每个席位每月100美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If Serenity positions itself as an engineering tool, you can charge $100 per month per seat.</p>
</details>

如果你销售200个席位，那每年就是240,000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you sell 200 seats, that's $240,000 a year.</p>
</details>

同样的产品，不同的定位，收入却是2.5倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same product, different positioning, two and a half times revenue.</p>
</details>

以每月8美元的B2C定位，你正在损失超过10万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At $8 per month B2C orientation, you are leaving over $100,000 on the table.</p>
</details>

如果你将自己与B2B工程定位进行比较，结论是：那些无法实现经济效益的公司，那些正在破产的公司，不总是因为产品不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you compare yourself to the B2B engineering positioning conclusion, the companies that cannot make economics work, the companies that are going bankrupt aren't always the ones with bad products.</p>
</details>

它们是那些定价策略不佳的公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're the ones with bad pricing.</p>
</details>

相同的产品，不同的定价，结果却相差10倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same product, different pricing, 10 times outcome.</p>
</details>

致所有创始人，包括Chandler，你正在构建真正创新的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To all founders, including Chandler, you're building something genuinely innovative.</p>
</details>

不要让你的定价成为它失败的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't let your pricing be the reason it fails.</p>
</details>

把它做好，建立一个可持续发展的企业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Get it right and build a sustainable business.</p>
</details>

构建能够持久的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Build something that will last.</p>
</details>

希望这有所帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I hope this was helpful.</p>
</details>

感谢收听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you for listening.</p>
</details>

我们下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll see you next time.</p>
</details>

再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Bye.</p>
</details>