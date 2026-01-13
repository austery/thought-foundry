---
author: AI Engineer
date: '2026-01-12'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=96G7FLab8xc
speaker: AI Engineer
tags:
  - mcp
  - agentic-design
  - fastmcp
  - llm-tools
  - developer-experience
title: 代理原生设计：重构 MCP 服务的五项核心准则
summary: Jeremiah Lowin（Prefect CEO）探讨了模型上下文协议（MCP）的现状，指出当前许多 MCP 服务仅是简单的 API 包装。他提出了“代理原生产品设计”理念，强调应针对 AI 代理的发现成本、迭代速度和上下文限制进行优化。通过“以结果为导向”、“参数扁平化”和“严苛精简”等策略，开发者可以构建出性能更优、更易被 AI 理解的工具接口。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people:
  - Jeremiah Lowin
companies_orgs:
  - Prefect Technologies
  - Anthropic
  - Block
products_models:
  - FastMCP
  - Claude
media_books: []
status: evergreen
---
### 代理原生设计：从 API 到用户界面的范式转移

在 MCP（Model Context Protocol: 连接 LLM 与工具或数据的开放标准）发布一周年之际，**FastMCP**（FastMCP: 由 Prefect 开发的构建 MCP 服务器的高级接口）已成为开发者构建服务器的事实标准。然而，Jeremiah Lowin 指出，目前市面上充斥着大量“糟糕”的 MCP 服务器。这些服务器往往只是简单地将现有的 **REST API** 字符串化后进行包装，而没有经过任何产品层面的思考。

我们需要建立一种**代理原生产品设计**（Agentic Product Design）的直觉。就像为人类设计产品需要遵循“人类交互指南”（HIG）一样，为 AI 代理设计接口也必须考虑其独特的优缺点。**MCP 服务器**本质上不是底层基础设施，而是一个专门为 AI 代理设计的**用户界面**（User Interface）。如果一个 API 对人类好用，并不意味着它对 AI 也好用，因为 AI 并不是全知全能的“神谕”，它们也会犯错，且受限于特定的运行逻辑。

在确立了“接口即 UI”的认知后，我们需要深入剖析人类与 AI 在交互维度上的本质差异，从而找到优化的突破点。

<details>
<summary>Original English Source</summary>

I'm the founder and CEO of a company called Prefect Technologies. More recently, I introduced a piece of software called fastmcp, which has become the de facto standard way to build MCP servers. As many of you are probably aware, MCP itself was introduced almost exactly a year ago.

I named the talk after this meme ("Your MCP Server is Bad"). What I want to do today is I would really like to build an intuition for agentic product design. What else is an MCP server but an interface for an agent, and we should design it for the strengths and weaknesses of those agents in the same way that we do everything else.

Now when I put this thought in the world, I very frequently get this push back: "but if a human can use an API, why can't an AI?" Humans don't use APIs. Very very rarely do humans use APIs. Humans use products. We put a website, an SDK, a client, a mobile app between us and an API. One of my core arguments is that agents deserve their own interface that is optimized for them and their own use case.

</details>

### 认知差异：AI 代理的发现、迭代与上下文约束

人类与 AI 代理在三个关键维度上存在显著差异：**发现**（Discovery）、**迭代**（Iteration）和**上下文**（Context）。对于人类开发者，**发现**成本极低，你只需看一次文档就能记住如何调用；但对 AI 来说，每次启动都要与服务器“握手”，枚举所有工具及其描述，这会消耗大量 Token 且极其昂贵。在**迭代**方面，人类可以快速运行脚本并根据报错修改，而 AI 的每次迭代都意味着发送完整的对话历史，速度慢且容易出错。

最核心的限制在于**上下文**。尽管 LLM 的上下文窗口在扩大，但其“瞬时记忆”仍然有限。AI 代理就像是只有 1KB 内存却要飞向月球的阿波罗 11 号，我们必须非常谨慎地管理它能看到的信息。一个常见的直觉是：AI 可以在草堆里找针，但它会检查每一根草来确认它是不是针。因此，MCP 开发者的核心动词应该是**精简**（Curate: 从海量信息中筛选并优化出最适合代理使用的接口）。

基于这些约束，开发者必须摒弃传统的 REST API 设计思维，转而采用以下五项实操准则来重构工具接口。

<details>
<summary>Original English Source</summary>

I'd like to make the argument to you that the difference between a human and an AI exists on these three dimensions of discovery, iteration, and context. Humans find discovery really cheap. We tend to do it once. AIS, not so much. Every single time that thing turns on, it shakes hands with the server. It learns about the server. It enumerates every single tool. So discovery is actually really expensive for agents. It consumes a lot of tokens.

Next, iteration. For agents, iteration is slow. Iteration is the enemy. Every additional call sends the entire history of all previous calls over the wire. You do not want to iterate if you can avoid it. And the last thing is on context. When you plug an LLM into any given use case, it remembers the last 200,000 tokens it saw. It has a very small brain at this moment.

An agent can find a needle in a hay stack. The problem is it's going to look at every piece of hay and decide if it's a needle. The most important word in the universe for MCP developers is curate. How do you curate from a huge amount of information an interface that is appropriate for one of these extremely limited AI agents?

</details>

### 核心准则：以结果为中心与参数扁平化

