---
author: How I AI
date: '2026-02-02'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=B5yDJAkz0rw
speaker: How I AI
tags:
  - prompt-engineering
  - workflow-automation
  - customer-relationship-management
  - knowledge-management
  - tool-integration
title: 产品经理如何利用MCPs自动化会议准备、CRM更新和客户反馈分析
summary: 本访谈中，Zapier 的产品经理 Reed Robinson 分享了他如何利用多渠道协议（MCPs）和AI工具（如Claude、Google Gemini）来自动化日常工作流程。他详细介绍了如何使用Zapier MCP创建自定义工具集，通过Claude Projects为CRM更新和会议准备提供详细指令，以及利用AI系统分析客户反馈并自动更新FAQ知识库。此外，他还分享了AI在个人生活中的应用，例如家庭日历管理和为孩子创作歌曲，强调了AI在提升工作效率和生活乐趣方面的巨大潜力。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - Zapier
  - Work OS
  - OpenAI
  - Perplexity
  - Cursor
  - Vanta
  - Anthropic
  - Google
products_models:
  - Claude
  - ChatGPT
  - Google Gemini
  - Suno
  - NotebookLM
  - Salesforce
  - HubSpot
  - Granola
  - Glean
  - Coda
  - Data Bricks
media_books: []
status: evergreen
---
### MCPs：AI工具的应用集成

**Reed Robinson**: 我会说，**MCPs**（多渠道协议）对人们来说是一个很难理解的概念。

<details>
<summary>Original English</summary>

**Reed Robinson**: I will say it's a concept that's really hard to understand for folks.

</details>

**Claire Vo**: 是的，绝对不要去想这个词。它真的就像是你的AI工具的**应用集成**。你可以从你使用的所有应用程序中创建这些工具集合，并让它们访问**Claude**、**ChatGPT**、**Cursor**，以及所有现在有**MCP**服务器输入的地方。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, definitely don't think about the word. It really just is like app integrations for your AI tools. You can create these collections of tools from all the apps you use and give them access to Claude to Chatbt to Cursor, all the places that have inputs for MCP servers today.

</details>

**Reed Robinson**: 我一直都在使用代理，但要打破这种肌肉记忆很难，即区分这是一个**确定性工作流**还是一个**指令性代理**，即使它有权访问相同的工具并能做同样的事情。

<details>
<summary>Original English</summary>

**Reed Robinson**: I use agents all the time, but it is hard to break that muscle memory of this is a deterministic workflow versus an instructive agent. even if it has access to the same tools and can do the same things.

</details>

**Reed Robinson**: 归根结底，我们看到人们想做的两件事是：第一，让他们喜欢的AI工具能够访问其应用程序中的**知识**；第二，让它们能够在这些应用程序中**实际执行操作**。如果你使用的AI应用程序需要这些功能，那就去寻找**MCP**或现在常说的**连接器**。

<details>
<summary>Original English</summary>

**Reed Robinson**: And when it comes down to it, the two things we see people wanting to do is one, giving their favorite AI tool the access to knowledge that lives in their apps as well as giving them the ability to actually do things in those apps. Those are the two things that if that sounds like something that you need in an AI app you use, look for MCP or connectors as it's often being called now as well for that.

</details>

### 欢迎来到How I AI

**Claire Vo**: 欢迎回到How I AI。我是**Claire Vo**，产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具进行构建。今天我与**Zapier**的AI产品经理**Reed Robinson**对话。我喜欢与Reed的对话之处在于，他将向我们展示如何将**MCPs**应用于**Claude**，从而接管你真正讨厌的任务。我们还将讨论AI是否能成为在你睡觉时也能工作的完美常驻团队，以及一些让你的孩子和伴侣更开心的用例。让我们开始吧。本期节目由**Work OS**赞助。

<details>
<summary>Original English</summary>

**Claire Vo**: Welcome back to How I AI. I'm Claire Vo, product leader and AI obsessive here on a mission to help you build better with these new tools. Today I'm talking to Reed Robinson, product manager on AI at Zapier. And what I love about my conversation with Reed is he's going to show us how to put MCPs to work inside Claude to take over tasks that you really hate. We also talk about whether AI can be the perfect always on team that works while you sleep and some use cases to make your kids and your partner a little happier. Let's get to it. This episode is brought to you by Work OS.

</details>

**Claire Vo**: AI已经改变了我们的工作方式。工具正在帮助团队编写更好的代码，分析客户数据，甚至自动处理支持工单。但有一个问题：这些工具只有在深度访问公司系统时才能良好运行。你的副驾驶需要查看你的整个代码库，你的聊天机器人需要搜索内部文档。对于企业买家来说，这引发了严重的安全问题。这就是为什么这些应用程序从第一天起就面临严格的IT审查。要通过审查，它们需要安全的身份验证、访问控制、审计日志以及全套企业功能。从头构建所有这些是一项巨大的工程。这就是**Work OS**的用武之地。**Work OS**为你提供企业功能的即插即用API，让你的应用程序能够具备企业级能力，并更快地扩展市场。把它想象成企业功能的**Stripe**。**OpenAI**、**Perplexity**和**Cursor**已经在使用**Work OS**来加速发展并满足企业需求。请访问workos.com加入他们以及数百家其他行业领导者。立即开始构建。嘿，**Reed**，感谢你加入How I AI。

<details>
<summary>Original English</summary>

**Claire Vo**: AI has already changed how we work. Tools are helping teams write better code, analyze customer data, and even handle support tickets automatically. But there's a catch. These tools only work well when they have deep access to company systems. Your co-pilot needs to see your entire codebase. Your chatbot needs to search across internal docs. And for enterprise buyers, that raises serious security concerns. That's why these apps face intense IT scrutiny from day one. To pass, they need secure authentication, access controls, audit logs, the whole suite of enterprise features. Building all that from scratch, it's a massive lift. That's where Work OS comes in. Work OS gives you drop-in APIs for enterprise features so your app can become enterprise ready and scale up market faster. Think of it like Stripe for enterprise features. OpenAI, Perplexity, and Cursor are already using Work OS to move faster and meet enterprise demands. Join them and hundreds of other industry leaders at workos.com. Start building today. Hey Reed, thanks for joining how I AI.

</details>

**Reed Robinson**: 谢谢你邀请我，**Claire**。很高兴今天能和你聊天。

<details>
<summary>Original English</summary>

**Reed Robinson**: Thanks for having me here, Claire. Excited to chat today.

</details>

### Reed在Zapier的角色与AI工作流

**Claire Vo**: 我喜欢你描述你在**Zapier**的角色方式，我经常使用**Zapier**，我称之为**Chat PRD**的承重基础设施。你已经成功地进入了一个可以自己选择接下来在AI领域工作内容的角色。我很想听听你目前关注的重点，以及这如何影响了你对个人工作流的思考。

<details>
<summary>Original English</summary>

**Claire Vo**: What I love about how you've described your role at Zapier, which I use all the time, I say is like loadbearing infrastructure over at Chat PRD, is you've you've worked your way into a role where you get to kind of like pick what you're working on next in in AI. And so I'd love to hear about what you're focused on and how that's actually impacted how you think some about some of your personal workflows.

</details>

**Reed Robinson**: 当然。我经常把我的角色描述为**Zapier**的AI西西弗斯，只是把石头推上山，无论那块石头在哪里，无论那座山是什么。现在我最兴奋并选择投入大量时间在AI方面的工作是我们的**MCPs**方法。我们有服务器端的方法，也有客户端的方法。**MCPs**，我得说，我认为它仍然既被过度炒作又被人们低估了，因为它是一个对人们来说很难理解的概念。所以我鼓励那些对进入**MCPs**世界感到有点紧张的听众和观众，去思考：如果我能让我的AI聊天客户端、IDE或其他工具访问一堆工具来为我做事，我希望它们做什么，然后去寻找一个能做那件事的**MCP**。我认为你已经构建了一个产品，试图为**Zapier**用户抽象掉一些复杂性。你能给我们介绍一下你们在这方面的方法吗？

<details>
<summary>Original English</summary>

