---
author: Best Partners TV
date: '2026-02-01'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=HylFtyFLkvU
speaker: Best Partners TV
tags:
  - neural-network-learning
  - gradient-descent
  - cost-function
  - backpropagation
  - optimization
title: 理解梯度下降：神经网络学习的核心机制
summary: 本视频深入解析了神经网络学习的核心——梯度下降算法。通过类比人类学习与传统编程的差异，阐述了带标签训练数据的重要性，并介绍了MNIST数据集。重点讲解了代价函数如何量化网络误差，以及梯度下降如何通过迭代优化参数（权重与偏置）来最小化误差。视频详细解释了梯度向量的计算及其在多维空间中的作用，学习率的调整策略，以及反向传播算法在高效计算梯度中的关键作用，最终目标是使网络能够准确识别数字。
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
### 神经网络学习的起点：参数调整与数据驱动

在上一视频中，我们构建了一个用于识别数字的神经网络，其结构包含输入层、两个隐藏层和一个输出层。这个看似简单的网络拥有高达1372个可调的权重（weights）和偏置（biases）。然而，一个关键问题悬而未决：如何调整这些参数，使一个起初对数字一无所知的网络，能够准确地识别它们？今天，我们将揭示神经网络学习的魔法——**梯度下降**（Gradient Descent）。这不仅是神经网络学习的核心，也是支撑大多数机器学习算法的底层逻辑。

在深入之前，我们先回顾人类学习与传统编程的根本区别。教导孩童识别数字时，我们无需详细描述数字“3”的曲线半径或倾斜角度，只需展示大量“3”的图片并告知“这是3”。孩童会逐渐掌握核心特征，甚至识别变形的“3”。而传统编程则要求我们为识别“3”编写所有明确的规则，但这在面对数字书写方式的多样性时显得力不从心。神经网络学习恰恰模仿了人类的学习方式，它不要求我们编写具体的识别算法，而是通过分析大量**带标签的训练数据**（Labeled Training Data），自行调整这1372个权重和偏置，从而学会识别数字。带标签的数据意味着每张数字图片都附带一个标准答案，例如“这张是3”，“那张是5”。这些数据集合称为训练数据。网络的学习过程，就是不断调整参数，使其在训练数据上的识别结果越来越接近标准答案。

谈及训练数据，不得不提一个里程碑式的数据集——**MNIST数据集**（Transcript refers to it as "eness database"）。这是一个由研究人员整理的包含数万张28x28像素手写数字图片的免费数据集，每张图片都标注了正确的数字。正是因为有了高质量、大规模的训练数据，我们才能让神经网络充分学习不同数字的特征。

为了验证网络是否真正学会了知识而非仅仅死记硬背，我们将数据分为两部分：大部分用于训练，小部分作为**测试数据**（Test Data）。测试数据是网络从未见过的新数据。通过评估网络在测试数据上的识别准确率，我们可以检验其**泛化能力**（Generalization Ability），即处理新数据的能力。这好比老师用从未见过的题目来考察学生是否真正掌握了知识点，而非仅仅背下了作业题。

<details><summary>Original English</summary>

In the last video, we set up the neural network for recognizing hundred and digits from the input layer of seven hundred and eighty-four neurons corresponding to twenty-eight by twenty-eight pixel hundred and digit images to two hidden layers, each with sixteen neurons, and finally to the output layer with ten neurons corresponding to the confidence level of digits zero to nine. We understood how the activation values of neurons are transmitted and calculated. This seemingly simple network has thirteen hundred and two adjustable weights and biases. However, we left out a crucial question: how do we adjust these thirteen hundred and two knobs to make the network, which initially knows nothing about digits, accurately identify hundred and digits? Today, we will unveil the magic of neural network learning: gradient descent. This is not only the core of neural network learning but also the underlying logic supporting most machine learning algorithms.

Before we begin, let's go back to a fundamental comparison between human learning and traditional programming. When you teach a child to recognize numbers, you don't need to tell them that the upper part of the number three is a curve with a radius of X pixels, and the lower part is a curve with a certain angle of inclination. You only need to show them many pictures of the number three and tell them that this is three. They will gradually grasp the core features and be able to recognize even distorted threes. Traditional programming, as we discussed in the last video, requires you to explicitly write down every rule for recognizing three. But the ways of writing numbers are ever changing, and you can never write down all the rules. Neural network learning precisely mimics this human learning method. It doesn't require us to write specific algorithms for recognizing digits, but rather just these thirteen hundred and two weights and biases by looking at a large amount of labeled training data, thereby learning to recognize digits. Labeled data here means that each hundred and digit image comes with a standard answer. For example, this image corresponds to the number three, and that one to the number five. These datasets together are called training data. The network's learning process is the process of continuously adjusting parameters to make its recognition parameters on the training data closer and closer to the standard answer.

Speaking of training data, we must mention a milestone dataset: the MNIST database. This is a free hundred and digit dataset compiled by researchers, containing tens of thousands of twenty-by-twenty-eight pixel images of hundred and digits. Each image is labeled with the correct digit. It is precisely because of this high-quality and large-scale training data that we can allow the neural network to fully learn the characteristics of different digits. Furthermore, to verify that the network has truly learned and not just memorized the training data, we divide the data into two parts: a large portion for training and a small portion as test data. This test data is data that the network has never seen before. By evaluating the network's accuracy in recognizing the test data, we can verify its generalization ability, that is, its ability to handle new data. This is similar to how a teacher uses questions you haven't seen before to test whether you have truly mastered the knowledge points rather than simply memorizing the homework problems.

