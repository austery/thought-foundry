---
date: '2025-10-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=I8VUN141MjU
tags:
  - ai-image-generation
  - creative-tools
  - model-interfaces
  - character-consistency
  - ai-in-education
title: Google DeepMind 开发者揭秘 Nano Banana：AI如何赋能创意与教育
summary: 本播客深入探讨了Google DeepMind的图像生成模型Nano Banana的开发历程、核心能力及其对创意产业和教育领域的深远影响。开发者们分享了模型在角色一致性、个性化应用方面的突破，以及对未来AI界面、2D与3D图像表示、教育应用和模型评估等技术挑战的思考。文章强调AI作为赋能工具，将极大提升人类的创造力，并讨论了其在不同用户群体中的应用前景。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - entrepreneurship
people:
  - Ross Lovegrove
companies_orgs:
  - Google
  - Adobe
products_models:
  - Nano Banana
  - Gemini
  - Imagine
  - Comfy UI
  - ControlNet
  - Laura
  - Cloud Sauna
media_books: []
status: evergreen
---
### AI赋能创意：从繁琐到创新

这些模型让创作者能够减少工作中繁琐的部分，对吧？他们可以更具创意，并将90%的时间用于创作，而不是90%的时间用于编辑和执行这些繁琐的手动操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These models are allowing creators to do um less tedious parts of the job, right? They can be more creative and they can spend, you know, 90% of their time being creative versus 90% of their time like editing things and doing these tedious kind of manual operations.</p>
</details>

我坚信这最终真正地赋能了艺术家，对吧？它为你提供了新的工具，就像是，“嘿，我们现在有了，我不知道，米开朗基罗的水彩颜料。”让我们看看他会用它做出什么，对吧？然后惊人的作品就诞生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm convinced that this ultimately really empowers the artists, right? It gives you new tools, right? It's like, hey, we now have, I don't know, watercolors for Michelangelo. Let's see what he does with it, right? And amazing things come out.</p>
</details>

### Nano Banana 的诞生与演进

也许可以先从**Nano Banana**（Google DeepMind的图像生成模型）背后的故事讲起。它是如何诞生的？你们是如何开始研发它的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">maybe start by telling us about the backstory behind the nano banano model. How did it come to be? How did you all start working on it?</p>
</details>

当然。我们的团队在图像模型方面已经工作了一段时间。我们开发了**Imagine**（Google DeepMind的早期图像模型家族）系列模型，这可以追溯到几年前。实际上，在**Gemini 2.0**（Google的AI模型系列，此处特指其图像生成版本）图像生成模型之前，Gemini中也曾有一个图像生成模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure. So um you know our our team has worked on image models for some time. We developed the imagine family of models which is goes back a couple years. Um and and actually there was also an um an image generation model in Gemini before the Gemini 2.0 image generation model.</p>
</details>

所以，当时团队开始更多地关注Gemini的用例，比如交互式对话和编辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what happened was the um the teams kind of started to focus more on the Gemini use cases. So like interactive conversational and and editing</p>
</details>

基本上，我们组建了团队，构建了这个模型，它后来被称为Nano Banana。这就是它的起源故事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um and and essentially what happened is we teamed up and we we built this model which became what's known as nano banana. Um so yeah that's sort of the origin story but</p>
</details>

是的，我想再补充一些背景。我们的Imagine模型在视觉质量方面一直名列前茅，我们确实专注于这些专业的生成和编辑用例。然后当**Gemini 2.0 Flash**（Gemini模型的快速版本）发布时，我们才真正开始看到同时生成图像和文本的魔力，这样你就可以讲述一个故事。这种能够与图像对话并进行会话式编辑的魔力，但视觉质量可能还未达到我们期望的水平。所以，Nano Banana，或者说Gemini 2.5 Flash图像模型……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah and and I think maybe just some more background on that. So our imagine models were always kind of top of the charts for visual quality and you know we really focus on kind of these specialized generation editing use cases and then when 2.0 Flash came out that's when we really started to see some of the magic of like being able to generate images and text at the same time so you can maybe tell a story. Um just the magic of being able to talk to images and edit them conversationally. Uh but the visual quality was maybe not where we wanted it to be. And so Nano Banana or Gemini 2.5 flash image um</p>
</details>

Nano Banana听起来酷多了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nano Banana is way cooler.</p>
</details>

它更容易说，容易得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's easier to say. It's a lot easier.</p>
</details>

这个名字就这么叫开了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's the name that stuck.</p>
</details>

是的，这个名字就这么叫开了。但它确实在某种意义上成为了两全其美的产品，既有Gemini的智能和多模态对话特性，又有Imagine的视觉质量。我觉得这可能就是它能引起很多人共鸣的原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, it's the name that stuck. Uh but it really became kind of the best of both worlds in that sense like the Gemini smartness and the multimodal kind of conversational nature of it plus the visual quality of imagine. And I feel like that's maybe what resonates a lot with people.</p>
</details>

### 早期“惊艳时刻”与用户反馈

哇，太棒了。那么，我想问，在你们开发和测试模型的时候，有哪些“惊艳时刻”让你们觉得，“我知道这会火，我知道人们会喜欢它”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. Amazing. Um, so I guess when you were testing out a model, as you were developing it, what were some wow moments um that you found, I know this is going to go viral. I know people will love this.</p>
</details>

我其实直到在Ellarina上发布后才觉得它会火。我们看到的是，我们预算了与之前在Elm Marina上运行的模型相当的每秒查询量，但随着人们涌向Ella Marina使用这个模型，我们不得不不断提高这个数字。我觉得那是我第一次真正意识到：“哦，哇，这对很多人来说都非常有用。”它甚至让我自己都感到惊讶。我不知道整个团队怎么想，但我们当时正努力打造最好的对话式编辑模型。但当人们不惜一切代价去使用一个网站，即使这个网站只能在一定百分比的时间内提供模型服务，但即使这样也值得他们去那个网站使用模型时，它才真正开始流行起来。所以，我想那至少对我来说，是让我觉得“哦，哇，这会变得更大”的时刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I So I actually didn't feel like it was going to go viral until we had released on Ellarina. And what we saw was that we budgeted like, you know, a comparable amount of queries per second as we had for our previous models that were on Elm Marina. And we had to keep upping that number as people were going to Ella Marina to use the model. And I feel like that was the first time when I was really like, "Oh, wow. This is something that's very very useful to a lot of people." Like I I it surprised even me. I don't know about the whole team, but like we, you know, we were trying to make the best conversational editing model possible. But um but then it really started taking off when when yeah when people were like going out of their way and using a using a website that would actually only give you the model some percentage of the time. But even that was worth like using going to that website to use the model. So I think that was really the moment at least for me that I was like oh wow this is this is going to be bigger.</p>
</details>

这实际上是最好的条件反射方式，比如只给他们部分奖励，而不是一直给。我之前也有一个时刻，当时我一直在尝试在不同代模型上运行一些类似的查询。其中很多都与我小时候想成为的样子有关，比如宇航员探险家，或者把我放在红毯上。我在我们发布模型之前，在一个内部演示中尝试了它。那是我第一次看到输出结果真的像我。你们也经常玩这些模型。我之前唯一一次看到这种情况，是当你微调一个模型，比如使用**Laura**（一种用于微调AI模型的低秩适应方法）或其他方法来做，你需要多张图片，这需要很长时间，然后你还得把它部署到某个地方。所以这是第一次，它就像是零样本学习，哇，只用我的一张照片，它就看起来像我了，我当时就觉得哇。然后我们有了很多幻灯片，上面都是我的脸，因为我试图说服其他人这真的很酷。我认为，当更多人意识到这是一个非常有趣的功能时，是他们自己尝试的时候，因为在别人身上看到它很有趣，但它并不能真正引起人们的情感共鸣。它让一切变得如此个性化，就像你、你的孩子、你的配偶，还有你的狗。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's actually the best way to condition people like only give them a rewards partially not all the time by design. Uh I had a moment earlier um and that was when so I've been trying some similar queries on kind of multiple generations of models over time. Um and a lot of them have to do with like things I wanted to be as a kid. So like an astronaut explorer or you know put me on the red carpet and I tried it on a demo that we had internally before we released the model. It was the first time when the output actually looked like me. Um and you know you guys play with these models all the time. The only time that I've seen that before is if you know you fine-tune a model, you know, using Laura or some other method to like do that and you need multiple images and takes a really long time and then you have to like actually serve it somewhere. So this was the first time when it was like zero shot. Oh wow, just one image of me and it looks like me and I was like wow. And then there became these like we have decks that are just like covered in my face as I was trying to convince other people that it was really cool. Um, and really I think the moment more people realized that it was like a really fun feature to use is when they tried it on themselves because it's it's kind of fun when you see it on another person, but it doesn't really resonate with people emotionally. It makes it so personal. It's like you your kids, you know, your spouse and and I think that's your dog,</p>
</details>

你的狗。这才是真正开始在内部引起共鸣的东西。然后人们就开始制作所有这些80年代风格的自己改造版本。那时我们才真正开始看到大量的内部活动，我们觉得“好吧，我们有所发现了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">your dog. And and and that's really what started kind of resonating internally. And then people just started making all these like 80s makeover versions of themselves. And that's when we really started to see like a lot of internal activity and we were like, "Okay, we're on to something."</p>
</details>

测试这些模型时非常有趣，因为你会看到人们创造出所有这些令人惊叹的创意作品。哦，哇，我从没想过那会是可能的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's it's a lot of fun to test these models when we're making them because you just you see all these amazing creative things that people make. Oh, wow. I I never thought that was possible.</p>
</details>

所以，这真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's it's really fun.</p>
</details>

不，我的意思是，我们已经和整个家庭一起玩过了，这真是太有趣了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, it's I mean, we've dealt with the whole with the whole family and it's it's it's a it's a crazy amount of fun.</p>
</details>

### AI对创意艺术的长期影响

那么，从长远来看，这会走向何方？我的意思是，我们构建了这些新工具，我认为它们将永远改变视觉艺术，对吧？我的意思是，我们突然可以转移风格。我们突然可以生成一个主题的一致图像，对吧？我曾经有一个非常复杂的Photoshop手动处理过程。现在我突然输入一个命令，它就奇迹般地发生了。但这种状态的最终目标是什么？我的意思是，我们现在有想法了吗？你知道，五年后，大学里将如何教授创意艺术？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, think a bit about long term. Where does this lead? Right. I mean we we built these new tools that I think will change visual arts forever, right? I mean there we suddenly can transfer style. We suddenly can you generate consistent images of a subject, right? I have I have what used to be a very complex manual Photoshop process. Suddenly I type one command and magically happens. But what's the end state of this? I mean do do we have an idea yet? You know how will how will creative arts be taught in a university in you know five years from now?</p>
</details>

谁想回答这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">want to take that.</p>
</details>

