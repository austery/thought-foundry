---
area: society-systems
category: geopolitics
companies_orgs:
- Nvidia
- OpenAI
- Microsoft
- Department of Energy
- Department of Defense
date: '2025-12-06'
draft: true
guest: ''
insight: ''
layout: post.njk
project:
- us-analysis
- ai-impact-analysis
- geopolitics-watch
series: ''
source: https://www.youtube.com/watch?v=TnSGx36Ly0Q
speaker: AI Engineer
status: evergreen
summary: 洛斯阿拉莫斯国家实验室的企业AI架构师Mark Myshatyn探讨了该实验室在AI领域的悠久历史及其在核科学和国家安全任务中的应用。他强调了生成式AI和智能代理如何加速科学研究，并详细阐述了联邦政府在采纳AI工具时面临的严格监管、信任和安全挑战。讲座还讨论了与商业界和学术界合作的重要性，并为希望与政府合作开发AI解决方案的公司提供了关于可解释性、隔离性、治理和速度的指导。
tags:
- ai-agent
- ai-regulation
- data
- government
- national-security
title: 政府AI：智能代理如何应对严格监管与国家安全挑战
---

### 洛斯阿拉莫斯国家实验室的AI之旅

大家好，我是**洛斯阿拉莫斯国家实验室**（Los Alamos National Laboratory: LANL，美国能源部下属的核武器设计和科学研究机构）的企业AI架构师Mark Myshatyn。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, good morning. My name is Mark Mashottton. I'm our enterprise AI architect at Los Alamos National Laboratory.</p>
</details>
您可能会问，一个核科学实验室在这里的AI会议上做什么？实际上，我们从事应用AI和机器学习（ML）已有近70年的历史。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, today, you know, this is an AI conference. What What's a nuclear science lab doing here? The reality is we've actually been doing applied a IML for almost 70 years.</p>
</details>
这张照片展示了我们1956年的一位科学家，在我们的第一台超级计算机**Maniac 1**（洛斯阿拉莫斯国家实验室的第一台超级计算机）前玩洛斯阿拉莫斯国际象棋。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh this is actually one of our scientists in 1956 uh playing Los Alamos chess uh in front of one of our first supercomputers, Maniac 1.</p>
</details>
这张照片的独特之处在于，棋盘上并没有主教棋子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what's unique about this is we if you look at it, there's actually no bishops on the chessboard.</p>
</details>
我们从那时起就开始进行应用统计学和应用机器学习，当时计算机的内存甚至不足以一次性存储整个棋盘。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we we've been doing applied statistics and applied machine learning since we didn't have the memory needed to hold an entire chessboard in a computer at once.</p>
</details>
令人着迷的是，这张照片拍摄于**曼哈顿计划**（Manhattan Project: 二战期间美国研发原子弹的秘密计划）之后，我们当时正在推动**蒙特卡洛方法**（Monte Carlo methods: 一种基于随机抽样进行数值计算的方法）的发展，这些方法至今仍在沿用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's fascinating to to say back when this photo was taken, it was after the Manhattan project, we were pushing the edge of developing Monte Carlo methods that we still use today.</p>
</details>
对我们而言，AI的到来并非完全出乎意料，但**智能代理**（Agentic standpoint: 将AI视为能够自主感知、决策和行动的实体）带来的机遇，以及我们能用它做的事情，即使对我们这些长期参与其中的人来说，也令人难以置信。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for us, you know, AI didn't come as a complete surprise, but the opportunity that's come with agents, with things we can do has been incredible even to to us that have been along the right the ride for quite some time.</p>
</details>

### AI智能代理加速科学研究

