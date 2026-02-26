---
author: The Pragmatic Engineer
date: '2026-02-25'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=WjckELpzLOU
speaker: The Pragmatic Engineer
tags:
  - open-source
  - infrastructure-as-code
  - ai-agents
  - software-engineering
  - cloud-computing
title: Mitchell Hashimoto 访谈：HashiCorp 的崛起、云巨头博弈与 AI 编程新范式
summary: HashiCorp 联合创始人 Mitchell Hashimoto 分享了从大学研究项目到公司上市的历程。他深入探讨了与 AWS、Azure 和 Google Cloud 的合作体验，分析了 AI 如何通过“低质量贡献”改变开源生态，并展示了他如何利用 AI Agent 优化个人工作流。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people:
  - Mitchell Hashimoto
  - Armon Dadgar
companies_orgs:
  - HashiCorp
  - AWS
  - Microsoft Azure
  - Google Cloud
  - VMware
products_models:
  - Terraform
  - Vagrant
  - Vault
  - Ghosty
  - Packer
  - Consul
  - Nomad
media_books:
  - The Invisible Life of Addie LaRue
status: evergreen
---
### 编程启蒙与开源初探

**主持人**: 你当时对 **AWS** 的体验如何？说实话。

<details>
<summary>Original English</summary>

**Host**: What was your experience back then of AWS? Your honest view.

</details>

**Mitchell Hashimoto**: **AWS** 当时非常傲慢。感觉就像他们在施舍我们一样。有一种微妙的氛围，仿佛他们随时会推出一个产品然后干掉你的公司。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: AWS was really arrogant. Felt like they were doing us a favor. Subtle vibe of we will spin up a product and kill your company.

</details>

**主持人**: **Terraform** 似乎无处不在。你认为这种突然流行的原因是什么？

<details>
<summary>Original English</summary>

**Host**: Terraform just seemed to be everywhere. Why do you think that sudden popularity was?

</details>

**Mitchell Hashimoto**: 让我感到沮丧的一件事是，有人说他们赢了只是因为他们是第一个进入市场的。实际上我们是第七个进入市场的。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: One of the things that frustrated me was like, oh, they only won cuz they were first to market. We were like seventh to market.

</details>

**主持人**: 感觉大部分开源项目都会因为 **AI** 而改变。AI 让创建看起来似是而非但错误且低质量的贡献变得轻而易举。开源一直是一个信任系统，现在变成了默认拒绝，你必须获得信任。

<details>
<summary>Original English</summary>

**Host**: It feels like most of open source will have to change because of AI. AI makes it trivial to create plausible looking but incorrect and lowquality contributions. Open source has always been a system of trust. Now it's just default deny and you must get trust.

</details>

**主持人**: 你认为 **Git** 在几年后还会存在吗？

<details>
<summary>Original English</summary>

**Host**: Do you think Git will be around in a few years?

</details>

**Mitchell Hashimoto**: 有趣的是，这是 12 到 15 年来第一次有人问这个问题而没有被嘲笑。如果 **AI Agent** 可以写代码、提交 **Pull Request** 并发布功能，我们还需要开源贡献者吗？

**Mitchell Hashimoto**，**HashiCorp** 的联合创始人，一直在深入思考这个问题：开源的未来以及如何高效地将 AI 集成到日常工作流中。Mitchell 构建了驱动现代云基础设施的工具：**Terraform** 和 **HashiStack**。他还创建了一个流行的终端 **Ghosty**。我认为他是行业中关于 AI 如何改变软件工程手艺最深刻的声音之一。

在今天的节目中，我们涵盖了 **HashiCorp** 的起源故事：一个失败的大学研究项目、一本记录未解决问题的笔记本，以及一封来自他未来合伙人的邮件（他在两分钟内就回复了）。他直言不讳地谈到了与 **AWS**、**Azure** 和 **Google Cloud** 作为合作伙伴的真实感受，包括他们的傲慢以及那些从不考虑业务的才华横溢的工程师。他还分享了自己如何适应 AI 编程工具，为什么他总是让一个 Agent 在后台运行，以及他对那些尚未接受 AI Agent 的工程师的实用建议。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: What's interesting is this is the first time in like 12 to 15 years that anyone is even asking that question without laughing. If AI agents can write code, open pull requests and ship features, do we even need open source contributors anymore? Mitchell Hashimoto, the co-founder of HashiCorp, has been thinking deeply about this, the future of open source and how to efficiently integrate AI into his day-to-day workflow. Mitchell built the tools that power modern cloud infrastructure, Terraform, and the Hashi stack. He also created a popular terminal, Ghosty, and I consider him to be one of the most thoughtful voices in the industry on how AI is changing the craft of software engineering.

