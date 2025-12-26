---
area: "tech-engineering"
category: technology
companies_orgs:
- Google
- Yahoo
- Alphabet
- Stanford
- Los Alamos
date: '2025-07-25'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Eugene Onegin
people:
- J. Robert Oppenheimer
- John von Neumann
- Masayoshi Son
- Sergey Brin
- Larry Page
- Claude Shannon
- Casper
products_models:
- ENIAC
- Gmail
project: []
series: ''
source: https://www.youtube.com/watch?v=KZeIEiBrT_w
speaker: veritasium
status: evergreen
summary: 本文深入探讨了马尔可夫链这一核心数学概念的起源、发展及其在现代世界的深远影响。从19世纪俄罗斯两位数学家关于“自由意志”的激烈争论，到二战期间核弹研发中的蒙特卡洛方法，再到谷歌PageRank算法的诞生，以及当前大型语言模型（LLMs）的工作原理，马尔可夫链以其独特的“无记忆性”特性，在看似复杂多变的系统中实现了简化和预测。文章揭示了这一数学工具如何从纯理论走向实际应用，并塑造了我们所知的数字世界。
tags:
- history
- large-language-model
- llm
- technology
- theory
title: 从沙皇时代的数学争论到谷歌与AI：马尔可夫链的非凡旅程
---
### 奇怪的数学如何预测万物

你需要洗多少次牌才能让一副扑克牌真正随机？建造一枚核弹需要多少铀？你如何预测句子中的下一个词？谷歌又是如何知道你真正想搜索的页面？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How many times do you need to shuffle a deck of cards to make them truly random? How much uranium does it take to build a nuclear bomb? How can you predict the next word in a sentence? And how does Google know which page you're actually searching for?</p>
</details>

我们之所以能回答所有这些问题，都归因于一百多年前俄罗斯发生的一场奇怪的数学争论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the reason we know the answer to all of these questions is because of a strange math feud in Russia that took place over 100 years ago.</p>
</details>

1905年，俄罗斯各地的社会主义团体奋起反抗**沙皇**（Tsar: 俄罗斯帝国的君主），他们要求进行彻底的政治改革，否则就要求沙皇彻底下台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1905, socialist groups all across Russia rose up against the Tsar, the ruler of the empire. They demanded a complete political reform, or failing that, that he stepped down from power entirely.</p>
</details>

这使得整个国家分裂成两派。一方是**沙皇派**（Tsarists），他们希望维护现状，让沙皇继续掌权。而另一方则是**社会主义者**（Socialists），他们要求进行彻底的政治改革。这种分裂如此严重，以至于渗透到社会的各个层面，甚至连数学家也开始站队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This divided the nation into two. So on one side you got the Tsarists, right? They wanted to defend the status quo and keep the Tsar in power. But then on the other side, you had the socialists who wanted this complete political reform. And this division was so bad that it crept into every part of society to the point where even mathematicians started picking sides.</p>
</details>

### 马尔可夫与涅克拉索夫的数学之争

站在沙皇一边的是**帕维尔·涅克拉索夫**（Pavel Nekrasov），他被非正式地称为“概率沙皇”。涅克拉索夫是一个虔诚而有权势的人，他利用自己的地位主张数学可以用来解释**自由意志**（Free Will）和**上帝的旨意**（Will of God）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the side of the Tsar was Pavel Nekrasov, unofficially called the Tsar of Probability. Nekrasov was a deeply religious and powerful man, and he used his status to argue that math could be used to explain free will and the will of God.</p>
</details>

他在社会主义阵营的学术对手是**安德烈·马尔可夫**（Andrey Markov），也被称为“愤怒的安德烈”。马尔可夫是一名无神论者，他对那些不严谨的人毫无耐心，他认为涅克拉索夫就是这样的人，因为在他看来，数学与自由意志或宗教毫无关系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His intellectual nemesis on the socialist side was Andrey Markov, also known as Andrey The Furious. Markov was an atheist and he had no patience for people who were being unrigorous, something he considered Nekrasov to be, because in his eyes, math had nothing to do with free will or religion.</p>
</details>

因此，他公开批评涅克拉索夫的工作，将其列为“滥用数学”之一。他们的争论围绕着过去200年来人们用于**概率论**（Probability Theory: 研究随机事件发生可能性的数学分支）的主要思想展开。我们可以用一个简单的抛硬币例子来说明这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he publicly criticized Nekrasov's work, listing it among "the abuses of mathematics." Their feud centered on the main idea people had used to do probability for the last 200 years. And we can illustrate this with a simple coin flip.</p>
</details>

当我抛硬币10次时，我得到6次正面和4次反面，这显然不是你期望的50/50。但如果我继续抛硬币，最初的比例会跳动不定。然而，在大量抛掷之后，我们看到它慢慢稳定下来，接近50/50。在这种情况下，抛掷100次后，我们得到51次正面和49次反面，这几乎与你期望的完全一致。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I flip the coin 10 times, I get six times heads and four times tails, which is obviously not the 50/50 you'd expect. But if I keep flipping the coin, then at first the ratio jumps all over the place. But after a large number of flips, we see that it slowly settles down and approaches 50/50. And in this case, after 100 flips, we end up on 51 heads and 49 tails, which is almost exactly what you would expect.</p>
</details>

这种随着独立试验次数的增加，平均结果越来越接近期望值的行为，被称为**大数定律**（Law of Large Numbers: 随着独立重复试验次数的增加，事件发生的频率趋近于其理论概率的数学定理）。它最早由**雅各布·伯努利**（Jacob Bernoulli）于1713年证明，是直到马尔可夫和涅克拉索夫时代概率论的核心概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This behavior that the average outcome gets closer and closer to the expected value as you run more and more independent trials is known as the law of large numbers. It was first proven by Jacob Bernoulli in 1713, and it was the key concept at the heart of probability theory right up until Markov and Nekrasov.</p>
</details>

但伯努利只证明了它适用于**独立事件**（Independent Events: 一个事件的发生不影响另一个事件发生概率的事件），比如公平的抛硬币，或者当你让人们猜测一件物品的价值时，一个事件不会影响其他事件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Bernoulli only proved that it worked for independent events like a fair coin flip, or when you ask people to guess how much they think an item is worth, where one event doesn't influence the others.</p>
</details>

但现在想象一下，你不是让每个人单独提交他们的猜测，而是让他们公开喊出答案。在这种情况下，第一个人可能认为这是一件非常有价值的物品，并说它值2000美元左右，但现在房间里所有其他人都会受到这个价值的影响，因此他们的猜测变得相互依赖。现在平均值不再收敛于真实值，而是聚集在一个更高的金额附近。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But now imagine that instead of asking each person to submit their guess individually, you ask people to shout out their answer in public. Well, in this case, the first person might think it's an extraordinarily valuable item, and say it's worth around $2,000, but now all the other people in the room are influenced by this value, and so, their guesses have become dependent. And now the average doesn't converge to the true value, but instead it clusters around a higher amount.</p>
</details>

