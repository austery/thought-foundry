---
author: The MAD Podcast with Matt Turck
date: '2026-02-19'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=VsyvMPbZjYg
speaker: The MAD Podcast with Matt Turck
tags:
  - prompt-engineering
  - audio-compression
  - voice-cloning
  - real-time-ai
  - on-device-inference
title: 语音AI的黄金时代：Neil Zeghidour揭示行业变革与未来
summary: 本次访谈中，Gradium AI 首席执行官 **Neil Zeghidour** 深入探讨了语音AI的现状与未来。他解释了语音AI为何正经历“黄金时代”，以及其在延迟、自然度、准确性方面的巨大进步。Zeghidour还分享了他从DeepMind和Meta到创立Gradium AI的职业历程，包括**神经音频编解码器**和**音频语言模型**的开创性工作。他强调了小型团队在语音AI领域做出重大贡献的潜力，并讨论了该领域面临的技术挑战，如嘈杂环境下的语音识别、数据质量、多语言支持以及隐私和深度伪造问题。最后，他分享了对欧洲和法国AI生态系统的看法。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people:
  - Neil Zeghidour
  - Geoffrey Hinton
  - Yann LeCun
  - Sumit Chintella
  - Alex Dece
companies_orgs:
  - Gradium AI
  - DeepMind
  - Meta
  - Google
  - QAI
  - OpenAI
  - Alibaba
  - Mistral
  - Anthropic
  - Cohere
  - Jane Street
  - Apple
products_models:
  - AlexNet
  - SoundStream
  - ALM
  - Mushi
  - Hibiki Zero
  - Pocket TTS
  - Qwen-3 TTS
  - VTA model
  - Bridget Clone
  - Llama
  - Dino
  - Gemini
media_books:
  - Her
  - Silicon Valley
status: evergreen
---
### 语音AI的黄金时代

**Matt**: 大家好，我是First Mark的Matt。欢迎收听Matt播客。**语音AI**正迎来一个重要时刻。多年来，这个领域一直停留在**恐怖谷**效应中，远远落后于其他AI模态，表现得像机器人、缓慢且令人沮丧。但在过去的18个月里，一切都开始改变。我今天的嘉宾是**Gradium AI**的首席执行官**Neil Zeghidour**，他曾任职于**DeepMind**和**Meta**。Neil是该领域顶尖的AI研究员之一，也是**语音AI**向**实时原生音频智能**快速演进的关键架构师。这次对话将深入探讨关于**语音AI**你需要知道的一切，我们将以非常易懂的方式探索许多关键概念，并讨论许多有趣的话题，包括为什么**语音AI**专家如此之少，构建原生音频模型的巨大挑战，以及**自主语音智能体**的崛起。请享受这次精彩且富有教育意义的与**Neil Zeghidour**的对话。

<details>
<summary>Original English</summary>

**Matt**: Hi, I'm Matt from First Mark. Welcome to the Matt podcast. Voice AI is having a big moment. For years, the field was stuck in the uncanny valley, lagging well behind other AI modalities, robotic, slow, and frustrating. But in the last 18 months, everything has started to change. My guest today is Neil Zegidore, CEO of Gradium AI and formerly of Deep Mind and Meta. Neil is one of the very top AI researchers in the field and a key architect of the rapid evolution of voice AI towards real-time native audio intelligence. This conversation is a deep dive into everything you need to know about VoiceAI, where we explore many key concepts in a very accessible way and discuss plenty of fun stuff, including why Voice AI has so few experts, the massive challenge of building native audio models, and the rise of autonomous voice agents. Please enjoy this terrific and very educational conversation with Neil Ziggor.

</details>

**Matt**: 嘿，Neil，欢迎。

<details>
<summary>Original English</summary>

**Matt**: Hey Neil, welcome.

</details>

**Neil Zeghidour**: 嘿，谢谢邀请我。业界很多人都说**语音AI**正迎来它的重要时刻。当然，有很多活动，也有很多融资。从你的角度来看，你在**DeepMind**、**Meta**以及现在的**Gradium**这个领域工作多年了。**语音AI**真的迎来它的重要时刻了吗，还是我们仍处于早期？

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Hey, thanks for having me. So a lot of people in the industry are saying that voice AI is having its big moment. There's certainly a lot of activity. There's a lot of funding rounds from your perspective. So you've been in this field for many years now at Deep Mind Meta now Gradium. Is voice indeed having its big moment or are we still early?

</details>

**Neil Zeghidour**: 我认为，**语音AI**既处于一个重要时刻，我们也仍处于早期。它之所以重要，是因为AI模型在各个方面都有进展，尤其在语音领域，过去几年，特别是在最近两年，延迟、自然度和准确性方面取得了巨大的进步。同时，文本模型已经演变为我们现在所说的**智能体**，它们不仅是文本模型，还能执行动作、处理数据、访问信息等等。现在，当你将两者结合起来，你就可以拥有**语音接口**，同时解决复杂问题。所以我认为现在是一个重要时刻，因为这是第一次，与AI在电话中交谈实际上可以变得愉快，甚至比与人交谈更方便，因为你可以在白天或晚上的任何时间打电话，而且互动效果很好，听起来很自然，延迟也很低，等等。所以，它肯定正经历一个重要时刻，因为我认为它现在可以在比以前更多的用例中使用。但它仍处于早期阶段，因为它仍然相当实验性。所以，任何使用最先进语音智能体的人，如果将其与12年前的电影《**Her**》进行比较，你会发现仍然存在明显的差距，而且目前还有很多问题完全没有解决。特别是，当你每次观看语音智能体的演示时，你会发现那是一个人在安静的房间里对着电话说话。所以，当有人在工厂中央对着机器人大喊，而机器人能理解发生了什么以及谁在和它说话的那一天，我们才会真正到达那个阶段，而我们现在还远远没有达到。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: I think it's both having a big moment and we are still early. It's having a big moment because there is progress all around AI models and in voice, for example, the progress in latency, naturalness, accuracy have been really, really huge in the past years, in particular in the two last years. And at the same time, text models have evolved into what we now call agents, which are not only text models, but they can actually make actions and manipulate data, access information, and so on and so forth. And now when you bring both together, you can have voice interfaces that at the same time are going to solve complex problems. And so I think there is a moment now because for the first time it's actually can be enjoyable and even more convenient to talk to an AI on the phone than talking to a human because you can call any time of the day or night and the interaction is working pretty well and it sounds really nice and the latency is low and so on and so forth. So it's definitely having a moment because I think in a way it's now it can be used in much more use cases than it used to. But it's still early because it's still quite experimental. So anybody who is using even the most advanced voice agents and compare that to the Her movie from 12 years ago, it's obvious the gap that is still remaining and there are so many topics that are completely unaddressed at the moment. In particular, every time you watch the voice agent demo, just realize that it's someone talking to a phone in a quiet room. So the day where you will have someone shouting to a robot in the middle of a factory and having the robot understanding what's happening and who's talking to them, that will be like we'll be there and we are not there at all.

</details>

**Matt**: 嗯。我们稍后会深入探讨一些技术细节，但从宏观层面看，为什么**语音AI**一直是发展最不充分的模态？显然，文本AI、图像AI和视频AI都取得了非凡的进展，但语音似乎在进步方面一直是个“穷亲戚”。这是为什么？

<details>
<summary>Original English</summary>

**Matt**: Mhm. So we'll get into some of the technical details in a minute but at a high level why has voice AI being I guess the most underdeveloped modality. There's been obviously extraordinary progress on text AI and then image AI and then video AI, but it seems that voice has been a little bit the the the poor parents in terms of progress. Why is that?

</details>

### 语音AI发展滞后的原因

**Neil Zeghidour**: 我不想对我的同行——**语音科学家**们——太刻薄，但从历史上看，出于某种原因，语音并没有吸引到**机器学习**领域的远见者。如果你看看会议的动态，如果你提出一种新的方法，比如基础算法，并希望它能在享有声望的场所被接受，你必须有一个应用，要么在计算机视觉（比如图像分类），要么在NLP。如果你在语音领域做，你就会被拒绝，因为这就像“太语音了”。同时，语音会议的声望也远低于计算机视觉或NLP。所以，老实说，我真的不知道为什么。因为当你深入了解细节时，**深度学习**的第一个巨大成功，大家都知道2012年的**AlexNet**模型，当时**深度学习**模型首次在图像分类上超越了所有其他替代方案。但实际上，**深度学习**真正第一个巨大成功是**语音识别**，那是**Geoffrey Hinton**本人在2007年或2008年完成的工作，比**AlexNet**早得多。所以，我认为它就是没有那么有声望，因此没有吸引到很多可以做出重大贡献的人。然后发生了一件非常好的事情，算法围绕着**Transformer**和**LLM**s（大型语言模型）出现了某种融合，所以现在无论你关注什么任务或模态，你总是看到相同的技术。然后也因此，不同模态之间的相似性使得进展更多。特别是，我和我的团队所做出的贡献，就是从视觉和NLP的成功中汲取大量灵感，并直接应用于语音。但这仍然很有趣，因为在某种程度上，能够训练出有竞争力的语音模型的人比文本或视觉领域的人要少得多。所以，我的意思是，这是一个很好的位置，因为很少有人真正深入研究这个主题。而且这是一个非常具有挑战性的领域，因为它理想情况下，如果你想解决问题，你需要理解**机器学习**、**信号处理**（这是一个完全不同的文献领域，围绕着电信、音频压缩等），以及**心理学**（不是认知心理学，而是**心理声学**，即听觉如何工作，人类如何产生语音）。所以，当你把所有这些结合起来，你才能做出有竞争力的模型，但这需要非常广泛的专业知识，涵盖非常不同的领域。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: I don't want to be mean to my people, the speech scientists, but historically, for some reason, voice did not attract the visionaries in machine learning. So even if you looked at the dynamics in conferences, if you proposed a new method, like fundamental algorithm, and you wanted it to be accepted in a prestigious venue, you had to have an application either in computer vision, like image classification, or NLP. If you did it in speech, you will get rejected because it was like "too speech." And at the same time, the prestige of speech conferences used to be much lower than that of computer vision or NLP. So honestly, I don't really know why, because when you look at the details, the first big success of deep learning, everybody knows the AlexNet model in 2012, where for the first time you had a deep learning model outperforming every single alternative on image classification. But actually, the really first big success in deep learning was speech recognition with work from Geoffrey Hinton himself. It was in I think 2007 or 2008. So way, way before. And so I think it's, you know, it was just not as prestigious and so it wouldn't attract a lot of people that could have made significant contributions, I would say. And then what happened and was very nice is there was kind of a convergence of algorithms around transformers and LLMs so that now pretty much regardless of the task or modality you are looking at, you're always looking at the same technology. And there started to be much more progress also thanks to now the similarity between as different modalities because in particular what I contributed to with my team was to take a lot of inspiration from successes in vision and NLP and apply them directly to speech. But it's still interesting because in a way, there are way fewer people who can train a competitive speech model than in text or in vision. So I mean it's a good position to be in because it's, you know, very few people have really gone into like the depth of this topic. And it's one that is very challenging because it's bringing ideally if you want to solve the problems you need to understand machine learning, signal processing that is much more, you know, completely different literature around telecommunication, audio compression, and so on along with psychology and not like cognitive psychology but psychoacoustics how does the and hearing works, how does speech production works in humans, you know, so all of these when you bring them together, you can make competitive models, but it requires kind of a very wide scope of expertise in very different domains.

</details>

**Matt**: 太棒了。用数字来说，你认为世界上有多少人拥有这种专业知识？我们是在谈论100人、500人还是10人？

<details>
<summary>Original English</summary>

**Matt**: Fascinating. To put it in numbers, how many would you say people there are in the world with that expertise? Are we talking about 100, 500, 10?

</details>

**Neil Zeghidour**: 介于10到100之间，不，我会说50人。我不知道，很难说，但我想确实很少。真正有意义的、推动领域前进的贡献都是由非常小的团队做出的，我认为这也是它的魅力所在。所以，**AI**我认为总体上是一个个体可以产生不成比例影响的领域，因为你可以自己做很多事情。你可以访问计算资源和数据集，这非常庞大。特别是在语音领域，由于所需的计算资源要低得多，而且数据也是如此，所以少数个体就可以做出完全改变大规模应用的东西。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Between 10 and 100, no, I would say 50. I don't know. It's hard to say but yeah I think it's very few and really meaningful contributions that have pushed the field forward have been made by very small groups of people and I think that's also what's nice. So AI I think in general is one field where individuals can have a disproportionate impact because you know the amount of things you can you can do by yourself. You have access to to compute and and data sets is huge and in voice in particular since the required compute is much lower and is that the same for data really a few individuals can make stuff that is completely you know just changing applications at very large scales.

</details>

### 语音AI的终极目标

**Matt**: 太棒了。你刚才提到了《**Her**》，它是任何关于语音对话的个体参考。语音领域正在努力实现的终极成功是什么？是超低延迟的表达能力吗？那是什么？

<details>
<summary>Original English</summary>

**Matt**: Great. So you mentioned Her a minute ago which is the individual reference for any conversation about voice. What is the ultimate success in voice that the field is working towards? Is that super low latency expressiveness? What what is what is great?

</details>

**Neil Zeghidour**: 延迟，延迟只有在回合制对话中才有意义，因为延迟的定义是两个回合之间的时间。我们所贡献的一件事是完全摆脱了说话者回合，我们称之为**全双工对话**。所以，它的理念是始终在听，始终在说，当它不说话时，它只是在产生沉默，但它始终在线。在这种情况下，就不再有真正的延迟了。因为模型基本上可以随时说话，它可以打断你，你也可以打断它，这使得对话非常自然。然后，自然度不仅包括节奏方面的动态，比如模型何时可以加入对话，何时应该保持安静，这是一个动态问题。然后是**情感**。所以，AI表达的情感是自然的，也是恰当的。如果你开始感到足够自信，开始分享让你不开心、悲伤或痛苦的事情，它不会说“哦，我为你感到抱歉，我们来谈谈吧”。它还会理解你何时感到沮丧，何时感到困惑等等。这已经能使**语音AI**在互动方面极其自然，并尽可能接近人类，这基本上就是我们在电影《**Her**》中看到的一个场景，我讨厌把它作为参考，因为它被过度使用了，很烦人。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So latency, latency is already something that only makes sense if you are in a turnbased conversation because latency then the definition of latency is how much time there is between two turns. One of the thing we contributed doing is getting rid of speaker turns completely with what we call full duplex conversation. So the idea that it's always listening, always speaking and when it's not speaking it's just that it's producing silence but you know it's always on and in that context there is no real latency anymore. So because the model is just basically can talk at any time and it can talk over you and you can talk over it and that makes the conversation really natural. And then naturalness it's not only these dynamics in terms of tempo you know like when the model can jump in the conversation when they should remain quiet there's this dynamics question and then there is emotion and so there is emotion in what the AI expresses it's emotion is natural but also appropriate that if you start feeling confident enough to start sharing about stuff that makes you unhappy or sad or feeling miserable it's not saying Oh, I'm so sorry for you. Let's talk about it. And it will also understand when you're getting upset, when you're getting confused and so on and so forth. This will make already voice AI in terms of interaction extremely natural and the as close as possible to human, which is basically what is one of the things we see in the Her movie, which I hate mentioning as a reference because it's so overused. It's annoying.

</details>

**Matt**: 是的。但同时，每个人都明白我们现在与电影之间的差距。所以，我认为它仍然是一个相关的参考。尽管在语音方面做了这么多工作，但它仍然如此相关，这甚至很有趣。但接下来还会出现其他问题，关于**语音AI**如何融入我们的生活。

<details>
<summary>Original English</summary>

**Matt**: Yeah. But at the same time, everybody understands, you know, the gap between where we are right now and and the movie. So that's I think it's still a relevant one. And it's even interesting how relevant it still is despite the, you know, the fact that there's so much work around voice. But then there will be other questions about how voice is integrated into our lives.

</details>

