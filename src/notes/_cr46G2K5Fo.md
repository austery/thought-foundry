---
area: society-systems
category: science
date: '2025-04-02'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Discourses and Mathematical Demonstrations Relating to Two New Sciences
- Proof That Every Set Can Be Well-Ordered
people:
- Galileo Galilei
products_models:
- ChatGPT
project:
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=_cr46G2K5Fo
speaker: veritasium
status: evergreen
summary: 本文深入探讨了数学中极具争议的**选择公理**（Axiom of Choice）。从伽利略对无限的早期思考，到康托尔对不同类型无限的开创性工作，再到策梅洛正式提出选择公理，文章追溯了这一概念的演变。尽管选择公理看似直观，却能导致如**巴拿赫-塔斯基悖论**（Banach-Tarski
  Paradox）等反直觉结果。文章还介绍了哥德尔和科恩如何证明选择公理与集合论其他公理的独立性，最终强调了其在现代数学中的普遍接受和实用价值。
tags:
- axiom-of-choice
- infinity
- non
- science
- theory
title: 选择公理：数学的基石与悖论
---

### 数学中的选择难题与悖论

数学中有一条规则，它如此简单，你可能会认为它显然是真的，但如果你接受它，你会发现有些线段现在没有长度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a rule in mathematics that is so simple, you would think it obviously must be true, but if you accept it, you find there are now some line segments that have no length.</p>
</details>

一个球体，无需添加任何东西，就可以变成两个相同的球体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A sphere without adding anything to it can be turned into two identical spheres.</p>
</details>

一百多年来的数学都是建立在这一**公理**（Axiom: 数学中不证自明的基本命题）之上的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A hundred plus years of mathematics has been built on this axiom.</p>
</details>

它看起来很直观，而且确实有效，但它也创造了荒谬的悖论。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It seems intuitive and it works, but it also creates ridiculous paradoxes.</p>
</details>

那么，它是对的吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, is it right?</p>
</details>

这一切都始于“选择”的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, it all starts with the issue of choice.</p>
</details>

试试看，选择一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Try this, choose a number.</p>
</details>

我可以随意从脑海中抽取一个随机数，比如37或42，但这只是人类大脑在工作，而不是一个数学过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I can just pluck a random number from my head, like 37 or 42, but that is the human brain at work, not a mathematical process.</p>
</details>

在数学中，你不能真正随机选择事物，因为公式总是给出相同的结果，这就是为什么计算机没有真正的随机数生成器。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In math, you can't truly pick things at random because formulas always give the same result, which is why computers don't have true random number generators.</p>
</details>

相反，它们通常会根据你当前的本地时间运行一个算法来生成看起来随机的数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, they usually run an algorithm on your current local time to generate numbers that appear random.</p>
</details>

那么，如果我们不能随机选择，我们如何在数学中选择任何东西呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we can't pick randomly, how do we select anything in math?</p>
</details>

嗯，唯一的方法就是遵循某种规则。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the only way is to follow a rule of some sort.</p>
</details>

所以规则可以是总是选择最小的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a rule could be always choose the smallest thing.</p>
</details>

例如，如果我们看的是正**整数**（Integers: 包含正整数、负整数和零的数），最小的是一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, if we're looking at whole positive integers, the smallest is one.</p>
</details>

对于素数来说，最小的是二，这很容易，但**实数**（Real Numbers: 包含有理数和无理数的所有数）呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For prime numbers it would be two, easy, but what about the real numbers?</p>
</details>

那可以是任何数，正数、负数、整数、分数，甚至是像π或二的平方根这样的无理数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's any number, positive, negative, whole, fraction, even irrational like pi or the square root of two.</p>
</details>

现在尝试选择最小的一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now try to choose the smallest one.</p>
</details>

这是不可能的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's impossible.</p>
</details>

实数延伸到负无穷大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The real numbers stretch off to negative infinity.</p>
</details>

即使我们试图通过使其超具体来修正我们的规则，比如选择一之后最小的数，我们仍然会卡住。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even if we try to fix our rule by making it super specific, like choose the smallest number after one, we still get stuck.</p>
</details>

有1.01，然后是1.0001，然后是1.00000000001等等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's 1.01 and then 1.0001, then 1.00000000001 and so on.</p>
</details>

那么，一后面到底是什么数字呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So really what number comes after one?</p>
</details>

如果我们无法开始指定实数的顺序，即下一个和上一个，第一个和最后一个，我们就会卡住。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we can't begin to specify the order of the real numbers, next and previous, first and last, we're stuck.</p>
</details>

荒谬之处在于我们知道我们有无限多的选择，但尽管如此，我们却无法弄清楚如何只选择一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The ridiculous part is we know we have infinite options, but despite that, we can't figure out how to just pick one.</p>
</details>

### 康托尔与无限的层次

解决这个问题的任务始于1870年的一位男士。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The mission to resolve this began with one man in 1870.</p>
</details>

他承担了将实数置于确定顺序的任务，即使这会要了他的命，而这几乎也确实发生了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He took on the task of putting the real numbers in a definitive order, even if it killed him and it nearly did.</p>
</details>

**格奥尔格·康托尔**（Georg Cantor）是一位才华横溢的德国数学家，他在29岁时发表了第一批论文之一后，发现自己处于一场风暴的中心。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Georg Cantor was a talented German mathematician who found himself at the center of a firestorm after publishing one of his very first papers at the age of 29.</p>
</details>

几个世纪以来，我们对无限的理解深受**伽利略**（Galileo Galilei）1638年著作《关于两门新科学的对话》（Discourses and Mathematical Demonstrations Relating to Two New Sciences）的影响。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For centuries, our understanding of infinity was heavily influenced by Galileo's 1638 book.</p>
</details>

它提出了一个关键问题：是**自然数**（Natural Numbers: 正整数，如1, 2, 3...）更多，还是**平方数**（Square Numbers: 某个整数的平方，如1, 4, 9...）更多？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It raised a key question, are there more natural numbers or are there more square numbers?</p>
</details>

仅仅从表面上看，平方数分布得更开，而且数字越大，它们就越稀疏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just looking at them, the square numbers are more spaced out and they only become more sparse the higher you go.</p>
</details>

所以看起来平方数比自然数少，但伽利略意识到他可以画一条线，将每个自然数与其自身的平方数一一对应起来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it would appear there are fewer squares than natural numbers, but Galileo realized he could draw a line matching every natural number with its own square.</p>
</details>

既然他可以进行这种一一映射，他就知道这两个集合的大小必须完全相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since he could make this one-to-one mapping, that he knew that the two sets must be exactly the same size.</p>
</details>