</details>

**主持人**: Mitchell，欢迎来到播客。很高兴能见到你本人。

<details>
<summary>Original English</summary>

**Host**: Mitchell, welcome to the podcast. It's awesome to be here in person.

</details>

**Mitchell Hashimoto**: 是的，关注你这么多年后能见到本人真的很酷。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah, it's it's cool to meet you in person after so many years of following you.

</details>

**主持人**: 你对科技行业和软件工程师产生了如此巨大的影响，但这一切是怎么开始的？

<details>
<summary>Original English</summary>

**Host**: You've had such a massive impact on on the tech industry on software engineers, but how did it start?

</details>

**Mitchell Hashimoto**: 我想大体上和很多人一样。我在 12、13 岁左右开始自学，动力来自**视频游戏**。虽然我很快意识到我喜欢 **Web**。当时 Web 还是新鲜事物，**Google** 还没出现。所以我从未成为游戏程序员，而是很快成了 Web 程序员，使用 **PHP**、**Perl** 之类的语言。

因为我太年轻，唯一的学习方式就是通过网上发布的各种代码。这就是我接触**开源**的契机。当时我不知道那叫开源，我只是个没工作、没钱的孩子。我父母不想买专业书籍，当时大概要 50 美元一本，他们不相信我会读。所以，我在网上能找到的任何东西都是我进入编程世界的入口。

我每天和一群朋友走路去学校。有一段时间，我打印出了 **PHP 手册**的第一或第二章，大约 30 到 40 页纸。我以前从未编程过，所以 12 岁的我觉得这些东西非常令人困惑。我每次走在去学校的路上都会读完这 40 页。我不记得花了多久，但在我真正理解之前读了很久。我记得有一次走在路上，突然间我理解了那些**美元符号**是什么。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: I think the high level is the same story as a lot of people. I self-taught uh around 12, 13, early teens, motivated by video games. Same like same as a lot of people. Um although I really quickly realized that I liked web, you know, web was new. Google wasn't out yet. I think web was new. And so I I kind of like really quick I I never became a video game programmer. I really quickly just became a web programmer, PHP, um Pearl, that sort of stuff. And uh because I was so young, the only way I could learn was through whatever code was published online. And so that's how I got acquainted with open source.

</details>

**主持人**: 那些是**变量**，对吧？

<details>
<summary>Original English</summary>

**Host**: Those are variables, right?

</details>

**Mitchell Hashimoto**: 变量。是的。我真的理解了，我以前从未听过那个词。你不会在任何语境下听到 12 岁的孩子说“变量”。终于在某一时刻，我意识到它们存储东西，而且东西是可以改变的。我记得读了几个星期都不懂，到学校后兴奋得不行，感觉开关被触发了，之后一切都进展得很快。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Variables. Yeah. Yeah. And I I really understood I never heard that word before. Like you don't hear the word variable as a 12-year-old out in any context. And finally at one point it like hit me that they store things and things could change and I remember just like weeks of reading this thing and not understanding it getting to school so excited being like it it triggered and then after that I remember stuff happened really quickly.

</details>

### 从外包公司到 HashiCorp 的萌芽

**主持人**: 你当时构建了什么样的东西？

<details>
<summary>Original English</summary>

**Host**: What what kind of stuff did you build?

</details>

**Mitchell Hashimoto**: 网站。大多是与游戏相关的网站、论坛软件。我当时很喜欢克隆网站，虽然做得不好。比如 **PayPal** 刚出来时，我真的很好奇钱是怎么在互联网上转账的？所以我试着构建克隆网站。我还在自由职业网站上伪装成 18 岁，赚个 50 或 100 美元去做图片上传之类的功能。

后来我决定在大学学习计算机科学，去了**华盛顿大学**。那是我开始认真对待编程的时候，但其实整个高中期间我每天都在尽可能多地写代码。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah, websites. It was gaming related websites. It was like a lot of like gamech stuff, forum software. Yeah, I mean I had a lot of fun cloning websites, you know, in a poorly, but like uh PayPal was out and then and I really wondered like how does money get transferred over the internet? How does that work? So I tried to build like copies of cloning websites. I decided to study computer science in college. Um went to University of Washington.

