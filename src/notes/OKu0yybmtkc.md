---
area: society-systems
category: technology
companies_orgs:
- Chelsea Football Club
- Premier League
- ai.io
- Burnley Football Club
- Reliance Foundation
- IOC
- Intel
- MLS
- MLS NEXT
date: '2025-11-07'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- LeBron James
- Cristiano Ronaldo
- Lionel Messi
- Ben
products_models:
- aiScout
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=OKu0yybmtkc
speaker: TED
status: evergreen
summary: 传统体育人才选拔系统存在地域、成本和机会不均等问题，导致许多有潜力的运动员被忽视。本文介绍了ai.io公司如何利用计算机视觉、AI和深度学习技术，通过智能手机应用程序aiScout，为全球各地的年轻运动员提供公平、数据驱动的测试和评估机会。该技术不仅能发现被传统球探遗漏的顶尖人才，还能根据运动员的优势推荐合适的运动项目，从而实现体育人才选拔的民主化和全球化，最终目标是让天赋无处不在，并通过科技实现更公平的竞争环境。
tags:
- llm
- talent
- technology
title: AI如何发现被传统球探遗漏的体育人才
---

### 传统体育选拔的局限性

现在，请大家想象一下体育界的伟大人物。你们会看到什么？很可能是像**勒布朗·詹姆斯**（LeBron James: 美国职业篮球运动员）、**凯特琳·克拉克**（Caitlin Clark: 美国大学篮球运动员）、**萨奎恩·巴克利**（Saquon Barkley: 美国职业美式橄榄球运动员）、**西蒙·拜尔斯**（Simone Biles: 美国体操运动员）、**C·罗纳尔多**（Cristiano Ronaldo: 葡萄牙职业足球运动员）和**梅西**（Lionel Messi: 阿根廷职业足球运动员）这样的运动员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I'm going to start by getting you to visualize sporting greatness. And what do you see? It's probably athletes like LeBron James, Caitlin Clark, Saquon Barkley, Simone Biles, Ronaldo, Messi.</p>
</details>

我们倾向于认为运动员主要来自少数几个国家。因此，如果你认为世界上最优秀的人才只来自这些地方，那我也能理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You see, we tend to think of athletes from quite a small subset of countries. So I'd forgive you for thinking that the best talent in the world just comes from those places.</p>
</details>

但事实并非如此。因为天赋在他们取得体育成就之前就已经存在，而要实现他们的潜力，沿途需要发生很多事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that's not strictly true. Because talent existed long before their sporting greatness, and many things have to happen along the way for them to realize their potential.</p>
</details>

其中一个常被忽视的因素是，他们获得了机会并被看到了。天赋无处不在，但发现天赋可能是一个挑战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, one thing that's commonly overlooked is that they got an opportunity and were visible. You see, talent exists everywhere. It's finding the talent that can be the challenge.</p>
</details>

那么，我们该如何做到这一点呢？通常，这依赖于球探。被球探发现是每个年轻运动员的梦想。你看到老球探坐在看台上，写着笔记，然后你接到电话，他想让你去试训。这对很多人来说都是一个激动人心的幻想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do we do that? Now typically, that's scouting. It's every young athlete's dream to be scouted. You see the old guy up in the bleachers, he's writing his notes, and later you get the call, he wants you to try out. It's a thrilling fantasy for so many people.</p>
</details>

但球探的数量是有限的。我来自英国，那里的**切尔西足球俱乐部**（Chelsea Football Club: 一家位于伦敦的英格兰足球俱乐部）拥有世界上最负盛名、资金最雄厚的青年学院项目之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's only so many scouts. Now I'm from the UK, where Chelsea Football Club have one of the most prestigious and well-funded youth academy programs in the world.</p>
</details>

然而，每个**英超联赛**（Premier League: 英格兰足球顶级联赛）的球队或球探每年只能考察大约2000名球员。但有数百万人参与这项运动。即使在这2000人中，选拔也已经受到球员地理位置、成本因素和可及性因素的极大限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But each Premier League team, or each Premier League scout, can only see about 2,000 players per year. But millions play the game. And even from those 2,000, it's already super limited by the player's geography, their cost factors, their access factors.</p>
</details>

现在，许多年轻人开始自己动手。他们将自己精彩表现的社交媒体剪辑上传到网上。但这只是用一个并非为人才识别而设计的算法，来取代人类决定谁能被看到。我们该如何解决这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lots of young people are now taking that into their own hands. They're uploading social media clips of their best plays online. But now we've just replaced a human with an algorithm that's not designed for talent ID to decide who gets seen. What do we do about that?</p>
</details>

