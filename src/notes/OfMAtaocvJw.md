---
author: The Pragmatic Engineer
date: '2026-02-04'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=OfMAtaocvJw
speaker: The Pragmatic Engineer
tags:
  - abstraction-levels
  - software-evolution
  - ai-impact
  - software-supply-chain
  - engineering-fundamentals
title: AI驱动下的软件工程第三个黄金时代：Grady Booch的洞察
summary: 软件工程的奠基人之一**Grady Booch**在访谈中回顾了软件工程从诞生到现在的三个黄金时代，强调了抽象层次的不断提升。他详细阐述了“软件工程”一词的起源、70年代的“软件危机”，以及从算法抽象到面向对象再到平台抽象的演变。Booch认为，AI正在开启软件工程的第三个黄金时代，而非终结它。AI通过自动化繁琐任务，让开发者能专注于更高层次的系统设计和伦理考量。他驳斥了软件工程将在12个月内被完全自动化的预测，强调了平衡技术、经济和伦理力量的人类技能的持久重要性。
insight: ''
draft: true
series: ''
category: tech-trends
area: tech-engineering
project: []
people: []
companies_orgs:
  - IBM
  - NATO
  - Anthropic
products_models:
  - UML
  - Fortran
  - Simula
  - ADA
  - Cursor
  - Claude
  - ChatGPT
media_books: []
status: evergreen
---
### 软件工程的演变与AI的冲击

**旁白**: 有些人担心AI编写出惊人优秀的代码可能意味着软件工程的终结。但**Grady Booch**并不同意，他认为我们正在进入软件工程的第三个黄金时代。**Grady Booch**是我们所知的软件工程的奠基人之一。他曾共同创建了**UML**，开创了面向对象设计，在**IBM**担任研究员数十年，并见证了自1970年代以来这个行业经历的每一次重大变革。在今天的对话中，我们讨论了软件工程的三个黄金时代，以及历史如何教导我们如何在重大技术变革中生存和发展。为什么编码一直只是软件工程的一部分，以及平衡技术、经济和伦理力量的人类技能为何不会消失。**Grady**对**Dario**关于软件工程将在12个月内自动化的预测做出了直接回应。剧透一下，他毫不保留。还有更多。如果你想了解AI带来的巨大变革实际上以前也发生过，而且不止一次，那么这一集就是为你准备的。本集由**Statsig**赞助，这是一个用于特性标志、分析、实验等的统一平台。请查看节目说明，了解更多关于他们以及我们本季其他赞助商的信息。那么，**Grady**，很高兴你再次来到播客。谢谢邀请。Aloha。谈到软件工程的历史，你之前多次说过，软件工程的整个历史就是抽象层次不断提升的历史。你能否带我们回顾一下帮助我们理解这一点的关键转折点，然后当然，把它与AI如何融入这一切联系起来？

<details>
<summary>Original English</summary>

**Some**: people worry that AI writing surprisingly good code could mean the end of software engineering. But **Grady Booch** disagrees and says that we are entering the third golden age of software engineering. **Grady Booch** is one of the founding figures of software engineering as we know it. He co-created **UML**, pioneered object-oriented design, spent decades as an **IBM** fellow, and has witnessed every major transformation this industry has undergone since the 1970s. In today's conversation, we discuss the three golden ages of software engineering and what history teaches us about surviving and thriving through major technology shifts. Why coding has always been just one part of software engineering and why the human skills of balancing technical, economic, and ethical forces are not going anywhere. **Grady's** direct response to **Dario's** prediction that software engineering will be automated in 12 months. Spoiler, he does not hold back. And many more. If you want to understand that the massive change that AI is bringing has in fact happened before and not just once, this episode is for you. This episode is presented by **Statsig**, the Unifi platform for flags, analytics, experiments, and more. Check out the show notes to learn more about them and our other season sponsors. So, **Grady**, it's great to have you back on the podcast again. Thanks for having me. Aloha. So touching a little bit on the the history of of software engineering, you've said many times before that the entire history of software engineering is one of rising levels of abstraction. Can you walk us through the key inflection points that help us understand this and then of course tie it into how AI is is all tying into this?

</details>

**Grady Booch**: 嗯，软件工程这个词直到**Margaret Hamilton**才首次提出，她可能是第一个使用这个词的人。当时她刚离开载人轨道实验室项目，正在参与**阿波罗计划**。她是少数几个软件开发人员之一，而周围大多是硬件结构工程师。她想创造一个词来区分自己，所以她开始使用“软件工程师”这个词，我认为我们可以理所当然地把这个词的首次提出归功于她。后来还有其他人也使用了这个词，最著名的是人们谈论的**NATO软件工程大会**。当组织者设立这个会议时，那实际上是在**Margaret**的工作几年之后，他们这样做是带着一种争议性的名称，就像“人工智能”这个词在西海岸的第一次会议上被命名时也带有争议一样。所以，后来有其他人效仿，经过一段时间，这个词就流行起来了。我认为它所代表的精髓，即**Margaret**和其他人所做的，是说它具有某种工程性质，因为我们的领域试图构建合理优化的解决方案。你不可能有完美的解决方案，它平衡了周围的静态和动态力量，就像结构工程师、电气工程师、化学工程师所做的那样。当然，在软件世界中，我们处理的介质是极其灵活、有弹性且流动的，但我们仍然面临着同样的力量。在这里，我们面临着物理定律的力量。信息传递不能快于光速，这在某些情况下有点烦人，但我们必须接受它。还有关于我们能构建多大的东西的问题，这主要受限于我们底层的硬件。我们在算法方面也面临约束。我们可能在理论上知道如何做某事，例如**维特比算法**，它对蜂窝电话的创建至关重要。在很长一段时间里，我们不知道如何实现它，但确实存在一个可计算的解决方案。类似的故事也发生在**快速傅里叶变换**上。我们知道理论，但在**傅里叶变换**能够转化为计算之前，我们无法取得进展。此外，我们还面临其他约束，不仅仅是这些科学和计算机科学的约束，还有人类的约束。我能否找到足够的人来做我需要做的事情？我能否组织团队来做我想做的事情？理想情况下，软件团队的最大规模是零。嗯，这不太实际。次优的选择是一个人，然后它会逐渐增长。有些项目规模巨大，你无法想象它们是由一小群人完成的。我的意思是，为什么我们所有的大型项目都有一个核心团队？那是因为这些系统的足迹及其持久的经济和社会重要性是如此之大。你不能只依赖一个人。软件必须超越他们而存在。而且，随着软件越来越多地进入世界的各个空间，我们面临着法律问题，例如我们看到的数字版权管理，但我认为更重要的是，也是最重要的，是伦理问题。我们知道如何构建某些东西，但我们应该构建它们吗？这符合我们人类的正确行为吗？所以，这些是所有这些事物，它们以某种方式，不，是绝对地，是作用于软件工程师的静态和动态力量，这就是为什么我可以说我们是工程师，因为就像其他类型的工程师一样，我们构建平衡这些力量的系统，而且我们是在一个绝对美妙的介质中做到这一点的。这就是软件工程。现在，我在上次通话中提到，软件工程有几个时代，我认为当我们回顾过去时，软件工程至少有两个可识别的主要时代。在最早的日子里，没有软件，因为我们所做的只是管理我们的机器，硬件和软件之间的区别完全无法区分。你知道，就像**ENIAC**那样插拔插头。那是编程吗？嗯，是的，但那里并没有真正的软件。那是别的东西。直到我们的机器在40年代末、50年代初发展到一定程度，我们才开始发现它们之间的区别。当时编写的大部分软件都是定制的。嗯，实际上所有软件都是定制的。而且几乎所有软件都与特定的机器绑定。但软件的经济性是这样的，我们喜欢这些机器。我们希望它们更快，但天哪，我们在软件本身投入了大量资金。有没有办法将这些东西解耦？我们谈论我们世界的近期历史。“数字”这个词直到40年代末才被创造出来。“软件”这个词直到50年代才出现。所以，即使承认软件本身是一个实体，也几乎是在我的有生之年，这让人感到害怕。

<details>
<summary>Original English</summary>

**Grady Booch**: Well, the very term software engineering did not come to be until **Margaret Hamilton** was probably the first to uh anoint it. uh she at the time had just left the man orbiting laboratory project. She was working on the **Apollo program** and she was one of the very few people who were software developers in a sea of mostly men who were the hardware structural engineers and she wanted to come up with a phrase that distinguished herself from the others. So she began using the term software engineer and I think we can rightfully give her the claim to the first one that coined that. There were others that followed most notably people talk about the **NATO conference on software engineering** and when the organizers established that which was actually a few years after **Margaret's** work they did so as kind of a controversial name not unlike how the term artificial intelligence was named controversially for its first conference on the west coast. Um, so there were others that followed and after a period of time it kind of stuck and I think what it meant the essence of what **Margaret** and others were doing is to say there's something engineeringish about it in the sense that ours is a field that tries to build reasonably optimal solutions. You can't have perfect solutions that balances the static and dynamic forces around them much like what structural, electrical, chemical engineers do. In the software world, of course, we deal with the medium that is extraordinarily funible and elastic and fluid and yet we still have the same kinds of forces upon us. Uh here we've got the forces of the laws of physics. You can't pass information faster than the speed of light, which is kind of annoying in some cases, but hey, we'll have to live with it. There are issues about how large we could build things, largely constrained by our hardware below us. There are constraints we have on the algorithmic side of things. We may know theoretically how to do something such as the **vertalry algorithm**, which was essential to the creation of cellular phones. For the longest time, we didn't know how to implement it, but there was indeed a calculable solution. similar stories with regards to **fast forier transform**. We knew the theory but until **Forier transforms** could be turned into something computational we couldn't pro progress. And there are also other constraints upon us not just these scientific ones and and the computer sciency ones but constraints such as the human ones. Uh can I get enough people to do what I need to do? Can I organize teams doing what I want to do? Ideally the largest team size you want for software is zero. Well, that's not very practical. The next best one is one and then it kind of grows from there. And there are projects that simply are of a certain scale that you cannot conceive of them being done by a small group of people. I mean, why do any of the large projects we have have a cadre of folks in them? It's because the footprint of these systems and their enduring economic and social importance is so great. You can't rely upon just an individual. That software must endure beyond them. And increasingly as software moves into the interstitial spaces of the world, we have the legal issues uh such as we see with you know digital rights management but I think more importantly and overarching the ethical issues. We know how to build certain things but should we build them? Is it the right thing for us to do in our humanity? So these are the collection of things that are in a way well not in a way but absolutely are the static and dynamic forces that weigh upon a software engineer and that's why I can say we are engineers because much like the other kinds of engineers we build systems that balance those forces and we do so in a medium that is absolutely wonderful. So that's software engineering. Now I mentioned in our last call there are certain ages of software engineering and I think as we look from the from the lens of looking backward there are at least two identifiable major epics in software engineering. In the earliest days there was no software because what we did was simply managing our machines and the difference between the hardware and the software was completely indistinguishable. you know, putting plugs in a plugboard as was happened with the **ENIAC**. Is that programming? Well, yes, but there's not really software there. It's something else. And it wasn't until our machines came to the point in late 40s, early 50s that we began to find a difference for them. Most of this software written at that time was bespoke. Well, really all of it was. And virtually all that software was tied to a particular machine. But the economics of software were sh such that we love these machines. We'd like them to be faster, but gosh, we put a lot of investment in the software itself. Is there a way to decouple these kinds of things? We talk about the recent history of our of our world. The term digital was not coined until the late 40s. The term software was not done until the 50s. And so even the acknowledgement that software was an entity unto itself was just about in my lifetime which is frightening to think about.

</details>

**主持人**: 是啊。大概七八十年前。哇。

<details>
<summary>Original English</summary>

**>>**: Yeah. Like 70 80 years ago. Wow.

</details>

**Grady Booch**: 是的。是的。没错。所以这是一个惊人年轻的行业。如果你把**卡尔·萨根**的**宇宙日历**拿出来，把软件放进去，我们会在那个宇宙日历的最后几纳秒。它会比眨眼还短。但无论如何，当软件开始与硬件本身解耦时，像**Grace Hopper**这样的人和其他人开始意识到，这可以被视为一个独立的业务、一个行业、一个机构。所以最早的软件，当然，它本身就是汇编语言，与机器紧密相连。快进一点，当**IBM**在60年代出现时，它认识到有一种方法可以建立一个拥有通用指令语言的机器架构，这样就可以保留软件投资，同时又以一种方式将其与硬件解耦，即我可以在不丢弃软件的情况下改进我的硬件。一旦这种认识发生，这既是一个工程决策，也是一个商业决策，更是一个整体的经济决策，那么闸门就打开了，突然间我们有了更多可以编写和需要编写的软件。这就是软件工程的第一个黄金时代，在这个时代，软件本身就是一个行业。所以那个世界面临的主要问题是复杂性问题。复杂性在于我们正在构建的东西，你知道，难以理解，试图以某种巧妙的方式操纵我们的机器，但按照今天的标准来看，这种复杂性是可笑的简单。我们可以，你知道，这相当于“Hello World”，但它们本身就是难题。所以因为我们与机器如此紧密相连，软件工程第一个黄金时代中使用的主要抽象是算法抽象，因为那是我们的机器所做的。我们的大多数机器都是用于数学运算的，所以就像在**Fortran**中一样，它是一个构建能够进行公式转换的软件的问题。所以那是第一代所面临的领域和问题。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah. Yeah. Exactly. So this is this were an astonishingly young young industry. If you were to take **Carl Sean's cosmic calendar** and uh and put software in it, we would be in the last few nanoconds of that cosmic calendar. It would be less than a blink of an eye. But anyway, as software began began to be decoupled from hardware itself, then folks such as **Grace Hopper** and others were beginning to realize that this is a thing that we could treat as a business and an industry as an institution unto itself. So the earliest software of course was as it was software itself was assembly language which was very much tied to the machine. And jumping ahead a little bit, as **IBM** came along in the '60s recognizing that there was a way to establish a whole architecture of machines with a common instruction language, then it was possible to preserve software investments and yet decouple it from hardware in a way that I could improve my hardware without throwing away the software. Once that realization happened which was both an engineering decision, a business decision and overall an economic decision then the floodgates opened up and all of a sudden we had a lot more software that could be and needed to be written. This was the first golden age of software engineering in which we had software was an industry unto itself. And so the essential problems that world faced were problems of complexity. uh complexity in that we were building things that were, you know, difficult to understand, that were trying to manipulate our machines in some cunning ways, but it was complexity that by today's standards was, you know, laughably simple. We could, you know, this is the equivalent of hello world, but they were problems that were hard unto themselves. And so because we were so coupled to the machines, the primary abstraction used in the first golden age of software engineering was that of algorithmic abstraction because that's what our machines did. Most of our machines were meant for mathematical kinds of operations and so as as was done in **forran** it was a matter of building our software that could do formula translation. So that was the realm and the problems faced by the first generation

</details>

**主持人**: 那么，这第一代，从时间线上看，你大概会把它放在哪里？

<details>
<summary>Original English</summary>

**>>**: and and this first generation like in timeline where would you put it roughly

</details>

**Grady Booch**: 从时间上看，我把它放在40年代末到70年代末左右。

<details>
<summary>Original English</summary>

**Grady Booch**: timewise I'd put it in the late 40s to the late7s or thereabouts

</details>

