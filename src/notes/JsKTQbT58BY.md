---
area: tech-insights
category: technology
date: '2025-11-24'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project:
- ai-impact-analysis
- systems-thinking
- vibe-coding
series: ''
source: https://www.youtube.com/watch?v=JsKTQbT58BY
speaker: AI Engineer
status: evergreen
summary: 本文深入探讨了“随性编程”（Vibe Coding）的弊端，即AI加速开发中缺乏规划导致代码难以维护的问题。作者提出了一套全面的AI编程代理框架，涵盖三大支柱：指导思想（Principles）、工作流程（Process）和辅助工具（Tools）。该框架旨在帮助开发者从依赖AI生成代码转变为驾驭AI，通过结构化规划、迭代开发和多感官反馈，构建可理解、可维护的生产级应用，从而克服“随性编程”带来的困境，实现真正的AI增强学习和高效开发。
tags:
- development
- management
- multi-sensory-feedback
- software-engineering-principle
title: 告别“随性编程”：AI辅助开发的高效框架与实践
---

### “随性编程”的困境与AI加速开发的挑战

灵感来袭，你有一个想法，并且清楚地知道如何实现它。你启动了你最喜欢的**AI编程代理**（AI Coding Agent: 能够根据指令生成代码的AI工具），输入提示词，然后将任务交给它。看，它完成了！也就是说，你完成了。应用程序运行良好。这才是**10倍工程师**（10x Engineer: 指生产力远超普通工程师的开发者）真正感受到的。你是个天才，是AI革命中的反叛者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Inspiration strikes. You've got an idea and you know exactly how you're going to build it. You fire up your favorite AI coding agent. You jam in those prompts and then you hand it over. Hey, look at him go. He's done it. That is to say, you've done it. The app works. This is what 10x engineering really feels like. You're a genius. A rebel in the AI revolution.</p>
</details>

但随后，周一到来。你想添加一个新功能，或者改变它的工作方式，却发现自己根本不理解这段代码。你无法维护它，最终不得不将其大部分甚至全部废弃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But then Monday rolls around. You want to add a feature or you want to change the way that it works and you realize that you don't understand it. You can't maintain it and you have to throw most or all of it away.</p>
</details>

**随性编程**（Vibe Coding: 一种低规格、零规划的AI加速开发方法，感觉高效但产出的代码脆弱、难以维护，通常只适用于演示）是一种低规格、零规划的AI加速开发方法，它让你感觉富有成效，但结果却是脆弱、难以维护的演示代码。当你试图以这种方式构建可维护、可理解的软件时，随之而来的绝望就是“随性编程的宿醉”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Vibe coding is the low-spec zero planning approach to AI accelerated development that feels productive but results in brittle unmaintainable demo wear. The hangover is the resulting despair when you try to build maintainable, understandable software this way.</p>
</details>

不过别担心，我们有解决办法。今天我们将讨论一个用于AI编程代理开发的框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Don't worry though, there is a cure and it's the framework for building with AI coding agents that we're going to discuss today.</p>
</details>

### 本次演讲的目标受众

如果你将编程视为一种日常学习体验，如果你希望像对待其他所有软件一样，理解并掌控你使用AI编程代理编写的软件，如果你想成为编程代理的“老板”而不是它们困惑的实习生，那么你将会喜欢这次演讲。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, you'll enjoy this talk if you value programming as a daily learning experience. If you want to understand and own the software that you write using AI coding agents just as you do all of the other software that you write. If you want to be the boss of the coding agents and not their confused intern.</p>
</details>

如果你觉得现在与代理合作让你更像一个**提示词骑师**（Prompt Jockey: 专注于编写和优化AI提示词的人，而非深入理解代码或系统架构的工程师），而不再是AI工程师；如果你厌倦了丢弃代码、浪费时间和算力，或者如果你想使用编程代理来构建能够真正工作的生产级应用程序，那么这次演讲就是为你准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If working with agents makes you feel like a prompt jockey these days and no longer an AI engineer. If you're sick of throwing away code, burning time and tokens, or if you want to use coding agents to build production applications that do real work,</p>
</details>

另一方面，如果编程对你来说只是一份工作，而不是你正在精进的手艺，并且你对此感到满意；如果你满足于让AI为你完成工作，而不需要理解其原理或原因；或者如果随性编程就能满足你的需求，并且你觉得这已经足够好，那么这次演讲就不适合你。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This talk is not for you if programming is a job and not a craft that you're refining and that works for you. If you're satisfied just having AI do it for you without needing to understand how or why or if vibe coding gets you what you need and that's good enough.</p>
</details>

这些说法并非评判，它们只是与我们今天所走的道路非常不同的路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And these statements aren't a judgment. They're just very different paths than what we're taking today.</p>
</details>

### 关于演讲者

我是Corey。我经营一家**AI原生控股公司**（AI Native Holding Company: 一家以AI技术为核心，通过收购和建立公司来投资和发展业务的控股公司），我们积极在技术、投资和教育领域收购和建立业务。自2022年以来，我一直狂热地构建AI编程代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm Corey. I run an AI native holding company where we're actively buying and building businesses in the technology investments and education verticals. I've been feverishly building AI coding agents since 2022.</p>
</details>

我热爱并热衷于所有与技术相关的事物。我是一个狂热的咖啡迷。事实上，你可以在**会场走廊**（Hallway Track: 指会议期间在正式议程之外，人们在走廊、休息区等地方进行的非正式交流和讨论）里找到我，问我最近痴迷烘焙的埃塞俄比亚米斯蒂谷的“瑜伽厨师”咖啡。我也是一个匹克球狂热者，事实上，我明天就要参加一场比赛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love and am passionate about all things technology. I am a massive coffee nerd. In fact, catch me in the hallway track and ask me about the Ethiopian yoga chef from Misty Valley that I've been obsessively roasting lately. And I'm a pickle ball fanatic. I'm playing in a tournament tomorrow. In fact,</p>
</details>

### 框架概述：三大支柱

那么，让我们来概述一下这个框架。该框架由三大支柱组成：**原则**（Principles），它们是所有这一切的哲学基础；**流程**（Process），它是使用AI实际构建软件的工作流；以及**工具**（Tools），它们是流程的加速器或推动者，同时也反映了我们的原则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so let's talk about the framework in overview. The framework's comprised of three pillars. There are the principles which are the philosophy underpinning all of it. There is the process which is the workflow for actually getting software built using AI and then there are tools which are accelerators or enablers of the process but also reflect our principles.</p>
</details>

你可能会问，这个框架能构建什么？答案是：任何东西。这个框架适用于所有类型的软件，但这里有一些目前正在运行的、使用这种方法构建的实际软件示例：

<details>
<summary>View/Hide Original English</p>
<p class="english-text">So you may ask what can you build with the framework and the answer is really anything. The framework's adaptive to all types of software, but here are a few examples of working software in the wild right now that's been built with this approach.</p>
</details>

*   为律师事务所提供专业诉讼支持的应用程序；
*   用于烹饪的实时设备监控软件包；
*   用于动态内容重构的数字出版系统；
*   等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh specialized litigation support applications for law firms, real-time appliance monitoring packages for cooking, digital publishing systems for dynamic content replatforming, and on and on and on and on.</p>
</details>

关键是，这些不是玩具。它们是每天都在做实际工作的真实软件应用程序。更重要的是，它们是由应用这个框架的AI工程师进行演进和维护的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The point is that these aren't toys. These are real software applications that do real work every day. And critically they're evolved and maintained by AI engineers who apply this framework.</p>
</details>

### 框架原则：指导思想

现在让我们开始深入探讨原则。原则大致分为三类：适用于全局的通用原则，偏向于流程规划阶段的原则，以及偏向于流程实施阶段的原则。总共有十条原则。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's make a start and get into the principles. Principles broadly map across three categories. sort of general principles that apply overarchingly and then principles that skew more towards the planning phase of the process and principles that skew more towards the implementation phase of the process. 10 in all. So let's talk about each of them.</p>
</details>

#### 1. AI工程是加速学习

我们的第一个总体原则是：AI工程是加速学习。这个问题从何而来？将AI编程代理视为纯粹的生产力工具，仅仅为了更快地生成代码；使用AI生成软件而不从过程中学习任何东西；六个月后，工程师的能力没有提升，反而停滞不前，甚至在调试、修改、架构决策等许多方面变得依赖AI。这与AI增强是相反的，这是AI依赖。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our first overall principle is that AI engineering is accelerated learning. What were the problems that this came from? Well, treating AI coding agents as pure productivity tools just to crank out code faster, using AI to generate software and not learning anything from the process and then 6 months later being no better as engineers having plateaued or worse becoming dependent on AI for so many things, debugging, modifications, architectural decisions. That's the opposite of AI augmentation. That's AI dependency.</p>
</details>

所以，这里的核心思想是，这个框架不仅仅是为了更快地构建，更是为了在过程中学习。框架的每一步都创造了具体的学习机会，这样你不仅在交付软件，也在提升自己。软件有价值，但你成为的工程师其价值呈指数级增长。这就是为什么我们说“永远学习”（Always Be Learning）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the big idea here is that the framework is not just about building faster. It's about learning as we go. Every step in the framework creates specific learning opportunities. So that you're not just shipping software, you're building yourself. The software is valuable, but the engineer that you become is exponentially more valuable. And that's why we say always be learning or you may say a always b larning always be learning.</p>
</details>

#### 2. 你是架构师，代理是执行者

我们的下一个通用原则是：你是架构师，代理是执行者。将AI代理视为架构思维的替代品，而不是你明确决策的执行者，这是一个大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our next general principle is that you are the architect and the agent is the implement. Treating AI agents as replacements for architectural thinking rather than implementers of your decisions when they're well specified is a big problem.</p>
</details>

