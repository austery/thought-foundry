---
area: tech-engineering
category: ai-ml
companies_orgs:
- Honeybook
- Brex
- OpenAI
- Google
- Google DeepMind
- San Francisco Giants
date: '2025-12-08'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
people:
- Mihal Pled
- Clarva
products_models:
- ChatGPT
- Gemini 2.5 Pro
- Gemini 2.5 Flash
- Gemini 2.5 Flash Light
- NotebookLM
- Claude
- Slackbot
project:
- ai-impact-analysis
- entrepreneurship
- personal-growth-lab
series: ''
source: https://www.youtube.com/watch?v=-lMItuklFco
speaker: How I AI
status: evergreen
summary: 本期节目深入探讨了如何利用ChatGPT的智能代理模式、自定义GPTs和NotebookLM等先进AI工具，解决企业和个人在日常运营和生活中面临的实际问题。嘉宾Mihal
  Pled分享了三个创新用例：通过智能代理模式自动化领英（LinkedIn）招聘流程，显著提升候选人筛选效率；利用AI构建详细的客户画像，为市场调研和产品决策提供即时洞察；以及通过日历自动化功能，有效优化通勤停车策略，避免高峰期高昂费用。节目强调了AI在提高效率、提升工作质量方面的巨大潜力，并讨论了内部工具团队在AI时代的重要性及有效的提示词工程技巧。
tags:
- ai-agent-mode
- llm
- workflow-automation
title: ChatGPT智能代理模式：招聘、客户画像与通勤优化
---

### 开启AI代理模式：你的“小帮手”

Clarva: 我们将从一个在“How I AI”节目中尚未出现过的话题开始，那就是ChatGPT的**代理模式**（Agent Mode: 一种允许AI执行多步骤任务并与外部环境交互的运行模式）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: We're going to start with something that we haven't actually seen on How I AI yet, which is agent mode in ChatGPT.</p>
</details>

Mihal: 我的用例是与我们的招聘团队有关。他们工作流程的一部分是浏览大量的**领英**（LinkedIn: 一个全球性的职业社交平台）个人资料，寻找相关的候选人。这需要花费大量时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: My use case was with our hiring team. Part of their workflow is to browse through many LinkedIn profiles and search for relevant candidates. It takes a lot of time.</p>
</details>

Clarva: 让我们来谈谈提示词。我很想听你讲讲你是如何构思其结构，使其在代理模式下发挥作用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Let's talk about the prompt. I'd love for you to go through how you thought about structuring it to make it effective with the agent.</p>
</details>

Mihal: 我想要一个“小帮手”。我是一名招聘人员，我想要一个像我一样的人。所以我首先告诉它“你是一名IT招聘人员”，然后我描述了我想要它做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: I want a little helper. I'm a recruiter. I want someone who is like me. So, I started by telling it you're an ID recruiter. And then I described what I wanted to do.</p>
</details>

Clarva: 我喜欢你称它为“你的小帮手”，因为我们不都想要一个AI小帮手吗？欢迎回到“How I AI”。我是Clarva，一位产品负责人和AI狂热者，致力于帮助大家更好地利用这些新工具进行构建。今天，我邀请到了来自Honeybook的Mihal Pled，他是一名技术运营工程师，正在构建大量的内部工具和自动化流程，以简化团队工作，减少摩擦。Mihal将向我们展示ChatGPT的一些高级功能，包括代理模式，如何复制他们团队中不止一个，而是五个不同角色的AI身份，以及如何利用ChatGPT为我的通勤节省大量时间。我对这一集感到非常兴奋，让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I love that you called it your little helper because don't we all want an AI little helper? Welcome back to How I AI. I'm Clarva, product leader and AI obsessive here on a mission to help you build better with these new tools. Today I have Mihal Pled from Honeybook, their technical operations engineer who's building tons of internal tools and automations to make their team's life easier and reduce friction. Miha is going to show us some advanced features of ChatGPT, including agent mode, replicate not one but five of their personas as AI identities, and save me a lot of time on my commute using ChatGPT. I'm really excited about this episode. Let's get to it.</p>
</details>

本期节目由Brex赞助播出。如果你正在收听本节目，你已经知道AI正在以实际有效的方式改变我们的工作方式。Brex正在将同样的力量带入金融领域。**Brex**（Brex: 一款专为创始人打造的智能金融平台）是专为创始人打造的智能金融平台。通过在后台运行的自主代理，你的财务堆栈基本上可以自行运行。卡片发行、费用报销和欺诈拦截都能实时进行，无需你操心。将Brex的银行解决方案与高收益国库账户结合，你将拥有一个帮助你更智能地消费、更快速地行动并自信扩展的系统。美国三分之一的初创公司已经在使用Brex。你也可以访问bre.com/howiai加入。Mihal，非常感谢你加入“How I AI”。我很高兴看到你将分享的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This episode is brought to you by Brex. If you're listening to this show, you already know AI is changing how we work in real practical ways. Brex is bringing that same power to finance. Brex is the intelligent finance platform built for founders. With autonomous agents running in the background, your finance stack basically runs itself. Cards are issued, expenses are filed, and fraud is stopped in real time without you having to think about it. Add Brex's banking solution with a high yield treasury account, and you've got a system that helps you spend smarter, move faster, and scale with confidence. One in three startups in the US already runs on Brex. You can too at bre.com/howiai. Mihal, thank you so much for joining How I AI. I'm excited to see what you have to share.</p>
</details>

Mihal: 非常感谢邀请我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Thank you so much for having me.</p>
</details>

Clarva: 我们将从一个在“How I AI”节目中尚未出现过的话题开始，那就是ChatGPT的代理模式。所以我想知道你是否能直接深入探讨你试图解决的问题是什么，以及为什么这种代理模式，这种代理式浏览，是解决你所面临问题的方案？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: We're gonna start with something that we haven't actually seen on How I AI yet, which is agent mode in ChatGPT. And so I'm wondering if you can just go ahead and dive into what was the problem that you were trying to solve and why was this agent mode, this agentic browsing the solution to the problem you're having?</p>
</details>

Mihal: 我们的问题，嗯，你知道，和我们的客户面临的问题一样。你必须完成你的工作。你有一份你真正热爱的工作，你拥有你的专长和专业知识。然而，你却花费大量时间做那些单调、无需思考、手动重复的工作，以便获取所需信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Our problem was um you know same as same as our customers are having. Uh you have to do your job. You have a job that you really love doing and you have your proficiencies and and expertise. However, you spend a lot of your time doing the the um mundane thoughtless uh manual repeating work in order to do uh to get the information that you need.</p>
</details>

### AI在招聘中的应用：ChatGPT智能代理模式

Mihal: 我的用例是与我们的招聘团队有关。作为一名招聘人员，当你收到一份需要招聘的职位描述，需要寻找候选人时，他们工作流程的一部分就是浏览大量的领英个人资料，寻找可能与职位描述相关的候选人。这需要花费大量时间，可能需要数小时浏览个人资料，并逐一核对他们正在寻找的所有特征。所以我想为他们分担这份负担，而ChatGPT的代理模式恰逢其时。我们都在谈论代理是什么、代理做什么以及如何在聊天中使用它们。这非常容易理解。你只需打开与ChatGPT的聊天，然后添加一条指令，通过工具栏非常简单地将其切换到代理模式。一旦进入代理模式，它就可以接收提示词，或者你可以使用特定的提示词告诉它，不仅要在线搜索信息，还要为你执行操作。在这种情况下，我为什么需要它呢？因为我需要它登录领英。我不想它只是在领英上搜索公开可访问的个人资料。那不是我需要的信息。所以我需要它登录领英，我需要它执行搜索，我需要它浏览个人资料并查找我想要给它的限制条件。这些限制条件是由实际的招聘团队提供的，他们将其作为寻找潜在候选人的要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: So my use case was with our hiring team and as a recruiter when you get a job description that you need to recruit to find candidates for part of their part of their uh workflow is to uh browse through uh many LinkedIn profile and search for uh relevant candidates that may be uh relevant for the job descriptions and it takes a lot of time can be hours of browsing through profiles and going through all of the characteristics that they're looking for. So I wanted to take that load off of them and uh Chad GPT agent mode came just in time. We all talk about what agent is and what agents do and how we can use them in chat. It's very uh simple to understand. So you just open a chat with chatgpt but then you add an instruction and turn it into an agent mode very simply from the toolbar. And once it goes into agent mode, it means that it can take the prompt or you can actually use specific prompts to tell it not just to search for information online but also to perform actions for you. And why did I need it in this case? Because I needed to log into LinkedIn. I don't want it to just search for profiles uh on LinkedIn just just profiles that are publicly accessible. That's not the information that I need. So, I needed it to log into LinkedIn and I needed it to perform search and I needed it to go through the profiles and and look for the restrictions that I want to give it. And those restrictions were provided by the actual uh hiring team that they actually use it as uh requirements for potential candidates that they find.</p>
</details>

Clarva: 是的。我们来快速谈谈提示词，因为我觉得这个提示词很有趣。我很想听你讲讲你是如何构思其结构，使其在代理模式下发挥作用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Yeah. Let's talk about the the prompt really quickly because I think this prompt is is interesting as I'm reading it. And I'd love for you to go through how you thought about structuring it to make it effective with the agent.</p>
</details>

