---
area: tech-engineering
category: ai-ml
companies_orgs:
- Google
date: '2025-11-19'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- ide-review
products_models:
- Gemini 3 Pro
- Gemini 3
- Claude Sonnet 4.5
- GPT 5.1
- Google AI Studio
- Cursor
- VS Code
- React
- Node.js
- Express
- PostgreSQL
- Minecraft
project: []
series: ''
source: https://www.youtube.com/watch?v=ob88sANtez8
speaker: AI超元域
status: evergreen
summary: 本视频围绕谷歌Gemini 3 Pro模型及其Anti-Gravity IDE的深度测评，对比了其在前端编程方面的能力与Anthropic的Claude
  Sonnet 4.5。通过一系列SVG图形、3D游戏及全栈项目测试，发现Gemini 3 Pro与Claude Sonnet 4.5在编程能力上并无显著差距，但在某些UI设计和项目完成度上Claude表现更佳。Anti-Gravity
  IDE功能完善，支持自动化UI测试，但Gemini 3 Pro存在额度限制。
tags:
- ai-model-comparison
- canada
- development
title: 深度测评：谷歌Gemini 3 Pro与Anti-Gravity IDE前端编程能力，对比Claude Sonnet 4.5
---
### 谷歌Gemini 3 Pro模型与Anti-Gravity IDE深度测评

谷歌在今天凌晨发布了**Gemini 3 Pro**（Google's latest large language model: 谷歌最新发布的大型语言模型），这款模型在多项基准测试中的得分非常高，甚至超越了Cloud 3.5和GPT 5.1。然而，经过一早上的测试发现，Gemini 3 Pro在前端编程方面的能力与**Cloud 3.5**（Anthropic's large language model: Anthropic公司开发的大型语言模型）比较接近，两款模型在前端编程能力方面没有非常明显的差距。目前，用户可以直接在**Google AI Studio**（Google's platform for AI development: 谷歌提供的AI开发平台）中使用Gemini 3 Pro Preview模型。同时，谷歌还发布了**Google Anti-Gravity**（Google's new integrated development environment: 谷歌新推出的集成开发环境），这款产品对标Cursor和Windsoft等编程**IDE**（Integrated Development Environment: 集成开发环境）。

本期视频将分为两部分：第一部分，在Google AI Studio中测试Gemini 3 Pro Preview的前端编程能力，并与Cloud 3的**Sonnet 4.5**（Anthropic's large language model: Anthropic公司开发的大型语言模型）进行对比；第二部分，在Anti-Gravity IDE中进行编程开发，通过一个结合前端及后端的全栈项目来测试Gemini 3 Pro的前后端编程能力以及Anti-Gravity IDE的使用方式。

### 前端编程能力对比测试：SVG图形与动画

我准备了多个测试题进行测试。首先看第一个测试题：用**SVG**（Scalable Vector Graphics: 一种基于XML的二维矢量图形格式）画出MacBook Pro的键盘布局，要求百分之百还原真实的键盘样式。同样的提示词发送给了Cloud Sonnet 4.5以及Gemini 3 Pro Preview，然后对比这两款模型用SVG画出的键盘布局。

首先，Gemini 3 Pro Preview画的MacBook键盘布局，其还原度非常高，无论是字母、图标、键盘大小还是布局，都与真实的MacBook Pro键盘非常接近。其缺点也比较明显：它画的这一排按键上的数字比较靠下，甚至超出了按键的区域。

接着对比Cloud 3的Sonnet 4.5画的键盘，它用SVG画出的键盘非常不错，键盘之间的空隙也画了出来，并且这一排按键上的数字并没有超出按键的区域。功能键的还原度也非常不错，包括调节亮度及调节声音的按键。

综合对比来看，Cloud Sonnet 4.5画出的键盘没有任何元素错位的地方，而Gemini 3 Pro的按键数字超出了区域，出现了元素错位。因此，在用SVG画键盘的这个测试题中，Cloud Sonnet 4.5完成得更好。

第二个测试题是：用SVG画出太阳系八大行星围绕太阳公转的动画，要求采用3D效果，百分之百还原。Cloud Sonnet 4.5画出的太阳系八大行星公转动画，放大后可以看到运行轨道，土星的星环也清晰可见，甚至放大后还能看到月亮围绕地球转。Gemini 3画出的动画效果也非常不错，包括土星的星环和木星的光影效果，放大后同样能看到月亮围绕地球转。这个测试题，Gemini 3和Cloud 3的Sonnet 4.5都完成得非常不错。