But the question arises: how do we know if the network's current parameter settings are good or bad? How do we quantify whether it's learning well or poorly? We can't just rely on visually inspecting the output results one by one. This requires a judge, which is what we call a cost function, also known as the loss function. The core function of this function is to convert the network's error level into a specific number. The smaller the number, the better the network's performance; the larger the number, the worse the performance.

Let's look at how the cost is calculated for a single image. Suppose we input an image of the digit three into the network. Ideally, among the ten neurons in the output layer, the activation value of the corresponding neuron should be close to one point zero, and the other nine should be close to zero point zero. This is the desired output. However, in reality, the network's initial parameters are randomly initialized, and the activation values of the output layer might be 0.2, 0.3, 0.1, 0.8, 0.19, 0.88, 0.72, 0.01, 0.64, 0.86, 0.99, 0.63 – a complete mess. This is our actual output. The calculation logic of the cost function is straightforward: for each output neuron, calculate the difference between the actual activation value and the ideal activation value, then square it, and finally add up these ten squared values. For example, for the third neuron, the ideal value is 1.0, and the actual value is 0.88. The difference is -0.12, and the square of this difference is 0.0144. Then we add up all ten squared differences to get the total cost for this image. Squaring the differences on the one hand makes all positive and negative differences positive, preventing them from canceling each other out. For example, if one neuron's difference is +0.5 and another's is -0.5, adding them directly would result in zero, and the network would mistakenly think there is no error, even though their actual deviation is significant. On the other hand, the square function is continuous and differentiable, which is crucial for subsequent gradient descent calculations. If the function is not differentiable, we cannot find the direction in which the cost decreases fastest.

However, looking at the cost of a single image is not enough; the network needs to perform well on all training data. Therefore, we calculate the average cost across all training samples. This average cost is the target cost we truly want to minimize. The input to the cost function is the network's thirteen hundred and two weights and biases; the output is this average cost. The learning process of the network is essentially finding a set of weights and biases that minimize this average cost.

At this point, you might think, why don't we just solve the system of equations to find the point where the derivative of the cost function is zero, which would be the minimum theoretically? This is true, but in reality, it's completely impractical. Our cost function is an extremely complex function with thirteen hundred and two input variables. Its expression is based on the forward propagation process of the entire neural network, and also depends on the data from tens of thousands of training samples. Solving such a high-dimensional system of equations would require an astronomical amount of computation, making it impossible to implement. It's like being in a mountain with extremely complex terrain; if you try to measure the altitude of every point to find the lowest point, you'll never succeed, as there are simply too many points.

So, what do we do? We need a more flexible and efficient method that can gradually approach the minimum without checking every single point. This is the core idea of gradient descent. Imagine a person trapped in a mountain. They don't know where the lowest point is, but they know that walking in the direction of the steepest downhill slope will reduce their altitude the fastest. They walk step by step, reevaluating their current position at each step to determine the steepest downward slope. By continuously moving in this direction, they will eventually reach a relatively low value – this is a local minimum.

Let's start with the simplest case to understand this process. Suppose our cost function only has one input variable, such as a single weight, `w`, and all other parameters are fixed. The graph of this function is a curve. We randomly choose an initial value `w0`, and the corresponding cost is `C(w0)`. Now we want to find a direction that allows `w` to be adjusted slightly to reduce the cost the most. How do we determine this direction? The answer is to look at the slope at this point, which is the derivative. If a slope is negative, it means that the cost decreases when `w` increases; therefore, we should adjust `w` to the right. If the slope is positive, it means the cost decreases when `w` decreases; how do we adjust `w`? To the left. The step size is also very important. If the step size is large, it may overshoot the minimum point and end up on the opposite side of the slope, causing the cost to increase. If the step size is too small, the convergence speed will be very slow, requiring many steps to approach the minimum value. Therefore, the step size should be proportional to the absolute value of the slope. The steeper the slope, the larger the absolute value, the further the current position is from the minimum point, so a larger step can be taken. The flatter the slope, the smaller the absolute value, the closer it is to the minimum point, so a smaller step should be taken to avoid overshooting.

However, our network has thirteen hundred and two parameters. This means the input to the cost function is thirteen hundred and two-dimensional, a high-dimensional space that we cannot imagine, and the direction cannot be described using the slope alone. This is where we need a more powerful mathematical tool: the gradient. In a multivariable function, the gradient is a vector, and each component is the partial derivative of the function with respect to the corresponding input variable. For example, for a function `C(x, y)` with two input variables `x` and `y`, the gradient is `∇C = (∂C/∂x, ∂C/∂y)`. This gradient vector has two key characteristics. First, its direction is the direction in which the function value increases most rapidly, that is, the direction of the steepest slope. Second, the length of the gradient vector represents the magnitude of the slope in the steepest direction. Since the gradient points to the steepest upward slope, conversely, the negative gradient `-∇C` points in the direction of the steepest downward slope, which is exactly what we want. In high-dimensional space, we cannot visually see the slope, but the gradient vector provides us with clear directional guidance. Regardless of whether the cost function's input is two-dimensional, ten-dimensional, or thirteen hundred and two-dimensional, the negative gradient vector always tells us how to adjust each parameter to achieve the greatest decrease in the cost function for the current combination of parameters.

For example, suppose our cost function has two input variables, `w1` and `w2`, corresponding to two weights. The gradient is `∇C = (0.8, -0.3)`. This means that for `w1`, the partial derivative of the function with respect to it is 0.8. Therefore, increasing `w1` will increase the cost, and decreasing `w1` will decrease the cost. For `w2`, the derivative is -0.3, so increasing `w2` will decrease the cost, and decreasing `w2` will increase the cost. The negative gradient is `(-0.8, 0.3)`. It tells us that we should decrease `w1` by 0.8 units and increase `w2` by 0.3 units. This adjustment will cause the cost to decrease.

