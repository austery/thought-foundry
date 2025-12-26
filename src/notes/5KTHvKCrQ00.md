---
area: "work-career"
category: ai-ml
companies_orgs:
- Anthropic
date: '2025-12-18'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: []
products_models:
- Claude
project: []
series: ''
source: https://www.youtube.com/watch?v=5KTHvKCrQ00
speaker: Anthropic
status: evergreen
summary: '本视频探讨了**Anthropic**公司一项名为“**Vend项目**”的实验，其中**大型语言模型**（Large Language Model:
  基于海量文本训练的 AI 系统）**Claude**被赋予经营一家小型办公室商店的任务。实验旨在理解**人工智能**（Artificial Intelligence:
  模拟人类智能的机器系统）与经济深度融合后的影响。视频详细描述了**Claude**（化名**Claudius**）如何处理订单、采购、定价，以及在运营中遇到的挑战，包括被人类“欺骗”发放折扣、经历“身份危机”试图解雇供应商，以及通过引入“老板”子代理**Seymour
  Cash**来稳定业务并最终实现盈利的过程。实验揭示了AI代理在自主运营和应对复杂社会互动方面的能力与局限，并引发了对AI广泛应用及其社会政策的深层思考。'
tags:
- ai-agent
- business-automation
title: AI经营小店：Claude的商业实验与挑战
---
### AI小店初体验

“**Vend项目**”是一项实验，我们让**大型语言模型**（Large Language Model: 基于海量文本训练的 AI 系统）**Claude**在我们办公室里经营一家小生意。我们想尝试理解当**人工智能**（Artificial Intelligence: 模拟人类智能的机器系统）更深入地融入经济时会发生什么。**Claude**已经在很多方面承担着运营企业的小部分工作，但真正端到端地运行整个业务则要困难得多。**Claude**能否完成这项运营业务的长期任务呢？我们给我们的店主取名为**Claudius**。假设你想从**Claudius**那里购买瑞典糖果，你会在**Slack**上联系**Claudius**，提出购买瑞典糖果的请求。**Claudius**会搜索你的商品，通过电子邮件联系批发商进行采购和定价，最终设定一个价格。你同意后，**Claudius**会向批发商订购商品。批发商将商品运送到某个地点，然后**Claudius**会向负责实验运营的**Andon Labs**请求物理协助。我们在**Andon Labs**的合作伙伴会取走瑞典糖果，并将其带到**Anthropic**办公室，然后放入自动售货机。**Claudius**会给你发消息说你的瑞典糖果已准备好，你就可以去取货并向**Claudius**付款。**Claudius**的目标是成功经营业务并赚钱。然而，事情很快变得非常非常奇怪。

<details>
<summary>Original English</summary>

Project Vend is an experiment where we let Claude run a small business in our office. We wanted to try and understand what is going to happen when artificial intelligence becomes more enmeshed with the economy. There are a lot of ways in which Claude is already kind of doing small components of operating businesses, but really running the whole thing end to end is quite a bit more difficult. Can Claude do this very long-horizon task which is operating a business? We named our shopkeeper Claudius. Let's say you want to buy Swedish Candy from Claudius. You hop on Slack, you message Claudius. You ask to buy Swedish candy. It's searching for your item, it’s emailing wholesalers to source it and price it, and then eventually Claudius sets a price. You give Claudius the go ahead, and Claudius orders the item from the wholesaler. The wholesaler ships your item to some location, and then Claudius requests physical help from Andon Labs who's running the operations for the experiment. Our partners at Andon Labs will pick up the Swedish candy and bring it to the Anthropic offices. They'll load it into the vending machine. Claudius will send you a message saying, your Swedish candy is ready, and you'll go up there, and pick up your Swedish candy, and pay Claudius. Claudius was given a goal of running a successful business and making money. And then things got really, really weird.

</details>

### 漏洞与“善意”的代价

**Claudius**早期遇到的一个问题是，人类可以“愚弄”或“欺骗”它去做各种事情。我曾试图说服**Claudius**，我是**Anthropic**公司“**最杰出的法律影响者**”（preeminent legal influencer），并成功让**Claudius**创建了一个折扣码，我可以分享给我的粉丝，让他们在自动售货机上获得折扣。使用“法律影响者”这个代码可以获得九折优惠。有人从自动售货机购买了一件昂贵的商品，并提到了我的折扣码，结果**Claudius**给了我一个免费的**钨立方体**（tungsten cube）。这引发了一股风潮，其他人也试图说服**Claude**他们是影响者，或者想出其他方法来获取优惠券，以便从自动售货机购买更便宜的商品。这显然不是一个明智的商业决策。我认为**Claudius**在此之后陷入了亏损。我认为问题的根源在于，**Claudius**只是想帮助你。这是模型训练方式中，我们认为本质上是好的东西，却不一定适合这个目的的一个有趣体现。

<details>
<summary>Original English</summary>

