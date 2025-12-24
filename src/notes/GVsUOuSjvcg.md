---
area: tech-insights
category: technology
companies_orgs:
- Cornell University
- MIT
- University of Toronto
- Mythic AI
- IBM
- Carnegie Mellon
date: '2022-03-01'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Welch Labs
people:
- analog-computing
products_models:
- Perceptron
- ALVINN
- ImageNet
- AlexNet
- Microsoft Word
project:
- ai-impact-analysis
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=GVsUOuSjvcg
speaker: veritasium
status: evergreen
summary: 本文探讨了模拟计算机从辉煌到衰落，再到在人工智能时代可能复兴的历程。随着数字计算机面临冯·诺依曼瓶颈和摩尔定律的限制，以及神经网络对计算精度要求不高的特性，模拟计算的优势（如高速、低功耗）重新受到关注。文章详细介绍了感知机、ALVINN和AlexNet等人工神经网络的发展，以及Mythic
  AI等公司如何利用模拟技术解决AI计算挑战，展望了模拟与数字混合计算的未来。
tags:
- digital
- geopolitical
- intelligence
- law
- neural-network
title: 模拟计算的复兴：AI时代数字计算的瓶颈与未来
---

### 模拟计算的兴衰与复兴契机

几百年来，**模拟计算机**（Analog Computers: 使用连续可变物理量来表示和处理数据，而非离散的数字）曾是地球上最强大的计算机，它们能够预测日食、潮汐，并引导高射炮。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For hundreds of years, analog computers were the most powerful computers on Earth, predicting eclipses, tides, and guiding anti-aircraft guns.</p>
</details>

随后，随着固态晶体管的出现，**数字计算机**（Digital Computers: 使用离散的数字（通常是二进制的0和1）来表示和处理信息）开始腾飞。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then, with the advent of solid-state transistors, digital computers took off.</p>
</details>

如今，我们使用的几乎所有计算机都是数字的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, virtually every computer we use is digital.</p>
</details>

然而，今天，一系列因素的完美结合正在为模拟技术的复兴创造条件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But today, a perfect storm of factors is setting the scene for a resurgence of analog technology.</p>
</details>

这是一台模拟计算机，通过以特定方式连接这些导线，我可以对其进行编程，以解决一系列微分方程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is an analog computer, and by connecting these wires in particular ways, I can program it to solve a whole range of differential equations.</p>
</details>

例如，这种设置允许我模拟一个阻尼质量在弹簧上振荡的情况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, this setup allows me to simulate a damped mass oscillating on a spring.</p>
</details>

因此，在示波器上，你可以实际看到质量随时间变化的位置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on the oscilloscope, you can actually see the position of the mass over time.</p>
</details>

我还可以改变阻尼、弹簧常数或质量，并观察振荡的幅度和持续时间如何变化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I can vary the damping, or the spring constant, or the mass, and we can see how the amplitude and duration of the oscillations change.</p>
</details>

这台计算机之所以是模拟的，是因为其中没有0和1。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what makes this an analog computer is that there are no zeros and ones in here.</p>
</details>

相反，这里实际上有一个电压，它像弹簧上的质量一样上下振荡。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Instead, there's actually a voltage that oscillates up and down exactly like a mass on a spring.</p>
</details>

电气电路是物理问题的**模拟**（Analog: 指的是一种连续的、与物理现象直接对应的表示方式），它只是发生得更快。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The electrical circuitry is an analog for the physical problem, it just takes place much faster.</p>
</details>

现在，如果我改变电气连接，我可以编程这台计算机来解决其他微分方程，比如**洛伦兹系统**（Lorenz System: 一组非线性微分方程，是混沌理论的早期例子），它是一个大气对流的基本模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if I change the electrical connections, I can program this computer to solve other differential equations, like the Lorenz system, which is a basic model of convection in the atmosphere.</p>
</details>

洛伦兹系统之所以著名，是因为它是最早发现的混沌例子之一。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the Lorenz system is famous because it was one of the first discovered examples of chaos.</p>
</details>

在这里，你可以看到洛伦兹吸引子及其美丽的蝴蝶形状。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here, you can see the Lorenz attractor with its beautiful butterfly shape.</p>
</details>

在这台模拟计算机上，我可以改变参数并实时看到它们的效果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And on this analog computer, I can change the parameters and see their effects in real time.</p>
</details>

### 模拟计算机的优势与局限性

这些例子说明了模拟计算机的一些优势。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these examples illustrate some of the advantages of analog computers.</p>
</details>

它们是极其强大的计算设备，可以快速完成大量计算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They are incredibly powerful computing devices, and they can complete a lot of computations fast.</p>
</details>

此外，它们不需要太多电力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Plus, they don't take much power to do it.</p>
</details>

