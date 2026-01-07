---
author: AI Engineer
date: '2026-01-06'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=kmV-qg4uoNI
speaker: AI Engineer
tags:
  - workflow-orchestration
  - durable-agent
  - resumable-stream
  - human-in-loop-process
  - serverless-architecture
title: 使用 Workflow DevKit 和 AI SDK 构建持久化智能体
summary: 本次访谈深入探讨了如何利用 Vercel 的 Workflow DevKit 和 AI SDK 来构建具有高可靠性、可观测性和持久性的 AI 智能体。演讲者详细介绍了工作流模式如何简化生产部署中的复杂性，如状态管理、错误重试和可恢复流。通过实际代码演示，他展示了如何将现有编码智能体转换为支持工作流的智能体，并介绍了休眠（sleep）、人机协作（human-in-the-loop）等高级功能，以及部署、版本控制和可观测性等方面的考虑。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Vercel
products_models:
  - Workflow DevKit
  - AI SDK
media_books: []
status: evergreen
---
### 欢迎与 Workflow DevKit 简介

**主持人**: 谢谢大家的到来。大家好。大家好。

<details>
<summary>Original English</summary>

**主持人**: Thank you all for coming. Hello. Hello.

</details>

**观众**: 收到。

<details>
<summary>Original English</summary>

**观众**: Got you.

</details>

**Peter Wielander**: 呃，我不知道你们怎么样，但是呢，我的智能体，我喜欢专注于它的能力和功能，而不喜欢考虑所有那些额外的精力，就是如何将一个在本地运行良好的东西投入生产。而对于这一点，**工作流模式**非常有用。这就是我们开发 **Workflow DevKit** 的原因，也就是我们今天将要讨论的内容。如果你们在这里，大概也遇到过类似的问题。今天，我们将把一个智能体，一个编码智能体，在整个会话中变成一个支持工作流的编码智能体。

<details>
<summary>Original English</summary>

**Peter Wielander**: Uh, I don't know about you, but um, my ride agents, I like focusing on the capabilities and the features, and I like not thinking about um, all of the extra effort that goes into getting something that works locally into production. And something that's very useful for that is uh, a **workflow pattern**. And that's why we developed the **Workflow DevKit** which is what we're talking about today. Presumably if you're here you've had similar issues. Um and today uh we are going to um turn a agent uh coding agent um into a workflow supported coding agent throughout this session. So

</details>

**Peter Wielander**: 这张幻灯片。我们有一个开源的例子，已经准备好了。它在 **vercel/examples** 仓库上。所以你可以克隆它，查看 **VIP 编码平台应用**。我们今天将使用这个应用进行演示。完成之后，我们将获得内置的一流可观测性，以及持久性和可靠性。我们还会得到很多额外的功能，比如可恢复性。**Draft Kit** 让添加人机协作工作流和类似功能变得非常容易。

<details>
<summary>Original English</summary>

**Peter Wielander**: this slide. So we um have a open- source example um ready to go. Uh this is on the **versel/examples** repository. Uh so you can clone that and check out the **VIP coding platform app** insight. Uh we're going to be using this app um for today's demo. Um and after we're done we get first class observability built in and also durability reliability. uh we get a lot of extra features like resumability um and draft kit makes it very easy to add human in loop workflows and similar uh things.

</details>

### 传统智能体循环与工作流模式

**Peter Wielander**: 所以，如果你考虑我们之前都见过的通用智能体循环，我们主要是在另一个 **LLM** 之间来回调用，以及我们的工具调用和后端代码，对吧？这会包括 **MCP** 服务器、人工审批以及各种异步任务。通常的做法是连接一些队列和数据库，特别是如果你正在运行长时间运行的智能体，它们可能运行数小时，并且你希望进行扩展，例如在无服务器环境中运行，那么你需要在中间设置某种可靠性层，这通常由队列来填充。然后你还需要添加大量的错误处理和重试代码，你需要存储人们发送的所有消息以及中间状态，而且你可能还需要在中间添加某种可观测性层。所有这些事情，我们今天都将只使用一个库来完成，那就是 **Workflow Development Kit**。它是开源的，可以与你的任何 **TypeScript** 前端或后端一起运行，也可以在任何云上运行。我们今天将部署到 **Vercel**，但这也可以很容易地运行在你的任何云堆栈、**Firebase** 或任何自定义堆栈上。

<details>
<summary>Original English</summary>

**Peter Wielander**: So if you think about our uh general agent loop um that we've all seen before, we mostly have calls back and forth from another **LAM** um to our to calls and our backend uh code, right? Which would include **MCP** servers, human approval, any kind of async tasks. And uh the usual way to go about this is to uh wire up some cues um and a database especially if you are doing longunning agents right that might run for hours um and you want to scale and you're running on serverless for example uh you want something some kind of reliability layout in between which usually is filled by cues um and then you'll also need to add a lot of error and retry code you'll need to store all the messages that people are sending and also between states and you probably also need to add some kind of observability layer in between. All of those things we are going to do today uh using only a single library which is the **workflow development kit**. Um it's open source um and it runs with any of your **TypeScript** um front ends or backends and can also run on any cloud. Uh we're going to be deploying to **Brazil** today, but this could just as easily run or any of your cloud stacks um orbase or any of your custom stacks.

</details>

**Peter Wielander**: 呃，好的，这里有多少人听说过工作流模式或以前使用过工作流库？请举手。好的，不到一半。我将快速解释一下什么是工作流模式，以便明确我们正在做什么，然后在大约两分钟内我们将进入代码。所以，工作流模式本质上是一种编排层，它将你的代码分成可以独立运行、可以重试并且其数据可以持久化的步骤。我们称之为工作流的编排层在不同平台有不同的名称。在我们的例子中，工作流部分将是调用 **LLM** 并返回工具调用，然后再返回 **LLM** 调用的循环。而步骤将是我们的实际工具调用和 **LLM** 调用。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um all right, so who here has heard of the workflow pattern or has used a workflow library before? Show of hands. All right, that's less than half. Um I'm going to quickly explain what a workflow pattern is um to uh make it clear what we're doing and then in about 2 minutes we're going to go into the code. So um a workflow pattern is essentially a sort of orchestration layer um that separates your code into steps that can run in isolation and can be retrieded um and have their uh data persisted and a orchestration layer um that we call a workflow within platforms have different names for that. And in our case here, um the the workflow parts would be whatever the loop is that calls um the reason the **LM** calls and then goes back to the tool calls and then back to the **LM** calls. And the steps would be our actual tool calls and our **LM** calls. Um

</details>

### 议程与工作坊设置

**Peter Wielander**: 好的，看看今天的议程，我们将直接进入代码。我们将添加 **Workflow Development Kit**，这会很快，然后我们有充足的时间讨论它添加的酷炫附加功能，比如开箱即用的可恢复流、如何在任何时候暂停和恢复，以及如何为人机协作流程添加 **Webhooks**。最后会有充足的时间进行问答，但你们来参加这个工作坊而不是在线观看的原因是你们可以提问。请随时提问。呃，请随意举手或直接喊出问题。我们会解决的。

<details>
<summary>Original English</summary>

**Peter Wielander**: right, so looking at the agenda for today, um we're going to be jumping jumping into the code. We're going to add **workflow development kit** which is going to be quite fast and then we have a lot of time to talk about uh cool additional features that it adds like resumable streams out of the box um how to suspend and resume at any point um and how to add web hooks for human in the loop uh processes. At the end there's going to be ample time for Q&A but there is a reason that you're here in the workshop and not looking at this online which is that you can ask questions. Please do so at any point. Uh feel free to raise your hand or just shout out the question. Um and we'll get rid of

</details>

**Peter Wielander**: 好的，正如我所说，我们正在使用 **Vercel** 示例仓库，并且将使用 `conf` 分支。为什么是这个分支？我剥离了示例中很多访问代码，以确保我们可以专注于最重要的部分。这个工作坊的每个检查点都会有自己的分支。所以，如果你不直接跟着编码，你也可以逐步查看这些步骤，然后检查差异，看看之间有什么变化。

<details>
<summary>Original English</summary>

**Peter Wielander**: all right so as I said uh we're working off the **baselample repository** and we're going to be working off of the `conface` branch. Uh why this branch? I stripped a bunch of the access code on the example to make sure that we can focus on the most important parts. And every checkpoint from this workshop will have its own branch. So uh if you're not coding along directly, you can also check out the steps step by step and then check the diffs and see what changed between.

</details>

### 演示：初始智能体代码库

**Peter Wielander**: 好的。所以，我已经在本地运行了 `npm dev`，在这个平台上，只是为了向你们展示它的样子。我将运行一个简单的查询。这是一个编码智能体，对吧？它就像一个代码编辑器，但没有代码编辑功能，它可以接收一个提示，生成一些文件，最终会向你展示一个带有已部署完成应用的 **iframe**。所以，它主要是一个 **UI**，带有一些简单的工具调用，我们稍后会看。文件系统和输出通过 **Vercel Sandbox** 运行，但你也可以很容易地在本地运行它。

<details>
<summary>Original English</summary>

**Peter Wielander**: All right. So um I have already run uh `npm dev` locally on this uh um platform just to show you what it looks like. I'm going to run a simple query. Um so this is a uh coding agent, right? It's like a code editor but without the code editing and it can take a prompt, generate some files and it'll eventually show you a **iframe** with the finished app that is deployed. Um, so it's it's mostly **UI** with a few simple tool calls um that we'll look at in a second. And the file system and output uh runs over the **cell sandbox**, but you could just as easily run this locally.

</details>

**Peter Wielander**: 呃，看看代码，我将去查看我们的实际分支。看看代码，我们有一个接受聊天消息的端点，对吧？然后它会做一些常规的模型 **ID** 检查，看看模型是否受支持。最后，它会简单地创建一个智能体。哦，是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: Uh, looking at the code, I'm going to go and check out our actual branch. Looking at the code, uh, we have one endpoint that accepts our chat messages, right? Then it does some some regular sort of model **ID** checking with us to see whether the model is supported. And in the end it's going to simply create an agent. Oh yes.

</details>

**观众**: 那个分支叫什么名字，再说一遍？

<details>
<summary>Original English</summary>

**观众**: What was that branch one more time?

</details>

**Peter Wielander**: 那个分支是 `conf`。是的。你可以看到，我们会继续使用 `com/2-` 等等。只要找数字，你就能找到所有的检查点。

<details>
<summary>Original English</summary>

**Peter Wielander**: The branch was `conf`. Yeah. And you can see we'll we'll move on to these `com/2-` etc. Uh just look for the numbers and you'll find all the checkpoints.

</details>

**Peter Wielander**: 呃，是的。所以我们的主端点只接受一些消息并调用 **AI SDK 智能体**，这本质上与流式文本调用相同。我们会传递一些工具，它内部会循环调用流式文本。然后它会将生成的所有块流式传输回客户端，格式便于客户端理解。这都是 **AI SDK** 的常规代码，如果你愿意，可以用不同的库替换。它主要用于支持 **UI**。但再说一遍，所有实际的智能体功能都非常简单，发生在这里。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um yes. So our main endpoint just accepts some messages and calls the **AI SDK agent** which is essentially the same thing as a stream text call. Um we'll pass some tools and internally it'll just loop for stream text to call stream text call. uh and then it'll uh stream the all of the chunks generated back to the client in a format that is easy for the client to understand. This is all sort of **AISDK** regular code um that you could replace with a different library if you want. Um that is mostly there to support the **UI**. Um but again all of the actual agent stuff is very simple and happens here. So

</details>

**Peter Wielander**: 呃，哦，我们再看看我们有哪些工具。我们有四个工具：`create sandbox`、`get sandbox URL`。这些都非常简单。它们只是封装了 `bell sandbox.create` 和 `get URL`。`run command` 类似，本质上封装了 `sandbox.run command`。`generate files` 会根据一个简单的提示生成一个文件。我们将以其中一个根调用为例。我们有一个提示，看起来有点像 **Markdown** 文件，说明要做什么，不要做什么。呃，我的快捷键不工作了。回到工具调用。我们还有一个输入模式，这是一个 **Z schema**，用于 **BI** 应该传递什么。这都是非常标准的。然后是一个 `execute run`，它封装了 `sandbox one command` 并带有一些错误处理。

<details>
<summary>Original English</summary>

**Peter Wielander**: uh oh let's also take a look at the tools that we have. Uh we have four tools uh `create sandbox` `get sandbox URL`. These are very simple. They just wrap uh `bell sandbox.create` and `get URL` and similar with `run command` essentially reps uh `sandbox.r run command` and `generate files` um will generate uh a file from a simple prompt. And we're going to take a look at one of these root calls as an example. Uh we have a we have a prompt that looks somewhat like, you know, a **markdown** file. Sort of what to do, what not to do. Um and my hotkeys are not working. And back to the tool call. We also have an input schema that's a **Z schema** um for what **BI** is supposed to pass. This is all very standard. and then an `execute run` which wraps `sandbox one command` with some error handling.

