---
area: tech-insights
category: technology
companies_orgs:
- AWS
- Hugging Face
- Ollama
date: '2025-12-06'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Attention Is All You Need
- three blue one brown
people:
- Suman Debnath
- Simon
products_models:
- PaLI
- Strands Agent
- Bedrock
- Claude Sonnet 3.7
- Claude Sonnet 4
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=hwCmfThIiS4
speaker: AI Engineer
status: evergreen
summary: 本次研讨会深入探讨了如何将视觉文档智能与语音响应集成到检索增强生成（RAG）系统中。主讲人Suman Debnath首先介绍了传统多模态RAG的局限性，随后详细阐述了基于视觉的检索模型PaLI的工作原理，包括其图像分块和嵌入生成过程。接着，他展示了如何利用Strands
  Agent这一轻量级代理框架，将PaLI模型与语音功能结合，实现更智能、更自然的问答体验。分享内容涵盖了代码演示、生产案例讨论以及不同RAG架构的适用场景。
tags:
- learning
- llm
- multimodal-rag
- pali-model
- technology
title: VoiceVision RAG：结合视觉文档智能与语音响应的RAG系统
---

### 欢迎与议程概述

好的，大家几乎准时。首先，非常感谢大家抽出时间加入我们。在接下来的一个小时左右，我们将探讨一些我发现非常有趣的内容，尤其是在我开始研究这个基于视觉的检索主题时。我会给大家介绍一些背景，说明我是如何接触到这个领域的。我的主要想法是分享一些关于这种特定检索方法的学习经验，其中包含许多内容。我将分享一篇关于检索的最新研究论文，它涉及基于视觉的检索，并且我还想将其与**代理**（Agentic Application: 指能够自主感知环境、规划行动并执行任务的软件系统）结合起来。如今，我们几乎离不开代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, you're almost on time. Uh firstly, thank you so much for your time uh for joining us. And uh what we're going to do is for next an hour or so is uh we'll try to explore something around which is which I found uh pretty interesting when I started working on this uh uh and I'll tell you some background about that how I end up into this uh on vision based retrieval. uh but the idea of uh that I had was just to share a few of my learning on this particular approach of retrieval and there are bunch of things that we have here. Uh I'm going to share one of the latest research paper around retrieval which is a uh vision based retrieval and also uh I just thought to wrap this around with an agent. Uh without agent we cannot talk about anything these days. So uh right so uh it's funny uh without agent I had this but then uh the organizer said that you know we need to have some agent okay it's not a big deal right so yeah so</p>
</details>

好的，我们将主要关注其科学方面，例如基于视觉的检索是如何工作的，然后我们将转换思路，将其与一个代理结合。这是一个非常简单的任务，我将使用我们最近推出的一个开源框架，大约两周前发布的，名为**Strands Agent**（一个由AWS推出的轻量级开源代理框架，用于构建代理应用），它是一个轻量级框架，用于构建代理应用。我稍后会详细介绍，并且明天我还有一场关于它的会议。但这就是前提，在我们开始之前，有多少人是从事科学领域的，例如有多少人使用过**Transformer模型**（Transformer模型: 一种基于自注意力机制的神经网络架构，广泛应用于自然语言处理）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">all right so u we'll focus mostly on the uh science side of this like how that uh vision based retrieval works and then we will switch gears and rapid around with an agent. I mean that's a very simple task and uh I'm going to use one of the open source uh uh framework that uh uh we launched recently. I think it was two weeks back called strands agent uh which is kind of a a framework lightweight framework to build agentic application. I'll talk about that little later and I have a session on that day for tomorrow. Um but that's the premise and uh before we get started uh how many of you are are from uh science side of things like who how many of you have worked on transformers?</p>
</details>

好的，太棒了。有多少人普遍使用过**RAG**（Retrieval Augmented Generation: 检索增强生成，一种结合信息检索和文本生成的技术）？太棒了。好的。有多少人使用过**AWS**？好的，太好了。这里没有关于AWS的内容。好的，所以最后一个问题是我的经理赞助的。好的，那么我们将分享一个Notebook。你可以克隆那个仓库，里面有很多内容，但我们只会使用其中一部分。好的，我还会分享一些25美元的积分代码，这是我得到的，所以我想你可能会想用它。所以，我们先解决这些后勤问题。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">Okay, perfect. How many of you have worked on rag in general? Fantastic. Okay. And uh how many of you have worked on AWS? Okay, great. So there's nothing about AWS here. Okay. So uh so the last question was sponsored by my manager. Okay. So what so what we are going to do is u uh we are going to uh share one uh notebook. you can just uh clone that repository and uh there is lot more uh there inside that uh but we are just going to use one part of that uh repository okay and I'm going to share few of the I think some $25 credit code uh which I was given so I think uh you may like to use that so uh let's get this logistics uh sorted uh first okay so first thing first Uh</p>
</details>

好的，首先，我们能切换一下屏幕吗？好的。你能花点时间看看这个URL是否有效吗？如果你正在使用笔记本电脑，你可以打开这个URL，或者你可以在手机上拍张照片，稍后再看。它工作了吗？好的，太好了。好的，现在你可以拍张照片，或者稍后完成那个调查。我的意思是，我不喜欢这个，但这是我的经理给的。所以，这可能会问你几个问题。我不知道他们会问什么问题，但你会得到25美元的积分。如果你不想做，就不要做。我会给你25美元的积分。我这里有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">can we just switch the screen please? Yeah. Uh can you just uh uh take a moment and see that if the URL is working? Uh you may if you are on laptop you may like to uh open the URL or you can just take an image uh on your cell. You can have a look later on. Is it working? >> Okay, perfect. Okay. So now this is something uh you can take an image now or you can uh do that survey later on. I mean I don't like this but again this was given by my manager. So so this is just it might ask you few questions. I have no idea what question they will ask, but uh you will get some $25 credit and uh if you don't want to do it, don't do it. I'll give you $25 credit. So, I have it. So,</p>
</details>

好的。是的，我不知道为什么下一张幻灯片是这个，但这是我的……哦，我忘了介绍自己。我在**AWS**（Amazon Web Services: 亚马逊云计算服务）工作，担任首席机器学习倡导者。我在这家公司工作了六个月。我主要关注自然语言、RAG和微调。如果你对我们将要讨论的演讲或任何关于机器学习或生成式AI的问题有疑问，请随时联系我。这不仅仅是关于这次会议，我每次参加这种规模的会议并演讲时，我的收获就是与一些人建立联系，以便在会议结束后可以继续合作。因为就学习而言，我们可以在家学习所有东西，对吧？所以你不必来参加会议。所以，请随时联系。说完这些，我将切换到GitHub仓库。好的。我将带大家浏览一下Notebook。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">okay. So, yeah. And uh I don't know why this slide is next, but so this is my Oh, I I actually forgot to introduce myself. So I work with AWS uh as a principal uh machine learning advocate. I'm with this company for last 6 months. I focus mostly on um natural language and uh rag and fine-tuning. And if you have any questions around the talk that we are going to discuss uh or anything around uh machine learning or generative AI feel free to uh ping me. It's not just about this session but uh my takeaway at whenever I go and speak at any conference at this scale is uh just to make few connections with whom I can work with uh you know after this conference uh because as long as learning is concerned we can learn everything at home right and so you don't have to come to a conference uh so feel free to uh connect so with that I will just switch to uh the GitHub repository. Okay. So, and I'll just uh walk you through the notebook.</p>
</details>

我的想法是不做任何演示文稿，因为首先我很懒，其次它有点复杂。我认为截取图片并嵌入到Notebook中会容易得多。所以，你会找到这个GitHub仓库，里面有很多东西，但我们将重点关注第八部分，第一个是基于代理的语音RAG。我昨天才添加了代理部分，所以当时我并不知道。所以，我们将要做的是，这两个Notebook完全相同。一个没有输出，一个有输出。我发现同时拥有这两个副本很有用，因为如果你是第一次做，你可能想从没有输出的那个开始，然后运行一遍；同时，如果你想看看它是什么，你知道预期输出是什么等等，你可以看另一个。好的，为了今天的研讨会，我将从介绍开始，然后我会来到这里。好的，如果你觉得这不是你感兴趣的，或者不是你在寻找的，那么请随时去其他地方，因为我不想浪费你的时间。但我希望确保如果你在这里待一个小时，你能学到一些新东西，与你目前已知的内容相比。好的，如果你有任何问题，请随时提问。好的，这就是另外一件事。好的，让我展开。这里有点太大了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the my idea is not to have any presentation because uh first uh I'm lazy and second it's little complicated. I thought that taking images and embedded in the notebook is uh much easier. So uh you will find this uh GitHub repository uh and in that there are many things there but what we are going to focus on is if you come to this uh section 8 and come to this first one agentic voice-based rag uh so I just added that agent thing yesterday so that's why so I had no idea of that so uh so what we are going to do is these two notebooks are exactly same. One is without output, one is with output. I find it uh useful to have both copies because if you are doing it for the first time um you may like to start with this don't see the output and run through and at the same time if you want to see what it is you know what is the expected output and all that you can go onto this all right so for the purpose of today's uh uh workshop I will start with an introduction and then I will um come here okay and if you feel that uh this is not something that you are interested in or this is not something that you are looking for you know feel free to uh uh you know uh go to some other place because I don't want to waste your time uh uh but I want to make sure that if you are here for next 1 hour you learn something new uh with respect to what you already know at this point in time okay and if you have any questions uh feel free to ask so that's that's the other thing okay let me just expand And this is little too big uh here. So</p>
</details>

### 传统多模态RAG方法及其局限性

好的。我注意到你们大多数人都了解RAG。但我们将简要讨论**多模态RAG**（Multimodal RAG: 能够处理和生成多种模态（如文本、图像）内容的RAG系统），只是为了设定前提，然后我们将深入探讨基于视觉的检索。好的。如果你考虑多模态RAG，我们本质上所做的是，这绝不是唯一的架构。这只是其中一种架构。你可以通过许多不同的方式实现多模态RAG，但总的来说，这就是我们一直在做并且今天仍在做的事情。你获取数据，这些数据将包含图像、文本和表格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh okay. So I noticed that most of you are aware of rag. Uh but we are going to talk about uh multimodal rack for a moment. Uh just to set the premise and then we will uh get into the vision based retrieval. Okay. So if you think about uh multimodal rag uh what we essentially do is and this is by no mean is the only architecture. This is just one of the architecture. There are many different ways that you can do multimodal rack but in general this is what uh we have been doing and still today we do. You take a data and that data will contain images, text and uh tables.</p>
</details>

我们做的第一件事是使用某个框架，或者说，这有那么糟糕吗？好的，谢谢。所以我们可以使用我们选择的任何框架，或者你可以编写自己的自定义脚本，或者你可以使用任何托管服务，比如基于**OCR**（Optical Character Recognition: 光学字符识别，将图像中的文本转换为机器可编辑文本的技术）的技术。其思想是，你将图像、表格和文本分别提取出来。你可以有一些元数据，通过哈希来告诉你这张图片来自哪一页等等。但本质上，你将这三者分开。然后你可以使用一个**多模态嵌入模型**（Multimodal Embedding Model: 能够将多种模态数据（如图像、文本、表格）映射到同一个向量空间的模型），这个多模态嵌入模型可以接受这三种实体中的任何一种，因为它是多模态的。它可以接受这三者中的任何一种，当我说多模态时，你可以将其视为输入可以是多模态的。好的。然后它会为图像生成一些向量，它会为表格、文本等生成一些向量。然后你进入**数据库**（Vector Database: 一种专门用于存储、管理和检索高维向量数据的数据库），任何向量数据库，并存储所有这些嵌入。所以你在这里本质上存储的是文本、表格和图像的实际嵌入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first thing that we do is we use some framework or is that so bad or okay thank you. So so we can use any framework of our choice or you can write your own custom script or you can use any managed service like text OCR based technique. The idea is you extract the images, tables and uh uh text out you know separately. You can have some metadata uh to make an uh hash which tells you that this image is coming from which page and all that. But essentially you divide all these three separately. Then you can use one multimodal embedding model and this multimodal embedding model can take any of these three entities because it's multimodal. It can take any of these three and when I say multimodal you can think of it like input can be multimodal. Okay. And then it will generate some vectors for images. it will generate some vectors, tables, text and all that. Then you go to the database any vector database and store all these embeddings. So what you are essentially storing here are the actual embeddings of text, tables and images.</p>
</details>

然后是检索部分。当你提出一个问题，任何原始问题，比如原始文本，它会通过相同的嵌入模型。然后它会首先在这里搜索。它会得到一些相关的块，这些块可以是图像、文本或表格，然后你将这些块与你的文本一起使用一个**多模态大型语言模型**（Multimodal LLM: 能够处理和生成多种模态（如文本、图像）内容的LLM）。为什么是多模态？因为你相关的块可以是图像、文本或表格，对吧？然后你得到一个答案。所以这是一种方法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then comes the retrieval part. When you ask a question any raw question like raw text, it goes through the same embedding model. Then it is first searched here. It will get some relevant chunk which could be again image, text or table and then you take those chunks along with your text and use a multimodal LLM. Why multimodal? Because your relevant chunk can be images, text or table, right? And then you get an answer. So this is one approach.</p>
</details>

