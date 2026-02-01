---
author: Best Partners TV
date: '2026-02-01'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=HylFtyFLkvU
speaker: Best Partners TV
tags:
  - gradient-descent
  - neural-networks
  - backpropagation
  - cost-function
  - machine-learning
title: 神经网络学习的核心：梯度下降与反向传播详解
summary: 本视频深入解析了神经网络学习的基石——梯度下降算法。从类比人类学习引入，阐述了标签数据、成本函数的作用，并解释了为何直接求解不可行。重点讲解了梯度下降如何通过迭代优化参数以最小化成本，以及反向传播算法如何高效计算梯度。内容涵盖学习率、局部最小值等关键概念，为理解AI学习机制奠定基础。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs: []
products_models: []
media_books: []
status: evergreen
---
### 引言：神经网络的学习难题与类比

在上一期视频中，我们构建了一个用于识别手写数字的神经网络，它包含一个输入层（784个神经元，对应28x28像素的图像）、两个隐藏层（各16个神经元）以及一个输出层（10个神经元，代表0到9的置信度）。我们理解了神经元激活值的传递与计算，并认识到这个看似简单的网络拥有172个可调的权重和偏置。然而，一个关键问题悬而未决：如何调整这172个参数，使一个最初对数字一无所知的网络能够准确识别它们？今天，我们将揭开神经网络学习的魔法——**梯度下降**（Gradient Descent）。这不仅是神经网络学习的核心，也是支撑大多数机器学习算法的底层逻辑。

在深入之前，让我们回顾一下人类学习与传统编程的根本区别。教孩子识别数字时，你无需告诉他们“数字3的上半部分是一个半径为x像素的圆弧，下半部分是一个有特定倾角的直线”。你只需展示大量数字3的图片并告知“这是3”，他们便能逐渐掌握核心特征，甚至识别出变形的3。而传统编程，正如我们之前所讨论的，需要你为识别数字3编写所有明确的规则。但数字的书写方式千变万化，你永远无法穷尽所有规则。神经网络学习恰恰模仿了这种人类学习方式，它不要求我们编写具体的识别算法，而是通过观察大量带标签的训练数据，自行调整这172个权重和偏置，从而学会识别数字。

<details><summary>Original English</summary>
Hello, everyone. This is Best Partner, and I am Defy. In the last video, we designed a neural network for recognizing handwritten digits from the input layer of 784 neurons corresponding to 28x28 pixel handwritten digit images to two hidden layers, each with 16 neurons, and finally to the output layer with 10 neurons corresponding to the confidence level of digits zero to nine. We understood how the activation values of neurons are transmitted and calculated. This seemingly simple network has 172 adjustable weights and biases. However, we left out a crucial question: how do we adjust these 172 knobs to make the network, which initially knows nothing about digits, accurately identify handwritten digits? Today, we will unveil the magic of neural network learning: gradient descent. This is not only the core of neural network learning but also the underlying logic supporting most machine learning algorithms. Before we begin, let's go back to a fundamental comparison between human learning and traditional programming. When you teach a child to recognize numbers, you don't need to tell them that the upper part of the number three is a curve with a radius of x pixels, and the lower part is a line with a certain angle of inclination. You only need to show many pictures of the number three and tell them that this is three. They will gradually grasp the core features and be able to recognize even distorted threes. Traditional programming, as we discussed in the last video, requires you to explicitly write down every rule for recognizing three. But the ways of writing numbers are ever changing, and you can never write down all the rules. Neural network learning precisely mimics this human learning method. It doesn't require us to write specific algorithms for recognizing digits, but rather just these 172 weights and biases by looking at a large amount of labeled training data, thereby learning to recognize digits.
</details>

### 训练数据与泛化评估

**标签数据**（Labeled Data）意味着每张手写数字图片都附带一个标准答案，例如，这张图片对应数字3，那张对应数字5。这些数据集合称为**训练数据**（Training Data）。网络的学习过程就是不断调整参数，使其在训练数据上的识别结果越来越接近标准答案。

