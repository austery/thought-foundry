---
area: society-systems
category: technology
date: '2025-12-09'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Game of Thrones
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=STUwbUCEtUw
speaker: TED
status: evergreen
summary: 本文介绍了SPARROW系统，一个由AI驱动、太阳能供电的远程观测设备网络，旨在彻底改变生物多样性数据的收集方式。通过实时数据传输、边缘AI处理和卫星通信，SPARROW解决了传统野外数据收集缓慢且耗时的问题，实现了动物自动识别、声学分类及早期火灾预警。文章强调了简单设计的重要性，并呼吁为全球的环保工作者提供更好的工具。
tags:
- ai-application
- environment
- health
- remote-monitoring
title: AI设备如何实时保护自然：SPARROW的创新与实践
---

### 挑战重重的自然保护工作

让我向大家介绍安德烈斯·罗哈斯。每隔几周，安德烈斯都会深入哥伦比亚雨林徒步，穿过泥泞和成群的蚊子。这并非为了冒险，更不是为了乐趣，而是为了完成他的工作。他需要更换**红外相机**（camera traps: 自动拍摄野生动物的设备）和**生物声学设备**（bioacoustic devices: 记录生物声音的设备）的电池和存储卡。这正是当今**保护科学**（conservation science: 旨在保护生物多样性和生态系统的科学领域）的关键基础设施。像安德烈斯这样的人是英雄，正是由于他们的努力，许多物种才得以从灭绝的边缘被拯救回来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me introduce you to Andrés Rojas. Every couple of weeks, Andrés hikes deep in the Colombian rainforest, passing through mud and swarms of mosquitoes. Not for adventure, definitely not for fun, but to do his job. He needs to replace batteries and change memory cards of camera traps and bioacoustic devices. This is the critical infrastructure of conservation science today. People like Andrés are heroes and thanks to their effort, they have saved species from the brink of extinction.</p>
</details>

全球有20万名环保工作者，他们都有一个共同点：为了完成工作，他们需要数据。然而，我们生活在一个有趣的世界，冰箱能发短信提醒你牛奶快用完了，但环保工作者却仍需徒步数日，只为确认是否有动物经过。今天的环保工作是英勇的，是必要的，但却缓慢得令人痛苦。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are 200,000 conservationists in the world, and all of them share one thing in common. To do their job, they need data. But we live in an interesting world where we have refrigerators that can text you if you’re running out of milk, [but] conservationists still need to hike for days just to see if an animal passed by. Conservation today is heroic, is needed, but is painfully slow.</p>
</details>

去年，我在一个生物多样性会议上自豪地展示了我们最新的一些**AI模型**（AI models: 人工智能模型）。但那实际上是一个非常令人谦卑的时刻。因为在向他们展示时，我意识到，尽管他们正在使用我们的模型，但一旦你了解了他们所必须经历的麻烦——从安装这些设备、收集数据，到最终有时间分析数据——我便意识到我们的解决方案并没有带来太大的改变。我意识到，为了真正有所作为，我们必须彻底重塑生物多样性数据的工作方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Last year I was proudly presenting at a biodiversity conference some of our latest AI models. But it was in fact a very humbling moment. Because, when presenting to them, I realized that even though they were using our models, once you understood the hassle that they needed to go through, from installing these devices to collecting the data to eventually [having] time to analyze it, I realized that our solutions were not making such big of a difference. I realized that in order for us to make a difference, we need to completely reinvent how data works in biodiversity.</p>
</details>

### SPARROW：数据收集的新范式

这就是我们开发**SPARROW**（Solar-Powered Acoustic Remote Recording Observation Watch: 太阳能声学远程记录观测站）的原因。SPARROW是一个小型设备网络，它在自然环境中充当一个中心枢纽，连接红外相机、声学设备和各种传感器，利用太阳能处理信息。它通过**边缘计算**（on the edge: 在数据源头或附近进行数据处理，而非传输到中央服务器）的方式，使用**低压图形处理器**（low-voltage GPU: 功耗较低的图形处理单元，适用于资源受限环境）来处理信息。然后，通过**低轨卫星**（low-orbit satellite: 运行在地球低轨道的卫星，用于数据传输）将结果传回。有了SPARROW，你只需安装一次，就不再需要徒步去收集数据，你可以随时在线连接并实时查看数据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why we developed SPARROW. SPARROW stands for Solar-Powered Acoustic Remote Recording Observation Watch. SPARROW is a small network of devices that act as a hub in the middle of nature, connecting to camera traps, acoustic devices, sensors, processing the information using solar power. Processing the information on the edge using a low-voltage GPU. Sending results back using a low-orbit satellite. With SPARROW, you install it once, you no longer need to hike to collect data, you can connect online and see the data real-time.</p>
</details>

### 简单设计的力量