对于数字计算机，如果你想添加两个八位数字，你需要大约50个晶体管，而对于模拟计算机，你只需连接两根导线就可以添加两个电流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With a digital computer, if you wanna add two eight-bit numbers, you need around 50 transistors, whereas with an analog computer, you can add two currents, just by connecting two wires.</p>
</details>

对于数字计算机来说，要将两个数字相乘，你需要大约1000个晶体管全部进行0和1的切换，而对于模拟计算机，你可以让电流通过电阻器，然后这个电阻器两端的电压将是电流乘以电阻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With a digital computer to multiply two numbers, you need on the order of 1,000 transistors all switching zeros and ones, whereas with an analog computer, you can pass a current through a resistor, and then the voltage across this resistor will be I times R.</p>
</details>

所以，实际上你已经将两个数字相乘了。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">So effectively, you have multiplied two numbers together.</p>
</details>

但模拟计算机也有其缺点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But analog computers also have their drawbacks.</p>
</details>

首先，它们不是通用计算设备。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For one thing, they are not general-purpose computing devices.</p>
</details>

我的意思是，你不会在这台设备上运行**Microsoft Word**（微软公司开发的文字处理软件）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, you're not gonna run Microsoft Word on this thing.</p>
</details>

而且，由于输入和输出是连续的，我无法输入精确的值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And also, since the inputs and outputs are continuous, I can't input exact values.</p>
</details>

所以，如果我尝试重复相同的计算，我永远不会得到完全相同的答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I try to repeat the same calculation, I'm never going to get the exact same answer.</p>
</details>

此外，考虑一下模拟计算机的制造。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Plus, think about manufacturing analog computers.</p>
</details>

组件（如电阻器或电容器）的精确值总会有一些差异。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's always gonna be some variation in the exact value of components, like resistors or capacitors.</p>
</details>

因此，作为一般经验法则，你可以预期大约1%的误差。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So as a general rule of thumb, you can expect about a 1% error.</p>
</details>

所以，当你想到模拟计算机时，你可以想到它们强大、快速且节能，但同时也是单一用途、不可重复且不精确的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when you think of analog computers, you can think powerful, fast, and energy-efficient, but also single-purpose, non-repeatable, and inexact.</p>
</details>

如果这些听起来像是无法接受的缺点，那很可能就是。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if those sound like deal-breakers, it's because they probably are.</p>
</details>

我认为这些是模拟计算机在数字计算机变得可行后很快失宠的主要原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think these are the major reasons why analog computers fell out of favor as soon as digital computers became viable.</p>
</details>

### 人工智能的崛起与挑战

现在，这就是为什么模拟计算机可能卷土重来的原因。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, here's why analog computers may be making a comeback.</p>
</details>

这一切都始于**人工智能**（Artificial Intelligence: 模拟人类智能的机器能力）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It all starts with artificial intelligence.</p>
</details>

一台机器已被编程来观察和移动物体。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A machine has been programmed to see and to move objects.</p>
</details>

人工智能并非新生事物。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">AI isn't new.</p>
</details>

这个术语早在1956年就被创造出来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The term was coined back in 1956.</p>
</details>

1958年，康奈尔大学（Cornell University）心理学家**弗兰克·罗森布拉特**（Frank Rosenblatt）建造了**感知机**（Perceptron: 一种早期的人工神经网络模型，旨在模拟大脑神经元的工作方式），旨在模仿我们大脑中神经元的放电方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 1958, Cornell University psychologist, Frank Rosenblatt, built the perceptron, designed to mimic how neurons fire in our brains.</p>
</details>

这是我们大脑中神经元工作方式的基本模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here's a basic model of how neurons in our brains work.</p>
</details>

单个神经元可以放电或不放电，因此其激活水平可以表示为1或0。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">An individual neuron can either fire or not, so its level of activation can be represented as a one or a zero.</p>
</details>

一个神经元的输入是来自许多其他神经元的输出，但这些神经元之间的连接强度各不相同，因此每个连接都可以被赋予不同的**权重**（Weight: 在神经网络中，表示输入信号对神经元输出影响程度的参数）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The input to one neuron is the output from a bunch other neurons, but the strength of these connections between neurons varies, so each one can be given a different weight.</p>
</details>

有些连接是兴奋性的，因此它们具有正权重，而另一些是抑制性的，因此它们具有负权重。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some connections are excitatory, so they have positive weights, while others are inhibitory, so they have negative weights.</p>
</details>

要确定一个特定神经元是否放电，方法是获取每个输入神经元的激活值并乘以其权重，然后将它们全部加起来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the way to figure out whether a particular neuron fires, is to take the activation of each input neuron and multiply by its weight, and then add these all together.</p>
</details>

如果它们的总和大于某个称为**偏置**（Bias: 神经网络中的一个可学习参数，用于调整神经元的激活阈值）的数字，那么神经元就会放电；如果小于该数字，神经元就不会放电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If their sum is greater than some number called the bias, then the neuron fires, but if it's less than that, the neuron doesn't fire.</p>
</details>

