---
area: tech-engineering
category: ai-ml
companies_orgs:
- Trae
- Microsoft
- Google
- Anthropic
- OpenAI
- Meta
date: '2025-11-12'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Stack Overflow
people:
- Andrej Karpathy
- Steve Jobs
products_models:
- Copilot
- Cursor
- Claude Code
- ChatGPT
- VS Code
- JetBrains
- TikTok
- VI
- MD
- AI IDE
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=d-Mel7dGDGE
speaker: 课代表立正
status: evergreen
summary: Trae产品负责人石扬在访谈中分享了AI编程工具从Copilot到Cursor再到Claude Code的演进路径。他指出Trae已成为全球第二大AI编程工具，并在代码补全等细节上实现突破。石扬强调中国团队在“命题作文”上的独特优势，并深入剖析了AI编程从插件模式到原生集成IDE的转变。他认为AI编程已步入2.5时代，并展望了3.0时代的终极形态：将更多工具原生融入AI，而非让每个工具独立搭载AI，以期大幅提升专业开发者和普通用户的效率与体验。
tags:
- ai-evolution
- developer-tool
- human
- strategy
title: AI编程工具的演进与未来：Trae产品负责人石扬的深度洞察
---

### AI编程工具的崛起与Trae的定位

课代表立正：哈喽石扬，欢迎来到课代表立正。我们来介绍一下石扬，石扬是**Trae**（字节跳动旗下的一款AI编程工具）的负责人。在我看来，Trae目前是全球第二大的**AI编程**（Artificial Intelligence Coding: 利用人工智能辅助或自动化代码编写）工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello, Shi Yang, welcome to Kedaibiao Lizheng. Let's introduce Shi Yang. Shi Yang is the head of Trae. In my understanding, Trae is currently the second largest AI coding tool in the world.</p>
</details>

石扬：过奖了。我觉得从体量上来看，Trae确实是一个非常大的产品。是的，是的。您问我谦虚在哪里？相比于规模，我们更希望在口碑上成为世界第二，甚至是第一。目前从我们自己的角度来看，我们还有很多值得向最领先的产品学习的地方，比如像大家目前口碑非常好、认知度也很高的**Claude Code**（Anthropic公司基于Claude模型开发的AI编程工具）和**Cursor**（一款集成AI功能的代码编辑器）。我们正在努力，希望能不仅在体量上，也在使用体验上达到世界前列的水平。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Overpraised. I think in terms of size, it is indeed a very large product. Yes, yes, yes. Where do you want to be humble? Compared to size, we hope to be the second or first largest in terms of reputation. From our perspective, we still have a lot to learn from the leading products, such as Claude Code and Cursor, which currently have excellent reputations and are well-recognized. We are working hard to achieve a world-leading level not only in volume but also in user experience.</p>
</details>

课代表立正：我觉得一个很了不起的点是，其实刚一出来的时候是**Copilot**（GitHub与OpenAI合作开发的AI代码补全工具），但我自己的体感是，Trae这一年其实已经超过了Copilot，哪怕是在Copilot自己很强调的Tab的体验上，整个效果都是超过它的。这其实不容易，因为Copilot也是背靠**微软**（Microsoft: 一家跨国科技公司）这样的一个公司对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think a very remarkable point is that when Copilot first came out, my personal feeling is that Trae has actually surpassed Copilot this year, even in the Tab experience that Copilot itself emphasizes so much, the overall effect is superior. This is not easy, because Copilot is also backed by a company like Microsoft, right?</p>
</details>

石扬：确实像课代表您讲的，我们是从2024年10月份开始做这款产品，然后过去一年里，我们从几乎是零做到了今天的状态。我们在一些很细节的点上，其实做了很多的突破。比如说刚才您讲的像Copilot，它最早的时候其实最强调的是代码的补全，它是行业里面第一家做出这件事情的，而且它其实很早就开始做，几乎是2022年开始有，然后逐渐从2023年模型能力变强，行业对于AI的认知变高之后，大家对它的认知也发生了变化和提升。但后来我觉得整个行业里，包括像Cursor，包括像Trae，因为创业公司可能你追我赶，在这种状态下，大家在这里面做了很多突破和尝试。我觉得从补全这个角度上来讲，我们最开始只能做单点的补全对吧？或者说只是单一的一个函数（function），就我写一个名字，然后你大概帮我去推整个函数是怎么去做，甚至是一行，对，最早期。然后到比如说整个一个函数，然后再到现在行业里比较普遍的，比如说可能大家用Cursor用的比较多，大家对Tab的感受也非常好。最近它不是也发了一个新的那个论文，**RL**（Reinforcement Learning: 强化学习）那个，就是说你可以变成了是单点的补全。也就是说AI变得更聪明，当你去改了一个地方，可能连带受影响的其他地方，它也能自动解析出、分辨出，然后帮助你去做。那我觉得我们在过去一年里，我们大概能到世界第二的水平，Cursor还是比我们要领先一些，无论从认知上还是投入的程度上。在过去我觉得它是行业里面最好的。那对于我们来讲，我觉得除了Cursor以外，我们做过横评，其实可能比大多数行业里面你能看到的产品，我们的体验是更优的。而且这个优，我觉得如果说Cursor是独一档的话，我们大概能到它的90%左右。然后可能其他的我不便去评价别人，好像要拉踩别人，但实际上可能别人离前两名的差距还是有一定明显。其实我觉得大家从实际的使用体验里，包括我们对自己的客户的访谈里，都可以看到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Indeed, as you mentioned, Kedaibiao, we started developing this product in October 2024, and over the past year, we've gone from almost zero to our current state. We've made many breakthroughs in very detailed aspects. For example, as you just mentioned, Copilot initially focused most on code completion. It was the first in the industry to achieve this, and it started quite early, almost in 2022. Then, as model capabilities strengthened in 2023 and the industry's awareness of AI grew, people's perception of it also changed and improved. But later, I think in the entire industry, including Cursor and Trae, because startups are in a catch-up state, everyone has made many breakthroughs and attempts. I think from the perspective of completion, we initially could only do single-point completion, right? Or just a single function, where I write a name, and you roughly help me infer how the entire function should be implemented, or even just one line, yes, in the very early stages. Then it evolved to, for example, an entire function, and now to what's more common in the industry, for instance, many people use Cursor, and they have a very good experience with its Tab feature. Recently, it also published a new paper on RL, which means it can perform single-point completion. In other words, AI has become smarter; when you change one place, it can automatically parse and identify other affected areas and help you make changes. I think over the past year, we've reached the world's second-best level, with Cursor still leading us somewhat, both in terms of recognition and investment. In the past, I considered it the best in the industry. For us, besides Cursor, we've conducted benchmarks, and our experience is superior to most other products you can find in the industry. And this superiority, I think if Cursor is in a league of its own, we're probably at about 90% of its level. I won't comment on others, as it might seem like disparaging them, but in reality, others might have a significant gap from the top two. I believe users can see this from their actual usage experience, including our interviews with our own customers.</p>
</details>

### 中国团队的优势与AI时代的“套壳”应用

石扬：在这里面，我们觉得最大的努力是，这可能也是中国团队比较擅长的一个地方，就是我觉得我们中国的团队相比起美国的团队，更善于的是**命题作文**（指在给定主题或框架下进行创作和优化）。比如说这个问题是这样的，然后你是否能还原出，或者在这个基础上做得更好，成本更低。我觉得这是中国团队非常非常擅长的地方。硅谷的团队可能更加擅长的是说，定义一个问题，最开始给这个问题一个很好的解答。我觉得这没有高低之分，我觉得这个是在你不断地对行业、对产品、对用户有认知的时候，你也会逐渐地去发现。所以对于我们来讲，我们在过去一段时间，还处于行业的这种追赶者，向领先者学习的过程。所以我们其实做了很多能够达到这种世界**top-tier**（顶级）产品水平的事情，所以是发挥了很多中国工程团队的优势。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And within this, we feel our greatest effort lies in something that Chinese teams might be particularly good at. I believe Chinese teams, compared to American teams, are more adept at "composition on a given topic." For example, if a problem is presented, can you reproduce it or improve upon it, and at a lower cost? I think this is where Chinese teams excel. Silicon Valley teams might be more adept at defining a problem and initially providing an excellent solution for it. I don't think there's a hierarchy here; I believe this is something you gradually discover as you continuously gain understanding of the industry, products, and users. So, for us, over the past period, we've been in the process of catching up and learning from industry leaders. Therefore, we've done many things to achieve the level of world top-tier products, thus leveraging many advantages of Chinese engineering teams.</p>
</details>

