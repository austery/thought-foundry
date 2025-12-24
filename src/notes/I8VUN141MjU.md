---
area: tech-insights
category: technology
companies_orgs:
- Google DeepMind
- Adobe
date: 2025-10-31
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Diamond Age
people:
- Michelangelo
products_models:
- Nano Banana
- Gemini
- Gemini 2.5 Flash
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=I8VUN141MjU
speaker: a16z
status: evergreen
summary: 本文深入探讨了 Google DeepMind 团队如何开发其突破性的 Nano Banana 图像生成模型。开发者们分享了该模型从 Imagine
  系列演变而来的历程，以及 Gemini 2.0 Flash 的多模态能力如何与 Imagine 的卓越视觉质量相结合。讨论还涵盖了模型在赋能艺术创作、革新教育领域的巨大潜力，以及未来图像模型在3D、交互性和用户控制方面所面临的挑战与机遇。文章强调了AI作为创意工具的价值，以及其如何改变我们与数字内容互动的方式。
tags:
- generation
- llm
- multimodal-ai
- tool
- user-experience
title: Google DeepMind 开发者揭秘：Nano Banana 模型是如何诞生的
---

### AI 赋能创意：从繁琐到创新

这些模型让创作者能够减少工作中繁琐的部分，对吧？他们可以更具创意，并将 90% 的时间用于创作，而不是 90% 的时间用于编辑和执行这些繁琐的手动操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These models are allowing creators to do um less tedious parts of the job, right? They can be more creative and they can spend, you know, 90% of their time being creative versus 90% of their time like editing things and doing these tedious kind of manual operations.</p>
</details>

我坚信这最终真正赋能了艺术家，对吧？它为你提供了新工具，对吧？就像是，嘿，我们现在有了，我不知道，给**米开朗基罗**（Michelangelo: 意大利文艺复兴时期著名的雕塑家、画家、建筑师和诗人）的水彩颜料。让我们看看他会用它做什么，对吧？然后惊人的作品就会诞生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I'm convinced that this ultimately really empowers the artists, right? It gives you new tools, right? It's like, hey, we now have, I don't know, watercolors for Michelangelo. Let's see what he does with it, right? And amazing things come out.</p>
</details>

也许可以先告诉我们**Nano Banana**模型背后的故事。它是如何诞生的？你们是如何开始研发它的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">maybe start by telling us about the backstory behind the nano banano model. How did it come to be? How did you all start working on it?</p>
</details>

当然。我们的团队在图像模型方面已经工作了一段时间。我们开发了**Imagine**系列模型（Imagine: Google DeepMind 开发的图像模型家族），这可以追溯到几年前。实际上，在**Gemini 2.0**图像生成模型（Gemini: Google 开发的多模态 AI 模型）之前，Gemini 中也曾有一个图像生成模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Sure. So um you know our our team has worked on image models for some time. We developed the imagine family of models which is goes back a couple years. Um and and actually there was also an um an image generation model in Gemini before the Gemini 2.0 image generation model.</p>
</details>

所以，当时团队开始更多地关注 Gemini 的用例，比如交互式对话和编辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what happened was the um the teams kind of started to focus more on the Gemini use cases. So like interactive conversational and and editing</p>
</details>

嗯，基本上，我们组队合作，构建了这个模型，它后来被称为 Nano Banana。所以，是的，这就是它的起源故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> um and and essentially what happened is we teamed up and we we built this model which became what's known as nano banana. Um so yeah that's sort of the origin story but</p>
</details>

### Nano Banana 的诞生与特点

是的，我想再补充一些背景。我们的 Imagine 模型在视觉质量方面一直名列前茅，我们确实专注于这些专业的生成和编辑用例。然后当 **2.0 Flash**（Gemini 模型的一个快速版本）发布时，我们才真正开始看到同时生成图像和文本的魔力，这样你就可以讲故事了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah and and I think maybe just some more background on that. So our imagine models were always kind of top of the charts for visual quality and you know we really focus on kind of these specialized generation editing use cases and then when 2.0 Flash came out that's when we really started to see some of the magic of like being able to generate images and text at the same time so you can maybe tell a story. Um just the magic of being able to talk to images and edit them conversationally. Uh but the visual quality was maybe not where we wanted it to be. And so Nano Banana or Gemini 2.5 flash image um</p>
</details>

只是能够与图像对话并进行对话式编辑的魔力。但是视觉质量可能没有达到我们想要的水平。所以 Nano Banana，或者说 Gemini 2.5 Flash 图像...

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um just the magic of being able to talk to images and edit them conversationally. Uh but the visual quality was maybe not where we wanted it to be. And so Nano Banana or Gemini 2.5 flash image um</p>
</details>

Nano Banana 听起来更酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Nano Banana is way cooler.</p>
</details>

它更容易说，容易得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's it's easier to say. It's a lot easier.</p>
</details>

这个名字流传了下来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's the name that stuck.</p>
</details>

是的，这个名字流传了下来。但从这个意义上说，它真正成为了两全其美的结合，即 Gemini 的智能和多模态的对话性质，加上 Imagine 的视觉质量。我觉得这可能就是它能引起很多人共鸣的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yes, it's the name that stuck. Uh but it really became kind of the best of both worlds in that sense like the Gemini smartness and the multimodal kind of conversational nature of it plus the visual quality of imagine. And I feel like that's maybe what resonates a lot with people.</p>
</details>

哇。太棒了。那么，我想当你们在开发和测试模型时，有哪些“惊喜时刻”让你们觉得“我知道这会火，我知道人们会喜欢它”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wow. Amazing. Um, so I guess when you were testing out a model, as you were developing it, what were some wow moments um that you found, I know this is going to go viral. I know people will love this.</p>
</details>

### 用户体验与“惊喜时刻”

我实际上并没有觉得它会火，直到我们在**Ellarina**（一个内部测试平台或早期发布平台）上发布了它。我们看到的是，我们预算的每秒查询量与我们之前在 Elm Marina 上的模型相当。但随着人们涌向 Ella Marina 使用这个模型，我们不得不不断提高这个数字。我觉得那是我第一次真正意识到：“哦，哇。这对很多人来说都非常有用。”它甚至让我感到惊讶。我不知道整个团队怎么想，但我们当时确实在努力制作最好的对话式编辑模型。但当人们特意使用一个网站，而这个网站实际上只在一定比例的时间内提供这个模型，但即使如此也值得去那个网站使用这个模型时，它才真正开始流行起来。所以，我认为那至少对我来说是一个时刻，我当时觉得“哦，哇，这会变得更大。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I So I actually didn't feel like it was going to go viral until we had released on Ellarina. And what we saw was that we budgeted like, you know, a comparable amount of queries per second as we had for our previous models that were on Elm Marina. And we had to keep upping that number as people were going to Ella Marina to use the model. And I feel like that was the first time when I was really like, "Oh, wow. This is something that's very very useful to a lot of people." Like I it surprised even me. I don't know about the whole team, but like we, you know, we were trying to make the best conversational editing model possible. But um but then it really started taking off when when yeah when people were like going out of their way and using a using a website that would actually only give you the model some percentage of the time. But even that was worth like using going to that website to use the model. So I think that was really the moment at least for me that I was like oh wow this is this is going to be bigger.</p>
</details>

这实际上是条件反射人们的最佳方式，只给他们部分奖励，而不是一直给，这是设计使然。我早些时候也有一个时刻，那是当我尝试在不同代模型上进行一些类似的查询时。其中很多都与我小时候想成为的东西有关。比如宇航员探险家，或者把我放在红毯上。我在模型发布之前，在一个内部演示中尝试了它。那是我第一次看到输出结果真的像我。你们经常玩这些模型。我之前唯一一次看到这种情况是，如果你微调一个模型，比如使用**Laura**（一种用于微调模型的低秩适应方法）或其他方法来做，你需要多张图片，而且需要很长时间，然后你还得把它部署到某个地方。所以这是第一次，它就像是**零样本学习**（Zero-shot: 模型无需特定训练数据即可执行新任务的能力）。哦，哇，只需一张我的图片，它就看起来像我，我当时就觉得哇。然后我们有了很多幻灯片，上面都是我的脸，因为我试图说服其他人这真的很酷。我认为更多人意识到这是一个非常有趣的功能是在他们自己身上尝试之后，因为在别人身上看到它很有趣，但它并不能真正引起人们的情感共鸣。它让它变得如此个人化。就像你、你的孩子、你的配偶，还有你的狗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's actually the best way to condition people like only give them a rewards partially not all the time by design. Uh I had a moment earlier um and that was when so I've been trying some similar queries on kind of multiple generations of models over time. Um and a lot of them have to do with like things I wanted to be as a kid. So like an astronaut explorer or you know put me on the red carpet and I tried it on a demo that we had internally before we released the model. It was the first time when the output actually looked like me. Um and you know you guys play with these models all the time. The only time that I've seen that before is if you know you fine-tune a model, you know, using Laura or some other method to like do that and you need multiple images and takes a really long time and then you have to like actually serve it somewhere. So this was the first time when it was like zero shot. Oh wow, just one image of me and it looks like me and I was like wow. And then there became these like we have decks that are just like covered in my face as I was trying to convince other people that it was really cool. Um, and really I think the moment more people realized that it was like a really fun feature to use is when they tried it on themselves because it's it's kind of fun when you see it on another person, but it doesn't really resonate with people emotionally. It makes it so personal. It's like you your kids, you know, your spouse and and I think that's your dog,</p>
</details>

你的狗。这才是真正开始在内部引起共鸣的东西。然后人们就开始制作所有这些 80 年代风格的自己改造版本。那时我们才真正开始看到大量的内部活动，我们当时觉得：“好吧，我们有所发现了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> your dog. And and and that's really what started kind of resonating internally. And then people just started making all these like 80s makeover versions of themselves. And that's when we really started to see like a lot of internal activity and we were like, "Okay, we're on to something."</p>
</details>

测试这些模型非常有趣，因为你总能看到人们创造出这些令人惊叹的创意作品。哦，哇。我从没想过那会是可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's it's a lot of fun to test these models when we're making them because you just you see all these amazing creative things that people make. Oh, wow. I I never thought that was possible.</p>
</details>

所以，这真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, it's it's really fun.</p>
</details>

不，我的意思是，我们已经和整个家庭一起玩过了，这简直是疯狂的乐趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> No, it's I mean, we've dealt with the whole with the whole family and it's it's it's a it's a crazy amount of fun.</p>
</details>

### 艺术与创意工具的未来

那么，长远来看，这会走向何方？我的意思是，我们创造了这些新工具，我认为它们将永远改变视觉艺术，对吧？我的意思是，我们突然可以转换风格。我们突然可以生成一个主题的一致图像，对吧？我过去有一个非常复杂的 Photoshop 手动处理过程。现在我只需输入一个命令，它就会神奇地发生。但最终会变成什么样呢？我的意思是，我们有想法了吗？你知道，五年后，大学里会如何教授创意艺术？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, think a bit about long term. Where does this lead? Right. I mean we we built these new tools that I think will change visual arts forever, right? I mean there we suddenly can transfer style. We suddenly can you generate consistent images of a subject, right? I have I have what used to be a very complex manual Photoshop process. Suddenly I type one command and magically happens. But what's the end state of this? I mean do do we have an idea yet? You know how will how will creative arts be taught in a university in you know five years from now?</p>
</details>

你想谈谈这个吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">want to take that.</p>
</details>

