---
title: 利用 AI 和 MCP 服务器加速端到端测试：一个 VS Code 扩展的实践分享
summary: 本视频分享了一个创新的 AI 驱动工具，旨在解决手动编写端到端（E2E）测试耗时且易出错的问题。通过结合 VS Code 扩展、基于 Markdown的本地知识库以及
  MCP 服务器，该工具能够智能生成符合项目规范的测试代码，并通过自我修正的循环学习机制，显著提升测试开发效率和一致性。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- end-to-end-testing
- llm
- technology
people:
- Tejasvini Chawla
- Harzinder Grewal
- Tom Mohney
- Habel Kurian
- Anthony Yuan
- Ilona Medvedovsky
companies_orgs: []
products_models: []
date: 2025-07-31
author: Lei
speaker: ''
Exclude: true
channel: null
draft: true
file_name: ai_mcp_server_accelerate_e2e_testing.md
guest: ''
insight: null
layout: post.njk
series: null
source: null
---

## 开场与介绍

**Ilona Medvedovsky**: OK, I think we can get started, Sweeney. Thank you.

**伊隆娜·梅德维多夫斯基**: 好的，我想我们可以开始了，斯威尼。谢谢。

**Tejasvini Chawla**: Just a second. Let me share my screen.

**特贾斯维尼·查瓦拉**: 请稍等，我分享一下我的屏幕。

**Tejasvini Chawla**: Right. Um, just to confirm, my screen is visible, right?

**特贾斯维尼·查瓦拉**: 好的，确认一下，我的屏幕是可见的，对吗？

**Ilona Medvedovsky**: Mm-hmm. You're good.

**伊隆娜·梅德维多夫斯基**: 嗯，没问题。

**Tejasvini Chawla**: Hello everyone. Thank you so much for joining me for the demo for my tool AI-powered end-to-end test generator. So this tool's main purpose is to just accelerate the end-to-end test development with context-aware code generation.

**特贾斯维尼·查瓦拉**: 大家好。非常感谢大家参加我的工具——“AI 驱动的**端到端**（End-to-End, E2E）测试生成器”的演示。这个工具的主要目的是通过具有上下文感知能力的代码生成，来加速端到端测试的开发。

## 手动 E2E 测试的痛点

**Tejasvini Chawla**: So the main problem that this too is addressing is manual end to end test writing is too time consuming. The normal developer process for writing an end to end test, whether it be for a feature or a new feature or an added implementation to feature, requires constant switching between.

**特贾斯维尼·查瓦拉**: 这个工具要解决的主要问题是，手动编写**端到端测试**非常耗时。无论是为现有功能还是新功能编写端到端测试，常规的开发流程都需要在不同文件和上下文之间不断切换。

**Tejasvini Chawla**: Existing test writing Learning what the consistent pattern within the team is. This end to end test writing process is especially time taking for non experts. For example from a new dev who's not that familiar with the pre-existing test flow. Having to write an end to end test from scratch requires combing through the pre-existing task.

**特贾斯维尼·查瓦拉**: 开发者需要参考现有的测试，学习团队内部一致的编码模式。这个过程对于非专家尤其耗时。例如，一个不熟悉现有测试流程的新开发人员，如果需要从头开始编写一个端到端测试，就必须仔细梳理已有的测试代码。

**Tejasvini Chawla**: and a lot of context over time. So my solution is to translate natural language to functioning end-to-end test code using GitHub Copilot. But one question that might come to your mind is what's the need for this new tool and why cannot we just use GitHub Copilot for the same thing?

**特贾斯维尼·查瓦拉**: 并且需要花费大量时间来理解上下文。所以我的解决方案是，使用 **GitHub Copilot** 将自然语言翻译成可运行的端到端测试代码。但你可能会问，为什么需要这个新工具，我们为什么不能直接用 GitHub Copilot 来做同样的事情呢？

## 现有工具的局限性

**Tejasvini Chawla**: So here's the current landscape. Right now, if I ask Core Pilot to generate me, for example, a simple login test for just logging into our PCC website, then it actually goes over 4 folders.

**特贾斯维尼·查瓦拉**: 这就是当前的状况。现在，如果我让 Copilot 为我生成一个简单的登录测试，仅仅是登录我们的 PCC 网站，它实际上会遍历超过 4 个文件夹。

**Tejasvini Chawla**: It goes over like 4 folders for gadget contacts, then it reads all the relevant files and then as well it takes approximately a minute and a half to just generate a test case.

**特贾斯维尼·查瓦拉**: 它会为了获取上下文而遍历大约 4 个文件夹，读取所有相关文件，仅仅生成一个测试用例就需要大约一分半钟。

**Tejasvini Chawla**: Which oftentimes is not even able to run successfully because while gathering all the context here, while coursing through 4 folders, 5 files, it actually manages to hallucinate and provide a test that's not even able to run successfully in Cyprus.

**特贾斯维尼·查瓦拉**: 而生成的测试用例常常甚至无法成功运行。因为在收集所有上下文的过程中，在遍历 4 个文件夹、5 个文件之后，它实际上会产生“幻觉”，提供一个在 **Cypress**（一个流行的前端测试框架）中根本无法成功运行的测试。

## 解决方案：结合 VS Code 扩展与 MCP 服务器

**Tejasvini Chawla**: Now my proposed solution to not cause hallucinations and to just narrow down the context window is a VS Code extension. So my VS Code extension developers can trigger it using a slash E to be test generator command in the existing GitHub compiler.

**特贾斯维尼·查瓦拉**: 我提出的解决方案，旨在避免幻觉并缩小上下文窗口，是一个 **VS Code 扩展**。开发人员可以在现有的 GitHub Copilot 聊天窗口中，使用 `/e2e-test-generator` 命令来触发我的这个扩展。

### 核心组件 1：本地知识库 (Markdown)

**Tejasvini Chawla**: In a chat window. Now how it stops the hallucinations is by using the native knowledge base. Now this knowledge base is based on a test part installed Markdown file. This Markdown file will be auto generated from the pre-existing and doing test code for example within the.

**特贾斯维尼·查瓦拉**: 它是如何阻止幻觉的呢？通过使用一个本地的知识库。这个知识库是基于一个测试分析的 **Markdown** 文件。这个 Markdown 文件会从现有的端到端测试代码中自动生成。

