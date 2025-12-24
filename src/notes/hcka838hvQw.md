---
area: tech-insights
category: technology
companies_orgs:
- Mariana University
- Fortune 500 insurance leader
date: '2025-10-27'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- GPT-4
- Llama 2
- GPT-4o
- 30B model
project:
- ai-impact-analysis
- entrepreneurship
series: ''
source: https://www.youtube.com/watch?v=hcka838hvQw
speaker: 硅谷101
status: evergreen
summary: 本次演讲中，李沐分享了语音代理（Voice Agent）在商业落地中的经验与教训。他通过两个实际项目——一个开放世界游戏和一个AI电话营销员——深入探讨了语音代理的技术挑战、模型架构选择、实时交互优化以及数据训练策略。演讲强调了预训练、领域内评估和满足严格监管要求的重要性，并展望了语音代理在多角色、复杂世界设定及通用产品销售中的未来发展。
tags:
- agent
- investment
- llm
- real
- society
title: 语音代理商业落地：李沐分享经验与教训
---

### 语音代理：商业落地的机遇与挑战

今天，我将讨论**语音代理**（Voice Agent: 一种通过语音界面与用户交互的智能代理），这是今年一个非常热门的话题，因为人们认为这项技术已经成熟，可以投入实际应用和商业落地。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, I'm going to talk about voice agents, which is a very hot topic this year, because people believe the technology is now ready for practical use and commercial deployment.</p>
</details>

今天，我将分享我们基于语音代理的两个过往项目，展示一些经验教训和最佳实践，以帮助客户利用它们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today, I will share two of our past projects based on voice agents, highlighting some lessons and best practices on how to help customers utilize them.</p>
</details>

让我们开始吧。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's get started.</p>
</details>

首先，什么是语音代理？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, what exactly is a voice agent?</p>
</details>

它本质上就是一个带有语音界面的代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, it's an agent with a voice interface.</p>
</details>

用户通过语音界面与代理进行交互。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Users interact with the agent through a voice interface.</p>
</details>

我们希望这能提供一种更自然的**大型语言模型**（Large Language Model, LLM: 基于深度学习的语言模型，能理解和生成人类语言）交互方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We hope this offers a more natural way to interact with large language models.</p>
</details>

这里有两个关键点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are two key aspects here.</p>
</details>

首先是**实时**（Real-time: 指系统对输入能即时响应，无明显延迟）交互，这与视频生成有所不同，后者可以离线完成。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First, it's about real-time interaction, which is somewhat different from video generation, which can be done offline.</p>
</details>

对于语音代理，响应通常必须在一秒内完成；这指的是**端到端延迟**（End-to-End Latency: 从输入到输出的完整时间）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For voice agents, the response must typically be within one second; this refers to the end-to-end latency.</p>
</details>

其次，在大多数情况下，人们并非寻求闲聊或陪伴；相反，他们有特定的任务需求。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Secondly, in most cases, people aren't looking for casual chit-chat or companionship; instead, they have specific tasks in mind.</p>
</details>

例如，你可能想提供客户支持、检索信息或销售产品。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, you might want to provide customer support, retrieve information, or sell a product.</p>
</details>

即使是陪伴，有时也是一项带有特定目标的任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Even companionship can sometimes be a task with specific goals.</p>
</details>

它不仅仅是闲聊；你有一些特定的目标，也许是讲故事，也许是做其他事情。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not just casual chat; you have particular goals, perhaps telling a story or doing something else.</p>
</details>

所以，这基本上就是语音代理的定义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is essentially what a voice agent is.</p>
</details>

在接下来的演讲中，我将通过两个例子展示我们如何构建它们，以及我们从中吸取了哪些教训。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the remainder of this talk, I will present two examples demonstrating how we built these agents and the lessons we learned.</p>
</details>

这是第一个例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here's the first example.</p>
</details>

### 案例一：开放世界游戏中的语音代理

（游戏角色语音）我真的需要尽快找到离开这里的方法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I really need to find a way out of here fast.</p>
</details>

（语音代理）好的，我猜你直奔主题了，但至少能告诉我一些关于你自己的事情吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, I guess you're cutting straight to the chase here, but at least can you tell me a little bit more about yourself? Like,</p>
</details>

（游戏角色语音）好的，让我想想。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">okay, let's see.</p>
</details>

（游戏角色语音）好的，我是**Mariana University**（马里亚纳大学）的一名大二学生，主修天体物理学。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, I'm a sophomore at Mariana University studying astrophysics.</p>
</details>

这是一个我们大约两年半前启动的游戏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is a game we started about two and a half years ago.</p>
</details>

这是应用程序，这是用户。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the app. Um this is the user.</p>
</details>

这个应用程序中的角色叫**Stella**（斯特拉），用户将通过语音与Stella互动来帮助她。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this app is like this guy is called Stella. Um the user going to do voice interaction with Stellar to help her.</p>
</details>

你可以认为整个故事现在是由用户的输入驱动的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can think that the whole story now is driving by how the users uh inputs.</p>
</details>

这里的任务是一个开放世界游戏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The task here is open water game.</p>
</details>

这句话是直接从两个月前发布的游戏中复制的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like this this sentence is copy from the game which is already launched uh two two months ago.</p>
</details>

基本上，Stella降落在一个陌生的星球上，她的飞船坠毁了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So basically Stella landed on a alien um planets. So it's that the aircraft is crashed here.</p>
</details>

然后她请求玩家帮助，比如“这里太奇怪了，有太多选择，我感到很多情绪。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then she asking the players to help like okay it's so like I so um strange word uh so many options and I feel a lot of emotions here.</p>
</details>

