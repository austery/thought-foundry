---
area: society-systems
category: science
date: '2021-05-22'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Euclid's Elements
- Principia Mathematica
people:
- John Conway
- David Hilbert
- Bertrand Russell
- Alan Turing
- John von Neumann
- Henri Poincaré
products_models:
- ENIAC
project:
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=HeQX2HjkcNo
speaker: veritasium
status: evergreen
summary: 本文探讨了数学领域中存在的根本性缺陷，即“不确定性”和“不可判定性”。从孪生质数猜想、康威生命游戏等例子出发，深入介绍了康托尔的集合论、罗素悖论，以及哥德尔不完备定理如何揭示了数学系统固有的局限性。最终，文章阐述了图灵如何通过“停机问题”证明了数学的不可判定性，并在此基础上发明了现代计算机，从而改变了世界。
tags:
- problem
- science
- undecidability
title: 数学的根本缺陷：不确定性、不可判定性与现代计算的诞生
---

### 数学深处的“漏洞”

数学的底层存在一个漏洞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a hole at the bottom of math</p>
</details>

这个漏洞意味着我们永远无法确定地了解一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a hole that means we will never know everything with certainty</p>
</details>

总会有一些真命题是无法被证明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There will always be true statements that cannot be proven.</p>
</details>

目前没有人确切知道这些命题是什么，但它们可能类似于**孪生质数猜想**（Twin Prime Conjecture: 指存在无限多对相差2的质数）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now no one knows what those statements are exactly but they could be something like the Twin Prime Conjecture.</p>
</details>

孪生质数是指只相隔一个数字的质数，例如11和13，或者17和19。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Twin primes are prime numbers that are separated by just one number like 11 and 13, or 17 and 19.</p>
</details>

随着数字的增大，质数出现的频率越来越低，而孪生质数则更为罕见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as you go up the number line primes occur less frequently and twin primes are rarer still.</p>
</details>

但孪生质数猜想认为，存在无限多对孪生质数，你永远不会用完它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the Twin Prime Conjecture is that there are infinitely many twin primes. You never run out them.</p>
</details>

截至目前，没有人能证明这个猜想是真还是假。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As of right now no one has proven this conjecture true or false.</p>
</details>

但令人惊讶的是：我们可能永远无法知道答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the crazy thing is this: we may never know</p>
</details>

因为已经证明，在任何可以进行基本算术的数学系统中，总会有一些真命题是无法被证明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because what has been proven is that in any system of mathematics where you can do basic arithmetic there will always be true statements that are impossible to prove.</p>
</details>

### 康威生命游戏：一个不可判定的例子

这就是生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is life.</p>
</details>

具体来说，这是由数学家约翰·康威（John Conway）于1970年创建的**生命游戏**（Game of Life: 一种零玩家游戏，通过简单规则模拟细胞演化）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Specifically this is the Game of Life, created in 1970 by mathematician John Conway</p>
</details>

不幸的是，他于2020年因新冠肺炎去世。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sadly he passed away in 2020 from covet 19.</p>
</details>

康威的生命游戏在一个无限的方格网格上进行，每个方格细胞要么是“活”的，要么是“死”的，并且只有两条规则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Conway's game of life is played on an infinite grid of square cells each of which is either live or dead and there are only two rules</p>
</details>

第一，任何有正好三个活邻居的死细胞会复活；第二，任何活细胞如果邻居少于两个或多于三个，就会死亡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one any dead cell with exactly three neighbors comes to life and two any living cell with less than two or more than three neighbors dies</p>
</details>

一旦你设置了细胞的初始排列，这两条规则就会被应用来创建下一代，然后是再下一代，以此类推，完全自动化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">once you've set up the initial arrangement of cells the two rules are applied to create the next generation and then the one after that and the one after that and so on it's totally automatic</p>
</details>

康威称之为“零玩家游戏”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Conway called it a zero player game</p>
</details>

尽管规则简单，但游戏本身可以产生各种各样的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but even though the rules are simple the game itself can generate a wide variety of behavior</p>
</details>

有些模式一旦出现就稳定不变；有些则来回振荡，形成一个循环；少数模式可以像这个滑翔机一样永远在网格上移动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">some patterns are stable once they arise they never change others oscillate back and forth in a loop a few can travel across the grid forever like this glider here</p>
</details>

许多模式最终会消失，但少数模式会永远增长，不断生成新的细胞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">many patterns just fizzle out but a few keep growing forever they keep generating new cells</p>
</details>

你可能会认为，鉴于游戏规则简单，你可以查看任何模式并确定它会发生什么——它最终会达到稳定状态，还是会无限增长？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now you would think that given the simple rules of the game you could just look at any pattern and determine what will happen to it will it eventually reach a steady state or will it keep growing without limit</p>
</details>

但事实证明，这个问题是无法回答的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but it turns out this question is impossible to answer</p>
</details>

康威生命游戏中一个模式的最终命运是**不可判定**（Undecidable: 指不存在一个算法能在有限时间内解决该问题）的，这意味着没有一个算法能够保证在有限时间内回答这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the ultimate fate of a pattern in Conway's game of life is undecidable meaning there is no possible algorithm that is guaranteed to answer the question in a finite amount of time</p>
</details>

你当然可以尝试运行这个模式，看看会发生什么，毕竟游戏规则本身就是一种算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you could always just try running the pattern and see what happens i mean the rules of the game are a kind of algorithm after all</p>
</details>

但这也不能保证给你一个答案，因为即使你运行了一百万代，你仍然无法判断它会持续多久——是永远，还是仅仅两百万代，或者十亿代，甚至一个古戈尔（googleplex）代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but that's not guaranteed to give you an answer either because even if you run it for a million generations you won't be able to say whether it'll last forever or just 2 million generations or a billion or a googleplex</p>
</details>

康威的生命游戏有什么特殊之处，使其不可判定吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is there something special about the game of life that makes it undecidable</p>
</details>

不，实际上有大量的系统是不可判定的，比如**王氏砖块**（Wang Tiles: 一种带有颜色边的方块，要求相邻边的颜色匹配，用于研究不可判定性）、量子物理、航空票务系统，甚至《万智牌》（Magic: The Gathering）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">nope there are actually a huge number of systems that are undecidable like Wang tiles quantum physics airline ticketing systems and even magic the gathering</p>
</details>

要理解不可判定性是如何出现在所有这些地方的，我们必须回到150年前，那是一场数学领域的全面反叛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to understand how undecidability shows up in all of these places we have to go back 150 years to a full-blown revolt in mathematics</p>
</details>