所以，这里的核心思想是保持架构师和执行者之间的界限清晰。你负责思考，这意味着架构和接口、系统的意图、结构、设计决策以及相关的权衡。然后，代理负责执行。这包括实现、编写代码、遵循模式、实现你指定的测试以及敲出**样板代码**（Boilerplate Code: 指在不同地方重复出现，但几乎没有实际逻辑功能的代码）。这就是为什么我们说“委托执行，而非思考”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the primary idea here is keep the architect and implement boundary crystal clear. You own the thinking and that means architecture and interfaces, the intent of the system, the structure, design decisions and the associated tradeoffs. And then the agent handles the doing. That's implementation, typing code, following patterns, implementing the tests that you specify, banging out boilerplate. That's why we say delegate the doing and not the thinking.</p>
</details>

#### 3. 慢下来并迭代以求快

我们的第三个通用原则有点反直觉，但它是：慢下来并迭代以求快。问题在于“重新开始”的循环。如果没有对经过验证的工作进行刻意迭代，你最终会反复从头开始。因此，三个月后，你会有多次废弃的尝试，而不是在一个单一系统上持续改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our third general principle is a little bit counterintuitive, but it's slow down and iterate in order to go fast. The problem is the starting over cycle. Without deliberate iteration on validated work, you end up repeatedly starting from scratch. And so 3 months in, you've had multiple abandoned attempts instead of consistently improving on one single system.</p>
</details>

所以，这里的核心思想是，刻意迭代能够带来理解和生产力方面的复合回报。是的，第一周感觉很慢，但第二周会建立势头，然后第三周会显著加快。我们说“复合进步，加速速度”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the big idea here is that deliberate iteration enables compounding returns on both understanding and on productivity. And so yeah, week one feels slow, but week two builds momentum and then week three is dramatically faster. We say compound progress, accelerate velocity.</p>
</details>

#### 4. 规范远胜于提示词工程

我们第一个与规划相关的原则是：规范远胜于提示词工程。**提示词工程**（Prompt Engineering: 将AI交互视为优化问题，试图找到“魔法词”来产生正确输出，而不是清晰定义“正确”的含义）将AI交互视为一个优化问题，而不是一个沟通问题。它试图找到能产生正确输出的“魔法词”，而不是清晰地定义“正确”意味着什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first of our planning related principles is that specification is far greater than prompt engineering. Prompt engineering treats AI interactions as an optimization problem rather than a communication problem. Trying to find magic words that produce the right output rather than clearly defining what right means.</p>
</details>

所以，这里的核心思想是，规范与传统意义上的提示词非常不同。规范是对需求、行为、接口和验收标准的结构化、精确定义。编写规范强制进行架构思考。你必须完全理解问题，然后精确定义接口并预测**边缘情况**（Edge Cases: 指在软件或系统中可能出现的不常见、极端或特殊情况）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the big idea here is that specifications are very different than prompts in the classic sense. Specifications are structured precise definitions of requirements of behavior interfaces and acceptance criteria. Writing specifications forces architectural thinking. You must understand the problem completely and then define interfaces precisely and anticipate edge cases.</p>
</details>

反过来，规范提供了清晰、明确的指导。代理会实现你指定的，而不是它从对话提示中解释出来的。我们说“编写蓝图，而非提示词”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In turn, specifications provide clear, unambiguous direction. The agent implements what you specified and not what it interprets from conversational prompts. We say write the blueprint, not the prompt.</p>
</details>

#### 5. 在实现前定义“完成”

我们下一个与规划相关的原则是：在实现前定义“完成”。在没有可执行测试和可观察成功标准的情况下开始实现，意味着代理缺乏明确的完成标准和即时反馈。它们无法自我验证，无法自我纠正，也不知道何时完成，至少与你的规范不一致。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our next planning related principle is define done before implementing. Starting implementation without executable tests and observable success criteria means that agents lack clear completion criteria and immediate feedback. They can't self- validate. They can't self-correct and they don't know when they're done, at least not in consistence with your specifications.</p>
</details>

所以，这里的核心思想是，在实现前定义“完成”能让你深入思考需求，并使代理能够自主工作。通过预先定义测试，我们为代理提供了明确的停止条件，使它们能够在实现过程中获得即时反馈，并在必要时进行自我纠正。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so the big idea here is defining done before implementation keeps you thinking deeply about requirements and then it enables the agent to work autonomously. By defining tests up front, we give agents clear stop conditions that then enable them to get immediate feedback during implementation and self-correct wherever necessary.</p>
</details>

我们稍后会更多地讨论**多感官验证**（Multi-sensory Validation: 通过视觉、听觉和触觉等多种数字“感官”来观察和验证软件行为，以提供比传统测试更丰富的诊断信息）。我们使代理能够通过视觉（例如渲染什么）、听觉（例如通过日志和错误听到什么）和触觉（即它们如何与系统交互）来观察。测试验证实现的正确性，而传感器则揭示软件在实现过程中的实际行为。因此，“完成”意味着当测试通过并且传感器验证一切按预期工作时，一个功能就完成了。我们说“指定成功，然后构建”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We'll talk more about multiensory validation later. But we enable agents to observe through visual like what renders senses, auditory senses like what they can hear through logs and errors and tactile senses meaning how they interact with the system. Tests verify correctness of spec of implementation whilst sensors reveal the actual behavior of the software as it's being implemented. And so done means that a feature is done when it tests pass and when the sensors come back validating that everything's working as expected. We say specify success then build</p>
</details>

#### 6. 功能原子性

**功能原子性**（Feature Atomicity: 指将每个功能分解为最小的、不可再分的任务单元，确保代理能够在单一、集中的会话中完全实现）是我们的下一个原则。编写非原子性功能意味着将分解工作留到实现时进行，这会迫使代理在运行时做出架构决策。这里的核心思想是，功能原子性迫使我们在规范期间完全分解每个功能，然后反过来使代理能够在可管理的范围内进行实现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">feature atomicity is our next principle. Writing non-atomic features means leaving the decomposition work for implementation time which forces agents to make architectural decisions on the fly. The primary idea here is that feature atomicity forces us to completely decompose each feature during specification and then in turn enable the agents to implement within a manageable scope.</p>
</details>

在这种意义上，功能成为实现的工作单元。它们是原子的、不可约的任务，随时可供代理完全执行。尽可能保持功能小巧，以使代理实现尽可能成功。我们说“化繁为简，直至不可约”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Features in this sense become implementation work units. They're atomic, irreducible tasks that are ready for an agent to execute completely. Keep features as small as possible to make agent implementation as successful as possible. We say reduce until irreducible.</p>
</details>

#### 7. 依赖驱动开发

我们最后一个与规划相关的原则是：**依赖驱动开发**（Dependency-driven Development: 强制理解功能之间的关系和集成方式，确保代理不会实现依赖于未完成工作的特性）。在没有明确依赖分析的情况下进行实现，意味着将所有功能视为独立的，而实际上我们知道它们形成了一个相互连接的图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the last of our planning related principles is dependencydriven development. Implementing without explicit dependency analysis means treating all features as independent when in fact we know that they form an interconnected graph. So the big idea here is that dependencydriven development forces you to understand how features relate and how they integrate and then in turn that he ensures that agents never implement features that depend on incomplete work. We say schedule implementation by dependencies.</p>
</details>

所以，这里的核心思想是，依赖驱动开发迫使你理解功能如何关联以及如何集成，然后反过来确保代理永远不会实现依赖于未完成工作的特性。我们说“按依赖关系安排实现”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the big idea here is that dependencydriven development forces you to understand how features relate and how they integrate and then in turn that he ensures that agents never implement features that depend on incomplete work. We say schedule implementation by dependencies.</p>
</details>

#### 8. 一次实现一个原子功能

现在，我们转向与实现相关的原则。我们从“一次实现一个原子功能”开始。同时处理多个功能会将实现视为可以自由切换上下文的并行工作流。但我们知道，实现质量取决于持续的专注、完整的上下文和非常紧密的反馈循环。在功能之间跳跃会分散我们的注意力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so now on to our implementation related principles. We start with implement one atomic feature at a time. Working on multiple features treats implementation as parallel streams of work that can be context switched freely. But we know that implementation quality is contingent on sustained focus, complete context and very tight feedback loops. Jumping between features fragments our focus.</p>
</details>

所以，这里的核心思想是，代理一次实现一个先前已原子化定义的功能。你研究并理解它，验证它是否有效，将其作为检查点提交，然后继续下一个功能。这种节奏既能创造动力，又能加深理解。我们停止同时处理多个功能。我们以完全专注的方式按顺序实现功能，研究每个实现以保持理解，然后将每个实现作为检查点提交，以构建可工作的软件和工程知识。我们说“完成一个，提交一个，继续”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the big idea here is that agents implement one single feature that's been defined atomically as previous. You study it and understand it. You validate that it works. You commit it as a checkpoint and then you move on to the next feature. This rhythm creates both momentum and also deepening understanding. We stop juggling multiple features simultaneously. We implement features sequentially with complete focus studying each implementation to maintain understanding and then commit each of them as a checkpoint to build both working software and engineering knowledge. We say complete one commit one continue.</p>
</details>

#### 9. 上下文工程与管理

