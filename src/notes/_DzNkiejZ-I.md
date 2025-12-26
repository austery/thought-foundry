---
area: "tech-engineering"
category: technology
companies_orgs:
- Google
- Google DeepMind
- Google Cloud
- GitHub
- Chick-fil-A
date: '2025-12-09'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Gemini
- Gemini 2.5 Pro
- Nano Banana
- Veo
- Gemma
- Genie3
- AI Studio
- Colab
- React
project: []
series: ''
source: https://www.youtube.com/watch?v=_DzNkiejZ-I
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: 这篇文章介绍了 Google DeepMind 的最新 AI 模型和开发工具，包括 Gemini 系列、Veo、Gemma 和 Genie3。演讲者
  Paige 详细展示了如何利用 AI Studio、Gemini Live、AI 应用构建器和 Colab 集成等平台，快速开发多模态 AI 应用、进行数据分析和视频生成。她强调了
  AI 工具的民主化趋势，赋能个人和小型团队在短时间内创造出科幻般的应用，并鼓励开发者积极探索和利用这些工具。
tags:
- ai-app-development
- developer-tool
- generation
- llm
- multimodal-ai
title: Google DeepMind 负责人：用 Gemini 在几分钟内构建 AI 应用
---
### 欢迎与 Google DeepMind 的 AI 工具

大家好，我叫 Paige。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Greetings everyone. My name is Paige.</p>
</details>

我是 **Google DeepMind**（Google旗下专注于人工智能研究的部门）开发者关系团队的负责人，这意味着我每天都与 **Gemini API**（Google的AI模型接口，用于开发者集成Gemini功能）、**AI Studio**（Google提供的AI开发平台，用于构建和测试AI模型）、**Gemma**（Google发布的开放模型系列）以及许多其他产品打交道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm the inch lead for our developer relations team at Google DeepMind, which means that I get to work with the Gemini APIs, AI Studio, Gemma, and a whole bunch of other stuff every single day.</p>
</details>

所以，如果您的初创公司想使用我们的模型，或者您对它们的功能，或者今天看到的内容感到好奇，请随时在会后与我交流。我很乐意了解您的用例，并探讨我们如何合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you have startups that want to use our models, if you're curious about the capabilities of them or something that you see today, please feel free to chat afterwards. I would love to hear about your use case and to see how we can work together.</p>
</details>

Google 最近一直非常忙碌，这应该不是秘密。在过去几个月里，我们平均每天发布一个新模型或新功能，有时甚至一天发布多个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I don't think it's a secret that Google has been a little bit busy. We have released uh on average a new model or a new feature every single day. Um sometimes multiple ones a day uh over the course of the last couple of months.</p>
</details>

我们最新的旗舰模型目前仍然是 **Gemini 2.5 Pro**（Gemini系列中的旗舰模型）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Latest flagship model is still Gemini 2.5 Pro for uh at least for now.</p>
</details>

还有 **Gemini 2.5 Flash Image Preview**，又名 **Nano Banana**（Gemini系列中用于图像处理的模型，代号“纳米香蕉”）。有多少人试过 Nano Banana？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um Gemini 2.5 flash image preview aka Nano Banana. Um how many people have tried Nano Banana?</p>
</details>

很好。我们不太擅长命名，但 Nano Banana 是个例外，我们稍后会看到它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh excellent. We're we're not the best at naming things. um but uh Nano Banana being the exception but we'll [clears throat] see that in a little bit.</p>
</details>

**Veo 3.1**（Google最新的视频生成模型，支持多语言音频和背景效果）是我们最新的视频生成模型，它还包括多语言音频、背景效果和音乐等。**Gemma 3N**（Gemma系列中一个参数量为40亿的开放模型）是我们开放模型系列的一部分。**Genie3**（Google的世界模型，用于生成和导航虚拟场景）是一个世界模型，还有我们的计算机使用 API，如果有时间我们也会进行演示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">VO3.1 which is our latest video generation model which also includes audio including audio in multiple languages, background effects, music etc. GIMA 3N which is part of our open model family. Genie3 which is a world model and our computer use API which if we have time we will also be demoing.</p>
</details>

### Gemini 的多模态能力与 AI Studio 演示

Gemini 在几个方面是特别的。其中之一是它天生就是**多模态**（指AI模型能够同时理解和处理多种类型的数据，如文本、图像、音频和视频）的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So Gemini is special in a couple of ways. One of which is that it's natively multimodal.</p>
</details>

