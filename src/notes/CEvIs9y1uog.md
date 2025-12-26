---
area: "tech-engineering"
category: technology
companies_orgs:
- Anthropic
- Cadence
- Notion
date: '2025-12-08'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models:
- Claude
- Cloud Code
project: []
series: ''
source: https://www.youtube.com/watch?v=CEvIs9y1uog
speaker: AI Engineer
status: evergreen
summary: Anthropic的Barry Zhang和Mahesh Murag提出，随着AI代理日益普及，其在特定领域缺乏专业知识的问题日益凸显。他们引入了“代理技能”（Agent
  Skills）这一新范式，将可组合的程序性知识打包成简单的文件集合，旨在为AI代理提供领域专业知识、提高执行一致性，并使其能够持续学习和进化。这一方法论将代码视为通用的数字世界接口，并通过技能生态系统赋能非技术人员，最终构建一个可共享、可进化的代理知识库。
tags:
- ai-agent
- ai-ecosystem
- continuous-learning
- llm
- skill
title: 停止构建代理，转而构建技能：Anthropic的AI新范式
---
### 代理的演变与技能的兴起

大家早上好，感谢再次邀请我们。上次我们来这里时，我们还在探索**代理**（Agent: 能够自主感知环境、做出决策并执行行动的AI实体）究竟是什么。如今，我们许多人每天都在使用代理，但我们仍然发现存在一些不足。代理拥有智能和能力，但并非总具备我们实际工作所需的**专业知识**。我是Barry，这位是Mahesh。我们创建了**代理技能**（Agent Skills: 为AI代理提供特定领域知识和操作能力的模块化组件）。在本次演讲中，我们将向大家展示为什么我们停止了构建代理，转而开始构建技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good morning and thank you for having us again. Last time we were here, we were still figuring out what an <b>agent</b> even is. Today, many of us are using agents on a daily basis, but we still notice gaps. Agents have intelligence and capabilities, but not always the <b>expertise</b> that we need for real work. I'm Barry, and this is Mahesh. We created <b>agent skills</b>. In this talk, we'll show you why we stopped building agents and started building skills instead.</p>
</details>

### 代码作为通用接口

自我们上次演讲以来，许多事情都发生了变化。**MCP**（Agent Connectivity Protocol: 代理连接协议，用于规范AI代理与其他系统交互的标准）成为了代理连接的标准。我们的首个编码代理**Cloud Code**（Anthropic开发的一款AI编码代理）向全球发布，而我们的Cloud Agent **SDK**（Software Development Kit: 软件开发工具包）现在提供了一个开箱即用的生产级代理。我们拥有一个更成熟的生态系统，并正朝着代理的新范式迈进：模型与**运行时环境**（Runtime Environment: 程序执行时所需的软硬件环境）之间更紧密的耦合。简而言之，我们认为代码就是我们所需要的一切。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A lot of things have changed since our last talk. <b>MCP</b> became the standard for agent connectivity. <b>Cloud Code</b>, our first coding agent, launched to the world, and our Cloud Agent <b>SDK</b> now provides a production-ready agent out of the box. We have a more mature ecosystem and are moving towards a new paradigm for agents: a tighter coupling between the model and a <b>runtime environment</b>. Put simply, we think code is all we need.</p>
</details>

我们曾认为不同领域的代理会大相径庭，每个代理都需要自己的工具和脚手架，这意味着每个用例、每个领域都需要一个独立的代理。然而，尽管定制化对于每个领域仍然重要，但底层的代理实际上比我们想象的更具通用性。我们意识到，代码不仅是一个用例，更是通向数字世界的通用接口。在构建Cloud Code之后，我们意识到Cloud Code实际上是一个通用目的代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We used to think agents in different domains would look very different, each needing its own tools and scaffolding, meaning a separate agent for each use case and domain. While customization is still important for each domain, the underlying agent is actually more universal than we thought. What we realized is that code is not just a use case, but the universal interface to the digital world. After we built Cloud Code, we realized that Cloud Code is actually a general-purpose agent.</p>
</details>

