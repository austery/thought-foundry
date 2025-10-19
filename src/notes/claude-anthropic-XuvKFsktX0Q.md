---
title: 构建Claude智能代理的未来：Anthropic开发者平台新进展
summary: Anthropic团队探讨了Claude开发者平台如何助力构建智能代理，讨论了代理的定义、去脚手架化趋势、上下文管理、代理记忆等创新功能，并展望了未来发展。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-agent
- claude-developer-platform
- llm
people: []
companies_orgs: []
products_models: []
media_books: []
date: '2025-10-02'
author: Anthropic
speaker: Anthropic
draft: true
guest: ''
insight: ''
layout: post.njk
series: ''
source: https://www.youtube.com/watch?v=XuvKFsktX0Q
status: evergreen
---
### 开发者平台的演进

Alex: Hey, I'm Alex. I lead Claude Relations here at Anthropic. Today we're talking about building the future of agents with Claude, and I'm joined by my colleagues.

Alex: 大家好，我是Alex，Anthropic的Claude关系负责人。今天我们来聊聊如何用Claude构建未来的智能代理，我的同事们也加入了我们。

Brad: I'm Brad. I run the PM team on the Claude Developer Platform.

Brad: 我是Brad，我负责Claude开发者平台的PM团队。

Katelyn: I'm Katelyn, I lead the engineering team for the Claude Developer Platform.

Katelyn: 我是Katelyn，我负责Claude开发者平台的工程团队。

Alex: Let's talk about the Claude Developer Platform.

Alex: 让我们来谈谈Claude开发者平台。

Brad: Yeah, let's start with that.

Brad: 是的，我们从这里开始吧。

Katelyn: Let's start with that.

Katelyn: 就从这里开始。

Alex: Start there.

Alex: 从那里开始。

Brad: It used to be called the Anthropic API. We just went through a big name change. Can you walk me through why we made that change and also what this new platform is and what it encompasses?

Brad: 它以前被称为**Anthropic API** (Anthropic应用程序编程接口: Anthropic公司提供的用于访问其AI模型的接口)。我们刚刚进行了一次重大的名称变更。你能给我解释一下我们为什么要做出这个改变，以及这个新平台是什么，它涵盖了哪些内容吗？

Katelyn: Yeah, totally. So the Claude Developer Platform really encompasses our APIs, our **SDKs** (Software Development Kit: 一套允许创建特定软件、框架、硬件平台、计算机系统、视频游戏机、操作系统或类似开发平台应用程序的开发工具), our documentation, all of our experiences within the console, and really everything that a developer needs to actually build on top of Claude.

Katelyn: 当然可以。Claude开发者平台实际上包含了我们的应用程序接口、我们的**软件开发工具包**（SDK）、我们的文档、我们在控制台内的所有体验，以及开发者在Claude之上进行构建所需的一切。

Katelyn: We're really humbled, proud to serve some really awesome customers around the world who are trying to, what we like to say, raise the ceiling of intelligence using Claude, and the platform really enables them to do that.

Katelyn: 我们非常荣幸和自豪能够为世界各地一些杰出的客户服务，他们正尝试用Claude提升智能的上限，而这个平台真正地帮助他们实现了这一点。

Katelyn: And I would say one of my favorite parts about it is the platform doesn't just serve customers externally, the platform actually serves our internal products.

Katelyn: 我想说，我最喜欢它的一点是，这个平台不仅服务于外部客户，它实际上也服务于我们的内部产品。

Katelyn: So we love telling people, Claude Code, for example, is actually built directly on our public platform.

Katelyn: 所以我们喜欢告诉大家，例如Claude Code就是直接构建在我们的公共平台之上的。

Alex: I see.

Alex: 我明白了。

Brad: Yeah, I mean, I think when we started, we were just the Anthropic APIs, very simple access to the model, but over the last year or so, we've added so many features to it.

Brad: 是的，我的意思是，我想当我们开始的时候，我们只是Anthropic API，非常简单地访问模型，但在过去一年左右的时间里，我们为其添加了许多功能。

Brad: We added **prompt caching** (Prompt Caching: 一种优化技术，用于存储和重用模型推理过程中重复的提示词部分，以提高效率和降低成本), we added a whole separate **batch of API** (Batch API: 批量处理应用程序接口，允许用户一次性提交多个请求，系统随后异步处理这些请求), we added **web search** (Web Search: 网络搜索功能，允许AI模型直接在互联网上搜索信息), **web fetch** (Web Fetch: 网页抓取功能，允许AI模型获取指定网页的完整内容), we have this **context management** (Context Management: 上下文管理，指在AI模型交互中有效维护和利用相关信息以支持连贯对话和复杂任务的能力) support, the **code execution** (Code Execution: 代码执行，指AI模型能够编写并运行代码以完成特定任务的能力).

Brad: 我们添加了**提示缓存**功能，我们添加了一整套独立的**批量API**，我们添加了**网络搜索**、**网页抓取**功能，我们还有**上下文管理**支持以及**代码执行**功能。

Brad: So all these tools, you know, now this kind of, we feel like, yeah, it's aspirationally, it's a platform now.

Brad: 所以所有这些工具，你知道，现在这种感觉，我们觉得，是的，从愿景上来说，它现在是一个平台了。

Alex: I see, so there's just a lot more to it now. It's evolved in a pretty drastic way over the past year.

Alex: 我明白了，所以现在它包含的内容更多了。在过去一年里，它以相当显著的方式发展了。