我们下一个与实现相关的原则是：**上下文工程与管理**（Context Engineering and Management: 积极策划和构建AI代理所需的精确上下文，而非被动依赖对话历史，确保决策基于持久性文档而非记忆）。将上下文视为自动发生而非需要积极工程化的问题是一个大问题。你让对话历史被动积累，而不是主动策划对上下文真正重要的内容。如果你不构建上下文弹性，状态最终将无法持久，我们就会失去弹性和连续性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our next implementation related principle is context engineering and management. Treating context as something that just happens automatically rather than something you actively engineer is a big problem. You let conversation history passively accumulate instead of curating actively what really matters for context and then if you don't build context resilience state will not persist eventually and we lose resilience and continuity to that matter.</p>
</details>

所以，这里的核心思想是，不要依赖对话状态的持久性。将架构决策捕获在持久性文档中，如规范、计划和设计文档——我们将在流程部分讨论这些的含义——然后从这些**工件**（Artifacts: 指在软件开发过程中产生的任何有形输出，如文档、代码、测试用例等）中构建上下文，而不是从你的记忆中。我们说“策划上下文，而非积累上下文”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the primary idea here is do not rely on conversational state persisting capture architectural decisions in persistent documents like specifications plans and design documents and we'll talk about what those mean here in the process section and then build context from these artifacts not from your memory. We say curate context don't accumulate it.</p>
</details>

#### 10. 先让它工作，再让它正确，最后让它快速

我们的最后一个原则是：**先让它工作，再让它正确，最后让它快速**（Make It Work, Make It Right, Make It Fast: 软件工程中的经典原则，强调首先实现功能，然后优化正确性，最后关注性能，避免过早优化）。这借鉴了软件工程的经典。但从一开始就将这三个阶段视为同等重要，或试图同时实现它们，是一个大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And our last principle is make it work, make it right, make it fast. And this is borrowed from the annals of software engineering. But treating all three phases of this as equal from the start or trying to achieve them all simultaneously is a big problem.</p>
</details>

该框架专注于实现“让它工作”——可交付和使用的软件——然后只有在实际使用揭示了什么重要之后，我们才选择性地投入精力去“让它正确”和“让它快速”。所以，这里的核心思想是停止过早追求优雅和性能。明确指示代理“让它工作”——我们将讨论如何定义这一点。但我们想要的是简单、功能性的实现，它能通过测试并使我们能够快速交付，然后让实际使用揭示什么值得进一步投资。我们说“构建、学习、改进”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The framework focuses on getting to make it work. working software that can be shipped and used and then only after real usage reveals what matters do we selectively invest in make it right and make it fast. So the big idea here is stop pursuing elegance and performance upfront. Explicitly direct the agents to make it work and we'll talk about how to define that. But we want simple functional implementation that passes tests and enables us to ship quickly and then let real usage reveal what deserves further investment. We say burn sorry we say build, learn, improve.</p>
</details>

这就是我们的十条原则，它们是使框架运作的哲学基础。现在，让我们回顾一下我们宿醉的随性编程开发者，看看他在接触了框架原则后感觉如何。是的，思想是否已经被充分震撼了？坚持住，伙计，它会变得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So there we have them. our 10 principles, the philosophy that makes the framework work. Now, let's check back in with our hung over vibe coder as he's been exposed to the principles of the framework. Yeah, mind sufficiently blown yet? Well, stick with us, mate. It gets even better.</p>
</details>

### 框架流程：规划阶段

好的，现在让我们转向流程。流程是我们把所有原则付诸实践的地方。你可以将其视为“原则在行动”。框架流程有两个不同的阶段：**规划阶段**（Planning Phase），你在这里进行所有的架构思考，定义要构建什么；以及**实施阶段**（Implementation Phase），代理在你的监督和验证下执行你的规范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Now, let's transition to process. The process is where we put all of the principles to work. You can think about this as principles in action. The framework process has two distinct phases. There's the planning phase where you do all of the architectural thinking to define what to build and then the implementation phase where the agent executes your specifications with both your oversight and validation.</p>
</details>

规划阶段产生能够实现自主代理实施的工件。实施阶段则利用这些工件逐个功能地构建可工作的软件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Planning produces the artifacts that enable autonomous agent implementation. Implementation then uses those artifacts to build working software feature by feature.</p>
</details>

好的，进入规划阶段。规划阶段是你完成架构思考的地方。你将一个模糊的项目想法转化为原子化、有序、完全规范化的功能，准备好进行实施。这纯粹是你的工作：架构决策、分解、规范编写、依赖分析。代理可以作为思考伙伴提供帮助，但你做出每一个决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, on to the planning phase. Planning is where you complete your architectural thinking. You transform a vague project idea into atomic sequenced fully specified features ready for implementation. This is purely your work. Architectural decisions, decomposition, specification writing, dependency analysis. The agent can assist as a thinking partner, but you make every decision.</p>
</details>

规划的五个步骤是顺序的，并且相互建立：愿景、功能、规范、依赖、计划。你会注意到这是一个高度迭代的过程，将思考提取和精炼成可用于与代理构建软件的具体工件。规划阶段每个步骤的输入和输出分别是模板和已完成的模板。我们已经提前做了大量工作，创建了经过深思熟虑、结构良好的模板，以指导思考并捕获结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The five planning steps are sequential and build on each other. Vision, features, specification, dependencies, plan. You'll notice that this is a highly iterative process of extracting and refining thinking into tangible artifacts that can be used to build software with the agent. The inputs and outputs of each step in the planning phase are templates and completed templates respectively. Heaps of work has been done in advance to create well-thought well ststructured templates to both guide thinking and capture the results.</p>
</details>

#### 1. 愿景捕获

规划的第一步是愿景捕获。这一步的目的是将你模糊的项目想法转化为一个完整、结构化的**主项目规范**（Master Project Specification: 一份结构化文档，清晰阐明了项目的问题、用户、功能、范围和工作流程），它阐明了问题、用户、功能、范围和工作流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the first step of planning is vision capture. And the purpose of this step is to transform your vague project idea into a complete structured master project specification that articulates the problem, the users, functionality, scope and workflows.</p>
</details>

规划阶段这一步解决的问题是，你最初的项目想法通常只存在于你的脑海中，而且是不完整的。当我们开始时，通常就是这种情况。你对问题和方法有一些大致的了解，但细节模糊，隐含假设未经审查，关键方面也未被告知。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the problem that this step in the planning phase solves is that your initial project idea exists only in your head usually and it's incomplete. When we start, this is typically the case. You have some general sense of the problem and an approach, but details are fuzzy. Implicit assumptions are unexamined and critical aspects are uninformed.</p>
</details>

如果没有结构化的探索和完善，你无法清晰地沟通你的想法，无法明确表达需求，也无法创建代理可以依赖的共享基础。在将其分解为功能或架构之前，你需要审查和完善你的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So without structured exploration and refinement, you can't communicate your thinking, you can't articulate requirements clearly, and you can't create a shared foundation that agents can build upon. You need to examine and refine your thinking before you can decompose it into features or architecture.</p>
</details>

所以，我们在这里要做的是与代理一起大声思考。可选但强烈建议通过五个部分来完善和捕获你的愿景：

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what we're going to do here is think out loud with an agent. Optionally, but strongly recommended to refine and capture your vision through five sections.</p>
</details>

1.  **项目目的：** 阐明你正在解决的问题，谁会遇到这个问题，以及你的软件提供的核心价值。
2.  **基本功能：** 确定解决问题的三到五个基本工作流程。
3.  **范围边界：** 做出明确的决策。我们称之为“现在，而不是下一步”。“现在”是指“让它工作”版本必须具备的，“下一步”则指未来的增强功能。
4.  **技术上下文：** 回答基本问题，例如它在哪里运行？用户如何交互？它连接到哪些系统？
5.  **工作流程细节：** 对于这三到五个核心工作流程中的每一个，记录目标、每个工作流程的高级步骤以及预期结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Project purpose. So we clarify the pro the problem that you're solving, who experiences it, and the core value that your software delivers. Essential functionality. Identify the three to five fundamental workflows that solve the problem. Scope boundaries. Make explicit decisions. And we call these now, not next. So now as in must have it for the make it work version. Not meaning it's out of scope and next meaning future enhancements. Then technical context. answer basic questions like where does it run? How do users interact? What systems does it connect to? And then lastly, workflow details. So for each of those three to five core workflows, document the goal, document the highle steps for each of the the workflows and then the expected outcome.</p>
</details>

我们通过这些部分进行迭代，直到你的愿景清晰完整。在这里与代理合作非常棒，因为它可以帮助发现差距、提出边缘情况并探究假设。但关键是，你对愿景做出所有决策。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we iterate through these sections until your vision is clear and complete. Working with an agent here is really great because it can help surface gaps, suggest edge cases and probe assumptions. But critically, you make all decisions about the vision.</p>
</details>

这一步的主要输出是主项目规范。这是一个结构化的工件，捕获了你对软件“让它工作”版本的完整愿景。它成为规划第二步中提取功能的基础。当我们通过流程的每一步时，你可以在左下角看到该步骤应用了哪些原则。我们不会详细讨论每个原则，但这展示了框架的凝聚力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The primary output of this step is the master project specification. And this is a structured artifact that captures your complete vision for the software in its make it work version. This becomes the foundation for extracting features in planning step two. And as we go through every step in the process, you can see down here on the bottom left corner which of the principles are applied in that step. We won't talk through each of the principles, but this demonstrates the cohesiveness of the framework.</p>
</details>

#### 2. 功能识别与分类

规划的第二步是功能识别与分类。这一步的目的是从你的主项目规范中系统地提取所有功能单元，然后将它们组织成一个分类的功能清单。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, step two in planning is feature identification and categorization. And the purpose of this step is to systematically extract all units of functionality from your master project specification and then organize them into a categorized feature inventory.</p>
</details>

