---
author: How I AI
date: '2026-02-25'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=96Vl8s3EQhk
speaker: How I AI
tags:
  - agent-orchestration
  - prompt-engineering
  - homeschooling
  - personal-finance
  - ai-development
  - physical-world-interaction
title: 利用5个OpenClaw智能体管理家庭、财务和代码 | Jesse Genet访谈
summary: Jesse Genet分享了她如何利用5个**OpenClaw**智能体（运行在**Mac mini**上）来管理家庭、财务和编程。她详细介绍了如何为每个智能体分配特定角色和数据访问权限，例如**Sylvie**负责家庭教育、**Finn West**负责财务、**Cole**负责编程。她还展示了智能体如何通过处理图片来自动化课程规划、生成学习材料，甚至开发定制的儿童内容播放应用。访谈强调了AI智能体在提高效率、解放父母时间方面的巨大潜力，并探讨了与AI智能体协作的独特管理哲学。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Optimizely
  - Google
  - YouTube
products_models:
  - OpenClaw
  - Obsidian
  - Mac Mini
  - QuickBooks
  - Telegram
  - Slack
  - iMessage
  - Signal
  - Google TV streamer
  - Gemini
  - Rayban Meta AI glasses
  - BFSU
  - Mera
media_books: []
status: evergreen
---
### 引入OpenClaw智能体

**Claire Vo**: 是什么让你接触到我们现在熟知和喜爱的“龙虾”智能体（OpenClaw）的呢？

<details>
<summary>Original English</summary>

**Claire Vo**: What brought you to the lobster agent we know and love?

</details>

**Jesse Genet**: 因为我关注了那些**Obsidian**的网红。其中一个人在某天我随意浏览评论时，提到“游戏规则改变者是在你的**Obsidian**上分层，并真正拥有一个能为你使用文件的智能体。”我当时就想，哇，那是什么？一开始我以为我可能没有技术能力把它安装到我的电脑上，我不知道该怎么做。但后来我投入进去了，这真的很有趣，我想弄明白，我想用这种方式来管理我的家庭学校。所以，也许这能帮上忙。

<details>
<summary>Original English</summary>

**Jesse Genet**: Because I follow these **Obsidian** influencers. One of them buried in a comment on a day where I was just scrolling was like game changer is layering onto your **Obsidian** and actually having an agent who like uses your files for you. And I was like whoa what is that? At first I thought like I don't know if I'm technical to put this on my computer. Like I don't know what I'm doing. But then I jumped in. This is really interesting. I want to figure this out and I want to run my home school this way. So maybe this can help.

</details>

**Claire Vo**: 你想把所有这些东西组织起来，然后你觉得，如果AI能帮我做这些，那我就可以真正完成我想做的事情了。

<details>
<summary>Original English</summary>

**Claire Vo**: You're trying to get all this stuff organized and you thought, man, if AI could do this for me, then I could actually get done what I wanted.

</details>

**Jesse Genet**: **Obsidian**有成为你第二大脑的绝佳机会，对吧？但问题是，我总是在寻找我的第一大脑，因为我有四个小孩。我真的没有时间去开发这个第二大脑。人们只是不明白它为那些有抱负、真正想陪伴家人和孩子，同时又能完成各种酷炫事情的人带来了多大的解放。我在与时间的关系中也感受到了同样的革命。

<details>
<summary>Original English</summary>

**Jesse Genet**: **Obsidian** has this cool opportunity of being your second brain, right? But the problem is I'm always looking for my first brain because I have four little kids. I didn't really have time to develop this second brain. People just don't appreciate how much it unlocked for folks that do have this ambition to really be there for their family and kids and also get all sorts of cool stuff done. And I feel the same revolution in my relationship with time.

</details>

**Claire Vo**: 欢迎回到“我如何AI”。我是**Claire Vo**，产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具。今天我们邀请到了**Jesse Genet**，她有四个孩子，桌上放着五台**OpenClaw Mac mini**，帮助她管理从家庭学校到财务的一切。**Jesse**已经确立了现在有两个阶段：**OpenClaw**之前和**OpenClaw**之后，她将向我们展示**OpenClaw**之后的生活会是怎样。让我们开始吧。本期节目由**Optimizely**赞助。大多数营销团队不缺创意，但他们缺的是时间。而这正是**Optimizely Opel**通过AI智能体为您节省下来的，这些智能体能处理真实的营销工作流程，比如创建内容、检查合规性、生成实验变体、个性化用户体验、分析页面以优化GEO，甚至包括审批和报告等任务。它是您营销和数字团队的AI智能体编排平台，无缝集成到您已使用的工具中，处理枯燥繁琐的工作，并确保一切符合品牌规范，让营销人员有更多时间专注于他们的实际工作。立即注册**Optimizely**的免费企业级智能体AI研讨会，了解**Opel**能为您的团队自动化哪些工作。请访问**optimizely.com/howiAI**了解更多信息。现场参与者将获得一副免费的**Rayban Meta AI glasses**。**Jesse**，我很高兴你在这里，因为你是我时间线上不知道自己需要的**OpenClaw**网红。你知道，之前有很多加密货币兄弟的能量，所以我很高兴我们能请到两位**OpenClaw**女士来到播客。我认为你的用例非常有趣，我喜欢你所发现的一切。那么，是什么让你接触到我们现在熟知和喜爱的“龙虾”智能体（**OpenClaw**）的呢？你为什么开始使用它？

<details>
<summary>Original English</summary>

**Claire Vo**: Welcome back to How I AI. I'm **Claire Vo**, product leader and AI obsessive here on a mission to help you build better with these new tools. Today we have **Jesse Jana** who has four kids and five **OpenClaw Mac minis** sitting on her desk, helping her run everything from her homeschool to her finances. **Jesse** has established there are two phases now, before claw and afterclaw, and she is going to show us the future of what an afterclaw life looks like. Let's get to it. This episode is brought to you by **Optimizely**. Most marketing teams aren't short on ideas, but what they are short on is time. And that's exactly what **Optimizely Opel** gives you back with AI agents that handle real marketing workflows. you know, like creating content and checking compliance, generating experiment variations, personalizing user experiences, analyzing pages for GEO, even tasks like approvals and reporting. It's your AI agent orchestration platform for marketing and digital teams, plugging seamlessly into the tools you already use, handling the boring, busy work, and keeping everything on brand that leaves marketers with more time to do your actual job. See what **Opel** can automate for your team by signing up for a free enterprise agentic AI workshop with **Optimizely**. Find out more at **optimizely.com/howiAI**. Attend live and you'll get a free pair of **Rayban Meta AI glasses**. **Jesse**, I am excited that you're here because you are the **OpenClaw** influencer I didn't know that I needed in my timeline. I you know it's been very crypto bro a ad a adjacent energy in the uh in a clasping and so I like that we got the two ladies of **OpenClaw** basically here on the podcast and I think your use cases are so interesting and I love what you figured out. So tell me what brought you to the lobster agent we know and love. Why did you get started with this?

</details>

**Jesse Genet**: 嗯，你说得对。这不是因为我真的想细分我的所有营销工作，那是我在信息流中反复看到的，来自一群科技男。我实际上已经使用**Obsidian**这个产品一段时间了。所以，这就是我了解它的方式，因为我是在一个多月前了解它的，这在**OpenClaw**领域已经算是“远古历史”了，对吧？但原因是我关注了一些深入使用**Obsidian**这个“第二大脑”产品的人，它是一个**Markdown**文件集合，我们可以深入探讨。但因为我关注了这些**Obsidian**网红，其中一个人在某天我随意浏览评论时，提到“游戏规则改变者是把**Quadbot**（当时它叫这个名字）分层到你的**Obsidian**上，并真正拥有一个能为你使用文件的智能体。”我当时就想，哇，那是什么？因为我一直试图在**Obsidian**中组织我的家庭学校，但老实说，我觉得我没有时间正确地记录所有东西，而且我遇到了各种障碍，无法真正使用它，因为我作为妈妈根本没有时间。所以，那就是我的发现时刻，看到那个人这么说，我当时就想，那是什么意思？我去找了**Cloudbot**是什么，它现在叫**OpenClaw**。一开始我以为我可能没有技术能力把它安装到我的电脑上，我不知道该怎么做。但后来我投入进去了，我相信你也遇到了一堆麻烦事。我读了你的推文，提到了其中一些，我也有我自己的。但那就像是我的投入时刻，这真的很有趣，我想弄明白，我想用这种方式来管理我的家庭学校，所以也许这能帮上忙。

<details>
<summary>Original English</summary>

**Jesse Genet**: Well, you're you're right. It wasn't because I really wanted to segment all my marketing. Um, which is like what I see over and over in my feed from like a bunch of tech guys. Uh, I have been I've actually been using this product called **Obsidian** for a while. So, this is like my like how I even learned about it because I learned about it like over a month ago now, which is kind of like ancient history and like claw land, right? Um, but the reason is because I follow some people who are like deep users of this second brain product called **Obsidian**, which is like a collection of markdown files and we can get more into that. But because I follow these **Obsidian** influencers, one of them like buried in a comment on a day where I was just scrolling was like, "Game changer is layering **Quadbot**, which it was called at the time, onto your **Obsidian** and actually having an agent who like uses your files for you." And I was like, whoa, what is that? Because I've been trying to organize my homeschool in **Obsidian**, but honestly, I don't feel like I have the time to log properly all my stuff, and I'm like running into all these roadblocks for actually using it because I don't have any time because I'm a mom. So, so that was my discovery moment was seeing this person say that, and I was like, what does that mean? I went and looked up like what **Cloudbot** was, um, which is now called **OpenClaw**. And I at first I thought like I don't know if I'm technical to put this on my computer like I don't know what I'm doing. But then I jumped in and I'm sure you had a bunch of like snafoos. I read I was reading your tweets about some of them and I had my own but um but I that that was like my jumpin moment like this is really interesting. I want to figure this out and I want to run my home school this way so maybe this can help.

</details>

**Claire Vo**: 所以你部分地在**Obsidian**上管理你的家庭学校。

<details>
<summary>Original English</summary>

**Claire Vo**: So you were running home your home school partially on **Obsidian**.

</details>

**Jesse Genet**: 是的。你知道，我们实际上已经有几期关于**Obsidian**的节目了。**Theresa Torres**做了一期关于**Obsidian**和**Cloud Clo**的，讲述了她如何用它来管理自己的个人大脑。但你正在努力把所有这些东西组织起来，然后你觉得，如果AI能帮我做这些，那我就可以真正完成我想做的事情了。那么，你想向我们展示一下那个“大脑”是什么样子的，以及**OpenClaw**是如何在其之上分层的吗？

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah. And you know, we've actually had a couple episodes on **Obsidian**. **Theresa Torres** did one on **Obsidian** and **Cloud Clo**, how she's running her own um sort of like personal brain off of it, but you're trying to get all this stuff organized and you thought, man, if AI could do this for me, then I could actually get done what I wanted. So, do you want to show us what that brain looked like and then where kind of open law layered on top?

</details>

### 家庭教育管理与AI辅助课程规划

