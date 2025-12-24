---
area: society-systems
category: science
companies_orgs:
- Brilliant
date: '2021-07-30'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Paul Erdos
- Jeffrey Lagarias
- Alex Kontorovich
- Yakov Sinai
- Riho Terras
- Terry Tao
- George Polya
- C. Brian Haselgrove
- John Conway
products_models:
- FRACTRAN
project:
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=094y1Z2wpJg
speaker: veritasium
status: evergreen
summary: 考拉兹猜想是一个看似简单却困扰了顶尖数学家数十年的难题。它提出任何正整数通过特定规则（奇数乘三加一，偶数除以二）最终都会回到“4-2-1”循环。尽管经过了海量数字的暴力测试和特里·陶等数学家的部分证明，该猜想仍未被完全证明或证伪。文章探讨了其难度、统计学分析、可视化方法以及它可能存在的反例或不可判定性，揭示了数学世界的奇特与深奥。
tags:
- collatz-conjecture
- law
- problem
- theory
- undecidability
title: 考拉兹猜想：一个看似简单却无人能解的数学难题
---

### 考拉兹猜想：一个“危险”的数学问题

这是数学领域中最“危险”的问题之一，年轻的数学家们被警告不要在其上浪费时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the most dangerous problem in mathematics, one that young mathematicians are warned not to waste their time on.</p>
</details>

这是一个简单的猜想，但即使是世界上最优秀的数学家也未能解决。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's a simple conjecture that not even the world's best mathematicians have been able to solve.</p>
</details>

著名数学家保罗·埃尔德什（Paul Erdos）曾说：“数学尚未成熟到足以解决这类问题。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Paul Erdos, a famous mathematician, said, "Mathematics is not yet ripe enough for such questions."</p>
</details>

### 考拉兹猜想的运作方式

它的运作方式如下：选择一个数字，任何数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's how it works. Pick a number, any number.</p>
</details>

以数字七为例，这是一个不错的选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Seven? Good choice.</p>
</details>

我们将应用两条规则：如果数字是奇数，我们就将其乘以三再加一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, we're gonna apply two rules. If the number is odd, we multiply by three and add one.</p>
</details>

所以，三乘以七是二十一，加一等于二十二。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So three times seven is 21, plus one is 22.</p>
</details>

如果数字是偶数，我们就将其除以二。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the number is even, we divide by two.</p>
</details>

因此，二十二除以二等于十一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 22 divided by two is 11.</p>
</details>

现在，我们继续应用这两条规则：十一是奇数，所以我们乘以三得到三十三，再加一得到三十四。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we keep applying these two rules. 11 is odd, so we multiply by 3, 33, and add 1, 34.</p>
</details>

三十四是偶数，除以二得到十七，十七是奇数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even, divide by two, 17, odd.</p>
</details>

乘以三得到五十一，加一得到五十二，五十二是偶数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Multiply by 3, 51, add 1, 52, even.</p>
</details>

除以二得到二十六，仍然是偶数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Divide by two, 26, still even.</p>
</details>

除以二得到十三，十三是奇数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Divide by two, 13, odd.</p>
</details>

所以我们乘以三得到三十九，加一得到四十，四十是偶数，所以我们除以二得到二十。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we multiply by 3, 39, add one, and that's 40, which is even, so we divide by two, 20,</p>
</details>

继续除以二得到十，再除以二得到五，五是奇数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">divide by two, 10, divide by two, five, odd.</p>
</details>

乘以三得到十五，加一得到十六，十六除以二得到八。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Multiply by three, 15, add one, 16, divide by two that's eight,</p>
</details>

然后是四、二，最后是一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then four, two, and one.</p>
</details>

现在，一是一个奇数，所以我们乘以三再加一，结果是四。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, one is odd, so we multiply by three and add one, which equals four.</p>
</details>

但是四会变成二，二会变成一，所以我们进入了一个循环，最低的数字就是一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But four goes to two, goes to one, so we're in a loop, and the lowest number is one.</p>
</details>

### 考拉兹猜想的定义与别名

现在，这个猜想是这样的：每个正整数，如果你应用这些规则，最终都会进入“四、二、一”的循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the conjecture is this: every positive integer, if you apply these rules, will eventually end up in the four, two, one loop.</p>
</details>

这通常被称为**考拉兹猜想**（Collatz Conjecture: 一个关于整数序列的数学猜想），以德国数学家洛塔尔·考拉兹（Lothar Collatz）的名字命名，他可能在1930年代提出了这个猜想。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is commonly called the Collatz conjecture after German mathematician, Luther Collatz, who may have come up with it in the 1930s.</p>
</details>

但这个问题有许多起源故事和许多名称。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the problem has many origin stories and many names.</p>
</details>

