---
area: tech-engineering
category: ai-ml
companies_orgs: []
date: '2025-10-18'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project: []
series: ''
source: https://www.youtube.com/watch?v=k-9sQXhHHmk
speaker: TED
status: evergreen
summary: 诺贝尔奖得主David Baker分享了其团队如何利用AI从头设计蛋白质，并将其应用于疫苗、可持续发展、作物耐热性及生物传感等领域。他强调了开放科学、负责任创新以及蛋白质设计在解决人类未曾面临问题上的巨大潜力。
tags:
- design
- health
- llm
- technology
title: 从头设计蛋白质：AI赋能下的生命科学新突破
---
### 开场与诺贝尔奖

Host: Hi, David.

主持人: 您好，David。

David: Great to be here.

David: 很高兴来到这里。

Host: Thank you for being with us. And first, congratulations on the **Nobel Prize** (诺贝尔奖: 瑞典皇家科学院颁发的科学领域最高荣誉之一). I know that all of us at TED were really elated to see your work celebrated and recognized in that major way.

主持人: 感谢您与我们在一起。首先，祝贺您获得诺贝尔奖。我知道我们TED的所有人都非常高兴看到您的工作以这种重要方式得到表彰和认可。

David: Yeah. And in fact, much of the work that I talked about in my Nobel Prize address was supported by the TED Audacious project. So I'm grateful, very grateful to TED as well. I'm excited to be back here.

David: 是的。事实上，我在诺贝尔奖演讲中谈到的许多工作都得到了TED“大胆项目”的支持。所以我非常感谢TED。很高兴能再次回到这里。

Host: It's definitely meaningful that TED could be part of your journey in that really important way and part of this important work. And we definitely want to get into all of that.

主持人: TED能以这种重要方式成为您旅程的一部分，并参与这项重要工作，这无疑意义非凡。我们当然想深入探讨所有这些。

Host: But before we talk about the Nobel Prize and where things have gone since 2019 when you joined us as a speaker and as an audacious grantee, I think it would be helpful to set the stage with some background on your work, detailing the science that was recognized here, connected to proteins.

主持人: 但是，在我们谈论诺贝尔奖以及自2019年您作为演讲者和“大胆项目”受资助者加入我们以来事情的发展之前，我认为最好先介绍一下您工作的背景，详细说明这里获得认可的、与蛋白质相关的科学。

Host: So you've referred to **proteins** (蛋白质: 构成生物体并执行生命活动的主要有机大分子) as the workhorses of all living things. You said in your talk, in fact, that almost everything that happens in biology happens because of proteins. They do everything from transporting nutrients to repairing damaged tissue to supporting our immune system. And your work, of course, has been focused around creating new proteins. Why has this been such a challenging thing for humanity to accomplish?

主持人: 您曾将蛋白质称为所有生物的“主力军”。事实上，您在演讲中提到，生物学中几乎所有发生的事情都离不开蛋白质。它们无所不能，从运输营养物质到修复受损组织，再到支持我们的免疫系统。当然，您的工作一直专注于创造新的蛋白质。为什么这对人类来说一直是一项如此具有挑战性的任务？

### 蛋白质：生命的基石与设计挑战

David: Well, for many, many years, scientists studied the proteins that exist in nature, and they seemed almost like these sort of magical elephant runes passed down from billions of years of **evolution** (进化: 生物在遗传和变异的基础上，通过自然选择，适应环境，不断发展变化的过程). They were really special. They're very different from anything that occurs outside of biology because they have these very precise properties; they have these exquisite functions.

David: 嗯，多年来，科学家们一直在研究自然界中存在的蛋白质，它们似乎就像是经过数十亿年进化传承下来的神奇符文。它们非常特殊，与生物学之外的任何事物都截然不同，因为它们拥有非常精确的特性和精妙的功能。

David: And so the notion that you could design new ones that would do new things was really quite foreign. And when people tried to do it, it was very difficult.

David: 因此，你可以设计出具有新功能的蛋白质这一概念，在当时是相当陌生的。当人们尝试这样做时，发现非常困难。

David: So it was both that they seemed almost unattainable and that the attempts that were made were not successful, and that even thinking about the methods for even how you would go about designing a protein with a new function didn't really exist. So I think there were a number of reasons why it didn't happen a much longer time ago.

David: 所以，这既是因为它们看起来几乎遥不可及，也是因为所做的尝试都没有成功，甚至连如何设计具有新功能的蛋白质的方法论都尚未存在。因此，我认为有很多原因导致这项工作没有在更早的时候实现。

Host: And of course, the groundbreaking thing that you've done, the Nobel Prize-winning thing that you've done, is using a computer program to design proteins from scratch. Can you talk about how exactly you did this?

主持人: 当然，您所做的开创性工作，也就是获得诺贝尔奖的工作，是使用计算机程序从零开始设计蛋白质。您能谈谈您具体是如何做到的吗？

### 从自然折叠到AI驱动的蛋白质设计

David: Yes. And in fact, there's been a very big transition between 2019 when I gave the TED Talk and today.

David: 是的。事实上，从2019年我做TED演讲到现在，已经发生了非常大的转变。

David: So we began quite a few years ago to try to understand how the **amino acid sequences** (氨基酸序列: 蛋白质的基本组成单位氨基酸的排列顺序) of proteins determine their **three-dimensional structures** (三维结构: 蛋白质在空间中折叠形成的特定形状，决定其功能).

