---
area: society-systems
category: technology
companies_orgs:
- Drexel University
- DENSO
- NASA
- New York University
- Android
- Apple
date: '2024-09-30'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Samuel Finley Breese Morse
- Bernard Silver
- Norman Joseph Woodland
- David Allais
- Masahiro Hara
- Irving S. Reed
- Gustav Solomon
- Richard Hamming
- MattKC
products_models:
- Code 49
- PDF417
- Vericode
- UPC barcode
- Saily
project:
- historical-insights
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=w5ebcowAJD8
speaker: veritasium
status: evergreen
summary: 本文深入探讨了QR码的起源、技术原理及其在全球范围内的普及。从摩尔斯电码到条形码，再到QR码的二维数据矩阵，文章详细介绍了信息编码、错误纠正（如Reed-Solomon码）和掩码模式等核心技术。它揭示了QR码如何从工业用途发展成为日常生活中不可或缺的工具，并讨论了其成功背后的开放专利策略以及未来的安全挑战。
tags:
- data
- digital-transformation
- error-correction
- history
- technology
title: QR码的诞生与演变：从摩尔斯电码到全球通用工具
---

### QR码的崛起：从最初的质疑到无处不在

当**QR码**（Quick Response Code: 一种二维条码，用于存储大量信息）首次出现时，我最初觉得它们很糟糕，认为它们永远不会流行起来，当时有一张流程图很好地表达了我的这种感受。在我看来，问题在于QR码外观丑陋，对人们来说毫无意义。我宁愿直接看到一个网站或一个我可以谷歌搜索的词。QR码是机器的语言，而我是人类。但我错了。QR码显然变得如此有用，以至于它们现在无处不在，从门票到餐厅菜单和广告，无所不包。在某些国家，它们是交换资金最常见的方式。而QR码的故事，其实是一个非常人性化的故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When QR codes first came out, I thought they were awful, never going to catch on. This is a flow chart from the time that really resonated with me. The problem as I saw it was that QR codes are ugly, and they mean nothing to people. I would rather just see a website or a word that I could Google. QR codes are a language for machines, and I am a human. But I was wrong. QR codes obviously turned out to be so useful that they are now ubiquitous, used in everything from tickets to restaurant menus and advertising. In some countries, they're the most common way to exchange money. And the story of QR codes is a very human one.</p>
</details>

### 数字通信的起源：塞缪尔·摩尔斯与电报

这些棋盘格图案的起源实际上可以追溯到我们首次尝试将信息数字化的努力。1825年，一位著名的画家与他的妻子和两个孩子住在康涅狄格州的纽黑文。有一天，他获得了重大突破，受邀为美国独立战争英雄拉斐特侯爵绘制肖像。尽管他的妻子随时可能生下他们的第三个孩子，但这个机会不容错过，他匆忙赶往华盛顿特区，拉斐特在那里等候。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The origin of these checkerboard patterns actually dates back to our first efforts at digitizing information. In 1825, there was a renowned painter who lived in New Haven, Connecticut, with his wife and two kids. His big break came one day when he was invited to paint a portrait of the Marquis de Lafayette, a hero of the American Revolution. Even though his wife was expecting their third child any day, the opportunity was too good to pass up, and he hastily set off for Washington DC where Lafayette was waiting.</p>
</details>

画家在那里写信给妻子，描述了他与拉斐特的首次会面，信末写道：“很快会再写信。爱所有的孩子。万分匆忙，但一如既往地热情爱恋，你挚爱的丈夫。”几天后没有回音，一名信使送来一封信，说他的妻子分娩后病重。画家焦急地赶回家。他日夜兼程，骑马坐车，几天后终于回到纽黑文。但为时已晚，他的妻子已经去世了。不仅如此，他还错过了葬礼，她的遗体已被安葬。这位画家的名字是**塞缪尔·芬利·布里斯·摩尔斯**（Samuel Finley Breese Morse: 电报和摩尔斯电码的发明者）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There the painter wrote to his wife describing his first meeting with Lafayette, signing off with the words, "Will write again soon. Love to all the children. In the greatest haste, but with the same ardent affection as ever, thy loving husband." After a few days with no reply, a courier delivered a letter which said his wife was ill after childbirth. Worried, the painter rushed home. He traveled by horse and wagon, day and night, managing to arrive back in New Haven in several days. (melancholic music) But it was far too late. His wife had died. Not only that, he had missed the funeral. Her body was already buried in the ground. The painter's name was Samuel Finley Breese Morse. (inquisitive music)</p>
</details>

从那天起，摩尔斯开始寻找一种更快地进行远距离通信的方法。他在纽约大学找到一份工作，在那里听取了关于电学的讲座，这在当时是一个迅速发展的领域。1836年，他与约瑟夫·亨利（Joseph Henry）和阿尔弗雷德·威尔（Alfred Vail）一起，设计出一种可以通过电线发送电脉冲的机器。这并非第一个电报机，但它是最简单的。在英国，另一个团队建立了一系列电路，通过移动五根磁针来指示字母和数字。摩尔斯的系统只需要一个电路，但这种设备的简单性要求一种更巧妙的信息编码方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From that day forward, Morse set out to find a faster way to communicate over long distances. He got a job at New York University where he attended lectures on electricity, a rapidly developing field at the time. In 1836, along with Joseph Henry and Alfred Vail, he devised a machine that could send electrical pulses along a wire. This was not the first electric telegraph, but it was the simplest. In the UK, another team had set up a series of circuits to move five magnetic needles to point at letters and numbers. Morse's system required only a single circuit, but the simplicity of the apparatus demanded a cleverer method of encoding information.</p>
</details>

