---
area: tech-insights
category: technology
companies_orgs:
- National Security Administration
- US Congress
- National Institute of Standards and Technology
- IBM
- Microsoft
- Alphabet X
date: '2023-03-20'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Riverst
- Shamir
- Adelman
- Peter Shor
- Don Coppersmith
products_models:
- RSA
- General Number Field Sieve
- Brilliant
project:
- ai-impact-analysis
- geopolitics-watch
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=-UrdExQW0cs
speaker: veritasium
status: evergreen
summary: 本文深入探讨了量子计算机的强大之处及其对当前加密技术的潜在威胁，特别是“先存储后解密”（SNDL）策略。文章详细解释了量子计算如何通过量子傅里里叶变换加速大数因子分解，从而破解RSA等公钥加密算法。同时，介绍了后量子密码学的最新进展，特别是基于格（Lattice-based）的加密算法，以及全球为应对量子威胁所做的努力，强调了持续创新在保护数字安全中的关键作用。
tags:
- canada
- data
- investment
- quantum-computing
- technology
title: 量子计算机的颠覆性力量与后量子加密的应对之道
---

### 量子计算的威胁：先存储后解密

目前，一些国家和个人行为者正在截获并存储大量加密数据，例如密码、银行详细信息和社会安全号码。然而，他们现在还无法打开这些文件。那么，他们为什么要这样做呢？这是因为他们相信在未来10到20年内，他们将能够使用量子计算机在几分钟内破解这些加密。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right now some nation states and individual actors are intercepting and storing lots of encrypted data like passwords, bank details, and social security numbers. But they can't open these files. So why are they doing it? Well, because they believe that within the next 10 to 20 years, they will have access to a quantum computer that can break the encryption in minutes.</p>
</details>

这一程序被称为**先存储后解密**（SNDL: Store Now, Decrypt Later），其原理在于今天的信息在十年后仍然具有价值。这包括工业和制药研究，以及绝密政府情报，所有人都意识到了这一威胁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This procedure is known as Store Now, Decrypt Later or SNDL. And it works because there is information around today that will still be valuable in a decade. Things like industrial and pharmaceutical research and top secret government intelligence, and everyone is aware of this threat.</p>
</details>

美国国家安全局（National Security Administration）表示，如果建造出足够大的量子计算机，它将能够破坏所有广泛部署的公钥算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The National Security Administration says that a sufficiently large quantum computer, if built would be capable of undermining all widely deployed public key algorithms.</p>
</details>

在五到十年的时间框架内，量子计算将打破我们今天所知的加密技术。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know in a five to 10 year timeframe, quantum computing will break encryption as we know it today.</p>
</details>

尽管功能强大的量子计算机仍需数年才能问世，但由于**先存储后解密**（SNDL）的威胁，它们已经构成了现实威胁。正因为如此，美国国会刚刚通过立法，要求所有机构立即开始向无法被量子计算机破解的新密码学方法过渡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even though sufficiently powerful quantum computers are still years away, they're already a threat because of Store Now Decrypt Later, which is why the US Congress just passed legislation mandating all agencies start transitioning right now to new methods of cryptography that can't be broken by quantum computers.</p>
</details>

我们当前的加密方案在过去40多年里一直非常成功。直到20世纪70年代，如果你想与某人交换私人信息，你首先必须亲自见面并共享一个秘密密钥。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, our current encryption schemes have been remarkably successful working effectively for over 40 years. Up until the 1970s, if you wanted to exchange private information with someone, you would first have to meet up in person and share a secret key.</p>
</details>

这个相同的密钥将用于加密和解密消息，因此它被称为**对称密钥算法**（Symmetric Key Algorithm: 加密和解密使用相同密钥的算法）。只要没有其他人拿到密钥，你的消息就是安全的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This same key would be used to encrypt and decrypt messages. So it's known as a symmetric key algorithm. As long as no one else gets their hands on the key, your messages are safe.</p>
</details>

但是，如果你想向从未见过的人发送信息，并且很难安排面对面会议，该怎么办？你不能通过不安全的渠道（如电话线或邮件）共享密钥，因为它可能会被截获。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now what if you wanna send information to someone you've never met, and it's too hard to arrange an in-person meeting. You can't share a key over an unsecured channel like a phone line or the mail, because it could be intercepted.</p>
</details>

### 传统加密的基石：RSA算法

正是在这种背景下，1977年，三位科学家Riverst、Shamir和Adelman取得了加密技术上的突破。今天，它以他们的首字母缩写**RSA**（Rivest-Shamir-Adleman: 一种广泛使用的公钥加密算法）而闻名，其工作原理大致如下。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what in 1977, led three scientists, Riverst, Shamir, and Adelman to come up with an encryption breakthrough. Today it's known by their initials RSA, and it works something like this.</p>
</details>