### 康托尔的集合论与数学的危机

1874年，德国数学家格奥尔格·康托尔（Georg Cantor）发表了一篇论文，开创了数学的一个新分支，称为**集合论**（Set Theory: 研究集合的数学理论）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in 1874 Georg Cantor a german mathematician published a paper that launched a new branch of mathematics called set theory</p>
</details>

一个集合就是一组定义明确的事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a set is just a well-defined collection of things</p>
</details>

所以你脚上的两只鞋是一个集合，世界上所有的天文馆也是一个集合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the two shoes on your feet are a set as are all the planetariums in the world</p>
</details>

有一个什么都没有的集合，称为空集，还有一个包含所有事物的集合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there's a set with nothing in it the empty set and a set with everything in it</p>
</details>

康托尔当时正在思考数字的集合，比如自然数（正整数，如1、2、3、4等）和实数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now Cantor was thinking about sets of numbers like natural numbers positive integers like 1 2 3 4 and so on and real numbers</p>
</details>

实数包括分数（如三分之一、二分之五）和无理数（如π、e和根号二），基本上任何可以表示为无限小数的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which include fractions like a third five halves and also irrational numbers like pi e and the square root of two basically any number that can be represented as an infinite decimal</p>
</details>

他想知道，自然数更多，还是0到1之间的实数更多？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he wondered are there more natural numbers or more real numbers between zero and one</p>
</details>

答案可能看起来很明显，每种都有无限个，所以两个集合的大小应该相同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the answer might seem obvious there are an infinite number of each so both sets should be the same size</p>
</details>

但为了验证这个逻辑，康托尔设想写下一个无限列表，将一侧的每个自然数与另一侧0到1之间的实数一一对应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but to check this logic canter imagined writing down an infinite list matching up each natural number on one side with a real number between zero and one on the other</p>
</details>

由于每个实数都是一个无限小数，所以没有第一个实数，我们可以按任何随机顺序写下它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now since each real number is an infinite decimal there is no first one so we can just write them down in any random order</p>
</details>

关键是要确保我们列出了所有实数，没有重复，并与整数一一对应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the key is to make sure we get them all with no duplicates and line them up one to one with an integer</p>
</details>

如果我们可以做到这一点，并且没有遗漏，那么我们就知道自然数集和0到1之间的实数集大小相同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if we can do that with none left over well then we know that the set of natural numbers and the set of real numbers between 0 and 1 are the same size</p>
</details>

所以假设我们已经完成了这个操作，我们有一个完整的无限列表，每个整数都像一个索引号一样，是列表中每个实数的唯一标识符。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so assume we've done that we have a complete infinite list with each integer acting like an index number a unique identifier for each real number on the list</p>
</details>

现在，康托尔说，开始写一个新的实数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now Cantor says start writing down a new real number</p>
</details>

我们这样做的方法是：取第一个数字的第一位，然后加一；然后取第二个数字的第二位，再加一；取第三个数字的第三位，加一，并一直这样做下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the way we're going to do it is by taking the first digit of the first number and adding one then take the second digit of the second number and again add one take the third digit of the third number add one and keep doing this all the way down the list</p>
</details>

如果数字是九，就把它改回八。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if the digit is a nine just roll it back to an eight</p>
</details>

通过这个过程，你将得到一个介于0和1之间的实数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and by the end of this process you'll have a real number between zero and one</p>
</details>

但关键是：这个数字不会出现在我们的列表中的任何地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but here's the thing this number won't appear anywhere on our list</p>
</details>

它与第一个数字在第一位小数不同，与第二个数字在第二位小数不同，依此类推。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's different from the first number in the first decimal place different from the second number in the second decimal place and so on down the line</p>
</details>

它必须与列表中的每个数字至少有一位不同，这就是对角线上的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it has to be different from every number on the list by at least one digit the number on the diagonal</p>
</details>

这就是为什么这被称为**康托尔对角线证明**（Cantor's Diagonalization Proof: 证明实数集比自然数集“更大”的方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's why this is called Cantor's diagonalization proof</p>
</details>

它表明，0到1之间的实数必须比延伸到无穷大的自然数更多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it shows there must be more real numbers between 0 and 1 then there are natural numbers extending out to infinity</p>
</details>

所以，并非所有的无限都是相同大小的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so not all infinities are the same size</p>
</details>

康托尔分别称它们为可数无限和不可数无限，事实上，还有更多更大、不可数的无限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor call these countable and uncountable infinities respectively and in fact there are many more uncountable infinities which are even larger</p>
</details>

康托尔的工作只是对数学的最新打击。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now Cantor's work was just the latest blow to mathematics</p>
</details>

2000年来，**欧几里得的《几何原本》**（Euclid's Elements: 古希腊数学家欧几里得的数学巨著，奠定了几何学基础）一直被认为是该学科的基石。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for 2000 years Euclid's elements were considered the bedrock of the discipline</p>
</details>

但在19世纪初，罗巴切夫斯基（Lobashevsky）和高斯（Gauss）发现了非欧几何，这促使数学家们更密切地审视他们领域的基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but at the turn of the 19th century Lobashevsky and gauss discovered non-Euclidean geometries and this prompted mathematicians to examine more closely the foundations of their field</p>
</details>

他们不喜欢他们所看到的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and they did not like what they saw</p>
</details>

微积分核心的“极限”概念被证明定义不明确，而现在康托尔又表明无限本身比任何人想象的都要复杂得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the idea of a limit at the heart of calculus turned out to be poorly defined and now Cantor was showing that infinity itself was much more complex than anyone had imagined</p>
</details>

在所有这些动荡中，数学分裂了，19世纪末数学家们爆发了一场巨大的争论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in all this upheaval mathematics fractured and a huge debate broke out among mathematicians at the end of the 1800s</p>
</details>

### 形式主义与直觉主义之争

一方面是**直觉主义者**（Intuitionists: 认为数学是人类心智的创造，反对无限概念），他们认为康托尔的工作是胡说八道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on the one side were the intuitionists who thought that Cantor's work was nonsense</p>
</details>

他们坚信数学是人类心智的纯粹创造，康托尔所说的无限并非真实存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">they were convinced that math was a pure creation of the human mind and that infinities like Cantors weren't real</p>
</details>

亨利·庞加莱（Henri Poincaré）说，后代会将集合论视为一种“已康复的疾病”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Henri Poincaré said that later generations will regard set theory as a disease from which one has recovered</p>
</details>

