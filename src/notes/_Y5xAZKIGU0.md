---
author: Bloomberg Podcasts
date: '2026-02-19'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=_Y5xAZKIGU0
speaker: Bloomberg Podcasts
tags:
  - prompt-engineering
  - software-development
  - business-model-innovation
  - market-disruption
  - organizational-change
title: 软件公司如何在AI时代生存：SaaS末日下的价值重构与转型
summary: 本期《Odd Lots》播客深入探讨了AI技术对软件行业带来的颠覆性影响。嘉宾**Jared Sleeper**分析了AI如何降低软件开发成本，以及软件公司在“SaaS末日”背景下的生存策略。他指出，软件公司的价值正从纯代码转向网络效应、品牌、客户支持和“群体熟悉度”等“上下文”要素。节目还讨论了结果导向的定价模式、AI原生工具的崛起、企业裁员潮的可能性，以及软件工程师未来职业发展的适应性挑战，强调了短期业绩与长期价值担忧之间的矛盾。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Jared Sleeper
companies_orgs:
  - Salesforce
  - Atlassian
  - DocuSign
  - Intercom
  - OpenAI
  - Anthropic
  - Google
  - Chegg
  - Avenir
  - Matrix Partners
products_models:
  - ChatGPT
  - Cloud Code
  - Co-work
  - OpenAI Codex
  - Fin
  - Elastic Search
  - Microsoft Teams
  - Microsoft Excel
  - Google Sheets
  - Claude Bot
media_books: []
status: evergreen
---
### 软件行业的“SaaS末日”

**Joe Weisenthal**: 软件公司的价值在于，当事情出错时，它们本质上成为了替罪羊，这在很多方面都有些滑稽和反乌托邦。我认为这在很多方面都是如此。是的，我的意思是，我认为这是一种真实的恐惧，对吧？我对此的看法是，目前有两种反对软件的论点。一是世界将保持不变，但软件会随着时间的推移变得越来越便宜，因为它现在构建成本更低了。我认为没有人会争辩说，由于我们在报告中列出的原因，它的构建成本没有大幅降低，我们可以进一步讨论。我们不接受这个论点，我也不接受这个论点。但第二个论点是，世界将变得非常奇怪，知识工作的方式将发生改变。如果我们展望三、四、五年后，谁知道是否还会存在客户支持代表、销售代表或软件工程师？我认为这就是导致近期股价受到冲击的原因。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: The idea of software companies value lying in being a scapegoat, essentially, for when things go wrong is, kind of funny and dystopian. I think in many ways. Yeah. I mean, I think, you know, it's a real fear, right? And the way I think about it is there are two arguments against software right now. One is the world is going to stay the same, but software just going to get a lot cheaper over time now that it's cheaper to build. And I think there's no one who would argue that it's not gotten dramatically cheaper to build for reasons that we laid out in our deck, and we can talk through it more. We don't buy that argument. I don't buy that argument. But the second is the world's about to get really weird, and the way that knowledge work happens is going to change. And if we think out three or four or five years, who knows if there will even be customer support reps or sales reps or software engineers? And I think that's what's causing the kind of hit to the share prices lately.

</details>

**Joe Weisenthal**: 大家好，欢迎收听《**Odd Lots**》播客的又一期节目。我是**Joe Weisenthal**，她是**Tracy Alloway**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Hello and welcome to another episode of the Odd Lots podcast. I'm Joe Weisenthal and I'm Tracy Alloway.

</details>

**Tracy Alloway**: **Joe**，我们正在2月11日录制这期节目，**IGV**，也就是软件ETF，今天又下跌了3%。软件行业一直很糟糕。大家都在谈论“**SaaSpocalypse**”（SaaS末日）。我的意思是，SaaS的妙处在于有很多词语与它押韵，有很多同音词，所以你可以玩这些双关语。SaaS崩溃。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Tracy, we're recording this February 11th and IGV, the software ETF down another 3% today. It has been ugly in software. Everyone's throwing around the term SaaSpocalypse. I mean, the great thing about SaaS is there are a lot of things that like, rhyme with it, a lot of homonyms. So you can you can make all those puns. Saas Crash.

</details>

**Joe Weisenthal**: 是的，没错。SaaS是垃圾，随便怎么说。但我正在看**Salesforce**的股价。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, exactly. SaaS is trash. Whatever. But I'm looking at the, the share price of Salesforce.

</details>

**Tracy Alloway**: 哦，是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Oh yeah.

</details>

**Joe Weisenthal**: 特别是，因为我总是把**Salesforce**看作是某种象征性的公司，一个软件公司的典范，我不太确定他们具体做什么，但它的股价确实很难看。自2025年初达到峰值以来，它的股价基本上已经腰斩了，不是吗？现在是184美元。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: In particular because I always think of Salesforce as sort of like emblematic the poster child. Yeah. Poster child of like a software company that I'm not really sure what they do. But yeah, it's it's just ugly. It's basically been cut in half, hasn't it, since its peak, like in early 2025. Right now it's 184, 84.

</details>

**Tracy Alloway**: 都是你的错，**Joe**。

<details>
<summary>Original English</summary>

**Tracy Alloway**: And it's all your fault, Joe.

</details>

**Joe Weisenthal**: 都是我的错。没错。因为今年早些时候，我们从圣诞假期回来后，我看到大家都在玩**Cloud Code**，我也必须尝试一下。我们做了一期节目，所以人们就想，哦，如果**Joe**都能搞懂**Cloud Code**，那这些公司肯定没什么价值了。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: It's all my fault. That's right. Because, earlier in the year, after we got back from, Christmas vacation or Christmas break, you know, around that, I seen everyone playing around with cloud code, and I had to do it. We did an episode, and so people are like, oh, if Joe lives at all, can, like, figure out cloud code, that there must not be any value to any of these, companies at all there.

</details>

**Tracy Alloway**: 你提到了**Salesforce**，那还不是最难看的。我正在看**Atlassian**，它生产很多工作效率软件。

<details>
<summary>Original English</summary>

**Tracy Alloway**: You know, you mentioned Salesforce. That's far from the ugly one. I'm looking at, Atlassian, which makes a lot of like workforce productivity.

</details>

**Joe Weisenthal**: 是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah,

</details>

**Tracy Alloway**: 比如一些**Slack**的竞争产品等等。它在2021年曾是450美元的股票，现在是86美元。所以，是的，它很难看。而且，正如你所说，每个人都意识到，如果任何一个傻瓜都能编写软件，那这些公司可能就没什么价值了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: like some slack competitors and stuff. That was a $450 stock back in 2021. That's an $86 stock. So like yeah it's ugly. And yeah, as you said, everyone is realizing that if any old fool can, can write software, maybe these companies.

</details>

**Joe Weisenthal**: 是的，它们没什么价值。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, they don't have much value.

</details>

**Tracy Alloway**: 我的意思是，我只想说现在不仅仅是软件行业。我们看到一系列的担忧，每次AI做了一些事情或创造了新产品，它就会冲击某个特定行业。周一，是保险业，保险经纪人。今天，2月11日星期三，我想是一些股票经纪公司。你只需要说“AI”，是的，行业，就会引起很多焦虑。但有些事情让我觉得不合逻辑，或者说我正在努力理解的是：当然，我们任何人都可以轻松编写一些软件，但编写软件对这些公司来说是一个成本中心，对吧？如果你是**Salesforce**，你可以轻易地降低构建软件的成本，这应该对你也有利。软件公司不仅仅是代码生成，因为它还有各种网络效应和链接。软件公司显然不仅仅是代码。所以，代码可以生成得更便宜这一事实，并不让我觉得“哦，这些公司不如以前值钱了”。当然。

<details>
<summary>Original English</summary>

**Tracy Alloway**: I mean, I will just say it's not just software right now. So we're seeing this sort of rolling series of concerns where, like, every time I does something or create some new product, it hits a particular industry. So on Monday, it was the insurance industry, insurance brokers. And, you know, today, Wednesday, February 11th, I think at some of the broker, stock broker firms. And, you know, all you have to do is just say I yeah, industry. And there's a you know, it's really there's a lot of anxiety, but there's something that like doesn't make any sense to me about this or the thing that I'm wrapping my head around. It's like, sure, any of us could easily like, write some software, but like software, writing software is a cost center for these companies, right? Like if you're Salesforce and you can trivially reduce the cost of building software, that should also benefit for you. And there's a lot more to a software company than just code generation, because there's all kinds of like, you know, network effects and links into this. It's like a software company is clearly more than just code. And so the fact that maybe code can be generate generated a lot cheaper does not scream to me like, oh, these companies are worth less than they used to. Sure.

</details>

**Joe Weisenthal**: 但同时，他们的定价是基于这种假设的，对吧？就是说他们所做的事情没有竞争对手。突然之间，你可能有一个内部编辑。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: But at the same time they've been pricing their pricing is based on that assumption, right? Like that there is no competitor for what they're doing. And suddenly you might have an in-house editor.

</details>

**Tracy Alloway**: 绝对是。但是，你知道，这就像网络效应。公司会想开始构建自己的薪资软件吗？总之，我对这次抛售有很多疑问。就你而言，不不不，这是你在为引发这次抛售而赎罪。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Absolutely. But, you know, it's like network effects. And do companies want to start like building their own, like, payroll software? Anyway, I have a lot of questions about this sell off. And to your point, no, no, no, this is you, doing, like, penance first for causing causing the sell off.

</details>

**Joe Weisenthal**: 好了，我们来和一位真正能回答我们一些问题的人聊聊。我们将与一位长期从事软件领域投资的人士交谈，他最近发布了一份很棒的报告，深入探讨了“**SaaSpocalypse**”中的SaaS，以及哪些公司在AI代码生成等话题出现之前就已经蓬勃发展，哪些公司则在挣扎。我们将与**Jared Sleeper**交谈。他是**Avenir**的合伙人，该公司从事成长型私募股权投资。那么，**Jared**，感谢您的到来。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: All right, let's talk to someone who actually might be able to answer some of these, questions for us. We're going to be speaking to someone who's been in the software space, an investor in the software space for a long time, recently put out a great deck, sort of really diving into SaaS of the SaaSpocalypse. and what kinds of companies are thriving and what kinds of companies were struggling even before everyone started talking about, AI code generation and all that. We're going to be speaking with, Jared Sleeper. He is a partner at, Avenir, which does, growth investing private companies. So, Jared, thanks for coming on.

</details>

**Jared Sleeper**: 是的，我的荣幸。很高兴来到这里。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah. My pleasure. Excited to be here.

</details>

**Joe Weisenthal**: 我们为什么要和你谈话？只是，你知道，对于我们的听众来说，显然这是你第一次上播客，这很疯狂，但我们为什么要谈话？请给我们介绍一下你的背景，你在软件投资和理解这个领域方面的经验。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Why are we talking to you? Just, you know, for our listeners, apparently, this is your first time on a podcast, which is crazy, but, what are we talking. You give us a little bit about your background, investing in software and understanding the space.

</details>

**Jared Sleeper**: 是的，我的荣幸。我认为我在投资界有点不同的一点是，我花时间投资过早期初创公司、上市公司以及介于两者之间的一切。我职业生涯的一部分时间是在波士顿一家名为**Matrix Partners**的早期风险基金度过的，与一位SaaS领域的OG投资者**David Scott**合作。然后我还在**Co two**工作过，负责公共软件。所以我拥有从初创公司到大型上市公司（我过去十年一直在关注）的全面经验。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah. My pleasure. So I think one thing that makes me a little bit different in the investor world is that I've spent time investing in early stage startups, public companies, and everything in between. So I spent a chunk of my career at an early stage venture fund in Boston called Matrix Partners, working with an OG SaaS investor named David Scott. And then I was also at Co two, where I ran public software. And so I've kind of have this like experience across the spectrum, from ground floor startups to looking at the big public companies, which I've done for the last ten years.

