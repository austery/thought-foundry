---
title: How Tom Tungus Uses AI to Process 36 Weekly Podcasts and Automate Blog Writing
summary: Tom Tungus reveals his personal AI system that transcribes 36 weekly podcasts,
  extracts key insights, and automates blog post drafting. He uses an iterative 'AP
  English teacher' prompt to grade and refine the AI-generated content, creating a
  hyper-personalized workflow.
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
- ai-automation
- content-creation
- podcast-processing
- prompt-engineering
people:
  - Clarvo
  - Tom Tungus
companies_orgs: []
products_models: []
media_books: []
date: 2025-08-25
author: Lei
speaker: ''
channel: null
guest: ''
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=8P7v1lgl
status: evergreen
---
## Introduction

Clarvo: Welcome back to how I AI. I'm Clarvo product leader and AI obsessive here on a mission to help you build better with these new tools.

克拉沃: 欢迎回到《我如何使用AI》。我是一位产品负责人和AI爱好者，我的使命是帮助你用这些新工具更好地进行创造。

Clarvo: Today I have Tom Tungus, a legend in the enterprise software business and founder of Theory Ventures, which invests in early stage enterprise AI, data, and blockchain companies.

克拉沃: 今天我请来了汤姆·通古斯（Tom Tungus），他是企业软件领域的传奇人物，也是Theory Ventures的创始人，该公司投资于早期的企业AI、数据和区块链公司。

Clarvo: Tom is followed by over a half a million folks on his blog and LinkedIn.

克拉沃: 汤姆在他的博客和领英上拥有超过五十万的关注者。

Clarvo: And he's going to show us today how he uses AI to keep up with all the podcasts, including this one, and draft blog posts that would be approved by your AP English teacher. Let's get to it.

克拉沃: 今天他将向我们展示，他如何利用AI来跟上所有播客的节奏，包括我们这档节目，并起草出能让你AP（Advanced Placement，大学预修课程）英语老师都认可的博客文章。让我们开始吧。

Clarvo: Okay, Tom, I'm so happy to have you here because you are going to show us how you are solving a problem I'm creating for you.

克拉沃: 好的，汤姆，我很高兴你能来，因为你将向我们展示你是如何解决一个我正在为你制造的问题。

Clarvo: And the problem the problem I'm creating for you is I am creating yet another piece of interesting content that you have no time to consume.

克拉沃: 我为你制造的问题是，我正在创造又一个你没有时间消费的有趣内容。

Clarvo: certainly the format that we get it out and I know TEU content is a really interesting source of ideas of trends of companies.

克拉沃: 当然，我们推出的这种形式，我知道播客内容是获取想法、趋势和公司信息的非常有趣的来源。

Clarvo: So tell us what you built and why.

克拉沃: 所以，告诉我们你构建了什么，以及为什么。

Tom Tungus: Absolutely. Well, thanks for having me on.

汤姆·通古斯: 当然。嗯，谢谢你邀请我。

Tom Tungus: So I I don't I prefer to read than to listen because I can skip ahead and I think there's a lot of information inside of podcasts that people share that I would love to know.

汤姆·通古斯: 我更喜欢阅读而不是收听，因为我可以跳读，而且我认为播客中人们分享了很多我非常想了解的信息。

## The Podcast Processing System

Tom Tungus: And so I built I guess what I call a podcast ripper.

汤姆·通古斯: 所以我构建了一个我称之为“播客抓取器”的东西。

Tom Tungus: And the idea is I have a list of 36 podcasts, this one included, that I really admire and I want I want to learn from, but I don't have 36 hours every week to listen to 36 podcasts, right?

汤姆·通古斯: 想法是这样的，我有一个包含36个播客的列表，其中也包括你这个，我非常欣赏它们并想从中学习，但我每周没有36个小时去听36个播客，对吧？

Tom Tungus: So what I did is I created a system that goes through each of those podcasts every day and downloads the podcast files and then transcribes them using initially it was open source or open AAI is open source **Whisper** (Whisper：由OpenAI开发的开源自动语音识别模型) which takes audio and converts it to text and then there's a new version called **parakeet** (Parakeet：由NVIDIA发布的语音识别模型) which Nvidia released that runs really well on a Mac and so I'll take that text and then I'll run it through a prompt and it will spit out a whole bunch of different things.

汤姆·通古斯: 所以我创建了一个系统，每天它会检查所有这些播客，下载播客文件，然后进行转录。最初我用的是开源的OpenAI的**Whisper**，它能将音频转换为文本。后来NVIDIA发布了一个叫**Parakeet**的新版本，在Mac上运行得非常好。所以我会获取那些文本，然后通过一个提示（prompt）来处理它，它会输出一大堆不同的东西。

Tom Tungus: it'll spit out high level summary or whatever I ask it to.

汤姆·通古斯: 它会输出高层级的摘要或者任何我要求它做的事情。

Clarvo: Okay. Can you show us how it's actually built?

克拉沃: 好的。你能给我们展示一下它具体是怎么构建的吗？

Clarvo: Like where do you get this feed? Do you It sounds like you run it locally. How does this all work?

克拉沃: 比如，你从哪里获取这些播客源？听起来你是在本地运行的。这一切是怎么运作的？

Tom Tungus: So I initially downloaded the Whisper app and what I did is I wrote this thing called the Parakeet podcast processor.

汤姆·通古斯: 最初我下载了Whisper应用，然后我写了一个叫做“Parakeet播客处理器”的程序。

Tom Tungus: And this podcast processor basically takes in a file and what it'll do is it will read the file.

汤姆·通古斯: 这个播客处理器基本上接收一个文件，然后它会读取这个文件。

Tom Tungus: It'll download it and then it'll convert it via **ffmpeg** (ffmpeg：一个处理音视频文件的开源软件库) which is a library that converts different kinds of files and that will take the audio and convert it to text.

汤姆·通古斯: 它会下载文件，然后通过 **ffmpeg** 进行转换，这是一个可以转换不同类型文件的库，它会把音频转换成文本。

Tom Tungus: And then I use **Gemma 3** (Gemma 3：谷歌开发的一系列轻量级开源语言模型之一) which is really good at this to actually clean up the transcript.

汤姆·通古斯: 然后我使用在这方面表现非常出色的**Gemma 3**来清理转录稿。

Tom Tungus: So, if we search for the **Olama** (Olama：一个用于在本地运行大型语言模型的工具) model, basically what I'm doing is I'm just cleaning up the file here.

汤姆·通古斯: 所以，如果我们搜索**Olama**模型，基本上我在这里做的就是清理文件。

Tom Tungus: Your transcript editor, clean up this podcast while preserving all the content, keep the same length, remove the ums and the o's, preserve all technical conversations.

汤姆·通古斯: （这是我的提示）“作为转录稿编辑器，清理这份播客，同时保留所有内容，保持相同长度，去掉‘嗯’和‘哦’等口头禅，保留所有技术性对话。”

Tom Tungus: And that returns a clean transcript. And so on a given day, there might be five or six different transcripts that need to be transcribed.

汤姆·通古斯: 这样就能返回一份干净的转录稿。所以在某一天，可能需要转录五到六份不同的稿件。

Tom Tungus: And then what I'll do is it runs through the parakeet podcast orchestrator. Actually, it's just a podcast orchestrator which is here.

汤姆·通古斯: 接下来，它会通过Parakeet播客编排器运行。实际上，它只是一个播客编排器，在这里。

