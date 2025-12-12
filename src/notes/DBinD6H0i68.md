---
title: How to Think in SQL, a Set-Based Mindset
summary: 本文探讨了如何从过程式编程思维转向SQL的集合式思维，以显著提升数据库查询性能。内容涵盖了优化、索引、连接策略和执行计划分析等核心概念，旨在帮助开发者编写更高效、更具扩展性的SQL代码。
area: null
category: null
project: []
tags:
  - database-optimization
  - query-performance
  - set-based-thinking
  - sql
people: []
companies_orgs: []
products_models: []
media_books: []
date: 2016-01-16
author: Lei
speaker: Kevin Devine
channel: null
draft: true
file_name: how_to_think_in_sql_a_set_based_mindset.md
guest: null
insight: 在看了Ozer的一些关于Query performance的视频，我在网上找到这个，也给我了一个整体的思考，关于query的。
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=DBinD6H0i68
---
## 介绍：从过程式思维到集合式思维

So how many people here want to learn about SQL? How many people are just in this theater because they're playing the movie afterwards? Okay, so let's get started. We're gonna talk about how to think in SQL.

这里有多少人是想来学习 **SQL** 的？又有多少人只是因为之后这里要放电影才待在这个影院的？好了，我们开始吧。我们将要讨论如何用 **SQL** 的方式去思考。

These are a couple slides I got off of DBA reactions.com, it's a site that DBAs used to make fun of developers. Sometimes I generally do that too. A lot of code. If you replace a cursor with a while loop, something is wrong. And stored procedures are vulnerable to SQL injection, as is everything else. Okay, so let's not go there. So, talking about how to think in the SQL based mindset. We're going to talk about optimizing, organizing, indexing, prioritizing, and maybe a little innovation.

这两张幻灯片来自我从 DBA reactions.com 上找到的，那是一个**数据库管理员**（DBA：Database Administrator）们用来取笑开发者的网站。有时候我也这么干。大量的代码。如果你用一个 `WHILE` 循环去替换一个**游标**（cursor：一种在数据集中逐行导航的机制），那肯定是有问题的。而且**存储过程**（Stored Procedures）容易受到 **SQL 注入**攻击，就像其他所有东西一样。好了，我们不深入这个话题。我们来谈谈如何用基于 **SQL** 的思维方式去思考。我们将讨论优化、组织、索引、确定优先级，或许还有一点创新。

I'm Kevin Devine. I was a former database administrator. I'm a current software engineer at MRI software. That's my twitter and my yahoo accounts. Anybody want to criticize me for having a yahoo mail account? I got it the day it went live. So I'm old.

我是 Kevin Devine。我曾是一名数据库管理员，现在是 MRI software 的一名软件工程师。那是我的 Twitter 和雅虎账户。有人想因为我用雅虎邮箱而批评我吗？它上线的第一天我就注册了。所以我年纪不小了。

## 开发人员与数据库的视角差异

This is generally how developers see databases. Developers see databases as, "I need to find a pebble on this beach. How do I do that?"

这通常是开发人员看待数据库的方式。他们认为数据库就像是：“我需要在这片沙滩上找到一颗特定的鹅卵石。我该怎么做？”

Now, a well-designed database looks like this. It's nice and structured, and you can find exactly what you're looking for when you want to find it.

而一个设计良好的数据库应该是这样的。它结构优美、井然有序，你可以随时找到你想要的东西。

And what we want to talk about is how to get to where you're thinking of a database as nice and structured, not looking at it as how do I find a pebble on a beach.

我们今天要讨论的，就是如何让你开始将数据库看作一个优美且结构化的系统，而不是把它看成一片需要费力寻找鹅卵石的沙滩。

## SQL 开发者的成长路径

I took this quote from Itzik Ben-Gan. He's been a SQL MVP since 1999, written I don't know how many books, quite a few. And he talks about the path that a SQL developer takes. And you start off with your procedural, you're using cursors and loops and functions and temporary tables to do everything you would normally do in your C# or your Java code. And you don't even realize how bad it is.

我引用了 Itzik Ben-Gan 的一段话。他从1999年起就是 SQL 领域的 **最有价值专家** (MVP)，写了无数本书。他谈到了一个 SQL 开发者的成长路径。一开始，你采用的是**过程式**（procedural）方法，使用游标、循环、函数和临时表来完成所有你通常会在 C# 或 Java 代码中做的事情。你甚至没有意识到这种做法有多糟糕。

Because it probably runs perfectly fine in your development environment. You know, "I'm working on a thousand records, it works fine, everything's running fast." Then you put it on production and you go, "Well, I don't know why it's slow. It must be the hardware," because developers love to blame the hardware.

因为它在你的开发环境中可能运行得毫无问题。你会想：“我正在处理一千条记录，它运行得很好，一切都很快。” 然后你把它部署到生产环境，就会说：“嗯，我不知道为什么这么慢。肯定是硬件的问题，” 因为开发人员最喜欢怪硬件。

The next step in the development is kind of realizing, "Maybe it is the code. Maybe there's something in the code I can improve, but I don't know how to do that." So you kind of look to some experts out there, maybe Itzik Ben-Gan, maybe a Brent Ozar or maybe a Paul Randal, one of those guys you follow online. You're like, "These guys know what they're talking about. I'll follow what they say."

开发的下一个阶段是开始意识到：“也许是代码的问题。也许代码里有些东西我可以改进，但我不知道该怎么做。” 于是你开始寻求专家的帮助，也许是 Itzik Ben-Gan，也许是 Brent Ozar 或 Paul Randal，那些你在网上关注的大神。你会想：“这些人知道他们在说什么，我就照他们说的做。”

And then you get to the maturity level when you're talking SQL development. And this is when you not only know what you're supposed to use in SQL to be optimal code, but it's second nature. You're like, "I know I need to iterate over this, I can use a `SELECT OVER (PARTITION BY)`, not I'm going to use a cursor."

然后，你就达到了 SQL 开发的成熟阶段。在这个阶段，你不仅知道在 SQL 中应该使用什么来实现最优化的代码，而且这已经成为你的第二天性。你会想：“我知道我需要遍历这个集合，我可以使用 `SELECT OVER (PARTITION BY)`，而不是去用游标。”

## 核心理念：要什么 vs. 怎么做

First is when you are programming in a procedural language, in a lot of cases you're telling the computer how to do this. In SQL, the question is not "how to do it," it's "this is what I want."

首先，当你在使用过程式语言编程时，很多情况下你是在告诉计算机“如何”去做某件事。而在 SQL 中，问题不在于“如何做”，而在于“我想要什么”。

The next one is that looping is not something that SQL likes to do when you tell it to. It's perfectly fine doing looping on its own in the SQL optimizer; it does not like it when you tell it to do that. We're gonna go over some SQL terminology, and then we're gonna talk about results-oriented thinking.

其次，SQL 并不喜欢在你明确指令它去循环时进行循环。它在自身的 SQL 优化器里进行循环是完全没问题的，但它不喜欢你直接命令它这么做。接下来，我们会过一遍 SQL 的术语，然后讨论面向结果的思维方式。

So first we're gonna talk about this: "what do you want" versus "how do I get it". And in this case, if you're doing something where I say, "Find all customers that are in the state of Ohio." Let's say I gave you a flat file that just had lines that had addresses on it. How would you find what was Ohio? There's a couple ways. Maybe a regular expression, maybe you'd iterate through each line with an index of, maybe you'd shove it into a data table object and use LINQ. A couple of different ways you could do that. In SQL, if it's in a database, you just go `SELECT * FROM Customers WHERE State = 'Ohio'`. You're not worried about how it's giving you that data back, just that's what I want. And so that's what SQL kind of expects.