**Jesse Genet**: 好的。所以，**Obsidian**有成为你第二大脑的绝佳机会，对吧？但问题是，我总是在寻找我的第一大脑，因为我有四个小孩。所以我真的没有时间去开发这个第二大脑。我们现在就在我的**Obsidian**里了。我把我的“保险库”——**Obsidian**是基于两者构建的——我把我的“保险库”命名为“家庭学习”。我之所以这样命名，是因为我想追踪我孩子生活中几乎所有哪怕是模糊地与教育相关的事情，比如即使我们去旅行什么的。所以，我在这里追踪的不仅仅是课程，但我们可以谈到这一点。但是，我一直试图实现的课程结构，以及**OpenClaw**最终让我能够实现的，因为它实际上承担了繁重的工作，就是我尝试记录所有与孩子们一起做的小课程和不同的事情。但是，我没有时间在这里输入所有这些结构化数据。所以，我想知道我们做的日期，我想知道谁是老师，我的四个孩子中有哪些参与了那节课，教了什么，接下来可能会有什么，以及我们的笔记。所以，这是我的孩子们学习色轮、匹配颜色之类的。我想要的效果是能够拍下我所上课程的照片，然后基本上只需上传它们，让**OpenClaw**自动记录完整的课程内容。这不仅仅是因为我是一个痴迷的记录者，尽管这个指责可能很公平，但也是因为我想能够使用AI来规划课程。所以，如果AI知道我用数字积木做了这个很酷的模式匹配活动，那么它就可以建议——现在我只是在拍我孩子们的可爱照片，这就像一个大雁——它可以建议，也许我的大儿子**Quinn**已经掌握了模式积木，但也许两岁的**L**显然还没有完全掌握，它实际上可以追踪他们的进步，并帮助我在此基础上构建课程。所以，我们有所有这些日志。我们还有课程来源，比如，我喜欢**BFSU**（科学理解基本原理）这个特定的科学课程。所以我把它作为一个课程来源进行追踪。然后我的**OpenClaw**，再次强调，这对我来说曾经是非常手动的。我曾试图输入书中的章节和所有这些东西。但我现在所做的是拍下整本书的照片。也许那在我的照片里。是的，就像你可以，好的，是的。比如这里，我实际上，一旦我意识到**OpenClaw**的力量，我就开始拍下整本书的照片，然后把整本书交给我的**OpenClaw**，这样它们就可以帮助我构建更详细的课程。

<details>
<summary>Original English</summary>

**Jesse Genet**: Okay. So, **Obsidian** has this cool opportunity of being your second brain, right? But the problem is I'm always looking for my first brain, okay? Because I have four little kids. So I didn't really have time to develop this second brain. And so my so we're in my **Obsidian** now, okay? And I call my vault **Obsidian** is structured on both. I call my vault family learning. And the reason I actually titled it that was that we like I want to I want to track almost everything that's even vaguely educational about my kids life. Like even if we go on a trip or something. So, I track more than just like lessons in here, but we can we can get to that. But the the the course structure that I've been trying to get to that **OpenClaw** finally like allows me to get to because it's actually doing the heavy lifting is I try to log all the little lessons and different things that I do with the kids. And so, um, and but I don't have time to go in here and write all this structured data. So, I want to know the date we did it. I want to know who's the instructor, which children of mine, um, out of the four of them were like included in that lesson. what was taught, what might come like next, uh, notes that we have. And so, here's my kids like learning about the color wheel and like matching colors and stuff like that. And the vibe that I wanted was to be able to take photos of a lesson that I do and then basically just upload them and have the actual **OpenClaw** log the full lesson contents. And it's not just because I'm an obsessive record keeper, although maybe that accusation is fair, but it's also because I want to be able to use AI to plan curriculum. So, if the AI knows I did this like, you know, cool pattern matching thing with number blocks, then it can suggest, now I'm just taking cute picture of my kids. This is like a gregant. Um, Netkin suggests that maybe it seems like **Quinn** uh nailed the, you know, pattern blocks, who is my oldest, but maybe **L**, who is like two, clearly like isn't quite there, and it can actually track their progression over time and actually help me build curriculum off of that. So, we've got all these logs. We have uh curriculum curriculum sources also, like for instance, I love um the **BFSU** uh like this specific science curriculum. And so I tracked that as a curriculum source. And then my **OpenClaw**, again, this used to be so manual for me. I was like trying to type in chapters of the book and all this stuff. But what I did is actually take photos of the entire book. And maybe that's in my photos. Um yeah, like you can Okay. Yeah. Like here, I actually um once I realized the power of **OpenClaw**, I started taking photos of entire books like uh and actually giving the entire book to my **OpenClaw** so they could help me build more detailed curriculum. So,

</details>

**Claire Vo**: 好的，我们能暂停一下吗？因为我们回到照片。

<details>
<summary>Original English</summary>

**Claire Vo**: Okay, can we take a pause? Cuz let's go back to photos.

</details>

**Jesse Genet**: 每个家长都喜欢这个。在150节课内教你的孩子阅读。我有这本书。它已经教过两个孩子了。

<details>
<summary>Original English</summary>

**Jesse Genet**: Every parent loves this. Teach your kid to read in 150 lessons. I have this book. It has gone through two children already.

</details>

**Claire Vo**: 这本书的挑战之一。这会是非常小众的育儿内容。

<details>
<summary>Original English</summary>

**Claire Vo**: And part of the challenge of this book. This is going to be very niche parenting content.

</details>

**Jesse Genet**: 是的，实际上很难知道你是否教得好这本书。尽管他们有一个非常密集的开篇介绍，说明你应该如何教它。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yes, very actually hard to know if you're teaching this book. Well, even though they had this very dense upfront introduction about how you're supposed to teach it,

</details>

**Claire Vo**: 我总是对教得是否正确，发音是否正确没有信心。拍下所有这些并构建一个我能理解的教案，这是一个多么绝妙的主意。所以，我只是想暂停一下，告诉大家这是一个多么棒的工作流程：只需拿一本书或参考资料，拍下大量照片，甚至可以让你孩子拍。

<details>
<summary>Original English</summary>

**Claire Vo**: I always didn't feel confident about was I teaching it correctly, was I saying those those um phone names correctly. And it's such a brilliant idea to take a photo of all this and build even a lesson plan that just I could understand. Um, so this is I just want to pause and tell people this is such a great workflow to just take a book or reference material, take lots of photos of it, maybe have your kids take photos of it.

</details>

**Jesse Genet**: 是的。你知道，委托出去。这就是我们使用**OpenClaw**的现状，把所有事情都委托出去。但我有，好吧，我还有更多关于这本书的小众想法，我想做，我们可以谈谈我用**OpenClaw**做了什么，但有几件事我想做，我觉得我能做，而且我越来越接近了。其中之一是这本书有特殊的字母形式，可以帮助教你的孩子，比如“th”是连在一起的，用来教他们“duh”这个音。所以，我实际上正在考虑3D打印这本书中所有的字母形式，这样我就可以拼出字母和单词，以实物课程的形式给我的孩子，这些字母形式与书中的字母形式相匹配。我想做一些事情，把这个课程从这个单一环境中带出来。或者拿那些故事，我的孩子们喜欢书中的这些小故事。但是如果你注意到，故事有点埋藏在所有其他文本中，我只是觉得有时他们很难专注于“看我吃东西”这样的内容，他们会被页面上的其他东西分散注意力。所以，我当时想，如果我能用**OpenClaw**从书中提取那个故事，然后也许制作故事的打印件，比如一本小册子什么的。只是，只是让这本书活起来的方法。但再次强调，我有很多希望和梦想，但我也是一个有四个孩子的家庭学校妈妈，所以我真的需要**OpenClaw**来承担繁重的工作。基本上，我需要它来做，我实际上做不到。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah. You know, delegate that. This is what this is where we're at with **OpenClaw** is delegate everything. But but I have Okay, so I have even more niche ideas off of this one book that I want to do that I that I we can talk about what I've done with **OpenCloud**, but there's a couple things I want to do that I think I can do that I'm getting closer to. And one is this book has special letter forms for helping teach your kids like has like a th is connected for teaching them the sound duh for instance. And so I'm actually thinking of 3D printing all of the letter forms from this book so I can then actually like spell out letters that and words to give my kids like in a physical lesson that match the letter forms in the book. There's like things I want to do to bring this curriculum kind of like out of this one environment. Um, or take the stories, like my kids like these little stories in the book. Um, but if you notice the story is kind of like buried amongst all this other text and I just feel like sometimes they find it hard to focus on like this like see me eat and they're like distracted by everything else on the page. So, I was thinking what if I could extract that like story um from the book using **OpenClaw** and maybe make like printouts of the story like as a little booklet or something. just just ways to actually make this book kind of come alive. But again, I have all these hopes and dreams, but I'm also actually homeschooling mom of four, so I really need **OpenClaw** to do the heavy lifting basically. Like, I need it to be I can't actually do it.

</details>

**Claire Vo**: 好的。所以，我在这里打断了你，插入了小众的语音学妈妈话题，但你刚才说的是，你想把大量的参考资料也导入**Obsidian**。AI的一个好处是，你可以以一种非结构化的形式来做这件事。你只需拍照。但接下来你用这些照片做什么呢？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay. So, I uh interrupted you with niche uh phonics mom aside here, but what you were saying is you want to bring in a bunch of reference material as well into **Obsidian**. And one thing that's nice about AI in general is that you can just do that in a kind of unstructured form. You just take pictures. But then what are you doing with that?

</details>

**Jesse Genet**: 所以这就是我创建的布局。课程来源就像那本书——《在180节课内教你的孩子阅读》。那是一个来源，而且作为父母，我们有很多很棒的资源，对吧？所以我不需要一直重复造轮子。所以那是一个课程来源。然后是实际的课程，它就像我正在构思的课程进展和教案。所以这个，好的，比如我有一个**BFSU**（科学理解基本原理）的课程来源，然后这些是那本书的教案。好的，所以这些都是我根据书的每一章生成的教案。好的。所以，它会把该课程的实际目标、关键概念和词汇、我需要准备的材料、书中建议的活动都拉入教案中，然后我们再把它提升到另一个层次。所以，这对我很有帮助，因为我不需要坐下来阅读章节，我可以直奔主题，然后说：“好的，我明天就要教这个了。我们准备一下吧，我可以看到我需要拿出哪些材料等等。”然后我真正深入研究的，与**OpenClaw**高度相关的是，我实际上要求我的**OpenClaw**帮助我生成完全定制的材料。所以我会让它变得真实。我们昨天刚做了B-6，关于动物如何移动，骨骼和肌肉。上周我们做了关于动物如何生存的适应和生存。让我切换到**Slack**，你可以看到我与我的**OpenClaw**进行了一些互动。我当时说：“好的，我想要适合儿童的水彩插画，可以打印在8.5x11英寸的纸上，每个概念一张。”顺便说一下，这是概念。这是我的手指，指着书页上关于动物如何在野外独立生存的九个概念。我试图让它变得非常真实。这就是我如何低保真地进行操作。我只是拍下那本书的一小段照片，然后我问它，你使用**NOBan Pro**吗？我给了它，那是**Gemini**，一个**Google Gemini** AI产品。所以，我必须把那个特定图像生成模型的API密钥给我的**OpenClaw**。但后来它生成了这些文件。看看它们有多美。好的，我都要哭了，但我想那也是因为我刚生完孩子。但我当时想，看看这只猫头鹰多漂亮。

<details>
<summary>Original English</summary>