谈到训练数据，我们必须提及一个里程碑式的数据集——**MNIST数据库**。这是一个由研究人员整理的免费手写数字数据集，包含数万张28x28像素的手写数字图片，每张图片都标注了正确的数字。正是因为有了这样高质量、大规模的训练数据，我们才能让神经网络充分学习不同数字的特征。

更进一步，为了验证网络是否真正学会了知识而非仅仅死记硬背训练数据，我们将数据分为两部分：大部分用于训练，一小部分作为**测试数据**（Test Data）。这些测试数据是网络从未见过的新数据。通过评估网络在识别测试数据上的准确率，我们可以检验其**泛化能力**（Generalization Ability），即处理新数据的能力。这就像老师用从未见过的题目来考察你是否真正掌握了知识点，而不是简单地背下了作业题。

<details><summary>Original English</summary>
Labeled data here means that each handwritten digit image comes with a standard answer. For example, this image corresponds to the number three, and that one to the number five. These datasets together are called training data. The network's learning process is the process of continuously adjusting parameters to make its recognition results on the training data closer and closer to the standard answer. Speaking of training data, we must mention a milestone dataset: the MNIST database. This is a free handwritten digit dataset compiled by researchers, containing tens of thousands of 28x28 pixel images of handwritten digits. Each image is labeled with the correct digit. It is precisely because of this high-quality and large-scale training data that we can allow the neural network to fully learn the characteristics of different digits. Furthermore, to verify that the network has truly learned and not just memorized the training data, we divide the data into two parts: a large portion for training and a small portion as test data. This test data is data that the network has never seen before. By evaluating the network's accuracy in recognizing the test data, we can verify its generalization ability, that is, its ability to handle new data. This is similar to how a teacher uses questions you haven't seen before to test whether you have truly mastered the knowledge points rather than simply memorizing the homework problems.
</details>

### 量化学习成效：代价函数

但是，我们如何知道网络当前的参数设置是好是坏？如何量化它的学习效果是好是差？我们不能仅仅逐一目视检查输出结果。这就需要一个裁判，也就是我们所说的**代价函数**（Cost Function），也称为**损失函数**（Loss Function）。这个函数的核心作用是将网络的误差程度转化为一个具体的数字：数字越小，网络性能越好；数字越大，性能越差。

让我们看看如何计算单个图像的代价。假设我们将数字3的图像输入网络，理想情况下，输出层10个神经元中，对应数字3的那个神经元的激活值应接近1.0，而其他9个神经元的激活值应接近0.0。这是期望的输出。然而，在实际中，由于网络初始参数是随机初始化的，输出层的激活值可能是0.2, 0.3, 0.1, 0.8, 0.19, 0.88, 0.72, 0.01, 0.64, 0.86, 0.99, 0.63——一团糟。这就是我们的实际输出。

代价函数的计算逻辑很简单：对于每个输出神经元，计算其实际激活值与理想激活值之间的差值，然后将其平方，最后将这10个平方值加起来。例如，对于数字3对应的第三个神经元，理想值是1.0，实际值是0.8。差值为-0.2，这个差值的平方是0.04。然后我们将所有10个平方差加总，得到这张图像的总代价。

平方差有两方面的好处：首先，平方运算使所有正负差值都变为正数，避免了它们相互抵消。例如，如果一个神经元的差值是+0.5，另一个是-0.5，直接相加结果是0，网络会误以为没有误差，尽管它们的实际偏差可能很大。其次，平方函数是连续且可微的，这对于后续的梯度下降计算至关重要。如果函数不可微，我们就无法找到成本下降最快的方向。

然而，仅看单个图像的代价还不够，网络需要在所有训练数据上都表现良好。因此，我们计算所有训练样本的平均代价。这个平均代价是我们真正想要最小化的目标。换句话说，代价函数将网络的172个权重和偏置作为输入，输出是这个平均代价。网络的学习过程，本质上就是寻找一组权重和偏置，使得这个平均代价最小。