Brad: Yeah, yeah.

Brad: 是的，是的。

Katelyn: Better, I think so.

Katelyn: 更好了，我想是的。

Brad: And I think that's what developers were sort of calling it anyway. You know, so it's always natural to just sort of go with what developers were saying.

Brad: 而且我认为开发者们本来就是这么称呼它的。所以顺应开发者们的说法总是很自然的。

Katelyn: We were a little late to the game there. It's always had it, right?

Katelyn: 我们在这方面有点迟钝。它一直都有这个功能，对吧？

Brad: It's okay. We've made our amends.

Brad: 没关系。我们已经弥补了。

### 什么是智能代理？

Alex: One of the cool things you can do now as we're moving from the chat model to maybe this more agentic future is building agents as part of this developer platform.

Alex: 随着我们从聊天模型转向更具**代理性** (Agentic: 指AI系统具备自主决策和行动能力)的未来，现在你可以做的一件很酷的事情是，将构建代理作为这个开发者平台的一部分。

Alex: Before we get into how we're actually doing that on the platform, can we talk about what even is an **agent** (Agent: 智能代理，指能够自主感知环境、进行决策并采取行动以实现特定目标的AI系统) to begin with?

Alex: 在我们深入探讨如何在平台上实现这一点之前，我们能先谈谈**代理**到底是什么吗？

Brad: Yeah, I mean, agents is, it's almost sort of a buzzword, right? Like everybody you talk to now is building agents and whenever an industry tech term gets to that level, you know, the definition gets very gray.

Brad: 是的，我的意思是，代理几乎是一个流行词，对吧？现在你和每个人谈论的都是在构建代理，每当一个行业技术术语达到这种程度时，它的定义就会变得非常模糊。

Brad: Everything everybody builds is an agent, but Anthropic, what we really think about agent is where the model is taking some autonomy to be able to choose what tools to call, to call those tools, to handle the results, and kind of choose the next step.

Brad: 每个人构建的任何东西都是一个代理，但Anthropic对代理的真正看法是，模型能够自主选择要调用的工具、调用这些工具、处理结果，并选择下一步行动。

Brad: So as a foundational research lab, leaning into the model and what its reasoning, how it decides what to do, we think that's a really important element of what an agent is.

Brad: 所以作为一个基础研究实验室，深入研究模型及其推理、它如何决定做什么，我们认为这是代理的一个非常重要的元素。

Alex: Mm, so it's kind of like the aspect of it being autonomous in some sense.

Alex: 嗯，所以它在某种意义上是自主的。

Brad: Yeah.

Brad: 是的。

Alex: Charting towards-

Alex: 迈向——

Brad: I mean, I think there's also, I mean, we have customers doing really useful workflows where they're sort of predefining the path that Claude should walk and that is a super-useful thing to do.

Brad: 我的意思是，我想还有一点，我们有一些客户正在进行非常有用的工作流程，他们预定义了Claude应该遵循的路径，这是一件非常有用的事情。

Brad: But what's nice about the agentic thing is as the model gets better every couple of months, you know, we release a new model and with a true agentic pattern, you know, those services are just gonna get better.

Brad: 但代理的好处在于，随着模型每隔几个月变得更好，你知道，我们发布一个新模型，通过真正的代理模式，这些服务只会变得更好。

Brad: Where if you build a workflow with a lot of **scaffolding** (Scaffolding: 脚手架，在AI模型开发中，指为指导模型行为或限制其自主性而预设的结构、规则或辅助工具) in it, you kind of put bounds on the model, which is maybe okay in some use cases, but that means that you may not take advantage of the next level of intelligence that a next model release gets.

Brad: 如果你构建一个包含大量**脚手架**的工作流程，你就会对模型施加限制，这在某些用例中可能没问题，但这可能意味着你无法利用下一个模型版本所带来的更高水平的智能。

Alex: Yeah, so it seems like there's this interesting trend with agents, at least over the past 6-12 months, where like you've said, the scaffolding has been a bit of a hindrance, and maybe we're dropping some of that.

Alex: 是的，看来在过去6-12个月里，代理领域出现了一个有趣的趋势，就像你说的，脚手架有点阻碍，也许我们正在放弃一些。

Alex: Can you explain the intuitions behind that around is this actually the future is we give less and less things to the model?

Alex: 你能解释一下这背后的直觉吗？这真的是未来吗，我们给模型的指令会越来越少？

Katelyn: Yeah, I mean, I think over time what we're seeing is the scaffolding the model needs to be able to accomplish tasks is it's needing less as the level of intelligence of the model goes up.

Katelyn: 是的，我的意思是，我认为随着时间的推移，我们看到的是，随着模型智能水平的提高，模型完成任务所需的脚手架越来越少。

Katelyn: And we believe is gonna keep going up, that basically the model has more contextual understanding of the high level task that it's trying to accomplish.

Katelyn: 我们相信这种趋势会持续下去，即模型对它试图完成的高级任务有更深入的上下文理解。

Katelyn: So therefore it doesn't need as many sort of guardrails, and in fact, those guardrails in some cases become some like a liability to have.

Katelyn: 因此，它不需要那么多的防护措施，事实上，这些防护措施在某些情况下反而会成为一种负担。

Katelyn: We've had customers try out new models and say, "Oh, well, it's actually only just a little bit better."

Katelyn: 我们有客户尝试了新模型，然后说：“哦，它实际上只比以前好一点点。”