切尔西足球俱乐部根本不可能看到世界上所有的天才。或者说，可能吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's simply not possible for Chelsea Football Club to see every talent in the world. Or is it?</p>
</details>

### AI驱动的解决方案：aiScout的诞生

现在，像**计算机视觉**（Computer Vision: 使计算机能够“看”和理解图像及视频的技术）、**人工智能**（AI: 人工智能）和**深度学习**（Deep Learning: 机器学习的一个分支，通过多层神经网络学习数据表示）这样的技术正在帮助我们弥合这一差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You see, there's technologies now like computer vision, AI and deep learning, that are helping us bridge that gap.</p>
</details>

就我个人而言，我不是球探或教练。我的专业是**生物力学**（Biomechanics: 研究生物体运动的科学）。像我这个行业的许多人一样，我们在体育实验室或与俱乐部合作，旨在提高运动员表现或降低受伤风险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, personally, I'm not a scout or a coach. My route was biomechanics, which is the science of motion. And like many people in my profession, we work in sports laboratories or with clubs with a remit of improving athlete performance or reducing injury risk.</p>
</details>

有一天，当我在实验室工作时，我的现任创始人兼首席执行官**达伦·佩里斯**（Darren Peries）带着他的儿子**里夫**（Reef Peries）走了进来，里夫正受着伤病的困扰。我们开始用所有这些出色的设备分析他。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was working in my lab that one day, my now founder and CEO, Darren Peries, walked in with his son, Reef, who was struggling with an injury, and we started analyzing him with all this wonderful equipment.</p>
</details>

我们聊起了球探问题，他指出球探工作是多么不公平和带有偏见。他亲身经历过，整个未来可能由一个人在一天内凭借个人意见决定。他注意到青年球探工作是多么缺乏数据支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we got talking about the scouting problem, and he noted just how unfair and biased scouting could be. He'd seen it himself. Entire futures could be decided in one day by one person who has an opinion. He noted how completely devoid of data youth scouting can be.</p>
</details>

他问我：“如果我们把所有这些实验室协议、所有数据、所有设备，都整合到一套标准化的智能手机训练中，这样世界上任何地方的任何孩子都能得到公平公正的测试，会怎么样？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And he said to me, what if we took all this lab protocols, all the data, all the equipment, and put them into a set of standardized smartphone drills so any kid, anywhere in the world could be tested fairly and equitably?</p>
</details>

对我来说，这是一个针对真实问题的绝妙愿景。所以我加入了他的团队**ai.io**（ai.io: 一家利用AI技术提供体育解决方案的公司），我们在体育领域构建基于AI的解决方案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For me, it was a brilliant vision to a genuine problem. So I joined his team, ai.io, where we build AI-based solutions across all of sport.</p>
</details>

我们构建的第一个产品是针对当前问题的**aiScout**（aiScout: ai.io公司开发的一款AI驱动的体育人才识别应用）。简单来说，它的工作原理是这样的：孩子免费下载一个应用程序，然后直接用手机录制自己完成预定义训练的视频。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the first thing we built was aiScout for the problem at hand. And here's how it works, simply speaking. Kid downloads an app for free and they record themselves doing these predefined drills directly from the phone.</p>
</details>

我们利用云端的计算机视觉AI来分析这些视频。我们分析22个关键身体部位。我们甚至可以把2D视频转换成推断出的3D模型，并将所有这些数据整合起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We use computer-vision AI in the cloud to analyze that. We analyze 22 key body segments. We can even do things like turn the 2D video into an inferred 3D and bring all that together.</p>
</details>

我们能得到诸如他们跑向哪个方向、如何转身、跳多高、速度、对称性、协调性等等数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We get things like what direction did they run, how did they turn, how high did they jump, the speed, the symmetry, the coordination, and so on.</p>
</details>

### 数据解读与个性化评估

但是，收集原始数据只是问题的一部分。你必须知道如何解读这些数据，并且能够根据这些数据对运动员进行评分。最重要的是，你必须使其对那些寻找人才的人来说具有特异性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But collecting that raw-level data is just one part of the problem. So you've got to know how to interpret that data, and you've got to be able to score an athlete based on that data. And most importantly, you've got to make it specific for those that are looking for talent. Specificity is key here.</p>
</details>

