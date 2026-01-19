---
author: Bloomberg Podcasts
date: '2026-01-19'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=DcZWMQ_UL2o
speaker: Bloomberg Podcasts
tags:
  - ai-coding-tools
  - software-development-workflow
  - saas-disruption
  - large-language-models
  - pair-programming
title: Claude Code如何颠覆软件开发与SaaS行业？
summary: 本期播客深入探讨了AI编程工具，特别是**Claude Code**，如何彻底改变软件开发流程和SaaS行业的未来。嘉宾**Noah Brier**分享了他在ChatGPT出现前使用LLM进行编程的经验，并详细解释了Claude Code通过文件读写和Unix命令实现“配对程序员”模式的独特优势。对话还讨论了AI模型迭代速度、对工程师工作流的深远影响（从编码者变为代理管理者）、中间管理层的潜在威胁，以及SaaS公司面临的“自建”与“购买”模式转变带来的颠覆性挑战。同时，节目也探讨了AI模型商业化和生态系统锁定的挑战。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
  - Anthropic
  - Microsoft
  - Salesforce
  - Google
  - GitHub
  - Palantir
  - SAP
  - HubSpot
  - Databricks
  - Snowflake
products_models:
  - Claude Code
  - ChatGPT
  - GitHub Copilot
  - Cursor
  - Codex
  - Gemini
  - Opus 4.5
  - Sonnet 3.5
  - VS Code
  - Linear
  - Microsoft Teams
  - Outlook
media_books: []
status: evergreen
---
### 开场白与Claude Code的魅力

**Joe Weisenthal**: 顺便说一句，我没有精神病，我只是有**Claude Complex**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: By the way, I don't have a psychosis. I have a Claude complex.

</details>

**Tracy Alloway**: 为什么大家都在开这个玩笑？等等，哪个玩笑？那个精神病（psychosis）的玩笑。我还以为你会为我说**Claude Complex**而感到骄傲呢。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Why is everyone making that joke? Wait. Which joke? The psychosis joke. I thought you were going to be proud of me for saying Claude Complex.

</details>

**Joe Weisenthal**: 哦，那非常好。我想我终于为Tracy开了一个双关语，而我正准备开那个玩笑。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Oh, that is very good. I think I do one pun finally for Tracy, and I was over making that joke.

</details>

**Tracy Alloway**: 我当时觉得那是个玩笑。我得走了。我终于开了一个双关语，你却直接跳过去了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Well, I was thinking that was a joke. I had to go. I finally make a pun, and you just jump right over it.

</details>

**Joe Weisenthal**: 嗯，大家都说**Claude Code**是聪明人的AI精神病，对吧？它怎么就变得如此令人上瘾了呢？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, everyone keeps saying that Claude code is I psychosis for smart people, right? Like, how did that become addictive?

</details>

**Tracy Alloway**: 是啊，好吧。但这很有趣，而且我觉得也很“兄弟情谊”化。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. All right. But there's a good. Fun also very bro coded. I find.

</details>

**Joe Weisenthal**: 大家好，欢迎收听《Odd Lots》播客的又一集。我是**Joe Weisenthal**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Hello and welcome to another episode of the Odd Lots podcast. I'm Joe Weisenthal

</details>

**Tracy Alloway**: 我是**Tracy Alloway**。那么，Tracy，你觉得怎么样？如果我，你知道，开始兼职做这个，因为我正在发展我的软件业务。对吧？你对此没意见吧？

<details>
<summary>Original English</summary>

**Tracy Alloway**: And I'm Tracy Alloway. So, Tracy you're cool. Like, if I like, you know, just start doing this part time as I like, build out my software business. Right. Like you're cool about that.

</details>

**Joe Weisenthal**: 我本来想说我一直在思考AI和生产力。到目前为止，你的生产力下降了，Joe。所以你不是在做《Odd Lots》的事情，而是在编写自己的软件。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I was going to say I've been thinking about AI and productivity. And so far your productivity has gone down, Joe. So instead of doing all thoughts things, you're coding your own software.

</details>

**Tracy Alloway**: 除了我正在为《Odd Lots》时事通讯创作关于编程的内容，那也是生产力。创造性的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Except that I'm creating content for the Odd Lots newsletter about coding and that is productivity. A creative.

</details>

**Joe Weisenthal**: 有争议。有争议。但是你没意见吧？你没意见我这样，比如，“哦，我们录节目的时候，我只是兼职关注一下《Odd Lots》。”

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Debatable. Debatable. But but you're cool with that. You're cool with like me. Like, oh, I'm just going to, like, check in part time on Odd Lots when we have a record.

</details>

**Tracy Alloway**: 嗯，哦。当然不。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Well, oh. Of course not.

</details>

**Joe Weisenthal**: 好的，好的，好的。这是正确答案。我希望你真的很难过。但就像其他人一样，你知道，我有点被AI编程的“病毒”感染了，我完全被震撼了。我从一开始就玩过它。去年我开始玩它，但到了假期，我一直在时事通讯中写这个，突然间，我的Twitter动态全是**Claude Code**，**Claude Code**，**Claude Code**。你之前只用**Cursor**，当时我印象非常深刻。所以当我度假回家后，我做的第一件事就是想办法在我的电脑上安装**Claude Code**。我当时想，“哦，我上瘾了。”这实际上是，我明白为什么我的Twitter动态里全是人们在讨论这个。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Okay, good, good, good. That's the right answer. I want you to. I want you to be really sad. But like a few other people, you know, I have, like, caught the sort of, like, bug of, like, AI coding, and I'm totally blown away. I like, played with it from the beginning. I started playing around with it last year, but then over the holidays and I've been writing about this in the newsletter suddenly, like, my Twitter feed is like club code, plug code, plug code and you just cursor before which I was very impressed by at the time. And so when I got home from vacation, one of the first things I did is like, figure out how to install plug code on my computer. And I was like, oh, I am like hooked. And this is actually like, I see why I have my Twitter feed is just like people posting about this.

</details>

**Tracy Alloway**: 好的。所以我不得不说，我还没有尝试过，因为我只有一台工作电脑，我不能安装新软件。我可能绝对不能安装会更改现有软件的新软件。我想彭博社不会喜欢那样。但我已经看到了这种热潮。很多人都在谈论它。你见过**Claude Co-work**吗？你听说过吗？哦，是啊，是啊，是啊。

<details>
<summary>Original English</summary>

**Tracy Alloway**: All right. So I have to say, I have not tried it because I only have a work computer and I can't install new software. And I probably definitely cannot install new software that then makes changes to existing software. I don't think Bloomberg would like that. But I have seen the hype. Lots of people talking about it. Have you seen, Claude Co-work? Have you heard of. Oh, yeah. Yeah, yeah, yeah.

</details>

**Joe Weisenthal**: 所以对**Claude Code**的一个批评是，你知道，它能编码，但你仍然需要一些编码的背景知识，因为它的界面有点像1990年代的。**Co-work**显然更进一步，对普通人来说，它让事情变得超级超级简单。最有趣的是，**Claude Code**实际上是自己编码的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So one of the criticisms of Claude Code was that, you know, like, okay, you code, but you still need some background knowledge and coding because, like, you know, the interface is kind of like. Is. And, and all of that or 1990s, co-work apparently, like, goes a step further for, for normal people, including it makes it super, super easy. And the funniest thing is that apparently Claude code actually coded.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 所以这真的与我去年和今年的经历有关，即使是去年，尝试使用AI编码工具也是一个令人烦恼的过程，因为你必须在电脑的实际命令行中做各种事情，而我不知道命令行术语。你必须安装这些库等等。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So the so this is like really relates to my experience last year and then this year, which is that even last year, like trying to use the AI coding tools, it was an annoying process because there were various things that you had to do in the actual command line of the computer that were like, I didn't, I don't know, command line vernacular. And you have to like install these libraries and stuff.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 所以存在这种障碍，但过去一年真正改变的，或者说**Claude Code**（它实际上已经存在一段时间了，我应该早点玩玩它）的改变在于，因为它安装在你的电脑上，它获得了更深层次的访问权限，所以当你谈论它时，它实际上会执行这些操作。它会执行。它是不是就像，“哦，我们需要安装这个开源的自然语言处理库”，它就自动安装了。而不是我试图弄清楚正确的按键是什么，或者为什么它没有进入正确的文件文件夹等等。所以就像**Co-work**一样，所有这些小摩擦，比如命令行使用等技术问题，都在迅速消失。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So there was this sort of like barrier that existed and but what's the what's really changed in the last year or with the, with Claude code, which has actually been around for a while and I should have like played with it before is the like because it sits on your computer. It's sort of takes away in deeper access and so when you talk about. It, it actually does the stuff. It does. Is it just like, oh, it's like, oh, we're going to need to install this open source natural language processing library. It just does it automatically. Instead of me trying to like figure out like what are the right keystrokes to pull that in or why is this not going into the right file folder or whatever. And so like, like Co-work, it's like all, like all of these sort of like little friction, like these technical things like command line use are very rapidly are like dissipating.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 所以当你有了像**Co-work**这样的东西，他们知道他们会处理这些问题。所以你得到的用户界面就是变得越来越容易和友好。几乎没有任何技术摩擦了。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And so that like then you have something like Co-work where it's just like they know they're taking care of that. And so you get this like user interface that's just like it's just getting easier and friendlier. There's almost no technical frictions at all anymore.

</details>

**Tracy Alloway**: 而且它感觉非常迭代，代码正在自我改进。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Also, it feels very iterative, like the code is improving upon itself.

</details>

**Joe Weisenthal**: 是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah.

</details>

**Tracy Alloway**: 在这一点上，我认为这是**Claude**的主要卖点之一。

<details>
<summary>Original English</summary>

**Tracy Alloway**: At this point I think that was one of Claude's main selling points.

</details>

**Joe Weisenthal**: 嗯，这就像你看到人们谈论“**AGI**来了吗？”这正是争论的一部分，因为**AGI**背后的一个想法是，当你有能够自我训练的软件等等时会发生什么？我不太确定我是否相信这一点，但你确实看到了迭代周期有多快。我认为我们想深入探讨这一点，部分原因是很多人突然兴奋起来，然后人类提供了这种“我们正在播下自我毁灭的种子”的感觉，因为我们如此热情地参与了进化。但我只是觉得突然很清楚，哦，这将改变计算。另一件事是代码有效，它创建的代码是，你知道，没有bug，它能工作。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, this is like you've seen like people talk about like, oh, is AGI here? And this is like part of the debate because one of the ideas, I guess, behind AGI is like, well, what happens when you have software that can train itself and so forth? And I don't really know if I buy that, but you do just see, like how fast the iteration cycles are. And I think we want to get into this in part, they're fast because a bunch of people are suddenly getting excited, and then the human provides this sort of like we're sowing the seeds of our own demise because we're so enthusiastically participating in the evolution. But I just like it's suddenly clear, like, oh, this is going to change. I think computing. And the other thing is the code works like it creates code that like this is like there's no bugs. You know, it works.

</details>

**Tracy Alloway**: 你有没有看到，说到自动化你自己？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Did you see speaking of automating yourself?

</details>

**Joe Weisenthal**: 是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah.

</details>

**Tracy Alloway**: 你看到Reddit上有一篇帖子，一个律师说他基本上用**Claude Code**自动化了他所有的工作，而且他没有告诉任何人。

<details>
<summary>Original English</summary>

**Tracy Alloway**: See there was a post on Reddit from a lawyer who said he's basically used cloud code to automate, like, his entire job, and he hasn't told anyone.

</details>

**Joe Weisenthal**: 我一点也不惊讶，因为我尝试的另一件事是，我还没有100%验证过，但在上周的就业日，我下载了完整的PDF，然后我只是在**Claude Code**中输入：“找出最有趣的细节并根据此制作一些图表。”它在几分钟内就完成了。我没有能力，我从来没有自己制作过图表，或者做过设计之类的。我还没有完全确认数据是否都正确，但我很确定它是正确的，因为我检查的所有内容都没有问题。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I'm not exactly surprised, because the other thing that I experimented with is, and I haven't 100% verified this, but on jobs day last week, I downloaded the full PDF and I just typed into the cloud code like find the most interesting details and make some charts based on. And it did it in like a couple of minutes. I have no like, ability. Like I've never like built charts myself and or whatever, or like designer or whatever. And I didn't totally confirm yet that the data was all correct, but I'm pretty sure it was because everything I spot, so I didn't.

</details>

**Tracy Alloway**: 只是那个关键细节，我知道我没有。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Just that crucial. Detail, I know I didn't.

</details>

