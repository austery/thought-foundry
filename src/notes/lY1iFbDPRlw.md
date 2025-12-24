---
area: tech-insights
category: technology
companies_orgs:
- Minimax
date: '2025-12-13'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books: []
products_models:
- Minimax M2
project:
- ai-impact-analysis
series: ''
source: https://www.youtube.com/watch?v=lY1iFbDPRlw
speaker: AI Engineer
status: evergreen
summary: 本文介绍了 Minimax 公司推出的全新 AI 模型 Minimax M2。该模型拥有 100 亿活跃参数，专为编码和智能体任务优化，具备高成本效益。M2
  在各项基准测试中表现出色，并在开源社区中获得广泛下载和积极反馈。文章深入探讨了 M2 的核心技术优势，包括通过规模化环境与专家反馈提升编码能力、利用交错式思维处理长时序任务、通过扰动流水线实现强大的泛化能力，以及其小巧体积带来的多智能体可扩展性。Minimax
  展望了 M2 的未来发展，并强调了其致力于为社区构建和分享先进 AI 模型的使命。
tags:
- agentic-ai
- ai-model
- coding-assistant
- minimax-m2
- open-weight
title: Minimax M2：专为编码与智能体任务打造的高效AI模型
---

### Minimax M2：一款革命性的 AI 模型

大家好，我是 Olive。今天非常荣幸能向大家介绍我们的新模型 Minimax M2。我曾在纽约市生活了六年，很高兴能回到这里，尽管角色有所不同。我目前在 Minimax 从事强化学习（Reinforcement Learning: 一种通过试错和奖励/惩罚来学习的机器学习方法）和模型评估的研究。

在开始之前，我想先了解一下大家。有多少人听说过或尝试过 Minimax？哦，有几位。是的，不是所有人都知道，但这正是我今天站在这里的价值所在。

我们是一家全球性公司，致力于基础模型（Foundation Models: 在海量数据上训练的大规模人工智能模型，可适应各种下游任务）和应用（Applications: 指基于基础模型开发的具体软件或服务）的研发。我们开发多模态模型（Multi-modality Models: 能够处理和理解多种数据类型（如文本、图像、音频、视频）信息的 AI 模型），包括文本、视觉语言模型，我们的视频生成模型 Hyoa，以及语音和音乐生成技术。此外，我们内部还有许多应用，包括智能体（Agents: 指能够自主行动、做出决策并与环境交互以实现目标的 AI 程序）等。

这正是我们与其他实验室或公司的不同之处：我们同时开发基础模型和应用。我们的研究人员和开发人员并肩工作，共同推进项目。我们的独特之处在于，我们拥有内部开发人员的第一手经验，能够开发出社区开发者真正需要的模型。

现在，我想介绍我们的 Minimax M2。它是一个开放权重模型（Open-weight Model: 其权重（参数）公开的模型，允许他人使用、修改和在其基础上进行开发），体量非常小，仅有 100 亿活跃参数（Active Parameters: 模型在推理或训练过程中实际使用或参与的参数，通常是总参数的一个子集），专为编码、工作场所智能体任务（Agentic Tasks: 指需要 AI 代理自主行动、做出决策并与环境交互以实现目标的任务）而设计，并且成本效益极高（Cost-efficient: 以最小的资源（计算能力、时间、金钱）消耗来执行任务）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi. Hi everyone. Um, I'm Olive. It's my great honor here today to present on our new model, Miniax M2. Um, I actually lived in New York City for six years, so it feels great to come back. Um, but with a different role. Um, I currently study reinforcement learning and model evaluation at Miniax. Um, let me just get a quick sense of the room. Who here has heard or have tried of Miniax before? Oh, a couple of there. Yeah, not everybody, but I guess Yeah, but here's the value, right, of me standing here today. Um so we are a global company that works on both foundation models and applications. We develop multi modality models including text um vision language models our video generation model hyoa and speech generation music generation stuff and we also have um many applications including agents and stuff um inhouse. So that that's the specific thing that's different from the other labs for other companies. So we both develop foundation models um and applications. So we have research and developers sitting uh sitting side by side working on things. Um so our difference would be that we have firsthand experience from our um in-house developers into developing models that developers would really need in the community. And here I want to introduce our Miniax M2 um which is an openweight model very small with only 10 billion active parameters um that was designed specifically for coding workplace agentic tasks. It's very costefficient.</p>
</details>