**Reed Robinson**: Absolutely. So yeah, the way I often describe my role is often like sisophist of AI at Zapier just pushing the rock up the hill wherever that rock may be and whatever the hill might be. Right now the thing I'm most excited about and where I'm choosing to spend a lot of my time working on AI is on our approach to MCPs. Uh so we've got you know a server approach but as well as what we're doing on the client side. you know, MCPs, I will say, uh, still, I think, un both kind of very hyped and underutilized by people. Um, because I think it's a it's a concept that's really hard to understand for folks. So, I'd encourage our listeners and our watchers who are a little nervous about waiting into the world of MCPs to just really think about, you know, if I could give my favorite AI chat client or IDE or whatever access to a bunch of tools to do things for me, um, what would I want them to do and then go hunt for an MCP that that does that thing. And I think you have have built a product that has tried to abstract away some of that complexity for Zapier users at least. Could you walk us through kind of a little bit of your approach there?

</details>

**Claire Vo**: 是的，绝对。我认为你总结得很好。我给人们的两个用例，让他们思考**MCPs**，就是：是的，绝对不要去想这个词。它真的就像是你的AI工具的**应用集成**。归根结底，我们看到人们想做的两件事是：第一，让他们喜欢的AI工具能够访问其应用程序中的**知识**；第二，让它们能够在这些应用程序中**实际执行操作**。所以，如果你使用的AI应用程序需要这些功能，那就去寻找**MCP**或现在常说的**连接器**。是的，**Zapier**采取的方法，对于不熟悉**Zapier**的人来说，我们是世界上最大的AI编排自动化平台之一。在**MCP**方面，这意味着我们在**Zapier**上有8000个应用程序，涵盖了你能想象到的所有SaaS应用程序。其中有30000个搜索和操作，所有这些都通过**Zapier MCP**暴露出来。所以你可以从你使用的所有应用程序中创建这些工具集合，并让它们访问**Claude**、**ChatGPT**、**Cursor**，以及所有现在有**MCP**服务器输入的地方。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, absolutely. And I I think you said it really well. The two kind of use cases I give people to just like I don't know think about MCPS is Yeah, definitely don't think about the word. It really just is like app integrations for your AI tools. And when it comes down to it, the two things we see people wanting to do is one giving their favorite AI tool access to knowledge that lives in their apps as well as giving them the ability to actually do things in those apps. So, it's really those are the two things that if like that sounds like something that you need in an AI app you use, look for MCP or connectors as it's often being called now as well uh for that. And yeah, the approach that Zapier took for anybody not familiar with Zapier. Uh we're like uh one of the world's largest AI orchestration automation platforms. And what that really means on the MCP side is we've got 8,000 apps on Zapier that are like every SAS app you can imagine. There's 30,000 searches and actions amongst that. And that's all exposed via Zapier MCP. So you can create these like collections of tools from all the apps you use and give them access to claude to chatbt to cursor to all the places that have kind of inputs for MCP servers today.

</details>

**Reed Robinson**: 你介意把它调出来，给我们展示一下它是什么样子吗？

<details>
<summary>Original English</summary>

**Reed Robinson**: Do you mind pulling that up and just showing us a little bit of what that that looks like? And while you're pulling up your screen, I do bless you MCP framework provider. Um, but we gota work we got to work on the branding here. So I think your description is exactly right like app connectors for for your AI is such a simpler way for the everyday consumer to understand this. Um, and so okay so you're showing us Zapier here for folks that are just listening and just can you walk through in oh you have 8,000 tools that or 8,000 apps you can add tools from. So this is your MCP server that you've added a custom set of tools that you're going to use pretty consistently either for a use case or just as a as an individual, right?

</details>

**Claire Vo**: 是的，绝对。当你在拉起屏幕的时候，我确实很感谢你，**MCP**框架提供者。但是我们得在这里改进一下品牌。所以我认为你的描述完全正确，比如“AI的应用连接器”对于普通消费者来说是更容易理解的方式。好的，你现在展示的是**Zapier**。对于那些只听不看的人，你能解释一下吗？你有8000个工具或者说8000个应用程序可以添加工具。所以这是你的**MCP**服务器，你已经添加了一组自定义工具，你将持续地使用它们，无论是为了一个用例还是作为个人使用，对吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Do you mind pulling that up and just showing us a little bit of what that that looks like? And while you're pulling up your screen, I do bless you MCP framework provider. Um, but we gota work we got to work on the branding here. So I think your description is exactly right like app connectors for for your AI is such a simpler way for the everyday consumer to understand this. Um, and so okay so you're showing us Zapier here for folks that are just listening and just can you walk through in oh you have 8,000 tools that or 8,000 apps you can add tools from. So this is your MCP server that you've added a custom set of tools that you're going to use pretty consistently either for a use case or just as a as an individual, right?

</details>

**Reed Robinson**: 是的，没错。它的工作方式是，我设置了一些我专门用于**Claude**的工具。**Zapier**的好处在于，与其他许多**MCP**服务器不同，我们更像是一个创建服务器的平台。所以你可以创建多个服务器，这意味着你可以创建特定的一组工具来与**Claude**、特定的代理、**ChatGPT**或**Cursor**一起使用，基本上是任何支持它的地方。这很好，因为对我来说，这些工具在不同地方是不同的。是的，你可以看到，或者对于那些看不到的人，你可以从**Slack**、**Evernote**、**Glean**、**Coda**、**Google Calendar**等地方添加工具，你还可以开始自定义这些工具。所以，无论你是想限制它们使用某些数据库，就像我为**Claude**的使用对**Coda**所做的那样，我确实将其用于特定的文档和特定的表格。在其他方面，比如**Evernote**，我想限制它只能写入特定的笔记本。所以它真的允许你自定义你的工具在不同地方的工作方式，这非常好，因为它就像一个单一的URL可以交给**Claude**并连接。现在，如果我切换到**Claude**，你可以看到**Claude**现在有一个单一的**Zapier连接器**，但在这个**Zapier连接器**中包含了所有我希望**Claude**能够访问的不同工具。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, exactly. And so the way that it works is I kind of set up the ones that I'm using specifically for Claude. Uh and so what's nice on Zapier side unlike many other MCP servers is we actually are more like a platform for creating servers. So you can create multiple and what that means is you can create specific sets of tools to use with claude or with a particular agent or with chatbt or with cursor uh really anything out there that supports it. Um, which is nice cuz for me those tools are different from one place to the other. And yeah, you can see or for those who can't see, uh, you can add tools from things like Slack, Evernotes, Glean, Koda, Google Calendar, and you can actually start to customize those tools as well. Um so whether you want to like restrict them to using certain uh databases like I've done with Kod I for my use within claude I really I'm using it for particular documents and particular sheets for instance um and other sides like with Evernote I want to restrict it to writing to certain notebooks. Uh so it really allows you to like customize the way you want your tool to work in different places. uh which is quite nice because then it's like a single URL to give over to Claude and connect to. And now if I switch over to Claude here, uh you can see that Claude now has like a single Zapier connector, but in that Zapier connector is like all of the different tools that I want Claude to be able to access.

</details>

### MCP工具设计与Claude项目

**Claire Vo**: 是的。对于更高级的**MCP**用户，我想要指出的一点，也是我一直面临的一个挑战是，当你添加这些独立的**MCP**时，比如有一个**Google Calendar MCP**，我相信也有一个**Coda MCP**，当你添加这些独立的**MCP**时，你必须在提供商层面进行配置。我喜欢这种方法的地方在于，这种**自定义工具集合**实际上是一种很好的方式来思考你需要的**MCP**工具，无论是普遍的还是针对特定用例的。然后对于**MCP**客户端，我认为我们最终需要更细粒度的工具控制，比如**工具调用**的优先级。我经常在**Cursor**中使用两个**MCP**，它们总是为了争夺我试图调用的那一个而竞争，因为我说它就像搜索项目一样。所有东西都有项目，它总是调用错误的**MCP**。所以我确实认为，围绕**MCPs**的元抽象将变得越来越重要，因为它们被更广泛地采用。这就是**Claire**关于**MCP**设计宣言。好的，你有了这个自定义的**MCP**。它为你解锁了哪些具体功能？你在这里使用哪些用例来实际完成更多工作？

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Yeah. And one of the things that I'll call out for the sort of more advanced MCP users and a challenge that I've always had is when you're adding these individual MCP, like there's a Google calendar MCP and I'm sure there's a KOD MCP is when you're adding these individual ones, you kind of have to do that configuration at the provider level. Um, and what I like about this approach is like this custom collection of tools is actually a really nice way to think about the MCP tools that you need. Um, either just in general or for a specific use case. And then for um, MCP clients out there, I just I think we're going to need at some point more and I know you're working on this, but like you just need more granular control over tools pri I mean like priority. I think of tool calling is really important. I have um two MCPs that I use really frequently in cursor and they're always like competing for which one I'm trying to call because I say it's like it's like search projects. Everything has projects in it. Always calls the wrong wrong MCP. And so I do think like the the meta abstractions around MCPS are going to start being more important as they become more adopted. So that's Claire's uh manifesto on MCP MCP design. All right. So, you have this custom MCP. I mean, what are specific things this unlocks for you? So, what use cases are are you using here to actually get more work done?