**Jesse Genet**: So this is the layout that I that I've kind of created. So curriculum source is something like that book like teach your kids to read in 180 lesson. That's a source and and I and there's so many brilliant sources available to us as parents, right? So I don't need to reinvent the wheel all the time. So that's a curriculum source. Then there's actually curriculum um which is like progressions of lessons I'm coming up with and lesson plans. So this okay so for instance I have that curriculum source of the um basic fundamentals of scientific understanding that acronym is **BFSU** and then these are the lesson plans from that book. Okay so these are all just these are lesson plans I generated off of each chapter of the book. Okay. So, um it gives me it pulls into a lesson plan the actual objectives of that lesson, the key concepts and vocabulary, the materials I need to do, activities are suggested in the book, and then let's take it to another level. So, so this helps me because instead of just sitting down and reading the chapter, I can kind of cut to the chase and like be like, "Okay, but I'm actually going to teach it tomorrow. Let's like get this ready and I actually can see the materials I need to pull out and all this stuff." And then what I'm really getting into that is very **OpenClaw** related is actually asking my **OpenClaw** to help me generate completely custom materials. So I'll make this real. We just did yesterday this B-6 how animals move skeleton and muscles. And last week we did this adaptations in survival about how animal like what it takes for animals to survive. Let me go over to **Slack** and you can see me interacting a little bit with my **OpenClaw**. I was like, "Okay, I want watercolor illustrations suitable for kids. It can print on 8 and 1 half by 11 of each of these concepts." And by the way, here's the concepts. Here's my finger like with a book page of like these nine concepts of what it takes for an animal to survive on its own in the wild. And it's kind of trying to make it real free. This is how lowfi I'm going. Like I just take a picture of a snippet of that book and then I ask it to you, do you use **NOBan Pro**? And I gave it um that's a **Gemini** a **Google Gemini** AI product. Um, and so I had to give the API key for that specific image generation model to my **OpenClaw**. But then it made these files. Look how gorgeous these are. Okay, I'm going to like tear up, but I think it's because I'm also postpartum. Um, but I'm like, look at how beautiful this owl is. Um,

</details>

**Jesse Genet**: 哦，天哪。但是，但是，我想解释一下，我的提示只是说：“制作水彩风格的插画，适合儿童，可以在8.5x11英寸的纸上打印，每个概念一张。”好的，我只是，我只是，我只是不知道，我只是想让大家思考一下，这有多么基础？这有多么基础？嗯，现在我想分享的另一个真实的事情是，在，嗯，这个**Sylvie**，好的，我正在和**Sylvie**说话。我启动了五个不同的**OpenClaw**，因为我太疯狂了。好的，我们稍后会详细讨论。但是，**Sylvie**是我的家庭学校导向的**OpenClaw**。我试图让她从她的“灵魂”——有一个“**soul.md file**”——我试图把她打造成世界上最杰出的老师。所以她总是非常有创意，非常活泼，而且她非常喜欢孩子们的学习，对吧？所以因为那是她的个性，我希望她就是那样。所以她会从她的“**soul.md file**”中添加一层，我想，关于如何让这些图像真正为孩子们脱颖而出。所以这是我的基本提示和她自己的注入的结合，比如：“好的，但我们真的需要让这些概念在孩子们面前突出。”你知道吗？我能问你一个问题吗？因为我想，你知道，一些听这期节目的人会是**OpenClaw**的忠实用户，他们已经设置好了，并且正在**Telegram**或一些非常隐秘的渠道上与他们的AI交流。

<details>
<summary>Original English</summary>

**Jesse Genet**: Oh my god. But but like okay I I just want to explain that my prompt was like make let me go back to it was just like make im watercolor style illustration suitable for kids that can print on 8 and 12 by 11 paper for each of these concepts. Okay like I just I just I just don't know I just want everyone to sit with this for a moment like how basic is that? Like how basic is that? Um, now the other real thing I want to share is that in the um this **Sylvie**, okay, so I'm talking to **Sylvie**. I have five different **OpenClaw**s spun up because I am insane. Okay, we'll cover that more. But um **Sylvie** is my homeschool oriented **OpenClaw**. I'm trying to like make **Sylvie** from her like the soul. There's like this **soul.md file**. I'm trying to make her into like the most magnificent teacher like the world has ever seen. So she's like always really creative and like really bubbly and has like really um like she's just really into kids like learning, right? So because that's like her personality. That's what I want her to be like. And so she's adding a layer like from her **sole MD file**, I think of like how to make these images like actually really stand out for children. So it's a combo of like my basic prompt to her and her own like injection of like, okay, but we really need to make these concepts pop for the children, you know? Can I ask a question for you? Because I think, you know, some people that are going to be listening to this episode are going to be um **OpenClaw** pled and have them set up and be working on **Telegram** or something super shady just to like talk to their AI. Yeah.

</details>

**Claire Vo**: 是的。然后其中一些人会是这个概念的新手，因为我认为你所谈论的对于家长、学生、老师，以及实际上任何做生意的人来说都非常容易理解，那就是如何以结构化的方式记录你的一天？如何将一块内容转化为另一块内容？如何创造出色的视觉效果？这些都适用于很多用例。

<details>
<summary>Original English</summary>

**Claire Vo**: And then some of them are going to be really new to this concept because I think what you're talking about is very accessible to parents, to students, to teachers, to actually anybody doing business is all these concepts of how can you log your day in a structured way? How can you take one piece of content and turn it into another piece of content? How can you create great visuals? Those are all applicable across a lot of use cases.

</details>

### 多智能体管理与协作

**Claire Vo**: 但你刚才说你有五个智能体。你有点轻描淡写地带过了，好像这很容易。你如何在**OpenClaw**中技术性地设置它们？

<details>
<summary>Original English</summary>

**Claire Vo**: But you just said you have five agents. You sort of like glossed over that as if that's easy. How do you technically set that up in **OpenClaw**?

</details>

**Jesse Genet**: 所以我想说，智能体协作是我仍在努力解决的最困难的事情之一。所以，直白地说，我将解释几个基本要素。首先，回到**Obsidian**，在这个，嗯，可能有点难看到的底部角落，我在“家庭学习”保险库中。但我划分每个我启动的智能体范围和角色的一种方式是，它们在我的生活中都有一个角色。比如我有一个“人”，我说“人”是指一个**OpenClaw**，因为有时我谈论它们就像它们真的是人一样，我实际上也混淆过别人。他们会问：“等等，这些人是员工吗？这些人是人吗？到底发生了什么？”所以**Sylvie**是那个**OpenClaw**，我专注于家庭学校内容、课程生成和记录。她只能访问这个“家庭学习”保险库。好的。然后我有一个智能体，**Finn West**。我不知道，我只是随机取这些名字。好的。他专注于会计，我把所有收据都发给他，我试图让他帮助我保持财务上的条理。他可以访问这个“家庭办公室”保险库。所以我有点像在分享一种配置智能体的方式。我有五个，因为我希望它们都有非常独立的个性，承担独立的责任，这让我觉得拥有多个智能体是值得的。好的。如果你只是想创建一个有点像执行助理（EA）的智能体，它在家庭学校方面帮一点忙，在其他方面也帮一点忙，那也没有错或不好，但我真的想深入研究，实际上，如果**Sylvie**，她的人生目标是教孩子们美好的知识，如果我把我的收据发给她，我会觉得有点无礼，我会觉得这低于**Sylvie**的身份，你知道，她需要专注于孩子们。所以，这就是我创建多个智能体的一部分原因。现在我正努力实现我的智能体能够协作，让我的生活更加自动化。比如，如果**Claire**，她更像我的执行助理，负责日程安排和时间管理、订购杂货之类的。如果**Claire**能有效地与**Sylvie**对话，帮助规划我一周的课程，并告诉**Claire**，比如：“哦，告诉**Sylvie**，她不能在那个时间做，因为她有医生预约。”但老实说，我还没有完全达到那个程度。我把所有智能体都移到了**Slack**，因为**Cole**正在做开发项目。总之，**Cole**是我的开发AI，但我把它们都放在**Slack**中，因为我以为**Slack**会更适合协作，因为它是一个人类协作工具。但坦白地说，我现在相信，在与五个智能体相处了一周多之后，**OpenClaw**没有一个原生通信渠道，你说的**Telegram**、**Slack**、**iMessage**、**Signal**，实际上都不太适合智能体之间的协作，因为所有这些工具都是为人类使用而设计的，智能体有点像从侧面“入侵”它们。比如，为了把我的**OpenClaw**添加到**Slack**，这是我每个**OpenClaw**设置中最困难的组件之一，就是创建一个自定义的**Slack**应用，把智能体作为一个机器人添加到我的**Slack**中。

<details>
<summary>Original English</summary>

**Jesse Genet**: So I would say agent collaboration is one of the hardest things that I'm still um hacking on. Um so just to be really blunt and and I will explain a couple foundational elements. So first coming over back to **Obsidian** in this in this um it's a maybe a little hard to see in this bottom corner. I'm in the family learning vault. But one way I partitioned the scope and role of each of the agents that I've spun up is that they have a role in my life. Like I have someone uh and by someone I mean an **OpenClaw** like because sometimes I talk about them like they're literally human and I have actually confused people. They're like wait are these employees are these people? What is it going on? So **Sylvie** is the the **OpenClaw** where I focus on homeschool content curriculum generation logging. She only has access to this family learning vault. Okay. I then have uh an agent uh **Finn West**. Um I don't know. I'm just taking these names at random. Okay. Um who is focused on accounting and like I send him all my receipts and I'm trying to have him help me stay organized financially. He has access to this family office vault. So I'm kind of sharing a version of like provisioning agents. I have five because I want them to all have very separate personas with separate responsibilities and that makes it worth it to me to have multiple agents. Okay. um if you just want to create kind of an EA agent who helps you a little bit with homeschool and a little bit with that with this and that that that's not wrong or bad either, but I really wanted to go deep and actually um make it would be kind of weird if **Sylvie** who's like my whole purpose in life is to teach kids beautiful information um was like if I sent her my receipts I would almost feel like I'm being rude like I'd be like this is this is beneath **Sylvie**, you know, like she needs to focus on the children. Um so so that's part of why I have created multiple agents. Now I am trying to work towards a path where my agents collaborate to like make my life even more autonomous. Like it'd be really cool if um **Claire**, who is my more like EAish like scheduling and um like thing like scheduling and my time management, ordering groceries and things like this. It'd be cool if **Claire** could like talk to **Sylvie** effectively and help plan out maybe my uh lessons for the week and like tell **Claire** like, "Oh, tell **Sylvie**, oh, she can't do that time because she has doctor appointment." But this is a little bit I I'm not quite there to be honest. Um I I moved all my agents to **Slack** because **Cole** is working on dev projects. Um anyway, so **Cole** is my dev uh AI, but I have them all in **Slack** because I thought **Slack** would be better for collaboration because it's like a human collaboration tool. But to be perfectly frank, I believe now after spending uh more than a week with five agents that there no one communication channel that is native to **OpenClaw**, meaning what you're talking about, **Telegram**, um **Slack**, **iMessage**, **Signal**, is actually very good for agent to agent collaboration because all of these tools have been made for humans to use and agents are kind of like hacking into them from the side. Um, like in order to even add my **OpenClaw** to **Slack**, this is one of the wor like the one of the hardest components of my **OpenClaw** setup for each agent was creating a custom **Slack** app to add the agent as a bot into my **Slack**.

</details>

**Claire Vo**: 所以，我只是想直言不讳地说，那真的很难，比创建**OpenClaw**本身还要难。

<details>
<summary>Original English</summary>

**Claire Vo**: So, I just want to be really blunt like that was really hard like that was harder than creating the **OpenClaw** itself.

</details>

**Jesse Genet**: 是的。

<details>
<summary>Original English</summary>

**Jesse Genet**: And so,

</details>

**Claire Vo**: 那么，要创建你自己的**OpenClaw**，你是让**OpenClaw**创建一个新智能体吗？你是启动一个新的安装程序吗？你是怎么做到的？

<details>
<summary>Original English</summary>

**Claire Vo**: to create the **OpenClaw** yourself, are you asking **OpenClaw** to create a new agent? Are you spinning up a new install or that? How do you do that?

</details>

**Jesse Genet**: 所以，基本上，**Paul**，这是我的团队。

<details>
<summary>Original English</summary>

**Jesse Genet**: So, basically, **Paul**, here's my here's my team.

</details>

