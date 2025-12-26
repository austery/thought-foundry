---
area: "tech-engineering"
category: technology
companies_orgs:
- Google
- Anthropic
- OpenAI
- Apple
date: '2025-12-03'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- How I AI
- X
products_models:
- Gemini 3 Pro
- Claude Opus 4.5
- Lovable
- Cursor
project: []
series: ''
source: https://www.youtube.com/watch?v=6w0i2Wp0knM
speaker: How I AI
status: evergreen
summary: 本期节目中，产品负责人Claireo对比了Google的Gemini 3 Pro、Anthropic的Claude Opus 4.5和OpenAI的GPT-5.1
  Codex三款AI模型在网页重新设计方面的能力。她让这些模型对一个现有博客页面进行优化，评估它们在视觉吸引力、用户体验和SEO最佳实践方面的表现。结果显示，Opus
  4.5在设计细节和功能性方面表现最佳，而GPT-5.1 Codex则不尽如人意，揭示了不同AI模型在特定任务上的专长差异。
tags:
- ai-model-comparison
- design
- model
- optimization
- user-experience
title: AI模型设计能力大比拼：Gemini 3 Pro、Opus 4.5与GPT-5.1 Codex谁是最佳网页设计师？
---
### 欢迎来到“我如何AI”

欢迎回到“我如何AI”。我是Claireo，一位产品负责人和AI狂热者，我的使命是帮助大家更好地利用这些新工具进行构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Welcome back to How I AI. I'm Claireo, product leader and AI obsessive here on a mission to help you build better with these new tools.</p>
</details>

今天我带来了一期非常有趣的迷你节目，我将回答每个人都在思考的问题：这些新模型中，哪一个才是真正的最佳设计师？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Today I have a really fun mini episode where I'm going to answer the question on everyone's mind. Which of these new models is actually the best designer?</p>
</details>

我将选取我网站上一个我认为设计得不怎么好的页面，让**Gemini 3 Pro**、**Opus 4.5**和**Codeex 5.1**一较高下，看看谁能更好地重新设计我的页面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to take a page on my site that I don't think is particularly well-designed and have Gemini 3, Opus 45, and Codeex 51 duke it out and see which one can redesign my page better.</p>
</details>

一击定胜负，让我们开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One shot. Let's get to it.</p>
</details>

本期节目由**Lovable**赞助。如果你曾有过一个应用的想法，却不知从何开始，那么**Lovable**就是为你而生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This episode is brought to you by Lovable. If you've ever had an idea for an app, but didn't know where to start, Lovable is for you.</p>
</details>

**Lovable**让你只需与AI聊天，就能构建出可运行的应用和网站。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Lovable lets you build working apps and websites by simply chatting with AI.</p>
</details>

然后你可以自定义它，添加自动化功能，并将其部署到实时域名。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Then you can customize it, add automations, and deploy it to a live domain.</p>
</details>

它非常适合营销人员快速开发工具、产品经理原型化新想法，或者创始人推出他们的下一个业务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's perfect for marketers spinning up tools, product managers prototyping new ideas, or founders launching their next business.</p>
</details>

与无代码工具不同，**Lovable**不仅仅是静态页面，它能构建具有真实功能的完整应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Unlike no-code tools, Lovable isn't about static pages. It builds full apps with real functionality.</p>
</details>

而且速度很快。过去需要数周、数月甚至数年的工作，现在你可以在一个周末完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's fast. What used to take weeks, months, or even years, you can now do over the weekend.</p>
</details>

所以，如果你一直有一个想法，现在是时候让它变为现实了。在lovable.dev免费开始使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you've been sitting on an idea, now's the time to bring it to life. Get started for free at lovable.dev.</p>
</details>

那就是lovable.dev。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's lovable.dev.</p>
</details>

### AI模型设计能力概述

如果你过去几周一直在关注，似乎每个模型提供商都发布了全新的编码模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you've been paying attention the last couple of weeks, it seems like every single model provider has released a brand new coding model.</p>
</details>

我从人们那里听到最多的是，它们确实很快，确实很棒，确实在基准测试中表现出色，但它们在设计方面都非常擅长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I heard the most from people is sure they're fast and sure they're great and sure they're beating benchmarks, but they are all really good at design.</p>
</details>

如果你一直在使用**X**或其他社交媒体，你可能已经看到了使用**Gemini 3**、**Opus 4.5**甚至**Codeex 5.1**生成的精美着陆页、应用和用户体验组件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you've been on X or social media, you've probably seen these beautifully designed landing pages, apps, and user experience components generated using Gemini 3 or Opus 45 or even Codeex 5.1.</p>
</details>

于是我想，让我们把这些模型并排比较一下，看看哪一个在重新设计现有页面方面表现更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I thought, let's put these side by side and actually see which one's better at redesigning an existing page.</p>
</details>

我认为一次性设计出漂亮的东西很容易，特别是如果你是一个优秀的提示词工程师，并且作为设计师知道该说什么，但如果你有一个现有网站并想让它变得更好，谁是你值得信赖的设计工程师？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's easy to one-shot something and make it look beautiful, especially if you're a great prompter and know exactly what to say as a designer, but if you have an existing site and you want to make it better, who's your trusted design engineer?</p>
</details>

