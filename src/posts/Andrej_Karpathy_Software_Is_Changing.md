---
title: Software Is Changing (Again)
summary: null
area: tech-insights
category: technology
project:
- ai-impact-analysis
- vibe-coding
tags:
  - ai
  - vibe-coding
people: []
companies_orgs: []
products_models: []
media_books: []
date: '2025-06-20'
author: Lei
speaker: Andrej Karpathy
channel: null
guest: null
insight: null
layout: post.njk
series: null
source: null
---
## Introduction: Software is Changing, Again / 引言：软件正在再次变革

Hello. I'm excited to be here today to talk to you about software in the
era of AI. I'm told that many of you are students—bachelors, masters,
PhD, and so on—and you're about to enter the industry. I think it's an
extremely unique and very interesting time to enter the industry right
now. Fundamentally, the reason for that is that software is changing,
again.

I say "again" because I've actually given this talk already, but the
problem is that software keeps changing. So I have a lot of material to
create new talks, and I think it's changing quite fundamentally. Roughly
speaking, software has not changed much on such a fundamental level for
70 years. And then it's changed, I think, about twice quite rapidly in
the last few years. There's just a huge amount of work to do, a huge
amount of software to write and rewrite.

大家好。今天我很高兴能在这里与大家探讨人工智能时代的软件。我听说在座的许多是学生——本科生、硕士生、博士生等等——即将进入这个行业。我认为，现在是进入这个行业一个极其独特且非常有趣的时刻。其根本原因在于，软件正在再次发生变革。

我之所以说“再次”，是因为我其实已经做过这个演讲了，但问题是软件总在不断变化。因此，我有很多新材料来创作新的演讲，而且我认为这种变化是相当根本性的。粗略地说，软件在如此基础的层面上已经有 70 年没有太大变化了。但在过去的几年里，我认为它迅速地变革了大约两次。这意味着有巨量的工作等待我们去做，有巨量的软件需要我们去编写和去重写。

## A New Era: Software 1.0, 2.0, and 3.0 / 新纪元：软件 1.0、2.0 与 3.0

If we think of the map of software, like all the instructions written
for computers, a few years ago I observed that software was changing.
There was a new type of software around, and I called this
**Software 2.0** at the time. The idea here
was that Software 1.0 is the code you write for the computer. Software
2.0 are basically neural networks, and in particular, the weights of a
neural network. You're not writing this code directly; you are more like
tuning the data sets and then running an optimizer to create the
parameters of this neural net. At the time, neural nets were seen as
just a different kind of classifier, like a decision tree. I think this
framing was a lot more appropriate. Now, we have an equivalent of GitHub
in the realm of Software 2.0, and I think Hugging Face is basically that
equivalent.

But what's changed, and I think is a quite fundamental change, is that
neural networks became programmable with **Large
Language Models (LLMs)**. I see this as a new kind of computer,
and in my mind, it's worth giving it a new designation of Software 3.0.
Your prompts are now programs that program the LLM. And remarkably,
these prompts are written in English. So it's a very interesting
programming language.

To summarize the difference, if you're doing sentiment classification,
you can write Python code (Software 1.0), train a neural net (Software
2.0), or prompt a large language model (Software 3.0). We have three
completely different programming paradigms.

When I was at Tesla, working on the Autopilot, I observed that over
time, as we made the Autopilot better, the neural network (Software 2.0)
grew in capability and size. In addition to that, a ton of the C++ code
(Software 1.0) was being deleted. A lot of the functionality originally
written in 1.0 was migrated to 2.0. The Software 2.0 stack quite
literally ate through the software stack of the Autopilot. I think we're
seeing the same thing again, where a new kind of software is eating
through the stack.

如果我们把软件版图想象成所有为计算机编写的指令集合，几年前我观察到软件正在发生变化。出现了一种新型的软件，当时我称之为**软件 2.0**。其理念是，软件 1.0 是你为计算机编写的代码；而软件 2.0 基本上是神经网络，特别是神经网络的权重。你并非直接编写这些“代码”，而更像是在调整数据集，然后运行一个优化器来生成这些神经网络的参数。当时，神经网络被看作是另一种分类器，就像决策树一样。我认为这个框架更为贴切。现在，我们在软件 2.0 领域有了一个与 GitHub 等价的平台，我认为 Hugging
Face 基本上就是这个等价物。