它也被称为乌拉姆猜想（Ulam conjecture）、角谷问题（Kakutani's problem）、思韦茨猜想（Thwaites conjecture）、哈塞算法（Hasse's algorithm）、锡拉库萨问题（Syracuse problem），以及简单的“3N+1”问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's also known as the Ulam conjecture, Kakutani's problem, Thwaites conjecture, Hasse's algorithm, the Syracuse problem, and simply 3N+1.</p>
</details>

为什么3x+1如此有名？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why is 3x+1 so famous?</p>
</details>

### 数学界的“恶名”

在专业数学家圈子里，它也许不是有名，而是“恶名昭彰”，因为如果有人公开承认他们正在研究这个问题，那说明他们可能有点不对劲。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Among professional mathematicians, maybe it's not famous but infamous, in the sense that if someone actually admits in public that they're working on it, then there's something wrong with them. (laughs)</p>
</details>

通过应用3x+1规则得到的数字被称为**冰雹数**（hailstone numbers: 考拉兹序列中的数字），因为它们像雷雨云中的冰雹一样上下跳动，但最终都会落到一，或者至少我们认为是这样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The numbers you get by applying 3x+1 are called hailstone numbers, because they go up and down like hailstones in a thundercloud, but eventually, they all fall down to one, or at least we think they do.</p>
</details>

你可以把这些数字想象成离地面的高度，单位是米。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of the numbers as representing the height above the ground in meters.</p>
</details>

所以像26这样的数字会从离地面26米高的地方开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a number like 26 would start 26 meters above the ground.</p>
</details>

如果你应用3x+1规则，它会上升到40米的高度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you apply 3x+1, it rises up as high as 40 meters.</p>
</details>

总共需要10步才能达到一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And, in total, it takes 10 steps to get to one.</p>
</details>

所以10被称为它的**总停止时间**（total stopping time: 考拉兹序列达到1所需的步数）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 10 is called its total stopping time.</p>
</details>

但以紧随其后的数字27为例，它会四处跳动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But take the very next number, 27, and it bounces around all over the place.</p>
</details>

事实上，它会一直攀升到9232。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, it climbs all the way up to 9,232.</p>
</details>

这个高度甚至超过了珠穆朗玛峰，然后它也回落到地面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As an altitude, that is higher than Mount Everest, before it too falls back to the ground.</p>
</details>

总共需要111步，27才能降到一并进入“四、二、一”循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In total, it takes 111 steps for 27 to get down to one and end up in the four, two, one loop.</p>
</details>

不同数字所走的路径差异如此之大，即使是彼此相邻的数字也是如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The paths that different numbers take vary so widely, even numbers right next to each other.</p>
</details>

那么，你该如何着手解决这个问题呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do you even start to make progress on this problem?</p>
</details>

老实说，数学家们为此苦苦挣扎。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, honestly, mathematicians struggled.</p>
</details>

### 解决难题的困境与警告

人们甚至认为这可能是苏联人为了拖慢美国科学发展而发明的，而且它确实做得很好，因为每个人都坐在那里无所事事，对这个可以讲给小学生听的“小问题”毫无进展。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- People just decided that this was something invented by the Soviets to slow down U.S. science, and it was doing a good job at it 'cause everybody's sitting there twiddling their thumbs and making no progress on this trivial thing that you can tell a school of children.</p>
</details>

杰弗里·拉加里亚斯（Jeffrey Lagarias）是3x+1问题的世界权威。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jeffrey Lagarias is the world authority on 3x+1.</p>
</details>

他第一次见到我时，我还是个大学高年级学生，他把我拉到一边说：“别干这个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The first time I met him I was a senior in college, and he pulled me aside and he said, "Don't do this.</p>
</details>

不要研究这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't work on this problem.</p>
</details>

如果你想有职业发展，就不要花时间写关于它的文章或发表任何论文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to have a career, do not start spending time writing about this or publishing any papers about this.</p>
</details>

先做一些真正的数学研究来确立自己的地位。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do real math for a while to establish yourself."</p>
</details>

亚历克斯·康托罗维奇（Alex Kontorovich）没有听从这个建议。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alex Kontorovich didn't listen.</p>
</details>

他和雅科夫·西奈（Yakov Sinai）研究了冰雹数的路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He and Yakov Sinai looked at the paths of the hailstone numbers.</p>
</details>

它们有任何规律吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Were there any patterns?</p>
</details>

显然，所有这些路径都以一为终点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But obviously all of them ended up at one.</p>
</details>

但是它们到达那里的路径又如何呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what about the paths they take to get there?</p>
</details>

### 路径中的随机性与本福特定律

这种模式是随机性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The pattern is randomness.</p>
</details>

这是一个随机选取的大数字序列图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is the sequence of a large number chosen at random.</p>
</details>

图表先达到峰值，然后下降得如此之低，以至于在这个尺度上你几乎看不到发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The graph peaks and then drop so low that you can't really see what's happening at this scale.</p>
</details>