Tom Tungus: And so I'm storing each of the files that I'm transcribing in a local **duct DB** (DuckDB：一个进程内SQL OLAP数据库管理系统) which is a little database that says I process this particular podcast on this particular day.

汤姆·通古斯: 我把每个转录的文件都存储在一个本地的**DuckDB**里，这是一个小型数据库，记录着我在特定日期处理了某个特定的播客。

Tom Tungus: And then I save the transcripts and I take all the transcripts on that particular day from the database which is here.

汤姆·通古斯: 然后我保存转录稿，并从数据库中提取出特定日期的所有转录稿，就在这里。

Tom Tungus: And then I send them through a prompt which see if we can find it. Summarizes here the daily summarizer.

汤姆·通古斯: 然后我把它们发送到一个提示中，看看我们能不能找到它。这里是每日摘要器。

Tom Tungus: So it generates a daily summary document um which is here. It'll produce a file that looks like this.

汤姆·通古斯: 所以它会生成一个每日摘要文档，就在这里。它会产生一个看起来像这样的文件。

Tom Tungus: So here's the podcast summaries for today June the 13th. So there's Lenny's podcast, the host, the guest, a comprehensive summary.

汤姆·通古斯: 这是今天6月13日的播客摘要。有Lenny的播客，主持人，嘉宾，和一个全面的摘要。

Tom Tungus: So here's a conversation with Bob Baxley. uh key topics. So here he's talking about his philosophy, company culture, and then key themes.

汤姆·通古斯: 这是与Bob Baxley的对话。关键话题。他谈论了他的哲学、公司文化，以及关键主题。

Tom Tungus: And the the key the the part that's most valuable for me are these quotes.

汤姆·通古斯: 对我来说最有价值的部分是这些引言。

Tom Tungus: And those quotes are then, I'll read them. It'll suggest a bunch of actionable investment thesis for a venture capital firm, which is put into the prompt like, okay, maybe you should be we should be looking at AI assisted design tools.

汤姆·通古斯: 我会阅读这些引言。它会为风险投资公司提出一系列可操作的投资论点，这些被放入提示中，比如，好的，也许我们应该关注AI辅助设计工具。

Tom Tungus: And then that might kick off a market map. we're really thesis driven.

汤姆·通古斯: 然后这可能会启动一个市场地图的制作。我们是非常受论点驱动的。

Tom Tungus: So maybe that starts a conversation on a Monday and we decide to staff a market.

汤姆·通古斯: 所以也许这会在周一开始一场对话，然后我们决定为某个市场配备人员。

Tom Tungus: Then it'll produce these noteworthy observations which are actually put into tweets. So here are the Twitter post suggestions.

汤姆·通古斯: 然后它会生成这些值得注意的观察结果，并将其转化为推文。所以这里是推特帖子建议。

Tom Tungus: So I haven't done this yet. I'm still working on the prompt, but the idea is like could we actually automate like linking back to people who we really like?

汤姆·通古斯: 我还没这么做。我还在调整提示，但想法是，我们能否真正自动化地链接回我们非常喜欢的人？

Tom Tungus: And then another part, this is a little out of order, but another part here is are there startups that are mentioned within these podcasts that we should know?

汤姆·通古斯: 还有另一部分，这里有点乱序，但另一部分是，这些播客中是否提到了我们应该知道的初创公司？

Tom Tungus: Right? So, here's Airbnb, Google, Amazon, Stripe. We know all these guys. I don't know what this company is.

汤姆·通古斯: 对吧？这里有Airbnb、谷歌、亚马逊、Stripe。我们都知道这些公司。但我不知道这家公司是什么。

Tom Tungus: And so, this might go into our CRM, right, to be enriched.

汤姆·通古斯: 所以，这可能会进入我们的CRM（客户关系管理系统），对吧，用于信息丰富化。

Tom Tungus: And and then the last is we'll actually generate prompts for blog posts in the style that I write.

汤姆·通古斯: 最后，我们会根据我的写作风格生成博客文章的提示。

Tom Tungus: And then this will go into a Python pipeline to actually machine generate uh blog posts.

汤姆·通古斯: 然后这会进入一个Python管道，用于实际机器生成博客文章。

## Cleaning Transcripts and Using LLMs

Clarvo: So before before we get to the the um machine automated AI blog post pipeline, I have a couple questions about this process because I think you did a couple interesting things.

克拉沃: 在我们讨论机器自动化的AI博客文章管道之前，关于这个过程我有几个问题，因为我认为你做了一些有趣的事情。

Clarvo: One, I have a question if you found higher quality by cleaning up the transcripts like how much did that incremental input quality piece actually help your your output?

克拉沃: 第一，我想问一下，你通过清理转录稿是否获得了更高质量的结果？也就是说，输入质量的增量提升对你的输出有多大帮助？

Tom Tungus: So it helped. So initially I was trying to get the answer was initially a lot and then over time less because initially what I was trying to do was to find these companies I was using **named entity extraction** (Named Entity Extraction：命名实体提取，一种信息提取技术，用于在文本中定位并分类命名实体) algorithms from Stanford there's a Python library and uh it was having a really hard time uh and so I was cleaning up cleaning it up to try to get the performance to improve and then I just pushed it to a really large large language model and it spit it out much better and so the cleaning is not that useful anymore.

汤姆·通古斯: 有帮助。最初的答案是帮助很大，但随着时间的推移帮助变小了。因为一开始我想做的是找出这些公司，我用的是斯坦福大学的**命名实体提取**算法，有一个Python库，但它处理起来非常困难。所以我清理转录稿是为了提升性能。但后来我直接把它交给一个非常大的**大型语言模型** (LLM：Large Language Model，一种经过大量文本数据训练的人工智能模型)，它的输出效果好得多，所以清理工作就不那么有用了。

Clarvo: Yeah, I was looking because I was looking at it and you were focusing on like proper nouns, company names, and so I'm assuming if you want to extract something like stripe, which has many many meanings, um getting it into a proper noun format, for example, would help with that extraction.

克拉沃: 是的，我看到了，因为我观察到你关注的是专有名词和公司名称。所以我猜，如果你想提取像“stripe”这样有很多含义的词，把它处理成专有名词的格式，会有助于提取。

Clarvo: But you're saying as you could just use as opposed to these kind of package libraries for specific machine learning use cases instead just send it to an LLM that ended up just meaning you could worry less about the input quality of of your transcripts and more about the kind of prompting and structure here of the output.

克拉沃: 但你的意思是，与其使用这些针对特定机器学习用例的打包库，不如直接把它发送给一个LLM，这最终意味着你可以更少地担心转录稿的输入质量，而更多地关注输出的提示和结构。

Tom Tungus: Yeah, that's exactly right. So my goal initially was to do everything locally and so I was using Olama.

汤姆·通古斯: 是的，完全正确。我最初的目标是所有事情都在本地完成，所以我用了Olama。

Tom Tungus: I was using that Stanford library parakeet is run locally. And then what I realized is particularly for the named entity extraction more powerful machines are much better.

汤姆·通古斯: 我在本地运行那个斯坦福库和Parakeet。但我后来意识到，特别是对于命名实体提取，更强大的机器效果要好得多。

## The Love for the Terminal

Clarvo: Yeah. And so and then I have to ask another question which is everybody's going to look at this and they're going to go what the hell does he typing in?

