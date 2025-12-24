---
area: tech-insights
category: technology
companies_orgs:
- TextQL
- Oracle
- GitHub
- Snowflake
- Databricks
- Tableau
- Palantir
date: '2025-10-21'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The MAD Podcast with Matt Turck
people:
- Matt
products_models:
- ERP
- CRM
- HR systems
- BI tools
- Notion
- Glean
- Pandas
- Polars
- DuckDB
- ClickHouse
- LookML
- Cube
- MetricFlow
- PowerBI
- Looker
project:
- ai-impact-analysis
- systems-thinking
- entrepreneurship
series: ''
source: https://www.youtube.com/watch?v=CXsBiqIbrQo
speaker: The MAD Podcast with Matt Turck
status: evergreen
summary: TextQL的CEO Ethan介绍了该公司如何构建AI代理，以应对PB级企业数据的复杂查询挑战。他指出，传统大数据基础设施配置成本高昂，而现有AI产品难以处理超大规模数据。TextQL通过独特的迭代式SQL生成和上下文管理，实现了对十万张表的零配置查询，显著降低了数据分析成本，并解锁了更细粒度、低延迟的商业洞察，尤其在金融服务和医疗保健领域表现突出。
tags:
- data
- enterprise-ai
- semantic-layer
title: TextQL CEO：构建处理PB级企业数据的AI代理
---

### TextQL：为PB级企业数据构建AI代理

大家好，我叫Ethan，我是**TextQL**（一家为超大规模数据构建AI代理的公司）的首席执行官兼联合创始人，我们致力于为超大规模数据构建AI代理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi everyone, my name is Ethan. I'm the CEO and co-founder of TexQL and we build agents uh for really really really big data.</p>
</details>

这次演讲的标题是《构建能够查询十万张表、处理**PB**（Petabyte: 1PB等于1024TB）级数据且零配置的AI》，因为我被告知，非常具体地说明通常有助于人们理解你实际在做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This presentation is called building AI that can query 100,000 tables with pedabytes of data and zero configuration because uh I I was told that being very specific generally helps to make people understand what you actually do.</p>
</details>

那么，我们究竟是做什么的呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so what do we actually do?</p>
</details>

从历史上看，大家可能都听说过两种类型的数据AI，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Historically, there are kind of like two types of like AI for data that everyone's kind of heard of, right?</p>
</details>

### 传统数据AI的局限性

一种是针对超大数据（即无法在你的电脑上存储的数据）的经典历史基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's like uh there's like the classic like historical infrastructure for like really big data. This is data like that can't fit on your computer.</p>
</details>

我们谈论的是大约16GB左右的数据量，如果你试图对其进行大规模操作，你的电脑就会崩溃。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We're talking about roughly at around like 16 gigs is when like your computer would shut down if you tried to do really big manipulation on that.</p>
</details>

因此，你需要非常专业的系统，例如Oracle，以及像**ERP**（Enterprise Resource Planning: 企业资源规划系统）、**CRM**（Customer Relationship Management: 客户关系管理系统）、**HR系统**（Human Resources Systems: 人力资源系统）、数据仓库和大型**BI工具**（Business Intelligence Tools: 商业智能工具）等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so you need very specialized systems uh Oracle like ERP, CRM, HR systems, data warehouses, big like you know uh BI tools.</p>
</details>

所有这些系统都具有非常高的配置成本，你需要进行数据迁移，而且当它们提供AI产品时，这些产品通常只适用于其自身环境内的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All these things have very very high configuration costs. You have to like migrate and like when they offer an E1 AI product that only works for the data within their environments.</p>
</details>

然后是另一类数据产品和AI产品，大家今天可能都用过，比如**Notion**和**Glean**。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then there's the other class of uh data products and AI products that everyone's probably played with today here uh which are you know cla notion glean.</p>
</details>

