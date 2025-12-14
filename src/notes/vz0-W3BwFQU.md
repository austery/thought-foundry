---
author: AI超元域
date: '2025-12-14'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=vz0-W3BwFQU
speaker: AI超元域
tags:
  - ai-assisted-development
  - multi-agent-systems
  - mvp-prototyping
  - code-restructuring
  - automated-project-generation
title: Antigravity + Cloud OP 4.5 实测：重构智能体与零开发宠物领养平台MVP
summary: 本视频实测谷歌AI编程助手Antigravity集成Cloud OP 4.5模型，在不依赖被封的Cloud Code前提下，成功完成微软智能体框架重构与完整宠物领养平台MVP开发，验证其高效多智能体异步处理能力。
insight: ''
draft: true
series: ''
category: technology
area: tech-insights
project:
  - ai-impact-analysis
  - knowledge-pipeline
people:
  - ''
companies_orgs:
  - Google
  - Antigravity
products_models:
  - Cloud OP 4.5
  - Cloud Code
  - MCP
  - Superb
media_books:
  - ''
status: evergreen
---
### Antigravity 与 Cloud OP 4.5 的集成背景

谷歌近期在其AI编程助手Antigravity中，正式加入了对Cloud OP 4.5模型的支持。这一更新对大量因使用Cloud Code而遭遇封号的开发者而言具有重大意义。许多用户在注册Cloud官方账号后，往往在一天内就被限制访问，导致无法使用其核心AI编码能力。Antigravity的介入，使得开发者可以在不依赖被封禁的Cloud Code平台前提下，直接通过Antigravity调用Cloud OP 4.5模型，执行复杂的编程任务。

此外，Antigravity还支持**多智能体异步工作**（Multi-Agent Asynchronous Workflow），这意味着开发者可以同时启动前端与后端开发流程，显著提升项目迭代效率。本期内容将通过两个代表性案例——智能体框架重构与宠物领养平台MVP开发——来测试其实际能力，并评估Cloud OP 4.5的使用额度是否受限。

### 环境配置：规则文件与Superb MCP集成

安装Antigravity后，首先需进行全局设置。点击界面右上角的三个点 → “自定义” → 选择“全局规则”，即可编辑配置文件。该文件分为两大部分：

第一部分是**Python开发规范**，明确指定使用Python 3.11版本、虚拟环境创建方式（如`venv`）、运行命令规范、代码风格标准，并强调使用Python 3.11的新特性，以及依赖管理指令（如`pip install`）。

第二部分是**Next.js相关配置**，包括：使用Next.js 14版本、CSS样式规范（SS）、后端数据库选用Superb，以及认证方式、存储策略、强制约束、项目结构规范和运行命令。

完成配置后，需设置**MCP（Model Control Protocol）** 以连接Superb数据库。Superb是一个将后端功能打包的平台，提供数据库、用户认证、文件存储和实时更新服务，无需自行搭建服务器即可快速构建MVP原型。注册登录后，在账户页面生成API Token（可设为永不过期），将其填入Antigravity的MCP配置中。

系统随后会自动运行命令，验证规则文件加载成功，并确认Superb连接正常。此后，所有项目开发都将严格遵循上述规范。

### 案例一：智能体框架重构测试

我们首先测试Antigravity对复杂代码重构的能力。提示词要求其：

1. 阅读Google ADK官方文档；
2. 将基于微软智能体框架编写的“旅游规划智能体”代码，重构为Google ADK架构；
3. 将大模型接口替换为mAI接口，并设定模型为`mlarge-3`；
4. 保留原有逻辑与功能；
5. 增加Google ADK的UI操作界面；
6. 将API密钥存入`.env`文件。

在对话模式中选择**Fast模式**，粘贴完整提示词后执行。系统迅速开始阅读文档，并自动创建虚拟环境、安装依赖，整个过程流畅高效——相较此前在Code Ex中测试GPT-5.2时的缓慢响应，速度提升显著。

约数分钟后，系统提示重构完成，并询问是否启动Web UI进行测试。我们手动设置API Key后，输入指令：“我已经设置好了API，请为我启动Web UI”。系统随即在浏览器中打开前端界面。

我们输入：“规划70次3天的尼泊尔旅行计划”，系统输出结构清晰：第一部分为详细行程规划；第二部分为当地特色与活动建议；第三部分为尼泊尔常用语。其执行逻辑与原微软智能体完全一致，功能实现完整。

### 案例二：零基础开发宠物领养平台MVP

接着我们测试其从0到1构建完整应用的能力。本次任务是开发一个现代化的宠物领养平台MVP，与之前GPT-5.2失败的案例使用相同需求。

我们切换至**Planning模式**，使用Cloud OP 4.5制定开发计划。系统输出了清晰的分阶段任务列表，包括：项目初始化、前端框架搭建、数据库设计、后端API开发、认证系统集成等。

随后切换为**Cloud OP 4.5模型执行计划**。系统自动初始化项目，安装Next.js，并开始生成文件结构。在约10分钟内，系统完成了数据库设计、API开发、前端页面构建，并生成完整的README文件，包含安装步骤与运行说明。

随后，系统通过Superb MCP自动执行数据库迁移。我们选择使用Pro模型处理此任务（因简单高效），系统完整展示了其调用步骤，最终成功创建数据库结构。

项目代码生成后，系统提示`.env`文件未能自动写入。我们根据其提供的内容手动创建该配置文件，随后输入：“请为我运行项目”。系统成功启动应用。

我们打开浏览器，看到一个功能完整、界面美观的主页：导航栏清晰、领养入口明确、步骤说明详尽。点击“登录”后，支持邮箱、Google和GitHub三种方式注册——注册流程包含邮箱验证，验证成功后自动登录。个人中心可查看资料与领养申请设置。

我们以发布者身份测试“发布宠物信息”功能：上传照片、填写名称、品种、年龄（设为1岁）、性别、体型、毛色、地区、健康状况与性格，点击发布后系统提示成功。在“浏览领养宠物”页面中，我们看到发布的条目，但图像未显示。

### 问题修复：图像加载Bug的自动化处理

我们定位该问题：点击“查看元素”复制HTML内容，向Antigravity提交修复指令：“发布宠物时上传的图像没有显示”，并附上元素代码。系统立即分析，识别出是**权限配置问题**，并自动生成修复方案。

我们刷新页面后，图像正常显示，且动态效果良好。整个过程无需人工修改代码，仅通过自然语言指令完成。

### Cloud OP 4.5额度测试与结论

为验证使用是否受限，我们在新窗口中直接向Cloud OP 4.5提问：“给我一个智能体的代码示例”。系统不仅快速响应，还调用网络搜索获取多个真实案例，并提供相关文档链接。

尽管我们在宠物平台项目中已大量调用Cloud OP 4.5生成代码，系统仍能流畅处理新请求，未出现额度耗尽或响应延迟。我们使用的是Antigravity的Pro账户，在此配置下，Cloud OP 4.5的额度完全足以支撑复杂项目开发。

综上所述，Antigravity通过集成Cloud OP 4.5，不仅解决了Cloud Code封号问题，更实现了多智能体协同开发、自动化项目生成与Bug修复能力。它标志着AI编程助手从“代码补全”向“完整项目开发伙伴”的关键跃迁。