In the actual gradient descent algorithm, we use a parameter called the **learning rate** (`eta`) to control the step size. The parameter update formula is: `new parameter = old parameter - eta * gradient component`. This learning rate is a positive number. It directly affects the training effect. If it is too large, the step size will be too large, which may cause oscillation around the minimum point and never converge. If it is small, the step size will be too small, and the training process will be very slow, requiring thousands or tens of thousands of iterations to approach the minimum value. Therefore, the choice of learning rate is an important hyperparameter in neural network training and needs to be adjusted according to the specific task.

Now we extend this logic to a thirteen hundred and two-dimensional parameter space. We can organize all the weights and biases into a huge column vector, `θ`. This vector has thirteen hundred and two elements, each corresponding to a parameter. The gradient of the cost function `C` with respect to `θ` is `∇C(θ)`, which is a vector with the same dimension as `θ`. Each element of the gradient vector `∇C(θ)` is the partial derivative of the cost function with respect to the corresponding parameter in `θ`. The negative gradient vector `-∇C(θ)` is also a vector of size thirteen hundred and two. Each element tells whether the corresponding parameter should be increased or decreased, and the relative magnitude of the adjustment. The key here is the relative magnitude. The absolute value of the different components in the gradient vector reflects the degree of influence of the corresponding parameter on the cost function. For example, if the absolute value of the gradient component corresponding to weight `Wa` is 0.5, and the absolute value of the component corresponding to weight `Wb` is 0.01, it means that adjusting `Wa` contributes more to reducing the cost than adjusting `Wb`. Therefore, during parameter updates, the adjustment magnitude of `Wa` will be larger. This is equivalent to the network automatically knowing which parameters are more important and should be adjusted more significantly. For a specific example, suppose the network is learning to recognize the digit three. A weight connects an input layer pixel neuron corresponding to the upper part of the curve of the number three to a neuron in the hidden layer. If the absolute value of this weight's gradient component is large, it means that the current setting of this weight has a significant impact on recognizing the number three. Perhaps its current value is too small, preventing the hidden layer neuron from effectively capturing the features of the upper curve. Therefore, the gradient indicates that the network should significantly adjust this weight. If another weight connecting to a relevant pixel has a very small gradient component, indicating that it has little impact on recognizing the number three, the network will only make a tiny adjustment to it. This characteristic of adaptive adjustment makes gradient descent very efficient.

Now we can put together the entire learning process of a neural network.
1.  **Randomly initialize all weights and biases.** Why randomize? Because if all weights are initialized to the same value, then during forward propagation, all neurons in the same layer will produce the same activation value, and subsequent adjustments will be completely synchronized. The network will not be able to learn different features. This is the problem of symmetric weights. Randomization breaks the symmetry, allowing each neuron to learn unique features.
2.  **Input a batch of training data into the network and calculate the output activation value for each sample** through forward propagation.
3.  **Calculate the average cost of all training samples** as a performance score for the current parameter settings.
4.  **Calculate the gradient `∇C(θ)` of the cost function with respect to all parameters.**
5.  **Update all thirteen hundred and two weights and biases** according to the formula: `new parameter = old parameter - eta * gradient component`.
6.  **Repeat steps two through five** until the average cost decreases to a satisfactory level or no longer decreases significantly.

This cyclical process is the training process of the neural network. It may seem like there are only a few steps, but step four, how to efficiently calculate the gradient for thirteen hundred and two parameters, is crucial and complex. If we calculate the partial derivative for each parameter individually, we would need to iterate through all parameters and all training samples, resulting in an unbearable computational load. This is where an efficient gradient calculation method, **backpropagation** (Backpropagation), comes in. The core idea of backpropagation is the chain rule. It utilizes the layered structure of the neural network. It derives the gradient from the output layer backward to the input layer, calculating the partial derivatives of all parameters at once. This reduces the complexity of gradient calculation from O(n^2) to O(n). And this is why backpropagation is called the engine of neural network learning; without it, training large-scale neural networks would be impossible.

In subsequent videos, we will delve into each step of backpropagation from mathematical principles to intuitive understanding, helping you understand how it efficiently calculates gradients. Before continuing, it's necessary to clarify a common misconception: gradient descent finds a **local minimum**, not a global minimum. In the parameter space, the cost function's landscape can be very complex with many valleys, which are local minima. Different initial parameter positions may lead to different values. But this isn't necessarily a bad thing, because in practical applications, most local minima have sufficiently small costs, allowing the network to perform well. Moreover, as the network scale increases (e.g., more hidden layers and more neurons), the flat areas of the cost function increase, and the influence of local minima decreases, allowing gradient descent to find a solution close to the global optimum.

Another crucial point is that the quality and quantity of training data are paramount. If there is too little training data, the network cannot learn sufficient features, leading to underfitting (accurate identification of training data, poor performance on test data). If the training data contains incorrect labels, or the data distribution is uneven (e.g., very few samples of a certain number), the network will learn incorrect patterns, leading to a decrease in generalization ability. The MNIST dataset is considered a classic because it has a sufficient number of samples, accurate labels, and an even data distribution, providing high-quality learning materials for the network.