这些平台非常擅长处理PowerPoint演示文稿、电子表格、PDF和Word文档等可以在你的电脑上存储的文件，但它们无法让你真正访问PB级的数据，因为这需要大量的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">These are platforms that like do really well with powerpoints and presentations and uh and spreadsheets and PDFs and word docs that fit on your computer and uh do not let you really access data that is pabytes because there's a lot of work that goes into that.</p>
</details>

### TextQL的解决方案与应用场景

这就是我们TextQL尝试解决的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so that's what we try to do.</p>
</details>

我们致力于部署AI，让你可以提出诸如‘能否将我的CRM数据与我的**Snowflake**（一家云数据仓库公司）数据以及我上周发送的所有电子邮件连接起来，告诉我哪些客户最有可能**流失**（Churn: 指客户停止使用产品或服务）？’这样的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We try to make it possible to deploy AI that you can ask questions like uh can you connect my CRM data to my snowflake data to like all the emails that I sent last week and tell me like which of my customers are most likely to churn.</p>
</details>

或者，‘你能否验证所有这些数字是否正确，甚至向**GitHub**（一个基于Git的代码托管平台）提交一个**PR**（Pull Request: 在软件开发中，指请求将代码更改合并到主分支），以确保我们正在进行的**SQL**（Structured Query Language: 结构化查询语言，用于管理关系数据库）迁移都是正确的？’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Or can you validate that all these numbers are correct and then you know even commit like a PR to GitHub to make sure that the uh that the SQL migrations that we're doing are all like correct.</p>
</details>

这需要非常非常大的开销。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um this is a very very hard amount of overhead.</p>
</details>

我们与非常大的公司合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We work with like very big companies.</p>
</details>

我们与高度合规的环境合作，将产品部署到医院、金融服务等超级本地化、基础设施繁重的环境中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we work with like very uh compliant like environments. we deploy into like hospitals, financial services is a super onrem like infra heavy like environment.</p>
</details>

我们还与一些最大的AI实验室合作，因为构建所有这些基础设施的难度非常大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And we work with some of the largest AI labs because uh that that's how hard it is to build out all this infrastructure.</p>
</details>

更多用例方面，我们主要服务于金融服务和医疗保健领域，并进行大量数据转换，确保人们能够构建数据管道、移动数据，真正地处理大数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">More use cases we do financial services and healthcare like predominantly and and we do a lot of like transformations um around uh making sure people can build pipelines move data around really like work with big data for lack of a better word.</p>
</details>

你可能会想，‘我为什么要关心这个？’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You might be thinking why do I care about this?</p>
</details>

目前，如果你进行一次数据请求，比如‘你能找出最有可能流失的客户吗？’，而这需要一名年薪30万美元的斯坦福数据科学博士花费一个月的时间，那么这实际上为分析该机会的价值设定了一个下限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, right now if the unit cost of like you doing like a data request and asking like, hey, can you like, you know, figure out what the most likely customer to turn is? Uh, if that costs you a month of time of a Stanford PhD in data science, like you pay $300,000 a year to, that sets a kind of a floor on how valuable the opportunity has to be for you to analyze that.</p>
</details>

显然，如果你能降低分析成本，如果你能训练一个代理以十分之一、百分之一甚至千分之一的成本完成这项工作，那将解锁更多的机会，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Obviously, if you can bring down the cost of that analysis, if you can train an agent to do that for one/10enth, 100th, 1/1,000th of the cost, um, it unlocks a lot more opportunities, right?</p>
</details>

它让你能够将今天进行的分析（例如，按月、按州找出哪些客户会流失）提升到按城市、按周、按邮政编码、按天进行分析的粒度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It lets you like take analysis that you're doing today at like the like you're trying to figure out like which of our customers is going to churn per month per state and you want to do that analysis really like per city per week per uh per zip code per day.</p>
</details>

甚至可以细化到根据某个特定客户的关键联系人在LinkedIn上发布的‘我很难过’的帖子，你从中解读出他们被解雇了，因此他们所有的项目都将停止，而你希望提前预判到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh really like per per LinkedIn post from your champion at a particular account who is leaving and says I'm very sad and you read from that that they were fired and therefore all their initiatives are going to shut down and you want to like anticipate that in advance or something.</p>
</details>

