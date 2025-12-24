---
area: tech-engineering
category: ai-ml
companies_orgs:
- Krea.ai
- Midjourney
date: '2025-08-23'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Diego Rodriguez
- Claude Shannon
- Changloo
products_models:
- LLMs
- diffusion models
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=h5ItAJuB3Fc
speaker: AI Engineer
status: evergreen
summary: Krea.ai联合创始人Diego Rodriguez探讨了AI生成媒体评估中的核心挑战：如何将人类感知和美学纳入考量。他指出，当前AI评估指标（如FID分数）未能充分理解人类对图像的真实感知，导致模型在美学判断上存在缺陷。Rodriguez通过信息论和数据压缩原理，揭示了人类感知偏差如何无意中影响AI训练数据，并呼吁开发更符合人类美学偏好的“感知感知”指标，促使AI领域对评估方法进行更深入的思考。
tags:
- aesthetic-metric
- ai-evaluation
- data
- human
title: AI生成内容的感知评估：美学与人类视角的挑战
---

### 引言：AI评估中的人类感知缺失

大家好，我是 **Diego Rodriguez**，**Krea.ai**（一家专注于生成式媒体、多媒体和多模态等热门领域的AI初创公司）的联合创始人。我今天主要想分享一个故事，关于当我们必须将人类感知、人类观点和美学纳入考量时，如何进行评估。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, hello everyone. Uh, my name is Diego Rodriguez. Uh, I'm the co-founder of Korea, a startup in the AI space like many others. uh in particular generative media, multimedia, multimodel and all the uh buzzwords but uh I come here mainly to tell a story about how we think about evaluations when we have to take into account human perception and human opinion and aesthetics uh into the mix. Right?</p>
</details>

我将从一个非常简单的故事开始。我展示了一张AI生成的手部图像，它显然看起来很糟糕。然后我问AI：“你觉得这张图片怎么样？”它思考了17秒，显然进行了工具调用、Python分析和OpenCV处理，然后收取了我几美分后回答说：“哦，它大部分是自然的，但……”这让我想到，我们拥有许多人声称是**AGI**（Artificial General Intelligence: 人工通用智能）的东西，但它却完全无法回答一个非常简单的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to start with a very simple story. is like I put an AI generated image of a hand obviously it looks horrible and then I ask 03 what do you think of this image then he thought for 17 seconds obviously tool calling does Python analysis opencv goes crazy and then after he charges me a few cents is like oh just a couple multar is like it's mostly natural but like and it's like okay we have like what many people claim is basically AGI and it is completely unable of answering a very simple question and</p>
</details>

这令人惊讶，因为我们人类看到那张图片时，会非常自然地做出反应，觉得“那是什么？那不自然。”我觉得这正是AI模型在训练时所面临的问题：它们基于人类数据和人类偏好数据进行训练，但又在某种程度上受限于我们人类基于先入之见和感知的数据。所以，这次演讲就是关于我们如何能做得更好，并提出一些我认为在这个领域中尚未被充分探讨的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and like that's it that's a surprising thing if you think about it because we as humans when people see that image is like we just react so naturally right against that it's like what is that like that that's not natural and and I feel like that's precisely what AI models are being trained on a on human data right uh uh second on human preference data uh and and third like in a way limited by the data that we humans ba based on our preconceived notions and perception and all of that. So that's what this talk is about about why what um what can we do better and honestly to ask ourselves some questions that I think are not being asked enough in the field.</p>
</details>

### 信息论与人类感知的历史回溯

好的，我们来回顾一点点历史。我们都知道 **Claude Shannon**（克劳德·香农: 信息论的奠基人），他被誉为信息论之父。许多人认为他的硕士论文是世界上最重要的硕士论文之一，因为它为数字电路乃至后来的通信奠定了基础，某种程度上甚至可以说影响了当今的**LLMs**（Large Language Models: 大型语言模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um cool. So tiny tiny bit of history. Uh there's uh we all know about Claude uh Claude Shannon that is the the father of information theory uh and according to many his master thesis one of the most important master thesis in the world where he laid foundations for digital circuits and then eventually communication and all and to a degree we can say that even LLMs uh nowadays right if we fast forward</p>
</details>