所以实际上平方数的数量和自然数的数量是一样多的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there are actually just as many square numbers as there are natural numbers.</p>
</details>

从这个反直觉的结果中，伽利略得出结论，像“多于”或“少于”这样的词，在我们通常使用它们的方式下，不适用于无限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From this counterintuitive result, Galileo concluded that terms like more than or less than don't apply to infinity, how we normally use them.</p>
</details>

这都只是一个“永恒”的大概念，这种观点盛行了几个世纪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's all just one big concept of foreverness and this view prevailed for centuries.</p>
</details>

事实上，许多人今天仍然这样理解无限，但200年后，康托尔并不满意。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, it's how many people still understand infinity today, but 200 years on, Cantor wasn't satisfied.</p>
</details>

1874年，他想知道，如果存在两个无限集合，它们之间不能完美地一一映射怎么办？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1874, he wondered what if there were two infinite sets out there that didn't map perfectly to each other?</p>
</details>

它们会是不同的无限吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Would they be different infinities?</p>
</details>

于是他着手比较自然数和零到一之间的实数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he set out to compare the natural numbers and the real numbers between zero and one.</p>
</details>

康托尔首先假设他可以将这些集合完美地一一映射。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor started by assuming he could perfectly map these sets to each other, one-to-one.</p>
</details>

所以他想象着写下一个无限列表，一边是自然数，另一边是零到一之间的实数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he imagined writing down an infinite list with a natural number on one side and a real number between zero and one on the other.</p>
</details>

由于没有最小的实数，他会以任何顺序写下它们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since there is no smallest real number, he would just write them down in any order.</p>
</details>

假设他现在有一个完整的无限列表，康托尔写下另一个实数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Assuming he now has a complete infinite list, Cantor writes down another real number.</p>
</details>

为此，他取第一个数字的第一位并加一，然后取第二个数字的第二位，再次加一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to do it, he takes the first digit of the first number and adds one, then the second digit of the second number, and again, he adds one.</p>
</details>

他一直这样做下去，直到列表的末尾。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He keeps doing this all the way down the list.</p>
</details>

如果数字是八或九，他会减一而不是加一，以避免重复。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the digit is an eight or a nine, he subtracts one instead of adding to avoid duplicates.</p>
</details>

通过这个过程，他写下了一个介于零和一之间的实数，但这个数字并没有出现在他的列表中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And by the end of this process, he has written down a real number between zero and one, but that number doesn't appear anywhere in his list.</p>
</details>

它与第一个数字在第一位小数处不同，与第二个数字在第二位小数处不同，依此类推。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's different from the first number in the first decimal place, different from the second number in the second decimal place and so on down the line.</p>
</details>

它必须与列表中的每个数字至少有一位不同，即对角线上的数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has to be different from every number on the list by at least one digit, the digit on the diagonal.</p>
</details>

这就是为什么这被称为**康托尔对角线证明**（Cantor's Diagonalization Proof），它表明零到一之间的实数必须多于延伸到无限的自然数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why this is called Cantor's Diagonalization Proof and it shows there must be more real numbers between zero and one than there are natural numbers extending out to infinity.</p>
</details>

康托尔揭示了一些非凡的东西：无限不仅仅只有一种大小。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor had revealed something remarkable. Infinity doesn't come in just one size.</p>
</details>

有些无限，比如平方数、整数或有理数集合，可以与自然数完美配对。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some infinities like the set of square numbers, integers or rational numbers can be paired perfectly with the natural numbers.</p>
</details>

你可以真正地数它们，一、二、三等等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can literally count them, one, two, three and so on.</p>
</details>

所以康托尔称这些为**可数无限**（Countable Infinities: 可以与自然数一一对应的无限集合）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Cantor called these countable infinities,</p>
</details>

但还有更大的无限，康托尔称之为**不可数无限**（Uncountable Infinities: 无法与自然数一一对应的无限集合）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but then there are bigger infinities, Cantor called them uncountable.</p>
</details>

这些无限，比如所有实数、复数的集合，无法与自然数一一对应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These infinities like the set of all real numbers, the complex numbers, they can't be matched one-to-one with the natural numbers.</p>
</details>

康托尔的结果震惊了数学界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor's results rocked the mathematical community.</p>
</details>

毕竟，一个永远持续下去的东西怎么会比另一个永远持续下去的东西更大呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After all, how can something that continues forever be bigger than something else that continues forever?</p>
</details>

他的工作被贴上“恐怖”和“严重疾病”的标签，但康托尔并未因此气馁。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His work was labeled a horror and a grave disease, but Cantor wasn't discouraged.</p>
</details>

他的成功只促使他追求更宏伟的目标，即证明即使是不可数无限的集合也能被置于确定的顺序中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His success only spurred him to pursue his even grander goal to show that even uncountably infinite sets could be placed in a definitive order.</p>
</details>

康托尔称之为**良序**（Well-Order）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What Cantor called a well-order.</p>
</details>

一个集合要被良序，他要求两个条件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For a set to be well ordered, he required two conditions.</p>
</details>

首先，集合必须有一个明确的起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, the set must have a clear starting point.</p>
</details>

其次，每个子集，即该集合中的项目集合，也必须有一个明确的起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And second, every subset, a collection of items from that set, must also have a clear starting point.</p>
</details>

例如，自然数是良序的，有一个起点，一，任何子集，比如六、七、八，也有一个明确的起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example, the natural numbers are well ordered, there's a starting point, one, and any subset, say six, seven, eight, also has a clear starting point.</p>
</details>

在这种情况下，六，你总是知道哪个数字在前，哪个在后。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, six, you always know which number comes before and which comes next.</p>
</details>

但整数呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what about the integers?</p>
</details>

整数在正负两个方向都延伸到无限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Integers stretch off to infinity in both the positive and negative directions.</p>
</details>

康托尔意识到他可以简单地将零作为起点，从那里他的排序是一、负一、二、负二，通过它们的绝对值，即它们与零的距离来排序整数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well Cantor realized he could just pick zero as the starting point and from there his ordering went one, negative one, two, negative two, ranking the integers by their absolute value, their distance from zero.</p>
</details>

你先放正数还是先放负数都无关紧要，只要你保持一致。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It doesn't matter if you put the positives first or the negatives first, as long as you are consistent.</p>
</details>

以这种方式排序实际上使我们能够将整数映射到自然数，并看到两个集合大小相同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ordering them this way is actually what allows us to map the integers to the natural numbers and see that both sets are the same size,</p>
</details>

但我们还有其他方法可以良序整数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but there are other ways we could well order the integers.</p>
</details>

我们可以从零开始，然后是一、二、三，一直到正无限，然后是负一、负二、负三，一直到负无限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We could start with zero and then have one, two, three, all the way to positive infinity and then negative one, negative two, negative three, all the way to negative infinity.</p>
</details>