这些模型中，哪一个真正能完成任务？我将在几分钟内向你展示我的看法，关于这些模型中哪一个能更好地设计或重新设计一个我认为不怎么好的页面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Which of these models is really going to do the trick? And I'm going to show you what I think today in a couple minutes on which of these models is the better designer or redesigner of a page that I don't think is really great.</p>
</details>

所以，这是**Chat PRD**博客。它不太好，我认为这不是一个非常漂亮的网站，我也不喜欢它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is the chat PRD blog. It is not very good. I don't think this is a very beautiful site. It's not my favorite.</p>
</details>

我认为它可以做得更好，不仅从功能角度，也从设计角度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it could be a lot better. And it could be a lot better from a functional perspective, but it can also be a lot better from a design perspective.</p>
</details>

你知道，如果我有一个团队（我确实有一个小团队，但如果它不是AI团队），我可能会把它发给设计师说：“嘿，我们早期推出了这个，它不太好。你能重新设计一下吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you know, if I had a team, which I have a little small one, but if I had a team that was not AI, I might send this to designer and say, "Hey, we just launched this early on. It's not great. Can you redesign it?"</p>
</details>

所以我想用一些新发布的模型来测试这个流程，这些模型声称它们比以前的版本更擅长设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I wanted to test that flow with some of the new models that have come out that have said that they are better designers than previous versions.</p>
</details>

于是我启动了**Cursor**，并进行了模型间的重新设计比较。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I fired up cursor and I did a model by model comparison of redesigns.</p>
</details>

我使用了完全相同的提示词和输入代码，我们来看看哪一个才是更好的设计师。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I used the exact same prompt, exact same input code, and we're just going to see which one we think is the better designer.</p>
</details>

### 测试方法与提示词

我将在这里向你展示我在**Cursor**中的提示词。它非常直接，就是“重新设计博客页面”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I'm going to show you my prompt here in cursor. It was pretty straightforward. It was this redesign the blog page.</p>
</details>

所以我只是向它展示了我们博客页面的目录，以“改善视觉吸引力和用户体验”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I just showed it the directory of where our blog page is to improve both the visual appeal and user experience.</p>
</details>

所以，既要让它看起来更好看，也要让它在功能上更容易使用。然后我添加了一个功能组件，即“为**SEO**（Search Engine Optimization: 搜索引擎优化）和导航添加最佳实践”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So sort of both like will it look nicer and will it be functionally a little easier to use and then I added a functional component to it which was add best practices for SEO and navigation.</p>
</details>

然后我为三个不同的模型执行了相同的操作：**Gemini 3 Pro**、Anthropic的**Opus 4.5**和**GPT-5.1 Codecs**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then I did that for three different models. I did it for Gemini 3 Pro. I did it for Opus 45 for anthropic and I did it from GPT 51 codecs.</p>
</details>

这些都是最近发布的模型，被认为是**OpenAI**、**Anthropic**和**Google**各自的最佳模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are all recently released models that have been said to be their best-in-class models from OpenAI, from Anthropic, and from Google.</p>
</details>

所以我们将看看它们具体做了什么。我从**Gemini 3 Pro**开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so we're going to see exactly what it did. And I started with Gemini 3 Pro.</p>
</details>

我之所以从**Gemini 3 Pro**开始，是因为我一遍又一遍地听说**Gemini 3 Pro**是一个多么出色的设计师。我真的很想看看它能做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason why I started with Gemini 3 Pro is I've heard over and over and over again what a great designer Gemini 3 Pro is. And I really wanted to see what it did.</p>
</details>

所以你可以在这里看到，它对视觉设计、用户体验、**SEO**和导航进行了相当多的思考。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can see here it thought quite a bit about visual design, user experience, SEO, navigation.</p>
</details>

它查看了代码并开始执行。它开始编写一些代码，我们将切换过去看看它具体生成了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It looked at the code and it started executing. So it started writing some code and we're going to switch over and see exactly what it generated.</p>
</details>

### Gemini 3 Pro的设计表现

它生成了这些。如果你还记得，这是之前的样子，非常非常无聊，不太好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it generated this. This was the before if you recall. Very, very boring, not very good.</p>
</details>

在重新设计之后，它生成了一个漂亮的**主视觉图**（Hero image: 页面顶部的大幅图片），展示了最新的博客文章。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And in the after, it generated a nice hero image of the most recent blog post.</p>
</details>

所以现在顶部有一个突出显示的博客文章，底部是这些卡片。我在这里看到了一些改进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, there's now this like highlighted blog post at the top and then these cards at the bottom. And a couple improvements I see here.</p>
</details>

这里有一些标签，有一些发布日期。还有一个漂亮的悬停效果，当你悬停时，特色图片会放大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's some tagging here. There's some date of releases. There's this nice hover effect that zooms in on our featured images when you zoom in.</p>
</details>

它没有处理**分页**（pagination: 将内容分成多个页面的功能），这是当前功能中没有真正考虑是否有特色图片并使其看起来很好的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Haven't done anything regarding pagination, which is a current functionality that doesn't really take into account whether or not we have featured images and making that look good.</p>
</details>

所以有些地方可以改进，但我认为总体来说它做得相当不错。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, there's some things there that could be improved, but I think overall it's pretty good.</p>
</details>

我注意到它做了一件事，但我不太喜欢，那就是页面顶部有一个标签，它与导航栏的其他部分太紧密了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that I noticed that it did that I did not love is that there's this tag at the very top of the page, and it's just a little too tight with the rest of the navigation.</p>
</details>