利奥波德·克罗内克（Leopold Kronecker）称康托尔为“科学骗子”和“青年腐蚀者”，并致力于阻止康托尔获得他想要的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Leopold Kronecker called Cantor a scientific charlatan and a corrupter of the youth and he worked to keep Cantor from getting a job he wanted</p>
</details>

另一方面是**形式主义者**（Formalists: 认为数学可以通过集合论建立在安全的逻辑基础上），他们认为数学可以通过康托尔的集合论建立在绝对安全的逻辑基础上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on the other side were the formalists they thought that math could be put on absolutely secure logical foundations through Cantor's set theory</p>
</details>

形式主义者的非官方领袖是德国数学家大卫·希尔伯特（David Hilbert）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the informal leader of the formalists was the german mathematician David Hilbert</p>
</details>

希尔伯特是一位活着的传奇人物，一位在数学几乎所有领域都工作过的极具影响力的数学家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert was a living legend a hugely influential mathematician who had worked in nearly every area of mathematics</p>
</details>

他差点在广义相对论上抢在爱因斯坦之前，他发展了对量子力学至关重要的新数学概念，并且他知道康托尔的工作是卓越的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he almost beat Einstein to the punch on general relativity he developed entirely new mathematical concepts that were crucial for quantum mechanics and he knew that Cantor's work was brilliant</p>
</details>

希尔伯特坚信，一个基于集合论的更形式化、更严谨的数学证明系统可以解决上个世纪数学中出现的所有问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert was convinced that a more formal and rigorous system of mathematical proof based on set theory could solve all the issues that had cropped up in math over the last century</p>
</details>

大多数其他数学家也同意他的看法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and most other mathematicians agreed with him</p>
</details>

希尔伯特宣称：“没有人能把我们从康托尔创造的天堂中驱逐出去。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">no one shall expel us from the paradise that Cantor has created Hilbert declared</p>
</details>

### 罗素悖论与自指问题

但在1901年，伯特兰·罗素（Bertrand Russell）指出了康托尔集合论中的一个严重问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but in 1901 Bertrand Russell pointed out a serious problem in Cantor's set theory</p>
</details>

罗素知道，如果集合可以包含任何东西，它们就可以包含其他集合，甚至它们自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Russell knew that if sets can contain anything they can contain other sets or even themselves</p>
</details>

例如，所有集合的集合必须包含它自己，元素多于五个的集合的集合也必须包含它自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for example the set of all sets must contain itself as does the set of sets with more than five elements in them</p>
</details>

你甚至可以谈论所有包含自身的集合的集合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you could even talk about the set of all sets that contain themselves</p>
</details>

但这直接导致了一个问题：关于R，即所有不包含自身的集合的集合，会怎样呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but this leads straight to a problem what about r the set of all sets that don't contain themselves</p>
</details>

如果R不包含自身，那么它就必须包含自身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if r doesn't contain itself well then it must contain itself</p>
</details>

但如果R确实包含自身，那么根据定义，它就不能包含自身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but if r does contain itself then by definition it must not contain itself</p>
</details>

所以R包含自身当且仅当它不包含自身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so r contains itself if and only if it doesn't</p>
</details>

罗素发现了另一个**自指悖论**（Paradox of Self-Reference: 语句或概念指向自身时产生的逻辑矛盾），他后来用一个毛茸茸的类比来解释他的悖论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Russell had found another paradox of self-reference and he later explained his paradox using a hairy analogy</p>
</details>

假设有一个村庄，里面住满了成年男子，他们有一条奇怪的法律禁止留胡子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">let's say there's a village populated entirely by grown men with a strange law against beards</p>
</details>

具体来说，法律规定村里的理发师必须只给那些不给自己刮胡子的男人刮胡子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">specifically the law states that the village barber must shave all and only those men of the village who do not shave themselves</p>
</details>

但理发师自己也住在村里，他也是个男人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the barber himself lives in the village too of course and he's a man</p>
</details>

那么谁给他刮胡子呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so who shaves him</p>
</details>

如果他不给自己刮胡子，那么理发师就必须给他刮胡子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if he doesn't shave himself then the barber has to shave him</p>
</details>

但理发师不能给自己刮胡子，因为理发师不给任何自己刮胡子的人刮胡子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the barber can't shave himself because the barber doesn't shave anyone who shaves themselves</p>
</details>

所以理发师必须给自己刮胡子，当且仅当他不给自己刮胡子，这是一个矛盾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the barber must shave himself if and only if he doesn't shave himself it's a contradiction</p>
</details>

直觉主义者为罗素悖论而欢欣鼓舞，认为它证明了集合论无可救药地存在缺陷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the intuitionists rejoiced at Russell's paradox thinking it had proven set theory hopelessly flawed</p>
</details>

但策梅洛（Zermelo）和希尔伯特学派的其他数学家通过限制集合的概念解决了这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but zermelo and other mathematicians from Hilbert school solved the problem by restricting the concept of a set</p>
</details>

例如，所有集合的集合不再是一个集合，所有不包含自身的集合的集合也不再是一个集合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the collection of all sets for example is not a set anymore and neither is the collection of all sets which don't contain themselves</p>
</details>

这消除了自指带来的悖论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this eliminated the paradoxes that come with self-reference</p>
</details>

希尔伯特和形式主义者得以继续战斗，但自指问题并没有那么容易消亡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert and the formalists lived to fight another day but self-reference refused to die quite that easily</p>
</details>

快进到20世纪60年代，数学家王浩（Hao Wang）正在研究像这样的四边颜色不同的方块。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">fast forward to the 1960s and mathematician Hao Wang was looking at square tiles with different colors on each side like these</p>
</details>

规则是相邻的边必须颜色相同，并且不能旋转或翻转方块，只能滑动它们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the rules were that touching edges must be the same color and you can't rotate or reflect tiles only slide them around</p>
</details>

问题是，如果你得到一组任意的这些方块，你能判断它们是否能铺满平面吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the question was if you're given an arbitrary set of these tiles can you tell if they will tile the plane that is will they connect up with no gaps all the way out to infinity</p>
</details>

也就是说，它们能否连接起来，没有缝隙，一直延伸到无限远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it turns out you can't tell for an arbitrary set of tiles whether they will tile the plane or not</p>
</details>

事实证明，你无法判断一组任意的方块是否能铺满平面，这个问题是不可判定的，就像康威生命游戏中一个模式的命运一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the problem is undecidable just like the fate of a pattern in Conway's game of life</p>
</details>

事实上，这是完全相同的问题，而这个问题最终源于自指，正如希尔伯特和形式主义者即将发现的那样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in fact it's exactly the same problem and that problem ultimately comes from self-reference as Hilbert and the formalists were about to discover</p>
</details>