**Neil Zeghidour**: 所以，你知道，在**语音AI**中存在一些范式，比如**唤醒词检测**。当你使用**Google Home**或**Alexa**时，你有一个唤醒词来启动语音转文本。现在，假设你想与一个始终听你说话的助手一起工作。这样，你就会有一个持续运行的东西，甚至不一定需要唤醒词。所以，所有这些，我认为都将是技术挑战和产品挑战，围绕着它们在哪里，我们如何与它们互动，以及与硬件的连接。所以，我认为对语音作为一个领域来说，一个好兆头是，在我看来，所有新的硬件公司都将语音作为产品的核心。我们看到的所有原型，无论是眼镜、吊坠，还是**Johnny**和**Samman**正在开发的新产品，语音都是产品的核心，并将成为主要的互动方式。所以，所有这些设备都取消了键盘，它们没有屏幕或界面，而语音将是主要的互动方式。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So you know, there are paradigm in in in voice AI such as wake word detection. So you know when you use Google Home or Alexa whatever you know you have a wake word that is going to turn the speech to text on. So now let's say you want to to work with your assistant that is always listening to you. So in a way you would have something that is just running constantly without having even necessarily a wake word. So all of this I think is going to be both technical challenges and product challenges around where do they sit how are we interacting with them the link to the hardware as well. So I think what is a good sign for voice as a field as well is that in my perception all the new hardware companies have voice at the heart of the product. All the prototypes that we see whether it's it's glasses or pendants or you know like the new stuff that Johnny and Samman are working on voice is at the heart of the product and will be the main way of interacting. So all of these devices they got rid of keyboards. they don't really have a like a screen or an interface rather on you know and voice is going to be the one that is the main one.

</details>

### 语音AI的未来愿景

**Matt**: 你对未来有什么愿景？语音将如何融入其中？是语音和文本并存吗？还是主要用于某些特定用例的语音？当然，有一种观点，很多人会说语音很棒，但大多数时候，比如我在办公室，我最不想让别人听到我的对话，因此我不想和机器说话。那么，在未来的愿景中，语音将如何融入？

<details>
<summary>Original English</summary>

**Matt**: What's your vision of the future? Where does voice fit in? Is that a voice and text? Is that primarily voice for certain use cases? And there certainly an argument that you'll hear a lot of people saying voice is great but like most of the time like I'm at the office like the last thing I want is like for people to hear my conversation and therefore I don't want to talk to a machine. So where does voice fit in that vision of the future?

</details>

**Neil Zeghidour**: 例如，我曾经认为语音在编码方面是无关紧要的，因为它从根本上说你不会大声朗读代码，对吧？然而现在，由于编码越来越倾向于**Vibe Coding**，也就是自然语言，所以通过语音来做就很有意义。现在人们正在开发产品，让你能够以比在每个不同窗口中输入命令更高效的方式，向**编码智能体**发送命令。甚至现在通过语音来提示**LLM**s也比打字方便得多。我仍然同意，关于办公室环境会是什么样子，有一个更偏向社交的方面。我不知道，也许我们也会重新思考办公室环境的结构方式。可以肯定的是，现在人们拥有几乎是同事的AI助手。我的意思是，你和任何软件工程师谈论代码的**拟人化**，我觉得这非常有趣。甚至“编码”这个动词，我的意思是，它很快就会变成“与AI对话来编码”。所以这些人，如果通过语音与他们的主要工具互动更方便，那也将促使我们重新思考办公空间。所以，是的，我认为围绕这方面会有很多工作，如果语音成为主要方式，我们自然会找到它们。我的意思是，如果通过语音与AI互动更实用的话。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So for example, I used to think that one obvious application where voice was kind of irrelevant was coding because it's fundamentally you're not going to read code out loud, right? Yet now since coding is going more and more towards vibe coding which is natural language, it makes a lot of sense to do it by speaking. And now people are developing products that allow you to dispatch orders to coding agents in a way that is much more efficient that if you had to type in each different window to each of them even prompting LLMs now is doing by voice is much more convenient rather than typing. I still agree that there is one part which is more social about what the offices environment will look like. I don't know maybe we will just also rethink the way we just structure office environments. What is sure is now people have AI assistants that are almost colleagues, right? I mean you talk to any software engineer the anthropomorphization of code code is I find it extremely funny. It's even the the the verb coding I mean it's going to be coding pretty soon. And so these people you know they will if it's more convenient to interact with their main tool through voice that will justify also rethinking office spaces I guess. So, so yeah, I think there will be work around that and we will naturally find them if if voice becomes the main way. I mean if it's more practical to interact with with AI through through voice.

</details>

### Neil Zeghidour的职业历程

**Matt**: 太有趣了。在我们深入之前，我们来谈谈你，以及你的旅程和公司。我提到了**DeepMind**和**Meta**，现在是**Gradium**和**QAI**。请你带我们回顾一下你的职业生涯和工作。

<details>
<summary>Original English</summary>

**Matt**: Super interesting. Before we go further, let's talk about you a little bit and your journey and the company. So I mentioned deep mind and meta and now gradium and cut in the middle. Just like walk us through your life story and your work.

</details>

**Neil Zeghidour**: 我学的是数学，我的职业生涯始于在**量化金融**领域的一个短期实习。那是在巴黎，对吧？是的，在巴黎。我生在那里，长在那里。实习期间有趣的是，我有机会使用**彭博终端**。我会看到屏幕下方不断滚动的新闻。我当时想，如果我能有一个算法，它能实时阅读这些新闻并比任何人都更快地在市场上建仓，因为它能实时分析新闻。我当时在寻找，但我没有任何相关的关键词。所以我真的在Google上搜索“如何自动分析文本”之类的。然后我找到了**机器学习**，这对我来说就像是顿悟。我决定完全停下来，重新开始学习。我的目标是带着AI和**机器学习**回到金融领域，但我对所有可能性都充满了热情。当时还没有**LLM**s，也并非真正关于**生成式AI**，而是关于医学影像、文本理解、以及很多围绕音频**语音识别**的东西。我找了一个关于**无监督学习**的实习，这已经很酷了，我只是想做。所以我假装对语言充满热情，然后我得到了实习机会。接着**Yann LeCun**在**Facebook 巴黎**开设了实验室，我有机会去面试。所以，有个趣闻，我的编码面试是和**Sumit Chintella**一起进行的，他后来发明了**PyTorch**，现在我想他是Thinking Machines的首席技术官。是的。我当时不知道如何编码，因为我只学过数学，所以他让我实现**K-means**基本算法。我问我是否可以用MATLAB来做，因为我不知道Python，我只知道非常基础的Python。他很好心地让我用MATLAB进行编码面试，我得到了这份工作。现在回想起来，这真是太尴尬了，天哪，谢谢你Sumit。是的，我在那里完成了博士学位，这非常有趣，当时就已经在研究语音了。我一半时间在**Facebook**，一半时间在巴黎的一所大学，在一个研究婴儿语言习得的实验室里。特别是，这个实验室建立的主要观察结果是，人类主要从两个说话者（他们的父母）那里学习语言，在最初的四年里，总共只有几百到一千小时，而且在社会背景之间存在巨大差异，并且没有标注，对吧？因为你在学会阅读之前就学会了说话。这仍然使我们在孩童时期就能很好地进行对话。当时，**语音识别**是使用数十万小时的标注数据进行训练的。现在是数百万小时的标注数据。所以，当时的主题更多是关于**高效学习**，这很有趣，因为那是十年前，但现在仍然非常相关。我想最近有一家新公司获得了大笔融资，就是为了让学习更高效。所以它仍然和以前一样相关。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So I studied in mathematics and I started my career in with a short internship in quantitative finance. And that was in Paris, right? Yes in Paris. And I was born and raised there. And what was interesting during my internship I had access to a Bloomberg, you know, terminal and so I will see the news like the constant news in in the below the screen. You know, I was thinking, what if I could have an algorithm that just read this news and take positions on the market faster than anyone because it was just able to analyze the news live. And I was looking, but I had no keywords about that, right? So I literally Googled how can I analyze text automatically or whatever. And I found machine learning and I, you know, it was a epiphany. Decided to completely stop, started studying again. My goal was to go back to finance with AI, you know, and machine learning but I got passionate about all the possibilities there was around. So back then there were no LLMs and it was not really about generative AI it was about medical imaging, text understanding, a lot of things around audio speech recognition obviously and I looked for for an internship which was about unsupervised learning which was already pretty cool and I just wanted to do it and so I pretended that was passionate about language and I got the internship and then Yanluk opened Facebook Paris and was able to interview. So for the anecdote, I did my coding interview with Sumit Chintella who then invented PyTorch and now I think he's the CTO of Thinking Machines. Yep. And so I didn't know how to code because I I had only studied mathematics and so he asked me to implement C means basic algorithm and I asked if I could do it in mat lab because I didn't know I didn't even know Python I knew like very basics Python and he was kind enough to let me do my coding interview in mat lab and I got the job which when I think about it it's so cringe because oh my god thank you sumit but and yeah I did my PhD there it was very interesting was already on speech and I was spending half my time at Facebook and all my half my time at economy in Paris in a lab that was studying language acquisition in babies. In particular, the main observation on which the lab was built was that humans learn language from mostly two speakers, their parents with few hundreds to 1,000 hours overall in the first four years with huge variance between social backgrounds and without annotation, right? Because you learn to speak before you learn how to read. And that still makes us already pretty okay for conversation when when we are kids. And you know speech recognition back then was trained with already hundred of thousands of hours of annotated data. Now it's millions of hours annotated annotated data. So the topic was more around efficient learning which is interesting because it was 10 years ago but now is still as relevant as I think there was a a new company that raised a large ground recently to know make learning more efficient. So it's still as relevant as it used to.

</details>

**Matt**: 是的。

<details>
<summary>Original English</summary>

**Matt**: Yep.

</details>

**Neil Zeghidour**: 然后我加入了**Google**。当时很有趣，因为我加入了**Google Brain**从事语音工作，而**Google Brain**几乎没有人从事语音工作。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: And then I joined Google. At that time it was interesting because so I joined working on speech in Google brain and there were almost nobody working on speech in Google brain.

</details>

**Matt**: 那不被认为是一个活跃的研究课题。

<details>
<summary>Original English</summary>

**Matt**: It was not considered vibrant research topic.

</details>

**Neil Zeghidour**: 它更像是一个产品课题。很多人会说：“哦，这已经解决了。”“哦，不，它已经卖出去了，它就是能用。”所以当时就已经这样了。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: It was it was like a product topic. A lot of people were saying oh but it solved you know. Oh no it's sold. It just works. So already back then.

</details>

**Matt**: 是的。

<details>
<summary>Original English</summary>

**Matt**: Yeah.

</details>

**Matt**: 那是哪一年？

<details>
<summary>Original English</summary>

**Matt**: And what year was that?

</details>

**Neil Zeghidour**: 2019年。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: 2019.

</details>

**Matt**: 2019年。

<details>
<summary>Original English</summary>

**Matt**: 2019.

</details>

**Neil Zeghidour**: 然后我找到了一个和我一起工作的人，我们做了很多关于语音的工作。然后我对一个关于**音频压缩**的特定课题很感兴趣。我当时只是没有耐心，想做一种新的压缩格式，而不是MP3。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: And so I found someone to to work with me and we did like a lot of work around speech and then I got excited about a specific topic around compression audio compression. So was just out of patient I wanted to do like a new compression format that would not be MP3.

</details>

**Matt**: 就像HBO的电视剧《**硅谷**》里那样，对吧？

<details>
<summary>Original English</summary>

**Matt**: It's like a Silicon Valley right the HBO show.

</details>

**Neil Zeghidour**: 完全正确。是的，我想用神经网络来做。想法是，它的计算成本会更高，用于压缩和解压缩音频，但这样你就可以更高效地压缩它。这就是我们为**Google Meet**开发的东西，它被称为**SoundStream**，这是我们称之为第一个**神经音频编解码器**。当时我根本没有做生成式建模的计划，我真的不在乎那个。但我当时很孤独，我只是想引诱一些在我身边从事强化学习的人，让他们和我一起研究语音。我开始了一个关于**说话人分离**的项目，这项任务是当你听一段对话时，你必须分辨出谁说了什么，这可能是最不性感的科研课题了。抱歉，我觉得它很迷人，但你无法让人们兴奋起来。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Exactly. And I wanted to do it with nor. The idea was that it will be computationally more expensive to compress and decompress the audio but then you could compress it much more efficiently and that's something we worked on for Google meet and it was called SoundStream that was the first what we call neural audio codec and I had no plan of doing genatic modeling back then really didn't care about that but I was very lonely in a way and I just wanted I was trying to lure some people around me who are working in reinforcement learning. I wanted to get them to work on speech with me. I started a project around diarization, which is a task of you're listening to a conversation and you have to to tell who said what, which is probably the less sexy research topic out there. I'm sorry. I think it's fascinating, but you cannot get people excit I It's very hard to get people excited about.

</details>

**Matt**: 在不那么性感的语音领域里，这是最不性感的。

<details>
<summary>Original English</summary>

**Matt**: within speech, which is not very sexy. This is the less like Yeah. Like the monk project, you know, like very lonely and very Yeah.

</details>

**Neil Zeghidour**: 是的，就像僧侣项目一样，非常孤独。我在这方面并没有很成功地让人们和我一起工作。然后我想，好吧，**生成模型**的好处是，如果我们生成语音，人们会听，然后会说：“哦，这很酷，我的方法生成了语音。”所以老实说，这对我来说是非常机会主义的。我认为这将是一个吸引人们和我一起工作的好方法。所以我们开始了一个项目，当时我们开始看到**语言模型**的成功。那是2021年，远在**ChatGPT**之前，但当时在**Google**内部，已经有一些围绕**语言模型**的成功项目了。我们的想法是，在我们完成了**神经编解码器**的工作之后，现在如果你不将编解码器用于实时通信，而只是用它来压缩音频，那么你就可以。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: I was not very successful with that to to get people to work with me and I thought okay generative models the nice thing that if we generate speech people will listen to it and be oh that's cool my things you know my method has generated speech so honestly it was very opportunistic for me I thought that it will be a good way to get people to work with me and so we started a project and the idea was that we started to see success around language models so it was 2021 way before CH GPT but you know internally Finally at Google there were already quite a few projects that were successful around language models. And the idea was that just after the work we had done on the neural codec. So now if instead of using your codec for real-time communication but you just use it to compress audio now you have.

</details>

**Matt**: 你想快速定义一下什么是编解码器吗？

<details>
<summary>Original English</summary>

**Matt**: you want to define quickly what a codec is.

</details>

**Neil Zeghidour**: 是的。**编解码器**就是压缩-解压缩。所以你有一段音频，对吧？当你在进行Zoom会议时，你想通过网络发送它。你不会发送未压缩的波形文件，因为它太大了。所以你会把它压缩成一个轻得多的文件，然后通过网络发送，接收方可以把它解压缩回音频。它的秘密是基于大量关于人类听觉的科学和知识。我们知道可以从音频中移除哪些信息，这样就不会造成可感知的音质下降。所以，有很多科学研究围绕着你可以从音频中移除哪些特定信息，使其对人类来说几乎和原始音频一样好，尽管你移除了大量信息，从而实现了压缩。主要思想是，我们不使用硬编码规则来做这件事，而是从数据中学习哪些转换可以压缩音频，同时使其对人耳尽可能透明。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yeah. A codec is just a compression decompression. So you have an audio, right? And you want to send it over the network when you're having a Zoom meeting. And you're not going to send the uncompressed wave file because it's too heavy. So you're going to compress it in a much lighter file that you will send over the network and then the receiver can decompress it into back into audio. And the secret is based on a lot of science and knowledge around human hearing. we know what kind of information we can remove from audio so that it won't create a perceived degradation basically. So it's there is a lot of science around what specific information you can remove from from an audio that will make it almost as good for human as the original one despite the fact that you removed a lot of information which allows you to compress. And the main idea was that instead of using hardcoded rules to do that, we would learn from data what are the transformations that allow to compress audio while making it as transparent as possible for for the human ears basically.

</details>

