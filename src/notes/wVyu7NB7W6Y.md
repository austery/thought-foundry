---
area: "society-thinking"
category: technology
companies_orgs:
- Veritasium
- Apple
- Brilliant
date: '2024-09-21'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Derek
- Steve Jobs
- Steve Wozniak
- James
products_models:
- Signal
- WhatsApp
project: []
series: ''
source: https://www.youtube.com/watch?v=wVyu7NB7W6Y
speaker: veritasium
status: evergreen
summary: 本视频深入探讨了全球电话系统核心——信令系统7号（SS7）的严重安全漏洞。从史蒂夫·乔布斯和沃兹尼亚克利用“蓝盒子”免费通话的早期电话破解历史，到现代黑客如何通过SS7拦截电话、短信、绕过双因素认证，甚至追踪目标位置，视频详细揭示了这些攻击的原理和现实影响，包括迪拜公主拉蒂法被绑架的案例。尽管存在严重风险，SS7因其作为2G/3G通信骨干的地位，以及“先行者劣势”效应，其淘汰进程异常缓慢，对个人隐私和国家安全构成持续威胁。
tags:
- history
- location-tracking
- security
- two-factor-authentication
title: 揭露电话系统漏洞：SS7攻击的原理、历史与现实威胁
---
### 电话网络入侵：一个令人不安的演示

这是来自Linus Tech Tips的Linus，我们入侵了电话网络，以便监视他。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is Linus from Linus Tech Tips and we hacked the phone network in order to spy on him.</p>
</details>

“这太糟糕了，Derek。我不知道这些事情的时候睡得更安稳。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That's pretty messed up Derek. I slept easier not knowing that.</p>
</details>

我们拦截了他的电话，并窃取了他的双因素验证码。Linus，那是你的号码吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We intercepted his phone calls and stole his two-factor passcodes. Is that your number Linus?</p>
</details>

“是的，但我没有接到，我的电话甚至没有响。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, but I didn't get, mine didn't even ring.</p>
</details>

我们没有碰他的手机，也没有给他发电子邮件或短信，什么都没有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We didn't touch his phone. We didn't send him an email or a text, nothing.</p>
</details>

我们都是远程操作的，最糟糕的是，这可能也发生在你身上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We did it all remotely and the worst part is it could happen to you.</p>
</details>

“我觉得我真的很惊讶，无意冒犯，但你们竟然做到了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I think I'm really surprised that, no offense, but like you guys did it.</p>
</details>

（Derek笑）“好吧，你不是一个职业犯罪黑客大师，不一定。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(Derek Laughing) Well, you're not a career criminal hacker mastermind, necessarily.</p>
</details>

“不，确实不是。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- No, indeed.</p>
</details>

“但你看，这是一个看起来和用起来都很正常的设备，没有任何明显的故障，而你只是接到了我的电话，而不是我接到。就好像，随叫随到？你只是，它是一个你电脑上的应用程序还是什么？我甚至不知道。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But here it is, a normal looking and feeling device with no, you know, obvious problem with it and you just receive my call instead of me receiving it. Just what, like on command? You just, it's an app on your computer or what? I don't even know.</p>
</details>

### 电话破解的早期历史：乔布斯与“蓝盒子”

但在我们解释这一切是如何做到之前，史蒂夫·乔布斯（Steve Jobs）和史蒂夫·沃兹尼亚克（Steve Wozniak）创立的第一家公司并不是苹果公司？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But before we explain how we did all that, (upbeat music) (crowd clapping) the first startup that Steve Jobs and Steve Wozniak made wasn't Apple?</p>
</details>

不，他们当时正在解决一个不同的问题，一个他们的产品实际上是非法的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, they were tackling a different problem. One where their product was actually illegal.</p>
</details>

回到20世纪70年代，长途电话费非常昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So back in the 1970s, long distance phone calls were really expensive.</p>
</details>

经过通货膨胀调整后，从纽约打到伦敦的电话每分钟可能要花费25美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Adjusted for inflation, a call from New York to London could run you $25 a minute.</p>
</details>

所以这两位企业家创造了一个小小的**蓝盒子**（Blue Box: 一种电子设备，通过模拟电话公司的内部信号音来欺骗电话网络，实现免费长途通话）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these two entrepreneurs created a little blue box and what it did was it hacked the telephone network.</p>
</details>

它的作用是入侵电话网络。他们可以欺骗电话公司免费连接电话，以及做其他事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They could trick the telephone company into connecting the calls for free among other things.</p>
</details>

“我们当时还年轻，我们学到的是，我们可以自己建造一些东西，来控制世界上价值数十亿美元的基础设施。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- We were young and what we learned was that we could build something ourselves that could control billions of dollars worth of infrastructure in the world.</p>
</details>

“我认为如果没有蓝盒子，就不会有苹果电脑。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think there would've ever been an Apple computer had there not been Blue Box.</p>
</details>

“沃兹说你给教皇打过电话。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Interviewer] Woz said you called the Pope.</p>
</details>

“是的，我们确实给教皇打过电话。沃兹假装是亨利·基辛格（Henry Kissinger），我们拿到了梵蒂冈的号码，然后给教皇打了电话，他们开始叫醒等级制度中的人，你知道，我不知道，红衣主教们，他们甚至派人去叫醒教皇，最后我们只是忍不住大笑起来，他们才意识到我们不是亨利·基辛格。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, we did call the pope. Woz pretended to be Henry Kissinger and we got the number of the Vatican and we called the Pope and they started waking people up in the hierarchy, you know, I don't know, cardinals and they actually sent someone to wake up the Pope when finally we just burst out laughing and they realized that we weren't Henry Kissinger.</p>
</details>

### 电话拨号的演变：从人工接线到按键音

但是他们是如何用一个由Radio Shack零件制成的电子盒子做到这一切的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But how were they able to do all of this with one electronic box made from Radio Shack parts?</p>
</details>

（电话铃响）直到20世纪20年代中期，大多数电话都没有拨号功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(telephone ringing) Until the mid-1920s, most phones had no way of dialing.</p>
</details>

当你的电话挂在听筒上时，大约有48伏特的电压从交换机连接到你的电话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When your phone was on the hook, about 48 volts was connected from the exchange to your phone.</p>
</details>

然后当你拿起听筒时，一个内部电路连接了扬声器和麦克风，并开始耗电，这导致电压降到大约10伏特。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then when you lifted the receiver, an internal circuit connected the speaker and microphone drawing power and that caused the voltage to drop to around 10 volts.</p>
</details>

在电话交换机处，这种电压下降会点亮一个灯泡，提醒接线员，接线员会拿起电话询问你要打给谁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at the telephone exchange this drop turned on a light bulb alerting the operator who would then pick up and ask who you're calling.</p>
</details>

“波士顿。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Sarah] Boston.</p>
</details>

“莎拉，给我接Bluebird餐厅。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Sarah, get me the Bluebird Diner.</p>
</details>

在查阅电话簿后，他们会在你的线路和朋友的线路之间连接一根电线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And after consulting a directory, they would connect a wire between your line and your friends.</p>
</details>

