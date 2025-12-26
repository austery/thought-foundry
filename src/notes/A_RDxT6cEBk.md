---
area: "tech-engineering"
category: business
companies_orgs:
- a16z
- Stanford
- YouTube
- Amazon
- Google
- Expedia
- Airbnb
- Uber
- Duolingo
- Anthropic
date: '2025-10-21'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- TechCrunch
- ReadWriteWeb
- Mashable
- Quora
people:
- Sam Altman
- Jeff Bezos
- Eric Schmidt
products_models:
- AWS
- Cursor
- LLMs
project: []
series: ''
source: https://www.youtube.com/watch?v=A_RDxT6cEBk
speaker: a16z
status: evergreen
summary: 本文深入探讨了API基础设施公司Kong（前身为Mashape）的艰辛创业历程，从在米兰车库的早期挣扎，到在硅谷的多次关键转型和融资。嘉宾分享了公司如何在资金匮乏、面临倒闭的边缘坚持下来，最终通过开源API网关Kong实现爆发式增长。文章还展望了AI时代下API基础设施的演变，强调了API在机器间通信中的核心作用，以及Kong如何应对这一新的市场变革。
tags:
- api-infrastructure
- llm
- market
- open-source
- startup-journey
title: 从米兰车库到API巨头：Kong的创业史与AI基础设施的未来
---
### 早期挣扎与创业初心

AI: 他打开一个衣柜，里面堆满了香蕉，因为有一个人只吃大香蕉。他又打开另一个衣柜，里面是另一张床垫，睡着其他几个人，他心想：“这才是真实的生活。”我们当时身无分文，只剩下600美元，买了美国联合航空（United）的机票，我们有90天的时间来决定成败。我们知道，如果不能成功融资，就只能身无分文地回到意大利，一切就此结束。我想很多人可能不知道或不曾意识到，Kong在真正起飞后发展得有多快。在此之前，我们经历了七年的“饥饿期”，基本上毫无进展。每年我们都会颁发创始人奖，这个奖项会给公司最优秀的员工2555股股票。之所以是2555，是因为它象征着2555天的奋斗，是一个纪念七年挣扎的符号，每年都是一次回顾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He opens a closet and there's like all the bananas felling off because there was one guy's only eating huge bananas. He open another closet is another mattress with other guys sleeping a second closet and say okay this is real. We had no money. We we we we just take 600 bucks last left to go to a United flight and we had 90 days to just uh make it or break it. We knew that if we couldn't race we would go back to Italy broke and that was it. I think a lot of people don't know or maybe don't appreciate how fast Kong grew when it actually happened. So there was seven years of starvation, right? I mean, it was just basically wasn't working. Every year we do the founders award. The founders award is 2,555 stock to the best employee of the company. Why that is 255 days of struggle. It's just symbolic. But to remember seven years of struggle, every year is a retro.</p>
</details>

主持人: AI是Kong的创始人兼首席执行官，该公司前身为Mashape。我们正在回顾他从米兰的一个车库起步，到现在成为一家规模化公司的首席执行官的经历，我敢说，在某个时候，公司会有上市（IPO）的雄心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So AI is the founder and CEO of Kong which was previously mass shape and we are covering his background from a garage in Milan uh to now being the CEO of a atscale company with I dare say IPO ambitions at some point.</p>
</details>

AI: 路漫漫其修远兮，但这是其中的一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Long way long way to go but that's one of the steps along the way.</p>
</details>

主持人: 有雄心壮志。好的，所以你们当时在做API相关的事情，然后持旅游签证来到美国。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ambitions. All right. So, so you're doing this kind of API thing. You come to the US on a tourist visa.</p>
</details>

AI: 是的，持旅游签证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tourist visa. Yeah.</p>
</details>

主持人: 你们的想法是融资？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the idea was to raise</p>
</details>

AI: 90天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">90 days.</p>
</details>

主持人: 想法是融资吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Was the idea to raise funding?</p>
</details>

AI: 是的。我们当时身无分文，只剩下600美元，买了经辛辛那提飞往旧金山的联合航空（United）航班。我们经过了二次检查室，最终抵达了旧金山。我们有90天的时间来决定成败。我们知道，如果不能成功融资，就只能身无分文地回到意大利，一切就此结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. We had no money. We we we we just take 600 bucks last left to go to a United flight through Cincinnati. We went through secondary room. Uh we landed up and we landed up through sorry Atlanta first time. Cincinnati was secondary room. And then we went right arrived to San Francisco and um and we had 90 days to just uh make it or break it. We knew that if we couldn't race, we would go back to Italy broke and that was it.</p>
</details>

主持人: 那么你们成功融资了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So did you raise those?</p>
</details>

AI: 是的，我们在离开前两周成功融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we raised two weeks before departure.</p>
</details>

主持人: 你们在那些...

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You you raised in those</p>
</details>

AI: 天使轮融资（**Angel Round**：早期阶段的融资，通常由个人投资者提供资金，早于种子轮）中筹集到了资金。那已经是十年前的事了，当时都是小额支票。那是一轮5万美元的融资，由YouTube团队定义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">angel rounds. Uh it was you know that we're talking about decade ago, right? Small checks. It was 50K round was defining YouTube teams.</p>
</details>

主持人: 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

AI: 还有一个有趣的故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There we go. And here's a funny story like</p>
</details>

主持人: 你们是怎么认识他们的？好的，那有两件有趣的事情。你能再说一遍吗？我可能无法再说一遍了。是的，第一件事是，我们去了斯坦福大学的创业周活动。当时斯坦福大学在二月份举办创业周。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">how did you get introduced to that? Uh okay that's that's um so there's two interesting thing that you say can you redo it again I won't be able to redo it again. Yeah. So number one is we went to the Stanford entrepreneurship week at that time Stanford was doing the Stanford entrepreneurship week in February</p>
</details>

AI: 他们很酷，所有创业者和风险投资人都会来那里。当时有一个创业者交流派对。我们去晚了。那时，所有的邮件和注册信息都在纸上。我们把那些带有邮件和注册信息的纸偷走了，然后带着它们回家。那天晚上，我一直写邮件到凌晨5点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and they were cool. You made all entrepreneurs all the VC were coming there and um there was this entrepreneurship mixer big party. We arrived we left late. There was a there was a big at that point it was all paper with all the email and the registration. We steal the things with all the email and the registration and we walk home with that. And that night till 5:00 a.m. I write all the 400 emails.</p>
</details>

主持人: 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow.</p>
</details>

AI: 内容大概是：“嘿，你需要了解Mashape。我们没能在派对上聊上，但我很乐意明天给你做个演示。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">About, hey, you need to know about Masha. We didn't have time to catch up at the mixer, but I'm happy to give you a pitch tomorrow.</p>
</details>

主持人: 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow.</p>
</details>

AI: 我想，470封邮件没有回复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think 470 didn't reply.</p>
</details>

主持人: 30封回复了，其中10封有点兴趣。最终有五六个人来见我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh 30 reply and 10 were kind of interested. At the end five or six went to meet us</p>
</details>

AI: 然后这个人...

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then this one person</p>
</details>

主持人: 他告诉了凯文·多纳休（Kevin Donahu），他是YouTube融资团队的副总裁之一，他来到了我们这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">told like Kevin Donahu who was the the VP one of VP funding team of YouTube came to our</p>
</details>

AI: 凯文·多纳休。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Kevin Donahu</p>
</details>

主持人: 凯文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Kevin</p>
</details>

AI: 后来他创办了一家婴儿书籍公司，并将其出售了。他说：“看，我觉得这很有潜力。”于是他给我们开了一张17000美元的支票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then he started a company for baby books he sold it but he he said look I think this is something so he wrote a $17,000 check on our air m</p>
</details>

主持人: 几千美元。是的，对我们来说，17000美元就是生命。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">thousands yeah and for us 17,000 was life</p>
</details>

AI: 与债务相比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">versus debt</p>
</details>

主持人: 我们只有600美元和几百美元。然后他又带来了另外两笔融资。实际上是16000美元、16000美元、16000美元，我们拿到了15000美元。问题是15000美元分成三份是6666美元，数字太多6了，我们不想要太多6。所以我们把它凑整到17000美元，最终拿到了一张51000美元的支票。现在，第二个有趣的部分是，我们在特拉维斯·卡兰尼克（Travis Kalanick）的家里谈判并敲定了这笔交易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we came from 600 bucks and few hundred bucks and so then he brought two other phoning actually was 16,000 16,000 16,000 we got 15,000. The problem with 15,000 divided 3 was 6666. There was too many sixes like we don't we don't want too many six in the captive. So we we round it up 17 17 and we got 51,000 check. Now the funny the second funny part is we negotiated and closed the deal at Travis Kalani house.</p>
</details>

主持人: 特拉维斯·卡兰尼克（Travis Kalanick）的家。我记得有一篇文章写到你睡在他家的沙发上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Travis Kalanic's house. I remember there was an article about you sleeping on his couch.</p>
</details>