</details>

**主持人**: 噢，好吧。这很令人印象深刻。在你的朋友圈里你是独自钻研吗？还是有其他人也在做？

<details>
<summary>Original English</summary>

**Host**: Oh, okay. Yeah, that's impressive. Were you alone with this when your friend group there? Were there other people doing it or was it kind of lonely?

</details>

**Mitchell Hashimoto**: 很孤独。在现实世界里很孤独。但我很快通过 **MSN**、**AOL** 和论坛找到了网友。其中许多人我现在都见过面并保持联系。但在当时，当没人知道“程序员”这个词时，沉迷电脑简直是社交自杀。所以我甚至瞒着我最好的朋友，在学校也不谈论它。这只是个秘密，直到我上了大学才彻底释放。

我迎来了一个大突破：我写博客。大一快结束进入暑假时，有人突然给我发邮件，我一度以为是诈骗。邮件问：“你想成为一名 **Ruby on Rails** 程序员吗？”我不懂 Ruby，我是个 PHP 程序员。我从未做过 Ruby 或 Rails，也从未被猎头找过。我当时 18 岁，不知道该怎么想。如果不是因为那个人在洛杉矶，我可能就不会回复了。但我回复了，我们约了见面，我发现这家公司是认真的，于是我接受了那份工作。我在那里学到了很多，那是一个巨大的转折。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: It was lonely. It was very lonely. It was lonely in the real world and then I quickly found online friends through like MSN Messenger and ALS Messenger and forums. The big like break that I got was I blogged and uh my freshman year, late freshman year heading into summer um after it of college, someone just emailed me out of the blue and I kind of thought it was a scam. It was just like do you want to, you know, it was do you want to be a Ruby on Rails programmer?

</details>

**主持人**: 那是一家初创公司还是小公司之类的？

<details>
<summary>Original English</summary>

**Host**: was it a startup or small company something like that?

</details>

**Mitchell Hashimoto**: 不，是一家咨询公司。那是 2007 年，Ruby on Rails 已经火爆，出现了很多咨询公司，基本上就是“我们帮你构建 **MVP**（最小可行产品）”。对于大学生来说这是一份很棒的工作，因为我们每两个月就能看到一个新客户。我会构建一个 YouTube 风格的网站，然后是一个慈善网站，接着是一个电子商务网站。我学到了所有不同的技术、不同的规模挑战。虽然构建 MVP 没太多流量，但会让你思考规模问题。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: No, it was a consultancy. So, it's kind of like one of those standard like this like 2007 Ruby on Rails was had blown up. It was already very popular and uh there was all these consultancies that that appeared out of nowhere that was basically like we'll build your minimum viable product and yeah and we're one of those shops.

</details>

**主持人**: 最终 **HashiCorp** 是如何开始的？或者说在做 Ruby 工作到几年后之间发生了什么？

<details>
<summary>Original English</summary>

**Host**: How did eventually Hashi Corp start or what happened between like getting getting this this Ruby job to a few years later?

</details>

**Mitchell Hashimoto**: 这一切始于那份 Ruby 工作。公司里有一个人，他是我的老板。当时还没有 **Heroku**，所以你必须自己托管。他负责在独立服务器上托管所有项目。他运行 **Linux**，留着黑色长发，不用鼠标，这些对我来说都很新奇。我很感兴趣。他坐在角落里不想理任何人，但幸运的是，他其实很友善。

当我表现出真正的兴趣并开始问很多问题时，他开始给我挑战。我记得第一个挑战是：他拔掉了我的**鼠标**。他字面上拔掉了鼠标并说：“你再也不准用鼠标工作了，自己想办法。我不告诉你怎么做，重启电脑，那是你的问题了。”然后把鼠标拿走了。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: It kind of starts with this Ruby job. Um there was one guy that worked at the the company and he was my boss. He was the guy who got all these projects hosted on on dedicated servers and I didn't know anything about that. He literally said unplug he he unplug my mouse and said you're never going to work with a mouse again. So figure it out.

</details>

**主持人**: 严厉的教训。

<details>
<summary>Original English</summary>

**Host**: Harsh lesson.

</details>

**Mitchell Hashimoto**: 严厉的教训。大约一周后，我变得非常擅长使用键盘。接着他给我安装了 **Screen**，说：“搞定它，你以后就用这个。”他慢慢地把这些技能灌输给我。然后是 **SSH**、包管理器，我立刻爱上了这一切，觉得超级酷。