手动连接电话是一项劳动密集型工作。接线员每小时必须处理数百个连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Manually connecting calls was labor intensive. Operators had to handle hundreds of connections per hour.</p>
</details>

1910年，一位评论员说：“很快，电话系统将需要雇佣全国所有适龄工作的女性作为接线员。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1910, one pundit said, "Soon the telephone system will need to employ every working age woman in the country as an operator."</p>
</details>

到1950年，仅在美国就有超过一百万名接线员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By 1950, there were more than a million of them in the US alone.</p>
</details>

为了降低成本，公司寻求自动化呼叫连接过程，其中一个解决方案就是**旋转拨号电话**（rotary dial telephone: 一种通过旋转拨盘来发送脉冲信号进行拨号的电话）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To reduce costs, companies sought to automate the call connection process and one solution was the rotary dial telephone.</p>
</details>

要使用它，你需要将手指放入一个数字孔中，旋转到底，然后拨盘会旋转回来，内部一个带有脊状的金属盘会转动，每个脊都会推动两块金属板接触，从而完成与交换机的电路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To use it, you place your finger in a number hole, rotate it to the end and the dial rotates back and on the inside a metal disc with ridge's turns, each ridge pushes two metal plates into contact completing the circuit to the exchange.</p>
</details>

拨盘发送脉冲以匹配每个数字。对于数字2，它发送两个脉冲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The dial sends pulses to match each number. For the number two, it sends two pulses.</p>
</details>

对于数字3，它发送三个脉冲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For the number three it sends three pulses.</p>
</details>

这会一直持续到数字0的10个脉冲，这就是为什么0在拨盘的最远端而不是1的旁边。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This goes on up to 10 pulses for the number zero, which is why zero is at the far end of the dial instead of beside the one.</p>
</details>

这些通过电话线传输的脉冲决定了你的线路如何连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Those pulses that travel down the phone line, they determine how your line is connected.</p>
</details>

所以它们被称为**控制信号**（control signals）。但随着传输线长度的增加，其电容和电阻也随之增加，这导致清晰的输入信号变得失真，平滑了电压变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they're known as control signals, but as the length of the transmission line was increased, so did its capacitance and resistance and this caused the clear input signals to become distorted, smoothing out voltage changes.</p>
</details>

因此，现在脉冲无法触发交换机的切换。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now the pulses couldn't trigger the switching at the exchange.</p>
</details>

虽然这对本地通话来说不是问题，但它使得长途通话的自动化几乎不可能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">While this wasn't a problem for local calls, it made automating long distance almost impossible.</p>
</details>

现在，所有电话线，包括长途电话线，都被设计用来传输人声和听力范围内的声音，主要频率在300到3400赫兹之间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now all phone lines including long distance ones were built to carry sounds in the human voice and hearing range, mainly from 300 to 3,400 Hertz.</p>
</details>

那么，为什么不利用这种内置能力来传输控制信号呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So why not use this built-in capability to carry control signals.</p>
</details>

为了做到这一点，电话公司引入了**按键电话**（touch tone or push button telephone: 通过发送不同频率组合的音频信号来拨号的电话）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To do this, phone companies introduced the touch tone or push button telephone.</p>
</details>

在按键上，特定的频率被分配给水平轴和垂直轴，这样每个按钮都可以通过两种音调的组合唯一识别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On a keypad, specific frequencies were assigned to the horizontal axis and the vertical axis so that each button was uniquely identifiable by the combination of two tones.</p>
</details>

（按键声）通过在语音频带内发送控制信号，所有电话网络都可以使用其现有系统接收它，而不受距离限制。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(buttons beeping) By sending control signals within the voice band, all telephone networks could receive it using their existing systems independent of distance.</p>
</details>

但随着这项创新，乔布斯和沃兹尼亚克也发现了可利用的机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But with this innovation came an opportunity for jobs and Wozniak to exploit.</p>
</details>

当你打长途电话时，它首先会被路由到一个中心节点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you made a long distance call, it was first routed to a central node.</p>
</details>

这个节点会与一个远程节点通信，它们通过检查双方是否都在发送2600赫兹的音调来确定线路是否空闲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This node communicated with a remote node and they determined if a line was free, by checking whether both sides were sending a 2600 Hertz tone.</p>
</details>

于是乔布斯和沃兹就利用了这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Jobs and Woz exploited this.</p>
</details>

首先，他们会拨打一个免费的1-800号码，这将使他们进入一个本地节点，然后他们会向电话中发送一个2600赫兹的音调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, they would dial a toll free 1-800 number which would get them into a local node and then they would send a 2600 hertz tone into the phone.</p>
</details>

这会欺骗远程节点，使其认为通话已经断开。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This would trick the remote node into thinking the call had been disconnected.</p>
</details>

所以远程节点会再次开始播放2600赫兹的音调，但乔布斯和沃兹仍然在线上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the remote node would start playing the 2600 hertz tone again, but Jobs and Woz were still on the line.</p>
</details>

当他们停止播放音调时，远程节点会认为正在拨打一个新电话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when they stopped playing the tone on their side, the remote node assumed a new call was being placed.</p>
</details>

通过发送一个按键脉冲音，然后是所需的电话号码，最后以一个启动音结束，他们就可以免费连接到任何长途号码，因为本地节点仍然认为它连接的是一个免费电话号码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By sending a key pulse tone followed by the desired phone number and ending with a start tone, they could connect to any long distance number for free as the home node still believed it was connected to a toll-free number.</p>
</details>

信令系统中的漏洞显而易见，为了模仿2600赫兹的音调，有些人甚至会使用Cap'n Crunch麦片盒里的玩具哨子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The vulnerabilities in the signaling system were obvious to mimic the 2600 hertz tone. Some people would even use a toy whistle from a Cap'n Crunch cereal box.</p>
</details>

它恰好能发出那个频率。（哨子声）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It just happened to make that frequency. (whistle blowing)</p>
</details>

### 信令系统7号（SS7）：安全协议的诞生与固有缺陷

电话公司显然需要开发一种新的信令协议，他们的解决方案是使用单独的数字线路来传输控制信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The telephone companies clearly needed to develop a new signaling protocol and their solution was to use a separate digital line for carrying control signals.</p>
</details>

这样，没有人可以通过语音线路发送音调来控制网络，因为它不再控制电话的连接方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That way no one could control the network by sending tones down the voice line because it no longer controlled how the call was connected.</p>
</details>

这个新协议被称为**信令系统7号**（Signaling System no. 7, 简称SS7: 一套用于电话网络中交换控制信息的协议，负责呼叫建立、路由、计费等功能）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This new protocol was called Signaling System no. 7 or SS7 for short.</p>
</details>

它至今仍被广泛使用，但它可能不像人们想象的那么安全。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's still broadly in use today, but it may not be as secure as people thought.</p>
</details>

“你好，我叫拉蒂法·阿勒马克图姆（Latifa Al Maktoum）。我出生于——”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Hello, my name is Latifa Al Maktoum. I was born-</p>
</details>

