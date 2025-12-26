---
area: "tech-engineering"
category: technology
companies_orgs:
- GitHub
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- PostgreSQL
project: []
series: ''
source: https://www.youtube.com/watch?v=Q5IVm_CxN2w
speaker: AI Engineer
status: evergreen
summary: 本视频展示了如何利用AI编程代理自动检测并修复应用程序基础设施中的问题。通过监控CPU、内存利用率、请求错误率和响应时间等指标，系统能识别内存泄漏和慢查询等常见故障。核心理念是构建一套耐久执行的工作流，从问题检测到自动生成并提交修复代码的拉取请求。视频还介绍了开源AI代理Open
  Code及其无头服务器架构，以及如何将其部署在Railway平台上，实现基础设施的智能运维。
tags:
- automated-fix
- code
- coding-agent
- durable-execution
- self
title: 利用AI编程代理实现基础设施的自我修复
---
### 基础设施应能自我修复

您的应用程序基础设施应该能够自我修复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">your app's infrastructure should fix itself.</p>
</details>

现在，我正在**Railway**（一个部署平台）的仪表盘上，部署了许多服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, right now I'm on the Rayway dashboard and I have a bunch of services that are deployed and all of these services have one thing in common.</p>
</details>

所有这些服务都有一个共同点：它们都有错误和问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They all have bugs and problems.</p>
</details>

例如，这个服务存在**内存泄漏**（Memory Leak: 程序未能释放已不再需要的内存，导致内存占用持续增长）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, for example, this service has a memory leak.</p>
</details>

如果我点击它，进入指标页面，我们可以看到内存使用量持续快速增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I click on it, go to metrics, we can just see memoryization keeps growing high and very quickly.</p>
</details>

这正是内存泄漏的迹象，而且我相当确定这个服务最终会崩溃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is just a sign of a memory leak and pretty sure the service would eventually crash.</p>
</details>

如果我查看请求数量，我们有大量的**500s**（HTTP 500 Internal Server Error: 服务器内部错误，表示服务器在执行请求时遇到了意外情况）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I look over at the amount of requests, we have a high number of 500s.</p>
</details>

这意味着服务器未能响应，我们的请求错误率高达94%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the server is failing to respond. We have a high request error rate of 94%.</p>
</details>

而且，服务的响应时间也极高，达到数秒，这很不理想。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we also have an extremely high response time of like multiple seconds uh for like the service to respond, which is not ideal.</p>
</details>

如果这是一个在生产环境中运行的服务，那一切都会陷入混乱，您会收到警报，然后不得不尽快恢复服务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like if this was a service running in production, everything would be on fire. You'd be getting paged and you just try to bring back the service up back quickly.</p>
</details>

### 识别并解决不明显的系统问题

但问题是，并非所有问题都如此明显。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But the thing is not all problems are this obvious.</p>
</details>

例如，这个服务所做的只是查询一个**PostgreSQL**（一种开源的关系型数据库管理系统）数据库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, this service all it does just queries a postcrist database.</p>
</details>

如果我们查看指标，会发现**CPU利用率**（CPU Utilization: 中央处理器被使用的程度）看起来正常，内存使用量也正常。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if we go to metrics, we'll just see that well CPU utilization seems fine. Memory usage is also fine.</p>
</details>

当然，它有些波动，但也没什么大不了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure, it's a bit spiky, but okay, whatever.</p>
</details>

我们有一些失败，但不足以引起警报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have some fails, but okay, nothing too alarming.</p>
</details>

请求错误率有点高，这也应该促使我们进行调查，但响应时间却极高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">request error rate is somewhat high. So that also should make us kind of like want to investigate, but the response time is extremely high.</p>
</details>

这是因为服务执行的查询非常慢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing is this is because the service makes queries that are super slow.</p>
</details>

如果您是尝试使用此体验的最终用户，您将遭受痛苦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the thing is if you're an end user that's trying to use this experience, you would just suffer.</p>
</details>