这个漫长的过程让我进入了基础设施领域。与此同时，我加入了华盛顿大学的一个名为 **Seattle Project** 的研究项目。那是一个类似 **Folding@home** 的理想化项目：能否让世界各地的人捐赠异构硬件，然后在上面构建一个通用的调度层，让学术机构运行工作负载？我的任务是创建启动所有这些节点的机制。

但我彻底失败了。从技术角度看，我没能在 10 周内解决这个问题。我在笔记本上写下了我认为缺失的部分，为什么我无法解决它：我们需要这个，我们需要那个……有趣的是，Mitchell 在定义后来成为 **HashiStack** 组件时的思路是多么结构化。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Harsh lesson. And once I got good with the keyboard, um he said, "Okay, here's he he installed screen on my terminal and said, "Figure this out. You're going to use this now." And as we got there then it became you know here's SSH here's a package manager he's like it slowly taught me more and more and that got me just in I loved in like immediately.

</details>

### 笔记本中的愿景与初创起步

**Mitchell Hashimoto**: 我现在家里还留着那个笔记本。问题在于，我没有办法声明式地管理不同的资源，没有办法将它们连接到私有网络中。我写下了这些东西，其中一小部分最终成为了 **HashiCorp** 构建的产品。我把这个作为“离职面谈”分享给了我的本科老板 **Armon Dadgar**，他后来成了我的联合创始人。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: And I still have this notebook um at my house here, but the problems are really like, you know, I have no way to declaratively manage the different resources that are out there. I have no way to network these together in a private network. And I shared this with my undergraduate like boss who was Arman who was my co-founder.

</details>

**主持人**: 他后来成了你的联合创始人。

<details>
<summary>Original English</summary>

**Host**: Y later became your co-founder.

</details>

**Mitchell Hashimoto**: 是的。几周后，他突然给我发邮件：“你想一起做个初创公司吗？”当时我大概只有 19 或 20 岁。他在晚上 11:30 发的邮件，我在两分钟内就回了：“当然。”他后来说，他当时想：“哇，这家伙想都不想就加入了，他准备好了。”那是我们友谊的开始。

当时我还在做一个叫 **Vagrant** 的项目。Vagrant 诞生于咨询公司的工作，而不是研究项目。它解决了咨询公司每两个月就有新客户、不同团队的问题。我们如何创建可重复的开发环境，以便我可以快速去帮别人而不浪费计费工时？

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yes. He was the my my boss on the undergrad side. And he emailed me out of the blue like, "Do you want to do a startup?" I emailed him back in 2 minutes and said, "Sure." And then uh and uh again like there's overlapping pieces here, but I was also at the time working on something called Vagrant.

</details>

**主持人**: 这是一个可以快速启动的开发环境，对吧？

<details>
<summary>Original English</summary>

**Host**: So this is a development environment that you could spin up quickly, right?

</details>

**Mitchell Hashimoto**: 是的。我当时用的隐喻是：我如何能通过“双击”就打开一个开发环境？在咨询公司，任何不能计费的小时都是浪费。当时为一个项目搭建开发环境可能要花半天时间。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah. Yeah. Yeah. The metaphor I always had was I didn't use Windows then, but the metaphor I always used was how could I doubleclick and open a dev?

</details>

**主持人**: 而且你不能向客户收取这部分费用，对吧？客户只为实际工作买单。

<details>
<summary>Original English</summary>

**Host**: And you couldn't build that for the client, right? The client would only pay for the work.

</details>

**Mitchell Hashimoto**: 没错。所以这 4 小时是浪费的，而且还可能搞乱你原本的开发环境，因为 Ruby 或 Rails 版本不同。Vagrant 解决了这个问题。

我当时是用 **VirtualBox** 构建的。因为我是个没钱的大学生，VirtualBox 是免费开源的。我没钱去用当时刚出来的 **EC2**。我喜欢提这一点，因为软件工程很大程度上是理解并利用**约束条件**。约束能帮助创造更好的软件。