AI: 是的，还有Airbnb的那些人也是。但在与这些人谈判时发生了什么呢？他们正在谈判，但他们不想。所以特拉维斯当时在卡斯特罗有一栋房子，他称之为“果酱屋”（jampad），每个人都会去那里。亚伦·利维（Aaron Levie）会去，Dropbox的德鲁（Drew）也会在周末去那里。我当时没有地方住。所以特拉维斯实际上让我住了他家几周，只要我每周为他的另一半做一次意式培根蛋面（carbonara）。我照做了。然后我们需要帮助，他说：“来我的厨房，我们来谈判。”所以我们坐在桌子旁，我和特拉维斯·卡兰尼克，还有那三位YouTube投资者，他们正在谈判这些可转换票据（**Convertible Notes**：一种短期债务，可在未来融资轮中转换为股权），折扣高达50%，简直是疯了。我们当时很绝望，所以我说：“好吧，我不想接受这笔交易，去他的。”我说：“好吧，好吧，我们要走了。”我当时很天真，才20岁。我说：“好吧，好吧，他们会回来的。”特拉维斯走过来，搭着我的手说：“如果这些人走了，你就再也见不到他们了，也别想拿到钱。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. And Airbnb guys as well. But what happened during the negotiation with these guys were negotiating and they didn't want. So Trevy's had at that time was this house up in Castro called it a jampad where everybody would go. Aaron leave would go and uh Drew from Da was the all going there on the weekends and I didn't have a place to stay. So actually Travis give me his place to stay a few a few weeks as long as I would cook carbonara for his better half once a week. And I did that and then and then we needed help. He said come to my kitchen. We negotiate. So we sit on the table. It was myself and Travis Kalanic and they were the three YouTube investors negotiated this convertible notes are like 50% discount something crazy. were desperate and so I say okay well I don't want to take this deal like you know screw that I say okay okay we're going to leave I say and I was very naive 20 years old okay okay will come back and Travis come to me put the hands and say if this guy leave you're never going to see them again and nor the money</p>
</details>

主持人: 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">wow</p>
</details>

AI: 所以让我做点别的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so let me do something else</p>
</details>

主持人: 所以你们留在这里，想出反建议，我去了洗手间。我们关上门，十分钟后回来。他把我带到洗手间，锁上房门，这样这些人就不会...我们去了洗手间，在那里待了十分钟，然后又回去进行另一轮谈判，再回到洗手间。就这样来回三四次，最终我们握手达成了协议，最终的折扣是42%的可转换票据，而不是50%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so you guys stay here and figure it out the the cont offer and I go to the bathroom we close his s and we come back in 10 minutes so brought me to the bathroom lock the door of the house so these guys don't went to the bathroom and we said there 10 minutes go back another round of negotiation back to the bathroom so three four time at the end we handshake on the deal just finally better like 42% convertible kind instead of 50</p>
</details>

AI: 而且上限更高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and no and it was a higher cap</p>
</details>

主持人: 就是这样，然后我们握手，事情就定下来了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that's it and then we shake the hand and and that was it</p>
</details>

### 融资与关键转折

主持人: 这太疯狂了。我记得你当时在Quora上有一个关于在旧金山每年花费13000美元生活的热门帖子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's crazy so I I remember you had the um you had the Quora like the top Kora post for living on like 13,000 a year in San Francisco.</p>
</details>

AI: 你们筹集了51000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You had raised 51,000</p>
</details>

主持人: 现在你们必须让这笔钱尽可能地维持下去。所以也许可以谈谈接下来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and now you had to make that last as long as possible. So maybe talk about the the next</p>
</details>

AI: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

主持人: 延伸。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">stretch.</p>
</details>

AI: 发生的事情是，我们显然必须回去。我们在两周内就成了非法居留者。所以我们回到了意大利，然后我们又持B1签证回来，可以在这里待六个月。但是怎么做呢？我们没有社会安全号码，没有信用评分，什么都没有。所以你必须进入这个与意大利系统非常不同的美国系统。你必须进入一个新系统，而我们当时一无所有。所以我们无法支付自己的工资，因为我们没有社会安全号码，也没有合法的签证来支付自己。所以公司...

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What happened is obviously we got we got to go back. We are illegal in two weeks. So we went back to Italy um and we we we we came back with a B1 which you could be there. We can be here 6 months. But how? We have no social security number. We have no credit score. Nobody. So you have into this American system very different than Italy system. You you you have to enter into a new system and we had zero anything. So we couldn't pay our salary cuz we didn't have SSN. We didn't have a legal visa to pay oursel all that. So the company</p>
</details>

主持人: 你们当时有员工吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Did you have employees at this point?</p>
</details>

AI: 不，只有我们两个人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, it was just you two.</p>
</details>

主持人: 我们有三个人。米凯拉（Mikuela）是当时的土耳其联合创始人。但是我们做了一份每月1900美元的期票（**Promissory Note**：一种书面承诺，承诺在特定日期或按需支付特定金额给特定个人或实体），公司会给我们，我们三个人每月必须靠1000美元生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was three of us. It was Mikuela was the Turk co-founder back then. But um we did a,000 and about 1,900 monthly promisory note that the company would give us and we would have to live in three with $1,000 a month.</p>
</details>

主持人: 那就是...

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That would be</p>
</details>

AI: 所以你们每月靠1000美元生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you you were living off of $1,000 a month.</p>
</details>

主持人: 三个人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In three people were living off $1,000.</p>
</details>

AI: 是的。在旧金山。你们是怎么做到的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. For in San Francisco. How do you do that?</p>
</details>

主持人: 那时便宜些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was cheaper.</p>
</details>

AI: 这是哪一年？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what year was this?</p>
</details>

主持人: 2009年，2010年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh 2009 2010.</p>
</details>

AI: 即使是那时，2010年，即使是那时也不可能。三个人每月1000美元。我告诉你是怎么做到的。我们住在Airbnb，每月大约100美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even then. 2010. Even then it's impossible. $1,000 a month for three people. I tell you how we did it. So, we live it in uh on Airbnb somewhere else at like 100 bucks</p>
</details>

主持人: 都睡在同一张床垫上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and all in the same mattress.</p>
</details>

AI: 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um Wow.</p>
</details>

主持人: 我们去了瓦伦西亚（Valencia）。我不知道你是否在瓦伦西亚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh we were going to Valencia. I don't know if you in Valencia.</p>
</details>

AI: 你们有办公室吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Did you have an office?</p>
</details>

主持人: 不，我们在星巴克工作，住在瓦伦西亚，买米、豆子、金枪鱼和意大利面。原因是我们要以最便宜的方式找到合适的碳水化合物和蛋白质。那就是这种组合，我想是碳水化合物和蛋白质以最便宜的方式。我们就是这样做到的。我们从不在外面吃饭，从不购物。我们把所有事情都在家里做。我们在Airbnb的厨房里做饭。米饭、豆子或金枪鱼意面。事实上，我们吃了太多金枪鱼意面加番茄酱，以至于马可（Mark）和我现在看到金枪鱼意面就想吐，因为我们每天都吃金枪鱼意面。所以，这持续了多久？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, we were working out of Starbucks and we were living in Valencia and we were buying rice, beans, and tuna and pasta. And the reason is that we had to find the right amount of carbs and product at the cheapest way possible. And that was the combination of I guess amount of carbs and product at the cheapest way possible. And that's how we made it. Like we we never eat out. We never buy. We did everything in the house. We cooked in the in the kitchen Airbnb. Rice, beans or tuna pasta. In fact, we eat so much tuna pasta with tomato that Mark and I when we seen tuna pasta, we almost threw up because we just running on tuna pasta every single day. So how wait so how how long did this last?</p>
</details>

AI: 那持续了，从2010年3月、4月开始，一年零几个月。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That last uh so March April 2010 a year a year and a few months.</p>
</details>

主持人: 哇。这段时间你在做什么？我知道马可（Marco）在写代码。你在做什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. And what were you doing this time? I can I know what Marco was doing this time. He was writing code. What were you doing?</p>
</details>

AI: 我在写博客，搭建网站，打电话给那些注册用户，与网站上的每一个注册用户交谈，试图找出问题。我当时身兼数职，做业务开发、HTML、CSS切片，还与投资者交谈，开始筹集种子轮融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was writing blog, building the website, calling uh pro the sign up, talking with all every sign up on the website that was talking to us and trying to figure out I was mix of b devs, HTML, CSS, slicer, um talking with investor too as you start to build the seed rounds.</p>
</details>

主持人: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

AI: 呃，还试图招聘，但从未成功，因为没有人愿意为那些可能随时消失的非法意大利人工作。所以犯了很多错误，还有一些其他事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um trying to do some recruiting that never worked because nobody wanted to work for illegal Italians that will disappears. So a lot of lot of mistakes and this Yeah. few things.</p>
</details>

主持人: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

AI: 好的。那么我们来谈谈种子轮融资（**Seed Round**：第一阶段的股权融资，通常用于产品开发和市场研究）。所以有人决定在某个时候给你们一笔正式的融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So take us to the seed round. So somebody decided to give you a proper round at some point.</p>
</details>

