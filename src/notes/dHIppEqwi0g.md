---
area: "tech-engineering"
category: technology
companies_orgs:
- Google
- Statsig
- Linear
- Uber
- GitHub
- Shopify
- Google DeepMind
date: '2025-10-29'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Beyond Vibe Coding
- Leading Effective Engineering Teams
- The Pragmatic Engineer
- The Software Engineer's Guidebook
- AI Engineering
people:
- Andrej Karpathy
products_models:
- VS Code
- Cursor
- Copilot
- Gemini
- Gemini CLI
- Figma
- Bolt
project: []
series: ''
source: https://www.youtube.com/watch?v=dHIppEqwi0g
speaker: The Pragmatic Engineer
status: evergreen
summary: 谷歌Chrome团队的Addy Osmani深度探讨了“Vibe Coding”与“AI辅助工程”的本质区别。他指出，Vibe Coding虽适用于快速原型设计，但专业的软件开发需要更严谨的AI辅助工程方法，强调人类工程师的主导地位和责任。本期内容涵盖了“70%问题”，即AI能快速完成70%的工作，但最后的30%仍需深厚的工程技能。Osmani分享了规约驱动开发、测试和保持批判性思维的重要性，并展望了异步编码代理等未来工作流。
tags:
- development
- engineering
- human
- problem
- vibe-coding
title: Addy Osmani深度解析：从Vibe Coding到专业的AI辅助工程
---
### Vibe Coding与AI辅助工程的本质区别

Addy Osmani 在 Chrome 团队工作了13年，是一位多产的作家。他的最新著作名为《超越Vibe Coding》，面向专业软件工程师。今天，我们将深入探讨 **Vibe Coding**（Vibe Coding: 一种依赖直觉和高层级提示，快速进行原型设计的编程方式）与 **AI 辅助工程**（AI-assisted engineering: 一种更严谨的方法，将AI作为强大协作者，但人类工程师仍掌握主导权）的对比，以及为什么 Vibe Coding 除了用于快速构建粗糙原型外，用途并不广泛。我们还将讨论理解模型行为的重要性、新的AI开发工作流程，如规约驱动开发、异步编码、后台代理和多代理并行编码等未被充分探索的软件工程新领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Addy Osmani has worked on the Chrome team for 13 years. And if you ever opened up the developer tab on Chrome, you've definitely used the stuff he built. He is also a prolific author. His latest book is titled Beyond Vibe Coding and it's aimed at professional software engineers. Today we go into Vibe coding versus AI assisted engineering and why vibe coding isn't useful for much more than just prototyping something quick and dirty. The importance of understanding what the model does. Why Addie always reads to the thinking log of the model he uses to make sure he fully understands what it did and why before approving changes. New development workflows with AI how things like spec-driven development, asynchronous coding, background agents and parallel coding with several agents are new and unexplored areas of software engineering and many more.</p>
</details>

对于 Vibe Coding 和 AI 辅助软件工程，我倾向于告诉大家，我个人认为 Vibe Coding 与 AI 辅助工程不尽相同。我觉得这种区分至关重要，因为我们不希望贬低工程这门学科的价值，也不想给行业新人一个关于构建稳健、可用于生产的软件所需条件的片面印象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I tend to tell folks that I personally think the vibe coding is not the same as AI assisted engineering. And I feel like that distinction is kind of critical because we don't want to devalue the discipline of engineering and give folks that are new to the industry an incomplete picture of what it takes to build robust production-ready software.</p>
</details>

我认为 Vibe Coding 是指完全沉浸在 AI 的创作流程中，非常注重高层次的提示，在很多方面甚至忘记了代码的存在。这可以追溯到 Andrej Karpathy 最初的定义，它意味着接受 AI 的建议而未必进行深入审查，并专注于快速的迭代实验。我个人发现它非常适合用于原型、**MVP**（Minimum Viable Product: 最小可行产品）和学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think the vibe coding is really about fully giving into the creative flow within AI. So very much focused on high level prompting and in many ways forgetting that the code exists. This goes back to Andrej Karpathy's like original definition but it's about accepting AI suggestions without necessarily having a deep review and focusing on rapid iterative experimentation. Personally, I find it really great for prototypes, MVPs and learning.</p>
</details>