但如果你取对数，你会发现这个波动的图表呈现出下降趋势。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you take the logarithm, you find this wiggly graph with a downward trend.</p>
</details>

它看起来就像股市糟糕的一天。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It looks like the stock market on a bad day.</p>
</details>

这并非巧合。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is no coincidence.</p>
</details>

两者都是**几何布朗运动**（geometric Brownian motion: 一种随机过程，常用于金融市场建模）的例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Both are examples of geometric Brownian motion.</p>
</details>

这意味着如果你取对数并去除线性趋势，波动是随机的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That means if you take the log and remove the linear trend, the fluctuations are random.</p>
</details>

这就像每一步都在抛硬币：如果是正面，线向上；如果是反面，线向下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like flipping a coin each step. If the coin is heads, the line goes up, tails, it goes down.</p>
</details>

3x+1就像股市的随机波动。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">3x+1 is just like the random wiggles of the stock market.</p>
</details>

在足够长的时间内，股市倾向于上涨，而3x+1则倾向于下降。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over long-enough periods, the stock market tends to trend upwards, while 3x+1 trends down.</p>
</details>

另一种分析3x+1的方法是查看序列中每个数字的首位数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another way to analyze 3x+1 is by looking at the leading digit of each number in a sequence.</p>
</details>

这是以三为起始的冰雹数序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here are the hailstone numbers starting with three as the seed.</p>
</details>

我们可以统计有多少数字以一开头，有多少以二开头，有多少以三开头，依此类推，制作一个直方图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can count up how many numbers start with a one, how many start with a two, how many start with a three, and so on to make a histogram.</p>
</details>

我们也可以对以四开头的序列做同样的事情，这是一个短序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can do the same thing for the sequence that starts with four, and that's a short one,</p>
</details>

以及以五、六、七开头的序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and for the sequences that start with five, six, and seven.</p>
</details>

同样，对于每个序列，我们只统计有多少数字以一到九的每个数字开头，并将其添加到我们的直方图中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, for each sequence, we're just counting up how many numbers start with each digit, one through nine, and adding that to our histogram.</p>
</details>

如果你对越来越多的数字重复这个过程，最终直方图会稳定在一个固定的模式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you keep doing this for more and more numbers, eventually the histogram settles into a stable pattern.</p>
</details>

对于前十亿个序列，你会发现一是最常见的首位数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the first billion sequences, you'll find one is by far the most common leading digit.</p>
</details>

所有数字中约有30%以一开头，约17.5%以二开头，12%以三开头，并且频率随着数字的增大而降低。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">30% of all numbers start with one, around 17.5% start with two, 12% start with three, and the frequency decreases for higher digits.</p>
</details>

不到5%的数字以九开头。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fewer than 5% of all the numbers start with nine.</p>
</details>

这种模式并非3x+1独有。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this pattern is not unique to 3x+1.</p>
</details>

它实际上无处不在，从国家人口到公司价值，所有物理常数和斐波那契数列，不胜枚举。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It actually comes up everywhere, from the populations of countries, to the value of companies, all the physical constants and the Fibonacci numbers, just to name a few.</p>
</details>

这种分布被称为**本福特定律**（Benford's law: 描述了许多自然产生的数据集中首位数字的分布规律），它甚至被用来检测欺诈。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The distribution is known as Benford's law, and it is even used to detect fraud.</p>
</details>

如果你所得税表格上的所有数字都遵循本福特定律，那么你很可能诚实。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If all the numbers on your income tax forms obey Benford's law, then, well, you're probably being honest.</p>
</details>

如果不是，你可能有所隐瞒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If not, you may be hiding something.</p>
</details>

在选举中，本福特定律可以用来发现违规行为，尽管你必须正确应用它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In elections, Benford's law can be used to spot irregularities, though you have to apply it correctly.</p>
</details>

当所涉及的数字跨越几个数量级时，本福特定律效果最好，就像3x+1一样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Benford's law works best when the numbers involved span several orders of magnitude as they do for 3x+1.</p>
</details>

但本福特定律无法告诉我们所有数字是否都会进入“四、二、一”循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Benford's law can't tell us whether all numbers will end up in the four, two, one loop or not.</p>
</details>

为此，我们需要不同类型的分析。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For that, we need a different sort of analysis.</p>
</details>

### 序列收缩的统计学解释

乍一看，当你应用3x+1规则时，所有数字都应该最终归结为一，这似乎很奇怪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, at first glance, it seems strange that when you apply 3x+1, all numbers should end up at one.</p>
</details>

我的意思是，考虑到奇数和偶数的数量相同，但奇数被三倍以上，而偶数只被减半。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, consider that there are the same number of odd and even numbers, but odd numbers are more than tripled, while even numbers are only cut in half.</p>
</details>

因此，平均而言，每个序列似乎都应该增长，而不是缩小。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Therefore, it seems like every sequence on average should grow, not shrink.</p>
</details>

