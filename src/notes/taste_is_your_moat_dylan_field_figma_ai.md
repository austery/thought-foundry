---
title: 'Taste is Your Moat: Dylan Field on Design, AI, and the Future of Creation'
summary: Dylan Field, founder of Figma, discusses the evolution of Figma's mission
  from idea to reality, the transformative role of AI in design and software development,
  and why taste and craft are becoming the ultimate differentiators in a world of
  abundant creation.
area: tech-insights
category: technology
project:
- ai-impact-analysis
- vibe-coding
tags:
- ai
- design-system
- product-design
- software-development
people:
  - Allesio
  - Dylan Field
companies_orgs:
- figma
products_models: []
media_books: []
date: 2025-10-03
author: Lei
speaker: ''
draft: true
file_name: taste_is_your_moat_dylan_field_figma_ai.md
guest: ''
insight: null
layout: post.njk
series: null
source: null
status: evergreen
---
### Introduction and Figma's Mission

Allesio: Hey everyone, welcome to the Inspace podcast. This is Allesio, founder of Colonel Labs, and so happy to be at the Figma office today with Dylan Field. Welcome.

Allesio: 大家好，欢迎来到 Inspace 播客。我是 Colonel Labs 的创始人 Allesio，今天非常高兴能在 Figma 办公室与 Dylan Field 一起。欢迎你。

Dylan: Thank you. Thanks for having me on the podcast and welcome to the Figma office.

Dylan: 谢谢。感谢你邀请我上播客，也欢迎来到 Figma 办公室。

Allesio: We almost couldn't choose where to do this because there are so many beautiful spaces in it, but we finally decided with this corner. Super excited to have you on today. I was reading through some of the history of Figma and your initial mission was to close the gap between imagination and reality. If I heard that today, I would assume it would be the slogan of one of the web coding platforms. So maybe talk about what was the first moment where you felt we should take AI seriously. The first phase of Figma was like helping designers bring what they had in their mind into a canvas, and now with Figma Make, you're obviously moving to a much broader audience. So what was the journey to get there?

Allesio: 我们几乎无法决定在哪里录制，因为这里有太多漂亮的空间了，但最终我们选定了这个角落。今天能请到你真的非常激动。我读了一些关于 Figma 的历史，你们最初的使命是“缩小想象与现实之间的差距”。如果我今天听到这句话，我会以为是某个网络编码平台的口号。所以，或许可以谈谈，你第一次觉得应该认真对待 **AI**（人工智能：使计算机能够模仿人类智能和行为的科学与工程领域）是在什么时候？Figma 的第一阶段是帮助设计师将他们脑海中的想法呈现在画布上，而现在通过 Figma Make，你们显然正在面向更广泛的受众。那么，这一路的历程是怎样的呢？

### Early Explorations in AI and Computational Photography

Dylan: If you go back far enough, AI showed up in different forms for Figma. I had the chance to be on the data science team at LinkedIn as an intern prior to working at Flipboard and getting more into design and then starting Figma. We were doing a lot of more classical machine learning approaches and I was absorbing that. There was plenty of discussion about agents back then with my mentor Pete Skomro and thinking through what it might look like if some of the ideas from the '90s were to resurface. Those were just fun, geeky conversations that were pretty abstract because obviously the world wasn't there yet.

Dylan: 如果追溯得足够久远，**AI** 以不同的形式出现在 Figma 的视野中。在创办 Figma 之前，我曾在 Flipboard 工作并更多地接触设计，再之前我曾在 LinkedIn 的数据科学团队实习。当时我们正在做很多更经典的**机器学习**（Machine Learning：人工智能的一个分支，专注于构建能够从数据中学习和改进的系统）方法，我也在吸收这些知识。那时候，我和我的导师 Pete Skomro 进行了大量关于代理（agents）的讨论，思考如果90年代的一些想法重新浮现会是什么样子。那些都只是些有趣、极客式的对话，相当抽象，因为很明显，当时的世界还没有准备好。

Dylan: Then back at Brown with Evan, my co-founder and our original CTO, who's no longer at Figma but an absolute legend—just check out his GitHub if you're not convinced of that—he and I were talking a lot about some of the stuff we're starting to see as sort of ML and computational photography approaches to doing image editing and what could be accomplished with that. For example, there were papers being written about how do you use internet-scale data to complete scenes and make it so you can basically do the equivalent of content-aware fill, but instead of doing it in an algorithmic deterministic way, how do you do that based on the entire internet? We thought that was a pretty fascinating concept. And there's a professor at Brown who was doing some cool research in this area.

Dylan: 后来回到布朗大学，我和我的联合创始人、我们最初的 CTO Evan——他现在已经不在 Figma 了，但绝对是个传奇人物，不信的话可以去看看他的 GitHub——我们聊了很多当时开始出现的，算是机器学习和计算摄影在图像编辑领域的应用，以及这些技术能实现什么。例如，当时有些论文在研究如何利用互联网规模的数据来补全场景，基本上实现类似“内容感知填充”的效果，但不是通过算法确定性的方式，而是基于整个互联网的数据。我们觉得那是个非常吸引人的概念。布朗大学也有一位教授在这个领域做一些很酷的研究。

Dylan: We also were getting very excited in the early days of Figma, before we even incorporated, about stuff like how do you turn a 2D image into a 3D scene. So more computational photography, Poisson blending, and some of these early techniques that you kind of get 85% of the way there to something awesome, but not 100%. And it wasn't until we really had deep learning that you could get to 100%. But all of these individual demos that we were able to work on—and by we, I mean mostly Evan, he's the real genius in the equation here—but as we started to explore a bunch of these areas, it just felt like there must be some way to make creation easier.

Dylan: 在 Figma 的早期，甚至在我们公司成立之前，我们就对一些事情感到非常兴奋，比如如何将2D图像转换成3D场景。这更多地涉及到计算摄影、泊松融合（Poisson blending）以及一些早期的技术，这些技术能让你达到85%的惊艳效果，但还不是100%。直到**深度学习**（Deep Learning：机器学习的一个子领域，使用多层神经网络从大量数据中学习）的出现，才真正能达到100%。但所有这些我们能够研究的独立演示——当我说“我们”时，主要指的是 Evan，他才是这个等式中真正的天才——当我们开始探索这些领域时，我们感觉一定有办法让创作变得更简单。

### From Idea to Reality: The Vision for Figma

Dylan: And so that's why the vision was stated as idea to reality and not like idea to X as a subset of reality, because we thought actually you could do this for a lot of different areas, and I still do. But we're starting with a design product and fast forwarding to today with Figma Make, for example, we're really trying to make it so that you can go from idea in your head to an actual shipped product as fast as possible. That might take the direction of an internal prototype to explore different ideas. It might be an internal app that you're using. This morning I was doing some work on random data munging, but I was using Make for it, which is kind of fun, rather than writing a Python script.

Dylan: 所以，这就是为什么我们的愿景被表述为“从想法到现实”，而不是“从想法到现实的某个子集X”，因为我们认为这实际上可以应用于许多不同的领域，我至今仍然这么认为。但我们从一个设计产品开始，快进到今天，比如有了 Figma Make，我们真正想做的是让你能以最快的速度，将脑海中的想法变成一个实际发布的产品。这可能是一个用于探索不同想法的内部原型，也可能是一个你内部使用的应用程序。今天早上我还在做一些随机的数据处理工作，但我用的是 Make，这很有趣，而不是去写一个 Python 脚本。

Dylan: I think it's very exciting to think about how far you can help people go and how you can make them both more productive but also help them explore more of the option space of design with some of these techniques. And then of course we're also excited about what that means in Figma design as well. How do you prompt to edit, prompt to do generation, and do it in a way that's consistent with everything else that's in your design system, the patterns you are using, and how do we actually infer from what's already inside of Figma what you want to do and really be expansive in the way that we understand your intent.