因此，200年来，概率论一直依赖于这个关键假设：你需要独立性才能观察到大数定律。这正是引发涅克拉索夫和马尔可夫争论的思想。涅克拉索夫同意伯努利的观点，即你需要独立性才能得到大数定律。但他更进一步，他说，如果你看到大数定律，你就可以推断出潜在事件必须是独立的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, for 200 years, probability had relied on this key assumption, that you need independence to observe the law of large numbers. And this was the idea that sparked Nekrasov and Markov's feud. See, Nekrasov agreed with Bernoulli that you need independence to get the law of large numbers. But he took it one step further. He said, if you see the law of large numbers, you can infer that the underlying events must be independent.</p>
</details>

以1841年至1845年比利时婚姻的统计表为例。你会看到每年平均大约是29,000。因此，这些数值似乎收敛，并遵循大数定律。当涅克拉索夫查看其他社会统计数据，如犯罪率和出生率时，他注意到了类似的模式。但现在想想所有这些数据的来源。它们来自结婚的决定、犯罪的决定和生育的决定，至少在很大程度上是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Take this table of Belgian marriages from 1841 to 1845. Now you see that every year the average is about 29,000. And so, it seems like the values converge and therefore that they follow the law of large numbers. And when Nekrasov looked at other social statistics like crime rates and birth rates, he noticed a similar pattern. But now think about where all this data is coming from. It's coming from decisions to get married, decisions to commit crimes, and decisions to have babies, at least for the most part.</p>
</details>

因此，涅克拉索夫推断，由于这些统计数据遵循大数定律，导致它们的决定必然是独立的。换句话说，他认为它们必然是自由意志的行为。所以对他来说，自由意志不仅仅是哲学上的东西，它还是可以衡量的，是科学的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Nekrasov reasoned that because these statistics followed the law of large numbers, the decisions causing them must be independent. In other words, he argued that they must be acts of free will. So to him, free will wasn't just something philosophical, it was something you could measure. It was scientific.</p>
</details>

但对马尔可夫来说，涅克拉索夫是妄想的。他认为将数学独立性与自由意志联系起来是荒谬的。因此，马尔可夫着手证明依赖事件也可以遵循大数定律，并且你仍然可以用依赖事件进行概率计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But to Markov, Nekrasov was delusional. He thought it was absurd to link mathematical independence to free will. So Markov set out to prove that dependent events could also follow the law of large numbers, and that you can still do probability with dependent events.</p>
</details>

### 马尔可夫链的诞生与《叶甫盖尼·奥涅金》

为此，他需要一个事件明显依赖于之前事件的例子，他想到这正是文本中发生的情况。你的下一个字母是辅音还是元音，很大程度上取决于当前字母是什么。为了验证这一点，马尔可夫转向了俄罗斯文学核心的一首诗——**亚历山大·普希金**（Alexander Pushkin）的《叶甫盖尼·奥涅金》（Eugene Onegin）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To do this, he needed something where one event clearly depended on what came before, and he got the idea that this is what happens in text. Whether your next letter is a consonant or a vowel depends heavily on what the current letter is. So to test this, Markov turned to a poem at the heart of Russian literature, "Eugene Onegin" by Alexander Pushkin.</p>
</details>

他取了这首诗的前20,000个字母，去掉了所有标点符号和空格，并将它们合并成一个长长的字符串。他统计了字母，发现43%是元音，57%是辅音。然后马尔可夫将字符串分解成重叠的对，这给他带来了四种可能的组合：元音-元音、辅音-辅音、元音-辅音或辅音-元音。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He took the first 20,000 letters of the poem, stripped out all punctuation and spaces, and pushed them together into one long string of characters. He counted the letters and found that 43% were vowels and 57% were consonants. Then Markov broke the string into overlapping pairs, that gave him four possible combinations, vowel-vowel, consonant-consonant, vowel-consonant, or consonant-vowel.</p>
</details>

如果字母是独立的，那么元音-元音对的概率就只是元音概率的两次乘积，大约是0.18，即18%的机会。但当马尔可夫实际统计时，他发现元音-元音对只出现了6%的时间，远低于它们独立时的预测。当他检查其他对时，他发现所有实际值都与独立情况下的预测大相径庭。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if the letters were independent, the probability of a vowel-vowel pair would just be the probability of a vowel twice, which is about 0.18 or an 18% chance. But when Markov actually counted, he found vowel-vowel pairs only show up 6% of the time, way less than if they were independent. And when he checked the other pairs, he found that all actual values differed greatly from what the independent case would predict.</p>
</details>

因此，马尔可夫证明了字母之间是相互依赖的。为了击败涅克拉索夫，他现在只需要证明这些字母仍然遵循大数定律。于是他创建了一种预测机器。他首先画了两个圆圈，一个代表元音，一个代表辅音。这些是他的“状态”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Markov had shown that the letters were dependent. And to beat Nekrasov, all he needed to do now was show that these letters still followed the law of large numbers. So he created a prediction machine of sorts. He started by drawing two circles, one for a vowel and one for a consonant. These were his states.</p>
</details>

现在，假设你处于一个元音状态，那么下一个字母可能是元音或辅音。所以他画了两条箭头来表示这些转换。但这些转换概率是多少呢？马尔可夫知道，如果你随机选择一个起点，有43%的机会是元音。他还知道元音-元音对大约占6%的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, say you're at a vowel, then the next letter could either be a vowel or a consonant. So he drew two arrows to represent these transitions. But what are these transition probabilities? Well, Markov knew that if you pick a random starting point, there is a 43% chance that it'll be a vowel. He also knew that vowel-vowel pairs occur about 6% of the time.</p>
</details>

因此，为了找到从元音到另一个元音的概率，他将0.06除以0.43，得到大约13%的转换概率。由于下一个字母出现的几率是100%，所有从同一状态发出的箭头概率之和必须为1。所以转到辅音的几率是1减去0.13，即87%。他为辅音重复了这个过程，完成了他的预测机器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to find the probability of going from a vowel to another vowel, he divided 0.06 by 0.43 to find a transition probability of about 13%. And since there is a 100% chance that another letter comes next, all the arrows going from the same state need to add up to one. So the chance of going to a consonant is one minus 0.13, or 87%. He repeated this process for the consonants to complete his predictive machine.</p>
</details>