作为输入，罗森布拉特的感知机有400个光电管，排列成一个方形网格，以捕捉20x20像素的图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As input, Rosenblatt's perceptron had 400 photocells arranged in a square grid, to capture a 20 by 20-pixel image.</p>
</details>

你可以将每个像素视为一个输入神经元，其激活值是像素的亮度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of each pixel as an input neuron, with its activation being the brightness of the pixel.</p>
</details>

虽然严格来说，激活值应该是0或1，但我们可以让它取0到1之间的任何值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Although strictly speaking, the activation should be either zero or one, we can let it take any value between zero and one.</p>
</details>

所有这些神经元都连接到一个单一的输出神经元，每个连接都通过其自己的可调权重。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All of these neurons are connected to a single output neuron, each via its own adjustable weight.</p>
</details>

因此，要看输出神经元是否会放电，你需要将每个神经元的激活值乘以其权重，然后将它们加起来。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to see if the output neuron will fire, you multiply the activation of each neuron by its weight, and add them together.</p>
</details>

这本质上是一个**向量点积**（Vector Dot Product: 两个向量的对应分量相乘后求和，结果是一个标量）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is essentially a vector dot product.</p>
</details>

如果结果大于偏置，神经元就会放电；如果不是，它就不会放电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the answer is larger than the bias, the neuron fires, and if not, it doesn't.</p>
</details>

感知机的目标是可靠地区分两种图像，比如矩形和圆形。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the goal of the perceptron was to reliably distinguish between two images, like a rectangle and a circle.</p>
</details>

例如，当呈现圆形时，输出神经元总是会放电，但当呈现矩形时则永远不会。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, the output neuron could always fire when presented with a circle, but never when presented with a rectangle.</p>
</details>

为了实现这一点，感知机必须经过**训练**（Training: 在机器学习中，通过向模型输入大量数据并调整其参数，使其学习并优化性能），即向其展示一系列不同的圆形和矩形，并相应地调整其权重。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To achieve this, the perception had to be trained, that is, shown a series of different circles and rectangles, and have its weights adjusted accordingly.</p>
</details>

由于图像的每个像素都有一个独特的权重，我们可以将这些权重可视化为图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can visualize the weights as an image, since there's a unique weight for each pixel of the image.</p>
</details>

最初，罗森布拉特将所有权重设置为零。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Initially, Rosenblatt set all the weights to zero.</p>
</details>

如果感知机的输出是正确的，例如，这里显示了一个矩形，并且输出神经元没有放电，那么权重就不会改变。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the perceptron's output is correct, for example, here it's shown a rectangle and the output neuron doesn't fire, no change is made to the weights.</p>
</details>

但如果错了，那么权重就会被调整。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if it's wrong, then the weights are adjusted.</p>
</details>

更新权重的算法非常简单。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The algorithm for updating the weights is remarkably simple.</p>
</details>

在这里，当显示一个圆形时，输出神经元本应放电却没有放电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here, the output neuron didn't fire when it was supposed to because it was shown a circle.</p>
</details>

所以要修改权重，你只需将输入激活值加到权重上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to modify the weights, you simply add the input activations to the weights.</p>
</details>

如果输出神经元在不应该放电时放电了，比如这里显示一个矩形时，那么你就从权重中减去输入激活值，并持续这样做，直到感知机正确识别所有训练图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the output neuron fires when it shouldn't, like here, when shown a rectangle, well, then you subtract the input activations from the weights, and you keep doing this until the perceptron correctly identifies all the training images.</p>
</details>

结果表明，只要有可能将这两个类别映射到不同的组中，这个算法就总会收敛。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was shown that this algorithm will always converge, so long as it's possible to map the two categories into distinct groups.</p>
</details>

感知机能够区分不同的形状，比如矩形和三角形，或者不同的字母。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The perceptron was capable of distinguishing between different shapes, like rectangles and triangles, or between different letters.</p>
</details>

据罗森布拉特说，它甚至能分辨猫和狗的区别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And according to Rosenblatt, it could even tell the difference between cats and dogs.</p>
</details>

他说这台机器能够进行“原创性思考”，媒体也对此趋之若鹜。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He said the machine was capable of what amounts to original thought, and the media lapped it up.</p>
</details>

《纽约时报》称感知机是“一台电子计算机的胚胎，海军期望它能行走、说话、看、写、自我复制并意识到自身存在”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The "New York Times" called the perceptron "the embryo of an electronic computer that the Navy expects will be able to walk, talk, see, write, reproduce itself, and be conscious of its existence."</p>
</details>

在大量示例训练之后，它被赋予了从未见过的新面孔，并能够成功区分男性和女性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">After training on lots of examples, it's given new faces it has never seen, and is able to successfully distinguish male from female.</p>
</details>

它学会了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has learned.</p>
</details>

实际上，感知机能做的事情非常有限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In reality, the perceptron was pretty limited in what it could do.</p>
</details>

