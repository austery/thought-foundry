---
author: AI超元域
date: '2026-01-15'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=KD2D59_XGd8
speaker: AI超元域
tags:
  - agent-skills
  - ai-coding
  - developer-tools
  - prompt-engineering
  - ui-ux-design
title: \"2026年Agent Skills元年：谷歌Antigravity革新AI编程，保姆级教程演示\"
summary: \"本视频介绍了谷歌Antigravity对Agent Skills的支持，标志着2026年成为AI编程的'Skills元年'。内容详细阐述了Agent Skills如何将工作流和最佳实践打包成模块化资产，超越传统的prompt engineering。视频提供了从安装、调用官方前端设计Skill创建咖啡店落地页，到手动创建用于代码审查的Skill，再到实测强大的UI UX Pro Max Skill构建拟物化To-Do List的完整教程，展示了Agent Skills在提升开发效率和UI/UX质量方面的巨大潜力。\"
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Google
  - OpenAI
products_models:
  - Antigravity
  - Agent Skills
  - UI UX Pro Max
  - GPT-4o
media_books: []
status: evergreen
---
### Agent Skills：AI编程的新范式

谷歌的 **Antigravity**（可能是指其集成开发环境或编程助手）现已正式支持 **Agent Skills**（智能体能力扩展格式）。这一进展紧随 **OpenAI** 在其编码工具中引入类似功能之后，标志着 2026 年将成为 **AI 编程的“Skills 元年”**。传统的 AI 编程模式，即仅依赖一句提示词（prompt）让 AI 临时发挥，正升级为一种更稳定、更强大的方式：为 AI 编程工具预装一套技能，使其能够按照既定能力稳定地产出代码。

**Agent Skills** 最初由某方开发，现已演变为一个开放标准，旨在解决 AI 在智能方面日益增长但仍缺乏特定领域知识、工作流程和最佳实践的核心问题。其作用是将公司、团队甚至个人的工作流、最佳实践、脚本等工具，像模块一样打包，供 AI 编程助手等智能体按需加载和反复复用。正如一句精辟的区分所言：**prompt** 是临时指令，而 **Agent Skills** 才是长期资产。

**Antigravity** 支持 **Agent Skills** 的意义非凡，尤其为非专业开发者带来了巨大福利。即使完全不懂编程，也可以通过安装现成的 Skills，打造一个真正懂自己业务的专属 AI 编程助手。**Agent Skills** 的本质可以被视为 AI 专用的业务手册，通过文件夹和 Markdown 文件打包知识、工作流、最佳实践及脚本。AI 智能体能够自动发现并按需加载特定的 Skills，实现能力复用、标准化，并采用渐进式加载机制，有效避免了上下文爆炸的问题。

本期视频将演示如何在 **Antigravity** 中使用和创建 **Agent Skills**，并重点介绍一个极具代表性的 Skill——**UI UX Pro Max**。我们将借助这个 Skill，让 **Antigravity** 创建出最现代化、最美观的 UI。该 Skill 能够让你在进行界面设计时，自动获得专业的配色、排版布局和交互建议，从而解决许多开发者面临的“产品能用但不美观”的难题。

### Antigravity实操：部署与创建Agent Skills

要在 **Antigravity** 中使用 **Agent Skills**，首先需要确保已将其升级到最新版本。接下来，我们可以先测试一下 **Antigravity** 官方发布的 Skills。官方提供了多种 Skills，涵盖前端设计和应用创建等领域。

要使用这些官方 Skills，只需将官方提供的项目克隆到本地。打开终端，使用 `git clone` 命令将项目克隆到本地路径。克隆完成后，使用 `cd` 命令进入项目路径。根据 **Antigravity** 官方文档，**Agent Skills** 可以放置在两个主要路径下：一是当前项目路径，允许 Skills 仅在当前项目加载；二是全局路径，使 Skills 在所有项目中都能被调用。

此处，我们选择将 Skills 放置在官方推荐的全局路径下。在终端执行相应的命令即可完成放置。之后，可以通过 `cd` 命令进入该全局路径，并使用 `ls` 命令列出已安装的 Skills。可以看到，这些 Skills 已成功放置在全局路径下。对于不习惯执行命令的用户，也可以直接将 Skills 文件夹全选复制，然后粘贴到指定的全局路径下。这样，无论在 **Antigravity** 中创建新项目，都能调用到全局路径下存放的这些 **Agent Skills**。

接下来，我们测试官方 Skills 中的前端设计能力。回到 **Antigravity** 界面，输入提示词：“创建一个咖啡店的落地页，并使用这个前端设计的 Skill。” 在模型选择上，我们选择了 **GPT-4o model**（根据原文“jap ro模型”推测），因为它非常适合用于前端 UI/UX 设计。点击发送后，**Antigravity** 开始搜索并需要运行命令，我们允许其执行。