**Joe Weisenthal**: 这就是为什么我不想说，“哦，这是就业报告和图表。”但它可能会。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's why I didn't want to like, oh, like, here's what, here's the here's jobs report and charts. But it might.

</details>

**Tracy Alloway**: 但它实际上是用什么应用程序构建这些图表的？

<details>
<summary>Original English</summary>

**Tracy Alloway**: But what application did it actually build it in the charts?

</details>

**Joe Weisenthal**: 我不知道。我当时电脑上有一个文件。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I don't know. I just had a like that's the thing. I had a file on my computer at that point.

</details>

**Tracy Alloway**: 什么类型的文件？

<details>
<summary>Original English</summary>

**Tracy Alloway**: What kind of file?

</details>

**Joe Weisenthal**: 像PNG文件。像图片文件？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Like a PNG file. Like an image file?

</details>

**Tracy Alloway**: 是的，这太疯狂了，我不知道。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah, that's the crazy thing, I don't know.

</details>

**Joe Weisenthal**: 所以就有了这张包含一堆图表的图片，我的抽查结果显示，我没有发现任何异常。而人们过去是靠制作这类东西为分析师等赚取报酬的。对吧？所以这是另一个大问题。如果每个人都能构建自己的软件，软件会发生什么？我当时在读一些东西。我忘了是谁写的了，但有人用**Claude Code**创建了一个网站。他们想要一个基本上可以让他们什么都不做就能赚钱的网站。这就是提示。他们做到了吗？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And so there was just this image that had a bunch of charts, and my spark chunks did suggest, like, I didn't see anything off. And people get paid money to, like, build that kind of stuff for, like, analysts and stuff like that. Right. So this is the other big question. If everyone can build their own software, what actually happens to software? And I was reading something. I forget who it was by, but someone used cloud code to create. They wanted a website that would basically make them money for doing nothing. And that was the prompt. And did they do?

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 所以模型提出的想法是，你可以出售提示，好的提示包，以40美元左右的价格出售，你就能赚大钱。我当时在想，好吧，这样赚钱是可能的。但为什么我不直接用**Claude Code**做同样的事情呢？我们作为一个经济体将不得不思考许多大问题。我认为我的主要结论是，我们必须尽快思考这个问题。但**Claude Code**到底是什么？为什么每个人都对它如此兴奋？与**OpenAI**和**Gemini**等现有的东西相比，这款特定的软件有什么特别之处？为什么它能抓住所有人的想象力？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: So the idea that, the model came up with was you can sell prompts, packages of good prompts and sell them for like 40 bucks and you'll make tons of money. And I was thinking about that, like, okay, it's possible to make money that way. But also, why wouldn't I just use cloud code. To. Do the same thing? There are many big questions that we as an economy are going to have to think about. And I think my main takeaway is we're going to have to think about this sooner rather than later. But what is cloud code? Why is everyone so hyped about it? And what is it about this particular piece of software that versus what exists from OpenAI and Gemini and all this stuff? Like, why is this captured everyone's imagination?

</details>

**Tracy Alloway**: 我们确实找到了最合适的人，因为他不像我，他在这方面已经摸爬滚打了更长时间。我认识的少数几个在**ChatGPT**出现之前就接触**LLM**的人之一，他实际上是通过API使用它们，甚至在2022年11月之前就谈论过它们进行编码的技术能力。所以，我们真正找到了最合适的人，我们将与**Noah Brier**对话。他是**L'échec**的联合创始人，这是一家帮助大公司处理AI事务的咨询公司。那么，**Noah**，非常感谢你来做客，让我们谢谢你来。

<details>
<summary>Original English</summary>

**Tracy Alloway**: We really do have the perfect guys because it's someone who, unlike me, has been getting their hands dirty and this stuff for longer. One of the few people that I know who is into LMS before ChatGPT existed and was actually using them via the API, and was actually talking about their technical capacity to do things like coding even before November of 2022. So truly the perfect guys we're going to be speaking with Noah Brier. He's the co-founder of L'échec, a consultancy that helps big companies deal with AI stuff. So, Noah, thank you so much for coming on, and let's thank.

</details>

**Noah Brier**: 谢谢你们邀请我。

<details>
<summary>Original English</summary>

**Noah Brier**: You for having. Me.

</details>

### Noah Brier的早期LLM使用经验

**Joe Weisenthal**: 怎么回事？你是如何在**ChatGPT**出现之前使用LLM的？我不知道，我认识很少有人这样做。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: What's the deal? How are you like using lemons before chat, GPT existed? I don't know, I know very few people who were doing that.

</details>

**Noah Brier**: 我很幸运在2022年关闭了一家初创公司，所以我有大量的空闲时间。

<details>
<summary>Original English</summary>

**Noah Brier**: I had the good fortune of shutting down a startup in 2022, and so I had a lot of free time on my hands.

</details>

**Joe Weisenthal**: 那你是怎么使用的呢？你当时是怎么看待它的？你是怎么意识到有这样一种东西可能对你有用的？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And then how are you using it, though? Like how do you look at your like, how did you aware that there was this thing that could be of potential use to.

</details>

**Noah Brier**: 我做的第一件事是使用**GitHub Copilot**，当时它内置在**VS Code**中，是**VS Code**内部的自动补全功能。所以它很好用，我很快就意识到它能够完全处理某些编码任务。任何基于模式的任务。所以如果你写代码，你会写很多测试。如果你写测试，每个测试都遵循相同的模式，你希望它遵循相同的模式，你正在寻找那种结构，随着时间的推移，因为它会查看你的代码库，它能够基本上自动补全。我还开始玩**GPT-3 API**，它是在2021年11月发布的，那是它第一次向所有人公开可用。他们拥有我们今天所知的大型语言模型。所以我只是在测试和构建东西，我很快就意识到我做的第一件事让我大开眼界，那就是我构建了一个网络爬虫。我当时只是想从一个网站上抓取定价数据。我在我的职业生涯中做过很多次这种事。这可能是所有编码任务中最烦人的，因为HTML是最糟糕的解析语言。我只是用了这个东西，我拿了页面，拿了内容，拿了文本，然后把它交给AI，我让它把定价表返回给我，它就返回了定价表。我当时就想，我再也不会用其他方式做了。

<details>
<summary>Original English</summary>

**Noah Brier**: So my very first thing I was doing was using GitHub copilot, which at the time was built into VS code and it was autocomplete inside VS code. So it was a nice and pretty immediately realized that there were certain coding tasks that it could just handle completely. Anything that was very pattern based. So if you write code, you write a lot of tests. If you write tests, every test kind of follows the same pattern and you want it to follow the same pattern, you're looking for that structure in and over time, because it was looking at your code base, it was able to basically autocomplete it. I also started playing with the GPT three API, which had come out, I think that came out in November of 2021, and that was the first time it was publicly available to everybody. And they had a large language model as we know it today, available to them. So I was just testing and building things, and I pretty immediately realized the very first thing I did where it just blew my mind, was I built a web scraper. So I was I was just trying to pull pricing data from a website. And I've done a lot of this in my career. It's maybe the most annoying task you have to do in all of coding, because HTML is the most miserable language to have to parse. And I just had this thing where I took the page, I took the content, I took the text, and I gave it to the AI, and I asked it to give me back the pricing table, and it gave me back the pricing table. And I just thought, I'll never do it the other way again.

</details>

**Tracy Alloway**: 那是HTML吗？只是勾起了我90年代中期使用HTML的回忆。

<details>
<summary>Original English</summary>

**Tracy Alloway**: That's is that HTML mentioned? Just brought up like memories of me in like the mid-nineties on HTML.

</details>

**Joe Weisenthal**: 好的。那个网站很容易记住。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Good. Easy to remember that site.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 我想知道它还在吗？那会很疯狂。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I wonder if it's still is it still up? That would be wild.

</details>

### AGI的定义与Claude Code的独特之处

**Tracy Alloway**: **Claude Code**算**AGI**吗？这似乎是争论的焦点，对吧？它是**AGI**吗？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Does clawed code? Does that count as AGI? This seems to be the debate right? Is it AGI?

</details>

**Noah Brier**: 我尽量不介入什么是**AGI**，什么不是**AGI**的争论。我认为我对**AGI**的猜测，就其价值而言，它可能就像**图灵测试**一样，每个人都认为它非常非常重要。很长一段时间，我们认为**图灵测试**是70年来最重要的事情。然后**ChatGPT**非常清楚地通过了**图灵测试**，现在每个人都假装他们只是忘记了。他们假装它从来都不重要。所以，我有点猜测对话会是这样。它将是一个永远移动的目标。因为事实证明，我们对通用智能的设想并不完全是那样。但我也认为，你知道，计算机科学家和那些严肃的AI研究人员会说，**Claude Code**中发生的大部分事情并不是模型本身，而是模型与人类的结合。我认为这是一个非常重要的区别。但我不知道**AGI**。

<details>
<summary>Original English</summary>

**Noah Brier**: I try not to wade into what's AGI and what's not. I think my guess on on AGI, for what it's worth, is that it's probably going to be a conversation like the Turing test, where everybody thought it was really, really important. For a really long time, we thought the Turing test was the biggest thing for 70 years or whatever. And then. ChatGPT very clearly passed the Turing test, and now everybody pretends like it's just that they forgot. They pretend that it never mattered. Oh, and so I am kind of guessing that that's going to be what the conversation is like. It's just going to be a sort of forever moving goalpost. Because it turns out that the idea we had for what general intelligence looks like is not quite that. But I also think, you know, the computer scientists and the sort of serious AI researchers would say that much of what's going on inside cloud code is not the model itself, it's the model paired with a human. And I think that is a pretty important distinction. But I don't know about AGI.

</details>

**Tracy Alloway**: 嗯，好吧，所以你在**ChatGPT**发布之前就使用**GPT**进行编码了。因此，编码模型已经存在很长时间了。那么，对于那些没有玩过或者没有尝试过的人来说，**Claude Code**是什么？因为编码模型已经存在很长时间了。人们可能听说过**Cursor**、**Copilot**或其他一些工具等等，**Claude Code**是什么？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Well, okay, so you were using, GPT to code prior to the release of ChatGPT. So therefore coding models have been around a long time. So what is for those who haven't played or played around with it. What is Claude code? Because again, coding models have been around for a long time. If people maybe have heard of cursor Copilot or some of these other harnesses, etc., what is cloud code?

</details>

**Noah Brier**: 所以如果我们先回顾一下**Copilot**，因为**Copilot**是第一个商业化的大型语言模型应用。据大多数说法。**Copilot**在其最初的实例化中只是自动完成了某些**Microsoft**产品。

<details>
<summary>Original English</summary>

**Noah Brier**: So if we back up first and we go to copilot because so copilot was the first sort of commercial application of a large language model. By most accounts. And what copilot did in its initial instantiation was just. Auto some Microsoft. Product.

</details>

**Tracy Alloway**: 它是**Microsoft**产品。

<details>
<summary>Original English</summary>

**Tracy Alloway**: It's a Microsoft product.

</details>

**Noah Brier**: 它是**Microsoft**产品。所以**Microsoft**拥有**GitHub**，**GitHub**开发者**Copilot**。**Microsoft**与**OpenAI**有合作关系。所以他们把它内置了进去，它所做的是自动补全。所以如果你在写代码，很多时候写代码都是样板文件，或者试图记住一个函数的名字。你知道，**StackOverflow**之所以存在，是因为你永远记不住那个函数的确切名字，或者你需要用来查找和替换东西的确切正则表达式。所以你会去搜索它。他们意识到你可以直接把它内置到IDE，你的代码编辑器中，让它为你自动补全。这非常棒。是的。然后，**ChatGPT**出现了，甚至在那之前，我自己也构建了一个简单的聊天机器人，因为我意识到，嘿，我可以直接问它，而不是去**StackOverflow**搜索，它完全能够回答代码问题，它能够编写正则表达式或做这些事情。它会犯错误吗？是的。但**StackOverflow**上也有著名的错误正则表达式，现在存在于世界上每个代码库中。所以，你知道，我们很多人都在玩这些东西，并意识到它们是一个巨大的福音。

<details>
<summary>Original English</summary>

**Noah Brier**: It's a Microsoft product. So Microsoft owns GitHub, GitHub developer Copilot. It was Microsoft had the partnership with OpenAI. And so they built it in and what it was doing was doing autocomplete. So if you're writing code, a lot of writing code is boilerplate or trying to remember the name of a function. And, you know, the reason StackOverflow existed was because you can never remember the exact name of that function or, or the exact regex that you need to use in order to find and replace something. And so you would go search for it. And they realized that you could just build that into the IDE, your code editor and, and have it autocomplete for you. And it was pretty amazing. Yeah. Then, ChatGPT came out, and even before that, I had built a simple chat bot for myself because I realized that, hey, I could just ask this and instead of going and searching StackOverflow, it was totally capable of answering code questions, and it was capable of writing regex or doing these things. And did it make mistakes? Yes. But like there's famous mistakes on StackOverflow of incorrect regex that now exists in every codebase in the world. And so, you know, there were a lot of us just kind of playing with these things and realizing they were a huge boon.