所以我们有了 Vagrant，有了那个失败的基础设施项目，还有云服务的引入。我在华盛顿大学，就在 **Amazon** 隔壁。他们立刻捐赠了很多信用额度。当时人们甚至不知道怎么读 **S3**。这一切汇聚在一起，引导我走上了构建工具以更好管理它们的道路。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah. You couldn't build that for the client. So it' be like 4 hours of work wasted. And so vagrant came out of that. I was with virtual box. Virtual box was free and open source. I didn't do EC2 cuz I I didn't have money to pay for these instances. And I think that helps create better software um when you have constraints and that was my constraint.

</details>

### 云计算的豪赌与多云策略

**主持人**: 在那个时间点，当你看到云服务时，你是否有信心它会变得像今天这么大？当时这还是非常新鲜的事物。

<details>
<summary>Original English</summary>

**Host**: at that moment in time when you saw cloud you know you saw it was being big did you know or have a conviction that it would be big or as big as cloud has become cuz this was very very new back then right

</details>

**Mitchell Hashimoto**: 当时非常简陋。AWS 总体上非常不可靠，只有 S3 是可靠的。甚至还没有 **EBS**，所以除了 S3 没有持久化存储。我当时并不觉得它一定会变得巨大，我只是觉得这是一种**更好的方式**。我被“什么是有趣的”和“什么是对的”所驱动，而云服务让我感觉是对的。

我和 Armon 开始下注是在我们基于**多云**（Multicloud）创立 HashiCorp 的时候。在 2011、2012 年，AWS 已经很大，但 **Azure** 和 **Google Cloud** 几乎不存在。当我们推销这种云中立工具时，很多人侧目：“这是浪费时间，因为 AWS 是唯一的玩家。”但我们的信念是：云会变得巨大，而任何经济规模巨大的领域，其他人都会想分一杯羹。微软和谷歌不会坐视不管。这就是我们的赌注，事实证明确实如此。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: It just felt very raw. Um, and I never really viewed it as this is going to be big. What I viewed it as is this is the better way to do it. Um I think where I started making the bet, me and Arman both started making some kind of bet was not just when we started Hashor but we started Hashorb on the basis of like multicloud.

</details>

**主持人**: 所以当你决定创立 HashiCorp 时，你已经有了 Vagrant。当时的想法是投资并商业化 Vagrant 吗？你是去融资还是自筹资金？

<details>
<summary>Original English</summary>

**Host**: So when you decided to start Hashi Corp, you had Vagrant like was the idea to like you know like invest in commercialized Vagrant and did you go out to raise money or did you start doing it with you know bootstrap? How did that go?

</details>

**Mitchell Hashimoto**: 不是为了商业化 Vagrant。我和 Armon 当时都在一家移动广告初创公司工作。我们用 **Python** 和 **C** 构建了笔记本里那些想法的粗略原型，比如服务发现和 Terraform 的早期版本（我们叫它 **Launchy**）。

我搬到了旧金山，因为西雅图当时的初创氛围不浓。我劝说原本要去伯克利读博的 Armon 加入了那家移动广告公司。在那一年里，我们参加了各种初创公司的聚会。那是旧金山的魔幻时刻，马路对面就是 **Lyft** 的前身 **Zimride**。

我意识到两件事：第一，所有新公司都是**云原生**的，他们直接采用 AWS。第二，他们遇到了和我们一样的挑战。虽然我们的工具只是内部原型，但我知道它们的感觉是对的。这种 hubris（傲慢/自信）让我觉得我们正在构建正确的东西。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: It wasn't to commercialize Vagrant. But what we had done is Arman and I both worked at this mobile ads company startup. I moved to San Francisco, found a startup that would hire me. I convinced Arman was actually going to do a PhD at Berkeley and I convinced him to join this mobile ad startup. I had these two things come together where I had some ego, some hubris where I'm like, I'm pretty sure we're building the right thing along with I think the industry is moving in that direction.

</details>

**主持人**: 那么当你决定注册公司后，你决定融资吗？

<details>
<summary>Original English</summary>

**Host**: And then when you decided you incorporated you know got the things did you decide to raise money?

</details>

**Mitchell Hashimoto**: 我先是自筹资金。我从储蓄账户转了 2 万美元到公司账户。前 6 个月我给自己发 0 元工资。之后 Armon 加入，我们决定融资。当时基本有三个选择：自筹资金（太慢）、**VC**（风险投资）或者找个“赞助商”（比如让 **VMware** 给你发工资让你研究某个想法）。

