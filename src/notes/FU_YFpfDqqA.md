---
area: tech-insights
category: technology
companies_orgs:
- Bell Labs
- US military
- National Advisory Committee for Astronautics
- NACA
- NASA
- Los Alamos
date: '2023-05-13'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- brilliant.org
people:
- Thomas Edison
- John Ambrose Fleming
- Lee de Forest
- Claude Shannon
- George Boole
- George Stibitz
- Derek
- David
products_models:
- Model K
- Model I
- ENIAC
project:
- historical-insights
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=FU_YFpfDqqA
speaker: veritasium
status: evergreen
summary: 本文追溯了电子技术从爱迪生灯泡到早期数字计算机的发展历程。从热电子发射、弗莱明二极管到李·德·福雷斯特三极管，这些技术不仅推动了无线电和长途电话的进步，更通过布尔代数与继电器、真空管的结合，奠定了现代计算的基础，揭示了从机械开关到电子开关的演变，以及早期计算机的巨大挑战和突破。
tags:
- boolean-algebra
- digital
- electronic-switch
- environment
- vacuum-tube
title: 灯泡如何成为早期计算机的基石
---

### 爱迪生效应与热电子发射

现代电子时代的开端与灯泡息息相关，但其方式可能与你想象的不同。早期的灯泡由一个碳灯丝组成，密封在一个内部真空的玻璃球中。当灯丝两端施加电势差时，电流流过灯丝，将其加热到超过2000开尔文，温度高到足以使其发光。如果灯泡内有大量氧气，灯丝会立即烧毁，这就是需要真空的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The modern era of electronics began with the light bulb but not in the way you might think. Early light bulbs consisted of a carbon filament sealed inside a glass bulb with a vacuum inside. When a potential difference was applied across the filament, current flowed through it, heating it up to over 2000 Kelvin, so hot that it glowed. If there had been much oxygen in the bulb, the filament would've burned immediately. That was the reason for the vacuum.</p>
</details>

然而，从电子学的角度来看，真正的突破源于托马斯·爱迪生（Thomas Edison: 美国发明家，发明了实用电灯泡）的一个奇特观察。他发现，在灯泡的使用寿命中，玻璃会变色，先是变黄，然后变棕，但只发生在其中一侧。那么，这究竟是怎么回事呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But from the perspective of electronics, the real breakthrough came from a curious observation made by Thomas Edison. He saw that over a bulb's lifetime, the glass became discolored, turning yellow, and then brown, but only on one side. So what was going on?</p>
</details>

原来，加热的灯丝不仅会发出光和热，还会发射电子。你可以想象这些电子是从碳表面“煮沸”出来的。这种现象被称为**热电子发射**（Thermionic Emission: 指材料受热后发射电子的现象），在此之前，曾被其他科学家在27年前独立发现过两次。但在爱迪生之后，它才广为人知。事实上，在一段时间内，热灯丝发射电子的现象被称为“爱迪生效应”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the heated filament emits not only light and heat but also electrons. You can think of them being boiled off the surface of the carbon. This phenomenon, known as thermionic emission, had twice been discovered independently by other scientists up to 27 years earlier. But after Edison, it became widely known. In fact, for a time, the emission of electrons off a hot filament was called the Edison effect.</p>
</details>

这些漂浮在真空中的电子畅通无阻。但由于连接灯丝的导线两端存在电势差，电子被吸引到正极导线。因此，它们加速冲向正极，大多数会直接冲过并撞击到玻璃上，久而久之，只在正极一侧造成玻璃变色。值得注意的是，爱迪生当时使用的是直流电。如果他使用的是交流电，那么两侧都会变色。正是这一观察为电子学革命，并最终为第一批数字计算机奠定了基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, these electrons floating around were unobstructed because they're in a vacuum. But since there was a potential difference across the wires that led to the filament, the electrons were attracted to the positive wire. So they accelerated towards it and most would whizz straight past it and crash into the glass, over time discoloring it only on the positive side. I should note that Edison was using DC electricity. If he had been using AC, then both sides would've been discolored. But it was this observation that set the scene for an electronics revolution, and eventually the first digital computers.</p>
</details>