</details>

**Noah Brier**: 所以我认为真正的下一步是**Cursor**的出现。**Copilot**没有意识到的是，仅仅自动补全是不够的。你还需要问答功能，因为有些东西你不能仅仅自动补全。你希望能够提出问题并得到回答。然后**ChatGPT**出现了，每个人都在不同的想法之间切换。然后我认为下一个真正重要的部分是**Claude Code**的出现，**Claude Code**之所以如此出色，是因为他们采用了相同的模型集，并将其从聊天机器人中取出，赋予它一些非常基本的功能，使其能够在你的机器中运行。对吧。所以，如果你真正看一下**Claude Code**中存在的东西，你正在调用一个模型，他们赋予了它大约两个主要功能。一是你可以在你的电脑上读写文件。二是你可以在你的环境中操作**Unix**，即基本的命令，bash命令。

<details>
<summary>Original English</summary>

**Noah Brier**: And so I think really the next step is Curser comes out. And the thing is to realize that copilot didn't was that it wasn't good enough to have autocomplete. You also needed the Q&A because you have these things that you can't just autocomplete. You want to be able to ask the question and answer it. And then ChatGPT came out and everybody was switching between idea. And then I think really the next big piece is that cloud code came out, and what Cloud Code did that was so remarkable was they took the same set of models, really. And they took them out of the chat bot and they really just gave it some very basic functionality to operate within your machine. Right. And so, you know, if you really look at kind of what exists within cloud code, you're calling out to a model and they gave it capability around sort of two big things. One is you can read and write files on your computer. And then two is that you can operate Unix. The, the base commands, the bash commands that exist in your environment.

</details>

**Noah Brier**: 再次强调，因为这些模型是在互联网上训练的，而互联网上没有比如何构建互联网更好的信息来源了，所以它们非常擅长使用**Unix命令**。对吧？因为**Unix**已经存在了大约60年。这些命令的设计方式都非常非常简单。有一个find命令，你知道，还有一个叫做grep的东西，它可以搜索代码库。**Unix**有一种将一个命令与另一个命令连接起来的漂亮方式，所以你可以将一个命令的输出发送给另一个命令。他们只是让模型访问了这2到3个非常简单的东西。结果它解锁了大量的功能，我认为即使是构建它的人也没有完全意识到。

<details>
<summary>Original English</summary>

**Noah Brier**: And again, because these models were trained on the internet and there's no greater source of information on the internet than how to make the internet, they know how to use Unix commands incredibly well. Right? Because Unix has existed for whatever it is 60 years. And the way these commands were designed, they're all designed to be very, very simple. There's a find command and, you know, there's a thing called grep and it can search to a code base. And Unix has this sort of beautiful way of tying one command to another so you can take the output of one command and send it to another. And they kind of just gave the model access to these 2 or 3 very simple things. And it kind of turned out that it unlocked a whole bunch of functionality that I don't think even the people who built it fully realized.

</details>

**Noah Brier**: 我经常思考的一个例子就是所有这些AI模型都面临的挑战，那就是它们是**无状态**的。所以每次你和**ChatGPT**对话时，它都会把你的整个对话历史发送回**ChatGPT**，因为它没有保存该聊天的历史记录。对吧？这没问题，它的工作方式就是这样，但这意味着它会忘记事情。它不知道对话，一个对话。而一个非常简单的方法来保存你的状态就是把它写入文件。所以你给它写入权限，它就可以创建文件。现在突然之间，你克服了可能存在于这些大型语言模型中的最大挑战，那就是它们本质上是**无状态**的。

<details>
<summary>Original English</summary>

**Noah Brier**: Like one example that I think about a lot is just the challenge you have with all of these AI models is that they're stateless. So every time you talk to ChatGPT, it's sending your entire conversation history back to ChatGPT because it has no saved history of that chat. Right? And that's fine. It's the way it works. It just fact, but it means that, you know, it forgets things. It doesn't know conversation, a conversation and one very easy way to save your state is just write it to a file. And so you give it right access and it can create files. And now all of a sudden you've overcome this like probably the single biggest challenge that exists inside these large language models, which is that they're fundamentally stateless.

</details>

**Tracy Alloway**: 所以**Claude**会给自己写一些像记忆笔记一样的东西，对吧，来记住对话的整个上下文。这就是它解决这个问题的方式。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So Claude writes itself little like memory notes, right, to to remember the entire context of the conversation. And that's how it solved that problem.

</details>

**Noah Brier**: 不。所以**Claude Code**的底层有两件事在发生。有一件事和**ChatGPT**或任何其他模型完全一样，那就是它维护着一个对话历史。所以你发送的每一条消息和它采取的每一个动作，它都会记录到一个日志中。对吧。这只是一个大文件，和**ChatGPT**能做的没什么不同。然而，它真正有趣的地方在于，它还可以写入文件，然后它可以读取这些文件。所以，虽然对话历史都被保存下来了，但最终对话会变得太长，它需要做一件叫做**压缩**的事情。当它压缩时，它会尝试只记住那些重要的部分，因为总窗口很大。

<details>
<summary>Original English</summary>

**Noah Brier**: No. So there's sort of two things going on in cloud code beneath the hood. There's one thing that works exactly like ChatGPT or any of these other ones, which is it's maintaining a conversation history. So every message you send it and every, action, it takes, it's recording to a log. Right. Which is just one big file that's really no different than what ChatGPT can do. Where it gets really interesting, though, is it can also write files that it can then read. So whereas that conversation history is all saved off and eventually that conversation gets too long and it needs to do a thing called compaction. And when it compacts it, it tries to sort of just remember the bits because there the total window is, is, is large.

</details>

**Tracy Alloway**: 但我的意思是，它有10万个token。所以这就是我说的记忆笔记的意思，对吧？它把信息压缩成重要的东西。所以它不会检索。它会这样做。

<details>
<summary>Original English</summary>

**Tracy Alloway**: But I mean, it's like 100,000 tokens. So that's what I mean by memory notes. Right? It compacts the information into the important stuff. So it doesn't retrieve. It does that.

</details>

**Noah Brier**: 它只在最后才这样做。一旦它用完空间，好的。一旦它用完上下文窗口。所以它有20万个token，我想，粗略地说，20万个token大概是15万个单词。它会说，好吧，是时候压缩所有这些东西了。所以它仍然会把你的整个历史保存在你的电脑上。你仍然拥有完整的消息。但对于那个会话，它只是把它压缩到，你知道，也许2万5千个token的内存。

<details>
<summary>Original English</summary>

**Noah Brier**: It only does that at the end. Like once it runs out of space, okay. Once it runs out of context window. So it has 200,000 tokens, I think, and 200,000 tokens in rough terms is probably 150,000 words. It says, okay, it's time for me to compact all of this stuff. And so it still saves your whole history on your computer. You still have the entire message. But for that session, it just compacts it down to this, you know, maybe 25,000 token memory.

</details>

**Tracy Alloway**: 2万5千。它是什么。是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: 25. What it was. Yeah.

</details>

**Tracy Alloway**: 这种**压缩**以前是不是不那么明显？这种解决方案有多重要？对于像“作为一个人类，我可以在一个项目上长时间工作”这样的情况，它带来了多大的突破？

<details>
<summary>Original English</summary>

**Tracy Alloway**: And is this, like something that was not obvious before as a solution like this compaction. How important is it for this being like, okay, as a human, I can work on this on a project for a long time. Like how much of an unlock was there?

</details>

**Noah Brier**: 我不确定**压缩**是否是关键。我认为**压缩**功能是有帮助的。好的。**ChatGPT**的做法，就其价值而言，他们不做**压缩**，他们最终会忘记你的消息。所以如果你在一个聊天中，最终你最旧的消息会掉到后面。对于编码来说，这可能帮助不大，但有权衡。两种技术都有效。我认为从根本上说，**Claude Code**的特别之处不在于**压缩**，而在于它能够在你的电脑上读写文件的能力。

<details>
<summary>Original English</summary>

**Noah Brier**: I'm not sure compaction was the okay. I think the compaction functionality is helpful. Okay. The way ChatGPT does it for what it's worth is they don't do compaction, they just forget your messages eventually. So if you're in one chat, eventually your oldest message is going to fall off the back. For coding, that's probably less helpful, but there are trade offs. I have both techniques work. I think fundamentally the thing that is special about cloud code is not the compaction, it's the it's the ability to write and read files on your computer.

</details>

**Tracy Alloway**: 是的。这意味着你可以随时写下记忆。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. Which means you can always write off memories.

</details>

**Joe Weisenthal**: 那是什么意思？写下记忆？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And then what does that mean? Right off memory.

</details>

**Noah Brier**: 所以你可以说，嘿，记住这个东西对未来的会话真的很重要。我希望总是以这种方式工作。所以在我的代码库中，我有一套文档解释了我喜欢如何做事，而**Claude Code**犯了一个错误。所以下次我可以写一个记忆，本质上它被写成他们称之为**技能**的东西。你可以把它写下来，然后你说，嘿，每当你遇到这种情况时，我希望你以这种方式操作。而这种在每个会话中都存在的东西，只有当你能把它存储为文件时才能做到。

<details>
<summary>Original English</summary>

**Noah Brier**: So you could say, hey, I it's really important that I remember this thing for future sessions. I want to always work this way. So in a code base of mine, I have a set of documentation that explains how I like to do things, and cloud code makes a mistake. And so the next time I can write a memory, essentially it's written as a thing they call a skill. And you can write it off and you say, hey, whenever you run into this, I want you to operate in this kind of way. And that existing across every session is really a thing you can only do when you can store it as a file.

</details>

**Noah Brier**: 是的，当你在这个仅仅通过API来回操作的环境中时，你无法以完全相同的方式做到这一点。所以对文件系统的访问是一个非常重要的部分。第二个就是**Unix命令**，我的意思是计算机，每个计算机程序都运行在某种基线功能之上。**Unix**的设计者构建它们的方式非常优雅，它们非常小。它们都只做一件事，而且它们都是可组合的。在编码术语中，可组合意味着它们可以被链接在一起。对吧。所以你可以说，嘿，查找提到这个词的文件，然后从这些文件中，我希望你执行第二个操作。然后从那个操作的输出中，我希望你执行第三个操作。这已经内置在**Unix**中。你只需在它们之间放一个小管道，然后将它们从一个管道到另一个，就是这样。所以你给它访问权限来编写这些命令，突然之间它就获得了这些第二和第三阶效应，这些效应非常强大，并且经过了很长时间的构建。

<details>
<summary>Original English</summary>

**Noah Brier**: Yeah, it's a thing you can't do in quite the same way when you're operating in this environment where it's just going back and forth to the API. So this access to the file system is one really big piece. And then the second is, is just the Unix commands, I mean computers, every computer program lives on top of the sort of baseline functions. And the way that the designers of Unix built them is really elegant and they're very small. They all do one thing and they're all composable. And in coding terms, composable means they can be they can be chained together. Right. And so you can say, hey, look for files that mention this word and then from those files, I want you to take this second action. And then from the output of that action, I want you to take a third action. And that's just built into Unix. You literally just put a little pipe in between and you just pipe them from one to another and, and that's it. And so you give it access to write these commands, and all of a sudden it gets these sort of second and third order effects that are just incredibly powerful and built over a really long time.

</details>

**Tracy Alloway**: 那么，**Claude Code**与其他模型不同之处，有多少是克服技术挑战，有多少只是一个好主意？因为听你描述，我的意思是，允许访问计算机似乎是显而易见的。就像，我们来做吧。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So how much of Claude code, the way it's different to other models, how much of that was overcoming technological challenges versus like just having a good idea because hearing you describe it, I mean, giving access to a computer seems like kind of obvious. Like, let's, let's just do that.

</details>

**Noah Brier**: 我对此没有一个很好的答案。我认为这有点像一个好主意。是的。我认为他们在某些模式上做得非常好。他们显然不仅是才华横溢的工程师，而且是关于如何构建它的思想家。比如，**Claude Code**内部的基元非常智能。然后他们所做的事情，以及**Anthropic**的**Claude Code**首席开发者**Boris Cherny**，他经常谈论**潜在需求**。对吧。**潜在需求**基本上就是，嘿，看看人们如何使用这些系统，然后找出方法将其作为产品本身的一部分。