<details><summary>Original English</summary>
But the question arises: how do we know if the network's current parameter settings are good or bad? How do we quantify whether it's learning well or poorly? We can't just rely on visually inspecting the output results one by one. This requires a judge, which is what we call a cost function, also known as the loss function. The core function of this function is to convert the network's error level into a specific number: the smaller the number, the better the network's performance; the larger the number, the worse the performance. Let's look at how the cost is calculated for a single image. Suppose we input an image of the digit three into the network. Ideally, among the ten neurons in the output layer, the activation value of the corresponding neuron should be close to 1.0, and the other nine should be set to 0.0. This is the desired output. However, in reality, the network's initial parameters are randomly initialized, and the activation values of the output layer might be 0.2, 0.3, 0.1, 0.8, 0.19, 0.88, 0.72, 0.01, 0.64, 0.86, 0.99, 0.63 – a complete mess. This is our actual output. The calculation logic of the cost function is straightforward: for each output neuron, calculate the difference between the actual activation value and the ideal activation value, then square it, and finally add up these ten square values. For example, for the third neuron (corresponding to digit 3), the ideal value is 1.0, and the actual value is 0.8. The difference is -0.2, and the square of this difference is 0.04. Then we add up all ten square differences to get the total cost for this image. Squaring the differences has two benefits: On the one hand, squaring the differences makes all positive and negative differences positive, preventing them from canceling each other out. For example, if one neuron's difference is +0.5 and another's is -0.5, adding them directly would result in zero, and the network would mistakenly think there is no error, even though their actual deviation might be significant. On the other hand, the square function is continuous and differentiable. This is crucial for subsequent gradient descent calculations. If the function is not differentiable, we cannot find the direction in which the cost decreases fastest. However, looking at the cost of a single image is not enough; the network needs to perform well on all training data. Therefore, we calculate the average cost across all training samples. This average cost is the target cost we truly want to minimize. The cost function takes the network's 172 weights and biases as input, and its output is this average cost. The network's learning process is essentially finding a set of weights and biases that minimize this average cost.
</details>

### 优化困境：为何直接求解不可行

此时，你可能会想，为什么我们不直接解方程组，找到成本函数导数为零的点，理论上那便是最小值呢？这确实是正确的，但在实际中，这完全不切实际。我们的成本函数是一个拥有172个输入变量的极其复杂的函数。它的表达式基于整个神经网络的前向传播过程，并且依赖于数万个训练样本的数据。求解这样一个高维度的方程组将需要天文数字般的计算量，使其无法实现。这就像身处一座地形极其复杂的大山中，如果你试图测量每一个点的海拔来找到最低点，你永远不可能成功，因为点的数量实在太多了。

那么我们该怎么办？我们需要一种更灵活、更高效的方法，能够在不检查每一个点的情况下，逐步逼近最小值。这就是梯度下降的核心思想。

<details><summary>Original English</summary>
At this point, you might think, why don't we just solve the system of equations to find the point where the derivative of the cost function is zero, which would be the minimum theoretically? This is true, but in reality, it's completely impractical. Our cost function is an extremely complex function with 172 input variables. Its expression is based on the entire neural network's forward propagation process, and also depends on the data from tens of thousands of training samples. Solving such a high-dimensional system of equations would require an astronomical amount of computation, making it impossible to implement. It's like being in a mountain with extremely complex terrain. If you try to measure the altitude of every point to find the lowest point, you'll never succeed; there are simply too many points. So what do we do? We need a more flexible and efficient method that can gradually approach the minimum without checking every single point. This is the core idea of gradient descent.
</details>

### 梯度下降：迈向最优的迭代之路

就像一个被困在山里的人，他不知道最低点在哪里，但他知道沿着最陡峭的下坡方向行走，能最快地降低自己的海拔。他一步一步地走，每一步都重新评估自己当前的位置，确定最陡峭的下坡方向，并持续向这个方向移动。最终，他会到达一个相对较低的高度——一个局部最小值。