我认为这将是一个范围广泛的事物。我认为在专业方面，我们听到很多声音说，这些模型让创作者能够做一些不那么繁琐的工作，对吧？他们可以更具创意，并且可以将 90% 的时间用于创作，而不是 90% 的时间用于编辑和执行这些繁琐的手动操作。所以我对此感到非常兴奋。我认为我们会在这个领域看到创造力的爆发。然后我认为对于消费者来说，这可能也有两个方面。一方面，你可能会做一些有趣的事情，比如给我孩子制作万圣节服装，对吧？那里的目标可能只是与某人分享，对吧？你的家人或朋友。另一方面，你可能会有像制作幻灯片演示文稿这样的任务，对吧？我一开始是顾问。我们一开始就谈到了这一点。你花了很多时间在非常繁琐的事情上，比如努力让东西看起来漂亮，努力让故事讲得通。我认为对于这类任务，你可能只需要一个代理，你告诉它你想要做什么的规格，然后它就会出去为你 nicely 地布局。它会为你想传达的信息创建正确的视觉效果。我认为这将是一个范围，取决于你想要做什么。你是想参与创意过程，实际修修补补并与模型协作，还是只想让模型去完成任务，尽可能少地参与？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So I I think it's going to be a spectrum of things, right? I think on the professional side, a lot of what we're hearing is that these models are allowing creators to do um less tedious parts of the job, right? They can be more creative and they can spend, you know, 90% of their time being creative versus 90% of their time like editing things and doing these tedious kind of manual operations. So I'm really excited about that. Like I think we'll see kind of an explosion of creativity like on that side of the spectrum. Um and then I think for consumers there's sort of like two spect two sides of the spectrum for this probably. One is you know you might just be doing some of these fun things like Halloween costumes for my kid, right? And and the out the goal there is probably just to like share it with somebody, right? Your family or your friends. Um on the other side of the spectrum, you might have these tasks like putting together a slide deck, right? I started out as a consultant. We talked about that at the beginning. Um, and you spend a lot of time on like very tedious things like trying to make things look good, trying to make the story make sense. I think for those types of tasks, you probably just have an agent who you give the specs of what you're trying to do and that it goes out and like actually lays it out nicely for you. It creates the right visual for the information that you're trying to convey. And it really is going to be this, I think, spectrum depending on what you're trying to do. Like do you want to be in the creative process and actually tinker with things and collaborate with the model or do you just want the model to like go do the task and be as minimally involved as possible?</p>
</details>

那么，在这个新世界里，艺术是什么？我的意思是，有人最近说，艺术是你能否创造一个**分布外样本**（Out of distribution sample: 与训练数据分布不同的样本）。这是一个好的定义吗？还是说它目标太高了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So So in this new world then what what is art? I mean somebody recently said art is if you can create an an out of distribution sample. Is is that a good definition or or is it is it is it aiming too high? Right.</p>
</details>

你认为艺术是分布外的，还是模型内的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Do you think if art is out of distribution or in distribution for the model?</p>
</details>

就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> There we go.</p>
</details>

我认为那个分布外样本的定义有点过于严格。我认为很多伟大的艺术实际上是**艺术领域内分布**（In distribution for art: 在现有艺术风格或模式范围内的作品）的，是发生在它之前的艺术。所以，我的意思是，艺术是什么？我认为这是一个非常哲学性的辩论，有很多人都在讨论这个问题。对我来说，我认为艺术最重要的东西是意图。所以，这些模型生成的东西是一个工具，让人们能够创造艺术。我实际上并不担心高端和创意人士以及专业人士，因为我看到，如果你把我放在这些模型面前，我无法创造出任何别人想看的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that out of distribution sample that is a little bit too restrictive. I think a lot of great art is actually in distribution for art that occurred before it. So I I mean what is art? I think it's like a very philosophical debate and there's a lot of people that do discuss this. Like to me I think that the most important thing for art is intent. And so the the what is generated from these models is is a tool to allow people to create art. And I'm actually not worried about the high-end and the creatives and the professionals because I've seen like if you put me in front of one of these models like I can't create anything that anyone wants to see</p>
</details>

但是，我看到那些有创意的人，那些有想法和意图的人，他们能做些什么，我觉得这对我来说是最有趣的事情，他们创造的东西真的很棒，也很有启发性。所以，我觉得高端用户、专业人士和创意人士，他们总是会使用最先进的工具，而这只是他们工具箱中的另一个工具，让他们能够创造出酷炫的东西。我认为关于这个模型，我一直从创意人士和艺术家那里听到一个非常有趣的事情是，他们中的很多人觉得以前无法使用很多 AI 工具，因为它没有提供他们对艺术所期望的控制水平。一方面，这就像是角色或对象的一致性，他们确实用它来为故事提供引人入胜的叙事，所以以前当你无法反复获得相同的角色时，这非常困难。然后我认为第二个我一直从艺术家那里听到的事情是，他们喜欢能够上传多张图片，然后说“在这个角色上使用这种风格”或者“将这个东西添加到这张图片中”，这即使是以前的图像编辑模型也很难做到。我很好奇，当你们训练这个模型时，你们是否真的在优化这些方面，或者你们是如何考虑这些的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but like and but I've seen what people can do who are creative people and who have like intent and these ideas and I think it's like that's the most interesting thing to me is is the things they create are really amazing and and inspiring for me. So, I feel like the the high-end and the the the professionals and the creatives, like they'll always use state-of-the-art tools, and this is like another tool in the tool belt for people to make cool things. I think one of the the really interesting things that I kept hearing about this model in particular from like creatives and artists was a lot of them felt like they couldn't use a lot of AI tools before because it didn't allow them the level of control that they expected for their art. what on one side that was like the um characters or object consistency like they really used that to have a compelling narrative for a story and so before when you couldn't get the same character over and over it was very difficult and then I think second the like second thing I hear all the time from artists is like um they love being able to upload multiple images and say like use the style of this on this character or add this thing to this image which is something that I think was very hard to do even with previous image edit models. I guess I'm curious like was that something you guys were really optimizing for when when you trained this one or or how did you think about that?</p>
</details>

我的意思是，是的，当然，可定制性和角色一致性是我们开发过程中密切关注的事情，我们尽力做到了最好。我认为另一件事是交互式对话的迭代性质。你知道，艺术也倾向于迭代，你会做很多改变，看看它走向何方，然后做更多改变。我认为这使得模型更有用，实际上，这也是我认为我们可以大大改进模型的一个领域。我知道，一旦你进入非常长的对话，它就会开始稍微不那么听从你的指示。但这是我们计划改进的事情，让模型更像一个自然的对话伙伴或创意伙伴，来创造一些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I mean yeah definitely sort of customizability and character consistency are things that we closely monitored during the development and we tried to do the best job we could on them. Um, I think another thing is also uh the iterative nature of kind of like an interactive conversation. Um, and you know, art tends to be iterative as well where you you make lots of changes, you see how it where it's going and you make more. Um, and this is another thing I think makes the model more useful and and actually that's an area that I also feel like we can improve the model greatly. Like I know that um once you get into really long conversations like it it starts to follow um your instructions a little bit worse. But like this something that we're planning to improve on and make the model more kind of like a natural conversation partner or like a creative partner in in making something.</p>
</details>

### 图像模型的演进：2D、3D与交互

你们发布 Nano Banana 之后，一件非常有趣的事情是，我们开始到处听到关于编辑模型的消息。就像是，在你们发布之后，全世界都醒了，他们发现编辑模型很棒，每个人都想要它。然后很明显，它就进入了可定制性、个性化领域。然后，奥利弗，我知道你以前在 **Adobe**（一家著名的软件公司，以其创意和多媒体软件产品而闻名）工作，那里也有我们过去手动编辑东西的软件。你如何看待现在模型层面的“旋钮”与我们过去所做的相比是如何演变的？嗯，是的，我的意思是，我认为 Adobe 一直以来以及专业工具通常都要求的是大量的控制，大量的旋钮，大量的...所以，总有一个平衡点，比如我们希望有人能够在手机上使用它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> One thing that's so interesting is after you guys launched Nano Banana, we start to hear about editing models all the time everywhere. Like it's like after you launched the world woke up and they were editing model, it's great, everyone wants it. And then obviously like it it kind of um you know goes into the customizability the personalization of it and then uh Oliver I know you used to be Adobe and then there's also software where we used to manually edit things. How do you see the knobs evolve now on the model layer versus what we used to do? Um, yeah. I mean, I think that, you know, one thing that that Adobe has always done and the professional tools generally require is lots of of control, lots of knobs, lots of of So, there's always a balance of like we want someone to be able to use this on their phone.</p>
</details>

也许只通过语音界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, maybe with just like a a voice interface,</p>
</details>

我们也希望像真正的专业艺术创作者这样的人能够进行精细的调整。我认为我们还没有完全弄清楚如何同时实现这两者。但是有很多人正在构建真正引人注目的用户界面，我认为这有很多不同的实现方式。嗯，我不知道。你有什么想法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and we also want someone who can really like a really professional art creative to be able to do fine skill adjustments. I think we haven't exactly figured out how to enable both of those yet. Um, but there's a lot of people that are building really compelling UIs like um and and and I think it's a you know we're Yeah, I think I think there's different ways it can be done. Um, I don't know. You have thoughts?</p>
</details>

嗯，我也希望我们能达到一个点，你不需要学习所有这些控件的含义，模型可以根据你已经完成的上下文智能地建议你接下来可以做什么，对吧？嗯，这感觉就像是有人要解决这个问题的好时机。那么，未来的用户界面会是什么样子呢？在某种程度上，你可能不需要学习以前必须学习的一百件事，但工具应该足够智能，能够根据你正在做的事情向你建议它能做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, I also hope that we get to a point where you don't have to learn what all these controls mean and the model can maybe smartly suggest what you could do next based on the context of what you've already done, right? Um, and that feels like it's kind of prime for someone to tackle that on. So like what do the UIs of the future look like um, in a way where you probably don't need to learn a hundred things that you had to before, but like the tools should be smart enough to suggest to you what it can do based on what you're already doing.</p>
</details>

这是一个多么富有洞察力的观点。我使用 Nano Banana 的时候确实有过这样的时刻，我当时想，我不知道我想要这个，但是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's such an insightful take. I definitely had moments when when I used Nano Banana, I was like, I didn't know I wanted this, but</p>
</details>

但我甚至没有要求这种风格。我甚至不知道这种风格叫什么。所以这对于图像嵌入和语言嵌入不是一对一的，我们无法将所有编辑任务都映射到语言上，这非常有启发性。请继续。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but I didn't even ask for this style. I don't even know have the words for that what that style even, you know, is called. So this is like very insightful on how image embedding and the language embedding is not one to one like we cannot map to like all the editing task with language. So oh go ahead.</p>
</details>

是的，让我稍微提出一个反驳观点，看看这会走向何方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, let me let me sort of take a little the counter point just to see where this goes.</p>
</details>

界面复杂性的问题可能会受到我们在软件中能表达什么、我们能在软件中使某物变得多容易的限制，这在某种程度上也受到用户愿意容忍多少复杂性的限制。你知道，如果你有一个专业人士，他们只关心结果，他们愿意容忍大量的复杂性，他们有使用它的培训、教育和经验，对吧？那么我们最终可能会有很多旋钮和拨盘，只是拨盘的种类非常不同，对吧？我的意思是，今天如果你使用光标或某种编码工具，它并不是一个超级简单的、单一的文本提示界面，它有很多，你知道，这里添加上下文，这里有不同的模式等等，对吧？所以，我们是否会为高级用户提供超复杂的界面？那会是什么样子？我非常喜欢 **Comfy UI**（一个流行的基于节点的工作流界面，用于稳定扩散等生成模型）和**基于节点的用户界面**（Node-based interfaces: 一种通过连接不同功能节点来构建复杂工作流的界面设计）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> The other the question of how complex the interface be can be limited by sort of what we can express in software, how easy we can make something in software which to some degree is also limited by how much complexity is a user willing to tolerate. And you know if you have a professional they only care about the result they're willing to tolerate a vast amount of complexity they they have the training they have the education they have the experience to use that right then we may end up with lots of knobs and dials it's just very different of dials right I mean today if you use a cursor or so for coding it's not that it has a super easy you know single text prompt interface it has it has a a good amount of you know here add context here different modes and so on right so so will we have Will we have like the the ultra sophisticated interface for the for the power user and how how would that look like? So I'm a big fan of Comfy UI and nodebased interfaces in general</p>
</details>