</details>

**Reed Robinson**: 是的。对我来说，它主要帮助我处理那些我不喜欢做的事情。例如，你刚才提到的一点是，模型今天选择工具的能力有点模糊。我认为**Claude**是一个非凡的平台。他们在**工具调用**方面做得非常出色。对于任何听众来说，一个技巧是：查看**Claude Projects**。特别是，你可以在**Claude Projects**中做的一件事是为用例提供非常详细的指令。所以，例如，我将在这里分享我的屏幕，但我有一个项目是关于我如何记录和查找**CRM**中的数据。我实际上告诉它应该如何使用工具，以什么顺序使用工具，以及在这些工具中创建记录时哪些数据应该去哪里。所以，当我在**Claude**中尝试做事情时，我实际上可以说：“哦，我正在做**CRM**相关的事情。我将选择我的**CRM项目**，然后发送一条消息。”现在，**Claude**按顺序执行许多不同工具的能力大大提高了。所以，如果有人遇到这些问题，我强烈建议尝试**Projects**。强烈推荐。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah. So, for me, there's like things that I don't love doing um is really where it helps me. Uh so, one like and for one of the things you just touched on, which is like the model's ability today to pick which tool is a bit murky. Um I think Claude is a phenomenal place. They've done a great job with tool calling. One of the tricks for anybody listening uh check out cloud projects. Uh in particular, one of the things that you can do in cloud projects is provide very like detailed instructions for use cases. And so for instance, I'll show I'll share my screen here, but I have one that's all about the way I like logging and looking up data from CRM from our CRM for things. And I've actually told it like how it should use tools, in which order it should use tools, what data should go where when it's creating records in those with those tools. And it when so then in Claude when I'm trying to do things, I can actually be like, oh, I'm doing a CRM thing. I'm actually going to go ahead and select my CRM project and then shoot over a message. And now Claude's ability to like execute across many different tools sequentially uh is so much better. Uh, so I'd highly recommend if anybody's like running into those things, try out projects. Um, highly recommend it.

</details>

**Claire Vo**: 是的，我听很多人谈论使用**Claude Projects**来加载知识，但我从未听任何人谈论你刚才特别给出的例子，即使用**Claude Projects**来提供与**MCP**工具使用和工作流相关的具体指令。所以，各位听众，请注意。你可以在**Claude Projects**中做到这一点，可能在其他客户端也可以，只是为了提高你工具的使用效率。好的，你有了这个**Claude项目**。看起来你讨厌做的事情之一就是更新你的**CRM**。就像一个真正的客户经理。

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah, I've heard a lot of people talk about using cloud projects for knowledge, like loading it up with knowledge, but I haven't heard anybody talk about what you specifically gave as an example, which is use cloud projects to give specific instructions relative to MCP tool usage and a workflow. And so folks, listen up. You can do that in cloud projects um and probably other clients to just make your your use of your tools more efficient. Okay, so you have this cloud project. It looks like one of the things you hate doing is updating your CRM. Um like like a true account.

</details>

**Claire Vo**: 我确实告诉人们，**MCPs**被面向客户的团队严重低估了。面向客户的团队最讨厌做什么？更新**Salesforce**，我们讨厌它。我们讨厌它。所以，无论是为了销售用例、研究用例还是其他任何用例，保持良好的客户记录都非常繁琐。实际上，有很多很棒的**MCPs**可以做到这一点。所以，我很高兴看到这在你的工作流中是如何运作的。

<details>
<summary>Original English</summary>

**Claire Vo**: Um I I I do actually tell people um MCPs are highly underappreciated by customerf facing teams. Like what what do customerf facing teams hate doing? updating Salesforce, we hate it. We hate it. And so like, you know, keeping good customer records, whether it's for a sales use case, a research use case, whatever, is like really tedious and they're actually amazing MCPs out there to do this. So, uh, I love to see how how this works in your flow.

</details>

### 自动化会议准备与CRM更新

**Reed Robinson**: 是的，绝对。我做的第一件事是我的每日计划，它会浏览我的整个日历。其中一个好处是，我让它访问了内部的查找工具。例如，当我运行它时，它实际上可以查找我将要开会的人、他们的**Zapier**使用情况、他们公司的**Zapier**使用情况、我们过去与他们的销售互动，它能够遵循所有这些查找过程。然后，当它最终返回我的每日更新时，它会包含所有这些研究。所以，这又是一个我帮助我们很多销售团队设置的工具，我们实际上在参加活动时也一直在演示它，这很有趣。但在**CRM**方面，对我来说最大的一个实际上是我的会后笔记管理。我非常喜欢**Granola**，它是一个很棒的工具。但我遇到的问题是，有时我不想记录那些笔记，或者我不是每次都做。或者做起来可能非常繁琐。所以，我发现这里非常有帮助的一点是，我有一个**Claude项目**，其中包含大量关于如何记录这些数据、应该记录到哪里的指令。然后我可以进去实际选择那个项目。然后它能做的是，它应该能够访问所有工具，并开始运行它。现在这个会很有趣，因为我将项目配置为我们的生产数据库，它将尝试用一个不同的数据库。所以让我们看看这是否有效。但它应该会根据这个**Coda**文档检查，看看我安排了哪些面试，以及即将发生的事情。如果我回到我的小助手**Claude**这里，它会告诉我确实什么也没找到。然后它可以选择，你知道，开始做一些额外的事情，我已经教它使用我们的内部查找来找到这个人的信息。我现在跳过这个。不想在这里拉取实际内容。然后其他一些事情是**Glean**。现在我给它一个操作，也可以搜索我们的内部**Glean**工具，这很棒，因为我可以看到，哦，我们曾在**Slack**中讨论过这个客户，或者我们有**CSM**关于这次会议应该讨论什么的笔记。所以它帮助做了很多这样的事情。然后最终它会开始说，好的，这不存在。这是我根据会议笔记查找到的内容。让我去创建它并运行它。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, absolutely. So, we know first one of the first things I do is I have my daily planning one and that actually like goes through my full calendar and one of the nice things is I've given it access to like internal uh lookup tools. So, for instance, when I run this, it can actually look up the person I'm meetings with, uh, Zapier usage, their company's Zapier usage, our past sales interaction with them, and it's able to like follow the process of doing all that lookup, and then when it comes back with ultimately my daily update, it has all of that research included. So, again, really one that I've helped a lot of our sales team uh, get set up with, and we've actually been like demoing it uh, when we go to like events. Uh, that's been pretty fun. But yeah, on the CRM side, so let's say that I have the biggest one for me is actually my like postmeating notes management. Uh I I'm a big fan of Granola. They're a great tool. Uh but I struggle with the fact that sometimes I don't want to log those notes or I don't do it all the time. Um or it can just be really tedious to go about doing that. And so one of the things that I found really helpful here is I can I have like a cloud project that has a bunch of instructions on just how to log this data, where should it log, and then I can go in and actually select that project. Um, and then what it can do is it should be a it'll have access to all the tools and it'll start like running it through uh for this. And now this one's going to be interesting because I'm I have the project configured to like our production database and it's going to try it with a different one. So let's see if this works for that. But it should be checking against this kod document uh for things and seeing like what are the interviews I have scheduled and what are the things that are coming up. And if I go back to my little buddy claude here, it's going to tell me that sure enough nothing was found. Uh then it can choose to, you know, start doing additional things where I've taught it to like use our internal lookup to find this person's thing. Uh I'm going to skip this for now. Don't want to pull in actual stuff here. And then some other things is glean. Like now I've given it an action uh as well to search like our internal Glean uh tool which is awesome because then I could see like oh well we talked about this customer in Slack or we had notes from the CSM on what this meeting's supposed to be about. So it helps do a lot of that. And then eventually what it gets into doing is start to say like, okay, this didn't exist. Here's what I looked up based on the notes from the meeting. Like, let me go create that and run with it.

</details>

**Claire Vo**: 那会用什么来更新你的**Coda**？

<details>
<summary>Original English</summary>

**Claire Vo**: And that updates your KOD with what?

</details>