Katelyn: And then we kinda look into it with them about what's going on, and it turns out well, yeah, they were constraining it in ways that makes it harder for them to see the intelligence of the model.

Katelyn: 然后我们和他们一起调查发生了什么，结果发现，是的，他们以某种方式限制了模型，使得他们更难看到模型的智能。

Alex: Ah, does this match what we see in the field with our customers where they're also following these same trends? I know at the limit we have customers exploring all sorts of innovative techniques for managing Claude.

Alex: 啊，这和我们在客户那里看到的情况一致吗？他们也遵循着同样的趋势？我知道，在极限情况下，我们有客户正在探索各种创新的技术来管理Claude。

Katelyn: Yeah, totally. And there's actually a lot of discourse about this right now, right? Like, what is an agent and what does it need? What do you need to build?

Katelyn: 是的，完全正确。现在确实有很多关于这个的讨论，对吧？比如，什么是代理？它需要什么？你需要构建什么？

Katelyn: And there are people saying, you know, "It's just a wild loop." Like, "You don't have to try that hard."

Katelyn: 有人会说，“它只是一个无限循环。”比如，“你不需要那么努力。”

Katelyn: And I think ultimately there's been a lot of evolution of frameworks that people are putting around the model that are helping them orchestrate their agents, try to get the most outta the model.

Katelyn: 我认为最终，人们围绕模型构建了许多框架，这些框架帮助他们协调代理，试图最大限度地发挥模型的作用。

Katelyn: And I think what the industry is maybe kind of circling around is a lot of that has become maybe too heavy and maybe too opinionated and which is why you kind of get the people coming back to like, "It's just a wild loop and that is all you need."

Katelyn: 我认为行业可能正在围绕的是，很多框架可能变得过于沉重和过于主观，这就是为什么人们会回到“它只是一个无限循环，你只需要它”这种说法。

Katelyn: And I think what we're trying to do there is to say maybe in a lot of ways it is a wild loop, but the things we can more uniquely do to help people get the most out of the model is a lot of those tools, those features and otherwise.

Katelyn: 我认为我们正在尝试做的是，在很多方面它可能确实是一个无限循环，但我们能更独特地帮助人们最大限度利用模型的方法，就是提供许多工具、功能等等。

Katelyn: And so what we wanna do is put, you know, frameworks and tools and platform out there that is opinionated to some extent on how people should use those tools.

Katelyn: 所以我们想做的就是推出一些框架、工具和平台，这些平台在某种程度上对人们如何使用这些工具持有一些明确的观点。

Katelyn: But it's not this super-heavy framework that really to Brad's point gets in the way of what the model's ultimately trying to do.

Katelyn: 但它不是那种过于沉重的框架，那种框架真的像Brad所说，会阻碍模型最终想要做的事情。

Katelyn: So it's strike the right balance. It's like, you know, we've seen what a lot of people have tried to do, so we know we can be opinionated there, but we wanna be lightweight in the way that we're doing that and make sure that the real thing we're doing is helping you get the most out of the model without, you know, bogging you down in some super-heavy framework.

Katelyn: 所以这需要找到正确的平衡点。就像，我们看到了很多人尝试做的事情，所以我们知道我们可以在这方面有自己的主张，但我们希望以轻量级的方式来做，并确保我们真正做的，是帮助你最大限度地利用模型，而不会让你陷入某个过于沉重的框架中。

Alex: Right, so would you describe part of the strategy here then as providing these auxiliary tools and things that we can give to the model, but we're not necessarily placing the bumper spawn the model itself?

Alex: 对，那么你会将这里的部分策略描述为提供这些辅助工具和我们可以提供给模型的东西，但我们不一定直接在模型本身上设置限制吗？

Brad: Yeah, we think about it as like, how do you unhobble the model? The model already has a lot of capabilities.

Brad: 是的，我们认为这就像，你如何解除模型的束缚？模型已经拥有很多能力。

Brad: In fact, I'm convinced that even if you take your current generation of models, there's way more intelligence in there than we've been able to unlock.

Brad: 事实上，我坚信，即使是你当前这一代的模型，其中蕴含的智能也远超我们目前所能解锁的。

Brad: But anyway, that intuition is if you just give the model tools it needs and set it free, let it be able to use those in the right way, you'll get great results.

Brad: 但无论如何，这种直觉是，如果你只是给模型它需要的工具并让它自由发挥，让它能够以正确的方式使用这些工具，你就会得到很好的结果。

Brad: And I think a good example of that is we launched this server-side web search tool and web fetch tools. And it's been interesting to watch customers use those.

Brad: 我认为一个很好的例子是，我们推出了服务器端的网络搜索工具和网页抓取工具。观察客户如何使用这些工具一直很有趣。

Brad: And you know, all we did really, I mean it's a very minimal prompt that we have. We just give it the web search tool and all of a sudden deep research tasks are almost completely done with just turning on that switch on the API, because the model will call that tool, it'll look at its results, it'll say, consider it and say, okay, maybe I need to call, you know, do these other searches and then, oh, that fourth link you return, that's the great one.

Brad: 你知道，我们真正做的，我的意思是，我们有一个非常简单的提示。我们只是给它网络搜索工具，突然之间，深度研究任务几乎完全可以通过打开API上的那个开关来完成，因为模型会调用那个工具，它会查看结果，它会考虑并说，好的，也许我需要进行这些其他的搜索，然后，哦，你返回的第四个链接，那个是最好的。

