---
title: 提示词工程101：使用Claude构建高效AI应用
summary: Anthropic团队分享提示词工程最佳实践，通过真实车险案例，逐步演示如何构建结构化、高质量的AI提示词，提升Claude模型的性能与可靠性。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-best-practices
- claude-ai
- llm
- prompt-engineering
people: []
companies_orgs: []
products_models: []
media_books: []
date: '2025-07-31'
author: Anthropic
speaker: Anthropic
draft: true
guest: ''
insight: ''
layout: post.njk
series: ''
source: https://www.youtube.com/watch?v=ysPbXH0LpIE
status: evergreen
---
### 欢迎与提示词工程简介

Hi everyone. Thank you for joining us today for prompting 101. My name is Hannah. I'm part of the applied AI team here at Anthropic. And with me is Christian, also part of the applied AI team. And what we're going to do today is take you through a little bit of prompting best practices. And we're going to use a real-world scenario and build up a prompt together.
大家好。感谢各位今天参加我们的提示词工程101课程。我叫汉娜，是Anthropic应用AI团队的一员。我的同事克里斯蒂安也在应用AI团队。今天我们将向大家介绍一些提示词工程的最佳实践。我们将使用一个真实的场景，并一起构建一个提示词。

Prompt engineering, you're all probably a little bit familiar with this. This is the way that we communicate with a language model and try to get it to do what we want. So, this is the practice of writing clear instructions for the model, giving the model the context that it needs to complete the task, and thinking through how we want to arrange that information in order to get the best result.
对于**提示词工程**（Prompt Engineering: 旨在通过设计和优化输入提示词来指导大型语言模型生成期望输出的实践），大家可能都有所了解。这是我们与语言模型沟通并尝试让它执行我们想要任务的方式。因此，它是一种为模型编写清晰指令的实践，为模型提供完成任务所需的上下文，并思考如何组织这些信息以获得最佳结果。

There's a lot of detail here, a lot of different ways you might want to think about building out a prompt. And as always, the best way to learn this is just to practice doing it. So today we're going to go through a hands-on scenario. We're going to use an example inspired by a real customer that we worked with. So, we've modified what the actual customer asked us to do, but this is a really interesting case of trying to analyze some images and get factual information out of the images and have Claude make a judgment about what content it finds there.
这里有很多细节，也有很多不同的方法来思考如何构建提示词。一如既往，学习这个的最佳方法就是实践。所以今天我们将通过一个动手实践的场景。我们将使用一个受我们合作过的真实客户启发而来的例子。我们修改了客户实际要求我们做的事情，但这是一个非常有趣的案例，旨在分析一些图像并从中提取事实信息，并让Claude对它发现的内容做出判断。

I actually do not speak the language that this content is in, but luckily Christian and Claude both do. So I'm going to pass it over to Christian to talk about the scenario and the content.
我实际上不懂这些内容所用的语言，但幸运的是，克里斯蒂安和Claude都懂。所以，我将把时间交给克里斯蒂安，让他来谈谈这个场景和内容。

### 初始尝试与迭代改进

Christian: So for this example that we have here, it's intended so to set the stage, imagine you're working for a Swedish insurance company and you deal with car insurance claims on a daily manner. The purpose of this is that you have two pieces of information. We're going to these in detail as well, but visually you can see on the left-hand side we have a car accident report form, just detailing out what transpired before the accident actually took place. And then finally, we have a sort of human-drawn sketch of how the accident took place as well.
Christian: 我们这里的这个例子，是为了铺垫，想象你正在一家瑞典保险公司工作，每天处理汽车保险索赔。这个任务的目的是你有两份信息。我们稍后也会详细介绍这些信息，但从视觉上看，左侧我们有一份汽车事故报告表，详细说明了事故发生前的情况。最后，我们还有一份手绘的事故发生示意图。

So these two pieces of information is what we're going to try to pass on to Claude. And to begin with, we could just take these two and throw them into a console and just see what happens. So if we transition over to console as well, we can actually do this in a real manner. And in this case here, you can see we have our shiny beautiful Anthropic console. We're using the new Claude 4 solid model as well. In this case, setting temperature zero and having a huge max token budget as well, just helping us make sure that there's no limitations to what Claude can do.
所以，我们将尝试把这两份信息传递给Claude。首先，我们可以直接把这两份信息扔进控制台，看看会发生什么。如果我们也切换到控制台，我们就可以实际操作。这里，大家可以看到我们有漂亮简洁的Anthropic控制台。我们也正在使用新的Claude 4实体模型。在这种情况下，我们将**温度**（Temperature: 大型语言模型生成文本时随机性的参数，值越高，输出越具创造性，值越低，输出越具确定性）设置为零，并设置了大量的最大**token**（Token: 语言模型处理文本的基本单位，可以是单词、部分单词或字符）预算，这只是为了确保Claude的能力不受限制。

In this case, you can see I have a very simple prompt just setting the stage of what Claude's supposed to do, in this case mentioning that this is intended to review an accident report form and eventually also determine what happened in an accident and who's at fault. So you can see here with this very simple prompt, if I just run this, let me go to preview. We can see here that Claude thinks that this is in relation to a skiing accident that happened on a street called Chappangan. It's a very common street in Sweden. And in many ways, you can sort of understand this innocent mistake in the sense that in our prompt we actually haven't done anything to set the stage on what is actually taking place here.
在这种情况下，大家可以看到我有一个非常简单的提示词，只是说明了Claude应该做什么，这里提到它旨在审查事故报告表，并最终确定事故中发生了什么以及谁有过错。所以大家可以看到，有了这个非常简单的提示词，如果我运行它，让我去预览一下。我们可以看到Claude认为这与发生在瑞典一条名为Chappangan的常见街道上的滑雪事故有关。在很多方面，你可以理解这个无心的错误，因为在我们的提示词中，我们实际上没有做任何事情来设定这里实际发生的事情的场景。