**Reed Robinson**: 哦，是的，那会用这些来更新**Coda**，我在这里给你们做个演示。基本上，我确实有的**Coda**，很多时候我都在研究我们的一些新产品或新功能。我会在这些小型的、专门的冲刺中进行客户研究。所以我们通常会在**Coda**中记录一些东西。我可能还需要更新我们实际的**CRM**，它会使用**HubSpot**。所以我会把它作为一个额外的工具，记录为会议活动。但在大多数情况下，我确保我有这次会议的记录：我见了谁，是否有下一步行动，下一步行动是什么。它会包含一些细节，比如如果有一个更大的机会，机会的细节是什么。你可以让它包含很多东西。我认为这就是为什么如果我回到提示语一秒钟，你会看到我有点像——我不知道我们的用户总是说他们训练模型。所以如果这对你有意义，你可以训练模型如何填充你的**CRM**字段，因为每个人的**CRM**字段都是独一无二的，对吧？大多数情况下没有人使用标准的通用**CRM**。人们喜欢他们的自定义字段。但是模型不知道这些自定义字段是什么，以及这些选项是什么。所以，这又是一个很好的方法，让它熟悉你并专门为你工作。

<details>
<summary>Original English</summary>

**Reed Robinson**: Ah, so yeah, that updates the COD with like and this is I'm doing a demo in here for y'all. Um, essentially like the KOD that I do have is a lot of the times I work on some of our like new products or new features. I'm doing like customer research in these like smaller dedicated sprints. And so we typically will have something in KOD. I might also need to update our actual CRM which will use HubSpot as well. So I'd have that as like an additional tool to log it as an activity on the meeting. But for the most part, I'm making sure that I have a record of this meeting. Uh who I met with, what if there were next steps, what were the next steps. Uh it'll include some details on like what is if there's a bigger opportunity, like what are the opportunity details. um you can really get it to include a lot of things. And I think that's where if I go back to the prompt for a second, uh things like this here where you'll see I t I kind of like I don't know our users always say they train the model. So if that makes sense to you, you can train the model uh on how to populate your CRM fields because everybody's CRM fields are unique, right? Like nobody uses uh standard cookie cutter CRM for the most part. Um folks love their custom fields. Um, but models don't know what those custom fields are and what those choices are. So, great way again just to get it to be familiar with you and working specifically for you.

</details>

### 确定性工作流与指令性代理

**Claire Vo**: 我认为这里真正有趣的是，作为一个**Zapier**高级用户，我也有一个类似的工作流，就是我获取**Granola**的转录文本。我在**Zapier**中使用**Granola**应用程序，但我是在标准的工作流构建器中映射出来的。所以，我现在看到这个，我觉得我一直在做低效的任务，就是说：“好的，如果这个，查找这个记录；如果记录不存在，就做那个；如果记录存在，就做这个。”所以我在**Zapier**中有一个非常类似的**CRM**记录更新流程，但它是一个非常循序渐进的、**确定性工作流**。我喜欢这个地方，而且我应该做得更好，因为我应该像AI的仙女教母一样，你实际上可以用自然语言描述那个流程。我知道这一点，我一直都在使用代理，但要打破那种肌肉记忆很难，即区分这是一个**确定性工作流**还是一个**指令性代理**，即使它有权访问相同的工具并能做同样的事情。那么，你有没有发现哪种路径更脆弱或更不脆弱？也就是说，这种**MCP**代理指令部分是否对你的数据复杂性更具弹性，或者你发现它比那些精心设计的流程失败的次数更多或更少？

<details>
<summary>Original English</summary>

**Claire Vo**: What I think is really interesting here again as like a power Zapier user is I have a similar flow which is I take granola transcripts. I use the granola um app in Zapier but I have mapped this out in the standard workflow builder. So I have done the I think now that I'm seeing this the inefficient task of saying okay like if this look up this record if the record doesn't exist do that if the record does exist do this and so I have this like very similar CRM record updating flow in Zapier um but it's very step-by-step kind of like deterministic workflow and what I like about this and I should be doing better because I'm supposed to be like fairy godmother of AI I you can actually just in natural language describe that flow and I know this I use agents all the time but it is hard to break that muscle memory of like this is a you know a deterministic workflow versus an instructive agent even if it has access to the same tools and can do the same things. And so have you found that one one path or the other is more or less brittle? Meaning like is is this actually more resilient this sort of like MCP agentic instructions piece more resilient to the complexities of your data or do you find that it fails more or less than like kind of these nice uh netted out workflows?

</details>

**Reed Robinson**: 是的，这是一个很好的问题。我认为在可靠性或它们失败的地方，它们各有优缺点。异步处理事情的优点是肯定会花费更长的时间。目前**MCP**方面最大的挑战之一是它们不能花费太长时间。所以如果你有一个查找过程可能需要七分钟，那在这里就行不通。在**确定性工作流**领域，你可以开始做更多这样的事情。但老实说，另一个重要的区别是，它真正归结为一点，因为**Zapier**也有一个代理产品，你也可以把它做成代理。但它真正归结为一点，就是将工具、知识和采取行动的能力赋予你使用的所有AI应用程序。这有点像旧的产品理念，你知道，在用户所在的地方与他们会面，对的时间对的地点。我发现这可能是最重要的事情，因为有很多次，如果你眼尖的话，你会看到我在这里的一个项目实际上是“创意发电机”。我有一个完整的项目，连接到不同的表格等等，当我只是在一个话题上进行头脑风暴时，它就会研究我们是否探索过类似的想法，或者这可能在哪里相关，并且它有更多的训练，更多的提示来挑战我，以及某些方法来挑战我。所以，它真正归结为与人会面。我明确一点，我们从采用这种方法的企业那里看到的一件事是，他们试图确保这些工具能自动为所有员工工作，这样如果他们在整个组织中推广了**Claude**，当员工登录并连接到**Zapier**时，它就会拥有他们角色所需的工具，这些工具是由某个运营管理员或其他人员创建的。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, it's a very good question. I think the on the kind of reliability or where they fail, they're they've got their like pros and cons. The pros of doing things like asynchronously is certainly things can take longer. Uh like one of the biggest challenges right now with MCP stuff is they just they can't take that long. Um and so if you have like a lookup process that might take like seven minutes, like that's not going to work here. uh where that does you can start to do a lot more of that in like deterministic workflow land so to speak. Um the other big thing though to be honest like the distinction that I that what it really boils down to cuz Zapier also has an agents product where you could do this as an agent thing but really what this boils down to is just giving the tools giving the knowledge and the ability to take actions to the all the AI apps where you use them. It's kind of like the old product thing about like you know meeting your user where they are right uh right place right time and I have found that that is probably the biggest thing because there are so many times where I am you know like if for anybody with keen eyes you would have saw one of the projects I have here is actually even like idea jammer I have a whole project dedic hooked up to different tables and stuff like that for myself when I'm just like jamming on a topic and it it then will like research like have we explored similar ideas or where might this be relevant and it has more train more like uh prompting there to like challenge me and certain methodologies to challenge me on that. So, it really boils down to just like meeting people. And I'll be clear like one of the things we're seeing though from like enterprises that are that are adopting this is the fact that they're trying to make sure that these tools work for all of their employees like automatically so that if they've rolled out claw for the entire organization when they log in and they connect to appear it like has the tools that they should need for their role that it's created by some like ops admin or someone. Yeah.

</details>

**Claire Vo**: 嗯，那确实非常强大。

<details>
<summary>Original English</summary>

**Claire Vo**: Um, and that's been really powerful.

</details>

**Claire Vo**: 作为一名AI创始人，你习惯于冲刺以实现产品市场契合、下一轮融资或第一份企业合同。但对于AI初创公司来说，速度还不够。买家从第一天起就期望安全性、合规性和透明度。这就是为什么认真的AI初创公司使用**Vanta**。凭借为快速发展的AI团队构建的深度集成和自动化工作流，**Vanta**能让你快速做好审计准备，并通过持续监控确保你的模型、基础设施和客户不断发展。**Langchain**、**Writer**和**Cursor**等AI创新者通过尽早正确处理安全性，利用**Vanta**更快地扩展并达成更大的交易。听众可以在vanta.com/howi领取**Vanta**的1000美元特别优惠。

<details>
<summary>Original English</summary>