这解决的问题是，你不能直接从高级愿景跳到详细的功能规范。那是一个太大的飞跃。你的主项目规范在高层次上捕获了软件的功能，但你需要一个中间步骤，逐步将这种思考精炼成具体、可管理的功能单元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem that this solves is you don't jump directly from highle vision to detailed feature specifications. That's too big of a leap. Your master project specification captures what the software does at a high level, but you need an intermediate step that progressively refineses this thinking into concrete, manageable units of functionality.</p>
</details>

如果没有系统化的提取和分类，你就会在没有完整功能清单的情况下尝试指定功能，并且无法看到自然的组合和关系。你缺乏下一步精炼所需的结构化工件，并且被迫将所有功能都记在脑海中，而不是将其外部化以进行分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Without systematic extraction and categorization, you're trying to specify features without a complete inventory of what needs to be built, and you can't see natural groupings and relationships. You lack the structured artifact that's needed for the next refinement step and you're forced to hold all functionality in your head rather than externalizing it for analysis.</p>
</details>

这一步的输入是上一步的主项目规范。所以我们在这里要做的是系统地分析主项目规范，以提取所有功能单元，然后对它们进行分类。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The input to this step is the master project specification from the previous step. And so what we're going to do here is systematically analyze the master project specification to extract all units of functionality and then categorize them.</p>
</details>

通过主项目规范逐节进行，并提出有针对性的提取问题。例如，对于项目目的，这个系统需要哪些基础能力？对于基本功能，每个工作流程需要哪些离散能力？对于范围边界，为了使“让它工作”版本现在能够工作，需要哪些基础设施？对于技术上下文，每个关键工作流程需要哪些平台集成和接口功能？什么处理输入？发生什么处理？有什么输出？我们应该预测哪些错误？以及我们如何反馈？然后是所有这些的**跨领域需求**（Cross-cutting Needs: 指在软件系统的多个模块或功能中普遍存在的需求，如安全性、日志记录、配置和测试）。整个系统需要哪些安全、日志、配置和测试功能？我们将记录每个功能的来源，以便追溯，即它在主项目规范中的来源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">H so work through the master project specification step by step or section by section rather with targeted extraction questions. So it's like for project purpose what foundational capabilities does this system need for essential functionality what discrete capabilities are required for each of the workflows for scope boundaries. What infrastructure is needed to make the make it work version work now for technical context? What platform integration and interface features are needed for each of the key workflows? What handles input? What processing occurs? What output is there? Which errors should we anticipate? And how do we feed back? And then cross cutting needs across all of this. what security logging configuration and testing features span the entire system. We're going to document each feature source for traceability and that's where it came from in the master project specification.</p>
</details>

接下来，我们构建原始功能列表。我们捕获你识别出的所有能力，但我们暂时不组织它们。只需确保我们进行了全面的提取。我们希望通过诸如“什么处理错误？”或“什么验证输入？”、“什么提供反馈？”之类的问题来挑战完整性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we build the raw feature list. So, we capture every capability that you identify, but we're not going to organize these just yet. Just ensure that we have comprehensive extraction. We want to challenge completeness with questions like what handles errors or what validates input? What provides feedback?</p>
</details>

接下来，我们分析这些功能。我们分析整个功能列表，开始根据你的功能和项目类型识别自然的组合。你识别出三到七个类别，它们反映了你的特定软件的结构，这不是硬性规定。然后我们进行分类。确定类别。我们将每个功能分配到最适合的类别。然后我们创建一个唯一的功能ID，例如“core-001”或“API-101”。这些类别是从分析你的实际功能中产生的，而不是来自预设的类别模板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we move on to analyzing those features. So, we analyze the entire feature list to start identifying natural groupings based on your features and your project type. You identify, it's not a hard rule, but three to seven categories that kind of reflect how your specific software is structured. And then we move on to categorization. Determine the categories. We assign each feature to its best fit category. And then we create a unique feature ID like for example core 001 or API 101. These categories emerge from analyzing your actual features and not from predetermined category templates.</p>
</details>

最后，我们估计功能复杂度。这只是对每个提取功能的复杂度的初步估计。是容易？是中等？还是困难？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then lastly, we estimate feature complexity. And this is just an initial estimate of how complex each extracted feature is. Is it easy? Is it medium? Is it hard?</p>
</details>

这一步的输出是**功能清单**（Feature Inventory: 一个完整的、分类的功能列表，包含每个功能的唯一ID、描述、复杂性估计及其在主项目规范中的来源）。它是一个完整、分类的离散功能单元列表。每个功能都包含一个唯一的ID、描述、复杂性估计，并且我们可以追溯到它在主项目规范（MPS）中的来源部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the output from this step is the feature inventory. It's a complete categorized list of all discrete units of functionality. Each feature includes a unique ID, a description, a complexity estimate, and we're able to trace it back to its source section in the MPS.</p>
</details>

#### 3. 迭代规范开发

第三步是迭代规范开发。这一步的目的是将功能清单中的每个功能转化为一个完整、原子化的、可供实现的功能规范，它精确定义了需要构建什么、如何验证以及它依赖于什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Step three is iterative specification development. The purpose of this step is to transform each feature from your feature inventory into a complete atomic implementation ready specification that defines exactly what needs to be built, how it will be validated and what it depends on.</p>
</details>

这一关键步骤解决的问题是，你不能直接从功能清单跳到功能实现。这又是一个太大的飞跃。你的功能清单列出了离散的能力，但每个功能在编程代理实现之前仍需要完全规范化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem that this critical step solves is you can't jump directly from a feature inventory to feature implementation. That's again too big of a leap. So your feature inventory lists discrete capabilities, but each feature still needs to be fully specified before a coding agent can implement it.</p>
</details>

如果没有迭代规范开发，你就会给编程代理高级描述，并希望它们能正确推断细节。在你尝试指定功能之前，你无法验证功能是否真正具有原子性。你没有系统的方法来识别依赖关系。你缺乏实现蓝图，无法实现自主代理工作。最终，你依赖的是提示词工程，而不是全面的规范。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Without iterative features, sorry, without iterative specification development, you're giving coding agents highle descriptions and hoping that they infer details correctly. You can't validate that features are truly atomic until you try to specify them. You have no systematic way to identify dependencies. You lack the implementation blueprints that enable autonomous agent work. And ultimately, you're relying on prompt engineering instead of comprehensive specifications.</p>
</details>

这一步的输入是上一步的功能清单。所以我们在这里要做的是与代理协作，使用三级精炼模式来转换每个功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The input to this step is the feature inventory from the previous step. And so what we're going to do here is collaborate with an agent to transform each feature using a three-level refinement pattern.</p>
</details>

首先，我们以典型的**用户故事**（User Story: 以用户的角度描述软件功能，格式通常为“作为[用户类型]，我想要[执行某个操作]，以便[获得某种好处]”）方式起草一个用户故事：“作为[用户类型]，我想要[执行某个操作]，以便[获得某种好处]。”这捕获了谁需要这个功能，他们在做什么，以及为什么它很重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So first we draft a user story in the typical user story fashion. As a user type, I want to perform some action so that I can obtain some benefit. This captures who needs this, what they're doing, and why it matters.</p>
</details>

接下来，我们确定**实现契约**（Implementation Contracts: 在三个迭代级别上定义功能的行为，从自然语言描述到伪代码逻辑流，最终到正式的接口规范）。这些契约以三个迭代的精炼级别存在。我们从第一级开始，用简单的英语描述功能的作用。通过自然语言描述会发生什么，它接收什么，它做什么，以及它产生什么。然后我们将其精炼到第二级，即**逻辑流**（Logic Flow: 描述功能的输入、逻辑处理步骤和输出），类似于输入、逻辑、输出。我们将描述转化为结构化的**伪代码**（Pseudo Code: 一种非正式的高级语言，用于描述算法或程序逻辑，不遵循特定编程语言的语法），具有清晰的输入、分步逻辑和定义的输出。这真正强制了对输入、发生什么和输出的清晰性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we def determine our implementation contracts, and these exist in three iterative levels of refinement. So we start at level one in plain English. Just describe what the feature does in natural language. Walk through what happens, what it receives, what it does, and what it produces. We then take that and refine it further to level two to logic flow. Kind of the input, logic, output. We translate the description into structured pseudo code with clear input, step-by-step logic, and then defined output. And this really forces clarity about what comes in, what happens, and what goes out.</p>
</details>

然后我们进一步精炼到第三级，即**正式接口**（Formal Interfaces: 定义精确的签名、数据结构和API规范，包括输入类型、返回类型和错误处理）。在这里，我们使用精确的签名、数据结构和API规范来定义和形式化契约。我们为每个组件定义精确的输入类型、返回类型和错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then we refine further to level three, which is formal interfaces. And here's where we define and formalize contracts with exact signatures, data structures, and API specifications. We define exact input types, return types, and errors for each component.</p>
</details>

接下来，我们指定**验证契约**（Validation Contracts: 在三个级别上定义功能的验证策略，从场景描述到测试逻辑，最终到形式化的测试定义）。同样，我们分三个级别进行。第一级再次是简单的英语。我们描述场景，识别所有需要验证的情况：**正常路径**（Happy Path: 指在没有任何错误或异常情况下的预期执行流程）、错误情况、边缘情况、安全属性。然后我们将其精炼到第二级，即**测试逻辑**（Test Logic: 使用“Given-When-Then”结构将每个场景转化为结构化的验证逻辑），并使用“Given-When-Then”结构。我们将每个场景转化为结构化的验证逻辑，包括设置、触发和预期结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we move on to specifying validation contracts. And again, we do this in three levels. Level one is once again plain English. So, we describe the scenarios, identify all situations that need validation, happy path, error cases, edge cases, security properties. We then refine that to level two which is our test logic and we use given when then structure for that. So we translate each scenario into structured verification logic with setup trigger and expected outcomes.</p>
</details>