这是一种非常低延迟、非常困难且非常昂贵的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's like a very very low latency thing that's very hard. It's very expensive.</p>
</details>

这正是我们TextQL所做的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's kind of what we do.</p>
</details>

### 实际案例演示：董事会报告验证

所以，让我通过一个例子来向大家说明。假设你的团队里有一位财务人员，Dylan，他今天也在现场，我们需要他做一些董事会报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So to walk you through an example uh let's say uh there's a finance guy on your team uh Dylan who is in the audience here with us today who uh we have to do some board reporting.</p>
</details>

离董事会会议还有五分钟，他给我发了这个东西，说：‘你能看看这个电子表格吗？上面有一张图片。我不知道这些数字是从哪里来的。你能核对一下这些数字是否正确吗？’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's five minutes until the board meeting and he sent me this uh thing and he says uh can you look at this like thing uh spreadsheet there's an image on it. I have no idea where these numbers came from. Can you double check that these are correct?</p>
</details>

而我恰好没有一个斯坦福博士，可以帮我把一个月的核对工作加速到20分钟完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I don't happen to have a Stanford PhD that I can like accelerate a month of work into two 20 minutes for.</p>
</details>

所以这实际上是我们的真实生产数据，它位于一个大约有1万张表的**数据仓库**（Data Warehouse: 用于存储和管理大量历史数据的系统）之上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is actually the uh this is like slightly like this is our real like prod data. Uh this is on top of a data warehouse of I think about like 10,000ish tables.</p>
</details>

它在第一次运行时就成功了，而且无需任何配置。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh it worked the first time with no configuration.</p>
</details>

现在它已经缓存了，所以效果可能没那么惊艳。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now it's kind of cached so it won't be as sexy.</p>
</details>

所以，如果我拿着这个，然后说‘我需要为会议做准备’，然后问‘嘿，Anna，你能核对一下这个是否属实吗？Matt告诉我这是正确的，我们团队的那个人。’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so if I take this and I go to I need a prepar meeting and I go uh hey Anna can you double check if this is true. Uh Matt told me this is correct. Uh the man on my team.</p>
</details>

如果它不正确，我会非常生气，因为董事会会解雇我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and uh and uh I'm going to be really mad if it's not correct because the board is going to fire me.</p>
</details>

告诉我他们是否会满意，如果不满意，我能做些什么来提高使用率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um uh tell me if they will be happy or not and if not um what I can do about it to drive the usage to go up.</p>
</details>

我曾经在一家初创公司管理一个大约10人的数据团队。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I used to run a data team uh at a startup uh with like 10 people.</p>
</details>

我负责处理每一个这样的请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was responsible for every single one of these requests.</p>
</details>

如果我收到这样的请求，我会想把眼睛挖出来，因为根本没有上下文。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I if I got a request like this, I would want to gouge my eyes out because uh there's no context.</p>
</details>

只有一张图片，我完全不知道这些数据是从哪张表里来的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There is a image. I have no idea what table this came from.</p>
</details>

没有数据血缘，没有基础设施，也没有任何元数据文档。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's no lineage. There's no infrastructure. There's no metadata documentation whatsoever.</p>
</details>

我不知道他们是从哪张表拉取的数据，也不知道是来自Segment博客还是Snowflake或其他地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I have no idea what table they pulled it from. I don't know if it was like segment blogs or snowflake or something else.</p>
</details>

但你会看到Anna开始回复，并告诉我她正在进行的工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But uh you'll see Anna start to reply and start telling me the work that she is doing.</p>
</details>

所以如果我进入这个环境，你会看到AI代理已经收到了这个请求。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh so if I go into the environment, what you'll see is uh you'll see the uh agent has received this.</p>
</details>