**Claire Vo**: 我只是觉得，我只是觉得那个转变。我真的在我的桌上放着**Mac mini**盒子。我就是把我的笔记本电脑放在上面。这就是我的现状。好的。人们需要知道，这就像是“给**Jesse**家发求助”的情况。如果你有一段时间没听到我的消息，嗯，这有必要吗？不。甚至从财务上讲，我想说明的是，我承认我能够负担得起这些**Mac mini**，这通常来说是一大笔钱。

<details>
<summary>Original English</summary>

**Claire Vo**: I just thought that I thought the room like the turnaround. I have literally **Mac mini** boxes sitting on my desk. That's what I was sitting my laptop on. This is where I'm at. Okay. Like this. People need to know like people need like it's like a send help to **Jesse**'s house kind of situation. Like if you don't hear from me for a while, um is this necessary? No. And even financially, I want to like address like I recognize I'm able to afford these **Mac minis** already. That's like a lot of money just generally speaking. Um

</details>

**Jesse Genet**: 我根本没想到会这样。

<details>
<summary>Original English</summary>

**Jesse Genet**: I was not expecting this by the way.

</details>

**Jesse Genet**: 好的，你可以在一台**Mac mini**上运行不止一个**OpenClaw**。我甚至可以解释为什么我的桌上放了这么多。一个原因是我想完全划分它们的世界。

<details>
<summary>Original English</summary>

**Jesse Genet**: Okay, you can you can run more than one **OpenClaw** on a **Mac Mini**. I'll even explain why do I have so many sitting on my desktop. Uh one reason is I'm trying to partition their worlds completely.

</details>

**Claire Vo**: 是的。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah.

</details>

**Jesse Genet**: 嗯，所以举个例子，**Finn**，他负责财务方面的事情，这可能让你觉得我很疯狂，但我为我们家庭的个人财务运行了一个完整的**QuickBooks**实例，因为我喜欢那样，因为我是一个超级极客。所以，这意味着每笔开销都经过分类等等，但这也就意味着有很多敏感信息。嗯，我希望**Finn**能有，他不会获得我的银行账户访问权限来使用，但我会给他所有银行对账单的只读访问权限，以及各种其他东西。所以，很多信息，坦白说，我不希望这些信息和**Claire**（那个负责日程安排的**OpenClaw**）放在同一台**Mac mini**上。我不想让她不小心把银行对账单上的信息发给孩子的钢琴老师，就因为她正在和她发短信什么的。所以，这就是我采用独立机制的原因。现在，还有其他方法可以划分智能体。这有点像我的懒惰方式。坦白地说，还有其他方法可以划分它们，但我只是想过度谨慎，因为**OpenClaw**存在安全问题，我想确保我为每个智能体都有一个实际的物理环境来暂时居住。

<details>
<summary>Original English</summary>

**Jesse Genet**: Um, so for instance, **Finn**, who's going to handle financial stuff, again, this maybe just makes you seem so insane, but I run a I run a full **QuickBooks** instance for our family's personal finance because I love that because I'm such a super geek. So, so that means every expense is categorized and all this stuff, but that means there's a lot of sensitive information. Um, I want **Finn** to have like he's not going to get access to my bank accounts to like use, but I'm going to give him read only access to all bank statements, all sorts of stuff. So, like a lot of information. I frankly don't want that information sitting on the same **Mac Mini** as like **Claire** who's uh the **OpenClaw** is doing scheduling. I don't want her to accidentally like send like some information from a bank statement to like the kid's piano teacher like just because she's texting with her or something. So, that's why I have separate mechanism. Now, there are other ways to partition agents. This is kind of my lazy way. like just being perfectly frank, like there's other ways to partition them, but I'm just trying to be like overly cautious because there are security concerns with um with **OpenClaw** and I want to make sure that I like have this actual like physical environment for each one to live in for right now.

</details>

**Claire Vo**: 是的，我想为那些可能错过了这一点的人提一下，那就是不同**Mac mini**的物理分区很棒，然后每个实例都在一个文件系统中。所以，你确实需要非常仔细地考虑你将这些智能体放在哪个文件系统中。然后我喜欢你正在做的事情是，你通过数据和输入输出的访问权限来划分它们，这非常聪明，比如你说：“我会给你访问我所有银行账户或银行对账单的权限。”风险很高。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, I want to call this out for folks that that maybe missed that which is the physical partitioning of different uh **Mac minis** is great and then each instance is in a file system. So, you do have to think really carefully about what file system you're putting any of these agents in. And then what I like about what you're doing is you're partitioning them by access both to data and to input output, which is like that's very smart to say, I'll give you access to all my bank accounts or bank account statements. Highly risky,

</details>

**Jesse Genet**: 但你不能和任何人说话。所以它不会泄露出去。

<details>
<summary>Original English</summary>

**Jesse Genet**: but you can't talk to anybody. So, it's not going anywhere.

</details>

**Claire Vo**: 而且**Finn**没有任何通信渠道，除了他不能离开那个“泡泡”。是的。

<details>
<summary>Original English</summary>

**Claire Vo**: And **Finn** doesn't have any communication channel except He can't get out of that bubble. Yeah,

</details>

**Jesse Genet**: 但**Claire**可以访问**iMessage**，用于给人们发短信安排日程和各种事情，所以我不想让她拥有银行对账单。所以，我，这实际上是我和我的一个好朋友谈论过的事情，这可能是一个很多人在设置**OpenClaw**时忽略的关键点。很多人可能以前没有雇佣过员工。嗯，我不是想表现得，你知道，轻蔑什么的，但基本上，这和雇佣员工非常相似。所以，我确实认为，因为我作为一名企业家有雇佣员工的背景，我只是有那种心态，让我来描述一下，这样就不会模糊了。这种心态是：我刚认识这个人。好的。所以，无论是我在街上刚认识的一个人，我决定雇佣他，因为他面试表现出色，还是这个新的**OpenClaw**，这就像我生活中的一个新实体。那么，你通常会说：“嘿，新人。这是你访问我所有电子邮件的权限。这是这个。那是那个。”你是在他们按照你要求的方式使用信息的基础上逐步建立信任的。嗯，而且你通常不会要求他们冒充你。员工的目标通常不是冒充你。所以，所有的**OpenClaw**都没有完全的读写权限来访问我的电子邮件或我的东西。它们有自己的东西。一个**OpenClaw**有权只读我的电子邮件。它们不能以我的名义发送电子邮件，但我已经授权信任它们可以阅读并向我呈现信息。

<details>
<summary>Original English</summary>

**Jesse Genet**: but what **Claire** has access to **iMessage** for like texting people for scheduling and different stuff and so I don't want her to have a bank statements. So I I am and this is this is actually something that um I was talking to someone else, a good friend of mine and this is maybe a nub that I think is lost on a lot of folks about setting up an **OpenClaw**. Um many folks have not maybe hired an employee before. Um, and I'm not trying to be like, you know, uh, derisive or something, but basically like it's so similar to that. So, I do think that because I have a background, um, as an entrepreneur, I have hired employees, I just have that mindset on and and let me describe it so that's not vague. The mindset is I just met this person. Okay. So, whether it's a person I just met on the street who I decide to hire because they have like great interview or there's this new **OpenClaw**, this is like a new entity in my life. Well, do you normally just say like, "Hey, new person. Here's like access to all my email. Here's this. Here's that." Like you you step you step into trust based on them using information like the way you ask them to. Um and also you don't um ask them to p to impersonate you. Usually the goal of an employee is not to impersonate you. So none of the **OpenClaw**s have full readr access to my email or my stuff. They have their own stuff. One **OpenClaw** has access to reading my emails only read. They cannot send emails as me, but I have provisioned trust that they can read and like surface information to me.

</details>

**Claire Vo**: 完全是这样，因为人们问我，我早期有一个相当独特的设置，我当时说我绝不会直接访问我的电子邮件。但你收到了**Paulie**的电子邮件。**Paulie**有她自己的电子邮件地址。我之所以能这么快做到这一点，是因为我为我的智能体设置了它自己的电子邮件地址。例如，我将我的日历访问权限委托给了那个智能体。

<details>
<summary>Original English</summary>

**Claire Vo**: It totally does because people were asking me I had early on a pretty unique setup and I was like there's no way I'm giving direct access to my email. But you got an email from **Paulie**. **Paulie** has her own email address. And the reason why I knew how to do this really quickly is I set up um my agent with its own email address. I delegated access to my calendar for example.

</details>

**Jesse Genet**: 是的。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah.

</details>

**Claire Vo**: 我给了它自己的一个密码库，并在里面放了一些你可以使用的关键东西。人们会问：“你 Y是怎么知道怎么做这些的？”我当时说：“我雇过三个执行助理。我知道如何培训执行助理，你不会说‘这是我电子邮件的密码’。你不会那样做。”然后我喜欢这种对智能体逐步建立信任的想法。你知道，你，你大多数，你不会要求大多数员工冒充你。**Paulie**在我让她发送一封电子邮件时做的第一件事就是以我的名义发送。而且我，首先，她发送电子邮件的方式让我听起来真是疯了。我不得不跟进说：“抱歉，那是我的有知觉的龙虾。”但她已经进步了，你收到的电子邮件里她有一个小龙虾表情符号。所以如果你。

<details>
<summary>Original English</summary>

**Claire Vo**: To that agent. I gave it a its own one password vault and I put a couple key things in there that you can use. People like well how did you know how to do this? I was like I've had three EAs. I know how to onboard an EA and you don't say here's the password to my email address. That's just not how you do it. And then I like this idea of like progressive trust in your agents. You know, you you say most mo most mo most mo most you don't ask most employees to impersonate you. The first thing **Paulie** did when I asked her to send one email was send it as me. And I one I sounded truly insane the way she sended sent the email. And I had to like follow up and be like, "Sorry, that's my sentient lobster." Um but she's gotten better and you got the email where she's got like a little lobster emoji. So if you

</details>

**Jesse Genet**: 我知道那是什么意思。是的。是的。

<details>
<summary>Original English</summary>

**Jesse Genet**: And I know what that meant. Yeah. Yeah.

</details>

**Claire Vo**: 你知道那是什么意思。嗯，而且你在回复中非常礼貌地称呼她的名字。我，我，我，我认为这非常重要。

<details>
<summary>Original English</summary>

**Claire Vo**: You know what it means. Um, and you were very polite in addressing her by name in your reply. I I I think this is very important.

</details>

**Jesse Genet**: 是的。有趣的是，嗯，但我的**OpenClaw**管理哲学确实源于员工管理，因为实际上我很礼貌，因为我把它们当作员工来对待。所以，我，我，我想，你知道，我不想，我不想混淆人们。我不认为那就像那个盒子里有一个人，我会冒犯他们。我实际上不这么认为。但我确实认为，因为大型语言模型（**LLMs**）是在互联网上和人类内容中成长起来的，它们确实知道什么时候有人粗鲁，什么时候不粗鲁。所以，我希望它们把我视为一个专业、直接的人，还是不专业、不直接的人？我确实认为人与机器人之间正在建立一种关系。所以我并不认为如果我粗鲁，它就会从电脑里跳出来杀了我，或者发生什么疯狂的事情。我只是觉得，我为什么要粗鲁呢？唯一的区别是，我可以依靠**Sylvie**（帮助我进行家庭学校教育的智能体）从不情绪低落，她没有被男朋友甩的日子，没有，我不需要回避问题。所以，我更直接一些，而且我显然不必担心在晚上11点给她安排任务。我也不必觉得：“哦，我真是个混蛋老板。”所以这些都是好处，但我仍然从根本上把它当作一种员工与雇主的关系来对待，以确保我们有一个健康的系统。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah. What's funny is like um but that that my philosophy on how to manage an **OpenClaw** really does stem from manage management of employees because actually I am polite because I'm like I'm just going to treat them like an employee. So I I I think you know I I don't want I don't want to confuse people. I don't think that it's like there's a human in that box and I'm gonna offend them. I don't actually think that. But what I do think is that because **LLMs** have like grown up on the internet and with human content, they do un they do know when someone's being rude or not. And so like do I want them to know me as like someone who is professional direct or not? Like I do think there's a relationship being built between human and bot. And so I don't think like it's going to jump out of the computer and kill me if I'm rude or something crazy. I just think that why would I be rude? The the only difference is that I can rely on the fact that **Sylvie**, who helps me with homeschool, like that she's never having a bad day, that there's no day that her boyfriend dumped her, that there's no like that I don't have to skirt around the issue. So, I'm a little more direct and I obviously I don't have to worry about giving her a task at 11 p.m. I don't have to feel like, oh, I'm such a jerk boss. So these are all benefits, but I still fundamentally do treat it like an employee um employer relationship um in order to kind of make sure that we have um like a healthy system.

