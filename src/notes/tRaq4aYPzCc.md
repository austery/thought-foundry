---
area: society-systems
category: science
companies_orgs:
- Brilliant.org
date: '2023-06-06'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Arithmetica
people:
- Pierre de Fermat
- Diophantus
- Kurt Hensel
- Andrew Wiles
- Richard Taylor
- Kazuya Kato
products_models:
- Thinking in Code
project:
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=tRaq4aYPzCc
speaker: veritasium
status: evergreen
summary: 本文深入探讨了p进数这一奇特的数系，它拥有无限向左延伸的数字，并颠覆了我们对“大小”的传统认知。文章通过具体例子解释了p进数的加减乘除、分数和负数表示，以及它们在解决费马大定理等数论难题中的关键作用，揭示了数学中一个不为人知的强大工具。
tags:
- p-adic-number
- science
- system
- technology
- theory
title: 如果一直平方下去会怎样？探索p进数与数学的隐藏维度
---

### 奇特的平方模式与无限数字

Derek: 取数字5并将其平方，得到25。现在取25并将其平方，得到625。再平方625，你将得到390,625。你看到其中的模式了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Take the number 5 and square it, you get 25. Now take 25 and square it, you get 625. Square 625, and you get 390,625. Do you see the pattern?</p>
</details>

Derek: 5的平方以5结尾，25的平方以25结尾，而625的平方以625结尾。那么这个模式会继续下去吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">5 squared ends in a 5, 25 squared ends in 25, and 625 squared ends in 625. So does this pattern continue?</p>
</details>

Derek: 好的，让我们尝试平方390,625。它并不完全以自身结尾，但最后五位数字是匹配的，所以它将模式扩展了几位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let's try squaring 390,625. It doesn't quite end in itself, but the last 5 digits match, so it extends the pattern by a few places.</p>
</details>

Derek: 那么，让我们尝试只平方其中的一部分，90,625。它确实以自身结尾，如果我们平方整个数字，它也以自身结尾，现在我们已经达到了10位数字，你可以一直这样做下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's try squaring just that part, 90,625. Well, that does end in itself, and if we squared that whole number, it also ends in itself, and now we're up to 10 digits, and you can keep doing this.</p>
</details>

Derek: 平方答案中与前一个数字匹配的部分，并增加它们共同的位数，这就像我们正在收敛于一个数字，但不是通常意义上的收敛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Squaring the part of the answer that matches the previous number and increasing the number of digits they share in common, it's as though we are converging on a number, but not in the usual sense of convergence.</p>
</details>

Derek: 这个数字将有无限位，如果你平方它，你会得到相同的数字。这个数字是它自己的平方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This number will have infinite digits, and if you square it, you'll get back that same number. The number is its own square.</p>
</details>

Derek: 现在，我敢打赌你在想：“谈论小数点左侧有无限位数的数字，这有意义吗？我的意思是，那不就是无穷大吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I bet you're thinking, "Does it even make sense to talk about numbers that have infinite digits going off to the left of the decimal point? I mean, isn't that just infinity?"</p>
</details>

Derek: 在这个视频中，我的目标是让你相信这样的数字确实有意义。它们只是属于一个与我们习惯的数系截然不同的数系，这使得这些数字能够解决使用普通数字无法解决的问题，这就是为什么它们是当今数论、代数几何及其他领域前沿研究中的基本工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this video, my goal is to convince you that such numbers do make sense. They just belong to a number system that works very differently from the one we're used to, and that allows these numbers to solve problems that are impenetrable using ordinary numbers, which is why they are a fundamental tool in cutting edge research today in number theory, algebraic geometry, and beyond.</p>
</details>

### 10进数：一个不同的数系

Derek: 那么，让我们从考察我们刚刚发现的数字所属的数系的属性开始。我们称这些为**10进数**（10-adic numbers: 一种以10为基数，数字向左无限延伸的数）。因为它们是以10为基数书写的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's start by looking at the properties of the number system that includes the number we just found. We'll call these 10-adic numbers because they're written in base 10.</p>
</details>

Derek: 如果你有两个10进数，你能把它们加起来吗？当然，你只需从右到左逐位进行，像往常一样相加，加法不是问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have two 10-adic numbers, can you add them together? Sure, you just go digit by digit from the right to the left, adding them up as usual, addition is not a problem.</p>
</details>

Derek: 乘法呢？同样，你可以取任意两个10进数并进行乘法运算。这之所以可行，是因为答案的最后一位只取决于10进数的最后几位，而后续的数字只取决于它们右侧的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What about multiplication? Well, again, you can take any two 10-adic numbers and multiply them out. This works because the last digit of the answer depends only on the last digits of the 10-adic numbers, and subsequent digits depend only on the numbers to their right.</p>
</details>

Derek: 所以这可能需要大量的工作，但你可以根据需要进行任意多位数的计算。让我们取一个以857142857143结尾的10进数，并将其乘以7。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it might take a lot of work, but you can keep going for as many digits as you like. Let's take one 10-adic number ending in 857142857143, and multiply it by 7.</p>
</details>

Derek: 那么7乘以3是21，进位2；7乘以4是28加上2是30，进位3；7乘以1是7加上3是10，进位1；7乘以7是49加上1是50，进位5；7乘以5是35加上5是40，进位4；你可以一直这样算下去，你会发现所有其他数字都是0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 7 times 3 is 21, carry the 2, 7 times 4 is 28 plus 2 makes 30, carry the 3, 7 times 1 is 7 plus 3 makes 10, carry the 1, 7 times 7 is 49 plus 1 is 50, carry the 5, 7 times 5 is 35 plus 5 is 40, carry the 4, and you can keep going forever and you'll find all the other digits are 0.</p>
</details>

Derek: 所以这个数字乘以7等于1，这意味着这个10进数一定等于1/7。我们刚刚发现的是，在10进数中存在有理数（分数），而无需使用除号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this number times 7 equals 1, which means this 10-adic number must be equal to 1/7th. What we have just found is that there are rational numbers, fractions, in the 10-adic numbers without having to use the divided by symbol.</p>
</details>

Derek: 假设你想找到等于1/3的10进数。你会怎么做？嗯，让我们想象我们有一串无限的数字，当我们把它们乘以3时，我们得到1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Say you wanna find the 10-adic number that equals 1/3. How would you do it? Well, let's imagine we have an infinite string of digits, and when we multiply them by 3, we get 1.</p>
</details>

Derek: 这意味着1左侧的所有数字都必须是0。那么我们用3乘以什么才能在个位得到1呢？嗯，3乘以7是21，所以我们得到了1，然后我们进位2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This implies that all the digits to the left of the 1 must be 0. So what do we multiply 3 by to get a 1 in the unit's place? Well, 3 times 7 is 21, so that gives us the 1, and then we carry the 2.</p>
</details>