石扬：我觉得这里面，其实我也在各种场合里面分享过我们自己对这件事情的认知。我们至少认为说在**coding**（编程）的领域里，它是一个模型、工程、产品三者相互影响的。在AI这个时代，尤其在硅谷，更是每天都会有非常多这种新的产品、新的**idea**（想法）出来。但是从我的视角里面坦诚去看，如果我们去看**true story**（真实情况），就是以**LM**（Language Model: 语言模型）为核心的，我觉得特别明确能够真的被用户用到**daily use**（日常使用）的，我觉得一个肯定是**chatbot**（聊天机器人），这个是已经非常确定的事情。另外一个可能就是这个AI coding。那chatbot其实大家也在一直讨论说，你看AI应用其实就是AI模型的一个**包壳**（Wrapper: 指将一个核心技术或模型封装起来，提供用户界面和特定功能）。我觉得其实chatbot是非常典型的一个，因为本质来讲对吧，它其实就是模型的外溢，然后你只是问一个问题，然后它回答你的问题，本质上就是一个框。大家其实也经常去说，它不就是一个框吗？其实有点像**Google**（谷歌: 一家跨国科技公司），对吧，它就是一个框，但是它背后的能力决定了，它可以是一个框，它可能就是一个最佳的产品形态。但是coding，我觉得包括从最早期我们从Copilot开始，包括Cursor，包括现在的Claude Code，包括后边可能一些更新的产品出来，我觉得在这个里面，我们逐渐看到所谓的包壳，它至少包得越来越厚。我们其实可以看到，因为你写代码并不是一个单纯的，如果假设说写代码只是一个跟AI的交互，那理论上我去用**Artifacts**（制品，这里指模型直接输出的结果），对吧，即使Claude，最后它也有Claude Code这样的产品。我觉得它还是需要很多工具，比如说传统意义上，只要你今天还不是真正意义上的**AGI**（Artificial General Intelligence: 通用人工智能），比如说我问了一个复杂的问题，比如帮我去做一个**Facebook**（脸书: 一个社交媒体平台），或者帮我去做一个**TikTok**（抖音国际版: 一个短视频平台），它不能一下子帮你全都做完。这个过程里，你仍然需要文件管理、代码审阅、**debug**（调试），所有的这些问题，它还是存在在原来的那些工具里面。这也是为什么我们其实花了很多时间，把AI **build into**（内置到）工具，就是为了试图去让你过去的编码体验变好，而不是单纯的端到端直接生成一个APP。这个点上我们能够看到一些，这个是做不到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've actually shared my understanding of this matter on various occasions. We at least believe that in the field of coding, it's an interplay of model, engineering, and product. In this AI era, especially in Silicon Valley, numerous new products and ideas emerge daily. But from my candid perspective, if we look at the true story, focusing on LM as the core, I think it's very clear that what can truly be used by users in daily life, one is definitely chatbots—that's a very certain thing. The other is probably AI coding. Chatbots, people have been discussing, "AI applications are just wrappers for AI models." I think chatbots are a very typical example because, in essence, right, they are just an overflow of the model. You just ask a question, and it answers your question; essentially, it's just a box. People often say, "Isn't it just a box?" It's a bit like Google, right? It's just a box, but its underlying capabilities determine that it can be a box, and it might be the optimal product form. But for coding, I think from the very beginning with Copilot, including Cursor, and now Claude Code, and potentially some newer products coming out later, we gradually see that the so-called wrapper is getting thicker. We can actually see that because writing code is not a simple interaction with AI. If we assume writing code is just an interaction with AI, then theoretically, I would use Artifacts, right? Even Claude, in the end, has products like Claude Code. I think it still requires many tools. For example, in the traditional sense, as long as you're not truly AGI today—for instance, if I ask a complex question like "help me build a Facebook" or "help me build a TikTok"—it can't do everything for you all at once. In this process, you still need file management, code review, debugging; all these problems still exist in the original tools. This is why we've spent a lot of time building AI into tools, trying to improve your past coding experience, rather than simply generating an app end-to-end directly. We can see some aspects where this is not achievable.</p>
</details>

课代表立正：好，先说我接下来想要提问的东西。大家可能就会说你不就是抄吗？哈哈哈，但是要抄的团队有千千万，是，但是做到的第二名的只有一个。抄到第二名的只有一个。所以说这到这里面到底是怎么做到的？这件事情，尤其你刚刚说的模型、工程和产品的结合，其实我是非常认可的。所以我相信你在这里面能带来一些非常独特的观察。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, let me first address what I'm about to ask. People might say, "Aren't you just copying?" Hahaha, but there are thousands of teams that copy, yes, but only one has become the second largest. Only one has copied its way to second place. So, how exactly was this achieved? This matter, especially the combination of model, engineering, and product that you just mentioned, I really agree with. So I believe you can bring some very unique observations here.</p>
</details>

### 产品的核心价值：降低用户成本与“抄袭”的辩证

石扬：**套壳**（Wrapper: 指将一个核心技术或模型封装起来，提供用户界面和特定功能）我觉得可以再聊一下这个点，或者我们怎么去定义什么是应用。比如说我们有**Infra**（Infrastructure: 基础设施），对吧，就像你刚才讲，不管是数据库还是后来的Claude，还是今天的AI，我觉得它是一切应用的基础。包括说从PC时代到那个手机时代，然后再到AI时代，我们怎么去定义一个应用的价值？实际上从我自己个人的视角，作为一个产品经理的话，我会觉得一个好的应用就是减少用户在他特定场景里的使用成本。就像你刚才讲那个问题，就是难道苹果手机不能照相吗？但为什么有这么多照相的APP？是因为你会发现有一类用户，在他的场景里，他需要花更长的时间，不管是**learning curve**（学习曲线），还是每天日常的操作成本，让他变得更复杂。或者说我们去刷抖音，为什么抖音的快感这么强？我只要做一下这个就可以。但实际上我们可以有其他的形态，比如说你照完了通过**Airdrop**（苹果设备间的无线传输功能）发给我，对吧，我觉得也是一样的。所以其实我觉得**application**（应用程序）最大的意义是来自于，当你发现了一类人群的共通的，在这个场景里面的使用，或者说需求，你如何通过有效的封装，让这类的需求变得更顺滑、低成本、更愉悦。我觉得这个就是核心的价值。我觉得我们去做产品，是围绕着这个思考去做的。这是第一点。我觉得其实套不套壳不重要，这个世界可能都是，或者整个**Internet**（互联网）都是0/1的套壳对吧？我们抽象地讲，那汽车也是，也只是让你过去更快一点。对，所以我觉得这是第一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we can discuss the point about "wrapping" or how we define what an application is. For example, we have Infra, right? As you just mentioned, whether it's databases or later Claude, or today's AI, I believe it's the foundation for all applications. Including from the PC era to the mobile era, and then to the AI era, how do we define the value of an application? Actually, from my personal perspective as a product manager, I would say a good application reduces the user's cost of use in their specific scenario. It's like the question you just asked: can't an iPhone take pictures? But why are there so many camera apps? It's because you'll find there's a type of user who, in their scenario, needs to spend more time, whether it's on the learning curve or daily operational costs, making it more complex. Or, when we scroll through TikTok, why is the pleasure so strong? I just need to do this. But in reality, we can have other forms, for example, after you take a picture, you send it to me via Airdrop, right? I think it's the same. So, I actually think the greatest significance of an application comes from when you discover a common usage or need for a group of people in a specific scenario, how you effectively encapsulate it to make these needs smoother, lower cost, and more enjoyable. I think this is the core value. I believe we build products around this thinking. This is the first point. I actually think whether it's a wrapper or not isn't important; the world, or the entire Internet, might just be 0/1 wrappers, right? Abstractly speaking, a car is also just making you go faster. Yes, so I think that's the first point.</p>
</details>

