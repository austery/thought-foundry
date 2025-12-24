---
area: tech-insights
category: technology
companies_orgs: '[]'
date: 2025-10-31
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: '[]'
people: '[]'
products_models:
- Cursor
- Codex
- Cloud Code
- Node.js
- Xcode
- VS Code
- iOS
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=ANjiJQQIBo0
speaker: AI超元域
status: evergreen
summary: 本视频详细演示了开源规范驱动开发框架OpenSpec的使用方法。OpenSpec专为在现有项目基础上进行迭代开发而设计，通过引入轻量级规范驱动工作流，确保用户与AI编程助手在代码编写前达成一致，解决AI编码助手在需求不明确时表现出的不可预测性。视频以一个iOS番茄专注应用为例，展示了如何利用OpenSpec新增自定义时长功能，涵盖了从创建提议到文档归档的完整流程，旨在实现高质量、可预测的零失误代码输出。
tags:
- code
- development
- history
- llm
- software-development-workflow
title: OpenSpec：AI驱动的规范化开发，加速现有项目迭代
---

### OpenSpec：AI驱动的规范化开发，加速现有项目迭代

此前，我们详细演示了基于**规范驱动开发**（Spec-driven Development: 一种软件开发方法论，通过编写详细的规范来指导开发过程）的开源工作流项目**SpecKit**。视频发布后，评论区有粉丝提问：如果针对已有项目，如何应用规范驱动开发？鉴于SpecKit更适合从零开始构建新项目，本期视频将为大家演示另一款开源规范驱动开发工作流项目——**OpenSpec**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">前些时间为大家详细演示了基于specdriven的开源工作流项目specit视频发布之后评论区有粉丝提问如果针对已有的项目那么如何使用specdriven规范驱动开发 因为Spackit更适合从0到1构建项目所以本期视频将为大家演示另一款规范驱动开发的开源工作流项目OpenSpackOpenSpack是一个开源的规范驱动开发框架专为AI编码助手设计它支持Cursor, Codex, Cloud Code等常见的AI编码助手相比SpackitOpenSpack特别适合在现有的项目基础上做迭代开发 它通过引入轻量级的规范驱动开发工作流让用户和AI编程助手在编写代码之前就对构建的内容达成一致解决了AI编码助手在需求不明确的时候表现出不可预测的问题好,本期视频将为大家详细显示OpenSpy的使用方式并且我们在已有的项目上 使用OpenSpec为已有的项目新增功能</p>
</details>

**OpenSpec**是一个开源的规范驱动开发框架，专为**AI编码助手**（AI Coding Assistant: 辅助开发者编写、调试和优化代码的人工智能工具）设计，支持**Cursor**、**Codex**、**Cloud Code**等常见AI编码助手。与SpecKit相比，OpenSpec特别适合在现有项目基础上进行迭代开发。它通过引入轻量级的规范驱动开发工作流，让用户和AI编程助手在编写代码之前就对构建内容达成一致，从而解决了AI编码助手在需求不明确时表现出的不可预测性问题。本期视频将详细演示OpenSpec的使用方式，并展示如何在已有项目上利用OpenSpec新增功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OpenSpack是一个开源的规范驱动开发框架专为AI编码助手设计它支持Cursor, Codex, Cloud Code等常见的AI编码助手相比SpackitOpenSpack特别适合在现有的项目基础上做迭代开发 它通过引入轻量级的规范驱动开发工作流让用户和AI编程助手在编写代码之前就对构建的内容达成一致解决了AI编码助手在需求不明确的时候表现出不可预测的问题好,本期视频将为大家详细显示OpenSpy的使用方式并且我们在已有的项目上 使用OpenSpec为已有的项目新增功能</p>
</details>

### OpenSpec 的核心优势

在演示之前，我们首先了解OpenSpec的核心优势：

1.  **可预测、高质量、零猜测的代码输出**：OpenSpec确保代码具有真正的确定性。
2.  **工具无关性**：它原生支持**Cloud Code**、**Cursor**等多种AI编程助手。
3.  **专为现有项目设计**：在“1到N”的迭代阶段表现出色，能够轻松处理跨模块修改。
4.  **快速初始化与使用**：只需一条命令即可初始化并立即投入使用。
5.  **完整的变更历史与审计轨迹**：每次归档都能自动合并更新。
6.  **提升协作效率**：团队成员即使使用不同的AI编程助手，也能保持一致性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好在演示之前我们先看一下OpenSpec它的核心优势首先它输出的代码具有可预测高质量零猜测也就是真正的确定性还有就是与工具无关它原生支持Cloud Code的Cursor等多款AI编程助手 它专为现有项目设计在E到N阶段表现出色能够轻松处理跨模块修改只需要一条命令就可以初始化立即使用具备完整的变更历史和审计轨迹每次归档都能自动合并更新团队成员哪怕使用不同的AI编程助手也能保持一致提升协作效率</p>
</details>