克拉沃: 是的。那么我得问另一个问题，就是每个人看到这个都会想，他到底在输入些什么？

Clarvo: Like we have a couple people that are like why in the terminal?

克拉沃: 我们有几个人会问，为什么要在终端里操作？

Clarvo: So I'm just curious you know did you ever think about putting a UI on top of this?

克拉沃: 所以我很好奇，你有没有想过给它加一个用户界面（UI）？

Clarvo: Do you just you seem very comfortable in the terminal so it seems to work for you.

克拉沃: 你似乎在终端里非常自如，所以这对你来说行得通。

Clarvo: I'm just curious about where you decided to focus your uh user experience efforts on this personal

克拉沃: 我只是好奇，对于这个个人项目，你决定把用户体验的精力放在哪里。

Tom Tungus: well I love the term I read this blog post by Danlu with two U's where he was talking about latency and the latency between like the keyboard and the computer and it turns out that the terminal is actually the application with the lowest latency and the lower the latency the less frustration you have using a computer.

汤姆·通古斯: 我很喜欢终端。我读过一篇Danlu写的博客文章，他谈到了延迟，特别是键盘和电脑之间的延迟。结果发现，终端实际上是延迟最低的应用程序，延迟越低，你使用电脑时的挫败感就越少。

Tom Tungus: So during COVID, I decided to learn how to use a terminal and since then I've sort of lived in it and so like my email client is a terminal based email client and I you I use that because it's really fast and then I can also script different things.

汤姆·通古斯: 所以在疫情期间，我决定学习如何使用终端，从那以后我就一直活在里面。比如我的邮件客户端就是基于终端的，我用它是因为它真的很快，而且我还可以编写脚本来处理不同的事情。

Tom Tungus: So I can delete 10 messages at once or I can call an AI to actually automatically respond to an email or add a company to a CRM.

汤姆·通古斯: 这样我就可以一次删除10条消息，或者调用AI来自动回复邮件或将公司添加到CRM中。

Tom Tungus: So that was really important. But at a high level like I think it's um I've just become really comfortable with it.

汤姆·通古斯: 所以这很重要。但总的来说，我想我已经对它非常适应了。

Tom Tungus: It's really fast. And then the last thing I'll say is I think Cloud Code is an amazing product.

汤姆·通古斯: 它真的很快。最后我想说的是，我认为Cloud Code是一款了不起的产品。

Tom Tungus: And the great part about what Cloud Code does is I have about 2,000 blog posts.

汤姆·通古斯: Cloud Code的优点在于，我大约有2000篇博客文章。

Tom Tungus: I can just go into Cloud Code and say modify the files in this way or change the blog post theme or recently I launched a blog post generator which takes all of the content that I have on the blog and you can ask it a question.

汤姆·通古斯: 我可以直接进入Cloud Code，说“用这种方式修改文件”或“更改博客主题”。最近我推出了一个博客文章生成器，它会利用我博客上的所有内容，你可以向它提问。

Tom Tungus: It will write a blog post for you about your particular question. And I did that all using cloud code.

汤姆·通古斯: 它会针对你的具体问题为你写一篇博客文章。而这一切都是我用Cloud Code完成的。

Clarvo: Yeah, I mean I I have two sort of thematic things that I think of while observing this this workflow and your love for the terminal.

克拉沃: 是的，在观察这个工作流和你对终端的热爱时，我想到了两个主题性的东西。

Clarvo: I agree. Claude Code is an amazing product and it's a really welldesigned terminalbased product. I love it.

克拉沃: 我同意。Claude Code是一款了不起的产品，而且是一个设计得非常好的基于终端的产品。我喜欢它。

Clarvo: I love that you have this constrained surface area in which to like communicate progress and latency and changes.

克拉沃: 我喜欢它有一个受限的界面区域，用来传达进度、延迟和变化。

Clarvo: And I think it's really thoughtfully designed. So for anybody out there building dev tools in particular, learn how to design in the terminal and it's so so important because you make really fabulous products for I guess people like you and me that say things like I picked up the terminal over co as as my hobby.

克拉沃: 而且我认为它的设计非常周到。所以对于任何正在构建开发者工具的人来说，尤其要学习如何在终端中进行设计，这非常重要，因为你可以为像你我这样把学习终端当作爱好的人创造出非常棒的产品。

Clarvo: The second thing that I was thinking about is since generative AI has become mainstream, every single person has said somebody make a podcast digest application.

克拉沃: 我想到的第二件事是，自从生成式AI成为主流以来，每个人都在说，谁来做一个播客摘要应用。

Clarvo: Every single person I know is like it was one of the first projects I made.

克拉沃: 我认识的每一个人，这都是他们做的第一个项目之一。

Clarvo: I made my kids a podcast digest, their favorite podcast, and it made little quizzes about the topics that they could answer.

克拉沃: 我给我的孩子们做了一个他们最喜欢的播客的摘要，还制作了一些关于主题的小测验让他们回答。

Clarvo: Super cute. So, I think it was a very common use case.

克拉沃: 超级可爱。所以，我认为这是一个非常常见的用例。

Clarvo: But what I was thinking is no startup is going to be like, it's going to be huge TAM company, a terminal based podcast transcript processor and thematic extraction generation engine.

克拉沃: 但我在想的是，没有一家初创公司会成为一个拥有巨大潜在市场的公司，去做一个基于终端的播客转录处理器和主题提取生成引擎。

Clarvo: And I I think this is such a perfect example of like, yeah, there's probably something off the shelf that could do something like this, but you have gotten not only like the content you want, but the user experience you want.

克拉沃: 我认为这是一个完美的例子，说明了，是的，市面上可能有现成的工具能做类似的事情，但你得到的不仅是你想要的内容，还有你想要的用户体验。

Clarvo: You control it end to end and you can build this like hyperpersonalized software experience, which I just it was not possible um or it wasn't um efficient to do I would say uh until very recently.

克拉沃: 你可以端到端地控制它，并且可以构建这种超个性化的软件体验，我想说，直到最近，这在过去是不可能的，或者说效率不高。

Tom Tungus: Yeah, it fits it fits the workflow my workflow like a glove, right?

汤姆·通古斯: 是的，它像手套一样完美地契合我的工作流程，对吧？

Tom Tungus: And anytime something comes up and changes, like maybe there's a section that's out of order like we found, I can just go into cloud code and update it and it'll be done in 15 to 30 seconds, right?

汤姆·通古斯: 无论何时出现问题或需要更改，比如我们发现某个部分顺序不对，我可以直接进入Cloud Code更新它，15到30秒内就能完成，对吧？

Tom Tungus: And you know, I really wanted an email of this every day and that was straightforward. So, I agree with you.

汤姆·通古斯: 我真的希望每天都能收到一封包含这些内容的邮件，而实现这一点很简单。所以我同意你的看法。

Tom Tungus: But I think we're at a place where the marginal friction to achieving a gloveike fit with little utilities that maybe you wouldn't have paid for in the past is now um it's just so it's so quick, right?

汤姆·通古斯: 但我认为我们现在处在一个这样的时代：对于那些你过去可能不会付费的小工具，实现与工作流完美契合的边际摩擦现在变得非常小，速度非常快，对吧？

Tom Tungus: Like you you just answering a couple of emails and it'll be done.

汤姆·通古斯: 就像你回复几封邮件的功夫，事情就完成了。

## The Blog Post Generation Pipeline

Clarvo: So, you have taken all this content um including amazing content from the Lenny's Podcast Network and you're processing it. You're extracting themes.

