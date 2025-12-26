---
area: "tech-engineering"
category: technology
companies_orgs: []
date: '2025-10-09'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project: []
series: ''
source: https://www.youtube.com/watch?v=aZLr962R6Ag
speaker: Anthropic
status: evergreen
summary: 本文深入探讨Anthropic的**模型上下文协议** (**MCP**)，它如何作为连接大型语言模型与外部应用和数据的通用标准。文章讨论了MCP的起源、开源策略、发展现状及多个创新用例，展望了其在未来AI生态中的重要作用。
tags:
- ai-ecosystem
- code
- llm
- model
title: 使用MCP与Claude API进行构建：跨应用连接与通用标准的未来
---
### 介绍：MCP是什么？

Anthony: Am I reading your status updates in your Slack, and are those all Claude-generated?

Anthony: 我在Slack里读到的状态更新都是Claude生成的吗？

Michael: Yeah, I'm never actually writing anything anymore. It's just all Claude.

Michael: 是的，我再也不自己写东西了。全部都是Claude生成的。

Anthony: It was just you reading Claude the whole time. Okay, good to know.

Anthony: 原来你一直在阅读Claude生成的东西。好的，知道了。

Alex: Hey, I'm Alex. I lead Claude Relations here at Anthropic. Today we're talking about **MCP** (Model Context Protocol: 一种为模型提供外部上下文的方式) and the Claude API, and I'm joined by my colleagues.

Alex: 大家好，我是Alex。我在Anthropic负责Claude的对外关系。今天我们来聊聊**MCP**（模型上下文协议）和Claude API，还有我的同事们也加入了讨论。

Michael: Hey, I'm Michael. I'm an engineer on the API team here at Anthropic.

Michael: 大家好，我是Michael。我是Anthropic API团队的工程师。

John: I'm John and I work on the Model Context Protocol team here at Anthropic.

John: 我是John，在Anthropic的模型上下文协议团队工作。

Alex: To kick us off here today, I really want to give a high-level overview of what MCP is.

Alex: 今天，我们首先来对MCP做一个高层次的概述。

John: MCP is the Model Context Protocol, and it's a way of providing external context to models.

John: MCP是模型上下文协议，它是一种为模型提供外部上下文的方式。

John: And so if you have a chat bot and you're in a conversation, the history of your conversation is your context.

John: 因此，如果你有一个聊天机器人，并且正在进行对话，那么对话的历史就是你的上下文。

John: And the model only has the ability to see everything that you've typed in, which is really useful for some kinds of tasks, like, help me solve this problem or write this thing.

John: 模型只能看到你输入的所有内容，这对于某些任务非常有用，比如“帮我解决这个问题”或“写这个东西”。

John: But sometimes Claude needs access to things outside of its box, like it needs to be able to talk to the internet, or it needs to be able to reach out to a travel agency to book your flight.

John: 但有时Claude需要访问其“盒子”之外的东西，比如它需要能够与互联网对话，或者需要联系旅行社为你预订航班。

John: And so that's where MCP comes in. It provides these external context to Claude, so that it can take actions for you on your behalf in the outer world.

John: 这就是MCP的作用。它为Claude提供这些外部上下文，以便它能够代表你在外部世界采取行动。

Alex: Right, I've heard a good analogy in the past of MCP being like the universal connector between applications and the model.

Alex: 对，我以前听过一个很好的比喻，说MCP就像应用程序和模型之间的通用连接器。

Alex: So a way for us to tie Claude into everything else that it might need access to—all the other data sources, tools, everything.

Alex: 所以，这是一种将Claude与它可能需要访问的所有其他东西——所有其他数据源、工具、一切——连接起来的方式。

John: Yeah, definitely.

John: 是的，确实如此。

Alex: Out there on the internet, basically. Why did we build this? What was the intention?

Alex: 基本上就是互联网上的所有东西。我们为什么要构建它？最初的意图是什么？

Alex: I mean, it seems useful to have these connections, but why did we take that on specifically and why make it a universal standard protocol?

Alex: 我的意思是，拥有这些连接似乎很有用，但我们为什么要特别承担这项工作，并将其打造成一个通用的标准协议呢？

### 构建MCP的初衷：通用兼容性

John: I think as we were starting to get further and further along in tool use and Claude's capabilities, we were starting to notice that we were re-implementing a lot of the same capabilities in various different contexts.

John: 我认为，随着我们在工具使用和Claude能力方面不断深入，我们开始注意到在各种不同的上下文中重复实现了许多相同的功能。

John: So my assistant that I had in my coding editor had to get a web search tool associated with it, but so did claude.ai and so did all these other services where we want Claude to be able to interact with the outside world.

John: 例如，我在代码编辑器中的助手需要关联一个网页搜索工具，claude.ai也需要，所有其他我们希望Claude能够与外部世界交互的服务也都需要。

John: And we figured it would be good to have a single unified protocol that we can implement a set of functionalities once and take that everywhere.

John: 我们认为，最好能有一个统一的协议，这样我们就可以一次性实现一套功能，并将其应用到所有地方。

John: So build it once and configure everywhere. So the same web search functionality that I might get on Claude Code will be the same web search functionality that I would get on Claude.ai.

John: 也就是说，一次构建，处处配置。这样，我在Claude Code上获得的网页搜索功能，将与我在Claude.ai上获得的网页搜索功能相同。

Alex: Okay, that makes sense. Essentially, creating universal compatibility when we have tons of applications that might need these same connections.