让我们从最简单的情况开始理解这个过程。假设我们的成本函数只有一个输入变量，比如一个单一的权重w，而其他参数都固定。这个函数的图像是一条曲线。我们随机选择一个初始值w₀，对应的成本是C(w₀)。现在，我们想找到一个方向，让w稍微调整就能最大程度地降低成本。如何确定这个方向呢？答案是看这一点上的斜率，也就是导数。如果斜率为负，意味着w增加时成本会下降，所以我们应该向右调整w。如果斜率为正，意味着w减小时成本会下降，所以我们应该向左调整w。

步长也非常重要。如果步长太大，可能会越过最小值点，落在另一侧的斜坡上，导致成本反而增加。如果步长太小，收敛速度会非常慢，需要很多步才能接近最小值。因此，步长应该与斜率的绝对值成正比：斜率越陡峭，绝对值越大，说明当前位置距离最小值点越远，可以迈出更大的步子；斜率越平缓，绝对值越小，说明越接近最小值点，应该迈出更小的步子，以避免越过。

<details><summary>Original English</summary>
Like a person trapped in a mountain, they don't know where the lowest point is, but they know that walking in the direction of the steepest downhill slope will reduce their altitude the fastest. They walk step by step, reevaluating their current position at each step to determine the steepest downward slope. By continuously moving in this direction, they will eventually reach a relatively low value – this is a local minimum. Let's start with the simplest case to understand this process. Suppose our cost function only has one input variable, such as a single weight, w, and all other parameters are fixed. The graph of this function is a curve. We randomly choose an initial value w₀, and the corresponding cost is C(w₀). Now, we want to find a direction that allows w to be adjusted slightly to reduce the cost the most. How do we determine this direction? The answer is to look at the slope at this point, which is the derivative. If a slope is negative, it means that the cost decreases when w increases, therefore, we should adjust w to the right. If the slope is positive, it means the cost decreases when w decreases, so we should adjust w to the left. The step size is also very important. If the step size is large, it may overshoot the minimum point and end up on the opposite side's slope, causing the cost to increase. If the step size is too small, the convergence speed will be very slow, requiring many steps to approach the minimum value. Therefore, the step size should be proportional to the absolute value of the slope: the steeper the slope, the larger the absolute value, meaning the further the current position is from the minimum point, so a larger step can be taken. The flatter the slope, the smaller the absolute value, meaning the closer it is to the minimum point, so a smaller step should be taken to avoid overshooting.
</details>

### 高维空间的指引：梯度向量

然而，我们的网络有172个参数。这意味着成本函数的输入是172维的，一个我们无法想象的高维空间，并且方向不能仅用斜率来描述。这时，我们需要一个更强大的数学工具：**梯度**（Gradient）。在一个多变量函数中，梯度是一个向量，它的每个分量是函数对相应输入变量的**偏导数**（Partial Derivative）。例如，对于一个有两个输入变量x和y的函数C(x, y)，其梯度∇C是(∂C/∂x, ∂C/∂y)。

这个梯度向量有两个关键特征：首先，它的方向是函数值增加最快的方向，即最陡峭的上坡方向。其次，梯度向量的长度代表了最陡峭方向上的斜率大小。既然梯度指向最陡峭的上坡方向，那么反过来说，**负梯度**（Negative Gradient）或负梯度向量就指向最陡峭的下坡方向，这正是我们在高维空间中所需要的。

在高维空间中，我们无法直观看到斜率，但梯度向量为我们提供了清晰的方向指引。无论成本函数的输入是二维、十维还是172维，负梯度向量始终告诉我们如何调整每个参数，以在当前参数组合下实现成本函数最大的下降。

举个例子，假设我们的成本函数有两个输入变量w₁和w₂（对应两个权重），其梯度∇C是(0.8, -0.3)。这意味着对于w₁，函数对其偏导数为0.8，因此增加w₁会增加成本，减小w₁会减小成本。对于w₂，偏导数为-0.3，因此增加w₂会减小成本，减小w₂会增加成本。负梯度是(-0.8, 0.3)。它告诉我们，应该减小w₁（因为原始梯度分量为正），并增加w₂（因为原始梯度分量为负）。这种调整将使成本下降。