这不是我们习惯的计数方式，但这两个选项都符合良序的定义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is not how we're used to counting, but both of these options fit the definition of a well ordering.</p>
</details>

有一个明确的起点，零，并且它们的所有子集也都有一个确定的起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a clear starting point, zero, and all their subsets also have a definitive starting point.</p>
</details>

康托尔成功地良序了一个在两个方向上都无限的集合，但它只是可数无限的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor had successfully well ordered a set that was infinite in both directions, but it was only countably infinite.</p>
</details>

在他的下一本书中，他发表了他的良序定理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In his next book, he published his well ordering theorem.</p>
</details>

它声称每个集合，即使是像实数这样的不可数无限集合，都可以被良序。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It claimed that every set, even the uncountably infinite ones like the real numbers could be well ordered.</p>
</details>

问题是他并没有真正证明这一点，因为他做不到，他尝试的每种方法都失败了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem was he hadn't actually proven this because he couldn't, every method he tried had failed,</p>
</details>

但康托尔对他的定理如此自信有一个重要原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but there was one big reason that Cantor was so confident in his theorem.</p>
</details>

康托尔是一位虔诚的路德教徒，他相信上帝正在通过他说话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor was a devout Lutheran and he believed God was speaking through him.</p>
</details>

他说：“我的理论坚如磐石。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He said, my theory stands as firm as a rock.</p>
</details>

每一支射向它的箭都会迅速返回到它的弓箭手。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every arrow directed against it will return quickly to its archer.</p>
</details>

我怎么知道的？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do I know this?</p>
</details>

因为我多年来从各个方面研究过它，最重要的是，我可以说，我追溯了它的根源，直到所有被造物的第一位永无谬误的起因。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because I have studied it from all sides for many years and above all because I have followed its roots so to speak, to the first infallible cause of all created things.</p>
</details>

尽管有信仰，良序定理在没有任何数学证明的情况下，仍然是一个崇高的主张。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Belief notwithstanding, the well ordering theorem was a lofty claim to make without any mathematical proof.</p>
</details>

因此，数学界第二次攻击并排斥了康托尔。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for the second time, the mathematical community attacked and ostracized Cantor.</p>
</details>

带头的是柏林大学数学系主任**利奥波德·克罗内克**（Leopold Kronecker）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Leading the charge was Leopold Kronecker, the head of mathematics at the University of Berlin.</p>
</details>

克罗内克完全不屑康托尔的工作，称他为“科学骗子”和“青年腐蚀者”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Kronecker completely dismissed Cantor's work, labeling him a scientific charlatan and a corrupter of the youth.</p>
</details>

而克罗内克曾是康托尔的老师。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Kronecker used to be Cantor's teacher.</p>
</details>

康托尔梦想着加入他在柏林大学的团队，但他所有的申请都神秘地被拒绝了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor dreamed of joining him at the University of Berlin, but all his applications were mysteriously denied.</p>
</details>

所以康托尔将这次拒绝视为个人恩怨。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Cantor took the rejection personally.</p>
</details>

1884年，他给一位朋友写了52封信，每一封都在抱怨克罗内克。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1884, he wrote 52 letters to a friend and every one of them bemoaned Kronecker.</p>
</details>

不久，康托尔遭受了第一次神经衰弱，这只是他多次崩溃中的第一次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Soon Cantor suffered what would be the first of many nervous breakdowns.</p>
</details>

他被送进疗养院进行康复。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He was confined to a sanitarium for recovery.</p>
</details>

他能证明所有人都是错的唯一方法就是良序实数，但他却找不到起点，字面意义上的找不到。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only way he could prove everyone wrong was by well ordering the real numbers, but he couldn't find a starting point, literally.</p>
</details>

### 策梅洛与选择公理的诞生

康托尔从疗养院出来后，他离开了数学界，成了一个心灰意冷的人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once Cantor was released from the sanatorium, he stepped away from math, a broken man.</p>
</details>

在接下来的15年里，他教授哲学，很少涉足他以前的追求。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And over the next 15 years he taught philosophy and rarely dabbled in his old pursuits.</p>
</details>

也许他最大的挑战出现在1904年的国际数学家大会上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Perhaps his greatest challenge came at the 1904 International Congress of mathematicians.</p>
</details>

在那里，来自布达佩斯受人尊敬的教授**尤利乌斯·柯尼希**（Julius König）宣布他有证据表明康托尔的良序定理是错误的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There, Julius König, a respected professor from Budapest, announced he had proof that Cantor's well ordering theorem was wrong.</p>
</details>

听众中不仅有康托尔，还有他的妻子、两个女儿和他的同事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the audience was not only Cantor but also his wife, two of his daughters and his colleagues.</p>
</details>

他感到彻底的羞辱，但还有另一位出席者。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He felt utterly humiliated, but there was also another in attendance.</p>
</details>

他就是**恩斯特·策梅洛**（Ernst Zermelo）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ernst Zermelo.</p>
</details>

策梅洛是一位德国数学家，他最近对康托尔的工作产生了浓厚的兴趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo was a German mathematician who had recently developed a keen interest in Cantor's work</p>
</details>

当他听柯尼希的演讲时，他觉得有些不对劲。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and as he listened to König's presentation, something felt off.</p>
</details>

在24小时内，策梅洛找出了问题所在。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Within 24 hours, Zermelo had pinpointed the problem.</p>
</details>

柯尼希的证明包含一个致命的矛盾，在一个月内，策梅洛发表了一篇三页的文章，题为《每个集合都可以被良序的证明》（Proof That Every Set Can Be Well-Ordered），而且它毫无瑕疵。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">König's proof contained a damning contradiction, and within a month, Zermello published a three-page article titled "Proof That Every Set Can Be Well-Ordered" and it was flawless.</p>
</details>

策梅洛的突破在于他在康托尔的工作中发现了一些深刻的东西，一个康托尔“无意识地、本能地到处使用，但从未明确表述”的机制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo's breakthrough came when he discovered something profound in Cantor's work, a mechanism which Cantor uses unconsciously and instinctively everywhere, but formulates explicitly nowhere.</p>
</details>

你看，康托尔一直以来都假设他可以一次性从任何集合中做出无限多的选择，包括像实数这样的不可数无限集合。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See, all along, Cantor had been assuming that he could make an infinite number of choices at once from any set, including uncountable infinite sets like the real numbers,</p>
</details>

但这只是一个假设。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but this was just an assumption.</p>
</details>

在数学规则手册中，这从未被明确允许，而数学是建立在规则，特别是公理之上的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nowhere in the mathematical rule book was this explicitly permitted and math is built on rules, specifically axioms.</p>
</details>