那么我们来看看它是如何工作的。我们从一个元音开始。接下来，我们生成一个0到1之间的随机数。如果它低于0.13，我们得到另一个元音；如果高于，我们得到一个辅音。我们得到0.78，所以我们得到一个辅音，然后我们生成另一个数字，检查它是否高于或低于0.67，得到0.21，所以我们得到一个元音。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's see how it works. We'll start at a vowel. Next, we generate a random number between zero and one. If it's below 0.13, we get another vowel, if it's above, we get a consonant. We got 0.78, so we get a consonant, then we generate another number, and check if it's above or below 0.67, 0.21, so we get a vowel.</p>
</details>

现在，我们可以继续这样做，并跟踪元音与辅音的比例。最初，这个比例会跳动不定，但过了一段时间后，它会收敛到一个稳定值：43%的元音和57%的辅音，这正是马尔可夫手工统计的精确比例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, we can keep doing this and keep track of the ratio of vowels to consonants. At first, the ratio jumps all over the place, but after a while, it converges to a steady value, 43% vowels and 57% consonants, the exact split Markov had counted by hand.</p>
</details>

因此，马尔可夫建立了一个依赖系统，一个字面意义上的事件链，他证明它仍然遵循大数定律，这意味着在社会统计中观察到的收敛并不能证明潜在的决定是独立的。换句话说，这些统计数据根本不能证明自由意志。马尔可夫粉碎了涅克拉索夫的论点，他知道这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Markov had built a dependent system, a literal chain of events, and he showed that it still followed the law of large numbers, which meant that observing convergence in social statistics didn't prove that the underlying decisions were independent. In other words, those statistics don't prove free will at all. Markov had shattered Nekrasov's argument, and he knew it.</p>
</details>

所以他在论文的结尾对他的对手进行了最后一次嘲讽：“因此，自由意志对于进行概率计算并非必要。”事实上，独立性甚至对于进行概率计算也并非必要。通过这种后来被称为**马尔可夫链**（Markov Chain: 一种数学模型，描述了一系列可能的状态，以及从一个状态转移到另一个状态的概率，其特点是“无记忆性”，即未来状态只取决于当前状态，与过去状态无关）的方法，他找到了一种处理依赖事件的概率计算方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So he ended his paper with one final dig at his rival. "Thus, free will is not necessary to do probability." In fact, independence isn't even necessary to do probability. With this Markov chain, as it came to be known, he found a way to do probability with dependent events.</p>
</details>

这本应是一个巨大的突破，因为在现实世界中，几乎所有事物都依赖于其他事物。明天的天气取决于今天的情况。疾病如何传播取决于现在谁被感染，粒子的行为取决于周围粒子的行为。许多这些过程都可以使用马尔可夫链建模。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This should have been a huge breakthrough, because in the real world, almost everything is dependent on something else. I mean, the weather tomorrow depends on the conditions today. How a disease spreads depends on who's infected right now, and the behavior of particles depends on the behavior of particles around them. Many of these processes could be modeled using Markov chains.</p>
</details>

人们是否认为这是一个“麦克风掉落”的时刻，就像“哦，涅克拉索夫出局了，马尔可夫才是赢家”？还是人们没有真正注意到，或者它很晦涩？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do people think it was like a mic drop moment and like, "Oh, Nekrasov's out, like, Markov's the man"? Or people didn't really notice, or it was obscure, or?</p>
</details>

我觉得人们并没有真正注意到，它并不是一件大事。马尔可夫本人似乎也不太关心它如何应用于实际事件。他写道：“我只关心纯分析的问题。我对适用性问题漠不关心。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I feel like people didn't really notice, like, it wasn't a really big thing. And Markov himself seemingly didn't care much about how it might be applied to practical events. He wrote, "I'm concerned only with questions of pure analysis. I refer to the question of the applicability with indifference."</p>
</details>

他不知道这种新形式的概率论很快将在20世纪最重要的发展之一中扮演重要角色。1945年7月16日上午，美国引爆了“小工具”（The Gadget），这是世界上第一枚**核弹**（Nuclear Bomb: 利用核裂变或核聚变反应释放巨大能量的武器）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Little did he know that this new form of probability theory would soon play a major role in one of the most important developments of the 20th century. On the morning of the 16th of July, 1945, the United States detonated The Gadget, the world's first nuclear bomb.</p>
</details>

这枚六公斤的钚弹产生的爆炸当量相当于近25,000吨TNT。这是绝密**曼哈顿计划**（Manhattan Project）的巅峰之作，该计划是**J. 罗伯特·奥本海默**（J. Robert Oppenheimer）、**约翰·冯·诺依曼**（John von Neumann）以及一位鲜为人知的数学家**斯坦尼斯瓦夫·乌拉姆**（Stanislaw Ulam）等当时最聪明的人历时三年努力的成果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The six kilogram plutonium bomb created an explosion that was equivalent to nearly 25,000 tons of TNT. This was the culmination of the top secret Manhattan Project, a three-year long effort by some of the smartest people alive, including people like J. Robert Oppenheimer, John von Neumann, and a little known mathematician named Stanislaw Ulam.</p>
</details>

### 蒙特卡洛方法与核弹模拟

即使战争结束，乌拉姆仍在继续研究中子在核弹内部的行为。核弹的工作原理大致如下：假设你有一个铀-235的核心，当中子撞击一个铀-235原子核时，原子核会**裂变**（Fission: 重原子核分裂成两个或多个较轻原子核的过程，同时释放能量），释放能量，更重要的是，还会释放出两到三个额外的中子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even after the war ended, Ulam continued trying to figure out how neutrons behave inside a nuclear bomb. Now, a nuclear bomb works something like this. Say you have a core of uranium-235, then when a neutron hits a U-235 nucleus, the nucleus splits releasing energy and, crucially, two or three more neutrons.</p>
</details>

如果平均而言，这些新中子继续撞击并分裂一个以上的其他铀-235原子核，你就会得到一个失控的链式反应，从而形成一枚核弹。但是，铀-235这种制造核弹所需的**裂变燃料**（Fissile Fuel）非常难以获取。因此，一个关键问题是，你需要多少这种材料才能制造一枚核弹？这就是乌拉姆想要了解中子行为的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If, on average, those new neutrons go on to hit and split more than one other U-235 nucleus, you get a runaway chain reaction, so you have a nuclear bomb. But uranium-235, the fissile fuel needed for the bombs was really hard to get. So one of the key questions was just how much of it do you need to build a bomb? And this is why Ulam wanted to understand how the neutrons behave.</p>
</details>