主持人: 于是，一年后，我们重新架构了产品。我们去了檀香山（Honolulu），在莫阿纳海滩（Moana beach），我们思考着：“好吧，所有这些我们正在聚合的API。”我想这个词现在才真正被我们理解，但在10到15年前，它还没有准备好。他们当时想通过拖放（drag and drop）的方式，利用API即时构建应用程序。我们走得太超前了。我们缺少一些关键部分，但我们说：“嘿，我们正在封装很多API。”实际上，这种可视化装配线（assembly line visual）的理念仍然成立。我们只需要调整方向，建立一个API市场，让所有API的生产者和消费者都能聚集在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then a year later we we we rearchitect. So we went we went to Honolulu on the beach and Moana beach and we we thought about okay all these APIs were aggregating. I think the word is actually actually we see now finally now but 10 10 15 years ago it wasn't ready. they were to like build apps on the fly through APIs with drag and drop. We wen't we were too far ahead. We're missing pieces but say hey we're we are wrapping a lot of APIs actually that assembly line visual still hold. We just have to pivot it and build an API marketplace where all the APIs producer and consumers they can come together</p>
</details>

AI: 所以我们进行了转型，重新发布了它，伴随着TechCrunch等所有媒体的报道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so we pivot that we relaunch it uh with you know tank crunch all the stuff.</p>
</details>

主持人: 好的。所以最初你们在做这种拖放式的组合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So so originally we're doing this kind of drag and drop composable</p>
</details>

AI: 应用构建器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">app builder</p>
</details>

主持人: 应用构建器。很有趣，有多少公司都经历了这样精确的旅程，然后你们就说：“好吧。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">apps builder thing. So funny how many companies go through this like exact journey and then you're like okay</p>
</details>

AI: 使用HTML5。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">with HTML 5.</p>
</details>

主持人: 哇。然后你们就说：“不，我们需要建立一个市场。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. And then you're like okay no we need to build a marketplace.</p>
</details>

AI: 完全正确。因为，好吧，这个API经济将会到来。它不仅仅是应用程序。它将是API，我们建立了一个市场。我们发布了它。我们在长尾市场得到了一些关注，那已经是2011年的夏天了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. Cuz okay the economy this API economy will come. It's not just apps. It will be APIs and we build a marketplace. We launch it. We got little disentractions on longtail and that was already the summer of 2011.</p>
</details>

主持人: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

AI: 在夏威夷转型后。所以我们很快就发布了。砰砰砰。然后我们进行了融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After pivot in Hawaiian. So we launched very fast. Boom boom boom. And um and then we raised after</p>
</details>

主持人: 夏威夷之行是不是花光了你们最后的钱？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">was the was the Hawaiian on the last of the money from</p>
</details>

AI: 不，因为从旧金山到檀香山，我记得当时大概是300美元。所以我们用5万1千美元，我们在瓦伦西亚的Mission区，在一个历史建筑里，住在床垫上，吃着金枪鱼意面、米饭和豆子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No because San Francisco Tonolulu I think at that time it was like 300 bucks. So we say with our 51k we would we we we were living like on tuna pasta rice and beans in Valencia in mission in this in this historic building middle of nowhere and working mattress and things. It's like</p>
</details>

主持人: 难以置信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">unbelievable.</p>
</details>

AI: 我记得有一次我早上醒来，我说：“我必须去檀香山。我们可以在海滩上散步，思考我们的未来，或者没有未来。”因为我们知道这样下去没有未来。我们的钱开始耗尽，我们需要转型。那就是我们有了转型的想法。然后我们回来，我们做了疯狂的事情。我记得当时在搭建网站，市场变得疯狂，第三位联合创始人正在构建所有的Java后端，然后快速发布。当时得到了一些TechCrunch、ReadWriteWeb、Mashable的报道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At some point I remember I remember woke up in the morning I got to go I need I need to go to Honolulu. We could do our walk on the beach and thinking about our future or no future because we knew this was going no future. our money were starting to drain and we needed to pivot and that's where we had the idea let's go for the pivot and then we come back we we did the crazy I I remember was building the website market was going crazy the third co-ounder was building all the Java back ends and the launch fast and then got a little bit of tech crunch press at that time was read write web this other was mashable and so all that somehow we got covered by all of that which now like crazy and then um and boom and then we raised um and then it started seed round uh uh phase</p>
</details>

主持人: 从谁那里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">from who? So at that time</p>
</details>

AI: 当时我们经历了许多迭代，但最终是NEA领投了种子轮，然后Index Ventures共同领投。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh we went through a lot of lot of iterations but where we ended up was NEA leading the seed round and then Index co-leading 20A and then we and then we got a bunch and then</p>
</details>

主持人: 所以沃尔皮（Volpi）做了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in the se so Vulpi did the</p>
</details>

AI: 是的，实际上，第一批支票来自CRV的乔治·扎卡里（George Zachary）。当时他没有领投，但他写了支票，他是第一个承诺10万美元的。有了这笔钱，他说我们有CRV的10万美元。当时他们有一个非常不寻常的种子项目。然后我们去了28，他说我们要领投这一轮。当时他们也启动了一个50万美元的种子项目。然后我们继续，我遇到了刚搬到旧金山创办Index US的迈克·沃尔皮（Mike Volpi）。当时他与丹尼·莱默（Denny Rhymer）在那里。我说，他们也启动了天使投资和种子项目，他们又写了一大笔支票。然后我们得到了长尾效应，可能是杰夫·贝佐斯（Jeff Bezos）和埃里克·施密特（Eric Schmidt）的基金。所以我们得到了这种组合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah so what happened is actually the first checks were George Zakari from CRV back then he didn't like lead the round but he wrote he was the first 100k commit so with that he say we have CRV 100k at that point had a seed program very unusual back And then we went 28 and he said we're going to lead this round. At that point also they start a seat program 500k and then we went through and then and then I met Mike Vulpi that just moved to San Francisco to launch index US. It was like him and Denny Rhymer through there somewhere. I said and they also started out angel a seed program and they they wrote another big checks and then we got a long tail which was likely Jeff Bezos and Eddie Schmidt into the funds and so we got this this combination</p>
</details>

主持人: 贝佐斯和埃里克·施密特（Eric Schmidt）。这又是那种我们无法复制的DPD。所以发生了什么呢？杰夫·贝佐斯（Jeff Bezos），我知道他对市场、商业API和开发者很特别。亚马逊网络服务（**AWS**：Amazon Web Services，亚马逊提供的云计算服务平台）当时刚刚起步，是一个隐藏的秘密。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">basos and Eric Schmidt. So again that is said in DPD that I don't know we can't replicate. So what happened is Jeff Bezos so Jeff Bezos I knew he was special about marketplace as a business APIs and developers. AWS was just starting to take off. It was this hidden secret. So</p>
</details>

AI: 是2011年吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is it 2011?</p>
</details>

主持人: 是的。所以亚马逊当时可能是一家500亿美元或800亿美元的公司。呃，所以发生了什么呢？我雇用了他家族办公室的律师来为Mashape打电话。在我们为种子轮融资雇佣他之后，随着种子轮的进行，我说：“顺便问一下，既然你也是家族办公室和贝佐斯探险队的律师，你能把我介绍给杰夫·贝佐斯吗？”我们就是这样做的。这是一个PG电话，然后他当时正和他的兄弟在德克萨斯州旅行。他实际上想投入更多资金进行投资。砰。那就是杰夫·贝佐斯。你从杰夫·贝佐斯那里得到了什么？你得到了品牌。所以我们每年都有晚餐策略会议，但显然那是一个大品牌。然后，其次，埃里克·施密特（Eric Schmidt），我们当时在一个联合办公空间工作。发生的事情是，我们是唯一一家工作到最晚的初创公司，在另一家为邮轮公司做Expedia的初创公司之后，他们刚刚从NEA和埃里克·施密特那里获得了融资。最终，他们看到我们工作到凌晨三四点。当他们知道我们在融资时，他们会留下一些东西。投资者问：“谁比你们工作更努力？”他们说：“我们旁边的这些人。”所以他们把我们介绍给了埃里克·施密特的基金。这就是埃里克·施密特投资的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So Amazon was maybe a $50 billion company then $80 billion company. Um so what happened is uh I I I I hire the lawyer of his family office for call for me shape and after we hired for doing the seed round as the seed round was going along I say by the way since you are also the the lawyer of the family office and basos expeditions can you introduce me can introduce me to Jeff Basos that's what we do so it's a PG cool call and then he was on the road with his brother going around with his brother on the road in Texas and uh you he actually want to put more and invest. Boom. So that was Jeff Bezos. What do you get from Jeff Bz? You get the brand. So we got a dinners a year strategy of things but obviously was the big brand. And then second, uh, Eric Schmidt, we were working this co-working space. And what happened is we were the only startup that stay the latest in the night after this other startup that was doing Expedia for cruise ships that just raised from NEA and Eric Schmidt. And at the end, they saw us working till 3:00 a.m., 4:00 a.m. They would leave a chew when they knew we're fundraising. And this and the investor asked, "Who's the hardest worker than you?" And say, "This guy's next to us." And so they introduced us to the Eric Schmidt fund. And that's how Edish Mid invest.</p>
</details>

