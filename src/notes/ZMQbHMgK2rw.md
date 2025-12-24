---
area: tech-insights
category: technology
companies_orgs:
- Google
- IEEE
- Onshape
date: '2023-05-24'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Claude Shannon
products_models:
- Theseus
- Red Comet
- Mitee 3
- Mokomo08
- Tesla Roadster
project:
- ai-impact-analysis
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=ZMQbHMgK2rw
speaker: veritasium
status: evergreen
summary: 本文深入探讨了微型鼠（Micromouse）这项历史悠久的机器人竞赛。从克劳德·香农的早期迷宫鼠“忒修斯”如何启发人工智能领域，到IEEE微型鼠迷宫大赛的诞生与演变，文章详细介绍了比赛规则、多种迷宫求解算法（如深度优先、广度优先和洪水填充），以及推动微型鼠速度与控制力提升的重大创新，包括对角线路径和真空吸附风扇技术。它揭示了这场看似简单的竞赛如何不断挑战机器人软硬件的极限，并鼓励更多人参与其中。
tags:
- competition
- history
- innovation
- llm
- maze-solving
title: 微型鼠：一场持续近半世纪的迷宫竞速与机器人创新之旅
---

### 引言：微型鼠竞赛的魅力与挑战

这只小小的机器人鼠可以在短短六秒内完成迷宫。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This tiny robot mouse can finish this maze in just six seconds.</p>
</details>

每年，世界各地的人们都会参加这项历史最悠久的机器人竞赛。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every year, around the world, people compete in the oldest robotics race.</p>
</details>

目标很简单：以最快的速度到达迷宫终点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The goal is simple: get to the end of the maze as fast as possible.</p>
</details>

第二名选手仅以20毫秒之差落败。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The person who came second lost by 20 milliseconds.</p>
</details>

但竞争已经变得异常激烈。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But competition has grown fierce.</p>
</details>

当有人看到我的设计时，他们说：“你疯了！”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When somebody saw my design, they said, "You're crazy!"</p>
</details>

为什么会有如此大的张力？赌注是什么？荣誉吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why is there so much tension? What's riding on it? Honor?</p>
</details>

### 微型鼠的起源：从“忒修斯”到全球竞赛

1952年，数学家**克劳德·香农**（Claude Shannon: 信息论的创始人）建造了一只名为**忒修斯**（Theseus: 一种电子鼠）的电子鼠，它能够解决迷宫问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1952, mathematician Claude Shannon constructed an electronic mouse named Theseus that could solve a maze.</p>
</details>

让这只老鼠变得智能的诀窍，隐藏在迷宫本身内置的一台由电话继电器开关组成的计算机中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The trick to making the mouse intelligent was hidden in a computer built into the maze itself, made of telephone relay switches.</p>
</details>

这只老鼠本质上只是一个带轮子的磁铁，它通过一个由继电器开关位置控制的电磁铁来移动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The mouse was just a magnet on wheels, essentially, following an electromagnet controlled by the position of the relay switches.</p>
</details>

**Claude:** 他现在正在使用一种相当复杂的试错策略探索迷宫。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He is now exploring the maze using a rather involved strategy of trial and error.</p>
</details>

当他找到正确的路径时，他会将信息记录在他的记忆中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As he finds the correct path, he registers the information in his memory.</p>
</details>

之后，我可以把他放在他已经探索过的迷宫的任何部分，他就能直接到达目标，而不会走错一步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Later, I can put him down in any part of the maze that he's already explored, and he'll be able to go directly to the goal without making a single false turn.</p>
</details>

**忒修斯**常被认为是机器学习的首批范例之一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Theseus is often referred to as one of the first examples of machine learning.</p>
</details>

谷歌（Google）的一位主管最近表示，它启发了整个人工智能（AI）领域。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A director at Google recently said that it inspired the whole field of AI.</p>
</details>

25年后，电气电子工程师学会（**IEEE**：Institute of Electrical and Electronics Engineers，一个全球性的专业技术组织）的编辑们听闻了一场电子鼠竞赛，或者他们所听说的“le mouse electronique”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">25 years later, editors at the Institute of Electrical and Electronics Engineers, or IEEE, caught wind of a contest for electronic mice, or le mouse electronique, as they had heard.</p>
</details>

他们欣喜若狂，这些是**忒修斯**的继承者吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They were ecstatic. Were these the successors to Theseus?</p>
</details>

但有些东西在翻译中失传了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But something had been lost in translation.</p>
</details>

这些“老鼠”只是装在盒子里的电池，而不是能够智能行为的机器人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These mice were just batteries in cases, not robots capable of intelligent behavior.</p>
</details>

但这个误解一直伴随着他们，他们想知道：“我们为什么不能自己举办那场比赛呢？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the misunderstanding stuck with them, and they wondered, "Why couldn't we hold that competition ourselves?"</p>
</details>

1977年，**IEEE**的“惊人微型鼠迷宫大赛”（Amazing Micro-Mouse Maze Contest）公告吸引了超过6000名参赛者，但成功完成比赛的选手数量迅速减少。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1977, the announcement for IEEE's Amazing Micro-Mouse Maze Contest attracted over 6,000 entrants, but the number of successful competitors dwindled rapidly.</p>
</details>