</details>

**Peter Wielander**: 所以这基本上就是我们整个智能体代码的设置。然后，在前端，我们只需调用 **AI SDK** 的 `useChat` 来消费流并在 **UI** 中显示内容。那么，让我们开始向其中添加工作流吧。在我开始之前有什么问题吗？

<details>
<summary>Original English</summary>

**Peter Wielander**: So that's essentially our entire agent code setup and then in the front end we just call `use chat` from **AI SDK** to consume the stream and display uh things in the **UI**. So uh let's get started adding workflow to this. Um any questions before I get started?

</details>

### 添加 Workflow DevKit：安装与配置

**Peter Wielander**: 好的。那么第一步是我们将运行 `npm install workflow` 和 `add-workflow`，这将给我们最新版本。`workflow` 是主库，`add-workflow` 是一些帮助程序，是一些与 **Workflow Development Kit** 配合良好的封装器。

<details>
<summary>Original English</summary>

**Peter Wielander**: Cool. All right. Uh, so step one is we're going to run `npm install workflow` and `add-workflow` which will give us the latest version. Uh, `workflow` is the main library and `add-workflow` are some helpers for uh uh some some rappers for that work well with the **workflow development kit**.

</details>

**Peter Wielander**: 所以现在我们已经安装了它，我们在这里运行一个 **Next.js** 应用。所以我们将扩展编译器，通过使用 `use-workflow` 或 `with-workflow` 来编译工作流代码。我们可以从 `workflow/next` 导入它，这将设置 **Next.js**。是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: So now that we have this installed, uh we are running a **Nex.js** app here. So we're going to uh extend the compiler to uh compiler workflow code by doing `use workflow` or `with workflow`. Um which we can import from `workflow next` and that'll set up **next.js**. Yes.

</details>

**观众**: 确认一下问题。你是在 `example applied coding` 目录中吗？

<details>
<summary>Original English</summary>

**观众**: Verifying question. You are in the `example applied coding` directory.

</details>

**Peter Wielander**: 是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yes.

</details>

**Peter Wielander**: 所以添加这个会让编译器知道也要单独编译我们的 **Web**，我们稍后会更详细地讨论。然后为了方便，我们还可以在 **TS config** 中添加一个 **TypeScript** 插件，同样的包，这将为我们的工作流代码提供更好的自动补全功能。

<details>
<summary>Original English</summary>

**Peter Wielander**: So adding this will let the compiler know to also compile our web um separately which we'll get into more in a second. And then for convenience, we can also add a **TypeScript** plugin to our **TS config** um same package and that'll give us some better autocomp completion for our workflow code.

</details>

### 添加 Workflow DevKit：编排层（工作流函数）

**Peter Wielander**: 所以我们之前讨论过工作流，它有一个编排层和许多步骤。我们首先要做的是编写编排层。在我们的例子中，这本质上就是智能体，对吧？它是一个来回调用步骤的循环。我们将添加一个新文件。你可以随意命名。我们将把我们的智能体调用移到那里。我将把这称为我们的代码工作流，它将包含我们所有的工作流代码。

<details>
<summary>Original English</summary>

**Peter Wielander**: And so we talked about uh a workflow being um having an orchestration layer and having a number of steps. Uh what we're going to do first is we're going to write the orchestration layer. Um, in our case, that is essentially just the agent, right? Does the loop that calls steps um back and forth. We're going to add a new file. Uh, you can call it whatever you want. And we're going to take our agent call and move it over there. And I'm going to call this our uh code workflow, which is going to be all of our workflow code.

</details>

**Peter Wielander**: 然后我将自动补全一堆导入。谢谢你，**AI**。所以我们只是将大部分原本会从这里获得的参数传递到那里。这就完成了重构。本质上只是将一些工作流代码提取到我们的文件中。所以这里就变得有趣了。现在这是一个代码，这是一个单独的函数，我们可以使用 `useWorkflow` 指令，它将为我们的编译器标记这是一个工作流函数。

<details>
<summary>Original English</summary>

**Peter Wielander**: And then I'm going to go and auto complete a bunch of imports. Thank you, **AI**. So we're just passing most of the uh arguments that we would otherwise get from here over there. And this completes the refactor. Essentially having done nothing but pull out some of the workflow code into our file. So this is where it gets interesting. Um, now that this is a code, this is a separate function, we can use the `useWorkflow` directive which will mark this for our compiler as a workflow function.

</details>

**Peter Wielander**: 那么这在底层做了什么呢，是的。哦，抱歉。呃，在底层，它将与该函数相关的所有代码编译成一个单独的捆绑包，并确保没有导入任何会产生副作用的东西，因为工作流编排层需要是确定性的。所以它可以以确定性的方式重新运行，并且不用担心状态污染。

<details>
<summary>Original English</summary>

**Peter Wielander**: So what this does is under the hood, yes. Oh, sorry. uh under the hood it um compiles all of the code related to the function into a separate bundle and it ensures that there is no imports to anything that would have side effects because the workflow orchestration layer needs to be deterministic. So it can be rerun um in a in a uh deterministic fashion and there's no worries about state uh pollution.

</details>

### 添加 Workflow DevKit：标记 LLM 调用为步骤

**Peter Wielander**: 所以现在我们有了这个，我们需要将我们的 **LLM** 调用标记为步骤，因为这些调用发生在智能体内部，这在这里做起来有点困难，所以我们最终编写了一个**持久化智能体类**，它本质上与智能体相同，但在底层实际的 **LLM** 调用中带有一个 `useStep` 标记。

<details>
<summary>Original English</summary>

**Peter Wielander**: So now that we have this um we would need to now mark our **LLM** calls as steps and because the calls are happening inside the agent um this is a little bit harder to do here and so we uh ended up writing a **durable agent class** which is essentially the same thing as agent with a `useStep` marker in the actual **LM** calls that it does under the hood.

</details>

**Peter Wielander**: 所以，现在我们已经设置好了，我们将等待实际的流式传输，让我们看看是否还需要做些什么。呃，检查错误。哦，是的，我们需要一个流来写入。所以，以前我们可以直接写入 **API** 处理程序给我们的流。现在，我们将不得不创建一个新的流来写入。我们从 `workflow` 导出一个 `getWritable` 函数，它会隐式地获取一个与工作流关联的流来写入。我们稍后会更详细地讨论这一点。但现在，我们只需将其传递给我们的智能体。我们将看看这是否是正确的类型。呃，大概不是。

<details>
<summary>Original English</summary>

**Peter Wielander**: So, now that we have this set up, we're going to await the actual streaming and let's see if there's anything we need to do. Um, checking for errors. Oh, yes, we need a stream to write to. So, previously we could just write to the stream that the **API** handler gave us. Uh, now we're going to have to create a new stream to write to. Um, we export a `getWritable` function from `workflow` which is which gets a stream implicitly associated with the workflow to write to. And we're going to get get into that a little bit more in a second. But for now, we'll just pass that to our agent. And we're going to see if this is right type. Um, presumably not.

</details>

### 添加 Workflow DevKit：启动工作流

**Peter Wielander**: 呃，最后回到我们实际的工作流中，我们需要以框架理解的方式调用我们的工作流，对我们来说，就是调用 `start`，参数单独传递，这本质上是告诉它在此函数上启动一个新的工作流，`start` 可以从 `workflow/API` 导入。好的，所以现在我们基本上已经完全连接了工作流，其中大部分只是提取了一些代码并添加了一个指令。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um and then finally back in our actual workflow we need to call our workflow in a way that the uh framework understands which for us is a call to `start` with the arguments being passed separately which is essentially telling it to start a new workflow on this on this function and `start` can be imported from `workflow/ API` Okay, so now we essentially have uh the workflow fully hooked up and a lot of this was just pulling out some of the codes and adding a directive.

</details>

**Peter Wielander**: 是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yeah.

</details>

**Peter Wielander**: 呃，已经自愿帮助任何正在跟随并有调试问题的人。呃，尽管联系。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um has volunteered to help anyone who's like following along and has some debugging questions. Um just reach out.

</details>

**观众**: 我也在团队里。所以如果你们有人跟着，请告诉我。

<details>
<summary>Original English</summary>

**观众**: I'm on the team as well. So let me know if you guys are following one.

</details>

**Peter Wielander**: 我会帮忙的。

<details>
<summary>Original English</summary>

**Peter Wielander**: I'll be around to help.

</details>

**Peter Wielander**: 最后，这个 `start` 调用返回一个运行实例，它有一个我们刚刚写入的流，我们可以将其返回给 **UI**。所以这就完成了我们的工作流定义。现在，我们还说过需要将事物标记为步骤。**持久化智能体类**已经将 **LLM** 调用标记为步骤。但我们现在的工具没有被标记为步骤。

<details>
<summary>Original English</summary>

**Peter Wielander**: And finally, this `start` call returns a run instance um that has the stream that just um end up writing to that we can return to the **UI**. So this completes our workflow um definition. And now uh we also said that we would need to mark things as steps. The **durable agent class** already marked the **LLM** calls as steps. But our tools right now are not marked as steps.

</details>

### 添加 Workflow DevKit：标记工具调用为步骤

**Peter Wielander**: 幸好，这非常容易。呃，在每个工具的 `execute` 函数中，你只需写入 `useStep`，这将让编译器知道这是一个单独的代码块，要在单独的实例中执行。对吧？如果这部署到生产环境，它将在一个单独的无服务器实例中运行，并且如果它已经运行过，输入和输出将被缓存，如果失败，它将被重试。所以我要去遍历其他工具调用，也给它们添加 `useStep`。幸好我们只有四个。

<details>
<summary>Original English</summary>

**Peter Wielander**: Thankfully, this is very easy. Uh in the `execute` function for each of these tools, you can just write `useStep` and that will let the compiler know that this is a separate chunk to uh of code to uh execute in a separate instance. Right? If this is deployed to production, this would run in a separate serless instance and the inputs and outputs would be cached if it already ran and it would be retrieded if it failed. So I'm going to go and go through the other tool calls and also add `useStep` to these. Thankfully we only have four of them.

</details>

**Peter Wielander**: 这应该能完成我们的转换。所以现在我们可以去运行 `npm dev`。看看这是否按预期工作。我们将重新加载页面。看起来什么都没变。让我们实际运行一个查询。

<details>
<summary>Original English</summary>

**Peter Wielander**: And that should complete our transformation. So now we can go and run the `mpm dev`. See if this works as expected. We're going to reload our page. And it seems like nothing changed. Let us actually run a query.

</details>

**Peter Wielander**: 我们可以看到它仍然按预期流式传输。所以，对于我们本地开发人员来说，我们所要做的只是提取一个函数，然后添加一些指令。但现在，如果我将它部署到任何适配器，无论是 **AWS** 适配器，或者你可能有自己的适配器，它都将以隔离的方式运行，并具有持久性以及所有这些优点。

<details>
<summary>Original English</summary>

**Peter Wielander**: And we can see that it's still streaming as expected. So uh for us developing locally right all we had to do is pull out a function um and then add some directives. But now if I deploy this um to any adapter again was or an **AWS** adapter or maybe you have your own um this will run uh in isolation with durability and all of those good things.

</details>

### 可观测性与本地 UI

**Peter Wielander**: 对于本地开发来说，非常棒的一点是，如果我进入同一个文件夹，然后运行 `npx workflow web`，这是一个 **CLI** 调用，用于启动一个本地 **Web UI** 来检查我们的运行。你可以看到我们的运行目前仍在进行中。每个被标记为步骤的东西都会有一个跨度（span），你可以检查输入、输出和任何相关的事件。我们可以看到我们的工作流刚刚完成，我想，是的，这已经内置了。

<details>
<summary>Original English</summary>

**Peter Wielander**: And something that's really nice for local development also is that if I go and if I go and I'm going to go into the same folder here and I'm going to run `npx workflow web` which is this **cli** call to start a local web **UI** to inspect our runs. Um and you can see that our run is currently still running. Um and every step everything that is marked as a step will have a uh span here and you can inspect the inputs the outputs and any associated event. And we can see that our workflow just completed I think and yeah this gets built in. Yes.

</details>

**观众**: 只是为了澄清，每次你提示你的 **vibe coder**，那都是工作流的一个实例，它会运行直到完成。所以每个都是，是的，它。

<details>
<summary>Original English</summary>

**观众**: And just for clarification every time you're prompting your vibe coder that is is one instance of the workflow that runs to completion. So then so each one is Yeah. It's

</details>

**Peter Wielander**: 完全正确。是的。你可以用任何你想要的方式来建模。你也可以将整个用户会话建模为一个工作流，让工作流进行循环，等待下一个查询，然后，你知道，如果需要，我们可以运行代码数周。我稍后会介绍一些相关的工具。

<details>
<summary>Original English</summary>