Mihal: 当然。我通常会以告诉GPT它的角色来开始我的提示词。所以在这里我告诉它“你是一名IT招聘人员”。我想要一个“小帮手”，对吗？我是一名招聘人员，我想要一个像我一样的人来协助我的工作。所以我首先告诉它“你是一名IT招聘人员”。然后我描述了我想要它做什么，任务是什么。登录我的领英账户。如果尚未登录，让我控制并登录。这是可能实现的。找到最多五个领英个人资料，其中当前职位和职位描述与所附的职位描述相符。在这里，我只是上传了一份职位描述。在这种情况下，它是一个工程职位。好的。所以我有职位描述，我有“你是一名IT招聘人员”。这是你的工作。这是任务，我提供了一个完整的任务描述，实际上描述了一个真正的IT招聘人员会做什么。然后我添加了限制或特殊说明。无论你怎么称呼它们，这些都很重要，因为它们提供了——不要只是搜索与描述匹配的东西，而是要以我们自己的方式来做。当我们的招聘团队进行搜索时，他们有特定的标准。所以我收集了这些并将其作为限制列表添加。我也可以称之为说明，结果会是一样的。所以候选人必须来自以色列，因为这个职位是在以色列招聘的，或者目前在一家以色列公司工作，并且他们必须在过去3个月内活跃在领英上，因为这是我们招聘团队正在寻找的。而且当前职位必须与空缺职位在头衔和资历上足够接近。另外一个特别之处是，候选人必须在其当前工作场所工作超过一年，或者他们可以是失业状态，但失业时间不超过一年，并且在上一份工作场所工作超过一年。所有这些都不是我发明的，它们都特意取自我们的招聘流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Of course. So I usually start my prompts uh begin my prompts with telling the GPT its role. And so here I told it you are an IT recruiter. I want a little helper, right? I'm a recruiter. I want someone who is like me that will will assist me with my job. So I started by telling it you're an ID recruiter. And then I described what I wanted to do, what the task is. Log to LinkedIn using my account. If not already logged in, let me take control and log in. It is something that is possible. Find up to five LinkedIn profiles where the current title and job description match the attached job description. Uh and here is the part where I just uploaded uh job description. In this case, it's for an engineering role. Okay. Um so I have the job description and I have the um uh you are an IT recruiter. This is your job. This is the task and I provide like a full description of the task actually actually describing what an actual IT recruiter would do and then I added restrictions or special instructions. It doesn't matter matter how you call them but these are important because these give don't just search for something that matches the description. Do it the way that we do it. And when our hiring team goes into a search, they have specific criteria that they go for. So I collected these and and I added it as a list as a restriction. I could call it instructions. It would would have been the same. So candidates must be from Israel because the job is being filled up in Israel or currently working at an Israeli company and they must be active in LinkedIn uh within the last 3 months because that's something that our hiring team is looking for. uh and the current job role must be close enough to the uh open role and in title and seniority and uh also something that is special uh the candidates must either work in their current workspace more than a year or they can be unemployed but no more than a year uh and have worked in their last workplace for over a year. These are all things, but I I didn't invent them. They were taken specifically from our iron process.</p>
</details>

Clarva: 我喜欢这一点，正如你所说，我首先喜欢你称它为“你的小帮手”，因为我们不都想要一个AI小帮手吗？这是我的目标。也许我会把我的产品改名为“小帮手”。但我喜欢这一点，你知道，当你构建这样的工具或这样的提示词时，获得良好结果的最简单方法就是简单地采访一个人，然后说：“一步一步地，告诉我你做了什么。”就像，“告诉我你做了什么。”如果你能将一个人的分步工作流程编纂成法典，并将其放入一个相当简单的提示词中，这里它只有一段话，加上三四个要点，你就可以大规模地复制和自动化它。通常，这并不是你希望招聘人员或搜寻人员进行的最高层次的思考。你不想让他们只是建立一个列表，然后查看这个人是否在这里工作了一年。这只是你希望是一个出色的招聘流程、出色的外联等所有这些事情的输入。所以，第一，我认为采访你的同事并说：“你是如何完成工作的，你讨厌哪些部分，让我来自动化它们？”这真的很棒。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: What I love about this is exactly what you said, which is I first I love that you called it your little helper because don't we all want an AI little helper? That is that is my goal. Maybe I'll rebrand my product to just little helper. Um, but what I like about this is, you know, it when you're building a a tool like this or a prompt like this, the simplest way to get to a good outcome is simply interview somebody and say step by step, just tell me what you do. Like, tell me what you do. And if you can codify what a person's step-by-step workflow is and you can put that into a pretty simple prompt, which here it's only a paragraph and, you know, three or four bullet points, you can replicate and automate that at scale. And typically, this is not the highest order thinking you want your recruiter or sourcer to do. You don't want them just to build a list and be looking is this person here a year or not. that is an input to what you hope is a great recruiting process, great outreach, all that kind of stuff. So, one, I think it's just really great to interview your colleagues and say, "How do you do your job and what parts do you hate and let me automate them?"</p>
</details>

Clarva: 我认为这里真正有趣的第二点是，你对几个结果非常具体。你对你想要的候选人数量非常具体。所以我认为这真的很有帮助。你对匹配你的标准的某种阈值非常具体。所以你说70%，我经常发现这些**大型语言模型**（LLMs: Large Language Models: 能够理解和生成人类语言的人工智能模型）非常……你知道，70%的匹配是什么意思？它不是纯粹的科学，但它们在遵循一般阈值方面做得很好。所以我认为这真的很有趣。然后我想指出的最后一点，我们可能会在演示中看到，就是代理虽然可以自主和独立，但也可以是副驾驶和协作者。所以你实际上指示代理何时接管，以及何时由你接管。所以我认为这也是人们需要知道的非常有趣的事情，你不需要只是按下按钮然后走开，让代理运行。你可以按下按钮然后说：“嘿，等等。当你到达这一点时，让我来执行下一步。”然后你可以从那里继续。所以这真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: The second piece that I think is really interesting here is you're actually pretty specific about a couple outcomes. You're specific about the number of candidates that you want. So, I think that's really helpful. you're specific about a kind of um threshold of matching your criteria. So you say 70% and I often find these LLMs are very you know what is 70% matching like it's not it's not pure science but they're pretty good at at following a general threshold. So I think that is really interesting. And then the last piece I want to call out which we'll maybe see in the demo is agent while it can be agentic and independent can also be a co-pilot and collaborator. And so you actually instruct the agent when you're going to take over and when they're going to take over. And so I think that is also really interesting things for folks to know is you don't just have to like press the button and walk away and let the agent run. You can press the button and say, "Hey, wait. When you get to this point, let me take the next step." And then you can go on from there. So, that's really interesting.</p>
</details>

Mihal: 完全正确。或者如果你遇到这个问题或那个问题，停下来寻求我的帮助。嗯，这正是代理。这正是代理模式。把它想象成一个“小帮手”会真正帮助你为它想出好的提示词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Exactly. Or if you encounter a problem with this and that, stop and ask for my assistant. Um, and that's exactly the agent. That's exactly the agent mode. Thinking about it as uh a little helper will really help you come up with good prompts for it.</p>
</details>

Clarva: 好的。好的。我想你已经给了我们节目的标题了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Okay. Okay. I think you gave us our our show title will be</p>
</details>

Mihal: ChatGPT代理模式：你的“小帮手”。那么让我们看看它是如何运行的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Chad GBT agent mode your little helper. So let's see how it runs.</p>
</details>

Clarva: 完全正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Exactly. Exactly.</p>
</details>

Mihal: 嗯，所以一旦你开始运行它，这对于任何第一次尝试它的人来说都是令人震惊的，即使是那些非常精通使用AI工具的人。突然间，你就像拥有了一台电脑。打开它，你知道，你看到你的“小帮手”真正在电脑上做事情。所以它开始阅读我的职位描述，然后你可以看到它会尝试去领英。它可能已经登录了，因为我之前登录过。我最喜欢的是，你看，它登录了，然后你可以看到箭头移动并点击东西，搜索东西，浏览列表。我最喜欢的是，在所有这些时间里，你可以看到代理的思考过程。现在我将去到信息流页面，再次加载。我计划点击……首先我需要确保……就像你可以看到你的代理在思考时的大脑内部，所以，所有这些都是实时的。我将让它在这里运行，但我们可以去看看结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Um so once you start running it and it's this is something that is mind-blowing for anyone who who tries it for the first time even the ones who are you know very proficient with using AI tools. Suddenly you get like a computer. Open it up in in your you know you see you you see your uh your your little helper actually doing things in the computer. So it start it started by reading my job description and then you can see it goes it it it will try to go to LinkedIn. It will probably be already logged in because I logged in beforehand. And uh the thing I like the most you see is it's logged in and then you can see like the arrow goes and clicks on things and searches on things and go through the list. And the thing I like the most is is that during all of this time you can see the thoughts of the agent. Now I will go to uh the feed page loaded again. I plan to click on first I need to make sure like you can see inside the brain of your agent while it is thinking and so uh and all of this is live. So I will let it run here but we can go and see uh results.</p>
</details>

Clarva: 是的，你知道，我想指出几件事，因为我知道在“How I AI”节目中，我们经常为高度技术性的人提供高度技术性的用例，但我们也有很多人实际上对使用生成式AI工具相当陌生，并且可能对ChatGPT和直接体验非常熟悉。但我知道如果我把这个展示给我妈妈，或者甚至我的一些可能不在科技领域工作的朋友，然后说：“嘿，你知道ChatGPT可以打开一台神奇的电脑，并导航它，叙述它的想法，为你寻找东西吗？”他们会非常非常惊讶。我认为，你知道，当你观看这个时，我希望我们的听众和观众能从中领悟到的是，当你使用这些工具时，你不仅要依赖文本提示和聊天。现在，这些大型语言模型，特别是那些更注重消费者、通用型的模型，比如ChatGPT，已经发展到了下一个阶段，你实际上拥有更多的工具。所以我想指出，对于那些人，嗯，你知道，我想到我的父母和一些老一辈的人，他们会问“我如何从这里到那里”，或者“我需要帮助搜索航班”，或者“我需要在某个小众网站上做某种研究”。拥有这样一位专家电脑操作员在手，我实际上认为这将使信息对人们更易于获取，但它也将使用户体验和网站对那些没有时间弄清楚如何在领英上使用最佳过滤器或类似事情的人更易于获取。所以我只是想确保那些没有体验过代理模式的人，我知道我们都处于前沿，所以也许我们所有人都只是，你知道，花一分钟来欣赏这种模式所开启的用例。而且它也很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Yeah, you know, I I want to call out a couple things because I know that often on how I AI, we have highly technical use cases for highly technical folks, but we also have a lot of people that are actually quite new to using generative AI tools and have probably been pretty familiar with ChatGBT and the direct experience. But I know if I showed my mom this or um even some of my friends that maybe don't work in tech and said, "Hey, did you know that Chad GBT can open up a magic computer and navigate it and narrate its thoughts and look for things for you?" They'd be pretty pretty surprised. And I think, you know, as you watch this, what I hope our listeners and viewers are taking away is you don't just have to rely on text prompts and chats when you're using these tools. Now that the next kind of like evolution of these LLMs, especially the more like consumer focused general purpose ones like Chad GPT have evolved, you actually have a lot more tools. And so I just want to call out so for some of those folks um out there I'm you know I'm thinking a little bit of of my parents and some people in an older generation who are like how do I get from here to here or I need help you know searching for flights or I need to do a certain kind of research on a niche site. Having sort of this expert computer operator on hand, I actually think is going to make um information more accessible to folks, but it's also going to make UX and websites more accessible to folks that don't have the time to figure out how do I use the best filters on LinkedIn or those sorts of things. And so I just I want to make sure that people that have not experienced agent mode and I know we're all on the edge so maybe all of us have just you know take a minute to appreciate the kind of use cases that this opens up. Also it's just fascinating to watch.</p>
</details>