最终，1979年只有15名参赛者进入决赛。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Eventually, just 15 entrants reached the finals in 1979.</p>
</details>

但到那时，这项比赛已经引起了足够的公众兴趣，甚至在全国晚间新闻中播出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But by this point, the contest had garnered enough public interest to be broadcast nationwide on the evening news.</p>
</details>

就像激发这场比赛的谣言一样，微型鼠（Micromouse）开始在世界各地传播。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just like the rumor that inspired the competition, Micromouse began to spread across the world.</p>
</details>

**Group:** 微型鼠！
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Micromouse!</p>
</details>

即使是排名前二或前三的人，你也能看到他们试图设置他们的老鼠，他们几乎找不到要按的按钮，因为这绝对令人神经紧张。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even people in the top two or three, you can see them trying to set their mice up, and they can barely find the buttons to press, because it's absolutely nerve-racking.</p>
</details>

这无关乎比赛类型，无论是赛马、赛车还是赛鼠，如果你有一丝竞争精神，你都会想赢，对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It doesn't matter what it was, it could be horse racing, it could be motor racing, it could be mouse racing, If you have a shred of competitiveness in you, you'd wanna win, right?</p>
</details>

### 微型鼠的规则、挑战与策略

就像真正的老鼠一样，微型鼠必须完全自主。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just like a real mouse, a Micromouse has to be fully autonomous.</p>
</details>

没有互联网连接，没有全球定位系统（GPS）或遥控，也不能推它来帮助它脱困。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">No internet connection, no GPS or remote control and no nudging it to help it get unstuck.</p>
</details>

它必须将其所有的计算、电机、传感器和电源都装在一个长宽不超过25厘米的框架内。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has to fit all its computing, motors, sensors, and power supply in a frame no longer or wider than 25 centimeters.</p>
</details>

老鼠的高度没有限制，但规则不允许攀爬、飞行或任何形式的燃烧，因此例如火箭推进就不在考虑范围内。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There isn't a limit on the height of the mouse, but the rules don't allow climbing, flight, or any forms of combustion, so rocket propulsion, for example, is out of the equation.</p>
</details>

迷宫本身是一个边长约三米的正方形，被墙壁分隔成宽度仅为18厘米的走廊。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The maze itself is a square about three meters on each side, subdivided by walls into corridors only 18 centimeters across.</p>
</details>

2009年，引入了半尺寸微型鼠类别，其老鼠每边小于12.5厘米，路径宽度仅为9厘米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in 2009, the half-size Micromouse category was introduced, with mice smaller than 12 1/2 centimeters per side, and paths just nine centimeters across.</p>
</details>

迷宫的最终布局只在每场比赛开始时才揭示，之后参赛者不允许更改老鼠的代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The final layout of the maze is only revealed at the start of each competition, after which competitors are not allowed to change the code in their mice.</p>
</details>

三大比赛，即全日本、台湾和美国的**APEC**（Asia-Pacific Economic Cooperation: 亚太经济合作组织，此处指其相关的微型鼠比赛），通常将老鼠在迷宫中的时间限制为七到十分钟，并且老鼠只允许从起点到终点进行五次尝试。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The big three competitions, All Japan, Taiwan, and USA's APEC, usually limit the time mice get in the maze to seven or 10 minutes, and mice are only allowed five runs from the start to the goal.</p>
</details>

所以如果你花很多时间搜索，那就会受到惩罚。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you spend a lot of time searching, that's a penalty.</p>
</details>

有道理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Makes sense.</p>
</details>

所以大多数微型鼠的策略是，在第一次运行中仔细学习迷宫并寻找到达目标的最佳路径，同时不浪费太多时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the strategy for most Micromice is to spend their first run carefully learning the maze and looking for the best path to the goal, while not wasting too much time.</p>
</details>

然后，它们利用剩余的尝试沿着那条路径冲刺，以获得最快的运行时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then they use their remaining tries to sprint down that path for the fastest run time possible.</p>
</details>

### 迷宫求解算法的演变：从简单到高效

解决迷宫听起来可能很简单，但重要的是要记住，只有几个红外传感器作为眼睛，从迷宫内部看到的景象远不如我们从上方看到的清晰。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Solving a maze may sound simple enough, though it's important to remember that, with only a few infrared sensors for eyes, the view from inside the maze is a lot less clear than what we see from above.</p>
</details>

尽管如此，你闭着眼睛也能解决迷宫。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Still, you can solve a maze with your eyes closed.</p>
</details>

如果你只用一只手沿着一堵墙走，你最终会到达大多数常见迷宫的终点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you just put one hand along one wall, you will eventually reach the end of most common mazes.</p>
</details>

这正是最初一些微型鼠参赛者也意识到的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's exactly what some initial Micromouse competitors realized, too.</p>
</details>

在一只简单的沿墙行走的老鼠在第一次决赛中夺冠后，迷宫的目标被移离边缘，并增加了独立墙壁，这将使一只简单的沿墙行走的老鼠永远搜索下去。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And after a simple wall-following mouse took home gold in the first finals, the goal of the maze was moved away from the edges, and free-standing walls were added, which would leave a simple wall-following mouse searching forever.</p>
</details>