Brad: It'll do a web fetch on that link and bring that data back. And really all that very autonomously on its own kind of deciding.

Brad: 它会抓取那个链接并把数据带回来。所有这些都是它自己非常自主地决定的。

Alex: Right, I think it's almost kind of like an interesting shift in where the intelligence of a system is being applied.

Alex: 是的，我认为这几乎是系统智能应用方式的一个有趣转变。

Brad: Exactly, yeah.

Brad: 没错，是的。

Alex: From the developer having to apply their intelligence to guiding towards the model now, figuring it out.

Alex: 从开发者必须运用他们的智能来引导模型，到现在模型自己去理解。

Brad: Right, and it's so exciting what the model does it, because as a developer, my creativity ends at some point.

Brad: 是的，模型所做的一切太令人兴奋了，因为作为一名开发者，我的创造力总有穷尽的时候。

Brad: I can only think of so many use cases, but the model, like anything, anything somebody comes with, the model will figure out a way to go do that thing. So it's great, great to unhobble the model.

Brad: 我只能想到这么多的用例，但模型，就像任何东西一样，只要有人提出任何东西，模型都能想办法去实现。所以，解除模型的束缚真是太棒了。

### Claude Code SDK：通用的代理框架

Alex: Yeah, so if I'm a developer today and I'm getting started building with the developer platform, what do you recommend? What are some best practices or ways for me to get started?

Alex: 是的，那么如果我今天是一名开发者，刚开始使用开发者平台进行构建，你有什么建议？有哪些最佳实践或入门方法？

Katelyn: Yeah, so super-tactically, actually the number one thing that we recommend right now is the **Claude Code SDK** (Claude Code SDK: Anthropic推出的一个软件开发工具包，最初用于代码开发，但后来发现其代理框架可用于通用代理构建).

Katelyn: 是的，从战术层面来说，我们目前最推荐的是**Claude Code SDK**。

Katelyn: And what's really, really interesting about the Claude Code SDK is we essentially built an agent harness, an agentic harness around the model to run that loop, right?

Katelyn: Claude Code SDK真正有趣的地方在于，我们实际上围绕模型构建了一个代理线束，一个代理框架来运行那个循环，对吧？

Katelyn: And automate a lot of that tool calling and otherwise feature use. And obviously originally was built for coding purposes.

Katelyn: 并自动化了许多工具调用和其他功能的使用。显然，它最初是为编码目的而构建的。

Katelyn: And what the team really quickly figured out was like, actually this is an excellent general purpose agentic harness.

Katelyn: 团队很快就发现，实际上这是一个出色的通用代理框架。

Katelyn: And so what the SDK does is it gives people a perfect out-of-the-box solution to actually just start prototyping agents without having to go and build, you know, the loop with all the tool calling and otherwise.

Katelyn: 因此，SDK所做的就是为人们提供一个完美的开箱即用解决方案，让他们能够直接开始原型化代理，而无需去构建包含所有工具调用等的循环。

Katelyn: It's built on top of the **messages API** (Messages API: 一种应用程序接口，用于与Claude模型进行对话交互，发送和接收消息) and all those same tools that we're mentioning. But it kind of gives you that really great starting place right out-of-the-box.

Katelyn: 它建立在**消息API**和我们提到的所有相同工具之上。但它为你提供了一个非常好的开箱即用起始点。

Alex: Right, I feel like this is a pretty common misconception, at least when I talk to developers about the Claude Code SDK.

Alex: 是的，我觉得这是一个相当普遍的误解，至少在我与开发者谈论Claude Code SDK时是这样。

Alex: So I'm not building a coding application. Why would I wanna use this? But you can kind of remove the coding-specific parts.

Alex: 所以我没有在构建一个编码应用程序。我为什么要使用这个呢？但你可以移除那些编码特定的部分。

Brad: Yeah, I mean I think that's a great example of what we were talking about removing scaffolding on the model.

Brad: 是的，我的意思是，我认为这是一个很好的例子，说明我们之前讨论的移除模型上的脚手架。

Brad: It's like once we got done removing things from Claude Code to really unhobble the model, it turns out there was nothing coding left.

Brad: 就像我们完成从Claude Code中移除东西，真正解除模型束缚后，结果发现什么编码的东西都没剩下。

Brad: When you remove everything else, then it's just agentic loop and you're really a minimalistic thing to give Claude access to a file system, to a set of Linux command line tools to the ability to, you know, write code and execute that code.

Brad: 当你移除所有其他东西时，就只剩下代理循环了，你实际上只是提供了一个极简的方式，让Claude能够访问文件系统、一套Linux命令行工具，以及编写和执行代码的能力。

Brad: So those are all very generic kind of capabilities it turns out could solve a wide variety of problems.

Brad: 所以，这些都是非常通用的能力，结果证明它们可以解决各种各样的问题。

Alex: Right, yeah. I feel like something I've been running up to in my own side projects and also seeing with projects within Anthropic is before the Claude Code SDK, everybody's implementing some form of managing prompt caching or some form of managing their tool calls and that loop.

Alex: 是的，我感觉在我自己的业余项目中，以及在Anthropic内部的项目中，我都遇到了一个问题，那就是在Claude Code SDK出现之前，每个人都在以某种形式实现提示缓存管理，或者某种形式的工具调用和循环管理。

Alex: And now it's like, oh, just start at this base point, and then build from there.

Alex: 而现在，就像，哦，直接从这个基础点开始，然后在此基础上构建。