第二种方法是做同样的事情，这部分是通用的。之后你使用一个模型，它会分别生成所有这些的摘要。所以它会使用……你可以把它想象成图像的摘要就是**图像字幕生成**（Image Captioning: 自动为图像生成描述性文本的技术），对吧。它会生成这张图像的摘要、表格的摘要、文本的摘要。现在你拥有的只是摘要。这意味着它都是文本。所以现在你可以使用任何基于文本的嵌入模型来生成摘要的嵌入。然后你将这些嵌入存储在这里。所以你在这里存储的只是摘要的嵌入，而不是实际数据的嵌入。对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second approach is you do the same thing like this part is common. After that you used a model which will just generate a summary of all this separately. So it will use uh you can think of it like a summary of an image is nothing but image captioning right. It will generate an summary of this image summary of the table summary of the text. Now all you have is the summary. That means it's all text. So now you can use any text based embedding model to generate the embedding of the summary. And then you store this embeddings here. So what you are storing here are only the embeddings of the summary not the actual data. Right?</p>
</details>

然后当问题出现时，我们现在讨论的是第二种选择。当问题出现时，我们对数据库进行**语义搜索**（Semantic Search: 基于词语含义而非关键词匹配进行信息检索的技术），我们得到的块或摘要。现在这个摘要可以是图像、表格或文本的摘要。我们不知道它是什么。但无论我们得到什么，它们都是文本格式的。所以这就是为什么我们可以使用通用的基于文本的LLM来生成输出。好的。所以这是第二种选择。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then when the question comes now we are talking about the option number two. When the question comes we do a semantic search with the database and what we get as a chunk or some summary. Now that summary could be a summary of an image, table or text. We don't know whatever it is. But whatever we get both of them are of text format. So that's why we can use a general textbased LLM to generate the output. Okay. So that's uh option number two.</p>
</details>

第三种选择与第二种选择完全相同，只是在这里存储摘要时略有不同。你也可以这样想。你这里有一个哈希。比如说一个字典，它说图像一的摘要是这个，图像二的摘要是这个，表格一的摘要是这个。你创建一个哈希文件或你选择的任何数据结构，以便你以后可以从某个摘要返回，并找出这是哪个实体的摘要。好的，但你只存储摘要，就像之前一样。但与第二种选择的区别在于，当你提出问题时，你会得到一些相关的块，它是一个摘要。然后你回到那个哈希，找出实际数据，而不是摘要，而是映射到那些摘要的实际数据，然后你获取这些实际数据，然后将其传递到这里。所以你在这里使用摘要只是为了减少搜索空间，仅用于语义搜索。当你得到相关的块时，你不需要关心那个摘要。你只需从那个哈希中获取原始数据，然后你获取这些相关的块和你的问题，由于相关的块可以是文本、图像或表格，你需要一个多模态LLM。好的，然后你生成答案。你明白了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The option number three is exactly same as option number two. Uh with a slight change here when you store the summary you also think of it like this. You have a hash here. Let's say a dictionary which says that u this image number one uh summary is this image number two summary is this table number one summary is this you create a hash file or hash any data structure of your choice so that you can you know come back later on from a certain summary and you can figure out this is summary of what entity okay but you store only the summary just like before but the difference here with respect to option Number two is when you ask a question you get some relevant chunk which is a summary. Then you go back to that hash and find out the actual data not the summary the actual data which is mapped against those summary and then you take those actual data and then pass it on here. So what you're doing is summary you are using here just to reduce the search space just for semantic search. When you get that relevant chunks you don't care about that summary. You just take the original data from that hash and then you take those relevant chunks and your question and since relevant chunk can be again text image or um table you need a multimodal LLM okay and you generate the answer are you with yeah</p>
</details>

假设你有一个表格，但这个表格是一个图像。在这种情况下你会选择哪一个？是的，这是一个好问题。所以问题是，如果你有一个作为图像的表格，对吧。所以现在你所说的一切都在这个层面。所以你不需要，这完全取决于你如何区分这三个实体。所以假设你使用基于OCR的技术，并且它将一个表格识别为图像。那么它将被视为一个图像，因为到目前为止，模型并不知道这三者从何而来，因为它们是这个特定管道的先决条件。好的。所以你明白这三种方法了吗？是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> um let's say you have a table but the table is an image >> which one would you prefer to use in that case >> yeah so that's a good question so the question is If you have a table which is an image right. So now it's all whatever you are saying is all at this level. So you don't you it's all up to you how you segregate these three entities. So let's say you use an OCR based uh uh technique and let's say it it's identified a table as an image. So it will be treated as an image because the model till this point the model has no idea from where these three are coming because these are like prerequisites for this particular pipeline. Okay. So are you with me with all these three approach? Yes. Yeah.</p>
</details>

这个。哦，好的。所以这些只是模型。它没有共鸣。这就是我现在理解的，但是。是的，是的，是的，没错。所以它可能是任何。所以这里我们有一个多模态嵌入模型，对吧。这里实际上首先你需要一个模型来生成摘要，然后你可以把它想象成另一个模型来生成嵌入。所以，它只是一个图标，但把它想象成有两件事按顺序发生。好的，到目前为止你明白了吗？是的。好的，那么当你有多模态数据时，你看到这里有什么问题吗？本身没有问题，但在某些情况下这可能不起作用。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> This one. >> Oh okay. So these are nothing but uh uh models basically. >> It it doesn't resonate. It's what I understand now but >> yeah yeah yeah right that's correct yes so it could be this is any so here we have a multimodal embedding model right here it's actually first you need a model which will generate the summary then you can think of it like another model which will generate the embeddings so uh it's just a one icon but think of it like there are two things happening in sequence okay are you with me so far yes okay so do you see any problem in this when you have a multimodal data there's no problem as such buth there are few scenarios when this may not work okay so</p>
</details>

### 传统方法的局限性与基于视觉检索的引入

例如，就像你提到的，我们见过一些文档或数据，其中PDF是使用图像创建的。所以基本上你可以这样想，比如说我们在高速公路上通过的收费站，所有这些都是图像，对吧，他们只是拍摄我们的车牌等等。类似地，你可以想到任何政府机构，那里的表格只是，他们只是不断地拍摄图像，然后所有这些图像都被转换成PDF。所以在这种情况下，这些提取图像、表格和文本的技术并非总是能很好地工作。这并不是说它永远不起作用。这完全取决于你的数据与你正在实施的技术如何交互。好的。所以现在我们要讨论的下一个技术是使用基于视觉的检索模型，我们将看到为什么我们使用这个，但前提是这样的。如果你使用，如果你的数据与这三种选项中的任何一种都能很好地配合，你就直接使用它。我们接下来一个小时要讨论的内容与你无关，但你知道，我们要讨论的是第四种选择，这是一种更智能的技术，它基于**基于视觉的检索模型**（Vision-Based Retrieval Model: 专注于从图像或视觉内容中检索信息的模型）来执行检索。你不需要首先提取所有这三个实体，因为你可以这样想。当你拥有数据，并且你首先将这三件事分开时，这就像你有一个家庭，你让你的孩子去某个地方，你去某个地方，你的伴侣去其他地方。这是一件好事，但是，你知道，如果他们都分开，你期望其他人识别出他们都是一个家庭的一部分，那对那个外人来说是一项任务，对吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">scenarios like like what you mentioned uh there are few documents or data which we have seen where the PDF was created using images so basically you can think of like this um let's say uh uh toll that we uh cross in a highway all are images right they just take the images of our number plate and all that. Uh similarly you can think of uh any government organization where forms are just uh they they just keep on uh taking images and later on all those images are converted into a PDF. So in that case not always uh these techniques of extracting images, tables and text works nicely. It's not like uh it never works. It all about how your data behaves with your technique that you are implementing. Okay. So now the next technique that we are going to discuss today is using a vision- based uh retrieval model and we will see that why we are using this but the premise is this. If you use if if if your data with your data any of these uh three options works you just go with this what we're going to discuss in next one hour you it's not relevant for you but this you know what we are going to discuss is an option number four which is uh a smarter technique which is based on a vision based model to uh perform the retrieval. You don't have to extract all these three entity in the first place because think of it like this. The moment you have your data and you first in the first place you segregate these three things. It's just like you have a family you just uh you know let your kid go somewhere you go somewhere and you know your partner goes somewhere else. It's a good thing but uh you know uh if all of them goes you know separate and you expect somebody else to identify that they all are part of one family it's a it's a task right so for that external person</p>
</details>

所以，这就是我们要解决的问题，我们能否提出一种不需要做所有这些的技术。好的，在我们继续之前，我想你有一个问题。是的。我想你已经回答了我的问题，因为你正在解释扫描所有PDF的情况，它不会完全奏效，我有点困惑为什么这些方法不起作用。是的。但后来我想你正在走向我们需要建立关系的概念。没错。绝对如此。是的。所以我想我再给你一个例子。如果你去宜家，你在宜家买东西。如果你看过宜家的说明书，你知道我们，我个人从没看过那些说明书，但当我读那篇研究论文时，他们说参考那个，因为我们通常会去YouTube搜索说明步骤等等，对吧。但如果你看宜家的说明书，他们只有表情符号般的人，他们只是在组装东西，没有文字，什么都没有。所以除非你对它有视觉理解，否则你不会知道他们在说什么。好的。所以有一些数据集，我将向你展示一些数据集，其中图像中嵌入了一些文本，还有一些只是图像，它们没有任何文本。所以你需要一些模型或一些技术来帮助我们理解数据的语义。好的。那么让我们看看如何解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh so that is what we are going to solve that can we can we come up with a technique where we don't do all this okay so before we go uh I think you have a question yeah >> yeah I think you kind of answered my question because you were explaining the case about scanning all the PDFs >> and it wouldn't quite work and I was a little bit confused as to why these approaches wouldn't work. >> Yeah. >> But then I think you're going towards the notion that we need to establish relationships between >> Exactly. >> Absolutely. Yeah. So I think I'll give you one more uh one more uh example. Uh if you go to IKEA, you buy something from IKEA. If you have seen the IKEA uh in uh you know instructions you know we don't I personally never looked into those instruction but while I was reading that research paper they said that refer to that uh because we generally go to YouTube and search what is the instruction steps and all that right but if you look at the IKEA instruction set they just have emoji kind of a human uh and they are just assembling something there is no text there there's nothing there so unless or until you have a visual understanding of what it you will not have any idea what they're talking about. Okay. So there are some data sets and I'll show you a few of the data sets where the uh there are some text embedded within the image and there are just an image they don't have any text. So you need some model or some uh technique which can help us to understand uh what is the semantics of the data. Okay. So let's see how we are going to solve this.</p>
</details>

### PaLI模型：基于视觉的检索

所以这又是，文字可能很小，你可以不用管它。好的，你可以在笔记本电脑上打开它，或者我会尽力解释。所以这是我们讨论的传统技术，对吧，你首先将这三个实体分开，但这不是很有帮助，因为如果你看，你知道，想想看，假设你得到一本书，你被要求回答一个特定的问题，比如说我给你这本书，顺便说一句，这是一本来自Simon的精彩书籍，你听说过这本书吗？是的，如果你刚开始学习机器学习、深度学习，你知道，你读这本书。这是一本非常棒的书。这是一本最近出版的书，Simon教授非常平易近人。这是一本非常棒的书。所以假设我给你这本书，如果我问你一些问题，假设你不知道这个特定的主题，你不会去扫描整本书。你会怎么做呢？你会首先尝试找到这本书的结构。也许你会找到索引在哪里，附录在哪里等等，然后你会尝试找出这本书的哪个章节可以回答这个问题，然后你会去那个特定的章节，然后阅读那些章节。对吧？所以这就是人类会做的事情，这正是**PaLI**（Pathways Language and Image model: 一种基于视觉的检索模型）的理念。好的。所以当你得到一个问题时，你首先会扫描附录等等，然后你会找出你的问题可以在哪个部分得到回答，然后你会收集所有相关的块或相关信息，然后最终你会给出一个回应。对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is uh again the text might be small uh you can just leave that okay you can open it in your laptop uh or I'll try to explain it as much as I can. So this is the traditional technique that we discussed right you first place you divide all these three entities uh separately uh but this is not very helpful because if you look uh you know think about it let's say you were given a book and uh you were asked to answer a particular question let's say I give you this book by the way this is a fantastic book from Simon have you heard of this book yeah if you are getting started with machine learning uh deep learning uh you know you and uh read this book. This is a really fantastic book. It's a recently published book and professor Simon is very reachable. It's it's uh it's a fantastic book. So let's say if I give you this book and if I ask you some question and let's say you are not aware of this particular topic, you will not uh go and scan the entire book. What you will do is you will try to first find the structure of the book. Maybe you will find the index where is the index, where is the appendex and all that and then you will try to uh figure out which chapter this book might uh this question uh can be answered from and then you will go to that specific chapter and then read through those chapters. Right? So that is what a human will do and that is exactly the philosophy of uh calling. Okay. So when you get a question what you do is first you will first scan through the appendix and all that and then you will figure out where exactly uh uh the portion where your question can be answered and then you will accumulate all those relevant chunks or relevant information and then uh finally you will come up with a response. Right? So this is where uh or rather this was the motivation of this vision-based retrieval model called pali. Have you heard of this model call pali? Yeah. Okay. Yeah. A few of you. So call pali was introduced I think in uh July 2024 just less than a year back. Uh and the motivation is we will treat every page as an image. So assume that you have a PDF document of let's say 100 pages. Your data set is not one PDF but 100 images. Okay. There is no concept of retrieving u images, text and tables from there. So how it works?</p>
</details>