您可能需要30秒才能加载一个页面，那将是一场噩梦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You would need like 30 seconds for like a page to load, which would be a nightmare.</p>
</details>

所以，当您将应用程序部署到生产环境时，一些错误或问题可能会进入生产环境，这种情况时有发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the thing is when you deploy your app to production maybe some you know bugs or issues make their way to production things happen.</p>
</details>

处理这些问题的典型方法是设置一堆阈值，当这些阈值达到时，例如CPU或内存使用率，或者请求错误率不应超过某个量时，您会收到警报。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and kind of like the typical way of dealing with these things is maybe you set up a bunch of thresholds and when these thresholds are met for let's say CPU or memoryization maybe uh you want to have a threshold for the request error rate it shouldn't exceed a certain amount well what will happen is You're going to get alerted and you'll be aware that there is an issue.</p>
</details>

您会知道存在问题，但仍然需要自己进行调查。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">but you still have to do the investigation yourself.</p>
</details>

您必须深入挖掘日志、指标和跟踪数据，试图在脑海中描绘出问题全貌，并将碎片拼凑起来，以便发布修复程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You have to dig through logs, metrics, and traces to try to paint a picture in your head and try to piece things together so that you can ship a fix.</p>
</details>

### 引入编程代理实现自动化修复

现在，我提议的是，您应该有一个**编程代理**（Coding Agent: 能够理解、生成和执行代码以解决问题的AI代理），它监控您的项目和应用程序基础设施的状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, what I'm proposing is you should have a coding agent that monitors the state of your project and your application's infrastructure.</p>
</details>

如果检测到任何问题，也就是说，我们定义的任何阈值被触发，我们就应该直接发布修复程序，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if any issue is detected, so you know any of the thresholds we define are met, we should just have a fix shipped, right?</p>
</details>

所以，与其收到警报然后进行调查，您只需审查一个**拉取请求**（Pull Request: 在软件开发中，开发者向代码仓库提交更改并请求合并到主分支的一种机制），然后说：“嗯，看起来不错。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like instead of, you know, getting the alert and investigating, you just review a pull request and you're like, uh, looks good to me.</p>
</details>

您发布它，然后一切都好，危机得以避免。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You ship it and then everything is good and crisis averted.</p>
</details>

今天，我将向您展示一个演示，它描绘了如何实现这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today I'm going to show you what I have in terms of demo that kind of paints a picture of how this could be achieved.</p>
</details>

### 自动化修复的端到端工作流设计

从高层次上讲，我希望有一系列**工作流**（Workflow: 一系列按特定顺序执行的任务或步骤），它们将启动，帮助我从**Railway**（我的部署提供商）中检测到的问题，到在我的**GitHub repo**（GitHub Repository: GitHub上的代码仓库，用于存储和管理项目代码）中打开一个拉取请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at a high level I want to have a series of workflows that will kick in that will help me go from issue detected in on railway my deployment provider to a pull request being open in my GitHub repo.</p>
</details>

这就是我设想的流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is what I have in mind.</p>
</details>

我希望的第一个工作流是按计划运行的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the first workflow that I want to have is a workflow that runs on a schedule.</p>
</details>

例如，它每10分钟、15分钟或30分钟运行一次。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's say it runs every 10 minutes, 15 minutes, 30 minutes.</p>
</details>

这个工作流将做以下几件事：首先，它应该获取应用程序的架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what this workflow will do is one, it should fetch the application's architecture.</p>
</details>

我们应该了解部署了哪些服务，例如我的项目中正在运行哪些前端、后端、定时任务和队列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We should have an understanding of what services are deployed, which you know like frontends, backends, crons, cues are live in my project.</p>
</details>

然后，我希望获取每个服务的资源指标，即CPU和内存利用率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I then want to fetch each services resource metrics, so CPU and memory utilization.</p>
</details>

我还希望获取每个服务的HTTP指标，我想查看请求错误率，以及因500或400错误导致的失败请求数量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I also want to fetch each services HTTP metrics. I want to see the request error rate, the number of failed requests for, you know, 500 400 errors.</p>
</details>