首先我们来谈谈这个：“你想要什么” 对比 “我如何得到它”。举个例子，如果我让你“找出所有在俄亥俄州的客户”。假设我给你一个纯文本文件，里面一行行都是地址。你会怎么找出哪些是俄亥俄州的？有几种方法。也许用正则表达式，也许逐行遍历，或者把它加载到数据表对象里用 **LINQ** 查询。方法有很多。但在 SQL 中，如果数据在数据库里，你只需要写 `SELECT * FROM Customers WHERE State = 'Ohio'`。你不用关心它如何把数据给你，你只关心“这就是我想要的”。而这也正是 SQL 所期望的工作方式。

## 循环的弊端：逐行处理的诅咒

Now I want to talk a little bit about looping. There's a term that DBAs love to throw around called **RBAR**, and it stands for "Row By Agonizing Row". When I want to get back data, I want to get it back in a chunk, or I want to process things in a big set, not each row. And there's a lot of ways that incorrect coding will get you row by row, and we're going to show a few of those.

现在我想谈谈循环。DBA 们喜欢用一个词叫 **RBAR**，意思是“**逐行处理，痛苦至极** (Row By Agonizing Row)”。当我想要获取数据时，我希望一次性得到一个数据块，或者在一个大的集合中处理事务，而不是逐行处理。有很多不正确的编码方式会导致逐行处理，我们会展示其中一些例子。

I say "cursors are curses" up there. That's actually somebody's quote that I took. I'm not exactly sure who I first heard it from. There are some cases where you need to use a cursor. In general, though, cursors are a code smell in SQL. Look at it, make sure it's good.

我在上面写着“游标即诅咒”。这其实是我引用的别人的话，不确定最早从谁那里听说的。在某些情况下，你确实需要使用游标。但总的来说，游标在 SQL 中是一种**代码异味**（code smell）。看到它就要仔细检查，确保它是必要的。

`WHILE` loops are hardly ever better than a cursor. I've seen people go, "I heard cursors were bad, I changed them all to `WHILE` loops." And that's why I put up that slide at the beginning. `WHILE` loops are actually worse than cursors. Don't use `WHILE` loops. I don't even know why the command exists in SQL, it's bad. I think there's some edge cases, I guess.

`WHILE` 循环几乎从不比游标更好。我见过有人说：“我听说游标不好，所以我把它们都改成了 `WHILE` 循环。” 这就是为什么我一开始要放那张幻灯片。`WHILE` 循环实际上比游标更糟。别用 `WHILE` 循环。我甚至不知道这个命令为什么会存在于 SQL 中，它太糟糕了。我想可能有一些极端的边缘情况吧。

Then we're gonna talk a little bit about how function calls are non-SARGable. `SARG` stands for search arguments. I'll get back to this in a minute.

然后我们会谈谈函数调用是如何导致查询变得**非 SARGable**（Non-Searchable Argument，即非可搜索参数，指查询条件中的表达式无法有效利用索引）。`SARG` 代表**搜索参数**（Search Arguments）。我稍后会回到这个话题。

### 案例分析：重构触发器

My first example was a trigger. Not that trigger. It was in a trigger. This is the trigger. Don't read this, that'll take too long.

我的第一个例子是一个**触发器**（trigger）。不是那个触发器。是在一个触发器里面。这就是那个触发器。别读它，太长了。

But this was the trigger I kind of modified so it's in AdventureWorks. This isn't actually the production code because they wouldn't let me show that. And what this was designed to do was if I have a special offer, I want to put a special offer into my database. And there were multiple ways that it could get into the database, either through the UI, through a web service, and there was one other way it could get in. So they decided the best way to make sure that there was data integrity was to put a trigger on it. And what this trigger was designed to do was to make sure that the dates don't overlap on the special offers.

不过，这是我修改过的触发器，以便在 AdventureWorks 数据库中使用。这不是实际的生产代码，因为他们不让我展示。这个触发器的设计目的是，如果我有一个特价活动，我想把它放进我的数据库。数据有多种方式可以进入数据库，可以通过 UI，通过 Web 服务，还有另一种方式。所以他们决定，确保**数据完整性**（data integrity）的最好方法就是给它加上一个触发器。这个触发器旨在确保特价活动的日期不会重叠。

And here's the cursor. And what it cursored over was what was inserted. The `inserted` is in SQL; in a trigger, `inserted` is what you are sending in. And in testing, this actually performed perfectly well. When they were going through the UI, the UI restricted them to putting in one entry at a time. What only has to loop once.

这里就是那个游标。它遍历的是被插入的数据。`inserted` 是 SQL 中的一个特殊表；在触发器里，`inserted` 代表你正要插入的数据。在测试中，这个触发器表现得非常好。当他们通过 UI 操作时，UI 限制他们一次只能输入一条记录。所以它只需要循环一次。

The problem was when we did performance testing on this, and we were inserting 25,000, it took a little longer. And then it goes and it goes up against the special offer table and checks it. I looked at this statement and I said, "Wait a second. All this is doing is looking at what the cursor is looking at, putting it into a couple of variables, and then comparing them." And I thought if you just compare what's in the `inserted` table directly, as opposed to each individual one, you're still going to get the error because this was an all-or-nothing trigger. It either inserted all 10,000 or it inserted none of them and gave you back an error message. It didn't insert a few of them and then the error ones didn't get inserted.

问题出在我们对此进行性能测试时，当我们插入25000条记录时，它花费的时间就长了一些。然后它会去查询特价活动表并进行检查。我看着这个语句，心想：“等一下。它所做的不过是查看游标当前指向的数据，把它们存入几个变量，然后进行比较。” 我觉得，如果你直接比较 `inserted` 表中的所有数据，而不是逐一比较，你仍然会得到错误，因为这是一个“要么全部成功，要么全部失败”的触发器。它要么插入全部10000条记录，要么一条也不插入并返回错误信息。它不会只插入一部分，然后报错。

So I took this out. This is actually the completely rewritten trigger. That's the whole thing. And I just rewrote it to that. In fact, I even put the error message right into the `SELECT` statement. Now that is a little bit more complex looking for a single statement, but it does the exact same thing and it kicks out the errors.

所以我把它移除了。这实际上是完全重写后的触发器。这就是全部内容。我把它重写成了这样。事实上，我甚至把错误信息直接放进了 `SELECT` 语句中。虽然这个单一语句看起来要复杂一些，但它完成了完全相同的事情，并且能抛出错误。

And the performance gain wasn't so much in seconds. The previous trigger with a 25,000 record insert took two and a half seconds to run. That's not too bad. This one takes milliseconds. But two and a half seconds maybe was acceptable. The problem was that it did three and a half million logical reads and spiked the CPU to 100% for those two and a half seconds.

性能提升并不仅仅体现在秒数上。之前的触发器在插入25000条记录时需要花费两秒半的时间。这听起来还不算太糟。而新版本只需要几毫秒。但两秒半或许是可以接受的。问题在于，它执行了三百万次**逻辑读取**（logical reads），并且在这两秒半内将 **CPU** 使用率推高到了100%。