你的下一个本能可能是跑过迷宫，记下每一个岔路口。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your next instinct might be to run through the maze, taking note of every fork in the road.</p>
</details>

每当你到达死胡同或循环时，你可以回到上一个交叉口，尝试不同的路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whenever you reach a dead end or a loop, you can go back to the last intersection and try a different path.</p>
</details>

如果你的上一个左转让你一无所获，你就会回到那个交叉口，改向右转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If your last left turn got you nowhere, you'd come back to that intersection and go right instead.</p>
</details>

你可以把这种策略想象成一只固执的老鼠可能会使用的策略，它尽可能深入迷宫，只有在无法再往前走时才回头。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of this strategy as the one a headstrong mouse might use, running as deep into the maze as it can, and turning back only when it can't go any further.</p>
</details>

这种搜索策略，被称为**深度优先搜索**（Depth-First Search: 一种遍历或搜索树或图的算法），最终会使老鼠到达目标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This search strategy, known as depth-first search, will eventually get the mouse to the goal.</p>
</details>

问题是，这可能不是最短的路线，因为老鼠只有在需要时才回头，所以它可能错过了从未尝试过的捷径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem is, it might not be the shortest route, because the mouse only turns back when it needs to, so it may have missed a shortcut that it never tried.</p>
</details>

这种搜索算法的“兄弟”算法，**广度优先搜索**（Breadth-First Search: 一种遍历或搜索树或图的算法，从根节点开始，沿着树的宽度遍历节点），会找到最短路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The sibling to this search algorithm, breadth-first search, would find the shortest path.</p>
</details>

使用这种策略，老鼠会沿着交叉口的一个分支跑，直到到达下一个交叉口，然后它会回去检查它跳过的路径，然后再移动到下一层交叉口。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With this strategy, the mouse runs down one branch of an intersection, until it reaches the next one, and then it goes back to check the path it skipped, before moving on to the next layer of intersections.</p>
</details>

所以老鼠会检查它到达的每一个选项，但所有这些回溯意味着它会重复运行路径几十次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the mouse checks every option it reaches, but all that backtracking means that it's rerunning paths dozens of times.</p>
</details>

此时，即使搜索整个迷宫也往往花费更少的时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At this point, even searching the whole maze often takes less time.</p>
</details>

那么为什么不直接这样做呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why not just do that?</p>
</details>

一只细致的老鼠可以搜索迷宫的所有256个单元格，测试每一个转弯和角落，以确保它确实找到了最短路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A meticulous mouse could search all 256 cells of the maze, testing every turn and corner to ensure it has definitely found the shortest path.</p>
</details>

但如此彻底的搜索也并非必要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But searching so thoroughly isn't necessary, either.</p>
</details>

相反，最流行的微型鼠策略与所有这些技术都不同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, the most popular Micromouse strategy is different from all of these techniques.</p>
</details>

它是一种被称为**洪水填充**（Flood Fill: 一种图像处理算法，用于填充连接区域）的搜索算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a search algorithm known as flood fill.</p>
</details>

这只老鼠的计划是进行乐观的迷宫之旅，事实上，它们第一次旅行时，它们的迷宫地图根本没有任何墙壁。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This mouse's plan is to make optimistic journeys through the maze, so optimistic, in fact, that on their first journey, their map of the maze doesn't have any walls at all.</p>
</details>

它们只是画出到目标的最短路径然后出发。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They simply draw the shortest path to the goal and go.</p>
</details>

当它们乐观的计划不可避免地撞到地图上没有的墙壁时，它们只是将其标记下来，并更新它们到目标的新最短路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When their optimistic plan inevitably hits a wall that wasn't on their map, they simply mark it down and update their new shortest path to the goal.</p>
</details>

奔跑、更新、奔跑、更新，始终直线冲向目标。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Running, updating, running, updating, always beelining for the goal.</p>
</details>

在算法的底层，微型鼠在地图上标记的是迷宫中每个方格到目标的距离。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Under the hood of the algorithm, what the Micromouse is marking on their map is the distance from every square in the maze to the goal.</p>
</details>

为了乐观地旅行，老鼠沿着递减的数字路径向下移动到零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To travel optimistically, the mouse follows the trail of decreasing numbers down to zero.</p>
</details>

每当它们撞到墙壁时，它们就会更新地图上的数字，以反映到目标的新最短距离。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whenever they hit a wall, they update the numbers on their map to reflect the new shortest distance to the goal.</p>
</details>

这种沿着阻力最小的数字路径行进的策略赋予了**洪水填充算法**其名称。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This strategy of following the numerical path of least resistance gives the flood fill algorithm its name.</p>
</details>

这个过程类似于用水淹没迷宫，并根据水流更新数值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The process resembles flooding the maze with water and updating values based on the flow.</p>
</details>

一旦老鼠到达目标，它就可以平滑其所走的路径，并获得迷宫的解决方案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once the mouse reaches the goal, it can smooth out the path it took and get a solution to the maze.</p>
</details>

然而，它可能会回顾并设想一条更短、未曾探索过的路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, it may look back and imagine an even shorter, uncharted path it could've taken.</p>
</details>

老鼠可能还不满足于它已经找到了最短路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The mouse might not be satisfied that it's found the shortest path just yet.</p>
</details>