### 哥德尔不完备定理：希尔伯特梦想的破灭

希尔伯特希望通过开发一种新的数学证明系统来巩固数学的基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert wanted to secure the foundations of mathematics by developing a new system for mathematical proofs</p>
</details>

证明系统是一个古老的想法，可以追溯到古希腊。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">systems of proof were an old idea going back to the ancient greeks</p>
</details>

一个证明系统从**公理**（Axioms: 被假定为真的基本陈述）开始，这些基本陈述被假定为真，例如“任意两点之间可以画一条直线”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a system of proof starts with axioms basic statements that are assumed to be true like a straight line can be drawn between any two points</p>
</details>

然后，证明是通过使用**推理规则**（Rules of Inference: 从现有陈述推导出新陈述的方法）从这些公理构建的，这些规则旨在保持真理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">proofs are then constructed from those axioms using rules of inference methods for using existing statements to derive new statements</p>
</details>

如果现有陈述是真的，那么新陈述也是真的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and these are chosen to preserve truth the existing statements are true then so are the new ones</p>
</details>

希尔伯特想要一个形式化的证明系统，一种具有严格符号操作规则的符号逻辑语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert wanted a formal system of proof a symbolic logical language with a rigid set of manipulation rules for those symbols</p>
</details>

逻辑和数学陈述可以被翻译成这个系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">logical and mathematical statements could then be translated into this system</p>
</details>

“如果你掉了一本书，那么它就会掉下来”将被表达为“A则B”，而“没有人是不朽的”将像这样表达。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if you drop a book then it will fall would be a then b and no human is immortal would be expressed like this</p>
</details>

希尔伯特和形式主义者希望将数学公理表达为形式系统中的符号陈述，并将推理规则设置为系统的符号操作规则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert and the formalists wanted to express the axioms of mathematics as symbolic statements in a formal system and set up the rules of inference as the system's rules for symbol manipulation</p>
</details>

因此，罗素（Russell）与阿尔弗雷德·诺斯·怀特海（Alfred North Whitehead）一起，在他们1913年出版的三卷本**《数学原理》**（Principia Mathematica: 罗素和怀特海合著的数学逻辑巨著）中开发了这样一个形式系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so Russell along with Alfred North Whitehead developed a formal system like this in their three-volume Principia Mathematica published in 1913.</p>
</details>

《数学原理》内容浩瀚，总计近2000页密集的数学符号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Principia Mathematica is vast a total of nearly 2 000 pages of dense mathematical notation</p>
</details>

仅仅是证明“1加1等于2”就需要762页。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it takes 762 pages just to get to a complete proof that one plus one equals two</p>
</details>

此时，罗素和怀特海干巴巴地写道：“上述命题偶尔有用。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">at which point Russell and Whitehead dryly note the above proposition is occasionally useful</p>
</details>

作者最初计划出版第四卷，但不出所料，他们太疲惫了，无法完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the authors had originally planned a fourth volume but unsurprisingly they were too worn out to complete it</p>
</details>

所以，是的，符号是密集而令人筋疲力尽的，但它也是精确的，不像普通语言，它没有留下错误或模糊逻辑潜入的空间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so yes the notation is dense and exhausting but it is also exact unlike ordinary languages it leaves no room for errors or fuzzy logic to creep in</p>
</details>

最重要的是，它允许你证明形式系统本身的属性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and most importantly it allows you to prove properties of the formal system itself</p>
</details>

希尔伯特希望数学能回答三个大问题：

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there were three big questions that Hilbert wanted answered about mathematics</p>
</details>

第一，数学是否**完备**（Complete: 指所有真命题都能被证明）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">number one is math complete meaning is there a way to prove every true statement does every true statement have a proof</p>
</details>

也就是说，是否有办法证明每一个真命题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">number two is mathematics consistent meaning is it free of contradictions</p>
</details>

第二，数学是否**一致**（Consistent: 指系统中不存在矛盾，即不能同时证明一个命题及其反命题）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">i mean if you can simultaneously prove a and not a then that's a real problem because you can prove anything at all</p>
</details>

我的意思是，如果你能同时证明A和非A，那将是一个真正的问题，因为你就可以证明任何事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and number three is math decidable meaning is there an algorithm that can always determine whether a statement follows from the axioms</p>
</details>

第三，数学是否**可判定**（Decidable: 指是否存在一个算法，总能判断一个命题是否能从公理推导出来）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now Hilbert was convinced that the answers to all three of these questions was yes</p>
</details>

希尔伯特坚信这三个问题的答案都是“是”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">at a major conference in 1930 Hilbert gave a fiery speech about these questions</p>
</details>

在1930年的一次重要会议上，希尔伯特就这些问题发表了一场激烈的演讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he ended it with a line that summed up his formalist dream in opposition to the foolish ignorabimus which means we will not know our slogan shall be we must know we will know</p>
</details>

他以一句话结束了演讲，这句话总结了他的形式主义梦想，与愚蠢的“我们不会知道”（ignorabimus）相对立，他的口号是“我们必须知道，我们将会知道”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">these words are literally on his grave</p>
</details>

这些话刻在他的墓碑上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but by the time Hilbert gave this speech his dream was already crumbling</p>
</details>

但当希尔伯特发表这次演讲时，他的梦想已经开始破灭。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">just the day before at a small meeting at the same conference a 24 year old logician named Kurt Gödel explained that he had found the answer to the first of Hilbert's three big questions about completeness and the answer was no</p>
</details>

就在前一天，在同一会议的一个小型会议上，24岁的逻辑学家库尔特·哥德尔（Kurt Gödel）解释说，他已经找到了希尔伯特关于完备性的三个大问题中第一个问题的答案，答案是“否”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">a complete formal system of mathematics was impossible</p>
</details>

一个完备的形式化数学系统是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the only person who paid much attention was John von Neumann one of Hilbert's former students who pulled Gödel aside to ask a few questions</p>
</details>

唯一引起注意的人是约翰·冯·诺伊曼（John von Neumann），希尔伯特以前的学生之一，他把哥德尔拉到一边问了几个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the next year Gödel published a proof of his incompleteness theorem and this time everyone including Hilbert took notice</p>
</details>

但第二年，哥德尔发表了他的**不完备定理**（Incompleteness Theorem: 哥德尔证明了任何足够强大的形式系统都存在无法证明的真命题），这次包括希尔伯特在内的所有人都注意到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is how Gödel's proof works</p>
</details>

