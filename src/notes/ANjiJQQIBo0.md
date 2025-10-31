---
author: Unknown
date: '2025-10-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=ANjiJQQIBo0
speaker: Unknown
tags:
  - spec-driven-development
  - ai-coding-assistants
  - software-development-workflow
  - code-iteration
  - predictable-code
title: OpenSpec：AI编码助手赋能，规范驱动现有项目迭代
summary: 本视频详细介绍了OpenSpec，一个专为AI编码助手设计的开源规范驱动开发框架。与SpecIt更适合从零开始构建项目不同，OpenSpec特别擅长在现有项目基础上进行迭代开发，确保代码质量可预测、零猜测。视频演示了如何利用OpenSpec与Cloud Code等AI助手，为现有iOS番茄专注应用新增自定义时长功能，并详细解读了从创建提议、审核规范到AI实施、测试验证及归档文档的完整工作流程，旨在提升开发效率和协作一致性。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
people: []
companies_orgs: []
products_models:
  - OpenSpec
  - SpecIt
  - Kero
  - WebCoding
  - Cursor
  - Codex
  - Cloud Code
  - Xcode
  - VS Code
  - Node.js
media_books: []
status: evergreen
---
### 规范驱动开发：OpenSpec助力现有项目迭代

前些时间，我们为大家详细演示了基于**规范驱动**（Spec-driven: 一种软件开发方法，强调通过编写详细的规范来指导开发过程）的开源工作流项目**SpecIt**。视频发布后，评论区有粉丝提问：如果针对已有的项目，如何使用规范驱动开发？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Some time ago, we thoroughly demonstrated SpecIt, an open-source workflow project based on **spec-driven** (Spec-driven: A software development methodology that emphasizes guiding the development process by writing detailed specifications). After the video was released, fans in the comment section asked: How can spec-driven development be used for existing projects?</p>
</details>

因为SpecIt更适合从零到一构建项目，所以本期视频将为大家演示另一款规范驱动开发的开源工作流项目——**OpenSpec**。OpenSpec是一个开源的规范驱动开发框架，专为**AI编码助手**（AI Coding Assistant: 辅助开发者编写代码的人工智能工具）设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since SpecIt is more suitable for building projects from scratch, this video will demonstrate another open-source workflow project for spec-driven development: **OpenSpec**. OpenSpec is an open-source spec-driven development framework specifically designed for **AI coding assistants** (AI Coding Assistant: An artificial intelligence tool that assists developers in writing code).</p>
</details>

它支持**Cursor**、**Codex**、**Cloud Code**等常见的AI编码助手。相比SpecIt，OpenSpec特别适合在现有项目基础上做迭代开发，它通过引入轻量级的规范驱动开发工作流，让用户和AI编程助手在编写代码之前就对构建的内容达成一致，解决了AI编码助手在需求不明确时表现出的不可预测问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It supports common AI coding assistants such as **Cursor**, **Codex**, and **Cloud Code**. Compared to SpecIt, OpenSpec is particularly suitable for iterative development on existing projects. By introducing a lightweight spec-driven development workflow, it allows users and AI programming assistants to agree on what needs to be built before writing code, solving the unpredictability issues that AI coding assistants exhibit when requirements are unclear.</p>
</details>

本期视频将为大家详细演示OpenSpec的使用方式，并且我们将在已有的项目上，使用OpenSpec为该项目新增功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This video will provide a detailed demonstration of how to use OpenSpec, and we will use OpenSpec to add new features to an existing project.</p>
</details>

### OpenSpec的核心优势与对比

在演示之前，我们先看一下OpenSpec的核心优势。首先，它输出的代码具有可预测、高质量、零猜测的特性，也就是真正的确定性。其次，它与工具无关，原生支持Cloud Code、Cursor等多款AI编程助手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before the demonstration, let's first look at OpenSpec's core advantages. Firstly, the code it outputs is predictable, high-quality, and leaves no room for guesswork, meaning true determinism. Secondly, it is tool-agnostic, natively supporting multiple AI programming assistants like Cloud Code and Cursor.</p>
</details>

它专为现有项目设计，在“一到N”阶段表现出色，能够轻松处理跨模块修改，只需要一条命令就可以初始化并立即使用，具备完整的变更历史和审计轨迹。每次归档都能自动合并更新，团队成员即使使用不同的AI编程助手也能保持一致，从而提升协作效率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is designed specifically for existing projects, excelling in the "1-to-N" phase, and can easily handle cross-module modifications. It can be initialized and used immediately with just one command, providing a complete change history and audit trail. Each archive automatically merges updates, allowing team members to maintain consistency even when using different AI programming assistants, thereby improving collaboration efficiency.</p>
</details>