迪拜的拉蒂法公主（Princess Latifa）声称，她的父亲，统治者谢赫·穆罕默德（Sheikh Mohammed），曾将她单独监禁在黑暗中，殴打并施用镇静剂多年。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Princess Latifa of Dubai claimed that her father Sheikh Mohammed, the ruling emir had held her in solitary confinement in the dark, beaten and sedated for several years.</p>
</details>

2018年2月下旬，她的芬兰武术教练蒂娜（Tiina）帮助她逃脱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In late February, 2018, her Finnish martial arts instructor Tiina helped her escape.</p>
</details>

他们逃到了一艘由前法国情报官员埃尔韦·若贝尔（Hervé Jaubert）驾驶的游艇上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They fled to a yacht captain by former French intelligence officer, Hervé Jaubert.</p>
</details>

他们向印度航行了八天。拉蒂法充满希望，但这并没有持续多久。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for eight days they sailed toward India. Latifa was hopeful but it wasn't to last.</p>
</details>

3月4日深夜，一艘黑色的船靠近，那是她父亲派来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Late on the night of March 4 a dark boat pulled up alongside it was sent by her father.</p>
</details>

特工们登上游艇时，激光瞄准器穿透了烟雾，他们绑架了拉蒂法并将她带回迪拜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Laser cites pierced the smoke as agents boarded the yacht, abducting Latifa and taking her back to Dubai.</p>
</details>

但他们是如何找到她的呢？原来，船长曾是SS7协同攻击的受害者，该攻击旨在精确定位他的位置，进而确定公主的下落。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But how did they find her? Well the captain had been the victim of a coordinated SS7 attack, one aiming to pinpoint his location and by extension the whereabouts of the princess.</p>
</details>

我将向你展示如何使用完全相同的步骤来监视我的朋友，当然是经过他们允许的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to show you how using the exact same steps to spy on my friends with their permission of course.</p>
</details>

这是卡斯滕·诺尔（Karsten Nohl）和亚历山大·德·奥利维拉（Alexandre De Oliveira）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is Karsten Nohl and Alexandre De Oliveira.</p>
</details>

他们是网络安全专家，正在帮助我监视Linus。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are cybersecurity specialists who are helping me spy on Linus.</p>
</details>

我们采取了三个步骤来监视他。首先，你必须渗透SS7；其次，获得信任；第三，发起攻击。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We took three steps to spy on him. First you have to infiltrate SS7, second gain trust and third attack.</p>
</details>

当然，所有这一切之所以可能，主要原因就是第一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, the main reason any of this is possible is step one.</p>
</details>

当SS7在1980年推出时，手机几乎不存在。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When SS7 was introduced in 1980, mobile phones barely existed.</p>
</details>

它们非常大，主要用作车载电话，但情况迅速变化，全球手机数量爆炸式增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They were so big that they were mainly just used as car phones but things changed quickly and the number of mobile phones in the world exploded.</p>
</details>

“漫游是SS7的主要用例之一。比如说，Derek，你来我这里。你的手机会尝试连接到一个外国网络，然后那个网络就必须联系你在澳大利亚的家庭网络，询问：‘这是一个有效的客户吗？你愿意支付他们在我的网络上产生的费用吗？’所有这些信息都是通过SS7交换的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Roaming is one of the main use cases of SS7. Say Derek, you visit me over here. Your phone would try to connect to a network that's foreign and that network would then have to reach out to your home network in Australia asking, is this a valid customer? Are you willing to pay for the charges that they'll incur on my network? And all of that information is exchanged over SS7.</p>
</details>

为了实现这一点，电信公司需要相互通信。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For this to work, telcos need to communicate with each other.</p>
</details>

他们通过确保自己是同一个“俱乐部”的成员来做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the way they do that is by making sure they're part of the same club.</p>
</details>

他们共享这个俱乐部成员资格的方式是使用唯一的地址来识别请求的来源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The way they share membership to this club is by using unique addresses to identify where requests are coming from.</p>
</details>

“SS7是一个全球网络，就像互联网一样。就像在互联网上一样，你需要某种寻址方案。所以你需要某种方式来表明‘这是我，这是你’。在互联网上我们使用IP地址。在SS7上，我们使用所谓的**全球标题**（Global Titles, 简称GT: SS7网络中用于唯一标识网络节点和路由消息的地址）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- SS7 is a global network, just like the internet and like on the internet you need some addressing scheme. So you need some way of saying this is me and this is you. And on the internet we use IP addresses. On SS7 we use what's called Global Titles, GTs.</p>
</details>

“因此，为了提供全球漫游覆盖，电信公司通常会与他们服务的每个国家的两个提供商建立协议。一个主要提供商和一个备用提供商。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] So to provide global roaming coverage, telcos typically establish agreements with two providers in each country they serve. One primary and one backup.</p>
</details>

电信公司通常只接受与其有协议的全球标题发来的消息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Telcos generally accept messages only from Global Titles with which they have agreements.</p>
</details>

整个系统被设计成一个封闭网络，一旦进入，障碍很少，这被称为**围墙花园**（walled garden: 一种封闭的系统，用户一旦进入就难以离开，通常指受控的网络环境）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the whole system is designed to be a closed network with few barriers once inside, this is known as the walled garden approach.</p>
</details>

所以这个系统看起来很安全，而且它也确实曾经是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this system seems pretty secure and it was.</p>
</details>

当SS7在80年代开发时，电信领域由少数几家大型、信誉良好的运营商主导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When SS7 was developed in the '80s, the telecommunications landscape was dominated by a few large reputable operators.</p>
</details>

这些运营商建立了相互关系，并有共同的利益来维护网络的完整性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These operators had established relationships and mutual interest in maintaining the integrity of the network.</p>
</details>

但45年过去了，情况发生了巨大变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But 45 years on the landscape has shifted dramatically.</p>
</details>

现在有超过1200家运营商和4500个网络，其中许多需要SS7访问，从虚拟网络运营商到发送Uber Eats通知的群发短信服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now there are over 1200 operators and 4,500 networks, many of which need SS7 access from virtual network operators to mass-text services sending Uber Eats notifications.</p>
</details>

花园里有如此多的参与者，并非所有人都值得信任。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are so many more players in the garden that not all of them are trustworthy.</p>
</details>

“这些公司，有些将服务出售给第三方，有些可以被贿赂，有些可以被黑客攻击。所以，以合理的努力或成本进入SS7的方法可能多达数千种。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Those companies, some of them sell services onto third parties, some of them can be bribed, some of them can be hacked. So there's probably thousands of ways into SS7 at reasonable effort or cost.</p>
</details>

“我们说的是多少钱？购买SS7的访问权限需要多少钱？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- How much are we talking like how much would it cost to buy access to SS7?</p>
</details>

“购买单个SS7连接并不那么昂贵？我们说的是每月几千美元。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Buying a single SS7 connection isn't that expensive? We're talking a few thousand dollars per month.</p>
</details>

“那些出售访问权限的人，我的意思是，他们为什么要这样做？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The people who do sell access, I mean, why would they do it?</p>
</details>

“人们出售SS7只有一个原因——钱。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- People sell SS7 for one reason money.</p>
</details>