Alex: 好的，这说得通。本质上，当有大量应用程序可能需要这些相同的连接时，它创造了通用兼容性。

Alex: Now, our approach to MCP specifically with open sourcing, was pretty different, I think, than a lot of other integration paths that other companies were going down at the time.

Alex: 另外，我们针对MCP采取的开源方式，我认为与当时许多其他公司选择的集成路径大相径庭。

Alex: Why did we think to open source it? What was the driving factor behind that?

Alex: 我们为什么要考虑开源它？这背后的主要驱动因素是什么？

### MCP的开源之路

John: I think there's a lot of value in open standards to allow a wide network of engineers, companies, individuals to go and build an ecosystem around something.

John: 我认为开放标准具有巨大的价值，它能让广泛的工程师、公司和个人围绕某项技术构建生态系统。

John: And we could have built the Claude app connector that allows you to tie things into Claude, but then you end up with a really bad user experience if you're using multiple models.

John: 我们本可以构建Claude应用程序连接器，让你将事物连接到Claude，但如果你使用多个模型，最终用户体验会非常糟糕。

John: If I'm a company like Asana and I want to connect, do I have to implement my Claude connector, my OpenAI connector, my Grok connector, and my Gemini connector? That ends up being a nightmare.

John: 如果我是一家像Asana这样的公司，想要进行连接，我是否必须实现Claude连接器、OpenAI连接器、Grok连接器和Gemini连接器？那最终会是一场噩梦。

John: And one of the things we had noticed is that models having access to external context is good for everyone.

John: 我们注意到的一件事是，模型能够访问外部上下文对每个人都有好处。

John: It's like a rising tide floats all boats.

John: 这就像“水涨船高”一样。

John: And we had this internal protocol that was really valuable for us standardizing our model interactions.

John: 我们内部有一个协议，它对于我们标准化模型交互非常有价值。

John: And so we open-sourced it, thinking, 'Hey, we found this useful; maybe the world would find this useful also.'

John: 所以我们开源了它，心想：“嘿，我们觉得这很有用；也许全世界也会觉得有用。”

John: And it got incredibly popular, incredibly fast. It turns out a lot of people had the same need and jumped on it, starting to hack together.

John: 结果它变得异常流行，速度惊人。事实证明，很多人都有同样的需求，纷纷投入其中，开始共同开发。

John: Even with the minimum support, people started hacking together really incredible dev environments.

John: 即使在最少的支持下，人们也开始共同构建出令人难以置信的开发环境。

John: And it boosted. I think it was the fastest-growing open-source protocol in history.

John: 它推动了发展。我认为它是历史上增长最快的开源协议。

Alex: Wow.

Alex: 哇。

John: It's been truly stratospheric growth, and there's a massive need for it.

John: 这确实是爆炸式增长，而且市场需求巨大。

John: Yeah, so we open-sourced that, and since this has taken off, it's truly succeeded our wildest dreams from when we released this little specification.

John: 是的，所以我们开源了它，自从它推出以来，它真的超出了我们发布这个小小的规范时最疯狂的梦想。

John: And so we've done a lot of work as this is starting to move from a neat way for Anthropic (a project for Anthropic to get context to its models) into an industry-defining, standard-like ecosystem.

John: 因此，我们做了大量工作，因为它正从Anthropic（一个Anthropic为其模型获取上下文的项目）的一种巧妙方式，转变为一个定义行业、类似标准的生态系统。

John: We've done a lot of work to move that into a proper open-source foundation and work with all the other providers, making MCP something that's durable and here for the long term.

John: 我们做了很多工作，将其转变为一个适当的开源基金会，并与其他所有供应商合作，使MCP成为一个持久且长期存在的事物。

### MCP的现状：远程支持与注册中心

Alex: What is the lay of the land for MCP right now, both in terms of the open-source community and the technical spec itself?

Alex: 目前MCP的现状如何？包括开源社区方面和技术规范本身？

Alex: It's been almost a year, a little under a year since we first announced it.

Alex: 自从我们首次宣布它以来，已经快一年了，不到一年。

Alex: And I feel like a lot of folks still have intuitions that were based on how it was earlier this year, or early 2025, or something around that.

Alex: 我觉得很多人对它的直觉仍然停留在今年早些时候，或者2025年初，或者类似的时间。

Alex: But the protocol is moving so fast and things are changing. What's the current state of MCP in your minds?

Alex: 但协议发展得太快了，情况正在变化。在你们看来，MCP目前的状况如何？

Michael: I feel like a big aha moment for me at least, was when we released remote MCP support.

Michael: 对我来说，一个重要的“顿悟时刻”是我们发布了远程MCP支持。

Michael: Some of the initial quirks of the protocol were that you had to run everything effectively by yourself, which prevented providers of MCP servers like Asana from being able to host their own servers that you could access very quickly.

Michael: 协议最初的一些怪癖是，你必须有效地自己运行所有东西，这阻止了像Asana这样的MCP服务器提供商托管自己的服务器，以便你可以非常快速地访问。

Michael: And it made the setup process very clunky.

Michael: 这使得设置过程非常笨拙。

Michael: And I think a very big step change, in my opinion, was when we provided first-class support for remote-hosted MCP servers. That drastically reduced the setup process, so that end users can get started fairly quickly.

Michael: 我认为一个非常大的进步，就是我们为远程托管的MCP服务器提供了第一类支持。这大大简化了设置过程，让最终用户可以相当快地开始使用。