但是，我认为一个非常根本性的变化是，随着**大型语言模型LLM**的出现，神经网络变得可编程了。我视之为一种新型计算机，在我看来，它值得一个新的称号——“软件 3.0”。你的提示（prompts）现在就是编程 LLM 的程序。而且，值得注意的是，这些提示是用英语写成的，这是一种非常有趣的编程语言。

总结一下差异：如果你要做情感分类，你可以编写 Python 代码（软件 1.0），训练一个神经网络（软件 2.0），或者向一个大型语言模型提问（软件 3.0）。我们拥有三种完全不同的编程范式。

当我在特斯拉研究自动驾驶（Autopilot）时，我观察到，随着我们不断改进 Autopilot，神经网络（软件 2.0）的能力和规模都在增长。与此同时，大量的 C++代码（软件 1.0）被删除。许多最初用 1.0 实现的功能被迁移到了 2.0。软件 2.0 的堆栈可以说吞噬了 Autopilot 的软件堆栈。我认为我们现在正再次目睹同样的事情，一种新型软件正在吞噬现有的技术栈。

## The New Computer: LLMs as Operating Systems / 新型计算机：作为操作系统的 LLM

### The Utility Analogy

LLMs certainly feel like they have properties of utilities. LLM labs
like OpenAI or Anthropic spend
**capex** to
train the LLMs, equivalent to building out a grid. Then there's
**opex** to serve that intelligence
over APIs, with metered access where we pay per million tokens. We
demand low latency, high uptime, and consistent quality. It's
fascinating that when state-of-the-art LLMs go down, it's like an
intelligence brownout in the world. The planet just gets dumber.

### The Fab Analogy

They also have properties of
**fabs**. The capex is quite large, and
the tech tree for the technology is growing rapidly. We see deep tech
trees and R&D secrets centralizing inside LLM labs. However, the analogy
muddies because this is software, which is less defensible and more
malleable.

### The Operating System Analogy

But the analogy that makes the most sense is that LLMs have very strong
analogies to operating systems. This isn't just electricity or water
coming out of a tap as a commodity; these are increasingly complex
software ecosystems. The ecosystem is shaping up similarly: a few
closed-source providers (like Windows or macOS) and an open-source
alternative (like Linux). For LLMs, we have a few competing
closed-source providers, and maybe the Llama ecosystem is a close
approximation to something that may grow into a Linux equivalent.

The LLM is like a new kind of computer. The LLM itself is the CPU
equivalent, the context window is like memory, and the LLM orchestrates
memory and compute for problem-solving. It looks very much like an
operating system. We're in a 1960s-ish era where LLM compute is still
very expensive, forcing them to be centralized in the cloud. We are all
thin clients interacting with them over the network, using time-sharing.
The personal computing revolution hasn't happened yet because it's not
economical.

Whenever I talk to an LLM directly in text, I feel like I'm talking to
an operating system through the terminal. A
**GUI** hasn't yet really been
invented in a general way. One unique difference this time around is
that LLMs flip the direction of technology diffusion. Technologies like
electricity, computing, or the internet were first used by governments
and corporations, only later diffusing to consumers. With LLMs, it's
flipped. We have a new magical computer, and it's helping me boil an
egg, not helping the government with military ballistics. Corporations
and governments are lagging behind in adoption.

### 公共事业类比

LLM 无疑具有公共事业的某些属性。像 OpenAI 或 Anthropic 这样的 LLM 实验室投入**资本性支出capex**(资本性支出(Capex)：公司用于购置、升级和维护如地产、建筑或设备等实物资产的资金)来训练 LLM，这相当于建设电网。然后通过 API 提供智能服务，这部分属于**运营性支出opex**(运营性支出(Opex)：公司维持业务运营的持续性成本，如工资、租金和水电费)，我们则通过按百万 token 计费的计量方式付费。我们要求低延迟、高正常运行时间和稳定的质量。有趣的是，当最先进的 LLM 宕机时，就像是世界范围的“智能断电”，整个星球都变笨了。

### 芯片工厂（Fab）类比

它们也具有**芯片工厂fab**的属性。资本支出相当巨大，技术树也发展迅速。我们看到深度的技术树和研发秘密都集中在 LLM 实验室内。然而，这个类比也不完全贴切，因为这是软件，其防御性较差，可塑性更强。

### 操作系统类比

但我认为最贴切的类比是，LLM 与操作系统有极强的相似性。这不仅仅是像自来水一样的商品，而是日益复杂的软件生态系统。其生态的形成方式也很相似：少数闭源提供商（如 Windows 或 macOS）和一个开源替代品（如 Linux）。对于 LLM，我们有几个相互竞争的闭源提供商，而 Llama 生态系统或许是未来可能成长为 Linux 等价物的一个近似。