石扬：那么第二个是说刚才讲抄这个概念。我觉得首先没有任何的东西是实际上的独家，即使有版权，但是用户形态或者说application。今天我们去打开所有的这个application，你发现每一类里面都会有各种各样的，就是比如照相的APP有一大堆，什么游戏的APP，什么Mobile游戏一大堆。但最后你会发现好的那个可能只有一到两个，会被广大用户接受的可能只有一到两个。所以我觉得至少我定义所谓抄这件事情是一个中性词。可能行业最后的产品形态会非常趋同，是因为我们总会在不断不断地对服务用户的过程中，发现那个最佳形态，然后那个最佳形态可能大概率是差不多的。我觉得这个是第一个点。然后还有另外一个点是，可能我们自己产品团队是这么思考的，就是说没有必要为了不同而不同。我必须**be different**（与众不同）。就像可能**Steve Jobs**（史蒂夫·乔布斯: 苹果公司联合创始人）讲我要be different，但是他be different的点不在于说PC不应该是PC的样子，它应该就是那个样子。就像我自己有一段时间的签名叫做“三角形的轮子很漂亮但是我希望它是个圆的”。谢谢。就说那轮子就是圆的，你不能说它是一个三角形。但是你可能这个轮子，它是什么场景里，多大多小，可能这个是你要去做的不同。所以对于我们来讲，如果我们去定义抄，我们是认为我们跟行业最领先的这些玩家，或者说这些产品有巨大的差距。我们没有必要非得在这个阶段去与众不同。也就是说我们先要成为一个圆形的轮子，它可能不好看，它可能不够圆，我们要去打磨这件事情。所以我觉得这是第一步，就至少让人家认为你是一个AI coding tool。我们也经过了早期说你发出来人说你这不行，你在抄Cursor，你这……这些那些一大堆。那个是必经的阶段。因为就像说我今天想要去做一个电动汽车，我必须要知道电池是怎么做的，我必须要有底盘，我必须要有轮子，我必须要放到一起。另外一个点我们也坦诚地承认，第一我不是做**researcher**（研究员）出身的，第二是我过去跟AI没有任何的关系。我相信**most of us**（我们大多数人）跟AI都没有任何的关系。我觉得去学习行业最优秀的人，是一个对于我们来说非常快速的一件事情。然后呢，就是说当你在这个行业里投入了更多的时间，投入更多的心思的时候，你会有不同的**insight**（洞察）。我觉得这个时候是**where分叉开始发生的地方**（指产品或技术发展路径开始出现差异化）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the second point is about the concept of copying that was just mentioned. First, I believe nothing is truly exclusive. Even with copyrights, user interfaces or applications are not. If we open all applications today, you'll find that within each category, there are all sorts of options—a huge number of camera apps, game apps, mobile games, and so on. But in the end, you'll find that only one or two are truly good, and only one or two will be widely accepted by users. So, I define "copying" as a neutral term. The final product forms in an industry might converge significantly because we constantly discover the optimal form in the process of serving users, and that optimal form is likely to be quite similar across products. I think that's the first point. Another point is how our product team thinks: there's no need to be different just for the sake of being different. I must "be different." It's like Steve Jobs might have said, "I want to be different," but his point of being different wasn't that a PC shouldn't look like a PC; it should look exactly like that. It's like a signature I had for a while: "A triangular wheel is beautiful, but I wish it were round." Thank you. So, a wheel is round; you can't say it's a triangle. But perhaps the difference lies in the context of the wheel—how big or small it is for a particular scenario. So, for us, if we define copying, we believe we have a huge gap compared to the leading players or products in the industry. There's no need for us to be different at this stage. In other words, we first need to become a round wheel. It might not look good, it might not be perfectly round, but we need to refine it. So, I think this is the first step: at least making people recognize you as an AI coding tool. We also went through the early stages where people would say, "This isn't good; you're copying Cursor; this and that." That's an inevitable phase. Because it's like saying, if I want to build an electric car today, I need to know how batteries are made, I need a chassis, I need wheels, and I need to put them all together. Another point we frankly admit is, first, I didn't come from a researcher background, and second, I had no prior connection to AI. I believe most of us have no connection to AI. I think learning from the best in the industry is a very fast way for us to progress. And then, when you invest more time and effort in this industry, you'll gain different insights. I think that's where the divergence begins to happen.</p>
</details>

课代表立正：你觉得什么时候开始分叉了？或者开始分叉了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When do you think the divergence started? Or has it started?</p>
</details>

### AI编程的2.5个时代：从Copilot到Claude Code