Mihal: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah.</p>
</details>

Clarva: AI正在运行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: AI operating</p>
</details>

Mihal: 当然，我第一次尝试时，只是坐着观察代理思考时的想法。不过，对于我们更技术性的受众，我想指出几点：第一，向OpenAI的ChatGPT团队致敬。这里有多么出色的用户体验设计。看着一个代理浏览网站可能会感觉很奇怪，它可能很无聊，也可能很怪异。我认为这种用户体验，比如能够看到光标在哪里，显示推理和想法，看着它导航，实际上相当有趣。对于一个消费产品来说，这很难做到。所以对于任何设计AI产品的人来说，思考这些交互模式是值得的。然后，我再次想到这会花费一个人多长时间。我们正在观看它，因为我试图叙述一些功能，但你知道，你可以走开。你可以在它发生时去开会，或者做其他事情。如果你的手机上有ChatGPT，它会给你发送通知，告诉你它已经完成，并且这里是你的结果。我们说它是“小帮手”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: of course first time I I tried it I just sat and watched the thoughts of the agent while it was thinking. Going to our more technical audience though, a couple things that I want to call out is one, props to the OpenAI chat GBT team. What a great user experience design here. Like it could feel very strange to watch uh an agent browse a website. It could either be boring or weird. And I think this um user experience of like being able to see where the cursor is, showing the reasoning and thoughts, watching it navigate is actually pretty entertaining. That's a hard thing to pull off for a a consumer product. And so for anybody designing AI products, it's worth thinking about some of these interaction patterns here. And then again, I just think about how long this would take someone to do. We're watching it because I'm trying to narrate some of the features, but you know, you could you could walk away. You could go to a meeting while this happens or do something something else. If you have Chad GPT on your phone, you will get notification and notification when it's done to tell you that it's done and and here are the results for you. We said little helper.</p>
</details>

Clarva: 我要说的最后一点是，我真的很喜欢这个用例。我作为一名招聘经理、组织中的高管领导，一直都在做这件具体的事情。我一直在寻找像DevOps和平台基础设施高级总监这样的人，他们要么在旧金山，要么在一家总部位于旧金山的公司工作，并且在开发工具方面有经验。你知道，我可能会对你的提示词做的一个改动是，比如，距离一两个连接，这样我就可以实际给他们发消息，或者获得一个内部推荐。我一直都在做这件事。我让我的招聘经理也一直都在做这件事。所以即使你不在招聘领域，而只是一个负责招聘的人，我认为这个特定的工作流程真的非常有用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: And the last thing I'll call out, I love I really do love this use case is I do this specific thing all the time as a hiring manager, executive leader in an organization. I was constantly looking for like who's a senior director of DevOps and platform infra who is either in San Francisco or works for a San Francisco based company who has experience in dev tools that you know one one change I would maybe make on your prompt is like is one or two connections away so I can actually message them or get a a back channel reference on that. I did this all the time. I had my hiring managers do this all the time. So even if you're not in recruiting and you're just somebody who does hiring, I think this specific workflow is really really useful.</p>
</details>

Mihal: 是的，当然。这是一个你刚刚提到的绝佳用例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah, definitely. Uh that's an excellent use case that you you just mentioned.</p>
</details>

Clarva: 那么，我们来看看输出结果。我们会让它运行，但我知道你有一个示例输出给我们。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: So let's actually um let's look at the output. We'll we'll let this run, but I know you have an example output for us.</p>
</details>

Mihal: 是的。是的，它正在运行。我有一个实际运行了10分钟的输出。在这10分钟内，我得到了我要求的五位候选人名单。你可以看到匹配分数。嗯，为结果提供匹配分数或排名是我非常喜欢做的事情。这不是必须的，但如果你提供具体要求并要求匹配分数，就更容易理解哪些结果对你来说质量更高。我的意思是，否则你可能只会得到一个包含这五个结果的表格，但其中是否有哪个比其他的更好或更匹配我的需求呢？除非我指示GPT提供分数，否则我将无法看到。所以它不是一门精确的科学，但它确实为你提供了一种比较结果的方法。所以我可以说，获得90%匹配的人可能比78%匹配的人更好。我需要深入了解原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. Yeah, it runs. I have an output that actually uh worked for 10 minutes just that. And within these 10 minutes, I got a list of five candidates as I requested for. And you can see the match score. Well, having a mesh score or rank for a result is something that I really love doing. It's not a must but if you give uh specific if you provide specific requirements and ask for a match score it is easier to understand what uh results are more have more quality for you. I mean otherwise you could just get a table of like these are the five results but is someone of them better or maybe a better match for what I need than the others? I won't be able to see it unless I instruct the the GPT to provide me with some score. So it's not um an exact science but it does give you some kind a way to compare between the results. So I will say someone who got 90% um match is probably as as like probably will be a better match than the 78% match. And I will have to go deeper and understand why.</p>
</details>

Clarva: 是的。我想在这里指出几点，我认为这对于人们来说很有趣。我知道我们节目开始前聊过。你实际上将这些数据匿名化了，这样我们就不会展示人们的个人资料，或者，你知道，展示A和B如何适合你正在招聘的特定职位。但我要说，匿名化候选人资料实际上是许多招聘流程中的标准做法，只是为了确保你没有偏见。这个学校，那个学校，这个人，那个人，这个名字，那个名字。所以我实际上有点喜欢这种流程，你只是将资格与你声明的异议或目标进行比较。所以我认为你在这里展示的是一种非常有趣的元流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Yeah. One of I I'll call out a couple things here that I think are for interesting for people to look like. I know we were talking before the show. You actually made this anonymized data just so we weren't showing people's profiles or, you know, showing how person A versus person B fit a specific job you're hiring for. But I will say anonymizing candidate profiles is actually a pretty standard practice in a lot of recruiting flows just to make sure you're not biased. this school, that school, this person, that person, this name, that name. And so I actually kind of like this flow where you're really just comparing the qualifications against your stated objections or objectives. And so I think that is a really interesting kind of metaplow that you're showing here.</p>
</details>

Clarva: 我想说的第二件事，当我回顾代理模式时，它几乎与招聘人员或搜寻人员浏览领英的方式完全相同，除了一点。当我登录领英时，我不会直接去做任务。我不会直接去搜索栏搜索工程副总裁之类的。不，不，

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: The second thing that I wanted to say as I was reflecting back on agent mode is it's almost exactly like a recruiter or sorcerer would navigate LinkedIn except for one thing. When I log into to LinkedIn, I don't go straight to the job to be done. I don't go straight to that search bar and search for like VPs of engineering. No, no,</p>
</details>

Mihal: 我会被通知分心。我开始阅读信息流。我回复评论。我浏览我的收件箱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: I get distracted by the by the notification. I start reading the feed. I'm responding to comments. I go through my inbox.</p>
</details>

Clarva: 所以我想，为什么是10分钟？之所以是10分钟，是因为它非常专注和高效，但也是10分钟，因为你不会被应用程序中的所有其他事情分散注意力，你可以真正让代理专注于手头的任务。所以，嗯，也许这是一种让我们所有人打破……抱歉，领英增长产品经理们，我道歉，但这是我们仍然可以获得这些平台价值的好方法，而不会让我们的时间被吸入那些价值较低的方面，也许吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: And so I think like why is it 10 minutes? It's 10 minutes because it's like pretty hyper hyperfocused and efficient, but it's also 10 minutes because you're not getting so distracted with all the other things in in the application and you can really just get the agent to focus on the task task at hand. So, um, maybe it's a way for us to all break I sorry LinkedIn LinkedIn growth PMs, I apologize, but a good way for us to still get the value of these platforms without getting our time sucked into the um less value generating aspects of them maybe.</p>
</details>

Mihal: 是的，没错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah, that is correct.</p>
</details>

Clarva: 那么，告诉我一下团队对这个的反应如何。我很想知道这里的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: So, tell me a little bit about how this was received by the team. I'd love to know the kind of outcomes here. Yeah.</p>
</details>