<details><summary>Original English</summary>
However, our network has 172 parameters. This means the input to the cost function is 172-dimensional, a high-dimensional space that we cannot imagine, and the direction cannot be described using the slope alone. This is where we need a more powerful mathematical tool: the gradient. In a multivariable function, the gradient is a vector, and each component is the partial derivative of the function with respect to the corresponding input variable. For example, for a function C(x, y) with two input variables x and y, the gradient is (∂C/∂x, ∂C/∂y). This gradient vector has two key characteristics: First, its direction is the direction in which the function value increases most rapidly, that is, the direction of the steepest slope. Second, the length of the gradient vector represents the magnitude of the slope in the steepest direction. Since the gradient points to the steepest upward slope, conversely, the negative gradient or negative gradient vector points in the direction of the steepest downward slope, which is exactly what we want in high-dimensional space. We cannot visually see the slope in high-dimensional space, but the gradient vector provides us with clear directional guidance. Regardless of whether the cost function's input is two-dimensional, ten-dimensional, or 172-dimensional, the negative gradient vector always tells us how to adjust each parameter to achieve the greatest decrease in the cost function for the current combination of parameters. For example, suppose our cost function has two input variables, w₁ and w₂, corresponding to two weights. The gradient ∇C is (0.8, -0.3). This means that for w₁, the partial derivative of the function with respect to it is 0.8. Therefore, increasing w₁ will increase the cost, and decreasing w₁ will decrease the cost. For w₂, the derivative is -0.3, so increasing w₂ will decrease the cost, and decreasing w₂ will increase the cost. The negative gradient is (-0.8, 0.3). It tells us that we should decrease w₁ by 0.8 units and increase w₂ by 0.3 units. This adjustment will cause the cost to decrease.
</details>

### 参数更新机制：学习率的角色

在实际的梯度下降算法中，我们使用一个称为**学习率**（Learning Rate），通常用希腊字母**eta** (η) 表示的参数来控制步长。参数更新的公式是：`新参数 = 旧参数 - 学习率 * 梯度分量`。这个学习率是一个正数。它的大小直接影响训练效果：如果学习率过大，步长就会过大，可能导致在最小值点附近震荡，永远无法收敛；如果学习率过小，步长就会过小，训练过程会非常缓慢，需要成千上万次迭代才能接近最小值。因此，学习率的选择是神经网络训练中的一个重要超参数，需要根据具体任务进行调整。

现在我们将这个逻辑扩展到172维的参数空间。我们可以将所有的权重和偏置组织成一个巨大的列向量θ。这个向量有172个元素，每个对应一个参数。成本函数C(θ)的梯度∇C(θ)也是一个与θ同维度的向量。梯度向量∇C(θ)的每个元素是成本函数相对于对应参数的偏导数。负梯度向量-∇C(θ)也是一个172维的向量。它的每个元素告诉我们对应的参数应该增加还是减少，以及调整的相对幅度。

这里的关键是**相对幅度**。梯度向量中各分量的绝对值反映了对应参数对成本函数的影响程度。例如，如果对应权重wₐ的梯度分量绝对值为0.5，而对应权重w<0xE2><0x82><0x99>的梯度分量绝对值为0.01，这意味着调整wₐ对降低成本的贡献比调整w<0xE2><0x82><0x99>更大。因此，在参数更新时，wₐ的调整幅度会更大。这相当于网络自动知道了哪些参数更重要，应该被更显著地调整。

举个具体例子：假设网络正在学习识别数字3。一个连接输入层像素神经元（对应数字3曲线的上部）到隐藏层神经元的权重。如果这个权重的梯度分量绝对值很大，意味着当前该权重的设置对识别数字3有显著影响。如果其当前值太小，导致隐藏层神经元无法有效捕捉曲线的上部特征，那么梯度就指示网络应该显著调整这个权重。而另一个连接到不相关像素的权重，如果其梯度分量很小，则表明它对识别数字3影响不大，网络只会对其进行微小调整。这种自适应调整的特性使得梯度下降非常高效。