下面我们再看一下OpenSpec与SpecIt、**Kero**以及**WebCoding**的对比。首先，OpenSpec更适合从“一到N”的项目，它具备双文件夹架构、显示变更追踪和跨规范更新功能。而SpecIt则更适合从“零到一”的项目，具有简单的规范，适合新项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, let's compare OpenSpec with SpecIt, **Kero**, and **WebCoding**. Firstly, OpenSpec is more suitable for "1-to-N" projects, featuring a dual-folder architecture, explicit change tracking, and cross-spec updates. SpecIt, on the other hand, is more suitable for "0-to-1" projects, with simpler specifications ideal for new projects.</p>
</details>

与亚马逊的Kero相比，Kero只实现了基础功能，其管理比较分散，功能追踪也比较困难。如果使用没有任何规范的WebCoding，那么AI编码助手开发的功能就不可预测、没有结构，并且具备高风险。因此，在已有项目的基础上，我们就可以使用OpenSpec进行增量迭代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Compared to Amazon's Kero, Kero only implements basic functions, its management is quite decentralized, and feature tracking is difficult. If using WebCoding without any specifications, the features developed by AI coding assistants would be unpredictable, unstructured, and high-risk. Therefore, for existing projects, we can use OpenSpec for incremental iteration.</p>
</details>

### OpenSpec的完整执行流程

下面为大家详细演示OpenSpec的使用方式。OpenSpec的完整执行流程我这里画了一个图，包含创建提议、审核规范，然后在Cloud Code等AI编程助手中编码实施，再进行测试验证，最后归档文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, I will demonstrate the use of OpenSpec in detail. I have drawn a diagram here illustrating OpenSpec's complete execution flow, which includes creating a proposal, reviewing specifications, coding implementation in AI programming assistants like Cloud Code, then testing and validation, and finally archiving documentation.</p>
</details>

这几个阶段的具体流程我都画了详细的图，我们在演示的过程中，演示到哪部分就可以直接参考这个图。像这样就能更方便大家理解OpenSpec的执行流程和步骤。我们将在一个已有的项目上使用OpenSpec为它新增功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have drawn detailed diagrams for the specific processes of each of these stages. During the demonstration, you can directly refer to this diagram for the part being shown. This way, it will be easier for everyone to understand OpenSpec's execution flow and steps. We will use OpenSpec to add new features to an existing project.</p>
</details>

像这个项目是我在之前的视频中为大家演示另一款工作流时开发的一个iOS**番茄专注APP**（Pomodoro Focus App: 一种基于番茄工作法设计的应用程序，用于提升专注力）。我们先将这个项目下载下来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For example, this project is an iOS **Pomodoro Focus App** (Pomodoro Focus App: An application designed based on the Pomodoro Technique to enhance concentration) that I developed while demonstrating another workflow in a previous video. We will first download this project.</p>
</details>

### 初始化OpenSpec并新增功能

好，下面我们在**Xcode**（Xcode: 苹果公司开发的集成开发环境，用于开发macOS、iOS等平台应用）中打开这个项目，先查看一下目前它具备的功能。这里运行成功，目前它是一个最简单的番茄专注APP，它只有默认的25分钟专注时间。我们就可以以这个项目为例，使用OpenSpec为它新增更多功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, now we open this project in **Xcode** (Xcode: An integrated development environment developed by Apple for developing applications on macOS, iOS, and other platforms) and first check its current features. It runs successfully; currently, it is the simplest Pomodoro Focus App, with only a default 25-minute focus time. We can use this project as an example to add more features using OpenSpec.</p>
</details>

好，下面我们先打开终端命令行，先安装OpenSpec。首先，我们先确保我们已经安装了**Node.js**（Node.js: 一个开源的、跨平台的JavaScript运行时环境），并且版本号大于等于20.19。我们只需要在终端命令行用`node -v`就可以看到我们的版本号。如果没有安装的话，也可以从官网下载安装，或者直接查看我笔记中的安装命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, next, let's open the terminal command line and install OpenSpec. First, we need to ensure that we have **Node.js** (Node.js: An open-source, cross-platform JavaScript runtime environment) installed, and that its version number is greater than or equal to 20.19. We can check our version number simply by typing `node -v` in the terminal command line. If it's not installed, you can download and install it from the official website, or directly refer to the installation commands in my notes.</p>
</details>