每个人都有两个非常大的质数，这些质数是他们自己独有的并保密。他们将这些数字相乘得到一个更大的数字，并将其公开供所有人查看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every person has two really big prime numbers, all their own which they keep secret. They multiply these numbers together to get an even bigger number, which they make public for everyone to see.</p>
</details>

现在，如果我想向某人发送私人消息，我使用他们的大公开数来混淆我的消息。我以一种不可能在不知道构成该数字的两个质因数的情况下解密的方式混淆它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if I wanna send someone a private message, I use their big public number to garble my message. And I garble it in such a way that it is impossible to ungarble without knowing the two prime factors that made that number.</p>
</details>

这是一个**非对称密钥系统**（Asymmetric Key System: 加密和解密使用不同密钥的系统），因为加密和解密消息使用不同的密钥。因此，我的预期接收者很容易解码，但其他人则不可能，除非他们能分解那个大的公开数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is an asymmetric key system, since different keys are used to encrypt and decrypt the message. So it's easy for my intended recipient to decode, but impossible for everyone else, unless they can factor that large public number.</p>
</details>

现在，有人可能会尝试使用超级计算机和目前已知最好的因子分解算法——**通用数域筛**（General Number Field Sieve: 目前已知最有效的整数因子分解算法）来分解它。但现代密码学使用的质数大约有313位长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, someone could try to factor it, using a supercomputer, in the best known factoring algorithm the General Number Field Sieve, but modern cryptography uses prime numbers that are around 313 digits long.</p>
</details>

分解两个如此大的质数的乘积，即使使用超级计算机，也需要大约1600万年，但在量子计算机上则不然。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Factoring a product of two primes this big, even with a supercomputer, would take around 16 million years, but not on a quantum computer.</p>
</details>

### 量子计算机的工作原理：叠加与并行计算

在普通计算机中，一个**比特**（Bit: 经典计算机中的信息基本单位，只能是0或1）一次只能处于一种状态，要么是零，要么是一。因此，如果你有两个比特，它们可以处于四种可能状态之一：00、01、10或11。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See, in normal computers, a bit can only be in one state at a time, either a zero or a one. So if you had two bits, they could be in one of four possible states, 00, 01, 10 or 11.</p>
</details>

假设这些状态中的每一个都代表一个数字：0、1、2或3。如果我们想进行计算，例如将七提高到这些数字之一的幂，我们一次只能对一个状态进行计算，在这种情况下是七的平方，所以我们得到答案49。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say each of these states represents a number, 0, 1, 2, or 3. If we want to do a calculation, for example, raising seven to the power of one of these numbers, we can only do it for one state at a time, in this case seven squared and so we get the answer 49.</p>
</details>

量子计算机由**量子比特**（Qubit: 量子计算机中的信息基本单位，可同时处于0和1的叠加态）组成，它们也有两种状态：零或一。但与经典比特不同，一个量子比特不必一次只处于一种状态。它可以处于这些状态的任意组合中，如果你愿意，可以称之为零和一的**叠加态**（Superposition: 量子力学现象，量子比特可同时处于多种状态）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Quantum computers consist of qubits which also have two states, zero or one. But unlike a classical bit, a qubit, doesn't have to be in just one state at a time. It can be in an arbitrary combination of those states, a superposition if you will, of zero and one.</p>
</details>

因此，如果你有两个量子比特，它们可以同时以0、1、2和3的叠加态存在。现在，当我们重复相同的计算时，它实际上会同时对所有这些数字执行计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you have two qubits, they can exist simultaneously in a superposition of 0, 1, 2, and 3. Now, when we repeat the same calculation, it will actually perform the calculation for all of those numbers at the same time.</p>
</details>

我们得到的是不同答案的叠加态：1、7、49和343。如果我们再增加一个量子比特，可能的态的数量就会翻倍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we're left with is a super position of the different answers. 1, 7, 49 and 343. If we add another qubit, we double the number of possible states.</p>
</details>

因此，用三个量子比特，我们可以表示八种状态，从而一次执行八次计算。将这个数字增加到仅仅20个量子比特，你就可以表示超过一百万种不同的状态，这意味着你可以同时计算超过一百万个不同的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So with three qubits, we can represent eight states, and thus perform eight calculations all at once. Increase that number to just 20 qubits, and you can already represent over a million different states, meaning you can simultaneously compute over a million different answers.</p>
</details>

使用300个量子比特，你可以表示比可观测宇宙中粒子数量更多的状态。这听起来非常强大，也确实如此，但有一个非常大的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With 300 qubits, you can represent more states than there are particles in the observable universe. This sounds incredibly powerful and it is, but there is one very big catch.</p>
</details>

### 量子算法的挑战与突破：Shor算法