Derek: 现在，什么数字乘以3再加上2会得到0呢？是6。3乘以6等于18加上2等于20。所以我们得到一个0，然后进位2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what times 3 plus 2 gives us a 0? 6. 3 x 6 = 18 + 2 = 20. So we have a 0 and we carry the 2.</p>
</details>

Derek: 再放一个6在那里，我们又会得到一个20。所以如果我们把一串6一直放到左边，它们都会相乘得到0。所以一串无限的6和一个7等于1/3。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Put another 6 there and we get another 20 again. So if we put a string of 6s all the way to the left, they will all multiply to make a 0. So an infinite string of 6s and one 7 is equal to 1/3.</p>
</details>

Derek: 这看起来类似于我们习惯的无限数字，它们向小数点右侧延伸，比如0.9999999循环。这等于什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This looks similar to the infinite digits we're used to going off to the right of the decimal point, like 0.9999999 repeating. What does this equal?</p>
</details>

Derek: 嗯，我声称它正好等于1，但我们如何证明呢？让我们称这个数字为k，然后两边都乘以10。所以现在我们有9.999循环等于10k。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I'll claim that it's exactly equal to 1, but how do we prove it? Let's call this number k, and then multiply both sides by 10. So now we've got 9.999 repeating equals 10k.</p>
</details>

Derek: 现在，用下面的方程减去上面的方程，得到9等于9k，所以k等于1。这是一个相当标准的论证，说明为什么0.999循环必须正好等于1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, subtract the top equation from the bottom one to get 9 = 9k, so k = 1. This is a fairly standard argument for why 0.999 repeating must be exactly equal to 1.</p>
</details>

Derek: 但是，如果9不是在小数点右侧，而是在小数点左侧呢？也就是说，一个由所有9组成的10进数。这个数字等于什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what if instead of going to the right of the decimal place, the 9s went to the left of the decimal place, that is a 10-adic number of all 9s. What does this number equal?</p>
</details>

Derek: 嗯，我们可以做同样的事情，把它设为m，然后两边都乘以10。所以我们有999999990等于10m。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we can do the same thing, set it equal to say m, and then multiply both sides by 10. So we have 999999990 equals 10m.</p>
</details>

Derek: 现在，用第一个方程减去这个方程，我们得到9等于负9m，这意味着m等于负1。所以这个由所有9组成的10进数实际上是负1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, subtract this equation from the first one, and we get 9 = -9m, meaning m = -1. So this 10-adic string of all 9s is actually -1.</p>
</details>

Derek: 现在，我知道这听起来很奇怪，所以让我们尝试给它加上1。嗯，9加1是10，进位1；9加1是10，进位1；你只需一直这样做下去，每个数字都变成0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I know that seems weird, so let's try adding 1 to it. Well, 9 + 1 is 10, carry the 1, 9 + 1 is 10, carry the 1, and you just keep doing this all the way down the line and every digit becomes 0.</p>
</details>

Derek: 我知道这看起来好像在某个时候，你会在最左边得到一个1，但这永远不会发生，因为9是无限延伸的。所有9加1等于0，因此所有9必须等于负1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know it seems like at some point, you're gonna end up with a 1 all the way down on the left, but this never happens because the 9s go on forever. All 9s + 1 = 0, therefore all 9s must be equal to -1.</p>
</details>

Derek: 这也意味着所有9后面跟着一个3等于负7。我们刚刚发现的是，10进数也包含负数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This also means that all 9s and then say a 3 equals -7. What we have just discovered is that the 10-adics contain negative numbers as well.</p>
</details>

Derek: 你不需要负号，仅凭这些数字的结构，负数就已经包含在内了。要进行减法，你只需加上那个数字的负数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You don't need a negative sign by the structure of these numbers alone, negatives are included. To do subtraction, you just add the negative of that number.</p>
</details>

Derek: 要找到任何10进数的负数，你可以乘以所有9，或者只需执行这两个步骤。首先，取9的补数，也就是每个数字与9的差，然后加1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To find the negative of any 10-adic number, you could multiply by all 9s or just perform these 2 steps. First, take the 9s complement, that is the difference between each digit and 9, and then add 1.</p>
</details>

Derek: 所以如果这个数字是1/7，那么负1/7就是142857142856加1，我们可以通过将其与正1/7相加来验证这确实是负1/7，并发现这些数字相互抵消为0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if this number is 1/7, then -1/7 is 142857142856 + 1, and we can verify that this is indeed -1/7 by adding it to positive 1/7, and finding that these numbers annihilate each other to 0.</p>
</details>

Derek: 总而言之，10进数可以进行加、减、乘运算，并且它们的工作方式与你预期的一模一样。此外，它们包含分数和负数，而无需使用额外的符号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to sum up, 10-adic numbers can be added, subtracted, multiplied, and they work exactly as you'd expect. Plus they contain fractions and negative numbers without having to use additional symbols.</p>
</details>

### 10进数的局限性与p进数的引入

Derek: 只有一个大问题，你可以在我们找到的第一个10进数中看到它。记住，如果你将这个数字自乘，你会得到相同的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is just one big problem, and you can see it with the first 10-adic number we found. Remember, if you multiply this number by itself, you get back that same number.</p>
</details>

Derek: 这个数字是它自己的平方，这是一个问题，如果你把末尾移到左边并因式分解，你就能看出来。那么我们就有n乘以n减1等于0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This number is its own square, and that's a problem which you can see if we move the end to the left-hand side and factor it. Well, then we have n times n minus 1 equals 0.</p>
</details>

Derek: 数字0或1会满足这个方程，但我们的10进数不是0或1。你甚至可以通过乘法来验证。这个数字n乘以n减1确实等于0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The numbers 0 or 1 would satisfy this equation, but our 10-adic number is not 0 or 1. You can even verify by multiplying it out. This number n times n minus 1 really does work out to 0.</p>
</details>

Derek: 这打破了数学家们赖以解决方程的工具之一。我的意思是，你有没有想过为什么当我们面对一些复杂的方程时，我们会把所有的项移到一边，设它们等于0，然后因式分解它们？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This breaks 1 of the tools mathematicians rely on to solve equations. I mean, have you ever thought about why when faced with some complicated equation, we move all the terms to one side, set them equal to 0, and then factor them?</p>
</details>

Derek: 嗯，在制作这个视频之前我当然没有想过，但有一个很好的理由，它归结为0的特殊性质。如果几个项相乘等于0，那么你知道其中至少有一个项必须是0，这使我们能够将复杂的更高阶方程分解为一组更小、更简单的方程并求解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I certainly haven't before making this video, but there is a good reason, and it comes down to the special property of 0. If several terms multiplied together equal 0, then you know at least one of those terms must be 0, and this allows us to break down complicated higher order equations into a set of smaller, simpler equations, and solve.</p>
</details>