好，下面我们就可以执行这条命令来安装OpenSpec。我们直接在终端执行安装就可以。下面我们需要进入我们番茄专注项目的路径，我们直接执行`cd`命令进入到项目路径。然后我们就可以执行这条命令，在我们的项目中初始化OpenSpec的工作流。我们直接粘贴并且运行就可以。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, now we can execute this command to install OpenSpec. We can simply run the installation directly in the terminal. Next, we need to navigate to our Pomodoro Focus project's path; we'll directly execute the `cd` command to enter the project directory. Then, we can execute this command to initialize the OpenSpec workflow in our project. We can simply paste and run it.</p>
</details>

然后按回车进入下一步。在这一步，我们就可以选择我们所擅长使用的AI编程助手，它这里包含Cloud Code、Cursor、OpenCode、Kilo Code、WinServe、Codex等等。我这里就默认选择Cloud Code，大家也可以选择自己熟悉的，比如说Cursor。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then, press Enter to proceed to the next step. In this step, we can choose the AI programming assistant we are proficient in using, which includes Cloud Code, Cursor, OpenCode, Kilo Code, WinServe, Codex, and so on. I will default to Cloud Code here, but you can also choose one you are familiar with, such as Cursor.</p>
</details>

好，选中之后进入下一步。到这一步，它开始提示将下面这段内容发送给Cloud Code。我们直接复制这段内容，然后打开**VS Code**（VS Code: Visual Studio Code，微软开发的一款免费开源代码编辑器），用VS Code打开我们刚才查看的番茄专注项目。在VS Code中，我们打开Cloud Code，然后将刚才复制的这段内容我们直接发送给Cloud Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, after selecting, proceed to the next step. At this point, it prompts us to send the following content to Cloud Code. We will directly copy this content, then open **VS Code** (VS Code: Visual Studio Code, a free and open-source code editor developed by Microsoft), and open the Pomodoro Focus project we just viewed with VS Code. In VS Code, we open Cloud Code and directly send the copied content to Cloud Code.</p>
</details>

可以看到它正在读取这些项目的文件。这里它提示它已经了解了这个项目。在这里可以看到它开始创建`project.md`这个文件。好，这里执行完成。然后这里它说它已经将关于番茄专注应用的所有信息都填充到了`project.md`文件里。然后我们就可以打开这个文件看一下，这里包含目的、技术栈、代码风格、架构模式，还包含测试策略等内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can see that it is reading the project files. Here, it indicates that it has understood the project. You can see that it is starting to create the `project.md` file. Okay, the execution is complete here. Then it says that it has filled all information about the Pomodoro Focus application into the `project.md` file. We can then open this file to view its contents, which include objectives, technology stack, coding style, architectural patterns, and testing strategies.</p>
</details>

像这样，我们处于OpenSpec整个工作流程中的阶段一流程，也就是创建提议。目前我们已经完成了环境准备以及初始化项目。完成初始化项目之后，我们就可以看到它创建的这些文件结构，也就是刚才我们在VS Code中看到的这些文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this way, we are in Stage One of the OpenSpec workflow, which is creating a proposal. Currently, we have completed environment preparation and project initialization. After project initialization, we can see the file structure it created, which are the files we just saw in VS Code.</p>
</details>

到下一步就是使用Cloud Code创建详细的功能提议，包含需求、设计和任务。然后我们只需要执行这条命令就可以，比如说为番茄专注添加一个能够自定义时长的功能。然后在Cloud Code中，我们只需要输入斜杠命令加OpenSpec，然后找到`proposal`这条命令，然后我们输入自定义专注时长，然后直接运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The next step is to use Cloud Code to create a detailed feature proposal, including requirements, design, and tasks. Then we just need to execute this command, for example, to add a custom duration feature to the Pomodoro Focus app. In Cloud Code, we simply type the slash command plus OpenSpec, then find the `proposal` command, then we input "custom focus duration," and run it directly.</p>
</details>

好，这里它正在运行。像这样，我们就在Cloud Code中用`open spec proposal`命令让Cloud Code为我们创建详细的功能提议。好，这里很快执行完成。然后这里它输出了它已经很好的理解了当前的执行方案，它需要澄清下面这些具体的细节。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, it's running here. In this way, we use the `open spec proposal` command in Cloud Code to have Cloud Code create a detailed feature proposal for us. Okay, it completed quickly. Then it outputted that it has a good understanding of the current execution plan, and it needs to clarify the following specific details.</p>
</details>