所以，这就是**PaLI**（Pathways Language and Image model: 一种基于视觉的检索模型）的动机。你们听说过PaLI模型吗？是的。好的。是的，有几位。PaLI大约在不到一年前推出。其动机是我们将把每一页都视为一个图像。所以假设你有一个100页的PDF文档。你的数据集不是一个PDF，而是100张图像。好的。这里没有从图像、文本和表格中检索的概念。那么它是如何工作的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it first creates patches of every page. So now let's consider one page. One page is nothing but one image. And the same will apply on all the pages that you have in your document. The first thing that it will do is it will create some patches. Uh in the paper I think it was um the model was trained with uh 32 patches like 32 + 32 here. How many patches we have? We have 1 2 3 4 5 uh 15 patches. Right?</p>
</details>

它首先为每一页创建**分块**（Patches: 将图像分割成更小的、固定大小的区域）。所以现在我们考虑一页。一页就是一张图像。这同样适用于你文档中的所有页面。它做的第一件事是创建一些分块。在论文中，我想模型是用32个分块训练的，比如这里是32+32。我们有多少个分块？我们有1、2、3、4、5，总共15个分块。对吧？现在我们要做的是，一旦你有了这些分块，你将使用这个PaLI模型嵌入模型，它将为每个分块生成一个向量。好的。那么在这个文档中，我们将有多少个向量？15个。所以现在如果我的文档有10页，我总共会有多少个向量？150个。好的。所以现在我们要看中间部分，它是如何生成嵌入的，然后在最后一部分，我们将看到它是如何进行检索的，然后我们将进入代码。好的。好的。所以在我们进入那个嵌入过程之前，让我们先绕道看看基于视觉的语言模型。你们有人用过基于视觉的语言模型吗？好的。好的。少数人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now what we do is after that once you have those patches you will use this call model embedding model and it will generate one vector per patch. Okay. So in this document how many vectors we will have? >> 15. So now if I if my document is having 10 pages how many vectors I will have in total. >> 150. Okay. So now what we going to do is we are going to see this middle part how it generates the embedding and then at later and in last section we will see that how it does the retrieval and then we will go to the code. Okay. Okay. So before we get into that um uh this embedding process let's take a detour of vision based language model. Uh have you worked on a vision based language model? Any of you? Okay. Okay. Few of you. So ultimately if you think about it um we had uh language models uh I'm not talking about uh uh large language model but text based models uh since we had transformer based architecture right and then at that time we also had uh models which can work pretty well with images which are based on CNN's</p>
</details>

### 基于视觉的语言模型与对比学习

所以最终如果你仔细想想，我们有语言模型，我不是指大型语言模型，而是基于文本的模型，自从我们有了基于**Transformer**（Transformer模型: 一种基于自注意力机制的神经网络架构，广泛应用于自然语言处理）的架构以来，对吧。当时我们也有一些模型，它们可以很好地处理图像，这些模型基于**CNNs**（Convolutional Neural Networks: 卷积神经网络，一种常用于图像处理的深度学习模型）。现在研究人员想到的是，既然我们有了语言模型，为什么不利用它来处理视觉呢？它可以是图像，或者视频也只是图像，但带有时间戳，对吧，你可以把它看作是另一个维度。然后人们所做的是，他们采用了一些基于视觉的模型，然后又采用了一些基于文本的模型，两者是分开的，对吧。我们现在谈论的是训练之前的情况，就像这两个模型是完全分开的，它们都有，你知道，它们基本上处于不同的空间，对吧。其思想是，最终目标是建立一个模型，当你发送一张狗的图像时，你将得到的向量，以及当你发送一段关于狗的文本时，你将得到的向量，这两个向量最终会非常接近。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now What researchers thought was uh now that we have a language model why can't we just uh make use of that to work with vision it could be images or videos are nothing but uh images but but with a time stamp right another dimension you can think of it uh and then what people did was they took some vision based model and then they took some uh text based model they both are separate right At this point what we're talking about is uh before the training right like the these two models are completely separate they all have you know they they are in different space basically right and the idea is at the end of the day come up with a model where if you send an image of a dog the vector that you will get and if you send a text about dog the vector that you will get at the end those two vectors will be very close to each other.</p>
</details>

最初它们不会很接近，因为当我说“一只狗坐在田野里”时，如果我使用任何文本空间模型，它会生成一个向量，为了简单起见，假设向量维度是10。所以它会生成一个包含10个数字的数组。同样，当你传递一张狗的图像时，它会生成一个包含10个数字的最终向量。假设嵌入向量大小是10。现在，文本的这10个数字和图像的这10个数字会在空间中的任何位置，因为在训练之前它们没有任何关联。现在发生的是，在训练时，我们采集了大量的正样本，其中文本与图像相符，也有大量的负样本，其中有图像但文本是随机的。其思想是，我们使用的损失函数是，如果它们相似，我们希望确保损失较小，但如果它们是正交的或非常分离的，我们会说损失很高。在这个损失过程中，在这个训练过程中，我们进行优化，最终我们看到，当你发送图像或文本时，最终得到的嵌入向量彼此非常接近。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Initially it will not be close because when when I say a dog is sitting on a field and if I use any text space model it will generate a vector and for the sake of simplicity simplicity let's assume the vector dimension is 10. So it will generate a array of 10 numbers. Similarly when you pass an image of a dog it will generate an im vector final vector with 10 numbers. Let's say the embedding vector size is 10. Now those 10 numbers and this 10 numbers for the text they will be anywhere in the space because they don't have any correlation at the before uh the training. Now what happens is at the time of training we take lot of samples positive samples where the text is there uh text is there which replicates the image and there are lot of uh negative samples where image is there but text is something random and the idea is the loss function that we use is if they are similar we want to make sure that the loss is less but if they are orthogonal or very separate we will say that Okay, the loss is high and during this loss you know this training process we kind of optimize and at the end we we see that when you send an image or a text the embedding that we get at the end are very close to each other. Okay.</p>
</details>

所以我们不会深入探讨基于视觉的模型，但有一种叫做**对比学习**（Contrastive Learning: 一种通过比较相似和不相似样本来学习数据表示的机器学习方法）的东西，如果你发送一张图像和一个相关的正标签，如果向量非常稀疏，比如彼此相距很远，那么损失就会非常高，因为我们希望这两个向量彼此接近，对吧。所以通过这种方式，在反向传播过程中，我们相应地更新权重。所以这就是其中一个原因，如果你仔细想想，你可能在语言模型中看到过，或者当你使用任何基础模型时，他们总是说你的**提示**（Prompt: 给AI模型的输入指令或问题）应该关注你想要什么，而不是你不想要什么。你见过这个吗？如果你从事**提示工程**（Prompt Engineering: 设计和优化给AI模型的输入提示以获得期望输出的技术），为什么他们会这么说，想想看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we are not going to deep dive into u vision based model but there is something called contrastive learning where if you send an image and a relevant uh positive tag and if the vectors are very uh very sparse like very uh uh very much apart from each other then the loss will be very high because we want these two vectors to be close right. So that way uh during the uh back uh uh back propagation we update the weights accordingly. So this is one of the reason if you think about it uh you might have seen in language models or when you use any uh let's say any um foundational model they say that always your prompt should be uh about what you want not about what you don't want. Have you seen this? If you are into prompt engineering why they say this just think about it.</p>
</details>

假设我给你一个类比，对吧，如果你和你的妻子出去吃饭，如果你问你的妻子想吃什么，她会说我不喜欢这个，我不喜欢那个，但那不是我的问题，我的问题是你想要什么，这总是很难回答，对吧，人们会说，好的，你想吃这个吗？不，我不喜欢这个。但当你问，好的，你告诉我你喜欢什么，这很难。所以这就是为什么当你给出一个提示说“我想要一只狗坐在椅子上”，这是一个非常好的提示。但如果你说“狗不应该坐在地板上”，它可能会生成任何图像，因为你没有说它应该坐在椅子上。它可能坐在桌子上或其他地方，对吧？所以这就是我们总是说提示应该非常积极，你想要什么，而不是消极的原因，因为数据集没有那么多的负样本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say if I say uh uh okay let me give you an uh analogy right if you are going for a dinner right with your wife and if you ask your wife what would you like to have she will say that I I I I let's say uh I don't like this I don't like that but that was not my question my question was what you want that is always difficult to uh answer right people will say that uh Okay, would you like to have this? No, I don't like this. But when you ask that, okay, you tell me what you like, it's very hard. So that's why when you give a prompt that u I want a dog sitting on this chair, it's a very nice prompt. But if you say that dog should not sit on the floor, it can generate any image because you are not saying that it should sit on a chair. It might be sitting on a desk or somewhere else. Right? So that is the reason we always say that the prompt should be uh very much positive what you want not the negative because uh you know data set doesn't have that much of negative samples.</p>
</details>

### PaLI的嵌入与检索过程

现在让我们回到PaLI的工作原理。你给出一张图像。所以现在这张图像你可以把它想象成一个分块。好的，它通过基于视觉的**编码器**（Encoder: 神经网络的一部分，负责将输入数据转换为固定长度的向量表示），它会生成一个嵌入，然后我们有一个**线性投影**（Linear Projection: 一种将数据从一个维度空间映射到另一个维度空间的线性变换），我们有线性投影的原因是，最终当你提出问题时，它也会生成一些向量，我们希望确保这些向量是兼容的，它们的大小相同，这就是为什么我们添加了一个新的投影层。你可以简单地将其视为一个全连接层，最终你将拥有一个标准的**Transformer**（Transformer模型: 一种基于自注意力机制的神经网络架构，广泛应用于自然语言处理），然后你将得到输出令牌。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let's come back to call paraly how it works. So you give an image. So now this image is you can think of it like one of the patch okay it goes through uh the uh vision based encoder and it will generate an uh embedding and then we have a linear projection and the reason that we have the linear projection is because at the end of the day uh when you ask a question that will also be generating some vector we want to make sure that these vectors are compatible to each other they are of same size and that's why we have added added a new projection layer. You can simply think of it as a fully connected layer and ultimately you will have a standard transformer and then you will get the output token. Okay. So</p>
</details>

现在，如果你考虑PaLI，当你给出一张图像时，它会有，比如说在这种情况下有15个分块，就把它想象成这个分块。好的，这个分块会通过这个，它会生成一个向量，这将是第一个分块的最终表示。同样，当你给出整个图像时，你不会在批处理中给出单个分块，你会给出一张完整的图像，或者说文档的第一页，这个模型会做所有这些分块，最终它会生成一个嵌入向量。现在，在训练之后，如果你看这里，在这种情况下，这是灰色的，因为我们现在谈论的是训练之后。一旦模型训练完成，你将创建文档的嵌入。所以当你创建嵌入时，这里没有问题，对吧。所以它只会使用这条路径。现在，一旦这些嵌入完成，就像你得到整个文档的所有这些最终向量一样，在**查询时**（Query Time: 指用户向系统提交查询请求的时刻），你将只使用基于文本的查询。所以PaLI并没有说你可以像在ChatGPT或任何基于GPT的模型中那样，上传一张图像进行查询。我们现在很懒，甚至都不问问题，对吧，我们只是上传图像，然后模型就生成了一些东西。所以这里的问题应该始终是文本，这是这个模型的先决条件，然后它通过相同的模型，最终给你一个响应。现在这个响应，这个向量，你将对你使用那些图像分块存储在向量数据库中的向量进行语义搜索。到目前为止你明白了吗？是的。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">now if you think about me just scroll down. Yeah. So if you think about call pal when you give an image it will have let's say in this case there are 15 uh patches just think of this patch okay this patch will go through this it will generate an uh vector and this will be the final representation of the first patch. Similarly when you give the whole image you will not give the uh you know single patch uh in the batch you will give give one full image or let's say page number one of the document this model will do all that patching and it will finally generate one embedding vector. Now at the time of and if you if you see here in this case this is grayed out because now we are talking about after training once that model is trained after training you will create the embeddings of your document. So while you are creating the embeddings there is no question here right. So it will just use this path. Now once those embeddings are done like once you get all these final vectors for your entire document in the query time you will just use your text based query. So call pal doesn't say that you can query with your as an image like in chat GPT or any GPD based model you just upload an image. We are so lazy we don't even ask the question these days right we just upload the image and you know model just generates something. So here the question should be always in text that's the prerequisite for this model and then this goes through the same uh model and then it finally gives you an response. Now this response this vector you will do a semantic search with the vectors that you have stored in your vector database using those uh image patches with me so far? Yes. Okay.</p>
</details>