所以，我在这里的一个反思是，它没有页面的完整视觉上下文，但它做得相当不错，而且速度非常快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, one of my reflections here is, you know, it doesn't have like the full visual context of the page, but it did a pretty nice job and it was very fast.</p>
</details>

但我不得不说，尽管**Gemini 3**以最佳设计师而闻名，但它实际上并不是我的最爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I have to say, despite Gemini 3's reputation for being the best designer, it was actually not my favorite.</p>
</details>

### Opus 4.5的设计表现与规划能力

所以我在**Cursor**中用**Opus 4.5**运行了完全相同的查询。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we I ran the exact same query in cursor with Opus 45.</p>
</details>

如果你看这里，“重新设计博客以改善视觉吸引力和**UX**（User Experience: 用户体验），并添加**SEO**和导航的最佳实践。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So if you look up here, redesigned the blog to improve both the visual appeal and UX and add best practices for SEO and navigation.</p>
</details>

我认为使用**Gemini 3**与**Opus 4.5**之间真正有趣的区别是，**Opus 4.5**实际上在**Cursor**内部触发了一个**待办事项列表**（to-do list）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, the difference that I thought was really interesting when using Gemini 3 versus Opus 45 is Opus 45 actually triggered a to-do list inside cursor.</p>
</details>

所以它进行了一个**工具调用**（tool call: AI模型调用外部工具或API来执行特定任务），创建了一个待办事项列表，并给出了它将遵循的逐步流程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it did a tool call to to create a to-do list and it gave a step-by-step flow it was going to follow.</p>
</details>

**Gemini 3**则进行了**思维链**（chain of thought: AI模型在给出最终答案前展示其推理过程）推理，然后直接加载了代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, Gemini 3 sort of did that chain of thought reasoning and then just you'll load code.</p>
</details>

**Opus 4.5**创建了四个待办事项。这些待办事项是：重新设计博客列表页面、改进博客布局、增强文章显示，并添加全面的**SEO**结构化数据、**规范URL**（Canonical URLs: 指向网页首选版本的HTML链接元素）和**元标签**（Metatags: HTML文档中提供关于页面元数据的标签）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Opus 45 created four to-dos. So the to-dos were redesign the blog listing page, improve the blog layout, enhance the post display and add comprehensive SEO structure data, canonical URLs and metatags.</p>
</details>

所以它在实施方面非常精确，一步一步地说明了它将做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it was very precise step by step on what it was going to do in terms of implementing.</p>
</details>

因此，我认为**Opus 4.5**的规划能力肯定更好。我认为**Anthropic**在编码模型方面确实将自己与众不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I think the planning capabilities of Opus 45 are certainly better. I think Anthropic has really different differentiated themselves as experts in coding models.</p>
</details>

你知道，如果我想在这里获得最佳结果，我可能应该在**Claude code**中完成这个，因为我认为他们最近在那里也做了一些优化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, if I wanted to get the best outcome here, I probably should have done this in Claude code because I think there's some optimizations they've done there recently as well.</p>
</details>

但我认为，计划实施的输出比一次性直接实施的输出要好得多，这真的很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But I thought it was really interesting that the output of a planned implementation was much better than the output of a straight shot one-shot implementation.</p>
</details>

所以你可以看到它一步一步地进行，并实际勾选了这些更改，然后向我提供了更改摘要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can see it went step by step and actually checked off those changes and then provided me a summary of changes.</p>
</details>

我将切换并向你展示它具体是什么样子，因为我实际上对这个设计印象深刻。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I'm going to switch and show you exactly what that looked like because I was actually impressed by by the design.</p>
</details>

所以，这就是我们从**Opus 4.5**那里得到的，我认为，剧透一下，这是所有模型中设计最精美、功能性最强的博客页面，从**SEO**角度来看也是如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, this is what we got from Opus 45, which I think, spoiler alert, from all the models was the most beautifully designed blog page that I got and also honestly the most functional from an SEO perspective.</p>
</details>

所以，你可以看到**Opus 4.5**在这里做了什么，它提取了一些图片。我们有一个漂亮的背景图片和特色图片库，我们将其用于整个**Chat PRD**网站。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, what you can see that Opus 45 did here is it pulled some images. We have a repository of beautiful background images and featured images that we use throughout the chat PD website.</p>
</details>

它实际上提取并寻找它可以引入的、看起来不错的资产。这些圆环是我们常用的一些设计元素。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It actually pulled and looked for assets that it could bring in that would look nice. These rings are some design elements that we use commonly.</p>
</details>

所以它引入了一些有趣的资产。如果你还记得，**Gemini 3**只有一个渐变背景。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it pulled in some interesting assets. If you recall, Gemini 3 just had a gradient background.</p>
</details>

**Opus 4.5**实际上在背景中添加了一些图像。在布局方面概念非常相似。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Opus 45 actually added some imagery in the background. very similar concept in terms of the layout.</p>
</details>

所以你再次看到一个特色文章，它是最新的博客文章。同样是三列卡片，带有放大效果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you see again a featured article that is the most recent blog post. Again, three column cards with the zoom-in trick.</p>
</details>

所以我想人们喜欢它。但如果你看这个，**Opus 4.5**添加了一些漂亮的设计调整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I guess people like it. But if you look at this, a couple nice design tweaks that Opus 45 added.</p>
</details>