LLM 就像一种新型计算机。LLM 本身相当于 CPU，上下文窗口（context window）如同内存，LLM 负责协调内存和计算来解决问题。这看起来非常像一个操作系统。我们正处于一个类似 1960 年代的时期，LLM 计算资源仍然非常昂贵，迫使其集中在云端。我们都只是通过网络与其交互的瘦客户端，使用分时共享系统。个人计算革命尚未到来，因为它在经济上还不可行。

每当我直接用文本与 LLM 交流时，感觉就像通过终端与操作系统对话。**图形用户界面GUI**尚未以一种通用的形式被发明出来。这一次一个独特的不同之处在于，LLM 颠覆了技术扩散的方向。像电力、计算或互联网这样的技术，通常首先由政府和企业使用，然后才普及到消费者。而 LLM 则相反。我们有了一台神奇的新电脑，它却在帮我煮鸡蛋，而不是帮助政府进行军事弹道计算。企业和政府在采用这些技术方面反而落后了。

## The Psychology of LLMs: Working with "People Spirits" / LLM 的心理学：与“心智模拟体”共事

The way I like to think about LLMs is that they're kind of like "people
spirits." They are stochastic simulations of people, and the simulator
in this case happens to be an auto-regressive transformer. Because it is
trained on humans, it has this emergent psychology that is humanlike.

### Superpowers and Deficits

First, LLMs have encyclopedic knowledge and memory, much like the
character in the movie _Rain Man_, an autistic savant with almost
perfect memory. They can remember SHA hashes and lots of different
things very easily. However, they also have a bunch of cognitive
deficits. They hallucinate quite a bit. They display jagged
intelligence—superhuman in some domains, but making mistakes no human
would make in others. They also suffer from anterograde amnesia; their
"weights" are fixed, and their context windows (working memory) get
wiped. They don't learn and develop expertise over time like a human
coworker does. Movies like _Memento_ and _51st First Dates_ illustrate
this problem well. Finally, they are quite gullible and susceptible to
**prompt injection**risks. So, we have to think through how to work around their deficits
while enjoying their superhuman powers.

我喜欢将 LLM 看作是“心智模拟体”（people spirits）。它们是对人类的随机模拟，而这个模拟器恰好是一个自回归的 Transformer。因为它是在人类数据上训练的，所以它涌现出了类似人类的心理特征。

### 超能力与缺陷

首先，LLM 拥有百科全书般的知识和记忆力，很像电影《雨人》中的角色——一个记忆力近乎完美的自闭症天才。它们能轻易记住 SHA 哈希值等各种信息。然而，它们也存在一系列认知缺陷。它们会频繁地“幻觉”（hallucinate），即编造信息。它们表现出“锯齿状智能”——在某些领域超越人类，但在另一些领域又会犯下人类绝不会犯的低级错误。它们还患有“顺行性遗忘症”；它们的“权重”是固定的，其上下文窗口（工作记忆）会被清除。它们不会像人类同事那样随着时间的推移学习并积累专业知识。电影《记忆碎片》和《初恋 50 次》很好地诠释了这个问题。最后，它们相当天真，容易受到**提示注入prompt injection**的攻击。因此，我们必须思考如何在利用其超能力的同时，规避其缺陷。

## Opportunities: Programming the New Computer / 机遇：为新型计算机编程

### Partial Autonomy Apps

One of the biggest opportunities is what I call partial autonomy apps.
Instead of copy-pasting code into a general chat interface, it makes
more sense to have a dedicated app like Cursor. Cursor is a great
example of an early LLM app. It has a traditional interface for manual
work, but also LLM integration for working in bigger chunks. Key
properties of these apps include:

1) The LLM handles a ton of context management.

2) They orchestrate multiple LLM calls (e.g., embedding models, chat models).

3) They have an application-specific GUI, which is crucial for auditing the work of these fallible systems.

4) They feature an "autonomy slider." In Cursor, you can go from simple tab completion
to letting it modify an entire repository. You are in charge of how much
autonomy you give up.

### Speeding Up the Human-AI Loop

We are now cooperating with AIs; they do the generation, and we humans
do the verification. It's in our interest to make this loop as fast as
possible. Two major ways to do this are: 1) Speed up verification. GUIs
are extremely important here because they utilize the powerful computer
vision GPU in our heads. 2) Keep the AI on a leash. It's not useful to
get a diff of 10,000 lines of code. I am still the bottleneck. I have to
make sure it's correct and not introducing bugs. I feel like this when
doing AI-assisted coding: it's like working with an overreactive dog
that you need to control.