Dylan: 思考你能帮助人们走多远，如何让他们变得更高效，同时借助这些技术帮助他们探索更多设计选项的空间，这是一件非常令人兴奋的事。当然，我们也很兴奋地想知道，这在 Figma Design 中意味着什么。如何通过提示进行编辑、生成，并使其与你**设计系统**（Design System：一套用于设计和开发产品的可复用组件、模式和指南的集合）中的其他所有内容、你正在使用的模式保持一致？我们如何从 Figma 内部已有的信息中推断出你想要做什么，并真正扩展我们对你意图的理解。

### The "AI Pill" Moment

Allesio: So you have a background in obviously math and CS and now you run Figma. So you have this kind of duality of aesthetics and code. Were you first AI-pilled by the image generation, kind of more creative things? I think early on in the podcast, most people would say Midjourney was their favorite AI product and another half of people will say GitHub Copilot. What was your first product that you fell in love with, with AI?

Allesio: 你有数学和计算机科学的背景，现在又在运营 Figma，所以你身上有一种美学与代码的二元性。你最初是被图像生成这类更具创造性的东西“点醒”的吗？我想在播客早期，大多数人会说 Midjourney 是他们最喜欢的 AI 产品，另一半人会说是 GitHub Copilot。你第一个爱上的 AI 产品是什么？

Dylan: Not a product, but my first like AI pill moment was, I think it was like 2014 or so, maybe a little bit earlier. I was a Thiel Fellow and in my class was a number of amazing people, but one of which was Chris Olah. Chris and I would be going to these retreats together for the Thiel Fellowship every 3 to 6 months. I remember one of them, Chris had been working on some cool like Haskell 3D generation stuff and it was all a bit out there and not clear how it would be productized. At some point he was just like, "deep learning neural nets, this is the future of everything." I remember him sitting down with me. We were at a wooden table outside in some Santa Cruz nature setting and he's on the Wi-Fi, which is super slow, connecting to AWS.

Dylan: 不是一个产品，但我第一次被 AI “点醒”的时刻大概是在2014年左右，或者更早一点。当时我是泰尔奖学金（Thiel Fellow）的一员，我那一届有很多了不起的人，其中之一是 Chris Olah。我和 Chris 每3到6个月就会一起参加泰尔奖学金的静修活动。我记得有一次，Chris 当时在做一些很酷的 Haskell 3D 生成之类的东西，感觉有点超前，也不清楚该如何产品化。在某个时刻，他突然就说：“深度学习神经网络，这就是一切的未来。” 我记得他和我坐下来，我们当时在圣克鲁斯某个自然环境中的一张木桌旁，他连着非常慢的 Wi-Fi 登录 AWS。

Dylan: He's like, "Look at this. I can go on AWS and I can spin this up and I can train this tiny neural net to classify handwritten digits." I'm like, "Chris, this is a solved computer vision problem. Why are you excited?" And he's like, "No, you don't get it. It's a neural net and there are hyperparameters. I can tweak them. I think I can actually make another neural net to figure out how to tweak the hyperparameters." I'm like, "That's all great, but this is a solved problem." I lacked the vision at that point to see where it was going.

Dylan: 他说：“看这个。我可以在 AWS 上启动它，训练这个小小的神经网络来分类手写数字。” 我说：“Chris，这是个已经解决的计算机视觉问题。你为什么这么兴奋？” 他说：“不，你不懂。这是个神经网络，有超参数。我可以调整它们。我想我甚至可以再做一个神经网络来找出如何调整这些超参数。” 我当时就想：“这都很好，但这是个已经解决的问题。” 那时我缺乏远见，没看到它的发展方向。

### The Exponential Growth of AI

Dylan: But it started to get me to pay more attention. And then watching his work when he was at Google, some of the great blog posts he was doing, as well as starting to listen in on more of people around me and the conversations that were happening around AI and machine learning, got me more and more excited about where this might go. But I don't think I truly internalized scaling laws for quite a while longer and what that could mean. But I think GPT-3 was probably the first time that I was like, "Wow, the delta between this and past models is so great. Something exponential is definitely happening here. It's not just hype."

Dylan: 但这开始让我更加关注。后来，我关注他在谷歌的工作，他写的一些很棒的博客文章，也开始更多地倾听周围人关于 AI 和机器学习的对话，这让我对这个领域的未来越来越兴奋。但我认为，我在很长一段时间里都没有真正内化规模法则（scaling laws）以及它可能意味着什么。不过，**GPT-3**（生成式预训练变换模型3：OpenAI 开发的大型语言模型，以其强大的文本生成能力而闻名）可能是我第一次感到：“哇，这个模型和过去模型的差距太大了。这里肯定发生了指数级的变化，这不仅仅是炒作。”

Dylan: And then, plenty of conversations around that time with other AI figures that we both know well definitely started to make me think, "Okay, there's something very important to focus on here." But I think it's very different to be in a context of more deterministic software building than AI research. There are completely different motions of how you run those teams in those areas. And so it definitely took us a lot longer than starting at "Okay, GPT-3 is amazing" to get to the point where we're starting to ramp up and push the boundaries of what might be possible at Figma.

Dylan: 接着，在那个时期和我们都熟知的一些 AI 人物进行的大量对话，确实让我开始思考：“好的，这里有非常重要的事情值得关注。” 但我认为，身处一个更具确定性的软件构建环境，与从事 AI 研究是截然不同的。在这些领域里，管理团队的方式完全不同。所以，从我们认识到“GPT-3 很了不起”到开始加速并推动 Figma 可能性边界的这个点，我们确实花了更长的时间。

### Natural Language as the New Interface

Allesio: No, that's great. And I would say Figma Make is one of the maybe most impressive releases I've seen this year. I was playing around with it the last few days. I built a Figma clone in Figma Make. So you guys are cooked. You let us...

Allesio: 不，这很棒。我想说 Figma Make 可能是我今年见过的最令人印象深刻的发布之一。过去几天我一直在玩它。我用 Figma Make 做了一个 Figma 的克隆版。所以你们完蛋了。你们让我们……

Dylan: ...or are you so back? I don't know.

Dylan: ……还是说你强势回归了？我不知道。

Allesio: I know. I don't know. So hard to keep up. It depends on the day. Tomorrow that might change.

Allesio: 我懂。我也不知道。太难跟上了。看情况吧。明天可能就变了。

Allesio: But to me, there's this interesting triad in software engineering which is you have the test, you have the spec, and you have the code. And you usually have, if you have two of the three, you can generate the third. I'm curious how you think about the Figma data model of you have Figma design, which is where the visual work happens, then you have Figma Make, which is basically in my mind the bridge between the design and the code, and then you have the Figma MCP, which is like how do you bring that into code in a way that it's not even UI driven, it just like the model is kind of doing the work for you. Does it feel like it's changing in a way the tools that you need to build? And how do you think about using AI for editing the design and whatnot? Do you feel like natural language is becoming more and more the interface even in design that the work is going to be done? What are the pieces in your mind?

Allesio: 但对我来说，软件工程中有一个有趣的三元关系：你有测试、有规范、有代码。通常情况下，如果你有其中两样，就可以生成第三样。我很好奇你如何看待 Figma 的数据模型：你有 Figma Design，这是视觉工作发生的地方；然后你有 Figma Make，在我看来，它基本上是设计和代码之间的桥梁；再然后你有 Figma MCP，它能把设计带入代码，甚至不是通过 UI 驱动，而是模型在为你工作。你是否觉得这正在改变你们需要构建的工具？你如何看待使用 AI 来编辑设计等工作？你是否觉得，即使在设计领域，自然语言也越来越成为完成工作的界面？在你看来，这些部分是如何组合的？

