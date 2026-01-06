---
author: AI超元域
date: '2026-01-05'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=Xm-n4m7IaZk
speaker: AI超元域
tags:
  - workflow-automation
  - ai-development-tools
  - prompt-engineering
  - code-optimization
title: 🚀Claude Code创始人Boris亲自揭秘：他的设置竟然如此简单！开箱即用才是最强工作流，复利工程思维让效率翻倍！Opus 4.5计划模式+iTerm2+斜杠命令+GitHub Actions
summary: Claude Code创始人Boris Ney分享了他出乎意料的简单工作流，强调开箱即用的强大功能，而非过度定制。他提出的“复利工程”概念，通过iTerm2多标签管理、共享的cloud.md文件、自定义斜杠命令及GitHub Actions等，显著提升开发效率。文章详细介绍了Opus 4.5计划模式、网页版多任务处理、子代理功能及反馈机制的重要性，为Claude Code用户提供了实用的优化策略。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Claude Code
products_models:
  - Opus 4.5
media_books: []
status: evergreen
---
Claude Code的创始人Boris Ney近期分享了他的使用技巧与心得，颠覆了许多人对其工具的预期。与普遍认为开发者会分享复杂高深的技巧不同，Boris强调Claude Code“开箱即用”的强大能力，并表示他本人并不进行过多定制。这与许多用户期望从创始人那里获得隐藏技巧的心理形成了对比。本次解读将结合实际项目，深入分析Boris分享的这些看似朴素却蕴含“复利工程”理念的技巧，这种理念认为每一个小的优化都能在未来成倍放大效率。

### 终端效率与基础配置
Boris分享的一个基础技巧是在终端中开启1到5个iTerm2标签页，并通过快捷键加序号快速切换。这种编号方式极大地提高了在多个终端会话间切换的便捷性。例如，使用快捷键 `Cmd + 3` 即可直接切换到第三个标签页。他还提到了iTerm2的官方文档，鼓励用户根据文档详细配置，以充分发挥其作为终端命令行的强大功能。在演示之前，为了展示Claude Code结合这些技巧的实际应用，首先初始化了一个iOS项目，并使用Xcode成功创建了一个新的iOS项目。随后，通过CD命令切换到项目目录，准备启动Claude Code进行开发。

### cloud.md：项目协作与智能引导的核心
在正式开发前，Boris分享了一个关键实践：使用 `a` 命令初始化一个 `cloud.md` 文件。这个文件包含了构建、运行命令、项目结构及架构相关内容。其核心价值在于团队共享此文件，并将其提交至Git仓库，团队成员每周都会对其进行多次更新。当团队发现Claude Code出现错误时，会将这些经验记录在 `cloud.md` 中，以避免未来重复犯错。在代码审查（PR）过程中，也常通过 `@Claude` 的方式，将相关内容作为PR的一部分添加到 `cloud.md` 文件中，并利用GitHub Actions实现自动化。

除了项目级别的 `cloud.md` 文件，还可以创建全局的 `cloud.md` 文件，使其作用于所有项目。作者展示了自己使用的全局 `cloud.md` 文件，并通过 `ant gravity` 工具分析了其作用。这些全局配置涵盖了上下文窗口管理，旨在克服AI模型上下文窗口的焦虑，明确指示AI持续工作、鼓励动手修改代码，并减少不必要的确认。此外，它还优化执行效率、进行质量保证以防止幻觉、约束设计哲学以避免过度设计和代码膨胀，并维护工作环境以保持代码整洁。这些配置共同作用，能够更好地发挥Claude Code的潜力。

### 工作流自动化：斜杠命令与GitHub Actions
Boris的分享中还提到了GitHub Actions，并展示了如何使用特定命令进行安装和项目初始化。他特别强调了将常见工作流封装成自定义斜杠命令（slash commands）的做法。通过这种方式，用户无需每次输入长提示词，只需使用简单的斜杠命令即可完成复杂操作，例如作者演示的初始化Git仓库、commit、push及PR的自定义斜杠命令。

在仓库初始化完成后，Boris分享了他如何使用Claude Code的GitHub Actions来管理项目。在将项目push到GitHub后，他展示了安装和设置Claude Code GitHub Action的流程，通过引导一步步完成配置。这种将重复性操作自动化，并集成到CI/CD流程中的做法，是提升开发效率的关键。

### Opus 4.5计划模式：深度开发与全自动执行
Boris提到他始终使用Opus 4.5模型，并偏好使用“计划模式”（Plan Mode），即通过连续按两次 `Shift + T` 来激活。在计划模式下，用户可以输入一个初步的提示词，Claude Code会先生成一个详细的开发计划。作者以开发一个原生的iOS背单词应用为例，展示了如何输入提示词，选择Opus 4.5模型，然后让Claude Code生成开发计划。

一旦开发计划生成，用户可以选择让Claude Code全自动执行这些开发任务。它会创建并按照计划中的任务逐步执行。开发完成后，可以利用之前设置的自定义斜杠命令创建一个新分支并提交代码，随后查看GitHub上的PR。甚至可以在PR中调出Claude Code进行代码审核，获取其反馈。

### 网页版与后台任务处理
Claude Code的网页版也提供了强大的功能。用户可以通过特定链接访问，选择项目，并输入任务提示词，例如“重构代码以优化性能并符合行业最佳实践”。这些任务可以在后台运行，即使关闭网页版也不会中断，这使得用户可以同时处理多个开发任务，并能从手机上查看运行状态或启动新任务。

### 高级功能与反馈机制的重要性
Boris还提到了Claude Code的Sub-agent功能，其作用类似于斜杠命令，能够自动化处理PR相关的大部分工作流程。此外，他还介绍了Claude Code的`s`功能，并以使用`post-to-use`格式化Claude Code生成的代码为例，说明其广泛的应用场景。

在权限管理方面，Boris建议不要让Claude Code获取所有权限，而是使用 `permission` 命令来明确设置允许执行的命令，包括允许执行、需要询问或拒绝执行的命令。对于运行时间非常长的任务，他推荐使用 `top` 命令或上期视频中演示过的相关技巧来管理。

总结Boris分享的核心理念，他强调让Claude Code能够验证其工作成果至关重要。提供这样的反馈机制，可以将最终结果的质量提升2到3倍。他特别提到了使用Claude Code的`mcp`扩展，该扩展能自动调用浏览器测试用户界面，并持续迭代直到代码运行正常且用户体验良好。作者本人也在之前的视频中演示过`cloud-code-chrome-mcp`插件，它能在Claude Code中自动调用Chrome浏览器进行测试。

通过Claude Code创始人Boris Ney的分享，我们可以看到，尽管他的使用方法和技巧可能对资深用户而言是基础操作，但这恰恰证明了Claude Code强大的可定制性和开箱即用的能力。默认设置已足以应对许多开发任务。Boris的分享对于刚接触Claude Code的新手用户尤其有帮助，它展示了如何通过简洁而有效的工作流，结合“复利工程”的思维，最大化AI开发工具的潜力。