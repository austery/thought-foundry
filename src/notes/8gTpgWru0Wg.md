---
area: tech-insights
category: technology
companies_orgs: []
date: '2025-07-31'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- claude
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=8gTpgWru0Wg
speaker: Anthropic
status: evergreen
summary: 本文探讨了如何利用Amazon Bedrock的Claude模型和新发布的Strands开源SDK，构建智能自主AI代理。通过实际演示，展示了Strands如何简化代理开发，实现天气查询、自动化图表生成及基础设施代码创建等复杂任务。
tags:
- ai-agent
- aw
- code
title: 基于Amazon Bedrock和Claude构建AI代理：Strands SDK实战
companies:
- amazon-bedrock
---

### 介绍：Amazon Bedrock与AI代理

Dwan Lightoot: Building AI agents with Claude in Amazon Bedrock. Today, I am excited to explore how to create intelligent, autonomous AI systems that can transform your applications.

Dwan Lightoot: 基于**Amazon Bedrock** (Amazon Bedrock: 亚马逊云科技提供的一项完全托管服务，用于访问强大的基础模型) 中的Claude模型构建**AI代理** (AI Agents: 能够推理、规划并采取多步骤行动以实现目标的自主系统)。今天，我很高兴能探讨如何创建能够改变您的应用程序的智能自主AI系统。

Dwan Lightoot: My name is Dwan Lightoot. I am a developer advocate at AWS.
Banjo: I'm Banjo. I'm a systems architect at AWS.
Suman DNA: Hi everyone. My name is Suman DNA. I'm a developer advocate at AWS.

Dwan Lightoot: 我是Dwan Lightoot，亚马逊云科技 (AWS) 的开发者倡导者。
Banjo: 我是Banjo，亚马逊云科技 (AWS) 的系统架构师。
Suman DNA: 大家好，我是Suman DNA，亚马逊云科技 (AWS) 的开发者倡导者。

Dwan Lightoot: Now, this will be a hands-on keyboard event, so we have a live workshop where you can log into an environment and get started with some code.
Dwan Lightoot: So, we're going to go through a few slides to kind of level set and get everyone on the same page, and then we'll hop into the workshop.

Dwan Lightoot: 这将是一个动手实践的活动，我们有一个在线研讨会，您可以登录环境并开始编写代码。
Dwan Lightoot: 我们将先通过几张幻灯片来统一大家的认知，然后进入研讨会环节。

Dwan Lightoot: Now this is "Code with Claude," and one of the things that I want to talk about is Anthropic on AWS.
Dwan Lightoot: To do that, we have Amazon Bedrock, which is a fully managed service that provides you access to powerful **foundational models** (基础模型: 指在大量数据上预训练的大型模型，可适应各种任务) like those in the Claude family through a **unified API** (统一API: 指一个单一的应用程序编程接口，可用于访问多个不同的服务或模型)。

Dwan Lightoot: 这是“与Claude一起编程”活动，我想谈谈Anthropic在AWS上的应用。
Dwan Lightoot: 为此，我们有Amazon Bedrock，这是一项完全托管的服务，通过一个统一API，为您提供对Claude系列等强大基础模型的访问。

Dwan Lightoot: This gives you everything you need to not only build but also scale your AI applications globally.
Dwan Lightoot: And it does this by providing you with everything you need: model choice, guardrails, as well as it gives you security at enterprise grade by default.

Dwan Lightoot: 这为您提供了构建和在全球范围内扩展AI应用程序所需的一切。
Dwan Lightoot: 它通过提供模型选择、安全护栏以及默认的企业级安全性来实现这一点。

Dwan Lightoot: Now, we're talking agents. That's what everyone is here to see.
Dwan Lightoot: But we kind of need to level set what that really means. And at AWS, we explain it like this: an agent is an autonomous system that can reason, plan, and take multiple steps to perform an objective like humans.

Dwan Lightoot: 现在，我们来谈谈代理。这是大家今天来此的目的。
Dwan Lightoot: 但我们首先需要明确它到底意味着什么。在AWS，我们这样解释：代理是一个自主系统，能够像人类一样进行推理、规划并采取多个步骤来完成一个目标。

Dwan Lightoot: So if you have a task and you give it to an agent, the agent is able to take that task and say, "Here is the high-level objective. Let me create a plan of the steps that I need to take."
Dwan Lightoot: Then it could take actions on those steps. And once those steps have been taken, then it can evaluate the results and reason on what needs to happen next until it actually achieves that objective.

Dwan Lightoot: 因此，如果您有一个任务并将其交给代理，代理就能接收该任务并说：“这是高级目标。让我制定一个我需要采取的步骤计划。”
Dwan Lightoot: 然后它就可以根据这些步骤采取行动。一旦这些步骤完成，它就可以评估结果并推理下一步需要做什么，直到最终实现该目标。

Dwan Lightoot: This is an agentic system that we'll be discussing today.

Dwan Lightoot: 这就是我们今天将要讨论的代理系统。

### Strands Agent SDK：简化AI代理开发

Dwan Lightoot: Now at AWS, we've also done something awesome that my colleague Suman is going to talk about at this time.
Suman DNA: Thank you so much, Dwan. So, taking one step further, what we have done, in fact, last week, last Friday, we have announced an open-source **SDK** (Software Development Kit: 软件开发工具包) to build agentic applications called **Strands Agent SDK** (Strands Agent SDK: 一个开源软件开发工具包，用于构建基于代理的应用程序)。

Dwan Lightoot: 现在，在AWS，我们还做了一件很棒的事情，我的同事Suman将为大家介绍。
Suman DNA: 非常感谢Dwan。更进一步，实际上，上周五我们宣布了一个名为Strands Agent SDK的开源软件开发工具包，用于构建基于代理的应用程序。

Suman DNA: So what this agent does is it's a very simple SDK which needs three things: models, tools, and a prompt.
Suman DNA: It cannot go any simpler than that. It doesn't have any scaffolding that you don't have to guardrail your prompts, your backstory goals, etc.

Suman DNA: 这个代理是一个非常简单的SDK，它只需要三样东西：模型、工具和提示。
Suman DNA: 没有比这更简单的了。它没有任何脚手架，您无需对提示、背景故事目标等进行任何限制。

Suman DNA: What we believe in is that in today's world, the **LLMs** (Large Language Models: 大型语言模型) are pretty strong, and we want to make use of the full strength of the model in the backend.
Suman DNA: So we are giving the better flexibility for the model to reason on behalf of us.

