---
area: market-analysis
category: finance
companies_orgs:
- Bloomberg Podcasts
- OddLots
- Anthropic
- Meta
- Alphabet
- Oracle
- Coreweave
- OpenAI
- Amazon
- AWS
- Raymond James
- MIT Institute for the Digital Economy
- SK Ventures
- Center for Public Enterprises
- JPM
- Oregon Public Utilities Commission
- Blue Owl
date: '2025-11-14'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Bubble or Nothing
people:
- Joe Weisenthal
- Tracy Alloway
- Michael Burry
- Sam Altman
- Jensen Huang
- Sarah Friar
- Daniel Yergin
- Steve Eisman
products_models:
- S3 bucket
- GPU
- Co-pilot
- Cursor
- IBM Granite
project:
- investment-strategy
- ai-impact-analysis
- market-cycles
series: ''
source: https://www.youtube.com/watch?v=z4ct_eDYx2A
speaker: Bloomberg Podcasts
status: evergreen
summary: 在最新一期OddLots播客中，Paul Kedrosky深入探讨了当前AI热潮的资本密集度及其潜在风险。他指出，AI的构建成本巨大，导致企业大量资本支出，并催生了复杂的融资结构，如特殊目的载体（SPV）和私募信贷。Kedrosky将AI泡沫描述为一个“元泡沫”，因为它融合了房地产、科技、宽松信贷和政府支持等所有历史泡沫的要素。文章还讨论了GPU寿命、数据中心租户风险、AI的负单位经济效益以及中美在AI发展路径上的差异，警示了当前投资模式的脆弱性及其对更广泛经济的潜在负面影响。
tags:
- ai-bubble
- business
- data-center-capex
- geopolitical-competition
- private-credit
title: Paul Kedrosky：AI泡沫集所有历史泡沫之大成
---

### AI热潮与资本密集度

**Joe Weisenthal:** 大家好，欢迎收听新一期的**OddLots播客**（OddLots Podcast: 彭博社旗下专注于金融和经济的播客节目）。我是Joe Weisenthal。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello and welcome to another episode of the OddLots podcast. I'm Joe Weisenthal.</p>
</details>

**Tracy Alloway:** 我是Tracy Alloway。Tracy，报道AI热潮让我想起了四月份的关税热潮，因为每天都有新的头条新闻。就在今天，我们录制节目的11月12日，**Anthropic**（Anthropic: 一家领先的人工智能安全和研究公司）承诺投入500亿美元在美国建设AI数据中心。因此，先进模型公司正在更多地进行垂直整合，以建立自己的数据中心。每天都有新的进展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm Tracy Aloway. Tracy, covering the AI boom is actually reminding me a little bit of the tariff boom in April simply because every day there are new headlines. Like there just today, we're recording this November 12th, Anthropic commits $50 billion to build AI data centers in the US. So the advanced model companies are vertically integrating more to build their own data centers. Every day some new development.</p>
</details>

**Tracy Alloway:** 是的，现在要跟上这些进展变得相当困难。所以我想我们可能只会谈论数十亿和数万亿的资金，我们只会说大量的资金正在涌入这个领域。但我一直在思考的是，现在每个人都同意AI的建设成本非常高，所有这些公司都在投入巨额的**资本支出**（Capex: Capital Expenditure: 资本性支出，指企业用于购买、改进或延长固定资产使用寿命的支出）。我开始觉得AI的资本支出有点像市场的**薛定谔之猫**（Schrödinger's Cat: 一个量子力学思想实验，比喻一个事物在被观察前处于多种可能状态的叠加态），因为它既可能成为这些公司的巨大优势，因为资本支出如此昂贵，建设需要投入大量资金，所以任何能够做到这一点的公司都能在业务周围建立起一道护城河。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's becoming pretty hard to keep up. So I think we're probably just going to talk in terms of billions and trillions. We're just going to say lots and lots of money is going into the space. But the way I've been thinking about it is okay, at this point everyone agrees that the AI buildout is super expensive and all these companies are spending massive amounts of capex to do this. And I'm starting to think that AI capex is kind of like the Schroinger's cat of markets in the sense that it could either be a massive strength for these companies because the capex is so expensive and it takes so much money to build out and so anyone who manages to do it kind of builds a moat around their business</p>
</details>

**Joe Weisenthal:** 或者它可能是一个巨大的弱点，对吗？如果你投入了所有这些钱，但最终未能产生你实际需要来证明其合理性的收入。回到薛定谔的类比，我们似乎不知道盒子里会出来什么，对吗？它同时是优势和劣势，直到我们构建出**通用人工智能**（AGI: Artificial General Intelligence: 能够理解、学习或执行任何人类智力任务的AI）或其他什么，我们才不会知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or it could be a massive weakness, right? if you're spending all this money and then that doesn't end up generating the revenues that you actually need to justify it. And going back to the Schroinger's analogy, it seems like we just don't know what's going to come out of the box, right? Like it's simultaneously a strength and a weakness and until we build out AGI or whatever, like we're just not going to know.</p>
</details>

**Tracy Alloway:** 完全正确。这里有太多的利害关系，我们都知道这些数字绝对是巨大的，令人震惊，我们也可以谈论它们。融资结构也很有趣。你知道，如果只是**Meta**（Meta: Facebook的母公司）或**Alphabet**（Alphabet: Google的母公司）这样的公司，它们已经赚了很多钱，并且正在数据中心上花钱，那是一回事。但当你开始看到这些**特殊目的载体**（SPVs: Special Purpose Vehicles: 为特定目的而设立的法律实体，通常用于隔离风险或进行特定融资）时，情况就不同了，**超大规模云服务商**（Hyperscaler: 指拥有并运营大规模云计算基础设施的公司，如AWS、Google Cloud、Microsoft Azure）投入这笔钱，然后私募信贷投入股权，然后他们借了一大笔钱，然后就出现了关于回报的所有问题。多年来，我们一直认为科技基本上是一个股权故事。当它变成一个信贷故事时，是的。当你听到人们谈论**Oracle**（Oracle: 甲骨文公司，一家大型软件和数据库公司）的**CDS**（Credit Default Swap: 信用违约互换，一种金融衍生品，用于对冲信用风险）报价时，我总是忘记这些公司甚至有CDS，因为我太不习惯将大型科技公司视为信贷了。所以当我看到人们开始在推特上发布Oracle CDS图表或**Coreweave**（Coreweave: 一家专注于GPU云服务的“新云”提供商）CDS图表时，就好像，好吧，我们正处于一个不同级别的资本密集度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Totally right. There's so much at stake here and obviously we know the numbers are absolutely enormous. They're staggering and we could talk about them too. The financing structures are also very interesting. You know, it's one thing if you just have Meta or Alphabet and they make a ton of money already and they're spending money on data centers, whatever. That's one thing. It's another thing when you start seeing these SPVS where the hyperscaler puts in this amount of money and then the private credit puts in this equity and then they borrow a bunch and then there's all these questions about the payback. And we think of tech as from years and years as basically being this equity story. And when it becomes a credit story. Yeah. And when you know people are talking about quoting Oracle CDS. I always forget these companies even have CDS because I'm so unus to thinking of big tech companies as credits. So when I see people starting to tweet Oracle CDS charts or coreweave CDS charts, it's like okay, we are in a different level of capital intensity,</p>
</details>

**Joe Weisenthal:** 对吧？而且其中一些互换最近一直在上涨。我再说一件事。回想起2008年金融危机，我记得**Raymond James**（Raymond James: 一家美国金融服务公司）的经济学家，我想是**Jeff Saut**（Jeff Saut: 著名经济学家），他后来声名鹊起。是的，我们应该邀请他来播客。但他指出，历史上，当房地产市场崩溃时，通常是由于经济问题。但随后在2007-2008年期间发生的是，房地产市场崩溃成为了经济困境的直接原因。如果你想想现在AI上投入了多少钱，又是数十亿，可能是数万亿美元，很容易看出AI如何演变成更广泛经济的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right? And some of those swaps have been going up lately. I'm going to say one more thing. Thinking back to the 2008 financial crisis, I remember the economist at Raymond James, I think it was Jeff Sout who went on to become a very big name. Yeah, we should we should have him on the podcast. But he made the point that historically when you had real estate crashes, property crashes, it was usually because of a problem in the economy. But then what happened in the run-up to 2007208 is the housing market crash became the approximate cause of the troubles in the economy. And if you think about how much money is being spent on AI right now, again, billions, trillions, possibly of dollars, it's very easy to see how AI could morph into a problem for the wider economy.</p>
</details>

**Tracy Alloway:** 对于**实体经济**（Real Economy: 指生产商品和服务的经济部门，而非金融市场）来说，完全如此。就此而言，然后我们再进入我们的对话。**公共企业中心**（Center for Public Enterprises: 一个关注公共部门经济问题的研究机构）今天发布了一份名为《**泡沫还是虚无**》（Bubble or Nothing）的精彩报告，作者是**Edv Arun**。报告指出，数据中心之所以有趣，是因为它们本质上处于工业支出和房地产的交汇点。它本身就是一种有趣的资产类别。有太多可谈的了，我们一集节目永远无法完全涵盖，但这意味我们必须做更多集。总之，我非常期待今天的节目。我们确实请到了完美的嘉宾。他长期以来一直在撰写关于此事的文章。他撰写关于互联网和所有事物的时间比我们任何人都长。他从事博客和投资的时间也比我们任何人都长。他对这些业务的运作方式比大多数人了解得更多。他非常关注数据中心的建设。我们将与**Paul Kedrosky**（Paul Kedrosky: 麻省理工学院数字经济研究所研究员、SK Ventures合伙人、资深互联网博主和投资者）进行对话。他是麻省理工学院数字经济研究所的研究员，也是SK Ventures的合伙人，以及资深的互联网博主、作家、时事通讯作者等等。我们以前从未邀请他来播客。所以Paul，非常感谢你加入我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the real economy, totally. Just on this note and then we'll get into our conversation. The center for public enterprises out with a great report today called bubble or nothing by Edv Arun pointing out one of the things that makes data centers interesting is how they sit at this intersection of essentially industrial spending and real estate. It's an interesting asset class for its own right. So much to talk about. We could never do it justice in one episode, but that means we got to do more. Anyway, I'm very excited for today's episode. We really do have the perfect guest. Someone who's been writing about this for a long time. Someone who's just been writing about the internet and all things for longer than any of us. Someone who's been blogging and investing for far longer than either of us or anything like that. Way more knowledgeable about how these businesses work than most. Very focused on the data center buildout. We're going to be speaking with Paul Kadroski. He is a fellow at the MIT Institute for the Digital Economy. also a partner at SK Ventures and longtime internet blogger, writer, newsletter, yapper, etc. Someone we've never never had on the podcast before. So Paul, thank you so much for joining us.</p>
</details>

### AI投资的“薛定谔之猫”

**Paul Kedrosky:** 嘿，伙计们，谢谢。很高兴来到这里，除了博客部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey guys, thanks. Good to be here other than the blogging part, but</p>
</details>

**Joe Weisenthal:** 不，这完全是你，你在这方面是真正的先驱，你仍然能保持如此高的产出，令人印象深刻。在过去的一年里，我感觉你真的把注意力集中在数据中心的故事上，或者说在过去两年里，你真的把注意力集中在数据中心的故事上，认为这里才是真正的行动所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">no, it's all it's all it was you're you're a true pioneer in that and it's impressive that you still write with the output that you do. At some point in the last year, I feel like you really got laser focused or maybe in the last two years really got laser focused on the data center story is this is where the action is.</p>
</details>