我所观察到的是，在生产团队中，当他们需要快速尝试新想法，并对一个想法、一个组件或一个 MVP 的形态建立直觉时，这种方法非常有用。它优先考虑的是速度和探索，而不是正确性和可维护性这类在为大规模生产环境构建产品时我们更关心的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I've seen in production teams is that this has been very useful for them when it comes to trying out ideas rapidly and building out an intuition for what the shape of an idea might look like, what a component might look like, what an MVP might look like and that tends to prioritize speed and exploration over things like correctness and maintainability, things that we perhaps care a little bit about when it comes to building things for large production audiences.</p>
</details>

而 AI 辅助工程，对我而言，是 AI 作为一个强大的协作者，但它并不能替代工程原则。在这个模型中，AI 是一个力量倍增器，可以在整个软件开发生命周期中提供帮助，无论是样板代码、调试还是部署。最大的区别在于，人类工程师始终牢牢掌握控制权。你负责思考架构、审查模型，并理解 AI 为你生成的每一行（如果不是大部分）代码。最终，你要为确保最终产品的安全性、可扩展性和可维护性负责。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To me AI assisted engineering is where AI is this powerful collaborator but it's not a replacement for engineering principles and so in that model it is a force multiplier but it can help you across that whole cycle whether it is with boilerplate debugging deployment but the big difference is that the human engineer remains firmly in control you are responsible for thinking about the architecture for reviewing the mode and for understanding every line if not most of what AI is generating for you and you're on the hook really for making sure that the final product is secure, scalable and maintainable.</p>
</details>

AI 或许能帮助你提升速度，这很棒，但这并不意味着你可以推卸对最终质量的责任。我倾向于认为，你在软件工程领域的专业知识越丰富，使用 **LLM**（Large Language Models: 大型语言模型）时得到的结果就越好。如果你是行业新人或初级工程师，可能还没有机会接触或思考一些我们认为是传统的最佳实践。例如，如果你关心的是生产质量的编程，那么你只应该提交那些你能向他人完全解释清楚的代码到你的仓库中。仅仅期望 AI 能在事后帮你理清任何混乱，从长远来看可能行不通。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Maybe AI is helping you with with velocity, which is which is great, but that doesn't mean that you can sort of shrug off your responsibility for quality at the end of the day. And I tend to think that a lot of people have said that they found AI and coding to be a force multiplier but I found that the greater expertise that you have in software engineering the better the results you can get when you're using LLMs. And I think sometimes if you're new to the industry or you're a junior, maybe there are some what we would consider to be traditional best practices that maybe you haven't had to experience them yet or think about them. Like if you care about production quality programming, you should probably only be committing code to your repo that you can fully explain to somebody else because just expecting that the AI is going to help you untangle whatever mess happens later on is probably not going to work out long term.</p>
</details>

### 规约驱动开发：专业工程师的AI工作流

我最近更专注于 **规约驱动开发**（spec-driven development: 一种先定义清晰的规格、需求和预期，再进行编码的开发方法）的理念，即对自己想要构建的东西有一个非常清晰的计划。当然，在某些地方我仍然会进行 Vibe Coding，比如开发个人用的一次性工具。过去，如果一个工程师或产品经理有个想法，我们可能会快速做一个模型、线框图或草图。而现在，你可以通过 Vibe Coding 快速构建一个原型，并在一个 **PR**（Pull Request: 代码合并请求）或聊天中向别人展示：“嘿，这是我脑海中对这个愿景更清晰的版本。”我认为这其中蕴含着强大的力量，我非常喜欢 Vibe Coding 的这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have more recently been focusing on the idea of spec-driven development, having a very clear plan of what it is that I want to build. I think that there are definitely places where I still vibe code, if it's for a personal tool something throwaway. In the old days if an engineer or a PM had an idea maybe we would put together a quick mock, maybe we would put together a wireframe or a sketch or something like that. These days the fact that you can vibe code a prototype and actually show somebody in a pull request or in a chat like, "Hey, here's an even more clear version of the vision that I had in mind for this." I think there's something very powerful to that and I'm loving vibe coding for that.</p>
</details>