Derek: 但这在10进数中行不通，根本原因是我们使用的是基数10，而10是一个合数，它不是素数，它是5乘以2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this won't work with the 10-adics, and fundamentally, the reason is because we're working in base 10, and 10 is a composite number, it's not a prime, it's 5 x 2.</p>
</details>

Derek: 假设你想找到两个10进数相乘等于0，那么首先，你知道最后一位必须是0。那么你可以乘以哪两个数字才能在个位得到0呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Say you wanna find two 10-adic numbers that multiply to 0, then to start off, you know that the last digit must be 0. So which two numbers could you multiply to get a 0 in the unit's place?</p>
</details>

Derek: 嗯，你可以用0乘以任何数字，这没问题，但你也可以乘以比如5乘以4得到20，这会在个位给你一个0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you could multiply a 0 times any number, that's no problem, but you could also multiply say 5 x 4 and get 20, which gives you a 0 in the unit's place.</p>
</details>

Derek: 然后你可以进位2，再找到另外两个数字，它们会在十位给你一个0，你可以从那里继续构建数字，这样所有的数字都变成0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you can carry the 2 and find another two numbers that will give you a 0 in the ten's place, and you can keep building the numbers from there, so that all the digits work out to 0.</p>
</details>

Derek: 有一种方法可以避免这种情况，那就是使用素数基数而不是基数10。它可以是任何素数，如2、3、5、7等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a way to avoid this, and that is to use a prime number base instead of base 10. It could be any prime like 2, 3, 5, 7, et cetera.</p>
</details>

Derek: 举个例子，让我们创建一个**3进数**（3-adic number: 一种以3为基数，数字向左无限延伸的数）。所以这是一个基数3的数字，小数点左侧有无限位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As an example, let's create a 3-adic number. So this is a base 3 number with infinite digits to the left of the decimal point.</p>
</details>

Derek: 在3进数中，我们只能使用数字0、1和2，因为3与10是相同的。现在，你如何将两个3进数相乘得到0呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the 3-adics, the only digits we can use are 0, 1, and 2 because 3 is the same thing as 10.</p>
</details>

Derek: 好的，我们再次可以从只看最后一位开始，1乘以1是1，2乘以1是2，2乘以2是4，在基数3中是11。所以得到0的唯一方法是其中一个3进数本身就是0，对于所有向左延伸的数字都是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, how could you multiply 2, 3-adic numbers to get 0? Well, again, we can start by just looking at the last digit, 1 x 1 is 1, 2 x 1 is 2, and 2 x 2 is 4, which, in base 3, is 11. So the only way to get a 0 is if 1 of those 3-adic digits itself is 0, and it's the same for all the digits going to the left.</p>
</details>

Derek: 它们相乘得到0的唯一方法是其中一个3进数本身完全是0。这适用于任何素数基数，并恢复了有用的性质，即几个数字的乘积只有在其中一个数字本身是0时才为0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only way they multiply the 0 is if one of the 3-adic numbers is itself entirely 0. And this works for any prime base and restores the useful property that the product of several numbers will only be 0 if one of those numbers is itself 0.</p>
</details>

Derek: 这是一个随机的3进数，这个数字表示1乘以3的0次方加上2乘以3的1次方加上1乘以3的2次方加上1乘以3的3次方，依此类推。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is a random 3-adic number, this number means 1 x 3 to the 0 + 2 x 3 + 1 x 3 squared + 1 x 3 cubed, and so on.</p>
</details>

Derek: 所以你可以将一个3进数看作是3的幂的无限展开。等于负1的3进整数将是无限串的2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can think of a 3-adic number as an infinite expansion in powers of 3. The 3-adic integer that equals -1 would be an infinite string of 2s.</p>
</details>

Derek: 如果你加1，那么2加1是3，在基数3中是10。所以你留下0，进位1，2加1又是10。所以你进位1，然后你一直这样下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you add 1, then 2 + 1 is 3, which in base 3 is 10. So you leave the 0, carry the 1, and 2 + 1 is again 10. So you carry the 1, and you keep going on like that forever.</p>
</details>

Derek: **p进数**（p-adic numbers: 以素数p为基数，数字向左无限延伸的数）具有与10进数相同的所有属性，但此外，你永远不会找到除了0和1之外的数字是它自己的平方，也不会找到一个非0数字乘以另一个非0数字等于0的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">P-adics have all the same properties as the 10-adics, but in addition, you will never find a number that is its own square besides 0 and 1 nor will you find one non-0 number times another non-0 number being equal to 0.</p>
</details>

Derek: 这就是为什么专业数学家使用p进数（其中p代表素数）而不是10进数的原因。p进数是真正的工具。它们已被十多位近期菲尔兹奖得主的工作所使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is why professional mathematicians work with p-adics where the p stands for prime rather than say the 10-adics. P-adics are the real tool. They have been used in the work of over a dozen recent Fields Medalists.</p>
</details>

Derek: 它们甚至参与破解了有史以来最传奇的数学问题之一。1637年，**皮埃尔·德·费马**（Pierre de Fermat: 法国数学家，以费马大定理闻名）正在阅读古希腊数学家**丢番图**（Diophantus: 古希腊数学家，著有《算术》）的著作《**算术**》（Arithmetica）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They were even involved in cracking one of the most legendary math problems of all time. In 1637, Pierre de Fermat was reading the book "Arithmetica" by the ancient Greek mathematician Diophantus.</p>
</details>

Derek: 丢番图对以几何术语表达的多项式方程的解很感兴趣，比如**勾股定理**（Pythagorean theorem: 直角三角形两直角边的平方和等于斜边的平方）。对于直角三角形，x的平方加y的平方等于z的平方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Diophantus was interested in the solutions to polynomial equations phrased in geometric terms like the Pythagorean theorem. For a right triangle, x squared + y squared = z squared.</p>
</details>

Derek: 在实数中找到这个方程的解是相当容易的。它只是一个无限的圆锥体。但丢番图想找到整数或分数形式的解，比如3、4、5和5、12、13，他也不是第一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The set of solutions to this equation in the real numbers is pretty easy to find. It's just an infinite cone. But Diophantus wanted to find solutions that were whole numbers or fractions like 3, 4, 5 and 5, 12, 13, and he wasn't the first.</p>
</details>

Derek: 这里有一块大约公元前2000年的古巴比伦泥板，上面列出了大量的**勾股数**（Pythagorean triples: 满足勾股定理的三个正整数）。顺便说一句，这个列表比毕达哥拉斯早了一千多年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here is an ancient Babylonian clay tablet from about 2000 BC with a huge list of these Pythagorean triples. By the way, this list predates Pythagoras by more than a millennium.</p>
</details>