这里展示的是一个演示，您可以在我们的YouTube频道上找到它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, let's see if I can make this full screen. So, what we have going on here, this is actually a demonstration. You can find it on our YouTube channel if you can't see it on the screen here.</p>
</details>
我们不仅从严格的模型角度，也从智能代理的角度审视了**生成式AI**（Generative AI: 能够生成文本、图像等新内容的AI模型），将其作为加速科学研究的一种方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we've looked at generative AI, not only from a strict model standpoint, but also from an agentic standpoint as a way for us to move science faster.</p>
</details>
和许多联邦政府部门一样，我们正面临着做得更好、更快、更便宜、更多来保护国家的压力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we we like much of the federal government are under a squeeze to do better, faster, cheaper, and more to protect our country.</p>
</details>
在这种情况下，从模型所知到我们能让模型知道什么，这才是真正的转变。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in this case, you going from not just what a model knows, but what we can let a model know was really the the change that happened here.</p>
</details>
我们从一个问题开始：为我们位于海湾对岸的姐妹实验室Livermore设计一个**惯性约束聚变**（ICF: Inertial Confinement Fusion，一种利用激光或粒子束压缩燃料靶丸以实现核聚变的方法）靶丸。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We started with a problem of go design an ICF, an inertial confinement fusion capsule for our sister lab at Liverour across the bay here.</p>
</details>
我们告诉AI：“阅读一篇论文，然后阅读大量你认为与这篇论文相关的论文，然后提出一个聚变靶丸的设计方案。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we said, "Read a paper. Go read lots of papers that you think are tangential to this first paper and then come up with a design for a fusion capsule."</p>
</details>
它创建了一个假设。我们独特之处在于，这并非一个简单的聊天机器人，它会吐出大量代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, it created a hypothesis. And the thing that's kind of uniquely ours is this isn't a generic, you know, chatbot that spits back a bunch of code.</p>
</details>
您稍后会看到，我们实际上是在我们的**高性能计算**（HPC: High Performance Computing，利用超级计算机解决复杂计算问题）资产上执行这些代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What you'll see here in a second, we're actually executing that code on our high performance computing assets.</p>
</details>
我们正在对这些问题进行热力学和流体力学测试，我们的模型不仅仅是一个**大型语言模型**（LLM: Large Language Model，具备理解和生成人类语言能力的深度学习模型）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we are actually running, you know, thermodynamic hydrodnamic tests on some of these types of problems where our model, you know, isn't just an LLM.</p>
</details>
它融合了我们50多年来在数学和科学领域所做的所有工作，将这些工具带入智能代理时代，以管理和发展我们的**核武库管理**（Nuclear stockpile stewardship: 指维护和确保核武器库安全可靠的计划）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's all of the, you know, 50 60 plus years of math and science that we've done to to bring the the management and the development of our nuclear stockpile and stewardship of that stockpile, bring those tools into an agentic era.</p>
</details>
因此，我们将其视为智能代理和科学加速的机会，因为与此同时，风险也在加速。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're looking at this as a chance for agents to move faster uh and for for science to move faster because the risk at the same time is starting to move faster.</p>
</details>
您可以看到，它确实提出了一个它认为能优化产量的设计，我们正在模拟ICF靶丸的切片。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see here it actually did come up with a design that it thought optimize that yield and we were simulating a slice through an ICF capsule.</p>
</details>

### 洛斯阿拉莫斯的AI使命与合作