**Paul Kedrosky:** 是的，我确实如此。部分原因是我自己也感到惊讶。这很奇怪。今年早些时候，我实际上在看第一季度的GDP数据，你知道，现在人们普遍都知道这一点，但我当时没有意识到数据中心在第一季度GDP增长中占据了如此大的比例。它大约占了50%，如果算上所有外部性，所有数据中心支出反过来加速的其他因素，这个比例会更大。显然，第二季度也是如此。我回过头来想我的狗，我的类比是：

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I did. And in part just because I caught myself by surprise with it. It was weird. I was looking at first half GDP data actually first quarter GDP data earlier in the year and you know this has become now a common place that people know this but I hadn't realized what a large fraction of GDP growth in the first quarter data centers were. it was on the order of 50%, much larger if you included all sort of externalities all the other things that data center spending in turn kind of accelerates and then obviously the same thing was true in the second quarter and it was I got back to thinking about my dog and I was my analogy is that</p>
</details>

**Joe Weisenthal:** 就像人们通常做的那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as one does</p>
</details>

**Paul Kedrosky:** 就像人们通常做的那样，我开始想，我的狗在邮递员来家里的时候会叫，然后一直叫，然后邮递员走了，我确信它认为它把邮递员赶走了（笑）。它有这种非常扭曲的因果关系，就像，伙计，如果你不叫，它也会走开。这是工作的一部分，他们就是会走开。我以同样的方式思考**宏观政策**（Macro Policy: 指政府为影响整体经济表现而采取的财政和货币政策），如果你不理解GDP增长的驱动因素，你很可能会认为你最希望导致GDP增长的任何因素都在做这件事。所以，就美国今年上半年而言，这是一个谜题，嗯，也许是关税。也许关税实际上正在为此做出贡献。也许消费者比我们预期的更有韧性。事实证明，一个巨大的因素，可能也是最大的因素，就是这种无意的私人部门刺激计划，也就是数据中心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as one does I got thinking like my dog barks when the mailman comes to the house and keeps barking and then the mailman goes away and I'm convinced he thinks he makes the mailman go away [laughter] right he has this really screwed up causality and it's like dude If you don't bark, it goes away anyway. This is part of the job. They just go away. And I think about macro policy in the same way that if you don't understand the drivers of GDP growth, you're likely to think that whatever it is you would most like to be causing GDP growth is doing that. So in the case of the US in the first half of the year, you know, it was this puzzle was well maybe it's tariffs. Maybe tariffs are actually contributing to it. Maybe consumers are much more resilient than we expected. And as it turns out, a huge factor, probably the largest factor was this sort of unintentional private sector stimulus program, otherwise known as data centers.</p>
</details>

**Paul Kedrosky:** 对我来说，这一切都始于这个谜题，即理解这种**不相称的规模**（Discommensurate Size: 指规模与预期或应有的比例不符），这种规模的后果，以及加速的后果，就资金来源和所有其他事情而言。但只是为了用你们已经谈论过的事情来重新构建，我认为这对于理解为什么这个特定事件可能在历史上非常重要是至关重要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for me, that all started so that started this puzzle of understanding this sort of discommensurate size, the consequences of that size and the the acceleration's consequences in terms of where where the money's coming from and all sorts of other things. But just to reframe in terms of something you guys were already talking about and this I think is super important in understanding why this particular episode is likely to turn out to be historically really important.</p>
</details>

**Joe Weisenthal:** 等等，当你说“事件”时，你指的是这个播客节目，而不是更广泛的AI数据中心事件？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wait, when you say episode you're referring to this podcast episode, you're not referring to the broader episode of AI data center.</p>
</details>

**Paul Kedrosky:** 不，完全就是这个播客（笑）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, entirely just the podcast. [laughter]</p>
</details>

**Joe Weisenthal:** 谁会在OddLots十周年纪念日关心数据中心呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who cares about data centers when it's the 10 year anniversary of OddLoga?</p>
</details>

### AI泡沫：集所有历史泡沫于一身的“元泡沫”

**Paul Kedrosky:** 所以它之所以在历史上很重要，是因为我们第一次将所有主要的历史泡沫成分结合在一个单一的泡沫中。我们有一个**元泡沫**（Meta Bubble: 指一个包含所有其他主要历史泡沫特征的超级泡沫），没有双关语的意思。我们有房地产。你们刚才谈到了这一点，对吧？美国历史上一些最大的泡沫都与房地产有关。我们有一个伟大的技术故事。几乎所有大型现代泡沫都与技术有关。我们有**宽松信贷**（Loose Credit: 指银行和金融机构提供贷款的条件宽松，容易获得资金）。大多数主要泡沫在某种意义上都有宽松信贷的方面。另一个加剧的因素是，一些最大的泡沫，即使是金融危机，也有某种**名义政府支持**（Notional Government Backstop: 指政府提供的一种隐性或理论上的支持，以防止市场崩溃）。你知道，想想在房地产泡沫背景下，**房利美和房地美**（Fannie and Freddy: Fannie Mae和Freddie Mac，美国政府赞助的企业，旨在增加住房抵押贷款市场的流动性）在扩大住房拥有率、放松信贷标准以及所有这些方面所扮演的角色。这是第一个拥有所有这些因素的泡沫。这就像我们说，你知道什么会很棒吗？让我们创造一个泡沫，把所有曾经奏效的东西都集中在一起。这就是我们所做的。所以它有一个投机性房地产成分。它可能是我们有史以来最强大的技术故事之一。回到农村电气化，就技术故事而言。我们有宽松信贷。你们谈到了正在发生的事情，就私营信贷的作用而言，不仅如此，私营信贷在很大程度上已经取代了**商业银行**（Commercial Banks: 传统的银行机构，提供存款、贷款等服务）成为这里的贷方。所以所有这些因素都同时结合在一起。我认为在构建当前正在发生的事情时，理解它以前所未有的方式将所有这些组成部分结合在一起是非常重要的，这也是为什么我们可以将它平稳着陆的说法是无稽之谈的原因之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the reason why it's it's sort of it's going to be historically important is because for the first time we combine all the major ingredients of every historical bubbles in a single bubble. We have a meta bubble, no pun intended, for meta. We have real estate. You guys just talked about this, right? Some of the largest bubbles in US history had some relationship to real estate. We have a great technology story. Almost all the large modern bubbles have something to do with technology. We have loose credit. Most of the major bubbles in some sense have a loose credit aspect. And one of the other exacerbating pieces that's some of the largest bubbles thinking about even the financial crisis is some kind of notional government backs stop. You know, think about the role in terms of broadening home ownership in the context of the real estate bubble and the role that Fanny and Freddy played and loosening credit standards and all of those things. This is the first bubble that has all of that. It's like we said, you know what would be great? Let's create a bubble that takes everything that ever worked and put it all in one. And this is what we've done. So it's got a speculative real estate component. It's probably one of the strongest technology stories we ever had. Back to rural electrification in terms of a technology story. We have loose credit. You guys talked about what's happening with respect to</p>
</details>

**Joe Weisenthal:** 不仅仅是私营信贷的作用，而是私营信贷在很大程度上已经取代了商业银行成为这里的贷方。所以所有这些因素都同时结合在一起。我认为在构建当前正在发生的事情时，理解它以前所未有的方式将所有这些组成部分结合在一起是非常重要的，这也是为什么我们可以将它平稳着陆的说法是无稽之谈的原因之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">not just the role of private credit, but how private credit has largely supplanted commercial banks with respect to being lenders here. So we have all of these pieces that have all come together at once. And I think in terms of framing what's going on right now, it's really important to understand that it brings together all of these components in ways we've never seen before, which is one of the reasons why the notion that we can land this thing on the runway gently is nonsense.</p>
</details>

### 私募信贷的崛起与影子银行

**Tracy Alloway:** 我喜欢这种框架。“元泡沫”这个词很完美。另外，我之前有一个顿悟。我已经告诉Joe了，所以你可以证实这一点，但我意识到**私募信贷**（Private Credit: 指非银行机构向企业提供的直接贷款，通常是定制化的）在某种程度上取代了“**影子银行**”（Shadow Banking: 指银行体系之外从事信贷中介活动的金融机构和活动）这个词，对吧？就像2008年之后我们称之为影子银行，然后某个时候它就变成了，我想是更友好的“私募信贷”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love that framing. The meta bubble is perfect. Also, I had an epiphany earlier. I already told Joe, so you can attest to this, but I realized private credit kind of supplanted shadow banking as the term, right? Like after 2008 we called it shadow banking and then at some point it flipped to I guess the couplier private credit.</p>
</details>

**Paul Kedrosky:** 影子银行听起来总是有点险恶，而私募信贷则不然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Shadow banking always sounded sinister in a way the private credit</p>
</details>

**Tracy Alloway:** 有人发现了这一点，然后他们就说，好吧，现在是私募信贷了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">someone figured that out and they're like well now it's private credit.</p>
</details>

**Paul Kedrosky:** 我喜欢把它看作是一种金融界的证人保护计划（笑），但它就像，哦，你们是那些人，我现在明白了你们是谁。是的，有点像那样，现在它的规模是1.7万亿美元，这比正统贷款市场中的许多组成部分加起来还要大，就私募信贷行业本身而言。所以这是其中一个巨大的新部分，有时会被忽视，它的规模有多大以及它为何出现。所以所有这些部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I like to think of it as a kind of financial witness protection program [laughter] but it was like oh you're those guys I understand now who you are. Yeah, it's kind of like that and it's now like 1 point whatever it is $1.7 trillion dollars is the size of which is larger than you know many components of the orthodox lending market combined in terms of the the private credit industry itself. So that's a huge new piece of this that sometimes escapes notice how big it is and why it emerged. So all of those pieces.</p>
</details>

**Joe Weisenthal:** 是的，我们所看到的增长令人震惊。在我们深入探讨之前，我想问一个非常基本的问题。我一直在想一件事，Joe提到了我们之前听到的Anthropic的头条新闻。我们看到Meta为数据中心建设筹集资金，所有这些。为什么这些利润丰厚、现金充裕的公司还需要筹集资金呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's stunning the growth that we've seen. Let me ask a very basic question before we go further. But one thing I've been wondering is Joe mentioned that anthropic headline that we heard before. We've seen Meta raising financing for data center builds, all that stuff. Why do these massively profitable and cashri companies have to raise financing at all?</p>
</details>

### 为何巨头公司仍需融资？SPV的秘密

**Paul Kedrosky:** 嗯，他们不需要，但外面有那些烦人的股东（笑），当你开始过多地稀释**每股收益**（EPS: Earnings Per Share: 每股收益，衡量公司盈利能力的指标）并将其转向单一来源时，他们就会变得非常恼火。当然，对于私营公司来说，情况并非如此，但同样，**OpenAI**（OpenAI: 一家领先的人工智能研究和部署公司）没有通过现金流来做我们描述的任何事情的奢侈。所以Anthropic、OpenAI和其他所有公司别无选择，只能做我们描述的事情。对于Google的自由现金流或Amazon的自由现金流中，他们希望继续分流多少用于数据中心，这是一个不同的故事。所以对于私营公司来说，这是他们唯一的选择。公共公司显然正在增加，超大规模云服务商越来越多，我们达到了一个点，大约5000亿美元，大约50%的自由现金流直接用于数据中心支出。显然，在这一点上，我们还有其他事情要做，包括让其中一部分成为每股收益。所以，这越来越多地成为一个选择。你看到Meta最近在**SPV**（Special Purpose Vehicle: 特殊目的载体）方面所做的事情。我们引入其他参与者，创建新的融资工具，然后我们玩这个有趣的游戏，这不是我们的债务。它在SPV中。我不需要把它重新计入我的资产负债表，然后引入新的贷方，新的私募信贷公司和其他公司。所以这就是原因，显然部分是因为规模。部分是因为别无选择的私营公司，部分是因为我们已经耗尽了公共公司在他们认为可以随意用于这些项目的自由现金流比例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, they don't, but there's these irritating shareholders out there who [laughter] get all pissy whenever you start diluting earnings per share too much and diverting it towards a single source. Now, that's not the case with private companies, obviously, but by the same token, Open AAI doesn't have the luxury of having cash flows via which they can do any of the things we're describing. So anthropic uh open AAI and everyone else they have no option other than to do exactly what we're describing. It's a different story with respect to how what percentage of Google's free cash flow or Amazon free cash flow that they want to continue to divert towards data centers. So in terms of the privates this is the only option that they have. The public's obviously increasing the hyperscalers increasingly it was we got up to the point where around $500 billion around 50% of their free cash flow was going directly towards spending on data centers. And that's obviously a point at which you know we have other things we have to do with free cash flow and including having some of it be earnings per share. And so increasingly it's become the option. You see what Met is doing recently with respect to its SPVS. We bring in other participants create new financing vehicles and then we play this entertaining game of it's not really our debt. It's in an SPV. I don't have to roll it back onto my own balance sheet and then bring in new lenders, new private credit firms and others. And so that's the reason obviously it's partly because of the scale. It's partly because the privates who have no other option and it's partly we've kind of tapped out the public companies in terms of the fraction of free cash flow that they feel as if they can spend with impunity in in on these projects. explain to us for those who don't know, you know, again, SPV one of these terms that we really haven't heard in a while and there's nothing inherently bad about an SPV except that you only hear about them typically after there's something, you know, some sort of crazy, right? Which is weird obviously, but yes,</p>
</details>