David: 所以，我们多年前就开始尝试理解蛋白质的氨基酸序列如何决定它们的三维结构。

David: And just as a little bit of background for so everyone's on the same page, the **genes** (基因: 携带遗传信息的DNA片段，决定生物性状) in our **genomes** (基因组: 一个生物体中所有遗传物质的总和) each encode a protein. That's what they do. And the way they encode that protein is by specifying the sequence of amino acids in the protein. And once that sequence is known, then that specifies what the three-dimensional structure is.

David: 作为一点背景知识，以便大家都能理解，我们基因组中的基因都编码一种蛋白质。这就是它们的作用。它们编码蛋白质的方式是指定蛋白质中氨基酸的序列。一旦这个序列已知，它就决定了三维结构。

David: And so when I first began at the University of Washington, we studied how proteins actually fold up from their amino acid sequences to their three-dimensional structures. And we studied that experimentally.

David: 所以，当我刚开始在华盛顿大学工作时，我们研究了蛋白质如何从氨基酸序列折叠成三维结构。我们通过实验研究了这一点。

David: And as we began to learn more and more, we developed computer programs to mimic that process and to try to be able to go from take a sequence and predict the structure.

David: 随着我们学习得越来越多，我们开发了计算机程序来模拟这个过程，并尝试能够从一个序列预测其结构。

David: And then after we had been doing that for some time, we realized that we could go backwards, not go from like in biology from the sequence to the structure and the function of the protein, but instead start with a new structure and a new function that don't exist and work backwards towards to an amino acid sequence that would encode that new protein.

David: 然后，在我们这样做了一段时间后，我们意识到我们可以反向操作，不再像生物学中那样从序列到蛋白质的结构和功能，而是从一个不存在的新结构和新功能开始，反向推导出能够编码这种新蛋白质的氨基酸序列。

David: The difference is that in the biology case there, the proteins are encoded in the genes in our genomes and the genes of all living things. In the design case, it's a completely new protein. So it doesn't exist. There's no gene that exists. So we have to make a **synthetic gene** (合成基因: 通过人工方法在体外合成的基因), a synthetic piece of **DNA** (脱氧核糖核酸: 携带遗传信息的生物大分子) that encodes this new protein.

David: 不同之处在于，在生物学案例中，蛋白质编码在我们基因组以及所有生物的基因中。而在设计案例中，它是一种全新的蛋白质。所以它不存在，没有现有的基因。因此，我们必须制造一个合成基因，一段编码这种新蛋白质的合成DNA。

David: Once we have that synthetic piece of DNA, we can put it into a bacterium and it will produce the protein, and we can see whether it actually does what we designed it to do.

David: 一旦我们有了那段合成DNA，我们就可以将其放入细菌中，它就会产生蛋白质，然后我们就可以看看它是否真的能实现我们设计的功能。

David: So the first class of models we developed were traditional physical models where we tried to describe all the interactions between all the atoms in the protein and how those interactions guide the protein to fold up, and we made quite a bit of progress which I briefly described in my 2019 talk.

David: 所以，我们开发的第一类模型是传统的物理模型，我们试图描述蛋白质中所有原子之间的所有相互作用，以及这些相互作用如何引导蛋白质折叠。我们取得了相当大的进展，我在2019年的演讲中简要描述了其中一些。

David: Now since then, we've completely switched over to developing **AI-based methods** (基于人工智能的方法: 利用人工智能技术进行蛋白质设计) for protein design, and in these methods, we take the many, many examples of protein structures whose structures have been determined by scientists really over the last 50 years.

David: 从那时起，我们已经完全转向开发基于人工智能的蛋白质设计方法。在这些方法中，我们利用了过去50年来科学家们确定的大量蛋白质结构实例。

David: And there are about 250,000 of these structures now, and so we can learn by training AI models on these structures. We can develop methods that actually will generate new proteins with new structures, and we can condition this process on a specification of the function we want to create.

David: 现在大约有25万个这样的结构，因此我们可以通过在这些结构上训练AI模型来学习。我们可以开发出能够实际生成具有新结构的新蛋白质的方法，并且我们可以根据我们想要创造的功能规格来调整这个过程。

David: So for example, and our methods are very similar to image generation methods. So whereas you might say to Dolly or an image generation program, "Generate an image of a giraffe walking on a horse" or something absurd like that, and you would get an image that represents that.

David: 举例来说，我们的方法与图像生成方法非常相似。就像你可能会对Dolly或一个图像生成程序说：“生成一张长颈鹿骑在马上的图片”或者类似荒谬的东西，然后你会得到一张代表该内容的图片。

David: In the same way, we can specify to **RF diffusion** (RF扩散: 一种基于扩散模型的AI蛋白质设计算法), the design protein program we have created. We can say, "Design a protein which binds to this virus and blocks it, or binds to this cancer cell and stops it from dividing."

David: 同样地，我们可以向我们创建的蛋白质设计程序RF扩散指定。我们可以说：“设计一种能结合这种病毒并阻断它，或者结合这种癌细胞并阻止其分裂的蛋白质。”

David: And the program will generate a new protein, and then we make it in the lab and see whether it actually does what we designed it to do.

David: 然后程序会生成一种新的蛋白质，我们再在实验室中制造出来，看看它是否真的能实现我们设计的功能。

