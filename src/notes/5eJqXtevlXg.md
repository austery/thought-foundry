---
area: tech-insights
category: technology
companies_orgs:
- OpenAI
- Meta
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Agents Rule of Two
project:
- ai-impact-analysis
- systems-thinking
- knowledge-pipeline
series: ''
source: https://www.youtube.com/watch?v=5eJqXtevlXg
speaker: AI Engineer
status: evergreen
summary: 演讲者Brian John介绍了一种将**子代理**集成到**Codeex CLI**的方法，旨在解决工具和模型锁定问题。他解释了子代理如何通过分担任务来改善**上下文管理**，并详细阐述了涉及包装脚本和子Codeex会话的设计。演讲中还强调了在Codeex沙盒中管理权限的复杂性，并讨论了相关的安全考量。最后，他通过一个概念验证项目进行了演示，为AI驱动的开发工作流提供了一种更灵活的实现途径。
tags:
- ai-agent
- management
- technology
- tool
title: 将子代理集成到Codeex CLI：提升AI工作流效率与灵活性
---

### 介绍与背景

大家好，我是Brian John，今天很高兴能和大家分享关于在**Codeex CLI**（Codeex命令行界面: 一个用于与AI模型交互的命令行工具）中“破解”**子代理**（Sub-agents: 能够独立执行特定任务的AI代理）的话题。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi everybody, my name is Brian John and I'm excited today to talk to you about hacking sub agents in the Codeex CLI.</p>
</details>

我是BetterUp公司的首席**全栈工程师**（Fullstack Engineer: 能够处理软件开发中前端和后端所有层面的工程师）。我目前的工作重点是为研发部门提供**AI赋能**（AI Enablement: 利用人工智能技术提升效率和能力）。具体来说，就是帮助我们的**R&D**（Research and Development: 研究与开发）团队成员利用AI更快、更高质量地完成工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So who am I? I'm a principal fullstack engineer. My current focus at work is AI enablement for R&D. So think helping our R&D team members get their work done faster and with higher quality using AI.</p>
</details>

我工作的公司是BetterUp，这是一个非常棒的地方。我们从一开始就使用AI。我已经在那里工作了八年多，比我之前任何一份工作的时间都长。我们的使命是帮助世界各地的人们更有目标、更清晰、更热情地生活。如果这听起来很有趣，并且你想用**LLMs**（Large Language Models: 大型语言模型，指基于深度学习的AI模型）做一些很酷的事情，请联系我。我会在最后一页附上我的联系方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The company I work for is BetterUp. It's an awesome place to work. We've been using AI since the very beginning. I've been there for over eight years now, which is longer than any place I've ever worked before. And our mission is to help people everywhere live their lives with better purpose, clarity, and passion. If that sounds interesting to you, you work want to work on cool stuff with LLMs, please hit me up. I'll add my contact info in the last slide.</p>
</details>

### 为什么要在Codeex CLI中集成子代理？

那么，我们为什么要将子代理“破解”到Codeex CLI中呢？
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, why would we want to hack sub agents into Codeex CLI?</p>
</details>

我从一开始就将**Clog Code**（Clog Code: 演讲者日常使用的AI编码工具）作为我的日常工具。它是一个很棒的工具，功能丰富，模型也很出色。我一直都在使用子代理，但我不想被锁定在某一个工具中，更不想被锁定在某一个模型家族中。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I've been using Clog Code as my daily driver since the very beginning. It's a great tool. It's got tons of bells and whistles. It's got great models, and I use sub agents all the time. But I don't want to be locked in to one tool, and I really don't want to be locked in to one model family.</p>
</details>

我希望能够使用其他工具，特别是Codeex CLI，因为它的模型看起来非常好。同时，我希望能够继续使用子代理，这样我就可以在其他工具中沿用我的工作流程。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I wanted to be able to use other tools, particularly Codeex CLI, because the models look really good and I want to be able to still use sub aents with them so that I can use my workflows with other tools.</p>
</details>

**上下文管理**（Context Management: 在AI交互中有效处理和维护相关信息的能力）是另一个重要原因。众所周知，子代理在上下文管理方面表现出色。主代理可以将问题交给子代理，子代理可以独立完成工作，使用自己的**令牌**（Tokens: AI模型处理文本的基本单位，可以是单词、子词或字符），然后只将答案传回给主代理。这样，子代理使用的所有上下文就不会占用主上下文窗口，这非常了不起。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Context management. So, as you all know, sub agents are amazing for context management. The main agent can give a problem to a sub agent. It can go off, do its work, use its tokens, and pass just the answer back to the main agent. And all that context got used up by the sub agent doesn't end up in your main context window, which is incredible.</p>
</details>