然后我们进一步精炼到第三级，即**正式测试定义**（Formal Test Definition: 定义精确的测试接口，包括设置输入、精确断言和任何清理操作）。在这里，我们定义精确的测试接口，包括设置输入、精确断言和任何清理操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We further then refine that to our third level which is once or analogous to the previous step formal test definition. And so this is where we define exact test interfaces with setup inputs precise assertions and any tear down.</p>
</details>

此时，我们需要验证功能的原子性。我们需要确保功能可以在一个集中的会话中实现，并且它确实是一个原子功能。我们之前已经定义了功能原子性。但如果此时感觉规范分散，或者它定义或描述了多个能力，我们将把功能拆分为多个功能，然后重复这个过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And at this point we need to validate the atomicity of the feature. We need to make sure that the feature can be implemented in a single focused session and that it is truly one atomic feature. We've defined feature atomicity previously. But if this feels at this point like the specification is scattered or it defines or describes multiple capabilities, we're going to split the feature into multiple features and then repeat the process.</p>
</details>

最后，在我们确定功能是原子性的之后，我们将识别依赖关系。现在，我们真正确定在实现此功能之前必须存在哪些其他功能。我们记录明确的**二进制依赖关系**（Binary Dependencies: 指一个功能要么完全依赖于另一个功能，要么完全不依赖，不存在部分依赖），这意味着它要么依赖于另一个功能，要么不依赖。没有部分依赖。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then lastly, after we've determined that the feature is atomic, we're going to identify dependencies. And this is now where we really determine what other features must exist before this one can be implemented. We document explicit binary dependencies meaning this either depends on another feature or it doesn't. There's no partial dependency.</p>
</details>

流程中这一步的输出是功能清单中每个功能的完整原子功能规范。该规范定义了用户故事、技术蓝图（再次由那三个级别组成）、验证策略及其三个级别、所有依赖关系和任何实现说明。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The output for this step in the process is a complete atomic feature specification for every single feature in the feature inventory. And that spec defines the user story, the technical blueprint which again is comprised of those three levels, the validation strategy and its three levels, all of the dependencies and any implementation notes.</p>
</details>

#### 4. 依赖分析

规划流程的第四步是依赖分析。这里的目的是将我们完整的功能规范集转化为一个经过验证的**依赖矩阵**（Dependency Matrix: 一个可视化网格，显示功能之间的完整依赖图，用于定义功能实现的精确顺序），它将定义功能可以实现的精确顺序。这消除了循环依赖，并揭示了非常自然的实现阶段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Step four in the planning process is dependency analysis. And so here the purpose is to transform our complete set of feature specifications into a validated dependency matrix that will then define the exact order in which features can be implemented. This eliminates circular dependencies and reveals very natural phases of implementation.</p>
</details>

流程中这一步解决的问题是多方面的。你的功能规范包含准确的依赖声明，但这些依赖分散在各个文档中。所以你有一个局部视图，比如功能X依赖于功能Y，但我们还没有全局视图。如果没有综合成依赖矩阵的全局视图，你就无法看到完整的依赖图，无法检测跨多个功能的循环依赖，无法识别可以一起构建的功能组的自然实现阶段，也无法确定哪些功能必须首先实现，哪些可以等待。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problem that this step in the process solves is severalfold. that your feature specifications contain accurate dependency declarations, but these dependencies are scattered across individual documents. So you've got a local picture like feature X depends on feature Y, but we don't have the global picture yet. And without this global view synthesized into a dependency matrix, you can't see the complete dependency graph, detect circular dependencies that span multiple features, identify the natural implementation phases where groups of features can be built together, or determine which features must be implemented first versus which can wait.</p>
</details>

这一步的输入是带有依赖声明的功能规范，它们来自上一步。所以我们在这里要做的是将分散的依赖声明综合成一个统一的矩阵，然后我们将对其进行验证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the input to this step is the feature specifications or sorry are the feature specifications with dependency declarations that have come out of the prior step. So what we're going to do here is synthesize scattered dependency declarations into one unified matrix and then we're going to validate it.</p>
</details>

我们首先提取矩阵。在这里，我们将所有依赖项从单个功能规范中收集到一个可视化网格中。所以每一行是一个功能，每一列也是一个功能。然后我们逐行进行，在行功能依赖于列功能的地方标记一个X。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we start by extracting the matrix. Here we gather all dependencies from individual feature specifications into a visual grid. So each row is a feature and each column is also a feature. And then we go row by row and mark an X where a row feature depends on a column feature.</p>
</details>

接下来，我们生成一个图。我们使用**Graphviz**或**Mermaid**（Graphviz和Mermaid是两种流行的开源工具，用于通过文本描述语言自动生成图表和流程图，帮助可视化复杂结构）或你选择的任何工具从矩阵中创建一个可视化图表，将功能显示为节点，依赖关系显示为边。该图使循环依赖立即可见为闭环，并揭示了应用程序依赖关系的自然分层结构。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next we generate a graph. So we create a visual diagram using graph viz or mermaid or you pick it from the matrix showing features as nodes and dependencies as edges. The graph makes circular dependencies immediately visible as closed loops and reveals the natural layered structure of the dependencies of the application.</p>
</details>

接下来，我们验证和清理。我们对每个标记的依赖项应用二进制依赖测试，测试内容是：行功能是否需要列功能的特定输出配置或功能才能工作？如果是，那么是的，它是一个依赖项。如果不是，则删除它。我们跟踪矩阵中的变化。因此，它可能是一个技术依赖项。这一步帮助我们澄清诸如可能只是协调或工具共享之类的事情，而不是真正的硬性正式依赖。然后我们进入下一步。我们重新生成图表，我们以这种方式进行迭代。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we validate and clean. So, we apply the binary dependency test to every mark dependency and that goes something like does the row feature require the column features specific output configuration or functionality to work? If yes, then yes, it's a dependency. If no, then remove it. And we track changes in the matrix. And so like it may be a technical dependency. This this step helps us clarify things like maybe coordination only or tool sharing, right? Like not true hard formal dependencies. And then we go to the next step. We we regenerate the graph, right? We're going to kind of iterate this way.</p>
</details>

最后，我们检测循环。我们将目视检查图表，代理也可以帮助我们。对于循环依赖，如果我们发现它们，我们会在四个（实际上是三个）步骤中应用解决策略。首先，我们尝试**依赖消除**（Dependency Elimination: 重新审查依赖关系，看是否可以移除），这意味着让我们回去用二进制测试重新检查它。如果不行，那么我们尝试**修订规范**（Revised Specification: 修改接口或重新思考契约，使功能不再需要彼此的输出）。所以让我们修改接口。我们可以重新思考契约，这样功能就不需要彼此的输出了。第三，我们尝试**功能拆分**（Feature Splitting: 将功能拆分，如果它不是原子性的）。这可能意味着这个功能可能不是原子性的。然后，作为最后手段，这是事情变得混乱的地方，**合并**（Consolidation: 作为最后手段，将多个功能合并以解决循环依赖，但通常会导致复杂性增加）是这里的最后手段策略。但我们今天不会过多讨论这一点。然后我们在每个循环后进行迭代。我们更新矩阵。我们重新生成图表。我们重新检查循环依赖，直到没有剩余。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And last, we detect cycles. So we're going to visually inspect the graph and the agent can help us here with this too. Uh for circular dependencies and if we find them we apply resolution strategies across one of four but really three steps. First we try dependency elimination meaning let's go back and reexamine it with the binary test. If that doesn't work then we try revised specification. So let's revise the interfaces. We can rethink contracts. So features don't need each other's output. Thirdly, we try feature splitting. And so that's try and fe split it down again. May this feature may not be atomic. And then it's a last resort. And this is where it gets messy. The consolidation is like the last resort strategy here. But we're not going to touch too much on that today. And then we iterate after each cycle. We update the matrix. We regenerate the graph. And we recheck for cyclical dependencies until zero remain.</p>
</details>

这一步的输出是双重的。我们有一个经过验证的依赖矩阵，它再次是我们的可视化网格，显示了完整的依赖图，所有循环依赖都已解决，所有依赖都已验证为技术上必需，并且定义了清晰的实现层。然后我们有一个依赖图，它是一个可视化图表，将功能显示为节点，依赖关系显示为边，使结构和层级立即可见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The outputs for this step are twofold. We have a validated dependency matrix which is again our visual grid that shows complete dependency graph with all circular dependencies resolved, all dependencies validated as technically necessary and clear implementation layers defined. And then we have the dependency graph which is a visual diagram showing features as nodes and dependencies as edges making structure and layers immediately visible.</p>
</p>
</details>

#### 5. 实施计划开发

规划阶段的第五步也是最后一步是实施计划开发。目的是将你验证过的依赖矩阵转化为一个全面的、按阶段组织的实施路线图，该路线图将功能按依赖层级排序，识别并行开发机会，定义阶段完成标准，并建立实现循环的验证策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fifth and final step of the planning phase is implementation plan development. The purpose is to transform your validated dependency matrix into a comprehensive phase organized implementation road map that sequences features into dependency layers, identifies parallel development opportunities, defines phase completion criteria, and establishes the validation strategies that enable the implementation loop.</p>
</details>