AI: 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow.</p>
</details>

主持人: 完全不相关。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Totally unrelated.</p>
</details>

AI: 好的。现在我们来到2011年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So now this brings us to 201.</p>
</details>

主持人: 那么你们当时总共筹集了多少种子资金？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what was your total? What was the total seed funding you raised at that time?</p>
</details>

AI: 当时这笔钱非常大，是150万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was very big. Uh it was 1.5.</p>
</details>

主持人: 哇，这是一笔巨大的种子轮融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like wow huge seed round.</p>
</details>

AI: 我得说是在2010年到2011年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got to say in 2010 11.</p>
</details>

主持人: 我得说，这充满了乐观。这是一种乐观的回顾，就像你们三个人睡在一张床垫上一年，然后你说你们很幸运。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I got to say there's a lot of optimism. It's an optimistic retrospective view to be like there was three of you on a mattress for a year and then you say you were lucky</p>
</details>

AI: 非法居留。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">illegally.</p>
</details>

主持人: 那听起来很不走运。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That sounds pretty unlucky.</p>
</details>

AI: 非法居留，可能要坐牢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Illegally. wrong to jail.</p>
</details>

主持人: 好的。现在你们有了种子资金，Mashape正在发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So now you have your seat fund match shapes going.</p>
</details>

AI: 所以我们筹集了种子轮。好吧，现在是动真格的了。我们必须拿到签证。我们去了意大利，去了美国大使馆，等等。办理推荐信。实际上，山姆·奥特曼（Sam Altman）是给我写推荐信的人之一，当时他是Looped的首席执行官。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then we raise the seat. Uh all right. Now it's real. We got to get these visas. We got a middle. So we went back to Italy, go to the American embassy, blah blah blah. Do the letter of recommendations. Actually Sam Alman was one of the guys that wrote me a letter recommendation when he was um CEO of Looped.</p>
</details>

主持人: 不开玩笑。我在NEA的静修会上遇到了他。我看到他坐在巴士上我旁边，我们去了圆石滩（Pebble Beach）参加NEA的静修会，我们一起度过了三个小时。我说：“顺便说一下，我在这里是非法居留。你能给我写一封推荐信，帮我申请O-1签证（**O1 Visa**：一种非移民签证，适用于在科学、艺术、教育、商业或体育领域，或在电影电视行业，拥有非凡能力或成就的个人）吗？”不开玩笑。他给我写了。所以我有这份很棒的推荐信，说我有多么出色。太棒了。我得到了推荐信。无论如何，你必须让这个人进入这个国家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No kidding. which I met on. We were going to the NEA retreat and I see next to him in the bus and we went to Pebble Beach to the NA retreat and we spent three hours together and I said, "By the way, I'm in illegal here. Can you write me a letter of recommendation for my 01 visa?" No kidding. And he wrote me. So I have this big thing of how great I am. That's great. I got a recommendation. You got to get this guy in the country no matter what.</p>
</details>

AI: 所以我们拿到了这五封信，我拿到了O-1签证，最终我拿到了签证。所以我终于可以来这里了。我们可以得到一个工作空间，我们开始招聘，我们有七个人。马可也拿到了签证。马可也因为那本爱情书，他从未上过大学或任何东西。所以那是最难办的签证。所以我们为他想办法，更多的推荐信。我们把他带到那里，我们留在这里，等等。我们建立了一年，我们成长了，但你知道，当时你需要一百万美元的收入，比如说，对于一个市场来说，你需要一百万美元的总交易额。我们当时只有5万美元，所以有很多用户，但收入不多。但是我们经历了一个三四个月的A轮融资（**Series A**：第二阶段的融资，通常在种子轮之后，用于扩大业务模式和运营）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we got this five letters and and I get this 01 visa and finally I got the visa. So finally I can come here. can get a wei work space and we start to hire and we had seven people and Mark also get the visa. Mark is also because of the love book he never got uh to college or nothing. So it was the hardest visa to do. So we we figured it out more letter recommendations for him. We brought him there we stay here blah blah blah we build a year we grow but you know at that time like you needed like a million let's say a million revenue to to take a a good ser for a marketplace you need a million in gross volume. we were like at 50k so lot of traction but not a lot of revenue. Um but we went through a 3 four month series A race and um and CRV uh led and then index was it devot that</p>
</details>

主持人: 是的，那个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah that</p>
</details>

AI: 是的，是的，因为乔治·扎卡里（George Zachary）更关注消费者，所以他把这个项目交给了德夫（Dev），德夫更关注企业方面。我记得德夫告诉我，周日早上6点去散步，决定是否投资。他知道我是个夜猫子，但他就是周日早上6点去帕洛阿尔托（Palo Alto）。我当时不得不租一辆Zipcar，当时还没有优步（Uber）。然后去那里，然后散了几次步，他决定投资，因为他一直非常相信API作为装配线的理念。他能看到这一点，也许不确定市场是否是正确的执行方式，但对于这个主题，他是一个坚定的信徒。我想他喜欢我们，他来看我们睡在同一张床垫上，他想真正看看我们是不是在吹牛，是不是真的有戏剧性的故事。实际上，那确实是戏剧性的。他打开了衣柜，他来到我们的房子，因为我们当时搬到了南公园（South Park）的一栋房子，我们在那里睡觉和工作，有七个人。他打开一个衣柜，里面堆满了香蕉，因为有一个人只吃大香蕉。你打开另一个衣柜，里面是另一张床垫，睡着其他几个人。他说：“好吧，这是真的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah yeah because George Zachary was more a consumer so he passed the the thing to death just more on the enterprise side I remember deva told me like Sunday at 6:00 a.m. to go for a walk uh to decided to invest or not and he knows I'm a night hole and and he just Sunday 6 a.m. to go to go down to Palo Alto which I had I had to rent a zip car where the zip cars there was no Uber and uh and go down there and and uh and then go for a few walks and I decided to to invest because he was he was always actually a big believer on APIs as assembly line he could see that maybe wasn't sure marketplace was the right execution but the theme he was a big believer and I think he like us like he came to see us sleep in the same mattress he wanted to really see that we're not like bullshitting the big drama story it was really drama actually he opens he came to the aer house cuz we moved to a house in South Park at that time where we're sleeping and working there with the 70p and he opens a closet and there's like all the bananas felling off because it was one guy's only eating huge bananas. You open another closet is another mattress with other guys sleeping a second closet. Okay, this this is real.</p>
</details>

主持人: 哇。你们的A轮融资有多大？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. How big was your a</p>
</details>

AI: 650万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">6 uh 6.5 million?</p>
</details>

主持人: 哦，所以对你们来说，那一定是一大笔钱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, so for you that must be must have been a lot of money.</p>
</details>

AI: 650万美元。是的。我当时带着这种力量出去了。当时我们想筹集1000万美元的A轮融资。那是当时的大事。我们最终筹集了650万美元。我说：“就是这样了。”当我们看到它时，感觉就像：“是的，也许我们有机会了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">6.5 million. Yeah. I went out with this power. Let's raise a 10 million serious at that point. That was like the big thing. We ended up at 6.5 and uh I say that's it was like when we saw it was like yeah like maybe we got a shot.</p>
</details>

### API经济与Kong的诞生

主持人: 所以在某个时候，你们决定市场行不通了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at some at some point you decided that the market wasn't working.</p>
</details>

AI: 市场行不通了。呃，我想我们筹集了这笔钱，我们招聘了更多人。我们搬进了20到25人的办公室，就像通常的融资后蜜月期一样。呃，我记得这件事，大约六个月后，我们的业务并没有真正取得任何进展。所以有一次董事会会议，我们只是为董事会成员做了意大利面，因为那是在你加入我们之前两年，当时没有什么业务可谈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The market wasn't working. And um I think so we raised this and we ra we hire more. We moved 20 off 25 people like you the usual post race uh honeymoon. Um and I remember this thing like 6 months after uh we the business wasn't really doing anything. So it was one board meeting that we just cook pasta for the board members at that time because that was like two years before you joined us and it was there was nothing to talk about from business.</p>
</details>

主持人: 问题是你们无法变现，或者存在毕业问题，就像这些市场非常艰难。所以，当我与Airbnb的创始人在一起时，我了解到市场可能是世界上最强大、最有影响力的商业模式，一旦你获得了流动性，你甚至不需要创新，你就可以颠覆它，看看eBay，你无法击败eBay。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The issue was is you couldn't monetize or there was a graduation problem like these marketplaces are very tough. So the the idea of the market when I was staying with Airbnb founders I learned that the marketplace are could be the biggest more powerful business in the world like you don't even have to innovate once you get liquidity it's just you can disrupt it look at eBay you eBay you can't kill</p>
</details>