我想我不需要再多说这一点了。我们都见过太多次这个问题，它确实很烦人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I don't think I have to say any more about this one. We've all seen this way too many times and it gets annoying.</p>
</details>

我必须向**Dex Hory**致敬，他的演讲改变了我使用AI的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I have to give credit where credit is due. This talk by Dex Hory changed the way that I work with AI.</p>
</details>

他在这里提出的工作流程我发现非常有效，尤其是在处理大型代码库时。我建议大家看看这个演讲。他今年也在AI Engineer Code大会上发言，我也推荐大家去听，因为我相信那也会很棒。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The workflows he proposes here I found to be really effective especially in working with large code bases. I'd recommend you check out this talk. He's also talking at AI engineer code this year and I recommend you check out that one too because I'm sure it's going to be great.</p>
</details>

### 设计与实现

好的，我们来谈谈设计。归根结底，子代理非常简单，它只是主代理的另一个实例。所以我们的设计也可以非常简单。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, so let's talk about design. At the end of the day, a sub aent is really simple. It's just another instance of the main agent. So our design can also be really simple.</p>
</details>

在这种情况下，我们将有一个父Codeex会话。它将运行一个脚本，这只是一个**包装脚本**（Wrapper Script: 一个用于调用其他程序或脚本的辅助脚本），它将负责确定要运行哪个代理，构建提示等。它将启动Codeex exec。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, we're going to have our parent Codeex session. We're going to have it run a script. It's just going to be a wrapper script that's going to kind of take care of like figuring out what agent to run. It's going to build the prompt, etc. It's going to kick off Codeex exec.</p>
</details>

那个子Codeex将作为子代理运行。它将响应提示，完成工作，并将答案写入一个文件。然后我们的包装脚本将读取该文件，并将结果打印到**标准输出**（Standard Out: 程序默认的输出流，通常是控制台），然后将其返回给父Codeex会话。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that child Codeex is going to run as the sub aent. It's going to respond to the prompt. It's going to do its work and it's going to write its answer into a file and then our wrapper script is going to read that file and it's going to print that result to standard out and give it back to the parent Codeex session.</p>
</details>

这相当直接。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Pretty straightforward.</p>
</details>

### 权限管理挑战

嗯，这很简单，所以应该很容易，对吧？我也是这么想的。但当我尝试时，Codeex却开始报错。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this is simple, so it should be easy, right? Well, that's what I thought too. And I started to get all these errors from Codeex when I tried it.</p>
</details>

Codeex的**沙盒**（Sandbox: 一种隔离的计算环境，用于安全地执行程序）似乎真的不想让你这样做。当然，你可以使用“dangerously skip permissions”之类的命令来运行它，但我不会那样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Codeex's sandbox really seems to not want to let you do this. Now, you can of course run it with dangerously skip permissions or whatever. I don't do that,</p>
</details>

但要让它在正常的权限集下工作，实际上非常非常困难。我为此碰壁了很长时间。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but to get it to work with the normal set of permissions actually was really, really hard and I bang my head against the wall a long time trying to get this to work.</p>
</details>

所以，找出所需的最小权限组合可能是最困难的部分。在父级上，你至少需要“sandbox of workspace write”权限才能运行Codeex命令。如果你愿意，总是可以运行“dangerously whatever whatever”命令。再说一次，我通常不那样做。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, figuring out the minimum required permissions is probably the hardest part about this. getting the combination just right. On the parent, you need at least sandbox of workspace, right, to be able to run the Codeex command. You can always run that dangerously whatever whatever command if you want. Again, I don't really do that.</p>
</details>

子进程有点棘手。沙盒会阻止它访问主目录中的**OpenAI凭证**（OpenAI Credentials: 用于访问OpenAI API的认证信息），因为它在工作区之外。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The child process is a little bit trickier. The sandbox prevents its access to the OpenAI credentials in your home directory since it's outside of the workspace.</p>
</details>

你仍然需要至少“sandbox workspace write”权限，以便它可以写入包装脚本要读取的文件。你还需要禁用一个叫做**发布记录器**（Rollout Recorder: 一种日志记录机制）的东西，因为它是一个日志记录功能，仅仅因为父沙盒会再次阻止对工作区之外的任何子命令的文件系统访问。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the you need at least sandbox workspace write again so that it can write the file that the uh wrapper script is going to read and you need to disable this thing called the rollout recorder which is like a logging thing the just because the parent sandbox again it prevents file system access to any subcomands that are outside of the workspace</p>
</details>