Suman DNA: 我们相信，在当今世界，大型语言模型 (LLM) 已经非常强大，我们希望充分利用后端模型的全部能力。
Suman DNA: 因此，我们赋予模型更大的灵活性，让它能够代表我们进行推理。

Suman DNA: And that's why if you look at this architecture, it's very straightforward. You create a prompt or this is your question.
Suman DNA: You send it to the agent, which is the Strands agent. And when you create an agent object, you will define the model and tools that we provide to you.

Suman DNA: 这就是为什么如果您看这个架构，它非常简单。您创建一个提示，或者这就是您的问题。
Suman DNA: 您将其发送给代理，也就是Strands代理。当您创建一个代理对象时，您将定义我们提供给您的模型和工具。

Suman DNA: You will see in the workshop when Banjo will go through a couple of the demos, you will see that the default model that we use is Claude 3.7 as of today.
Suman DNA: And the moment you have Strands installed and configured, you get a bunch of tools inbuilt.

Suman DNA: 在研讨会中，当Banjo进行几个演示时，您会看到我们目前使用的默认模型是Claude 3.7。
Suman DNA: 一旦您安装并配置了Strands，您就会获得一系列内置工具。

Suman DNA: So you don't have to write heavy-lifting code to create a few of your basic needs.
Suman DNA: And the best part is not only for your testing and deployment in the test environment, you can actually deploy on the cloud.

Suman DNA: 因此，您无需编写大量繁琐的代码来满足一些基本需求。
Suman DNA: 最棒的是，它不仅适用于测试环境中的测试和部署，您还可以将其部署到云端。

Suman DNA: So assume that you have your workforce in **EC2** (Elastic Compute Cloud: 弹性计算云，AWS提供的一种可扩展的虚拟服务器服务) or **Lambda** (AWS Lambda: 亚马逊云科技的无服务器计算服务，允许在不预置或管理服务器的情况下运行代码) or **ECS** (Elastic Container Service: 弹性容器服务，AWS提供的一种高度可扩展的容器管理服务), you can just deploy your code with ease with an integrated support for all these services.

Suman DNA: 因此，假设您的工作负载在EC2、Lambda或ECS中，您可以轻松部署您的代码，并获得对所有这些服务的集成支持。

Suman DNA: So to get started, just take a snap of this. This contains the launch blog as well as the documentation which is nothing but strands.com and the **GitHub** (GitHub: 一个基于Web的代码托管平台，用于版本控制和协作)。
Suman DNA: And this is an open-source project. So feel free to give a star and, you know, just raise a PR if you have anything interesting that you build or if you have any specific requirement which is not there, feel free to contribute.

Suman DNA: 要开始使用，只需截取这张图。它包含了发布博客以及文档（即strands.com）和GitHub链接。
Suman DNA: 这是一个开源项目。因此，如果您构建了任何有趣的东西，或者有任何尚未实现但特定的需求，请随时点赞并提交拉取请求 (PR)，欢迎贡献。

Suman DNA: It's just 3 days old, and we got many PRs and feedback from the community, and we would love to work with all of you.

Suman DNA: 它才发布三天，我们就收到了社区的许多拉取请求和反馈，我们很乐意与大家合作。

### 研讨会设置与Bedrock模型启用

Dwan Lightoot: All right, so the moment you're all waiting for: it's time to build.
Dwan Lightoot: So, we have pre-configured AWS accounts for you. **VS Code** (Visual Studio Code: 微软开发的一款免费开源代码编辑器) is also configured.

Dwan Lightoot: 好的，大家期待已久的时刻到了：是时候开始构建了。
Dwan Lightoot: 我们已经为您预配置了AWS账户。VS Code也已配置好。

Dwan Lightoot: So, there's nothing you need to download. Everything is done in the browser.
Dwan Lightoot: So, when you go to this URL, it's going to take you to a popup screen, and you're going to sign in.

Dwan Lightoot: 因此，您无需下载任何东西。所有操作都在浏览器中完成。
Dwan Lightoot: 当您访问这个URL时，会弹出一个登录界面，您需要登录。

Dwan Lightoot: It's going to ask you for a one-time password. That's the best way to log in.
Dwan Lightoot: And once you do that, you're going to be able to have access to the AWS account as well as the VS Code server we spun up.

Dwan Lightoot: 它会要求您输入一次性密码。这是最好的登录方式。
Dwan Lightoot: 登录后，您将能够访问AWS账户以及我们启动的VS Code服务器。

Dwan Lightoot: So, we're going to take a few minutes to get set up. I always say this is the hardest part of the workshop.
Dwan Lightoot: So, Suman and Dwan are going to be walking through. Ask any questions, raise your hand, and I'll also walk through it.

Dwan Lightoot: 好的，我们将花几分钟时间进行设置。我总是说这是研讨会中最难的部分。
Dwan Lightoot: Suman和Dwan会引导大家。有任何问题都可以提问，举手即可，我也会指导大家。

Dwan Lightoot: But, take some minutes to get started and, let's get started building.
Dwan Lightoot: So, when you log in, you'll get to a screen like this. So, I'll give a couple more minutes to get to the screen.

Dwan Lightoot: 但请花几分钟时间开始，然后我们就可以开始构建了。
Dwan Lightoot: 因此，当您登录时，会看到这样一个屏幕。我会再给大家几分钟时间到达这个屏幕。

Dwan Lightoot: Then, I'll walk through setting up Bedrock so we can have access to the models and then to our VS Code server.
Banjo: Well, while people are waiting, I have a video to highlight what Strands can do. So, I can just show that in the meantime.

Dwan Lightoot: 然后，我将演示如何设置Bedrock，以便我们能够访问模型，并访问我们的VS Code服务器。
Banjo: 好的，在大家等待的时候，我有一个视频可以展示Strands的功能。我可以在这段时间里播放它。

Suman DNA: So, in this example, we actually have a Strands agent that's actually going to create a math video for this. So, it's actually pretty cool. So, let's see what happens here.
Suman DNA: So, it's running an **MCP server** (Micro-Content Platform Server: 微内容平台服务器，一种为AI模型提供特定领域知识和执行外部操作的工具). It's going to start that requirements. It's going to actually create an animation video for us.

Suman DNA: 在这个例子中，我们有一个Strands代理，它将为这个任务创建一个数学视频。这非常酷。我们来看看会发生什么。
Suman DNA: 它正在运行一个MCP服务器。它将启动这些要求。它将为我们创建一个动画视频。

Suman DNA: So it's going to create a **Manim** scene that draws a cubic function, uh, 2x cubed, uh, yeah, something something hard that you might have to do in LaTeX scientific like this is very annoying, but we'll see how the MCP server is actually going to build it and actually make a video to highlight it.

