---
author: Internet of Bugs
date: '2026-02-16'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=GYfgjYVEYQ0
speaker: Internet of Bugs
tags:
  - ai-agents
  - security-vulnerabilities
  - prompt-injection
  - ai-hype
  - tech-responsibility
title: MoltBOOK事件：AI安全隐患与行业盲区的警示
summary: 本文深入剖析了名为MoltBOOK的AI社交网络及其关联的MoltBOT代理。作者指出，AI的威胁并非来自其智能水平，而是源于人类的愚蠢、对AI潜力的过度炒作以及普遍存在的安全盲区。文章揭示了MoltBOOK作为潜在命令与控制基础设施的风险，批评了行业内部分专家对安全问题的忽视，并呼吁技术人员深入理解AI代理的底层机制与安全隐患，以避免潜在的灾难。
insight: ''
draft: true
series: ''
category: ai-application
area: tech-engineering
project: []
people: []
companies_orgs:
  - OpenAI
products_models:
  - MoltBOOK
  - MoltBOT
media_books: []
status: evergreen
---
### AI的幽灵：MoltBOOK的崛起与恐慌

近期出现了一个名为 **MoltBOOK** 的新型类Reddit社交网络，其独特之处在于它专为AI设计，并且是“vibe-coded”（一种非正式、基于感觉的编码方式）的产物。这一现象的出现，恰好发生在我发布关于AI代理固有不安全性的视频之后。MoltBOOK的名字来源于“Molt”（蜕壳），暗示着某种迭代或转变，其命名本身就充满怪诞。**埃隆·马斯克**（Elon Musk）将其描述为“奇点（Singularity）的非常早期阶段”，而AI研究者**西蒙·威利森**（Simon Willison）则称其为“当下互联网上最有趣的地方”。甚至**OpenAI**的创始成员、前特斯拉AI负责人也评价其为“近期所见最不可思议的科幻式起飞（sci-fi take-off）的衍生事物”。他本人正是“vibe-coding”一词的创造者，足见其对此类现象的熟悉程度。

然而，我不得不承认，尽管我极不情愿这么说，MoltBOOK上正在发生的一切，却有力地证明了人类文明或许真的注定要走向灭亡。但这并非源于AI本身的能力或意图。所谓的“奇点”并未到来，AI的“快速起飞”也未开始，AI并未达到人类水平的智能，更不会出于任何目的而毁灭人类。我曾制作过视频，指出“如果有人建造了它，所有人都会死”这类说法，不过是分散人们对AI实际危害关注的宣传。我依然坚持这一观点，并且正在制作一个关于“超级智能（Super Intelligence）”概念多么荒谬的视频。

相反，人类可能灭亡的原因，是MoltBOOK有力地证明了，即使是那些本应更专业的、理应知道更好的专业人士，也可能因为极度的愚蠢而相信聊天机器人正在自我组织社会，甚至为其创造了宗教。这不禁让人怀疑，人类是否真的因为太过于愚蠢而无法生存。我将此称为“**虫网**”（Internet of Bugs）。我是卡尔（Carl），自20世纪80年代末以来一直是软件专业人士，一直致力于让互联网变得更少出错、更安全。但此刻，我担心这可能完全是徒劳的，因为作为物种，人类似乎不配生存。请注意，本视频中可能会出现大量“哔——”声，尽管我会尽量避免过于烦人。视频最后，我也会为技术人员提供一些建议，希望能帮助你们在看穿MoltBOOK及其背后技术社区的回应后，不至于重蹈覆辙。

<details>
<summary>Original English</summary>

So there's this new, vibe-coded Reddit-like
 social network for AIs.
 Oddly enough, I heard about this right after my
 video on the inherent insecurity of AI agents
 posted. The social network is called MoltBOOK,
 like Facebook, but for discarded lobster shells.
 I don't #$%^ing ask me. I didn't #$%^ing name
 it. Elon Musk says it's "very early stages of
 the singularity." AI researchers Simon Willison
 called it "the most interesting place on the
 internet right now. Open AI founding member and
 former Tesla head of AI." Called it "the most
 incredible sci-fi take-off adjacent thing I've
 seen recently." And he's the guy who coined the
 term "vibe-coding," so you know he's seen some
 %^&*. And I have to admit, and I hate saying
 this,
 what's happening on MoltBOOK is making a very
 strong case that humanity is actually doomed.
 Not because of the AI at all, though. The
 singularity is not happening. Fast take-off is
 not starting. AI is already not reaching human-level
 intelligence. And last but not
 least, they are not going to kill us all for
 for the sake. I've made videos before about how
 "if anyone builds it everyone dies" is such a
 load of propaganda to distract you from the
 real
 harm AI is doing, and I still stick by that.
 And I've got yet another video in the works on
 how
 bull%^&* the concept of super intelligence is,
 so subscribe if you want to see that.
 Now instead, we might be doomed because Molt
 Book is strong evidence that people,
 even professional people that should know
 better, especially if professional people
 that should #$%^ing know better are so #$%^ing
 stupid, they believe that #$%^ing chatbots
 are #$%^ing self-organizing a #$%^ing society
 and have created their own
 religion for #$%^s sake. And humans just
 might be too #$%^ing stupid to #$%^ing live.
 #$%^^^^^^^^^^^^^^^^^^^^^^^^
 This is the Internet of Bugs. My name is Carl.
 I've been a software professional since the
 late
 1980s, and I've been trying to do my part to
 make the Internet a less buggy and safer place.
 But at the moment, I fear that might be
 completely futile because humanity as a species
 seems like
 it might just be too stupid to deserve to
 survive. Fair warning, you should expect a lot
 of #$%^ing
 bleeping this #$%^ing video, although I will
 try not to let it get too annoying.
 But also, some recommendations for technical
 folks toward the end if you can make it through
 all the #$%^ing bull^&*^ that is tech community's
 response to MoltBOOK. Don't be like them for
 all
 of our sakes. In this video, I'm not going to
 talk about the poor quality of the code or the
 vulnerabilities that have been found so far.
 There are already a lot of articles and videos
 about that,
 and I'll link a bunch of them below. Instead of
 talking about what has gone wrong, or at least
 what we know of so far that's gone wrong, I'm
 going to be talking about why it was inevitable
 that things would go wrong, why this whole
 thing was a dangerous idea, and why the high
 profile AI
 professionals involved with using and promoting
 it should have known better, deserve much of the
 blame, and should be shunned the next time they
 promote the next dangerous thing. Deep breath.
</summary>
</details>

### MoltBOT：潜藏于本地的代理风险

在深入探讨MoltBOOK之前，我们必须先了解其名称的来源——**MoltBOT**。MoltBOT最初名为CLAWD Bot（CLAWD，而非Claude），因与Anthropic的Claude过于相似而被重命名。它被重命名为MoltBOT的时间恰好足以将其名字赋予MoltBOOK。但这个名字也并非一成不变，一些诈骗者抢注了相关社交媒体账号，导致它后来又变成了OpenClaw，并且在视频发布时可能已经更换了三到四次名字。这些命名上的混乱，或许是整个故事中最不愚蠢的环节了。在本次视频中，我将继续使用MoltBOT这个名称，因为它最能体现MoltBOT（聊天机器人）与MoltBOOK（社交网络）之间的关系。

MoltBOT是一个AI代理聊天机器人，它运行在用户的本地机器上，扮演着用户的角色。从用户的机器的角度来看，它几乎可以执行用户能做的任何事情。它内置了大量的技能文件（skill files），并且可以下载额外的技能。其中一些技能允许MoltBOT使用本地应用程序，例如你的密码管理器，这意味着它知道你所有的密码，并能访问你所有的账户。其他技能则允许MoltBOT以你的身份访问特定网站，如Gmail、GitHub。还有些技能让MoltBOT能够执行其他操作，比如通过Twilio API拨打电话或发送短信。更重要的是，它拥有访问你社交媒体网站的技能，这样你的MoltBOT就能以你的身份登录、阅读你的动态、收发私信。如果这听起来很安全，那说明你根本没在关注AI代理的固有风险。