This one doesn't. This one, the CPU hardly went up. I think it was 300 logical reads or something like that for that insert. And again, spiking the CPU for two and a half seconds may be not bad, but it depends on how many clients are connecting to that database at that particular two and a half seconds. You can start to back things up quite a bit.

而这个新版本不会。它的 CPU 几乎没有波动。我记得那次插入大概只有300次逻辑读取。再次强调，将 CPU 推高两秒半也许不算坏事，但这取决于在那特定的两秒半内有多少客户端连接到数据库。这可能会导致请求大量积压。

So you can see the before and after here. So it's a lot shorter code, I guess it's just got a more complicated statement, but it ran much better.

所以你可以看到前后的对比。代码短了很多，虽然语句更复杂了，但运行效果要好得多。

### 正确使用游标

I was talking about cursors. The biggest problem I have seen with cursors is that people just declare them. A cursor is a loop, allows you to loop. Is that people define them with the defaults. And most people don't even realize this, that with a cursor, you have your data set, you have your `SELECT` from your cursor. If I go back to the cursor here, you can see it does a `SELECT` on description, discount, and so on and so forth.

我刚才在谈论游标。我见过关于游标最大的问题是人们只是简单地声明它们。游标就是一个循环，允许你进行遍历。问题是人们用默认设置来定义它们。大多数人甚至没意识到，对于游标，你有你的数据集，你有你的 `SELECT` 语句。如果我回到这里的游标定义，你可以看到它对描述、折扣等字段进行了 `SELECT`。

You can actually see that this cursor here is declared a default. And one of the things as a default cursor is that I can delete from the `inserted` table inside the cursor, and the next time it iterates, it'll pick up those changes when it's defined by default. Also, in a cursor, you generally see a `FETCH NEXT`. You can also `FETCH PREVIOUS` in a default cursor.

你其实可以看到这个游标是使用默认方式声明的。默认游标的一个特性是，我可以在游标内部从 `inserted` 表中删除数据，当下一次迭代时，它会感知到这些变化。此外，在游标中，你通常会看到 `FETCH NEXT`。在默认游标中，你也可以使用 `FETCH PREVIOUS`。

However, if you're not doing either of those two things, which most cursors don't—most are just looping forward and they don't care whether or not the cursor is updated—`STATIC`, `FAST_FORWARD`. `STATIC` makes a copy of the data you're using in memory, and it will run through that. If you update the table your cursor is on, it doesn't care, it's not gonna pick up that change. `FORWARD_ONLY` means you can't fetch previous. There's also another keyword called `FAST_FORWARD`. `FAST_FORWARD` does allow updating, but it also goes forward. Sometimes `FAST_FORWARD` is a few milliseconds faster than `STATIC FAST_FORWARD`, depends on the situation. I can't really tell you what that situation is because I've seen it go either way. So in this case, that's the "it depends" kind of thing of go one way or the other, just try it both ways. But if you're going to use a cursor, please don't have it as the default.

然而，如果你不打算做这两件事——大多数游标也确实不做，它们只是向前循环，不关心游标所基于的数据集是否被更新——那么你应该使用 `STATIC` 或 `FAST_FORWARD`。`STATIC` 会在内存中创建一份数据的副本，并在其上运行。如果你更新了游标所在的表，它不会关心，也不会感知到变化。`FORWARD_ONLY` 意味着你不能向后取数据。还有一个关键词叫做 `FAST_FORWARD`。`FAST_FORWARD` 确实允许更新，但它也只能向前移动。有时 `FAST_FORWARD` 会比 `STATIC FAST_FORWARD` 快几毫秒，这取决于具体情况。我无法确切告诉你是什么情况，因为我见过两种结果。所以在这种情况下，这就是那种“视情况而定”的事情，两种方式都试试看。但如果你要使用游标，请不要使用默认设置。

Even define that it's updatable or something like that. Don't leave cursors naked.

至少要定义它是否可更新之类的。不要让你的游标“裸奔”。

## 理解并修复非 SARGable 查询

Going on to SARGability. SARG stands for Search Arguments, and again, DBAs throw out the word SARG because they like their acronyms as much as everybody else.

接下来说说 **SARGability**。SARG 代表**搜索参数**（Search Arguments），DBA 们喜欢用 SARG 这个词，因为他们和其他人一样喜欢用缩写。

And one of the things about functions being in the `WHERE` clause, especially, sometimes in the `ORDER BY` clause, they cause it so it doesn't know what index to use. And you want it to pick the best plan. And one of the easiest ways to fix poor performance is to see whether or not it's using indexes properly.

`WHERE` 子句中，有时甚至是 `ORDER BY` 子句中使用函数，会导致查询优化器不知道该使用哪个**索引**（index：一种数据库对象，可以加快数据检索速度）。而你希望它能选择最佳的执行计划。修复性能不佳问题最简单的方法之一就是检查索引是否被正确使用。

So this statement comes right out of the AdventureWorks database, which is the demo database if people don't know. And what it's trying to do is it wants to get either the ship date or order date that's between June 24th, 2001 and June 25th, 2001. Actually a very finite data set. However, the problem is that function `CAST`, `CONVERT`, `ISNULL`, all of that causes it not to know how to use an index properly.

这个语句直接来自 AdventureWorks 数据库，这是一个演示数据库。它试图获取发货日期或订单日期在2001年6月24日到2001年6月25日之间的数据。实际上这是一个非常有限的数据集。然而，问题在于 `CAST`、`CONVERT`、`ISNULL` 这些函数导致它无法正确使用索引。

So you change it to something like this. Does the exact same thing. `ShipDate` between the two dates, or the `ShipDate` is null and the `OrderDate` is between those two times.

所以你把它改成这样。它做的是完全相同的事情：`ShipDate` 在两个日期之间，或者 `ShipDate` 为空且 `OrderDate` 在那两个时间之间。

So in this case, I actually have the demo for this one. If I were to run this and I have, I don't know if you can see it, it's probably big enough, `SET STATISTICS IO, TIME ON`. So when I run this, it produces the same data sets. And in all honesty, the time is not that different between the two. But what I want to direct your attention to is the fact that this one does 104 logical reads and this one does four. That's not a huge difference on this data set, but if I perhaps had more than, I think this has 32,000 orders in it, if this had three and a half million or 25 million or a hundred million, that number on the top is gonna get a lot higher. The number on the bottom is not gonna get that much higher. And also you can see the execution time. The second one actually executed in zero milliseconds and the first one was 276. So again, not a ton of time, but again, the top one took CPU time, the bottom one didn't.

在这种情况下，我其实有一个演示。如果我运行它，并且我开启了 `SET STATISTICS IO, TIME ON`。当我运行这个查询时，它会产生相同的数据集。老实说，两者之间的时间差异并不大。但我希望你们注意的是，第一个查询执行了104次逻辑读取，而第二个只执行了4次。在这个数据集上差异不大，但如果我有超过，我想这里有32000个订单，如果我有三百万、两千五百万或一亿个订单，那么上面那个数字会变得非常大。而下面那个数字不会增长那么多。你也可以看到执行时间。第二个实际上在0毫秒内执行完毕，而第一个是276毫秒。再次强调，时间不算长，但上面的查询消耗了 CPU 时间，而下面的没有。

## 深入 SQL 术语：索引