<details>
<summary>Original English</summary>

**Noah Brier**: I don't have a good answer to that. I think that it was kind of just a good idea. Yeah. I think they did some patterns really well. They're clearly incredibly talented, not just engineers, but kind of thinkers about how to structure it. Like, the, the primitives inside called code are just smart. And then the thing that they've done and Boris Cherny, who's the, lead developer on cloud coded anthropic, he talks about, latent demand a lot. Right. And latent demand is basically just, hey, look at the ways people are using these systems and then figure out ways to make that a part of the product itself.

</details>

**Noah Brier**: 我认为他们做得非常出色，当你有一个由喜欢谈论如何使用这些东西的开发人员组成的社区时，这很容易。我惊讶于速度之快，你知道，我有一个由15位CTO组成的小社区，他们都虔诚地使用这些东西。你知道，当我们刚开始那个社区时，他们花了一个月的时间，我会在聊天中看到它，然后一个月后，它就会被内置到**Claude Code**中。然后越来越多地，感觉就像一天之后，他们就在听取意见。但我认为他们不仅投入其中，而且他们从根本上来说，你知道，他们正在“自食其果”（dog fooding）。他们使用自己的产品，当你，你知道，他们谈论**Anthropic**的生产力工程，生产力。你知道，尽管增长速度惊人，但它仍在持续上升。而且，你知道，任何构建过必须管理大规模软件，大规模代码库的人都知道，这并不是常态。

<details>
<summary>Original English</summary>

**Noah Brier**: I think what they've done brilliantly, and this is kind of easy when you have a community of developers who are nerds, who want to go talk about all the ways that they're using these things, is they have. I am amazed at the speed in which, you know, I have a small community of 15 CTOs who all use this stuff religiously. And, you know, when we first started that community, it took them a month to I would see it in the chat, and then a month later, it would get built into cloud code. And then increasingly like it's like a day later, it feels like they're just they're just listening to it. But I think they're just not only tapped in, but they're really fundamentally, you know, they're they're dog fooding. They use their own products when you, you know, they talk about the productivity engineering, productivity at anthropic. You know, despite growing at a crazy clip, it continues to go up. And, you know, anybody who's built had to manage large scale pieces of software, large scale codebases knows that's not the norm.

</details>

**Tracy Alloway**: 所以**VS Code**和**Cursor**，这些都是IDE。**Claude Code**不是IDE，它是一个**CLI**。一个清晰的命令行界面。明白了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So vs code and cursor, these are ideas. Cloud code is not an ID, it's a CLI. A clear command line interface. Got it.

</details>

**Joe Weisenthal**: 其他实验室现在也有类似的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And the other labs now they also have close.

</details>

**Tracy Alloway**: 那么为什么我们都在谈论**Claude Code**和AI收费？因为用户被称为**Codex**。我不知道**Gemini**叫什么。我想它就叫**Gem**。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So why are we all talk about cloud code and AI charging. Because users are called Codex. I don't know what Gemini's is called. I think it's just called the gem.

</details>

**Joe Weisenthal**: 好的，所以。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Okay, so.

</details>

**Tracy Alloway**: 为什么我们都在谈论**Claude Code**而不是其他拥有类似功能的类别？有什么区别？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Why are we all talk about cloud code rather than the other classes that kind of have the same thing? Like what is the difference?

</details>

**Noah Brier**: 我认为首先也是最重要的是，他们是第一个。好的。所以我认为他们做得更多。而且，你知道，从我非常个人的观点来看，我认为他们在权限模型方面做得更聪明、更好。所以，你知道，真正危险的事情之一是你的电脑上运行着这个东西。你不希望它删除所有东西。对吧？而且，他们有一个非常细粒度的权限模型，你可以说，嘿，我只想允许这一次。我希望总是允许它。你知道。我总是点击“总是允许”。我生活在边缘。你可以，你可以，下次你运行它时，你可以只设置一个标志，说“危险地跳过权限”。它就会，他们称之为“yolo模式”。

<details>
<summary>Original English</summary>

**Noah Brier**: I think first and foremost they were first. Okay. So and I think they've they've had a lot more. And you know, from my very personal opinion, I think they've done some things smarter and better as far as the Permissioning models. So, you know, one of the really dangerous things is you've got this thing running on your computer. You don't want it to go and delete everything. Right? And, they have a very fine grained permissioning model where you can say, hey, I want to allow this just this one time. I want to always allow it. You know. I always click, always allow. I living on the edge. You can, you can, next time you run it, you can just do a flag that says dangerously skip permissions. And and it'll just, they call it yolo mode.

</details>

**Noah Brier**: 我认为更根本的是，如果我比较**Codex**和**Claude Code**，我认为这是关于你希望AI做什么的哲学差异。对我来说，**Codex**（它非常出色）非常专注于构建一个代理，你可以直接给它一些东西，它就会去做。所以我希望给它那个任务。我不想干预。我不想给它更多的反馈。而**Claude Code**的设计更像是一个**配对程序员**。所以，你知道，在工程领域，**配对编程**已经存在了一段时间。这是一种非常奇怪的生产力方式，你让两个工程师解决同一个问题，结果是你可以得到更好的代码，而且更少。

<details>
<summary>Original English</summary>

**Noah Brier**: I think I think more fundamentally, though, if I look at at Codex versus Cloud Code, I think it's, a difference in philosophy around what you want. AI to do. To me, Codex, which is excellent, is very focused on building an agent that you can just give something to and it'll just go do it. So I want to give it that task. I don't want to intercede. I don't want to give it any more feedback. And cloud code is much more designed to be, kind of a pair programmer. And so, you know, in engineering, pair programing has existed for a while. It's a really weird sort of productivity thing where you put two engineers on the same problem and it turns out that you can get better code and worse, multiply.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Noah Brier**: 它弥补了这样一个事实，显然，你知道，你把人员翻倍了，但由于bug少了很多，因为有两双眼睛，所以对很多人来说似乎都奏效了。大多数公司不实行这种做法。但我认为**Claude Code**从根本上来说，更多是按照这种方式设计的。它是一个**配对程序员**。它，你知道，每当我开始一个项目时，我都会以计划模式开始。所以你以计划模式开始，你制定一个计划。我真的，我的意思是，我在计划模式上花了很多时间。你走一遍，它会给你一个计划。它会问你感觉如何。你可以给它很多指导，然后它才会开始执行。所以，你知道，我们正在一起工作，我实际上现在设计了一个完整的系统，我使用一个叫做**Linear**的任务管理系统。所以我让**Claude Code**把任务写到**Linear**上。然后我与**Claude Code**合作编写了一份文档，帮助决定什么时候应该把它分配给**Codex**，什么时候应该把它交给**Claude Code**。所以如果它定义得足够紧密和简单，我就直接把它发送给**Codex**。它完全独立地完成。然后如果它足够复杂，我认为需要我的时间和注意力，那么它就会为我保存下来，我们一起做。我们会一起工作。所以如果它涉及到足够重要，如果它改变了数据模型的某些部分，我还会使用其他一些相当基本的标准。但对我来说，这就是根本的区别。而且，你知道，我发现**Claude Code**以这种方式非常适合我想做的事情和我想工作的方式。

<details>
<summary>Original English</summary>

**Noah Brier**: And it sort of makes up for the fact that obviously, you know, you're doubling the staff on it, but because of how many fewer bugs because you have both sets of eyes, it it has seemed to work out for many folks. Most companies don't practice it. But I think cloud code fundamentally is much more designed in that way. It's a pair programmer. It's, they, you know, whenever I start a project, I start in plan mode. So you start in plan mode, you put together a plan. I really I mean, I spend a lot of time in plan mode. You go through you, it gives you a plan back. It asks you how you feel. You can give it a whole bunch of direction, and then it's only then that it goes off and it goes into it. So, you know, we're working together and I actually have a whole system now that I've designed where, I use a task management system called linear. So I have quad code write tasks off to linear. And then I've worked, with cloud code to write a document that helps sort of decide a set of heuristics to decide when you should assign it to Codex versus when you should give it to cloud code. And so if it's tightly defined enough and simple enough, I just send it off to Codex. And it does it totally independently. And then if it's complicated enough that I think it requires my time and attention, then it it saves it for me, us to do together. And we'll work on it together. And so if it's, it's sort of touching, kind of important enough if it's changing some part of the data model, there's these other kind of, you know, fairly basic set of criteria that I use. And, but that to me is the fundamental distinction. And, you know, I find cloud code in that way to be just in it sort of fits what I want to do and how I want to work. Much better.

</details>

### AI对工程师工作流程的影响

**Joe Weisenthal**: 再多谈谈它如何实际影响工程师的工作流程，因为，你知道，我的印象是人们可以编码，对吧？编码问题在这一点上已经解决了。即使你不会编码，即使你不是专业工程师，你也可以从印度或印度尼西亚或其他地方雇人为你编写代码。也许他们需要一周时间，而不是用**Claude Code**两天。但这到底在多大程度上改变了工程师的工作流程？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Talk a little bit more about how it actually impacts the workflow of an engineer, because, you know, my impression was people can code, right? Like the coding problem is kind of solved at this point. And even if you can't code, even if you're not a professional engineer, you can hire someone from like India or Indonesia or wherever to just write you a code. Maybe it'll take them a week instead of like two days with cloud code. But how much does this actually change the workflow for an engineer?

</details>

**Noah Brier**: 彻底改变了。我的意思是，我会说在过去的三个月里，我个人写了，我不知道，几百行代码，我，我主要是管理一组代理，他们代表我编写代码。而且，你知道，越来越有趣的是，我最近一直在思考，在某些方面，它只是把我带回了软件开发中一直存在的核心挑战，那就是如何管理大规模软件开发项目？**协调**。对吧。它已经变成了一个**协调问题**。我花了很多时间来设计我的**Claude Code**系统，以确保代码通过所有适当的检查，并且它拥有所有这些东西。

<details>
<summary>Original English</summary>

**Noah Brier**: As completely as it could be changed. I mean, I would say that over the last three months I've written personally, I don't know, a few hundred lines of code, like, I, I am mostly a manager of a set of agents who are writing code on my behalf. And, you know, increasingly, what I think is interesting, I've been thinking about this bunch lately is like, in some ways, it's just bringing me back to the core challenge that has always existed in software development, which is how do you manage, large scale software development projects? Coordination. Right. It has become a coordination problem. And, and I spent a lot of time sort of now designing my cloud code system to ensure that code goes through all the proper checks and that it it has all these things.

</details>

**Noah Brier**: 另一件让代码成为特别适合做这件事的地方是，代码是可验证的，而其他大多数工作则不是。所以，你知道，通过代码，你可以验证构建是否成功，对吧？所以你可以说，嘿，我想构建这个，我想构建这个包。我想确保它真的能构建成功，并且不会有任何失败。这是一个非常简单的检查。它要么是真的，要么不是真的。程序员还会使用**linting**。所以**linting**是一种静态代码分析方法。它基本上试图提前发现代码库中不会工作的东西，你可以预测到，显然，你无法预测，**Alan Turing**证明你无法确定代码是否会运行。但它有一些模式和东西可以找到。它本质上是进行静态模式分析。所以，你知道，你还没有运行所有这些东西，但是，你对此越有主见，你就能让它经历更多的步骤。所以我发现，你知道，我现在有点像设计师，老实说，作为一名企业家和公司CEO，这一直都是我的工作。我越来越少地成为一个编写代码的人。我越来越多地成为一个设计系统的人，在这种情况下，是一个拥有许多编写代码的人的公司。

<details>
<summary>Original English</summary>

**Noah Brier**: The other thing that, you know, makes code a particularly good place to do this is that code is verifiable in a way that, you know, most other work is not. So, you know, with code, you can verify that the build works, right? So you can say, hey, I want to build this, I want to build this package. I want to make sure that it's actually going to build and that there's not going to be no failures. That's a very easy check. It's either true or it's not true. There's also coders use linting. And so linting is a way to kind of look it's static code analysis. So it basically tries to sort of find, things in your code base that are not going to work ahead of time, where you can predict that obviously, you can't predict, Alan Turing, proved that you can't predict, with certainty whether code is going to run. But there are certain patterns and things that it can find. It's essentially does static pattern analysis. And, so, you know, you haven't run all these things, but, the more kind of opinionated you can be about that and the more steps you can have a go through. So I find, you know, now I'm kind of the designer, which honestly, as an entrepreneur and as a CEO of companies like that's kind of always been my job. Like I've been up not I have less and less been a person who writes code. And more and more I've been a person who designs a system, in that case, a company with a bunch of people who write code.