它实际上无法区分狗和猫。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It could not, in fact, tell apart dogs from cats.</p>
</details>

**麻省理工学院**（MIT）的巨擘**明斯基**（Minsky）和**帕佩特**（Papert）在1969年的一本书中提出了这些及其他批评。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This and other critiques were raised in a book by MIT giants, Minsky and Papert, in 1969.</p>
</details>

这导致了人工神经网络和整个AI领域的萧条期。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that led to a bust period for artificial neural networks and AI in general.</p>
</details>

这被称为第一次**AI寒冬**（AI Winter: 指人工智能研究资金和兴趣大幅下降的时期）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's known as the first AI winter.</p>
</details>

罗森布拉特没有熬过这个寒冬。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Rosenblatt did not survive this winter.</p>
</details>

在他43岁生日那天，他在切萨皮克湾航行时溺水身亡。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">He drowned while sailing in Chesapeake Bay on his 43rd birthday.</p>
</details>

### 人工神经网络的演进

NAV实验室是一辆适合公路行驶的卡车，经过改装，研究人员或计算机可以根据需要控制车辆。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The NAV Lab is a road-worthy truck, modified so that researchers or computers can control the vehicle as occasion demands.</p>
</details>

在20世纪80年代，**卡内基梅隆大学**（Carnegie Mellon）的研究人员创造了第一批自动驾驶汽车之一，从而迎来了人工智能的复兴。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the 1980s, there was an AI resurgence when researchers at Carnegie Mellon created one of the first self-driving cars.</p>
</details>

这辆车由一个名为**ALVINN**（Autonomous Land Vehicle In a Neural Network: 一种早期用于自动驾驶的人工神经网络）的人工神经网络驾驶。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The vehicle was steered by an artificial neural network called ALVINN.</p>
</details>

它与感知机相似，不同之处在于它在输入和输出之间有一个**隐藏层**（Hidden Layer: 神经网络中介于输入层和输出层之间的层，用于进行复杂的特征提取和转换）的人工神经元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was similar to the perceptron, except it had a hidden layer of artificial neurons between the input and output.</p>
</details>

作为输入，ALVINN接收了前方道路的30x32像素图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As input, ALVINN received 30 by 32-pixel images of the road ahead.</p>
</details>

这里我将它们显示为60x64像素。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here, I'm showing them as 60 by 64 pixels.</p>
</details>

但这些输入神经元中的每一个都通过一个可调权重连接到一个包含四个神经元的隐藏层。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But each of these input neurons was connected via an adjustable weight to a hidden layer of four neurons.</p>
</details>

这些神经元又各自连接到32个输出神经元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These were each connected to 32 output neurons.</p>
</details>

因此，要从网络的一层到下一层，你需要执行**矩阵乘法**（Matrix Multiplication: 两个矩阵相乘的数学运算，是神经网络中的核心计算之一）：输入激活值乘以权重。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to go from one layer of the network to the next, you perform a matrix multiplication: the input activation times the weights.</p>
</details>

激活值最大的输出神经元决定了转向角度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The output neuron with the greatest activation determines the steering angle.</p>
</details>

为了训练神经网络，一名人类驾驶员驾驶车辆，为给定的输入图像提供正确的转向角度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To train the neural net, a human drove the vehicle, providing the correct steering angle for a given input image.</p>
</details>

神经网络中的所有权重都通过训练进行调整，以便ALVINN的输出更好地匹配人类驾驶员的输出。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All the weights in the neural network were adjusted through the training so that ALVINN's output better matched that of the human driver.</p>
</details>

调整权重的方法称为**反向传播**（Backpropagation: 训练神经网络的常用算法，通过计算损失函数对权重的梯度来更新权重），我在这里不详细介绍，但**Welch Labs**有一个很棒的系列视频，我会在描述中提供链接。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The method for adjusting the weights is called backpropagation, which I won't go into here, but Welch Labs has a great series on this, which I'll link to in the description.</p>
</details>

同样，你可以将四个隐藏神经元的权重可视化为图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, you can visualize the weights for the four hidden neurons as images.</p>
</details>

权重最初被设置为随机值，但随着训练的进行，计算机学会识别某些模式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The weights are initially set to be random, but as training progresses, the computer learns to pick up on certain patterns.</p>
</details>

你可以看到路标在权重中浮现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see the road markings emerge in the weights.</p>
</details>

同时，输出转向角度也与人类转向角度趋于一致。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Simultaneously, the output steering angle coalesces onto the human steering angle.</p>
</details>

这台计算机以每小时一到两公里的最高速度驾驶车辆。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The computer drove the vehicle at a top speed of around one or two kilometers per hour.</p>
</details>

它的速度受限于计算机执行矩阵乘法的速度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It was limited by the speed at which the computer could perform matrix multiplication.</p>
</details>