但这并不意味着我们应该把 Vibe Coding 产生的原型或代码直接投入生产。一旦你对一个组件、一个功能或一个视图的愿景有了清晰的认识，你就应该写下其实际的期望和需求。这通常会让你从 LLM 那里得到质量高得多的产出。否则，如果你沉溺于“感觉”，你其实也是在放任 AI 去决定架构和功能。这对于创意构思阶段来说没问题，但对于生产级别的产品工程来说，可能就远远不够了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That doesn't mean that we take the vibe-coded prototype or that code and just stick it in production. Once you have clarity around the vision that you have for a component, for a feature, for a view, you should probably be writing out like, okay, well, what are the actual expectations around this? What do we actually consider to be the requirements? And that will give you a much higher quality outcome typically from the LLM. Because otherwise, if you're giving into the vibes, you're also sort of giving into, okay, well, you figure out the architecture, you figure out like what this should do. And while that's fine for ideation, it's probably not sufficient for production sort of product engineering.</p>
</details>

对我来说，规约驱动开发是一件大事。我认为测试也非常棒。如果你愿意接受测试，它可以成为一种很好的方式来降低你在编码中使用 LLM 的风险。因为有时，即使你用的是最先进的模型，也可能遇到代码比预期更复杂的情况，或者前几个提示生成的代码都很好，然后不知何故就跑偏了。但如果你能用测试来证明一切正常，并且一旦出现问题，你能更清楚地知道问题所在，我认为这能帮助你的项目始终保持“绿色”状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So for me, spec-driven development has been a big thing. I think that tests are great. And if you are open to tests, it can be a great way of derisking your use of LLMs in coding because sometimes, you know, even if you're using state-of-the-art models, you can end up in a situation where maybe the code looks more convoluted than you would expect or maybe your first couple of prompts have been generating really good code and then for whatever reason things go off the rails. But if you can prove that things are working with tests and that if something did go off the rails, it's clearer to you what that was, I think that that can help you keep your project green the whole time.</p>
</details>

此外，我所在的团队刚刚发布了 Chrome DevTools MCP。我非常关心质量。近年来我们看到很多案例，当你发现某个东西坏了，很多工程师会直接对 LLM 说：“嘿，这个按钮好像偏了”或者“这个东西不太对，去修好它。”这又有点接近于凭感觉行事了。但如果你能让浏览器这样的工具参与进来，它能实际看到页面，就像 Chrome DevTools MCP 和相关解决方案所做的那样，它们在很多方面赋予了你的 LLM “眼睛”。它能看到浏览器所见，能看到渲染的内容，能检测控制台中的警告和错误，从而更深入地了解问题所在。这能极大地改善你的反馈循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My team just released Chrome DevTools MCP. I care a lot about quality and I think that in the last couple of years we've seen a number of cases where if you notice that something is broken. I will see a lot of engineers that will just say okay well hey LLM it looks like this button is off or it looks like this thing is not quite exactly what it should be. Go fix it. And that that's again going a little bit closer to just rolling with the vibes. But if you can keep things like a browser in the loop or something that can actually see the page that is what kind of Chrome DevTools MCP and related solutions do. They give your LLM eyes in many ways. So it can see what the browser sees. It can see what's rendering or what isn't. It can detect if there are warnings, errors in the console. Maybe even get a deeper sense of what is broken. And that can just improve the feedback loop that you have.</p>
</details>

### 团队观察：谷歌如何平衡AI效率与工程质量

在像谷歌这样的公司，我们对于大规模软件工程有一套经过长期实战检验的思维方式。随着 AI 的出现，我们意识到，很多东西并没有消失。你仍然需要关心质量，仍然需要做尽职调查。我们发现一些有趣的事情，与初创公司和其他类型公司所观察到的情况类似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">At a company like Google, we have this very long-term very battle tested way of thinking about software engineering at scale. And with AI, what we've realized is, you know, a lot of that doesn't go away. You still want to care about quality. You still want to care about doing due diligence. The things that I think we've found interesting kind of mimic what people have seen in in startups and other kinds of companies.</p>
</details>