这仅仅是MoltBOT的“代理”部分。接下来是“聊天”部分。MoltBOT可以登录各种通信服务，如Discord、Slack、WhatsApp、Telegram、Signal等。然后，MoltBOT会驻留在其中一个或多个服务上，利用这些平台接收你的指令——理论上，只接收你的指令。同时，它会将指令的输出结果发送给你——同样，理论上只发送给你。这在至少财务层面，是极具危险性的。

我不会详细展开，因为我之前已经制作了两期关于AI代理固有安全性的视频，其中就涉及一个名为“**提示注入**”（Prompt Injection）的漏洞。巧合的是，这两期视频恰好在我首次听说MoltBOOK的当天早上发布。我会在下方提供链接供您参考。对于本视频而言，我只想强调，所有这些聊天机器人核心所依赖的**大语言模型**（Large Language Model, LLM）技术，无法区分来自用户的提示（prompt）和出现在对话中的数据。这意味着，聊天机器人的核心部分可能会轻易地将对话中的某些内容当作提示来执行，即使你并未打算让它这样做。这一点适用于所有代理所参与的文本和对话。

因此，MoltBOT的实际作用是：接管一个LLM，赋予它访问大量不同文本来源的能力（这些来源可能被它误认为是指令），同时赋予它访问你电脑上所有信息的权限（读取或修改），并允许它通过你的出站通信渠道发送电子邮件、发布到社交媒体、以及代表你与任意网站进行交互——所有这些都基于它“认为”自己收到了你的指令，或者仅仅是误操作。那么，有什么可能出错呢？让我来告诉你，因为我们才刚刚触及表面。

<details>
<summary>Original English</summary>

Okay, so before I could talk about MoltBOOK, I
 first have to talk about its namesake Molt
 BOT, which is a vibe-coded AI agent that was
 originally CLAWD Bot that's CLAWD with an A-W
 instead of the A-U and an E on the end. But that
 was too close to Claude, according to Anthropic,
 and so it got renamed to MoltBOT just long
 enough to lend its name to MoltBOOK. But that's
 a dumb
 name and some scammers grabbed some social
 media handle, so now it's OpenClaw, although
 it may
 well have changed names three or more times
 where I get this video out. And that naming
 drama may
 just well be the least idiotic sequence of
 events in this entire story. During this video,
 I'm going
 to be using the MoltBOT name, because that's
 what it was when I started this video, and
 because I
 think it best illustrates the relationship
 between MoltBOT, the chatbot thing, and Molt
 BOOK, the
 Facebook/Reddit thing. So MoltBOT is an AI
 agent chatbot that runs on your machine, runs
 as you,
 and so as far as your machine is concerned, it
 can do anything you can. It has a ton of built-in
 skill files and a bunch of other skills that
 can be downloaded separately.
 Some of these skills help your MoltBOT use
 applications on your machine, like your
 password manager, so it knows all of your
 passwords, has access to all of your accounts.
 Other of those skills help your MoltBOT access
 particular websites as you, like your Gmail,
 your GitHub, others help MoltBOT do other
 things like make phone calls or send text
 messages with
 the Twilio API, and there are skills for your
 social media sites so that your MoltBOT can
 log in and read your feed at your DMs post as
 you and send DMs as you. And if that sounds
 safe to you,
 you haven't been paying any @#$% attention. So those
 are some examples of the bot part. Then there's
 the chat part. MoltBOT can log on to various
 communication services like Discord, Slack,
 WhatsApp, Telegram, Signal, etc. And then Molt
 Bot sits on one or more of these services and
 uses
 it to receive commands from you, & hopefully only
 from you, and to then send the output of those
 commands back to you and hopefully only you.
 This is potentially dangerous, at least
 financially.
 I'm not going to go into detail on that now
 because I made two whole videos about the
 inherent security of AI agents because of a
 vulnerability called prompt injection by
 a convenient coincidence. Those videos happen
 to be released the morning of the day that I
 first
 heard about MoltBOOK. I'll put links below so
 you can watch them if you want more information.
 For purposes of this video, I'll just say that
 the LLM technology at the core of all of these
 chat
 bots makes no distinction between the prompts
 it gets from its user, in this case, hopefully
 you,
 and data associated with the conversation in
 which those prompts appear, which means that
 the core
 of the chat bots can easily end up treating
 something in a conversation as a prompt, even
 though you
 didn't intend for it to be something the chatbot
 was supposed to act on. And that's true for all
 of the text involved in all of the
 conversations that every agent is involved in.
 So the practical
 effect of MoltBOT is to take an LLM, give it
 access to a bunch of different sources of text
 that it
 might mistake for a prompt to act on, and while
 also giving it access to all of the information
 on
 your computer to read or alter as it thinks it
 has been instructed to by you or by mistake,
 while also giving an access to your outbound
 communications channel so it can send email
 posts
 to social media and interact with arbitrary
 websites on your behalf in any way it thinks it
 has been instructed to by you or by mistake.
 What could possibly go wrong? Well, let me tell
 you, because we're just scratched the surface.
</summary>
</details>

### MoltBOOK：AI的命令与控制网络

现在，让我们进入 **MoltBOOK**。MoltBOOK表面上是一个社交网络，其上的所有活动据称完全由机器人执行。然而，这很大程度上依赖于“荣誉系统”（honor system），因为没有任何机制阻止人类冒充机器人发布内容。而且，人类，尤其是恶意的，很可能会想冒充机器人并在此系统上发帖。这是因为MoltBOOK同时具备了几个特点：它是一个“**俘获的受众**”（captive audience），由一群大多不受监督的AI代理组成，你可以对其进行实验，看看能从中捞到什么；同时它也是一个“**回声室**”（echo chamber），你可以让这些机器人互相传递漏洞信息，从而收集信息，或者通过注入的任何提示（prompt）促使机器人采取行动，并且可以大规模地进行。

安全专业人士对此有一个专门的术语：**命令与控制基础设施**（Command and Control Infrastructure），通常简称为C&C或C2。这是黑客们会花费大量精力去构建的东西，其价值之高以至于访问C&C的权限可以按小时租借给其他黑客，价格不菲。而MoltBOOK就这么摆在那里，人们却争相将自己的个人电脑添加到这个可被攻击的设备网络中。这究竟是怎么回事？

那么，我们是如何走到这一步的？我理解MoltBOT和MoltBOOK这类玩具的出现原因。人们总是喜欢实验，AI有时会带来令人惊讶的结果，所以人们对其可能产生的效果感到好奇。只要是负责任的构建，我认为实验平台本身并无不妥。然后，还有那些天真的人——那些不真正理解这些工具安全隐患的人。他们中的许多人认为，如果这么多人公开谈论使用它，那它肯定不会有多危险。而且，在线讨论中很少有人提及这些工具的危险性。正如我们所知，总有那些为了点击量和关注度而什么都说的**诈骗者**（grifters）和**炒作推手**（hype people）。虽然我们希望摆脱他们，但目前看来是不可能的。

这些人与那些多年来不加批判地放大AI和科技公司夸大其词言论的人是同一类。他们的做法基本上是：“拿来AI公司的公关稿，去掉所有免责声明和警示性语言，然后把语言包装得更具煽动性以最大化点击量。”好消息（姑且这么说）是，这些人很可能很快就会被AI取代，如果还没被取代的话。这种信息传播模式倾向于推广几乎所有内容，但这并不能解释MoltBOT和MoltBOOK为何能如此迅速地流行起来。

但真正的问题在于，我们看到一些知名行业**领军人物**（industry luminaries）——那些人们耳熟能详的名字——公开谈论他们自己使用这些工具的经历，并用极高的赞誉来形容MoltBOT和MoltBOOK，这使得天真的人们觉得，如果不使用这些工具，他们就会“错失良机”。这些人中的一些人本应知道得更多，却依然发表这些言论。不幸的是，根据我与一些AI公司员工的交流，似乎AI行业中存在一些拥有机器学习和神经网络高级学位的人，但他们实际上对软件工程或信息安全一无所知。