第一项准则：**结果重于操作**（Outcomes not Operations）。在 REST API 中，我们习惯于提供原子化的操作（如获取用户、获取订单、过滤状态），然后让开发者去组合。但在 MCP 中，你应该直接提供一个“追踪最新订单状态”的工具。不要让 AI 担任**编排器**（Orchestrator: 协调多个原子操作以完成复杂任务的过程），因为这会导致多轮昂贵的往返调用。你应该为代理量身定制“代理故事”（Agent Story），并以代理的视角为工具命名。

第二项准则：**参数扁平化**（Flatten your Arguments）。严禁向工具传递复杂的嵌套字典或对象。这不仅增加了 AI 理解的难度，还容易引发客户端兼容性问题。例如，**Claude Desktop** 曾有一个 Bug，会将所有结构化参数作为字符串发送。更好的做法是使用**顶级原语**（Top-level Primitives），并尽可能使用 **枚举**（Enum）或 **字面量**（Literal）来限制 AI 的选择范围。

除了结构化的参数设计，非结构化的指令描述同样是决定工具调用成败的关键，因为“指令即上下文”。

<details>
<summary>Original English Source</summary>

Thing number one is outcomes not operations. The trap is having a whole bunch of atomic operations. This is amazing if you're building a REST API, it is bad if you're building an MCP server. Instead, we want things like "track latest order". Don't ask your agent to be an orchestrator unless you absolutely have to. Finding out an order status is a really expensive time to choose to use an LLM as your orchestration service. Name the tool for the agent. Don't name it for you.

Thing number two: Flatten your arguments. I see this so often where you say "here's my tool and one of the inputs is a configuration dictionary." Just don't ask your LLM to invent complex arguments. Use top level primitives. What's the limit? What is the status? What is the email? I highly highly recommend literals or enums whenever you can. When you have a constrained choice, your agent will thank you.

</details>

### 深度优化：指令上下文与严苛的 Token 预算

第三项准则：**指令即上下文**（Instructions are Context）。如果你不告诉 AI 如何使用服务器，它就会乱猜。文档不仅要写在工具描述里，还要写在服务器描述里。此外，**错误信息也是提示词**（Errors are Prompts）。当工具报错时，不要只返回一个 Python 堆栈跟踪或数字代码，而应该返回能引导 AI 修复调用的建议。这是一种“渐进式信息披露”策略，承认 AI 可能会在第一次调用时出错，但通过错误信息引导它在第二次做对。

第四项准则：**尊重 Token 预算**（Respect the Token Budget）。这是唯一一条不可逾越的红线。如果你在一个服务器里暴露 800 个端点，每个端点仅描述信息就会占满 AI 的上下文窗口，导致它在握手阶段就“失智”了。**Token 预算**（Token Budget: LLM 上下文窗口中可用于描述工具的有限空间）是极其稀缺的资源。如果你的工具描述过于冗长，AI 将没有空间处理实际任务。

在控制了信息密度后，最后一步是关于如何通过持续的精简来提升服务的整体质量，避免陷入“API 搬运”的陷阱。

<details>
<summary>Original English Source</summary>

Thing number three: instructions are context. If you don't tell your agent how to use your MCP server, it will guess. Please document your MCP server. And errors are prompts. Every response that comes out of the tool, your LLM gets what it sees as information about the fact that it didn't succeed. You actually have an opportunity to document your API through errors. Be as helpful as possible in your error messages. They become part of its next prompt.

Thing number four: Respect the token budget. The GitHub server ships like 200,000 tokens when you handshake with it. If you had 800 endpoints, you would lobotomize the agent on handshake because it would have no room for anything else. The handshake is painful. When an LLM connects to an MCP server, it typically does download all the descriptions in one go. You have to be mindful of it.

</details>

### 终极进化：无情精简与拒绝简单的 REST 包装

第五项准则：**无情精简**（Curate Ruthlessly）。Jeremiah 建议每个代理连接的工具数量应控制在 50 个以内，理想状态是 5 到 15 个。过多的工具会导致性能显著下降。他引用了 **Fiverr** 工程师 Kelly Kohlleffel 的案例：最初构建了包含 188 个工具的服务器，最后精简到了 5 个。这才是真正的工作流优化。

最后，他发出了最强烈的警告：**停止将 REST API 直接转换为 MCP 服务器**。虽然 FastMCP 提供了自动转换功能，但这仅应用于快速原型开发。直接搬运 API 会违反上述所有准则，导致高昂的 Token 成本和极差的可靠性。你应该从工作流出发，自顶向下设计，而不是从 API 端点出发自底向上堆砌。记住，你不是在写一个工具，你是在为一个 AI 代理构建**用户界面**。

<details>
<summary>Original English Source</summary>

Thing number five: curate ruthlessly. 50 tools is where I draw the line where you're going to have performance problems. If you can get down to 5 to 15, that would be ideal. Kelly Kohlleffel at Fiverr talked about building up a server from a couple of basic tools to 188, and then he curated that server from 188 down to five. That tells a really interesting story about making something work well.

Please, please just stop converting REST APIs into MCP servers. It is the fastest way to violate every single thing we've talked about today. It really doesn't work. Do not ship the REST API to prod as an MCP server. You will regret it. You are not building a tool, you are building a user interface. Treat it like a user interface because it is the interface that your agent is going to use.

</details>