**Tejasvini Chawla**: Wounds team in the skin and wound existing end to end test cases. On running this VS Code extension, it will auto generate a markdown file which will contain the existing test codes, best practices, what existing workflows we have, for example particularly in the skin and.

**特贾斯维尼·查瓦拉**: 例如，在“皮肤与伤口”团队现有的端到端测试用例中。当运行这个 VS Code 扩展时，它会自动生成一个 Markdown 文件，其中包含现有测试代码的最佳实践、我们已有的工作流程，比如特别是在“皮肤与伤口”团队中。

**Tejasvini Chawla**: Wound team. We might have workflows related to the skin and wound dashboard related to a resident's wound history view and so on. So it will contain those existing workflows within that test analysis mount on file. It will also have the import patterns so that the.

**特贾斯维尼·查瓦拉**: 我们可能有与皮肤伤口仪表板相关的工作流程，与居民伤口历史视图相关的工作流程等等。所以，这个测试分析 Markdown 文件会包含这些现有的工作流程。它还会包含导入模式，以便……

**Tejasvini Chawla**: So that the possibility of hallucinations is lesser and this will be combined with an MCP server. Now this MCP server's main purpose is to check if any new test files have been added.

**特贾斯维尼·查瓦拉**: 这样产生幻觉的可能性就更小。并且这会与一个 **MCP 服务器**（模型-客户端协议服务器）相结合。这个 MCP 服务器的主要目的是检查是否有任何新的测试文件被添加。

### 核心组件 2：MCP 服务器

**Tejasvini Chawla**: So this MCP is actually connected to two things. One is the GitHub of the repositories.

**特贾斯维尼·查瓦拉**: 这个 MCP 实际上连接到两样东西。一个是仓库所在的 GitHub。

**Tejasvini Chawla**: Are present and the 2nd is our Markdown file. So it's known that whenever you run the VS Core extension, the Markdown file will be generated from scratch every single time. The Markdown file will be only generated once when you first run the service.

**特贾斯维尼·查瓦拉**: 第二个是我们的 Markdown 文件。需要说明的是，并非每次运行 VS Code 扩展时，Markdown 文件都会从头生成。Markdown 文件只会在你第一次运行服务时生成一次。

**Tejasvini Chawla**: And second time when when it detects that there's any change in our code base. For example, for example, a new test file has been added by another team. Or for example, in Skin and Hoon, there's Dreamworkers and there's Team America. Suppose Team America adds a new test file.

**特贾斯维尼·查瓦拉**: 第二次生成是在它检测到我们的代码库有任何变化时。例如，另一个团队添加了一个新的测试文件。或者，在“皮肤与伤口”团队中，有“Dreamworkers”和“Team America”两个小组。假设“Team America”添加了一个新的测试文件。

**Tejasvini Chawla**: Then the Markdown file through the MCP server will add the new features, suppose in the Markdown so that the preceding task can be created successfully and using this knowledge base and the MCP server, the Copilot API will be only referencing.

**特贾斯维尼·查瓦拉**: 那么，通过 MCP 服务器，Markdown 文件将会把新功能（比如新的测试模式或工作流）添加到 Markdown 文件中，以便后续的任务可以成功创建。通过使用这个知识库和 MCP 服务器，Copilot API 将只参考一个上下文。

### 整合后的工作流程

**Tejasvini Chawla**: One context which is the markdown file with the existing test case analysis and it would be actually able to run the Cypress itself and so just by one single command the Copilot API using my knowledge base and the MCP server will be actually able to.

**特贾斯维尼·查瓦拉**: 也就是包含现有测试用例分析的 Markdown 文件。它将能够自己运行 Cypress。因此，仅通过一个简单的命令，Copilot API 利用我的知识库和 MCP 服务器，就能够……

**Tejasvini Chawla**: Create a full blown test case which and as well as like auto test it. So in the terminal using mobilot agent, it will be able to run the generated test on terminal using agent mode and then see the test results. For example, it creates a test file.

**特贾斯维尼·查瓦拉**: 创建一个完整的测试用例，并自动进行测试。它会在终端中使用代理模式运行生成的测试，然后查看测试结果。例如，它创建了一个测试文件。

**Tejasvini Chawla**: But the test code actually runs into a problem within Cypress, then it can actually regenerate the test code and create a cyclic learning structure so that if suppose a test fails, it will go back to Copilot API and then.

**特贾斯维尼·查瓦拉**: 但如果测试代码在 Cypress 中遇到了问题，它实际上可以重新生成测试代码，并创建一个循环学习的结构。所以，如果一个测试失败了，它会返回到 Copilot API，然后……

**Tejasvini Chawla**: It can detect what the test failure in Cypress is and update the knowledge base and then go back to Copilot API and run the Cypress execution again. This like learning structure will keep going on until we get a successful code compilation.

**特贾斯维尼·查瓦拉**: 它可以检测到 Cypress 中的测试失败原因，更新知识库，然后回到 Copilot API 再次运行 Cypress。这种学习结构会一直持续下去，直到我们获得成功的代码编译。

### 方案总结与核心组件

**Tejasvini Chawla**: I'll be delivering this later as well to make it more clear. Now the core components of this is the Copilot tool is integrated into the chatbot and then it has a smart context injection, so it automatically uses Mountdown file and you don't necessarily need to add more context to it.

**特贾斯维尼·查瓦拉**: 我稍后会再详细说明，以便更清楚。这个方案的核心组件是：Copilot 工具被集成到聊天机器人中，并且它具有智能的上下文注入功能。它会自动使用 Markdown 文件，你不需要为其添加更多上下文。

**Tejasvini Chawla**: Then it can learn from output, rewrite test, and update markdown so it has a cyclic learning. For example, if it notices the pattern that oh this a certain line causes an error, then it can update the markdown to reflect the same so that the same problem does not happen again.

**特贾斯维尼·查瓦拉**: 接着，它可以从输出中学习，重写测试，并更新 Markdown，从而形成一个循环学习。例如，如果它注意到某个模式，比如某一行代码导致了错误，它就可以更新 Markdown 来反映这一点，这样同样的问题就不会再次发生。