但这里有一个诀窍。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But here's the catch.</p>
</details>

每当你将一个奇数乘以三再加一，它总是会变成一个偶数，这意味着下一步是除以二。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every time you multiply an odd number by three and then add one, it will always become an even number, and that means the next step is to divide by two.</p>
</details>

所以奇数实际上并没有被3x+1规则三倍化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So odd numbers are not actually tripled by 3x+1.</p>
</details>

它们被增加的因子大约是三除以二。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're increased by a factor of about three over two.</p>
</details>

我忽略了加一，因为它对于大数字来说是微不足道的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm neglecting the plus one because it's insignificant for large numbers.</p>
</details>

而3/2实际上是一个奇数在一步中能增长的最大值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And 3/2 is actually the most an odd number can grow in one step.</p>
</details>

思考一个序列中从一个奇数到下一个奇数的路径。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think of the path from one odd number in a sequence to the next odd number.</p>
</details>

乘以三再加一后，你得到一个偶数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After multiplying by three and adding one, you have an even number.</p>
</details>

50%的时间，除以二会让你回到一个奇数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And 50% of the time, dividing by two brings you back to an odd number.</p>
</details>

但有四分之一的时间，你可以在到达下一个奇数之前除以四。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But a quarter of the time, you can divide by four before you get to the next odd number.</p>
</details>

所以，对于四分之一的数字，序列中的下一个数字将是其初始值的3/4。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for a quarter of numbers, the next one in the sequence will be 3/4 of its initial value.</p>
</details>

有1/8的时间，你可以在到达下一个奇数之前除以八，有1/16的时间，你可以除以十六，依此类推。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An 1/8 the time, you can divide by eight before getting to the next odd number, and 1/16 of the time, you can divide by 16 and so on.</p>
</details>

如果你取几何平均值，你会发现，平均而言，从一个奇数到下一个奇数，你乘以的是3/4，这小于一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you take the geometric mean, you find, on average, to get from one odd number to the next one, you multiply by three over four, which is less than one.</p>
</details>

所以从统计学上讲，3x+1序列更有可能缩小而不是增长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So statistically speaking, 3x+1 sequences are more likely to shrink than grow.</p>
</details>

以341为例，乘以三再加一，你得到1024。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Take 341 for example, multiply by three and add one, you get 1,024,</p>
</details>

你可以连续除以二，总共十次，直到你降到一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which you can divide by two and then divide by two again, and again, and again, and again, 10 times in total until you're down to one.</p>
</details>

### 可视化路径与反例的可能性

可视化3x+1中数字路径的一种方法是简单地展示每个数字如何连接到其序列中的下一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way to visualize these paths of numbers in 3x+1 is simply to show how each number connects to the next one in its sequence.</p>
</details>

这被称为**有向图**（directed graph: 一种由顶点和有方向的边组成的图）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is called a directed graph.</p>
</details>

它看起来像一棵树或一系列相互汇入的小溪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It looks like a tree or a series of little streams that flow into each other.</p>
</details>

如果猜想是真的，这意味着每个数字都连接到这个图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the conjecture is true, it means that every single number is connected to this graph.</p>
</details>

从无穷远处延伸的每一条小溪最终都会汇入“四、二、一”这条巨大的河流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every tiny stream all the way out to infinity eventually flows into the massive river of four, two, one.</p>
</details>

一些数学家通过旋转图中的每个数字来修改这种可视化方式；如果是奇数则逆时针旋转，如果是偶数则顺时针旋转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some mathematicians have modified this visualization by rotating the graph at each number; anticlockwise if it's an odd number, and clockwise if it's even.</p>
</details>

然后你就会得到一个看起来像珊瑚或海藻的结构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then you end up with a structure that looks like a coral or seaweed.</p>
</details>

通过调整奇数和偶数的旋转角度，你可以创造出这些美丽的、有机形态的形状。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by adjusting the degree of rotation for odd and even numbers, you can create these beautiful, organic-looking shapes.</p>
</details>

现在，猜想可能以两种方式被证伪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, there are two ways the conjecture could be false.</p>
</details>

可能存在某个数字，某个起始值，它开始的数字序列会无限增长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There could be a number somewhere, some seed, that starts a sequence of numbers that grows to infinity.</p>
</details>

无论出于何种原因，它不遵循所有其他数字所遵循的相同数值引力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For whatever reason, it doesn't obey the same numerical gravity as all of the other numbers.</p>
</details>

另一种可能性是存在一个形成闭环的数字序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another possibility is there exists a sequence of numbers that forms a closed loop.</p>
</details>

这个循环中的所有数字都将与主图不连接。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All the numbers in this loop would be unconnected to the main graph.</p>
</details>

但到目前为止，还没有发现任何循环或无限增长的序列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But thus far, no loop or sequence that shoots off to infinity has been found.</p>
</details>