这只是一个有趣的“玩具问题”。那么，这对于我们实验室的另外20,000名研究人员意味着什么呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But, okay, that's one nice toy problem. What does that mean for the other 20,000 researchers that we have at our laboratory?</p>
</details>
对于不熟悉的人来说，我们实验室占地40平方英里，拥有实验室、测试场和试验工厂。我们有13个核设施，规模非常庞大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For those of you not familiar, we're 40 square miles of labs, test sites, uh, test plants. We have 13 nuclear facilities. And so, we're huge.</p>
</details>
我们希望通过AI实现广泛的目标，并加速我们的使命。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a huge breath of what we're trying to accomplish with AI, uh, and getting our mission moving faster.</p>
</details>
对于我们的**国家安全AI办公室**（National Security AI Office: 负责推动AI在国家安全领域的应用）来说，您刚才看到的正是我们肩负的首要任务：加速AI科学的发展。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For our national security AI office, you know what you just saw, that's the first thing of that we're charged with. Push the science of AI faster.</p>
</details>
我们不能仅仅坐等并消费商业工具或开源工具，我们自己编写代码，编写自己的模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't just sit there and consume commercial tools or open source tools. We write our stuff. We write our own models.</p>
</details>
同时，我们也意识到我们不可能包揽一切。我们没有自大到认为我们无所不知，不需要任何帮助。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we also realize that we can't do everything. We don't have the hubris to understand or to say here and oh we understand everything. We don't need anyone's help.</p>
</details>
我们绝对需要来自商业界和学术界的合作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We absolutely need those partnerships from commercial industry from academia.</p>
</details>
就像在座的各位一样，我们也在研究如何将AI和生成式AI工具引入我们的工作流程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then just like the rest of you all here, we're looking at how do we bring AI and Gen AI tools into our workflows.</p>
</details>
我们有庞大的业务范围，需要处理工资、采购和网络安全等事务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we have a huge footprint. We have to do payroll. We have to do procurement. We have to do cyber security.</p>
</details>
我们的办公室正在思考如何做到这一点，这确实与我们和合作伙伴的合作息息相关。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so our office is kind of in there. How do we do that? And it really does come down some to some of what we're doing with our partners.</p>
</details>
我们有一些优秀的学术合作伙伴。在这些幻灯片发布供公众审查时，我们未能提供截图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have some great academic partners. We couldn't at the time these slides were released for uh public review, we didn't get the screenshot on there.</p>
</details>
我们还宣布与**加州大学系统**（UC family of schools: 美国加州的一个公立大学系统）建立了学术合作关系，共同开发AI的未来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also announced a partnership with the UC family of schools uh on the academic side of developing, you know, the future of AI.</p>
</details>
同时，我们也在与所有**前沿实验室**（Frontier labs: 指在科学和技术前沿领域进行研究的实验室）合作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we're also working with all the frontier labs.</p>
</details>
这里有一些新闻稿，我们实际上与OpenAI合作进行了化学和生物安全方面的工作，并能够认可我们与他们合作完成的工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, here's a couple press releases where we've actually done chem biosafety work with open AAI and we we've been able to acknowledge that work that we've done with them.</p>
</details>
我们是一个可以安全进行危险工作的地方，并且已经这样做了几十年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But we have a place where we've been doing we're a safe place to do dangerous things and we've been doing that for decades.</p>
</details>
因此，与这些前沿实验室建立合作关系非常棒，他们虽然无法负担雇佣任何他们想要的人才，但仍然将我们视为数据和合作的来源。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's a neat partnership to have these frontier labs that really can't afford to hire anyone they want still come to us as a source of data and a source of partnership.</p>
</details>
在上一张图片的中间，我们实际上在硬件领域进行了AI科学研究。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There in the middle of that last picture, we actually have science of AI in the hardware space.</p>
</details>
那是我们的**Venado超级计算机**（Venado supercomputer: 洛斯阿拉莫斯国家实验室的超级计算机），它拥有超过2500个**GraceHopper超级芯片**（GraceHopper superchips: Nvidia开发的一种集成CPU和GPU的芯片）节点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh that's our Venado supercomputer. It's over 2500 nodes of GraceHopper super chips.</p>
</details>
我们通过与**Nvidia**和**HPE**（Hewlett Packard Enterprise: 慧与科技，一家信息技术公司）的合作，构建了一台能够帮助我们推动AI研究边界的超级计算机。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we we brought it um through a partnership with open or with um Nvidia and uh HPE to build a supercomput that can help us push the boundaries of what does it mean to do AI research.</p>
</details>
最近，我们还将OpenAI的模型引入了该系统，并将其部署到我们的机密网络中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then more recently, we've also brought OpenAI's models onto this system, brought it up to our classified networks.</p>
</details>
我们正在解决那些对我们的数据和使命空间来说独一无二的真正难题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we're getting to work on the really hard problems that are unique to our data and our mission space.</p>
</details>