Let's talk about some SQL terminology. I've been throwing out indexes. When you're talking about an index, you'll see these are the general index terminologies. Now I'm using SQL Server, Microsoft SQL Server terminology here. I do have a quick slide on MySQL because the terminology is similar. You're gonna see some of the same stuff, they just have different words for it. All this stuff still exists in MySQL, Oracle, Postgres, not any of the NoSQLs. That's why they're called NoSQL. So clustered index, clustered index scan, and so on.

我们来谈谈一些 SQL 术语。我一直在提索引。当谈到索引时，你会看到这些是通用的索引术语。我现在用的是 SQL Server，也就是微软 SQL Server 的术语。我也有一个关于 MySQL 的快速幻灯片，因为术语是相似的。你会看到一些同样的东西，只是叫法不同。所有这些东西在 MySQL、Oracle、Postgres 中都存在，但在任何 NoSQL 数据库中都不存在。这就是为什么它们叫 NoSQL。所以，有**聚集索引**（clustered index）、聚集索引扫描等等。

So let's talk about clustered index seek and scan. A clustered index scan means that it went on the clustered index. The clustered index is a single index on a table, and it's how the table is stored on the disk. It is the exact order that it is put on the disk. Matters more if you're using magnetic disks versus flash drives, but still, it knows exactly the order and they're right in line with each other, right across the line. A **clustered index seek** means I'm going right to what I need, pulling it back. Clustered index seek is the second fastest thing you can use other than an index seek where it doesn't do a key lookup.

我们来谈谈**聚集索引查找**（clustered index seek）和**聚集索引扫描**（clustered index scan）。聚集索引扫描意味着它遍历了整个聚集索引。聚集索引是表上唯一的索引，它决定了表在磁盘上的物理存储顺序。这正是数据在磁盘上存放的精确顺序。如果你用的是磁性磁盘而非闪存盘，这一点尤为重要，但即便如此，它也精确地知道顺序，数据是线性排列的。而聚集索引查找意味着我直接定位到我需要的数据并取回。聚集索引查找是你能使用的第二快的方式，仅次于不需要进行**键查找**（key lookup）的索引查找。

I mean, you can see the difference between these two. The top one says it took 99% and the bottom one only took 1%. Obviously, I'm throwing back one zip code, it's a lot faster than pulling them all back. But seeks are always faster than scans.

我的意思是，你可以看到这两者之间的区别。上面那个占用了99%的成本，而下面那个只占了1%。很明显，我只返回一个邮政编码，这比返回所有邮政编码要快得多。但是，**查找**（seeks）总是比**扫描**（scans）快。

We're talking about index seeks versus index scans. It's very similar. The index scan goes through the entire index, has to go through the entire B-tree, and index seek goes, "I'm going right there," and it finds it. Now in this case, I have an index on state and I'm only pulling back state. If I needed to pull back something else other than state that's not in the index, what you end up having is a key lookup.

我们正在讨论**索引查找**（index seek）与**索引扫描**（index scan）。它们非常相似。索引扫描会遍历整个索引，必须遍历整个B树，而索引查找则是直接说“我就去那里”，然后找到它。现在，在这种情况下，我在 state 字段上有一个索引，并且我只返回 state。如果我需要返回除 state 之外的不在索引中的其他东西，你最终会得到一个键查找。

In this case, I'm going to the person table where last name equals my last name and what I'm pulling back are all the records. So I do an index seek to find my record, but then I have to go to back to the clustered index to give me all the other fields. Now in SQL Server 2005 they introduced `INCLUDE`s, which is a way you can include extra fields that are not keys on an index. That lets you escape this key lookup. The problem is you can only put so many `INCLUDE`s before your index gets a bit big.

在这个例子中，我查询 person 表，条件是姓氏等于我的姓氏，然后我取回所有记录。所以我执行了一次索引查找来找到我的记录，但之后我必须回到聚集索引去获取所有其他字段。在 SQL Server 2005 中，他们引入了 `INCLUDE` 子句，这是一种可以在索引中包含非键字段的方法。这可以让你避免键查找。问题是，你的索引会随着 `INCLUDE` 字段的增多而变得很大。

And you have to be careful about indexes. Not only do they take up space, but they slow down inserts and updates. So you have to be careful with that. In this case, I'm doing a `SELECT *`, so the key lookup is a little bit more encumbered.

你必须小心使用索引。它们不仅占用空间，还会减慢插入和更新操作。所以你必须小心处理。在这个例子中，我做的是 `SELECT *`，所以键查找的负担更重一些。

So the last one I'm going to talk about is **table scan**. You should never see a table scan. There is rarely a reason not to have a clustered index on a table. I've heard a couple of people say, "Well, I have this table and the primary key is a GUID, so I can't put a clustered index on that," which is true. You don't want to put a clustered index on a GUID. But you should still just put an identity integer field and just cluster an index on that. A clustered index makes inserts faster, updates faster, deletes faster, selects faster, because it just does, it orders the data.

最后我要谈的是**全表扫描**（table scan）。你应该永远都不想看到全表扫描。很少有理由不在一个表上创建聚集索引。我听过一些人说：“嗯，我这个表的主键是 **GUID**（全局唯一标识符），所以我不能在上面创建聚集索引，” 这话没错。你不想在 GUID 上创建聚集索引。但你仍然应该加一个自增整数（identity）字段，并在此之上创建聚集索引。聚集索引让插入、更新、删除、查询都更快，因为它对数据进行了排序。

When you have a table without a clustered index, instead of having something that knows where it's putting it on the disk, it puts it in the **heap**. So it's called a heap. And so it'll just grab disk space wherever it can instead of being in a nice straight line. And then it'll put little forwarders and tell you, "Oh, go over here, then go over here." Now in some cases, if you create the entire table at one time, maybe it is ordered, but if you're doing inserts into this table often, it's gonna be scattered all over your disk, not in one nice spot. And again, I guess with flash drives that doesn't matter as much, but you're still not gonna get any performance out of a table scan. All you need to do is just put a clustered index on there.

当你有一个没有聚集索引的表时，系统不是把它放在磁盘上一个有序的位置，而是把它放在**堆**（heap）中。所以它被称为堆。它会随意抓取任何可用的磁盘空间，而不是整齐地排成一条直线。然后它会放置一些小小的转发指针，告诉你：“哦，去这边，再去那边。” 在某些情况下，如果你一次性创建了整个表，它可能是有序的，但如果你频繁地向这个表插入数据，数据就会散布在磁盘的各个角落，而不是在一个整洁的位置。再次强调，对于闪存盘来说，这可能没那么重要，但你仍然无法从全表扫描中获得任何性能提升。你所需要做的就是在上面加一个聚集索引。

## 理解连接 (Joins)

Now I have this in SQL Server, they define logical operations and physical operations. A lot of the ones down on the bottom, `MERGE JOIN`, `HASH MATCH`, `NESTED LOOPS`, those can all be used with `INNER JOIN`s, `RIGHT OUTER JOIN`s, `LEFT OUTER JOIN`s, or the anti-semi joins. So `INNER JOIN`s, most of you guys should know how to do that if you know how to write SQL, just joining two tables. You've seen the Venn diagram or something like that. And we'll talk about the different ways that the inner joins work. You can actually see two of them here. One's a `HASH MATCH`, one's a `MERGE JOIN`. We'll talk about that in a second.