**Peter Wielander**: exactly Yeah. And you could model this uh in any way you want. Um you can also model your entire like an entire user uh sort of uh session as one workflow and uh have the workflow sort of do a loop wait for the next query um and then again you know we can run code for weeks if we need to essentially um and I'm going to go into uh some tools for that in a second.

</details>

### 可恢复流与 UI 反馈

**Peter Wielander**: 所以现在我们已经设置好了，你可以看到右侧没有得到任何有用的反馈。但是，如果我访问这个链接，并且看到我们的应用程序很可能已经正确创建，或者因为某些错误而失败了，无论哪种情况，我们都没有在右侧得到任何输出。所以，发生这种情况的原因是我们将智能体输出流式传输到客户端，但我们的工具目前并没有进行任何流式调用。所以我们可以做的是，在我们的工具调用中，我们也可以获取可写流，它将获得与任何其他工作流本身相同的可写实例。你可以在一个工作流中创建和消费无限数量的流。你也可以给它们打上特定的标签，然后从那里获取它们。但这会获取默认实例。

<details>
<summary>Original English</summary>

**Peter Wielander**: So now that we have this uh set up uh you can see that um on the right side we do not get any sort of helpful uh feedback. But um if I visit this link and see that our app has likely been created correctly um or or it failed because of some errors and either way we're not getting any output on the right side. So uh the reason this is happening is that we are streaming um the agent output to the client but our tools aren't actually doing any stream calls right now. So what we could do is similarly in our tool calls uh we could get the writable um which would which will get the same writable instance as any other uh as the workflow itself. Um there is an infinite amount of streams you can you can create and consume in a workflow. Um and you can also like you can tag them with a certain name and then fetch them from there. Um but this will get the default instance.

</details>

**Peter Wielander**: 一旦我们有了可写流，我们就可以通过获取写入器来实际连接到可写流。现在我们可以将任何类型的信息写入 **iPhone** 以供消费。我想我们想要类似 `data create sandbox` 的东西，我想这就是我在 **UI** 中连接的，然后我们将调用 **ID**，我们想要沙盒 **ID** 在这里做。所以这只是我在写入一个 **UI** 知道如何消费的数据包。所以现在我做了这个，如果我重新加载应用程序并再次启动它，我们将看到至少 `sandbox create` 调用大概在开始时正确填充了。

<details>
<summary>Original English</summary>

**Peter Wielander**: And once we have a writable we can actually connect to the writable by getting the writer. And now we can write any kind of information um to the to the **iPhone** to be consumed. I think we want something like `data create sandbox` I think is what I hooked up in the **UI** and then we'll call **ID** we want the sandbox **ID** do it here. So this is me just writing a data packet that our **UI** knows how to consume. So now that I did this and I if I reload the app and start this again, we'll see that at least the sandbox create call presumably gets filled in correctly at the start.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yeah,

</details>

**观众**: 你说你可以创建流，那是什么意思？

<details>
<summary>Original English</summary>

**观众**: you said that there are stream that you can create and what do you mean by that?

</details>

**Peter Wielander**: 对，是的。所以，呃，流，工作流，或者说适配器，它们在本地开发中用于工作流，对吧？这只是一个文件。在生产环境中，这可能是一个 **Redis** 实例。

<details>
<summary>Original English</summary>

**Peter Wielander**: Right. Yes. So um a stream the workflow sort of the adapter they use for workflows in local development right this would just just be a file in production this might be a **reddus** instance

</details>

**观众**: 呃，支持工作流调用它来创建一个新的流，例如在 **Redis** 中，然后将该流传回，所以任何时候你调用 `getWritable`，它都会创建一个流，例如在 **Redis** 中，带有该工作流的 **ID**，然后它会传递该流。所以任何步骤都可以连接到它，任何客户端都可以连接到它。

<details>
<summary>Original English</summary>

**观众**: um supports the workflow calling it to create a new stream for example in **reddus** right and then passing that stream back and so anytime you call `get writable` it'll create a stream for example again in **radius** with the **ID** of that workflow and it'll pass that So any step can attach to that and any client can attach to that

</details>

**观众**: 在本地主机上，这将被写入文件并从文件读取。

<details>
<summary>Original English</summary>

**观众**: and in local uh host this would be written to a file and read from a file.

</details>

**观众**: 抱歉，你现在正在设置。

<details>
<summary>Original English</summary>

**观众**: Sorry you're setting up right now.

</details>

**Peter Wielander**: 对。所以以前我们有一个 **API** 处理程序，它接收一些消息，调用智能体，然后从那个 **API** 处理程序流回消息。现在我们有一个 **API** 处理程序，它调用并启动一个工作流，然后它会传回这个工作流创建的流。呃，我想这允许我们做的事情也没有正确工作。我将重启服务器，看看是不是这样。呃。

<details>
<summary>Original English</summary>

**Peter Wielander**: Right. So pre previously we had a a **API** handler that took some messages called the agent and then streamed back messages from that **API** handler. Now we have an **API** handler that calls it starts a workflow and it'll pass back the stream that this workflow creates. Um, what this allows us to do also I think that was not working correctly. I'm going to restart the server just to see if that's the case. Um,

</details>

**观众**: 到目前为止，还有什么需要帮助设置的吗？

<details>
<summary>Original English</summary>

**观众**: anything else so far getting this set up to where where needs any help with getting set up?

</details>

**Peter Wielander**: 看起来不错。呃，你提了一个好点，这允许我们做的一件事是流不绑定到 **API** 处理程序。这意味着我们可以在任何时候恢复这个流。如果你与 **API** 处理程序失去连接，然后用户重新连接，这个流仍然存在，我们可以重新连接到流以恢复会话。这也是持久性方面的一部分，你在工作流中做的任何事情都可以在任何时候恢复。

<details>
<summary>Original English</summary>

**Peter Wielander**: Seems good. Um good point you made uh something this allows us to do is that the stream is not bound to the **API** handler. This means that at any point we can resume this stream. If you lose connection to your **API** handler and then the user reconnects this stream still exists and we could reconnect to the stream to resume the session. This is also part of the durability aspect where everything you do in a workflow you can resume at any point.

</details>

**Peter Wielander**: 我将重新启动这个查询，希望这次能成功。是的。所以，现在我连接了这个数据包，你可以看到这个用于创建沙盒的特殊 **UI** 处理工作了。但即使完成后，它也没有显示完成。这是因为我们只写入了初始加载状态数据包。所以，我可以遍历我们所有的工具，添加更多数据包，让 **UI** 更丰富。呃，但我将去查看另一个分支，即 `conf-sleep` 分支。呃，就是下一步，它已经有了这些。实际上，我将选择工作流那个。抱歉，`conf/2-workflow`，它已经填充了所有这些写入器调用。否则没有区别。呃，所以现在我们所有的工具都有这些写入调用，流应该会再次看起来像我们刚开始使用这个应用时一样。

<details>
<summary>Original English</summary>

**Peter Wielander**: I'm going to restart this query and hope that it works this time. Yeah. So, now that I hooked up this data packet, you can see this special **UI** handling for creating a sandbox uh works. But even after it's done, it's not showing up that it's done. This is because we're only writing the initial loading state packet. So, I could go through all of our tools and I could add more packets and just, you know, make the **UI** richer. Um, but I'm going to go and check out a different branch which is the uh `conf-sleep` branch. Uh, just the next step uh, which already has these actually I'll go for the workflow one. Sorry, `conf /2-workflow` which already has all of these writer. Calls populated. There's no difference otherwise. Um, so now that all of our tools have these right calls, the stream would again presumably look the same as it did when we started out in this app.

</details>

### 持久化会话与恢复流

**Peter Wielander**: 呃，好的。所以，现在我们有了再次工作的流，一切都按预期工作，我们有了更多的可观测性，并且可以以持久性部署它。呃，我之前谈到过可恢复流。我们将看看我们是否能让这个流恢复，以便我们拥有持久化会话。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um, all right. So, now that we have streams working again, everything is working as expected and we have more observability and we can deploy this with durability. Um, I talked about resumable streams before. We're going to see if we can get this stream to resume so we have durable sessions.

</details>

**Peter Wielander**: 所以，我们唯一需要做的就是去我们的 **API** 端点。呃，在我们获取运行实例的地方，我们还将返回工作流 **ID** 作为附加信息。所以，我可以返回 `run.r run ID`，例如。这只是，再说一遍，你用任何方式做都可以。呃，我在这里将其添加为头部信息，因为我们已经返回了一个流。但无论你以何种方式将 **ID** 传递给 **UI**，**UI** 都可以使用它来从该 **ID** 恢复流。

<details>
<summary>Original English</summary>

**Peter Wielander**: So, the only thing we need to do to uh make that work is to go to our **API** endpoint. Um, and what where we get the run instance, we're also going to return the workflow **ID** as a as additional additional information. So I can I can return `run.r run ID` for example. This is just again any way you do this is fine. Um, I'm adding it as a header here because we're already returning a stream. But anyway you pass the **ID** to the **UI** um is something that the **UI** can then use to resume the stream from.

</details>

**Peter Wielander**: 所以我们从这里要做的是，**UI** 应该能够决定它是否有一个运行 **ID**，以及它是否应该恢复一个流。所以我们将去创建一个新的端点。呃，我们称之为 `ID`，类型是 `slashexisting ID`。然后我们将创建一个文件夹 `stream`，并添加一个路由处理程序。这只是 **Next.js** 的配置，用于在 `/chat/ID/stream` 添加一个 **API** 路由，我们将用 **AI** 自动补全。

<details>
<summary>Original English</summary>

**Peter Wielander**: So what we do from here is uh the **UI** should be able to decide whether to whether it has a run **ID** and whether it should resume a stream. So we're going to go and create a new endpoint. Um let's call it `ID` for type `slashexisting ID`. Then we're going to make a folder `stream` and we're going to add a route handler. So this is just **next.js** uh configuration for adding an **API** route at `/chat/ ID/ stream` and we're going to auto complete with **AI**.

</details>

**Peter Wielander**: 呃，我们本质上要做的是，我们从参数中获取 **ID**，然后我们所要做的就是调用工作流 **API** 中的 `get run`，它会获取一个运行实例，然后我们可以返回与我们在另一个端点中返回的相同的流，只是不调用实际的智能体，只进行流式传输。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um what we're essentially doing is uh we get the **ID** from the params and then all we're going to do is call `get run` in the **workflow API** which gets a uh the run instance and then we can return the same stream that we return in the other endpoint just without calling the actual agent um only only doing the stream and

</details>

**观众**: 整个项目。

<details>
<summary>Original English</summary>

**观众**: this whole project

</details>

**Peter Wielander**: 我想那应该没问题。呃，我们还在获取起始索引，这从 **AI** 方面非常有用。我们可以从某个起始点获取一个可读流。我想这就是为什么它会自动计算。呃，所以如果你想在中途恢复一个流，你可以传递一个，你知道，你最初离开时所在的块。所以现在这已经完成了，我将注释掉我们目前不需要的这些东西。

<details>
<summary>Original English</summary>

**Peter Wielander**: I think that should be good. Um, we're also taking our start index which is very helpful from the **AI**. We can get a readable stream um, from a certain start point. I think this is why it's auto computed. Um, so if you're trying to resume a stream like midway, you can pass a, you know, which chunk you were on when you initially left off. So now that this is done, I'm going to comment out these things we don't currently need.

</details>

**Peter Wielander**: 呃，我们需要 **UI** 来支持这个条件判断，即是恢复还是开始新的聊天。所以我将去我们的聊天前端，我将从另一个分支中拉取一些代码，为了简单起见，它在 `four-streams` 分支上，我将只展示以供完整性。呃，我们已经在 **UI** 中调用了 `useChat` 来消费流，我们现在添加的是一个传输层，就是这里这个大块，它有一些中间件用于流，它说如果我试图启动这个调用，我将首先检查我们是否有一个现有的运行 **ID**，如果是，我将通过调用这个不同的 **API** 端点来重新连接。我有点敷衍地带过这一点，因为它只是客户端处理，用于传统情况。呃，如果对此有更多问题，请随时提问。

<details>
<summary>Original English</summary>

**Peter Wielander**: um we need the **UI** to support this uh conditional of whether to resume or whether to start a new chat. So I'm going to go to our chat front end and I'm going to go pull in some code from a different branch um for simplicity which is the it's on the `four-streams` branch which I'm going to just show for completion. um we do a `use chat` call already in the **UI** to consume the stream and we all we added now is a transport layer which is this big block here that has some middleware for the stream that says that if I'm trying to start this call uh I'm going to check first whether we have an existing run **ID** and if so I'm instead going to do a reconnect by calling this different **API** endpoint instead I'm sort of handwaving over this a little bit because it's client side handling for for traditionals. Um, if there's more questions about this, please feel free.

</details>

### 工作流暂停（Sleep）与长时运行智能体

**Peter Wielander**: 好的。所以，这给了我们可恢复流。呃，我还要演示一下，如果我们想部署它并在生产环境中看到它会怎样。呃，所以我将调用这个，然后我们可以查看一个生产预览示例。