### Lessons from Self-Driving and Iron Man

I worked on partial autonomy for five years at Tesla. In 2013, I had a
perfect, zero-intervention self-driving demo in a Waymo vehicle and
thought self-driving was imminent. 12 years later, we are still working
on it. Software is tricky. When I see things like "2025 is the year of
agents," I get very concerned. I think this is the _decade_ of agents.
We need humans in the loop. My favorite analogy is the Iron Man suit.
It's both an augmentation (Tony Stark drives it) and an agent (it can
fly autonomously). At this stage, we should be building more Iron Man
suits (partial autonomy products) and less Iron Man robots (fully
autonomous agents).

### 部分自主应用（Partial Autonomy Apps）

最大的机遇之一在于我所说的“部分自主应用”。与其将代码复制粘贴到通用的聊天界面，不如使用像 Cursor 这样的专用应用。Cursor 是早期 LLM 应用的一个绝佳范例。它保留了供用户手动操作的传统界面，同时集成了 LLM，让用户能以更大的代码块进行工作。这类应用的关键特性包括：1）LLM 处理大量的上下文管理。2）它们协调对 LLM 的多次调用（如嵌入模型、聊天模型）。3）它们拥有特定于应用的 GUI，这对于审核这些易错系统的工作至关重要。4）它们提供一个“自主性滑块”。在 Cursor 中，你可以从简单的 Tab 补全，到让它修改整个代码库。你可以自主决定赋予系统多大程度的自主权。

### 加速人机协作循环

我们现在正与 AI 合作：它们负责生成，我们人类负责验证。让这个循环尽可能快地运转符合我们的利益。主要有两种方式：1）加速验证。GUI 在这里极其重要，因为它利用了我们大脑中强大的计算机视觉“GPU”。2）给 AI“拴上链子”。给我一个一万行代码的 diff 是没有用的，我仍然是瓶颈。我必须确保它是正确的，没有引入 bug。我在进行 AI 辅助编码时的感觉就像这样：像是在和一个需要控制的、反应过度的狗一起工作。

### 从自动驾驶和钢铁侠中汲取的教训

我在特斯拉研究了五年的部分自主技术。2013 年，我体验了一次完美的、零干预的 Waymo 自动驾驶演示，当时我以为自动驾驶近在咫尺。12 年后的今天，我们仍在该领域努力。软件是很棘手的。当我看到“2025 年是智能体（agent）之年”这样的说法时，我感到非常担忧。我认为这是*智能体的十年*。我们需要人类在环。我最喜欢的类比是钢铁侠的战甲。它既是增强工具（托尼·史塔克驾驶它），也是智能体（它可以自主飞行）。在现阶段，我们应该多打造“钢铁侠战甲”（部分自主产品），而不是“钢铁侠机器人”（完全自主的智能体）。

## The Natural Language Interface: Everyone is a Programmer / 自然语言界面：人人都是程序员

### Vibe Coding

Not only is there a new type of programming, but it's programmed in
English, this natural interface. Suddenly, everyone is a programmer.
This is extremely bullish and completely unprecedented. I don't know if
anyone has heard of "**vibe
coding**," but my tweet about it became
a major meme. It gave a name to something everyone was feeling. Vibe
coding is great when you want to build something super custom and just
wing it. I built a basic iOS app in Swift, a language I can't actually
program in. I also vibe-coded a live app called `menu.gen`, which
generates images for restaurant menu items. The coding part was easy; it
took a few hours. The hard part was the
**DevOps**—authentication, payments, deployment. That took
another week of clicking around in a browser, following instructions. A
computer was telling me the actions I should be taking. Why am I doing
this? You do it!

### 凭感觉编程（Vibe Coding）