我们看了看计划，包括 Terraform、Consul 等等，意识到如果靠自筹资金，即使一切顺利也要花十年才能建成。而云服务增长太快，窗口期很短。我们必须立即雇佣大量工程师。所以我们选择了 VC。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: I self-funded um I transferred $20,000 from my savings account into this corporate account. I paid myself $0 for the first 6 months. And then Arman joined after 6 months. Um and and we decided to raise. We really just wanted to go fast. So VC was the route we chose.

</details>

### HashiStack 的诞生与演进

**主持人**: 能带我们了解一下最初的几个产品吗？

<details>
<summary>Original English</summary>

**Host**: Can you talk us through the the first several products and and what they do?

</details>

**Mitchell Hashimoto**: 第一个产品是 **Packer**。它是一个镜像构建工具。直到今天，许多价值数十亿美元的云平台，其官方服务镜像都是用 Packer 构建的。它解决了 AWS 自动扩缩容时的“冷启动”问题。

第二个是 **Consul**。解决服务发现问题。在云世界里，服务器是“呼吸”的——不断创建和销毁。你需要一种比传统 DNS 更快、更有健康检查保证的方式来定位服务。

接着是 **Terraform**。**基础设施即代码**。我想在一个空的云账户里，通过一段文本说“让这段文本变成现实”，然后瞬间拥有成千上万的资源。

然后是 **Vault**。核心是**密钥管理**。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: The first product that came out of Hashore itself was a product called Packer. That's an image building uh tool. The next one that came out was console. Um, console was solving the service discovery problem. Then after that, I think we did Terraform. Um, Terraform uh spins up infrastructure code. And then was vault.

</details>

**主持人**: 就像在本地开发时有环境变量，但在团队和公司规模下，需要安全地访问这些东西。

<details>
<summary>Original English</summary>

**Host**: So it's like like well we have like our on your local developer machine you have you have like your environment variables and doing that at scale at a team level at a company level at a service services needs to access all these stuff securely.

</details>

**Mitchell Hashimoto**: 是的，它更专注于生产环境的密钥。我们构建 Vault 时其实很害怕，因为团队里没人有超过一个学期的本科安全经验。我们花了数万美元请了两家公司对 0.1 版本进行审计。我们想证明，即使没有深厚背景，只要改变**用户体验**，也能构建出行业需要的东西。

最后是 **Nomad**。我们的调度器，解决了我在大学时没能解决的那个问题：有一池子计算资源，有一个应用，找到地方运行它。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah, it was much more focused on the like the the production environment secrets. Yeah, we were really scared when we built that actually cuz um nobody on the team that build vault had more than one quarter of security undergraduate security experience. And after travault came Nomad.

</details>

### 商业化的挫败与周五晚的转折

**主持人**: 在构建这些产品时，公司是如何运作的？你们开始产生收入了吗？

<details>
<summary>Original English</summary>

**Host**: And as you're building out like these, you said like some of these took years like how did the business like hash corp as a business work? Like did you did you start to generate some business?

</details>

**Mitchell Hashimoto**: 我们等待开发业务的时间太长了。前四年几乎没有可重复的增长业务。我们只是在构建创始人的愿景。我当时有一种心态：如果公司失败了也没关系，因为如果想法好，开源社区会继续下去。我没跟投资人这么说，但我认为技术传播到世界上是最重要的。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: I think we waited too long to to develop a business but um for four years there was no real reproducible growing business. So you were just building this vision of the founders vision.

</details>

**主持人**: 对于那些想成为创始人的工程师，这在投资人那里是怎么过关的？

<details>
<summary>Original English</summary>

**Host**: And for those engineers who are thinking of becoming founders or you know might might be founders, how did this work with your investors?

</details>

**Mitchell Hashimoto**: 在硅谷这并不罕见。种子轮是构建产品，A 轮是证明 **PMF**（产品市场匹配）的迹象。到 B 轮时，你已经证明了 PMF，但还没证明可重复的收入。我们的开源下载量达数百万，GitHub Star 很多，这些都是信号。我们只是比平均水平晚了一两年才解决业务问题。

我们第一次商业化尝试是一个彻底的失败。那个产品叫 **Atlas**。它要求用户运行所有 HashiCorp 产品才能使用商业版。而且它触及了公司内部多个部门的预算博弈——是安全部门付钱？还是网络部门？最终谁也不付钱。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: We had clear product market fit by the a um in terms of the open source, right? We had millions of downloads, a lot of stars on GitHub. Our first foray into commercialization was a total failure. It was this product that was called Atlas.