多亏了提供商之间的全球协议，访问一个受信任的GT就像获得了他们所有合作伙伴的GT访问权限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And thanks to global agreements between providers accessing a trusted GT is like gaining access to all the GTs they have partnerships with.</p>
</details>

我们甚至看到了一张有价值的美国GT被非法租赁的账单，每月13,000美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We even saw the invoice of a valuable US-based GT being leased illegally for $13,000 a month.</p>
</details>

“你正在购买SS7的访问权限吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Are you buying access to SS7?</p>
</details>

“我正在支付SS7的访问费用。是的。我们这样做是因为我们进行SS7安全测试。所以我们需要处于与真实黑客相似的位置，才能获得接近真实的结果。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I'm paying for access to SS7. Yes. And we do that because we do SS7 security tests. So we need to be in a similar position as real hackers to get near real results.</p>
</details>

所以第一步，渗透SS7，完成。进入第二步，获得信任。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So step one, infiltrate SS7 is complete. Onto step two, gain trust.</p>
</details>

今天的黑客一旦翻过围墙进入花园，可以尝试许多不同的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hackers today can try many different things once they've scaled the wall into the garden.</p>
</details>

但你需要的不仅仅是SS7访问权限和电话号码才能发起攻击。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you need more than just SS7 access and a phone number to attack.</p>
</details>

即使是受信任的GT和目标的电话号码也不足以唯一识别他们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even a trusted GT and the phone number of the target isn't enough to uniquely identify them.</p>
</details>

现在你需要SIM卡中的一些信息。移动网络中真正的关键是一个唯一的15位标识符，它专属于手机上的SIM卡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now you need something from the SIM card. The real key in a mobile network is a unique 15 digit identifier which belongs exclusively to the SIM card on the phone.</p>
</details>

它被称为**国际移动用户识别码**（International Mobile Subscriber Identity, 简称IMSI: 存储在SIM卡中的唯一标识符，用于在移动网络中识别用户）。它非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's called an international mobile subscriber identity or IMSI for short. And it is very important.</p>
</details>

“基本上，为了能够从用户那里收集IMSI，我们会发送一些消息，例如‘发送路由信息’或‘发送短信路由信息’。这些消息通常用于收集IMSI。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Basically to be able to collect the IMSI from a subscriber, we would launch some of the messages such as send routing info or send routing info for SM. These messages are normally used to collect the IMSI.</p>
</details>

网络中设有防火墙，如果请求看起来可疑，它们会拒绝一些请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Networks have firewalls in place that will deny some requests if they look suspicious.</p>
</details>

获取IMSI对于显得受信任至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Getting an IMSI is crucial to appear trusted.</p>
</details>

### 现代SS7攻击：呼叫拦截、2FA绕过与位置追踪

所以让我们进入关键的第三步，攻击。你想试试电话吗？有什么你可以尝试的来测试它是否工作？比如给某人打电话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's move on to the critical step three, attack. Do you wanna just like try the phone? Is there anything you can try to see if it works? Like call someone.</p>
</details>

“当然。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Sure.</p>
</details>

“或者发短信给某人？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Or text someone?</p>
</details>

“当然。我给我妻子打电话。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Sure. I'll call my wife.</p>
</details>

“她通常会接电话吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- She normally pick up.</p>
</details>

“是的，她可能会接。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, she'll probably pick up.</p>
</details>

“你好？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Yvonne] Hello?</p>
</details>

“你好，伊冯（Yvonne），我是你丈夫的声音。我想和你谈谈付款的事。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Hello Yvonne, this is the voice of your husband. I would like to talk to you about the payment.</p>
</details>

“好的，谢谢。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Okay, thanks.</p>
</details>

“不，不，是我，是我。”（笑）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- No, no, it's me. It's me.(laughs)</p>
</details>

“她挂你电话了吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Did she hang up on you?</p>
</details>

“是的，是的，她挂了。所以我们已经确定这部手机作为一部完全正常的手机是工作的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, yeah, she did. So we've established the phone works as a completely normal phone.</p>
</details>

“你最近有什么重要电话要打吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Do you have any important calls coming up?</p>
</details>

“我不知道这算不算重要，但我今晚要去参加创作者峰会，Hacksmith的詹姆斯（James）会给我打电话，我们到时候会做一些计划。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I don't know if I'd say it's important, but I'm on my way to Creator Summit tonight and James from Hacksmith was gonna call me when we're gonna kind of make some plans.</p>
</details>

（电话铃响）“我正在接到一个电话。你接到电话了吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(phone rings) - I'm getting a call right now. Are you getting a call?</p>
</details>

“没有。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- No.</p>
</details>

“你好，我是Linus。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Hello, this is Linus.</p>
</details>

“嘿，Linus，我是詹姆斯。你好吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [James] Hey Linas, it's James. How's it going?</p>
</details>

“我很好。你呢？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- It's going really well. How are you?</p>
</details>

“挺好的。我会在YouTube峰会上见到你吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [James] Pretty good. Am I gonna see the YouTube summit?</p>
</details>

“是的，我非常期待。天哪，我真讨厌Mac！我觉得那是你的人设，伙计。你不能在Mac上玩游戏。Linus，你想说话吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yes, I'm really looking forward to that. And man, do I hate Macs? So I feel like that's your persona man. You can't game on a Mac. Linus, you wanna talk?</p>
</details>

“我想说话，但我从未接到电话，所以……”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I would like to talk but I never got the call, so...</p>
</details>

“你拨的是什么号码？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What number did you dial?</p>
</details>

“4473。”（嘟嘟声）

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [James] 4473.(beep)</p>
</details>

那是你的号码吗，Linus？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Is that your number, Linus?</p>
</details>

“是的，但我没有接到，我的电话甚至没有响。我听到它响了，但我是通过电脑扬声器听到的。因为我猜它去了你的手机？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, but I didn't get, mine didn't even ring. I heard it ring but I heard it through my speakers on my computer. 'Cause I assume it went to your phone then.</p>
</details>

“没错。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That's right.</p>
</details>

“还是去了你的电脑？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Linas] Or did it go to your computer?</p>
</details>

“不。是的，它去了我所有的设备。所以，詹姆斯，我不知道。你给Linus打电话，但电话打到了我这里。谢谢你参与这个奇怪的演示。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- No. Yeah, it went to everything of mine. So yeah, James, I don't know. You called Linus and it went to me. Thank you for taking part in this weird demonstration.</p>
</details>

“这里绝对没有任何迹象表明我应该接到一个电话。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- There is absolutely nothing here to indicate that I was supposed to receive a call.</p>
</details>

“是的，我的意思是，最疯狂的是，那里面是一张普通的加拿大SIM卡。所以理论上，任何加拿大SIM卡都可能受到这种攻击，你知道，有人拨打你的号码，但电话根本没有打到你那里。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, and I mean the crazy thing is that's like a regular Canadian SIM card in there. So any Canadian SIM card in theory could be vulnerable to such an attack where you know, someone dials your number and it just doesn't go to you.</p>
</details>