### 政府AI：信任、监管与合规挑战

当我们谈论智能代理时，合作需要信任。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we talk about agents, you know, partnerships take trust.</p>
</details>
当然，让实验室信任您，让他们早期访问其模型或模型权重，这很重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, certainly having labs trust you with early access to their models or model weights.</p>
</details>
当我们谈论与合作伙伴分担责任时，我们的AI工具和服务的责任开始变得至关重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As we talk about sharing responsibility with our partners, certainly the responsibility of what our AI tools and services do starts to matter.</p>
</details>
前一届政府发布了一些行政命令，这些命令在今年1月新政府上任后大部分被取代。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh there were previous administration had certain executive orders out. Those were replaced largely in January when the new administration took change.</p>
</details>
但这份**OMB备忘录M2521/M2522**（OMB memorandum M2521/M2522: 美国行政管理和预算局发布的关于AI治理的政策文件）刚刚在4月发布。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this piece of OM memorandum just came out in April. Uh M2521 and there's M2522.</p>
</details>
它开始规范**美国政府**（US government）在部署这些AI系统时应该关注哪些问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it starts to codify like what things should the US government start to worry about when we're fielding these AI systems.</p>
</details>
它告诉政府要加快速度，这很重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It tells the government to go faster. That's important.</p>
</details>
但它也指出，这些政府类型的工作负载会产生实际影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it also says these government type workloads, they have real world impacts.</p>
</details>
对我们来说，我们不是一家T恤公司。如果我们的数据泄露，就会出现地缘政治挑战，甚至可能引发军事冲突。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, for us, we are not a t-shirt company. If our data gets out, that's, you know, geopolitical challenges show up. Uh kinetic challenges show up.</p>
</details>
如果我们做错了，可能会有人丧生。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People can die if we do this wrong.</p>
</details>
这份备忘录有大约25页，对于一份OMB备忘录来说，其可读性和全面性都相当不错。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this I won't bore you. It's like 25 pages, reasonably well written for an OMB memorandum as far as readability and comprehensiveness.</p>
</details>
但它指出，作为美国政府，我们需要更快地将AI融入我们所做的一切。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but it says we as the US government need to move faster into bringing this into everything we do.</p>
</details>
仅仅购买您最喜欢的办公插件工具，然后说我们可以更快地制作PPT或更快地总结电子邮件是不够的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not enough to just buy, you know, pick your favorite office addin tool and say we can type powerpoints faster or summarize our emails faster.</p>
</details>
我们必须更深入地融入我们的使命，这需要信任。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We got to go deeper into our mission and that comes with trust.</p>
</details>
在座的各位有多少人是**软件即服务**（SaaS: Software as a Service，通过互联网提供软件应用的服务模式）公司或初创公司的一员？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, who here is part of a software as a service uh company or startup?</p>
</details>
好的，有几个人举手。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, handful of hands here.</p>
</details>
所以，您可能见过类似的情况，尤其是在最近的云领域，当客户开始信任您处理他们的数据时，您的责任也会随之增加。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you've probably seen something similar to this, especially if you've been in the cloud space recently, that as us as customers start to trust you with our data, your responsibility also comes up.</p>
</details>
对于我们的**开放公共非受限数据**（Open public unrestricted data: 可以公开访问和使用的数据），比如我展示的ICF靶丸智能代理的开放科学工作，这很容易做到。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh that's easy to do for our open public unrestricted data like the open science work like I showed off of our ICF capsule agent.</p>
</details>
但当我们涉及**受控和机密数据**（Controlled and classified data: 需要特定授权才能访问的数据），当我们进入机密和**能源部领域**（DOE space: 美国能源部管辖的范围），当我们进入**受限和曾受限数据**（Restricted and formerly restricted data: 对访问和使用有严格限制的数据）时，核武器的工作原理是不会过期的，它将永远是机密的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as we get into controlled and classified, as we get into classified and the DOE space, as we get into restricted and formerly restricted data, where the physics of how nuclear weapons work don't expire, that that will forever be classified.</p>
</details>
它生来就是机密的，并将保持机密。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's born, classified, and stays classified.</p>
</details>
这需要对作为我们的构建者和提供者的您们建立信任。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It takes an element of trust in you all as our builders, as our providers.</p>
</details>
这确实是我们与试图向我们销售工具和服务的公司进行的一些最有趣但也最令人沮丧的对话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is really some of the most interesting and unfrusting conversations we have with companies trying to sell us tools and services is great.</p>
</details>
您有您的SOC 2报告，而我们有**NIST 853**（NIST 853: 美国国家标准与技术研究院发布的一套信息系统安全和隐私控制标准）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have your sock 2 report. I have NIST 853.</p>
</details>
这实际上是修订版4，包含1000多种不同的安全控制和增强措施。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is actually rev 4. It's over a,000 different security controls and enhancements.</p>
</details>
美国政府已经制定了大量立法来处理传统的网络安全工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the the US government has put a lot of legislation in place to do traditional cyber security work.</p>
</details>
**FedRAMP**（Federal Risk and Authorization Management Program: 联邦风险与授权管理计划，美国政府评估云产品和服务安全性的标准）无疑试图通过验证200、300、400个安全控制措施并由第三方授权机构进行审查，以及进行持续监控来简化这一过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fed Ramp certainly tried to make this easier by coming in and saying, you know, 200 your security controls, 300, 400 have been vetted with a third party authorizer. You have some continuous monitoring.</p>
</details>
在座的各位有谁经历过FedRAMP流程的下游？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Has anyone here been downstream of the Fed ramp process?</p>
</details>
是的，我看到一些笑容。所以您知道这有多么痛苦。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I see a couple smiles. So, you know how much of a pain this has been.</p>
</details>
就像政府目前的一切一样，它正在发生变化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And much like everything else in the government right now, it is changing.</p>
</details>
有一个新的FedRAMP计划，它指出如果我们信任您的数据，如果我们信任您的智能代理的成果，您就必须开始考虑您的持续监控和持续安全态势。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a new Fed ramp program out there saying if we're going to trust you with our data, if we're going to trust trust you with the outcomes of our agents, you have to start thinking about your continuous monitoring, your continuous security posture.</p>
</details>
如果您与**国防部**（DoD: Department of Defense，美国政府的军事部门）合作，情况会变得更加复杂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh if you work with the DoD, that gets even harder.</p>
</details>
国防部有他们所谓的**安全要求指南**（SRG: Security Requirements Guide，国防部发布的安全标准）或CCSRG。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh DoD has what they call their security requirements guide or CCSRG.</p>
</details>
它讨论了如果您接触到这种类型的数据级别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um it talks about if you're touching this type of data level.</p>
</details>
它采用了FedRAMP的三种类型，并在此基础上增加了国防部所称的另外两个影响级别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it takes that three types or three types of Fed ramp. It layers on two more uh impact levels as the DoD calls them.</p>
</details>
它规定了如果您拥有**个人身份信息**（PII: Personally Identifiable Information，可以识别个人身份的数据）、任务数据、运营数据或财务数据，您将如何访问该服务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and says this is how you're going to access that service if you have PII or mission data or operational data or finance data.</p>
</details>
然后他们又在此基础上增加了另一本手册，即**CNSSI 1253**（CNSSI 1253: 美国国家安全系统委员会发布的国家安全信息系统安全分类和控制指南）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then they add another copy of this book, you know, CNSSI 1253 on top of that.</p>
</details>
所以，如果您觉得这涉及大量的治理，那确实如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if if you're looking at this saying it's a lot of governance, it is.</p>
</details>
但有趣的是，从4月3日的备忘录来看，AI用例和AI治理目前仍处于规划阶段。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but the fun part is right now where we are today from those uh April 3rd memorandums is AI use cases, AI governance is still on the drawing board.</p>
</details>
我们正处于这些OMB备忘录规定的180天规则制定期内，要求各机构制定其AI实施策略和计划。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like we are in that 180day rulemaking period that these uh pieces of OM memoranda put out saying agent or agencies have to go develop their strategies, their plans for developing you know AI implementations.</p>
</details>
如何管理试点项目？在您的环境中，什么被认为是高风险，什么被认为是低风险？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you govern pilots? What's considered high-risisk, lowrisisk in your context?</p>
</details>
目前有一些规范性指导，**NIST**（美国国家标准与技术研究院）在2023年发布了他们的**AI风险管理框架**（AI Risk Management Framework: NIST发布的用于管理AI系统风险的指南）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's some prescriptive guidance out there. NIST back in 2023 released their AI risk management framework.</p>
</details>