</details>

**Mitchell Hashimoto**: 我记得一个周五，我们在硅谷开完董事会，情况很糟。没有大吵大闹，但那种感觉就像父母对你很失望。我和 Armon 开车回旧金山的路上全程沉默。他直接把车开到了办公室。我们坐在一张白板前，决定玩一个实验：如果没有**沉没成本**，从头开始我们会怎么做？

我们在白板上画出了：按产品划分的企业级产品，先做 Vault 等等。Armon 看着白板说：“为什么我们不直接这么做呢？”于是那个周末，我们决定抛弃之前的一切。周一开了全员大会，宣布转向 **Open Core** 模式。我们以为会有人因为理想幻灭而辞职，但结果没人离开。大家反而因为有了清晰的方向和确定性而感到兴奋。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: We had this board meeting. We drove home. our mom and I complete drive home was silent. Arman drove straight to the office. We decided, let's play this experiment where if there was no sunk cost, if we were starting from scratch, what would we do differently today? We decided over the course of that weekend to just throw it all away. We are now enterprise as our customer open core per product.

</details>

### 云巨头的性格：傲慢、专业与极客

**主持人**: Terraform 后来变得如此流行。你认为原因是什么？

<details>
<summary>Original English</summary>

**Host**: One thing I I remember is Terraform just became so so so popular across the industry. Why do you think that sudden popularity was?

</details>

**Mitchell Hashimoto**: 很有趣，因为很长一段时间我们都被称为“那个做 Vagrant 的公司”。关于 Terraform，最让我沮丧的说法是“你们赢了是因为你们是第一”。实际上我们是第七个。

当时我的营销策略是参加每一个会议。2020 年疫情封锁时，我和妻子发现，那是我们自 2012 年约会以来，我第一次在同一个地方待超过 8 天。整整 9 年，我每 8 天就会换一个地方。我一直在旅行，一直在写代码。我写了脚本下载 GitHub Issue，把它们拆成 15 分钟的任务，在没有 Wi-Fi 的飞机上一个接一个地完成。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: It's so funny to hear that because for the longest time like we were the vagrant company. For 9 years straight, I had been somewhere different at least every eight days. I wrote these scripts where I downloaded all the GitHub issues and I would just break it down into tasks that none took more than 10 to 15 minutes and I just created this list and and when I was on the plane I would just one by one bust them out.

</details>

**主持人**: 你在 HashiCorp 与所有云厂商都有合作。你对 **AWS**、**Azure** 和 **Google Cloud** 的真实看法是什么？

<details>
<summary>Original English</summary>

**Host**: at Hashior Corp you work with all of them. What was your experience back then uh of you know like Azure, AWS, Google Cloud like like your kind of honest view of how they work back then.

</details>

**Mitchell Hashimoto**: **AWS** 非常傲慢。感觉他们每一步都在施舍你。总有一种微妙的威胁：“如果你不跟我们谈好条件，我们就自己做一个服务杀掉你。”他们也是最后一个提供帮助来维护 Terraform Provider 的。直到我们威胁要公开宣布停止支持 AWS Provider，他们才开始行动。

**Microsoft Azure** 是我印象最好的。虽然他们的技术产品在架构上很复杂（我至今没搞懂他们的 IAM 层级），但从业务角度看，他们是非常专业的合作伙伴。每次开会第一个问题总是：“我们如何实现双赢？”

**Google Cloud** 拥有最不可思议的技术和架构思维。但感觉他们完全不考虑业务。我们能花几个小时讨论最酷的边缘案例和可扩展性，但一旦涉及到“如何共同销售”或“如何给销售人员算提成”，就没人理了。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: AWS was really arrogant annoyingly arrogant. It always felt like they were doing us a favor at every turn. Microsoft I would I have the most positive view on Microsoft. From the business side competent um professionals and team players. And Google Cloud, it was always like the best technology. And I swear none of them, it felt like none of them cared or thought about the business at all.

</details>

### AI 时代的开源挑战与 Ghosty 的实验

**主持人**: 开源正在发生巨大变化，尤其是有了 AI 之后。你在 **Ghosty** 项目中看到了什么？

<details>
<summary>Original English</summary>

**Host**: Seems like open source is changing a lot especially with with with AI and and you know you're seeing stuff at ghosty. What what are you seeing with with open source maintainers?

</details>