哥德尔的证明是这样运作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gödel wanted to use logic and mathematics to answer questions about the very system of logic and mathematics</p>
</details>

哥德尔想用逻辑和数学来回答关于逻辑和数学系统本身的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and so he took all these basic symbols of a mathematical system and then he gave each one a number</p>
</details>

于是他取了数学系统的所有这些基本符号，然后给每个符号一个数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is known as the symbol's Gödel number</p>
</details>

这被称为符号的**哥德尔数**（Gödel Number: 将数学符号和语句编码为唯一整数的方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the symbol for not gets the number one or has the Gödel number two if then it's Gödel number three</p>
</details>

所以“非”符号得到数字一，“或”的哥德尔数是二，“如果...那么...”的哥德尔数是三。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now if you're expressing all of these symbols with numbers then what do you do about the numbers themselves</p>
</details>

现在，如果你用数字来表达所有这些符号，那么数字本身怎么办呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well zero gets its own Gödel number six and if you want to write a one you just put this successor symbol next to it</p>
</details>

零有它自己的哥德尔数六，如果你想写一，你只需在它旁边放这个后继符号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the immediate successor of zero is 1. and if you want to write 2 then you have to write ss0 and that represents 2 and so on</p>
</details>

零的直接后继是1。如果你想写2，你就必须写ss0，它代表2，依此类推。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so you could represent any positive integer this way granted it is cumbersome but it works and that is the point of this system</p>
</details>

所以你可以用这种方式表示任何正整数，诚然它很繁琐，但它有效，这就是这个系统的重点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so now that we have Gödel numbers for all of the basic symbols and all of the numbers we might want to use we can start to write equations like we could write zero equals zero</p>
</details>

所以现在我们有了所有基本符号和我们可能想使用的所有数字的哥德尔数，我们可以开始写方程，比如我们可以写零等于零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so these symbols have the Gödel numbers six five six and we can actually create a new card that represents this equation zero equals zero</p>
</details>

所以这些符号的哥德尔数是六、五、六，我们实际上可以创建一个新的卡片来表示这个方程：零等于零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the way we do it is we take the prime numbers starting at 2 and we raise each one to the power of the Gödel number of the symbol in our equation</p>
</details>

我们这样做的方法是，我们取从2开始的质数，并将每个质数提升到方程中符号的哥德尔数次幂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we have 2 to the power of 6 times 3 to the power of 5 times 5 to the power of 6 equals 243 million</p>
</details>

所以我们有2的6次方乘以3的5次方乘以5的6次方等于2.43亿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so 243 million is the Gödel number of the whole equation zero equals zero</p>
</details>

所以2.43亿是整个方程“零等于零”的哥德尔数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we can write down Gödel numbers for any set of symbols that you can imagine</p>
</details>

我们可以为任何你能想象到的符号集写下哥德尔数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so really this is an infinite deck of cards where any set of symbols that you want to write down in a sequence you can represent with a unique Gödel number</p>
</details>

所以这实际上是一个无限的卡片组，你想要按顺序写下的任何符号集都可以用一个唯一的哥德尔数来表示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the beauty of this Gödel number is you can do a prime factorization of it and you can work out exactly what symbols made up this card</p>
</details>

这个哥德尔数的美妙之处在于你可以对其进行质因数分解，并精确地找出这张卡片是由哪些符号组成的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so in this whole pack of cards there are going to be true statements and there are going to be false statements</p>
</details>

所以在这整副卡片中，会有真命题，也会有假命题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so how do you prove that something is true well you need to go to the axioms</p>
</details>

那么你如何证明某事是真的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the axioms also have their own Gödel numbers which are formed in the same way</p>
</details>

你需要回到公理。公理也有它们自己的哥德尔数，以相同的方式形成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so here's an axiom which says not the successor of any number x equals zero which makes sense because in this system there are no negative numbers and so the successor of any number cannot be zero</p>
</details>

这里有一个公理，它说任何数字x的后继不等于零，这是有道理的，因为在这个系统中没有负数，所以任何数字的后继都不可能为零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we can put down this axiom and then we can substitute in zero for x saying that one does not equal zero and we've created a proof</p>
</details>

所以我们可以写下这个公理，然后用零代替x，说一不等于零，我们就创建了一个证明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is the simplest proof i can think of that shows that one does not equal zero</p>
</details>

这是我能想到的最简单的证明，它表明一不等于零。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now this card for the proof of one does not equal zero gets its own Gödel number</p>
</details>

现在，这张证明一不等于零的卡片也有它自己的哥德尔数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the way we calculate this Gödel number is just as before we take the prime numbers and we raise 2 to the power of the axiom times 3 to the power of 1 does not equal 0 and we get a tremendously large number</p>
</details>

我们计算这个哥德尔数的方法和以前一样，我们取质数，并将2提升到公理的幂次，乘以3提升到“1不等于0”的幂次，我们得到一个巨大的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it would have 73 million digits if you calculated it all out so i've just left it here in exponential notation</p>
</details>

如果你全部计算出来，它将有7300万位数字，所以我只是在这里用指数记法表示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">as you can see these numbers get very large and so you might want to start just calling them by letters so we could say this one is Gödel number a this is Gödel number b Gödel number c and so on</p>
</details>

如你所见，这些数字变得非常大，所以你可能想开始用字母来称呼它们，比如我们可以说这个是哥德尔数a，这个是哥德尔数b，哥德尔数c等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gödel goes to all this trouble to find this card which says there is no proof for the statement with Gödel number g</p>
</details>

哥德尔费尽周折找到了这张卡片，上面写着“哥德尔数g的陈述没有证明”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the trick is that the Gödel number of this card is g</p>
</details>

诀窍是这张卡片的哥德尔数就是g。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so what this statement is really saying is this card is unprovable</p>
</details>

所以这个陈述真正说的是“这张卡片是不可证明的”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there is no proof anywhere in our infinite deck for this card</p>
</details>

在我们无限的卡片组中，没有这张卡片的任何证明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now think about it if it's false and there is a proof then what you have just proven is there is no proof so you're stuck with a contradiction</p>
</details>

现在想想看，如果它是假的，并且存在一个证明，那么你刚刚证明的就是“没有证明”，所以你陷入了一个矛盾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that would mean the mathematical system is inconsistent</p>
</details>

那将意味着数学系统是不一致的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the other alternative is that this card is true there is no proof for the statement with Gödel number g</p>
</details>

另一种可能性是这张卡片是真的，即“哥德尔数g的陈述没有证明”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but that means this mathematical system has true statements in it that have no proof so your mathematical system is incomplete</p>
</details>