Derek: 就在丢番图讨论勾股定理的旁边，费马写下了一段将载入史册的声明，成为有史以来最臭名昭著的声明之一。方程x的n次方加y的n次方等于z的n次方，对于任何大于2的n，在整数中没有解。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">Right next to Diophantus' discussion of the Pythagorean theorem, Fermat writes a statement that will go down in history as one of the most infamous of all time. The equation x to the n + y to the n = z to the n has no solutions in integer for any n greater than 2.</p>
</details>

Derek: 我有一个真正了不起的证明，但它太长了，无法写在页边空白处。这个后来被称为**费马大定理**（Fermat's Last Theorem: 指当整数n > 2时，关于x, y, z的方程x^n + y^n = z^n没有正整数解）的定理，在358年间一直未被证明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have a truly marvelous proof of this fact, but it's too long to be contained in the margin. Fermat's last theorem, as this became known, would go unproven for 358 years.</p>
</details>

Derek: 事实上，为了解决它，必须发明新的数字，即p进数，这些数字为解决丢番图《算术》中的其他问题提供了一种系统的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, to solve it, new numbers had to be invented, the p-adics, and these provide a systematic method for solving other problems in Diophantus' "Arithmetica."</p>
</details>

Derek: 例如，找到三个正方形，它们的面积相加形成一个更大的正方形，并且第一个正方形的面积是第二个正方形的边长，第二个正方形的面积是第三个正方形的边长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, find three squares whose areas add to create a bigger square and the area of the first square is the side length of the second square, and the area of the second square is the side length of the third square.</p>
</details>

嘉宾: 他在代数（al-jabr）出现很多个世纪之前，就真正给出了代数的第一个实例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- He's really giving the the first instance of algebra many, many centuries before, al-jabr.</p>
</details>

Derek: 所以如果我们设第一个正方形的边长为x，那么它的面积是x的平方。这是第二个正方形的边长，因此它的面积是x的4次方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we set the side of the first square to be x, then its area is x squared. This is the side length of the second square which therefore has an area of x to the 4.</p>
</details>

Derek: 这就是第三个正方形的边长，它的面积是x的8次方。我们希望这三个面积，x的平方加x的4次方加x的8次方，相加形成一个新的正方形。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is then the side length of the third square which has an area of x to the 8. And we want these three areas, x squared + x to the 4 + x to the 8 to add to make a new square.</p>
</details>

Derek: 所以我们称它的面积为y的平方。所以x的平方加x的4次方加x的8次方等于y的平方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So x squared + x to the 4 + x to the 8 = y squared.</p>
</details>

Derek: 现在，在实数中找到这个方程的解并不难。例如，设x等于1，你会发现y是根号3。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, it's not hard to find solutions to this equation in the real numbers. For example, set x equal to 1, and you find y is root 3.</p>
</details>

Derek: 事实上，我们可以绘制出这个方程所有实数解的图，但丢番图对实数解不感兴趣。他想要有理数解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, we can make a plot of all the real number solutions to this equation, but Diophantus wasn't interested in real solutions. He wanted rational solutions.</p>
</details>

Derek: 整数或分数形式的解。这些要难得多。我的意思是，你从哪里开始呢？我的意思是，你从哪里开始呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Solutions that are whole numbers or fractions. These are much harder to find. I mean, where would you even start? I mean, where would you even start?</p>
</details>

嘉宾: 就像你怎么办？你面对着这个悬崖，你在寻找任何可以抓住的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Like what do you do? You have this cliff and you're looking for anywhere to grab a hold of.</p>
</details>

Derek: 嗯，在19世纪后期，一位名叫**库尔特·亨塞尔**（Kurt Hensel: 德国数学家，p进数的创始人）的数学家试图以素数递增幂的展开形式找到这类方程的解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, in the late 1800s, a mathematician named Kurt Hensel tried to find solutions to equations like this one in the form of an expansion of increasing powers of primes.</p>
</details>

Derek: 所以，使用素数3，解将采取x等于x0加x1乘以3加x2乘以3的平方加x3乘以3的立方，依此类推的形式，y也将是3的幂的类似展开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So working with the prime 3, the solutions would take the form of x = x not + x1 times 3 + x2 times 3 squared + x3 times 3 cubed, and so on, and y would also be a similar expansion in powers of 3.</p>
</details>

Derek: 每个系数都将是0、1或2。现在想象将这些表达式插入我们关于x和y的方程中，你会发现它会很快变得非常混乱，但有一种方法可以简化事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Each of the coefficients would be either 0, 1, or 2. Now imagine inserting these expressions into our equation for x and y, and you can see it's going to get messy real fast, but there is a way to simplify things.</p>
</details>

Derek: 假设你想用基数3写17。嗯，一种方法是将17除以3并找到余数，在这种情况下是2。所以我们知道我们的基数3数字的个位是2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Say you wanted to write 17 in base 3. Well, one way to do it is to divide 17 by 3 and find the remainder, which in this case is 2. So we know the unit's digit of our base 3 number is 2.</p>
</details>

Derek: 接下来，将17除以9，即3的下一个更高幂，你得到余数8。减去我们之前找到的2，你得到6，即2乘以3。所以我们知道倒数第二位是2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, divide 17 by 9, the next higher power of 3, and you get a remainder of 8. Subtract off the 2 we found before and you have 6 which is 2 x 3. So we know the second to last digit is 2.</p>
</details>

Derek: 接下来，将17除以27，你得到余数17。减去我们已经计算过的8，你得到9，所以9的位是1。所以17在基数3中是122。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, divide 17 by 27, and you get a remainder of 17. Subtract off the 8 we've already accounted for and you have 9, so the 9's digit is 1. So 17 in base 3 is 122.</p>
</details>

Derek: 我们在这里做的是一种**模运算**（Modular arithmetic: 一种整数的算术系统，其中数字在达到某个特定值（模数）后“循环”）。在模运算中，数字一旦达到某个特定值（称为模数）就会重置为0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What we're doing here is a form of modular arithmetic. In modular arithmetic, numbers reset back to 0 once they reach a certain value called the modulus.</p>
</details>

Derek: 时钟上的时间有点像这样，模数为12。小时增加到11，但12:00与00:00是相同的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The hours on a clock work kinda like this with a modulus of 12. The hours increase up to 11, but then 12:00 is the same thing as 00:00.</p>
</details>

Derek: 如果现在是上午10点，你说四个小时后会是几点？你可以说14点，但通常我们会说下午2点，因为2是14模12，它比12的倍数多2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If it's 10 in the morning, say what time will it be in four hours? You could say 14, but usually, we'd say 2:00 PM because 2 is 14 modulo 12, it's two more than a multiple of 12.</p>
</details>