我认为这将是一个光谱。我认为在专业方面，我们听到很多说法是，这些模型让创作者能够减少工作中繁琐的部分，对吧？他们可以更具创意，并将90%的时间用于创作，而不是90%的时间用于编辑和执行这些繁琐的手动操作。所以我对此感到非常兴奋。我认为我们将看到创意爆炸式增长。然后，我认为对于消费者来说，这可能也有两个光谱。一个是，你可能只是在做一些有趣的事情，比如给我孩子制作万圣节服装，对吧？那里的目标可能只是与家人或朋友分享。在光谱的另一端，你可能会有像制作幻灯片演示文稿这样的任务，对吧？我一开始是顾问，我们在一开始就谈到了这一点。你花了很多时间在非常繁琐的事情上，比如努力让东西看起来漂亮，努力让故事有意义。我认为对于这类任务，你可能只需要一个代理，你告诉它你想要做什么的规格，然后它就会为你很好地布局。它会为你想传达的信息创建正确的视觉效果。我认为这将是一个光谱，取决于你想要做什么。你是想参与创意过程，实际修修补补，与模型协作，还是你只是想让模型去完成任务，尽可能少地参与？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I I think it's going to be a spectrum of things, right? I think on the professional side, a lot of what we're hearing is that these models are allowing creators to do um less tedious parts of the job, right? They can be more creative and they can spend, you know, 90% of their time being creative versus 90% of their time like editing things and doing these tedious kind of manual operations. So I'm really excited about that. Like I think we'll see kind of an explosion of creativity like on that side of the spectrum. Um and then I think for consumers there's sort of like two spect two sides of the spectrum for this probably. One is you know you might just be doing some of these fun things like Halloween costumes for my kid, right? And and the out the goal there is probably just to like share it with somebody, right? Your family or your friends. Um on the other side of the spectrum, you might have these tasks like putting together a slide deck, right? I started out as a consultant. We talked about that at the beginning. Um, and you spend a lot of time on like very tedious things like trying to make things look good, trying to make the story make sense. I think for those types of tasks, you probably just have an agent who you give the specs of what you're trying to do and that it goes out and like actually lays it out nicely for you. It creates the right visual for the information that you're trying to convey. And it really is going to be this, I think, spectrum depending on what you're trying to do. Like do you want to be in the creative process and actually tinker with things and collaborate with the model or do you just want the model to like go do the task and be as minimally involved as possible?</p>
</details>

### 重新定义“艺术”与AI的协作边界

那么，在这个新世界里，艺术又是什么呢？我的意思是，有人最近说，艺术就是如果你能创造一个超出分布的样本。这是一个好的定义吗？还是说它目标太高了？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So So in this new world then what what is art? I mean somebody recently said art is if you can create an an out of distribution sample. Is is that a good definition or or is it is it is it aiming too high? Right.</p>
</details>

你认为艺术是超出模型分布的，还是在模型分布之内的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you think if art is out of distribution or in distribution for the model?</p>
</details>

就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There we go.</p>
</details>

我认为超出分布的样本这个定义有点过于限制。我认为很多伟大的艺术实际上是在它之前的艺术分布之内的。所以，我的意思是，什么是艺术？我认为这是一个非常哲学性的辩论，有很多人都在讨论这个问题。对我来说，我认为艺术最重要的东西是意图。所以，这些模型生成的东西是一个工具，让人们能够创造艺术。我其实并不担心高端市场、创意人士和专业人士，因为我看到，如果你把我放在这些模型面前，我无法创造出任何别人想看的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that out of distribution sample that is a little bit too restrictive. I think a lot of great art is actually in distribution for art that occurred before it. So I I mean what is art? I think it's like a very philosophical debate and there's a lot of people that do discuss this. Like to me I think that the most important thing for art is intent. And so the the what is generated from these models is is a tool to allow people to create art. And I'm actually not worried about the high-end and the creatives and the professionals because I've seen like if you put me in front of one of these models like I can't create anything that anyone wants to see</p>
</details>

但我也看到了有创意的人，有想法和意图的人能做什么，我认为这……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but like and but I've seen what people can do who are creative people and who have like intent and these ideas and I think it's like</p>
</details>

对我来说最有趣的是他们创造的东西真的非常棒，也给了我很多启发。所以，我觉得高端市场、专业人士和创意人士，他们总是会使用最先进的工具，而这只是他们工具箱里的另一个工具，让他们能创造出很酷的东西。我认为，我一直听到关于这个模型的一个非常有趣的事情，特别是来自创意人士和艺术家，是他们很多人觉得以前无法使用很多AI工具，因为它没有提供他们对艺术所期望的控制水平。一方面，这就像是角色或物体的一致性，他们真的用它来为故事提供引人入胜的叙事。所以以前当你无法反复获得相同的角色时，这非常困难。然后我认为，我一直从艺术家那里听到的第二件事是，他们喜欢能够上传多张图像，然后说“把这种风格应用到这个角色上”或者“把这个东西添加到这张图像上”，我认为这即使是以前的图像编辑模型也很难做到。我很好奇，你们在训练这个模型时，是否真的为此进行了优化？或者你们是如何考虑这个问题的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's the most interesting thing to me is is the things they create are really amazing and and inspiring for me. So, I feel like the the high-end and the the the professionals and the creatives, like they'll always use state-of-the-art tools, and this is like another tool in the tool belt for people to make cool things. I think one of the the really interesting things that I kept hearing about this model in particular from like creatives and artists was a lot of them felt like they couldn't use a lot of AI tools before because it didn't allow them the level of control that they expected for their art. what on one side that was like the um characters or object consistency like they really used that to have a compelling narrative for a story and so before when you couldn't get the same character over and over it was very difficult and then I think second the like second thing I hear all the time from artists is like um they love being able to upload multiple images and say like use the style of this on this character or add this thing to this image which is something that I think was very hard to do even with previous image edit models. I guess I'm curious like was that something you guys were really optimizing for when when you trained this one or or how did you think about that?</p>
</details>

我的意思是，是的，定制性和角色一致性无疑是我们开发过程中密切关注的事情，我们努力做到最好。我认为另一件事是交互式对话的迭代性质。艺术也倾向于迭代，你会做很多改变，看看它走向何方，然后做更多改变。我认为这使得模型更有用，而且实际上，这也是我认为我们可以大大改进模型的一个领域。我知道，一旦你进入非常长的对话，它就会开始稍微不那么好地遵循你的指令。但这是我们计划改进的地方，让模型更像一个自然的对话伙伴或创作伙伴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean yeah definitely sort of customizability and character consistency are things that we closely monitored during the development and we tried to do the best job we could on them. Um, I think another thing is also uh the iterative nature of kind of like an interactive conversation. Um, and you know, art tends to be iterative as well where you you make lots of changes, you see how it where it's going and you make more. Um, and this is another thing I think makes the model more useful and and actually that's an area that I also feel like we can improve the model greatly. Like I know that um once you get into really long conversations like it it starts to follow um your instructions a little bit worse. But like this something that we're planning to improve on and make the model more kind of like a natural conversation partner or like a creative partner in in making something.</p>
</details>

### AI模型界面的未来演变

有一件非常有趣的事情是，在你们发布Nano Banana之后，我们开始到处听到关于编辑模型的消息。就像是，在你们发布之后，全世界都醒了，他们发现编辑模型很棒，每个人都想要它。然后很明显，它就进入了可定制性、个性化的领域。Oliver，我知道你以前在**Adobe**（一家领先的创意软件公司）工作，那里也有我们以前手动编辑东西的软件。你如何看待现在模型层的控制旋钮与我们以前的做法相比会如何演变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that's so interesting is after you guys launched Nano Banana, we start to hear about editing models all the time everywhere. Like it's like after you launched the world woke up and they were editing model, it's great, everyone wants it. And then obviously like it it kind of um you know goes into the customizability the personalization of it and then uh Oliver I know you used to be Adobe and then there's also software where we used to manually edit things. How do you see the knobs evolve now on the model layer versus what we used to do? Um, yeah. I mean, I think that, you know, one thing that that Adobe has always done and the professional tools generally require is lots of of control, lots of knobs, lots of of So, there's always a balance of like we want someone to be able to use this on their phone.</p>
</details>

也许只需要一个语音界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, maybe with just like a a voice interface,</p>
</details>

我们也希望像真正的专业艺术创作者那样的人能够进行精细的调整。我认为我们还没有完全弄清楚如何同时实现这两点。但是有很多人正在构建非常引人注目的用户界面，我认为这是可以以不同方式完成的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we also want someone who can really like a really professional art creative to be able to do fine skill adjustments. I think we haven't exactly figured out how to enable both of those yet. Um, but there's a lot of people that are building really compelling UIs like um and and and I think it's a you know we're Yeah, I think I think there's different ways it can be done. Um, I don't know. You have thoughts?</p>
</details>

嗯，我也希望我们能达到一个点，你不需要学习所有这些控件的含义，模型可以根据你已经完成的上下文智能地建议你下一步可以做什么，对吧？这感觉就像是有人可以解决这个问题。那么未来的用户界面会是什么样子呢？它可能不需要你学习以前必须学习的数百种东西，而是工具应该足够智能，能够根据你正在做的事情向你建议它能做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I also hope that we get to a point where you don't have to learn what all these controls mean and the model can maybe smartly suggest what you could do next based on the context of what you've already done, right? Um, and that feels like it's kind of prime for someone to tackle that on. So like what do the UIs of the future look like um, in a way where you probably don't need to learn a hundred things that you had to before, but like the tools should be smart enough to suggest to you what it can do based on what you're already doing.</p>
</details>

这是一个非常有见地的观点。我使用Nano Banana的时候确实有过这样的时刻，我当时想，我不知道我想要这个，但是……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's such an insightful take. I definitely had moments when when I used Nano Banana, I was like, I didn't know I wanted this, but</p>
</details>

但我甚至没有要求这种风格。我甚至不知道这种风格叫什么。所以这对于图像嵌入和语言嵌入不是一对一的，我们无法用语言映射所有编辑任务，这非常有启发性。请继续。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">but I didn't even ask for this style. I don't even know have the words for that what that style even, you know, is called. So this is like very insightful on how image embedding and the language embedding is not one to one like we cannot map to like all the editing task with language. So oh go ahead.</p>
</details>

是的，让我稍微提出一个反驳观点，看看这会走向何方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, let me let me sort of take a little the counter point just to see where this goes.</p>
</details>

界面复杂性的问题可能会受到我们在软件中能表达什么、我们能在软件中让事情变得多么容易的限制，这在某种程度上也受到用户愿意容忍多少复杂性的限制。你知道，如果你是专业人士，他们只关心结果，他们愿意容忍大量的复杂性，他们有使用这些的培训、教育和经验，对吧？那么我们最终可能会有很多旋钮和拨盘，只是非常不同的拨盘，对吧？我的意思是，今天如果你使用光标或进行编码，它并不是有一个超级简单的、你知道的、单一的文本提示界面，它有相当多的，你知道的，这里添加上下文，这里有不同的模式等等，对吧？所以，我们会不会有为高级用户设计的超复杂界面，那会是什么样子？我非常喜欢**Comfy UI**（一种基于节点的复杂AI工作流界面）和一般的基于节点的界面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other the question of how complex the interface be can be limited by sort of what we can express in software, how easy we can make something in software which to some degree is also limited by how much complexity is a user willing to tolerate. And you know if you have a professional they only care about the result they're willing to tolerate a vast amount of complexity they they have the training they have the education they have the experience to use that right then we may end up with lots of knobs and dials it's just very different of dials right I mean today if you use a cursor or so for coding it's not that it has a super easy you know single text prompt interface it has it has a a good amount of you know here add context here different modes and so on right so so will we have Will we have like the the ultra sophisticated interface for the for the power user and how how would that look like? So I'm a big fan of Comfy UI and nodebased interfaces in general</p>
</details>

那很复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that is complex</p>
</details>