Dylan: Lots to unpack there. I'll start with just the "is natural language the interface." Yes. Right now. I've said this before but I really believe it. I think we'll look back on this era as the MS-DOS era of AI. And the prompting and natural language that everyone's doing today, I think is just the start of how we're going to create interfaces to explore latent space. So, I just cannot wait for an explosion of creativity there because I kind of think of these models as they're almost like an n-dimensional compass that lets you explore this wild unknown fog of war in latent space. And you can kind of push the models in different directions through natural language.

Dylan: 这里有很多东西可以展开。我先从“自然语言是否是界面”开始。是的，目前是。我以前说过，而且我坚信这一点。我认为，我们会把这个时代看作是 AI 的 MS-DOS 时代。今天大家都在用的提示（prompting）和自然语言，只是我们如何创造界面来探索**潜在空间**（Latent Space：在机器学习中，指数据被压缩后的一种低维表示，捕捉了数据的核心特征和关系）的开始。所以，我迫不及待地期待那里能爆发出一场创造力的革命，因为我把这些模型看作是一种 n 维罗盘，让你可以在潜在空间的未知迷雾中探索。你可以通过自然语言将模型推向不同的方向。

Dylan: But if you have a more constrained end there and you're able to dimensionality reduce a bit so you can push different ways, there should be other interfaces available than text. These might be more intuitive, but they also might be more fun to explore. And I think sometimes constraints unlock creativity in ways people don't expect. So I'm excited for that. But right now, yes, natural language is where we're at. And while I'm excited to push that forward, meet people where they are, I think is usually a good model for product development before you get to the point where you've really refined.

Dylan: 但如果你能有一个更受约束的终点，并且能够进行一些降维，以便你可以从不同方向推动，那么除了文本之外，应该还有其他可用的界面。这些界面可能更直观，探索起来也可能更有趣。我认为有时候，约束能以人们意想不到的方式释放创造力。所以我对此很期待。但目前，是的，自然语言就是我们所处的阶段。虽然我很想推动它向前发展，但我认为在真正完善之前，满足用户当前的需求通常是产品开发的好模式。

### The Evolving Role of Design Specs

Dylan: Going back to your triad, I think we can start with the spec. I think the notion of a spec is evolving so much right now, and what should be in a PRD versus what should be in design versus what should be in code. That is I think much more blurry than it used to be. It used to be that we had this very kind of waterfall-y process of, oh yeah, we're gonna go gather some requirements and then we're gonna go make a big doc and then we're going to go make some designs and we'll code it up. And we feel it's ready, maybe you go repeat and few times, but it was a process.

Dylan: 回到你提到的三元关系，我想我们可以从规范（spec）开始。我认为规范的概念现在正在发生巨大变化，关于产品需求文档（PRD）里应该有什么、设计里应该有什么、代码里应该有什么，这些界限比以前模糊多了。过去我们有一个非常瀑布式的流程：哦，我们去收集一些需求，然后写一个大文档，接着做一些设计，最后编码实现。当我们觉得准备好了，可能会重复几次，但它是一个固定的流程。

Dylan: And I think with Figma, you can absolutely follow that process, but also we recognize that roles are blurring, statuses are blurring. And as all that blurs, how do you actually support different ways of working? You might want to make a prototype as part of or in place of a PRD. You might actually want to focus more on the design as a high-fidelity descriptor of what this could mean if the cost to make design and to create designs is lower.

Dylan: 我认为，使用 Figma，你完全可以遵循那个流程，但我们也认识到角色正在模糊，状态也正在模糊。当这一切都变得模糊时，你如何真正支持不同的工作方式？你可能想制作一个原型，作为 PRD 的一部分，或者干脆替代它。如果制作设计的成本降低了，你可能更愿意将设计作为一种高保真度的描述符来阐述产品的含义。

### Design as a Differentiator in the AI Era

Dylan: And I think that the more that you can kind of expand that option space for people and bring them into a surface to align, design and visual fidelity might be the place where you actually can align best. And there's also the question of, okay, how far can a spec get you and why is a spec different than code. So if code is the complete spec in terms of it is the most determined, clear way to show intent of what should happen, every edge case, well how much of that can be inferred? I think it's an open question, but one that we'll all be thinking a lot about soon.

Dylan: 我认为，你越能为人们扩展这个选择空间，并将他们带到一个可以对齐的界面上，设计和视觉保真度可能就是你实现最佳对齐的地方。还有一个问题是，规范能带你走多远，以及为什么规范与代码不同。如果说代码是完整的规范，因为它最确定、最清晰地展示了意图，包括每个边缘情况，那么其中有多少是可以被推断出来的呢？我认为这是一个开放性问题，但我们很快都会深入思考。

Dylan: And if you think about the value stack overall, it feels to me that the better code generation gets, the more design matters. And the more that actually the human pushing on design matters too, because even if you have a good starting spot from your design system, from AI generation, whether it be code or image, you need to push design forward, not just as an individual screen, but as a system in order to actually compete, differentiate, and win. It's been our thesis for a long time: design is a differentiator. But I think it's even more true in this world where we're at now, where the rate of software creation is going exponential and maybe even vertical.

Dylan: 如果你从整体价值链的角度来看，我感觉代码生成技术越好，设计就越重要。实际上，人类在设计上的推动也变得更加重要，因为即使你从设计系统或 AI 生成（无论是代码还是图像）中获得了一个好的起点，你仍然需要推动设计向前发展，不仅仅是作为一个单独的屏幕，而是作为一个系统，这样才能真正竞争、脱颖而出并获胜。我们的论点一直都是：设计是差异化的关键。但我认为，在我们现在所处的这个世界里，这一点甚至更为真实，因为软件创造的速度正在呈指数级甚至垂直增长。

Dylan: And in that world, you have more software, there's more competition. So what wins? Well, it's brand, it's point of view, it's taste, it's craft, it's design. And I think if that's the world we're headed for, which I'm very confident it is, then it's not enough just to use AI to generate an output. I think you have to push further than that and really get in the detail into the craft, in addition to utilizing AI to explore the option space faster so you can go as deep as possible in the direction you choose.

Dylan: 在那样的世界里，软件更多，竞争也更激烈。那么，什么才能胜出？是品牌、是观点、是品味、是工艺、是设计。我认为，如果我们正走向这样一个世界——我对此非常有信心——那么仅仅用 AI 生成一个输出是远远不够的。我认为你必须更进一步，真正深入到细节和工艺中，同时利用 AI 更快地探索选择空间，以便在你选择的方向上尽可能深入。

### The Future of Design Systems and Code Generation

Allesio: I don't have code connect, but I'm curious how you think about that because the whole idea in my mind was, hey, instead of having to make sure that the code stays in sync with the design, we kind of build this bridge between the two. But now if you have the design, you can in theory every time regenerate the component anyway. So why add this maybe this additional layer that before was there is not needed anymore. To me, that's the most interesting thing. I was like, what's going to end up being the source of truth and what are like the two-way bridges? So for example right on Figma Make, I use the MCP to bring that code into Cursor, my actual codebase, but there's no way yet, I'm sure you'll do it, for the MCP to write back into the design and say we actually ended up implementing it this way. I'm curious where you feel like the center of gravity is going to be? Obviously you're biased in a way, but as an engineer, I'm curious your thoughts.

Allesio: 我没有使用 Code Connect，但我很好奇你对此的看法。因为在我看来，它的整个理念是，与其确保代码与设计同步，不如我们在这两者之间建立一座桥梁。但现在，如果你有了设计，理论上每次都可以重新生成组件。那么为什么还要增加这个以前需要但现在可能不再需要的额外层呢？对我来说，这是最有趣的地方。我在想，最终什么会成为事实的来源（source of truth），双向的桥梁又会是怎样的？例如，在 Figma Make 上，我用 MCP 把代码导入到我的实际代码库 Cursor 中，但目前还没有办法让 MCP 把代码的改动写回设计中，告诉设计“我们实际上是这样实现的”——我相信你们会做的。我很好奇，你觉得未来的重心会偏向哪一边？显然你会有一定的偏向，但作为一名工程师，我很想听听你的想法。