**Tejasvini Chawla**: So this is the circular learning loop that if a test fails, the extension captures the error, it automatically adjusts and retries and updates Markdown for better future generation. Now the core technical components is that the main like the two consists of three main parts. One is extensions.

**特贾斯维尼·查瓦拉**: 所以，这就是循环学习回路：如果测试失败，扩展会捕获错误，自动调整并重试，并更新 Markdown 以便未来能更好地生成代码。核心技术组件主要包括三个部分。一是扩展本身。

**Tejasvini Chawla**: File. So this extension has two commands which is generating the test code and running it and it uses Copilot Chart tools API. The 2nd is the MCB server which actually analyzes the real test files that those are pre-existing in our code base.

**特贾斯维尼·查瓦拉**: 这个扩展有两个命令：生成测试代码和运行它，并且它使用了 Copilot Chat 工具的 API。第二个是 MCP 服务器，它会分析我们代码库中已有的真实测试文件。

**Tejasvini Chawla**: If there's any new change in the in the existing test files which is not reflected in the Markdown yet, then it updates the Markdown for better test generation and the Markdown file stores the generated test case analysis.

**特贾斯维尼·查瓦拉**: 如果现有测试文件有任何新的变化，而这些变化尚未反映在 Markdown 文件中，它就会更新 Markdown 以便更好地生成测试。Markdown 文件则存储了生成的测试用例分析。

### 如何防止 AI 产生幻觉

**Tejasvini Chawla**: Now, to prevent hallucinations, there are actually 2 versions that will be stored of the mount. One of them will be machine generated. This is auto updated whenever the pre-existing test update or when copilot finds that oh.

**特贾斯维尼·查瓦拉**: 现在，为了防止幻觉，实际上会存储两个版本的 Markdown 文件。其中一个是机器生成的。每当现有的测试更新，或者当 Copilot 发现……

**Tejasvini Chawla**: This test wasn't working because of this reason. Let me just add a note in the markdown file and then another one will be human verified. Now this human verified file is necessary because in case Copilot registers a command which is which it hallucinates or in any instruction that is not necessarily true, then the human verified file.

**特贾斯维尼·查瓦拉**: “哦，这个测试因为这个原因没用。让我在 Markdown 文件里加个备注。” 另一个版本将是**人工验证**的。这个人工验证的文件是必要的，因为万一 Copilot 记录了一个它自己“幻觉”出来的命令，或者任何不一定正确的指令，那么人工验证的文件……

**Tejasvini Chawla**: Should be the go to because since it's in log on format, so it's like very like a human can easily review it and just see that the instructions that it's following are relevant to our use case. So this helps with hallucination prevention and future learning loop.

**特贾斯维尼·查瓦拉**: 就应该是首选参考。因为它采用的是 Markdown 格式，所以人类可以很容易地审查它，确保它遵循的指令与我们的用例相关。这有助于防止幻觉并促进未来的学习循环。

### 安装与优势

**Tejasvini Chawla**: Now the setup is very simple. You just need to because this is an NPM package and you just need to do NPM install and then launch to VS code extension. Now this NPM package can essentially live in the internal BCC repo.

**特贾斯维尼·查瓦拉**: 安装过程非常简单。因为它是一个 **NPM 包**，你只需要执行 `npm install`，然后启动 VS Code 扩展。这个 NPM 包可以存在于内部的 BCC 仓库中。

**Tejasvini Chawla**: So any team can easily use it for generating their own test cases and since it will run on the developer's local machine, therefore it's like very secure and lightweight and it won't be able to auto run any command without the developer actually instructing it to do so.

**特贾斯维尼·查瓦拉**: 所以任何团队都可以轻松地用它来生成自己的测试用例。而且因为它运行在开发人员的本地机器上，所以非常安全和轻量级。没有开发人员的明确指令，它不会自动运行任何命令。

**Tejasvini Chawla**: As like same as the GitHub Copilot. Now the advantages of it is that it will reduce the cognitive load for test orders. For example, currently while writing a manual end to end test case, a developer first has to go over the pre-existing tests, recognize what the patterns, what the import statements are, what the.

**特贾斯维尼·查瓦拉**: 就像 GitHub Copilot 一样。它的优势在于，可以减轻测试编写者的认知负荷。例如，目前在手动编写端到端测试用例时，开发人员首先必须浏览现有的测试，识别出其中的模式、导入语句以及……

**Tejasvini Chawla**: For test writing are and then manually write a test case. It will also boost test coverage and consistency since we are only going to be referring to a singular mountdown file which already has the best test writing practices.

**特贾斯维尼·查瓦拉**: 各种测试编写规范，然后再手动编写测试用例。它还将提高测试覆盖率和一致性，因为我们只参考一个单一的 Markdown 文件，而这个文件已经包含了最佳的测试编写实践。

**Tejasvini Chawla**: It will improve consistency throughout our test cases, and it also makes for Bi Lite actually usable in our QA workflows, and so this will be a foundation for even smarter automation.

**特贾斯维尼·查瓦拉**: 它将改善我们所有测试用例的一致性，也使得 Copilot 在我们的 **QA**（质量保证）工作流程中变得切实可用，这将为更智能的自动化奠定基础。

## 现场演示

**Tejasvini Chawla**: Um. Now for the demo. Let me just see. I think I got a comment here in the chart. All right, so let's do the demo now.

**特贾斯维尼·查瓦拉**: 现在进行演示。我看一下，我好像在聊天区看到一条评论。好的，我们现在开始演示。

**Tejasvini Chawla**: As you can see, I write a simple command here for generating a test for logging in with valid credentials using the end to end test generator command then.

**特贾斯维尼·查瓦拉**: 如你所见，我在这里输入一个简单的命令，使用端到端测试生成器命令，来生成一个使用有效凭据登录的测试。

**Tejasvini Chawla**: The Copilot tool will automatically generate the test based on my markdown file. I didn't have to provide the context, it automatically reads the file since it has been instructed to do so in the extensions folder.

**特贾斯维尼·查瓦拉**: Copilot 工具会根据我的 Markdown 文件自动生成测试。我不需要提供上下文，它会自动读取文件，因为在扩展文件夹中已经这样指示它了。