首先是时长范围，它问我们需要哪些时长范围，包括最小多少分钟、最大多少分钟。还包含用户在哪里配置自定义时长，以及自定义时长如何影响统计数据。好，下面我们就针对它询问的这几个问题，我们直接回复对这几个问题进行澄清。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First is the duration range; it asks what duration ranges we need, including minimum and maximum minutes. It also includes where the user configures the custom duration, and how the custom duration affects statistics. Okay, now we will directly reply to clarify these questions it asked.</p>
</details>

好，我们直接输入让它支持180分钟的范围，我们可以快速选择15、20、45、60、90分钟的时长。用户还可以使用滑块或者文本输入来设置时长。然后我们直接运行让Cloud Code根据我们的描述来澄清这个问题。这里它提示它将创建`proposal.md`这个文件。这里它正在创建`task.md`这个文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, we directly input that it should support a range of up to 180 minutes, and we can quickly select durations of 15, 20, 45, 60, or 90 minutes. Users can also use a slider or text input to set the duration. Then we directly run it, allowing Cloud Code to clarify this issue based on our description. Here, it indicates that it will create the `proposal.md` file. Here, it is creating the `task.md` file.</p>
</details>

然后它输出这个提案已经成功创建并且经过验证，下面是这些总结。在下面这里是创建的这些文件，我们还可以对这些文件内容进行相应的审核。我们只需要根据它的输出点击就可以在右侧打开，然后在左侧这里我们还可以查看具体的文件路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then it outputs that the proposal has been successfully created and validated, followed by a summary. Below are the files that were created, and we can review their contents accordingly. We just need to click on its output to open it on the right, and on the left, we can also view the specific file path.</p>
</details>

### 审核规范与AI实施

好，现在我们所处的OpenSpec的工作流程就是审核规范，在时间线这里也就是阶段二。因为我们直接是在VS Code中使用的Cloud Code插件，所以审核起来非常方便，就不需要执行这些命令。因为我们直接是在VS Code中就可以打开查看。当这些文件审查我们感觉里面有不满意的地方时，我们可以手动修改，也可以让AI为我们调整和优化，比如说可以用自然语言去描述哪些地方需要修改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, the current stage of our OpenSpec workflow is reviewing specifications, which is Stage Two in the timeline. Since we are directly using the Cloud Code plugin in VS Code, reviewing is very convenient and does not require executing these commands. We can simply open and view them directly in VS Code. When we find something unsatisfactory during the review of these files, we can manually modify them or ask the AI to adjust and optimize them for us, for example, by describing in natural language what needs to be changed.</p>
</details>

下面我们就到了下一个步骤，也就是阶段三，让Cloud Code自动读取这些规范来为我们开发实现我们所需要添加的功能。在实施这个阶段，我们可以启动自动实施。Cloud Code会读取这些任务文件，按顺序自动实施所有任务。我们只需要用`open spec apply`这条命令就可以让Cloud Code为我们实施这个项目。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we move to the next step, Stage Three, where Cloud Code automatically reads these specifications to develop and implement the features we need to add. In this implementation stage, we can initiate automatic implementation. Cloud Code will read these task files and automatically implement all tasks in sequence. We just need to use the `open spec apply` command to have Cloud Code implement this project for us.</p>
</details>

我们直接输入斜杠命令加`open spec`，然后找到`apply`命令，在后面我们直接跟上这个内容，然后直接运行就可以。这里Cloud Code输出它将实施自定义专注时长功能。这里它开始对项目的代码进行修改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We directly input the slash command plus `open spec`, then find the `apply` command, append the content directly after it, and then run it. Here, Cloud Code outputs that it will implement the custom focus duration feature. Here, it begins to modify the project's code.</p>
</details>

### 测试验证与归档文档

好，在等待了大概5分钟左右，这里提示它已经成功实现了自定义专注时长的功能。这里还给出了这些总结，在这里它列出了主要的功能。好，下面我们就在Xcode中打开这个项目，然后我们运行一下，看一下它为我们添加的这些功能能否正常执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, after waiting for about 5 minutes, it indicates that the custom focus duration feature has been successfully implemented. Here, it also provides a summary, listing the main features. Okay, now we will open this project in Xcode and run it to see if the features it added for us can execute normally.</p>
</details>