**Claire Vo**: As an AI founder, you're used to sprinting towards product market fit, your next round, or that first enterprise contract. But speed isn't enough for AI startups. Buyers expect security, compliance, and transparency from day one. That's why serious AI startups use Vanta. With deep integrations and automated workflows built for fastm moving AI teams, Vanta gets you audit ready fast and keeps you secure with continuous monitoring as your models, infra, and customers evolve. AI innovators like Langchain, Writer, and Cursor scaled faster and closed bigger deals by getting security right early with Vanta. Listeners can claim a special offer of $1,000 off Vanta at vanta.comhowi.

</details>

**Claire Vo**: 每种方法都有其优缺点。你提到了三种不同的方法：**MCPs**放在你实际工作的客户端中；**代理**在某种原生客户端中完成部分工作；然后是这些**确定性工作流**。你确实有一个工作流，它在更**确定性**的流程中使用了AI。那么，你能带我们了解一下那个工作流，并谈谈为什么你为这个特定用例选择了这种实现模型吗？

<details>
<summary>Original English</summary>

**Claire Vo**: There are pros and cons to each. You know, you mentioned three different methodologies. There's MCPs put in like the client where you're actually working. There's agents which do some of this and like sort of a native client. Then there's these deterministic workflows and you do have a workflow that does use AI within a more deterministic flow. So do you want to walk us through through that one and just talk about why you selected this kind of model of implementation for this particular use case?

</details>

### AI驱动的会议准备

**Reed Robinson**: 是的，绝对。对我来说，其中一件事是，我喜欢为很多客户访谈做准备，我们有很多数据。有时对我来说最尴尬的事情，或者说感觉尴尬的事情是，当我与客户通电话时，他们可能只是一个用户访谈，可能是通过**LinkedIn**预订的。他们可能是通过合作伙伴的推荐预订的。他们来自四面八方。我的**Calendly**链接似乎传播得相当广。有时我以前会接到电话，然后我会说：“我不知道你是谁。我不知道你的公司是否使用**Zapier**。我不知道他们是否……”有时他们会说：“哦，是的，我们既是客户又是合作伙伴。”然后我会想：“哎呀，我不知道。”所以我和我们的销售团队也遇到了类似的问题。所以我们做的第一件事是使用了**Data Bricks**，它存储了我们的大量数据并使其可用。所以他们构建了这一整套东西，允许简单的查找，你知道，给定一个电子邮件地址，返回一份完整的报告。所以这本质上是一个看起来很花哨的工作流。但它的要点是，对于我正在进行的会议，它会去获取那些需要时间的研究查找，然后它会将其解析成——它实际上使用了**Gemini**步骤，因为它处理了我正在使用的文档类型，并创建或技术上将其附加到该客户访谈的**Coda**页面。所以这对我来说真的很有帮助，因为现在当我进入会议时，我能得到这样的信息，这也是我做笔记的地方。所以，我实际上可以看到他们是如何使用它的，并获得一些非常清晰的信息，以便在会议前了解。我认为对于任何人，尤其是在大公司中，我们一直看到的最大挑战之一是，当他们开始使用AI时，他们使用的是没有额外上下文的基础模型。所以对他们来说，解锁的关键通常是如何让整个销售团队不仅使用AI来记录事情，而且在需要时从他们的**CRM**和数据系统中获取信息。这变得非常酷，因为，你知道，理论上我可以在**MCP**工具中放入**Data Bricks**查找，并将其交给**Claude**。这会变得非常复杂。不过，那些通常需要太长时间。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, absolutely. So one of the things for me again I like prep for a lot of customer interviews and we have a lot of data and sometimes one of the most embarrassing things for me or it feels embarrassing is when I get on a call with a customer and they're like just a user interview that may have booked it via LinkedIn. They may have booked it via a referral from someone at a partner, right? Like they come in from all over the place. Like my Calendarly link seems to like spread um decently wide. And sometimes I'll get on a call previously and I'd be like, I don't know who you are. I don't know if your company uses Zappier. I don't know if they, you know, and sometimes they're like, oh yeah, we're both a customer and a uh partner, right? And I'm like, whoops. I didn't know that. Um and so what I and what I worked with and our salesfacing team had similar issues. And so one of the first things that we did was we used data bricks which houses like a lot of our data and makes that usable. And so they built like this whole series of things that allows like just simple lookup for you know given an email address come back with like a whole write up of it. And so essentially this is a fancy looking workflow. Uh but the gist of it is that forever the meetings that I'm having it goes out fetches that like research lookup which takes time and then it deciphers that into a like it uses actually a Gemini step since it handles my like the the document type that I was working with and creates the or appends it technically to the KOD page for that customer interview. And so this is really helpful for me again because it's just like now when I'm going into my meetings, I get things like this where this is also where I'll like take some of my notes. Um, and so I can actually see like, oh, how they did use it and get some really like crisp things uh to walk into the meeting knowing. And I think for anybody especially in bigger companies like one of the biggest challenges we consistently see is they just like they're using when they start to use AI they're using like the base models with like no additional context aheaded and so the unlocks for them often become how do you get your whole sales team to not only like use AI to log things but also like fetch information from their CRM and from their data systems uh when and where they need it. Um, and that becomes really cool because, you know, technically I could then throw like data bricks lookups into an MCP tool and put that to claude. Um, gets really funky. Uh, those typically take too long though.

</details>

### Google Gemini在文件处理上的优势

**Claire Vo**: 是的。如果你是AI哲学家，我可能会推荐的一件事，我想你可能也会推荐，就是你要和数据工程团队搞好关系。这肯定没错。因为那是一个非常有用的、有趣的、丰富的信息来源。然后我想指出另一件事，可能有些人，特别是听众，会忽略，那就是如果你进入你刚才展示的用户上下文Zap，你选择了**Google Gemini**。我只想重申一下原因。因为我从不同的嘉宾那里听到了很多次，那就是**Google模型**特别擅长处理文件。它们喜欢文件。它非常擅长处理文件。所以**Gemini**非常擅长处理大型文件、文件、上下文、视频文件、音频文件。所以无论何时你遇到基于文件的挑战或用例，我看到很多AI高级用户都会选择**Gemini模型**。这就是驱动这个特定用例的原因吗？

<details>
<summary>Original English</summary>

**Claire Vo**: Yeah. Well, if you are uh the AI sophist, one of the things I might recommend and I think you probably would as well is you like buddy buddy buddy up to the data engineering team. That's for sure. Um, because that's a really useful source of interesting rich information. And then one other thing I want to call out that may have zipped by people, especially those that are listening, is if you go into your user context zap that you just showed us, you chose Google Gemini. And I just want to reiterate why. Um, because I've heard this a lot from different different guests, which is the Google models in particular are just like great at files. They love a file. They're it's it's great at files. So Gemini um really good at large files, files, context, video files, audio files. And so anytime you have sort of like a filebased um challenge ahead of you or or use case, I see a lot of um AI power users reaching for the Gemini models, is that what drove this particular use case?

</details>

**Reed Robinson**: 是的，你说的没错。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yep, you nailed it.

</details>

**Reed Robinson**: 是的，我们数据团队的输出实际上至今都是**PDF**。

<details>
<summary>Original English</summary>

**Reed Robinson**: Um yeah, the output from our data team is actually to date a PDF.

</details>

**Reed Robinson**: 它与此配合得非常好。实际上是**HTML**，所以我将**HTML**转换为文件，因为那样效果非常好，而且所需的token也少得多，这很好。

<details>
<summary>Original English</summary>

**Reed Robinson**: Um and so it works very well. um with that actually it's HTML that was the what so I convert the HTML to a file because then it works really really well um and a lot less tokens which is nice

</details>

**Claire Vo**: 是的，我的意思是，**Markdown**文件对于**OpenAI**和**Anthropic**模型，或者说**ChatGPT**和**Claude**的兴起很有趣。我确实认为**Gemini**采取了这种侧面角度，它就像，你知道，如果你有一个**PDF**，或者如果你有其他文件格式，那么你的模型。所以我认为对于那些想要提升实施水平的人来说，这真的很有趣。再次强调，不仅要将丰富的上下文输入到他们的AI用例中，还要真正理解主要商业模型的一些高级细微之处，这样你才能选择正确的模型，因为我猜如果你使用不同的模型，输出会更差，仅仅是因为数据输入的问题。好的，这非常非常有用。然后，你谈了很多关于客户互动的事情，对吧？**CRM**更新、会议，但你也收到了很多异步的客户反馈。包括我的，向那些收到我的支持和产品反馈工单的人致敬。谢谢你们。我感谢你们。你们总是非常非常及时地回应。你如何利用AI或系统地在如此庞大的客户群体中实现这种响应速度？