公理是我们不经证明就接受为真的简单陈述。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Axioms are simple statements we accept as true without proof.</p>
</details>

策梅洛意识到康托尔的假设需要被形式化为在证明系统中成立的东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo realized Cantor's assumption needed to be formalized into something that holds up in a system of proof.</p>
</details>

一个新的公理，它说做出所有这些选择是可能的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A new axiom that said, making all of those choices was possible.</p>
</details>

他需要**选择公理**（Axiom of Choice: 允许从无限多个非空集合中各选择一个元素）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He needed the axiom of choice.</p>
</details>

选择公理可以这样说：如果你有无限多个集合，并且每个集合都不是空的，那么有一种方法可以从每个集合中选择一个元素。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The axiom of choice can be said in the sense that if you have infinitely many sets and each set is not empty, then there is a way to choose one element from each of the sets.</p>
</details>

对于有限集合，这似乎是显而易见的，只需逐个集合选择即可。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For finite sets, this seems obvious, just go set by set and pick something.</p>
</details>

即使对于无限集合，如果有一个明确的规则，比如总是选择最小的东西，也很容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even for infinite sets, it's easy if there's a clear rule, like always choose the smallest thing,</p>
</details>

但有时没有自然的规则。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but sometimes there is no natural rule.</p>
</details>

在那些情况下，当你从无限多个集合中选择时，包括不可数集合，你需要选择公理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In those cases when you're choosing from infinitely many sets, including the uncountable ones, you need the axiom of choice.</p>
</details>

我们无法说明我们是如何选择的，但这个公理使所有这些选择同时发生。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can't say how we're choosing, but the axiom makes all of these choices all at once.</p>
</details>

这个公理不允许你说明你选择了哪个元素，只说明无限多的选择是可能的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The axiom doesn't allow you to say which element you've chosen, only that infinitely many choices are possible.</p>
</details>

### 选择公理如何良序实数

那么，这个新公理如何使我们能够良序实数呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how does this new axiom enable us to well order the real numbers.</p>
</details>

策梅洛使用选择公理从所有实数集合中选择一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo uses the axiom of choice to choose a number from the set of all real numbers.</p>
</details>

他将这个数字，我们称之为X1，放入一个新集合R中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He places this number, let's call it X1 into a new set, R.</p>
</details>

然后，这个公理允许他从所有实数减去已取出的一个数字的子集中选择另一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The axiom then allows him to choose another number from the subset of all reals minus the one taken out.</p>
</details>

他称这个数字为X2，并将其作为他集合中的下一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He calls this number X2 and places it as the next number in his set</p>
</details>

他不断这样做，取出选定的数字并将其放在下一个位置，X3、X4、X5。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and he keeps doing this, taking the chosen number and placing it next, X3, X4, X5.</p>
</details>

现在感觉他是一个一个地选择这些数字，但实际上这些选择是同时从所有可能的子集中做出的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now it feels like he's choosing these numbers one at a time, but in reality the choices are made from all possible subsets at the same time.</p>
</details>

当策梅洛用自然数索引每个数字时，起初他可能看起来会遇到问题，因为自然数只是可数无限的，而实数却多得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As Zermelo indexes each number with the natural numbers, at first it might seem like he'd run into a problem because the natural numbers are only accountably infinite, whereas there are way more reals.</p>
</details>

所以他最终应该会用完标签，但我们可以数到无限之外。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he should eventually run out of labels, but we can count beyond infinity.</p>
</details>

我们之前就做过，当我们数过正无限，到达负一、负二等等。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We did it earlier when we counted past positive infinity to get to negative one, negative two and so on.</p>
</details>

所以我们只需要一组新的数字，它延伸到自然数之外，将下一个数字称为“欧米伽”（omega），然后是欧米伽加一，欧米伽加二，依此类推。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we just need a new set of numbers that extends past the naturals, call the next number omega, then omega plus one, omega plus two, and so on.</p>
</details>

这些欧米伽数字并不比无限大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These omega numbers are not bigger than infinity.</p>
</details>

它们只是在无限之后。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They just come after infinity.</p>
</details>

它们没有告诉我们有多少事物，但它们确实告诉了我们它们的顺序。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They don't tell us how many things are there, but they do tell us their order.</p>
</details>

所以我们取出的下一个数字，我们将其标记为X欧米伽，然后是X欧米伽加一，X欧米伽加二，依此类推。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the next number we pull out, we'll label it X omega, then X omega plus one, X omega plus two, and so on.</p>
</details>

这将持续下去，直到我们匹配实数的大小，并且我们的原始集合为空。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This will continue until we match the size of the real numbers and our original set is empty.</p>
</details>

现在每个实数都在我们的新集合中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now every real number is in our new set.</p>
</details>

有一个第一个数字，X1，并且每个子集也都有一个第一个数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a first number, X1, and every subset also has a first number.</p>
</details>

就这样，我们成功地良序了实数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And just like that, we have successfully well ordered the real numbers.</p>
</details>

这种顺序与我们熟悉的顺序完全不同。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This order looks nothing like our familiar ordering.</p>
</details>

十亿可能在0.2之前，但通过这个过程，我们可以证明存在一个良序。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A billion could come before 0.2, but with this process, we can prove that a well ordering exists.</p>
</details>

更重要的是，我们现在有了一种数学上如何选择问题的方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And more than that, we now have a way to resolve our issue of how to choose mathematically.</p>
</details>

我们不能选择最小的实数，但现在我们可以选择第一个实数，我们的起点，而且我们可以对任何集合这样做，这意味着所有集合都可以被良序，无论其无限性如何。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can't pick a smallest real number, but now we can pick a first real number, our starting point, and we can do this for any set, meaning all sets can be well ordered no matter the infinity.</p>
</details>

所以康托尔的良序定理和策梅洛的选择公理是等价的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Cantor's well-ordering theorem and Zermelo's axiom of choice are equivalent.</p>
</details>

康托尔如释重负。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cantor was so relieved.</p>
</details>

策梅洛在一个月内证明了良序定理并良序了实数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo had proved the well-ordering theorem and well ordered the real numbers all in under a month.</p>
</details>

策梅洛将数学家们几十年来无意中依赖的东西，变成了一个形式化的公理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo took something mathematicians had unknowingly relied on for decades and turned it into a formal axiom.</p>
</details>

他表明，理解数学不仅仅是关于数字，更是关于它们背后的逻辑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He showed that understanding math isn't just about numbers, it's about the logic behind them.</p>
</details>

### 反直觉的后果：维塔利集与巴拿赫-塔斯基悖论