这并非因为缺乏尝试，数学家们已经通过暴力计算测试了高达2的68次方（即295,147,905,179,352,825,856）的每一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And not for lack of trying, mathematicians have tested by brute force every single number up to two to the 68. That's 295,147,905,179,352,825,856 numbers.</p>
</details>

我们确切地知道，所有这些数字最终都会回到一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We know, for certain, that every single one of those numbers eventually comes back down to one.</p>
</details>

我们已经测试了近三百亿亿个数字，没有一个反驳了这个猜想。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have tested nearly 300 quintillion numbers, and none of them disproves the conjecture.</p>
</details>

事实上，根据这些信息，数学家们计算出，除了“四、二、一”之外的任何循环都必须至少有1860亿个数字那么长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, given this information, mathematicians calculate that any loop other than four, two, one must be at least 186 billion numbers long.</p>
</details>

所以，这个猜想似乎很有可能是真的，但这并不能证明它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it seems pretty likely that the conjecture is true, but this doesn't prove it.</p>
</details>

### 部分证明与特里·陶的贡献

数学家们试图证明它的一种方法是制作一个散点图，其中x轴是所有起始数字，y轴是每个起始数字序列中的一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way mathematicians have attempted to prove it is by making a scatterplot with all the seed numbers on the x-axis and a number from each seeds sequence on the y-axis.</p>
</details>

现在，如果你能证明在每个3x+1序列中都存在一个比原始起始数字更小的数字，那么你就证明了考拉兹猜想。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if you can show that in every 3x+1 sequence there is a number that is smaller than the original seed, well then you have proven the Collatz conjecture,</p>
</details>

因为无论你选择哪个数字，你都知道它在某个时候会变小，而那个较小的数字作为起始数字也会变小，依此类推直到一，这意味着任何序列结束的唯一方式就是进入“四、二、一”循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because whatever number you pick, you know it will at some point get smaller, and that smaller number as a seed also gets smaller, and so on down to one, meaning the only way any sequence can end is in the four, two, one loop.</p>
</details>

这一点尚未被证明。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This has not yet been shown.</p>
</details>

但是，在1976年，里霍·特拉斯（Riho Terras）能够证明几乎所有的考拉兹序列都达到了低于其初始值的一个点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But, in 1976, Riho Terras was able to show that almost all Collatz sequences reach a point below their initial value.</p>
</details>

1979年，这个限制被降低，几乎所有数字都降到小于X的0.869次方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1979, this limit was reduced with almost all numbers going to less than X to the power of 0.869.</p>
</details>

然后在1994年，它进一步降低到小于X的0.7925次方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then in 1994, it was further lowered to less than X to the power of 0.7925.</p>
</details>

在这种情况下，“几乎所有数字”这个术语有一个技术性的数学定义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, the term almost all numbers has a technical mathematical definition.</p>
</details>

这意味着当你观察的数字趋于无穷大时，最终落在曲线下的数字比例趋于一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It means that as the numbers you're looking at go to infinity, the fraction that end up under the curve goes to one.</p>
</details>

然后在2019年，世界上最伟大的在世数学家之一特里·陶（Terry Tao）能够证明3x+1甚至遵循更严格的标准。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then in 2019, one of the world's greatest living mathematicians, Terry Tao, was able to show 3x+1 obeys even stricter criteria.</p>
</details>

他证明了几乎所有数字最终都会小于任何任意函数f(x)，只要该函数在x趋于无穷大时也趋于无穷大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He showed almost all numbers will end up smaller than any arbitrary function f of x so long as that function goes to infinity as x goes to infinity.</p>
</details>

但该函数可以增长得非常缓慢。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the function can rise as slowly as you like.</p>
</details>

所以，log x是一个例子，或者log, log, log x也行，或者log, log, log, log x。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, log x is an example, or log, log, log x works too, or log, log, log, log x.</p>
</details>

这意味着，对于几乎所有数字，你可以保证在其序列中的某个地方存在一个任意小的数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What this means is, for almost all numbers, you can guarantee that there is an arbitrarily small number somewhere in its sequence.</p>
</details>

在2020年的一次公开演讲中，特里·陶说：“这已经尽可能接近考拉兹猜想的解决，但仍未真正解决它。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In a public talk he gave in 2020, Terry Tao said, "This is about as close as one can get to the Collatz conjecture without actually solving it."</p>
</details>

这是一个令人印象深刻的结果，但它仍然不是一个证明。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is an impressive result, but it's still not a proof.</p>
</details>

### 寻找反例的必要性

那么，为什么我们不能证明这个猜想是真的呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why can't we prove the conjecture true?</p>
</details>

会不会是因为它不是真的？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Could it be because it's not true?</p>
</details>

我的意思是，每个人都在努力证明它是真的，这意味着几乎没有人去寻找反例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, everyone is trying to prove it true, which means almost no one is looking for counterexamples.</p>
</details>

