---
author: AI Engineer
date: '2026-01-14'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=VSdV-AdSlis
speaker: AI Engineer
tags:
  - ai-agents
  - identity-management
  - mcp-protocol
  - token-exchange
  - human-in-the-loop
title: AI 智能体的身份验证与授权：Auth0 的最新实践
summary: Auth0 的 Patrick Riley 和 Carlos Galan 深入探讨了 AI 智能体时代的身份识别与授权挑战。他们介绍了 Auth0 最新发布的 AI 专用功能，包括 Token Vault、异步授权（Async Auth）以及对 MCP 协议的支持。通过股票交易应用的演示，展示了如何实现智能体代表用户安全调用 API、处理高风险操作的确认流程，以及如何通过动态客户端注册（DCR）确保 MCP 服务器的安全性。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Auth0
  - Okta
  - Vercel
  - OpenAI
  - Anthropic
products_models:
  - Token Vault
  - MCP
  - CIBA
  - Claude
  - GPT-4o
media_books: []
status: evergreen
---
### AI 智能体身份识别的挑战与愿景

**Patrick**: 今天我们要讨论的是 **AI 智能体**的身份识别，以及我们如何为智能体、**MCP 服务器**进行授权。实际上，我们本周刚刚发布了一款新产品，这让今天的演示变得非常有趣。就在几天前，我们针对其中几项功能发布了一个重大版本。另外，我需要说明的是，本次工作坊的大部分材料都是由我们的架构师 **Abbyek**（绰号 Shrek）准备并整合到这次演讲中的。

<details>
<summary>Original English</summary>

**Patrick**: We're talking today about identity for AI agents and how we authorize agents, MCP servers and the... Um, we launched a new product actually this week. So, that made this presentation fun. Had a major release just a few days ago for several of these features and ging these. Additionally, I should probably preface by saying a lot of this workshop material has been repurposed and our architect Abbyek, he goes by nicknames Shrek, kind of prepared a lot of this and we've kind of massaged it into this presentation.

</details>

**Patrick**: 我们将深入探讨新版本中的每一项核心功能，无论是 **Token Vault** 还是**异步授权（Async Auth）**。我们不会深入讨论 **FGA**（细粒度授权），但请知晓这是另一个关于基于角色的访问控制（RBAC）的子产品。还有一个关于细粒度授权的开源项目，它扩展了这些功能集，但那是另一个话题了。

<details>
<summary>Original English</summary>

**Patrick**: We're going to cover each of these in depth. some of the core features of this new release whether it's token vault, async off—we're not going deep on FGA but just know that there is another kind of subproduct if you will that's all around role based access control. There's an open-source project around fine grain do off which really extends this feature set but that's really kind of another talk.

</details>

**Patrick**: 简单自我介绍一下。这是我第一次参加 **AIE**，这周过得很棒，学到了很多。我来自罗利（Raleigh），在身份识别领域已经深耕了四年。现在我把话筒交给 **Carlos**。

<details>
<summary>Original English</summary>

**Patrick**: Quick intros. It's my first time at AIE, so thank you guys. It's been awesome week already. Learned so much. I'm from Raleigh, and I've learned a lot about the identity space in the last four years. I'm going to roll over to Carlos.

</details>

**Carlos**: 大家好，我是 Carlos，今天和 Patrick 共同主持这个工作坊。这是我第一次来纽约，也是第一次来美国。我常驻西班牙的马略卡岛。我加入 **Auth0** 和 **Okta** 已经两年多了。

<details>
<summary>Original English</summary>

**Carlos**: Yeah. Hi. I'm Carlos. I'm co-host with Patrick for this workshop today. First time in New York, first time in the US. So great so far. Thank you for the welcoming. I'm best in Spain in Mayor if you know the place it's a beautiful island. I joined Auth0 and Okta. I did a bit more two years.

</details>

### AI 身份管理的四大支柱

**Carlos**: 我想以 Auth0 的愿景作为开始：让每个人都能安全地使用任何技术。这个愿景在 AI 智能体时代到来之前就已存在，且至今依然适用，因为我们处理的是过去、现在和未来技术的身份问题。

<details>
<summary>Original English</summary>

**Carlos**: So I want to start this with a vision that Auth0 share. This is to free everyone to safely use any technology. And the fun fact about this is is a vision that precedes the AI agent era and still stands because at the end of the day is what we do; we deal with identity for past, present and future technology.

</details>

**Carlos**: 智能体带来了新的挑战和威胁。根据最新的 **OWASP** 针对大语言模型的 Top 10 清单，出现了很多以前不存在的新问题。目前我们看到了交互式智能体、聊天机器人和代码编辑器，但这不太可能是未来。未来将出现更多非交互式运行的模式，如 **Autonomous Agents**（自主智能体）。

<details>
<summary>Original English</summary>