选择公理可能是一个新想法，但它的使用却并非如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The axiom of choice may have been a new idea, but its use was anything but.</p>
</details>

策梅洛查阅了其他数学家的数十篇论文，意识到他们也一直在使用这个公理，甚至包括那些批评康托尔工作的人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo scanned dozens of papers from other mathematicians and realized they had also been using the axiom all along, even those who had criticized Cantor's work.</p>
</details>

这只是表明它作为一条公理是多么反直觉。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It just goes to show how unintuitive it is that it's even an axiom.</p>
</details>

人们在不知不觉中使用了它几十年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">People had been using it for like a decade, unknowingly.</p>
</details>

但这几乎显得太明显了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this almost seems too obvious.</p>
</details>

策梅洛的证明并没有真正构造一个良序。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Zermelo's proof didn't actually construct a well order.</p>
</details>

它只是说一个良序必须存在，但如果我们无法真正构建它，它能存在吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It just said one must exist, but can something exist if we can't actually build it?</p>
</details>

他的证明还使用了不可数无限的步骤，这甚至被允许吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His proof also used an uncountable number of steps, was that even allowed?</p>
</details>

一些数学家认为证明应该是有限的，另一些人接受无限，但只接受可数无限，然后事情变得更糟。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some mathematicians argued proofs should be finite, others accepted infinity, but only the countable kind and then things got worse.</p>
</details>

当数学家们玩弄选择公理时，它产生了令人不安的结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When mathematicians played around with the axiom of choice, it created disturbing results.</p>
</details>

其中一个最早的结果来自**朱塞佩·维塔利**（Giuseppe Vitali）在1905年。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the first came from Giuseppe Vitali in 1905.</p>
</details>

维塔利使用选择公理构建了一个数字集合，打破了我们对“有长度”的理解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Vitali used the axiom of choice to build a set of numbers that shattered our idea of what it means for something to have length.</p>
</details>

维塔利所做的是，他取零到一之间的每个实数，并将其分配到无限多个“箱子”中的一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what Vitali does is he takes every real number between zero and one and assigns it to one of an infinite number of bins.</p>
</details>

我们称这些箱子为“组”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's call these bins groups.</p>
</details>

所以我们希望每个实数最终都精确地落入我们无限个箱子中的一个。
<details>
<summary>View/Hide Original English</p>
</details>

他是怎么做到的呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how does he do it?</p>
</details>

假设我们有两个数字X和Y。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let's say we have two numbers, X and Y.</p>
</details>

如果它们的差，X减Y等于一个有理数，也就是一个整数除以另一个整数，那么X和Y都将进入同一个箱子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If their difference, X minus Y is equal to a rational, that is one integer divided by another integer, well then both X and Y will go into the same bin.</p>
</details>

但如果我们有两个其他数字，比如P和Q，它们的差不是有理数，那么这两个数字将进入不同的箱子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if we have two other numbers, let's say P and Q and their difference is not a rational, so it's an irrational difference, well then those two numbers will go into separate bins.</p>
</details>

我们来举一些例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's do some examples.</p>
</details>

如果这是3/4减去1/2，那么我们得到1/4，所以3/4和1/2都将进入同一个箱子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If this is 3/4 minus a half, then we get a quarter and so both 3/4 and a half will go into the same bin.</p>
</details>

事实上，你可以看到，从这个范围（零到一）的所有有理数，它们最终都会进入同一个组。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, you can see that all rational numbers from this span, zero to one, they'll all end up in the same group.</p>
</details>

现在如果你有无理数，那么它们是否会进入同一个箱子就不清楚了，因为例如，如果我们有数字根号二除以二减去根号二除以二减去四分之一，那么即使这些数字都是无理数，它们确实有一个有理差。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now if you have irrational numbers, well it's not clear whether they will go into the same bin or not because for example, if we have the number root two over two minus say root two over two minus a quarter, well then that does have a rational difference even though each of these numbers is irrational.</p>
</details>

所以这两个数字将进入同一个组，但如果我们有无理数根号二除以二减去根号二除以三，那么这会产生一个无理差。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these two numbers will go into the same group, but if we have irrational numbers root two over two minus root two over three, well that gives an irrational difference.</p>
</details>

所以根号二除以三将不得不进入一个不同的箱子，并且它将与所有与它有有理差的数字一起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So root two over three will have to go into a different bin and it will be joined by all of the numbers it has a rational difference from.</p>
</details>

通过这种方式，你可以将每个实数精确地分配到这些箱子中的一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in this way, you can assign each real number to exactly one of these bins.</p>
</details>

接下来，维塔利使用选择公理，从每个组中选择一个数字，作为该组的代表。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, Vitali used the axiom of choice to reach into each group and select exactly one number, which would be a representative of the group.</p>
</details>

所以我们可以从有理数组中取出3/4，从这个组中取出根号二除以二，从那个组中取出根号二除以三，依此类推。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we could pull out 3/4 from the rational group, root two over two from this group, root two over three from that group and so on.</p>
</details>

当然，因为我们使用的是选择公理，你实际上并不知道那个代表数字是什么，只知道你有一个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Though of course because we're using the axiom of choice, you don't actually know what that representative number is, just that you have one.</p>
</details>

所以我们可以这样写下来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we could write it down like this.</p>
</details>

我们有来自每个组的这些代表，它们共同构成了**维塔利集**（Vitali Set: 利用选择公理构造出的不可测集合）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have these representatives from each group and together they form the Vitali set.</p>
</details>

你可以将这个集合想象成零到一之间的一组点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can visualize this set as a collection of points between zero and one.</p>
</details>

接下来，维塔利制作了他集合的无限个副本，每个副本都通过一个介于负一和正一之间的不同有理数进行平移。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, Vitali makes infinite copies of his set and each one he shifts by a different rational number between negative one and positive one.</p>
</details>

所以如果你想想这会做什么，它会将每个代表数字移动到其组中所有其他数字的位置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you think about what that does, it's gonna move each representative number to be at the position of every other number in its group.</p>
</details>

如果我们只从有理数组中取出一个有理数作为代表，现在我们将它通过介于负一和正一之间的所有可能的有理数进行平移。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we just had the one rational number that we plucked out as a representative from the rational group, now we're gonna shift it by every possible rational number between negative one and positive one.</p>
</details>

所以它最终会占据其组中其他成员的所有位置，至少在零到一的范围内。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's going to end up at every other position occupied by the other members of its group, at least on the span between zero and one.</p>
</details>

所以如果你现在想象将所有这些无限集合合并在一起，点之间将没有重叠。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you imagine now merging all of these infinite sets together, there's gonna be no overlap between the points.</p>
</details>