克拉沃: 所以，你获取了所有这些内容，包括来自Lenny播客网络的精彩内容，然后进行处理。你提取主题。

Clarvo: You're extracting quotes. You're finding companies that may be interesting to reach out to. You're at least drafting Twitter posts.

克拉沃: 你提取引言。你寻找可能值得联系的公司。你至少还在起草推特帖子。

Clarvo: We will see if those actually get posted um you know in production.

克拉沃: 我们会看看这些内容是否真的会在生产环境中发布。

Clarvo: And then let's talk about your second workflow which is you extract insights that might be interesting for you to write about or add your perspective on and then you actually turn those into drafts using AI.

克拉沃: 接下来，让我们谈谈你的第二个工作流程，也就是你提取一些你可能感兴趣并想撰写或添加自己观点的见解，然后你实际上使用AI将它们转化为草稿。

Tom Tungus: There's a lot of stuff that's happening in the ecosystem and every once in a while I like to write about what somebody said in a in a podcast, right?

汤姆·通古斯: 生态系统中发生了很多事情，我偶尔喜欢写一些关于某人在播客中说过的话，对吧？

Tom Tungus: Um uh and I think today like there I was looking the GitHub CEO is actually interviewed and so Matt Turk interviews who's at another venture firm interviews Thomas and he talks about how AI and coding is the future and so what I really want to do here is let's suppose I really wanted to have a blog post that was tied to this.

汤姆·通古斯: 今天我看到GitHub的CEO接受了采访，另一家风投公司的Matt Turk采访了Thomas，他谈到了AI和编码如何成为未来。所以，我现在真正想做的是，假设我真的想写一篇与此相关的博客文章。

Tom Tungus: So what I can do is I say like okay I have this podcast generator and I'll show it to you in a second and what I'll do is I'll take as context the transcription of that podcast which is here um and then I'll define an output file and then I'll give it a little prompt which is like you know he said this quote which is actually within the podcast summary everything that I can easily replace with a single prompt is not going to have any value.

汤姆·通古斯: 我可以这样做，我说，好的，我有这个播客生成器，我马上给你看。我会把那个播客的转录稿作为上下文，就在这里。然后我会定义一个输出文件，再给它一个小提示，比如他说了这段话，这段话实际上就在播客摘要里，“所有我能用一个简单提示轻易替换掉的东西都不会有任何价值”。

Tom Tungus: it will have the value of the prompt and the inference and the tokens, but that's often a few dollars.

汤姆·通古斯: 它将具有提示、推理和令牌的价值，但这通常也就几美元。

Tom Tungus: And I'll tell it, okay, go look for podcasts that are related to this. And I I've categorized them uh as AI.

汤姆·通古斯: 我会告诉它，好的，去找与此相关的播客。我已经把它们归类为AI。

Tom Tungus: And then here, actually, there's a bug. So, demo fail. I was trying to fix it before I got on the video, but the searching for the relevant blog post is failing, and I need to figure that out.

汤姆·通古斯: 然后这里，实际上，有个bug。所以，演示失败了。我在上视频前试着修复它，但是搜索相关博客文章的功能失败了，我需要解决这个问题。

Tom Tungus: It's it's run through um Lance DB vector embed in this database. and then it'll generate a blog post.

汤姆·通古斯: 它是通过这个数据库中的**LanceDB**（LanceDB：一个用于AI应用的开源向量数据库）向量嵌入来运行的，然后它会生成一篇博客文章。

## The "AP English Teacher" Grading Prompt

Tom Tungus: And I'll show you the prompt in a second. And the best well, one of the techniques that I found the most effective when generating blog posts is to ask it to grade it like an AP English teacher.

汤姆·通古斯: 我马上给你看提示。在生成博客文章时，我发现最有效的技巧之一就是让它像AP英语老师一样来评分。

Tom Tungus: And this goes back to my history. I remember not really loving to write until I took a class with um an army veteran and uh he taught me to really love to write and he was my AP English teacher.

汤姆·通古斯: 这要追溯到我的过去。我记得我本来并不那么喜欢写作，直到我上了一位退伍军人的课，他教会了我真正热爱写作，他就是我的AP英语老师。

Tom Tungus: And so I really like receiving feedback in that way. grade it on a letter grade and then tell me what I could improve and then I'll iterate with the model until I get to an A minus.

汤姆·通古斯: 所以我非常喜欢以那种方式接收反馈。用字母等级给它评分，然后告诉我哪里可以改进，然后我会和模型一起迭代，直到我得到一个A-。

Clarvo: Got it. And so just before we go into the actual writing and I'd love to see a little bit of this AP English prompt.

克拉沃: 明白了。在我们进入实际写作之前，我很想看看这个AP英语提示的一部分。

Clarvo: Are these two pieces connected? Your podcast summaries, do those go into this vector DB that can then be searched through for relevant other podcasts if you're writing on a topic?

克拉沃: 这两部分是相连的吗？你的播客摘要会进入这个向量数据库，以便在你就某个主题写作时，可以搜索到其他相关的播客吗？

Tom Tungus: Like how does this all come together? Yeah. So, right now it's just the blog posts that I've written in the past, the 2,000 blog posts or so that go in. And the major reason I add those as context is I'm trying to capture my style.

汤姆·通古斯: 这一切是怎么结合起来的？是的。目前，只有我过去写的博客文章，大约2000篇，会进入数据库。我将它们作为上下文的主要原因是为了捕捉我的写作风格。

Tom Tungus: And I have to tell you like that's really hard. Like I have fine-tuned OpenAI. I had fine-tuned Gemma models.

汤姆·通古斯: 我得告诉你，这真的很难。我微调过OpenAI的模型，也微调过Gemma模型。

Tom Tungus: And getting the voice and you'll see it in the output.

汤姆·通古斯: 要获得那种语调，你会在输出中看到的。

Tom Tungus: It sounds like a computer when it writes even with that additional context.

汤姆·通古斯: 即使有了额外的上下文，它写出来的东西听起来还是像电脑写的。

Tom Tungus: And uh it doesn't the other thing that I I have not been able to figure out is I think it's really important in one blog post to link to other blog posts that I've written just because the knowledge builds on itself and obviously outside as well.

汤姆·通古斯: 另一件我还没能解决的事情是，我认为在一篇博客文章中链接到我写过的其他博客文章非常重要，因为知识是相互构建的，当然也包括外部链接。

Tom Tungus: But I haven't been able to figure out how to get it to link effectively.

汤姆·通古斯: 但我还没能找到让它有效链接的方法。

## AI for Writing and Evaluation

Clarvo: Well, I I think this is a a common feeling with AI generated writing.

克拉沃: 嗯，我认为这是对AI生成写作的普遍感受。

Clarvo: No one is satisfied with style even when style is exceptional. I think I've seen examples, especially some of the newer commercial models, actually writing really lovely pros and really lovely language.

克拉沃: 即使风格非常出色，也没有人对风格感到满意。我想我见过一些例子，特别是一些较新的商业模型，实际上能写出非常优美的散文和语言。

Clarvo: It's just it's so personal what your style is and how you would write something, the rhythm in which you would write it, how would you punctuate and break line, all that kind of stuff is so personal that I have, like you had a very, very hard time getting it to write like me.

克拉沃: 只是你的风格是什么，你会如何写作，写作的节奏，如何使用标点和换行，所有这些东西都非常个人化，以至于像你一样，我很难让它写得像我。