### OpenSpec 与其他工具的对比

接下来，我们对比OpenSpec与**SpecKit**、**Kero**以及**WebCoding**：

*   **OpenSpec**：更适合“1到N”的项目迭代，具备双文件夹架构、清晰的变更追踪和跨规范更新能力。
*   **SpecKit**：更适合“0到1”的新项目构建，规范简单，易于上手。
*   **Kero**：仅实现了基础功能，管理分散，功能追踪困难。
*   **WebCoding**（无规范）：AI编码助手开发的功能不可预测，缺乏结构，风险较高。

因此，在已有项目基础上进行增量迭代时，OpenSpec是更优的选择。下面将详细演示OpenSpec的使用方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">下面我们再看一下OpenSpec与SpecIt还有Kero以及WebCoding的对比首先就是OpenSpec它更适合从1到N的项目它具备双文件夹架构显示变更追踪跨规范更新而SpecIt它更适合从0到1的项目 具有简单的规范适合新项目然后和亚马逊的Karo相比的话Karo只实现了基础的功能它的管理比较分散而且功能追踪比较困难如果使用没有任何规范的webcoding的话那么AI编码助手开发的这些功能就不可预测没有结构而且具备高风险所以在已有项目的基础上我们就可以使用OpenSpyke进行增量迭代下面为大家详细显示OpenSpyke使用方式</p>
</details>

### OpenSpec 完整工作流程概述与实战准备

OpenSpec的完整执行流程包括以下五个阶段：创建提议、审核规范、AI编程助手编码实施、测试验证，以及最终的文档归档。在后续的演示中，我们将根据流程图逐步进行，以便大家更好地理解OpenSpec的执行步骤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OpenSpec的完整执行流程我这里画了一个图包含创建提议审核规范然后在Cloud Code等AI编程助手中编码实施再进行测试验证最后归档文档然后这几个阶段的具体流程我这里都画了详细的图然后我们在演示的过程中演示到哪部分我们就可以直接参考这个图 像这样就能更方便大家理解OpenSPEC它的执行流程和步骤我们将在一个已有的项目上使用OpenSPEC为它新增功能像这个项目是我在之前的视频中为大家演示另一款工作流的时候开发了一个iOS番茄专注APP我们先将这个项目下载下来 好下面我们在Xcode中打开这个项目先查看一下目前它具备的功能这里运行成功目前它是一个最简单的番茄专注APP它只有默认的25分钟的专注时间我们就可以以这个项目为例使用OpenSPEC为它新增更多功能好下面我们先打开终端命令行先安装OpenSPEC</p>
</details>

我们将在一个已有项目上使用OpenSpec为其新增功能。这个项目是我在之前的视频中演示另一款工作流时开发的**iOS番茄专注应用**。首先，我们将该项目下载下来，并在**Xcode**中打开，查看其现有功能。目前，它是一个最简单的番茄专注应用，仅具备默认的25分钟专注时间。我们将以此项目为例，利用OpenSpec为其新增更多功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">我们将在一个已有的项目上使用OpenSPEC为它新增功能像这个项目是我在之前的视频中为大家演示另一款工作流的时候开发了一个iOS番茄专注APP我们先将这个项目下载下来 好下面我们在Xcode中打开这个项目先查看一下目前它具备的功能这里运行成功目前它是一个最简单的番茄专注APP它只有默认的25分钟的专注时间我们就可以以这个项目为例使用OpenSPEC为它新增更多功能好下面我们先打开终端命令行先安装OpenSPEC</p>
</details>

### 安装 OpenSpec

首先，打开终端命令行，安装OpenSpec。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好下面我们先打开终端命令行先安装OpenSPEC</p>
</details>