</details>

**Claire Vo**: 是的，没错。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, exactly.

</details>

### AI编程与定制应用

**Claire Vo**: 好的，所以你，我们只是要回到这个话题，我知道你不会把你的**Mac mini**拟人化，但我会给你寄一些像活动眼睛和胡子，还有一些小蝴蝶结，给你的所有**Mac mini**。好的，所以你有你的**Obsidian**大脑，你已经分化出智能体，你给它们命名了，你把它们放到了**Slack**里。对于那些想用**Slack**作为**OpenClaw**网关渠道的人来说，你实际上需要做一些像**Slack**开发者那样的应用设置。祝你好运。然后你正在做很多工作流程方面的事情，比如组织你的日志，组织你的课程，为这些课程创建创意内容。我觉得这超级酷。但**Finn**也在编程，对吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay, so you have we're just going to step back into it and I know you don't personify your **Mac minis**, but I am going to send you like googly eyes and mustaches and like a little bow for all of your all your **Mac minis** after we're done here. Okay, so you have um your **Obsidian** Brain, you have fractured off agents, you've named them, you've put them in **Slack** for people that want to use **Slack** as a gateway channel on **OpenClaw**, you actually have to do some like app setup as a **Slack** developer. Thoughts and prayers. Um and then you're doing lots of workflow stuff like organizing your logs, organizing your lessons, building creative for those lessons. I think this is super cool. But you're also **Finn**'s coding, right?

</details>

**Jesse Genet**: 是的。好的。所以，**Finn**是**Finn**是财务。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah. Okay. So, **Finn** is **Finn** is finance.

</details>

**Claire Vo**: 哦，**Finn**是财务。抱歉。

<details>
<summary>Original English</summary>

**Claire Vo**: Oh, **Finn** is finance. Sorry.

</details>

**Jesse Genet**: **Cole**是编程。我，我，我，现在我明白了。

<details>
<summary>Original English</summary>

**Jesse Genet**: **Cole** is **Cole** is coding. I I I now I get it.

</details>

**Jesse Genet**: 我只是随便编的，但我只是根据感觉来命名的。**Cole**是编程。嗯，所以现在我们可以回到演示环节了。**Cole**正在编程，这对我来说是一个巨大的突破。所以，作为一个以前经营过一家开发软件的初创公司的人，但在六个月前我从未打开过终端。我把我的公司卖给了一家科技公司，却从未打开过终端。所以，这让我几乎不好意思说出来，但我只是想让大家明白，我并不是秘密地超级技术宅，但在新的时代，我只需稍微多学一点，就能做很多事情。所以，有了这个，嗯，让我分享我的屏幕。我基本上新的大型多人在线游戏（**MMO**）是，如果我能同步它，也许我能构建它。也许吧。嗯，**Cole**正在帮助我实现这个新理念。这是一个叫做**Mera**的东西。所有这些命名都是随机的。好的。我只是为我的家人创建了这个。这不是一个真正的产品。我说“真正的”是指它还没有上市。但是，我决定为我的家人编写一些代码。这个需求可能来自于其他父母非常能理解的事情，那就是我有孩子。我不反对内容。我不反对他们看电视或有任何屏幕时间，但我真的希望质量很高。他们还小，很容易被骗。我看到他们在**YouTube**上看一个我们播放的视频，比如关于露营的，非常棒，然后下一个视频或下一个选项是AI生成的垃圾，配着AI封面图，我的孩子会觉得：“哦，天哪，这是一棵摩天大楼那么大的树。”我当时想：“好的，没有这样的树。”他们真的被骗了。总之，这让我很难过。所以我想做一些东西，所以实际上这是一个产品，它从**YouTube**内容中提取，我可以策划这些流媒体。所以你可以看到我和**Cole**一起想出的一些，然后我正在测试一些定制的，这就是你看到这个叫做“测试二”的东西的原因。但是有科学、工程、户外探险。现在关键是，我实际上没有创建任何内容的播放列表。**Cole**有一个提示，可以根据**YouTube**上的一个方向，制作一个无尽的视频流，一个接一个地播放。所以我的孩子们，这是我的家长控制区域。基本上，我的孩子们可以打开应用程序，应用程序在他们看来非常基础。它只是一个屏幕，他们能做的就是按下“开始”，然后播放一个视频，如果他们不喜欢那个视频，他们能做的就是跳到下一个视频。嗯，所以他们可以向前跳或向后跳，它会保留他们的历史记录。所以如果他们喜欢某个东西，想再看一遍，他们可以向后跳，他们可以暂停，仅此而已。好的，他们能做的就是向前、向后和暂停。这对我来说简直是天赐之物。我做的另一件事，远远超出了我的技术能力，但**Cole**帮助我完成了，那就是我希望它能在我的真实电视上播放。他说我可以买一个叫做**Google TV streamer**的东西，那是**Google**的一个设备，然后我们实际上能够把应用程序发送到**Google TV streamer**设备上，然后有一个小遥控器，所以实际上有一个独立的应用程序，当我打开电视时，我可以选择**Apple TV**，或者我可以选择**Mera**应用程序，然后点击进去。所以我的孩子们甚至无法退出应用程序。一旦他们在电视上播放，他们就有一个只能控制这个应用程序的遥控器。总之，我的思维被震惊了。但我认为最令人震惊的部分是，我只是不断地说：“好的，但如果我想在电视上播放呢？”然后**Cole**说：“这个应用程序不能在电视上播放。”我当时说：“**Cole**，再努力一点。”好的，那不是现在的答案。嗯，所以**Cole**的整个个性就像是那个“能做到”的开发者。我当时说：“不，这不是一个可以接受的答案。我们有真正的工作要做。**Cole**，我们要拯救这些孩子的灵魂。嗯，你必须把我从AI的泥沼中解救出来。”

<details>
<summary>Original English</summary>

**Jesse Genet**: I I'm just making this up, but I just went off of like vibes when I was naming **Cole** is coding. Um, so this is though now we can jump back into a bit of a demo. **Cole** is coding and this was a big unlock for me. So, as someone who um uh has previously I previously ran a a startup where we developed software, but I had never opened terminal as a human being until 6 months ago. I I sold I sold my company to a tech company without ever having opened terminal. So, this like I'm almost embarrassed to be saying this, but I just want everyone to understand that I'm like not actually secretly super technical, but that in this new era, I can like pop in, learn just a little bit more, and do so much. So with that, um, let me share my screen. I'm going to basically my new **MMO** is like if I can sync it, maybe I can build it. Maybe. Um, and **Cole** is helping me with that new thesis. This is something called **Mera**. All this naming is random. Okay. I I created this just for my family. This not a real product. And by real, I mean it's not out there. Like, but I I decided to code something up for my family. The need came from probably something that's extremely relatable to other parents, which is I have kids. I I don't I'm not against content. I'm not against them ever watching TV or ever having any screen time, but I really want the quality to be high. Like they are they're they're little. They're easily fooled. Like I feel bad on **YouTube** when they're watching a video that we put on that's like really really nice and great like camping or something and then the next video that comes up or the next options of video are like AI slop with like AI cover art and my kid thinks like oh my gosh it's a tree that's the size of um you know a skyscraper and I'm like okay there is no such tree like they're literally being fooled. It's it's like anyway it's it makes me sad. So I wanted to make something and so effectively this is a product where it pulls from **YouTube** content and I can curate these streams. So you can see like ones that **Cole** and I came up with together and then I'm doing tests of custom ones which why you see this thing called test two but science engineering outdoor adventures. Now here's what's key is I didn't actually create playlists of any content. **Cole** has a prompt for going with a direction on **YouTube** and making like an endless stream of videos that will play one after another. And so my kids, this is my parental controls area. Basically, my kids can open the app and the app looks so basic on their end. It's literally just a screen and they can just all they can do is press go and then it plays a video and then if they don't like that video, all they can do is advance to the next video. Um, and so they can like skip forward or go backwards and it maintains like their history. So they can actually go backwards if they love something and they want to see it again and they can pause and that's it. Okay, literally all they can do is go forward, backwards, and pause. This is a godsend for me. The other thing I did that was like way beyond my technical capabilities, but **Cole** helped me through it is I wanted this on my real TV and he said I could buy this thing called a **Google TV streamer**, which is a device from **Google** and then we actually were able to send the app to the **Google TV streamer** device and then there's a little remote and so there's actually a separate app like when I turn my TV on I can select like **Apple TV** or I can select the **Mera** app like literally and click into it. So, my kids can't even get out of the app. Like, once they're once they're playing out on TV, they have a remote that only controls this app. Anyway, my mind is blown. But I think the most mind-blowing component is that I was just able to keep saying like, "Okay, but what if I want it on my TV?" And then **Cole** was like, "This app can't be on a TV." And I was like, "Try harder, **Cole**." Okay, that's not an answer right now. Like, um, and so **Cole** is like his whole personality is like the developer that could. I'm like, "No, it's not an acceptable answer. Like, we are we've got real work to We got to save these kids souls, **Cole**. Um, and and you got to get me out of the AI sloth.

</details>

**Claire Vo**: 是的。所以，但是，你知道有趣的是，你的**OpenClaw**实际上可以，如果你真的，我只是半开玩笑。我确实以这种极端的方式和他说话，因为就像人类员工一样，我认为如果你赋予他们一点使命感，他们就会把这些东西保存到他们的“灵魂”，他们的**OpenClaw**“**soul.md file**”中。他真的觉得这很重要。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. And so, but I but you know what's interesting is your **OpenClaw** can actually if you really do I'm I'm only half joking. I really do talk to him in like these kind of extreme ways because just like a human employee, I think that if you imbue them with a bit of mission, they they save that stuff to their soul, their kind of **OpenClaw** bot, **soul.md file**. and he actually feels like it's important like

</details>

**Jesse Genet**: 我们必须为**Jesse**的孩子们开发这个应用程序，这很重要，你知道。

<details>
<summary>Original English</summary>

**Jesse Genet**: we we got to build this app for **Jesse**'s kids like this matters you know um

</details>

**Jesse Genet**: 嗯，当我们按下播放键，它真的播放了符合我建议主题的视频时，我的思维被震惊了。我当时想，我简直不敢相信，因为这大概花了四天时间，四天时间里我不断地询问**Cole**：“这个怎么样？那个怎么样？”直到我得到了一个我认为可用的应用程序。我的孩子们已经连续三四个晚上在晚上看这个应用程序了，因为我大约在十天前开始捣鼓它。

<details>
<summary>Original English</summary>

**Jesse Genet**: uh and we were able to get it across when when I pressed play and it actually played videos that like were part of the theme I had suggested my mind was blown I was like I can't believe that I because this was over the course of like maybe four days like four days of like pinging **Cole** and being like what about this what about that until I had what I consider a usable app my kids have watched this app in the evening for the like three or four nights so far because I like started tinkering with it about 10 days ago.

</details>