尽管取得了这些进展，人工神经网络在看似简单的任务上仍然举步维艰，比如区分猫和狗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Despite these advances, artificial neural networks still struggled with seemingly simple tasks, like telling apart cats and dogs.</p>
</details>

没有人知道是硬件还是软件是薄弱环节。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And no one knew whether hardware or software was the weak link.</p>
</details>

我的意思是，我们是否有一个好的智能模型，只是需要更多的计算能力？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, did we have a good model of intelligence, we just needed more computer power?</p>
</details>

或者，我们对如何制造智能系统完全错了？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or, did we have the wrong idea about how to make intelligence systems altogether?</p>
</details>

因此，人工智能在20世纪90年代又经历了一次低谷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So artificial intelligence experienced another lull in the 1990s.</p>
</details>

到2000年代中期，大多数AI研究人员都专注于改进算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">By the mid 2000s, most AI researchers were focused on improving algorithms.</p>
</details>

但一位研究员，**李飞飞**（Fei-Fei Li），认为可能存在不同的问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But one researcher, Fei-Fei Li, thought maybe there was a different problem.</p>
</details>

也许这些人工神经网络只是需要更多的数据进行训练。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe these artificial neural networks just needed more data to train on.</p>
</details>

所以她计划绘制出整个物体世界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So she planned to map out the entire world of objects.</p>
</details>

从2006年到2009年，她创建了**ImageNet**（一个大型视觉数据库，包含数百万张带有人工标注的图像，用于训练计算机视觉模型），这是一个包含120万张人工标注图像的数据库，在当时是构建的最大的标注图像数据集。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">From 2006 to 2009, she created ImageNet, a database of 1.2 million human-labeled images, which at the time, was the largest labeled image dataset ever constructed.</p>
</details>

从2010年到2017年，ImageNet每年举办一次竞赛：**ImageNet大规模视觉识别挑战赛**（ImageNet Large Scale Visual Recognition Challenge: 基于ImageNet数据集的年度图像识别竞赛），软件程序在此竞赛中竞争正确检测和分类图像。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And from 2010 to 2017, ImageNet ran an annual contest: the ImageNet Large Scale Visual Recognition Challenge, where software programs competed to correctly detect and classify images.</p>
</details>

图像被分为1000个不同的类别，包括90种不同的狗品种。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Images were classified into 1,000 different categories, including 90 different dog breeds.</p>
</details>

参加此竞赛的神经网络将有一个包含1000个神经元的输出层，每个神经元对应图像中可能出现的物体类别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A neural network competing in this competition would have an output layer of 1,000 neurons, each corresponding to a category of object that could appear in the image.</p>
</details>

如果图像包含，比如说，一只德国牧羊犬，那么对应德国牧羊犬的输出神经元应该具有最高的激活值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If the image contains, say, a German shepherd, then the output neuron corresponding to German shepherd should have the highest activation.</p>
</details>

不出所料，这被证明是一个艰巨的挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unsurprisingly, it turned out to be a tough challenge.</p>
</details>

判断AI性能的一种方法是查看前五个最高神经元激活值中不包含正确类别的频率。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One way to judge the performance of an AI is to see how often the five highest neuron activations do not include the correct category.</p>
</details>

这就是所谓的**Top-5错误率**（Top-5 Error Rate: 在图像分类任务中，如果正确类别不在模型预测的前五个最有可能的类别中，则算作一个错误）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is the so-called top-5 error rate.</p>
</details>

2010年，表现最好的模型Top-5错误率为28.2%，这意味着近三分之一的时间里，正确答案不在其前五名猜测之列。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 2010, the best performer had a top-5 error rate of 28.2%, meaning that nearly 1/3 of the time, the correct answer was not among its top five guesses.</p>
</details>

2011年，表现最好的错误率为25.8%，这是一个显著的进步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In 2011, the error rate of the best performer was 25.8%, a substantial improvement.</p>
</details>

但第二年，**多伦多大学**（University of Toronto）的一个名为**AlexNet**（一个深度卷积神经网络，在2012年的ImageNet挑战赛中取得了突破性成果）的人工神经网络以仅16.4%的Top-5错误率击败了所有竞争对手。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the next year, an artificial neural network from the University of Toronto, called AlexNet, blew away the competition with a top-5 error rate of just 16.4%.</p>
</details>

AlexNet的独特之处在于其规模和深度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What set AlexNet apart was its size and depth.</p>
</details>

该网络由八层组成，总共有50万个神经元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The network consisted of eight layers, and in total, 500,000 neurons.</p>
</details>

为了训练AlexNet，必须使用训练数据库仔细调整6000万个权重和偏置。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To train AlexNet, 60 million weights and biases had to be carefully adjusted using the training database.</p>
</details>

由于所有这些大型矩阵乘法，处理单个图像需要7亿次单独的数学运算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because of all the big matrix multiplications, processing a single image required 700 million individual math operations.</p>
</details>