这一步解决的问题是，如果没有全面的实施计划，你将面临实施混乱。尽管有完整的规范和经过验证的依赖矩阵，你仍然无法回答哪些功能应该首先实现，以及按什么顺序实现；哪些可以并行开发（我们今天不会讨论这一点，但它是一个可行的加速器）；如何验证一组功能在继续之前能够协同工作；以及何时可以安全地开始实现依赖于早期工作的那些功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The problems that this step solves are that without a comprehensive implementation plan, you face implementation chaos. Despite having complete specifications and a validated dependency matrix, you can't answer which features should be implemented first and in what order. Which can be developed in parallel. Now, we won't talk about that at all today, but it is a feasible accelerator. How do you validate that a group of features works together before moving forward? and when is it safe to begin implementing features that depend on earlier work.</p>
</details>

这一步的输入是第四步中经过验证的依赖矩阵和依赖图。所以我们在这里要做的是将依赖矩阵转化为一个可执行的实施策略。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The input to this step is the validated dependency matrix and dependency graph from step four. And so what we're going to do here is transform the dependency matrix into an executable implementation strategy.</p>
</details>

这首先通过**拓扑排序**（Topological Sort: 一种对有向无环图（DAG）的顶点进行线性排序的方法，使得对于每条有向边u→v，u都在v之前）来组织实施阶段。我们根据功能在依赖图中的深度将它们组织成实施阶段。没有依赖的功能成为第一阶段。仅依赖于第一阶段的功能成为第二阶段。我们继续这种模式，创建的每个阶段都只依赖于前一个阶段。然后我们验证同一阶段内没有功能相互依赖。最后，我们识别**关键路径**（Critical Path: 在项目管理中，指项目中一系列相互依赖的任务中，持续时间最长的一条路径，决定了项目的最短完成时间），即最长的依赖链。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that begins with us organizing the phases of implementation via a topological sort. So we organize features into implementation phases based on their depth in the dependency map. Features with no dependencies become phase one. Features depending only on phase one become phase 2. And we continue this pattern creating phases where each phase depends only on previous phases. We then verify that no features within the same phase depend on each other. And lastly we identify the critical path which is the longest dependency chain.</p>
</details>

接下来是并行分析，但我们今天将跳过它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next it comes parallel analysis, but we're going to skip that for today.</p>
</details>

接下来是验证策略规划。对于每个阶段，我们定义二进制成功标准：必须通过哪些测试，哪些集成点必须工作，你将如何验证功能是否协同工作，然后我们建立反馈循环，以实现自主代理精炼和二进制进度跟踪。对吧？一个功能是已实现还是未实现？没有20%的实现跟踪。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next is validation strategy planning. So for each phase, we define binary success criteria. What tests must pass, what integration points must work, how you'll verify that features work together, and then we establish feedback loops that enable autonomous agent refinement and binary progress tracking. Right? Is a feature implemented or is it not? There is no 20% implementation tracking.</p>
</details>

思考当功能组合时可能出现的问题，以及哪些验证能为后续阶段的依赖功能提供信心。然后最后，我们进入实施排序。这是我们定义完整的执行策略的地方。所以我们有**阶段门**（Phase Gates: 确定我们何时准备好并完全实现了一个给定阶段，并准备好进入下一个阶段的标准）。我们有针对代理的任务分配指导，我们需要告诉它们如何选择下一个要处理的功能。如果它们受阻，我们有**阻碍管理流程**（Blocker Management Process: 解释代理如何处理和解决遇到的阻碍）。最后，我们定义了进度跟踪机制。这些机制在功能层面、阶段层面以及监控关键路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Think through what could go wrong when features combine and what validation provides confidence for dependent features in later phases. And then last we move on to implementation sequencing. This is where we define the complete execution strategy. So we have phase gates meaning how is it we determine we're ready and completely implemented a given phase and ready to move on to the next one. We have task assignment guidance for the agents. how we need to tell them how it is they're going to select the next feature to work on. In the event that they get blocked, we have blocker management process where we explain how it is that they handle and resolve these blockers. And last, we have progress tracking mechanisms that we define. These are at the feature level, at the phase level and also monitoring the critical path.</p>
</details>

这一阶段的输出是**实施计划**（Implementation Plan: 一个全面的、按阶段组织的执行策略，它将所有功能按依赖层级排序，识别并行开发机会，为每个阶段开发二进制验证门，并为自主代理实施会话提供所需指导）。它是一个全面的、按阶段组织的执行策略，它将所有功能按依赖层级排序，识别并行开发机会，为每个阶段开发二进制验证门，并为自主代理实施会话提供所需指导。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The output of this phase or sorry this step is the implementation plan and that's a comprehensive phased organized execution strategy that sequences all features into dependency layers identifies parallel development opportunities develops binary validation gates for each phase and provides the guidance needed for autonomous agent implementation sessions.</p>
</details>

### 框架流程：实施循环

好的，有了这些，我们现在准备讨论实施循环。实施是你规划的工件指导规范转化为可工作的、经过测试的软件的地方。与规划是线性的，通过五个不同步骤进行不同，实施是一个紧密、快速的循环，对每个原子功能重复执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. And with that, we're now ready to talk about the implementation loop. Implementation is where your planning artifacts guide the transformation of specifications into working tested software. Unlike planning, which is linear and proceeds through five distinct steps, implementation is a tight rapid loop executed repeatedly for each atomic feature.</p>
</details>

不过，在我们深入探讨之前，我们需要理解和剖析**多感官反馈循环**（Multi-sensory Feedback Loop: 代理通过视觉、听觉和触觉等数字感官实施代码并收集反馈，结合正式测试结果，诊断问题并自主精炼）。这是框架中一个非常关键的思想。代理实现代码，然后执行它，同时通过这些数字感官收集反馈：视觉感官（你可以将其视为渲染什么）、听觉感官（系统报告什么）和触觉感官（交互如何响应）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Before we get too far into that though, we need to understand and unpack the multiensory feedback loop. This is a really key idea in the framework. The agent implements code and then it executes it while gathering feedback through these digital senses. The visual sense and you can think about that as what renders the auditory sense what the system reports and the tactile sense how interactions respond.</p>
</details>

这种感官反馈提供了关于应用程序实际发生情况的丰富诊断信息。代理运行正式测试以验证验收标准。但通过将感官反馈与测试结果关联起来，代理既能从测试中理解什么失败了，又能从传感器中理解为什么失败了。这个循环持续进行，直到所有验收标准通过，所有传感器报告干净的执行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This sensory feedback provides rich diagnostic information about what's actually happening in the application. The agent runs formal tests to validate against acceptance criteria. But by correlating sensory feedback with test results, the agent both understands what failed from the tests and why it failed from the sensors. This loop continues until all acceptance criteria pass and all sensors report clean execution.</p>
</details>

#### 1. 上下文组装

实施循环的第一步是上下文组装。这里的目的是将规划工件转化为一个**策划的上下文包**（Curated Context Package: 为AI代理组装的精确信息集合，包括功能规范、依赖代码、相关实施指导和感官工具指令），它能够通过代理的单一编码会话实现自主功能实施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So step one in the implementation loop is context assembly. And the purpose here is to transform planning artifacts into a curated context package that enables autonomous feature implementation with a single coding session for the agent. The problem that this solves is that you have atomic features fully specified and sequenced, but you can't just throw everything at the agent and hope it figures out what to do.</p>
</details>

这解决的问题是，你拥有完全规范化和排序的原子功能，但你不能只是把所有东西都扔给代理，然后希望它能弄清楚该做什么。如果没有系统化的上下文组装，你就会将整个规划文档倾倒到代理会话中，这会浪费上下文窗口在不相关的信息上。这通常会导致代理在没有关键上下文的情况下做出决策，并且你或代理更少地停下来寻求指导。最终，这会将本应相对自主的实施会话变成持续的来回沟通。它浪费了上下文窗口，并导致验证差距。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Without systematic context assembly, you're dumping entire planning documents into agent sessions, which wastes context window on irrelevant information. This results typically in the agent making decisions without critical context and without you or less less frequently stopping and asking for guidance. And ultimately though, this turns what should be relatively autonomous implementation sessions into a constant back and forth. It wastes context window and it results in validation gaps.</p>
</details>

上下文组装的输入是实施计划，但仅限于与将要实施的特定原子功能相关的部分。功能规范以及该规范中指定的所有引用依赖项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the input to context assembly is the implementation plan again only sections that are relevant for the specific atomic feature that's going to be implemented. The feature specification and all of the referenced dependencies that are specified in that that specification.</p>
</details>

我们在这里要做的是通过四个步骤策划这个原子功能所需的精确信息。我们从功能规范组装开始。在这里，我们包含完整的功能规范。你会记得，这包括用户故事、技术契约、验收标准，并且我们使用“@”符号引用所有依赖项。这是代理将遵循的主要蓝图。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what we're going to do here is curate the exact information that's needed for this one atomic feature through four steps. We start with feature specification assembly. And this is where we include the complete feature specification. And you'll recall that that's the user story, the technical contracts, acceptance criteria, and we at reference using the that at symbol, right? All dependencies. This is the primary blueprint that the agent will follow.</p>
</details>

我们的下一步是依赖上下文收集。所以我们遵循功能规范中的所有“@”引用。每个“@”引用都指向一个依赖功能规范和实际实现的**代码**（Code: 指实际的程序代码）。这很关键，因为根据框架定义，所有依赖项都必须事先实现。所以这既包括规范也包括代码。我们将其拉入，以便代理精确理解它需要与什么集成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Our next step is dependency context gathering. So we follow all of the at references in our feature specification. And each at reference points to a depend a dependency feature specification and the actual implemented code. And that's critical to note because per the framework definition all dependencies must be implemented previously. So this is both specification and code. We pull these in so that the agent understands exactly what it needs to integrate with.</p>
</details>