但这意味这个数学系统中有真命题却没有证明，所以你的数学系统是不完备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that is Gödel's incompleteness theorem</p>
</details>

这就是哥德尔不完备定理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is how he shows that any basic mathematical system that can do fundamental arithmetic will always have statements within it which are true but which have no proof</p>
</details>

他就是这样证明了任何能够进行基本算术的数学系统，总会有一些真命题是无法被证明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there's a line in the tv show the office that echoes the self-referential paradox of Gödel's proof</p>
</details>

电视剧《办公室》中有一句话呼应了哥德尔证明的自指悖论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">jim is my enemy but it turns out the jim is also his own worst enemy and the enemy of my enemy is my friend so jim is actually my friend</p>
</details>

“吉姆是我的敌人，但事实证明吉姆也是他自己最大的敌人，而我敌人的敌人是我的朋友，所以吉姆实际上是我的朋友。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but because he is his own worst enemy the enemy of my friend is my enemy so actually jim is my enemy but</p>
</details>

“但因为他自己最大的敌人，我朋友的敌人是我的敌人，所以实际上吉姆是我的敌人。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gödel's incompleteness theorem means that truth and provability are not at all the same thing</p>
</details>

哥德尔不完备定理意味着真理和可证明性根本不是一回事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert was wrong there will always be true statements about mathematics that just cannot be proven</p>
</details>

希尔伯特错了，总会有一些关于数学的真命题是无法被证明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now Hilbert could console himself with the hope that at least we could still prove maths consistent that is free of contradictions</p>
</details>

现在希尔伯特可以安慰自己，至少我们仍然可以证明数学是一致的，即没有矛盾的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but then Gödel published his second incompleteness theorem in which he showed that any consistent formal system of math cannot prove its own consistency</p>
</details>

但随后哥德尔发表了他的**第二不完备定理**（Second Incompleteness Theorem: 哥德尔证明了任何足够强大的形式系统都无法证明自身的一致性），其中他表明任何一致的形式化数学系统都无法证明自身的一致性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so taken together Gödel's two incompleteness theorems say that the best you can hope for is a consistent yet incomplete system of math</p>
</details>

所以，哥德尔的两个不完备定理合在一起表明，你所能期望的最好结果是一个一致但又不完备的数学系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but a system like that cannot prove its own consistency so some contradiction could always crop up in the future revealing that the system you'd been working with had been inconsistent the whole time</p>
</details>

但这样的系统无法证明自身的一致性，所以未来总有可能出现一些矛盾，揭示你一直使用的系统从头到尾都是不一致的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that leaves only the third and final big question from Hilbert is mathematics decidable that is is there an algorithm that can always determine whether a statement follows from the axioms</p>
</details>

这就只剩下希尔伯特的第三个也是最后一个大问题：数学是否可判定？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and in 1936 Alan Turing found a way to settle this question but to do it he had to invent the modern computer</p>
</details>

也就是说，是否存在一个算法，总能判断一个命题是否能从公理推导出来？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in his time computers weren't machines they were people often women who carried out long and tedious calculations</p>
</details>

1936年，艾伦·图灵（Alan Turing）找到了解决这个问题的方法，但为此他不得不发明现代计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Turing imagined an entirely mechanical computer</p>
</details>

在他那个时代，“计算机”不是机器，而是人，通常是女性，她们进行着漫长而繁琐的计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he wanted it to be powerful enough to perform any computation imaginable but simple enough that you could reason through its operation</p>
</details>

图灵设想了一个完全机械化的计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so he came up with a machine that takes as input an infinitely long tape of square cells each containing a zero or a one</p>
</details>

他希望它足够强大，能够执行任何可想象的计算，但又足够简单，以便你可以推断其操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the machine has a read write head that can read one digit at a time then it can perform one of only a few tasks overwrite a new value move left move right or simply halt</p>
</details>

所以他发明了一种机器，它以一条无限长的方格带作为输入，每个方格包含一个零或一个一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">halting means the program has run to completion</p>
</details>

这台机器有一个读写头，可以一次读取一个数字，然后它只能执行少数几个任务之一：覆盖一个新值、向左移动、向右移动或简单地停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the program consists of a set of internal instructions you can think of it like a flow chart that tells the machine what to do based on the digit it reads and its internal state</p>
</details>

“停止”意味着程序已运行完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you could imagine exporting these instructions to any other Turing machine which would then perform in exactly the same way as the first</p>
</details>

程序由一组内部指令组成，你可以把它想象成一个流程图，根据它读取的数字和其内部状态告诉机器该做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">although this sounds simple a Turing machine's arbitrarily large memory and program mean it can execute any computable algorithm if given enough time</p>
</details>

你可以想象将这些指令导出到任何其他**图灵机**（Turing Machine: 艾伦·图灵提出的一种抽象计算模型，是现代计算机的理论基础），然后它将以与第一个完全相同的方式执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">from addition and subtraction to the entire youtube algorithm it can do anything a modern computer can</p>
</details>

尽管这听起来很简单，但图灵机任意大的内存和程序意味着它在有足够时间的情况下可以执行任何可计算的算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's what made the Turing machine so useful in answering Hilbert's question on decidability</p>
</details>

从加减法到整个YouTube算法，它能做现代计算机能做的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">when a touring machine halts the program has finished running and the tape is the output</p>
</details>

这就是图灵机在回答希尔伯特关于可判定性问题时如此有用的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but sometimes a touring machine never halts maybe it gets stuck in an infinite loop</p>
</details>

当图灵机停止时，程序运行完毕，磁带就是输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is it possible to tell beforehand if a program will halt or not on a particular input</p>
</details>

但有时图灵机永远不会停止，也许它陷入了无限循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Turing realized this halting problem was very similar to the decidability problem</p>
</details>

是否有可能事先判断一个程序在特定输入下会停止还是不会停止？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if he could find a way to figure out if a Turing machine would halt then it would also be possible to decide if a statement followed from the axioms</p>
</details>

图灵意识到这个**停机问题**（Halting Problem: 判定任意给定程序是否会在有限时间内结束运行的问题）与可判定性问题非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for example you could solve the twin prime conjecture by writing a Turing machine program that starts with the axioms and constructs all theorems that can be produced in one step using the rules of inference</p>
</details>

如果他能找到一种方法来判断图灵机是否会停止，那么也就可以判断一个命题是否能从公理推导出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then it constructs all theorems that can be produced in one step from those and so on</p>
</details>