Derek: 换句话说，模运算只关注求余数。36模10或36 mod 10是6，25 mod 5是0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in other words, modular arithmetic is only about finding the remainder. 36 modulo 10 or 36 mod 10 is 6, and 25 mod 5 is 0.</p>
</details>

嘉宾: 模3意味着你的时钟只有三个数字：0、1和2。如果你用2乘以2，你得到4，而4与04:00是相同的，与3小时时钟上的1:00是相同的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Mod 3 means your clock only has three numbers on it, 0, 1, and 2, and if you multiply 2 by 2, you get a 4, and 4 is the same thing as 04:00, the same thing as 1:00 on a 3-hour clock.</p>
</details>

Derek: 这种方法的好处是它允许我们通过首先求解模3方程，然后模9，然后模27，依此类推，一次性计算出展开式中的系数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's great about this approach is it allows us to work out the coefficients in our expansion one at a time by first solving the equation mod 3, and then mod 9, and then mod 27, and so on.</p>
</details>

Derek: 所以首先，让我们尝试求解模3方程。由于所有高阶项都可以被3整除，所以在模3下它们都为0。所以我们剩下x0的平方加x0的4次方加x0的8次方等于y0的平方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So first, let's try to solve the equation mod 3. And since all the higher terms are divisible by 3, they're all 0 if we're working mod 3. So we're left with x not squared + x not to the 4th + x not to the 8 = y not squared.</p>
</details>

Derek: 这将允许我们找到满足模3方程的x0和y0的值。现在我们知道x0可以是0、1或2，y0也可以是0、1或2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this will allow us to find the values of x not and y not that satisfy the equation mod 3. Now we know that x not can be either 0, 1, or 2, and y not can also be either 0, 1, or 2.</p>
</details>

Derek: 如果x是0，那么x的平方、x的4次方和x的8次方也都是0。如果x是1，那么x的平方是1，x的4次方和x的8次方也是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If x is 0, then so is x squared, x to the 4, and x to the 8. If x is 1, then x squared is 1, and so is x to the 4, and x to the 8.</p>
</details>

Derek: 如果x是2，那么x的平方是4。但请记住，我们正在进行模3运算，而4模3就是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If x is 2, then x squared is 4. But remember, we're working mod 3, and 4, mod 3 is just 1.</p>
</details>

Derek: 为了找到x的4次方，我们只需平方x的平方，所以它也等于1，再次平方，x的8次方等于1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To find x to the 4, we can just square x squared, so that also equals 1, and squaring again, x to the 8 = 1.</p>
</details>

Derek: 现在我们可以将x的平方加x的4次方加x的8次方相加，以找到方程的左侧。如果x是0，那么和等于0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we can sum up x squared + x to the 4 + x to the 8 to find the left-hand side of the equation. If x is 0, then the sum is equal to 0.</p>
</details>

Derek: 如果x是1或2，和是3。但同样，我们正在进行模3运算，所以3与0是相同的。现在，让我们计算y的平方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If x is 1 or 2, the sum is 3. But again, we're working mod 3, so 3 is the same as 0. Now, let's calculate y squared.</p>
</details>

Derek: 如果y是0，y的平方是0。如果y是1，y的平方是1。如果y是2，那么y的平方是4，但同样，4模3是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If y is 0, y squared is 0. If y is 1, y squared is 1. And if y is 2, then y squared is 4, but again, 4 mod 3 is 1.</p>
</details>

Derek: 现在，由于对于x的所有值，方程的左侧都是0，所以满足方程的y的唯一值是y等于0，但x可以是0、1或2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, since for all values of x, the left-hand side of the equation is 0, the only value of y that satisfies the equation is y = 0, but x can be 0, 1, or 2.</p>
</details>

Derek: 所以我们有三个潜在的解满足我们的模3方程，我们有0,0、1,0和2,0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have three potential solutions that satisfy our equation mod 3, we've got 0, 0, 1, 0, and 2, 0.</p>
</details>

Derek: 现在我们不应该对找到0,0作为解感到惊讶，因为x等于0和y等于0确实满足方程，但0大小的正方形并不真正算作丢番图几何问题的解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we shouldn't be surprised to find 0, 0 as a solution since x = 0 and y = 0 does satisfy the equation, but squares of 0 size don't really count as solutions to Diophantus' geometric problem.</p>
</details>

Derek: 所以让我们尝试扩展其他解中的一个。我选择1,0。这意味着x0等于1和y0等于0满足模3方程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's try to expand on one of the other solutions. I'll pick 1, 0. This means x not = 1 and y not = 0 satisfies the equation mod 3.</p>
</details>

Derek: 现在让我们尝试找到x1，我们将通过求解模9方程来做到这一点。所有高于x1的项都包含一个9的因子，所以在模9下它们都为0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let's try to find x1, and we'll do this by solving the equation mod 9. All of the terms higher than x1 have a factor of 9 in them, so they're all 0 mod 9.</p>
</details>

Derek: 所以我们剩下这个表达式。展开第一项，我们得到1加6x1加9x1的平方。但同样，由于我们正在进行模9运算，最后一部分是0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're left with this expression. Expanding out the first term, we have 1 + 6x1 + 9x1 squared. But again, since we're working mod 9, the last part is 0.</p>
</details>

Derek: 下一项只是第一项的平方。所以它等于1加12x1加36x1的平方，但36是9乘以4，所以在模9下是0，而12模9是3。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next term is just the first term squared. So that equals 1 + 12x1 + 36x1 squared, but 36 is 9 x 4, so that's 0 mod 9, and 12 mod 9 is 3.</p>
</details>

Derek: 所以我们有1加3x1。最后一项只是它的平方，所以1加6x1加9x1的平方。同样，最后一部分是0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have 1 + 3x1. The final term is just that squared, so 1 + 6x1 + 9x1 squared. Again, the last part is 0.</p>
</details>

Derek: 所以在左侧，我们有3加15x1。在右侧，我们有0加9y1的平方，它也等于0，因为它包含一个9的因子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on the left-hand side, we have 3 + 15x1. And on the right-hand side, we have 0 + 9y1 squared, which is also 0 because it contains a factor of 9.</p>
</details>

Derek: 所以3加15x1等于0。现在请记住，由于我们正在进行模9运算，右侧的0代表任何9的倍数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So 3 + 15x1 equals 0. Now remember, since we're working mod 9, the 0 on the right-hand side represents any multiple of 9.</p>
</details>

Derek: 所以在这种情况下，如果x1等于1，那么3加15等于18，它是9的倍数，所以是0。所以x1等于1是方程的一个解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this case, if x1 = 1, then 3 + 15 = 18, which is a multiple of 9, so it's 0. So x1 = 1 is a solution to the equation.</p>
</details>