<details>
<summary>Original English</summary>

**Peter Wielander**: All right. So, that gives us resumable streams. Um, and I'm also going to demo uh what if we wanted to deploy this and see it in production. Uh, so I'm going to call this and then we can check out a production preview example.

</details>

**Peter Wielander**: 同时，呃，接下来我们要做的，我们谈到了事件和可恢复性。工作流之所以这样运行，是因为在生产环境中，每个步骤都在自己的无服务器实例上运行。实际的工作流编排层只在很短的时间内被调用，以促进步骤的运行。这允许我们让工作流暂停任意长的时间。一个工作流可以等待一周，而不消耗任何资源。这内置在 **Workflow Development Kit** 中，通过一种方式，我们可以在工作流内部，任何标记有 `useWorkflow` 的东西，我们都可以简单地调用 `sleep`，例如 `sleep(three days)`。

<details>
<summary>Original English</summary>

**Peter Wielander**: In the meantime, uh the next we're going to do is we talk about events and resumability. The workflows because they run the way it runs is that every step runs on its own serless instance in production. The actual work workflow orchestration layer is only called very briefly to facilitate a step runs. What this allows us to do is to have a workflow to spend for any amount of time. a workflow could wait for a week and not consume any resources. Uh this is built into the **workflow development kit** um in a way where we can in inside a workflow anything tag with `use workflow` we can simply call `sleep three days` for example

</details>

**Peter Wielander**: 呃，那也会唤醒我们，呃，那会暂停工作流三天，然后从我们离开的地方恢复。如果有人试图重新连接到流，例如，对吧？这会休眠一小时，流会再次重新连接到同一个端点，然后事情会从那里恢复。所以我们不会因为丢失运行代码的实例而丢失任何东西，因为我们总是可以重新启动它，从我们离开的地方恢复。

<details>
<summary>Original English</summary>

**Peter Wielander**: um and that would also wake us uh that will pause the workflow for three days and then resume where we left off. If someone was trying to reconnect to a stream for example, right? This was sleep an hour, the stream would just reconnect again to the same endpoint and things would resume from there. So we don't lose anything by uh losing the instance that runs the code because we can always restart it, resume from where we left off.

</details>

**Peter Wielander**: 呃，这对于 **AI** 智能体很有用，因为我们可以进行工具调用。呃，我们可以让 **UI** 作为 **AI** 智能体进行调用，说休眠任意长时间，然后用它来创建一个智能体，它本质上使用一个定时任务，比如每天读取我的电子邮件并做这件事，对吧？所以那将是休眠一天。是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um and this is useful for **AI** agents because we can to a tool call. uh we can have the **UI** as the **AI** agent have a call that says sleep any amount of time and then use it to make an agent that that essentially uses a crown job where it says every day read my emails and do this thing right so that would be sleep one day yes

</details>

**观众**: 当那种智能体宕机时，意味着所有状态都随之宕机吗？

<details>
<summary>Original English</summary>

**观众**: when the when the kind of agent goes down that means all the state goes with it down

</details>

**Peter Wielander**: 是的，所以当它休眠时，不，当它休眠三天时。

<details>
<summary>Original English</summary>

**Peter Wielander**: yes so when it when it sleeps no when it sleeps for three days

</details>

**观众**: 不，那时它只是暂停了，但是当它因为某种原因被终止输出时，它的状态去了哪里？

<details>
<summary>Original English</summary>

**观众**: no then it kind of paused but when that would be killed output is for some reason where does the state go of that?

</details>

**Peter Wielander**: 所以它的工作方式是任何步骤调用都会被缓存。所以当你输入一个步骤调用时，我们将其注册为一个事件，然后我们运行该步骤。如果该步骤完成，我们就会缓存输出并说该步骤已完成。对吧？所以如果它像这样，我们首先运行智能体，对吧？假设我们运行智能体并运行了一堆步骤。那么工作流函数在此时的状态将被保存，所有步骤调用的输出都将被保存。当我们从代码的这一特定行重新启动工作流时，它将重新水合整个状态，然后从这里继续。

<details>
<summary>Original English</summary>

**Peter Wielander**: So the the way it works is that any step call um is cached. So when you when an input goes to a step call, we register that as an event and we run the step and if the step completes, we cach the output and say this step has been run um to completion. Right? So if it was if it was something like this where we run the agent first, right? Let's say we run the agent and we run a bunch of steps. um the state of the workflow function at this point in time would be saved and all of the outputs from all of the stat calls would be saved and at the time where we restart the workflow from this specific line of code it'll rehydrate the entire state and it'll just go from here.

</details>

**Peter Wielander**: 呃，这发生的原因是，我们不必以任何实际消耗资源的方式重放任何代码。呃，是的，所以我们可以用它来制作一个智能体，它本质上又是一个定时任务。呃，我们可以用它来制作运行数周的智能体，或者在非常长的时间范围内与你的任何信息进行交互。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um and this happens so that again we don't have to replay any of the code of it uh in a way that that does any actual resource consumption. Um yeah, so we can use this to make an agent that has it's essentially a crown job again. Um and we can use it to make agents that run for weeks or interact with any of your um sort of like information over over a very long time horizon.

</details>

**Peter Wielander**: 在我说话的时候，我们已经将当前的应用部署到了 **Vercel**。所以我可以查看这个预览分支，例如，你可以看到应用现在已经在线运行，并且像往常一样工作。是的，它完美运行。如果我再次，我可以使用 **UI** 在任何时候检查它。如果我调用 `workflow inspect web` 或者只是 `workflow web`，带有 **Vercel** 的后端和预览参数，例如，那只会让它知道我们的部署在哪里可以找到，然后它会启动相同的 **UI**，现在我们可以在生产环境中检查这个运行中的运行，你可以看到我们在这里得到了相同类型的信息。呃，是的。所以，这有点像，哦，我不会取消运行。我可以取消运行。让我们取消它。呃，这表明它在本地的工作方式与在生产环境中的工作方式从概念上讲是完全相同的。呃，这就是我们追求的用户体验。

<details>
<summary>Original English</summary>

**Peter Wielander**: And while I've been talking, we have deployed uh our current app to the **cell**. So I can check out this preview branch for example and you can see the app is now live online um and working just as it usually does. And yes it works perfectly. And if I then again I can do uh I can use the **UI** to inspect this at any point. If I call `workflow inspect web` or just `workflow web` with the dash backend for cell and dash and preview parameters for example that'll just let us let it know where our deployment is to be found and then that'll spawn up the same **UI** and now we can check on this run run run that's running in production and you can see we're getting the same kind of information here. Um, yeah. So, this is sort of Oh, I'm not going to cancel the run. I could cancel the run. Let's cancel it. Um, this is to show that the way it works in local locally is the exact same way that it works in production from a conceptual standpoint. Um, which is the **UX** we are aiming for.

</details>

### 实现休眠工具

**Peter Wielander**: 好的。呃，我稍微谈了一下休眠和暂停。让我们去编写这个休眠工具调用。它会非常简单。呃，我将复制，我的意思是，我已经在那里了，但我将复制这个并从头开始编写。我们将编写一个休眠工具调用。我将它命名为 `sleep.ts`。呃，我们将把输入模式设置为 `timeoutMilliseconds`，实际的运行命令不是这些，而是直接调用 `sleep`。

<details>
<summary>Original English</summary>

**Peter Wielander**: All right. Um, I talked a little bit about sleep and suspend. Let us go and write this sleep tool call. It's going to be very simple. Uh I'm going to go and copy the I mean I already here but I'm going to copy this and write it from scratch. We're going to write a sleep uh pool call. I'm just going to call it `sleep.ts`. And uh we're going to turn down the input schema to be something like `time out milliseconds` and the actual run command to be none of this and instead just call `sleep`.

</details>

**Peter Wielander**: 呃，因为 `sleep` 已经是我们从工作流库中导出的一个步骤，我们不需要调用，呃，我们不需要将这个函数标记为 `use step`。但是这现在会，呃，让我们看看这是否是，哦，这应该是一个数字。好了。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um because `sleep` is already a step um that we export from `workflow` in `workflow` library. We don't need to call uh we don't need to mark this function as `use step` but this will now uh let's see if this is oh this should be a number. There you go.

</details>

**观众**: 你能再说一遍吗？为什么你不需要 `use step`？

<details>
<summary>Original English</summary>

**观众**: Can you see that again? Why don't you need the `use step`?

</details>

**Peter Wielander**: 哦，呃，所以这已经是我们从工作流中导出的一个步骤。可观测性也会将其显示为一个步骤，我们稍后会看到。呃，这应该能正常工作，假设提示是好的，我们将修改提示，使其像这样。

<details>
<summary>Original English</summary>

**Peter Wielander**: Oh uh so this is already a step um that we export from `workflow`. It's going to be the observability will also show it as a step which we'll see in a second. And um this should just work assuming the prompt is good which we're going to modify to be say something like see of this.

</details>

**Peter Wielander**: 呃，是的，这样做。呃，只有当用户指示你这样做时才使用此工具。好的。在这里加个双引号。好了。所以现在这个休眠调用已经设置好了，呃，这应该就是我们需要做的全部。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um yeah, do this. Um only use this tool if the user directs you to do so. All right. And get a double quote here. There we go. And so now that this sleep call is set up, um that should be all that we need to do.

</details>

**Peter Wielander**: 我们将它命名为 `run sleep command` 和 `sleep tool`。我们将它添加到我们的工具列表中。我想我让我们的编译器有点困惑，或者至少是 **TypeScript**。这看起来工作得很好。好的，现在我们有了这个工具。呃，我们还希望 **UI** 能显示它何时处于休眠状态。呃，所以我将添加，我将添加另一个，不是一个函数，而是记录休眠。呃，我们这样做是因为我们不能直接从工作流写入流，因为那样它就不再是确定性的了，因为工作流的每次运行都会再次写入流。

<details>
<summary>Original English</summary>

**Peter Wielander**: We'll call it `run sleep command` and `sleep tool`. And we're going to add this to our tools list. And I think I confused our compiler a little bit or at least **TypeScript**. This seems to work great. Okay, now we have the tool. Um, and we also want the **UI** to sort of display when it's sleeping. Um, so I'm going to add I'm going to add a another not a function to `log sleep`. Uh, this is the reason we're doing this is we cannot write to a stream directly from a workflow because then it wouldn't be uh deterministic anymore because every run of the workflow would write to the stream again.

</details>

**观众**: 是的。所以我正在尝试运行这个项目。呃，我必须为 **AI gateway** 创建一个 **Vercel API key**。它是否出现了一个错误，说请求中缺少头部信息？你是否在项目设置中启用了 **YC** 选项？

<details>
<summary>Original English</summary>

**观众**: Yeah. So I'm trying to run the project. Um I had to create a **versel API key** for the **AI gateway**. Did that did that getting error that says header is missing from the request. Do you have the **YC** option enabled in the project settings?

</details>

**观众**: 你一开始跳过了这个。

<details>
<summary>Original English</summary>

**观众**: You skipped this in the beginning but

</details>

**Peter Wielander**: 哦，是的。是的。我们的，呃，因为这段代码使用了沙盒，呃，你需要登录。呃，我的错误，呃，这应该在本地运行。呃，如果你不使用这个沙盒，呃，我会在演讲结束后提供一个不使用这个沙盒的分支。

<details>
<summary>Original English</summary>

**Peter Wielander**: oh yes. Yes. Our uh because this code uses uh sandbox uh you would need to log into this. Um my mistake uh this should be running locally. Um if you don't use this sandbox which uh I will uh we'll have a branch that doesn't use this sandbox um for after the talk.

</details>

**观众**: 现在你可能。

<details>
<summary>Original English</summary>

**观众**: For now you might

</details>

**Peter Wielander**: 呃，此时我稍后会做，没关系。所以在这里我将添加另一个对 `writable` 的调用，我们将调用，呃，我们将，让我们看看，我们需要本地 **ID**，所以现在这只是写入流，那应该允许我们正确地在 **UI** 中显示它。呃，让我看看我是否设置了 **UI** 来正确解释这个数据包。

<details>
<summary>Original English</summary>

**Peter Wielander**: um at this point I'll just do it afterwards. It's fine. So here I'm just going to add another call to `writable` and we're going to call uh we're gonna let's see we're going to need local **ID** and so now this is just going to writes to the stream and that should allow us to show it in the **UI** correctly. Um, let me see if I figured the **UI** to correctly interpret this packet.

</details>

**Peter Wielander**: 呃，没有 `data sleep` 类型，我想这可能，等等。是的。好的。所以现在我有了这个，呃，我可以再次启动我们的应用程序。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um, there is no `data sleep` type which I think might wait. Yes. All right. So, now that I have this, um, I can go start our app again

</details>

**Peter Wielander**: 所以它加载了。我们可以尝试这里的第二个提示，即休眠 30 秒，然后返回一个，呃，只是为了显示它将正确解释休眠调用，然后休眠。呃，这里没有显示数据包，很遗憾，但我们可以去 **Web UI**，我们可以显示它已经参与了休眠调用，这将在 30 秒后返回。