在电路中，你可以发送短脉冲或长脉冲。摩尔斯将这些脉冲变成了点和划。最常见的字母可以通过一次按键发送，E是一个点，T是一条划。其他字母则根据频率排列，并被分配了越来越复杂的代码。这些符号原本应该在接收端的纸带上打印出来，但操作员很快意识到他们可以通过声音识别字母。这加快了信息发送和接收的速度，因此**摩尔斯电码**（Morse code: 一种用点和划表示字母和数字的电码）成为快速消息传递的国际标准。它广泛应用于军事、海上通信和航空领域，普遍认可的求救信号SOS代表什么？什么都不代表，它只是在摩尔斯电码中易于发送和识别。摩尔斯电码彻底改变了通信，但在下一个世纪，它将彻底改变一个完全不同的行业。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On the circuit, you could send short or long pulses. Morse turned these into dots and dashes. The most common letters could be sent with a single key press, a dot for an E and a dash for a T. The other letters were arranged by frequency and assigned increasingly complex codes. These symbols were meant to be printed at the receiver on a paper strip, but operators soon realized they could recognize the letters just by the sound. (Morse code beeping) This sped up the rate at which information could be sent and received, so Morse code became an international standard for rapid messaging. (Morse code rapidly beeping) Widely used in the military, maritime communications, and aviation, the universally recognized distress call, SOS, what does it stand for? Nothing, it just happens to be easy to send and recognize in Morse code. Morse code revolutionized communication, but in the next century, it would transform a totally different industry.</p>
</details>

### 从摩尔斯电码到条形码：超市效率的革命

在20世纪40年代末，**伯纳德·西尔弗**（Bernard Silver: 条形码的共同发明者）是宾夕法尼亚州德雷塞尔大学的一名工程系学生。有一天，他无意中听到一家当地连锁超市的总裁向工程学院院长询问，是否有办法加快结账过程。当时，收银员必须手动输入每件商品及其价格，这个过程如此繁琐和重复，以至于许多收银员都患上了腕管综合征。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the late 1940s, Bernard Silver was an engineering student at Drexel University in Pennsylvania. One day, he overheard the president of a local supermarket chain asking the engineering dean to find a way to speed up the checkout process. At that time, cashiers had to type in each item and its price by hand. A process so tedious and repetitive that many cashiers had developed carpal tunnel syndrome.</p>
</details>

西尔弗将这个问题告诉了他的朋友**诺曼·约瑟夫·伍德兰**（Norman Joseph Woodland: 条形码的共同发明者），两人开始进行实验。经过几次失败的尝试后，伍德兰搬到了佛罗里达州。有一天在海滩上，他用沙子画了一些摩尔斯电码的点和划，这对他作为一名童子军来说非常熟悉。他回忆道：“我只是把点和划向下延伸，并把它们变成了窄线和宽线。”于是，第一个条形码诞生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Silver told his friend Norman Joseph Woodland about the problem, and together, they began experimenting. After several false starts, Woodland moved down to Florida. And one day on the beach, he drew some dots and dashes of Morse code in the sand, something he was very familiar with as a Boy Scout. He recalls, "I just extended the dots and dashes downwards and made narrow lines and wide lines out of them," and thus the first barcode was created.</p>
</details>

从这个不起眼的开端，演变出了**通用产品代码**（UPC barcode: 一种广泛用于商品识别的条形码）或UPC条形码，它能够存储一个简单的12位数字字符串。它通过激光扫描来读取，并检查反射了多少光线来读取黑白线，本质上就是点和划。在条形码的开头、中间和结尾都放置了一对垂直线，以确保扫描仪正确读取代码。代码分为左右两半。两侧的数字的黑白线是翻转的，这样扫描仪即使倒着读取也能区分左右。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From this humble beginning, evolved the universal product code or UPC barcode, capable of storing a simple string of 12 numbers. It's read by scanning a laser across it and checking how much light is reflected to read the black and white lines, essentially as dots and dashes. A pair of vertical lines are placed at the beginning, middle, and end to ensure the scanner reads the code properly. The code is divided into left and right halves. Numbers at either side have their black and white lines flipped so that the scanner can tell left and right apart, even while reading upside down.</p>
</details>

当正向查看时，左侧的数字通常指定制造商，右侧指定产品。制造商实际上支付巨额资金来为自己保留一定数量的数字，以便他们可以独家注册自己的产品。通过这种方式，条形码的12位数字唯一地指定了你购买过的每一件杂货。这罐Jif花生酱无论在世界何处都能通过相同的12位数字识别。所有形式的花生酱，无论是顺滑的、脆的、需要搅拌的、免搅拌的、无糖的、低钠的，所有品牌都有自己独特的条形码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When viewed upright, the numbers typically specify the manufacturer on the left and the product on the right. Manufacturers actually pay large sums of money to reserve a given amount of numbers to themselves so that they can exclusively register their products. (scanner beeps) In this way, the 12 digits of a barcode uniquely specify every single grocery item you've ever bought. This jar of Jif peanut butter is identified by the same 12 digits no matter where in the world it's found. And all forms of peanut butter, smooth, crunchy, stir, no-stir, sugar-free, low-sodium across all brands get their own unique barcode.</p>
</details>

我们是否会用完条形码？12位数字可以组合提供10的12次方，即一万亿种不同的可能序列。这应该绰绰有余，即使公司不断制造像Sour Patch Oreos和Flaming Hot Mountain Dew这样的产品。但有一个问题，最后一位数字并非独立于其他数字。条形码的创建者意识到它可能会被刮伤、弄脏或篡改，因此他们保留了最后一位数字来验证条形码是否完整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Will we ever run out of barcodes? Well, 12 digits could combine to provide 10 to the 12, that is a trillion different possible sequences. That should be more than enough, even if companies keep making stuff like Sour Patch Oreos and Flaming Hot Mountain Dew. But there is a catch. The last digit is not independent of the others. The barcode creators were aware that it could get scratched, stained, or tampered with, so they reserved the last digit to verify that the barcode is complete.</p>
</details>