在 SQL Server 中，他们定义了逻辑操作和物理操作。下面列出的很多，比如**合并连接**（MERGE JOIN）、**哈希匹配**（HASH MATCH）、**嵌套循环**（NESTED LOOPS），这些都可以与**内连接**（INNER JOIN）、**右外连接**（RIGHT OUTER JOIN）、**左外连接**（LEFT OUTER JOIN）或反半连接一起使用。对于内连接，如果你们会写 SQL，应该都知道怎么做，就是连接两个表。你们可能见过文氏图之类的东西。我们会讨论内连接的不同工作方式。你在这里其实可以看到两种，一个是哈希匹配，一个是合并连接。我们稍后会讨论。

And then your left or right outer joins. Now I don't know if you guys can see this, but SQL, the optimizer has actually figured out that the way you wrote this is not efficient. It's actually flipped it around. It starts with the `BusinessEntityAddress` and then it does a join over to the `Person` table with a left outer join. It's doing the second part first as opposed to the first part because it determined it's going to have fewer records it has to join. So SQL's kind of smart, tries to figure that out.

然后是你的左外连接或右外连接。我不知道你们是否能看清，但 SQL 的优化器实际上已经发现你写的这种方式效率不高。它实际上把它翻转了过来。它从 `BusinessEntityAddress` 表开始，然后用左外连接到 `Person` 表。它先执行了第二部分，而不是第一部分，因为它判断这样需要连接的记录会更少。所以 SQL 还是挺聪明的，会试图找出最优解。

So `MERGE JOIN`. Merge join is probably the best join you can have. You see a lots of merge joins, it's probably good for your performance. Merge joins join two ordered sets of data and just goes, "Okay, where's this one fit in here, here, here, here," and just goes down the line joining them all. But it only happens if they're ordered. If you don't have an ordered set, it's gonna have to sort first before it does a merge join, and that's not always fast.

**合并连接**（MERGE JOIN）。合并连接可能是你能拥有的最好的连接类型。如果你看到很多合并连接，那对你的性能来说通常是件好事。合并连接连接的是两个有序的数据集，它会说：“好的，这个放在这里，那个放在那里，” 然后就一路连接下去。但这只有在数据是有序的情况下才会发生。如果你没有一个有序的集合，它在执行合并连接之前就必须先进行排序，而排序并不总是快的。

This is what happens. I actually forced this to do a sort before doing the merge join, and you can see the one sort operation up there was 44% of this procedure, which is not great. That was significantly bad. And in fact, it even parallelized it, it multi-threaded in order to go faster because it just did not like that plan at all.

这就是发生的情况。我实际上强制它在执行合并连接之前进行排序，你可以看到上面那个排序操作占了整个过程的44%，这非常糟糕。这相当糟糕。事实上，它甚至并行化了操作，也就是使用了多线程来加速，因为它完全不喜欢那个执行计划。

So the next one is `HASH MATCH`. Hash match is it creates a hash of the first, the one on whatever is coming in on the top, creates a hash of that and then comes in with the bottom one, goes, "Okay, find me where it is in the hash." Hash match, not bad. It works, it's pretty fast.

下一个是**哈希匹配**（HASH MATCH）。哈希匹配会为第一个（上面输入的那个）数据集创建一个**哈希表**（hash table），然后用第二个数据集去匹配，说：“好的，在哈希表里找到我的位置。” 哈希匹配还不错。它能工作，而且速度挺快。

The last one is kind of the slowest one. This is **nested loop**. And again, as I said, looping is not something SQL wants to do. And in this case, it loops through the top one and then loops through the inside one to see which one matches. And then it goes to the next one and keeps going. And you can tell that probably takes a really long time. Not the best way to do it. Sometimes the only way to do it though.

最后一个是速度最慢的。这就是**嵌套循环**（NESTED LOOP）。再次强调，循环不是 SQL 喜欢做的事情。在这种情况下，它会遍历外部的表，然后对每一个外部表的记录，再遍历内部的表来寻找匹配项。然后它移到下一个记录，继续这个过程。你可以想象这可能需要很长的时间。不是最好的方法，但有时是唯一的方法。

Anti-semi joins, I just thought I'd put these up here because you'll see them if you look at the query plans. This is usually when you use an `EXISTS` or `WHERE NOT EXISTS`. It doesn't care about getting all of the results back, it just goes, "Find me the first one." In the case of a `NOT EXISTS`, it kind of has to go through a little bit more than a semi-join. These can also be merge, inner loop, or hash matched as well.

**反半连接**（Anti-semi joins），我把它们放在这里是因为如果你查看查询计划，你会看到它们。这通常发生在你使用 `EXISTS` 或 `WHERE NOT EXISTS` 的时候。它不关心获取所有结果，它只是说：“给我找到第一个就行。” 对于 `NOT EXISTS`，它需要做的工作比半连接要多一点。这些连接也可以是合并连接、嵌套循环或哈希匹配。

I don't know if anybody knows you can do this, but I've actually put the word `MERGE` in between `INNER`. I said `INNER MERGE JOIN`, `INNER JOIN`, `INNER LOOP JOIN`. Anyone want to guess which one's gonna be the fastest? I can tell you it's not the last one. The first two have returned already in two seconds. Now I'm probably gonna wait the next two minutes for the last one to come back. I told you loops are bad.

我不知道是否有人知道你可以这么做，但我实际上在 `INNER` 后面加上了 `MERGE` 这个词。我写了 `INNER MERGE JOIN`, `INNER JOIN`, `INNER LOOP JOIN`。有人想猜猜哪个最快吗？我可以告诉你肯定不是最后一个。前两个已经在两秒内返回了结果。现在我可能要等接下来的两分钟，等最后一个返回。我告诉过你们循环是不好的。

The SQL optimizer since SQL 2000 will just change it to a join. It understands the `WHERE` equals if you just put the commas as opposed to using the inner join syntax. You can't do cool things like this though if you did it that way.

从 SQL 2000 开始，SQL 优化器会自动将其转换为连接。它能理解 `WHERE` 子句中的等号条件，即使你只是用逗号分隔表名而不是使用 `INNER JOIN` 语法。但如果你用那种老式写法，就无法做像这样酷的事情了。

## 分析执行计划

Let's talk about the plans a little bit. Now again, this is terminology that's kind of specific to Microsoft SQL Server. I did look up the MySQL stuff, they've got some similar ones, but let's just go on and talk about these.

我们来谈谈**执行计划**（execution plans）。同样，这里的术语在某种程度上是微软 SQL Server 特有的。我查过 MySQL 的资料，它们有一些类似的东西，但我们还是继续讨论这些吧。

So one of the things, and this is I'm showing the actual plan here as opposed to the estimated plan. So I have both things. You can turn that feature on if you're in Management Studio or if you use SQL Sentry Plan Explorer, you'll see this. And you can see here the estimated number of rows and the actual number of rows actually don't match. That's not generally good. They're not off by a lot. I've seen the estimated number of rows one time come back at six and a half billion, which the table didn't even have that many records in it, and the actual number of rows was one. Trust me, we fixed that statement. That was crazy. It was doing a cross-server join or something and it just, it just blew its mind.

其中一件事，我这里展示的是**实际执行计划**（actual plan），而不是**预估执行计划**（estimated plan）。你可以同时看到两者。如果你在 Management Studio 或者使用 SQL Sentry Plan Explorer，就可以打开这个功能。你可以看到，预估的行数和实际的行数并不匹配。这通常不是个好现象。虽然差距不大。我曾经见过一次预估行数是65亿，而那个表里根本没有那么多记录，实际行数是1。相信我，我们修复了那个语句。那太疯狂了。它当时在做一个跨服务器连接之类的操作，简直让系统崩溃了。