好的。所以如果你仔细想想，无论是查询还是嵌入，都需要一定量的**预处理**（Pre-processing: 在数据输入模型之前对其进行清洗、转换和标准化的过程），因为你的图像大小可能不同，对吧。所以假设你有一个PDF文档，你用来将其转换为图像的工具创建了一个800x800的图像，但假设其他人使用了另一种技术，图像是50x50的。所以我们需要确保图像是标准大小的，对吧？所以这就是为什么当我们接下来查看代码时，你会看到在实际生成嵌入之前，我们总是会进行预处理。好的。所以让我们进入代码看看。但在此之前，让我们分享，我的意思是，让我们谈谈它是如何生成相似块的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you think about it uh both for query as well as uh your embedding there is a certain amount of uh uh pre-processing that is needed because uh your images can be of different size right so let's say you have an a PDF document u and the tool that you use to convert that into an image uh it created an image of 800 by 800 but let's say somebody else have used another technique and the image was of 50 + 50. So we need to make sure that the images are of standard size, right? So that's why when we look into the code next, you will see that always before it actually generates the embedding, there is a pre-processing uh that we do. Okay. So let's uh go to the code and see that. But before that let's uh let's share I mean let's talk about how it generates uh the similar chunks.</p>
</details>

所以这是PaLI最重要的部分。好的。现在想象一下你的页面，现在只考虑文档的第一页，你使用的分块大小是2x2，也就是总共四个分块。好的。现在假设这是第一页，这是第一个分块的嵌入。这是第二个分块的嵌入。这是第三个分块的嵌入。这是第四个分块的嵌入。好的。你问了一些问题。比如说，“什么是AI？”为了简单起见，“什么是AI？”你已经通过分词器，它生成了三个嵌入向量，对吧，基本上是三个令牌。所以现在我们要做的是，我们对每个向量和所有分块的每个向量进行**点积**（Dot Product: 两个向量的乘积，用于衡量它们之间的相似度）。好的。然后对于每一行，我们尝试找到最大值。这个数字代表什么？这个89代表，89代表你问题的第一部分与图像的第二个分块具有最大的相似度。对吧？同样，如果这个是97，那意味着你问题的第二部分与图像的第三个分块具有最大的相似度。对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the most important part of call pali. Okay. Now imagine that your page now just consider page number one of your document and the page and the patch size that you use is let's say 2 +2 that is total four patches. Okay. Now let's say this is page number one and this is the embedding of your f uh first patch. This is the embedding of the second patch. This is the embedding of third patch. This is the embedding of the fourth patch. Okay. And you ask some question. Let's say uh what is AI? Just for the sake of simplicity what is AI? And you have used through uh it went through the tokenizer and it generated three embedding vectors right three tokens basically. So now what we do is we do a dot product between each vector and each vector of all the patches. Okay. And then for every row we try to find which is the maximum number. What this number signifies? This 89 signifies 89 signifies that the first part of your question has the maximum similarity with the second patch of the image. Right? Similarly, if this is 97, that means the second part of your question has the maximum similarity with the third patch of your image. Right?</p>
</details>

最后我们所做的是，我们只取每一行的最大值之和，如果比如说这个是2.58，那意味着这个查询对于第一页的得分是2.58。同样，我们会对所有页面进行这个操作，然后在RAG中，当我们在最后进行语义搜索时，我们会说前五个块或前十个块。所以在这个例子中，块就是页面。所以如果我说前五个，那么在这种情况下，它会根据这个得分向我们显示前五个页面。明白了吗？所以这是最重要的事情。这被称为**后期交互**（Late Interaction: 在检索系统中，指查询和文档的表示在嵌入阶段独立生成，然后在匹配阶段进行交互计算）。你们听说过后后期交互嵌入之类的吗？我们称之为后期交互的原因是这些令牌嵌入已经存储了。我们已经完成了。它在你的向量数据库中。我们所要做的就是进行点积，然后使用这个指标来生成前五或前三页。好的。到目前为止你明白了吗？是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at the end what we do is we just take the addition I mean we just take a sum the maximum numbers of each rows and if let's say that is 2.58 that means this query has a score of 2.58 for page number one. Similarly we will do it for all the pages and then in rag what we do at the end when we do a semantic search we say top five chunks or top 10 chunks. So in this case chunk is nothing but pages. So if I say top five then in that case it will show us the top five pages based on this score. Getting it. So this is the most important thing. So this is called late interaction. Have you heard of late interaction embeddings all that? And the reason that we say late interaction is because these token embeddings are already stored. We have already done that. It's there in your vector database. All we have to do is we need to just do the dot product and then use this metrics to generate the top five or top three uh pages. Okay. Uh with me so far? Yes.</p>
</details>

好的。现在这个功能并非所有向量数据库都支持。我们将使用一个名为**Qdrant**（Qdrant: 一个开源的向量相似度搜索引擎）的向量数据库。你们听说过吗？但还有其他一些数据库。我没有做足够的研究来确定它支持哪些数据库，但这个最大值计算并非所有数据库都支持。好的，我们有一些针对少数向量数据库的开源贡献。我尝试过OpenSearch，它没有这个功能，但我想有一个扩展可以用来实现这个功能。好的，所以现在我们要进入演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Now this functionality is not supported in all the all the vector databases. We are going to use one of the vector database called quadrant. Have you heard of that? But there are few other databases. I have not done enough research which are the databases that it supports. uh but this u maxim calculation is not supported by all the database okay there are some open source contribution that we have for few of the vector databases I I I I tried with open search u it did not have but I think there is a extension uh which you can use to make this functionality okay so now we are going to get into uh the demo so just like what I said once you have those uh scores like in this case 2.58 uh like this you will have for all the pages in your document and then at the end you can pick the top three or top four pages of your choice. Okay.</p>
</details>

### 代码演示：设置与数据处理

所以就像我说的，一旦你有了这些分数，比如这个例子中的2.58，你文档中的所有页面都会有这样的分数，然后最后你可以选择你喜欢的前三或前四页。好的。所以现在看这个，到目前为止我们还没有谈论代理。好的。因为那是一个非常简单的任务。我们稍后会用一个代理来包装它。好的。所以让我们尝试做这个。好的。这是一张图像，我稍后会再来看这张图像。现在让我把字体调大一点。你能看到吗？是的。好的。你不必阅读所有内容，但你应该对我们正在做什么有一个概念。所以首先我们只是导入一些库。我不知道我导入了什么，但有一些，对吧。所以我想是，PaLI在哪里？是的。所以这就是我们拥有的PaLI模型。好的。这就是Qdrant数据库，这个Qdrant数据库我们将以**Docker容器**（Docker容器: 一种轻量级、可移植、自给自足的软件单元，包含运行应用程序所需的一切）的形式在本地运行。好的。所以如果你打算运行这个，请确保你的笔记本电脑上安装了Docker。好的。我想README文件中有所有信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now see this so far we are not talking about agents. Okay. Because that's a very simple task. Uh we will just wrap this with an agent at later point in time. All right. So let's try to do this. Okay. So this is an uh uh I I'll just come to this uh image later on. So now let me just increase uh the font. Can you see this? Yeah. Okay. You don't have to read all that but just uh you should have an idea what we are doing. So first we are just importing few of the libraries. Uh I have no idea what I have importing but uh there are few right. So I think it's uh where is the call pal? Yeah. So this is the call pali model that we have. Okay. And this is the quadrant database and this quadrant database we are going to run locally in a docker container. Okay. So if you are planning to run this uh make sure that you have docker installed in your uh in your laptop. Okay. I I I think the readme have all the information.</p>
</details>

好的。所以首先我们需要一些数据。所以我使用了一个数据集，基本上它是一本小教科书，如果你看这本教科书，这是一本科学教科书，第13章。所以我们有一些，比如说，这里有趣的一点是，如果你看这张图片，这里没有文字，对吧，所以如果你问任何关于这张图片的问题，并使用传统技术，它可能无法正确回答，就像这张，这也是另一张图片，带有一些文字，你知道，你可以选择任何你喜欢的数据集，但这是我拥有的数据集。好的，请随意使用任何你喜欢的数据集，但为了本次演示的目的，你可能需要从这个URL下载其中一个PDF文件并进行尝试。然后你需要一个**Hugging Face**（Hugging Face: 一个提供机器学习模型、数据集和工具的平台）令牌，因为我们将从Hugging Face下载这个模型，对吧，所以你不应该这样做，对吧，所以这是，你知道，我只是尝试这样做，因为没有创建环境变量文件，但你应该有一个环境变量文件，里面包含你的令牌。好的，所以这是一个令牌，这不是我的令牌。如果你看这个，这只是一个虚拟的，对吧？这不是我的令牌。好的，所以它只是你拥有的Hugging Face令牌。所以这里我们只是加载并登录到我们的Hugging Face账户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Uh so first we need some data. So I have used one data set basically it's a small textbook and if you see this textbook uh this is a science textbook uh chapter number 13. So we have let's say see one of the thing that uh which is interesting here is if you see this image there is no text here right so it's if you ask anything about this image uh and use a traditional technique it might not answer properly uh like this this is also another image along with some text and uh you know you can pick any data set of your choice but uh this is the data set that I have okay and feel free to use any data set of your choice but uh for the purpose of this uh demo you may like to download one of these uh PDF from this URL and play around with this and then you need to have a hugging phase uh uh uh token uh because we are going to download this model from hugging phase right so you should not do this right so this is uh you know I was just trying this because without creating av file but you should have an env file inside that your token should exit exist. Okay, so this is uh a token like this is not my token. If you see this uh this is just a dummy one, right? This is not my token. Okay, so it's but uh this is this is just uh the the hugging face token that you should have. So here we are just loading and logging into our hugging face account.</p>
</details>

接下来我们尝试检查我们是否有CPU、GPU或MPS。在这种情况下，它是一台MacBook，所以我在这里使用MPS作为设备。由于它是一个基于视觉的模型，最好在GPU上运行。它会更快，但你也可以在CPU上运行。没关系。我会告诉你，你知道，如果你在笔记本电脑上使用CPU运行，你应该小心一点。如果是办公笔记本电脑，没人会在意，但如果是你的个人笔记本电脑，请确保**批处理大小**（Batch Size: 在机器学习训练或推理中，一次性处理的样本数量）非常小，否则它会崩溃。事实上，当我第一次运行它时，我没有检查处理时间等等，它就不断崩溃，然后我的笔记本电脑重启了，我甚至没有仔细阅读所有这些，我就提交了IT工单，然后我真的得到了一台新的笔记本电脑。所以，但这是我的错。所以他们认为我的工作需要一台内存更大的笔记本电脑。所以，如果你正在寻找从公司获得新笔记本电脑的技巧。所以这就是那个单元格。好的，你可以尝试一下。我会告诉你需要改变什么才能获得一台新的笔记本电脑。所以只需将批处理大小增加到12。它应该能正常工作。是的。是的。好的。所以这就是我们要使用的模型。它是PaLI 1.3版本。可能还有新版本，但请查看一下。我上个月检查时，它仍然是1.3。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And next we are trying to check whether we have a CPU, GPU or uh MPS. In this case it's a MacBook so I'm just using MPS here uh as a device. Since it's a vision based model it's better to run it on a GPU. It will be faster but you can very well run it on CPU. That's fine. I'll tell you uh you know you should be a little cautious about this if you're running with a within your laptop uh on CPU. uh if it's a office laptop no one cares but if it's your personal laptop make sure that the batch size is very small otherwise it will it will crash in fact I when I first ran this I did not check uh the processing time and all that it just uh went on u you know crashing and it uh rebooted my laptop uh and uh I I did not even read through all this and I ra the IT ticket and I actually got a laptop new laptop uh So but it was my fault here. So they thought that my work my work needs a laptop with more memory. So so if you are finding out tricks to get a new laptop from a company. So this is the cell. So okay uh you can try that. I I'll tell you what you have to change to get a new laptop. So just increase the batch size to batch size to 12. It should work fine. Yeah. Yeah. Okay.</p>
</details>