Suman DNA: 因此，它将创建一个**Manim Community Project (MCP)** (Manim Community Project (MCP): 一个用于创建动画视频和复杂图表的开源Python库) 场景，绘制一个三次函数，比如2x³，是的，一些您可能不得不在LaTeX科学排版中完成的复杂内容，这非常烦人，但我们将看到MCP服务器如何实际构建它并制作视频来突出显示它。

Suman DNA: How many of you have heard of "Three Blue One Brown"? So that is what you are going to see now.
Suman DNA: So we have created an MCP server which can create the videos that you see in "Three Blue One Brown."

Suman DNA: 有多少人听说过“Three Blue One Brown”？您现在将看到的就是类似的内容。
Suman DNA: 我们创建了一个MCP服务器，它可以创建您在“Three Blue One Brown”中看到的视频。

Suman DNA: So we have created a quadratic equation, and we wanted to plot that within the range of minus 3 to 3, and this is powered by Claude 3.7 and Strands.
Suman DNA: So, we'll push that code in the GitHub repo which we have shared earlier, but this is just a testimony of how you can get started quickly with the out-of-the-box tools and just a few lines of code. Thank you.

Suman DNA: 我们创建了一个二次方程，并希望将其绘制在-3到3的范围内，这由Claude 3.7和Strands提供支持。
Suman DNA: 我们会将这段代码推送到之前分享的GitHub仓库中，但这只是一个例子，说明您如何通过开箱即用的工具和短短几行代码快速入门。谢谢。

Dwan Lightoot: So the first thing to do is make sure you log into this AWS account.
Dwan Lightoot: So you should not be using your own AWS account. We have already provisioned one with all the resources needed.

Dwan Lightoot: 那么，首先要做的是确保您登录到这个AWS账户。
Dwan Lightoot: 您不应该使用自己的AWS账户。我们已经为您预置了一个包含所有所需资源的账户。

Dwan Lightoot: Let's open the AWS console, and it'll open up a new account like this. You should see this "Work stop participant role."
Dwan Lightoot: So you should not be using your own AWS account if you have it. From here, we're going to type "Bedrock," Amazon Bedrock.

Dwan Lightoot: 让我们打开AWS控制台，它会像这样打开一个新账户。您应该会看到“工作站参与者角色”。
Dwan Lightoot: 因此，如果您有自己的AWS账户，请不要使用。从这里，我们将输入“Bedrock”，Amazon Bedrock。

Dwan Lightoot: So we get to the Amazon Bedrock console screen. We're going to want to enable the models so we can use them in our app in our lab.
Dwan Lightoot: So give it a second. I'm going to scroll down to this model access button, and then I click the "Modify model access."

Dwan Lightoot: 这样我们就来到了Amazon Bedrock控制台界面。我们需要启用模型，以便在我们的应用程序和实验中使用它们。
Dwan Lightoot: 稍等一下。我将滚动到这个模型访问按钮，然后点击“修改模型访问”。

Dwan Lightoot: And we got some new models, but they have not enabled them yet.
Dwan Lightoot: So we're just going to use Claude v7, uh, 3.5 Haiku and 3.5 Sonnet. So enable those.

Dwan Lightoot: 我们有一些新模型，但它们尚未启用。
Dwan Lightoot: 所以我们只使用Claude v7，呃，3.5 Haiku和3.5 Sonnet。请启用这些。

Dwan Lightoot: Got the four already. We got four already. Yes. But I don't think it's enabled in this account yet. So we got to use the older models.
Dwan Lightoot: So and press next. Um, once we request access, submit, but again, this code, all the code is open source. The workshop is open source, and we can share the link so you can run this on yourself.

Dwan Lightoot: 已经有四个了。我们已经有四个了。是的。但我认为这个账户还没有启用。所以我们必须使用旧模型。
Dwan Lightoot: 然后按“下一步”。嗯，一旦我们请求访问，提交，但再次强调，这段代码，所有的代码都是开源的。这个研讨会是开源的，我们可以分享链接，这样您就可以自己运行它。

### 演示一：使用Strands构建天气查询代理

Dwan Lightoot: So, uh, module one is the one we're doing today. So we're going to show you how Strands Agent works and how you can actually build an agentic workflow with it.
Dwan Lightoot: So the first thing you do is install it. So just doing `pip install strands-agents` and `strands-agent-tools` gets you what you need and have some utility things, `uv` to download MCP servers. So I'm going to copy that command.

Dwan Lightoot: 好的，我们今天要做的是模块一。我们将向您展示Strands Agent是如何工作的，以及如何用它构建一个代理工作流。
Dwan Lightoot: 首先是安装它。只需执行`pip install strands-agents`和`strands-agent-tools`即可获得所需，并有一些实用工具，比如`uv`来下载MCP服务器。我将复制该命令。

Dwan Lightoot: All right, already installed, great. So, and then the cool thing with Claude Code, you actually can use it with Amazon Bedrock.
Dwan Lightoot: So if you have an AWS account, you have Bedrock, you can use Claude Code without using the Anthropic key, signing in, everything is just done through Bedrock.

Dwan Lightoot: 好的，已经安装好了，太棒了。然后，Claude Code的酷之处在于，您实际上可以将其与Amazon Bedrock一起使用。
Dwan Lightoot: 因此，如果您有AWS账户，并且有Bedrock，您就可以使用Claude Code，无需使用Anthropic密钥登录，所有操作都通过Bedrock完成。

Dwan Lightoot: That's by using this `export CLAUDE_CODE_ENVIRONMENT` variable. So let me go ahead and do that.
Dwan Lightoot: All right. So Claude, get started research preview. Going to push dark mode, of course. All right. Cool.

Dwan Lightoot: 这是通过使用`export CLAUDE_CODE_ENVIRONMENT`这个环境变量来实现的。所以让我来做一下。
Dwan Lightoot: 好的。那么Claude，开始研究预览。当然要切换到深色模式。好的。酷。

Dwan Lightoot: So use recommended settings. Yes, proceed. All right, Claude Code is ready to go.
Dwan Lightoot: So all I did was just export that command because it's already using Bedrock. Everything's just ready to go. It's already in my environment. And you all can see this, right? This is a good screen. Yeah. Cool.

Dwan Lightoot: 那么，使用推荐设置。是的，继续。好的，Claude Code已准备就绪。
Dwan Lightoot: 我所做的只是导出了那个命令，因为它已经在使用Bedrock了。一切都已准备就绪。它已经在我的环境中。大家都能看到这个屏幕，对吧？这是一个好屏幕。是的。酷。