它很复杂，但它也非常健壮，你可以做很多事情。所以，你知道，在我们发布Nano Banana之后，我们看到人们构建了所有这些非常复杂的Comfy UI工作流，他们将一堆不同的模型和不同的工具组合在一起，这产生了一些，例如，使用Nano Banana作为视频模型的**故事板**（Storyboard: 一种视觉脚本，用于规划视频或动画中的场景序列）或关键帧的方法，你可以将这些东西连接起来，并获得真正惊人的输出。所以，我认为在专业或开发者层面，这类界面非常棒。至于普通消费者层面，我认为未来几年它会是什么样子，目前还非常未知。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it's complex but it's also it's very robust and you can do a lot of things and so you know after we released Nano Banana we saw people building all these really complicated comfy UI workflows where they were combining a bunch of different models together and different tools and that generated some of the like for example using nanobana as um as a way to get storyboards or key frames for video models like you can plug these things together and and get really amazing outputs. So, I I think that like at the the pro or the developer level, like these kinds of interfaces are are great. Um, in terms of like the proumer level, I think it's it's very much unknown what it's going to look like in in a couple years.</p>
</details>

是的，我认为这真的取决于你的受众，对吧？因为对于普通消费者，我总是以我的父母为例。聊天机器人实际上很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think it just really depends on your audience, right? Because for the regular consumer, like I use my parents always as an example. The chatbot is actually kind of great.</p>
</details>

哦，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, yeah.</p>
</details>

因为你不需要学习新的用户界面。你只需上传你的图片，然后与它们对话，对吧？它以这种方式来说是相当惊人的。然后对于专业人士，我同意你需要比你所知道的更多的控制，然后可能介于两者之间，这些人可能想做这个，但过去被专业工具吓倒了，对于他们，我确实认为有一个空间，你需要比聊天机器人提供更多的控制，但你又不需要像专业工具提供的那样多的控制，那么这种介于两者之间的状态是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because you don't have to learn a new UI. You you just upload your images and then you talk to them, right? Like it's it's kind of amazing that way. Then for the pros, I agree that like you need so much more control than you know and then there's somewhere in between probably which are people who may want to be doing this but they were too intimidated by the professional tools in the past and for them I do think that there's a space of like that you need more control than the chatbot gives you. Uh but you don't need as much control as what the professional tools give you and like what's that kind of in between state?</p>
</details>

那里有很多机会。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a ton of opportunity there.</p>
</details>

那里有很多机会。你提到Comfy UI很有趣，因为它在工作流的另一个极端，一个工作流可以有数百个步骤和节点，你需要确保所有这些都有效，而在光谱的另一端是Nano Banana，你用文字描述一些东西，然后你得到一些东西，比如我不知道模型架构之类的，但我想你的观点是，世界正在走向一个由一个提供商托管的模型集合来完成所有事情，还是你认为世界正在走向更多的人构建工作流。Nano Banana是Comfy UI工作流中的一个节点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a ton of opportunity there. It is interesting you mentioned comfy UI because it's on the other far spectrum of workflow like a workflow can have hundreds of steps and notes and you need to make sure all of them work whereas on the other side of the spectrum there's nano banana you kind of describe something with words and then you get something out like I don't know what's a model architecture stuff like that but um I guess is your view that the world is moving to an ensemble of a model hosted by one provider doing it all or do you think the world is moving to more of everyone building a workflow. Nano Banana is one of the nodes in comfy work UI.</p>
</details>

我绝对不认为在任何时候，一个模型就能完全满足大量的用例。所以我认为模型将永远是多样化的。例如，我们可以优化模型的指令遵循能力，确保它完全按照你的要求去做，但对于那些寻求构思或灵感的人来说，这可能是一个更糟糕的模型，他们希望模型能够接管并做其他事情，变得疯狂。所以我只是认为有太多不同的用例和太多不同类型的人，所以这个领域有很多空间，有很多模型可以共存。这就是我看到我们前进的方向。我不认为这会是一个单一的模型来统治一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I I definitely don't think that that the the broad amount of use cases will be fully satisfied by one model at any point. So I think that there will always be a diversity of models. some like um I'll give you an example, but some you know we could we could optimize for um instruction following in our models. Make sure it does exactly what you want, but it might be um a worse model for someone who's looking for ideiation or kind of inspiration where they want the model to kind of take over and and do other things, go crazy. So like I just think there's so many different use cases and so many types of people that like there's a lot of space there's a lot of room in this space for multiple models. So that's that's where I see us going. I don't think this is going to be like a single to rule it a single model to rule them all.</p>
</details>

完全有道理。让我们从专业人士的角度转到光谱的另一端。你认为未来的幼儿园孩子会通过在小平板上画草图来学习绘画，然后AI会把草图变成美丽的图像，他们就是这样接触艺术的吗？我不知道你是否总是想把它变成美丽的图像，但我认为AI作为伙伴和老师，以一种你以前没有的方式，确实有其独特之处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Complete sense. Let's go to the very other end of the spectrum from the professional. Do you think kindergarteners in the future will learn drawing by by sketching something, you know, on a on a little tablet and then you have the AI make turn that into a beautiful image and and so that's how how they they allow get in touch with art. I don't know if you always wanted to turn into a beautiful image, but I but I think there's something there about the AI being again a partner and a teacher to you in a way that you like didn't have. So I</p>
</details>

我以前不会画画，现在也不会，真的没有任何天赋。但是我认为，如果我们能以一种真正教你循序渐进的方式使用这些工具，帮助你批判性思考，也许还能像图像的自动补全一样，向你展示下一步可以怎么做，对吧？或者给我看几个选项，我该如何实际操作？所以我希望它更多地朝这个方向发展。我并不认为我们都希望每个5岁孩子的画都突然变得完美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">didn't know how to draw, still don't um don't have any talent for it really. Uh, but I think it would be great if we could use these tools in a way that actually teaches you kind of the step by steps and helps you critique and maybe again shows you kind of like an autocomplete almost for images like what like like what's the next step that I could take, right? Or maybe show me a couple of options and like how do I actually do this? So, I hope it's more that direction. I I don't think we all want, you know, every 5-year-old's image to suddenly look perfect.</p>
</details>

我们可能会在这个过程中失去一些东西。作为一个在高中所有课程中，艺术和素描课最吃力的人，我实际上会更喜欢那样，但我知道很多人希望他们的孩子学习绘画，我理解这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We we we would probably lose something um in the process. As someone who struggled the most in high school out of all my classes of the art and the sketching class, I actually would have would have preferred it, but I know a lot of people want their kids to learn to draw, which I understand.</p>
</details>

这很有趣，因为我们一直在尝试让模型创建像儿童蜡笔画那样的东西，这实际上相当具有挑战性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's funny because we've been trying to get the model to create um like childlike crayon drawings, which is actually quite challenging.</p>
</details>

讽刺的是，你知道，有时那些难以制作的东西是因为抽象程度非常高，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, ironically, you know, sometimes the the things that are hard to make are because the level of abstraction is very large, right?</p>
</details>

所以，制作这类图像实际上相当困难。你专门的学前班。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it's actually quite difficult to make those types of images. your dedicated prek fin.</p>
</details>

我们现在确实有研讨会评估，试图看看我们是否有所改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We we do have seminar evals right now to try to see if we're getting better.</p>
</details>

### AI在教育领域的潜力

总的来说，我对AI在教育方面的应用非常乐观。你知道，部分原因是我认为我们大多数人都是视觉学习者，对吧？所以现在AI作为导师，基本上它能做的就是和你说话或者给你文本阅读，但这绝对不是学生学习的方式。所以我认为这些模型在通过提供视觉线索来帮助教育方面有很大的潜力。你知道，想象一下，如果你能得到一个事物的解释，你不仅得到文本解释，还能得到图像和图表来帮助解释它们是如何工作的。我认为一切都会对学生更有用，更容易获取。所以我对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm in general I'm very optimistic about AI for education. And you know part of the reason is I think that most of us are visual learners, right? So that AI right now as a tutor basically all it can do is is talk to you or give you text to read and that's definitely not how students learn. So I think that these models have a lot of potential as a way to help education by giving people sort of visual cues. You know, imagine if you could get an explanation for something where you get the text explanation, but you also get images and figures that kind of like help explain how they work. I think it just everything will be much more useful, much more accessible for students. So I'm really excited about that. That is a</p>
</details>

关于这一点，有一件对我们来说非常有趣的事情是，当Nano Banana发布时，它几乎感觉像是一个用例的一部分是推理模型。比如你有一个图表，绝对是。对吧？你可以通过视觉来解释一些知识。所以模型不仅仅是做视觉方面的近似。它也有推理方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">on that point, one thing that's very interesting to us is that when Nano Banana came out, it almost felt like there's part of a use case is the reasoning model. Like you have a diagram. Absolutely. Right. Like you can explain some knowledge visually. So the model not just doing approximation of the visual aspect. There's the reasoning aspect to it too.</p>
</details>

你认为我们也会走向那个方向吗？你认为所有大型模型都会意识到，哦，要成为一个好的**LM**（Language Model: 语言模型）或**VL**（Vision-Language Model: 视觉语言模型），我们必须同时拥有图像、语言和音频等等？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you think that's where we're going to? Do you think all the model large models will realize that oh like to be a good LM or VL like uh VLM we have to have both image and language and audio and so on so forth.</p>
</details>

100%。我绝对是这么认为的。这些AI模型未来最让我兴奋的是，它们将成为人们完成更多事情的工具。我认为，如果你想象一个未来，这些**Agentic Models**（代理模型: 能够自主规划和执行任务的AI模型）只是互相交谈并完成所有工作，那么这种视觉交流模式的必要性就会降低。但只要有人参与其中，只要他们解决任务的动机来自人类，我认为视觉模态对于未来任何这些AI代理来说都将至关重要，这是完全有道理的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">100%. I definitely think so. Um the the future for these AI models that I'm most excited by is where they are tools for people to accomplish more things. Like I think if you imagine a future where you have these agentic models that just talk to each other and do all the work, then it becomes a little bit less necessary that there's like this visual mode of communication. But as long as there's people in the loop and as long as the the kind of the the motivation for the task they're solving comes from people, I think it makes total sense that that visual modality is going to be really critical for any of these AI agents going forward.</p>
</details>

### AI的深度思考与多模态能力

我们会不会达到一个点，你要求它创建一个图像，它会思考两个小时，自己进行推理，有草稿，探索不同的方向，然后给出一个最终答案？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Will we get to a point where there's actually so of you know I'm I'm asking you to create an image it sits for two hours reasons with itself has drafts explores different directions and then comes back with a final answer.</p>
</details>

是的，绝对会。如果需要的话，是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Absolutely. If it's if necessary. Yeah. Like</p>
</details>

也许不仅仅是单一图像，而是像你重新设计房子一样，你可能真的不想参与这个过程，对吧？但你会说“好吧，它看起来是这样的，这是我喜欢的一些灵感。”然后你把它发送给一个模型，就像你发送给设计师一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and maybe not just for a single image but to the point of you know maybe you're redesigning your house and maybe you actually really don't want to be involved in the process right but you're like okay this is what it looks like this some this is some inspiration that I like. And then you send it to um a model the same way that you would send it to like a designer.</p>
</details>

这是视觉深度研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's the visual deep research.</p>
</details>

它就像是视觉深度研究。我真的很喜欢这个词。然后它就会去做它的事情，也许会寻找适合你环境的家具，然后它会给你提供一些选项，因为也许你不想花两个小时在一件事情上，比如艺术书籍，或者10页幻灯片演示文稿。我认为，如果你考虑像说明手册或宜家说明书之类的东西，那么将一个难题分解成许多中间步骤，作为一种沟通方式，可能会非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The vis it's like visual deep research basically. I really like that term. And then it goes off and does its thing and searches for maybe the furniture that would go with your environment and then it comes back to you and maybe presents you with options because maybe maybe you don't want to sit for two hours at one thing art book you know 10 10 slide deck. I also I think if you if you think about like um instruction manuals or like IKEA directions or something then like breaking down a hard problem into many intermediate steps could be really useful as as a way to communicate.</p>
</details>