完成这些后，我将查看哪些服务超出了哪些阈值。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once that's done, I will want to then see which services have exceeded which thresholds.</p>
</details>

然后，我只想返回受影响服务的列表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I just want to return a list of the affected services.</p>
</details>

这基本上就是目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this would be essentially the goal.</p>
</details>

现在您可能会想，为什么不把它做成一个基于警报的系统呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now you might be wondering, well, why not make this an alertbased system?</p>
</details>

也许我们为警报配置**Web hooks**（Webhook: 一种HTTP回调，当特定事件发生时，系统会向预设的URL发送数据），然后这会启动这个工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So maybe we configure something like web hooks for alerts and then that would kick off uh essentially this workflow instead.</p>
</details>

但我认为，能够分析一段时间内的切片可能更好，而不是仅仅达到一个阈值，因为那样可能会非常嘈杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would argue that it's probably better to be able to analyze a slice of time rather than just having a threshold being met because it can get pretty noisy.</p>
</details>

想象一下，如果您的工作负载有波动，并且CPU资源利用率达到了80%，但一切仍然正常。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like imagine you have a spiky workload uh and you know you reach the 80% resource utilization for like your CPU but things are still fine.</p>
</details>

在我看来，这足以进行调查，但从更宏观的角度和所有细节来看，这可能并不意味着存在问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that's not like in my mind this is enough to be investigate but it might not like it might mean that there just aren't issues when we try to look at like the bigger picture and all the details.</p>
</details>

### 收集更多上下文并制定详细计划

现在，一旦我们有了这个受影响服务的列表，我们基本上希望为它们获取更多的上下文信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now once we have this list of impact that is impact services we essentially want to pull in even more context for them.</p>
</details>

所以，从高层次上讲，我们想查看项目健康状况，所有服务是否都按预期运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like at a high level we want to see project health all the services is everything operating as expected.</p>
</details>

哦，我们有这个可疑的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Oh we have this thing that we're suspicious about.</p>
</details>

让我们实际上为该服务获取所有额外的上下文信息，因为再次想象一下，您可能有很高的资源利用率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's actually pull all of you know additional context for the service because imagine again you have like high resource utilization.</p>
</details>

也许您只是成功了，使用量很高。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe you're just successful. You have high usage.</p>
</details>

但是当您拉取日志时，会发现一切看起来都很好，没有任何错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but then when you pull the logs it's like oh everything seems fine. there aren't any errors.</p>
</details>

那么，您就没问题了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, you're good.</p>
</details>

您可以想象，我们甚至可以获取更多的上下文信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can imagine that we can even pull even more context.</p>
</details>

例如，我们扫描代码仓库中的代码，并根据此推断出代码仓库所依赖的上游提供商。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like imagine maybe we scan the code in the repo and based on that we infer the upstream providers that the repo relies on.</p>
</details>

然后我们可以自动检查这些服务的状态页面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then we can automatically check the status pages of these services.</p>
</details>

想象一下，如果一个支付处理器宕机了，这就是您如何知道的，然后编程代理也许能够告诉您：“嘿，您应该等待这个问题解决。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine like a payment processor goes down. Well, that's kind of how you can know and then the coding agent will be able to maybe tell you like, hey, you should just like wait out this issue.</p>
</details>

一旦我们拥有所有这些信息，我们就可以编写一个详细的计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And once we have all this information, we can just write a detail plan.</p>
</details>

例如，我们可以查看：“哦，我们有大量的500请求。我们看到内存资源利用率非常高。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like we can look at, oh, we have a high number of 500 requests. We see that we have very high resource utilization for memory.</p>
</details>

我们还看到有错误明确指出某个特定的端点正在失败。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we see that we have you know um just errors specifying that a specific endpoint is failing.</p>
</details>

这些信息足以让我们编写一个详细的计划，说明：“这是我的应用程序架构。这些是受影响的服务。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, this is enough information that we can write a detailed plan of hey this is my application's architecture. These are the affected services.</p>
</details>

