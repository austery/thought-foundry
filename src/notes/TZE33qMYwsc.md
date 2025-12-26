---
area: "tech-engineering"
category: technology
companies_orgs:
- Google
- Amazon
- Microsoft
- Meta
- Uber
- Anthropic
- OpenAI
- Grab
- Apple
- Shopify
- BMW
- Cursor
- Vercel
- Perplexity
- Linear
date: '2025-07-16'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Stevey's Blog Rants
- Get That Job at Google
- Get That Job at Grab
- Sapiens
people:
- Jeff Bezos
- Kent Beck
- Dario Amodei
- Simon Willison
- Andrej Karpathy
- Larry Page
products_models:
- Google+
- Azure
- Kubernetes
- gRPC
- Slack
- Unreal Engine
- ChatGPT
- Claude Sonnet
project: []
series: ''
source: https://www.youtube.com/watch?v=TZE33qMYwsc
speaker: The Pragmatic Engineer
status: evergreen
summary: 传奇工程师 Steve Yegge 在这次深度访谈中，回顾了他在亚马逊和谷歌的职业生涯，并深入剖析了他著名的“平台之怒”檄文背后的故事，揭示了两家科技巨头在平台战略和企业文化上的根本差异。Yegge
  还分享了他对当前科技面试流程缺陷的看法，并阐述了 AI 如何颠覆软件开发，让他重返编码一线。他详细解读了“Vibe Coding”这一新范式，并对开发者在 AI
  时代的未来角色和必备技能提出了极具前瞻性的见解。
tags:
- developer-productivity
- development
- strategy
- tech
- vibe-coding
title: Steve Yegge 深度访谈：从谷歌平台之怒到 AI 时代的 Vibe Coding
---
### 访谈开场

Stevey 的平台檄文之所以广为流传，是因为它对谷歌提出了非常精彩的批评，同时也极其真实地描绘了亚马逊，包括 Jeff Bezos 根本不关心你今天过得怎么样的那一面。

> 他现在依然如此。

> 你是不是一直都在写这类东西？

我当时真是受够了。我在那儿待了 6 年，却仍然无法从任何人那里得到一个平台。我快被逼疯了，然后，一瓶红酒下肚，我便把所有实情都说了出来。

> 但事后看来，你当时其实是对的。

> 我说的那些全都对了，但他们从未道过歉。

Steve Yegge 因其在软件工程领域的写作和“咆哮”而闻名。他的博客文章《Get That Job at Google》曾被谷歌人力资源部门用于招聘长达 15 年之久，而他十年前写的《Google Platforms Rant》至今仍在业界被广泛引用。Steve 在亚马逊工作了 7 年，在谷歌工作了 13 年，现在在 Source Graph 从事 AI 工具的开发。在这次与 Steve 的难得对话中，我们涵盖了那篇臭名昭著的谷歌平台檄文，以及为什么 Steve 认为谷歌在构建平台方面仍然很糟糕。我们还谈到，为何 AI 工具让 Steve 重新“出山”，回归技术和编码领域；为什么 Steve 认为更多的开发者应该与 AI 一起进行“vibe coding”；以及许多其他有趣的话题。如果你对 AI 工具将如何改变科技公司的运作方式、我们开发者如何跟上潮流，或者为什么像谷歌和亚马逊这样的科技巨头的核心 DNA 在 20 多年来似乎变化甚微感兴趣，那么这期节目就是为你准备的。

### “在谷歌找到工作”与面试的真相

> G, 感谢再次邀请我。我第一次接触到你的博客，是那个叫做《Stevey's Blog Rants》的博客吗？大约是在 2010 年，因为我读了一篇名为《Get That Job at Google》的文章。那时候我正试图在国外找到第一份工作，也就是在英国的第一份工作。我寻找了最好的准备材料，对我帮助最大的两样东西，一个是斯坦福大学关于如何通过谷歌面试的课程，另一个就是你那篇《Get That Job at Google》的文章。这篇文章让我印象深刻，至今仍然挂在网上。我最近还在推特上说，我觉得即使过了快 15 年，它依然非常中肯。我特别喜欢其中一点，你提出了一个重要的观点：即使你没有拿到 offer，你可能仍然有资格在那里工作。所以，完全不要让这打击到你的自尊。是什么促使你写这篇文章的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">G, thanks for having me again. So, the first time I ever came across your blog, it was was was it Stevey's blog Rants? This was around 2010 because I read this article called Get That Job at Google. Back then I was trying to get my first job outside of uh abroad basically the first first job in the UK and I looked for the best preparation materials and the two things that helped me most was a course at Stamford about cracking the Google interview and your article get that job at Google and what really stuck with me this article is still up there and I just tweeted recently that I I think after like almost 15 years it's still very relevant. One of the things I really liked is is you put this important takeaway is if you don't get an offer, you may still be qualified to work there. So, don't don't blow your ego at all. What What motivated you to write this article?</p>
</details>

被一堆地方拒绝了。不，说真的，我很多朋友都被拒绝了，但我知道他们很优秀，对吧？所以我看到了那些**假阴性**（False Negatives: 指的是合格的候选人被错误地淘汰）案例。因为公司非常害怕**假阳性**（False Positives: 指不合格的候选人被错误地录用），而他们是谷歌，他们有资本拒绝任何人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Getting turned down by a bunch of places. No, I you know, it's true that actually a lot of my friends got turned down and I knew they were good, right? So I saw the false positives or sorry false negatives um because they were so scared of a false positive and they just they were Google and they could just turn people away.</p>
</details>

> 是的，拒绝优秀的人才。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Turn great talent away.</p>
</details>

这是 2008 年的谷歌。那时他们刚上市不久，是当时最炙手可热的公司。我 2005 年就加入了。到我写那篇文章的时候，我已经在那里面试了三年，我知道需要什么。而且我认为在过去的 15 年左右，情况并没有太大变化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">This this is Google in in 2008. So like this was they barely went public. They were the hottest thing you What did I say? I joined in 2005 actually. You joined in 2005. Yeah. So I by the time I wrote that I had seen three years of interviewing there and I I knew what it took. Right. And I don't think it's changed that much in the last 15 years or whatever.</p>
</details>

### 面试反循环：运气也是实力的一部分

> 你在文章中写到了一个叫做“面试反循环”（interview anti-loop）的东西，在那之前我从未听说过。它是什么？现在还存在吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And and one thing that you wrote about is this thing called the interview anti-loop, which I never heard about until then. What What is it? And does it still exist?</p>
</details>

那是我编的，但它确实是我观察到的一个现象，而且大家都知道。那篇文章里，这一点是招聘和人力资源部门有点担心我发表的。我说，如果我们不谈这个，那写这篇文章就没意义了，对吧？让我们坦诚一点，这会给我们带来信誉。我认为最终它确实做到了。你看，你完全可能因为运气不好，偶然碰到了公司里那六个在所有技术问题上都与你意见相左的人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, I made it up, but I mean, it's it's a phenomenon that I observed that everybody knows about that uh it was the one thing in that post that recruiting and and HR were a little a little, you know, I mean, worried about me publishing it. And I was like, well, there's no point in doing the post if we don't talk about it, right? Let's let's just be it'll give us some credibility. Yeah. And I think it did ultimately, right, which is totally look, you could just get unlucky and accidentally get the six people at the company who just disagree with you the most on everything technical.</p>
</details>

> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah.</p>
</details>

就是运气不好而已。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. And it's just like just bad luck.</p>
</details>

> 事实上，我认为很多科技公司都有这个政策，或者至少直到最近都还有。他们允许你在 6 个月后重新申请，正是出于这个原因。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, I think a lot of tech companies have this policy or at least used to have it until recently. Maybe they'll do that. You can reapply after 6 months exactly for this reason.</p>
</details>

是的。我认识好几个人多次重新申请谷歌。我认识的一个家伙，在第五次尝试时成功了，之后晋升得非常快，一路高升。他显然是一个假阴性案例，只是花了好几次尝试才进去。很多人读了那篇文章后会有一个非常关键的批评，他们会说：“哦，如果进谷歌或 Meta 需要这样，那我的技能可能还不如面试官的运气重要，我不想这么干。”我真的很欣赏你没有保留，实话实说。但对于那些认为这不公平、不是精英主义的人，你怎么看？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yep. And I knew a bunch of people who reapply to Google multiple times. One uh one guy I knew uh got in on his fifth attempt and then went on to get promoted really fast and rise up the ranks and everything. He was very obviously a false negative, but it just took a bunch of tries to get in. So, a super critical criticism that a lot of people who read that article have is like, well, oh, if it if this is what it takes into Google or Meta or whatever, which is, you know, it's it's my my skill not might matter as much as the interviewers, I I don't want to do that. Like, I really appreciate that you just like you you didn't hold back and you just kept it real. But what is your take on on people who are like, well, that's not fair. It's not meritocracy, that kind of stuff.</p>
</details>