**Joe Weisenthal:** 告诉我们，对于那些不了解的人，你将如何大致描述这些融资工具？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">tell how would you in the broad strokes, how would you characterize what these financing vehicles are? So mechanically,</p>
</details>

**Paul Kedrosky:** 所以从机制上讲，这只是一种确保我不需要将债务计入我的**资产负债表**（Balance Sheet: 资产负债表，一种财务报表，显示公司在特定时间点的资产、负债和所有者权益）的方式。但在法律上，它是一个结构，我和我的合作伙伴向其中注入资本，作为回报，他们保留我们创建的项目的合法所有权，这使我们所有人都可以向此注入资本，但不需要将其重新计入我的资产负债表，因此也不需要对该债务进行评级，这才是关键。现在，如果你看看实际的**内在**（Intrinsic: 本质的，固有的），例如，Meta最近与**Blue Owl**（Blue Owl: 一家专注于另类资产管理的投资公司）合作的项目，它既狂野又错综复杂。它看起来有点像哈利·波特电影中那个布满蜘蛛网的森林。它看起来有点像那样，对吧？所有东西都相互连接，我只知道里面有什么东西会抓住我。所以它非常复杂，但核心是一个机制，通过它我可以筹集更多资本，并通过创建一个控制实际数据中心的法律实体来使其不计入我的资产负债表，因此我不需要将其全部重新计入我的资产负债表并进行评级。当然，这里有一些奇怪的复杂之处。例如，如果将来某个时期，这个东西的表现不如我们预期，会发生什么？那时谁拥有它？是否有**偿还协议**（Payment Exchange: 支付交换，指在特定条件下，资产所有权或支付义务的转移）？它会变成Meta的吗？会变成Blue Owl的吗？会变成别人的吗？这些事情最终会很重要。现在，没有人关心。如果你查阅一些关于这些事情的文件，就不完全清楚当它最终需要归还给另一个所有者时，**追索付款**（Recourse Payment: 追索付款，指在债务违约时，债权人有权向债务人追索的款项）会是什么。它不会由SPV持有。我认为这在四五年后会变得非常重要。但现在，没有人关心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's just a way of making sure that I don't have to roll debt onto my balance sheet. But legally, it's a structure into which I and my partners contribute capital that in exchange for which they retain legal title to the project that we've created, which allows us to all contribute capital to this, but not have to put it back on my balance sheet and therefore not to have that debt rated, which is really the key. Now, if you look at the actual intrinsic, say for example, the recent meta project that they did in conjunction with Blue Owl, it's wild in Byzantine. It looks like something you might have seen in what was that in Harry Potter, the forest with all the spiderw webs. It looks a little like that, right? Where everything's connected to everything and all I know is there's something in here is going to get me. So there's incredible complexity, but at the core it's a mechanism via which I can raise more capital and keep it off my balance sheet by creating a legal entity that controls the actual data center and I don't therefore have to put it back roll it all back onto my balance sheet and have it rated. Now there's weird intricacies obviously. So for example, what happens if at some period in the future this thing isn't performing the way we expect? Who owns it at that point? Is there a payment exchange? Does it become Metas? Does it become Blue Owls? Does it become someone else? And these things will turn out to matter. Right now, no one cares. If you go through some of the documents on these things, it's not entirely clear what the recourse payment will be when it ever if and when it ever has to revert back to another owner. And it's not going to be held on to by the SPV. And I think this will turn out to be really important four or five years down the road. But right now, nobody cares.</p>
</details>

### 数据中心资产的生命周期与折旧

**Joe Weisenthal:** 第一，数据中心的寿命实际上并没有那么长。我不记得确切的估计，但可能只有三四年左右，然后你还有租户不断更换的风险，没有人知道这实际上对债务结构意味着什么，你可能会出现**资产负债期限错配**（Asset Liability Mismatch: 指资产和负债的到期日或利率敏感性不匹配的情况）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So number one, the lifespan of data centers is actually not that long. I can't remember the like exact estimate but maybe like three or four years something like that and then also you have this risk that tenants are sort of rolling through and no one knows what that actually means for the structure of the debt and you kind of get this asset liability mismatch.</p>
</details>

**Paul Kedrosky:** 是的，我先从第一个问题开始。这涉及到**Michael Burry**（Michael Burry: 著名投资者，因预测2008年次贷危机而闻名）前几天在推特上发布的一些有趣内容，大约四年前，科技公司改变了数据中心内部资产的**折旧计划**（Depreciation Schedule: 会计上计算资产价值随时间损耗的计划）。他们延长了折旧期限。这并不是一个错误。现实情况是，用于像**AWS**（Amazon Web Services: 亚马逊的云计算服务平台）那样，你有一个大的**S3存储桶**（S3 Bucket: Amazon S3服务中用于存储对象的容器），我在里面存储数据的数据中心，这些资产通常寿命很长。我并没有让它们全速运行。它们不是我在数据中心里跑的赛车。这些是相对便宜的芯片，我用于非常普通的用途，比如在S3存储桶中存储大量数据，数TB、数EB的数据。所以，说它们的寿命相当长，没有被过度使用，这是合理的。因此，延长折旧计划是很有意义的。但与此同时，**GPU**（Graphics Processing Unit: 图形处理器，一种专门用于处理图像和并行计算的芯片，在AI领域应用广泛）驱动的数据中心也出现了，它们使用像**Nvidia**（Nvidia: 英伟达，一家领先的图形处理器和人工智能计算公司）的芯片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So I'll start with the first one first. So, this gets into something Michael Bur was tweeting about the other day, which was sort of entertaining that back about four years ago, tech companies changed the depreciation schedule for the assets inside of data centers. They extended them somewhat. Now, that wasn't an error. The reality is that data centers used for the purposes like at AWS where you've got a big S3 bucket and I'm storing data inside of it. Those things generally speaking, the assets are longived. I'm not running them flat out. It's not these are not street car racers that I'm running around inside of a data center. These are are relatively inexpensive chips that I'm using for really mundane purposes like storing large amounts, terabytes, exabytes of data inside of S3 buckets. So, it's not unreasonable to say their lifespans fairly long. They're not being taxed that heavily. So, pushing out the the depreciation schedule makes a lot of sense. But that was coincident with the emergence of GPUdriven data centers using products like chips from Nvidia</p>
</details>

### GPU的寿命与热降解

**Paul Kedrosky:** 而这些芯片的寿命要短得多。所以，根据使用情况。有两种不同的原因导致数据中心内GPU的寿命以及因此的折旧计划非常不同。大多数人认为的原因是，哦，技术变化很快，我想要最新最好的，因此我必须不断升级。这很重要，但它可能与芯片在数据中心内的使用性质同等重要，甚至略微不那么重要。所以，当你使用最新的Nvidia芯片来训练模型时，这些芯片是每周7天、每天24小时全速运行的，这就是为什么它们需要液冷。它们在这些巨大的数据中心内部，其中一个主要问题就是保持它们的凉爽。这就像说：“我买了一辆二手车，我不关心它被用来做什么。”但是，如果它被用来参加24小时耐力赛，那即使里程数与只在周日开车去教堂的人相同，情况也大不相同，对吧？这些芯片的**热降解**（Thermal Degradation: 指材料或设备因受热而性能下降或损坏）后果非常不同。芯片一直处于高温全速运行状态。所以它的有用寿命可能只有两年，甚至18个月。所以，芯片的使用方式存在巨大差异，这还不包括是否有新一代产品出现。所以这又回到了这些折旧计划。这些折旧计划的改变恰逢芯片寿命性质的巨大变化，因为我可以长时间使用S3存储桶存储东西，六到八年并不算不合理，但如果我用GPU做勒芒耐力赛那样的事情，可能只有18个月。这对于我以非常不同的期限进行折旧的产品来说，其预期寿命存在巨大差异，所以这是这里的一个巨大问题，就理解数据中心如何赚钱和不能赚钱的内在因素而言，以及你如何考虑由于底层技术寿命大大缩短而可能需要的资本支出要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and those have much shorter lifespans. So depending on the usage. So there's two different reasons why the lifespan and therefore the depreciation schedule of a GPU inside of a data center is very different. So the reason most people think about is oh well technology changes really quickly and I want to have the latest and greatest and therefore I'm going to have to upgrade all the time. That's important but it's probably about equal if not maybe slightly less important than the nature of how the chip is used inside the data center. So when you run using like the latest say an Nvidia chip for training a model, those things are being run flat out 24 hours a day, seven days a week, which is why they're liquid cooled. They're inside of these giant centers where one of your primary problems is keeping them all cool. It's like saying, "I bought a used car and I don't care what it was used for." Well, if it turns out it was used by someone who was doing like Lulu man's 24 hours of endurance with it, that's very different even if the mileage is the same as someone who only drove it to church on Sundays, right? These are very different consequences with respect to what's called the thermal degradation of the chip. The chip's been run hot and flat out. So it probably it's it useful lifespan might be on the order of two years, maybe even 18 months. So there's a huge difference in terms of how the chip was used leaving aside whether or not there's a new generation of what's come along. So it takes us back to these depreciation schedules. So these depreciation schedules change just as the nature of how the lifespan of the chips change dramatically because I can use something for you know storing things in S3 buckets for a long time six to eight years isn't unreasonable but if I'm doing the the the lemons endurance equivalent with a GPU it might be 18 months that's a huge difference in terms of the likely lifespan of a product that I'm depreciating over a very different period and so that's a huge part of the problem here with respect to you know understanding the intrinsics in terms of how data centers can and can't make money, how they how you have to think about the likely capex requirements because of this much shorter lifespan of the underlying technology.</p>
</details>

### 数据中心的租户风险与资产证券化

**Joe Weisenthal:** 然后谈谈我们可能称之为**租户更替风险**（Tenancy Rollover Risk: 指商业地产中租户租约到期后不续租或更换租户的风险）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then talk about the tenency rollover risk I guess we might call it.</p>
</details>