其次，我们将拥有零到一之间的每个实数，因为在该范围内我们拥有每个组的每个成员。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And second, we are going to have every real number between zero and one because on that span we have every member of every group.</p>
</details>

那么现在的问题是维塔利集的大小是多少？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now the question is what is the size of the Vitali set?</p>
</details>

现在我们知道这些集合的并集必须大于或等于一，因为我们有零到一之间的每个实数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we know that the union of those sets must be greater than or equal to one because we have every real number between zero and one,</p>
</details>

但这些点也只延伸到负一或正二。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but also these points only extend out as far as negative one or positive two.</p>
</details>

所以它必须小于或等于三，但这就是问题所在，因为维塔利集的大小是多少才能无限次地加到自身上，最终得到一个介于一和三之间的值？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it must be less than or equal to three, but this is where the problem arises because what number for the size of the Vitali set could you add to itself infinitely many times and end up with a value between one and three?</p>
</details>

没有这样的数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is no number like that.</p>
</details>

我的意思是，如果维塔利集的大小是零，你无限次地加起来仍然得到零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean if the size of the Vitali set was zero, you add it up infinitely, many times you still get zero.</p>
</details>

如果维塔利集的大小是一个小的正值，那么你无限次地加起来，你会得到无限，而不是三。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the size of the Vitali set is a small positive value, then you add it up infinitely many times, you're gonna get infinity, not three.</p>
</details>

所以我们有一个矛盾，唯一的出路是维塔利集本身是**不可测**（Non-Measurable: 无法赋予一致的长度、面积或体积的集合）的，这似乎很疯狂。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have a contradiction and the only way out is if the Vitali set itself is unmeasurable, which seems crazy.</p>
</details>

像维塔利集这样的不可测集合没有一致的大小、长度、面积甚至概率的定义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Non-measurable sets like the Vitali set have no consistent definition of size or length or area or even probability.</p>
</details>

但数学是建立在一切都可以量化的思想之上的，无论是距离、时间还是重量，但现在有了不可测集合，似乎选择公理是罪魁祸首。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But math is built on the idea that everything can be quantified, whether it's distance, time, or weight, except now there are non-measurable sets and it seems like the axiom of choice is to blame.</p>
</details>

这只是选择公理引起轩然大波的开始。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This was just the start of the uproar caused by the axiom.</p>
</details>

1924年，两位数学家**斯特凡·巴拿赫**（Stefan Banach）和**阿尔弗雷德·塔斯基**（Alfred Tarski）用它来展示了一个看起来像魔术的现象。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1924, two mathematicians, Stefan Banach and Alfred Tarski used it to show something that looks like a magic trick.</p>
</details>

他们证明你可以拿一个实心球，把它分成仅仅五块，然后通过仔细旋转和移动这些块，你可以将它们重新组装成两个球，每个都与我们开始的球完全相同，你可以继续下去，直到最终你拥有无限多个球，从一个球中得到无限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They proved you could take a single solid ball and split it into just five pieces, and then by carefully rotating and moving those pieces, you could reassemble them into two balls each identical to the one we started with, and you could keep going until eventually you have an infinite number of balls, infinity all from one.</p>
</details>

这听起来很荒谬，但我们实际上可以通过构建一个图来了解它是如何运作的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This sounds absurd, but we can actually see how it works by building a graph.</p>
</details>

想象你可以向四个方向移动：上、下、左、右。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine you can move in four directions, up, down, left and right.</p>
</details>

走一步后，比如向左，你仍然有相同的四个选择：上、下、左、右。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After taking a step, say to the left, you get the same four choices, up, down, left and right,</p>
</details>

但如果你向右走，你就会回到起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but if you go to the right, you'll end up back where you started.</p>
</details>

所以我们唯一的规则是不能立即反转一个动作，我们会在每一步重复这个动作，每条新线的长度是前一条的一半，这样它就能全部显示在屏幕上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the only rule we're gonna have is that you can't immediately reverse a move, and we'll keep repeating this at every step, drawing each new line, half the size of the previous one so it all fits on the screen.</p>
</details>

如果我们继续下去，我们将得到这个无限分支的图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we keep going, we'll end up with this infinitely branching graph.</p>
</details>

看着我们的图，我们可以把它分成五个部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking at our graph, we can break it into five sections.</p>
</details>

有我们开始的中间部分，然后有四个其他部分，它们都相同，只是旋转了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's the middle section where we started, and then there are four other sections that are all identical, just rotated.</p>
</details>

所以如果我们把左边的这个部分，并把所有东西向右移动一步，顶部在这里，底部在这里，最左边在这里，那么我们几乎重新创建了整个图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we take this section to the left and we move everything one step to the right, the top part ends up here, the bottom part here, and the leftmost part here, then we've almost recreated the entire graph.</p>
</p>
</details>

我们唯一缺少的是这个部分，所以我们把它加回去，但我们也可以用完全不同的方式做同样的事情，通过取底部部分并向上移动一步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only thing we're missing is this section, so let's add it back in, but we could have done the same thing in a completely different way by taking the bottom section and moving it one step up.</p>
</details>

现在最左边的部分在这里，最右边的部分在这里，底部在这里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the leftmost part ends up here, the rightmost part here and the bottom here.</p>
</details>

同样，我们只缺少一个部分，所以我们把它加回去。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, we're just missing one section, so let's add it back in.</p>
</details>

但这意味我可以以两种完全不同的方式重新创建整个原始图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this means I can recreate the entire original graph in two completely different ways.</p>
</details>

我们取了一个图，把它分成几部分，平移了这些部分，所以左边部分向右移动，下边部分向上移动，不知何故最终得到了两个相同的副本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We took one graph, split it into sections, shifted the sections, so the left section went to the right and the down section up and somehow ended up with two identical copies.</p>
</details>

这正是巴拿赫和塔斯基所做的，但他们用的是一个球，就像我们的图一样，我们又有四个动作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is exactly what Banach and Tarski did, but with a ball, like our graph, we again have four moves.</p>
</details>

我们可以向上、向下、向左或向右旋转球，而且我们唯一的规则是不能立即反转一个动作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can rotate the ball up, down, left or right, and again, our only rule is that we can't immediately reverse a move.</p>
</details>

为了确保我们永远不会回到同一点，每次旋转都将是圆的相同无理部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And to make sure we never come back to the same point, every rotation will be by the same irrational portion of a circle.</p>
</details>

我们可以选择一个随机的起点，标记它，然后开始旋转球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can pick a random starting point, mark it and then start rotating the ball.</p>
</details>

每个点都根据用于到达那里的旋转方向着色。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Each point is colored based on the direction of rotation used to get there.</p>
</details>

如果我们这样做无限次，我们最终会得到这组点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we do this an infinite number of times, we end up with this collection of points.</p>
</details>