</details>

**Joe Weisenthal**: 有趣的是，在我看来，撇开**Claude Code**不谈，**Claude**本身就以“一个更友好的聊天机器人”而闻名。人们发现它，你知道，**ChatGPT**似乎真的很谄媚。我仍然认为它，我知道它有所改进，但我实际上认为它改进得不够。它仍然是。人们喜欢**Claude**的散文风格。我很好奇在**配对工程**模型中，是否存在另一个优势，那就是这里有一个聊天机器人，在你迭代时与之交谈不会令人烦恼，以及这是否是与**Codex**或其他任何东西进行编码之间的有意义的区别。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: One of the funny things it seems to me is that setting aside clawed code code itself has a reputation for. It's a nicer chat bot to talk to people, find it, you know, ChatGPT seems to really be sycophantic. I still think it's. I know it's improved, but I actually don't think it's improved enough. It's still. People like the prose style of, claw clawed. And I'm curious that in the pair trading, pair trading, I'm thinking about finance, the peer engineering model, whether there is also an edge there, which is like here is a chat bot that is not annoying to talk to while you're iterating, and whether that is like a meaningful distinction between, you know, coding with Codex or whatever.

</details>

**Noah Brier**: 是的，我不知道，我告诉你，它仍然可能非常烦人。而且它有时仍然会对我做出的设计选择过于热情，或者注意到一些我不需要的东西。我正在做一个关于语言学的项目，我最终不得不说，直截了当地告诉我，这有多糟糕？然后我说，我实际上说的是，假设你是一位拥有博士学位的定量语言学家。请给我一个诚实的评估，我们现在的情况如何。它说，你开发了一个不错的玩具，但没有证据表明它真的有效。我当时想，好吧，很高兴听到这个。我实际上，你知道，我很欣赏这一点。它非常直率，不，你知道，它仍然很有礼貌，但它说，这并没有真正显示出任何东西，你根本没有证明你的软件声称的功能。

<details>
<summary>Original English</summary>

**Noah Brier**: Yeah, I, I don't know, I it still can be very annoying, I can tell you. And it'll still sometimes, be overly, overly effusive with me about a design choice I made or sort of noticed something, which I could live without. I so I'm working on this project that's, doing this linguistic things, and I eventually had to say, like, give it to me straight. How bad is this? And then so I said, I said, actually, what I said was and assume for a moment that you are a quantitative linguistics for the PhD. Give me your honest assessment of where we are with this. And it said, like you've developed a nice toy and there's no evidence that it actually does. And I was like, okay, that's nice to hear. I actually like I, you know, I appreciate that. And it was like a very blunt, no, you know, it's still like polite, but it was like, this does it you do have a really showing anything you haven't really established at all that your software does what it claims to.

</details>

**Noah Brier**: 是的，我想是的。我认为从风格上来说，我个人同意。顺便说一句，我对**Claude**与**OpenAI ChatGPT**模型的理论是，我认为**Claude**实际上更擅长反映你给它的东西。所以我认为我们认为它更好的部分原因在于它更擅长假装是我们。是的。所以我们倾向于喜欢那是纯粹的猜测。但这一直是我的理论。它以不同的方式奉承你。我认为它以一种更微妙的方式奉承你。是的。很有趣。但是，很长一段时间以来，**Anthropic**一直在生产最好的编码模型，你知道吗？我的意思是，现在可能有一些争议，但是，你知道，实际上有一个关于**Cursor**的精彩故事，**Cursor**最初并不是那么好。然后**Sonnet 3.5**发布了，突然之间**Cursor**变得非常棒，**Cursor**成为了每个人都开始使用的工具。但直到这个其他模型发布，他们才把它作为默认模型。

<details>
<summary>Original English</summary>

**Noah Brier**: Yeah, I think so. I think stylistically I kind of personally agree. I my theory, by the way on on Claude versus OpenAI ChatGPT models is I think Claude is actually better at sort of reflecting what you give it. And so I think part of why we think it's better is it it's better at pretending it's us. Yeah. And so we tend to like that is this is purely, speculation. But that's always been my theory on. On to flatters you in a different. Way. I think it's flattering you in a much. More subtle way. Yeah. Interesting. But, for a long time, just, anthropic has been producing the best coding models, you know? I mean, there's there can be some debate there now, but, you know, there's a great story from cursor, actually, where cursor basically wasn't that good. And then sonnet 3.5 came out and all of a sudden cursor was amazing and cursor became a tool that everybody started using. But it wasn't until this other model came out and they made that the default model.

</details>

**Noah Brier**: 而且，你知道，就其价值而言，我认为另一个启示是，这是我们在市场上看到的一个大主题，**Claude Code**团队所谈论的是，你必须不断地在AI领域超前构建，这在软件世界中是非常独特的，你总是希望构建那些工作效率达到70%或80%的东西，因为如果你真的花时间把它提高到90%或100%，当下一个模型出现时，你将失去所有获得的收益。而且，你知道，考虑到这些模型上投入的资本支出，下一个模型将会出现，它将会非常棒，你只需要顺应潮流，你不想浪费六个月去获得额外的3%，而新模型会给你额外的7%。

<details>
<summary>Original English</summary>

**Noah Brier**: And, you know, I for what it's worth, I think the other takeaway from that, which is a kind of big theme we see in the market, is the thing that, the Cloud Code team has talked about is, you just constantly have to be building ahead with AI in a way that is very unique in the world of software, where you kind of always want to build things that are working at like 70 or 80%, because if you really spend the time to get it up to 90 or 100, you're going to lose all the gains you get when the next model comes out. And the, you know, with the amount of CapEx being spent at these models, like there's a next model that's going to come out, that's going to be awesome, and you just kind of want to be downstream from that, and you don't want to waste six months getting an extra 3% when that new model is going to give you an extra seven.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 这是AI唯一的确定性，就是总会有新模型出现。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: This is the only certainty with AI is like, there's always going to be a new model.

</details>

**Tracy Alloway**: 我们正在使用的模型是迄今为止最糟糕的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: It's the worst model ever used is the one that we're using.

</details>

**Joe Weisenthal**: 对，对。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's right, that's right.

</details>

### AI与“编码文盲”的未来

**Joe Weisenthal**: 我们都会变成**编码文盲**吗？如果每个人都使用通用语言，我们是不是会忘记如何编码？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Are we all going to become coding illiterate? Are we just going to forget how to code if everyone's using, you know, general language.

</details>

**Tracy Alloway**: 忘记？我从来没学过。

<details>
<summary>Original English</summary>

**Tracy Alloway**: To forget I never learned.

</details>

**Joe Weisenthal**: 是的，好的。你知道我在想什么吗？你知道**Palantir**的CEO **Scott Karp**吗？他有句话说：“我年轻的时候太穷了，买不起车，所以没学开车。现在我太有钱了，所以没学开车。”我觉得我年轻的时候太笨了，学不会编码。现在。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, okay. You know what I've been thinking about? You know that, Scott Karp, the, CEO of Palantir. He has that line. He's like, when I was young, I was too poor to have a car or so I didn't get a. So I never learned to drive. And now I'm too rich. So I never learned to drive. I feel like when I was young, I was too dumb to learn to code. And now.

</details>

**Tracy Alloway**: 你已经超越了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: You leaped. Ahead.

</details>

**Joe Weisenthal**: 是的。不，我现在太聪明了，学什么Python或HTML之类的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. No, I'm too smart to learn Python or HTML or whatever.

</details>

**Noah Brier**: 我个人对此有几个看法。所以，第一个是，我只是觉得这就像所有技术一直以来的担忧。有一篇论文发表出来，表明人们，你知道，他们因为使用**ChatGPT**而忘记了更多东西。但是，你知道，在**柏拉图**的《**斐德罗篇**》中，他担心人们会因为开始书写而忘记东西。而且，你知道，我认为那里的权衡是相当不错的。我们获得了科学革命，还有其他一些东西。所以，你知道，我认为这是一种自然的条件反射。话虽如此，当人们，你知道，**Claude Code**团队谈论他们现在写了多少代码时，这非常奇怪。

<details>
<summary>Original English</summary>

**Noah Brier**: I have a couple of takes on this one personally. So, the first one is I just think like this is the worry of all technology ever. There was a paper that came out that showed that people were, you know, they were forgetting more things or something because they were using ChatGPT. But, you know, in Phaedrus, Plato was worried that people were going to forget things because they started writing things down. And, you know, I think the trade off there was pretty good. We got this scientific revolution, a couple other things. So, you know, I think that's the sort of natural kneejerk. With that said, it is I it's very strange when you have people, you know, the Cloud code team is talking about how little code they write.

</details>

**Noah Brier**: 现在，我区分了**“氛围编码”**和那些从未写过代码的业余人士。顺便说一句，我认为这很棒。而且我认为，有很多软件开发人员对此非常生气，因为他们声称是为了安全原因或其他什么。但我认为从根本上说，这只是他们的人被侵犯了地盘。但我认为这令人难以置信。我的意思是，我的九岁孩子，**氛围编码**了一个网站。

<details>
<summary>Original English</summary>

**Noah Brier**: Now, I draw a distinction in between the sort of vibe coding and the kind of amateur people who have never written code. And I think that is amazing, by the way. And I think, there's a lot of software developers who are really mad about that, because they're, they, they claim it's for safety reasons or whatever. But I think fundamentally it's just they've got people on their turf. But I think that's incredible. I mean, my, I, my, my nine year old, vibe coded a website.

</details>

**Tracy Alloway**: 哦，哇。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Oh, wow.

</details>

**Noah Brier**: 为了秘密圣诞老人。她现在十岁了。如果我叫她九岁，她会生我的气，但我想她是在九岁时得到它的。但是，那太棒了，对吧？我不知道，那太棒了。这是一种人们以前无法表达自己的方式。你完成了你的语言学项目。那很有趣。但是，是的，我也认为另一个，另一个正在专业软件开发人员身上发生的事情，当你听到**Anthropic**或你知道我在说什么时，就是，你知道，代码正在经历这个过程，而且，你知道，所有的代码仍然由人们审查。如果它没有达到人类的水平，我们是不会让它发布的。

<details>
<summary>Original English</summary>

**Noah Brier**: And, for secrets. Santa. She's now ten. She would get mad at me if I called her nine, but I think she got it when she was nine. But, that that's awesome, right? I don't know, that's amazing. That's a way for people to express themselves in a way that they couldn't before. You did your your linguistics project. That's that's fun and interesting. But yeah, I, I also think the other the, the thing that's happening with professional software developers, when you hear from anthropic or you know what I'm talking about, it's, you know, the code is going through this process and, you know, all the code still gets reviewed by people. We're not letting it get out the door if it's not at the same level as human.

</details>

**Noah Brier**: 而且，令人惊奇的是，我同时运行着五个这样的会话。对吧。所以我有了像软件这样并行开发的方式，这是不可想象的。而且，你知道，另一件事是，现在最好的软件工程师编写的代码最少。无论如何，你知道，经典的例子是，初级开发人员和高级开发人员的区别在于，初级开发人员遇到问题时，他们会坐下来，把手指放在键盘上，开始编写代码。而高级开发人员遇到问题时，会坐下来思考三个小时，试图找出最好的解决方案，然后花五分钟编写代码来完成它。

<details>
<summary>Original English</summary>

**Noah Brier**: And it's just but what's amazing is I'm, I'm running five of these sessions at a time. Right. And so I've got like, software being developed in parallel in a way that is unimaginable. And, you know, the other thing is just, now the best software engineers wrote the least code. Anyway, you know, the sort of classic story of, like, the difference between a junior developer and or senior developer is that a junior developer gets a problem and they sit down and they put their fingers on the keyboard and they start writing code. And, senior developer gets a problem and sits there for three hours and tries to figure out what the best way to solve it is, and then spends five minutes writing code to get it done.

</details>

**Tracy Alloway**: 真正的优雅是克制。我就是这么说的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: True elegance is restraint. That's what I say.

</details>

### AI对企业招聘与中层管理的影响

**Joe Weisenthal**: 你在为之工作的公司里看到了什么？比如，我很难相信，我可能对此持怀疑态度，但感觉现在我们正处于技术发展的这个阶段。就像，如果我是公司，就像我说的，你可以用以前需要有人亲自动手的方式来构建数据图表。在你交谈的公司中，这是否正在影响他们对招聘职位和所需技能的看法？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: What are you seeing in the companies you're working for? Like, I find it hard to believe, and I was maybe skeptical of this, but it feels like right now we're here with technology. We're like, if I were like, companies like, like I said, you can build a charts of data in a way that used to be like someone would have had to get their hands dirty or etc. in the companies that you talk to is right now this having an effect on how they think about what positions they're hiring for and the skills they're looking for and so forth.