我可以提出后续问题，一旦它回复完毕，就会生成一份报告，并发送回Slack。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I can you know ask follow-up questions and it'll like once it's done replying it'll like generate a report, send it back to Slack and uh I actually didn't think this far ahead because if I had I would have realized now we're going to stare at this run for a little bit maybe to like walk through like how we managed to do this and like the kind of things that it's happening under the hood.</p>
</details>

### TextQL的技术核心：上下文与迭代式SQL生成

我其实没有考虑那么远，因为如果我考虑了，我就会意识到现在我们得盯着它运行一会儿，也许可以借此机会讲解我们是如何做到这一点的，以及幕后发生的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">um how can I like do this over hundreds of thousands of tables without knowing anything about your data warehouse?</p>
</details>

我们如何在不了解你的数据仓库的任何信息的情况下，处理数十万张表呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, the first thing it does is uh it looks at a context repository that we maintain.</p>
</details>

首先，它会查看我们维护的一个上下文存储库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh that's actually um a GitHub uh context uh repo that we like let it like write PRs to.</p>
</details>

这实际上是一个GitHub上下文存储库，我们允许它向其中写入**PR**（Pull Request: 拉取请求）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And this way it kind of has this like memory concept um that is like you can scale this to infinite amounts.</p>
</details>

通过这种方式，它拥有了一种可以无限扩展的记忆概念。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It'll just run like 50 uh if anyone's an engineer here like GPS uh against the thing to try to find like all the like keywords that you're looking for um without using ve there's no vectors.</p>
</details>

它会运行大约50个，如果这里有工程师的话，就像针对目标运行GPS一样，尝试找到你正在寻找的所有关键词，而且不使用向量。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">is entirely like syntactically oriented. So it can like you know be very like meiy in its approach to finding its content.</p>
</details>

它完全是基于语法导向的，所以在寻找内容时，它的方法可以非常‘灵活’（meiy，可能是口误或俚语，此处按上下文理解为灵活）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and like it has a ton of like you know infinitely complex calculations or anything else like built into it example queries all the cache stuff and at the end of any session you can tell the agent just save this to your context make sure it's always there and it'll write a PR and uh you can merge that and uh you will kind of just keep getting smarter.</p>
</details>

它内置了大量无限复杂的计算或其他功能，例如查询、所有缓存数据等。在任何会话结束时，你可以告诉代理：‘把这个保存到你的上下文里；确保它始终在那里。’然后它会写入一个PR，你可以合并它，这样它就会不断变得更智能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now when it gets into the SQL mode uh this is kind of the thing that we really do very differently from every other company in the world uh who claims to have something like this which is we don't try to oneshot the SQL.</p>
</details>

现在，当它进入SQL模式时，这是我们与世界上其他声称拥有类似产品的公司真正不同的地方，那就是我们不尝试一次性生成SQL。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What that means is we don't try to write SQL hit run and like make sure the query is perfectly correct because anybody who in the room has who has ever written SQL before knows that if I give you 10,000 pages of documentation and a SQL terminal and I tell you hey can you help me figure out which of our customers are going to turn uh and you can only hit the run button once you're going to get the wrong answer.</p>
</details>

这意味着我们不会尝试编写SQL，然后点击运行，并确保查询完全正确，因为任何写过SQL的人都知道，如果我给你一万页文档和一个SQL终端，然后告诉你：‘嘿，你能帮我找出哪些客户会流失吗？’而你只能点击一次运行按钮，你肯定会得到错误的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is like literally impossible. It is not how you go about generating SQL.</p>
</details>

这简直是不可能的，这不是生成SQL的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so for us, we have the agent explore the database.</p>
</details>

所以对我们来说，我们让代理去探索数据库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It it it's looking at the information schema for anyone who doesn't isn't SQL literate. What this means is it is literally saying tell me every table table you have. Um and then tell me every column you have.</p>
</details>

它会查看**信息模式**（Information Schema: 数据库中存储数据库元数据的特殊集合），对于不熟悉SQL的人来说，这意味着它会字面意义上地询问：‘告诉我你所有的表’，然后‘告诉我你所有的列’。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then like it's going to scan through the whole thing and then like anything that's not relevant, it's going to dump out of context.</p>
</details>