**主持人**: 那就是那个时间段的主导。所以你会看到的人物是**Ed Jordan**、**Tom DeMarco**、**Larry Constantine**。这是**ERP**，哦，抱歉，不是实体关系，而是实体关系概念出现的时候。所以这类抽象的思想不仅渗透到软件中，也渗透到数据方面。这是软件工程中一个极其活跃的时期，例如我们发明了**流程式图**，它有助于思考如何构建这些系统。你看到了劳动分工，有人分析系统，有人编程，有人打孔解决方案，有人操作计算机。这再次主要是由经济原因驱动的，因为机器的成本远高于其中涉及的人力成本。所以当时发生的大部分事情都是为了优化机器的使用，而机器是非常非常稀缺的资源。嗯，我们将在下一代中看到的教训是，这些力量，就像软件工程本身一样，塑造了软件行业，经济和整个社会背景也影响着它们。所以在第一代，它主要集中在数学需求和现有业务流程的自动化上。所以发生的情况是，你会看到企业有字面意义上的办公室楼层，人们在那里做会计和工资等工作。这就像是唾手可得的成果，因为现在突然我们可以加速这些流程，并通过将人类排除在外并自动化它们来实际提高它们的精确度。所以当时编写的大量软件都是商业、数学和数值方面的。现在，这是一个重要的事情，因为虽然这是重点，但这并不是唯一的事情，因为你在外围看到，或者我应该说，从当时程序员的角度来看，主导的地方是**IBM**、保险公司、银行等。在那个世界之外，国防工业也有很多工作在进行。我们看到人们将软件和硬件引入我们的破坏机器，引入我们的飞机，引入我们的导弹。我们看到它进入天气预报。我们看到它进入医疗设备本身。所以虽然重点是普通大众会看到的东西，但边缘也发生了很多事情。我想说，在软件工程的第一个黄金时代，算法抽象有一个核心推动，进入商业和数值领域，但真正的创新发生在那个边缘，特别是它不在商业案例中，而是在国防案例中，因为**俄罗斯**当时对我们来说是一个明显而现实的威胁，需要构建实时分布式系统，我谈到的大多数系统都不是实时的。因此，我们看到了像**Whirlwind**这样的实验性机器的兴起。我们看到了“**所有演示之母**”中的工作，那是各种人机界面方面的实验，这在当时并不是软件开发的重心，而是发生在边缘的事情。我们看到了像**David Parnes**这样的研究人员，以及**CAR Dyster**等人，他们开始研究这些系统的形式化，并将软件开发视为一种形式化的数学活动。

<details>
<summary>Original English</summary>

**>>**: and that's what dominated that time frame. So the figures you would see would be uh **Ed Jordan**, **Tom DeMarco**, **Larry Constantine**. This is when uh **ERP** uh sorry not entity relationship ideas came about. And so these ideas of that kind of abstraction poured over not just into software but also into the data side of things as well. This was an extraordinarily vibrant period of time in software engineering in which we had the invention of **flowcharts** for example which were an aid to thinking about how to construct these kinds of systems. You saw a division of labor where you had people who would analyze the system. You people who would then program it, people who would key punch the solutions, people would operate the computers. And again this was largely driven driven by economic reason because the cost of machines were far greater than the cost of the humans involved in them. So a lot of what was happening was done to optimize the use of the machines which were very very rare resources. Um the lesson in this as we'll see coming back in the next generations is that these forces much like with software engineering itself have shaped the very industry of software and economics and the whole social context also influences them. So in the first generation it was largely focused upon mathematical needs and the automation of existing business processes. So what you had happen is that you would have businesses that have literal, you know, floors of offices with people doing accounting and payroll and like that. And this was the lowhanging fruit because now all of a sudden we could accelerate those processes and actually improve their precision by pulling the human out of it and automating it. So the vast amount of software written during that time was business and and mathematical and and numerical kinds of things. Now this is an important thing because while this was the focus, this was not the only kind of thing because you saw in the periphery or shall I say from the point of view of a person who was a programmer in that time it looked to them as the dominant places was in the **IBMs**, the insurance companies, the banks and the like. There's a lot of work going on outside that world in the defense industry as well. We saw people moving software and hardware into our machines of destruction into our aircraft into our missiles. We saw it moving into weather forecasting. We saw it moving into medical devices itself. So while the concentration was the things that the general public would see a lot of stuff happening around the edges as well. I would say in the first golden age of software engineering there was this central push of algorithmic abstractions into business and numerical things but the real innovation was happening in that fringe in particular it wasn't in business cases but it was in defense cases because **Russia** was the clear and present threat for us at the time in which there was a need to build distributed systems of real time nature most of the systems I've talked about this were were not real time. And so we saw the rise of of experimental machines such as **whirlwind**. We saw the work in the **mother of all demos** which was experimentation of various human interface kinds of things which was not the center of gravity of of software development at the time with the things on the fringes. We saw we saw researchers such as **David Parnes** who were coming on the scene **CAR Dyster** and others were forbidding to look at the formalisms of these systems and looking at treating software development is actually a formal mathematical activity.

</details>

### 软件工程的挑战与解决方案

**旁白**: **Grady**刚刚提到了形式化方法和形式化数学在软件工程中的应用。能够验证软件是否按预期运行，一直是软件工程早期就存在的问题。这很好地引出了我们的季度赞助商**Sonar**。当我们正经历**Grady**所说的软件工程的第三个黄金时代时，AI编码助手以我们前所未有的速度生成代码。这种快速的代码生成已经在代码审查环节造成了巨大的新瓶颈。我们都感受到了。所有这些新生成的AI代码都必须经过安全性、可靠性和可维护性的检查。然而，这是一个棘手的问题：我们如何在不承担巨大风险的情况下获得AI的速度？**Sonar**，**Sonar Cube**的制造商，对此有一个非常清晰的框架：先感受，再验证。感受部分是指让你的团队可以自由使用这些AI工具进行创新和快速构建。验证部分是必不可少的自动化防护栏。它是一个独立的验证，检查所有人工和AI生成的代码是否符合你的质量和安全标准。帮助开发者和组织领导者充分利用AI，同时保持高水平的质量、安全性和可维护性，是即将举行的**Sonar Summit**的主要主题之一。这不仅仅是一个用户大会。它汇集了开发者、平台工程师和工程领导者，共同分享这个新时代的实用策略。我很高兴能在此发表演讲。如果你正在努力解决如何在不牺牲代码质量的情况下采用AI，请加入我们的**Sonar Summit**。要查看议程并注册3月3日的活动，请访问sonarsource.com/pragmatic/sonarssummit。接下来，让我们回到**Grady**，以及将软件开发视为一种数学活动。

<details>
<summary>Original English</summary>

**Some**: **Grady** just mentioned formal methods and formal mathematics and software engineering. Being able to verify that software does what it should has been a problem since the early days of software engineering. And this leads us nicely to our seasonal sponsor, **Sonar**. As we're living through what **Grady** might call the third golden age of software engineering, AI coding assistants generate code faster than we ever thought was possible. This rapid code generation has already created a massive new bottleneck at code review. We're all feeling it. All that new AI generated code must be checked for security, reliability, and maintainability. A question that is tricky to answer though. How do we get the speed of AI without inheriting a mountain of risk? **Sonar**, the makers of **Sonar Cube**, has a really clear way of framing this. Vibe then verify. The vibe part is about giving your teams the freedom to use these AI tools to innovate and build quickly. The verify part is the essential automated guardrail. It's the independent verification that checks all code human and AI generated against your quality and security standards. Helping developers and organizational leaders get the most out of AI while still keeping quality, security, and maintainability is high on the main themes of the upcoming **Sonar Summit**. It's not just a user conference. It's where devs, platform engineers, and engineering leaders are coming together to share practical strategies for this new era. I'm excited to share that I'll be speaking there as well. If you're trying to figure out how to adopt AI without sacrificing code quality, come join us at the **Sonar Summit**. To see the agenda and register for the event on March 3rd, head to sonarsource.com/pragmatic/sonarssummit. With this, let's get back to **Grady** and treating software development as a form of mathematical activity.

</details>

**Grady Booch**: 你看到了分布式和实时系统的兴起，主要是在国防领域。所以从**Whirlwind**衍生出了一个名为**SAGE**的系统，即半自动地面环境系统，它出现在50年代和60年代，实际上最后一个在1990年代退役。这是基于**俄罗斯**的威胁。你知道，这是导弹出现之前，**俄罗斯**会派遣轰炸机群飞越北极入侵美国。因此诞生了**D-line**，即横跨加拿大的远程早期预警系统。所有这些数据都被输入到一系列名为**SAGE**的系统中，即半自动地面环境系统。据一些报道称，这个系统非常庞大，它消耗了当时美国20%到30%的软件开发人员。

<details>
<summary>Original English</summary>

**Grady Booch**: And you saw the rise of I said distributed and real-time systems primarily in the defense world. So from **whirlwind** it begat a system called **sage** the semi-automatic ground environment which came about during the six during the 50s and60s and indeed the last one was decommissioned I think in the 1990s. This was based upon the threat of **Russia**. This is you know pre premissiles **Russia** would send a fleet of bombers over the Arctic and invade the United States. So thus was born the **D-line**, the distance early warning system across Canada. And all that data was then fed into a series of systems called **SAGE**, the semi-automatic ground environment. This system was so large it consumed according to some reports easily 20 to 30% of every number of software developers in the United States at the time.

</details>

**主持人**: 哇，那很多人啊。

<details>
<summary>Original English</summary>

**>>**: Wow, that's a lot of folks.

</details>

**Grady Booch**: 但请记住，当时可能只有几万名软件开发人员，但这是最大的项目。

<details>
<summary>Original English</summary>

**Grady Booch**: But remember back in the time there were maybe only a few tens of thousands of software developers but this was the biggest project

</details>

**主持人**: 基本上，军方是软件研究和推动行业发展的最大金主，对吧？因为他们有……

<details>
<summary>Original English</summary>

**>>**: basically the military was the biggest spender uh in soft in research and moving the industry forward right because they had

</details>

**Grady Booch**: 绝对正确，他们必须这样做，因为那是一个明显而现实的威胁。所以很多创新都发生在国防领域，我想我曾在正在制作的关于计算的纪录片中向你提过这句话，我用了一个短语，说计算历史上有两个主要影响因素，一个是商业。我们已经谈过经济了。第二个是战争。因此我声称，我认为有很多证据支持这一点，现代计算很大程度上是在悲伤的织机上编织而成的。这里指的是**提花织机**。所以，是的，我们今天认为理所当然的很多东西，比如互联网，比如微型化，都来自于政府在这些情况下的资助。所以我们欠**冷战**很多。这个阶段，这仍然是第一个黄金时代吗？我们已经过了第一个黄金时代。这些是第一个黄金时代发生的事情。但我想指出的是，它有一个重心，但边缘也发生了很多事情，这些事情正在将软件从其主要根源中推出来。所以我们在这里回顾一下。在第一个黄金时代，你主要关注数学和商业应用。主要的分解方式是算法抽象。我们通过过程和函数来看待世界，而不是太多地通过数据。但在边缘，我们有组织、用例，它们将我们推向超越那个简单的地方。用例要求分布式，用例要求多台机器的耦合，还要求实时处理，以及要求人机界面。

<details>
<summary>Original English</summary>

**Grady Booch**: absolutely absolutely correct they had to because it was a clear and present threat and so a lot of the innovation was happening to the defense world as I think I passed this phrase on to you in the documentary I'm working on in computing I use the phrase that there are two major influences in the history of computing one is commerce. We've talked about the economics already. And the second is warfare. And thus I claim and I think there's much defense for it. Much of modern computing is really woven upon the loom of sorrow. Referring back to **Jakard's loom**. So yeah, a lot of the things we take for granted today like the internet uh like uh micro miniaturaturization, this all came from government funding in these cases. So we owe a lot to the **cold war**. This phase was this still the first golden age? We passed the first golden age. These are the things happening in the first golden age. But what I'm pointing out is there was sort of a center of mass to it, but lots of things happening on the edge that were driving software out from its primary roots. So let's recap here. In the first golden age, you had the focus primarily upon mathematical and business kinds of applications. And the primary means of decomposition was an algorithmic abstraction. We looked at the world through processes and functions, not so much through data. But on the fringe, we had organizations, use cases that were pushing us beyond that simple place. Use cases that demanded distribution, use cases that demanded the coupling of multiple machines and also use cases that demanded real-time processing and use cases that demanded human user interfaces.

</details>

**主持人**: 是的，我们今天使用的界面，它们的根源在于**Whirlwind**和**SAGE**。这是第一个图形管UI界面，一个**CRT**。所以这些东西都是从那里诞生的。所以那是重点，我认为从中得到的教训是，软件是一个美妙的动态、流动、可替代的领域。但它也是一个倾向于增长的领域，因为一旦我们构建了某个东西，并且我们知道如何构建它，并且我们有这样做的模式，突然间我们发现有经济上有趣的方式可以将其应用到其他地方。所以这是第一代，软件工程的第一个黄金时代。但在70年代末80年代初，你开始看到表象的裂痕。**NATO**关于软件工程的会议是第一个以大规模公开方式做到这一点的。对他们来说，**NATO**意识到我们**NATO**有一个软件问题。我们对软件有永不满足的需求，但我们以速度和质量生产软件的能力，我们就是不知道如何做到。所以这就是所谓的**软件危机**，你知道人们不知道该怎么办。你能帮助我们理解或者带我们回到过去，危机是关于什么的？人们当时都在说什么，天哪，这是个问题？

<details>
<summary>Original English</summary>

**>>**: Yeah, the interfaces we deal with today, they had their roots in **whirlwind** and the roots in **Sage**. This is the first UI interface that was graphic tube, a **CRT**. And so these kinds of things were born from that. So that was the point and I think the lesson from this is that software is a wonderfully dynamic, fluid, fungeible domain. But it's also one that tends to grow because once we built something and we know how to build it and we have patterns for doing so, all of a sudden we discover there economically interesting ways we can apply it elsewhere. So this was the first generation, the first golden age of software engineering. But you could begin to see cracks in the facade in the late 70s early 80s. The **NATO conference on software engineering** uh was one of the first to do this in a big public way. And for them **NATO** was realizing we **NATO** have a software problem. We have an insatiable demand for software and yet our ability to produce it of quality at speed, we just don't know how to do it. And so this was the so-called **software crisis** and you know people didn't know what to do about it. Can you help us understand or take us back what what was the crisis about? What were people like kind of like saying oh my gosh this is the problem?

</details>

**Grady Booch**: 是的，问题总结起来就是软件显然很有用。有经济激励去使用它，但行业无法足够快地大规模生成高质量的软件。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah the problem was to recap was software was clearly useful. There were economic incentives to use it and yet the industry could not generate quality software of scale fast enough.

</details>

**主持人**: 我明白了。我明白了。所以它既昂贵又慢，而且质量不好。

<details>
<summary>Original English</summary>

**>>**: I see. I see. So it it was both expensive, slow and and not good.

</details>

**Grady Booch**: 还有第四个，那就是需求如此之大，我想你可以称之为慢，需求如此之大。就像，哇，我们想要更多这样的东西。给我们更多软件。所以这四件事加在一起，让我们产生了危机感。请注意，这与我们今天面临的危机不同，我们今天担心的是监控，我们担心的是崩溃之类的。所以问题的性质已经改变了，而且在每个黄金时代都会改变。

<details>
<summary>Original English</summary>

**Grady Booch**: There's a fourth one which was the demand was so great that I guess you could call it the slow the demand was so great. It's like wow this is we want more of this stuff. Give us more software. So those four things together put us in the sense of crisis. Notice subtly it's not the same kind of crisis we have today where we worry about surveillance, we worry about you know crashes, that kind of thing. So the nature of the problems have changed and they do in every every golden age.