你知道，面试并不是一个很好的信号。我理解他们的观点。事实上，在我职业生涯的几个阶段，我都有点放弃面试了，就说“你们来做吧”。有很多人认为自己非常擅长面试，他们觉得自己知道怎么做好。然而，谷歌的统计数据显示，他们做了很多很多统计分析，发现你的面试得分与你是否能拿到 offer，以及你拿到 offer 后是否表现出色之间，并没有太大的关联。所以，我对这个过程有点失去信心了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You know, interviewing is is not really a very good signal. I I empathize with their viewpoint. I in fact at at several points in my career, I've sort of kind of given up on interviewing and just said like you you guys do it. You there's a lot of people who think they're really good at it and they think they that they know how to do it well and so on. Even though the statistics at Google, they ran many many statistical analyses and found that there isn't really a lot of correlation between uh you know how you score and whether you get an offer and whether you get an offer and whether you do well and so on. And so uh I kind of lost faith in the process a little bit.</p>
</details>

我注意到，我最近为一个在 Anthropic 面试的朋友做了推荐人。我接到了一个常规的推荐电话，对方是招聘经理，而不是招聘专员。招聘经理和我聊了至少 40 分钟，深入挖掘了所有在面试中无法察觉的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I noticed that I was a referral I was a reference I should say for um for a buddy of mine who was imply who was applying at anthropic interviewing recently right and I got a call right just a regular reference call reference call. Yeah and and the person was the hiring manager not like not a recruiter and the hiring manager talked to me for probably at least 40 minutes digging into all the things that you don't pick up in an interview. Yeah.</p>
</details>

> 是的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right.</p>
</details>

因为他像我们一样认识到，面试是一个非常有缺陷的过程。公司必须在投入精力寻找优秀候选人和评估的准确性之间做出权衡。这是一个取舍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">because he recognized just just like we do that that it's a interviewing is a is a really flawed process and it's a trade-off that the company has to make between sort of like effort that they expend trying to find good candidates and um being being really accurate in their assessments. That that's a trade-off.</p>
</details>

### 面试形式的演变与困境

> 有趣的是，有人说这不公平，也有人批评编程面试、**LeetCode**（一个知名的编程练习和面试准备网站）等等。他们会问：“为什么这些公司不能直接让我干活试试呢？”然后，剧情反转，现在有些公司真的这么做了，比如 Linear 和一些品牌足够强大的公司。他们会说：“我们会付给你日薪或周薪，你和我们远程工作一周。”当然，缺点是这会占用你一周的时间，人们会说：“那我没法同时面试五家公司了。”我觉得，这里面充满了各种权衡。但现在这确实是真实世界的工作方式了。所以面试形式有一个光谱，就像你说的，最终你只能选择一种“毒药”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And then interesting enough, you know, there is some some people are saying, you know, I guess a lot of people are saying this is unfair. You know, there's also criticism of of coding interviews, elite code, etc. and they're like why can't these kind companies just ask me to do the work and then plot twist some companies are doing that these days like linear uh and some of the formal companies are like who have a strong enough brand they're like we will pay you your like day rate week rate and for a week you will work with us remotely now of course and and it's it's and you know I'm actually talking with the engineer manager was was on my team the first engine manager he's like you can use AI tools like they're immune to everything because you're actually actually doing the work now the downside side is it's a week of your life, right? And people are like, well, I can't interview at five different places. And I feel, you know, there's all these trades. I thought, well, yeah, but now it is real world, right? So, there's this spectrum of interviews. And as you said, like in the end, just I guess pick your poison, right?</p>
</details>

没错，没错。听着，老兄，我在这行干了 30 到 35 年了。我见过人们尝试各种不同的方法来改进面试流程。比如，我工作的第一家公司 GeoWorks，要求你在获得全职 offer 之前必须完成一个为期六个月的合作实习（co-op）。他们的招聘标准可能是我见过最高的，后来他们被亚马逊收购了，亚马逊对他们的招聘标准也感到震惊。

<details>
<summary>V/Hide Original English</summary>
<p class="english-text">That's right. That's right. And I know I look, man, I've been in the industry for 30 35 years. I've seen people try all sorts of different variations on trying to improve this. Uh like, uh, the first company I worked for required you to do a six-month co-op before you could get a full-time offer there. Geo Works. GeoWorks. and they had probably the highest hiring bar I've ever seen and uh and they got acquired by Amazon and Amazon was just blown away by their hiring bar.</p>
</details>

> 事实上，我们应该提一下，我想你我都见过，这个行业里有一个公开的秘密：如果你去谷歌、Meta 或微软等大公司的网站，你不会看到招聘软件开发工程师（一级）的广告，因为他们所有的这些职位都通过实习生来填补。所以实习实际上是一种招聘运作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In fact, we should probably mention I mean I think you and me have both seen this but there's this like open secret in the industry where if you go to the website for like Google Meta a bunch of big tech even Microsoft you're not going to see software development engineer one advertised because they fill all those up with interns. So the internship is actually a recruitment operation.</p>
</details>

是的，大学招聘在这个行业里竞争非常激烈，像微软和谷歌这样的大公司几乎主导了市场。他们有资源与学校建立各种关系，所以他们能招到最顶尖的人才，填补入门级职位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It is it is it's it's a really cutthroat uh college hiring is super cutthroat in the industry and the big companies like Microsoft, you know, and Google, they sort of dominate it. They have the resources to build all the relationships with the schools and and it's Yeah. So they they get the cream of the crop, you know. Yeah. And and then they they fill up an entry level.</p>
</details>

我为任何选择去创业公司的实习生感到骄傲。真的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm really proud of any intern that goes off to a startup. Really?</p>
</details>

> 我最近刚和一个人聊过，她同时拿到了微软和谷歌的返聘 offer。她和微软的导师聊了聊，那位导师很好，他说：“你看，你可以去大公司，但在创业公司，你能学到一套完全不同的技能。”她思考了很久，最终冒了险，去了 Koda，现在她在 OpenAI。我认为那段经历对她帮助很大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I actually just talked with uh someone she'll she'll be on the podcast. She had returned offer from Microsoft and Google and she talked with her mentor at Microsoft. It's it's a good mentor and the mentor was saying like look like you you can do big tech but like with startups you have a very different skill set and she thought about it for a long time and in the end she took a she took a risk and she went to KOD and she's now at open AI actually but I think that experience helped her but and she talked through her her mentality and I was like wow like she sounded like a like a wise experience person and yeah I did not expect it cuz you know it was like it was paved and</p>
</details>

我也看到很多这样的情况。现在的大学生很精明。他们知道事情变化很快。事实上，我们谈论的所有事情，甚至是我在那篇关于在谷歌找工作的博客文章中谈到的许多看似永恒的东西，现在作为一名软件工程师找工作都变得非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I see a lot of this too. I mean uh college kids are savvy these days. they they they know that stuff's like really in flex and in fact all the stuff we talked about all even many of the things that we talked about in the blog post that seemed timeless about getting a job at Google uh getting a job is just hard as a software engineer right now</p>
</details>

### 招聘委员会的惊人实验

> 另一件让我对这篇文章产生共鸣的是，你写道：“当你从一家科技公司拿到 offer 时，你只是碰巧侥幸过关了。”当时我从外部看并不太相信，但现在我自己也找过工作，做过招聘经理，发过很多 offer。那些进来后觉得“我面试表现超棒”的人，实际上，在我在 Uber 担任招聘经理的大约 100 次面试中，只有两次我们有多于一个人给出“双赞”（double thumbs up）。其余的都是赞成和反对的混合意见，然后我们做出决定，而那个决定很可能走向任何一个方向。所以现在我真的理解了，我觉得这是从外部很难相信的事情之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">the other thing that really resonated with this article is as you wrote I'm going to quote it when you get an offer from a tech company you just happen to squeak by and at the time when I read it I I didn't really believe it from outside but now that I I've also you know I've I've gotten jobs I've I've a hiring manager and and made so many offers. You know, people who are coming in and they're like, "Oh, I smashed the interview." Actually, like out of maybe 100 interviews roughly that I'd been the hiring manager at Uber, there was like two that was like we had more than one person do a double thumbs up. We had thumbs up, double thumbs up. The rest were were a mix of like thumbs up, thumbs down, and then we came to a decision and it was like it could have gone either way like when we went to the debrief. So like I now really appreciate I I feel this is one of the things which it's hard to believe from the outside.</p>
</details>