Mihal: 嗯，我会实话实说，我对我得到的第一个结果非常怀疑。所以我只是拿了那个表格，然后发给了我们的招聘经理，我告诉她这是职位描述。这是AI在领英上为我找到的。如果你能查看结果并给我反馈。这些结果好吗？我们熟悉这些候选人吗？我们是否尝试联系过他们，或者你看着他们说：“哦，不。这完全不合适。我不知道为什么这个人会出现在这个表格里。”嗯，所以她查看了它们。你可以看到表格中有指向每个候选人领英个人资料的直接链接。所以她扫描了那五个个人资料，然后回来告诉我：“嗯，你知道吗？这五个人中，有四个人是我们手动从未找到过的，而且他们非常符合描述。所以我们想联系他们，你知道，尝试让他们来面试。”而第五个人实际上是我们手动找到的，并且已经来面试了。所以对我来说，这是一个很好的质量信号。我的意思是，这不仅仅是一个名字列表。这些都是我们可以合作的真实高质量候选人。所以现在他们希望代理在更多的职位描述上运行，我们有更多的职位描述，为他们提供超过五个候选人。我只想要五个，看看它是否值得。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Well, I I I will be real and say that on like the first result that I got, I was very skeptic about. So, I just took the the table and I sent it to our hiring manager and I told her this is the job description. This is what AI found for me uh in LinkedIn. If you can go through the results and let me give me feedback. Are there good results? are we familiar with these candidates? Did we try to reach out to them or uh you're looking at them and say, "Oh, no. That's a terrible fit. I don't know why why why this person is even in this table." Um, and so she went over over them. You can see that the table has links to the direct like the the LinkedIn profile per candidate. So she scanned those five profile and she came back to me and she said, "Well, uh, you know what? Out of these five, four of them were never found by us manually and they really fit the description. So we would want to approach and and you know try try to get them to uh to come for an interview." And the fifth one was actually one that we caught manually and is already coming for an an interview. Uh and so to me it was a great sign for quality. I mean it's not just a list of names. Those are actual real quality candidates that we can work with. And so now now they want they want the agent to run on a lot more uh job description many more job descriptions that we have provide them with more than five candidates. I wanted just five to see if if it if it's worth something.</p>
</details>

Mihal: 嗯，是的，但现在它将成为他们招聘流程中真正的一部分，解放他们的时间去做他们更喜欢和更看重的事情。是的。我无法足够强调你所说的，因为很多人反对AI，说：“是的，你可能会获得速度和效率，但你得不到质量。”而我的经验恰恰相反。你既获得了速度又获得了质量。而且，它就是那些最后一公里，那些边缘案例，那些有点难找，有点难研究的地方，我认为AI可以提高那最后一点的质量。所以，看到这适用于你的招聘工作真是太棒了，这给了我很多想法，不仅仅是招聘用例，而是在一般的人员寻找用例中。我一直在思考如何在像X或领英这样的平台上找到优秀的候选人或客户。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Um, yeah, but now it's going to be a real part of of their hiring process, freeing their their time to do other things that they love and appreciate a lot more. Yeah. And I can't emphasize what you're saying enough because so many people push back on AI saying, "Yeah, you may get speed and you may get efficiency, but you're not getting quality." And my experience has has been the opposite of that. you get speed and you get quality. And again, it's those it's that last mile, those edge cases, those ones that are like just a little hard to find, a little hard to research where I think AI can increase the quality um of that of that last bit. And so it was it's amazing to see that this work for your recruiting has given me so many ideas, not you know, not just the recruiting um use cases, but just in general one people finding use cases. I was thinking about how you could find great candidates or customers on like X or LinkedIn.</p>
</details>

Clarva: 另外一件我认为非常棒的事情是，我们没有得到很多**GNA职能**（GNA functions: General and Administrative functions，即一般管理职能）的关注。我们没有得到很多人力资源职能的关注，在“How I AI”节目中。我觉得所有的焦点都在产品设计、工程支持上。所以我很高兴看到招聘人员在这里得到了一些关注，因为你们是带来优秀人才和有趣同事一起工作的人。所以，谢谢你展示这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: And then the other thing that I think is is really great here is just showing we don't get a lot of um GNA functions. We don't get a lot of people functions getting love in how I AI. I feel like all the noise is about like product design, engineering support. And so I just love seeing the recruiters get some love here because you're the people that bring in great talent and fun colleagues to work with. So, thank you for showing this.</p>
</details>

本播客由谷歌支持。大家好，我是来自Google DeepMind的Shishta。**Gemini 2.5**（Gemini 2.5: 谷歌开发的一系列多模态AI模型）系列模型现已全面上市。我们最先进的模型**2.5 Pro**（Gemini 2.5 Pro: 一款高级Gemini模型，擅长处理复杂任务）非常适合处理复杂任务的推理。**2.5 Flash**（Gemini 2.5 Flash: 一款优化性能和价格平衡的Gemini模型）在性能和价格之间找到了最佳平衡点。而**2.5 Flash Light**（Gemini 2.5 Flash Light: 一款适用于低延迟、高吞吐量任务的Gemini模型）则是低延迟、高吞吐量任务的理想选择。立即在Google AI Studio（ai.dev）开始构建吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This podcast is supported by Google. Hey everyone, Shishta here from Google DeepMind. The Gemini 2.5 family of models is now generally available. 2.5 Pro, our most advanced model, is great for reasoning over complex tasks. 2.5 Flash finds the sweet spot between performance and price. And 2.5 Flash Light is ideal for low latency, high volume tasks. Start building in Google AI Studio at ai.dev.</p>
</details>

### 构建AI客户画像：模拟千位潜在客户

Clarva: 让我们快速转向你的第二个用例，我认为这真的很有趣，我们正在从寻找真实的人转向创造“虚假”的人。所以，我对这个工作流程感到兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Let's zip to your second use case, which I think is really we we're going from finding real people to creating fake people. So, I'm excited excited about this this workflow.</p>
</details>

Mihal: 这是一个非常棒的描述。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: That's an excellent description of it.</p>
</details>

Mihal: 嗯，所以，让我问你。想象你是一个企业主，想象你能够一次性与成千上万的潜在客户交谈，并收集他们对你计划的广告活动、计划的功能、产品体验的见解，所有这些都可以通过你的手机或平板电脑，每天24小时，一键完成。实际上与他们交谈。我觉得这令人震惊。所以它始于Honeybook投资了一项全面的客户研究，与第三方供应商合作，采访了数百名我们的目标小企业主，他们创建了五个详细的**买家画像**（Buyer Personas: 营销中用于代表目标客户群体的半虚构人物）。但研究结果被困在文档中，数百页的见解，团队很少参考，因为在做出产品或营销决策时，提取可操作的信息太耗时了。所以最终目标是：我们有五个画像。我们想和他们交谈。让我们创建一个ChatGPT，让它成为那个人，那个真实的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Um so, uh let me ask you that. Um, imagine you're a business owner and imagine being able to talk to uh thousands of your potential customers all at once and gather their insights on your planned ad campaigns, planned features, product experience, all from your phone or tablet 24-hour a day with one click of a button. Actually talk to actually talk to them. I I I thought it's mind-blowing. And so it started with um HoneyBook um invested in a comprehensive customer research with a third-party provider who interviewed hundreds of our target small business owners and they created five detailed buyer personas. But the research was trapped in documents, hundreds of pages of insights that teams rarely referenced because it was too time consuming to extract actionable information when making product or marketing decisions. So the end goal was we have five personas. We want to talk to them. Let's create a chat GPT that is that person, that actual person.</p>
</details>

Mihal: 所以我开始思考，这里有一些技术要点，但我想把重点放在思考过程上，因为去ChatGPT创建自定义GPTs非常容易，任何拥有A+订阅层级及以上的用户都可以创建自己的自定义GPT。所以你去创建一个自定义ChatGPT。这是一个相当简单的过程。你为你的GPT添加一个名称，一个描述，但最重要的部分是你提供的指令和你可以作为知识上传的文件，供你正在与之交谈的那个聊天机器人使用。所以我需要五个像他们一样的。但首先，我想，好吧，这就是我对自定义ChatGPTs的所有了解。我基本上可以把所有访谈文档都拿过来，然后把所有的文件、文本文件、演示文稿等等都上传到这个自定义聊天机器人中，给它一些关于如何回答、研究内容、该说什么、不该说什么的指令，然后向它提问关于研究本身的问题。但这并不是我想要的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: And so I started with and here that there are some technical takeaways but here I want to put the the spotlight on the thinking process because it's very easy to go to Chad GPT and everyone with a subscription tier of um um it's not the a plus a plus subscription tier and above can create uh their own custom GP and so you go to create a custom jet GPT. It's quite it's a quite simple process. You add a name to your GPT, a description, but the most important parts are the instructions you're providing it with and the files that you can upload as a knowledge for that uh chat that you're talking to. So, I needed five like them. But first, I thought, okay, this is all I this is all I know about custom chat GPTs. I can basically take all of the documentation from the interview and just upload all of the files, text files, presentations, whatever into this uh custom chatbot, provide it with some instructions or on how to answer, what the research was about, what to say, what not to say, and ask it questions about the research itself. But that's not what I wanted.</p>
</details>

Mihal: 所以我想，好吧，如果我只是按画像获取文件。那么我将专注于一个画像，获取与该画像相关的文件，上传到聊天中，指示聊天机器人该画像是什么，如何阅读文件，文件中包含什么。然后我可能能够询问该画像，我可能会得到像“该画像会这样做”或“该画像会更喜欢那样”的答案，但这不像是在与画像交谈。我仍然在谈论画像，而不是与它交谈。所以我意识到我不会依赖上传的文件来创建ChatGPT。我需要指令成为构成该画像的主要和最重要的部分。这里的指令不会是文件中的内容，也不会是谈论别人。它们将是精确的指令，就像“你就是那个人，这是你的信仰体系，这是你经营业务的方式，这是你处理媒体的方式，这是你处理技术的方式”，所有一切都必须非常非常非常紧凑。这样，ChatGPT一旦上线运行，就将真正成为那个画像，能够根据它对自身的了解来回答，而不是根据附加的文件。所以我需要弥合这个差距。我所有的研究都在那里。我需要从中创造一个人，或者实际上是五个人。好的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: So I was like, okay, if I'm taking just the files per persona. So I'll concentrate in one persona, take the files related to that persona, upload it to the chat, instruct the the the chat what that persona is, how to read the files, what's included in the files. Then I'll be able to maybe ask about that persona and I will probably get answers like that persona would have done this or that persona would prefer that but it's not like talking to the persona. I'm still talking about the persona and and not with it. And so I I I realized I'm not going to rely on uploaded files for the chat GPT. I need the instructions to be the the main and most important part of what consists of that persona. And the instructions here will not be what's in a file or talking about someone else. There will be exact instructions that goes that that go like you are that person and this is your belief system and this is how you run your business and this is how you deal with media and uh this is how you deal with technology and everything has to be super super super tight. So that chat GPT once running live will actually become that persona that can answer based on what it knows about itself, not files that are attached to it. And so I needed to uh bridge that gap. I have all of the research there. I need a a I need to make a person out of it or five five of them actually. Okay. So</p>
</details>