### 领域专业知识的挑战

想象一下生成一份财务报告。模型可以调用**API**（Application Programming Interface: 应用程序编程接口，允许不同软件系统之间进行通信和数据交换）来获取数据并进行研究。它可以在**文件系统**（File System: 计算机组织和存储文件的方式）中整理数据，用Python进行分析，然后通过代码将洞察综合成旧的文件格式。核心脚手架可以突然变得像**Bash**（Bash: 一种在Unix和Linux系统中常用的命令行解释器）和文件系统一样精简，这非常棒且具有高度可扩展性。但我们很快就遇到了一个不同的问题，那就是**领域专业知识**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think about generating a financial report. The model can call the <b>API</b> to pull in data and do research. It can organize that data in the <b>file system</b>, analyze it with Python, and then synthesize the insights in an old file format—all through code. The core scaffolding can suddenly become as thin as just <b>Bash</b> and a file system, which is great and really scalable. But we very quickly run into a different problem: <b>domain expertise</b>.</p>
</details>

你希望谁来帮你报税？是智商300的数学天才Mahesh，还是经验丰富的税务专业人士Barry？我每次都会选择Barry。我不想让Mahesh从第一性原理推导出2025年的税法；我需要领域专家提供一致的执行。今天的代理就像Mahesh一样：它们很聪明，但缺乏专业知识。当你真正投入精力并提供适当指导时，它们可以做令人惊叹的事情，但它们往往缺少重要的前期上下文。它们不能很好地吸收你的专业知识，也不会随着时间学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Who do you want doing your taxes? Is it Mahesh, the 300 IQ mathematical genius, or Barry, an experienced tax professional? I would pick Barry every time. I don't want Mahesh to figure out the 2025 tax code from first principles; I need consistent execution from a domain expert. Agents today are a lot like Mahesh: they're brilliant, but they lack expertise. They can do amazing things when you really put in the effort and give proper guidance, but they're often missing important upfront context. They can't really absorb your expertise super well, and they don't learn over time.</p>
</details>

### 代理技能：可组合的程序性知识

这就是我们创建代理技能的原因。**技能**是文件的有序集合，它们将可组合的**程序性知识**（Procedural Knowledge: 关于如何执行特定任务的知识，例如步骤、规则或算法）打包给代理。换句话说，它们就是文件夹。这种简单性是刻意的：我们希望任何人，无论是人类还是代理，只要有一台电脑，就能创建和使用它们。这些技能也与你已有的工具兼容。你可以在Git中进行版本控制，可以将它们上传到Google Drive，也可以打包压缩后与团队共享。几十年来，我们一直将文件作为基本单元使用，我们喜欢它们，那为什么现在要改变呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's why we created agent skills. <b>Skills</b> are organized collections of files that package composable <b>procedural knowledge</b> for agents. In other words, they're folders. This simplicity is deliberate: we want something that anyone, human or agent, can create and use as long as they have a computer. These also work with what you already have. You can version them in Git, throw them in Google Drive, and zip them up to share with your team. We have used files as a primitive for decades, and we like them, so why change now?</p>
</details>

正因为如此，技能还可以包含许多脚本作为工具。传统工具存在显而易见的缺点：有些工具的说明写得不好，含糊不清，当模型遇到困难时，它无法真正修改工具。因此，它就陷入了“冷启动”问题，而且它们总是存在于**上下文窗口**（Context Window: 大型语言模型在处理任务时能够同时考虑的输入信息量）中。代码解决了其中一些问题：它是自我文档化的，可修改的，并且可以存在于文件系统中，直到真正需要时才被使用。这是一个技能内部脚本的例子：我们不断看到**Claude**（Anthropic开发的大型语言模型）反复编写相同的Python脚本来为幻灯片应用样式。所以，我们只是让Claude将其保存到技能中，作为其未来自己的一个工具。现在，我们只需运行该脚本，就能使一切变得更加一致和高效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because of this, skills can also include many scripts as tools. Traditional tools have pretty obvious problems: some have poorly written or ambiguous instructions, and when the model struggles, it can't really change the tool. So, it's stuck with a 'cold start' problem, and they always live in the <b>context window</b>. Code solves some of these issues: it's self-documenting, modifiable, and can live in the file system until truly needed. Here's an example of a script inside a skill: we kept seeing <b>Claude</b> write the same Python script repeatedly to apply styling to slides. So, we just asked Claude to save it inside the skill as a tool for its future self. Now, we can just run the script, making everything much more consistent and efficient.</p>
</details>