### 弗莱明二极管：电流的单向阀

1904年，约翰·安布罗斯·弗莱明（John Ambrose Fleming: 英国电气工程师和物理学家，发明了第一个实用真空管）获得了一项设备的专利，该设备与爱迪生的灯泡非常相似，但有一个重要的附加功能：灯泡内增加了第二个电极。通过使这个板相对于灯丝带正电，电子可以加速穿过间隙，从而完成电路。但如果板相对于灯丝带微负电，它就会排斥电子，电流就不会流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1904, John Ambrose Fleming patented a device that was very similar to Edison's light bulb, but with one important addition: a second electrode in the bulb. By charging this plate positively with respect to the filament, electrons could be accelerated across the gap, completing the circuit. But if the plate were slightly negative relative to the filament, then it would repel electrons and no current would flow.</p>
</details>

弗莱明称他的设备为电流的“单向街”。由于只有一个电极被加热，电子只能从那里流向板，而不能反向流动。这种设备被称为**热离子二极管**（Thermionic Diode: 一种真空管，只允许电流单向流动），最初用于检测无线电信号，但它也可以将交流电转换为直流电。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Fleming called his device a one-way street for electricity. Since only one of the electrodes was heated, electrons could only flow from there to the plate and not the other way around. The device was called a thermionic diode and it was used initially for detecting radio signals but it could also convert alternating current to direct current.</p>
</details>

科学家们很快意识到，更高效的设计是将灯丝置于中心，而另一个电极（板或阳极）则作为圆柱体环绕在外面。这种几何结构能捕获更多从灯丝发出的电子，并允许更大的电流通过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Scientists quickly realized that a more efficient design had the filament in the center and the other electrode to the plate or anode as a cylinder surrounding it. This geometry captured more of the electrons coming off the filament and allowed for larger currents to flow.</p>
</details>

**Derek:** 哦，它开始工作了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Oh, there she goes.</p>
</details>

**Derek:** 仅用一个这样的二极管，你就可以将交流电转换为一种“颠簸”的直流电。但结合几个二极管和一个电容器，就能产生相当稳定的直流电，这是一个巨大的进步。这是第一个实用的**真空管**（Vacuum Tube: 一种电子器件，通过控制真空中的电子流来放大、开关或整流电信号）设备，也是在接下来的半个世纪里主导整个行业的所有真空管的典范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] With just one of these diodes, you could convert AC into a bumpy kind of DC. But combining a few diodes and a capacitor led to a fairly steady direct current, and this was a big deal. It was the first practical vacuum tube device and the model for all vacuum tubes that would dominate the industry for the next half century.</p>
</details>

### 李·德·福雷斯特三极管：放大时代的开启

20世纪初，电子学面临的最大问题是放大。无线电刚刚发明，但由于缺乏可靠的设备来增强微弱信号，其传输范围受到限制。同样，电话通话的距离也限制在最多1300公里，因为超过这个距离，信号就太微弱而无法听清。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the early 1900s, the big problem in electronics was amplification. Radio had just been invented but its range was limited by the lack of reliable equipment that could boost weak signals. Similarly, telephone calls were limited to at most 1300 kilometers because by that point, the signal was two faint to hear.</p>
</details>

电报操作中已经有了一种简陋的放大形式，称为**继电器**（Relay: 一种电磁开关，通过小电流控制大电流电路的通断）。在继电器中有一个电磁铁。当电流流过电磁铁时，它会吸引一个开关，从而开启第二个电路。但当流过电磁铁的电流停止时，开关就会释放，第二个电路再次断开。这种设备非常适合放大电报线上的莫尔斯电码点划信号，但其二进制输出意味着它无法放大电话通话和无线电波的复杂模拟信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Rudimentary form of amplification had been built for telegraph operation called the relay. In a relay, there is an electromagnet. And when current flows through that electromagnet, it attracts a switch, turning on a second circuit. But when the current through the electromagnet stops, the switch is released and the second circuit is open again. This device works well for amplifying the dots and dashes of Morse code along a telegraph line but its binary output means it's incapable of amplifying the complex and analog signals of phone calls and radio waves.</p>
</details>