我人生中最大的教训之一是，我们人类对复杂性上瘾。我们喜欢复杂的项目，也喜欢复杂的事物。这就是为什么我们在给行李箱装轮子之前，就已经把人送上了月球。（笑声）别误会我的意思，如果你想给人留下深刻印象，你的解决方案可以很复杂。但如果你想对世界产生影响，如果你想让人们使用你的解决方案，那么你的解决方案就需要简单。构建简单的解决方案很难，但绝对值得付出努力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of my biggest lessons in life is the realization that we, as humans, are addicted to complexity. We like complex projects and we like complex things. This is the reason we put a person on the Moon before we added wheels to your luggage. (Laughter) Don't get me wrong, if you want to impress people, your solutions can be complex. If you want to have an impact in the world, if you want people to use your solutions, your solutions need to be simple. Building simple solutions is hard, but it's certainly worth the effort.</p>
</details>

这就是为什么我们设计SPARROW最重要的原则是保持简单。易于开发，易于部署，易于组装。SPARROW是**开源**（open source: 软件源代码公开，允许用户查看、修改和分发）的。任何人，从保护科学家到研究人员，再到公园管理员，都可以使用并改进它。你不需要购买一个SPARROW设备。你购买的是现成的组件，然后自己组装。如果你有能力组装自己的**宜家家具**（Ikea furniture: 瑞典家具零售商宜家销售的自助组装家具），我知道这并非人人都能做到——（笑声）那么你就准备好组装一个SPARROW了。即使看起来简单，SPARROW实际上也相当强大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why our most important principle designing SPARROW is to keep it simple. Simple to develop, simple to deploy, simple to assemble. SPARROW is open source. Anyone, from conservation scientists to researchers to park rangers can use it and improve upon it. You don't buy a SPARROW. You buy off-the-shelf components and you assemble it together. If you have the ability to assemble your own Ikea furniture, and I know that's not for everybody -- (Laughter) you're ready to assemble a SPARROW. Even if simple, SPARROW is actually quite powerful.</p>
</details>

### SPARROW的先进能力：视觉与声学AI

红外相机是一种四十年前就已问世的技术。它们带有一个传感器，每当检测到移动时，就会拍下一张照片。其中一些移动是由动物引起的，但大部分移动则是由风或其他移动物体造成的。这就是为什么今天红外相机拍摄的大多数照片看起来都像这些一样，里面没有动物。这对环保工作者来说是个大麻烦，因为为了获得几张他们所关心物种的照片，他们需要审查数千张照片，耗费数百小时的时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Camera traps is a technology that was created four decades ago. They have a sensor, and any time that they see movement, they take a picture. Some of that movement is caused by animals. Majority of that movement is caused by wind or something else that moves. That's why majority of the pictures that camera traps took today look like these ones. No animals in them. This is a big hassle for conservationists because in order for them to get just a few pictures of the species they care [about], they need to review thousands of pictures, costing them hundreds of hours of their time.</p>
</details>

SPARROW解决了这个问题。通过SPARROW，我们拥有能够自动分类和识别照片中动物的AI模型。但SPARROW的功能远不止于此。SPARROW不仅能找到一只长颈鹿，它还能找到“那只”长颈鹿。像长颈鹿这样的动物拥有独特的斑纹，这些斑纹不会随时间改变。你可以利用这些斑纹进行**重识别**（re-identify: 再次识别特定个体），这就像指纹一样，你可以用它们来重识别那只特定的长颈鹿。**动物重识别**（animal re-identification: 通过独特特征识别同一动物个体）对保护工作至关重要，因为它能帮助他们了解物种的存活率，甚至测量种群数量。SPARROW可以自动完成这项工作。得益于我们与**野性自然研究所**（Wild Nature Institute: 一个致力于野生动物保护的组织）的合作，我们今天已将这一模型运行在SPARROW上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SPARROW solves this problem. With SPARROW, we have AI models that can automatically classify and identify the animals in them. But SPARROW goes further. SPARROW not only can find a giraffe, SPARROW can find that giraffe. Animals like giraffes have a unique pattern, and that unique pattern doesn't change over time. You can use these to re-identify, it's like a fingerprint, you can use [them] to re-identify that particular giraffe. Animal re-identification is critical for conservation because it allows them to understand things like survival or even measure population. SPARROW can automatically do this. And thanks to our collaboration with the Wild Nature Institute, we have this model running in SPARROW today.</p>
</details>