### 技能的渐进式披露与类型

此时，技能可以包含大量信息，我们希望保护上下文窗口，以便能够容纳数百个技能并使其真正**可组合**（Composable: 能够以模块化的方式组合在一起，形成更复杂的功能）。这就是为什么技能是**渐进式披露**的。在运行时，只有**元数据**（Metadata: 描述数据的数据，例如文件的创建日期、作者等）会显示给模型，仅仅是为了表明它拥有该技能。当代理需要使用某个技能时，它可以读取`skill.md`文件的其余部分，其中包含核心指令和文件夹其余部分的目录。其他一切都只是为了方便访问的。所以，技能就是这样：带有脚本作为工具的有序文件夹。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At this point, skills can contain a lot of information, and we want to protect the context window so that we can fit hundreds of skills and make them truly <b>composable</b>. That's why skills are <b>progressively disclosed</b>. At runtime, only the <b>metadata</b> is shown to the model, just to indicate that it has the skill. When an agent needs to use a skill, it can read the rest of the `skill.md` file, which contains the core instructions and directory for the rest of the folder. Everything else is just organized for ease of access. So, that's all skills are: organized folders with scripts as tools.</p>
</details>

自五周前发布以来，这种非常简单的设计已经促成了一个快速增长的、包含数千个技能的生态系统。我们看到这些技能分为几种不同类型：**基础技能**（Foundational Skills: 为代理提供新的通用或特定领域能力的核心技能）、由生态系统合作伙伴创建的**第三方技能**，以及在**企业**（Enterprise: 大型组织或公司）内部和团队内部构建的技能。首先，基础技能赋予代理以前不具备的新的通用或领域特定能力。例如，我们自己构建了文档技能，使Claude能够创建和编辑专业质量的办公文档。我们也很高兴看到像**Cadence**（一家专注于电子设计自动化软件的公司）这样的公司构建科学研究技能，赋予Claude新的能力，例如**EHR数据分析**（Electronic Health Record Data Analysis: 对电子健康记录数据进行分析，以获取医疗洞察）和比以前更好地使用常见的Python**生物信息学库**（Bioinformatics Libraries: 用于处理生物学数据的软件库）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Since our launch five weeks ago, this very simple design has translated into a quickly growing ecosystem of thousands of skills. We've seen these split across a couple of different types: <b>foundational skills</b>, <b>third-party skills</b> created by partners, and skills built within an <b>enterprise</b> and within teams. To start, foundational skills give agents new general or domain-specific capabilities they didn't have before. For example, we ourselves built document skills that give Claude the ability to create and edit professional-quality office documents. We're also excited to see companies like <b>Cadence</b> build scientific research skills that give Claude new capabilities like <b>EHR data analysis</b> and using common Python <b>bioinformatics libraries</b> better than before.</p>
</details>