我想强调的是，我们称他的工作为信息论的基石。然而，当他发表时，它实际上被称为“通信理论的数学基础”，他始终专注于通信。他的著作中有一张图，描绘了信息源、信道和目的地，其中可能存在一些噪声。作为一家专注于媒体公司的创始人，我发现经典信息论和通信理论之间存在有趣的相似之处。虽然我没有在这里展示那张图，但如果你对**变分自编码器**（Variational Autoencoders: 一种生成模型）或**神经网络**（Neural Networks: 模拟人脑结构的计算模型）有所了解，你可能会眯着眼睛想：“哦，那不就是一个神经网络吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and I want I want to focus on the inform all the like the fact that we call his work foundational and information theory. Well, when he published it, it was actually called like mathematical foundation for communication theory and he was always focused on communication. um there's this image uh appears on that work uh and it's all about okay this is the source this is the channel this is nation there can be some noise there um and as a well as a founder of a company that is focusing on on media to me is interesting to realize like these parallels between classic information theory and communication Let me see. Did I put the image? Let's see. Well, if you I didn't put the image, but if you have any context around variational autoenccoders or neural networks or whatever, you you can squint and be like, oh, is that a neural network, right?</p>
</details>

### 压缩技术如何利用人类感知局限

在信息和通信的背景下，我想探讨压缩与我们如何思考评估之间的关系。例如，我将谈谈 **JPEG**（Joint Photographic Experts Group: 一种常见的图像压缩标准）。JPEG利用了人类的特性：我们对亮度非常敏感，但对颜色则不那么敏感。有一个视觉错觉也说明了这一点，其中A和B区域的颜色实际上是相同的，但我们几乎无法感知到，直到我们进行某种操作后才恍然大悟。那么，这是怎么回事呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and in the context of information and communication I want to talk about how compression is going to be uh related to how we think about evaluation right in I'm going to talk in for example on JPEG um JPEG exploits like human nature in the sense that we are very sensitive to brightness but not so much to color and this is a illusion that also talks about that where A and B is actually the same color but we are basically unable to perceive it until we do this and then suddenly it's like oh really um and it's kind of like what's going on there right</p>
</details>

JPEG也做了同样的事情：我们使用**RGB**（Red Green Blue: 红绿蓝三原色）色彩空间在计算机上表示图像，并注意到其中有一条对角线代表图像的亮度。我们可以将其转换为一个不同的色彩空间，将颜色和亮度分离开来，然后对颜色通道进行降采样，因为我们对颜色并不那么敏感。因此，我们可以移除或部分移除这些信息。完成这些操作后，我们得到一张亮度和颜色分量分离的图像。降采样后，我们可以尝试重建图像。例如，原始图像和经过颜色降采样的图像对我们来说看起来是一样的，但后者的信息量却减少了大约50%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and so JPEG just does the same thing where okay we have RGB color space to represent images with computers uh we notice that there's a diagonal that represents the brightness of the images we can change into a different color space uh that separates color versus brightness and then we can down sample the channels around color because we are actually not even that done sensitive to it. So we can remove that or parts of it and then uh once we do that this is an image where we can see the uh brightness and color component separated. Once we down sample, we can try to recreate the image. And this is an example of like basically original image and then the image with the down sample color looks the same to us. Uh, and the image is like 50% less information, right?</p>
</details>

还有其他技术，比如**霍夫曼编码**（Huffman Coding: 一种数据压缩算法），但重点在于此。同样地，如果我们利用相同的原理来处理音频，思考我们能听到什么、不能听到什么，我们就会得到 **MP3**（MPEG-1 Audio Layer III: 一种音频压缩格式）。如果我们在时间维度上做同样的事情，恭喜你，你就有了 **MP4**（MPEG-4 Part 14: 一种多媒体容器格式）。所有这些都基于一个原则：利用我们人类感知世界的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And other stuff. There's Huffman Huffman coding and more stuff, but like the point is the right. And then the thing is if you exploit the same for audio like what can we hear? What can we not hear? Well, you you do the same and we have MP3. And then if you do the exact same thing across time, well, congrats. Now you have MP4. It's like it's all this principle of like let's exploit how we humans perceive the world, right?</p>
</details>