</details>

**主持人**: 这种事情曾经存在过，这真令人着迷，你知道，生活在我们当前的现实中。

<details>
<summary>Original English</summary>

**>>**: It's fascinating that this thing existed, you know, living in our our current reality.

</details>

**Grady Booch**: 是的。是的。它本身就是一个非常不同的世界。但那是一个当时明显而现实的危险，那是一个令人兴奋、充满活力的时期，因为有太多事情可以做，而软件作为一种灵活、有弹性、流动的介质，意味着我们主要只受限于我们的想象力。你再加上微型化。为什么会出现**集成电路**？为什么**Fairchild**会诞生并建立**硅谷**作为其基础？那是因为**晶体管**。**Fairchild**的第一个客户是谁？主要是空军，为了他们的导弹。事实上，**硅谷**早期制造的大部分晶体管都用于我们的**冷战**项目。但这很棒，因为它为整个基础设施奠定了经济基础，使得大规模进行这些事情成为可能，当然我们知道这催生了**集成电路**，又催生了个人电脑等等。所以我们现在处于70年代末，**软件危机**非常明显。特别是**美国政府**，以一个故事为例，他们认识到他们面临着**巴别塔问题**，即存在如此多的编程语言。据他们统计，军事系统中至少使用了14,000种不同的编程语言。

<details>
<summary>Original English</summary>

**Grady Booch**: Yes. Yes. It's a very different world itself. But it was a the clear and present danger at the time was that and it was an exciting vibrant time because there was so much that could be done and software being such a funible elastic fluid medium meant that we were primarily limited just by our imagination. You add to this then micro miniaturaturization. Why did integrated circuits come about? Why did **Fairchild** uh come about and and establish **Silicon Valley** be the basis for it? It's because of the transistor. Who was the first customer of the **Fairchild**? It was the Air Force primarily for their men missile. In fact, most of the transistors being made in **Silicon Valley** in the earliest days went to our **cold war programs**. But that was great because that established then the the economic basis for the whole infrastructure for doing it where it was possible to start doing these things at scale and of of course we knew that begat integrated circuits that begat personal computers and so on. So here we are now in the late '7s and the **software crisis** was quite clear. The **US government** in particular, to focus on one story, recognized that they had the problem of **Babel** and that there were so many programming languages in place. By their count, there were at least 14,000 different programming languages used through military systems.

</details>

**主持人**: 哦，哇。那时软件比现在小得多。哇。

<details>
<summary>Original English</summary>

**>>**: Oh wow. Back then when software was so much smaller than today. Wow.

</details>

**Grady Booch**: 绝对。这太不可思议了。像**Jovial**这样的语言非常流行。**Jovial**是对**COBOL**等语言的一种文字游戏。我们看到了**Algol**的兴起，它不是一种军事语言，但**CAR Dyster**和**Verth**的形式化力量导致了将数学严谨性应用于我们语言的这一学科的诞生。所以，形式语言研究的思想诞生了。你看到了资源的奇妙汇合，据说在70年代末，政府认识到我们有一个问题，那时他们资助了**ADA项目**，当时被称为联合项目工作组之类的东西，它试图消除现有的语言数量，并尝试将其简化为一种统治所有语言的语言。现在有趣的是，你看到当时有很多有趣的研究正在为其提供支持。**Galan**的抽象数据类型工作，以及**Dave Parnes**的信息隐藏思想，关注点分离，我们今天称之为**清洁编程**、**清洁编码**的思想，但它是**Knuth**的**文学编程**思想。所以这些东西在70年代末80年代初正在酝酿，而**ADA**是推动其大规模实现的一个小小的推动力，其他行业或公司都无法真正做到，因为他们没有像当时的**美国军方**那样的影响力、分量、权威或经济实力。与此同时，在**贝尔实验室**等实验室也有一些有趣的工作正在进行，这些工作催生了**C语言**和**Unix**等，它们变得极其重要。但当时有一位名叫**Bjarn Struestrip**的疯狂研究员，他说，哇，这很酷，但嘿，让我们借鉴**Simula**的一些想法，我应该提一下**Simula**是第一个面向对象的语言，让我们看看能否将它们应用于**C语言**，因为你知道**C语言**有问题，让我们看看能否有所改进。所以，在学术界和这些边缘领域，幕后发生的事情是，我们意识到我们需要新的抽象类型，而不仅仅是算法抽象，而是对象抽象。事实证明，这种二分法背后有一个有趣的历史。**柏拉图**的对话中就存在这种分裂，他让两个人对话，他们正在讨论如何看待世界，其中一个人说我们应该从过程的角度来看待世界。这是基督之前的古希腊哲学家。那个**柏拉图**，他提出了类似的观点。

<details>
<summary>Original English</summary>

**Grady Booch**: Absolutely. It's incredible. And languages like languages like **Jovial** was a very popular one. a jovial kind of a play on words for **cobalt** and and the like. We had the rise of **algal** which was not a military language but the formal forces of **caor** and **dystra** and **verth** led to this discipline of applying mathematical rigor to our languages and so the idea of you know formal language research was born you had this wonderful confluence of resources it said by the late '7s the government recognizing that we have a problem that's when they funded the **ADA project** which at the time was called the joint program working group something something like that which was an attempt to remove the number of language that exist and try to reduce it to one language that ruled them all. Now what was interesting is that you saw at this time there was a lot of interesting research that was feeding into it. the work of uh abstract data types uh from **Galan** and the ideas of information hiding from **Dave Parnes** uh separation of concerns uh the ideas today we would call it **clean programming clean coding** but it's the ideas of **literate programming** from **canuth** so these kinds of things were bubbling away in the late 70s and early 80s and **ADA** was a little bit of a a push to make that happen on a big scale no other industry or company could really do it because they didn't have the exposure or weight or gravitas or economic powerhouse as the **US military** at the time did. At the same time, you had some interesting work going on in laboratories like at **Bell** which had begat **C** and **Unix** and the like which was becoming incredibly important. But there was this crazy researcher at the time by the name of **Bjarn Struestrip** who was saying wow you know this is kind of cool but hey let's take some of these ideas from **simula** I should mention **simula** which was the first object-oriented language and let's see if we can apply them to **C** because you know **C's** got problems with it let's see if we can move about so what was happening in the background in academia and in in these fringes was the realization that we needed new kinds of abstractions and it wasn't just algorithmic abstractions But it was object abstractions. Turns out there's an interesting history behind that dichotomy. There is a discourse in **Plato** about that very kind of split in which he has he has a dialogue between two people who are you know talking about how I look at the world and one of them says we should look at the world in terms of its processes. This is the ancient Greek philosopher from like before Christ. that guy that **Plato** he he he brought up some parallel ideas.

</details>

**主持人**: 他提出了关于通过两种视角看待世界的二分法。正是**柏拉图**，他的作品现在在美国某些大学被禁止，因为他太激进了。对吧？但在他的一次对话中，他观察到其中一位作者说，哦，我们必须通过过程，事物如何流动来审视世界。而另一位则说不不不，我们必须通过事物来审视它们。这就是原子思想的由来。原子这个词本身就来源于希腊词汇和这种术语。所以，看待世界和将世界视为抽象的概念并不是一个新想法。但像**Parnis**和其他人，以及**Simula**的设计者说：“等等，我们可以将这些想法应用到软件本身，我们不仅可以通过算法抽象来看待世界，还可以通过对象抽象来看待世界。”现在，还有另一个因素出现了，这就是**Fortran**的发明者出现的地方。在**Fortran**之后，他去了**IBM**，当然他被任命为研究员，然后他说这很有趣，但我想做点别的，他说让我们看看一种不同的编程方式，那就是**函数式编程**的思想，它通过数学函数、无状态事物来看待世界。所以我们现在谈论的是70年代的工作，当时**函数式编程**的思想诞生了。我有机会在他去世前几个月采访了他，我问他，你知道，为什么**函数式编程**从未大放异彩？他的回答是，因为**函数式编程**让做难事变得容易，但它让做简单事变得惊人地不可能。

<details>
<summary>Original English</summary>

**>>**: He brought up the ideas of the dichotomy of looking at the world through two lenses. The very **Plato** whose work has now been banned in certain US universities because he was so radical. Right? But but in one of these dialogues he observed that one of the writers said oh we have to look at the world through through the processes how things flow. And the other one said no no no we have to look at them through things. And this is where the idea of atoms came about. The very term atom came from Greek terms and and that terminology. So the idea of looking at the world and looking at and looking at the world are basically abstractions is not a new one. But people like **Parnis** and and others and the the designers of **Simula** said, "Wait a minute, we can apply these ideas to software itself and we can look at the world not just through algorithmic abstractions, but we can look at them through object abstractions. Now there's another factor that came into the place and this is where uh the inventor of **Forran** came into be. After **forran** he went off and he did this at **IBM** of course he he was made a fellow and he went off and said this was fun but I want to do something else and he said let's let's look at a different way of programming and it was the idea of **functional programming** which was looking at the world through mathematical functions stateless kinds of things so there was work here we are talking what in the the 70s now in which uh the ideas of **functional programming** came to be I had a chance to interview him a few a few months before he passed away and I asked asked him, you know, why did **functional programming** never make the big time? And his answer was because **functional programming** makes it easy to do hard things, but it makes it astonishingly impossible to do easy things.

</details>

**主持人**: 简单的事情。

<details>
<summary>Original English</summary>

**>>**: Easy things.

</details>

**Grady Booch**: 是的。所以，**函数式编程**有其作用。毫无疑问。我认为它的基础是由**John**在当时奠定的。但即使在今天，它也有其作用。它有一个利基市场，但由于同样的原则，它没有成为主流。所以无论如何，我们现在正处于软件工程第一个黄金时代的尾声，并进入第二个黄金时代。是什么力量促使我们进入那个时代？首先是日益增长的复杂性。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah. So, so **functional programming** has a role. There's no doubt. And I think its foundations were laid at the time by **John**. But even today, it has a role. It has a niche but it hasn't become dominant because of that very same edict. So any rate here we are at the sort of end of the first golden age of software engineering and moving into the second. What were the forces that led us into that? First off it was growing complexity.

</details>

### 软件复杂性与企业级应用

**旁白**: **Grady**刚刚提到，日益增长的复杂性是推动行业进入软件工程新黄金时代的力量。快进到今天，软件复杂性仍在不断增长，部分原因得益于AI更快地生成了更多代码。这很好地引出了我们的季度赞助商**WorkOS**。**WorkOS**提供了使你的应用程序易于实现企业级就绪的基本功能。但在其内部，却存在着巨大的复杂性。我知道这一点，因为我最近参加了**WorkOS**的一次工程规划会议，名为“山顶评审”。一位工程师正在介绍他们提议的实现方案。在这次评审中，我们讨论了如何为客户实现身份验证，当他们的用户使用**WorkOS**在多个平台进行身份验证时。例如，如果用户在移动版本上登出，他们在网页版本上是否应该保持登录状态？反之呢？我们讨论了十多个类似的问题。我了解到，答案归结为：这取决于使用**WorkOS**的客户想要什么。**WorkOS**团队会详细讨论我从未想过的边缘情况，然后将这些决策转化为管理面板中可配置的行为，这样客户就可以为他们的产品和用户选择正确的权衡，而无需自己构建和维护所有这些逻辑。但这并不总是足够的。当客户有独特需求时，**WorkOS**工程团队通常会直接与他们合作，找出如何解决他们非常具体的问题。然后他们将这些解决方案通用化，使其成为每个人都可以使用的平台的一部分。在这次规划会议之后，我对**WorkOS**吸收了多少复杂性，从而让产品和工程团队无需处理，有了新的认识。同样的规划也适用于所有**WorkOS**产品，客户因此获得了所有好处。请访问workos.com了解更多信息。接下来，让我们回到**Grady**，了解软件工程的第二个黄金时代是如何产生的。

<details>
<summary>Original English</summary>

**Some**: **Grady** just mentioned how growing complexity was a force pushing the industry into a new golden age of software engineering. Fast forward to today and software complexity keeps growing, growing and growing in part thanks AI generating a lot more code a lot faster. And this brings us nicely to our season sponsor **work OS**. **Work** provides the primitives that make it easy to make your app enterprise ready. But under the hood, there's so much complexity that happens. I know this because I recently took part in an engineering planning meeting at **work** called the **Hilltop review**. An engineer walking through their proposed implementation. In this review, we discuss how to implement authentication for customers when their users authenticate across several platforms using **work OS**. For example, what should happen if a user logs out on the mobile version? Should they stay logged in in the web version? What about the other way around? We covered 10 plus similar questions. The answer, as I learned, goes down to it depends what the customer using **work OS** wants. The **work OS** team walks through edge cases I had no idea existed and then turns those decisions into configurable behavior in the admin panel so customers choose the right trade-offs for their product and their users without having to build and maintain all of this logic themselves. But this is not always enough. And when customers have unique needs, the **work** engineering team often works with them directly to figure out how to solve their very specific problem. They then generalize these solutions so they become part of the platform for everyone. After this planning session, I have a newfound appreciation for just how much complexity **works** absorbs so product and engineering teams don't have to. The same planning goes into all **work** products and customers get all the benefit. Learn more at workowwise.com. And with this, let's get back to **Grady** and how the second golden age of software engineering came about.

</details>

**Grady Booch**: 正如我所提到的，日益增长的复杂性，快速构建软件的困难，以及构建足够大的软件的困难，我还要补充一点，在国防领域出现的事情，即以分布式方式构建系统的愿望和明显价值。现在，随着微型化的成果出现，我们进入了个人电脑时代。

<details>
<summary>Original English</summary>

**Grady Booch**: As I mentioned, growing complexity, difficulty of building software fast enough and building building big enough software and I would add to this the things that came about in in the defense world which were the desire and an obvious value in building systems from a distributed kind of way. Now come on to the scene because what was happening around that same time is the fruits of micro miniaturaturization came to be and it led us to the personal computer.

</details>

**主持人**: 这是因为**晶体管**，对吧？以及电子学方面的突破。

<details>
<summary>Original English</summary>

**>>**: This was because transistors, right? And and the breakthroughs in in like electronics and and

</details>

**Grady Booch**: 精确地说，你知道，这也是一个充满活力的时代，因为当时有业余爱好者可以自己组装这些东西，从零开始构建它们，当时还没有个人电脑。这是计算历史上第一次业余爱好者能够真正有意义地亲手操作吗？我认为从规模上来说，是的。在**帕斯卡**那个时代，也有像他这样的业余爱好者，他看到他父亲在会计工作上如此繁琐，于是**帕斯卡**为他建造了一台小机器。所以当时有业余爱好者的工作，毫无疑问。但从规模上来说，而且还要记住，二战后，特别是美国，可支配收入增加了，这使得业余爱好者能够真正做这些事情。最后，军方正在生产**集成电路**和**晶体管**。突然之间，特别是在**硅谷**，你可以去**Fry's**或类似的商店购买这些东西。它们就在那里，所以这使得人们能够玩耍，而玩耍在软件历史上是一个重要的部分。所以你看到了70年代末80年代初发生的这种美妙的事情，那是一个充满活力的实验时期。有一本令人愉快的书叫做**《睡鼠说了什么》**，它认为个人电脑的兴起也与嬉皮士反文化运动的兴起联系在一起。所以这种追求“权力归于人民”，以及“要爱不要战争”之类的思想。这是**Steuart Brand**的时代，是**Merry Pranksters**的时代，以及由此产生的**The WELL**，它是最早的社交网络，我们今天称之为公告板，它在**硅谷**兴起。顺便说一句，**Stuart**是一个可爱的人。他实际上在关于**Merry Pranksters**的书中被提到过。他仍然活跃在舞台上，他刚刚出版了一本很棒的书，叫做**《维护第一部分》**，探讨了系统问题。软件就是其中之一，以及与之相关的维护问题。无论如何，我们现在处于70年代末80年代初，这也是一个非常充满活力的时期，因为有很多很酷的事情可以做。