Host: It's incredible, and it seems like there are seemingly endless applications for this. In 2019, you shared a few of them, and I'd love to talk about those that you shared in that talk, but also am really curious to know what excites you today when you think about applications for this.

主持人: 这太不可思议了，而且似乎有无穷无尽的应用。2019年，您分享了一些应用，我很想谈谈您在演讲中分享的那些，但我也非常好奇，当您今天思考这项技术的应用时，什么让您感到兴奋？

### 蛋白质设计的广泛应用

David: Yes. So many of the grand challenges that I described in my 2019 talk, we've really made huge progress on and now gone beyond. But I'll highlight one example.

David: 是的。我在2019年演讲中描述的许多重大挑战，我们确实取得了巨大进展，并且现在已经超越了它们。但我会重点强调一个例子。

David: I spoke about vaccines, and during the pandemic, my colleague Neil King here at the Institute for Protein Design actually developed a vaccine for COVID, which is approved for use in humans. It's the first **de novo design medicine** (从头设计药物: 完全基于计算设计而非自然发现或改造的药物), and he's well on his way to making advanced vaccines for many different viruses, including influenza.

David: 我谈到了疫苗，在大流行期间，我在蛋白质设计研究所的同事Neil King实际上开发了一种用于COVID的疫苗，该疫苗已获批用于人类。这是第一个从头设计的药物，他正在开发针对包括流感在内的许多不同病毒的先进疫苗。

David: Since 2019, as the methods we've developed have become more powerful, we've expanded the range of applications quite a bit more broadly. For example, **sustainability** (可持续性: 满足当代需求，同时不损害后代满足其自身需求的能力的发展模式) is a new emphasis.

David: 自2019年以来，随着我们开发的方法变得更加强大，我们已经将应用范围大大扩展。例如，可持续性是一个新的重点。

David: So we're working on new proteins to break down plastic and other pollutants and polymers. We're working on new ways to fix carbon and remove methane from the atmosphere. And we're working on **green chemistry** (绿色化学: 旨在减少或消除有害物质在设计、制造和应用中的使用的化学方法) approaches to enable the synthesis creation of molecules without using toxic solvents and in much lower energy ways.

David: 因此，我们正在研究新的蛋白质来分解塑料和其他污染物及聚合物。我们正在研究新的方法来固定碳并从大气中去除甲烷。我们还在研究绿色化学方法，以实现在不使用有毒溶剂且能耗更低的情况下合成分子。

David: So the grand challenges seemed very ambitious at the time, but as the methods have progressed and with all the brilliant people who have come here to work on solving them, we've actually been able to go well beyond now and tackle new problems as well.

David: 所以，那些宏伟的挑战在当时看起来非常雄心勃勃，但随着方法的进步以及所有来到这里致力于解决这些问题的杰出人才，我们现在已经能够远远超越当初，并解决新的问题。

Host: It's incredible, and it seems exciting to think about all the ways that this could improve life for really all of us in different ways. And you mentioned the sustainability work, which was something that you touched on very, very slightly in your 2019 talk, and it sounds like that's really ramped up since then. How did you begin to think about sustainability work as a potential use case for this?

主持人: 这太不可思议了，想到这能以各种方式改善我们所有人的生活，真是令人兴奋。您提到了可持续性工作，这在您2019年的演讲中只是非常轻微地提及，听起来自那时以来这项工作真的加速了。您是如何开始将可持续性工作视为这项技术的一个潜在应用场景的？

David: One of the advances that we've made since 2019 is in developing methods for designing proteins which can make or break chemical bonds. This is something that happens in nature. There are many proteins which do this, which catalyze chemical reactions. And now that we've mastered that, we can design proteins that will break bonds.

David: 自2019年以来，我们取得的进展之一是开发了设计能够形成或断裂化学键的蛋白质的方法。这在自然界中是存在的。有许多蛋白质能做到这一点，它们催化化学反应。现在我们已经掌握了这项技术，我们可以设计能够断裂化学键的蛋白质。

David: Problems like plastic degradation or breaking down other toxic compounds in the environment start to become things that can be approached. And it's particularly interesting with compounds that weren't present during evolution, like "forever chemicals" (PFAS compounds). There was never any evolutionary pressure for nature to develop or evolve proteins to break down such compounds.

David: 像塑料降解或分解环境中其他有毒化合物的问题，开始变得可以解决。对于进化过程中不存在的化合物，比如“永久性化学品”（PFAS化合物），这尤其有趣。自然界从未有过进化压力来发展或演化出能够分解这类化合物的蛋白质。

David: And so there are many problems we face today, and this is a general theme in places where nature was already trying to optimize heavily to solve a certain problem, there's not really a need for us to design new proteins.

David: 因此，我们今天面临许多问题，这是一个普遍的主题：在自然界已经努力优化以解决某个特定问题的地方，我们确实没有必要设计新的蛋白质。

David: But in areas where either because we live longer, so things like neurodegeneration are more of a problem, or because we're putting new things in the environment like plastic or PFAS compounds, those are the places where there's a huge opportunity for protein design because we already know from nature that proteins can solve almost any problem.

David: 但是，在某些领域，无论是由于我们寿命更长，导致神经退行性疾病等问题更加突出，还是因为我们向环境中引入了塑料或PFAS化合物等新物质，这些都是蛋白质设计的巨大机遇所在，因为我们已经从自然界中了解到，蛋白质几乎可以解决任何问题。