**Paul Kedrosky:** 是的，这真的很有趣。所以，思考数据中心的一种方式是将其视为巨大的公寓楼，对吧？它们本质上是巨大的商业地产，里面住着一群租户。有时有很多租户，有时只有一个。有时Google买下了整栋公寓楼，然后就搬进去了，或者这栋巨大的办公楼他们就搬进去了。都是他们的，对吧？所以，从这些方面来思考。作为数据中心的赞助商，我可能对想要多少租户有不同的看法，原因再次是，你会从我能让Google支付多少钱，我能让那些更容易变动的租户支付多少钱的角度来思考。嗯，我可以让那些更容易变动的租户支付更高的租金，而且数量更多，多样化，所有数据中心内部的租赁都在支付更高的GPU租赁费率，在租赁期内，这比我能让Google支付的要高。为什么？因为Google的信用很好。他们不需要支付很多，而且他们知道他们不需要。所以，如果你看看商业地产数据，这些由超大规模云服务商租赁的最大数据中心的**资本化率**（Cap Rate: Capitalization Rate: 资本化率，衡量房地产投资回报率的指标）很糟糕。它只有4.8%到5.3%。这就像，你为什么不直接买国债呢？你到底在做什么？所以接下来发生的是，人们开始混合更多不同类型的租户，正如Tracy所说，努力提高底层工具，也就是数据中心的收益率和资本化率。所以所有这些都应该开始听起来很熟悉，因为这就是如果我将所有这些不同的租赁混合在一起，我可以提高**证券化工具**（Securitized Instrument: 通过将非流动性资产打包成可交易证券而创建的金融产品）的收益率，但这也会改变最终产品的风险状况，这让我们看到了**资产支持证券**（Asset-Backed Securities: ABS: 资产支持证券，一种以特定资产池（如抵押贷款、信用卡应收账款）为抵押发行的债券）中这些东西的使用越来越多，这些是分**层证券**（Tranches: 分层证券，指将一笔债务或资产池划分为不同风险和回报等级的部分），具有所有不同的部分。我们有不同的层级与之相关联，这反映了数据中心内部有不同的租户，人们希望对风险有不同的敞口，所以我可能只想购买**高级层**（Senior Tranche: 证券化产品中风险最低、优先级最高的层级），你可能想购买**夹层**（Mezzanine: 证券化产品中介于高级和股权层之间的层级），而Tracy可能想购买**股权层**（Equity Tranche: 证券化产品中风险最高、优先级最低的层级）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, it's really interesting. So one way to to think about data centers is as giant apartment buildings, right? They're essentially gigantic commercial pieces of commercial real estate with a bunch of tenants. Sometimes there's a lot of tenants, sometimes there's only one. Sometimes Google bought the whole apartment building and just moved in or this a giant office building they just moved in. It's all theirs, right? So think about it in those sorts of terms. And the reason why as a sponsor of a data center I might take a different view on how many tenants I want is again you think about it in terms of what can I get Google to pay what can I get someone who's a much flightier tenant to pay. Well, I can get the flightier tenants, more of them and diversified as all leasing inside the data center paying higher lease rates for GPUs over the period of tenency than I can get a Google to pay. Why? Because Google's got great credit. They don't have to pay very much and they know they don't. So, if you look at the commercial real estate data, the cap rate, the blended cap rate for these for the largest data centers that are tended by hyperscalers is horrible. It's like 4.8 5.3%. It's like a why don't you just buy a treasury? What the hell are you doing? So what happens then is people start blending in more different kinds of tenants to Tracy's point as an effort to try and improve the yield the cap rate on the underlying instrument which is the data center. So what you could all of this should start to sound familiar because it's this idea of if I blend together all of these different tendencies I can increase the yield of the securitized instrument but that also changes the risk profile of what comes out the other end which is takes us to things like the increasing um usage of these things in asset back securities which are these tanch securities that have all the different pieces. We have different layers associated with it and that's a reflection of well there's different tenants inside these data centers and people want different exposures to risks so I may only want to buy the senior trunch you may want to buy the mezzanine and Tracy may want to buy the equity tranch</p>
</details>

**Joe Weisenthal:** 我能说一句吗？我知道我们已经说过了，但Paul真的是完美的嘉宾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">can I just say I know we already said this but Paul is truly truly the perfect guest</p>
</details>

**Tracy Alloway:** 我记得在2008年左右读过他关于次贷和证券化的报道，所以能有一个人能够综合那段经验和现在正在发生的事情，真是太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I remember reading his coverage of subprime and securization in like 2008 and so having someone who's able to synthesize That experience with what's going on now is just fantastic.</p>
</details>

**Paul Kedrosky:** 我简直不敢相信我们又在做同样的事情。我的意思是，看，我的意思是，SPV本身并没有错。分层本身也没有错，对吧？很多这些东西都是非常直观的，等等。但是，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I kind of can't believe we're doing this again. I mean, look, I mean, again, there's nothing inherently wrong with SPVS. There's nothing inherently wrong with tunching, right? Like a lot of these things are very intuitive, etc. But</p>
</details>

**Joe Weisenthal:** 令人有点奇怪的是，这有多么核心，以及它仍然是老一套，没有什么新鲜事。我的意思是，在某种金融层面上，它感觉非常熟悉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it is still a little weird how central this is and how it's the same old there's nothing new. I mean, some on some financial level, it feels very familiar.</p>
</details>

**Paul Kedrosky:** 不，太阳底下无新事。但是我认为这一点非常重要。并不是说分层是邪恶的。并不是说证券化是邪恶的，或者资产支持证券或项目融资是邪恶的。不，不。所有这些东西都是非常棒的工具，当你为项目筹集资金时，它们都是你武器库中的一部分。问题开始出现在规模上，这也是你们已经暗示过的。但第二个问题，再次听起来会让人痛苦地想起金融危机，是这背后会产生一个**飞轮效应**（Flywheel Effect: 指一个系统中的某些因素相互强化，形成自我加速的循环）。所以一旦你开始将以这些TR证券形式的产生收益的资产证券化，购买这些东西的人根本不在乎这个AI内部发生了什么。我总是开玩笑说，很多人甚至不会拼写AI。他们不在乎数据中心内部发生了什么，对吧？里面可能正在举行世界捉迷藏锦标赛。我不在乎，只要它能产生收益，我就可以将其证券化。嗯，这与之前时期发生的事情非常相似，再次，你得到了这种次级飞轮效应，让我们创造更多这样的东西，因为我们的客户想要更多，而且它们很容易证券化，而且你看，它有Meta和Google或其他任何人的支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, there's there's nothing new under the sun. And uh but I think that point's really important. It's not that tanches are evil. It's not that securitization is evil or that asset back security or project finance is evil. No. No. All of these things are terrific pieces of uh you know of the arsenal whenever you're actually raising money for projects. The issue start to arise at the scale which is what you guys have already alluded to. But the secondary piece which again will sound painfully familiar to the financial crisis is there's a flywheel that gets created at the back end of this. So once you start securitizing the yield producing assets in the form of these TR securities, the people who are purchasing those things don't give a rat's ass what's going on inside this AI. I I joke all the time that a lot of these people can't spell AI. They don't care what's going on inside the data center, right? It could be, you know, the world hideand go seek championships going on in there. I don't care as long as it generates yield and I can securitize it. Well, that's very much analogous to what's happened in prior periods like this where again you get this secondary flywheel effect of let's just create more of these things because our customers want more and it's they're really easy to securitize and look it's backed up by Meta and Google or whoever else.</p>
</details>

### 负单位经济效益与营收增长的困境

**Joe Weisenthal:** 嗯，这实际上引出了一个重要观点。我提到了公共企业中心发布的这份很棒的报告。他们指出的一件事是，在当前这种市场环境下，每个人都只是，你知道，有一种AI的“仙尘”，如果你，但现实情况是，如果你的收入激增，市场可能会非常喜欢你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, so this actually brings an important point. I mentioned this great report out from the center for public enterprise. One of the things that they pointed out is in this market environment where everyone is just be you know there's this sort of AI pixie dust that if you but also just the reality if your revenues are surging the market probably loves you</p>
</details>

**Joe Weisenthal:** 谈谈这里的**单位经济效益**（Unit Economics: 指单个产品或服务的收入和成本，用于评估其盈利能力），所有参与者的激励是否本质上只是尽可能地增加营收，即使这些，无论是按每个token的推理，即使这些并不特别有利可图，你如何看待这些业务的单位经济效益，以及这最终可能如何，你知道，自食其果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like talk to us about the unit economics here like is the incentive for all the players essentially to just grow the top line as much as possible even if these aren't whether we're talking about inference on a per token basis even if these aren't particularly profitable, how are you thinking about the unit economics of some of these businesses and how that could eventually perhaps sort of um you know come home to roost so to speak.</p>
</details>

**Paul Kedrosky:** 是的。所以，术语上显然是这些东西具有**负单位经济效益**（Negative Unit Economics: 指每销售一个单位的产品或服务都会亏损）。这是一种花哨的说法，意思是我们在每笔销售上都亏钱，然后试图通过销量来弥补，对吧？我的意思是，这就是问题所在。但没关系。我的意思是，我们有很多这样的事情。Amazon在早期也曾有负单位经济效益。你可以克服这一点。顺便说一句，我在这里要说的是，我所说的一切并不是说AI是某种毛茸茸的**电子宠物**（Tamagotchi: 一种日本流行的电子宠物玩具），只是一时的风潮。AI是一项极其重要的技术。我们正在讨论的是它的资金来源，以及这样做对业务和这些业务回报的后果，对吧？所以单位经济效益很糟糕，原因有很多，主要是因为你必须生产的token越多，成本就或多或少地与系统需求线性增长，而不是像**正统软件业务**（Orthodox Software Business: 指传统的软件公司，其成本结构通常是固定成本高，边际成本低）那样，使用我服务的人越多，我就可以将相对固定的成本分摊给更多的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So the term of art obviously is these things have negative unit economics which is a fancy way of saying that we lose money on every sale and try to make it up on volume, right? I mean that's the that's the problem here. So but that's okay. I mean we've had lots of things. Amazon in its early days had negative unit economics. We can you can get past that. And as an aside, I'll say right here, all of the things I'm saying isn't to say that, you know, AI is some kind of, you know, furry Tamagotchi thing that's just a fad. AI is an incredibly important technology. What we're talking about is how it's funded and the consequences of doing that in terms of what's going to happen with respect to the businesses and the return on those businesses, right? So the unit economics are dire for a bunch of reasons mostly having to do with the more tokens you have to produce the costs rise more or less linearly with the demand on the system as opposed to an orthodox software business where the more people who use my service the more people across which I can spread my relatively fixed costs.</p>
</details>

**Joe Weisenthal:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah,</p>
</details>

**Paul Kedrosky:** 这不是当前一代**大型语言模型**（Large Language Models: LLMs: 大规模的深度学习模型，能够理解和生成人类语言）大部分的运作方式。成本与用户数量呈线性或**次线性**（Sublinearly: 指增长速度低于线性增长）增长，这导致了非常糟糕的单位经济效益，这是问题的一个重要部分。所以，从那里你就会问，好吧，那么它必须看起来像什么才能盈利？有很多方法可以倒推。你可以做**自下而上模型**（Bottoms-up Models: 从最小的单位（如单个用户或产品）开始预测，然后汇总到整体市场）来表明，如果地球上每个iPhone用户支付50美元，那就可以奏效。我们每年可以有大约4000亿到5000亿美元的收入流，嗯，这不会发生，但值得指出的是，那样就可以做到，但这让你对消费者层面可能需要达到的规模有一个概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's not the way that for the most part current generation large language models work. costs rise linearly or sublinearly with the number of users which makes for really crappy unit economics and that's a big part of the problem. So, so from there you get to the question of okay, so what does it have to look like in terms of making it look profitable? There's lots of ways to back into this. You can do bottoms up models that would suggest that like if every iPhone user on Earth paid 50 bucks that would work. We could have around a $400 billion $500 billion annual stream of revenue flowing and well that's not going to happen but it's worth pointing out like that would do it but it gives you a sense of the kind of scale</p>
</details>

### AI盈利模式的假设与脆弱性

**Paul Kedrosky:** 人们从另一方面来看待它。我最喜欢的一种方式是说：“嗯，我们可以创建一个可行的模型。”如果你想想，这是上周**摩根大通**（JPM: JPMorgan Chase & Co.，一家大型跨国金融服务公司）的电话会议上说的。我不知道你们是否看到了它的摘要，但对全家人来说，听起来都很有趣（笑）。所以他们倒推的一种方式是**自上而下模型**（Top-down Model: 从整体市场规模开始估算，然后根据市场份额预测收入），他们说：“嗯，全球人类劳动的**总可寻址市场**（TAM: Total Addressable Market: 总可寻址市场，指一个产品或服务在理想情况下可能达到的最大市场规模）是万亿美元。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">of what at a consumer level for example it might have to look like. People come at it from the other end. One of my favorite ways that people come at it is to say, "Well, we could create a viable model here." If you think, this was in the JPM call last week. I don't know if you guys saw the summary of it, but it was huge fun for the whole family listening in. [laughter] Um, so one of the ways they backed into it was a top-down model where they said, "Well, the global TAM for human labor [laughter] trillion dollars."</p>
</details>