**Tejasvini Chawla**: So it's working on it, and how it's essentially working is that it's going over this Markdown document, which contains the major workflows, the best practices, as well as the list of files it has already read.

**特贾斯维尼·查瓦拉**: 它正在处理。它的工作原理是，它会遍历这个 Markdown 文档，其中包含了主要的工作流程、最佳实践，以及它已经读取过的文件列表。

**Tejasvini Chawla**: You can see the log down file here and then it generates the login with valid credentials test code. This has good comments. It uses the best test writing practices as prescribed and as it actually gathered from the existing test cases.

**特贾斯wini Chawla**: 你可以在这里看到 Markdown 文件，然后它生成了“使用有效凭据登录”的测试代码。这段代码有很好的注释，它使用了规定的最佳测试编写实践，这些实践实际上是从现有测试用例中收集的。

**Tejasvini Chawla**: It also provides a test structural overview, the key features, and any other details that are actually included in our test cases.

**特贾斯维尼·查瓦拉**: 它还提供了一个测试结构概览、关键特性以及我们测试用例中实际包含的任何其他细节。

**Tejasvini Chawla**: So you can see the best practices that it followed, the test cases it created for my simple logging in test and then it is actually able to run the test file itself. For example here you can see that.

**特贾斯维尼·查瓦拉**: 所以你可以看到它遵循的最佳实践，它为我简单的登录测试创建的测试用例，然后它实际上能够自己运行这个测试文件。例如，你在这里可以看到。

**Tejasvini Chawla**: It actually ran the test file and was able to run it successfully.

**特贾斯维尼·查瓦拉**: 它确实运行了测试文件，并且成功了。

**Tejasvini Chawla**: While running the test file, it actually uses NPX like Cypress Open, which is able to open the file in Google Chrome so that the developer themselves can actually review that the test file is working properly in what test cases it's using.

**特贾斯维尼·查瓦拉**: 在运行测试文件时，它实际上使用了像 `npx cypress open` 这样的命令，这可以在 Google Chrome 中打开文件，以便开发人员自己可以审查测试文件是否正常工作，以及它正在使用哪些测试用例。

**Tejasvini Chawla**: um I'd like to show here that the test file that it's using, it actually ran into a problem in Cypress right over here. As you can see, there was a failed attempt. Then it actually rewrote the test file just to correct

**特贾斯维尼·查瓦拉**: 我想在这里展示一下，它使用的测试文件，实际上在这里的 Cypress 中遇到了一个问题。如你所见，有一次失败的尝试。然后它实际上重写了测试文件，只是为了纠正……

**Tejasvini Chawla**: That problem and this test file that you can see here is different from the one it previously generated because it rewrote the file by learning from the Cypress error.

**特贾斯维尼·查瓦拉**: 那个问题。你现在看到的这个测试文件与它之前生成的那个不同，因为它通过从 Cypress 错误中学习，重写了文件。

**Tejasvini Chawla**: And here you can see, oh, the Cypress file was now running successfully.

**特贾斯维尼·查瓦拉**: 在这里你可以看到，哦，Cypress 文件现在已经成功运行了。

## 问答环节

**Tejasvini Chawla**: All right. So now I'll leave the floor open for any questions or discussions that you might have.

**特贾斯维尼·查瓦拉**: 好的。现在我把时间留给大家，你们可以提问或讨论。

**Tejasvini Chawla**: Um, yes. Feel free to unmute yourselves, yes.

**特贾斯维尼·查瓦拉**: 是的，请随意解除静音发言。

**Harzinder Grewal**: Hey, thanks for the nice demo. I just wanted to know maybe you already mentioned it. I joined a little late. The model which you used with the copilot, was it preselected or were you able to update that in your?

**哈津德·格雷瓦尔**: 嘿，谢谢你的精彩演示。我只是想知道，也许你已经提到了，我来晚了一点。你和 Copilot 一起使用的模型，是预先选定的，还是你能够在你的……中更新它？

**Harzinder Grewal**: Mark on file or how did you select that and which one gave you better results?

**哈津德·格雷瓦尔**: Markdown 文件里，或者你是如何选择它的，哪一个给你的结果更好？

**Tejasvini Chawla**: Um. Perfect. So the model that I used was Copilot 3.7, Cloud Sonnet 3.7, but essentially we are able to use any

**特贾斯维尼·查瓦拉**: 好的。我使用的模型是 Claude Sonnet 3.5，但基本上我们可以使用任何……

**Harzinder Grewal**: Right.

**哈津德·格雷瓦尔**: 好的。

**Tejasvini Chawla**: modem that GitHub provides. For example, I'll share my screen here.

**特贾斯维尼·查瓦拉**: GitHub 提供的模型。例如，我在这里分享我的屏幕。

**Tejasvini Chawla**: Here you can see that I can actually choose in any GitHub copilot use. We can choose any of the models here because the copilot agent is like normal copilot. It's just like when I write end to end dash generator that it just uses that particular tool for.

**特贾斯维尼·查瓦拉**: 在这里你可以看到，我实际上可以在任何 GitHub Copilot 的使用场景中进行选择。我们可以在这里选择任何模型，因为这个 Copilot 代理就像普通的 Copilot。只是当我输入 `/e2e-test-generator` 时，它会使用那个特定的工具来……

**Tejasvini Chawla**: generating the test files instead of going over all the contexts by itself. So from my personal experience, I have seen that CloudSolid actually works better than GPT for this code generation context. But yes, feel free to explore with more.

**特贾斯维尼·查瓦拉**: 生成测试文件，而不是自己去遍历所有的上下文。根据我的个人经验，我发现 Claude Sonnet 在这种代码生成场景下，实际上比 GPT 效果更好。但是，是的，欢迎大家自由探索更多模型。

**Tejasvini Chawla**: Agents and just see which one works better for your use case.

**特贾斯维尼·查瓦拉**: 看看哪一个更适合你的用例。

**Harzinder Grewal**: OK, I just wanted to know if you already knew which one is better, but as you said, if Cloud Sonet is better than it is. It has been a little bit since I saw all the models. I thought there was also Cloud Sonet 3. 7 thinking.