虽然这种算法不能保证在第一次尝试时就找到最佳路径，但它利用了微型鼠需要返回起点才能开始下一次运行的事实。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While this algorithm isn't guaranteed to find the best path on first pass, it takes advantage of the fact that Micromice need to return to the start to begin their next run.</p>
</details>

因此，如果老鼠将返回视为一次新的旅程，它也可以利用回程来搜索迷宫。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if the mouse treats its return as a new journey, it can use the return trip to search the maze as well.</p>
</details>

在这两次尝试之间，都经过优化以找到从起点到终点的最短路径，老鼠极有可能发现它，并且老鼠将高效地完成，通常完全不触及迷宫中不相关的区域。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Between these two attempts, both optimized to find the shortest path from start to finish, it's extremely likely that the mouse will discover it, and the mouse will have done it efficiently, often leaving irrelevant areas of the maze entirely untouched.</p>
</details>

**洪水填充**为微型鼠提供了一种智能且实用的方法来找到穿过迷宫的最短路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Flood fill offers both an intelligent and practical way for Micromice to find the shortest path through the maze.</p>
</details>

### 超越最短路径：速度的追求与“福斯伯里式跳高”

一旦有了清晰的策略来找到最短路径，并且实现它所需的微控制器和传感器变得普遍，一些人认为微型鼠已经走到了尽头。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once there was a clear strategy to find the shortest path, and once the microcontrollers and sensors required to implement it became common, some people believed Micromouse had run its course.</p>
</details>

正如**IEEE**发表的一篇论文所说：“在1980年代末，微型鼠竞赛已经过时了。问题已经解决，不再提供任何新的挑战。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As a paper published in IEEE put it, "At the end of the 1980s, the Micromouse Contest had outlived itself. The problem was solved, and did not provide any new challenges."</p>
</details>

在2017年全日本微型鼠比赛中，获得铜牌和银牌的两只老鼠都找到了到达目标的最短路径，一旦找到，它们就能以7.4秒的速度迅速通过。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the 2017 All Japan Micromouse Competition, both the bronze-and silver-placing mice found the shortest path to the goal, and once they did, they were able to zip along it as quick as 7.4 seconds.</p>
</details>

但**宇都宫正和**（Masakazu Utsunomiya）的冠军鼠**红色彗星**（Red Comet）做了一些完全不同的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Masakazu Utsunomiya's winning mouse, Red Comet, did something entirely different.</p>
</details>

这是到达目标的最短路径，是每个人都走的路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the shortest path to the goal, the one that everyone took.</p>
</details>

这是**红色彗星**走的路径，它足足长了5.5米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the path that Red Comet took. It's a full 5 1/2 meters longer.</p>
</details>

那是因为微型鼠实际上不是在寻找最短路径，它们是在寻找最快路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's because Micromice aren't actually searching for the shortest path, they're searching for the fastest path.</p>
</details>

而**红色彗星**的搜索算法发现这条路径的转弯更少，从而减慢速度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Red Comet's search algorithm figured out that this path had fewer turns to slow it down.</p>
</details>

所以即使路径更长，它最终也可能更快。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even though the path was longer, it could end up being faster.</p>
</details>

于是它冒了这个险。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it took that risk.</p>
</details>

它以131毫秒的优势获胜。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It won by 131 milliseconds.</p>
</details>

比赛中不同的路线现在比以往任何时候都更常见，即使仅仅到达目标仍然很困难，无论是由于神秘的算法还是物理迷宫的怪异之处。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Differing routes at competition are now more common than not, and even just getting to the goal remains difficult, whether due to a mysterious algorithm or a quirk of the physical maze.</p>
</details>

**Commentator:** 那个角落，有点像……哇！
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The corner, it's a little bit like a... Whoa!</p>
</details>

微型鼠并不总是如你所愿地行动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Micromice don't always behave as you'd expect.</p>
</details>

微型鼠远未被“解决”，因为它不仅仅是一个软件问题或硬件问题，它是两者兼而有之。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Micromouse is far from solved, because it's not just a software problem or a hardware problem, it's both.</p>
</details>

这是一个机器人问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a robotics problem.</p>
</details>

**红色彗星**的胜利并非因为它有更好的搜索算法或更快的电机。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Red Comet didn't win because it had a better search algorithm or because it had faster motors.</p>
</details>

它的巧妙之处在于老鼠的大脑和身体如何协同作用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Its cleverness came from how the brains and body of the mouse interacted together.</p>
</details>

所以事实证明，解决迷宫不是问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it turns out solving the maze is not the problem.</p>
</details>

它从来都不是问题，对吧？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It never was the problem, right?</p>
</details>

但它实际上是关于导航，关于快速前进。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But it's actually about navigation, and it's about going fast.</p>
</details>

每年，机器人变得更小、更快、更轻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every year, the robots get smaller, faster, lighter.</p>
</details>

仍然有大量的创新空间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is still plenty of innovation left.</p>
</details>

在日本有一小群爱好者正在忙着建造四分之一大小的微型鼠，它们可以放在一枚硬币上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And there's a small group of devotees in Japan busy building quarter-size Micromouse which would sit on a quarter.</p>
</details>

