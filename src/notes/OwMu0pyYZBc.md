---
area: "tech-engineering"
category: technology
companies_orgs:
- Anthropic
- AWS
date: '2025-11-15'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude Code
project: []
series: ''
source: https://www.youtube.com/watch?v=OwMu0pyYZBc
speaker: Anthropic
status: evergreen
summary: 本文探讨了如何利用Anthropic的Claude Code工具，对遗留的COBOL代码库进行现代化改造。演示分为两个主要阶段：首先是“发现与文档化”，Claude
  Code通过创建专业子代理，自动分析代码架构、提取业务逻辑并生成详细文档和可视化图表。其次是“迁移与验证”，Claude Code在规划模式下，将核心COBOL功能迁移至Java，并创建双重测试线束，确保新旧代码在功能和数据上达到逐位精确的一致性。该方法显著提升了遗留系统改造的效率和信心。
tags:
- ai-code-generation
- code
- history
title: Claude Code：赋能 COBOL 遗留代码库现代化改造
---
### Claude Code 助力 COBOL 遗留代码现代化

让我们探讨开发者如何利用**Claude Code**来现代化**COBOL**（Common Business-Oriented Language: 一种面向事务处理的编程语言）代码库。为了本次演示，我们将使用**AWS**（Amazon Web Services: 亚马逊云计算服务）的**大型机**（mainframe: 一种高性能、高可靠性的计算机系统，常用于处理大规模关键业务数据）现代化演示存储库。这是一个中等规模的信用卡管理系统，包含大约100个文件，其中包括COBOL程序、**copybooks**（COBOL中的数据结构定义文件，用于定义共享的数据结构）和**JCL**（Job Control Language: 大型机作业控制语言，用于向操作系统提交作业）脚本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Let's explore how developers can use Cloud Code to modernize a COBOL codebase. For the purposes of this demo, we'll use AWS's mainframe modernization demo repository. This is a medium-sized credit card management system with around 100 files, including COBOL programs, copybooks, and JCL scripts.</p>
</details>

### 第一阶段：发现与文档化

我们的COBOL示例代码库几乎没有任何文档。当然，这在遗留代码库中很常见，其中关键业务逻辑和监管要求都嵌入在未文档化的代码中。编写这些代码的开发人员早已离开了组织，而熟悉COBOL的开发人员也很难招聘到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase 1, Discovery and Documentation Our sample COBOL codebase has almost no documentation. This is, of course, common with legacy code bases where critical business logic and regulatory requirements are embedded within undocumented code. The developers who wrote the code have long since left the organization, and developers familiar with COBOL are hard to hire.</p>
</details>

我们首先使用`clodcode/agent`命令创建了一个专门的**子代理**（subagent: 独立运行、拥有隔离上下文的AI代理）。这个子代理充当了我们的COBOL文档专家和翻译器。子代理可以由Claude Code并行调用，它们以自己独立的**上下文窗口**（context windows: AI模型处理信息的能力范围）运行，以避免污染主线程。我们启用了**思考模式**（thinking mode: AI在执行任务前进行规划和分析的模式），并要求Claude Code分析代码库的架构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We first create a specialized subagent using clodcode/agent command. This was our COBOL documentation expert and translator. Subagents can be invoked by cloud code in parallel, and they operate with their own isolated context windows. to avoid polluting the main thread. We enabled thinking mode and asked Claude Code to analyze the architecture of the codebase.</p>
</details>

Claude Code创建了一个包含所有94个文件的待办事项列表，并跟踪其进度，以确保没有文件被重复处理，也没有任何遗漏。Claude生成的文档超越了简单的代码注释。例如，让我们看看利息计算程序`CBA CT04C`。它提取了完整的业务工作流程，包括程序如何读取交易类别余额、按账户组查找利率、应用备用利率的业务规则以及更新账户记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude Code created a to-do list of all 94 files and tracked its progress to ensure no files were processed twice and nothing was missed. The documentation Claude produced went beyond simple code comments. For example, let's look at the interest calculation program CBA CT04C. It extracted the complete business workflow, how the program reads transaction category balances, looks up interest rates by account group, applies business rules for fallback rates, and updates account records.</p>
</details>