所以你使用语音与玩家互动，让玩家帮助她逃离这个星球。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you're using voice to interact with player to let the player to help her to escape um the planets.</p>
</details>

这是一个非常庞大的世界设定，这只是系列中的第一个试玩游戏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's a very large world setting. That's only the first game. Uh the is a kind of trial game in a very large series.</p>
</details>

### 语音代理在游戏中的角色与挑战

语音代理在这里扮演什么角色？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what voice agent play here? The role here is you need to be a both a game designer and actor.</p>
</details>

它需要同时扮演游戏设计师和演员的角色。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The role here is you need to be a both a game designer and actor.</p>
</details>

作为游戏设计师，你需要设计一个有意义且有趣的故事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The game designer means that you want to design the the story which is make sense is fun to play.</p>
</details>

然后，代理需要创建与角色设定相符的对话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then the agent want you want to create a dialogue that match the character setting.</p>
</details>

Stella有特定的角色设定，比如她所有的背景信息，所有她拥有的东西，大概有20页的设定。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">So this data have a particular character setting like um all the background she has or all the things she has like kind of maybe 20 pages of setting then that's the actor um then</p>
</details>

然后，作为游戏设计师，你需要引导故事线。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then for the game designer you need to guide the um when you when the user interact with the game you want to guide um the story line which is if it's just a single line story is not agent right now kind of complex structure or even graph structure and some something have freedom here.</p>
</details>

如果只是单一线性故事，那就不像代理了，现在需要的是复杂的结构，甚至是图结构，并且有一些自由度。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if it's just a single line story is not agent right now kind of complex structure or even graph structure and some something have freedom here.</p>
</details>

这里的关键是你需要有一个真正好的游戏，就像如何写一本书，如何写一个游戏情节一样，有很多原则。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The the issue here is that you want to have really good game like if if you for how to write a book, how to write a game plot, it have a lot of uh principle there like you want to have uh the all the stage order pace all the all of the things make the the story looks uh interesting.</p>
</details>

你需要有所有的阶段、顺序、节奏，所有这些都能让故事看起来有趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you want to have uh the all the stage order pace all the all of the things make the the story looks uh interesting.</p>
</details>

另一方面，作为一个游戏，你期望人们能积极输入，就像玩家会尝试所有的边界，而代理必须在其设定范围内。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other things like it's a game you expect people to have thing to upure input with you like the T and the player to try all the boundaries the agent must be within their setting sometimes like this game on a sci-fi world like two maybe 2,000 year later and you have a random chat setting if you say okay what's a movie you uh you uh you you watch recently if you pick up a movie right now is Maybe wow you watched the movie like 1,000 years ago.</p>
</details>

有时，比如这个游戏设定在一个科幻世界，大约两千年后，如果你有一个随机聊天设定，如果玩家问“你最近看了什么电影？”而你提到一部现在的电影，那就会显得你看了1000年前的电影，这不符合设定。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">sometimes like this game on a sci-fi world like two maybe 2,000 year later and you have a random chat setting if you say okay what's a movie you uh you uh you you watch recently if you pick up a movie right now is Maybe wow you watched the movie like 1,000 years ago.</p>
</details>

但问题是，所有的大型语言模型都基于当前数据进行训练，所以你需要思考如何将所有设定融入未来的世界。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So and but the thing is like all the language model trend on the current data now you want to how to move all the settings to your future words.</p>
</details>

我在这里分享一个早期的日志，展示了一些中文任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I share a particular uh like earlier log here um show how um some Chinese task.</p>
</details>

这是早期阶段的日志，仍然是中文的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the lock uh on the very early earlier states um is still in Chinese.</p>
</details>

这里的想法是Stella发现了一些食物，询问玩家应该选择哪种食物，玩家的设定是“我会帮助你”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the idea here stellarify some foods asking the player to say okay which food I going to choose the player the the player settings here I will help you.</p>
</details>

然后Stella说“我觉得这不能吃，你什么都不能吃。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think it cannot eatable you cannot eat anything. Um so then oh the standard first thing like you need to find some meat to read.</p>
</details>

所以，你需要找到一些肉来吃。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have a rack to search how to play how to catch animals here but the the the answer is you cannot this you didn't see any animal yet.</p>
</details>

你有一个架子可以搜索如何捕捉动物，但答案是你还没有看到任何动物。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have a rack to search how to play how to catch animals here but the the the answer is you cannot this you didn't see any animal yet.</p>
</details>

Stella回应说：“我想吃肉，但我只有蔬菜。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the stellar response like okay I want you to eat med but I can only have uh vegetable here.</p>
</details>

玩家不想帮忙，Stella说“我真的需要你帮忙。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the player don't want to help. Stella say okay I really need you to help.</p>
</details>

玩家仍然说“我不想帮忙。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh player still like I don't want to help.</p>
</details>

问题是，如果你在这里卡住，故事就无法继续。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing is like if you stuck here then the story can not move on.</p>
</details>

所以，提示语会说“好的，三次尝试后，自己选择一些东西。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um the prompt is saying like uh okay after three trials just move um choose something by yourself.</p>
</details>

然后，这是一个随机选择，Stella快要死了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, but then it's a random choice. Stella is dying.</p>
</details>

所以，她说：“好吧，她快死了。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, say, "Okay, he's dying."</p>
</details>

但是玩家说：“好吧，你要死了。这不是一个好人，但你需要表现得好一点。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, but the the the player say, "Okay, you got you're going to die. It's not a nice guy here, but you need to be nice here."</p>
</details>