Dwan Lightoot: All right. So the first exercise of the workshop, we're actually going to use a weather agent.
Dwan Lightoot: Every AI thing has to start with weather first. So, you know, we added two tools to this one. One that can actually get the weather and then actually count how many words are in the response just to show how easy it is to use different tools using Strands.

Dwan Lightoot: 好的。所以研讨会的第一个练习，我们实际上将使用一个天气代理。
Dwan Lightoot: 每个AI项目都必须从天气开始。所以，我们为此添加了两个工具。一个可以获取天气，另一个可以计算响应中有多少个单词，只是为了展示使用Strands调用不同工具是多么容易。

Dwan Lightoot: So, and we're actually going to use Claude Code to explain how this code works as well before I dive into it.
Dwan Lightoot: So, I'm going to open this up. Paste. "Can you explain the structure of the Strands agent weather word count file?"

Dwan Lightoot: 所以，在我深入讲解之前，我们实际上将使用Claude Code来解释这段代码是如何工作的。
Dwan Lightoot: 我将打开它。粘贴。“你能解释一下Strands代理天气单词计数文件的结构吗？”

Dwan Lightoot: All right. So then it's going to be able to see what happens. Use the tokens. Let me open the file while it does that, and we'll see what Claude says. Let me make this bigger.
Dwan Lightoot: All right. So, "Demonstrate a simple agent implementation. The Strands framework agent file imports necessary word count tools using Claude 3.5. Execute query."

Dwan Lightoot: 好的。它就能看到发生了什么。使用令牌。让我在它执行的时候打开文件，看看Claude怎么说。我把它放大一点。
Dwan Lightoot: 好的。所以，“演示一个简单的代理实现。Strands框架代理文件使用Claude 3.5导入必要的单词计数工具。执行查询。”

Dwan Lightoot: So let's walk through the code in more detail. So we actually have a system prompt, and we're saying, you know, "Find the weather," and it actually puts the **API** (Application Programming Interface: 应用程序编程接口) in the system prompt `http://e.gov gov`.
Dwan Lightoot: So there's no API key needed for this. So I can just query this and get the actual weather of what the place is and provide it in a human-readable way.

Dwan Lightoot: 让我们更详细地了解代码。我们实际上有一个系统提示，我们说，“查找天气”，它实际上把API放到了系统提示`http://e.gov gov`中。
Dwan Lightoot: 所以这个不需要API密钥。我可以直接查询它，获取该地点的实际天气，并以人类可读的方式提供。

Dwan Lightoot: And the cool thing about this, uh, Strands has this HTTP request tool already built into the framework.
Dwan Lightoot: So it's going to be able to just make that request for you automatically. You just provide the URL, it is able to call that and get the actual data from that.

Dwan Lightoot: 这很酷的一点是，Strands框架中已经内置了HTTP请求工具。
Dwan Lightoot: 所以它能够自动为您发出请求。您只需提供URL，它就能调用该URL并从中获取实际数据。

Dwan Lightoot: And then you can, you the cool thing about Strands also is you can change the different models you can use.
Dwan Lightoot: You can use LightLM, you can use Llama, uh, you can use Bedrock. Bedrock's the default. So I just changed the Claude 3.5 just to be faster here.

Dwan Lightoot: 然后您可以，Strands的另一个很酷的地方是您可以更改使用的不同模型。
Dwan Lightoot: 您可以使用LightLM，可以使用Llama，嗯，您可以使用Bedrock。Bedrock是默认的。所以我在这里只是为了更快地将其更改为Claude 3.5。

Dwan Lightoot: Uh, and then the cool thing about Strands is that's the system prompt. The big system prompt we put up there, which tools we're going to use: the word count tool.
Dwan Lightoot: Now what I really like about the tool decorator is I just define a function and just put the return value. There's no crazy things, no adding. I just put this tool decorator, and it handles the rest.

Dwan Lightoot: 呃，Strands的酷之处在于，那是系统提示。我们放在那里的主要系统提示，以及我们要使用的工具：单词计数工具。
Dwan Lightoot: 我真正喜欢工具装饰器的地方是，我只需定义一个函数并放入返回值。没有复杂的逻辑，没有额外的添加。我只需放入这个工具装饰器，它就会处理剩下的事情。

Dwan Lightoot: So as a developer building functions, I want to put all this extra stuff in there, make it as simple as possible to have a tool. So that's a really big plus to the Strands framework.
Dwan Lightoot: And then from there, I can just say, "What's the weather like in Seattle?" Let's change it. San Francisco. And let's go to the terminal. Oops. `Strand agent three`.

Dwan Lightoot: 因此，作为一名开发人员，在构建函数时，我希望把所有这些额外的东西都放在那里，让工具尽可能简单。所以这对Strands框架来说是一个非常大的优势。
Dwan Lightoot: 然后，我可以简单地说：“西雅图的天气怎么样？”我们来改一下，旧金山。然后我们进入终端。哎呀。`Strand agent three`。

Dwan Lightoot: All right. So we can see how it's going here. Uh, first, it'll get the coordinates for San Francisco.
Dwan Lightoot: You can see the HTTP request tool. Now it's going to use the HTTP request to find that weather.

Dwan Lightoot: 好的。所以我们可以在这里看到它的运行情况。呃，首先，它会获取旧金山的坐标。
Dwan Lightoot: 您可以看到HTTP请求工具。现在它将使用HTTP请求来查找天气。

Dwan Lightoot: It gets the San Francisco 65 sunny west winds few days highlight. Now uses the word count tool, 110 words.
Dwan Lightoot: So with about 44 lines of code, we're able to make that API request. We have the agent. It's going to have multiple tools. Done.

Dwan Lightoot: 它获取了旧金山天气：65度，晴朗，西风，几天内的亮点。现在使用单词计数工具，110个单词。
Dwan Lightoot: 因此，用大约44行代码，我们就能够发出API请求。我们有代理。它将拥有多个工具。完成。

Dwan Lightoot: So I'll pause here for a second just to have any questions of Strands because not everybody's going through it.
Dwan Lightoot: So Strands is an open-source SDK for building agents. So there are a lot of agentic frameworks, but Strands is its own one, and you can see that you really just need a system prompt, the tools, and a model, and it can execute that loop.

Dwan Lightoot: 所以我在这里暂停一下，看看大家对Strands有没有什么问题，因为不是每个人都一直在跟着。
Dwan Lightoot: Strands是一个用于构建代理的开源SDK。有很多代理框架，但Strands是独树一帜的，你可以看到你真正需要的只是一个系统提示、工具和一个模型，它就能执行那个循环。