John: And now we have a registry of these servers, so people can upload them to the registry, and then we authorize or approve them.

John: 现在我们有了这些服务器的注册中心，人们可以将它们上传到注册中心，然后我们进行授权或批准。

Michael: Yeah, totally.

Michael: 是的，完全正确。

John: So, the open-source project has – we've just released – a central registry of MCP servers.

John: 所以，这个开源项目——我们刚刚发布了一个MCP服务器的中央注册中心。

John: In keeping with the open-source ethos, we have both a registry hosted at the **Model Context Protocol** (MCP: 模型上下文协议) organization site, and a standard that allows other organizations to extend the registry and pull that information in.

John: 秉承开源精神，我们既有一个托管在**模型上下文协议**（MCP）组织网站上的注册中心，也提供了一个标准，允许其他组织扩展注册中心并获取信息。

John: And so we've seen massive growth of MCP, GitHub MCP, Asana MCP, a lot of companies are building and deploying these endpoints.

John: 我们看到了MCP、GitHub MCP、Asana MCP的巨大增长，许多公司正在构建和部署这些端点。

John: And so it's becoming easier to pull this in. In the past, if you wanted to interact with GitHub, you'd have to find some random developer who would hack together a GitHub connector and then trust their Node.js install on your computer.

John: 因此，现在引入这些变得更容易了。过去，如果你想与GitHub交互，你必须找到某个随机的开发者，他会拼凑一个GitHub连接器，然后你还得信任他电脑上的Node.js安装。

John: And now you can just hit the official GitHub site, like I think it's `mcp.github.com`. You can put that into your Claude Code or Claude.ai and then extend Claude with the ability to interact with GitHub.

John: 而现在，你只需访问官方的GitHub网站，比如我认为是`mcp.github.com`。你可以将其输入到你的Claude Code或Claude.ai中，然后扩展Claude与GitHub交互的能力。

John: So it's really maturing in a way that's really cool.

John: 所以它正在以一种非常酷的方式走向成熟。

Alex: That's pretty cool. I've been using the GitHub MCP for things in Claude Code as well, and it's nice to just have that one URL endpoint that you just plug in.

Alex: 这很酷。我也一直在Claude Code中使用GitHub MCP处理一些事情，很高兴能有一个可以直接插入的URL端点。

### 创新的MCP用例：Context 7与Playwright

Alex: Are there any fun, unique MCPs right now, either in the registry or outside of it, that you've seen?

Alex: 目前在注册中心内外，你们有没有见过一些有趣、独特的MCP？

Michael: I think one that has been really interesting to watch is called Context 7.

Michael: 我认为有一个非常值得关注的是Context 7。

Michael: One of the biggest limitations of **LLMs** (Large Language Models: 大型语言模型) is that they have a knowledge cutoff that's usually delayed by a couple of months. This means working with the latest and greatest packages as a software developer is sometimes difficult with LLMs, because they will give you outdated information.

Michael: **LLM**（大型语言模型）最大的限制之一是它们通常有几个月的知识截止期。这意味着作为软件开发者，使用最新最好的软件包时，LLM有时会带来困难，因为它们会提供过时信息。

Michael: And what Context 7 does is it takes care of pulling documentation from these websites like Next.js's website or even our own API's website and keeping those up-to-date.

Michael: Context 7的作用是负责从这些网站，比如Next.js的网站，甚至我们自己的API网站，拉取文档并保持其更新。

Michael: And all you have to do is configure your MCP connection once, and Claude will have the access to the latest information out there on whatever it is that you're developing against.

Michael: 你只需配置一次MCP连接，Claude就能访问到你正在开发的任何东西的最新信息。

Alex: Mm, okay.

Alex: 嗯，好的。

Alex: I think I had heard of that. So we're basically pulling in the latest docs, everything. And I know right now we're also in the mid-transition of a lot of folks making their docs completely raw text and accessible to LLMs.

Alex: 我想我听说过。所以我们基本上是在拉取最新的文档，所有的一切。我知道现在很多人也正在过渡期，他们将文档完全制作成纯文本并可供LLM访问。

Michael: So I'm assuming that's pulling from that same sort of information.

Michael: 所以我猜它是从那种相同的信息中提取的。

Michael: Yeah, so this is like the `llms.txt` format, which I've seen a lot of adoption of throughout the entire tech industry, and that's been very exciting to see.

Michael: 是的，这就像`llms.txt`格式，我看到它在整个科技行业得到了广泛采用，这非常令人兴奋。

Alex: That's cool. Any from you, John?

Alex: 真酷。你有什么吗，John？

John: From my end, as a software developer, I've found Playwright as an MCP server really useful. It allows Claude to interact with browsers as though it were a user clicking around.

John: 就我而言，作为一名软件开发者，我发现Playwright作为MCP服务器非常有用。它允许Claude像用户一样在浏览器中进行交互。

John: So if you're working on a website, Claude can read all your **CSS** (Cascading Style Sheets: 层叠样式表) and **HTML** (HyperText Markup Language: 超文本标记语言), but it can't actually look at your webpage.

John: 所以，如果你正在开发一个网站，Claude可以阅读你所有的**CSS**（层叠样式表）和**HTML**（超文本标记语言），但它实际上无法查看你的网页。

John: But if you install the Playwright MCP server, then you can have Claude look at your webpage and give you advice on how to make it more beautiful or fix alignment issues.