David: And so for protein design, it's the problems that nature didn't have to deal with because humans didn't live as long, or because they hadn't polluted or heated up the planet, for example.

David: 所以对于蛋白质设计来说，它解决的是自然界不必处理的问题，因为例如，人类以前寿命没那么长，或者他们没有污染或加热地球。

Host: Well, it seems like that work is obviously very necessary, and I'm interested to also hear what other sorts of uses have revealed themselves in the years since you joined us. It seems like sustainability, of course, health, medicine. What other areas have been surprising places that you've been able to find protein design can be helpful?

主持人: 嗯，这项工作显然非常必要，我也很想听听自您加入我们以来，这些年还发现了哪些其他用途。除了可持续性、健康、医学之外，还有哪些领域让您感到惊讶，发现蛋白质设计也能发挥作用？

David: Yeah. Well, one area that's related to sustainability that's also become more pressing since 2019 is trying to design to make crop plants more **thermo-tolerant** (耐热性: 生物体在较高温度下仍能正常生长和存活的能力).

David: 是的。一个与可持续性相关、自2019年以来也变得更加紧迫的领域是，尝试设计使农作物更具耐热性。

David: Because temperatures are rising, and it's very important that major crops like rice be able to grow and thrive at higher temperatures. And so one of the things that we've become very good at with protein design is to make proteins more stable. So we're excited now about applying those methods to problems like making plants thrive at higher temperatures.

David: 因为气温正在上升，主要农作物如水稻能够在更高温度下生长和繁茂非常重要。因此，我们在蛋白质设计方面变得非常擅长的一件事是使蛋白质更稳定。所以我们现在很高兴将这些方法应用于解决诸如使植物在更高温度下茁壮成长的问题。

David: Other areas are in technology. We're very excited about sensing and sort of intrigued by the ability of a human or a dog to smell and distinguish between many, many different compounds.

David: 其他领域则在技术方面。我们对传感非常兴奋，并对人类或狗能够嗅闻并区分许多不同化合物的能力感到着迷。

David: So the way that a dog does that is with proteins, receptors in its nose that can respond differentially to different compounds that are in the environment. And we're now designing synthetic proteins that can respond to many, many different molecules. And so we're very excited about building things like an artificial nose towards that end.

David: 狗做到这一点的方式是依靠蛋白质，也就是其鼻子中的受体，它们能够对环境中不同的化合物做出不同的反应。我们现在正在设计能够响应许多不同分子的合成蛋白质。因此，我们非常兴奋能为此目的建造像人工鼻这样的东西。

David: And for more general technology applications, we're learning how to interface proteins with electronics because then you can have a more direct coupling of a readout from a designed protein to something that we can quickly read out on a cell phone, for example.

David: 对于更普遍的技术应用，我们正在学习如何将蛋白质与电子设备连接，因为这样你就可以将设计好的蛋白质的读数更直接地耦合到我们可以通过手机快速读取的东西上，例如。

David: And one example of that is we're designing proteins to sense compounds in the environment that would be embedded directly in **silicon nitride chips** (氮化硅芯片: 一种基于氮化硅材料制造的微型电子芯片，常用于传感器和生物医学设备). And that's again a problem that nature never had to deal with because proteins in nature were never interfacing with electronic devices. And we've made quite a bit of progress there.

David: 其中一个例子是，我们正在设计蛋白质来感知环境中会直接嵌入氮化硅芯片的化合物。这又是一个自然界从未需要处理的问题，因为自然界中的蛋白质从未与电子设备接口。我们在这方面已经取得了相当大的进展。

Host: How do we ensure, and what role do you see yourself playing in ensuring that what you're creating is accessible and available to a wide range of people?

主持人: 我们如何确保，以及您认为自己扮演什么角色来确保您所创造的东西能够被广泛的人群获取和使用？

### 确保可及性与负责任的创新

David: Yes, I think we start off with the methods we develop. We make those widely available. And we're particularly interested in enabling protein design in countries where there isn't as much advanced infrastructure for large-scale drug screening, for example.

David: 是的，我认为我们从开发的方法开始。我们让这些方法广泛可用。我们特别感兴趣的是在那些没有太多先进基础设施进行大规模药物筛选的国家，也能实现蛋白质设计。

David: Because with protein design, it really cuts down the cost in making proteins to deal with a challenge. For example, if you are a farmer in Africa, and you're dealing with a new type of pest, say a fungus or an insect, we want to empower scientists and researchers in the country that has the problem to actually use our methods to develop their own solutions to those problems, which may be pretty local.

David: 因为蛋白质设计确实大大降低了制造蛋白质以应对挑战的成本。例如，如果您是非洲的农民，并且正在处理一种新型害虫，比如真菌或昆虫，我们希望赋能问题所在国家的科学家和研究人员，让他们能够使用我们的方法来开发针对这些问题的本地化解决方案。

David: As things come out of here, one of the things that we do is when we license things that we have created to other entities, we always require that there be a carve-out for **global health applications** (全球健康应用: 旨在改善全球范围内人类健康的医疗、技术或政策实践). And that's something that the Gates Foundation has pioneered.

David: 当我们的成果问世时，我们所做的一件事是，当我们授权我们创造的东西给其他实体时，我们总是要求为全球健康应用留出特殊条款。这是盖茨基金会率先倡导的。