接下来，我们进入实施指导。在这里，我们从实施计划中提取相关部分。所以，我们不只是倾倒整个实施计划。代理需要知道诸如这个功能处于哪个阶段？阶段完成标准是什么？这个阶段的验证策略是什么？我们只引入那些能为这个功能的实施及其验证提供上下文的部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we move on to implementation guidance. And this is where we extract relevant sections from the implementation plan. So, we don't just dump the whole implementation plan in. The agent needs to know things like what phase is this feature in? What are the phase completion criteria? What's the validation strategy for this phase? We just bring in the sections that contextualize this features implementation and its validation.</p>
</details>

然后最后，我们启用感官能力。我们读取功能的验收标准，以识别需要哪些数字传感器。视觉验证语言，如“看到”、“显示”、“渲染”，需要视觉感官工具。日志或错误语言需要听觉感官工具。交互语言，如“点击”、“提交”、“完成”，需要触觉感官工具。所以我们将引用我们编写的相应工具使用指南——我们将在工具部分讨论这一点——但每个工具只引用一次，以便它可以在所有功能中重复使用，这样代理就知道如何收集所需的感官反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then last we enable sensory capabilities. So we read the features acceptance criteria to identify which digital sensors are required. Visual validation language like sees, displays, renders that requires the visual sense tools. Logging or error language requires auditory sense tools. Interaction language like clicks, submits, completes requires tactile sense tools. So we're going to at reference the appropriate tool usage guides that we've written by the way and we'll talk about this in the tool section but once per tool so that it's reusable across all features so that the agent knows how to gather the required sensory feedback.</p>
</details>

这一步的输出是策划的上下文包。这是一个精确组装的、代理所需信息的焦点集合：功能规范、依赖代码（适用于该功能集成的任何和所有功能）、相关实施指导和用于验证的感官工具指令。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The output from this step is the curated context package and this is a focused assembly of exactly what the agent needs. The feature specification, dependency code, the for any and all features that uh this feature integrates with relevant implementation guidance and sensory tool instructions for validation.</p>
</details>

#### 2. 实施循环：编写、执行、测试、关联与精炼

现在我们终于到了这里。请注意，这是整个框架中唯一一个由AI编写代码的步骤。但现在我们进入实施循环，这是实施的最后一步。其目的是将原子功能规范转化为可工作的、经过测试的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And now we're finally here. And note that this is the only one step in this entire framework that is the AI writes code. But now we get to the implementation loop which is the last step of implementation. And the purpose is to transform an atomic feature specification into working tested code.</p>
</details>

这解决了一系列特定的问题。如果没有结构化的实施，代理要么在测试任何东西之前编写所有代码，这会积累并加剧问题；要么它们随意编写和测试，没有系统化的反馈，这使得精炼成为一场猜测游戏。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This solves a specific set of problems. Without structured implementation, agents will either write all code before testing anything and that accumulates problems that compound or they write and test ad hoc without systematic feedback and that makes refinement a bit of a guessing game.</p>
</details>

“先写所有东西再测试”的方法失败了，因为问题在未被发现的情况下积累，你最终会同时调试多个相互关联的问题。随意的方法失败了，因为没有全面的感官反馈，你会错过测试未能捕捉到的问题。例如，测试通过了，但UI没有正确渲染，或者工作流程完成了，但日志中充满了错误。功能“工作”了，但用户交互却中断了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The write everything then test approach fails because problems accumulate undetected and you're ultimately debugging multiple interconnected issues at once. The ad hoc approach fails because without comprehensive sensory feedback, you miss problems that tests don't catch. Tests pass, for example, but the UI doesn't render correctly or the workflow completes but errors fill the logs. The feature quote works but user interactions are broken.</p>
</details>

所以，这一步通过一个单一的多感官实施循环解决了所有这些问题，因为功能是原子性的。完整的实施适合在一个上下文窗口中。代理从头到尾保持完全理解。没有上下文丢失，没有重建，也没有保真度下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this step solves all these problems through a single multiensory implementation loop because features are atomic. The complete imple implementation fits in one context window. The agent maintains full understanding from start to finish. There's no context loss, no reconstruction, and no degraded fidelity.</p>
</details>

实施循环的输入是先前组装的上下文包。所以我们在这里要做的是执行紧密的多感官反馈循环，这从编写代码开始。代理遵循功能规范的技术契约来实现代码。它将所有三个级别的契约转化为可工作的代码，确保接口、输入、输出和错误处理与规范精确匹配。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The input to the implementation loop is the context package that was assembled previously. And so what we're going to do here is execute the tight multiensory feedback loop, which starts by writing code. The agent implements the code following the feature specifications technical contracts. It translates all three levels of contracts into working code ensuring interfaces, inputs, outputs, and error handling match the specification exactly.</p>
</details>

然后我们进入执行和感知。这是我们获得全面的数字反馈的地方。代理立即执行已编写的代码，并根据验收标准要求，通过三个数字传感器收集全面的感官反馈。我们已经讨论了其中涉及的视觉、听觉和触觉感官。代理捕获关于执行过程中实际发生情况的丰富诊断信息，然后进入测试和验证。在这里，代理运行规范的验证契约部分中的所有测试场景，测试提供针对规范要求的二进制通过/失败信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we move on to execute and sense. This is where we get comprehensive digital feedback. The agent immediately executes the code that's been written and gathers comprehensive sensory feedback through the three digital sensors based on acceptance criteria requirements. And we've talked about the visual, auditory, and tactile senses that are at play there. The agent captures rich diagnostic information about what's actually happening during execution and then moves on to test and validate. And this is where the agent runs all test scenarios from the validation contract section of the specification and tests provide binary pass fail spec uh signals against the specification's requirements.</p>
</details>

现在，我们将循环最后两步的输出全部关联起来。代理关联所有活动传感器和所有测试结果的信号。多个传感器报告相同的问题证实了诊断。传感器之间相互冲突的信号可能揭示了隐藏的复杂性。但这种集成分析揭示了测试中什么失败了，以及从感官反馈中为什么失败了，这使得代理能够进行有针对性的精炼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So now we take the output of the last two steps of the loop and we correlate them all. So the agent correlates signals across all active sensors and all of the test results. Multiple sensors reporting the same issue confirms a diagnosis. Conflicting signals behind sensors may reveal hidden complexity. But this integrated analysis reveals both what failed from the tests and why it failed from sensory feedback which enables targeted refinement by the agent.</p>
</details>

我们循环往复，直到功能完成。如果所有测试通过，所有传感器报告干净的执行，那么功能就完成了。也就是说，日志中没有错误，UI渲染没有问题，交互正常工作。此时，功能就完成了。否则，代理会根据收集到的诊断信息进行精炼，并再次循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we loop and loop and loop until the feature is complete. And the feature is complete if all tests pass and all sensors report clean execution. So there's no errors in blogs, there are no UI rendering issues, interactions work properly. At that point, the feature is complete. Otherwise, the agent refineses based on the diagnostic information that's been gathered and loops through the loop again.</p>
</details>

当我们确定这些**收敛标准**（Convergence Criteria: 指示功能何时被视为完全完成的条件，即所有测试通过且所有传感器报告干净执行）满足时，功能就完成了，代理会创建一个原子**Git提交**（Git Commit: 在Git版本控制系统中，一次提交代表了代码库在特定时间点的一个快照，通常包含一组相关的更改），其中只包含此功能的更改，并附带结构化的提交消息，包括功能ID、规范摘要、验证确认和实施节点。此时，功能就完全完成了，代码库已为下一个功能做好准备。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we determine that these convergence criteria are met, then the feature is complete and the agent creates an atomic git commit containing only this features changes with a structured commit message including feature ID, specification summary, validation confirmation, and implementation nodes. And at that point, the feature is fully complete and the codebase is ready for the next feature.</p>
</details>

所以这里的输出是，我们终于达到了目标。我们得到了一个完全可工作的、经过测试的功能，它通过了所有验收标准、所有测试，并已通过所有三个数字传感器进行验证，该功能已准备好集成到更广泛的代码库中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the output here is we've finally got there. We've got a fully working tested feature that's passed all acceptance criteria, all tests and has been validated by all three digital sensors and the feature is ready for integration into the broader codebase.</p>
</details>

### 框架工具：支持能力

现在，让我们回顾一下我们的随性编程开发者，看看他在接触了框架的原则和流程后表现如何。嗯，看来我们甚至引起了老虎的注意和惊讶。思想已被震撼，思想已被扩展。好的，我们现在即将完成。让我们进入工具部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's check back in with our Vibe coding dev and see how he's fairing now that he's been exposed to both the principles and the process of the framework. Well, it seems that we've even roused the tiger's attention and astonishment here. Minds have been blown. Minds have been expanded. Well, we're rounding the corner now. Let's move into tools.</p>
</details>

该框架需要四项基础能力来支持通过流程完成的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The framework requires four foundational capabilities that enable work done via the process.</p>
</details>

#### 1. 编码环境

让我们来谈谈编码环境。编码环境是一个完整的开发工作区，支持同时进行的两种根本不同的工作：你的架构思考和规划，以及代理的自主实施和测试。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk about the coding environment. The coding environment is a complete development workspace that supports two fundamentally different types of work that are happening simultaneously. your architectural thinking and planning and the agents autonomous cap uh implementation and testing.</p>
</details>