**Neil Zeghidour**: 所以现在我们有了一种极其高效的压缩音频的方法，比MP3或Opus高效得多。在某种程度上，你可以认为它被压缩得如此之小，以至于几乎像文本一样。所以我们做的很简单，就是训练**LLM**来预测这种压缩后的音频，而不是预测文本。然后你就可以做和文本完全相同的事情。你可以进行提示。所以我获取一段瑞士音频，压缩它。我把它传递给**LLM**，让它预测下一段压缩音频。我们意识到，在一周内，我们发明了**即时语音克隆**。所以我们只需几秒钟的音频就可以复制任何声音。是的，这变得极其成功，因为我们拥有**LLM**s的所有优势，我们都可以从中受益。所以**LLM**s擅长建模长上下文，它们扩展性很好。如果你想拥有一个大型模型，你只需扩展小型模型。这听起来很明显，但对于很多架构来说，从一个1亿参数的模型到10亿参数的模型是非常困难的。而对于**Transformer**和**LLM**s来说，这很明显。我还可以深入更多细节，但。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: And so now we had this way of compressing extremely efficiently much more than MP3 or opus an audio. And in a way you could consider that it was so compressed that it was almost like text. And so we just simple thing we did is just train LLM to predict this compressed studio instead of predicting text. And then you could do is the exact same thing you can do with text. You could prompt. So I take Swiss audio compress it. I pass it to LM and I let it predict the next compressed audio and realized we had in one week we had invented instant voice cloning. So we could replicate any voice with a few second of audio. And yes, this became extremely successful because it was all the advantages we had with LLMs, we could benefit. So LM are great at modeling long context. They scale very well. So if you want to have a large model, you just scale the small model. It sounds obvious like that, but for a lot of architectures, it's very difficult to go from a 100 million parameter to a billion parameter model. With transformers and LLMs, it's obvious. And I could go into more details, but in.

</details>

**Matt**: 那个项目叫什么？

<details>
<summary>Original English</summary>

**Matt**: what was that project called?

</details>

**Neil Zeghidour**: **ALM**。然后它产生了音乐，然后产生了**NotebookLM**，那是自动播客，这成为了音频生成的标准框架。有一段时间，有两种家族在“打架”，一种是**扩散模型**，我认为**Eleven Labs**早期就是基于这种模型，而我们是**音频语言模型**家族。我认为今天几乎所有东西都是**音频语言模型**，因为它们是自回归的，所以它们以流式方式运行，天然兼容**实时推理**，这正是目前语音领域的主要话题。所以今天每个人都在使用这项技术。是的，它非常成功，而且极其容易应用于新任务。所以，我们首先在语音上做了它，然后我们收集了一套钢琴演奏数据集，然后我们有了钢琴模型，然后我们做了更通用的音乐，然后我们几乎可以做任何事情。它甚至被一个非营利实验室用于研究人类，抱歉，**动物发声**，试图解码动物的语言，这个项目叫做**地球物种项目**。所以，是的，它就像**LLM**一样灵活。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: ALM. and then it gave music and then it gave notebookm that were the automated podcast and that became the standard framework for audio generation. There were two families that were kind of fighting at one during some time it was diffusion models which I think what 11 labs was based on early on and we were the audio language model family. I think today virtually everything is audio language models because since they are auto regressive so they they run in a in a streaming fashion they are naturally compatible with real-time inference which is kind of the main topic around voice right now and so everybody is using this technology today and yeah so it was a very very successful and and extremely easy to apply to new tasks. So, you know, we did it on speech first and so then we we collected a data set of piano performances and then we had a model for piano and then we did more general music and then we could do pretty much anything. It's even used by a nonprofit lab working on human sorry animal vocalizations to try to to decode the language of of animals called the Earth Species Project. So yeah, you can it's you know as flexible as LLM forex basically.

</details>

**Matt**: 太棒了。太棒了。你在当前语音领域的发展中扮演了极其重要、开创性的角色。那之后你的下一站是什么？

<details>
<summary>Original English</summary>

**Matt**: Amazing. Amazing. you played an incredibly important pioneering role in guess the current state of voice and then what was the next stop after that.

</details>

**Neil Zeghidour**: 当**Google**的**Gemini**项目启动时，我离开了。我当时想创建一个小型的研究环境，让我回想起**FAIR**或**Google Brain**的早期，一个非常小的精英团队，没有干扰。抱歉这么说，没有产品经理，也没有，你知道，就是纯粹的研究科学家，没有电子邮件，就是，你知道，被锁在一个房间里，和机器一起，专注于科学。特别是，我的目标是真正继续从事基础研究，继续推动这个领域前进，并培养学生等等，因为我非常感激能够在一个如此开放的环境中进行研究。对我来说，也很明显，而且在这点上，我100%同意**Yann LeCun**的观点，那就是让AI充满活力，从2012年的图像识别发展到我们今天的状态，是**开放研究**。因为这是一种全球性的合作，每个人都受益于每个人的进步。所以对我来说，为了这个领域本身，保持这种开放是很重要的。所以我们决定在**Erishad**的帮助下创建一个非营利组织。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: at the time where there where Gemini started at at Google that's where that's when I I left so I wanted to to you know to create a small research environment that reminded me of the early days of fair or Google brain so very small team elite no distraction sorry to say that no product manager or no you know like just just research scientists, no emails like just just you know locked in a room with the machines and focused on on science and in particular what the goal for me was really to keep working on fundamental research and keep pushing the field forward and training students and so on because I felt very grateful to have been able to do research in such an open environment. It was also obvious for me that and for this I think I agree 100% with Yan Lukan the fact that what made AI dynamic and get from imaget in 2012 to where we are right now today is open research that's because it's kind of a worldwide collaboration and everybody benefits from the progress of everyone. So that's for for me it was important for the field itself to to keep this going and so we decided to create a nonprofit with the help of of Erishad.

</details>

**Neil Zeghidour**: 所以，有个趣闻，代号是Sphere，因为那是我们讨论项目的那家餐厅的名字。后来我们明白，我们显然不能注册Sphere这个商标。所以我们问**ChatGPT**用几种语言怎么说Sphere，日语中的Sphere是**QAI**。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So for the anecdote the code name was sphere because that's the name of the restaurant where we discuss the project and we then understood that we could never trademark the name sphere obviously. So we just asked a ch GPT for a sphere in a few languages and sphere in Japanese in isqai.

</details>

**Matt**: 而且里面有AI。

<details>
<summary>Original English</summary>

**Matt**: and there was AI in it.

</details>

**Neil Zeghidour**: 所以我们想，好吧，这就是实验室的名字了。所以我们就是这样创建了**QAI**。我联系的第一个人是**Alex Dece**，他现在也是**Gradium**的联合创始人，是我们的首席科学官，因为我们一起在**Facebook**完成了博士学位。然后当我加入**Google**时，我们有点成了竞争对手，因为我们同时在做同样的事情。每次我们见面，我们都不会谈论任何事情，因为就像“你在做什么？”“哦，没什么。”好吧。所以，是的，我们有一个小团队，但在语音方面拥有丰富的专业知识。我们决定继续做那些，再次强调，这是一个机会主义的决定。所以我看了看我们可以在语音方面做些什么。对于一个实验室来说，好吧，我们有1000个GPU，这在2023年看起来很多。但它仍然比最大的实验室至少低一个数量级。所以我们想要一个项目，即使我们只有四个人，也能做出改变。它不应该需要太多的计算资源，而且应该非常创新，这样我们只需通过聪明地工作就能做出改变。所以我们专注于**对话式AI**和**实时对话**，因为我从**Google**内部看到，没有人敢触及这个话题，因为它太具挑战性了。将对话任务转化为**LLM**似乎极其遥远，对吧？人们当时只是在研究**TTS**（文本转语音）和语音转文本。交互式的东西真的还没有出现。所以我们想，好吧，我们来做这个，我们要把它做成**全双工**。不如就做一些真正、真正创新的事情。当时我们不知道的是，**OpenAI**已经研究**语音到语音对话**一段时间了。但在6个月内，我们有一个由四人组成的核心团队，然后是六人，我们能够发布一个从零开始训练的模型，叫做**Mushi**，它至今仍然是唯一的**全双工模型**。你可以和它对话。它有点笨，因为它的智能程度很原始，但它的延迟，一年半之后，仍然是世界上最好的，遥遥领先。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So like okay that's the name of the lab now and so that's how we created QAI. The first person I I reached out to is Alex Dece who is also now co-ounder of of gradium is our chief science officer because we had done our PhD together at Facebook and then when I joined Google we kind of kind of became rivals because you know we are working on the same stuff at the same time and every time we'll meet one another we'll just not talk about anything because like what are you working on? Oh, nothing. Okay. And and yeah, and so so yeah, we had a small team but with big expertise in speech and we decided to to work on the stuff that again it was opportunistic decision that we made. So I looked at, you know, the kind of stuff we could do around voice and for a lab, okay, we had 1,000 GPUs that seemed a lot in 2023. It was still already at least one order of magnitude lower than biggest labs. So we wanted a project where we could do a difference despite the fact that we were four for people. It shouldn't need too much compute and it should be very innovative so that you know just by being smart about what we did we could make a difference. And so we we focused on conversational AI and real-time conversation because I had seen from the inside at Google that nobody's was daring to touch this topic because it was so challenging, you know, and it really seemed extremely far to be able to to cast the task of dialogue into an LM, right? People were just working on like TTS and speech to text. the interactive stuff was really not there yet. So we thought, okay, we're going to work on it and we're going to make it full duplex. Might as well do something really, really innovative. What we didn't know at the time is that OpenAI was already working on a speechtospech conversation for a while. But in 6 months, we have a team of core team of four people and then six, we were able to ship a model train from scratch called Mushi that is still to this day only full duplex model. you can talk to it. It's a bit dumb because it's archaic in terms of intelligence, you know, but the latency is still one year and a half after it's still the best in the world by far.

</details>

**Matt**: 嗯。

<details>
<summary>Original English</summary>

**Matt**: Mhm.

</details>

**Neil Zeghidour**: 我认为非常有趣的是，一个非常小的团队能够做出如此大的改变，因为后来我们发布了第一个**语音到语音翻译系统**，然后是**流式语音转文本**，然后是**流式文本转语音**，我们的模型已被各行各业使用。我们总是很自豪地听到很多大公司都在使用它，很多小公司也在使用它。**Sesame**的**Maya和M演示**就是围绕我们的开源模型构建的。所以，我认为我真正喜欢语音的一点，以及让**Gradium**成为我深信不疑的项目的原因是，它是AI模态之一，一个非常小的团队就能做出改变。我真的看不到拥有极其庞大的组织、大量人员和资源的好处，因为你不需要那么多资源。你不需要10,000个GPU来训练一个语音模型。你不需要1,000人。对我来说，拥有合适的人才，能够快速行动、快速迭代的能力，远远优于拥有一个大型组织的优势。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: And I think what was very interesting was that a very small team could do make such a difference because then we shipped the first speech to speech translation system and then streaming speech to text and then streaming text to speech and our models have been used across all industry. We are always proud to hear that a lot of big companies are using it, a lot of small companies are using it. Maya and M demo from Sesame was built around our open source models. So I think what I really like about voice and what makes Gradium a project I deeply believe in is it's one of the modalities in AI where a very small team can make a difference. You don't I don't really see benefits from having extremely large organization with a lot of people and resources because you don't need that many resources. you know, you're not you don't need 10,000 GPUs to train a speech model. You don't need 1,000 people. The ability to go fast, iterate fast with the right people to me is far superior to the advantage of having a big organization.

</details>

### Gradium AI的商业模式与开放科学

**Matt**: 接下来我们谈谈**Gradium**。所以，**Gradium**是一个商业分拆公司。

<details>
<summary>Original English</summary>

**Matt**: And then let's talk about Gradium. So, Gradium is a commercial spin-off.

</details>

**Neil Zeghidour**: 是的。所以，正如我所说，我们的开源模型非常成功。它们每月仍被下载数百万次。我们开始收到来自各种规模公司的联系，有小公司，也有非常大的公司。他们看到了潜力。有时这有点奇怪，因为我当时在和领导着极其庞大团队的人交谈，而我正在解释我如何能够独自训练出比所有替代方案都更好的**流式语音转文本**。我们做得很好，但同时我们的开源模型仍然有限。它们对我们来说从根本上是原型。它们甚至不是我们真正的贡献。对我们来说，贡献是发明和相关的研究出版物。对我们来说，这些模型就像是论文的附带产物。但人们希望这些模型是多语言的、更高质量的，所有这些构成实际产品的东西。所以我们考虑过将这部分外包，你知道，与另一个团队合作来领导产品等等。老实说，几次互动之后，我意识到除了我们自己，没有人能承担这样的项目。没有人能相信一件事情，如果他们不是从零开始开发的。我们当时正在与一些公司进行谈判，他们想建立合作伙伴关系来改进我们的开源模型，我看了看他们想要的功能，我意识到那是一些我们几天就能完成的事情，而他们已经挣扎了几个月。所以，是的，我的意思是，看起来我们也是最适合做这件事的团队。从个人角度来看，你知道，我有点沉迷于**学术声望**。获得最佳论文奖，所有这些东西，总是很好，但从来都不够。每次我写完一篇论文，我开心两小时，然后我就已经在思考下一个版本了。同时，最终我无法想象，在我的职业生涯结束时，我竟然会从事如此应用性强、如此接近实际生活应用的工作，却不亲自去做，不直接为它们做出贡献，这让我感到有点奇怪。所以，我认为最终，即使在成就方面，学术成功是一回事，但没有什么能比得上让人们在现实世界中使用你的模型所带来的影响。在某种程度上，我认为这在业界已经成为一种普遍现象。也有一件事让我思考，那就是我看了看我最尊敬的所有人。对我来说，最主要的是**Google DeepMind**的**Aon von Art**这位活着的传奇人物。所有这些人，他们都做出了非常好的科学贡献，然后他们决定专注于产品。我认为，我想这可能是因为他们也意识到，学术声望是一回事，但真正产生影响是让你的模型在现实世界中被使用。所以对我来说，这是我们能产生的终极影响。我们仍然在做科学，特别是**QAI**继续做开源和开放科学等等。对我来说，它的好处主要是能够培养下一代AI研究员，并保持这个领域的活力，正如我所说，因为我认为要拥有一个健康、充满活力的AI领域，你需要有科学传播，也就是机构之间的科学交流。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yes. So, as I said, our open source models were very successful. They are still downloaded millions of times a month. And we started having companies reaching out from all sizes, small, very large. They saw the potential. Sometimes it was a bit weird because I was talking to people leading extremely large teams and I was explaining how I could train by myself streaming speech to text that was better than all alternatives. There was something we were doing very well but at the same time our open source models remain limited. They were fundamentally prototypes for us. They were not even the actual contribution for us. The contribution was the invention and the related research publication. For us, it was kind of like a artifact accompanying the paper these models. But people wanted such models to be multilingual, higher quality, you know, all the things that make an actual product. And so we considered kind of outsourcing this part, you know, working with another team that will lead the product and so on. And honestly after a few interactions I realized nobody could carry such a project except us. Nobody can believe in something if they have not developed it from scratch. We were in conversations with companies that wanted to create partnerships to improve our open source models and I would look at the specifications they wanted and I realized it's something we could do in a few days and they had been struggling for months. So yeah, I mean it seems that we are also the best team to to do that. And from a personal point of view, you know, I was kind of addict to academic prestige. having best paper awards, all this stuff, it was always nice, but it was never enough. Every time I did a paper, I was happy for like two hours and then I was already thinking about the next version. And at the same time it felt a bit weird eventually that I could not imagine that at the end of my career I would have worked on something so applied and so close to actual real life applications and not doing them myself you know not contributing to them directly. So I think in the end even in terms of achievement academic success is one thing but nothing is near in terms of impact to the fact of having people using your models for the the real world and in a way I think it's it's something that is it's kind of generalized now in the industry and was also something that made me think is I looked at all the people I respected the most. The main one being to me a living legend Aon von Art from Google deep mind all these guys they they they were making so nice contributions scientifically and then they decided to focus on products and I think it's I want to think it's because they also realize that academic prestige is one thing but making a real impact is having your models being used in the real world and so for me it's it's the ultimate impact we can have we still do science um in particular cutai keeps doing open source and open science and so on. For me the upside about it is mostly to be able to train the next generation of AI researchers and keep the field alive as I said because I think it's to have a healthy and vibrant AI field you need to have scientific dissemination so scientific exchange between institutions.

</details>

