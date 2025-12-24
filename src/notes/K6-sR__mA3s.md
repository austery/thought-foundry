---
area: tech-engineering
category: ai-ml
companies_orgs:
- Anthropic
- Microsoft
date: 2025-10-30
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: '[]'
people: '[]'
products_models:
- Claude
- Claude Code
- MCP
project:
- ai-impact-analysis
- knowledge-pipeline
series: ''
source: https://www.youtube.com/watch?v=K6-sR__mA3s
speaker: AI超元域
status: evergreen
summary: Anthropic的Agent Skills功能为AI定制化带来重大突破，但手动创建Skill耗时费力。本视频介绍开源工具Skill Seeker，它能自动化将任何文档、网站或PDF转换为Claude
  AI的技能包。通过智能爬虫、AI增强和自动打包，Skill Seeker大幅降低学习新框架和开源项目的成本，实现高质量的技能输出，并演示了如何利用它为CrewAI和AutoGen框架生成智能体代码。
tags:
- developer-productivity
- documentation-automation
- learning
- skill
title: Skill Seeker：让Claude成为你的技术导师，告别框架学习文档噩梦
---

### AI Agent Skills与Skill Seeker简介

Anthropic 最近密集发布了新功能，尤其是前几天发布的**Agent Skills**（AI代理技能：允许AI模型加载自定义指令、脚本和资源，以在特定任务上表现更出色）和**Claude Code Web**（Claude AI的网页版编程环境）。对于AI编码的场景，这些功能非常有帮助，特别是Agent Skills功能被普遍认为是AI定制化领域的一次重大突破。

Skills功能允许Claude加载自定义的指令、脚本和资源，使其在特定任务上表现更加出色。相比以前Anthropic发布的**MCP**（Many-shot CoT Prompting：一种预先加载大量描述信息以增强AI能力的旧功能），Skills只需要加载30到50个tokens的描述，仅在需要特定功能时才拉取完整信息，所以在理论上Agent Skills具有无限容量。与MCP需要多个组件架构相比，Agent Skills只需要一个Markdown文件再配合其他可选资源，其复杂度远低于MCP。因此，Agent Skills发布后备受好评，大家都在创建自己的Skills。

然而，平时我们使用Claude自带的Skills Creator来创建我们自己的Skills时，效果可能不尽如人意，创建出的Skills可能达不到我们的要求。因此，本期视频将为大家演示一款开源的Skills生成项目——**Skill Seeker**。它是一款强大的自动化工具，专门用于将任何文档网站或PDF文件转换为Claude AI的技能包。它解决了一个关键痛点：手动创建Claude Skill需要花费较长时间用于阅读和总结文档，而使用这个工具可以在几分钟到十几分钟内自动完成整个过程。

有了Skill Seeker，我们学习任何新框架和开源项目的成本都降为了零。我使用这个工具创建了一个能够将Claude Code写出的代码由**Codex CLI**（一种代码审查工具）进行代码审查，然后再由Claude Code根据审查结果对代码进行优化的Skill。我还使用这个工具创建了一个支持用微软的**AutoGen**（Microsoft开发的一个多智能体对话框架）框架来生成智能体代码的Skill。这样，我们就可以在Claude Code中输入需求，然后由Claude Code自动调用AutoGen框架为我们生成智能体代码。

### Skill Seeker的概念与核心优势

在演示之前，我们先看一下Skill Seeker的概念以及优势。它是一个强大的自动化工具，专门用于将任何文档网站转换为Claude AI可用的技能包。它通过智能爬虫、AI增强和自动打包三大核心技术，无需我们阅读和手动整理文档即可全自动创建高质量的Claude Skills。这样我们就可以大幅度节省时间，并且实现高质量的输出，而且它适用于任何文档网站，支持所有主流的编程语言，我们还可以将PDF转换为Skills。

下面我们看一下它的核心优势：
首先，它通过爬虫引擎抓取网页内容，支持任何文档网站结构，能够自动识别页面结构，智能过滤无关内容，支持自定义选择器，适用于99%的文档网站。
其次，它使用Claude AI将基础内容转换为专业级指南，能够提取最佳代码示例，生成快速参考指南，并添加使用场景。
它还包含本地或API两种使用方式，以及智能缓存系统，爬取一次随时能够重建，支持快速迭代。
它还具备智能内容分类，能够自动识别和组织文档内容，创建清晰的结构。
它还具备代码语言检测，能够自动识别编程语言，添加语法高亮标注。
最后，它支持一键打包部署，能够自动生成Claude和Claude Code可用的zip技能包，具备完整的目录结构，即传即用，5到10秒即可完成。

Skill Seeker的详细工作流程分为4个阶段：
第一阶段是智能爬取，使用高级网页爬虫自动访问文档网站的所有页面，通过智能算法识别主要内容区域，从而实现提取纯净的文档。
第二阶段是智能分类，对提取的内容进行深度分析，将文档自动分类到不同的主题类别中。
第三阶段是AI深度增强，Claude AI会深度分析提取的文档内容，识别最佳实践，提取关键代码示例，生成使用场景说明，并创建全面的Skill文件。
第四阶段是自动打包部署，将所有内容按照Claude Skill的技能标准进行打包，最后生成可以直接上传到Claude的zip文件。
所以使用这个工具，我们就可以将任何开源项目或者框架打包成Skills。

### Skill Seeker结合CrewAI的实战演示

下面为大家详细演示和测试Skill Seeker的使用方式，并且我们使用它来结合实际的开源项目来创建Skills。使用这个项目非常简单，我们只需要按照官方给出的命令去执行就可以。