“这就像**电话飞客**（phreaking: 早期电话系统黑客行为，通过利用电话网络的漏洞进行免费通话或其他未经授权的操作），但完全是另一个层面。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- This is like phreaking but on a completely different level.</p>
</details>

“正是如此。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That's exactly it.</p>
</details>

“现在我已经熟悉了**SIM卡劫持**（SIM swapping: 通过欺骗运营商将受害者的电话号码转移到攻击者控制的SIM卡上）的概念，即你通过社交工程的方式获得一张注册到他人账户的SIM卡。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I'm familiar already with the concept of SIM swapping where you social engineer a way to get a SIM that is registered to someone else's account.</p>
</details>

我们过去确实曾因此被盗过账户，但在这种情况下，我的手机仍然可以使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've actually had accounts stolen that way in the past, but in this case my phone still works.</p>
</details>

“你好？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Yvonne] Hello?</p>
</details>

“嘿，我们正在做的演示非常奇特，亲爱的。基本上，他们让Hacksmith给我打电话，我的手机根本没响，相反，Veritasium的Derek接了电话，并能够和他通话，Hacksmith根本不知道他给我打了电话，然后——”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Hey, so the demo we're doing is pretty trippy hun. Basically they had Hacksmith call me, my phone didn't ring at all and instead Derek from Veritasium picked up the phone call and was able to talk to him and Hacksmith had no idea that he called me and then-</p>
</details>

“抱歉，我和辛迪（Cindy）在一起。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Yvonne] Sorry, I'm with Cindy.</p>
</details>

“哦。哦，你好辛迪。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Oh. Oh, hi Cindy.</p>
</details>

“哦，你没有开免提。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Yvonne] Oh, you're not on speaker.</p>
</details>

“好的，没关系。替我向辛迪问好。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Okay, that's fine. Just tell Cindy hi for me.</p>
</details>

“好的。好的，再见。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Yvonne] Okay. Okay, goodbye.</p>
</details>

“那么我们是如何像那样控制Linus的号码的呢？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] So how are we able to seize control of Linus number like that?</p>
</details>

“当你把电话号码放进地址簿时，你通常不会加上国家代码，但如果你处于漫游情境中，那个电话号码就会连接到你当前所在国家的一个完全不同的人。所以，基本上覆盖人们拨打谁的选择是有道理的，因为他们不会每次都仔细检查地址簿条目中是否包含国家代码。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- When you put a phone number in your address book, you often don't put the country code, but then if you're in a roaming scenario, that phone number would connect to a completely different person in the country you're currently in. So it does make sense to basically overrule people's choices as to whom they're trying to dial because they're not gonna triple check each time whether the address book entries have country codes in them.</p>
</details>

这是一个强大的功能，通过欺骗网络，使其认为他的手机正在漫游，我们可以将他正在拨打的号码改写为我们控制的号码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is a powerful function by tricking the network into thinking his phone is roaming, we can rewrite the number he is calling to a number that we control.</p>
</details>

“所以我在最后做的是，当我收到这条消息时，我发回了你的号码，你可以在这里看到，那是你基于美国的号码。所以即使你身在澳大利亚，我仍然能够将电话转接到你在澳大利亚的美国号码上。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- And so what I did at the end was when I received this message, I sent back your number that you can see here was your US based number. So even if you were located in Australia, I was still able to forward the call to you on your US number in Australia.</p>
</details>

“那太棒了。你只需要尝试几次，然后它就成功了，对吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- That's amazing. You just try a few times and then it works, right?</p>
</details>

“是的，它并不总是那么简单，（笑）但这次相当困难。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yes, it's not always that simple,(laughs) but this time it was quite difficult.</p>
</details>

“那么我现在最重要的问题是，你需要从我这里偷走什么才能变成我？这是否是你可以通过社交工程从我的运营商那里获取的东西？这是我需要不小心泄露我的**IMEI**（International Mobile Equipment Identity: 国际移动设备识别码，手机的唯一序列号）截图才能得到的东西吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So the most important question I have now then is what did you need to steal from me in order to become me? Like is this something you can social engineer out of my carrier? Is this something that I would need to accidentally leak a screenshot of my IMEI.</p>
</details>

“最简单地说，我们只需要你的电话号码。就是这样。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- At the very simplest, all we would need is your phone number. That's it.</p>
</details>

你甚至可以做一些事情，我可以充当中介，我将电话转接到我这里，但同时我也会为你拨打真实号码，然后我将你转接给他们，然后我就可以在线上记录那次通话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You could even do something where I could act as a middleman where I would reroute the call to me, but also simultaneously I would dial for you the real number and I would send you through to them and then I can sit on the line and just record that call.</p>
</details>

“哎呀。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yikes.</p>
</details>

但这并不是唯一的攻击方式。我们可以用SS7做更多的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this isn't the only attack. We can do a lot more with SS7.</p>
</details>

我们还可以拦截短信，作为我们攻击套件的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can also intercept text messages as part of our suite of attacks.</p>
</details>

与电话类似，我们可以欺骗网络，使其认为目标正在漫游，这将他们的消息重新路由到我们的GT。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Similar to phone calls, we can trick the network into thinking the target is roaming, which reroutes their messages to our GT.</p>
</details>

然后我们可以窃取用于**双因素认证**（two-factor authentication, 简称2FA: 一种安全机制，要求用户提供两种不同类型的凭证才能访问账户）的一次性密码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can then steal one time passwords used in two factor authentication.</p>
</details>

这种攻击方式一直有效，直到用户与他们的电话网络互动，此时电话会重新连接到正确的GT。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This type of attack works until the subscriber interacts with their phone network, at which point the phone reconnects to the correct GT.</p>
</details>

“但你只需要几秒钟就能入侵别人的账户。当然，你需要那几秒钟的窗口来接收一次性密码。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- But you need a few seconds only to hack into somebody's account. Of course you need that few second window to receive the one time password.</p>
</details>

“所以我们实际上设置了一个新的Linus YouTube频道。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- So we actually set up a new Linus YouTube channel.</p>
</details>

“好的，所以理论上他可以通过数据泄露获得这个用户名和密码，因为我是一个笨蛋，我在不同账户上使用相同的用户名和密码，或者他可以在我的系统上安装一个键盘记录器。当我在输入时，他可以通过这种方式获得。然后我验证我的号码。但他当然有我的号码，因为这实际上并不难找到。理论上我现在应该收到一个双因素验证码，除了……”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Okay, so theoretically he could get this username and password via a dump because I'm a butthead and I use the same username and password across different accounts or he could install a key logger on my system. He could get it that way when I'm typing it in. So then I verify my number. But of course he has my number because that's realistically not that hard to find. And theoretically I'm supposed to get a two factor code right now except...</p>
</details>

“我收到了，820299，我进去了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- I got it, 820299, I'm in.</p>
</details>

“他进去了。他入侵了主机。太疯狂了，是吧。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Linas] He's in. He hacked the mainframe. Wild hey.</p>
</details>

“是的，我们可以入侵你的YouTube账户。我将发布科学视频到Linus Tech Tips上。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yep, we could hack your YouTube account. I'm gonna put, I'm gonna start posting science videos on Linus Tech Tips.</p>
</details>