<details><summary>Original English</summary>
We use a parameter called the learning rate, eta (η), to control the step size. The parameter update formula is: new parameter = old parameter - learning rate * gradient component. This learning rate is a positive number. Its size directly affects the training effect: if it is too large, the step size will be too large, which may cause oscillation near the minimum point and never converge. If it is small, the step size will be too small, and the training process will be very slow, requiring thousands or tens of thousands of iterations to approach the minimum value. Therefore, the choice of learning rate is an important hyperparameter in neural network training and needs to be adjusted according to the specific task. Now we extend this logic to the 172-dimensional parameter space. We can organize all the weights and biases into a huge column vector, theta (θ). This vector has 172 elements, each corresponding to a parameter. The gradient of the cost function C(θ), ∇C(θ), is also a vector of the same dimension as θ. Each element of the gradient vector ∇C(θ) is the partial derivative of the cost function with respect to the corresponding parameter in θ. The negative gradient vector -∇C(θ) is also a 172-dimensional vector. Each element tells us whether the corresponding parameter should be increased or decreased, and the relative magnitude of the adjustment. The key here is the relative magnitude. The absolute value of the different components in the gradient vector reflects the degree of influence of the corresponding parameter on the cost function. For example, if the absolute value of the gradient component corresponding to weight wₐ is 0.5, and the absolute value of the component corresponding to weight w<0xE2><0x82><0x99> is 0.01, it means that adjusting wₐ contributes more to reducing the cost than adjusting w<0xE2><0x82><0x99>. Therefore, during parameter updates, the adjustment magnitude of wₐ will be larger. This is equivalent to the network automatically knowing which parameters are more important and should be adjusted more significantly. For a specific example, suppose the network is learning to recognize the digit three. A weight connects an input layer pixel neuron corresponding to the upper part of the curve of the number three to a neuron in the hidden layer. If the absolute value of this weight's gradient component is large, it means that the current setting of this weight has a significant impact on recognizing the number three. If its current value is too small, preventing the hidden layer neuron from effectively capturing the features of the upper curve, then the gradient indicates that the network should significantly adjust this weight. If another weight connecting to a relevant pixel has a very small gradient component, indicating that it has little impact on recognizing the number three, the network will only make a tiny adjustment to it. This characteristic of adaptive adjustment makes gradient descent very efficient.
</details>

### 高效梯度计算：反向传播算法

现在，我们可以将神经网络的整个学习过程整合起来了。第一步是随机初始化所有的权重和偏置。为什么要随机初始化？因为如果所有权重都初始化为相同的值，那么在**前向传播**（Forward Propagation）过程中，同一层的神经元将产生相同的激活值，后续的调整也会完全同步，网络将无法学习到不同的特征。这是对称权重的问题。随机化打破了这种对称性，使得每个神经元都能学习独特的特征。

第二步是将一批训练数据输入网络，通过前向传播计算每个样本的输出激活值。

第三步是计算所有训练样本的平均代价，作为当前参数设置的性能得分。

第四步是计算成本函数相对于所有参数的梯度∇C(θ)。

第五步是根据公式 `新参数 = 旧参数 - 学习率 * 梯度分量` 更新所有的172个权重和偏置。

第六步是重复步骤二到五，直到平均代价降低到一个满意的水平，或者不再显著下降为止。这个循环过程就是神经网络的训练过程。

它看起来只有几个步骤，但其中第六步“重复”是关键。然而，还有一个更复杂但至关重要的步骤是第四步：如何高效地计算172个参数的梯度？如果我们逐个计算每个参数的偏导数，就需要遍历所有参数和所有训练样本，这将导致无法承受的计算负载。这时，一种高效的梯度计算方法——**反向传播**（Backpropagation）算法应运而生。

反向传播的核心思想是**链式法则**（Chain Rule）。它利用了神经网络的层状结构，从输出层向后、逐层计算到输入层，从而一次性计算出所有参数的偏导数。这使得梯度计算的复杂度从O(N²)降低到O(N)，其中N是参数的数量。这就是为什么反向传播被称为神经网络学习的引擎——没有它，训练大规模神经网络将是不可能的。在后续视频中，我们将深入探讨反向传播的每一个步骤，从数学原理到直观理解，帮助你理解它是如何高效计算梯度的。