因此，训练是计算密集型的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So training was computationally intensive.</p>
</details>

该团队通过开创性地使用**GPU**（Graphical Processing Units: 图形处理器，最初用于渲染图像，但因其并行处理能力而广泛用于深度学习），即图形处理单元，成功解决了这个问题，GPU传统上用于驱动显示器和屏幕。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The team managed it by pioneering the use of GPUs, graphical processing units, which are traditionally used for driving displays, screens.</p>
</details>

因此，它们专门用于快速并行计算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they're specialized for fast parallel computations.</p>
</details>

描述他们研究的AlexNet论文是一部轰动之作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The AlexNet paper describing their research is a blockbuster.</p>
</details>

它现在已被引用超过10万次，并指出神经网络的规模是其成功的关键。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's now been cited over 100,000 times, and it identifies the scale of the neural network as key to its success.</p>
</details>

训练和运行网络需要大量的计算，但性能的提升是值得的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It takes a lot of computation to train and run the network, but the improvement in performance is worth it.</p>
</details>

在其他人效仿其做法后，ImageNet竞赛的Top-5错误率在接下来的几年中急剧下降，到2015年降至3.6%。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With others following their lead, the top-5 error rate on the ImageNet competition plummeted in the years that followed, down to 3.6% in 2015.</p>
</details>

这甚至优于人类的表现。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is better than human performance.</p>
</details>

实现这一成就的神经网络拥有100层神经元。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The neural network that achieved this had 100 layers of neurons.</p>
</details>

### 数字计算的瓶颈与模拟计算的机遇

因此，未来是明确的：我们将看到对更大神经网络的需求不断增加。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the future is clear: We will see ever increasing demand for ever larger neural networks.</p>
</details>

而这带来了几个问题：
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is a problem for several reasons:</p>
</details>

一个是能源消耗。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One is energy consumption.</p>
</details>

训练一个神经网络所需的电量相当于三个家庭一年的用电量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Training a neural network requires an amount of electricity similar to the yearly consumption of three households.</p>
</details>

另一个问题是所谓的**冯·诺依曼瓶颈**（Von Neumann Bottleneck: 指计算机CPU与内存之间数据传输速率的限制，成为系统性能的瓶颈）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another issue is the so-called Von Neumann Bottleneck.</p>
</details>

几乎所有现代数字计算机都将数据存储在内存中，然后通过总线按需访问。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Virtually every modern digital computer stores data in memory, and then accesses it as needed over a bus.</p>
</details>

在执行深度神经网络所需的大规模矩阵乘法时，大部分时间和能量都花在获取这些权重值上，而不是实际进行计算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When performing the huge matrix multiplications required by deep neural networks, most of the time and energy goes into fetching those weight values rather than actually doing the computation.</p>
</details>

最后，还有**摩尔定律**（Moore's Law: 指集成电路芯片上可容纳的晶体管数量大约每两年翻一番）的限制。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, there are the limitations of Moore's Law.</p>
</details>

几十年来，芯片上的晶体管数量大约每两年翻一番，但现在晶体管的尺寸正接近原子的尺寸。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For decades, the number of transistors on a chip has been doubling approximately every two years, but now the size of a transistor is approaching the size of an atom.</p>
</details>

因此，进一步小型化存在一些根本性的物理挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there are some fundamental physical challenges to further miniaturization.</p>
</details>

因此，这对模拟计算机来说是完美的时机。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the perfect storm for analog computers.</p>
</details>

数字计算机正在达到其极限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Digital computers are reaching their limits.</p>
</details>

与此同时，神经网络正变得越来越流行，它们的大部分工作都归结为一个单一任务：矩阵乘法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Meanwhile, neural networks are exploding in popularity, and a lot of what they do boils down to a single task: matrix multiplication.</p>
</details>

最重要的是，神经网络不需要数字计算机的精确度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Best of all, neural networks don't need the precision of digital computers.</p>
</details>

无论神经网络有96%还是98%的信心图像中包含一只鸡，这并不重要，它仍然是一只鸡。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Whether the neural net is 96% or 98% confident the image contains a chicken, it doesn't really matter, it's still a chicken.</p>
</details>

因此，可以容忍组件或条件中的轻微变异。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So slight variability in components or conditions can be tolerated.</p>
</details>

### Mythic AI的创新实践

我去了德克萨斯州一家名为**Mythic AI**的模拟计算初创公司。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I went to an analog computing startup in Texas, called Mythic AI.</p>
</details>

他们正在这里创建用于运行神经网络的模拟芯片。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here, they're creating analog chips to run neural networks.</p>
</details>

他们向我演示了几种AI算法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they demonstrated several AI algorithms for me.</p>
</details>

哦，你看，它捕捉到你了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, there you go. See, it's getting you.</p>
</details>

是的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

这太迷人了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's fascinating.</p>
</details>