AI: 所以我当时想，有这么多API，你可以建立一个市场，获得流动性，它会像……所以我们注意到，在我们的案例中，它是一个开发者API市场。所以要让一个市场运作，你需要有大量低权力的人。如果你集中在少数高权力的人手中，市场就无法运作，比如Airbnb的房子，有数百万低权力的人。所以那是一个事实，你需要某种程度的排他性，访问那个市场供应的门必须通过市场。API你可以通过谷歌（Google）找到，然后直接访问网站，你不会通过市场。当时公共API的权力很低，只有30个重要的，3000个不那么重要的。所以这也是长尾效应。第三点是质量，你无法维护供应的质量，你总是会因此受到指责，而且没有信任。所以我想正因为如此，它达到了150万美元的总收入，但它从未成为像Airbnb或Uber那样的API。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I thought like there's all this API you can build a marketplace liquidity it'll be like the w the ws of and so we we noticed though that in our case it was a developer API marketplace so to have a marketplace to work you need to have a long tale of low power people. If you have concentrated in a few high power marketplace doesn't work like Airbnb houses like millions of people with low power. So that was one true you need to have exclusivity somewhat like the door to access that that marketplace supply has to be through the marketplace. APIs you could Google and go to the website you wouldn't go through go through the marketplace. APIs at that time power of low for public APIs was on the tweet or the stride. There were 30 that matters and 3,000 that didn't matter much. So it was also this longtail power and third thing is was quality like you couldn't you were running a cloud marketplace you couldn't actually maintain the quality of the supply you were always get blamed for it and there was no trust and and so I think because of that it got to a million and a half in gross revenue but it never became this Airbnb or Uber API</p>
</details>

主持人: 那是10%的利润。是的，它还在AWS上亏损。所以他们，我永远无法在那个模型中实现经济效益。即使这个东西能够规模化，我也永远无法实现经济效益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that is like 10% yeah it was it was also losing margin on AWS so they I could never make the economics in that model I could never make the economics works even if this thing would have scaled so Then we go there. It's like, okay, this is we're here year we're burning. We're running out of money. And so we built this massive API engine behind the marketplace API gateway that was powering 20,000 APIs of this longtail doing billing, rate limiting, routing, caching, authentication, authorization, logging, all of that. We built it three times and the third time was the great one. And we say, wait a second, every company will become an API company. Why we don't take this this engine and we give it to the whole world? And that was the beginning of open source, And so boom, we we open source uh Kong.</p>
</details>

AI: 然后我们到了那里。就像是：“好吧，我们在这里一年了，我们正在烧钱（**Burn Rate**：一家公司消耗现金的速度），我们的钱快用完了。”所以我们在市场背后构建了这个庞大的API引擎——**API网关**（API Gateway：一个管理工具，位于客户端和一组后端服务之间，作为所有API调用的单一入口点，处理路由、认证、速率限制等），它为2万个长尾API提供支持，处理计费、速率限制、路由、缓存、认证、授权、日志记录，所有这些。我们构建了三次，第三次是最好的。我们说：“等等，每家公司都将成为一家API公司。为什么我们不把这个引擎拿出来，提供给全世界呢？”那就是开源（**Open Source**：软件源代码可公开获取，允许任何人查看、修改和分发）的开始。所以，砰，我们开源了Kong。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we go there. It's like, okay, this is we're here year we're burning. We're running out of money. And so we built this massive API engine behind the marketplace API gateway that was powering 20,000 APIs of this longtail doing billing, rate limiting, routing, caching, authentication, authorization, logging, all of that. We built it three times and the third time was the great one. And we say, wait a second, every company will become an API company. Why we don't take this this engine and we give it to the whole world? And that was the beginning of open source, And so boom, we we open source uh Kong.</p>
</details>

主持人: 你们开源Kong的时候，还有多少资金储备？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What was your what was your runway at the time that you open sourced Kong?</p>
</details>

AI: 呃，我们在2015年4月开源。我们不得不进行200万美元的过渡融资，才能再支撑一年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so we open source in April 15. We had to take a bridge of uh 2 million to go another year because</p>
</details>

主持人: 是内部过渡融资吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">was it an insider bridge?</p>
</details>

AI: 是的，我们不得不进行延期，因为我们快没钱了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, we we had to take an an extensions because we were out of gas</p>
</details>

主持人: 来自德夫（Dev）和迈克（Mike）吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">from from Dev and Mike.</p>
</details>

AI: 是的，他们给了我们200万美元的延期，因为我们快没钱了。否则我们就会倒闭。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, they give us an extension on the 2 millions because we were out of gas. like we were would have died otherwise.</p>
</details>

主持人: 哇。所以你们发布了，我记得Kong发布时确实引起了轰动。那是什么时候？2015年？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. So you you released I remember when Kong released it was actually a really big deal. When was that? 2015</p>
</details>

AI: 2015年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">15.</p>
</details>

主持人: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

AI: 轰动一时。我记得它起飞了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Big deal. I remember took off. Boom.</p>
</details>

主持人: 是的。所以这就是你我开始谈论你的融资的时候。你正在融资。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So this is when you and I started talking about your raise. You're raising the</p>
</details>

AI: 你来得正是时候，之前这些人毫无意义。好吧，现在开始有意义了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you came at the right times before like these guys make no sense. Okay. Now it start to make sense.</p>
</details>

主持人: 即使如此，那对你来说也是一场艰难的融资，因为公司已经成立七年了，像Kong这样的市场刚刚推出，虽然它正在起飞，但也才几个星期，也许几个月。所以老实说，我告诉你，对我来说，是这样一件事：我们做了所有的工作，GitHub上的星标也检查过了，你的故事很了不起，你对业务的掌控也很出色，但这还不够。但在我们进行尽职调查的时候，我不断收到这些偶然的反馈，比如有人使用了Kong并且非常喜欢它。我记得是不是有人住在你的Airbnb里，然后非常喜欢Kong，然后你把这个转发给了我。所以，Kong周围弥漫着这种时代精神。因此，我心想：“哦，这显然是一个现象。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, that was even a tough race for you just cuz the company had been around for seven years like a marketplace like Kong had just come out and it was taking off but like it only been a couple of weeks maybe a couple of months and so honestly I'll tell you what what did it for me is um you know we were doing all the work and like the GitHub stars checked out your story is phenomenal your command of the business is great but it just wasn't enough but then While we were doing the diligence, like I kept getting these kind of serendipitous like somebody had used Kong and loved it. I remember didn't like somebody stay in like your Airbnb and like loved Kong and like and then you forwarded that to me and so there just kind of like all of this, you know, zeitgeist around Kong. And as a result of that, I'm like, "Oh, this is clearly a phenomenon."</p>
</details>

AI: 是的。我记得我当时给你发了大量的邮件，里面都是每一个潜在客户或用户对Kong的评价，不停地提到Kong的使用情况，就像它把我的收件箱都炸了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I remember I was spamming you with emails of every prospect or customer user they were saying just you saying Kong Kong usage Kong usage just nonstop like it was blowing up the inbox.</p>
</details>

主持人: 是的。是的。是的。所以我们离资金耗尽还有多近？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Yeah. So how close how close were we to running out of money for it to be?</p>
</details>

AI: 呃，在过渡融资之后，只有几周了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so after bridge there were [Music] weeks.</p>
</details>

主持人: 天哪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jeez.</p>
</details>

AI: 是的。但我非常。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. But I was very</p>
</details>

主持人: 你的余生再也没有什么能让你感到压力了，因为你至少在商业上多次濒临绝境。因为我确实记得。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nothing Nothing is ever gonna stress you again your entire life because you've been so close to at least business so many times because I actually remember</p>
</details>

AI: 当我们去办公室的时候，感觉死气沉沉。感觉基本上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when we went to the office it felt dead. It felt like basically</p>
</details>

主持人: 不，不，我们已经死了，只是我们不知道而已。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, no, we were dead and we just didn't know about it.</p>
</details>

AI: 你们离倒闭只有两周了。我的意思是，感觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You were like two weeks from being dead. I mean it felt</p>
</details>

主持人: 我们就像，你知道，它飞起来了，但它不应该飞起来，我们继续前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we were like bang you know that it flies but it's not supposed to fly and we keep going.</p>
</details>

AI: 不，我记得很清楚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, I remember that very very well.</p>
</details>

主持人: 是的。你当时想：“这家伙已经在这里待了一段时间了。我想他们会，你知道，无论他们筹集到多少钱，然后他们就会放弃。”你工作了，我说，我说，这很艰难。呃，我想，我想如果我们回到过去，我说我不知道我们是否能够复制所有发生的序列，所有发生的事情。我记得我们去了，是的，然后，呃，然后我们和马克·安德森（Marc Andreessen）以及你和我一起吃了那顿很棒的寿司，我们敲定了交易，还有马可。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. You you were like you're like this guy's been there a while. I think they're going to, you know, whatever they raise money and then they're going to give up. You work I said I say and it was tough. Uh and I think I think if if we go back I say I don't know we were able to replicate all the sequence that happens all all the things that happens and I remember we went uh yeah and then uh then we had that that great sushi with with Mark Andre and you and I and we sealed the deal and Marco.</p>
</details>

AI: 是的。2016年底我们完成了交易，从那时起，公司就一直表现出色。我的意思是，最近有一个公告说，公司营收超过了1亿美元，这实际上是很久以前的事了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. The end of 2016 we closed and since then the company's just been remarkable. I mean there was kind of an announcement recently that across 100 million which is now actually quite a while back.</p>
</details>