计算的所有答案都嵌入在叠加态中，但你不能简单地读取这个叠加态。当你进行测量时，你只能从叠加态中随机获得一个单一值，所有其他信息都会丢失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of the answers to the computation are embedded in a superposition of states, but you can't simply read out this superposition. When you make a measurement, you only get a single value from the superposition basically at random, and all the other information is lost.</p>
</details>

因此，为了利用量子计算机的力量，你需要一种巧妙的方法将叠加态转换为只包含你想要信息的态。这是一项极其困难的任务，这就是为什么对于大多数应用来说，量子计算机是无用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in order to harness the power of a quantum computer, you need a smart way to convert a superposition of states into one that contains only the information you want. This is an incredibly difficult task, which is why for most applications, quantum computers are useless.</p>
</details>

到目前为止，我们只识别出少数几个可以实际做到这一点的难题，但幸运的是，这些正是构成我们今天使用的几乎所有公钥密码学基础的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So far, we've only identified a few problems, where we can actually do this, but as luck would have it, these are precisely the problems that form the foundation of nearly all the public key cryptography we use today.</p>
</details>

1994年，Peter Shor和Don Coppersmith发现了如何进行**量子傅里叶变换**（Quantum Fourier Transform: 量子计算中的一种关键算法，用于提取周期性信息）。它的工作原理就像普通的傅里叶变换一样，将其应用于某个周期性信号，它会返回该信号中的频率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1994, Peter Shor and Don Coppersmith figured out how to take a quantum Fourier transform. It works just like a normal Fourier transform, apply it to some periodic signal, and it returns the frequencies that are in that signal.</p>
</details>

现在这可能看起来不那么有趣，但请考虑这一点。如果我们有一个周期性的叠加态，也就是说叠加态中的项以某种规律的量分离，那么我们可以应用量子傅里叶变换，剩下的状态将包含信号的频率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this may not seem particularly interesting but consider this. If we have a superposition of states that is periodic, that is the terms in the superposition are separated, by some regular amount, well we can apply the quantum Fourier transform and will be left with states that contain the frequency of the signal.</p>
</details>

所以我们可以测量这个。量子傅里叶变换允许我们从周期性叠加态中提取频率信息，这将非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this we can measure. The quantum Fourier transform, allows us to extract frequency information from a periodic superposition, and that is gonna come in handy.</p>
</details>

### 量子计算机如何分解大数：周期性与傅里叶变换

那么，量子计算机如何比传统计算机更快地分解两个质数的乘积呢？我想先通过一个不需要量子计算机的简单例子来解释，然后我将展示量子计算机如何能在短时间内执行这种方法，即使对于一个非常大的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how does a quantum computer factor the product of two primes much faster than a conventional computer? I want to explain this by first walking through a simple example with no quantum computer required, and then I'll show how a quantum computer could execute this method even for a very large number in a short period of time.</p>
</details>

假设我们有一个数字N，它是两个质数p和q的乘积。为了本例，我们将N设为77。现在我敢打赌你能猜出质因数，但我们暂时假装不知道它们，因为对于非常大的质数乘积，我们确实不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's say we have a number N, which is the product of two primes, p and q. For the sake of this example, let's set N equal to 77. Now I bet you can guess the prime factors, but let's pretend for the moment that we don't know them, because with a product of really big primes, we wouldn't.</p>
</details>

现在我想利用一个感觉像魔术般的数字事实。选择一个与N没有任何共同因数的数字g。如果你一遍又一遍地将g自乘，你最终总是会达到N的倍数加一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I want to use a fact about numbers that feels like magic. Pick a number g that doesn't share any factors with N. If you multiply g by itself over and over and over, you will always eventually, reach a multiple of N plus one.</p>
</details>

换句话说，你总能找到某个指数r，使得g的r次方是N的倍数加一。让我们看看这是如何工作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In other words, you can always find some exponent r, such that g to the power of r, is a multiple of N plus one. Let's see how this works.</p>
</details>

选择任何小于77的数字。我将选择数字8。这个数字与77没有共同因数。如果你用大质数做这个，你偶然选择一个与N有共同因数的数字的可能性也极低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pick any number that is smaller than 77. I'll pick the number eight. This number doesn't share factors with 77. And if you were doing this with big primes, it would also be extremely unlikely that you just happen to pick a number that shares factors with N.</p>
</details>

现在将8自乘一次、两次、三次、四次等等，将8提高到越来越高的幂，然后将这些数字中的每一个除以77。我们真正不感兴趣的是77能整除这个数字多少次，而只关心余数，即剩下什么，因为在某个点上，77应该能整除这些数字中的一个，余数恰好为一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now multiply eight by itself once, twice, three times four times, and so on, raising eight to ever higher powers and then divide each of these numbers by 77. We're not really interested in how many times 77 goes into the number, just the remainder, what's left over, because at some point, 77 should divide one of these numbers with a remainder of exactly one.</p>
</details>