在安装前，请确保已安装**Node.js**（Node.js: 一个开源的JavaScript运行时环境），且版本号不低于20.19。您可以通过在终端命令行输入`node -v`来查看当前版本。如果未安装，可从官网下载或参考相关安装指南。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">首先我们先确保我们已经安装了nodejs并且版名号大约等于20.19我们只需要在中端命令行用node-version就可以看到我们的版名号如果没有安装的话也可以从官网下载安装或者直接查看我笔记中的安装命令好下面我们就可以执行这条命令 来安装OpenSpec我们直接在中端直接执行安装就可以下面我们需要进入我们蕃茄专注项目的路径我们直接执行cd命令进入到项目路径然后我们就可以执行这条命令在我们的项目中初始化OpenSpec的工作流我们直接粘贴并且运行就可以 然后按int进入下一步在这一步我们就可以选择我们所擅长使用的AI编程助手他这里包含Cloud CodeCursorOpenCodeKilo CodeWinServeCodex等等然后我这里就默认选择Cloud Code大家也可以选择自己熟悉的比如说Cursor好选中之后进入下一步到这一步他开始提示将下面这段内容发送给Cloud Code 我们直接复制这段内容然后打开VS Code用VS Code打开我们刚才查看的番茄专注项目在VS Code中我们打开Cloud Code然后将刚才复制的这段内容我们直接发送给Cloud Code可以看到他正在读取这些项目的文件这里他提示他已经了解了这个项目在这里可以看到他开始创建projectMD这个文件 好这里执行完成然后这里他说他已经将关于番茄专注应用的所有信息都填充到了project.md文件里然后我们就可以打开这个文件看一下这里包含目的还有技术战还有代码风格还有架构模式还包含测试策略等内容</p>
</details>

接下来，执行安装OpenSpec的命令。安装完成后，进入番茄专注项目的路径（使用`cd`命令），然后执行初始化OpenSpec工作流的命令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好下面我们就可以执行这条命令 来安装OpenSpec我们直接在中端直接执行安装就可以下面我们需要进入我们蕃茄专注项目的路径我们直接执行cd命令进入到项目路径然后我们就可以执行这条命令在我们的项目中初始化OpenSpec的工作流我们直接粘贴并且运行就可以</p>
</details>

按回车键进入下一步，此时可以选择您擅长的AI编程助手，例如**Cloud Code**、**Cursor**、**OpenCode**、**Kilo Code**、**WinServe**、**Codex**等。演示中默认选择Cloud Code。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">然后按int进入下一步在这一步我们就可以选择我们所擅长使用的AI编程助手他这里包含Cloud CodeCursorOpenCodeKilo CodeWinServeCodex等等然后我这里就默认选择Cloud Code大家也可以选择自己熟悉的比如说Cursor好选中之后进入下一步到这一步他开始提示将下面这段内容发送给Cloud Code</p>
</details>

选择完毕后，系统会提示将一段内容发送给Cloud Code。复制该内容，然后用**VS Code**打开番茄专注项目。在VS Code中打开Cloud Code插件，并将复制的内容发送给它。Cloud Code会开始读取项目文件，并提示已了解项目，随后创建`project.md`文件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">我们直接复制这段内容然后打开VS Code用VS Code打开我们刚才查看的番茄专注项目在VS Code中我们打开Cloud Code然后将刚才复制的这段内容我们直接发送给Cloud Code可以看到他正在读取这些项目的文件这里他提示他已经了解了这个项目在这里可以看到他开始创建projectMD这个文件</p>
</details>

执行完成后，Cloud Code会将关于番茄专注应用的所有信息填充到`project.md`文件中。打开该文件，可以看到其中包含项目目的、技术栈、代码风格、架构模式以及测试策略等内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好这里执行完成然后这里他说他已经将关于番茄专注应用的所有信息都填充到了project.md文件里然后我们就可以打开这个文件看一下这里包含目的还有技术战还有代码风格还有架构模式还包含测试策略等内容</p>
</details>

### 创建功能提议

至此，我们完成了OpenSpec工作流程的阶段一：创建提议（环境准备及项目初始化）。初始化项目后，可以看到它创建的文件结构。下一步是使用Cloud Code创建详细的功能提议，包括需求、设计和任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">像这样我们处于OpenSPEC整个工作流程中的阶段一流程也就是创建提议目前我们已经完成了环境准备以及确实化项目完成确实化项目之后我们就可以看到它创建的这些文件结构 也就是刚才我们在VS Code中看到的这些文件到下一步就是使用Cloud Code创建详细的功能提议包含需求设计和任务</p>
</details>