当你悬停时，不仅图片会放大，它还会给你一个漂亮的**行动号召**（Call to Action: 引导用户采取特定行动的提示），这个小箭头。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you hover, not only does the image zoom in, but it gives you this nice little call to action here, this little arrow.</p>
</details>

我觉得它太可爱了。它只是在博客文章的锚链接上做了那个漂亮的小悬停处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it is so cute. Just does that nice little touch hover treatment on the anchor link for the blog post.</p>
</details>

同样，标签也加入了。然后它在**SEO**方面做得更多一些。我稍后会回到它们各自所做的**SEO**更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, tags are in. And then it did a little bit more on the SEO side. And I will wrap back around to the SEO changes that each of them made.</p>
</details>

但如果你看这里，你不仅有作者（就是我，Claireo），有日期（我们在**Gemini 3**选项中也看到了），它还有预计阅读时间和链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But if you see here, not only do you have the author, which is me, Clarvo, you have the date, which we also saw in the Gemini 3 option, but it also has an estimated time reading and a link.</p>
</details>

所以我只是觉得这里的设计质量可能比**Gemini 3**模型高出20%或30%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I just think the quality of the design here went probably 20 or 30% further than the Gemini 3 model went.</p>
</details>

正是这些漂亮的边缘细节，我觉得AI可以添加到任何设计中，让它变得更好用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And it's those nice edge touches that I feel like AI can add into any design that just makes it so much nicer to work with.</p>
</details>

我对**Opus 4.5**在细节导向的质量方面印象深刻。现在让我们往下看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I was really impressed with Opus 45 in terms of the quality of the detail orientation. Now let's go down.</p>
</details>

你知道，它做的一件事是，它在处理没有图片的情况时比**Gemini 3**更智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, one of the things that it did is it handled no images a little smarter than Gemini 3 did.</p>
</details>

如果你还记得，**Gemini 3**有点折叠了这些卡片，没有放置占位符图片。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you recall, Gemini 3 kind of collapsed these cards here, did not put placeholder images in.</p>
</details>

而**Opus 4.5**在这里，它看到我们有些博客文章缺少图片，并放置了一个带有漂亮小书本图标的占位符，我觉得这很可爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here with Opus 45, it saw that we were missing images for some of our blog posts and put a little placeholder with a nice little book icon here, which I think is lovely.</p>
</details>

它让这些卡片看起来好多了，设计得非常出色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It makes these cards just look a lot nicer and is really well-designed.</p>
</details>

所以总体而言，我认为**Opus 4.5**在重新设计页面方面表现出色，不仅重新设计了页面，而且真正考虑了它的功能组件。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So overall, I think that Opus 45 did an excellent job out of the box of redesigning a page and not only redesigning the page, but really thinking about the functional components of it.</p>
</details>

我认为这很大程度上归功于它的规划模式以及调用工具并逐步执行这些实现的能力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think a lot of that goes to its planning mode and its ability to call tools and then do some of these implementations step by step.</p>
</details>

### GPT-5.1 Codex的设计表现

现在，让我们来看看我测试的最后一个模型，**Codeex 5.1 Pro**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, let's get to the last model that I tested, which was codeex 51 Pro.</p>
</details>

同样，这里的提示词是：“重新设计博客以改善视觉吸引力和**UX**，并添加**SEO**的最佳实践。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, again, same prompt here. Redesign the blog to improve the visual appeal and UX and add best practices from SEO.</p>
</details>

**GPT-5.1 Codecs**是**OpenAI**领先的编码模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Edit GPT 51 codecs, the leading coding model from Open AI.</p>
</details>

同样，**Codecs**像**Opus 4.5**一样进行了思考并生成了待办事项。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Again, codec codecs like Opus 45 thought and generated to-dos.</p>
</details>

这些待办事项比**Opus**的粒度要小一些。如果你看**Opus**，待办事项是重新设计博客列表页面，并具体说明了如何重新设计、改进博客布局、增强特定组件，然后添加**SEO**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The to-dos were a little less granular than the one from Opus. So, if you look at Opus, the to-dos were redesign the blog listing page with specifics about how I was going to redesign, improve the blog layout, enhance a specific component, and then add SEO.</p>
</details>

**5.1 Codecs**的计划则更为笼统。它们是：调查当前布局、重新设计、应用**SEO**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The plans for 51 codecs were a little bit more general. They were investigate current layout, redesign, apply SEO.</p>
</details>

所以我认为从设计角度来看，它的规划不如**Opus 4.5**周到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think the planning was just not as thoughtful from a design perspective as the planning was from Opus 45.</p>
</details>

然后如果我们实际看看设计，哦，**OpenAI**，你知道，我爱你们。你们有一些我最喜欢的模型，但它在这个重新设计上做得不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then if we actually look at the design, oh, OpenAI, you know, I love you. Some of my favorite models, but it did not do well on this redesign.</p>
</details>

所以你可以看到它一开始就做得不好的一些地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you can see a couple things that it didn't do well right out the gate.</p>
</details>

首先，它给了我一个AI风格的紫色渐变。我们真的不需要更多AI设计中的紫色到蓝色渐变了。我们需要把它们清除掉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">one, it gave me AI slop purple gradient. Like, we do not need any more purple to blue gradients in a AI designs. We need to get them out of here.</p>
</details>