然后它会扫描整个数据库，并将所有不相关的内容从上下文中排除。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so it can like run for an incredibly long amount of time as it like tries tries to step through all of this stuff.</p>
</details>

因此，当它尝试逐步处理所有这些内容时，它可以运行非常长的时间。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, um I guess while it's running this, yeah, it's like like pulling the it's pulling the data. It's forming hypotheses.</p>
</details>

现在，当它运行时，它正在拉取数据，形成假设。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It might like look at a daytime field like data warehouses are incredibly messed up environments.</p>
</details>

它可能会查看一个日期时间字段；**数据仓库**（Data Warehouse: 用于存储和管理大量历史数据的系统）是极其混乱的环境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every enterprise has like 50 of them.</p>
</details>

每个企业都有大约50个这样的数据仓库。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Every enterprise has another 30 different BI tools from like the past like 35 years.</p>
</details>

每个企业还有过去35年间使用的30种不同的BI工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um three different ERPs, 17 different CRM.</p>
</details>

三套不同的ERP系统，17套不同的CRM系统。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so there's a lot of like hypothesis testing that like the agent steps through as it's exploring.</p>
</details>

因此，代理在探索过程中会进行大量的假设检验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It has to like go, oh, like plot the daytime columns. Oh, cool. Uh there's a drop here. There's a data pipeline that was probably broken.</p>
</details>

它必须进行判断，比如‘哦，绘制日期时间列。哦，不错。这里有一个下降。可能有一个数据管道坏了。’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um so it's a lot of it's a lot of like hypothesis testing so it can like recover from all of the things and all the pieces.</p>
</details>

所以它进行了大量的假设检验，这样它就可以从所有问题和碎片中恢复过来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I think it's a written some like uh you know written some plots, written visualizations.</p>
</details>

我想它已经编写了一些图表，编写了可视化内容。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh eventually now it's like referencing our CRM uh and so it can directly plug into any other data sources that you have uh that is very fast to configure because well it's making an API call the exact same way that any one thing can make an API call.</p>
</details>

最终，现在它正在引用我们的CRM，因此它可以直接插入你拥有的任何其他数据源，而且配置速度非常快，因为它正在进行**API调用**（Application Programming Interface Call: 应用程序编程接口调用），就像任何其他事物进行API调用一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and yeah, while it's doing all this, I can show you uh what happens after I complete this, which is um I would take like a completed playbook or like a report or something like for example this daily customer upsell analysis that tells me which customer I should reach out to and ask them for more money.</p>
</details>

是的，当它做所有这些的时候，我可以向你展示我完成这个之后会发生什么，那就是我会拿一个完成的剧本或报告，例如这个每日客户追加销售分析，它会告诉我应该联系哪个客户并向他们争取更多资金。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh, and once I know that, you know, it steps through like 50 steps and it'll give me a good result, I can schedule this to run every day, every week, every time a customer sends me an email um to give me a new report like this.</p>
</details>

一旦我知道了这些，它会执行大约50个步骤，然后给我一个好的结果，我可以安排它每天、每周，或者每次客户给我发送电子邮件时运行，以生成一份像这样的新报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right? This is how you um kind of go from like the uh ask questions and it'll tell you what is this number to eventually ask questions. It'll tell you why did this number go up and eventually uh ask questions why did this go up? Okay, given why that you know why it went up tell me what I can do to make the number go up or down depending on if it's a good number or a bad number.</p>
</details>

对吧？这就是你如何从提出‘这个数字是什么？’这样的问题，最终发展到提出‘为什么这个数字上升了？’这样的问题。最终，提出‘为什么它上升了？好的，既然你知道它为什么上升，告诉我我能做些什么来让这个数字上升或下降，这取决于它是一个好数字还是一个坏数字。’这样的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that's like a very very useful thing because once you do that you make way more money having the thing uh I guess like you know run on a loop and like just find you more money.</p>
</details>