Dylan: Well first, I'll just explain Code Connect a bit more. To expand on what you already said, I think there's different situations that you might find yourself in. So, you might be going from zero to one, making a prototype of something that's rather disposable. You might be actually working on a personal project where you're not making something that's disposable. You're building on something that's existing, but the codebase is small. It's pretty clear what's going on to you and there's not a lot of patterns that exist. Or you might be in a pretty large codebase where there's a lot of existing patterns, a lot of code, and you're trying to fit those patterns.

Dylan: 好的，首先我来多解释一下 Code Connect。在你已经说的基础上，我认为你会遇到不同的情况。你可能正在从零到一，制作一个比较一次性的原型。你也可能在做一个个人项目，它不是一次性的，你是在已有的基础上构建，但代码库很小，你很清楚发生了什么，并且没有太多现成的模式。或者，你可能在一个相当大的代码库中工作，那里有很多现有的模式和大量的代码，而你正试图去适应这些模式。

Dylan: So especially in that last example, I think as you get to these larger codebases and larger settings inside of companies, it's very important to be consistent with existing patterns in the code. But also it's important to create a design system where you're able to create consistency at scale for designers and make it so that people are more efficient so they're not always recreating different buttons, etc. There's the world of Figma and design and there's the world of code. And there are advantages to having a source of truth in Figma and a source of truth in code.

Dylan: 特别是在最后一个例子中，我认为当你在公司里接触到越来越大的代码库和更复杂的环境时，与代码中现有的模式保持一致就变得非常重要。但同样重要的是，要创建一个设计系统，以便能够为设计师们大规模地创造一致性，让人们更高效，而不是总在重复造轮子，比如重新创建不同的按钮等。存在一个 Figma 和设计的世界，也存在一个代码的世界。在 Figma 中有一个事实来源和在代码中有一个事实来源，各有其优势。

Dylan: So in some cases, we look at libraries that customers make and they are one-to-one. The design components perfectly reflect the code components. In other cases, you're working on the next thing in Figma and that's not yet all built out in code, and both cases are important. In the case where you are one-to-one and there's more of that bijection between components in Figma and components in your codebase, you want to define a formal mapping so that way you're able to give context via MCP, make it so that developers are easily able to implement a design on the front end. And Code Connect serves that goal. We're doing a lot of investment to make it easier to set up because right now it's too much of a pain, but also trying to get further in terms of how many people can use Code Connect.

Dylan: 在某些情况下，我们看到客户创建的库是完全一一对应的，设计组件完美地反映了代码组件。在其他情况下，你是在 Figma 中处理下一个版本的功能，而这些功能还没有完全在代码中实现。这两种情况都很重要。在那种一一对应，Figma 组件和代码库组件之间存在更强双射关系的情况下，你会想要定义一个正式的映射关系。这样，你就能通过 MCP 提供上下文，让开发者能轻松地在前端实现设计。Code Connect 正是为此目标服务的。我们正在投入大量资源，让它的设置过程变得更容易，因为现在它实在太麻烦了，同时我们也在努力让更多的人能够使用 Code Connect。

Dylan: In terms of where the source of truth lies, I think there's a variety of ways it will probably play out in parallel. I think that it's okay if, for example, in some times that code is the source of truth, and you'll see us do a lot of work to make it so that you're able to bring your code-based design system into something like Figma Make or Figma Design. But also, if you're wanting to rapidly iterate and be able to express and try out different visual explorations, and if you think visually, if you are someone who's not necessarily at maximal comfort with code, I think a visual surface is very important as a place to explore.

Dylan: 至于事实的来源在哪里，我认为可能会有多种方式并行发展。例如，我认为在某些时候让代码成为事实的来源是可以的，而且你会看到我们做了很多工作，让你能够将基于代码的设计系统引入到像 Figma Make 或 Figma Design 这样的工具中。但同时，如果你想快速迭代，表达并尝试不同的视觉探索，如果你是视觉思考者，或者对代码不是那么得心应手，那么我认为一个可视化的界面作为探索的场所就非常重要。

Dylan: And I think there are different modes of thinking and it might be the case, I think it's likely the case, that the visual sort of metaphor is easier for a wider set of the population to grasp than to go into code. I also think that it's going to be something that as we move forward in time with more agents writing more parts of your codebase, you will also be less familiar with the code. And so then you might want a different abstraction where you're able to work on things and basically plan out what your app should be, what your software should be. And Figma can provide that.

Dylan: 我认为存在不同的思维模式，而且很可能视觉化的隐喻比直接进入代码更容易被更广泛的人群所理解。我还认为，随着时间的推移，当越来越多的代理（agents）编写你代码库的更多部分时，你对代码本身也会变得越来越不熟悉。到那时，你可能需要一个不同的抽象层，让你能够在上面工作，并规划你的应用应该是什么样，你的软件应该是什么样。而 Figma 可以提供这一点。

### Overcoming the Blank Canvas Problem

Allesio: I almost think of Figma as like the context repository for aesthetics. To me, as an engineer, the design product is not even that useful in a way as long as you can generate the components and I can do small tweaks. I think one of the big tailwinds that Figma has is Tailwind CSS, bringing a lot of this more like named classes as a way to define style and the way the Figma variables and your system is set up. For me, it's been once I saw Figma Make, I'm like, "Okay, now I get it." Before, when I had the blank Figma canvas, it's like I'm not talented enough to start from here. But if you can build an initial thing through AI, then I'm good enough to tweak it and then have that be now the bridge, and then I can take that in Cursor.

Allesio: 我几乎把 Figma 看作是美学的上下文知识库。对我来说，作为一个工程师，只要能生成组件并且我可以做一些微调，设计产品本身在某种程度上甚至不是那么有用。我认为 Figma 的一大顺风是 Tailwind CSS，它引入了大量类似命名类的方式来定义样式，这与 Figma 变量和你的系统设置方式很契合。对我来说，当我看到 Figma Make 的时候，我才恍然大悟：“好了，现在我明白了。” 以前，面对 Figma 的空白画布，我总觉得我没有足够的天赋从零开始。但如果你能通过 AI 构建一个初始版本，那我就有足够的能力去调整它，让它成为桥梁，然后我就可以把它导入到 Cursor 里。

Dylan: I think that what you're saying is super important as a point. The blank canvas problem is real. We're always trying to figure out for Figma Design, how do you make it less intimidating for someone to come in? How do you make this more approachable? And there's always tension between the power users of Figma Design, who would like every single power feature that you can imagine—you know, why can't you make a feature for everything in the CSS spec?—and on the other side of it is, okay, you've got someone coming in for the first time, technical, non-technical, whatever. Are they intimidated? Do they feel invited to go create something?

Dylan: 我认为你说的这一点非常重要。“空白画布问题”是真实存在的。我们一直在为 Figma Design 思考，如何让新用户感觉不那么望而生畏？如何让它更平易近人？这其中总有一种张力，一方面是 Figma Design 的重度用户，他们想要你能想象到的每一个强大功能——比如，为什么不能为 CSS 规范里的所有东西都做一个功能？——另一方面是，一个初次接触的用户，无论技术背景如何，他们会不会感到害怕？他们是否感觉被邀请去创造一些东西？