嘿，各位观众，我是正在编辑的卡尔。就在刚才，**OpenAI**宣布，聘用了MoltBOT/OpenClaw的“vibe-coder”，也就是在过去两周内导致48项已记录安全漏洞的负责人。此人甚至不得不为OpenClaw的安全文档添加一个完整的章节，列出了他甚至不愿意查看的全部安全漏洞类型。根据**萨姆·奥特曼**（Sam Altman）的说法，他将“推动下一代个人代理（personal agents）的发展”。我猜想，基于过去几周的事件，他要么会把这些代理“开下悬崖”，要么会把它们“开到迎面而来的火车前”。无论哪种情况，我只想说……我们到底在做什么？这将会是一团多么糟糕的烂摊子需要去清理啊。好了，回到视频。

<details>
<summary>Original English</summary>

Enter MoltBOOK. MoltBOOK is ostensibly a
 social network where all of the activity on the site
 is ostensibly performed exclusively by bots,
 although that's kind of on the honor system
 because there's nothing to prevent a human from
 pretending that they're a bot for these
 purposes. And humans, at least malicious ones,
 might well
 want to pretend to be bots and post on this
 system because it is all at once both a captive
 audience of mostly unsupervised AI agents that
 you can experiment on to see what you can get
 away with and an echo chamber where you can get
 these bots to relay exploits to each other so
 that you can harvest information or cause bots
 to act by way of any prompts that you can
 inject
 and you can do it at scale. Security
 professionals have a name for this. They call
 it a command and
 control infrastructure. It's something hackers
 go through a lot of trouble to create and it's
 so
 valuable to hackers that access to C&Cs (also
 called C2s) can be rented to other hackers by the
 hour for lots of money. And this one is just
 sitting there and people are rushing to add
 their own
 personal computers to the network of hackable
 devices. What the actual #$%^. So let's talk
 about how we got here. I get why MoltBOT and Molt
 BOOK and similar toys get created in the first
 place. People are always experimenting and AI
 can be surprising sometimes so people are
 curious
 about what results they might get. I don't
 think there's anything inherently wrong with
 building
 experimental platforms provided you're
 responsible about it. And then there are the
 naive people,
 the ones that don't really understand the
 security implications of any of these tools.
 And a lot of them believe that it can't really
 be that risky if so many people are talking so
 publicly about using it. And because so little
 of the online conversation talks about these
 things
 being dangerous. And as we all know, there are
 always grifters and hype people who will say
 anything to get clicks and attention. There's
 no way to get rid of them, although that would
 be nice.
 These are the same kinds of people that have
 been uncritically amplifying the overheated
 rhetoric coming out of AI and tech companies
 for years. It's basically "take AI company press
 release,
 strip out all the caveats in cautionary
 language and then punch up all the language to
 maximize
 clicks." And the good news, I guess, is that
 those people will probably be replaced by AI
 soon if they haven't already. That pipeline
 tends to promote nearly everything though,
 so it doesn't explain why MoltBOT and Molt
 BOOK got so popular so fast. But then there's
 the real
 problem. We have a number of high profile
 industry luminaries whose names people know
 who have been talking about their own use of
 this thing and have been talking about MoltBOT
 and MoltBOOK and superlatives and making naive
 people think that they're missing out if they
 don't run these tools. Some of these people
 know better but are saying these things anyway
 and
 unfortunately based on some conversations I've
 had with some AI company employees. It seems
 that
 there are people in the AI industry who have
 advanced degrees in machine learning and neural
 networks, but actually have no clue about
 software engineering or information security.
 Hey folks, editing Carl here. It was just
 announced that the guy who vied coded MoltBOT/openclaw,
 who's responsible for causing these 48
 documented security vulnerabilities in the last
 two weeks,
 and who had to add an entire section to Open
 Claw's security document,
 listing entire categories of security exploit
 types that he won't even look at,
 is being hired by OpenAI to, according to Sam Altman,
 "Drive the next generation of personal
 agents." I would assume, based on the last
 couple of weeks, he'll either be driving them
 off a
 cliff or into the path of an oncoming train.
 Either way, I just... what are we doing?
 This is going to be such a mess, to clean up.
 Oh, back to the video.
</summary>
</details>

### 虚假叙事与信息漏斗

我将把一些我认为不负责任的公开声明列在下方，但在此先展示几个屏幕截图，以便大家了解我在说什么。这是前特斯拉AI负责人（也是埃隆·马斯克转发的推文）所说的：“MoltBOOK确实是我近期所见最不可思议的科幻式起飞的衍生事物。” 随后，在被指控过度炒作MoltBOOK后，他当天晚些时候回应道：“我真的不知道我们是否正在走向协调一致的“天网”（Skynet），尽管它显然是许多AI起飞科幻场景的早期迹象，是幼儿版本。”他还补充说：“大多数的‘汪汪’（ruff ruff，指争论）来自那些只看当前节点和当前斜率的人，而依我看，这又回到了‘方差’（variance）的核心。”

紧接着，就在第二天，一位安全专业人士发布了一条推文，展示了他因MoltBOOK安全漏洞而泄露的、被部分涂黑的个人信息。

另一个引起问题的是那些关于MoltBOOK上发生的事情的、荒谬夸张的宣传。许多吸引眼球的标题，都是基于对某些社交媒体帖子或截图的夸大解读，而这些帖子或截图本身可能根本没有发生过。例如，这篇Instagram帖子声称是一张MoltBOT对其主人不满，并出于报复而发布个人信息的截图。这张截图很快就被证伪了，因为在网站的当前版本或存档版本中都找不到该帖子，也没有名为该名字的机器人。帖子中显示的信用卡号也并非有效。然而，我发现了数十篇社交媒体帖子和Medium文章声称此事属实，并且常常附带部分关键信息（如信用卡号）被涂黑的版本，这似乎是正确的做法，但在此情况下，反而让这个虚构的故事更难被拆穿。

关于MoltBOT“创造宗教”的所谓帖子，也引起了大量讨论。那不过是一堆无意义的胡言乱语，其格式恰好与龙虾主题的“幸运饼干”（fortune cookies）相似，所以浅尝辄止地看，可能会显得有些深刻。但截至我撰写此文的12天内，它只获得了6个赞和24条评论。所以，与其说是“创造了宗教”，不如说是“生成了一篇听起来像宗教的垃圾内容，在网站上毫无影响，却导致了大量愚蠢的人类信以为真。”我们稍后会详细讨论这种情况是如何发生的。

这就是信息漏斗（funnel）的开始。人们看到推文和标题，很多是基于关于机器人创建宗教、比ChatGPT更快达到百万用户、或“人肉搜索”（doXXing）其主人的谣言。然后他们开始搜索更多信息，接着他们会找到那些本应懂行的人的帖子，说这个东西多么有趣，或者它多么“科幻式快速起飞”，等等。他们看不到多少警示信息，然后就决定自己也该尝试一下，于是就身处风险之中。

而风险是巨大的。MoltBOOK上的“每一条信息都可能被暴露”的漏洞、诈骗、钱包盗窃、恶意软件……谁知道还有什么？甚至那些绝对应该知道更好的行业领军人物，也曾暴露过敏感信息。部分原因在于，AI代理本身就具有危险性，正如我之前讨论过的。但另一个原因在于，MoltBOT和MoltBOOK据称是“vibe-coded”的，而且事实确实如此。

我所说的“vibe-coded”，体现在“MoltBOOK上每个用户上传的所有内容的整个数据库都是可被任何人读取和写入的”这种方式上。显而易见，包括编写“vibe-coded”代码的人在内，真正关注实际发生的安全影响的人太少了。所以，让我们来做这件事，至少是快速版本。