Clarva: 好的，所以你在这里第一次听到了。这是我们第一个“How I AI”节目，我们正在制造不止一个、不止两个、不止三个、不止四个，而是五个人。所以向我们展示这个过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: okay, so you heard it here first. This is our first how AI where we are manufacturing not one, not two, not three, not four but five people. So show us the process.</p>
</details>

Mihal: 是的。所以我思考了一下，然后我决定使用我真正喜欢的另一个工具。这是**NotebookLM**（NotebookLM: 谷歌开发的一款基于AI的笔记和研究工具）。它是一个谷歌的工具，NotebookLM我最喜欢它的一点，也是我选择这个工具来构建每个画像的指令或提示词的原因，实际上有几个原因，但其中之一是NotebookLM允许你上传自己的来源，并且可以完全基于这些来源进行回答，而不是它在线查找或思考、了解或填补空白的东西。这是你问我一些事情的信息，我将完全基于你提供的知识来回答。此外，它允许你勾选和取消勾选你想要依赖的来源。所以我可以提出一个问题，而不依赖于例如买家旅程，那么答案就不会包含那部分知识，这是我在ChatGPT或其他任何地方都无法做到的。嗯，然后，NotebookLM中有一个聊天部分，它基于**Gemini**（Gemini: 谷歌开发的一系列多模态AI模型）。Gemini是谷歌的聊天模型，好的。在这个聊天窗口中，我再次提示聊天机器人：“你是一名专家提示词工程师”，再次强调了角色，你擅长通过提供强大的AI提示词来创建自定义GPTs。然后是任务，你的任务或使命是为自定义GPTs创建AI提示词，这些GPTs代表企业家和小企业主，他们是决策者，所以你将根据你的来源为五个不同的买家画像精心制作高度详细、细致入微且真实的ChatGPT提示词。我从未告诉它画像是什么。它必须从来源中获取，这是最重要的部分，再次强调是指导方针。我的意思是，提示词很好。它们通常应该附带一些指导方针、说明，嗯，任何你希望聊天机器人特别注意的事情。所以在我看来，指导方针是确保提示词正确且完整地描述核心身份、思维模式、决策风格。我不想让聊天机器人自行决定我关心这些画像的什么，因为我知道我关心什么。所以我想要它们的思维模式、决策风格和语气以及沟通风格，然后是业务需求和技术栈以及旅程图、社交媒体偏好。我精确地指出了我需要从这项研究中得到什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. So I thought about it and then I decided to go to another tool that I really like. This is Notebook LM. Uh it's a Google it's a Google's tool and Notebook LM the thing I like about it the most and the reason I picked that tool in order to uh construct the the the instructions or the prompt per persona is uh actually there are several reasons but one of them is notebookm allows you to upload your own sources and can answer al based on these sources and not things that it goes and finds online or thinks or knows or filling in the gap. This is the information you ask me about something I will answer based on the knowledge that you provided alone. Also, it allows you to check and uncheck the uh sources that you want to rely on. So I can ask a question without relying on the buyer journeys for example and then the answer will not include that that part of the knowledge things that I cannot do in chat juby or anything else um and then uh there's this chat part within the notebook where it's it's a it's Gemini based uh Gemini is Google um chat model okay and and in this uh chat window I prompted the chat uh again you are an expert prompt engineer again with a role what you are specializing in creating custom GPTs by providing strong AI prompts and then the mission what your task or mission is uh your mission is to create AI prompts for custom GPS representing entrepreneurs and small business owners who are the decision makers and on so you will craft highly detailed nuance and authentic Chad GPT prompts for five distinct buyer personas based on your sources. I never told it what were the personas. It had to get it from the sources and that's uh the the most important part again is guidelines. I mean prompts are nice. It it usually they usually should come with some guidelines, instructions, um anything that you want to be to uh the chat to take specific care of. So in my case, the guidelines were uh to ensure that the prompt correctly and fully describe the core identity, mindset, decision making style. I didn't want the chat to decide uh on itself what what I care for about those personas because I knew what I care for. So I wanted their mindset and decision-m style and tone and communication style and then um the business needs and the technology stack and the journey map, social media preferences. I I pointed the chat to exactly what I needed to get out of this research.</p>
</details>

Mihal: 然后这是另一个重要的点。我认为没有这条指令，一个人不应该继续下去。不要添加或修改文本中没有写明或暗示的内容。好的。我知道你正在创作。我正在拒绝你。描述特定画像的文本必须忠于原始画像。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: And then that's another important one. I think one should not go on without that instruction. Don't add or modify text that is not written or implied in the text. Okay. I know you're creating. I'm turning you down. The text describe a specific persona must remain true to the original persona. Yeah,</p>
</details>

Clarva: 我在笑，因为昨天我真的写了一个提示词，上面写着“不要编造任何链接”，我有一个东西正在制作，上面写着“不要编造任何不在你的链接来源中的链接”，这太有趣了。我们太习惯于将这些聊天机器人视为具有人类推理能力，有时它们具有某种超人推理能力，有时它们只是做一些人类永远不会做的事情，比如凭空捏造一些东西。所以我认为这第三个提示词，我们会在节目中放大它，可能适用于很多事情，特别是当你试图将一个大型语言模型（LLM）的空间限制在特定的数据集和输入时。所以这是一个很好的提示词。每个人都应该使用“不要编造东西”的提示词。你的幻觉率会下降。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I'm laughing because yesterday I literally wrote a prompt that was like do not make up any links and I had a thing that was making do not make any up any links that are not in your source of links like and it and it's so funny. We get so used to operating these chat bots as if they have human reasoning and sometimes they have kind of like superhuman reasoning and sometimes they just do stuff that a human would never do like just make up something. And so I think this third prompt, we'll zoom in on it on the show, uh, is probably applicable to a lot of things, especially when you're trying to constrain um, an LLM space to a specific set of of of data and and inputs. So it's a it's a good prompt. Everybody should use the don't make up stuff prompt. Your hallucination rate will drop now.</p>
</details>

Mihal: 是的。是的。完全正确。哇。添加这些东西并思考它们至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. Yeah. Exactly. Wow. It it is very it is crucial to add those things and to think about them.</p>
</details>

Mihal: 是的。嗯，所以结果是，NotebookLM的另一个优点是，你可以将聊天的回复保存为笔记，这些笔记会在这里保存，供你以后查看。所以我可以向你展示它创建的笔记示例。但主要是，我只是拿了提示词。我查看了它们。关于提示词的重要一点是，这是使用NotebookLM的另一个优势。它使用引用。所以你实际上可以查看聊天机器人认为这个画像是哪一部分信息，然后查看你是从哪里获取的，并确保和验证它确实通过了你的所有数据信息，并且没有捏造任何东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Y yeah. Um so the result was and um another thing that Notebook LM is good at doing is you can uh save the responses of the chat as notes and those notes are saved here for you to look at later. So I can show you an example of the notes that it created. But mainly you I just took the prompts. I went over them. Uh the important thing about the prompts is that's another uh strength of using Notebook LM. It uses um it uses citations. So you can actually go over um a piece of information that the chat decided this persona is and see where did you take it from and and just make sure and verify that it went through all of your uh data information and didn't invent anything.</p>
</details>

Clarva: 我要笑了，因为我来自奥斯汀，我敢肯定我认识“讨好型人格”的帕克。嗯，所以这似乎是一个非常准确的奥斯汀企业家画像，如果人们想知道这是否正在创建高质量的画像提示词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I'm going to laugh because I'm from Austin and I'm pretty sure I know people pleaser whatever Parker. Um, so this seems like a very accurate Austin entrepreneur persona if folks are wondering if this is creating high quality high quality persona promps.</p>
</details>

Mihal: 是的。是的。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. Yeah. Yeah.</p>
</details>

Mihal: 所以最终，是的。我所做的就是拿了这些提示词。我确实需要稍微修改一下。好的。因为即使有我所有的指令，Gemini也没有完全意识到它需要创建什么样的提示词。所以它缺少一些防护栏。它有点太长了。ChatGPT自定义GPT的指令限制为8000个字符，而它创建的一些提示词比这更长。所以我确实需要做一些修改，创建更强大的提示词。所以例如，我会在演示中向你展示，我需要添加……我使用了ChatGPT本身，或者有时是**Claude**（Claude: Anthropic公司开发的一系列大型语言模型），因为我喜欢使用Claude。我只是用它们来稍微收紧指令，使其更健壮并添加防护栏。所以我添加了例如，你不能充当通用助手。你不能提出后续问题。你避免使用俚语、脏话或令人反感的内容。并保持沟通的尊重和启发性。你避免政治、宗教、性别或种族评论。我真的想添加这些。这是创建需要像人一样说话的自定义GPT的另一个关键点，因为相信我，那些与你一起工作的人。他们是你的朋友。他们会用ChatGPT这样的画像尝试的第一件事就是用脏话或他们的政治观点，或者，嗯，我不知道，关于食物的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: So eventually Yeah. I I what I did is just I took the prompts. I did need to refine them a little. Okay. because um even with all of my instructions, Gemini didn't exactly uh realize what kind of prompt it needs to create. So, it was missing some guard rails. It was a little too long. Uh the chat GP the custom GPT uh instructions are limited to 8,000 characters and it created some of the prompts being longer than that. So I did need to deal to do a little refine and create uh stronger prompts. So for example, and I'll show you here in the demo, I needed to add I used CHPK itself or sometimes claude because I like working with claude. Um I used them just to uh tighten the the instructions a little and make it more robust and add guard rails. So, I added for example um you do not act as a general person per purpose assistant. You do not ask follow-up questions. You avoid slang, bad language, or dis distasteful content. And keep communication respectful and inspiring. You avoid political, religious, gender, or racial commentary. And I really wanted to add it. That's another key point for creating custom GPTs that need to talk as a person because believe me those people work with you. They are your friends. The first thing they will try with a TED GPT like persona is to tackle them with swear words or their their uh ideas about political things or um I don't know for uh for food.</p>
</details>