取任意条形码，将奇数位置的数字相加，将结果乘以三，然后将偶数位置的数字之和加到结果中，再将这个数字除以10取余数。如果余数为零，则校验位为零。否则，校验位是10减去这个余数。如果扫描仪无法读取条形码的任何一位数字，它可以使用最后一位数字通过这个算法反向计算出它必须是什么。但如果两位数字损坏了，那么我们就束手无策了。在这种情况下，我们必须手动输入条形码下方打印的数字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Take any barcode and sum the digits at odd-numbered positions, multiply this result by three, add the digit sum at even-numbered positions to the result, and take the remainder when this number is divided by 10. If this remainder is zero, then the check digit is zero. Otherwise, the check digit is 10 minus this remainder. (bright electronic music) If a scanner is unable to read any one digit of the barcode, it can use the final digit to back-calculate what it must be using this algorithm. But if two digits are damaged, well, then we're out of luck. In that case, we have to type in the numbers printed below the barcode.</p>
</details>

因此，如果没有最后一位数字，唯一可能的组合数量是10的11次方，即1000亿种选择。迄今为止，已注册了12.4亿个条形码，这个数字每天都在增加，所以它们不会永远持续下去。但这并不是人们开始寻找条形码替代品的原因。真正的原因是单个条形码可以存储的信息量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So without that last digit, the number of unique possibilities is 10 to the 11 or 100 billion options. To date, 1.24 billion barcodes have been registered, a number that is rising every day, so they won't last us forever. (scanner beeping) But that's not why people began to look for alternatives to barcodes. It was really the amount of information a single barcode could store.</p>
</details>

### 条形码的局限与二维码的兴起

1986年，英国的牛群开始出现一种奇怪的脑部疾病症状，即**牛海绵状脑病**（Bovine Spongiform Encephalopathy: 俗称“疯牛病”），简称疯牛病。当牛吃了含有朊病毒（prions: 错误折叠的蛋白质）的饲料时，这种疾病就会传播。如果人们吃了含有受感染牛脑或脊髓组织牛肉，他们可能会感染一种相关的脑部疾病，这种疾病会使你的大脑变成海绵状。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1986, cattle in the UK began showing symptoms of a curious brain disease, bovine spongiform encephalopathy, or mad cow disease for short. It is spread when cattle ate feed containing prions, misfolded proteins, and if people ate beef containing tissue from the brain or spinal cord of infected cattle, they could contract a related brain illness that literally turns your brain into a sponge.</p>
</details>

由于当时没有检测活牛疯牛病的方法，数百万头牛被扑杀。卫生官员寻求一种方法来追踪牛肉进口的来源。但对于每一块牛肉所需的所有信息来说，条形码是不足够的。美国发明家**大卫·阿莱斯**（David Allais）试图通过将许多条形码堆叠在一起解决这个问题。结果是**Code 49**（一种多行条形码），它看起来像一个书架。这实际上是**PDF417**（一种堆叠式二维条形码，常用于登机牌）的前身，PDF417是一种常用于航空登机牌的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, as no test could detect mad cow disease in living cows, millions of cattle were culled. Health officials sought a method to track sources in imports of beef. But with all the information this would require for any one piece of beef, barcodes were insufficient. American inventor David Allais tried to solve the problem by stacking many barcodes on top of each other. The result, Code 49, looked like a bookshelf. This is actually the predecessor of PDF417, a code often used on airline boarding passes.</p>
</details>

但Code 49并没有解决数据量问题。充其量，它只是将条形码可以携带的信息量增加了几倍。一种更有效的方法是将条形码扩展到二维，创建一个数据矩阵。美国国家航空航天局（NASA）在1994年尝试使用**Vericode**（一种早期的二维条形码）来追踪和识别航天飞机零件。这种代码由早期的数码相机而非激光读取，并且最初是专有的。大约在同一时期，日本汽车零部件制造商电装（DENSO）的工程师**原昌宏**（Masahiro Hara: QR码的发明者）对于在填充同一箱汽车零部件时必须扫描多个条形码感到沮丧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But Code 49 didn't solve the data quantity problem. At best, it multiplied the information a barcode could carry by a handful. A more efficient way was to extend barcodes into two dimensions, creating a data matrix. NASA tried this in 1994 with Vericode, used to track and identify space shuttle parts. This code was read by early digital cameras rather than lasers and was initially proprietary. Around the same time, Masahiro Hara, an engineer at a Japanese auto parts manufacturer, DENSO, was getting frustrated at having to scan multiple barcodes for filling in the same box of car components.</p>
</details>

### 构建QR码：原昌宏的灵感与字节编码

原昌宏决定独自开发一种替代方案。他从一个不寻常的来源获得了灵感。为了理解信息是如何存储在QR码中的，我将按照原昌宏最初构思的方式，用一个围棋盘来亲自构建一个QR码。我准备了常用的黑白棋子，白色代表零，黑色代表一。我们将在棋盘上编码我们YouTube频道的链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hara set out to develop an alternative on his own. He took inspiration from an unusual source. To understand how information is stored in a QR code, I am going to build one myself in the way Masahiro Hara first conceptualized it, with a Go board. I have the usual black and white stones. White represents zero. Black represents one. And we're going to encode the link to our YouTube channel on this board.</p>
</details>

第一步是将“www.youtube.com/veritasium”转换为二进制的零和一，我们将使用**字节编码**（Byte Encoding: 将字符转换为二进制字节序列的方法）来完成。字节编码使用**ASCII**（American Standard Code for Information Interchange: 美国信息交换标准代码），它本身起源于摩尔斯电码。每个字符都被分配一个从1到256的数字。然后我们将ASCII十进制数转换为其二进制形式。由于256是2的8次方，我们可以使用八个二进制位组合来表示所有ASCII字符。这八个位构成一个字节的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first step is to convert www.youtube.com/veritasium into ones and zeros, and we'll do that using byte encoding. By encoding uses ASCII, which itself has roots in Morse code. Every character is assigned a number from 1 to 256. Then we convert the ASCII decimal into its binary form. Since 256 is 2 to the power of 8, we can use the eight binary bit combinations to represent all ASCII characters. These eight bits make up one byte of information. (upbeat techno music)</p>
</details>