这让我开始思考自己，因为我学习的是人工系统工程，这门学科涉及麦克风和扬声器等所有这些微型设备的工作原理。有趣的是，当我编写代码时，我开始删除信息，我知道我确实在删除信息，但当我重新渲染图像时，我看到的却是一样的。这就像哲学家们常说的，我们受限于自己的感官，但这是我第一次亲眼看到这种限制——我无法分辨出差异。那么，如果我们的许多数据都来自互联网，我们从互联网上获取大量数据，而其中许多图像也经过了压缩，我们是否考虑过，也许我们的AI也因此受到了限制？因为我们正在将我们自身的缺陷以某种方式“传染”给AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but this made me think about myself because I studied artificial systems engineering, which is engineering around all of these mic how microphones work, how speakers work. And it was just interesting to me that I was coding. I start deleting information. I know for a fact that I'm deleting information yet and then I rerender the image and I see the same. is like like philosophers always tell you about like oh we are limited by our senses but like this is the first time I was like I'm seeing it right like I am not seeing the difference um but then if all if if a lot of our data is the internet right like we're stripping data from the internet bunch of those images are also compressed right like are we taking into account that perhaps our AIS are limited too because we're kind cont like we have some sort of contagion going on of our flaws into the AI.</p>
</details>

### 现有AI评估指标的缺陷

事情变得更加复杂，例如，我从一篇名为“Clean FID”的论文中截取了一张图。对于不了解背景的人来说，**FID分数**（Fréchet Inception Distance: 一种衡量生成图像质量和多样性的指标）是衡量**扩散模型**（Diffusion Models: 一种生成模型）再现图像效果的标准指标之一。但是，当你开始添加JPEG伪影时，FID分数会显示“哦不不不，这是一张糟糕透顶的图像”，然而从感知上讲，这四张图像基本相同。FID分数却说“不不不，这真的很糟糕”。那么问题来了，我们为什么要使用FID分数或类似的指标来判断一个生成式AI模型的好坏呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then it gets more tricky because for instance uh this is a just a screenshot I took from a paper I think it's called clean FID and FID scores for all of you who don't have context is one of the standard metrics used for uh how well for instance diffusion models are are reproducing an image but then you start adding JPEG artifacts and the score is like oh no no no this is horrible horrible image and it's like perceptually the four images are basically the same yet the FID score is like no no no this is really bad. So then it's like why are we using FID scores or metrics along those lines to deci to decide oh this generative AI model is good or bad right</p>
</details>

我觉得我们有时只专注于衡量那些容易衡量的东西，比如**CLIP**（Contrastive Language-Image Pre-training: 一种多模态模型）的问题依从性、有多少个物体、这个是蓝色还是红色等等。但对于这里的情况呢？“哦，这太糟糕了，生成器太差了，因为时钟不应该是那样的，天空也毫无意义。”这不仅仅是我们用人类的感知来限制AI，更重要的是，我们忘记了衡量标准的相对性。有时，艺术作品背后蕴含着只有人类才能理解的意义，比如“这是作者想表达什么”，但这些指标似乎无法体现出来。从商业和专业的角度来看，我的工作是思考如何建立一家公司，让各种创意人士和艺术家能够更好地表达自己。我们可以从图像开始，也可以从视频开始，但如果这就是当前的技术水平，我们该如何实现呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um so the thing is sometimes I feel like we are focused on measuring just things that are easy to measure right like problem adher adherence with clip how many objects are there is this blue is this red etc but what about here. Oh, it's like, oh no, really bad, really bad generator because that's not how clock looks and the sky that makes no sense. And it's like, okay, how not only are we limiting our AIS by our human perceptions? Uh, on top of that, we forget about the relativity of metrics, right? like uh no actually this is art and this is great and and and and there's sometimes meaning behind the work that is not like it is conveyed in the image but only if you're human you you get it right like oh this is what the author is trying to tell me but I feel like the metrics don't show that and kind like commercially and professionally my job is kind of like okay how can we make a company that allows creatives artists is of all sorts. Uh we can start with image, we can start with video, but to better express themselves. But how are we supposed to do that if this is kind of like the state-of-the-art, right?</p>
</details>