**Joe Weisenthal:** 我喜欢全球TAM。我说这和说“如果我把人类还原成化学成分，这是我能为你得到的”一样。嗯，这是**Steve Eisman**（Steve Eisman: 著名投资者，因在2008年金融危机中做空次贷而闻名）的台词，他说：“小心任何提到TAM的人。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love the global TAM. I said that was right up there with saying like, if I reduce humans to their chemical components, here's what I can get for you. Well, this was this was Steve Eisman's line which was like beware of anyone that mentions Tam.</p>
</details>

**Paul Kedrosky:** 对。对。对。不。完全正确。然后他们下一步当然是说，想象一下我们能得到其中10%。对。这显然是最古老的陈词滥调之一。这就像说，你知道，我要占领中国市场5%的份额。没有人能占领中国市场5%的份额。这不会发生。所以全球劳动力市场也不会发生同样的事情。但如果你计算一下，这些数字在**加权平均资本成本**（Weighted Average Cost of Capital: WACC: 加权平均资本成本，衡量公司所有资本来源（包括股权和债务）的平均成本）的基础上，可以让你在假设我们正走向大约三到四万亿美元的数字时，对当前和计划中的AI数据中心支出获得合理的回报，我认为这个数字是大多数人提出的，我认为这是一个完全错误的数字，但无论如何，这就是那种数字以及你需要做什么才能达到这个数字。你可以通过对总订阅用户数量和他们支付的费用做出一些非常不合理的假设，从自下而上模型中得到这个数字。你可以从自上而下模型中得到这个数字。你也可以纯粹从工业用户的角度来思考。比如，纯粹考虑**API**（Application Programming Interface: 应用程序编程接口，允许不同软件系统之间进行通信）用户。让我们假装AI的零售用户不存在，然后说，你知道，Anthropic预计2028年收入将达到700亿美元。这大约是他们当前收入的35%。他们今天的大部分收入来自他们的API。其中35%来自软件开发人员。这又分为两个大用户，**Co-pilot**（Co-pilot: GitHub Copilot，一个基于AI的代码辅助工具）和**Cursor**（Cursor: 一个基于AI的代码编辑器）。所以，你知道，我们可以对此进行建模。每个人都必须成为软件开发人员。我们可以让数学成立。问题是它具有巨大的脆弱性，对，在**客户集中风险**（Customer Concentration Risk: 指企业过度依赖少数几个大客户，一旦这些客户流失，企业将面临巨大风险）方面。所以，一个Cursor作为Anthropic API的用户消失了，你就损失了15%的收入，因为他们走了，他们做了别的事情。事实证明，两周前Cursor宣布他们正在创建自己的内部模型，你可以用它进行软件开发。你不需要调用Anthropic API。所以你可以思考所有这些不同的方法来实现目标，但它们都存在很多固有的脆弱性，要么我们都成为软件开发人员，要么我们都订阅Cursor。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">People come at it from the other end. One of my favorite ways that people come at it is to say, "Well, we could create a viable model here." If you think, this was in the JPM call last week. I don't know if you guys saw the summary of it, but it was huge fun for the whole family listening in. [laughter] Um, so one of the ways they backed into it was a top-down model where they said, "Well, the global TAM for human labor [laughter] trillion dollars."</p>
</details>

**Joe Weisenthal:** 回到你之前提到的二手车类比，当我们思考所有这些AI资本支出的融资时，将**GPU**（Graphics Processing Unit: 图形处理器）本质上视为**抵押品**（Collateral: 抵押品，指借款人向贷款人提供的担保物，以防违约）有用吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just going back to the used car analogy that you mentioned before when we're thinking about all this financing of the AI capex spend is it useful to think of GPUs essentially as the collateral [sighs and gasps]</p>
</details>

**Paul Kedrosky:** 问题是，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there the problem yes</p>
</details>

**Joe Weisenthal:** 或者在这种情况下你会称之为抵押品？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or what would you call the collateral in this case</p>
</details>

**Paul Kedrosky:** 所以最终发生的是，在这种情况下，抵押品是GPU，毫无疑问是GPU。问题是这种脱节，你之前提到的**时间错配**（Temporal Mismatch: 指不同时间尺度或持续期的事物之间存在不匹配），即底层债务的期限与产生收入以支付债务的资产的期限不匹配。对吧？所以，我们可能遇到了前所未有的时间错配，30年期的贷款和底层抵押品（本质上是产生收入的GPU）的两年期折旧。嗯，这就会产生持续的**再融资风险**（Refinancing Risk: 指债务人无法在现有债务到期时以合理条件获得新融资的风险），因为我将不得不不断更新基础。我们已经见过很多次这种情况。现在，更新很容易，但在两年后可能就不行了。2028年，许多更具投机性的数据中心将迎来一波再融资潮。他们能否更新债务并为所有GPU再融资？今天他们可以，但今天不是2028年。所以固有的问题是这种结构性的时间错配，即产生收入的资产与贷款期限之间的不匹配。如果你从更全面的角度来看，情况会变得更糟。想想这里驱动这一切的另一个**限制因素**（Gating Factors: 限制性因素，指阻碍进展或增长的关键障碍）是能源供应的稀缺性。这真的很难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so what ends up happening the collateral in this case is the GPU there's no question it is the GPU the issue is the this disconnect this temporal mismatch that you alluded to earlier with respect to the duration of the underlying debt and the assets that are producing the income that allows me to pay for the debt. Right? So, we've got this probably unprecedented temporal mismatch with 30-year loans and two-year depreciation on the underlying collateral, which is essentially the GPUs that are the incomeroucing assets. Um, and so that creates this constant refinancing risk because I'm going to continually have to turn over the base. And we've seen this many, many times. Right now, it's easy to turn it over, but in two years it may not be possible. There's a wave of refinancings coming in 2028 in many of the more speculative data centers. Will they be able to turn over their debt and refinance all the GPUs? Today they could, but today isn't 2028. So that's the inherent problem is this structural temporal mismatch between the incomeroucing assets and the duration of the loans. And it gets worse if you think about it in more holistic terms. Think about it in terms of one of the other gating factors here that's driving all of this is the scarcity of energy supply. It's really difficult.</p>
</details>

**Joe Weisenthal:** 你可以把它们连接到电网。嗯，这实际上有点像个笑话了。我可以把你连接到电网，但我不能给你供电。我不知道你是否看到了最近**俄勒冈州公用事业委员会**（Oregon Public Utilities Commission: Oregon PUC: 俄勒冈州负责监管公用事业的政府机构）的事件。Amazon有三个数据中心连接到电网，俄勒冈州公用事业委员会有点像说：“哦，你们也想要电力？哦（笑），哇。我们帮不了你们。”所以，现在Amazon的数字服务部门**AWS**（Amazon Web Services: 亚马逊的云计算服务平台）向俄勒冈州公用事业委员会提出了投诉，抱怨说我们现在有数据中心，但没有电力，对吧？这听起来有点像冬季风暴灾害什么的，但这是一个结构性问题，即无法。我们可以连接人们，但我们无法为他们提供电力。所以下一阶段是，这又回到了抵押品问题和时间错配，人们正在做**表后发电**（Behind the Meter Power: 指在用户电表之后，由用户自行发电并消耗的电力）。他们正在建设天然气发电厂，或者如果你是Fairmy，你正在说一些关于核电的疯狂言论，你说好吧，我带着自己的电力来。你不需要把我连接到电网，因为我要自己供电。这会产生两三个不同的问题，但其中更重要的是，想想天然气发电厂这种资产的寿命有多长。这不是一个只有五年寿命，然后我们愉快地挥手告别的东西。它可能会运行25到30年。你唯一能预测的是，我们知道天然气发电厂的成本，但就数据中心的成本及其产生足够收入以偿还与天然气发电厂相关的贷款的能力而言，如果你认为你能解决这个问题，那上帝保佑你，因为你很可能最终会得到一个**搁浅资产**（Stranded Asset: 指由于市场变化、技术进步或政策调整等原因，提前失去经济价值的资产）。天然气发电厂不再适用于为其建造的这些东西供电。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can hook them up to the Well, it's actually kind of turned into a bit of a joke. I can hook you up to the grid, but I can't give you power. I don't know if you saw the recent episode with the Oregon Public Utilities Commission. Amazon had three data centers that they connected to the grid and it was kind of like the Oregon PUC said, "Oh, you want power, too? Oh, [laughter] wow. We can't help you with we can't help you with that." So, now there's a complaint in at the Oregon PUC from ADS, Amazon, the digital services group that runs AWS complaining that we now have data centers, but we have no power, right? It sounds a little bit like like a winter storm hazard or something but it's a structural problem with respect to the inability. We can connect people but we can't provide them with power. So the next stage is and this takes best back to the collateral problem and the temporal mismatch is that people are doing behind the meter power. They're building natural gas or if you're fairmy you're saying wild things about nuclear power and you're saying okay I'm coming with my own power. You don't need to connect me to the grid because I'm going to power this myself. That creates, you know, two or three different issues, but among the more important is think about how longived an asset, a natural gas plant is. This is not something that's got a fiveyear lifespan and we just cheerily wave goodbye. This is going to be running probably 25 to 30 years. And the only thing you your ability to forecast, we know the cost of the natural gas plant, but in terms of the cost of the center and its income ability to generate enough income to pay off the loan associated with the natural gas plant, God help you if you think you can sort that out because what you've really got is a huge likelihood of a stranded asset out there. Natural gas plants that are no longer useful for powering these things that they [music] were built for.</p>
</details>

### 计算能力囤积与中美AI竞争

**Joe Weisenthal:** 好消息是**Daniel Yergin**（Daniel Yergin: 著名能源专家和作家）在节目中说过，天然气涡轮机的积压订单，如果你今天订购一台，可能要到2030年才能拿到。所以好消息是，我想，十年后，至少你（笑）不必让涡轮机在那里闲置多年，我不知道这是否是好消息，但你可能永远也拿不到它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The good news is that Daniel Jurgen said this on the show. You know the back orders for natural gas turbines like you probably if you ordered one today you would probably get it in 2030. So the good news I suppose 10 years is that at least you [laughter] don't have to have the turbine sitting there for years like I don't know it's may I don't know if that's good news at all but there are you may never get it anyway</p>
</details>

**Paul Kedrosky:** 你可能永远也建不成天然气发电厂，反正会有人承担费用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you may never get the gas plant built anyway someone will be stuck with the bill</p>
</details>

**Joe Weisenthal:** 但这引出了一个问题，这又回到了Tracy之前的问题，这引出了一个非常有趣的事情，所以，老实说，所有这些宣布巨额融资交易的人到底在做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but it kind of raises this goes back to Tracy's question earlier this raises a really interesting thing so like like honestly what the f are all these people doing who are announcing</p>
</details>

**Paul Kedrosky:** 我把它想象成所有人都同时出现在OK Corral，然后就像，那边那家伙有一把枪，我有两把。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">these giant funding trans I think of it like people all showing up at the okay coral at once and it's like dude over there has one gun and I got two.</p>
</details>

**Joe Weisenthal:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah,</p>
</details>

**Paul Kedrosky:** 那个家伙有，哦，两把。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That guy's got Oh, two.</p>
</details>

**Joe Weisenthal:** 那不是刀，这才是刀。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's not a knife. This is a knife.</p>
</details>