So you kind of want those to go together. You want those to match. What this usually means is that it didn't know, it's on the index, it thought, "Hey, there are more rows than that I think are going to be returned than the actual number of rows." Sometimes that's your statistics. SQL keeps a set of statistics on all the indexes and if your statistics are out of date, then this can happen. Statistics, they're supposed to auto-update on their own. They don't. If your DBAs are doing their job, they should be refreshing them every night. I don't know if they are. I did when I was a DBA.

所以你希望这两者是一致的。你希望它们匹配。这通常意味着它对索引的认知有误，它认为“嘿，将要返回的行数比实际行数要多”。有时这是你的**统计信息**（statistics）的问题。SQL 会为所有索引保留一套统计信息，如果你的统计信息过时了，就会发生这种情况。统计信息本应自动更新，但它们不会。如果你的 DBA 在尽职尽责，他们应该每晚都刷新它们。我不知道他们是否这么做。我当 DBA 的时候是这么做的。

Estimated I/O cost. This one is especially true if you're gonna use a lot of temporary tables or you're using a lot of big data sets. You want to make sure that it's not spooling to disk that often because a lot of times you'll select this big chunk of data that you're gonna join to this other big chunk of data, and in order for SQL to do it correctly, it'll actually drop that to the disk, even if you didn't say, "I want to create a temporary table" or you didn't tell it that. It'll put it in one in your tempdb by itself. And so you want to pay attention to the I/O cost.

**预估 I/O 成本**（Estimated I/O cost）。如果你要使用大量临时表或者处理大量数据集，这一点尤其重要。你要确保它不会频繁地将数据溢出到磁盘，因为很多时候你会选择一个大数据块去和另一个大数据块连接，为了正确执行，SQL 实际上会把数据写入磁盘，即使你没有说“我要创建一个临时表”。它会自己把它放在你的 tempdb 里。所以你要关注 I/O 成本。

CPU cost. I've already talked about CPU cost. You want to keep that down. Again, this can go up in the hundreds.

**CPU 成本**（CPU cost）。我已经谈过 CPU 成本了。你希望能把它降下来。同样，这个数字可能会高达数百。

Estimated subtree cost. This is just, this is kind of your, how this statement played within the current execution. It, if this is a four and another one's a five in a different connection string, it doesn't mean that this one is necessarily better than the other one. But if you are comparing similar ones, it can help you out. It is something to look at. I've never really figured out the metric that subtree cost is calculated on.

**预估子树成本**（Estimated subtree cost）。这只是表示这个语句在当前执行中的表现。如果这个是4，而另一个在不同的连接字符串中是5，这并不意味着这个就一定比那个好。但如果你在比较相似的查询，它可以帮助你。这是值得一看的东西。我从来没有真正弄清楚子树成本是基于什么指标计算的。

Estimated number of executions versus number of executions. This actually has to do with when it does a merge join or a hash or a nested loop. It has to do with the number of times it had to do it. In this case, it's a little odd because it had to do it four times, which meant it actually, it checked it again four times.

**预估执行次数**与**实际执行次数**。这实际上与它执行合并连接、哈希连接或嵌套循环有关。它关系到它必须执行的次数。在这个例子中，有点奇怪，因为它必须执行四次，这意味着它实际上重复检查了四次。

Actual rebinds and rewinds. When it's doing a join is how many times when it was going down through the data it started over for whatever reason. Now sometimes that's because the data changed while you were doing the join. So it had to rewind. Other times it just, for whatever reason, saw something and said, "I have to start over." So four is not a bad number, but it is a number to keep in mind if this goes up into the hundreds, thousands, then something's going on.

**实际重绑定**（rebinds）和**重绕**（rewinds）。当它在进行连接时，这是指在遍历数据过程中由于某种原因重新开始的次数。有时这是因为在你进行连接时数据发生了变化，所以它必须重绕。其他时候，它可能只是因为某种原因看到了什么，然后决定“我必须重新开始”。所以，4 不是一个坏数字，但如果这个数字上升到几百、几千，那么就需要注意了，肯定有问题。

And then when you're looking down at the bottom, looking at the `WHERE` and the `output list`, these could be helpful just for figuring out what that particular, if you're looking at this and you see big numbers, you want to know exactly what operation it's doing there.

然后当你往下看，看 `WHERE` 子句和**输出列表**（output list），这些信息可以帮助你弄清楚，如果你看到很大的数字，你想确切知道它在那个特定操作中做了什么。

### MySQL 中的可视化解释

I was talking about MySQL. This is visual explain in MySQL Workbench. If anybody's using MySQL, MySQL Workbench is from the same people that bring you MySQL. They put this in. This is visual explain. You can also do `EXPLAIN` or `EXPLAIN EXTENDED` to get similar information, but you can see it's actually color-coded, which is kind of nice. SQL Server doesn't color code. There's a free application you can get called Plan Explorer that does color code. But you will see that even MySQL says "full table scan". That's that one on the left, it's red. It's bad. See, I told you full table scans are bad. They agree with me.

我刚才提到了 MySQL。这是 MySQL Workbench 中的**可视化解释**（visual explain）。如果有人在用 MySQL，MySQL Workbench 和 MySQL 是同一家公司出品的。他们加入了这个功能。这就是可视化解释。你也可以用 `EXPLAIN` 或 `EXPLAIN EXTENDED` 来获取类似信息，但你可以看到它实际上是彩色的，这很好。SQL Server 不会用颜色标记。有一个免费应用叫 Plan Explorer 可以做到这一点。但你会看到，即使是 MySQL 也显示了“全表扫描”。就是左边那个，红色的。它很糟糕。看吧，我告诉过你们全表扫描不好。他们也同意我的看法。

And then it has your key lookups and some of those other things. And it likes to do nested loops more than merges. But again, this is a tool you can use if you're in MySQL to get similar information to optimize your queries.

然后它有你的键查找和其他一些东西。而且它似乎更喜欢用嵌套循环而不是合并连接。但同样，如果你使用 MySQL，这是一个可以用来获取类似信息以优化查询的工具。

## 面向结果 vs. 面向过程的思维

The last thing I want to talk about is results-oriented thinking versus process-oriented thinking. And I got this from, I saw this example most often when people play poker. And it has to do with if I have pocket queens in Texas Hold'em, and I'm like, "I'm calling on this." Pocket queens, flop comes down, I get nothing. I lose. That guy over there had pocket kings. Does that mean that pocket queens is a bad play because I lost? In poker, no. You stay in with pocket queens. Come on. Pocket queens, pocket kings, pocket aces, you stay in with those.

最后我想谈的是**面向结果的思维**（results-oriented thinking）与**面向过程的思维**（process-oriented thinking）。我从人们玩扑克的例子中得到了这个想法。这关系到，如果我在德州扑克中拿到一对Q，我会想：“我要跟注。” 翻牌下来，我什么也没得到，我输了。那边那个人拿到了一对K。这是否意味着因为我输了，所以拿一对Q就是个坏决策？在扑克里，不是。你拿到一对Q就应该坚持下去。拜托。一对Q，一对K，一对A，你都应该坚持。

However, and they always talked about doing process-oriented thinking. Play the best game you can play, do the best thing. And in procedural programming in Java or C#, in a lot of cases, there's somebody code reviewing and saying, "No, the best way to do this is this, or in this way we do it this way." SQL, because you're not telling it how to do it exactly, you kind of actually have to switch to being results-oriented.