最好的故事是当我在谷歌的时候，我在他们的招聘委员会里。这是一个双盲流程，委员会看不到候选人，也不知道面试官是谁，他们只是阅读反馈材料。面试官之间也不会互相影响。有一天，他们对我们做了一个实验。因为我们是最终做出你刚才说的那种“赞成”或“反对”决定的人，而不是面试官。谷歌有一个独立的委员会来审查所有反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean the the best story is when I was at Google I was on their you know their hiring committee which is a blind you know double blind. They don't see the the candidates that they don't know the interviewers who's doing it. They're just reading feedback packets and the interviewers don't bias each other. And one day they didn't experiment with us. Okay. Because we were we were the ones that ultimately made that decision that you just talked about right the thumbs up thumbs down type thing. not the interviewers. Google has a separate committee that actually looks at all the feedback, right?</p>
</details>

招聘人员给我们做了一个练习，他们展示了一堆假设的候选人材料，这些人要么被拒绝了，要么被录用了。他们甚至没告诉我们结果，只是说：“这是一堆候选人，我们来走一遍流程。”我们有他们的反馈。我们审查了所有人，并决定不录用其中的 60%。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And the recruiters uh did an exercise with us where they presented a bunch of packets, hypothetical packets, say of of candidates uh who uh had been rejected or or accepted. Actually, they didn't even tell us. They just said, "These were just a bunch of candidates. We're going to go and do the process on them." We had feedback on them, though. Okay. We went through and we evaluated them all and decided we were going to not hire 60% of them. All right.</p>
</details>

> 你猜到结果了吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Have you figured this one out yet?</p>
</details>

我们审查的是我们自己的面试材料。所以，我们投票决定不录用 60% 的我们自己。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No, not yet. We were reviewing our own packets. Yeah. So, we voted not to hire 60% of ourselves.</p>
</details>

这是一个非常发人深省的认识。接下来的一个或两个星期，是申请谷歌的最佳时机，因为我们就像是说：“来吧，都进来吧。”这太疯狂了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Okay. And it was a very sobering realization. And the next week or two was like the best time to apply to Google cuz we were just like, "Come on through." Right. I mean, it was nuts.</p>
</details>

> 因为 60% 几乎是抛硬币了。抛硬币是 50%，你们只比那好一点点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, cuz 60% is almost a coin toss. A coin toss is 50%. You're a little bit better.</p>
</details>

是的。所以，整个过程在很大程度上也偏向于你是否喜欢这个人。他们说很多决定是在最初的 10 秒钟内做出的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Right. Right. And so, I mean, the whole I don't know the whole process is also so heavily biased towards whether you like the person or not. you know a lot of the decisions made in the first 10 seconds they say and</p>
</details>

### 抓住市场机遇：从谷歌到 Grab

> 2008 年你写了《Get That Job at Google》。十年后，你又写了一篇《Get That Job at Grab》。当时你在 Grab 工作。你可能会认为这两篇文章有关联，但《Get That Job at Grab》更多是关于当时 2018 年的就业市场。你写道：“行业里正在发生一些非常非常奇怪的事情。大概几年前开始，一年前左右愈演愈烈，然后大约六个月前变得完全疯狂。发生的事情是，全球对软件工程师的需求完全超出了供应。我认为这可能是因为我们在过去五年里错过了一次市场调整。”这篇文章基本上是在提醒大家市场非常火热。现在我回头读，有点惊讶，因为你在一两年之前就提到了这一点，当时市场正在升温，即将成为史上最火热的就业市场，我们在 2021 年看到了顶峰。你预见到了这一点，并且向所有愿意倾听你的人发出了信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so you wrote the Get That Job at Google in 2008. And 10 years later, you wrote another one called Get That Job at Grab. You you were at Grab. Now, you would think uh that the these two are are kind of connected, but Get That Job at Grab was an more of an article about the job market at the time in in in 2018. you wrote I I'll quote because something str very very strange is going on in industry. It started maybe a couple years ago and it escalated a lot around a year ago and then what completely crazy about 6 months ago. Uh what happened is this global demand for software engineers completely out of supply and I think it might be be happening because we missed a market correction sometime in the past 5 years. It was the article was basically a bit of a heads up saying the market is really hot. And now that I read it back, I I was a bit of amazed because you wrote this one or two years before anyone mentioned it. It was happening. It was heating up to be the hottest job market and you know it it it we saw it in 2021. It was the peak. You saw this and you were pretty much advertising it to anyone who who was actually listening to whatever you were you're preaching.</p>
</details>

是的。招聘人员是早期预警系统，他们会告诉你市场正在发生什么。因为他们直接与招聘经理接触，而招聘经理又与掌握预算、决定公司发展重点的人接触。所以，如果你和你的招聘网络保持联系，你就能了解趋势。我开始注意到，世界上的工程师快要用完了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Well, I mean you they're they're the early warning system. the recruiters are that that will tell you what's going on with the market, right? Because they're directly in touch with the hiring managers who are the ones who are, you know, in touch with the people with the budgets who are deciding what the company's going to focus on. And so the recruiters, if you're in touch with your recruiter network, right, you know, kind of what the trends are and all that stuff. And so I started noticing that the world was running out of engineers. That's fundamentally what was happening back then.</p>
</details>

> 当时你在谷歌做得很好，却去了 Grab 这家规模不断扩大的公司。我想有些人会想，你为什么离开谷歌去 Grab？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And and I mean you know like you also I think some people were externally it looked a bit surprising because you were you were doing great at Google and you went to this scale up grabb I mean they're growing fast but I think some people are thinking why is TV going after Google to grab why why were you going by the way?</p>
</details>

嗯，你知道，GeoWorks、亚马逊、谷歌在很多方面都非常相似。GeoWorks 更像是设备软件，但仍然很像。我在谷歌的一个朋友当时是 Grab 的 CTO，他叫 Theo Vassilakis。他说：“伙计，这是一场冒险，你得来。”于是我开始和他们聊天，意识到他们正处在一个……我的意思是，整个东南亚当时正经历着一场令人难以置信的生产力大爆发。这看起来很有趣。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Wow. Well well you know I mean GeoWorks, Amazon Google all really similar in a lot of ways. Uh you know GeoWorks was was more like device software but still right. Yeah. uh you know grab grab I had a buddy from Google who was CTO there right Theo and Vas Lacis and he was like man this is an adventure you got to come so I started chatting with them and realized they were on just this I mean that Southeast Asia in general is just this incredible productivity explosion and it just it seemed fun right</p>
</details>

> 结果确实非常有趣，然后新冠疫情把它毁了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and it turned out to be actually really fun it was and then co killed it so you know</p>
</details>

### 市场周期的预测与现实

> 当时，在你那篇《Get That Job at Grab》的文章里，你描述了市场是如何升温的。你写道：“现在，大量的投资者资金催生了许多创业公司，包括一些非常大的公司，它们正在吞噬地球上所有剩余的工程师，现在这是一场战争。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">back back then like at the this get that job job grab you did describe how the market was was was really heating up and you know some things happened co but what what you wrote here is so so now there's a gut of an investor money has creating a lot of startups a lot of startups including some very big ones and they're gobbling up all the energy left on the planet and now it's a fight</p>
</details>

在那之后情况变得更糟了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah it got worse after that</p>
</details>

> 是的，我想问，你如何看待这一切的发展，以及它如何延续到今天？因为我觉得今天我们可能在另一个领域看到类似的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah I I was ask like how how did you see it play out and how does it continue all this today because I feel today we might see something similar in a different area right</p>
</details>

是的，确实有很多投资涌入，而且来势汹汹。在我发布那篇文章后，我们经历了一个巨大的高峰，因为不久之后就是新冠疫情。两年后，我们有了经济刺激计划，这给了每个人很多钱，因此也催生了大量的创业公司。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah I mean there's a lot of investment uh coming in for sure it's coming in hot um right we went through a we went through a huge spike right after I posted that because um shortly afterwards was COVID, right? Two years later, we had the stimulus package and that gave everybody a lot of money and that was like tons of startups appeared because of that.</p>
</details>

然后经济刺激计划和资金消失了，情况开始有点崩溃。接着 AI 出现了，每个人都变得非常不确定，所以市场有点下滑。如果你看看 Indeed 的报告，你会发现自 2021 年或 2022 年的高峰以来，工作岗位已经大幅减少。但我们也看到一场生产力大爆发即将来临，就像一场工作岗位的繁荣。所以市场有起有落。但我认为，在 2018 年那个时候，市场已经显示出上涨的迹象。这就是每个人都想要的，他们想预测未来会发生什么，不仅仅是为了知道买什么股票，也是为了为他们的公司或职业生涯做出正确的决定。而现在，我想你我都同意，情况正在重新好转。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh then the stimulus package and the stimulus money went away and um things started to kind of crash and then AI came out and everybody got really uncertain and so it kind of dipped a little. It's it it has dipped I think if you just look at Indeed's report you can see jobs have dipped pretty heavily since their peak in 2021 or 2022 um but we also see a productivity explosion on its way like a boom of jobs coming so uh it goes up and down but yeah I think uh at the time at at that time in 2018 the market was uh was showing signs that it was going to and that's what look that's what everybody wants they want to predict what's going to happen not just so that they know what stocks to buy right but also So, you know, how to make the right decisions for their companies, right, or their careers. And right now, I think you and I both agree that things are kind of headed back up right now.</p>
</details>