**Carlos**: Agents bring new challenges, new threats. And just to illustrate, this is an updated list of the OWASP LLM top 10. So you can see new things that they didn't exist before. So far we've seen interactive agents, chat box, code editors but this is unlikely the the future. We start to see other modalities where the agents doesn't run anymore in a in interactive way. Autonomous agents is something that is very popular these days.

</details>

**Carlos**: 我们认为有四大支柱将涵盖这些新模式：
1. **AI 需要知道我是谁**：如果智能体不知道身份，就无法应用任何安全限制或授权。
2. **AI 需要代表我调用 API**：智能体需要访问其他服务来消耗资源。
3. **AI 可以请求我的确认**：对于高风险操作，智能体不应在没有监督的情况下自主执行。
4. **AI 访问应该是细粒度的**：我需要控制智能体可以访问哪些具体的资源或文档。

<details>
<summary>Original English</summary>

**Carlos**: These are four pillars that we believe will cover all these new modalities. The first one is AI needs to know who I am. This is key. If the agent doesn't know who I am, it can never apply any security or any restriction or any authorization authentication. The second is obviously the agents will be autonomous enough but it doesn't mean that we'll be alone. Eventually they will need to access other services to consume other resources. So AI needs to call APIs on my behalf as a user. But sooner or later the agent will try to do something riskier without any supervision from my side. So AI can request my confirmation. And lastly AI access should be fine grain. It has to be on my hands to what the agent can access and what not.

</details>

**Carlos**: 这就是 Okta 和 Auth0 互补的地方。在企业场景中，员工不仅代表自己，还代表公司。公司需要控制这些代表员工行事的智能体具体在做什么。

<details>
<summary>Original English</summary>

**Carlos**: And just to also introduce where Okta and Auth0 can play or complement each other. We talked about a user, but eventually will be an employee within an enterprise or a company. In those cases the company needs also control what exactly those agents that are acting on behalf those employees are doing. That's where Okta also plays a important part and in the other end Auth0 is what we the the capabilities and features that we've implemented.

</details>

### 异步授权：实现“人在回路”的安全确认

**Carlos**: 让我们深入探讨今天演示的内容。其中一个核心功能是“AI 可以请求我的批准”。为此，我们在 AI 产品中实现了**异步授权（Async Auth）**。本质上，它为智能体建立了一种机制和协议，当某项操作需要人类批准时，它可以主动联系用户。

<details>
<summary>Original English</summary>

**Carlos**: So let's get deep on exactly what we are going to present today. We talk about four pillars. I'm going to introduce how we made possible one of the three which is AI can request my approval. For that we implemented async Auth as part of the Auth0 for AI offering. Basically this feature creates a mechanism and a protocol for the agent to reach out the user when an operation needs to be approved by the human in this flow.

</details>

**Carlos**: 这项功能基于 **CIBA**（客户端发起的后台通道身份验证）协议。在这种情况下，是由智能体发起身份验证和授权。例如，一个自主运行的智能体想要进行一笔被标记为高风险的购买。通过简单的 SDK 调用，它可以发起授权请求，用户会在其设备上收到结构化的交易通知。用户批准后，该批准以 **Access Token**（访问令牌）的形式返回给智能体，其中包含用户批准的具体细节。

<details>
<summary>Original English</summary>

**Carlos**: It's built on top of Client Initiated Backchannel Authentication protocol. It's an OIDC specification. In this scenario is the agent that it's initiating the authentication and authorization. The agent is running and at some point needs to make a purchase or make something that is flagged as risk. With a simple SDK call it can initiate an authorization request that materializes a notification to the user. The user receives the details of that transaction well structured. The user acknowledges that, approves that and then that approval gets back to the to the agent in form of an access token. And that access token contains the exact details that the user approved.

</details>

### Token Vault：管理上游资源访问

**Patrick**: 另一个重大功能是 **Token Vault**。这是一种持久化存储上游资源 **Refresh Tokens**（刷新令牌）的新机制。如果你以前用过 OAuth 处理社交提供商或其他身份提供商，你会发现这让智能体的使用场景变得简单得多。

<details>
<summary>Original English</summary>

**Patrick**: The Token Vault as the other kind of like major feature we're introducing with this AI targeted release. Token vault is a new mechanism for persisting your upstream resource refresh tokens. This makes use cases with agents much much easier.

</details>

**Patrick**: 我们现在有一个非常细粒度的流程，允许代表用户交换令牌。我可以发送我的访问令牌或应用程序的刷新令牌，然后请求上游服务（如 **Slack API** 或 **Facebook API**）的权限范围（Scopes）。我们会管理令牌的生命周期，确保你的智能体始终在线且安全。

<details>
<summary>Original English</summary>