“哦，那没关系。我相信它们会获得3000万次观看或什么的。所以我没问题。谢谢你的AdSense。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Oh, that's okay. I'm sure they'll get like 30 million views or whatever. So I'll be fine with it. Thanks for the AdSense</p>
</details>

（Derek笑）“成交。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(Derek laughing) - [Derek] Deal.</p>
</details>

你可以在那里看到代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you could see the code right there.</p>
</details>

“没错。所以你可以在底部看到。820299。所以基本上，一旦拦截运行，我就会收到任何发送的短信。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Exactly. So you could see that at the at the bottom. 820299. So basically once the interception is running, then I would receive any SMS sent.</p>
</details>

他永远不会知道他错过了那些信息，或者它们被拦截了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- He would never have known that he missed those messages or that they were intercepts.</p>
</details>

“完全正确，完全正确。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Exact, exact.</p>
</details>

“哇。是的，这看起来很严重。我的意思是，短信双因素认证几乎是默认设置，对吧？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Wow. Yeah, this seems pretty serious. I mean, SMS two-factor authentication is almost the default, right?</p>
</details>

“不幸的是，是的，它不仅是默认设置，在某些情况下，它甚至是唯一的可用选项，有时甚至对于应该极其谨慎对待的账户，比如银行账户，也是如此。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Unfortunately, yes, it's not only the default but in some cases it is the only available option and sometimes that can even be for accounts that should be treated with the utmost of care like a bank account.</p>
</details>

还有第三种攻击方法我们无法向Linus展示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] There's a third method of attack that we weren't able to show Linus.</p>
</details>

他很幸运，他的网络阻止了这些请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lucky for him, his network blocked the requests.</p>
</details>

在许多网络上，你可以使用我们在第二步中收集到的IMSI号码在交换中心信息中，将命令发送到网络深处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">On many networks, you can use the IMSI number in the switching center info we harvested in step two to send a command deeper into the network.</p>
</details>

通过针对连接有IMSI设备的交换中心，我们可以发出一个通常用于合法目的的命令，例如路由和转发呼叫，或根据设备位置提供紧急服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By targeting the switching center where the device with the IMSI is connected, we can issue a command routinely used for legitimate purposes such as routing and forwarding calls or providing emergency services based on the device's location.</p>
</details>

使用这个请求，我们可以追踪目标的位置。这并不像你想象的那么难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Using this request we can track a target's location. It's not as hard as you'd think.</p>
</details>

SS7甚至不依赖GPS来定位某人。事实上，它是在GPS尚未普及之前发明的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">SS7 doesn't even rely on GPS to locate someone. In fact, it was invented before GPS was even in public use.</p>
</details>

一种方法是，如果目标在多个蜂窝塔的范围内，他们的位置可以缩小到信号重叠的区域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way to do this is if a target is in range of multiple cell towers, their location can be narrowed down to where the signals overlap.</p>
</details>

范围内的蜂窝塔越多，位置就越精确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The more towers in range, the more precise the location.</p>
</details>

一种更精确的方法是测量信号从三个蜂窝塔到达手机所需的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A more accurate method measures the time it takes for signals to reach a phone from three towers.</p>
</details>

通过根据传输速度计算距离，我们可以在二维平面上精确定位一个位置，但SS7攻击不使用这两种方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By calculating the distance based on transmission speed, we can pinpoint an exact location on a 2D plane, but SS7 attacks don't use either of these methods.</p>
</details>

他们试图保持隐蔽。SS7位置请求只是识别目标连接到的蜂窝塔。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They try to be subtle. An SS7 location request simply identifies the cell tower the target is connected to.</p>
</details>

在拥有许多蜂窝塔的城市区域，这可以将他们定位在100米以内。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In an urban area with many towers, this can place them to within a hundred meters.</p>
</details>

“你肯定会知道某人在哪个城市街区，如果你想知道他是在家还是在工作，这是一种很好的方法。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You'll definitely know which city block somebody is in and if you wanted to, for instance find out was it at home and or at work, this is a great way to do it.</p>
</details>

“是的，这有点吓人。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Yeah, it's a little bit scary.</p>
</details>

2016年，卡斯滕和他的团队使用这种方法追踪了美国国会议员特德·刘（Ted Lieu）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 2016, Karsten and his team used this method to track US Congressman Ted Lieu.</p>
</details>

“这位国会议员一直在加利福尼亚，更具体地说是在洛杉矶地区。让我们在这里放大一点。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The congressman has been in California, more specifically the LA area. Let's zoom in here a little bit.</p>
</details>

### SS7的现实影响：公主绑架与国家级监控

所以这就是我们做到的。我们执行了三个步骤。我们渗透了SS7，获得了信任并进行了攻击。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that is how we did it. We executed three steps. We infiltrated SS7, gained trust and attacked.</p>
</details>

我们拦截了Linus的电话和短信。我不确定他是否像我一样兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We intercepted Linus phone calls and text messages. I'm not sure he was as excited about it as I was.</p>
</details>

“这就是我们不能拥有美好事物的原因。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- This is why we can't have nice things.</p>
</details>

到目前为止，这只是一点乐趣。我向我的一个朋友演示了这些攻击，但威胁是真实存在的，它们可能带来毁灭性的后果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Up until now, this has just been a bit of fun. I've demonstrated these attacks on a friend of mine, but the threats are real and they can have devastating consequences.</p>
</details>

“他们会杀了她。”船长在拉蒂法被绑架前不久发短信说。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">"They will kill her." The captain texted shortly before Latifa was abducted.</p>
</details>

他的手机是SS7攻击的目标，该攻击涉及我们探索的所有三个步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">His phone was the target of an SS7 attack that involved all three of the steps we explored.</p>
</details>

首先，攻击者租用了多个不同国家的GT，然后在五分钟内发生了以下所有事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To start, the attackers had leased multiple GTs in different countries then the following all happened in a five minute window.</p>
</details>

首先，他们发送了至少七个单独的请求，旨在从他的美国运营商那里获取船长的IMSI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First they sent at least seven separate requests aiming to get the captain's IMSI from his US based operator.</p>
</details>

当这似乎不起作用时，他们又发出了至少四个位置请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When that didn't seem to work, they followed up with at least four location requests.</p>
</details>

那么它成功了吗？所有这些请求都被防火墙阻止了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So did it work? Well, all of these requests were blocked by firewalls.</p>
</details>

这就是我们拥有所有细节的原因。但还有一个我们没有展示的第六个GT。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why we have all the details. But there was a sixth GT we haven't shown.</p>
</details>

这个GT在美国附近，我们没有关于这个GT上请求的信息，因为它们可能没有被阻止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This one nearby in the US, we have no information about the requests on this GT because they likely weren't stopped.</p>
</details>

我们采访了调查记者克罗夫顿·布莱克（Crofton Black），他揭露了这个故事中的SS7漏洞，他是这样告诉我们的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We spoke with Crofton Black, the investigative journalist who revealed the SS7 exploits in this story and this is what he told us.</p>
</details>