而且它很复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and that is complex</p>
</details>

而且它很复杂，但它也非常健壮，你可以做很多事情。所以，你知道，在我们发布 Nano Banana 之后，我们看到人们构建了所有这些非常复杂的 Comfy UI 工作流，他们将一堆不同的模型和不同的工具组合在一起，这产生了一些，例如使用 Nano Banana 作为视频模型的**故事板**（storyboards: 电影、动画或交互式媒体中一系列图像，用于规划叙事流程）或关键帧的方式，你可以将这些东西连接起来，并获得真正惊人的输出。所以，我认为在专业或开发者层面，这类界面非常棒。至于**专业消费者**（Proumer: 介于专业人士和普通消费者之间的用户群体）层面，我认为未来几年它会是什么样子，这在很大程度上是未知的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and it's complex but it's also it's very robust and you can do a lot of things and so you know after we released Nano Banana we saw people building all these really complicated comfy UI workflows where they were combining a bunch of different models together and different tools and that generated some of the like for example using nanobana as um as a way to get storyboards or key frames for video models like you can plug these things together and and get really amazing outputs. So, I I think that like at the the pro or the developer level, like these kinds of interfaces are are great. Um, in terms of like the proumer level, I think it's it's very much unknown what it's going to look like in in a couple years.</p>
</details>

是的，我认为这真的取决于你的受众，对吧？因为对于普通消费者来说，我总是拿我的父母举例。聊天机器人实际上很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I think it just really depends on your audience, right? Because for the regular consumer, like I use my parents always as an example. The chatbot is actually kind of great.</p>
</details>

哦，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, yeah.</p>
</details>

因为你不需要学习新的用户界面。你只需上传图片，然后与它们对话，对吧？这方面很棒。然后对于专业人士，我同意你需要比你所知道的更多的控制，然后可能介于两者之间，这些人可能想做这些事情，但过去被专业工具吓倒了，对于他们来说，我确实认为有一个空间，你需要比聊天机器人提供更多的控制，但你不需要像专业工具提供的那样多的控制，那么这种介于两者之间的状态是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Because you don't have to learn a new UI. You you just upload your images and then you talk to them, right? Like it's it's kind of amazing that way. Then for the pros, I agree that like you need so much more control than you know and then there's somewhere in between probably which are people who may want to be doing this but they were too intimidated by the professional tools in the past and for them I do think that there's a space of like that you need more control than the chatbot gives you. Uh but you don't need as much control as what the professional tools give you and like what's that kind of in between state?</p>
</details>

那里有很多机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> There's a ton of opportunity there.</p>
</details>

那里有很多机会。你提到 Comfy UI 很有趣，因为它处于工作流的另一个极端，一个工作流可以有数百个步骤和节点，你需要确保所有这些都有效，而另一个极端是 Nano Banana，你用文字描述一些东西，然后得到一些东西，比如我不知道模型架构之类的，但我想你的观点是世界正在走向一个由一个提供商托管的模型集合，它能做所有事情，还是你认为世界正在走向更多的人构建工作流。Nano Banana 是 Comfy UI 工作流中的一个节点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> There's a ton of opportunity there. It is interesting you mentioned comfy UI because it's on the other far spectrum of workflow like a workflow can have hundreds of steps and notes and you need to make sure all of them work whereas on the other side of the spectrum there's nano banana you kind of describe something with words and then you get something out like I don't know what's a model architecture stuff like that but um I guess is your view that the world is moving to an ensemble of a model hosted by one provider doing it all or do you think the world is moving to more of everyone building a workflow. Nano Banana is one of the nodes in comfy work UI.</p>
</details>

嗯，我绝对不认为在任何时候，一个模型就能完全满足广泛的用例。所以我认为模型的多样性将永远存在。例如，我们可以优化模型以遵循指令，确保它完全按照你想要的方式执行，但对于那些寻求创意或灵感的人来说，它可能是一个更糟糕的模型，他们希望模型能够接管并做其他事情，变得疯狂。所以，我只是认为有如此多的不同用例和如此多类型的人，以至于这个领域有很大的空间容纳多个模型。这就是我看到我们前进的方向。我不认为这会是一个“一统天下”的单一模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um I I definitely don't think that that the the broad amount of use cases will be fully satisfied by one model at any point. So I think that there will always be a diversity of models. some like um I'll give you an example, but some you know we could we could optimize for um instruction following in our models. Make sure it does exactly what you want, but it might be um a worse model for someone who's looking for ideiation or kind of inspiration where they want the model to kind of take over and and do other things, go crazy. So like I just think there's so many different use cases and so many types of people that like there's a lot of space there's a lot of room in this space for multiple models. So that's that's where I see us going. I don't think this is going to be like a single to rule it a single model to rule them all.</p>
</details>

完全理解。让我们转向光谱的另一端，从专业人士的角度来看。你认为未来的幼儿园孩子会通过在小平板上画一些东西来学习绘画，然后人工智能将其变成一幅美丽的图像，这样他们就能接触艺术吗？我不知道你是否总是想把它变成一幅美丽的图像，但我认为人工智能在某种程度上可以成为你的伙伴和老师，这是你以前没有的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Complete sense. Let's go to the very other end of the spectrum from the professional. Do you think kindergarteners in the future will learn drawing by by sketching something, you know, on a on a little tablet and then you have the AI make turn that into a beautiful image and and so that's how how they they allow get in touch with art. I don't know if you always wanted to turn into a beautiful image, but I but I think there's something there about the AI being again a partner and a teacher to you in a way that you like didn't have. So I</p>
</details>

我以前不会画画，现在仍然不会，真的没有任何天赋。但是我认为如果我们可以用这些工具来实际教你一步一步地做，并帮助你批评，也许再次向你展示图像的自动完成功能，比如我下一步可以做什么，对吧？或者给我看几个选项，我该如何实际做到这一点？所以我希望它更多地朝这个方向发展。我不认为我们都希望每个五岁孩子的图像都突然看起来完美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> didn't know how to draw, still don't um don't have any talent for it really. Uh, but I think it would be great if we could use these tools in a way that actually teaches you kind of the step by steps and helps you critique and maybe again shows you kind of like an autocomplete almost for images like what like like what's the next step that I could take, right? Or maybe show me a couple of options and like how do I actually do this? So, I hope it's more that direction. I I don't think we all want, you know, every 5-year-old's image to suddenly look perfect.</p>
</details>

我们可能会在这个过程中失去一些东西。作为一个在高中所有课程中，艺术和素描课最挣扎的人，我实际上会更喜欢它，但我知道很多人希望他们的孩子学习绘画，我理解这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> We we we would probably lose something um in the process. As someone who struggled the most in high school out of all my classes of the art and the sketching class, I actually would have would have preferred it, but I know a lot of people want their kids to learn to draw, which I understand.</p>
</details>

这很有趣，因为我们一直在努力让模型创作出像孩子般的蜡笔画，这实际上相当具有挑战性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's funny because we've been trying to get the model to create um like childlike crayon drawings, which is actually quite challenging.</p>
</details>

讽刺的是，你知道，有时难以制作的东西是因为抽象程度非常高，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, ironically, you know, sometimes the the things that are hard to make are because the level of abstraction is very large, right?</p>
</details>

所以，制作这类图像实际上相当困难。你专用的学前班。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, it's actually quite difficult to make those types of images. your dedicated prek fin.</p>
</details>

我们现在确实有研讨会评估，试图看看我们是否有所改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> We we do have seminar evals right now to try to see if we're getting better.</p>
</details>

### AI 在教育领域的潜力

总的来说，我对人工智能在教育方面的应用非常乐观。你知道，部分原因是，我认为我们大多数人都是视觉学习者，对吧？所以现在作为导师的人工智能，它所能做的基本上就是与你交谈或给你文本阅读，而这绝对不是学生学习的方式。所以我认为这些模型在通过提供视觉线索来帮助教育方面具有巨大的潜力。你知道，想象一下，如果你能得到一个事物的解释，你不仅得到文本解释，还能得到图像和图表，这些都能帮助解释它们是如何工作的。我认为一切都会变得更有用，对学生来说更容易获取。所以我对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I'm in general I'm very optimistic about AI for education. And you know part of the reason is I think that most of us are visual learners, right? So that AI right now as a tutor basically all it can do is is talk to you or give you text to read and that's definitely not how students learn. So I think that these models have a lot of potential as a way to help education by giving people sort of visual cues. You know, imagine if you could get an explanation for something where you get the text explanation, but you also get images and figures that kind of like help explain how they work. I think it just everything will be much more useful, much more accessible for students. So I'm really excited about that. That is a</p>
</details>

关于这一点，一件非常有趣的事情是，当 Nano Banana 问世时，它几乎感觉就像是推理模型的一部分用例。比如你有一个图表。当然。对吧？就像你可以通过视觉解释一些知识。所以模型不仅仅是做视觉方面的近似。它也有推理方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> on that point, one thing that's very interesting to us is that when Nano Banana came out, it almost felt like there's part of a use case is the reasoning model. Like you have a diagram. Absolutely. Right. Like you can explain some knowledge visually. So the model not just doing approximation of the visual aspect. There's the reasoning aspect to it too.</p>
</details>

你认为我们也会走向那个方向吗？你认为所有大型模型都会意识到，哦，要成为一个好的**大型语言模型**（LLMs: Large Language Models）或**视觉语言模型**（VLM: Vision-Language Model），我们必须同时拥有图像、语言和音频等等吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Do you think that's where we're going to? Do you think all the model large models will realize that oh like to be a good LM or VL like uh VLM we have to have both image and language and audio and so on so forth.</p>
</details>

100%。我绝对是这么认为的。这些 AI 模型最让我兴奋的未来是它们成为人们完成更多事情的工具。我认为如果你想象一个未来，你拥有这些**自主代理模型**（Agentic models: 能够自主规划和执行任务的AI模型），它们只是互相交流并完成所有工作，那么这种视觉交流模式就变得不那么必要了。但是只要有人参与其中，只要他们解决任务的动机来自人类，我认为视觉模态对于任何这些未来的 AI 代理来说都将至关重要，这是完全有道理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> 100%. I definitely think so. Um the the future for these AI models that I'm most excited by is where they are tools for people to accomplish more things. Like I think if you imagine a future where you have these agentic models that just talk to each other and do all the work, then it becomes a little bit less necessary that there's like this visual mode of communication. But as long as there's people in the loop and as long as the the kind of the the motivation for the task they're solving comes from people, I think it makes total sense that that visual modality is going to be really critical for any of these AI agents going forward.</p>
</details>

我们会不会达到一个点，你要求它创建一个图像，它会思考两个小时，自己进行推理，有草稿，探索不同的方向，然后给出一个最终答案？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Will we get to a point where there's actually so of you know I'm I'm asking you to create an image it sits for two hours reasons with itself has drafts explores different directions and then comes back with a final answer.</p>
</details>

是的。当然。如果必要的话。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Absolutely. If it's if necessary. Yeah. Like</p>
</details>

也许不仅仅是一张图片，而是你可能正在重新设计你的房子，你可能真的不想参与这个过程，对吧？但你觉得，好吧，它看起来是这样的，这是我喜欢的一些灵感。然后你把它发送给一个模型，就像你把它发送给一个设计师一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and maybe not just for a single image but to the point of you know maybe you're redesigning your house and maybe you actually really don't want to be involved in the process right but you're like okay this is what it looks like this some this is some inspiration that I like. And then you send it to um a model the same way that you would send it to like a designer.</p>
</details>

这是视觉深度研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's the visual deep research.</p>
</details>