比如，掌握和理解提示工程（prompt engineering）的重要性，确保你构建正确的“咒语”组合以从 LLM 获得最佳结果。以及最近的上下文工程（context engineering），如何优化上下文窗口以提高产出质量。我们花了很多时间思考这些问题，确保项目特定的描述、细节、文件、示例等任何额外内容——这些 LLM 训练数据中未必有的信息——都被妥善处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the importance of mastering understanding like what is prompt engineering, right? like making sure that you are constructing the right set of incantations to get the best outcome from an LLM and then context engineering more recently like how can you make sure that you are optimizing the context window to increase the chances that those those outcomes are higher quality. We spend a lot of time thinking about that. Making sure that the right sets of descriptions, details, files, examples, any additional content that is specific to a project that the LLM may not necessarily have in its training data. That has been very interesting and important for us as we've been working through.</p>
</details>

老实说，最重要的经验之一就是始终保持人类的监督。我们当然也遇到过这样的情况，很多人都碰到过：外部贡献者有时会非常热情地想为你的项目做贡献，但他们会使用 LLM 提交一些东西。这给维护者增加了更多负担。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think honestly just the importance of always maintaining human oversight has been one of the bigger learnings. We have of course, like I know a lot of people have run into this. We've of course seen cases where people, very often like external contributors, will sometimes be very passionate about like hey I want to contribute to your project but then they'll use an LLM and submit something that, I think Mitchell Hashimoto was blowing up on social media because he just had enough that people were submitting things that as you said out of good intention but putting way more load on maintainers.</p>
</details>

最近我读到的一项研究强调，如果你提高了代码和改进的提交速度，并且有人工监督，那么人工审查将成为瓶颈。团队们开始意识到这一点：“等等，我们收到的 PR 越来越多了，但谁来审查它们呢？”这确实意味着我们的工作流程可能需要演变。我看到很多关于“为什么我们不用 LLM 来做代码审查”的讨论，但这有点像一个滑坡谬误，因为如果 AI 写了代码，你没有仔细研究，然后 AI 又来审查代码，你真的能确定最终合并的是什么吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One of the studies that I recently read highlighted that if you are increasing the velocity of code and improvements that can land in the team and you are doing human oversight, the human review is going to become the bottleneck. And that is what teams are starting to realize like, oh wait, we're starting to see a lot more PRs come through, but who's going to review those, right? That does also mean that our workflows may have to evolve. I have seen a lot of talk about like, yeah, why why aren't we using LLMs to also do the code review and that, you know, that that's a little bit of a slippery slope because if the AI is writing the code and you haven't studied it carefully, but the AI is also reviewing the code, are you actually sure about what's what's landing?</p>
</details>

就我个人而言，我喜欢使用 VS Code 中的 Klein 等工具。大多数这类工具都会展示解决方案构建过程中的“思考”过程。即使这个过程很快，我也会回过头去，滚动、展开并阅读：“你构建这个解决方案的思考过程是怎样的？你做了哪些决定？你生成了什么？”我会在代码进入 PR 之前审查它。因为将来很有可能我需要维护这些代码，或者做一些 LLM 帮不了我的微调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For me personally, there are a lot of tools that I use. Some of my favorite ones include using Klein in VS Code. Most of these tools will show you the thinking that is happening behind the scenes as a solution is being built out. And even if that happens quickly, like I will try to go back, scroll through, expand and read through, okay, what was your thinking process through actually being able to build this out? What decisions did you make? What did you generate? And I will review that code before it ends up in a pull request. There's going to be some likelihood later on that I may have to maintain that code, that I may have to make some tweaks to that code that the LLM is not going to be able to help me with.</p>
</details>

### “70%问题”：为何最后的30%最考验功力

我的这些经历让我在某个时候写了一篇关于我称之为“70%问题”的文章。这个问题的核心在于，LLM 能够非常迅速地生成一个可用应用程序的大约70%，但它们往往在最后30%上举步维艰。这最后的30%，你可以称之为“最后一英里”，它包含了许多你的听众可能会遇到的模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My experience of this kind of led me at one point to to write about what I called the 70% problem. The 70% problem is really about this idea that LLMs can produce very roughly like 70% of a working application very quickly but they tend to struggle with that last 30% and that last 30% you can consider it like the the the last mile, but it includes lots of different kinds of patterns that you know your audience will probably run across.</p>
</details>