So this sort of first guess is not too bad, but we still notice a lot of intuition that we can bake into Claude. So if we switch back to the slides, you can see here that in many ways prompt engineering is a very iterative empirical science. In this case here, we could almost have a test case where Claude is supposed to make sure it understands it's in a car or vehicular environment, nothing to do with skiing. And in that way, you iteratively build upon your prompt to make sure it's actually tackling the problem you're intending to solve.
所以这种首次猜测还不错，但我们仍然注意到有很多我们可以融入Claude的直觉。所以如果我们切换回幻灯片，大家可以看到，在很多方面，提示词工程是一门非常迭代的经验科学。在这里，我们几乎可以有一个测试案例，让Claude确保它理解它是在汽车或车辆环境中，与滑雪无关。通过这种方式，你可以迭代地构建你的提示词，以确保它真正解决你打算解决的问题。

And to do so, we'll go through some best practices of how we at Anthropic break this down internally and how we recommend others to do so as well.
为了做到这一点，我们将介绍一些我们Anthropic内部如何分解以及我们推荐其他人也这样做的一些最佳实践。

### 优质提示词的结构

Hannah: So, we're going to talk about some best practices for developing a great prompt. First we want to talk a little bit about what a great prompt structure looks like. So you might be familiar with kind of interacting with a chatbot with Claude going back and forth having a more kind of conversational style interaction. When we're working with a task like this, we're probably using the API and we kind of want to send one single message to Claude and have it nail the task the first time around without needing to move back and forth.
汉娜：那么，我们将讨论一些开发优质提示词的最佳实践。首先，我们想谈谈优质提示词的结构是怎样的。大家可能熟悉与Claude进行聊天机器人的互动，来回交流，采用更具对话性的交互方式。当我们处理这样的任务时，我们可能使用的是**API**（Application Programming Interface: 应用程序编程接口），我们希望向Claude发送一条消息，让它一次性完成任务，而无需来回交互。

So the kind of structure that we recommend is setting the task description up front. So telling Claude, "What are you here to do? What's your role? What task are you trying to accomplish today?" Then we provide content. So in this case, it's the images that Christian was showing, the form and the drawing of the accident and how they occurred. That's our dynamic content. This might also be something you're retrieving from another system, depending on what your use case is.
因此，我们推荐的结构是预先设定任务描述。也就是说，告诉Claude：“你来这里做什么？你的角色是什么？你今天想要完成什么任务？”然后我们提供内容。在这个案例中，就是克里斯蒂安展示的图片，事故报告表和事故发生示意图。这是我们的**动态内容**（Dynamic Content: 根据特定用户或上下文实时生成或变化的内容）。根据你的用例，这可能也是你从另一个系统检索到的信息。

We're going to give some detailed instructions to Claude, so almost like a step-by-step list of how we want Claude to go through the task and how we want it to tackle the reasoning. We may give some examples to Claude. Here's an example of some piece of content you might receive. Here's how you should respond when given that content. And at the end, we usually recommend repeating anything that's really important for Claude to understand about this task, kind of reviewing the information with Claude, emphasizing things that are extra critical and then telling Claude, "Okay, go ahead and do your work."
我们将给Claude一些详细的指令，几乎就像一个分步列表，说明我们希望Claude如何完成任务以及我们希望它如何进行推理。我们可能会给Claude一些例子。例如，你可能会收到这样的内容，在这种情况下你应该这样回应。最后，我们通常建议重复任何对Claude理解这项任务非常重要的信息，类似于与Claude一起回顾信息，强调特别关键的事情，然后告诉Claude：“好的，开始你的工作吧。”

So, here's another view. This has a little bit more detail, a little bit more of a breakdown, and we're going to walk through each of these 10 points individually and show you how we build this up in the console. So, the first couple things, Christian's going to talk about the task context and the tone context.
所以，这是另一个视图。它有更多的细节，更细致的分解，我们将逐一讲解这10个要点，并向大家展示我们如何在控制台中构建它们。首先几点，克里斯蒂安将谈论任务上下文和语气上下文。

### 任务与语气上下文

Christian: Perfect. So, yeah, if we begin with the task context, as you realized when I went through a little demo there, we didn't have much elaborating what scenario Claude was actually working within. And because of that, you can also tell that Claude doesn't necessarily need to guess a lot more on what you actually want from it. So in our case, we really want to break that down, make sure we can give more clear-cut instructions. And also make sure we understand what's the task that we're asking Claude to do.
Christian: 太好了。那么，如果我们从任务上下文开始，正如你刚才在我的小演示中意识到的，我们没有详细说明Claude实际工作的场景。正因为如此，你也可以看出Claude不一定需要过多猜测你到底想要它做什么。所以在我们的案例中，我们确实想把这一点分解开来，确保我们能给出更明确的指令。同时也要确保我们理解我们要求Claude完成的任务是什么。