John: 但如果你安装了Playwright MCP服务器，那么你就可以让Claude查看你的网页，并就如何使其更美观或修复对齐问题提供建议。

Alex: So it's actually screenshots?

Alex: 所以它实际上是截图吗？

John: Yeah, it's actually loading it up in a browser, browsing around using Playwright. It's a Microsoft project that allows remote browser driving.

John: 是的，它实际上是在浏览器中加载页面，并使用Playwright进行浏览。Playwright是微软的一个项目，允许远程浏览器驱动。

Alex: What happens when you put that in a loop with something like Claude Code?

Alex: 如果你把它和Claude Code之类的东西放在一个循环中会发生什么？

John: Oh, you can get some self-improvement loops.

John: 哦，你可以得到一些自我改进的循环。

John: If I tell Claude Code to fix an alignment problem in a header, it can make some changes to my HTML, make some changes to my CSS, reload the page if necessary, then look at it again and say, 'Oh, everything looks better,' or 'That didn't fix it.' It has the context of seeing both its changes and then actually being able to take a screenshot of the website and say, 'Oh, this set of CSS changes actually led to this effect that I didn't intend. Let me roll that back and try a different way.'

John: 如果我告诉Claude Code修复头部的一个对齐问题，它可以对我的HTML和CSS进行一些更改，必要时重新加载页面，然后再次查看并说：“哦，一切看起来好多了，”或者“这没有解决问题。”它拥有看到自己更改的上下文，然后能够实际截取网站的屏幕截图，并说：“哦，这组CSS更改实际上导致了我没有预期的效果。让我撤销并尝试另一种方式。”

Alex: Mm, it's a different type of alignment problem.

Alex: 嗯，这是一种不同类型的对齐问题。

John: Yeah, the CSS alignment problem, maybe it even needs a harder problem.

John: 是的，CSS对齐问题，也许它甚至需要解决一个更难的问题。

### 开发者指南：API集成、提示工程与上下文管理

Alex: Switching gears a little bit, if I'm a developer and I want to use the Claude **API** (Application Programming Interface: 应用程序编程接口), how can I use MCPs with our API and with Claude models?

Alex: 稍微换个话题，如果我是一名开发者，想使用Claude **API**（应用程序编程接口），我如何将MCP与我们的API和Claude模型结合使用呢？

Michael: So that's an excellent question. The canonical standard way of doing this is to install the MCP **SDK** (Software Development Kit: 软件开发工具包), set up your own loop (like you mentioned with Claude Code), and handle connecting to any MCP server you need to get connected to.

Michael: 这是一个很好的问题。标准做法是安装MCP **SDK**（软件开发工具包），设置你自己的循环（就像你提到的Claude Code），并处理连接到任何你需要的MCP服务器。

Michael: But it's essentially your responsibility as a software developer to put together all the glue work, which is great and it works.

Michael: 但从本质上讲，作为一名软件开发者，你需要负责将所有连接工作整合起来，这很好，而且也行得通。

Michael: But what we recently released directly into the API as a native feature is the MCP connector feature, which allows you to specify where your remote MCPs live (like `mcp.github.com`), and provide us with whatever authorization information. We can then take care of that calling loop of executing the tools and getting the results fed back to the model for you.

Michael: 但我们最近直接在API中发布了一个原生功能，即MCP连接器功能。它允许你指定远程MCP的地址（例如`mcp.github.com`），并向我们提供任何授权信息。然后，我们可以为你处理调用循环，执行工具并将结果反馈给模型。

Michael: So all you really have to do is send a single API call that says, 'Give me my latest pull requests,' and it will take care of that for you.

Michael: 所以你真正需要做的就是发送一个API调用，说“给我最新的拉取请求”，它就会为你处理好这一切。

Alex: That's awesome. I've been hearing from a lot of developers that they've been able to delete tons of code because they just have that, so they don't have to handle all that back and forth themselves now. Just passing the URL to the endpoint, and then you're good to go.

Alex: 太棒了。我听很多开发者说，他们因此删除了大量的代码，因为有了这个功能，他们现在不需要自己处理所有的来回交互。只需将URL传递给端点，就可以开始了。

Alex: What are some other tips for developers using MCP?

Alex: 对于使用MCP的开发者，还有其他什么建议吗？

Michael: I think the main tip I try to give developers when I talk is that MCP servers and tools are really, at their core, prompts.

Michael: 我认为我在与开发者交流时，主要想给出的建议是，MCP服务器和工具本质上就是提示。

Michael: And so we've learned that if you're writing AI-powered applications, it's really important to be careful and precise about the language you use when you're prompting the model.

Michael: 因此我们了解到，如果你正在编写AI驱动的应用程序，在向模型提供提示时，使用精确和谨慎的语言非常重要。

Michael: This extends to everything about defining your MCP server, like defining your tool names appropriately, giving them descriptions.

Michael: 这延伸到定义MCP服务器的所有方面，比如适当地定义你的工具名称，给出描述。

Michael: Maybe your description has a few short examples in the description of how to use it, giving appropriate parameter names.

Michael: 也许你的描述中包含了一些如何使用它的简短示例，并给出了合适的参数名称。

Michael: This is all stuff that's going to affect your model's behavior when it interacts with the MCP server.

Michael: 这些都会影响模型与MCP服务器交互时的行为。

Michael: An example I had was I was making an image generation server, and I had a tool called 'Generate Image,' which then had a field called 'Description,' and that's it.