字母W被分配的ASCII十进制数是119，即01110111。对“www.youtube.com/veritasium”中的所有字符进行同样的操作，这就是该字符串的二进制形式。它有26个字符长，因此占用26字节的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The letter W is assigned the ASCII decimal 119 or 01110111. Doing the same for all characters in www.youtube.com/veritasium, this is what the string looks like in binary. This is 26 characters long, so it takes up 26 bytes of information.</p>
</details>

现在，我们的棋盘是25x25的，这被称为**版本2 QR码**。但QR码有许多不同尺寸，所有这些都可以通过你的手机读取。原昌宏的版本1 QR码是21x21的，而今天最大的版本是177x177。这足以容纳三千字节的信息。仅仅26个这样的QR码就足以存储阿波罗11号（Apollo 11）计算机将人类送上月球所需的所有信息。一位名叫**MattKC**的程序员甚至将电脑游戏《贪吃蛇》编码成一个版本40的QR码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, our board is 25 by 25. This is known as a version 2 QR code, but there are many different sizes, all readable by your phone. Hara's version 1 QR code was 21 by 21, and the largest version today is 177 by 177. That is large enough to hold three kilobytes of information. Just 26 of these would've been enough to store all the information Apollo 11's computer needed to send humans to the moon. (bright music) One programmer (MattKC) even coded up a computer game, Snake, into a version 40 QR code.</p>
</details>

### QR码的结构：图案、版本与数据排列

QR码周围的区域必须是空白且颜色均匀的，这被称为**静区**（quiet zone）。QR码的一个显著特征是角落里的三个方形图案。这些**定位图案**（position squares）让读取器能够识别代码的方向。现在，几乎所有的QR码在最后一个角上也有第四个方形，但它更小，因此更难发现。这是**校准图案**（alignment pattern）。它用于在从不同距离或极斜角度读取时重新调整QR码的大小。校准图案相对于定位图案的相对大小和距离，使得软件能够将其重新调整为正确的方形。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The region around a QR code must be empty and of uniform color. This is the quiet zone. A distinguishing feature of QR codes is the three square patterns in the corners. These position squares allow the reader to identify the orientation of the code. Now, almost all QR codes also have a fourth square in the last corner, but it's smaller and, hence, trickier to spot. This is the alignment pattern. It's used to rescale the QR code when it's read from varying distances or from crazy oblique angles. The relative size and distance of the alignment square with respect to the position squares allows the software to rescale it into a proper square.</p>
</details>

定位图案旁边是纯白色的条带，将它们与代码的其余部分隔离开来。这些是**时序图案**（timing strips），像斑马线一样连接左上角的定位图案与其他两个。每个QR码都有这些交替的条带，你应该留意它们。所有尺寸的QR码看起来都一样，所以这会告诉你的手机它是哪个版本，从而知道预期的数据量。如果有五个交替的方块，它是版本一；如果有九个，它是版本二，依此类推。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next to the position squares are plain white strips that isolate them from the rest of the code. And these are timing strips, zebra pedestrian crossings which connect the top left position square with the other two. Every QR code has these alternating strips. You should look out for them. QR codes of all sizes visibly look the same, so this tells your phone which version it is and, therefore, how much data to expect. If there are five alternating squares, it's version one. If there are nine, it's version two, and so on.</p>
</details>

紧邻时序图案的是**格式信息区**（format strips），其中包含如何扫描代码的规则。我暂时将红色棋子放在它们占据的空间。每个QR码还有另一个特征：紧邻右下角定位图案的一个像素，它总是黑色的。我问原先生这是否有特殊意义，但他回答没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And next to those are format strips that contain rules for how to scan the code. I'm placing red stones in the space they occupy for now. There is another feature every QR code has. This one pixel adjacent to the bottom right position square, it is always dark. I asked Hara-san if it had any special significance, but he said no.</p>
</details>

所有剩余的空间都用于数据存储。QR码内的数据总是从右下角开始。这里，前四个方块携带四个位，用于指定数据格式：如果是纯数字，则为0001；如果是字母数字（即大写字母和数字），则为0010；如果是以字节存储的信息，则为0100；如果是日文汉字，则为1000。接下来的八位用于指示消息中的字符数。因此，由于我们有26个字符，那应该是00011010。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of this remaining space is for data storage. Data inside a QR code always starts at the bottom right corner. Here, the first four squares carry four bits that specify the data format: 0001 if it's just numbers; 0010 if it's alphanumeric, so capital letters and numbers; 0100 if it's information stored in bytes; and 1000 for Japanese kanji. The following eight bits are used to indicate the number of characters in our message. So since we have 26 characters, that should be 00011010.</p>
</details>

接下来，我们开始以八位、两列的单元格排列“youtube.com/veritasium”的字节。它们遵循一种之字形（zigzag）模式，蜿蜒向上到达左上角。在每个代表字节的单元格中，最高有效位（对应2的7次方）位于右下角，而最低有效位（或2的0次方）位于对角线另一端。字母W的01110111将因此这样填充。我们将继续填充其余部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we start arranging our bytes for youtube.com/veritasium starting in eight-bit, two-column cells;. They follow a zigzag pattern that snakes its way to the top left. Within each cell that represents a byte, the most significant bit, corresponding to two to the seven, is at the bottom right. And the least significant, or two to the zero, is at the opposite end. 01110111 for w will hence be filled like this. And we'll follow along with the rest.</p>
</details>