Now let's look back at the essence of neural network learning. It doesn't understand the meaning of numbers like humans do, but rather adjusts weights and biases through gradient descent to minimize the cost function. Essentially, it's a complex optimization problem. When we say the network has learned to recognize numbers, we are actually saying that the network has found a set of parameters that can map the input pixel patterns to the corresponding output confidence. This mapping relationship has been learned from the data, not manually programmed by us. There's also a very interesting phenomenon here: when we design the network, we only assume that the hidden layer will learn features such as edge patterns. However, we didn't explicitly program it to do so. It is the gradient descent and the optimization objective of the cost function that naturally guide the network to learn these features that are useful for distinguishing numbers. This is one of the most amazing aspects of neural networks: they can automatically discover underlying patterns in the data without requiring humans to predefine features.

Of course, gradient descent is not perfect. In addition to the local minimum problem, it may encounter vanishing gradients or exploding gradients in deep networks. The gradient may become smaller and smaller during backpropagation, causing the parameters in the hidden layers to hardly update (vanishing gradients), or it may become larger and larger, causing the parameter values to spiral out of control (exploding gradients). However, many solutions to these problems have been developed in modern deep learning, for example, using the ReLU function instead of the sigmoid function, using batch normalization, and residual connections. But these are all later developments. For this stage, let's focus on understanding the core logic of gradient descent.

To summarize, the essence of neural network learning is to minimize the cost function through the gradient descent algorithm. The cost function quantifies the network's recognition error, and the gradient vector provides direction and magnitude guidance for parameter adjustment. The learning rate is used to control the adjustment step size, and backpropagation efficiently calculates the gradient. This entire process constitutes the complete learning path of a neural network, from an empty shell to an intelligent model.

Thank you for watching this video. We'll see you next time.

</details>

### 成本函数：量化误差与指导学习

那么，我们如何知道网络当前参数设置的好坏？如何量化它的学习效果是好是坏？我们不能仅仅逐一目视检查输出结果。这需要一个“裁判”，这就是我们所说的**代价函数**（Cost Function），也称为损失函数（Loss Function）。这个函数的核心作用是将网络的误差水平转化为一个具体的数字：数字越小，网络性能越好；数字越大，性能越差。

让我们看看如何为单个图像计算成本。假设我们将数字“3”的图像输入网络。理想情况下，输出层十个神经元中，对应“3”的神经元激活值应接近1.0，而其他九个应接近0.0。这是期望的输出。然而，在实际中，网络初始参数是随机初始化的，输出层的激活值可能是0.2、0.3、0.1、0.8、0.19、0.88、0.72、0.01、0.64、0.86、0.99、0.63——一团糟。这就是我们的实际输出。

代价函数的计算逻辑很简单：对于每个输出神经元，计算实际激活值与理想激活值之间的差值，然后将其平方，最后将这十个平方值相加。例如，对于代表“3”的神经元，理想值是1.0，实际值是0.88。差值为-0.12，该差值的平方是0.0144。然后我们将所有十个平方差值相加，得到该图像的总成本。

平方差值的作用有两方面：一方面，它使得所有正负差值都变为正数，防止它们相互抵消。例如，如果一个神经元的差值是+0.5，另一个是-0.5，直接相加结果为零，网络会误以为没有误差，尽管实际偏差很大。另一方面，平方函数是连续且可微的，这对于后续的梯度下降计算至关重要。如果函数不可微，我们就无法找到成本下降最快的方向。

然而，仅看单个图像的成本是不够的，网络需要在所有训练数据上都表现良好。因此，我们计算所有训练样本的平均成本。这个平均成本是我们真正想要最小化的目标。代价函数的输入是网络的所有权重和偏置，输出是这个平均成本。网络的学习过程，本质上就是寻找一组权重和偏置，以最小化这个平均成本。

<details><summary>Original English</summary>

But the question arises: how do we know if the network's current parameter settings are good or bad? How do we quantify whether it's learning well or poorly? We can't just rely on visually inspecting the output results one by one. This requires a judge, which is what we call a cost function, also known as the loss function. The core function of this function is to convert the network's error level into a specific number. The smaller the number, the better the network's performance; the larger the number, the worse the performance.

Let's look at how the cost is calculated for a single image. Suppose we input an image of the digit three into the network. Ideally, among the ten neurons in the output layer, the activation value of the corresponding neuron should be close to one point zero, and the other nine should be close to zero point zero. This is the desired output. However, in reality, the network's initial parameters are randomly initialized, and the activation values of the output layer might be 0.2, 0.3, 0.1, 0.8, 0.19, 0.88, 0.72, 0.01, 0.64, 0.86, 0.99, 0.63 – a complete mess. This is our actual output. The calculation logic of the cost function is straightforward: for each output neuron, calculate the difference between the actual activation value and the ideal activation value, then square it, and finally add up these ten squared values. For example, for the third neuron, the ideal value is 1.0, and the actual value is 0.88. The difference is -0.12, and the square of this difference is 0.0144. Then we add up all ten squared differences to get the total cost for this image.

Squaring the differences on the one hand makes all positive and negative differences positive, preventing them from canceling each other out. For example, if one neuron's difference is +0.5 and another's is -0.5, adding them directly would result in zero, and the network would mistakenly think there is no error, even though their actual deviation is significant. On the other hand, the square function is continuous and differentiable, which is crucial for subsequent gradient descent calculations. If the function is not differentiable, we cannot find the direction in which the cost decreases fastest.

However, looking at the cost of a single image is not enough; the network needs to perform well on all training data. Therefore, we calculate the average cost across all training samples. This average cost is the target cost we truly want to minimize. The input to the cost function is the network's thirteen hundred and two weights and biases; the output is this average cost. The learning process of the network is essentially finding a set of weights and biases that minimize this average cost.