Clarvo: And I think even harder, which is why I appreciate that you're not yet posting this. It cannot it can't tweet like me.

克拉沃: 而且我认为更难的是，这也是我欣赏你还没有发布这个的原因。它不能像我一样发推文。

Tom Tungus: I can't I cannot

汤姆·通古斯: 我不能，我做不到。

Clarvo: No, the short ones the short ones are the hardest, you know.

克拉沃: 不，短的，短的内容是最难的。

Tom Tungus: Um I guess they say that about about writing writing generally. Um h have you felt like any of the models have done better or worse at writing like you or is it just like they only get 70 80% there and I just accept the fact that I'm going to have to rewrite things?

汤姆·通古斯: 我想通常人们对写作都是这么说的。你觉得有没有哪个模型在模仿你写作方面做得更好或更差？还是说它们都只能达到70%到80%的水平，而我只能接受我必须重写的事实？

Tom Tungus: Well, they have different voices. Um, I don't think any of them are close.

汤姆·通古斯: 嗯，它们有不同的声音。我不认为有任何一个接近。

Tom Tungus: Uh, like I think Gemini is more clinical is the way that I put it.

汤姆·通古斯: 我觉得Gemini更具临床色彩，我是这么描述的。

Clarvo: I agree.

克拉沃: 我同意。

Tom Tungus: Claude is more warm and verbose, you know, very very galous, like just wants to keep talking and wants really long sentences and really long paragraphs.

汤姆·通古斯: Claude更热情、更啰嗦，你知道，非常健谈，就想一直说下去，喜欢用很长的句子和很长的段落。

Tom Tungus: Um, and uh, OpenAI, I think the models each have slightly different personality. So there I don't think there's like a single characterization.

汤姆·通古斯: 至于OpenAI，我认为每个模型都有稍微不同的个性。所以我不认为有一个单一的特征可以概括。

Tom Tungus: So I I've been I think I've been iterating to I used to use claude 35 a ton and I uploaded all of my blog posts in a project and I and then I'd have it iterate there.

汤姆·通古斯: 所以我一直在迭代。我以前大量使用Claude 3.5，我把我所有的博客文章都上传到一个项目中，然后让它在那里迭代。

Tom Tungus: Now I can kind of do it with cloud code or using this prompt. So that's a little less useful.

汤姆·通古斯: 现在我可以用Cloud Code或者这个提示来做，所以那个方法就没那么有用了。

Tom Tungus: But what I found is um you really need to add your own voice and then you need to tell the AI to keep the things that are wrong, right?

汤姆·通古斯: 但我发现，你真的需要加入自己的声音，然后你需要告诉AI保留那些“错误”的东西，对吧？

Tom Tungus: Like this it's kind of funny thing to say, but as you were saying, Claire, before the way that you punctuate, I really like amperands, right?

汤姆·通古斯: 这么说有点好笑，但就像你之前说的，克莱尔，你使用标点的方式，我真的很喜欢用“&”符号，对吧？

Tom Tungus: And I like adding spaces before colons. And I like starting certain sentences with or having little incomplete clauses um because I think they keep the reader moving.

汤姆·通古斯: 我喜欢在冒号前加空格。我喜欢用某些句子开头，或者使用一些不完整的小分句，因为我认为这样能让读者一直读下去。

Tom Tungus: But an an AI won't do that. An AI will only deliver you a grammatically perfect specimen.

汤姆·通古斯: 但AI不会那么做。AI只会给你一个语法上完美的范本。

Clarvo: Yeah.

克拉沃: 是的。

Clarvo: We're gonna have one one very nerdy uh English language moment, which is I like to start paragraphs with a conjunction.

克拉沃: 我们要来一个非常书呆子的英语语言时刻，那就是我喜欢用连词开始段落。

Clarvo: I love a and or a but. Oh, it pulls you in.

克拉沃: 我喜欢用“and”或“but”开头。哦，这能吸引你。

Clarvo: So, okay, you and I are going to work we'll we'll build like a an a and micro sass on good good writing models um and prompts that that people can use.

克拉沃: 好的，那我们俩可以合作，基于好的写作模型和提示，构建一个微型的SaaS（软件即服务）产品，供大家使用。

Clarvo: So, okay. So, we accept that it's not going to write exactly like you, but you've created this grading process to say, well, is at least good?

克拉沃: 好的。所以我们接受它不会写得和你一模一样，但你创建了这个评分过程来判断，嗯，至少写得还不错吧？

Clarvo: And so I'm curious, can you walk us through how it gets to an A min?

克拉沃: 所以我很好奇，你能带我们看看它是如何达到A-的吗？

Tom Tungus: Yeah.

汤姆·通古斯: 可以。

Clarvo: But as an A+ student, I don't know, a 91 would really stress me.

克拉沃: 但作为一个A+学生，我不知道，一个91分会让我很紧张。

Clarvo: Tell me how you kind of wrote the prompt and then why you picked like a minus as as your bar.

克拉沃: 告诉我你是怎么写这个提示的，以及为什么你选择A-作为你的标准。

Tom Tungus: Yeah, for sure. Okay, so uh the way I broke the prompt, I told it what I wanted.

汤姆·通古斯: 好的，当然。我分解提示的方式是，我告诉它我想要什么。

Tom Tungus: Um, and I asked an AI to critique I think I asked Gemini to create critique Claude's output.

汤姆·通古斯: 我让一个AI来评论，我想我是让Gemini来评论Claude的输出。

Tom Tungus: So, it's kind of using a student teacher or critique model. And then what it does is we'll walk through the prompt in a second, but it goes through three grading attempts.

汤姆·通古斯: 所以，这有点像使用学生-老师或评论模型。然后它会进行三次评分尝试，我们稍后会详细看提示。

Tom Tungus: So, it reads a file, gives it a grade and a score, and then it the things that are the most important that I found particularly for readers are the hook, which is the first few sentences or the lead you might call it.

汤姆·通古斯: 它会读取一个文件，给出一个等级和分数。然后，我发现对读者来说最重要的事情是“钩子”，也就是开头几句话，或者你可以称之为引子。

Tom Tungus: And then the last is the conclusion and making sure it ties back because then you have a complete um you have a complete post.

汤姆·通古斯: 最后是结论，并确保它能与开头呼应，这样你就有一篇完整的文章了。

Tom Tungus: And so it goes through this three times, right? And so you can actually see like here it gave itself a 90 and then a 91. Um and then at that point it basically was good enough.

汤姆·通古斯: 所以它会经历这个过程三次，对吧？你可以看到，这里它给自己打了90分，然后是91分。到那时，它基本上就足够好了。

Tom Tungus: It was satisfied with the hook. So um if we uh let's see if we read the blog post generator

汤姆·通古斯: 它对那个“钩子”感到满意。所以，如果我们看看博客文章生成器……

Tom Tungus: um you can see what it does at a high level right so it finds the blog post it generates an initial blog post grades it like an AP English teacher improves um and then autogenerates a URL friendly slug so it actually writes it in the right format and then it can use openAI or

汤姆·通古斯: 你可以从高层次上看到它的作用，它找到博客文章，生成初稿，像AP英语老师一样评分，进行改进，然后自动生成一个URL友好的别名，所以它实际上是以正确的格式书写的，然后它可以使用OpenAI或者……

Tom Tungus: then the prompt is here uh you are an expert blog writer specializ izing in technology and business content.