我们还看到生态系统中的合作伙伴构建技能，帮助Claude更好地与他们自己的软件和产品协同工作。**Browserbase**（一家提供浏览器自动化解决方案的公司）就是一个很好的例子；他们为其开源的**浏览器自动化工具**（Browser Automation Tooling: 用于自动控制网页浏览器行为的工具），即**Stagehand**（Browserbase开发的开源浏览器自动化工具），构建了一个技能。现在，配备了这项技能和Stagehand的Claude可以导航网络并更有效地使用浏览器来完成工作。而**Notion**（一款流行的笔记和项目管理工具）也推出了一系列技能，帮助Claude更好地理解你的Notion工作区，并对整个工作区进行深入研究。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've also seen partners in the ecosystem build skills that help Claude better interact with their own software and products. <b>Browserbase</b> is a good example; they built a skill for their open-source <b>browser automation tooling</b>, <b>Stagehand</b>. Now, Claude, equipped with this skill and Stagehand, can navigate the web and use a browser more effectively. And <b>Notion</b> launched a bunch of skills that help Claude better understand your Notion workspace and do deep research across it.</p>
</details>

我认为，技能最令人兴奋和获得最多关注的地方是在大型企业内部。这些是为组织构建的公司和团队特定技能。我们一直在与**财富100强公司**（Fortune 100s: 《财富》杂志评选出的美国最大的100家公司）交流，他们正在使用技能来教导代理关于其组织最佳实践以及他们使用这些**定制内部软件**（Bespoke Internal Software: 专门为特定组织或团队需求开发的软件）的独特方式。我们还在与非常大的**开发者生产力团队**（Developer Productivity Teams: 致力于提高组织内开发者工作效率的团队）交流——这些团队为组织内的数千甚至数万名开发者提供服务——他们正在使用技能来部署像Cloud Code这样的代理，并教导它们关于代码风格最佳实践以及他们希望开发者在内部工作的其他方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think where I've seen the most excitement and traction is within large enterprises. These are company and team-specific skills built for an organization. We've been talking to <b>Fortune 100s</b> that are using skills to teach agents about their organizational best practices and the unique ways they use <b>bespoke internal software</b>. We're also talking to very large <b>developer productivity teams</b>—teams serving thousands or tens of thousands of developers—who are using skills to deploy agents like Cloud Code and teach them about code style best practices and other internal development workflows.</p>
</details>

### 技能生态系统的趋势与新兴架构

所有这些不同类型的技能都是由组织内部或全球范围内的不同人员创建和使用的。它们的共同点是任何人都可以创建它们，并且它们赋予代理以前不具备的新能力。随着这个生态系统的发展，我们开始观察到几个有趣的趋势。首先，技能正变得越来越复杂。今天最基本的技能仍然可以是一个包含提示和基本指令的`skill.md` Markdown文件，但我们开始看到技能打包软件、可执行文件、二进制文件、文件、代码、脚本、资产等等。今天构建的许多技能可能需要几分钟或几小时才能构建并集成到代理中，但我们认为，与我们今天使用的许多软件一样，这些技能的构建和维护将越来越多地需要数周或数月的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All these different types of skills are created and consumed by various people within an organization or globally. What they have in common is that anyone can create them, and they give agents new capabilities they didn't have before. As this ecosystem has grown, we've observed a couple of interesting trends. First, skills are becoming more complex. The most basic skill today can still be a `skill.md` Markdown file with prompts and basic instructions, but we're starting to see skills that package software, executables, binaries, files, code, scripts, assets, and more. Many skills built today might take minutes or hours to create and integrate into an agent, but we believe that, increasingly, much like a lot of software we use today, these skills might take weeks or months to build and maintain.</p>
</details>