例如，为番茄专注应用添加一个自定义时长的功能。在Cloud Code中，只需输入斜杠命令`/OpenSpec proposal`，然后输入“自定义专注时长”并运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">然后我们只需要执行这条命令就可以比如说为番茄专注添加一个能够自定义时长的功能然后在Cloud Code中我们只需要输入斜杠命令加OpenSpec然后找到proposal这条命令然后我们输入自定义专注时长然后直接运行好这里它正在运行</p>
</details>

Cloud Code会根据`open spec proposal`命令为我们创建详细的功能提议。执行完成后，它会输出对当前执行方案的理解，并需要澄清一些具体细节，例如：

*   时长范围：需要哪些时长范围（最小/最大分钟数）？
*   用户在哪里配置自定义时长？
*   自定义时长如何影响统计数据？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">像这样我们就在cloud code中用open spec proposal命令让cloud code为我们创建详细的功能提议好这里很快执行完成然后这里他输出了他已经很好的理解了当前的执行方案他需要澄清下面这些具体的细节 首先是时长范围他问我们需要哪些时长范围包括最小多少分钟最大多少分钟还包含用户在哪里配置自定义时长还有自定义时长如何影响统计数据</p>
</details>

### 澄清与审核规范

针对Cloud Code的提问，我们直接回复进行澄清。例如，输入“支持180分钟的范围，可快速选择15、20、45、60、90分钟的市场。用户还可以使用slider或文本输入来设置市场。”然后运行，让Cloud Code根据描述澄清问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好下面我们就针对他询问的这几个问题我们直接回复 对这几个问题进行澄清好我们直接输入让它支持180分钟的范围我们可以快速选择15 20 45 60 90分钟的市场用户还可以使用slider或者文明输入来设置市场然后我们直接运行让cloud code根据我们的描述来澄清这个问题</p>
</details>

Cloud Code会提示将创建`proposal.md`和`task.md`文件。随后，它会输出提案已成功创建并经过验证，并提供总结和创建的文件列表。我们可以对这些文件内容进行审核，点击输出中的链接即可在右侧打开文件，并在左侧查看具体文件路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">这里他提示他将创建proposal md这个文件这里他正在创建task.md这个文件好 然后他输出这个提案已经成功创建并且经过验证下面是这些总结在下面这里是创建的这些文件我们还可以对这些文件内容进行相应的审核我们只需要根据他的输出点击就可以在右侧打开然后在左侧这里我们还可以查看具体的文件路径</p>
</details>

目前，我们处于OpenSpec工作流程的阶段二：审核规范。由于我们直接在VS Code中使用Cloud Code插件，审核过程非常便捷，无需执行额外命令。如果对文件内容不满意，可以手动修改，或通过自然语言描述让AI进行调整和优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好,现在我们所处的OpenSPEC的工作流程就是审核规范在时间线这里也就是阶段二因为我们直接是在VSCode中使用的Cloud Code插件所以审核起来非常方便就不需要执行这些命令因为我们直接是在VSCode中 就可以打开查看当这些文件审查我们感觉里面有不满意的地方时我们可以手动修改也可以让AI为我们调整和优化比如说可以用自然语言去描述哪些地方需要修改</p>
</details>

### AI 驱动的实施与测试验证

接下来进入阶段三：让Cloud Code自动读取这些规范，为我们开发实现所需添加的功能。在实施阶段，我们可以启动自动实施。Cloud Code会读取任务文件，并按顺序自动实施所有任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">下面我们就到了下一个步骤也就是阶段三让Cloud Code自动读取这些规范来为我们开发实现我们所需要添加的功能 在实施这个阶段我们可以启动自动实施Cloud Code会读取这些任务文件按顺序自动实施所有任务</p>
</details>

只需使用`/open spec apply`命令，Cloud Code就会为我们实施项目。例如，输入`/open spec apply [内容]`并运行。Cloud Code会输出它将实施自定义专注时长功能，并开始对项目代码进行修改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">我们只需要用open spec apply这条命令就可以让Cloud Code为我们实施这个项目我们直接输入香港命令加open spec然后找到apply命令在后面我们直接跟上这个内容然后直接运行就可以这里Cloud Code输出它将实施自定义专注市场的功能这里它开始对项目的代码进行修改</p>
</details>