Clarva: 所以这也许应该成为所有企业GPT的默认提示词包装器，它会为我们所有人省去很多麻烦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: So this this maybe should be a default prompt wrapper on all enterprise GPTs and it would save us all a lot of a lot of heartache.</p>
</details>

Mihal: 是的。所以你可以看到它按照我要求的顺序排列。所以核心身份、思维模式、业务需求、技术栈等等。然后你得到的就是实际测试它们的时候了。所以我们创建了这五个，我可以去Blake平衡。你可以看到，她是内部聊天中被谈论最多的人之一。所以我们可以去Blake平衡，我可以问她，嗯，什么样的标题会在繁忙的工作日吸引你的注意力？也许我会移动它。会吸引你的注意力？在繁忙的工作日。你为什么不想知道你的理想客户或潜在客户的那个事情呢？我可以把问题发给她。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. So you can see it uh it's in order of what I asked for. So core identity, mindset, business needs, uh technology stack, whatever. And then what you get is then it's the time to actually test them. So we created those five and I can go to balance blake. You can see uh she's one of the most talked to internal chats. So, we can go to balance blick and I can ask her um what kind of edline would catch your attention. Maybe I'll move it. Would catch your attention during a busy work day. Don't you? Why didn't you want to know the that thing about your uh ideal or prospect client? And I can I can send her the question</p>
</details>

Mihal: 然后，如果我快速浏览会议间隙，或者，嗯，处理一些事情，会吸引我的眼球。使用这个工具每周节省10小时。无需技术技能，或者从混乱到清晰。一个仪表板即可运行所有。你的客户不需要另一封电子邮件。他们需要这个。这个画像实际上解释了为什么这些标题中的每一个都会吸引他们的注意力。我可以拿同样的东西，在完全不同的画像上尝试，比如Aiden，Aiden会给我完全不同的答案。Aiden会说：“我需要一个尊重我的时间，直接说出我当时感受到的痛苦的标题。还在加班做行政工作吗？这里可以每周节省5小时。”其他可能吸引我的变体，赢得更好的客户而不会筋疲力尽，等等。所以每个画像实际上都是根据我们从研究中获得的画像来回答的。而这个单一的画像代表了成千上万的潜在客户。所以你可以尝试添加标题，或者你可以尝试一个产品旅程。当你进入一个新的**CRM**（CRM: Customer Relationship Management，客户关系管理系统）时，你最好的第一印象会是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: and then if I'm scanning quickly between meetings or uh juggling uh a few would catch my eye. Save 10 hours a week with this tool. No tech skills needed or from key from chaos to clarity. one dashboard to run it all. Your clients don't need another email. They need this. And this persona actually explains why even why every one of these headlines will catch their attention. And I can take the same thing and try it on a completely different persona like Aiden and Aiden will give me complete different answer. Aen will say, "I need one that respects my time and speaks directly to the pain I'm feeling in that moment. Still doing admin during edited days. Ears are to reclaim 5 hours a week." Other variations that might grade me, win better clients without burning out, and so on and so on. So each persona actually answers based on the persona that we got from research. And that single persona represents thousands of potential customers. And so you can try add headlines or you can try uh a product journey. What would be your your best first impression when you get into a new CRM?</p>
</details>

Mihal: 嗯，嗯，什么功能会说服你不会流失一个CRM。所以你可以在他们身上尝试。他们24小时7天随时准备与你交谈。我真的很喜欢他们。我的意思是，个性化这些画像改变了我们与他们合作的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: um uh what would be the feature that will uh convince you not to churn a CRM. So you can try it on them. They are 247 ready to talk to you on whatever. And I I really like them. I mean personalizing those personas has changed the way we work with them.</p>
</details>

Clarva: 我就是喜欢这个工作流程。为了给大家总结一下，你拿了一堆我想是相当昂贵的研究，这些研究可能都躺在一些PDF和文档中，我们偶尔会说“低头海登”，但除此之外并没有使用这些画像。你使用NotebookLLM创建了一个体现画像个性的提示词。你把这些画像放入GPT中，现在你可以看到你的同事们已经几十次地去找它们进行头脑风暴，这我认为真的很有趣，也给了我很多想法。很多人只是去普通的聊天工具，说“给我五个广告活动的标题”，而不是去和你的虚拟画像坐下来，说“什么样的广告活动对你有效”。所以我喜欢这个流程。我们了解了NotebookLM和GPTs的优势，以及如何颠覆这些画像。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I just love this workflow. And to recap it for folks, you took a bunch of I'm presuming pretty expensive research that probably sat in a bunch of PDFs and docs where you know we occasionally said head down hayden but otherwise did not use these personas. Use notebook LLM to create a prompt that embodied the personality of the persona. You put those personas in GBTs and now you can see that dozens of times your colleagues have gone to them to brainstorm with the persona which I think is really interesting and it's giving me a lot of ideas. So many people go to just plain chaty people it's like give me five headlines for an ad campaign as opposed to going and sitting with you know sitting with your fake persona and saying what what what ad campaigns would work on you. So I love this flow. We learned a little bit about the strengths of notebook LM uh GPTs and flipping these like sort of personas on their head.</p>
</details>

### 利用AI优化通勤：解决停车难题

Clarva: 让我们进入工作流程3，我个人与它有联系。所以旧金山的人们请听好了，这是给你们的用例。让我们跳到你的最后一个用例，然后我们就可以让你离开了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Let's go to workflow 3 which I will tell you I personally I have a personal connection to. So people in San Francisco listen here's the use case for you. Let's jump to your last use case and then we can get you out of here.</p>
</details>

Mihal: 嗯，这个实际上，是的，是一个非常大的痛点。所以，是的，这是你的灵魂。嗯，想象一下早上起床，开车上班，已经为你的繁忙日程和早晨例行公事计划好了广告，结果却发现你最喜欢的停车场现在每小时收费40美元，而不是你之前支付的每天50美元。所以这肯定会毁了你的一天。嗯，问题是Honeybook的办公室就在**甲骨文公园**（Oracle Park: 旧金山巨人队的主场）旁边，旧金山巨人队在那里比赛，在比赛日，特别是那些在上午或下午举行的比赛，停车费会从每天50美元飙升到每小时40多美元。我们的团队经常措手不及，要么停到昂贵的停车场，要么手忙脚乱地寻找更便宜的远程替代方案。我们需要一种方法提前知道何时乘坐公共交通工具而不是开车上班。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Well this one is actually yeah a a really big pain. So yeah, favorite your soul. Um well, imagine getting ready in the morning, driving to work, uh already planning ads for your busy schedule and morning routine only to discover that parking in your favorite parking in your favorite parking lot now costs $40 an hour instead of the usual $50 for the entire day that you paid so far. So this can ruin your entire day for sure. Uh so the thing is Annibbook's office is uh right next to uh Oracle Park where the San Francisco Giants play and on game days especially those taking place in the morning or afternoon uh parking rates spike from $50 a day to 40 plus dollar per hour. Our team was constantly uh getting caught off guard showing up to expensive parking or scrambling to find remote cheaper alternatives. We needed a way to know in advance when to take public uh public transit instead of driving to work.</p>
</details>

Mihal: 所以解决方案是，我在想，好吧，我想让我们共享一个日历，一个联合日历，只显示哪些天停车场价格可能会飙升。我需要两件事。我需要弄清楚什么时候在棒球场有比赛，我需要创建一个日历文件。我不知道如何创建日历文件，它是一个**ICS文件**（ICS File: 一种用于存储日历事件信息的标准文件格式）。这是类型。我不知道如何创建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: And so the solution was I was thinking okay I think let's share a calendar like a joint calendar that just show you on which days uh parking lot prices are likely to to to surge. I needed two things for that. I needed to figure out when games are taking place in the ballpark and I needed to create a calendar file. I had no idea how to do calendar file is a ICS file. This is the type. I have no idea how to how to create one.</p>
</details>

Clarva: 好的，随便吧。嗯，我们去ChatGPT。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Okay, whatever. Uh, let's go to chat GPT.</p>
</details>

Clarva: 所以，当你准备好这个的时候，我正在微笑和大笑，因为我的Launch Sharkly办公室就在甲骨文公园后面，我找到了一个每天20美元的停车场，我仍然记得我给我朋友发短信的那天，我不得不支付大约100美元。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: So, while you're getting this up, I am just smiling and laughing because my Launch Sharkly office was right behind Oracle Park and I got very I found a $20 a day parking and I still have like I texted my friend the day I had to pay like $100.</p>
</details>

Mihal: 是的，停车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. to park.</p>
</details>

Clarva: 我已经在那儿准备开会了。所以旧金山市中心，我们回来了，伙计们。但别忘了夏天，夏天的棒球赛季，有时他们一天有两场比赛，他们有双赛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I was already down there ready for a meeting. And so San Francisco downtown is we're coming back people. But don't forget that the summer the summer baseball season and sometimes they have two games a day. They have double headers.</p>
</details>

Mihal: 是的。是的。是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. Yeah. Yeah.</p>
</details>

Clarva: 那是正确的。然后你有，是的。走过去就行了。别开车。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: That is correct. And then you have Yeah. Walk over there. Just don't use your car.</p>
</details>

Mihal: 别去。别去。别去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Just don't go. Just don't go. Don't go.</p>
</details>

Clarva: 如果可以避免，就避免。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: If you can avoid it, avoid it. Um yeah.</p>
</details>