<details>
<summary>Original English</summary>

**Grady Booch**: precisely and you know this too was a vibrant time because you had you know you had hobbyists who could put these things together and and build them from scratch and there were no personal computers at the time. Was this the first time that hobbyists could actually like meaningfully get their hands on it in in the history of computing? Really? I think at scale, yes, you you had you had hobbyists such as **Pascal** back in his day who decided that his father was so tediously working over his accounting that **Pascal** built a little machine for him. So there was hobbyist work at that time, no doubt about it. But in terms of scale and also remember post World War II, you had the addition of especially in the United States, you had more disposable income which made it possible for hobbyists to actually do these kinds of things. And then lastly, you had the military who was producing integrated circuits and transistors. And all of a sudden, especially in **Silicon Valley**, you could go down to **Fry** or the **Fry** equivalent. This is before **Fries** and buy these things. they were just they were there and so it enabled people to play and play is an important part in the history of software. So you had this wonderful thing happening and I'd say the late 70s and early 80s which was a vibrant time of experimentation. There's a delightful book called **what the doormouse said** which posits that the rise of the personal computer was also tied together with the rise of the hippie counterculture. And so this this drive toward you know power to the people and you know let's you know love make love not war these kinds of things. This is the era of **Steuart Brand** the era of of the **Murray pranksters** and the like and that led to things like the **well** which was the very first social network which was today we call them bulletin boards which grew up in in **Silicon Valley**. Quick aside, **Stuart** just a lovely fellow. He was actually mentioned as one of the **merry pranksters** in uh in the book about uh about them. He's still on the scene and he's just released a wonderful book called **maintenance part one** which looks at the problems of systems. Software is one of them and the problems of maint associated with them. Anyway, here we are um late 70s early 80s uh also a very vibrant time because there's a lot of cool stuff that could be done.

</details>

**主持人**: 是的。而且**Strike Press**正在出版这本书。所以，我会在下面的节目说明中留下链接。它看起来像一本非常好的书，而且**Stride Press**以出版高质量书籍而闻名。所以我实际上很期待阅读它。

<details>
<summary>Original English</summary>

**>>**: Yeah. And and it's **Strike Press** is publishing this actually. So, uh, I'll I'll leave a link in the show notes below. It looks like a really nice book and **Stride Press** is known to produce excellent quality. So, I'm actually excited to look into this.

</details>

**Grady Booch**: 是的，这是一本很棒的书。所以，我们现在有了通过对象和类而不是通过过程来看待世界的理论的开端。我们有分布式系统的需求拉动，以及构建越来越复杂系统的需求拉动。所以当时也有一场完美的风暴，真正开启了第二个黄金时代。坦率地说，那就是我登场的时候。我只是在一个幸运的时间点，在一个幸运的地方。当时我在**范登堡空军基地**从事导弹系统和空间系统的工作。当时设想了军用航天飞机，我也是那个项目的一部分。那很棒。那是一个很有趣的地方，因为我们每周大约有两次发射。那很酷。你会跑过去说：“哇，看那个。”那真是太疯狂了。在我工作的那个大楼里，每当有发射时，我都要撤离，因为如果是**泰坦火箭**发射，**泰坦火箭**发射台离我们非常近，如果它在发射台上爆炸，它会炸毁我们的大楼，那会非常烦人。所以，是的。好东西。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah, it's a great great book. So, the realization was that we now had the beginnings of theories of looking at the world not through processes, but through objects and classes. We had the the demand pull of distributed systems, the demand pull from trying to build more and more complex systems. And so there was also this perfect storm that really launched that second golden age. And that's frankly where I came onto the scene. I was just in a lucky place at a lucky time. Um I was at the time working at **Vandenberg Air Force Base** on uh missile systems and space systems. Uh there was envisioned military space shuttle and I was part of that program as well. It was great. It was a fun place to be because we'd have launches like twice a week. It was pretty cool. You'd run up and say, "Wow, look at that." It was it was pretty wild. At the building in which I work, I had to evacuate whenever there was a building, ever a launch because if it was a **Titan launch**, the **Titan launch** pad was really close to us and if it had blown up on the launch pad, it would have it would have blown up our building, which would have been really annoying. So, yeah. Good stuff.

</details>

**主持人**: 还有另一个，另一个小故事，你总是能分辨出什么时候是秘密发射，秘密间谍卫星，因为有两个主要的明确迹象。首先是所有酒店都会住满，因为承包商会来。其次，发射那天，附近的公路上会挤满了人观看发射。所以那个世界没有秘密。所以我们现在是80年代末。世界已经准备好迎接一种新的看待世界的方式，那就是面向对象编程和面向对象设计。那么这与第一代有什么不同呢？不同之处在于我们以不同的抽象层次来处理世界。我们不再仅仅关注数据，这些数据就像这里的一片原始湖泊，以及我们必须操纵它们的算法，而是将它们整合到一个地方。我们将对象和过程结合在一起，而且它奏效了。天哪，它将使我们能够做以前无法做到的事情。它是许多系统的基础。去计算机历史博物馆看看**MacWrite**和**MacPaint**的软件。它是用**Object Pascal**编写的，这是早期的面向对象编程语言之一。这是我见过的最漂亮的软件之一。它结构良好，组织有序。事实上，其中许多设计决策，你今天仍然可以在**Photoshop**等系统中看到。它们仍然存在，这本身就是一个关于软件生命周期的有趣故事。所以通过对象的视角来看待软件被证明非常有效，因为它允许我们以一种新的、新颖的方式来解决软件复杂性问题。所以就像第一个黄金时代一样，这也是一个非常充满活力的时代。在80年代和90年代，你看到了像**三位挚友**（我、**Ivar Jacobson**和**Jim Rumbaugh**）、**Pete Code**、**Larry Constantine**和**Ed Jordan**等许多人再次出现，他们都在说：“让我们不再从过程的角度，而是从对象的角度来看待软件并思考它。”现在，这很棒。我们犯了一些错误。我们过分强调了继承的思想。我们认为这将是最好的东西。嗯，那有点错了。但从类和对象的角度来看待世界的思想，它已经内置了。所以开始发生的事情，这也是一个经济现象。当人们开始构建这些东西时，突然我们看到了平台的兴起。现在这有先例，因为在软件的第一个黄金时代，人们开始一遍又一遍地构建相同类型的东西。收集常用过程和算法的思想，比如你知道我如何操纵硬盘或磁鼓？我如何向电传打字机写入东西？我如何将东西放在屏幕上？这些算法可以被编码，所以最早的将其打包成可重用东西的想法就诞生了。这就是至少在商业系统领域**IBM Share**出现的时候。**Share**是一个由客户组织的团体，他们实际上在彼此之间共享软件。完全是。

<details>
<summary>Original English</summary>

**>>**: And one other one other quick story, you could always tell when it was the secret launches going off, the secret spy satellites, because there were two main clear indications. The first is all the hotels would fill up because you'd have the contractors come in. And second, the day of the launch, the highway nearby where you could see the launch would fill up with people to watch it. So there were no secrets in that world. So here we are, late 80s. uh the the world was poised for a new way of looking at the world and that was object-oriented programming and object-oriented design. So how does that differ from the first generation? It differs in the sense that we approach the world at a different layer of abstraction. Rather than just looking at the data which was this raw lake out here and the algorithms we have to manipulate them, we bring them together into one place. We combined the the objects and the and the uh processes together and it worked. My gosh, it'll enable us to do things we could not do before. It was the foundation for a lot of systems. Uh go out to the computer history museum and go look at the software for for **Mac Write** and **Mech Paint**. It was written in **Object Pascal**, one of the early object-oriented programming languages. One of the most beautiful pieces of software I've seen. It's it's well structured. It's well organized. And in fact, much of the design decisions made in it, you still see persist in systems such as **Photoshop** today. Uh they still exist, which is an interesting story unto itself about the lifetime of software. So looking at software through the lens of object proved to be very effective because it allowed us to attack software, the software complexity problem in a new and new and novel way. And so much like the first golden age, this was also a very vibrant time. in I would say the the 80s and 90s where you had people such as the **three amigos**, me, **Ivar Gakasen**, uh and **Jim Rumba**, you had **Pete Code**, you had **Larry Constantine** was back on the scene, uh **Ed Jordan** was back on the scene, uh a lot of folks who were saying, "Let's look at software not from processes but from objects and think about it." Now, this was great. We made some mistakes. there was an overemphasis upon the ideas of inheritance. We thought this would, you know, be the greatest thing. Uh that was kind of wrong. But the idea of looking at the world from classes and objects, it was kind of built in. And so what began to happen, this was also an economic thing. As it's people started building these things, all of a sudden we saw the rise of platforms. Now there was precedence for this because in the first golden age of software people started you know building the same kinds of things over and over again. The idea of collecting processes collecting algorithms that were commonly used like you know how do I manipulate a hard drive or a drum? How do I write things to a teletype? How do I you know put things on a screen? uh these kind how do I sort these kinds of algorithms could be codified and so the first ideas of if you will packaging them up into reusable things came into be. This is when at least in the the the world of of business systems **IBM share** came to be. **Share** was a customer uh organized group that literally shared software among one anothers. Totally.

</details>

**主持人**: 这发生在第一个黄金时代，对吧？

<details>
<summary>Original English</summary>

**>>**: And this was in the first golden age, right?

</details>

**Grady Booch**: 这是第一个黄金时代，对吧？

<details>
<summary>Original English</summary>

**Grady Booch**: This is the first golden age, right?

</details>

**主持人**: 所以，这就像是一种原始的，或者说，回顾过去，一种更原始的方式，只是把东西打包起来，比如排序算法，或者像你说的**IBM**，**IBM**当时只是分发函数之类的东西。

<details>
<summary>Original English</summary>

**>>**: So So this was kind of like a primitive or like I mean looking back a more primitive way of just like packaging stuff into like yeah related may that be sorting algorithms or or as you said **IBM** **IBM** was distributing just like functions and things like that.

</details>

**Grady Booch**: **IBM**没有这样做。它很完美。它完全是由公众驱动的。**IBM**支持它，但它是由公众完成的。

<details>
<summary>Original English</summary>

**Grady Booch**: **IBM** wasn't doing it. It was perfect. It was completely public driven. **IBM** supported it but was done for it.

</details>

**主持人**: 是的。所以重点是这是最早的开源软件。所以开源的思想是存在的，而且请记住，在当时的软件和硬件经济中，软件基本上是由主要制造商免费赠送的。**IBM**直到60年代末70年代才开始对软件收费，他们意识到天哪，我们可以赚钱，于是他们将软件和硬件解耦，并开始收费。但在最早的日子里，有一个充满活力的社区，人们会说，你知道，天哪，我写了这个东西。去用吧。没问题。所以，开源在那个时候就已经很晚了。同样的事情在第二个黄金时代也开始发生，我们看到了操作系统、开源软件的兴起，同样的现象在第二个黄金时代也适用，但现在它是一个新的抽象层次。哦，我现在想要一个新的库，你知道，用于写入这些新奇的**CRT**。它就在这里。我拥有它没有竞争价值，但天哪，它使我能够构建一些非常酷的东西。你也可以拥有它。所以，开源扎根，从第一个黄金时代汲取思想，在第二个黄金时代应用，但以一种不同的抽象方式。在幕后，说到经济，是平台的兴起，因为现在突然这些库变得越来越大。当我们转向分布式系统时，当时出现了我们称之为**面向服务架构**的东西。当时有这种需求，你知道，我们有**HTML**之类的东西。我们可以，你知道，来回传递链接，但有一些疯狂的人说，如果我们能做一些像，你知道，共享图片的事情，那不是很酷吗？这就是**Netscape**允许的事情之一，他们对**HTML**进行了补充，允许你放置图片。如果我们能通过**HTML**来回传递消息，那不是很酷吗？所以突然之间，互联网通过**HTML协议**、**HTTP协议**成为了一种更高层次抽象的介质，用于传递信息和过程。但需要将其打包。因此诞生了**面向服务架构**，**SOAP**，**面向服务架构**，**面向服务协议**，所有这些都是我们今天所拥有的前身。这为第二个黄金时代的平台时代奠定了基础，你知道，**贝索斯**和其他人真正将我们带到了我们当前的时代，在这个时代，你拥有这些由各种API形成的孤岛。但它是在第二个黄金时代诞生的。当你说平台时，你指的是什么？当你说平台的兴起时，你如何看待平台？**AWS**会是一个很好的例子。**Salesforce**会是另一个例子，在这个例子中，我拥有这些由护城河防御的经济上有趣的城堡，而像**Salesforce**这样的组织会让你以很小的费用穿越护城河。嗯，甚至不是很小的费用。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah. So the point is this was the earliest open- source software. So the ideas of open source existed and remember too in the economics of software and hardware back in the time software was pretty much given away free by the main manufacturers. **IBM** did not charge for software until later in the later 60s7s they realized my gosh we can make money and they decoupled software and hardware and started charging you for it. But in the earliest days, there was this vibrant community of people who could say, you know, gosh, I've written this thing. Go ahead and use it. That's fine. No problem. So, open source was was late at that time. And the same thing began to happen in the second golden age in which we saw much like the rise of operating systems, the rise of open-source software, the same phenomena applied in the second golden age, but now it was a new layer of abstraction. Oh, I want to have now a new uh library for, you know, writing to these new fangled **CRTs**. Here it is. No competitive value in me having it, but by gosh, it enables me to build some really cool things. You can have it, too. So, open source laid its roots, took its ideas from the first golden age, applied itself in the second golden age, but in a different kind of abstraction. Lurking in the background. Speaking of economics, was the rise of platforms because now all of a sudden these libraries are becoming bigger and bigger. And as we moved to distributed systems, there was the rise of back then we called it **serviceoriented architectures**. There was this need of, you know, we had **HTML** and the like. We could, you know, pass links back and forth, but there was some crazy folks that said, wouldn't it be cool if we could do things like, you know, share images? And that was one of the things that uh **Netscape** allowed which was they they produced this addition to **HTML** that allow you to put images. Wouldn't it be cool if we could pass messages back and forth via **HTML**? So all of a sudden uh the internet became via **HTML protocols**, **HTTP protocols** became a medium at a higher level abstraction for passing information and and processes around. But there was a need to package it up. So thus was born **serviceoriented architectures**, **SOAP**, the **serviceoriented architecture**, **serviceoriented protocols**, all that the predecessors to what we have today. And this was laying the foundations in the second golden age for the the beginnings of the platform era which is you know what **Bezos** and and others have really brought us to where jumping ahead in our current age where you have these islands which are sort of formed by all sort of APIs around them. But it was in the second golden age is they were being born. And when you say platforms what do you mean when you say the rise of platforms? What how do you think of a platform? **AWS** would be a good one. Uh **Salesforce** would be another one in which I have these economically interesting castles defended by the moat around them and those organizations like **Salesforce** give you access across the moat for you know a slight fee. Well, not even a slight fee.

</details>

**主持人**: 是的。不是一笔小费用。

<details>
<summary>Original English</summary>

**>>**: Yes. Not a slight fee.

</details>