所以它可以同时理解视频、图像、音频、文本和代码等所有这些模态。但它也能输出多种模态，这意味着你可以输出音频，包括多语言音频，你可以输出图像，以及图像和文本交错的内容，或者编辑图像。所有这些都可以用同一个模型完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it can understand video and images and audio uh and text and code and all of the above all at once. But it can also output m multiple modalities which means that you can output audio including audio in multiple languages. You can output images and images and text interled or edit images and you can do all of that with the same model.</p>
</details>

这只是你在 Gemini 上可以做的事情的一个子集。现在，如果你在 AI Studio 中探索，你会发现展示比讲述更酷。这是一个很好的方式，可以在 DeepMind 的模型一发布就立即体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so uh this is just kind of a subset of things that you can do with Gemini. Now, if you explore within AI Studio, but it's a lot cooler to show rather than tell, it's a great way to play with Deep Mind's models as soon as they come out.</p>
</details>

你可以在右侧选择不同的模型，并获得关于它们的各种见解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, you can select different models here off to the right and get different insights about them.</p>
</details>

你也可以添加图片。所以，我将选择一个示例图片，也许是这张。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but you can also do things like add images. So, I'm just going to select a sample image, maybe this one.</p>
</details>

我将开启结构化输出，希望大家都在使用这个功能。添加一些属性，比如地标名称、国家名称、城市名称，也许还有描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I'm going to turn on structured outputs, which uh which hopefully folks are using. add some properties. So maybe like a landmark name, a country name, a city name, maybe a description.</p>
</details>

将所有这些都设置为可返回多个值，如果它们想返回多个值，就可以实现。然后点击运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Make all of that available as multiples. So if they uh if they want to return multiple values, they can. And then hit run.</p>
</details>

我们应该会看到一个 **JSON blob**（一种轻量级的数据交换格式，常用于表示结构化数据），其中包含地标名称、国家名称等信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and we should see a JSON blob. Yep. That has kind of landmark name, country name, etc.</p>
</details>

你可以非常快速地玩转这些模型。如果你能在 AI Studio 中实现某个功能，点击“获取代码”，它会为你提供在你的应用中复制在 AI Studio 中所做的一切所需的所有内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you can just uh play with the models pretty quickly. And then if you can get something working in AI Studio, if you click get code, it gives you everything that you would need to replicate whatever you just did in AI Studio as part of your app.</p>
</details>

所以如果我选择 Python，我听说大家都是数据专业人士，所以可能喜欢 Python，或者至少能容忍它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I go to Python, um I hear that all of y'all are data humans. So probably um probably love Python um or at least tolerate it.</p>
</details>

你可以看到它已经选择了特定的模型，并为你提供了配置的说明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the you can see that it's selected the the specific model. Um it's kind of given you the the blurb to configure.</p>
</details>

它还整合了我在结构化输出中要求的关于模式结构的大量信息。这样你就可以直接开始，而不必通过文档或“魔法”来弄清楚如何操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, also it's incorporated a lot of information about the schema structure that I had asked for in structured outputs. Um, and you're kind of off to the races as opposed to trying to figure out how to do this via documentation or via wizardry.</p>
</details>

这只是你可以用基础模型做的一个例子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is uh just an example of something that you could do with the one of the base models themselves.</p>
</details>

### Gemini Live：实时交互与多语言支持

我们最近还推出了 **Gemini Live**（Gemini系列中支持实时、多模态交互的模型），它让你能够像与人交谈一样与模型对话，支持多种语言，甚至可以做一些非常酷的事情，比如分享你的屏幕。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Um, but we've also recently introduced something called Gemini Live um, which gives you the ability to talk to the models as if you were talking to a human um, in multiple languages and even doing really cool things like sharing your screen.</p>
</details>

这是一个博客文章，是关于我们的 **Genie3**（Google的世界模型，用于生成和导航虚拟场景）世界模型。如果你还没看过，我真的建议你仔细看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is a blog post. It's for our Genie 3 world model um, which if you haven't seen, I really suggest taking a look through.</p>
</details>

你可以描述一个你想要体验的场景，然后像全息甲板（Hollow Deck）一样在其中导航。每个画面都是逐像素生成的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can describe a scene that you'd like to experience and then hollow deck style just navigate through it. So each frame is generated pixel by pixel.</p>
</details>