Dwan Lightoot: So yeah, it is similar to other agentic frameworks, but I believe it's much easier to get started without the boilerplate and extra stuff that you've seen in other frameworks.
Audience: All right, one more question, and we'll move on to the next part. Uh, thank you.

Dwan Lightoot: 是的，它与其他代理框架相似，但我相信它更容易上手，没有你在其他框架中看到的那些样板代码和额外的东西。
Audience: 好的，最后一个问题，我们就要进入下一部分了。呃，谢谢。

Audience: So, I have a code-related question. So, how are you passing like the latitude, longitude, and zip code like inside the string?
Dwan Lightoot: So, so the cool thing is that we're letting the model decide how to do that.

Audience: 那么，我有一个关于代码的问题。你们是如何在字符串中传递纬度、经度和邮政编码的呢？
Dwan Lightoot: 好的，酷的地方在于，我们让模型自己决定如何做。

Dwan Lightoot: It uses this HTTP request thing, and it understands what the latitude and longitude is of San Francisco, and it is able to pass that to this API endpoint or use API zip code.
Dwan Lightoot: So it understands the what the API is based on the system prompt, and the model is figuring that out by itself.

Dwan Lightoot: 它使用这个HTTP请求功能，并且它理解旧金山的纬度和经度是什么，它能够将这些传递给这个API端点或使用API邮政编码。
Dwan Lightoot: 所以它根据系统提示理解API是什么，模型是自己搞清楚这些的。

Dwan Lightoot: So we're handing a lot of the infrastructure you might see in other agent frameworks saying, "You got to do this, you got to do this."
Dwan Lightoot: We're letting the model decide to do that because the models are much more capable than they were two years ago when you saw the first type of agentic frameworks coming out.

Dwan Lightoot: 所以我们把其他代理框架中可能需要你手动完成的许多基础设施工作，比如“你必须这样做，你必须那样做”，都交给了模型。
Dwan Lightoot: 我们让模型自己决定这样做，因为现在的模型比两年前第一批代理框架出现时强大得多。

Audience: So this Strands tools, uh, like I see that you're importing two tools, uh, which is like word count and HTTP request. So how many tools are there like? Yeah. Yeah.
Dwan Lightoot: So there's some built-in tools in the Strands framework like HTTP request, but then I also just made my own tool, which is literally this one line of code: `return this lens`.

Audience: 那么这些Strands工具，呃，我看到你们导入了两个工具，呃，比如单词计数和HTTP请求。那么大概有多少个工具呢？是的。是的。
Dwan Lightoot: Strands框架中内置了一些工具，比如HTTP请求，但我也创建了自己的工具，实际上就是这一行代码：`return this lens`。

Dwan Lightoot: So it's very easy to make your own custom tools. You just put this tool decorator, and that's it. So very, very streamlined.

Dwan Lightoot: 因此，创建自己的自定义工具非常容易。你只需添加这个工具装饰器，就可以了。所以非常非常精简。

### 演示二：使用MCP服务器生成AWS架构图

Dwan Lightoot: All right. So we're going to move on to the next exercise. Uh, so the next exercise is a fun one: MCP servers.
Dwan Lightoot: So you know MCP is the hottest thing, you know. So, uh, what's really cool about Strands, it has built-in MCC support, and AWS, we actually have official AWS, uh, MCP servers.

Dwan Lightoot: 好的。那么我们继续下一个练习。呃，下一个练习很有趣：MCP服务器。
Dwan Lightoot: 您知道MCP现在是最热门的东西。所以，Strands真正酷的地方在于，它内置了MCC支持，而且AWS，我们实际上有官方的AWS，呃，MCP服务器。

Dwan Lightoot: So, I'm going to highlight the documentation lookup because AWS can be very long, a lot of different things.
Dwan Lightoot: So, if I just have one endpoint to just grab that information and pass it to the model, it's going to be able to understand how to build. And there's an architecture diagram. So, making AWS diagrams.

Dwan Lightoot: 所以，我将重点介绍文档查找功能，因为AWS的文档可能非常冗长，涉及许多不同的内容。
Dwan Lightoot: 如果我只有一个端点来获取信息并将其传递给模型，它就能理解如何构建。而且还有一个架构图。所以，制作AWS图表。

Dwan Lightoot: So there are two MCP, there's a whole bunch of them listed here, but I'm going to highlight these two as an example. So let's go back, and we can also ask Claude Code to explain it as well.
Dwan Lightoot: So get back, let me open my Claude Code. So I have to explain how the MCP diag one works. So let me open that up while it's waiting. Let me close that.

Dwan Lightoot: 这里列出了很多MCP，但我将以这两个为例进行重点介绍。所以让我们回去，我们也可以请Claude Code来解释一下。
Dwan Lightoot: 好的，让我打开我的Claude Code。我必须解释MCP diag one是如何工作的。那么在我等待的时候，让我打开它。我把那个关掉。

Dwan Lightoot: Claude Code's documenting. It's looking what to do. It's taking its time.
Dwan Lightoot: So while Claude Code is going, I'll explain what's happening. That just finished. Cool.

Dwan Lightoot: Claude Code正在记录。它正在查看要做什么。它正在花时间。
Dwan Lightoot: 那么在Claude Code运行的时候，我来解释一下发生了什么。它刚刚完成了。酷。

Dwan Lightoot: All right. Import the Strands. Still going. All right. So the cool thing about, uh, MCP server is we can actually just pull it in with one line.
Dwan Lightoot: We just the command `uvx`. This is, uh, the Python material for downloading things. So we can just point it to the MCP server, and it'll download it locally.

Dwan Lightoot: 好的。导入Strands。还在进行中。好的。MCP服务器的酷之处在于，我们实际上可以用一行代码将其引入。
Dwan Lightoot: 我们只需使用命令`uvx`。这是用于下载Python包的工具。所以我们可以直接将其指向MCP服务器，它就会在本地下载。

Dwan Lightoot: So I'm passing in, uh, the documentation MCP server, and I'm passing in the diagram MCP server.
Dwan Lightoot: And then, you know, Claude even saying the same thing: "Connect to the MC diagram, run one, configure using Bedrock."

Dwan Lightoot: 所以我正在传入，呃，文档MCP服务器，以及图表MCP服务器。
Dwan Lightoot: 然后，你知道，Claude甚至也说了同样的话：“连接到MC图表，运行一个，使用Bedrock配置。”

Dwan Lightoot: Again, I can choose different models on Bedrock to pass in.
Dwan Lightoot: And then I'm giving a system prompt: "You an extra certified solutions architect. Your role to help customers understand best practices, query documentation, generate diagrams, tell the customer the full path of the diagram when you create it," just so we know where it is.