所以，仅仅是得到AI紫色就立刻让人失望。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, just the fact that we got AI purple is an immediate disappointment.</p>
</details>

另一点，这可能是我自己的问题，但我认为我们有一个白色的文字标志和一个更好的标志可以使用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The other thing, and this may be a me problem, but I think we have a white word mark and a better logo to use here.</p>
</details>

你可以看到它选择的图片在一个有颜色的背景上看起来不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And you can tell here just the image it selected is not nice on top of a colored background.</p>
</details>

现在我确实认为博客中的标题和文案写得很好：“来自团队的故事、攻略和实验。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now I do think that the headline and copy from the um from the blog is really nice stories, playbooks and experiments from the team.</p>
</details>

所以它提供了一些更多的上下文。所以这可能是文案写得最好的模型，但总体设计不是很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it gives a little bit more context. So this was the model that did the best copywriting perhaps but overall the design was not very good.</p>
</details>

然后它再次在这里做了一个特色文章。这是我们最新博客文章的图片，但没有上下文。没有**行动号召**。它不链接到任何地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then again it did a featured post here. This is the image from our most recent blog post, but there's no context. There's no call to action. It doesn't link to anywhere.</p>
</details>

所以，我真的不确定它期望用户体验到什么。现在，它在这里重复了特色博客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, I'm just really unsure what it was expecting users to experience. Now, it's repeated here. Um, the featured blog.</p>
</details>

所以，再次，我认为这些模型真的喜欢——我想博客设计中没有那么多花哨的东西，你都必须有一个特色图片，然后是三行布局的博客文章。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, again, I think these I think these models really like I guess there aren't that many fancy things in blog design and that you all have to have a featured image and then a three row um layout for your blog post.</p>
</details>

所以它确实在这里做了特色图片，但问题是它添加了一堆我不知道如何工作的链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it did do the featured image here, but the problem is it added a bunch of these links that don't really I don't understand how they work.</p>
</details>

它们只在每个类别中显示特色图片。跳转有点奇怪。然后如果你看它在浏览库时，它甚至没有显示我们整个库中存在的博客文章。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">They only do the featured image in each of these categories. The jumping's kind of weird. And then if you look at it at browse the library, it doesn't even show the blog posts that exist in our overall um library.</p>
</details>

所以它既不漂亮，是紫色的，而且不起作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so it's both not pretty, it's purple, and it doesn't work.</p>
</details>

所以我真的很惊讶，因为我在**GPT-5**和**5.1**的功能性后端工作方面有相当不错的经验，但前端工作，它真的表现得很挣扎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I was really surprised because I've had pretty good experience with um GPT5 and 51 in functional sort of backend work, but the front end work, it just really struggled.</p>
</details>

我告诉你，这不是一个复杂的应用。这是一个基本的博客布局，带有基本的**CMS**（Content Management System: 内容管理系统）。它在技术上并不复杂。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I will tell you, this is not a complicated app. This is a basic, you know, blog layout with a basic CMS on the background. It is nothing that is technically complicated.</p>
</details>

所以从**GPT Codeex 5.1**的角度来看，我想说它不会是你团队中的设计师。它在你的团队中扮演着另一个角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what I would say from a GPT codeex 51 perspective is it's not going to be the designer on your team. It has another role to play on your team.</p>
</details>

我发现这个模型在很多地方都非常有用。但设计不是其中之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I have found plenty of places for this model to be really really useful. But design is not one of them.</p>
</details>

所以我想说，回顾一下，**Opus 4.5**绝对是我在前端设计方面的最爱。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I would say just looking back Opus 45 absolutely my favorite from a front-end design perspective.</p>
</details>

**Gemini 3**非常实用，可能受益于一些规划和实施，而**Codeex 5.1**则不是你的前端帮手。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Gemini 3 very serviceable could probably benefit from some planning and implementation and then codeex 5.1 is just not your front-end girl.</p>
</details>

所以我们必须在前端使用其他东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we got to get something else in the front end.</p>
</details>

### 模型切换与工作流优化

我喜欢以这种重复的特定用例来测试这些模型，因为你可以开始理解哪个模型适用于你的工作流程的哪个部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And what I like about testing these models on a specific use case like this where it's repeated is you can start to understand which model goes at what part of your workflow.</p>
</details>

我非常相信模型切换。我知道每个人都有自己的个人偏好，但我认为有些模型非常适合写作，有些非常适合设计，有些非常适合图像生成，有些非常适合规划和战略思考，还有些非常适合后端编码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm a real believer in model switching. I know everybody has their personal preferences, but I think there are great models for writing. I think there are great models for design. I think there are great models for image genen. I think there's great models for planning and strategic thought. And I think there's great models for back-end coding.</p>
</details>

并非所有这些模型都是平等的。它们都非常出色。我的意思是，想想它们能为团队做的工作。但它们并不都一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And not all of these models are created equal. They're all exceptional. I mean, think about the work that they can do on behalf of teams. But they're not all the same.</p>
</details>

我认为当你测试它们时，在不同模型之间查看相似的用例，并决定将模型放在团队的哪个位置，这是你在发展作为设计师、产品经理和工程师的AI流畅性时一项非常重要的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think as you test them out, looking at similar use cases over models and making a decision about where you're going to place a model on a team is a really important skill to have as you're developing your AI fluency as a designer, as a product manager, and as an engineer.</p>
</details>