汤姆·通古斯: 提示在这里：“你是一位专门从事科技和商业内容的专家级博客写手。”

Tom Tungus: And then here I add in the blog posts and it kind of shows the patterns.

汤姆·通古斯: 然后我在这里加入博客文章，它会显示出一些模式。

Tom Tungus: What it also does is um it dynamically calculates the number of paragraphs from relevant posts and uses lama to summarize the stylistic patterns of those related posts.

汤姆·通古斯: 它还会动态计算相关文章的段落数，并使用Llama总结这些相关文章的风格模式。

Tom Tungus: So, I might write a little bit differently when I'm targeting a web 3 or a crypto audience than say I might when I'm analyzing the public disclosures of a company.

汤姆·通古斯: 所以，当我针对Web3或加密货币受众写作时，可能会与我分析一家公司的公开披露文件时写得有些不同。

Tom Tungus: Snowflake just announced earnings, let's say. And so, it's dynamically injecting that here. It shows a bunch of different examples.

汤姆·通古斯: 比如说，Snowflake刚刚公布了财报。所以，它会在这里动态地注入这些内容。它会展示一系列不同的例子。

Tom Tungus: And then, you know, here's what I think makes my blog post tick, right? 500 words or less.

汤姆·通古斯: 然后，这里是我认为让我的博客文章出彩的地方，对吧？500字或更少。

Tom Tungus: I have like 49 seconds with a reader. No section headers.

汤姆·通古斯: 我大概有49秒的时间来吸引读者。没有章节标题。

Tom Tungus: I ran a an analysis of dwell time as a function of how many headers there were and it turns out headers were terrible for dwell time.

汤姆·通古斯: 我对停留时间与标题数量的关系进行了分析，结果发现标题对停留时间非常不利。

Tom Tungus: People just bailed. Uh flowing paragraphs, each paragraph transitions smoothly to the next.

汤姆·通古斯: 人们直接就离开了。段落流畅，每个段落都平滑地过渡到下一个。

Tom Tungus: Actually, the AI consistently critiques my transitions and says they're too harsh.

汤姆·通古斯: 实际上，AI总是批评我的过渡，说它们太生硬了。

Tom Tungus: And going back to the A minus point that you made before, I think I lose five or six points because of my transitions because they're abrupt.

汤姆·通古斯: 回到你之前提到的A-，我想我因为过渡生硬而丢了五六分。

Tom Tungus: and then you know limit each paragraph to at most two long sentences

汤姆·通古斯: 然后，你知道，每个段落最多限制在两个长句之内。

Tom Tungus: and then the structure of the blog post.

汤姆·通古斯: 然后是博客文章的结构。

Clarvo: I I think this is a really interesting towards the top and I want to make sure people don't miss it.

克拉沃: 我认为这在文章开头部分非常有趣，我希望能确保大家不要错过。

Clarvo: I've seen this before which is like take this example and describe it back to me and use it.

克拉沃: 我以前见过这种方法，就是“拿这个例子，向我描述它，然后使用它”。

Clarvo: And so you're saying I'm writing on this topic go find the blog post like this topic analyze them for format like what is what is the structure?

克拉沃: 所以你的意思是，“我正在写这个主题，去找到关于这个主题的博客文章，分析它们的格式，比如结构是怎样的？”

Clarvo: how am I writing things and match stylistically match this subset of of my blog posts because I do vary style by topic.

克拉沃: “我如何写作，并在风格上匹配我博客文章的这个子集，因为我确实会根据主题改变风格。”

Tom Tungus: Exactly right. Exactly right thing. Okay. And then two sent I was not expecting this two sentences per paragraph thing.

汤姆·通古斯: 完全正确。就是这样。好的。然后是两句话，我没想到会是每段两句话。

Clarvo: I I like it.

克拉沃: 我喜欢这个。

Tom Tungus: Yeah.

汤姆·通古斯: 是的。

Clarvo: I have one more question for you as somebody who did take AP English.

克拉沃: 作为一个也上过AP英语的人，我还有一个问题要问你。

Clarvo: So, this is um perfect for you. Did you actually do they publish the AP English like grading standards for the tests?

克拉沃: 所以，这对你来说太完美了。他们真的公布了AP英语考试的评分标准吗？

Clarvo: Like, did you integrate any of that? Is it just sufficient enough to say AP English teacher?

克ラヴォ: 比如，你有没有整合其中的任何内容？还是仅仅说“AP英语老师”就足够了？

Clarvo: I'm just curious how deep you went.

克拉沃: 我只是好奇你研究得有多深。

Tom Tungus: Yeah, I just said AP English teacher.

汤姆·通古斯: 是的，我只是说了“AP英语老师”。

Tom Tungus: I figure there are enough people leaking either like the scoring rubrics or essays that scored fives or whatever it was.

汤姆·通古斯: 我想有足够多的人泄露了评分标准或者得了5分的作文之类的东西。

Clarvo: Got it.

克拉沃: 明白了。

Tom Tungus: That there's good underlying data.

汤姆·通古斯: 所以有很好的基础数据。

Clarvo: Okay. So, this is for writing it. And then what about for grading it?

克拉沃: 好的。所以这是用于写作。那么评分呢？

Clarvo: Do you have that prompt?

克拉沃: 你有那个提示吗？

Tom Tungus: Here's the grading prompt. So you're an experienced English teacher.

汤姆·通古斯: 这是评分提示：“你是一位经验丰富的英语老师。”

Tom Tungus: Here's a letter grade, numerical score, and then here are the evaluations, the hook, which you know, argument clarity, evidence and examples, paragraph structure, conclusion strength, overall engagement.

汤姆·通古斯: 这里是字母等级、数字分数，然后是评估项：引子、论点清晰度、证据和例子、段落结构、结论力度、整体参与度。

Clarvo: Got it. And have you ever gotten B's and C's on

克拉沃: 明白了。你得过B和C吗？

Tom Tungus: Yeah, for sure.

汤姆·通古斯: 是的，当然。

Clarvo: Consistently getting like 91%.

克拉沃: 总是得到91%的分数。

Tom Tungus: I I always wonder about this because I do think these models are positively inclined towards telling you you've done good work.

汤姆·通古斯: 我总是在想这个问题，因为我确实认为这些模型倾向于告诉你你做得很好。

Tom Tungus: I found that consistently.

汤姆·通古斯: 我一直发现这一点。

Tom Tungus: I've always had to say be more harsh, be more critical, call out where I'm doing things wrong.

汤姆·通古斯: 我总是得说“更严厉些，更批判些，指出我做错的地方”。

Tom Tungus: So I'm curious, do you actually get high variability in this in these gradings or you know what has been your experience?

汤姆·通古斯: 所以我很好奇，你在这些评分中真的会得到很高的变异性吗？或者说，你的经验是怎样的？

Tom Tungus: Yeah, absolutely. So another so this is one pathway for I mean the podcast to blog post data pipeline is one pathway for generating blog post.

汤姆·通古斯: 是的，绝对有。这是生成博客文章的一条路径，也就是从播客到博客文章的数据管道。

Tom Tungus: Another one is just an idea comes to me. And so then what I'll do is I'll just literally dictate.

汤姆·通古斯: 另一条路径就是我突然有了个想法。然后我就会直接口述。

Tom Tungus: Um I'll dictate I'll put it in and I'll pass it into the blog post generator and then have it grade.