所有这些都不是在后台使用物理引擎，它只是一个模型集合，当你点击左侧的箭头键时，它们会生成这些图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um you can uh and none of this is using a physics engine behind the scenes. It's just a harness of models that are kind of creating um these images as you click the arrow keys off here to the left.</p>
</details>

你可以看到各种场景，比如这些对灯光反应非常好的水景。如果你用力撞击灯，它有时会掉进水里，如果你再绕回来，就能再次看到它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and you can have anything from like these watery landscapes that respond really well like if you hit the lamp um if you hit it too hard it sometimes gets knocked into the water in which case if you circle back you can see it again.</p>
</details>

这些体验目前大约持续 60 到 90 秒。但它真的让你感觉置身于一个完全不同的世界。你可以从文本描述或照片开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and these experiences last for like 60 seconds, 90 seconds, at least for now. Um, but it really does feel like you're in a completely different world. And you can start from either a text description um or uh or something like a photo.</p>
</details>

所以，如果你想重温你的某个假期，或者佛罗里达的飓风，你都可以做到。但这非常神奇，而且有点跑题了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you want to relive one of your vacations or a hurricane in Florida, you can. Um, but this is uh but this is just very magical and also beside the point.</p>
</details>

我正在寻找一些我们可以询问 Gemini 的东西。这张表格是一个不错的例子。我将回到 AI Studio，然后分享我的屏幕。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I was looking for something that we could ask Gemini about. um this table pretty decent example. Um I'm going to go back to AI Studio and then I am going to share my screen.</p>
</details>

我还会开启一个叫做“**搜索接地**（Search Grounding: 指AI模型能够利用搜索引擎获取实时信息，以提高回答的准确性和时效性）”的功能，看看它的表现如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I'm also going to turn on uh turn on something called grounding with Google search and uh let's see how well it does.</p>
</details>

“嘿，Gemini。你能告诉我你在屏幕上看到了什么吗？”我将放大，以便我们都能看到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hey there Gemini. Could you tell me what you see on the screen? I'm going zoom in so we can all see.</p>
</details>

Gemini 回答：“我看到一张表格，比较了不同模型在世界模拟或视频生成方面的各种能力。这些模型是游戏引擎、Genie2、Veo 和 Genie3。比较的能力包括分辨率、领域控制、交互范围和交互延迟。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I see a table comparing different models with respect to various capabilities in world simulation or video generation. The models are game engine, genie 2, veo and genie 3. The capabilities compared are resolution domain control interaction horizon and interaction latency.</p>
</details>

“是的，这很酷。如果我想关注 720p，我应该关心哪个模型？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, that's pretty cool. That's pretty cool. Which one would I care about if I wanted to care about 720p?</p>
</details>

Gemini 回答：“根据表格，Veo 和 Genie3 都支持 720p 的分辨率。Veo 还支持高达 4K 的分辨率。Genie3 的指定分辨率是 720p。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Based on the table, both Veo and Genie3 support resolutions of 720p. Veo also supports resolutions up to 4K. Genie3's specified resolution is 720p.</p>
</details>

“是的。你能再告诉我一遍吗？用普通话，也就是中文？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Could you tell me that? But could you tell me again just in um in Mandarin like Chinese?</p>
</details>

“有人会说中文吗？我应该先问一下。有人会说中文吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Does anybody speak? I probably should have asked first. Does anybody speak?</p>
</details>

“除了英语，还有人会说其他语言吗？这次我会礼貌一点。葡萄牙语？是的，巴西葡萄牙语还是葡萄牙语？葡萄牙语。巴西葡萄牙语。Gemini，你能再告诉我一遍吗？但这次用巴西葡萄牙语？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Does anybody speak a language other than English? I'll I'll be polite this time. Portuguese. Yeah. Brazilian Portuguese or Portuguese. Portuguese. Brazilian Portuguese. Could you tell me that again, Gemini? But could you tell me in Brazilian Portuguese?</p>
</details>

这就是我们的 Gemini Live 功能。你可以发送视频数据，比如来自你的屏幕、手机摄像头、音频的视频数据。然后，如果你再次点击“获取代码”，所有这些都会通过你可以复制粘贴的代码为你处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so this is our Gemini live feature. You can send video data. You can send like video data from your screen, from your phone, camera, um audio, and then again if you click get code, um all of it is kind of handled for you um through the the code that you can copy and paste.</p>
</details>