然而，他们总是谈论要进行面向过程的思考。打出你能打的最好的牌，做最好的事。在 Java 或 C# 的过程式编程中，很多情况下会有人进行代码审查并说：“不，最好的方法是这样，或者我们用这种方式来做。” 而对于 SQL，因为你不是在确切地告诉它如何去做，你实际上必须转向面向结果的思维。

Instead of going, "I see a problem," you have to go, "Is it actually a real problem?" If you're not seeing a performance issue when you run the code, maybe you shouldn't mess with it. Now you have to make sure you test it at scale. Again, like I said earlier, if you test it against a thousand records and your production data has 20 million, you need 20 million records to test it against to make sure that the performance is going to be where you think it's going to be.

你不能只是说“我看到了一个问题”，你必须去问：“这真的是一个问题吗？” 如果你在运行代码时没有看到性能问题，也许你就不应该去动它。当然，你必须确保你在大规模数据上进行了测试。就像我之前说的，如果你在一千条记录上测试，而你的生产数据有两千万条，你就需要用两千万条记录来测试，以确保性能会达到你的预期。

For example, this was something... this is an interesting statement I ran against. This one I saw first in SQL 2000. And essentially what this does is it does a distance calculator. It does the arc tangent, cotangent thing for the curvature of the earth between two latitudes and longitudes. I don't know if anybody's ever written that code. Okay, it's not as fun as it sounds.

举个例子，这是一个我遇到的有趣的语句。我第一次看到它是在 SQL 2000 中。它本质上是一个距离计算器。它计算地球上两个经纬度点之间的曲率，用到了反正切、余切之类的东西。我不知道是否有人写过那样的代码。好吧，它并不像听起来那么有趣。

And there was this function that was doing this. And in fact, this code right here iterates over all of the locations and does that distance calculator. RBAR, row by agonizing row. Not great. So I looked at this and I was like, "Okay, I had to refactor this. This is RBAR."

当时有一个函数在做这件事。实际上，这里的代码遍历了所有的位置，并执行那个距离计算。RBAR，逐行处理，痛苦至极。非常糟糕。所以我看着它，心想：“好吧，我得重构这个。这是RBAR。”

So first thing I want to do is I said, "Maybe I'll drop it into a temporary table." Maybe that will make it better. It didn't really. And then I was like, "Okay, we're using SQL 2008 now. What if I use a geography data type?" And I do a distance and the spatial locations and all this kind of stuff. That actually did go faster. But one of the things I found when I was doing the testing is what I really needed to do is I forgot to put an index on zip code on the locations table. That's all I actually needed to fix that.

所以我要做的第一件事是，我说：“也许我把它放到一个临时表里。” 也许这能让它变得更好。但并没有。然后我想：“好吧，我们现在用的是 SQL 2008。如果我使用地理数据类型呢？” 然后我计算距离和空间位置等等。那确实快了一些。但我在测试时发现，我真正需要做的是，我忘了在 locations 表的 zip code 字段上加索引。这其实就是修复它所需要的全部。

And none of these produced better results. They all ran in like 80 milliseconds. So I was kind of like, "Okay." It kept running, it kept iterating, trying to get to something that worked faster. And I wasn't paying much attention to the fact that my results were showing that I wasn't getting any faster. And so I was kind of going down the wrong road. I was trying to fix the code, thinking the code was bad, when it really was an index.

这些方法都没有产生更好的结果。它们都运行在80毫秒左右。所以我当时就想：“好吧。” 我不停地运行，不停地迭代，试图找到一个更快的方法。但我没有太注意一个事实：我的结果显示我并没有变得更快。所以我有点走错了路。我试图修复代码，以为代码很糟糕，而真正的问题其实是一个索引。

Sometimes you have to listen to what the results are telling you.

有时你必须听从结果告诉你的信息。

And the other thing is I wanted to show this example here. I want to show how bad the performance was for this first one and then realized I'm running SQL 2014 and they fixed the problem with this. In fact, in SQL 2014, this runs considerably better than it did in SQL 2000. I don't know what they changed, but so I couldn't actually show you this used to take like two and a half minutes to run. And in fact, the geography one would run in sub-one second. But in SQL 2014, this one runs in 40 milliseconds and the other one runs at 80. There's a bit of a difference, and depending on how often you're gonna run it, that might matter, but not significant.

另一件事是，我想在这里展示这个例子。我想展示第一个版本的性能有多差，然后我意识到我正在运行 SQL 2014，他们已经修复了这个问题。事实上，在 SQL 2014 中，这个查询的运行速度比在 SQL 2000 中好得多。我不知道他们改变了什么，所以我无法真正向你们展示它过去需要两分半钟才能运行完。而事实上，使用地理数据类型的版本可以在一秒内运行完。但在 SQL 2014 中，这个版本运行需要40毫秒，而另一个需要80毫秒。有一点区别，取决于你运行它的频率，这可能有关系，但并不显著。

## 总结与资源分享

So we talked about all this stuff. What do you want, not how do you get it. Talking about how looping is not a SQL concept. Talked about SQL terminology. Talked about results-oriented thinking. If you have any questions, that's my contact information.

我们讨论了所有这些东西。要关注你想要什么，而不是如何得到它。讨论了循环不是 SQL 的概念。谈论了 SQL 术语。谈论了面向结果的思维。如果你们有任何问题，那是我的联系方式。

I've got a couple SQL resources up there. SQL Sentry Plan Explorer is a free application that you can grab. It makes the plan a little bit nicer, doesn't really give you a lot more information, kind of breaks it out a little bit more and fixes the missing index problem they had in SQL 2008.

我在这里列出了一些 SQL 资源。SQL Sentry Plan Explorer 是一个你可以下载的免费应用程序。它让执行计划看起来更美观，虽然没有提供更多信息，但它把计划分解得更细致，并且修复了 SQL 2008 中存在的缺失索引提示问题。

ApexSQL has some nice plugins for Microsoft SQL Management Studio. I really like Apex Refactor. It has something that you can just hit like Ctrl+Alt+Shift+F and it cleans your code. It doesn't make it faster, it just makes it more readable. It's actually really helpful when you grab that output out of your program that constructs the SQL and you drop it in, it's all in one line. Yeah, so I just hit that button and suddenly it's all formatted out and I can see all the `SELECT`s and `INNER JOIN`s.

ApexSQL 为 Microsoft SQL Management Studio 提供了一些很棒的插件。我特别喜欢 Apex Refactor。它有一个功能，你只需按下 Ctrl+Alt+Shift+F，它就能清理你的代码。它不会让代码变快，只是让它更具可读性。当你从程序中复制出构造的 SQL 语句时，它通常是一整行，这时这个功能就非常有用。是的，我只需按下那个按钮，突然之间所有东西都格式化好了，我可以看到所有的 `SELECT` 和 `INNER JOIN`。

On Twitter, if you're looking for SQL help, if you hit a hashtag `SQLHelp`, you'll get an answer in probably a few minutes. There's always people watching that. I can never answer a question on there faster than somebody else can. And you're gonna get people that are SQL MVPs or even some of them that passed the SQL Server Masters program.

在 Twitter 上，如果你需要 SQL 方面的帮助，使用 `#SQLHelp` 这个标签，你可能在几分钟内就会得到答案。总有人在关注这个标签。我在那里回答问题的速度永远比不上别人。而且你会得到 SQL MVP 甚至是通过了 SQL Server 大师项目的人的回答。