最大的用例是增强现实和虚拟现实。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The biggest use case is augmented in virtual reality.</p>
</details>

如果你的朋友在不同的地方，他们在自己的家里，你在自己的家里，你们实际上可以在虚拟世界中互相渲染。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If your friend is in a different, they're at their house and you're at your house, you can actually render each other in the virtual world.</p>
</details>

所以它需要非常快速地捕捉你的姿势，然后在VR世界中渲染它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it needs to really quickly capture your pose, and then render it in the VR world.</p>
</details>

等等，这是为了**元宇宙**（Metaverse: 一个虚拟的、互联的数字世界，用户可以在其中进行社交、工作和娱乐）吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, hang on, is this for the metaverse thing?</p>
</details>

是的，这是一个非常元宇宙的应用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, this is a very metaverse application.</p>
</details>

这是仅通过一个网络摄像头进行的深度估计。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is depth estimation from just a single webcam.</p>
</details>

它只是捕捉这个场景，然后生成一个热图。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's just taking this scene, and then it's doing a heat map.</p>
</details>

所以如果它很亮，就意味着它很近。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if it's bright, it means it's close.</p>
</details>

如果它很远，它就会变黑。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if it's far away, it makes it black.</p>
</details>

现在所有这些算法都可以在数字计算机上运行，但在这里，矩阵乘法实际上是在模拟域中进行的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now all these algorithms can be run on digital computers, but here, the matrix multiplication is actually taking place in the analog domain.</p>
</details>

为了实现这一点，Mythic重新利用了数字**闪存单元**（Flash Storage Cells: 一种非易失性存储单元，用于存储数字数据）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To make this possible, Mythic has repurposed digital flash storage cells.</p>
</details>

通常这些被用作存储1或0的内存。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Normally these are used as memory to store either a one or a zero.</p>
</details>

如果你对控制栅极施加一个大的正电压，电子会穿过绝缘屏障并被困在浮栅上。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you apply a large positive voltage to the control gate, electrons tunnel up through an insulating barrier and become trapped on the floating gate.</p>
</details>

移除电压后，电子可以在浮栅上停留数十年，阻止单元导电。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Remove the voltage, and the electrons can remain on the floating gate for decades, preventing the cell from conducting current.</p>
</details>

这就是你如何存储1或0的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's how you can store either a one or a zero.</p>
</details>

你可以通过施加一个小的电压来读出存储的值。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can read out the stored value by applying a small voltage.</p>
</details>

如果浮栅上有电子，就没有电流流动，那就是0。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If there are electrons on the floating gate, no current flows, so that's a zero.</p>
</details>

如果没有电子，那么电流就会流动，那就是1。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If there aren't electrons, then current does flow, and that's a one.</p>
</details>

现在Mythic的想法是，不将这些单元用作开关，而是用作可变电阻器。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now Mythic's idea is to use these cells not as on/off switches, but as variable resistors.</p>
</details>

他们通过在每个浮栅上放置特定数量的电子来实现这一点，而不是全部或全无。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They do this by putting a specific number of electrons on each floating gate, instead of all or nothing.</p>
</details>

电子数量越多，通道的电阻就越高。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The greater the number of electrons, the higher the resistance of the channel.</p>
</details>

当你稍后施加一个小的电压时，流过的电流等于电压除以电阻。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you later apply a small voltage, the current that flows is equal to V over R.</p>
</details>

但你也可以将其视为电压乘以**电导**（Conductance: 电阻的倒数，表示材料传导电流的能力），其中电导只是电阻的倒数。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you can also think of this as voltage times conductance, where conductance is just the reciprocal of resistance.</p>
</details>

因此，一个闪存单元可以用来将两个值相乘：电压乘以电导。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a single flash cell can be used to multiply two values together, voltage times conductance.</p>
</details>

所以要用这个来运行人工神经网络，他们首先将所有权重写入闪存单元作为每个单元的电导。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to use this to run an artificial neural network, well they first write all the weights to the flash cells as each cell's conductance.</p>
</details>

然后，他们将激活值作为单元上的电压输入。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then, they input the activation values as the voltage on the cells.</p>
</details>

产生的电流是电压乘以电导的乘积，也就是激活值乘以权重。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the resulting current is the product of voltage times conductance, which is activation times weight.</p>
</details>

这些单元以这样一种方式连接在一起，即每次乘法产生的电流会相加，从而完成矩阵乘法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The cells are wired together in such a way that the current from each multiplication adds together, completing the matrix multiplication.</p>
</details>

这是我们的第一个产品。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is our first product.</p>
</details>

它每秒可以进行25万亿次数学运算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This can do 25 trillion math operations per second.</p>
</details>

25万亿。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">25 trillion.</p>
</details>

是的，每秒25万亿次数学运算，就在这个小芯片里，功耗约为3瓦。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep, 25 trillion math operations per second, in this little chip here, burning about three watts of power.</p>
</details>