这仍然是一个单一的模型调用。一个模型能够支持所有这些不同的语言，上次我们检查时有 140 多种，但我们不断发现一些我们没有包含在 140 种语言中的语言。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And again, this is a single model call. So single model capable of supporting all of these different languages, over 140 the last time we checked, but we keep finding ones that we hadn't included as part of the um the 140.</p>
</details>

所以，试试你觉得可疑的语言吧。它支持克林贡语（Cllingon）和精灵语（Elvish）。尽情测试它，让我们知道你发现了什么。这就是 Gemini Live。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like test out a language that you're skeptical about. Um it supports Cllingon. It supports Elvish. Like like uh try to put it through its paces and let us know what you find. That's Gemini Live.</p>
</details>

它的交互成本大约是每分钟一美分。所以这是一个将语音转文本、大型语言模型理解和文本转语音管道全部打包到一个 API 调用中的服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It also ends up being on the order of I think one penny per minute of interactions. So this is the speechtoext LLM understanding and texttospech pipeline all bundled into one API call.</p>
</details>

再次强调，大约每分钟一美分。这就是 Gemini Live。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and again just about you know a penny a minute. So that is uh Gemini live.</p>
</details>

实际上，我还要指出的一点是“**搜索接地**（Search Grounding: 指AI模型能够利用搜索引擎获取实时信息，以提高回答的准确性和时效性）”功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, the other thing that I was going to point out was grounding with Google search.</p>
</details>

举个例子，“嘿 Gemini，你能告诉我今天纽约市的气温是多少，以及本周剩余时间的气温会是怎样吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, as an example, hey Gemini, could you tell me um what the temperature is like in New York City today and then also what it's going to be like for the rest of the week?</p>
</details>

Gemini 回答：“纽约市目前的温度是 53 华氏度，即 12 摄氏度。体感温度是 51 华氏度。今天白天多云，晚上有小雨。”信息很多，所以我就按停止键了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> The current temperature in New York City is 53° F or 12° C. It feels like 51° F. Today, there will be clouds during the day and light at night. That's a lot of information. So, I'm just going to hit stop 10% during the</p>
</details>

它显然给了我很多信息，还有引用，作为 **REST API**（一种设计风格，用于构建网络服务，通过HTTP请求进行数据交互）调用的一部分。它使用了**代码执行**（指AI模型能够直接运行代码来完成任务）和我们内置的搜索接地功能，以便在 Google 搜索上查找信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It gave me obviously a lot of information also citations um if as part of the REST API call. Um and it used uh code execution to uh and our search grounding feature which is baked in in order to look up information on Google search.</p>
</details>

当你查看代码片段时，就是这边这个，如果你向下滚动，你会看到要将搜索作为工具调用整合进来，只需要一行代码。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">And when you look at the code snippet, so this guy over here, um if you scroll down, you can see that to incorporate search as a tool call um it's a oneliner.</p>
</details>

你也可以添加自定义工具，如果你更喜欢将它们与 Gemini Live 或其他任何模型结合使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also add custom tools if you would prefer um to uh to kind of cobble together with Gemini Live or with any of the other models.</p>
</details>

### AI 应用构建器：快速开发与部署

我们一直在大力开发另一个功能，那就是我们的构建功能，用于生成应用程序，包括支持 AI 的应用程序，然后将其部署到 **Google Cloud**（Google提供的云计算服务平台）上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Something else that we've been working on pretty significantly is our build feature for um for generating apps including AI enabled apps uh and then deploying them on Google Cloud.</p>
</details>

这个功能今天可以在 a.dev/build 上使用。你可以做一些非常有趣的事情，比如，创建一个应用程序，通过网络摄像头拍摄用户的照片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is uh available today at a.dev/build. Um, but you can do really interesting things like say um create an app that takes a photo of the user with the webcam.</p>
</details>

现在是万圣节，所以我会说，这个应用程序应该询问用户他们最喜欢的动物是什么，以及他们想要什么样的万圣节服装。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, it's Halloween, so I'm going to say something like, um, the app should then ask the user for their favorite animal. Um, and what costume they would like to have for Halloween.</p>
</details>