Dylan: And the first thing that can block people, regardless of our UI, is that blank canvas. So getting people from the place of "I have an intention" to actually putting something on that canvas is so important. And I think once you start getting people in that loop, then it's less intimidating. You have more that you want to explore. One of the things I'm excited about that we just actually shipped today is a way to copy designs from Make into Figma Design. And if you think about Figma Make as a just easier entry point for Figma Design, you know, it's like the flight simulator to the airplane cockpit or something, then perhaps you're able to make it so that that's an early entry point you go through and then you actually can do more than just tweaking components, but actually visually manipulate a design. And you might find that you actually can go faster that way than if you're doing it in code.

Dylan: 无论我们的用户界面如何，第一个能阻碍人们的就是那张空白画布。所以，让人们从“我有一个意图”真正过渡到在画布上放置一些东西，是如此重要。我认为一旦你让人们进入那个循环，它就不再那么吓人了。你会有更多想要探索的东西。我感到兴奋的一件事是，我们今天刚刚发布了一个功能，可以将设计从 Make 复制到 Figma Design。如果你把 Figma Make 看作是 Figma Design 的一个更简单的入口——就像是飞机驾驶舱前的飞行模拟器一样——那么，也许你可以让它成为一个早期的切入点，通过它，你不仅可以调整组件，还能真正地在视觉上操纵设计。你可能会发现，这样做比在代码里操作要快得多。

### The Challenge of Communicating Design Changes

Allesio: To me it's like it's easy to communicate what a diff in code is, but it's kind of hard to communicate in design in a way that I can then put into a LLM to apply. So, I'm curious how you think about that. It's like there's obviously the design is more than the sum of the components, right? It's like if you just took any piece that is in Figma individually, it doesn't look like anything, but when you put them together it looks great. How do you see the way people communicate design also change now that more of it needs to become language because of the interfaces?

Allesio: 对我来说，沟通代码中的差异（diff）很容易，但在设计中，很难用一种能输入到 **LLM**（大型语言模型：能够理解和生成人类语言的深度学习模型）中去应用的方式来沟通变更。所以我很好奇你怎么看这个问题。很明显，设计大于其组件的总和，对吧？如果你单独看 Figma 里的任何一个元素，它可能什么都不是，但组合在一起就很棒。既然现在因为界面的原因，更多设计需要通过语言来表达，你认为人们沟通设计的方式会如何改变？

Dylan: I might push back a bit on the "more of it becomes language" part, but maybe we can explore that later. It depends on exactly what you mean by that. But in terms of the way that we represent diffs, you can go to version history in Figma and see composites of diffs. You can make a new version at any point, and of course internally there is the journal of every single edit. I think there is opportunity there, to your point, around how do you basically use not just what's in Figma Design as a source of truth, but also the tool calls that were made via MCP and when they were made to understand what is the context that's changed since I last made a call. So that's an opportunity that I think is a smart one to point out.

Dylan: 我可能不太同意“更多设计会变成语言”这个说法，但我们之后可以探讨。这取决于你具体指什么。但就我们表示差异的方式而言，你可以在 Figma 的版本历史中看到差异的组合。你可以随时创建一个新版本，当然在内部，我们有每一次编辑的日志。我认为这里有机会，正如你所说，我们不仅可以把 Figma Design 里的内容作为事实来源，还可以利用通过 MCP 进行的工具调用以及调用时间，来理解自我上次调用以来上下文发生了什么变化。我认为你指出的这个机会非常敏锐。

### Figma's Role in Shaping Aesthetics

Allesio: When we had Greg Brockman, we talked about these purple and blue gradients kind of taking over the web because of all this training data. Do you feel a sense of responsibility in a way in Figma Make also to like set the new standard for what things should look like? And how much do you think about making that explicit for the user? Like, hey, I'm actually not going to—you need to make some aesthetic choices early on.

Allesio: 当我们邀请 Greg Brockman 时，我们谈到因为训练数据的原因，那些紫色和蓝色的渐变似乎正在占领整个网络。在 Figma Make 中，你是否也感到一种责任，要去为未来的视觉风格设定新的标准？你有多考虑向用户明确这一点？比如，“嘿，我不会替你做决定——你需要尽早做出一些美学选择。”

Dylan: I feel very strongly that across the Figma platform, we should do our best to find ways to help people explore more of the space of aesthetics rather than impose a personal viewpoint on aesthetics. That's a hard problem. But if we can accomplish that, I get very excited because if you can actually open that space up more and figure out how it applies to software to product design, then not only could we be in a place where we help you generate high-quality visual output, whether you're a trained designer or not, but also we could get to the place where you could be nudged into different directions that are underexplored relative to the design community and design history.

Dylan: 我非常强烈地认为，在整个 Figma 平台上，我们应该尽最大努力去找到方法，帮助人们探索更广阔的美学空间，而不是将个人的美学观点强加于人。这是一个难题。但如果我们能实现这一点，我会非常兴奋。因为如果你能真正打开这个空间，并弄清楚如何将其应用于软件和产品设计，那么我们不仅能帮助你——无论你是否是受过训练的设计师——生成高质量的视觉输出，还能引导你进入相对于现有设计社区和设计史而言尚未被充分探索的不同方向。

Dylan: It's like there's an ability to interpolate between different styles, different ideas, and AI can help you do that, but also the designer can then take that so much further. Regurgitating the median website is maybe where a lot of us are today, but where we need to get to is a place of really pulling out new styles.

Dylan: 这就像拥有一种在不同风格、不同想法之间进行插值的能力，AI 可以帮助你做到这一点，但设计师可以将其推向更远。重复生成中规中矩的网站，可能是我们今天很多人的现状，但我们需要达到的是一个能够真正创造出新风格的境界。

Dylan: And the other thing I'd say is, you look back at the Flash era of the web, we both grew up through that, and it was maybe not always high quality but dynamic, exciting, fun. This was an era where experimentation was happening. And then at some point it was like, okay, Steve Jobs gets up on stage and goes, "Flash is dead." You know, here's my new world. And a brief skeuomorphism phase, then Swiss minimalism, and we've all been in Swiss minimalism for quite a long time now.

Dylan: 我想说的另一件事是，回顾一下网络的 Flash 时代，我们都是在那个时代长大的。它可能不总是高质量，但它充满活力、令人兴奋、有趣。那是一个充满实验的时代。然后，在某个时刻，史蒂夫·乔布斯走上舞台说：“Flash 已死。” 这是我的新世界。然后是短暂的拟物化阶段，接着是瑞士极简主义，我们已经在这种风格中停留了相当长的时间。

Dylan: And I just think that again, going back to, okay, more software created than ever, what needs to happen? Well, designers need to push us forward, and that's going to mean an exploration and explosion of creativity and so many different visual styles that will be explored, so much more dynamism in interfaces, and new patterns emerging, especially as you start thinking about what are all the screen targets we're going to have. Those are going to explode too, and designers will have to think through that systematically. That's a big challenge and a big opportunity as well.

Dylan: 我只是觉得，回到那个点，软件的创造比以往任何时候都多，那么接下来需要发生什么？设计师需要推动我们前进，这意味着一场创造力的探索和爆发，将会有无数不同的视觉风格被探索，界面将更具动态性，新的模式将涌现，特别是当你开始思考我们将要面对的所有屏幕目标时。这些目标也将激增，设计师将不得不系统地思考这一切。这是一个巨大的挑战，也是一个巨大的机遇。

### Expanding the Role of the Designer

Allesio: My designer, James, has been working with me on our initial landing page and our product design, and he's almost like my latent space shepherd. It's like even if I had, even if Figma was AGI, I still wouldn't necessarily know what to ask for. I think that's what people a lot of time get wrong, which is like software is the same thing. It's like you could give a software AGI to anybody and it doesn't mean they could build great software.