所以8除以77是零，余数是8；64除以77是零，余数是64；512除以77是六，余数是50。当我们继续下去，我们得到余数15、43、36、57、71、29，最后是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So eight divided by 77 is zero with a remainder of 8, 64 divided by 77 is zero remainder 64. 512 divided by 77 is six remainder 50. And as we keep going, we get remainders of 15, 43, 36, 57, 71, 29, and finally one.</p>
</details>

所以我们得到了，8的10次方比77的倍数多一。因此我们找到了满足这个方程的指数R。但是这如何帮助我们找到N的因数呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there we have it, eight to the power of 10 is one more than a multiple of 77. So we've found the exponent R that satisfies this equation. But how does this help find the factors of N?</p>
</details>

我们将方程重新排列，将1移到左侧，然后我们可以将其分成两项，如下所示。现在，只要r是偶数，我们就有两个整数相乘等于N的倍数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we rearrange the equation to bring one over to the left hand side, and then we can split it into two terms like so. And now as long as r is even, we have one integer times another integer is equal to a multiple of N.</p>
</details>

这看起来与p乘以q等于N非常相似。我的意思是，既然我们知道p和q在这个方程的右侧，它们也必须在左侧，只是乘以一些额外的因数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This looks remarkably similar to p times q equals N. I mean since we know that p and q are on the right hand side of this equation, they must also be on the left hand side just multiplied by some additional factors.</p>
</details>

所以，我们可以这样理解我们所做的事情：我们对其中一个因数G做了一个糟糕的猜测，通过找到指数r，我们将其变成了两个更好的猜测，它们很可能与N有共同因数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So one way to think about what we've done is we've taken a bad guess for one of the factors G, and by finding the exponent r, we've turned it into two much better guesses that probably do share factors with N.</p>
</details>

由于r是10，左侧的两项是8的5次方加一（32,769）和8的5次方减一（32,767）。这两个数字可能与N有共同因数。那么我们如何找到它们呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since r was 10, the two terms on the left hand side are eight to the power of five plus one, 32,769 and eight to the power of five minus one, 32,767. These two numbers probably share factors with N. So how do we find them?</p>
</details>

我们使用**欧几里得算法**（Euclid's Algorithm: 一种用于计算两个整数最大公约数的有效算法）。如果你想找到两个数字的最大公约数，比如32,769和77，用较大的数字除以较小的数字并记录余数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We use Euclid's algorithm. If you wanna find the greatest common divisor of two numbers, say 32,769 and 77, divide the bigger number by the smaller one and record the remainder.</p>
</details>

在本例中，32,769除以77得到余数44。然后将数字向左移动一位并重复。所以现在我们用77除以44，得到余数33。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, 32,769 divided by 77 gives a remainder of 44. Then shift the numbers one position left and repeat. So now we divide 77 by 44 and we get a remainder of 33.</p>
</details>

再次重复这个过程。44除以33得到余数11，再次33除以11等于三，余数零。当余数为零时，除数就是你开始的两个数字的最大公因数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Repeat the process again. 44 divided by 33 gives a remainder of 11 and again 33 divided by 11 equals three remainder zero. When the remainder is zero, the divisor is the greatest common factor between the two numbers you started with.</p>
</details>

在本例中，它是11，确实是77和32,769的一个因数。你可以用另一个数字重复相同的过程，或者直接用77除以11得到7，这是它的另一个质因数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, it's 11, which is indeed a factor of 77 and 32,769. You could do the same procedure with the other number or just divide 77 by 11 to get seven, its other prime factor.</p>
</details>

所以总结一下，如果你想找到数字N的质因数p和q，首先，做一个糟糕的猜测g；其次，找出你需要将g自乘多少次r才能达到N的倍数加一；第三，使用该指数计算两个可能与N有共同因数的新数字；最后，使用欧几里得算法找到这些数字与N之间的共同因数，这应该会给你p和q。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to recap, if you wanna find the prime factors p and q of a number N, first, make a bad guess, g, second, find out how many times r you have to multiply g by itself to reach one more than a multiple of N. Third, use that exponent to calculate two new numbers that probably do share factors with N. And finally use Euclid's algorithm to find the shared factors between those numbers and N, which should give you p and q.</p>
</details>

现在，你不需要量子计算机来运行这些步骤中的任何一个，但在经典计算机上，这种方法不会比其他方法更快。量子计算机加速的关键过程是第二步，即找到将G提高到等于N的倍数加一的指数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, you don't need a quantum computer to run any of these steps, but on a classical computer, this method wouldn't be any faster than other methods. The key process that a quantum computer speeds up is step two, finding the exponent you raise G2 to equal one more than a multiple of N.</p>
</details>