然后，应用程序应该使用 Nano Banana 来展示用户穿着 DIY 服装，同时抱着他们最喜欢的动物。要富有创意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, the app should then use Nano Banana uh to show the user dressed in a DIY costume uh while cuddling uh their favorite animal. Be creative. Dressed in a related costume.</p>
</details>

我以前从未尝试过这个，所以我们看看它是否有效。祈祷成功。我按下回车键，立即进入一个看起来有点像 **IDE**（集成开发环境，提供代码编辑、编译、调试等功能的软件）的界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and I've never tried this before, so like we'll see if it works. Um, fingers crossed. So I I I hit enter and immediately you're launched into something that looks a little bit like an IDE.</p>
</details>

如果你展开左侧的“思考”部分，你可以看到 Gemini 2.5 Pro 正在逐步构建架构。我们为应用程序构建过程本身提供了一个非常有主见的堆栈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um if you expand out the thinking section off to the left, you can see Gemini 2.5 Pro walking through kind of the architecture. We have a very opinionated stack for the app building process itself.</p>
</details>

所以我们有 **React**（一个用于构建用户界面的JavaScript库）、**Tailwind**（一个实用程序优先的CSS框架，用于快速构建自定义设计），可能还有一些你可能见过的其他东西。它整合了我们 **Genai SDK**（Google的生成式AI软件开发工具包）中所有最新的功能和模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we've got React, Tailwind, probably some other things that you've probably seen. And it incorporates all of the latest features and models that are available in our Genai SDK.</p>
</details>

所以，即使我说的是 Nano Banana，它也知道我指的是 Gemini 2.5 Flash Image。它应该能够弄清楚应用程序本身应该包含什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it knows even though I said nano banana, it knows that I mean like Gemini 2.5 flash image. Um, it should be able to figure out what uh what should be incorporated into the app itself.</p>
</details>

如果它在过程中遇到任何错误，它也应该能够捕获错误，将其反馈给 Gemini 模型，并自行修复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and if it encounters any errors along the way, it should also be able to take the error, put it back into the Gemini model um, and fix itself.</p>
</details>

所以，它使得实验变得非常容易，并且能够持续运行大量的图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so it it uh makes it very very easy to experiment and bless you and to keep uh and to keep kind of running through um a lot of these uh a lot of these images.</p>
</details>

让我们看看会发生什么。右上角还有一个“保存到 GitHub”的功能。如果你想添加不同的文件，你可以上传图像、文本文件和 PDF 文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's see what happens. There's also a save to GitHub feature in the upper right. Um if you want to add different files, you can. So you can upload images, upload text files and PDF files.</p>
</details>

所以，让我们看看结果如何。天哪。希望它能看到我，而不是别的。是的，所以它有了，让我稍微缩小一点。我目前穿着某种东西，但最喜欢的动物是耳廓狐。我的梦想万圣节服装，也许是机器人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um let's so let's see how this goes. Oh gosh. So that is uh hopefully it like sees me and not the the uh Yep. So so so it's got uh let me zoom out a little bit. I'm currently likeund and something but favorite animal finick fox. Um a dream Halloween costume. Maybe like a um a rock uh not a rocket ship but maybe like a robot.</p>
</details>

然后我们看看它的表现如何。它由 Gemini Nano Banano 提供支持，我并没有要求它添加这个，但看！有一个机器人，我坐在里面，还有一只耳廓狐，说实话，这是一只非常可爱的耳廓狐。它还有一个小小的宇宙飞船，非常可爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then let's see how well it does. uh powered by Gemini Nano Banano, which I did not ask for it to uh to add, but like Oh, there we go. So, there's like a robot uh uh with me inside it, a Finnick Fox that is honestly like a very cute Finnick Fox. And he has a little he has like a little spaceship thing that's very And so uh so clearly everybody else wants to try this as well.</p>
</details>

所以显然每个人都想尝试这个。如果我点击“部署应用程序”，我肯定会把它发给我所有的侄女和侄子，你可以选择一个云项目，点击部署。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like obviously um uh uh and so if I if I click deploy app um which I will absolutely be sending to all of my nieces and nephews, you can select a cloud project um click deploy um and then what it does is it kind of creates logging storage.</p>
</details>

然后它会创建日志存储，通过 **Cloud Run**（Google Cloud上的一种无服务器计算平台，用于部署容器化应用）部署应用程序。它会隐藏你的所有 API 密钥，这样它们就不会从应用程序本身泄露。它还会给你一个唯一的 URL。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It deploys the app via cloud run. It hides all your API keys so they can't be exfiltrated from the app itself. And it also gives you a unique URL.</p>
</details>