所以，这里的挑战是这是一个开放的游戏，但你的回应必须有意义，就像一个开放世界游戏，设定在两千年后。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the challenge here is like it's open the game. Um, but your response should be make sense like it's a open word again. It's like three or maybe one 2,000 year later.</p>
</details>

并不是每个世界设定都指定了很多东西，当你在开发游戏时，游戏设计师不能为你写所有东西。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not every word setting specified lot of thing like you can uh when you develop the game the game designer cannot write anything for you.</p>
</details>

你需要思考“好的，这在两千年后可能是有意义的”，而且还需要引人入胜和有趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You need to think okay that thing make maybe makes sense make sense in a 2000 year letter also need to be engaging and fun.</p>
</details>

所以，这又不是一个聊天机器人，这就是所有的挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's that's again that's not the chatbot. So that's all the um all the challenges here.</p>
</details>

### 游戏项目中的技术方案与经验教训

那么我们做了什么呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what do we do is like the project launched two two years ago at that time you have GBD4 but it's very expensive and we did some calculations thinking if you use a GP4 like okay that's a huge loss of the revenue and at that time the best model is lama 2 right now uh at that time lama 2 is not strong enough so uh what we did at that time is we actually pre-trend 30B model uh with kind of five trillion tokens so but this tokens enriched on the fiction G role play data the performance kind of match on the llama 2 on general task little bit better on the role play and but the the lesson we got is like okay pre-trend a model take a few months and even that you can of outperform nama 2 but you have nama 2b so like if spend too much time on pre-trailling uh you maybe this the the progress isn't so great so that's kind of the lesson we got That's we're going to say why that's maybe a bad choice.</p>
</details>

这个项目是两年前启动的，当时有**GPT-4**（Generative Pre-trained Transformer 4: OpenAI开发的大型多模态模型），但它非常昂贵。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The project launched two years ago, at that time you have GBD4 but it's very expensive.</p>
</details>

我们做了一些计算，认为如果使用GPT-4，那将是巨大的收入损失。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we did some calculations thinking if you use a GP4 like okay that's a huge loss of the revenue.</p>
</details>

当时最好的模型是**Llama 2**（Meta开发的开源大型语言模型），但Llama 2当时还不够强大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at that time the best model is lama 2 right now uh at that time lama 2 is not strong enough.</p>
</details>

所以我们当时做的是，实际上**预训练**（Pre-training: 在大量通用数据上训练模型，使其学习通用知识和能力）了一个**30B模型**（30 Billion Model: 拥有300亿参数的模型），使用了大约五万亿个**token**（Token: 文本的最小单位，可以是单词、子词或字符）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So uh what we did at that time is we actually pre-trend 30B model uh with kind of five trillion tokens.</p>
</details>

这些token在虚构的角色扮演数据上进行了丰富。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So but this tokens enriched on the fiction G role play data.</p>
</details>

它的性能在通用任务上与Llama 2相当，在角色扮演方面略好一些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The performance kind of match on the llama 2 on general task little bit better on the role play.</p>
</details>

但我们得到的教训是，预训练一个模型需要几个月的时间，即使这样你也能超越Llama 2，但后来又有了Llama 2b。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And but the the lesson we got is like okay pre-trend a model take a few months and even that you can of outperform nama 2 but you have nama 2b.</p>
</details>

所以，如果在预训练上花费太多时间，进展可能不会那么大，这就是我们得到的教训，这可能是一个糟糕的选择。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like if spend too much time on pre-trailling uh you maybe this the the progress isn't so great so that's kind of the lesson we got That's we're going to say why that's maybe a bad choice.</p>
</details>

我们做的另一件事是，因为两年前**GPU**（Graphics Processing Unit: 图形处理器）非常昂贵，我们投入了大量精力自己构建数据中心。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing we did is like okay because GPU is so expensive that's two years ago and we spend a lot of effort to actually build data center by ourself.</p>
</details>

如果你拥有自己的数据中心，成本会低得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you own a data center the cost is much lower.</p>
</details>

然后我们转向了**后训练**（Post-training: 在预训练模型基础上，针对特定任务或领域进行进一步的微调）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we move to post training.</p>
</details>

这里的关键是你有一个非常复杂的故事线工作流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The post training is that the key thing here you have very complex story line workflow.</p>
</details>

这只是一个例子，不是真实的，真实的要复杂得多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's the example that not the real one and the real one is much more complicated.</p>
</details>

然后我们有20名标注员。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have pens of two 20 labelers.</p>
</details>

我们需要培训这些标注员成为优秀的游戏设计师，因为回应方式很特别。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We need to train the labeler to be a good game designer because like is particular way how you response.</p>
</details>

然后对所有模型的偏好进行排名和评估。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um then ranking and evaluating all the model uh preference.</p>
</details>

通过这两点，我们花费了大约一个季度的时间，在这个特定场景下，我们能够超越GPT-4，我们用人类来扮演所有的场景。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So using these two we spend kind of quarter here and can outperform GP4 on this particular scenario for all the scan we use human to uh play.</p>
</details>

所以你可以超越GPT-4，但问题是，这只是一个开放世界游戏中的一小部分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can outperform GB4 but the question here is like okay that's a single again that's a the tiny bit of a whole open world again.</p>
</details>

如果你想做多个游戏怎么办？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I how what if you want to do multiple games.</p>
</details>

所以我们进入了另一个阶段，我们希望扩展到更广泛的游戏和角色。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we get another face is that we want to expand to a broader range of games and characters.</p>
</details>

这样你就可以减少对**提示工程师**（Prompt Engineer: 负责设计、优化和管理给AI模型的指令，以获得最佳输出结果的专家）的依赖。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can less reliance on proper engineer at that time proper engineer is very complicated right now it's like and even different versions of GPD4 is very sensit sensitive to proper engineer.</p>
</details>