我们还看到，这个技能生态系统正在补充今年建立起来的现有MCP服务器生态系统。开发者正在使用和构建技能来**编排工作流**（Orchestrate Workflows: 协调和管理多个任务或工具的执行顺序和交互），将多个MCP工具组合在一起，以处理更复杂的外部数据和连接任务。在这些情况下，MCP提供与外部世界的连接，而技能则提供专业知识。最后，也是对我个人而言最令人兴奋的是，我们看到非技术人员正在构建技能，这些人员从事财务、招聘、会计、法律等职能。我认为这初步验证了我们最初的想法，即技能帮助非编码专业人员扩展这些通用代理，使这些代理更容易被这些人员日常工作所使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're also seeing that this ecosystem of skills complements the existing ecosystem of MCP servers built over this year. Developers are using and building skills that <b>orchestrate workflows</b> of multiple MCP tools, stitched together to perform more complex tasks with external data and connectivity. In these cases, MCP provides the connection to the outside world, while skills provide the expertise. Finally, and I think most excitingly for me personally, we're seeing skills being built by non-technical people in functions like finance, recruiting, accounting, legal, and more. I believe this is early validation of our initial idea that skills help non-coding professionals extend these general agents, making them more accessible for their day-to-day work.</p>
</details>

将这一切联系起来，让我们讨论这些如何融入通用代理的新兴架构。首先，我们认为这种架构正在趋向于几点：一个**代理循环**（Agent Loop: 代理内部管理模型上下文、控制令牌输入输出的机制），它有助于管理模型的内部上下文并控制**令牌**（Tokens: 大型语言模型处理文本的基本单位，可以是单词、子词或字符）的进出；这与一个运行时环境相结合，为代理提供文件系统以及读写代码的能力。这个代理，正如我们许多人在今年所做的那样，可以连接到MCP服务器。这些是来自外部世界的工具和数据，使代理更具相关性和有效性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Tying this all together, let's discuss how these fit into the emerging architecture of general agents. First, we think this architecture is converging on a couple of things: an <b>agent loop</b> that manages the model's internal context and controls what <b>tokens</b> go in and out, coupled with a runtime environment that provides the agent with a file system and the ability to read and write code. This agent, as many of us have done this year, can be connected to MCP servers—tools and data from the outside world that make the agent more relevant and effective.</p>
</details>

现在，我们可以为同一个代理提供一个包含数百或数千个技能的库，代理可以在运行时根据特定任务决定是否将其引入上下文。今天，为代理提供新领域的新能力可能只需要为其配备正确的MCP服务器集合和正确的技能库。这种代理与MCP服务器和技能集相结合的新兴模式已经帮助Anthropic将Claude部署到新的**垂直领域**（Verticals: 指特定行业或市场细分领域）。就在我们五周前推出技能之后，我们立即在**金融服务**（Financial Services: 提供金融产品和服务的行业）和**生命科学**（Life Sciences: 研究生物体及其过程的科学领域）领域推出了新产品。每一项都带有一套MCP服务器和一套技能，这些技能立即使Claude在这些领域的专业人士中更有效。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now we can give the same agent a library of hundreds or thousands of skills that it can decide to pull into context only at runtime when it's deciding to work on a particular task. Today, giving an agent a new capability in a new domain might just involve equipping it with the right set of MCP servers and the right library of skills. And this emerging pattern of an agent with an MCP server and a set of skills is something that's already helping us at Enthropic deploy Claude to new <b>verticals</b>. Just after we launched skills 5 weeks ago, we immediately launched new offerings in <b>financial services</b> and <b>life sciences</b>. And each of these came with a set of MCP servers and a set of skills that immediately make Claude more effective for professionals in each of these domains.</p>
</details>

### 技能的未来演进

我们也在开始思考其他一些悬而未决的问题和我们希望关注的领域，即随着技能变得越来越复杂，它们未来将如何演变。我们确实希望通过开始像对待软件一样对待技能来支持开发者、企业和其他技能构建者。这意味着探索测试和评估，提供更好的工具来确保这些代理在正确的时间和针对正确的任务加载和触发技能，以及提供工具来帮助衡量配备技能的代理的输出质量，以确保其与代理应完成的工作相符。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're also starting to think about some of the other open questions and areas that we want to focus on for how skills evolve in the future as they start to become more complex. We really want to support developers, enterprises, and other skill builders by starting to treat skills like we treat software. This means exploring testing and evaluation, better tooling to make sure that these agents are loading and triggering skills at the right time and for the right task, and tooling to help measure the output quality of an agent equipped with the skill to make sure that's on par with what the agent is supposed to be doing.</p>
</details>