### 安全性考量

好的，在我们深入之前，我必须快速提一下安全性。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, before we go any further, I have to give a quick note about security.</p>
</details>

**Meta**（Meta: Facebook的母公司，一家科技巨头）最近写了一篇很棒的论文，叫做《**代理二元规则**》（The Agents Rule of Two），我认为它解释得非常好。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Meta recently wrote a great paper called the agents rule of two that I think explains this really, really well.</p>
</details>

它指出，在安全性方面，你需要关注代理的三件事：它是否正在处理**不可信输入**（Untrustworthy Input: 来源不明或可能包含恶意内容的输入数据），它是否可以访问**敏感系统**（Sensitive Systems: 包含重要数据或关键功能的系统）或**私有数据**（Private Data: 个人或组织不希望公开的信息），以及它是否可以**改变状态**（Change State: 指系统或数据发生变化）或**外部通信**（Communicate Externally: 与外部系统或服务进行数据交换）。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what it says is there's three things you need to care about with your agent when it comes to security. whether it's processing untrustworthy input, whether it has access to sensitive systems or private data, and whether it can change state or communicate externally.</p>
</details>

在我们的案例中，我们没有处理不可信输入。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In our case, we're not processing untrustworthy inputs.</p>
</details>

我们确实可以访问敏感系统或私有数据，因为我们可能正在处理**专有代码库**（Proprietary Codebase: 属于特定公司或个人的私有代码集合）。而且它确实可以改变状态，也可以进行外部通信。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We do have access to sensitive systems or private data because we're probably working with a proprietary codebase. And it can change state and it also can can communicate externally.</p>
</details>

它能改变的状态实际上取决于你的系统。在我的案例中，风险并不高，它进行的外部通信只是与OpenAI的**API端点**（API Endpoint: 应用程序接口中用于特定功能的网络地址）。所以，我认为风险不大。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now the state that it can change is really kind of dependent on your system. In my case, it's really not very high risk and the communication it does externally is just to OpenAI's API endpoint. So again, not a major risk, I would say.</p>
</details>

这使我们处于较低的风险类别。但重要的是，低风险不等于无风险。所以，你的情况可能会有所不同。你需要自己判断这是否是你觉得舒服的做法。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that puts us in the lower risk category. But importantly, lower risk does not mean no risk. So your mileage may vary here. you need to make your own determination on if this is something you feel comfortable with.</p>
</details>

有了这些，我们继续前进。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">With that, let's move forward.</p>
</details>

### 配置Codeex以使用子代理

好的。为了让Codeex能够通过这个包装脚本等使用子代理，我们必须告诉它如何运行它们。所以在我们的`agents.md`文件中，我们将有一些信息告诉Codeex：“嘿，当我说使用某个子代理时，就去运行这个脚本，并使用这些命令或类似的东西。”这就是你做到的方式。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So, to get Codeex to be able to use sub agents with this wrapper script and everything, we have to tell it how to run them. So in our agents MD we're going to have just a little bit of information here that tells Codeex hey when I say use the whatever sub agent go and actually like run this script and you know with these commands or whatever and that's how you do it.</p>
</details>

我们还必须告诉它何时运行子代理。这可以是当用户要求时，或者当它认为有帮助时。然后我们想告诉它有哪些子代理可用以及它们的功能。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also we have to tell it when to run sub aents. So that would be you know when the user asks or just when you think helpful. Then we want to tell it what sub aents are available and what they do.</p>
</details>

### 概念验证演示

好的，接下来我们快速进行一个演示。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, with that, let's do a quick demo.</p>
</details>

我建立了一个非常快速和小的**概念验证存储库**（Proof of Concept Repository: 用于演示特定想法或技术可行性的代码库）。它是开源的，你可以自己去看看。我会在演讲结束时提供URL。我们来看看里面有什么。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I've put together a really quick and small proof of concept repository. It's open source. You can go and take a look at it yourself. I'll have the URL at the end of the talk. Let's just take a look at what's in here.</p>
</details>

首先，我们来看看我们的代理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, first of all, let's take a look at our agents.</p>
</details>

我在这里创建了几个玩具代理。我们来看看它们是如何定义的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I just created a couple of toy agents here. Let's go take a look at them how they're defined.</p>
</details>