所以，如果你们都想去尝试一下，你们可以。也许我会说最喜欢的动物是拉布拉多贵宾犬幼崽，也许是哥布林，我们看看效果如何。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if all of y'all wanted to like go and like experiment with this, you could. Um, maybe I will say favorite animal is a labradoodle puppy, maybe like a goblin, and we'll see how well that works.</p>
</details>

然后，如果我进入我的 Google Cloud 控制台，你可以看到请求计数和日志。随着应用程序的使用率增加，由于它是基于 Cloud Run 的，它也会自动扩展并支持增加的工作负载。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then uh if I go to my Google cloud console, you can see the request counts, the logs. Um and as the the the kind of app uh gets uh as the app gets more utilization, um since this is based on cloud run, it will also scale out and support like increased workloads.</p>
</details>

所以我们应该很快就能看到一些日志数据进来，如果天哪。是的，那也很可爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so we should see pretty soon some sort of logging data coming in if the Oh my gosh. Yeah, that is also very cute.</p>
</details>

### Colab 集成与数据分析

我们还有几个演示，因为我们有时间。我们最近还在 **Colab**（Google提供的基于Jupyter Notebook的免费云服务，支持Python编程和GPU/TPU加速）中添加了 Gemini 支持。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um but uh for the app itself and then um couple more demos because we've got time for it. We also just recently added Gemini support in Collab.</p>
</details>

所以，你们都是数据专业人士，或者希望是数据专业人士。这意味着你们已经见过，实际上，有多少人以前见过 Colab？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so again all of y'all are data humans or hopefully data humans. Um which means that uh you've you've seen well actually how many folks have seen collab before?</p>
</details>

好的，比见过 AI Studio 的人多，但仍然是第二项作业。如果你喜欢 Python 编程，去试试 Colab 吧。它是一个基于 Notebook 的环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, more than I've seen AI Studio, but still uh like second piece of homework. Like go try collab if you enjoy Python programming. Um it's a notebook based environment.</p>
</details>

你可以访问 GPU，单节点 GPU 或 TPU，并与计算运行时进行交互，该运行时可以执行广泛的数据任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um uh you can access GPUs um single node GPUs or TPUs um and uh kind of interact uh with a um interact with a compute runtime that can do a broad spectrum of data um data tasks.</p>
</details>

但我们也整合了 Gemini 的逐步推理过程，来做一些事情，比如分析 CSV 文件。所以，我将随便拿一个手边的文件。你也可以直接添加一个 URL。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but it we've also incorporated Gemini's kind of step-by-step reasoning process um to do things like analyze CSVs. So, I'm going to just grab one that's handy here. You could also just add a URL.</p>
</details>

它知道如何通过 curl 或 wget 获取文件本身，或者使用像 pandas 的 CSV 读取器来导入数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and it knows how to to to kind of curl in um or wget and rather the the uh the file itself or to use something like pandas reads uh the the CSV reader to to pull in the the data too.</p>
</details>

但你可以说，请对这些数据进行**探索性数据分析**（EDA: Exploratory Data Analysis，通过可视化和统计方法理解数据集的特征），并尝试几种不同的模型来预测加州房价。这总是令人悲伤的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but you can say something to the effect of please do exploratory data analyses on these data. Um and also uh experiment with a few different models to predict California housing prices. Um which is always a very sad thing.</p>
</details>

然后按下回车键。类似于我们刚才在应用程序构建器示例中看到的，它应该会给我们一个逐步进行数据分析的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then hit enter. Similar to what we just saw with the app builder example, it should give us kind of this step-by-step process to uh to do the data analysis.</p>
</details>

所以，我将接受并运行它。它会加载数据集，进行 EDA。所以我们会有这种逐步的准备过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to accept and run it. It will load the data set, do EDA. So, we've got this kind of step-by-step preparation that's going to happen.</p>
</details>

我将折叠这些部分，以便更容易查看，然后缩小，也更容易查看。但它会添加文本，然后运行代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I'm going to collapse this guy, collapse this guy so it's easier to see, and then zoom out so it's uh so it's easier as well. But it's adding the text and then the code running it.</p>
</details>