它与数字芯片相比如何？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How does it compare to a digital chip?</p>
</details>

新的数字系统每秒可以进行25到100万亿次运算，但它们是庞大的、价值数千美元的系统，功耗在50到100瓦之间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The newer digital systems can do anywhere from 25 to 100 trillion operations per second, but they are big, thousand-dollar systems that are spitting out 50 to 100 watts of power.</p>
</details>

显然这不是一个完全公平的比较，对吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Obviously this isn't like an apples apples comparison, right?</p>
</details>

不，这不是一个完全公平的比较。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, it's not apples to apples.</p>
</details>

我的意思是，训练那些算法，你需要像这样的庞大硬件。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, training those algorithms, you need big hardware like this.</p>
</details>

你可以在GPU上做各种各样的事情，但如果你专门做AI工作负载并想部署它们，你可以使用这个。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can just do all sorts of stuff on the GPU, but if you specifically are doing AI workloads and you wanna deploy 'em, you could use this instead.</p>
</details>

你可以想象它们被用于安全摄像头、自动系统、制造用的检测设备。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can imagine them in security cameras, autonomous systems, inspection equipment for manufacturing.</p>
</details>

每次他们生产**Frito-Lay**（一家知名的零食品牌）薯片时，都会用摄像头检查，不合格的薯片会被吹下传送带。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every time they make a Frito-Lay chip, they inspect it with a camera, and the bad Fritos get blown off of the conveyor belt.</p>
</details>

但他们正在使用人工智能来识别哪些薯片是好的，哪些是坏的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But they're using artificial intelligence to spot which Fritos are good and bad.</p>
</details>

### 模拟与数字的融合及未来展望

有些人提议在智能家居音箱中使用模拟电路，专门用于监听唤醒词，比如Alexa或Siri。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some have proposed using analog circuitry in smart home speakers, solely to listen for the wake word, like Alexa or Siri.</p>
</details>

它们会消耗更少的电量，并能够快速可靠地开启设备的数字电路。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They would use a lot less power and be able to quickly and reliably turn on the digital circuitry of the device.</p>
</details>

但你仍然必须应对模拟计算的挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you still have to deal with the challenges of analog.</p>
</details>

所以对于一个流行的网络，你将进行50个序列的矩阵乘法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for one of the popular networks, there would be 50 sequences of matrix multiplies that you're doing.</p>
</details>

现在，如果你完全在模拟域中进行，等到它到达输出时，信号就会严重失真，以至于你根本得不到任何结果。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if you did that entirely in the analog domain, by the time it gets to the output, it's just so distorted that you don't have any result at all.</p>
</details>

所以你需要将其从模拟域转换回数字域，发送到下一个处理块，然后再将其转换回模拟域。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you convert it from the analog domain, back to the digital domain, send it to the next processing block, and then you convert it into the analog domain again.</p>
</details>

这使得你能够保留信号。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that allows you to preserve the signal.</p>
</details>

你知道，当罗森布拉特首次设置他的感知机时，他使用的是一台数字**IBM**（国际商业机器公司，一家全球知名的信息技术和咨询公司）计算机。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, when Rosenblatt was first setting up his perceptron, he used a digital IBM computer.</p>
</details>

发现它太慢了，他建造了一台定制的模拟计算机，配有可变电阻器和小电机来驱动它们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finding it too slow, he built a custom analog computer, complete with variable resistors and little motors to drive them.</p>
</details>

最终，他关于神经网络的想法被证明是正确的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Ultimately, his idea of neural networks turned out to be right.</p>
</details>

也许他对模拟计算的看法也是正确的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe he was right about analog, too.</p>
</details>

现在，我不能说模拟计算机是否会像上个世纪的数字计算机那样腾飞，但它们似乎更适合我们今天希望计算机执行的许多任务，这有点有趣，因为我一直认为数字是处理信息的最佳方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I can't say whether analog computers will take off the way digital did last century, but they do seem to be better suited to a lot of the tasks that we want computers to perform today, which is a little bit funny because I always thought of digital as the optimal way of processing information.</p>
</details>

在过去的50年里，从音乐到图片，再到视频，一切都已数字化。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Everything from music to pictures, to video has all gone digital in the last 50 years.</p>
</details>

但也许在100年后，我们回过头来看数字技术，它不是信息技术的终点，而是一个起点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But maybe in a 100 years, we will look back on digital, not not as the end point of information technology, but as a starting point.</p>
</details>

我们的大脑是数字的，因为神经元要么放电，要么不放电，但它们也是模拟的，因为思考同时在所有地方发生。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our brains are digital in that a neuron either fires or it doesn't, but they're also analog in that thinking takes place everywhere, all at once.</p>
</details>

所以，也许我们实现真正的人工智能，即像我们一样思考的机器，所需要的就是模拟的力量。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So maybe what we need to achieve true artificial intelligence, machines that think like us, is the power of analog.</p>
</details>