为了理解为什么，让我们回到我们的例子，其中8的10次方比77的倍数多一。如果我们继续超过8的10次方，到8的11次方、8的12次方等等，看看余数会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To see why, let's go back to our example, where eight to the power of 10 is one more than a multiple of 77. Watch what happens to the remainders if we keep going past eight to the power of 10, to 8 to the 11, eight to the 12, and so on.</p>
</details>

我们得到余数8、64、50、15、43、36、57、71、29，然后再次是1。余数是循环的，并且会一直循环下去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, we get remainders of 8, 64, 50, 15, 43, 36, 57, 71, 29, and again one. The remainders cycle and they will just keep cycling.</p>
</details>

请注意，产生余数1的指数是20，这比第一次产生余数1的指数多10。所以我们知道8的30次方、8的40次方，以及8的任何能被10整除的幂，都将比77的倍数多一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Notice how the exponent that yields a remainder of one is 20, which is 10 more than the first exponent that yielded a remainder of one. So we know that eight to the 30 and eight to the 40, 8 raised to any power divisible by 10 will also be one more than a multiple of 77.</p>
</details>

同样值得注意的是，如果你选择任何一个余数，比如15，下次你找到相同的余数时，指数将增加10。所以你可以通过查看任何余数的间距来找到使我们达到N的倍数加一的指数R，而不仅仅是1。请记住这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's also worth noting that if you pick any remainder say 15, the next time you find that same remainder, the exponent will have increased by 10. So you can find the exponent R that gets us to one more than a multiple of n, by looking at the spacing of any remainder, not just one. Remember that.</p>
</details>

这里我用对数刻度绘制了余数，这样你就可以看到它们是周期性的，周期为10。如果我做了不同的猜测，比如我选择了G等于15而不是8，那么周期会不同，余数也会不同，但总会有一个余数是1。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here I'm plotting out the remainders on a log scale so you can see they are periodic with a period of 10. If I had made a different guess, say I had picked G equals 15 instead of eight, well then the period would be different and the remainders would be different but there would always be a remainder of one.</p>
</details>

为什么会这样呢？既然你现在可以看到这是一个重复的模式，我们可以回到开头，任何数的零次方都是一。所以那实际上是第一个余数。因此，当循环再次开始时，它也必须出现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Why is this? Well, now that you can see this is a repeating pattern, we can go back to the beginning and any number raised to the power of zero is one. So that is actually the first remainder. So it must also appear when the cycle starts again.</p>
</details>

现在我们准备好使用量子计算机来分解任意大的两个质数的乘积。首先，我们将量子比特分成两组。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we are ready to use a quantum computer to factor any large product of two primes. First we split up the qubits into two sets.</p>
</details>

第一组我们准备成0、1、2、3、4、5、6、7、8、9一直到10的1234次方的叠加态。是的，这是一个巨大的叠加态，但如果我们有完美的量子比特，它只需要大约4100个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first set we prepare in a superposition of zero and one and two and three and four and five and six and seven and eight and nine, all the way up to 10 to the power of 1,234. Yeah, this is a huge superposition, but if we had perfect qubits, it would require only around 4,100.</p>
</details>

另一组包含类似数量的量子比特，目前都保持在零态。现在我们做出我们的猜测G，它很可能与N没有共同因数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other set contains a similar number of qubits all left in the zero state for now. Now we make our guess G, which most likely doesn't share factors with N.</p>
</details>

我们将G提高到第一组量子比特的幂，然后除以N，并将余数存储在第二组量子比特中，同时保持第一组量子比特不变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We raise G to the power of the first set of qubits and then we divide by N and store the remainder in the second set of qubits leaving the first set of qubits as it was.</p>
</details>

现在我们有了一个叠加态，其中包含我们开始时的所有数字，以及将G提高到这些数字的幂并除以N后的余数。通过这个操作，我们已经纠缠了我们的两组量子比特，但我们不能仅仅测量这个叠加态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we have a superposition of all the numbers we started with and the remainder of raising G to the power of those numbers divided by N. And through this operation, we have entangled our two sets of qubits, but we can't just measure this superposition.</p>
</details>

如果那样做，我们将得到一个随机值，一无所获。但我们可以使用一个技巧。如果我们不测量整个叠加态，而只测量余数部分，我们将获得一些随机余数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we did, we would get a random value and learn nothing. But there is a trick we can use. If we don't measure the entire superposition, but only the remainder part, we will obtain some random remainder.</p>
</details>

但这个余数不会只出现一次。它会多次出现，每次在循环中出现时都会出现。想象一下，我们用之前的例子，N等于77，G等于8来做这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this remainder won't occur just once. It will occur multiple times every time it comes up in the cycle. Imagine we were doing this with the example from before with N equals 77 and G equals eight.</p>
</details>