David: And so we try in every way we can to make sure that things we develop will be as broadly applicable as possible. I think it's a challenge currently that goes well beyond protein design to motivate the world to put the resources into ways of combating things like global warming and the accumulating plastic.

David: 因此，我们尽一切可能确保我们开发的东西能够尽可能广泛地应用。我认为，目前面临的一个挑战远远超出了蛋白质设计本身，那就是如何激励全世界投入资源来对抗全球变暖和塑料堆积等问题。

David: There's been a lot of talk, but it's going to take a lot of resources too, and we can't really control that. I'll give you an example of something that I am disappointed in.

David: 虽然讨论很多，但这也需要大量的资源，而我们无法真正控制这一点。我举一个让我感到失望的例子。

David: During the pandemic, there was a lot of talk about how we needed better methods for rapidly creating ways to deal with pandemic viruses. And immediately after the pandemic, or during the end of the pandemic, there were even some initiatives started to work on faster approaches to develop ways to protect against new pathogens if they emerged.

David: 在疫情期间，人们大量讨论我们需要更好的方法来快速创建应对大流行病毒的方案。疫情结束后或接近尾声时，甚至启动了一些倡议，旨在开发更快速的方法来预防新病原体的出现。

David: But within six months of the pandemic ending, the world kind of forgot about it. So there are some issues with the way that the pull from the outside world in different areas is different depending on how much profit can be made, which is a little bit too bad.

David: 但在疫情结束后的六个月内，世界似乎就把它忘了。所以，外部世界在不同领域的需求存在一些问题，这取决于能产生多少利润，这有点可惜。

Host: So keeping people's attention focused on this seems like the challenge of your work. Well, I think this is also a really nice segue to talking about the Nobel Prize, which is a great way to put focus on this incredible work you're doing.

主持人: 所以，让人们持续关注这项工作，似乎是您工作中的一个挑战。嗯，我认为这也很自然地引出了关于诺贝尔奖的话题，这是一个很好的方式来聚焦您正在做的这项不可思议的工作。

Host: So late last year, of course, you get word that you've been awarded the Nobel Prize in Chemistry. Can you tell us about how you received this news and what that experience was like?

主持人: 去年底，您当然收到了获得诺贝尔化学奖的消息。您能告诉我们您是如何收到这个消息的，以及那次经历是怎样的吗？

David: Well, it was very exciting. I got the phone call, and then I think what I remember the most that day was when I came into the lab, and we had this huge party here, and that was really, really special.

David: 嗯，那非常令人兴奋。我接到了电话，然后我想那天我记得最清楚的是当我来到实验室，我们在这里开了一个盛大的派对，那真的非常非常特别。

David: And then in Stockholm, I really felt that the prize was a celebration of the work of the many people, the many brilliant students and postdocs and others I've had over the years who contribute to all the things that end up going into the Nobel Prize-winning work.

David: 然后在斯德哥尔摩，我真的觉得这个奖项是对许多人工作的庆祝，包括多年来与我共事过的许多杰出的学生、博士后以及其他为最终获得诺贝尔奖的工作做出贡献的人。

David: And that I actually talked about in my talk. And so we asked former colleagues to come, and I think we actually set a record there: 185 people who were former colleagues, former graduate students and postdocs, mostly former, almost all actually former trainees at one level or another at different times. And that was really special.

David: 我在我的演讲中也提到了这一点。所以我们邀请了以前的同事来，我想我们实际上创造了一个记录：185位以前的同事、以前的研究生和博士后，大部分是以前的，几乎所有都是在不同时期不同层级的以前的受训者。那真的很特别。

David: I think we set a record, and this really hit home to me when I gave my Nobel speech, and then when you're up there on stage, you can't really see who's in the audience. And then when the lights came on, I saw that there was a quarter of the room, this whole big section, which were all former graduates and postdocs from many years back up till the current.

David: 我想我们创造了一个记录，当我在发表诺贝尔演讲时，这一点真的让我深有感触。在台上时，你其实看不到观众席上的人。然后当灯亮起来时，我看到房间里有四分之一，整整一大片区域，都是多年以前直到现在的毕业生和博士后。

David: And that was really, really special, and I think it made it clear to me, or I guess I'd always known it, but I was really impressed upon that for me, really, the scientific advances are one thing, but really training and mentoring all these amazing people who are going on to do all these really amazing things is really, I think that's the most important thing I do.

David: 那真的非常非常特别，我想这让我明白了，或者说我一直都知道，但我真的深感，对我来说，科学进步是一回事，但真正重要的是培养和指导所有这些杰出的人才，让他们去做所有这些真正了不起的事情，这真的是我所做的最重要的事情。

David: And so anyway, that and then in Stockholm, we had a number of really fantastic parties with all these 185 people, including family and extended family, and it was really wonderful.

David: 总之，在斯德哥尔摩，我们和所有这185人，包括家人和大家庭成员，举办了许多非常棒的派对，那真的非常美妙。

Host: That's great. Well, David, I don't think you'll be surprised to know that we're getting tons of questions from the member community, and so I want to start to bring some of those to you to integrate into the conversation.

主持人: 太棒了。嗯，David，我想您不会惊讶，我们收到了会员社区的大量问题，所以我想开始把其中一些问题带给您，融入到我们的对话中。