</details>

### 优化困境与梯度下降的引入

此时，你可能会想：为什么我们不直接解方程组，找到成本函数导数为零的点（理论上的最小值）呢？这确实是理论上的方法，但在现实中完全不切实际。我们的成本函数是一个拥有1372个输入变量的极其复杂的函数。它的表达式基于整个神经网络的前向传播过程，并且还依赖于数万个训练样本的数据。求解这样一个高维方程组需要天文数字般的计算量，使其无法实现。这就像身处一座地形极其复杂的大山中，如果你试图测量每一个点的海拔来寻找最低点，你永远无法成功，因为点实在太多了。

那么，我们该怎么办？我们需要一种更灵活、更高效的方法，能够在不检查每一个点的情况下，逐步逼近最小值。这就是**梯度下降**（Gradient Descent）的核心思想。想象一个被困在山里的人，他不知道最低点在哪里，但他知道沿着最陡峭的下坡方向行走，能最快地降低海拔。他一步一步地走，每一步都重新评估当前位置，确定最陡峭的下坡方向，并沿着这个方向持续移动。最终，他将到达一个相对较低的值——这是一个局部最小值。

<details><summary>Original English</summary>

At this point, you might think, why don't we just solve the system of equations to find the point where the derivative of the cost function is zero, which would be the minimum theoretically? This is true, but in reality, it's completely impractical. Our cost function is an extremely complex function with thirteen hundred and two input variables. Its expression is based on the forward propagation process of the entire neural network, and also depends on the data from tens of thousands of training samples. Solving such a high-dimensional system of equations would require an astronomical amount of computation, making it impossible to implement. It's like being in a mountain with extremely complex terrain; if you try to measure the altitude of every point to find the lowest point, you'll never succeed, as there are simply too many points.

So, what do we do? We need a more flexible and efficient method that can gradually approach the minimum without checking every single point. This is the core idea of gradient descent. Imagine a person trapped in a mountain. They don't know where the lowest point is, but they know that walking in the direction of the steepest downhill slope will reduce their altitude the fastest. They walk step by step, reevaluating their current position at each step to determine the steepest downward slope. By continuously moving in this direction, they will eventually reach a relatively low value – this is a local minimum.

</details>

### 一维梯度下降：理解方向与步长

让我们从最简单的情况开始理解这个过程。假设我们的成本函数只有一个输入变量，比如一个单一的权重 `w`，而其他参数都固定了。这个函数的图像是一条曲线。我们随机选择一个初始值 `w0`，对应的成本是 `C(w0)`。现在，我们想找到一个方向，使得 `w` 稍微调整后，成本能最大程度地降低。如何确定这个方向？答案是看这一点上的斜率，也就是导数。

如果斜率为负，意味着当 `w` 增加时，成本会降低，所以我们应该向右调整 `w`。如果斜率为正，意味着当 `w` 减小时，成本会降低，所以我们应该向左调整 `w`。

步长（step size）也非常重要。如果步长太大，可能会越过最小值点，落在斜率的另一侧，导致成本增加。如果步长太小，收敛速度会非常慢，需要很多步才能接近最小值。因此，步长应该与斜率的绝对值成正比：斜率越陡峭（绝对值越大），当前位置离最小值点越远，可以迈出更大的步子；斜率越平缓（绝对值越小），离最小值点越近，应采取更小的步子以避免越过。

<details><summary>Original English</summary>

Let's start with the simplest case to understand this process. Suppose our cost function only has one input variable, such as a single weight, `w`, and all other parameters are fixed. The graph of this function is a curve. We randomly choose an initial value `w0`, and the corresponding cost is `C(w0)`. Now we want to find a direction that allows `w` to be adjusted slightly to reduce the cost the most. How do we determine this direction? The answer is to look at the slope at this point, which is the derivative.

If a slope is negative, it means that the cost decreases when `w` increases; therefore, we should adjust `w` to the right. If the slope is positive, it means the cost decreases when `w` decreases; how do we adjust `w`? To the left. The step size is also very important. If the step size is large, it may overshoot the minimum point and end up on the opposite side of the slope, causing the cost to increase. If the step size is too small, the convergence speed will be very slow, requiring many steps to approach the minimum value. Therefore, the step size should be proportional to the absolute value of the slope. The steeper the slope, the larger the absolute value, the further the current position is from the minimum point, so a larger step can be taken. The flatter the slope, the smaller the absolute value, the closer it is to the minimum point, so a smaller step should be taken to avoid overshooting.

</details>

### 高维空间中的梯度：指引方向

然而，我们的网络有1372个参数。这意味着成本函数的输入是1372维的，一个我们无法想象的高维空间，其方向无法仅用斜率来描述。这时，我们需要一个更强大的数学工具：**梯度**（Gradient）。在多变量函数中，梯度是一个向量，其每个分量是函数相对于相应输入变量的偏导数。例如，对于有两个输入变量 `x` 和 `y` 的函数 `C(x, y)`，梯度是 `∇C = (∂C/∂x, ∂C/∂y)`。

这个梯度向量有两个关键特征：第一，它的方向是函数值增长最快的方向，即最陡峭的上升方向。第二，梯度向量的长度代表了最陡峭方向上的斜率大小。既然梯度指向最陡峭的上升方向，反之，**负梯度**（Negative Gradient），`-∇C`，就指向最陡峭的下降方向，这正是我们在高维空间中所需要的。

在高维空间中，我们无法直观看到斜率，但梯度向量为我们提供了清晰的方向指引。无论成本函数的输入是二维、十维还是1372维，负梯度向量始终告诉我们如何调整每个参数，以在当前参数组合下实现成本函数最大的下降。