**哈津德·格雷瓦尔**: 好的，我只是想知道你是否已经知道哪个更好。但既然你说了 Claude Sonnet 更好，那就是它了。我有一段时间没看所有模型了。我以为还有一个 Claude Sonnet 3.5 的思考模型。

**Tejasvini Chawla**: Uh mhm.

**特贾斯维尼·查瓦拉**: 嗯。

**Harzinder Grewal**: Which generally performed better, at least in the code generation.

**哈津德·格雷瓦尔**: 那个通常表现更好，至少在代码生成方面。

**Harzinder Grewal**: That OK, thanks. And what is the accuracy of this? Does it ever hallucinate or or creates a test which should not exist or or even the functions which should not exist?

**哈津德·格雷瓦尔**: 好的，谢谢。这个工具的准确性如何？它会产生幻觉，或者创建一些不应该存在的测试，甚至不应该存在的函数吗？

**Tejasvini Chawla**: Right. So the possibility of it hallucinating, like there's always that one small possibility, but we have put into place some like some restrictions to stop it from

**特贾斯维尼·查瓦拉**: 是的。它产生幻觉的可能性总是存在的，尽管很小，但我们已经设置了一些限制来阻止它。

**Harzinder Grewal**: Mhm.

**哈津德·格雷瓦尔**: 嗯。

**Tejasvini Chawla**: hallucinating. For example, there are two Markdown files. The Markdown file is the basis of the context. So since there are two Markdown files, one is the.

**特贾斯维尼·查瓦拉**: 产生幻觉。例如，有两个 Markdown 文件。Markdown 文件是上下文的基础。所以既然有两个 Markdown 文件，一个是……

**Tejasvini Chawla**: The machine generated one, the other is the human reviewed one. So because of the developer reviewed Markdown file existing, if it hallucinates, you can actually stop it from doing so by just if it suppose in the machine learning Markdown file it generates a function that doesn't really exist, then it will correct.

**特贾斯维尼·查瓦拉**: 机器生成的，另一个是人工审查的。所以因为有开发人员审查过的 Markdown 文件存在，如果它产生了幻觉，你可以阻止它。比如，假设在机器生成的 Markdown 文件中，它生成了一个不存在的函数，它会进行纠正。

**Tejasvini Chawla**: And another stoppage for it hallucinating is that it can actually run the Cypress test by itself and detect if it actually hallucinated because that end to end test case won't run properly then and then it will fix itself and further update the

**特贾斯维尼·查瓦拉**: 另一个阻止它产生幻觉的机制是，它能自己运行 Cypress 测试，并检测自己是否真的产生了幻觉，因为那样的话端到端测试用例就无法正常运行。然后它会自我修复，并进一步更新……

**Harzinder Grewal**: OK. Yeah. Mhm.

**哈津德·格雷瓦尔**: 好的。是的。嗯。

**Tejasvini Chawla**: markdown file itself to prevent that problem from happening again.

**特贾斯维尼·查瓦拉**: Markdown 文件本身，以防止同样的问题再次发生。

**Harzinder Grewal**: Awesome. Thank you.

**哈津德·格雷瓦尔**: 太棒了，谢谢你。

**Tom Mohney**: And you've currently got this. Oh, I'm sorry, Cabel, you're next.

**汤姆·莫尼**: 你现在已经有了这个……哦，抱歉，哈贝尔，该你了。

**Tejasvini Chawla**: OK.

**特贾斯维尼·查瓦拉**: 好的。

**Habel Kurian**: No, yeah, related to that. So you you mentioned it's normally a circular loop, right? It's trying to fix itself.

**哈贝尔·库里安**: 没关系，是的，与此相关。你提到这通常是一个循环回路，对吧？它会尝试自我修复。

**Tom Mohney**: Thank you.

**汤姆·莫尼**: 谢谢。

**Habel Kurian**: What is an instance where you have to interject and what's the best way to like course correct? Is it providing additional prompts or updating the markup?

**哈贝尔·库里安**: 在什么情况下你需要介入？最好的纠正方法是什么？是提供额外的提示，还是更新 Markdown 文件？

**Tejasvini Chawla**: Mhm. Right. So you can actually, there are two ways to do it.

**特贾斯维尼·查瓦拉**: 嗯。好的。实际上，有两种方法可以做到。

**Tejasvini Chawla**: So you can a just like for example, you might have encountered that in GitHub, there's a stop icon, so you can just stop the test generation. So it will just stop that and that would be like a hard reset really.

**特贾斯维尼·查瓦拉**: 第一，就像你在 GitHub 中可能遇到的那样，有一个停止图标，你可以直接停止测试生成。那就像是硬重置。

**Tejasvini Chawla**: The second option is to you can further instruct it to update the mountain file by itself, for example, or like you can provide it more detailed instructions and it will add on to the code.

**特贾斯维尼·查瓦拉**: 第二个选择是，你可以进一步指示它自己更新 Markdown 文件，或者你可以给它更详细的指令，它会在现有代码的基础上进行添加。

**Habel Kurian**: Mm.

**哈贝尔·库里安**: 嗯。

**Tejasvini Chawla**: Using the tool, for example, I created this login test case and then I want to also navigate to suppose the resident view and select the wound.

**特贾斯维尼·查瓦拉**: 例如，我用这个工具创建了登录测试用例，然后我还想导航到居民视图并选择伤口。

**Tejasvini Chawla**: Then instead of creating a new file starting from scratch using the Copilot API, it can add onto it rather than go.

**特贾斯维尼·查瓦拉**: 这样，它就可以在现有基础上添加功能，而不是使用 Copilot API 从头开始创建一个新文件。

**Tejasvini Chawla**: You don't have to create a new file and a new test case, you can just instruct it to in that that in the given file XYZ as well. I hope that answers your question.

**特贾斯维尼·查瓦拉**: 你不必创建一个新文件和新的测试用例，你可以直接指示它在给定的 XYZ 文件中也添加相应的功能。希望这回答了你的问题。

**Habel Kurian**: OK, OK.

**哈贝尔·库里安**: 好的。

**Tom Mohney**: So you you you're currently leveraging this for skin and wound.

**汤姆·莫尼**: 所以你目前正在为“皮肤与伤口”项目利用这个工具。