主持人: 一年半以前。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A year and a half ago. Yeah.</p>
</details>

AI: 一年半以前。所以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A year and a half ago. So we we</p>
</details>

主持人: 是的。在一年半的时间里，相当于十年。当我们投资的时候，我们的年经常性收入（ARR）还不到一百万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. It was in in a year and a half is 10 years where we were like when you invested we were AR less than a million.</p>
</details>

AI: 是的。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah.</p>
</details>

主持人: 不到一百万美元，可能只有50万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Less than a million of do not even a million 500k probably.</p>
</details>

AI: 你还记得吗？我记得。是的。所以你们第一年表现出色，然后我告诉你，我说：“听着，如果你达到1000万美元，或者 whatever，我给你买辆车。”你还记得吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you remember once I remember? So yeah. So you had a great first year and then I told you I said listen if you if if you hit 10 million or whatever it was I'll buy you a car. remember that</p>
</details>

主持人: 我记得。哦，实际上我们现在在新办公室里有。我需要给你发张照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I did. Oh, actually I we have in the new office now. I need to send you a picture.</p>
</details>

AI: 嗯，这有一个有趣的故事。所以，你知道，你做到了。所以我想你那一年增长了十倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, there's a funny story about this and so like you know you um you do it. So like I think you grow like 10x that year.</p>
</details>

主持人: 所以那一年我们从200万美元的年经常性收入增长到1000万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that year we went from 2 million of RR Yeah. to 10.</p>
</details>

AI: 那是对的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That was right.</p>
</details>

主持人: 计划是六七百万。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The planning was six or seven.</p>
</details>

AI: 是的。是的。是的。是的。是的。然后我去了，我向合规部门咨询，我说：“我能给奥吉（Auggie）买一辆便宜的车吗？”他们说礼物的最高限额是 whatever。听起来不怎么样。所以，所以我最终给你买了最好的模型车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Yeah. Yeah. Yeah. And then I went I went I checked with compliance and I'm like can I buy Auggie a cheap car and they said the maximum for a gift is whatever it is. doesn't sound like crap. So, so I ended up buying you the best model car I could find</p>
</details>

主持人: 我想是从日本买的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">from Japan, I think.</p>
</details>

AI: 是的。是的。是的。我花了很多时间寻找这款模型车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah, yeah. I spent a long time actually looking for this model car.</p>
</details>

主持人: 是280 GT吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is the 280 GT?</p>
</details>

AI: 是的。是的，没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah, that's right.</p>
</details>

### AI时代的API基础设施

主持人: 好的。所以，所以我想把话题转向你如何看待产品，如何看待市场，然后转向人工智能（AI）。所以你实际上已经看到了几次转变，对吧？你看到了云计算的到来，你看到了向API的转变。所以也许可以谈谈你如何看待当前AI带来的转变。它是否根本不同？是否相同？它是否改变了你作为领导者的思考方式？你如何从高层次看待这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, great. So, so I would love to shift I think this is the most remarkable Silicon Valley startup story that I know of that I'm close to and I kind of having They will make a movie one day. They will have to make a movie one day. Yeah. Um I would love to like kind of shift towards how you think about product, how you think about markets and then kind of move towards AI. So you actually have seen a number of shifts now, right? You've saw the cloud come, you've saw the shift to APIs. So maybe just talk a little bit about how you view this current shift with AI. Is it is it fundamentally different? Is the same? Does it change how you think about yourself as a leader? Like how h how is your view at a high level?</p>
</details>

AI: 所以，最重要的事情是，我将从API开始。所以很明显，我们构建了，我们成为了一家API基础设施公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the the the big thing is I I'll start with API first. So obviously we we we built we become this API infrastructure company.</p>
</details>

主持人: 是的。也许我们应该先描述一下Kong现在是什么，然后再做这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. May maybe we should just describe what Kong is right now before we actually do that.</p>
</details>

AI: 所以我们进行了这次转型，我们开源了**Kong API网关**（Kong API Gateway：一个流行的开源API网关，用于管理、保护和扩展微服务和API），它起飞了，我们成为了一家企业级公司。我们更名为Kong Inc.，我们开始构建各种API基础设施，以运行、管理和保护您的内部或外部API。所以你有软件，你有**微服务**（Microservices：一种软件架构风格，将应用程序构建为一组小型、独立部署的服务），你有成千上万的API。我们就像这些高速公路，让它们运行起来，你有速率限制。如果API是汽车，我们有护栏、减速带、测速摄像头、加油站、停车位、颠簸、护栏，所有的一切，救护车。我们提供所有基础设施，以确保API连接性能够为小型公司、大型公司等所有公司运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so we left with this pivot and we open source uh Kong API gateway took off and we become an enterprise company. We became we rebrand Kong Inc. Uh and we start to build all sort of API infrastructure to run manage and secure your internal or external APIs. So you have software, you have microservices, you have 10, 100 thousand of APIs. We're kind of this highways uh that makes them run and you have rate limiting. Like if if APIs were a cars, you got guardrails, speed bump, speed cameras, gas stations, stalls, bumps, guardrails, everything, ambulance, and we provide all the infrastructure to make sure that the API connectivity runs for small company, big company, all of that.</p>
</details>

主持人: 现在，在你提到的这个转变中，真正推动云计算API爆炸式增长的是工作负载从本地（on-prem）迁移到云端。第二次转变是**单体应用**（Monolith：一种传统的软件架构，其中所有功能都打包在一个单一的、紧密耦合的代码库中）分解为微服务，这产生了越来越多的API，大数据和所有这些产生了事件流。所以这种运动中的数据（data in motion）比以前的数据静止（data rest）或数据新闻（data news）要高得多。但是，当你开始创办公司时，你正赶上一个巨大的转变，那就是单体应用的分解和向云的转变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now in in this transition you mentioned what really drove I think this explosion of cloud APIs was the workload moving from onrem to the cloud. The second transition is breaking down the monolith to microser creates more and more APIs the big data and all that creates event streaming all that. So this just data in motion is much higher than is becoming much higher than like data rest or data data news than before. But but but in a way when you were starting the company you were drafting on a big transition right which was the breaking down of the monolith and the shift to cloud</p>
</details>

AI: 对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right and</p>
</details>

主持人: 那是关键。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that was the key.</p>
</details>

AI: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah</p>
</details>

主持人: 我认为，在此之前，所有这些API都有遗留解决方案，但它们并不是为向云的转变以及将单体应用分解为微服务和高扩展性分布式架构而构建的。我的意思是，你知道，从你的经验来看，我们实际上在API管理、API控制平面层面发明了**控制平面/数据平面分离**（Control Plane / Data Plane Separation：在网络或分布式系统中，控制平面负责管理和配置，而数据平面负责实际的数据传输）。以前没有人这样做。我得说，我想很多人可能不知道，或者不曾意识到，Kong在真正起飞后发展得有多快。所以，在此之前，我们经历了七年的“饥饿期”，基本上毫无进展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think I think before there were all these archive legacy solutions in APIs but they were not built for the transition to the cloud and breaking down the monolith into microservices and highcale decentralized architecture. I mean, you know, from your time on like we we we kind of invented a control plane data plane separation at the API management, API control plane level. Nobody was doing it before. I I got to say I I think a lot of people don't know or maybe don't appreciate how fast Kong grew when it actually happened. So, there was seven years of starvation, right? I mean, it was just basically wasn't working.</p>
</details>

AI: 不，实际上我知道，你也知道，我们每年都会颁发创始人奖。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, actually, I know and you don't you know this, but like every year we do the founders award.</p>
</details>

主持人: 是的。创始人奖是给公司最优秀的员工2555股股票。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. The founders award is 2555 stock to the best employee of the company.</p>
</details>

AI: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

主持人: 为什么？那。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why? That</p>
</details>

AI: 是2555天的挣扎，为了记住每一天，也就是七年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is 255 days of struggle to remember every day which is seven years.</p>
</details>

主持人: 太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's amazing.</p>
</details>

AI: 它是七年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's seven years.</p>
</details>

主持人: 每年公司都必须这样做，他们得到2555股。当然，这只是一个象征。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every year the company has to go they get 255. It's just it's just symbolic of course</p>
</details>

AI: 为了记住七年的挣扎。每年都是一次回顾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to remember seven years of struggle. Every year is a retrol.</p>
</details>

主持人: 还有这个疯狂的“鱼跃扑救”，你知道马可（Marco）在Kong做得最好。他把它推向市场，然后它就火了。但一旦火了，公司就发展得非常快。呃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's this crazy diving catch which you know Marco does the greatest Kong. He throws it out on the market and it catches off. But once it did, the company grew incredibly quickly. Um,</p>
</details>

AI: 我们刚开始时有45个竞争对手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we had 45 competitors when we started.</p>
</details>

主持人: 哦，我记得那个。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, I remember that. Yeah.</p>
</details>

AI: 现在可能还有30个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now it's probably 30.</p>
</details>