但在1946年1月，一切都停止了。乌拉姆突然患上严重的**脑炎**（Encephalitis: 脑部炎症），差点要了他的命。他的康复过程漫长而缓慢，大部分时间都在床上度过。为了打发时间，他玩了一种简单的纸牌游戏——**纸牌接龙**（Solitaire）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then in January of 1946, everything came to a halt. Ulam was struck by a sudden and severe case of encephalitis, an inflammation of the brain, that nearly killed him. His recovery was long and slow, with Ulam spending most of his time in beds. To pass the time, he played a simple card game, Solitaire.</p>
</details>

但他玩了无数局游戏，赢了一些，输了一些，一个问题一直困扰着他：一局随机洗牌的纸牌接龙有多少几率能赢？这是一个看似简单却难以解决的问题。乌拉姆玩的是52张牌，每种排列都创造了一个独特的游戏，所以可能的总游戏数量是52的阶乘，大约是8乘以10的67次方。因此，通过分析方法解决这个问题是毫无希望的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as he played countless games, winning some, losing others, one question kept nagging at him, what are the chances that a randomly-shuffled game of Solitaire could be won? It was a deceivingly difficult problem to solve. Ulam played with all 52 cards where each arrangement created a unique game, so the total number of possible games was 52 factorial, or about eight times 10 to 67. So solving this analytically was hopeless.</p>
</details>

但随后乌拉姆灵光一闪：如果我只玩几百局游戏，然后统计有多少局能赢呢？那将给他一个答案的统计近似值。回到洛斯阿拉莫斯，剩下的科学家们正在努力解决比纸牌接龙更困难的问题，比如弄清楚中子在核核心内部的行为。在一个核核心中，有数万亿个中子都在与周围环境相互作用。因此，可能的结局数量是巨大的，直接计算似乎是不可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then Ulam had a flash of insight, what if I just play hundreds of games and count how many could be won? That would give him some sort of statistical approximation of the answer. Back at Los Alamos, the remaining scientists grappled with much harder problems than Solitaire, like figuring out how neutrons behave inside a nuclear core. In a nuclear core, there are trillions and trillions of neutrons all interacting with their surroundings. So the number of possible outcomes is immense, and computing it directly seemed impossible.</p>
</details>

但当乌拉姆回到工作岗位时，他突然有了一个顿悟。如果我们可以通过生成大量随机结果来模拟这些系统，就像我玩纸牌接龙那样呢？他与冯·诺依曼分享了这个想法，冯·诺依曼立即认识到它的强大之处，但也发现了一个关键问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But when Ulam returned to work, he had a sudden revelation. What if we could simulate these systems by generating lots of random outcomes like I did with Solitaire? He shared this idea with von Neumann, who immediately recognized its power, but also spotted a key problem.</p>
</details>

你看，在纸牌接龙中，每局游戏都是独立的。一局游戏中牌的分配方式对下一局没有影响，但中子并非如此。中子的行为取决于它的位置以及它之前做了什么。所以你不能像纸牌接龙那样简单地随机抽样结果。相反，你需要模拟一整个事件链，其中每一步都影响下一步。冯·诺依曼意识到，你需要一个**马尔可夫链**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See, in Solitaire, each game is independent. How the cards are dealt in one game have no effect on the next, but neutrons aren't like that. A neutron's behavior depends on where it is and what it has done before. So you couldn't just sample random outcomes like in Solitaire. Instead, you needed to model a whole chain of events where each step influenced the next. What von Neumann realized is that you needed a Markov chain.</p>
</details>

于是他们创建了一个，一个大大简化的版本大致是这样工作的。现在，起始状态只是一个中子穿过核心，从那里，可能发生三件事。它可以从原子上散射并继续行进，这会给你一个指向自身的箭头。它可以离开系统或被非裂变材料吸收，在这种情况下，它不再参与链式反应，因此它的马尔可夫链结束。或者它可以撞击另一个铀-235原子，引发**裂变事件**（Fission Event），释放出两到三个更多的中子，这些中子随后开始自己的链。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they made one and a much simplified version of it works something like this. Now, the starting state is just a neutron traveling through the core, and from there, three things can happen. It can scatter off an atom and keep traveling, so that gives you an arrow going back to itself. It can leave the system or get absorbed by a non-fissile material, in which case it no longer takes part in the chain reaction, and so it ends its Markov chain, or it can strike another uranium-235 atom, triggering a fission event and releasing two or three more neutrons that then start their own chains.</p>
</details>

但在这个链中，转换概率并非固定不变，它们取决于中子的位置、速度和能量，以及铀的整体配置和质量等因素。因此，一个快速移动的中子可能有30%的几率散射，50%的几率被吸收或离开，20%的几率引起裂变。但一个慢速移动的中子会有不同的概率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in this chain, the transition probabilities aren't fixed, they depend on things like the neutron's position, velocity and energy, as well as the overall configuration and mass of uranium. So a fast-moving neutron might have a 30% chance to scatter, a 50% chance to be absorbed or leave, and a 20% chance to cause fission. But a slower-moving neutron would have different probabilities.</p>
</details>

接下来，他们在世界上第一台电子计算机**ENIAC**（Electronic Numerical Integrator and Computer: 世界上第一台通用电子数字计算机）上运行了这个链。计算机首先随机生成中子的起始条件，然后逐步通过链，跟踪每次运行平均产生的中子数量，这被称为**乘法因子k**（Multiplication Factor k: 在核链式反应中，每一代裂变产生的平均中子数与前一代中子数之比，用于衡量反应的增长或衰减）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, they ran this chain on the world's first electronic computer, the ENIAC. The computer started by randomly generating a neutron starting conditions and stepped through the chain to keep track of how many neutrons were produced on average per run, known as the multiplication factor k.</p>
</details>

因此，如果平均而言，一个中子产生另外两个中子，那么k等于2。如果平均而言，每两个中子产生三个中子，那么k等于3/2，依此类推。然后，在完成整个链的指定步数后，我们收集平均k值，并将该数字记录在直方图中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if, on average, one neutron produces another two neutrons, then k is equal to two. And if on average every two neutrons produce three neutrons, then k is equal to three over two, and so on. Then, after stepping through the full chain for a specified number of steps, we collect the average k-value and record that number in a histogram.</p>
</details>

这个过程重复了数百次，结果被汇总起来，给出了结果的统计分布。如果你发现在大多数情况下，k小于1，反应就会衰减。如果它等于1，就会有一个自持的链式反应，但它不会增长。如果k大于1，反应就会呈指数增长，你就得到了一枚核弹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This process was then repeated hundreds of times, and the results tallied up, giving you a statistical distribution of the outcome. If you find that in most cases, k is less than one, the reaction dies down. If it's equal to one, there's a self-sustaining chain reaction, but it doesn't grow. And if k is larger than one, the reaction grows exponentially and you've got a bomb.</p>
</details>