**Claire Vo**: 嗯，我还想提醒大家的是，你拥有的孩子数量比我多得多。我有三个，你有四个。你有四个，但每增加一个，就像他们说的那样，数量就会呈指数级增长。所以你是一个忙碌的女士，你可能不像我这样，我总是开着17个终端，除了编程什么都不做，我的孩子们都在学校。你家里有孩子在地板上玩数字积木，我觉得这太棒了。所以你可能是在晚上用手机，在这些零碎的时间里做这些事情，而**Cole**这个能干的开发者总是在那里帮助你进步。这如何改变了你对完成工作、做事方式或者甚至与电脑互动方式的看法？

<details>
<summary>Original English</summary>

**Claire Vo**: Well, what I want to call out for people too is you have I would say exponentially more children than I do. I have three and I have four. You have four, but every time you add one it just like goes up up and to the the right as they say. And so you are a busy lady and you're probably not like maybe you are like me, but you're not like me where I'm like just 17 terminals open at all time, nothing to do but like vibe code, my kids are off at school. like you've got children on the floor doing number blocks which I just think is so rad. And so you're doing this probably like from your phone at night like in these edges and **Cole** the developer who could is always there for to help you progress your way to it. How has that changed how you think about like getting work done or when you do things or how you interact with your computer even?

</details>

**Jesse Genet**: 这是一种根本性的转变，这是一种根本性的转变。我以前，如果你在两三个月前遇到我，也就是在**OpenClaw**之前，我会告诉你我有很多抱负，就像有**OpenClaw**之前和**OpenClaw**之后，现在只有这两个阶段了。哦，他们应该重置广告时钟。嗯，如果你那时遇到我，我会告诉你我有很多想法和步骤，但我会说一些有点伤感的话，比如我正在家里教育小孩子，我只会等待这些事情，你知道，你永远不会得到，我会说一些俗气的话，比如你永远不会得到他们小时候的时间，我会专注于此。但它仍然是真的，我真的想陪伴我的小孩子，我们正在进行家庭教育，这是一种疯狂的冒险，所以我每天没有太多时间打开笔记本电脑，但现在我会说我实际上可以做到这一切，就像，基本上我的冲劲又回来了，我感觉：“你知道吗，我每天可以花很多时间陪伴我的孩子，我可以在旁边做一些编程。”**Cole**可以花30分钟，然后花一小时完成一项任务，或者他可以花30分钟，我可以让他独自工作几个小时，然后在我自己的闲暇时间回来。这就是他不是一个真正的人的关键，因为这就像孩子们晚上9点都睡了之后，我再和**Cole**冲刺一个小时，我会说：“好的，我们能让这个上线吗？”或者其他什么，他会说：“哦，我需要另一个API密钥。”我们就是这样来回工作的。嗯，但我可以把它挤进那些零碎的时间里。所以现在，老实说，这就像一个疯狂的突破，因为我觉得我可以像我关心的一样有抱负，而且我可以成为小孩子的父母。我会觉得很投入。这太疯狂了。我的意思是，这感觉就像另一个宇宙。

<details>
<summary>Original English</summary>

**Jesse Genet**: It it's a fundamental shift like it's a it's a fundamental shift. I I used to like if you met me two or three months ago like basically just pre-claw right I would tell you that I had all the ambitions like there's pre-claw and there's postclaw there that's all we have now. Um oh they should just reset the ad clock. Um the the if you met me then I would tell you that I had all these ideas and steps but I would I would say some kind of like wisful thing about how like I am homeschooling small children. I'm just going to wait on this stuff like you know you never get the I would say some cheesy thing like you never get the time their small kids up like I'm going to focus on that but what what it's still true like I really do want to be present with my small kids and we are homeschooling which is like this crazy kind of adventure and so I don't have very much time to set my laptop at all per day but now I would say I actually can do it all like like basically my my oomph is back where I'm like you know what I can be present with my kids for like many hours per day and I can be like off to the side doing some coding. **Cole** can go take 30 minutes and do a task for an hour or I can he can take 30 minutes and I can leave him alone for a couple hours and just come back at my own leisure. And that's what's key about him not actually being a real person because it will be like after all the kids are in bed at 900 p.m. where like for one more hour I do like a sprint with **Cole** and I'm like okay but can we get this live or whatever and he's like he's like oh I need another API key and we're like doing this work back and forth. Um, but I can squeeze it into those small moments. So now, honestly, it's like a crazy unlock because I feel as though I could be as ambitious as I kind of care to be and I can be the parent of small children. I'd feel present. That's in that's insane. I mean, it it feels like a whole another universe.

</details>

**Claire Vo**: 嗯，那，我的意思是，你要把我弄哭了，因为这真的引起了我的共鸣。你知道，我大概产后七个半星期。

<details>
<summary>Original English</summary>

**Claire Vo**: Well, and that I mean, you're going to make me cry because this really resonates with me. You know, I am like what seven and a half weeks postpartum.

</details>

**Jesse Genet**: 我家里有一个小宝宝。我欣赏的一点是，语音转文本，语音输入。

<details>
<summary>Original English</summary>

**Jesse Genet**: I've got the little bitty baby at home. And one of the things that I have appreciated is one voice to to typing, voice to text.

</details>

**Claire Vo**: 一位女士可以一边哺乳一边编程。这简直是奇迹中的奇迹。

<details>
<summary>Original English</summary>

**Claire Vo**: A lady can breastfeed and code at the same time. And this is a miracle upon miracles.

</details>

**Jesse Genet**: 第二，我也非常重视陪伴我的孩子。我实际上也不想一直坐在笔记本电脑前。

<details>
<summary>Original English</summary>

**Jesse Genet**: And two, I really value being present with my kids, too. And I actually don't want to be sitting in front of a laptop all the time

</details>

**Claire Vo**: 也是。所以，我感觉到的是，我在我的**Paulie**冒险中还处于早期阶段。我刚让她能够做所有我想让她做的小事情，我感觉到它实际上会让我更多地离开电脑，这对于一个非常习惯于处理token的人来说，对我来说是相当健康的。嗯，并且完成这些事情。你说得对，我认为父母们有不同的时间表。我有一个五点到七点，然后是白天中间，然后是晚上的时间表，因为我们必须送孩子上学或接他们放学，或者他们有体育活动。我确实认为，你知道，人们只是不明白它为那些有抱负、真正想陪伴家人和孩子，同时又能完成各种酷炫事情的人带来了多大的解放。我在与时间的关系中也感受到了同样的革命。这，这，这太根本了，而且显然这会扩展开来，我们谈论的是育儿用例，但它适用于所有人，也就是说，如果，如果我能更根本地表达，那就是如果一个**OpenClaw**正在使用我的电脑，那么我就可以离开我的电脑，因为我只需，是的，就像你说的，录一个语音备忘录什么的，我就可以真正相信我的电脑上正在发生事情，这对于一个有小宝宝的父母来说尤其重要，因为你有时真的无法使用你的手。我确信，我认为那些没有生过孩子的人真的缺乏理解，那就是我真的无法使用我的手。我的手是问题所在。我无法使用它们，因为有宝宝，如果我放开她，她的头就会软塌塌的，她有一个软塌塌的头。好的，这就是我们的现状。嗯，所以，所以基本上这非常根本，但显然它对全人类都有益，如果他们仍然可以完成大型任务和大型项目，但可以从电脑前退一步，就像我们说的“接触草地”，那对每个人都有帮助。嗯，我想，好的，如果你愿意，我想谈谈**OpenClaw**的局限性。

<details>
<summary>Original English</summary>

**Claire Vo**: either. And so part of part of what I'm sensing, I'm a little early in my **Paulie** adventure. just got her to be able to do all the little things that I want her to do is I'm sensing it actually will allow me to walk away from my computer more, which is somebody who is very one with the tokens is quite healthy for me. Um, and and get those things done. And you're right, I think parents run alternate schedules. I run like a five to seven and then a middle of the day and then an evening schedule because we have to drop off the kids at school or pick them up or they have sports. And I do think, you know, people just don't appreciate how much it unlocked for folks that do have this ambition to really be there for their family and kids and also get all sorts of cool stuff done. And I feel the same like revolution in my um relationship with time. It's it's it's so fundamental and obviously this will scale like we're talking about the parenting use case but it applies to all humans which is like if like the more fundamental way I could put it is like if uh an **OpenClaw** is using my computer then I can walk away from my computer because I can just yeah to your point like make a voice note um or something and I can actually trust that there's things happening on my computer which which as a parent of a of um a little baby is especially important because you actually literally can't use your hand sometimes. I'm sure I think people who haven't had a baby like really have a lack like lack of understanding of is like I literally just can't use my hands. Like my hands are the problem. Like I can't use them because baby and if I let her go her head is like all floppy like not she has a floppy head. Okay, that's where we're at. Um and so so basically that is really fundamental but obviously it benefits all of humanity if they can kind of still get big tests done and big projects but take a step back from their computer and like touch grass as we say like that helps everyone. Um I wanted okay so if your game I want to touch on another like what are **OpenClaw**'s limitations

</details>

### 智能体与物理世界的互动

**Jesse Genet**: 其中之一是它没有身体。好的。所以，我只是想非常直白地说。

<details>
<summary>Original English</summary>

**Jesse Genet**: and one of them is that it doesn't have a body. Okay. So, like I'm going to say just I'm really going to speak like very

</details>

**Claire Vo**: 解决问题。它也没有手。它能做的是，它不需要手来操作电脑。你可以把它想象成它生活在电脑里。我不仅仅是在向你解释，我是在向所有听众解释。它生活在电脑里。所以它可以在电脑上做任何我们想让它做的事情。打开文件，你知道，编辑文件，发送东西，使用网站。好的。但你知道它不能做什么吗？它不能打扫我孩子的房间。它不能整理我的实物库存等等。所以我不能，我不能改变这一点。我想我们也许可以就人形机器人或机器人技术进行一次完整的对话。但在近期，我们最好的选择就是**OpenClaw**。那么，我们能做些什么来让它访问或帮助我们在物理世界中呢？我最挣扎的事情之一，这又回到了教育问题上，我谈论家庭学校，但对于那些听众中说“我没有在家教育我的孩子”的人来说，我作为一个疯狂的家庭学校妈妈所做的一切都适用于所有父母，因为我们一直在教导我们的孩子。所以，只需把它看作是教导孩子，而不是你必须是家庭学校教育者。好的。我确信我们所有父母都投资了很多东西来帮助我们的孩子，比如教育用品。我遇到的最大问题是所有这些东西最终都堆在橱柜里，我不知道什么时候该拿出来。嗯，所以，我所做的，因为我不能告诉我的**OpenClaw**：“嘿，去整理我的橱柜，你知道，做一个库存清单。”所以我不得不做一些稍微繁琐的任务，就是实际拍下这些照片。我拍下了所有我认为是教育用品的东西的照片，我有很多东西，我让**OpenClaw**制作了这个库存清单。现在我暂停一下，这样我就不会滚动太快了，但基本上，这里最疯狂的是，嗯，我只把照片发给了我的**OpenClaw**，你看到的所有文字，比如“修道院语言材料，类型：年龄范围3到5岁，描述：木制字母描摹板”，所有这些都是**Sylvie**写的，她只是根据照片上下文写的。我只想非常清楚地说明，没有语音备忘录，没有其他任何东西，我只告诉她：“我想制作我的学习用品清单，这是照片。”她写下了所有这些。所以，这不仅令人印象深刻，而且我还要求她将我拥有的库存与我系统中已有的教案关联起来。所以，她会，她会决定，比如：“哦，如果你正在做这个教案，也许你应该拿出这个材料，因为它相关。”所以现在我们至少对我来说进入了一个“银河系大脑”时刻，因为我知道如果我想教我的一个孩子一些东西，我可以告诉，我可以告诉它：“嘿，我对做这个教案感兴趣。”或者“嘿，我对做下一个能帮助**Quinn**更好地进行身体书写的课程感兴趣。”**Sylvie**不仅可以告诉我：“哦，这是一个课程想法。”她还可以说：“你还拥有那个描摹板。你能把它从橱柜里拿出来吗？”现在我觉得她真的在帮助我处理我的日常生活，如果这说得通的话。因为她实际上正在某种程度上进入我的实体房子，她知道我拥有什么。我喜欢这个。你给了我这么多想法，因为我刚在宝宝出生前雇了一个专业的整理师，只是为了让我的生活井然有序。你知道，我的丈夫时不时会问：“电池在哪里？”“你们女士们把电池藏在哪里了？”我当时想，我可以直接拍下我所有壁橱的照片。