Katelyn: You start a little bit higher up.

Katelyn: 你从一个更高的起点开始。

Alex: Yeah.

Alex: 是的。

Brad: Yeah, yeah, yeah.

Brad: 是的，是的，是的。

Alex: So it's like a further level abstraction. I think that's super-interesting.

Alex: 所以这就像一个更深层次的抽象。我觉得这非常有趣。

### 代理的业务价值与未来方向

Brad: I mean, I think the other really interesting thing to think about, especially for businesses looking at agents is what use case to go target.

Brad: 我的意思是，我认为另一个非常有趣且值得思考的问题，尤其是对于考虑代理业务的公司来说，是应该瞄准哪个用例。

Brad: So thinking beyond the technology, what is the actual problem to go solve? And I think, you know, we see a lot of customers and doing a lot of things we love all of it, but where, you know, the biggest impacts are is where a customer has thought hard about what's the business value of this?

Brad: 所以，超越技术本身，实际要解决的问题是什么？我认为，我们看到很多客户做了很多我们都喜欢的事情，但是影响最大的地方在于客户认真思考过这有什么业务价值？

Brad: Will it actually save this many engineering hours or will it help us remove this much manual work or whatnot?

Brad: 它真的能节省这么多工程时间吗？或者它能帮助我们减少这么多手工工作吗？

Brad: And being able to articulate what you expect the outcome of the agent project to be, I think is really helpful in defining the scope of the agent.

Brad: 我认为能够清楚地阐明你期望代理项目达到的结果，对于定义代理的范围非常有帮助。

Alex: Right, and tying back one more time to the SDK. So it seems like it's been really, really useful for individual developers like myself, you know, starting out and just wanting to get hacking on something really fast for these customers, for enterprises that are actually trying to get real business value on these things.

Alex: 是的，再回到SDK上。所以看起来它对像我这样的个人开发者真的非常有用，你知道，刚开始就想快速地做些什么。对于那些真正试图从这些事情中获得实际商业价值的客户和企业来说呢？

Alex: Should they be using the SDK? Is it ready for them? Is it ready for scaled use like that?

Alex: 他们应该使用SDK吗？它对他们来说准备好了吗？它准备好用于那种规模化使用了吗？

Katelyn: Yeah, so I think in a lot of ways it is, in a lot of ways if you are in a spot where you can, like, you can deploy that runtime, essentially, that's what you get outta the SDK is an agentic loop runtime.

Katelyn: 是的，我认为在很多方面它都准备好了，如果你处于一个可以部署那个运行时的位置，本质上，你从SDK中得到的就是一个代理循环运行时。

Katelyn: You can go and deploy that runtime wherever you want, whenever you're ready to do so.

Katelyn: 你可以在任何你准备好的时候，将那个运行时部署到任何地方。

Katelyn: But I think what we're really trying to do is take the spirit of what the SDK unlocks for people, go kind of up to that higher order abstraction where we give you the loop, we give you a lot of the tool calling in an automated way and say, how can we learn from that and give people out-of-the-box solutions that at scale will really be able to solve for their use cases.

Katelyn: 但我认为我们真正想做的是汲取SDK为人们解锁的精神，将其提升到更高层次的抽象，在那里我们为你提供循环，我们以自动化方式提供大量的工具调用，并说，我们如何从中学习，并为人们提供开箱即用的解决方案，这些解决方案在规模上能够真正解决他们的用例。

Katelyn: And I think that's a lot of where we're kind of trying to go with our roadmap throughout the rest of the year.

Katelyn: 我认为这很大程度上是我们今年剩余时间路线图的发展方向。

Katelyn: And one really important bit when we think about that is if the entire goal here is to help our users really raise that ceiling of intelligence, get the absolute best outcome outta the models, then higher order abstractions are not just make it easier, because you don't have to write all that code yourself.

Katelyn: 当我们思考这一点时，一个非常重要的部分是，如果这里的整个目标是真正帮助我们的用户提高智能上限，从模型中获得最佳结果，那么更高层次的抽象不仅仅是让事情变得更容易，因为你不需要自己编写所有代码。

Katelyn: It's actually like, how can we really, truly help you get the best outcome?

Katelyn: 实际上是，我们如何才能真正地帮助你获得最佳结果？

Katelyn: Because we're in the room with research, we're in the room with inference, we know how to make sure that our abstractions, our agentic loop is going to be extremely powerful and extremely good at working with Claude.

Katelyn: 因为我们与研究团队和推理团队紧密合作，我们知道如何确保我们的抽象层和代理循环能够与Claude高效协同，发挥出极其强大的作用。

Katelyn: And the last thing that I would add in there is, especially as these things get longer running and as we provide more and more tooling to help people get at those longer running tasks, another big problem that our users we know are gonna keep trying to solve is **observability** (Observability: 可观测性，指通过系统外部输出推断其内部状态的能力，在AI代理中，意味着能够跟踪和理解代理的决策过程和行为) within those longer running tasks.

Katelyn: 我想补充的最后一点是，特别是随着这些任务运行时间变长，以及我们提供越来越多的工具来帮助人们处理那些长时间运行的任务时，我们知道用户将继续尝试解决的另一个大问题是那些长时间运行任务中的**可观测性**。

Katelyn: And so that's one of the most common things that comes up for folks is, you know, I have these long running tasks, I'm trying to get these really great outcomes, but you know, I might need to do some steering or I might need to tune my prompt, or I might need to think about tool calling a little differently.