近50年过去了，微型鼠比以往任何时候都更受欢迎。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nearly 50 years on, Micromouse is bigger than ever.</p>
</details>

### 硬件创新：微型鼠的两次“福斯伯里式跳高”

比赛乍一看似乎已经解决了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Competitions have appeared solved at first glance before.</p>
</details>

跳高自1896年以来就是一项奥运项目，几十年来，运动员们通过剪刀式、西部滚式和跨越式等变体不断完善他们的跳跃，但回报递减。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The high jump was an Olympic sport since 1896, with competitors refining their jumps using variations like the scissor, the western roll, and the straddle over the decades, with diminishing returns.</p>
</details>

但一旦泡沫垫成为比赛标准，**迪克·福斯伯里**（Dick Fosbury: 美国跳高运动员，发明了“福斯伯里式跳高”）在1968年通过成为第一位向后跳过横杆的奥运选手，彻底改变了这项运动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But once foam padding became standard in competition, Dick Fosbury rewrote the sport in 1968 by becoming the first Olympian to jump over the pole backwards.</p>
</details>

现在几乎每个跳高运动员都采用所谓的**福斯伯里式跳高**（Fosbury flop: 一种背向式跳高技术）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now almost every high jumper does what's known as the Fosbury flop.</p>
</details>

如果微型鼠真的在1980年代停滞不前，那么这项比赛就会错过它自己的**福斯伯里式跳高**，即两项完全改变微型鼠运行方式的创新。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If Micromouse had indeed stopped in the 1980s, the competition would've missed its own Fosbury flops, two innovations that completely changed how Micromice ran.</p>
</details>

毕竟，在一个参赛者可以焊接上他们能想象到的任何升级的运动中，很多事情都可能发生变化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After all, a lot can change in a sport where competitors can solder on any upgrade they can imagine.</p>
</details>

第一次**福斯伯里式跳高**是微型鼠最早的创新之一，与技术无关。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first Fosbury flop was one of the earliest innovations in Micromouse, and had nothing to do with technology.</p>
</details>

它只是一种跳出固有思维的方式，或者更确切地说，是“切开盒子”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was simply a way of thinking outside the box, or rather, cutting through the box.</p>
</details>

每只老鼠以前都是这样转弯的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every mouse used to turn corners like this.</p>
</details>

但随着**Mitee 3**老鼠的出现，一切都改变了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But everything changed with the mouse Mitee 3.</p>
</details>

所以**Mitee 3**老鼠首次实现了对角线路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Mitee Mouse 3 implemented diagonals for the first time.</p>
</details>

结果证明这比我们想象的要好得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that turned out to be a much better idea than we really thought.</p>
</details>

而且因为它很酷，迷宫设计者现在经常在迷宫中加入对角线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And because it's cool, you know, maze designers often put diagonals into the maze now.</p>
</details>

所以，你可能会遇到一个没有对角线的迷宫，但大多数时候它实际上是有益的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you know, you could end up with a maze where it never comes up, but most of the time it's actually a benefit.</p>
</details>

为了实现对角线，老鼠的底盘必须缩小到宽度小于11厘米，或者半尺寸微型鼠仅为5厘米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In order to pull off diagonals, the chassis of the mouse had to be reduced to less than 11 centimeters wide, or just five centimeters for half-size Micromouse.</p>
</details>

老鼠的传感器和软件也必须改变。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The sensors and software of the mouse had to change, too.</p>
</details>

当你沿着平行墙壁运行时，你所要做的就是保持左右红外读数之间的距离相等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you're running between parallel walls, all you have to do is maintain an equal distance between your left and right infrared readings.</p>
</details>

但对角线需要一个全新的算法，一个基本上像给老鼠戴上眼罩一样引导它的算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But a diagonal requires an entirely new algorithm, one that essentially guides the mouse as if it had blinders on.</p>
</details>

通常，如果你沿着墙壁或其他东西行走，大多数时候你都能一直看到墙壁。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Normally, if you're going along the side of a wall, or something like that, most of the time you can see the wall all the time.</p>
</details>

这有助于你引导自己，并且你知道何时偏离轨道。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that helps you to guide yourself, and you know when you're getting off.</p>
</details>

但在对角线情况下，你只会看到这些墙壁向你冲来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in the diagonal situation, you just see these walls coming at you.</p>
</details>

如果你稍微偏离轨道，撞到角落比擦着墙壁滑过要危险得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you veer even a tiny bit off course, snagging a corner is a lot less forgiving than sliding against a wall.</p>
</details>

对角线仍然是当今比赛中最大的碰撞源之一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Diagonals are still one of the biggest sources of crashes in competition today.</p>
</details>

但作为交换，一条锯齿状的转弯路径变成了一条狭窄的直线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in exchange, a jagged path of turns transforms into one narrow straightaway.</p>
</details>

如今，几乎所有有竞争力的微型鼠都设计成承担这种风险。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These days, nearly every competitive Micromouse is designed to take this risk.</p>
</details>

切割对角线为更多的想法开辟了空间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cutting diagonals opened up room for even more ideas.</p>
</details>

大约在同一时间，老鼠们也开始将类似的策略应用于转弯。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Around the same time, mice were applying similar strategies to turning.</p>
</details>