主持人: 但即使在那时，是的。好吧，Kong很快就脱颖而出了。所以，我的意思是，你知道，近年来，它显然一直是这个领域的领导者。我想，这只有在市场有明确需求的情况下才会发生。市场也帮了你们一个忙，像Mulesoft被收购了，Apigee也被收购了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But even then, at the time, yeah. Well, Kong broke away pretty quickly. So, I mean, you know, in in recent years, just clearly been the leader on this. And that only happens, I think, if there's just clearly a market need. The market also kind of did you a favor and that like Mulesoft got acquired and Apogee got acquired too, right?</p>
</details>

AI: 是的。Mulesoft在2017年被收购，Apigee在2016年被收购。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. 17 MU got acquired RPG got acquired in 16.</p>
</details>

主持人: 没错。是的。所以，在某种程度上，市场进行了整合，而你们作为领导者脱颖而出。所以你们成功驾驭了从云计算到微服务分解的转变。你知道，你们为API构建了控制平面。你们现在被认为是API领域的领导者，毫无疑问是独立的领导者。呃，毫无疑问。但现在你们正面临另一个市场转变，那就是向人工智能（AI）的转变。那么，你认为这会直接产生影响、是相邻的、还是累积的？你作为首席执行官如何看待这一点？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. Yeah. So like in in a way kind of like the there was consolidation and you broke out as this leader. So you kind of navigated this transition from you know cloud to breaking up the microservices. You know you built the control plane for APIs. You're considered now like the you know the the leader independent for sure in the API space. Kong is the leader independent. Um there's no question of that. But now you're facing another market shift which is kind of this movement to AI. And so do you view this as directly impactful, adjacent, accretive? Like how are you as CEO viewing this?</p>
</details>

AI: 是的，我想这又不是什么特别的事情，但市场通过创建更多API的方式，在AI领域向我们袭来。这意味着代理（agents）将以与人类消费互联网非常不同的方式消费互联网。不再有网站、滚动、点击、上下翻页的应用程序。它们仍然存在，但不再像以前那样重要。代理将通过编程接口以编程方式交换劳务，完成任务，无论是经典的API、MCP协议（就像API的Duolingo，让它们说英语），无论是什么协议，机器消费互联网的方式将与人类消费互联网的方式非常不同。人类消费互联网是通过用户界面（UI），机器消费互联网是通过编程接口。这是我们现在正在捕捉和赋能的巨大转变，并确保企业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think again is it's not like was like any me those things but the market came at us in AI by creating more APIs. What that means agents are going to consume internet in a very different way than how human did. There's not any more websites scroll click up and down applications. They're going to be there but not as relevant as before. Agents are going to programmatically exchange labor get task done through programming interface whether is classic APRS MCP protocols which is like Dualingo for APIs makes them speak English whatever it is the protocol but machines consuming internet is going to be very different than human consuming internet. Human consuming internet would be through UI machine consuming internet is you is is through programming interface. That's the huge shift that we we are now capturing and powering and making sure the enterprise</p>
</details>

主持人: 呃，思考AI连接性。归根结底，幕后都是API。你知道，我们昨天开了一次董事会会议。是的。你知道，我发现非常了不起的是，围绕AI有更多平凡的用例。我们可以谈论代理，我认为这值得谈论，我同意你的看法，但感觉也有很多基本的东西，比如密钥管理。你知道，很多公司在这些AI模型上花费了大量资金，所以能够拥有监控、计费、密钥轮换等所有这些功能真是太棒了。所以你实际上看到了一个非代理的草稿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um think about AI connectivity and at the end of the day behind the scene it's all APIs. We you know we had that board meeting what was it yesterday. Yes. And what you know what I found actually pretty remarkable is how many more benal use cases there are around AI right we can talk about agents and I think it's worth talking about and I agree with you but it also feels like there's like a lot of just basic stuff like like key management for you know like a lot of companies are spending a lot of money on these AI models right so it's great to be able to have like you know monitoring billing key rotations all of that stuff so you're actually seeing like a non-agentic draft now.</p>
</details>

AI: 是的。我想，我想这个词有点像堆栈。好吧。你有像Anthropic这样的AI公司，它们只是在构建模型等等。然后你有这些包装公司，它们试图通过AI解决人力资源问题等等。然后你有这些**大型语言模型**（LLMs：Large Language Models，AI模型，经过大量文本数据训练，能够理解和生成类似人类的文本），它们有API可以与公司对话，比如Anthropic通过API获得大量收入。所有这些，缺少的是让这些AI对话和运行的基础设施。这就是我们现在通过AI网关和许多产品所做的事情。但核心是那些无聊的问题，就像你提到的认证、授权。你可以尽可能地成为通用人工智能（AGI），但最终，如果一个代理必须进行认证，它就会卡住。要进行认证，你必须获得一个API密钥，你需要一个人类在循环中才能获得API密钥进行认证。但如果你能在开始时提供基础设施，你就可以自动化密钥的配置和轮换、认证。所以一旦你做到了这一点，你就可以让你的LLM、你的代理自由漫游，而不会每次都因为认证、授权而卡住，因为你已经配置了所有这些密钥。我想这就是我们想要带给客户的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think so what I think the word is a bit of stack. Okay. You have these AI companies like poor that are just building models yada yada and then then you have this rapper company that are trying to solve you know HR issue whatever through AI then you have these LLMs that have APIs to talks companies like entropy a lot of revenue through APIs all that what what is missing is the infrastructure to make those those AI talks and run and that's that's what we do now with I gate a lot of products but at the core the boring problem like you mentioned authentication authorization you can be AGI as much as you want but at the end an agent gets stuck if he has to authenticate and to authenticate you got to get an API key you need a human in the loop to get the API key authenticate but if you can provide infrastructure at the beginning you can provision and auto and automate key provisioning key rotation authentication so once you're there you can unleash your LLM your agents to just roam free without getting stuck every time for authentication authorization because you're already provisioning all these keys I think that's That's what we want to our customers.</p>
</details>

主持人: 所以，所以也许我们可以假设，对于我们讨论的这一部分，听众对AI API基础设施非常熟悉，对吧？你认为API基础设施在六个月、一年或两年后的样子会因为AI而发生巨大变化吗？还是说我们今天所理解的现有基础设施会以非常明显的方式演变为也服务于代理？也就是说，你认为这在基础设施层面是变革性的，还是更像是一种过渡？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so maybe just just assume for this this this part of our discussion that whoever's listening is is pretty familiar with AI API infrastructure, right? Do you think that the way API infrastructure looks in 6 months or a year or 2 years is dramatically different because of AI? Or is it that the infrastructure that we have in place that we understand today evolves to also service agents in ways that are pretty obvious? like to what extent do you think this is like transformational on the infrastructure layer versus like more of a transition?</p>
</details>

AI: 我认为如果你不是API优先，你就无法做AI。你只是没有模型与外界沟通的“嘴巴”和“耳朵”。呃，这就是AI的交流方式。所以我们所了解的API基础设施将会演进，但不会改变，API流量和AI流量正在融合。所以经典的API调用是肯定的，但当你传输令牌时，也是一个API调用，智能，比如说智能，将通过令牌进行销售。每次财报发布都与令牌有关，但每个令牌背后都有调用，负载传输令牌。所以它们正在融合，我们正在称之为或构建一个统一的API和AI连接平台，它能帮助你驾驭这个转变，管理经典的API流量，管理代理流量，管理MCP流量，管理LLM流量。我认为它们将融合为一个统一的程序，这就是我认为智能将移动的方式，这是一个两三年内的演进步骤，但我们确实看到MCP流量每季度都在增长。我的意思是，我甚至看到一些非常基本的东西，比如对于开发者来说，这正在非常迅速地发展。例如，你知道，为了好玩，我使用Cursor进行开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think you cannot do AI if you're not API first. It's just you don't have the mouth and the ears to a model. Um and so that's how AI talks. So the way we know about API API infrastructure, it will evolve, it won't change, but API traffic and AI traffic, they're converging. So the classic API calls yes but also when you move tokens is an API call and intelligent let's say intelligent will be sold through tokens every earning release is about tokens but behind and each tokens there are calls the payloads move tokens so they're kind of converging and what we are calling or building is a unified API and AI connectivity platform that it helps you navigate this transition as you're managing classic API traffic as you're managing agent traffic as you manage MCP traffic as you manage LLM traffic I think will will converge into a unified like program and that's how I think intelligence will move and it's an evolutionary steps in like two three years but we really see MCP traffic growing every quarter I mean I see even like really basic things like for developers this is evolving very quickly so for example you know for fun I develop using cursor</p>
</details>