如果我们测量的余数是15，那么我们的叠加态中将有多个项。因为有多个指数可以将G提高到相同的余数，这些指数是4、14、24、34等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the remainder we measured was say 15, then there would be multiple terms in our superposition. Because there are multiple exponents you can raise G2 that give this same remainder, exponents 4, 14, 24, 34, and so on.</p>
</details>

它们之间都相隔10，这个值就是满足我们方程的指数。所以更一般地，在测量余数之后，我们将得到一个叠加态，其中所有状态都共享相同的余数，并且指数都以相同的量r分离。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are each separated by 10, and that value is the exponent that satisfies our equation. So more generally after measuring the remainder, we will be left with a superposition of states that all share the same remainder and the exponents will all be separated by the same amount r.</p>
</details>

这就是我们正在寻找的数字。由于所有状态的余数现在都相同，我们可以将其放在一边，我们现在有了一个周期性的叠加态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the number we are looking for. Since the remainder is now the same for all states, we can put it to the side and we now have a superposition that is periodic.</p>
</details>

每个项与其相邻项之间都相隔一个量R。如果我们现在将量子傅里叶变换应用于这个叠加态（这里我做了一些简化），我们将得到包含1/R的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Each term is separated from its neighbors by an amount R. If we now apply the quantum Fourier transform to this superposition of states and I'm simplifying a little here, we will be left with states containing one over R.</p>
</details>

所以现在剩下的就是进行测量并通过反转它来找到R，这就是量子部分。现在，只要r是偶数，我们就可以使用r将我们糟糕的猜测g转换为两个可能与N有共同因数的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all that's left to do now is perform a measurement and find R by inverting it, and that's it for the quantum part. Now, as long as r turns out to be even we can use r to turn our bad guess g into two numbers that likely share factors with N.</p>
</details>

只要这些项本身不是N的倍数，我们就可以使用欧几里得算法找到N的因数并破解加密。这只需要几千个完美的量子比特。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as long as these terms themselves are not a multiple of N, we can use Euclid's algorithm to find the factors of N and break the encryption. This would only take several thousand perfect qubits,</p>
</details>

但我们今天的量子比特是不完美的，所以我们需要额外的量子比特作为冗余信息。2012年，估计需要十亿个物理量子比特才能破解RSA加密，但五年后，这个数字下降到2.3亿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the qubits we have today are imperfect, so we need additional qubits to act as redundant information. In 2012, it was estimated that it would take a billion physical qubits to break RSA encryption, but by five years later that number had dropped to 230 million.</p>
</details>

到2019年，在更多的技术突破之后，这个估计值骤降到仅仅2000万个物理量子比特。那么我们今天有多少量子比特呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in 2019, after more technological breakthroughs, that estimate plummeted to just 20 million physical qubits. So how many qubits do we have today?</p>
</details>

如果我们看看IBM量子计算机的现状，我们离这个量子比特数量还差得很远，但进展看起来是指数级的。所以现在只是一个问题，这两条曲线何时会相撞，在我们所有现有的公钥加密被破解之前。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, if we look at the state of IBM's quantum computers, we are nowhere near that number of qubits, but progress looks to be exponential. So now it's just a question of when these two curves will collide before all our existing public key encryption can be broken.</p>
</details>

### 后量子密码学：格基加密的兴起

因为我们早就知道这个威胁即将到来，科学家们一直在寻找新的加密数据方法，这些方法能够抵御普通计算机和量子计算机的攻击。2016年，**NIST**（National Institute of Standards and Technology: 美国国家标准与技术研究院）发起了一项竞赛，旨在寻找不易受量子计算机攻击的新加密算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because we've long known this threat is coming, scientists have been looking for new ways to encrypt data, which can withstand attacks from both normal and quantum computers. In 2016, the National Institute of Standards and Technology or NIST, launched a competition to find new encryption algorithms that aren't vulnerable to quantum computers.</p>
</details>

来自世界各地的密码学家提交了82份不同的提案，这些提案经过了严格的测试，其中一些被破解。然后，在2022年7月5日，NIST选择了其中四种算法作为其**后量子密码学**（Post-Quantum Cryptography: 旨在抵御量子计算机攻击的新型加密技术）标准的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cryptographers from all over the world submitted 82 different proposals, which were rigorously tested, some were broken. And then on July 5th, 2022, NIST selected four of the algorithms to be part of their post-quantum cryptographic standard.</p>
</details>

那么它们是如何工作的呢？其中三种算法基于**格**（Lattice: 由一组基向量的整数线性组合生成的所有点的集合）的数学原理。让我们在二维平面上举一个简单的例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do they work? Well, three of the algorithms are based on the mathematics of latices. So let's do a simple example in the 2D plane.</p>
</details>