这非常非常有用，因为一旦你这样做，你就可以让系统循环运行，为你找到更多的钱，从而赚取更多的收入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Okay, it's done.</p>
</details>

好的，它完成了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So it's finished the final report. it came back.</p>
</details>

它完成了最终报告，并返回了结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's like a whole thing. It says uh you know the uh the the expected stuff is all correct.</p>
</details>

报告显示，‘预期的内容都是正确的。’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">There's a like 3% delta I think because we changed the way we count something.</p>
</details>

我认为大约有3%的差异，因为我们改变了某种计数方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and also the August number was like way off because uh this this like thing was like presented to me in August.</p>
</details>

而且，八月份的数字也相差甚远，因为这个东西是在八月份呈现给我的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you read the text, it says, you know, chart displayed August to date for August represented approximately August 13th, which is probably correct.</p>
</details>

如果你阅读文本，它说：‘图表显示了截至八月份的八月份数据，大约代表了八月13日的数据’，这可能是正确的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I go back and check when he sent me this uh or I'm going assume it's correct because there's no reason for it to not be correct.</p>
</details>

如果我回去检查他什么时候发给我的，或者我假设它是正确的，因为没有理由不正确。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then it'll tell me like uh present actually. Okay, fine fine fine. I'll check I'll double check that Matt uh Matt Matt actually sent me this at that time.</p>
</details>

然后它会告诉我：‘实际呈现。好的，好的，好的。我会检查，我会再次核对Matt当时是否真的给我发了这个。’

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is uh August 14th. It's we're off by a date. It said approximately 13. It's actually 14.</p>
</details>

这是8月14日，我们差了一天。它说大约是13日，实际上是14日。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and the uh and the and the thing comes out to uh revenue growth ACU usage uh something something corresponds to the thing.</p>
</details>

结果显示收入增长、ACU使用量，以及一些与此相关的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we should tell Matt's data is partially correct, incomplete.</p>
</details>

我们应该告诉Matt，他的数据部分正确，但不完整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I likely working with midmon data, exceptional performance, celebration worthy data, something something.</p>
</details>

我可能正在处理月中数据，表现出色，值得庆祝的数据，等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This is great. I'm not going to get fired.</p>
</details>

这太棒了，我不会被解雇了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh and uh now I'm really happy.</p>
</details>

现在我真的很高兴。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And yeah, the that's approximately uh the demo.</p>
</details>

是的，这就是演示的大致内容。

### TextQL的底层基础设施与未来展望

对于那些好奇我们能深入到什么程度的人来说，为了实现这一点，我们不得不构建大量的底层基础设施。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh like we uh for people who like wanted are curious about how deeper how much deeper we go like there's a lot of infrastructure that we had to build out to make this possible.</p>
</details>

在这家公司成立的头两年半里，我们重建了这个产品，我们总共重建了七次，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We've like rebuilt this product for the first two and a half years of this company. We rebuilt this product seven times over, right?</p>
</details>

我们尝试了目录、微调、SQL终端、向量存储，以及带有向量存储的目录、沙盒和SQL存储等所有这些东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We tried like cataloges, fine-tuning, SQL terminals, vector stores um like like cataloges with vector stores and sandboxes and SQL stores and all these things.</p>
</details>

我们添加了**DuckDB**（一个嵌入式分析型数据库），我们添加了**Polars**（一个高性能数据处理库），我们从沙盒开始，这样我们就可以执行代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like we added like ductb we added polers we added um like we started with the sandbox so we could execute and we're as as I've been recently reminded uh we're the first company to publicly release a version of code interpreter uh that wasn't in beta and uh and then we were like oh the data is getting really big okay well we need something that's not just pandas in python it's going to be polars then we were like okay the data got even bigger okay we need like DB got even bigger passed down to the data warehouse got even bigger and we needed joints on the fly serverless click house infrastructure then we had to roll a semantic layer for because some people wanted deterministic queries to come out every time then some of those queries took a really long time so we added caching at acceleration and then some people had Tableau and looker and powerbi and all those things so we had to build our own MCP servers for all those platforms uh because uh data bricks and snowflake and Tableau's MCP servers are moderately maybe not the most usable things in the world in summary uh if If you if you want to roll this yourself at your own company uh company like ramp or with exceptional engineers or something you should do that uh this is totally doable now with today's technology in GPD5 all you have to do is build your own uh compute format uh table format uh that is natively integrated with your compute format that can do this across multiple different large data sources.</p>
</details>