**Grady Booch**: 是的。前提是，我们作为像**Salesforce**这样的公司，你自己做这件事的成本太高了，所以向我们购买是有意义的。所以在第二个黄金时代，我们看到了这类企业的兴起，因为某些软件的成本足够高，复杂性也确实很高，这使得这类**SaaS**公司得以发展。所以，让我们看看90年代末，2000年代初。这也是一个充满活力的时期，很像第一个黄金时代。我们看到了互联网的增长。你是什么时候拥有第一个电子邮件地址的？

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah. under the assumption that we as like a **salesforce** uh the cost of you doing it yourself is so high it makes sense for you to buy from us. So during the second golden age we saw the rise of those kinds of businesses because the cost of certain kinds of software was sufficiently high and the complexity was certainly high it allowed the business and the industry of these kinds of **SAS** companies. So, let's look at the the late '9s, early 2000s. Also a vibrant time, much like the first golden age. We had the growth of the internet. Uh, when did you get your first email address?

</details>

**主持人**: 我的第一个电子邮件地址大概是在2005年或2006年。那时**Gmail**刚推出，还很新鲜。但你是什么时候拥有第一个电子邮件地址的？

<details>
<summary>Original English</summary>

**>>**: My first email address I got sometime in maybe 2005 six. It was still very fresh when **Gmail** launched. But when did you get your first email address?

</details>

**Grady Booch**: 1987年，那时是**ARPANET**。事实上，那时我们有一本小册子。大概有一百页长，上面列出了世界上每个人的电子邮件地址。那很酷。你可以在网上找到它们，你可以在那里看到我的电子邮件。它现在已经不工作了，因为它没有相同的顶级域名之类的东西。所以，我在电子邮件流行之前就已经在使用电子邮件了。所以当你看到像电子邮件这样的结构在软件的第二个黄金时代成为一种商品时，这就是软件开始渗透到文明的各个角落的时候，它不再仅仅是推动商业或某些领域的单一事物。它成为了文明结构的一部分。这很重要。所以现在我们在第一个黄金时代担心的问题，我们大部分都解决了。它们成为了空气的一部分。我们不再过多地思考算法，因为，你知道，天哪，每个人都多少了解它们。这正是技术应有的样子。最好的技术会蒸发和消失，成为我们呼吸的空气的一部分。而这正是现在正在发生的事情。但那是在第二个黄金时代。我们今天所处的基础都在那里。那么2000年左右发生了什么？嗯，那时互联网已经很大了，很多企业都在建立，但那时也发生了崩溃，因为经济上它就是说不通。所以有一次大撤退。同时发生的还有整个**Y2K问题**，当时投入了大量精力来解决那个问题。你知道，事后人们会说，天哪，我们根本不需要担心那个。但身处其中，你会意识到，哦不，当时有很多英勇的工作。如果那些工作没有完成，那么很多问题就会发生。所以这是一个很好的例子，说明最好的技术你根本看不到。为了避免一个根本没有显现出来的问题，投入了大量的精力和金钱。那是一件很棒的事情。

<details>
<summary>Original English</summary>

**Grady Booch**: 1987 when it was the **ARPANET**. And in fact, at that time, yes, we had a little book. It was probably a hundred pages long that listed the email address of everybody in the world. It was pretty cool. You can find them online and you can see my email there. Doesn't work anymore because it doesn't have the same, you know, top level domain kind of things. So, I've been on email before email was cool. And so as you saw these kinds of structures like email becoming a commodity thing in the second golden age of software, this is when software began to filter into the interstitial spaces of civilization and it became not just this one thing fueling businesses or certain domains. It became something that became part of the very fabric of civilization. This was important. And so now the things we worried about in the first golden age, we'd solved them for the most part. They were part of the very atmosphere. We didn't think about algorithms much because, you know, gosh, everybody kind of knows about them. And this is as technology should be. The best technology evaporates and disappears and becomes part of the the air that we breathe. And that's what's happening now. But it was in the second golden age. The foundations of where we are today are here. So what happened around 2000 or so? Well, we had by that time internet was big, lots of businesses being built, but there was the crash around that time because economically it just didn't make sense. So there was this great pullback. Also happening was the whole **Y2K situation** where a lot of effort was put into, you know, solving that problem. You know, people in retrospect say, well gosh, we didn't need to worry about that. But being in the middle of it, you realize, oh no, there was a lot of heroic work. And if that hadn't been done, then lots of problems would have happened. So this is a good example of how the best technology you simply don't see. A lot of effort and a lot of money was spent to subvert a problem that simply did not manifest itself. That's a great thing.

</details>

### 隐形技术与Y2K危机

**旁白**: **Grady**刚刚提到，最好的技术是你根本看不到的。这是一个被低估的观察，对于大多数任务关键型软件来说都是如此。当它工作时，它是隐形的。只有当它出现故障时，用户才会注意到它的存在。然而，构建可靠的隐形软件存在一个问题。在快速行动、少设防护栏（可能导致问题）与增加防护栏以提高稳定性但减慢发布速度之间，常常存在一种张力。嗯，还有第三种方式，这很好地引出了我们的赞助商**Statsig**。**Statsig**构建了一个统一平台，它能够实现两种文化的最佳结合：持续发布和实验。特性标志让你能够自信地持续发布。向10%的用户推出。及早发现问题。如果需要，可以立即回滚。内置的实验功能意味着每一次发布都会自动成为一个学习机会，通过适当的统计分析，准确地向你展示特性如何影响你的指标。而且由于所有这些都在同一个平台，使用相同的产品数据，分析应该取代一切。你的组织中的团队可以协作并做出数据驱动的决策。像**Notion**这样的公司，从每季度个位数的实验量，使用**Statsig**后增加到300多个实验。他们发布了600多个特性，这些特性都隐藏在特性标志之后，在快速行动的同时防止了指标回退。**微软**、**Atlassian**和**Brex**也出于同样的原因使用**Statsig**。它是实现大规模速度和可靠性的基础设施。他们提供慷慨的免费套餐，团队专业版每月150美元起。要了解更多信息并获得30天企业试用，请访问statsig.com/pragmatic。接下来，让我们回到**Grady**谈论的**Y2K事件**。

<details>
<summary>Original English</summary>

**Some**: **Grady** just mentioned how the best technology is one that you simply do not see. This is an underrated observation and it's true for most mission critical software. When it works, it's invisible. It's only when it breaks when users notice that it's there. There is however a problem with building reliable invisible software. There's often a tension between moving fast with few guard rails that can make things break or putting in more guard rails for stability but then slowing down in shipping speed. Well, there's a third way which leads us nicely to our presenting sponsor **stats**. **Static** built a unified platform that enables the best of both cultures continuous shipping and experimentation. Feature flags let you ship continuously with confidence. Roll out to 10% of users. Catch issues early. Roll back instantly if needed. Built-in experimentation means every roll out automatically becomes a learning opportunity with proper statistical analysis showing you exactly how features impact your metrics. And because it's all in one platform with the same product data, analytics that should replace everything. Teams across your organization can collaborate and make datadriven decisions. Companies like **Notion** went from single digit experiments per quarter to over 300 experiments with **stats**. They ship over 600 features behind feature flags, moving fast while protecting against metric regression. **Microsoft**, **Atlashian**, and **Brex** use **static** for the same reason. It's the infrastructure that enables both speed and reliability at scale. They have a generous free tier to get started, and pro pricricing for teams starts at $150 per month. To learn more and get a 30-day enterprise trial, go to stats.com/pragmatic. And with this, let's get back to the **Y2K event** that **Grady** was talking about.

</details>

**主持人**: 是的，我记得2000年到来之前那段时间有多么紧张。我想甚至有些电影都出来了，预测世界会如何崩溃，但当时有一种恐惧，担心所有这些系统都会崩溃，而且在临近的几个月里，这种恐惧变得相当强烈。所以那时我还是个孩子。但2000年到来时，那可能是我经历过的最紧张的新年，因为你不太确定。你当时抱着希望，然后什么也没发生，你就会想，好吧，那只是个骗局。所以任何经历过那件事的人，都会学到不要相信这些预测。但你说得对，知道当时付出了多少努力来确保那个溢出不会在错误的地方发生。是的。所以我们现在精神上把自己放在2000年代的第一个十年，那是一个有趣的地方，因为是的，当时有崩溃，但仍然有很多有趣的事情可以做，有很多很棒的软件可以编写。我们仍然主要只受限于我们的想象力。现在我要暂停一下，补充一些我之前没有提到的历史。我们一直在谈论一般的软件。在AI领域也有一段平行的历史，我们也看到了几代。AI的第一个黄金时代是在40年代和50年代，当时有**Herbert Simon**、**Newell**，特别是**Minsky**。当时的重点是，天哪，我们可以使用符号方法人工构建智能。所以这是AI的第一个黄金时代，第一个伟大时代，并且尝试了神经网络的思想。他们构建的东西是**Snark**，这是第一个真空管人工神经元。它需要五个真空管才能制造一个神经元。当时英国有一份报告说，我们在这里花了很多钱，但天哪，它不起作用。所以第一个黄金时代结束了，当他们意识到你无法真正构建任何有趣的东西时。而且，神经网络是一条死胡同。主要是死胡同，因为我们没有计算能力来做它们。我们没有算法概念，没有抽象概念来知道如何大规模地处理它们。AI的第二个黄金时代实际上是在80年代，当时像**Falcon**这样的人出现，说嘿，还有另一种看待它的方式，那就是通过规则来看待它。于是诞生了机器学习的思想，像**M**之类的东西出现了，但我们也看到了AI寒冬的到来。顺便说一句，当时硬件也有一个有趣的兴起。**Lisp机器**、**Thinking Machines**都是在这个时期建造的。那是计算机架构的充满活力的时期。所以你看到这些东西相互促进，但最终它失败了，因为一旦你超出了几百个“如果-那么”语句，它们就无法扩展。我们根本没有办法构建能够处理它们的推理引擎。所以我们现在又回到了激动人心的时代，2000年代的第一个十年。AI有点，你知道，退居幕后。我们仍然有很多很酷的事情要做，而且分布式系统越来越多，此外，软件现在通过个人电脑掌握在个人手中，这也推动了这一点。所以对软件的需求更大了。我敢说，这可能有点争议。我们正处于软件工程的第三个黄金时代，但它实际上是在千禧年之交开始的。不是现在，而是那时。而它兴起的第一个迹象是，我们看到了抽象层次的新一轮提升，从软件程序的单个组件到作为我们平台一部分的整个库和包。哦，我需要做消息传递。嗯，我不会在自己的机器上做。我可以去这个做消息传递的库。我需要管理这一大块数据。让我们，你知道，使用**Hadoop**之类的东西。当时它还没有出现，但种子正在生长。所以我们再次看到了抽象层次的增长，从简单的程序到现在的系统子组件，这是发生的下一个重大转变，我们的方法论、我们的语言以及所有这些都开始跟进。所以我们已经处于第三个黄金时代好几年了。而且，不要超前，AI助手之类的东西在编码领域发生的事情，在很多方面是对那些事物增长的一种反应，因为我们想要加速它们的使用。我们想要，我们有那么多这样的库，但没有足够的人了解它们。我们希望通过辅助工具来加速它们的使用。所以这就是我将**Cursor**和**ChatGPT**等AI代理置于其中的背景，它们在某种程度上是已经将我们带入第三个黄金时代的力量的延续。所以我们现在正处于一个非常充满活力的时期，但问题与第一代和第二代不同。现在的问题是什么？首先，问题是我们有如此多的软件。我们如何管理它？我们必须处理安全和保障问题。是否有人可以偷偷植入我无法信任的东西？我如何防范它？在**软件供应链**中注入东西是如此容易。我如何阻止坏人把东西放进去？我如何防范它？**Stuxnet**之类的整个历史就是一个很好的例子，展示了间谍活动和软件。所以突然之间，我们在软件历史的大部分时间里都被隔离的人类问题，因为软件是文明的一部分，这些人类问题变得突出，对我们的世界来说是明显而现实的。另一个因素是经济问题。我们现在有了大到不能倒的公司。如果**微软**倒闭会发生什么？如果**谷歌**倒闭会发生什么？它们对世界经济如此重要，以至于它们所做的事情，它们在世界的某个地方打个喷嚏，世界就会感冒。所以我们现在在软件的第三个黄金时代面临的问题与第一代和第二代不同，但同样令人兴奋。最后，我们有伦理问题。因为我可以做这种软件，我有可能在一天中的每一刻追踪你的位置。我可以做到。我应该这样做吗？有些人会说应该，因为它，你知道，对人类有益。另一些人会说不确定。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah, I I I I remember how stressful that time was leading up to year 2000. I think some movies even came out uh predicting, you know, h how the world would collapse, but there was this fear of like will all these systems crash and it it it started to become pretty intense in in the few months leading up. So I I I was, you know, like a a kid at that time. But when the year 2000, like that was probably the most stressful new year because you weren't kind of sure. You were hoping, you know, and then nothing happened and you're like, okay, it was just a hoax. So anyone who who went through there uh like kind of learned to like not trust these predictions. But you're right like knowing what know there was so much work right to make to make sure that that overflow did not like hit at the wrong place. Yeah. So here we are mentally put yourself in the the first first decade of the 2000s is a fun place because well yeah the there was the crash but still so much fun stuff to do, so much great software to be written. We were still only limited largely by our imagination. Now I'm going to pause for a moment and backfill with some history that I hadn't mentioned. We've been talking about software in general. There was a parallel history going on in AI in which we saw also some generations. The first golden age of AI was in the 40s and 50s where you had people such as **Herbert Simon** and **Newell** and **Minsky** in particular. The focus there was upon gosh we could build intelligence artificially using symbolic methods. So this was the first golden age first great age of AI and the ideas of neural networks were tried. The the thing they built was the **snark** which was the first vacuum tube artificial neuron. It took like five vacuum tubes to make a single neuron. And there was a report coming out of the UK at the time that said we're spending a lot of money here but by gosh it doesn't work. And so the first golden age ended when they realized you can't really build anything interesting. And furthermore, neural networks are a dead end. Largely a dead end because we didn't have the computational power to do them. We didn't have the algorithmic concepts, the abstractions to to know what to do with them once we had them at scale. The second golden age of of AI was really in the 80s when you had people like **Falcon** come along and say hey there's another way of looking at it and it's looking at it through rules. Thus was born the idea of machine learning uh things like **m** and the like came upon the scene but there too we saw the **AI winter** come about. By the way there was an interesting rise in hardware at the time. The **list machine** the **thinking machine** were all built during this time. vibrant periods of time of a of computer architectures. So you see these kind of feeding into one another, but ultimately it failed because they didn't scale up once you got beyond a few hundred if then statements. We simply didn't have a means of building inference engines that could do anything with them. So here we are in exciting time again two first decade of the 2000s. AI was kind of you know back in in the back rooms. we still had a lot of cool things to do and uh more and more distributed kind of systems plus fueling that also was the fact that software was now in the hands of individuals through personal computers. So the demand for software was even greater. I would claim and this may be a little controversial. We are in the third golden age of software engineering but it actually started around the turn of the millennium. It's not it's not now but it's then. And the first indication of the rise of it is we saw a new rise in levels of abstraction from individual components of our software programs to whole libraries and packages that were part of our platform. Oh, I need to do messaging. Well, I'm not going to do that on my own machine. I can go out to this library which does messaging. I need to manage this whole chunk of data. Let's, you know, use **Hadoop** or something like that. it wasn't around the time but the seeds where it was growing. So we again saw a growth in levels of abstraction from just simple programs to now subcomponents of systems and that was the next great shift that happened and our methodologies and our languages and all that began to follow. So the third golden age we've been in for several years already. And not to get ahead of ourselves, what's happening with AI assistance and the like in the coding space is in many ways a reaction to the growth of those kinds of things because we want to accelerate their use. We want to we have so many of those kinds of libraries out there and not enough people know about them. We want to accelerate the use of them by having aids that help us do so. So that's the context in which I put AI agents such as **cursor** and **chat tpt** in and that they are in a way a follow on to the forces that have already led us to this third golden age. So we are now in a very vibrant time but the problems are different from the first and second generations. What are the problems now? First, it's problems of we have so much software. How do we manage it? And we have to deal with issues of safety and security. Can somebody sneak in something that I can't trust? How do I defend myself against that? It is so easy to inject something in the **software supply chain**. How do I prevent the bad guys from putting stuff inside there? How do I defend against it? the whole history behind **stuck necks** and the like is a good one uh to show you know espionage and software. And so all of a sudden the human issues that we had for much of the history of software we were insulated about because it was so much part of civilization these human issues became front and center clear and present for our world. And the other element is to the economic issues of it. We had now companies that were too big to fail. What would happen if a **Microsoft** were to go under? What would happen if a **Google** were to go under? They're so economically important to the world that the things they do, they sneeze in some part of the world catches a cold. And so the problems we have now in this third golden age of software are different than they were than the first and second generations, but equally as exciting. And then last, we have the the ethical issues. because I can do this kind of software, it is possible for me to track where you are in every moment of the day. I can do that. Should I do that? Some will say yes, I should because it, you know, it's a good thing for humanity. Others will say not so sure about that.