老鼠不再是停下来并进行两次右转，而是可以以单一的U形转弯动作扫过。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead of stopping and pivoting through two right turns, a mouse could sweep around in a single U-turn motion.</p>
</details>

一旦增加了对角线的可能性，可能的转弯总数呈指数级增长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once the possibility of diagonals were added, the total number of possible turns opened up exponentially.</p>
</details>

迷宫不再仅仅是方格走廊的网格。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The maze was no longer just a grid of square hallways.</p>
</details>

有如此多的选择需要权衡，找出最佳路径变得比以往任何时候都更加复杂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With so many more options to weigh, figuring out the best path became more complex than ever.</p>
</details>

但回报是巨大的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the payoff was dramatic.</p>
</details>

曾经是一系列停顿和启动的动作，现在可以变成单一、流畅、蜿蜒的运动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What was once a series of stops and starts could now be a single, fluid, snaking motion.</p>
</details>

微型鼠如何想象和穿过迷宫的方式已经完全改变。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How Micromice imagined and moved through the maze had changed completely.</p>
</details>

多年来，可用技术也在升级。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Available technology was getting upgrades over the years as well.</p>
</details>

曾经用于寻找墙壁的高大笨重的机械臂被老鼠上更小的红外传感器阵列取代。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tall and unwieldy arms that were used to find walls were replaced by a smaller array of infrared sensors on board the mouse.</p>
</details>

精确的步进电机被连续**直流电机**（DC motors: 使用直流电的电机）和编码器取代。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Precise stepper motors were traded in for continuous DC motors and encoders.</p>
</details>

**直流电机**以更小的尺寸和重量提供更大的功率，所以我们对此很感兴趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The DC motors give you more power for less size and weight, and so we were interested in doing that.</p>
</details>

所以你必须有一个伺服系统。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then you have to have a servo.</p>
</details>

你必须对电机进行反馈，才能使其正常工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have to actually have feedback on the motor to make it do the right thing.</p>
</details>

**陀螺仪**（Gyroscopes: 一种用于测量或维持方向和角速度的装置）增加了额外的方向感。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gyroscopes added an extra sense of orientation.</p>
</details>

就像一个指南针，如果你随身带着这个东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like a compass, if you had this thing with you.</p>
</details>

它们之所以出现，真的是因为手机。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They came about cause of mobile phones, really.</p>
</details>

所以技术为人们提供了以前没有的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the technology provides people with things which weren't there before.</p>
</details>

所有的转弯都是基于**陀螺仪**完成的，而不是通过计算车轮的脉冲，因为它更可靠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of the turning is done based off the gyro rather than counting pulses off the wheels, because it's much more reliable.</p>
</details>

但即使有了所有的机械升级，微型鼠最大的物理问题几十年来一直没有解决。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But even with all the mechanical upgrades, the biggest physical issue for Micromice went unaddressed for decades.</p>
</details>

你几乎会看到每个参赛者都拿着一卷胶带。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing you'll see almost every competitor holding is a roll of tape.</p>
</details>

一旦你知道要寻找它，你就会随处可见。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once you know to look for it, you'll see it everywhere.</p>
</details>

这种胶带不是用来修理或重新连接掉落的部件的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This tape isn't for repairs or reattaching fallen parts.</p>
</details>

它是在两轮之间清除车轮上的灰尘。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's to gather specs of dust off the wheels in between rounds.</p>
</details>

在这些机器人运行的速度和精度下，摩擦力的微小变化足以毁掉一次运行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the speed and precision these robots are operating, that tiny change in friction is enough to ruin a run.</p>
</details>

如果你想在快速行驶时转弯，你需要**向心力**（centripetal force: 使物体沿曲线路径运动的力）来加速你进入转弯。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you wanna turn while driving fast, you need centripetal force to accelerate you into the turn.</p>
</details>

而且你移动得越快，你需要越大的力来让你保持在轨道上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the faster you're moving, the more force you need to keep you on the track.</p>
</details>

汽车在平地上转弯的唯一**向心力**是摩擦力，它由两个因素决定：路面向上推汽车重量的力，即法向力，乘以静摩擦系数，这是轮胎和路面之间的摩擦力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only centripetal force for a car turning on flat ground is friction, which is determined by two things, the road pushing up the weight of the car, or the normal force, multiplied by the static coefficient of friction, which is the friction of the interface between the tire and road surface.</p>
</details>

这就是为什么赛道有倾斜的弯道。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is why racetracks have banked turns.</p>
</details>

陡峭的角度有助于汽车以较小的摩擦力转弯，因为法向力的一部分现在指向内，有助于提供所需的**向心力**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The steep angles help cars turn with less friction, because part of the normal force itself now points in to contribute to the centripetal force required.</p>
</details>

如果倾斜的弯道足够陡峭，汽车实际上可以在没有任何摩擦力的情况下转弯。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the banked turn is steep enough, cars can actually make the turn without any friction at all.</p>
</details>

仅法向力的内向分量就足以提供保持在轨道上所需的**向心力**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The inward component of the normal force alone is enough to provide the centripetal force required to stay on track.</p>
</details>

微型鼠也不例外，它们没有倾斜的弯道来帮助。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Micromice are no different, and they don't have banked turns to help.</p>
</details>