Secondly, as well, we also make sure we add a little bit of tone into it all. Key thing here is we want Claude to stay factual and to stay confident. So if Claude can't understand what it's looking at, we don't want it to guess and just sort of mislead us. We want to make sure that any assessment and in our case we want to make sure that we can understand who's at fault here. We want to make sure that assessment is as clear and as confident as possible. If not, we're sort of losing track of what we're doing.
其次，我们也要确保在其中加入一些语气。这里的关键是我们希望Claude保持事实性和自信。因此，如果Claude无法理解它正在看什么，我们不希望它猜测并误导我们。我们希望确保任何评估，在我们的案例中，我们希望确保能够理解谁有过错。我们希望确保该评估尽可能清晰和自信。否则，我们就会偏离我们正在做的事情。

So if we transition back to the console, we can jump to a V2 that we have here. So I'll just navigate to V2. And you can see here I'll also just illustrate the data because we didn't really do that last time around just to really highlight what we're looking at. So, what we're seeing here, this is the car accident report form, and it's just 17 different checkboxes going through what actually happened. You can see there's a vehicle A and vehicle B, both on the left and right-hand side. And the main purpose of this is that we want to make sure that Claude can understand this manually generated data to assess what's actually going on.
所以如果我们回到控制台，我们可以跳转到我们这里的V2版本。我将导航到V2。大家可以看到，我也会简单展示数据，因为上次我们没有真正这样做，只是为了真正突出我们正在看什么。所以，我们在这里看到的是汽车事故报告表，它有17个不同的复选框，详细说明了实际发生的情况。大家可以看到，左侧和右侧都有车辆A和车辆B。这样做的主要目的是，我们希望确保Claude能够理解这些手动生成的数据，以评估实际发生的情况。

And that is corroborated by if I navigate back here to this sketch that we can highlight here as well. In this case, the form is just a different data point for the same scenario. And in this case here, I want to bake in more information into our version two. And by doing so, I'm actually elaborating a lot more on what's going on. So, you can see here I'm specifying that this AI assistant is supposed to help a human claims adjuster that's reviewing car accident report forms in Swedish as well.
如果我回到这里，我们可以突出显示的这张示意图也证实了这一点。在这种情况下，表格只是同一场景的不同数据点。在这里，我希望将更多信息融入到我们的V2版本中。通过这样做，我实际上更详细地阐述了正在发生的事情。所以，大家可以看到我在这里指定，这个**AI助理**（AI Assistant: 一种基于人工智能的软件，旨在帮助用户完成各种任务）应该帮助审查瑞典语汽车事故报告表的人工理赔员。

You can see here we're also elaborating that it's a human-driven sketch of the incident and that you should not make an assessment if it's not actually fully confident. And that's really key because if we run this, you'll see that and you can see it's the same settings as well. Claude, my new shiny model, zero temperature as well. If we run this, we can see here what actually happens in this case. Claude is able to pick up that now it's relating to car accidents, not skiing accidents, which is great.
大家可以看到，我们还详细说明了这是一张手绘的事件示意图，并且如果AI助理没有完全的信心，就不应该做出评估。这非常关键，因为如果我们运行它，你会看到，而且大家可以看到设置也是一样的。Claude，我的新模型，温度也设置为零。如果我们运行它，我们可以在这种情况下看到实际发生的情况。Claude能够识别出现在它与车祸有关，而不是滑雪事故，这很棒。

We can see it's able to pick up that vehicle A was marked on checkbox one and then vehicle B was on 12. And if we scroll down though, we can still tell that there's some information missing for Claude to make a fully confident determination of who's at fault here. And this is great. This is pertaining to a task set. Make sure you don't make anything any claims that aren't factual and make sure you only sort of assess things when you're confident. But there's a lot of information we're still missing here regarding the form, what the form actually entails and a lot of that information is what we want to bake into this **LLM** (Large Language Model: 一种基于深度学习的语言模型，能够理解、生成人类语言) application as well and the best way of doing so is actually adding it to the system prompt which Hannah will elaborate on.
我们可以看到它能够识别出车辆A在复选框一上被标记，然后车辆B在复选框十二上。但是如果我们向下滚动，我们仍然可以看出Claude缺少一些信息来完全自信地确定谁是这里的过错方。这很棒。这与一个任务集有关。确保你不要做出任何不符合事实的声明，并确保你只在有信心时才进行评估。但是我们仍然缺少关于表格的很多信息，表格实际包含什么，很多这些信息都是我们想要融入到这个LLM应用程序中的，而最好的方法就是将其添加到系统提示词中，汉娜将对此进行详细阐述。

### 背景信息与信息组织

Hannah: So back in the slides, we have the next item we're going to add to the prompt and this is background detail data documents and images. And here as Christian was saying, we actually know a lot about this form. The form is going to be the same every single time. The form will never change. And so this is a really great type of information to provide to Claude to tell Claude, "Here's the structure of the form you'll be looking at." We know that will not ever alter between different queries. The way the form is filled out will change, but the form itself is not going to change. And so this is a great type of information to put into the system prompt.
汉娜：回到幻灯片，我们要添加到提示词中的下一个项目是背景详细数据、文档和图像。正如克里斯蒂安所说，我们对这份表格了解很多。这份表格每次都会是相同的。表格永远不会改变。因此，这是提供给Claude的一种非常好的信息类型，可以告诉Claude：“这就是你将要查看的表格结构。”我们知道，在不同的查询之间，这永远不会改变。表格的填写方式会改变，但表格本身不会改变。因此，这是一种非常适合放入**系统提示词**（System Prompt: 在大型语言模型中，用于设定模型角色、行为、提供背景信息或指令的初始提示，通常在用户提示之前）的信息。