就在两年前，我曾试图证明一个东西，我努力了三年，但就是无法成功。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It had happened to me just two years ago, where there was something I was trying to prove, that I was trying for three years to prove, and I couldn't get it to work.</p>
</details>

然后我找到了一个反例，然后我意识到正确的陈述应该是什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I found a counterexample, and then I realized what the correct statement should have been.</p>
</details>

一个月后，我证明了正确的陈述。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then a month later, I proved the correct statement.</p>
</details>

也许我们应该花更多的精力去寻找反例，而不是现在这样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe we should be spending more energy looking for counterexamples than we're currently spending.</p>
</details>

我的意思是，还记得数字27是如何一路增长到9232的吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, remember how the number 27 grows all the way to 9,232?</p>
</details>

这是高达10000的起始数字的图，y轴绘制了每个起始数字达到的最大值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is a plot of seed numbers up to 10,000, with the largest number reached for each seed plotted on the y-axis.</p>
</details>

y轴止于100000，但并非所有数字都能在这个尺度上显示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The y-axis stops at a 100,000, but not all numbers can be shown at this scale.</p>
</details>

例如，起始数字9663会攀升到2700万的高度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The seed 9,663, for example, climbs as high as 27 million.</p>
</details>

到目前为止，还没有人能证明为什么一个数字不能无限增长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as yet, no one has proven why a number couldn't just shoot off to infinity.</p>
</details>

只需要一个反例就能推翻这个猜想，或者某些数字集合可能是一个不连接到主图的循环的一部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it would take only one to disprove the conjecture, or some set of numbers could be part of a loop not connected to the main graph.</p>
</details>

据我们所知，只有一个循环：“四、二、一”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As far as we know, there is only one loop: four, two, one.</p>
</details>

但如果你包含负数，就会发生一些奇怪的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But something strange happens if you include negative numbers.</p>
</details>

应用相同的3x+1规则，不是一个循环，不是两个循环，而是三个独立的数字循环。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Applying the same 3x+1 rules as before, there is not one loop, not two loops, but three independent loops of numbers.</p>
</details>

它们从-17和-5等较低的值开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they start at low values like -17 and -5.</p>
</details>

为什么在数轴的负数侧会有不连接的循环，而在正数侧却没有呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why should there be disconnected loops on the negative side of the number line, but not on the positive side?</p>
</details>

### 暴力测试的局限性与不可判定性

现在，支持这个猜想最有说服力的证据之一是特里·陶的证明，即几乎所有数字在其序列中都有一个任意小的数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, one of the most convincing pieces of evidence supporting the conjecture is Terry Tao's proof that almost all numbers have a number in their sequence that is arbitrarily small.</p>
</details>

但证明几乎所有数字都符合这个标准，与证明所有数字都符合这个标准是不同的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But proving that almost all numbers obey this criteria isn't the same thing as proving that all numbers do.</p>
</details>

一百以内的数字中有多少是完全平方数？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many numbers between one and 100 are perfect squares?</p>
</details>

答案是十个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The answer is 10.</p>
</details>

所以，高达一百的数字中有10%是完全平方数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, 10% of numbers up to 100 are perfect squares.</p>
</details>

一千以内的数字中有多少是完全平方数？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many numbers between one and 1,000 are perfect squares?</p>
</details>

答案是三十一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The answer is 31.</p>
</details>

所以，高达一千的数字中只有3.1%是完全平方数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So only 3.1% of the numbers up to 1,000 are perfect squares.</p>
</details>

你走得越高，这个百分比就越小，以至于在极限情况下，你可以说几乎所有数字都不是完全平方数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the higher you go, the smaller this percentage becomes, such that in the limit, you could say almost all numbers are not perfect squares.</p>
</details>

不是完全平方数的数字比例在X趋于无穷大时趋于一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fraction of numbers that are not perfect squares goes to one as X goes to infinity.</p>
</details>

然而我们知道存在无限多个完全平方数，并且我们确切地知道它们在哪里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And yet we know there are an infinite number of perfect squares and we know exactly where they are.</p>
</details>

现在，我们已经通过暴力计算测试了高达2的68次方的所有数字，它们都遵循考拉兹猜想。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we've tested by brute force all numbers up to two to the 68, and they all obey the Collatz conjecture.</p>
</details>

你可能会认为，我们现在应该已经找到一个反例了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you might be thinking that, well, we should have found a counterexample by this point.</p>
</details>

但在所有数字的尺度上，2的68次方微不足道。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But on the scale of all numbers, two to the 68 is nothing.</p>
</details>

我的意思是，乔治·波利亚（George Polya）在1919年提出的**波利亚猜想**（Polya conjecture: 关于自然数素因子奇偶性的猜想）断言，在任何给定数字之前，大多数自然数都有奇数个素因子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, the Polya conjecture proposed in 1919 by George Polya asserted that the majority of natural numbers up to any given number have an odd number of prime factors.</p>
</details>