Derek: 让我们通过求解模27方程来找到展开式的另一个项。同样，所有3的3次方或更高次幂的项都包含一个27的因子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's find one more term of the expansion by solving the equation mod 27. Again, all the terms with 3 raised to the power of 3 or higher contain a factor of 27.</p>
</details>

Derek: 所以它们是0，只剩下这个表达式，但我们知道x0和x1都等于1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's 0, leaving only this expression, but we know x not and x1 are equal to 1.</p>
</details>

嘉宾: 但现在，我们对y1一无所知，因为当我们平方时，任何事情都可能发生。如果我们找到了x的一个好解，它就会伴随着y的一个好解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But right now, we've learned nothing about y1 because when we square, anything can happen. If we find a good solution in x, it'll come with a good solution in y.</p>
</details>

Derek: 所以我们可以简化为这个。再次展开，我们得到16加18x2加81x的平方，但81是27乘以3，所以是0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can simplify to this. Expanding again, we get 16 + 18x2 + 81x squared, but 81 is 27 x 3, so that's 0.</p>
</details>

Derek: 下一项是第一项的平方。所以是256加576x2加324x2的平方。但324是27乘以12，所以是0。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next term is the square of the first. So 256 + 576x2 + 324x2 squared. But 324 is 27 x 12, so that's 0.</p>
</details>

Derek: 由于我们正在进行模27运算，我们可以将其简化。576比27的倍数多9，256比27的倍数多13。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And since we're working mod 27, we can simplify this down. 576 is nine more than a multiple of 27, and 256 is 13 more than a multiple of 27.</p>
</details>

Derek: 所以我们剩下13加9x2，最后一项只是它的平方。所以169加234x2加81x2的平方，它简化为7加18x2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're left with 13 + 9x2, and the last term is just that squared. So 169 + 234x2 + 81x2 squared, which reduces to 7 + 18x2.</p>
</details>

Derek: 右侧简化为0加81y的平方，它再次是0。所以我们有36加45x2等于0，在模27下与9加18x2等于0是相同的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The right-hand side reduces to 0 + 81y squared, which is, again, 0. So we have 36 + 45x2 equals 0, which mod 27 is the same as 9 + 18x2 = 0.</p>
</details>

Derek: 所以x2必须等于1，9加18是27，在模27下是0。所以我们发现展开式的前三个系数都是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So x2 must be equal to 1, 9 + 18 is 27, which mod 27 is 0. So what we've discovered is the first three coefficients in our expansion are all 1.</p>
</details>

Derek: 事实上，如果你继续使用模81、243等等，你会发现所有的系数都是1。所以解决丢番图关于正方形方程的数字实际上是一个所有数字都是1的3进数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in fact, if you kept going with modulus 81, 243, and so on, you would find that all of the coefficients are 1. So the number that solves Diophantus' equation about the squares is actually a 3-adic number where all the digits are 1s.</p>
</details>

Derek: 但我们如何理解这个呢？这个数字等于什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But how do we make sense of this? What does this number equal?</p>
</details>

嘉宾: 当然，这个数字根本没有意义，至少作为实数是没有意义的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And of course, this number makes no sense at all, at least not as a real number.</p>
</details>

Derek: 嗯，请记住，这只是书写1乘以3的0次方加1乘以3的1次方加1乘以3的2次方加1乘以3的3次方等等的另一种方式。所以每一项都只是前一项的3倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, remember that this is just another way of writing 1 x 3 to the 0 + 1 x 3 + 1 x 3 squared + 1 x 3 cubed, and so on. So each term is just 3 times the term before it.</p>
</details>

Derek: 这是一个**几何级数**（Geometric series: 每项与前一项的比值恒定的数列）。为了找到无限几何级数的和，你可以使用方程1除以1减去lambda，其中lambda是后一项与前一项的比率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a geometric series. And to find the sum of an infinite geometric series, you can use the equation 1/1 - lambda where lambda is the ratio of one term to the previous one.</p>
</details>

Derek: 所以在这种情况下，它是3。现在，我知道要使这个成立，lambda必须严格小于1，因为否则各项会不断增长，和不会收敛，它只会发散到无穷大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this case, it's 3. Now, I know for this to work, lambda is meant to be strictly less than 1 because otherwise, the terms keep growing and the sum doesn't converge, it just diverges to infinity.</p>
</details>

Derek: 我保证我会回到这个问题，但现在，我们只假设lambda等于3，看看会发生什么。那么我们有1除以1减3，即负1/2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I promise I'll come back to this, but for now, let's just say that lambda = 3 and see what happens. Well, then we have 1/1 - 3, which is -1/2.</p>
</details>

Derek: 所以如果我们相信这个公式，那么x等于负1/2应该是我们原始方程的一个解。如果我们代入，我们得到x的平方是1/4，x的4次方是1/16，x的8次方是1/256。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we believe this formula, then x = -1/2 should be a solution to our original equation. If we sub it in, we get x squared is 1/4, x to the 4 is 1/16, and x to the 8 is 1/256.</p>
</details>

Derek: 让我们将所有这些都放在一个共同的分母上。所以1/4变成64/256，1/16是16/256。如果我们把它们全部加起来，我们得到81/256，这确实是一个边长为9/16的正方形的面积。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's put all of these over a common denominator. So a quarter becomes 64/256, now 16th is 16/256. And if we add them all together, we get 81/256, which is indeed the area of a square with sides of length 9/16ths.</p>
</details>

Derek: 我们找到了丢番图正方形和问题的一个有理数解。第一个正方形的边长是1/2，第二个是1/4，第三个是1/16，所有三个正方形加起来形成一个边长为9/16的正方形。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have found a rational solution to Diophantus' sum of squares problem. The first square has sides of length 1/2, the second has sides of length 1/4, the third has sides of length 1/16, and all three squares together make a square with sides of length 9/16ths.</p>
</details>

Derek: 为了找到这个解，我们使用了看似荒谬的新数字——p进数，小数点左侧有无限位数字，这意味着3的递增幂的无限展开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To find this solution, we used new seemingly absurd numbers, p-adics, infinite digits going off to the left of the decimal point, implying an infinite expansion of increasing powers of 3.</p>
</details>

Derek: 然后我们使用几何级数公式发现，在3进数表示法中，无限串的1实际上是负1/2。这之所以可行，即使每项与前一项的比率是3。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we used the geometric series formula to find that an infinite string of 1s in 3-adic notation is actually -1/2. This works, even though the ratio of each term, the previous 1 is 3.</p>
</details>

Derek: 所以从常识来看，这个级数不应该收敛，它应该发散到无穷大。那么真正的问题是这为什么会起作用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So by common sense, the series shouldn't have converged, it should have blown up to infinity. So the real question is how did this work?</p>
</details>

### p进数的几何学与“大小”概念的颠覆