好，这里启动成功。这里我们点击允许。在这里我们就看到了这个自定义时长的功能。我们可以点击下拉，这里包含15分钟、25分钟、45分钟。然后我们还可以自定义时长，我们将它定义成一分钟。好，这里就变成了一分钟。然后我们点击开始专注，这里开始倒计时。然后我们看一下这个效果，看一下这个数会不会增长。好，可以很明显的看出来这个数在增长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, it launched successfully. Here, we click "Allow." And here we see the custom duration feature. We can click the dropdown, which includes 15 minutes, 25 minutes, 45 minutes. Then we can also customize the duration; we'll set it to one minute. Okay, now it's one minute. Then we click "Start Focus," and the countdown begins. Let's check the effect and see if the number increases. Okay, it's clearly visible that the number is increasing.</p>
</details>

好，这个专注任务完成，这里输出了这个专注任务已经完成。然后我们点击下面的`C0`来看一下在`C0`里是否有刚才这个任务。好，这里显示了刚才这个任务。然后我们再查看一下这个状态。好，这里有刚才的这个专注任务。然后我们再启动一个专注任务查看一下。然后点击开始，可以看到刚开始这个数是非常小的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, this focus task is complete; it outputs that the focus task has been completed. Then we click on `C0` below to see if this task is present in `C0`. Okay, this task is shown here. Then we check the status again. Okay, the previous focus task is here. Then we start another focus task to check. Then click "Start," and you can see that the initial number is very small.</p>
</details>

好，这里这个任务完成，我们再看一下`C0`，这里就显示了刚才我们完成了这两个任务。像这样，我们就完成了阶段四测试验证。下面就到了阶段五，也就是归档文档，将完成的变更进行归档合并到规范的主库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, this task is complete. Let's look at `C0` again; it shows that we completed these two tasks just now. In this way, we have completed Stage Four: testing and validation. Next is Stage Five: archiving documentation, where completed changes are archived and merged into the main specification repository.</p>
</details>

我们只需要执行`openspec archive`这条命令就可以完成变更归档。好，下面我们在Cloud Code中用斜杆命令找到`archive`，然后我们直接运行让它为我们完成归档。归档操作它会验证所有规范格式，合并**delta**（delta: 在软件开发中，指两个版本之间差异或变更的部分）到这个文件里，并且移动变更到这个文件里，然后清空这里面的内容，准备下一个功能，并且生成归档时间戳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We just need to execute the `openspec archive` command to complete the change archiving. Okay, next, in Cloud Code, we use the slash command to find `archive`, and then we run it directly to have it complete the archiving for us. The archiving operation will validate all specification formats, merge the **delta** (delta: In software development, refers to the differences or changes between two versions) into this file, move the changes into this file, then clear its contents, prepare for the next feature, and generate an archive timestamp.</p>
</details>

好，这里提示更改已经成功归档，下面是做的总结。阶段五我们就基本完成了。下面我们还可以将代码和文档提交到Git来保存完整的历史。为了节省时间，这里就不再为大家执行了。这样我们就成功完成了OpenSpec的完整工作流，从创建提议到审核规范，到AI编程实施，到测试与验证，再到归档文档，这五个阶段我们就成功完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, it indicates that the changes have been successfully archived, followed by a summary. Stage Five is basically complete. Next, we can also commit the code and documentation to Git to preserve the complete history. To save time, I will not perform this step for you here. In this way, we have successfully completed OpenSpec's full workflow, from creating a proposal to reviewing specifications, to AI programming implementation, to testing and validation, and finally to archiving documentation—these five stages have been successfully completed.</p>
</details>

然后如果我们想继续新增功能的话，还是按照OpenSpec的工作流程。像这样，我们就成功使用OpenSpec在我们已有的项目上用规范驱动开发为我们的项目新增功能，从而真正实现了从“一到N”进行开发迭代。我们只需要遵循这几个步骤就可以为我们已有的项目新增功能。本期视频所用到的代码和笔记我都会放在视频下方的描述栏或者评论区。如果你在视频下方无法找到的话，也可以通过我的博客去查找本期视频所对应的笔记。本期视频就做到这里，欢迎大家点赞、关注和转发，谢谢大家观看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then, if we want to continue adding new features, we will still follow the OpenSpec workflow. In this way, we have successfully used OpenSpec to add new features to our existing project through spec-driven development, truly achieving "1-to-N" development iteration. We just need to follow these steps to add new features to our existing projects. The code and notes used in this video will be placed in the description box or comment section below the video. If you cannot find them below the video, you can also find the notes corresponding to this video on my blog. This video concludes here. Welcome everyone to like, follow, and share. Thank you for watching.</p>
</details>