那么我们什么时候能生成乐高积木套装呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when can we generate Lego sets?</p>
</details>

是的，也许很快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, soon maybe</p>
</details>

我们是否在某个时候需要3D作为其中的一部分？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">do we at some point need 3D as part of</p>
</details>

对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right.</p>
</details>

我的意思是，关于世界模型和图像模型以及它们如何结合在一起，有很多争论。请在这里启发我们。我们最终会走向何方？简短的总结是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean there's a whole debate around world models and image models and how they fit together. thoughts enlighten us here. What is the what is the short summary of where we'll end up there?</p>
</details>

嗯，我不知道答案。我认为，显然真实世界是3D的。所以如果你有一个3D世界模型，或者一个具有明确3D表示的世界模型，有很多优势。例如，一切都始终保持一致。现在主要的挑战是，我们口袋里没有3D捕捉设备。所以就训练这些模型的可用数据而言，它主要是2D投影。所以我认为这两种观点对于我们前进的方向都是完全有效的。我有点倾向于投影方面，我认为我们可以解决几乎所有问题，即使不是所有问题，通过直接处理3D世界的投影，并让模型学习潜在的世界表示。我的意思是，我们已经看到视频模型具有非常好的3D理解能力。你可以对你生成的视频运行重建算法，它们非常准确。而且总的来说，如果你看看人类艺术的历史，它最初就是投影，对吧？人们在洞穴墙壁上绘画。我们所有的界面都是2D的。所以，我认为人类非常非常适合处理3D世界到2D平面的投影。这是一个非常自然的界面和观看环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I mean I don't know the answer. I think that um obviously the real world is in 3D. So if you have 3D a 3D world model or world model that has explicit 3D representations. There's a lot of advantages. For example, everything stays consistent all the time. Um now the main challenge is that we don't walk around with 3D capture devices in our pocket. So in terms of like the available data for training these models, it's largely the projection onto onto 2D. So I think that both viewpoints are totally valid for where we're going. I come a bit from the projection side like I think it we can solve almost all the problems if not all the problems working on the projection of the 3D world directly and letting the models learn the latent world representations. I mean we see this already that the video models have very good 3D understanding. You can run reconstruction algorithms over the videos you generate and they're they're very accurate. Um, and in general, if you look at like the history of human art, like it it it starts as like the projection, right? People drawing on on cave walls. Um, all of our interfaces are in 2D. So, I think that like humans are very very well suited for working on this projection of the 3D world into a 2D plane. And it's a really natural environment for interfaces and for viewing. So,</p>
</details>

这非常正确。比如，我业余时间是个漫画家，2D绘画就是光影，然后你呈现3D，我们能否欺骗自己相信它是3D，或者它在纸上？但是人类能做到的是，你知道，像绘画或模型能做到的是，我们可以导航世界，就像我们看到一张桌子，我们不能走过去。我想问题变成了，如果一切都是2D的，你如何解决这个问题？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that is very true. like um so I'm a cartoonist in my spare time and then drawing in 2D is just light and shadow and then you present yourself with 3D cannot we trick ourselves to believing it's 3D or it's you know on a piece of paper but then what human can do that you know like a drawing or like a model can do is you we can navigate the world like we see a table we can't walk past it I guess the question becomes if everything is 2D how do you solve that problem</p>
</details>

嗯，我不认为，是的，所以如果我们试图解决机器人产品问题。我认为也许2D表示对于高层次的规划和可视化是有用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">well I don't think yeah so if we're trying to solve the robot products problems. I think maybe the 2D um representation is useful for planning and visualizing kind of at a high level.</p>
</details>

我认为人们通过记住世界的2D投影来导航。你不会在脑海中构建一个3D地图。你更像是“哦，我知道我看到这座建筑，我左转。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like I think people navigate by um by remembering kind of 2D projections of the world. Like you don't you don't build a 3D map in your head. You're more like oh I know I see this building I turn left.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

所以我认为对于那种规划来说是合理的，但对于实际在空间中移动，3D在那里肯定很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think that like for that kind of planning it's reasonable but for the actual locomotion around the space like I definitely 3D is important there. So</p>
</details>

机器人技术。是的，他们可能需要3D。那是救星。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">robotics Yeah. They probably need 3D. That's the saving grace.</p>
</details>

### 角色一致性与模型评估的挑战

是的，是的。嗯，你之前提到的角色一致性，我真的很喜欢那个例子，当一个模型感觉如此个性化时，人们就非常想尝试它。你们是如何解锁那一刻的？我问这个的原因是，角色一致性太难了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Yeah. Um, so character consistency, which you previously mentioned, I really love the example of like when a model feels so personal, like people are so tempted to try it. How did you unlock that moment? The reason why I asked is that character consistency is so hard.</p>
</details>

呃，这里有一个巨大的**恐怖谷**（Uncanny Valley: 指机器人或AI在外观和行为上与人类越相似，但又不够完美时，人们会感到越发的不适和厌恶）效应。你知道，如果是我不认识的人，我看到他们的AI生成图像，我会觉得“好吧，也许是同一个人”，但如果是我认识的人，只要有一点点差异，我就会感到非常反感，因为我会觉得这不是一个真实的人。所以在这种情况下，你们如何知道你们生成的是好的？这主要是通过用户反馈，比如“我喜欢这个”，还是通过其他方式？你们看脸吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, there's a huge uncanny valley to it. like you know like if it's someone I don't know if I see their AI generation I'm like okay it's maybe the same person but if it's someone I know if there's just a little bit of a difference uh I I'm actually felt very turned off by it because I'm like this not a real person. So in that case how do you know what you're generating is good and then is it mostly by user feedback or like I love this or is it something else? You look at faces, you know, and but</p>
</details>

人脸检测摄像头用户和……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">face detection camera user and</p>
</details>

不。所以，甚至在你们发布这个之前，对吧？所以，当我们开发这个模型时，我们实际上是从对我们不认识的人脸进行角色一致性评估开始的，但这并不能告诉你任何东西，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">no. So, so, so not even before you ever released this, right? So, when when we're we were developing this model, we actually started out doing character consistency evolves on faces we didn't know and it doesn't tell you anything, right?</p>
</details>

然后我们开始在我们自己身上测试它，很快就意识到，好吧，这就是你需要做的，因为这是一张我熟悉的脸。所以有很多目测评估发生，团队只是在自己身上测试它。而且通常人们会认识他们认识的人，比如Oliver现在可能足够熟悉我的脸，能够判断生成的是否真的是我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and then we started testing it on ourselves and quickly realized like, okay, this is what you need to do because this is a face that I'm familiar with. And so there is a lot of sort of eyeballing evaluations that happens and just the team testing it on themselves. Um, and just generally people they know like Oliver probably knows my face at this point enough to be able to tell whether or not it's actually me when it's generated.</p>
</details>

嗯，所以我们做了很多这样的事情。然后，你知道，你理想情况下会在不同的人群、不同的年龄段、不同类型的人群中进行测试，以确保它在各个方面都能正常工作。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">Um, and so we do do a lot of that. Um, and then you know you you ideally test it on different sets of people, different ages, right? Different different kind of groups of folks to make sure that it kind of works across the board.</p>
</details>

是的，我认为他们是对的。我的意思是，这触及了一个更大的问题，那就是在这个领域进行评估真的非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think they're right. I mean that that touches that touches a little bit on this this um bigger issue which is that like eval are really difficult in this space</p>
</details>

因为人类的感知在它关心的事情上非常不平衡。所以，很难知道一个模型的角色一致性有多好，以及它是否足够好？是否不够好？你知道，我认为在角色一致性方面我们还有很大的改进空间，但我认为对于某些用例，我们已经达到了一个点，而且，我们绝不是第一个编辑模型，但我认为一旦角色一致性的质量达到一定水平，它就可以迅速普及，因为它对更多的事情变得有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um because human perception is very uneven in terms of the things that it cares about. So um so really it's hard it's very hard to know like how good is the character consistency of a model and um is it good enough? Is it not good enough? Like you know I think there's there's still a lot of improvement we can make on character consistency but I think that for some use cases like we got to a point and that's you know we weren't the first edit model by any means but I think that like once the quality gets above a certain level for character consistency it can kind of just take off because it becomes useful for so much more.</p>
</details>

我认为随着它的改进，它也会对更多的事情有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think as it gets better it'll be useful for even more things too. Yeah,</p>
</details>

我认为我们在一系列模态中看到的一个非常有趣的事情是，图像编辑和生成显然是其中之一，那就是，我认为竞技场和基准测试以及所有这些都很棒，但特别是当你有像图像和视频这样的多维事物时，随着所有模型越来越好，很难将模型的所有质量浓缩成一个判断。所以，就像，你知道，你正在判断，好吧，你将一个角色换到一张图像中，然后改变图像的风格。也许一个在角色交换和一致性方面做得更好，而另一个在风格方面做得更好？你如何判断哪个输出更好？这可能归结为这个人最关心什么，以及他们想用它做什么。那么，在决定部署哪个版本的模型或在训练期间真正关注什么时，你们在权衡这些因素时，是否更看重模型的某些特性？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think one of the really interesting things we're seeing across a bunch of modalities of which image edit and generation obviously is one is like um I think the arenas and benchmarks and everything are awesome but especially when you have like multi-dimensional things like image and video um it's very hard as all of the models get better and better to condense every quality of a model into like one judgment. So it's like, you know, you're judging, okay, you swap a character into an image and you change the style of the image. Maybe one did the character swap and consistency much better and the other did the style much better? Like how do you say which output is better? And it probably comes down to like what the person cares most about and what they're what they want to use it for. Um, are there like certain, you know, characteristics of the model that you guys value more than other things in like making those trade-offs when deciding which version of the model to deploy or like what to really focus on during training?</p>
</details>

### 模型开发中的权衡与优先级

嗯，是的，有。我喜欢这个领域的一点是，没有正确答案。所以，实际上有很多，我不知道这是否是品味，但它就像是模型中的偏好。我认为你可以看到不同研究实验室在他们发布的模型中偏好的差异。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, yes, there are. One of the things I like about this space is that uh there is no right answer. So, actually there's quite a lot of of I don't know if it's taste, but it's like preference that goes into the models. And I think you can kind of see the difference in preferences of the different research labs in the models that they release.</p>
</details>

所以，当我们在平衡两件事时，很多时候都归结为，哦，我不知道。我只是更喜欢这种外观，或者，你知道，这个功能对我们来说更重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like when we're balancing two things, a lot of it comes down to like, oh well, I I don't know. I just like this this look better or I you know, this this feature is more important to us.</p>
</details>

我想这对你们来说也很难，因为你们有这么多用户，对吧？像Google，像在Gemini应用程序中，世界上每个人都可以使用它，而许多其他AI公司只考虑，我们只针对专业创意人士，或者我们只针对消费者内容创作者，而你们面临着独特而令人兴奋但又充满挑战的任务，那就是世界上任何人都可以做到这一点。我们如何决定每个人都想要什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'd imagine it's hard for for you guys, too, because you have you have so many users, right? like Google like being in the Gemini app like everyone in the world can use that versus like many other AI companies just think about like we're only going for the professional creatives or we're only going for the consumer meat makers and like you guys have the unique and exciting but challenging task of like literally anyone in the world can do this. How do we decide what everyone would want?</p>
</details>