然后使用前一步的信息来指导下一步。所以当它进行 EDA 时，它会考虑数据的形状、一些特征的分布，决定哪些应该被包含进来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and then using each previous step to inform the next steps. So as it does EDA, it will take kind of the shape of the data, the distribution of some of the features, um decide which ones should be included,</p>
</details>

它会将其可视化，并使用 **Matplotlib** 和 **Seaborn**（Python中用于数据可视化的库）进行处理，这样我就不必自己动手了，然后还会向我展示一路上的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um will visualize them, uh and we'll wrangle with Mattplot Lib so I do not have to and then will also kind of show me the results along the way.</p>
</details>

我喜欢这个功能，因为我讨厌记住所有 Seaborn 和 Matplotlib 的数据“咒语”。这是一个很好的方式，可以快速概览许多不同的 EDA 任务，而不必坐在屏幕前亲自操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is uh I love this uh just because I I hate trying to remember all of the seabour and mattplot lib data incantations. Um and it's a really nice way to just get um to get a quick overview of a lot of different uh a lot of different um EDA tasks without necessarily sitting in front of a screen and interacting with it yourself.</p>
</details>

我也觉得没有足够的人查看他们的数据，一个主要原因是他们不一定有工具或能力自己完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I also feel like not enough people look at their data and a big reason for that is that they don't necessarily have the tools or the ability to do it by themselves.</p>
</details>

而这在很大程度上解决了这个问题。但在它“烹饪”的时候，我将回到演示文稿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and this kind of solves a a lot of that problem. Um, but while while this is cooking, I'm going to go back to the presentation.</p>
</details>

### Veo 视频生成模型：从概念到现实

Veo 是我们的视频生成模型。任何演示文稿都不能缺少 **Andre Carpathy**（一位著名的AI研究员）的引用，这是我的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">VO is our video generation model. Um, not uh any no presentation is complete without a quote from Andre Carpathy. And here's mine.</p>
</details>

我坚信视频是一种强大的媒介，可以理解一切并与人们交流。Veo 3.1 可以做很多事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so I truly believe that video is a powerful medium for understanding everything and communicating it with folks. Um VO3.1 can do a broad spectrum of things.</p>
</details>

它可以基于参考图像进行接地。它可以在不同的场景集合中拥有相同的角色。它可以动画化图像，包括带有指导的动画，不同的摄像机控制，以及外绘。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it can do grounding based on reference images. It can have uh you know that same character in a different uh collection of scenes. Animate images including with guidance different camera controls outpainting.</p>
</details>

所以你可以将一个全屏视频变成宽屏。你可以向视频中添加东西，也可以删除东西。你可以有参考面部动作，比如一个角色，然后你希望这个角色如何反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can take a full screen uh video and turn it into widescreen. You can add things to video. You can remove things. You can have reference face movements. So a character and then uh some way in which you want the character to react.</p>
</details>

你可以使用第一帧和最后一帧，然后在这两者之间进行插值。你还可以做这样的事情，这可能受到版权保护。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can use first and last frame and then interpolate between them. And you can also uh do things like this which is probably um copyright uh protected.</p>
</details>

“嘿，我叫 K。对我来说，鸡肉三明治的独特之处在于面包的酥脆度。”这是一个我想复制的广告，我将向你展示如何使用不同的 Veo 模型来做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Hey, my name's K. And what makes the chicken sandwich original to me is the crispiness of the bread. a commercial that I want to replicate and I'm going to show you how you can do that with different VO models.</p>
</details>

这也不是我 Paige 在谈论 Chick-fil-A 三明治。这是另一个 Paige，她也喜欢鸡肉三明治。使用 V2 复制这个过程是，你将视频输入 Gemini。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Also, this is not me page talking about the Chick-fil-A sandwich. It's like some other page that also enjoys chicken sandwiches. The process with V2 to replicate this is you feed in the video to Gemini.</p>
</details>

它会创建非常详细的提示，你可以将其反馈给 V2 模型。使用 Gemini 文本转语音进行画外音。你使用 **LIA**（Google的音乐生成模型），它是我们音乐生成模型之一，来制作背景音乐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It creates the very detailed prompts which you can give back to the V2 model. Use Gemini text to speech to do the voice over. You use uh LIA which is one of our music generation models in order to do the music background.</p>
</details>