令人惊叹的是，**Antigravity** 自动调用了一个 **image generation model**（根据原文“nano模型”推测）来生成网站所需的图像。点击打开，首先生成的是一张咖啡馆内部景象的图像，一杯热气腾腾的咖啡映入眼帘。接着，生成了第二张图像，是咖啡豆的特写。放大查看，可以看到 **Antigravity** 自动调用图像生成模型来创建图像，这是其他 AI 编程助手所不具备的功能。在使用其他工具时，它们通常不会自动生成图像，而 **Antigravity** 在开发前端 UI 时，能自动生成最适配的图像。

最终，咖啡馆落地页的创建成功，并使用了 **Next.js** 和 **TypeScript**。根据 **Antigravity** 给出的命令，我们复制并粘贴到 **Antigravity** 的终端运行。运行成功后，打开生成的链接，便看到了我们创建的咖啡馆落地页面。页面的背景图像正是之前由图像生成模型生成的，导航栏设计得非常出色。继续下拉页面，之前生成的咖啡豆图像也被巧妙地融入其中。整个咖啡馆落地页设计精美，配合 **image generation model** 生成的配图，效果非常不错，这可以说是 **Antigravity** 独有的 Skill。

至此，我们完成了在 **Antigravity** 中加载已有 **Agent Skills** 项目的测试。

下面，我们还可以测试一下手动创建 **Agent Skills**。在 **Antigravity** 官方文档中，提供了手动创建 Skills 的步骤，并给出了一个用于代码审查的最简单的 Skill 示例。我们可以使用这个官方给出的例子，在当前项目路径下来创建 Skill。

在当前项目中创建 Skill 非常简单。只需按照官方给出的文件路径进行创建。在 **Antigravity** 的终端命令行，执行创建用于存放 **Agent Skills** 的路径命令。创建成功后，将官方给出的案例内容复制，回到 **Antigravity**。在刚才创建的路径下，新建一个文件，命名为 `skill.md`，然后将复制的内容粘贴并保存。

下面我们就可以测试调用这个 Skill 进行代码审查。输入提示词：“使用 Code Review 审查当前项目的代码。” 点击运行，可以看到 **Antigravity** 正在读取 `skill.md` 文件，并分析项目代码。代码审查完成后，输出了审查结果，并给出了用于优化项目性能的建议。这就是在 **Antigravity** 中通过手动创建 Skill 并调用它的方式。

如果想创建更复杂的 Skill，可以考虑使用开源项目 `Skill Seeker`。该项目可以一键将任何开源项目或网站转化为 **Agent Skills**。

### UI UX Pro Max：赋能现代化UI设计

接下来，我将演示一款强大的用于 UI/UX 设计的 **Agent Skill**——**UI UX Pro Max**。它支持多种技术栈，包括默认的 HTML，还支持 **React**、**Next.js**，甚至 **Swift**、**React Native** 和 **Flutter**。

要在 **Antigravity** 中使用 **UI UX Pro Max** 非常简单。只需按照官方给出的命令执行即可。首先，复制这条 NPM 命令用于安装该项目。回到 **Antigravity**，在终端命令行粘贴并运行。安装成功后，再运行另一条命令，针对 **Antigravity** 进行安装。在 **Antigravity** 终端直接粘贴并运行。提示已安装成功。

在 **Antigravity** 中，我们只需要输入斜杠命令（例如 `/`）即可调出 **UI UX Pro Max**。下面，我们可以输入一个提示词：“让它使用 **React** 构建一个 **To-Do List**，要求使用拟物化的风格，包括添加任务、完成任务、删除任务的功能，并具有柔和的阴影和微妙的景深效果。” 这里我们依然使用 **GPT-4o model**。点击发送。

这样，在 **Antigravity** 中，它就能利用 **UI UX Pro Max** 这个 **Agent Skill** 来获取 UI 设计的经验和最佳实践，从而为我们生成更美观、更现代化的 UI。

在等待了几分钟后，项目的创建完成。运行查看效果，可以看到它成功为我们开发出了这个拟物化的 **To-Do List**。我们可以测试添加任务，输入任务后，会出现添加按钮，点击添加，任务成功加入。下面的任务完成后，可以点击完成。点击删除进行测试，然后我们再添加一个任务进行测试。任务添加成功后，点击完成。可以看到它设计的拟物化 UI 效果确实非常不错。

这样，我们就实现了在 **Antigravity** 中使用 **UI UX Pro Max** 这个 **Agent Skill** 项目，完成了 UI 设计。**Agent Skills** 还有更多更实用的应用场景。由于时间有限，本期视频只演示了用于 UI 设计的 **Agent Skills**。后续视频中，将演示更多实用的 **Agent Skills** 以及使用技巧和最佳实践。

本期视频就到这里，欢迎大家点赞、关注和转发，谢谢观看。