是的。有时我们确实会做出这些权衡。我们确实有一系列我们不想后悔的超级高优先级的事情。对吧？所以现在因为角色一致性非常棒，很多人都在使用它，我们不希望我们的下一个模型在这个维度上变差。对吧？所以我们非常关注它。我们非常关心当你想要照片时，图像看起来逼真，这很重要。我认为我们都更喜欢那种风格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And it is sometimes we do make these trade-offs. We do have a set of things that are sort of like super high priority that we don't want to regret restress on. Right? So now because character consistency was so awesome and so many people are using it, we don't want our next models to get worse on that dimension. Right? So we pay a lot of attention to it. We care a lot about images looking photorealistic when you want photos and this is important. One, I think we all prefer that style.</p>
</details>

也是。嗯，你知道，例如在广告用例中，很多都是产品和人物的逼真图像。所以，我们希望确保我们能够做到这一点。然后有时会有一些事情会被搁置。所以，对于这个首次发布，模型在文本渲染方面不如我们期望的那么好，这是我们未来想要修复的问题。但这就像是，我们看了看，好吧，模型在X、Y、Z方面表现良好，在这个方面不如人意，但我们仍然认为可以发布，它仍然会是人们喜欢玩的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">too. Um, you know, for advertising use cases, for example, like a lot of it is kind of photorealistic images of products and people. And so, we want to make sure that we can kind of do that. And then sometimes there are just things that like will kind of fall down the wayside. So, for this first release, the model is not as good as text rendering at as we would like it to be, and that's something that we want to fix in the future. But it was kind of one of those things where we looked at, okay, the model's good at XY Z, it's not as good at this, but we still think it's okay to release and it will still be an exciting thing for people to play with.</p>
</details>

如果你回顾过去，对吧，我们以前的模型世代，很多事情我们都是用像**ControlNet**（一种用于AI图像生成的辅助模型）这样的侧车模型来做的，我们基本上找到了一个方法来向模型提供结构化数据以实现特定的结果。看起来这些较新的模型已经退了一步，仅仅因为它们在提示方面或，你知道，提供参考图像并从中获取信息方面非常出色。从长远来看，这会走向何方？你认为这会在某种程度上回归吗？嗯，你知道，我的意思是，从创作者的角度来看，拥有，我不知道，开放姿态信息，这样我就可以为多个角色获得完全正确的姿态。这看起来非常有吸引力，对吧？或者换个说法，是不是“苦涩的教训”在这里成立，即归根结底一切都只是一个大模型，你把东西扔进去，还是我们可以提供一些结构来让它变得更好？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you look at the past, right, we we we had for previous model generations, a lot of things we did with like sidecar models like control net or something like that where we basically figured out a way to provide structured data to the model to achieve a particular result. It seems like these newer models that has taken a step back just because they're so incredibly good in just prompting or or you know giving a reference image and picking things up from there. Where will this go long term? Do you think this will come back to some degree? Um you know like I mean for from the creators perspective right having I don't know open pose information so I can get get a pose exactly right right for multiple characters. This seems very very tempting, right? Is it like or to rephrase it a little bit, it's like does the bitter lesson hold here that at the end of the day everything's just one big model and you throw things in or is there is a little of structure we can we can offer to make this better?</p>
</details>

嗯，我的意思是，我认为总会有用户想要模型开箱即用无法提供的控制。但我认为我们努力做到的是，你知道，因为艺术家真正想要做某事时，他们想要意图被理解。我认为这些AI模型在理解用户意图方面越来越好。所以当你现在提出文本查询时，模型通常能理解你的目的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, I mean I think that there will be there'll always be users that want control that the model doesn't give you out of the box. But I think we we tried to make it so that um you know because really what really what an artist wants when they want to do something is they want the intent to be understood. And I think that that these um AI models are getting better at understanding the intent of users. So often when you ask text queries now the model gets what you're going for.</p>
</details>

所以，你知道，从这个意义上说，我认为我们可以在理解用户意图方面走得很远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you know in that sense I think we can we can get pretty far with understanding the intent of our users.</p>
</details>

嗯，也许其中一些是**个性化**（Personalization: 根据用户个人偏好和历史行为提供定制内容或体验），比如我们需要了解你正在尝试做什么或者你过去做了什么的信息。但我认为一旦你能理解意图，那么你通常就能完成那种编辑，比如这是一种非常结构保留的编辑，还是像一种自由形式的编辑，我们可以学习这些类型的效果，我认为。但当然，仍然会有人非常关心每一个像素，比如这个东西需要稍微向左一点，再蓝一点，这些人会使用现有工具来完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um and maybe some of that is personalization like we need to know information about what you're trying to do or what you've done in the past. But I think once you can understand the intent then you can you can generally do the the type of edit like is this like a very structure preserving edit or is this like a free form kind of like we can learn these these kinds of effects I think. Um but still of course there's one person who's going to really care about every pixel and like this this thing needs to be slightly to the left and a little bit more blue and like those people will use existing tools to do that.</p>
</details>

我的意思是，我认为这就像，你知道，我想要一张有26个人拼出字母表中每个字母的图像，或者类似的东西。对吧。我认为我们离第一次就能做到这一点还有相当长的路要走。另一方面，有了姿态信息，它可能可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean I think it's like you know I want an image with 26 people spelling out every letter of the alphabet or something like that. Right. That's off the thing where I think we're still quite a bit away from getting that right, you know, in the first try. On the other hand, with pose information, it could potentially get</p>
</details>

但问题是，你真的想成为那个提取姿态并提供信息的人吗？还是你只是想提供一些参考图像，然后说“这实际上就是我想要的，模型去搞定吧”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then the then the question I guess is like do you really want to be the one who's like extracting the pose and providing that as an information or do you just want to provide some reference image and say like this is actually what I want like model go figure this out right</p>
</details>

有26个人，现在每个人都有不同的风格。很公平。是的，我认为在这种情况下，我不会花大量时间构建一个自定义界面来制作这张有46个人的图片，这似乎是我们能够解决的那种问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there are 26 people every now and different style. Fair enough. Yeah, I think in that in that case I wouldn't spend a ton of time building a custom um interface for making this this picture of 46 people seems like the kind of thing that we can we can solve.</p>
</details>

只是转移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Just transfer.</p>
</details>

### 图像表示的未来：像素的极限与多模态融合

你认为AI图像的表示方式会改变吗？我问这个问题的原因是，作为艺术家，我们使用不同的格式。有**SVG**（Scalable Vector Graphics: 可缩放矢量图形），我们有锚点和**贝塞尔曲线**（Bezier curves: 一种在计算机图形学中用于生成平滑曲线的数学方法）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you think the representation of what the AI images are will change? So the reason why I asked the question is that as artists there's different formats we play with. There's the SVGs, we have anchor points and bezier curves.</p>
</details>

另一方面，有，你知道，波西或像壁画之类的。我们也可以使用图层。还有另一个参数是，你使用的画笔是什么样的，比如画笔的纹理。所以，每一个参数你都可以编写脚本，并实际地做一些非常个性化的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And on the other side, there's, you know, porcy or like fresco, what have you. There's layers that we can also play with. There's the other parameter which is what's the brush you use like the brush, the texture of it. So, every one parameter you can write script and actually uh do something very personal about it. Mhm.</p>
</details>

你认为像素是图像生成模型的正确表示方式，是最终目标吗？还是你认为我们还没有发明出一种全新的表示方式？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Do you think like pixel is the right representation um the endgame for image generation model or do you think there's a net new representation that we haven't invented yet?</p>
</details>

这是一个简单的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's an easy question to</p>
</details>

哇。嗯，我会说，一切都是像素的子集。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">wow. Um I I'll say that uh that um everything is a subset of pixels.</p>
</details>

没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's true.</p>
</details>

所以文本是像素的子集，因为我可以将所有文本渲染成图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So text is a subset of pixels because I could just render all the text as an image.</p>
</details>

那么我们只用像素能走多远是一个有趣的问题。我认为，你知道，如果模型真的响应迅速，并且能很好地处理多轮交互，那么我认为你可能会走得很远，因为我认为你想要离开像素领域的主要原因是可编辑性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So how far can we get with just pixels is an interesting question. I think you know if the model is really um responsive and handles multi-turn interactions well then I think you can probably get pretty far because the primary reason I think you would want to leave the pixel domain is for editability.</p>
</details>

嗯，所以，你知道，在需要字体或想更改文本或想移动东西的情况下，就像使用控制点一样，拥有像素和SVG以及其他形式组成的混合生成可能会很有用。但是如果我们能做到这一切，如果多重交互足够，那么我认为只用像素就能走得很远。嗯，我想说，这些具有原生能力的模型令人兴奋的一点是，你现在拥有一个可以生成代码和生成图像的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so you know in cases where you need to have your font or you want to change the text or you want to move things around just like with control points um it could be useful to have um kind of mix generation which consists of pixels and SVGs and other other forms. Um but if we can do it all, if we can if the multi- interaction is enough, then I think you can get pretty far with pixels. Um I will say that one of the things that's exciting about these um these models that have native capabilities is that you now have a model that can generate code and it can generate images.</p>
</details>

所以在这个交叉点上有很多有趣的事情，对吧？比如，也许我想写一些代码，然后让一些东西被栅格化，一些东西是参数化的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there's a lot of interesting things that come in that intersection, right? Like maybe I wanted to write some code and then make make some some things be rasterized, some things be parametric.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

把它们都粘在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like stick it all together,</p>
</details>

把它们一起训练。这会非常酷。这是一个很好的观点，因为我确实看到一条推文，有人要求**Cloud Sauna**（此处指一个能处理代码的AI模型）在Excel表格中复制一张图片，其中每个单元格都是一个像素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">train it together. Like this would be very cool. That's such a good point because I did see a tweet of someone asking Cloud Sauna to replicate a image on an Excel sheet where every cell is a pixel</p>
</details>

这就像一个非常有趣的练习。它就像一个编码模型，对图像一无所知，但它奏效了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which is like a very fun exercise. It was like a coding model like doesn't really know anything about you know images yet it worked.</p>
</details>

是的，有经典的鹈鹕骑自行车测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, there's the classic pelican riding a bicycle test.</p>
</details>

是的，完全正确。如果可以的话，我有一个关于界面的问题。抱歉，如果我提到了太多产品方面的东西。我只是对产品方面非常好奇，比如，我想知道你们如何看待拥有人们编辑或生成Nano Banana图像的界面，而不是仅仅希望大量人通过API将模型用于不同的事情。我们已经谈论了这么多不同的用例，比如广告、教育、设计、建筑。这些事情中的每一个都可以是一个基于Nano Banana构建的独立产品，它以正确的方式提示模型，或者允许某些类型的输入等等。你们的愿景是，Gemini应用程序中的产品就像一个供人们探索的游乐场，然后开发者将为特定用例构建独立产品，还是你们也对此感兴趣？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, totally. I have one on on model like on interfaces if that's okay. I don't sorry if I'm bringing up too much product stuff guys. I'm just very curious on on the product front like um I guess I'm curious how you think about like owning the interface where people are editing or generating images with Nano Banana versus really just wanting a ton of people to use the model for different things in the API. Like we've talked about so many different use cases like ads, you know, education, um design, uh like architecture. Each of those things could be there could be a standalone product built on top of Nano Banana that prompts the model in the right way or allows certain types of inputs or whatever. Is your guys' vision like that the kind of the product in the Gemini app is like a playground for people to explore and then developers will build the individual products that are used for certain use cases or is that something you're also kind of interested in owning?</p>
</details>

### 产品策略：探索、构建与赋能