### AI时代我们错过的“交通”问题

我的一位朋友 **Changloo** 在 **Midjourney** 工作，他有一些很棒的演讲，大家应该去看看。一年多前，他告诉我一句话，我至今仍在思考：“嘿，伙计，如果你仔细想想，在一切都靠马匹的时代，预测汽车的出现并不难。”我当时觉得，是的，预测“汽车是未来”之类的并不难。我们有一个这样的东西：马匹提供动力。所以，你把马换成发动机，那本质上就是一辆汽车，对吧？我说，这有什么难的？他说：“你知道什么难以预测吗？交通。”然后我一直在思考，作为工程师、研究人员和创始人，我们现在错过了哪些“交通”问题？因为我觉得大家都在关注“是的，你可以把JSON转换成YAML”，但谁在乎那个呢？或者说，是的，这很重要，但我们都错过了什么样的大局呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um then a friend of mine uh Changloo actually works at at Mid Journey. it was uh he has um like he has great talks that you should all check but he told me once a little bit over a year ago a quote that I just can't stop thinking about which goes something like hey man if you think about it like predicting the car back when everything was horses it's not that hard I was like well like yeah it's not that hard to to like oh cars are the future and whatever it's like we have We have a thing that goes like this. We have horses that make energy. So, you swap the thing for the engine. That's essentially a car, right? I was like, come on, how hard is that? It's like, you know what's hard to predict? Traffic, right? And and then I just kept thinking about I was like, oh man, like as engineers, as researchers, as founders, what are the traffics that we're missing now? Because I feel like everyone's focused on like, yeah, but you can you can I don't know transform from JSON to JAMAL and like who cares that dude? who cares like or or yes it's important right like but what kind of big picture are we all missing right?</p>
</details>

### 巴别塔神话与AI的翻译能力

接着他谈到了巴别塔的神话，简而言之就是：人类想去见上帝，但上帝说“不，我不希望这样”。于是，上帝决定混淆所有人的语言，让他们无法协调。每个人都开始说不同的语言，导致工程无法继续进行。这让我想起了后端工程师的常规基础设施会议，大家争论不休：“哦不，我们应该用**Kubernetes**（一个开源的容器编排系统）！”“不，我们应该……”结果就是无休止的争吵，什么也建不成。我心想：“天哪，上帝赢了！”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um then he talks about well you know the myth of the Tower of Babel where in a nutshell is like God like we want to go and meet God and then he's No, I don't want that. So, instead, I'm just going to confuse all of you, and then you're not going to be able to uh coordinate. Uh, and then you're all each one is going to speak a different language, and then it's just basically going to be impossible to keep the thing going, which like reminds me of like a standard infrastructure meetings with backend engineers. It's like, oh no, we should use Kubernetes. No, we should just And it's like it's just all fighting and whatever. Nothing get nothing gets built. I'm like, dude, God is winning. God damn it.</p>
</details>

但这让我思考：我们现在已经进入了一个时代，模型基本上解决了翻译问题，或者说在很大程度上解决了。那么，现在我们都可以说自己的语言，同时又能相互交流，这意味着什么呢？我已经在实践了。例如，我有时会为Krea.ai手动进行客户支持，我真的会用日语和一些用户交流，但我其实不会说日语。我学了一点点，但并不流利。现在，我能够为那些原本无法服务的国家提供出色的（无论是何种含义的）创始人级别的客户支持。所以我邀请大家思考这到底意味着什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but then this makes me think about like we are now in we just entered the age where you can have models essentially they solve translation right or they solved it to a very high degree. So so what happens now that we that we can all speak our own languages yet at the same time communicate with each other. I'm already doing it. For instance, I do sometimes customer support manually for Korea and I literally speak Japanese with some of my users and I don't speak Japanese. I learn a little bit but I don't speak it and and and like I'm now able to provide an excellent founder whatever that means uh customer support level to a country that otherwise I would be unable to do right and and so I invite us all to think about what that really means.</p>
</details>

### 重塑评估：感知感知的指标

