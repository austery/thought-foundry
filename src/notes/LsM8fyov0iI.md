---
author: TED
date: '2026-01-26'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=LsM8fyov0iI
speaker: TED
tags:
  - rheology
  - blood-flow
  - medical-diagnostics
  - cardiovascular-disease
title: 流变学：从日常粘稠到生命健康的诊断革命
summary: 本次演讲深入探讨了**流变学**——研究物质流动与形变的科学。演讲者通过花生酱、洗发水和番茄酱等日常用品的生动比喻，解释了**非牛顿流体**的特性。更重要的是，演讲揭示了流变学在**血液动力学**和**心血管疾病**诊断中的关键潜力，指出血液作为一种剪切稀化流体，其粘度异常可能预示着严重健康问题。演讲者强调了提高公众和医学界对流变学认识的紧迫性，并介绍了其利用**微流控芯片**简化诊断流程的研究工作，旨在将这项被忽视的科学转化为挽救生命的工具。
insight: ''
draft: true
series: ''
category: tech-trends
area: tech-engineering
project: []
people: []
companies_orgs: []
products_models: []
media_books: []
status: evergreen
---
### 工程的责任与流变学的起源

童年时期，我常听叔叔讲述他辉煌的航空航天工程生涯。他会绘声绘色地描述他一生中建造的各种机械和设计，并总是说，他选择了最适合自己的职业，因为他能够创造出那么多酷炫的东西。有一次，他告诉我，在一次阿波罗火箭发射前几天，他曾在火箭的鼻锥内部，修复过一件精密设备。这让我着迷不已。听着他的故事，我开始憧憬自己也能建造出各种创新技术，这激励我也走上了工程师的道路。

然而，踏上这条道路后，我逐渐认识到，工程学不仅仅关乎我们能建造出多么了不起的东西。这项工作中还蕴含着至关重要的责任，有时甚至关系到拯救人类生命。简单来说，工程师的失误可能导致生命消逝。这正是我读博导师四年前在我开始与他共事时所告诫我的。当我决定选择化学工程作为研究方向时，我从未想过我的博士研究会涉及一个名为“流变学”的领域。但流变学足够吸引我，于是我花了几年时间去深入理解它。

<details>
<summary>Original English</summary>
When I was a kid, my uncle
would tell me these great stories
about his aerospace engineering career.
He used to tell me all about the machinery
and the designs that he built
throughout his life,
and always said he picked
the perfect career for himself
because of all the cool stuff
he was able to build.
Once, he told me about working
in the nose cone of an Apollo rocket,
fixing some sensitive piece of equipment
just a few days before its launch.
I was enamored by this.
Listening to his stories
had me daydreaming
about all the innovative
technology that I could build,
and it's what inspired me
to become an engineer, too.
Since going down this path,
I've learned there's more to engineering
than just the amazing stuff we build.
There's also a vital
responsibility in the work,
sometimes with the ability
to save human life.
Put simply, when engineers
mess up, people die.
And this is what my PhD
advisor warned me about
when I started working
with him four years ago.
When I decided to follow the path
of chemical engineering,
I could have never imagined
I'd be doing my PhD
in a field of study called rheology.
But rheology was interesting to me enough,
so I spent a few years
in my life understanding it.
</details>

### 通过日常现象揭示流变学奥秘

**流变学**（Rheology: 研究物质流动和形变的科学）主要是通过测量材料的**粘度**（Viscosity: 衡量流体抵抗流动能力的度量），来确保其能符合预期功能。流变学最适用于那些既非纯粹液体也非纯粹固体的材料，而是介于两者之间的某种组合。流变学的概念在比较不同产品时最容易理解，因为它几乎是市场上所有消费品的核心要素，无论是能均匀涂抹在手上的**乳液**（lotion），还是能在所有工作温度下保持润滑的**机油**（motor oil），抑或是能在运抵工地前保持不硬化的**水泥**（cement）。此外，在众多行业中还有无数其他例子。

现在，请允许我带大家走进流变学实验室，进行一次现场演示。首先，每个人都有自己偏爱的花生酱。除非你过敏。也许你喜欢那种能牢牢粘在面包上的，或者你更喜欢那种自己无法支撑、一倒就滑下来的。好吧，这个（演示中的花生酱）似乎不太行，但你们懂我的意思。（笑声）也许这里有点冷？（笑声）

那么，洗发水呢？洗发水的目的是从瓶子里挤出来，然后能停留在你的手上，这样你就能精确地量取一滴来清洗头发。但当洗发水快用完时会怎样？你往里面加水，想把最后一点也用上。结果，它再也无法停留在你的手掌中，彻底破坏了其核心功能之一。