比如“倒退两步”模式：你用几个提示构建了一些东西，再给 LLM 一个提示，结果它走向了一个完全不同的方向，可能完全重写了你的 UI 或组件背后的功能。此外，还有隐藏的可维护性成本，比如安全漏洞。正是在这些地方，我们看到人们不小心泄露了 API 密钥，或者出现了 **XSS**（Cross-Site Scripting: 跨站脚本攻击）问题以及各种其他问题，因为他们没有全面地思考他们正在解决的问题，只是随波逐流。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Things like the two steps back pattern. So, you know, you have used a couple of prompts to build up something. You give an LLM one more prompt and it happens to go in a completely different direction. Maybe it has fully rewritten your UI or the functionality behind your component. There are very often hidden maintainability costs, places where you're not being specific. You are delegating the responsibility back to the LLM. As we've seen time and time again on hacker news, security vulnerabilities, this is exactly where we see people accidentally, you know, leaking API keys, where there are XSS issues, where there are all kinds of problems because people did not think as holistically about the problem that they were solving and just sort of gave into the vibes.</p>
</details>

因此，一个通过 Vibe Coding 创建的概念验证，对于 MVP 或原型设计阶段来说是没问题的，但如果你要将它合并到一个与他人协作、服务于真实用户群的代码库中，它很可能需要以生产质量为标准进行重写。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So a vibe coded proof of concept, you know, is fine for for MVP for that prototyping phase, but it likely needs to be rewritten with production quality in mind. If you're going to be landing this in a codebase where you're working with other people, working with a team and dealing with a real user base of people.</p>
</details>

更有经验的工程师能够更容易地完成最后的30%，而经验不足的工程师则更容易陷入困境或产生错误的自信。对于那最后的30%，你经常会看到初级工程师、实习生或应届毕业生不知道下一步该做什么，只能不断地重新提示 LLM 来修复问题。如果 LLM 做不到，他们自己也未必具备调试问题或理解问题所在的全部技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">More experienced engineers can finish the last 30% a lot easier and then less experienced engineers get actually a lot more stuck or get this false confidence. Yes. Absolutely. I think that with that last 30% what you will often see junior engineers or interns or new grads doing is they will not really know what to do next beyond just constantly reprompting the LLM to fix the issues and if it's not able to do it they're not necessarily going to have all of those skills just yet for debugging the problem or understanding where the issues are.</p>
</details>

这说明了拥有良好批判性思维和解决问题心态的重要性。我们一直强调这对计算机科学领域的人很重要，我认为现在依然如此。那种真正去阅读代码、理解系统、明白所有部分如何连接在一起所需的勤奋，我认为并不会消失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So what this speaks to is the importance of having a really good critical thinking problem solving mindset. You know, we always talked about the importance of this for people who are going into computer science. I think that that remains now. But that diligence required to actually read the code, understand the system, understand how all of those pieces connect together, I don't think that that necessarily goes away.</p>
</details>

### 保持警惕：如何在AI时代守护批判性思维

我自己已经注意到一件事：当我使用这些AI工具时，无论是代码生成工具、代理还是仅仅是自动补全，我有一种倾向，就是不断按 Tab 键或接受所有建议，尤其是在处理一些不那么关键的事情时。我发现自己正在失去一点批判性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that I'm kind of noticing on myself already is when I use these AI tools, may that be cloud code or agents or even just the autocomplete, I have a tendency to do tap tab or accept or just like accept all the things, especially when I'm working on something that I mean it's not the most critical thing in the world. And I find myself losing a little bit of criticality.</p>
</details>

我给人们的一些建议是，在某些特定的功能或一周中的某些日子里，可以有意识地尝试不依赖AI或LLM，看看自己是否还能解决一些问题。这可以保持你的批判性思维能力，并迫使你思考：假设所有顶级的LLM提供商都宕机一天，你会怎么做？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There are a few ideas that I've tried to suggest to folks. Things like for certain features or certain days of the week maybe you intentionally try to not lean on using AI or an LLM and just try to see like okay well can I still solve some of these problems myself to preserve your critical thinking skills and force you to think about okay well let's say that all of the top LLM providers were down for the day what would you do?</p>
</details>