虽然一张图片可能胜过千言万语，但如果我们只关注图片，我们可能会“只见树木不见森林”。当你看到这样一张图片时，你可能看不到任何动物。但如果你用心聆听，故事就不同了。（动物叫声）SPARROW具备分离和分类声音的能力。例如，这里有一只青蛙。（青蛙叫声）那是一只蝉。（蝉鸣声）那是一只金刚鹦鹉。（金刚鹦鹉叫声）感谢SPARROW，通过声音，我们能够衡量森林的真正健康状况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While a picture might be worth a thousand words, if we only focus on pictures, we might be missing the forest for the trees. When you look at a picture like this, you don't see any animal. But if you listen, the story is different. (Animals vocalizing) SPARROW has the ability to isolate and classify sounds. Here, for example, there's a frog. (Frog croaks) That's a cicada. (Cicada buzzes) That's a macaw. (Macaw chatters) Thanks to SPARROW, through sound, we can measure the true health of a forest.</p>
</details>

从图片中识别动物并不难，但识别声音需要非常深厚的专业知识。像来自**哥伦比亚生物多样性基金会**（Fundación Biodiversa Colombia: 一个致力于哥伦比亚生物多样性保护的基金会）的宝拉·凯塞多（Paula Caycedo）这样的人就拥有这种专业知识。在每次考察中，她会收集长达600小时的声音资料。然后，她会逐小时地聆听这些录音。这就像是把《权力的游戏》整整八季完整地“刷”了十遍——（笑声）只为了获取她所关心动物的几个样本。SPARROW可以帮助像宝拉这样的人。宝拉可以训练SPARROW专注于特定的动物或特定的叫声，从而节省数百小时的时间，让她能够专注于她最擅长的事情：更好地理解并帮助保护她所热爱的动物。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Identifying an animal from a picture is not difficult. Identifying sound requires very deep expertise. People like Paula Caycedo from Fundación Biodiversa Colombia have this expertise. In every expedition, she collects 600 hours' worth of sounds. And then she listens to every one of these hours. This is like binge watching the whole complete eight seasons of “Game of Thrones” ten times -- (Laughter) just to get a few samples of the animal she cares [for]. SPARROW can help people like Paula. Paula can train SPARROW to focus on a particular animal or a particular call, so she can save hundreds of hours of her time, so she can focus on what she does best: having a better understanding and helping protect the animals she loves.</p>
</details>

### 超越数据收集：实时预警与未来愿景

由于SPARROW在线连接，它实际上可以发送警报。**野火**（wildfires: 在野外或森林中不受控制地蔓延的火灾）是全球性的重大威胁，它会夺走生命，造成数十亿美元的基础设施损失，并彻底摧毁一些最重要的生物多样性生态系统。在野火中，每一分钟都至关重要。如果能及早发现，你或许可以用铁锹将其扑灭。但如果你等待，你将需要推土机、空中灭火飞机，有时甚至需要奇迹。SPARROW具备早期火灾探测的能力，并能向有关部门发送警报。有了SPARROW，我们不仅在收集数据，我们还能根据数据采取行动，这些数据可以帮助拯救生命。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because SPARROW is connected online, SPARROW can actually send alerts. Wildfires are a major global threat, costing lives, billions in infrastructure and the complete destruction of some of the most important biodiversity ecosystems. In a wildfire, every minute counts. Detect it early, and you can stop it with a shovel. But if you wait, you will need bulldozers, air tankers and sometimes a miracle. SPARROW has the ability to do early detection of fire and send alerts to authorities. With SPARROW, we're not only collecting data, we can act on that data, and that data can help save lives.</p>
</details>

到2025年底，我们将在所有大陆部署SPARROW。SPARROW将改变生物多样性数据的工作方式。如今，保护工作的速度取决于数据的速度，当一位环保工作者安装设备后，从数据收集到最终分析，通常需要数月，有时甚至一年。有了SPARROW，我们希望将这个时间从数月缩短到数日。对于某些物种而言，这种差异，这种“时间差”，可能就是生存与灭绝之间的区别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the end of 2025, we will have SPARROW running in all continents. SPARROW will change the way biodiversity data works. Today, conservation moves at the speed of data, and when a conservationist installs a device, to the time that it takes for that data to eventually get analyzed today, it takes months, sometimes a year. With SPARROW, we want to move from months to days. For some species, this difference, this delta, can be the difference between survival and extinction.</p>
</details>

我将这次演讲献给所有致力于甚至牺牲生命来保护地球生物多样性的环保工作者。他们或许没有披风，但毫无疑问，他们是超级英雄。然而，他们需要我们的帮助。我们的工作、我们的责任和我们今天的承诺是，我们将为他们提供我们所能提供的最佳工具，让他们拥有战斗的机会。谢谢大家。（欢呼和掌声）
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I dedicate this talk to the conservationists out there who have dedicated and even sacrificed their lives to help protect biodiversity on this planet. They might not wear capes, but make absolutely no mistake, they are superheroes. Yet they need our help. Our job, our responsibility, and our commitment today is that we will provide them with the best tools we can so they have a fighting chance. Thank you. (Cheers and applause)</p>
</details>