“这是SS7参与的一个绝佳例子，因为它说明了一种经典的复杂攻击模式，涉及多个GT和多个国家。这是电信渗透风险的教科书式案例。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">"It's a brilliant example of SS7 involvement because it illustrates a classic sophisticated pattern of attack, multiple GTs and multiple countries. It's a textbook example of telco penetration risks."</p>
</details>

然而，由于阿联酋人也使用了其他软件，如**飞马**（Pegasus: 一种由NSO Group开发的间谍软件，能够远程入侵手机并获取数据），以及其他硬件，如侦察机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Though, because the Emiratis were also using other software like Pegasus and other hardware like spotter planes.</p>
</details>

我们不能说这些中的任何一个就是导致她被发现的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can't say that any single one of these was the thing that led to her being found.</p>
</details>

但证据确凿，SS7被广泛使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the evidence is damning and SS7 is used pretty widely.</p>
</details>

犯罪分子曾使用SS7拦截短信双因素认证码，并从银行账户中窃取数百万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Criminals have used SS7 to intercept SMS two-factor authentication codes and empty millions of dollars from bank accounts.</p>
</details>

对于一些人来说，SS7只是第一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For some SS7 is just the first step.</p>
</details>

NSO Group，一家臭名昭著的以色列网络监控公司，于2014年收购了一家SS7追踪公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The NSO Group, a notorious Israeli cyber surveillance firm acquired an SS7 tracking company in 2014.</p>
</details>

NSO是飞马间谍软件背后的公司，这是一种无需用户点击任何内容即可完全访问目标手机的间谍工具，它会自行嵌入并清除入侵痕迹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">NSO is the company behind Pegasus, a spyware tool that gains complete access to targeted phones without a user clicking anything embedding itself and erasing traces of entry.</p>
</details>

这种**零点击攻击**（zero-click hacks: 无需用户任何交互即可入侵设备的攻击）成本高昂。每次攻击可能花费超过400万美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Such zero click hacks are costly. They can cost more than $4 million per exploit.</p>
</details>

在NSO投入资源针对手机上的特定软件或漏洞之前，他们首先收集基本数据，如设备类型和软件版本，以简化他们的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before NSO commits resources targeting specific software or vulnerabilities on a phone, first they gather basic data like device type and software version to make their lives easier.</p>
</details>

正如你所看到的，使用SS7，这并不难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as you've seen with SS7, this isn't hard.</p>
</details>

我们采访的一位专家测试了一个外国网络，发现有20到30名贵宾在那里持续受到监视，其中包括该国的网络安全负责人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One expert we spoke to tested a foreign network and found 20 to 30 VIPs were constantly under surveillance there, including the country's chief of cybersecurity.</p>
</details>

关于追踪的准确数据很难获得，但另一位专家提供了每年超过250万次追踪尝试的证据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Accurate data on tracking is difficult to come by, but another expert provided evidence of more than two and a half million tracking attempts per year.</p>
</details>

尽管他们提醒我们，被锁定的人通常是国家机构感兴趣的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Though they reminded us that the people being targeted are generally those of interest to state agencies.</p>
</details>

我们无法找到关于拦截尝试的数据，但幸运的是，专家告诉我们这远不那么常见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now we couldn't find data on interception attempts, but luckily experts told us this is far less common.</p>
</details>

所以每年有数百万次恶意SS7请求被发送，但过去情况更糟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So millions of malicious SS7 requests are sent each year, but it used to be even worse.</p>
</details>

过去，你可以发送一个命令来请求SS7上的位置，甚至不需要知道IMSI，网络就会直接提供给你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To request location over SS7, you used to be able to send a command without even knowing the IMSI and the network would just provide it to you.</p>
</details>

没有任何疑问。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No questions asked.</p>
</details>

“经典的例子就是‘随时查询请求’，正如其名称所示，这是一个令人毛骨悚然的命令。我不认为一个网络向另一个网络发送这个命令来查询他们的客户有任何合法目的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The classical example is the anytime interrogation request, which as the name already suggest is have a creepy command. I don't believe there's ever legitimate purpose for one network to send this command to another network interrogating about their customers.</p>
</details>

Derek说，卡斯滕·诺尔和他的安全研究员同事托比亚斯·恩格尔（Tobias Engel）在2014年公开披露了这些漏洞。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] Karsten Nohl and fellow security researcher Tobias Engel exposed these vulnerabilities publicly in 2014.</p>
</details>

“2014年披露的SS7研究给行业敲响了警钟。大多数人听说过SS7追踪和间谍活动是可能的，但他们从未真正见过确凿的证据，尤其是柏林一群乌合之众的黑客，用非常业余的手段就可以进行他们想要的任何类型的SS7黑客攻击，这有多么容易。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- The SS7 research that was disclosed in 2014 was a wake up call to the industry. Most people had heard rumors that SS7 tracking and spying was possible, but they hadn't really seen hard evidence of it and especially how easy it is that ragtag gang of hackers from Berlin with very amateur means can do any type of SS7 hacking that they want.</p>
</details>

“在他们的会议之后，所有德国电信公司立即开始拒绝这些请求。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] After their conference, all of the German telcos immediately started refusing these requests.</p>
</details>

“‘随时集成’是第一个SS7命令，每个人都停止了使用，因为它被滥用了很多，从未被建设性地使用。但还有超过150条其他消息也需要停止，才能使SS7完全安全。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- Anytime integration is the first SS7 command, everyone stopped because it was abused a lot and never used constructively. But there is over 150 other messages that need to be stopped as well to make SS7 be completely secure.</p>
</details>

### SS7的持续存在与个人防护措施

那么，如果SS7有这么多滥用方式，为什么我们还没有摆脱它呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if there are so many ways to abuse SS7, why haven't we gotten rid of it?</p>
</details>

嗯，因为它仍然是2G和3G通信的骨干。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, because it's the backbone of 2G and 3G communications.</p>
</details>

那么，如果我们逐步淘汰2G和3G呢？这已经导致了一些问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what if we phase out 2G and 3G? Well, that has caused problems.</p>
</details>

自2018年以来，欧盟的汽车都配备了强制性的紧急呼叫按钮，在发生事故时会触发。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since 2018 cars in the EU are equipped with mandatory emergency call buttons that trigger in an accident.</p>
</details>

它们需要SIM卡才能工作，为了削减成本，你猜汽车制造商正在使用什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They need a SIM card to work and to cut costs, guess what auto manufacturers are using.</p>
</details>

没错。使用SS7的2G和3G SIM卡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's right. 2G and 3G SIM cards using SS7.</p>
</details>

“你必须有这种遗留支持，否则当4G连接中断时，你将一无所有。伙计，我使用3G的次数并不少，而且我身处大都市区。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You have to have that legacy support or when 4G connectivity drops, you have absolutely nothing left. Dude, the number of times that I'm on 3G, not insignificant. And I'm in a metropolitan area.</p>
</details>

当然，令人惊讶的是，目前还没有全球性的推动来用两种较新的技术版本之一取代SS7。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What's surprising, of course, is that there hasn't been a global push yet to replace SS7 with one of the two newer versions of the technology.</p>
</details>