A couple other sites: brentozar.com, he's got a couple good scripts that'll go through, I think it's `sp_Blitz`, will go through and look at your SQL Server and show you all the crazy things that aren't set correctly in their estimation. And he's also got some great videos.

其他几个网站：brentozar.com，他有一些很好的脚本，比如 `sp_Blitz`，可以检查你的 SQL Server，并向你展示所有他们认为设置不正确的疯狂事情。他还有一些很棒的视频。

sqlskills.com is Paul Randal and Kimberly Tripp's consulting company. Paul Randal used to work for Microsoft, wrote parts of SQL Server. Kimberly Tripp is one of the best index and query tuners in the business. So that's a good site.

sqlskills.com 是 Paul Randal 和 Kimberly Tripp 的咨询公司。Paul Randal 曾在微软工作，编写了 SQL Server 的部分代码。Kimberly Tripp 是业界最好的索引和查询调优专家之一。所以那是个好网站。

blog.sqlauthority.com, that's Pinal Dave's site. He always posts like once a week some good SQL snippet. And then mssqltips.com.

blog.sqlauthority.com，那是 Pinal Dave 的网站。他每周都会发布一些好的 SQL 代码片段。然后是 mssqltips.com。

## 问答环节 (Q&A)

Questions?

有问题吗？

What tools do I use for benchmarking, for load testing? We use Visual Studio Ultimate, the Test Studio out of Visual Studio. And then we just hammer the heck out of it. And we have a database with, I think it's like 10 million rows in every table. Sometimes not as realistic, but it definitely, it kicked out that trigger. That's actually how we found that trigger problem, is that it ran through a performance test and tanked.

我用什么工具进行基准测试和负载测试？我们使用 Visual Studio Ultimate，也就是 Visual Studio 中的 Test Studio。然后我们就对它进行疯狂的压力测试。我们有一个数据库，每个表里大概都有一千万行。有时这不那么现实，但它确实把那个触发器的问题暴露出来了。我们就是这样发现那个触发器问题的，它在性能测试中崩溃了。

Is the loop still running? That's a good question. No, it finished. Two and a half minutes. Yeah, it's telling me... Oh, I forgot to turn on the query plan. Wow. But yeah, it returned. The last loop, it took two minutes and 25 seconds.

那个循环还在跑吗？好问题。不，它结束了。两分半钟。是的，它告诉我……哦，我忘了打开查询计划。哇。但是是的，它返回了。最后一个循环，花了2分25秒。

Sometimes I actually just use this as a benchmark. Just run the query here and then run it again. But that doesn't give you the load like you were talking about. So that requires the performance environment.

有时候我其实就用这个作为基准测试。就在这里运行一次查询，然后再运行一次。但这无法提供你所说的那种负载。所以那需要一个性能测试环境。

He asked if I ever see different results because of caching. A lot of times if you run the same query again, you'll see that there are ways in SQL Server. One of the things that I used to run is `DBCC FREEPROCCACHE`, I think it's called. There is a one... `DBCC DROPCLEANBUFFERS`. `FREEPROCCACHE` also does it, I think, will actually clean the proc cache.

他问我是否曾因为缓存而看到不同的结果。很多时候，如果你再次运行相同的查询，你会看到这种情况。在 SQL Server 中有办法处理。我以前经常运行的一个命令是 `DBCC FREEPROCCACHE`。还有一个是 `DBCC DROPCLEANBUFFERS`。`FREEPROCCACHE` 应该也能清除过程缓存。

So then you can always be clean and not worry about cache because that's, you really want to do it that way when you're doing the testing. You don't want to have a cached result and think, "Ah, I made it better," when in fact you just ran it twice.

这样你就可以始终保持一个干净的环境，不用担心缓存。因为在做测试时，你真的想这样做。你不想得到一个缓存的结果，然后以为“啊，我把它改得更好了”，而实际上你只是运行了两次。

My opinion on using views? Views are fine, provided the view actually does something. The application I currently work on has views that they just used to rename the tables with. Literally, the view is a `SELECT *`. In lieu of making joins, I mean that's part of the reason that you have a view is to, you know, make it easier to do the data. Now you want to make sure that the underlying tables still have the indexes you're gonna use through the view. There is a way to make an indexed view as well in Microsoft SQL Server, though that's not always as easy as just making sure there are indexes on the underlying table. I don't mind doing that. It just puts another layer in between getting to where you need to optimize, but it's fine.

我对使用**视图**（views）的看法？视图是好的，前提是这个视图确实做了些什么。我现在工作的应用程序有一些视图，它们只是用来重命名表名。毫不夸张，那个视图就是 `SELECT *`。用来替代连接，我的意思是，这是你使用视图的部分原因，就是为了让数据操作更容易。现在，你要确保底层表仍然有你将要通过视图使用的索引。在微软 SQL Server 中，你也可以创建**索引视图**（indexed view），但这并不总是像确保底层表有索引那么简单。我不介意这样做。它只是在需要优化的地方之间增加了一个层级，但这没问题。

I haven't used Hibernate, so I don't know. Some of the stuff does apply to Oracle. I mean, you've still got the same problems with, I don't think that, I'm trying to remember what they call them, cursors or not. They still have loops and things like that that can be refactored out. I haven't worked with our Oracle guys that much where I work, but to be honest, they're shifting to SQL Server to save money.

我没用过 Hibernate，所以我不知道。有些东西确实也适用于 Oracle。我的意思是，你仍然会遇到同样的问题，我不确定，我在想他们管游标叫什么。他们仍然有循环之类的东西可以被重构。在我工作的地方，我和 Oracle 团队合作不多，但老实说，他们正在转向 SQL Server 以节省成本。

Does everyone know the situation with SQL Server can't get a good plan because it times out before it even creates the plan? That sounds like a really complicated statement you've written. I've seen ones where the plans are huge, and in that case, I'm not exactly sure how to refactor that out. Possibly breaking up the stored procedure if possible. Sometimes maybe you do have to get in smaller chunks. There's also the possibility I saw this where we were getting a bunch of deadlocks on our data warehouse. That was because we actually, and what we did is we moved the clustered index from one date to another and that solved all the problems because it was querying that more often than anything else. So sometimes you might want to look at the index usage, which indexes are actually being used. And if there is, I've seen times where there's an index seek that's always happening on this one field and it's always doing a key lookup after it does that index, and the clustered index has no seeks on it. That means you probably have the wrong clustered index.

大家都知道 SQL Server 有时因为在创建计划之前就超时而无法得到一个好的执行计划的情况吗？这听起来像你写了一个非常复杂的语句。我见过执行计划非常巨大的情况，在这种情况下，我不太确定如何重构。如果可能的话，可以尝试拆分存储过程。有时也许你确实需要分块获取数据。还有一种可能性，我见过这种情况，我们的数据仓库上出现了大量的**死锁**（deadlocks）。那是因为我们实际上，我们做的是把聚集索引从一个日期移到了另一个日期上，这就解决了所有问题，因为它查询那个字段的频率比其他任何东西都高。所以有时候你可能需要查看索引使用情况，看哪些索引被实际使用了。如果存在这种情况，我见过有一次，一个字段上总是在进行索引查找，并且在查找之后总是进行键查找，而聚集索引上没有任何查找。那可能意味着你的聚集索引选错了。