<details><summary>Original English</summary>
Now we can put together the entire learning process of a neural network. The first step is to randomly initialize all weights and biases. Why randomize? Because if all weights are initialized to the same value, then during forward propagation, all neurons in the same layer will produce the same activation value, and subsequent adjustments will be completely synchronized. The network will not be able to learn different features. This is the problem of symmetric weights. Randomization breaks the symmetry, allowing each neuron to learn unique features. The second step is to input a batch of training data into the network and calculate the output activation value for each sample through forward propagation. The third step is to calculate the average cost of all training samples as a performance score for the current parameter settings. The fourth step is to calculate the gradient ∇C(θ) of the cost function with respect to all parameters. Step five: update all 172 weights and biases according to the formula new parameter = old parameter - learning rate * gradient component. Step six: repeat steps two through five until the average cost decreases to a satisfactory level or no longer decreases significantly. This cyclical process is the training process of the neural network. It may seem like there are only a few steps, but step four, "how to efficiently calculate the gradient for 172 parameters," is crucial and complex. If we calculate the partial derivative for each parameter individually, we would need to iterate through all parameters and all training samples, resulting in an unbearable computational load. This is where an efficient gradient calculation method, backpropagation, comes in. The core idea of backpropagation is the chain rule. It utilizes the layered structure of the neural network. It derives the gradient from the output layer backward to the input layer, calculating the partial derivatives of all parameters at once. This reduces the complexity of gradient calculation from O(N²) to O(N), where N is the number of parameters. And this is why backpropagation is called the engine of neural network learning. Without it, training large-scale neural networks would be impossible. In subsequent videos, we will delve into each step of backpropagation from mathematical principles to intuitive understanding, helping you understand how it efficiently calculates gradients.
</details>

### 关键洞察与潜在问题

在继续之前，有必要澄清一个常见的误解：梯度下降找到的是**局部最小值**（Local Minimum），而不是全局最小值。在参数空间中，成本函数的“地形”可能非常复杂，有许多“山谷”，这些就是局部最小值。不同的初始参数位置可能导致收敛到不同的局部最小值。但这不一定是坏事，因为在实际应用中，大多数局部最小值对应的成本已经足够小，足以让网络表现良好。

更重要的是，随着网络规模的增加（例如，更多的隐藏层和更多的神经元），成本函数的平坦区域会增多，局部最小值的影响会减弱，梯度下降更有可能找到接近全局最优解的解决方案。

另一个关键点是，训练数据的质量和数量至关重要。如果训练数据太少，网络无法学习到足够的特征，可能导致**欠拟合**（Underfitting），在训练数据上识别准确，但在测试数据上表现很差。如果训练数据包含错误的标签，或者数据分布不均（例如，某个数字的样本非常少），网络就会学习到不正确的模式，导致泛化能力下降。MNIST数据集之所以被认为是经典，是因为它拥有足够多的样本、准确的标签和均衡的数据分布，为网络提供了高质量的学习材料。

最后，我们简要提及梯度下降在深层网络中可能遇到的问题：**梯度消失**（Vanishing Gradients）和**梯度爆炸**（Exploding Gradients）。梯度在反向传播过程中可能变得越来越小，导致深层隐藏层的参数几乎不更新（梯度消失）；或者变得越来越大，导致参数值失控（梯度爆炸）。然而，现代深度学习中已经发展出许多解决这些问题的方案，例如使用ReLU激活函数代替Sigmoid函数，使用批量归一化（Batch Normalization）和残差连接（Residual Connections）。但这些都是后续的进展，我们现阶段的重点是理解梯度下降的核心逻辑。