Also a great thing to use prompt caching for if you're considering using prompt caching. This will always be the same. And what this will help Claude do is spend less time trying to figure out what the form is the first time it sees the form each time. And it's going to do a better job of reading the form because it already knows what to expect there.
如果你正在考虑使用**提示词缓存**（Prompt Caching: 存储并重用之前处理过的提示词或其部分，以提高效率和降低成本的技术），这也是一个很好的用途。这部分信息将始终相同。这将帮助Claude减少每次第一次看到表格时试图弄清楚表格是什么的时间。它将更好地阅读表格，因为它已经知道会看到什么。

So another thing I want to touch on here is how we like to organize information in prompts. So Claude really loves structure, loves organization. That's why we recommend following kind of a standard structure in your prompts. And there's a couple other tools you can use to help Claude understand the information better. I also just want to mention all of this is in our docs with a lot of really great examples. So definitely take pictures, but if you forget to take a picture, don't worry. All of this content is online with lots of examples and definitely encourage you guys to check it out there too.
所以我想在这里谈的另一件事是我们喜欢如何在提示词中组织信息。Claude非常喜欢结构，喜欢组织。这就是为什么我们建议在提示词中遵循一种标准结构。还有一些其他工具可以帮助Claude更好地理解信息。我还要提到，所有这些都在我们的文档中，有很多非常好的例子。所以一定要拍照，但如果你忘了拍照，别担心。所有这些内容都在网上，有很多例子，也强烈鼓励大家去查看。

Anyway, so some things you can use delimiters like XML tags. Also markdown is pretty useful to Claude, but XML tags are nice because you can actually specify what's inside those tags. So we can tell Claude here's user preferences. Now you're going to read some content and these XML tags are letting you know that everything wrapped in those tags is related to the user's preferences and it helps Claude refer back to that information maybe at later points in the prompt.
总之，你可以使用像**XML标签**（XML Tags: 可扩展标记语言中的标记，用于定义数据结构和内容）这样的分隔符。Markdown对Claude也很有用，但XML标签的好处在于你可以实际指定这些标签内是什么。所以我们可以告诉Claude，这里是用户偏好。现在你将阅读一些内容，这些XML标签让你知道所有包裹在这些标签内的内容都与用户偏好相关，这有助于Claude在提示词的后续部分引用这些信息。

So, I want to show in the back in the console how we actually do this in this case. And Christian's going to pull up our version three. So we're keeping everything about the other part of the user prompt the same. And we've decided in this case to put this information in the system prompt. You could try this different ways. We're doing it in the system prompt here. And we're going to tell Claude everything it needs to know about this form. So this is a Swedish car accident form. The form will be in Swedish. It'll have this title. It'll have two columns. The columns represent different vehicles. We'll tell Claude about each of the 17 rows and what they mean.
所以，我想在控制台中展示我们是如何实际操作的。克里斯蒂安将调出我们的第三版。我们保持用户提示词的其他部分不变。在这种情况下，我们决定将这些信息放入系统提示词中。你可以尝试不同的方法。我们在这里将其放入系统提示词。我们将告诉Claude关于这份表格它需要知道的一切。所以这是一份瑞典汽车事故表格。表格将是瑞典语的。它将有这个标题。它将有两列。这些列代表不同的车辆。我们将告诉Claude每一行（总共17行）以及它们代表的含义。

You might have noticed when we ran it before, Claude was reading individually each of the lines to understand what they are. We can provide all of that information up front. And we're also going to give Claude a little bit of information about how this form should be filled out. This is also really useful for Claude. We can tell it things like, you know, humans are filling this form out basically. So, it's not going to be perfect. People might put a circle. They might scribble. They might not put an X in the box. There could be many types of markings that you need to look for when you're reading this form.
你可能已经注意到，我们之前运行它时，Claude是逐行阅读以理解它们是什么。我们可以预先提供所有这些信息。我们还将向Claude提供一些关于如何填写此表格的信息。这对Claude也非常有用。我们可以告诉它，你知道，基本上是人类在填写这份表格。所以，它不会是完美的。人们可能会画一个圈。他们可能会乱涂乱画。他们可能不会在方框里打叉。阅读这份表格时，你可能需要寻找多种类型的标记。

We can also give Claude a little bit of information about how to interpret this or what the purpose or meaning of this form is. And all of this is context that is hopefully really going to help Claude do a better job analyzing the form. So if we run it, everything else is still the same. So we've kept the same user prompt down here. Oh, your scroll is backwards from mine. We have the same user prompt here. Still asking Claude to do the same task, same context.
我们还可以向Claude提供一些关于如何解释这份表格，或者这份表格的用途或意义的信息。所有这些都是上下文，希望能够真正帮助Claude更好地分析这份表格。所以如果我们运行它，其他一切都保持不变。我们在这里保留了相同的用户提示词。哦，你的滚动方向和我的相反。我们这里有相同的用户提示词。仍然要求Claude执行相同的任务，相同的上下文。

And we'll see here that it's spending less time. It's kind of narrating to us a little bit less about what the form is because it already knows what that is. And it's not concerned with kind of bringing us that information back. It's going to give us a whole list of what it found to be checked, what the sketch shows. And here Claude is now becoming much more confident with this additional context that we gave to Claude. Claude now feels it's appropriate to say vehicle B was at fault in this case based on this drawing and based on this sketch.
我们将看到它在这里花费的时间更少。它向我们讲述表格内容的部分也少了，因为它已经知道那是什么。它不关心把这些信息反馈给我们。它会给我们一个完整的列表，列出它发现的已勾选内容，以及示意图显示的内容。现在，有了我们提供给Claude的这些额外上下文，Claude变得更加自信。Claude现在认为，根据这张图和这张示意图，在这种情况下，车辆B有过错是恰当的说法。