随着它们越来越快，到2000年代初，它们的限制因素不再是速度，而是对速度的控制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As they got faster and faster, by the early 2000s, their limiting factor was no longer speed, but control of that speed.</p>
</details>

它们必须降低重心，并在转弯时减速，以避免滑入墙壁或翻车。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They had to set their center of gravity low, and slow down during turns to avoid slipping into a wall or flipping over.</p>
</details>

但与赛车不同，规则中没有任何规定可以阻止微型鼠参赛者通过设计一个全新的机制来解决这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But unlike race cars, there wasn't anything in the rules to stop Micromouse competitors from solving this problem by engineering an entirely new mechanism.</p>
</details>

当**Mokomo08**老鼠首次在比赛中使用时，微型鼠的第二次**福斯伯里式跳高**几乎被认为是一个噱头。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Micromouse's second Fosbury flop was almost considered a gimmick when the mouse Mokomo08 first used it in competition.</p>
</details>

你可能会盯着视频试图看到它，但你不会。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You might be staring at the video to try to see it, but you won't.</p>
</details>

相反，你会听到一些声音。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, it's something you'll hear.</p>
</details>

那不是老鼠在加速引擎。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That isn't the mouse revving its engines.</p>
</details>

它正在旋转螺旋桨。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's spinning up a propeller.</p>
</details>

虽然飞越墙壁是违反规则的，但规则中没有任何规定禁止老鼠将自己吸附到地面以防止打滑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And while flying over the walls is against the rules, there's nothing in the rules against a mouse vacuuming itself to the ground to prevent slipping.</p>
</details>

**戴夫·奥滕**（Dave Otten）是我见过的第一个在老鼠上安装风扇的人，但他使用的是管道风扇，我想他当时主要是在寻找反作用力，你知道，把东西吹下去。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Dave Otten was the first person I saw put a fan on a mouse, but he used a ducted fan, and I think he was really looking at kind of reaction force, you know, blowing the thing down.</p>
</details>

他周围有一个裙边，但效果不是很好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He had a skirt around, but it was not terribly effective.</p>
</details>

不过请原谅我这么说。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Forgive me for saying this, though.</p>
</details>

这个想法是尽可能少地让空气进入。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The idea is to let as little air in as possible.</p>
</details>

就像你的吸尘器一样，当你堵住吸尘器时，电机就会卸载并加速，所以电流会下降。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And like your vacuum cleaner, when you block your vacuum cleaner, right, the motor unloads and speeds up, and so the current drops.</p>
</details>

但如果进入的空气太多，电流就会非常高。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you let too much air in, the current's very high.</p>
</details>

而这些只是四轴飞行器电机，它们消耗大量电流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And these are just quadcopter motors, and they draw a lot of current.</p>
</details>

在微型鼠的尺度上，一个真空风扇，通常只是用手持无人机部件制造的，足以产生五倍于老鼠重量的向下的力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the scale of Micromouse, a vacuum fan, often just built from handheld drone parts, is enough to generate a downward force five times the mouse's weight.</p>
</details>

哇。好的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. Okay.</p>
</details>

这令人印象深刻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's impressive.</p>
</details>

那么这辆车实际有多重？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how much does the car actually weigh?</p>
</details>

大约130克。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">About 130 grams.</p>
</details>

如果你听，我不知道你的麦克风能否捕捉到，但是——
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you listen, I don't know if you'll get it on your microphone, but-</p>
</details>

哦，是的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh yeah.</p>
</details>

你可以听到电机减速，然后它加载起来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you can hear the motors slow down, and it loads up.</p>
</details>

有了如此大的摩擦力，今天的微型鼠可以在转弯时达到接近6个G的**向心加速度**（centripetal acceleration: 导致物体沿曲线路径运动的加速度）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With that much friction, Micromice today can turn corners with a centripetal acceleration approaching six Gs.</p>
</details>

这与F1赛车相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the same as F1 cars.</p>
</details>

一旦几乎所有人都配备了风扇，增加的控制力使得建造者能够突破微型鼠的速度限制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once nearly everyone equipped fans, the added control allowed builders to push the speed limit on Micromice.</p>
</details>

当它被允许时，它的加速能力将超越**特斯拉Roadster**（Tesla Roadster: 特斯拉公司生产的一款高性能电动跑车），但距离不会很远。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When it's allowed to, it will out-accelerate a Tesla Roadster, but not for very far.</p>
</details>

它们可以以每秒七米的速度疾驰，比大多数人跑得都快。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they can zip along at up to seven meters per second, faster than most people can run.</p>
</details>

现代微型鼠上现在标准的每一个功能都曾是一个实验，下一次**福斯伯里式跳高**可能不远了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every one of the features now standard on the modern Micromouse was once an experiment, and the next Fosbury flop might not be far off.</p>
</details>

第一只赢得全日本比赛的四轮微型鼠是在1988年，但又过了22年，随着冠军鼠的不断发展和肢体变化，四轮鼠才成为常态。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first four-wheeled Micromouse to win the All Japan competition did so in 1988, but it would take another 22 years of the winning mouse growing and losing appendages before four-wheeled mice became the norm.</p>
</details>