<details>
<summary>Original English</summary>

**Peter Wielander**: and And so it loads. We can try out the second prompt here which is sleep for 30 seconds and then return a uh just to show that it's going to correctly interpret the sleep call and then sleep. Um, it's not showing the data packet here sadly, but we can go to the web **UI** and we can show it has been it's engaging in the sleep call and this is going to return after 30 seconds.

</details>

### Webhooks 实现人机协作

**Peter Wielander**: 好的，这就是休眠，还有最后一件事，呃，我想要向你们展示的最后一个功能是 **Webhooks** 以及轻松从 **Webhooks** 恢复的能力。呃，实现 **Webhooks** 通常相当困难或令人头疼，在我们的例子中，呃，我将查看 `conf/5-hooks` 分支，向你们展示我们可以像休眠一样，添加一个新工具，我将只向你们展示实际的工具调用在哪里，呃，只是一个日志调用，然后我们创建一个 **Webhook**，这是一个我们从工作流导出的函数，呃，然后我们可以将 **Webhook URL** 记录到客户端或任何其他地方，并等待 **Webhook**，这将暂停，直到有人点击此 **URL**。

<details>
<summary>Original English</summary>

**Peter Wielander**: All right, so that's sleep and there's one final thing um one final feature that I want to show you u which is web hooks and the ability to resume from web hooks easily. uh implementing web host is usually quite difficult or a headache and in our case uh I'm going to check out the `conf /5-hooks` branch and show you that we can in the same fashion as we do sleep we can add a new tool that I'll just I'll just show you where the actual tool call is um just a a log call and then we create a web hook which is a function we export from the workflow Uh and we can then log the web hook **URL** to the client or anywhere else and await web hook and this will suspend for as long as necessary to uh someone to click on this **URL** and then

</details>

**Peter Wielander**: 让我们看看我们是否能，服务器正在运行，我希望能向你们展示这个运行情况。重新加载这个，呃，等待人工审批后再开始，然后调用 **Pokemon index**。让我们看看它是否正确执行了。我一直在切换分支，所以可能需要重启服务器。

<details>
<summary>Original English</summary>

**Peter Wielander**: let's see if we can the server is running and I can show you this uh running hopefully reload this and Um, wait for wait for human approval before starting and call **Pokemon index**. Let's see if it happen this correctly. Been changing branches, so I might need to restart my server.

</details>

**Peter Wielander**: 呃，它的底层工作方式是，我们再次创建一个 **URL**，然后我们将暂停工作流，直到有调用进入该端点。这带来了一系列额外的功能，比如我也可以根据需要进行响应。呃，这是一个完整的 **API** 请求处理程序。我可以响应一个请求对象。呃，我可以将其视为一个，呃，再次，**API** 端点。我还可以根据结果模式检查请求体，例如，然后只有当匹配时才恢复。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um, and the way this works under the hood is that again we'd be creating a a **URL** and we're going to sleep the um the workflow until a call comes into that endpoint. And this comes with I'm going to run this query. This comes with a lot of extra features like I could also do respond with if I wanted to. Uh this is a full **API API** request handlaw. I could respond with a request object. Uh I can treat this as a uh again **API** endpoint. I could also check the body against the result schema for example and then only uh resume once that matches.

</details>

**Peter Wielander**: 所以这给了你完全的控制。呃，但好处是它在内部连接了 **URL**，你可以看到它暂停了，等待人类点击这个链接。如果你在本地主机上运行，它就是本地主机链接；如果在生产环境中运行，它就是你的部署 **URL**。呃，是的，关于休眠和人工审批，它们都像工作流一样，纯粹是步骤，而且步骤总是运行到完成，对吧？所以休眠是一个步骤，它不像某种执行的暂停，它是一个步骤。

<details>
<summary>Original English</summary>

**Peter Wielander**: So this gives you full control. Um, but the nice thing is it does hook up the **URL** internally and you can see that it's paused waiting for a human to click on this link and if you're running in local host it's a local host link running in production it will be whatever your deployment uh **URL** is. Um yes about both sleep and human approval those are like a workflow is is purely steps and steps always run to completion right so so sleep is a step it's not like the suspension of you know like some sort of like it's not a suspension of the the execution it's like it's it's a step

</details>

**Peter Wielander**: 不，它是。所以我们将其建模为步骤，就可观测性而言，以及就你如何调用它而言，但它是一个内部功能，它会完全暂停工作流和所有步骤，在休眠期间没有任何东西在运行。呃，你也可以同时进行休眠和另一个步骤，如果你愿意，你可以对它们进行 Promise。呃，它在这种意义上作为一个步骤调用工作，它是一个需要一定时间执行的操作。呃，你可以使用 Promise/await 语法来建模，但再说一遍，它会完全暂停，除非当时有其他代码在运行，**Webhook** 也是如此。它被建模为一个步骤，呃，用于可观测性，呃，但它会完全暂停，除非你当时有自动代码在运行。

<details>
<summary>Original English</summary>

**Peter Wielander**: no it is so we model is the step in terms for the observability and for the for how you call it but it is an internal feature that completely suspends the workflow and all steps nothing is running while to sleep. Um you can also do sleep and another step and you can promise them if you want. Um it works as a step call in that sense that it's a execution that takes a certain amount of time. Um and you can use promise await syntax uh to model that but again it completely suspends unless there is anything else running at a time and the same for the web hook. it's modeled as a step um for the observability um but it completely suspends unless you have auto code running at the time.

</details>

**观众**: 所以根据我的理解，如果你的智能体正在运行，呃，带着一个工作流，它会一直运行。

<details>
<summary>Original English</summary>

**观众**: So just from my understanding if you have an agent running uh with a workflow it keeps running.

</details>

**Peter Wielander**: 是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yeah.

</details>

**观众**: 你再次连接到它，比如说通过另一个会话，然后你在这个会话中调用 `sleep`，那会像之前的那个一样，它正在做的事情就停止了吗？所以如果你有两个会话。

<details>
<summary>Original English</summary>

**观众**: You connect to it again let's say through another session and you would call sleep in this session does that like the previous one just like whatever it was doing just goes down. So if you have two sessions

</details>

**Peter Wielander**: 呃，所以假设我们有一个编码会话，对吧，它已经构建了一个应用程序，然后它休眠了一周，对吧，呃，然后我们重新连接到流，是这样吗？

<details>
<summary>Original English</summary>

**Peter Wielander**: um so let's say we we have a coding session right and it already built an app and then it's sleeping for a week right um and then we reconnect to the stream is that the

</details>

**观众**: 不，问题是，呃，假设我启动了一个工作流，它正在计算 **pi** 的数字，它一直运行，对吧？但我连接到同一个沙盒，然后我调用 `sleep`，它会停止计算 **pi** 吗？

<details>
<summary>Original English</summary>

**观众**: no the thing is uh let's say I kick off a work uh workflow and it's calculating like the numbers of **pi** just keeps on right but I connect to the same sandbox and then I call sleep will it stop calculating **pi**

</details>

**Peter Wielander**: 呃，所以你在工作流中这样做的方式是，再说一遍，让我们看看我们如何编写这段代码。

<details>
<summary>Original English</summary>

**Peter Wielander**: um so the way you would do this in a workflow is again let's let's see how we would code this

</details>

**观众**: 你有一个沙盒，在沙盒里休眠。

<details>
<summary>Original English</summary>

**观众**: you have a sandbox there sleep in the sandbox

</details>

**Peter Wielander**: 嗯，你可以连接到这个沙盒，你再次连接到沙盒，然后某个线程调用 `sleep`，整个沙盒会停止吗？

<details>
<summary>Original English</summary>

**Peter Wielander**: well you can connect to this sandbox you connect again to the sandbox and some thread call sleep does the whole sandbox go

</details>

**Peter Wielander**: 所以，沙盒，呃，它是 **Vercel Sandbox**，它有点像，你就把它想象成一个 **EC2** 实例。呃，所以这只是一个帮助我们启动一个实例来运行这个编码智能体，比如运行代码以存储文件。呃，如果你以不同的方式实现，你就不必使用沙盒。呃，而且 `sleep` 调用不会作为 **bash** 调用发生，例如，那两个是不同的。

<details>
<summary>Original English</summary>

**Peter Wielander**: so the the sandbox is uh it's **basel sandbox** which is a sort of just imagine it as an **EC2** instance um so this is just a a helper for us to spin up an instance to run this coding agent like run the code in order to store the files Um if you met this differently you wouldn't have to use sandbox um and the sleep call doesn't happen as a as a bash call for example then two different

</details>

**观众**: 对。

<details>
<summary>Original English</summary>

**观众**: right

</details>

**Peter Wielander**: 就像一个编排的东西，然后当你实际在这个盒子中时，你在沙盒中调用 `sleep`。

<details>
<summary>Original English</summary>

**Peter Wielander**: like an orchestration thing and then when you're actually in this box you you call sleep in a sandbox you're

</details>

**观众**: 好的，所以有两个不同的。

<details>
<summary>Original English</summary>

**观众**: okay so there are two different

</details>

**Peter Wielander**: 对，所以，呃，你可以从终端调用 `sleep`，在沙盒中作为终端命令，或者从工作流中调用 `sleep`，它会暂停工作流。呃，是的，所以我们有这些 **Webhooks** 功能，对吧，我们可以看到在我点击 **URL** 后，它恢复了，然后给我编码了一个 **Pokédex**。呃，这就是我们本次会话中要介绍的所有功能，我想我们有充足的时间进行问答，至少 20 分钟。请开始。

<details>
<summary>Original English</summary>

**Peter Wielander**: right so so there is sleep that you could call from a terminal um in the sandbox as a as a as a terminal command or there sleep from the workflow which suspends the workflow Uh yeah so we have we have these features for for web hooks right and we can see that after I clicked on the **URL** it resumed and then coded me a **Pokédex** um that is all of the features we're going to in the session and I think we have ample time for Q&A about 20 minutes at least please go for

</details>

### 问答环节：高级工作流概念

**观众**: 我如何用这个启动一个 **Claude** 代码会话？

<details>
<summary>Original English</summary>

**观众**: how would I spin up **claude** code session with this

</details>

**Peter Wielander**: 一个云代码会话？远程的还是你？

<details>
<summary>Original English</summary>

**Peter Wielander**: a cloud co session remotely or are you

</details>

**观众**: 不，就是运行并将其作为一个智能体启动，做一些特定的事情，呃，这可能吗？然后对其进行编排，作为智能体。

<details>
<summary>Original English</summary>

**观众**: no kind of run and kick it off as an agent doing certain stuff um is that possible and then kind of orchestrate that as agents

</details>

**Peter Wielander**: 那是可能的。所以 **Claude Code**，呃，是，呃，如果你说的是像一个色调应用，对吧，**Claude Code**，那么它内部没有使用很多工作流功能，呃，所以很难隔离它或知道编排在哪里。你可以编写自己的 **Claude Code** 版本，或者获取 **Plot Code** 源代码并添加工作流和步骤，呃，用于调用，然后它将作为工作流在云中运行。没有办法说，好吧，我有我的步骤，你知道，启动 **Claude** 工作，呃，那种代码，输入这个命令并等待任何东西，那将是一个 **Vercel** 工作流，但我如何实际启动它，比如编写代码？

<details>
<summary>Original English</summary>

**Peter Wielander**: that is possible so **cloud code** uh is um if you're talking about the app like a tonal app right **cloud code** then that doesn't use a lot of the workflow features internally um so it's hard to isolate that or know where the oxidation There is you could write your own version of uh **cloud code** or take the **plot code** source code and add workflow and step um for the calls and that would then run as as a workflow in the cloud. There's no way to say like okay I have my steps you know spin up claw work uh kind of code type this command and wait for anything that would be a **versel** workflow but how would I actually boot drop it like code it

</details>

**Peter Wielander**: 是一个命令，对吧？所以你知道你在问什么。

<details>
<summary>Original English</summary>

**Peter Wielander**: is one command told right so you know what you're asking

</details>

**观众**: 如果你，所以如果你正在调用 **Claude Code**，呃，在一个，呃，所以造成了混淆，比如它在哪里运行，对吧？对于这里的编码智能体，如果编码智能体运行，创建文件夹，那个命令在一个步骤中运行，但它是在一个沙盒中运行的，沙盒是一个虚拟机，所以这个虚拟机的状态不是由工作流本身管理的。呃，所以如果你在虚拟机上调用 **Claude Code**，那本质上就像一个 **SSH** 会话，但如果你在工作流中运行任何智能体或步骤，对吧，那些步骤将是可恢复的，呃，并且可以通过工作流模式进行观测。

<details>
<summary>Original English</summary>