正因如此，1906年李·德·福雷斯特（Lee de Forest: 美国发明家，发明了三极管）在二极管中又增加了一个电极，这成为了一个巨大的突破。这个电极不是一块实心金属，而是一个稀疏的金属丝网，它被放置在灯丝（或阴极）和阳极之间。由于有三个电极，它被称为**三极管**（Triode: 一种具有三个电极的真空管，用于放大电信号）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's why it was such a breakthrough in 1906 when Lee de Forest took the diode and added another electrode into the bulb. This electrode wasn't a solid piece of metal but rather a sparse wire mesh and it was positioned in between the filament or cathode and the anode. With three electrodes, it was called a triode.</p>
</details>

现在，可以在阳极和阴极之间施加一个大的电势差，但实际流过它们之间的电子数量由栅极上的电压控制，这个新电极被称为栅极。如果栅极带微负电，它会排斥来自灯丝的电子，从而没有电子能流向阳极。但如果栅极带微正电，电子就会被吸引离开灯丝，其中大部分会穿过栅极的孔洞，然后加速冲向阳极。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, a large potential difference could be applied across the anode and cathode but the number of electrons that actually flowed between them was controlled by the voltage on the grid, as this new electrode was known. If the grid were slightly negatively charged, it repelled electrons from the filament so that none could flow through to the anode. But if the grid were slightly positive, then electrons were attracted away from the filament and most of them would pass through the holes in the grid, and then accelerate to the anode.</p>
</details>

因此，通过这种方式，栅极上微小的电压变化可以控制阳极上巨大的电压，而且响应速度很快。这样就可以实现高频放大。我喜欢把它想象成站在高高的悬崖顶上，打开和关闭一根大水管上的阀门。我的意思是，转动阀门不需要太多能量，但这个小小的输入被转换成了大量水从悬崖上倾泻而下的巨大输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this way, a small change in voltage on the grid can control a huge voltage at the anode and the response is rapid. So you can get high frequency amplification. I like to think of it as standing at the top of a high cliff, opening and closing a valve on a big water pipe. I mean, it doesn't take much energy to turn the valve but that small input is converted into a huge output of water falling down the cliff.</p>
</details>

**Derek:** 你正在给这条轨道通电。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] You're powering up this track here.</p>
</details>

**David:** 正在预热，你可以看到它正在预热。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] Warming up, you can see it warming up there.</p>
</details>

**Derek:** 所以黄色是输入？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] So the yellow is the input?</p>
</details>

**David:** 黄色是输入。紫色是输出。我们基本上在输入端有两伏特的电压变化，这给了我们什么？五伏特，所以输出端有五、十、十五伏特的电压变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] Yellow is the input. Purple is the output. We have essentially a two-volt change on the input giving us, what is this? Five volts, so five, 10, 15-volt change on the output.</p>
</details>

**Derek:** 在这个演示中，我们只在阳极上使用了24伏特。如果使用更高的电压，我们可以获得更大的放大倍数，而人们也确实这样做了。正是这个设备让我们第一次实现了长途通话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] For this demonstration, we were only using 24 volts on the anode. If we had used a higher voltage, we could have got a lot more amplification and people did. This was the device that allowed us to call long distance for the first time.</p>
</details>

使用真空管，第一次从纽约到旧金山的跨大陆通话发生在1915年1月25日。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Using vacuum tubes, the first transcontinental call from New York to San Francisco took place on the 25th of January, 1915.</p>
</details>

**Derek:** 哇。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Whoa.</p>
</details>

**David:** 是的，我们成功了，应该是10伏特。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] Yeah, there we go, should be 10 volts.</p>
</details>

**Derek:** 这里很难看到栅极，因为就像圆柱形二极管一样，三极管的最佳配置也是圆柱形结构。阳极在外面，栅极以圆柱形位于其内部，而阴极或灯丝则在中心。三极管的发明极其重要。无线电、电视以及人们拥有的任何电子设备都由真空管供电。即使到了20世纪60年代和70年代，你家里也会有许多真空管设备。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] It's hard to see the grid here because just like with the cylindrical diode, the best configuration for a triode is to have a cylindrical configuration. The anode is on the outside, the grid is cylindrically inside that, and the cathode or filament is in the center. The invention of the triode was incredibly important. Radios, TVs, whatever electronics people had were powered by vacuum tubes. You would've had so many in your house even up until the 1960s and '70s.</p>
</details>