这基本上就像是视觉深度研究。我真的很喜欢这个词。然后它就会去做它的事情，可能会搜索适合你环境的家具，然后它会回来给你提供选项，因为也许你不想花两个小时在一个东西上，比如艺术书籍，或者 10 页的幻灯片演示文稿。我还认为，如果你考虑一下说明书或宜家说明书之类的东西，那么将一个难题分解成许多中间步骤，作为一种交流方式，可能会非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> The vis it's like visual deep research basically. I really like that term. And then it goes off and does its thing and searches for maybe the furniture that would go with your environment and then it comes back to you and maybe presents you with options because maybe maybe you don't want to sit for two hours at one thing art book you know 10 10 slide deck. I also I think if you if you think about like um instruction manuals or like IKEA directions or something then like breaking down a hard problem into many intermediate steps could be really useful as as a way to communicate.</p>
</details>

那么我们什么时候能生成乐高积木套装呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So when can we generate Lego sets?</p>
</details>

是的，也许很快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, soon maybe</p>
</details>

我们是否在某个时候需要 3D 作为其中的一部分？

<details>
<summary>View/Hide Original English</p>
</details>

对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right.</p>
</details>

我的意思是，关于世界模型和图像模型以及它们如何结合在一起，有很多争论。请在这里启发我们。我们最终会走向何方？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean there's a whole debate around world models and image models and how they fit together. thoughts enlighten us here. What is the what is the short summary of where we'll end up there?</p>
</details>

嗯，我的意思是，我不知道答案。我认为，显然真实世界是 3D 的。所以如果你有一个 3D 世界模型，或者一个具有显式 3D 表示的世界模型，那有很多优势。例如，一切都会始终保持一致。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um I mean I don't know the answer. I think that um obviously the real world is in 3D. So if you have 3D a 3D world model or world model that has explicit 3D representations. There's a lot of advantages. For example, everything stays consistent all the time.</p>
</details>

现在主要的挑战是，我们口袋里没有 3D 捕捉设备。所以就训练这些模型可用的数据而言，它主要是 2D 投影。所以我认为这两种观点对于我们未来的发展方向都是完全有效的。我有点倾向于投影方面，我认为我们可以解决几乎所有问题，如果不是所有问题的话，通过直接处理 3D 世界的投影，并让模型学习**潜在世界表征**（Latent world representations: 模型内部学习到的对世界的高级抽象表示）。我的意思是，我们已经看到视频模型具有非常好的 3D 理解能力。你可以对你生成的视频运行重建算法，它们非常准确。而且总的来说，如果你看看人类艺术的历史，它就像投影一样开始，对吧？人们在洞穴墙壁上绘画。我们所有的界面都是 2D 的。所以，我认为人类非常非常适合在 3D 世界的 2D 投影上工作。这对于界面和观看来说是一个非常自然的环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um now the main challenge is that we don't walk around with 3D capture devices in our pocket. So in terms of like the available data for training these models, it's largely the projection onto onto 2D. So I think that both viewpoints are totally valid for where we're going. I come a bit from the projection side like I think it we can solve almost all the problems if not all the problems working on the projection of the 3D world directly and letting the models learn the latent world representations. I mean we see this already that the video models have very good 3D understanding. You can run reconstruction algorithms over the videos you generate and they're they're very accurate. Um, and in general, if you look at like the history of human art, like it it it starts as like the projection, right? People drawing on on cave walls. Um, all of our interfaces are in 2D. So, I think that like humans are very very well suited for working on this projection of the 3D world into a 2D plane. And it's a really natural environment for interfaces and for viewing. So,</p>
</details>

这非常正确。就像，我业余时间是个漫画家，然后 2D 绘画就是光影，然后你呈现出 3D，我们能否欺骗自己相信它是 3D，或者它在纸上？但是人类能做到什么，你知道，就像绘画或模型能做到的是，我们可以在世界中导航，就像我们看到一张桌子，我们不能走过去。我想问题变成了，如果一切都是 2D 的，你如何解决这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> that is very true. like um so I'm a cartoonist in my spare time and then drawing in 2D is just light and shadow and then you present yourself with 3D cannot we trick ourselves to believing it's 3D or it's you know on a piece of paper but then what human can do that you know like a drawing or like a model can do is you we can navigate the world like we see a table we can't walk past it I guess the question becomes if everything is 2D how do you solve that problem</p>
</details>

嗯，我不知道，所以如果我们试图解决机器人产品的问题。我认为也许 2D 表示对于高层次的规划和可视化是有用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> well I don't think yeah so if we're trying to solve the robot products problems. I think maybe the 2D um representation is useful for planning and visualizing kind of at a high level.</p>
</details>

我认为人们通过记住世界的 2D 投影来导航。你不会在脑海中构建一个 3D 地图。你更像是“哦，我知道我看到这座建筑，我左转。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Like I think people navigate by um by remembering kind of 2D projections of the world. Like you don't you don't build a 3D map in your head. You're more like oh I know I see this building I turn left.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

所以我认为对于那种规划来说，这是合理的，但对于实际在空间中移动，3D 绝对是重要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So I think that like for that kind of planning it's reasonable but for the actual locomotion around the space like I definitely 3D is important there. So</p>
</details>

机器人技术。是的。他们可能需要 3D。这是唯一的救赎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> robotics Yeah. They probably need 3D. That's the saving grace.</p>
</details>

### 角色一致性与评估挑战

是的，是的。嗯，你之前提到的角色一致性，我真的很喜欢那个例子，当一个模型感觉如此个人化时，人们就非常想尝试它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Um, so character consistency, which you previously mentioned, I really love the example of like when a model feels so personal, like people are so tempted to try it.</p>
</details>

你是如何解锁那个时刻的？我问这个的原因是角色一致性太难了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> How did you unlock that moment? The reason why I asked is that character consistency is so hard.</p>
</details>

嗯，它有一个巨大的**恐怖谷效应**（Uncanny valley: 机器人或虚拟角色与人类相似度越高，但又不够完美时，会引起人类反感和恐惧的现象）。你知道，如果我看到一个我不认识的人的 AI 生成图像，我可能会觉得，好吧，也许是同一个人，但如果是我认识的人，只要有一点点不同，我实际上会感到非常反感，因为我会觉得这不是一个真实的人。所以在这种情况下，你如何知道你生成的东西是好的？这主要是通过用户反馈，比如“我喜欢这个”，还是通过其他方式？你看着脸，但是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh, there's a huge uncanny valley to it. like you know like if it's someone I don't know if I see their AI generation I'm like okay it's maybe the same person but if it's someone I know if there's just a little bit of a difference uh I I'm actually felt very turned off by it because I'm like this not a real person. So in that case how do you know what you're generating is good and then is it mostly by user feedback or like I love this or is it something else? You look at faces, you know, and but</p>
</details>

人脸检测摄像头用户和……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">face detection camera user and</p>
</details>

不。所以，甚至在你发布这个之前，对吧？所以，当我们开发这个模型时，我们实际上是从对我们不认识的人的脸进行角色一致性评估开始的，但这什么也说明不了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> no. So, so, so not even before you ever released this, right? So, when when we're we were developing this model, we actually started out doing character consistency evolves on faces we didn't know and it doesn't tell you anything, right?</p>
</details>

然后我们开始在我们自己身上测试它，并很快意识到，好吧，这就是你需要做的，因为这是一张我熟悉的脸。所以有很多“凭眼判断”的评估发生，团队只是在自己身上测试它。而且通常人们会测试他们认识的人，比如奥利弗现在可能足够熟悉我的脸，能够判断生成的是否真的是我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, and then we started testing it on ourselves and quickly realized like, okay, this is what you need to do because this is a face that I'm familiar with. And so there is a lot of sort of eyeballing evaluations that happens and just the team testing it on themselves. Um, and just generally people they know like Oliver probably knows my face at this point enough to be able to tell whether or not it's actually me when it's generated.</p>
</details>

嗯，所以我们确实做了很多这样的事情。然后，你知道，你理想情况下会在不同人群、不同年龄、不同群体的人身上进行测试，以确保它能全面工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, and so we do do a lot of that. Um, and then you know you you ideally test it on different sets of people, different ages, right? Different different kind of groups of folks to make sure that it kind of works across the board.</p>
</details>

是的，我认为他们是对的。我的意思是，这触及了一个更大的问题，那就是在这个领域进行评估真的非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, I think they're right. I mean that that touches that touches a little bit on this this um bigger issue which is that like eval are really difficult in this space</p>
</details>

嗯，因为人类的感知在它关心的事情上非常不均衡。所以，嗯，所以真的很难知道一个模型的角色一致性有多好，以及它是否足够好？它是否不够好？你知道，我认为在角色一致性方面我们还有很大的改进空间，但我认为对于某些用例，我们已经达到了一个点，而且，你知道，我们绝不是第一个编辑模型，但我认为一旦角色一致性的质量达到一定水平，它就可以一飞冲天，因为它对更多的事情变得有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> um because human perception is very uneven in terms of the things that it cares about. So um so really it's hard it's very hard to know like how good is the character consistency of a model and um is it good enough? Is it not good enough? Like you know I think there's there's still a lot of improvement we can make on character consistency but I think that for some use cases like we got to a point and that's you know we weren't the first edit model by any means but I think that like once the quality gets above a certain level for character consistency it can kind of just take off because it becomes useful for so much more.</p>
</details>

而且我认为随着它变得更好，它对更多的事情也会有用。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And I think as it gets better it'll be useful for even more things too. Yeah,</p>
</details>

我认为我们正在各种模态中看到的一个非常有趣的事情是，图像编辑和生成显然是其中之一，就像，我认为竞技场和基准测试以及所有这些都很棒，但特别是当你有像图像和视频这样的多维事物时，随着所有模型变得越来越好，很难将模型的所有质量浓缩成一个判断。所以就像，你知道，你正在判断，好吧，你将一个角色换到一张图像中，然后改变图像的风格。也许一个在角色交换和一致性方面做得更好，而另一个在风格方面做得更好？你如何判断哪个输出更好？这可能归结为这个人最关心什么以及他们想用它做什么。嗯，你们在决定部署哪个版本的模型或在训练期间真正关注什么时，是否有某些模型特征比其他事情更受重视？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think one of the really interesting things we're seeing across a bunch of modalities of which image edit and generation obviously is one is like um I think the arenas and benchmarks and everything are awesome but especially when you have like multi-dimensional things like image and video um it's very hard as all of the models get better and better to condense every quality of a model into like one judgment. So it's like, you know, you're judging, okay, you swap a character into an image and you change the style of the image. Maybe one did the character swap and consistency much better and the other did the style much better? Like how do you say which output is better? And it probably comes down to like what the person cares most about and what they're what they want to use it for. Um, are there like certain, you know, characteristics of the model that you guys value more than other things in like making those trade-offs when deciding which version of the model to deploy or like what to really focus on during training?</p>
</details>

### 模型权衡与用户需求

嗯，是的，有。我喜欢这个领域的一点是，没有正确答案。所以，实际上有很多，我不知道这是否是品味，但它就像是模型中的偏好。我认为你可以看到不同研究实验室在他们发布的模型中偏好的差异。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, yes, there are. One of the things I like about this space is that uh there is no right answer. So, actually there's quite a lot of of I don't know if it's taste, but it's like preference that goes into the models. And I think you can kind of see the difference in preferences of the different research labs in the models that they release.</p>
</details>

所以，当我们平衡两件事时，很多时候归结为，哦，好吧，我不知道。我只是更喜欢这种外观，或者，你知道，这个功能对我们来说更重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So like when we're balancing two things, a lot of it comes down to like, oh well, I I don't know. I just like this this look better or I you know, this this feature is more important to us.</p>
</details>

我想这对你们来说也很难，因为你们有这么多用户，对吧？就像 Google，在 Gemini 应用程序中，世界上每个人都可以使用它，而许多其他 AI 公司只考虑，我们只针对专业创意人士，或者我们只针对消费者内容创作者，而你们面临着独特而令人兴奋但又充满挑战的任务，那就是世界上任何人都可以做到这一点。我们如何决定每个人都想要什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I'd imagine it's hard for for you guys, too, because you have you have so many users, right? like Google like being in the Gemini app like everyone in the world can use that versus like many other AI companies just think about like we're only going for the professional creatives or we're only going for the consumer meat makers and like you guys have the unique and exciting but challenging task of like literally anyone in the world can do this. How do we decide what everyone would want?</p>
</details>