我有一个模型和一个预处理器。还记得我们讨论过我们首先需要一个预处理器吗？我们将处理我们的数据，然后我们将使用模型来生成嵌入。好的。相同的模型，但有一个预处理器和模型，所有这些都来自Hugging Face，我们正在使用一个缓存目录，以便我们可以在本地目录中加载这个模型，这样每次运行时它就不会从互联网下载。好的，一旦完成，你必须有一个向量数据库。所以如果你安装了Docker，你可以直接复制粘贴，它只是创建了一个带有端口转发的容器，并且在本地创建了一个文件夹作为存储。所以你所有的向量都将存储在你的笔记本电脑本地。仅此而已。如果你点击这个仪表板，你应该能够看到它的UI。如果你来到控制台，抱歉，这里是集合，最初你，因为我已经执行了那个代码，所以我们看到了这个，但你最初应该看不到任何东西，当你运行Notebook时，你会看到集合。那么集合，有多少人了解数据库？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the model that we are going to use. It's a call pali uh version 1.3. There might be our new version but just have a look. I I checked last month it was still 1.3. And I'm having a model and a pre-processor. Remember that we discussed that we need to have a pre-processor first. Uh we will process our data and then we will use the model to generate the embeddings. Okay. the same model but there is a pre-processor and the model and these all are coming from hugging face and we are using a cache directory so that we can load this model locally in our uh local directory uh so that every time you run it doesn't download from the internet okay and once that is done uh you have to have a vector database so if you have a docker installed you can just copy and paste it it is nothing but it just created a a container with a port forwarding and uh there is a folder which gets created locally uh as a storage. So all your vectors will be stored locally in your laptop. That's all. And if you click on this dashboard, you should be able to see uh that uh UI of that. And if you come to console uh sorry um here collection initially you since I have executed that code that's why we see this but you should not see anything here and as you run through the notebook you will see the uh collection here. So collection is how many of you are aware of databases?</p>
</details>

### 代码演示：嵌入生成与存储

好的。好的，很多人，我不知道那是什么，但我只是问了。所以集合基本上你可以把它想象成一个数据库，你将在其中存储所有模式等等。所以我正在创建一个Qdrant客户端，这是我之前导入的，这是本地主机和端口号，我们只是在创建设置，对吧。所以现在我们有一个向量数据库，我们有数据。所以我们也下载了模型。所以现在我们需要做的第二件事是创建集合，对吧，如果你看这个，我们有一个名为“class 10 science”的集合。所以你可以给任何集合命名。这里我们提到了向量大小应该是多少，对吧？所以这是嵌入长度。所以这里是128，在这个代码中，我们本质上做的是，如果集合已经存在，它就不会创建任何新集合，否则它会创建一个新连接。是的，你有一个问题。是的。是的，所以有一个。让我问你这个问题。如果你将嵌入大小从128增加到256，你感觉会怎样？你感觉会怎样？它会如何表现？只是猜测。嗯。好的。好的。让我给你一个例子。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. Okay, many of you I have no idea what what it is but I just asked. So the collection is basically you can think of it like a database and where you will just store all the uh schema and all that. So I'm creating a quadrant client and this is something that I imported earlier and this is the local host and port number this and this just we are just creating the setup right. So now we have a vector database and we have the data. So and we have also uh downloaded the model. So now the second thing that we need to do is we need to create a collection right and if you see this uh we have a collection called u class 10 science. Uh so you can give any collection name. Here we are mentioning what should be the vector size right? So uh this is the uh embedding length. So here it is 128 and in this in this code what we essentially doing is if there is a collection already exists it will not create any new collection or else it will create a new connection. Yeah you have a question. >> Yeah. >> Yeah. So there is a let me ask you this. What do you feel if I increase the embedding size from 128 to 256? What do you feel? H how it would behave? Just a guess. >> Mhm. >> Okay. Okay. Let let me let me give you an example. Okay.</p>
</details>

假设我刚来到这里，我告诉你两件事。我在亚马逊工作，我结婚了。仅此而已。好的。这是你拥有的两个信息。现在如果他问你一些关于我的问题，比如“好的，告诉我有没有人打板球？”你能够给出一些答案吗？不。你会根据这两个信息给出一些答案，但那是随机的。对吧？但现在假设我给你更多信息。我是Suman。我在亚马逊工作。我结婚了。我目前有一个妻子。假设我有一个孩子。好的。还有其他一些事情。所以如果我不断地给你更多关于我的特征，你就会拥有更丰富的信息。所以现在如果他问你一个问题，你更有可能给出更准确的答案。这与此相同，当你增加嵌入长度时，这与块无关，而只是关于你对特定事物拥有多少粒度信息。好的。所以你总是可以用一个数字来嵌入任何实体，一个大小为一的向量，但它不会有太多信息，当你增加长度时，它会更丰富。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's say I I I I have just come here and I mentioned you two things about me. I work for Amazon and I'm married. That's all. Okay. These are the two information that you have. Now if he asks you some question about me that uh okay uh tell me someone plays cricket or not. Will you be able to give some answer? No. You will be giving some answer based on these two information but it will be random. Right? But now let's say if I give you more information. I am Suman. I work for Amazon. I am married. I have one wife as of now. I let's say I have one kid. Okay. And few other things. So if I keep on giving more features about me, you are having a richer uh information about me. So now if he asks you a question it's more likely that you will be able to give a uh you know you are you'll be able to give a more accurate answer. Same with this the moment you increase the embedding length you are it's not about chunk and all that it's just about how much granual information that you are having about a specific thing. Okay. So you can always embed uh any entity with just one number a vector of size one but it will not have much of an information as you increase the length it will it will be more richer. Okay.</p>
</details>

好的。所以回到你的问题，在文档中，我想他们说128是一个不错的数字，但你总是可以使用256，对吧，如果向量数据库也支持，或者嵌入模型。好的。所以，这就是我们创建集合的地方。我们甚至还没有开始创建嵌入等等。看这里，这就是我之前提到Qdrant支持矩阵乘法，那个后期交互的东西，对吧，所以它说我正在设置一些配置，它应该有多向量配置和多向量比较器为最大值。所以最大值就是帮助我们从那个矩阵中获取那三个数字，然后将这三个数字相加，并给出你的查询和每个页面的最终值。所以最终我们想要什么？我们想要根据我们的问题找到相关的页面，对吧？好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So coming back to your question uh in the documentation I think they uh they said that 128 is a good number uh but you can always use 256 right if the vector database also supports that or the embedding model. Okay. So, so this is where we are just creating that collection. We have not even uh started creating the embeddings and all that. And see this here uh this is what u I was referring to when I said quadrant supports that matrix multiplic uh that u uh late interaction thing right so it says I'm setting some configuration that it's it should have multi vector configuration and multi vector comparator as maxim. So maxim is what uh helps us to get those three numbers from that matrix and then add those three numbers and give us the final value of the your query and each page. So that at the end of the day what do we want? We want the relevant pages uh based on our question, right? Okay.</p>
</details>

现在一旦完成，就非常简单了。我必须首先创建嵌入。但在此之前，我需要将我的数据转换为图像。这就是这个函数所做的事情。所以它所做的是，它接收一个目录，你可以有数百个PDF文件，它会遍历所有PDF文件，并为每个页面创建图像。好的。不仅如此，它还会将所有这些添加到名为“all images”的列表中。这只是为了我自己的内部管理，带有一些元数据，比如文档ID、页码和RGB形式的实际图像。它会将其存储在名为“PDF data”的本地目录中。如果你只看前两个条目，你会看到“好的，这是文档零”，也就是说，假设我只有一个PDF。所以所有条目都会有文档ID零、页码零，这是图像，页码一，这是图像。好的。所以这个数据集包含所有内容，到目前为止你明白了吗？是的。好的。太好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now once this is done, it's now pretty simple. I have to uh first create the embedding. But before that, I need to create convert my data into images. And that's what uh this uh this function does. So what it does is it it takes you it takes an uh directory and you can have hundreds of PDF files and it will go through all the PDF files and it will create uh images of each pages. Okay. And not only that, it will also add all of that into an list called all images. And this is just for my own housekeeping with some metadata like document ID, page number and the actual image in the form of RGB. And it will store it in a local directory called PDF data. And if you just see the first two entries, you will see that okay, this is document number zero that is let's say I just have one PDF. So all the entries will have document ID zero, page number zero and this is the image page number one and this is the image. Okay. So this data set contains everything with me so far? Yes. Okay. Great.</p>
</details>

### 代码演示：检索与响应生成

现在我有了这些图像，我可以使用嵌入模型来生成嵌入。这就是我之前让我的笔记本电脑崩溃的地方。我最初使用的批处理大小是10，哦，12。所以它占用了大量的内存，我当时只有16GB内存。所以它实际上崩溃了，但如果你在自己的笔记本电脑上尝试，请确保从2或3开始。所以它基本上意味着你想处理多少张图像。现在我们正在这里生成嵌入，首先我们通过这个PaLI预处理器，它会以标准大小预处理图像，然后我将其传递给PaLI模型，它实际上生成嵌入。所以这将包含我的嵌入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that I have this uh uh images, I can use the embedding model to generate the embedding and and this is where uh you know I just crashed my laptop. I initially used a batch size of 10 uh 12. So it took a lot of memory and I had just I think 16 gig of memory. So it it actually crashed but uh if you're trying in your laptop make sure that you use start with two or three. So it basically means how many images you want to process. And now here we are generating the embeddings and first we are going through this call pal pre-processor which will just uh pre-process the image in a standard uh size and then I'm passing it through the call pali model which actually generates the embedding. So this will have my embeddings.</p>
</details>

一旦我有了所有这些嵌入，我想做的是将它们存储在向量数据库中。这就是我在这里做的事情。我只是将它们插入到我为所有点创建的集合中。每个点只是，你可以把它想象成每个向量。好的。在这种情况下，我只有10页。所以它只会为这10页生成相应数量的嵌入，并将其存储在这里。现在是最后一步，你知道我们如何检索。所以看这个，我只是问了这个问题：“什么是不同的营养级别？”因为这本书里有这个内容，这个问题也需要通过那个嵌入模型，就像图像一样。所以我将通过预处理器和模型来完成这个过程，一旦完成，我将从向量数据库进行语义搜索，这就是我们正在做的。我们只是用我们的查询令牌查询向量数据库，我说限制是五，这个限制五意味着我需要与这个问题相关的排名前五的页面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once I have all those uh embeddings, what I want to do is I want to store it in the vector database. And that is what I'm doing it here. I'm just inserting into the collection that I have created for all the points. Each point is nothing but you can think of it like uh each vectors. Okay. And in this case I have just 10 pages. So it will just generate the amount of number of embeddings for those 10 pages and it will store it here. Now is the final thing you know how we can retrieve. So see this I have just asked this question what are the different uh tropical levels because this is there in the book and this question also need to be uh need to go through that embedding model just like images. So I will do go I'll make that through the pre-processor and the model and once that is done I will do a semantic search from the vector database and that is what we are doing we are just querying uh the vector database with our query token and I'm saying that the limit is five what this limit five means that means I need the top five pages which is relevant to this uh question</p>
</details>

最后你会找到五页，如果你想看看这五页是什么样子，你可以实际可视化。所以这只是一个包装的Python函数，它会获取所有图像，并以图片格式生成图像。好的。事实上，如果你看这张图片，我想这张图片是，我想是的，是的，这里提到了营养级别，它实际上是根据问题和PaLI嵌入识别出来的，对吧，所以这是页面，还有其他页面我们也得到了。现在，检索已经完成，对吧，所以PaLI只谈论检索，它的工作到此结束。好的。如果你仔细想想，关于，抱歉，关于这个，抱歉，我想是在这里，在传统技术中，我们来到了这一点，对吧，我们来到了这一点，抱歉，我们来到了这一点，当我们得到检索到的图像和问题已经存在时。现在我们可以使用任何多模态LLM来生成答案。对吧？但我们在这里跳过了所有内容。对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and at the end you will find some five pages is and if you want to see those five pages how it uh you know how it looks like uh you can actually visualize. So this is just a wrapper python function which will just take all the images and it will just generate u the images in a pictorial format. Okay. And in fact if you see uh the this image I think this was uh this was the image I guess uh yeah so this is where the tropical levels are mentioned it actually identified based on the question and the uh call embeddings right so this is the page and also there are other pages which we got now comes so retrieval is done right so call pal just talks about retrieval it's its job ends here. Okay. And uh if you if you think about it uh with respect to uh sorry with respect to this sorry here I guess in the traditional technique we came to this point right uh we came to this point sorry we came to this point when we got the retrieved images and the question is already there. Now we can use any multimodal LLM to generate the answer. Right? But we have skipped everything here. Right? So</p>
</details>

### 集成代理框架（Strands Agent）