这是一个可数无限的集合，因为我们可以列出每次旋转并为其分配一个自然数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a countably infinite collection because we could list each rotation and assign it a natural number,</p>
</details>

但球的表面有不可数无限的点，就像实数线一样。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the surface of a ball has uncountably infinite points just like the real number line.</p>
</details>

所以如果我们想覆盖整个表面，我们需要重复这个过程，但我们接下来从哪里开始呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we want to cover the entire surface, we would need to repeat this process, but where do we start next?</p>
</details>

由于有不可数无限个可能的起点，我们无法列出所有这些点，而且我们希望确保避免任何我们已经着色的点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since there are uncountably infinite possible starting points, we can't list them all and we wanna be sure to avoid any points we've already colored.</p>
</details>

所以解决方案是使用选择公理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the solution is to use the axiom of choice.</p>
</details>

有了它，我们可以选择独特的起点，即使我们无法确切说明我们是如何选择它们的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With it, we can choosing unique starting points, even though we can't say exactly how we are choosing them.</p>
</details>

一旦我们给球上的每个点都着色，我们就可以将这些点分成五组，一组用于起点，另外四组根据用于到达这些点的最终旋转方向。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once we've colored every point on the ball, we can split the points into five groups, one for the starting points and four others based on the final rotation used to arrive at those points.</p>
</details>

这些组现在可以像我们图的各个部分一样处理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These groups can now be treated just like the sections of our graph.</p>
</details>

我们可以将以左旋转结束的点组向右旋转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can take the group of points that end with a left rotation and rotate it to the right.</p>
</details>

然后我们加入以右旋转结束的组，就这样，我们重新创建了我们的原始球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we add in the group that ends with a right rotation, and just like that, we've recreated our original ball</p>
</details>

我们可以再次这样做，多做一步来考虑起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we can do it again making an extra move to account for the starting points.</p>
</details>

我们同样可以取以向下旋转结束的组并向上旋转。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can equally take the group that ends with a down rotation and rotate it upwards.</p>
</details>

然后我们加入以向上旋转结束的组和我们的起点，现在我们第二次重新创建了我们的原始球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we add in the group that ends with an up rotation and our starting points, and now we've recreated our original ball a second time.</p>
</details>

现在，这有点过于简化，但它给你展示了这是如何完成的本质。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this is a bit of an oversimplification, but it gives you the essence of how this is done.</p>
</details>

从一个球，我们创造了两个相同体积的相同球，没有任何东西阻止我们再次这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From one ball, we have created two identical balls of the same volume, and nothing stops us from doing this again.</p>
</details>

两个球可以变成四个，四个变成八个，很快你就会拥有无限多个球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Two balls can become four, four become eight, and before you know it, you've got infinite balls.</p>
</details>

选择公理是如此显而易见地正确，而它的结果又是如此显而易见地错误，你会想，这到底是怎么回事？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The axiom of choice is something that's so obviously true and it's consequences are so obviously false that you're like, what the hell is going on?</p>
</details>

这种无限复制在理论上是可能的，但问题在于我们把球分成的小组并不是简单的形状。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This infinite duplication is theoretically possible, but the catch is the groups we split the ball into aren't simple shapes.</p>
</details>

它们实际上是不可测的，就像维塔利集一样，尽管原始球有体积，复制的球也有体积，但中间的步骤违反了我们对大小的理解。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're actually non-measurable, just like the Vitali set, although the original ball has a volume and the duplicated balls have a volume, the step in between violates our understanding of size.</p>
</details>

这就是悖论发生的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is what allows the paradox to happen.</p>
</details>

当然，这些在物理上是不可能实现的切割，但更深层次的形而上学问题是，如果我们能进行这样的切割，这是否应该在遥远的程度上成为可能？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, those are not physically plausible cuts, but like there's a more meta physical question like, should this even remotely be possible if we could make such cuts?</p>
</details>

我认识的几乎所有人的答案都是绝对不可能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the answer to almost every human I know is absolutely not.</p>
</details>

事实是没人知道发生了什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The truth is no one knew what was going on.</p>
</details>

同年，塔斯基试图进一步推动选择公理，证明它等价于“任何无限集合的平方都不会增加其大小”的陈述。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That same year, Tarski tried to push the axiom of choice further proving it is equivalent to the statement that squaring any infinite set would not increase its size.</p>
</details>

当塔斯基第一次将这项工作提交给巴黎的一家期刊时，编辑**亨利·勒贝格**（Henri Lebesgue）不屑一顾地回应道：“没有人对两个错误陈述之间的等价性感兴趣。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When Tarski first submitted this work to a journal in Paris, the editor Lebesgue responded dismissively, nobody's interested in the equivalence between two false statements.</p>
</details>

塔斯基没有气馁，将其发送给同一期刊的另一位编辑**莫里斯·勒内·弗雷谢**（Maurice René Fréchet），他的回应是：“没有人对两个显然正确的陈述之间的等价性感兴趣。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not to be deterred, Tarski sent it to a different editor at the same journal, Freche, his response, nobody's interested in the equivalence of two obviously true statements.</p>
</details>

塔斯基再也没有在那里提交过论文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tarski never submitted a paper there again.</p>
</details>

所以数学陷入了30多年的危机，人们不知道该相信什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So math was in crisis for over 30 years with people not knowing what to believe.</p>
</details>

问题是，等等，这真的是一个公理吗，还是你可以证明的东西？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The question is, wait a second, is this really an axiom or is this something that you can prove?</p>
</details>

### 选择公理的独立性与现代接受

1938年，我们终于开始得到一些答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1938, we finally started getting some answers.</p>
</details>

奥地利数学家**库尔特·哥德尔**（Kurt Godel）证明存在一个世界，其中所有其他已被接受的集合论公理都成立，选择公理也成立。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The Austrian mathematician, Kurt Godel, proved there is a world all the other already accepted axioms of set theory hold true, and so does the axiom of choice.</p>
</details>

然后，在1963年，**保罗·科恩**（Paul Cohen）证明还存在一个世界，其中所有集合论公理都成立，除了选择公理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then in 1963, Paul Cohen proved there's also a world where all the axioms of set theory hold true except for the axiom of choice.</p>
</details>

这有点像几何学中的**平行公设**（Parallel Postulate: 欧几里得几何中的第五公设，关于平行线的性质）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is kind of like the parallel postulate in geometry.</p>
</details>

你可以把几何学想象成一个游戏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of geometry as a game.</p>
</details>

前四个公设或公理就像玩这个游戏所需的最低规则，然后第五个公理选择你想要玩的游戏宇宙。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first four postulates or axioms are like the minimum rules required to play that game, and then the fifth axiom selects the universe that you wanna play in.</p>
</details>