</details>

**主持人**: 所以，我喜欢你这样阐述。这非常有趣，特别是通过你的经验，也分享了我们很多人不曾真正反思的历史，那就是这一切是如何开始的，以及它实际上是多么年轻。如果，我的意思是，你知道，70或80年可以很长，取决于你的年龄，但它甚至还不是一代人，或者勉强一代人。

<details>
<summary>Original English</summary>

**>>**: So, I like how you laid it on. It's very interesting, especially through both your experience and also sharing the history that I think a lot of us don't really reflect on, which is how it all started and just honestly how young it is. If if I mean you know like 70 or 80 years can be long depending on how old you are but it is it's it's not even a generation or barely generation.

</details>

**Grady Booch**: 大约两代人。是的。

<details>
<summary>Original English</summary>

**Grady Booch**: It's a couple of generations. Yeah.

</details>

**主持人**: 但我现在在整个行业中看到一件事，这感觉很符合这种设定，但有一件事似乎与今天许多软件工程师的感受相矛盾。

<details>
<summary>Original English</summary>

**>>**: But one thing that I'm seeing across the industry right now which feels very like this setup makes sense but one thing that kind of feels it contradicts it for a lot of software engineers today

</details>

**主持人**: 似乎有一种存在的恐惧，尤其是在寒假期间加速了。寒假期间发生的事情是，在寒假之前，这些AI、**LLM**在自动补全方面表现得相当不错。有时它们可以生成这个或那个。而在寒假期间，我不确定你是否玩过一些，我玩过新的模型，它们实际上生成了非常好的代码，以至于我开始信任它们。

<details>
<summary>Original English</summary>

**>>**: is there seems to be an ex existential dread that is especially accelerating especially over the winter break. What happened over the winter break is before the winter break, these AI uh **LLMs** were were pretty good for autocomplete. Sometimes they could generate this or that. And over the winter break, I'm not sure if you played with some of I have with the new Yeah, with the new models, they actually generate really good code to the point that I'm starting to trust them. And

</details>

**Grady Booch**: 是的。

<details>
<summary>Original English</summary>

**Grady Booch**: yes,

</details>

**主持人**: 就软件的历史而言，我的理解是软件开发者一直在编写代码，这是一件很难的事情。我们很多人，你知道，需要数年才能学会，要做到精通则需要更长时间。所以我们很多人开始产生这种真正的存在危机，好吧，机器可以编写非常非常好的软件代码，首先，这到底是怎么回事？这在过去几个月里是如何发生的？然后问题是接下来会发生什么？这感觉可能会动摇这个行业，因为我觉得编码一直与软件工程紧密耦合，而现在可能不再是这样了。你知道，深呼吸，首先回顾历史，然后你的看法是什么？现在正在发生什么？

<details>
<summary>Original English</summary>

**>>**: as far as the history of software has been, my understanding is that software developers have written code and it's a hard thing to do. And a lot of us, you know, it takes years for us to learn and to be excellent at it even longer. And so a lot of us are starting to have this really existential crisis of okay, well the machine can write really really good software code first of all like WTF and how did this happen over the last few months and then the question is what next? this it feels that it could shake the profession because I feel coding has been so tightly coupled to software engineering and and now it might not be you know looking at I guess you know like taking a breathe out first and looking through the both the history and and your your what is your take on what's happening right now

</details>

**Grady Booch**: 嗯，让我说，这不是开发者面临的第一次存在危机。他们曾在第一代和第二代面临过同样的存在危机。所以我看待这个问题时会说，你知道，这也会过去。当我与那些对此感到担忧的人交谈时。别担心，专注于基本原理，因为这些技能永远不会消失。我有机会见过**Grace Hopper**。她真是个可爱的人，你知道，像个小火炉一样的女人。真是令人惊叹的事情。对于你的读者，去谷歌搜索**Grace Hopper**和**David Letterman**，她曾出现在**David Letterman**的节目中，你会感受到她的个性。

<details>
<summary>Original English</summary>

**Grady Booch**: well let me say that this is not the first existential crisis the developers have faced tell us more they have faced the same kind of existential crisis in the first and the second generation. So that's why I look at this and say, you know, this too will pass when I talk to people who are concerned about it. Don't worry, focus upon the fundamentals because those skills are never going to go away. I had a chance to meet **Grace Hopper**. She was just delightful, you know, fireplug of a woman. Just amazing, amazing thing. For for your readers, go Google **Grace Hopper** and **David Letterman** and there's this she appeared on the **David Letterman show** and you'll get a sense of her personality.

</details>

**主持人**: 嗯，我们会在下面的节目说明中链接。

<details>
<summary>Original English</summary>

**>>**: Well, we're going to link in the show notes below.

</details>

**Grady Booch**: 她当然是那个认识到在50年代有可能将我们的软件与硬件分离的人。这对那些早期机器的建造者来说是一种威胁，因为他们说，你知道，天哪，你永远无法构建任何高效的东西，因为你必须与机器如此紧密相连，那个领域的许多人，他们写文章表达了担忧，你知道，这会摧毁我们所做的一切，而且它本应如此。所以我们在这里看到了第一个编译器的开端。同样的事情也发生在**Fortran**的发明上，当时人们说，天哪，你知道，我们可以编写比任何机器都更好的紧凑汇编语言，但这被证明是错误的，当我们从汇编语言提升到高级编程语言的抽象层次时。所以你有一群人同样担心并苦恼于抽象层次的变化，因为他们认识到他们当时的技能将会消失，并且将被他们自己创造的东西所取代。现在你没有看到那么大的危机，因为在那个时间段我们没有那么多人。我们现在谈论的是几千人。我们现在谈论的是数百万人，他们非常合理地提出了一个问题：这对我们意味着什么？所以，我曾，我相信你也有过，许多，你知道，特别是年轻的开发者来找我说，**Grady**，我该怎么办？我选错领域了吗？我应该，你知道，做些不同的事情吗？我向他们保证，这实际上是从事软件行业的一个激动人心的时刻，原因如下。我们正在提升一个抽象层次，就像从机器语言到汇编语言，从汇编语言到高级编程语言，从高级编程语言到库的提升一样，同样的事情发生了，我们正在看到抽象层次的同样变化，现在我作为一名软件开发者，我不需要担心那些细节，所以我认为这是一种极大的解放，把我从我必须做的繁琐工作中解放出来，但基本原理仍然存在。只要我选择构建能够持久存在的软件，这意味着我不会构建它然后扔掉。如果你要扔掉它，那就随心所欲。那很棒。我看到很多人正是为了这个目的使用这些代理。那太棒了。你将去自动化那些你今天无法负担的事情。如果你是它的单一用户，那么祝你成功。这就是业余爱好者的时代，如果你愿意，就是软件的业余爱好者方面，就像我们在个人电脑最早的日子里看到的那样，人们会构建这些东西。很棒的东西。很棒的想法会从中产生。

<details>
<summary>Original English</summary>

**Grady Booch**: She of course is the one who recognized that it was possible here we are in the 50s that it was possible to separate our software from our hardware. This was threatening to those who were building the early machines because they said you know gosh you could never build anything efficient because you have to be a tied so closely to the machines and many in that field and they wrote about it expressed concerns that you know this is going to destroy what we do and it should have. So we had here the beginnings of the first compilers. The same thing happened with the invention of **forran** where people were saying gosh you know we can write tight assembly language better than anybody else better than any machine can kind of do but that was proved wrong when we moved up a level of abstraction from the assembly language to the higher order programming languages. And so you had a set of people who were similarly concerned and distressed by the changes in levels of abstraction because they recognized that the skills they had in that time were going to go away and they were going to be replaced by the very thing themselves created. Now you didn't see as much of a crisis because there weren't that many of us back in that time frame. We're talking, you know, a few thousands of people now. We're talking millions of people who ask quite legitimately the question, what does it mean for me? So, I've had, as I'm sure you have had, a number of, you know, especially young developers come up to me and say, **Grady**, what should I do? Am I choosing the wrong field? Should I, you know, do something different? And I assure them that this is actually an exciting time to be in software because of the following reasons. We are moving up a level of abstraction much like what happened in the rise from machine language to assembly language from assembly language to to higher order programming languages from higher order programming languages to libraries the same kind of thing happened and we're seeing the same change in levels of abstraction and now I as a software developer I don't have to worry about those details so I view it as something that is extraordinarily ly freeing from the tedium of which I had to do, but the fundamentals still remain. As long as I am choosing to build software that endures, meaning that I'm not going to build it and I throw it away. If you're going to throw it away, do what you want. That's great. And I see a lot of people using these agents for that very purpose. That's wonderful. You're going to go off and automate things you could not have afforded to do today. And if you're a single user for it, then more power to you. This is the hobbyist rarer and the hobbyist side of software if you will much like we saw in the earliest days of personal and computers where people will build these things. Great stuff. Great ideas will come from it.

</details>

**主持人**: 我喜欢这个比较。是的。

<details>
<summary>Original English</summary>

**>>**: I like the comparison. Yes.

</details>

**Grady Booch**: 是的。伟大的想法会从中产生。你知道，人们会培养技能。我们会做以前无法做到的事情。我们会自动化那些在经济上不可能的事情，但它们不一定会持久，但我们仍然会产生有价值的影响。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah. Great ideas will come from it. You know, people will build skills. We'll do things we could not have done before. We'll automate things that were economically not possible, but they're not going to endure necessarily, but still we will have made a valuable impact.

</details>

**主持人**: 我猜就像在第一个时代，个人可以购买它一样，会有一些与它毫无关系的人进入这个行业，他们可能会带来惊人的想法，对吧？就像那时，你知道，学校老师可能会买一台个人电脑。今天我刚刚和我楼上的邻居，一位会计师谈过。她已经指导**ChatGPT**构建了一些应用程序脚本，以帮助她的会计团队更好地处理工作，因为她知道那东西是如何运作的。与软件无关，但现在正在创建自己的个人一次性软件。顺便说一句。

<details>
<summary>Original English</summary>

**>>**: And I guess just like in the first era where personal people could buy it, you will have people come into the industry who have honestly nothing to do with it and they might bring amazing ideas, right? Like back then, you know, school school teacher might have bought a personal computer. Today I I just talked to my neighbor upstairs, an accountant. She has instructed **Chad GBT** to build some appcript to uh help their accounting teams process a bit better because she knows how that thing works. Nothing to do with software, but now creating their own personal throwaway software. by the way.

</details>

**Grady Booch**: 是的，绝对。同样的并行，我为此庆祝。我鼓励它。我认为这是最美妙的事情，这就是为什么我们正处于这个充满活力的时期。在个人电脑的早期，同样的事情也发生了。你发现艺术家被吸引到，特别是当时的**PC**和**Amiga**。你发现玩家意识到我有一个以前没有的新的表达媒介，这就是为什么那是一个非常充满活力的时期。同样的事情正在发生。所以很多抱怨，哦天哪，我们面临存在危机的人，是那些狭隘地专注于自己的行业，没有意识到这里发生的事情实际上正在扩展这个行业。我们将看到更多非专业人士编写的软件。我认为这是最伟大的事情，因为现在我们拥有软件，就像在个人电脑的反文化时代一样。同样的事情今天也在发生。我喜欢你说的。然而，有一件事，然而，有一件事我也很关注，我关注的一个人是**Anthropic**的CEO **Dario Amodei**。我关注他的原因是我尽量不关注CEO，但他大约一年前说了一些有趣的话。他说他认为大多数代码将由AI生成，大约90%的代码，可能在一年内，然后更多，我们当时觉得这很傻，然后他对了，代码被生成了，现在他又说了一些有趣的话，但下一个听起来很吓人，他说我引用一下：“软件工程将在12个月内实现自动化。”现在这听起来更吓人，因为我们知道编码是软件工程的一个子集，但他说了这个。你对此有何看法？你已经做出了强烈的回应。所以，

<details>
<summary>Original English</summary>

**Grady Booch**: Yes, absolutely. The same parallels and I celebrate that. I encourage it. I think it's the most wonderful thing which is why we are in this vibrant period. In the early days of of the personal computer, the very same thing happened. You found artists drawn to especially the **PC** and the **amigga** at the time. You found gamers who realized I've got a new medium for expression that I did not have before and that's why it was a very vibrant time. the same thing is happening. And so much of the lamenting of oh gosh, we have an existential crisis are those who are narrowly focused upon their industry not realizing that what's happening here is actually expanding in the industry. We're going to see more software written by people who are not professionals. And I think that's the greatest thing around because now we have software much like in the in the counterculture era of of the personal computer. The same thing is happening today as well. I like what you're saying. However, one however [laughter] however one one thing that I also pay attention to uh one person I pay attention to is is **Dario Amod** the CEO of **Antropic**. And the reason I pay attention to him is I I try I tend not to pay attention to CEOs but he actually said about a year ago he said something interesting. He says he thinks most code will be generated by AI about 90% of it maybe in a year and then more and we thought that's silly and then he was right and code was generated and now he said some another thing interesting that sounded interesting but the next one sounds scary he said I quote software engineering will be automatable in 12 months now this sounds a lot more scarier for reasons we know coding is a subset of software engineering but he said this what is your take on on this and you've had you've had a strong response already. So,

</details>

### AI与软件工程的未来

**Grady Booch**: 我有一两件事要说。首先，我使用**Claude**。我使用**Anthropic**的产品。我认为它是我的首选系统。我一直在用它解决**JavaScript**、**Swift**、**PHP**和**Python**的问题。所以，我使用它，它对我来说非常有用，主要是因为，你知道，我有一些想使用的库。**谷歌搜索**很糟糕。这些东西的文档也很糟糕，所以我可以使用这些代理来加速我对它们的理解。但也要记住，我至少有一两年，哦不，是几十年的经验基础，我多少理解基本原理，这就是为什么我之前说基本原理不会消失，这在每个工程学科中都是如此，基本原理不会消失，我们使用的工具会改变。所以**Dario**，我尊重你所说的，但也要认识到**Dario**的观点与我不同。他领导一家需要赚钱的公司，他需要向他的利益相关者发言。所以会说出那样耸人听闻的言论。我想他是在**达沃斯**说的这些话，如果我没记错的话。