所以编码环境有四个核心组件。首先是AI编程代理，这很明显。接下来是**执行沙盒**（Execution Sandbox: 一个安全、隔离的环境，用于执行代理生成的代码和运行测试，允许实验和迭代而无风险）。这是一个安全、隔离的环境，所有代理编写的代码都在其中执行，并运行测试。自主实施需要实验、迭代和偶尔破坏事物的自由。沙盒在一个一次性的、无风险的环境中提供完整的开发能力，易于重置，失败没有后果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so there are four core components of the coding environment. The first is an AI coding agent obviously. Next is an execution sandbox and this is a safe isolated environment where all agent written code executes and tests are run. Autonomous implementation requires the freedom to experiment, iterate, and occasionally break things. And the sandbox provides complete development capabilities in a disposable, risk-free environment with easy reset and no consequences for failure.</p>
</details>

接下来，我们需要一个**IDE**（Integrated Development Environment: 集成开发环境，提供代码编辑器、调试器、编译器等工具，方便软件开发）或文本编辑器，如果你坚持的话。我在这里将避免IDE与文本编辑器的圣战。你选择适合你的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next, we need an IDE or a text editor if you must. And I'm going to avoid the holy wars of IDE versus text editor here. You pick the one that suits you.</p>
</details>

最后是语音输入。这是一个快速捕获系统，以思考的速度将语音转换为文本。规划工作涉及将架构思考外部化，这通常是不完整、探索性和迭代的。语音输入消除了打字瓶颈，让你能够大声思考并比打字更快地捕获想法。我真的无法过分强调一个好的语音输入工具在应用框架中的巨大影响。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And last is voice input. And this is the rapid capture system that converts speech to text at thinking speed. Planning work involves externalizing architectural thinking and that's often incomplete, exploratory, and iterative. Voice input removes the typing bottleneck, letting you think out loud and capture ideas much faster than typing. I really can't oversell just how massively impactful a good voice input tool is in applying the framework.</p>
</details>

#### 2. 多感官反馈系统

接下来我们有多感官反馈系统。这是一个全面的验证基础设施，使代理能够通过三个互补的数字传感器观察其实现：视觉、听觉和触觉，并通过与人类在开发过程中使用的类似广度的观察来实现自主精炼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next we have the multiensory feedback system. This is a comprehensive validation infrastructure that gives agents the ability to observe their implementations through three complimentary digital sensors. Those being visual, auditory and tactile and it enables autonomous refinement through an analogous breadth of observation that humans use during development.</p>
</details>

这里的核心组件是**视觉感官工具**（Visual Sense Tools: 能够直接观察软件输出和状态的工具，如捕获UI渲染、系统状态和代码结构），它能够直接观察产生什么和存在什么。它们捕获UI渲染（如屏幕截图或布局样式）、系统状态（如数据库内容、配置、会话数据）和代码结构（即实际实现）。视觉观察能捕捉日志和测试遗漏的问题：破损的渲染、不正确的状态和结构问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The core components here are visual sense tools which enable direct observation of what was produced and what exists. They capture UI rendering like screenshots or layout styling system state so database contents configuration session data and code structure which is the actual implementation. Visual observation catches problems that logs and tests miss broken rendering incorrect state and structural issues.</p>
</details>

**听觉感官工具**（Auditory Sense Tools: 监控系统报告信息的工具，如捕获日志、错误、API响应和堆栈跟踪），这些工具监控系统报告什么。它们捕获日志（即系统叙述其操作）、错误和警告（即系统检测到的问题）以及API响应（即系统间通信），最重要的是**堆栈跟踪**（Stack Traces: 详细的故障信息）。这些诊断信息解释了为什么事情失败，而不仅仅是它们失败了。

<details>
<summary>View/Hide Original English</p>
<p class="english-text">Auditory sense tools. These tools monitor what the system reports. They capture logs and that's the system narrating its oper operations if you will, errors and warnings, that's problems the system detects and API responses so interystem communications and critically stack traces like detailed failure information. This diagnostic information explains why things fail, not just that they failed.</p>
</details>

最后是**触觉传感器**（Tactile Sensors: 能够模拟和执行用户工作流程，进行主动交互测试的工具）。这些工具能够实现主动交互测试。它们模拟和执行用户工作流程，即端到端地完成任务。API交互（思考请求-响应循环）、性能验证（如响应时间、资源使用）、安全检查和集成测试。这些交互揭示了软件在实际使用中是否行为正确，而不仅仅是在隔离的测试场景中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lastly, tactile sensors. These tools enable active interaction testing. They simulate and execute user workflows. So that's completing tasks end to end. API interactions, think request response cycles, performance validation like response times and resource usage, security checks and integration testing. These interactions reveal whether software behaves correctly under actual use, not just in isolated test scenarios.</p>
</details>

#### 3. 上下文工程与组装工具

接下来我们讨论上下文工程与组装工具。这是一种系统化的方法，通过刻意的交叉引用为AI代理组装专注、完整的上下文包。思考声明式链接、用于流程自动化的**斜杠命令**（Slash Commands: 在命令行或聊天界面中，以斜杠开头触发特定功能或工作流的命令），用于结构可预测性的模板，以及用于高效可传递文档的**Markdown文档**（Markdown Documentation: 一种轻量级标记语言，易于读写，并可转换为HTML等格式，常用于编写文档）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Next we talk about context engineering and assembly tools. And this is a systematic approach to assembling focused complete context packages for AI agents through deliberate cross references. Think declarative linking slash commands for process automation templates for structural predictability and markdown documentation for efficient passable documents.</p>
</details>

让我们来谈谈这里的**交叉引用系统**（Cross-referencing System: 一种声明式链接机制，允许文档明确引用其他文档、代码文件或特定部分，从而实现自动上下文组装）。这是一种声明式链接机制，允许文档明确引用其他文档、代码文件或部分，从而通过遵循这些依赖链实现自动上下文组装。大多数优秀的编程代理都能理解并遵循这些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's talk about the cross referencing system here. This is a declarative linking mechanism that allows documents to explicitly reference other documents or code files or sections that enables automatic context assembly by following these dependency chains. Most good coding agents will understand and follow these.</p>
</details>

然后我们谈论斜杠命令，或者在你选择的编程代理环境中的等效命令。这些是流程自动化机制，通过单一调用触发多步框架工作流。它对于上下文组装、实例化模板、实施会话初始化等非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then we talk slash commands or whatever the equivalent is in your selected coding agent environment. But these are process automation mechanisms that trigger multi-step framework workflows through a single invocation. And it's so useful for things like context assembly, for instantiating a template, for implementing sessions uh for sorry for uh implementation session initialization</p>
</details>

然后是**模板系统**（Template System: 结构化的文档模板，用于框架中的每个工件，确保格式一致性和完整性）。这些是每个框架工件的结构化文档模板：主项目规范、功能规范、依赖矩阵、实施计划、实施记录。它们确保了格式的一致性和完整性。如果没有模板，你每次都会重新发明规范结构。从头开始是令人筋疲力尽的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and then the template system. And these are the structured document templates for every single framework artifact. Master project specification, the feature specification, dependency matrix, implementation plan, implementation record. And these ensure consistent format and completeness. Without templates, you reinvent specification structure every time. And starting from scratch is exhausting.</p>
</details>

最后是Markdown文档格式。我们都知道它是什么。但代理对它非常熟悉，因此拥有能够快速将输入转换为Markdown的工具至关重要。基本上，任何你想与代理沟通的内容都应该在工具链中能够即时转换为Markdown。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lastly, markdown documentation format. We all know what it is. Uh, but agents are so literate in it that it's vital to have tooling that rapidly converts inputs to markdown. Basically, anything that you want to communicate to an agent should be instantly convertible to markdown in the tool chain.</p>
</details>

#### 4. 版本控制与进度跟踪

最后，版本控制和进度跟踪。这是一个双重机制系统，它使用**Git**（Git: 一个分布式版本控制系统，用于跟踪代码更改和协作开发）进行实施历史记录，通过原子功能提交。其次，使用实施计划进行功能完成跟踪。它们协同工作，提供完整的项目溯源和当前状态可见性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lastly, version control and progress tracking. This is a dual mechanism system that uses I'm just going to say it git for implementation history through atomic feature commits and secondly the implementation plan for feature completion tracking. These work together to provide complete project provenence and current state visibility.</p>
</details>

我可以说，这是项目跟踪最简单的形式。它当然可以比这更复杂，并与其他系统集成。但对于版本控制，Git或其等效工具，我认为这不言而喻。它就像在视频游戏中保存进度一样，显而易见且必不可少。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I will say that this is the simplest form of project tracking. It can get certainly more complex and integrated with other systems than this. But uh for version control, git or the equivalent, I think that goes without saying. It's like saving progress in a video game. It's obvious and essential.</p>
</details>

然后是带有进度跟踪的实施计划，我们使用从模板创建的相同规划工件进行功能跟踪。哦，抱歉，是进度跟踪。所以，Git会告诉我们什么改变了，何时改变了，但它不会告诉我们项目状态。实施计划填补了这一空白。它是一个规划工件，也充当进度跟踪器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then the implementation plan with progress tracking, we take that same planning artifact created from a template earlier and we use it for feature tracking. Oh, sorry, for progress tracking. So, Git will show us what changed and when, but it doesn't show us the project state. And the implementation plan fills that gap. It's a planning artifact that also serves as the progress tracker.</p>
</details>

### 总结与资源

这是我的工具栈的快速一瞥。我不会花时间详细讲解，但你可以在走廊里找到我，我很乐意详细介绍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, here's a quick look at my tool stack. I won't spend time talking through it in detail, but uh catch me in the hallway and I'm happy to go through it.</p>
</details>

好的。如果你喜欢这次演讲，并想要幻灯片和其他资源，包括原声带，我为此演讲专门建了一个网站。请访问vibecodinghangover.com查看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right. Well, if you've enjoyed this talk and you want the slides from it and other resources, including the soundtrack, I built a site just for this talk. So, check it out at vibecodinghangover.com.</p>
</details>