等待约5分钟后，Cloud Code提示已成功实现自定义专注时长功能，并给出了总结和主要功能列表。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好在等待了大概5分钟左右这里提示它已经成功实现了自定义专注时长的功能这里还给出了这些总结在这里它列出了主要的功能</p>
</details>

现在，在Xcode中打开项目并运行，验证新增功能是否正常。启动成功后，点击允许，即可看到自定义时长功能。点击下拉菜单，可以选择15分钟、25分钟、45分钟等预设时长，也可以自定义时长，例如设置为1分钟。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好下面我们就在Xcode中打开这个项目然后我们运行一下看一下它为我们添加的这些功能能否正常执行好这里启动成功这里我们点击允许在这里我们就看到了这个自定义时长的功能我们可以点击下拉 这里包含15分钟25分钟45分钟然后我们还可以自定义时长我们将它定义成一分钟</p>
</details>

设置完成后，点击“开始专注”，倒计时开始。观察计时器，数字会明显增长。专注任务完成后，系统会提示任务已完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好这里就变成了一分钟然后我们点击开始专注这里开始倒计时然后我们看一下这个效果看一下这个数会不会增长好可以很明显的看出来这个数在增长 好这个专注任务完成这里输出了这个专注任务已经完成</p>
</details>

点击下方的“C0”查看任务列表，可以看到刚才完成的任务。再次启动一个专注任务并查看，确认功能正常。至此，我们完成了阶段四：测试验证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">然后我们点击下面的C0来看一下在C0里是否有刚才这个任务好这里显示了刚才这个任务然后我们再查看一下这个状态好这里有刚才的这个专注任务然后我们再启动一个专注任务查看一下然后点击开始可以看到刚开始这个数是非常小的 好这里这个任务完成我们再看一下c0这里就显示了刚才我们完成了这两个任务像这样我们就完成了阶段四测试验证</p>
</details>

### 归档文档与总结

接下来是阶段五：归档文档，将完成的变更进行归档并合并到规范的主库。只需执行`openspec archive`命令即可完成变更归档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">下面就到了阶段五也就是归档文档将完成的变更进行归档合并到规范的主库 我们只需要执行 openspec archive这条命令就可以完成变更归档</p>
</details>

在Cloud Code中，使用斜杠命令`/archive`并运行，它会验证所有规范格式，将`delta`合并到指定文件，并移动变更到相应文件，清空内容以准备下一个功能，并生成归档时间戳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好下面我们在 cloud code 中用斜杆命令找到 archive然后我们直接运行让他为我们完成归档归档操作他会验证所有规范格式合并 delta 到这个文件里并且移动变更到这个文件里然后清空这里面的内容准备下一个功能并且生成归档时间戳</p>
</details>

Cloud Code提示更改已成功归档，并提供了总结。至此，阶段五基本完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">好这里提示更改已经成功归档下面是做的总结 阶段5我们就基本完成了</p>
</details>

为了保存完整的历史记录，我们还可以将代码和文档提交到**Git**（Git: 一种分布式版本控制系统）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">下面我们还可以将代码和文档提交到Git来保存完整的历史为了节省时间这里就不再为了压执行了</p>
</details>

这样，我们就成功完成了OpenSpec的完整工作流，涵盖了从创建提议、审核规范、AI编程实施、测试验证到归档文档这五个阶段。如果需要继续新增功能，只需按照OpenSpec的工作流程重复上述步骤即可。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">这样我们就成功完成了OpenSPEC的完整的工作流从创建提议到选核规范到AI编程实施到测试与验证再到归档文档这五个阶段我们就成功完成了然后如果我们想继续新增功能的话还是按照OpenSPEC的工作流程</p>
</details>

通过遵循这些步骤，我们成功地在已有项目上使用OpenSpec，通过规范驱动开发新增功能，真正实现了从“1到N”的开发迭代。本期视频所用到的代码和笔记将放在视频下方的描述栏或评论区，也可通过博客查找。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">像这样我们就成功使用OpenSpec在我们已有的项目上用SpecDriven规范驱动开发为我们的项目新增功能从而真正实现了从1到n进行开发迭代我们只需要遵循这几个步骤就可以为我们已有的项目新增功能本期视频所用到的代码和笔记我都会放在视频下方的描述栏或者评论区如果你在视频下方无法找到的话也可以通过我的博客 去查找本期视频所对应的笔记本期视频就做到这里欢迎大家点赞关注和转发谢谢大家观看</p>
</details>