<details>
<summary>Original English</summary>

**Claire Vo**: yeah I mean it's interesting the ascendancy of the markdown file for you know the open AAI and anthropic models or chat GPT and claude and I do think Gemini has taken this like side angle where it's like you know you but if you have a PDF or if you have some other file format where where where your model so I I think it's really interesting for folks who want to go to the next level of implementation. Again, to not only feed rich context into their AI use cases, but also really understand a couple of the highle nuances of the major commercial models, so you're picking the right one because I I would guess you'd get a worse output with a with a different model just because of the the data input. Okay, that is super super useful. And then um so you've talked a lot about customer interactions, right? CRM updates, meetings, but you also get a lot of asynchronous customer feedback. Um, including from me and shout out, uh, whoever is on the receiving end of my support and product feedback tickets. Thank you. I appreciate you. You're always really, really responsive. How do you drive that responsiveness using AI or systematically across a pretty large customer footprint?

</details>

### 自动化客户反馈与FAQ更新

**Reed Robinson**: 是的，这很有趣。有很多事情。我将介绍我发现有影响的一件事，特别是对于我们正在推出的新产品。我想说一件事，我无法展示这个，但它确实与数据以及与数据工程建立更好的关系有关。我认为当我们开始在数据方面解锁越来越多的能力时，也是如此。就像有了**MCP**，就在本周，我们的团队已经达到了一个地步，我们现在能够正确地分析大量反馈，并实际在**Coda**中创建页面供团队审查，根据数据中出现的新趋势自动进行审查，这很有趣。但我们在这里做的另一件事也很有帮助，那就是让它对人们来说更容易搜索。这对于那些甚至不是核心产品构建团队的人也很有帮助，比如当我与销售团队或PMM团队合作，他们支持我们的发布时，他们经常会问：“嘿，我们最近收到了什么反馈？”或者“人们是否在使用这种用例？”他们有非常具体的问题，或者他们试图理解一些事情。或者当我们在深入研究一个话题时，设计师想要快速找出用户在错误日志系统方面遇到问题的时间，他们想找到，“嘿，我们能找到那个吗？”所以这里创建了一个小聊天机器人，它本质上非常简单，但它被喂入了大量的数据库，然后只是让它非常容易搜索。这是一个标准的聊天机器人RAG类型的东西，我不会详细介绍，但它对我们来说是内部锁定的，所有这些都非常有帮助。我们也在外部使用这种系统。所以你会看到，我们在这里做的一件事是，我有我们的**MCP**助手聊天机器人转录。所以我有这种面向最终用户的聊天机器人。你会看到它有这些知识来源，基本上就是我们的帮助文档，以及一个表格，它是一个**Google Sheet**类型的东西。这是我们的**Zapier**世界。我喜欢这个小系统，我将简单谈一下。你知道，对于任何处理数据和知识管理的人来说，保持其最新状态是困难的。我发现自己以前总是不断地回到这些机器人所拥有的知识来源，并试图每月或每季度手动更新它。但我最终发现的一个非常有效的系统是，我构建了一个——有一个Zap，基本上每次有已关闭的支持工单或已完成的聊天机器人转录时，它都会分析对话并尝试说出核心FAQ是什么，核心问题是什么，解决方案是什么（如果有的话），以及它是否已经在我们已有的知识库中。如果没有，请提出一个条目。然后我所做的就是，我有一个人工步骤，我可以在这里实际审查它想要提交的FAQ，我所要做的就是我可以编辑它，比如答案是什么，如果我批准它，它就会进入一个不同的数据库，也就是机器人实际使用的数据库。所以这是一个非常好的方法，我发现现在在许多项目上都能持续地快速迭代并保持这些东西的最新状态，这样用户就能更快地得到答案。这真的很好。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, it's fun. Um there's a lot of things I I'll walk through one of the things I have found impactful especially with like our newer products that we're pushing out. Um one thing I'll say I I can't show this but again does work with data and getting better relationships with data engineering. Um I think when we've started to like unlock more and more capabilities with with data on that front as well. Uh like with MCP just this week our team got to the point where we're now properly like analyzing a lot of feedback and actually creating uh pages in KOD for review uh for things for our team as we walk in based on like new trends that are emerging amongst the data uh automatically uh which is quite fun. But one of the things that we've also done here that really helps is just like making it more searchable for folks. Uh this is really helpful for like not even the core build team that's working on the product, but when I'm working with uh for instance like sales or I'm working with PMM uh that are supporting us with launches, they'll often have questions of like, hey, what feedback have we been receiving lately? Or like are people doing this sort of use case? Right? and they're just they have very specific questions or they're trying to understand something. Um or it's the designer who as we're diving into a topic, we want to like really quickly surface uh times where users have had uh issues with the like error log system and they want to like find like hey can we find that? And so created like a little chatbot here uh that essentially just like it's really simple but it it is fed with a bunch of like databases essentially and then just like makes that really easily searchable right um it's a standard chatbot rag type thing I won't go into it um in much detail but it's like internally locked down for us um and all those things which is really helpful um and and we also use this sort of system externally as well so like you'll And one of the things that we do here is I have our MCP helper chatbot transcripts. And so I have this kind of like enduserfacing chatbot. And you'll see it it has these like knowledge sources which are basically just like our help docs as well as one uh table which is like a Google sheet type thing. It's our sappier world of that. And I I love this little system and I'll just talk for a second. Uh and it's really just you know for anybody that's working with data and knowledge management things. it's difficult to keep it up to date and I found myself previously constantly like trying to go back to our knowledge sources that these these bots had and just like trying to manually keep it up to date on like a monthly or quarterly basis. Uh but one system I ended up finding that worked really well for me is I built um like one there's a zap somewhere that essentially every time there is a closed uh support ticket or if there's a a finished chatbot transcript it analyzes the conversation and tries to say like what is the core FAQ from this like what was the core issue what was the solution if any and is that already in the knowledge base that we had if not please propose an entry and so what I then do is I have my like human step here where I can actually review the FAQs that it wants to submit and all I have to do to I can edit it as well like what the answer is and if I approve it it goes over to a different database which is the one that the bot is actually using. Um so a really nice way that I have found consistently now on a number of projects just to like rapidly iterate and keep those things up to date so that users are just getting like their answers faster. Uh which is really nice. Yeah.

</details>

**Claire Vo**: 是的。我喜欢这一点是因为我经常告诉那些试图找出AI用例或实施AI解决方案的人，他们总是卡在“我正在做X，我如何使用AI继续做X或更快地做X？”这很好。我认为这就像，我已经在开会了，我如何让开会变得更容易一些？但我经常给人们的挑战是，假设你有一个拥有无限时间的完美团队。你的拥有无限时间的完美团队会做什么？你的拥有无限时间的完美支持团队会查看每一个支持问题，然后会去看看我们这里是否有正确的帮助台内容，如果没有，我们就会编写出色的内容，然后发布它，然后把它放到聊天中，就像在一个理想的世界里。但我们没有人生活在理想世界中，我们都非常忙。所以我认为这是一个很好的例子，它让你能够以更高质量的水平运作，而不仅仅是速度，而是更高质量的水平。然后，你创建的**高质量数据**越多，你就越能为你的客户提供有趣的AI解决方案，比如聊天机器人。所以，如果你正在寻找，比如，如果我有一个拥有无限时间的完美SDR团队，我会做什么？或者，你知道，10000个拥有无限时间的支持人员，我会做什么？开始思考这些用例，不要忘记把它们挑出来，因为我认为它们可以激发你团队内部一些有趣的想法，然后让你的团队发挥更高的杠杆作用。

<details>
<summary>Original English</summary>

**Claire Vo**: Well, what what I like about this is I often tell people who are trying to figure out use cases of AI or implement AI solutions is they really get stuck on like the I'm doing X. How do I use AI to continue to do X or do X faster, whatever? And that's fine. I think that's a like I I I'm already taking meetings. How do I make taking those meetings a little easier? But the challenge I often give people is let's say you had the perfect team with infinite time. What are the things your perfect team with infinite time would do in anyone's and your perfect support team with infinite time would look at every support question and would go see do we have the right help desk content here and if we don't let's write great content and then let's publish it and then let's put that in the chat like in an ideal but none of us live in ideal worlds we're super busy and so I think this is like a really good example of that where it allows you to operate at a next level of quality, not just like velocity, but a next level of quality. And then again, like the more highquality data you create, the more you can power interesting AI solutions to your customers like chat bots. And so, um, you know, again, anybody out there looking like if I had a full-fledged team of SDRs that were perfect and had infinite time, what would I do? Or like, you know, 10,000 support people with infinite time, what would I do? like start to think about those use cases and don't forget to to pluck those off because I think they can unlock some interesting ideas inside your team and then let your team act as higher leverage folks.