### 与政府合作开发AI的机遇

现在，您可以与您的客户一起开发未来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the fun part is you can develop the future with your customers right now.</p>
</details>
从技术角度来看，这是一张我们大部分时间都未曾涉足的白纸。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this is a clean sheet of paper from a technology perspective that we largely haven't had to tackle.</p>
</details>
在美国政府领域，能够与商业界共同创造未来的一部分，这很有趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and it's it's fun in a US government space to say we can invent part of the future together with commercial industry.</p>
</details>
希望能做出更好、更少令人反感、更少阻碍的决策，这样我们就能更快地推进使命。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, make hopefully better, less obnoxious, less obstructive decisions so we can keep moving mission faster.</p>
</details>
如果这听起来像涉及很多律师和文书工作，那可能确实如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and if it sounds like this is a lot of lawyers and paperwork, it probably is.</p>
</details>
有些记录和文件确实必须存在，这是无法避免的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, there there's no getting around. Some of these records and artifacts do have to exist.</p>
</details>
但您会想与我们合作的原因是，我们正在做一些极其困难或在商业界无法完成的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the the reason you'd want to collaborate with us is we're doing things that are either incredibly hard or can't be done in commercial industry.</p>
</details>
至少在洛斯阿拉莫斯，我们拥有数PB的数据，这些数据从未连接到互联网，也永远不会连接到互联网。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, at least at Los Alamos, we are sitting on pabytes of data that has never seen the internet, will never see the internet.</p>
</details>
我们在化学、生物、材料物理、材料复合材料、网络安全以及高性能计算设计方面拥有专业知识，这些都是我之前提到的一些合作领域，它们也可以成为您的合作领域。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we have subject matter expertise in chem uh bio materials physics um materials composites um certainly cyber security and the design of high performance computing that some of the partnerships I mentioned earlier and they can be your partnerships too.</p>
</details>
我们坚信，如果我们谈论的是照顾国家，维护我们的国家竞争优势，那不是仅仅靠洛斯阿拉莫斯山上的科学家就能解决的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know we we firmly believe that if we're talking about taking care of the country taking care of our national competitive advantage that's not just a bunch of scientists sitting on a mountain side in Los Alamos that are going to figure that out.</p>
</details>
我们确实需要您的帮助和参与，以推动我们所知的边界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We really do want your help and your uh engagement with us to you know push the boundaries of what we know.</p>
</details>