### 功能性与SEO改进总结

现在，在我们结束这个迷你应用之前，我想回顾一下功能方面，这将是一个真正的迷你应用，希望能在20分钟内完成，即总结你所做的更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to go through the functional side of things before we wrap up this little mini app, which is going to be a true mini app hopefully under 20 minutes, which is summarizing the changes you made.</p>
</details>

所以我要求每个模型总结它们在设计更改、**SEO**更改以及具体做了什么方面所做的更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I asked each of the models to summarize the changes they made into in terms of design changes, SEO changes, and just what did it do?</p>
</details>

所以，你知道，我喜欢这种工作流程，当你与编码代理合作时，特别是如果你运行了很多代理而没有关注它们时，要求它总结它所做的更改以便你可以比较它们是非常有用的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so, you know, I like this as a workflow as you're working with coding agents, especially if you're if you're running a lot of them and you're not paying attention to them, asking it to summarize the changes it made so you can compare them are really useful.</p>
</details>

所以如果你看**Gemini 3**，它创建了一个新的**主视觉区**（hero section），我们知道。它创建了特色文章布局，我们也知道。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so if you look at Gemini 3, it made a new hero section, which we know. It made feature post layout, which we know.</p>
</details>

**玻璃拟态**（Glassmorphism: 一种设计风格，特点是半透明背景、模糊效果和多层布局）。谢谢，谢谢**Apple**给我们带来了玻璃拟态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Glassmorphism card. Thank you. Thank you, Apple, for giving us glassorphism.</p>
</details>

我认为我们可以没有它，但它至少是一种标准的、讨人喜欢的设计风格。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we could live without it, but it's at least a standard likable design style.</p>
</details>

所以它有缩放图片、加深阴影、改进排版、相关文章和视觉**面包屑导航**（breadcrumbs: 显示用户在网站层级结构中位置的导航路径）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it has scaling images, deepening shadows, improved typography, related articles, and visual breadcrumbs.</p>
</details>

现在，让我们看看这个，因为我没有检查的一件事是这些模型是否真的改变了博客文章本身的显示方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, let's look at this because one of the things I did not check is if these models actually changed how the blog post themselves showed up.</p>
</details>

所以，让我们点击进去看看实际的博客文章是否有布局更改。确实有。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's click into that and see if there were layout changes that were made to the actual blog posts. And there were.</p>
</details>

好的。所以**Gemini 3**确实对实际的博客文章做了一些更改，它说它添加了相关文章。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So, Gemini 3 did make some changes to the actual blog posts and it said it added related articles.</p>
</details>

好的，这是一个小小的额外惊喜，它超越了博客主页，并在博客文章本身中添加了一些**SEO**功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay. So that's a little bonus is it went beyond just the the blog homepage and it added some SEO functionality into the blog post itself.</p>
</details>

现在让我们阅读其余的更改，从**SEO**角度来看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let's read the rest of the changes from an SEO perspective.</p>
</details>

良好的**JSON-LD**（JavaScript Object Notation for Linked Data: 一种用于结构化数据的JSON格式），出色的**SEO**模式，我们肯定需要**面包屑导航**，我们肯定需要**语义化HTML**（Semantic HTML: 使用具有明确含义的HTML标签，以更好地描述网页内容），这在博客中特别有用，然后是相关文章和元数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Good JSON LD great SEO schema that we definitely want breadcrumbs which we definitely want semantic HTML which is really helpful especially in blog and then related articles and metadata.</p>
</details>

所以，**Gemini 3 Pro**为我的博客文章做了很多非常有用的、高质量的**SEO**更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, lots of very helpful, I think, high-quality SEO changes to my blog post from Gemini 3 Pro.</p>
</details>

所以我要给它多一点赞扬，因为它比我最初分析的更深入一些，并且实际上进入了博客页面本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to give it a little bit more credit in that it went a little further than I initially analyzed. Um, and actually went to the blog pages itself.</p>
</details>

但是，让我们将其与我的最爱**Opus 4.5**进行比较。所以，我将看看**Opus 4.5**。它做了哪些更改？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But, let's check that against my favorite, which was Opus 45. So, I'm going to look at Opus 45. What changes did it make?</p>
</details>

现在，看，这些更改是广泛的。所以再次，我认为规划模式真的让它能够在各种组件上进行非常具体的更改。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, see, these changes are extensive. So again, I think that planning mode really allowed it to make very specific changes across a variety of components.</p>
</details>

所以它做了特色文章和三列卡片网格，我们知道那个小箭头滑入效果，我注意到了，阅读时间徽章，类别标签，我们喜欢的**面包屑导航**，以及优雅的空状态。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it made future post and three column card grid which we know the little arrow slide in that I noted, reading time badges, category pills, breadcrumbs which we like, and graceful empty state.</p>
</details>

所以这些都是我在视觉扫描设计时发现的，我认为非常好的东西。博客布局有漂亮的圆环图案，改善了间距，然后文章显示有更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So these are all things that I identified when I was visually scanning the design that I thought was really nice. Um the blog layout had this nice rings pattern improving spacing and then the post display um has more information.</p>
</details>

所以让我们实际看看它在文章上做了什么，如果有的话。所以让我们点击进去。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So let's actually see what it did on the posts if anything. So let's click through.</p>
</details>