</details>

**Reed Robinson**: 我喜欢你那样说。我不知道这是否对任何人有帮助，但我经常告诉那些为此苦恼的人另一种方式是，如果你能在睡觉时运行**ChatGPT**，你会做什么？我发现这是一个很好的方法来帮助人们开始头脑风暴。我得说，在产品设计领域，我们很早就做了一个实验，有点像“疯狂填词”游戏，帮助发现用例等等，这是一个非常有趣的实验，因为它似乎确实帮助人们发现了他们想做的事情，但也促使他们思考自己的痛点，这真的非常引人入胜。所以，对于任何在产品中考虑这一点的人，可以尝试一种“疯狂填词”风格的AI赋能系统，用自由文本提问并提出后续问题。

<details>
<summary>Original English</summary>

**Reed Robinson**: I like the way you put that. The the other I don't know if it helps ever to anybody, but the other way I often tell folks that are struggling with that is like if you could run chatbt in your sleep, what would you do is you know I found a really good way to help people start brainstorming ideas. I will say as like a maybe aside on that on the product design world, uh we found we did one experiment really early on um that was kind of like Mad Libs to help discover use cases and stuff and it was a very interesting experiment in that it seemed to actually help people discover what they wanted to do but it also challenged them to think through like what their pain points were and it was really fascinating uh just to to experience. So, uh, for anybody looking at that in their products, try a Mad Libs style, uh, AI enabled system to like ask questions and ask follow-up questions with free form text.

</details>

### 总结与个人用例

**Claire Vo**: 让我们回顾一下你今天向我们展示的内容。我们有**MCPs**。特别是**Zapier MCPs**可以为你提供一套非常自定义的工具来调用。你喜欢**Claude**，你喜欢使用**Claude Projects**来提供工具调用顺序和指令，这样你就能获得高质量的输出。然后你真正关注的是，我听到你在节目一开始就说，避免你讨厌的事情，比如我们所有人都讨厌的更新**CRM**。还有我们都参加的即时会议，对吧？你刚开完一个会，然后又毫无上下文地进入下一个会。所以要确保你为此做好了准备。然后是客户反馈、支持反馈、FAQ、内部输入以及面向客户的帮助内容，形成一个良性循环。所以，我认为这对于任何花大量时间与客户打交道的人来说都非常棒，无论你是销售、支持还是产品经理，都能更好地做好准备，并且在浏览器中少打开几个标签页就能完成工作，这正是我们都想要的。

<details>
<summary>Original English</summary>

**Claire Vo**: Just to kind of take a step back and walk through what you what you showed us today, we have MCPs. Um, Zapier MCPS in particular can give you a really custom set of tools to call. You like Claude, you like using Claude projects to give instructions on tool calling sequence and instructions so you get really high quality outputs of that. And then you're really focused on um I heard you say very early on in the episode avoiding things you hate which is like all of us updating the CRM. Um you know attending what we all attend which are just in time meetings, right? you just get out of the next meeting and you you show up in the next one without context. So, making sure you're prepped for that. And then kind of this virtuous cycle of customer feedback, support feedback, FAQs, um you know, internal input, and then customerf facing uh help content as kind of a a happy happy circle here. And so, I think this is great for anybody who's spending a lot of time with customers, whether you're in sales or support or product. um to be better prepared um and and get stuff done with less tabs open in your browser, which is what we all want.

</details>

**Claire Vo**: 好的，**Reed**，我们现在要进行几个闪电问答，然后让你回去继续“推石头上山”。我的第一个问题是，我们看到了很多商业用例。你最喜欢的个人用例是什么？有哪些用例真的让你感到惊喜，无论是带来了快乐，还是真正解决了个人问题？

<details>
<summary>Original English</summary>

**Claire Vo**: Well, uh Reed, I'm going to we're going to do a couple lightning round questions and then we'll get you out of here back to um pushing the boulder up the hill. My first question for you is we've seen a lot of business use cases. What are like your favorite personal use cases? like what are ones that have really surprised you either by making you know really how sparking joy or just really solving a problem personally?

</details>

**Reed Robinson**: 是的，我很快会讲两个。第一，就解决问题而言，是**家庭日历规划**。对于任何有孩子和家庭的人来说，家庭日历是一个真实存在的问题。对我来说，困难在于我和妻子都喜欢家里有一个实体日历，我们不愿购买一个完整的数字相框。所以我们有一个实体日历，我们在上面写东西，但我喜欢用**Google Calendar**。如果它不在我的**Google Calendar**上，它就像不存在一样。特别是如果是一个家庭活动在正常工作日中间，那么别人可能会预订会议，那真的不好。所以我实际上有一个**Claude项目**叫做“家庭日历”。它有非常详细的指令，虽然不是很详细，但它基本上告诉它要查看哪个日历，如何添加事情，如果是一个在我儿子学校或其他地方的活动，如何在我的日历中留出时间来开车去和开车回来，如果是在工作时间。这样那段时间就被占用了。现在我所做的是，偶尔我会拍一张实体日历的照片，然后它会通过**Zapier MCP**使用各种查找、更新和创建**Google Calendar**的操作，然后就完成了所有这些。我喜欢这个。这可能是我最喜欢的事情之一。除此之外，最近他们有一个大的V5更新。我一直很喜欢和我的儿子以及他附近的其他朋友一起用它。我们一起创作了很多歌曲。我只是对**Claude**说：“嘿，**Claude**，你要为我的儿子Leo写一首儿童歌曲。他四岁。这是我们今天做的事情。”我只是告诉它我们做了什么。我儿子坚持要有一些便便和放屁的笑话。所以我就说：“好吧，你需要有一些便便和放屁的笑话。”我儿子至少在**Suno**上听了这首歌14次。我们把它给了他的一个保姆，她和他们一起不停地听了一个小时。我们和他的朋友们也这样做过，他们互相为对方创作歌曲，这真的很有趣。另一件事是，附近一些大一点的孩子，比如一个快10岁的女孩，她通过这个学习了**提示工程**，因为她说：“哦，它说了这个，但那不对。”我就说：“好吧，你必须具体说明，你必须指示它。”所以我给了他们一块白板和一支白板笔，他们就在上面写他们的小提示。然后我为他们输入。所以这很有趣，我想，我不知道，希望能有一点教育意义。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, I'll touch on two real fast. Number [clears throat] one, in terms of solving a problem, family calendar planning. Uh for anybody that has kids and families, like family calendar, it's a real thing. Um and for me, the struggle is uh my my wife and I both like a physical calendar in the house and we're reluctant to get like a full digital frame thing. Um, so we have a physical one that we write things on, but I like live by Google calendar. And if it's really not my Google calendar, it like doesn't exist. Um, and particularly if it's a family event that's in the middle of the like a normal day, then someone can book a meeting over and that's really not good. And so I actually have a claw project called family calendar. It has really detailed instructions on it's not too detailed but it basically tells it like which calendar to look at uh how to add things if it's an event that's at my son's school or somewhere to leave time in my calendar to drive there and drive back if it's you know during the business hours. Uh so that that is blocked. And now what I do is like occasionally I just take a picture of the physical calendar and then it uses the various like find and update and create actions for Google calendar through Zapium MTP and just like does all of it. Um and I love that. Um that's probably like one of the greatest things. Uh other than that these days uh they had a big V5 update recently. I have been loving it with my son and his other like friends in our neighborhood. Uh we've made a lot of songs together. I literally just like talked to Claude and I was like, "Hey Claude, you're gonna write a kid song for my son Leo. He's four. Here's what we did today." And I just like told it what we did. And my son insisted that it have poop and fart jokes in it as well. And so I was like, "Well, you need to have some poop and fart jokes." Um, and my son has listened to this at least on Suno alone 14 times. Uh we gave it to one of his babysitters and she they listen to together like non-stop for an hour. Um and we've done this with like his friends and they've made songs for each other and it's really fun and it's the other thing too is like some of the older kids nearby like uh one of the girls like 10 almost 10 and she's been learning about like prompting through this because she was like oh it said this but like that's not right. I and I was like well you got to be specific in this and you got to like instruct it. And so I have I gave them like a a whiteboard with a dry erase marker and they're just like writing out their little prompts. Um and then I input them for them. Um and so that's been a lot of fun and I think I don't know hopefully a little bit educational.