</details>

**Joe Weisenthal**: 完美的嘉宾。完美的嘉宾。那么，请给我们描绘一下目前软件行业的情绪。人们是不是，我不知道，躲在他们的地堡里？情况有多糟糕？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Perfect guest. Perfect guest. So give us a sense of like, give us some color on the mood in software at the moment. Are people like, I don't know, hunkering down in their bunkers? How bad is it?

</details>

**Jared Sleeper**: 是的，我不断收到买方人士的短信，他们都在，你知道，收缩，说“我不敢相信这正在发生。它还能跌得更低吗？我一直说这是我第100次抄底了。”你知道，你用了“**SaaSpocalypse**”这个词，我的说法是“SaaS萎缩”，这确实是这样的时刻之一。我们之前在开始前也稍微谈过这个。但软件行业真正引人入胜的一点是，即使在买方，也很少有人真正理解软件是如何运作的。它是一个有点像**罗夏测试**（Rorschach test）的行业，没有人登录过**Salesforce**并点击过，更不用说做过**Salesforce**管理员并理解其全部复杂性了。所以当出现恐慌时，对这些股票的支持很少，人们，你知道，很容易感到害怕。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, I get texted constantly from folks on the buy side, just, you know, retrenching. I can't believe this is happening. Can it go lower? I keep saying that it's 100th time I bought the dip. You know, you use the SaaSpocalypse like SaaS atrophy is my guys, this is it's definitely one of those moments. And we were talking about this a little bit earlier before starting. But one of the things about software that's really fascinating is there's very few folks even on the buy side who really understand how software works. It's one of those Rorschach test kind of sectors where no one's no one's logged into Salesforce and clicked around, much less been a Salesforce admin and understood the full complexity. And so when there's panic, there's not a lot of support for the stocks and people, you know, get scared very easily.

</details>

**Tracy Alloway**: 我们解释一下这意味着什么。例如，在很多公司中，你是在说那些投资或交易这些股票的人，他们基本上只把它们看作是财务报表。他们对公司的财务状况和客户群有一些了解，但对产品没有很好的直觉，不像那些使用**Instagram**的人，他们可能对**Meta**有感觉，例如。

<details>
<summary>Original English</summary>

**Tracy Alloway**: We explain what this means. So for example, in a lot of companies, it's like you're saying that the people who invest or trade these stocks, they just know them as financial tables, basically. And they have some idea of their financials and some idea, their customer base, etc., but they don't have like a great intuition for the product, unlike say, you know, people who use Instagram and therefore might have a feel about meta, for example.

</details>

**Jared Sleeper**: 是的，如果你是**Lululemon**的投资者，你对这家公司做什么有一个相当扎实的理解。你可以走进商店。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, if you're an investor in Lululemon, you have a pretty solid conception of what that business is. You can go into the store.

</details>

**Joe Weisenthal**: 没错。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Exactly.

</details>

**Jared Sleeper**: 你可以购买产品，自己试穿。如果你是**Veeva**的投资者，它为制药代表制作**CRM**软件，我敢打赌，几乎没有**Veeva**的投资者曾经使用过这个产品，更不用说每天使用并理解它是如何运作的了。

<details>
<summary>Original English</summary>

**Jared Sleeper**: You can buy the product, type it to yourself. If you're investor in Veeva, which makes CRM software for pharmaceutical reps, I bet you there's almost no investors in Veeva who have ever been inside the product even once, much less used it on a day to day basis and understood how it works.

</details>

**Tracy Alloway**: 明白了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Got it.

</details>

### 软件外包的历史与粘性

**Tracy Alloway**: 那么我将追溯到很久以前，从一开始说起。为什么像支付管理系统这样的软件，历史上不是内部开发的？我们是如何形成这种模式的，即我们拥有这些庞大的软件公司，它们在今天对许多企业来说都至关重要？

<details>
<summary>Original English</summary>

**Tracy Alloway**: So I'm going to go way back in time and start, I guess the very beginning. But why is it that software like this, you know, payment management systems, whatever. Why were they historically not developed in-house? Like, how did we get this model where we have these huge software companies that are really, you know, today have been really integral to a lot of businesses?

</details>

**Jared Sleeper**: 是个好问题。你知道，在软件的早期，比如70年代或80年代，很多工作都是内部完成的。我们看到随着时间的推移，有一个非常明显的转变，转向使用第三方软件。这归结于软件的构建和维护成本很高，而且需要一个围绕它的集成生态系统，这些集成也需要高昂的构建和维护成本。所以如果你看一家软件公司，它可以负担得起拥有1000、2000、3000名工程师，加上合作团队等等，所有人都致力于为特定应用构建完美的软件。然后令人惊讶的是——这在这次对话中会更多地出现——他们并没有以那么高的价格出售它，对吧？很多软件公司会报告一个数据，就是每年向我们支付超过10万美元的客户所占的比例，而10万美元还不到一个软件工程师全职成本的一半。对吧？所以软件模式是构建一个可以应用于数千客户的产品，每个客户使用相同的产品，然后以比他们自己构建更便宜的价格出售给他们，甚至低于一个员工的成本。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah. It's a great question. You know, back in the very early days of software, like back in the 70s or 80s, there was a lot done in-house. And we've seen a very clear makeshift over time towards using third party software. And what it comes down to is the software was expensive to build and maintain, and there's this need for an ecosystem of integrations around it, which are also expensive to build and maintain. And so if you look at a software company, you can afford to have one, two, 3000 engineers plus partnership teams, etc., all working, to build the perfect piece of software for a given application. And then what's striking and this will come up a lot more in this conversation, is not selling it for that much money, right? A lot of software companies report a stat, which is the share of our customers that pay us more than 100,000 a year, and 100,000 a year is less than half of the fully loaded cost of a software engineer. Right. And so the software model was build a product that can be applied to thousands of customers, and it's the same product for every customer, and then sell it to them for way cheaper than they could ever hope to build it themselves, even less than the cost of one employee.

</details>

**Joe Weisenthal**: 我们可以。我很想谈谈长期的软件历史，甚至在，你知道，我们大量思考SaaS和初创公司等等之前。但是很多我们认为的软件巨头，尤其是在**Salesforce**之前，无论是像**SAP**、**Oracle**还是**Microsoft**，它们难道不是有很多第三方公司专门帮助你安装它们吗？**SAP**安装，那将是一个完全独立的公司，因为它太庞大、太笨重、太复杂，以至于你实际上无法自己安装，或者必须进行定制，或者其他什么，百分之百是这样。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: We could. I'd love to just sort of like talk long term software history even before, you know, we think a lot about SaaS and the startups and stuff like that. But like a lot of the big companies that we think of in software, especially like pre Salesforce, whether it's like SAP, Oracle, Microsoft, obviously don't they have like a aren't there a bunch of third party companies whose job is to just like help install it for you SAP install. And that'll be a totally separate company because it's so big and it's so unwieldy and complex that you actually you can't just like, install it yourself or it has to be customized or whatever, 100%.

</details>

**Jared Sleeper**: 是的，这其中有两点我认为很重要。一是与你现有系统的集成。对吧？很多大型老公司都有旧数据库、旧应用程序，将所有东西连接起来很重要。所以你需要软件工程师和顾问去理解这些现有系统，并将它们与新系统连接起来。但另一个可能更重要的是人员管理和变革管理。你知道，任何软件系统都是代码和所有学会使用它的独立用户的组合。如果你试图更换公司的**CRM**，这意味着要培训每个销售代表如何使用新的**CRM**并正确操作。如果他们操作错误，那么你那个季度就会失去交易。所以，你知道，投资界的一个常见说法是，如果你看到一家公司正在进行**ERP**（企业资源规划）转型——**ERP**代表企业资源规划，它是那种核心软件，包括会计、供应链等——那家公司很可能在未来一两个季度会达不到盈利预期，因为这些转型太痛苦了。所以，是的，围绕它有一个庞大的咨询复合体，他们尽力提供所需的人才，使这些转型顺利进行。

<details>
<summary>Original English</summary>

**Jared Sleeper**: And there's two parts to that which I think are important. One is the integrations into your existing systems. Right? A lot of big old companies have old databases, old applications, and it's important for everything to be stitched together. So you need software engineers and, you know, consultants to go in and understand those existing systems and kind of get them linked up to the new systems. But the other one, which is probably bigger, is just people management and change management. You know, any software system is a combination of the code and all of the individual users who have learned how to use it. If you're trying to change out your CRM at a company, that means training every single sales rep on how to use the new CRM and getting it right. And if they get it wrong, then you lose deals that quarter. And so, you know, one of the kind of tropes in investing is if you see a company that's doing an ERP transition, ERP stands for enterprise resource planning. It's that kind of core software accounting, you know, supply chain, etc. that company is probably going to miss its earnings over the next 1 or 2 quarters, because those transitions are so painful. And so, yes, there's a big consulting complex around it that does its best to come in and parachute in the talent that's required to make those transitions smooth.

</details>

**Tracy Alloway**: 这也说明了软件为何如此具有粘性，或者至少历史上是如此，它完全依赖于第三方代理。但实际上，关于这一点。我们经常听到集成这个论点。我认为我们在关于**Cloud Code**的第一期节目中也稍微谈到了它。但是，如果你有像**Cloud Code**这样的东西，你可以给它权限来修改你的电脑，那么一些集成方面的专业知识是否会消失？因为我们大概会得到AI？我猜在某个时候，考虑到它发展和改进的速度，它将能够做到这一点，比如将自己插入各种系统。

<details>
<summary>Original English</summary>

**Tracy Alloway**: And that tells you something about what makes software so sticky, or at least has historically it's third party agents all the way down, I feel. But actually on this note. So we hear the integration point brought up a lot. And I think the very first episode we did on Cloud Code, we talked a little bit about it as well. But like if, if you have something like Cloud Code where you can just give it permissions to make changes to your computer, does some of that integration expertise actually start to go away? Because presumably we are going to get AI? I would assume at some point, given the rate that it's developing and improving, that will be able to do this, like plug itself into various systems.

</details>

**Jared Sleeper**: 是的，百分之百。我认为编写集成代码的挑战正在消失。那不是大多数集成的主要挑战。主要挑战在于真正深入理解旧系统以及它如何映射到新系统。而现实是，在大多数组织中，这是一个人的问题。比如，“嘿，这一列写着‘状态2004’，那是什么意思？”“它如何映射到我们正在构建的新系统？”所以我必须去和某人交谈才能理解它。因此，有些类型的集成，我认为它们现在已经有效地解决了，因为你可以快速地在**Cloud Code**中编写聊天内容，然后得到一段完美编写的软件来实现它。然后还有一些是根本上的人类问题，因为数据不存在于数字空间中。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, 100%. I think the challenge of writing the code for the integrations is going away. That's not the bulk of the challenge for majority of integrations. It's about really deeply understanding the prior system and how it maps to the new system. And the reality is, within most organizations, that's that's a human problem. It's hey, this column says status 2004. What does that mean? Like, how does that map to the new system that we're building? So I have to go talk to someone and understand it. And so there's certain types of integrations where I think they're effectively solved problems now because you can write a quick, you know, write in the chat in the cloud code and get a perfectly written piece of software to make it happen. And then there's others that are just fundamentally human problems because the data doesn't exist in digital space.

</details>

### AI时代软件公司的价值构成