现在，轮到我最喜欢的例子了，也是最后一个：番茄酱。因为不同品牌的番茄酱在质地上存在巨大差异。对于这个，我们将做一个小实验。每个烧杯里都有一种番茄酱，当我们翻转它们时，请仔细观察，看哪种流得更快。移开这个……好的，我们可以清楚地看到，一种番茄酱明显比另一种更浓稠。而这恰好是我偏爱的那种。好了。我得擦擦手。（笑声）

所有这些材料都属于一类被称为**非牛顿流体**（Non-Newtonian Fluids: 粘度随施加应力或应变率变化的流体）的物质。流变学被用来测量这些材料不同的流动特性，以便它们能够被稳定地生产出来，并具有其应用中最理想的质地。

<details>
<summary>Original English</summary>
Rheology is the study of flow
and deformation of materials.
It's mainly a method
to measure the viscosity
or thickness of a material
so that it works
for its intended function.
Rheology is best used for materials
that are neither liquid nor solid,
but some combination of both.
And the concepts of rheology
are easiest to understand
when we compare across different products,
because it is essential to almost
every consumer product on the market,
whether that's a lotion
that evenly coats your hands,
or a motor oil that lubricates
at all operating temperatures,
or cement that won't harden
before making it to the job site.
And there's so many other examples,
across many industries.
So why don't I take you over
to the rheology lab
where I can demonstrate this for you?
OK, first off, everybody
has their favorite peanut butter.
Unless you're allergic.
Maybe you prefer the one
that will stick to the bread like that.
Or you prefer the one that can't
support itself and just slides right off.
Well, it's not doing it so much,
but whatever, you know how it goes.
(Laughter)
Maybe it's a little cold in here, alright?
(Laughter)
But how about shampoo?
So the purpose of shampoo
is to squeeze from the bottle ...
and sit on your hand
so that you can sufficiently
measure out a drop that cleans your hair.
But how about when that shampoo
gets a little low?
And now you fill it up with water
so that you can save
that last little drop.
And now ...
it no longer stays
in the palm of your hand,
completely ruining
one of its core functions.
OK, now for my favorite
example, the last one,
that's ketchup.
Because there's such a huge
difference in the texture
between those popular brands.
And for this one, we'll do
a little bit of an experiment.
We have one ketchup in each beaker,
and when I flip them,
we're going to watch closely
to see which one drains faster.
Move that out of the way ...
OK, we can see there's clearly one ketchup
that's much thicker than the other.
And that happens to be
the one that's my preference.
Alright.
I need to wipe my hands off.
(Laughs)
OK.
So all of these materials
are a part of a class of materials
called non-Newtonian fluids.
And rheology is used to measure
the different flow properties
of each of these materials
so that they can be made reproducibly
and with the most desired texture
for their application.
</details>

### 血液流变学：心血管健康的隐形信号

也许到这里，你已经看到了流变学在产品制造中的价值。但为什么你的血液也应该像番茄酱一样流动呢？我最感兴趣的流变学应用之一是**医学诊断**。你看，我们的血液不像你想象的那样像水一样流动。它更接近番茄酱的流动方式。这是因为血液本身就是一种非牛顿流体，就像我刚才演示的所有材料一样。具体来说，它是一种**剪切稀化流体**（Shear-thinning fluid: 在剪切速率增加时粘度降低的流体）。它之所以这样，是因为这对于健康的血液流动至关重要。如果你的血液粘度过高，发生**血栓**（clot）或潜在**动脉瘤**（aneurysm）的几率就会增加。因此，测量这些信息可以为医生提供另一种检测**心血管疾病**（Cardiovascular disease: 影响心脏或血管的疾病）的方法。

然而，这项技术尚未得到广泛应用，因为流变学是一个小众的技术工程领域，公众对其知之甚少。但我敢打赌，在座的各位都能想到生活中至少有一个人患有或曾经患有心脏疾病。一些研究表明，40岁以上人群中高达46%患有某种形式的**冠状动脉粥样硬化**（Coronary atherosclerosis: 动脉壁上斑块积聚导致血管狭窄的疾病），这是一种慢性病，斑块会在动脉中积聚并使其狭窄，从而减少血流。在美国，有四分之一的死亡是由心脏病引起的。而这些疾病中的一个主要挑战在于早期检测，以便药物和治疗有足够的时间发挥作用。

医生通常使用**血压**（blood pressure）这一指标来指导心血管疾病的药物和治疗决策，而血压监测已经进行了300多年。想象一下，在过去的300年里，如果医生不知道血压监测，将会有无数不必要的痛苦。而**血液流变学**（Blood rheology）目前就处于这样一个阶段。尽管血液粘度已被研究了100多年，血液流变学家也已显示出其与心血管疾病显著相关的证据，但它仍未被广泛用作诊断工具。