所以它再次做了与我们在**Gemini 3**中看到的非常相似的更改。所以再次，如果你在做像博客这样的事情，你将获得最佳实践。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it made again very similar changes to what we saw in Gemini 3. So again like don't redesign uh everything. If you are doing something like a blog, you're going to get best practices.</p>
</details>

所以它引入了作者、日期和阅读时间等元数据。让我们看看它是否添加了那些锚链接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it brought in that metadata in terms of author, date, and reading time. Let's see if it added those anchor links.</p>
</details>

它没有添加任何相关链接。所以，它可能在单个文章页面的**SEO**方面做得不那么出色，但它在重新设计我们博客文章底部的**行动号召**方面做得非常好，我认为**Gemini**没有做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It did not add um any related links. So, it maybe didn't do as great of a job on the SEO on the individual article pages, but it did do a really nice job redesigning the call to action at the bottom of our blog post, which is something that I don't think Gemini did.</p>
</details>

所以它添加了——我很抱歉地说，它又是AI风格的紫色。所以，我们必须说不要再有紫色了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, it added I'm sorry to say it is again AI purple slop. So, we got to say no more purple.</p>
</details>

特别是**Chat PRD**是如此粉色。它应该知道这一点。它应该在我的仓库中随处看到粉色。它应该这样做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Especially chat purity is so pink. It should know it. It should see pink everywhere in my repo. It should do this.</p>
</details>

但除了紫色，我认为这是一个非常好的新闻通讯订阅**行动号召**。这里有一个微妙的渐变。有一个阴影。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But other than the purple, I think this is a really nice call to action for a newsletter subscribe. There's a subtle gradient in here. There's a drop shadow.</p>
</details>

这个小小的头像旁边显示了有多少产品经理订阅了。实际上，有大约90,000名产品经理订阅了，所以我们需要更新那里的内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This little um kind of uh avatar call out next to how many product managers are subscribed. Actually, there's like 90,000 product managers subscribed, so we got to update the content there.</p>
</details>

我认为这是一个非常好的小组件。这是我注意到这些新编码模型的另一个特点，我们都被这些漂亮的页面设计和应用设计所震撼。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is a really nice little component. And this is another thing I've noticed about these new coding models is we're all getting wowed by these beautiful page designs and app designs.</p>
</details>

真正令人印象深刻的是，你给它一个小的组件，一个小部件，让它重新设计，它看起来会好得多。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What is really impressive is you give it like a small little component, a little widget, and have it redesign, it looks so much nicer.</p>
</details>

所以这就是它从设计角度所做的。让我们从**SEO**角度看看。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So that's what it did from a design perspective. Let's see from an SEO perspective.</p>
</details>

所以元数据再次，**开放图谱**（Open Graph: Facebook推出的一种协议，用于控制网站内容在社交媒体上分享时的显示方式），结构化数据。让我们看看它是否做了**JSON-LD**。它没有明确指出**JSON-LD**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, metadata again, open graph, um, structured data. Let's see if it did JSON LD. It didn't specifically call out JSON LD.</p>
</details>

所以我要检查一下它是否做了。这是我们在**Chat PRD**一直在努力的**SEO**路线图的一个重要部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I'm going to have to check to see if it did that. That's one important part of our SEO road map at Chatard we've been working on.</p>
</details>

所以我很惊讶没有看到它。但再次，也许你将**Opus 4.5**放在设计师模式，将其他一些模型放在你的**SEO**工程师模式，然后将另一个模型放在你的后端工程模式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, I was surprised not to see it. But again, maybe you put Opus 45 in the designer mode and you put some of these other models in your like SEO engineer mode and then another model in your sort of like backend engineering mode.</p>
</details>

所以也许我们只是弄清楚了这些模型各自需要存在的位置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So maybe we just have figured out where each of these models need to live.</p>
</details>

现在让我们做最后一个，看看**Codeex 5.1**。它做了哪些更改？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now let's do our last one and look at codeex 51. What were the changes it made?</p>
</details>

这是最短的摘要。再次，这是做得最差的一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now this is the shortest uh shortest summary. And again, this is the one that did the worst job at this.</p>
</details>

我还要说**GPT-5**模型喜欢项目符号。如果你看到项目符号，这就是**5**或**5.1**的回复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I will say also GPT5 models love a bullet point. If you see a bullet point, this is a five or 51 response here.</p>
</details>

所以我要求它对你所做的更改进行分类。同样，使用完全相同的提示词。它给了我五个项目符号。非常懒惰。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so I asked it to categorize the changes you made. Again, use the exact same prompt. It gave me five bullet points. Very lazy.</p>
</details>

所以有**主视觉面板**（hero panel）、类别芯片、特色文章布局，然后是**SEO**更改，做了元数据，并嵌入了**Schema.org**（Schema.org: 一个结构化数据标记的社区项目）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so hero panel, category chips, featured article layout, and then SEO changes, did metadata, and embedded a schema.org.</p>
</details>

所以它确实做了**JSON-LD**块。所以这很好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So they it did the JSON LD block. Um, so that's good.</p>
</details>

所以再次，我们对**Codeex 5** **GPT-5.1 Codeex**模型的设计印象不深，实际上对用户体验和**SEO**的细节也印象不深。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So again, we weren't really impressed with the codeex 5 GPT 51 codeex model on design and actually not that impressed on the details in terms of user experience and SEO.</p>
</details>