Derek: 嗯，关键思想是p进数的几何结构与实数的几何结构完全不同。事实上，它们根本不存在于数轴上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the key idea is that the geometry of the p-adics is totally different from that of the real numbers. In fact, they don't exist on a number line at all.</p>
</details>

Derek: 一种可视化它们的方法是使用类似生长树的东西。对于我们一直在使用的3进整数，3个基圆柱体代表个位数字，或者x0是0、1或2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way to visualize them is with something like a growing tree. For the 3-adic integers we've been working with, 3 base cylinders represent the unit's digit or x not being 0, 1, or 2.</p>
</details>

Derek: 每个圆柱体上方是一组更短的三个圆柱体，对应于3的位或x1。我们以这种方式永远继续下去，形成一棵无限三分支的树。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Above each cylinder is a trio of shorter cylinders corresponding to the 3s digit or x1. And we continue in this way forever making an infinite triply branching tree.</p>
</details>

Derek: 从上方俯视，它看起来像一个**谢尔宾斯基垫片**（Sierpinski gasket: 一种分形几何图形，由不断移除三角形中心部分而形成）。每个3进数在这里都表示为一堆无限的圆柱体，它们向上变得越来越短和越来越窄。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Looking down from above, it looks like a Sierpinski gasket. Each 3-adic number is represented here as a stack of infinite cylinders that get shorter and narrower as they go up.</p>
</details>

Derek: 这实际上反映了每个连续圆柱体对3进数值的相对贡献。与你预期相反，乘以3的更高次幂的系数实际上进行了越来越精细的调整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this actually reflects the relative contributions each successive cylinder makes to the value of the 3-adic number. Contrary to what you'd expect, the coefficients multiplying higher powers of 3 actually make finer and finer adjustments.</p>
</details>

Derek: 所以当我们计算连续系数来解决丢番图的正方形问题时，我们实际上是在越来越精确地逼近解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we calculated successive coefficients to solve Diophantus' squares problem, we were actually zooming in more and more accurately on the solution.</p>
</details>

嘉宾: 这就是慢慢放大一个数值的感觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- This is the feeling of slowly zooming in on the value of a number.</p>
</details>

Derek: 通常，我们认为一个数字的大小至少近似地由它小数点左侧有多少位数字决定。但在这里，所有数字都有无限多位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Normally, we think of the size of a number as being determined approximately at least by how many digits it has to the left of the decimal point. But here, all the numbers have infinitely many digits.</p>
</details>

Derek: 所以人们意识到，要确定两个数字之间的距离，我们需要看它们不一致的塔的最低层。如果两个数字在个位不同，我们说它们的分离是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So people realize that to determine the distance between two numbers, we need to look at the lowest level of the tower where they disagree. If two numbers differ in the unit's place, we say their separation is 1.</p>
</details>

Derek: 但如果它们在27的位不同，我们说它们的差异不是27，而是1/27。在p进数的世界里，我们习惯认为大的东西是小的，反之亦然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if they differ in the 27th's place, we say they differ not by 27, but by 1/27. In the world of p-adics, what we're used to thinking of as big is small, and vice versa.</p>
</details>

嘉宾: 如果我们有一个数字，比如说s1，它将是像2乘以1加1乘以3加0乘以3的平方加1乘以3的立方加2乘以3的4次方等等的序列，它将接近另一个具有类似展开的数字，除了在，比如说，3的3次方位置，我改变了一个数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- If we have a number, let's say, s1, which will be some sequence like 2 x 1 + 1 x 3 + 0 x 3 squared + 1 x 3 cubed + 2 x 3 to the 4th, and so on we'll be close to another number with a similar expansion except at the, let's say, 3 to the third place, I change a digit,</p>
</details>

嘉宾: 然后之后我做什么都无关紧要。这些数字可以完全相同或完全不同。这两个数字会说它们的距离，它们的3进距离大约是它们出错的第一个位置的大小。所以这将是3的负3次方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then doesn't matter what I do after that. The digits can be all the same or all different. These two numbers will say that their distance, their 3-adic distance is roughly of size, the first place where they go wrong. So this'll be 3 to the -3.</p>
</details>

嘉宾: 我是否应该把3看作是，它们越大，它们相乘的数字就越小，或者诸如此类？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Am I supposed to think of the 3s as kind of like, the bigger they are, the smaller the numbers that they're multiplying, or something?</p>
</details>

Derek: 完全正确。在3进数中，我们希望数字在它们与3的较大幂一致时是接近的，所以如果它们与10个3进位一致，那么这个距离就像3的负10次方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Exactly. In the 3-adics, we want numbers to be close when they agree up to large powers of 3, so that if they agree up to 10 3-adic places, then this has a distance like 3 to the -10.</p>
</details>

嘉宾: 结果是，如果你做了这个疯狂的事情，交换我们认为的大和小，那么所有其他的数学定律都以通常的方式运作。这就是为什么几何和能够成立，即使我们认为它会发散到无穷大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And it turns out that if you do this crazy thing, swap what we think of as big and small, then all the other laws of mathematics work out in the usual way. This is why the geometric sum worked out, even though we thought it would blow up to infinity.</p>
</details>

嘉宾: 你必须敞开心扉接受其他大小的概念，当你这样做时，这个全新的世界就会出现，它是一个非常有用的世界，就像负数变得有用一样，就像负数的平方根变得有用一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You have to open your mind to other notions of size, and when you do, this whole other world appears, and it's a very useful world, just like negative numbers became useful, just like square roots of negative numbers became useful.</p>
</details>

嘉宾: 这感觉比负数或负数的平方根还要疯狂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- This feels even crazier than negative numbers or square roots of negatives.</p>
</details>

Derek: 只是因为不那么熟悉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Just 'cause it's less familiar.</p>
</details>

Derek: 你可以证明这种大小的概念符合你对**绝对值**（Absolute value: 一个数的大小，不考虑其符号）的要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can prove this notion of size fits the criteria you would want for an absolute value.</p>
</details>

嘉宾: 我们希望绝对值是什么？它应该是非负的。所以任何数字x的绝对值都应该是非负的，并且当且仅当该数字本身为0时，绝对值才为0。这被称为**正定性**（Positive definite: 在数学中，指一个函数或矩阵在特定条件下为正值）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What do we want an absolute value to be? It should be non-negative. So the absolute value of any number, x, should be non-negative, and the absolute value should be 0 if and only if that number is itself 0. So that's called positive definite.</p>
</details>

嘉宾: 所以它应该是**乘法性**（Multiplicativity: 指一个函数满足f(xy) = f(x)f(y)的性质）。如果我取x乘以y并将它们相乘，那应该与x的绝对值乘以y的绝对值相同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it should be multiplicative. If I take x times y and I multiply those two, that should be the same as the absolute value of x times the absolute value of y.</p>
</details>