### 布尔代数与继电器：数字计算的黎明

然而，真空管的革命并未止步于此。在1937年的论文中，克劳德·香农（Claude Shannon: 美国数学家、电气工程师和密码学家，信息论的创始人）发现了电路与**布尔代数**（Boolean Algebra: 一种数学逻辑系统，其中变量的值只有真或假，通常表示为1或0）之间存在联系。乔治·布尔（George Boole: 英国数学家、哲学家和逻辑学家，布尔代数的创始人）在19世纪中期致力于为逻辑寻找数学基础。在他的系统中，真语句用1表示，假语句用0表示。布尔还发展了一些运算，例如“与”（AND）运算。如果语句A和B都为真，那么输出也为真。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But vacuum tubes weren't done revolutionizing electronics. In his 1937 thesis, Claude Shannon found a connection between electric circuits and a branch of mathematics known as Boolean algebra. Working in the mid-1800s, George Boole was trying to find a mathematical foundation for logic. Under his system, a true statement was represented as a 1 and a false statement as a 0. And Boole also developed a few operations like AND. If both statements A and B were true, then the output would also be true.</p>
</details>

香农意识到，布尔的运算可以用电路来表示，数学语句和电路之间存在等价关系。要在现实世界中实现这些电路，你只需要几个开关。同年，1937年，乔治·斯蒂比茨（George Stibitz: 美国计算机科学家，数字计算机的先驱之一）建造了第一台数字计算器。它能将两个1比特的二进制数相加，也就是说，它能将两个0或1的数字相加。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What Shannon realized is that Boole's operations could be represented as electronic circuits, that there was an equivalence between mathematical statements and electric circuits. All you needed to realize these circuits in the real world were a couple switches. That same year, 1937, George Stibitz built the first digital calculator. It could add two 1-bit binary numbers. That is it could add two numbers so long as they were either 0 or 1.</p>
</details>

这个计算器使用电报中的机电开关——继电器来工作。它有两个输入。如果它们保持断开，输入就是0。如果闭合，输入就是1。输出通过两个灯泡显示。如果没有灯亮，答案就是0。如果输出灯亮，答案就是1。如果进位灯亮，答案就是2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The calculator worked using a relay, that electromechanical switch from telegraphy. There were two inputs. If they were left open, the input was 0. If closed, it was a 1. The output was shown with two light bulbs. If no lights were on, the answer was 0. If the output light was on, the answer was 1. And if the carry light was on, the answer was a 2.</p>
</details>

电路图是这样的：如果开关A和B都没有闭合（即0+0），那么电路中没有电流流动，也没有灯泡会亮。但如果输入A闭合，电流会流过螺线管，产生一个磁场，使内部的开关闭合，这会将输出灯泡连接到电源，并断开进位灯泡。因此，输出灯泡亮起，表示答案是1。当输入B闭合而A断开时，也会发生同样的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The circuit diagram works like this. If neither switch A or B is closed, so adding 0 + 0, then no current flows through the circuit and no light bulb would light up. But if input A was closed, the current would flow through the solenoid, creating a magnetic field that pulls the switch inside it closed, and this connects the output light bulb to power and disconnects the carry light bulb. So the output light bulb lights up, meaning that the answer is 1. And the same thing would happen when input B was closed and A was open.</p>
</details>

但如果你同时闭合A和B，那么没有电流流过螺线管，但会有电流从连接到A的电池流出，并连接到进位灯泡。因此，进位灯泡亮起，表示1+1等于2。这就是数字时代的开端，而且它并不光鲜。斯蒂比茨用他手头的一些电池、灯泡和继电器建造了他的设备。至于输入，他切开了一个烟草罐。他是在一个晚上在厨房餐桌上建造的，因此它被称为**Model K**（Model K: 乔治·斯蒂比茨在1937年建造的第一台二进制加法计算器）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you closed both A and B simultaneously, then there is no current flowing through the solenoid but there would be a current flowing from the battery connected to A, which is connected to the carry light bulb. So it lights up indicating 1 + 1 equals 2. This is the beginning of the digital age, and no it was not glamorous. Stibitz built his device out of a few batteries, light bulbs, and relays he had lying around. And for the inputs, he cut up a tin of tobacco. He built it in one night at his kitchen table which is why it became known as the Model K.</p>
</details>