下一个SVG测试题是：用SVG画一猫一狗在草地上一前一后的走，天空中飘动着云和飞翔的鸟。Cloud 3的Sonnet 4.5画出的动画中，猫和狗的区别很明显，天空中飞动的鸟在飞到边缘区域后还会返回，飘动的云以及狗和猫走到边缘区域后也会返回。Gemini 3给出的效果中，狗和猫在草地上行走，但狗看起来并不是太像。天空中飘动的云和飞动的鸟，Gemini 3画出的鸟的运动效果与Cloud 3的Sonnet 4.5画出的鸟的运动效果非常像。这个测试题，两款AI完成得都比较不错，只是Gemini 3画的狗不太像。

### 3D游戏与复杂应用开发测试

接下来加大难度，让Cloud 3的Sonnet 4.5和Gemini 3创建一个3D风格的恐龙狩猎游戏，玩家能控制一辆车在侏罗纪时代追逐恐龙并进行射击。Cloud Sonnet 4.5完成的恐龙游戏是第一人称视角，可以发射子弹消灭恐龙，实现了音效和射击效果，非常不错。

同样的提示词测试Gemini 3，它实现的运行效果也非常好，有开始按钮，远处有雾蒙蒙的感觉，可以操控皮卡车移动。它生成的恐龙比Cloud 3.5的更像，射击时恐龙会掉血，效果比Cloud 3.5更好。这样看来，Gemini 3生成的游戏要比Cloud 3.5好很多。

再看另一个测试题：用**P5JS**（JavaScript库: 用于创意编程，简化图形和交互式应用的创建）实现自动巡路版贪吃蛇。Cloud 3.5实现的自动巡路版贪吃蛇会自动规划路径寻找食物并吃掉，吃掉后会自动变长，能规避障碍，下方显示分数，并可暂停和重新开始。Gemini 3实现的自动巡路贪吃蛇，背景色和主题不如Cloud Sonnet 4.5设计得好，但也能自动躲避障碍并寻找食物。这个测试题，Gemini 3和Cloud 3.5都实现得比较不错，Cloud 3.5在样式和主题设计上更胜一筹。

继续加大难度，让它们复刻一个简化版的Minecraft游戏，要求使用**HTML5**（HyperText Markup Language 5: 超文本标记语言第五版，用于构建网页内容的标准语言）、**JS**（JavaScript: 一种高级的、解释型的编程语言，主要用于网页开发）和**Three.js**（JavaScript库: 用于在网页浏览器中创建和显示3D图形）。Cloud 3.5完成的游戏效果，点击开始后是第一人称视角，可以用鼠标切换方向和角度，按空格键跳跃，方向键控制移动。点击草地可以挖出洞，效果非常不错，真的能模拟Minecraft游戏中的操作。还可以用键盘方向键选择下面的材料，如石头、泥土。

测试Gemini 3实现的效果，点击开始后也是第一人称视角，但游戏初始化后玩家始终悬浮在空中，跳跃时也处于悬浮状态，效果实现得并不好。点击物体后也没有任何效果。这个测试题，Cloud Sonnet 4.5完成得更好。

通过这几个有代表性的前端编程测试题的测试，总体看来，Gemini 3和Cloud Sonnet 4.5在编程能力上并没有明显的差距。

### Google Anti-Gravity IDE功能测试

接下来测试Google Anti-Gravity IDE的效果。它支持MacOS、Windows和Linux系统。下载安装后，用谷歌账号登录即可。这个IDE与Cursor以及Windsoft非常像，应该也是基于**VS Code**（Visual Studio Code: 微软开发的免费开源代码编辑器）。

首先，让Anti-Gravity分析一个开源项目。我选择了一个之前开发的开源项目，直接复制仓库链接并克隆。项目克隆成功后，在Anti-Gravity右侧可以选择模型，它支持Gemini 3 Pro，并且有趣的是，它竟然免费支持Cloud 3.5。这里先选择Gemini 3 Pro，模式选择Fast，然后输入提示词：“详细分析这个项目并生成分析报告以及函数地图，将结果存入**Markdown**（轻量级标记语言: 用于创建格式化文本）文件。”