我认为这有点像所有方面。所以，我绝对认为Gemini应用程序是人们探索的入口点。Nano Banana的一个优点是，我认为它表明乐趣是通往实用性的门户，你知道，人们来这里是为了制作自己的小雕像图像，但他们留下来是因为它帮助他们完成数学作业，或者帮助他们写一些东西，对吧？所以，我认为这是一个非常强大的过渡点。我们公司肯定对构建和探索界面感兴趣。所以，你知道，你可能已经看到了Josh团队在实验室中开发的Flo，它正在努力重新思考AI电影制作人的工具是什么，对于AI电影制作人来说，图像实际上是迭代过程中的重要组成部分，因为视频创作成本高昂，很多人在最初创作时会以帧为单位思考，他们很多人甚至从**LLM**（Large Language Model: 大型语言模型）空间开始进行头脑风暴，思考他们最初想要创作什么，所以我们在这个领域肯定有自己的位置，我们只是在思考它会是什么样子。我们有一个优势，就是它与模型和界面紧密相连，所以我们可以紧密耦合地构建它。然后肯定有，你知道，我们可能不会去为一家建筑公司构建软件。我父亲是建筑师，他可能会喜欢那样。但我认为那不是我们会做的事情，但应该有人去做。这就是它令人兴奋的原因，因为我们确实有开发者业务，我们有企业业务，所以人们可以使用这些模型，然后弄清楚下一代工作流是什么样的，针对这个特定的受众，这样我就可以帮助他们解决问题。所以我认为答案有点像，是的，所有这三种情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's a little bit of everything. Um, so I definitely think that the Gemini app is an entry point for people to explore. And the one the nice thing about Nano Banana is I think it shows that fun is kind of a gateway to utility where you know people come to make a figurine image of themselves but then they stay because it helps them with their math homework or it helps them write something, right? And and so I think that's a really powerful kind of transition point. Um there's definitely interfaces that we're interested in building and exploring as a company. And so um you know you may have seen Flo from Josh's team in labs that's that's really trying to rethink like what's what's the tool for AI filmmakers right and for AI filmmakers image is actually a big part of the iteration journey right because video creation is expensive a lot of people kind of think in frames um when they when they initially start creating and a lot of them even start in the LLM space for like brainstorming and thinking about what they want to create in the first place um and so there's definitely kind of place that we have in that space of just us trying to think about like what does look like. Um, we have the advantage of it kind of sitting close to the models and the interfaces so we can kind of build that in in a tight coupling. Um, and then there's definitely the, you know, we're probably not going to go build a software for an architecture firm. My dad is an architect and he would probably love that. Um, but I don't think that's something that we will do, but somebody should go and do that. Um, and that's why it's exciting because we do have the developer business and we have the enterprise business and so people can go use these models and then figure out like what's the next generation workflow for like this specific audience so that I can help them solve a problem. So I I think the answer is kind of like yes all three.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

是的。我提到了这一点。我不知道你们有没有关注Nano Banana在日本的受欢迎程度，但它简直是疯了。这很有趣，我现在一半的X动态都是这些在日本的Nano Banana重度用户，他们创建了像“Easy Banana”这样的Chrome扩展程序，专门用于使用Nano Banana生成漫画和特定类型的动漫等。他们深入研究，基本上为你提示模型，并将输出存储在各种地方。显然，他们使用你们的基础模型来生成这些令人惊叹的动漫，你根本猜不到它们是AI生成的，因为其精度和一致性水平超出了我今天所见过的任何单一模型的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I I brought that up. I don't know if you guys have been following the reception of Nano Banana in Japan, but um I'm sure you've had it's it's been insane. And it's so funny like I now half of my X feed is these really heavy Nano Banana users in Japan who have created like Chrome extensions called there's one called like Easy Banana that's specifically for using Nano Banana for like manga generation and specific types of anime and things like that. And like they go super deep into basically prompting the model for you and storing the outputs in various places. Um using obviously your your underlying model to generate these like amazing anime that you would never guess were AI generated because like the level of of precision and consistency and that sort of thing is just beyond what I've seen any single model be able to do today.</p>
</details>

### 模型乘数效应与未来方向

我想，嗯，就像Justin所说的，你们在模型中看到了哪些“乘数效应”？我的意思是，例如，如果你解锁了角色一致性，你就可以生成不同的帧，然后你可以制作视频，然后你可以制作电影，对吧？所以这些东西，如果你做对了，并且做得非常好，那么就会有更多的下游任务可以从中衍生出来。嗯，只是好奇，你们是如何思考要解锁哪些乘数效应的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I guess um what are some like to Justin's point what are some force multipliers that you guys have seen in the model? So what I mean by this is for example if you unlock character consistency you can generate different frames and then you can make a video and then you can make a movie right. Um so these are the things that if you get it right and get it really well there's so much more downstream tasks that can derive from it. Um just curious like how do you think about what are the force m multipliers that you want to unlock? So the next</p>
</details>

下一个大的会是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what's the next big one</p>
</details>

下一个大的浪潮是什么，人们可以以Nano Banana为基础模型来完成所有下游任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what's the next yeah big wave of people who can just use nano nano as the base model for all the downstream tasks.</p>
</details>

所以我认为目前的一个是延迟点，对吧？因为我认为，当生成下一帧只需要10秒时，与这些模型进行迭代真的很有趣，对吧？如果你不得不坐在那里等待两分钟，你可能就会放弃，那会是一种非常不同的体验。所以我认为这是一个，就像，必须有一些质量标准，因为如果它只是快，但质量不达标，那也没有意义，对吧？你必须达到一个质量标准，然后速度就成为一个乘数效应。我认为这种将信息可视化的一般想法，就像你之前提到的教育这一点，是另一个，对吧？那需要……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think one one current one actually is also the latency point right because I think because I think it's also just like it makes it really fun to iterate with these models when it just takes 10 seconds to generate the next frame right if you had to sit there and wait for two minutes like you would probably just give up and leave a very different experience so I think that's one just like there has to be some quality bar because if it's just fast and the quality isn't there then it also doesn't matter right like you have to hit a quality bar and then um then speed becomes a force multiplier I think this general idea of just visualizing information to your education point from earlier is sort of another one, right? And that needs</p>
</details>

好的文本。它需要事实性，对吧？因为如果你要开始制作关于某事的视觉解释器，它看起来很漂亮，但它也需要准确，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">good text. It needs factuality, right? Because if you're going to start making kind of visual explainers about something, um it it looks nice, but it also needs to be accurate, right?</p>
</details>

对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right?</p>
</details>

所以，我认为那可能是下一个层次，在某个时候，你也可以拥有一个个性化的教科书，对吧？其中不仅文本不同，视觉效果也不同。是的，钻石时代，那基本上就是。嗯，然后它也应该很好地实现国际化，对吧？因为很多时候，今天你可能确实能在网上找到一个解释你正在学习的东西的图表，但它可能不是你实际使用的语言。对吧？所以我认为这只是另一种改进和开放信息可访问性的方式，让更多人能够接触到信息，而且再次强调是视觉化的，因为很多人都是视觉学习者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, and so I think that's probably kind of the next level where at some point then you could also just have a personalized textbook to you, right? Where it's not just the text that's different, but it's also the visuals. Yeah, the diamond age that was basically Yeah, basically. Um, and then it should also internationalize really well, right? Because a lot of the times today you might actually be able to find a diagram that explains the thing that you're trying to learn about on the internet, but it's maybe not in the language that you actually speak. Um, right? And so I think that becomes just like another way to improve and open up accessibility um of information to just a lot more people and again visually because a lot of people are visual learners.</p>
</details>

有趣。你如何看待生成的图像？我问这个问题的原因是，还有一个非常酷的例子。我看到有人用Nano Banana实现了这一点，他写了一个脚本，然后不断提示模型说“生成这一秒之后的帧”，然后它就变成了一个视频。所以当我看到它时，我想，好吧，是不是每张图像都只是一个连续体中的一帧？你总是知道平行宇宙中的连续体。你本可以生成其中任何一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Interesting. How do you think about like images generated? So the reason why I asked is that there's another very cool example. I've seen someone making it work with nano banana which is he wrote a script and then he kept prompt the model to say generate the frame one second after this and then it became a video. So and then when I saw it I'm like well is every image just one frame in a continuum like you always know about the continuum in a parallel universe. you could have you know generated any one of them.</p>
</details>

这是一个大的有向图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's one big directive graph that</p>
</details>

对，没错，也许最终就是视频。那么你如何看待这一点？它在哪里交叉或不交叉？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right exactly and then maybe it's video at the end of the day. So how do you see that? Where does it you know intersect or not intersect?</p>
</details>

我认为视频和图像非常密切相关。而且我认为我们在这类“接下来会发生什么”或“序列预测”的用例中看到的，也是模型世界知识的泛化。那么，我认为它会走向何方？我认为我们会拥有，是的，我认为视频是一个明显的下一个领域。我认为，当你进行编辑时，很多时候你问的是“如果我这样做会发生什么？”这就是视频所拥有的，它拥有动作的时间序列。所以，就像我们有一个慢帧率的视频，你可以与之互动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's very yeah video and images are very closely related. Um and also I think what we're seeing in these kind of what's coming next or sequence predicting um use cases is the the generalization in world knowledge of the model as well. Um and and this is and so where where do I think it's going? I think that we will have yeah I think video is um an obvious next kind of domain. I think that like when when you have editing um a lot of times what you're asking is like you know what happens if I do this and that's what video has it has the the time sequence of actions. So it's like we have a slow frames per second video that you can interact with,</p>
</details>

但显然，制作一个完全互动、实时且……的东西是这个领域的发展方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but obviously making something that's like fully interactive and real time and um is the direction this this field is headed.</p>
</details>

### 个人偏好与模型潜力

所以你可能是世界上使用图像模型经验最丰富的人中的0.001%。你个人最喜欢的用例是什么？如果你不仅仅是测试现有模型，你日常生活中如何使用它？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you are probably in the zero I don't know how many zer 0.001% of most experienced people in the world using image models. What are your your personal favorite use cases? How how do you use it dayto-day if you're not just testing an existing model?</p>
</details>

嗯，我不太确定我是否是最顶尖的，但我会告诉你，嗯，就像我们之前说的，个性化方面是完全打动我的地方。我有两个年幼的孩子，我用模型做的最好的事情就是和我的孩子一起做的事情，比如我们可以让他们的毛绒玩具在这些应用程序中活起来，看到这些真的非常个性化和令人满足。嗯，我们也有很多人，例如，拿出他们家人的老照片，然后修复它们，所以，我认为这就是编辑模型的真正美妙之处，你可以让它围绕着你最关心的一件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I so I'm not sure I am in the the very top, but but I'll tell you what, um I mean it's it's like we were saying earlier, the personalization aspect is the the thing that totally drives it home for me. I have I have two young kids and like the best things that I do with the model are the things I do with my kids and like we can make, you know, make their their stuffed animals come to life in these types of applications and it's just so personal and gratifying to see. Um, we also a lot of people um taking old pictures of their family for example and like um showing what restoring them and and like so I think that that's that's the the real beauty of the edit models is that you can you can make it about the one thing that matters most to you.</p>
</details>

所以我用它来做我的孩子的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's what I use it for is is my kids basically.</p>
</details>

非常好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Very nice.</p>
</details>