当时提示工程非常复杂，甚至不同版本的GPT-4对提示工程都非常敏感。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At that time proper engineer is very complicated right now it's like and even different versions of GPD4 is very sensit sensitive to proper engineer.</p>
</details>

所以，是的，我们可以提供帮助，但你需要设计游戏设计师来编写提示工程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the thing is like yes we can help but you want to design game designer to write um prompt engineer.</p>
</details>

当时的想法，大约一年半前，是你需要预训练一个真实世界的模型，它可以区分好坏，因为你不能完全依赖人类来做这件事。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the idea here at that time is like it's still like one and a half year ago. The idea at that time is like you need a pre-train a real world model can distinguish which one's good which one's bad and because you cannot rely on humans to do it.</p>
</details>

所以当时我们首先训练了一个**奖励模型**（Reward Model: 在强化学习中，用于评估AI模型生成内容质量的模型），来判断在游戏设定中哪个回应是好的，然后你可以用它来后训练另一个模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at that time we first train a re reward model to tell you which response is good in this game setting then you can post train another model for it.</p>
</details>

我们得到的一个重要教训是，即使是游戏，听起来很简单，但仍然有很多事情，比如指令遵循，你需要确保它有意义。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um the one important lesson we got is like even this is for game sounds like simple but it's still a lot of things like instruction following you need to make sense.</p>
</details>

所以模型仍然需要足够通用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the model still need to be very general enough.</p>
</details>

即使你训练了领域内模型，模型也必须在通用任务上表现良好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So even that you train the in domain model the model must be good in general task.</p>
</details>

如果你认为最好的OpenAI或最好的封闭API得分是90分，但在你的应用中，通用任务的得分接近85分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you think okay the best open air or best like closed uh API is like the score is 90 but in your application the general task near be 85.</p>
</details>

如果低于这个分数，你就会认为你的任务存在根本缺陷。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you're lower than that one you're going to think you have a you have a sitting flaw on on your task.</p>
</details>

所以你首先要保证通用任务表现良好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the f you first guarantee the general task is good.</p>
</details>

然后针对你的特定任务，我们创建了领域内评估。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then for your particular task we kind of create a in domain evaluation.</p>
</details>

你有很多角色设定，很多场景设定，对于不同的通用设定，你需要确保在这种设定下，你遵循了所有的设定，并且回应良好，遵循指令，遵循同步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have lot of um character settings a lot of scene settings uh for different gen settings you want to make sure like under this setting you follow all the settings and the response is good follow the instruction follow the sync and then once you have this uh benchmark you can tune the model so that you can be be the best uh compared to others.</p>
</details>

一旦你有了这个基准，你就可以调整模型，使其表现优于其他模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then once you have this uh benchmark you can tune the model so that you can be be the best uh compared to others.</p>
</details>

我认为这是一个非常通用的模式，你关心的是领域内性能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's a very general pattern that you care about in domain performance.</p>
</details>

这里的关键是你真的想开发一个非常好的**领域内评估**（In-domain Evaluation: 针对特定应用场景或数据集进行的模型性能评估）任务。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The key thing here like you really want to develop a really good in-domain evaluation task.</p>
</details>

所以你可以说“我可以看到模型在这方面有所改进”，但同时也要保证你的模型在所有其他通用任务上表现良好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can say I I can see the model improve on this one but at the same time guarantee your model performs well on all the other general task.</p>
</details>

所以我们得到的教训是，智能来自预训练。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the lessons we got is like the intelligence came from pre-training.</p>
</details>

在我们完成整个项目后，我们回过头来思考，所有重大的改进都来自对海量数据的预训练。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So after we finish the whole projects but then we think backwards all the all the big improvements from pre-training on massive data.</p>
</details>

这让我们重新思考，也许我们放弃预训练是一个糟糕的主意，我们也许应该再花一个季度进行预训练。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it makes us think rethink maybe we give give up on the pre-training maybe a bad idea. We maybe spend another quarter on pre-training.</p>
</details>

这就是我们得到的教训，但仍然有限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's kind of the lesson we got and but still like it's it's still limited.</p>
</details>

在50轮对话后，对话质量会下降。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The dialogue quality declines after 50 terms is still right now like given the complex setting after 50 terms conversation then you think that maybe the model kind of be can the intelligence much lowered also the models nowadays still drug uh struggle with complex world setting and you have multiple car uh characters so it's still hard right now even like if you look all this voice model all this video model kind of two to three uh characters that's the limit even for the the text part like if you have four set four characters it's very challenging right now.</p>
</details>

在复杂的设定下，50轮对话后，你可能会觉得模型的智能水平大大降低了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">given the complex setting after 50 terms conversation then you think that maybe the model kind of be can the intelligence much lowered.</p>
</details>

此外，现在的模型仍然难以处理复杂的世界设定和多个角色。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">also the models nowadays still drug uh struggle with complex world setting and you have multiple car uh characters.</p>
</details>

即使是现在，如果你看所有的语音模型和视频模型，大约两到三个角色就是极限了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so it's still hard right now even like if you look all this voice model all this video model kind of two to three uh characters that's the limit.</p>
</details>

即使是文本部分，如果你有四五个角色，现在也非常具有挑战性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">even for the the text part like if you have four set four characters it's very challenging right now.</p>
</details>

另一方面，在演示中你看到，最新的延迟是基于逐词的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing is like in the demo you see the latest is big is a term by term based.</p>
</details>

我们这里所有的项目都专注于大型语言模型本身。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So all the projects we here is focus on the larger language model itself.</p>
</details>