**观众**: if you so if you're calling **cloud code** uh in a um so made as a confusion of like where this is running right for a coding agent here if the coding agent runs make the right for like creating creating a folder that make the command runs in a step but it runs against a like in a sandbox there sandbox being a **VM** and so this **VM** state is not managed by the workflow itself um so if you call **cloud code** on the **VM** that's essentially treated like an **SSH** session but if you run any any agents or steps within the workflow right those steps are going to be resumable um and observable through the workflow pattern

</details>

**观众**: 呃，另一个问题，我如何控制我的智能体访问互联网和做事情的权限？

<details>
<summary>Original English</summary>

**观众**: Um, another question, how do I control um what my agent has access to from going out to the internet doing stuff?

</details>

**Peter Wielander**: 这将是你为智能体已经做的任何事情，对吧？如果你最终将进行工具调用和流调用到 **LLM** 提供商，对吧？呃，那已经在你的代码中，大概是这样，你已经用来控制权限的任何东西，比如你的工具调用，例如，对吧？如果你的工具调用允许你删除 **S3** 中的资源，例如，那么你作为调用者可以以通常的方式编写任何你想要的代码。

<details>
<summary>Original English</summary>

**Peter Wielander**: This would be uh whatever you're whatever you're already doing for the agent, right? If you if you in the end you're going you're going going to be doing tool calls and stream calls to the **LM** provider, right? um that is that is in your code presumably already and whatever you're already using to control permissions there like your tool calls for example right if your tool call uh allows you to delete a resource in **S3** for example then you as call uh can write whatever code you want uh in the usual way that

</details>

**观众**: 这是我的工作去实现它，但它没有一些包装器。是的，都在沙盒里。

<details>
<summary>Original English</summary>

**观众**: it's my job to implement it but it's not that it has some wrappers by the end Yeah, all in the sandboxes.

</details>

**Peter Wielander**: 工作流是一个通用的持久化执行编排层，不一定提供用于运行代码或运行第三方代码或运行智能体代码或创建文件的沙盒。呃，沙盒在这方面很好，因为每个沙盒实例都是一个新的虚拟机，呃，它只持续你的会话持续的时间。

<details>
<summary>Original English</summary>

**Peter Wielander**: Workflows is a general orchestration layer for durable execution um and doesn't necessarily provide a sandbox for running code or um like running third party code or running agent code or making files. Uh that's something that the sandbox is good for because every sandbox instantiation is a new **VM** um that only lasts for as long as your session lasts.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yes.

</details>

**观众**: 是的。所以，呃，如果我正在运行工作流，呃，我正在通过我的兄弟创建很多智能体工作流，呃，那会怎样？它会在你的系统上排队吗？它如何运行？我们有什么速率限制或并发控制可以使用吗？

<details>
<summary>Original English</summary>

**观众**: Yeah. So uh if I'm running workflows uh and I'm like creating a lot of agent uh workflows through my brother uh how does that do does that get queued up on your system? How does that get run? Is there rate domain or currency and controls that we can uh use?

</details>

**Peter Wielander**: 是的。所以这，呃，这涉及到一些模式，所有这些都将得到支持，呃，并且在很大程度上现在已经得到支持，那就是如果你部署到 **Vercel**，对吧，像往常一样，如果你使用 **Next.js**，每次部署都是一个单独的实时 **URL**，对吧，如果你调用它，它会启动一个无服务器实例，所以你的工作流绑定到部署。所以如果你有一个智能体，它运行了一周，但你在这周内部署了五次，那些新的部署将与原始工作流隔离，原始工作流将运行到完成，然后任何新的工作流将在新的部署上运行，我们还将允许在它们之间进行升级。所以如果你有一个运行了一年的工作流，对吧？因为它像每个月给我一个总结，对吧？但你有新的代码，你希望工作流，呃，你知道，获取其当前状态并使用新的代码来运行工作流。呃，**UI** 中会有一个升级按钮，它通过检查所有步骤签名和所有现有事件来检查旧工作流和新工作流之间的兼容性，然后你可以升级工作流。呃，或者你目前已经可以取消并使用新的工作流重新运行。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yes. So this is this is uh this goes into sort of uh some of the patterns that all of this is going to be supported um and for the most part is supported right now which is that if you're deploying for example to go right and as usual if you do **nextjs** every deploy is a separate uh like live **URL** right that if you call it spawns up a serverless instance and so your workflows are bound to the deployment. So if you have something that something very nice that you get here is if you an agent and it runs for a week but you deploy five times in during this week those new deploys are going to be isolated from the original workflow and the original workflow is going to run to completion and then any new workflow will run on the new deployments and we'll also allow upgrading between those. So if you have a a workflow that runs for a year, right? Because it's like every month give me a summary of so and so, right? But you have new code and you want the workflow to uh you know take its current state and use the new code for the workflow. Um there's going to be an upgrade button in the **UI** that checks for compatibility between the old workflow and the new workflow by checking all of the step signatures and all of the existing events and then you can upgrade the workflow. Um or you can currently already cancel and rerun with the with the new workflow.

</details>

**观众**: 呃，这些工作流步骤有超时吗？

<details>
<summary>Original English</summary>

**观众**: Um is there a timeout for those workflow steps?

</details>

**Peter Wielander**: 哦。

<details>
<summary>Original English</summary>

**Peter Wielander**: Oh

</details>

**观众**: 是的。所以，呃，如果你正在使用无服务器，对吧，无论你使用的是 **Lambda** 还是其他平台，或者你的无服务器函数都会有超时。好处是每个步骤都在自己的无服务器函数中运行。所以超时只适用于状态。所以如果你有一个单独的步骤，它有运行超过五分钟，可能 15 分钟的风险，取决于平台，呃，那么你可以将其分成两个步骤，呃，或者如果它达到了超时，对吧，它会失败，它会重试，也许会更快，呃，你会在 **UI** 中看到，哦，这个步骤在 15 分钟后被重试了很多次，对吧，大概是因为它失败了，然后你可以去，呃，将其分成两个步骤，升级工作流，它就会从那里继续。

<details>
<summary>Original English</summary>

**观众**: yes. So uh if you're doing serless right and whatever platform you're on whether it be like **lambda** or something else or or uh your serless functions are going to have timeouts. The nice thing is that every step runs in its own serless function. So the timeouts only apply to the stats. So if one of individual step you have runs the risk of running more than five minutes maybe 15 minutes depending on platform um then you can split into two steps um or if it's if it runs the timeout right it'll fail it'll retry maybe the will be faster um and you'll see in the **UI** that oh this step is being retrieded after 15 minutes a bunch of times right presumably because it's failing and then you can go and uh split it into two steps upgrade the workflow and it'll just continue from

</details>

**Peter Wielander**: 呃，是的，另一点是关于工作流排队，比如我多次触发智能体。

<details>
<summary>Original English</summary>

**Peter Wielander**: And uh yeah the other point was uh around queuing workflows like I trigger the agent a bunch of times.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yeah.

</details>

**观众**: 它会被排队吗？这个过程是怎样的？

<details>
<summary>Original English</summary>

**观众**: Does it get cued? Like how does that process?

</details>

**Peter Wielander**: 对。你可以用不同的方式来建模。呃，现在我们再次从一个 **API** 路由来做这件事，每次调用这个 **API** 路由都会创建一个新的工作流。呃，这主要是，再说一遍，你唯一的交互式输出在这种情况下是一个流。呃，所以它会做一些事情，它会写入流。没有人看流。我们不知道工作流是否正在运行。呃，你可以启动 10 个这样的工作流，对吧？呃，它们将在后台运行。呃，你可以创建多少个基本上没有限制，因为它们都运行在无服务器函数中。所以你可以根据你的提供商的计算能力进行扩展。呃，这有很多队列，呃，你也可以列出活动运行，对吧？这里有一个 **API** 可以让你与你的运行进行交互，查看所有正在运行的运行，查看它们在哪个版本上，呃，它们在哪个步骤上，呃，取消它们。我希望这能回答你的问题。哦，并发性，是的，呃，你也可以，所以现在是无限并发，但呃，很快我们就会添加每一步或每个工作流的并发性，你可以说这个工作流最多只能同时运行 10 次，任何额外的队列添加都会，比如任何额外的启动都会排队，所以它会等待那 10 个减少，然后滑入。你也可以用它来为你的产品设置一个免费层，例如，你的免费层在任何时候都有 10 个实例在运行，一些后来加入的人会等待队列，但你的专业层有无限并发。

<details>
<summary>Original English</summary>

**Peter Wielander**: Right. You can model this in in different ways. Uh right now again we're doing this from like a **API** route where every call to this **API** route will create a new workflow. Um that is mostly again the only the only the only interactable output you have is a stream in this case. Um so it'll do things it'll write to the stream. Nobody looks at the stream. We don't know the work before is running. Uh you can kick off 10 of these, right? Um and they're going to be running in the background. Um there is essentially no limit to how many you can create because they all run in serless functions. So you can scale for as much compute as there is in your provider. um which is a lot of cute and um you can also list active runs right there's an **API** here for doing C interfacing with your runs look at all of the runs that are running look at which version they're on uh what step they're on um cancel them I hope that answers your question oh concurrency yes um you can also so right now it's infinite concurrency but uh very soon we'll add per step or per workflow concurrency where you can say This workflow is only supposed to run at most 10 times at the same time and any extra Q addition gets like any extra start gets cued so that it will wait for those 10 to uh reduce and then slide in. You can also use that to have a free tier for example on your product where there's 10 instances running for your free tier at any one point and some people that come in later will wait for the queue but your pro tier has infinite concurrency.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yeah.

</details>

**观众**: 我能以某种方式回滚步骤吗？比如说我有 10 个步骤，但在第七步我觉得，好吧，让我们回到第三步。是否有可能像重置工作流的状态一样？

<details>
<summary>Original English</summary>

**观众**: Can I roll back steps in a way that let's say I have 10 steps but in step seven I think like okay let's go back to step three. Would that be possible to like reset the state of the workflow or

</details>

**Peter Wielander**: 你技术上可以这样做。我们目前不支持，但实现起来会非常容易，因为呃，你每个步骤的输入和输出都被缓存了，我们可以在任何时候进入工作流并从那里开始播放。所以我们需要在 **UI** 中将其公开为一个函数，以便从某个步骤恢复。但是的，那将是可能的。更可能的是你想做的是，因为你控制着工作流。所以你想在那里记录并使用这个 **JavaScript**，可能需要进入状态或做一些事情，只是继续增长。

<details>
<summary>Original English</summary>

**Peter Wielander**: you can technically do this do this? We current we don't currently support it but it would be very easy to implement because uh you have every step again the inputs and outputs are cached and we can enter the workflow at any point and sort of play from there. So we'd need to expose this in the in the **UI** to as a function to resume from step so and so. But yes, that would be possible. more more likely what you want to do because you control the workflow. So you wanted to log there and use this **JavaScript** and might have to step into state or do something just keep growing.

</details>

**观众**: 也许是我的第二个问题。所以如果你通过这些步骤，你说，好吧，你正在传递输入和输出，它们就是被缓存的东西。有没有办法附加元数据，或者它总是必须在函数的输入输出中？

<details>
<summary>Original English</summary>

**观众**: Maybe my second question. So if you go through the steps you said, okay, you're passing out input and outputs kind of across and that's kind of what get cached. Is there like a way to attach metadata or does it always have to be in kind of the input outputs of the function?

</details>

**Peter Wielander**: 你也可以附加元数据。呃，我们很快会有一个标签 **API**，你可以在工作流运行的任何时候向工作流添加任意标签，你也可以使用这些标签来决定是否提前或重复你的运行。呃，是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: You can also attach metadata. uh we'll have a tagging **API** soon where you can add arbitary tags to the workflow at any point in the workflow run and you can use those tags also to maybe decide whether to early or dd duplicate your runs. Um yeah.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yes.

</details>

**观众**: 关于部署，我们是否必须绑定到 **Vercel**，还是有可能？

<details>
<summary>Original English</summary>

**观众**: About the deployment are we tied to **versel** or is it possible to like

</details>

**Peter Wielander**: 正如我之前提到的，呃，这有两个方面。一个是框架的前端部分，呃，文档在 `use workflow.dev` 上。呃，你可以看到前端部分，呃，它也可能与 **API** 层一起工作。呃，我们目前支持所有这些平台。呃，很快会有更多支持。然后是单独的部署目标，对吧，**Next.js**，你现在可以部署到任何地方，对吧，这适用于任何你可以部署 **XJS2** 的地方，例如，或者任何其他这些框架。呃，我们有针对 **Postgres** 示例的第一方实现，它使用 **Postgres** 作为持久性层，呃，随着我们构建这个并社区的加入，我们将支持基本上任何后端，呃，因为 **TypeScript** 框架底层连接到任何存储或队列层，所以任何提供存储、数据库或队列的东西都可以用作后端。

<details>
<summary>Original English</summary>