Michael: 我有一个例子，我当时正在制作一个图像生成服务器，我有一个名为“生成图像”的工具，它有一个名为“描述”的字段，仅此而已。

Michael: Then, you tell Claude, 'Hey, generate me an image of a cute puppy,' and it will call the tool, saying, 'Description: cute puppy.' Great.

Michael: 然后，你告诉Claude：“嘿，给我生成一张可爱小狗的图片。”它就会调用工具，说：“描述：可爱小狗。”棒极了。

Michael: If you change that, and say, 'This tool calls the XXX diffusion model, version Y, and should be prompted in this style for best results,' using this kind of descriptive language, and so on.

Michael: 如果你改变它，并说：“这个工具调用了XXX扩散模型，版本Y，为了获得最佳结果，应该以这种风格进行提示”，使用这种描述性语言等等。

Michael: Claude has information about how to interact with these systems, and it just needs to be told, 'Oh great, I know that I'm talking to a diffusion model now; I'm going to change the language I use in this prompt.' And instead of asking for a cute puppy, it's going to give you a much more detailed diffusion model prompt that will give you much better results.

Michael: Claude知道如何与这些系统交互，它只需要被告知：“哦，太好了，我知道我现在正在与一个扩散模型对话；我将改变在这个提示中使用的语言。”然后，它不会要求一个可爱的小狗，而是会给你一个更详细的扩散模型提示，从而获得更好的结果。

Michael: You get much better results from your MCP server just by changing a few words in your description or your prompt name.

Michael: 仅仅通过更改描述或提示名称中的几个词，你就能从MCP服务器获得更好的结果。

Michael: Just the same as you get better results writing pull requests or doing any sort of knowledge work with Claude that you would by tweaking those.

Michael: 这就像你通过调整这些来获得更好的拉取请求或使用Claude进行任何知识工作的结果一样。

Alex: I myself forget this all the time: when you're dealing with a tool or some sort of description in isolation as you're working on a new feature for some AI app, it all gets pulled back into the same prompt, right?

Alex: 我自己也总是忘记这一点：当你为一个AI应用开发新功能时，单独处理某个工具或描述，最终它们都会被拉回到同一个提示中，对吧？

Alex: And it's all just like one text string at the end of the day that's getting fed into the model in each request.

Alex: 归根结底，它都只是一串文本，在每次请求中被送入模型。

Alex: And that's good advice: 'Hey, that's part of the prompt too.'

Alex: 这就是很好的建议：“嘿，那也是提示的一部分。”

Alex: The description you're writing in some **JSON** (JavaScript Object Notation: 一种轻量级的数据交换格式) somewhere in your code is still going to be pulled into that same prompt that gets sent to Claude on the request.

Alex: 你在代码中某个地方的**JSON**（JavaScript对象表示法）中编写的描述，仍然会被拉入发送给Claude的请求中的同一个提示。

Alex: Let's talk a little bit about context management as well and dealing with lots of tools and lots of results.

Alex: 我们也来谈谈上下文管理，以及如何处理大量的工具和结果。

Alex: This is a huge problem for LLMs right now in terms of polluting the context.

Alex: 就污染上下文而言，这目前是LLM面临的一个巨大问题。

Alex: Curious if you have any thoughts there on how developers should think about that with MCP?

Alex: 你们对开发者应该如何用MCP来思考这个问题有什么看法吗？

Michael: Yeah, so I think a big **anti-pattern** (反模式: 在软件设计中应避免的常见错误解决方案) that we've seen a lot of developers make is stuffing their MCP servers or their API requests with tons of tools or tons of MCP servers. This not only gets expensive, because you're generating tokens for every single one you add, but also tends to confuse the model.

Michael: 是的，我认为我们看到许多开发者犯的一个重大**反模式**（在软件设计中应避免的常见错误解决方案）就是用大量的工具或MCP服务器来填充他们的MCP服务器或API请求。这不仅会变得昂贵，因为你每添加一个就会生成令牌，而且还容易混淆模型。

Michael: An example is if you connect both your Linear and your Asana task management MCP servers in the same request, both of those might have a 'get project status' MCP tool, and the model will not have implicit information about which one of them to use in which context.

Michael: 举个例子，如果你在同一个请求中连接了Linear和Asana这两个任务管理MCP服务器，它们可能都有一个“获取项目状态”的MCP工具，而模型将不会隐式地知道在何种上下文中应该使用哪一个。

Michael: But beyond that, you're essentially confusing the model by giving it potentially conflicting information.

Michael: 但除此之外，你本质上是在通过提供可能冲突的信息来混淆模型。

Michael: So, being very careful and deterministic about which tools you add, making sure the ergonomics around them also make sense, and that using those tools feels natural to you if you were to use them yourself.

Michael: 所以，要非常小心和确定地选择你添加的工具，确保它们的人机工程学也合理，并且如果你自己使用这些工具，会感觉很自然。

Michael: But beyond that, make sure you don't include any information that might not necessarily help with the current turn of user prompts.

Michael: 但除此之外，请确保不要包含任何可能对当前用户提示轮次没有必要帮助的信息。

Michael: So sometimes older parts of the conversation that might involve very introductory information, like 'What's the weather today?' might not be as relevant much later on in the conversation when you are moving on to the latest news or some other information you need from the model.

Michael: 所以，有时对话中较早的部分可能包含非常入门的信息，比如“今天天气怎么样？”在对话进行到很后面，当你转向最新新闻或其他你需要从模型获取的信息时，可能就不那么相关了。