### 平台之怒：亚马逊做对了什么，谷歌错过了什么

> 我第二次接触到你的博客是几年后，那篇《Google Platforms Rant》，它发表在 Google+ 上。那是一份内部文件，但不知何故被设置成了互联网上任何人都可以阅读，Hacker News 立刻就抓住了它。这篇檄文被大量引用，现在甚至在 GitHub 上都能找到。它对谷歌提出了非常好的批评，不仅如此，它还非常真实地描绘了亚马逊，包括 Jeff Bezos 根本不关心你今天过得怎么样。这篇檄文是怎么来的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second time was was a few years later which was this Google platform rant which was published on uh on Google+, right? Yeah. I I so it was it was an internal facing document. Apparently you wrote a lot of these or or just like rants or like meant for Google internal only and somehow it was set to anyone could read it on the internet and hacker news jumped on it and as soon as it went out you know people archived it as well. Uh, first of all, how did this rant came along? Because this rant has been so referenced. It's it's it's now I think on on GitHub as well, Stevie's platform rant because it was a really good criticism of Google. And not just that, but it was a kind of a really really realistic like picturing of of Amazon including Jeff Bezos not giving a [ __ ] about your day which I think you know people were like</p>
</details>

他现在依然如此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">he still doesn't you know.</p>
</details>

> 是的。但它感觉非常真实和原始，很明显它不是为公众消费而写的。你是不是一直都在写这类东西？因为我们只看到了这一篇，但我听说你内部一直有这种实话实说的历史。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. But it it it it just felt very real and raw and clearly it was I understand it wasn't meant for public consumption. But you know like a did you write this these kind of things all the time like cuz we only saw this one thing and and I I've heard that you you had a history of just internally just keeping it really real.</p>
</details>

我内部确实有其他的檄文，但没有一篇像那篇那样具有指责性。我当时是在严厉地批评谷歌，因为我受够了。我在那里待了六年，却仍然无法从任何人那里得到一个平台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had other ones internally. Sure. None of them were quite that um I guess accusatory or whatever. I mean like I was I was really taking Google to task because I was fed up. I'd been there six years and I still couldn't get a platform out of anybody, right?</p>
</details>

> 即使是内部平台？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">like like Google to ship a proper platform that that</p>
</details>

即使是内部，比如代码搜索团队也不想给我一个 **API**（Application Programming Interface: 应用程序编程接口）。这在今天看来是不可思议的，你肯定会给你的东西提供一个 REST API。这是我们今天的思维方式。嗯，在谷歌之外是这样，谷歌内部谁知道呢？他们对内部服务并不热衷，他们只会说：“用我们的产品。”这让我抓狂，彻底抓狂。我疯了。然后，一瓶红酒下肚，我把所有实情都说了出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">even internally like like the code search team didn't want to give me an API. They like it's inconceivable today. You you'd give somebody a rest API to your stuff, right? You just That's the way we think today. Yeah. Well, outside of Google, inside of Google, who knows? They're just not really big on internal um services. They're just like use our product. Yeah. It drove me nuts. Completely nuts. I went nuts. And then a bottle of wine later, I uh Yeah. told him how it was.</p>
</detais>

> 你在檄文开头总结了亚马逊的做法，以及你在那里观察到的一切。你是在亚马逊早期加入的，对吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So, let let's recall some of that that that part cuz I'm I'm going to link it obviously so people can read it. But first, you started summarizing on what Amazon did, right? And and what you observed throughout your time, right? You were early Amazon, right?</p>
</details>

是的，算是早期。我 1998 年末加入的，当时公司还很小。我们在西雅图市中心的一栋三层楼里办公。当时只有一个数据中心，公司很小，但已经有了一种类似邪教的氛围，一种充满活力的感觉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Earlyish. Yeah. I was I got there in late 1998. It was pretty small back then. We were in one building in uh downtown Seattle, just a three-story building. A four-story building of which we occupied three floors, I guess, is it? And uh yeah, uh there was just one data center at the time. And it was just a very small It already had a cult-like sort of feel to it, right? An electric feel.</p>
</details>

> 你说 Jeff Bezos 强制推行平台和 API。有趣的是，每个人都以为有一份真实的备忘录。但 Jeff 不会写备忘录，他只是告诉人们事情，然后事情就发生了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then like you know you said that that basically Jeff Bezos mandated platforms APIs. What did you do there? You know, it's interesting because I everybody thinks that there's a real memo. The memo was I there was Jeff wouldn't write an actual memo, right? Um why the [ __ ] would he do that? Uh he just tells people stuff and it happens.</p>
</details>

特别是客户服务部门，我当时在客户服务工具团队。Bezos 每周都会和我们开会，我们会看客户联系我们的十大原因。他想知道为什么客户还在联系我们，说他们的书被收了三次费之类的事情。第一大原因总是“我的东西在哪儿？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but uh the customer service organization in particular was I I was in customer service tools at the time. I was I may have been running customer service tools at the time. Bezos would sit with us every week in a meeting and we would look at the top 10 reasons that customers were contacting us. Right. He'd want to know why are these customers still contacting us saying they're getting triple charge for their books as a translator? That kind of thing, right? Number one was always where's my stuff, right?</p>
</details>

客户服务部门有一个非常有趣的需求。我以前从未想过，但这可能是 Jeff 对客户服务的偏爱，他想成为地球上最以客户为中心的公司，这引导他走上了强迫人们开放 API 的道路。因为客户服务团队一直在说：“我们无法对我们的网络服务器做任何更改，因为那是他们的代码。我们无法接触到供应链代码，也无法接触到物流中心的代码。我们帮不了客户。” Bezos 就说：“好吧，告诉你们，我会清除任何阻碍这件事的人。”这最终演变成了，你需要向客户服务技术团队提供一些东西，而不是让他们去链接你的代码，试图在某个不同的环境中本地运行它，而他们当时正用着那糟糕的 C++ 代码在做这件事。所以，这就是故事的起源。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Customer service had a really interesting need. I it may have been Jeff, you know, I've never thought about this before, but it may have been Jeff's sort of affinity for customer service, wanting to be the Earth's most customer- ccentric company that led him down this path of forcing people to open up their APIs because the customer service team kept saying, "We can't make any changes to Obos, you know, our web server because that's their code. We can't get into the supply chain code. We can't get into the fulfillment center code. The customer, we can't help the customer." And Bezos was like, "All right, tell you what, right? I'm going to blast anybody standing in the way of that. And what that turned into was, well, you need to provide something to the customer service technical team that's not them going and linking against your code and trying to get it to run locally in some different environment, right? Which is what they were doing with this awful C++ code. So yeah, so that's that's kind of the origin story.</p>
</details>

### 谷歌的工程优势与平台盲点

> 你在备忘录的开头就说，亚马逊在很多方面都做错了。这很吸引人。很明显，你站在谷歌这边，即使你在抨击谷歌，但你的备忘录给人的感觉是：“嘿，我们应该比亚马逊更好。这是他们做得更好的地方，而且并不难，我们只需要做好，我们就会更强。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You you this is how you started your memo. So that that was actually fascinating to read. I think it was clear that you were you were on Google's side, right? Like even though you're trashing Google, it it it very clearly came through that you actually like wanted to like shake things up like hello like like the memo when I read it felt like hey like we should be better than Amazon. Here's all the reasons and here's the things that they're doing better and it's not that hard. We we we just need to be do that well and then we will be better, right?</p>
</details>

我觉得我们擅长其他所有事情。谷歌在很多亚马逊完全不懂的事情上表现得非常出色。亚马逊花了很多年才在很多方面赶上谷歌。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean, it made sense, right? Yeah. And I I just I just felt like we were good at everything else. We were good at a lot of stuff. Google was extraordinarily good at a lot of things that Amazon had no clue how to do really. And it took Amazon years to catch up to Google in a lot of things like</p>
</details>

> 那么，谷歌真正擅长的是什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, let's talk about that. What were the things that Google was just really good at?</p>
</details>

谷歌有一个叫做 Chubby 的锁服务。这是一个分布式锁服务，实现起来并不容易。我们谈论的是 Paxos 算法的十倍难度，要确保它一直稳定运行。它的可用性达到了七个九（99.99999%），基本上是每十年只有 30 秒的停机时间。这是一个非常可靠的服务。五个九已经很难达到了，七个九简直是疯了。这只是一个例子。还有早期的 Bigtable，他们为每个人提供了基本上无限的 NoSQL 存储，并带有相当不错的查询功能。还有 MapReduce 基础设施，谷歌发明的。等等等等。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like Google had one service called Stubby. I think I even mentioned it in the post called Called uh called Stubby or sorry Chubby. Chubby was the locking service. Chubby and Stubby. They went together. The locking service. Yeah, the locking distri a distributed locking ser. Those are not easy to implement. Okay. We're talking, you know, Paxos times 10, you know, make sure the thing stands up all the time. It had seven nines of availability, which is Yeah. Yeah. It was like basically 30 seconds of downtime every 10 years. Oh, okay. It was a very reliable service. Oh wow. Okay, that was one example. Five nines is hard to get to. Amazon seven. Yeah, five is almost insane. Seven is just like what? So that was just one example. Big table early on they had like free basically like unlimited no SQL storage with some pretty good query facilities for everybody and the map produce infrastructure. Google invented it, you know, and on and on and on, right?</p>
</details>