Host: We have one from Les B, who asks, "How do you see technologies like CRISPR and gene editing intersecting with your AI-driven protein design? Could combining these tools accelerate the development of targeted therapies or sustainable biological solutions?"

主持人: 我们有一个来自Les B的问题，他问道：“您如何看待CRISPR和基因编辑等技术与您的AI驱动蛋白质设计相交织？结合这些工具能否加速靶向疗法或可持续生物解决方案的开发？”

### 蛋白质设计的未来：超越进化

David: Yeah, it's a wonderful, it's a great question. Yesterday, I had a very long conversation with the world's experts at CRISPR in Jennifer Doudna's institute at Berkeley, and we're going to join forces just as suggested by that question for the problem of sustainable agriculture.

David: 是的，这是一个很棒的问题。昨天，我在伯克利Jennifer Doudna研究所与CRISPR领域的全球专家进行了长时间的对话，我们将像这个问题所建议的那样，为解决可持续农业问题而联合起来。

David: We can design new proteins, but then they have to get into the plants. And so we can improve plant thermal tolerance. We can design proteins that in principle could improve plant thermal tolerance or protect against funguses like wheat blight, but we need to get the proteins in. And CRISPR and the IGI are really experts at that. So I think this is a perfect time to partner in many areas.

David: 我们可以设计新的蛋白质，但它们必须进入植物体内。因此，我们可以提高植物的耐热性。我们原则上可以设计出能够提高植物耐热性或抵抗诸如小麦枯萎病等真菌的蛋白质，但我们需要将蛋白质导入植物体内。而CRISPR和IGI在这方面确实是专家。所以我认为现在是许多领域合作的绝佳时机。

Host: Lachlan F is curious about the pros and cons of your scientific work being either completely open source like OpenFold or proprietary like AlphaFold, and can both of these options accelerate progress and possibly limit public benefits as well?

主持人: Lachlan F好奇您的科学工作是完全开源（如OpenFold）还是专有（如AlphaFold）的优缺点，以及这两种选择是否都能加速进展，同时可能限制公共利益？

David: Yeah, I'm a big believer in making everything open. And I think we find that people build on what we create, and also, as scientists, one of the goals is to really have broad impact, and the more you share, the more impact there is.

David: 是的，我非常相信一切都应该开放。我认为我们发现人们会在我们创造的基础上继续发展，而且作为科学家，我们的目标之一是产生广泛的影响，你分享得越多，影响力就越大。

David: And I think that's also held for the people leaving my group who are starting their own group. We've had over a hundred former graduate students and postdocs who've left my group to start their own labs in the US and around the world, and I've encouraged them to keep working in this area.

David: 我认为这对于离开我的团队并开始自己团队的人也同样适用。我们有超过一百名以前的研究生和博士后离开了我的团队，在美国和世界各地建立了他们自己的实验室，我鼓励他们继续在这个领域工作。

David: And so now we have this amazing community. We have yearly meetings where everyone's working together and everyone meets and shares what they've done, and things just have moved really, really quickly. So I think in general, having everything open is really a big advantage.

David: 所以现在我们拥有这个令人惊叹的社区。我们每年举行会议，每个人都一起工作，每个人都会见面并分享他们所做的工作，事情进展得非常非常快。所以我认为总的来说，一切开放确实是一个巨大的优势。

David: Now, if you're at a company, that has to be moderated by the fact the company needs ultimately to make money, and so there are different constraints. But at a public institution like the University of Washington, or really in any university, I think making everything open is the right way to go.

David: 当然，如果你在一家公司工作，那就必须考虑到公司最终需要盈利的事实，因此会有不同的限制。但在像华盛顿大学这样的公共机构，或者说在任何大学，我认为开放一切是正确的做法。

David: And we've just, we've seen that really from the beginning. We made, even for our earlier generation non-AI software called Rosetta, we made it widely available, and that just created this whole community around it which has really been wonderful.

David: 我们从一开始就看到了这一点。我们甚至将我们早期非AI软件Rosetta广泛提供，这就在它周围建立了一个完整的社区，这真的很棒。

Host: I mean, and that speaks to something that we're seeing a lot from the community, which is just questions around how to ensure that the proteins you're designing, and just as we think about AI and technological acceleration in general, that it remains in the best interests of humanity, global peace, kindness. How do we safeguard against misuse in a world where there are some bad actors looking to use things for ill?

主持人: 我的意思是，这反映了我们从社区中看到的一个普遍问题，那就是如何确保您设计的蛋白质，以及我们普遍思考人工智能和技术加速时，它仍然符合人类的最佳利益、全球和平与善良。在一个存在一些不良行为者试图滥用技术的世界里，我们如何防范滥用？

David: Yeah, that's a very good question. And we are, let me first give you an overall framing for it, and then I'll tell you about specific actions we're taking.

David: 是的，这是一个很好的问题。我们，我先给您一个总体框架，然后我会告诉您我们正在采取的具体行动。

David: The things that are really dangerous, the types of pathogens are like viruses like the 1918 Spanish flu or Ebola, which obviously can cause death and destruction on a huge, huge scale. Those are extremely complex things, and because they have to do many, many different things.

David: 真正危险的东西，那些病原体，比如1918年的西班牙流感或埃博拉病毒，它们显然能造成巨大规模的死亡和破坏。这些都是极其复杂的东西，因为它们必须完成许多不同的任务。