然后我们将这个计划交给一个代理，代理将遵循以下过程：“让我克隆这个仓库。我将根据您给我的计划创建一个待办事项列表。我将实施所有修复，然后创建一个拉取请求。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We just then give this plan to an agent and then the agent will just follow the process of hey let me clone this repo. I'll just create a to-do list based on the plan you gave me. I'll implement all the fixes and I'll just create a pull request.</p>
</details>

这就是我们如何从检测到问题到打开拉取请求的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this is kind of how we go from issue detected to an open pull request.</p>
</details>

### 持久化执行工作流的优势

那么，让我们实际看看这个是如何运作的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's actually see this in practice.</p>
</details>

因为我们有工作流的概念，我想做的是实际使用所谓的**持久化执行**（Durable Execution: 一种编程范式，允许长时间运行的、有状态的工作流在故障后从中断处恢复，而无需从头开始）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So because we have the idea of workflows, what I want to do is actually use what is known as durable execution.</p>
</details>

持久化工作流的概念已经存在一段时间了，它确实是我最喜欢的一种抽象，因为它可以帮助您简化复杂的逻辑，同时使其更可靠。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the idea of durable workflows has been around for a while and it's really one of my favorite abstractions because it can help you simplify complex logic while making it more reliable.</p>
</details>

例如，这里我们有这个工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for example here we have this workflow.</p>
</details>

这实际上是**Ingest**（一个用于调试工作流的UI），但市面上有很多解决方案做同样的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this actually is ingest but there are lots of solutions out there that pretty much do the same thing.</p>
</details>

我们有这个名为“处理视频上传”的函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we have this function that you know called process video upload.</p>
</details>

它监听“视频已上传”事件，我们基本上想做三件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It listens on an event of video uploaded and we essentially want to do three things.</p>
</details>

我们首先要生成一个转录稿，通过**API调用**（API Call: 应用程序编程接口调用，指程序通过API向外部服务发送请求以获取数据或执行操作）第三方API来完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We first want to generate a transcript and we do this by making an API call to a third party API.</p>
</details>

一旦我们获得了转录稿，我们想通过向**LLM提供商**（LLM Provider: 提供大型语言模型服务的公司或平台）发送请求来生成摘要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Once we get that transcript, we want to generate a summary by also making a request to an LLM provider.</p>
</details>

一旦我们有了转录稿和摘要，我们想将它们存储在数据库中。

<details>
<summary>View/Hide Original English
</summary>
<p class="english-text">And once we have the transcript and the summary, we want to store them in the database.</p>
</details>

问题是，所有这些步骤都不能100%保证成功，它们容易失败。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The thing is all of these steps, they are not 100% guaranteed to work. Uh they are prone to failure.</p>
</details>

这种模式的巧妙之处在于，默认情况下，这些步骤会自动重试，您甚至无需考虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what's neat about this pattern is by default, these steps will be automatically retried. You don't even have to think about it.</p>
</details>

但是，如果您想修改此行为，例如您希望重试按特定计划进行，比如指数退避，或者您想定义在失败情况下应该发生的另一件事，您都可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you let's say want to modify this behavior, maybe you want the retry to happen uh like on a certain schedule like you know exponential back off uh maybe you want to define another thing that should happen in the case of failure you'll be able to do it.</p>
</details>

但巧妙之处在于，每个步骤成功后，结果都会被缓存。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But what's neat is each step when it succeeds uh the result is cached.</p>
</details>

因此，如果例如我们能够正确转录视频，正确总结转录稿，但未能写入数据库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if for example we are able to transcribe the video correctly, we summarize the transcript correctly, but we failed to write to the database.</p>
</details>

如果我们重试这个工作流，我们只会从上次中断的地方继续。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we were to retry this workflow, we just continue where we left off.</p>
</details>

我们不会重复任何工作，这很棒，因为它更快，而且更具成本效益。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we don't we won't really repeat any work, which is one awesome because it's faster, but also it's more cost effective.</p>
</details>