Katelyn: 因此，人们最常遇到的问题之一就是，我的这些长时间运行的任务，我正在努力获得这些非常好的结果，但是，你知道，我可能需要进行一些引导，或者我可能需要调整我的提示词，或者我可能需要以稍微不同的方式考虑工具调用。

Katelyn: And that's something that we know we can give people that observability through the platform over time. And that's another big area of focus for us.

Katelyn: 我们知道，随着时间的推移，我们可以通过平台为人们提供这种可观测性。这也是我们关注的另一个重要领域。

Alex: Mm, okay, that's really interesting. I mean, this has been a huge issue that's starting to come to a head with agents.

Alex: 嗯，好的，这真的很有趣。我的意思是，这已经是一个巨大的问题，并且随着代理的出现，它正变得越来越突出。

Katelyn: I think so.

Katelyn: 我也这么认为。

Alex: Especially as you trust them to go work in some, you know, other application in the background, how do you make sure they're actually doing the right thing and then if you're deploying them?

Alex: 尤其是当你信任它们在后台运行其他应用程序时，你如何确保它们确实在做正确的事情，以及如果你部署它们的话？

Brad: Yeah, how do you audit it? Like if we're gonna give some level of autonomy to the system, there needs to be a way to audit it and make sure the right things are happening, so that you can tune things and whatnot.

Brad: 是的，你如何审计它？如果我们赋予系统一定程度的自主权，就需要有一种方法来审计它，确保正确的事情正在发生，以便你可以调整参数等等。

Brad: So I think observability is really a key piece of this.

Brad: 所以我认为可观测性确实是其中的关键部分。

### 上下文管理与代理记忆

Alex: And putting a pin there that I wanna ask a question on, just the future of how we're gonna address that. Before I do, is there other tools that exist right now that folks should be aware of when they're getting started with the developer platform, things that you've found helpful or useful?

Alex: 暂停一下，我想问一个问题，关于我们未来将如何解决这个问题。在我问之前，目前还有哪些工具是人们在开始使用开发者平台时应该了解的，你觉得哪些是有帮助或有用的？

Brad: Yeah, I mean, I think there's a, so we mentioned web search and web fetch. I think another big thing that we're seeing is customers right now have to do a lot of work to manage the **context window** (Context Window: 上下文窗口，指AI模型在一次交互中可以处理的输入信息量限制，通常以Token数量衡量).

Brad: 是的，我的意思是，我认为有一个，我们提到了网络搜索和网页抓取。我认为我们看到的另一个重要问题是，客户目前需要做大量工作来管理**上下文窗口**。

Brad: So by default, Claude has 200 K **tokens** (Tokens: 标记，指AI模型处理文本的最小单位，可以是单词、子词或字符) of context. We have a million token available now in beta on Sonnet, which is great, but even a million, there's a limit there.

Brad: 所以默认情况下，Claude有20万个**标记**的上下文。我们现在在Sonnet上提供了100万个标记的测试版，这很棒，但即使是100万个，也有一个限制。

Brad: And what many customers have told us is that they get better outputs, higher intelligence if they even use a smaller part of the context.

Brad: 许多客户告诉我们，即使他们使用更小部分的上下文，也能获得更好的输出和更高的智能。

Brad: And so we've done, we have a couple of cool features that are just coming out to help developers manage that context.

Brad: 因此，我们已经做了一些事情，我们有一些很酷的功能即将推出，以帮助开发者管理上下文。

Brad: So in these agentic loops, a lot of times you're doing 10, 15, 100 tool calls and you edit this file or look up data in this database or you know, send this email and each of those tool calls takes up 100, 200, 1,000 tokens.

Brad: 所以在这些代理循环中，很多时候你会进行10、15、100次工具调用，你编辑这个文件，或者在这个数据库中查找数据，或者发送这封邮件，而每一次工具调用都会占用100、200、1000个标记。

Brad: And so we have this cool feature that lets the model actually remove some of the older tool calls that are not needed anymore.

Brad: 所以我们有一个很酷的功能，可以让模型实际移除一些不再需要的旧的工具调用。

Alex: Interesting.

Alex: 有趣。

Brad: And that gives, just like you, if you declutter your desk and declutter your notebook, you can focus a little bit better.

Brad: 这就像你，如果你整理了你的书桌和笔记本，你就能更好地集中注意力。

Brad: So if you declutter the prompt actually, the model can actually focus a little bit better.

Brad: 所以，如果你实际上清理了提示，模型就能更好地集中注意力。

Alex: Ah, interesting. So okay, we're moving unnecessary context. Is there a risk that we remove necessary context?

Alex: 啊，有趣。那么，我们正在移除不必要的上下文。我们有移除必要上下文的风险吗？

Brad: Yeah.

Brad: 是的。

Alex: How does that work?

Alex: 那是怎么回事？

Brad: Yeah, yeah, yeah. So we have some guardrails and some bounds around it, but the general rule is we try to remove the tools that are several turns back, that the model's already made decisions based on those tools.

Brad: 是的，是的，是的。所以我们有一些防护措施和限制，但一般规则是，我们尝试移除那些在几个回合之前，模型已经基于这些工具做出决策的工具。

Brad: Yeah, I was playing with it recently and I removed the tools that it was just called and it's, oh, my tool results are gone, I don't know what to do.

Brad: 是的，我最近在玩它，我移除了刚刚被调用的工具，然后它就说，哦，我的工具结果不见了，我不知道该怎么办。