**Tracy Alloway**: 我们来多谈谈这个，因为这确实非常了不起。我不知道，它是可运行的代码。我不知道它是不是高质量的代码，但这些模型肯定可以生成可运行的代码。每当我使用它时，我都感到震惊。但请你从各种软件供应商的角度，多谈谈他们的销售内容，其中有多少是代码，有多少是其他东西，以及哪些公司更容易受到纯代码生成能力的影响？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Let's talk more about that, because really it is pretty extraordinary. The degree to which I don't know, it's working code. I don't know if it's high quality code, but certainly these models can generate, working code. And it's just it's, it blows my mind whenever I use it. But talk to us a little bit more about, from the perspective of it, various software vendors. And I'm sure there's a range about what they're selling and how much is it code versus how much is it other stuff, and which ones are sort of more exposed to the pure like code generation ability?

</details>

**Jared Sleeper**: 是个好问题，我认为。你百分之百正确。它正在生成可运行的代码。坦率地说，在过去一年左右的时间里一直如此。我大约一年前构建了我的第一个在生产环境中运行的“可爱”应用程序，在过去三个月里甚至更加强化了。对吧？我认为当人们购买软件时，他们购买的是一系列东西。我认为每个人都应该理解的一点是，**开源软件**一直存在，而且在有记录的历史上，几乎所有你可以购买的软件都有免费的开源版本。实际上，有一些上市公司是通过打包这些开源软件，添加一些自定义功能，然后提供支持来建立业务的。因为当一家公司依赖开源数据库，或者像**Elastic**公司及其**Elastic Search**产品（这是一个基础设施工具）出现故障时，他们需要有人来解决问题，既出于安全原因，也因为这可能非常复杂和技术性，他们需要快速理解。所以，你知道，历史上很大一部分故事就是这种对支持的需求。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, it's a great question I think. And you're 100% right. It's producing working code. And frankly, it has been for the last year or so, I built my first lovable app that was working in production about about a year ago, and it's even intensified in the last three months. Right. I think when people buy software, there's a set of things that they're buying. One thing that I think is important for everyone to understand is that open source software has been a thing, and there have been free, open source versions of almost any software you could buy for all of recorded history. There's actually some companies that are public that built their businesses packaging that open source software and adding a few custom features and then support on top of it. Because when a company's reliant on an open source database or a company like elastic with its Elastic Search product, which is an infrastructure tool and it breaks, they need someone to call, both for CIA reasons and because it can be very complex and technical, and they need to quickly understand it. And so, you know, that has been a big part of the story historically is that need to, you know, have support.

</details>

**Jared Sleeper**: 另一个你在作为软件供应商销售时所销售的东西，我称之为“**群体熟悉度**”（herd familiarity），这意味着地球上的每个人都知道如何使用你的软件，这简化了培训和入职流程。我举几个例子，因为我确信这对听众来说是个新词，毕竟是我编的。你知道，**Zoom**是一个很棒的业务。**Microsoft**一直在**Teams**中免费提供该产品的版本。为什么人们使用**Zoom**？因为在某些行业，几乎每个人都知道如何使用**Zoom**。他们设置好了**Zoom**，选择了虚拟背景。他们在通话的前一两分钟不会手忙脚乱。而每月20美元的**Zoom**套餐非常值得。但这同样适用于许多其他领域。例如，想想**Microsoft Excel**。你可能可以使用**Google Sheets**做同样的事情，但你真的想重新培训每个新来的人学习**Google Sheets**的快捷键而不是**Excel**的快捷键吗？这不是一个好的时间利用方式，特别是当软件已经如此便宜的时候。所以，这是人们购买软件时所购买的另一个方面，即标准化以及他们能够雇佣具备这些知识的员工。然后还有像品牌这样的东西，再次是围绕它的生态系统。所以它确实不仅仅是原始代码。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Another thing that you sell when you sell as a software vendor is what I call herd familiarity, which means everyone on Earth knows how to use your software, which just simplifies the training and onboarding workflow. I'll give a few examples, because I'm sure it's a new term for listeners since I made it up. You know, zoom is a great business. Microsoft has been giving away a free version of the product forever in teams. Why do people use zoom? Because in certain industries, almost everyone knows how to use zoom. They have their zoom set up, they have their virtual background chosen. They're not going to fumble around for the first minute or two on the call. And that's well worth the $20 a month to have a zoom plan. But that applies to lots of other areas as well. So think about Microsoft Excel. For example. You might be able to use Google Sheets to do the same thing, but you really want to retrain every person who comes in on the Google Sheets shortcuts versus the Excel shortcuts. It's not a good use of time, especially when the software is already so cheap. And so that's another kind of plank in what people are buying when they buy software is the standardization and the knowledge that they'll be able to hire employees who have that. And then there's things like brand, again, the kind of ecosystem that comes around it. And so it really is more than just the raw code.

</details>

**Jared Sleeper**: 我们一直在开玩笑，但软件公司的价值在于，当事情出错时，它们本质上成为了替罪羊，这在很多方面都有些滑稽和反乌托邦。是的，我的意思是，我认为这是一种真实的恐惧，对吧？我对此的看法是，目前有两种反对软件的论点。一是世界将保持不变，但软件会随着时间的推移变得越来越便宜，因为它现在构建成本更低了。我认为没有人会争辩说，由于我们在报告中列出的原因，它的构建成本没有大幅降低，我们可以进一步讨论。我们不接受这个论点，我也不接受这个论点。但第二个论点是，世界将变得非常奇怪，知识工作的方式将发生改变。如果我们展望三、四、五年后，谁知道是否还会存在客户支持代表、销售代表或软件工程师？我认为这就是导致近期股价受到冲击的原因，这种**终极价值担忧**（terminal value concern）。

<details>
<summary>Original English</summary>

**Jared Sleeper**: We've been joking about this, but the the idea of software companies value lying in being a scapegoat, essentially for when things go wrong is, kind of funny and dystopian. I think in many ways. Yeah. I mean, I think, you know, it's a real fear, right? And the way I think about it is there are two arguments against software right now. One is the world is going to stay the same, but software just going to get a lot cheaper over time now that it's cheaper to build. And I think there's no one who would argue that it's not gotten dramatically cheaper to build for reasons that we laid out in our deck, and we can talk through it more. We don't buy that argument. I don't buy that argument. But the second is the world's about to get really weird, and the way that knowledge work happens is going to change. And if we think out three or four or five years, who knows if there will even be customer support reps or sales reps or software engineers? And I think that's what's causing the kind of hit to the share prices lately is this terminal value concern.

</details>

**Joe Weisenthal**: 是的，这很有趣。所以有一家公司与你所说的灾难相关联，一家被卷入其中的公司，它吹嘘所有的私募股权、私募信贷。我阅读了他们的电话会议记录，他们的CEO说：“我们不仅没有看到红灯，甚至没有看到黄灯，我们实际上看到了很多绿灯。”这我认为非常有趣，因为它符合这样一种观点：今年可能很好，明年可能很好，后年也可能很好，然后再过一年可能就归零了。或者至少这就是焦虑所在，存在这种**终极价值**。对吧？就像我们面前有一个悬崖。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, it was interesting. So one of the companies that's sort of been associated with the, would you say catastrophe, one of the companies that's sort of been caught up with this, blew all the private, private investing firm private credit. I read through their conference call and their CEO was like, not only do we not see red light. Yeah, mean do we not even see yellow light? We actually see a lot of green lights, which I think is really interesting because it sort of can fit with this idea of this year could be fine, next year could be fine. Do you have to that could be fine. And then the year after that could be zero. Or at least that's the anxiety that there is this terminal value. Right. There's like a cliff for us.

</details>

**Jared Sleeper**: 有这个悬崖。是的。

<details>
<summary>Original English</summary>

**Jared Sleeper**: There's this cliff. Yeah.

</details>

**Jared Sleeper**: 我认为这真的很有帮助。你知道，这是我们报告的第二次迭代。所以我们有点强迫自己重新审视自上次报告以来实际发生了什么。对吧？软件行业有一个非常清晰的模式。过去五年发生了什么，那就是疫情。人们一开始很恐慌，但很快就清楚，疫情是SaaS的加速器，因为每个人都试图将公司数字化。所以你看到了业务增长率和净留存率的飙升。在2021年，中位数软件公司的增长率达到了略高于40%的峰值。这是非常不错的年化增长。然后出现了一个后遗症。增长放缓了。我们在18个月前写道，这反映了该行业正在成熟。采用速度放缓了，因为大多数人在疫情压力下已经采用了他们所需的软件。所以在那之后的几年里，我们看到整个行业的增长率都在下降。到去年初，中位数公司的增长率是18%，而不是40%。所以你看到了相当大的回撤。

<details>
<summary>Original English</summary>

**Jared Sleeper**: I think it's really helpful. You know, this is our second iteration of the deck. And so we kind of force ourselves to recenter on what actually happened since the last deck. Right. And there's a very clear pattern in software. And what happened over the last five years, which is the pandemic. People freaked out at the beginning, but it was rapidly clear there was an accelerant for SaaS As everyone tried to digitize their companies. And so you had a spike in the growth rate and net retention of the businesses. It peaked at just over 40% in 2021 for the median software companies. That's really nice annualized growth. And then there was a hangover. And that slowed down. And we wrote 18 months ago that that reflected the sector sort of maturing. The adoption had just slowed down because most folks had adopted the software that they needed under the pressure of the pandemic. And so for the last few years after that, we saw this degradation in growth rates across the sector. By the beginning of last year, the median company was growing 18% instead of 40%. So you saw a pretty significant drawdown.

</details>

**Jared Sleeper**: 令人着迷的是，如果你看这些公司去年的实际财务表现，它相当不错。增长率保持稳定，第三季度再次达到18%。净留存率也一直保持在约110%。这意味着现有客户的收入与前一年这些客户的收入相比。所以客户群中没有出现流失问题，也没有出现扩张不足的问题。而且，很多公司实际上正在加速增长，或者预期会加速增长。我们有一张图表显示，这些公司的数量在过去连续三个季度中每个季度都在增加。所以目前围绕**终极价值**有很多事情正在发生。但很难说这是今天正在发生并体现在数字中的事情。

<details>
<summary>Original English</summary>

**Jared Sleeper**: What's fascinating is that if you look at the actual financial performance of the companies in the last year, it's been pretty good. That growth rate has held it was 18% again in Q3. Net retention has also been consistent at about 110%. So that's revenue from existing customers over the same revenue from those customers the prior year. So there's not a churn issue developing or a lack of expansion within the customer base. And, and a lot of companies are actually accelerating growth or guiding to accelerating growth. We have a chart showing the number of those companies has increased each quarter over the last three successive quarters. And so there's a lot going on right now with the terminal value. But it's very hard to argue that this is something that's happening today and showing up in the numbers.

</details>

**Joe Weisenthal**: 问题是投资者很精明，对吧？他们一直在关注。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: The thing is investors are sharp, right. And they're they're constantly looking.

</details>

**Jared Sleeper**: 是的，我的意思是，看看**Chegg**。对吧？在**ChatGPT**问世后，它迅速下跌。那是完全正确的。投资者走在了前面。当然，在前几个季度，**Chegg**的管理团队，你知道，把头埋在沙子里。但后来很明显，这对他们的业务来说确实是生死攸关的问题。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah. I mean, look, look, look at Chegg. Right. Which went down very quickly, in the aftermath of ChatGPT coming out. And that was completely correct. Right. Investors were ahead of that. And of course, for the first few quarters, the management team of Chegg, you know, had their heads in the sand. But then it became clear that it really was existential to their business.

</details>