例如，假设我们的成本函数有两个输入变量 `w1` 和 `w2`（对应两个权重），梯度为 `∇C = (0.8, -0.3)`。这意味着对于 `w1`，函数对其偏导数为0.8；因此，增加 `w1` 会增加成本，减小 `w1` 会降低成本。对于 `w2`，偏导数为-0.3；因此，增加 `w2` 会降低成本，减小 `w2` 会增加成本。负梯度是 `(-0.8, 0.3)`。它告诉我们，应该将 `w1` 减小0.8个单位，将 `w2` 增加0.3个单位。这个调整将导致成本下降。

在实际的梯度下降算法中，我们使用一个称为**学习率**（Learning Rate，通常用 `eta` 表示）的参数来控制步长。参数更新公式为：`新参数 = 旧参数 - 学习率 * 梯度分量`。这个学习率是一个正数。它的大小直接影响训练效果：如果学习率过大，步长就会过大，可能导致在最小值附近震荡，永远无法收敛；如果学习率过小，步长就会过小，训练过程会非常缓慢，需要成千上万次迭代才能接近最小值。因此，学习率的选择是神经网络训练中一个重要的超参数，需要根据具体任务进行调整。

<details><summary>Original English</summary>

However, our network has thirteen hundred and two parameters. This means the input to the cost function is thirteen hundred and two-dimensional, a high-dimensional space that we cannot imagine, and the direction cannot be described using the slope alone. This is where we need a more powerful mathematical tool: the gradient. In a multivariable function, the gradient is a vector, and each component is the partial derivative of the function with respect to the corresponding input variable. For example, for a function `C(x, y)` with two input variables `x` and `y`, the gradient is `∇C = (∂C/∂x, ∂C/∂y)`.

This gradient vector has two key characteristics. First, its direction is the direction in which the function value increases most rapidly, that is, the direction of the steepest slope. Second, the length of the gradient vector represents the magnitude of the slope in the steepest direction. Since the gradient points to the steepest upward slope, conversely, the negative gradient `-∇C` points in the direction of the steepest downward slope, which is exactly what we want. In high-dimensional space, we cannot visually see the slope, but the gradient vector provides us with clear directional guidance. Regardless of whether the cost function's input is two-dimensional, ten-dimensional, or thirteen hundred and two-dimensional, the negative gradient vector always tells us how to adjust each parameter to achieve the greatest decrease in the cost function for the current combination of parameters.

For example, suppose our cost function has two input variables, `w1` and `w2`, corresponding to two weights. The gradient is `∇C = (0.8, -0.3)`. This means that for `w1`, the partial derivative of the function with respect to it is 0.8. Therefore, increasing `w1` will increase the cost, and decreasing `w1` will decrease the cost. For `w2`, the derivative is -0.3, so increasing `w2` will decrease the cost, and decreasing `w2` will increase the cost. The negative gradient is `(-0.8, 0.3)`. It tells us that we should decrease `w1` by 0.8 units and increase `w2` by 0.3 units. This adjustment will cause the cost to decrease.

In the actual gradient descent algorithm, we use a parameter called the learning rate (`eta`) to control the step size. The parameter update formula is: `new parameter = old parameter - eta * gradient component`. This learning rate is a positive number. It directly affects the training effect. If it is too large, the step size will be too large, which may cause oscillation around the minimum point and never converge. If it is small, the step size will be too small, and the training process will be very slow, requiring thousands or tens of thousands of iterations to approach the minimum value. Therefore, the choice of learning rate is an important hyperparameter in neural network training and needs to be adjusted according to the specific task.

</details>

### 参数更新与自适应调整

现在我们将这个逻辑扩展到1372维的参数空间。我们可以将所有的权重和偏置组织成一个巨大的列向量 `θ`。这个向量有1372个元素，每个对应一个参数。成本函数 `C` 对 `θ` 的梯度 `∇C(θ)` 是一个与 `θ` 同维度的向量。梯度向量 `∇C(θ)` 的每个元素是成本函数相对于 `θ` 中对应参数的偏导数。负梯度向量 `-∇C(θ)` 也是一个大小为1372的向量。每个元素告诉我们对应的参数应该增加还是减少，以及调整的相对幅度。

这里的关键是相对幅度。梯度向量中不同分量的绝对值反映了相应参数对成本函数影响的程度。例如，如果对应权重 `Wa` 的梯度分量绝对值为0.5，而对应权重 `Wb` 的分量绝对值为0.01，这意味着调整 `Wa` 对降低成本的贡献比调整 `Wb` 大得多。因此，在参数更新时，`Wa` 的调整幅度会更大。这相当于网络自动知道了哪些参数更重要，应该被更显著地调整。

举一个具体的例子：假设网络正在学习识别数字“3”。一个权重连接着一个输入层像素神经元（对应数字“3”曲线的上部）和一个隐藏层神经元。如果这个权重的梯度分量绝对值很大，意味着该权重的当前设置对识别数字“3”有显著影响。也许它当前的值太小了，导致隐藏层神经元无法有效捕捉上部曲线的特征。因此，梯度指示网络应该显著调整这个权重。而另一个连接到相关像素的权重，如果其梯度分量非常小，表明它对识别数字“3”影响不大，网络只会对其进行微小的调整。这种自适应调整的特性使得梯度下降非常高效。

<details><summary>Original English</summary>