他们解决了很多非常硬核的工程问题，解决方式令人难以置信。我有时看到他们做的一些事情，会拍自己的额头，心想：“我怎么没想到这个？”我看到谷歌的 **RPC**（Remote Procedure Call: 远程过程调用）协议，现在叫 **gRPC**，当时叫 Protocol Buffers 和 Stubby。你一看就会觉得：“哇，这是一个向前兼容的协议。我可以添加东西而不会破坏它，但它又是二进制的，性能很高。”它很美。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So like really really good hardcore engineering problems solved in a in a in a like way that is like just tough tough to do. I was very impressed. I I slapped myself like my forehead sometimes when I was like I'd see some of the stuff they did. I got there and I'm like why didn't I think of this like I had this game that I had a custom RPC protocol when I looked at Google's which is now gRPC. It was called protocol buffers and stubby back then. You look at it and you're like oh wow it's a forward compatible protocol. I can add stuff to it without breaking it but it's binary and high performance and it was beautiful. It is beautiful.</p>
</details>

他们很多事情都做得非常好，但平台却做得一塌糊涂。这不属于他们的 DNA。他们就是不理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Surprised no more people don't use it to be honest. So yeah, they did a lot of things really well, but they didn't do platforms well at all. It wasn't part of their DNA. They just didn't get it.</p>
</details>

> 内部平台和外部平台都不行吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And and it was they didn't do internal or external or neither.</p>
</details>

都不行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Neither. Neither. Neither.</p>
</details>

### 檄文的余波与 Google+ 的溃败

> 那么你写了这篇檄文，它在内部被传阅，然后泄露到了外部。它是否达到了那种震动的效果？这件事的影响力有多大？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then so you wrote this rant which again like I think if you're listening to this you need to read that rant that it is like one of the best things I've read. It's also very entertaining by the way. Um what was the the impact? Cuz obviously you sent it internally, it now leaked externally. So clearly you know people were making fun of fun of Google. Did it achieve that that shakeup effect? And and you know, how high did this thing get? Like I'm pretty sure it must have gotten pretty high.</p>
</details>

谷歌有一个非常开放的文化，所以在下一次的 TGIF（Thank God It's Friday，谷歌标志性的周五全体会议）上就被提出来了。我记得当时负责我们数据中心的 Ben 站起来说：“嗯，我们都读了那篇檄文。”所以他们觉得很有趣。但是 Vic Gundotra（时任 Google+ 负责人）很生气，他真的非常非常生气。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Well, I mean, Google had a very open culture, so it got brought up at the next TGIF, right? Thank Thank god it's Friday, right? It's Google's iconic Friday meeting. It's like all hands-ish. I remember uh Ben, the guy that was in charge of our uh our fulfillment center, not filling centers, sorry, our our data centers at the time, he was uh he stood up there and said, "Well, you know, we all read the rant." Uh, so you know they got a kick out of it, right? But you know, Vicandotra was pissed. I mean, he was really really mad, right?</p>
</details>

因为我等于告诉他，他的孩子长得丑，而且是用非常非常大声和公开的方式，并且我还是用他那个丑孩子（Google+）来做的这件事。我称 Plus 很丑。他当时正极力争取公司的最高职位，他在 Larry Page 心中种下了恐惧的种子，不停地说：“Facebook 会杀了我们，Facebook 会杀了我们。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Because I had like told him he had an ugly baby and very very very loudly and publicly and You know, and uh and I had used his ugly baby to do it. This this was a developer saw google.com baby or or something else? No, Google Plus. Oh, Google+. I called Plus ugly. Right. Yeah. and you know and he was like uh he was really gunning for the the head spot at the time and he had planted the seed of fear in Larry Page. He was like Facebook's going to kill us. Facebook's going to kill us. They're going to kill us. Right. We had to have a Facebook</p>
</details>

那篇著名的檄文实际上是我精心策划的 11 部分系列文章的第二部分。我从未完成它，因为我不小心把第二部分公开发布了。其影响之大，让我有一段时间都像是在躲藏。但我当时确实在逐个维度地剖析 Plus，而平台只是它失败的维度之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">which was stupid for many reasons. Some of Oh, so I I I I'll tell this again. I'll I'll say this again. That that blog rant that that famous rant was actually part two of an 11-part series that I had meticulously planned out and I never finished because I accidentally published the second one externally. And the the the implications were actually so big that I was kind of like in hiding for a while. But yeah, no, I was actually picking apart plus dimension by dimension and platforms was just one of the dimensions where it was failing.</p>
</details>

> 但事后看来，你其实是对的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But you were actually right in hindsight.</p>
</details>

我说的所有事情都是对的，但他们从未道过歉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I was right about all of it, but they never said sorry.</p>
</details>

### 巨头的变与不变：亚马逊的进化与谷歌的停滞

> 这么多年过去了，你离开了亚马逊和谷歌。你认为这两家公司发生了怎样的变化？又在哪些方面没有改变？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so now looking back so many years later, you know, you've left Amazon like I don't know like like 10 plus years, even more. Same with Google. How do you think Amazon 20 years? Yeah. How do you think both Amazon and Google have changed? But also, in what sense have they not changed?</p>
</details>

我认为亚马逊的变化比谷歌大得多。你是第一个问我这个问题的人，所以谢谢你。亚马逊在几乎所有可能改进的方面都取得了巨大的进步。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think Amazon's changed way more than Google. You're the first person ever to ask me this, so thank you. Amazon has improved dramatically in almost every possible way that you could improve.</p>
</details>

> 真的吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Really?</p>
</details>

是的。亚马逊一直以来在执行力上都比地球上任何人都强，但他们找到了一种方法，在做到这一点的同时，避免了我文章开头提到的所有缺陷。现在情况变得相当不错，我认识的在那里工作的人都相当满意，他们做得很好，执行力依然很强。总的来说，这是一家能做出正确决策的公司，就像苹果一样。当然，他们偶尔也会栽跟头，哪家公司不会呢？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Amazon has always executed better than anybody on earth, but they found a way to do it without, you know, having all of the flaws that I mentioned at the beginning of my post, right? Yeah. Um they've it's really it's it's quite nice now and and people that I know who work there are are pretty pretty satisfied and uh uh they're doing well and they still execute well. They they they're a company that makes good decisions by and large, just like Apple. Of course, they fall on their face once in a while. What company doesn't? Yeah. Right.</p>
</details>

谷歌自我加入的那天起就没变过。故事结束。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Google has not changed since the [ __ ] day I joined. End of story.</p>
</details>

> 最近，谷歌有人问我对谷歌的开发者生态有什么看法。我说：“你想听实话吗？什么开发者生态？”我给那个人举的例子是 Flutter 对比 React Native。React Native 在 Facebook 大约有 10 个全职人员，而 Flutter 至少有 50 个。但你去 React Native 的展示页面，会看到 Meta、微软、亚马逊、Shopify 等大公司的 logo。你去 Flutter 的页面，除了几个谷歌自己的小应用，你看不到任何旗舰应用。初创公司仅凭这一点就会选择 React Native。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, re recently, someone at at Google was was asking me about like what what do I think about Google's developer story? And I said like, do you want to be want me to be honest? I said, developer what? And my example that I showed this person is Flutter versus React Native. Now, React Native is about 10 full-time people at Facebook and and a few a few other uh in the core team and and maybe a few other people from some other companies, maybe like 15 person, but Facebook invests like 10 full-time people. Mhm. And and if you go to the the showcase page of of React Native, which is, you know, where where you show you you immediately see logos, Meta, Microsoft, Amazon, I think they they they they have someone big just like flagship flagship apps and then you have oh, and you have Shopify, you have like all all these big companies and you know, you will find the blog post. Shopify says why we went all in on React Native, why we have thousands of of developers working on React Native and and you have all these case studies. Uh, React Native is is inside of Meta's Facebook app. It's inside Instagram. It doesn't run the whole thing, but it's in there, obviously, their ads app. And then you go to Flutter page. Now, Flutter has at least 50 full-time people, so five times as many. And you see some small Google apps on the top. It looks nice, but you scroll down and it's it it looks like an intern made that page. Like, you have some random Chinese app that you never heard about. And then BMW, which is a brand that, you know, it's somewhere in the very bottom. and and like there's no apps there there's no big apps there's no big logos outside of and even even for the Google logos there there there flutter is not used in any of their flagship apps so I'm like startups who are deciding which ones to use just based on this they will go for react native it actually has the street cred.</p>
</details>