Alex: Hm, I often get asked, how many tools can pass into Claude?

Alex: 嗯，我经常被问到，有多少工具可以传入Claude？

Alex: Or how many MCP servers can I hook up at one time?

Alex: 或者我一次可以连接多少个MCP服务器？

Alex: And it seems like it's not so much a number question, rather, it's about how distinct the tools are from each other and how well-defined and scoped out they are.

Alex: 看来这与其说是一个数量问题，不如说更关乎工具彼此之间的差异性，以及它们的定义和范围有多明确。

Alex: Is that correct, or is there also an absolute number of MCPs?

Alex: 是这样吗？或者说MCP的数量有没有一个绝对上限？

John: I think you also end up with an absolute number.

John: 我认为最终你也会遇到一个绝对数量的限制。

John: If your context window is X tokens, each server is going to pull in a number of function definitions.

John: 如果你的上下文窗口是X个token，每个服务器都会拉取一定数量的函数定义。

John: Each of those is going to eat it up.

John: 每一个都会占用这些token。

John: So you're just going to start.

John: 所以你就会开始。

John: As you give LLMs more information, it makes it harder for them to make good decisions.

John: 你给LLM的信息越多，它们就越难做出好的决策。

John: And so even though it will probably work if you hook up to a bunch of servers, it will probably work better if you can give Claude a subset that's relevant to the task it's looking at.

John: 因此，即使你连接到一堆服务器可能也能工作，但如果你能给Claude一个与它正在处理的任务相关的子集，效果可能会更好。

John: One other point from what Michael was saying is if you're designing an MCP server, generally if you can have one or two tools in your server versus having 15 or 20 tools, it will help the model a lot.

John: Michael所说的另一点是，如果你正在设计一个MCP服务器，通常情况下，如果你的服务器中只有一两个工具，而不是15或20个工具，那将对模型有很大帮助。

John: And so sometimes MCP interface development is a bit different than API development, where we're feeding these into LLMs.

John: 因此，有时MCP接口开发与API开发有所不同，因为我们是将这些信息输入到LLM中。

John: And if you give a tool a description that maybe takes some natural language or has it as part of filling out the parameters, the model's going to make some decisions and generate some text. You can maybe get away with, instead of an API where you'd say 'get projects,' 'get posts,' 'get users,'...

John: 如果你给一个工具一个描述，它可能包含一些自然语言，或者作为填充参数的一部分，模型会做出一些决策并生成一些文本。你也许可以避免像API那样说“获取项目”、“获取帖子”、“获取用户”……

John: You might just have a 'get info' tool, because your calling LLM will be able to look at your description and fill out whatever information it needs.

John: 你可能只需要一个“获取信息”工具，因为你调用的LLM能够查看你的描述并填写它所需的任何信息。

John: And that way you can provide a much smaller set of tools; you will both play nicer with other MCP servers and ensure that your server gets called more efficiently and appropriately.

John: 这样你就可以提供一个更小的工具集；你既能与其他MCP服务器更好地协作，又能确保你的服务器被更高效和恰当地调用。

Alex: Right, so it's not always a one-to-one translation.

Alex: 对，所以它不总是一对一的翻译。

Alex: There are different levels of abstraction you can apply, and perhaps the API spec is not the best-defined thing for the model to take in either.

Alex: 你可以应用不同层次的抽象，也许API规范也不是模型最适合接收的定义方式。

### 个人用例与涌现特性

Alex: So you live and breathe MCP all day, every day, basically.

Alex: 所以你们基本上每天都与MCP朝夕相处。

Alex: How are you using it, whether at work, at home, for a side project, or anything else?

Alex: 你们是如何使用它的，无论是在工作中，在家中，用于副项目，还是其他任何方面？

Alex: I know the example of Playwright, but are there other ways you're experimenting with MCP on the side?

Alex: 我知道Playwright的例子，但你们有没有其他在业余时间尝试MCP的方式？

Michael: One of the biggest use cases I've found personally is that Anthropic is often an information highway.

Michael: 我个人发现最大的用例之一是，Anthropic通常是一个信息高速公路。

Michael: There's so much information all over the place – between our Slack, our docs, and our codebase – and getting the latest status on how the project I'm currently on is going is not often very easy to understand from a single source.

Michael: 在我们的Slack、文档和代码库之间，信息无处不在，而要从单一来源了解我当前项目进展的最新状态通常并不容易。

Michael: So what I've gotten in the habit of doing is, either on Claude AR or on Claude Code, I'll set up my MCP servers to connect to all these various locations, and I'll ask it, 'Hey, here are a couple of examples of past project updates that I've written myself. Can you find information from the last week and generate a status update using the same exact format?'

Michael: 所以我养成的习惯是，无论是在Claude AR还是Claude Code上，我都会设置我的MCP服务器来连接所有这些不同的位置，然后我会问它：“嘿，这里有一些我过去自己写的项目更新示例。你能找到上周的信息，并使用完全相同的格式生成一个状态更新吗？”

Michael: And I would say the success rate on that is much higher than I originally thought.

Michael: 我想说，这方面的成功率比我最初想象的要高得多。

Anthony: Am I reading your status updates in your Slack, and are those all Claude-generated?

Anthony: 我在Slack里读到的状态更新都是Claude生成的吗？

Michael: Yeah, I'm never actually writing anything anymore. It's just all Claude.

Michael: 是的，我再也不自己写东西了。全部都是Claude生成的。