我们得到的教训是，如果你真的想要真正像人类一样的互动，你需要稍微调整一下架构，而不是传统的三个组件架构。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then the lesson we got like if you really want to truly humanlike interactions you kind of need to tune the architecture a little bit is not by the traditional three component and architecture.</p>
</details>

这成为了我们的下一个项目。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's become our next projects.</p>
</details>

### 案例二：AI电话营销员与保险销售

（AI营销员语音）现在是谈话的好时机吗？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Is this a good time to talk?</p>
</details>

（客户语音）实际上，我正要出门。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, I'm just about to head out the door.</p>
</details>

（AI营销员语音）没问题，约翰。我知道你很忙。如果你愿意，我可以在你方便的时候再给你打电话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No problem, John. I know how busy things get. If you'd prefer, I can give you a call back at a time that's better for you.</p>
</details>

（客户语音）说实话，我觉得我已经搞定了。我通过工作已经有了健康保险。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To be honest, I think I'm all set. I already have health insurance through my job.</p>
</details>

（AI营销员语音）那太好了，很高兴你已经有了保障。我交谈过的很多人确实通过工作获得了一些保障，但很多人没有意识到还有其他选择可以降低他们的自付费用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's great, and I'm glad you're covered. A lot of folks I talked to do have something through work, but many don't realize there are options that could lower their out-of-pocket costs.</p>
</details>

好的，这是一个非常不同的项目。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, that's a very different one.</p>
</details>

我们现在销售保险。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We sell insurance.</p>
</details>

之前是游戏，现在我们销售保险。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So before it's again right now, we sell insurance.</p>
</details>

起初，我认为销售保险可以非常富有创意，你可以做任何你想做的事情来销售产品。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At the first time, I think maybe sell insurance like you can be very creative. You can do whatever you want to sell something.</p>
</details>

但实际上，它非常正式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But in reality, it's pretty very formal.</p>
</details>

首先，你不能随意打电话给任何人，你所拨打的用户必须提交一些信息，以表明他们对你的产品感兴趣。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? First, first of all, you cannot call anyone you want to call the the user you called must be submit some information. So, shows uh their interest on your products.</p>
</details>

其次，整个保险行业受到高度监管。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Secondly, it's very highly regulated the whole insurance industry.</p>
</details>

所以，让我解释一下这个问题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, um let me explain this problem.</p>
</details>

我们现在做的是**AI电话营销员**（AI Telemarketer: 利用人工智能进行电话销售或营销的代理）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, right now we do AI telemarketer.</p>
</details>

代理的角色就是电话营销员。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The agent row is like is telemarketer.</p>
</details>

所以现在这个特定例子是，我们通过电话在多个国家销售健康保险。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So right now this particular example is like we sell health insurance through phone and but on multiple countries the thing the requirement you have two requirement you ma you must pass the telly marketing certification like the human you have 80 score to pass this one must be pass this certification before you can launch secondly you have some performance metrics you you're able to sell at a particular threshold like DV you like 1,000 uh customers you call them you must be able to sell particular number of sales also the complaints must below particular number if the people say okay I feel so bad like like you said in not true information or the experience is bad they they're going to complain that insurance company really care about it so the capacity you need here first of all you need to be intelligent you need follow the sales playbook with precise answer.</p>
</details>

这里有两个要求：你必须通过电话营销认证，就像人类一样，你需要达到80分才能通过。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the requirement you have two requirement you ma you must pass the telly marketing certification like the human you have 80 score to pass this one must be pass this certification before you can launch.</p>
</details>

在发布之前必须通过这个认证。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">must be pass this certification before you can launch.</p>
</details>

其次，你有一些性能指标，你必须能够达到特定的销售阈值，比如你给1000个客户打电话，你必须能够销售出特定数量的保单。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">secondly you have some performance metrics you you're able to sell at a particular threshold like DV you like 1,000 uh customers you call them you must be able to sell particular number of sales.</p>
</details>

此外，投诉数量必须低于特定数字。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">also the complaints must below particular number.</p>
</details>

如果人们说“我感觉很糟糕”，比如你提供了不真实的信息或者体验很差，他们就会投诉，保险公司非常关心这一点。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if the people say okay I feel so bad like like you said in not true information or the experience is bad they they're going to complain that insurance company really care about it.</p>
</details>

所以你这里需要的能力是：首先，你需要智能，你需要精确地遵循销售手册。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so the capacity you need here first of all you need to be intelligent you need follow the sales playbook with precise answer.</p>
</details>

我们将展示精确回答意味着什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're going to show what is precise answer means.</p>
</details>

你需要能够使用工具，因为保险有很多内部工具可以查询，还有一些数学计算，你需要进行大量的计算。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You need to able to use tools because insurance you have a lot of internal tools to query and some mass like you need to lot of compilations here.</p>
</details>

还需要非常像人类。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also need to be very humanike.</p>
</details>

如果你打电话给某人，这个人可能正在出门，周围有很多噪音，可能还有口音，而且你的声音需要真实，不能太像机器人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if you call someone maybe this guy's out of door like lot of noise and maybe have some accent and also you need have some um the the voice need be realistic. It's not so rob uh robotic.</p>
</details>

最后一个是端到端延迟。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last one is entering the latency.</p>
</details>

当我讲完一句话后，你的回应必须在一秒内完成，否则你会觉得它反应不够灵敏。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When I finish my sentence, your response must be within one second. Otherwise, you feel like it's a little bit not so responsive.</p>
</details>

例如，精确的回应是，如果你回应“可以报销高达600美元”，那是完全错误的，你考试不及格。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the precise response like for example, if you respons you can cover up to $600. That's wrong. Totally wrong. you failed this exam.</p>
</details>