<details>
<summary>Original English</summary>

**Grady Booch**: u I have one or two things to say about it. So, first off, I use **Claude**. I use **Anthropics** work. I think it's it's my it's my go-to system. I've been using it for problems with **JavaScript**, with **Swift**, uh with **PHP** of all things and **Python**. So, I use it and it's it's been a great thing for me primarily because, you know, there are certain libraries I want to use. **Google search** sucks. documentation for these things suck and so I can use these agents to accelerate my understanding of them. But remember also I have a foundation of at least one or two years of experience in these spaces okay a few decades where I sort of understand the fundamentals and that's why I said earlier that the fundamentals are not going to go away and this is true in every engineering discipline the fundamentals are not going to disappear the tools we apply will change so **Daario** man I I respect what you're saying but recognize also that **Daario** has a different point of view than I do. He's leading a company who needs to make money and it's a company who he needs to speak to his stakeholders. So outrageous statements will be said like that. I think he said these kind of things at **Davos** if I'm not mistaken.

</details>

**主持人**: 是的，非常。

<details>
<summary>Original English</summary>

**>>**: It it was very Yes.

</details>

**Grady Booch**: 我会礼貌地说，嗯，我将用一个科学术语来描述**Dario**所说的话并将其置于语境中。那是彻头彻尾的胡说八道。那是技术术语，因为我认为他大错特错，他错了有几个原因。首先，我接受他的观点，即它会加速一些事情。它会消除软件工程吗？不会。我认为他对软件工程是什么有根本性的误解。回到我一开始说的话。软件工程师是平衡这些力量的工程师。所以我们使用代码作为我们的机制之一，但它不是驱动我们的唯一因素。他或他的任何同事所谈论的事情，都没有涉及到软件工程师必须处理的任何决策问题。我们没有在自动化领域看到这些。他的工作主要集中在最低层次的自动化上，我认为这类似于编译器在那些日子里所发生的事情。这就是为什么我说这是一个新的抽象层次。开发者们，不要害怕。你们的工具正在改变，但你们的问题没有改变。我反对他所说的还有另一个原因。那就是，如果你看看**Cursor**之类的东西，它们大多是在我们一遍又一遍地看到的问题集上进行训练的。这没关系。就像我在第一代，第一个黄金时代说的那样，我们有一套特定的问题。所以库是围绕它们构建的。同样的事情也发生在这里。如果我需要在**CRUD**之上构建一个UI，它是一个子冬季或某种以网络为中心的东西。我可以做到。就像你的朋友一样，祝他们成功。他们可以自己做，因为有能力这样做。他们可能不会围绕它建立一个企业。其中一小部分人可能会这样做。但它使他们能够做以前无法做到的事情，因为他们现在处于更高的抽象层次。**Dario**忽略了什么，我引用了**莎士比亚**的一段话：**Dario**，在你的哲学中，计算世界还有更多你梦想不到的东西。计算世界远比大规模的以网络为中心的系统要大得多。所以我们看到今天应用于这些以网络为中心的系统中的许多东西，我认为这很棒也很美妙，但这意味仍然有很多东西还没有被自动化。所以我们一直在推动这些边缘。所以我一开始告诉你那些故事，因为历史正在重演，有些人会说历史再次押韵。同样的现象今天也正在发生，只是在不同的抽象层次上。所以这是第一个。软件比他所看到的这个世界更大。它比仅仅是软件密集型系统更大。其次，你知道，如果你看看大多数这些代理所处理的系统类型，它们实际上是在自动化我们一遍又一遍看到的模式，它们就是为此而训练的。模式本身就是新的抽象，它们实际上不仅仅是单一的算法或单一的对象，它们代表了协同工作的对象和算法的社会。这些代理在自动化模式的生成方面非常出色。我想要做，你知道，这种事情，我可以用英语告诉你，因为我就是这样描述模式的。所以无论如何，这就是为什么我认为他错了。祝他成功。但是，你知道，我认为这是一个令人兴奋的时代，而不是一个需要存在主义担忧的时代。让我再讲一个关于我们如何看待抽象层次转变的故事。英语是一种非常不精确的语言，充满了歧义和细微差别。尽管人们会想，我怎么能把它变成一种有用的语言呢？答案是，我们软件工程师已经这样做了。我去找某人说，嘿，我希望我的系统做这个。它看起来有点像这样，我给他们一些例子。我已经这样做了。然后有人去把这些变成代码。我们已经提升了一个抽象层次，说我希望它做这个。我给你一个具体的例子。我正在使用一个我以前从未接触过的库。它是**JavaScript D3库**，它允许我做一些非常迷人的可视化。我去搜索一个名为**Victorian Engineering Connections**的网站。这是一个可爱的小网站，那位绅士为博物馆**Andrew**做了这个，你可以，你知道，输入像**George Bool**这样的名字，你会看到他的名字，你会找到关于他的事情，你会找到他周围的社交网络，你可以触摸它并探索。这非常非常酷。我说：“我想要那种东西，但天哪，我不知道怎么做。那么，我能做什么呢？”他给了我他的代码。我意识到它使用了**D3库**。我对**D3库**一无所知。所以我对**Cursor**说：“去给我构建一个最简单的。用五个节点来做，给我看看。”这样我就可以研究代码了。然后我可以说：“嗯，他们真正想做的是这个。根据它们的类型，让节点看起来像这样。”所以，就像我对人类做的那样，我用英语表达我的需求，现在突然之间，我不需要费力地将其变为现实。我只需与我的工具进行对话，它就能帮助我做到这一点。所以，它缩短了我想要的东西和它能做到的东西之间的距离。我认为这很棒。这是一个突破。但请记住，就像我对**Dario**说的那样，这只适用于我正在做人们以前做过数百次的事情的情况。我本可以自己学习。就像**Feynman**会说的那样，你知道，自己动手做，因为那是你唯一能理解的方式。而我的反应是，那很棒，但世界上有太多我好奇的事情。我无法理解所有的一切。让我们，你知道，让我们决定我想做什么。所以替我做吧。这就是为什么我说这类工具是抽象层次的又一次转变，因为它们缩短了我用英语表达的意思和编程语言之间的距离。最后我要说的是，你知道，我们称能够构建可执行工件的精确且富有表现力的语言为什么？我们称之为编程语言。碰巧英语是一种足够好的编程语言，就像**COBOL**一样，如果我在一个结构足够好的领域中给出这些短语，它就能让我得到足够好的解决方案，而我，作为了解这些基本原理的人，可以开始调整和清理这些部分。这就是为什么基本原理如此重要。说到历史的押韵，在第一个时代和第二个黄金时代，或者说每次我们进行抽象跳跃时，都发生了一件事，那就是一些技能变得过时，然后对新技能产生了需求。例如，当我们从汇编层面跳跃时，了解某个电路板的指令集以及如何优化它的技能变得过时，取而代之的是更高层次的思维。在这次跳跃中，我认为现在可以肯定地说，我们不再需要编写任何代码，计算机将做得相当好，我们会检查并调整它。你认为作为软件专业人员，哪些会变得过时，哪些会变得更重要？

<details>
<summary>Original English</summary>

**Grady Booch**: u I have one or two things to say about it. So, first off, I use **Claude**. I use **Anthropics** work. I think it's it's my it's my go-to system. I've been using it for problems with **JavaScript**, with **Swift**, uh with **PHP** of all things and **Python**. So, I use it and it's it's been a great thing for me primarily because, you know, there are certain libraries I want to use. **Google search** sucks. documentation for these things suck and so I can use these agents to accelerate my understanding of them. But remember also I have a foundation of at least one or two years of experience in these spaces okay a few decades where I sort of understand the fundamentals and that's why I said earlier that the fundamentals are not going to go away and this is true in every engineering discipline the fundamentals are not going to disappear the tools we apply will change so **Daario** man I I respect what you're saying but recognize also that **Daario** has a different point of view than I do. He's leading a company who needs to make money and it's a company who he needs to speak to his stakeholders. So outrageous statements will be said like that. I think he said these kind of things at **Davos** if I'm not mistaken. And and I'd say politely well I'll use a scientific term in terms of how I would characterize what **Daario** said and put it in context. It's utter uh that's the technical term because I think he's profoundly wrong and and he I think he's wrong for a number of reasons. First, I accept his point of view that it's going to accelerate some things. Is it going to eliminate software engineering? No. I think he has a fundamental misunderstanding as to what software engineering is. Go back to what I said at the beginning. Software engineers are the engineers who balance these forces. So we use code as one of our mechanisms, but it's not the only thing that drives us. None of the things that he or any of his colleagues are talking about attend to any of those decision problems that a software engineer has to deal with. None of those we see within the within the realm of automation. His work is primarily focused upon the automation at the lowest levels which is I would put akin to what was happening with compilers in these days. That's why I say it's another level abstraction. Fear not, O developers. Your tools are changing, but your problems are not. There's another reason why I I push back on what he's saying. And that is if you look at things like **cursor** and the like, they have mostly been trained upon a set of problems that we have seen served over and over again. And that's okay. Much like I said in the first generation, first golden age, we had a certain set of problems. And so libraries are built around them. The same thing is happening here. If I need to build a UI on top of **CRUD**, it's sub winter or some web ccentric kind of thing. I can do it. And much like your friend, more power to them. They can do it themselves because the power is there to do so. They're going to, you know, probably not build a business around it. Some small percent of them might do so. But it's enabled them to do things they could not do before because they're now at a higher level abstraction. what **Daario** neglects and I used a a bit of a paraphrase from **Shakespeare**. There are more things in computing **Daario** that are dreamt of in your philosophy. The world of computing is far larger than web centric systems of scale. So we see many of the things applied today on these webric systems and I think that's great and wonderful but it means that there's still a lot of stuff out there that hasn't yet been automated. So we have we keep pushing these fringes away. So I told you those stories at the beginning because history is repeating itself where some will say history is rhyming again. The same kinds of phenomena are applying today just at a different level of abstraction. So that's the first one. Software is bigger than this world of software is bigger than what he's looking at. It's bigger than just software intensive systems. And then second, you know, if you look at the kinds of systems that most of these agents deal with, they are in effect automating patterns that we see over and over again for which they have been trained upon. Patterns themselves are new abstractions that are in effect not just single algorithms or single objects, but they represent societies of objects and algorithms that work together. These agents are great at automating generations of patterns. I want to do, you know, this kind of thing and I can tell you in English because that's how I describe the pattern. So anyway, that's why I think he's wrong. More power to him. But, you know, I think this is an exciting time more than things to worry about exist existentially. Let me offer another story with regards to how we see a shift in levels of abstraction. English is a very imprecise language full of ambiguity and nuance and the like. Though one would wonder how could I ever make that you know as a useful language and the answer is we already do this as software engineers. I go to somebody and say hey I want my system to do this. It kind of looks like this and I give them some examples. I do that already. And then somebody goes and turns that into code. We've moved up a level of abstraction to say I'd like it to do this. I'll give you a concrete example. I'm working with a library I'd never touched before. It's the **JavaScript D3 library** which allows me to do some really fascinating visualizations. I go off and search for a site called **Victorian Engineering Connections**. It's just this lovely little site where the gentleman did this for a museum **Andrew** and you can, you know, put in a name like **George Bool** and you see his name, you find things about him and you find his social network around him and you can go touch it and explore. It's very, very cool. And I said,"I want that kind of thing, but my gosh, I don't know how to do that. So, what can I do?" He gave me his code. I realized it uses the **D3 library**. I knew nothing about the **D3 library**. So, I said to **Cursor**, "Go build me the simplest one possible. Go do it out of, you know, five nodes and show me." So, I could then study the code. And then I could say, "Well, what they wanted would really wanted to do is this. Go make the nodes look like this, depending upon their kind." So, just like I would do with a human, I was expressing my needs in an English language that now all of a sudden I didn't need to labor to turn that into reality. I could simply have a conversation with my tool to help me do that. So, it it reduced the distance between what I wanted and what it could do. And I think that's great. That's a breakthrough. But remember, as I said to **Daario**, this only works in those circumstances where I'm doing something that people have done hundreds and hundreds of times before. I could have learned it on my own. As **Fineman** would have said, you know, go do it yourself because then that's the only way you're going to understand. And I my reaction is that's great, but there's so much in the world I'm curious about. I can't understand it all. Let's go, you know, let's decide what I want to do. So go do it for me. So that's why I say these kinds of tools are another shift in the levels of abstraction because they're reducing the distance from what I'm saying my English language to the the programming language. Last thing I'll say is that you know what do we call a language that is precise and expressive enough to be able to build executable artifacts? We call them programming languages. And it just so happens that English is a good enough programming language much like **Cobalt** was in that if I give it those phrases in a domain that is well enough structured, it allows me to have good enough solutions that I who know those fundamentals can begin nudging and cleaning out the pieces. That's why the fundamentals are so important.

</details>

### 新技能与旧技能的更迭

**主持人**: 说到历史的押韵，在第一个时代和第二个黄金时代，或者说每次我们进行抽象跳跃时，都发生了一件事，那就是一些技能变得过时，然后对新技能产生了需求。例如，当我们从汇编层面跳跃时，了解某个电路板的指令集以及如何优化它的技能变得过时，取而代之的是更高层次的思维。在这次跳跃中，我认为现在可以肯定地说，我们不再需要编写任何代码，计算机将做得相当好，我们会检查并调整它。你认为作为软件专业人员，哪些会变得过时，哪些会变得更重要？

<details>
<summary>Original English</summary>

**>>**: And speaking of history rhyming, one thing that happened in both the first age and the the sec second golden age or as we jumped abstractions or every time we had an abstraction is some skills became obsolete and then there was a demand for for new skills. For example, when we from assembly level the the skill of like knowing how the instruction set of a certain board and knowing how to optimize it, that became obsolete in favor of thinking at a higher level. In this jump right now where I think it's safe to say we're going from we do not need to write any more code and the computer will do it pretty good and we'll check it and tweak it. What do you think will become obsolete and what will become more important as software professionals?

</details>

**Grady Booch**: 好问题。软件交付流程远比它应有的复杂。天哪，仅仅让某个东西运行起来就很困难，如果你没有流程的话。如果你在像**谷歌**或**Stripe**这样的公司里，你拥有...

<details>
<summary>Original English</summary>

**Grady Booch**: Great question. The software delivery pipeline is far more complex than it should be. Uh that my gosh just getting something running is hard if you have no pipeline. If you're within a company such as a **Google** or a **Stripe** or whatever, you have

</details>

**主持人**: 你拥有庞大的基础设施。

<details>
<summary>Original English</summary>

**>>**: you have a huge infrastructure about around them.

</details>

**Grady Booch**: 一个定制的。

<details>
<summary>Original English</summary>

**Grady Booch**: A custom one.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**>>**: Yes.

</details>

**Grady Booch**: 是的。一个定制的。是的。所以这些自动化有很多唾手可得的成果。我的意思是，我不需要人类来填补这些东西的空白。顺便说一句，我说的实际上是基础设施就是软件。这不仅仅是，你知道，不仅仅是原始的代码行。所以，这是一个唾手可得的成果，我们可以开始看到这些代理说：“嘿，你知道，我希望你去，你知道，天哪，我不知道，为世界的这个部分启动一些东西。我不想为那些东西编写代码，因为它复杂而混乱。我宁愿使用一个代理来帮助我完成。”所以有一种情况是，我认为在那些混乱和复杂的地方，你会失去工作，因为自动化在经济上和坦率地说在安全性方面都有明显的价值。这是一个人们需要重新学习技能的地方，比如构建简单的应用程序等等。嗯，我认为，你知道，那些曾经拥有构建**iOS**或其他东西的技能的人，他们会失去一些工作，因为坦率地说，人们可以通过提示来完成，这很棒，这很好，因为我们已经让整整一代人能够做过去专业人士所做的事情，这正是个人电脑时代发生的事情。这些人应该做什么？提升一个抽象层次，开始关注系统。所以现在我认为的转变是，从处理程序和应用程序转向处理系统本身，这就是新技能集应该出现的地方。如果你拥有管理大规模复杂性的技能，如果你作为一名软件工程师知道如何处理所有这些多重力量，包括人类的和技术的，你的工作就不会消失。如果说有什么不同的话，对你所做的事情的需求会更大，因为这些人类技能是如此稀有和精妙。