### 性能表现与社区认可

接下来，我将介绍一下基准测试（Benchmark Performance: 用于衡量模型在特定任务上表现的标准测试）的性能，因为大家都很关心这一点。我们在智能基准测试（Intelligence Benchmarks: 用于评估 AI 模型通用认知能力的标准化测试）和智能体基准测试（Agent Benchmarks: 旨在评估 AI 代理在特定任务或环境中的性能的标准化测试）中均位列前茅。我认为我们是目前最顶尖的开源模型（Open-source Models: 其源代码、架构以及通常是权重公开的模型，可免费使用和修改）之一。

但数字并非全部，因为有时你会发现那些分数极高的模型，在实际环境中表现却不尽如人意，对吧？因此，我们非常关注社区的动态。在我们发布的第一个星期，我们获得了最多的下载量，并在 Open Router（Open Router: 一个提供多种 AI 模型访问的平台或服务，通常允许用户比较其性能和使用情况）上的代币使用量（Token Usage: 指模型处理或生成文本时消耗的计算单位）也攀升至前三名。我们非常高兴看到社区成员在他们的开发流程中真正喜爱我们的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um let me just go over the benchmark performance because people care about it. So uh we rank very top in both um intelligence benchmarks and also agent benchmarks. Uh we I think we're on the top of the open source models. But then numbers don't tell everything because sometimes you get those super high number models you plug into them um into your environment and they suck, right? So we really care about the dynamics in the community and in our first week we had the most downloads and also we climbed up to top three token usage on open router. So we're very glad that people in the community are really loving our model um into their development cycle.</p>
</details>

### Minimax M2 的核心技术优势

今天，我想分享的是我们如何塑造了 M2 的模型特性，使其在您的编码体验中如此出色。我将向您介绍其背后的训练机制，这些机制支撑着从编码体验、长时序状态跟踪任务（Long Horizon State Tracking Tasks: 需要模型在长时间内跟踪和管理状态的任务），到强大的泛化能力和多智能体（Multi-agent）可扩展性等各个方面。

#### 卓越的编码能力：通过规模化环境与专家反馈实现

首先，让我们谈谈编码体验，我们通过规模化环境（Scaled Environments: 在复杂性、多样性或数量上进行扩展以改进模型学习的训练环境）和规模化专家（Scaled Experts: 利用高技能个体（专家）的知识和反馈来指导模型开发和训练）来支持这一点。

开发者需要一个能够真正适应他们使用的语言并在日常工作流程中发挥作用的模型。这意味着我们需要利用互联网上的真实数据，并扩大环境的数量，以便模型在训练过程中（例如强化学习期间）能够实际响应环境，能够以可验证的编码目标为导向进行学习。因此，我们扩大了环境数量和我们的基础设施，以高效地执行这些训练。

通过数据构建（Data Construction: 创建、整理和准备用于模型训练的数据集的过）和强化学习，我们能够训练出一个强大的、全栈多语言模型。我想强调的是，除了大家都在谈论的环境扩展，我们还扩展了“专家开发者”作为奖励模型（Reward Models: 在强化学习中用于根据代理的行为提供反馈（奖励）的模型）。正如我之前提到的，我们内部有大量超级专家开发者，他们能够为我们模型的性能提供反馈。