是的。有时我们确实会做出这些权衡。我们确实有一套优先级非常高的东西，我们不想在上面后悔。对吧？所以现在因为角色一致性非常棒，很多人都在使用它，我们不希望我们的下一个模型在这个维度上变差。对吧？所以我们非常关注它。我们非常关心当你想要照片时，图像看起来逼真，这很重要。我认为我们都更喜欢那种风格。嗯，你知道，例如在广告用例中，很多都是产品和人物的逼真图像。所以，我们想确保我们能够做到这一点。然后有时会有一些事情会落到次要位置。所以对于这个首次发布，模型在文本渲染方面不如我们希望的那么好，这是我们未来想要修复的问题。但这就像是，我们看了看，好吧，模型在 XYZ 方面表现良好，在这个方面表现不佳，但我们仍然认为可以发布，它仍然会是人们喜欢玩的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And it is sometimes we do make these trade-offs. We do have a set of things that are sort of like super high priority that we don't want to regret restress on. Right? So now because character consistency was so awesome and so many people are using it, we don't want our next models to get worse on that dimension. Right? So we pay a lot of attention to it. We care a lot about images looking photorealistic when you want photos and this is important. One, I think we all prefer that style. too. Um, you know, for advertising use cases, for example, like a lot of it is kind of photorealistic images of products and people. And so, we want to make sure that we can kind of do that. And then sometimes there are just things that like will kind of fall down the wayside. So, for this first release, the model is not as good as text rendering at as we would like it to be, and that's something that we want to fix in the future. But it was kind of one of those things where we looked at, okay, the model's good at XY Z, it's not as good at this, but we still think it's okay to release and it will still be an exciting thing for people to play with.</p>
</details>

如果你看看过去，对吧，我们之前的模型世代，很多事情我们都是用像 **ControlNet**（一种用于控制生成模型输出的神经网络架构）这样的辅助模型来做的，我们基本上找到了向模型提供结构化数据以实现特定结果的方法。这些较新的模型似乎退了一步，仅仅因为它们在提示方面非常出色，或者，你知道，提供参考图像并从那里获取信息。长远来看，这会走向何方？你认为这会在某种程度上回归吗？嗯，你知道，我的意思是，从创作者的角度来看，拥有，我不知道，开放姿态信息，这样我就可以为多个角色获得完全正确的姿态。这看起来非常有吸引力，对吧？或者换句话说，这就像是，最终一切都只是一个大模型，你把东西扔进去，还是我们可以提供一点结构来让它变得更好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> If you look at the past, right, we we we had for previous model generations, a lot of things we did with like sidecar models like control net or something like that where we basically figured out a way to provide structured data to the model to achieve a particular result. It seems like these newer models that has taken a step back just because they're so incredibly good in just prompting or or you know giving a reference image and picking things up from there. Where will this go long term? Do you think this will come back to some degree? Um you know like I mean for from the creators perspective right having I don't know open pose information so I can get get a pose exactly right right for multiple characters. This seems very very tempting, right? Is it like or to rephrase it a little bit, it's like does the bitter lesson hold here that at the end of the day everything's just one big model and you throw things in or is there is a little of structure we can we can offer to make this better?</p>
</details>

嗯，我的意思是，我认为总会有用户想要模型开箱即用无法提供的控制。但我认为我们努力做到，你知道，因为艺术家真正想要做某事时，他们想要意图被理解。我认为这些 AI 模型在理解用户意图方面越来越好。所以现在当你提出文本查询时，模型通常能理解你的目的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, I mean I think that there will be there'll always be users that want control that the model doesn't give you out of the box. But I think we we tried to make it so that um you know because really what really what an artist wants when they want to do something is they want the intent to be understood. And I think that that these um AI models are getting better at understanding the intent of users. So often when you ask text queries now the model gets what you're going for.</p>
</details>

所以，你知道，从这个意义上说，我认为我们可以在理解用户意图方面走得很远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So you know in that sense I think we can we can get pretty far with understanding the intent of our users.</p>
</details>

嗯，也许其中一些是个性化，比如我们需要了解你正在尝试做什么或你过去做过什么的信息。但我认为一旦你能理解意图，那么你通常就能进行那种编辑，比如这是一种非常结构保持的编辑，还是像一种自由形式的编辑，我们可以学习这些效果，我认为。但当然，仍然会有一个人真正关心每一个像素，比如这个东西需要稍微向左一点，再蓝一点，而这些人会使用现有工具来完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And um and maybe some of that is personalization like we need to know information about what you're trying to do or what you've done in the past. But I think once you can understand the intent then you can you can generally do the the type of edit like is this like a very structure preserving edit or is this like a free form kind of like we can learn these these kinds of effects I think. Um but still of course there's one person who's going to really care about every pixel and like this this thing needs to be slightly to the left and a little bit more blue and like those people will use existing tools to do that.</p>
</details>

我的意思是，我认为这就像，你知道，我想要一张有 26 个人拼写出字母表中每个字母的图像，或者类似的东西。对吧。那是一个我们认为我们离第一次就能做到这一点还有相当长一段距离的地方。另一方面，有了姿态信息，它可能会得到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I mean I think it's like you know I want an image with 26 people spelling out every letter of the alphabet or something like that. Right. That's off the thing where I think we're still quite a bit away from getting that right, you know, in the first try. On the other hand, with pose information, it could potentially get</p>
</details>

但问题是，你真的想成为那个提取姿态并提供信息的人吗？还是你只想提供一些参考图像，然后说“这才是我的真正目的，模型，你去搞清楚吧”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> But then the then the question I guess is like do you really want to be the one who's like extracting the pose and providing that as an information or do you just want to provide some reference image and say like this is actually what I want like model go figure this out right</p>
</details>

有 26 个人，现在和不同风格。说得够清楚了。是的，我认为在这种情况下，我不会花大量时间构建一个自定义界面来制作这张 46 人的图片，这似乎是我们能够解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> there are 26 people every now and different style. Fair enough. Yeah, I think in that in that case I wouldn't spend a ton of time building a custom um interface for making this this picture of 46 people seems like the kind of thing that we can we can solve.</p>
</details>

只是转移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Just transfer.</p>
</details>

你认为 AI 图像的表示方式会改变吗？我问这个问题的原因是，作为艺术家，我们有不同的格式可以玩。有 SVG，我们有锚点和贝塞尔曲线。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Do you think the representation of what the AI images are will change? So the reason why I asked the question is that as artists there's different formats we play with. There's the SVGs, we have anchor points and bezier curves.</p>
</details>

另一方面，有，你知道，波西或壁画，随你喜欢。我们也可以玩图层。还有另一个参数，就是你使用的画笔，比如画笔的纹理。所以，每一个参数你都可以编写脚本，并实际做一些非常个性化的事情。嗯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And on the other side, there's, you know, porcy or like fresco, what have you. There's layers that we can also play with. There's the other parameter which is what's the brush you use like the brush, the texture of it. So, every one parameter you can write script and actually uh do something very personal about it. Mhm.</p>
</details>

你认为像素是图像生成模型的正确表示方式，是最终目标吗？还是你认为我们还没有发明出一种全新的表示方式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Do you think like pixel is the right representation um the endgame for image generation model or do you think there's a net new representation that we haven't invented yet?</p>
</details>

这是一个简单的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's an easy question to</p>
</details>

哇。嗯，我会说，嗯，一切都是像素的子集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> wow. Um I I'll say that uh that um everything is a subset of pixels.</p>
</details>

这是真的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's true.</p>
</details>

因为我可以把所有文本都渲染成图像。所以我们能用纯像素走多远是一个有趣的问题。我认为，你知道，如果模型真的反应灵敏，并且能够很好地处理多轮交互，那么我认为你可以走得很远，因为我认为你想要离开像素领域的主要原因是为了可编辑性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So text is a subset of pixels because I could just render all the text as an image. So how far can we get with just pixels is an interesting question. I think you know if the model is really um responsive and handles multi-turn interactions well then I think you can probably get pretty far because the primary reason I think you would want to leave the pixel domain is for editability.</p>
</details>

嗯，所以，你知道，在需要字体或想要更改文本或想要像控制点一样移动事物的情况下，拥有像素和 SVG 以及其他形式混合生成可能会很有用。但是，如果我们能做到所有这些，如果多交互足够，那么我认为你可以用像素走得很远。嗯，我会说，这些具有原生能力的模型令人兴奋的一点是，你现在拥有一个可以生成代码和生成图像的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um and so you know in cases where you need to have your font or you want to change the text or you want to move things around just like with control points um it could be useful to have um kind of mix generation which consists of pixels and SVGs and other other forms. Um but if we can do it all, if we can if the multi- interaction is enough, then I think you can get pretty far with pixels. Um I will say that one of the things that's exciting about these um these models that have native capabilities is that you now have a model that can generate code and it can generate images.</p>
</details>

所以在这个交叉点上有很多有趣的事情，对吧？比如我可能想写一些代码，然后让一些东西栅格化，一些东西参数化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So there's a lot of interesting things that come in that intersection, right? Like maybe I wanted to write some code and then make make some some things be rasterized, some things be parametric.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

把它们都粘在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Like stick it all together,</p>
</details>

一起训练。这会非常酷。这是一个很好的观点，因为我确实看到有人发推文，要求 **Cloud Sauna**（这里可能指一个代码生成或多模态模型，如 Anthropic 的 Claude）在 Excel 表格上复制一张图像，其中每个单元格都是一个像素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> train it together. Like this would be very cool. That's such a good point because I did see a tweet of someone asking Cloud Sauna to replicate a image on an Excel sheet where every cell is a pixel</p>
</details>

这就像一个非常有趣的练习。它就像一个编码模型，对图像一无所知，但它却成功了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> which is like a very fun exercise. It was like a coding model like doesn't really know anything about you know images yet it worked.</p>
</details>

是的，有经典的鹈鹕骑自行车测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, there's the classic pelican riding a bicycle test.</p>
</details>

是的，完全正确。我有一个关于界面的问题，如果可以的话。抱歉，如果我提到了太多产品方面的东西，各位。我只是对产品方面非常好奇，比如，我想知道你们是如何考虑拥有人们使用 Nano Banana 编辑或生成图像的界面，而不是仅仅希望很多人在 API 中使用模型做不同的事情。我们已经谈到了很多不同的用例，比如广告、教育、设计、建筑。这些事情中的每一个都可以有一个基于 Nano Banana 构建的独立产品，以正确的方式提示模型，或者允许某些类型的输入等等。你们的愿景是，Gemini 应用程序中的产品就像一个供人们探索的游乐场，然后开发者将为某些用例构建单独的产品，还是你们也对拥有这些产品感兴趣？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, totally. I have one on on model like on interfaces if that's okay. I don't sorry if I'm bringing up too much product stuff guys. I'm just very curious on on the product front like um I guess I'm curious how you think about like owning the interface where people are editing or generating images with Nano Banana versus really just wanting a ton of people to use the model for different things in the API. Like we've talked about so many different use cases like ads, you know, education, um design, uh like architecture. Each of those things could be there could be a standalone product built on top of Nano Banana that prompts the model in the right way or allows certain types of inputs or whatever. Is your guys' vision like that the kind of the product in the Gemini app is like a playground for people to explore and then developers will build the individual products that are used for certain use cases or is that something you're also kind of interested in owning?</p>
</details>