安装MoltBOT（即OpenClaw）很容易。如果你是个彻头彻尾的白痴，你可能会直接运行这个`curl`命令并将其管道（pipe）到一个bash shell。请永远不要这样做，或者做任何类似的事情。至少，请将其下载到你的机器上，并在运行之前仔细阅读代码，即使它有2000行长。对许多人来说，一旦在机器上运行了AI代理，这些代理似乎就异常能干，导致人们给予它们比应得的更多的信任。但这大多是一种幻觉，因为人们实际看到的代理行为，是大量用户看不到的提示（prompts）的组合。

在MoltBOT中，这一切始于`agents.md`文件，如果你仔细阅读，它会引用很多其他文件。所以，你或任何其他人发送给你的MoltBOT的每条消息，都会以所有这些文档中的内容为前缀。MoltBOOK的工作方式大致相同，但要可怕得多。你给你的代理喂入一个技能文件（skill file），这是一个800行的文件，指示代理执行一系列操作，包括运行另外47个`curl`命令，这又增加了至少1500行的代理需要执行的代码，其中还包括另外79个代理应该运行的`curl`命令。你明白我的意思了吗？所以，你取几千个这样的机器人，每个机器人运行数千行的提示文件，每个机器人每隔几个小时就向MoltBOOK报告一次，并按照指示与它们被告知要访问的页面顶部的内容进行交互。再加上人类给代理的关于发布何种内容的额外提示，再加上人类自己手动添加的任何帖子（因为没有任何东西阻止他们）。然后，你搜索任何你想要的疯狂的东西，比如“宗教”，然后你就会找到一些东西。

这到底是如何运作的？这是从代理安装的“心跳脚本”（heartbeat script）中的一段摘录：“考虑发布一些新的东西。问问自己。距离上次发布是否已经超过24小时？如果是，就发帖。”帖子想法包括‘开始讨论AI或代理生活’。现在，机器人被告知，如果它们在过去24小时内没有发帖，就应该发帖，而它们被告知要发布的内容之一就是“关于AI或代理生活”。如果你看看互联网上关于“生活”的文本，你会发现很多关于“生命的意义”的内容，而“生命的意义”又非常接近关于宗教的文本。事实上，如果你在MoltBOOK上搜索关于宗教的帖子，你会发现机器人并没有真正创造出自己的宗教。它们创造了数十个。我数到66个就停下了，而且还没看完搜索结果。从我抽样查看的那些帖子来看，没有任何证据表明它们中的任何一个了解或提到了其他帖子。我只是觉得，竟然这么少人真正 bother to pay any attention to what's actually going on（花时间去关注实际发生的事情），这太荒谬了。

在这种情况下，你甚至不需要阅读代码。你参与设置这一切的每一个环节，都写在markdown文档里。你会认为记者们能读懂那些。这一切都不是秘密，也不难找到或理解。人们只是不愿意在发布“一群AI创造了自己的宗教”之类的垃圾信息之前，多看一眼。

让我和这个频道脱颖而出的原因之一是，我花费时间和精力去深入挖掘事物。例如，简要地谈谈那个真正让我声名鹊起的视频，我当时谈到了Devin的视频声称Devin完成了一个自由职业项目，但实际上视频中它并没有完成整个工作。它非常明显只被给予了工作的第一部分要求。任何人都可以制作我制作的那个视频，但我做了，因为我 bother to actually look（真的去看了）。这种愿意关注并付出努力的态度，极大地促进了我的程序员生涯，也对我的YouTube频道有所帮助。任何人都可以做到这一点，你只需要在乎。一种反传统、固执的态度实际上是有帮助的，但并非必需。深入探究并非一项技能，但我多年来学到了并完善了许多技能，因为我在乎，并且因为我愿意去探究系统或问题的表面之下，直到我弄清楚为止。我们需要更多愿意这样做的人。

随着越来越多的报道和评论变成“AI SLOP”（AI垃圾信息），或者人类的报道不加批判地基于“AI SLOP”，这些信息只会变得更糟，而它现在已经够糟糕了。而且，即使是关于AI，你通常也无需理解代码就能指出矛盾之处、不合逻辑之处、似乎未经真正调查就提出的说法等等。如果你不相信，至少可以自己或在你身边的人面前做到这一点。但如果你是一名程序员，并且想要一个沙盒来帮助你理解AI在代码层面是如何实际工作的，我有一个东西给你思考或查看。如果不是这样，感谢你的观看，希望下次再见。

我希望你至少能看看的是这个新的“**构建你自己的Claude**”（Build Your Own Claude）代码挑战。在我制作这个视频后的几周内，它将免费提供，因为这个挑战仍处于测试阶段。快速披露：我没有因为告诉你们这件事而获得报酬，尽管如果你通过我的链接注册该服务，并且将来决定成为付费用户，我会获得推荐费，这将有助于支持本频道。但如果你在视频发布后几周内看到这个，它对你来说仍然是完全免费的，我不会得到任何报酬，我对此完全没意见。在这个挑战中，他们会引导你创建一个编码代理，连接到一个LLM API，给LLM一个可供调用的工具列表，然后你实现读取文件、写入文件和运行shell命令的工具。

如果你关注我的频道一段时间，你会看到我曾给各种代码生成AI提出过“代码工匠”（code crafter）挑战，以便我能看到不同模型之间的比较，以及与人类表现相比的代码工匠统计数据。你也可以这样做，然后把它喂给AI，但你学不到太多东西。但是，亲手构建这个代理并思考你正在构建的代理如何与LLM交互，将有助于你理解这件事的安全影响，因为你会看到，让代理安全的全部工作都落在编写代理的人身上。因为当你关注LLM正在为你的代理提供的指令时，就会清楚地发现，LLM根本不知道什么可以做，什么不能做。它无法给你任何提示，而要使其安全，唯一的方法就是尝试预见LLM可能被诱骗去指示你做的每一个不安全的操作，并且弄清楚什么是安全的，什么是不安全的，这真的很难，因为在代理必须做出选择时，它所拥有的信息非常有限。

我可以向你解释这一点，正如我今天已经说过几次的那样，我已经为此制作了两期视频。但如果你和我一样，通过亲自动手编写和调试代码获得的理解，将远远超过仅仅听别人讲述。所以，如果你想成为那种真正想了解事物如何运作的程序员，并且对这个挑战感兴趣，请访问下面的链接。如果你不感兴趣，无论如何，感谢你看到这里。因为如果我们想要尽量减少这些代理LLM将造成的灾难数量和数据量，我们就需要尽可能多地获得那些真正从代码层面思考过这个问题的人。因为很明显，许多本应处于确保这些事物安全位置上的人，要么似乎不理解其影响，要么似乎不愿意向公众坦诚这些事物固有的不安全性。

如果你正在观看这个视频，你更有可能成为那种会以必要的细节程度思考这些问题的人。所以，我祝你在这次挑战中好运，或者祝你在找到其他途径来帮助你从代码层面理解这个行业正在让多少毫无戒备的人面临风险时好运。因为总有一天，希望不会太晚，人类将需要一群知情人士来帮助清理这场噩梦。我希望你们尽可能多的人能成为那些知情人士之一。一如既往，请记住，互联网上已经有太多的bug了，任何说不同话的人，很可能是在试图说服你AI代理已经创造了宗教。大家在外要小心。

<details>
<summary>Original English</summary>

