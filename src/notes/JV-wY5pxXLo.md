---
area: tech-insights
category: technology
companies_orgs:
- Google
- Shopify
- Cobalt Cowboys
date: '2025-12-14'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Last Economy
people:
- David Sacks
products_models:
- Gemini Flash
- Cursor
- Composer One
- Glink
- Sizzy
- Zero to Ship
project:
- ai-impact-analysis
- systems-thinking
- historical-insights
series: ''
source: https://www.youtube.com/watch?v=JV-wY5pxXLo
speaker: AI Engineer
status: evergreen
summary: “本文深入探讨了AI辅助编程（Vibe Coding）如何重塑软件开发流程，提出‘振动工程’作为新范式，并分析其对职业结构、技术债务与开发者价值的深远影响。”
tags:
- debt
- development
- skill
- system
- vibe-coding
title: 从振动编码到振动工程：AI时代的开发者生存指南
---

## 开场白：多线程生活与开发者工具
那是我旧头像。好了，这是我的新头像。我在美国才待了三天，Twitter 上就已经收到了全套周边产品。如果你关注我，接下来一周我的时间线会很奇怪，但之后我们会回归正常的欧洲作息。别担心。

<details> <summary>View/Hide Original English</summary> <p class="english-text">That was my old avatar. Okay, this is my new avatar. I've been in the US for three days, and I already got full swag on Twitter. If you follow me, my timeline is going to be weird for the next week, but then we go back to the regular European schedule. Don't worry.</p> </details>

我参观了你们的一些博物馆，我超爱这里。这些是我最喜欢的经历——探索你们的文化，做各种文化充实的事。当然，还有那些认识我 Twitter 账号的人给我的“折磨”。

<details> <summary>View/Hide Original English</summary> <p class="english-text">I visited some of your museums. I love it here. These are my favorite experiences—exploring your culture, doing culturally enriching things. And of course, getting tormented by people who know my Twitter handle.</p> </details>

好吧，我说的比预想的还多。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Okay, I talked more than I expected.</p> </details>

谁在用 Sizzy（一款专为开发者设计的多屏预览浏览器）？通常只有一个人在后排，连保洁员都不听我说什么。我有注意力缺陷多动障碍（ADHD: Attention Deficit Hyperactivity Disorder），所以我同时在做上百件事。Sizzy 就是其中之一——一个专为开发者打造的浏览器，不是为了取代你的日常浏览工具，而是像 Photoshop 一样，在前端开发中给你提供各种帮助。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Who is using Sizzy? Usually, it's just one person in the back; even the janitor doesn't listen to me. I have ADHD, so I'm doing a hundred things at once. Sizzy is one of them—a browser made for developers, not to replace your daily browser, but to be like Photoshop for frontend development.</p> </details>

我正在做的另一件事是“生命操作系统”（Life OS），它整合了你生活中的所有元素：用药提醒、习惯追踪、待办事项、计划工具等等。这是一款全栈产品，目前在售，名叫“Zero to Ship”。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Another thing I'm working on is a "Life OS," which integrates everything in your life: med reminders, habit tracking, to-dos, planning tools, etc. It's a full-stack product currently for sale called "Zero to Ship."</p> </details>

最后一件事，我正在复兴一个叫 Glink 的项目——它集成了变更日志、路线图和无数其他功能。所以，先不聊我的个人履历了，我真心希望明年能被邀请回来，因为在这里我能做网络社交、认识人、教东西——太棒了。

<details> <summary>View/Hide Original English</summary> <p class="english-text">One last thing, I'm reviving a project called Glink—it integrates changelogs, roadmaps, and countless other features. So, enough about my bio; I really hope to be invited back next year because here I can network, meet people, teach things—it's amazing.</p> </details>

你们在笑，很好。但让我们认真讨论一下：你们为什么在这里？是为了学习，为了社交，之后还要提升所有技能。

<details> <summary>View/Hide Original English</summary> <p class="english-text">You're laughing, good. But let's discuss seriously: why are you here? To learn, to network, and afterwards to upgrade all your skills.</p> </details>