因为精确的答案是，对于一些常见情况报销400美元，而600美元只针对门牙。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because the precise answer the precise one is like cover $400 for some common one and like um the $600 only for the front teeth.</p>
</details>

所以这在产品信息中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's it's on the play uh product information.</p>
</details>

如果你牙齿有任何问题，那是不对的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you have any issue with your teeth that's not right.</p>
</details>

如果你牙齿有特定的疾病，那才是正确的答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have particular like AB diseases with with your teeth that's the right answer.</p>
</details>

如果你这样回应，你就会考试不及格。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you respond this one it's going to be you you failed the exam.</p>
</details>

另一个更具挑战性的事情，类似于游戏，就是当一些客户试图问“我们能找个时间谈谈吗？”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing the other more challenging thing here similar to the gaming like when some customer and try to asking okay can you can we grab time to talk about the you going to try three times if you cannot hand out you cannot reschedu before three times or you can reschedu later so for example I try the mar try first one the ten mark try first one no thank you then you try second time no then you you try the Third one if the user say uh-huh.</p>
</details>

你会尝试三次，如果你无法处理，就不能在三次之前重新安排，或者你可以稍后重新安排。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you going to try three times if you cannot hand out you cannot reschedu before three times or you can reschedu later.</p>
</details>

例如，我第一次尝试，客户说“不，谢谢”，然后你第二次尝试，客户说“不”，然后你第三次尝试，如果用户说“嗯哼”。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so for example I try the mar try first one the ten mark try first one no thank you then you try second time no then you you try the Third one if the user say uh-huh.</p>
</details>

你可能会认为“嗯哼”可能表示兴趣，因为你改变了话题，你解释了它如何能使他的个人生活受益。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you may be thinking uhhuh maybe interesting like if you think the emotions interesting because you you change the world uh you change like can you tell you okay like explain how it can could benefit your personality p personal.</p>
</details>

你可能会认为用户感兴趣了，但实际上，你需要判断语音中是否带有不耐烦的情绪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then you maybe think okay is maybe the user is interest but in reality it's like you need to think you need to find out the voice is impatient.</p>
</details>

然后根据上下文，你可以认为“我已经尝试了三次，我需要重新安排。”
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">then given the contact you can think okay I already have tried three times I need to reschedu.</p>
</details>

这就是当你将音频作为输入时的整个处理过程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the whole that's the cutting when you have the uh audio as inputs.</p>
</details>

### 实时交互架构与优化

那么这里一个关键问题是，我们如何实现实时性？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So then one key question here how do we do real time?</p>
</details>

我将展示我们现在拥有的不同模型架构的例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I kind of um show examples how different model architecture we have right now.</p>
</details>

第一个最花哨的叫做**端到端全双工**（End-to-End Full Duplex: 指用户和模型可以同时说话和听取对方的响应，实现无缝交互）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first one is the more f the fanciest one is called end to end food duplex.</p>
</details>

这意味着你有一个用户，你的模型是一个单一模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It means like you have user you have your model is single model.</p>
</details>

用户对你说话，所有的**波形**（Waveform: 声音信号在时间上的表示）进来，然后你在交互过程中监听波形并回应任何内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the user speak to you which is all the waveform come in then you listen to the waveform and response anything during the sync dur during uh the interactions.</p>
</details>

在这种情况下，用户很容易打断，模型也很容易插入一些填充词。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this case it's easy for user to interrupt also easy for the model to uh do some filling words.</p>
</details>

比如用户说了一长句话，你可以说“是的，是的，没错”，这是最自然的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like user say something hey uh say a long sentence you can say yes yes that's right so that's the most natural way.</p>
</details>

但目前没有一个系统是部署的，你可能会尝试一两个演示，但感觉不太可控。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um but none of this system is in deployed right now that's one or two demos you can try but it's very feels not so controllable.</p>
</details>

所以在大多数情况下，即使你使用**GPT-4o**（Generative Pre-trained Transformer 4o: OpenAI开发的多模态大型语言模型），我认为他们使用的是**端到端半双工**（End-to-End Half Duplex: 用户和模型轮流说话，不能同时进行）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so in most cases like if you're using uh even GBD40 I think they're using the end to have duplex.</p>
</details>

这意味着当用户说话时，你有一个**语音活动检测器**（Voice Active Detector: 检测音频中是否存在人声的系统），检测用户是否在说话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it means that when the user speak you have a voice active detectors dete detect if the user speak or not.</p>
</details>

所以你有一块块的音频进入模型，模型会回应之前的内容。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you have trunk of chunks go to the model and the model going to response the uh previous one.</p>
</details>

这就是半双工。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's the um um that's the half uh duplex.</p>
</details>

另一个是链式解决方案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The another one is a ch solution.</p>
</details>

同样，你也有轮次，但这里你有两个模型，而不是一个单一模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">still similarly you have turns but here you have two models not just single model.</p>
</details>

这两个模型中，第一个是理解模型，它接收音频输入并生成文本回应，然后文本进入生成模型，生成外部音频。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these two models the first is understanding model give the audio in generate the text response then the text goes to the generation generate the audio outside.</p>
</details>

最后一个叫做三个组件的链式方案，你只需进行**ASR**（Automatic Speech Recognition: 自动语音识别，将语音转换为文本），将转录的音频输入到大型语言模型，然后得到回应，再通过**TTS**（Text-to-Speech: 文本转语音，将文本转换为语音）生成音频。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last one um is the called uh ch three components like you have um just do ASR which is transcribed audio go to the log gen model and just and then get a response go to the TTS which which is generate audio.</p>
</details>