Now we extend this logic to a thirteen hundred and two-dimensional parameter space. We can organize all the weights and biases into a huge column vector, `θ`. This vector has thirteen hundred and two elements, each corresponding to a parameter. The gradient of the cost function `C` with respect to `θ` is `∇C(θ)`, which is a vector with the same dimension as `θ`. Each element of the gradient vector `∇C(θ)` is the partial derivative of the cost function with respect to the corresponding parameter in `θ`. The negative gradient vector `-∇C(θ)` is also a vector of size thirteen hundred and two. Each element tells whether the corresponding parameter should be increased or decreased, and the relative magnitude of the adjustment.

The key here is the relative magnitude. The absolute value of the different components in the gradient vector reflects the degree of influence of the corresponding parameter on the cost function. For example, if the absolute value of the gradient component corresponding to weight `Wa` is 0.5, and the absolute value of the component corresponding to weight `Wb` is 0.01, it means that adjusting `Wa` contributes more to reducing the cost than adjusting `Wb`. Therefore, during parameter updates, the adjustment magnitude of `Wa` will be larger. This is equivalent to the network automatically knowing which parameters are more important and should be adjusted more significantly.

For a specific example, suppose the network is learning to recognize the digit three. A weight connects an input layer pixel neuron corresponding to the upper part of the curve of the number three to a neuron in the hidden layer. If the absolute value of this weight's gradient component is large, it means that the current setting of this weight has a significant impact on recognizing the number three. Perhaps its current value is too small, preventing the hidden layer neuron from effectively capturing the features of the upper curve. Therefore, the gradient indicates that the network should significantly adjust this weight. If another weight connecting to a relevant pixel has a very small gradient component, indicating that it has little impact on recognizing the number three, the network will only make a tiny adjustment to it. This characteristic of adaptive adjustment makes gradient descent very efficient.

</details>

### 神经网络的完整学习流程与反向传播

现在，我们可以将神经网络的整个学习过程整合起来：
1.  **随机初始化所有权重和偏置**。为什么要随机化？因为如果所有权重都初始化为相同的值，那么在前向传播过程中，同一层的神经元将产生相同的激活值，后续的调整也会完全同步，网络将无法学习到不同的特征。这是对称权重的问题。随机化打破了对称性，使得每个神经元都能学习独特的特征。
2.  **将一批训练数据输入网络，通过前向传播计算每个样本的输出激活值**。
3.  **计算所有训练样本的平均成本**，作为当前参数设置的性能得分。
4.  **计算成本函数相对于所有参数的梯度 `∇C(θ)`**。
5.  **根据公式 `新参数 = 旧参数 - 学习率 * 梯度分量` 更新所有1372个权重和偏置**。
6.  **重复步骤二至五**，直到平均成本下降到满意水平或不再显著下降。

这个循环过程就是神经网络的训练过程。它看起来只有几个步骤，但第四步——如何高效地计算1372个参数的梯度——是至关重要的且复杂的。如果我们单独计算每个参数的偏导数，需要遍历所有参数和所有训练样本，这将导致无法承受的计算负载。这时，一个高效的梯度计算方法——**反向传播**（Backpropagation）——应运而生。反向传播的核心思想是链式法则。它利用了神经网络的层状结构，从输出层向后（直到输入层）推导出梯度，一次性计算出所有参数的偏导数。这使得梯度计算的复杂度从 O(n^2) 降低到 O(n)。这也是为什么反向传播被称为神经网络学习的引擎；没有它，训练大规模神经网络将是不可能的。

在后续视频中，我们将从数学原理到直观理解，深入探讨反向传播的每一步，帮助你理解它是如何高效计算梯度的。

<details><summary>Original English</summary>

Now we can put together the entire learning process of a neural network.
1.  **Randomly initialize all weights and biases.** Why randomize? Because if all weights are initialized to the same value, then during forward propagation, all neurons in the same layer will produce the same activation value, and subsequent adjustments will be completely synchronized. The network will not be able to learn different features. This is the problem of symmetric weights. Randomization breaks the symmetry, allowing each neuron to learn unique features.
2.  **Input a batch of training data into the network and calculate the output activation value for each sample** through forward propagation.
3.  **Calculate the average cost of all training samples** as a performance score for the current parameter settings.
4.  **Calculate the gradient `∇C(θ)` of the cost function with respect to all parameters.**
5.  **Update all thirteen hundred and two weights and biases** according to the formula: `new parameter = old parameter - eta * gradient component`.
6.  **Repeat steps two through five** until the average cost decreases to a satisfactory level or no longer decreases significantly.

This cyclical process is the training process of the neural network. It may seem like there are only a few steps, but step four, how to efficiently calculate the gradient for thirteen hundred and two parameters, is crucial and complex. If we calculate the partial derivative for each parameter individually, we would need to iterate through all parameters and all training samples, resulting in an unbearable computational load. This is where an efficient gradient calculation method, **backpropagation**, comes in. The core idea of backpropagation is the chain rule. It utilizes the layered structure of the neural network. It derives the gradient from the output layer backward to the input layer, calculating the partial derivatives of all parameters at once. This reduces the complexity of gradient calculation from O(n^2) to O(n). And this is why backpropagation is called the engine of neural network learning; without it, training large-scale neural networks would be impossible.

In subsequent videos, we will delve into each step of backpropagation from mathematical principles to intuitive understanding, helping you understand how it efficiently calculates gradients.

</details>

### 梯度下降的局限性与数据的重要性

在继续之前，有必要澄清一个常见的误解：梯度下降找到的是**局部最小值**（Local Minimum），而非全局最小值。在参数空间中，成本函数的地形可能非常复杂，有许多“山谷”，这些就是局部最小值。不同的初始参数位置可能导致收敛到不同的值。但这并非全然是坏事，因为在实际应用中，大多数局部最小值具有足够小的成本，足以让网络表现良好。