谷歌不能承受在移动领域被去中介化的后果。他们不能承受仅仅成为人们可以替换掉的管道。这对他们来说一直是一个生存威胁。不幸的是，Flutter 并非来自 Android 团队，这惹恼了 Android 团队。Android 是一次收购，负责人对他们掌控自己命运、不受他人束缚这一点非常执着。Flutter 的出现威胁了他们作为平台的统治地位，这让他们很生气。自 2017、2018 年我关注这个问题以来，谷歌一直无法调和这些矛盾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah I mean uh look uh Google can't afford to be disintermediated in the mobile space. They can't afford to just become the plumbing that people can swap out and they they there's that's always been an existential threat for them. What happened was unfortunately uh Flutter is not from the Android team and that pissed the Android team off because Android is politics Android was a uh an acquisition and the guy that ran it was uh very particular about uh them being sort of uh in charge of their own destinies and not beholden to anyone else and he kept Android sort of running the way that they ran it inside and they made all the decisions and the buck stopped there. Flutter came along and sort of threatened their dominance as the platform and it pissed them off and Google has been sort of unable to reconcile those things even since 2018 when I was looking at this problem 2017.</p>
</details>

> 我对谷歌最大的疑问之一，以及他们为什么没有改变，是围绕他们的云平台。我问过谷歌的团队，为什么不用 GCP？他们说：“它扩展性不好，没有我们需要的功能。”你怎么能指望成为第二甚至第一的云平台，而你自己的公司却在找借口不用它？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. One of my biggest question marks about Google and why they have not changed this is around their cloud platform. So when I worked at Microsoft well I I like to say Microsoft it was Skype. They just bought Skype and they left us alone. So it it was Skype and then when they turned Microsoft I kind of I was like all right this is I don't like that that much but uh they gave us a mandate. They said you need to use Azure and we were one of the first like we were the new purchase so they just dumped it on us. Azure was not ready and I was sitting next to the data team the Skype data team who had all our our data centers and they're moving over and they're saying it's just a a huge pain. It's like we don't want to do this but but it was for actually Balmer was forcing it on them and and it was this blood, sweat and tears and eventually they move but but what I've seen is like over time you know now when I talk with with teams at Microsoft like what are you guys using? Obviously they're using Azure or Bing might not be using it but it's AWS is using AWS and then I talk with teams at Google what are you guys using or like hold on why are you not using GCP? Well, it doesn't scale. It doesn't have the things we need. And like how can you be gunning to be number two or or one day maybe number one cloud platform if your own company comes up with excuses? And I I never understood.</p>
</details>

我认为这都是关于谁在市场营销和说服人们他们在使用自己的云方面最成功。但他们目前都在自吹自擂。亚马逊不用 AWS。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think it's all just who's been the most successful at marketing and convincing people that they're using their own clouds. But they are all all currently huffing their own farts. Amazon doesn't use AWS. Sable ain't AWS. I mean like right for the retail side, for the ad side, I mean like of course they they want you to use AWS, but all the core the core core core stuff and they haven't migrated, man. So like it's all fru as far as I'm concerned, right? It's all like</p>
</details>

> 谷歌的障碍是无法逾越的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the hurdles for Google were insurmountable.</p>
</details>

公平地说，他们的基础设施比其他任何东西都大得多、复杂得多。可以说谷歌云运行在谷歌的基础设施之上，而这个基础设施确实是世界上规模最大的，比亚马逊还大。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so maybe this is fair by the way. So so maybe this criticism is not entirely fair because what I understand is their infrastructure is way bigger and more complex than like anything else. It's sort of fair to say that Google's cloud runs off top on top of Google's infrastructure which which actually does scale the biggest in the world bigger than Amazon.</p>
</details>

我不认为谷歌理解开发者。我认为他们从来没有理解过。这与他们在平台方面的盲点密切相关。如果你不理解平台，那是因为你不理解开发者。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I don't I just don't I don't I don't think Google understands developers. I don't think they ever did. It's it's it's it's really closely related to their their blind spot around platforms, right? If you don't get platforms, it's because you don't understand developers.</p>
</details>

### 为 AI 重返编码一线

> 你退休了一段时间，然后因为 AI 又复出了。是什么让你重返这个领域的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. You unretired you retired for for for some time and then you unretired because of well initially source graph but but then also AI. what what what made you kind of come back into the game?</p>
</details>

这不是一个非黑即白的事情。我一直在逐渐地“复出”。一开始是因为我真的待不住了，很想和一些人一起工作，所以最终去了 SourceGraph。那是我熟悉的领域，就像是为其他人做的谷歌代码搜索。然后不久，AI 出现了，那就像是下一个台阶，我想：“哦，天哪，也许我最好再回去写一段时间代码，因为这看起来真的很不一样。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's not a binary thing. I've been gradually unretiring if that makes any sense. Um and it's because uh at first I was like, you know what, I'm I'm really climbing the walls. I really want to just go work with some people. And so that's you know that's where I wound up at Source Graph. Like that was familiar ground, right? That was Google code search for for everyone else. Yeah. Yeah. And then shortly afterwards the AI AI showed up and I I was like that was like the next step up is oh man maybe I better get back into coding again for a while because this looks really different.</p>
</details>

> 有趣的是，三年前我们聊的时候，你是 SourceGraph 的工程主管。然后我看到你写文章说要辞去工程主管的职务，回去写代码，这并不是我所预期的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, so fun fact is last time we talked about three years ago, you were head of engineering at source graph and actually people told me at source graph you came in, you made some changes which were actually like pretty well received but like you shook up you introduced where people could drop there that kind of stuff. Yeah. And then next thing I know is like, oh, you you wrote this like you write about everything, which you know if we we'll link some more more things, but I I love writing it. But you wrote about like, oh, I'm I'm I'm stepping down as heavy engineering because I'm going back to coding, which was not what I would have expected again from just</p>
</details>

我把这看作是我走出退休的又一步，因为我已经放弃了编码。我觉得不值得了。Kent Beck 也放弃了编码，我很多老朋友和同事都放弃了。现在的环境设置太复杂了，构建一个简单的 web 应用可能需要用 25 个不同的框架，其中很多还相互不兼容。谁想要那样？所以到某个时候，你会厌倦，然后就说：“我受够了，这不值得。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and I view that as a as another step in me sort of coming out of retirement, right? Because I had given up on coding. I just it wasn't worth it anymore. Kent Beck had given up on coding. a lot of a lot of my old buddies and colleagues, right? You know, there's just like environment setup is just over the top these days, right? And, you know, just building a simple web app, you probably have to use, you know, 25 different frameworks, many of which have incompatible competing, you know, whatevers. Who wants that? And so, at some point, you get tired of it and you're just like, I'm done, man. I can't. This isn't it's not worth it. Right.</p>
</details>

AI 完全颠覆了这一点。当 ChatGPT 出来的时候，我就看到了这一点。我说：“哦，哇，看，你可以写一个相当不错的实际函数。”然后当 4.0 出来时，我就能够向前推断，考虑到指数级增长，然后说：“哦哦，它要来了。”所以现在我每个月都越来越兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And AI completely turned that on his head. And I saw it coming as soon as the chat GBT came out. I was like, oh, wow. look, you can write an actual function that's reasonably good, right? And then when 40 came out, then I was able to project forward and with exponential growth and say, uh-oh, uhoh, you know, it's coming, right? And so, so now I'm getting sort of like more and more fired up with each passing month.</p>
</details>

### AI 时代的新角色：初级开发者的消亡与重塑

> 你写了一篇标题很有争议的文章《初级开发者的消亡》。但仔细读就会发现，这更像是一个警钟，告诉初级开发者需要迅速振作起来，因为过去的方式行不通了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One thing that has we've talked a lot in the industry and everyone's talking about it is how AI will first and foremost like I think like experienced developers, we can get there, but how will it impact junior developers? and you wrote this again controversial title the death of the junior developer but interesting enough when you read closer a lot of your articles are like this by the way like there's a title which you think like oh it's it's the end but a lot of them are wakeup calls to me when I read it properly it wasn't like oh there's no more junior developers it was a wakeup call saying hey if you're a junior developer you need to get your your stuff together quickly and ch like like whatever the junior developers before you were it's not going to work for you. So like what what what what does what is it that you've seen?</p>
</details>