### 政府AI工具的关键考量

这最初旨在成为一个架构演讲，所以最后以一张架构幻灯片结束。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was originally meant to be an architecture talk. So finishing up with an architecture slide.</p>
</details>
如果您有兴趣将智能代理工具和服务引入联邦政府，有四件事需要考虑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you are interested in bringing a agentic tools, agentic services to the federal government. There's really four things to think about.</p>
</details>
首先，我们希望看到您为**可解释性**（Explainability: 指AI系统决策过程的透明度和可理解性）而构建。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we want to see that you've built for explanability.</p>
</details>
今天早上的主题演讲也稍微提到了这一点：您是如何做出那个决定的？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our keynote this morning touched on that a little bit of how did you get to that decision?</p>
</details>
如果出了问题，或者我们遇到不顺，我们不需要对股东负责，我们需要对美国公民负责。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know, if if something goes wrong or if we have a bad day, we don't have shareholders that we're responsible to. We have the US citizens to be responsible to.</p>
</details>
我们必须能够像信任我们的员工一样信任我们的智能代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, we have whatever that outcome was that, you know, caused some press briefing. We need to be able to trust our agents the same way we trust our staff.</p>
</details>
其次，当我们谈论部署事物时，我们再次强调，我们不是一家T恤公司。为**隔离性**（Isolation: 指AI系统在安全环境中运行，与其他系统隔离的能力）而构建至关重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, when we talk about fielding things, again, we we are not a t-shirt company. Building for isolation matters.</p>
</details>
我期待看到微软关于自托管AI铸造厂的演示，但对我们来说，我们无论如何都会这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um I was looking forward to seeing Microsoft's demo on the uh self-hosted uh AI foundry pieces, but for us, we do that anyways.</p>
</details>
我们大量利用开源工具、服务和模型来完成一些工作，因为我们无法从**超大规模云服务提供商**（Hyperscaler cloud provider: 指提供大规模云计算服务的公司，如AWS、Azure、Google Cloud）那里获得。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We look and leverage heavily open-source tools and services and models to do some of this work because we can't get it from a hyperscaler cloud provider.</p>
</details>
因此，当您构建工具和服务时，请查看一些服务范围页面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so as you're building your tools and services, take a look at some of those services in scope page.</p>
</details>
即使您是一家SaaS初创公司，如果您能在**国防部影响级别5环境**（DoD impact level 5 environment: DoD IL5，国防部对云服务安全要求的特定级别，适用于受控非机密信息）中，使用云供应商有限的服务进行构建，您就可以在任何地方部署。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even if you are a SAS startup, um if you can build in a DoD impact level 5 environment with that limited number of services from your cloud vendor, you can deploy anywhere.</p>
</details>
您拥有整个技术栈中的最小公分母。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, you you have the least common denominator uh out of that entire tech stack.</p>
</details>
如果您能将您的工具和应用程序部署在那里，我们的工作就会更容易，您的可移植性也会更强。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you can deploy your, you know, your tool, your application there, that makes our job easier. That makes you more portable.</p>
</details>
第三，随之而来的是为**治理**（Governance: 指管理和控制AI系统开发、部署和使用的框架）而构建。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as along with that comes build for governance.</p>
</details>
我们还与客户进行了一些尴尬的对话，比如：“我们需要一份**软件物料清单**（SBOM: Software Bill of Materials，列出软件组件及其依赖关系的清单），因为我们正在与您进行采购。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also have some awkward conversations with customers where it's well we need a software bill of materials as we're doing this procurement with you and yeah [laughter] uh people look at us like I mean I guess we can dump you know what we had in our build script and it's it's a little bit of an awkward conversation but that's required per our regs.</p>
</details>
人们看着我们，好像在说“我想我们可以把构建脚本里的东西都倒出来”，这有点尴尬，但这是我们的规定所要求的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People look at us like I mean I guess we can dump you know what we had in our build script and it's it's a little bit of an awkward conversation but that's required per our regs.</p>
</details>
AI发展日新月异，传统的网络安全也在加速，但尚未完全到位。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you know AI stuff is moving a mile a minute the traditional cyber security stuff is moving faster but not quite there yet.</p>
</details>
因此，如果您能提前计划好这些对话，比如如何处理开源依赖项、您的补丁计划是什么，以及如果您是**软件即服务**或**平台即服务**（PaaS: Platform as a Service，提供平台环境以供开发、运行和管理应用程序的服务模式）供应商，如何帮助我们填写这些文件，那将使整个合作关系更快、更友好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if you can plan to have those conversations of how did you handle open source dependencies. What are your patching plans? What you know, help us fill this paperwork out if we're buying from you as a software as a service or platform as a service. That makes that entire partnership that much faster, that much more friendly.</p>
</details>
最后，保持速度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lastly, keep up the speed.</p>
</details>
我们还与一些服务提供商进行过一些尴尬的对话，问他们：“为什么你们的联邦政府版本已经过时一年了？为什么那个服务在你们商业区域发布一年、三年、五年后还没有同步更新？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have also had some awkward conversations with some of our service providers saying, why is your federal stuff a year out of date? you know, why is that service par not happening a year, three years, five years uh from when you launched it in a commercial region?</p>
</details>
这并不是我们自负，认为我们是政府或准联邦机构，所以我们关心自己的数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's not us just liking ourselves and wanting to have bravado that oh, we're the government, we we're a quasi federal agency, we we care about our data. No.</p>
</details>
这根植于**出口管制法**（Export compliance law: 管理特定技术和产品出口的法律）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is rooted in export compliance law.</p>
</details>
这意味着，除非您在正确的地点，否则我们无法从您那里购买。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is things like we can't buy from you unless you're in the right places.</p>
</details>
因此，如果您能在关键环节设计出速度，就能最大化您在不同运营地点向我们部署工具和服务的机会，以满足我们的使命。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's if you can design for speed in your hard corners that optimizes your chances of uh fielding your tools and services with us uh in different places that we have to operate to meet our mission.</p>
</details>