嘉宾: 我还想要一个属性，那就是如果你将x和y相加，那应该与x的绝对值加y的绝对值相同吗？不。但它应该至多是它们的和，对吧？这就是**三角不等式**（Triangle inequality: 在几何学中，指任意两边之和大于第三边）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I want one more property, which is that if you add x and y, should that be the same as the absolute value of x plus the absolute value of Y? No. But it should be, at most, the sum, right? This is the triangle inequality.</p>
</details>

嘉宾: 所以我们有乘法性、正定性和三角不等式。你只给我这三个非常抽象的东西，我就可以证明你的函数实际上是通常的绝对值，或者是这些p进绝对值之一，或者是给0赋0，给其他一切赋1的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we have multiplicativity, positive definites, and the triangle inequality. You give me only these three very abstract things and I can prove that your function is, in fact, the usual absolute value or one of these p-adic absolute values or the thing that gives 0 to 0 and 1 to everything else.</p>
</details>

嘉宾: 所以那是微不足道的绝对值。这些是你可以在有理数上玩的唯一游戏，它们给你我们想要的绝对值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the trivial absolute value. These are the only games you can play on the rational numbers that give you absolute values that behave the way we want them to.</p>
</details>

Derek: 这种几何结构使得p进数与实数相比更加不连贯。这实际上对于找到方程的有理数解很有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This geometry makes the p-adics much more disconnected when compared to the real numbers. And this is actually useful for finding rational solutions to an equation.</p>
</details>

Derek: 在有理数解的邻域中，p进数解要少得多。如果我们在实数中尝试相同的策略，即逐位解决丢番图的正方形问题，那注定会失败，因为实数解太多了，它们无处不在。它们会碍事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are many fewer p-adic solutions in a neighborhood of a rational solution. If we tried the same strategy of solving Diophantus' squares problem digit by digit in the real numbers, it would be doomed to fail because there are simply too many real solutions all over the place. They get in the way.</p>
</details>

Derek: 在1995年，**安德鲁·怀尔斯**（Andrew Wiles: 英国数学家，证明费马大定理）的一篇论文和怀尔斯与**理查德·泰勒**（Richard Taylor: 英国数学家，与怀尔斯共同证明费马大定理）的另一篇论文中，他们最终证明了费马大定理，但这个证明不可能与费马在页边空白处暗示的那个证明相同，因为它大量使用了p进数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In a groundbreaking pair of papers in 1995, one by Andrew Wiles, and another by Wiles and Richard Taylor, they finally proved Fermat's last theorem, but the proof could not possibly have been the one Fermat alluded to in the margin because it made heavy use of p-adic numbers.</p>
</details>

嘉宾: 怀尔斯对费马大定理的证明使用了素数3，然后他在某个时候被素数3卡住了，他不得不切换到素数5。这实际上被称为“三五技巧”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Wiles' proof of Fermat's last theorem used the prime 3, and then at some point, he got stuck with the prime 3, and he had to switch to the prime 5. And this is literally called the three, five trick.</p>
</details>

嘉宾: 有些东西在素数3下大部分时间都有效，但有时无效，当它在素数3下无效时，它在素数5下却有效。每个素数都给你一个完全不相关的数系，就像这些数系与实数不相关一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There was something that worked for the prime 3 most of the time, but sometimes it didn't work, and when it didn't work for the prime 3, it did work for the prime 5. Each prime gives you a completely unrelated number system, just like these number systems are unrelated to the real numbers.</p>
</details>

Derek: 我喜欢日本数学家**加藤和也**（Kazuya Kato: 日本数学家，以其在数论和代数几何方面的工作而闻名）的一句名言。他说：“实数就像太阳，p进数就像星星。白天太阳遮蔽了星星，而人类晚上睡着了看不到星星，即使它们同样重要。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a great quote I like by a Japanese mathematician, Kazuya Kato. He says, "Real numbers are like the sun and the p-adics are like the stars. The sun blocks out the stars during the day, and humans are asleep at night and don't see the stars, even though they are just as important."</p>
</details>

Derek: 嗯，我希望这个视频至少向你展示了那些星星的一瞥。p进数的发现很好地提醒我们，在数学中，更不用说科学、计算机科学以及几乎所有技术领域，我们还有多少东西有待发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I hope this video has revealed at least a glimpse of those stars to you. The discovery of p-adic numbers is a great reminder of just how much we have yet to discover in mathematics, not to mention science, computer science, and just about every technical field.</p>
</details>

Derek: 它们激励我们寻找新的联系，甚至自己做出发现。如果你被丢番图、费马和亨塞尔的故事所启发，并且正在寻找更多类似的内容，那么请查看本视频赞助商Brilliant.org的数学历史课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They inspire us to find new connections and even make discoveries ourselves. If you were inspired by the stories of Diophantus, Fermat, and Hensel, and you're looking for more content like this, look no further than the math history course from this video sponsor, brilliant.org</p>
</details>

Derek: Brilliant的课程向你介绍了数学中一些最引人入胜的发现背后的思想家，同时让你更深入地理解他们开创的概念，所有这些都使我们的现代技术成为可能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant's course introduces you to the minds behind some of the most fascinating discoveries in mathematics, while giving you a deeper understanding of the concepts they pioneered, all of which enable our modern technologies.</p>
</details>

Derek: Brilliant实际上有数千个小课程，涵盖从数学和科学到数据编程和计算机科学的所有内容，除了激励你书写自己的发现故事之外，Brilliant最令人惊叹的地方在于你可以亲自动手实践创新的基石。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant actually has thousands of bite-sized lessons on everything from math and science to data programming and computer science, and beyond inspiring you to write your own story of discovery, the most amazing thing about Brilliant is that you get hands-on with the building blocks of innovation.</p>
</details>

Derek: Brilliant最新的课程《**用代码思考**》（Thinking in Code: Brilliant.org上的一门编程入门课程）就是一个完美的例子，它专为初学者设计。它包含了你开始像程序员一样思考所需的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant's latest course, Thinking in Code, is a perfect example designed with beginners in mind. It's got everything you need to start thinking like a programmer.</p>
</details>

Derek: 你可以免费试用Brilliant提供的所有内容30天。只需访问brilliant.org/veritasium。对于本视频的观众，Brilliant为前200名注册者提供年度高级订阅20%的折扣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can try out everything Brilliant has to offer free for 30 days. Just go to brilliant.org/veritasium And for viewers of this video, Brilliant are offering 20% off an annual premium subscription for the first 200 people to sign up.</p>
</details>

Derek: 使用相同的链接，我会在描述中提供。所以我要感谢Brilliant赞助Veritasium，也要感谢你的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Use that same link, which I will put down in the description. So I wanna thank Brilliant for sponsoring Veritasium, and I wanna thank you for watching.</p>
</details>