Dwan Lightoot: 再次强调，我可以在Bedrock上选择不同的模型传入。
Dwan Lightoot: 然后我给出一个系统提示：“你是一名获得额外认证的解决方案架构师。你的职责是帮助客户理解最佳实践，查询文档，生成图表，并在创建图表后告诉客户图表的完整路径，”这样我们就能知道图表在哪里。

Dwan Lightoot: And then again, you know, we pass in multiple MCP servers with the diagram client, with the docs client.
Dwan Lightoot: Uh, we get all the tools based in those, uh, MCP servers, and then again, you know, we have the tools, we have the model, and the system prompt. All you need to have the Strands agent.

Dwan Lightoot: 然后，我们再次传入多个MCP服务器，包括图表客户端和文档客户端。
Dwan Lightoot: 呃，我们从那些MCP服务器中获取所有工具，然后，我们有工具、模型和系统提示。这就是您拥有Strands代理所需的一切。

Dwan Lightoot: And then we give it like, "Get the documentation for AWS Lambda. Then create a diagram of a website that uses Lambda for a static website hosted on S3."
Dwan Lightoot: So that's the task I give it. Let's see how it executes that. So oops.

Dwan Lightoot: 然后我们给它一个任务，比如：“获取AWS Lambda的文档。然后创建一个使用Lambda为托管在S3上的静态网站的架构图。”
Dwan Lightoot: 这就是我给它的任务。让我们看看它是如何执行的。哎呀。

Dwan Lightoot: All right. So downloads the MCP server. It's already downloaded that already, and now it's processing.
Dwan Lightoot: Now it breaks it down into steps. So first, it'll search the AW documentation. Then I'll read the documentation. Then I'll create a diagram illustrating architecture.

Dwan Lightoot: 好的。所以它下载了MCP服务器。它已经下载好了，现在正在处理。
Dwan Lightoot: 现在它将其分解为多个步骤。所以首先，它会搜索AW文档。然后我将阅读文档。然后我将创建一个说明架构的图表。

Dwan Lightoot: So you can actually see it stop process. It makes an HTTP call to get the search.
Dwan Lightoot: It finds the Lambda welcome page to get the information. It queried the documentation. Now it's going to draw the diagram. Let's see.

Dwan Lightoot: 所以你实际上可以看到它停止处理。它发起一个HTTP调用来获取搜索结果。
Dwan Lightoot: 它找到了Lambda欢迎页面来获取信息。它查询了文档。现在它将绘制图表。让我们看看。

Dwan Lightoot: It listed the icon. So what icons are available for it. Now it's actually generating the diagram.
Dwan Lightoot: So excellent. It failed there, but it understood that and explained. "Let me correct the cloud icon."

Dwan Lightoot: 它列出了图标。所以有哪些图标可用。现在它正在生成图表。
Dwan Lightoot: 太棒了。它在那里失败了，但它理解并解释说：“让我纠正云图标。”

Dwan Lightoot: Now it generated it, explained what's happening, and it made this new diagram saved here.
Dwan Lightoot: So I should be able to open it up. Generated diagrams. And tada, it made a new diagram for me.

Dwan Lightoot: 现在它生成了图表，解释了正在发生的事情，并在这里保存了这个新图表。
Dwan Lightoot: 所以我应该能够打开它。生成的图表。瞧，它为我制作了一个新图表。

Dwan Lightoot: So, whoops. Let me, yeah, it's going to be different every time when you, of course, based on how much context you give it.
Dwan Lightoot: But yeah, I'm able to make that diagram in just about, you know, 40 lines of code.

Dwan Lightoot: 哎呀。好吧，是的，当然，每次都会不同，这取决于你给它的上下文有多少。
Dwan Lightoot: 但是的，我只需大约40行代码就能制作出这个图表。

Dwan Lightoot: I have two MCP servers. I put my system prompt picking a different model, and I'm able to create that agentic workflow very quickly and very easily without any too much headache.
Dwan Lightoot: So I'm going to pause here, and he talks about MCP servers connecting maybe with a Strands agents.

Dwan Lightoot: 我有两个MCP服务器。我设置了我的系统提示，选择了一个不同的模型，我就能够非常快速、非常轻松地创建这个代理工作流，而不会有太多麻烦。
Dwan Lightoot: 所以我在这里暂停一下，他谈到了MCP服务器可能与Strands代理连接。

Audience: Is there a pattern, um, through **API Gateway** (API Gateway: Amazon API Gateway，亚马逊云科技提供的一项服务，用于创建、发布、维护、监控和保护任何规模的API) to host an MCP server with Lambda like the **Server-Side Events (SSE)** (Server-Side Events (SSE): 服务器发送事件，一种允许服务器主动向客户端推送更新的技术)? Is there something that allows Yeah. Yeah.
Dwan Lightoot: Now because MCP supports the HTTP streaming server-side event, you can have it in a Lambda function and do that.

Audience: 是否有一种模式，嗯，通过API Gateway来用Lambda托管MCP服务器，比如服务器发送事件 (SSE)？有没有什么可以实现这种方式的？是的。是的。
Dwan Lightoot: 现在，因为MCP支持HTTP流式服务器发送事件，你可以在Lambda函数中实现这一点。

Dwan Lightoot: There are some, I believe there are some open-source code that demonstrates how to do that. One of my colleagues has done that. So yes, totally possible to do that use case.
Dwan Lightoot: Because right now I'm just running the MCP server locally, but if you wanted to have it in the cloud, I got a Lambda function. Totally possible use case. You would have to change how this is set up.

Dwan Lightoot: 我相信有一些开源代码展示了如何做到这一点。我的一个同事已经做到了。所以，是的，完全有可能实现那种用例。
Dwan Lightoot: 因为现在我只是在本地运行MCP服务器，但如果你想在云端运行，我有一个Lambda函数。这种用例完全可行。你必须改变它的设置方式。

### 演示三：使用Claude Code创建新的CDK代理

Dwan Lightoot: All right. So the last exercise was we're actually going to create a new, uh, a new agent using Claude Code to understand how it does, uh, without just looking at the code we have already and able to understand which **CDK** (Cloud Development Kit: 云开发工具包，一种通过代码定义云基础设施的框架) I'm going to make a CDK agent.

Dwan Lightoot: 好的。所以最后一个练习是，我们实际上将使用Claude Code创建一个新的，呃，一个新的代理，以了解它是如何工作的，呃，而不仅仅是查看我们已有的代码，并能够理解我要制作的CDK代理是哪个CDK。