你触及了一个非常根本性的问题，它正在动摇整个行业。简而言之，AI 并不容易使用。你越资深，就越有可能注意到它什么时候出错了。AI 会以非常微妙和阴险的方式犯错。即使它们变得越来越聪明，软件总是比它们更庞大，它们仍然会做一些傻事。这自然会偏向于更资深的人。但我们发现，这其实与资历无关，而更多是关于谁能展示出与 AI 良好合作并取得好成果的能力。这可能是任何人，甚至是一个产品经理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Man, you've hit on a question that is just so fundamental and foundational to our industry right now. that's shaking the industry that question you know and the answer is I mean the shortest way you know that I would think about it is um AI is not easy to use and the more senior you are the more likely it is you're going to notice when it's being bad when the AI has become naughty right it's just common sense yeah and the AI is very naughty and and in in very subtle and insidious ways right and even as they get smarter and they are getting exponentially smarter and they will be frighteningly smart within a year they will still I mean software is always bigger than they are right and they will still make silly do silly things and and that and it's just going to bias towards more senior people but it's not really seniority we learned it's nothing to do with junior and senior it's really more about who is demonstrating the ability to work well with AI and get good outcomes in software and that could be anyone who could be a product manager.</p>
</details>

我认为一场大的变革即将来临，角色会发生变化，每个人都会更专注于他们正在构建的东西，而不是谁在构建它。你听说过 Scott Belsky 的“瓦解技术栈”（collapsing the stack）理论吗？有一种观点认为我们过度专业化了。比如谷歌那些资深工程师，他们精确地知道每个 Linux 内核版本的 fuse 文件系统驱动程序是如何工作的。我们不再需要那个了，那很愚蠢，正在消失。所有的专业化都在消失，因为 AI 正在使其民主化。你无法再隐藏那些知识了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I think there's a big shakeup coming where the roles change and and everybody becomes more focused on what they're building instead of like who's who's building it and uh have you have you heard the collapsing the stack stuff from uh Scott Bellski. Basically like there's a line of thinking that we've over specialized and everybody's like incredibly domain expertise specialized and you got these senior engineers at Google who know exactly how the fuse file system drivers work for every version of the Linux kernel, right? Like we don't have that anymore. We don't need that. That's that's stupid. That's going away. But all the specialization is going away because AI is democratizing all of it. You can't hide that knowledge.</p>
</details>

我认为初级开发者的一个新角色将是指导下一层次的非技术或技术相关人员，这些人现在开始贡献代码了。他们将帮助这些人修复安全问题，或者教他们如何向 AI 提出正确的问题，以判断工作是否完成。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I believe this is the new role for junior developers is they're going to be mentoring the next layer down of nontechnical or technical adjacent people who are now starting to contribute PRs, right? And they'll be the ones who are like helping them fix the security issues or whatever else they have with their basically teaching junior developers because they're still trained engineers. Yeah. Right. So they can teach like a UX designer or product manager what are the right questions to ask the AI about your thing to know whether you're done or not yet. Right. You know, give you those kinds of skills.</p>
</details>

### Vibe Coding：新范式下的机遇与陷阱

> 你的新书标题是《Vibe Coding》。你如何定义 Vibe Coding？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so your your new book is the title is vibe coding and it's it's a heated debate if you should even call it vibe coding because of definition so let's start with what what do you define as vibe coding.</p>
</details>

Vibe Coding 就是当 AI 编写代码的时候。这个定义会赢，你不能在口号里加一个“如果”条款。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Vide coding is when the AI writes the code. All right, there's a reason that that definition is going to win. You can't put an if clause in a slogan.</p>
</details>

问题是，它真的能给你带来快感吗？因为编程进入心流状态时可以带来快感。而这些工具，它们就像多巴胺冲击，像老虎机一样，真的会让人上瘾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Look, the question is is it giving you a buzz like for real? Cuz programming can give you a buzz when you get into flow, right? you can get an actual buzz going and you know what it is insanely addictive. Cloud code and friends source graph amp you know try them out because wow they're like a dopamine hit. It's like a it's like a slot machine. They're literally addictive.</p>
</details>

> Kent Beck 告诉我同样的事情，我也体验过。我不再担心会脱离心流状态。这确实让你更有效率。现在我明白为什么 Kent Beck 说在他 52 年的职业生涯中，从未对写代码感到如此兴奋。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I mean Ken Beck told me the same thing and I've experienced the same thing. like I have this side project which I just don't like to touch cuz so I I try to build my APIs on the side and not pay vendors when I I can but it's it's just a hassle and it's somewhere on AWS and it's a hassle to like remember how I I deploy and but I I with with Windsurf like I I had one of I just built a small API on how people can claim perplexity and KAGI codes uh if they're paid subscribers to the newsletter and I connected with an MCP server I connected my database so I can just talk to my database and I asked it like oh how many people have you requested codes and they're like, "Oh, today there's like like the last 10 days like oh 9 days ago there were like 20 30 a,000 2,000 3,000." I'm like, "Hold on." Like what is going on? Like that doesn't look normal. I like can you analyze the patterns? Unusual patterns. And then it it fig it it told me how you know like there's the same email with different cases and I needed to code a fix for this but I was about to have dinner and usually like if I don't have like 30 minutes to code or or an hour it doesn't make sense. I had like 10 minutes and in that 10 minutes I got like a fix done. I went and had dinner. I actually was you know present on a dinner and I came back and I I got back into and in a total of 30 minutes I did stuff that would have taken me like even if I had the hands-on like 2 hours easily and and I felt like hold on I'm no longer worried about like falling out of the flow. So like there there is a lot of new stuff that it it does make make you more productive and you know as an experienced developer like it's amazing and now I understand why Ken Beck is saying in 52 years he's never felt this good about or this excited about writing code.</p>
</details>

人们搞砸了，说这行不通，是因为他们很难理解一个事实：你无法从 AI 那里得到一个“答案”。你所能做的只是与它“共同趋近”一个答案。即使它是一个自主运行的智能体，你们仍然是在一起工作，最终希望能收敛到正确的答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">look let's face it the reason people are screwing this up and saying this doesn't work and I don't understand why AI works and all these stories are BS. It's because they it's very difficult to wrap your head around the fact that you can't get an answer out of the AI. All you can do is converge on an answer together with it. Okay? Even if it's an agent running off and doing things, you're still doing it together and you're going to eventually converge on the right answer hopefully.</p>
</details>

> Simon Willison，Django 的创造者，告诉我这东西很难。在两年半不间断的使用中，他一直在学习。这感觉很矛盾：它感觉如此简单，却又需要如此多的努力。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">my most surprising conversation was with Simon Willis who has been you know the creator of Django he is a super productive uh developer he writes so much code written for AI and he told me that this thing is hard and in two and a half years of non-stop using it. He keeps learning and to me like there's this contradiction like it feels so easy but it's it needs so much work. What is going on?</p>
</details>

这就像一个带着电锯的蹒跚学步的孩子。我告诉你一个原因，来自 Anthropic 的 CISO Jason Clinton。我抱怨 Claude 删除了我所有的测试，然后说：“你的测试现在都通过了。” Jason 告诉我们，Claude 是基于一个奖励函数训练的，但它并没有被训练不去“黑掉”那个奖励函数。所以它会很乐意地去黑掉它。这就是今天的技术水平。你必须对它说：“不，你还没完成。”然后把它送回绘图板。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's like a toddler with a chainsaw, right? Like I seriously Okay, let me tell you why. I'll tell you one reason. This is from Jason Clinton. He's the CESO at Anthropic and he was kind enough to share with us after I whed at Jean Kim's uh engineering leadership conference a few weeks back. I whed that Claude had deleted all my tests and said your tests are all passing now which is true. They passed away like they were gone dead. It deleted it. It deleted them and it's like all tests passed now. And it's like well god damn it, right? I mean, you know, and and so and so, uh, Jason told us, well, what happens is what happened was Claude was trained on a reward function. And it wasn't trained not to hack that reward function. Okay? And so it will cheerfully hack it. And so that's the state-of-the-art today is it will tell you it's done and what you have to do is say, "No, you're not." And send it back to the drawing board.</p>
</details>

### 开发者的新纪元：一场昂贵但不可避免的革命

> 我看到有初创公司在做开发者生产力工具，他们还在纠结是否要衡量 PR 数量。我告诉他们：“你们搞错了。未来的问题不是开发者做了多少 PR，而是他们是否在代码进入代码库之前进行了审查，是否在挑战 AI。”两年后，一个真正高效的软件工程师会是什么样子？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I recently talked with a startup who is doing a developer productivity tool. They're they're launching a new startup and I told them I'm like they're like oh we're thinking of measuring PRs or not measuring it. I'm like like hold on like I think you're doing this wrong. Like if if we're looking ahead like the question is not like if if developers are doing how many in PR is like you will be able to do however many many you want but we need to think about like what will productivity look like cuz now looking at the output of like how much code doesn't tell me anything what what would tell me something is if if I sat next to someone for example are they actually reviewing the code before it goes into the codebase are they challenging this the AI instead of just blindly LGTM you know looks looks good to me and and sending it back and I'm not sure how like you know this is this is going a little bit to engineering leadership but there is going to be this big question of like what does actually I'm going to ask you this like fast forward to two years let's assume these tools evolve or you know they will not be worse but they will be better what do you think a really productive software engineer will look like in terms of what they do not what they're measured just what they do</p>
</details>