Brad: And then, but the model, the Sonnet doesn't give up. It's like, I'm just gonna call this tool again, you know?

Brad: 但是，模型，Sonnet没有放弃。它会说，我再调用一次这个工具，你知道吗？

Alex: Yeah, yeah, yeah, yeah.

Alex: 是的，是的，是的，是的。

Brad: But yeah, so generally we have put some bounds on that, because of that experience. So we do preserve the most recent set of tools.

Brad: 但是的，所以通常我们对此设置了一些限制，因为有那样的经验。所以我们确实保留了最近的一组工具。

Alex: I see, okay.

Alex: 我明白了，好的。

Brad: And then the other cool thing we do is **tombstone** (Tombstone: 墓碑标记，此处指在AI模型上下文管理中，当移除旧的工具调用结果时，留下一个简短的标记，告知模型该结果曾存在，从而保留部分记忆) it. So by that we mean when we remove the tool calls, we put a note in there to the model that say, oh, the tool results for the search call were here.

Brad: 然后我们做的另一件很酷的事情是**墓碑标记**。我们的意思是，当我们移除工具调用时，我们会给模型留下一个注释，说，哦，搜索调用的工具结果曾在这里。

Alex: Oh, okay.

Alex: 哦，好的。

Brad: And they've been removed.

Brad: 它们已经被移除了。

Alex: So the model's not completely memory wiped.

Alex: 所以模型并非完全清除了记忆。

Brad: Exactly. I think we found the model does better if we just give it a little more context about what is happening.

Brad: 没错。我想我们发现，如果我们给模型更多关于正在发生的事情的上下文，它的表现会更好。

Brad: And so that's a key feature. And the other one is this kind of **agentic memory** (Agentic Memory: 代理记忆，指AI代理在执行任务过程中积累和利用经验教训的能力，以便随着时间推移提高性能) feature that we've added.

Brad: 所以这是一个关键功能。另一个是我们添加的这种**代理记忆**功能。

Brad: And there we have seen that the model does, right now, if you give a task to the model, say a deep research task or play Pokemon or whatnot, the model does about the same every time it runs.

Brad: 我们看到，目前，如果你给模型一个任务，比如说一个深度研究任务，或者玩宝可梦之类的，模型每次运行的表现都差不多。

Brad: But if you give a human a task, the fifth time the human does a task, they do it way better, because they've learned, okay, if I'm gonna do this search, okay, probably the Wikipedia site is better than this other site or whatever.

Brad: 但如果你给一个人一个任务，这个人第五次做这个任务时，他们会做得更好，因为他们已经学会了，好吧，如果我要进行这个搜索，维基百科的网站可能比其他网站更好，或者其他什么。

Brad: They learn which thing, so they get better over time. So we've given this memory tool to the model now, so that the model can actually take some notes while it's going and say, oh, I realize that this website maybe isn't the right one, or if I'm doing a search, it should be like this, or if I'm looking up, I should use this database, not that database or whatnot.

Brad: 他们学会了哪些东西，所以他们会随着时间的推移变得更好。所以我们现在给了模型这个记忆工具，这样模型在运行时可以做一些笔记，然后说，哦，我意识到这个网站可能不是正确的，或者如果我在搜索，它应该像这样，或者如果我在查找，我应该使用这个数据库，而不是那个数据库之类的。

Brad: And it makes those notes. And then when it's stumped, it can actually go back and review its notes and say, okay, oh, I'm starting this task, let me go read the notes, so I can figure it out.

Brad: 它会做这些笔记。然后当它卡住时，它实际上可以回去查阅它的笔记，然后说，好的，哦，我正在开始这个任务，让我去读一下笔记，这样我就可以搞清楚。

Alex: Ah, cool. So we're handling all of that for the developer to say.

Alex: 啊，太酷了。所以我们正在为开发者处理所有这些事情。

Brad: Yeah, yeah, well, we're giving the model this core capability to do memory, and right now we're letting the developer manage the memory.

Brad: 是的，是的，我们正在赋予模型这种核心的记忆能力，目前我们让开发者管理记忆。

Brad: So, because, you know, different developers, they might wanna store it in some cloud storage or they might wanna store it somewhere else.

Brad: 所以，因为，你知道，不同的开发者，他们可能想把它存储在一些云存储中，或者他们可能想把它存储在其他地方。

Brad: So we're letting developers figure out exactly where to store the memory. That way they have more control over that.

Brad: 所以我们让开发者自己决定将记忆存储在哪里。这样他们可以对此有更多的控制权。

Alex: But exposing the tool.

Alex: 但会暴露工具。

Brad: But expose the tool. Yeah, we expose the tool.

Brad: 但会暴露工具。是的，我们暴露了工具。

### 未来展望：自学习代理与“赋予Claude计算机”

Alex: So going back again to a roadmap question here. So it sounds like there's a ton of new features that we've recently launched. There's a lot of momentum, and now there's other offerings as well, like the Claude Code SDK and things coming out soon.

Alex: 那么我们回到路线图的问题。听起来我们最近推出了大量新功能。现在有很多势头，而且还有其他产品，比如Claude Code SDK以及即将推出的东西。

Alex: What are you most excited about, Katelyn? What's the future looking like here in the next 6-12 months?

Alex: Katelyn，你最期待什么？未来6-12个月会是怎样？