首先，我们需要将这个项目克隆到本地。我们直接打开终端命令行，Windows用户打开CMD，用`git clone`命令将这个项目克隆到本地。克隆完成后，我们用`cd`命令进入到这个项目的路径。然后我们再执行安装命令。安装完成后，我们就可以在Claude Code中直接使用自然语言再加上指定的文档网站的链接，就可以让它自动为我们生成Skills。

下面我们可以找一个开源的智能体框架——**CrewAI**（一个用于编排多智能体协作的框架），然后找到它的文档网站。在Claude Code中使用Skill Seeker根据CrewAI的文档创建Skill。我们回到终端命令行，打开Claude Code，在Claude Code中我们直接输入自然语言描述再加上刚才的链接。我输入的是“生成CrewAI Skill”，这样的自然语言描述大家也可以直接用中文去描述。然后我们一运行，可以看到它开始抓取CrewAI官方文档的这些内容。

这里可以看到它将我们的任务分解成了四个子任务：第一个子任务是创建配置文件，第二个子任务是评估页面数量，第三个子任务是抓取CrewAI的文档，第四个子任务是打包成zip文件。这四个子任务就会由它全自动去完成。可以看到这里它自动打开了一个终端，我们这里允许它执行这个终端执行的任务就是抓取这些文档。然后这里它又掀开了一个终端，我们这也允许它执行。然后这里它又开启了另一个终端，我们让它执行。

在等待了大概7到8分钟左右，这些任务已经完成。它已经将CrewAI智能体框架创建成了Skill，并且将创建好的Skill打包成了ZIP文件放在了指定的路径下。下面我们可以进入Claude AI的网页版，在Skills这里我们点击上传，然后找到它创建的CrewAI这个Zip文件，点击上传。这里提示上传成功，这里就显示了CrewAI这个Skill。

然后我们测试一下这个Skill的效果。进入到这个默认的对话框，我们直接运行它默认的提示词，看一下它能否生成CrewAI的这些项目代码。这里它提示它将使用CrewAI创建一个AI Research的智能系统。在等待了几分钟之后，这里它使用CrewAI为我们成功创建了一个智能体，而且这里还显示了这个智能体的Demo。而且这里还给出了具体的使用方式，包括进入到项目路径，安装所需的依赖，设置API Key，然后启动这个智能体。它这里给出了非常完整的说明文档。这样我们就成功实现了使用Skill Seeker根据CrewAI的官方文档全自动为我们生成了CrewAI Skill。

刚才我们测试的是在Claude AI中来使用的CrewAI Skill。下面我们还可以将CrewAI Skill直接安装到Claude Code中，这样的话我们就可以直接在Claude Code中来使用CrewAI为我们生成智能体代码。想在Claude Code中使用这个Skill也非常简单。我们可以新开一个终端命令行，然后用这条命令我们在Claude Code的用户及命令中的Skills文件夹下创建一个CrewAI文件夹。我们直接运行就可以。下一步我们需要找到Skill Seeker为我们创建的CrewAI Skill的项目路径，也就是在这个路径下。然后我们就可以用`cp`命令将文件夹里的所有内容都拷贝到刚才我们创建的这个文件夹里。然后我们直接执行这条命令就可以。然后我们可以重新打开一下Claude Code，然后我们让它列出来所有的Skills。这里它列出了所有的Skills，包括我们刚才创建的CrewAI。而且我们还可以在VS Code中使用Claude Code扩展插件来测试。

下面我们就可以在输入框输入斜杠再输入`crewai`再运行，我们就可以在Claude Code中让它使用CrewAI Skill为我们创建基于CrewAI的智能体系项目。它这里给出了几个案例，然后这里我们可以让它来创建一个新的CrewAI的智能体系项目。我们这里直接输入`e`让它创建新的CrewAI项目。这里它提示它将创建一个新的CrewAI项目。这里提示这个项目已经创建成功，这里列出了项目的文件结构，并且给出了我们具体的使用方式，包括设置API Key还有启动项目。下面我们可以看一下它为我们创建的项目，这里是完整的CrewAI的这些项目文件。然后我们再看一下这些Agents，这里是它创建的这些Agents，而且这里都加入了详细的注释。然后这个文件我们就可以设置我们的API Key，而且这里还可以出了**Ollama**（一个在本地运行大型语言模型的框架）的设置方式。这里就是这个项目的说明文档，包括创建虚拟环境、安装这些依赖、设置API Key还有项目的结构。

### 总结与展望

这样我们就做到了完全不需要我们自己去阅读CrewAI的官方文档，然后只需要用Skill Seeker根据CrewAI的官方文档来生成Skill，然后我们就可以在Claude Code中调用这个Skill为我们全自动生成基于CrewAI框架的多智能体系统。以前我们需要阅读CrewAI的官方文档，熟悉CrewAI的这些代码以及使用方式，然后我们才能使用CrewAI创建我们自己的AI智能体。但现在有了Skill Seeker，我们只需要用Skill Seeker来生成对应的Skill，然后我们上传到Claude AI或者安装到Claude Code里，我们就可以使用这个Skill为我们生成完整可用的项目代码。针对任何开源项目，我们都可以使用Skill Seeker根据官方文档为我们生成对应的Skill。这样就能大大节省我们的学习时间，从而大幅度提升我们的工作效率。

本期视频所用到的代码和指令我都会放在视频下方的描述栏或者评论区。如果你在视频下方无法找到的话，也可以通过我的博客去查找本期视频做对应的笔记。本期视频就做到这里，欢迎大家点赞、关注和转发，谢谢大家观看。