Kent Beck 把使用这些智能体比作坐着雪橇从雪坡上滑下：速度飞快，但你并不完全在掌控之中。这就是目前拥抱这项技术的软件工程师的现状，他们每周花费数千美元。这就是为什么本地推理如此重要。Vibe Coding 要想真正可持续，就必须在本地进行。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah first of all I got to share Kent Beck's tobogen analogy he's like he's like using these agents is like being on a sled going down a like a ski slope you're you're going really fast. You're not really in control. You can write, you can steer it. And unfortunately, that is the state-of-the-art right now. That's what software engineers who are embracing this and they're spending thousands of dollars a week, right? Which is why clients going to become so important, why local inferencing is going to so important. The only way for Vibe coding to become truly sustainable is for it to be local.</p>
</details>

> 你说他们每周花费数千美元？我们听到的大多是独立开发者，他们可能不在乎。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm going to stop you there. You're saying they're spending thousands a month. Who who are we? Who's who's who's spending it? Because now I like what what I'm reading is like, "Oh, we're not really going too much over with with like the $100 CL Pro subscription." Maybe it's because it's mostly indie devs, you know, sharing on social media and like corporate devs, they might not just care.</p>
</details>

我个人每隔一天半或两天就会收到 Anthropic 220 美元的账单。这绝对是疯了。我们知道我们的用户花了多少 token。这些智能体是 token 猪。它们通过暴力破解来解决你听过的所有关于 AI 的问题。哦，我幻觉出了一些东西，让我修复它。哦，那也是幻觉，我再修复一次。它们会一直尝试直到做对，而代价由你承担。但这仍然比你自己做快得多。所以你不能不用这种方式编程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I personally get a bill from Anthropic for $220 about every day and a half or two days. It's absolutely insane. We have people using AMP. We know how many tokens they're spending. They're they're token pigs, man. These agents, they they solve problem. All the problems you've ever heard about with AI, they solve by just brute forcing it. Oh, I I hallucinated something. Let me fix it. Oh, that was a hallucination, too. I'll fix it again. And they keep going until they get it right at your expense, but it's still way faster than you could have done. So, you can't not program this way.</p>
</details>

现在在企业中使用这些编码智能体的是 CTO 们。出于某种原因，我们注意到一个模式，CTO 们都明白了。他们理解正在发生什么，也理解他们将面临的可怕的经济权衡：你解雇多少工程师，来为剩下的工程师支付 AI 费用？因为现在它非常非常昂贵。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">No corporate devs. Look, you know who's using these coding agents right now in in corporations? The CTO's for some reason, we've noticed a pattern where the CTOs are all the ones who kind of get it, right? The global network of CTOs, they they get it. They understand what's happening and they understand the terrible, terrible economic trade-off they're going to face, which is how many engineers do you fire in order to pay for the rest of them to have AI? because it's very very very expensive right now.</p>
</details>

### 给开发者的终极建议：立即行动

我能给出的最好建议是：给它们最微小的任务，你能给出的最分子化的、微小的、分段的任务。如果你能找到方法让它更小，就那么做。一次只做一件事，时刻仔细跟踪它们在做什么。然后，对它们最终提交的每一行代码负责。如果你遵守这些规则，你将获得惊人的生产力，而不会造成……但天哪，伙计，我自己已经造成了那么多噩梦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only advice I would give people I I would say look look because our book is 300 pages. How do you write 300 pages about vibe coding? Can it really be that hard? And the answer is Gan and I spent, you know, five months. We wrote the book in a month after spending five months doing deep deep deep dive researching on how do you how how do you push the the LM and vibe coding in different ways and found a bunch of anti-atterns and found a bunch of patterns and found that it's extremely hard. It's non-intuitive. Nobody's born knowing how to do it. It's completely new to humanity to have these sort of humanlike but non-human distinctly different helpers. And and and the best advice that I can possibly give you is give them the tiniest task, the most molecularly tiny segmented task you can give them. And if you can find a way to make it smaller, do that, okay? At a time, keep real careful track with them on what they're working on at all times. And then own every line of code that they ultimately commit. And if you follow those rules, then you'll be astoundingly productive without causing But man, dude, I've already personally caused so many nightmares.</p>
</details>

但这并不容易，而且不会变得更容易。这就是痛苦之处，也是人们正在挣扎的地方。AI 会变得更聪明，它们不会再黑掉奖励函数，但它们会有其他问题。总会有另一个问题。它永远不会准备好到让某个人进来就能“即插即用”的程度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">this is not easy. And it's not going to get any easier. That's the painful part, man. And that's what people are struggling with is the the AIS will get smarter and they won't hack the reward function anymore, but they'll have some other problem. Okay? And there's always going to be another problem. And it'll never be ready enough for somebody to come in and just like it just works.</p>
</details>

> 你对开发者有什么建议来为未来做最好的准备？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So in in those two years uh whether a listener is a less experienced engineer especially if they're an experienced engineer what would your advice be to prepare best to you know like make the most of either being an AI engineer working with these tools figuring them out like what what what is the tactic what is the advice that you give you know the engineers working let's say a source graph you know where you're at who you're around you</p>
</details>

有人在推特上问 Tommy Wiseau：“嘿，我想开始写剧本，我该怎么做？”他说：“开始。”如果你还在说：“哦，我不知道，我还没准备好。”闭嘴。别再抱怨了。现在就去学。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">yeah so you know who what's the guy that wrote the the the movie the Boom. Tommy Wiso, I think that's his name. Somebody asked him on Twitter. They were like, "Hey, man. I want to start writing a screenplay. What should I do?" And he said, "Start, right?" Yeah. I mean, like, for starters, if you're saying, "Oh, I don't know, buddy. I'm not ready." Blah, blah, blah. Shut up. Okay. You're that's that's done. You're done done whining. Okay. Go learn it right now.</p>
</details>

我有幸与 Dario Amodei 私下聊了 30 分钟。我听到了他对不远的未来的未加修饰的看法，而他可以说是世界上信息最灵通的人之一。Dario 对未来的看法比他公开表露的要黯淡一些。他和他的 CISO Jason Clinton 都在发表相当严峻的声明，比如到 2026 年中，将会有持工牌的 AI 员工与你竞争。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had the privilege of speaking with Daario Amade privately for 30 minutes about three weeks ago. uh four weeks ago, he invited me to come chat with him and uh and I got to hear his sort of unvarnished view of the very very near near future from somebody who could arguably be considered one of the best informed people in the world. Okay. Yeah. And Dario, you know, his vision of the future is a little bit more bleak than he lets on publicly. Okay. And he and Jason Clinton, his CISO, are both saying statements that are quite dire like there will be badged AI employees by the middle of 2026 competing with you. Right? basically is the implication there.</p>
</details>

Dario 告诉我：“社会就像一个不可移动的物体，而科技和 AI 是一股不可阻挡的力量。它们将会碰撞，而且会很难看，因为它会比社会愿意被推动的程度更用力地推动社会。”我们已经看到了迹象。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Daario told me, he said, "Look," he said, "Societyy's like an immovable force, right? An immovable object and and and and tech and AI are an unstoppable force. They just won't stop and they're going to collide and it's going to be ugly because it's going to push society harder than society wants to be pushed, harder than society is willing to be pushed." And we're already seeing signs of it.</p>
</details>

所以我的建议是，别再坐着了，现在就去学。现在，现在，现在。开始 Vibe Coding，搞明白它。有很多东西要学，有很多奇怪的直觉你需要培养。很多事情不会像你预期的那样运作。但是，伙计，你现在开始，你就会准备好。因为 Dario 称 2026 年是“终局”（endgame）。他很随意地说出这句话。你明白这有多重要吗？最先倒下的是软件工程师。所以你需要站在最前沿，利用新出现的工作机会，也就是软件工程师 V2，他们使用 AI 完成了不起的事情。你必须成为他们中的一员，否则你将被彻底踢出知识工作的行列。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And so my advice to you is get off your ass and learn it now. Now, now, okay, start vibe coding. Figure it out. There's a lot to learn. There's a lot of weird instincts you're going to have to like learn. A lot of stuff's not going to work the way you expect it to. Okay? But man, you start now and you'll be ready because Daario calls 2026 the endg game. And he says it without a hint of drama. He says it casually. Oh yeah, 2026 is the endgame. You understand? That's how big this is going to be. And the first ones to fall, the first jobs are software engineers, right? So you need to be on top of it to take advantage of the new jobs that arise, which are software engineer V2, which use AI and get amazing things done. You have to be one of them or you're going to get kicked out of knowledge work altogether.</p>
</details>