一旦我们填充完“www.you”的字节，在四个位之后，我们遇到了校准图案。为了放入下一个T，我们只需绕过它，并对代码的其他任何固定区域做同样的处理。因此，我们以相同的之字形模式继续填充数据。在我们完成“www.youtube.c”之后，单元格开始看起来不那么规则，更像俄罗斯方块。但我们逐字节放置棋子的方式保持不变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once we fill in the bytes for www.you, we encounter the alignment pattern after four bits. To put in the next T, we simply bypass it and do the same for any of the other fixed regions of the code. Thus, we keep filling in our data in the same zigzag pattern. After we complete www.youtube.c, the cells start looking less regular and more Tetris-like. But the way we put the stones byte after byte remains the same.</p>
</details>

### 纠错码：QR码稳健性的秘密

最后一个字母M的最后八位也填充完毕了。但等等，我们只覆盖了QR码大约一半的空间。这是因为所有剩余的空间都用于**冗余**（redundancy）。这些额外的**纠错码**（error-correction code）字节允许我们在QR码损坏时重建信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(hopeful music) And there go the last eight bits for the last letter M. But wait a minute, we've only covered about half of our QR code. Well, that's because this whole remaining space is reserved for redundancy. These extra bytes of error-correction code allow us to reconstruct information if the QR code is damaged. (menu whooshing)</p>
</details>

对于一个完全完好的QR码，纠错功能还可以实现其他事情，比如在中心放置公司标志，就像本视频的赞助商Saily一样。我经常旅行，最近在德国，现在在澳大利亚，很快要去英国。但无论你在哪里，都需要一部能正常工作的手机。要么你支付家庭运营商高昂的漫游费，要么你必须找地方购买当地的SIM卡，插到手机里，然后祈祷它能用。本视频的赞助商Saily让在150多个国家设置手机套餐和数据变得轻而易举。你可以选择所需的数据量和使用时长，而且比漫游便宜得多。我很快就要去英国了，以下是我如何快速使用Saily设置e-SIM卡：我只需点击国家，选择套餐，然后激活e-SIM。然后当我落地时，我将自动连接到当地网络，没有任何隐藏费用。就是这样。无需寻找公共Wi-Fi，也无需在机场排队购买实体SIM卡。使用Saily，你只需设置一次，就能始终保持连接。如果你发现手机不兼容e-SIM卡，你将获得全额退款。所以，要免费试用Saily，请访问Saily.com/veritasium或点击描述中的链接。使用代码VERITASIUM，首次购买即可享受独家15%的折扣。那就是Saily.com/veritasium，或者你可以扫描这个方便的QR码获得15%的折扣。感谢Saily赞助本视频的这一部分，现在我们回到构建自己的QR码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For a fully intact QR code, error correction makes something else possible, putting a company logo at the center, just like the sponsor of this video, Saily. Now, I travel a lot. Recently, I was in Germany. Right now, I'm in Australia, and soon, I'm going to the UK. But wherever you are, you need to have a working phone. Either you pay your home carrier's hefty roaming fees, or you have to find a place to buy a local SIM card, put it in the phone, and hope it works. This video's sponsor Saily makes it easy to set up a cell plan and data in more than 150 countries. You can pick how much data you want and how long you want it for. And it is so much cheaper than roaming. I'm actually going to the UK really soon, and here's how quickly I can set up an e-SIM with Saily. All I have to do is click on the country, select a plan, and activate the e-SIM. Then when I land, I'll automatically connect to a local network with no hidden charges. That's it. There's no need to hunt for public wifi. And you don't have to stand in line at the airport to get a physical SIM. With Saily, you set it up once, and you'll always be connected. And if you find out that your phone isn't compatible with e-SIMs, you will get a full refund. So to check out Saily for free, go to Saily.com/veritasium or click the link in the description. Use the code VERITASIUM to get an exclusive 15% off your first purchase. That's Saily.com/veritasium, or you can scan this handy QR code to get 15% off. So I wanna thank Saily for sponsoring this part of the video, and now back to building our own QR code. (playful music)</p>
</details>

QR码提供四种级别的纠错：低级（Low），即使代码缺失7%也能读取；中级（Medium），可处理14%的缺失；四分位级（Quartile），25%；以及高级（High），最高可达30%。这意味着即使QR码缺失近三分之一，也能正常读取。更高级别的纠错需要更多的空间。因此，了解代码中有多少是用于纠错至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">QR codes offer four levels of error correction: low, which can still be read with 7% of the code missing; medium, which can handle 14%; quartile, 25%; and high, up to 30%. This means a QR code could still be read properly, even with nearly 1/3 of it missing. Higher levels require more space for error correction. So knowing how much of the code is error correction is vital.</p>
</details>

这些信息通过两种方式受到保护。首先，纠错级别在格式信息区中指示，并且在两个位置完全相同。避免错误的最简单方法是复制信息。在这里，我们将通过在左上角放置一个蓝色和一个黄色棋子来选择M级别。那么，如果这部分损坏了怎么办？我们在左下角开始的第二个格式信息区中有一个副本。格式信息区还包含另外三位重要信息，我们稍后会讲到。所以现在，我只是在两个副本中都放上三块蓝色棋子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This information is protected in two ways. First, the level of error correction is indicated in the format strip, which is present identically in two places. The simplest way to avoid errors is to duplicate the information. Here we'll choose the M level by placing one blue and one yellow stone here at the top left. So what if this part gets damaged? We have a copy in the second format strip starting at the bottom left. The format strip contains three more bits of important information that we'll get to later. So for now, I'm just gonna put down three blue stones in both copies.</p>
</details>

但格式信息区的其余部分呢？这是第二层保护。其他这10位都旨在纠正前五位中的错误。那么这是如何运作的呢？假设我只想向你传达两种纠错级别：低或高。如果传输中有一位翻转为01或10，很容易知道发生了错误，但无法知道原始消息是什么。一个简单的解决方法是添加另一位。所以，低是000，高是111。现在，它们位于立方体的相对两端，因此距离更远。如果你收到011，那么预期的消息更可能是111，所以很容易纠正。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what about all the rest of the format strip? Well, this is the second layer of protection. These other 10 bits are all just designed to correct mistakes in the first five bits. So how does this work? Let's say I only wanted to communicate two levels of error correction to you, low or high. If one of the bits flips in transmission to 01 or 10, it's easy to know that an error has occurred, but no way to know which the original message was. An easy way to fix this is to add another bit. So 000 for low, 111 for high.</p>
</details>