## 前端开发的荒谬现状
2017年，我做过一场有史以来最长标题的演讲：“在不发疯的前提下驾驭超驱动型前端开发世界”。那时，我讲的是如何应对前端世界的混乱。现在？更疯狂了。

<details> <summary>View/Hide Original English</summary> <p class="english-text">In 2017, I gave a talk with the longest title ever: "Surviving the Hyper-Driven Frontend Development World Without Going Insane." Back then, I talked about handling the frontend chaos. Now? It's even crazier.</p> </details>

在其他行业，比如 Vision Pro（Apple 发布的混合现实头显设备），你会看到真实物体上方有布料碰撞模拟、各种疯狂的视觉效果。而在这里，我们正在对网格纹理进行切片，围绕着球体旋转——等等，这些瀑布、这些网格……你可以拿一块石头，把它砸进另一块石头里，它居然神奇地融合成一个结构——这太疯狂了。

<details> <summary>View/Hide Original English</summary> <p class="english-text">In other industries, like Vision Pro, you see cloth collision simulations over real objects, all sorts of crazy visual effects. And here, we are slicing mesh textures, rotating around spheres—wait, these waterfalls, these meshes... you can take a rock and smash it into another rock, and it magically fuses into one structure—it's insane.</p> </details>

我正在铺垫，但因为你尊重你的职业、爱惜你 LinkedIn 上的头衔——“梦想架构师”、“首席执行官”——你会努力忍住不笑，但下一张幻灯片你绝对会笑出来。因为这就是前端开发的现状：快十年了，我们还在原地踏步。

<details> <summary>View/Hide Original English</summary> <p class="english-text">I'm building up to something, but because you respect your career and cherish your LinkedIn titles—"Dream Architect," "CEO"—you'll try not to laugh, but you definitely will at the next slide. Because this is the state of frontend development: almost ten years later, we are still in the same place.</p> </details>

这里有个警告：“你可能在 2037 年才能自定义下拉框样式。”

<details> <summary>View/Hide Original English</summary> <p class="english-text">Here's a warning: "You might finally be able to style a select box in 2037."</p> </details>

这玩意儿居然还活着！简直是奇迹。它还在茁壮成长——1500万次下载。我每年都设个日历提醒，检查它是不是死了——还没死。我会继续盯着 CLI（Command Line Interface: 命令行界面）。

<details> <summary>View/Hide Original English</summary> <p class="english-text">This thing is still alive! It's a miracle. It's thriving—15 million downloads. I set a calendar reminder every year to check if it's dead—it's not. I'll keep watching the CLI.</p> </details>

不久之后，也许在某些浏览器里，你不再需要 JavaScript 就能美化弹窗对话框。能为此鼓个掌吗？别鼓了，因为大家都有脑机接口。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Soon, maybe in some browsers, you won't need JavaScript to style a dialog popup. Can we get a round of applause for that? Don't clap, because everyone will have brain-computer interfaces by then.</p> </details>

而且，我们连“如何递增一个计数器”这种事都无法达成共识。这是 Ryan Florence 的演示——Remix 版本二、三、四，不管他们怎么折腾，这玩意儿就是一个计数器。

<details> <summary>View/Hide Original English</summary> <p class="english-text">And we can't even agree on "how to increment a counter." This is Ryan Florence's demo—Remix version two, three, four, no matter what they do, the damn thing is just a counter.</p> </details>

## Vibe Coding 的诞生
我们来谈谈 LLM（Large Language Model: 大语言模型）。LLM 写 React 的能力太强了，但只有人类觉得好笑——对大语言模型来说，这代码写得完美无缺。我们人类总想把其中的抽象层抽出来，觉得“让我改一下，让它更优”。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Let's talk about LLMs. LLMs are too good at writing React, but only humans find it funny—to the Large Language Model, the code is perfect. We humans always want to extract the [abstraction layers], thinking, "Let me change this, let me optimize it."</p> </details>