所以从高层次上讲，这就是我代码中将依赖的东西，因为我将向**Railway API**发出API调用，以便获取项目架构、所有资源指标以及HTTP指标等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So at a high level, this is the thing that I'll be relying on in my code because I'll be making API calls to the railway API to be able to fetch the project architecture, all the resource metrics um as well as you know the HTTP metrics and whatnot.</p>
</details>

所以，是的，这是我们需要讨论的第一件事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah, uh this is kind of like the first thing that um we need to talk about.</p>
</details>

### Open Code：开源AI编程代理

第二件事是编程代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second thing is the coding agent.</p>
</details>

对于编程代理，我将使用**Open Code**（一个为终端构建的开源AI代理）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for the coding agent, I'll be using Open Code. Open code is an AI agent that's built for the terminal.</p>
</details>

您可以将其视为**Cloud Code**（Google Cloud提供的开发工具）的替代品，但主要区别在于Open Code是完全开源的，您可以选择任何您喜欢的大语言模型提供商或模型，这非常棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can think of it as an alternative to something like cloud code, but the main difference is open code is fully open source and you can choose any LLM provider or uh you know model that you like, which is pretty nice.</p>
</details>

它有一个漂亮的**终端**（Terminal: 计算机用户界面，允许用户通过命令行与操作系统交互）UI，但老实说，这个项目最酷的地方在于它的架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh you have this nice terminal UI, but honestly what's so cool about the project is how it's architected.</p>
</details>

如果您查看他们的文档，他们实际上有一个服务器实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you go to their docs, they actually have a server implementation.</p>
</details>

您可以运行一个**无头服务器**（Headless Server: 没有图形用户界面，通过命令行或API进行操作的服务器），它暴露一个API供您与代理进行交互。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">you can have a a a headless server that runs that exposes an API for you to essentially interact with an agent.</p>
</details>

它的工作方式是，当您运行`open code`命令（这是在终端中启动代理的命令）时，它不仅仅运行一个应用程序。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the way it works is when you run the command open code, which is what starts up the agent in your terminal, it doesn't just run a single app.</p>
</details>

它实际上启动了一个终端UI和一个服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It actually starts a terminal UI and a server.</p>
</details>

因为这里的终端UI是客户端，我们基本上可以带上自己的客户端与服务器通信，这很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And because the terminal UI here is the client, we can essentially bring our own client and talk to the server, which is awesome.</p>
</details>

因为现在我们可以在服务器上运行Open Code，在这种情况下是在**Railway**上，我们可以让这个服务器拥有代理所需的所有工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh because now we can run open code on a server in this case would be on railway and we can just have this server have all the tools that the agent would need.</p>
</details>

所以我们会安装所有必要的工具，配置Git，然后代理就能够打开拉取请求，遍历文件系统并完成所有操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we'd install all of the necessary you know tools we can configure git and then the agent will be able to open pull requests and you know go through the file system and do everything.</p>
</details>

让我向您展示在**Railway**上部署它有多么容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let me show you what how easy it is to essentially have this deployed on right away.</p>
</details>

如果您查看代码，现在这是我的项目，名为`railway-autofix`，我知道这个名字很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you go to the code uh here right now this is my project it's called railway autofix I know great name uh I have essentially two directories one is for my API the other one is for open code.</p>
</details>

我基本上有两个目录，一个用于我的API，另一个用于Open Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have essentially two directories one is for my API the other one is for open code.</p>
</details>

Open Code实际上我们只有一个使用**Bun**（一个快速的JavaScript运行时）运行的服务器，我们所做的只是调用一个名为`create open code server`的函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and open code really we just have a single server running using bun and all we're doing is we're just calling a function uh that is called create open code server.</p>
</details>

如果我在这里停止它，您可以看到它在端口4000 9496上运行，这几乎就是我们所需的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so if I actually stop this here you can see it runs on port 4000 9496 and this is pretty much all we need.</p>
</details>

我有一个**Docker文件**（Docker File: 包含构建Docker镜像所需的所有指令的文本文件），在这个Docker文件中，我们基本上定义了那个环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and I have a docker file and in this docker file we're essentially defining that environment.</p>
</details>