</details>

**Noah Brier**: 我认为现在很难回答这个问题。我认为当然，我个人认为，如果我看看过去几年科技行业的裁员情况，我认为其中一部分原因只是看到了这些模型的产出，然后说，嘿，这些模型能够产生中位数。我有一大批中层管理人员，他们的产出处于65%的水平。而现在是，我可以用每百万token 1.50美元的价格生产中位数，或者用几十万美元一年的价格生产65%的水平。这是一种相当简单的权衡。我想。

<details>
<summary>Original English</summary>

**Noah Brier**: I think that it's hard to answer right there. I think that certainly, I do think, I personally think if I look at the sort of layoffs in the technology industry over the last couple of years, I think some part of that is just looking at the output of these models and saying, hey, these models are able to produce it, you know, the median. And I have a whole bunch of sort of middle managers who are producing at the 65th percentile. And it's like, I can produce median for $1.50 per million tokens, or I can produce 65th percentile for however many hundreds of thousand dollars a year. It's a sort of fairly simple trade off. I think.

</details>

**Noah Brier**: 所以我确实认为有很多下游效应。我认为正在发生的另一件事是，中层管理人员正面临威胁，因为人们意识到，嘿，这些模型之所以如此出色，部分原因在于，我认为它们就像一个**模糊接口**。它们可以把任何数据转换成任何其他数据，对吧？你可以把数据从一种格式转换成另一种格式。你可以拿一个PDF，把它变成图表。对吧。有很多人就是做这个的。或者，你知道，如果你想想产品经理做什么，很多产品经理的工作就是获取人们如何使用产品的数据，然后试图将其转换成工程师可以用来决定做什么的格式。我认为很多这些过去只是**知识传递**的部分。

<details>
<summary>Original English</summary>

**Noah Brier**: So I do think there's a lot of downstream effects. I think the other thing that's happening is, is kind of like middle management is under threat because it's the realization that, hey, like part of what these models are amazing at is, is, I think of them as like a fuzzy interface. They can sort of turn any data into any other data, right? You can sort of transform data from one format to another. You can take a PDF and you can turn it into charts. Right. And there's whole people who exist. Or, you know, if you think about what product managers do, a lot of what product managers do is they take how people are using a product and they try to transform it into a, format that engineers can then use to figure out what to do. And I think a lot of those kind of, a lot of those pieces that used to just be kind of transferring knowledge.

</details>

**Joe Weisenthal**: 我一直说，Tracy，我认为在任何组织中最重要的角色之一本质上是**翻译工作**。你在新闻编辑室里看到，比如，这里有一个专门研究新兴市场货币的团队，然后他们必须告诉高级编辑他们在做什么。但那些可能更通才的高级编辑并不真正知道，比如，为什么，你知道，某个。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: I've always said, Tracy, I think one of the most important roles in any organization is essentially translation work. And you see it in the newsroom where it's like, here is a team specialized in emerging market currencies, and then they have to like they have to then tell the senior editors what they're working on. But the senior editors who are maybe more generalist don't really know, like, why like some sort of like, you know, one.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 而且Carrie很重要，任何组织中一个真正重要的角色本质上是能够在通才团队和专家团队之间进行**翻译**的团队。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And Carrie is important and that a really important role within any organization is essentially the, the team that can translate between the generalist team and the specialist.

</details>

**Noah Brier**: 绝对是。

<details>
<summary>Original English</summary>

**Noah Brier**: Absolutely.

</details>

**Joe Weisenthal**: 所以我，那在工程领域是一个有趣的观察，就像，好吧，这些工具在某种意义上是**翻译工具**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And so I that's an interesting observation in the sort of engineering world is like, okay, these are tools that are in some sense translation tool.

</details>

**Tracy Alloway**: 我完全同意，顺便说一句，但我们谈到了**氛围编码**。Joe有这个应用程序，我想你并不打算把它货币化。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So we talked to I agree completely by the way, but we talked about vibe coding. And Joe has this application, that I don't think you're looking to monetize.

</details>

**Joe Weisenthal**: 不，我只是想为世界做贡献。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: No, I'm just trying to make it for the good of the world.

</details>

**Tracy Alloway**: 对。好的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Right. Okay.

</details>

### SaaS行业的颠覆与“自建”与“购买”的转变

**Tracy Alloway**: 那是什么时候成为普遍现象的？但就像这给**软件即服务（SaaS）**带来了巨大的问题，对吧？因为如果每个人都能编写自己的软件，你就可以复制任何现在正在收费的东西。软件会发生什么？

<details>
<summary>Original English</summary>

**Tracy Alloway**: When did that become a common, What did. But like this opens up massive questions for software as a service, right. For SAS. Because if everyone can write their own software, you can replicate anything that's out there that is currently charging money. What's going to happen to software?

</details>

**Noah Brier**: 我认为软件行业会很惨。至少大部分会。不是全部。你知道，你仍然，这取决于你是否称之为云提供商软件。你知道，你仍然需要在某个地方运行这些东西。而且我认为有一些特定类型的软件，你知道，你真的不想自己编写。你知道，作为一个尝试构建项目管理系统的人，我宁愿。我认为任何人都不应该从事那个业务。但我确实认为从根本上说，我的意思是，我们每天在企业内部都看到这种情况。**“自建”与“购买”**的钟摆已经摆动了。而且，你知道，我的意思是，我曾经经营一家**SaaS**公司，我们向企业销售，你知道，很长一段时间以来，我认为这很有道理，对吧？因为，嘿，自己构建这个东西根本不划算。

<details>
<summary>Original English</summary>

**Noah Brier**: I think software is pretty screwed. A lot of it at least. Not all of it. You know, you still, depends on whether you call that cloud provider software or not. You know, you still need to run this stuff somewhere. And I think there's, there's certain kinds of software that, you know, you just don't really want to be in the business of writing. You know, I, as someone who's tried to build a project management system, I'd really rather. I don't think anybody should be in that business. But I do think fundamentally, I mean, we see this every day inside enterprises. The the sort of build versus buy pendulum has just swung. And, you know, I mean, I used to run a SAS company and we sold to enterprises and, you know, for a long time that, that I think that made a lot of sense, right? Because like, hey, it just didn't make sense to try to build this thing on your own.

</details>

**Noah Brier**: 但代价是，你知道，一个是价格，对吧？而且它变得越来越贵。另一个代价是你为很多你不需要的东西付费。对吧？因为构建**SaaS**的全部工作是你需要概括问题，并说你构建的东西对每个人都适用，这意味着你要么必须适应，要么必须构建这种非常可配置的软件。而且我认为，我亲眼所见的是，在这些组织内部，你现在可以解决非常有价值的特定问题。而且你不仅可以比通用软件更好地解决它们，而且在很多方面，你可以花更少的钱来做，因为你试图解决的东西更少。你不需要你购买它的其他16个功能，你只需要你真正关心的那一个。

<details>
<summary>Original English</summary>

**Noah Brier**: And so but the price of that was, you know, won the price, right? Like, and it got to be more and more expensive. The other price was that you were paying for a lot of stuff you didn't need. Right? Because the whole job of building SAS is you need to generalize problems and say you build things that are going to work for everybody, and that means either you have to sort of adapt or you have to build this sort of very configurable, software. And I think and what I see just, you know, firsthand is that, inside these organizations, you can now solve very specific problems that are highly valuable. And not only can you solve them better than generic software, but you can actually, in a lot of ways, do it for less money because you're trying to tackle less stuff. You didn't need the 16 other features you bought it for, the one that you really, really cared about.

</details>

**Noah Brier**: 所以，我认为其中一部分，你知道，我不喜欢，我绝对认为软件行业有一些部分会，你知道，度过难关。你将，没有人想处理工资单，对吧？就像，你知道，你仍然会购买一些工资单软件，你仍然会拥有它。但是，你知道，我确实认为有很多部分，软件本质上是作为数据库的包装器而存在的。现在你只需要，你知道，只用数据库就可以做到这一点。然后，你知道，我要说的另一部分是，这不是，这是一种情况的汇合，它不仅仅是编码，还有你拥有AI来完成大量工作的事实。所以，你知道，如果我们暂时以**CRM**为例，对吧，就像，你知道，**Salesforce.com**。

<details>
<summary>Original English</summary>

**Noah Brier**: And so, I think that part of it, you know, I don't like there's, I definitely think there are pieces of the software industry that are going to, you know, come out the other side. You're going to nobody wants to deal with payroll, right? Like, you know, somebody, you're still going to buy some payroll software and you're still going to have that. But, you know, I do think there are a lot of pieces where the software existed essentially as a kind of wrapper around a database. And now you're just going to, you know, with just the database, you can do that. And then, you know, the other piece I'd say here is it's this is not this is a kind of confluence of circumstances where it's not just the coding, it's also the fact that you have AI to do a whole bunch of work. So, you know, if we pick on CRM for a second, right, like, you know. Salesforce.com.

</details>

**Joe Weisenthal**: **Salesforce.com**。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Salesforce.com.

</details>

**Noah Brier**: **Salesforce.com**，我们可以，你知道，你看看它的界面是什么。本质上，它的存在是为了让销售人员获取非结构化数据，即销售会议，并将其转换为结构化数据，以便可以存储在数据库中。现在你有了AI。AI非常擅长直接从源头获取非结构化数据。所以你让人们记录会议，然后它可以将其结构化为你想要的任何数据。这是我第一次感到震惊的时刻之一，那就是我可以给它一个Json接口。我可以准确描述我想要的数据结构是什么，它就会以该数据结构返回给我信息。而我们基本上只是让一群人类做了很长时间的工作，无论是在**CRM**还是项目管理或任何其他地方，而能够摆脱这一切的能力。我认为这确实让很多这些软件公司的价值受到质疑。

<details>
<summary>Original English</summary>

**Noah Brier**: Salesforce.com, we can, you know, you look at what the interface of that is. And essentially it has existed to get salespeople to take unstructured data, which is sales meetings, and turn it into structured data that so it can be stored in a database. And now you have AI. And AI is very capable of taking unstructured data directly from the source. So you have people recording meetings and then it can structured into any data that you want. This is one of the very first sort of mind blowing moments I had was that I could give it, Json interface. I could describe exactly what I wanted the data structure to be, and it would give me back that information in that data structure. And we've just basically been having a bunch of humans do that work for a very long time, whether it's in CRM or project management or any of these other places, and the ability to just kind of get rid of that whole thing. I think it really does bring into question the value of a lot of these software companies.

</details>

**Tracy Alloway**: 嗯，所以我们看到很多软件股票，它们现在看起来像融化的冰块。也许，我想谈谈，我的意思是，这就像，你知道，我们的听众是投资者，这是一个相当高风险的问题，即剩余价值是什么。但再多谈谈**Salesforce**。也许现在是时候了解它到底做什么了，因为它正在被大规模颠覆。现在我们才开始了解**Salesforce**是什么。但我知道它就像很多东西一样，人们在**Salesforce**上构建了应用程序，但这听起来我们正在触及一个，我认为可能是软件行业未来最关键的问题之一。所以再多谈谈当前的方法，以及人们购买**Salesforce**的软件包或订阅服务时购买的是什么。然后，拥有AI，就像生活在你的所有文件相同的世界中，它带来了什么解锁机会。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Well, so we have seen like a lot of software stocks, they look like melting ice cubes right now. Maybe the so what I want to talk I mean this is like you know, our listeners who are investors, there's a pretty high stakes question of like what residual value there is. But talk a little bit more about Salesforce. Maybe this should be a time to learn about what it actually does as it's massively being disrupted. Now we get around to learning what Salesforce is. But I know it's like many things, there are apps that people built on to Salesforce, but this sounds like we're hitting on one. I think probably one of the crucial questions for like the future of the software industry. So talk a little bit more about like the current approach and what people are buying when they buy a package or subscribe to a service from Salesforce. And then what the unlock opportunity is from having, I like, live in the same world as all your files.

</details>

**Noah Brier**: 是的。所以我想如果你我们把**CRM**作为一个通用类别，比如说，你知道，那里最大的参与者是。

<details>
<summary>Original English</summary>

**Noah Brier**: Yeah. So I think if you if we take CRM as a general category, say, you know, the biggest players there are.

</details>

**Joe Weisenthal**: 那是客户关系。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's customer relationship.

</details>