<details>
<summary>Original English</summary>

**Grady Booch**: Yeah. A custom one. Yes. And so there is lowhanging fruit for the automation of those. I mean I don't need a human that fills in the edges of those kind of things. By the way, I'm talking about in effect infrastructure is software. [clears throat] It's not just, you know, not just raw lines of code. So, this is lowhanging fruit where we could begin seeing these agents that say, "Hey, you know, I want you to go, you know, gosh, I don't know, you know, spin up something for this part of the world. I don't want to write the code for that stuff because it's complex and messy. I'd rather use an agent that helps me do it." So there's a case where I think you're going to have the loss of jobs in those places where it's messy and complex because the automation has clear economic and you know frankly value in terms of security. That's a place where people are going to need to reskill in the building of simple applications and the like. Well, I think you know people who had uh who had skills in saying I want to build this you know thing for **iOS** or whatever they're going to lose you know they're going to lose some jobs cuz frankly people could do it just by you know prompting it that's great that's fine because we've enabled a whole another generation of folks to do things that professionals did in the past exactly what happened in the era of **PCs** themselves what should these people do move up a level of abstraction start worrying about systems so the shift now I think is less so from dealing with programs and apps to dealing with systems themselves and that's where the new skill set should come in. If you have the skills of knowing how to manage complexity at scale if you know as a software engineer how to deal with all of these multiple forces which are human as well as technical your job's not going to go away. If anything, there will be even greater demand for what you're doing because those human skills are so rare and delicate.

</details>

**主持人**: 所以，你提到了拥有强大基础的重要性，你之前说过，我实际上引用你的话，“对于没有深厚基础和强大理解模型的人来说，这个领域正以令人费解的速度发展。”你会推荐人们关注哪些基础？无论是学生，正在大学学习或寻找第一份工作的人，还是现在想回去巩固那些有用的基础的软件专业人士。

<details>
<summary>Original English</summary>

**>>**: So, you mentioned the importance of of having strong foundations and and you've previously said, I'm actually quoting you, the field is moving at an incomp incomprehensible pace for people without deep foundations and a strong model of understanding. What foundations would you recommend people to look at? both students, people who are at university studying or looking for their first job and also software professionals who you know now actually want to go back and strengthen those foundations that that will be helpful.

</details>

**Grady Booch**: 我发现我的，我的，嗯，我的快乐之地，如果你愿意，我的甜蜜空间，当我面临一个困难问题时，我会退回到系统理论。去阅读**Simon**和**Newell**在**《人工科学》**中的工作。嗯，**圣达菲研究所**有一整套关于复杂性和系统的工作。正是这些系统理论的基本原理，为我构建下一套东西奠定了基础。我想我曾在我们之前的讨论中向你提到过，我当时正在做一些关于**NASA火星任务**的非常有趣的工作。我们面临一个问题，就是说：“嘿，你知道，我们希望，你知道，让人类进行这些长期的任务。我们希望把机器人放到火星表面。”所以我受命去思考了一段时间。实际上，我意识到**NASA**想建造一个**HAL**。你会注意到我头顶上有一个**HAL**。

<details>
<summary>Original English</summary>

**Grady Booch**: I find my my uh my happy place if you will, my sweet space that I retreat back to when I'm faced with a difficult problem back into systems theory. go read the work of of **Simon** and **Newell** in the the **sciences of the artificial**. Uh there's a whole set of work that's come out on complexity and systems from the **Santa Fe Institute**. It's those kinds of fundamentals of system theory that ground me in the next set of things in which I want to build. I think I mentioned to you in in one of our our previous discussions, I was doing some really interesting work on **NASA's mission to Mars**. we were faced with an issue of saying, "Hey, you know, we we want to, you know, have people go off on these long missions. We want to put robots on the surface of Mars." And so I was commissioned to go off and think about that for a while. And in effect, I realized **NASA** wanted to build a **howl**. And you'll notice I've got a **how** above me here.

</details>

**主持人**: 是的。

<details>
<summary>Original English</summary>

**>>**: Yes.

</details>

**Grady Booch**: 嗯，我非常喜欢历史。这是我身后的**达摩克利斯之剑**。如果你知道**达摩克利斯之剑**背后的历史，**达摩克利斯国王**总是保持谦逊，因为在他的宝座上方有一把剑悬在一根线上。所以他总是感到不安。这就是为什么我身后也有**HAL**。出于某种原因，**NASA**不希望出现“杀死所有宇航员”的用例。不明白为什么，但我们把那个用例排除了。但如果你看看那里存在的问题，这是一个系统工程问题，因为你需要一些嵌入在宇宙飞船中的东西。我们今天在AI中拥有的许多软件都是非实体化的。**Cursor**、**Copilot**之类的东西与物理世界没有联系。所以我们的工作主要集中在具身认知上。大约在同一时间，我正在一些神经科学家手下学习，试图更好地理解大脑的架构。这就是这些基本原理对我来说结合在一起的地方，因为我开始意识到，我们在系统工程中看到的一些特定结构，我可以将其应用于这些真正大型系统的结构。借鉴**Marvin Minsky的《心智社会》**的思想，这是一种系统地架构多个代理的方式。我们现在正处于代理编程中，我认为人们才刚刚开始探索这些东西如何应用。他们需要去研究系统理论，因为那个问题已经用多个代理进行了研究。去读**Minsky的《心智社会》**。你会看到一些思想，它们将指导你处理多个代理。**Bears**的思想，它体现在早期的AI系统如**Hearsay**中。全局工作空间、黑板之类的思想。另一个架构元素。**Rodney Brooks**的**Subsumption架构**的思想。他的思想受到了生物学事物的影响。如果你看看蟑螂，蟑螂并不是一种非常智能的生物。但我们知道它没有中央大脑，但它仍然能做一些了不起的事情。我们已经能够绘制出普通蠕虫的整个神经网络。我们并没有被，你知道，邪恶的蠕虫在世界各地乱窜所困扰。那里还有其他事情正在发生。但生物系统有其架构。所以回到你的问题，通过从系统角度、从生物学、从神经学、从现实世界中的系统来看待架构，就像**Herbert Simon**和**Newell**所做的那样，这就是指导我走向下一代系统的方式，所以我敦促，你知道，现在研究系统的人回到那些基本原理。在很多方面，太阳底下没有新鲜事。我们只是，你知道，以不同的方式应用它们。工程中的那些基本原理，它们仍然存在。

<details>
<summary>Original English</summary>

**Grady Booch**: Uh this is I I'm a great one for history. This is my **sword of Dicles** that passes behind me. If you know the history behind the **sword of Dacles**, the king **Damacles**, he was always kept humble because at his throne there was a sword right above him on a thread. So he felt, you know, constantly, you know, unease. And this is why I have **Hal** behind me as well. For for some reason, **NASA** didn't want the kill all the astronauts use case. Don't understand why, but we we threw that one kind of out. But if you look at the problems there, this is a systems engineering problem because you needed something that was embodied in the spacecraft. Much of the kind of software we have today in AI is disembodied. Uh the **cursor**, the **copilot** and like they have no connection to the physical world. So our work was primarily in embodied cognition. Around the same time, I was studying under a number of neuroscientists trying to better understand the architecture of the brain. And here's where the fundamentals of that came together for me because I began to realize there are some certain structures we see in systems engineering that I can apply to the structure of these really large systems. Taking ideas of **Marvin Minsky's Society of Mind** which is a way of of systems architecting multiple agents. We're in agent programming now which I think people are just beginning to tap upon how those things apply. they need to go look at systems theory because that problem has been looked at with multiple agents already. Go read **Minsky society of mine**. You'll see some ideas that will guide you there in dealing with multiple agents. The ideas from **bears** of uh which was manifest in early AI systems such as **hearsay**. The ideas of of global workspaces, blackboards and the like. Another architectural element. the ideas of **subumption architectures** from uh from **Rodney Brooks**. Uh his was influenced by by biological things. If you look at a cockroach, a cockroach is not a very intelligent thing. But we know there's there's there's not a central brain in it and yet it does some magnificent things. We have been able to map the entire neural network of the common worm. We're not flush with, you know, evil worms running around the world. There's something else going on there. But biological systems have an architecture to them. So to go back to your question by looking at architecture from a systems point of view from biology from uh neurology from systems in in the real world as **Herbert Herbert Simon** and **New** did this is what's guiding me to the next generation of systems and so I would urge you know people looking at systems now go back to those fundamentals. There is nothing new under the sun in many ways. We've just, you know, applied them in different ways. Those fundamentals in engineering, they're still there.

</details>

**主持人**: 最后，你给出了一些非常好的建议，关于阅读、思考、自我教育，并获取可能在这个新世界中有用的想法，特别是当我们会有更多代理时。例如，我现在刚刚听说代理将成为**Windows 11**和操作系统的组成部分。所以，它们将无处不在。但回顾之前的抽象提升和之前的黄金时代，那些在新黄金时代开始时或新抽象开始时表现出色的人，即使他们以前表现不佳，你见过那些人做了什么？就像，基于这个历史教训，你会推荐什么？如果我们只是想复制那些成功的人所做的事情，因为我觉得这也是一个机会，对吧？我们有这种抽象的提升。很多人会感到瘫痪。但会有新的超级明星诞生，他们将基本上乘风破浪，他们将成为代理、AI以及构建这些新的、更复杂的系统的专家，这些系统是我们以前无法做到的。

<details>
<summary>Original English</summary>

**>>**: And then as closing, uh, you gave some really good recommendations to read, to ponder, to educate yourself, and and get ideas that will probably useful in this new world, especially as as we're going to have a lot more agents. For example, like I now just heard that agents will be part of **Windows 11** and operating system. So, they will be everywhere. But looking back at the the previous rises of abstractions and also the previous golden ages, the people who who did great at the start of a new golden age or at the start of a new abstraction even if they were not amazing at the previous one, what have you seen those people do? Like what and and based on this historical lesson, what would you recommend if if we were just kind to kind of copy successful, you know, things that that that people did because I feel this is an opportunity as well, right? we have this rise of abstraction. A lot of people will be paralyzed. But there will be new superstars being born who will be basically riding the wave and they will be the experts of uh agents of of AI of building these new and complex a lot more complex systems that we could have done before.

</details>

**Grady Booch**: 所以，正如我之前提到的，在软件中限制我们的主要因素是我们的想象力。嗯，实际上那是我们开始的地方。我们实际上不受想象力的限制。我们可以梦想出惊人的事物，然而我们却受到物理定律、我们如何构建算法以及伦理问题等的限制。所以现在正在发生的是，你实际上正在获得解放，因为一些摩擦、一些限制、一些开发成本实际上正在为你消失。这意味着我现在可以把注意力放在我的想象力上，去构建以前根本不可能实现的事物。我以前无法做到它们，因为我无法组建一个团队来做它们。我无法负担。我无法做到，因为我无法像以前那样在世界上拥有影响力。所以把它看作一个机会。所以这不是损失。对于那些在这方面有既得经济利益的人来说，这将是一个损失，但这是一个净收益，因为现在突然之间，这些东西释放了我的想象力，让我能够做以前在现实世界中根本不可能做到的事情。这是一个令人兴奋的行业时代。同时也很令人恐惧，但它本应如此。当有一个机会，你正处于某种美妙事物的边缘时，你应该看着深渊说，你可以选择看一眼然后说：“糟了，我要掉进去了。”或者你可以说：“不，我要跳起来，我要翱翔。现在是翱翔的时候了。”

<details>
<summary>Original English</summary>

**Grady Booch**: So I as I alluded to earlier the main thing that constrains us in software is our imagination. Well actually that's where we begin. We're actually not constrained by imagination. We can dream up amazing things and yet we are constrained by the laws of physics by how we build algorithms and the like ethical issues and the like. So what's happening now is that you are actually being freed because some of the friction, some of the constraints, some of the costs of development are actually disappearing for you. Which means now I could put my attention upon my imagination to build things that simply were not possible before. I could not have done them because I couldn't have raised a teen to do them. I couldn't have afforded that. I could not have uh done it because I couldn't have had the reach in the world as I did before. So think of it as an opportunity. So it's not a loss. It'll be a loss for some who have a vested interest in the economics of this, but it's an a net gain because now all of a sudden these things unleash my imagination to allow me to do things that were simply not possible before in the real world. This is an exciting time to be in the industry. It's frightening at the same time, but that's as it should be. When there's an opportunity where you're on the cusp of something wonderful, you should look at the abyss and say, you can either take a look and say, "Crap, I'm gonna fall into it." Or you can say, "No, I'm going to leap and I'm going to soar. This is the time to soar."

</details>

**主持人**: **Grady**，非常感谢你为我们提供了概述、展望和一些视角。我个人非常感谢这一点。

<details>
<summary>Original English</summary>

**>>**: **Grady**, thank you so much for giving us the the overview, the outlook, and and for and for a little bit of perspective. I I personally really appreciate this,

</details>

**Grady Booch**: 我也希望我提供了一些希望。

<details>
<summary>Original English</summary>

**Grady Booch**: and I hope I offered some hope as well.

</details>

**主持人**: 我认为你肯定做到了。这是一集非常鼓舞人心的节目。谢谢你，**Grady**。有一件事真正打动了我，那就是**Grady**指出，开发者以前也曾多次面临这种确切的存在危机。当编译器出现时，汇编程序员认为他们的职业生涯结束了。当高级语言出现时，同样的恐惧席卷了整个行业。而每一次，那些理解实际发生情况的人，即这只是一个新的抽象层次，他们都取得了领先。这种历史视角是我们常常会忽略的，当我们中的一些人陷入对新AI能力的日常焦虑时。我不认为软件工程已经走到尽头，**Grady**也不这么认为。我们正处于另一个篇章的开端，如果历史有任何指导意义，那将是一个非常激动人心的篇章。如果你觉得这一集很有趣，请务必在你喜欢的播客平台和**YouTube**上订阅。如果你也能给节目留下评分，我们将特别感谢。谢谢，下期再见。

<details>
<summary>Original English</summary>

**>>**: I think you definitely did. This was a really inspiring episode. Thank you, **Grady**. One thing that really struck with me was when **Grady** pointed out that developers [music] have faced this exact existential crisis before, multiple times, in fact. When compilers came along, assembly programmers thought their careers were over. When highle languages emerged, [music] the same fear ripped through the industry. And each time the people who understood what actually was happening, that [music] it was just a new level of traction, they came out ahead. This historical lens is something that I think we often miss when some of us are caught up in the [music] day-to-day anxiety of new AI capabilities. I don't think we're at the end of software engineering and neither does a **Grady**. We're at the beginning of another chapter and if history has any guide, it's going to [music] be a pretty exciting one. If you found this episode interesting, please do subscribe in your favorite podcast platform and [music] on **YouTube**. A special thank you if you also leave a rating on the show. Thanks and see you in the next one.

</details>