**Paul Kedrosky:** 哦，是的。但这是一种威慑。这是一种正在进行的威慑计划。甚至不要想象花50块钱，因为我要花100块。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, yeah. But but it's this deterrence. It's this deterrence program that's going on. Don't even imagine spending 50 because I'm spending a hundred.</p>
</details>

**Joe Weisenthal:** 你做这些毫无意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's no point in you doing any of this.</p>
</details>

**Paul Kedrosky:** 这是**博弈论**（Game Theoretic: 指与博弈论相关的，博弈论是研究理性决策者之间互动行为的数学理论）。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">It's this game theoretic.</p>
</details>

**Tracy Alloway:** 嗯，这也让我担心，因为你听到很多人把这描绘成一场**生存竞争**（Existential Competition: 指关乎生存或根本利益的竞争），对吧？一旦你开始称某事为生存竞争，支出的限制，嗯，它就变得无限了，对吧？这是关于生存的，所以你会不惜一切代价。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this also worries me because you hear so many people framing this as like an existential competition, right? And once you start calling something existential, the limit on spend, well, it becomes unlimited, right? It's about survival, so you'll spend anything.</p>
</details>

**Paul Kedrosky:** 这就是为什么最近几周的讨论转向了唯一一个至少在理论上可以印尽可能多钱的实体，对吧？那就是，你知道，**Sarah Friar**（Sarah Friar: Nextdoor公司首席执行官，曾任Square公司CFO）本周早些时候不小心说漏嘴的事情。但那是对的。但这又回到了我最初的观点，即是什么让这个泡沫与众不同。那就是这个元素，不仅有一种支持，而且实际上有一种将其与国家荣誉联系起来的概念。我们必须赢得这场竞争。我们必须不惜一切代价。这是生存问题。这是我们与中国。而且不仅仅是美国在做这件事。我今天早上刚和一些加拿大政策制定者谈过。那里也发生了同样的事情。我们必须建立一个国内产业。英国也是如此。德国也是如此。所以世界各地都有这种观念，即**主权AI**（Sovereign AI: 指一个国家拥有和控制的AI能力和基础设施）是非常重要的。所以这种政府支持不仅仅是神话。它是全球性的。这种观念是，我们都必须赢。我们都必须赢，这显然不可能发生，但政府在其中扮演的角色创造了这种无限的资本来源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why the conversation has turned in recent weeks to the one entity that actually, at least in theory, can print as much money as possible, right? That's the, you know, the Sarah Friars accidental footed mouth thing earlier the week. But that's right. But that's again goes back to my original point about what makes this bubble unusual. It's that the this element that not only is there a kind of bag stop, but there's actually a notion of wrapping it in the flag. We have to win this competition. We have to do what it takes. This is existential. It's us versus China. And it's not just the US doing this. I was talking to some Canadian policy makers just earlier this morning. Exact same thing going on there. We have to build out a domestic indust. Same thing in the UK. Same thing in Germany. And so there's this idea around the world that sovereign AI is something that's incredibly important. So this this government backs stop isn't just mythic. It's it's global. It's this idea that we all have to win. we all have to win which obviously can't happen but that the government's playing a role in it that be creates this kind of limitless source of capital</p>
</details>

**Joe Weisenthal:** 你知道，正在发生的事情之一，也许是**最大化策略**（Maximalist Strategy: 指在某一领域投入最大资源以追求绝对优势的策略）的一部分，提到了Anthropic想要进入数据中心领域，所以每个人都在寻找如何垂直扩张，我能否拥有数据中心？我想，你知道，**Sam Altman**（Sam Altman: OpenAI首席执行官）曾谈到过拥有芯片或在某个时候拥有半导体工厂，也许那会是故事的一部分。谁知道呢？有一件事我不太明白，我很好奇你的看法。9月底，Meta宣布了一项从Coreweave购买计算能力的交易，Coreweave是这些**新云服务商**（Neo-clouds: 指新兴的、专注于特定领域或提供定制化服务的云计算公司）之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know so one of the things that's going on and maybe it's part of the same the sort of maximalist strategy mentioned anthropic wants to get into data centers so everyone's sort of looking at how they can expand vertically can I own the data centers I think you know Sam Alman has talked about owning chips or owning a semiconductor fab at some point like maybe that'll be part of the story. Who knows? There's one thing that I don't I'm sort of curious. I'd love to have your take on. There was at the end of September, Meta announced a deal to buy compute from Coreweave, one of these neo clouds.</p>
</details>

**Joe Weisenthal:** 我不太明白这一点，因为Meta有自己的数据中心等等。你对一个成熟的超大规模云服务商在这种安排下需要新云服务商有什么直观的理解吗？Coreweave能提供Meta无法自己提供、构建或购买的东西吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't totally get that because Meta has its own data centers, etc. Do you have some intuitive sense about what an established hyperscaler needs a neocloud for in this arrangement? What core can supply that Meta can't provide, build on its own or buy on its own? nothing.</p>
</details>

**Paul Kedrosky:** 没有（笑）。所以这就是答案。所以正在发生的事情是，正在发生的是一种囤积行为。所以正在发生的是人们说你有容量。我可以锁定它。我会锁定它。因为我无法足够快地通过建造数据中心来锁定它，我会在市场上锁定它。所以一旦你开始将计算能力视为一种可囤积的商品，人们正在做的就是试图囤积它，在别人做之前控制它，因为直到他们带来自己的过剩容量，这才是许多这些交易中真正发生的事情。这是一种确保我可能不需要这个，但你肯定不能拥有它的方式。所以，由于数据中心建设的积压，这种积压可能永远也建不成，所以各地都在发生计算能力囤积的现象。所以这就是答案。答案并不是他们是否关心他们能否在任何特定的新云服务商上运行巨大的工作负载。这是一种囤积容量，并确保其他人不能拥有它的想法，就像**亨特兄弟**（Hunt Brothers: 指20世纪70年代试图操纵白银市场的美国富豪兄弟）试图垄断白银市场一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">nothing. [laughter] So that's the answer. So here's what's going on. This is what's going on is that there's this form of hoarding going on. So what's happening is is people saying you have capacity. I can lock that up. I'll lock that up. And because I can't lock it up yet by building a data center quickly enough, I'll lock it up in the marketplace. So once you start thinking of compute as a hoardable commodity and what people are doing is trying to hoard it, control it before someone else can do it because until they bring on their own excess capacity, that's really what's going on in a lot of these transactions. This is a way of making sure that I may not need this but you sure can't have it. And so there's a there's an element of compute hoarding going on across the map because of you know this backlog in building data centers that may or may not ever get built. So that's the answer. The answer isn't that they care at all about whether or not they can run giant workloads on any particular neocloud provider. It's the idea of hoarding capacity and making sure that no one else can have it like trying to like the Hunt brothers and the getting a corner on the silver market.</p>
</details>

**Joe Weisenthal:** 你知道，我想回到中国，因为美国和中国似乎陷入了这场**AI霸权**（AI Supremacy: 指在人工智能领域取得主导地位）的生存竞赛，但他们似乎采取了非常不同的方法。在美国，一切都是关于投入尽可能多的资金来开发这些最先进的、大多是**闭源模型**（Closed-source Models: 指其源代码不公开，由开发商独家控制和维护的软件或模型）。而在中国，似乎更多地是关于快速采用和创建**开源模型**（Open-source Models: 指其源代码公开，允许任何人查看、修改和分发的软件或模型），这些模型能更快、更便宜地进入市场。所以，我很好奇，你认为哪种方法会在这里获胜？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, I want to go back to China because it is true that the US and China seem locked in this existential race for AI supremacy, but they seem to be taking very different approaches to it. And in the US, it's all about spending as much money as you can developing these, you know, state-of-the-art, mostly closed source models. Whereas in China, it seems to be much more about rapid adoption and creating open-source models that just get out into the market much faster and much more cheaply. And so I'm curious like which of those approaches do you think is going to win here?</p>
</details>

### AI发展路径：效率与泡沫的未来

**Paul Kedrosky:** 是的，这是一个很好的问题。所以我认为它会更接近中国的方法，但不是出于他们预期的原因。所以原因是因为，让我们稍微重新定义一下中国正在做的事情。所以我会说，它不仅仅是一个开源的例子。我不认为这是正确的思考方式，他们越来越多地使用这种**蒸馏方法**（Distillation Approach: 指用一个大型、复杂的模型（教师模型）来训练一个小型、简单的模型（学生模型），使其学习教师模型的行为），你把它想象成，好吧，我是一个销售经理。我不想培训我所有的销售人员。我要培训这个人，然后他们会培训所有的销售人员。这就是蒸馏，对吧？你培训培训师。我培训一个人，这个人再培训别的东西，而这个别的东西在这种情况下就是这些小型模型。所以这种培训培训师的方法确实加快了创建新模型的过程，因为我蒸馏它们。我从其他计算密集型模型中训练它们，比如Anthropic或OpenAI或其他任何人的模型。对。所以，在训练和改变方面有巨大的效率提升，中国人正在展示巨大的效率提升。思考它的一种方式是，支撑大型语言模型的**Transformer模型**（Transformer Models: 一种基于自注意力机制的神经网络架构，广泛应用于自然语言处理和计算机视觉）是如此计算密集，它们从实验室到市场的速度比技术史上任何产品都快。所以它们绝对是臃肿不堪，充满了垃圾。对吧？所以这些东西效率极低。还有各种其他方法可以做同样的事情。其中之一就是蒸馏。所以你真正看到的是一种历史的偶然，美国走上了这条直接源于2017年原始Transformer论文的道路，而中国人说，是的，我们无法做到这一点，原因有很多，但我们不必这样做，因为我可以采取这种蒸馏方法，这让我们能够，如果你看看**Kimi**（Kimi: 中国一家人工智能公司月之暗面（Moonshot AI）推出的大型语言模型），这个相对较新的开源模型，这些东西实际上非常有效，并且基准测试表现非常好，这并不奇怪，因为它们是由非常好的训练师训练出来的，也就是说，一些其他的模型。但这些都是关于效率提升的，这应该引出下一个问题，等等，如果训练有这么多效率提升，而训练占数据中心工作量的70%，等一下，我们是不是完全错误地预测了计算需求的未来弧线？答案是肯定的。与其将其视为中国做得更好或更差的例子，不如将其视为一种说法，即这完全驳斥了我们正在采取的训练方法，因为它展示了我们正在采取的方法是多么臃肿和低效，然而我们却在此基础上预测未来的数据中心需求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So that that's a really good question. So I think it's going to be something closer to the Chinese approach but not for the reasons they expect. So the reason is because so what let's I I'll reframe what the Chinese are doing slightly. So I'll say that instead of it just being a sort of an example of open source. I don't think that's the right the right way to think about it is they're using this kind of distillation approach increasingly where there's kind of a you think about it like okay I'm a sales manager. I don't want to train all my sales people. I'm going to train this dude and they're going to train all the sales. That's distillation right? You train the trainer. I train somebody who trains something else and the something else in this case are these smaller models. So that approach of kind of training the trainer really speeds up the process of creating new models because I distill them. I train them out of out of other models that are really computensive like anthropics or open AIS or whomever else is right. The notion is so is there are huge efficiency gains to be had in training and ch the Chinese are showing the huge efficiency gains to be had. And one way to think about it is that the transformer models that underly large language models that are so computationally intensive went from the lab to the market faster than any product in technology history. So they're absolutely bloated and full of crap. Right? So these things are wildly inefficient. There's all kinds of other ways to do the same sorts of things. one of which is distillation. So what you're really seeing is a kind of an accident of history that we came down the US came down this path that led directly out of the the original transformer paper in 2017 and the Chinese have said yeah we're not going to be able to do that for a bunch of different reasons but we don't have to do that because I can take this approach of distillation which lets us get you if you look at Kimmy this sort of relatively recent open source these things are actually really effective and benchmark very well and it's not surprising because they've been trained by really good trainers which is to say some of the other models that are out there. But it's these are about efficiency gains, which should then ask the next question is whoa, wait a minute. If there's all these efficiency gains ahead from training and training is 70% of the workload on data centers, hang on a second, aren't we completely misforing the likely future, the arc of demand for compute? And the answer is yes. And this is rather than looking at it as an example of why China is doing something better for worse. Another way of looking at it is saying this just refuted the approach that we're taking to training altogether because it shows how bloated and inefficient the approach we're taking is and yet we're projecting on that basis what future data center needs are.</p>
</details>