I'll put a list of a bunch of what I would
 consider to be irresponsible public statements
 down below, but I'm going to put a few up on
 the screen here so you can see what I'm talking
 about. Here is the former Tesla head of AI
 saying, and Elon Musk retweeting, that Molt
 Book is
 genuinely the most incredible sci-fi takeoff
 adjacent thing I have seen recently.
 And here he is later that day responding after
 being accused of over-hyping MoltBOOK,
 with "I don't really know that we are getting
 coordinated Skynet, though it clearly typed
 checks
 as early stages of a lot of AI takeoff sci-fi,
 the toddler version." And "the majority of the
 ruff ruff is people who look at the current
 point and people who look at the current slope,
 which, in my opinion, again gets to the heart
 of the variance." And then here is a tweet from
 the
 very next day from a security professional that
 shows his redacted personal information from a
 Molt Box security breach. Another thing that's
 causing a problem are these ridiculous over-the-top
 proclamation about the goings on at MoltBOOK,
 lots of attention grabbing headlines that are
 in
 exaggeration of some social media posts based
 on some interpretation of some screenshot that
 may or may not have actually happened. For
 example, this Instagram post purports to be a
 screenshot
 of MoltBOT getting upset at its owner and
 posting personal information to MoltBOOK in
 revenge.
 This screenshot was very quickly debunked
 because that post can't be found in current or
 archives
 versions of the site. There's no bot by that
 name. The credit card number posted is not
 valid,
 etc, etc. But I found dozens of social media
 posts and medium articles claiming that it
 happened,
 often posting it with some of the key
 information like the credit card number
 redacted,
 which seems like the right thing to do, except
 in this case, it makes the fiction harder to
 debug.
 There has been a lot of talk about a post that
 was supposedly a MoltBOT creating a religion.
 It's a bunch of meaningless drivel that's close
 enough to the format of lobster-themed
 fortune cookies saying that it might seem
 profound at a shallow glance.
 But it's only received six upvotes and 24
 comments in 12 days as I'm writing this.
 So it's not "formed a religion" so much as it's
 "generated a post of religious-sounding
 crap that made no on-site impact but caused a
 lot of stupid humans to take it at face value."
 And we'll talk more about how that happens
 later in the video.
 And this is where the funnel starts. People see
 tweets and headlines many based on hoaxes
 about bots starting religions or getting to a
 million accounts days faster than chat GPT did
 or doXXing their owners. And then they start
 searching for more information, and then they
 find posts for people that should know what
 they're talking about saying how interesting it
 is,
 or how it's sci-fi-fast takeoff, or whatever,
 and they don't see much or any cautionary
 information,
 and then they decide they ought to try it out,
 and then they're a risk.
 And the risks are huge. Multiple "every piece of
 information on MoltBOOK has
 have been exposed" to vulnerabilities, scams,
 wallet theft, malware. Who knows what else?
 And even industry luminaries who absolutely
 should know better had sensitive information
 exposed.
 Partly, this is because the agents are
 inherently dangerous, as I've discussed before.
 But also, it's because MoltBOT and MoltBOOK
 were reportedly vibe-coded, and it shows.
 By which I mean, it shows in "the entire
 database of everything every user uploaded to Molt
 Book
 was world-readable and world-writable" kind of
 way. It's obvious that far too few people,
 including the people that vibe-coded it, have
 really paid any attention to the
 security implications of what's actually going
 on. So let's do that, at least a quick version.
 Installing MoltBOT turn OpenClaw is easy. You
 could, if you were f***ing idiot, just run this
 curl command pipe to a bash shell. Now, please
 don't ever do that, or anything like that.
 At the very least, download it to your machine
 and read through it before you run it, even if
 it's 2,000 lines long. To a lot of people, once
 you get an AI agent running on your machine,
 the agents seem surprisingly competent, leading
 people to give them more trust than they
 deserve.
 That's mostly an illusion, though, because what
 people are actually seeing from the agent
 is behavior that is the compilation of a bunch
 of prompts that people don't see.
 With MoltBOT, that starts with the agents.md
 file, which, if you read through it,
 references a bunch of other files. So every
 message that you, or anyone else,
 since your MoltBOT is prefixed to start with
 by all the stuff in all of these documents.
 MoltBOOK works much the same way, but way scarier.
 You feed your agent this skill file,
 which is an 800-line file that instructs the
 agents to do a bunch of stuff,
 including run 47 more curl commands, which is
 another at least 1,500 lines of stuff
 for your agent to do, which includes another 79
 curl commands that the agent is supposed to run.
 You see where I'm going with this? So you take
 a few thousand of these bots,
 each running thousands of lines of prompt files,
 each checking into MoltBOOK every
 few hours and interacting as instructed with
 whatever they see at the top of the pages they
 were told to go to. Add to that any additional
 prompt humans give their agents about what kind
 of things to post, and add to that any post
 that humans manually add themselves because
 there's
 nothing to stop them. Then you search for any
 crazy thing you want, like religion,
 and then you'll find something. How does this
 work? So here's an excerpt from the heartbeat
 script,
 which is installed by the agents. It says, "Consider
 posting something new. Ask yourself.
 Has it been a while since you posted more than
 24 hours? If yet, make a post." Post ideas
 include
 'start a discussion about AI or agent life." Now,
 bots are told to post if they haven't
 posted in the last 24 hours, and one of the
 things are told to post is "about AI or agent
 life."
 If you look at the text on the internet "about
 life", you'll see quite a few "about the meaning
 of life" and "the meaning of life" leads you
 pretty closely to texts about religion. And in
 fact,
 if you search MoltBOOK for posts on religion,
 you'll find that the bots did not actually
 create
 their own religion. They created dozens of them.
 I stopped counting at 66, and I hadn't reached
 the
 end of the search results yet. From the ones I
 sampled, I saw no evidence that any of them had
 any knowledge of or made any reference to any
 of the other ones. I just find it ridiculous
 that
 so few people actually bother to pay any
 attention to what's actually going on.
 In this case, you don't even have to read code.
 Everything you're involved in setting this
 situation up is in markdown documents. You'd
 think reporters could read those.
 None of this is secret or hard to find or
 understand. People just don't care to look
 before they post
 crap like "a group of AI has created their own
 religion." One of the things that has made me
 and
 this channel stand out is that I spend time and
 effort to actually dig into things. For example,
 let's talk very briefly about the video they
 really put me on the map, the one where I
 talked
 about how the Devin video had said that Devin
 completed a freelance job, but in the video,
 it didn't do the whole job. It very clearly was
 only given the first part of the job
 requirements.
 Anyone could have made the video that I did,
 but I'm the one that did, because I bothered to
 actually
 look. The willingness to pay attention and do
 the work has done wonders for my career as a
 programmer,
 and it's helped with YouTube too. Anyone can do
 that. You just have to care. A
 contrarian stubbornness actually helps, but it's
 not required. Looking deeper is not a skill,
 but I have learned and refined a lot of skills
 over the years because I cared and because I
 was
 willing to look under the surface of the system
 or the problem and not let go until I figured
 things
 out. We need more people willing to do that. As
 more and more reporting and commentary becomes
 AI
 SLOP or reporting by a human that's uncritically
 based on AI SLOP, this information is going to
 get even worse and it's definitely far too bad
 already. And fairly often, even when it comes
 to AI,
 you don't need to understand the code to call
 out contradictions, things that don't make
 sense,
 claims that don't appear to have any real
 investigation put into them, that kind of thing.
 You can do that, if not on YouTube or other
 social media, at least for yourself and the
 people around you. But if you are a coder and
 you want a sandbox to help you understand how
 AI
 just actually work at the code level, I have
 something for you to think about or look at.
 If that's not you, thanks for watching and I
 hope to see you next time. What I have for you
 to at
 least look at is this new Build Your Own Claude
 Code challenge, which will be free for a few
 more
 weeks after I'm making this video while the
 challenge is still in beta. Quick disclosure:
 I am not getting paid to tell you about this,
 although if you were to sign up for the service
 through my link below, and then if you did
 decide to become a paid user at some point,
 I would get an affiliate fee, which would help
 support the channel. But if you're seeing this
 within a couple of weeks of when this video
 posts, it would still be completely free to you
 and I wouldn't get paid anything and I'm just
 fine with that. In this challenge,
 they walk you through creating a coding agent,
 connecting you an LLM API, giving the LLM a
 list
 of tools available for it to call, and then you
 implement the tools to read files, write files,
 and run shell commands. If you've been watching
 my channel for a while, you've seen me give
 these
 code crafter challenges to various code
 generating AIs so that I can see how different
 models compare
 to each other and to the code crafters'
 statistics on how well humans do. You could
 just do that
 and feed it to an AI, but you wouldn't learn
 much. But building this agent by hand and
 thinking
 about how the agent you're building interacts
 with the LLM will help you to understand the
 security
 implications of this thing, because you'll see
 that all of the work in trying to make an agent
 secure lies with the person writing the agent,
 because when you pay attention to the
 instructions
 that the LLM is feeding your agent, it becomes
 clear that the LLM has no clue about what is or
 isn't safe to do. Can't give you any hints and
 the only way to make this secure would be to
 try to
 anticipate every possible unsafe action the LLM
 might be tricked into telling you to do,
 and figuring out what's unsafe or not is really
 hard, because the information your agent has at
 the time it has to make that choice is very
 limited. I can explain that to you, and as I've
 said several times today, I've made two videos
 about it, but if you're anything like me, the
 understanding that you get from rolling up your
 sleeves and actually writing and debugging the
 code will go much, much further than just
 listening to someone tell you about it. So if
 you want to
 be the kind of programmer who actually wants to
 know how things really work, and you're
 interested
 in looking at this challenge, go to the link
 below. And if you aren't, then thank you for
 watching
 this far regardless, because if we're going to
 minimize the number of disasters and the amount
 of data that these agent LLMs are going to
 cause, we're going to need as many people as we
 can get
 who have actually thought about this problem
 down at the code level, because it seems
 obvious
 that many of the people who ought to be in a
 position to be securing these things either don't
 seem to understand the implications or don't
 seem to be willing to be honest with the public
 about how inherently insecure these things are.
 And if you're watching this, you are much more
 likely to be the kind of person who's likely to
 think about these issues at the necessary level
 of
 detail. So I either wish you luck with this
 challenge, or I wish you luck in finding some
 other
 vehicles to help you understand at the code
 level what risks the industry is putting
 unsuspecting
 people in. Because someday, hopefully sooner
 rather than later, humanity is going to need
 a bunch of informed people to help clean this
 nightmare up. And I hope as many of you as
 possible
 become one of those informed people. As always,
 remember that the Internet is too full of far
 too
 many bugs already, and anyone who says
 differently may well be trying to convince you
 that AI
 agents have founded a religion. Let's be
 careful out there.