我认为这有点包罗万象。所以我绝对认为 Gemini 应用程序是人们探索的入口点。Nano Banana 的一个好处是，我认为它表明乐趣是通向实用性的门户，你知道，人们来这里是为了制作自己的小雕像图像，但他们留下来是因为它帮助他们完成数学作业或帮助他们写东西，对吧？所以，我认为这是一个非常强大的过渡点。我们公司当然有兴趣构建和探索一些界面。所以，嗯，你知道，你可能在实验室里看到过乔什团队的 Flo，它正在努力重新思考 AI 电影制作人的工具是什么，对于 AI 电影制作人来说，图像实际上是迭代过程中的重要组成部分，对吧？因为视频创作成本很高，很多人在开始创作时会以帧为单位思考，他们中的很多人甚至在大型语言模型（LLM）领域开始，用于头脑风暴和思考他们首先想创造什么，嗯，所以我们在这个领域肯定有自己的位置，我们只是在思考它会是什么样子。嗯，我们有一个优势，就是它与模型和界面紧密相连，所以我们可以紧密耦合地构建它。嗯，然后肯定还有，你知道，我们可能不会去为一家建筑公司构建软件。我父亲是一名建筑师，他可能会喜欢那样。嗯，但我不认为我们会这样做，但有人应该去做。嗯，这就是为什么它令人兴奋，因为我们确实有开发者业务，我们有企业业务，所以人们可以使用这些模型，然后弄清楚，比如，针对这个特定受众的下一代工作流是什么，这样我就可以帮助他们解决问题。所以，我认为答案有点像是，是的，所有这三者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think it's a little bit of everything. Um, so I definitely think that the Gemini app is an entry point for people to explore. And the one the nice thing about Nano Banana is I think it shows that fun is kind of a gateway to utility where you know people come to make a figurine image of themselves but then they stay because it helps them with their math homework or it helps them write something, right? And and so I think that's a really powerful kind of transition point. Um there's definitely interfaces that we're interested in building and exploring as a company. And so um you know you may have seen Flo from Josh's team in labs that's that's really trying to rethink like what's what's the tool for AI filmmakers right and for AI filmmakers image is actually a big part of the iteration journey right because video creation is expensive a lot of people kind of think in frames um when they when they initially start creating and a lot of them even start in the LLM space for like brainstorming and thinking about what they want to create in the first place um and so there's definitely kind of place that we have in that space of just us trying to think about like what does look like. Um, we have the advantage of it kind of sitting close to the models and the interfaces so we can kind of build that in in a tight coupling. Um, and then there's definitely the, you know, we're probably not going to go build a software for an architecture firm. My dad is an architect and he would probably love that. Um, but I don't think that's something that we will do, but somebody should go and do that. Um, and that's why it's exciting because we do have the developer business and we have the enterprise business and so people can go use these models and then figure out like what's the next generation workflow for like this specific audience so that I can help them solve a problem. So I I think the answer is kind of like yes all three.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

是的。我提到了这一点。我不知道你们是否一直在关注 Nano Banana 在日本的反响，但是，嗯，我敢肯定你们已经看到了，这简直是疯了。这很有趣，现在我的 X 动态中有一半是这些在日本的 Nano Banana 重度用户，他们创建了 Chrome 扩展程序，其中一个叫做 Easy Banana，专门用于使用 Nano Banana 进行漫画生成和特定类型的动漫等。他们深入研究，基本上是为模型提供提示，并将输出存储在各种地方。嗯，显然是使用你们的基础模型来生成这些令人惊叹的动漫，你根本猜不到是 AI 生成的，因为它的精度和一致性等水平超出了我今天看到的任何单一模型所能做到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I I brought that up. I don't know if you guys have been following the reception of Nano Banana in Japan, but um I'm sure you've had it's it's been insane. And it's so funny like I now half of my X feed is these really heavy Nano Banana users in Japan who have created like Chrome extensions called there's one called like Easy Banana that's specifically for using Nano Banana for like manga generation and specific types of anime and things like that. And like they go super deep into basically prompting the model for you and storing the outputs in various places. Um using obviously your your underlying model to generate these like amazing anime that you would never guess were AI generated because like the level of of precision and consistency and that sort of thing is just beyond what I've seen any single model be able to do today.</p>
</details>

我想，嗯，就像贾斯汀说的，你们在模型中看到了哪些“倍增器”？我的意思是，例如，如果你解锁了角色一致性，你就可以生成不同的帧，然后你可以制作视频，然后你可以制作电影，对吧？嗯，所以这些事情，如果你做得对，做得非常好，就会有更多的下游任务可以从中衍生出来。嗯，只是好奇，你们是如何思考要解锁哪些“倍增器”的？那么下一个……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess um what are some like to Justin's point what are some force multipliers that you guys have seen in the model? So what I mean by this is for example if you unlock character consistency you can generate different frames and then you can make a video and then you can make a movie right. Um so these are the things that if you get it right and get it really well there's so much more downstream tasks that can derive from it. Um just curious like how do you think about what are the force m multipliers that you want to unlock? So the next</p>
</details>

下一个大的是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> what's the next big one</p>
</details>

下一个大的浪潮是什么，人们可以仅仅使用 Nano Banana 作为所有下游任务的基础模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> what's the next yeah big wave of people who can just use nano nano as the base model for all the downstream tasks.</p>
</details>

所以我认为当前的一个实际上也是延迟点，对吧？因为我认为，我只是觉得，当这些模型只需 10 秒就能生成下一帧时，迭代起来真的很有趣，对吧？如果你不得不坐在那里等两分钟，你可能就会放弃并离开，那会是一种非常不同的体验。所以我认为这是一个，就像必须有一些质量标准，因为如果它只是快，但质量达不到，那也无关紧要，对吧？就像你必须达到一个质量标准，然后速度就成为一个倍增器。我认为这种将信息可视化的一般想法，回到你之前提到的教育点，是另一种倍增器，对吧？那需要……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think one one current one actually is also the latency point right because I think because I think it's also just like it makes it really fun to iterate with these models when it just takes 10 seconds to generate the next frame right if you had to sit there and wait for two minutes like you would probably just give up and leave a very different experience so I think that's one just like there has to be some quality bar because if it's just fast and the quality isn't there then it also doesn't matter right like you have to hit a quality bar and then um then speed becomes a force multiplier I think this general idea of just visualizing information to your education point from earlier is sort of another one, right? And that needs</p>
</details>

好的文本。它需要真实性，对吧？因为如果你要开始制作关于某事的视觉解释器，嗯，它看起来很漂亮，但它也需要准确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> good text. It needs factuality, right? Because if you're going to start making kind of visual explainers about something, um it it looks nice, but it also needs to be accurate,</p>
</details>

对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right?</p>
</details>

所以，我认为这可能是下一个层次，在某个时候你也可以拥有一个为你个性化定制的教科书，对吧？不仅文本不同，视觉效果也不同。是的，**《钻石时代》**（The Diamond Age: 尼尔·斯蒂芬森的科幻小说，描绘了未来教育的个性化）基本上就是这样。嗯，然后它也应该很好地实现国际化，对吧？因为很多时候，你今天可能确实能在互联网上找到一个图表来解释你正在学习的东西，但它可能不是你实际使用的语言。嗯，对吧？所以我认为这只是另一种改进和开放信息可访问性的方式，让更多人能够接触到，而且再次强调是视觉化的，因为很多人都是视觉学习者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so, and so I think that's probably kind of the next level where at some point then you could also just have a personalized textbook to you, right? Where it's not just the text that's different, but it's also the visuals. Yeah, the diamond age that was basically Yeah, basically. Um, and then it should also internationalize really well, right? Because a lot of the times today you might actually be able to find a diagram that explains the thing that you're trying to learn about on the internet, but it's maybe not in the language that you actually speak. Um, right? And so I think that becomes just like another way to improve and open up accessibility um of information to just a lot more people and again visually because a lot of people are visual learners.</p>
</details>

### 模型架构与未来方向

有趣。你如何看待生成的图像？我问这个问题的原因是，有另一个非常酷的例子。我看到有人用 Nano Banana 实现了它，他写了一个脚本，然后不断提示模型说“生成这个之后的一秒钟的帧”，然后它就变成了一个视频。所以当我看到它时，我想，好吧，是不是每张图像都只是一个连续体中的一帧？你总是知道平行宇宙中的连续体。你本可以生成其中任何一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Interesting. How do you think about like images generated? So the reason why I asked is that there's another very cool example. I've seen someone making it work with nano banana which is he wrote a script and then he kept prompt the model to say generate the frame one second after this and then it became a video. So and then when I saw it I'm like well is every image just one frame in a continuum like you always know about the continuum in a parallel universe. you could have you know generated any one of them.</p>
</details>

这是一个大的有向图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's one big directive graph that</p>
</details>

对，没错，也许最终它就是视频。那么你如何看待这一点？它在哪里交叉或不交叉？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right exactly and then maybe it's video at the end of the day. So how do you see that? Where does it you know intersect or not intersect?</p>
</details>

我认为视频和图像非常，是的，非常密切相关。而且我认为我们正在这些“接下来会发生什么”或序列预测的用例中看到的，也是模型在世界知识方面的泛化能力。嗯，所以，我认为它会走向何方？我认为我们将拥有，是的，我认为视频是一个显而易见的下一个领域。我认为，当你进行编辑时，很多时候你问的是“如果我这样做会发生什么？”而这正是视频所拥有的，它拥有动作的时间序列。所以，就像我们有一个你可以互动的低帧率视频。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think it's very yeah video and images are very closely related. Um and also I think what we're seeing in these kind of what's coming next or sequence predicting um use cases is the the generalization in world knowledge of the model as well. Um and and this is and so where where do I think it's going? I think that we will have yeah I think video is um an obvious next kind of domain. I think that like when when you have editing um a lot of times what you're asking is like you know what happens if I do this and that's what video has it has the the time sequence of actions. So it's like we have a slow frames per second video that you can interact with,</p>
</details>

但显然，制作一个完全交互式和实时的东西是这个领域的发展方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but obviously making something that's like fully interactive and real time and um is the direction this this field is headed.</p>
</details>

所以你可能是在世界上使用图像模型经验最丰富的人群中，属于 0.001% 的那一小部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So you are probably in the zero I don't know how many zer 0.001% of most experienced people in the world using image models.</p>
</details>

你个人最喜欢的用例是什么？如果你不仅仅是测试现有模型，你日常生活中如何使用它？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> What are your your personal favorite use cases? How how do you use it dayto-day if you're not just testing an existing model?</p>
</details>

嗯，我不太确定我是否在最顶尖的行列，但我会告诉你，嗯，我的意思是，就像我们之前说的，个性化方面是真正打动我的地方。我有两个年幼的孩子，我用模型做的最好的事情就是和我的孩子们一起做的事情，比如我们可以让他们毛绒玩具在这些应用程序中活起来，看到这些真的非常个人化和令人满足。嗯，我们很多人也会，例如，拿出他们家人的老照片，然后，嗯，展示如何修复它们，所以，我认为这就是编辑模型的真正美妙之处，你可以让它围绕着你最关心的一件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I so I'm not sure I am in the the very top, but but I'll tell you what, um I mean it's it's like we were saying earlier, the personalization aspect is the the thing that totally drives it home for me. I have I have two young kids and like the best things that I do with the model are the things I do with my kids and like we can make, you know, make their their stuffed animals come to life in these types of applications and it's just so personal and gratifying to see. Um, we also a lot of people um taking old pictures of their family for example and like um showing what restoring them and and like so I think that that's that's the the real beauty of the edit models is that you can you can make it about the one thing that matters most to you.</p>
</details>

所以这就是我使用它的目的，基本上是为了我的孩子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So that's what I use it for is is my kids basically.</p>
</details>

非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Very nice.</p>
</details>