<details><summary>Original English</summary>
Before continuing, it's necessary to clarify a common misconception: gradient descent finds a local minimum, not necessarily a global minimum. In the parameter space, the cost function's landscape can be very complex with many valleys, which are local minima. Different initial parameter positions may lead to different values. But this isn't necessarily a bad thing, because in practical applications, most local minima have sufficiently small costs, allowing the network to perform well. Moreover, as the network scale increases (for example, more hidden layers and more neurons), the flat areas of the cost function increase, and the influence of local minima decreases, allowing gradient descent to find a solution close to the global optimum. Another crucial point is that the quality and quantity of training data are paramount. If there is too little training data, the network cannot learn sufficient features, leading to underfitting (accurate identification on training data, poor performance on test data). If the training data contains incorrect labels, or the data distribution is uneven (for example, if there are very few samples of a certain number), the network will learn incorrect patterns, leading to a decrease in generalization ability. The MNIST dataset is considered a classic because it has a sufficient number of samples, accurate labels, and an even data distribution, providing high-quality learning materials for the network. Finally, we briefly mention potential issues gradient descent may encounter in deep networks: vanishing gradients or exploding gradients. The gradient may become smaller and smaller during backpropagation, causing the parameters in the hidden layers to hardly update (vanishing gradients), or it may become larger and larger, causing the parameter values to spiral out of control (exploding gradients). However, many solutions to these problems have been developed in modern deep learning, for example, using the ReLU function instead of the sigmoid function, using batch normalization and residual connections. But these are all later developments; our focus at this stage is to understand the core logic of gradient descent.
</details>

### 学习的本质：参数优化

总而言之，神经网络学习的本质是通过**梯度下降算法**来最小化**代价函数**。代价函数量化了网络的识别误差，而梯度向量提供了参数调整的方向和幅度指引。学习率用于控制调整的步长，反向传播则高效地计算梯度。整个过程构成了神经网络从一个空壳到一个智能模型 Thus, the essence of neural network learning is to minimize the cost function through the gradient descent algorithm. The cost function quantifies the network's recognition error, and the gradient vector provides direction and magnitude guidance for parameter adjustment. The learning rate is used to control the adjustment step size, and backpropagation efficiently calculates the gradient. This entire process constitutes the complete learning path of a neural network from an empty shell to an intelligent model.

它并不像人类那样理解数字的含义，而是通过梯度下降来优化权重和偏置，以最小化代价函数。本质上，这是一个复杂的优化问题。当我们说网络“学会”了识别数字，实际上是我们找到了这样一组参数，它能够将输入的像素模式映射到对应的输出置信度。这种映射关系是从数据中学到的，而不是我们手动编程的。

这里还有一个非常有趣的现象：在设计网络时，我们只假设隐藏层会学习到诸如边缘模式之类的特征，但我们并没有明确地编程让它这样做。是梯度下降和成本函数的优化目标，自然地引导网络学习这些对区分数字有用的特征。这是神经网络最神奇的方面之一：它们能够自动发现数据中的潜在模式，而无需人类预先定义特征。

Thank you for watching this video. We'll see you next time.

<details><summary>Original English</summary>
To summarize, the essence of neural network learning is to minimize the cost function through the gradient descent algorithm. The cost function quantifies the network's recognition error, and the gradient vector provides direction and magnitude guidance for parameter adjustment. The learning rate is used to control the adjustment step size, and backpropagation efficiently calculates the gradient. This entire process constitutes the complete learning path of a neural network from an empty shell to an intelligent model. It doesn't understand the meaning of numbers like humans do, but rather just adjusts weights and biases through gradient descent to minimize the cost function. Essentially, it's a complex optimization problem. When we say the network has learned to recognize the numbers, we are actually saying that the network has found a set of parameters that can map the input pixel patterns to the corresponding output confidence. This mapping relationship has been learned from the data, not manually programmed by us. There's also a very interesting phenomenon here: when we design the network, we only assume that the hidden layer will learn features such as edge patterns. However, we didn't explicitly program it to do so. It is the gradient descent and the optimization objective of the cost function that naturally guides the network to learn these features that are useful for distinguishing numbers. This is one of the most amazing aspects of neural networks: they can automatically discover underlying patterns in the data without requiring humans to predefine features. Thank you for watching this video. We'll see you next time.
</details>