David: And even with the advances in protein design, it's still very challenging to make a protein that has one function, whereas a virus has to do many, many things. And so if you want to cause death and destruction on a large scale, the design methods don't help you. You just go to nature, and you can remake the 1918 Spanish flu.

David: 即使蛋白质设计取得了进展，制造一种具有单一功能的蛋白质仍然非常具有挑战性，而病毒必须完成许多任务。因此，如果你想造成大规模的死亡和破坏，设计方法并不能帮助你。你只需要回到自然界，就可以重新制造1918年的西班牙流感。

David: And so what the protein design methods are really good at today is blocking, for example, viruses, either pandemic viruses or new viruses. The idea of making a synthetic virus is still, well, first of all, there's not really any reason to do it because, as I said at the beginning, design is very powerful where there hasn't already been extensive evolutionary optimization.

David: 因此，蛋白质设计方法今天真正擅长的是阻断，例如，病毒，无论是大流行病毒还是新病毒。制造合成病毒的想法仍然是，首先，没有真正这样做的理由，因为正如我一开始所说，在尚未进行广泛进化优化的领域，设计是非常强大的。

David: So for viruses, there's been extensive optimization for really rapid spreading and infection. So the first point is that if you want to do bad for bad actors, there already are many, many bad things all around, ranging from things like **botulinum toxin** (肉毒杆菌毒素: 一种神经毒素，由肉毒杆菌产生，可导致肌肉麻痹) to major viruses.

David: 因此，对于病毒来说，已经进行了广泛的优化，以实现快速传播和感染。所以第一点是，如果不良行为者想要作恶，周围已经存在许多许多有害的东西，从肉毒杆菌毒素到主要病毒，应有尽有。

David: And I really think the primary role of protein design will be to protect against these threats and new threats. But of course, it is possible that a bad actor really has their mindset to try and create something new and dangerous.

David: 我真的认为蛋白质设计的主要作用将是防御这些威胁和新的威胁。但当然，不良行为者确实有可能一心想创造出新的危险事物。

David: So we had a workshop at the University of Washington a year and a half ago that we convened together with the National Security Council in the White House, and we convened a panel of experts to really think about this problem.

David: 所以一年半前，我们在华盛顿大学举办了一场研讨会，与白宫的国家安全委员会共同召集了专家小组，深入探讨这个问题。

David: And our conclusion was, first of all, that the current generation of design methods did not pose a threat compared to the huge threats that already are present in nature. But second, that the way to control things and to make sure is through the **synthetic gene manufacturing** (合成基因制造: 通过化学合成方法生产DNA或RNA片段) step where you go from the computer to the real world.

David: 我们的结论是，首先，与自然界中已存在的巨大威胁相比，当前一代的设计方法并未构成威胁。其次，控制和确保安全的方法是通过合成基因制造步骤，即从计算机到现实世界的转化。

David: And as I said earlier, that's a key step in this process, and that's the one where having gating and control or at least logging, we concluded, will be really, really important. And so we are urging **DNA synthesis companies** (DNA合成公司: 提供定制DNA片段合成服务的公司) to keep track of everything that they're making so that in the event that there is a suspicious outbreak somewhere in the world, you can quickly track where the DNA came from if it was synthetic rather than being of natural origin.

David: 正如我之前所说，这是这个过程中的一个关键步骤，我们认为，在这个环节进行把关和控制，或者至少进行记录，将非常非常重要。因此，我们正在敦促DNA合成公司记录他们制造的一切，以便万一世界某地出现可疑疫情，如果DNA是合成的而非天然来源，可以迅速追溯其出处。

Host: Excuse me. That's great. It seems like there is some thought to how to create this responsibly as we're entering what feels like a really brave new world. And that you believe that there are more benefits to pursuing this than the risks that are presented.

主持人: 抱歉。这太棒了。看来在进入这个感觉像是真正勇敢的新世界时，人们对如何负责任地创造这项技术有所思考。而且您相信，追求这项技术带来的益处远大于其带来的风险。

David: Right, and that's very clear so far. I mean, there are huge numbers of beneficial things that have been done. Even in the area of pathogenic disease, I described the vaccines, the antivirals. So I think the upsides far outweigh the downsides.

David: 是的，到目前为止这一点非常清楚。我的意思是，已经完成了大量有益的事情。即使在病原性疾病领域，我也描述了疫苗、抗病毒药物。所以我认为好处远远超过坏处。

David: The other thing we're doing is we are setting up a committee that's reviewing new software as it's created to make sure that there aren't unforeseen consequences. I would say overall, the risks, if you think about AI and biology compared to AI generally, I think the immediate risk from AI more generally in the form of computer viruses, things that you don't have to instantiate in the real world but that work in software, we're already seeing problems there.

David: 我们正在做的另一件事是，我们正在成立一个委员会，审查新开发的软件，以确保不会出现意想不到的后果。总的来说，我认为，如果将人工智能与生物学结合的风险与一般人工智能的风险进行比较，我认为一般人工智能带来的直接风险，例如计算机病毒，那些不需要在现实世界中实例化但能在软件中运行的东西，我们已经看到了问题。

David: And then of course, we're seeing more broader problems with employment and AI replacing people. I think those are probably the places where AI is going to be really a problem, a negative, rather than AI in the biological realm.