Katelyn: Yeah, so we talked a little bit about these higher orders of abstraction where we can really just make it as simple as possible for you to get the absolute best outcomes out of Claude.

Katelyn: 是的，我们谈到了一些更高层次的抽象，我们可以让您尽可能简单地从Claude获得最佳结果。

Katelyn: And we wanna pair that with the observability that we talked about, so that you can really, you know, see the data and take those insights from those longer running tasks.

Katelyn: 我们希望将其与我们讨论过的可观测性结合起来，这样你就能真正地看到数据，并从那些长时间运行的任务中获取洞察。

Katelyn: And if you can combine these things together and start to think about some of the capabilities like memory that Brad just talked about, you can really start to see this flywheel where over time we're not just able to help you get the best outcomes out of Claude, but we can help you get self-improving and continuously improving outcomes out of Claude.

Katelyn: 如果你能将这些东西结合起来，并开始思考Brad刚才谈到的记忆等一些能力，你就能真正看到这种飞轮效应，随着时间的推移，我们不仅能帮助你从Claude获得最佳结果，还能帮助你从Claude获得自我改进和持续改进的结果。

Katelyn: And that to me is kind of the galaxy brain magic of the roadmap is get to a point where, you know, we have people coming to us, they're building on Claude, they have their tasks, they know what they're trying to do, and they get these really like aha moments where over time it's getting better and better and better.

Katelyn: 对我来说，这就像路线图中“星系大脑”般的魔力，就是达到一个点，人们来找我们，他们在Claude上构建，他们有自己的任务，他们知道自己在做什么，然后他们会经历这些“啊哈”时刻，随着时间的推移，一切都变得越来越好。

Katelyn: And you know, that's kind of the biggest thing that in everything that we're doing, we're trying to make sure we're going after.

Katelyn: 你知道，这就是我们所做的一切中，我们努力追求的最大目标。

Alex: That's awesome.

Alex: 太棒了。

Brad: Yeah, I mean, I guess I'd have to say I'm always excited about model launches. It's like Christmas, wow, what will be possible now?

Brad: 是的，我的意思是，我想我必须说我总是对模型发布感到兴奋。这就像圣诞节一样，哇，现在又可能实现什么了？

Brad: So I love playing with the model launches they come out, just unlocks more use cases, some use cases that, you know, we've been working hard on and trying to improve, which is satisfying to see, but also some things I had no idea the model would be able to do this thing.

Brad: 所以我喜欢玩他们发布的模型，它解锁了更多的用例，有些用例是我们一直努力改进的，看到这些很令人满意，但也有一些事情我完全不知道模型会能够做到。

Brad: You know, now it draws ASCII pictures so much better or what, you know, whatever.

Brad: 你知道，现在它能更好地绘制ASCII图画，或者别的什么。

Alex: The important things.

Alex: 那些重要的事情。

Brad: Very important things. But beyond that, the other thing I'm really excited about is we're in the early stages of giving Claude a computer.

Brad: 非常重要的事情。但除此之外，我真正兴奋的另一件事是，我们正处于为Claude配备电脑的早期阶段。

Brad: You know, I think about if we hire an employee here at Anthropic and we welcome 'em, "Here's your first day." But we don't give them a computer. They would not be very successful at Anthropic.

Brad: 你知道，我想象一下，如果我们Anthropic聘用一名员工，我们欢迎他们，“这是你的第一天。”但我们不给他们一台电脑。他们在Anthropic就不会很成功。

Brad: So right now, essentially everybody is using Claude and it doesn't have a computer.

Brad: 所以现在，基本上每个人都在使用Claude，但它没有电脑。

Brad: So I'm really excited about giving Claude a computer and you see the very baby steps of that with the code execution tool, where the model can write code executed on the **VM** (Virtual Machine: 虚拟机，一种模拟真实计算机硬件功能的软件实现，允许在其中运行操作系统和应用程序) and get the results back.

Brad: 所以我非常兴奋能给Claude一台电脑，你可以在代码执行工具中看到这方面的初步进展，模型可以在**虚拟机**上编写并执行代码，然后获取结果。

Brad: So it can zoom in on images or take an Excel spreadsheet and create amazing data analysis with charts and graphs.

Brad: 所以它可以放大图像，或者处理Excel电子表格，并用图表创建令人惊叹的数据分析。

Brad: And that's just the baby step. What if I had a persistent computer that was always there and it could organize the files in there the way it needed and get the tools set up the way it wanted.

Brad: 而这仅仅是第一步。如果我有一台始终存在的持久性电脑，它能按照需要组织其中的文件，并按照它想要的方式设置工具，那会怎样？

Brad: And I just think there's a lot of headroom to that scenario.

Brad: 我认为这种情况下还有很大的发展空间。

Alex: Yeah, and I guess that all ties back into this unhobbling into this too.

Alex: 是的，我想这都与解除束缚有关。

Brad: Exactly, exactly. It's all about unhobbling the model. That's exactly, just give Claude the tools.

Brad: 没错，没错。这完全是为了解除模型的束缚。就是这样，只要给Claude工具就行了。

Alex: Yeah.

Alex: 是的。

Katelyn: Yeah.

Katelyn: 是的。

Alex: Well, I'm excited for that future. Thanks so much for this conversation.

Alex: 嗯，我为那个未来感到兴奋。非常感谢这次对话。

Brad: All right, cool. Yeah, thank you.

Brad: 好的，太棒了。是的，谢谢。

Katelyn: Thanks.

Katelyn: 谢谢。