**Mitchell Hashimoto**: 最普遍的问题是 **AI 贡献**。信噪比极低。AI 让创建看起来似是而非但错误且低质量的贡献变得轻而易举。

我离开 HashiCorp 后开始做 **Ghosty**。它是一个终端。我之所以做它，是因为我在基础设施领域待了 15 年，感觉自己的桌面软件和底层系统编程能力萎缩了。我想学习 **Zig** 语言和 **GPU** 渲染。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Well, I would say more broadly the issue facing open source today um is AI contributions and the specifically the ratio the signal to noise ratio being incredibly low. I had felt that I was rusty. I wanted to go to desktop. So, I picked all these like different technologies and I said, "Okay, Zig."

</details>

**主持人**: 终端实际上在做什么？

<details>
<summary>Original English</summary>

**Host**: What does a terminal actually do?

</details>

**Mitchell Hashimoto**: 终端就像是一个基于文本的浏览器。Ghosty 的复杂性在于 30% 是终端逻辑，70% 是**字体渲染器**。我们把渲染器性能做到了极致，每一帧更新大约只需 9 微秒。虽然用户可能感觉不到，但这就是“对手艺的热爱”。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: It's like a browser but for text content. The tongue-in-cheek answer I like to give to Ghosty's complexity is that it's 30% of terminal and 70% a font renderer. It's kind of like the love of the game.

</details>

**主持人**: 听说你最近对 AI 贡献采取了严厉措施？

<details>
<summary>Original English</summary>

**Host**: And just very recently you kind of crammed cracked down and said like all right no more.

</details>

**Mitchell Hashimoto**: 是的，我们不再允许 AI 编写的 PR，除非它关联了一个已接受的功能请求。我甚至不读内容，只要看出是 AI 写的且没关联 Issue，就直接关闭。

我们正在转向一种显式的**担保系统**（Vouching System），灵感来自 **Lobsters**。你不能直接提交 PR，必须有社区成员为你担保。如果你表现不好，你、你的担保人以及整个邀请树都会被永久封禁。开源本质上是一个信任系统。以前是默认信任，现在必须通过人来获得信任。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah we're going to switch to a explicit vouching system for the community. So you're no longer able to open a PR at all. AI or not, don't care anymore. Now, all that matters is that another community member has vouched for you. Open source has always been a system of trust.

</details>

### 个人工作流：始终运行的 Agent

**主持人**: 在你的工作流中，你是如何使用 AI 的？

<details>
<summary>Original English</summary>

**Host**: In your workflow, do you just use a single agent? Do you use multiple agents?

</details>

**Mitchell Hashimoto**: 我努力做到在任何时候都有一个 **Agent** 在做某事。如果我在写代码，我就让 Agent 去做规划；如果它在写代码，我就在做 Review。我通常在不同的标签页运行两个 Agent，比如 **Claude** 对阵 **Codex**，让它们竞争或者一个写代码一个做研究。

我把这称为“**护栏工程**”（Harness Engineering）。每当你看到 AI 做了错事，就试着构建工具来防止或纠正它。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: I endeavor to always have an agent doing something at all times. If I'm coding, I want an agent planning. I've been calling this harness engineering. Anytime you see AI do a bad thing, try to build tooling that it could have called out to to have prevented that bad thing.

</details>

**主持人**: 你对那些还没接受 AI 的工程师有什么建议？

<details>
<summary>Original English</summary>

**Host**: What What would your first advice be for someone who's like not

</details>

**Mitchell Hashimoto**: 我的第一个建议是：试着用 Agent **重做**一遍你的工作。如果你不想让它写代码，那就让它做研究。

我依然喜欢在黑暗中思考。昨晚我 9:30 上床，一直思考到 12:30，就在想那个担保系统。我愿意和任何人竞争，因为我觉得我会花更多时间去思考。最好的工程师是那些**上下文切换**最少的人。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: My first advice would be reproducing your work with an agent. I love to just sit in bed, lights off, and I just think through like I'm writing code in my head. The best engineers are the ones that context switch the least.

</details>

**主持人**: 感谢你分享这些细节，Mitchell。这非常令人振奋。

<details>
<summary>Original English</summary>

**Host**: Awesome. Well, well, thanks so much for going through all all of these details. It was just not great to hear from how you're working.

</details>

**Mitchell Hashimoto**: 谢谢。

<details>
<summary>Original English</summary>

**Mitchell Hashimoto**: Yeah, thank you. Thank you.

</details>