Allesio: 我的设计师 James 一直在和我一起做我们最初的落地页和产品设计，他就像是我的“潜在空间牧羊人”。即使我拥有一个 **AGI**（通用人工智能：能够理解或学习人类能完成的任何智力任务的AI），即使 Figma 就是 AGI，我仍然不一定知道该要求什么。我认为这是人们经常误解的地方，软件也是如此。你可以把一个能开发软件的 AGI 给任何人，但这并不意味着他们就能创造出伟大的软件。

Dylan: Yes.

Dylan: 是的。

Allesio: Some people should have some sort of like personal Figma almost where it's like when you're generating images on ChatGPT or Midjourney, you should have some sort of aesthetics to draw from. How do you think about that evolution because you're going from a world where only designers work on your product to now it becomes a core part of a lot more constituents.

Allesio: 某种程度上，人们应该拥有一个类似个人 Figma 的东西，就像你在 ChatGPT 或 Midjourney 上生成图像时，你应该有一些可以借鉴的美学标准。你如何看待这种演变？因为你们正在从一个只有设计师使用你们产品的世界，转变为一个它成为更多群体核心工具的世界。

Dylan: In a world where design is the way you win, it's only natural that we need to get more people involved in the design process. That is not going to diminish the role of designers. In fact, I think it expands the role of designers, because then you have to shepherd people through the design process and help them go on a journey. It's like going from not even being aware of design, kind of blindly going through the world, to, "Oh man, aesthetics, they matter," to, "Oh, can we make it pop? Can we make it cool?" And then people start to actually think about, "Well, wait a second, I'm looking at one screen. What's the actual experience here? What is the entire flow?"

Dylan: 在一个设计是致胜关键的世界里，让更多人参与到设计过程中是很自然的。这并不会削弱设计师的角色。事实上，我认为这扩展了设计师的角色，因为你需要引导人们走过设计过程，帮助他们开启一段旅程。这就像从对设计一无所知、盲目地在世界中穿行，到“哦，天哪，美学很重要”，再到“我们能让它更酷炫吗？” 然后，人们开始真正思考：“等等，我只看到了一个屏幕。这里的实际体验是什么？整个流程是怎样的？”

Dylan: And then it's, "Okay, well, let's take mental models of how we can think about this experience and consider it in different ways. What are the potential different paths, metaphors, and experiences that we can create here and what are the abstractions that matter?" And then from there it's like, "Okay, wait a second, well, this all exists in the context of our brand, the greater culture of the moment, and the business constraints and all sorts of other things you might be optimizing for."

Dylan: 接下来是：“好吧，让我们用不同的心智模型来思考这个体验，从不同角度考虑它。我们能在这里创造出哪些潜在的不同路径、隐喻和体验？哪些抽象概念是重要的？” 再然后就是：“等等，这一切都存在于我们的品牌、当下的大文化背景、商业限制以及你可能需要优化的各种其他因素的背景之下。”

Dylan: I think more people coming into the design process can help add in context as well. And there's no reason why someone who's outside of design or doesn't call themselves a designer, whatever they identify as—engineer, product manager, CEO, whatever—everyone should be able to come in and say, "Okay, here's an idea." And the idea hopefully could be parsable in high fidelity to the standards of at least a design system and consistent so it's not distracting, because an idea should be evaluated on its own merits. But then from there, the actual exploration and making that great, that is a hard design task still.

Dylan: 我认为，让更多人参与到设计过程中，也能帮助增加上下文。没有理由说一个非设计领域的人，或者不自称为设计师的人——无论他们的身份是工程师、产品经理还是CEO——不能参与进来并说：“嘿，我有个想法。” 这个想法最好能够被高保真地解析，至少符合设计系统的标准并保持一致性，这样才不会分散注意力，因为一个想法应该根据其自身的价值来评估。但从那之后，真正的探索和把它做得出色，仍然是一项艰巨的设计任务。

Dylan: So how do we lower the floor for everyone coming in but also raise the ceiling, make it so designers can do even more and produce even greater work.

Dylan: 所以，我们如何为所有参与者降低门槛，同时又提高天花板，让设计师能做得更多，创造出更伟大的作品。

### The "Fast Fashion" Era of Software

Allesio: There's a fundamental shift in both how people perceive software. I think Sam tweeted about the fast fashion era of SaaS, but there's also a negative connotation to fast fashion. But I feel like in software it's like, man, if you can get the software that you need at any moment, that's not a cheap thing, that's an expensive thing that is now being made cheap and it's still high value. And I'm curious like how different products are going to drive that even though it feels like, "Hey, I just created this for you very quickly," but there was so much that went into that, that is maybe sometimes undervalued. So, I'm curious if there's something that you think about where, okay, in a way people should come to Figma and do a lot of work, but maybe in a way we can kind of help you from all the work you've done in the past kind of come to the right result much faster in the future.

Allesio: 人们对软件的看法正在发生根本性的转变。我记得 Sam 发推文提到了 SaaS 的“快时尚”时代，但“快时尚”带有一些负面含义。但在软件领域，我觉得，如果你能随时获得你需要的软件，那不是一件廉价的事情，而是一件曾经昂贵但现在变得便宜、却依然具有高价值的事情。我很好奇，不同的产品将如何推动这一趋势，即使它给人的感觉是：“嘿，我很快就为你创建了这个，”但其背后可能有很多有时被低估的工作。所以，我很好奇你是否思考过，一方面人们应该来 Figma 做很多工作，但另一方面，我们或许能利用你过去所有工作的积累，帮助你在未来更快地得到正确的结果。

Dylan: Well, I think especially in the context of teams where they've done a lot of work in Figma, of course, there are patterns that with that team's consent, you can tap into and figure out how to help improve outputs. But I do have a little skepticism about the fast fashion interpretation. I just think that where we're currently at, at least with the models—and of course we're on this trajectory, whether we're on an S-curve or an exponential, or it's an S-curve that'll turn into an exponential, I don't know, maybe you've got a point of view, but I was kind of like, "Okay, I'm excited for the ride."

Dylan: 我认为，特别是在团队环境中，如果他们在 Figma 中做了大量工作，当然，在团队同意的情况下，你可以利用其中的模式来帮助改进产出。但我对“快时尚”的解读持有一点怀疑态度。我认为，至少就我们目前所处的模型水平而言——当然我们正处于一个发展轨道上，无论是S曲线还是指数曲线，或者是一个会转变为指数曲线的S曲线，我不知道，也许你有你的看法，但我更像是：“好吧，我很期待这段旅程。”

Dylan: My strategy should always be, "Okay, assume AI models get better and make sure that makes Figma better." As long as I believe that's true, I'm happy. If not, change strategy. That's the algorithm. But wherever you're at, I think that in terms of that interpretation of where models are going, I don't think the world is in a place today where the fast fashion era is here.

Dylan: 我的策略应该永远是：“好的，假设 AI 模型会变得更好，并确保这能让 Figma 也变得更好。” 只要我相信这是真的，我就很高兴。如果不是，就改变策略。这就是我的算法。但无论你处于哪个阶段，我认为就模型发展方向的解读而言，我不认为今天的世界已经进入了“快时尚”时代。

Dylan: And I also think that so much of designing software is doing it in a way where many people can use it. It's rare I think that you've got an individual piece of software that is truly just for you. I think it's awesome that more people are exploring their ideas and creating software and tools for them. But then the next step if they want to go further is, "Okay, how do I make this good for other people too?" And in a setting where people are trying to learn software, most people learn it from other people. So now you're in the same place you were before. You had a piece of software, you made it just for you. You decided actually this applies to other people, the problem that you solved. Now you got to have something that is probably consistent enough to actually share with others so they can learn it and it gets adopted.