通过这种方法，冯·诺依曼和乌拉姆有了一种统计学方法来计算产生的中子数量，而无需进行任何精确计算。换句话说，他们可以近似那些难以通过分析方法解决的微分方程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With it, von Neumann and Ulam had a statistical way to figure out how many neutrons were produced without having to do any exact calculations. In other words, they could approximate differential equations that were too hard to solve analytically.</p>
</details>

所需要的只是为这种新方法取一个名字。乌拉姆的叔叔是个赌徒，随机抽样和高风险让他想起了摩纳哥的**蒙特卡洛赌场**（Monte Carlo Casino），这个名字就这样沿用了下来。**蒙特卡洛方法**（Monte Carlo method: 一种计算方法，通过重复随机抽样来近似计算结果，常用于解决复杂问题）诞生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All that was needed was a name for the new method. Now, Ulam's uncle was a gambler, and the random sampling and high stakes reminded Ulam of the Monte Carlo Casino in Monaco, and the name stuck. The Monte Carlo method was born.</p>
</details>

这种方法非常成功，没有秘密太久。到1948年底，芝加哥**阿贡国家实验室**（Argonne National Laboratory）的科学家们用它来研究核反应堆设计，从此，这个想法迅速传播开来。乌拉姆后来评论道：“对我来说，看到黑板上的几笔涂鸦如何改变人类事务的进程，仍然是一个无穷无尽的惊喜之源。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The method was so successful that it didn't stay secret for long. By the end of 1948, scientists at another lab, Argonne, in Chicago, used it to study nuclear reactor designs, and from there, the idea spread quickly. Ulam later remarked, "It is still an unending source of surprise for me to see how a few scribbles on a blackboard could change the course of human affairs."</p>
</details>

这不会是基于马尔可夫链的方法最后一次改变人类事务的进程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it wouldn't be the last time Markov chain based method changed the course of human affairs.</p>
</details>

### 马尔可夫链与互联网搜索引擎的崛起

1993年，互联网向公众开放，并很快爆发式增长。到20世纪90年代中期，每天都有成千上万的新页面出现，而且这个数字还在不断增长。这带来了一个新问题：你如何在信息这个不断扩张的海洋中找到任何东西？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1993, the internet was open to the public, and soon it exploded. By the mid-1990s, thousands of new pages appeared every day, and that number was only growing. This created a new kind of problem. I mean, how do you find anything in this ever-expending sea of information?</p>
</details>

1994年，两位**斯坦福大学**（Stanford University）的博士生**杨致远**（Jerry Yang）和**大卫·费罗**（David Filo）创立了**搜索引擎**（Search Engine: 帮助用户在互联网上查找信息的工具）**雅虎**（Yahoo），以解决这个问题，但他们需要资金。所以一年后，他们安排与日本亿万富翁**孙正义**（Masayoshi Son）会面，孙正义也被称为“日本的比尔·盖茨”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1994, two Stanford PhD students, Jerry Yang and David Filo, founded the search engine Yahoo, to address this issue, but they needed money. So a year later, they arranged to meet with Japanese billionaire, Masayoshi Son, also known as the Bill Gates of Japan.</p>
</details>

他们希望为他们的下一个初创公司筹集500万美元，但孙正义有其他计划。他提出投资整整1亿美元。这比创始人要求的多了20倍。所以杨致远拒绝了，说：“我们不需要那么多。”但孙正义不同意：“杨致远，每个人都需要1亿美元。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They were looking to raise $5 million for their next startup, but Son has other plans. He offers to invest a full $100 million instead. That's 20 times more than what the founders asked for. So Jerry Yang declines saying, "We don't need that much," but Son disagrees, "Jerry, everyone needs $100 million."</p>
</details>

在创始人有机会回应之前，孙正义再次插话问道：“你们最大的竞争对手是谁？”两人回答：“**Excite**和**Lycos**。”孙正义命令他的助手记下这些名字。然后他说：“如果你不让我投资雅虎，我就会投资他们中的一个，然后我会干掉你。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before the founders get a chance to respond, Son jumps in again and asks, "Who are your biggest competitors?" "Excite and lycos," the pair respond. Son orders his associate to write those names down. And then he says, "If you don't let me invest in Yahoo, I will invest in one of them and I'll kill you."</p>
</details>

你看，孙正义意识到了一些事情。当时领先的搜索引擎都没有任何卓越的技术。它们没有技术优势。它们都只是根据搜索词在给定页面上出现的频率来对页面进行排名。因此，争夺第一搜索引擎的战斗将取决于谁能吸引最多的用户，谁能在营销上花费最多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See, Son had realized something. None of the leading search engines at the time had any superior technology. They didn't have a technological advantage over the others. They all just ranked pages by how often a search term appears on a given page. So the battle for the number one search engine would be decided by who could attract the most users, who could spend the most on marketing.</p>
</details>

营销需要大量的资金，而孙正义有钱，所以他可以决定谁赢得这场战争。雅虎的创始人意识到他们别无选择，只能接受孙正义的投资。四年之内，雅虎成为地球上最受欢迎的网站。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And marketing required a lot of money, money that Son had, so he could decide who won the war. Yahoo's founders realized they were left with no real choice but to accept Son's investment. And within four years, Yahoo became the most popular site on the planet.</p>
</details>

但雅虎有一个致命的弱点。雅虎的关键词搜索很容易被欺骗。为了让你的页面排名靠前，你只需重复关键词数百次，用白色文本隐藏在白色背景上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Yahoo had a critical weakness. See, Yahoo's keyword search was easy to trick. To get your page ranked highly, you could just repeat keywords hundreds of times, hidden with white text on a white background.</p>
</details>

在早期，他们没有结果质量的概念。他们有相关性的概念，即这份文档是否谈论你感兴趣的东西？但并没有真正衡量哪些更好。他们真正需要的是一种既能按相关性又能按质量对页面进行排名的方法。但你如何衡量网页的质量呢？要理解这一点，我们需要借鉴图书馆的一个想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing they didn't have in those early days was a notion of quality of the result. So they had a notion of relevance saying, does this document talk about the thing that you're interested in? But there wasn't really a notion of which ones are better. What they really needed was a way to rank pages by both relevance and quality. But how do you measure the quality of a webpage? Well, to understand that, we need to borrow an idea from libraries.</p>
</details>

我年纪足够大，记得以前图书馆的书里都有一张纸卡，上面盖满了还书日期。如果你拿到一本书，上面有很多这样的印章，你就会说：“哦，这可能是一本好书。”如果它没有任何印章，你就会说：“嗯，这可能不是最好的书。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm old enough that library books used to have a paper card in it that was a stamp of all the due dates of when it was due back. You took a book and if it had a lot of those, you said, "Oh, this is probably a good book." And if it didn't have any, you said, "Well, maybe this isn't the best book."</p>
</details>