**Patrick**: We have a really fine grained now flow which allows you to exchange tokens on behalf of users. I can send my access token or my application's refresh token and I can then request scopes for an upstream service. Whether that's accessing Slack API or Facebook API. We actually persist scopes, we manage lifetimes of tokens, we do a lot of handling there to ensure that your SDK life is very easy and that your agent stays online and it's available and it's secure.

</details>

**Patrick**: 在不同的智能体框架中，流程可能有所不同。例如在 **LangGraph** 中，我们使用短效的访问令牌，因为 LangGraph 会启动一个外部 API。而在传统的 **Next.js** Web 应用中，刷新令牌可能更适合。此外，我们还有一个名为“自定义 API 客户端”的新机制，允许 **MCP 服务器**访问远程数据。

<details>
<summary>Original English</summary>

**Patrick**: As we are digesting each of the agentic frameworks you can kind of see that well it may differ if you're using a single page app or you're wanting to access an external API. Especially like with LangGraph we use an access token. Whereas other flows you may just have a native app or a simple Next.js regular web app with your agent running embedded. Then a refresh token may fits your use case perfectly fine. There's also cases where maybe you have an asynchronous agent accessing other data. We have a new mechanism now called a custom API client which can allow an MCP server for example to access remote data.

</details>

### MCP 协议与动态客户端注册

**Patrick**: **MCP**（模型上下文协议）对我们来说非常新，我们本周刚刚发布了预览版。我们将 MCP 服务器也建模为一个客户端。在某些情况下，智能体是访问 MCP 服务器的客户端，而 MCP 服务器又是访问上游 API 的客户端。

<details>
<summary>Original English</summary>

**Patrick**: MCP is very new for us we just launched a preview. But yeah, you can kind of see where we've modeled the MCP server also as a client. And yes, there are cases where agent is a client talking to MCP server which is also a client talking to upstream APIs.

</details>

**Patrick**: 我们实现了 **DCR**（动态客户端注册）。这意味着我们可以以粒度化的方式保护 MCP 资源和工具，同时支持与多个提供商的动态注册。我们在 **Vercel** 代码中展示了如何应用中间件进行权限范围验证，以及如何暴露元数据。

<details>
<summary>Original English</summary>

**Patrick**: We just EA our DCR feature like this week. This flow is a little more involved because the MCP server becomes a client of the agent. It's important because we're actually securing MCP resources and tools and kind of doing it in a granular way but also enabling dynamic registration with many providers. This kind of shows some of the middleware and how we apply like scope verification on the MCP server itself and how we expose metadata.

</details>

### 现场演示：构建安全的股票交易智能体

**Patrick**: 今天我们要构建的是一个基于 Next.js 的智能体应用。利用 Vercel 平台，我们可以在同一基础设施中快速构建 MCP 工具。智能体客户端与 MCP 服务器通信，再利用 MCP 服务器与第三方（如股票交易服务）对话。

<details>
<summary>Original English</summary>

**Patrick**: This is what we are building today. Basically, we are building an agent Next.js app. What's nice about Vercel's platform is we can build MCP tools alongside our agent in the same infrastructure quickly. We can then use the agent client to communicate with the MCP server and then leverage the MCP server to talk to third parties.

</details>

**Carlos**: 在这个演示中，我们有一个虚构的股票交易应用。最初，聊天机器人不知道你是谁，也无法访问你的资产数据。我们需要通过 Auth0 SDK 引入登录功能，建立用户、智能体和上游服务之间的“三角信任关系”。

<details>
<summary>Original English</summary>

**Carlos**: In this case this is a downstream of a trade app. If you try to consume data from that trading service the chatbot will tell you I know nothing. Let's authenticate and let the the agent know who I am. We need to establish a relationship also—it's kind of a a three-way thing—it's us, the upstream service and the agent. So we need to establish this triangle relationship.

</details>

**Carlos**: 当用户想要执行风险操作（如买入股票）时，智能体会调用异步授权。用户会在手机上的 **Guardian** 应用中收到推送通知，显示交易详情（如股票代码、数量、价格）。只有当用户在手机上点击“批准”后，智能体才会获得包含相应权限的访问令牌，并最终完成下单。

<details>
<summary>Original English</summary>

**Carlos**: When an operation needs to be approved by the human, we consider place an order a risky operation. Before running the create order tool we will call back channel Auth. The user receives the details of the transaction in their screen, most likely out of plan device, see that and approve that and only when that is approved we will place the order.

</details>

**Patrick**: 我们还展示了如何在 **Claude** 中使用这些 MCP 工具。虽然 MCP 规范还很新，不同客户端的实现方式略有不同，但通过 DCR 和 Auth0 的身份层，你可以跨平台（如 **ChatGPT** 或 Claude）安全地共享和使用你的工具。

<details>
<summary>Original English</summary>

**Patrick**: I wanted to show how in Claude code this works. Unfortunately, the spec is pretty new and not all the clients implemented the same way. But you'll have a lot of options to to register new clients, new agents, and access your tools.

</details>