David: 当然，我们还看到了更广泛的就业问题，以及人工智能取代人类的问题。我认为这些可能是人工智能真正成为问题、产生负面影响的地方，而不是生物领域的人工智能。

Host: Well, when you think about the future and where this is headed, we have a question from Nicholas D: "If you see a future where computational design of proteins could potentially displace approaches like evolution, or will it never reach those heights?"

主持人: 那么，当您思考未来以及这项技术的发展方向时，我们有一个来自Nicholas D的问题：“您是否预见到蛋白质的计算设计有可能取代像进化这样的方法，或者它永远无法达到那种高度？”

David: No, I think that already with problems like **antibody design** (抗体设计: 针对特定抗原，通过人工或计算方法设计具有特定结合能力的抗体), **antibody generation** (抗体生成: 生产抗体的过程), antibodies are really kind of the pharmaceutical industry mainstay.

David: 不，我认为在抗体设计、抗体生成等问题上，抗体已经是制药行业的中流砥柱。

David: And generally, the way that antibodies are developed now, it's either from pulling antibodies out of an individual or immunizing an animal or screening through very, very large collection of random libraries for an antibody that has the right property. I think those will be displaced by design because you can be much more intentional and design an antibody that not only binds to the right place on your target to have the effect you want, but also has all the properties needed to really be developed as a drug.

David: 通常，现在开发抗体的方法，要么是从个体中提取抗体，要么是免疫动物，要么是通过非常非常大的随机文库筛选出具有正确特性的抗体。我认为这些方法将被设计所取代，因为你可以更有目的地设计一种抗体，它不仅能结合到靶点上的正确位置以产生你想要的效果，而且还具备作为药物开发所需的所有特性。

David: So I think more and more we're going to see **random selection** (随机选择: 在群体中随机挑选个体进行下一代繁殖或实验) or **random library screening** (随机文库筛选: 通过大规模随机分子库寻找具有特定功能的分子) methods, which are kind of emulating evolution where evolution is also all random mutation, generation, and selection. We're going to see that replaced by intentional protein design.

David: 所以我认为，我们将越来越多地看到随机选择或随机文库筛选方法被有意的蛋白质设计所取代。这些方法有点像模拟进化，因为进化也是随机突变、生成和选择的过程。

David: And that harks back to what I said in my TED Talk where I sort of made the point that human technology outside of biology, you start from first principles. If you want to build a bridge across a river or a flying machine, you don't go looking for a log that has the right shape, but you actually construct it from first principles.

David: 这又回到了我在TED演讲中说过的话，我当时指出，生物学之外的人类技术，你是从第一性原理开始的。如果你想在河上建造一座桥或一架飞行器，你不会去寻找一根形状合适的木头，而是真正地从第一性原理出发进行建造。

David: And so I think now that's becoming more and more a reality throughout biotechnology.

David: 所以我认为现在这在整个生物技术领域正变得越来越真实。

Host: And when you think about your work in protein development, so much of what this conversation has been focused on the things you said in 2019, and when you gave your talk, what do you foresee in six years from now when we speak again? Where do you think things will be? What do you believe will be focused on?

主持人: 当您思考您在蛋白质开发方面的工作时，我们这次对话的许多焦点都集中在您2019年演讲时所说的事情上。那么，当我们在六年后再对话时，您预见到会是怎样一番景象？您认为事情会发展到什么程度？您认为焦点会是什么？

David: I think predicting the future of science is far harder than predicting the structure of a protein or predicting the weather tomorrow. So I think predicting how fast science will progress is a famously impossible challenge.

David: 我认为预测科学的未来远比预测蛋白质结构或明天的天气要困难得多。所以，我认为预测科学进展的速度是一个众所周知的不可能完成的挑战。

David: But I can say broadly speaking, six years from now, I expect to see many more medicines approved for use in humans. I expect to see solutions to major problems across the areas that I've described.

David: 但我可以概括地说，从现在起六年内，我预计会有更多药物获批用于人类。我预计在我所描述的各个领域，将看到重大问题的解决方案。

David: And then I also anticipate that the field will be working on problems that I haven't even mentioned today because I haven't thought of them. So things are changing so fast that what I really hope most is we're solving problems I can't even conceive of now.

David: 然后，我还预计这个领域将致力于解决我今天甚至没有提及的问题，因为我还没有想到它们。所以事情变化得太快了，我最希望的是我们能解决我现在甚至无法想象的问题。

Host: That's wonderful. Well, David, I feel like this has been a wonderful conversation, and just really grateful to you for joining us. We have had so many member questions, so thank you to the members as well. Thank you so much, David, for sharing all of this.

主持人: 太棒了。嗯，David，我觉得这是一次精彩的对话，非常感谢您的加入。我们收到了很多会员的问题，所以也要感谢各位会员。非常感谢您，David，分享了这一切。

David: Yeah. Oh, thanks, thanks to everyone who's listening and contributing questions. It's been great. Thanks to TED for organizing this. And I just want to thank again all the amazing students and postdocs and others I'm working with now and in the past who really made all this work possible and who have actually done all the work really.

David: 是的。哦，谢谢，谢谢所有正在聆听并提出问题的人。这很棒。感谢TED组织了这次活动。我只想再次感谢所有现在和过去与我合作的杰出学生、博士后以及其他人，他们真正使所有这些工作成为可能，并且实际上是他们完成了所有工作。