**Joe Weisenthal**: 那是一张有趣的图表。我以为我看到了一个打字错误，因为我看到，哇，就是那个。**Chegg**曾是100美元，将近100美元。它在2021年2月曾是近100美元的股票。现在是0.60美元的股票。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's a fun chart. I thought I was looking at a typo because I saw wow, that was it. That was a check was 100, nearly 100. It was a near 100 stock. In February 2021. It is now a 60 $0.01 stock.

</details>

**Jared Sleeper**: 没错。你必须相信市场。就像**ChatGPT**一问世，人们就说：“这家公司有大麻烦了。”他们没有等到它体现在财务业绩中。所以人们的想法是有信号的。

<details>
<summary>Original English</summary>

**Jared Sleeper**: That's right. And you have to give the markets credit. Like the second ChatGPT came out. People were like, this company's in big trouble. They didn't wait for it to hit the financial results. And so there is signal in what people think.

</details>

### 数据在AI时代的重要性

**Tracy Alloway**: 你能告诉我们吗？我还有很多问题，但简单地说，数据在这一切中扮演什么角色？因为我们听到的关于AI的另一件事是，模型可能没那么重要，但你所能访问的实际数据很重要。我想SaaS公司的客户本身拥有自己的数据。SaaS公司也拥有自己的数据吗？他们能以此为基础进行构建吗？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Can you talk to us? I have a bunch more questions, but just briefly, where does data actually fit into all of this? Because the other thing we hear about AI is like, maybe the models don't matter that much, but it's the actual data that you have access to. And I imagine the customers themselves of SaaS companies, they have their own data. Do the SaaS companies have their own data as well? Can they build off of that?

</details>

**Jared Sleeper**: 是个好问题。我们就在世界上最大数据公司之一。是的，所以非常恰当。完全披露，数据在这个世界中肯定会变得更有价值。如果你考虑一个风格化的AI模型，它可能在一个领域拥有博士级别的智能。但如果你雇佣一个博士到你的公司，让她第一天就坐下来工作，她不会很有用，对吧？她必须理解组织如何运作，东西在哪里，我应该相信这张图表还是那张图表？我需要访问**Google Drive**，我需要访问**Slack**。我需要花一些时间阅读。所以我们称之为这种**上下文**（context），对吧？这是AI完成某项任务所需的所有额外信息，无论它有多智能。我们在报告中的图表中也写到了这一点，但谁会成为这个**上下文系统**，这是一个真正的问题。你说的没错，很多软件公司确实拥有一池非常重要的数据。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, it's a great question. And we're here at one of the world's biggest data companies. Yeah. So very apt. Full disclosure data is definitely something that gets more valuable in this world. If you think about a stylized AI model, it could have PhD level intelligence in a domain. But if you hired a PhD into your company and sat her down on her first day, she wouldn't be very useful, right? She would have to understand how the organization functions where things live. Do I trust this chart or that chart? I need access to the Google Drive. I need access to slack. I need to spend some time reading up. And so what we call call this kind of context, right? It's all the extra information that an AI needs to get something done, no matter how intelligent it is. And we wrote about this in the chart in the deck, but there's a real question of who becomes that system of context. And you're right, a lot of the software companies do sit on a pool of very important data.

</details>

**Jared Sleeper**: 举个例子，**Salesforce**。对吧？**CRM**是你记录每个客户、每个潜在客户、所有历史互动、销售代表关于情况的笔记、账户状态、客户支持请求的地方。对于大型企业来说，它是一个极其复杂的软件。显然，如果你是一个在公司内部工作的AI代理，你需要访问这些信息才能完成几乎任何事情。对吧？但你需要的不止这些。你不知道昨晚销售晚宴上发生了什么，除非销售代表做了非常详细的笔记。我可以告诉你，软件领域的一个常见经验是，他们不会做非常详细的笔记。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Let's talk about Salesforce, for example. Right. CRM is where you track the records of every customer you have, every prospect in your pipeline, all of your historic interactions with them, notes from sales reps on what's going on, the status of their account, their customer support requests. It's an incredibly complex piece of software for a large enterprise. And obviously, if you are an AI agent working within a company, you would need access to that in order to get almost anything done right. But you need more than is there. You don't know what happened at the sales dinner last night, unless the rep took really detailed notes. And I can tell you one comment learning and software is they do not take very detailed notes.

</details>

**Joe Weisenthal**: 所以你有一个销售员，对吧？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So you had a salesperson, right?

</details>

**Jared Sleeper**: 是的，没错。人们认为软件管理团队确切知道发生了什么，但他们正在查看非常混乱的**Salesforce**数据，并尽力而为。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, exactly. People assume that software management teams know exactly what's going on, but they're looking through really messy Salesforce data, and doing their very best.

</details>

**Joe Weisenthal**: 现在我正在想象一个销售代理，它会说“昨晚派对上的赤霞珠葡萄酒非常美味”，然后把所有这些不相关的日记条目都放进去。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And now I'm imagining a sales agent being like the Cabernet was exquisite at last night's party. Just putting in all these irrelevant, like, diary entries.

</details>

**Jared Sleeper**: 没错。但很多**上下文**确实存在于人类大脑中。你知道，销售代表在晚宴上遇到一个人，了解他们的孩子，弄清楚他们支持哪个运动队，而他们不会自动将所有这些信息输入到**CRM**中。所以，现在有一场竞赛，旨在收集AI代理实际采取主动行动所需的信息。软件公司在这方面有优势。但也有一些AI原生初创公司正在涌入，构建实际的代理，它们正在自己努力收集这些**上下文**。这就是我们在报告中强调的其中一场战役：谁赢得了这场战役，谁就有机会成为一家非常有价值的公司。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Exactly. But a lot of that context does live in human brains. You know, a sales rep meets a person at dinner, gets to know their kids, figures out what sports team they root for, and they're not automatically pumping all of that into the CRM. And so there's this race to collect the information that an AI agent would need in order to actually take proactive action. And the software companies have a position there. But there's also this set of AI native startups that are coming in, building actual agents who are doing their own work to collect that context. And that's one of the battles that we saw, you know, kind of highlighted in our deck is whoever wins that has a chance to be a really valuable company.

</details>

### 软件行业风险与DocuSign案例

**Tracy Alloway**: 我在想，我想你在报告中也提到了这一点，但当我想到软件时，我有点像是在一个光谱上思考。你知道，我想到**Salesforce.com**，它是一个平台，有第三方开发者在**Salesforce**之上进行构建，他们提供各种服务。然后我想到一些利基产品，比如这家公司为牙医诊所制作销售点软件。他们通过提供免费的支付终端来推广。他们加入了**Y Combinator**。然后他们签下了10,000家牙医诊所，这些诊所每月向他们支付200美元，永久获得访问权限。你知道，我只是编造的，但像这样的事情，这个光谱的哪一端风险更大？这个光谱是思考这个行业的合法方式吗？或者无论你往哪里看，都存在某种威胁？

<details>
<summary>Original English</summary>

**Tracy Alloway**: You know what I think about, and I think you talk about this in your deck, but when I think about software, I sort of have on the one like if there's a spectrum, you know, I think about, Salesforce.com, which is a platform and there's third party developers that build on top of Salesforce, and they sort of offer and everything. And then I think about something niche like, this is the company that makes point of sale software for dentist's office. And they went around by giving them free, free payment terminals. And they joined Y Combinator. And you know, they signed up 10,000 Denny's office and then they pay those offices, pay them 200 a month, forever for access to that, you know. Well, no, I'm just making it up, but things like that, like, is there a side of the spectrum that's more at risk here? Is that spectrum legitimate way to think about the industry, or is there a thread some sort of wherever you look?

</details>

**Jared Sleeper**: 是个好问题。我的意思是，当然，在世界变得非常奇怪的情况下，不清楚哪里可以免受威胁。但思考它会是什么样子很重要。我认为最受威胁的是那些已经为企业提供高度定制软件的公司，或者需要大量实施工作的软件。原因在于，如果有人要利用这波技术浪潮来真正推进和替换核心软件系统，那将是那些拥有资源和定制化需求的企业。如果你想想中小企业，你知道，我父亲经营我们家族的杂货店已经100年了，他几十年来第一次更换了他的销售点系统。那是一个非常混乱的过程，花费了很长时间。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, it's a great question. I mean, certainly in the world gets really weird scenario. Yeah. It's not clear there's anywhere immune from threats. But it's important to think through what it looks like. I think what's most at threat is companies that serve enterprises with very customized software already, or software that takes a very heavy implementation. And the reason is, if anyone's going to take advantage of this wave of technology to really, you know, advance and replace a core system of software, it's going to be the enterprises that have the resources and the customization needs. If you think about Snbs, you know, my my dad runs our family's grocery store in the family for 100 years, and he just changed his point of sale for the first time in a few decades. And it was a really messy process. Took a long time.

</details>

**Joe Weisenthal**: 你爸爸。来吧。苹果。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Your dad. Come on. Apple.

</details>

**Jared Sleeper**: 是的，是的，当然。我们热爱杂货店，我们热爱做所有那些独立的杂货店。而且，你知道，他肯定不会坐下来自己编写一个销售点系统并把它应用到店里。我向你保证。任何牙医也不会。对吧？有可能有人会推出一个更便宜的版本。但是，你知道，我认为他不会很快切换到那个版本。他不想在未来几十年再经历那种痛苦。对吧？

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah. Yeah, sure. We love grocery and we love to do all that independent grocery. And and you know, he's certainly not going to sit down and vibe code himself a point of sale system and put the store on it. I can guarantee you that. Nor will any dentist. Right. There's a chance that someone comes along with a cheaper version. But, you know, I think that's not something he's going to switch to anytime soon. He's not he's want to go through that pain for another few decades to come. Right.

</details>

**Jared Sleeper**: 所以它确实是，你知道，一家公司一家公司地看。就像我现在正在**X**上做这个练习，每天我都会看一家不同的软件公司，然后认真思考“这家公司会是什么样子？”当你深入研究时，这真的很有趣。我给你举个例子，比如**DocuSign**，我认为对大多数投资者来说，它看起来像一个极其简单、易用的软件。对吧？它是一个电子签名软件。我们都用过。**DocuSign**今天的员工数量比**OpenAI**和**Anthropic**加起来还要多。这真是一个疯狂的数据，可能反映了劳动力在市场上的配置效率低下。但当你真正深入了解**DocuSign**的功能时，你会发现它在某些方面非常复杂，对吧？理解世界各国关于签名的法规，一个签名要合法有效需要什么？它的大部分签名都是通过API完成的，所以人们将其集成到自己的应用程序中。使用**DocuSign**有一个好处，那就是品牌效应。人们很长时间以来一直在免费提供电子签名软件。但如果你是一家有一定声誉的公司，你希望确保你的客户信任他们正在签署的内容，以及他们从你那里获得的合同。我宁愿说**DocuSign**，而不是某个随意编写的XYZ签名，对吧？所以我认为逐个公司地看待非常重要。这绝对是一个选股者的市场，有些公司要么相对免疫，要么有机会受益，而另一些公司则可能面临真正的麻烦。

<details>
<summary>Original English</summary>