**Noah Brier**: 客户关系管理，那就是，你知道**Salesforce**做这个，**SAP**做这个，**HubSpot**为中端市场做这个。你知道，当我思考那个产品，思考我们在企业销售组织内部使用它的方式时，本质上，你知道，它是一个公司数据库。它是一个联系人数据库。它是一个你正在进行的交易数据库，它是一种跟踪所有这些交易的方式。你们之前提到了一点，我认为这真的很重要，那就是在公司内部。有一大群人，他们的存在是为了回答管理层提出的“某件事的状态是什么”这个问题。对吧。而且，你知道，那可以是销售管理，也可以是产品管理。这不重要。对吧？它可以在新闻编辑室里。有人想知道状态是什么，而另一个人则存在去找出这个问题的答案。

<details>
<summary>Original English</summary>

**Noah Brier**: Customer relationship management, that's like where you know Salesforce does it, SAP does it, HubSpot does it for the mid-market. You know, when I think about that product and I think about the way we've used it inside enterprise sales organizations, essentially, you know, it's a database of companies. It's a database of contacts. It's a database of deals you have in the pipeline, and it's a way to track all those deals you guys hit on something before that I think is is really it, which is like inside companies. There is a huge group of people and who exists to answer the question from management of what is the status of something. Right. And you know, that can be sales management, it can be product management. It doesn't matter. Right? It could be within a newsroom. Somebody wants to know what the status is and somebody else exists to go figure out what the answer to that question is.

</details>

**Noah Brier**: 所以从根本上说，我认为那些**CRM**工具首先是为了回答“状态是什么”而购买的，对吧？我的销售管道看起来怎么样？为了回答你的销售管道看起来怎么样，你需要一群销售人员录入交易。这些交易与联系人和公司相关联，他们会说，这笔交易什么时候会完成？本质上，你是在要求销售人员在系统中进行更新来完成这些。而且非常实际地说，我的意思是，你知道，我现在经营一家公司，我们与很多人交谈，我们有很多销售电话。我们记录这些电话并进行转录。然后AI会查看它们，并决定这笔交易应该处于哪个阶段。这比让人去更新它要好得多，因为那些人反正从来不更新。所有这些企业软件的秘密是，没有人按照任何人想要的方式使用它。所以，你知道，我认为这就是，你知道，很多正在发生的事情。

<details>
<summary>Original English</summary>

**Noah Brier**: And so fundamentally, I think those CRM tools are bought first and foremost to answer what is the status, right? What's my pipeline look like? And to answer what your pipeline looks like, you need a bunch of salespeople putting deals in. And those deals are associated with contacts and companies, and they say, when is that deal going to close? And and essentially you were asking the salespeople to make the updates in the system to do that. And just very tactically, I mean, you know, I run a company now, we talk to a lot of we have a lot of sales calls. We record those calls and they get transcribed. And the AI then looks through them and makes decisions about where this deal should be in the process. And it's much better than having somebody try to go update it, because those people never updated. Anyway, the secret of all of this enterprise software is that nobody was using it the way that anybody wanted to anyway. And so, you know, I think that that is sort of, you know, a lot of what's happening there.

</details>

**Noah Brier**: 再次强调，其中一部分是编码，一部分只是核心功能。然后，你知道，你仍然需要数据库，对吧？所以就像，你知道，你看看**Databricks**和**Snowflake**，你知道，我认为那些人仍然处于一个相当好的位置，因为，你知道，所有软件都必须建立在某个数据库之上，你可以读写它。但是，你知道，我认为那些特别关注人类输入的类别。现在当然，你知道，**Salesforce**有一个完整的AI功能，他们说，嘿，你不应该让人类在**Salesforce**中输入，你知道，销售只是很小一部分。我有一个完整的客户支持功能，这显然也有一个有趣的含义，你知道，你正在用AI代理进行支持。所以其中一些又回到了种子。我的意思是，你知道，它变得相当复杂，但我确实认为，我认为根本的潜在问题是，任何购买**SaaS**软件的人，你总是购买其功能的一个子集，没有人会使用**SaaS**的100%功能。所以总会有一个权衡发生，你知道，你花的钱比你需要的要多，因为你没有使用所有这些部分。所以，你知道，如果你能更狭隘地聚焦，那就是你可以说，嘿，我们可以解决这种更狭隘的问题。而且我们不仅可以更狭隘地解决它，我们还可以更有效地解决它。因为，你知道，AI的诀窍是，你越具体，输出就越好，对吧？所以就像，你知道，如果除了编码之外，你只是让**ChatGPT**给你写一个故事，它会给你写一个非常非常中等的故事。对吧？就是中等水平。但如果你与它合作，你知道，那么你就会得到它。你注入的专业知识越多，它就会越超出中位数。而且它会，你知道，当然，这也意味着AI和非AI之间的界限会继续变得模糊。

<details>
<summary>Original English</summary>

**Noah Brier**: Again, it's sort of some of it's the coding, some of it's just the core capabilities. And then, you know, you still need databases, right? So it's like, you know, you look at what Databricks and Snowflake and, you know, I think those folks are still sort of genuinely sitting in a pretty good place where, you know, all software has to sit on, sort of on top of some database that you can sort of read and write to. But, you know, I think some of those categories that were specifically focused on kind of like human input. Now, of course, you know, Salesforce has a whole AI thing and they're saying, hey, you shouldn't have humans inputting in Salesforce, you know, to at sales is just one small piece. I have a whole customer support thing, which obviously also has an interesting implication where you know, you're doing support with AI agents. And so some of it comes back to seeds. I mean, you know, it gets to be fairly complicated, but I do think I think the fundamental underlying thing is anybody who buys software that is, you know, SAS, you're always buying for a subset of the functionality that there's nobody is using 100% of the functionality of SAS. And so there's always a trade off that's happening there where, you know, you're spending more money than you need to because you're not using all of these pieces. And so, you know, if you can more narrowly focus that, that is where you could say, hey, we could solve this kind of more narrow problem. And not only can we solve it more narrowly, we can solve it way more effectively. Because, you know, the trick with AI is that the more specific you are with it, the better the output is, right? So it's like if you know, if outside of coding, if you just asked ChatGPT to write you a story, it's going to write you a very, very median story. Right? Sort of exactly the median. But if you work with it and you, you know, then you're going to get it. The more of your own expertise you imbuing it, the further up above the median it's going to be. And it's going to be, you know, of course, that also means it's less where the line is between what's AI and what's not. AI is going to continue to get blurrier.

</details>

### Claude Code的成本与模型商业化挑战

**Tracy Alloway**: Joe，**Claude Code**实际花费多少？你知道吗？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Joe, how much does cloud code actually cost? Do you know?

</details>

**Joe Weisenthal**: 嗯，我支付了每月200美元的版本，但是。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, I paid for the, 200 or $200 a month version, but,

</details>

**Tracy Alloway**: 像个大款。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Like high roller.

</details>

**Joe Weisenthal**: 是的。不，但是，你知道，我认为它。你可以用低于20美元的专业版获得它。但我很快就达到了限制，我当时想，我的网站还没上线。所以，然后我买了那个事实。然后我支付了5美元的额外计算费用，我当时想，这太蠢了。我想我还是。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. No, but, you know, I think it's. You could get it with the pro version of like, or whatever the, the version of that below $20. But I hit a limit fairly quickly and I was like, I didn't have my website up. So like and then I bought the fact. Then I paid $5 for the extra compute and I was like, this is dumb. I think I'll just.

</details>

**Tracy Alloway**: 是的。哦，好的。所以我们出去吃两顿不错的晚餐，对吧？那不是，你知道，当我那样想的时候，它看起来并没有那么大的问题。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. Oh, okay. So we going out to two nice dinners, right? That's not you know, when I think about that way, it doesn't seem that big of a deal.

</details>

**Joe Weisenthal**: 对你来说值得。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: It's worth it to you.

</details>

**Tracy Alloway**: 是的。好的。所以我想我们都同意**Claude Code**提供的是一项有价值的服务。但我们在介绍中提到了这一点。模型似乎复制得非常非常快。所以**Claude Code**能做的任何事情，我预计另一个模型会在大约一个月内，甚至更短的时间内出现，并做完全相同的事情。这对这些公司的实际估值和模型意味着什么？当差异化如此困难，特别是要维持相当长一段时间时，他们将如何实现货币化？

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. Okay. So I think we can all agree this is like a valuable service that cloud code is providing. But we touched on this in the intro. It seems like the models just keep replicating themselves really, really quickly. So anything that cloud code can do, I would expect another model will come in in like a month, maybe less, and do the exact same thing. What does that mean for the actual like valuations of these companies and the models like how are they going to monetize it when it seems so difficult to actually differentiate yourself, especially for like a substantial portion of time?

</details>

**Noah Brier**: 是的。嗯，所以这里，我认为我们必须区分**Claude Code**和**Claude**模型。所以在**Claude Code**的情况下，如果你使用最新版本，你使用的是**Opus 4.5**，这就是模型。**Opus 4.5**的价格是，你知道，每百万输入token 1.50美元到2美元左右，输出价格也是如此，这大致是尖端模型的现行价格。**Gemini 3 Pro**价格相同。**OpenAI ChatGPT 5.2**也是如此。它们的价格都一样。所以第一件事是，你必须区分这些。所以我认为**Anthropic**正在努力做的一大部分是，他们试图将人们锁定在**Claude Code**中。

<details>
<summary>Original English</summary>

**Noah Brier**: Yeah. Well, so again here, I think we have to distinguish between cloud code and the cloud model. So in Cloud Code's case, if you're using, you know the latest version, you're using opus 4.5 which is the model. Opus 4.5 has a price of, you know, something in the dollar, 50 to $2 for a million input tokens and whatever it is on the output, which is like roughly the going rate for cutting edge models. Gemini three Pro is the same price. OpenAI, ChatGPT 5.2 is there. They're all the same price. So the first thing is, is you have to differentiate between those. And so I think a big part of what anthropic is trying to do is they're trying to lock people into cloud code.

</details>

**Noah Brier**: 事实上，最近一些极客之间发生了一些争议，**Open Code**是**Claude Code**的竞争对手，它曾经允许你使用你的**Claude Max** 200美元计划。所以**Claude Max**计划的诀窍是，如果你只是购买那些token数量，它会比200美元贵得多。这是一个超级超级折扣的计划。你可能拥有我拥有的访问权限，我猜我的200美元每月可以获得1000或2000美元的token。所以这是一个非常非常高补贴的计划，而**Open Code**，它是**Claude Code**的一个开源版本，一个竞争对手。他们找到了一种方法，让你可以在**Open Code**中使用你的**Claude Max**计划，而**Anthropic**上周关闭了它。是的。一些**Open Code**的用户非常生气，因为他们说，这不是你应该做的，或者。我的意思是，我不太确定他们具体说了什么。我从来没有觉得我从中得到了一个特别好的论点。但是，你知道，我确实认为他们想要达到的部分原因是，你知道，在顶级模型中，这些都非常棒，像**Google**、**OpenAI**和**Anthropic**，他们最好的模型都旗鼓相当。

<details>
<summary>Original English</summary>

**Noah Brier**: In fact, there's just some, controversy amongst some nerds, where, open code, which is a competitor to cloud Code, used to let you use your cloud Max $200. So the trick with the cloud Max plan is if you're just buying those, that number of tokens, it would cost you significantly more than $200. It is a super, super discounted plan. You are probably you have the access I have the access to use, I would guess in the thousand or $2,000 of tokens, for my $200 a month. So it's it's a very, very heavily subsidized plan and open code, which is an open source version of cloud code, a sort of competitor. They had found a way that they would let you use your cloud Max plan with open code and anthropic last week. Shut that down. Yeah. And some open code, people got very upset, because they said, like, this is not what you're supposed to do, or. I mean, I'm not sure exactly what they said. I never felt like I got a particularly good argument out of it. But, you know, I do think part of what they're trying to get at, because is that, you know, at the very top models like these are all amazing, like the Google, OpenAI and anthropic, their best models are all on par with each other.

</details>

**Noah Brier**: 我的意思是，我可能会稍微调整一下它们的位置。我仍然认为**Opus 4.5**是目前最好的模型。但是，你知道，我的意思是，这可能明天就会改变。所以这就是像**Claude Code**这样的东西真正有趣的地方，因为它是一个非常独特的产品，它只是他们的。它是一个软件，而不是一个AI模型。所以它更不容易被颠覆。现在，再次强调，如果其他人想完全复制它，他们可以。**Codex**有一个，**Gemini**有一个。我只是认为他们采取了非常不同的策略，它远不如。所以，你知道，我认为他们正在努力做的是让像我这样的开发者在其中感到非常舒适，这样当我们打开**Codex**或尝试**Gemini**时，或者我前几天在玩**Open Code**时，它就不会像，你知道，如果你试图将一个人从PC转移到Mac，它不会感到熟悉。对吧？