在这种方案中，唯一允许的**码字**（code words）是000和111。其余的作为不允许的缓冲区来指示传输中的错误。允许的码字应该尽可能地远。在这里，它们相隔三个顶点。这被称为**汉明距离**（Hamming distance: 衡量两个等长字符串之间不同字符数量的指标），以**理查德·汉明**（Richard Hamming: 纠错码领域的先驱）命名，他开创了纠错领域。对于汉明距离为N的情况，你可以在二进制字符串中纠正多达(N-1)/2个错误，例如在前面的例子中纠正一位翻转。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, these are at opposite ends of a cube, and hence, they are further apart. If you then receive 011, it's more likely that the intended message was 111, so it's easy to correct. In this scheme, the only allowed code words are 000 and 111. The rest act as disallowed buffers to indicate errors in transmission. The allowed code words should be as far apart as possible. Here, they are three vertices apart. This is known as the Hamming distance, after Richard Hamming who pioneered the field of error correction. For a Hamming distance of N, you can correct up to N - 1 over 2 errors in a binary string, so one bit flip in the previous example.</p>
</details>

回到我们格式字符串的五位。如果我只想传达全零或全一，我可以将它们放在一个五维**超立方体**（hypercube）的相对角上。然而，我们的字符串包含所有2的5次方，即32种零和一的组合作为有效码字。因此，为了像以前一样提供缓冲区，我们可以将5位字符串扩展为15位字符串。现在，这32个有效码字每个都相隔七个顶点，即汉明距离为七，这意味着我们可以纠正多达三位翻转错误。最简单的方法是使用查找表。该表接收一个稍微误读的顶点，并找到最接近的有效顶点，这很可能是预期的码字。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So back to the five bits of our format string. If I only wanted to communicate all zeros or all ones, I could place them at opposite corners of a five-dimensional hypercube. However, our string includes all 2 to the 5, or 32, combinations of ones and zeros as valid code words. So to provide buffers like before, we can extend the 5-bit string into a 15-bit string. And now the 32 valid code words are each separated by seven vertices, or a Hamming distance of seven, which means we can correct up to three bit flip errors. The easiest way to do this is using a lookup table. The table takes a slightly misread vertex and finds the closest valid vertex, likely the intended code word.</p>
</details>

但对于我们的主要QR码数据，我们需要一个更高效的方案，一个不需要查找表或将数据大小加倍或三倍的方案。假设我想给你发送一个消息，包含四个数字1、-2、3和5。如果我只发送这些数字，其中一个在传输中可能会损坏，而你却不知道发生了错误，也不知道哪个数字错了。所以在发送消息之前，我们制定了一个计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But for our main QR code data, we need a far more efficient scheme, one that doesn't require lookup tables or doubling or tripling our data size. (bright music) Let's say I wanna send you a message that is the four numbers 1, -2, 3 and 5. If I just send these numbers, one of them could get corrupted in transmission, and you wouldn't know that an error had occurred or which digit was wrong. So before I send the message, we come up with a plan.</p>
</details>

首先，我不会给你发送四个数字，而是发送六个。前四个是我的实际消息，最后两个A和B将帮助你检查是否有任何错误。现在，我希望你将这六个数字视为一个五次多项式的系数，我将选择A和B的值，使得这个多项式也可以写成一个三次多项式q(x)乘以(x-1)(x-2)的形式。我们可以将最后两项设置为x减去任何数字，但为了简单起见，我们选择1和2。这样，当你收到我的多项式时，你知道如果你代入x=1或x=2，你应该得到零，因为我是这样构造多项式的。如果你没有得到零，你就知道传输中发生了错误。它们被称为**伴随式**（syndromes: 在纠错码中，用于检测和定位错误的值）。这是一个恰当的术语，因为伴随式被定义为一组同时出现并表征特定异常的迹象。如果消息多项式在任何伴随式值处不为0，则代码中存在错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, instead of sending you four numbers, I will send six. The first four are my actual message, and the last two, A and B, will help you check if there were any errors. Now, I want you to treat these six numbers as the coefficients of a degree-five polynomial, and I will pick the values of A and B so that this polynomial could also be written in the form of a degree-three polynomial, call it q of x, times (x - 1)(x - 2). Now, we could set these last two terms to be x minus any number, but for simplicity, let's say we pick one and two. That way, when you receive my polynomial, you know that if you plug in x = 1 or x = 2, you should get zero for both because that's how I constructed the polynomial. And if you don't get zero, you know there has been an error in transmission. They are called syndromes. Which is an apt term since syndromes are defined as a group of signs that occur together and characterize a particular abnormality. If the message polynomial is not 0 at any of the syndrome values then there is an error in the code.</p>
</details>

那么，在我们的例子中，我如何找到'a'和'b'的值呢？我取不含'a'和'b'的多项式，并将其除以(x-1)(x-2)。我得到一个三次多项式，这就是我想要的，但还有一个余数是37x-30。所以我可以把它移到左边。为了让多项式呈现我想要的形式，'a'必须是负37，'b'必须是正30。所以我发送消息1、-2、3、5、-37和30。你可以代入x=1和x=2，如果两者都得到零，你就知道消息发送正确了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how do I find the values of 'a' and 'b' in our example? Well, I take the polynomial without 'a' and 'b' and divide it by x - 1, x - 2. I get a degree-three polynomial, which is what I want, but there is also a remainder of 37x - 30. So I can move this to the left-hand side. For the polynomial to take the form I want, 'a' must be negative 37 and 'b' positive 30. So I send the message 1, -2, 3, 5, - 37, and 30. You can plug in x = 1 and x = 2, and if you get zero for both, you know the message was sent correctly.</p>
</details>