**Jared Sleeper**: And so it really is, you know, kind of company by company. Like I'm doing this exercise right now on X, where every day I look at a different software company and just think hard about what will I look for this look like for this company. And it's really interesting when you press, I'll give you an example like DocuSign, which I think to most investors would seem like an incredibly simple, easy piece of software. Right? It's an e-signature software. We've all experienced it. DocuSign has more employees today than OpenAI and anthropic combined. Card, which is a crazy stat, and probably reflects that labor is inefficiently allocated across the market. But when you actually double click into what DocuSign does, there are ways in which it's very, complicated, right? Understanding the signature regulations in every country around the world. What does it take for a signature to be legally valid? Most of its signatures are done as an API, so folks are integrating it into their own applications. And there's a benefit to using DocuSign, which is the brand people have been giving away free and e-signature software for a very long time. But if you're a company of a certain esteem, you want to make sure your customers trust what they're signing and if they're getting a contract from you. I'd much rather say DocuSign than XYZ sign that someone vibe coded, right? And so I think it's really important to look company by company. It's definitely a stock picker's market where there's some that are either relatively immune or have a chance to benefit, and there's others that could be in real trouble.

</details>

### 软件公司的牛市前景与新商业模式

**Joe Weisenthal**: 那么，软件的看涨案例，或者至少是软件不会突然死亡的案例，是不是这个想法：如果你有一家软件公司，它能生产，比如**DocuSign**，你可以数字签名文件，追踪它们，分享它们等等。你可以在这个基础模型上更快、更高效地进行构建，并为客户提供新版本、新定制。所以我可以为牙医提供**DocuSign**，就以这个例子来说。我不知道牙医会有什么具体需求，我不知道，也许是标记牙齿之类的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So is the argument the bull case for software, or at least the non, sudden death case for software. This idea that like okay, if you have a software company that's producing I don't know like doc you sign, you're able to sign documents digitally and track them and share them and all of that. You can build more quickly and more efficiently off of that base model and sort of provide like new versions, new customizations for customers. So I could do doc you sign for dentists just to stick with that example. I don't know what specific needs dentists would would have, I don't know, maybe marking up like teeth or something.

</details>

**Jared Sleeper**: 是的。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah.

</details>

**Joe Weisenthal**: 然后我可以为医生提供**DocuSign**，为销售代理提供**DocuSign**等等，就这样继续下去。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And then I can do like DocuSign for doctors and DocuSign for sales agents or whatever and just keep going.

</details>

**Jared Sleeper**: 是的，我认为，我认为这是对的。我实际上认为有三种情况：软件被淘汰的情况，软件变化不大的情况，以及软件公司捕获大量价值的看涨情况。我认为这与他们增加大量特性和功能略有不同。坦率地说，我认为今天很多软件产品都相当成熟。有数千名工程师在上面工作了十年，他们已经构建了，不是全部，但大部分你希望用今天的技术构建的东西。但有了代理，就有办法自动化大部分工作。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, I think I think that's right. I actually kind of think of it as there's three cases, there's the software, it gets wiped out case, there's the not much happens to software case. And then there's the bull case where the software companies capture a lot of value. I think it's a little different than them adding a lot of features and functionality. Frankly, I think a lot of software products today are pretty mature. There's a thousand engineers working on them for ten years, and they've built not all, but most of the things that you'd want to build with today's technology. But with agents, there's ways to automate a big chunk of the work.

</details>

**Jared Sleeper**: 一家做得非常好的软件公司是**Intercom**。**Intercom**销售客户支持软件。就是网站右下角那些小部件。他们是这些小部件的创造者。他们有一个不错的业务，但后来他们非常积极地开发了一个名为**Fin**的AI产品，它可以自己回答客户支持查询。他们提到，他们的年经常性收入（ARR）现在几乎有1亿美元，而之前的基数大约是每年3亿美元。所以他们通过构建一个真正解决问题的AI原生工具，而不是仅仅作为一个人类使用的工具，大大加速了他们的业务。所以，是的，我认为这就像是超级牛市的情况，对吧？我把它看作是**从实体零售到电子商务的转型**，你有一种全新的商业模式，你有一堆传统公司，其中一些可能像以前一样存在。另一些可以从变化中受益并增加新的业务线。你看看**Walmart**的股价。它在将电子商务融入其业务方面做得非常出色。然后会有一些公司像**Sears**一样，最终消失。

<details>
<summary>Original English</summary>

**Jared Sleeper**: So one software company that's done this very well is intercom. Intercom sells customer support software. It's those little widgets on the bottom right hand corner of websites. They were the creators of that. They had a nice business, but then they got very aggressive about building out an AI product called Fin, which answers customer support queries on its own. And they've mentioned that it's almost 100 million of they are now on a base that was, you know, like 300 million a year or something like that. And so they've really accelerated their business, by building an AI native tool that actually solves the work, not just kind of exists as a tool that humans use. And so, yeah, I think that's like the mega bull case, right? I think about it like almost a transition from brick and mortar retail to e-commerce, where you have a brand new way of doing business and you have a bunch of legacy companies, and some of them will probably just exist as they always have. Others can benefit from the change and add new business lines. You look at Walmart's share price. It's done amazingly well at incorporating e-commerce into its business, and then there's going to be some that are like Sears, and go away.

</details>

**Joe Weisenthal**: 这很有趣。**Sears**总是让我想起我爸爸。他喜欢**Sears**，因为他总是说当他去购物中心时，停车场是空的，所以他总是通过**Sears**进去。然而，在那个世界里。所以我理解成本论点，它降低了代码成本。也许你会有更少的员工等等，但在这个世界里，增长实际上来自哪里？你如何扩大你的客户群？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's funny. Sears always reminds me of my dad love Sears because he always said the parking lot was empty when he goes to the shopping mall, so he always went through Sears anyway in that world, though. So I understand, like the cost argument, it brings down the cost of code. Maybe you have fewer employees or whatever, but where does growth actually come from in that world? How are you expanding your customer base?

</details>

**Jared Sleeper**: 是的，你真的会去找他们说：“我们正在取代人工劳动，现在有一个不同的定价模式。”你过去认为我们是你的员工每月支付20、30、40、50美元的工具，就好像你的员工是工匠，他们得到一个工具包来工作。现在我们只是向你出售一个员工或一个员工的工作成果。所以，你知道，我们会以每张票0.50美元或1美元的价格向你出售已解决的客户支持工单。你可以计算一下人类完成这项工作需要多少成本，或者AI完成这项工作需要多少成本。我们会更便宜，但我们也会大幅增加你支付给我们的费用，因为，你知道，我们正在切入一个完全不同的收入流。所以这就是我认为它会是什么样子。我们在初创公司领域看到了许多令人兴奋的例子，这些公司正在获得高得多的定价。这是一种全新的软件定价模式。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah, you're you're really going to them and saying, we are replacing human labor and you are you have there's a different pricing paradigm now. You used to think of us as something you paid, you know, 20, 30, 40, $50 per seat per month for as a tool for your employees. Almost as if you know, your employees are artisans and they're getting a tool kit to work with. And now we're just selling you an employee or the results of an employee. So, you know, we will sell you customer support tickets, getting closed out for $0.50 or a dollar per ticket. And you can do the math of what it would cost you for the human to do that, or what it would cost you for AI to do that. And we'll be cheaper, but we're also dramatically increasing what you pay us because, you know, we're cutting into a completely different stream. And so that's what I think it looks like. We see a lot of exciting examples in the startup space of companies that are getting much, much higher pricing. And this is a totally new pricing model for software.

</details>

**Joe Weisenthal**: 你刚刚录制了另一集节目，嘉宾也提到了这一点，但请告诉我们。所以这就像是**基于结果的定价**。请告诉我们。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: If you just recorded another episode and they the guests sort of teased at that, but talk to us about. So it's like results based pricing. Talk to us.

</details>

**Jared Sleeper**: 是的。这是一种**基于结果的定价**。关于它最终将如何演变，有很多问题。从根本上说，这些公司正在做的是，它们正在**转售智能**。对吧？核心模型供应商，**OpenAI**、**Anthropic**、**Google**，已经创造了一种获取弹性智能的方式。如果你有正确的数据，并且能够正确地驾驭它，你现在就可以将其出售给你的客户。一个悬而未决的问题是，你如何根据智能来定价？所以，我今天早上和一个人谈话，他说他认为智能的毛利率达到50%左右是合适的，但我们看到初创公司今天的做法差异很大。有些公司在模型供应商之上获得了80%的毛利率。另一些则获得了20%。但无论如何，绝对真实的是，如果你能做到这一点，你获得的定价总金额会比以前高得多，在某些情况下甚至是数量级的。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah. It it's it's a result based pricing. There's a lot of questions on how it will ultimately shake out. Fundamentally what these companies are doing is they are reselling intelligence. Right. The core model vendors, OpenAI, anthropic, Google have created a way to get elastic intelligence. And if you have the right data and you can put the right harness around it, you can now sell that to your customers. What's an open question is how do you price that relative to the intelligence? So, I was talking to someone this morning who said they think 50% gross margins on intelligence are about right, but we see a lot of variance in how startups are doing it today. Some are getting 80% gross margins on top of the model vendors. Others are getting 20%. But in what's absolutely true in any case is if you're able to do that, you get much, much higher pricing in total dollars than you did before orders of magnitude in some cases.

</details>

**Joe Weisenthal**: 但要明确一点，成本节约不能定价太高，以至于使用软件来产生这些结果的公司无法省钱，对吧？这是一种平衡行为，百分之百是这样。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: But just to be clear, like the cost savings, it can't be priced so high that the company that's using the software to produce these outcomes like, isn't saving money, right? Like that's the the balancing act 100%.

</details>

**Jared Sleeper**: 但我认为如果你考虑一下我们之前谈到的软件定价，对吧？想想**Salesforce**，在精英层级，每月每用户80、90、100美元。所以按整数计算，每年每用户1000美元，而销售代表平均每年可以赚25万到30万美元。如果你有一种技术可以取代销售代表，你可以收取5万美元。仍然可以给客户带来5倍的投资回报率。然后你就有效地获得了50倍的收入分成。所以这是一个令人兴奋的机会，这无疑让初创公司领域的人们感到兴奋。如果你和硅谷的人交谈，他们对以这种方式真正扩大科技支出感到垂涎三尺。这也是那些做得好的软件公司的机会。

<details>
<summary>Original English</summary>

**Jared Sleeper**: But I think if you think about when you talk about this little earlier thing about where software pricing was already right, you know, think about Salesforce, you know, at the elite tier, you know, 80, 90, $100 per user per month. So for round numbers, say, 1,000 per user per year for sales reps who could be making, on average 250 $300,000 per year. If you have a technology that can come in and replace a sales rep, you can charge $50,000. Still, give the customer A5X ROI. And then you've you've effectively 50 but your take rate on that revenue. And so that's exciting opportunity that that's that has people excited and startup land for sure. If you talk if you talk to folks in Silicon Valley, they are foaming at the mouth about the opportunity to really expand tech spend in this way. And that's also the opportunity for the software companies that get it right.

</details>

### AI模型提供商的潜在风险与策略

**Joe Weisenthal**: 肯定还有另一个风险，那就是如果你能以80%的毛利率转售智能，那么对于模型制造商本身来说，他们会想：“好吧，我们为什么要仅仅成为——这听起来会很奇怪——我们为什么要成为‘愚蠢的智能’？”对吧？这有点像我们不想。他们说我们不想成为“**愚蠢的管道**”（dumb pipe）。我们在云时代看到了这一点，对吧？**Azure**、**Google Cloud**和**Amazon**都不想仅仅成为商品化的云。他们开始构建像医疗未来这样的东西。他们想让自己与众不同。所以对于转售智能的公司来说，这一定是一个风险，因为这太有利可图了。那么你如何看待核心模型制造商本身？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: There must be another risk, too, which is that like if you could sell, if you could sort of resell intelligence at, say, an 80% gross margin, then for the model makers themselves, they're like, well, why do we just want to be this is going to sound weird. Why do we want to be the dumb intelligence? Right? Right. That's sort of like we don't. They said we don't want to be the dumb pipe. We saw that like in the cloud era, right? The the Azure's and the Google Cloud and the Amazon one, they didn't want to just be commodity cloud. And they started building like medical futures. They wanted to differentiate themselves. So it must be a risk for the companies reselling intelligence that it's so lucrative. And then like, how are you thinking about the core model makers themselves.