正如我最近被提醒的，我们是第一家公开发布非测试版代码解释器的公司。然后我们想，‘哦，数据变得非常大。好吧，我们需要一些不仅仅是Python中的**Pandas**（一个用于数据分析和操作的Python库）的东西；那将是Polars。’然后我们又想，‘好的，数据变得更大了。好的，我们需要像DB一样变得更大，传递到数据仓库变得更大，我们需要即时连接、无服务器的**ClickHouse**（一个开源的列式数据库）基础设施。’然后我们不得不推出一个**语义层**（Semantic Layer: 数据抽象层，将复杂数据模型转化为业务用户易懂的术语），因为有些人希望每次都能得到确定性的查询结果。然后其中一些查询耗时很长，所以我们添加了缓存和加速功能。然后有些人使用**Tableau**（一个数据可视化和商业智能平台）、**Looker**（一个商业智能和数据分析平台）和**PowerBI**（微软的商业智能服务）等工具，所以我们不得不为所有这些平台构建自己的**MCP服务器**（Multi-Cloud Platform servers: 多云平台服务器）。因为**Databricks**（一个数据和AI公司）、Snowflake和Tableau的MCP服务器可能不是世界上最易用的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Build your own MCP servers for the Tableaus, 17 different ways of ingesting data.</p>
</details>

总而言之，如果你想在自己的公司，比如像Ramp这样的公司，或者拥有卓越工程师的公司自己实现这一点，你应该去做。在GPT-5的现代技术下，这完全是可行的。你所要做的就是构建自己的计算格式、表格式，并使其与你的计算格式原生集成，从而能够在多个不同的庞大数据源上执行此操作。为Tableau构建自己的MCP服务器，处理17种不同的数据摄取方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Four out of four of them break. We actually found like a roundabout way to actually get this to work.</p>
</details>

其中四种方式全部失效；我们实际上找到了一种迂回的方法来使其正常工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So much so that even the Tableau team currently tax us into accounts to try to I guess like to figure out their AI things for customers who want to use Tableau AI but can't get it to work.</p>
</details>

以至于现在连Tableau团队都会将我们引入客户账户，试图帮助那些想使用Tableau AI但无法使其工作的客户解决AI问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We rolled our own semantic layer. It's compilable, transpilable from like all existing semantic layers um like look ML cube metric flow and uh and and like a really cool like guey that looks kind of wild when you put in over a thousand objects onto the same thing uh at the same time.</p>
</details>

我们推出了自己的**语义层**（Semantic Layer: 数据抽象层，将复杂数据模型转化为业务用户易懂的术语）；它可以从所有现有的语义层（如**LookML**、**Cube**、**MetricFlow**）进行编译和转译。还有一个非常酷的图形用户界面（GUI），当你同时将一千多个对象放到同一个界面上时，它看起来会有些狂野。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and uh and our own agent builder which you know this is like very different from like because we're running like a more non-deterministic agent uh like uh like glide code modality wise it looks very very different like the right UI builder for something that's going to be less if else statements and more use best judgment and run for like 2 hours or 10 hours as like test time compute like kicks in for like the latest like generation of models you generally want like more logic on the trigger way more uh instructions on the prompt environment and then like an easier iteration cycle for testing because you're going to be running these models for like hours and hours.</p>
</details>