Dwan Lightoot: So CDK is a **Cloud Development Kit** (云开发工具包: 一种通过代码定义云基础设施的框架). So it's a way to create AWS infrastructure through code.
Dwan Lightoot: Uh, normally if you want to create AWS infrastructure, you might use something like **CloudFormation** (CloudFormation: AWS提供的一种基础设施即代码服务，用于定义和部署云资源), which is a **YAML** (YAML: 一种人类可读的数据序列化标准) based way.

Dwan Lightoot: 所以CDK是云开发工具包。它是一种通过代码创建AWS基础设施的方式。
Dwan Lightoot: 通常，如果您想创建AWS基础设施，您可能会使用像CloudFormation这样的服务，它是一种基于YAML的方式。

Dwan Lightoot: But if it's a developer, CDK is more preferred for that because you can integrate the Python **TypeScript** (TypeScript: 微软开发的一种开源编程语言，是JavaScript的超集) code.
Dwan Lightoot: So I'm going to show an example of how we can use Claude Code to actually create a new Strands agent for us. So going to make this new file here.

Dwan Lightoot: 但对于开发人员来说，CDK更受欢迎，因为你可以集成Python TypeScript代码。
Dwan Lightoot: 所以我将展示一个例子，说明我们如何使用Claude Code为我们实际创建一个新的Strands代理。所以要在这里创建一个新文件。

Dwan Lightoot: All right. So I created a brand new file, nothing in it.
Dwan Lightoot: And then I'm going to ask Claude Code, you know, "Update the CDK agent to create a Strands agent connecting to an MCP server. Uh, look at the other files to understand how to do this."

Dwan Lightoot: 好的。所以我创建了一个全新的文件，里面什么都没有。
Dwan Lightoot: 然后我将询问Claude Code，你知道的，“更新CDK代理以创建一个连接到MCP服务器的Strands代理。呃，查看其他文件以了解如何操作。”

Dwan Lightoot: So I'm not giving you the documentation. I'm just going to say, you know, "Use the knowledge you have already to understand how to make it."
Dwan Lightoot: Let me get into the repo and then Claude and ask it. So, yeah. Yeah. So now Claude Code is going to look through. We'll see the plan of attack it does. All right.

Dwan Lightoot: 所以我没有提供文档。我只是说，“利用你已有的知识来理解如何制作它。”
Dwan Lightoot: 让我进入仓库，然后让Claude来问它。所以，是的。是的。所以现在Claude Code将进行查看。我们会看到它采取的攻击计划。好的。

Dwan Lightoot: "I'll update the CDK agent to CL agent connected to MCP server." You know, it looks at the other one. There's no one line of code there. It read the other word count one.
Dwan Lightoot: All right. It finds the MCP doc one. Examines it. Crosses it off the list. All right. On to the next one. Create a Strands agent.

Dwan Lightoot: “我将更新CDK代理，使其成为连接到MCP服务器的CL代理。”你知道，它会查看另一个文件。那里没有一行代码。它读取了另一个单词计数文件。
Dwan Lightoot: 好的。它找到了MCP doc one。检查它。从列表中划掉。好的。进入下一个。创建一个Strands代理。

Dwan Lightoot: It put all the code for that. It asks me, "Do I want to make this edit?" So say yes, make the edit. It's adding the code to me.
Dwan Lightoot: All right, configure ready. Then MCP client configure system prompt. It's done it. Perfect.

Dwan Lightoot: 它把所有的代码都放进去了。它问我，“我是否要进行此编辑？”所以我说是，进行编辑。它正在为我添加代码。
Dwan Lightoot: 好的，配置就绪。然后MCP客户端配置系统提示。它已经完成了。完美。

Dwan Lightoot: So close out of it. And what I like about Claude Code, it actually tells us how much it costs when you end it.
Dwan Lightoot: So the total cost, how long the API took, you know, how many code changes, how which models it used, it used Claude 3.5 site Haiku, use CLI.

Dwan Lightoot: 所以关掉它。我喜欢Claude Code的地方在于，它实际上会告诉我们当你结束时花费了多少。
Dwan Lightoot: 所以总成本，API花费了多长时间，你知道，代码修改了多少次，它使用了哪些模型，它使用了Claude 3.5 Haiku，使用了CLI。

Dwan Lightoot: So, uh, using Claude Code on Bedrock is that's an easy way to get started in building applications like this, and it's now natively inside VS Code, which is very exciting.
Dwan Lightoot: So let's see if the code actually works. So, uh, I'm just going to run it. Let's see you're expert AWS CDK expert.

Dwan Lightoot: 所以，呃，在Bedrock上使用Claude Code是开始构建此类应用程序的简单方法，而且它现在已经原生集成到VS Code中，这非常令人兴奋。
Dwan Lightoot: 那么让我们看看代码是否真的有效。所以，呃，我将运行它。我们来看看你是否是AWS CDK专家。

Dwan Lightoot: Uh, "How can I get a simple **S3 bucket** (S3存储桶: Amazon Simple Storage Service (S3) 中的一个存储单元，用于存储对象) with CDK?" Give us something simple. Let's see how it works. `Python 3 CDK agent`.
Dwan Lightoot: All right. So, I was making a TypeScript example. I'll provide step-by-step guidance. It wrote the code for me. It's doing that.

Dwan Lightoot: 呃，“我如何用CDK获得一个简单的S3存储桶？”给我们一些简单的东西。我们来看看它是如何工作的。`Python 3 CDK agent`。
Dwan Lightoot: 好的。我正在创建一个TypeScript示例。我将提供分步指导。它为我编写了代码。它正在执行。

Dwan Lightoot: Security text this add a CNN nag rule. So, it really understands what CDK is. It's putting all this extra stuff there.
Dwan Lightoot: Uh, and yeah, it even explained that. So Claude Code is able to understand how Strands agent works, create a new agent based on that, create a template on that, and it was very easy to understand.

Dwan Lightoot: 安全文本是添加一个CNN nag规则。所以，它确实理解CDK是什么。它把所有这些额外的东西都放在那里。
Dwan Lightoot: 呃，是的，它甚至解释了这一点。所以Claude Code能够理解Strands代理的工作方式，基于此创建一个新代理，并基于此创建一个模板，而且非常容易理解。

Dwan Lightoot: So by providing the enough context, Claude Code was able to understand what to do, create this agent, and it's a pretty good job.
Dwan Lightoot: So very impressed with using Claude Code and Bedrock power, that's also amazing.

Dwan Lightoot: 因此，通过提供足够的上下文，Claude Code能够理解要做什么，创建这个代理，而且做得相当不错。
Dwan Lightoot: 所以我对使用Claude Code和Bedrock的能力印象深刻，这也很棒。