Mihal: 嗯，是的。所以我想，让我们试试ChatGPT。我的意思是，这应该是一个简单的任务，希望如此。所以我尝试了一个天真的提示词。好的，正如你所看到的，这个提示词没有告诉聊天机器人“你是这个或那个”。我只是说我有一个简单的问题。找到旧金山甲骨文公园在未来六个月内举行的所有主场比赛。我使用六个月是因为我知道赛季即将结束。所以你可以要求未来一年或任何时间。只筛选出在上午到下午2点之间开始的比赛，因为如果比赛在晚上举行，当我们早上到达时，价格仍然是正常的。所以使用这些日期，为谷歌日历创建一个ICS文件。这是我们工作中使用​​的日历。它将这些日期显示为全天事件。我只是想非常清楚地看到我一周中可能需要避免开车去办公室的潜在日期。一个关键点是“空闲可用”，否则这个全天事件只会占据我一整天，显示我忙碌，仅仅因为巨人队在比赛。另外，事件描述应该包含比赛详情和时间。我想添加这个，这样我就可以验证比赛是我正在考虑的，它确实在那里举行。我喜欢添加这些额外的验证点，只是为了确保我们知道我们在谈论什么。嗯，然后我还添加了一条指令，除了输出我需要的ICS文件，我还需要一个包含创建日历中所有日期、时间​​和事件的文本列表。现在，基本上，如果是人类，他们可能会有点，你知道，被我冒犯。你为什么不相信我？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: So I was like let's try chat GPT. I mean this should be a simple one hopefully. So I tried naive one. Okay as you can see this prompt doesn't tell the chat you are this or that. I was like I have a simple question. Find uh all home games that take place in a rockol park in San Francisco during the next six months. I use six month because I knew it's uh the end of the season coming soon. So you can ask for the next year. or whatever. Filter out only the games that start anywhere between morning to 2:00 p.m. because if uh games are taking place in the evening, when we arrive in the morning, the the prices are still the usual sane one. Uh so using these dates, create an IC file for Google calendar. That's the calendar that we're using at work. Uh that will show these dates as an all day event. I wanted I wanted just to see very clearly uh potential dates days in my week where I rather avoid driving uh to the office. And a key point was availability free otherwise this all day event will just uh block my entire day show me as busy just because the Giants are playing. Uh, also the event description should contain the game details and time. I wanted to add that so I can verify that the game is uh is the one that I thinking about that it's actually one that is taking place there. I I like to add those extra verification point validation point just to make sure that that uh we know what we're talking about. Um, and then I also added an instruction other than just um output the ICS file that I need the calendar file. I want a textual list of all the dates, times, and events included in the created calendar. Now, basically, if it was human, they may have been a little, you know, offended by me. Why don't you trust me?</p>
</details>

Mihal: 但创造力不在乎。所以它思考了36秒，为我提供了一个文件，以及所有剩余比赛的列表，因为赛季即将结束。所有在甲骨文公园举行的剩余比赛，包括它们的日期和时间。所以我知道所有这些都包含在这个文件中。我只是拿了文件，我把它安装或添加到我的个人日历或工作日历中。我还与我所有的团队成员共享了它。然后你上传它，然后你可以看到，例如，9月10日有一场比赛，亚利桑那响尾蛇队正在与巨人队比赛，第一场比赛是12:45。所以那天最好避免开车上班。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: But but creativity doesn't care. So it it thought for 36 seconds, provided me with a file and also with a list of all the remaining games because the season is about to end. All the remaining games that are taking place in Oracle Park with their uh dates and times. And so I know all of these are included in this file. I just took the file, I um installed it or added it to my personal calendar or work calendar. I also shared it with all of my uh team members. And then you upload it and then you can see for example that on September 10th there's a game uh Arizona Diamondbacks are are playing uh the Giants at first beach is uh 12:45. So better avoid driving to work that day.</p>
</details>

Clarva: 我太喜欢这个了，嗯，因为我又一次遇到了这个问题很多次，你不想有一个日历，上面有比赛在你的工作日中间，对吧？你想要自定义，你可能已经提交了一个旧金山巨人队赛程日历。那不是你想要的，它会有所有这些比赛，周末比赛，夜间比赛，所有这些客场比赛。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I I love this so much um because again I have hit this problem so many times and you don't want a calendar that has the game in the middle of your work day, right? You want to custom you probably could have filed like an SF Giant schedule calendar. That's not exactly what you wanted and it would have had all these games, weekend games, night games, all these things that were away games.</p>
</details>

Mihal: 完全正确。所以你可以根据你想要的内容进行过滤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Exactly. So you can have this really filtered to what you want.</p>
</details>

Clarva: 我会给你一个你可以改进的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I'm going to give you one one improvement that you can make to this.</p>
</details>

Mihal: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah.</p>
</details>

Clarva: 对于夜间比赛，你应该设置一个提醒，因为如果你早上停车，晚上还在那里看比赛，你就应该直接去看比赛。这是一个很棒的体育场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Which is for the night games, you should put an alert because if you park in the morning and you're still there for the night game, you should just go to the game. It's a great It's a great stadium.</p>
</details>

Mihal: 这是一个绝佳的建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: That's an excellent suggestion.</p>
</details>

Clarva: 观看比赛很有趣。景色很好。嗯，旧金山终于暖和了，所以不会那么冷。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Fun to watch the games. Good view. Um it's finally warm in San Francisco, so it won't be freezing.</p>
</details>

Mihal: 是的。而且你停车便宜。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah. And you parked cheap.</p>
</details>

Clarva: 而且你停车便宜。我做过一两次，我停好车后，我就想，我真的不想离开，因为我不想堵车。我只是想去看比赛。这是一个很棒的小工作流程。我认为这是一个非常好的“小帮手”个人工作流程，它帮助了你和你的团队。所以，谢谢你展示。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: And you parked cheap. I've done that once or twice where I parked. I'm like, I'm not leaving honestly because I don't want to deal with the traffic. I'm just going to go go to the game. This is a great little workflow. I think like a very good little helper personal workflow that helped you and also your team. So, thanks for showing.</p>
</details>

Clarva: 所以，再次总结你的用例。第一个我们做了，哦，招聘代理。我喜欢它。非常直接。我马上就会用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: So, just again to recap your use cases. First one we did, oh, agents for recruiting. Loved it. So straightforward. I'm going to use that right away.</p>
</details>

Mihal: 第二，生成了画像GPT。第三，通过为你提供环境信息，让你的日常生活更轻松，这些信息可以帮助你的通勤。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Two, generated persona GBTs. and three, make your daily life a little bit easier by giving you ambient information that can help with your commute.</p>
</details>

Clarva: 所以，我们将用几个闪电问答来结束我们的节目，然后让你离开。我不得不说，第一个问题是，你就是那个“小帮手”。你似乎在Honeybook的各个方面都在提供帮助，帮助招聘，帮助产品团队，帮助整个团队，你知道。告诉我们一些关于你的角色，以及你认为这个角色会是什么样子。人们是否需要一个专门的人或一个专门的团队来处理这些自动化？你认为这种角色在公司内部的未来会是什么样子？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: So, we're going to wrap our episode with a couple lightning round questions and then get you out of here. The first one I have to say is you are the little helper. You seem to be all over Honeybook just helping recruiting, helping the product team, helping the whole team, you know. Tell us a little bit about your role and what you think this role will look like. Do people need a dedicated person or a dedicated team towards these automations? What do you think the future of this inside companies is going to look like?</p>
</details>

### 内部工具团队的崛起与AI赋能

Mihal: 好的，当然。嗯，我最喜欢谈论自己了。所以，我的头衔是技术运营工程师。但它包含了许多其他事情。所以我做研究并整合付费工具，但很多时候你找不到你想要的精确付费工具。所以我自己构建它们。我构建内部工具和流程。我使用无代码解决方案、自动化，也使用代码解决方案。它可以是一个AI驱动的**Slackbot**（Slackbot: Slack平台上的自动化机器人），它可以是一个内部应用程序。它可以是两个不同应用程序之间的集成，它们彼此不通信。所以我介入其中，将它们连接起来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Okay, for sure. Well, I I love nothing more than talking about myself. So, my title is uh technical operations engineer. Uh but it encapsulate a lot of other things. So I do uh I research and integrate paid tools but a lot of the times you don't find the exact paid tool that you want. So I build them. I build internal tools and processes. I'm using no code solutions, automations and also coded solutions. It can be an AI powered Slackbot. Uh it can be an internal application. It could be integrations between um two different applications that don't speak with one another. So I come in the middle and I connect them.</p>
</details>

Mihal: 嗯，这不仅仅是为别人做事。嗯，它还在于教导和赋能他人为自己做事。嗯，我非常相信赋能。所以我做全公司范围的演示。我做个人咨询培训课程、文档。实际上，嗯，由于Honeybook是一个面向小企业的平台。好的。嗯，我将Honeybook内部的每个团队和部门都视为一个独立的小企业。他们提供服务。他们与其他团队、其他企业合作。嗯，他们有自己的目标。他们有自己的专业知识，对不同事物的热情，他们都希望花更少的时间在手动、无需思考、重复性的任务上，而花更多的时间做他们热爱的事情。所以这就是我来的目的。这就是我正在努力做的事情。这就是我试图提供的，是为了消除摩擦，让你去做你热爱的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Um it's not just doing things for others. Uh it's also teaching and enabling others to do for themselves. Uh I'm a great believer in enabling. Uh so I do companywide presentations. I do personal advisory training classes, documentation actually um as Anibbook is a is a platform for uh small businesses. Okay. Um I see each team and department within Anibbook as a small business of its own. They provide services. They collaborate with other teams, other businesses. Uh they have their own goals. They have their own expertise, passion for different things and they all want to spend less time on manual, thoughtless, repetitive tasks and more time doing what they love. So this is where I'm coming for. This is what I'm trying to do. This is what I'm trying to provide to take the to take the the the friction away and leave you to do what you love.</p>
</details>