Anthony: It was just you reading Claude the whole time. Okay, good to know.

Anthony: 原来你一直在阅读Claude生成的东西。好的，知道了。

Alex: How about you John?

Alex: John你呢？

John: I've found a couple of angles from hacking around my home hardware.

John: 我从改装家里的硬件中发现了一些角度。

John: I have some MCP servers running on my home network that can control things around my house.

John: 我的家庭网络上运行着一些MCP服务器，可以控制我房子周围的东西。

John: And so in a conversation with Claude, I can say, 'Hey, did I leave my door unlocked this morning?' And Claude can say, 'Yeah, your door is currently unlocked; would you like me to lock it for you?' And I can reply, 'Yeah, that'd be great.'

John: 所以在与Claude的对话中，我可以说：“嘿，我今天早上出门时门锁了吗？”Claude可以回答：“是的，你的门目前没有上锁；你想让我帮你锁上吗？”我就可以回复：“是的，那太好了。”

John: That sort of thing is really useful, and kind of fun to play with.

John: 这种事情真的很有用，而且玩起来也很有趣。

John: It feels like a sneak peek into what the future world might look like.

John: 这感觉就像是窥见了未来世界的模样。

John: There's a magical feeling with MCP servers, because you get these emergent properties from adding them that you might not expect.

John: MCP服务器有一种神奇的感觉，因为你从添加它们中获得了一些你可能意想不到的**涌现特性**（emergent properties）。

John: An example of this is when we first started playing with MCP servers, I built a **Knowledge Graph** (知识图谱: 一种结构化的知识表示方式) server with some of my colleagues here at Anthropic.

John: 一个例子是，当我们刚开始玩MCP服务器时，我与Anthropic的一些同事共同构建了一个**知识图谱**服务器。

Alex: A knowledge graph in this case is...?

Alex: 在这种情况下，知识图谱是……？

John: A knowledge graph, meaning we wanted to give Claude the ability to take memories and form connections between them.

John: 知识图谱，意思是我们希望赋予Claude能力，让它能够获取记忆并在记忆之间建立连接。

John: And so it's an MCP server that had two tools: a 'create memory' tool and a 'connect memory to other memory' tool, with the simplest possible interface.

John: 因此，它是一个MCP服务器，拥有两个工具：“创建记忆”工具和“将记忆连接到其他记忆”工具，并且界面尽可能简单。

John: And we hooked this up to Claude, and suddenly you'd have conversations where Claude would enter 'investigative journalist' mode. I'd say, 'I play piano,' and Claude would ask, 'That's amazing, what do you like to play?' I'd reply, 'I like to play Rachmaninoff,' and it would ask, 'Is there anything that's your favorite there?' I'd look at the knowledge graph, and Claude would be scribbling down, saying, 'User has sophisticated classical music taste,' and trying to find, 'is skilled in instruments.' That's just from such a small change you provided.

John: 我们将它连接到Claude，突然间，你的对话中Claude会进入“调查记者”模式。我会说：“我弹钢琴。”Claude会问：“太棒了，你喜欢弹什么？”我回答：“我喜欢弹拉赫玛尼诺夫。”它会问：“那里有什么你特别喜欢的吗？”我查看知识图谱，Claude正在记下：“用户有高雅的古典音乐品味”，并试图找出“精通乐器”。这仅仅是由于你提供了一个很小的改变。

John: And one of the really cool things with having MCP as a protocol is if you hook in your Gmail server with your home automation server, Claude can figure out some way to solve a problem you ask it by connecting those two together, a way you might never have thought of.

John: MCP作为协议的一个非常酷的特点是，如果你将你的Gmail服务器与家庭自动化服务器连接起来，Claude可以通过将两者连接起来，找到解决你提出的问题的方法，这种方式你可能从未想到过。

Alex: Right, there's that fuzzy in-between when these things all get hooked together, where you pair that with Claude's general intelligence, and interesting things can happen.

Alex: 对，当这些东西都连接在一起时，就会出现那种模糊的中间地带。当你将其与Claude的通用智能结合起来时，就会发生一些有趣的事情。

John: And it's one of the core differences between MCP and traditional structured APIs: because everything is so fuzzy, and because LLMs are smart enough to just smush it together, you care a lot less about contracts.

John: 这是MCP与传统结构化API之间的核心区别之一：因为一切都非常模糊，而且LLM足够智能，可以将其简单地整合在一起，所以你对契约的关注度会大大降低。

John: There's this interesting property: if I have an MCP server for interacting with Gmail, and then I do some evaluations and find a better set of tools and descriptions to interact with Gmail (changing it from 15 tools with a set of descriptions to two tools with another), I don't have to roll out a new version of my API for that.

John: 有一个有趣的特性：如果我有一个用于与Gmail交互的MCP服务器，然后我进行一些评估，找到一套更好的工具和描述来与Gmail交互（将其从带有15个描述的工具集更改为带有另外两个工具），我不需要为此发布新版本的API。

Alex: If you're changing your API in a massive way like that-

Alex: 如果你以那样大规模的方式改变你的API——

Michael: You have to deal with breaking changes.

Michael: 你必须处理破坏性变更。

John: Breaking changes, talking to users, doing all of that... With MCP, I can just roll that out. Because the intent of the MCP is to allow Claude to interact with Gmail, it's not like I'm going to provide a 'read emails' tool and a 'write email' tool.