这个猜想最终在1958年被C.布莱恩·哈塞尔格罗夫（C. Brian Haselgrove）证明是错误的，他找到了一个反例。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The conjecture was eventually proven false by C. Brian Haselgrove in 1958 when he identified a counterexample.</p>
</details>

值得注意的是，这个反例的值是1.845乘以10的361次方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's remarkable is the value of this counterexample was 1.845 times 10 to the 361.</p>
</details>

这比为3x+1检查过的所有数字大了大约10的340次方倍。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's some 10 to 340 times bigger than all the numbers checked for 3x+1.</p>
</details>

思考3x+1的一种方式是把它看作在**图灵机**（turing machine: 一种抽象的计算模型）上运行的简单程序。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way to think about 3x+1 is as though it's a simple program run on a turing machine.</p>
</details>

起始数字是机器的输入。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The seed number is the input to the machine.</p>
</details>

所以在这张图中，2的68次方只是一个68格长的输入带。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this picture, two to the 68 is simply an input tape 68 squares long.</p>
</details>

你可以把它们想象成一串一和零，或者黑白方块。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of them as a string of ones and zeros or black and white squares.</p>
</details>

说机器已经将所有高达68格的输入带转换成一，不应该让你对它能对所有输入都这样做抱有很大信心。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Saying the machine has transformed every input up to this 68 square taped down to one should not give you a lot of confidence that it will do so for all inputs.</p>
</details>

事实上，计算一个能显示你喜欢的任何有限行为的数字是相当简单的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, it's fairly simple to calculate a number that shows any arbitrary behavior you like, so long as it is finite.</p>
</details>

但如果你想要一个连续五次增长3/2的数字，你可以计算出那个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you want a number that increases by three over two five consecutive times, you can calculate that number.</p>
</details>

如果你想要一个连续十次、一百次或一千次增长3/2的数字，你可以轻松计算出这些数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want a number that climbs by three over two 10 times in a row, or 100 times or 1,000 times, you can easily calculate those numbers.</p>
</details>

但在你指定的有限部分之后，你就无法再控制了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But after the finite section you specify, you have no more control.</p>
</details>

而所有被测试过的数字，总是会降到一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And every that has ever been tested, always falls to one.</p>
</details>

如果存在一个反例，几乎不可能有人能猜到它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If there is a counterexample, it's virtually impossible that someone's gonna guess it.</p>
</details>

而且所有可能性的空间太大，无法通过暴力搜索穷尽。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the space of all possibilities is too big to search exhaustively by brute force.</p>
</details>

2的1000次方不是一个可搜索的空间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Two to the 1,000 is not a searchable space.</p>
</details>

所以，如果我们要找到它，我们必须通过某种智能过程，而不是通过猜测和检查。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if we're gonna find it, we have to find it by some intelligent process and not by guess and check.</p>
</details>

我支持3x+1团队已经20年了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had been on team 3x+1 for 20 years.</p>
</details>

然后从这个角度看，我意识到，我们真正知道什么？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then this point of view, I realized that, what do we really know?</p>
</details>

要证明一个错误的定理是非常困难的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's very hard to prove a theorem that's false.</p>
</details>

那么，会不会是每个人都在努力证明这个东西，因为它实际上不是真的呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, could it be that everyone is struggling to prove this thing because it's not actually true?</p>
</details>

而2的60次方并不是很多证据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And two to the 60 is not a lot of evidence.</p>
</details>

即使是统计版本也可能只是真的，而不是3x+1序列中某个地方不存在发散轨迹的证据。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And even the statistical version is maybe true and not evidence for the non-existence of a divergent trajectory somewhere in the 3x+1 sequence.</p>
</details>

当然还有另一种可能性，那就是我们永远不会知道，这个问题是**不可判定**（undecidable: 在数学逻辑中，指没有算法可以在有限时间内解决的问题）的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course there is another option, and that is that we'll never know, that the problem is undecidable.</p>
</details>

1987年，约翰·康威（John Conway）创建了3x+1的泛化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1987, John Conway created a generalization of 3x+1.</p>
</details>

那是一个他称之为FRACTRAN的数学机器。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was a mathematical machine that he called FRACTRAN.</p>
</details>

他能够证明这台机器是**图灵完备**（turing-complete: 能够模拟任何图灵机计算能力的系统）的，这意味着它可以做任何现代计算机能做的事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And he was able to show this machine is turing-complete, which means it can do anything a modern computer can do,</p>
</details>

但这也意味着它受制于**停机问题**（halting problem: 判定任意程序是否会在有限时间内停止运行的问题），即机器可能永远不会停止运行，因此不会给你输出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but it also means that it's subject to the halting problem, a chance that the machine never stops running and so doesn't give you an output.</p>
</details>