斯蒂比茨建造的电路现在被称为**半加器**（Half Adder: 一种数字电路，能计算两个二进制数的和及进位）。但如果你用克劳德·香农的眼光来看待这个电路，你会发现它实际上是一对**逻辑门**（Logic Gate: 一种电子电路，执行布尔逻辑运算）。输出灯泡应该在A或B（但不同时）闭合时亮起，所以这被称为**异或门**（Exclusive OR gate, XOR: 一种逻辑门，当且仅当两个输入不同时输出真）。而进位灯泡应该只在A和B都闭合时亮起，所以这是一个**与门**（AND gate: 一种逻辑门，当且仅当所有输入都为真时输出真）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The circuit that Stibitz built is now called a half adder. But if you look at the circuit through the eyes of Claude Shannon, you realize it's actually a pair of logic gates. The output light bulb should turn on when either A or B, but not both, are closed, so this is known as an exclusive OR gate. Whereas the carry light bulb should only turn on when both A and B are closed, so this is an AND gate.</p>
</details>

这个电路使用了布尔运算符XOR和AND的电子版本。而且还可以构建其他布尔运算符作为电子门，例如OR、NOR和NAND。你可能会说，这有什么大不了的？我的意思是，大不了的是你刚刚“骗”了一群电子为你做数学运算。当然，这是非常简单的数学，但你可以将许多这样的半加器连接起来，构建越来越复杂的电路，从而进行更复杂的数学运算，这正是斯蒂比茨和他在贝尔实验室（Bell Labs: 著名的美国工业研究和科学开发公司）的同事们所做的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This circuit uses electrical versions of Boolean operators, XOR and AND. And it's possible to build other Boolean operators as electronic gates for things like OR, NOR, and NAND. And you might say, what's the big deal? I mean, the big deal is that you just tricked a bunch of electrons into doing math for you. Sure, it's very simple math, but you could connect a bunch of these half adders together and build more and more complicated circuits that could do more complex math, which is exactly what Stibitz and his colleagues at Bell Labs did.</p>
</details>

两年后，他们建造了**Model I**（Model I: 贝尔实验室在1939年建造的继电器计算机，是第一台能处理复数的机器），它拥有400多个继电器，能在十分之一秒内将两个八位数字相加。它还可以乘以八位数字，并进行复数乘法，尽管这些更复杂的操作需要更长的时间，大约每分钟一次计算。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Two years later, they built the model I, which had more than 400 relays and could add two eight digit numbers together in a 10th of a second. It could also multiply eight digit numbers and do multiplication of complex numbers, though these more complicated operations took longer, about a minute per calculation.</p>
</details>

**David:** 所以你给线圈施加电压，它就会打开或关闭那个开关。这里是你的两个操作数。如果你想把两个数字加起来，比如2是这个，3是这个，对吗？所以1、0是2。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So you put a voltage through a coil and it'll turn that switch on or off. So you've got your two operands here. And if you wanna add two numbers together, so 2 is this, 3 is this, right? So 1, 0 is 2.</p>
</details>

**Derek:** 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Yeah.</p>
</details>

**David:** 1、1是3。所以当你想计算时，你只需点击下面的“开始”按钮。我们得到101。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] And 1, 1 is 3. And so then when you want to calculate it, you just hit the go button down here. We get 101.</p>
</details>

**Derek:** 我喜欢那个声音。太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] I love the sound of that. That is amazing.</p>
</details>

**David:** 这很神奇，所以如果你想做，比如说，8加，那会是4，所以8加8，我想，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's magical, so if you wanna do like say, 8 plus, that would be 4 so 8 + 8, I think, right?</p>
</details>