**Neil Zeghidour**: 而且，你知道，中国的实验室也在做着卓越的工作，他们某种程度上迫使每个人保持开放，因为否则也会伤害那些不发表论文的实验室里的人的自尊。这也是我非常机会主义的一点。所以我的策略是，如果我们在一个其他人不发表论文的世界里发表论文，他们会非常生气，你知道，我们会声称所有的发明都是我们的，这最终会让他们加入我们。确实，你知道，这有点难，因为有些人他们想在那个酷的地方，酷的事情发生的地方。这不仅仅是关于薪酬等等。现在，我想说，每个在AI领域工作并做得很好的人都会获得良好的经济回报。那么，你还能追求什么呢？**荣誉**也非常重要，它可以是科学上的，也可以是仅仅为自己制造出最好的产品而感到自豪。但我认为这也是一个重要的部分。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and there also you know like the Chinese lab I making a remarkable work and they kind of are forcing everyone to stay open to some extent because otherwise it also hurts the ego I think of of the people who are in the lab that don't publish. That was also something where I was very opportunistic about. So my strategy was like if we publish in a world where the others don't publish they will get so pissed you know of us claiming all the inventions that it will make them join us eventually. And it's true that you know it's kind of hard because some people they they want to be in the in the place that is the cool place where the cool stuff happens. It's not only about composition and so on. It's now it's it's I would say everybody working in AI and doing a good job in AI is going to get good economic outcomes. So then what can you you know glory is also very important and it can be scientific or it can be just being proud that you are making the best products but I think it's also an important part important part. Yeah.

</details>

**Matt**: 太棒了。现在，**Gradium**是一家几个月前成立的实际公司，显然你是AI领域的新进入者，这个领域竞争非常激烈。所以，我认为对于语音领域来说，一个显而易见的问题是，为什么**OpenAI**、**Google**或**Meta**还没有赢得**语音AI**的胜利？我想你可能在一开始就提到了一些原因，但为什么会这样？为什么一家小公司有希望成为领导者？

<details>
<summary>Original English</summary>

**Matt**: Great. Now, Gradium is an actual company that was launched a few months ago and obviously you are a new entrance in the field of AI where there's a tremendous amount of competition. So, I think for for voice in particular like the obvious question is why has OpenAI or Google or MEA not already won Voice AI? And I think you probably alluded to some of the reasons up front, but why why is that? Why why can a small company hope to become the leader?

</details>

**Neil Zeghidour**: 我提到的一点是，如果你拥有合适的团队，它可能非常小，但仍然能产生重大影响。我认为其他论点是，一是**专注**。例如，如果你看大型**多模态模型**，这些能理解图像、生成文本和编写代码的通用模型。你有一个有限的预算，也就是你将适配到模型中的参数数量和数据。当你想要向它们添加语音时，你正在与编码和图像理解等进行竞争。所以你正在处理许多与你想要解决的任务无关的权衡。同时，这些模型太大，无法大规模运行，因为它们只会让每个人在这个过程中亏钱。语音模型要大规模运行，唯一有意义的格式是极其紧凑，这也意味着你训练它们所需的训练资源比训练其他类型模型所需的要少得多。所以资源不像文本模型那样具有挑战性。我认为另一个方面是，在某种程度上，我们不只是尝试制作一个对话产品，而是真正制作**构建模块**，以便人们可以构建产品。所以我们可以制作**Gradium对话助手**，并深入思考它的能力、它能做什么、不能做什么，以及它对人们的用例等等，并希望像**OpenAI**的语音模式一样，它能用于这个任务和那个任务。但用这种方式不可能涵盖所有内容。所以现在，如果我们想涵盖**NPC**（非玩家角色）、视频游戏中的**假体育评论员**、**语言学习应用**、卡通片中烦人的角色、**客户服务代理**等等，那么我们只需制作构建模块。这再次说明，我认为这并不是大公司的DNA，它们不会做这种非常具体的、面向开发者的模型，而不是试图同时解决很多问题。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So one thing I I mentioned was if you have the right team it can be extremely small and still make a significant impact. Other arguments I think is one is focus. So for example, if you look at large multimodel models, right? Like these generic models that understand images and can generate text and can produce code and so on. You have like a limited budget which is a number of parameters and data you're going to fit to your model. When you want to add speech to them, you're fighting with coding and image understanding and so on. So you are playing with a lot of trade-offs that are irrelevant to the task that you want to to solve. And at the same time these models are so large they cannot run at scale because they will just make everyone lose money in the process. The only format that makes sense for speech models to run at scale is to be extremely compact which also means that the training resources you need to train them are much smaller than what you need in a to train other kind of model. So the resources are not as challenging as for text models. I think also another aspect is in a way not trying to just make a conversational product. So really making building blocks so that people can build the product. So we could make the gradium conversational assistant and think a lot about its capabilities and what it can do and what it cannot do and what will be the use cases for people and so on and hope that like the voice mode of open AI it's used for this task and this task and so on. But it's impossible to cover everything with that. And so now if we want to cover NPCs fake sport commentors in in video game and a language learning app and an annoying character in a cartoon and the customer center agent and so on, then we just make the building blocks. And this again is it's not really I think in the DNA of big companies to do this kind of very specific models that are targeted towards developers rather than trying to solve a lot of things at the same time.

</details>

**Matt**: 此外，还有一个方面是，语音也可以而且应该经常在设备上运行，而不是通过API调用到云端。这公平吗？

<details>
<summary>Original English</summary>

**Matt**: And then there's an additional aspect to this which is that voice can also and should be pretty often on device versus an API call to the cloud. Is that is that fair?

</details>

**Neil Zeghidour**: 我认为现在非常具有挑战性的是，如果你想在设备上拥有完整的智能，比如你的完整**对话式AI**在设备上运行。老实说，我认为目前，如果你想让这样的模型有用，我们还没有达到那个阶段。你可以拥有一些可以进行一些闲聊的模型，它会表现得不错。我们也发布了**设备上模型**，但它们在应用方面受到更多限制。例如，我们一年前开始做**设备上语音到语音翻译**，这很有意义，因为当你旅行时，你可能没有在每个国家都能用的数据套餐。所以，如果你想在餐厅点餐之类的，手机上能有这样的功能就很有意义。我认为这是一个特别适合的用例。但现在我们还发布了一个名为**Pocket TTS**的模型，它不仅可以在设备上运行，而且只使用CPU。所以，已经有一些AAA视频游戏的mod，其中的**NPC**可以通过这些语音模型驱动。现在你解锁了一种全新的应用类型，因为**设备上模型**可以实现大规模的个性化内容，这在经济上通过API是不现实的。所以，再次强调，如果你想在这个方向上取得有意义的进展，在语音领域制作小型模型比制作大型模型困难得多。因此，在减小模型尺寸的同时保持质量，这是巨大的挑战。我们的CPU模型在算法方面，是我们目前所知的最前沿技术，它确实是我们迄今为止所做的一切的最新一代。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: I think what is very challenging right now is if you want to have the full intelligence on device like the like your full conversational AI on device. Honestly I would say at this point if you want such a model to be useful we are not there yet right you can have something that can chit chat a bit and it will be decent or we also have shipped models on device but they are much more constrained in terms of applications. So for example, we we started a year ago with a ondevice speech to speech translation which is something that makes a lot of sense because when you're traveling maybe you know you don't have a data plan that is going in every country. So it makes a sense to have something that works on your phone if you want to order at a restaurant or something like that. I think it's a particularly adapted use case. But now we also we released two weeks ago a model called Pocket TTS that not only is on device but CPU only. So there are already mods for AAA video games where the NPCs can be powered through these voice models and now you unlock a completely new kind of of applications because ondevice models allow to do very large scale personalized content that will be economically and not realistic with an API. So again these kind of things is you know if you want to make meaningful progress in that direction making small models in voice is much more difficult than making large models invoice. So keeping the quality while reducing the size of the model that's where the big challenge is and our CPU model in terms of algorithm it's like the cutting edge of what we know you know it's really the latest generation of everything we've been doing so far.

</details>

### 开源与闭源的平衡

**Matt**: 几天前，**阿里巴巴/通义千问**发布了重大公告，他们开源了**通义千问3 TTS**系列，用于语音设计、克隆和生成。你如何看待**Gradium**在你的世界中的开源？它是朋友还是敌人？

<details>
<summary>Original English</summary>

**Matt**: So just a few days ago there was this big announcement by Alibaba/quen that they were open sourcing the Quen 3 TTS family for voice design clone and generation. How do you think about open source in your world as Gradium? Is that a friend? Is that a foe?

</details>

**Neil Zeghidour**: 如果你阅读那篇论文，你会发现我们的名字出现在好几页上。它主要是受**Mushi**架构的启发，现在几乎所有模型，甚至**Mistral**几周前发布的**VTA模型**，也都是基于我们的框架。我认为这真的很有趣，因为它证明了我们做对了一些事情，因为每个人都在基于它们进行构建。同时，我想说这是一个相当大的优势，因为我想说研究论文有两种。有些研究论文旨在尽可能明确和可复现，这是我们做论文时努力做到的。还有一些论文更多地是关于营销，它们主要关注结果和性能，而不是解释底层机制和数据等等。人们围绕我们引入的框架进行构建的好处是，即使他们不提供细节，我们也能推断出细节。所以，在竞争激烈的环境中，我认为这是一个相当大的优势，因为如果人们转向与我们所做完全不同的东西，那会更具挑战性，因为那样我们在阅读他们的论文时就无法推断出任何东西了。现在，当我们阅读这些论文时，所有这些都非常熟悉，同时我们也面临着人们正在面临的所有问题。我们已经面对它们一段时间了，所以我们已经有了变通方法和新版本等等。**QAI**的开源是实验室的最终目标，而**Gradium**的最终目标不是实验室的最终目标。公司的最终目标是制造出超越所有替代方案的具有竞争力的产品。但我认为开源是一种很好的方式，可以允许开发者进行原型设计，了解人们期望什么，想要什么。你知道，它也是一种培养人才的方式。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So if you if you read the paper you will find our our names in several pages. It's mostly inspired from the Mushi architecture like pretty much every model right now even the VTA model that was released by Mistral tweaks ago is also based on on our framework. I think that's really interesting because this proves that there are things that we you know that we do right because everybody is building on them. At the same time, I would say it's quite an advantage because I would say not there are two kinds of research papers. There are research papers that are meant to be as explicit and reproducible as possible which is what we try to do when we do one. And there are some that are more about I would say marketing in the sense that they are mostly focused on the results and the performance rather than explaining the underlying mechanism and the data and so on and so forth. The nice thing of build people building around the frameworks we introduce is that even when they don't give details we can infer the details. So in a way in a competitive landscape I think it's a it's quite an advantage because in a way it would be more challenging if people were transitioning to something completely different from what we've been doing because you know then we would could not infer anything from when reading their papers. Now all of this is very familiar when we read those and at the same time we have all the issues that people are facing. We have been facing them for a while and so we have already workarounds and new versions and so on. Open source at cutout that's like the the end goal of the lab at gradium that's not the end goal of the lab. The end goal of lab is to make of the companies to make competitive products that outperform every alternatives. But open source is I think it's a good way of allowing developers to prototype stuff understanding what people expect what they want. You know it's also a way to train talent.

</details>

**Matt**: 嗯。

<details>
<summary>Original English</summary>

**Matt**: Mh.

</details>

**Neil Zeghidour**: 几天前我们发布了**Hibiki Zero**。所以，**Hibiki**是我们的**语音到语音翻译系统**。现在它是一种新算法，使其延迟更低，语音克隆更好，支持多语言等等。在**QAI**从事该项目的博士生将加入**Gradium**几个月，进行访问博士研究，然后他将重新开始他的博士学业。所以我认为开源和商业资源之间可以建立非常健康的关系。同时，我也不认为它会损害任何防御性，老实说，恰恰相反。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: A few days ago we released the Hibiki Zero. So that's hibiki was our speechtospech translation system. Now it's a new algorithm that makes it even lower latency, better voice cloning, multilingual and so on and so forth. And the PhD student who who was working on that project at Qoutai is joining Gradium for a few months to do visiting PhD and then he will start his PhD again. So I think there are very healthy relations between open source and proource that can be done. At the same time I I don't think it's it hurts any defensibility quite the opposite honestly.

</details>

**Neil Zeghidour**: 而且，我认为它对人才也很有吸引力，因为人们加入我们时，他们知道他们可以从事真正有竞争力的产品，但同时他们可以继续分享模型和更具探索性的研究，并做真正前沿的事情。我认为如果我们想保持领先，我们应该成为一家产品公司，但也要成为一个前沿实验室。而要成为一个前沿实验室，你也需要做基础研究。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and so I think it's it's also for talent it's very attractive because people when they join us they know that they can work on really competitive products but at the same time they can keep sharing models and more exploratory research and do really frontier stuff and I think if we want to stay at the cutting edge We should be a product company but also be a frontier lab and being a frontier lab you need to do fundamental research too.

</details>

**Matt**: 语音领域的开源和闭源之间存在什么差距？显然，在文本领域，存在猫捉老鼠的游戏，商业实验室似乎总是遥遥领先于开源。语音AI领域也是如此吗？

<details>
<summary>Original English</summary>

**Matt**: Y to what's the gap between open source and closed source in voice obviously in text there is like this cat and mouse game and the it seems that the commercial labs are constantly like pretty far ahead of the open source. Is that the same thing in voice AI?

</details>

**Neil Zeghidour**: 语音领域有趣的是，现在我认为一个高中生就可以做出不错的东西，但人们想要的是**最后一公里**，而**最后一公里**极其困难。**最后一公里**是指正确发音所有困难的案例，拥有不仅低而且鲁棒的延迟，几乎零停机时间，以及能够克隆各种口音的声音等等。所有这些困难的案例，对我来说，找到解决它们的动力唯一方式就是因为那是你的业务。因为否则，如果你看**TTS**的基准测试，它是**LibriSpeech**，它有很多书，其中很多来自**Dstyfki**，所以它更多是关于你是否会在一个俄语名字中漏掉一个“i”或一个“y”，它不评估你是否能读出电话号码、电子邮件地址和URL等等。所以，当你优化这些基准时，你会失去很多实际的现实世界案例。是的。所以，我认为主要区别在于，只有当你想要在产品上具有竞争力时，才会有动力去处理最精细的细节。这不仅仅是关于模型，对吧？运行这些模型的基础设施规模化也非常重要。我认为特别是在API商业模式中，你的利润主要取决于你的**推理效率**。所以，我特别幸运，我的团队中有一位联合创始人**Law**，他在**量化金融**领域工作了几年，主要在**Jane Street**，现在我们有更多来自**量化金融**领域的人。这些人对**高效推理**充满热情，那是他们的“面包和黄油”，因为在金融领域，比如**高频交易**，那是生存的唯一方式。工程挑战非常巨大，我认为一个在工程方面也有团队，而不仅仅是训练模型的团队，会产生巨大的影响。现在，如果我们谈论**设备上推理**，那就更复杂了，对吧？如果你想让一个模型在所有Android和iPhone上运行，那是一个巨大的工程挑战。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So what is interesting in a in a in voice is now I think a high school student could make something that is decent but then what people want is the last mile and the last mile is extremely difficult and the last mile is pronouncing well all the difficult cases is having a latency that not only is low but is robust and almost zero downtime and you know being able to clone voices regardless of accents and so on. all all these hard cases for me the only way to find the energy to solve them is because that's your business you know because otherwise if you look at benchmarks like the benchmarks for TTS it's a libri speech so it's it's books a lot of them from dstyfki so it's it's it's more about whether you are going to miss a i or a y in a in a Russian name or you know it doesn't evaluate can you pronounce phone numbers and email addresses and URLs and all this stuff. So, so when you optimize for the bench these benchmarks, you lose a lot of the actual real world cases. Yeah. So, I think the main difference is the incentive to do things really with the finest details only makes sense for when you want to be competitive in product. It's not only about the models, right? The infrastructure to to run these models at scale is extremely important. I think particularly in a API business model your margins mostly depend from the efficiency of your inference and so in particular I'm very lucky to have in my team one of my co-ounders law who did several years in you know he did all this car in quantitative finance mostly at Jane Street and now we have more people coming from quantitative finance and these people they are really passionate about efficient inference that's their bread and butter you know because in financial like in high frequency trading that's kind that's the only way to exist and and the engineering challenges are really significant and I think a team in engineering as well and not just like training models makes a huge difference and where now if we're talking then about on device inference that's even more complex right if you want a model to run on all Android and iPhone and so on you know that's a big engineering challenge.