如果你选择第五个公理不成立，所以没有平行线，那么你玩的是**球面几何**（Spherical Geometry: 在球面上研究图形性质的几何学）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you choose that the fifth axiom doesn't hold, so there are no parallel lines, then you're playing in spherical geometry.</p>
</details>

如果你选择一条平行线，你玩的是**平面几何**（Flat Geometry: 欧几里得几何，在平面上研究图形性质），如果你选择多于一条平行线，那么你玩的是**双曲几何**（Hyperbolic Geometry: 一种非欧几何，其中通过一点可以引出多条平行线）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you choose one parallel line, you're playing in flat geometry, and if you choose more than one parallel line, then you're playing in hyperbolic geometry.</p>
</details>

所有这些几何学都是有效的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of these geometries are valid.</p>
</details>

这取决于你想做什么数学，选择公理也是如此。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It just depends on the math you want to do, and it's the same for the axiom of choice.</p>
</details>

选择公理既不能从其他公理中被证明，也不能被反驳。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The axiom of choice can neither be proven nor disproven from the other axioms.</p>
</details>

所以只要其他公理是一致的，添加选择公理就不会导致任何矛盾。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as long as the other axioms are consistent, adding choice won't lead to any contradictions.</p>
</details>

保罗·科恩三年后因其开创性成果以及他在集合论中的其他工作被授予**菲尔兹奖**（Fields Medal: 国际数学联盟颁发的数学奖项，被誉为“数学界的诺贝尔奖”）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Paul Cohen was awarded the Fields Medal three years later for his groundbreaking result, as well as his other work in set theory, and after Godel and Cohen's work, most of the debates about the axiom of choice died down.</p>
</details>

最终，这到底是怎么回事，取决于你是否想让选择公理成为你系统的一部分，并面对拥有或不拥有它的后果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the end, what the hell is going on is that it's up to you whether you want to choose for the axiom of choice to be a part of your system or not, and face the consequences of either having it or not having it.</p>
</details>

尽管选择公理产生了反直觉的结果，如不可测集合和无限复制，但它极其有用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Despite the counterintuitive results created by the axiom of choice, like non-measurable sets and infinite duplication, it is incredibly useful,</p>
</details>

选择公理允许数学家们用更简洁的论证取代冗长的显式证明。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">choice allows mathematicians to replace lengthy explicit proofs with more concise arguments.</p>
</details>

通过在有限情况下证明陈述，许多证明可以在一行中扩展到任何无限情况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By proving statements in the finite case, many proofs can be extended to any infinite case in just one line.</p>
</details>

这将可能长达20页的证明缩短到半页。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This reduces proofs that could have been 20 pages to just half a page.</p>
</details>

而且选择公理不仅仅使数学更容易。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the axiom of choice doesn't just make math easier.</p>
</details>

它对某些证明至关重要。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is essential to some proofs.</p>
</details>

有许多定理，其一般情况在不使用选择公理的情况下无法证明。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are many theorems where the general case can't be proven without using choice somewhere.</p>
</details>

现在，一些数学家仍然喜欢不使用选择公理的证明，即使这更难，证明必须一步一步地阐明才能推广到无限情况，这提供了额外的信息。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, some mathematicians still prefer proofs without choice, even if it's harder, the proof has to be spelled out step by step to generalize to infinite cases, and this provides additional information.</p>
</details>

一些数学家花费时间研究没有选择公理的宇宙，以了解当我们移除它时会发生什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some mathematicians spend their time studying universes without the axiom of choice to understand what happens when we remove it.</p>
</details>

但今天，选择公理几乎被普遍接受。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But today, the axiom of choice is almost universally accepted.</p>
</details>

在过去的80多年里，几代数学家都被教导选择公理是既定的，以至于许多使用选择公理的人甚至可能没有意识到他们正在这样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the past 80 plus years, generations of mathematicians have been taught with choice as a given to the point where many who use the axiom of choice might not even realize when they're doing it.</p>
</details>

如果你不包括选择公理，那么你就像是双手被绑在背后工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you don't include the axiom of choice, then you're kind of working with both hands tied behind your back.</p>
</details>

在现代数学上取得任何进展都非常困难。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's very hard to make any progress on modern math.</p>
</details>

所以问题从来都不是选择公理是否正确？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the question was never really is the axiom of choice right?</p>
</details>

而是选择公理是否适合你想要做的事情？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But rather is the axiom of choice right for what you want to do?</p>
</details>

### 赞助商信息

最近我也一直在尝试做类似的事情，但用的是人工智能，我试图理解像**ChatGPT**（ChatGPT: 一种基于大型语言模型的对话式人工智能）这样的模型是如何工作的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lately I've been trying to do a similar thing, but with AI where I'm trying to understand the logic behind how models like ChatGPT work,</p>
</details>

如果你也想了解生成式人工智能是如何实际运作的，那么你可以通过今天的赞助商Brilliant来实现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and if you've also wanted to learn how generative AI actually works, well then you can do that with today's sponsor, Brilliant.</p>
</details>

Brilliant刚刚推出了一门很棒的课程，它通过互动视觉效果分解了所有这些内容，这正是我喜欢Brilliant的地方。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant has just launched a great course that breaks all of this down with interactive visuals, which is exactly what I love about Brilliant.</p>
</details>

该课程培养你对人工智能背后的数学和逻辑的直觉，探索模型如何被训练来发现模式、生成图像，甚至创作歌曲。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The course builds your intuition for the math and logic behind AI, exploring how models are trained to spot patterns, generate images, and even whip up a song.</p>
</details>

Brilliant提供数千个互动课程，涵盖数学、科学、编程、技术及其他领域，所有这些都旨在提高你的思维和解决问题的能力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant has thousands of interactive lessons in math, science, programming, technology and beyond, all designed to sharpen your thinking and problem solving skills.</p>
</details>

由于每节课都是小块的，你可以随时随地在笔记本电脑甚至手机上开始学习。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since each lesson is bite-sized, you can jump in anywhere, anytime on your laptop or even on your phone.</p>
</details>

所以要免费试用Brilliant提供的所有内容30天，请访问brilliant.org/veritasium，点击描述中的链接或扫描这个方便的二维码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to try everything Brilliant has to offer for free for a full 30 days visit brilliant.org/veritasium, click that link in the description or scan this handy QR code.</p>
</details>

如果你注册，你还将获得年度高级订阅20%的折扣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you sign up, you'll also get 20% off their annual premium subscription.</p>
</details>

所以我要感谢Brilliant赞助这个视频。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I want to thank Brilliant for sponsoring this video.</p>
</details>