我们还希望关注**版本控制**（Versioning: 软件或数据在不同时间点的不同版本管理）；因为随着技能的演变和由此产生的代理行为的演变，我们希望能够清晰地跟踪这一点，并随着时间的推移拥有清晰的演变路径。最后，我们还希望探索那些可以明确依赖和引用其他技能、MCP服务器以及代理环境中的依赖项和软件包的技能。我们认为这将使代理在不同的运行时环境中更具可预测性，而多个技能的**可组合性**（Composability: 多个独立组件能够组合在一起形成一个更大、更复杂系统而无需修改的能力）将帮助像Claude这样的代理从这些代理中引出更复杂和相关的行为。总的来说，这些努力有望使技能更容易构建，更容易集成到代理产品中，即使是Claude之外的产品。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'd also like to focus on <b>versioning</b>; as a skill evolves and the resulting agent behavior evolves, we want this to be clearly tracked and to have a clear lineage over time. Finally, we'd like to explore skills that can explicitly depend on and refer to other skills, MCP servers, and dependencies and packages within the agent's environment. We think this will make agents much more predictable in different runtime environments, and the <b>composability</b> of multiple skills together will help agents like Claude elicit even more complex and relevant behavior. Overall, these efforts should hopefully make skills easier to build and integrate into agent products, even those besides Claude.</p>
</details>

### 共享、分发与持续学习

最后，我们认为技能的巨大价值将来自共享和分发。Barry和我经常思考大规模部署这些代理的公司的未来。最令我们兴奋的愿景是，一个由组织内部人员和代理共同管理、不断收集、集体且不断演进的能力知识库。我们认为技能是实现这一愿景的重要一步。它们为你的代理提供**程序性知识**，使其能够完成有用的事情。当你与代理互动并向其提供反馈和更多**机构知识**（Institutional Knowledge: 组织内部积累的、关于其运作方式、最佳实践和历史经验的知识）时，它会变得更好，你团队和组织内的所有代理也会随之改进。当有人加入你的团队并首次使用Claude时，它已经知道你的团队关心什么，了解你的日常工作，并知道如何为你的工作发挥最大效用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Finally, we believe a huge part of the value of skills will come from sharing and distribution. Barry and I often think about the future of companies deploying these agents at scale. The vision that excites us most is a collective and evolving knowledge base of capabilities, curated by people and agents within an organization. We think skills are a big step towards this vision. They provide the <b>procedural knowledge</b> for your agents to do useful things. As you interact with an agent and give it feedback and more <b>institutional knowledge</b>, it starts to get better, and all agents within your team and organization improve. When someone joins your team and uses Claude for the first time, it already knows what your team cares about, your day-to-day operations, and how to be most effective for your work.</p>
</details>

随着这种增长和生态系统的进一步发展，这种复合价值将不仅仅局限于你的组织，还会扩展到更广泛的社区。因此，就像世界上其他人构建的MCP服务器能让你的代理更有用一样，社区中其他人构建的技能也将帮助你的代理变得更强大、更可靠、更有用。当Claude开始自行创建这些技能时，这种不断演进的知识库的愿景变得更加强大。我们专门将技能设计为实现**持续学习**（Continuous Learning: 系统或代理在运行过程中不断从新数据和经验中学习和适应的能力）的具体步骤。当你第一次开始使用Claude时，这种标准化格式提供了一个非常重要的保证：Claude写下的任何内容都可以被其未来的版本高效利用。这使得学习真正可转移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And as this grows and the ecosystem develops further, this compounding value will extend beyond your organization into the broader community. Just as an MCP server built by someone else globally makes your agent more useful, a skill built by someone else in the community will help make your own agents more capable, reliable, and useful. This vision of an evolving knowledge base becomes even more powerful when Claude starts to create these skills itself. We designed skills specifically as concrete steps towards <b>continuous learning</b>. When you first start using Claude, this standardized format provides a very important guarantee: anything Claude writes down can be efficiently used by a future version of itself. This makes the learning truly transferable.</p>
</details>