例如，你可以通过编写一个图灵机程序来解决孪生质数猜想，该程序从公理开始，并使用推理规则构建所有可以通过一步产生的定理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">each time it generates a new theorem it checks if it's the twin prime conjecture and if it is it halts if not it never halts</p>
</details>

然后它从这些定理中构建所有可以通过一步产生的定理，依此类推。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if you could solve the halting problem you could solve the twin prime conjecture and all sorts of other unsolved questions</p>
</details>

每次它生成一个新定理时，它都会检查它是否是孪生质数猜想，如果是，它就停止；如果不是，它就永不停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so Turing said let's assume we can make a machine h that can determine whether any Turing machine will halt or not on a particular input</p>
</details>

所以，如果你能解决停机问题，你就能解决孪生质数猜想和所有其他未解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you insert the program and its input and h simulates what will happen printing out either halts or never halts</p>
</details>

所以图灵说，让我们假设我们可以制造一台机器H，它可以判断任何图灵机在特定输入下会停止还是不会停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for now we don't worry about how h works we just know that it always works it always gives you the right answer</p>
</details>

你插入程序及其输入，H会模拟将发生的事情，打印出“停止”或“永不停止”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now we can modify the h machine by adding additional components one if it receives the output halts immediately goes into an infinite loop another if it receives never holds then it immediately halts</p>
</details>

现在我们不担心H是如何工作的，我们只知道它总是有效，它总是给你正确的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we can call this entire new machine h plus and we can export the program for that entire machine</p>
</details>

现在我们可以通过添加额外的组件来修改H机器：如果它收到“停止”的输出，它会立即进入一个无限循环；如果它收到“永不停止”，那么它会立即停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now what happens if we give this machine its own code both as program and input</p>
</details>

我们可以把这台全新的机器称为H+，并且我们可以导出这台机器的整个程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well now h is simulating what h plus would do given its own input essentially h has to determine the behavior of a machine that it itself is a part of in this exact circumstance</p>
</details>

那么，如果我们把这台机器自己的代码既作为程序又作为输入给它，会发生什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if h concludes that h plus never halts well this makes h plus immediately halt</p>
</details>

现在H正在模拟H+在给定自身输入时会做什么，本质上H必须在这种精确情况下确定它自己是其中一部分的机器的行为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if h thinks h plus will halt well then that necessarily forces h plus to loop</p>
</details>

如果H得出结论H+永不停止，那么这会使H+立即停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">whatever output the halting machine h gives it turns out to be wrong there's a contradiction</p>
</details>

如果H认为H+会停止，那么这必然会强制H+进入循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the only explanation can be that a machine like h can't exist there's no way to tell in general if a touring machine will halt or not on a given input and this means mathematics is undecidable</p>
</details>

无论停机机器H给出什么输出，结果都是错误的，存在一个矛盾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there is no algorithm that can always determine whether a statement is derivable from the axioms</p>
</details>

唯一的解释是像H这样的机器不可能存在，通常无法判断图灵机在给定输入下是否会停止，这意味着数学是不可判定的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so something like the twin prime conjecture might be unsolvable we might never know whether there are infinite twin primes or not</p>
</details>

没有一个算法可以总是确定一个命题是否可以从公理推导出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the problem of undecidability even crops up in physical systems in quantum mechanics</p>
</details>

所以像孪生质数猜想这样的问题可能是无法解决的，我们可能永远不知道是否存在无限多的孪生质数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one of the most important properties of a many-body system is the difference in energy between its ground state and its first excited state</p>
</details>

不可判定性问题甚至出现在量子力学的物理系统中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is known as the spectral gap</p>
</details>

多体系统最重要的性质之一是其基态和第一激发态之间的能量差。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">some systems have a significant spectral gap whereas others are gapless there are a continuum of energy levels all the way down to the ground state</p>
</details>

这被称为**能谱间隙**（Spectral Gap: 量子多体系统基态与第一激发态之间的能量差）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this is important because at low temperatures gapless quantum systems can undergo phase transitions while gapped systems cannot they don't have the energy needed to overcome the spectral gap</p>
</details>

有些系统有显著的能谱间隙，而另一些则是无间隙的，从基态一直到连续的能级。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but figuring out if a system is gapped or gapless has long been known to be a very difficult problem</p>
</details>

这很重要，因为在低温下，无间隙量子系统可以经历相变，而有间隙系统则不能，它们没有克服能谱间隙所需的能量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">only recently in 2015 did mathematicians prove that in general the spectral gap question is undecidable</p>
</details>

但判断一个系统是有间隙还是无间隙长期以来一直是一个非常困难的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to quote the authors even a perfect complete description of the microscopic interactions between a material's particles is not always enough to deduce its macroscopic properties</p>
</details>

直到2015年，数学家们才证明，一般来说，能谱间隙问题是不可判定的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now remember that Turing designed his machines to be as powerful computers as it is possible to make</p>
</details>

引用作者的话：“即使是对材料粒子之间微观相互作用的完美完整描述，也并不总是足以推断其宏观性质。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">to this day the best computational systems are those that can do everything a touring machine can</p>
</details>

现在请记住，图灵设计他的机器是为了制造尽可能强大的计算机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is called touring completeness and it turns out there are many such during complete systems</p>
</details>

直到今天，最好的计算系统都是那些能做图灵机能做的一切的系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">although they are powerful every touring complete system comes with a catch its own analog of the halting problem some undecidable property of the system</p>
</details>

这被称为**图灵完备性**（Turing Completeness: 指一个系统或编程语言能够模拟图灵机，执行任何可计算任务），事实证明有许多这样的图灵完备系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wang tiles are touring complete their halting problem is whether or not they'll tile the plane</p>
</details>

尽管它们很强大，但每个图灵完备系统都有一个弊端：它自己的停机问题模拟，即系统的一些不可判定属性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">complex quantum systems are Turing complete and their halting problem is the spectral gap question</p>
</details>

王氏砖块是图灵完备的，它们的停机问题是它们是否能铺满平面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and the game of life is Turing complete its halting problem is literally whether or not it halts</p>
</details>

复杂的量子系统是图灵完备的，它们的停机问题是能谱间隙问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there are many more examples of this like airline ticketing systems magic the gathering powerpoint slides and excel spreadsheets</p>
</details>

而生命游戏是图灵完备的，它的停机问题就是它是否会停止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">nearly every programming language in existence is designed to be Turing complete</p>
</details>

还有许多其他的例子，比如航空票务系统、《万智牌》、PowerPoint幻灯片和Excel电子表格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but in theory we only need one programming language because well you can program anything at all using any Turing complete system</p>
</details>