是的。你基本上是在制作你以前可能从未制作过的内容，它就像是供一个人消费的，对吧？或者一个家庭，你正在讲述你以前从未讲述过的故事。所以，有点类似，我制作了很多家庭节日贺卡和生日贺卡等等。现在，每当我制作幻灯片演示文稿时，我都会强迫自己生成一些与上下文相关的图像，然后努力让文本正确，以及所有这些事情。然后我们尝试突破界限，比如你能在像素空间中制作图表吗？你想这样做吗？这是另一个问题，对吧？因为你还希望条形图中的条形彼此之间位置准确。所以，我认为我们做了很多这样的事情。我实际上对我们团队中那些非常有创意的人印象深刻。我们有一个团队，他们与我们正在开发的模型紧密合作，然后他们就会突破界限。他们会用模型做一些疯狂的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. You're you're basically making content that you probably would have never made before and it's like for the consumption of one person, right? Or or or one family and you're kind of telling these stories that you would have never told before. So, kind of similar like I do a lot of family holiday cards and birthday cards and whatnot. Um, now anytime I make a slide deck, I like force myself to generate some images that are like contextually relevant and then try to get the text right um and all of those things. And then we try to push the boundaries around like can you make a chart in the pixel space? Do you want to that's another question, right? Because you also want the um you want the bars in the bar chart to be accurately positioned relative to one another. Um so I I think we do a lot of these things. I'm actually really impressed with the people we work with on the team who are just like very creative. Um we have a team um who just works really closely with us on models that we're developing and then they just like push the boundary. They'll do like crazy things with the models.</p>
</details>

你在这里看到的最令人惊讶的事情是什么？比如，我不知道我们的模型能做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's the most surprising thing you've seen here? Like I didn't know our model can do this. Yeah.</p>
</details>

这甚至只是像人们一直在做的纹理转移这样简单的事情。他们会拿……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is even just kind of like simple things where people have been doing like texture transfer. Like they will take</p>
</details>

是的。比如你拍一个人的肖像，然后你会想，如果它有这块木头的纹理，它会是什么样子？我当时想，我从没想过这会是一个用例，因为我的大脑不是那样工作的。但人们就像是，他们只是突破了你能用这些东西做什么的界限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. like you take a portrait of a person and then you're like what would it look like but if it had the texture of this piece of wood and I'm like I would have never I would have never thought of this being a use case because my brain just doesn't work that way. Um but people like kind of just push the boundaries of what you're what you can do with these things.</p>
</details>

这是一个有趣的世界知识例子，因为纹理在技术上是3D的，因为它有整个3D方面。它有光影，但这是一个2D转移。是的。所以这非常酷。我认为对我来说，最让我兴奋和印象深刻的是那些测试模型推理能力的用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That is an interesting uh example of a world knowledge because texture technically is 3D because there's like the whole 3D aspect of it. There's a light and shadow of it but this is a 2D transfer. Yeah. So that's very cool. I think for me the the thing I'm most excited by and maybe most impressed by is um are the the use cases that test the reasoning abilities of the models.</p>
</details>

所以，我们团队的一些人发现你可以给模型几何问题，然后让它解决这里的X，或者填补这个缺失的东西，或者以稍微不同的视角呈现这个东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um some people in our team figured out you could like give geometry problems to the model and like ask it to kind of you know solve for X here or fill in this missing thing or like present this this from a slightly different like a different view</p>
</details>

这些需要世界知识和最先进语言模型推理能力的东西，才真正让我惊叹不已，我没想到我们能做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and like these types of um of things that really require world knowledge and the reasoning ability of like a state-of-the-art language model are the things that make me really go wow that's amazing I didn't think we would be able to do that.</p>
</details>

它能生成黑板上的编译代码吗？如果我拍下我的，我不知道，笔记本电脑上的代码，图像模型会知道它是否能编译吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Can it uh generate compile code on a blackboard yet? And like if I take a picture of my I don't know like code on the laptop, would it know if it compiles on the image model?</p>
</details>

嗯，我见过一些例子，人们给它一张**HTML**（HyperText Markup Language: 超文本标记语言）代码的图片，然后让模型渲染网页，它能做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I've I've seen examples where people give it like an image of HTML code and have the model render the the web page and it can do that.</p>
</details>

这非常酷。我见过的最酷的例子，我来自学术界，所以我花了很多时间写论文和制作图表。我们的一位同事拍了一张他们论文中一个结果图表的照片，这个方法可以做很多不同的事情。这一个，你知道，论文中有很多不同类型的应用，然后要求模型，就像擦除了结果一样。所以你只有输入，然后要求模型以图片形式，以论文图表的形式解决所有这些问题，它能够做到。所以它实际上可以弄清楚这个图表要求解决什么问题，找到答案并将其放入图像中，然后同时为许多不同的应用程序做到这一点，这真的很了不起。非常酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's very cool. The coolest example I saw, so I came from academia, so I spent a lot of time writing papers and making figures. And um one of our colleagues uh took a picture of one of the result figures uh from one of their papers with a method that could do a bunch of different things. This this one, you know, a bunch of different um type of applications in the paper and asked the model to and like sort of erased the um the results. So you have like the inputs and asked the model to like solve all of these in picture form in a figure of a paper and it was able to do that. So it could actually like figure out what is the problem that this one figure is asking for, find the answer and put it in the image and then do that for a bunch of different applications at the same time which was really amazing. Very cool.</p>
</details>

这非常酷。有没有人基于这种能力开发出应用程序？这种能力会带来什么样的应用程序？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's very cool. Have um has anyone built application on top of that capability yet? Like what's the application that will come out of that?</p>
</details>

我认为有很多非常有趣的，我称之为零迁移能力，比如解决问题类型的事情，我们甚至还不知道它的边界。其中一些可能非常有用，比如，你知道，如果你想有一个方法可以解决某个问题X，我不知道，比如找到场景的法线或者表面方向之类的，你可能可以提示模型给你一个合理的估计。所以我认为有很多问题，比如理解问题和其他类型的事情，我们也许可以通过零样本或少样本提示来解决，而我们还不知道。是的，你提到了一件事，我发现非常有趣，那就是世界知识转移，但在很多世界模型或视频模型中，总有一些东西保持状态，就像你移开视线并不意味着椅子应该消失或改变颜色，因为那不是世界的状态。你如何看待这一点？你认为这在图像模型中有关联性吗？这是你们甚至考虑优化的问题吗？是的，我的意思是，如果你考虑一个具有长上下文的图像模型，你可以在该上下文中放入其他东西，比如文本、图像、音频、视频，那么我认为它肯定就像你在对上下文进行推理，以生成最终的输出图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that there are a lot of very interesting I would say zero transfer capability like problem solving type things that we don't even know the boundary of yet. And some of these are are probably quite useful like you know if you want to have a method that does solves some problem X I don't know like finds the the the the normals of the scene or something like the service orientations or something um you probably can prompt the model to give you kind of a reasonable estimate. Um so I think there's lots of problems like sort of understanding problems and other types of things that we could maybe solve with zero or few shop prompting that we don't know yet. Yeah, there's one thing you mentioned I found super interesting, which is the world knowledge transfer, but in a lot of world models like or video models, there always is something that keeps the state like just because you look away doesn't mean that the chair should disappear or change color because it's that's not what the state of the world is. How do you see that? Do you think there's relevance there in image model? Is that something you even consider optimizing for? Yeah, I mean if you think about an image model that has a a long context where you can put other things in that context like text, images, audio, video, then I think it's definitely like your reasoning over the context of things you have to produce a final output image</p>
</details>

或视频。嗯，所以，是的，我认为肯定有一些模型能力可以做这类事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">or video. Um so yeah, I think there's definitely um some model capability to do this type of stuff already.</p>
</details>

明白了。我还没有针对这个大型用例进行测试，但我会告诉你的。这是我最喜欢这些模型的一点，就是发现，我相信这对你们来说也很有趣，你们可能比我们有更多的线索知道它们能做什么。但有时你会在X或Reddit或其他地方看到一些疯狂的帖子，关于某人发现了一些令人难以置信的事情，你可能从未想到模型能够做到，然后其他人会在此基础上进行构建，说“哦，然后我尝试了下一代的东西”，突然你就发现了一个几乎全新的领域，就模型的能力而言。作为更深入参与构建这些模型和构建界面的人，看着这一切发生一定很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Got it. I haven't tested it out yet for this big use case, but I'll let you know. That's one of my favorite things about these models is just finding and I'm sure it's really fun for you guys and you guys probably have much more of a hint than we do about what they can do. But sometimes you'll just see some crazy X or Reddit or wherever post about some incredible thing that someone has figured out um how to do that you would never expect that the model might be able to do necessarily and then other people kind of build on that and say like oh and then I tried the next iteration of this thing and suddenly you have this like almost entirely new space that's been discovered in terms of what the what the models are capable of. It must be fun as people much more deeply involved in kind of building these models and building the interfaces to kind of watch that happen.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

### AI与艺术：控制、品味与人类意图

那么，如果你今天和视觉艺术家交谈，我个人很喜欢这些东西，我在网上发布关于它们的内容。你会得到一些非常怀疑的答案。人们会说，“哦，这太糟糕了。”对吧？你有没有想过是什么引发了这种反应，对吧？我坚信这最终真正赋能了艺术家，对吧？它为你提供了新的工具，对吧？就像，“嘿，我们现在有了，我不知道，米开朗基罗的水彩颜料。”让我们看看他会用它做出什么，对吧？然后惊人的作品就诞生了，这与此类似，但到底是什么引发了这种强烈的反对反应？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so if you talk to visual artists today, I I've, you know, I I personally love this stuff. I post about it on the internet. You can get some very skeptical answers. People like, "Oh, this is terrible." Right? Like what do you have any idea what triggers this this reaction, right? I'm convinced that this ultimately really empowers the artists, right? It gives you new tools, right? is like hey we now have I don't know watercolors for Michelangelo let's see what he does with it right and amazing things come out it's of the similar thing but but what triggers this this strong reaction against it</p>
</details>

所以我认为这与对输出的控制量有关。你知道，一开始当我们有这些文本图像模型时，它们非常像一次性生成，你输入一些文本，你得到一个输出，人们会说“哦，这是艺术，这是我制作的东西”，我认为这可能让来自创意社区的人有点不舒服，因为，你知道，大部分决策都是由模型根据用于训练的数据做出的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I think it's something something to do with the amount of control over the output so you know in the beginning when we had these kinds of text image models they would be very much like a oneshot you put in some text you get an output and people would be like oh this is art this is this thing I made and I think that maybe rubs people a little bit the wrong way who are come from the creative community because um you know that it's it's most of the decisions that were made were made by the model by the data that was used to train</p>
</details>

你不能再身体上表达自己了，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">express yourself anymore physically right</p>
</details>

是的，没错，不是。所以作为一个有创意的人，你希望能够表达自己。所以我认为，当我们让模型更具可控性时，很多关于“哦，那只是电脑在做一切”的担忧可能会消失。另一件事是，我认为有一段时间我们都对这些模型能创造的图像感到非常惊讶，以至于我们很高兴看到“哦，这些东西是从这些模型中出来的”，但我认为人类很快就会对这类事情感到厌倦。所以，曾经有一股热潮，现在如果你看到一张你明知道只是“哦，那只是一个单一提示，那个人没怎么想过”的图像，你就能分辨出那是一张AI生成的图像，没什么意思。所以我认为仍然存在一个界限，那就是你现在需要能够用AI工具创造有趣的东西，这很难，但这将永远是一个要求。我们需要有人能够做到这一点。我认为……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah exactly it's not yeah so as a creative person you want to be able to express yourself so I think as we make the models more controllable then a lot of these concerns of like oh that's just that the computer is doing everything kind of may may go away um and the other thing is I think that that there was a period of time where we were all so amazed by the images these models could create that like we were we were pretty like uh happy to see just like oh this stuff comes out of these models but I think humans get really bored fast of this type of thing. So like there was a big rush and now if you see a if you see an image that you know was just like oh that's just like a single prompt person didn't think about it much you can kind of tell like that's an AI generated image not that interesting. So I think like there's still this boundary of like now you need to be able to make interesting things with the AI tools um which is hard but it this will yeah this will always be you know a requirement. We need someone to be able to do this. And I think</p>
</details>