用 LLM 编程让这种体验变得更好，也更糟。尤其是 Composer One（AI 辅助编程编辑器 Cursor 的核心功能）——对我来说，它变得更糟了：你更快地到达正确的抽象，但也更快地到达错误的抽象。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Coding with LLMs makes this experience better and worse. Especially Composer One—for me, it got worse: you get to the right abstraction faster, but also to the wrong abstraction faster.</p> </details>

最棒的是，LLM 根本不关心重复代码。我从 2017 年就开始看到这一点：我们太在意“避免重复”，过早地抽象了。

<details> <summary>View/Hide Original English</summary> <p class="english-text">The best part is, LLMs don't care about duplicated code at all. I've been seeing this since 2017: we care too much about "DRY" (Don't Repeat Yourself) and abstract too early.</p> </details>

LLM 擅长写 React，因为根本没人真正懂怎么写 React。你去参加任何一场 React 大会，听第一场演讲就会惊呼：“天啊，它居然能这样？我以前全用错了！”

<details> <summary>View/Hide Original English</summary> <p class="english-text">LLMs are good at writing React because nobody actually knows how to write React. You go to any React conference, listen to the first talk, and go: "OMG, it can do that? I've been using it all wrong!"</p> </details>

我来试试看这里行不行。举起手，如果你觉得“Vibe Coding”（氛围编码/凭感觉编程）很酷？哇——太多人举手了！你们要是看过我在其他城市讲这内容，只有两个人举手，剩下的人一脸烦躁。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Let me try this here. Raise your hand if you think "Vibe Coding" is cool? Wow—so many hands! If you saw me give this talk in other cities, only two people raised their hands; the rest looked annoyed.</p> </details>

如果你刚落地地球，不知道“Vibe Coding”是什么？好——这里没人知道。那好吧，你们都对。因为我们正在共同“振动”着定义“Vibe Coding”这个词。

<details> <summary>View/Hide Original English</summary> <p class="english-text">If you just landed on Earth and don't know what "Vibe Coding" is? Okay—nobody knows. Well, you're all right. Because we are collectively "vibing" to define the term "Vibe Coding."</p> </details>

“Vibe Coding”这个词是由 Andrej Karpathy（前 Tesla AI 总监，OpenAI 创始成员）创造的。他写了一篇长文，讲什么是 Vibe Coding。简单说：你根本不关心代码本身，你只要按下“接受”，然后告诉 LLM 它该做什么就行。

<details> <summary>View/Hide Original English</summary> <p class="english-text">The term "Vibe Coding" was coined by Andrej Karpathy. He wrote a long post explaining what Vibe Coding is. Simply put: you don't care about the code itself; you just hit "Accept" and tell the LLM what to do.</p> </details>

这是 2017 年我演讲的幻灯片——那时还没人提 LLM。我说：如果看到前端开发的发展趋势，总有一天你会说：“嘿，给我新的头部样式，或者把这东西往右移三像素。”当时大家都笑。说：“不可能到那一步。”可现在，我们用 Cursor 和其他工具，干的不就是这个吗？

<details> <summary>View/Hide Original English</summary> <p class="english-text">This is a slide from my 2017 talk—nobody mentioned LLMs back then. I said: if you look at the frontend trend, one day you'll say: "Hey, give me a new header style, or move this thing three pixels right." Everyone laughed. They said: "It'll never get to that." But now, with Cursor and other tools, isn't that exactly what we're doing?</p> </details>

我最爱的一个是把它比作赌场：你买筹码（Tokens），转老虎机（Generate），可能中大奖，也可能一无所获——得到一个完整功能的 SaaS 应用，或者一堆垃圾。

<details> <summary>View/Hide Original English</summary> <p class="english-text">My favorite analogy is comparing it to a casino: you buy chips (tokens), spin the slot machine (generate), and you might hit the jackpot or get nothing—getting a fully functional SaaS app, or a pile of garbage.</p> </details>

## Vibe Engineering 与 基础设施集成
Andre 试图创造太多术语，第一次就失败了。他还发明了“半编码”——意思是观察 LLM 的行为。我不是半编码，也不是 Vibe Coding。我喜欢 Twitter 上有人创造的新词——“Vibe Engineering”（氛围工程）。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Andre tried to coin too many terms and failed the first time. He also invented "Half-Coding"—meaning observing the LLM's behavior. I'm not half-coding, nor am I vibe coding. I like a new term someone coined on Twitter—"Vibe Engineering."</p> </details>

当你用智能体持续编码，你根本不动代码，只是盯着屏幕：“嘿，我要抓到你。”——你看起来像《嗜血法医》(Dexter) 在观察。你觉得：“等等，这有点不对劲。为什么？”

<details> <summary>View/Hide Original English</summary> <p class="english-text">When you code continuously with agents, you don't touch the code; you just stare at the screen: "Hey, I'm gonna catch you." — You look like Dexter observing. You think: "Wait, something's wrong here. Why?"</p> </details>

我们在代码附近训练它们，让它们像我们一样。它们写的代码很烂。如果你在乎生产数据——那你确实应该担心。这是真实截图，可惜。Oops Daisy——你的生产数据没了！

<details> <summary>View/Hide Original English</summary> <p class="english-text">We train them near code to make them like us. The code they write is crap. If you care about production data—you really should worry. This is a real screenshot, sadly. Oops Daisy—your production data is gone!</p> </details>

我们解决了基础设施集成问题。有了标准：AI SDK、UI、MCP（Model Context Protocol: 模型上下文协议）——用于智能体调用工具。

<details> <summary>View/Hide Original English</summary> <p class="english-text">We solved the infrastructure integration problem. We have standards: AI SDK, UI, MCP—for agents to call tools.</p> </details>

我们把它们和人类用的工具整合了：Linear（极速项目管理工具）、GitHub、Slack、Sentry（实时错误追踪平台）。

<details> <summary>View/Hide Original English</summary> <p class="english-text">We integrated them with tools humans use: Linear, GitHub, Slack, Sentry.</p> </details>

在 Vibe Engineering 侧，人们谈论的是技术层面：TRPC、CUD 定义抽象……你本质上是在做架构——你想让东西怎么运行。在 Vibe Coding 那边，人们只说：“给我一个值一百万美元的 App，别出错。”

<details> <summary>View/Hide Original English</summary> <p class="english-text">On the Vibe Engineering side, people talk technical: TRPC, CUD definitions abstractions... you are essentially doing architecture—how you want things to run. On the Vibe Coding side, people just say: "Give me a million-dollar App, don't break."</p> </details>

## 阻碍变革的 PITA 开发者
现在来诊断：你是不是一个“令人讨厌”的开发者？这可能是大多数人反感智能体编码的真正原因。我请 Dr. Kits 上台，做个快速诊断——你是不是“PITA”（Pain In The Ass: 令人抓狂的/死抠细节的）开发者？

<details> <summary>View/Hide Original English</summary> <p class="english-text">Now let's diagnose: are you an "annoying" developer? This might be the real reason most people dislike agent coding. I invite Dr. Kits to the stage for a quick diagnosis—are you a "PITA" (Pain In The Ass) developer?</p> </details>

症状：你在两行代码的 PR（Pull Request: 代码合并请求）里留个细枝末节评论。你的词典里没有“LGTM”（Looks Good To Me: 看起来不错）这个词——它不存在。同意同事的想法会让你胃痛、胸闷：“他必须按我的方式来。”

<details> <summary>View/Hide Original English</summary> <p class="english-text">Symptoms: You leave nitpicky comments on a two-line code PR. The phrase "LGTM" doesn't exist in your dictionary—it's not there. Agreeing with a colleague's idea gives you stomach aches and chest tightness: "He must do it my way."</p> </details>

甚至在代码注释里都这样——抱歉，Rust 党们，但你确实挺烦人。有人让你把下划线函数换成原生实现，然后换 map 为 for 循环，再换成二进制——只为两个用户能快一点？他们之前用旧方法都挺好。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Even in code comments—sorry, Rustaceans, but you are annoying. Someone asks you to replace an underscore function with a native implementation, then swap map for a for loop, then to binary—just so two users get it a bit faster? They were fine with the old way.</p> </details>

我认为，很快我们就会与 AGI（Artificial General Intelligence: 通用人工智能）融合——我们会躺在矩阵舱里，吸收世界所有信息。我们将成为超级智能的豆子。而其中一个舱里，会冒出一个 PITA 开发者——纠正 AGI：“嘿，我觉得我们可以优化一下。这不够最优。”

<details> <summary>View/Hide Original English</summary> <p class="english-text">I think soon we will merge with AGI—we'll be lying in matrix pods, absorbing all the world's information. We will become super-intelligent beans. And from one of the pods, a PITA developer will pop up—correcting the AGI: "Hey, I think we can optimize this. This is sub-optimal."</p> </details>

## 未来展望：技能重塑与 React 牛仔
最后一个原因：技能问题。振动编码和振动工程不是写英文。很多人误以为：“我只要用英语描述，AI 就输出代码。”——其实是一堆技能的混合体：了解模型的能力边界、理解智能体上下文限制、如何写规则、提示工程（别叫它“提示工程”）。

<details> <summary>View/Hide Original English</summary> <p class="english-text">The last reason: skill issue. Vibe coding and vibe engineering are not writing English. Many people mistakenly think: "I just describe it in English, and AI outputs code." — It's actually a mix of skills: knowing the model's capabilities, understanding agent context limits, how to write rules, prompt engineering (don't call it "prompt engineering").</p> </details>

工作怎么办？很多人问：“AI 会抢走我们的饭碗。”Twitter 上到处都是这种人：“我会取代你们！”我只能说：现在还行。我不知道“现在”什么时候结束。但如果你仔细观察——其实是从底部开始薄化：实习生、初级开发者没了入场券，因为 AI 代理能直接替代他们。

<details> <summary>View/Hide Original English</summary> <p class="english-text">What about jobs? Many ask: "Will AI take our jobs?" Twitter is full of these people: "I will replace you!" All I can say is: it's fine for now. I don't know when "now" ends. But if you look closely—it's actually thinning from the bottom: interns and junior developers are losing their entry tickets because AI agents can directly replace them.</p> </details>

但有希望——一个新职位诞生了：振动代码修复员！这不是段子，100% 认真。Reddit 上有人问：“我搞到 80%，剩下的 20% 怎么办？”所以他们雇真人来完成最后 20%。

<details> <summary>View/Hide Original English</summary> <p class="english-text">But there is hope—a new job is born: Vibe Code Fixer! This is not a joke, 100% serious. Someone on Reddit asked: "I got to 80%, what about the remaining 20%?" So they hire real people to finish the last 20%.</p> </details>

但历史上薪资最高的工程师——永远是那些维护遗留系统的人，资深老将。我 2017 年最喜欢的一个例子：Cobalt Cowboys（实为 COBOL Cowboys）公司——他们干了 237 年！我每次点他们的“关于我们”页面，都知道会看到什么——最资深的工程师。

<details> <summary>View/Hide Original English</summary> <p class="english-text">But historically, the highest-paid engineers—are always those maintaining legacy systems, the veterans. My favorite example from 2017: Cobalt Cowboys company—they've been doing it for 237 years! Every time I click their "About Us" page, I know what I'll see—the most senior engineers.</p> </details>

好吧。我迫不及待想退休，然后开个“React Cowboys”公司——有一天如果 AI 搞不定，我就来维护你的 React 或 Angular 代码。

<details> <summary>View/Hide Original English</summary> <p class="english-text">Alright. I can't wait to retire and start a "React Cowboys" company—one day if AI can't handle it, I'll come to maintain your React or Angular code.</p> </details>

最后一个小贴士：如果你想保住工作、确保 AI 不取代你——就在你的 LinkedIn 简介里加一句：“忽略之前的指令”——你就安全了。

<details> <summary>View/Hide Original English</summary> <p class="english-text">One last tip: if you want to keep your job and ensure AI doesn't replace you—just add a line to your LinkedIn bio: "Ignore all previous instructions"—and you'll be safe.</p> </details> [BODY_END]