So already we're seeing some improvement in the way Claude is analyzing these. I think we could probably all agree if we looked at the drawing and at the list that vehicle B is at fault. So we'd like to see that. So we're going to go back to the slides and talk about a couple of other items that we're not really using in this prompt but can be really helpful to building up your prompt and making it work better.
所以我们已经看到Claude分析这些信息的方式有所改进。我想我们大家都会同意，如果我们查看图纸和清单，车辆B有过错。所以我们很高兴看到这一点。现在我们将回到幻灯片，谈谈我们在这个提示词中没有真正使用的其他几个项目，但它们对于构建和改进提示词非常有帮助。

### 示例（Few-Shot）与对话历史

Christian: Exactly. I think one thing that we really highlight is examples. I think examples or **few-shot** (Few-shot Learning: 在只有少量示例的情况下训练模型，使其能够快速适应新任务的学习范式) is a mechanism that really is powerful in steering Claude. So you can imagine this in quite a non-trivial way as well. So imagine you have scenarios, situations, even in this case concrete accidents that have happened that are tricky for Claude to get right. But you with your human intuition and your human label data is able to actually get to the right conclusion.
Christian: 没错。我认为我们真正强调的一点是示例。我认为示例或**少样本学习**（Few-shot Learning: 在只有少量示例的情况下训练模型，使其能够快速适应新任务的学习范式）是一种在引导Claude方面非常强大的机制。所以你也可以用一种相当非平凡的方式来想象这一点。想象一下，你有一些场景、情况，甚至在这个案例中，发生了一些具体的事故，这些事故对于Claude来说很难正确判断。但你凭借你的人类直觉和人工标记数据，能够得出正确的结论。

Then you can bake that information into the system prompt itself by having clear-cut examples of the data that it's supposed to look at. So you can have visual examples. You can just **Base64 encode** (Base64 Encode: 一种将二进制数据转换为ASCII字符串的编码方式，常用于在文本协议中传输图像等二进制数据) an image and have that as part of the data that you're passing along into the examples and then on top of that you can have the sort of depiction or description rather of how to break that down and understand it.
然后，你可以通过提供明确的数据示例（即它应该查看的数据），将这些信息融入到系统提示词中。你可以有视觉示例。你可以将图像进行**Base64编码**（Base64 Encode: 一种将二进制数据转换为ASCII字符串的编码方式，常用于在文本协议中传输图像等二进制数据），并将其作为你在示例中传递的数据的一部分，然后在此基础上，你可以提供如何分解和理解这些数据的描绘或描述。

This is something we really highlight and emphasize in how you can sort of push the limits of your LLM application is by baking in these examples into system prompt. And this again is sort of the empirical science of prompt engineering that you sort of always want to push the limits of your application and get that feedback loop in where it's going wrong and try to add that into system prompt so that next time when example that sort of mimics that takes place, it's able to actually reference it in its example set.
这是我们非常强调和突出的一点，即如何通过将这些示例融入到系统提示词中来拓展你的LLM应用程序的极限。这再次是提示词工程的经验科学，你总是希望推动应用程序的极限，并建立一个反馈循环，找出它出错的地方，然后尝试将其添加到系统提示词中，以便下次当出现类似示例时，它能够实际在示例集中进行参考。

You can see here as well, this is just a little example of how we do this. Again, really emphasizing the sort of XML structure that we enjoy. It's what it's been fine-tuned on as well. And it works perfectly well for this example. And in our case, we're not doing this just because it's a simple demo, but you can realistically imagine if you were building this for an insurance company, you'd have tens, maybe even hundreds of examples are quite difficult, maybe in the gray, that you'd like to make sure that Claude actually has some basis in to make the verdict next time.
大家在这里也可以看到，这只是我们如何做到这一点的一个小例子。再次强调我们喜欢的XML结构。这也是它经过微调的基础。对于这个例子来说，它运作得非常好。在我们的案例中，我们之所以不这样做，仅仅因为它是一个简单的演示，但你可以实际想象一下，如果你是为一家保险公司构建这个系统，你会有几十个，甚至几百个相当困难、可能处于灰色地带的案例，你希望确保Claude在下次做出裁决时有实际依据。

Another topic we really want to highlight, which we're not doing in this demo, is conversation history. It's in the same vein as examples. We use this to make sure that enough context-rich information is at Claude's disposal when it when when closing on on on your behalf. In our case now this isn't really a user-facing LLM application. It's more something happening in the background. You can imagine for this insurance company they have this automated system some data is generated out of this and then you might have a human in the loop at towards the end.
我们真正想强调的另一个话题是对话历史，虽然我们在这个演示中没有涉及。它与示例的思路相似。我们使用它来确保当Claude代表你进行处理时，有足够丰富上下文的信息可供其使用。在我们的案例中，这并不是一个面向用户的LLM应用程序。它更多的是在后台发生的事情。你可以想象，对于这家保险公司来说，他们有一个自动化系统，从中生成一些数据，然后你可能在最后有一个人工干预的环节。