**Derek:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Okay.</p>
</details>

**David:** 是的，8加8，那会是16，不，它自己清除了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] Yeah, 8 + 8, that would be, 16, no, it clears it on its own.</p>
</details>

**Derek:** 好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Okay.</p>
</details>

**David:** 瞧。8加8在二进制中是16，也就是10000。（机器咔哒作响）这本质上是一个1比特的算术单元。它没有逻辑功能。它只做加法。现在，假设我们想做5减2，答案会是3。所以我们翻转这个小开关，它让我知道我正在进行减法操作，我们通过做**二进制补码**（2's complement: 一种表示带符号二进制数的方法，常用于计算机中进行减法运算）来执行减法。所以本质上我们正在做的是反转其中一个操作数并加一。所以现在当我运行它时，（机器咔哒作响）我们可以看到5减2等于3，所以2加1是3。现在，由于我们执行此操作的方式，最终的进位标志最终会在这里亮起。但如果我们知道正在进行减法操作，我们就知道这个最终的进位标志在其他情况下永远不会亮起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] There you go. Eight plus eight is 16 in binary, which would be 1 0 0 0 0. (machine clacking) This is essentially a 1-bit arithmetic unit. There's no logic functions. It only ever does add. Now, let's say we wanna do 5 - 2, the answer's gonna be 3. So we flip this little switch here that lets me know that I'm doing a subtraction operation and we do subtraction by doing 2's complement. So essentially what we're doing is we're inverting one of the operands and we're adding one. So now when I run it, (machine clacking) we can see 5 - 2 is equal to 3, so 2 and 1 is 3. Now, because of the way that we do this, the final carry flag ends up getting illuminated here on the end. But if we know that we're doing a subtraction operation, we know that this final carry flag is never going to be on otherwise.</p>
</details>

**Derek:** 在接下来的十年里，他们又建造了六台基于继电器的计算机，这些计算机被美国军方和国家航空咨询委员会（NACA: National Advisory Committee for Astronautics，美国国家航空咨询委员会，后来的NASA）使用。但即使到了20世纪40年代初，很明显，继电器的机械性质，即开关的物理闭合和打开，对于计算机的未来来说太慢了，而且它们也容易损坏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Over the next 10 years, they built six more computers based on relays which were used by the US military and the National Advisory Committee for Astronautics or NACA, which later would become NASA. But even by the early 1940s, it was clear that the mechanical nature of the relay, the physical closing and opening of the switches, was too slow to be the future of computers and they were also prone to breaking.</p>
</details>

**David:** 任何机械的东西都会磨损。每次继电器切换时，内部的旋转点都会有一点摩擦，并且有接触点在建立和断开电气连接，这些都会磨损。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Anytime you have something that's mechanical, it's gonna wear down. Every time that relay switches, there's a little bit of friction on the rotation point inside of there and there's contacts that are making and breaking electrical connections, and those are gonna wear out.</p>
</details>

**Derek:** 而且所有继电器的打开和关闭意味着这些计算机非常吵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] And all the relays opening and closing meant that the computers were incredibly loud.</p>
</details>

（机器咔哒作响）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(machine clacking)</p>
</details>

**David:** 所以它在商业环境中效果不佳。你不能把它塞进你的办公室，那会把人逼疯的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So it doesn't really work in a business environment all that well. You can't really stuff it into your office that you're gonna drive people insane.</p>
</details>

### 真空管计算机：ENIAC的诞生与挑战

**Derek:** 所以计算机科学家真正需要的是一个电子开关，这就是真空管三极管发挥作用的地方。哇！我的意思是，当然它可以作为放大器，如果你在栅极上施加微正或微负电压，但它也可以作为开关。如果栅极电压非常负，那么没有电流流动。如果栅极电压非常正，那么最大电流流动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] So what computer scientists really needed was an electronic switch and that is where the vacuum tube triode comes in. Whoa! I mean, sure it can work as an amplifier if you put slightly positive or negative voltages on the grid, but it can also work as a switch. If the grid voltage is very negative, then no current flows. And if the grid voltage is very positive, then maximum current flows.</p>
</details>