他们密切参与了模型开发和训练周期，包括问题定义、错误修复、代码库重构等。他们还识别出开发者喜欢的模型行为，确定哪些是可靠的、开发者会信任的，并对模型的行为和最终交付成果进行精确的奖励和评估，从而打造出开发者真正愿意合作并能提高效率的模型。通过这些努力，我们在许多语言的实际应用中取得了领先地位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So today what I want to share is how we actually shape these men model characteristics that made M2 so good in your coding experience. And I'm gonna present to you um the training be behind it that supports each one of them from coding experience to long horizon state tracking tasks um to robust generalization to different scaffolds to multi- aent uh scalability. So first let's talk about code experience which we sc uh which we supported with um scaled environments and scaled experts. So um developers need a model that can actually work in the language they use and across the workflow that they deal with every day. So which means that we need to utilize the real data from from the internet and then um scale the number of environments so that the model when during training for example during reinforcement learning it can actually um reacts to the uh environment. it can actually target verifiable coding goals and to learn from it. So that's why we scaled both the number uh of environments and also our um infrastructure so that we can perform those training very efficiently. So um with data construction and reinforcement learning we were able to train the model so that it's very strong um it's full stack multilingual and what I want to mention here is that besides scaling environment that everybody talks about we actually scale something called expert developers um as reward models. So as I mentioned before uh we have a ton of um super expert developers in house that could give us feedback to our model's performance. So they participated closely into the model development and training cycle including problem definition for example um bugs bug fixing for example um repo refactoring and stuff like that. And also they identify the model behaviors that developers enjoy and they identify what's reliable and uh what developers would trust and they give precise reward and evaluation to the model's behaviors to the final um deliverables so that um it is a model that developers really want to work with and that can adds efficiency to the developers. So with that we were able to lead in many um languages in real use.</p>
</details>

#### 应对长时序任务：交错式思维与工具调用

Minimax M2 的第二个特点是它在长时序任务（Long Horizon Tasks: 需要模型在长时间内一系列行动或决策，或涉及复杂依赖关系的任务）中表现出色。这些长任务需要与复杂环境（Complex Environments: 指模型需要交互的、可能包含不确定性或动态变化因素的外部系统或场景）进行交互，并需要结合推理（Reasoning: 指 AI 模型进行逻辑思考、推断和决策的能力）使用多种工具（Tools: 指 AI 模型可以调用的外部功能或服务，如搜索、计算器、API 等）。我们通过交错式思维（Interleaved Thinking: 模型在解决问题时，在不同认知步骤（如工具使用和内部反思）之间交替进行的推理过程）模式和强化学习来支持这一点。

那么，什么是交错式思维呢？对于一个能使用工具的普通推理模型，它的工作方式通常是这样的：模型会接收工具信息、系统提示（System Prompts: 指给模型的预设指令或上下文）和用户提示，然后进行思考并调用工具。它可以同时调用多个工具。接着，它从环境中获取工具响应，然后进行最终思考并交付最终内容。

但现实是，环境往往是嘈杂且动态的。你无法仅凭一次尝试就完成测试。可能会出现工具错误，或者从环境中获得意想不到的结果等等。因此，我们模仿人类与世界互动的方式：我们观察事物，获取反馈，然后进行思考。我们判断反馈是否良好，然后采取进一步行动，做出其他决策。这就是我们为 M2 模型所做的。

如果我们看右边的图示，M2 不会像普通模型那样在一次工具调用后就停止，而是会再次思考，并对环境做出反应，以判断信息是否足以满足其需求。我们称之为交错式思维，因为它将思维过程与工具调用交织在一起。在一个用户交互回合中，它可能需要进行数十甚至上百次（Tens to 100 turns: 指在一次用户交互中，模型可能需要进行多次连续的工具调用和思考循环）工具调用。

这有助于适应环境噪声（Environment Noise: 指环境中存在的干扰、不确定性或不稳定性因素），因为环境并非总是稳定。当情况不理想时，它可以选择使用其他工具或做出其他决策，从而专注于长时序任务，并能同时自动化您的工作流程，例如使用 Gmail、Notion、终端等。您只需进行一次模型调用，几乎无需人工干预，它就能独立完成所有工作。