**Peter Wielander**: as I mentioned before uh so there there's two aspects to this. There's the the front end side of the framework uh the docs are on `use workflow.dev`. Uh you can see for the front end sides um which is also sort of the the uh **API** layer it might work with. Uh we currently support all of these platforms. um and more coming soon. And then there's separately the deployment target right **next.js JS** you can deploy to anything right now right this would work with anything you can deploy **XJS2** for example or any of these other frameworks um and we have implementations first party implementation for a **Postgres** example that uses **Postgres** as the dability layer um and as we'll be building this out and community comes in we'll have support for essentially any back end um because underneath the **TypeScript** framework connects to any storage or Q layer so anything that provides a storage a database uh or **AQ** can be used the back end for for this

</details>

**观众**: 相关问题，对于可观测性，我们也喜欢提供给 **DataDog** 等工具吗？

<details>
<summary>Original English</summary>

**观众**: related question for the observability we also like providers to **data dog** stuff

</details>

**Peter Wielander**: 是的，所以，呃，我们有，呃，多种东西。我们有一个 **API**，你可以用它来直接访问数据，呃，我们还有开源的 **UI** 组件，你可以用它们来显示数据，然后你可以将其导出到 **DataDog**。呃，如果你愿意。是的。

<details>
<summary>Original English</summary>

**Peter Wielander**: yeah so uh we we have a uh multiple things we have an an **API** that you can use to to uh access data directly um and we also have open source **UI** components that you can use to display it and then you can export this to **data** Um if you want. Yeah.

</details>

**观众**: 你谈到了一点屏幕，并谈到它本质上就像一个工作。呃，工作流中是否有更多的调度和定时控制？所以，呃，因为这只是 **TypeScript**，呃，如果你在一个工作流中，呃，你可以做一些事情，比如我们调用 `sleep`，例如，对吧，这只是会在一天后恢复，抱歉，一天后恢复。但你也可以做的是，呃，这只是一个 Promise，或者你可以将其视为一个 Promise，所以你可以做 `while true sleep(one day)`，然后，呃，你知道，运行你的代码，它会每天运行一次。如果你想每天凌晨 2 点运行一次，呃，你可以说，你知道，多少时间，到明天凌晨 1 点。谢谢你，**AI**。然后，你知道，完成。呃，你也可以每小时醒来一次，做一些检查，看看你是否真的想运行其余的代码。如果不想，就回去睡觉。呃，你可以在这里用 **con** 做任何事情。如果你想要并发控制，呃，或者任何其他确定性控制，你在这里有 **TypeScript** 中的控制流。你可以检查外部 **API**，例如，呃，你需要将其封装在一个步骤中，但如果你想实际检查数据并从中确定，你可以进行 `fetch` 调用。

<details>
<summary>Original English</summary>

**观众**: You talked about screen a little bit and talked about how it essentially like job. Uh do is there more scheduling and chron controls within workflow? So uh because it's just **typescript** uh if you're in a workflow um you can do something like let's say we call `sleep` for example right this this would just be resume in a sorry resume in one day but what you can also do is uh this is just a promise or you can treat it as a promise so you can do `while true sleep one day` and then uh you know do your code and it'll run once a If you wanted to run once a day at 2 a.m. um you could you could say you know how much time to you know 1:00 a.m. tomorrow. Thank you **AI**. And then you know done. Um and you could also wake up every hour do some checks whether you actually want to run the rest of the code. If not go back to sleep. Um anything you can do with con to do here. And if you want again concurrency controls something um or any kind of other deterministic controls you have control flow in **Typescript** here. You can check check external um **APIs**. for example, um which you have to wrap in a step, but you can make `fetch` calls if you want to actually check data and then determine from there.

</details>

**观众**: 所以如果你想做一个，呃，每隔一段时间，每天都运行的智能体，你可以有一个调度包装器，调度工作流，它会启动另一个智能体工作流。

<details>
<summary>Original English</summary>

**观众**: So if you if you wanted to do a uh agent that runs every once in a while every day, you could have a scheduling wrapper scheduling workflow that launches another agent workflow

</details>

**Peter Wielander**: 也可以。是的，你可以，你可以，你可以从工作流中启动工作流，或者你可以这样做，对吧，你休眠一天，然后调用你的智能体，然后根据你想要写入的流，这都在同一个流中，大概你不想那样，也许你也可以，呃，那个允许你做命名空间，对吧，呃，一个，呃，你可以在这里获得一个新的可写流，然后每次运行时，你可以有一个新的流，它有一个确定性的，呃，名称，你可以选择连接到哪个流。

<details>
<summary>Original English</summary>

**Peter Wielander**: also. Yeah, you can you can you can start workflows from workflows or you could do this right where you uh sleep a day and then call your agent and then depending on the the on the stream you want to right this is all right in the same stream presumably you don't want that presum maybe you can also uh thatable allows you to do namespace right uh one um and you can get a new writable here and then every time it runs you can have a new stream that has a deterministic uh name and you can choose which stream to connect to.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yeah.

</details>

**观众**: 有取消逻辑吗？比如说我有一个东西等待了很长时间，然后我决定不再需要它了。我如何才能阻止一个正在休眠的东西醒来？

<details>
<summary>Original English</summary>

**观众**: Is there cancellation logic? Like say I have something waiting for a long time and then I decide to not have that be a thing. How can I just like stop an existing sleep from waking,

</details>

**Peter Wielander**: 对吗？所以你可以从可观测性 **UI** 或从 **API** 或 **CLI** 取消你的工作流。呃，所有这些途径，呃，你都可以调用取消，或者你也可以说，好吧，我甚至不知道我是否想在缩放结束时休眠，你可以做的是，呃，让我删除这里这部分，你可以做一些事情，比如，你知道，`await promise grace`，你可以休眠一天，你也可以做一些其他的事情，实际上是人工审批，也许如果人类点击一个按钮，比那个早醒来。好的。呃，好了。

<details>
<summary>Original English</summary>

**Peter Wielander**: right? So you can cancel your workflows from the observability **UI** or from the from the **API** or the **CLI**. um all of those avenues uh have you can call cancel or you can also say well I don't even know if I want to sleep on the end of the zoom what you can do is do a uh let me remove this part here you can do something like you know `await promise grace` and you can do the `sleep one day` and you can do some other actually human approval maybe wake up earlier if a human clicks a button than the one Okay. Um, there you go.

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: Yes.

</details>

**观众**: 呃，如果你有多个智能体在运行，呃，你建议它们之间如何通信？

<details>
<summary>Original English</summary>

**观众**: Um, if you have multiple agents running, uh, what would be your advised way of having them communicate with each other?

</details>

**Peter Wielander**: 呃，如果你，呃，这取决于你正在寻找哪种通信。

<details>
<summary>Original English</summary>

**Peter Wielander**: Um, if if you're sort of depends on what kind of communication you're looking for.

</details>

**观众**: 启动一些东西，它们正在工作，但我不太确定。所以在步骤中，呃，你可以访问所有代码 **API** 或 **Node.js API**、`fetch` 等。你可以有一个数据库，对吧？如果你想自动化你的数据源，你可以有一个数据库。呃，如果你想有多个智能体，呃，你可以，呃，使用一个，你可以使用一些相同的流来写入并共享一个流。

<details>
<summary>Original English</summary>

**观众**: Firing things off and they're working, but I wouldn't sure there was. So in steps um you have access to all code **APIs** or **NodeJS API** `fetch` etc. You can have a database, right? If you want to automate over your own data source, you can have a database. Um, if you want to have multiple agents, um, you can, uh, use one, you can use some of the same streams to write to and share a stream.

</details>

**Peter Wielander**: 呃，是的，我想最终还是取决于我们自己，我们的步骤是否是幂等的，如果它们在中间失败时有副作用，那它是否行为良好，那不是你的编排层的问题，那是我们自己的问题，对吧？

<details>
<summary>Original English</summary>

**Peter Wielander**: Um yeah, I guess it's up to us ultimately with our steps that they're like I demp it in and if they have side effects when they fail halfway that it's well behaved like that's that's not at your orchestration layer like that's up to us, right?

</details>

**Peter Wielander**: 对于工作流层，我们保证没有副作用，因为如果你尝试导入一些会产生副作用的代码，我想它只会说无法编译，你知道，不要这样做。呃。

<details>
<summary>Original English</summary>

**Peter Wielander**: for the workflow layer, we guarantee that there's no side effects because if you try to import some code that does side effect, I think it'll just it'll just say like can't compile, doesn't you know, don't do it. Um,

</details>

**观众**: 那对工作流来说是真的，但对步骤来说呢？

<details>
<summary>Original English</summary>

**观众**: that was true for workflows, but for steps

</details>

**Peter Wielander**: 对于步骤，它可以有副作用。这正是重点。

<details>
<summary>Original English</summary>

**Peter Wielander**: for steps, it can have side effects. That's sort of the point.

</details>

**观众**: 所以，这取决于我们，如果它失败了，我们需要确保它是事务性的，并且可以重新运行。

<details>
<summary>Original English</summary>

**观众**: So, it's up to us like if it fails, we need to make sure that transactional and it's rerunnable and

</details>

**Peter Wielander**: 幂等性。这里有一些错误控制你可以添加，如果一个步骤失败了，它通常会带着一个错误失败，这个错误会告诉工作流编排层你可以重试它。你也可以捕获这个错误并说，好吧，如果这是这种错误，不要重试它。而是向人类发出信号去做一些事情，或者尝试其他途径。是的。看看还有没有其他问题。

<details>
<summary>Original English</summary>

**Peter Wielander**: identity. There's some there's some uh there's some error controls you can add here where if a step fails, it'll usually fail uh with a an error that tells the workflow station layout that you can retry it. You can also catch this error and say, well, if it's a you know this kind of error, don't retry it. Instead, signal to the human to do something or try this other avenue. Yeah. See there's something else.

</details>

**观众**: 你有没有一个分支，里面有你刚刚做的完整代码？

<details>
<summary>Original English</summary>

**观众**: Do you have one of the branches that has like the complete code for what you just did?

</details>

**Peter Wielander**: 是的。所以，呃，它们都建立在彼此之上。所以 `conf-hooks` 分支有**人工审批工具**调用、**休眠工具**调用、可恢复流，呃，以及使用 **Webflow**。呃，我将看看如何发布一个通用访问。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yes. So, uh they all built on top of each other. So, the `conflooks` branch has the **human approval tool** called the **sleep tool** call. resumable streams um and using **web flow**. Uh I will see how I can post one general access

</details>

**观众**: 直接发推特。

<details>
<summary>Original English</summary>

**观众**: just tweet it out.

</details>

**Peter Wielander**: 是的，我们会那样做。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yes, we'll do that.

</details>

**观众**: 呃，工作流处于测试阶段，所以。

<details>
<summary>Original English</summary>

**观众**: Uh the workflows are in beta and so

</details>

**Peter Wielander**: 是的。是的。呃。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yes. Yeah. Um

</details>

**观众**: 好的。是的。呃，是的，我忘了提这个重要的，呃，工作流开发，我相信我们有一个 **GitHub** 正在生产中使用，特别是持久化智能体方面。

<details>
<summary>Original English</summary>

**观众**: okay. Yeah. Uh yes, I forgot to mention this important uh workflow devel I believe and we have a a **GitHub** using production especially durable agent stuff

</details>

**Peter Wielander**: 内部我们有，我想每天有超过 100 万个工作流在运行。是的，主要是为了让 **API** 稳定，解决一堆问题。但我喜欢的一点是，我们实际上有更多的问题。但是，呃。

<details>
<summary>Original English</summary>

**Peter Wielander**: internally we have I think more than 1 million workflows have been run on on a day. Yeah, it's mostly just like getting the **API** to be stable and a bunch of issues. But one of the things I love is that we actually have more than issues. But uh

</details>

**观众**: 是的。

<details>
<summary>Original English</summary>

**观众**: yeah,

</details>

**观众**: 如果你有什么需要或非常想看到的功能，呃，我们在 **GitHub** 上有一个 **RFC** 部分，用于讨论即将推出的功能，我们将在 **GA** 发布时或之后不久发布的功能。然后是开放问题，对吧？呃，你可以在那里添加任何问题，大概我们很快就能解决，或者社区中的某个人。再说一遍，这是，呃，所有帮助工作流开发在任何类型的云后端或你的自制后端上运行的适配器。所有这些适配器也都是开源的。所以你可以确切地看到发生了什么，你可以将它连接到你自己的后端，并且只有源代码，呃，只需查看该代码，我们很乐意帮助你。你能谈谈，呃。

<details>
<summary>Original English</summary>

**观众**: if there's any feature that you that you need or that you really want to see, uh we have an **RFC** section on **GitHub** uh discussions for upcoming features, things that we'll ship by **GA** or shortly afterwards. And then open issues, right? Um where you can add any issue and presumably we'll be able to it soon or someone from the community. Again, this is uh all of the adapters that help workflow develop run on any kind of cloud back end or your homebrew back end. All of those adapters are also open source. So, you can see exactly what's happening and you can connect it to your own back end and only the source um just looking at that code and we'll be happy to help you. Can you talk about uh