最新随5G引入的版本看起来相当安全，但这现在是一个**先行者劣势**（first mover disadvantage: 指率先进入市场者可能面临的劣势，如高成本、市场教育成本等）的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The latest of which that was introduced with 5G seems pretty secure, but that's now a problem of first mover disadvantage.</p>
</details>

所以因为网络效应，作为第一个采用技术的人你什么也得不到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So because of the network effects you get nothing out of adopting a technology as the first guy.</p>
</details>

你希望成为最后一个，当所有人都已经连接起来，你才能从加入这个俱乐部中获得全部好处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You wanna be the last one when everyone else is already connected and you get the full benefit from also joining the club.</p>
</details>

“所以即使5G信令协议可以完全阻止这些攻击，许多网络正在使用5G技术，但在网络之间路由呼叫时，SS7仍然是事实上的标准。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- [Derek] So even though the 5G signaling protocol can stop the attacks completely and many networks are using 5G technology on their networks, when routing calls between networks, SS7 is still the de facto standard.</p>
</details>

“你创造了巨大的惯性，用一个可能更适合你的频道而不是我的频道的术语来说。这使得向前发展变得极其困难。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- You create a tremendous amount of inertia to use a term that's probably more your channel than my channel. That makes moving on extremely difficult.</p>
</details>

所以除非出现一些新的重大事件，将这个问题重新提上公众的议程，否则可能还需要10、15甚至20年，SS7网络才能最终关闭。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So unless there are some new major events that put this back on the public radar, it could be another 10, 15, maybe even 20 years until SS7 networks are finally switched off.</p>
</details>

“最疯狂的是，我们利用了这些漏洞，而我只是一个YouTuber。我确实得到了一些优秀的安全研究人员的帮助，但我对这一切的容易程度感到惊讶。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- What's crazy is that we exploited these vulnerabilities and I'm just a YouTuber. I did have the help of some excellent security researchers, but I'm surprised at how easy it all is.</p>
</details>

现在想象一下，如果我得到政府的支持。这是一个真正的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now imagine if I had the backing of a government. This is a real problem.</p>
</details>

那么，只要你有一张SIM卡，你个人能做些什么来保护自己呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what can you do to protect yourself on the personal side as long as you have a SIM card?</p>
</details>

不幸的是，对于位置追踪，你无能为力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unfortunately there's not much you can do about location tracking.</p>
</details>

如果可能的话，选择基于短信的双因素认证的替代方案。这样消息就不会被拦截。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If possible, choose alternatives to SMS based two-factor authentication. So messages can't be intercepted.</p>
</details>

使用认证器应用程序或硬件令牌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Use an Authenticator app or hardware tokens.</p>
</details>

如果你担心电话窃听，请使用加密的基于互联网的通话服务，如Signal或WhatsApp。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you're worried about phone tapping, use encrypted internet based calling services like Signal or WhatsApp.</p>
</details>

我们被告知这主要用于对“感兴趣的人”。那么这对你来说真的重要吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've been told this is mainly used on people of interest. So should it really matter to you?</p>
</details>

“SS7是一个巨大的隐私侵犯，每月都有数百万起滥用案例。隐私侵犯对个人来说是否是一个问题，当然几乎是一个哲学问题，对吧？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">- SS7 is a huge privacy intrusion and there's this millions of abuse cases every single month. Whether privacy intrusion is a problem for individually, of course as almost a philosophical question, right?</p>
</details>

“像我这样在柏林混沌计算机俱乐部（Chaos Computer Club）传统中长大的人，坚信隐私和在不被观察的情况下形成自己思想的能力是民主的先决条件。但许多其他人会争辩说‘没有什么可隐藏的，没有什么可害怕的’。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Somebody who grew up more in the Berlin tradition of the Chaos Computer Club like myself, strongly beliefs that privacy and the ability to kind of form your own thoughts without being observed is a prerequisite for democracy. But many other people would argue nothing to hide, nothing to fear.</p>
</details>

（杂乱的音乐）我们的技术世界永远不会完美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">(scrappy music) - Our technological world will never be perfect.</p>
</details>

当我们保护或替换SS7时，新系统中的漏洞将已经被发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the time we secure or replace SS7, vulnerabilities will already have been found in the new system,</p>
</details>

但幸运的是，有一个简单的方法可以为未来做好准备，那就是每天一点点地积累你的知识和解决问题的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but luckily there's an easy way to be ready for whatever the future holds, build your knowledge and problem solving skills a little bit every day.</p>
</details>

你现在就可以免费开始这样做，通过本视频的赞助商Brilliant。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can start doing that right now for free with this video sponsor, Brilliant.</p>
</details>

Brilliant拥有数千个互动课程，你可以通过实践学习，让你成为一个更好的思考者和问题解决者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant has thousands of interactive lessons where you can learn by doing, making you a better thinker and problem solver.</p>
</details>

你可以从数学和数据分析到技术和编程等各个领域建立真正的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You build real skills in everything from math and data analysis to technology and programming.</p>
</details>

应有尽有。Brilliant的设计独具匠心，效率极高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You name it. Brilliant, is designed to be uniquely effective.</p>
</details>

他们的第一性原理方法帮助你从零开始建立理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Their first principles approach helps you build understanding from the ground up.</p>
</details>

所以你不仅会获得关键概念的知识，还会学会将它们应用于现实世界的情况，同时培养你的直觉，为你提供解决任何问题的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you'll not only gain knowledge of key concepts, you'll learn to apply them to real world situations all while building your intuition, giving you the tools to solve whatever problems come your way.</p>
</details>

例如，Brilliant关于数据聚类的新课程为你提供了与卡斯滕等安全研究人员用来发现数十亿SS7消息中趋势相同的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Brilliant's new course on data clustering, for example, equips you with the same tools, security researchers like Karsten used to spot trends among the billions of SS7 messages.</p>
</details>

这在追捕黑客时非常有用，但你将学到的概念也有助于驾驭一个数据影响一切的世界，从电影推荐到国家政治。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is really helpful when hunting hackers, but the concepts you'll learn also help navigating a world where data influences everything, from what movies are being recommended to national politics.</p>
</details>

Brilliant最好的地方之一是，由于每节课都是小块的，你可以在有几分钟空闲时间时随时随地提升你的技能和磨砺你的思维，帮助你养成一个坚持下去的日常学习习惯，而不是漫无目的地刷手机。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one of the best things about Brilliant is since every lesson is bite sized, you can build your skills and sharpen your mind whenever and wherever you have a few minutes helping you build a daily learning habit that sticks the opposite of mindless scrolling.</p>
</details>

要免费试用Brilliant的所有课程30天，请访问brilliant.org/veritasium，或者你可以扫描二维码或点击描述中的链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To try everything Brilliant has to offer for free for 30 days, visit brilliant.org/veritasium or you can scan the QR code or click that link in the description.</p>
</details>

你还将获得年度高级订阅20%的折扣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You'll also get 20% off an annual premium subscription.</p>
</details>

所以我要感谢Brilliant赞助本视频，也要感谢你的观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I wanna thank Brilliant for sponsoring this video and I wanna thank you for watching.</p>
</details>