对于这些不同的方案，全双工最像人类，因为模型可以打断你。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for this different one, this one is humanlike very human like you because the model can interrupt you.</p>
</details>

而最后一个方案，如果你选择这个方向，它很容易定制，因为你可以更容易地为代理添加新功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the last one is like uh if you go that direction is easy to customize because like you can much easier to adding a new capacity into the agent.</p>
</details>

我们通常为客户使用的是两个组件的链式解决方案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what we typically use for customer is using the two component chain solution.</p>
</details>

例如，我们使用30B的理解模型来生成回应，但如果用户查询很复杂，可能会使用一个经过微调的更大模型作为工具来同步思考。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So um you have uh for example we using 30B understanding model to generate response but if the if the user query is complex maybe using a fine-tuned larger model to do syncing as a tool use.</p>
</details>

然后它会进入一个生成模型来生成回应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so then it goes to one bit generation model to generate the response.</p>
</details>

现在所有这些模型都基于同一个大型语言模型，但你可能会通过不同的数据混合进行持续预训练或微调。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Nowadays all this model is based on single is the same large language model all based on the same uh LLM but you kind of either continually pre-trend or fine-tuned with different data mixture.</p>
</details>

例如，对于理解模型，你需要大量不同质量的音频，你可能还需要大量低质量的音频，因为你希望理解模型生成回应。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example for the understanding you need to have many of hours of really different quality of audios you maybe want to have a lot of low quality audios also because you want the understanding model generate a response you want to have a lot of text tokens to to to continue as well.</p>
</details>

否则，它就只是一个音频模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Otherwise, it's just the audio model.</p>
</details>

对于生成模型，你需要更多高质量的音频时长。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The generation model, you want to have an even more high quality a um hours of audios.</p>
</details>

大型语言模型，你可能希望在一些领域特定数据上进行训练。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The larger language model, you kind of want to train on some domain specific data.</p>
</details>

这种架构使得定制变得容易，因为理解和生成是通用的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this this architecture makes easy to customize because this is kind of like understanding and the generation is kind of general purpose one.</p>
</details>

你拥有这些模型，可能可以在不同的场景中使用，但如果你进入特定的场景，你只需微调这些模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um you you have this model you can maybe can use in different scenario but if you go to particular scenario you just fine-tune this model.</p>
</details>

如何同时获得智能和低延迟是语音代理的关键。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the how to get both intelligence and low latency that's a key for voice agent.</p>
</details>

这里有很多想法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">once there's bunch of idea here.</p>
</details>

首先，你希望同时进行听和思考，比如你一边听一边生成回应，逐句进行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">first of all you want to lessen talk and sync at the same time like you you listen and you generate a response sentence sentence.</p>
</details>

然后在此期间，你可以异步调用大型通用模型进行思考，也许你想更好地回应，也许你想更好地进行搜索，但所有这些都可以异步进行。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then between that while you call the large generic model to think maybe I want to respond uh better maybe I want to do some search better but all the thing can be uh asynchronously.</p>
</details>

另一个是**上下文工程**（Context Engineering: 动态构建和优化给AI模型的输入上下文，以提高其理解和生成能力），这比**提示工程**（Prompt Engineering: 设计和优化给AI模型的指令以获得最佳输出）更进一步。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the other one is like you want to do context engineers like it's a one step be beyond prompt engineer.</p>
</details>

因为对于你的问题，你可能有一个非常长的上下文，比如产品信息和所有销售手册，可能有10万个token。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">that's because for your problem you maybe have a very long context like the product information and also all the playbooks kinds of like maybe uh 100k tokens.</p>
</details>

你需要进行工程，你需要动态地生成内容，生成提示的上下文。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you want to do engine you want to dynamically generate um construct the content the cont context generate uh the prompt.</p>
</details>

另一个是你有一个组织者，它处理不同的策略，比如“你认为这是哪种用户？”然后思考不同的策略，并进行意图分析，例如如何计算意图，并进行实时任务跟踪。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the Another thing like you have uh you have organizer which is handle different strategy like okay this kind of what kind of user you think this uh user is and then think about different strategy and also do intent analysis for example how to count the hunt and some do uh live task tracking.</p>
</details>

所有这些结合在一起，你就可以同时获得智能和低延迟。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so all the thing a lot of uh together you can get both intelligence low latency.</p>
</details>

### 项目进展与持续挑战

这就是我们项目进展的情况。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so that's kind of the project progress we did like uh it started this year we partner with uh Fortune 500 insurance leader.</p>
</details>

它从今年开始，我们与一家**财富500强保险公司**（Fortune 500 insurance leader: 财富500强榜单上的领先保险公司）合作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it started this year we partner with uh Fortune 500 insurance leader.</p>
</details>

我们在1月和2月开始使用GPT-4，得到了大约55分。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so we start here January February you have using chap GD4 you got this like kind of uh 55 score.</p>
</details>

但问题是，你需要通过这条线，人类的表现是80分，你必须通过这条线才能发布。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but the thing is like you need to pass this line this human is a human performance it's 80 you must pass this line to be launched.</p>
</details>

你可以看到我们非常努力，但随后稳步进步，直到能够与人类表现匹配。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you can see like you struggle a lot and but then you have steadily progress into and how you you can match human it take hands of half a year or three quarters.</p>
</details>

这实际上花费了半年或三个季度的时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">actually the lessons here is that the evaluation of the end to end voice agent is pretty challenged like because you need have a real human to make a call.</p>
</details>

这里的教训是，端到端语音代理的评估非常具有挑战性，因为你需要真正的人类打电话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">actually the lessons here is that the evaluation of the end to end voice agent is pretty challenged like because you need have a real human to make a call.</p>
</details>