所以我认为也许这个家伙属于后端。我可能可以更好地提示它，但再次，这个迷你节目的目的是展示如果我们有一个基本的提示词。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I think maybe this this guy belongs in the back end. I probably could have prompted it better, but again, the point of this mini episode is to show if we have a basic prompt.</p>
</details>

就像我与一个没有时间详细说明如何做得更好的同事交谈一样，我希望他们能够研究并理解如何使页面更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The same way I would speak to a colleague that I don't have time to tell exactly how to make better, I'm hoping they can research and understand how to make a page better.</p>
</details>

我只会说：“嘿，我们的博客不好。我们需要改进**SEO**。我们需要改进**UX**，它需要更漂亮。你能处理一下吗？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I would just say, "Hey, our blog is not good. We need to prove the SEO. We need to prove the UX and it needs to be prettier. Can you just take care of it?"</p>
</details>

它会怎么做。这就是我喜欢思考这些模型的方式，它们如何响应你在日常工作中提出的这些自然请求，然后比较它们在开始时的表现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um what it would do. And that's how I like to think about these models is how do they respond to these natural requests you would make in the day-to-day of your work and then compare how they do on the outset.</p>
</details>

### 结论与未来展望

所以，为所有人总结一下，我们从一个现有的布局开始。它不漂亮，不实用，不好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to recap for everyone, we did a we started with a existing layout. It was not pretty. It was not functional. It was not good.</p>
</details>

我们给出了一个三行提示词，要求它重新设计以实现**UX**、视觉吸引力和**SEO**。然后我们比较了三个模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We gave a three-line prompt to redesign it for UX, visual appeal, and SEO. And then we compared three models.</p>
</details>

我们比较了**Google**的**Gemini 3**、**Anthropic**的**Opus 4.5**和**OpenAI**的**GPT-5.1 Codecs**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We compared Google's Gemini 3, Anthropics, Opus 45, and Open AI's GPD 5.1 codecs.</p>
</details>

设计方面的赢家无疑是**Anthropic**的**Opus 4.5**模型，无论从设计角度还是可用性和**SEO**角度来看，它都超越了我的提示词要求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the winner was for sure on the design side Anthropic's Opus 45 model both from a design perspective as well as a usability and SEO perspective and it went further than even my prompt requested.</p>
</details>

这里的假设是，它不仅在高质量前端设计方面训练得更好，而且其详细的规划使其在细节和实施方面比那些做更浅层规划或根本不规划的模型（如我们在**Gemini 3**案例中看到的）做得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The hypothesis here is both it is better trained on high-quality front-end design as well as its detailed planning allows it to do a much better job on the details and implementation than these other models that do more shallow planning or no planning at all as we saw in the Gemini 3 case and so we just got a better outcome.</p>
</details>

我喜欢我的新博客设计。我对此非常兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I love my new blog design. I am very excited about this.</p>
</details>

如果我们退一步看，令人难以置信的是，在不到20分钟的时间里，我们能够为现有网站生成不止一个、不止两个，而是三个替代设计。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If we just take a step back, it is incredible that in less than 20 minutes, we were able to generate not one, not two, but three alternative designs for an existing website.</p>
</details>

我们能够对其功能性进行大规模升级，特别是某些技术**SEO**方面，而且我能够选择我喜欢的一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We were able to get massive upgrades on the functionality of it, especially some technical SEO stuff, and I was able to pick the one I like.</p>
</details>

想象一下要求你的队友设计三个不同的选项，给你三个不同的**SEO**计划，然后你必须来回讨论你更喜欢哪一个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Imagine asking your teammate to design you three different options, give you three different plans for SEO, and then tell you which, you know, have to go back and forth on which one you like better.</p>
</details>

我认为这是一个很棒的流程。我非常喜欢它。我今天实际上就打算发布这个。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think this is an awesome flow. I loved it so much. I'm actually just going to go ahead and ship this today.</p>
</details>

所以我们会把它放在节目笔记中，这样你就可以看到具体发生了什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we'll put it in the show notes so you can see exactly what happened.</p>
</details>

这就是我对2025年11月新模型中哪个是最佳设计师的分析。我认为赢家是**Opus 4.5**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that is my takedown of which of the new models from November 2025 is the best designer. And I think the winner is Opus 45.</p>
</details>

非常感谢你收看这期“我如何AI”的迷你节目。我迫不及待地想分享更多关于AI的技巧、窍门和实践经验，我们很快再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you so much for joining this mini episode of How I AI. I cannot wait to share more tips and tricks and hands-on experience with AI and I will see you soon.</p>
</details>

非常感谢你的观看。如果你喜欢这个节目，请在**YouTube**上点赞并订阅，或者更好的是，给我们留言分享你的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thanks so much for watching. If you enjoyed this show, please like and subscribe here on YouTube or even better, leave us a comment with your thoughts.</p>
</details>

你也可以在**Apple Podcasts**、**Spotify**或你最喜欢的播客应用上找到这个播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You can also find this podcast on Apple Podcasts, Spotify, or your favorite podcast app.</p>
</details>

请考虑给我们评分和评论，这将帮助其他人找到这个节目。你可以在howiipod.com查看我们所有的节目并了解更多信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Please consider leaving us a rating and review which will help others find the show. You can see all our episodes and learn more about the show at howiipod.com.</p>
</details>

下次再见。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">See you next time.</p>
</details>