Claude为每个文件都完成了这项工作，但同时也创建了两个纯文本的内存文件。`Catalog.txt`将`cbact04c`等神秘名称翻译成“利息计算批处理程序”。`Relationships.txt`使用简单的管道分隔格式映射了每个依赖关系。利用这些索引，Claude随后生成了**美人鱼图**（Mermaid diagrams: 一种基于文本的图表绘制工具，用于生成流程图、序列图等），这是一个完整的日常批处理工作流程图，展示了数据如何从交易输入流经批处理、利息计算，最终到达客户对账单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude did this for each file, but also created two memory files as plain text. Catalog.txt translates cryptic names like cbact04c into interest calculator batch program. Relationships.txt maps every dependency using a simple pipe delimited format. Using these indices, Claude then generated mermaid diagrams, a complete map of the daily batch processing workflow, showing how the data flows from transaction input through posting, interest calculation, and finally to customer statements.</p>
</details>

在此次演示中，Claude Code持续运行了一小时，起草了超过100页的文档。但Claude Code能够自主运行超过30小时。这里使用的技术也适用于规模大得多的代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In this demo, Claude Code ran continuously for an hour to draft over 100 pages of documentation. But Claude Code is capable of running for over 30 hours autonomously. And the techniques used here scale to much, much larger code bases.</p>
</details>

### 第二阶段：迁移与验证

在彻底文档化COBOL代码库之后，我们要求Claude将其核心功能之一迁移到Java。我们切换到**规划模式**（planning mode: AI在执行复杂任务前制定详细策略的模式），以确保Claude会全面思考整个迁移策略，而不会过早地编辑文件。Claude分析了之前名为`CBA-CT04C`的程序，并识别出复杂的COBOL模式，如换行符处理和多文件协调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Phase 2, Migration and Verification. After thoroughly documenting the Cobalt codebase, we asked Claude to migrate one of its core features to Java. We switched to planning mode to ensure Claude would think through the entire migration strategy without prematurely editing files. Claude analyzed the program formerly known as CBA-CT04C and identified complex Cobalt patterns like line break processing and multi-file coordination.</p>
</details>

Claude为该功能制定了一个包含五个阶段的迁移计划：1. 创建项目结构。2. 将数据模型从copybooks翻译成Java类。3. 构建与原始文件格式兼容的I/O层。4. 转换业务逻辑，同时保留COBOL特有的行为。最后，创建**双重测试线束**（dual test harness: 同时运行新旧代码进行对比测试的框架），一个使用`GNU/COBOL 3.2.0`用于原始代码库，另一个使用`Java 17`。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Claude developed a migration plan for this feature with five phases. 1. Create the project structure. 2. Translate data models from copybooks to java classes. 3. Build the I/O layer compatible with the original file formats. 4. Convert business logic while preserving COBOL-specific behaviors. And finally, create a dual test harness, one using GNU/COBOL 3.2.0 for the original codebase, and one in Java 17.</p>
</details>

生成的Java代码超越了简单的语法翻译。Claude创建了带有适当设计模式、错误处理和日志记录的规范Java类。这是现代开发团队实际会维护的**符合Java语言习惯的代码**（Idiomatic Java: 符合Java语言习惯和最佳实践的代码）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The resulting Java code went beyond a simple syntax translation. Claude created proper Java classes with appropriate design patterns, error handling, and logging. Idiomatic Java that a modern development team would actually maintain.</p>
</details>

接下来是验证，以确保新的Java代码与它所替换的COBOL代码功能相同。Claude创建了多个测试数据文件，并针对原始COBOL程序和新程序运行它们。验证不仅比较最终输出，还比较中间计算、文件写入和数据转换。结果是完美的**逐位精确**（bit-for-bit fidelity: 指数据或输出在二进制层面完全一致）一致性。每个计算、业务规则和边缘情况都得到了保留。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next was verification to ensure that the new Java code worked the same as the COBOL code it was replacing. Claude created multiple test data files and ran them against both the original COBOL and the new programs. The verification compared not just final outputs, but intermediate calculations, file writes, and data transformations. The result was perfect bit-for-bit fidelity. Every calculation, business rule, and edge case was preserved.</p>
</details>

当然，这个演示应用程序比您的遗留COBOL代码库小得多，但这里所有的技术都是可扩展的。Claude Code将赋能您的开发人员，以12个月前根本不可能实现的信心和效率来现代化代码库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Of course, this demo application is far smaller than your legacy COBOL code bases, but all the techniques here are scalable. Cloud Code will empower your developers to modernize code bases with confidence and efficiency that simply would have been impossible just 12 months ago.</p>
</details>