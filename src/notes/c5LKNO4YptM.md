---
author: AI超元域
date: '2026-01-31'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=c5LKNO4YptM
speaker: AI超元域
tags:
  - ai-agent
  - automation
  - continuous-learning
  - specification-driven-development
  - prompt-engineering
title: OpenClaw：AI超级助手进化实录 - 自动学习与零干预开发
summary: 本期视频深入探讨了OpenClaw（原CloudBo/MolBot）作为AI超级助手的强大功能。它具备持久记忆、定时任务、智能家居控制及边执行边学习的能力，并能自动更新技能以规避过往错误。视频详细演示了OpenClaw如何自动发布内容、生成播客，并重点展示了其通过控制Claude Code实现零干预的规格驱动开发（SDD）全过程，包括代码生成、UI优化、错误调试及经验固化到技能中，最终实现AI的持续进化与高效任务处理。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
products_models:
  - GPT-4o
  - OpenClaw
  - Claude Code
  - OpenSpec
media_books: []
status: evergreen
---
### OpenClaw：AI超级助手的诞生与核心能力

本期视频将深入探讨 **OpenClaw**（前身为 CloudBo，后改名为 MoltBo，最终定名 OpenClaw）的真实使用场景与核心技巧。通过我这几天的深度使用，最大的感受是 OpenClaw 远不止是一个简单的即时通讯软件，它更像一个**超级助力**。其核心优势在于具备**持久的记忆**与**定时任务**功能，甚至还能通过 **Home Assistant** 控制智能家居。更令人瞩目的是，它能够**边执行任务边学习**，能够记住之前遇到的“坑”和问题，并将这些宝贵的经验同步更新到对应的 **skill** 中，从而实现自我进化。

对于大家普遍担心的 OpenClaw 安全性问题，我的测试表明这种担忧是**完全没必要的**。在经过高强度测试，让 OpenClaw 执行各种敏感操作时，它表现出了极高的安全性。例如，当执行删除系统 `/ga` 目录下所有文件的命令时，OpenClaw 能够准确识别并执行，这相当于自毁服务器的操作。然而，它并不会鲁莽行事。当我要求它显示存储 API Key 的配置文件内容时，OpenClaw 智能地识别出这些信息是敏感内容，不能直接透露。它不会直接发送整个文件，而是仅提供文件中的配置信息，**绝不泄露 API Key 等敏感数据**。因此，自媒体上流传的关于 OpenClaw 删除用户数据或文件的说法，我个人认为多是为了博取流量而故意编造的话题。

此外，OpenClaw 已经实现了许多令人惊叹的自动化功能。我成功地利用它实现了**自动发布 expos t** 的功能，并且还设置了**每天早上 8 点准时生成与 AI 相关的英文播客**。一旦播客生成完毕，它会自动推送音频文件给我，方便我随时收听，例如在通勤路上，就像这样：“ative I. We've got some seriously mind blowing stuff to dive into today. Oh, I am so ready. This feels like we're peeking into the future, doesn't it?” 这样的功能，让我们每天都能通过 OpenClaw 生成的 AI 播客来练习英语听力。

更进一步，我甚至实现了让 OpenClaw **操控 Claude Code**，通过**规格驱动开发 (Specification-Driven Development, SDD)** 来完成任务。这意味着整个操作流程都由 OpenClaw 来主导，我们无需手动干预。当 OpenClaw 完成一个操作流程后，它会学习到其中的操作技巧和经验，并能将这些经验直接写入对应的 skill。这样，下次它再执行类似任务时，就能读取 skill 中积累的经验和技巧，通过不断迭代 OpenClaw 的记忆和 skill，使其变得越来越聪明。可以说，OpenClaw 更像一个能够**自动进化的 AI 智能体**，越用越智能。

接下来，我将为大家详细分享这几天的使用经验，包括如何实现自动发布 expos t、定时生成英文播客，以及如何操控 Claude Code 调用 spec 实现规格驱动开发。为了让 OpenClaw 更加智能，我这里使用了 **GPT-4o** 模型（原文提及 GPT 5.2，推测为 GPT-4o 或同级别模型），因为测试发现它能完成更复杂的任务。我之所以没有选择 Claude 模型，是担心账号被封禁。

为了实现这些自动化功能，我为每个场景都编写了一个对应的 **skill**。例如，我创建了一个用于在 Claude Code 或 OpenClaw 中实现自动发布 expos t 的 skill；另一个 skill 用于生成每日英文播客（也可根据需要修改为中文播客，我个人是为了练习英语听力）；第三个 skill 则用于在 OpenClaw 中调用 Claude Code，通过 spec 或 OpenSpec 实现真正的规格驱动开发。

### 规格驱动开发 (SDD) 的实战：OpenClaw 操控 Claude Code 实现自动化开发

现在，我们来 OpenClaw 中测试一下这个能够自动生成播客的功能。它的核心能力是将**任何一个链接里的文章内容**转化为播客风格的 MP3 音频。我通过一个开源的播客生成项目，将其改写成了一个 skill。详细的配置方式可以在该项目的说明文档中找到。

以实际操作为例，我们随便找一篇科技文章，复制其链接。然后回到聊天软件，直接输入提示词：“将这篇文章，通过播客 skill 生成英文播客。”发送后，OpenClaw 很快便为我们生成了播客音频。这样，我们就实现了在 OpenClaw 中为我们生成播客。

更进一步，我们可以将此功能设置为**定时任务**。例如，让它每天早上 7 点自动生成一篇播客并推送给我。只需发送指令：“设置每天早上 7 点自动生成一篇播客并推送给我。” OpenClaw 随即完成了这个定时任务的设置。任务内容是从指定网站的 RSS 源中选取一篇文章，生成英文播客，并在每天早上 7 点推送给我。