这并不能证明3x+1也受制于停机问题，但鉴于我们所知，我们可能永远无法证明考拉兹猜想是真还是假。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this does not prove that 3x+1 is also subject to the halting problem, but it is possible that given what we know, we may never prove the Collatz conjecture true or false.</p>
</details>

### 数学之美与挑战

你会在学校里被教导我们知道很多东西，但这都是谎言。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You're gonna be taught in school that we know a bunch of stuff, and it's a lie.</p>
</details>

它们都是谎言。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're all lies.</p>
</details>

看这个愚蠢的小问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's this stupid little problem.</p>
</details>

真的，我们不能解决这个吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Come on, really we can't solve this?</p>
</details>

真的吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Really?</p>
</details>

你知道，这只是表明数学很难。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, it just shows that math is hard.</p>
</details>

如果说有什么的话，那就是我们能解决的所有问题都是奇迹。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If anything, it shows that all of the things that we can solve are miracles.</p>
</details>

我们没有权利解决所有这些其他问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have no right to have solutions to all of these other problems.</p>
</details>

我一生都认为数字是这些极其规律的事物，充满了模式、对称和重复。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- For my whole life, I've thought of numbers as these incredibly regular things full of patterns, symmetry, and repetition.</p>
</details>

但我现在才意识到数字是多么奇特。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what I'm realizing only now is just how peculiar numbers really are.</p>
</details>

在珊瑚表示法中，你可以最清楚地看到这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see this most clearly in the coral representation.</p>
</details>

一个简单的数学运算产生了如此复杂、有机形态的结构，到目前为止，我们仍无法解决。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From a simple mathematical operation comes something intricate, organic-looking, and, thus far, intractable to us.</p>
</details>

所有数字都连接到这个结构吗，还是存在一些独特的细丝，一根纤细的小线，不连接到任何地方，而是奔向无穷远？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do all numbers connect to the structure, or is there some unique filament, a spindly little thread, that doesn't connect to any of this, that runs off to infinity?</p>
</details>

为什么如此难以分辨？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And why is it so hard to tell?</p>
</details>

我想这就是保罗·埃尔德什说“数学尚未成熟到足以解决这类问题”的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's why Paul Erdos said, "Mathematics is not yet ripe enough for such questions."</p>
</details>

我喜欢3x+1的原因是它是一个几乎任何人都能理解并尝试解决的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I love about 3x+1 is it's a problem almost anyone can understand and play around with.</p>
</details>

而真正尝试自己找出答案是最好的学习方式，这就是我订阅了Brilliant的原因，它是这个视频的赞助商。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And actually trying to figure things out for yourself is the best way to learn, which is why I subscribed to Brilliant, the sponsor of this video.</p>
</details>

最近，Brilliant增强了其互动性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, recently, Brilliant have upped their interactivity.</p>
</details>

例如，这是一个关于勾股定理的精彩课程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, here is a great lesson on the Pythagorean theorem.</p>
</details>

所以，你不仅仅是记住公式，而是真正理解它的含义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you don't just remember the formula, but you really understand what it means.</p>
</details>

Brilliant是一个网站和应用程序，旨在通过让你参与解决问题来让你深入思考。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, Brilliant is a website and an app designed to get you thinking deeply by engaging you in problem-solving.</p>
</details>

阅读教科书并认为你理解了是一回事，但与互动内容一起玩并边学边测试自己则是另一回事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's one thing to read through a textbook and think that you get it, but it's quite another to play with interactives and actually test yourself as you go,</p>
</details>

Brilliant精心策划这些体验，使它们随着时间的推移变得越来越有挑战性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and Brilliant curates the experiences so they get more and more challenging over time.</p>
</details>

总有有用的提示或解释，能将你的理解提升到新的水平。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's always a helpful tip or explanation that takes your understanding to the next level.</p>
</details>

我强烈推荐他们的数学基础课程，现在它有了更多的互动性，并且包含了与STEM所有领域相关的课题以及对编程感兴趣的人的算法基础。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'd highly recommend their course on mathematical fundamentals, which now has even more interactivity and it has topics that are relevant to all areas of STEM and algorithm fundamentals for anyone interested in coding.</p>
</details>

拥有这样的资源来激励你每天学习新知识真是太棒了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's great to have a resource like this to inspire you to learn something new every single day.</p>
</details>

我尝试通过Brilliant挑战自己来开始新的一天。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I try to start off my day by challenging myself with Brilliant.</p>
</details>

所以如果你想加入我和其他八百万学习者社区，请访问brilliant.org/veritasium。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if you'd like to join me and a community of 8 million other learners, go to brilliant.org/veritasium.</p>
</details>

我会把链接放在描述中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will put that link down in the description.</p>
</details>

所以我要感谢Brilliant赞助这个视频，也要感谢你的观看。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wanna thank Brilliant for sponsoring this video, and I wanna thank you for watching.</p>
</details>