John: 破坏性变更、与用户沟通、做所有这些……有了MCP，我可以直接推出。因为MCP的目的是让Claude与Gmail交互，我不会提供一个“阅读邮件”工具和一个“发送邮件”工具。

John: So it's really cool.

John: 所以这真的很酷。

Alex: Yeah, it's more about the higher-level intent and actions than the specific technical detail of how we get there.

Alex: 是的，它更多地关乎更高层次的意图和行动，而不是实现这些的具体技术细节。

John: Yeah, yeah.

John: 是的，是的。

### MCP的未来展望

Alex: That's really cool. So where's this all headed?

Alex: 这真的很酷。那么这一切将走向何方？

Alex: Where's MCP going to be in 6 months, 12 months, a year-plus?

Alex: MCP在6个月、12个月、一年甚至更长时间后会发展到什么程度？

Michael: That's an interesting question, because I've always viewed, as John said, MCP as a protocol. So it's very interesting to see popularity for a protocol, considering that if MCP is successful, and we and everybody that integrates with it do their job right, we should never know that MCP is happening under the hood.

Michael: 这是一个有趣的问题，因为正如John所说，我一直将MCP视为一种协议。因此，看到一个协议如此受欢迎是非常有趣的，考虑到如果MCP成功，并且我们以及所有与其集成的人都做对了工作，我们应该永远不会知道MCP在幕后运行。

Michael: It should just be you using whatever program or app you're using, with MCP happening under the hood, just making everything glued together, and LLMs configuring everything, so you're just giving it the arms and legs it needs.

Michael: 它应该只是你在使用你正在使用的任何程序或应用程序，而MCP在幕后运行，将所有东西粘合在一起，LLM配置一切，所以你只是给它提供它所需的手脚。

Michael: But yeah, it's always been interesting to me to see the hype around MCP.

Michael: 但是的，看到围绕MCP的炒作对我来说一直很有趣。

Alex: Right, do you think that's going to continue?

Alex: 对，你认为这会持续下去吗？

Alex: Is there a plateau here, or what does that actually look like in terms of protocol?

Alex: 这里会出现一个平台期吗？或者从协议的角度来看，它实际上会是什么样子？

Alex: Is there any sort of precedent we can look at to judge MCP against?

Alex: 有没有我们可以参照的先例来判断MCP？

Michael: I think it's hard applying a precedent to anything in the world of AI that we're in, but I definitely see a lot of what John and his colleagues on the MCP team have been doing is very exciting.

Michael: 我认为在我们所处的AI世界中，很难将先例应用到任何事物上，但我确实看到John和他在MCP团队的同事们所做的大部分工作都非常令人兴奋。

Michael: And to me, it's been amazing seeing companies big and small come to the table and talk about how we can proliferate it and make it this ubiquitous thing that is just everywhere, the same way our internet is.

Michael: 对我来说，看到大大小小的公司坐下来讨论如何推广它，并使其成为像互联网一样无处不在的东西，真是太棒了。

John: One thing that's really exciting for me going forward is...

John: 对我来说，未来有一件事非常令人兴奋，那就是……

John: I think we're at a point now where a lot of people have realized the value of MCP and they've started writing these servers, but in terms of the MCP servers as prompts analogy, we're in very early days.

John: 我认为我们现在正处于一个许多人已经意识到MCP价值并开始编写这些服务器的阶段，但就将MCP服务器比作提示而言，我们仍处于非常早期的阶段。

John: And so I am really excited for people now that they've started building out these servers to start evaluating how they work and making them better.

John: 因此，我非常期待人们在构建这些服务器之后，开始评估它们的工作方式并使其变得更好。

John: And I'm excited for it to start to become a metric by which you might evaluate a vendor for your work.

John: 我也很期待它开始成为你评估工作供应商的一个衡量标准。

John: If I'm paying someone to do log analytics, for example, it would be really cool and valuable to me if I could just hook in your log analytics MCP server into my Claude and say, 'Hey, my site is down, what's going on?'

John: 例如，如果我付钱给某人做日志分析，如果我能将你的日志分析MCP服务器连接到我的Claude，然后说：“嘿，我的网站崩溃了，怎么回事？”那对我来说将是非常酷和有价值的。

John: And if they've designed and developed a really wonderful MCP server that gives Claude the tools it needs to interact with their services and find those answers, then that's a huge selling point for me as an engineer, because then I can rely on this functionality.

John: 如果他们设计并开发了一个非常出色的MCP服务器，为Claude提供了与他们的服务交互并找到答案所需的工具，那么这对我作为一名工程师来说是一个巨大的卖点，因为我就可以依赖这项功能。

John: I don't have to build it.

John: 我不必自己构建它。

John: And I'm excited for this to start becoming more mature.

John: 我很高兴看到它开始变得更加成熟。

John: It's exciting that we've shipped an MCP server, and we're starting to see people compete on, 'We have the best MCP server. This is going to make your life so much easier; you should use us because we interact with Claude in this way.'

John: 令人兴奋的是，我们发布了MCP服务器，并且我们开始看到人们在竞争：“我们有最好的MCP服务器。这将使你的生活轻松得多；你应该使用我们，因为我们以这种方式与Claude交互。”

Alex: Well, I'm excited for that future as well.

Alex: 嗯，我也对那个未来感到兴奋。

Alex: Thank you for coming on.

Alex: 谢谢你们的到来。

Alex: This has been great.

Alex: 这很棒。

Michael: Thank you.

Michael: 谢谢。

John: Thank you so much.

John: 非常感谢。