是的。你基本上是在制作你以前可能从未制作过的内容，而且它就像是供一个人消费的，对吧？或者一个家庭，你正在讲述你以前从未讲过的故事。所以，有点类似，我制作了很多家庭节日贺卡和生日贺卡等等。嗯，现在每当我制作幻灯片演示文稿时，我都会强迫自己生成一些与上下文相关的图像，然后努力让文本正确，嗯，以及所有这些事情。然后我们尝试突破界限，比如你能在像素空间中制作图表吗？你想要那样吗？这是另一个问题，对吧？因为你还希望条形图中的条形能够相互准确地定位。嗯，所以，我认为我们做了很多这样的事情。我实际上对我们团队中那些非常有创意的人印象深刻。嗯，我们有一个团队，他们与我们正在开发的模型密切合作，然后他们只是不断突破界限。他们会用模型做一些疯狂的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. You're you're basically making content that you probably would have never made before and it's like for the consumption of one person, right? Or or or one family and you're kind of telling these stories that you would have never told before. So, kind of similar like I do a lot of family holiday cards and birthday cards and whatnot. Um, now anytime I make a slide deck, I like force myself to generate some images that are like contextually relevant and then try to get the text right um and all of those things. And then we try to push the boundaries around like can you make a chart in the pixel space? Do you want to that's another question, right? Because you also want the um you want the bars in the bar chart to be accurately positioned relative to one another. Um so I I think we do a lot of these things. I'm actually really impressed with the people we work with on the team who are just like very creative. Um we have a team um who just works really closely with us on models that we're developing and then they just like push the boundary. They'll do like crazy things with the models.</p>
</details>

你在这里看到的最令人惊讶的事情是什么？比如，我不知道我们的模型能做到这一点。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> What's the most surprising thing you've seen here? Like I didn't know our model can do this. Yeah.</p>
</details>

这甚至只是像一些简单的事情，人们一直在做纹理转移。比如他们会拿。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> This is even just kind of like simple things where people have been doing like texture transfer. Like they will take</p>
</details>

是的。就像你拍一个人的肖像，然后你问，如果它有这块木头的纹理，它会是什么样子？我当时想，我从没想过这会是一个用例，因为我的大脑不是那样工作的。但是人们就像是不断突破你能用这些东西做什么的界限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. like you take a portrait of a person and then you're like what would it look like but if it had the texture of this piece of wood and I'm like I would have never I would have never thought of this being a use case because my brain just doesn't work that way. Um but people like kind of just push the boundaries of what you're what you can do with these things.</p>
</details>

这是一个有趣的关于世界知识的例子，因为纹理在技术上是 3D 的，因为它有整个 3D 方面。它有光影，但这是一个 2D 转移。是的。所以这非常酷。我认为对我来说，最让我兴奋和印象深刻的是那些测试模型推理能力的用例。所以，我们团队的一些人发现你可以给模型几何问题，然后让它解决这里的 X 或者填补这个缺失的东西，或者以稍微不同的视角呈现这个东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That is an interesting uh example of a world knowledge because texture technically is 3D because there's like the whole 3D aspect of it. There's a light and shadow of it but this is a 2D transfer. Yeah. So that's very cool. I think for me the the thing I'm most excited by and maybe most impressed by is um are the the use cases that test the reasoning abilities of the models. So um some people in our team figured out you could like give geometry problems to the model and like ask it to kind of you know solve for X here or fill in this missing thing or like present this this from a slightly different like a different view</p>
</details>

像这类真正需要世界知识和最先进语言模型推理能力的东西，才真正让我惊叹不已，我没想到我们能做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and like these types of um of things that really require world knowledge and the reasoning ability of like a state-of-the-art language model are the things that make me really go wow that's amazing I didn't think we would be able to do that.</p>
</details>

它能生成黑板上的编译代码吗？如果我拍一张我的，我不知道，比如笔记本电脑上的代码，图像模型会知道它是否能编译吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Can it uh generate compile code on a blackboard yet? And like if I take a picture of my I don't know like code on the laptop, would it know if it compiles on the image model?</p>
</details>

嗯，我见过人们给它一张 HTML 代码的图像，然后让模型渲染网页，它能做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um I've I've seen examples where people give it like an image of HTML code and have the model render the the web page and it can do that.</p>
</details>

那太酷了。我看到的最酷的例子是，我来自学术界，所以我花了很多时间写论文和制作图表。我们的一位同事拍了一张他们论文中一个结果图的照片，这个方法可以做很多不同的事情。这个，你知道，论文中有很多不同类型的应用，然后要求模型，并擦除了结果。所以你只有输入，然后要求模型以图片形式，以论文图表的形式解决所有这些问题，它能够做到。所以它实际上可以弄清楚这个图表要求解决什么问题，找到答案并将其放入图像中，然后同时为许多不同的应用做到这一点，这真的很了不起。非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's very cool. The coolest example I saw, so I came from academia, so I spent a lot of time writing papers and making figures. And um one of our colleagues uh took a picture of one of the result figures uh from one of their papers with a method that could do a bunch of different things. This this one, you know, a bunch of different um type of applications in the paper and asked the model to and like sort of erased the um the results. So you have like the inputs and asked the model to like solve all of these in picture form in a figure of a paper and it was able to do that. So it could actually like figure out what is the problem that this one figure is asking for, find the answer and put it in the image and then do that for a bunch of different applications at the same time which was really amazing. Very cool.</p>
</details>

那太酷了。有没有人基于这种能力开发出应用程序？比如，会从中诞生什么样的应用程序？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> That's very cool. Have um has anyone built application on top of that capability yet? Like what's the application that will come out of that?</p>
</details>

我认为有很多非常有趣的，我称之为**零迁移能力**（Zero transfer capability: 模型无需特定训练数据即可执行新任务的能力），比如解决问题类型的事情，我们甚至还不知道它的边界。其中一些可能非常有用，比如，如果你想有一个方法来解决某个问题 X，我不知道，比如找到场景的**表面法线**（Service orientations: 描述物体表面方向的几何信息）或者类似的东西，你可能可以提示模型给你一个合理的估计。所以，我认为有很多问题，比如理解问题和其他类型的事情，我们可能可以通过零样本或少量样本提示来解决，而我们还不知道。是的，你提到的一件事我发现非常有趣，那就是世界知识转移，但在很多世界模型或视频模型中，总有一些东西保持状态，比如你移开视线并不意味着椅子应该消失或改变颜色，因为那不是世界的状态。你如何看待这一点？你认为这在图像模型中有相关性吗？这是你甚至考虑优化的问题吗？是的，我的意思是，如果你考虑一个具有长上下文的图像模型，你可以在该上下文中放入其他东西，比如文本、图像、音频、视频，那么我认为这绝对就像你对事物的上下文进行推理，以生成最终的输出图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think that there are a lot of very interesting I would say zero transfer capability like problem solving type things that we don't even know the boundary of yet. And some of these are are probably quite useful like you know if you want to have a method that does solves some problem X I don't know like finds the the the the normals of the scene or something like the service orientations or something um you probably can prompt the model to give you kind of a reasonable estimate. Um so I think there's lots of problems like sort of understanding problems and other types of things that we could maybe solve with zero or few shop prompting that we don't know yet. Yeah, there's one thing you mentioned I found super interesting, which is the world knowledge transfer, but in a lot of world models like or video models, there always is something that keeps the state like just because you look away doesn't mean that the chair should disappear or change color because it's that's not what the state of the world is. How do you see that? Do you think there's relevance there in image model? Is that something you even consider optimizing for? Yeah, I mean if you think about an image model that has a a long context where you can put other things in that context like text, images, audio, video, then I think it's definitely like your reasoning over the context of things you have to produce a final output image</p>
</details>

或视频。嗯，所以是的，我认为肯定有一些模型能力可以做到这类事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> or video. Um so yeah, I think there's definitely um some model capability to do this type of stuff already.</p>
</details>

明白了。我还没有针对这个大用例进行测试，但我会告诉你的。这是我最喜欢这些模型的一点，就是发现，而且我相信这对你们来说真的很有趣，你们可能比我们更了解它们能做什么。但有时你会看到一些疯狂的 X 或 Reddit 或其他地方的帖子，关于某人发现了一些令人难以置信的事情，你根本没想到模型可能能够做到，然后其他人会在此基础上进行构建，说，哦，然后我尝试了这个东西的下一次迭代，突然你就发现了一个几乎全新的空间，关于模型的能力。对于那些更深入参与构建这些模型和构建界面的人来说，看着这一切发生一定很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Got it. I haven't tested it out yet for this big use case, but I'll let you know. That's one of my favorite things about these models is just finding and I'm sure it's really fun for you guys and you guys probably have much more of a hint than we do about what they can do. But sometimes you'll just see some crazy X or Reddit or wherever post about some incredible thing that someone has figured out um how to do that you would never expect that the model might be able to do necessarily and then other people kind of build on that and say like oh and then I tried the next iteration of this thing and suddenly you have this like almost entirely new space that's been discovered in terms of what the what the models are capable of. It must be fun as people much more deeply involved in kind of building these models and building the interfaces to kind of watch that happen.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

### 艺术家的疑虑与AI的赋能

所以，如果你今天和视觉艺术家交谈，我个人很喜欢这些东西。我在互联网上发布了相关内容。你会得到一些非常怀疑的回答。人们会说，“哦，这太糟糕了。”对吧？你有没有想过是什么触发了这种反应？我坚信这最终真正赋能了艺术家，对吧？它为你提供了新工具，对吧？就像，嘿，我们现在有了，我不知道，给米开朗基罗的水彩颜料，让我们看看他会用它做什么，对吧？然后惊人的作品就会诞生，这与此类似，但到底是什么触发了这种强烈的反对反应？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, so if you talk to visual artists today, I I've, you know, I I personally love this stuff. I post about it on the internet. You can get some very skeptical answers. People like, "Oh, this is terrible." Right? Like what do you have any idea what triggers this this reaction, right? I'm convinced that this ultimately really empowers the artists, right? It gives you new tools, right? is like hey we now have I don't know watercolors for Michelangelo let's see what he does with it right and amazing things come out it's of the similar thing but but what triggers this this strong reaction against it</p>
</details>

所以我认为这与对输出的控制程度有关。你知道，一开始当我们有这些文本图像模型时，它们非常像一次性生成，你输入一些文本，然后得到一个输出，人们会说，哦，这是艺术，这是我制作的东西，我认为这可能让那些来自创意社区的人有点不舒服，因为，你知道，大部分决定都是由模型根据用于训练的数据做出的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> so I think it's something something to do with the amount of control over the output so you know in the beginning when we had these kinds of text image models they would be very much like a oneshot you put in some text you get an output and people would be like oh this is art this is this thing I made and I think that maybe rubs people a little bit the wrong way who are come from the creative community because um you know that it's it's most of the decisions that were made were made by the model by the data that was used to train</p>
</details>

你不再能身体上表达自己了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> express yourself anymore physically right</p>
</details>

是的，没错。所以作为一个有创意的人，你希望能够表达自己。所以我认为随着我们让模型更具可控性，很多关于“哦，那只是电脑在做所有事情”的担忧可能会消失。嗯，另一件事是，我认为有一段时间我们都对这些模型能创造的图像感到非常惊叹，以至于我们非常乐意看到，哦，这些东西是从这些模型中出来的，但我认为人类很快就会对这类事情感到厌倦。所以，就像有一股大的热潮，现在如果你看到一张你明知道只是一个单一提示，人们没有多想的图像，你就能分辨出来，那是一张 AI 生成的图像，不那么有趣。所以，我认为仍然存在这样的界限，即你现在需要能够用 AI 工具创造出有趣的东西，这很难，但这将永远是一个要求。我们需要有人能够做到这一点。我认为。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah exactly it's not yeah so as a creative person you want to be able to express yourself so I think as we make the models more controllable then a lot of these concerns of like oh that's just that the computer is doing everything kind of may may go away um and the other thing is I think that that there was a period of time where we were all so amazed by the images these models could create that like we were we were pretty like uh happy to see just like oh this stuff comes out of these models but I think humans get really bored fast of this type of thing. So like there was a big rush and now if you see a if you see an image that you know was just like oh that's just like a single prompt person didn't think about it much you can kind of tell like that's an AI generated image not that interesting. So I think like there's still this boundary of like now you need to be able to make interesting things with the AI tools um which is hard but it this will yeah this will always be you know a requirement. We need someone to be able to do this. And I think</p>
</details>