以及我们自己的代理构建器，这与众不同，因为我们运行的是一种更具非确定性的代理，从滑动代码模态的角度来看，它看起来非常非常不同。例如，对于那些较少使用if-else语句，更多依赖‘最佳判断’，并且在最新一代模型中，测试计算时间可能长达2小时或10小时的场景，正确的UI构建器会非常不同。你通常希望在触发器上有更多的逻辑，在提示环境中提供更多的指令，然后有一个更简单的测试迭代周期，因为你将运行这些模型数小时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, this is not the best UI in the world, but um generally pretty bearish on um I guess like the canvas based like UI for like agent building.</p>
</details>

现在，这并非世界上最好的用户界面，但我通常对基于画布的代理构建用户界面持悲观态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We rolled our own I guess we we have a semantic layer which means we need tools to query the semantic layer.</p>
</details>

我们开发了自己的工具；我想我们有一个语义层，这意味着我们需要工具来查询这个语义层。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We rolled our own version of um we we took like lookers like metric explorer and palunteers object explorer and combined them onto something that works on the same surface area.</p>
</details>

我们开发了自己的版本，我们结合了Looker的指标探索器和**Palantir**（一家大数据分析公司）的对象探索器，并将它们整合到一个在同一界面上工作的工具中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because sometimes business users want to ask get me all the blanks like customers or something with all these attributes and that's like an object question because every row is a noun and sometimes people ask show me how x y and z metrics change over time and uh break it out by 17 different objects that come from 35 different tables and that's going to be also a horrible thing but that's a totally different type of math um to get correct.</p>
</details>

因为有时业务用户会问：‘给我所有具有这些属性的客户’，这是一个对象问题，因为每一行都是一个名词。有时人们会问：‘向我展示X、Y和Z指标如何随时间变化’，并‘按来自35张不同表的17个不同对象进行分解’，这同样会非常糟糕，但这需要完全不同类型的数学才能正确处理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I know a lot of people in the world offer the uh offer like AI for SQL, AI for big data, AI for data warehouses.</p>
</details>

我知道世界上很多人都提供SQL AI、大数据AI、数据仓库AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We work with a lot of customers who've been, you know, two and a half years in on building semantic models for Snowflake and they can get it to work for exactly 20 tables.</p>
</details>

我们与许多客户合作，他们已经花了两年半时间为Snowflake构建语义模型，但他们只能让它在20张表上工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and you know, we can for anyone here who cares about asking questions of their data and getting decision intelligence and all that stuff and building AI that can work with really big data.</p>
</details>

你知道，对于任何关心如何查询数据、获取决策智能以及构建能够处理超大数据AI的人来说，我们TextQL可以做到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like if I can't make sense, if our agent can't make sense of your data warehouse with, you know, over 100,000 tables even um, in any data environment with no configuration time and it can't build its own semantic model and like do all the data integration for itself in the same loop and like do all the PRs and change your DBTs and everything else required to like get it to a place where it can analyze all your data. I will buy your entire whole team data team uh, NOU with our VC dollars.</p>
</details>

如果我们的代理无法在任何数据环境中，无需配置时间，理解你拥有超过十万张表的**数据仓库**（Data Warehouse: 用于存储和管理大量历史数据的系统），并且无法在同一循环中为自己构建语义模型、完成所有数据集成、处理所有PR并修改你的**DBT**（Data Build Tool: 一个数据转换工具）以及其他所有必要的工作，使其能够分析你的所有数据，那么我将用我们的风险投资资金为你的整个数据团队购买**NOU**（可能是某种奖励或产品，此处原文未明确，按上下文理解为提供某种福利）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we've made this offer I think like 20 times. Uh nobody's taken up up on it.</p>
</details>

我们已经提出这个提议大约20次了，但没有人接受。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And uh maybe one day uh we will come across a horrible horrible I'm guessing it's probably going to be like a manufacturing company with like IoT devices um like with like infinite like joint complexity.</p>
</details>

也许有一天我们会遇到一个非常非常糟糕的案例，我猜可能是一家拥有**IoT**（Internet of Things: 物联网）设备的制造公司，其连接复杂性是无限的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but uh until then uh yeah I'd love to you know thank thank you for watching.</p>
</details>

但在此之前，是的，我非常感谢大家的观看。