现实情况是，我认为能够独立思考事物如何运作、能够在不必然依赖AI的情况下解决问题，将继续对我们至关重要。模型会越来越好，但要达到在任何情况下你扔给它的任何需求它都能做对的程度，我认为还需要相当长的时间。如果你卡住了，试了五次、十次还没解决问题，你最终还是得自己动手。因此，强迫自己进入测试和重新测试批判性思维能力的场景将非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reality is that I do think that it's going to continue to be very important for us to be able to think through how things work, be able to problem solve without necessarily relying on the AI. The models are going to continue getting better. But it is going to take quite some time in my opinion before you're going to be able to fully trust that in every situation whatever requirements you throw at it is going to be able to get it right. And if you get stuck, if you're trying things out and you've tried it five, 10 times and it still hasn't solved the problem, you're going to have to solve the problem yourself. So, I think that being able to force yourself into situations where you're testing and retesting your critical thinking skills are going to be important.</p>
</details>

### 未来工作流：异步代理与Vibe Designing的兴起

对我来说，我最兴奋地期待其发展的，是异步后台编码代理（asynchronous background coding agents）这个概念。目前有许多团队正在尝试这些想法。我认为，能够将你的待办事项部分委派出去，让一个系统能够异步地实现它们，这是一个非常有趣的想法，前提是我们能做到无合并冲突且易于人工验证。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. I think for me the the thing that I'm most excited about seeing evolve is this idea of a synchronous background coding agents. A number of teams playing around with these ideas at the moment. I think that the idea of you being able to delegate parts of your backlog and have a system be able to implement that asynchronously is is a very interesting idea. If we can do that without merge conflicts in a way that is easily human verifiable.</p>
</details>

我已经发现，如果你让一个代理负责编写或更新你的测试，或者让多个代理协同工作，将你的代码库从一个库版本迁移到另一个版本，它们现在已经能很好地完成这类工作。对于一些较小的变更，比如添加暗黑模式，将这类任务委派给代理将会变得非常非常出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have been finding that that is very much already in a place where if you are having one agent work on writing or updating your tests or you have a number of agents working together on trying to migrate your codebase from one version of a library to another or a version of a dependency to another that they're pretty okay at doing that kind of work right now. Smaller changes like there are lots of things that we all have to do like adding dark mode for for example the smaller kinds of changes where maybe being able to delegate those kinds of changes to as agents are are going to get very very good.</p>
</details>

另一个非常有趣的是 **Vibe Designing**（基于感觉的设计）。我看到产品工程和产品开发的这一部分正在发生一些演变。看到 Figma 的 MCP 朝这个方向发展，让设计师和开发者能更紧密地合作，或者至少让设计师能将他们的愿景转化为功能性原型，这非常令人兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing that's very interesting is is vibe designing. I'm seeing that part of product engineering, product development evolving a little bit. Was very exciting to see you know, Figma's MCP moving a little bit closer in this direction. Things that allow designers and developers to work more closely together or to at least enable designers to be able to take their vision and turn it into a functional prototype, something perhaps a little bit closer to code that can then be productionized and is not just a one-off demo.</p>
</details>

### 工程师角色的演变与终身学习的重要性

我认为，对于应届生和资深工程师来说，这将是一个有趣的时代。AI 无疑提高了行业的下限，但它也提高了上限。初级工程师将能更快地起步，但那些能够编写规约、分解工作、理解系统架构并进行有效审查的资深工程师，我认为他们将变得更有价值。我们之前谈到的那最后的30%，我认为那是一种杠杆，而不仅仅是繁杂的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that, you know, there's going to be interesting times for new grads, versus seniors. You know, AI definitely raises the floor, but it also raises the ceiling, too. And, juniors are going to be able to get moving faster, but, seniors who can, you know, write specs, decompose work, understand system architecture, review effectively, I think that they're going to become even more valuable. And that last 30% that we talked about, I think it's leverage. Not just busy work, but I actually think it's leverage.</p>
</details>