印章就像是认可。印章越多，书就越好。同样的想法也可以应用于网络。在斯坦福大学，两位博士生**谢尔盖·布林**（Sergey Brin）和**拉里·佩奇**（Larry Page）正在研究这个问题。布林和佩奇意识到，每个指向页面的链接都可以被视为一种认可。一个页面发出的链接越多，每个“投票”的价值就越低。所以他们意识到，我们可以将网络建模为**马尔可夫链**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Stamps acted like endorsements. The more stamps, the better the book must be. And the same idea can be applied to the web. Over at Stanford, two PhD students, Sergey Brin and Larry Page, were working on this exact problem. Brin and Page realized that each link to a page can be thought of as an endorsement. And the more links a page sends out, the less valuable each vote becomes. So what they realized is that we can model the web as a Markov chain.</p>
</details>

为了了解它是如何工作的，想象一个只有四个网页的玩具互联网。我们称它们为艾米（Amy）、本（Ben）、克里斯（Chris）和丹（Dan）。这些是我们的“状态”。通常，一个网页会链接到其他网页，允许你在它们之间移动。这些是我们的“转换”。在这个设置中，艾米只链接到本，所以从艾米到本有100%的机会。本链接到艾米、克里斯和丹，所以到这些页面中的任何一个都有33%的机会，我们可以用同样的方式填写其他转换概率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To see how this works, imagine a toy internet with just four webpages. Call them Amy, Ben, Chris, and Dan. These are our states. Typically, one webpage links to others, allowing you to move between them. These are our transitions. In this setup, Amy only links to Ben, so there's a 100% chance of going from Amy to Ben. Ben links to Amy, Chris, and Dan, so there's a 33% chance of going to any of those pages, and we can fill out the other transition probabilities in the same way.</p>
</details>

所以现在我们可以运行这个马尔可夫链，看看会发生什么。想象你是一个在这个网络上冲浪的人。你从一个随机页面开始，比如艾米，然后你继续运行这个机器，并跟踪你花在每个页面上的时间百分比。随着时间的推移，这个比例会稳定下来，分数会给我们一些衡量这些页面相对重要性的指标。你在本页面上花费的时间最多，所以本排名第一，其次是艾米，然后是丹，最后是克里斯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we can run this Markov chain and see what happens. Imagine you're a surfer on this web. You start on a random page, say, Amy, and you keep running the machine and keep track of the percentage of time you spend on each page. Over time, the ratio settles and the scores give us some measure of the relative importance of these pages. You spend the most time on Ben, so Ben is ranked first, followed by Amy, then Dan, and lastly Chris.</p>
</details>

这似乎有一个简单的办法可以击败这个系统，那就是制作100个页面，全部链接到你的网站。这样你就会得到100个完整的投票，并且总是排名靠前，但事实并非如此。虽然在最初的几步中，它们可能让你的页面看起来很重要，但其他网站都没有链接到它们。所以经过许多步之后，它们的贡献就不重要了。你可能有很多链接，但它们不是高质量的链接，所以它们不会影响算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might seem like there's an easy way to beat the system, just make 100 pages all linking to your website. Now you get 100 full votes and you'll always rank on top, but that is not the case. While during their first few steps, they might make your page seem important, none of the other websites link to them. So over many steps, their contributions don't matter. You might have many links, but they're not quality links, so they don't affect the algorithm.</p>
</details>

但还有一个问题，并非所有页面都相互连接。在这样的网络中，一个随机的服务器可能会陷入循环，永远无法到达网络的其余部分。为了解决这个问题，我们可以设定一个规则，即85%的时间，我们的随机服务器像正常一样跟随链接。但大约15%的时间，它们只是随机跳转到一个页面。这个**阻尼因子**（Damping Factor: 在PageRank算法中，用于模拟用户随机跳转网页的概率，防止算法陷入死循环）确保我们探索了网络所有可能的部分，而不会陷入困境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there is still one problem, though, not all pages are connected. In networks like this one, a random server can get stuck in a loop, never reaching the rest of the web. So to fix this, we can set a rule that 85% of the time, our random server just follows a link like normal. But then for about 15% of the time, they just jump to a page at random. This damping factor makes sure that we explore all possible parts of the web without ever getting stuck.</p>
</details>

通过使用马尔可夫链，佩奇和布林建立了一个更好的搜索引擎，他们称之为**PageRank**（PageRank: Google搜索引擎用来评估网页重要性的一种算法，基于网页之间的链接结构）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By using Markov chains, Page and Brin had built a better search engine, and they called it PageRank.</p>
</details>

因为它谈论的是页面如何相互作用，网页如何相互作用，也因为创始人的名字是拉里·佩奇，所以他偷偷地把这个名字加了进去。有了PageRank，**谷歌**（Google）的搜索结果变得好得多，通常能让你一次性找到你正在寻找的网站。尽管对一些人来说，这听起来像是一个糟糕的主意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because it's talking about how pages react, webpages react with each other and also 'cause the founder's name is Larry Page, so he snuck that in. With PageRank, Google got much better search results, often getting you to the site you were looking for in one go. Although, to some, this sounded like a terrible idea.</p>
</details>

其他人说：“哦，你告诉我你的搜索结果会在第一个答案中得到正确的结果？我可不想要那样，因为如果他们需要三四次尝试才能得到正确答案，那么我就有三四次机会展示广告，如果你立刻给他们答案，我就会失去他们。所以，你知道，我不明白为什么更好的搜索会更好。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Others said, "Oh, well you're telling me you get a search that will get the right result on the first answer? Well, I don't want that because if it takes them three or four chances, searches to get the right answer, then I have three or four chances to show ads, and if you get 'em the answer right away, I'm just gonna lose them. So, you know, I don't see why better search is better."</p>
</details>

但佩奇和布林不同意。他们坚信如果他们的产品远超同类，人们就会蜂拥而至。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Page and Brin disagreed. They were convinced that if their product was far superior, then people would flock to it.</p>
</details>

我会说这实际上是一个有效的民主。如果所有页面都是平等的，任何人都可以随意制造任意数量的页面。我明天就可以在我的服务器上设置十亿个页面。我们不应该把它们都视为平等的。出于好奇，我们只是查看了数据，发现我们拥有更好的搜索技术，我们意识到拥有出色的搜索功能会产生多么大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say it actually is a democracy that works. If all pages were equal, anybody can manufacture as many pages as they want. I can set up a billion pages in my server tomorrow. We shouldn't treat them all as equal. Just looking at the data out of curiosity, we found that we had technology to do a better job of search, and we realized how impactful having great search can be.</p>
</details>