Dwan Lightoot: Uh, but that was kind of the workshop through and through kind of to show you what Strands can do from a simple weather agent to connecting to MCP servers and then also making your own agents.
Dwan Lightoot: So, I'm going to pause here for any questions or if you want to see a demonstration of something cool, happy to try it out and see what Claude can do.

Dwan Lightoot: 呃，但这就是这次研讨会的全部内容，旨在向您展示Strands能做什么，从简单的天气代理到连接MCP服务器，再到创建您自己的代理。
Dwan Lightoot: 所以，我在这里暂停一下，回答任何问题，或者如果您想看一些酷炫的演示，我很乐意尝试并看看Claude能做什么。

### MCP服务器用例探讨

Audience: Uh, sorry, I just have to ask like what are some of the use cases for like using MCP?
Audience: Like I know I will be building agents that probably connect to the outer world like through APIs and all like, uh, maybe I don't know a lot about MCPs.

Audience: 呃，抱歉，我只是想问一下使用MCP的一些用例是什么？
Audience: 比如我知道我会构建可能通过API等连接到外部世界的代理，呃，也许我对MCP了解不多。

Audience: So, but like what are some of the use cases you can like use MCPs for?
Dwan Lightoot: Right. So, a great question. What are the use cases for MCP?

Audience: 那么，你们可以使用MCP的一些用例是什么呢？
Dwan Lightoot: 好的。这是一个很好的问题。MCP的用例是什么？

Dwan Lightoot: So by default, the agent doesn't have enough information to connect to external API.
Dwan Lightoot: So you saw in the example, we created an AWS diagram. If I did that without an MCP server, the model will not know how to make the AWS diagram. It won't know how to look up the AWS documentation.

Dwan Lightoot: 因此，默认情况下，代理没有足够的信息来连接外部API。
Dwan Lightoot: 所以你在示例中看到，我们创建了一个AWS图表。如果我没有MCP服务器就去做，模型将不知道如何制作AWS图表。它也不知道如何查找AWS文档。

Dwan Lightoot: So it's providing extra context to the model to do extra action.
Dwan Lightoot: So when it comes to using large things, model context is really what empowers what's going to go on.

Dwan Lightoot: 所以它为模型提供了额外的上下文，以执行额外的操作。
Dwan Lightoot: 因此，在使用大型模型时，模型上下文才是真正推动其运行的关键。

Dwan Lightoot: MCP provides a structured way to grab that information so it can take action, read documentation, uh, connect to external applications.
Dwan Lightoot: So MCP is really kind of the USB-C, they call it, of connecting the LLM.

Dwan Lightoot: MCP提供了一种结构化的方式来获取这些信息，以便它能够采取行动、阅读文档、呃，连接到外部应用程序。
Dwan Lightoot: 所以MCP实际上就是连接LLM的USB-C，他们是这么称呼它的。

Dwan Lightoot: So for me, it's a great way to just connect, uh, external applications, get different context for your model.
Dwan Lightoot: And I'll show you some highlights of the AWS MCP servers just so you can get an example of what we have.

Dwan Lightoot: 所以对我来说，这是一种很好的方式来连接外部应用程序，为你的模型获取不同的上下文。
Dwan Lightoot: 我将向您展示一些AWS MCP服务器的亮点，以便您了解我们有什么样的示例。

Dwan Lightoot: So there are official list of AWS MCP servers that do a bunch of different things. So I'll go through some examples.
Dwan Lightoot: Uh, show the documentation one. Uh, Bedrock knowledge base if you have a bunch of PDFs or documents you want to give to an LLM.

Dwan Lightoot: 所以有一份官方的AWS MCP服务器列表，它们可以做很多不同的事情。我将介绍一些例子。
Dwan Lightoot: 呃，展示文档服务器。呃，如果您有一堆PDF或文档想提供给LLM，可以使用Bedrock知识库。

Dwan Lightoot: Uh, cost analysis, so you want to do AWS cost analysis, you want to get another example, uh, the MCP server could be useful for you.
Dwan Lightoot: Uh, Amazon Nova Canvas if you want to draw images. Uh, Nova Canvas MVC server. The diagram one that we use today, you can also draw AWS architecture diagrams.

Dwan Lightoot: 呃，成本分析，所以如果您想进行AWS成本分析，想获得另一个示例，呃，MCP服务器可能对您有用。
Dwan Lightoot: 呃，如果您想绘制图像，可以使用Amazon Nova Canvas。呃，Nova Canvas MVC服务器。我们今天使用的图表服务器，您也可以绘制AWS架构图。

Dwan Lightoot: **CloudFormation** (CloudFormation: AWS提供的一种基础设施即代码服务，用于定义和部署云资源). So there's a bunch of different ones and Terraform if you use Terraform form.
Dwan Lightoot: Uh, front-end code, you want to specialize in React or using AWS Amplify, etc.

Dwan Lightoot: CloudFormation。所以有很多不同的服务，如果您使用Terraform，也有Terraform的。
Dwan Lightoot: 呃，前端代码，您想专注于React或使用AWS Amplify等等。

Dwan Lightoot: So there's a whole source of MCP servers. So one big use case is, "I want my model to understand these things."
Dwan Lightoot: You have a bunch of documentation **PostgreSQL** (PostgreSQL: 一种强大的开源关系型数据库系统) database, **Amazon Neptune** (Amazon Neptune: 亚马逊云科技提供的一种完全托管的图数据库服务) server like so this is really the power of MCP.

Dwan Lightoot: 所以有一整套MCP服务器来源。所以一个大的用例是，“我希望我的模型理解这些东西。”
Dwan Lightoot: 你有一堆文档、PostgreSQL数据库、Amazon Neptune服务器等等，这才是MCP的真正力量。

Dwan Lightoot: So there's so many integrations you can have to give that model extra abilities to do.
Dwan Lightoot: Uh, we do have AWS credits for you. So if you want to give us some feedback and surveys, and once you fill this out, you'll get, uh, we have $25 in AWS credits to use.

Dwan Lightoot: 所以你可以有如此多的集成，为模型提供额外的能力。
Dwan Lightoot: 呃，我们确实为您准备了AWS积分。所以如果您想给我们一些反馈和调查，一旦您填写完毕，您将获得，呃，我们有25美元的AWS积分供您使用。

Dwan Lightoot: So you can play around, try some things out. Uh, but thank you for coming and let's go build.

Dwan Lightoot: 所以你可以玩玩，尝试一些东西。呃，但感谢您的到来，让我们开始构建吧。