</details>

**Joe Weisenthal**: 是的。他们如何考虑扩展，是的，扩展到这些领域，而不仅仅是为他们提供智能管道。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. And how they're thinking about expanding like, yeah, expanding into some of these fields rather than just piping in intelligence for them.

</details>

**Jared Sleeper**: 嗯，你看，我的意思是，就像在任何情况下一样，他们都必须做出决定，对吧？所以**Amazon**，你知道，建立了**AWS**，他们必须决定我们要在哪里施压，在哪里不施压。我们要销售数据库软件，还是让其他供应商在我们之上做这件事？他们就是这样做出这些决定的。真正有趣的是，如果你看看基础模型供应商，他们一直在竞相进入应用层。**Cloud Code**、**Co-work**和**OpenAI Codex**都是人们下载和使用的应用程序。对吧？我认为这反映了这样一种理解：让用户习惯使用你的应用程序是有价值的。否则，你知道，你可能会面临被商品化的API的风险。人们在你和那种应用程序供应商之间来回切换，而那种应用程序供应商拥有控制权。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Well, look, I mean, like, like in any situation, they're going to have to make decisions, right? So an Amazon, you know, built AWS, they had to decide where are we going to press and where are we not are we going to sell database software or are we going to let other vendors do that on top of us? And they kind of made those decisions as it, as it went out. What's really interesting is if you look at the foundation model vendors, they have been racing towards the application layer. Both Cloud Code and Co-work and OpenAI Codex are applications that people download and use. Right. And I think that reflects this understanding that there is value in getting the users used to using your application. Otherwise, as you know, you maybe you risk being an API that's commoditized. People switch back and forth between you and that kind of application vendor has that control.

</details>

**Tracy Alloway**: 所以软件的一个优势是这种网络效应带来的舒适感，软件是管理层的安全毯。对吧？但同时人们也越来越习惯于AI。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So one of the advantages that software has is like this network effect comfort software as a security blanket for management. Right. But at the same time people are getting really comfortable with AI.

</details>

**Joe Weisenthal**: 是的。就像告诉他们一切。我一直在想，如果软件销售的一部分是这种舒适感，但AI正在迅速成为你无所不谈的东西。那么它最终会不会变成一个做所有这些不同事情的门户？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. Like telling them everything. And I keep thinking like if part of the part of the sales pitch for software is like this sense of comfort, but then AI is rapidly becoming the thing that you talk to for every thing. Like, does it eventually just become a portal for doing all these different things?

</details>

**Jared Sleeper**: 这是一个非常有趣的问题。这可能是企业买家思维和人类思维之间差异最大的地方。对吧？我相信你们都见过**Claude Bot**，以及这种开源代理的兴起，人们为自己部署它们，让它们访问所有东西，他们的整个电脑等等。

<details>
<summary>Original English</summary>

**Jared Sleeper**: It's really interesting question. And this is where there's probably the biggest disparate between how enterprise buyers think and how humans think. Right. I'm sure you guys have seen Claude Bot. And the kind of rise of this, like, you know, open source agents that people are deploying for themselves, giving it access to everything, their whole computer, etc..

</details>

**Joe Weisenthal**: 那是**Joe**。是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's Joe. Yeah.

</details>

**Tracy Alloway**: 不，我没有安装。我没有安装**Claude**。

<details>
<summary>Original English</summary>

**Tracy Alloway**: No, I didn't install. I didn't install Claude.

</details>

**Joe Weisenthal**: 哦，你不知道？我正在设置我的。等等，旁边有一个锤子。我真的很好奇。为什么不呢？因为这个。是的，因为那个。而且它看起来像潜在的令牌浪费等等。是的。然后事实证明，有一段时间在我的书上，那是所有API的社交媒体，所有API都在一个面向公众的数据库中可用，任何人都可以阅读。所以它是一个完全开放的系统，必须修复。所以，你知道，企业确实担心这些事情，而且他们有充分的理由担心。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Oh, you didn't know? I'm getting mine set up. Wait, one with a hammer next to it. I'm really curious. Why not? Because of this. Yeah, because of that. And I just seemed like a potential waste of tokens and stuff, and. Yeah. And then it turned out that for a while on my book, which was the social media for like, all of the peat, all the APIs were available in a public facing database that anyone could go read. And so it was like a completely open system that had to get fixed. And so, you know, enterprises really do worry about this stuff, and they worry about it for good reason.

</details>

**Jared Sleeper**: 我再给你一个非常有趣的例子。有很多初创公司可以帮助你录制**Zoom**通话并转录它们。所有这些**Zoom**通话随后都变得具有法律可发现性，因为它们被转录到某个地方。所以硅谷的风险投资家会拒绝使用它们，而另一些公司则全力以赴，记录所有发生的事情，以便将这些信息作为**上下文**上传到AI中。我认为这是一个非常，非常好的观点。你知道，让我思考的一件事是，那些愿意规避规则或，你知道，玩得比较随意（play fast and loose）的公司，在未来两三年内会发展得快得多。而大型老牌公司之所以挣扎，原因之一是它们确实必须关心这些事情。它们有东西要保护。它们不想被起诉。它们无法应对重大泄露。而初创公司能够更快地行动。

<details>
<summary>Original English</summary>

**Jared Sleeper**: I you another really interesting example says, a bunch of startups that help you record zoom calls and transcribe them. All of those zoom calls then become legally discoverable because they're transcribed somewhere. And so you have VCs in Silicon Valley who will refuse to use them, and you have other firms that are all in and recording everything that happens across the board so that they can upload that into AI as context. I think it's a really it's a really great point. You know, and one of the things that makes me wonder is companies that are willing to skirt the rules or, you know, play fast and loose will be moving much faster over the next 2 or 3 years. And one of the reason big incumbents struggle is because they actually do have to care about this, this stuff. They have stuff to protect. They don't want to be sued. They can't handle a major breach. And startups are able to just move faster.

</details>

### 软件公司的成本与裁员潮

**Tracy Alloway**: 鉴于此，每次软件股因这个原因被抛售时，人们都会说：“哦，他们可能会去捡便宜货。”他们会说：“什么便宜？什么好东西被当成洗澡水一起倒掉了？”总会有一群人说：“是的，它们看起来便宜，但你考虑过**股权激励**（stock based compensation, SBC）吗？”事实证明，一旦你把这个因素考虑进去，这些公司就没那么盈利了。**Barclays**有一份非常有趣的报告，我想是**Barclays**。这很有趣。它说：“我们的欧洲投资者总是问**SBC**的问题，而美国投资者只有在危机时才问。”我认为这说明了欧洲人和美国人之间的差异。我认为那是一个引人入胜的社会学观察。但是，请告诉我们，我们应该如何看待成本？因为再次，如果代码生成是成本基础，那么这些软件公司大概也不需要那么多员工，它们也可以裁员。所以请告诉我们，我们如何看待软件公司内部的成本？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Given that, so every time, software stocks sell off with this, and people say, oh, they might go bargain hunting and they say, what's cheap and what, what, baby is being thrown out with the bathwater? Someone always a bunch of people is like, yes, they look cheap, but have you considered, stock based compensation? And it turns out that these companies are not nearly as profitable once you factor this in. It was a very interesting note from Barclays. I think it was I think it was Barclays. This is very interesting. And it said, are European investors are always asking about SBC? Are American investors only ask when there's a crisis? I think tells you something about the difference between Europeans and Americans. I thought that was a fascinating sociological observation. But, tell us, like, how should we think about the cause? Because again, if if, if code generation is a cost base, presumably these software companies don't need as many employees either, and they could pare back either. So talk to us about how we're thinking about the costs inside the software company.

</details>

**Jared Sleeper**: 好问题。是的，我的意思是，理论上当然是这样。对吧？但除了**Elon**削减了**Twitter/X** 80%的员工之外，我们真的没有看到任何公司采取行动并实现这些好处。**SBC**的争论已经持续了很长时间。在我的职业生涯中，我对此感到厌烦。这是一项真正的开支。你向员工发行股票。他们将其视为现金。他们中的许多人在股票归属当天就自动出售了。我认为它给软件公司带来的问题是，管理团队沉迷于报告**非GAAP**（non-GAAP）财务数据，这排除了**SBC**的影响。所以如果你是一位创立软件业务的技术型企业家，从未真正关心过财务方面，你是一个产品经理，你可能会认为你做得很好，因为你的CFO告诉你：“我们的**非GAAP**营业利润率是25%。”这相当不错，而实际上你正在盈亏平衡。这是一种非常普遍的情况。你知道，我们查看了整个行业，中位数上市软件公司的**非GAAP**净收入或**GAAP**净收入利润率只有5%，这不足以支撑公司的估值。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Great question. And yeah, I mean certainly theoretically true. Right. But aside from Elon cutting 80% of Twitter X's headcount, we really haven't seen any companies take the pill and kind of realize the benefits of that. The SBC debate has been going on for a long time. I've had it at nauseam over the course of my career. It's a real expense. You're issuing your employees stock. They value it like cash. Many of them auto sell it the day it vest for them. And I think what what the problem that it creates for software companies is they the management teams are addicted to reporting non-GAAP, which excludes the impact of SBC. And so if you are an entrepreneur who founded the software business who's technical, hasn't really ever cared that much about the financial side, your product person, you may think that you've been doing a good job of being a profitable company because your CFO is telling you, well, we're at a 25% non-GAAP operating margin. That's pretty good when the reality is you're running breakeven. Which is a very common state of affairs. You know, we looked at the whole universe, and the median public software company has a 5% non-GAAP net income or GAAP net income margin, which is not enough to value the companies on.

</details>

**Jared Sleeper**: 所以它创造了这样一种动态，你知道，是的，存在这种**终极价值担忧**，这是迄今为止最重要的事情，但也没有底线。对吧？我查看了**Freshworks**的财报，它是一家中端市场的客户支持和IT管理软件销售商。它的企业价值（EV）与销售额之比是1.5倍。如果它的**GAAP**利润率即使达到10%，它的市盈率也将是15倍。你知道，那是一个相当有吸引力的位置。你可能会吸引一些价值投资者，也许是一些欧洲投资者对购买它感兴趣。但它没有实质性的**GAAP**盈利。在他们的财报电话会议上，也没有真正的，你知道，走向这一目标的轨迹感。

<details>
<summary>Original English</summary>

**Jared Sleeper**: And so it creates this dynamic where, you know, yes, there's this terminal value concern, which by far the most important thing, but there's also no flaw. Right? I was looking at the earnings report from Fresh Works, which is a, a, a mid-market seller of customer support and IT management software. It trades at one and a half times EV to sales. If it ran at even a 10% GAAP margin, it'd be trading at 15 times earnings. You know that, which is a pretty attractive place to be. You could get some value investors, maybe some European investors interested in buying it there. But it doesn't have material GAAP earnings. And on their earnings call there was no real, you know, sense of trajectory towards that.

</details>

**Joe Weisenthal**: 你现在看到股价上涨了16%以上。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And you see the share price now it's over 16%.

</details>

**Jared Sleeper**: 没错。而且像营收数据实际上相当不错。所以财务方面也存在一个真正的问题。令我非常失望的是，管理团队已经将此作为一种削减成本的方式。而且，我预计他们会这样做。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Exactly. And like the top line results were actually pretty good. And so there's a there's a real issue here on the financial side as well. It's incredibly disappointing to me that management teams, having embraced this as a way to cut costs themselves. And, I expect they will.