因此，三极管可以通过无移动部件进行控制。只需一个电压就可以将其设置为0或1。最棒的是，两者之间的切换可以快速完成，而且没有噪音，因为你只是控制在真空中快速移动的电子。这项发明将计算带到了一个新的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a triode can be controlled using no moving parts. Just a voltage will set it to be either a 0 or a 1. And best of all, switching between the two can be done rapidly with no noise since you're just controlling electrons zipping around in a vacuum. This is the invention that took computing to the next level.</p>
</details>

世界上第一台电子可编程计算机被称为**ENIAC**（Electronic Numerical Integrator and Computer: 电子数字积分计算机，世界上第一台通用电子数字计算机），它于1945年12月10日首次上线。它占据了整个房间，重达30吨，耗电175千瓦。耗电量如此之大，以至于有传言说，每次它启动时，费城（ENIAC所在地）的灯都会变暗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The world's first electronic programmable computer was called ENIAC and it came online for the first time on December 10th, 1945. It took up a whole room, weighed 30 tons, and used 175 kilowatts of power. So much that it led to a rumor that every time it turned on, the lights in Philadelphia, where ENIAC was located, would dim.</p>
</details>

这只是一个谣言，但主要是因为ENIAC有自己的专用发电机来应对巨大的电力消耗。与以前的计算机不同，ENIAC不仅限于解决一种类型的数学问题。它可以编程，而且速度很快，每秒完成500次操作。当时，“计算机”这个词仍然指用笔和纸进行计算的人。所以每秒500次操作真的非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, that was just a rumor, but mainly because ENIAC had its own dedicated electrical generator to keep up with the enormous power draw. Unlike previous computers, ENIAC wasn't limited to just solving one type of mathematical problem. It could be programmed and it was fast, completing 500 operations per second. At the time, the word computers still referred to people doing calculations with pen and paper. So 500 operations per second was really fast.</p>
</details>

ENIAC的灵活性和强大功能立即对氢弹的开发起到了作用。所需的计算非常复杂，以至于当时洛斯阿拉莫斯（Los Alamos: 美国新墨西哥州的一个县，洛斯阿拉莫斯国家实验室所在地）的主任说：“如果没有ENIAC的帮助，任何解决方案都将是不可能实现的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">ENIAC's flexibility and power was immediately useful for the development of the hydrogen bomb. The computations needed were so complex that the director of Los Alamos at the time said that, "It would've been impossible to arrive at any solution without the aid of ENIAC."</p>
</details>

**David:** 有一个一米高、70厘米宽的处理器，最有趣的部分是你真的可以指向处理器的实际部件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- This is a hilarious part bout having a processor that is 1 meter tall and 70 centimeters wide, is that you can point at actual parts of the processor.</p>
</details>

**Derek:** 这就是1比特真空管计算机的样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] This is what a 1-bit vacuum tube computer looks like.</p>
</details>

**David:** 你能感觉到它散发出来的热量吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] Can you feel the heat coming off of it?</p>
</details>

**Derek:** 我当然能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] I certainly can.</p>
</details>

**David:** 我能感觉到热量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [David] I can feel the heat coming off.</p>
</details>

**Derek:** 它正在变热。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] It's getting warm.</p>
</details>

**David:** 嗯，我的意思是，190个真空管可不少。我想我们算出来了。这大概消耗350或400瓦的电力，这太荒谬了。晚上，它看起来很棒，就像一座城市。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Well, I mean, 190 vacuum tubes is a lot. I think we figured it out. This is pulling like 350 or 400 watts of power or something like that, which is absurd. At night, it's awesome. It looks like a city.</p>
</details>

**Derek:** 但真空管也有主要缺陷。灯丝总是需要加热，所以即使在空闲时也会消耗大量电力，而且它们体积庞大。很难将带有复杂电极的玻璃真空管做得任意小。它们也不可靠。平均而言，ENIAC中的一个真空管每隔几天就会损坏。然后，需要找到并更换它。ENIAC无故障运行的最长时间只有116小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] But there were also major flaws with vacuum tubes. The filaments always needed to be heated, so they used a lot of power even when idle, and they were big. It was hard to make a glass vacuum tube with complex electrodes inside arbitrarily small. They were also unreliable. On average, a vacuum tube in ENIAC broke down every few days. And then, it needed to be found and replaced. The longest that ENIAC operated for without failure was just 116 hours.</p>
</details>