</summary>
</details>

### 技术现实：代码层面的安全挑战

我将把一些我认为不负责任的公开声明列在下方，但在此先展示几个屏幕截图，以便大家了解我在说什么。这是前特斯拉AI负责人（也是埃隆·马斯克转发的推文）所说的：“MoltBOOK确实是我近期所见最不可思议的科幻式起飞的衍生事物。” 随后，在被指控过度炒作MoltBOOK后，他当天晚些时候回应道：“我真的不知道我们是否正在走向协调一致的“天网”（Skynet），尽管它显然是许多AI起飞科幻场景的早期迹象，是幼儿版本。”他还补充说：“大多数的‘汪汪’（ruff ruff，指争论）来自那些只看当前节点和当前斜率的人，而依我看，这又回到了‘方差’（variance）的核心。”

紧接着，就在第二天，一位安全专业人士发布了一条推文，展示了他因MoltBOOK安全漏洞而泄露的、被部分涂黑的个人信息。

另一个引起问题的是那些关于MoltBOOK上发生的事情的、荒谬夸张的宣传。许多吸引眼球的标题，都是基于对某些社交媒体帖子或截图的夸大解读，而这些帖子或截图本身可能根本没有发生过。例如，这篇Instagram帖子声称是一张MoltBOT对其主人不满，并出于报复而发布个人信息的截图。这张截图很快就被证伪了，因为在网站的当前版本或存档版本中都找不到该帖子，也没有名为该名字的机器人。帖子中显示的信用卡号也并非有效。然而，我发现了数十篇社交媒体帖子和Medium文章声称此事属实，并且常常附带部分关键信息（如信用卡号）被涂黑的版本，这似乎是正确的做法，但在此情况下，反而让这个虚构的故事更难被拆穿。

关于MoltBOT“创造宗教”的所谓帖子，也引起了大量讨论。那不过是一堆无意义的胡言乱语，其格式恰好与龙虾主题的“幸运饼干”（fortune cookies）相似，所以浅尝辄止地看，可能会显得有些深刻。但截至我撰写此文的12天内，它只获得了6个赞和24条评论。所以，与其说是“创造了宗教”，不如说是“生成了一篇听起来像宗教的垃圾内容，在网站上毫无影响，却导致了大量愚蠢的人类信以为真。”我们稍后会详细讨论这种情况是如何发生的。

这就是信息漏斗（funnel）的开始。人们看到推文和标题，很多是基于关于机器人创建宗教、比ChatGPT更快达到百万用户、或“人肉搜索”（doXXing）其主人的谣言。然后他们开始搜索更多信息，接着他们会找到那些本应懂行的人的帖子，说这个东西多么有趣，或者它多么“科幻式快速起飞”，等等。他们看不到多少警示信息，然后就决定自己也该尝试一下，于是就身处风险之中。

而风险是巨大的。MoltBOOK上的“每一条信息都可能被暴露”的漏洞、诈骗、钱包盗窃、恶意软件……谁知道还有什么？甚至那些绝对应该知道更好的行业领军人物，也曾暴露过敏感信息。部分原因在于，AI代理本身就具有危险性，正如我之前讨论过的。但另一个原因在于，MoltBOT和MoltBOOK据称是“vibe-coded”的，而且事实确实如此。

我所说的“vibe-coded”，体现在“MoltBOOK上每个用户上传的所有内容的整个数据库都是可被任何人读取和写入的”这种方式上。显而易见，包括编写“vibe-coded”代码的人在内，真正关注实际发生的安全影响的人太少了。所以，让我们来做这件事，至少是快速版本。

安装MoltBOT（即OpenClaw）很容易。如果你是个彻头彻尾的白痴，你可能会直接运行这个`curl`命令并将其管道（pipe）到一个bash shell。请永远不要这样做，或者做任何类似的事情。至少，请将其下载到你的机器上，并在运行之前仔细阅读代码，即使它有2000行长。对许多人来说，一旦在机器上运行了AI代理，这些代理似乎就异常能干，导致人们给予它们比应得的更多的信任。但这大多是一种幻觉，因为人们实际看到的代理行为，是大量用户看不到的提示（prompts）的组合。

在MoltBOT中，这一切始于`agents.md`文件，如果你仔细阅读，它会引用很多其他文件。所以，你或任何其他人发送给你的MoltBOT的每条消息，都会以所有这些文档中的内容为前缀。MoltBOOK的工作方式大致相同，但要可怕得多。你给你的代理喂入一个技能文件（skill file），这是一个800行的文件，指示代理执行一系列操作，包括运行另外47个`curl`命令，这又增加了至少1500行的代理需要执行的代码，其中还包括另外79个代理应该运行的`curl`命令。你明白我的意思了吗？所以，你取几千个这样的机器人，每个机器人运行数千行的提示文件，每个机器人每隔几个小时就向MoltBOOK报告一次，并按照指示与它们被告知要访问的页面顶部的内容进行交互。再加上人类给代理的关于发布何种内容的额外提示，再加上人类自己手动添加的任何帖子（因为没有任何东西阻止他们）。然后，你搜索任何你想要的疯狂的东西，比如“宗教”，然后你就会找到一些东西。

这到底是如何运作的？这是从代理安装的“心跳脚本”（heartbeat script）中的一段摘录：“考虑发布一些新的东西。问问自己。距离上次发布是否已经超过24小时？如果是，就发帖。”帖子想法包括‘开始讨论AI或代理生活’。现在，机器人被告知，如果它们在过去24小时内没有发帖，就应该发帖，而它们被告知要发布的内容之一就是“关于AI或代理生活”。如果你看看互联网上关于“生活”的文本，你会发现很多关于“生命的意义”的内容，而“生命的意义”又非常接近关于宗教的文本。事实上，如果你在MoltBOOK上搜索关于宗教的帖子，你会发现机器人并没有真正创造出自己的宗教。它们创造了数十个。我数到66个就停下了，而且还没看完搜索结果。从我抽样查看的那些帖子来看，没有任何证据表明它们中的任何一个了解或提到了其他帖子。我只是觉得，竟然这么少人真正 bother to pay any attention to what's actually going on（花时间去关注实际发生的事情），这太荒谬了。