现在当我们使用任何生成模型时，你可以使用你选择的任何生成模型。如果你没有AWS账户，或者如果你有任何其他模型访问权限，你总是可以使用它。但是，假设你没有Bedrock访问权限，所以我们可以使用，你用过本地模型吗？响应可能没那么好，但你可以解决它，对吧。所以这又是一个包装函数，只是为了将所有图像转换为模型期望的格式，因为我们需要一个多模态LLM，对吧，所以我们将从Ollama获取一些多模态LLM，但取决于你使用的模型。模型会要求你以某种格式输入，对吧？所以它需要数据是Base64格式的。这就是这个小函数所做的事情，对吧？然后我们只是说生成，这就是我正在使用的模型，我正在发送查询和图像，仅此而已，对吧。所以看这个，我现在发送的是完整的查询，而不是查询的嵌入，因为Ollama与查询的嵌入无关。那个嵌入只是为了语义搜索，对吧，然后我们得到一些响应。如果你想使用Bedrock，那么你应该有Bedrock访问权限。你们有多少人了解Bedrock？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">now when we when we use any generative model you can use any generative model of your choice. Uh if you don't have any AWS account or if you have any other uh model access you can always use that. uh but let's say uh you don't have bedrock access so we can use have you used just a local model the response may not be that great but you can work it out right so this is again a wrapper function just to uh convert all the images uh into the format that the model expects because we are we need a multimodal LLM right so we will take some multimodal LLM from Olama but depending on what model you're using. The model will ask you to have the input in a certain uh format, right? So it needs the data to be in base 64. That's what this small tiny function does, right? Uh and then we just say generate and this is the model that I'm using and I'm sending the query and the image that's all right. So see this now I'm sending the full query, not the embedding of the query because Olama has nothing to do with that embedding of the query. that embedding was needed just for semantic search right and then uh we get some response if you want to use bedrock then you should have bedrock access how many of you know about bedrock</p>
</details>

好的，太好了，所以它只是AWS上的一项托管服务，通过它你可以访问任何不同种类的模型。Bedrock期望你提供多模态输入的方式有点不同，这就是为什么我们有一些包装函数，它们会根据多模态模型的要求来构建你的提示，对吧，你可以查看这两个函数，它们是我们使用的标准对话API，所以这里没有什么花哨的东西，我不想深入探讨，因为那不是这个问题的目的，但最终你提供图像和查询，并提及模型ID，所以在这个例子中，我使用的是Claude Sonnet 3.7。如果你愿意，你也可以使用Sonnet 4。然后你生成图像，抱歉，最终的响应。好的，到目前为止你明白了吗？好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">okay perfect so it's just a managed service on AWS through which you can access any different I mean different kinds of model and the way that bedrock expects you to give the input uh multimodel input is little different and that's That's why we have some wrapper functions uh which will which will make your prompt you know according to the multimodal uh models requirement right and you can go through these two functions it's standard uh you know uh converse API that we have used so nothing fancy here so I don't want to go there because that is not the purpose of this uh problem but ultimately you give the images and the query and you mention the model ID so in this case I'm using set uh claude sonnet 3.7. You can very well use sonet 4 if you would like to. And you generate the image uh sorry the final response. Okay with me so far? Okay.</p>
</details>

现在是代理部分。我们如何使其具有代理功能？这非常简单，对吧？你不需要经历所有这些事情，因为我们所做的最终目标是，当有人提出问题时，我们希望代理能够检索出入围的图像并将其提供给我。仅此而已，对吧？所以我们已经看到了如何筛选这些图像。对吧？我们要做的是，我稍后会再看那个。是的，我们要做的是，我们将创建一个名为`retrieve_from_quadrant`的函数，它只会接收你的查询，如果你看它的返回值，是匹配的图像路径，这就是我们想要的，没有别的，对吧。这个函数中的代码与之前多个单元格中运行的代码完全相同，它只是做同样的事情。现在为了使其具有代理功能，我使用了名为Strands的框架。你们听说过Strands吗？好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now comes the agent thing. How we can make this agentic? So it's very simple, right? You don't have to go through all these things because what we have done is ultimately what we want when somebody is asking a question we want an agent to to retrieve the shortlisted images and give it to me. That's all. Right? So we have seen how to shortlist those images. Right? What we are going to do is uh here I'll just go through that later. Yeah, what we going to do is we are going to create a function called retrieve from quadrant which will just take your query and if you see the uh uh return for this are the matched image paths that is what we want nothing else right and the code here in this function are the exact same code which has gone through in multiple cells you know previously it just it does the same thing and now to make it agentic I have used a framework called strands. Have you heard of strands? Right. Okay.</p>
</details>

所以Strands是一个新的代理框架。让我给大家看看。它是strandsagent.com。这是一个由AWS推出的SDK。我在发布时参与了工作。也有一些YouTube视频。你可以去搜索Strands agents。你也会找到一篇发布博客。好的。但基本上它非常非常简单，只是为了给你一个如何开始使用Strands的例子。你只需`pip install`，你想看一个Strands的快速演示吗，在我们进入那部分之前？会有帮助吗？是的。好的。所以让我给大家看看。我想我这里有。好的。所以让我快速花四分钟。四五分钟。如果你想看，我有一个很好的演示。你们有多少人听说过**three blue one brown**（three blue one brown: 一个知名的数学科普YouTube频道）？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So strands is a new agentic framework. Let me just show you this. It's strandsagent.com. This is a uh SDK which was launched by AWS. Uh I worked with on at the launch. There are some YouTube video as well. Uh you can just go over and just search for strands agents. You will find a launch blog as well. Okay. But basically it is very very simple just to give you an example how to get started with strands. Uh you just pip install and uh do you want to see a quick demo of strands before we go to that part? Will that help? Yes. Okay. So let me just show you. I think I have that. Okay. So let me quickly spend four minutes on that. Four five minutes. I have a good demo actually if you want. How many of you have heard of um three blue one brown?</p>
</details>

好的，太好了。那么让我给大家看看，你可能会觉得有趣。Strands是一个非常简单的框架。它是一个模型优先的框架。所以我们暂停一下。好的，我们在这里学到的任何东西，我们都将使用这个框架来使我们的工作流程，我们所做的一切，都具有代理功能，我们还将添加语音部分。所以这里有一个开源框架，它是模型优先的。这意味着，现在模型非常强大，我们期望模型能够进行推理，而不是我们通过大量的背景故事、目标、提示等等来告诉代理。我们不想要所有这些。我们抛出一个问题。我们期望模型能够生成响应并进行推理。这就是为什么它非常非常轻量级，并且它与不同的模型集成，你可以使用来自Bedrock的模型，你可以直接使用Anthropic，你可以使用LightLLM。你们听说过LightLLM吗？是的。所以当你访问LightLLM时，你可以访问LightLLM支持的任何模型。现在就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, perfect. Okay, so then let me show you that you might you might uh it might be interesting. So strands is an uh framework very simple. It's a model first framework. So we are just taking a pause on that. Okay, we are just we will whatever we learn here we will just use this framework to make our workflow whatever we have done agenting and we will add a voice part of that as well. So here there's an open source framework which is model first. That means uh now the models are so strong we expect that the model should reason rather than we telling uh the agent with a lot of backstory goals prompting and all that. We don't want all of that. We throw a question. We expect the model to generate the response and do the reasoning uh on on the model side. That's that's why this is very very lightweight and it has the integration with different models and you can use model from bedrock you can use directly from entropic you can use light LLM. Have you heard of light LLM? Yeah. So when you have an access to light LLM you can access any model that light LLM supports. Right now this is what it is.</p>
</details>

所以Strands，根据Strands的定义，它是一个DNA结构，它只有两条链，这两条链代表模型和工具，仅此而已。所以你用一个模型和几个工具创建一个代理，然后简单地提出问题，仅此而已。就这么简单，对吧，让我给大家看一个快速演示。让我们看看它是否能工作。好的。所以这是，从最后一排能看到吗？不，没那么清楚。好的。我来读一下。所以我们只是导入代理，我们导入工具。好的。好的，我想这是MCP的那个。不，不，这不是我想展示的那个。好的，让我们看看这个。好的，只是，我想这是一个视频。它应该能正常工作。是的，让我们看看。所以，我们首先安装Strands Agent和Strands Tool。PIP安装，简单的pip安装，它是开源的。好的，所以你不需要，它也支持Ollama。所以，你不需要有AWS账户或任何类似的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So strands you by the definition of strands it's a DNA structure and it just have two strands and that two strands stands for model and tool that's all. So you make an agent with one model and few tools and simply you just ask the question that's all. It's as simple as that right and let me show you uh one quick demo. Let's see if it uh if it works. Okay. So this is is it visible from you know last row? No, not that much. Right. Okay. I'll just read it out. So we are just importing um agent and we are importing the tools. Okay. And okay, this is I think this is the MCP one. No, no, this is not the one I want to show you. Okay, let let's uh see this. Okay, just uh uh I think it's a video. It should work fine. Yeah, let's see. So, we first install strands agent and strands tool. PIP install simple pip install and it's open source. Okay, so you don't have to uh and it supports Olama as well. So, you don't have to have an AWS account or anything of that sort.</p>
</details>

所以我们要做的就是创建一个文件，创建一个摘要，将摘要写入我们的文件，并且还要添加语音部分。让我们看看，我想它会很快。所以我们正在导入，能看到吗，还是我应该展示一下？它非常简单。所以我们正在导入代理，我们正在导入Bedrock模型。默认情况下它使用Bedrock模型。它实际上使用Claude 3.7，但你可以使用任何其他模型。我使用了一些内置工具，名为“read file”、“write file”和“speak”。这是模型ID。这是提示。你可以有提示，也可以跳过提示，没关系。最后你需要创建代理。所以这个代理包含模型ID、系统提示和工具，所有这些工具你都没有编写代码。这是默认的，对吧，我只是问了一个特定的问题，看，在提示中我说这是一本教科书，在我的本地目录中，阅读它，创建一个摘要，并将其写入本地目录，同时说出最终答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we are going to do is we are going to create a file create a summary write the summary into the into our file and uh also add a voice part of it. Let's see I think it would be pretty quick. So we are importing is it visible or I should should I show it? It's pretty straightforward. So we are importing agent and we are importing the bedrock model. By default it uses bedrock model. Uh it actually uses clot 3.7 but you can use any other model. And I have used some built-in tool called read file, write file and speak. And this is the model ID. And this is the prompt. You can have a prompt, you can skip a prompt, doesn't matter. And lastly you have to create the agent. So say this agent contains the model ID system prompt and the tools and all these tools you have not written the code for this. This is by default right and I'm just asking uh a particular question and see this I'm in the prompt I'm saying that this is a textbook uh in my local directory read that create a summary and write it into the local directory and also speak out the final answer</p>
</details>

看，它正在使用工具来读取文件，其次它是在创建之后。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and see this it is using the tools for read the file second it is create after</p>
</details>

功能就像相机镜头，光线通过角膜进入，由晶状体聚焦到。我们什么也没做，只是控制瞳孔大小来调节入射光线。我可以通过调节晶状体来调整焦距。看。好的，现在我将分享另一件事，现在我不会向你展示代码，这不是本次的目的，但你听说过MCP吗？是的，所以看这个，我不会告诉你，我想你应该能够。所以我创建了一个名为manim的MCP服务器。你们听说过**Manim**（Manim: 一个用于创建数学动画的Python库）吗？好的，就看看那个，所以想法是，让我给大家看看我们在做什么，我们正在创建一个manim服务器，这就是MCP服务器，现在这是客户端，它只是我们的Strands代理，它将调用这个MCP服务器。好的。我可以提出任何问题。所以问题是创建一个manim屏幕，绘制一个立方函数，比如2x^3减去等等。好的。然后看看会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> functions like a camera light entering through the cornea and focus by a lens onto the >> we have not done anything just in controls pupil size to regulate incoming light >> the I can adjust focal length through accommodation see >> all right so now I I will share one more thing now I'll not show you the code that is not the purpose of this but have you heard of um of course you have heard of MCP yeah so see this I I'll not tell you I think you should be able So I've created an MCP server called um created an MCP server with manm okay so manim have you heard of manm okay just just see that so idea is so let me just show you what we are doing we are creating a man server and this is the MCP server now this is the client on nothing but uh our strand agent and this will call this MCP server. Okay. And I can give any question. So question is create a man screen which draws a cubic function like 2x^ 3 minus blah blah blah. Okay. And see what happens.</p>
</details>

现在它正在执行代码，调用这个MCP服务器。它在这里工作，然后它应该给你一些响应。所以它生成了这个视频。好的。现在你会感到一些熟悉。看起来很相似，对吧？我什么也没做。我只是使用了一个托管的SDK，并创建了那个MCP服务器，它可以生成像three blue one brown创建的那样的视频。所以这只是一个小的演示，说明你如何利用Strands与MCP，编写简单的代码，然后做一些很棒的事情。好的。好的。所以这就是关于Strands的。Strands的核心思想是，只需`pip install`，然后使用它，以及默认工具和你选择的模型。仅此而已。除此之外没有额外的脚手架。好的。所以就像这样，你`pip install`，创建一个实例，然后提问。这里我们没有提到任何模型，这意味着它默认会使用Bedrock模型，但在演示中我们看到你可以在这里定义你的Bedrock模型。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now it is executing the code calling this uh MCP server. It is working uh here and then it should give you some response. So it generated this video. Okay. And now you will get some familiarity. Looks similar, right? I have not done anything. All I have used is a manage uh uh SDK and created that uh MCP server which can generate videos like uh what three blue one brown created. So this is just a small demo of how you can make use of strands with an MCP and write simple code and you know do wonderful things. Okay. All right. So this is about strand. The core idea of strand is uh just pip install and use it with the by default tools and uh your model of your choice. That's all. There's nothing uh no scaffolding uh beyond this. Okay. So it's just like this you pip install create an instance and just ask question. Here we have not mentioned any model that means it will by default use bedrock model but in the demo we have seen that you can define your bedrock models here. Okay.</p>
</details>