运行后，可以看到使用方式与Cursor以及Windsoft基本没有太大区别，可以实时看到它读取的项目文件。它完成了项目分析，生成了分析报告，包括项目预览、使用的技术栈、关键特性、架构、核心组件分析以及函数地图。但它画的函数地图效果并不是太好。值得注意的是，输入的中文提示词，但它生成的内容是英文的。

### 全栈项目开发测试：背单词应用

现在使用Anti-Gravity从零构建一个项目。测试开发一个全栈的背单词应用：前端使用**React**（JavaScript库: 用于构建用户界面的前端框架）加**Chakra UI**（React组件库: 用于快速构建美观且可访问的用户界面），后端使用**Node.js**（JavaScript运行时环境: 允许在服务器端运行JavaScript代码）、**Express**（Node.js框架: 用于构建Web应用程序和API）加**SuperBase**（开源后端平台: 提供数据库、认证、实时订阅等功能）数据库（SuperBase **PostgreSQL**（关系型数据库管理系统: 一种功能强大的开源数据库）），并提供了SuperBase的相关配置。

前端功能包括背单词、学习、练习、测试、学习进度、底部导航。后端功能包括单词管理、进度追踪、练习算法、智能算法，还告知了核心的**API**（Application Programming Interface: 应用程序接口，定义了软件组件之间如何进行交互的一组规则）接口、设计要求及交付要求。为了更好地测试，先选择planning模式，让它根据提示词进行规划。默认选择Gemini 3 Pro，粘贴提示词并发送，让它进行规划。

它生成了任务规划，如果对计划不满意，还可以选中需要修改的地方通过对话方式进行修改。目前生成的任务规划尚可，然后点击按钮让它执行。它提示开始执行计划，并先生成了SQL文件。复制SQL文件内容，回到SuperBase的SQL editor中粘贴并执行，执行成功。

现在它开始生成具体的代码，同时可以查看它正在执行的命令。等待了大约10分钟后，它实现了这个功能。测试项目能否正常运行，先点击readme，根据提示执行命令运行项目。启动后出现报错，选中报错并发送给AI进行修复。它修复后重新运行，但前端启动后打开链接页面是空白的。复制报错信息粘贴并发送，看它能否一次修复。

经过多轮修复后，错误仍未修复。此时提示Gemini 3已超出配额，需要选择别的模型。选择其他模型后，切换到Cloud 3的Sonnet 4.5，继续输入让它修复错误。Cloud Sonnet 4.5成功调用了浏览器，并正在自动化操作浏览器进行自动化测试，测试背单词功能。它会对操作过程进行分析，出现报错后，输入继续让它继续任务。它再次调用浏览器并自动执行点击，能对自己开发的项目进行前端自动化测试，这个功能非常不错。它又自动点击了设置并开始执行分析。

最终，它提示已成功完成项目开发，并需要创建一个综合性总结。测试这个背单词应用的效果，单词卡片点击后可以查看英文解释，但没有给出中文解释，也没有发音按钮。练习、进度、设置功能都比较简单，并没有其他AI开发的完善。但总体来说效果尚可，因为最初是使用Gemini 3 Pro进行开发，但在后续调试中Gemini 3一直未能实现，直到切换到Cloud 3.5/4.5后，它才在Gemini 3的技术基础上成功实现了这个背单词应用。

这里生成了项目总结，因为切换到了Cloud Sonnet 4.5，所以它使用了中文给出了回答。通过在Anti-Gravity中的测试可以发现，可以免费使用Cloud Sonnet 4.5，而使用Gemini 3 Pro时有额度限制。这个项目在Gemini 3 Pro额度用完时仍未完成开发，但切换到Cloud Sonnet 4.5后就成功实现了项目。Anti-Gravity这个IDE总体来说非常完善，而且可以自动调用浏览器对开发的项目进行**UI**（User Interface: 用户界面，用户与软件系统交互的界面）调试。由于Gemini 3 Pro的额度在Anti-Gravity中已经用光，因此不再继续测试。

通过在Google AI Studio中使用Gemini 3开发前端项目，并在Anti-Gravity中开发一个全栈项目，可以发现，在编程能力方面，Gemini 3 Pro并没有完全领先于Cloud Sonnet 4.5。