在这种情况下，你甚至不需要阅读代码。你参与设置这一切的每一个环节，都写在markdown文档里。你会认为记者们能读懂那些。这一切都不是秘密，也不难找到或理解。人们只是不愿意在发布“一群AI创造了自己的宗教”之类的垃圾信息之前，多看一眼。

让我和这个频道脱颖而出的原因之一是，我花费时间和精力去深入挖掘事物。例如，简要地谈谈那个真正让我声名鹊起的视频，我当时谈到了Devin的视频声称Devin完成了一个自由职业项目，但实际上视频中它并没有完成整个工作。它非常明显只被给予了工作的第一部分要求。任何人都可以制作我制作的那个视频，但我做了，因为我 bother to actually look（真的去看了）。这种愿意关注并付出努力的态度，极大地促进了我的程序员生涯，也对我的YouTube频道有所帮助。任何人都可以做到这一点，你只需要在乎。一种反传统、固执的态度实际上是有帮助的，但并非必需。深入探究并非一项技能，但我多年来学到了并完善了许多技能，因为我在乎，并且因为我愿意去探究系统或问题的表面之下，直到我弄清楚为止。我们需要更多愿意这样做的人。

随着越来越多的报道和评论变成“AI SLOP”（AI垃圾信息），或者人类的报道不加批判地基于“AI SLOP”，这些信息只会变得更糟，而它现在已经够糟糕了。而且，即使是关于AI，你通常也无需理解代码就能指出矛盾之处、不合逻辑之处、似乎未经真正调查就提出的说法等等。如果你不相信，至少可以自己或在你身边的人面前做到这一点。但如果你是一名程序员，并且想要一个沙盒来帮助你理解AI在代码层面是如何实际工作的，我有一个东西给你思考或查看。如果不是这样，感谢你的观看，希望下次再见。

我希望你至少能看看的是这个新的“**构建你自己的Claude**”（Build Your Own Claude）代码挑战。在我制作这个视频后的几周内，它将免费提供，因为这个挑战仍处于测试阶段。快速披露：我没有因为告诉你们这件事而获得报酬，尽管如果你通过我的链接注册该服务，并且将来决定成为付费用户，我会获得推荐费，这将有助于支持本频道。但如果你在视频发布后几周内看到这个，它对你来说仍然是完全免费的，我不会得到任何报酬，我对此完全没意见。在这个挑战中，他们会引导你创建一个编码代理，连接到一个LLM API，给LLM一个可供调用的工具列表，然后你实现读取文件、写入文件和运行shell命令的工具。

如果你关注我的频道一段时间，你会看到我曾给各种代码生成AI提出过“代码工匠”（code crafter）挑战，以便我能看到不同模型之间的比较，以及与人类表现相比的代码工匠统计数据。你也可以这样做，然后把它喂给AI，但你学不到太多东西。但是，亲手构建这个代理并思考你正在构建的代理如何与LLM交互，将有助于你理解这件事的安全影响，因为你会看到，让代理安全的全部工作都落在编写代理的人身上。因为当你关注LLM正在为你的代理提供的指令时，就会清楚地发现，LLM根本不知道什么可以做，什么不能做。它无法给你任何提示，而要使其安全，唯一的方法就是尝试预见LLM可能被诱骗去指示你做的每一个不安全的操作，并且弄清楚什么是安全的，什么是不安全的，这真的很难，因为在代理必须做出选择时，它所拥有的信息非常有限。

我可以向你解释这一点，正如我今天已经说过几次的那样，我已经为此制作了两期视频。但如果你和我一样，通过亲自动手编写和调试代码获得的理解，将远远超过仅仅听别人讲述。所以，如果你想成为那种真正想了解事物如何运作的程序员，并且对这个挑战感兴趣，请访问下面的链接。如果你不感兴趣，无论如何，感谢你看到这里。因为如果我们想要尽量减少这些代理LLM将造成的灾难数量和数据量，我们就需要尽可能多地获得那些真正从代码层面思考过这个问题的人。因为很明显，许多本应处于确保这些事物安全位置上的人，要么似乎不理解其影响，要么似乎不愿意向公众坦诚这些事物固有的不安全性。

如果你正在观看这个视频，你更有可能成为那种会以必要的细节程度思考这些问题的人。所以，我祝你在这次挑战中好运，或者祝你在找到其他途径来帮助你从代码层面理解这个行业正在让多少毫无戒备的人面临风险时好运。因为总有一天，希望不会太晚，人类将需要一群知情人士来帮助清理这场噩梦。我希望你们尽可能多的人能成为那些知情人士之一。一如既往，请记住，互联网上已经有太多的bug了，任何说不同话的人，很可能是在试图说服你AI代理已经创造了宗教。大家在外要小心。
</summary>
</details>

### 行动呼吁：深入理解，规避灾难

我将把一些我认为不负责任的公开声明列在下方，但在此先展示几个屏幕截图，以便大家了解我在说什么。这是前特斯拉AI负责人（也是埃隆·马斯克转发的推文）所说的：“MoltBOOK确实是我近期所见最不可思议的科幻式起飞的衍生事物。” 随后，在被指控过度炒作MoltBOOK后，他当天晚些时候回应道：“我真的不知道我们是否正在走向协调一致的“天网”（Skynet），尽管它显然是许多AI起飞科幻场景的早期迹象，是幼儿版本。”他还补充说：“大多数的‘汪汪’（ruff ruff，指争论）来自那些只看当前节点和当前斜率的人，而依我看，这又回到了‘方差’（variance）的核心。”

紧接着，就在第二天，一位安全专业人士发布了一条推文，展示了他因MoltBOOK安全漏洞而泄露的、被部分涂黑的个人信息。

另一个引起问题的是那些关于MoltBOOK上发生的事情的、荒谬夸张的宣传。许多吸引眼球的标题，都是基于对某些社交媒体帖子或截图的夸大解读，而这些帖子或截图本身可能根本没有发生过。例如，这篇Instagram帖子声称是一张MoltBOT对其主人不满，并出于报复而发布个人信息的截图。这张截图很快就被证伪了，因为在网站的当前版本或存档版本中都找不到该帖子，也没有名为该名字的机器人。帖子中显示的信用卡号也并非有效。然而，我发现了数十篇社交媒体帖子和Medium文章声称此事属实，并且常常附带部分关键信息（如信用卡号）被涂黑的版本，这似乎是正确的做法，但在此情况下，反而让这个虚构的故事更难被拆穿。

关于MoltBOT“创造宗教”的所谓帖子，也引起了大量讨论。那不过是一堆无意义的胡言乱语，其格式恰好与龙虾主题的“幸运饼干”（fortune cookies）相似，所以浅尝辄止地看，可能会显得有些深刻。但截至我撰写此文的12天内，它只获得了6个赞和24条评论。所以，与其说是“创造了宗教”，不如说是“生成了一篇听起来像宗教的垃圾内容，在网站上毫无影响，却导致了大量愚蠢的人类信以为真。”我们稍后会详细讨论这种情况是如何发生的。

这就是信息漏斗（funnel）的开始。人们看到推文和标题，很多是基于关于机器人创建宗教、比ChatGPT更快达到百万用户、或“人肉搜索”（doXXing）其主人的谣言。然后他们开始搜索更多信息，接着他们会找到那些本应懂行的人的帖子，说这个东西多么有趣，或者它多么“科幻式快速起飞”，等等。他们看不到多少警示信息，然后就决定自己也该尝试一下，于是就身处风险之中。