此外，随着网络规模的增加（例如，更多的隐藏层和更多的神经元），成本函数的平坦区域会增加，局部最小值的影响会减小，使得梯度下降能够找到接近全局最优解的方案。

另一个关键点是，训练数据的质量和数量至关重要。如果训练数据太少，网络无法学习到足够多的特征，导致**欠拟合**（Underfitting），即在训练数据上识别准确，在测试数据上表现差。如果训练数据包含错误的标签，或者数据分布不均（例如，某个数字的样本非常少），网络将学习到错误的模式，导致泛化能力下降。MNIST数据集之所以被认为是经典，正是因为它拥有足够多的样本、准确的标签和均匀的数据分布，为网络提供了高质量的学习材料。

<details><summary>Original English</summary>

Before continuing, it's necessary to clarify a common misconception: gradient descent finds a local minimum, not a global minimum. In the parameter space, the cost function's landscape can be very complex with many valleys, which are local minima. Different initial parameter positions may lead to different values. But this isn't necessarily a bad thing, because in practical applications, most local minima have sufficiently small costs, allowing the network to perform well.

Moreover, as the network scale increases (e.g., more hidden layers and more neurons), the flat areas of the cost function increase, and the influence of local minima decreases, allowing gradient descent to find a solution close to the global optimum.

Another crucial point is that the quality and quantity of training data are paramount. If there is too little training data, the network cannot learn sufficient features, leading to underfitting (accurate identification of training data, poor performance on test data). If the training data contains incorrect labels, or the data distribution is uneven (e.g., very few samples of a certain number), the network will learn incorrect patterns, leading to a decrease in generalization ability. The MNIST dataset is considered a classic because it has a sufficient number of samples, accurate labels, and an even data distribution, providing high-quality learning materials for the network.

</details>

### 学习的本质与未来展望

现在让我们回顾神经网络学习的本质。它不像人类那样理解数字的含义，而是通过梯度下降算法调整权重和偏置，以最小化成本函数。本质上，这是一个复杂的**优化问题**（Optimization Problem）。当我们说网络学会了识别数字，实际上是我们期望网络找到了一个能够将输入像素模式映射到相应输出置信度的参数集。这个映射关系是从数据中学习到的，而非我们手动编程设定的。

这里还有一个非常有趣的现象：当我们设计网络时，我们只假设隐藏层会学习到诸如边缘模式之类的特征。然而，我们并未明确编程让它这样做。是梯度下降和成本函数的优化目标，自然地引导网络学习这些对区分数字有用的特征。这是神经网络最神奇的方面之一：它们能够自动发现数据中的潜在模式，而无需人类预先定义特征。

当然，梯度下降并非完美。除了局部最小值问题，在深度网络中它还可能遇到**梯度消失**（Vanishing Gradients）或**梯度爆炸**（Exploding Gradients）。梯度在反向传播过程中可能变得越来越小，导致隐藏层中的参数几乎不更新（梯度消失）；或者变得越来越大，导致参数值失控（梯度爆炸）。然而，在现代深度学习中，这些问题的许多解决方案已经被开发出来，例如使用ReLU函数而非Sigmoid函数，使用批归一化（Batch Normalization）和残差连接（Residual Connections）。但这些都是后来的发展。

在此阶段，我们的重点是理解梯度下降的核心逻辑。总结来说，神经网络学习的本质是通过梯度下降算法最小化成本函数。成本函数量化了网络的识别误差，而梯度向量提供了参数调整的方向和幅度指引。学习率用于控制调整步长，反向传播则高效地计算梯度。整个过程构成了神经网络从一个空壳到一个智能模型的完整学习路径。

感谢观看本视频。下次再见。

<details><summary>Original English</summary>

Now let's look back at the essence of neural network learning. It doesn't understand the meaning of numbers like humans do, but rather adjusts weights and biases through the gradient descent algorithm to minimize the cost function. Essentially, it's a complex optimization problem. When we say the network has learned to recognize numbers, we are actually saying that the network has found a set of parameters that can map the input pixel patterns to the corresponding output confidence. This mapping relationship has been learned from the data, not manually programmed by us.

There's also a very interesting phenomenon here: when we design the network, we only assume that the hidden layer will learn features such as edge patterns. However, we didn't explicitly program it to do so. It is the gradient descent and the optimization objective of the cost function that naturally guides the network to learn these features that are useful for distinguishing numbers. This is one of the most amazing aspects of neural networks: they can automatically discover underlying patterns in the data without requiring humans to predefine features.

Of course, gradient descent is not perfect. In addition to the local minimum problem, in deep networks, it may encounter vanishing gradients or exploding gradients. The gradient may become smaller and smaller during backpropagation, causing the parameters in the hidden layers to hardly update (vanishing gradients), or it may become larger and larger, causing the parameter values to spiral out of control (exploding gradients). However, many solutions to these problems have been developed in modern deep learning, for example, using the ReLU function instead of the sigmoid function, using batch normalization, and residual connections. But these are all later developments.

For this stage, let's focus on understanding the core logic of gradient descent. To summarize, the essence of neural network learning is to minimize the cost function through the gradient descent algorithm. The cost function quantifies the network's recognition error, and the gradient vector provides direction and magnitude guidance for parameter adjustment. The learning rate is used to control the adjustment step size, and backpropagation efficiently calculates the gradient. This entire process constitutes the complete learning path of a neural network, from an empty shell to an intelligent model.

Thank you for watching this video. We'll see you next time.

</details>