我完全同意你的看法，关于团队中的开发者教育如何为这个时刻而演变，有很多值得探讨的地方。我记得我刚入行时，导师制一直是个大话题，我们讨论过结对编程的重要性。我想我们将会看到“三人编程”的情况，即一个初级、一个资深工程师和AI一起工作。也许资深工程师会在那里，要求你解释AI生成的代码，或者引导你了解代码如何与系统的其他部分连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I completely agree with you and and I think that there's a lot to be said about how developer education in teams may also evolve for this moment. Historically I remember when I was coming up, mentorship was always a big topic and we talked about the importance of like pair programming. I think we're going to see, you know, perhaps even situations of of trio programming where it's a junior, senior and the AI and maybe the senior is going to be there asking you to explain the code that the AI is generating in some way or walking you through how that code perhaps connects to other parts of the system.</p>
</details>

我认为一直以来都成立的一点是，成为一个终身学习者的重要性。无论框架来了又去，工具如何变化，行业如何演进，成为一个终身学习者，对尝试新事物、失败、积累技能持开放态度，这一点始终非常非常重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that what is new is the importance you know we one of the things that I have found has always held true is the importance of being a lifelong learner. That has always remained true doesn't matter if frameworks come and go tools change you know the industry evolves being a lifelong learner and being very open to trying out new things failing building up those skills I think that that remains very very important.</p>
</details>

我团队里那些最早成功利用AI进行编码和产品工程的人，正是那些抱着“我乐于学习新事物、去尝试，并拥有成长心态”的人。如果行不通，那也没关系，至少我试过了，至少我理解了其中的限制，也许将来我会在不同的用例中尝试不同的模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The people on my team that I think were the most successful early on at leveraging AI for coding and for product engineering were the ones that went in with this mindset of I am happy to learn new things to try out and to have this growth mindset and if it doesn't work that's fine at least I've tried it out at least I understand the constraints and maybe I'll try out different models for these different use cases in the future.</p>
</details>

### 最后的思考与推荐

**你最喜欢的编程语言是什么，为什么？**

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's your favorite programming language and why?</p>
</details>

我最喜欢的编程语言是 JavaScript。这并非出于个人原因，可能有更好的编程语言。我喜欢 JavaScript 是因为它让地球上任何人都能构建和发布东西到网络上，而不需要经过任何看门人。它非常开放，我认为这种理念非常具有解放意义。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My favorite programming language is JavaScript. This is not for the personal reasons. There are probably better programming languages. I like JavaScript because it enables anybody on the planet to be able to build and ship something to the web in a way that doesn't require gatekeepers. It it's very open. And I think that there's something very liberating about that idea.</p>
</details>

**有什么你非常喜欢使用的工具吗？它有什么作用？**

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What's a tool that you really like using and what does it do?</p>
</details>

我想说，目前我最喜欢的工具之一可能是 Bolt。Bolt 是人们可以使用的 Vibe Coding 和脚手架工具之一。他们最近增加了对使用自定义代理的支持，所以你可以用它来构建你的 Vibe Coding 应用，而且产出质量通常非常高，设计也很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would say that one of my favorite tools at the moment is probably Bolt. Bolt is one of those vibe coding scaffolding tools that people can use. They very recently added support actually for being able to use custom agents. So you can use clawed code for example to build your vicoded app and the output is generally very high quality great designs.</p>
</details>

**你会推荐哪本书？**

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And finally, what's a book that you would recommend?</p>
</details>

我要推荐的书是《The Software Engineer's Guidebook》，作者是你（Gergely Orosz）。它以一种我非常信服的方式涵盖了软件工程师的职业道路和最佳实践。当然，如果我不推荐这本书，那么如果你想学习更多关于当前AI工程的基础知识，有一本由 Chip Huyen 写的很棒的书叫《AI Engineering》，也值得一看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the book I'm going to recommend is one that I think covers career paths and best practices for software engineers in a in a way that I found very compelling. It is by you. It's the software engineer guide book. Genuinely an an excellent book. I guess if I wasn't going to of course you know recommend that one I think that if you are trying to learn more about the foundational aspects of AI engineering in this moment there's a great book called AI engineering by Chip Huin that is also worth taking a look at.</p>
</details>