</details>

### 语音AI的评估与主观性

**Matt**: 你刚才提到了**基准测试**，这对于语音和视频以及图像来说，似乎是一个非常有趣的问题：你如何证明你的技术比下一个提供商更好？因为其中一些似乎有点围绕“感觉”展开，对吧？比如当你接收到**语音AI**时你的感受。

<details>
<summary>Original English</summary>

**Matt**: you mentioned benchmarks a minute ago and that seems to A really interesting question for voice and video as well and images is how do you make a case that your technology is better than the next provider because some of it seems to be a little bit around vibes right like how you feel when you're on the receiving end of a voice AI.

</details>

**Neil Zeghidour**: 有一件事很清楚，那就是你只能相信人类的判断。人们曾试图对人类判断进行客观代理，比如一个神经网络听一段音频并给出评分。这很糟糕，很多人尝试过，它在受限设置下有效，但在真实音频上完全无效，完全崩溃。所以我们不相信除了我们耳朵之外的任何东西。所以我们在内部做了很多**盲测**。我们在外部也做了很多**盲测**。所以我们一直在使用人类判断。我们做出的每一个决定都基于人类的听觉。我们根本不相信指标。所以，音频的质量从根本上说是主观体验。但有些事情会得到广泛认同，比如语调和节奏是否自然。很多人会同意这一点。一个声音是否好听？没有人会同意这一点。所以，对我来说，声称拥有最佳解决方案的唯一方法是拥有最大、最多样化的声音目录，供人们选择，因为你知道，人们会喜欢什么样的声音，这真的因人而异。我过去在**Google**做音乐时就遇到过这种情况。我们第一次制作了文本到音乐的功能。你可以输入“死亡金属与马林巴琴”之类的，然后你就会得到死亡金属与马林巴琴的音乐。所以我们建立了一个网站，人们可以在上面做这些事情。同时，我们已经计划第一次在音乐上进行**RLHF**（通过人类反馈进行强化学习）。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: One things that is that is clear is that you can only trust human judgment. People have tried to make objective proxies of human judgment like that would be a neural network that listens to an audio and gives it a grade. it sucks like so many people try and it works on their constrained setting and on real audio it doesn't work at all and completely breaks. So we don't trust anything about you know but our ears. So we do a lot of blind test internally. We do a lot of blind test externally. So we are working with human judgment constantly. So every single decision we make is based on human listening. We don't trust metrics at all. So it's fundamentally subjective experience the quality of audio. But there are some things that are going to be widely shared rather like the the pro the tone and the rhythm are natural or not. A lot of people would agree on that. Is a voice nice or not? Nobody agrees on that. And so then the only way for me to claim to have the best solution is to have the largest catalog and most diverse set of voices that people can pick because then you know it's the kind of what voice are people going to like this really depends on between people. I had faced that in the past when we did music at Google. So for the first time we made you know text to music. So you could type like death metal with Marima or whatever and you get death metal with MIMA and and so we put like some like a website online where people could do this stuff and at the same time we were already planning to do for the first time a LHF so reinforcement learning from human feedback on music.

</details>

**Neil Zeghidour**: 我们当时设计的是，人们可以给一个奖杯。我当时计划这样做，因为我想第一次将人类整合到音乐生成循环中，因为我认为从科学角度来看，这将是巨大的。有趣的是，我们为此写了一篇论文，叫做**MusicLM**，它相当不错，但结果并不是特别令人信服。然后我们所做的是，我们自己进行了判断，所以，你知道，我和我的同事们，我们拿了大约10到20对音频，每次我们选择我们偏好的那个，结果人们之间零协议。所以，当有如此多的主观性时，算法不可能学习人类的偏好。所以你唯一能做的就是让每个用户都能更好地定制它，因为没有什么能始终如一地取悦每个用户。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and so what we had designed is people could give a so there will be two generations every time and people could give a trophy. I had planned that because you know I wanted for the first time to have integrate humans in the loop of music generation because I think you know scientifically that will be really huge and what was interesting is that so we made a a paper about that called musicl and it was quite nice but the results were not extremely convincing and then what we did is that we just did judgements judgment ourselves so you know with people with my colleagues we took like I don't know 10 or 20 pairs of audio and each time we choose our preferred one and there was zero agreement between people. So there is no way you know like an algorithm is going to learn human preferences when there is so much subjectivity. So the only thing you can make is make it more steable for each user to be able to customize it because there is nothing that is going to you know please every user consistently. Mhm.

</details>

**Matt**: 那么下一个显而易见的问题是，如果大家无法就某个模型是否优于另一个模型达成一致，那么所有的模型是否或多或少都一样，因此整个**语音AI模型**行业是否都趋于**商品化**了？

<details>
<summary>Original English</summary>

**Matt**: The obvious next question is if if nobody can agree on whether this model is better than that model, then aren't all the models more or less the same and therefore the entire voice AI model industry is sort of like commoditized all the models being the same.

</details>

**Neil Zeghidour**: 我认为人们已经在谈论**TTS**了，对吧？它比**语音AI**受到的限制更多。所以在**文本转语音**中，我的意思是，有关于准确性和延迟的事实指标，然后还有更多关于表达能力等主观的东西，但你可以再次通过使其更具可控性、更具可定制性等等来真正做出改变。所以我认为，最好的**TTS**，最可控的，在表达方面最智能的，还没有摆在我们面前。目前还没有任何东西接近它。然后还有所有非**TTS**的东西。你现在看看**转录**，再次，如果很多人都在说话怎么办？我之前谈到**说话人分离**是史上最不性感的问题。同时，它是一个极其有用的问题，你看看错误率，它们非常糟糕。我的意思是，在困难的情况下，比如有很多人同时说话的播客，它仍然完全不起作用。**全双工**，我们知道我们一年半前做了**Mushi**，但至今没有人把它做成产品。有太多东西现在根本不存在，我认为**商品化**也许有一天会发生，但老实说，我们离它还很远。而且在质量和能力方面的差距，你知道，要使其像人类的语音产生和语音理解在复杂环境中一样强大，然后即使你达到了这一点，也总是会有挑战，关于如何在更小的模型上获得相同的性能。因为那样，一个可以在游戏GPU或iPhone上运行的**全双工智能语音AI**，祝你好运，你知道，那可不容易。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: I think then people talk about TTS already, right? Which is much more constrained than voice AI. So in text to speech I mean there are factual metrics about accuracy and latency and then there are more um subjective things around expressivity and so on but you can again you can really make a difference by making it more controllable more customizable and so on and so forth. So I don't think that it's clear that the best TTS the most controllable the most the most smart in terms of expression is in front of us. nothing is is close to it yet and then there is everything that is not TTS. you look at transcription now again what what if a lot of people are are speaking. So I was talking about theization as the le least sexy problem ever. At the same time it's it's a extremely useful problem and you look at the error rates and they are very bad. I mean it's still just not working in difficult cases where you have a podcast with a lot of people talking at the same time just completely breaks. full duplex we know we did machine a year and a half ago still nobody has made it into a product that there are so many things that are just not existing today that I think the the communityization maybe it will happen someday but we are very very far from it honestly and the gap in you know there is already bridging the gap in quality and abilities you know to make that as powerful as human production of speech and understanding of speech in complex environments and so on and then Even if you reach this point, there will always be challenging about getting the same performance with smaller models because then again like a full duplex smart voice AI that can run on a on a gamer GPU or on a on an iPhone. Good luck, you know, like that's okay.

</details>

### 语音AI的技术细节：级联系统与全双工

**Matt**: 好的。太棒了。我想花点时间谈谈**语音AI**的技术方面。我们已经谈到了一些，也暗示了其他一些，但我想把所有东西整合起来会很好。所以，就你描述的**语音到语音模型**的根本创新而言，你能否为我们比较和对比一下旧的方法，我认为是**级联系统**，与新一代模型？

<details>
<summary>Original English</summary>

**Matt**: Awesome. I'd love to spend a little bit of time on the technical aspects of Voice AI. So we we talked about some of them, alluded to others, but I think it'd be nice to bring everything together. So in terms of the fundamental innovation that you described around speechtoech models, c can you for us compare and contrast like the the old way which I believe is the cascade versus this new generation of models. How does that.

</details>

**Neil Zeghidour**: **级联系统**虽然是旧方法，但实际上也相当新。所以旧方法是没有**LLM**的。你想到，我们谈论的旧方法就像**Alexa**等等。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: cascaded system which is the old way but is actually pretty new. So like the old way is without LM you know. you think about so we talk you know the old so the old way is like Alexa and so on it's.

</details>

**Matt**: 两年前，在过去的两年前。

<details>
<summary>Original English</summary>

**Matt**: back two years ago back in the day two years ago.

</details>

**Neil Zeghidour**: 旧方法是使用**自然语言理解**，通过解析和非常有限的词汇表。但**级联系统**的思路是，你基本上只是拿一个**LLM**，然后用语音输入和语音输出将其包装起来。所以你有了**流式转录**和**流式文本转语音**。这样做的好处是你可以插入**LLM**，并且可以通过提示来定制它的行为，就像你对文本模型所做的那样。一个主要的限制是整个系统的**延迟**，因为你正在级联运行三个模型，每个模型都会增加整体交互的延迟。而且，通过文本的瓶颈，你会丢失我们称之为**副语言信息**的东西，这是我们在说话时除了我们所说的内容之外传达的所有信息。这包括情感状态、讽刺、谎言等等。你知道，很多信息被传达出来，而这些信息并不在所说的内容中。我特别鼓励人们关注每隔几年**InterSpeech**（主要的语音会议之一）都会组织一次**副语言挑战赛**，挑战内容每次都比较随机，比如谎言检测就是其中之一。但你还需要尝试识别说话者的父母的籍贯，或者有一个挑战是关于人们边吃东西边说话，你需要识别他们在吃什么。所以，无论如何，当我们说话时，有很多关于我们的信息被传达出来，而这些信息通过文本会丢失。显然，你写的东西可能不是最相关的，但在客户服务环境中，理解你何时感到迷失或恼怒等等，对于将对话恢复到良好状态极其重要。有时从文本中就很明显，比如如果AI说“去死吧”，那可能他们很生气。但有时并不那么明显，这种线索可能很有帮助。所以，解决所有这些问题的唯一方法，我的意思是，一种方法是**语音到语音**，而在此之上，**全双工**解决了我认为目前**语音AI**最糟糕的部分。我从心底里讨厌它，那就是**轮流对话**。在任何关于传统网络或图像分类的入门课程中，总会有一个类比，你可以制定规则来判断一张图片是在早上还是晚上拍摄的，仅仅基于颜色，对吧？你可以只看颜色值并制定一个手工规则。但现在，如果你想识别它是猫还是狗，你无法制定识别所有猫狗形状和所有角度的规则。所以这就是我们做**机器学习**的原因，对吧？当你无法制定规则时，你就从数据中学习。而在**轮流对话**中，我们又回到了手工规则的古老时代，这很荒谬。就像你有一个叫做**语音活动检测算法**的算法，它只是判断是否沉默，如果沉默超过X毫秒，然后这个规则和那个规则，那么就是一次打断，但如果发生这种情况，它就不是一次打断。所以你有一层又一层的规则来决定模型是否应该说话，这使得，我的意思是，你知道，现在所有使用**级联系统**的人都知道，当你与AI对话时，你需要有纪律，你需要适应它的流程，否则它就会迷失、困惑并打断，等等。这非常令人恼火。**Mushi**，人们今天仍然可以和它对话，它不是很强大，但它的互动质量是无与伦比的，因为你真的可以花五秒钟思考你要说什么，然后再说话，模型不会迷失，它会非常灵活。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: cascaded system which is the old way but is actually pretty new. So like the old way is without LM you know. you think about so we talk you know the old so the old way is like Alexa and so on it's back two years ago. The old way is natural language understanding with parsing with very limited vocabularies and so on but the cascaded ID is you basically just take a LLM and and you wrap it into a speech input and speech output so you have like streaming transcription and streaming text to speech the nice thing about that is you can plug in LM and you can customize its behavior through its prompt like you would do with a text model. A main limitation is around first latency of the whole thing because you're running three model in a cascade and each of them is going to add to the overall latency of the interaction and by going through the bottleneck of text you lose what we call paralinguistic information which is all the information we convey when we speak on top of what we say. to that emotional states irony lying is one you know like a lot you know it's you know a lot of information is conveyed that is not um that is not in what to say particular I I encourage people to to look at the every few years inter speech one of the main speech conferences organizes a paralinguistic challenge with challenges that are more random every time like so li lying detection is one but then you have trying to recognize is the the origin of the parent of someone from them speaking or there was one about people are speaking while eating and you had to recognize what they are eating. So you know anyway when we speak there are a lot of information that come about us and this is lost through so what you're writing obviously is maybe not the most like relevant one but understanding in the customer care context understanding that you're getting lost or annoyed and so on it's extremely important to be able to recover the conversation into a good state. Sometimes it's obvious from the text like if if the AI says go to hell yeah probably they're upset. but sometimes it's not that that obvious in that kind of cues can be can be helpful and so that's the only way I mean one way to address all of that all together is piece to speech and full duplex on top of that addresses what I think today is the worst part of voice AI I hate it from the bottom of my heart it's turn taking in any introductory course to a conventional network or image classification there is always this analogy that that is made that you can make rule to tell whether an image is shot in the morning or night just based on colors, right? You can just look at colors values and make a handmade rule. But now if you want to recognize whether it's a cat or a dog, you cannot make rules that are recognize all the shapes of cats and dogs and all the angles and so on and so forth. So that's why we do machine learning, right? You just learn from the data when you cannot make the rules. With turn taking, we are back at the archaic era of handmade rules which is ridiculous. It's like you have an algorithm called the voice activity detection algorithm that just says whether it's silent or not and if it's silent more than xund of millconds and then this rule and this rule and this rule then it's an interruption but if this happened it's not an interruption and and so you have rules on top of rules on top of rules to decide whether the model should talk or not and that makes it so that I mean you know that everybody who's talking with cascaded systems right now is you need discipline when you talk to AI you need to adapt to its flow otherwise it's it gets lost and gets confused and interrupts and so on and this is extremely annoying mushy again people can can talk to it today it's not really powerful but the the quality of the interaction is unmatched in the sense that you can really take five seconds to think about what you're going to say and then talk and the model won't be lost it will just you know be extremely flexible.

</details>

**Neil Zeghidour**: 我们所做的，是一个极其简单的事情。我们采用了**音频语言模型**，而不是让它建模一个令牌流，我们称之为**多流**，只是两个令牌流，一个用于用户，一个用于AI，两者可以同时活跃，不再有轮流对话。你只需用立体声数据训练它，人们在电话中交谈，左声道是一个人，右声道是另一个人，你的模型同时建模两者。然后你扮演左声道的角色，AI扮演右声道的角色，模型就会学习如何像人类在电话中一样处理对话。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and and what we did is it was extremely simple thing. So we took like the audio language model instead of having it modeling one stream of tokens we called it multiream just two stream of tokens one for the user one for the AI and both can be active at the same time and there is no turn taking anymore and you just train it on stereo data people talking on the phone and you have like one person on the left channel and one on the right and your model models both at the same time and then you play the the role of left channel and the AI plays the ro the role of right channel and the model will learn how to handle a conversation like humans on the phone.

</details>

**Matt**: 嗯。

<details>
<summary>Original English</summary>

**Matt**: Mhm.

</details>