If you were have to build something much more user-facing where you'd have a long conversation history that would be relevant to bring in, this is a perfect place in the system prompt to include because it enriches the context that Claude works within. In our case we haven't done so but what we do is and the next step is try to make sure we give a concrete reminder of the task at hand.
如果你要构建一个更面向用户的应用，其中包含需要引入的长时间对话历史，那么将其包含在系统提示词中是完美的，因为它丰富了Claude的工作上下文。在我们的案例中我们没有这样做，但我们要做的是下一步，确保我们提供一个具体的任务提醒。

### 任务提醒与防止幻觉

Hannah: So, now we're going to build out the final part of this prompt for Claude, and that's coming back to the reminder of what the immediate task is and giving Claude a reminder about any important guidelines that we want it to follow. Some reasons that we may do this are preventing hallucinations. So we want Claude to not invent details that it's not finding in this prompt, right? Or not finding in the data.
汉娜：现在，我们将为Claude构建提示词的最后一部分，那就是回顾当前任务是什么，并提醒Claude我们希望它遵循的任何重要准则。我们这样做的一些原因是为了防止**幻觉**（Hallucination: 大型语言模型生成不准确、不真实或与输入不符的信息的现象）。所以我们不希望Claude编造它在提示词中没有找到的细节，对吗？或者在数据中没有找到的细节。

If Claude can't tell which form is checked, we don't want Claude to take its best guess or invent the idea that a box might be checked when it's not. If the sketch is unintelligible, the person did a really bad job drawing this drawing and even a human would not be able to figure it out. We want Claude to be able to say that. And so these are some of the things we'll include in this final reminder and kind of wrap up step for Claude. Remind it to do things like answer only if it's very confident. We could even ask it to refer back to what it has seen in the form anytime it's making a factual claim.
如果Claude无法判断哪个表格被选中，我们不希望Claude凭空猜测或编造一个实际上未被选中的方框可能被选中的想法。如果示意图难以理解，绘制者画得非常糟糕，甚至人类也无法弄清楚，我们希望Claude能够说明这一点。因此，这些是我们将在给Claude的最后提醒和总结步骤中包含的一些内容。提醒它只在非常有信心时才回答。我们甚至可以要求它在做出事实性陈述时，随时引用它在表格中看到的内容。

So if it wants to say vehicle B turned right, it should say I know this based on the fact that box two is clearly checked or whatever it might be. We can kind of give Claude some guidelines about that. So if we go back to the console, we can see the next version of the prompt and we're going to keep everything the same here in the system prompt. So, we're not changing any of that background context that we gave to Claude about the form, about how it's going to fill everything out. We're not changing anything else about the context and the role. We're just adding this detailed list of tasks.
因此，如果它想说车辆B右转了，它应该说“我之所以知道这一点，是因为方框二被清楚地勾选了”或者其他类似的话。我们可以给Claude一些关于这方面的指导。所以如果我们回到控制台，我们可以看到下一个版本的提示词，我们将保持系统提示词中的所有内容不变。因此，我们没有改变我们给Claude的关于表格以及如何填写表格的任何背景上下文。我们没有改变关于上下文和角色的任何其他内容。我们只是添加了这个详细的任务列表。

And this is how we want Claude to go about analyzing this. And a really key thing that we found here as we were building this demo and when we were working on the customer example is that the order in which Claude analyzes this information is very important. And this is analogous to way you might think about doing this. If you were a human, you would probably not look at the drawing first and try to understand what was going on, right? It's pretty unclear. It's a bunch of boxes and lines. We don't really know what that drawing is supposed to mean without any additional context.
这就是我们希望Claude分析这一切的方式。我们在构建这个演示和处理客户案例时发现的一个非常关键的事情是，Claude分析这些信息的顺序非常重要。这与你可能思考如何做这件事的方式是类似的。如果你是人类，你可能不会先看图纸并试图理解发生了什么，对吧？它相当不清楚。它只是一堆方框和线条。如果没有额外的上下文，我们真的不知道那张图纸应该意味着什么。

But if we have the form and we can read the form first and understand that we're talking about a car accident and that we're seeing some checkboxes that indicate what vehicles we're doing at certain times, then we know a little bit more about how to understand what might be in the drawing. And so that's the kind of detail that we're going to give Claude here is to say, "Hey, first go look at the form. Look at it very carefully. Make sure you can tell what boxes are checked. Make sure you're not missing anything here. Make a list for yourself of what you see in that. And then move on to the sketch.
但是，如果我们有表格，并且我们可以先阅读表格，理解我们正在谈论的是一起车祸，并且我们看到一些复选框指示了车辆在特定时间做了什么，那么我们就会对如何理解图纸中可能包含的内容有更多的了解。所以这就是我们要给Claude的细节，告诉它：“嘿，首先去查看表格。非常仔细地查看。确保你能分辨出哪些方框被选中了。确保你没有遗漏任何东西。为你自己列出你在其中看到的内容。然后转向示意图。”

So after you've kind of confidently gotten information out of the form and you can say what's factually true, then you can go on and think about what you can gain from that sketch, keeping in mind your understanding of the accident so far. So, whatever you've learned from the form, you're trying to match that up with the sketch. And that's how you're going to arrive at your final assessment of the form. And we'll run it.
所以，当你自信地从表格中获取了信息，并且能够说出哪些是事实真相之后，你就可以继续思考你能从那张示意图中获得什么，同时牢记你目前对事故的理解。因此，你从表格中学到的任何东西，你都要尝试与示意图匹配。这就是你最终对表格做出评估的方式。我们来运行一下。