汤姆·通古斯: 我会口述，把它输入进去，然后传给博客文章生成器，让它评分。

Tom Tungus: And there I've seen C minuses. Right.

汤姆·通古斯: 在那里我见过C-的评分。是的。

Clarvo: Got it.

克拉沃: 明白了。

Tom Tungus: Um yeah.

汤姆·通古斯: 嗯，是的。

Clarvo: So it's easier when it's grading itself and a little harder when it's grading you.

克拉沃: 所以当它给自己评分时更容易，而给你评分时就更难一些。

Clarvo: This is super interesting.

克拉沃: 这太有趣了。

Clarvo: And then in the you do it three loops. Do you also get high variability between the loops?

克拉沃: 你进行了三次循环。在这些循环之间，你是否也看到了很大的差异性？

Clarvo: Do you find that that that threetime process is actually additive to the evaluation?

克拉沃: 你觉得这三次循环的过程对评估真的有增益作用吗？

Tom Tungus: I do.

汤姆·通古斯: 我觉得有。

Tom Tungus: I think I often see the first one like a what like a 91 and then the second one will dip into the BB+ range and then it'll pop back up.

汤姆·通古斯: 我经常看到第一次评分可能是91分，然后第二次会降到B或B+的范围，之后又会弹回来。

Clarvo: Yep.

克拉沃: 是的。

Tom Tungus: So it's a little bit explore exploit again most of the time for me it's around those transitions and most of the time the verbosity of those transitions that the AI injects is just like catastrophic.

汤姆·通古斯: 所以这有点像探索和利用的过程。对我来说，大部分问题都出在过渡上，AI注入的那些过渡的冗长程度简直是灾难性的。

Tom Tungus: I mean it doubles the length of the uh blog post.

汤姆·通古斯: 我的意思是，它让博客文章的长度翻了一倍。

Tom Tungus: Um and then the third the third iteration tends to then kind of rein reinforce the brevity.

汤姆·通古斯: 然后第三次迭代往往会重新强调简洁性。

Clarvo: Got it.

克拉沃: 明白了。

Clarvo: And um my kids are too small for AP English to be something that I have to worry about yet.

克拉沃: 我的孩子们还太小，AP英语还不是我需要担心的事情。

Clarvo: But meta question, you know, everybody's so worried about students using AI to write.

克拉沃: 但是一个元问题是，你知道，每个人都担心学生用AI来写作。

Clarvo: I'm This seems like such a more fair way to evaluate writing. I'm curious.

克拉沃: 这似乎是一种更公平的写作评估方式。我很好奇。

Clarvo: Do you think we're going to see more and more of this site this type of evaluation in academic setting?

克拉沃: 你认为我们会在学术环境中看到越来越多这种类型的评估吗？

Tom Tungus: And do you think teachers could benefit from, you know, checking their own work when they're grading these things that are a little harder to put quantitative or qualitative feedback against?

汤姆·通古斯: 你认为老师们在批改这些难以给出定量或定性反馈的东西时，通过检查自己的工作能从中受益吗？

Tom Tungus: Yeah, I think it's a great first pass filter. Like 80% of the work, what's going on grammatically?

汤姆·通古斯: 是的，我认为这是一个很好的初筛过滤器。比如80%的工作，语法上有什么问题？

Tom Tungus: Are you using sentences and conjunctions and dangling modifiers and all that stuff?

汤姆·通古斯: 你是否正确使用了句子、连词、悬垂修饰语等等？

Tom Tungus: Like I think that um the wrote analysis of the logic of that language should be handled by an AI,

汤姆·通古斯: 我认为对语言逻辑的常规分析应该由AI来处理。

Tom Tungus: right?

汤姆·通古斯: 对吧？

Tom Tungus: And then I think there's this other part which is the stylist.

汤姆·通古斯: 然后我认为还有另一部分，那就是风格。

Tom Tungus: I mean you look at I was reading EE Cummings poems last week and you look at the creativity of some of those poems.

汤姆·通古斯: 你看，我上周在读E.E.卡明斯的诗，你看那些诗的创造力。

Tom Tungus: Um, and I, you know, I think it only comes after you have the mastery of the language, but you'd want, you'd want teachers to be free to champion that or encourage it.

汤姆·通古斯: 我认为，只有在你掌握了语言之后，才能有这种创造力，但你会希望老师们能够自由地支持或鼓励这种创造力。

Tom Tungus: I think it's really just just as important.

汤姆·通古斯: 我认为这同样重要。

Clarvo: Yeah. So, for the students listening, you know, I still think it's good to learn to write, uh, to read a lot, to learn to write, to write yourself.

克拉沃: 是的。所以，对于正在收听的学生们，我仍然认为学习写作是件好事，要多读书，学习写作，自己动手写。

Clarvo: And if you're looking for a place to practically apply AI to your writing work, maybe it's as a a first pass grade.

克拉沃: 如果你正在寻找一个能将AI实际应用到写作工作中的地方，也许可以把它当作一个初评分数。

Clarvo: Say, if you were my teacher, how would you grade this? And what feedback would you give me?

克拉沃: 比如说，“如果你是我的老师，你会怎么给这个打分？你会给我什么反馈？”

Clarvo: As opposed to, if you were me, how would you write this?

克拉沃: 而不是问，“如果你是我，你会怎么写这个？”

Clarvo: Maybe that's the right way to get students starting to use AI in a practical way that still allows you to develop these hard skills that I think are going to be continue to be super relevant.

克拉沃: 也许这才是让学生开始以一种实用的方式使用AI的正确方法，同时还能让你发展那些我认为将继续非常重要的硬技能。

Tom Tungus: Could not agree with you more. I mean, oftentimes, I don't know about you, but I'll run into writer's block or I'll have an idea that I really want to convey, but it's just a soup in my mind.

汤姆·通古斯: 不能更同意了。很多时候，我不知道你怎么样，但我会遇到写作瓶颈，或者我有一个很想表达的想法，但在我脑子里就是一团乱麻。

Tom Tungus: And there an AI will help you iterate and refine. And often it'll give you the the germ of an idea and then you'll take it and add your specific lens to it.

汤姆·通古斯: 在这种情况下，AI可以帮助你迭代和提炼。通常它会给你一个想法的萌芽，然后你再把它拿过来，加上你独特的视角。

Tom Tungus: But um but yeah, I think it's a wonderful learning tool because you have the feedback so quickly.

汤姆·通古斯: 但是，是的，我认为这是一个很棒的学习工具，因为你能非常快地得到反馈。

Clarvo: Yep. Exactly. Okay.

克拉沃: 是的。完全正确。好的。

## Predictions and Final Thoughts

Clarvo: So, you have shown us just taking Zoom back 30 something podcasts you process on a daily basis.

克拉沃: 那么，你向我们展示了你每天处理三十多个播客。

Clarvo: You create summaries, you extract themes, you extract tweets, you extract topics.

克拉沃: 你创建摘要，提取主题，提取推文，提取话题。

Clarvo: Those topics then go into another um Python script that writes a blog post based on some other relevant blog posts in your own um blog writes the blog post on demand AP English teacher to grade you three times and then you take the final pen and then is AI post like do you have it just like an agent going sender you

克拉沃: 然后这些话题会进入另一个Python脚本，该脚本会根据你博客中其他相关文章撰写一篇博客文章，并让AP英语老师评分三次，然后你再进行最终修改。那么，AI发布的帖子，你是否有一个像代理一样的发送器？