随着微型鼠仍在尝试六轮和八轮设计、全向移动甚至计算机视觉，谁知道下一个范式转变会是什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With Micromice still experimenting in six- and eight-wheel designs, omnidirectional movement, and even computer vision, who knows what the next paradigm shift will be?</p>
</details>

### 微型鼠的未来与可及性

**Commentator:** 你在迷宫中的时间实际上只有在你离开起始方格时才开始，所以他不会因此受到惩罚。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Your time on the maze actually begins only when you leave the start square, so he's not penalized for any of this time.</p>
</details>

但如果你想开始玩微型鼠，你不需要担心车轮数量或真空风扇，甚至不需要担心对角线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you wanna get started with Micromouse, you don't need to worry about wheel count or vacuum fans, or even diagonals.</p>
</details>

在我看来，它是机器人技术、工程学、编程、嵌入式系统等所有主要学科的完美结合，全部封装在一个易于获取的包中，你可以在客厅里完成，而不需要实验室来运行它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is, to my mind, the perfect combination of all the major disciplines that you need for robotics and engineering and programming, embedded systems, all wrapped up in one accessible bundle that you can do in your living room, and you don't need a laboratory to run it.</p>
</details>

你因为好奇而来，然后你觉得：“我能做到。这看起来不难。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You come along because you're curious, and then you think, "I could do that. That doesn't look so hard."</p>
</details>

然后你就真的“完蛋”了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you're doomed, really.</p>
</details>

如果它把你吸引进去，那将是一段相当长的旅程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If it sucks you in, it turns into quite the journey.</p>
</details>

微型鼠的核心，只是一只老鼠试图解决迷宫。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At its core, Micromouse is just about a mouse trying to solve a maze.</p>
</details>

尽管，近50年后，这是一个很好的提醒，即没有所谓“简单的问题”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Though, nearly 50 years later, it's a simple problem that's a good reminder, there is no such thing as a simple problem.</p>
</details>

### Onshape：助力微型鼠设计与工程

如果你想建造自己的微型鼠，你可能需要使用像**Onshape**（Onshape: 一款基于云的3D CAD和PDM系统）这样的3D **CAD**（Computer-Aided Design: 计算机辅助设计）程序来设计部件，它是本视频的赞助商。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you wanna build your own Micromouse, you'll likely need to design parts using a 3D CAD program like Onshape, the sponsor of this video.</p>
</details>

**Onshape**是一个现代化的**CAD**加**PDM**（Product Data Management: 产品数据管理）系统，专为企业设计，并对创客和爱好者完全免费使用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Onshape is a modern CAD plus PDM system designed for businesses, and completely free for makers and hobbyists to use.</p>
</details>

任何严肃的硬件产品都需要精确的设计，才能在现实世界中成功制造，从像这样的微型鼠模型到像这样的专业V2发动机模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Any serious hardware product needs a precise design in order to be successfully made in the real world, from a Micromouse model like this one to a professional V2 engine model like this one.</p>
</details>

与传统安装在本地的**CAD**程序不同，**Onshape**完全在云端构建，这使得工程和设计团队能够以前所未有的方式协作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unlike traditional CAD programs, which are installed on premises, Onshape was built entirely in the cloud, which allows engineering and design teams to collaborate like never before.</p>
</details>

**Onshape**允许你像**谷歌文档**（Google Docs: 谷歌提供的在线文档编辑工具）一样，与多个用户实时协作进行同一设计。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Onshape allows you to work together in real time on the same design with multiple users, just like Google Docs.</p>
</details>

这完全消除了来回发送大文件以及试图跟踪谁拥有最新版本（无论是V2还是V22）的需要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This completely eliminates the need for emailing large files back and forth and trying to keep track of who has the most recent version, whether it's V2 or V22.</p>
</details>

借助**Onshape**，软件开发中常见的**敏捷方法论**（Agile methodologies: 一种迭代和增量的软件开发方法）现在正被硬件开发所采用，以使公司能够更快地构建更好的产品。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With Onshape, Agile methodologies that are common in software development are now being adopted in hardware development to allow companies to build better products faster.</p>
</details>

**Onshape**不仅对企业很有用，对开源项目或只是与朋友一起进行设计也很有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Onshape's not only great for businesses, but also for open source projects, or just working on designs with your friends.</p>
</details>

再次强调，它对爱好者完全免费，所以你可以随时在onshape.pro/veritasium上亲自尝试。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, it's totally free for hobbyists, so you can try it out for yourself as much as you like at onshape.pro/veritasium.</p>
</details>

你可以随身携带**Onshape**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can take Onshape with you wherever you go.</p>
</details>

你不需要强大的台式机或特定的操作系统来运行它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You don't need a powerful desktop or a specific operating system to run it.</p>
</details>

无论你使用的是Mac还是PC，甚至只是在手机上，你都可以轻松使用**Onshape**。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether you're on a Mac or PC, or even just on your phone, you can easily use Onshape.</p>
</details>

所以要开始使用，请在onshape.pro/veritasium免费注册。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to get started, sign up for free at onshape.pro/veritasium.</p>
</details>

我要感谢**Onshape**赞助本视频，也要感谢你的观看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wanna thank Onshape for sponsoring this video, and I wanna thank you for watching.</p>
</details>