</details>

**Joe Weisenthal**: 是的。具体谈谈这个。公司是否需要，比如，我们会在短期内看到SaaS领域的大规模裁员吗？你认为时间框架是多久？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. Talk to us about this specifically. Do companies need, like are we going to see big layoffs across the SaaS space in the near term? And what do you think is the time frame for that?

</details>

**Jared Sleeper**: 好问题。我认为会的。我认为我们已经看到管理团队确实会对价格信号做出反应。如果你看看这个行业的历史，2023年曾有一轮裁员，公司展示了利润率，然后他们在过去两年里一直抵制裁员。裁员的好处是它可以帮助你更快地行动，对吧？我认为如果你看看今天任何一家公司，不幸的是，员工存在一个光谱，他们采用AI的速度不同，他们是仍然沿用旧方式，还是正在使用**Cloud Code**、**Cloud Co-work**等工具改变工作方式。而处于低端的员工实际上正在拖慢公司的速度。他们甚至不是零边际产品，而是负边际产品。工作方式发生了如此大的变化，尤其是在软件开发领域。所以我认为管理团队会意识到裁员有两个好处。除了显而易见的痛苦和那种我从不忘记讨论的人力成本之外，一是省钱，向股东展示你们在财务上是自律的，并且可能会看到股价稳定，特别是如果你的交易倍数非常低。二是行动更快。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Great question. I think we will I think we've seen that management teams do respond to price signals. If you look at the history of the sector, it was in 2023 when there was a round of layoffs, and companies showed margin and then they've kind of resisted it for the last two years. The thing about it is layoffs can help you move faster, right? I think if you look within any company today, unfortunately, there is this spectrum of employees and how fast they've adopted AI, whether they're still doing things the old way or they're on cloud code, cloud co-work kind of changing the way that they work. And the company, the employees who are on the lower end are actually slowing you down as a company. They're not even zero marginal product. They're negative marginal product. There's just been such a change in how you work, especially in software development. And so I think management teams are going to realize that there's two benefits to actually doing layoffs. In addition to the obvious pain of it and the kind of human cost which I never, you know, forget to discuss, but one is saving money and showing your shareholders here financially disciplined and probably seeing your share price stabilize, especially if you're trading at some very low multiple. And the second is moving faster.

</details>

**Jared Sleeper**: 同样重要的是，能够支付给你的顶尖员工。硅谷的人才争夺战从未如此激烈。现在，我正在和一家我投资的私营公司交谈，他们正在不断地失去员工，流向那些高增长的AI公司，这些公司能够支付巨额的股权和股票薪酬。你希望留住优秀的人才。你不希望这些AI公司挖走所有最优秀的人，而只留下那些相对的**勒德分子**（Luddites）。所以我确实认为我们会看到这种情况。这会发生是很令人悲伤的。但这是这个行业前进的明显道路。而且我认为如果做得好，它会加速创新。

<details>
<summary>Original English</summary>

**Jared Sleeper**: And also, almost as importantly, being able to pay your top performing employees. The war for talent in Silicon Valley has never been more intense. Right now. Is talking to a private company, invested in and they're losing employees left and right to these high growth AI companies who can afford to pay huge comp packages in both equity and stock. And you want to keep your good people. You don't want it. You don't. You want your these AI companies to pluck away all of the best people and leave you, with the folks who are relative Luddites. And so I do think we'll see this. It's very sad that that will have to happen. But it's the obvious path forward for the sector. And I think if done right, it accelerates innovation.

</details>

### 软件工程师的未来职业发展

**Tracy Alloway**: 关于这一点，我有一个题外话。每当我们谈论技术颠覆时，人们都会举例说：“嗯，还记得精算师吗？还记得**Excel**出现之前，人们基本上是坐在纸笔前做数学计算的吗？”当**Excel**被创造出来时，那些人并没有消失，但他们开始做新的事情。我想现在很多人对基本商品化程序员的替代职业很感兴趣。你认为它实际会是什么样子？

<details>
<summary>Original English</summary>

**Tracy Alloway**: I have a tangential question on that note, which is whenever we talk about technological disruption, you know, people bring out examples of like, well, remember when actuaries remember when Excel was basically actual people sat down with like papers in front of them doing the math. And those people didn't disappear when Excel got created, but they started doing new things. I imagine a lot of people are very interested right now in alternative careers for basic commoditized coders. What do you think it's actually look like?

</details>

**Joe Weisenthal**: 是的。我觉得你可能有一些见解。替代方案？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. I feel like you might have some insight here. The alternative?

</details>

**Jared Sleeper**: 嗯，我认为回答这个问题有两种方式。一种是如果你想继续做程序员，你会怎么做。另一种是哪些职业会随着时间的推移仍然存在？对吧？我认为如果你思考编码正在发生什么，它让我想起了土木工程。所以这是一个有点奇怪的例子。但是，你知道，土木工程师过去常常用纸笔做微积分，计算这座桥是否能支撑住。那早就过时了。所有这些计算都由计算机完成。他们有点像点击和移动，然后他们去现场。他们收集一些数据，他们与利益相关者交谈，他们实际上是在项目管理这台可以完成他们工作中物理部分的计算机。对他们来说，理解物理很重要，以防出现奇怪的情况。但他们并没有做太多物理计算。对吧？这显然是软件工程在短期内的发展方向。在很多公司中，它已经实现了。这些公司仍然在招聘软件工程师，因为这份工作很有价值。事实上，每个软件工程师的生产力都比以前高得多。而且软件的需求是弹性增长的，世界上的软件供应仍然不足。所以还有很大的空间可以增加这些。所以我并不一定看空软件工程师的需求，至少在未来三到五年内是这样。在那之后，如果情况变得奇怪，就很难说了。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Well, so I think there's two ways to answer the question, right. There's like, what do you do if you want to stay a coder. And then there's what are the careers that are going to still exist over time? Right? I think if you think about what's happening to coding, it reminds me a lot of civil engineering. And so it's kind of a funky example. But, you know, civil engineers used to work pen and paper doing calculus will this bridge hold up or not? That's been obsolete for a very long time. All those calculations are done by a computer. They're kind of clicking and moving and they go on site. They collect some data, they talk to stakeholder, and they're effectively project managing this computer that can do the physics part of their job. For them. It's important that they understand the physics in case something looks strange. But they're not doing much physics right. That's clearly where software engineering is heading in the near term. And a lot of companies, it's already there. And these companies are still hiring software engineers because that job is valuable. And in fact, each individual software engineer is way more productive than they were before. And there's happily elastic demand for software like we still are undersupplied with software in the world. And so there's quite a bit of room to go to add those. And so I'm not necessarily bearish on the demand for software engineers, at least for the next, you know, 3 to 5 years beyond that if things get weird, hard to tell.

</details>

**Jared Sleeper**: 但对于更广泛的人群，我认为最好的建议就是**适应性**。你知道，不断尝试和测试这些工具，确保你走在它们的前沿，然后意识到什么是人类的。对吧？我认为在我的风险投资工作中，你知道，有很多数据来自人际关系，AI无法获取，你知道，AI不能打电话给另一个基金的朋友，问公司做得怎么样。至少现在还不能。

<details>
<summary>Original English</summary>

**Jared Sleeper**: But then for people more broadly, I think the best advice is just adaptability. You know, constantly trying and testing these tools, making sure you're staying at the cutting edge of them, and then being aware of what's human. Right. I think in like in my work, in venture investing, you know, there's a lot of data that comes out of human relationships that an I wouldn't have access to, you know, and I can't call its friend at another fund and ask how companies doing. Not yet at least.

</details>

**Joe Weisenthal**: 你必须先交一些朋友，对吧？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: You have to make some friends first, right?

</details>

**Jared Sleeper**: 他们正在互相交流。对吧？他们正在交流。是的。所以也许如果有一个来自**Sequoia**的AI代理和一个来自**Andreessen**的AI代理。

<details>
<summary>Original English</summary>

**Jared Sleeper**: They are talking to each other on what book? Right. They're talking on their book. Yeah. So maybe if there's an AI agent from Sequoia and an idea from Andreessen.

</details>

**Joe Weisenthal**: 总是被那个吸引大约五分钟。是的，是的。这很棒，它非常具有启发性，但也很好。还有那篇**Wired**文章，那个家伙假扮成机器人潜入，假装是作家。很明显他们没有。他们会说：“哦，我们是吗？我们为自己创造一种新语言吧。”他们没有创造新语言，对吧？但是，是的，我认为粗略的心智模型是，如果曾经有任何努力将你的工作外包给印度，是的，那就有风险，因为这告诉你这份工作可以由一个不在现场的人完成。而且，你知道，如果你喜欢独自解决问题，而不是与他人社交，你知道，埋头解决数学问题或小的编码任务，那可能也是一个相当艰难的境地。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Always intrigued by that for about five minutes. That's. Yeah. Yeah. It's pretty think it's it was very evocative but pretty well also there's that wired article of the guy who, like, infiltrated as a bot and pretended to be a writer. It was pretty obvious they didn't. They're like, oh, are we? Let's create a new language just for us. Like they're not making new languages, right? But yeah, I think I think the rough mental model is if there was any effort to outsource your job to India. Yeah, that's risk because that tells you that that job can be done by someone who's not physically present in a space. And, you know, if you like working on problems in isolation, not socially with other people, you know, grinding out math problems or little coding assignments, that's probably also a pretty tough place to be.

</details>

**Tracy Alloway**: 是的，这将是一个更社交化的世界。这是我们之前提到过的一点，这让我有点难过，那就是AI世界的优势变成了社交能力，对吧？在某种程度上，我们在这个背景下讨论过，听着，**Max**，我知道你喜欢它，**Joe**，我不喜欢。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah, it's going to be a more social world. This is something we've touched on before, which makes me kind of sad, which is the the edge in the AI world becomes like sociability, right? And to some extent, we talked about this in the context of, look, Max, I know you love it, Joe, I do not,

</details>

**Joe Weisenthal**: 我能说说我在2026年“**vibe coding**”时的一些有趣的小观察吗？第一，我没有任何技术背景。我惊讶于我能多快地建立起直觉，判断什么时候事情会出轨，什么时候做的事情看起来不对劲。我开玩笑说“**vibe coding**”就是打字，让它变得更好，然后一遍又一遍地按回车键，当它提出做一些你实际上应该做的事情时，就按“是”，这样你就能很快建立起直觉，知道什么时候不对劲。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: can I say truth to little observations from my time, vibe coding in 2026 that are interesting. One is I have zero technical background. I've been surprised by the speed with which I can build intuitions about when it's going off the rails, like went into doing something that doesn't seem right. Like I joked that five coding is just typing. Make it better. Press enter over and over again and then hitting yes, when it offers to do something you actually should do can start to build an intuition fairly quickly, like when this doesn't make sense.

</details>

**Joe Weisenthal**: 然后另一件事，这与你关于信任AI的问题有关。我正在做的一件事是让大量文档得到注释。我通过**Cloud API**来做这件事，这实际上会增加一些费用。有一次，这个API运行将花费大约200美元。它就像是：“这好吗？”我愚蠢地问了很多次：“这是好事吗？”它就像是：“嗯，当你完成这个API运行时，你将拥有一个别人没有的带注释的资产，那将非常有用。”我所做的事情有点没用。所以你不应该，就像它在推销自己一样。所以我就想：“哦，是的，**Joe**，这是API。运行这个，注释所有这些文档。”这实际上并没有很好地利用我的时间。所以你不能总是，它们只会推销这些。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And then the other thing, and this relates to your question of like trusting the AI. So one of the things I'm doing is I'm having a lot of documents get annotated. And I do that through the cloud API, which actually runs up the bills a little bit. And like one thing, this API run was going to cost like 200. And it was like, is this like and I stupidly I like ask a lot is like, is this a good thing? It's like, well, when you're done with this API, you're going to have API run. You're going to have this annotated asset that no one else has done and that be very it was sort of useless what I did. So you shouldn't as like it's selling yourself. So so I was like, oh yeah, here's the API Joe. Run this like annotate all these documents. It wasn't actually like a good use of my time. So you can't really always, they're just going to they're going to just sell these.