取两个向量r1和r2，通过将这些向量的不同整数组合相加，例如三倍的r1和一倍的r2，你可以得到两个不同的点，所有通过不同方式组合这两个向量可以到达的点就是所谓的格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Take two vectors, r1 and r2, by adding together different integer combinations of these vectors, say three times r1 and one times r2, you can get two different points and all the points you can get to by combining these two vectors in different ways is what is called a lattice.</p>
</details>

现在我还会给你点C，你的任务是告诉我r1和r2的哪种组合能把我带到离C最近的格点。很容易看出，我们可以通过沿r2方向走两次，沿r1的负方向走两次来达到那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I will also give you the point C, and your task is to tell me which combination of r1 and r2 will bring me to the lattice point closest to c. It's pretty easy to see that we can get there by going in the direction of r2 twice and in the negative direction of r1 twice.</p>
</details>

这足够简单。但这些向量r1和r2并不是唯一能生成这个格的向量。例如，取b1和b2。这些向量也构建了相同的格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Simple enough. But those vectors, r1 and r2 are not the only vectors that can give you this lattice. Take b1 and b2 for example. These vectors also build up the same lattice.</p>
</details>

现在如果我再次问你同样的问题，你能告诉我b1和b2的哪种组合能让你到达离C最近的格点吗？这变得困难多了，但为什么呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now if I ask you the same question again, can you tell me the combination of b1 and b2 that gets you to the lattice point closest to c? This has become a lot harder, but why is that?</p>
</details>

每次我们迈出一步，我们都试图在X或Y方向上更接近，但对于b向量，每次我们向一个向量的正确方向迈出一步，它都会使我们在另一个方向上偏离。这就是为什么这些向量更难处理的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Each time we're taking a step, we're trying to get closer in either the X or Y direction, but with the b vectors, each time we take a step in the right direction with one vector, it puts us off in the other direction. And that's why these vectors are a lot harder to work with.</p>
</details>

最终，我们需要八倍的b1和负六倍的b2的组合才能到达最近的格点。这比以前困难得多，但仍然是一个相对容易解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the end, it takes us a combination of eight times b1 and negative six times b2 to get to the closest lattice point. That is a lot harder than before, but it's still a relatively easy problem to solve.</p>
</details>

但如果我们将它扩展到三维，这已经变得困难得多，特别是因为你没有得到所有格点的集合。你只得到了构成它的向量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if we extend it to three dimensions, this already becomes a lot harder, especially because you're not given the collection of all lattice points. You're only given the vectors that make it up.</p>
</details>

所以当你找到一个接近目标的格点时，你仍然必须找到它附近的所有其他格点，以确保你找到的确实是最近的。让我们以二维半径为r的圆为例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you find a lattice point close to the target, you must still find all the other lattice points near it to make sure yours is indeed the closest. Let's take a circle of radius r in two dimensions.</p>
</details>

圆内的格点数量与r的平方成正比。增加第三维，球体中的点数与r的立方成正比。所以请看随着我们增加维度，格点数量是如何增长的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The number of lattice points inside the circle is proportional to r squared. Add a third dimension and the number of points in the sphere is proportional to r cubed. So just watch how the number of lattice points grows as we increase the number of dimensions.</p>
</details>

解决**最近向量问题**（Closest Vector Problem: 在格中找到距离给定点最近的格点的问题）对于你的计算机来说，在三维中是小菜一碟。即使是100维也应该可以管理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Solving the closest vector problem is a piece of cake for your computer in three dimensions. Even a hundred dimensions should be manageable.</p>
</details>

但在提议的未来加密方案中，我们将使用大约一千个维度。在一个维度上向正确方向迈出一步，你可能会在其他999个维度上迈出错误的一步。你赢了一些，但失去了其他一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in proposed future encryption schemes, we'll use around a thousand dimensions. Take one step in the right direction on one of those dimensions, and you could potentially be taking a wrong step in the other 999 dimensions. You win some, you lose everything else.</p>
</details>

在如此多的维度下，即使对于最强大的计算机，也很难找到最近的点，除非你知道一组好的向量。那么我们如何利用它来加密数据呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With that many dimensions, it becomes extremely hard to find the closest point even for the most powerful computers, that is unless you know a good set of vectors. So how do we use that to encrypt data?</p>
</details>

让我们回到我们的二维例子。每个人都有一组好的向量来描述一个格，但他们将这些向量保密，并且只使用一组难以处理的向量公开共享他们的格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, let's go back to our two-dimensional example. Each person has a good set of vectors that describes a lattice, but they keep these vectors secret, and they only share their lattice publicly using a set of vectors that is hard to work with.</p>
</details>

现在，如果我想向某人发送消息，我会在他们的格上选择一个点，例如，这个点对应数字七。所以如果我想发送数字七，我可以取那个点，然后添加一些随机噪声。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if I want to send someone a message, I pick a point on their lattice, for example, say this point corresponds to the number seven. So if I wanna send the number seven, I can take that point but then add some random noise to it.</p>
</details>