你可以看到每个代理都有一个名称。它还有一个**推理工作量**（Reasoning Effort: AI代理在处理任务时所需的思考程度）。所以，根据它正在做的工作类型，你可以给它一个轻度、中度或高度的推理工作量，无论你认为什么合适。然后你只需给它代理的提示。这与Clog Code子代理的工作方式非常相似。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see here each agent has a name. It also has a reasoning effort. So, depending on what kind of work it's doing, you can give it a light, medium, you can give it a high reasoning effort, whatever you think is appropriate. Then you just give it, you know, the prompt for the agent. So very similar to kind of how Claude code sub aents work.</p>
</details>

在这个例子中，它只是在计数单词。另一个是文件写入代理，它只是将一些文本放入一个文件中。这不需要太多的推理。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, it's just counting words. You know, this other one is a file writer agent. Just going to take some text and put it in a file. Don't need much reasoning for that.</p>
</details>

好的。现在我们来看看我们的包装脚本。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. So now let's look at our wrapper script.</p>
</details>

它非常小，只有72行。基本上，它只是接收输入。它将调用这个**代理执行器Python类**（Agent Executor Python Class: 一个负责执行AI代理任务的Python类），我稍后会展示它，它也非常小。它将把代理的输出返回到标准输出，以便主代理可以看到它。我们来看看那个代理执行器类。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's really small, only 72 lines. basically just takes in the inputs. It's going to call this agent exeutor Python class, which I'll show in just a minute. Also very small, and it's going to return that uh the agent's output to standard out so that the main agent can see it. Let's look at that agent executive class.</p>
</details>

我不会详细介绍整个内容。再说一次，它非常小。它基本上只是用适当的权限和正确的推理工作量启动子代理，并禁用发布记录器等所有这些功能。它为你完成了所有这些工作，所以非常方便。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Not going to go through this whole thing. Again, it's pretty small. basically just kicks off the child sub agent with the proper permissions and with the right reasoning effort and it disables the rollout recorder all that kind of stuff just does all that for you. So pretty handy.</p>
</details>

我认为我没有涵盖的一点，如果你看`agents.md`，这里很重要。所以，当我们告诉Codeex如何调用子代理时，我们将让它将代理名称写入文件。我们将让它将用户的查询写入文件，然后我们将让它运行这个命令。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that I think I didn't cover you look at agents MD is it's kind of important here is this part. So when we're telling Codeex how to invoke the sub agent, we're going to have it write the agent name to a file. We're going to have it write the user's query to a file and then we're going to have it run this command.</p>
</details>

另一种替代方法是实际将代理名称和查询作为**命令行参数**（Command Arguments: 在命令行中传递给程序的额外信息）传递。我们不想那样做的原因是因为Codeex的权限系统。只要命令看起来完全相同，你只需授予一次权限。但如果命令有不同的参数，你每次都必须批准。所以，如果Codeex每次调用子代理时都必须批准，那会非常烦人。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, another alternative to this would be to actually pass the agent name and the query as command arguments. The reason why we don't want to do that is because of Codeex's permissioning system. As long as the command looks exactly the same, you only have to grant permission once. But if you have different arguments to the command, you have to approve it every time. So it gets really annoying if you have to approve every time that Codeex wants to call sub agent.</p>
</details>

所以在这种情况下，我们让命令看起来完全相同。Codeex只会运行它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in this case, we make the command look exactly the same. Codeex is just going to run it.</p>
</details>

现在，如果你再次使用“dangerously skip permissions”之类的命令运行，你就不必担心这个问题了。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, if you run again with dangerously skip permissions or whatever, you don't have to worry about this.</p>
</details>

好的，我们继续。我们还有一个围绕Codeex的包装脚本。所以，我们快速看看那个。它超级简单。它的作用是它从你的主目录中获取Codeex主文件。它将它们同步到一个子目录中，以便它可以访问它们，并将Codeex主目录设置为该目录。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But all right, let's go in. Oh, then we've got this also this wrapper script around Codeex. So, let's take a look at that real quick. Super simple. Uh, what it does is it takes the Codeex home files from your home directory. It's going to sync them into a subdirectory so it has access to them and it's going to set Codeex home to that directory.</p>
</details>

它只是启动Codeex。在这种情况下，我以**全自动模式**（Full Auto Mode: 一种自动化操作模式，通常包含预设的权限）启动，这只是“workspace write plus”的简写，我想，加上请求批准之类的。我不记得是哪一个了。但非常直接。这里没什么特别的。代码真的不多。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's just going to launch Codeex. In this case, I'm launching in full auto mode, which is just like shorthand for workspace, write plus, I think, approval on a request or something like that. I can't remember which one. Um, but pretty straightforward. Not much going on here. Really not much code.</p>
</details>