我们仍然需要艺术家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> we still need artists.</p>
</details>

我们仍然需要艺术家。我认为艺术家也能够识别出人们何时真正投入了大量的控制和意图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> We still need artists. And I think artists will be able to also recognize when when people have actually like put a lot of control and intent</p>
</details>

而且仍然不是艺术家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and still not be an artist.</p>
</details>

也许可以，但它有很多技艺和品味，对吧，你有时需要几十年的积累，对吧？我认为这些模型并没有品味，对吧？所以我认为你提到的大部分反应可能也来自这一点。所以我们确实与我们合作的所有模态的许多艺术家合作。嗯，所以图像、视频、嗯，音乐，因为我们非常关心与他们一步一步地构建技术，并试图弄清楚他们如何真正帮助我们突破可能的边界。很多人都非常兴奋，但他们确实带来了他们大量的知识和专业技能，以及大约 30 年的设计知识。我们刚刚与 **Ross Lovegrove**（一位著名的工业设计师）合作，对他的草图进行模型微调，这样他就可以从中创造出新的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Maybe get but but it it is there's a lot of craft and there's a lot of taste, right, that you accumulate sometimes over decades, right? And I don't think these models really have taste, right? And so I think a lot of like a lot of the reactions that you mentioned maybe also come from that. And so we do work with a lot of artists across all the modalities that we work with. Um so image, video, um music because we really care about like building the technology step by step with them and trying to figure out they really help us kind of like push the boundary of what's possible. A lot of people are really excited, but they they really do bring a lot of their knowledge and expertise and kind of like 30 years of design knowledge. We just work with um Ross Loveg Grove um on fine-tuning a model on his sketches so that he can then create something new</p>
</details>

然后我们设计了一把实际的实体椅子，我们有一个原型。嗯，所以有很多人想把他们积累的专业知识和他们用来描述作品的丰富语言带入，并与模型进行对话，这样他们就可以把他们的作品推向前沿。而且，你知道，这不会在一个提示和两分钟内发生。嗯，它确实需要大量的品味和人类创造力以及技艺，才能构建出真正成为艺术的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> out of that and then we design an actual physical chair that we like have a prototype of um and so there there's a lot of people who want to kind of bring the expertise that they've built and kind of like the rich language that they use to describe their work and and have that dialogue with the model so that they can push their work kind of to the frontier. And it is, you know, it doesn't happen in like one prompt and two minutes. Um, it it does require a lot of that kind of taste and human creation and and craft that goes into building something that actually then, you know, becomes art.</p>
</details>

最终，它仍然是一个工具，需要人类在背后表达情感、情绪和故事以及所有一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> At the end, it's still a tool that requires the human behind it to to express the feelings and the emotions and the story and everything.</p>
</details>

是的，绝对如此。绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, absolutely. Absolutely.</p>
</details>

这可能就是你看到它时产生共鸣的原因，对吧？嗯，当你知道背后有一个人类，他花了 30 年时间思考一些事情，然后将其倾注到一件艺术品中时，你会产生不同的反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And that's what resonates with you when you probably look at it, right? Um, you you will have a different reaction when you know that there's a human behind it who has spent 30 years thinking about something and then pour that into a piece of art.</p>
</details>

我认为还有一点是，大多数消费创意内容的人，甚至那些非常关心它的人，他们并不知道自己接下来会喜欢什么。你需要一个有远见的人，能够做出有趣而不同的东西，对吧？然后你把它展示给人们，他们会说，“哦，哇。太棒了。”但他们自己不一定会想到这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there's also a bit of this um phenomenon that like most people who consume creative content and maybe even ones that are that care a lot about it like they they don't know what they're going to like next. You need someone who has a vision and can do something that's interesting and different, right? And then you show it to people like, "Oh, wow. That's amazing." But like they wouldn't necessarily like think of that on their own,</p>
</details>

对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> right?</p>
</details>

所以当我们优化这些模型时，我们可以做的一件事是，我们可以优化所有人的平均偏好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So when we're, you know, when we're optimizing these models, like one thing we could do is we could optimize for like the the average preference of everybody.</p>
</details>

但我认为你这样做并不会得到有趣的东西。你最终得到的是每个人都喜欢的东西，但你不会得到让人们惊叹不已的东西，比如“哦，哇。太棒了。我将改变我对艺术的整个看法，因为我看到了那个。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> But I don't think you end up with interesting things by doing that. You end up with something that everyone kind of likes, but you don't end up with things that people are like, "Oh, wow. That's amazing. like I'm going to change my my my whole like perspective of art because I saw that</p>
</details>

有模型的先锋版。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> there's the avantguard edition of the model</p>
</details>

如果我用这个词的话，还有另一个极端，营销版之类的，它非常可预测。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if I use it with the term there's the I don't know what's what's the other end of the spectrum the marketing edition or so where it's very predictable and</p>
</details>

非常直接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> very straightforward.</p>
</details>

### 对未来的展望

是的。好吧，既然时间快到了，最后几个问题。第一个是，你希望人们更多地问你模型能够做到但你却不知道的一个功能是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Well, since we're coming up on time, uh, last couple question. One is, what's one feature that you know the model is capable of that you wish people ask you more?</p>
</details>

内部。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Interle.</p>
</details>

是的，我认为我们一直很惊讶，没有人发布任何关于“内部生成”的东西，我们称之为模型为特定提示生成多张图像的能力。所以，你可以要求，比如我想要一个故事，比如一个睡前故事，或者类似的东西，比如在这一系列图像中生成相同的角色。我认为，嗯，是的，人们还没有真正发现它有用，或者还没有发现它。我不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, in I think we've always been amazed that nobody ever posts anything about in solely generation is what we call the model's ability to generate more than one image for a specific prompt. So, you can ask for like I want a story like a bedtime story or something like generate the same character over these series of images. And I think that um yeah, people haven't really found it useful yet or haven't discovered it. I don't know.</p>
</details>

哦，有趣。好吧，如果你正在听播客，去试试这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Oh, interesting. Well, if you're listening to the podcast, go try this out.</p>
</details>

试试看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Try</p>
</details>

是的。那么在接下来的几个月、几年里，你最期待解决的激动人心的技术挑战是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. And what's the most um exciting technical challenge that you look forward to tackling in the next, I don't know, months, years.</p>
</details>

所以，我认为在质量方面，我们有非常高的上限。我的意思是，我认为人们看着这些图像会说，“哦，它几乎完美了。我们一定已经完成了。”有一段时间，我们处于这种**精选阶段**（cherrypick phase: 比喻模型评估从展示最佳效果到关注最差效果的转变），我们会，你知道，每个人都会选择他们最好的图像。所以你看着那些图像，它们很棒。但实际上，现在更重要的是最差的图像。我们正处于**挑刺阶段**（lemon picking stage: 比喻模型评估从展示最佳效果到关注最差效果的转变），因为每个模型都可以精选出看起来完美的图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, I think that there's really a high ceiling in terms of quality for where we're going. Like, I think you people look at these images and say, "Oh, it's almost perfect. we must be done. And for a while, we were in this like cherrypick phase where we would, you know, everyone would pick their best images. So, you look at those and they're great. But actually, what's more important now is the worst image. We're in a lemon picking stage because every model can cherrypick images that look perfect.</p>
</details>

所以，现在我认为真正的问题是，这个模型有多大的表达能力，以及在你想做的事情上，你会得到的最差图像是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, like now I think the real question is like how expressable is this model and what's the worst image you would get given what you're trying to do.</p>
</details>

所以，我认为通过提高最差图像的质量，我们真正拓宽了可以做的事情的用例范围。比如，有各种各样的生产力用例，你知道，超越我们知道模型可以做的这种即时创意任务，我认为这是一个我们正在前进的方向，如果这些模型能够更合理地做更多事情，那么用例就会大大增加。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, I think by raising the quality of the worst image, we really open up the amount of use cases for things we can do. like there's all kinds of productivity use cases like um you know beyond this kind of like immediate creative tasks that we know the model can do and I think that's a direction we're headed we're headed to where if these models can do more things reasonably then they're just the the use cases will be far greater</p>
</details>

所以，这基本上就是猴子打字机的道德等价物，任何模型只要尝试足够多次，最终都会创造出惊人的冒险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> so that's the that's the moral equivalent of the monkeys on typewriters basically any model given enough tries will eventually make an amazing adventure</p>
</details>

但反过来就很难了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but the the other way around it's hard</p>
</details>

是的，反过来很难。一只猴子写一本书会非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah the other round is hard one monkey writing a book would be very hard</p>
</details>

那会是一只很棒的猴子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> it would be a good monkey for that one</p>
</details>

你认为当我们达到下限时，会出现哪些应用程序？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> what are the applications you think that would come out when we reach the lower bound?</p>
</details>

所以，我最感兴趣的一个，我们之前提到过，就是教育事实性。我，你知道，我不知道我一个月想用这些模型进行创意目的多少次，但我有更多的用例用于信息搜索、事实性、学习、教育类型的用例。所以，我认为一旦这开始奏效，那么它就会开辟所有这些新领域。太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, the one I'm most interested in, we mentioned this before, is education factuality. I have um you know, I I have every I don't know how many times I want to use these models for creative purposes a month, but like I have way more use cases for information seeking, factuality, kind of like learning, education type use cases. So, I think like once that starts working, then it'll be opening up all these new areas. Amazing.</p>
</details>

我认为还有一点是，我认为要更多地利用模型的**上下文窗口**（Context window: 模型能够处理的输入信息量）。所以你可以将大量的内容输入到这些大型语言模型中。嗯，一些公司，你之前提到了一些，他们会有像 150 页的品牌指南，关于你可以做什么和不能做什么，对吧？而且它们非常精确，对吧？比如颜色、字体，以及，嗯，比如乐高积木的大小。嗯，所以能够真正地接受这些，并在生成时严格遵循，这是一个全新的控制水平，我们今天还没有，对吧？嗯，为了确保你真正地严格遵循。我认为这会与非常成熟的品牌建立很多信任。我们有一个第二个创意合规审查模型，然后它会双重检查我能做的所有事情，而模型应该自己做，对吧？就像它应该有这个循环，比如，好吧，我生成了这个，但是第 52 页说我不应该有，然后我回去再试一次，然后两个小时后它会带着这个尊重回来找你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> There's also something about I think taking more advantage of the models context window. Um so you can input a really large amount of content right into these LLMs. And um some companies um you mentioned a few before um they will have like 150 page brand guidelines on like what you can and cannot do, right? And they're like very precise, right? Like colors, fonts, and right um and like the the the size of like a Lego brick maybe. Um and so being able to actually like take that in and follow that to a tea when you're doing generation that's like a whole new level of control um that we just can't we don't have today right um to to make sure that you're actually kind of like following that to a tea. I think that will build a lot of trust with you know very established brands. where we have a second creative compliance review model that then double checks everything that I could do against the the model should do it on its own, right? Like like it should kind of have this yes it should have this loop as like okay I generate this but then page 52 says that I shouldn't have right and I'm going to go back and try again and then two hours later it will come back to you with that respect.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah.</p>
</details>

我们看到文本模型如何通过这种推理时间扩展来提供帮助，对吧？能够批评自己的作品。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And we saw with the text models how this inference time scaling how much it can help right being able to to critique your own work. Yep.</p>
</details>

所以这感觉非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So this this feels really important.</p>
</details>

哇，图像模型的未来真是令人难以置信的激动人心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Boy, an incredibly amazingly exciting future for for image models.</p>
</details>

是的。祝贺你们所有令人惊叹的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yes. And congrats on all the amazing work.</p>
</details>

谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you.</p>
</details>

谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you.</p>
</details>

感谢邀请我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thanks for having us.</p>
</details>

嗯，非常感谢你们来参加播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, thank you so much for coming on the pod.</p>
</details>