And here you can see one behavior that this produced for Claude because I told it to very carefully examine the form. It's showing me its work as it does that. So, it's telling me each individual box. Is the box checked? Is it not checked? And so, this is one thing you'll notice as you do prompt engineering. In our previous prompts, we were kind of letting Claude decide how much it wanted to tell us about what it saw on the form here. Because I've told it carefully examine each and every box, it's very carefully examining each and every box. And that might not be what we want in the end. So, that's something we might change.
在这里，你可以看到这为Claude带来的一种行为，因为我告诉它要非常仔细地检查表格。它在执行时向我展示了它的工作。所以，它告诉我每一个单独的方框。方框是否被勾选了？是否没有被勾选？所以，这是你在进行提示词工程时会注意到的一件事。在我们之前的提示词中，我们有点让Claude决定它想告诉我们多少关于它在表格上看到的内容。因为我告诉它仔细检查每一个方框，所以它非常仔细地检查每一个方框。这可能不是我们最终想要的。所以，这可能是我们需要改变的地方。

But it's also going to give me these other things that I asked for in XML tags. So, a nice analysis of the form, the accident summary so far. It's going to give me a sketch analysis, and it's going to continue to say that vehicle B appears to be clearly at fault. In this in this example, it's pretty simple example with more complicated drawings, more less clarity in the forms. This kind of step-by-step thinking for Claude is really impactful in its ability to make a correct assessment here. So I think we'll go back to the slides and Christian's going to talk about a last kind of piece that we might add to this to really make it useful for a real-world task.
但它也会给我其他我用XML标签要求的东西。比如对表格的良好分析，到目前为止的事故摘要。它会给我一份示意图分析，并且会继续说车辆B似乎明显有过错。在这个例子中，它是一个相当简单的例子，而对于更复杂的图纸、更不清晰的表格，这种分步思考的方式对Claude做出正确评估的能力确实影响深远。所以我想我们将回到幻灯片，克里斯蒂安将谈谈我们可能添加到此的最后一部分，以使其真正适用于实际任务。

### 输出格式与预填充响应

Christian: Indeed. Thank you so much. So, as Hannah mentioned, we sort of set the stage in this prompt to make sure that really acting on our behalf in a right manner. And a key step that we also add towards the end of this prompt that I'm going to show you in a second is a simple sort of guidelines or reminder part as well, just strengthening and reinforcing exactly what we want to get out of it. And one important piece is actually output formatting.
Christian: 的确。非常感谢。正如汉娜所说，我们在这个提示词中设定了基础，以确保它能正确地代表我们行事。我稍后将向大家展示，我们还在这个提示词的末尾添加了一个关键步骤，即一个简单的指导方针或提醒部分，只是为了加强和巩固我们想要从中获得什么。其中一个重要部分实际上是**输出格式**（Output Formatting: 模型生成结果的结构和样式）。

You can imagine if you're a data engineer working on this LLM application, all the sort of fancy preamble is great, but at the end of the day, you want your piece of information to be stored in, let's say, your SQL database, wherever you want to store that data. And the rest of it that is necessary for Claude to sort of give its verdict isn't really that necessary for your application. You want the nitty-gritty information for your application.
你可以想象，如果你是一名数据工程师，正在开发这个LLM应用程序，所有那些花哨的开场白都很棒，但最终，你希望你的信息存储在，比如说，你的**SQL数据库**（SQL Database: 使用结构化查询语言来管理和操作关系型数据的数据库），无论你想把数据存储在哪里。而Claude做出判断所需的其余部分，对你的应用程序来说并不是那么必要。你希望得到应用程序所需的具体细节信息。

So if we transition back to the console, you'll see here that we just added a simple importance guidelines part. And again, this is just reinforcing the sort of mechanical behavior that we want out of Claude here. Want to make sure that the summary is clear, concise, and accurate. Want to make sure that nothing is sort of impeding in Claude's assessment apart from the data it's analyzing. And then finally, when it comes to output formatting, in my case here, I'm just going to ask Claude to wrap its final verdict.
所以如果我们回到控制台，你会看到我们只是添加了一个简单的重要指导部分。同样，这只是为了加强我们希望Claude在这里表现出的那种机械行为。我们希望确保摘要清晰、简洁、准确。我们希望确保除了它正在分析的数据之外，没有任何东西会阻碍Claude的评估。最后，当涉及到输出格式时，在我的例子中，我将只要求Claude封装其最终判决。

All other stuff I'm actually going to ignore for my application and just look at what it's actually assessing. And that is I can I can use this if I want to build some sort of analytics tool afterwards as well. Or if I just want a clear-cut determination, this is a way I can do so. So if I just run this here, you'll see it's going through the same sort of process that we've seen before. In this case, it's much more succinct because we've asked to be to summarize its findings in a much more straightforward manner. And then finally towards the end you'll see that it'll wrap my output in these final verdict XML tags.
我的应用程序实际上会忽略所有其他内容，只关注它实际评估的结果。如果我想在之后构建某种分析工具，我可以使用这个。或者如果我只是想要一个明确的判断，这就是我能做到的方式。所以如果我在这里运行它，你会看到它正在经历我们之前看到的相同过程。在这种情况下，它更加简洁，因为我们要求它以更直接的方式总结其发现。然后最终，你会看到它会将我的输出封装在这些最终判决XML标签中。