好的，我们继续启动它。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, let's go ahead and launch this.</p>
</details>

好的。现在我们给它一个快速查询。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, now let's just give it just a quick query.</p>
</details>

我将告诉它使用它的“word counter”子代理。让它去完成这项工作。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to tell it to use its work counter sub agent. Have it go off and do that.</p>
</details>

你会看到它会识别出需要运行这个代理执行器。它会把代理的名称放入一个文件。它会把查询放入一个文件。然后它会请求我运行它的权限。这里非常重要的是我选择“是”并且不再为此命令询问。这样它就不会每次运行子代理时都问我。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You're going to see it figure out that it needs to run this agent exec. It's going to go ahead and put the name of the agent in a file. It's going to put query in a file. Then it's going to ask me for permissions to run it. And it's really important here that I say yes and don't ask again for this command. That way it's not going to ask me every time it has to run a sub agent.</p>
</details>

你会注意到它在这里是**串行**（Serial: 指程序按顺序一个接一个地执行任务）运行所有东西。Codeex不具备像Clog Code那样**异步地**（Asynchronously: 指程序在执行一个任务时，无需等待其完成即可开始执行另一个任务）运行事物的能力。所以，这会更慢。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You'll notice that it's running everything in serial here. Codeex does not have the ability to run things asynchronously like claw does. So, this is slower.</p>
</details>

而且Codeex总体上，如果你用过它，我想你会发现它比Clog Code慢。但我认为这实际上是有意为之的。Codeex似乎更像是一个无需人工干预的自动化工具，而Clog Code则更注重迭代。所以，我认为这实际上是可以接受的。我发现这种方式对我使用Codeex来说是可行的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And Codeex in general, if you've used it, I think you find it's slower overall than than Cloud Code. But I think that's really kind of intentional. seems like Codeex is really kind of meant to be more of like a hands-off unattended type of a tool versus clog code is meant to be more kind of iterative and so you know I think that's actually okay. I found this okay for me the way that I've used Codeex.</p>
</details>

好的，我们可以看到我们得到了结果，并打印到标准输出，然后Codeex就给了我们答案。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right so we can see we got that result back printed to standard out here and then Codeex just gave us back the answer.</p>
</details>

所以，我们再用这个文件写入子代理做一次。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's just do one more with this file writer sub agent.</p>
</details>

它会再次做同样的事情。它会将代理名称写入文件。它会将查询写入文件。然后，它会调用相同的命令。这次它不会请求权限。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, it's going to do the same thing. It's going to write that agent name into a file. It's going to write the query into a file. Then, it's going to call that same command. It will not ask for permissions this time.</p>
</details>

哦，我们在这里使用了**超时**（Timeout: 在指定时间内未完成任务时自动停止）600秒，因为有些代理实际上可能需要很长时间才能运行。如果你让它执行一个大型任务，需要它遍历整个代码库，并且你有一个大型代码库，它可能需要长达10分钟。我甚至见过它们有时需要更长的时间，长达20分钟。所以，你可能需要更长的超时时间。这是我为这个例子设置的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh, and we're using the timeout 600 here because some of these agents can actually take a long time to run. If you're having it do a big task that's going to have it look across a whole codebase and you have a large codebase, it can take up to 10 minutes. I've actually seen them take longer, up to 20 minutes sometimes. So, you might even want a longer timeout here. This is what I set for this example.</p>
</details>

在这种情况下，这是一个相当容易的任务。所以，它只用了大约40秒。好的。它写入了文件。我们来验证一下。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this case, this is a pretty easy one. So, it only took about 40 seconds. All right. So, it wrote the file. Just go ahead and verify that.</p>
</details>

好的。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right.</p>
</details>

### 总结与联系方式

好的，这就是我所有的内容。你可以在那个URL找到代码。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, that's all I have. You can find the code at that URL.</p>
</details>

你可以在betterup.com找到BetterUp。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can find betterup at betterup.com.</p>
</details>

如果你有任何问题，可以使用我的电子邮件地址，或者在X上给我发私信。我不在X上发布任何东西，所以没有理由关注我，但如果你想，也可以关注。我希望这对你有所帮助。再次，如果BetterUp听起来对你来说是一个有趣的地方，请联系我。祝你有个美好的一天。
<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have any questions for me, you can use my email address or you can DM me on X. I don't post anything on X, so really no reason to follow me, but go ahead if you want. And I hope this was helpful for you. And again, if BetterUp sounds like an interesting place to you, please hit me up. Have a great day.</p>
</details>