不仅出现了一种新的编程类型，而且它是用自然语言——英语——来编程的。突然之间，人人都是程序员。这极其利好，也完全前所未有。不知道是否有人听说过“凭感觉编程”（vibe
coding）(凭感觉编程(Vibe
Coding)：一种依赖自然语言提示和高级直觉与 LLM 进行交互的编程风格，而非编写详尽、形式化的代码。)，我关于此的一条推文成了一个大热梗。它为一种大家都能感觉到却无法言说的现象命了名。当你想构建一些高度定制化、即兴发挥的东西时，“凭感觉编程”非常棒。我用 Swift 构建了一个基础的 iOS 应用，而我其实并不会这门语言。我还“凭感觉”编写了一个名为
`menu.gen`的线上应用，它可以为餐厅菜单生成图片。编码部分很简单，只花了几小时。困难的部分是**DevOps**(DevOps：一套结合了软件开发（Dev）和信息技术运营（Ops）的实践，旨在缩短系统开发生命周期并提供高质量的持续交付。)——身份验证、支付、部署。这部分花了我整整一周时间在浏览器里按照指令点击操作。一台电脑在告诉我应该采取哪些行动。我为什么要干这个？你来干啊！

## Building for Agents: A New Digital Consumer / 为智能体而构建：一种新的数字消费者

So, can we just build for agents? There's a new category of consumer and
manipulator of digital information. It used to be just humans through
GUIs or computers through APIs. Now we have agents—they're computers,
but they are humanlike people spirits. We need to adapt our software
infrastructure for them.

Just as you can have `robots.txt` to instruct web crawlers, maybe we
can have `lm.txt`, a simple markdown file telling LLMs what a domain
is about. This is much more readable for an LLM than parsing HTML. A
huge amount of documentation is currently written for people, with
lists, bolding, and pictures. This is not directly accessible by an LLM.
Some services like Vercel and Stripe are now offering their
documentation in markdown, which is super easy for LLMs to understand. I
once copy-pasted the entire documentation for the Manim animation
library into an LLM and it just worked, creating the animation I wanted.

We also have to change the docs. Anytime your docs say "click," this is
bad. An LLM cannot natively take this action. Vercel is replacing every
occurrence of "click" with an equivalent `curl` command. There are
also great tools like `git-ingest` or services from an app like Devon
that reformat entire GitHub repos into a single, LLM-digestible text
file. We should meet LLMs halfway and make it easier for them to access
information.

那么，我们能直接为智能体（agents）而构建吗？现在出现了一类新的数字信息消费者和操纵者。过去只有通过 GUI 的人类或通过 API 的计算机。现在我们有了智能体——它们是计算机，但又是类似人类的“心智模拟体”。我们需要为它们调整我们的软件基础设施。

就像你可以用`robots.txt`文件来指示网络爬虫一样，或许我们可以用`lm.txt`——一个简单的 Markdown 文件——来告诉 LLM 一个域名是关于什么的。这比让 LLM 解析 HTML 要容易得多。大量的文档目前是为人类编写的，包含列表、粗体和图片，LLM 无法直接访问。像 Vercel 和 Stripe 这样的一些服务现在正开始以 Markdown 格式提供文档，这对于 LLM 来说超级容易理解。我曾将 Manim 动画库的全部文档复制粘贴给一个 LLM，它便直接成功地为我创建了我想要的动画。

我们还需要改变文档本身。任何时候你的文档里出现“点击”这个词，都很糟糕。LLM 目前无法原生执行这个动作。Vercel 正在将其文档中所有“点击”替换为等效的`curl`命令。还有一些很棒的工具，比如`git-ingest`或者像 Devon 这样的应用提供的服务，可以将整个 GitHub 仓库重新格式化为一个 LLM 可消化的单一文本文件。我们应该与 LLM“相向而行”，让它们更容易地获取信息。

## Conclusion / 结论

In summary, what an amazing time to get into the industry. We need to
rewrite a ton of code. These LLMs are kind of like utilities, kind of
like fabs, but especially like operating systems from the 1960s. And we
have to learn to work with these fallible people spirits. In order to do
that properly, we need to adjust our infrastructure. We need to create
partial autonomy products and build for agents more directly. Going back
to the Iron Man suit analogy, what we'll see over the next decade is us
taking the slider from left (augmentation) to right (autonomy). It's
going to be very interesting to see what that looks like. And I can't
wait to build it with all of you. Thank you.

总而言之，现在是进入这个行业的绝佳时机。我们需要重写大量的代码。这些 LLM 有点像公共事业，有点像芯片工厂，但尤其像 1960 年代的操作系统。我们必须学会与这些会犯错的“心智模拟体”共事。为了做到这一点，我们需要调整我们的基础设施，我们需要创建部分自主的产品，并更直接地为智能体而构建。回到钢铁侠战甲的类比，我们将在未来十年看到的是，我们将把那个自主性滑块从左端（增强）滑向右端（自主）。我很期待看到那会是什么样子，也迫不及待地想与大家一起构建这个未来。谢谢。