例如，在足球（对美国观众来说是“soccer”）中，每个球队、球探或教练根据他们当时的需求，寻找的东西都有所不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, in football -- soccer, for the Americans in the audience -- each team or scout or coach kind of look for a different thing depending on what they need at that given moment of time.</p>
</details>

有些球队或教练可能希望运动员具有力量和速度，而另一些则可能希望他们具有协调性、技术和出色的身体动作。因此，我们必须根据每个俱乐部的情况，量身定制我们的球探工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So some teams or coaches might want athletes with power and pace, others might want coordination and technique and great body movement. So we have to make our scout, we have to be tailored, on that club-by-club basis.</p>
</details>

为了回答这些问题并真正开发出这款产品，我们与两支英超球队——**伯恩利足球俱乐部**（Burnley Football Club: 一家位于兰开夏郡伯恩利的英格兰足球俱乐部）和切尔西足球俱乐部——建立了合作关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now to answer these questions and really to build out that product, we partner with two Premier League teams, Burnley Football Club and Chelsea Football Club.</p>
</details>

我们首先直接问他们，如果我们能够通过智能手机分析世界上任何一个孩子，并提供足球特定的指标，他们需要知道什么才能使其对他们有用并加以利用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we started by just asking them directly, if we could analyze any kid in the world, from a smartphone and give you football-specific metrics, what do you need to know to make that relevant to you and to use it?</p>
</details>

有趣的是，他们说需要可比较、可基准化、可靠的数据。最重要的是，他们自己和他们将要分析的孩子都需要理解数据来源。不能有任何歧义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And interestingly, they said, comparable, benchmarkable, reliable data. And above all else, both themselves and the kids they'd be analyzing, would need to understand where the data is coming from. There can be no ambiguity.</p>
</details>

于是我们开始与他们一起开发这些预定义的训练项目。包括十米冲刺、反向跳跃、绕锥运球、传球、射门。这并不是什么新鲜事。这些都是球探通常会观察的真实项目，以便对球员进行评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we started developing these predefined drills with them. They were ten-meter sprints, counter-movement jumps, they were dribbling through cones, they were passing, shooting. This is nothing new. This was just genuine things that scouts would normally look at to make an assessment of a player.</p>
</details>

然后我们和那些球探坐下来，查看了大量的视频。你更喜欢球员A还是球员B？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we sat down with those scouts and looked through a ton of video. Do you prefer player A or player B?</p>
</details>

结果发现，球探的艺术实际上极其复杂。许多经验丰富的球探所做的事情都是非常直观的。所以，尽管他们知道自己更喜欢球员B，而且我们大多数人看着视频也能看出来，但他们无法向我们清楚地表达原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now it turns out the art of scouting is actually incredibly complex. So much of what experienced scout does is really intuitive. So whilst they knew they preferred player B, and maybe most of us can, looking at the video here, but they couldn't articulate it to us.</p>
</details>

所以我们必须和他们坐在一起，提问，并将他们的见解转化为我们可以用来评分的东西。我们创建了算法。然后，我们通过这个算法处理了数千个视频。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we had to sit with them, ask the questions, and turn their insights into something we could use to score. We created the algorithm. And with that algorithm, we just pumped thousands of videos through it.</p>
</details>

我们开始建立不同年龄和性别的基准和标准。因为当然，你不能用分析13岁孩子的方式去分析22岁的人。22岁的人几乎总是更高、更强壮、更快。你需要将13岁的孩子与13岁的孩子进行比较，这样你才能真正看出谁脱颖而出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we started to make benchmarks and standards across age and gender. Because of course, you can't analyze a 13-year-old to a 22-year-old. The 22-year-old is almost always going to be bigger, stronger, faster. You need to compare 13-year-olds to 13-year-olds so you can really see who stands out.</p>
</details>

### aiScout的全球影响与未来展望

说到脱颖而出，我永远不会忘记，当我们第一次开发这个应用程序时，我们从英国招募了50名大学生。老实说，他们都是普通的足球运动员，除了一个叫**本**（Ben）的家伙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And talking of standing out, I'll never forget, when we were first developing the app, we recruited 50 college kids from the UK. They were, honestly, kind of average footballers, except this one guy, Ben.</p>
</details>

他们都完成了我们的训练，而他鹤立鸡群，表现非常非常出色。他当时17岁。这个人以前怎么就没被球探发现呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They all did our drills and he was head and shoulders above the rest. Like, just really, really good. Like, he was 17. How has this guy not been scouted before?</p>
</details>