<details>
<summary>Original English</summary>

**Noah Brier**: I mean, I would move them around a little bit. I still think opus 4.5 is the best model out there. But you know, I mean that might change tomorrow. Like, and that's where something like Cloud Code is really interesting because it's a, a product that is very it's just theirs. It's not it's a piece of software. It's not an AI model. And so it's sort of it's less able to be disrupted. Now, again, I think if somebody else wanted to copy that. Exactly, they could. Codex has one, Gemini has one. I just think they take a very different tact with it where it's much less. And so, you know, I think what they're trying to do is get developers like me to feel very comfortable inside that, so that when we go open, I still open Codex or try Gemini or I was playing with Open Code the other day and, it just doesn't feel familiar in the same way that, you know, if you're trying to move somebody from a PC to a mac, it doesn't feel familiar, right?

</details>

**Tracy Alloway**: 他们想拥有生态系统，环境。

<details>
<summary>Original English</summary>

**Tracy Alloway**: They want to own like the ecosystem, the. Environment.

</details>

**Noah Brier**: 环境。在一个世界里工作。

<details>
<summary>Original English</summary>

**Noah Brier**: Environment. Work on One world.

</details>

**Joe Weisenthal**: **Noah**，非常感谢你来《Odd Lots》。我一直非常想做一集关于这个话题的节目。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Noah, thank you so much for coming on Atlas. I was like dying to do an episode about this topic.

</details>

**Tracy Alloway**: 顺便说一句，我没有精神病，我只是有**Claude Complex**。为什么大家都在开这个玩笑？等等，哪个玩笑？那个精神病（psychosis）的玩笑。我还以为你会为我说**Claude Complex**而感到骄傲呢。哦。

<details>
<summary>Original English</summary>

**Tracy Alloway**: By the way, I don't have I psychosis, I have a cloud complex. Why is everyone making that joke? Wait. Which joke? The psychosis joke. I thought you're going to be proud of me for saying cloud complex. Oh.

</details>

**Joe Weisenthal**: 哦，那非常好。我，这就像我终于为Tracy开了一个双关语。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Oh, that is very good. I it's like I do one pun finally for Tracy.

</details>

**Tracy Alloway**: 不，这就像，嗯，我正准备开那个玩笑。

<details>
<summary>Original English</summary>

**Tracy Alloway**: No, it's like, well, I was over making that joke.

</details>

**Joe Weisenthal**: 嗯，我当时觉得那是个玩笑。我手里拿着一件衬衫。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, I was thinking that was a joke. I was handed a shirt.

</details>

**Tracy Alloway**: 我终于开了一个双关语，你却直接跳过去了。

<details>
<summary>Original English</summary>

**Tracy Alloway**: I finally make a pun and you just jump right over it.

</details>

**Joe Weisenthal**: 嗯，大家都说**Claude Code**是聪明人的AI精神病，对吧？它怎么就变成这样了？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, everyone keeps saying that cloud code is AI psychosis for smart people, right? Like, how did that become a thing?

</details>

**Tracy Alloway**: 是啊。好的。但这很有趣，而且我觉得也很“兄弟情谊”化。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. All right. But there's a good. Fun also very bro coded I find.

</details>

**Joe Weisenthal**: 你觉得是这样吗？所有的AI都是“兄弟情谊”化的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: You think so all of. AI is bro coded.

</details>

**Tracy Alloway**: 这是真的。我们应该多谈谈这个。你知道，我们应该邀请**David Shaw**来。他一直在做关于不同人群对AI感受的调查。我们应该，而且，是的，一些有趣的见解。

<details>
<summary>Original English</summary>

**Tracy Alloway**: This is true. We should talk more about this. You know, we should have David Shaw on. He's been doing a lot of polling about various demographics and how they feel about AI. We should, And, yeah, some interesting I. See into that.

</details>

**Joe Weisenthal**: 是的，我们应该这样做。无论如何，**Noah**，非常感谢你来《Odd Lots》。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah, we should, do that. Anyway, Noah, thank you so much for coming on out, love.

</details>

**Noah Brier**: 谢谢你们邀请我。

<details>
<summary>Original English</summary>

**Noah Brier**: Thanks for having me.

</details>

### 总结与未来展望

**Joe Weisenthal**: 嗯，那很有趣，Tracy。我真的很喜欢。任何在过去两周内离我五分钟、五英尺以内的人都清楚，我完全上瘾了，深陷其中。我从来没有真正深入研究过这些东西。但就像，我第一次非讽刺性地觉得，好吧，这是一种变革性技术，超越了令人印象深刻的技术，对吧？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well, that was fun. Tracy. I really like I. It's obvious to anyone who's been within five minutes, five feet of me for the last two weeks. I'm like, totally addicted and gone down. I never gone down the rabbit hole and stuff. But like, I for the first time unironically, I'm like, okay, this is transformative technology beyond being very impressive. Technology, right?

</details>

**Tracy Alloway**: 所以我得出了一个结论，那就是，你知道，我可以同时被低估和高估。我觉得我们现在就是这样。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So I've been coming to a conclusion, which is that, you know, I can be both under hyped, and overvalued simultaneously. Like, I feel like that's kind of where we are at the moment, where.

</details>

**Joe Weisenthal**: 你在做你的股票推荐。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: You're making your stock call.

</details>

**Tracy Alloway**: 是的。不，但说真的，这很重要。它将改变我们的工作方式。但它能货币化吗？你能区分实际的模型吗？技术越好，就越容易做别人都在做的事情。而且计算成本也越来越便宜。所以我只是不知道如何很好地货币化。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. No, but seriously like it. It's a big deal. It's going to change the way we work. But is it monetizable? Can you differentiate the actual models? The better the technology gets, like, the easier it is to just do what everyone else is doing. And also like the compute gets cheaper and cheaper. So I just don't know how you monetize this.

</details>

**Joe Weisenthal**: 嗯。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Well.

</details>

**Tracy Alloway**: 所以这很有趣。他的观点是，token仍然受到大量补贴。是的。所以如果你支付并实际使用那个200美元的Max计划，并且你实际使用到极限，**Claude**就会亏钱。对吧？然后价格不断下降。而且我知道，像**Claude Code**这样的公司，他们正在尝试创建一个类似于传统软件生态系统的东西，让你作为用户感到被锁定。但到目前为止，在我从2022年11月开始玩AI以来，我感觉没有人真正建立了任何锁定。而且它非常，它非常容易移动。我甚至怀疑，即使我现在桌面上有这个叫做**Claude mode**的文件，里面有说明等等，我确信如果我用**Codex**或**Google**打开这个文件，我可能也能同样地使用它。

<details>
<summary>Original English</summary>

**Tracy Alloway**: So that's very interesting. His point, which is that it's the tokens are heavily subsidized still. Yeah. And so that if you're paying and actually using that $200 max program and you actually use it to the limit, Claude is going to lose money on this. Right? And then the prices keep dropping. And I know, like Claude code is okay. They're attempting to create something that resembles a traditional software ecosystem that you feel as a user that you're locked into. But so far in my various like since November 2022, when I started playing with AI, it hasn't felt like anyone has established lock in with anything. And it's very, it's very movable. And I suspect even though I have this file now on my desktop that has a file called Claude mode that gives instructions, etc., I'm certain that if I open this file with Codex or Googles, I could probably just pick it up the same.

</details>

**Joe Weisenthal**: 是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah.

</details>

**Tracy Alloway**: 我也认为锁定策略存在一个根本性问题，因为当你谈论互联网技术时，试图将人们锁定在任何东西上都感觉非常逆潮流。我们多年来看到各种项目，这比看起来要困难得多。

<details>
<summary>Original English</summary>

**Tracy Alloway**: I also think there's a fundamental issue with the lock in strategy, because when you're talking about technology in the internet, like it just feels very against the grain to try to lock people into anything. And we've seen various projects over the years and it's it's a lot harder than it looks.

</details>

**Joe Weisenthal**: 是的。我的意思是，我想我会说这比看起来要困难得多。但我们也知道另一方面，那就是很多人被锁定在他们讨厌的软件中，对吧？

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Yeah. I mean, I guess I would say it's a lot harder than it looks. But then we also know the flip side, which is that tons of people are locked into software that they hate. Right?

</details>

**Tracy Alloway**: 是的。人们是。哦，我讨厌人们。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah. People are. Oh, I hate people.

</details>

**Joe Weisenthal**: 你或我讨厌**Outlook**多少次了，对吧？或者我讨厌**Microsoft Teams**，我讨厌这个，我每个月都花钱，我的组织无法摆脱它，或者我们无法迁移。所以我确实认为这有两面性。我确实认为他提供了我听过的最好的解释，说明为什么AI编码模型对很多相当大的软件业务构成威胁，特别是关于用户从不使用软件为之构建的所有功能这一点。因此，当他们可以非常快速地设计出那个功能时，**“自建”与“购买”**的计算可能真的开始转变。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: How many times have you or I hate outlook, right? Or I hate Microsoft Teams and I hate this and I spend money on it every month and my organization can't move off of it or we can't migrate off of it. So I do think that cuts both ways. I do think he offered the best explanation I've heard of why the AI coding models are a threat to a lot of pretty big software businesses, especially, especially the point about how the user never uses all of the features that they actually that the software got built for. And therefore maybe the build versus buy calculation really starts to shift when they can just design that one feature very quickly.

</details>

**Tracy Alloway**: 我完全同意。在软件方面，这似乎是一个生存威胁，但就像特定模型的锁定生态系统一样。我知道他说它实际上不是一个模型，但这对我来说似乎是一个更大的问题。我不知道，我想我们会看到的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: I totally agree. On the software side, it seems like an existential threat, but just like the locked in ecosystem of a particular model. I know he said it's not actually a model, but that seems like a bigger issue to me. I don't know, I guess we'll see.

</details>

**Joe Weisenthal**: 我们会看到的，我不知道，我有点认为我们会很快看到。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: We're going to see and I don't know, I kind of think we're gonna see quickly.

</details>

**Tracy Alloway**: 是的。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Yeah.

</details>

**Joe Weisenthal**: 这再次是唯一的确定性，就是事情正在发生。事情正在发生。是的。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: That's again, that's the only certainty is like, stuff is happening. Stuff is. Happening now. Yeah.

</details>

**Tracy Alloway**: 好的。我们就在这里结束吗？

<details>
<summary>Original English</summary>

**Tracy Alloway**: All right. Shall we leave it there?

</details>

**Joe Weisenthal**: 我们就在这里结束吧。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: Let's leave it there.

</details>

**Tracy Alloway**: 好的。这是《Odd Lots》播客的又一集。我是**Tracy Alloway**。你可以在Twitter上关注我@tracyalloway。

<details>
<summary>Original English</summary>

**Tracy Alloway**: Okay. This has been another episode of the Odd Lots podcast. I'm Tracy Alloway. You can follow me @tracyalloway

</details>

**Joe Weisenthal**: 我是**Joe Weisenthal**。你可以在Twitter上关注我@thestalwart。关注我们的嘉宾**Noah Brier**。他的Twitter是@Heyitsnoah。关注我们的制作人**Carmen Rodriguez**@carmenarmen，**Dashiel Bennett**@dashbot和**Cale Brooks**@calebrooks。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And I'm Joe Weisenthal. You can follow me @thestalwart Follow our guest Noah Brier. He's @Heyitsnoah Follow our producers Carmen Rodriguez @carmenarmen, Dashiel Bennett @dashbot and Cale Brooks @calebrooks

</details>

**Joe Weisenthal**: 欲了解更多《Odd Lots》内容，并查看Joe在**Claude Code**中实际做了什么，请查看我们的每日时事通讯。你可以在bloomberg.com/OddLots找到它。你可以在我们的Discord频道discord.GG/OddLots与听众24/7进行交流。如果你喜欢这次对话，如果你喜欢我们谈论AI，那么请留言或点赞视频。或者更好的是，订阅。感谢收看。

<details>
<summary>Original English</summary>

**Joe Weisenthal**: And for more Odd Lots content, and to see what Joe has actually been working on in Cloud Code, check out our daily newsletter. You can find that at bloomberg.com. Forward slash Odd Lots. And you can join fellow listeners in conversation 24 seven in our discord, discord.GG slash Odd Lots. And if you enjoyed this conversation, if you like it when we talk about AI, then please leave a comment or like the video. Or better yet, subscribe. Thanks for watching.

</details>