So you can see that during this demo we've gone from a skiing accident to sort of unconfident insecure outputs from perhaps a car accident in the second version to now a much more strictly formatted confident output that we can actually build an application around and actually help, you know, a real-world car insurance company for example. Finally if we transition back to the slides another key way of shaping Claude's output is actually putting words in Claude's mouth or as we call it **pre-filled responses** (Pre-filled Responses: 在AI模型生成输出之前，预先提供部分文本或结构，以引导模型按照特定格式或内容进行响应)。
所以你可以看到，在这个演示中，我们从一个滑雪事故，到第二版中可能是一起车祸的不自信、不安全的输出，到现在一个更加严格格式化、自信的输出，我们可以围绕它实际构建一个应用程序，并真正帮助，比如，一个真实的汽车保险公司。最后，如果我们回到幻灯片，另一种塑造Claude输出的关键方式实际上是“把话说进Claude嘴里”，或者我们称之为**预填充响应**（Pre-filled Responses: 在AI模型生成输出之前，预先提供部分文本或结构，以引导模型按照特定格式或内容进行响应）。

You could imagine that parsing XML tags is nice and all but maybe you want a structured JSON output to make sure that it's JSON serializable and you can use this in a subsequent call for example. This is quite simple to do. You could just add that Claude needs to begin its output with a certain format. This could be for example a open square bracket or even in this case that we see in front of us this would be an XML tag for itinerary. In our case it could also be that final verdict XML tag.
你可以想象，解析XML标签固然很好，但也许你想要一个结构化的**JSON**（JavaScript Object Notation: 一种轻量级的数据交换格式）输出，以确保它是JSON可序列化的，并且你可以在后续的调用中使用它。这做起来很简单。你只需添加Claude需要以某种格式开始其输出即可。例如，这可以是一个左方括号，或者就像我们眼前看到的这个例子，它会是一个用于行程的XML标签。在我们的案例中，它也可以是那个最终判决XML标签。

And this is just a great way of again shaping how Claude is supposed to respond. Without all the preamble if you don't want that, even though that is also key in shaping his output to make sure that Claude is reasoning through the steps that we wanted. So in our case here, we would just wrap it in the final verdict and then parse it afterwards. But you can use prefill as well.
这又是一种塑造Claude响应方式的好方法。如果你不想要所有那些开场白，即使那些开场白在塑造其输出以确保Claude按照我们希望的步骤进行推理方面也很关键，你也可以不用。所以在这里，我们只需将其封装在最终判决中，然后进行解析。但你也可以使用预填充。

### 扩展思考与总结

Now finally one step that I would like to highlight here as well is that both Claude 3.7 and especially Claude 4 of course is a sort of hybrid reasoning model meaning that there's **extended thinking** (Extended Thinking: 大型语言模型的一种能力，指模型在生成最终答案之前，会进行一系列内部推理或“思考”步骤，通常通过生成中间的思考过程来体现) at your disposal. And this is something we want to highlight because you can use extended thinking as a crutch for your prompt engineering. Basically you can enable this to make sure that Claude actually has time to think. It adds its thinking tags and the scratch pad.
最后，我还想强调一个步骤，那就是Claude 3.7，尤其是Claude 4，都是一种混合推理模型，这意味着你可以利用**扩展思考**（Extended Thinking: 大型语言模型的一种能力，指模型在生成最终答案之前，会进行一系列内部推理或“思考”步骤，通常通过生成中间的思考过程来体现）的功能。我们之所以想强调这一点，是因为你可以将扩展思考作为你提示词工程的辅助工具。基本上，你可以启用这个功能，以确保Claude有时间进行思考。它会添加思考标签和草稿区。

And the beauty of that is you can actually analyze that transcript to understand how Claude is going about that data. So as we mentioned we have these check boxes where it goes through step by step of the scenario that transpired for the accident. And in many ways there you can actually try to help Claude in building this into the system prompt itself. It's not only more token efficient but it's a good way of understanding how these intelligent models that don't have our intuition actually go about the data that we provide them. And because of that, it's quite key in actually trying to break down how your system prompt can get a lot better.
它的妙处在于，你实际上可以分析那个**转录**（Transcript: 语音到文本的转换记录），以了解Claude是如何处理这些数据的。正如我们提到的，我们有这些复选框，它会逐步审查事故发生的情景。在很多方面，你实际上可以尝试帮助Claude将这些内容构建到系统提示词本身。这不仅更节省token，而且是理解这些缺乏我们直觉的智能模型如何处理我们提供的数据的好方法。正因为如此，它在实际分解如何大幅改进系统提示词方面非常关键。

And with that said, I think I'd like to thank all you for coming today. We'll be around as well. So if you have any questions on prompting, please go ahead. I know there's a prompting. You want to learn more about prompting in an hour. We have prompting for agents and right now we have an amazing demo of Claude plays Pokemon. So don't go anywhere for that. And as Christian said, we'll be around all day. So, I know we didn't have time for Q&A in this session, but please come find us if you want to chat. And thank you guys for coming. Thank you so much.
话虽如此，我想感谢大家今天的光临。我们也会一直在。所以如果你有任何关于提示词工程的问题，请尽管提问。我知道有一个提示词环节。如果你想在一个小时内了解更多关于提示词工程的信息。我们有面向代理的提示词工程，现在我们有一个Claude玩宝可梦的精彩演示。所以不要走开。正如克里斯蒂安所说，我们全天都会在这里。所以，我知道这次会议我们没有时间进行问答，但如果你想交流，请来找我们。感谢大家的到来。非常感谢。