Dylan: 而且我认为，设计软件的很大一部分工作是要让很多人都能使用它。我认为，真正只为你一个人设计的软件是很少见的。更多人探索自己的想法并为自己创造软件和工具，这很棒。但如果他们想更进一步，下一步就是：“好的，我如何让它对其他人也好用？” 在人们学习软件的环境中，大多数人都是向他人学习的。所以你又回到了原来的起点。你有一个软件，只为自己做的。你决定，你解决的这个问题其实也适用于其他人。现在，你就需要一个足够一致的东西，可以分享给别人，让他们学习并采纳。

Dylan: I think that's just not something I see happening in any near-term future, even as longer-running agents start to occur and we've got better capabilities. That's a long ways out. Now maybe that's a high bar, but you look at the actual workflows that happen with the very big SaaS applications. Let's consider Workday for example, or Salesforce. A lot of CIOs would love to go, "Okay, yeah, I've web-coded Workday and I just saved my company all this money," or whatever. But okay, you actually peek under the hood of a Workday or a Rippling, these are very complex pieces of software that have accounted for every edge case that you can run into. And so I'm skeptical that without that knowledge of the workflows that people will encounter, people will actually make something that can scale.

Dylan: 我认为这在短期内不会发生，即使是更长运行时间的代理出现并且我们拥有了更强的能力。那还很遥远。也许我设的门槛很高，但你看看那些大型SaaS应用的实际工作流程。比如Workday或Salesforce。很多CIO会很乐意说：“好的，我用网络编码实现了Workday，为公司省了一大笔钱。” 但实际上，如果你深入了解Workday或Rippling的内部，你会发现它们是极其复杂的软件，考虑了你可能遇到的每一个边缘情况。所以我很怀疑，如果没有对人们会遇到的工作流程的了解，人们是否能真正做出可扩展的东西。

### The Enduring Value of Software

Allesio: I think that's the bull case for software still being helpful post-AGI, whatever that means, because in a way you still need to prompt the AGI. And I think you're going to end up having these interfaces that again, just like you, you're going to help people explore the latent space and design. There's going to be a way for interfaces to like compress the way that information gets passed through the system.

Allesio: 我认为这就是软件在后 AGI 时代（无论那意味着什么）仍然有用的看涨理由。因为在某种程度上，你仍然需要去提示 AGI。而且我认为最终会出现一些界面，就像你们一样，帮助人们在设计中探索潜在空间。会有某种界面来压缩信息在系统中传递的方式。

Dylan: It's interesting. If you look at data analysis, maybe break it up into a few things that have to go right. You need to have first of all trust that the right queries are being written in the correct way. And that's a lot of trust, because if you get that wrong, you have a bad, shaky foundation for the rest of your experience. Then there's, "Okay, what's the next query?" I'd probably be more bullish about AI predicting your next query or a follow-up than I am about a 100% rate on the query being constructed correctly.

Dylan: 这很有趣。如果你看数据分析，也许可以把它分解成几个必须做对的事情。首先，你需要信任查询是以正确的方式编写的。这需要很大的信任，因为如果搞错了，你后续的体验就会建立在一个糟糕、不稳固的基础上。然后是：“好的，下一个查询是什么？” 我可能对 AI 预测你的下一个查询或后续操作更乐观，而不是对查询100%正确构建这件事。

Dylan: And I think if you were to show people some prompts around "Here are example next queries you might want to run," that might spark other ideas they have for follow-up questions that further their analysis. But then there's also how do you display the data and the visualization itself? Yeah, there's canonical visualizations we're all used to, but I think visualization is fascinating and we've only scraped the surface in terms of how we can visualize data.

Dylan: 我认为，如果你向人们展示一些关于“这是你可能想运行的下一个查询示例”的提示，可能会激发他们提出其他后续问题的想法，从而进一步深化分析。但还有一个问题，就是你如何展示数据以及可视化本身？是的，有一些我们都习惯了的经典可视化方式，但我认为可视化是一个迷人的领域，我们在如何可视化数据方面才刚刚触及皮毛。

Dylan: I think that especially as you get to larger data sets, more complexity, and you're really trying to communicate data to people, that is one of the most interesting design problems out there. Like how do you communicate how much money in the budget of the federal government is spent where? People have tried so many times. I've never seen something that is clear and actually gives you any sense of scale that you can relate to. And how do you communicate the data inherent in biology to a layman person who hasn't studied biology? Like again, people have tried. It's a very hard problem, and maybe breaking it into sub-problems, but still there's so much to push on there.

Dylan: 我认为，特别是当你处理更大数据集、更复杂情况，并且你真的想向人们传达数据时，这会成为最有趣的设计问题之一。比如，你如何传达联邦政府预算中的钱都花在了哪里？人们尝试了很多次。我从未见过一个清晰且能让你感同身受地理解其规模的方案。你又如何向一个没有学过生物学的外行传达生物学中固有的数据？同样，人们也尝试过。这是一个非常困难的问题，也许可以把它分解成子问题，但仍然有太多可以深入的地方。

### Angel Investing and Contrarian Thinking

Allesio: I know you do a lot of angel investing, so I'm also curious about how you think about startups and what kind of products are now possible that maybe weren't before? What products should people stop pursuing because you think they will be a part of the models?

Allesio: 我知道你做了很多天使投资，所以我也很好奇你如何看待初创公司，以及现在有哪些以前不可能的产品变得可能了？又有哪些产品人们应该停止追求，因为你认为它们会成为模型的一部分？

Dylan: First of all, I'm hesitant to give advice on that because I think that the idea that all software or lots of software will exist in a session with an LLM or any model, I think that's a little overblown. There's so many different ways this could work out. And I think that it's often the case that you've got some space that a thousand people are starting a thousand companies in, and everyone's going, "Oh, don't go there, it's too crowded." But then one person comes up with some really new, clever idea and it's a totally different take, and they propel from there.

Dylan: 首先，我不太愿意在这方面给出建议，因为我认为所有或大量软件都将存在于与 LLM 或任何模型的会话中的想法，有点被夸大了。这件事情有很多不同的可能性。而且，通常情况下，某个领域可能有成千上万的人在创办公司，大家都在说：“哦，别去那里，太拥挤了。” 但总会有一个人带着一个真正新颖、聪明的想法出现，提出一个完全不同的视角，并从此起飞。

Dylan: So I never try to say, "Don't do something," to an entrepreneur because somebody that's listening to this podcast is going to have some unique insight in some space that both of us think is really dumb to work in, but then they'll be the next trillion-dollar company. So, and you know, of course, whoever that is, let me know.

Dylan: 所以我从不试图对一个创业者说：“别做某件事。” 因为听这个播客的某个人，可能会在我们俩都觉得很傻的领域里有一个独特的见解，然后他们就会成为下一个万亿美元的公司。所以，当然，不管那个人是谁，记得告诉我一声。

Allesio: Let us be a part of it at least, you know.

Allesio: 至少让我们参与一下，你知道的。

Dylan: Let us both know. But I think there is some amount of mimetics around people seeing other people doing something and they follow on. And you have to have a unique insight if you're starting a company or working on a product. It usually should be something that's unpopular, right? This is just cliche advice at this point, but I think there's something deep to internalize there about the kind of contrarian nature.

Dylan: 我们俩都告知一下。但我认为，人们看到别人做某事然后跟风，这其中存在一定程度的模仿行为。如果你要创办一家公司或开发一个产品，你必须有独特的见解。它通常应该是不受欢迎的，对吧？这虽然是老生常谈的建议，但我认为关于逆向思维的本质，有一些深层的东西需要内化。

### The Optimism Principle

Allesio: What have you learned about yourself during the Thiel Fellowship? What are things that you changed about how you approach life, thinking, learning?

Allesio: 在参加泰尔奖学金期间，你对自己有什么新的认识？在对待生活、思考和学习的方式上，你有哪些改变？