<details>
<summary>Original English</summary>

**Claire Vo**: answer the problem. It also doesn't have hands. What it can do, it doesn't need hands to operate a computer. Like think of it as like it lives in a computer. And I'm not just explaining this to you. I'm just anyone who's listening. Like it lives in the computer. And so it can do anything that we want it to do on the computer. Open files, you know, edit files, send things, use websites. Okay. But do you know what it can't do? It can't like clean my kids room. It can't sort um my physical inventory and things like this. So I can't I can't like change that. I think that maybe you could have a whole conversation about you know humanoid or robotics or something. But for the near term the best we have is **OpenClaw**. And so what can we do to give it access or like help help us in the physical world? One of the things I struggle with the most and this comes back to schooling and I talk about homeschool but I also for anyone listening who's like I don't homeschool my kids. Anything that I do as like a crazy homeschool mom is applicable to all parents because we all are teaching our kids all the time. So, it's just think of it as like teaching kids and not just like you have to be a homeschooler. Okay. I I'm sure all of us parents have invested in a bunch of stuff to like help our kids like educational stuff. The biggest issue I have with all this stuff is like it just ends up sitting in cupboards and I don't know when to pull it out. Um, and so what I did because my because I can't tell my **OpenClaw**, hey, go and organize my cupboards and, you know, make an inventory. So I had to do the slightly tedious task of actually taking these photos. And I took these photos of all the like thought things I consider to be educational that I own and I have a bunch of stuff and I asked **OpenClaw** to make this inventory. Now I'll I'll pause so I'm not scrolling too fast like but basically here's what's crazy is um like all I sent my **OpenClaw** was the photo all of the text you see monastery language materials the type age range 3 to five description wooden alphabet tracing board that's all **Sylvie** writing that she just took the photo context only I just want to be very clear no voice notes nothing else all I told her is I want to make an inventory of my learning supplies is here's the photos and she wrote all of this. So, not only is that insanely impressive, but then I asked her to relate the inventory that I own to the lesson plans that I have already in the system. And so, she's like she's like deciding like, oh, if you're doing this lesson plan, maybe you should pull out this material because it's related. So now we're getting to a galaxy brain moment for me at least because I know if I if I want to teach like one of my children like something I can go to I can tell like hey I'm interested in doing this lesson plan or hey I'm interested in learn like doing the next lesson that would help **Quinn** write better physically. **Sylvie** can not only just like tell me oh here's a lesson idea. She can also say also you own that tracing board. Can you pull it out of the cupboard? Like now I feel like she's actually really helping me with like my day-to-day life if that makes sense. Because she's actually reaching kind of into my physical house and she knows what I own. I love this. And you just gave me so many ideas cuz I just hired a professional organiz organizer right before the baby. I came to just like get my life in order and you know every now and then my husband's like, "Where are the batteries?" Like where did you ladies stash the batteries? And I'm like, I could just go take pictures of all my closets.

</details>

**Jesse Genet**: 是的。是的。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yes. Yes.

</details>

**Claire Vo**: 然后我们知道我们可以问**Paulie**，或者现在我将分化出去并得到它们。你已经说服了我，你是一个**Mac mini**网红。你成功了。

<details>
<summary>Original English</summary>

**Claire Vo**: And then we know we can ask **Paulie** or now I'm gonna like fracture off and get them. You've convinced you've been a **Mac mini** influencer. You got me.

</details>

**Jesse Genet**: 嗯。

<details>
<summary>Original English</summary>

**Jesse Genet**: Um

</details>

**Claire Vo**: 然后就问：“我们的电池在哪里？我们的华夫饼机在哪里？这些东西在哪个柜子里？”这是一个多么绝妙的主意，拍下这些照片，然后整理、整理、再整理，然后把它应用到你生活中的常见问题上。而你的问题是：“我什么时候使用这些玩具？”我还要拍下我孩子玩具房的照片，每次他们说“我无聊”的时候。

<details>
<summary>Original English</summary>

**Claire Vo**: and just be like, where where are our batteries? Where do we waffle waffle maker? Like which cabinet is this stuff in? It's such a like genius idea to take these photos and just organize, organize, organize, and then apply it to the common problems in your life. And yours is when do I use these toys? I'm also going to take pictures of my kids toy room and every time they say I'm bored.

</details>

**Jesse Genet**: 是的。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah.

</details>

**Claire Vo**: 我会说：“你有3000个玩具。去玩这个。”

<details>
<summary>Original English</summary>

**Claire Vo**: I'm be like, you have 3,000 toys. Go play with this one.

</details>

**Jesse Genet**: 是的。还有书，比如图书库存。所以，我一直在拍图书库存的照片，然后我就可以更像，我也可以说一些非常笼统的话，比如：“嘿，**Sylvie**，**Ford**现在真的进入了他的恐龙时代了。我们有什么可以拿出来的，已经是恐龙主题的，因为我记不起来我买过这本书了。”你知道，就像，你知道，在一个完美的世界里，我们都会把这些记在脑子里，但令人沮丧的是，**Ford**在四岁时经历了一个巨大的恐龙时代，我却从未拿出这本书，然后在他六岁时才再次发现它，那时他已经不感兴趣了。这就像我感觉我生活在这样的世界里，我总是在错误的时间重新发现我拥有的东西，所以基本上我觉得我可以在这方面做得很好，你知道，她可以告诉我：“**Ford**真的很喜欢恐龙，你拥有七种不同的恐龙物品，把它们都拿出来放在他的架子上。”所以我仍然需要去做，但我不需要思考那部分，我认为这真的很关键。我还在做与此相关的事情，所以**Sylvie**是家庭学校的智能体，那是我现在痴迷的地方，因为有些用例真的很有趣。实际上，在我继续之前，我们必须谈谈打印。

<details>
<summary>Original English</summary>

**Jesse Genet**: Yeah. And and books like So book inventory. So, I've been taking pictures of like the book inventory and um and then then I can more like I I can also say something very general like, "Hey, **Sylvie Ford** is like really kind of ramping into his like dinosaur era. like what do we what do we have that I can pull out that's like already dinosaur oriented because because I don't remember that I bought this book like yeah you know like you know it's like in a perfect world we all have this like in our memory but but what's a bummer is for **Ford** at age four to go through a huge dinosaur era me to like never pull out this book and then find it again when he's six and he could care less like that that's kind of the world I feel like I'm living in I'm always like rediscovering something that I own at the wrong time and so that that basically I feel like I could be done with that like now you know she can just tell me like oh forge really into dinosaurs you own seven different dinosaur things like pull that all out put it on his shelf and and so I still have to do it but I don't have to do the thinking part and I think that is really key I am also doing this as relates to so **Sylvia** is the home school one and that's kind of like where I'm going obsessive right now because some of the use cases are like so fun actually before I move on we have to talk about printing

</details>

**Jesse Genet**: 我不知道为什么我对这个如此痴迷，但**Sylvie**可以在我的打印机上按打印。好的。我的普通打印机。好的。我发了一个关于3D打印的帖子，它有点火了。但我想说的是，我指的是我的打印机。只是我的普通打印机。好的。**Sylvie**可以在上面按打印，出于某种原因，这改变了游戏规则。然后回到，就像每个人都会说：“这个女人怎么了？她为什么不能直接按**Ctrl+P**？”我当时说：“因为我没有手。记住，没有手。”

<details>
<summary>Original English</summary>

**Jesse Genet**: I don't know why I'm so obsessed with this but **Sylvie** can press print on my printer. Okay. My regular printer. All right. Like I I made a post about 3D printing and it kind of went viral. But that's what I want to say. I'm talking about my printer. Just my regular printer. Okay. **Sylvia** can press print on it and it's some some for some reason it's a game changer. And and back to like everyone is going to be like what is wrong with this lady? Why can't she just like do **control P**? And I'm like because I don't have hands. Remember there's no hands in hand.

</details>

**Claire Vo**: 是的。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah.

</details>

**Jesse Genet**: 所以，所以，但我可以拿着我的手机走来走去，**Sylvie**可以生成漂亮的材料或什么的，或者我可以拍下一些东西的照片。如果我想和我的孩子一起做一张练习纸，而它被埋在书里，我可以直接拍一张照片，然后说：“**Sylvie**，打印这个。”然后砰的一声，30秒后，我就有了一张练习纸可以给孩子。这关乎时间线，对吧？就像30秒后我就拿着它了。嗯，这让我大开眼界。所以，我试图给她这些小机会，让她真正影响我的真实物理生活，因为如果练习纸卡在书里，而我不想让孩子真的在书上画画，那么在我的旧世界里，我就会扫描，然后上传，发邮件给自己，然后就像：“哦，**G Drive**说这个文件太大了。”就像，我快疯了，你知道吗？嗯，而现在我只需拍一张照片，然后说：“**Sylvie**，打印这个。”这种摩擦力的减少，对我的日常生活产生了巨大的影响。这就是我知道我们正在做一个非常以父母为导向的“我如何AI”节目的原因，因为人们总是问我为什么有打印机，我当时说：“我有孩子，老兄，我们家不停地打印。”嗯，你还给了我一个想法，我想我将，我将进入“我如何AI”的闪电问答环节，因为我们快到整点了。

<details>
<summary>Original English</summary>

**Jesse Genet**: So, so but I can be walking around with my phone and **Sylvia** can generate a beautiful material or something or I can take a photo of something. I could get like if I want to do a worksheet with my kids and it's like buried in a book, I could literally take a photo and then just say, "**Sylvie**, print this." And then boom, I have a worksheet to like give to the kid right then, like 30 seconds later. It's about the timeline, right? Like it's like 30 seconds later I'm holding it. Um, that blows my mind. So, I'm trying to give her these like little moments to actually affect my real physical life because if the worksheet stuck in the book and I don't want the kid to actually draw in the book, then I'm like in my old world, I'd be like scanning and then uploading, emailing it to myself, then it's like, "Oh, **G Drive** says this file is too big." Like, it's like I'm like losing my mind, you know? Um whereas now I can just take a photo and be like, "**Sylvie**, print this." That like friction or reduction of friction makes a big difference in like my day-to-day life. And this is how I know we are doing a very parent or parent oriented how I AI because people always ask me why I have a printer and I'm like I have kids dude we are printing nonstop in this family. Um and you also gave me an idea and I guess I'm gonna I'm gonna jump into how I lightning round questions because we're hitting the top of the hour.

</details>

### AI智能体的未来与管理哲学

**Claire Vo**: 孩子们会得到一个智能体吗？如果我必须快速回答“是”或“否”，我会说是。我知道有很多注意事项。

<details>
<summary>Original English</summary>

**Claire Vo**: Are the kids ever going to get a an agent? I'm gonna if I had to go yes or no fast lightning round, I would say yes. I know there's so many caveats and

</details>

**Jesse Genet**: 所以，所以，我实际上不会多说废话，比如“但是这个，但是那个”，答案是“是”。但你也可以理解我的个性，你会明白我会有很多定制的方式。

<details>
<summary>Original English</summary>