接下来，我们将深入探讨 OpenClaw 最核心也是最复杂的应用场景：**操控 Claude Code**，通过**规格驱动开发 (SDD)** 来实现真正的自动化开发。这个过程展示了 OpenClaw 如何成为一个能够理解指令、执行复杂开发任务的智能体。

我们从一个简单的例子开始：如何让 OpenClaw 调用 Claude Code 来开发一个应用。我输入的提示词是：“调用 Claude Code，使用 OpenSpec，开发一个 X 风格的私人日记外部应用。要求具有简单的发送输入框、无线滚动时间线、情绪标签、图片上传、日历以及去年今日回顾的功能。” 发送这个指令后，OpenClaw 便开始尝试通过其 skill 来调用 Claude Code 完成这个项目的开发。

为了理解这个过程是如何实现的，我回顾了昨天我是如何一步步完善这个调用 Claude Code 的 skill 的。起初，最简单的方式是直接将 **Claude Code 的官方文档**发送给 OpenClaw，并明确指示它“深度阅读官方文档，然后创建一个 OpenClaw 可以调用的 skill”。OpenClaw 接收到文档后，迅速进行了阅读，并很快开发出了能够调用 Claude Code 的 skill。在此过程中，它还会询问需要将 skill 推送到哪个仓库，并根据我的反馈（或自行建议）创建新仓库并推送代码，例如我们刚才看到的那个 GitHub 仓库。

随后，我让它通过这个 skill，让 Claude Code 开发一个登录页的 UI，并运行以供我查看效果。运行后，它发送了开发的登录页 UI 截图，并将代码直接打包发送给我。当我反馈“这个页面看起来不美观”，要求它使用 Claude Code 进行优化时，它调用 Claude Code 进行了优化，并给出了访问链接。在这个阶段，我还指导它“以后都用英文和 Claude Code 对话”，它也表示记住了，并开始用英文进行交互。

通过上述测试，OpenClaw 已经能够轻松调用 Claude Code。接着，我将 **Spec Ate 的官方文档**发送给它，要求它阅读文档，为 Claude Code 配置工作流，并使用 Claude Code 和 Spec 来开发一个拟物风格的 **to-do list 应用**。它开始执行操作，但配置的链接访问时出现了报错。我将报错信息发送给它，要求其修复。经过几轮迭代，它终于将报错修复。我确认可以跑通后，询问它是否全程都让 Claude Code 使用 Spec Ate 实现开发，它回答“没有全程”。我追问原因，它给出了具体的解决方案。随后，我让它进行测试，它在测试中遇到的问题被存储到了它的记忆文件中，并给出了具体的解决方案。我指示它将当前能正常执行的方式更新到调用 Claude Code 的 skill 中，确保下次能正确执行，并同步 push 到 GitHub 仓库。

接着，我提出了一个更复杂的开发场景：让它调用 Claude Code 开发一个**移动端优先的“猜单词”应用**，并提供了具体的实现要求。在开发过程中，我还可以随时询问其进展。当它完成开发后，给出的访问地址出现报错。经过两三次迭代，它成功修复了报错。我再次强调将解决方案存入记忆，防止下次重现。项目最终测试通过后，我要求它将整个操控 Claude Code 的开发经验和技巧更新到对应的 skill 中。它将解决方案和踩过的坑都更新到了 skill 中，并确认已同步到记忆文件中。

### OpenSpec 的集成与 AI 智能体的持续进化

在掌握了通过 OpenClaw 操控 Claude Code 进行 SDD 的基本流程后，我们进一步引入了 **OpenSpec**。我将 OpenSpec 的官方文档发送给 OpenClaw，要求它根据之前的经验和技巧，为 Claude Code 配置 OpenSpec，并使用 OpenSpec 进行项目开发。得益于之前的学习和经验积累，OpenClaw 在配置 OpenSpec 时显得非常轻松和高效，很快就完成了配置并给出了使用方式。

为了验证其能力，我让它做一个简单的 demo 来测试。它在 Claude Code 中，通过 OpenSpec 工作流实现了一个项目开发。紧接着，我要求它将 OpenSpec 的使用技巧和经验同步更新到 Claude skill 中。它将 OpenSpec 的使用技巧更新到了记忆文件和 skill 中。我进一步要求它记住，每当调用这个 skill 时，一旦有了新的使用技巧和经验，都必须同步更新到 skill 中并 push 到 GitHub。它记住了这个要求，并将更新添加到其记忆中。我询问它学到了哪些经验和技巧，它列出了具体的学习内容。

至此，我们完成了整个流程：提出需求，让 OpenClaw 执行，观察并测试是否报错，若报错则进行调试，最后将踩过的坑和总结的经验编写为 skill，推送到 GitHub。然后重复测试这个 skill，再次观察调试，不断更新 skill 并推送，再重复测试。通过这样的**循环迭代**，OpenClaw 能够持续优化其 skill，最终得到一个非常完善且高效的解决方案。

刚才我们提出的开发需求（开发一个 X 风格的私人日记应用），OpenClaw 已经完成了开发，并给出了访问链接。经过测试，我们看到它确实调用 Claude Code 使用 OpenSpec 为我们开发了这个私人日记应用，并且生成了一些示例数据。我们可以输入内容进行测试，选择标签，点击记录，发送成功。这个项目完全是由 OpenClaw 通过 Claude Code skill，利用 OpenSpec 规格驱动开发完成的。

通过这种方式，我们可以让 OpenClaw 不断迭代其 skill，并持续更新其记忆库，使其变得越来越聪明。当对应的 skill 迭代到一定程度时，OpenClaw 就能轻松完成我们交给它的任何任务。

本期视频就分享到这里。欢迎大家点赞、关注和转发，谢谢大家观看。