最疯狂的是，他住的地方离切尔西足球俱乐部的训练场只有几分钟的路程。他不是住在某个偏远的村庄。他就在世界上最好的足球学院之一的附近。系统没有看到他，但我们看到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the crazy thing is, he lived just minutes down the road from Chelsea FC training ground. He wasn't in some remote village. He was literally down the road from one of the world's best academies. The system didn't see him, but we did.</p>
</details>

长话短说，这就是我们知道我们正在构建的东西是有效的时刻。因为他获得了切尔西足球俱乐部的试训机会，在U18首秀中进球，后来签约了另一家英超俱乐部，甚至代表国家队出战。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'll cut a long story short here, but this is where we knew what we were building was working. Because he got a trial for Chelsea Football Club, scored in his under-18 debut, and he later signed for another Premier League club and even represented his country.</p>
</details>

但这还不够。我们需要在那些偏远地区进行测试。这项技术应该适用于所有人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that wasn't enough. We needed to test this in those remote places. This should be for everyone.</p>
</details>

理论上，由于所有的繁重工作都在云端完成——视频分析、处理、评分、建模——这意味着无论你来自伦敦还是孟买，只要你能使用智能手机，这项技术就能发挥作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, theoretically, because all the heavy lifting is done in the cloud, the analysis of the video, the processing, the scoring, the modeling, it means that whether you're from London or Mumbai, if you've got access to a smartphone, this thing can work.</p>
</details>

我们很幸运能与印度的**信实基金会**（Reliance Foundation: 印度信实工业集团的慈善机构）合作。他们有一个很棒的项目，每年都会派出球探去寻找最优秀的11岁人才，为他们提供五年的奖学金，让他们可以参与体育运动并获得免费教育。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we're lucky to partner with Reliance Foundation in India. They have an amazing program where they send scouts out every single year to find the best 11-year-old talent to give them five-year scholarships to play sport and have free education.</p>
</details>

其中最优秀的孩子通常会继续在印度踢职业足球。他们面临着和切尔西一样的问题：少数球探只能看到几千人；而可能有数百万人符合条件。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">With the best of those generally going on to play professional sport in India. Same problem as Chelsea. Few scouts can see a few thousand people; potentially millions that are eligible.</p>
</details>

所以他们求助于我们，试图找到一些在偏远地区难以接触到的孩子。他们在WhatsApp上向他们的受众发出了号召。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they turned to us to try and find some of those hard-to-reach kids in difficult locations. And they put out a call on WhatsApp to their audience.</p>
</details>

通过WhatsApp进行这项工作对我们来说是新鲜事，但家长和学生被要求下载应用程序，在手机内完成训练，并直接通过aiScout为信实基金会进行试训。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">New to us to do this on WhatsApp, but the parents and students were asked to download an app and do the drills inside the phone and trial for Reliance Foundation directly from aiScout.</p>
</details>

现在每年有成千上万的孩子这样做。根据他们的数据，表现最好的孩子会被送到现场人才识别日，由球探决定谁能获得这些奖学金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tens of thousands of kids now do this every single year. And the best ones, based on their data, get sent to an in-person talent ID day where the scouts make the decision on who gets those scholarships.</p>
</details>

这是一个很好的例子，说明我们是如何增强球探流程，而不仅仅是取代他们的流程。最成功的例子之一是，有一名球员通过共享社区电话下载了应用程序，他从未参加过有组织的体育运动，却为自己赢得了一份五年奖学金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a great example of how we're augmenting the scouting process, not just replacing their processes. The best example of success was, we've had many there, is one player actually downloaded the app from a shared community phone, had never played organized sport, and got himself a five-year scholarship.</p>
</details>

除此之外，就在去年，**国际奥林匹克委员会**（IOC: International Olympic Committee，简称国际奥委会）及其当时的合作伙伴**英特尔**（Intel: 美国一家半导体和计算机技术公司），就即将举行的**青年奥运会**（Youth Olympics: 国际奥委会为青年人设立的综合性体育赛事）联系了我们，该赛事将在塞内加尔举行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On top of that, only last year, the IOC and their partner at the time, Intel, they reached out to us about the up-and-coming Youth Olympics, which is in Senegal.</p>
</details>

他们有点担心，塞内加尔国家队没有足够的人才来填补青年奥运会的所有参赛队伍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They had a little concern that actually the Senegalese national teams didn't have enough talent to fill all the teams that are going to be in those Youth Olympics.</p>
</details>