随着你建立上下文，技能使记忆的概念更加具体。它们并非捕获所有信息或每种类型的信息，而只是Claude可以在特定任务上使用的程序性知识。当你与Claude合作一段时间后，技能的灵活性变得更加重要。Claude可以即时获取新能力，根据需要进行演变，然后放弃过时的能力。这就是我们一直以来所了解的：上下文学习的力量使得处理日常变化的信息更具成本效益。我们的目标是，与你合作第30天的Claude将比第一天的Claude好得多。Claude今天已经可以使用我们的技能创建器技能为你创建技能，我们将继续朝着这个方向努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">As you build up the context, skills make the concept of memory more tangible. They don't capture everything or every type of information, just procedural knowledge that Claude can use on specific tasks. When you've worked with Claude for a while, the flexibility of skills matters even more. Claude can acquire new capabilities instantly, evolve them as needed, and drop obsolete ones. This highlights what we've always known: the power of in-context learning makes this much more cost-effective for information that changes daily. Our goal is that Claude on day 30 of working with you will be much better than Claude on day one. Claude can already create skills for you today using our skill creator skill, and we will continue pushing in that direction.</p>
</details>

### 代理堆栈与计算的类比

我们将通过将代理堆栈与我们已经在计算领域看到的情况进行比较来结束本次演讲。粗略地类比，模型就像**处理器**（Processors: 计算机中执行指令和处理数据的核心组件）：两者都需要大量投资并蕴含巨大潜力，但它们本身的作用有限。然后我们开始构建**操作系统**（Operating System, OS: 管理计算机硬件与软件资源的系统软件）。操作系统通过协调处理器周围的进程、资源和数据，使处理器变得更有价值。在AI领域，我们相信代理运行时正在扮演这个角色。我们都在努力构建最简洁、最高效、最具可扩展性的抽象，以便将正确的令牌输入和输出模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll conclude by comparing the agent stack to what we've already seen in computing. In a rough analogy, models are like <b>processors</b>: both require massive investment and contain immense potential, but are only so useful by themselves. Then we started building <b>operating systems</b> (<b>OS</b>). The OS made processors far more valuable by orchestrating the processes, resources, and data around them. In AI, we believe that the agent runtime is starting to play this role. We're all trying to build the cleanest, most efficient, and most scalable abstractions to get the right tokens in and out of the model.</p>
</details>

但一旦我们有了平台，真正的价值就来自于**应用程序**（Applications: 为特定目的设计的软件程序）。少数公司构建处理器和操作系统，但像我们这样的数百万开发者已经构建了编码领域专业知识和我们独特视角的软件。我们希望技能能够帮助我们为所有人开放这一层。通过简单地将内容放入文件夹中，我们可以在这里发挥创造力，为自己、为彼此、为世界解决具体问题。所以，技能仅仅是一个起点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But once we have a platform, the real value comes from <b>applications</b>. A few companies build processors and operating systems, but millions of developers like us have built software that encoded domain expertise and our unique points of view. We hope that skills can help us open up this layer for everyone. This is where we get creative and solve concrete problems for ourselves, for each other, and for the world, simply by putting stuff in a folder. So, skills are just the starting point.</p>
</details>

最后，我们认为我们现在正在趋向于这种通用代理的通用架构。我们创建了技能，作为交付和共享新能力的新范式。因此，我们认为现在是时候停止重建代理，转而开始构建技能了。如果你对此感到兴奋，欢迎加入我们，今天就开始构建一些技能。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To close out, we think we're now converging on this general architecture for general agents. We've created skills as a new paradigm for shipping and sharing new capabilities. Therefore, we think it's time to stop rebuilding agents and start building skills instead. If you're excited about this, come work with us and start building some skills today. Thank you.</p>
</details>