<details>
<summary>Original English</summary>
Maybe by now you see the value
of rheology for product manufacturing.
But why should your blood
flow like ketchup?
Well, one application of rheology
that I'm most interested in
is in medical diagnostics.
You see, our blood,
it doesn't flow like water,
how you might imagine.
Rather, it flows a bit close to ketchup.
And that's because
blood is a non-Newtonian fluid,
just like all the materials
in my demonstration.
Specifically, it's a shear-thinning fluid.
And it does this because it's necessary
for healthy blood flow.
If your blood's viscosity is too high,
there's a higher chance
of developing something like a clot,
or potentially an aneurysm.
So measuring this information
would allow physicians another method
to detect for cardiovascular disease.
Yet it's not being used,
because rheology is this niche
technical engineering field,
largely unknown to the public.
But I bet everyone here can think
of at least one person in their lives
who has or had a heart condition.
Some studies show that up to 46 percent
of people over the age of 40
have some form
of coronary atherosclerosis,
which is a chronic condition
where plaque builds up in your arteries
and narrows them, reducing the flow.
One quarter of deaths in the United States
are caused by heart disease.
And one major challenge within
these diseases is to detect them early,
so that medication and treatment
have enough time to take effect.
Blood pressure is a metric
commonly used by physicians
to inform their decisions for medications
and treatment of cardiovascular disease,
and blood-pressure monitoring
has been going on for over 300 years.
Now, imagine the past 300 years,
if physicians didn't know
about blood-pressure monitoring,
there would be countless
unnecessary suffering.
This is the stage
that blood rheology is at.
Though blood's viscosity
has been studied for over 100 years,
and blood rheologists
have shown significant evidence
correlating it to cardiovascular disease,
it's still not widely used
as a diagnostic tool.
</details>

### 弥合认知鸿沟与技术革新之路

提高对流变学的认识是必要的，这样它才能像血压监测一样广为人知。血液流变学是医生可以与工程师合作的领域之一，以便我们能够主动创造解决方案，将这些知识付诸实践。我作为一名博士生，部分工作就是致力于简化流变学测量。在研究血液流变学及其在心血管疾病诊断中的应用的同时，我还在构建一个小型**微流控芯片**（Microfluidic chip: 在微小通道内处理和分析微量流体的设备）。

我在这项工作中的目标是，能够在一个小巧、廉价、便携的设备中测量出目前只能通过一台笨重、固定、价值五十万美元的机器才能获得的相同流变学信息。这将大大简化流变学测量，使其对更多医生来说更加便捷。一些医生已经开始使用血液流变学来辅助他们的患者护理，并且迄今为止看到了积极的结果。但就像血压监测仪一样，当公众对这项技术有了更深的认识时，我们都会受益，从而帮助改善心血管疾病的治疗。

<details>
<summary>Original English</summary>
Spreading awareness
about rheology is necessary
so that it becomes known
as commonly as blood-pressure monitoring.
Blood rheology is one of those areas
where physicians can work
together with the engineers
so that we can proactively
create solutions
that put this knowledge into practice.
Some of my work as a PhD student
is to help simplify
the rheological measurement.
While I'm studying the rheology of blood
and its use for cardiovascular
disease diagnosis,
I'm also building a small
microfluidic chip.
My goal in this work is to measure
the same rheological information
in a small, cheap, portable device
that we're currently able to do
in a bulky, stationary,
half-a-million-dollar machine.
This could simplify
the rheological measurement,
making it more accessible
for many doctors.
And some physicians
have begun to use blood rheology
to augment their patient care,
and they've seen positive results so far.
</details>

### 行动呼吁：提升意识，拯救生命

因此，我请求大家与你生命中的某个人谈谈这项科学。如果你身处医学界，我希望你仔细审视血液流变学。深入研究这项科学，看看你如何在你的领域中应用它。血液流变学蕴含着大量关于我们健康宝贵的信息。如果我们能克服它的晦涩难懂，我们或许就能帮助解决一些我们最紧迫的现代医学难题。如果我们能稍微提高一点意识，我们就能拯救生命。

（欢呼和掌声）
<details>
<summary>Original English</summary>
But just like the blood-pressure monitor,
we'll all be better off when the public
has a greater awareness of this technology
so that we can help
improve cardiovascular disease.
And so that's why I'm asking you
to just have a conversation
with someone in your life
about this science.
And if you're in the medical community,
I want you to take a closer look
at blood rheology.
Dive into this science
and see how you might be able
to use it in your field.
There's so much valuable information
in blood rheology
that tells us about our health.
And if we can just get over its obscurity,
we might be able to help solve
some of our most pressing
modern medical issues.
If we just spread a little awareness,
we could save lives.
(Cheers and applause)
</details>