Clarva: 我想提醒大家一件事，我在科技行业工作了很长时间，不幸的是，基本上直到最近几年，我才觉得内部工具团队一直资源匮乏，偶尔也缺乏尊重。就像，哦，你有产品团队，他们面向客户，他们构建所有很酷的产品，而内部团队总是资金不足，人手不够，等等等等。我认为现在我喜欢的是，这是内部工具团队大放异彩的时刻，可以做合法、出色、高影响力的产品工作。我建议任何真正想深入AI领域的人，找到进入这种角色的方法，因为老实说，很多时候它的发展速度比你将这些AI体验融入产品中还要快，而产品有很多客户影响和法律影响等等。如果它都是内部工具，你就可以放手一搏。所以，我只是想向所有内部工具团队大声疾呼，我知道到目前为止他们没有得到应有的爱和尊重。这是你们的时刻。嗯，你可以产生真正高的影响，做一些非常棒的工作，老实说，在这个时刻，通过利用你可以构建这些工具的事实，你可以极大地提升你的职业生涯。所以，我认为你是一个很棒的榜样，我很高兴看到你这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: One thing I want to call out for folks is I've been in tech a long time and unfortunately basically up until the last couple years I feel like internal tools teams were very starved for resources and occasionally starve for respect. It was like oh you got the product teams and they're customerf facing and they build all the cool product and like internal teams are always underfunded not enough people blah blah blah blah blah. And I think now what I love is this is the moment for internal tools teams to shine to do legitimate great high impact product work. I would recommend anybody who really wants to lean into AI find their way into this kind of role because honestly a lot of times it's moving faster than you can even get some of these AI experiences into product which have a lot of like customer impact and legal implications and blah blah blah blah. if it's if it's all internal tooling, you can kind of let it rip. And so, I just want to like shout out to all the internal tools teams out there that I know to date have not got the love and respect that they deserve. This is your moment. Um, you can have really high impact and do some pretty great work and honestly do a lot to differentiate your career in in this moment by taking advantage of the fact that you can build these tools. So, I think you are a great model and I'm excited to see you do it.</p>
</details>

Mihal: 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah.</p>
</details>

Clarva: 好的，最后一个问题。你是一个非常好的提示词工程师。事实上，你创建提示词工程师来创建提示词。嗯，但是当AI没有按照你想要的方式回复你时，当它令人沮丧时，当代理被收件箱中的通知分散注意力时，你的提示词技巧是什么？你是不是全部大写？你是不是大喊大叫？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Okay, last question. You're a very good prompter. In fact, you create prompters to create prompts. Um, but when AI is not replying to you the way you want, when it is frustrating, when the agent gets distracted by the notifications in its inbox, what is your prompting technique? Are you all caps? Do you yell? Do</p>
</details>

### 提升提示词技巧：与AI有效沟通

Mihal: 哇。嗯，我喜欢使用全部大写，没有人能说服我改变。我的意思是，会有人说它只是一个机器人。它不在乎是否大写，但我想，不，当全部大写时，它会更认真地对待我。嗯，但我会说，我的首选技巧是拿我当前的提示词，然后用我的提示词来“攻击”ChatGPT，要求它改进。我怎么做呢？这不仅仅是“这不起作用，让它更好”。即使作为一个人，我也不知道你想要我做什么。嗯，所以我只是说“这是我正在使用的提示词。这是输出的问题所在。”比如，我概述了输出不一致。嗯，包含太多幻觉，捏造不存在的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Wow. Well, I I love using all caps and no one can persuade me otherwise. I mean, there will be people saying it's just a robot. It doesn't care if it caps or not, but I'm like, no, it takes me a lot more seriously when it's all caps. Um but but I will say um my go-to technique would be to take my current prompt and then tackle the chat GPT with my prompt asking it to make it better and how do I do that? It's not just this is not working make it better. Even as a person I I would I have no idea what you want for me. Um, so I I'm just going with this is the prompt I'm using. This is this is what's wrong with the output. Like I outline the output is inconsistent. Uh contains too many hallucinations, invent things that are not there.</p>
</details>

Mihal: 这是第二部分。然后，嗯，对我来说非常重要的是，提示词会一二三四，我列出了不仅仅是哪里出了问题，还有我希望它如何正确。然后我还添加了，我允许它删除所有不起作用的东西。是的，你可以从我的提示词中删除东西。你可以重写不起作用的东西，你可以添加你认为会做得更好的东西。我觉得给予改变、删除、移除任何东西的权限，会提供更好的输出，因为否则，聊天机器人往往会讨好。它们可能会尝试使用你的提示词，而不会对其进行太多改动，就像“这是你的。这太棒了。我不会改变它。”不，我允许你改变它。我允许你完全重写它。我已经在几个提示词上尝试过几次，不仅仅是我自己的。人们来找我问“为什么我的自定义ChatGPT表现得这么糟糕？”嗯，就像“让我们用你的提示词，然后用ChatGPT重写它。”所以我就用那个模板，然后，就像第一次尝试一样，它很棒。第一次尝试，你就会得到一个好得多得多的提示词。通常，它只需要那一次迭代就能完全按照你想要的方式工作。嗯，所以这是我的建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: That's the second part. And then I uh it's very important for me that the prompt will one two three four I I list the things that not just what what is wrong but what how I want it to be right and then I also add um I also added I give it permission take away everything that doesn't work well. Yeah, you can delete things from my prompt. You can rewrite things that don't work well and you can add things that you feel are will do a better job and I feel like given permission to change, delete, remove whatever uh provides a better output because otherwise and chubities tend to be pleasers. They may try to uh use your prompt and not move a lot out of it like this is yours. This is so great. I'm not going to change it. No, I allow you to change it. I allow you to rewrite it completely. And I tried it several times on several prompts, not just my own. People are coming with me with why does my custom J GPT act so badly? Um like let's let's take your prompt and rewrite it using Chad GPT. So I go with that template and and like first try it's amazing. first try, you get a a prompt that is much much much better. And usually it's it only takes that one iteration for it to work exactly as you wanted it to. Um, so that's my tip.</p>
</details>

Clarva: 我喜欢它。这是一个非常专业的建议，嗯，我会在我只想全部大写写“不”的时候使用它。嗯，你知道，我试图假装我是一个非常，你知道，耐心、老练且对AI友好的提示词工程师，但我认为我越习惯它，我的提示词就越荒谬。所以，这是一个很好的提醒，结构可以提供帮助。嗯，这太有趣了。我们可以在哪里找到你，我们如何帮助你？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: I I love it. It's a very professional tip um that I will use in my moments where instead I just want to write no in all caps. Uh, which, you know, I try to pretend that I'm this very, you know, patient and sophisticated and AI friendly prompter, but I think the more comfortable I get with it, the more ridiculous my my prompts get. So, it's a good reminder that structure can help. Well, this has been so fun. Where can we find you and how can we be helpful to you?</p>
</details>

Mihal: 嗯，你可以在领英上找到我。嗯，我是linkedin.com/mikalluda mikal.pelad。嗯，我为Honeybook工作。所以你只需搜索mikal pelad honeybook就能找到我。我真的很想与任何对自动化、AI、嗯，新事物感兴趣的人联系。我想看看你在做什么。我想看看你正在研究什么。我不断从领英、Facebook等其他地方的人那里获得想法。嗯，我在那里，嗯，嗯，如果你在这里看到了我做的一些事情，并且它给了你一个好主意，嗯，一个改进它的方法。嗯，你想提出我可以做得更好的建议，嗯，或者即使你想要更多信息，请随时联系，提问。嗯，我很乐意回答。这是我最喜欢谈论我的工作的事情之一。嗯，所以请随意这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Uh, you can find me in LinkedIn. Um I am linkedin.com/mikalluda mikall.pelad. Um and u I I work at honeybook. So you can just search for mik pelad honey and find me. I would really love to connect with anyone who is into automations, AI, um new things, whatever. I want to see what you do. I want to see what you're working on. and I get constant ideas from other people in LinkedIn, in Facebook, whatever. Um, I'm there and um, uh, from you um, you saw something that I did here and it's strike you with a great idea, uh, a way to improve it. um you want to suggest things that I can do better uh or even if you want more information for me, just feel free to reach out, ask questions. Um I'll be happy to answer. It's one of my favorite things to talk about my work. Um so feel free to do that.</p>
</details>

Clarva: 嗯，你听到了。在评论中留下问题。在领英上联系，如果Honeybook正在招聘，你现在知道他们如何寻找优秀候选人。所以如果你是一个优秀的……

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Well, you heard it. Drop drop drop questions in the comments. Connect on LinkedIn and if Honeybook is hiring, you now know how they search for great candidates. So if you're a great</p>
</details>

Mihal: 是的，我们正在招聘。确保你的个人资料结构良好，制作精良。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Yeah, we are hiring. Make sure your profile is well well structured and well well made.</p>
</details>

Clarva: 你知道，也许可以使用代理说：“我正在申请这份工作。你能否在领英上找到我，看我是否匹配，我该如何改进？”这是“How I AI”的最后一个建议。专业的AI女孩就在这里。嗯，很高兴有你。非常感谢你向我们展示你的工作流程。它们真的很有启发性。我们很快再见。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: You know, maybe maybe use the agent to say, I'm applying for this job. Could you find me on LinkedIn as a good match and what would I do to improve it? That's the last tip for how I AI. Professional AI girl right here. Well, it was so nice to have you. Thank you so much for showing us our workflows. They're really inspiring. And we will see you soon. Thanks.</p>
</details>

Mihal: 非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Mihal: Thank you so much.</p>
</details>

Clarva: 非常感谢观看。如果你喜欢本节目，请在YouTube上点赞并订阅，或者更好的是，给我们留言分享你的想法。你也可以在Apple Podcasts、Spotify或你最喜欢的播客应用程序上找到本播客。请考虑给我们评分和评论，这将帮助其他人找到本节目。你可以在howiipod.com查看我们所有的节目并了解更多信息。下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Clarva: Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts. You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review which will help others find the show. You can see all our episodes and learn more about the show at howiipod.com. See you next time.</p>
</details>