于是，在1998年，他们推出了新的搜索引擎来挑战雅虎。最初，他们称之为**BackRub**，因为它是通过分析反向链接来工作的，但后来他们意识到这可能不是最有吸引力的名字。现在，他们的野心很大，基本上是要索引互联网上的所有页面，他们需要一个同样宏大的名字。所以他们想到了他们能想到的最大数字——10的100次方，一个**googol**。但当他们试图注册域名时，他们不小心拼错了。于是，谷歌诞生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, in 1998, they launched their new search engine to take on Yahoo. Initially, they called it BackRub, after the backlinks it analyzed, but then they realized that maybe that's not the most attractive name. Now, their ambitions were big to essentially index all the pages on the internet, and they needed a name equally as big. So they thought of the largest number they could think of, 10 to the power of 100, a googol. But then when trying to register their domain, they accidentally misspelled it. And so, Google was born.</p>
</details>

在接下来的四年里，谷歌推翻了雅虎，成为最常用的搜索引擎。今天，谷歌的母公司**Alphabet**市值约为2万亿美元。当谷歌的算法做出最微小的改变时，都可能产生巨大的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Over the next four years, Google overthrew Yahoo to become the most used search engine. And today, Alphabet, which is Google's parent company, is worth around $2 trillion. When Google makes even the slightest change in its algorithms, it can have huge effects.</p>
</details>

他们势头正猛。他们势头正猛的原因是他们专注，他们比做搜索的雅虎更专注，他们比用**必应**（Bing）做搜索的微软更专注。雅虎有很多流量，一直都有，他们有一些非常棒的资产，但我不认为雅虎是首选之地。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're on fire. And the reason why they're on fire is because they're focused and they're more focused than Yahoo who does search, they're more focused than Microsoft who does search with Bing. Yahoo has lots of traffic, they always have, they have some really great properties, but I don't think Yahoo is the go-to place, you know.</p>
</details>

而这个万亿美元算法的核心就是**马尔可夫链**，它只关注当前状态来预测接下来会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at the heart of this trillion dollar algorithm is a Markov chain, which only looks at the current state to predict what's going to happen next.</p>
</details>

### 马尔可夫链与大型语言模型

但在20世纪40年代，信息论之父**克劳德·香农**（Claude Shannon）开始提出一个不同的问题。他回到了马尔可夫最初的文本预测思想，但不仅仅使用元音和辅音，他专注于单个字母。他想知道，如果我不仅仅将最后一个字母作为预测因子，而是查看最后两个字母呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in the 1940s, Claude Shannon, the father of information theory, started asking a different question. He went back to Markov's original idea of predicting text, but instead of just using vowels and consonants, he focused on individual letters. And he wondered, what if instead of looking at only the last letter as a predictor, I look at the last two?</p>
</details>

通过这种方法，他得到了这样的文本。现在，它没有太多意义，但有一些可识别的词，如“乳清”（whey）、“的”（of）和“这”（the）。但香农相信他可以做得更好。所以接下来，他没有看字母，而是想，如果我使用整个词作为预测因子呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, with that, he got text that looked like this. Now, it doesn't make much sense, but there are some recognizable words like "whey", "of", and "the". But Shannon was convinced he could do better. So next, instead of looking at letters, he wondered, what if I use entire words as predictors?</p>
</details>

这给他带来了这样的句子：“头和在正面攻击一个英国作家，这个点的特点是因此另一种方法，对于那些谁曾告诉问题的信件，对于一个意想不到的。”显然，这没有任何意义，但香农确实注意到大约四个词的序列通常是有意义的。例如，“攻击一个英国作家”在某种程度上是有意义的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That gave him sentences like this, "The head and in frontal attack on an English writer that the character of this point is therefore another method for the letters that the time of who ever told the problem for an unexpected." Now, clearly, this doesn't make any sense, but Shannon did notice that sequences of four words or so generally did make sense. For instance, "attack on an English writer" kind of makes sense.</p>
</details>

所以香农了解到，通过考虑越来越多的前一个词，你可以对下一个词做出越来越好的预测。这有点像**Gmail**在预测你接下来要输入什么时所做的事情。这并非巧合，这些预测算法都是基于**马尔可夫链**的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Shannon learned that you can make better and better predictions about what the next word is going to be by taking into account more and more of the previous words. It's kind of like what Gmail does when it predicts what you're going to type next. And this is no coincidence, the algorithms that make these predictions are based on Markov chains.</p>
</details>

它们不一定使用字母，它们使用所谓的**标记**（tokens），其中一些是字母，一些是单词，标点符号等等。所以它比仅仅是字母表更大的集合。游戏很简单，我们有这个标记串，可能长达30个，我们正在问下一个标记是这个、那个还是另一个的几率是多少？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They're not necessarily using letters, you know, they use what they call tokens, some of which are letters, some of which are words, marks of punctuation, whatever. So it's a bigger set than just the alphabet. The game is simply, we have this string of tokens that, you know, might be 30 long, and we're asking what are the odds that the next token is this or this or this?</p>
</details>

但今天**大型语言模型**（Large Language Models, LLMs: 基于深度学习的计算机程序，能够理解、生成和处理人类语言）并不平等对待所有这些标记，因为与简单的马尔可夫链不同，它们还使用一种称为**注意力机制**（Attention Mechanism: 在神经网络中，允许模型在处理序列数据时，对输入序列的不同部分赋予不同权重的机制）的东西，它告诉模型应该关注什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But today's large language models don't treat all those tokens equally, because unlike simple Markov chains, they also use something called attention, which tells the model what to pay attention to.</p>
</details>

所以在“细胞的结构”（the structure of the cell）这个短语中，模型可以使用之前的上下文，比如“血液”（blood）和“线粒体”（mitochondria），来知道“细胞”（cell）最有可能指的是生物学上的细胞，而不是监狱牢房。它利用这一点来调整其预测。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in the phrase, "the structure of the cell," the model can use previous context like blood and mitochondria to know the cell most likely refers to biology rather than a prison cell. And it uses that to tune its prediction.</p>
</details>

但随着大型语言模型变得越来越普及，一个担忧是它们产生的文本最终会出现在互联网上，并成为未来模型的训练数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But as large language models become more widespread, one concern is that the text they produce ends up on the internet and that becomes training data for future models.</p>
</details>

当你开始这样做时，游戏很快就会结束。在这种情况下，你会陷入一个非常沉闷、稳定的状态，它只会一遍又一遍地重复同样的事情，直到永远。语言模型很容易受到这个过程的影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you start doing that, the game is very soon over. You come, in this case, to us, a very dull, stable state, it just says the same thing over and over and over again forever. The language models are vulnerable to this process.</p>
</details>