</details>

**Tracy Alloway**: 还有一个我感兴趣的行业。你看到像**Moody's**或**Fair Isaac**这样的公司。

<details>
<summary>Original English</summary>

**Tracy Alloway**: There's one other sectors that I'm interested in. You see, these companies like, Moody's or Fair Isaac.

</details>

**Joe Weisenthal**: 是的。全球天堂指数。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. Recipe global heaven index.

</details>

**Tracy Alloway**: 是的。它们也在被抛售。这不像，这是另一个领域，你知道，基金经理在很长一段时间内，除非情况变得非常奇怪，否则他们会以**标普500指数**作为基准很长时间，或者贷款人会使用**FICO**很长时间，等等。直觉上，这对我来说似乎是AI很难取代的东西。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yes. And it's and they're getting they're selling off to and it's not like this is another area where like it's you know, people are fund managers for a long time unless things get really weird, the super eight going to be like benchmarking themselves off of like that's 500 for a long time, or lenders are going to be using the Foco for a very long time, etc. intuitively would strike me as this would be a very hard thing for AI to replace.

</details>

**Jared Sleeper**: 我同意你的直觉，对吧？我不能说我完全理解这些公司的抛售。我不知道它们的业务中是否有一些部分更多是服务或咨询。人们认为它们是。

<details>
<summary>Original English</summary>

**Jared Sleeper**: I share your intuition, right? I can't say I fully understand the sell off in these companies. I wonder if there's not some parts of their businesses that are more services or consulting. Have them that people are.

</details>

**Joe Weisenthal**: 通常会有一些组合，对吧？比如，我认为没有人会怀疑**标普500指数**会作为一个指数被取代。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: There's often like combinations, right? Where like, I don't think anyone suspecting that like the, you know, the S&P 500 is going to be displaced as an index.

</details>

**Jared Sleeper**: 是的，我发现。是的，也许吧。但是，你看，我们生活在一个人们在AI风险出现后，非常乐意先开枪后提问的世界。

<details>
<summary>Original English</summary>

**Jared Sleeper**: Yeah I find it. Yeah. Maybe. But look, we're in a world where folks are very happy to shoot first and ask questions later once AI risk comes out.

</details>

### 对冲基金的短期主义与市场波动

**Tracy Alloway**: 实际上，回到你对冲基金的时期，现在对冲基金交易员的性质有多大程度上是，他们几乎没有承受任何下行风险的勇气，也不想因为错过而显得愚蠢，你知道，在这里承担损失。你认为这在多大程度上促成了这些市场波动？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Actually, going back to your hedge fund time, like how much is it just the sort of the nature of hedge fund traders right now where there is very little stomach to take any downside risk and appear to look stupid for missing, you know, holding the bag here. And how much do you think that is contributing to some of these market?

</details>

**Jared Sleeper**: 这是个好问题。我不会谈论我的基金，因为我认为像**Co two**这样的“老虎崽”（Tiger Cubs）在总市场份额中占比较小，就美元而言，对吧？但如果你看交易量，像**Citadel**、**Balyasny**和**Millennium**这样的“量化基金”（pod shops）占据了很大的交易量份额。是的，那些人无法承受回撤。对吧，对吧。对他们来说，可怕的是，因为它不是基本面问题。因为公司本身并没有挣扎，他们不知道什么时候会停止。对吧？所以你只能预测这件事，然后你会想：“好吧，我拿我的职业生涯打赌，人们在三到六个月后会对软件公司感觉比现在好。”你知道，**OpenAI**或**Anthropic**发布一个模型，就会带来更多的恐惧。所以我确实认为现在有很多**短期主义**。而且，再次回到**SBC**这一点，也没有估值支持，没有真正的估值支持。你知道，在正常时期，如果公司是这样，它们会回购大量股票，减少股本，派发股息。你知道，我有一个朋友在共同基金工作，那里有很多股息基金会乐意购买股息，而且公司增长10%到15%，就像很多软件公司一样。但它们没有。对吧？所以你已经失去了在估值下方设置实际底线的能力。

<details>
<summary>Original English</summary>

**Jared Sleeper**: It's a great question. I won't speak to my fine because I think Co two tiger cubs like it are a fairly small share of the overall market in dollars, right? But if you look at trading volumes the pod shops Citadel, Bally and Millennium are very large. Share the volumes. And yeah, those people can't afford drawdowns. Right, right. And the scary thing about this for them is because it's not fundamental. Like because the companies aren't struggling themselves, they have no idea when it will stop. Right. And so you're left predicting this thing and you're like, well, I bet my career that people are going to feel better about software companies in 3 to 6 months than they do right now. And you know, your one OpenAI model release or anthropic model release away from more fear. And so I do think there's a lot of short termism, right now. And there's all but again, I think come back to the SBC point, but there's also no valuation support, no real valuation support. You know, in normal times, if companies were like this would be buying back a bunch of their stock, shrinking their share count, issuing dividends. You know, I have a friend who works at a mutual fund where there's a lot of dividend funds that would love to buy dividend, and companies growing 10 to 15%. Like a lot of software companies. But they they're not. Right. And so you've kind of lost the ability to kind of put an actual floor in underneath the valuations as a result of that.

</details>

**Joe Weisenthal**: **Jared Sleeper**，非常感谢您来到《**Odd Lots**》并解释软件是如何运作的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Jared Sleeper, thank you so much for coming on Atlas and explaining how software works.

</details>

**Jared Sleeper**: 我的荣幸。

<details>
<summary>Original English</summary>

**Jared Sleeper**: My pleasure.

</details>

**Joe Weisenthal**: 这太有趣了。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That was super fun.

</details>

**Tracy Alloway**: 谢谢，**Tracy**。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Thanks, Tracy.

</details>

**Joe Weisenthal**: 我觉得这真的很有趣。我对这个想法非常着迷：短期内，大多数这些企业都做得很好。长期来看，它们可能会归零，但短期内它们也并没有真正做得很好，因为它们实际上在基础层面并没有赚到多少钱。我想这解释了为什么它们现在都在被抛售。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I thought that was really interesting. I'm very fascinated with this idea that in the short term, most of these businesses are doing fine. In the long term, they might go to zero, but also with the short term, they're not really doing fine because they actually leave you on a basis. They're not making much money. I guess that sort of makes sense that they're all selling off right now.

</details>

**Tracy Alloway**: 是的，我一直在想，这可能有点牵强，但我一直在回想那本关于工作的书。是的，还记得吗？那里的论点是，很多工作之所以存在，并不是因为人们在做任何具体的事情，而是因为它们以某种方式提供了某种社会价值。例如，你有一个人，他本质上是高级管理层的指定替罪羊。我一直在想，你知道，商业基本上是不同参与者的生态系统。所以，在新AI世界中，软件公司的角色可能会改变，它们的社会角色会改变。我不知道那样的价格或估值会是什么样子。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah, I keep thinking this is probably a stretch, but I keep thinking back to, that book for jobs. Yeah. Remember. And like the argument there is a lot of jobs exist. Not because like, people are doing anything specific, but because they're like providing some sort of social value in a way. So for instance, like you have a person who is essentially the designated scapegoat for senior management. And I keep thinking of, you know, business is basically an ecosystem of different players. So it might be that in the new AI worlds, the role of software companies just kind of changes like their social role changes. And I don't know what the price or the valuation looks like on that.

</details>

**Joe Weisenthal**: 我还是觉得，我知道，我不知道，我本来想说一些关于企业如何运作的事情，但我知道什么呢？我不知道企业未来会如何购买软件。我确实觉得这很有帮助。我真的对软件业务的运作方式一无所知，所以我发现这很有帮助。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: It still feels like to me I know, I know, I have no and I was going to say something about how businesses work and what do I know? I have no idea how businesses are going to buy software and software in the future. I did think that was really helpful. Like, I really don't know anything about how the software business works generally, so I find that very helpful.

</details>

**Joe Weisenthal**: 另一个有趣的事情是，它可能说明了这种风险，那就是即使是高端软件，价格也不是很高，对吧？所以如果你有一个销售员赚25万美元，那么**Salesforce**每年1000美元来完成他们的工作，特别是考虑到免费和开源软件已经存在很长时间了，但你仍然希望为一家管理公司等支付实施者的费用。从这里到那里，AI真正改变了软件购买的性质。这感觉你需要把它带到一个奇怪的领域，但也许事情会好起来。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: One other interesting thing, though, and it may sort of speak to think about this risk is just the idea that, like even high end software is not that much money, right? So if you have a salesperson who's making $250,000, what is 1,000 a year from Salesforce to do their job particularly? And then also given the fact that, you know, free and open source software has existed for a long time, but still, you know, you want to pay an implementer for a company that like, manages, etc. getting from like here to there where, okay, I really changes the nature of software buying. Does it feel like you have to get it to this is going to be weird territory, but maybe things are good.

</details>

**Tracy Alloway**: 我认为事情可能会变得非常奇怪。

<details>
<summary>Original English</summary>

**Tracy Alloway**: I think things probably are going to get really weird.

</details>

**Joe Weisenthal**: 是的，我认为这是一个相当不错的赌注，对吧？如果你押注于怪异，就会有一个怪异指数。有人应该建立那个怪异指数。那将是一个相当不错的投资。是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, I think that's that's a pretty good bet, right? Like, if you bet on weirdness, there is a weirdness index. Someone should build that weirdness index. That would be a pretty good investment. Yeah.

</details>

**Tracy Alloway**: 我们就到此为止吧？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Shall we leave it there?

</details>

**Joe Weisenthal**: 就到此为止吧。这是《**Odd Lots**》播客的又一集。我是**Tracy Alloway**。你可以关注我@tracyalloway。我是**Joe Weisenthal**。你可以关注我@thestalwart。关注我们的嘉宾**Jared Sleeper**，他的账号是@JaredSleeper。关注我们的制作人**Carmen Rodriguez**@carmenarmen，**Dashiel Bennett**@dashbot和**Cale Brooks**@calebrooks。获取更多《**Odd Lots**》内容，你可以查看我们的每日新闻通讯。你可以在bloomberg.com/oddlots找到它。如果你想聊天，可以和听众们在我们的Discord频道discord.gg/oddlots上讨论所有这些话题，包括AI。如果你喜欢这次对话，请点赞或在视频下方留言。或者更好的是，订阅！感谢观看。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Let's leave it there. This has been another episode of the Odd Lots podcast. I'm Tracy Alloway. You can follow me @tracyalloway And I’m Joe Weisenthal You can follow me @thestalwart Follow our guest Jared Sleeper he’s @JaredSleeper Follow our producers Carmen Rodriguez @carmenarmen, Dashiel Bennett @dashbot and Cale Brooks @calebrooks For more Odd Lots content, you can check out our daily newsletter. You can find that@bloomberg.com/oddlots And if you want to chat can chat with fellow listeners about all of these topics including AI checkout our discord, discord.gg/oddlots And if you enjoyed this conversation then please like or leave a comment on the video. Or better yet, subscribe! Thanks for watching.

</details>