### 结论：机遇与挑战并存

洛斯阿拉莫斯建立的理念是，数学和科学的正确应用可以一夜之间改变世界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and with that I lo Alamos we were founded on the idea that the right application of math and science can change the world overnight.</p>
</details>
我们已经做到了，我们对那种世界突然变得不同的感觉并不陌生。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um we we've done that. We're not a stranger to how that feels to show up and the world is now different.</p>
</details>
这就是我们成立的目的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh that's what we were founded to do.</p>
</details>
当我们审视AI、智能代理工具、前沿模型以及所有这些时，我们将其视为国家安全最大的机遇和最大的威胁。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when we look at AI, uh Aentic tools, what we can do with frontier models, any of the above, um we see it as the greatest opportunity and the greatest threat to national security.</p>
</details>
但正是机遇让我们不断前进。我们不害怕下行风险，我们必须在这里帮助发展未来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the opportunity is what keeps us showing up. We're not scared of the the downside risk. We have to be here to help develop the future.</p>
</details>
我最喜欢的一个轶事是，因为我们是核科学实验室，我们做了很多**核不扩散工作**（Nuclear non-prololiferation work: 旨在防止核武器扩散的努力）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, one of my favorite anecdotes, uh, because we are a nuclear science lab, uh, we do a lot of nuclear non-prololiferation work.</p>
</details>
正因为我们从事这类工作，我们擅长开发**特种传感器**（Specialty sensors: 用于特定目的的专业传感器）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And because we do that type of work, we've gotten really good at specialty sensors.</p>
</details>
我们用这些特种传感器做了什么？我们有一束激光绑在火星车上，正在向岩石发射激光。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what have we been able to do with that specialty sensor? We have a laser strapped to a car on Mars zapping rocks.</p>
</details>
我们建造了**ChemCam传感器**（ChemCam sensor: 火星探测器上用于分析岩石化学成分的激光诱导击穿光谱仪）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, we built the ChemCam sensor.</p>
</details>
所以，即使您对是否应该与**美国核企业**（Nuclear enterprise of the US: 指美国与核武器和核能相关的机构和活动）合作有些犹豫，我们还有其他基础科学研究，正在推动人类物种所知、所能和所能发展的边界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even if you're a little bit on the fence about should we engage with, you know, the nuclear enterprise of the US, there's other fundamental science that we do that's just pushing the boundaries that we as a human species know and can do and can can grow into.</p>
</details>
非常感谢您今天的时间，我非常感激，我将在旁边回答问题。谢谢。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with that, thank you so much for your time today. I really appreciate it and I'll be available on the side for questions. Thank you.</p>
</details>