**Neil Zeghidour**: 所以当我们发布**Mushi**公告时，有一个有趣的早期演示，我们训练模型使用了**FISH数据集**。那是在90年代末美国录制的电话对话，你可以真的给90年代末打个电话，它会提到**萨达姆·侯赛因**和**雅克·希拉克**，谈论很多当时的政治话题。这非常奇怪，因为你正在和一个每次都是新的人说话，他们说自己来自亚利桑那州，你可以谈论任何事情，他们会告诉你他们的工作等等。所以这是一种超自然的体验，非常有趣。我认为最终，我们不可能在未来仍然坚持**轮流对话**。所以对我们来说，最终目标显然是**多路复用**。这始终是我们的动力。目前我们做的是**级联系统**，因为市场现在就是这样。人们仍然在迭代底层的文本模型，他们想在工具使用等方面使用这些模型，而且文本方面有很多进展。**语音到语音模型**的一个缺点是，由于所有东西都集成在一起，当你从文本模型转向**语音到语音模型**时，你需要用语音数据对其进行微调。所以现在，切换底层文本模型的成本极高，因为你需要从头开始重新微调所有东西。人们想要的是模块化、即插即用的东西。解决所有问题的方法是提供与**级联系统**相同的灵活性，这样你就可以按需更改后端，并获得与文本模型相同的可定制性，但同时拥有**全双工**。我认为这将是一个令人信服的解决方案，可以解决所有当前的限制。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: And so when we did the motion announcement particular there was a fun early demo that we did of at some point we trained the model on the fish data set. So, it's a phone conversation about that were recorded in the US in the late '9s and you could literally give a phone call to the late '9s and it will mention like Saddam Hussein and Jack Shiraak and talk about you know like a lot of political stuff from the it was very weird because you're talking to a guy say hey I'm both from Arizona and every time it's a new guy and you can talk about whatever and they tell you about their job and so on. So it's a kind of paranormal experience. Very fun. I think eventually it's impossible to think that we will stick to turn taking in the future. So obviously for us like the the end goal is multiplex. That's was always our motivation. At the moment what we do is cascaded systems because that's where the market is right now. It's people they are still iterating a lot on the underlying text models that they want to to use on the tool use and so on and so there is so much progress on the text side. One drawback of speechtospech models is that since everything is integrated when you go from a text model to the speechtospech model you need to fine tune it on speech data. So now it's the cost to switch the underlying text model is extremely high because you will need to refine tune everything from scratch. People want something that is modular plug and play. What will solve everything is providing the same flexibility as like cascaded system so that you can change the back end on demand basically and you get the same customizability and customization that you have with text models but with the full duplex and that's this this I think is going to be a convincing solution to all the current limitations.

</details>

**Matt**: 所以那是**语音AI**的前沿。

<details>
<summary>Original English</summary>

**Matt**: So that's the frontier of voice AI.

</details>

**Neil Zeghidour**: 我会说这是其中一个前沿。是的。再次，我敢打赌世界上每一个语音团队在未来一年左右都无法解决的一个前沿问题是：在工厂中央，机器人周围有很多机器噪音，很多人都在和机器人说话，机器人必须弄清楚到底发生了什么。我可以担保，这极其具有挑战性。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: one of the frontiers I would say. Yeah. Again, ones where I would say a frontier is I could like bet to every single speech team in the world that they don't solve it in the next year or so. It's a robot in the middle in the factory and there is a lot of noise from machines and you have a lot of people talking to the robot and the robot has to figure out what the hell is going on. This I can you know I can I can sign that it's this is extremely challenging.

</details>

**Neil Zeghidour**: 如果我必须选择我们工作中最糟糕的课题，我的意思是，那些最具挑战性的课题，我认为就是这个。甚至比**全双工**还要困难得多。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: if I had to pick the worst topic we work, I mean the ones that will be the most challenging, I think that will be this one. Even more than full duplex much, you know, much more difficult, I think.

</details>

### 嘈杂环境下的语音识别

**Matt**: 那么，当你在嘈杂的环境中时，幕后会发生什么？模型实际上做了什么？你如何解决这个问题？比如你给餐厅的前台打电话，他或她接了电话，背景非常嘈杂，你如何解决这个问题？

<details>
<summary>Original English</summary>

**Matt**: And what happens behind the scenes when you have that noisy environment? Like what what does the model actually do? And how do you solve that problem? Like if you're calling a receptionist in a restaurant and like he or she picks up and there's super light in the back, how do you solve that problem?

</details>

**Neil Zeghidour**: 一件非常重要的事情是拥有多个麦克风。我们有两只耳朵，这极其有用，因为这使我们能够定位声源。我们之所以能定位声音来自哪里，是因为声音到达左耳和右耳之间存在微小的时间差。所以如果它先到达这里，我的大脑就会理解它会从这边来，然后你就会感到愤怒，然后脸部的加速会给你另一个维度，这就是你如何在3D空间中定位。所以，拥有这种**空间化**的能力，理解声源来自哪里，谁在说什么等等。这既是硬件问题，也是软件问题。为此创建训练数据极其具有挑战性。老实说，我们人类在这方面的鲁棒性极高。而且，你知道，我们都在**读唇语**，我们不知道自己在做，但每个人都在一直读唇语，这在很大程度上有助于理解。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: One thing that is really important is to have several microphones. So we do we have two ears and it's extremely useful because that's allow us for example to localize an audio source. So the reason the why the reason why we can localize where sound come from because we have a small time difference between the time when it arrives in this year and this year. So if it arrives here before my brain will understand it will come this and you get like anger and then the acceleration of the face gives you the other dimension and so that's how you can locate in 3D. So having the ability of of doing this specialization understanding you know where the sources are coming from and which one is saying what and so on. Again it's it's both a hardware and software issue. Creating training data for that is extremely challenging. Honestly the level of robustness that we have as humans on that is exist extremely high also you know we are all lipreing we don't know that we are doing it but everybody is lip reading all the time that helps understanding a lot.

</details>

**Neil Zeghidour**: 特别是在嘈杂的环境中，我们无意识地这样做，但我们都这样做。我认为电话上的互动还不错，因为你知道，嘴巴靠近电话，电话可以做很多工作来提高音质。但现在，你知道，人们想要一个机器人，一个静态机器人，它就在房间里，你想从客厅里对它大喊。这叫做**远场语音识别**。它真的坏了。每个制造过这些家庭助手的公司都知道，让它们在有多人存在的环境中工作是多么困难。我之所以说我认为这是一个最大的挑战之一，是因为在**TTS**中，我们看到了这种困难的理解问题取得了很大的进展。我听到人们说的和10年前一模一样。就像零进展一样。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: in noisy environments in particular we do it unconsciously but we all do it I think interactions on the phone are quite okay because you know the mouth is close to the phone and the phone can do a lot of work to enhance the quality but now you know people want to have a robot that is that can even a static robot that is just in in a room and you want to shout to it from your living room. It's called farfield speech recognition. It's it's really broken. Every every company who has made these home assistants know how difficult it is to have them work in in environments where there are several people. The reason I say I think it's one of the biggest challenge is in TTS we see a lot of progress for this kind of hard understanding problem. I hear people seeing the exact same stuff as they did 10 years ago. Like there was zero progress.

</details>

### 语音AI的数据挑战

**Matt**: 你刚才提到了数据。**语音AI**的数据是如何运作的？它与**文本AI**相比如何？显然，**文本AI**的**LLM**s是在整个互联网上训练的，但据推测，用于训练的音频和语音数据要少得多。它是如何运作的？

<details>
<summary>Original English</summary>

**Matt**: You mentioned data a second ago. How does that work for voice AI and how does that compare to text AI? Obviously text AI the LLMs are training on the whole internet but presumably there's a lot less audio and speech data to train on. How does that work?

</details>

**Neil Zeghidour**: 所以，如果你做一下计算，基本上，在几万亿个令牌上进行训练，这正是你为基本的文本模型所做的，那将相当于数亿小时的语音，这是一种很难获得的数据量。我认为这是一个非常有趣的问题，在很多讨论中都会出现，每个人都有自己的理论。特别是，语音数据的一个属性是，如果你用语音数据训练一个对话模型，它的智能程度会比用文本训练的模型低得多。我认为这是因为当你听语音数据时，信息密度比文本低得多。所以你没有像**维基百科**那样的语音数据，你没有**Stack Overflow**等等。让你的模型从语音中了解世界，我认为这是一个糟糕的主意。我认为你应该开始，我的意思是，我们有文本模型。所以我们为**Mushi**所做的，我们从文本模型开始，然后我们用语音数据训练这个文本模型，同时尽可能防止智能的损失。所以我们一直在重新计算文本指标，它们会下降，但我们正在努力将其控制在一定范围内。但确实，语音数据的质量极其多变。老实说，我认为我们目前训练的数据量太多了。我们训练了700万小时的语音，这很荒谬。我的意思是，如果我们有正确的方法，我们可能只需要1万小时就能做到。我们不在乎，因为我们有数据，所以就训练了。这对于捕捉语音中所有非常具体的特点，比如法语口音，以及使声音独一无二的东西非常有用。所以对于声音的多样性来说，数据量极其有用。但同时，你可能会想，如果我的模型像文本模型一样智能，它就可以从几千或几万小时的数据中学习对话的动态，而不是数百万小时的数据。那是一种数据来源。最大的数据量是，你知道，非结构化对话，比如公开可用的有声读物等等。然后你会得到更多针对你的应用的特定数据。例如，对于**TTS**，你想要高质量的表达性数据。你不想拥有在任意条件下录制的东西。你想要真正的录音室录音，非常低的噪音水平，专业的或半专业的演员。然后是，你给他们读什么样的文本？所以，这也是一个非常有趣的问题，因为如果你想为配音演员生成数十万小时的脚本，那并不容易。我的意思是，你不能要求**Claude**或**ChatGPT**编写10万小时的脚本，并使其尽可能多样化。所以它不起作用。它只会陷入循环，并崩溃在几个主题上。你知道，即使你要求电话号码，它们也不是真正的随机数生成器。它们最终总是会生成相同的电话号码。所以，**Alex**和我的团队花了很多时间制作非常复杂的**脚本生成机器**，它们有一个包含所有可能主题、子主题、子子主题和子子主题的分类法，并不断进行采样。每次我们生成电话号码时，它都使用真正的随机数生成器生成，这样我们就能真正覆盖电话号码的整个范围。所以，我认为这是一个非常有趣的问题。它很痛苦，很烦人，它真的关乎细节。我喜欢这一点，因为我认为这始终是我们能够脱颖而出的地方。仅仅因为我们总是像玩家一样说，我们承担那些痛苦的事情。这带来了很大的回报，因为正如我所说，就计算资源而言，我们不需要像训练大型模型或视频模型那么多。但对于语音来说，它真正重要的不是数据量，而是拥有高质量的数据极其有用和非常重要。例如，标注的准确性至关重要。而且，要精确标注需要大量的人工劳动。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So if you do the math basically like training on a few trillions of tokens which is what you will do for you know like a basic text model that will amount to hundred of millions of hours of speech or something like that which is kind of amounts that are very hard to to get. I think this is it's a very interesting question that comes up in a lot of discussions and everybody has their theories in particular one impact one let's say one attribute of speech data was that if you train a conversational model on speech data is going to be much less intelligent than a model trained on text and I think it's because when you listen to speech data it's the density of information is is much lower than you will have in text so you don't have Wikipedia like you know in speech data you don't have stack overflow reit and so on getting your model to learn about the world from speech I think is a terrible idea. I think you should start I mean you know we have text model. So what we did for mach we started from the text model and then we we we we we took this test model and and and trained it on speech while trying to prevent as much as possible a loss of intelligence. So all the time we will recmp compute the text metrics and they will degrade but we are trying you know like to keep it a bit contained but indeed the quality of speech data extremely variable honestly I think we are training on way too much data so far we train on 7 million hours of speech it's ridiculous I mean we we could probably do that with 10,000 hours if we had the right method we didn't care because we had the data so like yeah screw it we just train on that which is great to capture all the very specific idiosyncrasies in voice the French accent like the things that make a voice unique. So for the diversity of voice, the amount of data is extremely useful. But at the same time, you could think okay if my model is intelligent as a text model, it could learn dynamics of conversation from a few thousands or dozens of thousand hours of data and not millions of hours of of data. That's one source of data. The largest volume is just you know unstructured conversation like publicly available audio books and this kind of stuff. And then you get towards more specific data that you make for your applications. For example, for TTS, you want to have expressive data of high quality. You don't want to have something that is recorded with arbitrary conditions. You want really studio recording, very low level of noise, professional or semi-professional actors. And then there is what what kind of text do do you give them to read? And so I it's a very also interesting problem because so if you want to generate hundreds of thousand of hours of of scripts for voice actors, it's not that easy. I mean you cannot ask Clo or JPT write 100,000 hours of scripts and make them as diverse as possible. So it doesn't work. It's going just to be in a loop and and and collapse on a few topics. You know, even if you ask for phone numbers, they are not really random number generators. They will produce eventually like always the same phone numbers. So, Alex and my team spent a lot of time on making very complex machines for script generation with like a taxonomy of all possible topics and subtopics and sub subtopics and sub subtopics and sampling constantly. And every time we generate a phone number, it generated with an actual random number generator so that we actually cover the whole scope of phone number. So I think it's a very interesting problem. It's painful. It's annoying. It's really about details. And I love that because I think that's always where we can differentiate. It's just because we always as a gamer say we tank we tank the the painful stuff. And this pays off a lot because as I said in terms of computational resources, we don't need as much as to train largeing models or video models. But for speech, it's not really about the volume of data, but having high quality data is extremely useful and very important. And the accuracy, for example, of annotations, it's paramount. And it's a lot of human labor to be able to annotate precisely.

</details>

**Matt**: 这其中有**标注**的环节。

<details>
<summary>Original English</summary>

**Matt**: There is a labeling aspect to do this.

</details>

**Neil Zeghidour**: 是的。**标注**方面很有趣，因为**自动标注**效果很好。而人类的作用主要在于纠正最好的**自动标注**也会犯的少数错误。所以，让它值得人类花费时间的唯一方法是，如果他们有完美的标注。如果他们的标注略有不完美，那就不太值得了。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yes. And the labeling aspect, it's interesting because automatic annotation works very well. And where humans are useful is really for the few mistakes that the best automatic annotations will do right now. And so the only way to make it worth the time of humans is if they have perfect annotation. If they have slightly imperfect annotation, not really worth it.

</details>

**Matt**: 如果你想添加一种新语言，特别是像南非荷兰语这样在互联网上数据较少的语言，它是如何运作的？你是否必须雇佣演员，专门为他们创建脚本？它是如何运作的？

<details>
<summary>Original English</summary>

**Matt**: How does it work if you want to add a new language especially not to pick on any but like I don't know like Africans like something where there's less data on the internet presumably. Do do you have to hire actors to you know and create scripts specifically for them? How does it work?

</details>

**Neil Zeghidour**: 有趣的是，我们看到了语言之间的迁移，特别是来自同一语系的语言。例如，我们上周发布的**Hibiki Zero**。它在5万小时或10万小时的葡萄牙语和西班牙语数据上进行了训练。然后要进行意大利语到英语的翻译，1000小时就足够了。对于属于完全不同语系的语言，我认为更具挑战性。好的一点是，从根本上说，整个流程是相同的。目前我们一直专注于少数几种语言，以找到有效的方法，然后就可以将其应用于大多数语言。非常困难的是**无文字语言**，即没有官方书写系统的语言。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: What is interesting is that we see transfer between languages in particular languages from the same family. For example, with Hibiki Zero that we released last week. So it was trained on 50,000 hours or maybe 100,000 hours for for example Portuguese and Spanish. And then to do Italian translation to English, 1,000 hours was enough. I would say for languages that belong to a completely different family that's more challenging. What is nice is that fundamentally the whole pipeline is the same. The whole right now we have been focusing on a few languages to find the recipe that works and then then it can be applied to to most languages. what is very difficult is unwritten languages. to languages that don't have an official writing system.

</details>

**Neil Zeghidour**: 那是很多方言，人们混合语言，加一点法语，再加一点克里奥尔语，再加一点其他语言等等。这非常具有挑战性，因为获取数据很困难。获取**标注数据**更困难，因为能做这项工作的人少得多。但这些是，我想说，最具挑战性的。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: That's a lot of dialects where people are mixing languages and putting like a bit of French and then a bit of creole and then a bit of something else and so on. This is very challenging because getting data is difficult. Getting annotated data is even more difficult because you have much fewer annotators that can do that. But it's these ones are are the most challenging I would say.

</details>