**Tejasvini Chawla**: Mhm. Mhm.

**特贾斯维尼·查瓦拉**: 嗯。

**Tom Mohney**: What's? What's the next project do you you wanna try it out on?

**汤姆·莫尼**: 下一个你想尝试应用这个工具的项目是什么？

**Tejasvini Chawla**: I believe like I'm not really like basically whichever team wants to play around with it because I feel like the more the people actually use it, the more I'll know like or they'll know where to improve it or the what the potential gaps are, for example, because the like because.

**特贾斯维尼·查瓦拉**: 我觉得，基本上任何想尝试它的团队都可以。因为我感觉，用的人越多，我就越能知道，或者他们也能知道，哪里需要改进，或者潜在的差距在哪里。

**Ilona Medvedovsky**: You are.

**伊隆娜·梅德维多夫斯基**: 你是。

**Tom Mohney**: Mhm.

**汤姆·莫尼**: 嗯。

**Tejasvini Chawla**: The implementation or the adoption process is very simple. You just need to like just go in one like folder really and change the place where the test will be stored and that's all. So it's a very easy to adopt to.

**特贾斯维尼·查瓦拉**: 实施或采纳过程非常简单。你只需要进入一个文件夹，更改测试存储的位置，仅此而已。所以它非常容易采纳。

**Tejasvini Chawla**: So like I believe like more teams can easily adopt it and use it just so we have more tests. Data and like we can cut the end to end test writing times.

**特贾斯维尼·查瓦拉**: 所以我相信更多团队可以轻松地采纳和使用它，这样我们就能有更多的测试数据，并且可以缩短端到端测试的编写时间。

**Anthony Yuan**: Yeah, just add something more. This approach is very generic, so and easy to customize for a different project. Yeah, so actually you might ask a question, why not just ask Copilot generate everything without our code?

**安东尼·袁**: 是的，补充一点。这个方法非常通用，并且很容易为不同的项目进行定制。是的，所以你可能会问，为什么不直接让 Copilot 生成所有东西，而不需要我们的代码？

**Anthony Yuan**: All the way without our additional work, right? It it it can't do that right? But there's many problem is a big problem, right? And the big project is also another problem. We this this project demo how we can.

**安东尼·袁**: 完全不需要我们额外的工作，对吧？它做不到，对吧？这里有很多问题，幻觉是一个大问题，大项目是另一个问题。这个项目演示了我们如何……

**Anthony Yuan**: Add our own control here, right? So we can add our own contacts. We have agent. We agent can also be powered by AI with different model. Some model may not need to be this expensive, right? Some of them.

**安东尼·袁**: 在这里加入我们自己的控制，对吧？我们可以加入自己的上下文。我们有代理，代理也可以由不同模型的 AI 驱动。有些模型可能不需要那么昂贵，对吧？

**Tom Mohney**: We.

**汤姆·莫尼**: 我们。

**Anthony Yuan**: And analyze this part. Maybe we won't use it most powerful, right? So this more likely just demo and this is also very useful, very practical.

**安东尼·袁**: 分析这部分时，也许我们不会用最强大的模型，对吧？所以这更像是一个演示，但它也非常有用，非常实用。

**Ilona Medvedovsky**: And Tom, so just we need the semester is going to be over at the end of August. So for now we're just kind of looking to increase the adoption in skin and wound, right. So all engineers the.

**伊隆娜·梅德维多夫斯基**: 还有汤姆，这个学期八月底就要结束了。所以目前我们只是希望在“皮肤与伤口”项目中增加采纳率，对吧。所以所有的工程师……

**Ilona Medvedovsky**: Experiment with this. They also just need to kind of become more comfortable with MCP, right? Not just for this use case.

**伊隆娜·梅德维多夫斯基**: 都可以用这个做实验。他们也需要对 **MCP** 更熟悉，对吧？不仅仅是为了这个用例。

**Tom Mohney**: Maybe.

**汤姆·莫尼**: 也许吧。

**Ilona Medvedovsky**: So they're going to, you know, consider it for other use cases as well, right? And also in this month or so, we're going to look into improving this based on.

**伊隆娜·梅德维多夫斯基**: 这样他们就会考虑将其用于其他用例，对吧？同时，在这一个月左右的时间里，我们会根据……来改进这个工具。

**Ilona Medvedovsky**: Feedback that we get from other engineers, but we just wanna make sure you everyone else is aware of that option.

**伊隆娜·梅德维多夫斯基**: 我们从其他工程师那里得到的反馈。但我们只是想确保大家，每个人，都知道有这个选项。

**Tom Mohney**: So by by the, so by the end of term, it'll be working for every core module, right?

**汤姆·莫尼**: 所以到学期末，它将适用于每个核心模块，对吗？

**Ilona Medvedovsky**: That's what. That's what exactly what I said. No.

**伊隆娜·梅德维多夫斯基**: 我说的就是这个。不。

**Tom Mohney**: Cards in there. I'm sorry you had your hand up.

**汤姆·莫尼**: 抱歉，你举手了。

**Harzinder Grewal**: And that's the question I was going to ask. I sorry, I missed my stand up just because I got hooked up into it.

**哈津德·格雷瓦尔**: 这也正是我要问的问题。抱歉，我错过了我的站会，因为我完全被这个吸引了。

**Harzinder Grewal**: I do want to volunteer my team, although I'll first talk to them. But again, Cypress might is it? Does it work only on Cypress or also on the?

**哈津德·格雷瓦尔**: 我确实想让我的团队自愿尝试，虽然我会先和他们谈。但再次确认，它只适用于 Cypress 吗？还是也适用于……

**Harzinder Grewal**: Old school Selenium because most of the MDS stuff, the automation still is in Selenium suit and if it is equable to give us equally good results for Selenium, it might be much easier for our team to really get started with.

**哈津德·格雷瓦尔**: 老派的 **Selenium**？因为我们大部分 MDS 的东西，自动化仍然是在 Selenium 套件里。如果它能为 Selenium 提供同样好的结果，那对我们团队来说，上手会容易得多。

**Tejasvini Chawla**: Mhm.

**特贾斯维尼·查瓦拉**: 嗯。