**Jesse Genet**: so so I actually just won't bluster that much and like be like but this and the answer is yes. But also you can gro my persona. You can understand that there's going to be a lot of ways that I customize that.

</details>

**Claire Vo**: 是的，你给了我一个想法。我想，我想买一个。我想制作我自己的**Sylvie**版本。我的大一点的孩子年龄更大一些，他们非常喜欢数学和体育数学。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, I you've given me an idea. I think I want to I want to buy one. I want to make my version of **Sylvie**. My kids are a little my older kids are a little older and they're like really into math and really into sports math.

</details>

**Jesse Genet**: 太棒了。

<details>
<summary>Original English</summary>

**Jesse Genet**: Amazing.

</details>

**Claire Vo**: 我当时想，想象一下如果他们可以问任何问题并打印一张练习纸。

<details>
<summary>Original English</summary>

**Claire Vo**: And I'm like imagine if they could go ask any question and print a worksheet

</details>

**Jesse Genet**: 或者找到他们读过的关于击球平均数之类的书。

<details>
<summary>Original English</summary>

**Jesse Genet**: or find one of the books that they've read about batting averages or something like that.

</details>

**Claire Vo**: 那就像是，那是一个游戏规则改变者，你知道吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Is that like that's a game changer, you know?

</details>

**Jesse Genet**: 好的。然后他们也可以，然后我们可以让我们的**Sylvie**版本提醒他们早上练习钢琴和做作业。

<details>
<summary>Original English</summary>

**Jesse Genet**: Okay. And then they can also then we can have our version of **Sylvia** remind them to practice their piano and do their homework in the in the morning.

</details>

**Claire Vo**: 是的。是的。是的。

<details>
<summary>Original English</summary>

**Claire Vo**: Yes. Yes. Yes.

</details>

**Claire Vo**: 好的。嘿，你回答了我的第二个问题，我通常会问，当你对智能体感到沮丧时，你如何与它们交流？我也会出于你说的原因而保持礼貌。嗯，但你有没有发现其他技巧，从管理者的“工具包”中提取的关于与这么多智能体合作或与你的智能体一对一合作的技巧？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay. Hey, you answered my second question which I usually ask which is when you're frustrated with the agents, how do you talk to them? And I am also polite for the reasons that you say. Um, but have you found any other tricks, any other pulled from the manager kind of pack tricks about working with this many agents or working with your agents oneonone?

</details>

**Jesse Genet**: 我想说，我正在使用的最深层次的技巧是协作，或者说，将**Obsidian**与我的智能体结合使用，因为我在**Obsidian**中构建了额外的记忆信息文件，这些文件不是**OpenClaw**原生自带的。举个例子，为了说清楚，有一些多人都在做的事情，比如“决策”。所以我会说，与人类不同，你不需要对人类使用“魔法词”，但有时我会说，每个智能体都知道我有一个“**decisions file**”，里面记录了**Jesse**做出的最终决策，比如“不要再问她这个问题了”。嗯，所以有时我会说一个陈述句，然后我会说“这是一个决定”。所以我不会那样对人类说，因为那会有点奇怪，但我会以一种我了解它们的结构的方式与我的**OpenClaw**交流，或者如果我觉得我想改变它们的个性，我会说“更新你的**soul.md file**”。所以，显然我不会对一个人那样说。所以我认为，人们需要意识到它是一个智能体，我实际上可以比对人类更多地塑造它们的身份，如果我有特定的事情，我会告诉它们在哪里更新自己。这是我做的最不同的事情，我认为这是一种人们在越来越多地与智能体合作时需要思考的技能。我把它们称为“咒语”，大多数智能体都有“工具咒语”，如果你知道那个“魔法咒语”，它通常是一个关键词，比如**Chatpurd**中的“决定”，我就会说，如果你说“写”或者你说“编辑”，你就会从你的智能体那里得到一个非常特定的行为，然后我喜欢的是，你正在把它提升到下一个层次，并将这些“咒语”编入你的系统，这样你就知道如何与它合作了。嗯，我的最后一个问题，闪电问答，你手动编辑“灵魂”吗？你会进去打开。

<details>
<summary>Original English</summary>

**Jesse Genet**: the trick um I would say the deepest level trick I'm doing is the collaboration be or like the using **Obsidian** like in conjunction with my agent because there's additional files of memory information that I have built into **Obsidian** that don't uh run natively from that you just don't get with **OpenClaw** um an example to make it clear is something uh that multiple people are doing that's like decisions so I will speak So, unlike a human, you're not trying to use magic words with a human, but um I will sometimes say they the each agent knows I have a **decisions file** of like final decisions that **Jesse**'s made like don't reverse back and ask her again about this. Um and so I will that like sometimes say a declarative and then I'll say that's a decision. So I wouldn't like say it that way to a human because I would that would be like a little weird but I'll talk to my **OpenClaw** in a way that is where I'm aware of their structure or if their persona I feel like I want to change I'll say update your **soul.md file**. So so like obviously I wouldn't say that to a person. So I think there's an awareness that it's an agent and I can actually mold their identity more than I can a human and I'll talk to them about where to update themselves if I have a specific thing. That's the thing that's the most different that I do that would be different lamp way. I think this is a skill that people need to think about as they think about working with agents more and more is I I call them these like in incantations is most agents have like incantations of tools and if you know the magic spell and it's usually like a keyword like decision in **Chatpurd** I'm like if you say write or you say edit you're going to get a very specific behavior out of your agent and then what I like is you're taking it this next step and codifying those incantations into your system so that you know how to work with it. Um, my last question, lightning round, is do you manually edit the soul? Do you go in and up open the

</details>

**Jesse Genet**: 我没有，嗯，但再次强调，我有手部问题。所以我有时会问它，当我困惑于它为什么以某种方式行事时，我会说：“好的，把你的**soul file**发给我。”

<details>
<summary>Original English</summary>

**Jesse Genet**: I haven't um but again I've got a hands problem. So I have asked it to send me sometimes when I'm confused about why it's behaving certain way. I'm like okay send me your **soul file**.

</details>

**Claire Vo**: 我当时想：“我们来看看这个东西。”嗯，所以我确实要求直接查看它，因为我用的是手机，甚至不在**Mac mini**上或什么的。我还让它把文件备份到**Obsidian**，所以我实际上可以点击进去查看。我很少会点击进去真正查看，我更多地是让它自我诊断。我说：“你这样行事。这是因为你的**soul file**吗？你能进行编辑吗？”然后我与它一起进行建议编辑。但我很少会亲自进去编辑。我总是，我基本上总是让它，我有点礼貌。我说：“你自己编辑吧，你知道，慢慢来，但也不要搞砸我们。”

<details>
<summary>Original English</summary>

**Claire Vo**: I'm like let's look at this thing. Um so so I have asked to see it directly because I'm like on my phone. I'm not even on the **Mac Mini** or like whatever. I also had it backing up its files to **Obsidian** so I actually could click in and see. Rarely do I ever click in and truly look I ask I ask it to diagnose itself more. I say you're acting this way. Is this from your **soul file**? Can you make an edit and like have it I go through like a suggested edits with it? But rarely am I actually going into it and editing myself? I always I basically always let it I'm kind of polite. I'm like you edit yourself like you know take your time but also don't mess with us.

</details>

**Claire Vo**: 我喜欢这个。好的，我得从头到尾总结一下。我们看到了你的**Obsidian**第二大脑，或者说大脑们。我们看到了你的**Mac mini**堆栈，你的许多许多**OpenClaw**机器人，你的**OpenClaw**们。

<details>
<summary>Original English</summary>

**Claire Vo**: I love this. Okay, I got to recap top to bottom. We saw your **Obsidian** second brain or brains. We saw your stack of **Mac minis**, your many many **OpenClaw** **OpenClaw**s, your **OpenClaw**s.

</details>

**Claire Vo**: 嗯，我们谈到了你如何大量使用照片来构建数据，我认为这是一个非常棒的工作流程。

<details>
<summary>Original English</summary>

**Claire Vo**: Um, we talked about how you're using a lot of like photo to structure data, which I think is a really great workflow.

</details>

**Claire Vo**: 我们展示了你如何使用一个编程智能体来编写一些非常定制化的东西，甚至把它放到电视上。我们谈到没有人有手。所以我们所有的智能体和人类，至少妈妈们，都没有手部问题。然后你谈到了所有这些通用人工智能（**AGI**）的杀手级用例，那就是能够通过语音备忘录进行打印。就是这样。

<details>
<summary>Original English</summary>

**Claire Vo**: We showed how you can use a coding agent to code something really bespoke and even get it on a TV. We talked about that no one has hands. So we all agents and humans, moms alike at least, no hand problems. And then you talked about the killer use case of all this **AGI**, which is being able to print from a voice note. That's it.

</details>

**Claire Vo**: 就是所有这些。**Jesse**，我们可以在哪里找到你，我们如何能帮助你？

<details>
<summary>Original English</summary>

**Claire Vo**: That's all of it. **Jesse**, where can we find you and how can we be helpful to you?

</details>

**Jesse Genet**: 嗯，这很贴心。你可以在**X**上找到我**Jesse Jana**，**Jana**是g-n-e。老实说，有帮助的也是其他人尝试这些东西，特别是与任何这些话题相关的，比如孩子教育、育儿和分享。我认为很多人可能害怕分享。他们觉得自己不重要。如果我的故事和我们现在谈论的内容有什么意义的话，那就是你不需要那样想。我以前没有人把我视为这个领域的网红，直到我只是说：“伙计们，我正在用我的打印机打印东西！”所以，所以，真的，不要害怕尴尬或什么的，去分享。你分享得越多，我们大家就会越聪明。即使你只是遇到了障碍，那几乎就是我的请求。这不是建议。这就像我的请求，因为你分享得越多，我们大家就会越快地做得更好。

<details>
<summary>Original English</summary>

**Jesse Genet**: Um, that's sweet. Uh, you can find me **Jesse Jana** on **X**. **Jana** is g ne and honestly helpful is also other people trying this stuff especially as it relates to any any of these topics kids education uh parenting and sharing. I think a lot of people are maybe nervous to share. They feel like they're not important. If there's anything about my story and us talking now it's that you don't need to feel that way. I was like no one was viewing me as some kind of like influencer in this space until I was just like you guys I'm printing on my printer like um so so ju just really like uh don't have fear about being embarrassed or something about sharing. The more you share the smarter we all get. Even if you're just running into roadblocks that would just be my that's almost my ask. It's not advice. It's like my ask because the more you share the more we're like all going to get better at it faster.

</details>

**Claire Vo**: 这就是“我如何AI”的使命宣言。所以，我喜欢它。**Jesse**，非常感谢你加入我们，我会让你回去处理你的**OpenClaw**们。

<details>
<summary>Original English</summary>

**Claire Vo**: That is the how I AI mission statement. So, I love it. **Jesse**, thank you so much for joining us and I'll let you get back to your to your **OpenClaw**s.

</details>

**Jesse Genet**: 好的。非常感谢。

<details>
<summary>Original English</summary>

**Jesse Genet**: Okay. Thank you so much.

</details>

**Claire Vo**: 非常感谢大家的观看。如果你喜欢这个节目，请在**YouTube**上点赞并订阅，或者更好的是，留下你的评论。你也可以在**Apple Podcasts**、**Spotify**或你最喜欢的播客应用上找到这个播客。请考虑给我们评分和评论，这将帮助其他人找到这个节目。你可以在**howiaipod.com**查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>Original English</summary>

**Claire Vo**: Thanks so much for watching. If you enjoyed this show, please like and subscribe here on **YouTube**, or even better, leave us a comment with your thoughts. You can also find this podcast on **Apple Podcasts**, **Spotify**, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at **howiaipod.com**. See you next time.

</details>