### 现代计算的基石与未来展望

第一批数字计算机运行在“美化版”的灯泡上。这就是为什么它们如此庞大、耗电且不可靠。奇迹以及使我们现代生活成为可能的是，有人想出了如何在固体材料（硅）中用电子实现同样的技巧。但那是另一个故事了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first digital computers ran on glorified light bulbs. That is why they were so big, power-hungry, and unreliable. The miracle and what has made our modern lives possible is that someone figured out how to perform the same trick with electrons inside a solid piece of material, in silicon. But that's a story for another day.</p>
</details>

如果你想了解现代计算设备如何存储和访问信息，我强烈推荐你查看本视频的赞助商Brilliant.org。他们提供从计算机科学基础到神经网络再到量子计算的各种课程。他们最新的互动课程名为《技术如何运作》（How Technology Works）。它包含一节关于计算机内存的课程，你可以在其中亲身体验本视频中讨论的各种计算逻辑门。它还包含一节深入探讨视频压缩如何巧妙地实现现代流媒体的课程，这样你就可以观看像这样的视频。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you wanna learn about how modern computing devices store and access information, I highly recommend you check out this video's sponsor brilliant.org. They have courses on everything from computer science fundamentals to neural networks to quantum computing. Their latest interactive course is called How Technology Works. It includes a lesson on computer memory where you can get hands-on with the kinds of computational logic gates we discussed in this video. It also has a lesson that delves into the ingenious ways video compression makes modern day streaming possible, so you can watch videos like this one.</p>
</details>

你是否曾想过你的手机如何知道你在哪里？那里也有一节课。甚至还有一节关于密码盗窃的课程，你可以跟随黑客的脚步，发现为什么有些密码比其他密码更强大。你可以通过访问brilliant.org/veritasium免费试用所有这些课程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ever wondered how your phone knows where you are? There's a lesson on that too. There's even a lesson on password theft where you can walk in the footsteps of a hacker to discover why some passwords are stronger than others. You can try all these out for free by going to brilliant.org/veritasium.</p>
</details>

无论是获取现代科技的实用知识，还是培养数学、计算机科学或数据科学技能，Brilliant都是最好的学习方式。他们拥有数千个小巧的互动课程，不仅帮助掌握关键概念，还将所学知识与现实世界的例子联系起来。而且由于每节课都是实践性的，你将建立真正的直觉，从而将所学知识付诸实践。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, whether it's getting a working knowledge of modern day technology or building skills in math, computer science or data science, Brilliant is the best way to learn. They have thousands of bite-sized interactive lessons that not only help master key concepts but connect what you learn to real-world examples. And because each lesson is hands-on, you'll build real intuition so you can put what you've learned to use.</p>
</details>

正如我们所看到的，技术的发展是一个持续不断的过程，它不断重塑我们与周围世界的互动方式。今天，跟上这些变化比以往任何时候都更加重要。谁知道接下来会出现什么革命性的技术呢？但无论是什么，你都可以放心，你将能够在Brilliant上学习到它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, as we've seen, the development of technology is an ongoing process that constantly reshapes the way we interact with the world around us. Today, it's more important than ever to keep up with these changes. Who knows what revolutionary technology will emerge next? But whatever it is, you can rest assured that you'll be able to learn about it on Brilliant.</p>
</details>

你可以免费试用Brilliant提供的所有内容，为期30天。只需访问brilliant.org/veritasium。我将把这个链接放在描述中，前200名注册的用户将获得Brilliant年度高级订阅20%的折扣。所以我要感谢Brilliant赞助本视频，也感谢你的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can try everything Brilliant has to offer for free for a full 30 days. Just go to brilliant.org/veritasium. I will put that link down in the description and the first 200 of you to sign up will get 20% off Brilliant's annual premium subscription. So I wanna thank Brilliant for sponsoring this video and I wanna thank you for watching.</p>
</details>