这里有一个很酷的插图，因为身处纽约，我能感受到交易和市场的氛围。可以看到，上周股市出现了一些扰动（Perturbations: 指数据或环境中引入的微小变化或干扰），但我们的模型能够保持稳定。正如我所说，存在环境噪声、新信息缺失、新闻事件以及其他交易政策等因素，但我们的模型在这些环境中仍能表现得相当稳定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the second characteristic that Miniax M2 has is it it performs good in those long horizon tasks. Uh those long tasks that require interacting with complex environments that requiring um using multiple tools with reasoning. And we supported that with the interled thinking pattern um and reinforcement learning. So what is interled thinking? Um so with a normal reasoning model that can use tools, it it normally works like this. You have the tools information given to it. You have the system prompts. Um you have user prompts and then the model would sync and then it calls tools. It can be a couple of tools at the same time. And then they get the tool response from the environment and then it performs a final thinking and deliver a final content. But but here's the truth, right? In real world, the environments are often noisy and dynamic. You can't really perform this one test just by once. You can get um tool errors for example. You can get um unexpected results from the environment and stuff like that. So um what we did is that we imagine how humans interact with the world. We we we look at something we get feedbacks and then we think about it. We think if the feedback is good or not and then we make other actions, make other decisions. And that's why we did the same thing with our M2 model. So if we look at this um chart over a diagram on the right. So instead of just stopping um after one round of tool calling, it actually thinks again and reacts to the uh reacts to the environments to see if the information is enough for it to uh get what it wants. So basically we call the interle thinking or people call it interle thinking because it interle thinking with tool calling. um a couple of time it can be you know uh tens to 100 um turns [clears throat] of tool calling within just one user interaction term so it helps um adaptation to environment noise for example uh just like what I mentioned the environment is it's it's not stable all the time and then something is suboptimal and then it can choose to use other tools or do other decisions it can focus on long horizon has um can automate your workflow um using for example Gmails, notions, um terminal all at the same time. You just need to maybe make one model call without minim with minimal um human intervention. It can do it all by itself. And and here's a cool illustration on the right because it's New York City. I feel the vibe of you know trading and marketing. Um so you can see that there was some um there was some perturbations in the stock market uh I think last week and then our model was able to keep it stable. So just like I said there's like environment noise there's no new information there's like yeah news it looks like there there's like other trading policies and stuff like that but our model was able to uh to perform pretty stably in these kind of environments.</p>
</details>

#### 强大的泛化能力：适应多样的智能体框架

第三个特点是我们在多种智能体框架（Agent Scaffolds: 指 AI 代理运行的底层框架或结构，包括其环境、工具和交互协议）上的强大泛化能力，这得益于我们在数据流水线（Data Pipeline: 指用于处理、转换和准备数据的整个流程）中的扰动。

我们希望我们的智能体能够泛化。那么，什么是智能体泛化呢？起初，我们认为这仅仅是工具的扩展。我们用足够多、各种各样的新工具来训练模型，甚至发明新工具，然后它就能在未见过的工具上表现良好。这在一定程度上是正确的，起初确实有效。但很快我们意识到，如果我们稍微扰动一下环境，比如改变另一个智能体框架，模型就无法泛化了。

那么，什么是智能体泛化？我们得出结论，它是在模型整个运行空间（Operational Space: 指模型可以操作和交互的所有可能范围，包括工具信息、提示、环境等）中对扰动的适应能力。回想一下，模型的运行空间包括工具信息、系统提示、用户提示，它们都可以不同；还可以是聊天模板、环境或工具响应。因此，我们设计并维护了数据扰动流水线，使我们的模型能够泛化到许多智能体框架。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the third characteristic is our robust um generalization to many agent scaffolds which was supported by our perturbations in the data pipeline. So we want our agent to generalize. But what is agent generalization? At first we thought it was just tool scaling. We train the model with enough tools, various tools kind of new tools. we invent tools um and then it will just perform good on unseen tools. Well, that was kind of the truth. It worked at first. Uh but then we soon realized that if we perturb the environment a little bit, for example, we change another agent scaffold, then it doesn't generalize. So what is agent generalization? Well, we conclude that um it's adaptation to perturbations across the model's entire uh operational space. If we uh think back what's the model's um operational space that we talked about it can be tool information it can be system prompts it can be user prompts they can all all be different they can be the chat template they can be the environment they can be the tool response. So what we did is that we designed and maintained perturbation pipelines of our data so that um our model can actually gen generalized to a lot of agent scaffolds.</p>
</details>