主持人: 嗯，你知道，我以前是个专业的开发者，你知道，在以前的生活中，即使知道公司内部存在哪些API，也需要阅读大量的文档或进行一些奇怪的搜索。现在感觉，尤其是在你拥有像Kong这样的东西，它拥有所有的元数据和目录，然后你可以集成到像Cursor这样的东西中，所以不仅代理本身了解API，你还可以将其暴露给开发者。我的意思是，感觉现在甚至开发范式都在转变，因为我们可以开始向开发者展示这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um you know I used to be a professional developer you know in a in a previous life even knowing what API guys existed in a company required a ton of reading through docs or some weird search and it feels like now especially like if you have something like Kong which you know has all the metadata and has the catalog and then you can integrate into something like cursor and so not only does the agent itself know about the APIs but you can expose it to I mean it feels like a lot of like even the development paradigm is shifting now because we can start surface these these things to developers. Yeah, I think I think you can you can think you can we can be an enabler to helps large companies, small companies to to get into the hands of more developers or more courser because it's all start with API we can provide you that infrastructures and and and all of that. Uh we as you see from yesterday we have a a very exciting road map that is going in all in that direction. Uh so those are all of them. I think here here's the big bet. The big bet is what happened in micro because I grew up in Italy and you don't really study a lot of math. You just study history. But what you learn from it is that even it doesn't exactly repeat but it reads it's just there's always an out. So you you do so what we see with microservices what happened we we first build ra limiting and authentication 10 times 100 times 50 times into the python framework the javascript framework the typescript framework the java frame whatever php blah blah blah at some point didn't make any sense let let's abstract everything to a gateway pattern and we move all this connectivity logic to the gateway and that dispatch to the right service no matter what language the same thing I think is going to happen in LLMs at first you have one enterprise use one big LMS Now they're going to use five 10 100 small LM medium large whatever once you get to you don't do tokens relingiting token authentication in each LLM using the frame or the lchain whatever eventually same thing happen in microser you will abstract that to a gateway partner once again and that's where I think I gateway will have the the same analogy and dispatcher to write connectivity logic to the right versus rewriting initial I think that's the big bet that we make that happens in microservices happens in how enterprise will run and govern hundreds of LLMs.</p>
</details>

AI: 是的，我想，我想你可以，我们可以成为一个推动者，帮助大公司、小公司接触更多的开发者或更多的Cursor，因为一切都始于API，我们可以为你提供基础设施和所有这些。呃，正如你昨天看到的，我们有一个非常激动人心的路线图，正朝着这个方向前进。呃，所以这些都是。我想，这里有一个大赌注。这个大赌注是微服务中发生的事情，因为我在意大利长大，你不太学习数学，你只学习历史。但你从中了解到的是，即使它不会完全重复，但它会重演，总有出路。所以你，所以我们看到微服务中发生的事情是，我们首先在Python框架、JavaScript框架、TypeScript框架、Java框架、PHP等等中构建了10次、100次、50次的速率限制和认证。在某个时候，这变得毫无意义。让我们把所有东西都抽象到一个网关模式中，我们将所有这些连接逻辑移动到网关，然后它分派到正确的服务，无论是什么语言。我认为同样的事情也将在LLM中发生。起初，你有一个企业使用一个大型LLM。现在他们将使用5个、10个、100个小型、中型、大型LLM，无论是什么。一旦你达到这个阶段，你就不再在每个LLM中使用框架或LangChain等进行令牌速率限制和令牌认证。最终，同样的事情也将在微服务中发生，你将再次将其抽象到一个网关模式中，这就是我认为AI网关将具有相同类比的地方，并且分派器将连接逻辑写入正确的服务，而不是重写初始逻辑。我想这是我们做出的一个大赌注，它发生在微服务中，也发生在企业如何运行和管理数百个LLM中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um you know I used to be a professional developer you know in a in a previous life even knowing what API guys existed in a company required a ton of reading through docs or some weird search and it feels like now especially like if you have something like Kong which you know has all the metadata and has the catalog and then you can integrate into something like cursor and so not only does the agent itself know about the APIs but you can expose it to I mean it feels like a lot of like even the development paradigm is shifting now because we can start surface these these things to developers. Yeah, I think I think you can you can think you can we can be an enabler to helps large companies, small companies to to get into the hands of more developers or more courser because it's all start with API we can provide you that infrastructures and and and all of that. Uh we as you see from yesterday we have a a very exciting road map that is going in all in that direction. Uh so those are all of them. I think here here's the big bet. The big bet is what happened in micro because I grew up in Italy and you don't really study a lot of math. You just study history. But what you learn from it is that even it doesn't exactly repeat but it reads it's just there's always an out. So you you do so what we see with microservices what happened we we first build ra limiting and authentication 10 times 100 times 50 times into the python framework the javascript framework the typescript framework the java frame whatever php blah blah blah at some point didn't make any sense let let's abstract everything to a gateway pattern and we move all this connectivity logic to the gateway and that dispatch to the right service no matter what language the same thing I think is going to happen in LLMs at first you have one enterprise use one big LMS Now they're going to use five 10 100 small LM medium large whatever once you get to you don't do tokens relingiting token authentication in each LLM using the frame or the lchain whatever eventually same thing happen in microser you will abstract that to a gateway partner once again and that's where I think I gateway will have the the same analogy and dispatcher to write connectivity logic to the right versus rewriting initial I think that's the big bet that we make that happens in microservices happens in how enterprise will run and govern hundreds of LLMs.</p>
</details>

### 对创业者的建议

主持人: 太棒了。好吧，听着，在我们结束之前，我想最好能以一些建议来结束，给那些想了解更多关于AI如何改变API格局的人，或者也许是一些关于如何开始为之做好准备的建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Well, listen, as we wrap this up, I think it'd be great to kind of end with like any sort of recommendations for people that are listening to learn a bit more about how kind of AI shifting the API landscape or maybe you know some advice on</p>
</details>

AI: 不要创业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">don't start a company.</p>
</details>

主持人: 也许是关于如何开始思考如何为此做好准备的建议。我想我之前说过，人们非常关注模型预训练、调优等等，但关键是连接层，LLM、代理等等将如何相互交流，你如何运行。我认为很多流量将非常具有战略意义，你必须构建企业级初创公司来管理你的下一个应用程序、下一个内部工具、下一个客户中的AI连接性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">maybe adi advice on kind of like you know um uh you know how to start thinking about getting ready for that. I think I say I said before like there is a lot of focus on model pre-training tuning all of that but a key thing is the connectivity layer how LLMs agents whatever will talk to each other how you run I think a lot of the traffic will be very strategic and you have to build the the startups of the enterprise to manage that AI connectivity into your next apps your next internal tools your next customers</p>
</details>

AI: 对于那些正在听这个最硬核的硅谷故事的初创公司创始人，你有什么建议给他们？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and for the uh listen the budding founders that are listening to like the most hardcore Silicon Valley story ever. What advice do you give to them?</p>
</details>

主持人: 我想我从十多年的经验中学到的是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think what what I learned over a decade of like</p>
</details>

AI: 你有没有想过，我只是想问，你有没有想过也许你应该及时止损，重新开始？你有没有想过那会是正确的做法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">do do you ever think I I just have to do you ever think that like maybe you should have cut your losses and tried to start it over again? Like do you ever think that that would have been the right thing?</p>
</details>

主持人: 从未。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Never.</p>
</details>

AI: 不。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No.</p>
</details>

主持人: 从未。从未。原因是我无法想象自己回到意大利机场，我父亲来接我，然后问我怎么样了，那种失败的感觉会让我浑身无力。我永远无法做到。我宁愿死在这里，没有食物，我做不到。所以这个念头从未在我脑海中闪过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Never. Never. The the reason is I could never visualize myself going back to the airport in Italy and my dad picking him up and say how's it going and it's just like would fail with my tails and my legs like I could never I would have died here without food like I cannot do that and so that that never crossed through through the heads</p>
</details>

AI: 脊背发凉，太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">shivers that was so good</p>
</details>

主持人: 但从未，那是我每次甚至开始有那个念头时，脑海中就会浮现的画面，我立刻告诉自己，我不会那样回去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but never like that's that's the visual that every time I even start to I had that visual and immediately say I'm not going back like that</p>
</details>

AI: 所以，我想给的建议是，事情总是比我们想象的要花更长的时间。呃，选择一个能持续10年、20年的趋势是好事，因为你有时间成长，犯很多错误，进行建设，你必须真正相信这个趋势，而不是追求那些昙花一现的东西，因为它总是会比你想象的要花更长的时间，无论是作为领导者、作为一个人、作为市场、作为产品、作为收入。所以选择一个能持续的东西，每天投入110%的精力，然后它就会复合增长。呃，在早期保持较低的烧钱速度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so and then But the thing to advise is it always take longer than what uh we thinks. Um it it's good to take a a trend that lasts 10 years, 20 years because you have time to grow into and do a lot of mistakes and building and just you have to generally believe it in this trend versus falling glitters because it's going to take longer than what you think as a leader, as a human, as a market, as a product, as a revenue is always going to take longer. So take something that last and just put 110% on it every day and then it will compound. Uh keep the barn rate low in the early days.</p>
</details>

主持人: 不要死掉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't die.</p>
</details>

AI: 不要死掉。不要放弃。呃，这些，这些是，我想是我一路走来学到的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't die. Like don't quit. Uh those those are um those those are I think the things I learned along the way.</p>
</details>

主持人: AI，在过去的几年里能与你合作是我的荣幸，非常感谢你来参加播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI it's been a privilege and an honor working with you these past few years and thanks so much for coming on the podcast.</p>
</details>

AI: 彼此彼此。谢谢你，马丁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Likewise. Thank you Martin.</p>
</details>