</details>

**Peter Wielander**: 呃，是的，呃，你想知道什么？

<details>
<summary>Original English</summary>

**Peter Wielander**: uh yeah um what would you like to know

</details>

**观众**: 路线图，比如。

<details>
<summary>Original English</summary>

**观众**: the road map for like

</details>

**Peter Wielander**: 对，所以对于版本控制，呃，我稍微谈了一下，呃，跨版本升级运行的能力，对吧，呃，版本控制将非常简单，我们将为所有你创建的版本提供一个 **CRUD** 界面，对于大多数人来说，这将是一个部署，对吧，如果你部署你的，呃，你知道，**CI** 将你的代码部署到预览环境或生产环境，呃，每次部署都将是一个版本，呃，你可以在任何时候使用工作流 **API** 列出这些版本，并且运行将知道它正在哪个版本上运行，你可以调用 `run.upgrade` 升级以查看它是否与新版本兼容，然后将其升级到该版本，我知道还有其他事情。

<details>
<summary>Original English</summary>

**Peter Wielander**: right so for versioning um I talked a little bit about about uh the ability to upgrade runs across versions right uh versioning is going to be very simple where we have a **crowd** interface for all of the versions that you have created which for most people will be a deployment right if you deploy your um you know **CI** deploys your code to a preview environment or production uh every deployment will be one version um and you can list those versions at any point uh using the the **workflow API** and the run will know which version it's running on and you can call `run.upgrade` upgrade to see if it's compatible with a new version to upgrade it to that version and I know any any more things

</details>

**观众**: 版本。

<details>
<summary>Original English</summary>

**观众**: version

</details>

**Peter Wielander**: 不，是的，所以，呃，每次部署都会有自己的 **URL**，不仅在 **Vercel**，而且大概在你的，如果你去 **AWS Lambda**，例如，对吧，呃，每次部署都有自己的 **URL**，所以 **Webhooks** 将适用于它自己的 **URL**，呃，这意味着你不需要担心版本控制，除了在你第一次创建部署时标记一个版本。呃，然后你认为是你主要版本的那个，就是你通过公共 **API** 路由到的那个。

<details>
<summary>Original English</summary>

**Peter Wielander**: no yeah so so every every deployment uh gets its own **URL** and not just in **basel** but presumably in your if you go to **AWS lender** for example right uh every deployment has its own **URLs** so the web hooks would apply to its own **URLs** um which means that you don't need worry about versioning except for tagging a version when you first create the deploy. Um and then whatever you think is you want to be your main version is the one you route to via your public **API**.

</details>

**观众**: 是的，我想，呃，抱歉，显然我以前在我的经验中从事过这方面的工作。我认为很多人不幸的是，它就像隔离一样，但有时你希望在原地修复已经存在了一段时间的东西。

<details>
<summary>Original English</summary>

**观众**: Yeah, I think um sorry obviously I used to work at my experience in this stuff. I think a lot of people unfortunately it's like isolation of but sometimes you want to sort of fix in place things that have been a while.

</details>

**Peter Wielander**: 是的。迁移，几乎就像智能体迁移到新版本。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yeah. Migrations almost like agent migrations to new version.

</details>

**Peter Wielander**: 是的。所以这和升级是同一个意思，对吧？但是如果你有一堆运行都在某个特定版本上，你已经发布了新代码，并且你希望所有这些运行都升级到新版本或迁移，对吧？呃，在 **UI** 中，你将能够选择你想要多少个运行，或者对于 **CLI**，你将能够获取一个列表，然后说对于这 20 个 **ID**，我想将运行升级到这个版本。呃，它会进行内部检查，检查我是否可以从某个点恢复这些工作流？呃，比如我是否可以在原地迁移它们，因为步骤签名重叠，或者如果不能，它会提供你取消所有现有运行并使用相同输入的新版本重新运行它们的选项。呃，如果你以兼容的方式编写代码，呃，将会有不同的选项用于原地迁移。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yeah. So this is the same as as upgrading in that sense, right? But if you have a bunch of runs that are all on a certain version and you have ship new code and you want all those runs to be upgraded to the new version or migrated, right? Um, in the **UI** you'll be able to select however many runs you want or for the **CLI** you want to be able to get a list and then say for these 20 **IDs** I want to upgrade the run to this version. Uh, will it'll do an internal check of of can I resume these uh workflows from a certain point? um like can I migrate them in place sort of because the step signatures overlap or if not it'll offer you the option to cancel all of the existing runs and rerun them on a new version of the same input. Um if you write your code in a way that's compatible again um there's there's going to be different options for for in place migrations.

</details>

**观众**: 它如何检测到代码部分没有改变？所以因为我们有，因为我们本质上是一个编译器插件，呃，我们可以获得完整的兼容性，并且我们正在将这些输入和输出签名保存到一个清单中，我们正在为版本上传这个清单，所以对于每个版本，我们可以知道每个步骤的签名是什么，以及工作流本身的签名，以及介于两者之间的所有其他事情。

<details>
<summary>Original English</summary>

**观众**: How would it detect that just by code parts not being changed? So because we have because we're essentially a compiler plugin uh we can get full a uh compatibility and and we are saving this a uh the inputs and outputs signatures um to a manifest that we're uploading for the versions and so for every version we can tell what are the signatures for every uh step and for the workflow itself and all the other things that are happening in between.

</details>

**观众**: 这里的另一件事是工作流函数本身。所以是的，我们在执行期间播放了很多次。

<details>
<summary>Original English</summary>

**观众**: Another thing here is the workflow function itself. So yes, we played a whole bunch of times during execution do anyway.

</details>

**观众**: 所以当你想升级你的事件时，它有点像你事件上的代码。

<details>
<summary>Original English</summary>

**观众**: So when you want to upgrade your event, it's kind of the code that you've got on the event against it.

</details>

**Peter Wielander**: 当然。

<details>
<summary>Original English</summary>

**Peter Wielander**: Sure.

</details>

**观众**: 很多变体，比如我做了一个步骤，所有之前的步骤都保持不变，或者，你知道，这个步骤改变了。所以就像你，如果你所有事情都自动完成，感觉就像，好吧，我可以直接带着所有智能体宕机或升级。

<details>
<summary>Original English</summary>

**观众**: There's a lot of variations between kind of I do a step all the previous steps stayed the same or you know this one got changed. So it's like you like if everything's done automatically it feels like okay I could go down immediately with all my agents or up

</details>

**Peter Wielander**: 有两种方式你可以，有两种方式你可以进行版本控制，我想关键在于你为一个平台构建时，你假设你的代码总是在同一个地方演变。所以我们看到的是，当你发布你的工作负载的第一个版本时，最终你会得到，但当你开始更新时，你开始新的版本，你的代码现在里面有所有那些东西，你无法保证实际运行的代码是哪个版本。默认的假设是我的代码可以在任何地方运行事件日志，最终你会得到一个很好的开始，然后你必须做模型。

<details>
<summary>Original English</summary>

**Peter Wielander**: there's two ways you could there's two ways you could be versioning and I think the thing with is you build for a platform where you assume that the code your code is always going to evolve in the same place. So what we've seen is you end up with as you start your first version of your workload that you ship but as you start making updates to you starting new version your code now has all the stuff in there that has you have no guarantees of what version running on the actual code that you're running. The default assumption is that my code could be running an event log anyway and you end up with starts great and then you have to do model

</details>

**观众**: 但这和杀死和维持是一样的。已经永远存在了。有一个自然的步骤可以去说，酷，我们只是假设你，你推送了一个新版本的工作流，你固定了所有东西，所以你不必担心那种心智模型，那种代码，而是时候去按一个按钮了。我可以进去，甚至可以选择，你知道，理论上精确选择那个按钮有多少。你可以做很多事情，因为你有了，但好处是，那是一个困难的美国，你知道，对我们来说，如果做得好，希望会非常。

<details>
<summary>Original English</summary>

**观众**: but it was the same with like killing and sustaining already had forever. there's a natural step to go say cool we're just gonna assume that you you push a new version of the workflow you pin everything and so you don't have to worry about that mental model that code but instead it's time to go up push button I can go in or even choose like you know theoretically choose exactly how much of that button get there's a lot of stuff that you can do on top since you have But what's nice is that's that's a hard **US** and you know for us to build when done well hopefully very

</details>

**Peter Wielander**: 我不知道我们快完成了。

<details>
<summary>Original English</summary>

**Peter Wielander**: I don't know we're close to done

</details>

**观众**: 我想我们快完成了。

<details>
<summary>Original English</summary>

**观众**: I think we're close to done

</details>

**Peter Wielander**: 呃，我们会留下来回答更多问题，所以，呃。

<details>
<summary>Original English</summary>

**Peter Wielander**: uh we'll be sticking around for more questions so uh

</details>

**观众**: 我想，好吧，假设我是一个第三方，但我想另一部分是可观测性。呃，我没有，我，我喜欢在里面摸索，我没有看到很多仪表板。我期望你显然会构建一个，对吧？呃，然后我还想把它导入到我的 **DataDog** 中。看看那里，不是 **DataDog**，但这是什么意思？

<details>
<summary>Original English</summary>

**观众**: I guess okay so let's say I'm a third party like But I think the other part is observability. Um I don't I I like poked around in I don't see like much of a dashboard. I expect that obviously you're going to build one, right? Uh and then I also want to import it into my **data dog**. See there not a **data dog** but hey what's this supposed

</details>

**Peter Wielander**: 呃，**OpenTelemetry** 跨度，呃，我们将能够发出，呃，我们将默认向跨度添加一些上下文，大概是这样。呃，所以如果你只是通过 **DataDog** 传输你的跨度，它已经会包含很多关于步骤和事件日志的信息。呃，你也可以提交你自己的，呃，遥测数据，显然。

<details>
<summary>Original English</summary>

**Peter Wielander**: uh **open telemetry** spans uh which we'll you know be able to emit um we'll add some context to the spans by default presumably. Uh so if you if you just pipe your spans through **data dog** it'll already have a lot of information on the steps and event log. Um and you can also submit your own uh telemetry obviously.

</details>

**观众**: 那么这是计划吗，还是你有一方？

<details>
<summary>Original English</summary>

**观众**: So is that the plan or is it you have the first party?

</details>

**Peter Wielander**: 计划是我们将，我们将第一方支持添加一些，比如所有与步骤和事件日志相关的上下文。呃，将，呃，大概会导出一个帮助函数来向跨度添加这些信息。呃，然后你想要在其中标记的所有信息都由你决定。

<details>
<summary>Original English</summary>

**Peter Wielander**: The plan is that we will we will first party support adding some of the like all of the sort of step and event log related context. Um will uh presumably export a helper to add some of these information to the spans. Um and then every all information you want to tag in there is up to you.

</details>

**观众**: 我能，呃，以某种方式将秘密附加到工作流中，以便当我需要更新它们时，它们就像，你知道。

<details>
<summary>Original English</summary>

**观众**: Can I uh attach like secrets to workflow in a way that when I need to update them they kind like you know

</details>

**Peter Wielander**: 是的。所以，呃，首先，现在你可以检查所有输入和输出数据，对吧，这显然是，呃，对于你这个有 **API** 访问权限的人来说，呃，通常通过 **Web API** 消费或启动工作流的人不会有这种权限。

<details>
<summary>Original English</summary>

**Peter Wielander**: Yeah. So uh for one like right now you can you can inspect all of the input and output data right and it's obviously uh for you as a someone with access to the **API** uh which someone consuming the workflow or starting the workflow through web **API** wouldn't usually have

</details>

**观众**: 不。

<details>
<summary>Original English</summary>

**观众**: no

</details>

**观众**: 步骤中的步骤。

<details>
<summary>Original English</summary>

**观众**: steps in steps

</details>

**Peter Wielander**: 是的，所以工作流在与通常相同的部署中运行，并且可以访问进程环境，对吧，所以你可以像通常那样注入环境变量，呃，只要你不记录它们，当然，大概你无论如何都不会这样做，呃，它与 **API** 端点相同，然后如果你想让你的数据保密，对吧，呃，现在我们在可观测性中公开它，呃，如果你有访问权限，但我们将来也会允许对任何数据存储进行端到端加密。

<details>
<summary>Original English</summary>

**Peter Wielander**: yeah so the the workflows run in the same deployment as as it would usually do and has access to the process uh environment right so you can inject environment levels the way you would usually do um and as as long as long as you don't log them which again presumably you wouldn't do any anyway um it's the same way as an **API** endpoint and then if you want your data to be secret right um right right now we expose it in observability um if you have access but we also will allow in the future to do end to end encryption for any data store

</details>

**Peter Wielander**: 好的，那我们，呃，就结束本次会话，但我们还会在这里多待一会儿回答问题，如果你想，你知道，看看。她失去了热情。

<details>
<summary>Original English</summary>

**Peter Wielander**: right then we'll uh close the session but we'll be around a little bit more for questions if you want to you know look over She lost heat.

</details>