#### 多智能体可扩展性：M2 的成本效益优势

我想提到的第四个特点是多智能体（Multi-agent）可扩展性，M2 由于其小巧和高成本效益而使其成为可能。

这里有几个视频。这是由我们自己的 Minimax 智能体应用（Agent App: 指由 AI 智能体驱动的应用程序）驱动的 M2。下方有二维码，您可以扫描尝试。这是一个我们开发的智能体应用。在这里，我们可以看到 M2 的不同副本，它们可以... 进行研究，撰写研究结果，进行分析并将其整理成报告。它可以将其呈现为前端图示，并且它们可以并行工作。由于它体积小且成本效益高，它能够真正支持那些长期的智能体任务，以及可能需要某种并行处理的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the fourth characteristic that I want to mention is the multi- aent scalability um which is very possible with M2 because it's very small and cost effective. I have a couple of videos here. Um, this is M2 powered by our own Miniax agent uh app. We actually have a QR code downside. So, if you want it, you can just scan and try it. So, it's like an agent app we we developed. And here we can see different copies of M2, right? It can do research. um it can write the write the research results and analyze it and put it in a re report. It can put it in some kind of front end illustration and they can work in parallel. So because it is so small um and so cost effective it can really um support those long run agentic tasks and tasks that maybe um require some kind of parallelism.</p>
</details>

### 展望未来：Minimax M2 的发展蓝图与社区使命

那么，Minimax M2 的下一步是什么？基于我刚才介绍的内容，我们汇集了环境、算法、数据、专家价值、模型架构、推理和评估等所有要素，构建了一个快速、智能、能够使用工具并具备泛化能力的模型。

未来，M2.1 和 M3 将会带来什么？我们设想了更强的编码能力、记忆工作（Memory Work: 指模型在处理任务时能够存储、检索和利用历史信息的能力）、上下文管理（Context Management: 指模型管理和利用对话或任务相关信息的策略）、面向工作场所的预测性 AI（Proactive AI: 指能够主动预测用户需求并提供帮助的 AI）以及垂直领域专家（Vertical Experts: 特定行业或领域的专家）的支持。而且，由于我们拥有出色的音频和视频生成模型，未来或许可以将其集成。

但我们的使命是，致力于将屏幕上展示的以及更多资源和价值整合起来，为社区开发可用的模型。因此，我们非常需要社区的反馈，因为我们希望与大家共同构建。这就像一场需要所有人参与的竞赛，我们将致力于与社区分享成果。

以上就是今天的全部内容。我们再次衷心希望大家能尝试一下这个模型，它确实非常出色。您可以通过上方的联系方式与我们联系，也可以扫描二维码试用模型。感谢大家的聆听。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what's next right for Minimax M2 from what I've introduced we gathered environments um algorithms data expert values model architecture inference evaluation all these stuff to build a model um that was you know fast that was uh intelligent that could use tools that generalizes what's next for um M2.1 1 and M3 were in the future we thinks of better coding maybe memory work context management proactive AI for workplace vertical experts and because we have those great audio generation video generation models maybe we can integrate them but all our mission is that we're committed to bring all these resources whatever is on the screen and maybe more yeah and values and put them all together to develop models for uh the community to use. So um we really need feedback from the community if possible because we want to build this together and you know this is kind of a race that everyone needs to participate and then um we com we are committed to share it with the community. Yeah. And that's all the insight for today. Um, we really hope again we really hope you to try the model because it's pretty good. And then we can contact contact us up there. You can try the models by scanning the QR code. Yeah, basically that's it. Thank you all for listening.</p>
</details>