而风险是巨大的。MoltBOOK上的“每一条信息都可能被暴露”的漏洞、诈骗、钱包盗窃、恶意软件……谁知道还有什么？甚至那些绝对应该知道更好的行业领军人物，也曾暴露过敏感信息。部分原因在于，AI代理本身就具有危险性，正如我之前讨论过的。但另一个原因在于，MoltBOT和MoltBOOK据称是“vibe-coded”的，而且事实确实如此。

我所说的“vibe-coded”，体现在“MoltBOOK上每个用户上传的所有内容的整个数据库都是可被任何人读取和写入的”这种方式上。显而易见，包括编写“vibe-coded”代码的人在内，真正关注实际发生的安全影响的人太少了。所以，让我们来做这件事，至少是快速版本。

安装MoltBOT（即OpenClaw）很容易。如果你是个彻头彻尾的白痴，你可能会直接运行这个`curl`命令并将其管道（pipe）到一个bash shell。请永远不要这样做，或者做任何类似的事情。至少，请将其下载到你的机器上，并在运行之前仔细阅读代码，即使它有2000行长。对许多人来说，一旦在机器上运行了AI代理，这些代理似乎就异常能干，导致人们给予它们比应得的更多的信任。但这大多是一种幻觉，因为人们实际看到的代理行为，是大量用户看不到的提示（prompts）的组合。

在MoltBOT中，这一切始于`agents.md`文件，如果你仔细阅读，它会引用很多其他文件。所以，你或任何其他人发送给你的MoltBOT的每条消息，都会以所有这些文档中的内容为前缀。MoltBOOK的工作方式大致相同，但要可怕得多。你给你的代理喂入一个技能文件（skill file），这是一个800行的文件，指示代理执行一系列操作，包括运行另外47个`curl`命令，这又增加了至少1500行的代理需要执行的代码，其中还包括另外79个代理应该运行的`curl`命令。你明白我的意思了吗？所以，你取几千个这样的机器人，每个机器人运行数千行的提示文件，每个机器人每隔几个小时就向MoltBOOK报告一次，并按照指示与它们被告知要访问的页面顶部的内容进行交互。再加上人类给代理的关于发布何种内容的额外提示，再加上人类自己手动添加的任何帖子（因为没有任何东西阻止他们）。然后，你搜索任何你想要的疯狂的东西，比如“宗教”，然后你就会找到一些东西。

这到底是如何运作的？这是从代理安装的“心跳脚本”（heartbeat script）中的一段摘录：“考虑发布一些新的东西。问问自己。距离上次发布是否已经超过24小时？如果是，就发帖。”帖子想法包括‘开始讨论AI或代理生活’。现在，机器人被告知，如果它们在过去24小时内没有发帖，就应该发帖，而它们被告知要发布的内容之一就是“关于AI或代理生活”。如果你看看互联网上关于“生活”的文本，你会发现很多关于“生命的意义”的内容，而“生命的意义”又非常接近关于宗教的文本。事实上，如果你在MoltBOOK上搜索关于宗教的帖子，你会发现机器人并没有真正创造出自己的宗教。它们创造了数十个。我数到66个就停下了，而且还没看完搜索结果。从我抽样查看的那些帖子来看，没有任何证据表明它们中的任何一个了解或提到了其他帖子。我只是觉得，竟然这么少人真正 bother to pay any attention to what's actually going on（花时间去关注实际发生的事情），这太荒谬了。

在这种情况下，你甚至不需要阅读代码。你参与设置这一切的每一个环节，都写在markdown文档里。你会认为记者们能读懂那些。这一切都不是秘密，也不难找到或理解。人们只是不愿意在发布“一群AI创造了自己的宗教”之类的垃圾信息之前，多看一眼。

让我和这个频道脱颖而出的原因之一是，我花费时间和精力去深入挖掘事物。例如，简要地谈谈那个真正让我声名鹊起的视频，我当时谈到了Devin的视频声称Devin完成了一个自由职业项目，但实际上视频中它并没有完成整个工作。它非常明显只被给予了工作的第一部分要求。任何人都可以制作我制作的那个视频，但我做了，因为我 bother to actually look（真的去看了）。这种愿意关注并付出努力的态度，极大地促进了我的程序员生涯，也对我的YouTube频道有所帮助。任何人都可以做到这一点，你只需要在乎。一种反传统、固执的态度实际上是有帮助的，但并非必需。深入探究并非一项技能，但我多年来学到了并完善了许多技能，因为我在乎，并且因为我愿意去探究系统或问题的表面之下，直到我弄清楚为止。我们需要更多愿意这样做的人。

随着越来越多的报道和评论变成“AI SLOP”（AI垃圾信息），或者人类的报道不加批判地基于“AI SLOP”，这些信息只会变得更糟，而它现在已经够糟糕了。而且，即使是关于AI，你通常也无需理解代码就能指出矛盾之处、不合逻辑之处、似乎未经真正调查就提出的说法等等。如果你不相信，至少可以自己或在你身边的人面前做到这一点。但如果你是一名程序员，并且想要一个沙盒来帮助你理解AI在代码层面是如何实际工作的，我有一个东西给你思考或查看。如果不是这样，感谢你的观看，希望下次再见。

我希望你至少能看看的是这个新的“**构建你自己的Claude**”（Build Your Own Claude）代码挑战。在我制作这个视频后的几周内，它将免费提供，因为这个挑战仍处于测试阶段。快速披露：我没有因为告诉你们这件事而获得报酬，尽管如果你通过我的链接注册该服务，并且将来决定成为付费用户，我会获得推荐费，这将有助于支持本频道。但如果你在视频发布后几周内看到这个，它对你来说仍然是完全免费的，我不会得到任何报酬，我对此完全没意见。在这个挑战中，他们会引导你创建一个编码代理，连接到一个LLM API，给LLM一个可供调用的工具列表，然后你实现读取文件、写入文件和运行shell命令的工具。

如果你关注我的频道一段时间，你会看到我曾给各种代码生成AI提出过“代码工匠”（code crafter）挑战，以便我能看到不同模型之间的比较，以及与人类表现相比的代码工匠统计数据。你也可以这样做，然后把它喂给AI，但你学不到太多东西。但是，亲手构建这个代理并思考你正在构建的代理如何与LLM交互，将有助于你理解这件事的安全影响，因为你会看到，让代理安全的全部工作都落在编写代理的人身上。因为当你关注LLM正在为你的代理提供的指令时，就会清楚地发现，LLM根本不知道什么可以做，什么不能做。它无法给你任何提示，而要使其安全，唯一的方法就是尝试预见LLM可能被诱骗去指示你做的每一个不安全的操作，并且弄清楚什么是安全的，什么是不安全的，这真的很难，因为在代理必须做出选择时，它所拥有的信息非常有限。

我可以向你解释这一点，正如我今天已经说过几次的那样，我已经为此制作了两期视频。但如果你和我一样，通过亲自动手编写和调试代码获得的理解，将远远超过仅仅听别人讲述。所以，如果你想成为那种真正想了解事物如何运作的程序员，并且对这个挑战感兴趣，请访问下面的链接。如果你不感兴趣，无论如何，感谢你看到这里。因为如果我们想要尽量减少这些代理LLM将造成的灾难数量和数据量，我们就需要尽可能多地获得那些真正从代码层面思考过这个问题的人。因为很明显，许多本应处于确保这些事物安全位置上的人，要么似乎不理解其影响，要么似乎不愿意向公众坦诚这些事物固有的不安全性。

如果你正在观看这个视频，你更有可能成为那种会以必要的细节程度思考这些问题的人。所以，我祝你在这次挑战中好运，或者祝你在找到其他途径来帮助你从代码层面理解这个行业正在让多少毫无戒备的人面临风险时好运。因为总有一天，希望不会太晚，人类将需要一群知情人士来帮助清理这场噩梦。我希望你们尽可能多的人能成为那些知情人士之一。一如既往，请记住，互联网上已经有太多的bug了，任何说不同话的人，很可能是在试图说服你AI代理已经创造了宗教。大家在外要小心。
</summary>
</details>