Tom Tungus: that I don't that would be awesome But no, that that's still done the artal way.

汤姆·通古斯: 那个我没有，那会很棒。但不，那部分还是手动完成的。

Clarvo: Point and click.

克拉沃: 指针点击。

Clarvo: You are still copying and pasting with your human fingers.

克拉沃: 你还是用你的手指在复制粘贴。

Tom Tungus: Yeah.

汤姆·通古斯: 是的。

Clarvo: Okay. This is a great super practical process.

克拉沃: 好的。这是一个非常实用的过程。

Clarvo: Um I'm even thinking about ways I can do this to identify future podcast go guests or um topics that people might want to see.

克拉沃: 我甚至在想我可以用这种方式来确定未来的播客嘉宾或者人们可能想看的话题。

Clarvo: So you've given me some inspiration. I'm going to ask you two wrap-up questions and then get you out of here back into your terminal.

克拉沃: 所以你给了我一些灵感。我会问你两个总结性问题，然后让你回到你的终端里。

Clarvo: First question, I was reading your 2025 predictions and you said this is going to be the year we see a 30 person hundred million dollar company and I'm curious when you in your mind's eye when you imagine that company what is it who's in it?

克拉沃: 第一个问题，我读了你对2025年的预测，你说那一年我们将看到一个30人规模、价值一亿美元的公司。我很好奇，在你心目中，你想象的那家公司是什么样的？里面都有谁？

Tom Tungus: Like what are they doing? How are they operating? What do you imagine that company looks like?

汤姆·通古斯: 他们在做什么？他们如何运营？你想象中那家公司是什么样子？

Tom Tungus: Yeah, I think it's probably there's a CEO who's a product person.

汤姆·通古斯: 我想可能会有一个产品出身的CEO。

Tom Tungus: There's an engineering team of 12 to 15 and then there's probably a couple of customer support rail people and maybe there's a salesperson

汤姆·通古斯: 有一个12到15人的工程团队，然后可能还有几个客户支持人员，也许还有一个销售人员。

Tom Tungus: maybe who's closing some of those bigger contracts and then a solutions architect as a function of the kind of company but it will be predominantly software engineering and then I think the go to market motion is **PLG** (PLG, Product-Led Growth：产品驱动增长，一种以产品本身为主要驱动力来获取、转化和留存用户的商业模式) bottoms up just massive adoption

汤姆·通古斯: 也许他会负责签下一些大合同，然后根据公司类型可能还有一个解决方案架构师，但主要还是软件工程。我认为市场推广的策略是**PLG**，也就是自下而上的大规模采用。

Tom Tungus: and do you think those software engineers are largely still focused on product building or do you imagine that those software engineers are also enabling the company with tooling and automations and figuring out how one salesperson can do the work of 20?

汤姆·通古斯: 你认为那些软件工程师主要还是专注于产品构建，还是你想象他们也会通过工具和自动化来赋能公司，并找出如何让一个销售人员完成20个人的工作？

Clarvo: I'm just curious how you think that's going to shake out.

克拉沃: 我只是好奇你认为这会如何发展。

Tom Tungus: Oh, absolutely. I think that's right.

汤姆·通古斯: 哦，当然。我认为是这样。

Tom Tungus: I mean uh you we were we were kind of talking about this but like the ability of a person to come up with a demo and then use AI to critique the demo and test uh is now so fast and the ability to take that code and basically move it into production really quickly is also incredibly fast.

汤姆·通古斯: 我的意思是，我们刚才也谈到了，现在一个人想出一个演示，然后用AI来评论和测试这个演示的能力变得非常快，而且将代码快速部署到生产环境的能力也快得惊人。

Tom Tungus: So I do think there will be a pretty significant like internal platforms enablement function and whether that's kind of 20% time for a bunch of engineers or a dedicated team of two or three people huge amount of leverage there.

汤姆·通古斯: 所以我确实认为会有一个相当重要的内部平台赋能功能，无论是让一群工程师花20%的时间去做，还是一个两三人的专门团队，那里都会有巨大的杠杆作用。

Clarvo: Yeah, I I completely agree. Okay. And then last question when your AI is grading you unfairly or writing terribly or making very long transitions that do not um sound like you, what is your prompting technique to get AI to listen?

克拉沃: 是的，我完全同意。好的。最后一个问题，当你的AI不公平地给你打分，或者写得很糟糕，或者做了很长但不像你风格的过渡时，你用什么提示技巧让AI听话？

Tom Tungus: I have two AIs duke it out.

汤姆·通古斯: 我让两个AI一决高下。

Tom Tungus: And so I have like a little example of like this is the input, this is the output that you gave me, this is the output that I want and then I have Gemini and Claw duke it out and finally kind of decide on um and I'll use a little script to do that where they'll finally polish a script.

汤姆·通古斯: 我会给出一个小例子，比如这是输入，这是你给我的输出，这是我想要的输出，然后我让Gemini和Claude一决高下，最终决定下来。我会用一个小脚本来做这件事，让它们最终打磨出一个脚本。

Tom Tungus: It doesn't work all of the time, but I do think switching models helps a ton.

汤姆·通古斯: 这不总是奏效，但我认为切换模型非常有帮助。

Tom Tungus: It it creates a level of generalizability that uh I haven't been able to replicate as a human.

汤姆·通古斯: 它创造了一种我作为人类无法复制的泛化能力。

Clarvo: I I agree and I will give you a how I AI tip from a previous uh previous guest Hillary who like negs the models to each other.

克拉沃: 我同意，我给你一个来自前一位嘉宾希拉里的“我如何使用AI”小贴士，她会互相贬低模型。

Clarvo: So they're like Gemini look at this garbage.

克拉沃: 所以他们会说“Gemini，看看这垃圾”。

Tom Tungus: No way.

汤姆·通古斯: 不会吧。

Clarvo: How to And then they're like Claude look at this trash open AI gave me like surely you can do better than this.

克拉沃: 然后他们会说“Claude，看看OpenAI给我的这垃圾，你肯定能做得比这好”。

Clarvo: That's what she calls it mean girls.

克拉沃: 她称之为“刻薄女孩”法。

Clarvo: She's like I mean girls the models and get them to compete with each other.

克拉沃: 她就像对待刻薄女孩一样对待模型，让它们相互竞争。

Clarvo: And maybe you can create a a a Python-based terminal script to to do that and then share it with with our audience, open source that thing.

克拉沃: 也许你可以创建一个基于Python的终端脚本来做这件事，然后分享给我们的观众，把那东西开源。

Tom Tungus: Uh great great idea for a weekend project this Saturday.

汤姆·通古斯: 这个周六周末项目的好主意。

Clarvo: Well, this is so helpful. Uh where can we find you?

克拉沃: 嗯，这太有帮助了。我们在哪里可以找到你？

Clarvo: How can we be helpful to you?

克拉沃: 我们怎么能帮到你？

Tom Tungus: Oh, I'm on totneous.com and uh if you're starting a company within the AI ecosystem, I'd love to hear from you.

汤姆·通古斯: 哦，我在tomtunguz.com上，如果你在AI生态系统内创业，我很乐意听听你的想法。

Clarvo: Great. Well, thank you so much for being here.

克拉沃: 太好了。非常感谢你来这里。

Tom Tungus: Thanks for having me, Clary.

汤姆·通古斯: 谢谢你邀请我，克拉里。