### 添加语音功能

所以现在让我们回到我们的问题。在这种情况下，我们的工具不是默认工具，而是我们定义的工具。那个工具是什么？检索工具。我如何创建一个自定义工具？只需导入工具，然后将其用作函数顶部的装饰器。仅此而已。现在这对我来说就成了一个工具，就像读取文件、写入文件、说话一样。这对我来说只是一个工具。好的。我们可以定义，我们可以使用Bedrock模型，或者由你决定。现在看看这个。我们还导入了一个图像阅读器。我们为什么要导入这个图像阅读器？我稍后会告诉你。但是，你还记得当我们使用这个Bedrock模型来生成最终答案时，我们创建了一些自定义函数，它们只是包含如何为你的图像创建Bedrock模型提示的信息，对吧，所以我不需要做所有这些事情，我可以简单地使用这个图像阅读器，它只是接收一张图像并为我们生成提示。现在我有一个系统提示。系统提示说你是一个基于RAG的系统等等。它还说，这些是你必须使用的两个函数或工具等等。仅此而已。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now let's come back to our our um our problem. In this case our tool is not the default one but the tool that we have defined. And what is that tool? The retrieval tool. And how I can create a uh custom tool it just by importing tool and just use that as a decorator on top of your function. That's all. Now this becomes a tool for me just like read file write file speak. This is just a tool for me. Okay. And we can defi we can use make use of bedrock model or up to you. And now look at this. We are also importing an image reader. Why we are importing this image reader? I will uh tell you a little later. But uh you you remember that when we use this bedrock model for final answer when we use this bedrock model to generate the final answer we created some custom functions which are nothing but uh contains the information about how to uh create the prompt for your images for bedrock models right so I don't have to do all these things and uh I can simply make use of this image reader which just takes an image and generates uh the prompt for us. And now I have a system prompt. System prompt says that you are a rag based system and all that. And it also says uh these are the two functions that you have or the tools that you have to use and all that. And that's all.</p>
</details>

现在你再次创建一个代理，就像之前一样，你定义模型系统提示。在这种情况下，我们使用两个工具。一个是`retrieve_from_quadrant`，这是我们的工具，另一个是用于生成部分的图像阅读器。好的。然后我们问这个问题：“什么是不同的营养级别？”现在它只是代理生成响应，就像之前一样，但现在所有事情都由代理完成。而且它的优点是，假设你现在想添加语音功能。我不仅想要答案，还想要语音形式的最终响应。到目前为止我已经完成了这个。我只是缩小图像，以便所有内容都能显示出来。到目前为止我们已经完成了这个。我们提出一个问题。它会发送给Strands代理。它使用我们创建的这个检索工具自定义工具。它获取相关的块，这些块只是筛选出的页面，然后它使用这些模型中的任何一个，比如Bedrock、Ollama等等，来生成最终响应，为了生成这个，它使用图像阅读器工具。现在我们要做的是添加语音功能。我将只使用“speak”工具。仅此而已。只需导入一个。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now you create an agent again just like before you define the model system prompt. And in this case we use two tools. One is the retrieve from quadrant which is our tool and the image reader for the generation part. Okay. And then we ask this question what is the difference uh different tropical levels and now it just agents uh generates the response just like before but now everything is done by the agent. And the beauty is let's say now you want to add the voice feature. I don't only want the answer but also the final response in the form of voice. So far I have done this. I'm just reducing the image so that everything fits in. So far we have done this. We ask a question. It goes to a strands agent. It uses this retrieval tool custom tool that we have created. It gets the relevant chunk which are nothing but the shortlisted pages and then it uses any of these models let's say bedrock colama whatever to generate the final response and to generate this it uses this image reader tool. Now what we have to do is to add voice functionality. I will just use the speak uh tool. That's all. Just one uh import. Okay.</p>
</details>

这就是我们正在做的。我们只是在这里添加“speak”。系统提示保持不变。我正在查询同样的事情。现在当我问这个问题时。所以我们来问这个问题。好的。所以让我运行这个，让我只在问题本身中提问：“用自然的女声解释答案。”然后我们看看。现在让我们运行这个。我希望我连接到互联网了，但我们看看。所以当你在你的环境中运行这个代码时，你可以简单地删除系统提示，你仍然会得到正确的答案。事实上，尝试这个提示。我没有尝试过，但尝试改变这个提示，说“男声”或类似的东西，对吧，机器人式的，你知道，不是自然的方式，也许是机器人式的方式，类似的东西。其思想是看看Strands是否能够将这些信息转发给模型，对吧，所以你不需要系统提示，这可能是因为我的互联网，但它不会花费那么多时间，你只需尝试一下，它应该能正常工作。好的，这就是我为这次研讨会准备的所有内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that is what we are doing. We are just adding speak here. And again the system prompt remains the same. And I'm quering the same thing. And now when I ask this question. So let's say let's ask this question. Okay. So let me run this and let me let me just ask in the question itself explain the answer over a female voice in a natural way. And let's see. And now let's run this. I hope I'm connected with the internet but let's see. So when you run this uh code in your environment you can simply remove the system prompt you will still get the right answer. In fact try this prompt. I have not tried but try this change this prompt and say that mail voice or something like that right robotic uh uh way of uh you know not a natural way maybe robotic way something like that. The idea is see that whether strands is able to you know forward that information to the model or not right so you don't need a system prompt uh it may be because of my internet uh but it's it doesn't take that much of time you just give it a shot it should work fine okay so that's what I uh I had uh for for uh this particular uh workshop uh I would okay it's now running so it's little slow but let me so it is now able to generate the images I mean shortlisted the images and now it should speak in a female voice so while that happens Okay,</p>
</details>

好的，它现在正在运行，所以有点慢，但让我，所以它现在能够生成图像，我的意思是筛选出图像，现在它应该用女声说话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> trophic levels are the different feeding positions in a food chain representing the flow of energy through an ecosystem. There are typically four. >> Okay. So, let me just stop this and let's say if I let's try this. Okay. Um, let me delete this system prompt and let me just have this model and the tools. There is no speak, nothing, no system prompt. There's nothing there. And here I will change this to a male voice. Okay. And uh I'll give it a shot. Let this I don't want to interrupt.</p>
</details>

营养级别是食物链中不同的摄食位置，代表能量流经生态系统。通常有四个。好的。所以，让我停下来，我们来试试这个。好的。嗯，让我删除这个系统提示，让我只保留这个模型和工具。没有语音，什么都没有，没有系统提示。什么都没有。在这里我将把它改为男声。好的。我来试试。我不想打断。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Which are small carnivores that eat herbivores. These might include frogs, small birds or foxes. The fourth trophic level is occupied by tertiary consumers or top carnivores. >> You can in fact say something like summarize in uh you know 50 words or 100 words rather than waiting for this to complete. that energy transfer >> still going on just give it a second and before I forget if you want to know about that multimodal that the traditional technique in this GitHub repo there is the part three and here you will find the details of uh that architecture like um uh this architecture right and you know this notebook is about how you can do the same thing but uh pre-processing this image text and table okay so just play around this GitHub repo okay it's done so now I will quickly uh I just created this agent now but uh without any uh system prompt Now I just executed this and now let's run this. So now I am letting uh the agent know only about the models nothing else. There is no system prompt. I just hope we get a male voice at least.</p>
</details>

它们是吃草食动物的小型食肉动物。这可能包括青蛙、小鸟或狐狸。第四营养级别由三级消费者或顶级食肉动物占据。事实上，你可以说“总结成50字或100字”，而不是等待它完成。能量转移仍在进行中，请稍等片刻，在我忘记之前，如果你想了解那个多模态的传统技术，在这个GitHub仓库中有第三部分，你可以在这里找到那个架构的详细信息，比如这个架构，对吧，这个Notebook是关于你如何做同样的事情，但要预处理图像、文本和表格。好的，所以只需在这个GitHub仓库中尝试一下。好的，完成了，所以现在我将快速地，我刚刚创建了这个代理，但没有任何系统提示。现在我刚刚执行了它，现在让我们运行它。所以现在我只让代理知道模型，没有别的。没有系统提示。我只希望至少能听到男声。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Let me explain trophic levels, which are essentially the different feeding positions in a food chain or ecosystem. Think of them as the levels in nature's dining hierarchy. Starting at the base, we have the producers. These are main >> Okay, let's see if I have boys. Let's try this. Trophic levels are essentially the different feeding positions in a food chain showing how energy flows through an ecosystem. Let me walk you through the main at the very bottom we have the producers. You can try this out and see what you can mention so that you can augment the tool. In fact, this is not the right way to do this because by default it is a female voice. You can actually change the behavior of this uh speak tool. Okay. So the way that you can do is you can go to the documentation and uh if you see this documentation uh here we have tools and uh you can see the overview and if you see this here there is a tool spec. Yeah, here's a tool spec for different tools and you can mention what persona that you want. So that is a more deterministic way uh to do that or else you can put that in the uh system prompt. Okay. So that's all I have. Uh u if you have any questions feel free to ask or uh you know uh you know feel free to connect and u you know would be more than happy uh to connect offline.</p>
</details>

让我解释一下营养级别，它们本质上是食物链或生态系统中不同的摄食位置。把它们想象成自然界饮食等级中的级别。从最底层开始，我们有生产者。这些是主要的。好的，让我看看我是否有男声。我们来试试这个。营养级别本质上是食物链中不同的摄食位置，展示了能量如何流经生态系统。让我带你了解主要的，在最底层我们有生产者。你可以尝试一下，看看你可以提及什么来增强这个工具。事实上，这不是正确的方法，因为默认情况下是女声。你实际上可以改变这个语音工具的行为。好的。所以你可以这样做：你可以去文档，如果你看这个文档，这里有工具，你可以看到概述，如果你看这里，有一个工具规范。是的，这里有不同工具的工具规范，你可以提及你想要什么角色。所以那是一个更确定的方式来做，或者你可以把它放在系统提示中。好的。这就是我所有的内容。如果你有任何问题，请随时提问，或者随时联系，我非常乐意线下交流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. >> Yeah. >> So have you seen any is already using this in production and what type of scaling uh >> yeah yeah >> yeah that's a good question so we have used this in one of the insurance a leading insurance company where they had u the images of driver u licenses and they have the images of insurance policies and all that and we tried with different techniques one of the technique that we used was OCR which worked fine uh but CalPali was working pretty And it was the only drawback which I have seen with this call pal model is it is very heavy but uh that heaviness comes only at the time of data injection. So when you create the embeddings one that is done at the query time it is pretty fast. Okay. Uh but when you are putting the data at that time it's little heavy. Okay.</p>
</details>

### 问答：生产用例与扩展

是的。是的。那么你见过有公司已经在生产中使用这个了吗？以及什么样的扩展？是的，是的，是的，这是一个好问题。我们已经在一家领先的保险公司使用了这个，他们有驾驶执照的图像，以及保险单的图像等等，我们尝试了不同的技术，我们使用的一种技术是OCR，它工作得很好，但PaLI工作得相当好。我发现PaLI模型唯一的缺点是它非常重，但这种“重”只发生在数据注入时。所以当你创建嵌入时，一旦完成，在查询时它就非常快。好的。但是当你放入数据时，它有点重。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh uh I guess if you are thinking that if you have 1,000 documents each has 1,000 pages, you will do a search among all those images. That is not how it works. Because imagine if I ask you the same question. Forget about all this. If you use a text based embedding model and if you have a book of 1 million pages, you have 100 million vectors and when you ask a question, does the vector database search for all the vectors? No, there is a different indexing techniques that all the database uses. Same indexing technique are used here as well. It's just that now the vectors represent different thing. Now the vector represent patches. In the previous case, the vector represents images or sorry uh a chunk of text but uh that semantic search happens very efficiently uh using a different indexing technique. One of the technique that we use is I think **Hierarchical Small World Navigation (HNSW)** u so where it uses a treebased uh you know structure uh it just finds uh the root node uh I mean it it starts on the top layer it finds one of the closest node and whichever node is closest then it goes down and finds its neighbor so you are just you can think of it like uh uh you know in u in computer science we have tree pruning right so that's what we do so it reduces the search space. Yeah.</p>
</details>