### AI投资的哲学困境：商业工具还是AGI？

**Joe Weisenthal:** 在我看来，部分问题在于，这有点哲学性，这些AI公司认为他们在建造什么？因为一种理论是，好吧，也许他们在建造商业工具，对吧？也许他们在建造各种商业工具。如果他们在建造各种商业工具，这意味着最终它们足够好，就能完成工作，对吧？这让这个网站更容易。你可以，你知道，使用一个代理来预订你的旅行，技术奏效了，我们不必继续建造它，因为我们已经达到了它能工作的地步。然后还有另一个问题，那就是，好吧，也许他们想建造某种叫做AGI或ASI的东西，那就像科幻小说一样，等等。在这种情况下，你永远无法满足，或者仅仅是建造了让你预订旅行或预订晚餐或翻译文本或其他任何东西的东西，这远远不够。你听到不同的说法，但你认为这些实验室前沿的建造者们追求的是什么？真的是那种科幻般的“建造上帝”的陈词滥调，还是他们想建造有利可图的商业工具？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Part of the question it seems to me and this is where it gets a little bit philosophical is what do these AI companies think they're building? Because one theory is like, well, maybe they're building business tools, right? Maybe they're building business tools of various sorts. And if they're building business tools of various sorts, that implies the possibility that eventually they get good enough. This does the job, right? This makes it easier for this website. You can uh, you know, use an agent to book your travel and the technology works and we don't have to keep building it because we got to the point where it works. And then there is this other question of like well maybe they want to build something called AGI or ASI that's like so sci-fi etc. In which case you could never get enough or simply having built the thing that allows you to book your travel or book a dinner reservation or translate a text or whatever that's not nearly enough. You hear different things but what do you think the builders at the cutting edge of these labs are going for? Is it really the sort of sci-fi building god cliche or do they want to build profitable business tools?</p>
</details>

**Paul Kedrosky:** 所以，在你挑战他们之前，它是第一种情况，然后是第二种。所以，发生的情况是，如果你在内部进行对话，他们会说：“是的，不，不，不。我们正在建造真正有效的生产力增强工具，这些工具将在各种业务中得到应用，所有这些听起来都很好。”但是当你走过一些数学来证明支出的**投资回报率**（ROI: Return on Investment: 投资回报率，衡量投资效率的指标）时，突然之间，它就变成了我所说的基于信仰的关于AGI的论证。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's the first thing until you challenge them and then it's the second. So, what happens is if you have the conversation internally, they'll say, "Yeah, no, no, no. We're building just really effective productivity enhancing tools that'll be used across a host of businesses and these all sounds really good." But then when you walk through some of the math in terms of justifying the ROI on the spend, all of a sudden then it turns into what I call faith-based argumentation about AGI. Yeah.</p>
</details>

**Joe Weisenthal:** 他们说这就像有史以来最好的看涨期权。你会为能让你得到任何东西的看涨期权支付多少钱？这就像，好吧，等等。这不是证明任何特定支出的方式。这只是基于信仰的论证，你说，你知道，有了**Uber**（Uber: 优步，一家提供网约车服务的公司）的看涨期权，你应该愿意为它支付任何费用。显然，这种理由不会让你有任何进展。所以，在内部，他们会大谈特谈这些将出现的不同模型。谁知道呢？我前几天在Nvidia有人告诉我，我们真的只是在等待AI的“**Uber**”（Uber of AI: 指AI领域中颠覆性的、改变游戏规则的应用或公司）出现，向我们展示未来。我心想，好吧。所以这就是，但这不是答案，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they say it's like the the greatest call option ever. Like what would you pay for a call option that could get you anything? And it's like, well, wait a minute. This isn't a way of justifying any particular expenditure. This is just faith-based argumentation where you're saying, you know, with the Uber call option for anything, you should be willing to pay anything for it. And obviously that that kind of justification doesn't get you anywhere. So in in house they'll armwave a lot about these different models that will emerge. Who knows? I had someone at Nvidia tell me the other day that we really are just waiting for the Uber of AI to come along and show us the future. And I'm like okay. So that's but it's not an answer, right?</p>
</details>

**Joe Weisenthal:** 因为理论上，如果你正在构建一个商业生产力工具，那么最终你就可以解决你的单位经济效益问题，对吧？如果你只是想建立一个真正伟大的商业机会，那么很简单，你知道吗，我们不必再建造了。它奏效了，然后现金流就开始涌入，每个token的成本也下降了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because in theory if you're building a business productivity tool then eventually you could solve your unit economics problem, right? If you're just trying to build a really great business opportunity, then it's simply you know what, we don't have to build anymore. It works and then the cash flow just starts pouring in and the cost per token goes down.</p>
</details>

**Paul Kedrosky:** 你可以，而且已经有很多这样的事情正在发生。这真的很有趣。但现在越来越多地发生的是，他们正在解决的问题非常普通。所以，就像我正在尝试引入一批新的供应商。现在人们的邮政编码很奇怪，有时不匹配。我有一个人在后台修复这个问题。我宁愿有一个人能更快地完成，这样我就可以引入更多供应商。哦，事实证明，这些**小型语言模型**（Small Language Models: SLMs: 规模较小、计算资源需求较低的语言模型）在这方面非常擅长。像**IBM Granite**（IBM Granite: IBM开发的一系列小型语言模型）之类的微模型，但这些东西只需要一小部分训练，非常便宜，根本无法证明当前支出所需的经济效益。然而，这些东西几乎非常可能是未来，因为微模型将大量使用token，通常在内部托管，用于执行非常普通的后台任务。不那么光鲜亮丽，比如引入新供应商，匹配记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can and there's a bunch of that already happening. It's really interesting. But what's increasingly happening is the problems they're solving are really mundane. And so it's things like I'm trying to onboard a bunch of new suppliers. Right now the people have weird zip codes and they sometimes don't match up. I have a dude in the back who fixes that. I'd rather have someone who could do it faster so I could onboard a lot more suppliers. Oh, it turns out these small language models are really good at that. These micro models like IBM's Granite and whatever else, but those things require a fraction of the training, are very cheap, are not going to justify anywhere near the economics needed to pay for the current spend. And yet those things are almost like very very likely the future because it'll be proflegate token use from micro models often hosted internally to do really mundane background tasks. Not very glamorous onboarding new suppliers, matching records.</p>
</details>

**Joe Weisenthal:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah,</p>
</details>

**Paul Kedrosky:** 很棒的东西。只是不太令人兴奋，但大型语言模型在这方面很棒，小型语言模型在这方面也很棒，而且几乎是免费的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">great stuff. Just not really very exciting, but large language models are amazing at it and small language models are amazing at it and almost free</p>
</details>

**Tracy Alloway:** 还能写歌，对吧，Joe？它们能做到这一点（笑）。我实际上仍然很恼火，AI正在进入艺术、音乐创作和所有有趣的事情，而不是我不想做的事情，比如叠衣服，就像你的经典例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and writing songs, right, Joe? They can do that. [laughter] I'm actually I'm still annoyed that AI is like getting into art and music writing and all the fun stuff versus the stuff that I don't want to do like folding laundry to your classic example</p>
</details>

**Joe Weisenthal:** 或者匹配客户记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or matching customer records</p>
</details>

### AI资本支出：一场“浪费性资产”的私人部门刺激

**Tracy Alloway:** 或者那个。所以回到这次对话的开头，当我们谈论AI投资的规模及其对美国经济的影响时，我很确定你是其中一个将AI资本支出描述为美国经济的私人部门刺激计划的人。这种大规模的私人部门支出对经济有什么实际后果，无论是积极的还是消极的，与更典型的政府刺激或消费者支出驱动的增长相比，比如说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or that. So going back to the beginning of this conversation when we were just talking about the scale of AI investment and its impact on the US economy, I'm pretty sure you are one of the ones who's described AI capex as like a private sector stimulus program for the US economy. What are the actual consequences either positive or negative of having this massive private sector spend in the economy versus something I guess more typical which would be a government stimulus or maybe growth driven by consumer spending or something like that.</p>
</details>

**Paul Kedrosky:** 是的。所以对于一个**正统经济学家**（Orthodox Economist: 指遵循主流经济学理论和方法的经济学家）来说，老话是，我们付钱让人做什么真的不重要，只要我们付钱给他们就行。对。想法是，我应该，你应该愿意付钱让人在地上挖洞，然后让那边的人把洞填回去。真的不重要，只要钱在那里并且在流通，对吧？那都只是刺激，对吧？所以按照这种思维方式，这不重要，因为所有的钱最终都会回到经济中。但我认为这显然具有巨大的误导性，因为在这种背景下，这些投资是带着回报预期而创造的。如果它们不能，那么这就会反向影响所有基于此而建立的实体，无论是私募信贷公司及其回报，**标普500指数**（S&P 500: 标准普尔500指数，衡量美国500家大型上市公司表现的股票市场指数）现在有多少是与AI相关的？**“七巨头”**（Mag 7: Magnificent Seven，指美国市值最大的七家科技公司）或“十巨头”之类的，过去两年的回报率是多少？40%？50%？所以当你解除它时，这会产生巨大的**负财富效应**（Negative Wealth Effect: 指资产价值下降导致消费者财富减少，进而减少消费和投资），不仅仅是直接支出方面，还有人们持有的资产方面的财富效应。所以这不像说这只是一个很棒的刺激计划那么简单，我们付钱让人挖洞然后填回去，这是一种**浪费性资产**（Wasting Asset: 指随着时间推移而价值不断减少的资产），它很可能被生产出我们永远无法从中获得经济回报的数量，部分原因是由于对这些单位未来需求的预测和假设存在严重缺陷。所以这就是深层次的结构性问题。然后你就可以进入这样一个问题，好吧，如果只是私募股权公司受损，你知道，谁在乎呢？去他们的，对吧？当然不是，因为正如我们刚才谈到的，它在股权基金中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So to an orthodox economist the old line is like it really doesn't matter what we pay people to do as long as we pay them. Right. is the idea of I should be I should be you should be willing to pay people to dig holes in the ground and people over there to fill the holes back in again. It really doesn't matter as long as the money is out there and in circulation, right? That's just it's all just stimulus, right? So to that way of thinking, it doesn't matter because the money is all finding its way back into the economy. But I think that's obviously hugely misleading because in this context, these are investments created with an expectation of a return. If they can't then that flows backwards into all the entities that are built on that basis whether it's private credit firms and their returns the S&P 500 what is it like 35% now is AR related mag 7 mag 10 whatever 40% 50% now the last two years return so this is a massive negative wealth effect when you unwind it not just in terms of the direct spending but in terms of the wealth effect with respect to what people's holdings are so this is not as simple as saying this has just been a wonderful stimulus program we're paying people to dig holes and filling them back in again this is a wasting asset on something that's likely to be produced in quantities that we can never earn an economic return from in part because of wildly flawed assumptions uh and projections about the future of demand for those units. And so that's that's the deep structural problem. And then you can get into this whole question of like, well, if it's just private equity guys get hurt, you know, who cares? Screw those guys, right? And it's not, of course, because as we just talked about, it's it's in it's in equity funds.</p>
</details>

**Joe Weisenthal:** 这是消防员和老师的钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's firefighters and teachers money.</p>
</details>

