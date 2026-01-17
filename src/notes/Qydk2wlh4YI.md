---
author: AI超元域
date: '2026-01-17'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=Qydk2wlh4YI
speaker: AI超元域
tags:
  - ai-autonomous-decision-making
  - decision-trees
  - agent-skills
  - code-review-automation
title: 🚀Agent Skills决策树高级技巧！让Antigravity和Claude Code减少80%手动干预，AI编程助手终于能自主决策了！Codex CLI+Gemini CLI实现智能化代码审查
summary: 本视频展示了Agent Skills生态中的高级技巧——决策术（Decision Trees），通过在.sm文件中嵌入结构化的if-else决策逻辑，赋予AI智能体（如Cloud Code、xI）自主决策能力。决策术解决了人机问答的困境，通过markdown文件明确定义条件、分支优先级排序和异常处理，减少50%-80%的手动干预，大幅提升智能度和任务完成效率。视频通过一个实际案例演示了使用决策树实现代码审查的agent，agent能够智能判断代码变更类型，自动路由到最适合的代码审查工具（如Jamin CI和Code Ex CI）。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Antigravity
  - Cloud Code
products_models:
  - GPT-4o
  - Cloud Code
  - Jamin CI
  - Code Ex CI
media_books: []
status: evergreen
---
本期视频的核心在于展示**Agent Skills**生态中一种被称为“灵魂技术”的高级技巧——**决策术**（Decision Trees）。与机器学习中的决策树不同，这里的决策术是指在`.sm`文件中嵌入结构化的`if-else`决策逻辑，赋予AI智能体（如**Cloud Code**、xI）真正的自主决策能力。

### 解决人机问答的困境

在使用Cloud Code等工具执行特定任务时，AI编程助手经常会询问“下一步该怎么做？”，这使得原本应该自动化的工作流变成了人机问答。**决策术**正是解决这一问题的终极方案。根据官方文档，通过markdown文件教会AI agent如何完成特定任务，而决策树优化则是在markdown文件中明确定义条件、分支优先级排序和异常处理，从而让AI编程助手能够自主判断并选择最佳方案，减少50%-80%的手动干预，大幅提升智能度和任务完成效率。

### 决策树的原理与应用

简单来说，**决策树**（Decision Tree）是一种通过层层`if-then`条件判断，从根节点到叶节点逐步筛选，最终得出确定性决策结果的树状逻辑结构。一个简单的例子是根据天气预报是否有雨进行决策：有雨则判断是否下大雨，下大雨带雨伞，不下大雨带折叠伞；无雨则根据外出时间长短决定是否带外套。

### 代码审查的智能化实践

本视频通过一个实际案例——使用决策树实现代码审查的agent——来演示这一技巧。该agent能够智能判断代码变更类型，自动路由到最适合的代码审查工具。具体来说，该agent集成了**Jamin CI**和**Code Ex CI**，并根据任务复杂度自主决策选择哪个工具进行代码审查。

**Jamin CI**和**Code Ex CI**是两种常用的代码审查工具。由于Code Ex进行代码审查速度较慢，通常用于复杂的变更或后端技术栈；而Jamin更适合前端代码审查。通过决策树，AI编程助手能够自主判断，无需手动干预，从而提高代码审查的专业性和效率。

此外，将一些任务分配给Jamin CI或Code Ex CI，还能大幅度节省Antigravity的token消耗。

### 决策树的流程与实现

在Antigravity中，决策树的实现流程如下：

1.  **环境检查**：检查是否存在git仓库。
2.  **工具可用性检查**：判断Jamin CI和Code Ex CI是否可用。
3.  **复杂度分析**：计算代码变更的复杂度评分。
4.  **路由决策**：根据预定义的规则进行决策。例如，如果代码中包含敏感文件、文件数大于20、行数大于500行，或涉及数据库迁移、API服务层修改等，则选择Code Ex CI；如果代码是纯前端、Python生态或纯文档，则选择Jamin CI。
5.  **执行代码审查**：执行选定的代码审查工具。
6.  **异常处理**：如果执行失败，尝试调用备用工具。

### 工作流的配置与调用

为了方便调用，该skill被配置成了斜杠命令。用户只需在Antigravity的输入框中输入斜杠命令，即可通过工作流的方式调用该skill，实现智能化代码审查。

总而言之，通过使用决策树，Antigravity和Cloud Code等AI编程助手能够具备自主决策的能力，从而大幅提升开发效率，减少手动干预，并节省资源消耗。