几乎所有现有的编程语言都被设计成图灵完备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so here's a touring machine inside the game of life and since the game of life is itself touring complete it should be capable of simulating itself and indeed it is</p>
</details>

但理论上我们只需要一种编程语言，因为你可以使用任何图灵完备系统来编写任何程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is the game of life running on the game of life</p>
</details>

所以这里是生命游戏中的一个图灵机，既然生命游戏本身就是图灵完备的，它应该能够模拟自身，事实也确实如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the real legacy of David Hilbert's dream is all of our modern computational devices</p>
</details>

这就是运行在生命游戏中的生命游戏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Kurt Gödel suffered bouts of mental instability later in life convinced that people were trying to poison him</p>
</details>

大卫·希尔伯特梦想的真正遗产是我们所有的现代计算设备。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he refused to eat eventually starving himself to death</p>
</details>

库尔特·哥德尔晚年饱受精神不稳定之苦，他坚信有人试图毒害他。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hilbert died in 1943 his epitaph was his slogan from 1930. we must know we will know</p>
</details>

他拒绝进食，最终饿死。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the truth is we don't know sometimes we can't know but in trying to find out we can discover new things things that change the world</p>
</details>

希尔伯特于1943年去世，他的墓志铭是他1930年的口号：“我们必须知道，我们将会知道。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Alan Turing put his ideas about computing to practical use in world war ii leading the team at Bletchley Park that built real calculating machines to crack nazi codes for the allies</p>
</details>

事实是，我们不知道，有时我们无法知道，但在努力寻找答案的过程中，我们可以发现新事物，改变世界的事物。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">by one estimate the intelligence Turing and his colleagues gathered from decrypted messages shortened the war by two to four years</p>
</details>

艾伦·图灵在第二次世界大战中将他的计算思想付诸实践，领导**布莱切利园**（Bletchley Park: 二战期间英国密码破译中心）的团队建造了真正的计算机器，为盟军破解纳粹密码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">after the war Turing and John von Neumann designed the first true programmable electronic computer eniac based on touring's designs</p>
</details>

据估计，图灵和他的同事从解密信息中收集到的情报使战争缩短了两到四年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but Turing didn't live to see his ideas develop much further</p>
</details>

战后，图灵和约翰·冯·诺伊曼根据图灵的设计，设计了第一台真正的可编程电子计算机**ENIAC**（Electronic Numerical Integrator and Computer: 世界上第一台通用电子数字积分计算机）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in 1952 the british government convicted him of gross indecency upon learning he was gay he was stripped of his security clearance and forced to take hormones</p>
</details>

但图灵未能看到他的思想得到进一步发展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">in 1954 he committed suicide</p>
</details>

1952年，英国政府得知他是同性恋后，以“严重猥亵罪”判处他有罪，他被剥夺了安全许可，并被迫服用激素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">touring changed the world he is widely considered to be the most important founding figure in computer science</p>
</details>

1954年，他自杀了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">all modern computers are descended from his designs</p>
</details>

图灵改变了世界，他被广泛认为是计算机科学最重要的奠基人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but touring's ideas about computability came from his concept of the Turing machine which came from thinking about Hilbert's question is math decidable</p>
</details>

所有现代计算机都源于他的设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so touring's code breaking machines and indeed all modern computers stem from the weird paradoxes that arise from self-reference</p>
</details>

但图灵关于可计算性的思想源于他的图灵机概念，而这个概念又源于对希尔伯特“数学是否可判定”这个问题的思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there is a hole at the bottom of math a hole that means we will never know everything with certainty there will always be true statements that cannot be proven</p>
</details>

所以图灵的密码破译机，以及所有现代计算机，都源于自指所产生的奇怪悖论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and you might think this realization would have driven mathematicians mad and led to the disintegration of the entire mathematical enterprise</p>
</details>

数学的底层有一个漏洞，这意味着我们永远无法确定地了解一切，总会有一些真命题是无法被证明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but instead thinking about this problem transformed the concept of infinity changed the course of a world war and led directly to the invention of the device you're watching this on right now</p>
</details>

你可能会认为这个发现会让数学家们发疯，并导致整个数学事业的瓦解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">hey this video was sponsored by brilliant a website full of interactive courses and quizzes that delve deep into topics like math physics and computer science</p>
</details>

但相反，思考这个问题改变了无限的概念，改变了世界大战的进程，并直接导致了你现在正在观看此视频的设备的诞生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now if you've gotten this far into this video you're likely someone who would love brilliant</p>
</details>

这段视频由Brilliant赞助，这是一个充满互动课程和测验的网站，深入探讨数学、物理和计算机科学等主题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">i've been going through their logic course and it's really got me thinking</p>
</details>

如果你已经看到了视频的这里，你很可能是一个会喜欢Brilliant的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the problems start out easy but get more and more challenging as you develop your understanding</p>
</details>

我一直在学习他们的逻辑课程，它真的让我深思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that's what i love about the site i love how it guides you not by telling you exactly but by exposing you to increasingly sophisticated puzzles</p>
</details>

问题从简单开始，但随着你理解的加深，会变得越来越有挑战性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and at the end i feel like i've worked it out for myself which essentially i have through their carefully curated selection of problems and with helpful hints and explanations for when i get stuck</p>
</details>

这就是我喜欢这个网站的原因，我喜欢它引导你的方式，不是直接告诉你答案，而是让你接触越来越复杂的谜题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now there were a lot of things i wanted to include in this video but couldn't because it's already over half an hour long</p>
</details>

最后，我觉得我是自己解决了问题，通过他们精心策划的问题选择，以及在我遇到困难时提供的有用提示和解释，我确实做到了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if you want to explore these ideas further i'd highly recommend their courses on number theory and computer science fundamentals</p>
</details>

这段视频中有很多我想包含但未能包含的内容，因为它已经超过半小时了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for viewers of this channel brilliant are offering 20 off an annual subscription to the first 200 people to sign up</p>
</details>

所以如果你想进一步探索这些想法，我强烈推荐他们的数论和计算机科学基础课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">just go to brilliant.org veritasium and i will put that link down in the description</p>
</details>

对于本频道的观众，Brilliant为前200名注册者提供年度订阅20%的折扣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so i want to thank brilliant for sponsoring veritasium and i want to thank you for watching</p>
</details>

只需访问brilliant.org/veritasium，我也会把链接放在描述中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so i want to thank brilliant for sponsoring veritasium and i want to thank you for watching</p>
</details>

所以我要感谢Brilliant赞助Veritasium，也要感谢你的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so i want to thank brilliant for sponsoring veritasium and i want to thank you for watching</p>
</details>