Dylan: Whether it be that interaction with Chris Olah where I look back and go, "Man, I maybe dismissed that one too soon," and then learned over time thankfully. Or another example is in 2013 there was a Bitcoin hype cycle. Bitcoin went to $1,000 or something and half the Thiel Fellows at the time were really excited about Bitcoin. I'm just like, "These idiots, how do you short this thing?" That was my default reaction.

Dylan: 无论是与 Chris Olah 的那次互动，如今回想起来，我觉得：“天哪，我可能太早否定它了”，好在后来随着时间推移我学到了。或者另一个例子是，2013年有过一轮比特币的炒作周期。比特币涨到了1000美元左右，当时一半的泰尔学者都对比特币非常兴奋。我当时就想：“这些白痴，这东西怎么做空啊？” 这是我的本能反应。

Dylan: And I think that the overall meta lesson that I've learned, not just through the Thiel Fellowship but just being around tech for a while now, is don't look for reasons why things are not going to work. That's important, too, but it's not the place to start from. The place to start from is, "What could this be? How big could this be? How important could this be for society?" And let yourself imagine and dream, and then go and think about all the ways it's not going to work so you can mitigate each one. But start with the dream. And I think if you start there, it's just a better default position to go from.

Dylan: 我认为，我学到的整体宏观教训，不仅仅是通过泰尔奖学金，而是通过在科技行业待了一段时间后得出的，那就是：不要去寻找事情行不通的理由。那也很重要，但不是出发点。出发点应该是：“这可能成为什么？它能变得多大？它对社会能有多重要？” 让自己去想象和梦想，然后再去思考所有可能失败的方式，以便你能逐一化解。但要从梦想开始。我认为，如果你从那里开始，那会是一个更好的默认立场。

### Lessons from the NFT Hype Cycle

Allesio: You obviously have a Chain Runner, not a CryptoPunk, as your Twitter PFP. How do you think about in the digital world, especially as you're going to have this huge divide between scarcity and abundance? How do you feel about the future of these digital collectibles and communities, and how that fits into the universe of, "Hey, you can generate anything at any time"? Enzo Ferrari used to say a Ferrari can never be readily available to be desired. I'm curious how you think about the distribution of things people will see on the internet between the super niche, tailored, just created for you, and these kind of iconic cultural properties.

Allesio: 你的推特头像显然是一个 Chain Runner，而不是 CryptoPunk。在数字世界里，尤其是在稀缺性和丰裕性之间将出现巨大鸿沟的背景下，你是如何思考的？你对这些数字收藏品和社区的未来有何看法？它们如何融入到一个“嘿，你可以随时生成任何东西”的宇宙中？恩佐·法拉利曾说过，法拉利永远不能轻易获得，才能被人渴望。我很好奇，你如何看待未来人们在互联网上看到的东西，会如何在“超级小众、为你量身定制”和“标志性文化资产”之间分布？

Dylan: The paradox of digital scarcity is what made me excited about **NFTs**（非同质化代币：一种记录在区块链上的独特数字资产，代表对特定物品的所有权） before they were called NFTs, back in 2017. And I think that not everyone has that collector gene, but some do. And for those that do, whatever it is they're collecting, digital items, they're scarce and people will enjoy getting into whatever collector aspect they want there. But I think in general, I've found myself wanting to distance a bit from the NFT space. It's kind of interesting, it actually has some parallels, I think, to AI.

Dylan: 数字稀缺性的悖论，正是在2017年、在它们还被称为 **NFT** 之前就让我感到兴奋的东西。我认为不是每个人都有收藏家的基因，但有些人有。对于那些有的人来说，无论他们收藏什么，数字物品是稀缺的，人们会享受投入到他们想要的任何收藏领域中。但总的来说，我发现自己想与 NFT 领域保持一点距离。这很有趣，我认为它其实和 AI 有些相似之处。

Dylan: I got in it so early, and at that point it was this niche community on the internet of weird people that thought digital stuff could be scarce and you might want to collect it and pay real money for it. But it was not expensive and so anyone, for example in the States, could be part of that. And it was gated more on just, do you know about it and do you get the idea of it, and is that idea exciting to you or does it repel you?

Dylan: 我很早就进入了这个领域，当时它只是互联网上一个由一群奇怪的人组成的小众社区，这些人认为数字物品可以是稀缺的，并且你可能想花真金白银去收藏它。但它并不昂贵，所以比如在美国，任何人都可以参与进来。它的门槛更多在于，你是否知道它，你是否理解它的理念，以及这个理念是让你兴奋还是让你反感。

Dylan: And then over the next 3 to 4 years, it went from this very idealistic, "Let's think about what the future of creation and digital items and scarcity could be," to get-rich-quick scams and just this overall vibe of flipping stuff and trying to make money. And I don't know, it just the whole meta of it changed and that's when I pieced out.

Dylan: 然后在接下来的3到4年里，它从一个非常理想主义的、“让我们思考创作、数字物品和稀缺性的未来会是怎样”的状态，变成了快速致富的骗局和一种纯粹倒卖、赚钱的氛围。我不知道，就是整个生态的元叙事都变了，那时候我就退出了。

Dylan: It might attract people to buy it and folks apparently, I learned, do scams where they basically pump and dump and create trading behaviors that are no good. And so I stopped talking about things I'm excited about for the NFT space. The parallel that I think is kind of interesting is, you compare AI to that and it's like there's been a long era of people that I think are very on mission and thinking about the big picture, the risks, the opportunities, the possibilities. And that's kind of meeting in this moment the get-rich-quick, if you look on YouTube, there's a lot of people making videos about, "Okay, how do you use AI to make passive income?" And I'm not trying to dismiss that because great, if you can make money using AI, that's great for you and some people certainly will. But I think there's too much "do it because it's going to make you some money" energy in the space right now that makes me a little bit nervous, having been through that NFT cycle and seeing where it ended up.

Dylan: 它可能会吸引人们购买，而我后来了解到，有些人显然会搞骗局，基本上就是拉高出货，制造不良的交易行为。所以我停止谈论那些让我对 NFT 领域感到兴奋的事情了。我认为一个有趣的相似之处是，你把 AI 和它比较，会发现 AI 领域长期以来有一群人，我认为他们非常有使命感，在思考大局、风险、机遇和可能性。而现在，这种精神正在与“快速致富”的心态交汇。如果你看 YouTube，有很多人在制作关于“如何用 AI 创造被动收入”的视频。我不是要否定这一点，因为如果你能用 AI 赚钱，那对你来说很棒，而且肯定有人能做到。但我觉得现在这个领域里有太多“做这个只是因为它能让你赚钱”的氛围，这让我有点紧张，因为我经历过 NFT 那个周期，也看到了它的结局。

### Final Thoughts and a Call to Create

Allesio: I hope that we'll see more out of AI, which is enabling more of these small communities locally to have more entertainment and support themselves in a way that doesn't have to be, "Oh, is this going to make money? Is this going to be profitable?"

Allesio: 我希望我们能从 AI 中看到更多，它能让更多本地的小社区拥有更多娱乐方式，并以一种不必总是考虑“哦，这能赚钱吗？这能盈利吗？”的方式来支持自己。

Dylan: I think the more you can go from a mode of, "I go on a social media app of choice and mindlessly flip through my algo feed," to, "I'm going and making things," that is good. We want to move consumption behavior to creation behavior, and I think that will happen. I'm just a little nervous about the get-rich-quick vibes.

Dylan: 我认为，你越能从“我打开社交媒体应用，无脑地刷着算法推荐”的模式，转变为“我正在去创造东西”的模式，就越好。我们希望将消费行为转变为创造行为，而且我认为这将会发生。我只是对那种快速致富的氛围有点紧张。

Allesio: Awesome. Dylan, thank you so much for the time.

Allesio: 太棒了。Dylan，非常感谢你的时间。

Dylan: Thank you. Thanks for having me.

Dylan: 谢谢你。感谢邀请我。