但如果传输中出现了错误怎么办？假设在第四个位置，数字变成了六。那么，如果你在x=1和x=2处求值，多项式就不再是零了。为了找出错误发生在哪里，你一次将每个系数设置为一个变量。然后找到该变量的值，将多项式在x=1时设为0。你对x=2重复此操作。你会发现这两个值是不同的。这表明第二个系数不是错误。你对所有其他系数都发现相同的情况，直到你到达发生错误的那个系数。在这里，这两个值不仅相等，而且还等于原始传输的数字，即五。所以这种方法允许我们以适度增加数据大小的方式检查和纠正错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what if there was an error in transmission? Say at position four, the number has changed to a six. Well, now if you evaluate at x = 1 and 2, the polynomial is no longer zero. To figure out where the error occurred, one at a time, you set each coefficient to be a variable. Then find the value of that variable, setting the polynomial equal to 0 at x = 1. You repeat this for x = 2. And what you find is that the two values are different. This indicates that the second coefficient was not the error. You find the same for all the other coefficients, except when you reach the one where the error occurred. Here, not only are the two values equal, they're also equal to the originally transmitted number. That is, five. So this method allows us both to check and correct errors with only a modest increase in data size.</p>
</details>

这是一个**里德-所罗门纠错码**（Reed-Solomon error correcting code: 一种强大的纠错码，广泛应用于数据存储和传输）的玩具示例，由数学家**欧文·S·里德**（Irving S. Reed）和**古斯塔夫·所罗门**（Gustav Solomon）于1960年开发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(inquisitive music) This is a toy example of a Reed-Solomon error correcting code, developed by mathematicians Irving S. Reed and Gustav Solomon in 1960. (upbeat music) (QR code whooshing)</p>
</details>

以我们描述的暴力破解方式解码里德-所罗门码会很快变得非常耗时。事实上，当旅行者号（Voyager）航天器漂浮到外太阳系时，美国国家航空航天局（NASA）的工程师们知道他们的信噪比会变得极其微弱。但里德-所罗门码的潜力如此之大，以至于他们在发射前安装了一个实验性编码器，赌注是更智能的编码算法将在未来十年内出现。而这正是发生的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The job of decoding Reed-Solomon codes in a brute-force way, as we described, can quickly get intensive. In fact, as the Voyager spacecraft floated into the outer solar system, NASA engineers knew their signal-to-noise ratio would get incredibly small. But the promise of Reed-Solomon codes was such that they put an experimental encoder in before launch, wagering that that smarter encoding algorithms would follow in the next decade. And that's exactly what happened.</p>
</details>

直到今天，我们仍然能够辨认出旅行者号日益微弱的低语，这要归功于里德-所罗门码。这些代码还确保你的旧CD或DVD即使有多次划痕也能播放你喜欢的歌曲和电影。它们也是QR码在损坏时仍能工作的原因。在QR码中，所有数据，从数据类型、字符长度字节、我们的消息字节到最终的填充，都按顺序排列并转换回ASCII十进制数。使用这些数据拟合高次多项式很容易导致系数爆炸。因此，里德-所罗门编码使用**有限域算术**（finite-field arithmetic: 在有限集合上定义的算术系统），即**伽罗瓦域**（Galois fields: 一种有限域，在密码学和纠错码中广泛应用），来获得纠错项。这些项再转换回二进制，用于填充QR码的其余部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To this day, we can make out Voyager's ever-faintening whispers, thanks to Reed-Solomon codes. These codes also ensure that your old CDs or DVDs can still play your favorite songs and movies despite multiple scratches. And they are the reason why QR codes still work when damaged. In a QR code, the entire data, starting from the data type, character length byte, our message bytes, and final padding, are laid out in a line and converted back into ASCII decimals. Fitting a high-degree polynomial using these can easily make the coefficients blow up. Hence, Reed-Solomon encoding uses finite-field arithmetic, Galois fields, to obtain the error correcting terms. These, converted back into binary, are used to fill out the rest of the QR code.</p>
</details>

### 确保可读性：掩码模式

这样我们就得到了完整的QR码。但为什么我们还不能扫描它呢？看到这些区域看起来均匀的黑白相间了吗？有时，编码数据可能会偶然插入简单的图案和空白区域。这些可能会让期望看到嘈杂棋盘格的读取器感到困惑。它们可能会认为这是一个大面积的损坏，或者根本就不是一个QR码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(bright music) And there we have our complete QR code. But why can't we scan it yet? See how these regions here appear uniformly white and black? Well, sometimes the encoded data can insert plain patterns and blank spaces just by chance. These can confound the readers which expect to see a noisy checkerboard. They think maybe it's a big damage patch, or maybe it's not a QR code at all.</p>
</details>

但有一个方法可以解决这个问题。还记得我在格式字符串中放置的三块蓝色棋子用于**掩码**（masking）吗？它们指定了八种方式之一来重新排列QR码像素的外观，使其看起来真正混乱。现在，这个特定的掩码表示，对于每第三列数据，翻转像素，使白色变为黑色，黑色变为白色。但这不适用于代码的功能元素，它们保持不变。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But there is a way to fix this. Remember the three blue stones I put in for masking in the format string? Well, they specify one of eight ways to reshuffle the appearance of our QR code pixels to make them seem truly jumbled. Now, this particular mask says, flip the pixels so white becomes black and black becomes white for every third column of data. But this does not apply to the functional elements of the code. They remain unchanged. (bars whooshing) (QR code beeping)</p>
</details>