所以，我们安装了一堆工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we're installing a bunch of tools.</p>
</details>

您可以看到我们安装了**curl**、**jq**、**bash**（都是命令行工具）以及所有其他工具，甚至Git。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see we're installing curl, jq, bash, all the other tools, even git.</p>
</details>

我们正在安装**GitHub CLI**（GitHub Command Line Interface: GitHub的命令行界面工具），它将允许我们针对给定的仓库打开拉取请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, we're installing the GitHub CLI, which is what will allow us to open pull requests against a given repo.</p>
</details>

然后我们在环境中安装Open Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're then installing open code in the environment.</p>
</details>

我们配置Git，最后，我们只是暴露端口并验证GitHub CLI，这非常巧妙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're configuring git and at the end, we're just exposing the port and we're just authenticating the GitHub CLI, which is pretty neat.</p>
</details>

顺便说一句，代码链接会在下方提供。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, by the way, the code will be linked somewhere down below.</p>
</details>

但Open Code就这些了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But that's really it for open code.</p>
</details>

当涉及到实际的API时，让我实际运行它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And when it comes to the actual API, let me actually run it.</p>
</details>

现在，这是正在运行的Open Code服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now the this is the open code server that's running.</p>
</details>

如果我到这里，我的实际API正在**localhost**（本地主机：指当前正在运行程序的计算机）3000端口上运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And if I go here, I have my actual API running on localhost 3000.</p>
</details>

我有一个由**Ingest**（一个用于调试工作流的UI）提供的UI，它对于调试非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I have a UI that is provided by ingest, which is very useful for debugging.</p>
</details>

所以如果我到这里，然后进入函数，基本上这里的每个函数都是一个工作流，它有一堆步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I go here and I go to functions, essentially each function here is a workflow and it has a bunch of steps.</p>
</details>

### 自动化修复流程演示

让我们实际尝试运行它，看看会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's actually try to run it to see what happens.</p>
</details>

在生产环境中，当这个“监控项目健康”工作流上线时，它应该按计划运行，如果检测到问题，我们将调用“拉取服务上下文”函数，然后“拉取服务上下文”将调用生成修复的工作流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um now in production when this is live this monitor project health workflow should run on a schedule and if an issue is detected we will call the pool service context and then pull service context will call the workflow for generating a fix.</p>
</details>

所以如果我们实际启动它，事情的流程就会这样发生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if we actually just kick things off this is how the flow of things will happen.</p>
</details>

现在我运行了这个函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I actually have now I have this function run.</p>
</details>

我们调用了“监控项目健康”，然后调用了“拉取服务上下文”，现在我们实际上正在调用“生成修复”，因为我们检测到了一个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We called moderate project health. Then we called pull service context and now we're actually calling generate fix because we detected an issue.</p>
</details>

我们只是将**Railway**特有的变量设置为**环境变量**（Environment Variables: 操作系统中存储配置信息和系统路径等数据的变量）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and we're just setting um like the railway specific variables as environment variables.</p>
</details>

所有这些变量实际上在**Railway**上都是可用的，它们会自动设置，这非常巧妙。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And all of these are actually available uh on railway. They're just set automatically which is pretty neat.</p>
</details>

所以如果我实际进入“监控项目健康”，您会看到我们有一堆步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I actually go to monitor project health you'll see we have a bunch of steps.</p>
</details>

第一个是获取项目架构，这个步骤我们可以实际看到它的输出。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the first one is getting the project architecture and this step right here this is we can actually see its output.</p>
</details>

所以我们可以看到我的项目中所有的数据库，我只有一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can see all of the databases that I have in my project. I just have one.</p>
</details>

我们还可以看到所有服务的列表以及它们的配置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we can see also a list of all the services as well as their configuration.</p>
</details>

我们可以看到它们的仓库在哪里，现在我们对应用程序的基础设施有了一个高层次的概览。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can see which like where's the repo for them and we just now have a highle overview of our applications infrastructure.</p>
</details>