这花费了不到 30 分钟。我用 **Camtasia**（视频编辑软件）将其拼接在一起。你也可以使用 **MoviePy**（视频编辑软件）。结果就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it takes a little bit less than 30 minutes. I stitched it together with Camtasia. You could also use movie pie. And it ends up like this.</p>
</details>

“嘿，我叫 Paige。对我来说，Chick-fil-A 鸡肉三明治的独特之处在于面包的酥脆和鸡柳的鲜嫩。它美味可口，温暖，令人完全满足。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Hey, my name's Paige. And what makes a Chick-fil-A chicken sandwich to me is the crispiness of the breading and a tenderness of the fillet. It's tasty. It's warm. It's total satisfaction,</p>
</details>

我觉得这很不错。我对那种轻松的吉他音乐非常满意，但使用 V3 的过程变得更好了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> which I thought was pretty good. I was very pleased with like the the chill guitar music, but the process with V3 got a little bit better.</p>
</details>

你只需将视频交给 Gemini 2.5。它会生成提示，然后你将其交给 V3。结果就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you just give the video to Gemini2.5. It generates the prompt which you give to V3. And this is what it looked like.</p>
</details>

“我叫 Paige。对我来说，Chick-fil-A 鸡肉三明治的独特之处在于面包的酥脆和鸡柳的鲜嫩。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> My name is Paige. And what makes the Chick-fil-A chicken sandwich to me is the crispiness of the breading and the tenderness of the fillet.</p>
</details>

那是第一次尝试。在六月，大约四五个月前。同样的提示输入到 Veo 3.1。同样的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, that was first shot. Um, uh, in June, so like four maybe 5 months ago. Um, same prompt into VO3.1. Same process.</p>
</details>

现在看起来是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what it looks like now.</p>
</details>

“嗨，我叫 Paige。对我来说，Chick-fil-A 鸡肉三明治的独特之处在于面包的酥脆和鸡柳的鲜嫩。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Hi, my name's Paige. And what makes the Chick-fil-A chicken sandwich original to me is the crispiness of the breading and the tenderness of the fillet.</p>
</details>

所以，四个月的差距，同样的提示，同样的过程，看到变化真是令人惊叹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, four months delta, same prompt, same process, and it's amazing to see what has changed.</p>
</details>

### AI 工具的民主化与未来展望

因此，我将快速讲完，因为我时间不多了，只想说即使是微小的模型也在变得越来越好。我们的 Gemma 3N 版本几乎和 Gemini 1.5 Pro 一样好，Gemini 1.5 Pro 是我们大约八个月前最好的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, with that, um, I'm going to fly through because I have no time left, um, to just say that like even the tiny models are getting better and better. Our Gemma 3N release is just about as good as Gemini 1.5 Pro, which was our best model uh I guess around eight months ago.</p>
</details>

但它的参数量只有 40 亿。你可以把它下载到你的笔记本电脑上。还有一个**量化版本**（指将模型参数从高精度浮点数转换为低精度整数，以减小模型大小和提高运行速度），可以安装在移动设备上，也可以塞进浏览器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um but four it's four billion parameters in size. You can download it to your laptop. There's a quantized version which fits on mobile devices, can be stuffed into a browser.</p>
</details>

我的最后一点是，在座的各位，现在是成为创始人的最佳时机，尤其是独立创始人或拥有小型团队的创始人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh my uh my final point is that all of y'all in the room uh it has never been a better time to be a founder, especially a solo founder or a founder with a small team.</p>
</details>

我认为人们现在可以在很短的时间内做出非常神奇的事情。我记得我刚开始训练模型时，做任何稍微有趣的事情都需要几个月的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I think that people can do very very magical things right now in a very short amount of time. I remember when I first started training models, it took months to do anything that was reasonably interesting.</p>
</details>

而现在，有了这些真正民主化的工具和方法，你可以构建出即使在一年前也感觉像是科幻小说中的东西。所以，去创造吧，让这些好心人资助你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now uh now it feels like with these truly democratized tools and approaches, you can build things that felt like sci-fi um even just a year ago. So go build stuff and like get these nice people to fund you.</p>
</details>

并与世界分享。再次感谢大家留在这里，感谢大家的到来。去试试 AI Studio 吧。给我发邮件，因为我喜欢问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and uh and share it uh share it also with the world. Um and uh thanks again for for staying here for for coming out. Go test out AI Studio. Uh and send me emails because I love questions.</p>
</details>