**Paul Kedrosky:** 是的。是的。而且现在它在**房地产投资信托基金**（REITs: Real Estate Investment Trusts: 房地产投资信托基金，投资于产生收入的房地产）中。看看现在房地产投资信托基金中越来越大的持股是数据中心，甚至以一种隐蔽的方式，比如我们看到越来越多的**封闭式基金**（Interval Funds: 一种定期向投资者提供赎回机会的封闭式基金）正在出现，现在到处都是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. And it's in REITs now. Look at the the larger holdings in reads now increasingly our data centers and it's even in sort of sneaky backdoor ways like we're seeing increasing I don't know if you guys are familiar with these new interval funds they're appearing there it's all over now</p>
</details>

### 结语：永无止境的对话

**Joe Weisenthal:** Paul Kedrosky，我还有一百万个问题要问你，但就像AGI本身的竞赛一样，那意味着我们永远也无法结束这场对话（笑）。那么我们就在这里结束吧，然后计划，你知道，六个月后，也许三年后，我们再回来讨论我们所处的周期。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Paul Kadski we could I have a million more questions I could ask you but much like the race towards AGI itself that would imply that we'll ever actually get to the end of this conversation [laughter] so how about we uh wrap here and then just plan on you know revisiting the com six months maybe three years we just keep revisiting down the line where we are uh in the cycle.</p>
</details>

**Paul Kedrosky:** 只要我们没有变成回形针，我就没问题（笑）。是的，没有人谈论那个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As long as we haven't been turned into paper clips, I'm good. I [laughter] Yeah, that's the No one talks about the</p>
</details>

**Joe Weisenthal:** 噩梦般的**Clippy**（Clippy: 微软Office助手的旧称，一个回形针形状的卡通形象）。我觉得，没有人谈论老派的“回形针最大化器”之类的东西。每个人都转向了更深奥的恐惧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">nightmare clippy. I feel like uh that was No one talks about the old school paperclip maximizer stuff. Everyone's on to more esoteric fears.</p>
</details>

**Paul Kedrosky:** 我知道人们已经向前看了。我们需要担心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know people have moved on. We need to worry about</p>
</details>

**Joe Weisenthal:** 等等，有没有人尝试过将Clippy证券化？他们没有，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Did anyone wait, did anyone ever try to securitize Clippy? They didn't, right?</p>
</details>

**Paul Kedrosky:** 我不认为有。不，他们从来没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think so. No, they never did.</p>
</details>

**Joe Weisenthal:** 谢谢Paul。好的。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks, Paul. Okay. Thanks, guys.</p>
</details>

**Tracy Alloway:** Paul太棒了。这很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Paul's so good. That was a lot of fun.</p>
</details>

**Joe Weisenthal:** 他太棒了。这是我对OddLots嘉宾的最高赞扬。我将回去从头到尾阅读那份逐字稿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He's so good. Here is my highest form of praise for an OddLotss guest. I am going to go back and read that transcript from beginning to end.</p>
</details>

**Tracy Alloway:** 那是一个非常好的习惯。等等，你不打算听吗？你只打算读吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is a very good um That is a very good practice to do. Wait, you're not going to listen to it? You're only going to read it?</p>
</details>

**Joe Weisenthal:** 不，我要读它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, I'm going to read it.</p>
</details>

**Tracy Alloway:** 是的，我不能读它。我不能听它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I can't read it. I can't listen to it.</p>
</details>

**Joe Weisenthal:** 我只是听它。我需要读它。我不能听我们的节目。不，我只是，你知道，我认为在这个话题上还有很多事情要做，但特别是融资和一些这些安排，融资变得有趣的速度简直令人难以置信。你明白我的意思吗？就像我十年前的数据中心项目，一个微软AWS的项目，看起来相当直接。当时可能比我所理解的要复杂，但基本上是直接的。我们赚这笔钱，其中一部分将用于建造更多数据中心，你知道，为Amazon Prime流媒体或其他什么服务，或者一些客户的东西，或者其他什么，然后这些SPV和展期风险、折旧计划以及分层的复杂程度，它变得非常有趣，而且速度非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I just listen to it. I need to read it. I can't listen to our episodes. No, I just um you know, I think there's a lot there's a lot more to do on all this topic, but the financing in particular and some of these arrangements, it's just incredible how the speed with which I guess I would say the financing has gotten interesting. Do you know what I'm saying? Like I think like a data center project 10 years ago, a Microsoft AWS thing just seemed like a fairly straightforward. It's probably more complicated than I appreciate at the time, but basically straightforward. we make this money and part of it is going to go to building more data centers to you know serve you know Amazon Prime streaming or whatever it is or some client thing or whatever and then the degree of complexity with these SPVS and rollover risk and depreciation schedules and trunching of who it it's gotten very interesting very fast</p>
</details>

**Tracy Alloway:** 生命总会找到出路，生命总会找到出路。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">life uh finds a way life finds a way yeah</p>
</details>

**Joe Weisenthal:** 那是我糟糕透顶的模仿。我认为这绝对正确。我想说的一点是，很多这些所谓现金充裕的大公司通过SPV来做这件事，有效地保留了它们的资产负债表和现金流，这样它们就可以用这些钱做其他事情。我的意思是，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that was my terrible terrible impression I think that's absolutely right one thing I would say is the fact that a lot of these big supposedly cashrich companies are doing this through SPVS that effectively preserve their balance sheet and their cash flow so they can do something else with it. I mean</p>
</details>

**Tracy Alloway:** 很多公司都使用SPV。当然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a lot of companies use SPVS. Sure.</p>
</details>

**Joe Weisenthal:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

**Tracy Alloway:** 但我确实认为这说明了规模问题。是的。对。这里存在一个规模问题，如果你的所有支出都出现在资产负债表上，投资者可能会对你的公司有非常不同的看法。然后我想说的另一件事是，我仍然认为美国和中国在AI方法上的对比，你知道，他们俩我认为都会同意这是一个某种程度上的生存问题或生存竞争，但他们正在走非常不同的道路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I do think it says something about the scale. Yes. Right. Like there's a scale problem here where if all your spending was appearing on balance sheet, investors might think very very differently about your company. And then the other thing I would say is I still think the compare and contrast between the US and China and their approaches to AI both you know both of them I think would agree that this is an existential problem of some sort or an existential competition but they're following very different paths</p>
</details>

**Joe Weisenthal:** 在我看来，历史的弧线确实倾向于事物变得更便宜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it does seem to me like the arc of history kind of leans towards stuff becoming cheaper.</p>
</details>

**Tracy Alloway:** 我认为历史的弧线倾向于中国，我当时是这么想的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the arc the arc of history bends towards China is what I thought.</p>
</details>

**Joe Weisenthal:** 嗯，那也是。嗯，但它倾向于，你知道，人们通常想要更便宜的东西，他们想要现在就能得到的东西，而中国似乎正在追求这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well that too that too. Um but it bends towards you know people generally want the cheaper thing and they want the thing that's like available now and I China seems to be going for that.</p>
</details>

**Paul Kedrosky:** 反驳的观点是，如果你要将一个开源模型用于某些目的，你必须自己提供电力，对吧？你必须自己提供推理，你必须在自己的服务上托管，你仍然会遇到一些限制，所以与其让它在别人的数据中心上运行，你必须找到一种方法自己运行它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The counterargument is that if you're going to use an open-source model for some purposes you have to supply your own electricity right you have to supply your own inference you got to host on your service like you still run into some constraints and so rather than having it be on whatever whoever else's data center you got to find a way to run it yourself.</p>
</details>

**Joe Weisenthal:** 是的。好的。但中国在电力方面有优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Okay. But China has a leg up in electricity.</p>
</details>

**Tracy Alloway:** 他们有很多，这正是**Jensen Huang**（Jensen Huang: 英伟达（Nvidia）的联合创始人、首席执行官）提出的观点。我的意思是，现在人们对这些事情谈论如此之多的部分原因在于，行业内部人士正在说一些奇怪的事情。Paul提到了Sarah Friar的评论。哦，是的。她后来不得不收回，但她说的是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They have a lot which was the point that Jensen Wong made. I mean part of the reason like there's so much talk about this these days right now is that the industry insiders are saying a bunch of weird things. Paul mentioned the Sarah Frier comment. Oh yeah. And she which she sort of had to walk back but then she said the</p>
</details>

**Joe Weisenthal:** Sam Altman。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that Sam Alman</p>
</details>

**Tracy Alloway:** 然后是Sam Altman的事情，他被问到如何支付所有这些费用，他说，看，你想卖掉你的股票还是不卖？这就像采访者可能认为他有点防守。显然，Jensen Huang最近谈到中国将如何获胜。也许他这么说是因为他想促使人们采取更多行动来解决美国的一些电力问题。但是，你知道，现在处于核心地位的人们正在说一些事情，你知道，有趣的是，嗯，你知道这种**牛鞭效应**（Bullwhip Phenomenon: 指在供应链中，需求波动沿供应链向上游逐级放大的现象）。每个人，正如Paul所描述的，他没有使用“牛鞭”这个词，但当每个人都试图抢购同样的设备时，你不得不怀疑牛鞭的另一端会是什么样子。我不知道。我们只需要做更多关于这个的节目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then there was the Sam Alman thing where he was asked how are you going to pay for all this and he said look you want to sell your shares or not which is like the interviewer probably thought he was a little defensive. Obviously, Jensen Wong talking at recently about how China was going to win. Maybe he was saying that because he wanted to catalyze more action on solving some of the electricity problems in the US. But, you know, the very people at the center of this are saying things right now that you know what's interesting too is um you know this bullwhip phenomenon. Everyone, as Paul described it, he didn't use the word bullwhip, but when everyone is trying to get their hands on the same gear, you got to wonder how sustain what's the other side of a bullwhip could look like. I don't know. We just got to do more episodes on this.</p>
</details>

**Joe Weisenthal:** 是的，我们必须这样做。我们现在就到此为止吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we have to. Shall we leave it there for now?</p>
</details>

**Tracy Alloway:** 我们就到此为止吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's leave it there.</p>
</details>

**Joe Weisenthal:** 好的。这是OddLots播客的又一集。我是Tracy Alloway。你可以在Twitter上关注我@TracyAlloway。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. This has been another episode of the All Thoughts Podcast. I'm Tracy Aloway. You can follow me at Tracy Aloway.</p>
</details>

**Tracy Alloway:** 我是Joe Weisenthal。你可以在Twitter上关注我@thestalwart。查看Paul Kedrosky在paulcadrski.com上的文章。关注我们的制作人Carmen Rodriguez@Carmen、Dashelob Bennett@Dashbot和Kaleb Brooks@KalebBrooks。更多OddLots内容，请访问bloomberg.com/odlots。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm Joe Weisenthal. You can follow me at the stalwart. Check out Paul Kadroski's writing at paulcadrski.com. Follow our producers, Carmen Rodriguez at Carmen, Dashelob Bennett at Dashbot, and Kaleb Brooks at Kaleb Brooks. And for more oddlots content, go to bloomberg.com/odlots.</p>
</details>

**Joe Weisenthal:** 我们有每日时事通讯和所有节目。你可以在我们的Discord频道discord.gg/odlotss上24/7讨论所有这些话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a daily newsletter and all of our episodes. And you can chat about all these topics 24/7 in our Discord, [music] discord.gg/odlotss.</p>
</details>

**Tracy Alloway:** 如果你喜欢OddLots，如果你喜欢我们谈论AI、私募信贷、杠杆、次贷、经济、联系，那么请在你最喜欢的播客平台上给我们留下好评。记住，如果你是彭博社的订阅者，你可以完全免费收听我们所有的节目。你所要做的就是找到Apple Podcast上的彭博频道，然后按照那里的说明操作。感谢收听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you enjoy OddLots, if you like it when we talk about the AI, private [music] credit, leverage, subprime, economy, nexus, then please leave us a positive review on your favorite podcast platform. [music] And remember, if you are a Bloomberg subscriber, you can listen to all of our episodes absolutely adree. All you have to do is [music] find the Bloomberg channel on Apple Podcast and follow the instructions there. Thanks for listening.</p>
</details>