我们还看到那里有任何类型的卷，这很酷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we also see that we have any kind of like volumes that are there which is cool.</p>
</details>

然后我们有一系列实际并行运行的步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have a series of steps that are actually running in parallel.</p>
</details>

所以，你知道，事情是高效的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like you know things are efficient.</p>
</details>

我们正在获取数据库资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we're getting the database resources.</p>
</details>

我们可以看到平均最大CPU是多少？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We can see on average well what's the max CPU?</p>
</details>

大约是0.9 CPU。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and it's like 0.9 CPU.</p>
</details>

好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay.</p>
</details>

内存也是一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Same thing for memory.</p>
</details>

我们实际上有一个摘要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we actually have a summary.</p>
</details>

这个摘要本质上是我们格式化这些结果，以便我们可以将其传递给编程代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this summary essentially is us formatting these results so that we can then pass it to the coding agent.</p>
</details>

所以您可以看到CPU平均使用率为0.93 vCPU，这是最大值，以及内存使用量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see CPU usage average 0.93 vcpu and you know this is the max and memory usage as well.</p>
</details>

现在这实际上很高，我们将能够理解这一点，因为它显示内存使用量是31.96 GB，而最大值是32 GB。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this is actually high uh and we'll be able to kind of understand that because it's like oh memory usage here is 31.96 GB out of a max which is 32 gigs.</p>
</details>

然后我们获取更多的资源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and then we just pull even more um like resources.</p>
</details>

所以，因为我们有多个服务，我们将为每个服务调用每个步骤，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like because we have multiple services we will call each step for it. Right?</p>
</details>

例如，我们将为我们部署的三个服务中的每一个拉取HTTP指标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like we will pull the HTTP metrics for each of the three services that we have deployed for example.</p>
</details>

但对于这个HTTP指标，我们可以看到400和500错误的错误率百分比。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But also for this one for the HTTP metrics we can see the error rate percentage for 400s for 500s.</p>
</details>

我们看到延迟，我们只是有一个状态计数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We see like the latency um and we just have like a status count.</p>
</details>

所以我们也可以有一个摘要，然后我们可以说：“嘿，这是请求错误率。这些是延迟。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can also have a summary and then we can say hey these this is the rate of um like request error rates. This these are the latencies.</p>
</details>

这样，当我们在工作流结束时，我进入运行，再次到这里，最后我们将把所有这些信息以良好格式传递给“拉取服务上下文”函数。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this way when we actually at the end of like this workflow so I go to runs go here again towards the end we will actually give this uh pull service context function just all of this information in a nicely formatted way.</p>
</details>

所以如果我实际现在进入这个函数运行，我们将在这里看到我们正在获取所有受影响服务的**HTTP日志**、**构建日志**和**部署日志**（日志类型：分别记录HTTP请求、软件构建过程和部署过程中的事件）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if I actually go now to this function run, we will see here that we're fetching the HTTP logs, the build logs, the deployment logs for like all the services that are affected.</p>
</details>

我们可以在这里看到，这是函数负载。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can see here like this is the function payload.</p>
</details>

所以这是我们从另一个函数传递过来的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so this is the stuff that we passed from the other function.</p>
</details>

我们可以看到我们有所有这些信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we can see we just have all this info.</p>
</details>

我们也有一个架构摘要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We also have an architecture summary.</p>
</details>

所以这实际上我们可以展开它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this actually we can expand this.</p>
</details>

架构摘要只是一个格式良好的文本，说明了项目架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the architecture summary is just a nicely formatted uh text saying like this is the project architecture.</p>
</details>

我们有三个服务，在生产环境中运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have three services we are running in the production environment.</p>
</details>

我们有一个数据库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have one database.</p>
</details>

我们有所有这些卷，我们有所有这些信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We have all these volumes and we just have all of this information.</p>
</details>

它只是因为在一行中所以更难阅读，但对于编程代理，我们会以**Markdown**格式将其提供给它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's just harder to read cuz like in one line but for the um coding agent we'll just give it to it as like markdown.</p>
</details>