**Neil Zeghidour**: 但这长期以来一直是一个挑战，而且有很多项目围绕着收集这类语言的数据。有趣的是，有一种，例如，你能在大多数语言中找到的内容是**《圣经》**。所以，世界上最广泛可用的内容的主要来源是所有语言的**《圣经》**，因为很多人花时间翻译它等等。所以这是一个非常有价值的数据来源。显然，你不会在其中找到现代词汇。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: but it has been a challenge for for a long time and and there are a lot of projects around around collecting data in such language. Interestingly there is one so for example the the content that you can find in the most languages is the Bible and so like the main source for like the most widely available content in the world in the Bible in all languages because a lot of people spend time into translating it and so on. So that's a very valuable source of data. Obviously you won't have a mention of modern vocabulary in it.

</details>

### 硬件与经济效益

**Matt**: 硬件方面呢？你之前提到，与大型模型相比，这不是一个大型GPU的投入。这正确吗？

<details>
<summary>Original English</summary>

**Matt**: And what about a hardware? So you you mentioned earlier this is not a big hardware GPU play compared to bigms. Is that is that correct?

</details>

**Neil Zeghidour**: 如果你想让语音模型大规模运行，并在经济上合理，你需要让这些模型紧凑。无论如何，如果你考虑在游戏中拥有**NPC**，人们可能会花70美元或90美元购买游戏，然后他们想每天和它聊3小时，因为它是一个非常好的游戏。所以你花了很多时间在上面。如果你有一个大型模型，那根本不可能。它不仅不适合GPU，即使通过API，在经济上也没有意义。所以，从根本上说，我认为这些模型需要很小，但有时它们需要访问大型模型，因为它们正在解决一个复杂的任务。我某种程度上是在陈述显而易见的事实，但基于上下文和手头任务的难度，选择性和自适应地使用计算资源。任务可以精确到像接下来的几个词，我可以直接这样回答吗？因为有人说“嘿”，我只是说“嘿”。他们问去旧金山的下一班航班，我必须上网查找时间。所以，非常选择性地决定何时使用计算资源，我认为这是所有这些在经济上都有意义的唯一方式。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: If you want to have voice models to run at scale and make sense from a you know in terms of economics you need to have this model compact. Anyway, if you think about having NPCs in a game where people are going to pay, I don't know, 70 bucks or 90 bucks or whatever for a game and then they want to talk to to it 3 hours a day because it's a very good game. So, you spend a lot of time on it. You can if you have a large model, it's just impossible. Not only doesn't fit on the GPU, but even through APIs, it just wouldn't make sense economically. So, fundamentally, I think these models need to be small, but sometimes they require access to large model because they're solving a complex task. I'm quite state in a way stating the obvious but selective and adaptive compute usage based on the context and the difficulty of the task at hand. The task being as precise as like the next few words can I just answer like that because some somebody say hey and I just say hey they ask for like the next flight to SF and I have to look up on internet to find the the time. So being very selective about when to compute to use compute I think that's that's the only way to for all of it to make sense economically.

</details>

### 语音AI的产品与商业模式

**Matt**: 我们来谈谈**语音AI**的产品和商业方面。你提到你正在建立一家模型公司，但也是一家产品公司。**语音AI**中的产品是什么？我想到两件事：一是**语音克隆**，二是**智能体**。这是人们谈论很多的两件事。你可以选择任何一个。

<details>
<summary>Original English</summary>

**Matt**: Let's talk a little bit about the product and business aspect of Voice AI. You you mentioned that you were building a model company but also a product company. What is a product in in Voice AI? And the two things I'm thinking of are like one cloning and then agents. That's the two thing that people are talking about a lot. Take whichever one you want.

</details>

**Neil Zeghidour**: 是的。所以我想对于这个问题，对我们来说，产品是底层模型，因为我们看到的是人们正在构建**语音智能体**。所以**语音智能体**，我想听起来很像一个商业智能体，比如**客户服务智能体**之类的。但**NPC**在某种程度上也是一个智能体，因为它们有语音接口，它们有底层的文本模型。最终在视频游戏中，它们将能够进行**函数调用**，以启动任务，决定你解决了某个问题，或者控制一个动作等等。我们专注于为那些想要构建智能体的人提供最好的技术。所以我们不自己构建智能体。我们真的想专注于模型的质量，因为那是我们的专长。那是我们的人才所在，同时，我认为如果我们认为我们可以用我们的智能体满足市场的所有需求，那将有点不现实，因为再次强调，我认为非常令人兴奋的是，当我们看到我们的客户时，每次出现新客户，它的内容都完全不可预测。它可能涉及学习、客户服务、视频游戏、媒体和个性化新闻，范围如此之广，以至于我们宁愿让人们轻松构建**语音智能体**，并为他们提供可靠的模型基础设施。这也很有效，因为就员工而言，**Gradium**今天不到15名员工。当我们与一家在银行、医院或不同类型的企业部署**语音智能体**的公司合作时，这需要大量的我们今天可以称之为**前线部署工程师**的人员。所以这些部署到各种复杂系统和基础设施中需要大量的人力劳动，而我们可以专注于模型。所以这也能让我们保持较小的规模，真正专注于科学和工程。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yeah. So I think for this one um so for us the product is the underlying models right because what we see is that people are building voice agents. So voice agents it sounds I think a lot like a a business agent like a customer care agent or something like that. But an NPC in a way is an agent right because they have a voice interface they have a underlying text model. Eventually in video games they will be able to do function calling to launch a quest to decide that you solved something or to to to control an action and so on and so forth. What we focus on is providing the best technology to the people who want to build the agent. So we don't build agents ourselves. We really want to focus on the quality of the model because that's our specialty. That's where our talent is and at the same time I think it will be a bit unrealistic unrealistic to think that we can address all the needs of the market with our agents because again the I think what is very exciting is when we look at our customers it's every time there is a new one it's completely unpredictable what it will be about and it's about learning and customer care and video games and media and personalized press and it's so wide that we that we'd rather you know just make it easy for people to build voice agents and provide them with a reliable models infrastructure and that also works pretty well because in terms of of staff we are less than 15 employees today at Gradium when we partner with a company that deploys voice agents in banks or hospitals or different kind of businesses it requires a lot of what we could call today a forward deployment engineer. So there is a lot of staff human labor that is involved for these deployments into various complex systems and infrastructures and we can just focus on the model. So that also allows us to remain pretty small and really focus on on the science and the engineering.

</details>

**Matt**: 那么**语音克隆**是一个用例吗？

<details>
<summary>Original English</summary>

**Matt**: and voice cloning is that a is that a use case?

</details>

**Neil Zeghidour**: 实际上在**Gradium**，我们拥有业界最好的技术，最好的意味着不仅能复制某人的特定特征，而且还能复制口音、一些不寻常的录音条件等等。所以在很多情况下，例如，如果你想创建一个带有老式收音机效果的复古声音角色，这是我们做得很好的事情。如果你想要一个机器人声音，我们也能做得很好。如果你想要任何口音或说话风格，比如优雅的、更随意的或更都市化的，任何个人声音的社会方面，我们都能很好地复制。我认为有趣的是，**语音学习**本身，我看到最大的潜力在于围绕**许可证**创建互动体验。我曾尝试推销，例如，你知道的《**谁想成为百万富翁**》这款视频游戏，问题可以在飞行中生成，你希望主持人一直用主持人的声音来提问。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Actually with at Gradium we have the best of of the of the industry and the best means not only replicating like the specific characteristic of someone but I mean also the accent some unusual recording condition and so in a lot of context for example if you want to create a vintage sounding character with old radio effects and it's something that we do pretty well. If you want to have a robot voice we can do that pretty well as well. If you want to have any kind of accent or speaking style like posh or more, you know, laidback or more urban, any kind of social aspects of an individual aspect of voice is something that we that we replicate pretty well. I think what is interesting is that voice learning in itself where I see the most potential is about creative creating interactive experiences around licenses. I tried to pitch for example you know who wants to be a millionaire there is a video game and the questions can be generated on the flight you would like the host to the voice of the host to on them all the time.

</details>

**Neil Zeghidour**: 所以这个用例在**克隆特定声音**方面很有意义，因为你想要复制一个角色、一个人、一个运动员、一个K-pop明星的声音，或者任何人们想要与他们熟悉的声音互动，但又想要迭代体验的场景。然后，在很多情况下，例如在**客户服务**中，人们不想要一个特定的声音，他们想要一个具有特定特征且适合该用例的声音。所以通常他们会克隆一个声音好听的同事的声音。对于这些客户，我认为最有意义的解决方案不是**克隆**，而是**声音设计**。所以能够通过自然语言描述来创建声音，并让你的声音生成真正忠实于提示，这样你就可以值得在其上进行迭代，因为目前存在一些关于**声音设计**的解决方案，但据我所知，它们并不是很受欢迎，人们仍然坚持使用现有的声音目录，因为他们无法足够精确地控制它。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: so this one makes a lot of sense with cloning a specific voice because you want to replicate the voice of a character of a person of a athlete of a K-pop star whatever I don't know you know any kind of experience where people want to engage with a voice that they know but they want to go for an iterative experience then in a lot of cases for example in customer care people don't want a specific voice they want a voice with specific characteristics and that is nice for the use case. And so typically they clone the voice of a colleague that has a good voice. For these customers, I think the solution that makes the most sense is not cloning, it's voice design. So being able to to create voices from a natural language description and having your voice generation being really faithful to the prompt so that you can it's really worth iterating on it because there are a few solutions that exist today around voice design but as far as I know they are not very popular and people still still stick to the existing voice catalog because they cannot steer it precisely enough.

</details>

**Matt**: 是的。但当这奏效时，它将允许人们为他们的用例设计他们想要的声音，这我认为非常有趣。尽管有时我有点惊讶，因为我们有一些客户，他们只是从我们的目录中随机选择一个现成的声音，比如我的或我同事的声音，他们并不在乎。我试图说服他们，比如“我们一起设计一个声音吧，让我们创造一个能代表你品牌的声音。”但有些人说：“不，没关系。”

<details>
<summary>Original English</summary>

**Matt**: Yeah. But when this works, this will allow people to design the voices that they want for their use case, which I think is very interesting. Even though sometimes I'm a bit surprised because we have some customers, they just take a random stock voice from our catalog, which is one of ours like me or my colleague, and they don't care. And like I try to p them like let's design a voice together, make let's make a voice that represents your brand. But some people like no, it's fine.

</details>

**Neil Zeghidour**: 太棒了。或者也许你只是拥有如此出色的声音，那就是市场想要的。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: fascinating. Or maybe you just have such a great voice that that's what the market wants.

</details>

### 隐私与深度伪造

**Matt**: 围绕**隐私**和**深度伪造**的必然问题。显然，在一个可以相当容易地克隆他人声音的背景下，这意味着什么？你如何保护我们所有人？

<details>
<summary>Original English</summary>

**Matt**: inevitable question around privacy and then deep fakes. obviously in a context where one can clone somebody else's voice pretty easily. What does that mean and how do you protect all of us?

</details>

**Neil Zeghidour**: 首先我想说的是，**水印**是一个骗局。抱歉我必须这么说，它根本不起作用。我曾研究过它。在**Mushi**论文的附录中，我们讨论了如何轻易地破解任何被认为是先进的**水印**技术。所以人们不应该依赖它。此外，**水印**由谁来验证？你需要一个平台来做验证并移除音频，但如果有人在。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: So first thing I want to say what are marking is a scam. I'm sorry I have to say it just doesn't work. I worked on it. we have an appendix in the Mushi paper around how we could break so easily any watermarking that was supposed to be state. So people should not rely on that. Also water marking who verify the watermark right you will need a platform to do the verification and remove the audio but if someone in.

</details>

**Matt**: 解释一下**水印**在音频语境中是什么。

<details>
<summary>Original English</summary>

**Matt**: explain what watermarking is in the context of audio yeah.

</details>

**Neil Zeghidour**: 是的，在音频中，**水印**的想法是找到一种方法，当你生成音频时，在其中放入一个隐藏的印记，就像你在图像中做的那样，但现在是在音频中，所以你听不到它，但它使得它非常容易识别，不仅是伪造的，而且是来自这个特定模型的伪造。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: in audio that's the idea of of either finding a way to so when you generate an audio you put a hidden stamp in it like you would do in an image but now it's in audio so you cannot hear it but it makes it very recognizable that it not only it's fake but it's fake from this specific model.

</details>

**Neil Zeghidour**: 还有**深度伪造检测**，它只是识别音频是否是合成的，即使没有水印，只是分辨真假，这些都非常难以做到。不幸的是，你知道，如果你接到一个诈骗电话，除非你的手机里有自动检测功能，否则它就没用，对吧？你不能把它上传到一个网站，让它告诉你真假。老实说，我认为在这一点上，我不知道谁的奶奶在机场丢了信用卡，今天需要1000美元，因为我总是听到这样的故事。如果你接到一个电话，那可能不是真的。所以我想说，在这种情况下，老实说，我认为没有什么比直接问个人问题更安全的了，只有他们假装是的那个人才能回答。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and also there is defect detection which is just recognizing get that audio is synthetic even if there is no water mark in it just telling true from fake these are very difficult to do unfortunately you know if you get a phone call from a scammer unless you have inside your phone the automatic detection it's useless right you cannot put upload it to a website that says it's true or fake honestly I would say at this point I don't know who has their grandma who lost their credit card and at the airport and it's $1,000 today because it's always a story I hear. It's probably not the case if you if someone gives you a phone call. So I would say just um in that context honestly I think there is nothing as safe as just acting asking personal questions that only the person that they pretend to be could answer.

</details>

**Matt**: 所以你认为这将成为生活中的一个事实，因此我们都需要更加警惕。

<details>
<summary>Original English</summary>

**Matt**: So you think it's going to be a fact of life and therefore we need all to be just more vigilant.

</details>

**Neil Zeghidour**: 是的。我的意思是，你知道，电子邮件早就这样了，对吧？人们只需要更加警惕，并且可能会找到方法来在电话的另一端进行身份验证，以确认打电话的是真人等等。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yeah. I mean you know it was already this the case with with emails right? And and people just need to be much more vigilant and probably will find ways to have authentification for example on the other phone side that it's actual person that is calling and so on and so forth.

</details>

**Matt**: 但在**隐私**方面，如果我用**Gradium**克隆我的声音，你会保留它的控制权吗？

<details>
<summary>Original English</summary>

**Matt**: But on the on the privacy front if I if I clone my voice with Gradium then you keep control of it.

</details>

**Neil Zeghidour**: 只有你可以使用它。你需要拥有它，但没有人能够使用它。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Only you can use it. You need to own to own it but nobody will be able to to use it.

</details>

**Matt**: 是的。所以它只供你个人使用。我认为我们最终还可以做的是，允许人们如果他们愿意，可以选择与社区分享他们的声音，这样他们也可以获得经济补偿，如果他们的声音被其他用户使用的话。好的。所以我认为这个，这个，这个，你知道，它有很多价值，因为它是一种很好的方式来最终获取大量声音。再次，如果我们忽略复制许可证中的熟悉声音或现有的人们故意提供声音来创建特定内容的情况。我认为**声音设计**将，你知道，消除这个问题，因为再次，人们通常会克隆某个人的声音，但他们想要的是特定性别、特定人口统计学特征、年龄、口音等等的人。所以他们可以填写这些信息，然后获得一些符合他们需求的声音建议或声音，这将消除对**语音克隆**的需求。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yeah. And so it's only for your your own usage. And I think what eventually we could also do which was done before is allow people if they want to to opt in to share their voice with the community so that they can also get you know like financial compensation if their voice is used by by other users. Okay. So I think this one is um this one is is is is you know it's has a lot of value because it's it's a good way of sourcing a lot of voices eventually again if we omit the case of replicating familiar voices from licenses or existing people who who give their voice knowingly to create specific content. I think voice design is going to, you know, just remove this issue because then again people typically are going to clone the voice of someone but what they wanted is someone from a specific gender, specific demographics, age, accent and so on and so they could just fill this information and get a few propositions or voices that will fit their their need and that will remove the need for for for voice cloning.

</details>

### 语音与视觉的融合

**Matt**: 是的。所以，当我们快结束这次对话时，还有几个快速的问题。第一，似乎正在出现关于语音和屏幕或图像之间交叉的讨论。这是你关注的领域吗？

<details>
<summary>Original English</summary>

**Matt**: Yeah. So as we get towards the end of this conversation just like a few sort of quick ones. one there seems to be an emerging discussion about the intersection between voice and screens or image. Is that something that you focus on?

</details>