</details>

**Claire Vo**: 我必须，我必须把我们带回到我们最初的话题，那就是**Suno**有**MCP**吗？

<details>
<summary>Original English</summary>

**Claire Vo**: I have to I have to just uh bring us back to our starter topic which is does Sunno have an MCP?

</details>

**Reed Robinson**: 这很好。

<details>
<summary>Original English</summary>

**Reed Robinson**: That's good.

</details>

**Claire Vo**: 团队，我也是一个**Suno**的超级用户。我喜欢它。想象一下，你可以为你的客户准备会议，然后给自己一个友好的小曲来记住他们谈论的内容。

<details>
<summary>Original English</summary>

**Claire Vo**: Team I I am also a uh extreme Puno power user. Love it. And imagine imagine you could take your customer prep meeting and just give yourself like a friendly jingle to remember what they're talking.

</details>

**Reed Robinson**: 你笑了。但我实际上做了那个。我拿了我们的**MCP**销售培训课程。我实际上拿了**Zoom**的转录文本和幻灯片，然后我把它给了**Claude**，我说：“为这个写一首流行歌曲。”

<details>
<summary>Original English</summary>

**Reed Robinson**: You laugh. But I've actually I did that with I took our I took our MCP sales training session. I actually took the transcript from Zoom along with the deck and I gave it to Claude and I said come up with a pop song I think for this

</details>

**Reed Robinson**: 我实际上分享了它，我们的一些销售团队和产品团队实际上听了它并且非常喜欢。我的意思是，是的，我们用音乐教孩子，人类听音乐的时间比阅读的时间长得多。所以探索这个很有趣。我可能比你更胜一筹，我拿了一个工程事故的事件事后分析报告，然后把它做成了一首朋克歌曲，关于我们如何需要解决根本原因问题。它叫做“Renew theerts”。它是一个非常，它是一个B级认证的热门歌曲。所以，我们必须制作一个播放列表，并把它放在节目笔记中。好的。然后还有一个我喜欢的用例。我想确保我们花几分钟时间讨论一下**NotebookLM**。

<details>
<summary>Original English</summary>

**Reed Robinson**: and I've actually shared it and a couple of our like sales team and product team have actually listened to it and really liked it. Um I mean yeah we we teach kids with music and humans have been I don't know music people much longer than we've been reading people. Um so it's it's fun uh to explore that. I might I might have you beat which is I took a incident postmortem for like an engineering incident and then made it was like a punk song about how we needed to solve the root cause issues. Um and it was called Renew theerts. It was it's a very it's a b it's a b certified banger. So um we'll have to put a playlist together and put it in the show notes. Okay. And then there's one last use case which I love. I want to make sure we spend a couple minutes on it with notebook LM.

</details>

**Reed Robinson**: 是的，我认为**NotebookLM**我个人用于学习。我把很多东西放进去学习，但我从一个用例中获得了很大的价值，也从我妻子那里获得了许多“好丈夫积分”。那就是她最近在找工作。我为她做的所有事情是，当她获得面试机会时，我会获取他们的招聘页面，获取职位描述，我会找到更多信息。我有一个用于音频概述的提示，内容是：“你正在为**Anna**准备这次面试。确保它是针对**Anna**的。”她在面试前听了所有这些，她在整个过程中不断收到反馈，说她是“信息最充分的申请人”。她清楚地了解这个领域，因为我会告诉她竞争对手的情况，他们在营销领域做什么，以及当前的趋势。她喜欢它还说：“所以**Anna**，我们今天将为你做准备。”这真的很可爱。但它对她来说效果非常好。她最终得到了她真正想要的理想工作。是的，这非常棒。所以，我强烈推荐这个。对于任何有朋友、家人正在面试的人来说，这也是一个很好的加分项，你可以真正帮助他们。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, this one I I think Notebook LM I use personally for learning. Uh, I put like a lot of things in it to learn, but I got one that I got a lot of value from, uh, and a lot of brownie I bonus husband points from with my wife. Uh, which was she was recently like job searching. And what I did for her on all of them was like when she got the interview, I would take their like careers page. I would take the job thing. I would find like more information. And I had like a prompt I used for the audio overview that was like, "You are preparing Anna for this interview. Like make sure it's specific to Anna." and she listened to all of these before and she like constantly got feedback throughout the process that she was like the most informed applicant. She clearly understood the space cuz I, you know, would always tell like talk about the competitors, what they're doing in the marketing world and what are trends going on there. Um, and she loved that it was also like so Anna, we're going to prepare you today. It was really cute. Um, but it worked exceptionally well for her. um she ended up getting like the ideal job that she really wanted. Um and yeah, it was pretty awesome. So, highly recommend that. It's also great bonus points for anybody out there with friends, family, interviewing, um the ways that you can really help them.

</details>

**Claire Vo**: 好的，我得做一些帽子，就像我的爱语是**个性化AI播客**。这非常好。这非常好。丈夫们，妻子们，伴侣们，通过AI为你们的伴侣需要的事情做知识工作来表达你们的爱。好的，这太棒了。这真的很有趣。侧边栏打开了这么多标签。我相信你还能展示很多其他东西，**Reed**。谢谢你的加入。我们可以在哪里找到你，我们如何提供帮助？

<details>
<summary>Original English</summary>

**Claire Vo**: Okay, I'm going to have to make hats, which is like my love language is personalized AI podcasts. It's very good. It's very good. Husbands out there, uh, wives out there, partners out there, demonstrate your love by doing knowledge work via AI for the things that your your partner needs. Okay, this is this is amazing. This is really fun. Um, so many tabs opened in the sidebar. I'm sure so many other things you could show, Reed. Thanks for joining. Where can we find you and how can we be helpful?

</details>

**Reed Robinson**: 是的，你可以在**LinkedIn**上找到我。我在**LinkedIn**上最活跃。我确实喜欢**LinkedIn**。所以你可以在**LinkedIn**上找到我，**Reed Robinson**。你很快就能找到我。如果你能提供帮助，老实说，我非常喜欢产品反馈。尝试一下我今天谈到的一些事情。告诉我什么有效，什么无效。告诉我你希望有什么。我也喜欢听那些思考这一切未来的人的意见。那些尝试过一些古怪事情的人，他们会说：“嘿，如果我能做到这一点就好了。”我喜欢那种大局观的思考。所以如果你在工具、代理和自动化方面有一些古怪的想法，请告诉我。如果没有，是的，尝试一下**Zapier MCP**。给我们一些反馈。我非常乐意收到任何反馈。

<details>
<summary>Original English</summary>

**Reed Robinson**: Yeah, where you can find me, LinkedIn. I'm most active on LinkedIn. Um, I do love the LinkedIn. Uh, so you can find me Reed Reid Robinson um on LinkedIn. You'll probably find me pretty quick. Um, if you can help, honestly, I'm a sucker for product feedback. Like, try some of the things I've talked about today. Tell me what worked. Tell me what didn't work. Tell me what you wish existed. Um, I also love hearing from the folks who are thinking about the future of all of this. Um, who've tried like wacky things and they're like, "Hey, if only I could do this." Um, I'd love that. like bigger picture thinking stuff as well. So if you've got some like wacky ideas in the world of tools and agents and automation stuff, let me know. If not, yeah, try Zap your MCP. Give us some feedback. Would love any and all.

</details>

**Claire Vo**: 太棒了。非常感谢你，**Reed**。我真的很感激。

<details>
<summary>Original English</summary>

**Claire Vo**: Amazing. Well, thank you so much, Reed. I really appreciate it.

</details>

**Reed Robinson**: 非常感谢你邀请我，**Claire**。

<details>
<summary>Original English</summary>

**Reed Robinson**: Really appreciate you having me on Claire.

</details>

**Claire Vo**: 非常感谢大家的观看。如果你喜欢这个节目，请在**YouTube**上点赞并订阅，或者更好的是，留下你的评论。你也可以在**Apple Podcasts**、**Spotify**或你喜欢的播客应用程序上找到这个播客。请考虑给我们评分和评论，这将帮助其他人找到这个节目。你可以在howiaipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>Original English</summary>

**Claire Vo**: Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review, which will help others find the show. You can see all our episodes and learn more about the show at howiaipod.com. See you next time.

</details>