**Tejasvini Chawla**: Yeah, that's a great idea. I'm really happy that your team would be able to do this and I believe that it would be like it would require the same process as I used for Cypress. So I can actually change the code a bit to allow it to like test it for Selenium like you're using Selenium as well.

**特贾斯维尼·查瓦拉**: 是的，那是个好主意。我很高兴你的团队能这样做。我相信这会需要和我用于 Cypress 同样的过程。所以我可以稍微修改一下代码，让它也能为 Selenium 进行测试。

**Harzinder Grewal**: Mhm.

**哈津德·格雷瓦尔**: 嗯。

**Tejasvini Chawla**: So yeah.

**特贾斯维尼·查瓦拉**: 是的。

**Harzinder Grewal**: Awesome.

**哈津德·格雷瓦尔**: 太棒了。

**Ilona Medvedovsky**: Yeah, so.

**伊隆娜·梅德维多夫斯基**: 是的。

**Harzinder Grewal**: Yeah, but before all that, I would like to have you guys time for a similar demo with my team. I'm pretty sure they'll get excited and want to hop on to this one.

**哈津德·格雷瓦尔**: 是的，但在此之前，我希望你们能有时间为我的团队做一个类似的演示。我很确定他们会很兴奋，并愿意加入进来。

**Tejasvini Chawla**: Google.

**特贾斯维尼·查瓦拉**: 好的。

**Tom Mohney**: But I've recorded this, so maybe we can provide it as a recording first.

**汤姆·莫尼**: 但我录制了这次演示，所以也许我们可以先提供录像。

**Anthony Yuan**: Yeah, they are very.

**安东尼·袁**: 是的，他们非常……

**Harzinder Grewal**: Shut down. We'll do that. Thank you.

**哈津德·格雷瓦尔**: 好的，我们会那样做的。谢谢。

**Tom Mohney**: Yeah.

**汤姆·莫尼**: 好的。

**Ilona Medvedovsky**: And with MDS, you can add a lot more to the context rather than MDS specs when, yeah, there's a lot more.

**伊隆娜·梅德维多夫斯基**: 对于 MDS，你可以向上下文中添加更多的东西，而不仅仅是 MDS 的规范，是的，内容多得多。

**Harzinder Grewal**: Yep, Yep. There are, there are about 700 plus test cases we want to automate. So we'll get pretty good out of it, yeah.

**哈津德·格雷瓦尔**: 是的。我们大约有 700 多个测试用例想要自动化。所以我们会从中得到很好的结果。

**Tejasvini Chawla**: Mhm.

**特贾斯维尼·查瓦拉**: 嗯。

**Ilona Medvedovsky**: Oh, gosh.

**伊隆娜·梅德维多夫斯基**: 哦，天哪。

**Anthony Yuan**: Yeah, so if we can build this and using a pipeline, it will save a developer's time because many time you would run this and fix back. So sometimes it's very small things it take but take long time to run right?

**安东尼·袁**: 是的，所以如果我们能构建这个并通过一个**流水线**（pipeline）来使用，会节省开发人员的时间。因为很多时候你需要运行、修复、再运行。有时候只是很小的问题，但运行起来需要很长时间，对吧？

**Tom Mohney**: Mhm.

**汤姆·莫尼**: 嗯。

**Anthony Yuan**: So if we can automate that, it take lots, let's say, or a lot of time.

**安东尼·袁**: 所以如果我们能自动化这个过程，会节省大量时间。

**Harzinder Grewal**: Pipeline. Yeah, yes and no. Maybe I'm on a experimental branch. I really don't trust it as much unless we review each and every test case on our own, even if it passes. So yeah, but yeah, maybe we'll we'll think about pipeline later.

**哈津德·格雷瓦尔**: 流水线。是的，也不全是。也许我只是在一个实验分支上。我不会那么信任它，除非我们自己审查每一个测试用例，即使它通过了。所以，是的，也许我们稍后会考虑流水线。

**Anthony Yuan**: But you well, pipeline you can run locally, right? So what I mean is so.

**安东尼·袁**: 但是，流水线你可以在本地运行，对吧？我的意思是……

**Harzinder Grewal**: Yeah, yeah. What I'm thinking is running one small set at a time, maybe 5-10 caches at a time, using them some way of grouping them rather than going through all 700 in one go and then figuring out which ones are right and not.

**哈津德·格雷瓦尔**: 是的。我在想的是一次运行一小组，也许一次 5-10 个用例，用某种方式将它们分组，而不是一次性跑完 700 个，然后再去弄清楚哪些是对的，哪些不是。

**Anthony Yuan**: Yeah, so here's we just show we have control, not like in a copilot, right? So you have no control, right?

**安东尼·袁**: 是的，我们在这里展示的是我们拥有控制权，不像在 Copilot 里，你没有控制权，对吧？

**Harzinder Grewal**: Yep, Yep. Mhm. Yep.

**哈津德·格雷瓦尔**: 是的。嗯。是的。

**Anthony Yuan**: It's hard to control here. This way we can have more power to control how to use this model, how to take.

**安东尼·袁**: 在那里很难控制。通过这种方式，我们可以有更多的权力来控制如何使用这个模型。

**Harzinder Grewal**: Yeah, yeah. And once we have confidence, obviously once we have confidence with some experimentation, we might just integrate into one of our pipelines to at least temporarily write cases and run them even if it is not in being checked in into our repos. Or or into the main branches.

**哈津德·格雷瓦尔**: 是的。一旦我们有了信心，很明显，在经过一些实验并建立信心之后，我们可能会将其集成到我们的一个流水线中，至少可以临时编写用例并运行它们，即使它们还没有被签入到我们的仓库或主分支中。

**Anthony Yuan**: Take a front of that. Yeah, yeah. So yeah, even you can, you know, MCP is so powerful. There's so many tools there. So you can even just add MCP help you to commit a change your star PR.

**安东尼·袁**: 没错。是的，你甚至可以，你知道，MCP 非常强大。那里有很多工具。你甚至可以添加 MCP 来帮助你提交一个变更，或者创建一个 **PR**（拉取请求）。

**Anthony Yuan**: Do some code review. This all can be wowed together, right? We don't need to do this ourselves because so many things is already implemented and this is this field is so change so fast.