**Neil Zeghidour**: 特别是，有几件事。所以，如果你想进行**语音理解**，访问视频可以提供很大帮助，再次以**说话人分离**为例。例如，如果你正在拍摄，如果你正在听有几位候选人的总统辩论，很难理解。如果你观看，你可以看到谁在何时说话等等。所以**视听理解**比单纯的**音频理解**要强得多。我认为现在有趣的是，我们看到在视频生成中，比如**Google**的**V3**，现在包含了原生音频，这就是为什么我认为对于视频生成来说，最自然的事情是视频和音频的整合。我认为单独进行视频到音频的生成并没有真正的意义，因为通常数据以多模态信号的形式存在，对吧？当你有一个视频时，你也有音轨，所以你最好同时利用两者来训练你的模型。然而现在，例如，我们在情人节发布了一个小型应用程序，叫做**Bridget Clone**。现在，如果我把我的脸放到照片中，然后放到视频中，我说“制作一个视频”，它就会根据我的外貌、年龄等等，制作出一个听起来像我的声音。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: There are several things in particular. So if you want to do speech understanding having access to the video can help a lot again for theization. For example, if you're filming like if you're listening presidential debates with several candidates, it's awful to understand. If you watch, you can see who is speaking at at each time and so on. So audio visual understanding is much stronger than audio understanding in itself. I think now also what is interesting is so we see that in a video generation like with V3 from Google now there is native audio that is included and that's why I think it's a for video generation I think the most natural thing is integration of video and audio. I don't think it really makes sense to do video to audio generation separately because typically the data exists as a multimodel signal right when you have a video you have the audio track as well so you might as well just exploit both to train your models so however now so for example we released for the Valentine's Day a small app called bridger clone now if I put my face in to you know like in photo I put to video I say make a video it's going to make up a voice that it thinks sound like me based on my appearance, my age and so on.

</details>

**Matt**: 人们在哪里可以找到它？

<details>
<summary>Original English</summary>

**Matt**: Where do people find that? So it's it's uh.

</details>

**Neil Zeghidour**: 它叫做**bridgetclone.app**。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: it's called bridge clone.app.

</details>

**Matt**: **Bridget Clone**，就像**Bridgerton**一样，有一个双关语。

<details>
<summary>Original English</summary>

**Matt**: bridger clone like bridgetone like there's a plan word.

</details>

**Neil Zeghidour**: 完全正确。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Exactly.

</details>

**Matt**: **bridgetclone.app**。

<details>
<summary>Original English</summary>

**Matt**: bridger clone.app.

</details>

**Neil Zeghidour**: 是的。好的。它允许你克隆你的声音。你可以录制一个简短的爱情信息，然后你就会得到一个用你的声音制作的视频。再次，我认为这就是为什么将语音视为一个独立的组件很有用，因为现在你可以对虚拟角色的实际声音拥有更多的控制权，而不是仅仅拥有一个听起来可能像你的声音。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Yeah. Okay. And so what it allows you to do is now you can clone your voice. you can record a small a short love message and now you get a video of you in your voice, you know, and and this again I think that's that's why it's useful to have a a voice that is treated as kind of a separate component because now you can have much more control on the actual voice of the of the virtual character rather than you know just having a likely voice that sounds like it could be yours.

</details>

**Matt**: 是的。好的。我们谈到了**克隆**。显然，**克隆**只是众多应用程序中的一个，最终，为了强调这一点，你提供了构建模块和模型，以创建各种基于语音的不同产品，无论是客户服务用例，还是任何类型的互动、翻译等等。

<details>
<summary>Original English</summary>

**Matt**: Yep. Okay. So we talked about cloning. Obviously cloning is just one of the many apps like ultimately just to play it back and drive it home. you provide building blocks and models to create all sorts of different products based on voice whether that's you know customer service use case or like any kind of like interaction translation like all sorts of.

</details>

**Neil Zeghidour**: 有趣的是，在**QAI**，两年内我们能够完成对话、翻译、**TTS**、**语音转文本**，始终与更大、更成熟的团队竞争。在**Gradium**仍然如此，我们的一大优势是我们拥有围绕**音频语言模型**的这种基础生成框架，它极其灵活。所以，我认为我们的优势之一是我们能够完成新任务，当人们提出新需求时，无论是关于标注各种东西还是生成各种东西，所有这些都可以很容易地纳入我们的框架。然后，如果我们看到对**语音分离**有巨大需求，我们很容易就能做到；对于**语音转换**、**口音转换**等等，你知道，这也是我们始终与开发者互动以了解他们需求的原因。我们现在也提供**Alpha模型**的访问权限，这些模型可以做一些仍然是实验性的，但却是世界首创的事情。是的，我认为这让我非常兴奋，因为我们可以比仅仅**语音转文本**和**TTS**更具创造力。显然，这些是主要任务，我们希望在这些任务上做到世界最好，因为那里有最多的机会，但同时我们也可以做很多完全正交于此的有趣事情，特别是在**转换**、**音频效果**等方面。我认为有很多事情可以做得非常酷。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and what is interesting is so at QA in two years we were able to do conversation translation TTS speech to text always competing with much bigger and much more mature teams it's still the same at Gradium and one of the big strengths is that we have kind of this fundamental framework for the generation around audio language models and it's extremely flexible. So I think one of our strengths as well is our ability to do like a new task and when people come up with new needs whether it's about annotating various stuff or generating various stuff all of this can be cast pretty easily in in our framework. Then if we see that there is huge demand for speed separation, it's pretty easy for us to do it for voice transformation for accent transformation whatever you know it's that's also why we are always interacting with the developers to understand what they want. We're also now giving access to alpha models that can do, you know, stuff that are still experimental but are world premieres and and yeah, I think it's that's something I'm pretty excited because we can be much more creative than just speech to text and TTS. Obviously these are kind of the master tasks where we want to be the best in the world because that's where most of the opportunities are but at the same time we can do a lot of fun stuff that is completely orthogonal to to that in particular around transformation audio effects and so on. I think that can be there a lot of things to that can be very cool.

</details>

### 法国及欧洲AI的现状

**Matt**: 太棒了。最后一个主题或问题，你正在巴黎建立这家公司。显然，你正在以全球化的方式建立公司，并且在不同地区拥有多个客户，包括美国。我们今天在纽约录制这个节目。你几个小时后就要飞往旧金山。你对法国AI现状和欧洲AI现状有什么看法？你知道，从美国来看，总是有这种有趣的来回，偶尔的钦佩，但更常见的是嘲讽，以及**马克龙**或任何管理他社交账户的人前几天失误，说他将拨款3000万欧元用于AI，而实际上是指一个吸引少数学者到法国的特定项目。那么，在当地，你对现状以及法国AI的优势和劣势有什么看法？

<details>
<summary>Original English</summary>

**Matt**: Great. And last theme or or or question, you building this company out of Paris. Obviously, you're building the company very much in a global way and you have multiple customers in in different geographies, including very much the US. We recording this today, New York. you're flying out to San Francisco in a few hours. any thoughts on the current state of the French AI scene and the European I guess AI scene? you know, there's always this fun back and forth, you know, seen from the US combination of like occasionally admiration pretty often mockery and the fact that the Macron or whoever runs his social account um sort of misfired the other day by saying that he was going to allocate 30 million euros to AI when in reality meant specific program to attract a few academics to to to France. But um so what on the ground there what is your sense of the current state and the strengths and weaknesses of the.

</details>

**Neil Zeghidour**: 关于这一点有很多话要说。我在巴黎出生长大，我的整个职业生涯都在那里。我开始读博士时**Facebook**来了，然后**Google Brain**搬到了巴黎，之后**Google DeepMind**也来了。我是一个我们称之为“重度网瘾者”，我的意思是，我喜欢那些针对欧洲的非常刻薄的表情包。所以这个人，我不记得他的名字了，他有一个假瑞典名字。他不断发布关于他如何在仅仅20次会议后就为某个公司贡献了1万欧元的支票，而且这是一家“合规优先”的公司，所有一切，你知道。但我喜欢它。它非常刻薄。老实说，我喜欢它，因为它非常刻薄。我喜欢那些花这么多时间只是为了刻薄的人。我的意思是，我认为这相当，你知道，我尊重这一点。但同时，它与现实相去甚远。所以，你知道，**法国AI**和**欧洲AI**。所以**欧洲AI**主要就是法国AI，公平地说。德国也有，但大部分在法国。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: lot of things to say about that. I was born and raised in Paris. I did all my career there. Facebook arrived when I started my PhD and then Google brain moved to Paris and Google did mind afterwards. I'm what we can call terminally online in the sense that I love the very mean memes against Europe. So this guy I don't remember his name. It's like a fake Swedish name. And he keeps posting about how, you know, he has after only 20 meetings, he has contributed a€ 10,000 check for and it's a compliance first company and everything, you know. But I love it. It's very mean. Honestly, I love it because it's very mean. I'm like I love when people have so much time to spend just to be mean. I mean, I think it's it's quite you know, I respect that. But at the same time it's so far from from reality. So you know French AI and European AI. So European AI is mostly French to be fair. There's also Germany but a lot of it is in France.

</details>

**Neil Zeghidour**: 在法国公司出现之前，美国公司里就有法国人才。所以，**Google**的很多当前**音频生成模型**（显然是一家全球性公司）实际上是在巴黎和苏黎世之间开发的，大部分工作都在那里。**Llama**是在巴黎启动的。**Dino**，也就是**Facebook**最突破性的视觉工作，也是在巴黎开发的。很多东西都是在巴黎开发的，但因为它们是在美国公司中完成的，所以不被认为是巴黎的。现在，我认为巴黎的领域，人才非常密集，人们极其强大，极其投入。最好的证明信号就是，我们以前在巴黎有**Facebook**和**Google**，现在有**OpenAI**、**Anthropic**、**Cohere**，几乎所有公司都在巴黎开设AI实验室，他们这样做的原因就是为了人才。所以我认为我们在法国拥有一切，可以发展全球性公司，特别是在AI领域，这是一个真正围绕人才建立的经济体。这对它来说是一个完美的交易。此外，作为一个法国人，我真的不希望我们在法国搞砸，因为。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and before French companies as there was French talent in American companies. So again a lot of the current audio generative models of Google a global company obviously were developed between Paris and Zurich actually most of it Llama was started in Paris. Dino which is the most groundbreaking vision work from Facebook was developed in Paris. A lot of things have been developed in Paris that are not seen as Parisian because they were made in in American companies. And now I think the like the field in Paris is like the talent is so dense and the people are extremely strong and extremely committed and the best you know signal that that proves it is we used to have Facebook and and Google in Paris now there is openai there is entropic there is cohhere pretty much everybody is opening in an AB lab in Paris and the reason why they do is for the talent. So I think we have everything in France to to develop global companies in particular, you know, in AI, which is an economy really built around talent. That's a perfect a perfect deal for for it. Also, as a French as a French guy, I really don't want us to to screw it up, you know, in France because.

</details>

**Neil Zeghidour**: 在某种程度上，你知道，当你看到最成功的法国公司时，它们是奢侈品或类似的东西。所以，是的，我真的希望AI能够，你知道，这是一个法国可以发挥巨大作用的领域，它可以成为欧洲经济最大的驱动力之一。如果它不奏效，那么欧洲真的需要审视自己，然后想：“我们怎么会搞砸了，有这么多强大的人？”因为你知道，人才在这里。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: in a way, you know, when you see like the the most successful French companies, it's a it's luxury or kind of stuff. And so yeah, I really want AI to be you know that's a field where France can make a big difference and that can become one of the most biggest driver in in the European economy. If it doesn't work then Europe will really have to look itself in the mirror and be like how could we screw it up with so many strong people because you know the people are here.

</details>

**Neil Zeghidour**: 而且，你知道，资本，我们在欧洲也能获得资本。我认为所有条件都具备，使其具有竞争力。在某种程度上，人们越是嘲笑欧洲，就越能让那些嘲笑者对自己的能力过于自信，而所有过于自信的人最终都会被弱者取代。所以，我的意思是，人们应该总是，你知道，就像我当时在Twitter上看到996的嘲讽时，那很荒谬，比如人们在健身房里编程，就像什么鬼？编程完了再去健身房。你既没有好好健身，也没有好好编程。所以你只是在假装。所以我认为我们没有假装的文化，整个欧洲都是如此，从最西边到最东边。我们可能有点悲观，有点脚踏实地，关于我们的影响和挑战等等。我们不试图粉饰太平。我们很少看起来对自己的工作充满热情或高兴。但你知道，这是一种很好的纪律。所以，我认为结果本身就说明了一切。我认为，你知道，例如**Mistral**，它有时被嘲笑，因为它不被认为是像**OpenAI**、**Anthropic**那样的前沿实验室。好吧，但看看员工和资源等等。我知道**Mistral**最优秀的人才，他们可以与最大实验室的顶尖人才相媲美。所以，这就存在一个规模问题，确实是资源规模问题。所以你提到的那个不幸的关于3000万欧元的推文，你知道，就是其中之一。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: and you know capital we we can get capital in in in in Europe as well. I think all all the conditions are are there for it to be competitive. In a way, the more people are mocking Europe, the more it can make the people who mock overconfident about themselves and everyone who is overconfident eventually get displaced by the underdog. So, you know, I I mean people should always you know like when I when I was the 996 uh like laring on on Twitter, it's it's ridiculous like people coding at the gym like what the like code and then go to the gym. you're not doing a good gym and you're not doing good code. So you're just it's just pretending. So I think we don't have a culture of pretending and that's whole Europe from the most western to the most eastern part. We tend to be a bit more pessimistic maybe and a bit more down to earth about our impact and the challenges and so on. We don't try to sugar coat things. We rarely look enthusiastic or happy about our work. But you know it's a good discipline. So I think the results kind of speak for themselves. What what I think you know um so mistral for example was you know sometimes it's mock because it's not considered the frontier lab like open entropic whatever okay but look at the staff and the resources and so on. I know the best people from Mistral they they you know they can be compared to the top of the top of the biggest lab. So then there's a question of scale and scale of resources indeed. So what you the unfortunate tweet you mentioned about the 30 million euros you know is is one of them.

</details>

**Neil Zeghidour**: 但，是的，我的意思是，除此之外，有很多非常强大的人，而且，你知道，他们也为美国公司做了很多伟大的事情。我的意思是，**Yann LeCun**显然是其中之一，但不仅仅是他。曾经领导**Google Brain**的**Sammy Benjio**现在领导**Apple MLR**。在大型科技AI研究的领导层中，法国人的数量非常庞大。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: but yeah I mean other than that people are there are a lot of very strong people and you know they have done also a lot of great things for American companies I mean Yanuk was is one of them obviously but it's not only him Sammy Benjio who used to lead brain is now is leading Apple MLR the amount of French people in the leadership of big tech AI research is is is very charge.

</details>

**Matt**: 太棒了。嗯，我喜欢这个。

<details>
<summary>Original English</summary>

**Matt**: Wonderful. Well, I love that.

</details>

**Neil Zeghidour**: 我说话时有点激动。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: I get carried a bit when I speak.

</details>

**Matt**: 我喜欢，我喜欢这种战斗精神，这是一个结束对话的绝妙方式。所以，Neil，非常感谢你。这次对话太棒了。真的非常感谢。

<details>
<summary>Original English</summary>

**Matt**: I love I love the fighting spirit and this is a wonderful way to end it. So, Neil, thank you so much. This was terrific. Really appreciate it.

</details>

**Neil Zeghidour**: 谢谢。

<details>
<summary>Original English</summary>

**Neil Zeghidour**: Thanks.

</details>

**Matt**: 大家好，我是Matt Turk。感谢收听本期Matt播客。如果你喜欢本期节目，如果你还没有订阅，或者在任何你观看或收听本期节目的平台上留下积极的评论或评价，我们将不胜感激。这真的有助于我们建立播客并邀请到优秀的嘉宾。谢谢，下期节目再见。

<details>
<summary>Original English</summary>

**Matt**: Hi, it's Matt Turk again. Thanks for listening to this episode of the Mad Podcast. If you enjoyed it, we'd be very grateful if you would consider subscribing if you haven't already or leaving a positive review or comment on whichever platform you're watching this or listening to this episode from. This really helps us build a podcast and get great guests. Thanks and see you at the next episode.

</details>