因为这例如意味着我们现在可以更好地理解或向他人更好地传达我们自己的观点。回到我之前谈论艺术的那个观点，那其实就是一种意见，对吧？评估不仅仅是关于“这里有四条切割线”，而是关于“这条切割线是蓝色的”，然后有人会问“它是蓝色还是青色？是什么样的蓝色？我不喜欢这种蓝色”，等等。所以，简而言之，我们如何评估我们的评估呢？从我的角度来看，我认为这是不好的，那么我希望有能考虑我个人观点的指标。然后，考虑到我可能是一个视觉学习者，这意味着你的评估应该考虑到我们人类如何感知图像，对吧？同时，还要考虑数据的性质，比如“哦，所有数据都是在互联网上经过JPEG压缩的”。因此，在训练数据时，要考虑到这些伪影，考虑到所有这些因素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um because this for for instance means that we can now understand better or transmit our own opinion better to others and on the previous point that I was talking about with the art that's kind of like an opinion right like evals are not just about are there four cuts here it's about this cut is blue and it's like yeah but is it blue or is it teal what kind of blue and I don't like this blue and all of that. Um so like in a nutshell is like how how do we evol our evolves right like from my opinion like from my opinion this is bad um then I want metrics that take into account my my opinion too and then it's like okay consider myself I may be a visual learner what that means is like maybe your evil should take into account how we humans perceive images, right? So, and and and also the the nature of the data such as oh, it's all trained on JPEG on the internet. So, take into account the artifacts, take into account uh like all of these while while training your data.</p>
</details>

### Krea.ai的未来方向与问答

好的，我想这是致谢前的必要幻灯片。我们拥有大量的用户和资金。所有这些都是由八个人完成的，现在我们有十二个人了。我今天设置了一个高优先级申请的邮箱，欢迎任何想从事美学研究、超个性化、实时扩展生成式AI模型（用于全球多媒体图像、视频、音频和3D）研究的人加入。我们拥有这些客户，就是这样。谢谢大家。哦，问答环节。好的，太棒了。有什么问题吗？是的，有很多观点。你能重新提问吗？是的。是的。所以，简而言之，问题是是否存在感知感知的指标？比如，我展示了FID分数的一个例子，它会随着JPEG伪影而发生很大变化。有没有那种几乎相反，几乎不变化，而且指标仍然很好的情况呢？确实有一些，其中许多也用于传统的编码技术中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, okay, I guess mandatory slide before the thank you. Uh, bunch of users, bunch of money. We did all of that with eight people, now we're 12. Uh this is an email that I set up today for high priority applications uh for anyone who wants to work on research around uh aesthetics research uh hyperpersonalization scaling generative AI models in real time for multimedia image video audio 3D uh across the globe. Uh we have customers like those and that's it. Thank you. Oh Q&A. Okay, perfect. Any questions? Uh, >> yeah. Can there's many points there. Can you like refrain the question like Yeah. >> Yeah. Yeah. So, so the question like in a nutshell is like are there uh perceptually aware metrics right like like okay you I showed an example of FID score it changes a lot with JPEG artifacts are those where it's almost like the opposite barely changes uh and the metric is still good like there are some and many of these are used also in traditional uh encoding uh techniques um</p>
</details>

但从某种意义上说，我在这里是想邀请大家开始思考这些问题，比如我们实际上可以训练一个**分类器**（Classifier: 一种机器学习模型，用于将数据项分到预定义的类别中），或者一个连续分类器，让它理解我们的意思。比如，我给你看这五张图片，这五张图片实际上都很好，它们可能包含各种伪影，而不仅仅是JPEG伪影。这正是机器学习擅长的地方，对吧？当涉及到观点时，它会说：“让我知道，你就会知道。你知道吗？当你看到它时，你就会知道。”这正是AI擅长回答的问题类型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but in a way I'm here to invite us all to start thinking about those like like to we can actually train like we can train uh I mean it's it's called a classifier right like or or or a continuous classifier we can train so that it understands what we mean and it's like hey I show you these five images these five images are actually all good and then they can have all sorts of artifact not just JPEG artifact and this is exactly where machine learning journey excels, right? When it's all about opinions and it's like, let me just know and you will know. You know, you know what? You will know when you see it. That's precisely the type of question that AI is amazing at.</p>
</details>