任何像这样存在**正反馈循环**（Positive Feedback Loop: 系统中一个变化导致另一个变化，并进一步增强第一个变化的循环过程）的系统，都将难以使用马尔可夫链进行建模。以全球变暖为例，随着我们增加空气中的二氧化碳量，地球的平均温度会升高。但随着温度升高，大气可以容纳更多的水蒸气，这是一种极其强大的温室气体。随着水蒸气增多，温度会进一步升高，从而允许更多的水蒸气。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And any system like this where we have a feedback loop, will become hard to model using Markov chains. Take global warming, for instance, as we increase the amount of carbon dioxide in the air, the average temperature of the Earth increases. But as the temperature increases, the atmosphere can hold more water vapor, which is an incredibly powerful greenhouse gas. And with more water vapor, the temperature increases further allowing for even more water vapor.</p>
</details>

所以你得到了一个正反馈循环，这使得预测接下来会发生什么变得困难。因此，有些系统马尔可夫链不适用，但对于许多其他依赖系统，它们提供了一种进行概率计算的方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you get this positive feedback loop, which makes it hard to predict what's going to happen next. So there are some systems where Markov chains don't work, but for many other dependent systems, they offer a way of doing probability.</p>
</details>

### 无记忆性：马尔可夫链的强大之处

但令人着迷的是，所有这些系统都有极其漫长的历史。你可以追溯文本中的所有字母，追溯中子所做的所有相互作用，或者追溯数周的天气。但马尔可夫和其他人发现的美妙之处在于，对于许多这些系统，你可以忽略几乎所有这些信息。你只需查看当前状态，忘记其余的，这使得这些系统具有**无记忆性**（Memoryless Property）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what's fascinating is that all these systems have extremely long histories. I mean, you could trace back all the letters in a text, trace back all the interactions of what a neutron did, or trace back the weather for weeks. But the beautiful thing Markov and others found is that for many of these systems you can ignore almost all of that. You can just look at the current state and forget about the rest, that makes these systems memoryless.</p>
</details>

正是这种无记忆性使得马尔可夫链如此强大，因为它允许你将这些极其复杂的系统大大简化，仍然做出有意义的预测。正如一篇论文所说：“解决问题通常就是烹制一个合适的马尔可夫链。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's this memoryless property that makes Markov chains so powerful because it's what allows you to take these extremely complex systems and simplify them a lot to still make meaningful predictions. As one paper put it, "Problem-solving is often a matter of cooking up an appropriate Markov chain."</p>
</details>

对我来说，这个基本的数学事实竟然源于一场那样的争斗，这有点荒谬，你知道，那场争斗真的与此无关。但所有证据都表明，正是这种要胜过涅克拉索夫的决心，促使马尔可夫完成了这项工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's kind of ridiculous to me that this basic fact of mathematics would come out of a fight like that, which, you know, really had nothing to do with it. But all the evidence suggests that it really was this determination to show up Nekrasov that led Markov to do the work.</p>
</details>

### 洗牌的数学与Brilliant学习平台

但我们还有一个问题没有回答。玩纸牌接龙时，乌拉姆怎么知道他的牌洗得完全随机？我的意思是，需要洗多少次牌才能得到完全随机的牌组排列？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there's one question we still haven't answered. When playing Solitaire, how did Ulam know his cards were perfectly shuffled? I mean, how many shuffles does it take to get a completely random arrangement of cards?</p>
</details>

如果你有一副牌，你需要洗牌，对吧？如果你洗牌，你知道，你把它分成两半，然后你这样做（洗牌声）。你需要洗多少次才能让它完全随机？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have a deck of cards, you need to shuffle it, right? How often, if you're shuffling, like, you know, you split it in half, and then you do the (cards riffling). How often do you have to shuffle it to make it completely random?</p>
</details>

两次？我猜26次。四次？我不知道，52次？好的，好的。这不是一个糟糕的猜测。七次？确实是七次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Two? I'm going with 26. Yeah, four times. Four times? I don't know, 52 times? Okay. Okay. It's not a bad guess. Seven? It is seven.</p>
</details>

是的。你可以把洗牌看作一个**马尔可夫链**，其中每个牌组排列是一个状态，然后每次洗牌是一个步骤。所以对于一副52张牌，如果你**交错洗牌**（riffle shuffle）七次，那么牌组的每种排列都大约同样可能，所以它基本上是随机的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So you can think of card shuffling as a Markov chain where each deck arrangement is a state, and then each shuffle is a step. And so for a deck of 52 cards, if you riffle shuffle it seven times, then every arrangement of the deck is about equally likely, so it's basically random.</p>
</details>

但我不能那样洗牌。所以对我来说，我这样做。你认为你需要这样洗多少次才能让它随机？你觉得呢？也许更重要的是，你会如何去计算它？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I can't shuffle like that. So for me, what I do is I do it like this. How many times do you think you have to shuffle like this to get it random? What do you think? And perhaps more importantly, how would you go about working it out?</p>
</details>

这就是今天赞助商**Brilliant**登场的地方。Brilliant是一款学习应用程序，让你亲自动手解决像这样的问题。无论是数学、物理、编程，甚至是人工智能，Brilliant的互动课程和挑战都能让你在玩乐中磨砺思维。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, that's where today's sponsor Brilliant comes in. Brilliant is a learning app that gets you hands-on with problems just like this. Whether it's math, physics, programming, or even AI, Brilliant's interactive lessons and challenges let you play your way to a sharper mind.</p>
</details>

你可以从基本的马尔可夫链到复杂的神经网络，探索大型语言模型是如何实际工作的，或者深入研究洗牌问题背后的数学。这是一种有趣的方式来建立知识和技能，帮助你解决各种问题，这又把我们带回了洗牌问题。那么，卡斯珀，答案到底是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can discover how large language models actually work from basic Markov chains to complex neural networks, or dig into the math behind this shuffling question. It's a fun way to build knowledge and skills that help you solve all kinds of problems, which brings us back to our shuffle. So Casper, what actually is the answer?</p>
</details>

实际上超过2000次。什么？超过——太疯狂了，对吧？是的。所以下次有人在游戏前提议洗牌时，确保他们做得对，七次交错洗牌，否则就不算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's actually over 2,000. What? Over- Crazy, right? Yeah. So the next time someone offers to shuffle before a game, make sure they're doing it right, seven riffles or it doesn't count.</p>
</details>

但有趣的部分不仅仅是知道这一点，而是理解为什么，并看到一个简单的问题如何能引导你走向一些令人惊讶的复杂数学。这就是Brilliant的全部意义所在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the interesting part isn't just knowing that, it's understanding why and seeing how a simple question can lead you to some surprisingly complex mathematics. And that's what Brilliant is all about.</p>
</details>