我们仍然需要艺术家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we still need artists.</p>
</details>

我们仍然需要艺术家。我认为艺术家也能够识别出人们何时真正投入了大量的控制和意图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We still need artists. And I think artists will be able to also recognize when when people have actually like put a lot of control and intent</p>
</details>

而且仍然不是艺术家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and still not be an artist.</p>
</details>

也许可以，但它确实有很多技艺和品味，对吧，你有时需要几十年的积累，对吧？我认为这些模型并没有真正的品味，对吧？所以我认为你提到的很多反应可能也来源于此。所以我们确实与我们合作的所有模态的许多艺术家合作。嗯，比如图像、视频、音乐，因为我们非常关心与他们一步步构建技术，并努力弄清楚他们如何真正帮助我们突破可能的界限。很多人都非常兴奋，但他们确实带来了大量的知识和专业技能，以及30年的设计知识。我们刚刚与**Ross Lovegrove**（一位著名的工业设计师）合作，在他的草图上微调了一个模型，这样他就可以从中创造出新的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe get but but it it is there's a lot of craft and there's a lot of taste, right, that you accumulate sometimes over decades, right? And I don't think these models really have taste, right? And so I think a lot of like a lot of the reactions that you mentioned maybe also come from that. And so we do work with a lot of artists across all the modalities that we work with. Um so image, video, um music because we really care about like building the technology step by step with them and trying to figure out they really help us kind of like push the boundary of what's possible. A lot of people are really excited, but they they really do bring a lot of their knowledge and expertise and kind of like 30 years of design knowledge. We just work with um Ross Loveg Grove um on fine-tuning a model on his sketches so that he can then create something new</p>
</details>

然后我们设计了一把实际的实体椅子，我们有一个原型。所以有很多人想把他们积累的专业知识和他们用来描述作品的丰富语言带入，并与模型进行对话，这样他们就可以把自己的作品推向前沿。而且，你知道，这不会在一个提示和两分钟内发生。它确实需要大量的品味、人类创造力和技艺，才能构建出最终成为艺术的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">out of that and then we design an actual physical chair that we like have a prototype of um and so there there's a lot of people who want to kind of bring the expertise that they've built and kind of like the rich language that they use to describe their work and and have that dialogue with the model so that they can push their work kind of to the frontier. And it is, you know, it doesn't happen in like one prompt and two minutes. Um, it it does require a lot of that kind of taste and human creation and and craft that goes into building something that actually then, you know, becomes art.</p>
</details>

归根结底，它仍然是一个工具，需要背后的人来表达情感、情绪和故事以及一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the end, it's still a tool that requires the human behind it to to express the feelings and the emotions and the story and everything.</p>
</details>

是的，绝对如此。绝对如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, absolutely. Absolutely.</p>
</details>

当你看到它时，那可能就是引起你共鸣的原因，对吧？嗯，当你得知背后有一个人类，他花了30年时间思考一件事，然后将其倾注到一件艺术品中时，你会有不同的反应。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's what resonates with you when you probably look at it, right? Um, you you will have a different reaction when you know that there's a human behind it who has spent 30 years thinking about something and then pour that into a piece of art.</p>
</details>

我认为还有一点是，大多数消费创意内容的人，甚至那些非常关心它的人，他们并不知道自己接下来会喜欢什么。你需要一个有远见的人，能够做出有趣而不同的东西，对吧？然后你把它展示给人们，他们会说“哦，哇，太棒了。”但他们自己不一定会想到这些，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think there's also a bit of this um phenomenon that like most people who consume creative content and maybe even ones that are that care a lot about it like they they don't know what they're going to like next. You need someone who has a vision and can do something that's interesting and different, right? And then you show it to people like, "Oh, wow. That's amazing." But like they wouldn't necessarily like think of that on their own, right?</p>
</details>

对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right?</p>
</details>

所以当我们优化这些模型时，我们可以做的一件事是，我们可以优化所有人的平均偏好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So when we're, you know, when we're optimizing these models, like one thing we could do is we could optimize for like the the average preference of everybody.</p>
</details>

但我认为你不会通过这样做得到有趣的东西。你最终会得到一些每个人都喜欢的东西，但你不会得到那些让人们惊叹“哦，哇，太棒了，我将改变我对艺术的整个看法，因为我看到了那个”的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I don't think you end up with interesting things by doing that. You end up with something that everyone kind of likes, but you don't end up with things that people are like, "Oh, wow. That's amazing. like I'm going to change my my my whole like perspective of art because I saw that</p>
</details>

有模型的先锋版。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">there's the avantguard edition of the model</p>
</details>

如果我用这个词，有，我不知道，光谱的另一端是什么，营销版之类的，它非常可预测，而且……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if I use it with the term there's the I don't know what's what's the other end of the spectrum the marketing edition or so where it's very predictable and</p>
</details>

非常直接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">very straightforward.</p>
</details>

### 未来的技术挑战与应用

是的。既然时间差不多了，最后几个问题。第一个是，模型具备但你希望人们更多地问你的一个功能是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, since we're coming up on time, uh, last couple question. One is, what's one feature that you know the model is capable of that you wish people ask you more?</p>
</details>

内部生成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Interle.</p>
</details>

是的，我认为我们一直很惊讶没有人发布任何关于内部生成的内容，我们称之为模型为特定提示生成多张图像的能力。所以，你可以要求，比如，我想要一个故事，比如一个睡前故事，或者类似的东西，生成一系列图像中的相同角色。我认为，嗯，是的，人们还没有真正发现它有用，或者还没有发现它。我不知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, in I think we've always been amazed that nobody ever posts anything about in solely generation is what we call the model's ability to generate more than one image for a specific prompt. So, you can ask for like I want a story like a bedtime story or something like generate the same character over these series of images. And I think that um yeah, people haven't really found it useful yet or haven't discovered it. I don't know.</p>
</details>

哦，有趣。嗯，如果你正在听播客，去试试这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, interesting. Well, if you're listening to the podcast, go try this out.</p>
</details>

试试看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Try</p>
</details>

是的。你最期待在未来几个月、几年内解决的最令人兴奋的技术挑战是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And what's the most um exciting technical challenge that you look forward to tackling in the next, I don't know, months, years.</p>
</details>

所以，我认为在质量方面，我们还有很大的提升空间。我的意思是，人们看到这些图像会说：“哦，这几乎完美了，我们肯定已经完成了。”有一段时间，我们处于这种“挑樱桃”阶段，我们会，你知道，每个人都会挑选他们最好的图像。所以你看到那些图像，它们很棒。但实际上，现在更重要的是最差的图像。我们正处于“挑柠檬”阶段，因为每个模型都可以挑选出看起来完美的图像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think that there's really a high ceiling in terms of quality for where we're going. Like, I think you people look at these images and say, "Oh, it's almost perfect. we must be done. And for a while, we were in this like cherrypick phase where we would, you know, everyone would pick their best images. So, you look at those and they're great. But actually, what's more important now is the worst image. We're in a lemon picking stage because every model can cherrypick images that look perfect.</p>
</details>

所以，现在我认为真正的问题是，这个模型有多强的表达能力，以及在你想做的事情中，你能得到的最差的图像是什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, like now I think the real question is like how expressable is this model and what's the worst image you would get given what you're trying to do.</p>
</details>

所以，我认为通过提高最差图像的质量，我们真正地拓宽了我们可以做的用例数量。比如，有各种各样的生产力用例，你知道，除了我们知道模型可以做的这些即时创意任务之外，我认为这是一个我们正在前进的方向，如果这些模型能够合理地做更多的事情，那么用例将会大得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I think by raising the quality of the worst image, we really open up the amount of use cases for things we can do. like there's all kinds of productivity use cases like um you know beyond this kind of like immediate creative tasks that we know the model can do and I think that's a direction we're headed we're headed to where if these models can do more things reasonably then they're just the the use cases will be far greater</p>
</details>

所以，那基本上就是打字机上的猴子的道德等价物，任何模型只要尝试足够多次，最终都会创造出惊人的冒险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so that's the that's the moral equivalent of the monkeys on typewriters basically any model given enough tries will eventually make an amazing adventure</p>
</details>

但反过来就很难了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the the other way around it's hard</p>
</details>

是的，反过来就很难了。一只猴子写一本书会非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah the other round is hard one monkey writing a book would be very hard</p>
</details>

那只猴子会很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it would be a good monkey for that one</p>
</details>

当我们达到下限时，你认为会出现哪些应用程序？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">what are the applications you think that would come out when we reach the lower bound?</p>
</details>

所以，我最感兴趣的一个，我们之前提到过，是教育事实性。我有，你知道，我不知道我每个月想用这些模型进行创意目的多少次，但我有更多用于信息检索、事实性、学习、教育类用例。所以，我认为一旦这开始奏效，那么它就会开启所有这些新领域。太棒了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the one I'm most interested in, we mentioned this before, is education factuality. I have um you know, I I have every I don't know how many times I want to use these models for creative purposes a month, but like I have way more use cases for information seeking, factuality, kind of like learning, education type use cases. So, I think like once that starts working, then it'll be opening up all these new areas. Amazing.</p>
</details>

我认为还有一点是，更多地利用模型的上下文窗口。所以你可以将大量的**内容**（Content: 指文本、图像、音频、视频等各种形式的信息）输入到这些大型语言模型中。一些公司，你之前提到了一些，他们会有像150页的品牌指南，说明你可以做什么和不能做什么，对吧？而且它们非常精确，对吧？比如颜色、字体，以及，嗯，比如乐高积木的大小。所以能够真正地吸收这些信息，并在生成时严格遵循，这是一种全新的控制水平，我们今天还没有，对吧？嗯，为了确保你真正地严格遵循。我认为这将与，你知道，非常成熟的品牌建立很多信任。我们有一个第二创意合规审查模型，它会再次检查我能做的所有事情，而模型应该自己完成，对吧？它应该有这个循环，就像“好吧，我生成了这个，但第52页说我不应该有”，然后我会回去再试一次，然后两个小时后它会带着那个尊重回来找你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's also something about I think taking more advantage of the models context window. Um so you can input a really large amount of content right into these LLMs. And um some companies um you mentioned a few before um they will have like 150 page brand guidelines on like what you can and cannot do, right? And they're like very precise, right? Like colors, fonts, and right um and like the the the size of like a Lego brick maybe. Um and so being able to actually like take that in and follow that to a tea when you're doing generation that's like a whole new level of control um that we just can't we don't have today right um to to make sure that you're actually kind of like following that to a tea. I think that will build a lot of trust with you know very established brands. where we have a second creative compliance review model that then double checks everything that I could do against the the model should do it on its own, right? Like like it should kind of have this yes it should have this loop as like okay I generate this but then page 52 says that I shouldn't have right and I'm going to go back and try again and then two hours later it will come back to you with that respect.</p>
</details>

是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

我们看到了文本模型中这种推理时间扩展如何能带来巨大帮助，对吧？能够批判自己的作品。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we saw with the text models how this inference time scaling how much it can help right being able to to critique your own work. Yep.</p>
</details>

所以这感觉非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this this feels really important.</p>
</details>

哇，图像模型有一个令人难以置信的激动人心的未来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Boy, an incredibly amazingly exciting future for for image models.</p>
</details>

是的。祝贺你们所有的出色工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes. And congrats on all the amazing work.</p>
</details>

谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you.</p>
</details>

谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you.</p>
</details>

感谢邀请我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks for having us.</p>
</details>

非常感谢你们来参加播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, thank you so much for coming on the pod.</p>
</details>