这项技术的伟大之处在于：你想踢足球吗？你可以通过我们的应用程序为足球俱乐部试训。你也可以反过来做。根据你的优势，它可以告诉你可能擅长什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, here's the great thing about the technology. You want to play football? You can trial for a football club through our app. You can also do the opposite. Based on your strengths, it can tell you what you might be good at.</p>
</details>

所以，如果你有很强的加速能力和反应力量，那可能是七人制橄榄球或室内足球。如果你有很强的上肢力量和手眼协调能力，那可能是棒球或垒球。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you've got great acceleration, great reactive strength, it could be rugby sevens or futsal. You've got great upper body power and hand-eye coordination. It could be a baseball or a softball.</p>
</details>

这正是我们所做的。我们将应用程序安装到平板电脑中，交给军事领导人和学校教师，他们就站在那里，录制班级里的孩子。几天后，数千名孩子被记录下来，其中40人现在正在为青年奥运会进行训练，项目包括摔跤、田径和足球等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's exactly what we did. We put the app into tablets, we gave it to military leaders and school teachers, and they just stood there and they recorded the kids in their class. A few days into that, thousands of kids later, 40 are now being trained ahead of those Youth Olympics in things like wrestling and athletics and football.</p>
</details>

那么，接下来会如何发展呢？目前，该应用程序通过合作项目、人才识别计划与俱乐部、联合会合作运行，有时还有品牌合作伙伴在应用程序上，成千上万的孩子进行试训和这些训练。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, where does this go from here? So the app today runs through partnership programs, talent ID initiatives, with clubs, with federations, sometimes there are brand partners on the app, where hundreds of thousands of kids trial and do these drills.</p>
</details>

其中数百人取得了成功，现在正在从事职业体育。我们接下来会走向何方？实际上，我们将走向全球，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hundreds of those have had successful outcomes and now playing professional sport. And where do we go from here? Actually we go global with this, right?</p>
</details>

所以它现在是多语言的，并开始在应用程序中推出。多云支持也即将到来。这意味着它可以与云平台无关，我们可以在任何需要合作的地区，将特定国家的功能放入应用程序中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's now multi-language, it's starting to roll out into the app. Multi-cloud is coming. So it can be cloud-agnostic, which means we can put country-specific things into the app in any region that we need to work with.</p>
</details>

就在美国，我们很自豪地宣布，**MLS**（Major League Soccer: 美国职业足球大联盟）——我们在这里称之为“Major League Soccer”——已将此推广到**MLS NEXT**（MLS NEXT: MLS的青年发展项目）计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And right here, in the US, proud to announce the MLS, or Major League Soccer as we know it here, have rolled this out to the MLS NEXT program.</p>
</details>

现在有45,000名孩子每年使用该应用程序三次：季前赛、季中和季后赛，这样我们就可以跟踪和监测他们随时间的变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">45,000 kids right now are using the app three times per year. Preseason, mid-season, postseason so we can track and monitor their changes over time.</p>
</details>

最棒的是，球探和教练可以通过我们的控制中心实时获取所有数据。它不是一个黑盒子，而是他们可以信任并从中学习数据来源的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the great thing is, the scouts and the coaches get all the data in real time via our control center. It's not a black box, but something they can trust and learn from the data and see where that data is coming from.</p>
</details>

我们还会走向何方？大家不难想象，我们如何开始进入家庭医疗和医学等领域。但我们也在为美式橄榄球、篮球、棒球、板球等运动创建运动库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And where else do we go? It's probably not a big leap for you all to imagine how we start to move into things like at-home healthcare and medical. But we're also starting to create the kind of movement libraries for American football, for basketball, for baseball, for cricket.</p>
</details>

因为底层的基本运动模式——切入、减速、跳跃、投掷、击打——在很多运动中都适用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because the underlying movement primitives, the cut, the deceleration, the jump, the throw, the strike, they translate well across quite a lot of sports.</p>
</details>

因为在体育运动中，有一件事永远是真的：天赋是普遍存在的，才华遍布全球的每一个角落。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because one thing in sport is always true. Talent is universal and brilliance exists in every corner of the globe.</p>
</details>

现在，有了技术和你自己的智能手机，你可以让这些天赋显现出来，并创造一个公平的竞争环境。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, with technology and your very own smartphone, you can make that talent visible and level the playing field. Thank you. (Applause)</p>
</details>