QR码标准规定了八种掩码模式的使用。原则上，当与正确的掩码位结合时，所有八种形式的代码都是可读的，这就是为什么一些QR码生成器会为相同的输入字符串返回不同外观的代码。但哪种效果最好呢？每个连续或不良的补丁都会增加分数，每个掩码都会被分配一个分数。最终得分最低的掩码获胜，它对任何读取器来说都是最容易扫描的。对于我们手工制作的QR码，我将使用最简单的掩码。现在我们有了一个可用的QR码。试试看吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The QR code standard specifies the use of eight masking patterns. In principle, when combined with the correct masking bits, all eight forms of the code are readable, which is why some QR code generators will return different looking codes for the same input string. But which one works best? Well, every continuous or bad patch adds points, and each mask gets assigned a score. The mask with the lowest score at the end wins. It's easiest for any reader to scan. (confetti cannon pops) (audience applauds) For our handmade QR code, I'm going to use the simplest mask. And now we have a working QR code. Try it out.</p>
</details>

### QR码的成功：开放专利、智能手机与全球普及

到了揭晓真相的时刻。“啊，它成功了。”你知道，通过这次实践，我再次意识到为什么我讨厌QR码。它们不是为人类设计的。我在摆放这些黑白棋子时犯了各种错误。要做到完美真的很难。我想它不必完美，但必须足够接近。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(bright music) And moment of truth. - Ahh, it worked. You know, going through this exercise made me realize again why I hate QR codes. They're not meant for people. I made all kinds of mistakes while I was trying to put down these black and white stones. This was really hard to get this perfect. I guess it didn't have to be perfect, but it had to be close enough, all right.</p>
</details>

最初，QR码仅用于工业用途。但很快，人们就意识到了它们数据存储能力的价值。2002年，疯牛病在英国再次出现。179人因食用受污染的牛肉而死亡，人们陷入恐慌。他们想确切知道他们的肉来自哪里，以及在到达超市之前是如何储存的。这一次，QR码可以提供帮助。这是这种奇特的棋盘格图案开始在日常生活中普遍使用的首批案例之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Initially, QR codes had only industrial uses. But it wasn't long before the value of their data storage capacity was realized. In 2002, mad cow disease resurfaced in the UK. 179 people died from eating contaminated beef, and people panicked. They wanted to know exactly where their meat was coming from and how it was stored before it reached the supermarket. This time, the QR code was available to help. It was one of the first instances where the curious checkerboards started to appear in common use.</p>
</details>

但为什么QR码如此成功呢？市面上有许多其他二维矩阵码。一个原因是电装波（DENSO Wave）决定不对QR码行使专利权。我们向所有人开放了专利，这使得QR码如此受欢迎。电装转而选择通过销售QR码扫描仪来盈利。当然，随着智能手机的兴起，大多数人很快就会在口袋里携带一个QR码扫描仪。但最初，QR码读取应用是第三方且相对小众的。然而，在2017年，安卓（Android）和苹果（Apple）将QR码读取器直接内置到他们的相机应用中，因此这些代码的使用量激增。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But why are QR codes so successful? There are plenty of other 2D matrix codes out there. Well, one reason is that DENSO Wave decided not to exercise patent rights on QR codes. We made the patent open to everyone, which made the QR code so popular. DENSO instead opted to monetize and sell QR code scanners. Of course, with the rise of smartphones, most people would soon carry a QR code scanner in their pocket. But initially, QR code reading apps were third-party and rather niche. But then in 2017, Android and Apple built QR code readers right into their camera apps, so the use of these codes took off.</p>
</details>

COVID-19（新冠肺炎）疫情也推动了QR码在全球范围内的普及。突然之间，餐馆和商家都希望有一种非接触式的方式来分发菜单和产品信息。在印度和中国，使用QR码的非接触式支付迅速兴起。如今，印度每月有超过120亿笔通过QR码实现的交易。QR码在手机钱包中存储疫苗接种记录和个人健康信息方面也证明了其便利性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The COVID-19 pandemic also gave QR codes a boost worldwide. Suddenly, restaurants and vendors wanted a contactless way to hand out menus and product information. Contactless payment using QR codes took off in India and China. Today, India sees over 12 billion QR code-enabled transactions per month. QR codes also proved handy in storing vaccine records and personal health information in phone wallets.</p>
</details>

### QR码的未来与安全挑战

但它们的巨大普及也带来了问题。关于QR码安全性的一个问题是：近年来，一些诈骗者利用QR码试图欺骗扫描它们的人。你对这些用途有担忧吗？就像互联网上的任何事物一样，你必须格外注意安全。在实际点击链接之前，请检查扫描的QR码将你带到哪里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But their enormous spread has also created problems. A question about QR code safety: In recent years, some scammers have used QR codes to try to defraud people who read them. Do you have concerns about these uses? So as with anything on the internet, you have to pay extra attention to safety. Check where a scanned QR code is taking you before actually clicking on a link.</p>
</details>

所以我想知道QR码的未来。QR码的下一步是什么？如果UPC条形码用尽的可能性很小，那么对于QR码来说，这根本不可能。使用最低冗余级别的版本1 QR码的唯一数量是2的152次方。这大约是合法棋盘配置总数的10倍，这也是为什么随机分布的像素填充到QR码图案中通常不能被解释为消息的原因。你已经扫描了无数个QR码，当你扫描下一个时，你会更清楚它是如何工作的。但你有没有想过QR本身代表什么？你最喜欢QR码的哪种应用？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wanna know about the future of QR codes. What is next for QR codes? Now, if the possibility of running out of UPC barcodes is remote, for QR codes, it is impossible. The number of unique version 1 QR codes using the lowest redundancy level is 2 to the 152. This is about 10 times the total number of legal chessboard configurations, which is also why a random distribution of pixels filled into a QR code pattern generally cannot be interpreted as a message. You have scanned countless QR codes, and when you scan your next one, you'll have a better idea of how it works. But have you ever thought about what QR itself stands for? What is your favorite application of the QR code? (space tones beeping)</p>
</details>