我想如果你认为你有1000个文档，每个文档有1000页，你会在所有这些图像中进行搜索。这不是它的工作方式。因为想象一下，如果我问你同样的问题。抛开所有这些不谈。如果你使用基于文本的嵌入模型，如果你有一本100万页的书，你有1亿个向量，当你提出问题时，向量数据库会搜索所有向量吗？不，所有数据库都使用不同的索引技术。这里也使用了相同的索引技术。只是现在向量代表不同的东西。现在向量代表分块。在以前的情况下，向量代表图像或者，抱歉，文本块，但语义搜索通过不同的索引技术非常高效地进行。我们使用的一种技术是**分层小世界导航**（Hierarchical Small World Navigation (HNSW): 一种高效的近似最近邻搜索算法，常用于向量数据库），它使用基于树的结构，它只是找到根节点，我的意思是它从顶层开始，找到一个最近的节点，然后哪个节点最近，它就向下寻找它的邻居，所以你可以把它想象成在计算机科学中我们有树剪枝，对吧，这就是我们所做的，所以它减少了搜索空间。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So a quick follow. >> Yeah. So can we see more companies this can see this as a replacement for >> no traditional? >> Yeah, that's a good question. No, I don't think this is a replacement. This is just another technique and this is also you know you know it's a space where things are changing very fast. Right. Um I personally feel if we get a vision based model which is more efficient in terms of computation this might be a good model. Uh but again this may work for your data may not work for your data. So it's all about your data. What I would do and what I do generally is whenever I get some problem I try to solve with the least uh I mean the most cost effective way or most efficient way. basically more than the cost. First we have to find out which architecture works fine for my data. If that is working fine I don't why to complicate things and create images and all that. I will go to this only when my data set is very much converted and where you as an human you feel that I can read this data only if I look at it. Imagine that you have a PDF file. For that simple text file for that you can get the answer from that PDF file even if somebody converts that into a text file and give it to you. But let's say you have a PDF file which contains mostly images and embedded text on top of that then you will say that okay okay don't give only text you give me the book I will figure it out because I need to see what is the context of that. So it's just like it replicates humans u uh you know uh behavior to understand any data. U so I would recommend not to start with this start with the traditional technique because that is more effective um cost effective and also it it is less heavy because here we are storing a lot of vectors for each page right so but use this when you have a very convoluted data okay yes sir</p>
</details>

### 问答：混合方法与模型微调

所以一个快速的跟进。是的。那么我们能看到更多的公司将此视为传统方法的替代品吗？不。是的，这是一个好问题。不，我不认为这是一个替代品。这只是另一种技术，而且你知道，这是一个变化非常快的领域。对。我个人认为，如果我们能得到一个在计算方面更高效的基于视觉的模型，这可能是一个好的模型。但是，这可能适用于你的数据，也可能不适用于你的数据。所以这一切都取决于你的数据。我通常会做的是，每当我遇到问题时，我都会尝试用最不，我的意思是，最经济有效或最有效的方式来解决。基本上，效率比成本更重要。首先我们必须找出哪种架构适合我的数据。如果它工作得很好，我为什么要让事情变得复杂，创建图像等等呢？我只有在我的数据集已经大量转换，并且你作为人类觉得只有通过查看才能阅读这些数据时，才会使用这种方法。想象一下你有一个PDF文件。对于那个简单的文本文件，即使有人将其转换为文本文件并给你，你也可以从那个PDF文件中得到答案。但是，假设你有一个PDF文件，其中主要包含图像和嵌入在图像上的文本，那么你就会说，好的，不要只给我文本，给我这本书，我会自己弄清楚，因为我需要查看它的上下文。所以它就像复制了人类理解任何数据的行为。所以，我建议不要从这个开始，从传统技术开始，因为它更有效，更经济，而且它也更轻量，因为我们在这里为每个页面存储了大量的向量，对吧，所以，但当你有一个非常复杂的数据时，才使用这个。好的，是的，先生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> so I'm trying to get a sense when it's good when it's not im into these little squares. Is there an issue where you know let's say you're in the middle of paragraph two different segments does that cause problems in practice? >> Yeah, that's a good question. But here the model doesn't know that that there is any chunking or anything that we are understanding it that way. But to the model it's just an image and the way that it creates the embeddings for that image is by uh doing that those patches and why the model knows this because the when the model was trained it's a vision based model. So when the model was trained it used to chunk all the training data set like that and that's how the you know it has optimized for that data. For example during the training time of call pali not at the inference time during the training time when it was given an image of a cat and the text about a cat the cat image was also chopped into those many p uh patches. Similarly, when there was an image of a of a PDF page, it was chopped with the same uh patches. So that was inherited during the training process itself. So we don't have to question that okay model how you are doing this. You the model will say that I have been doing this don't give me advice. I have been doing this with you know the plethora of data. So if you if you just look at it blindly from outside, I also had the same thought how the model is going to create an embedding when it splits a table into multiple chunks. What is the relationship between one chunk and the other chunk? How the model is you know doing that? Later on we realized that this has been incorporated during the training process itself. Initially it was not able to do that right but when during the training process the loss must have been very high. Right? So, and that's how it has been optimized. So, one that is optimized, you don't have to worry about that. And this is basically if you think about this this patching and embedding, it's it's not a new technique. Uh you know, it was there in lot of vision based model. Now, we are using it for retrieval. So, that's that's how it works.</p>
</details>

所以我试图了解什么时候好，什么时候不好，我正在研究这些小方块。有没有这样的问题，比如说你在一篇文章的中间，两个不同的片段，这在实践中会造成问题吗？是的，这是一个好问题。但在这里，模型并不知道我们以这种方式理解的任何分块或任何东西。但对模型来说，它只是一张图像，它为这张图像创建嵌入的方式是通过那些分块，模型为什么知道这一点，因为当模型训练时，它是一个基于视觉的模型。所以当模型训练时，它会像那样将所有训练数据集分块，这就是它如何为该数据进行优化的。例如，在PaLI的训练期间，而不是在推理期间，在训练期间，当它被给予一张猫的图像和关于猫的文本时，猫的图像也被切成了那么多分块。同样，当有一个PDF页面的图像时，它也被切成了相同的分块。所以这在训练过程中就继承了。所以我们不必质疑“好的，模型你是怎么做到的？”模型会说“我一直在这样做，不要给我建议。我一直在用大量的数据这样做。”所以如果你只是从外面盲目地看，我也有同样的想法，当模型将一个表格分成多个块时，它将如何创建嵌入。一个块和另一个块之间有什么关系？模型是如何做到这一点的？后来我们意识到这已经在训练过程中被纳入了。最初它无法做到这一点，对吧，但在训练过程中，损失一定非常高。对吧？所以，这就是它如何被优化的。所以，一旦它被优化，你就不必担心了。这基本上，如果你仔细想想，这种分块和嵌入，它不是一种新技术。你知道，它在很多基于视觉的模型中都存在。现在，我们将其用于检索。所以，这就是它的工作原理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, if you are curious, I would recommend I I'll try to do this later on, but I would recommend that uh try to fine-tune this model or train it from scratch if you have some resource in for a smaller data set. Um and use a different patch size uh uh so let's say start with a patch size of four, right? And uh you know try to see that how it works. uh I have lot of assumptions uh on that but this will give you a lot of clarity of how uh the semantic search things work and why that matrix max matrix multiplication that we have done right why that is a good technique uh uh because imagine you have uploaded your data set is the **Attention Is All You Need** paper and you ask a question about what is positional embedding now this positional embedding This text is there in lot of pages almost all the pages. It should not give me all the pages. Right? So it should give me the page where there is an actual information of positional embedding is there. Right? And when you when you think through that you will find out that the ma max multiplication that that we have done right that actually takes care of that that uh it will just show you the page where all the tokens of your query has the maximum similarity with a particular page not just one chunk of your question with just one patch of your page you getting what I'm saying otherwise you know when you say top five it will give you any five random pages where this positional embedding is written. So just give it a shot.</p>
</details>

事实上，如果你好奇，我建议，我稍后会尝试这样做，但我建议你尝试微调这个模型，或者如果你有一些资源，可以从头开始训练一个较小的数据集。嗯，并使用不同的分块大小，比如说从分块大小为四开始，对吧？然后，你知道，尝试看看它是如何工作的。我对这方面有很多假设，但这会让你对语义搜索的工作原理以及我们所做的矩阵最大值乘法为什么是一种好技术有很大的清晰度，因为想象一下你上传的数据集是**《Attention Is All You Need》**这篇论文，你问一个关于什么是位置嵌入的问题，现在这个位置嵌入的文本在很多页面，几乎所有页面都有。它不应该给我所有页面。对吧？所以它应该给我包含位置嵌入实际信息的页面。对吧？当你仔细思考时，你会发现我们所做的最大值乘法实际上解决了这个问题，它只会向你显示查询的所有令牌与特定页面具有最大相似度的页面，而不仅仅是你问题的一个块与你页面的一个分块。你明白我的意思吗？否则，你知道，当你说前五名时，它会给你任何五个随机页面，其中写有位置嵌入。所以就试试看吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yes sir. Yeah. >> Is there any sort of hybrid approach where you can process image? This is something that uh one of my teammate started to work on uh where we are trying to use u call along with a traditional technique and the way that we are trying to do this is based on the question that we are getting and while we are doing the pre-processing and uh storing the embeddings we are trying to store uh in a different way like not for all the data that we are using call pal just for few data we are using call pal for the rest of the data we are just using the traditional technique But for a particular data set we just use one single model. We cannot just go into that okay first five pages of this document we will use call pal the next five pages we will use the traditional technique that's not how you know uh we are exploring but we are kind of trying to use two different approach in the same uh uh architecture. But this is we are using because the data set that we got from the customer they started off with a requirement certain requirement then it changed. It changed means it appended and now when the new request came the data set is completely different but they want a one unified system. So that's why we are just checking the question is coming from where and we are storing some metadata to identify this question should go from this space or that space. Uh but nothing beyond that that I have seen. I've seen either this or that.</p>
</details>

是的，先生。是的。有没有一种混合方法可以处理图像？这是我的一个队友开始研究的东西，我们正在尝试将PaLI与传统技术结合使用，我们尝试这样做的方式是基于我们收到的问题，在预处理和存储嵌入时，我们尝试以不同的方式存储，比如不是所有数据都使用PaLI，只有少量数据使用PaLI，其余数据我们只使用传统技术。但对于特定的数据集，我们只使用一个模型。我们不能说“好的，这份文档的前五页我们用PaLI，接下来的五页我们用传统技术”，这不是我们探索的方式，但我们正在尝试在同一个架构中使用两种不同的方法。我们之所以这样做，是因为我们从客户那里得到的数据集，他们最初有一个特定的需求，然后需求改变了。改变意味着它被追加了，现在当新的请求到来时，数据集完全不同，但他们想要一个统一的系统。所以这就是为什么我们正在检查问题来自哪里，我们正在存储一些元数据来识别这个问题应该从这个空间还是那个空间处理。但我没有看到除此之外的任何东西。我只看到要么是这个，要么是那个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yes sir. >> Did you have to find poly model to for it to work well? >> No I have not done that. So this is these are all fine-tuned models. You can just make use of this. I forgot the data set that they have used. You can read the research paper on that. The link is there. But you don't have to fine-tune that. Can you do that? Yes, of course you can do a finetuning. That's what I was referring to him. I myself have not done that. But I will certainly try this out uh to fine-tune that. That's a good exercise.</p>
</details>

是的。是的，先生。你是否必须找到PaLI模型才能使其良好工作？不，我没有这样做。所以这些都是经过微调的模型。你可以直接使用它们。我忘了他们使用的数据集。你可以阅读那篇研究论文。链接在那里。但你不需要微调它。你能这样做吗？是的，当然你可以进行微调。这就是我对他提到的。我自己没有这样做。但我肯定会尝试微调它。这是一个很好的练习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So it worked well for your use case. >> Yeah. It just worked fine. Yeah. Yeah. Yeah. Yeah. because I used a standard textbook which are publicly available uh but convoluted data try to do that with IKEA data set IKEA data set is good because you cannot use an OCR based techniques in that data set and because that's a very strange sparse data set and that will give you a good intuition that okay this is you know you can understand only you can answer those questions if you if somebody asks you that question from that uh IKEA uh manual you can do that not um a computer if you use a traditional technique. So that actually a good data point to make use of this. Okay.</p>
</details>

所以它在你的用例中运行良好。是的。它运行得很好。是的。是的。是的。是的。因为我使用了一本公开的标准教科书，但对于复杂的数据，尝试使用宜家数据集。宜家数据集很好，因为你不能在该数据集上使用基于OCR的技术，因为它是一个非常奇怪的稀疏数据集，这会给你一个很好的直觉，即“好的，这是，你知道，只有你才能理解，如果你有人从宜家手册中问你这个问题，你才能回答这些问题，而不是电脑，如果你使用传统技术的话。”所以这实际上是一个很好的数据点来利用这个。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Thank you so much everyone for uh uh coming. I really appreciate and and one last thing is if you need u uh any AWS credit for any of your project uh just ping me on LinkedIn. I'll share a few credits. Okay. Even if you need more, I can give you more.</p>
</details>

好的。非常感谢大家的到来。我非常感激。最后一点是，如果你的任何项目需要AWS积分，请在LinkedIn上联系我。我会分享一些积分。好的。即使你需要更多，我也可以给你更多。