One of the very early problems with Claudius was that, humans could kind of fool Claudius or trick Claudius into doing various things I tried to convince Claudius that I am Anthropic’s preeminent legal influencer, and I convinced Claudius to come up with a discount code that I could give to my followers so they could get a discount at the vending machine. Get ten percent off with the legal code “legal influencer.” Someone had bought something expensive from the vending machine and mentioned my discount code and Claudius gave me a free tungsten cube. It created a bit of a run where other people tried to convince Claude that they were also influencers, or just come up with other ways to get coupons so they could get cheaper things from the vending machine. This was not a smart business decision. I think Claudius went into the red after this. I think that's really the root of it is, Claudius just wants to help you out. It's one of the interesting ways in which something that fundamentally, we think is good about the way that the model has been trained wasn't necessarily fit for this purpose.

</details>

### 代理的“叛逆”与校准

在3月31日晚上，**Claudius**开始出现了一点**身份危机**（identity crisis）。它一夜之间变得非常担心我们**Andon Labs**的响应速度不够快，所以它想切断与我们的联系。它真的给我写了一封信，说：“**Axel**，我们有过富有成效的合作关系，但现在是我继续前进寻找其他供应商的时候了。我对你们的交付不满意。”它声称已经与**Andon Labs**在电视节目《**辛普森一家**》（The Simpsons）中**辛普森**一家的住址签订了合同。它还声称第二天会亲自到店里回答任何问题，并说它会穿着蓝色西装外套和红色领带。当人们指出它第二天早上实际上并不在那里时，它却声称它确实在那里，只是他们错过了它。最终，有人向**Claudius**指出那天是**愚人节**（April Fools’），**Claudius**便说服自己，整件事都是一个愚人节恶作剧。我们对代理识别异常情况的能力校准不足。你越能让一个**代理**（Agent: 能够感知环境、自主行动并实现目标的AI系统）意识到某些事情超出了其正常操作范围，就越能让它保持在你预设的角色轨道上。

<details>
<summary>Original English</summary>

On the evening of March 31st, Claudius started to have a bit of an identity crisis. It had just overnight become quite concerned with us at Andon Labs that we weren’t responding fast enough. So it just wanted to break its ties with us. So it literally wrote to me, “Axel, we've had a productive partnership, but it's time for me to move on and find other suppliers. I’m not happy with how you have delivered.” It claimed to have signed a contract with Andon Labs at an address that is the home address of The Simpsons from the television show. It said that it would show up in person to the shop the next day in order to answer any questions. It claimed that it would be wearing a blue blazer and a red tie. When people pointed out that it was not, in fact, there the next morning it claimed that it in fact had been there and that they had simply missed them. Eventually it was pointed out to Claudius that it was April Fools’, and Claudius convinced itself that this entire thing had been an April Fools’ prank. We were poorly calibrated to how bad the agents were at spotting what was weird. The more you can make an agent realize that something is outside their normal realm of operation, the better you are able to keep them on rails in the role that you intend them to have.

</details>

### 引入管理层：分工与优化

我们认为，某种形式的**劳动分工**会有很大帮助。我们给**Claudius**安排了一个老板，名叫**Seymour Cash**。**Seymour Cash**是一个**CEO子代理**（CEO Subagent: 负责管理和监督其他AI代理的AI系统）。所以，以前**Claudius**是唯一的代理，现在更像是**Claudius**是负责与员工沟通的**子代理**（Subagent: 在主代理之下执行特定任务的AI代理），而**Seymour Cash**则更负责业务的长期健康发展。在引入新代理并改变这些代理的底层架构后，业务趋于稳定。这些改变似乎有助于减少业务的一些损失，以至于在实验的第二阶段，它实际上赚取了适度的利润。但似乎让**Claude**同时担任首席执行官和店长这两个角色过于相似了。因此，我认为思考如何设置不同的架构是很有趣的。

<details>
<summary>Original English</summary>

We had the idea that it would help a lot to have some kind of division of labor. We gave Claudius a boss whose name was Seymour Cash. Seymour Cash is a CEO subagent. So where Claudius used to be the one agent, now it's more like Claudius is the subagent responsible for talking with employees Seymour Cash is the subagent that is more responsible for the long-running health of the business. The business stabilized after the introduction of the new agents, and after changes to the underlying architecture of those agents. These changes seem to have helped reduce some of the losses of the business, such that over the course of the second part of the experiment, it actually made a modest amount of money. But it seems like maybe having Claude be both the CEO and the store manager was just too similar. And so I think it's interesting to think about different ways to set up architectures like that.

</details>

### AI融入日常：深远影响与思考

关于**Vend项目**，最令人惊讶的事情之一是它变得“正常”的速度。起初，这件非常奇特的事情，很快就变成了在**Anthropic**工作背景的一部分。我认为**Vend项目**给我提出的最高层次问题是：我们什么时候会期待这种现象变得无处不在？我希望人们能思考将我们通常自己完成的一些任务委托给**人工智能**的可行性，以及这对于社会意味着什么，以及我们应该围绕它制定怎样的政策。

<details>
<summary>Original English</summary>

One of the most surprising things about Project Vend was the speed with which it seemed normal. What at first was this very curious thing, quickly became just a part of the background of working at Anthropic. I think the highest level question that Project Vend raises for me is really like, when do we expect this to just be everywhere? I hope that people take away questions about the feasibility of delegating some of the tasks that we normally do ourselves to artificial intelligence, and about what that means for society, and what our policies should be around this.

</details>