一旦你有了电话，就更难进行自动化评估。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once you have a core, it's much harder to do like uh like automatic evaluation.</p>
</details>

但这是关键，如果你没有这个，就很难知道整个端到端性能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and but that's a key if you don't have this one is it's really hard to know the whole end to end performance.</p>
</details>

这仍在进行中，实时处理复杂的产品组合仍然相当困难。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this is ongoing is that handling complex product compilation in real time still pretty difficult.</p>
</details>

比如对于保险，你有很多产品组合，如何处理它们？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like for insurance you have lot of product compilations how to handle them.</p>
</details>

价格不同，也许我说“这个太贵了”，我想要一个便宜的解决方案，那么你需要为他们选择合适的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the price different maybe I I okay that's too expensive for me and I want a cheap solution then you need to pick up the right one for them.</p>
</details>

最后一个是高安全设定使得成本更高。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The last one the high security setting make the cost higher.</p>
</details>

我们有小组讨论，讨论如果只有开放模型，也许在B2B领域不会占据主导地位。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have the panel discussion talk about if there's only open maybe dominant words under the 2B areas not the reason is because for insurance if it launch in different country the model cannot go the data cannot go out of this country or even more the data cannot go outside the security group of the company.</p>
</details>

原因在于，对于保险，如果它在不同国家推出，模型不能离开这个国家，数据也不能离开这个国家，甚至数据不能离开公司的安全组。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the reason is because for insurance if it launch in different country the model cannot go the data cannot go out of this country or even more the data cannot go outside the security group of the company.</p>
</details>

所以，要么你可以在自己的账户上租用GPT模型运行，要么你需要开发自己的模型。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So either way you can rent um GPT model off uh on your uh account running on your account or you need to you need to develop your own model.</p>
</details>

这就是为什么所有这些都面临挑战。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's why all the things struggling here.</p>
</details>

这也是为什么我们投入了如此多的精力自己开发整个模型，而不是仅仅使用开源API。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so also that that's why we spend so many efforts to develop the whole models by ourself rather than just maybe proper engineer open source uh just API.</p>
</details>

### 结论与未来展望

我展示了我们过去两年中如何开发语音代理的两个例子。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I showed two examples how we developed voice agent in the past kind of two years.</p>
</details>

我们得到的教训是，语音代理具有高度可扩展性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The lesson we got like the voice agent are pretty highly scalable.</p>
</details>

即使游戏设定和保险设定非常不同，但技术上，模型架构和技术是相同的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">even that the GAN setting the insurance settings are very different but the technology wise same model architecture same technologies here.</p>
</details>

唯一不同的是数据可能略有不同，评估也略有不同，你需要投入很多人力。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">only things like maybe data is a little bit different and the evaluation is a little bit different you need to spend a lot of people on that one.</p>
</details>

但模型架构以及你如何进行后训练、预训练，所有这些方法都是相同的，从游戏到电话营销员。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but um the model architecture and also the methods how you post train how you pre-trend how you like all the things it's the same same from game to tenn marketer.</p>
</details>

游戏要求有趣，电话营销要求非常精确，但要非常小心地处理用户输入。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">it's very different one game you want to be fun tenant marketing you want to be very precise but handle the user input very carefully.</p>
</details>

但仍然，我认为现在它能够在这些领域落地，但仍处于初期阶段。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but still like I think right now it's able to long landing in this areas but still on the day one setting.</p>
</details>

原因是，对于游戏，现在只是一个非常简单的游戏，单一角色，小世界设定。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the reason is like for game it's just a very simple game right now single character a small word setting.</p>
</details>

但如果你想做真正多角色的、真正大型的世界设定，现在仍然非常困难。
<details>
<summary>View/Hide Original English</p>
<p class="english-text">and but how about you want to do a really multiple character really large water sellings that's really hard right now.</p>
</details>

对于电话营销，我们现在可能可以销售特定公司的大约五种不同的健康保险，带有一定的组合。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">for tele marketing right now we can maybe sell kind of five different in health insurance for particular company with some certain of compilation compilations.</p>
</details>

如何销售通用产品？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is how to sell general purpose.</p>
</details>

我认为一般来说，这种电话营销非常适合销售价格在500美元到5000美元之间的任何产品。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think in generally this tele market is really good for any product between $500 to $5,000 that's r is really good for this tele mark to sell.</p>
</details>

但现在，如果你使用这种训练模型来销售任何任意的新产品，仍然需要大量的调整。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but right now uh if you use this trend model to sell any arbitrary new products you still need a lot of tuning right now.</p>
</details>

此外，还有很多其他场景，比如以前的客户服务，所有这些都基于大型文本模型，现在你可以为这些应用添加语音界面。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">also there are a lot of other scenarios like before it's like customer service all the things based on larger lo uh just text large model right now you can adding a voice interface to this application.</p>
</details>

所以这里有很多应用。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so there are a lot of applications here.</p>
</details>

所以我认为这就是为什么我们现在能够落地产品，但仍然处于初期阶段。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I think that's why I think we can we able to land to product right now but still on day one.</p>
</details>

所以我们可能还有几年激动人心的时光。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so we have maybe another few exciting years to.</p>
</details>

最后，如果你有兴趣与我们合作，请联系我们。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lastly, if you're interested to work with us or partner with us, just contact us.</p>
</details>

我们有一个展位，我们的联合创始人会在这里。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have a booth. You're going to be here. Our co-founder will be here.</p>
</details>

欢迎与我们交流。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome to talk to us.</p>
</details>

是的，就这些。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, that's all.</p>
</details>

谢谢大家。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks everyone.</p>
</details>