所以，我发送的消息不完全在那个点上，但离它很近。现在，要解码消息，我的接收者必须找出哪个格点离消息点最近。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the message I send is not precisely at that point but close to it. Now, to decode the message, my recipient must figure out which lattice point is closest to the message point.</p>
</details>

在一千个维度中，这将极其难以做到，除非你有一组好的向量，而我的接收者正好有。所以对于拥有好向量的接收者来说很容易，但对于其他人来说则很难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In a thousand dimensions, this will be extremely hard to do unless you have the nice set of vectors, which my recipient does. So it's easy for the recipient, who has the good vectors, but hard for everyone else.</p>
</details>

据我们所知，这个问题对于普通计算机和量子计算机来说都极其难以解决。在幕后，有一支由研究人员、数学家和密码学家组成的队伍，他们将确保你的秘密数据保持秘密。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as far as we know, this problem is extremely difficult to solve for both normal and quantum computers. Behind the scenes, there's an army of researchers, mathematicians, and cryptographers, we're gonna make sure your secret data stays secret.</p>
</details>

### 应对未来的加密挑战

这些人是一些无名英雄，他们将确保我们未来的安全，避免政府的大规模监控，保护关键基础设施，并让你能够像量子计算机从未被发明过一样生活。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are some of the unsung heroes that will keep us safe moving forward, avoiding mass surveillance by governments keeping critical infrastructure protected and allowing you to live as if quantum computers were never invented in the first place.</p>
</details>

（数字嗡嗡声）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(digital buzzing)</p>
</details>

让我着迷的是能够看到世界未来的走向。现在很清楚，量子计算机和AI聊天机器人将在未来几十年中在我们的生活中扮演越来越重要的角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Something that fascinates me is being able to see where the world is headed. And right now it's clear that quantum computers and AI chatbots are going to play bigger and bigger roles in our lives in the coming decades.</p>
</details>

即使我们不确切知道它们将如何实施，我认为现在学习它们的工作原理很重要，你可以通过本视频的赞助商Brilliant做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even if we don't know exactly how they'll be implemented, I think it's important to learn how they work right now and you can do that with this video's sponsor, Brilliant.</p>
</details>

Brilliant有一个关于量子算法的精彩课程。这个课程是与微软和Alphabet X共同开发的。我喜欢你可以在课程中模拟量子门并编写和执行真实的量子算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant has an incredible course on quantum algorithms. This one was co-developed with Microsoft and Alphabet X. I love that you can simulate quantum gates and write and execute real quantum algorithms right in the lesson.</p>
</details>

无需设置自己的开发环境。如果你想深入研究密码学，制作和破解代码实际上是统计学的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No need to set up your own development environment. And if you want to dive deeper into cryptography, making and breaking codes is really a matter of statistics.</p>
</details>

强大的统计推理能力帮助我们发现数据中的模式并理解它们，这对于掌握数学和计算机科学中的几乎任何主题都至关重要。Brilliant的数据分析课程将帮助你快速提升。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Strong statistical reasoning skills help us find patterns in data and make sense of them, which is crucial to mastering just about any topic in math and computer Science. Brilliant's course on data analysis will help you ramp up fast.</p>
</details>

它使用日常情境，如商业模型来阐明统计学中的关键概念，而且它是交互式的，因此你可以亲身体验数据可视化并培养解释它们的真正直觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It uses everyday situations, like business models to illustrate key concepts in statistics and it's interactive, so you can get hands on with data visualizations and develop a real intuition for interpreting them.</p>
</details>

你知道Brilliant的独特之处在于他们知道如何将基础知识分解成核心构建模块，无论你是在学习数学、计算机科学还是数据分析，Brilliant的数千个小巧的互动课程都能帮助你掌握关键概念并逐步学习更高级的主题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know the thing that sets Brilliant apart is they know how to break fundamentals down into their core building blocks, whether you're learning math, computer science or data analysis, Brilliant's thousands of bite-sized interactive lessons help you master key concepts and build to more advanced topics.</p>
</details>

你可以免费试用Brilliant提供的所有课程，为期30天。只需访问brilliant.org/veritasium。我会在描述中留下这个链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can try everything Brilliant has to offer for free for a full 30 days. Just go to brilliant.org/veritasium. I will put that link down in the description.</p>
</details>

对于本视频的观众，Brilliant为前200名注册者提供年度高级订阅20%的折扣。所以我要感谢Brilliant赞助本视频，也感谢你的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for viewers of this video, Brilliant is offering 20% off their annual premium subscription to the first 200 people to sign up. So I wanna thank Brilliant for sponsoring this video, and I want to thank you for watching.</p>
</details>