石扬：我们自己认为可能开始分叉了，但这个还是要被用户去认可、去分叉。我先从一个外部视角去看别人。比如说你看Code，就是一个Cursor上的分叉，对吧？就是说大家从最开始的共识就是所有人**everyone is doing copilot**（所有人都在做Copilot）。各种各样的**plugin**（插件），可能现在没有了，但是如果我们翻回到几个月前，对，可能恨不得那个里面有十几二十个plugins，各种各样的公司去做的。然后从plugin变成了说**AI IDE**（AI Integrated Development Environment: 集成AI功能的开发环境）这种Cursor这样的形态。然后Claude Code是另一次分叉。我觉得Claude Code也是基于可能他们对于模型的理解，他们和Cursor之间的合作——当然这是我自己的猜测——就是说和对用户的洞察之后，他们发现原来我可以从Cursor那样的形态，向**coding agent**（编程代理: 能够自动化执行复杂编程任务的AI系统）更加去发展。然后我觉得从我们的视角里，就是因为我们每天在去**deal with**（处理）这里面所有的**challenge**（挑战），**deal with**所有这些用户的一些反馈，以及对于其他优秀产品的一些学习和理解。我们自己现在的观点，我们认为也发生了分叉。不一定是对的，或者说我们**trying to be different**（试图与众不同）的点是，我自己来观察，AI coding分了2.5个时代。从我的视角来看，就是第一个时代一定是Copilot，就是Copilot第一次真正意义上的让所谓AI这件事情真的能够被用到。而且我觉得现在很多大多数的用户对于**补全**（Code Completion: 代码自动补全）/**co-completion**（协同补全: AI与开发者协作完成代码补全）这件事情，尤其是比较专业的开发者，其实大家对于可能coding agent的使用的那个强度，是远大于那个code completion的。我觉得这是第一时代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We ourselves believe that divergence may have begun, but this still needs to be recognized and diverged by users. Let me first look at others from an external perspective. For example, Code is a fork of Cursor, right? That is, the initial consensus among everyone was that "everyone is doing Copilot." All sorts of plugins—maybe not now, but if we go back a few months, yes, there might have been a dozen or twenty plugins from various companies. Then it evolved from plugins to an AI IDE form like Cursor. And Claude Code is another divergence. I think Claude Code is also based on their understanding of models, their cooperation with Cursor—of course, this is my own guess—and after insights into users, they found that they could evolve from a Cursor-like form more towards a coding agent. And I think from our perspective, because we deal with all these challenges every day, deal with all this user feedback, and learn and understand other excellent products. Our current view is that divergence has also occurred. It may not be correct, or the point where we are trying to be different is, from my observation, AI coding has gone through 2.5 eras. From my perspective, the first era must be Copilot. Copilot was the first to truly make AI usable. And I think now, for most users, especially professional developers, the intensity of using coding agents is far greater than that of code completion. I think this is the first era.</p>
</details>

石扬：然后第二个时代就是Cursor这个时代。但Cursor其实最早期也做了很好的补全，我觉得Cursor的补全到今天还是世界最好的那个补全。但它真正出圈其实是**Claude 3.5**（Anthropic公司推出的大型语言模型），然后加上他那个产品形态，加上**Andrej Karpathy**（特斯拉前AI总监，著名AI研究员）的**vibe coding**（指通过直觉和少量提示进行编程）的**tweet**（推文）。所以我觉得这是第二个时代。然后从我从一个产品角度上来讲，我觉得它最好的地方是，如果过去我们依赖的是把AI能力做到**IDE**（Integrated Development Environment: 集成开发环境）里边，就是Copilot的那个时代，把AI能力做到IDE里面，通过的是插件的方式。那么我觉得第二个时代是说，把AI能力**native build into**（原生内置到）IDE里边。也就是说它自己去做**fork**（分叉: 指基于现有开源项目创建新项目），当然我们要感谢**VS Code**（Visual Studio Code: 微软开发的免费开源代码编辑器）是一个开源的。那么它自己从VS Code做一个fork，然后真正把AI集成到IDE里边。我觉得这是一个很大的进步，从产品的角度上来讲。因为**you get more context**（你获得更多上下文），很多交互是可以更**native**（原生）的。这是从产品的角度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then the second era is the Cursor era. But Cursor actually did very good completion in its early days, and I think Cursor's completion is still the best in the world today. But what really made it famous was Claude 3.5, combined with its product form, and Andrej Karpathy's "vibe coding" tweet. So I think this is the second era. And from a product perspective, I think its best aspect is that if in the past we relied on integrating AI capabilities into the IDE, which was the Copilot era, doing so through plugins. Then I think the second era is about natively building AI capabilities into the IDE. That is, it forks itself—of course, we have to thank VS Code for being open source. So it forks from VS Code and truly integrates AI into the IDE. I think this is a huge step forward from a product perspective. Because you get more context, many interactions can be more native. This is from the product perspective.</p>
</details>

课代表立正：那从**capacity**（能力）角度，就是第二代和第一代的主要区别在你看来是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So from a capacity perspective, what do you see as the main difference between the second generation and the first generation?</p>
</details>

石扬：我觉得首先因为AI能力变强了，你需要更深的交互，就不只是单纯一个补全。可能我需要通过对话，你给了我很多**result**（结果），我怎么去**apply these result to the current workspace**（将这些结果应用到当前工作环境）？比如说这边有个**error**（错误），我能不能去**reference this error to my right-hand chat panel**（将这个报错关联到右侧的聊天面板）？甚至我要去知道一些底层，比如说我现在IDE里面的一些插件拿不到的一些信息。这个事情我不一定说的是对的，就是可能只有官方Copilot可以拿到官方的那个VS Code的底层的**API**（Application Programming Interface: 应用程序编程接口），剩下的那个插件是拿不到的。所以这个时候如果你去fork一个，你直接去做，那你**get more API**（获得更多API），你就是可以做更多的事情。我记得是这样的，就是你相当于在应用层做，还是在操作系统层做？是的，至少说我能在API层，我能控制我所有的这个环境。所以这个是我觉得向下的一个进步。核心是AI能力变得更强，你可以通过AI能力的提升，再加上你能去**utilize**（利用）这些API，你能提供更好的体验。不然的话，如果AI就还是那个样子，给你这些API也没有用嘛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think, first, because AI capabilities have become stronger, you need deeper interaction, not just simple completion. Perhaps I need to interact through dialogue, and you've given me many results. How do I apply these results to the current workspace? For example, if there's an error here, can I reference this error to my right-hand chat panel? I even need to know some underlying information that some plugins in my current IDE cannot access. I'm not necessarily saying this is entirely correct, but perhaps only the official Copilot can access the underlying APIs of the official VS Code, and other plugins cannot. So, at this point, if you fork one and directly implement it, you get more APIs, and you can do more things. I remember it being like this: it's like you're working at the application layer or the operating system layer? Yes, at least at the API layer, I can control all my environment. So, I think this is a downward progression. The core is that AI capabilities have become stronger, and you can leverage these API improvements to provide a better experience. Otherwise, if AI remains the same, giving you these APIs would be useless.</p>
</details>

课代表立正：明白，明白。这确实就是你刚刚说的工程、产品和AI本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Understood, understood. This is indeed what you just said about engineering, product, and AI itself.</p>
</details>

石扬：对，我觉得三者的交织。然后我觉得第二代的开始，实际上是问答。其实它还不是一个**agent**（代理: 指能够自主执行任务的AI系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, I think it's the intertwining of all three. And I think the beginning of the second generation was actually Q&A. It wasn't really an agent yet.</p>
</details>

课代表立正：哦，对。就是当时Cursor有一个agent模式，但是其中有一个**chat**（聊天）模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, right. So, at that time, Cursor had an agent mode, but it also had a chat mode.</p>
</details>

石扬：对，是的。其实大量的人一开始都是被chat的，就是我问一个问题，它能回答我。因为我觉得最简单，对我最大的体验是说我是程序员嘛，然后程序员尤其在北美的话，**Stack Overflow**（一个面向程序员的问答网站）一定是不可或缺的对吧？然后你会发现我这一段东西出来，这什么意思？**copy paste**（复制粘贴）然后找，先是Google，然后Stack Overflow，然后呢找一堆信息，然后可能前10个里面找出3个，然后粘回来看哪个**work**（有效），然后再去思考这个事儿。或者你去问你的旁边的人，对吧，大概率就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, that's right. In fact, many people were initially drawn to the chat feature, meaning I could ask a question and it would answer me. Because I think the simplest and most impactful experience for me, as a programmer, especially in North America, is that Stack Overflow is indispensable, right? And you'd find a piece of code, wonder what it means, then copy-paste it, search first on Google, then Stack Overflow, find a bunch of information, maybe pick three from the first ten results, paste them back to see which one works, and then think about it. Or you'd ask the person next to you, right? That's generally how it goes.</p>
</details>

课代表立正：有的时候再看看**YouTube**（一个视频分享平台）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sometimes I'd also check YouTube.</p>
</details>

石扬：对，基本上就是这几个逻辑。但是我觉得chat那个，很大程度上把这个场景解决得非常好。就是说我这有个问题你直接问它，然后它大概率给了一些还不错的**solution**（解决方案）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, basically those few logics. But I think the chat feature largely solved this scenario very well. That is, if I have a problem, I just ask it directly, and it usually provides some pretty good solutions.</p>
</details>

课代表立正：而且它确实能得到更多的信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it can indeed get more information.</p>
</details>

石扬：对，而且其实就是回到我们一开始讲的那个问题，好的产品是让你整个这个流程变得更**丝滑**（流畅）。对，你看你过去是粘搜，然后一个一个看，看完之后找到那个对的，然后**apply**（应用）回来，然后去看。那现在变成说，你看到这个问题，你直接在chat里面问这个问题是什么，然后chat给你个答案，然后你apply一看，诶，对了，就结束了。如果没对，你再问一次。所以你整个这个流程其实是缩短了很多。就是可能单次你只是缩短了20%-30%，但如果你把它乘100次，其实你会发现你的体验会变得非常非常好。所以我觉，得从最开始chat开始，然后逐渐开始我们尝试所谓的，我觉得agent还算是个**boss word**（流行词/时髦词）那个时候。从我们视角不是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, and actually, it goes back to the question we discussed at the beginning: a good product makes the entire process smoother for you. You see, in the past, you would copy-paste, then search, look through results one by one, find the right one, apply it back, and then check. Now, it's become: you see a problem, you directly ask the chat what the problem is, the chat gives you an answer, you apply it, and oh, it's correct, then you're done. If it's not correct, you ask again. So, your entire process is actually shortened a lot. Perhaps for a single instance, you only shorten it by 20-30%, but if you multiply that by 100 times, you'll find that your experience becomes incredibly good. So, I think from the very beginning with chat, and then gradually we started trying what I considered a "boss word" at that time—agent. From our perspective, it wasn't.</p>
</details>

课代表立正：对。但是我觉得从行业里面，就是所谓**Pioneer**（开拓者）永远要定义一个东西对。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. But I think in the industry, the so-called Pioneer always has to define something, right?</p>
</details>

石扬：就我觉得boss word也不是一个负面的词，它就是一个更先锋的，更早期尝鲜的人，他定义了一个词，然后让大家知道啊，原来是这样。那个时候我觉得agent对于我来讲，就是更自动化，完成长链路的，就从单一**action**（行动）到可能是**multiple action**（多重行动），哪怕是**two actions**（两个行动），我觉得它可能是做了很多这样的东西。我是大受震撼的当时。我记得很清楚就是2023年的8月份，因为那个Claude 3.5出来，那个时候我们还没有去做IDE，我们IDE是从10月份才开始做的，就是去年的10月份。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't think "boss word" is a negative term; it just refers to a more pioneering person, an early adopter, who defines a term and lets everyone know, "Oh, that's what it is." At that time, I felt that an agent, for me, meant more automation, completing long chains, from a single action to possibly multiple actions, even just two actions. I think it did a lot of things like that. I was greatly impressed at the time. I remember clearly that in August 2023, when Claude 3.5 came out, we hadn't started working on IDEs yet; we only started our IDE development in October of last year.</p>
</details>

课代表立正：2024年10月份。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">October 2024.</p>
</details>

石扬：对，2024年的10月份开始做的。我其实大受震撼，我直接讲说，未来一定是要照着这个方向去发展。今天我的**暴论**（大胆的、可能引起争议的观点）也是，终极的AI coding产品应该是什么样子的？我不知道，但一定不是Trae的样子，一定不是Cursor的样子，也一定不是Claude Code的样子。我觉得它还有**long way to go**（很长的路要走）。就像说从最早的**VI**（Unix系统上的文本编辑器）发展到最后的VS Code，其实你经历了很长一段各种各样时期的各种各样的编辑软件，最后它成为了那个样子。而且还分叉了，一个是VS Code，一个是**JetBrains**（一家捷克软件公司，开发多款集成开发环境），对吧？它在不同的语言里面表现会更好。所以就是说我们当时觉得，至少我们认为插件一定不是最佳的形态。而当时看起来，可能最佳形态就是类似于把AI **building into**（内置到）你的**tool**（工具）里边。我觉得这是第二个时代我们看到了。然后这后边其实包括到今天，我觉得Cursor依然是一个非常好的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, we started in October 2024. I was truly shocked, and I immediately said that the future must develop in this direction. My bold prediction today is also, what will the ultimate AI coding product look like? I don't know, but it definitely won't look like Trae, it won't look like Cursor, and it won't look like Claude Code. I think it still has a long way to go. It's like how from the earliest VI to the final VS Code, you went through a long period of various editing software from different eras, and finally, it became that form. And it even forked into VS Code and JetBrains, right? It performs better in different languages. So, what we thought at the time was, at least we believed that plugins were definitely not the optimal form. And at that time, it seemed that the optimal form was something like building AI into your tool. I think this is the second era we witnessed. And then, even up to today, I think Cursor is still a very good product.</p>
</details>

课代表立正：是。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes.</p>
</details>

石扬：然后他们把agent能力做得更强。然后为什么我说2.5，而不是三个时代？我觉得就回到Claude Code，这个是我觉得过去一段时间我最喜欢的一个产品。它其实从我的视角里，就是它不能算成一个产品，而是一个模型的**showcase**（展示）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And they made the agent capabilities stronger. And why do I say 2.5, not three eras? I think it goes back to Claude Code, which I think is one of my favorite products over the past period. From my perspective, it can't really be considered a product, but rather a model's showcase.</p>
</details>

课代表立正：其实**ChatGPT**（OpenAI开发的大型语言模型聊天机器人）一开始也是一个模型showcase。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, ChatGPT was also a model showcase at first.</p>
</details>

石扬：哎，对对对对对。就是这个样子。就是说它更像是一个showcase，它其实里面有很多东西可以去做。它其实做得最好的一件事情是告诉你，原来世界上可能最好的代码模型，你可以这么去使用它。我觉得这个点是非常好的一个地方。但如果你把它定义成一个，比如说我依赖Claude Code去做我所有的开发，我没有看到谁能做得到，就是单纯只依靠Claude Code去做我的开发。就比如说我发现大量的人是把Claude Code放到VS Code里面，或者放到Cursor里面，就是放到它那里边的**terminal**（终端）。因为比如说最简单我需要文件管理，我需要去审核一定的代码，就你生成完了我要看一下代码，然后去做很多的**Preview**（预览）。比如说我生成了前端页面，会怎么怎么样。就你会发现它很好，但是它无法涵盖我整个开发流程里面的全部体验。它是个**树莓机**（Raspberry Pi: 一种小型单板计算机，常用于嵌入式开发）。对吧，就是这点。或者我的另外一个想法叫做Claude Code就是这个时代的VI。VI非常牛逼非常好，对吧，真正的**super user**（超级用户），你能干出那个，真的我以前比如说在Facebook的时候，就很多岁数非常大的这个**senior engineer**（高级工程师），然后他们VI用的极溜。**power user**（高级用户）你会用的非常非常的好。但是从大众意义上来讲，最后胜利的可能是VS Code和JetBrains这种更加集成的环境。它集成了什么？从我的视角里面，比如说它可能文件管理是一个很大的点，**compiler**（编译器: 将源代码转换为可执行代码的程序）是一个很大的点，然后**plugins**（插件）是一个很大的点。如果从这个视角里去看，我觉得Claude Code **is long way to go for development**（在开发方面还有很长的路要走）。当然我觉得模型能力肯定是很重要的一部分。所以从我的视角里，我心目意义上的3.0的话，应该是基于今天Claude展示出来的能力，是否能够去封装一个类似于VS Code，就是说这个时代的VS Code 0.1的版本，能把我们刚才讲的那些事情，比如说我如何去做文件管理，你今天依然需要文件管理，你今天依然需要给AI很多plugins，因为AI需要很多**context**（上下文），你今天依然需要去做人和AI之间的交互。虽然我觉得Claude Code已经做得挺不错，但它没有那么完美。就像说可能更多的人还是习惯于可视化界面，很难去完全在一个terminal里面去进行交互。所以从这个视角里，可能如果Claude Code展示出的能力再向下进一步，有没有机会？这个可能是我们自己团队去思考的一件事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, yes, yes, yes, yes. That's exactly it. It's more like a showcase, and there are many things you can do with it. The best thing it does is to show you how you can use what might be the best code model in the world. I think that's a very good point. But if you define it as, for example, relying on Claude Code for all my development, I haven't seen anyone who can do that, just solely relying on Claude Code for their development. For instance, I find that a lot of people put Claude Code inside VS Code or Cursor, meaning they put it in their terminal. Because, for example, I need file management, I need to review certain code—once you've generated it, I need to look at the code and do a lot of previews. For example, how a frontend page I generated would look. You'll find it's very good, but it can't cover the entire experience of my development process. It's like a Raspberry Pi, right? That's the point. Or my other thought is that Claude Code is the VI of this era. VI is incredibly powerful and good, right? A true super user can achieve amazing things with it. Really, when I was at Facebook, for example, many very senior engineers were extremely proficient with VI. A power user would use it very, very well. But from a popular perspective, the ultimate winners are likely integrated environments like VS Code and JetBrains. What do they integrate? From my perspective, for example, file management is a big point, a compiler is a big point, and plugins are a big point. If you look at it from this perspective, I think Claude Code still has a long way to go for development. Of course, I think model capability is definitely a very important part. So from my perspective, what I envision as 3.0 should be based on the capabilities Claude has demonstrated today, whether it can encapsulate something similar to VS Code—meaning a VS Code 0.1 version of this era—that can handle the things we just talked about. For example, how do I do file management? You still need file management today. You still need to give AI many plugins because AI needs a lot of context. You still need to interact between humans and AI today. Although I think Claude Code has done quite well, it's not perfect. It's like more people are used to graphical interfaces and find it difficult to interact entirely within a terminal. So from this perspective, if Claude Code's demonstrated capabilities can go a step further, is there an opportunity? This is something our team is thinking about.</p>
</details>

### AI编程的3.0时代：工具与AI的深度融合

课代表立正：那这样的一个东西，你觉得和今天的Cursor，它的最大的区别是什么？把现在的Cursor再往上加一些按钮能加成那个样子吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, what do you think is the biggest difference between such a thing and today's Cursor? Can you just add some more buttons to the current Cursor to make it like that?</p>
</details>

石扬：我觉得这个是个非常好的问题，你也提醒了我。我自己的观点是，我们不说Cursor，就是围绕着IDE的形态去做，可能会是一个很大的**challenge**（挑战）。就是我作为一个开发者，我的终极目标是什么？是**deliver an application**（交付一个应用程序）。不管它是一个**Web**（网页应用）还是一个**APP**（移动应用）。我如果是deliver一个application，我在IDE里面的时间占我整个**process**（流程）里面我觉得30%-40%差不多了。在此之外，我有很多其他的工作是不在IDE里边的。比如说我可能去做什么**DevOps**（Development and Operations: 开发运维），对吧，比如说包括**A/B test**（A/B测试: 比较两个版本以确定哪个效果更好），所有这些东西可能是发生在**Browser**（浏览器）里边，可能是生成在其他的**Client**（客户端）里面。跟产品经理撕逼，哎，各种各样的这样事情，对吧，**Figma**（一款基于云的UI/UX设计工具）里边，文档里边各种各样这种问题。那么回到这里边，你过去是怎么做的？我作为一个开发者是怎么做的？是我作为真正的人工智能和不同的工具去交互，也就是我是那个调度者，知道我这个时间应该在这里面干事，这个时间应该在那里干事。我在不同的工具里边去转换的时候，context是在这里边，也就是说我知道这个context，然后我就去那个里面，然后发现了问题，然后再回来。如果说我们面向的是要去解决生成软件这个问题，**deliver result**（交付结果）这个问题，你会发现IDE只是整个流程里面的一部分。Cursor或者Trae现在的这个形态是，我们把AI **building into one tool**（内置到一个工具中），然后我们会发现我们实际用了**multiple tools**（多个工具）。当然你会发现每一个工具也有它自己**its own tool**（自己的工具）或者**its own copilot**（自己的Copilot），对，对吧。但这个问题是，你要在不同的那个工具里边的AI里边，来回地把这个context最简单**copy paste**（复制粘贴）。很多人用Cursor包括用Trae，它都这么用。我先在ChatGPT里边去跟它聊，聊完之后写一个**MD**（Markdown: 一种轻量级标记语言），MD弄好了，粘到这个Cursor或者Trae里边，然后你帮我生成。生成完了，出来了他觉得还不错的，然后我再去维护这个MD。假如说我需要让这个MD就回到那个ChatGPT里面，我要把整个再粘进去，然后粘进去的时候，其实你有context的缺失的。比如说那堆代码，比如说我生成的那个网页里边哪个好看哪个不好看，就各种各样的context，其实也很难，因为你有多模态的问题。我这个图到底怎么弄，或者说我到底是给哪段代码，给哪段报错，实际上是都不知道的。我觉得那可能**next-generation**（下一代）我们自己的思考是，我们是否应该把更多的工具**build into AI**（内置到AI中），而不是每个工具有一个AI。这样的话就变成了AI，至少它和所有的context是有连接的。它先不说它知不知道，但至少它有连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that's a very good question, and you've reminded me. My own view is that, not just Cursor, but building around the IDE form might be a big challenge. What is my ultimate goal as a developer? It's to deliver an application, whether it's a web application or a mobile app. If I'm delivering an application, the time I spend in the IDE probably accounts for about 30-40% of my entire process. Beyond that, I have many other tasks that are not within the IDE. For example, I might be doing DevOps, right? Including A/B testing, all these things might happen in a browser, or be generated in other clients. Arguing with product managers, all sorts of things like that, right? In Figma, in documentation, all sorts of these problems. So, coming back to this, how did you do it in the past? How did I, as a developer, do it? It was me, as a true human intelligence, interacting with different tools, meaning I was the orchestrator, knowing that I should be working here at this time, and there at that time. When I switch between different tools, the context is here, meaning I know this context, then I go into that tool, find a problem, and then come back. If we are aiming to solve the problem of generating software, delivering results, you'll find that the IDE is only a part of the entire process. The current form of Cursor or Trae is that we build AI into one tool, and then we find that we actually use multiple tools. Of course, you'll find that each tool also has its own tool or its own Copilot, right? But the problem is, you have to simple copy-paste the context back and forth between the AIs in those different tools. Many people use Cursor, including Trae, in this way. I first chat with ChatGPT, then write an MD, get the MD ready, paste it into Cursor or Trae, and then you help me generate. After it's generated, if I think it's good, I then maintain this MD. Suppose I need to bring this MD back into ChatGPT; I have to paste the whole thing in again. And when you paste it in, you actually have a loss of context. For example, that pile of code, or which part of the generated webpage looks good or bad—all sorts of context are actually very difficult because you have multimodal issues. How do I handle this image, or which piece of code, which error message am I referring to? In reality, it's all unknown. I think for the next generation, our own thinking is, should we build more tools into AI, rather than having each tool have an AI? This way, AI becomes at least connected to all contexts. It's not about whether it knows, but at least it has connections.</p>
</details>

课代表立正：可能知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might know.</p>
</details>

石扬：对，就是有知道的可能性。对，它有知道的可能性。但是它就变成一个三方了，变成说人、AI和context。这个challenge是什么呢？就刚才你讲的，虽然我把context给到AI了，但是我作为一个人，我也不知道AI是知道还是不知道，我也不知道它知道多少，尤其它的**attention**（注意力机制）到底在哪里。对，对。就有各种各样的这样的问题。但是如果我们能很好地解决这个问题，它就会变成说，其实你整个的**process**（流程）从一个单一的一个工具，扩展到你和AI交互，去操纵各种工具来完成你的开发任务。从我们的视角里，这是我们的分叉。也许它不一定是正确的，也许我们在这个过程里面会发现很多challenge，甚至说可能**not make sense**（没有意义）。但是这是从我们自己的角度里面，我们希望未来能够给我们的用户去提供的这个工具去做这些事情。我觉得这个是就刚才你讲的，从抄到你是否有自己的分叉，或怎么去洞见和思考这件事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yes, there's a possibility of knowing. Yes, it has the possibility of knowing. But then it becomes a three-way interaction: human, AI, and context. What's the challenge here? As you just mentioned, although I've given the context to the AI, as a human, I don't know if the AI knows or doesn't know. I don't know how much it knows, especially where its attention truly lies. Yes, yes. There are all sorts of such problems. But if we can solve this problem well, it will mean that your entire process expands from a single tool to you interacting with AI to manipulate various tools to complete your development tasks. From our perspective, this is our divergence. Perhaps it's not necessarily correct, and perhaps we will encounter many challenges in this process, or even find that it might not make sense. But from our own perspective, this is what we hope to provide our users with in the future—a tool to do these things. I think this is what you just talked about: from copying to having your own divergence, or how to gain insight and think about this matter.</p>
</details>

课代表立正：嗯，我自己是非常认可这个分叉的。而且我不是从一个开发者的角度，因为其实我从刚才的对话能感觉出来，你是非常注重开发者在这里面，怎么样子把事情做好的。从这个角度来说，我觉得**SOLO**（这里指Trae的内部项目或理念名称）它似乎达成了两点，就是它既能让开发者在一个界面下调度更多的工具，去更高效地完成他的开发任务，也有可能可以让普通人就是用自然语言去完成他们想完成的东西。你会觉得这是两个不同的任务吗？还是其实是一个任务？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hmm, I personally really agree with this divergence. And I'm not looking at it from a developer's perspective, because I can tell from our conversation that you're very focused on how developers can do things well in this context. From this perspective, I think SOLO seems to achieve two things: it allows developers to orchestrate more tools within a single interface to complete their development tasks more efficiently, and it also potentially allows ordinary people to achieve what they want using natural language. Do you think these are two different tasks, or essentially one task?</p>
</details>

### 专业开发者与普通用户的分叉：AI编程的未来挑战

石扬：我觉得从终极形态上来看，它有可能是一个任务。但从当前的场景里，我认为它一定是两个类型的任务。从我自己的观察来看，它有几个比较大的**challenge**（挑战）。第一个challenge是说，到底今天AI模型的**端到端**（End-to-End: 指从输入到输出的整个过程由一个系统完成）能力有多强。我们先说**vibe coder**（指通过直觉和少量提示进行编程的非专业开发者），今天的AI能力其实它完全可以说你给我做一个贪吃蛇，哪怕说前后端分离的贪吃蛇，它会做得非常好，你完全可以上线的那种水平。但是这是vibe coder能够想象和做到的极限。他可能再复杂一点，你给我做一个前后端分离的抖音，这时候他是肯定做不出来的。就是当你问出这个问题的时候，他能达到的上限是由这个问题的复杂度决定。软件生成的复杂度角度上，它的复杂度越大你的那个衰减越明显。我们会看到很多完全没有任何代码经验的vibe coder，当前有明显上限的。但是我们同时也看到，当你具备了足够的专业技能的时候，当你学会了如何去问更好问题的时候，你会发现这些工具会对你有明显的增益。我们刚才讲的去做一个抖音这件事情，我就会把这个做成一个抖音，拆成可能1,000个**task**（任务）。他做不出一个抖音，但是你告诉他说，我现在要去建立一个库表，它的结构是什么样的。当你问出这种问题，他是等同于你让他做一个贪吃蛇的。但前提是什么？你要知道怎么把一个做成前后端分离的抖音，拆成100个、1,000个类似于贪食蛇这个复杂度的问题去问给这个AI。这是第一步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think from an ultimate perspective, it could be one task. But in the current scenario, I believe they are definitely two types of tasks. From my own observation, there are several significant challenges. The first challenge is, how strong are the end-to-end capabilities of today's AI models? Let's talk about the "vibe coder." Today's AI capabilities can actually be used to create a Snake game, even a front-end and back-end separated Snake game, and it will do it very well, to a level where you can actually launch it. However, this is the limit of what a vibe coder can imagine and achieve. If it's a bit more complex, like "make me a front-end and back-end separated TikTok," it definitely cannot do it. That is, when you ask such a question, the upper limit it can reach is determined by the complexity of the question. From the perspective of software generation complexity, the greater the complexity, the more obvious the decay. We will see that many vibe coders with no coding experience currently have clear limitations. But we also see that when you possess sufficient professional skills, and when you learn how to ask better questions, you will find that these tools provide significant benefits. Regarding building a TikTok, as we just discussed, I would break this down into perhaps 1,000 tasks. It cannot build a TikTok, but if you tell it, "I need to set up a database table, and this is its structure," when you ask such a question, it's equivalent to asking it to build a Snake game. But what's the prerequisite? You need to know how to break down building a front-end and back-end separated TikTok into 100, or 1,000, problems similar in complexity to a Snake game, and ask them to the AI. This is the first step.</p>
</details>

石扬：第二步就是即使你能问出这类问题，过程还是会出错。当它会出错的时候，你需要专业的技能去进行校正。但是这个对于没有代码经验的人，只会问贪吃蛇的人，他真的就是两眼一抹黑，就是这是啥呀，他也不看那个代码。对，他也看不懂，他也没法去看。但是对于那些专业的人，为什么他体验这么好的点就在于，可以一眼去**identify**（识别）出来，哦，这个问题是什么？你可能就补了一句，你说不要这么写，可能我们换一种方式去写，可能用这样的方式它一下就过去了。那个没有开发经验的同学，肯定是没有办法去知道。有一个知识的鸿沟。对，或者是技能的鸿沟。你过去被专业培训过。我经常在内部和做产品的同学去讲说，每个人都会清晰美好的定义后天是什么。哈哈哈，但我们今天面临的是给明天的人做产品。我怎么**leverage**（利用）今天的能力去**make**（让）明天的人**happy**（满意）。后天都是AGI，对，我们都那什么（知道）。对吧，那明天是什么？我觉得非常非常重要。这件事情，从这个视角里，我们去看，当我是做一个专业开发者，问出一个问题的时候，我能不能更好地让专业开发者，原来你要拆成1,000个，我试图努力让你拆成比如说500个。也就是这个问题变得越来越大，但是我依然能够做到。我觉得这是第一个我们能够做到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second step is that even if you can ask such questions, errors will still occur during the process. When errors occur, you need professional skills to correct them. But for someone with no coding experience, who can only ask for a Snake game, they're truly clueless—they'll wonder, "What is this?" They won't even look at the code. Yes, they can't understand it, and they can't even look at it. But for professionals, why is their experience so good? It's because they can identify the problem at a glance. You might just add a sentence, saying, "Don't write it this way; maybe we can write it differently," and with that approach, it just works. A student with no development experience definitely wouldn't be able to figure that out. There's a knowledge gap. Yes, or a skill gap. You've been professionally trained. I often tell my product colleagues internally that everyone can clearly and beautifully define what the day after tomorrow will be like. Hahaha, but today we are facing the task of building products for tomorrow's people. How do I leverage today's capabilities to make tomorrow's people happy? The day after tomorrow is all AGI, yes, we all know that, right? So, what about tomorrow? I think this is very, very important. From this perspective, when I, as a professional developer, ask a question, can I better enable other professional developers? Originally, you had to break it down into 1,000 tasks; I'm trying to help you break it down into, say, 500 tasks. That is, the problem becomes larger, but I can still achieve it. I think this is the first thing we can do.</p>
</details>

石扬：第二个是当它发生错误的时候，能快速告诉我，提升我的效率。你能够告诉我哪里出现了问题，能够快速给我反馈，就是**responsive**（响应迅速）。比较boss word叫**human in the loop**（人在环中: 指将人类智能集成到自动化系统中，以进行监督、决策或纠正）。我能够告诉你这个问题是什么，我们一起去把它做成。第二个是什么？**collaboration**（协作），对吧。第一是你要把他当人，**be a human**（像人一样），就是你看你问你的同事，你可以说诶，你帮我做一个这个。但是即使你的同事在做的过程中也会出现问题，说哎，不不不，这做错了，咱不这么做，你要用这个框架，或者用这个最新的版本。我觉得这个是能够如何更快速给反馈，以及基于这个反馈，更快速地去重新迭代。这个是很重要的一个点。然后你会发现这些东西之于所谓的vibe coder是没有意义的。然后在以此的基础上说，我们再向下去提升。最简单说，他说我做好了。那你会有几个问题。第一个问题是你写了啥呀？哈哈哈，我得看一眼吧。看一眼分几种：看你的代码，看你的生成物。你代码就是可能IDE里边，看你的生成物可能是比如说你是个前端，我要**browser**（浏览器）。如果说你是个**mobile**（移动端），我可能要**emulator**（模拟器）去看这些所有的东西。我能多快速地让我的用户去看到这个，这是为什么我去讲Claude Code是2.5。那你现在呢？我打开那个Browser还是要看那些东西。为什么我说可能像传统意义上基于IDE来做的，不管你加了多少东西，它本身就是个编辑器。那么编辑器的核心是提升**Typing**（打字）的体验。但实际上如果AI能力再往前发展，其实你更多的是发生在对话体验，就是我问问题。你真的把他当成一个人，比如说你是AI，我是那个，我就说课代表，你帮我做一个什么什么。我要清晰地问出问题，描述的越清楚，你就做的越准。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second is that when an error occurs, it can quickly inform me, improving my efficiency. It can tell me where the problem occurred and provide quick feedback, which is responsive. A more "boss word" term is "human in the loop." I can tell you what the problem is, and we can work together to solve it. What's the second thing? Collaboration, right? First, you need to treat it as a human, "be a human." For example, when you ask your colleague, you might say, "Hey, can you help me do this?" But even your colleague might encounter problems during the process, saying, "Oh no, this is wrong, let's not do it this way, you should use this framework, or this latest version." I think this is about how to give feedback more quickly, and based on that feedback, iterate more quickly. This is a very important point. And you'll find that these things are meaningless to the so-called "vibe coder." Then, building on this, we further improve. Simply put, if it says, "I'm done." Then you'll have a few questions. The first question is, "What did you write?" Hahaha, I have to take a look, right? There are several ways to look: look at your code, look at your generated output. Your code might be in the IDE, and if you're a frontend developer, you might need a browser to see your generated output. If you're on mobile, I might need an emulator to see all these things. How quickly can I let my users see this? That's why I say Claude Code is 2.5. And now? I still have to open the browser to see those things. Why do I say that traditionally, IDE-based tools, no matter how much you add, are essentially editors? The core of an editor is to improve the typing experience. But in reality, if AI capabilities advance further, more of your interaction will happen through dialogue, meaning I ask questions. You truly treat it as a person. For example, you are the AI, and I am the one saying, "Kedaibiao, help me do something." I need to ask questions clearly; the clearer the description, the more accurate your output will be.</p>
</details>

石扬：第二个什么？**review**（审查）远比typing更重要。我要做好**向上管理**（Managing Up: 指员工主动管理与上级关系，以优化工作成果），我要展示我的思考过程，我要跟你说我接下来做什么，但是我要控制这个度，就是不能这个事请示，那个事请示。是的，我们就觉得说最重要，你看第一是你在chat里边的体验，你问一个问题，它可能会干十几分钟、20分钟甚至一个小时都可以能干得出来。然后你会发现那个的产出，它的体验和你在ChatGPT里面体验是不一样的。ChatGPT你问再长的问题，给你一个三四千字，已经到头了对不对？读一个三四千字的文章，快一点两三分钟，慢一点5分钟仔细读的话。但是如果你去看一个20分钟coding agent生成的那个东西，我估计可能是上十万行都有可能，对吧？这个时候你怎么review？你过去没有这样的challenge。你发现诶，这东西它不**work**（运行），你怎么能快速找到是哪犯错了？而且每次都差一点，对吧？你要往上倒，倒倒倒倒非常长，你怎么去搞这些东西？那你从**UI**（User Interface: 用户界面）的角度上，你是不是要去做抽象？就是说可能我把大段的东西，我要去做总结。也就这一段我大概干了什么，改了什么东西，可能出现了什么样的错误。这个其实是对于用户来讲，他的效率会变高。和当我发现错误的时候，我怎么能快速地去**jump to**（跳转到）比如说IDE里面，**jump to** **web browser**（网页浏览器）里面，然后去**build in**（内置）到这些tool里边，然后**open**（打开）。其实它就是一个**next generation**（下一代）的**plugin system**（插件系统）。就是如果你上一代是在给VS Code做plugin，这一代你是在给你的AI做plugin。这个plugin的形态是什么？不知道。就是它最完美的形态是什么？不知道。我们今天能**leverage**（利用）的还是**existing tool**（现有工具）。我们可能把IDE和AI去做组合，browser和AI去做组合。但实际上它们太重了，因为它们不是**design for AI**（为AI设计）的。AI其实不需要这么多的高亮，高亮是给人看的。然后也就是说他可能你给他Markdown，他就已经解决问题了。那就变成另一个问题，其实右边的工具是给人用的。人也很重要，因为人要去review这个东西。我们提升的是review感。当你提升review感的时候，你不需要那么多操作的时候，那我的那个就会非常非常的简化，我的那个速度就会非常非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's the second thing? Review is far more important than typing. I need to manage up effectively, I need to show my thought process, I need to tell you what I'm going to do next, but I also need to control the extent of this—I can't ask for permission for every little thing. Yes, we think the most important thing, first, is your experience in the chat. You ask a question, and it might work for ten, twenty minutes, or even an hour. And you'll find that the output, its experience, is different from what you get in ChatGPT. No matter how long a question you ask ChatGPT, it'll give you three to four thousand words at most, right? Reading a three to four thousand-word article takes two to three minutes if you're fast, or five minutes if you read carefully. But if you look at something generated by a 20-minute coding agent, it could easily be hundreds of thousands of lines, right? How do you review that? You didn't have this challenge before. You find, "Oh, this thing doesn't work." How can you quickly find where the error was made? And it's always just a little off, right? You have to go back, back, back, a very long way. How do you deal with these things? From a UI perspective, do you need to abstract? That is, perhaps I need to summarize large chunks of content. What did I roughly do in this section, what did I change, what kind of errors might have occurred? This actually increases the user's efficiency. And when I find an error, how can I quickly jump to, say, the IDE, jump to the web browser, and build into these tools, and open them? In fact, it's a next-generation plugin system. If the previous generation was about making plugins for VS Code, this generation is about making plugins for your AI. What is the form of this plugin? We don't know. What is its most perfect form? We don't know. What we can leverage today are still existing tools. We might combine the IDE and AI, or the browser and AI. But in reality, they are too heavy because they are not designed for AI. AI doesn't actually need so many highlights; highlights are for humans. And that means if you give it Markdown, it might already solve the problem. Then it becomes another problem: the tools on the right are for humans. Humans are also very important because humans need to review this. What we are improving is the review experience. When you improve the review experience, and you don't need so many operations, then my process will be very, very simplified, and my speed will be very, very fast.</p>
</details>

课代表立正：我有一个不形象的比喻是，AI coding工具的plugin，可能就是小程序那样的。当你需要的时候你打开它，当你不需要的时候，你根本不**care**（关心）。而小程序是非常重review而不重操作的。但凡复杂的操作，你都不太希望在小程序里面去做，对吧？小程序里面做的大多数都是什么支付、快速下单、点菜这种不是那么重操作的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have an imperfect analogy: the plugins for AI coding tools might be like mini-programs. You open them when you need them, and when you don't, you don't care at all. And mini-programs are very heavy on review but light on operations. You generally don't want to do complex operations within a mini-program, right? Most things done in mini-programs are things like payments, quick ordering, or ordering food—things that aren't very operation-heavy.</p>
</details>

石扬：其实我觉得未来的AI coding里边的plugins，你可能只需要做一两下点击看一眼。这个可能是我们能够看到的未来的样子。得，其实我们要去做的是，就第一是帮你去做更好的和AI沟通，第二是帮你去更好地review AI产出的结果，第三是，如何更好地帮助AI提供更多的工具和context。对，所谓就是给AI做plugin，我觉得就是这三件事。这是从Solo的视角和我们认为下一代产品应该做的地方。同时你刚才也问了，我们认为vibe coder和**professional coder**（专业程序员）是在现在这个阶段，没有办法融合到一起的。因为但凡你要做**serious APP**（专业级应用程序），人的比重就会很高。vibe coder的他的需求就是我不能有这么高的参与度，因为我的能力没有办法支撑我去做。对，然后就变成你其实就是分开的。application最大的意义是来自于，当你发现了一类人群的共通的，在这个场景里面的需求，你如何通过有效的封装，让这类的需求变得更顺滑、低成本、更愉悦。我觉得这个就是核心的价值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, I think in future AI coding plugins, you might only need to click once or twice to take a look. This is what we might see in the future. So, what we actually need to do is, first, help you communicate better with AI; second, help you better review the results produced by AI; and third, how to better help AI by providing more tools and context. Yes, what I mean by making plugins for AI, I think, is these three things. This is from Solo's perspective and where we believe the next generation of products should go. At the same time, you also asked earlier, we believe that "vibe coders" and professional coders cannot be merged at this stage. Because whenever you want to build a serious app, the human involvement will be very high. The vibe coder's demand is that they cannot have such a high level of participation because their capabilities cannot support them in doing so. Yes, and then it becomes that you are actually separate. The greatest significance of an application comes from when you discover a common need for a group of people in a specific scenario, how you effectively encapsulate it to make these needs smoother, lower cost, and more enjoyable. I think this is the core value.</p>
</details>

### 总结与展望

课代表立正：盘点现在AI编程或者vibe coding工具的话，来自字节的Trae，不管是从用户量还是质量来说，都是当之无愧的世界第二。可是提到Trae，很多同学的第一印象就是抄，再就是便宜。过去这也是我的印象。但是过去这一年，我们肉眼可见的看到Trae的水平越抄越好，但很多其他的工具，比如说Copilot、**Windsurf**（这里可能指代某个AI编程工具，但非通用名称，保持原文），反而掉队了。这就让我产生了好奇，我今天就带着这个非常尖锐的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we take stock of current AI programming or vibe coding tools, Trae from ByteDance is undoubtedly the world's second-best, both in terms of user base and quality. However, when Trae is mentioned, many people's first impression is that it's a copycat, and that it's cheap. This was my impression too in the past. But over the past year, we've visibly seen Trae's quality improve with each iteration, while many other tools, such as Copilot and Windsurf, have fallen behind. This made me curious, and today I bring this very sharp question.</p>
</details>

石扬：中国的团队相比起美国的团队，更善于的是命题作文。这个问题是这样的，然后你是否能还原出，或者在这个基础上做得更好，成本更低。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Chinese teams, compared to American teams, are more adept at "composition on a given topic." The problem is presented, and then the question is whether you can reproduce it, or improve upon it, and at a lower cost.</p>
</details>

课代表立正：其实我跟石扬已经认识很久了，我们的背景也比较相似。在过去我们的交流里，石扬对抄这件事情毫不避讳，但是在他的心中，抄只是一个途径，只是为了让团队作为一个后发者，少走弯路，更快地补上该补的短板，给大家一个可以使用的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Actually, Shi Yang and I have known each other for a long time, and our backgrounds are quite similar. In our past conversations, Shi Yang has been very open about copying, but in his mind, copying is just a means. It's simply to allow the team, as a latecomer, to avoid detours, quickly make up for shortcomings, and provide everyone with a usable tool.</p>
</details>

石扬：三角形的轮子很漂亮但是我希望它是个圆的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A triangular wheel is beautiful, but I wish it were round.</p>
</details>

课代表立正：但是站在今天，能抄的都已经抄完了。更重要的就是考验这个团队。我们深入地探讨了石扬的认知，他跟我总结了为什么在他心中，AI编程今天走到了2.5的时代，接下来3.0的形态又长什么样子。我也非常地认同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But standing today, everything that could be copied has been copied. What's more important now is to test the team. We delved deep into Shi Yang's understanding, and he summarized for me why, in his mind, AI programming has reached the 2.5 era today, and what the 3.0 form will look like. I also strongly agree.</p>
</details>

石扬：Cursor或者Trae现在的这个形态是，我们把AI **building into one tool**（内置到一个工具中），我们会发现我们实际用了**multiple tools**（多个工具）。是否应该把更多的工具**build into AI**（内置到AI中），而不是每个工具有一个AI。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">The current form of Cursor or Trae is that we build AI into one tool, and we find that we actually use multiple tools. Should we build more tools into AI, rather than having each tool have an AI?</p>
</details>

石扬：终极的AI coding产品，一定不是Trae的样子，一定不是Cursor的样子，也一定不是Claude Code的样子。它还有**long way to go**（很长的路要走）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The ultimate AI coding product will definitely not look like Trae, it will not look like Cursor, and it will not look like Claude Code. It still has a long way to go.</p>
</details>

课代表立正：如果你想了解AI编程，或者顶级的AI工具下一步会往哪里走，他们会自动化什么样的工作，那这期视频你不应该错过。我们开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you want to understand AI programming, or where top AI tools will go next, what kind of work they will automate, then you shouldn't miss this video. Let's begin.</p>
</details>