现在我们有了这些，再次进入运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now that we have that go to runs again.</p>
</details>

现在我们有了这些，我们将调用另一个工作流，即“生成修复”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now that we have that, we are just going to make a call to another workflow which is generate fix.</p>
</details>

对于这个工作流，它所做的是：首先，它会用AI进行分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And for this one, what it does is one, it will analyze with AI.</p>
</details>

所以这是实际的输出，就输入而言，它有点大，无法在这里渲染。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the actual output in terms of like the input. It's a bit large to render here.</p>
</details>

但我们用AI分析它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but we analyze it with AI.</p>
</details>

所以您可以想象，我们给一个**大型语言模型**（Large Language Model: 具有大量参数的深度学习模型，能够理解、生成和处理人类语言）说：“嘿，这是我的项目架构。这是数据。这是事情的运行情况。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like you can imagine we give a large language model saying like hey this is my project architecture. This is the data. This is how things are performing.</p>
</details>

然后我们获取所有这些信息，现在我们实际制定一个计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we take all of this information and now we actually come up with a plan.</p>
</details>

所以您可以在这里看到调试步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can see here debugging steps.</p>
</details>

我们希望在相同的负载下在本地重现问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to see reproduce locally with the same load.</p>
</details>

也许我们想运行它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe we want to run it.</p>
</details>

我们想看看如果代理说：“哦，我遇到了一个错误”，会发生什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We want to see what will happen if we see that the agent is like oh I ran into an error.</p>
</details>

然后它会修复它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then it's going to fix it.</p>
</details>

然后我们有建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have like recommendations.</p>
</details>

所以这就是我们将传递给我们的编程代理的计划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like this is the plan that we'll then just pass to our coding agent.</p>
</details>

然后我们有一个创建**会话**（Session: 在这里指编程代理与特定任务或项目进行交互的独立工作空间）的步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we have a step to create a session.</p>
</details>

在编程代理上，您可以想象每个会话都是它自己的聊天。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So on the coding agent you can imagine each session being its own chat.</p>
</details>

所以这将运行，想象您有多个仓库，每个仓库都会有自己的会话。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this will run like imagine you have multiple repos each repo will have its own session.</p>
</details>

编程代理将工作，然后最后，如果一切按预期进行，它应该会打开一个拉取请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The coding agent will work and then at the end it should you know if as expected it should open a pull request.</p>
</details>

所以，是的，差不多就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah that's pretty much it.</p>
</details>

这就是它的工作原理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is how it works.</p>
</details>

现在，如果一切按预期进行，我们应该在项目上看到一个拉取请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now if everything works as expected we should see a pull request on the project.</p>
</details>

瞧，我们有一个已打开的拉取请求，其中包含我们所有的更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And here we go. We have a pull request that is open with all of our changes.</p>
</details>

如果我们进入对话，我们实际上可以看到所有更改的摘要、分析摘要、根本原因以及修复了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we go to the conversation, we actually be able to see that we have a summary of all the changes, uh, an analysis summary, the root causes, what was fixed.</p>
</details>

所以，我们应该能够审查这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we should be able to just review this.</p>
</details>

如果一切看起来都很好，我们就合并，然后就可以开始了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If everything looks good, we merge and we're good to go.</p>
</details>

就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's it.</p>
</details>

我希望您喜欢这次演讲，就像我喜欢制作它一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I hope you enjoyed this talk as much as I enjoyed making it.</p>
</details>

如果您有任何问题，请随时在X或Twitter上联系我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have any questions, feel free to reach out to me on X or Twitter.</p>
</details>

我大部分时间都在那里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is where I mostly hang out.</p>
</details>

此外，这个项目的仓库链接也会在下方提供。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Also, the repo for this project will be available somewhere down below.</p>
</details>

所以，请务必查看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, make sure to check it out.</p>
</details>

感谢您的观看，我们下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And with that, thank you so much for watching and I'll see you in the next</p>
</details>