**安东尼·袁**: 做一些代码审查。所有这些都可以整合在一起，对吧？我们不需要自己做这些，因为很多东西已经实现了，而且这个领域变化得太快了。

**Harzinder Grewal**: Yep. Yep, I'm just getting a go ahead about.

**哈津德·格雷瓦尔**: 是的，我只是想确认一下。

**Habel Kurian**: Did did you have to do? Oh sorry, I was just did you have to do anything to sort of give permission for MCP server or is it just baked into the repo GitHub?

**哈贝尔·库里安**: 你需要做什么……哦抱歉，我只是想问，你需要做什么来给 MCP 服务器授权吗？还是它已经内置在 GitHub 仓库里了？

**Anthony Yuan**: No. No, that's the goal, right? So the simplest way we just using everybody's we use code, right? So everybody developer already have this model already. So we don't we learn something before, right? So we spent a long time to get.

**安东尼·袁**: 不，这就是目标，对吧？最简单的方法就是使用大家都在用的 VS Code，对吧？所以每个开发人员都已经有了这个模型。我们之前花了很多时间去……

**Tejasvini Chawla**: Me.

**特贾斯维尼·查瓦拉**: 我。

**Anthony Yuan**: The approval for using some model and in this case every developer already have this one and we're already very powerful and we're getting better. That's why we picked this approach.

**安东尼·袁**: 获得使用某个模型的批准。而在这种情况下，每个开发人员都已经有了这个工具，它已经非常强大，并且还在变得更好。这就是我们选择这种方法的原因。

**Habel Kurian**: OK.

**哈贝尔·库里安**: 好的。

**Tom Mohney**: Just real quick, we're going to run out of time, but I I just want to point out that this is very impressive, especially from a co-op, but in, you know, nearing the end of your term and everything. But this solves a huge problem that we're faced and especially if we can.

**汤姆·莫尼**: 很快说一句，我们快没时间了。但我想指出，这非常令人印象深刻，尤其对于一个实习生来说，在你的任期即将结束的时候。但这解决了一个我们面临的巨大问题，特别是如果我们能……

**Tom Mohney**: Extend it to the core monolith. We have a lot of gaps in our coverage and so. So yeah, this is hugely valuable, great achievement and thank you very much.

**汤姆·莫尼**: 将它扩展到核心的单体应用。我们的测试覆盖率有很多空白。所以，是的，这非常有价值，是一项伟大的成就，非常感谢你。

**Anthony Yuan**: Yeah. So according to our plan, this is just start. We have more. This is step one. Lots more can do. We just this is the first first step.

**安东尼·袁**: 是的。根据我们的计划，这仅仅是个开始。我们还有更多。这是第一步，还有很多可以做的。

**Tejasvini Chawla**: So on. Definitely.

**特贾斯维尼·查瓦拉**: 当然。

**Tom Mohney**: There's more to come. Is that what you're saying? But wait, there's more. I feel like I'm gonna buy a car at the end of this.

**汤姆·莫尼**: 还有更多？你是这个意思吗？“等等，还有更多！” 我感觉这次会议结束时我要买辆车了。

**Anthony Yuan**: Yeah.

**安东尼·袁**: 是的。

**Tejasvini Chawla**: So. Thank you so much. Yes. Yeah. And then like just adding one to like Anthony's one of the previous points. I know like we're running out of time soon, but I just wanted to add some of the future like things that we can add. And so one of them could be like since we already have a pre-existing MCP server.

**特贾斯维尼·查瓦拉**: 谢谢大家。是的。我想补充一下安东尼之前提到的几点。我知道我们快没时间了，但我想补充一些未来可以添加的功能。其中之一是，既然我们已经有了一个 MCP 服务器……

**Tejasvini Chawla**: it's actually very easy to connect it with our JIRA system so that any any story that is tagged as ohh needs testing, it can automatically generate the task and create a PR for it so that the developer can run it automatically on their own tab. Second is we can also extend it for integration and unit testing quite easily.

**特贾斯维尼·查瓦拉**: 实际上很容易将它与我们的 **JIRA** 系统连接起来。这样，任何被标记为“需要测试”的故事，它都可以自动生成任务并为其创建一个 **PR** (拉取请求)，开发人员就可以在自己的标签页中自动运行它。其次，我们也可以很容易地将其扩展到集成测试和单元测试。

**Tom Mohney**: Mhm.

**汤姆·莫尼**: 嗯。

**Tejasvini Chawla**: And yeah, extend it to Excellenium as well as like Arzinder pointed out. And also, yeah, thank you so much for actually giving me the opportunity to actually build this too along with the Co-op and like just a huge thank you for the one and like Anthony too, just for helping me out through this whole process. Yeah. Thank you so much.

**特贾斯维尼·查瓦拉**: 是的，也可以像哈津德指出的那样，将其扩展到 Selenium。同时，也非常感谢你们给我这个机会，与实习团队一起构建这个工具。特别要感谢伊隆娜和安东尼，在整个过程中帮助我。非常感谢。

**Ilona Medvedovsky**: That was that was just a side project.

**伊隆娜·梅德维多夫斯基**: 这只是一个副项目而已。

**Tom Mohney**: Thank you. Mm. OK. Well, thank you very much. I do have to jump over, but yeah, great achievement. Thank you.

**汤姆·莫尼**: 谢谢你。嗯。好的，非常感谢。我得走了，但这确实是一项伟大的成就。谢谢。

**Ilona Medvedovsky**: Thank you, David, so much. Thank you.

**伊隆娜·梅德维多夫斯基**: 非常感谢你。

**Maciek Sliwa**: Full stop.

**马切克·斯利瓦**: 句号。

**Tejasvini Chawla**: You are done Dan.

**特贾斯维尼·查瓦拉**: 好的。

**Harzinder Grewal**: Thanks, Karwa. Thank you.

**哈津德·格雷瓦尔**: 谢谢。

**Ilona Medvedovsky**: Bye. Thank you, bye.

**伊隆娜·梅德维多夫斯基**: 再见，谢谢，再见。

**Habel Kurian**: Thank you.

**哈贝尔·库里安**: 谢谢。

**Tom Mohney**: Alright, bye.

**汤姆·莫尼**: 好的，再见。