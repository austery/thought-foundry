---
area: "tech-engineering"
category: technology
companies_orgs:
- Sonar
- Linear
- YouTube
- GitHub
- Microsoft
- Atlassian
- Brex
date: '2025-11-26'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Pragmatic Engineer
products_models:
- GPT-4
- GPT-5
- Claude
- Llama
project: []
series: ''
source: https://www.youtube.com/watch?v=urVf2oNqtXU
speaker: The Pragmatic Engineer
status: evergreen
summary: 本期内容深入探讨了软件工程师必须了解的代码安全基础。嘉宾 Johannes Doss 分享了他从渗透测试到代码安全专家的经验，剖析了安全责任“左移”至开发者的行业趋势。文章详细区分了代码安全与应用安全，列举了SQL注入、密钥泄露等常见漏洞，并介绍了SAST、SCA等关键工具。此外，还重点讨论了AI对代码安全带来的双重影响——既产生了提示词注入等新风险，也为自动化修复提供了可能，强调了代码质量与安全的紧密联系。
tags:
- code
- security
- threat-landscape
title: 代码安全之道：从渗透测试到AI时代的新挑战
---
### 引言：软件工程师应知的代码安全基础
每个软件开发者都应该了解哪些代码安全基础知识？首先，要真正了解并理解你的代码在做什么。这听起来可能有点傻，也很明显，但这正是安全专家在你的代码中发现安全问题的方式。例如，我可能会设置一个MCP服务器，声称它在做某件事，但实际上它在秘密地做另一件事，并且在本地运行。随着AI代理的出现和更多控制权的下放，出现了一种新的威胁。这不仅仅关系到你使用的依赖库或你机器的整体安全，还关系到要确保你使用的代理正在做正确的事情。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What are code security basics that every software developer should know? Really know and understand what your code is doing. Maybe that sounds a bit silly and obvious, but that's how security experts find basically security issues in your code. I'll set up an MCP server that says it does something, but secretly it does something else. It runs locally. Boom. with agents and giving away more control. There is a new threat here because it's not just about the dependencies you're using or your machine security in general, but also making sure that the agent you're using is doing the right thing.</p>
</details>

AI如何改变代码安全乃至整个安全领域？今天，我们作为软件工程师，应该了解哪些关于编写安全代码的知识？为了回答这个问题，我请教了Johannes Doss，他拥有20年的安全专家经验，目前是Sonar公司的代码安全副总裁。在本期节目中，我们将涵盖所有软件工程师都应了解的代码安全基础知识；值得了解和使用的常见代码安全工具，如静态应用程序安全测试和更高级的工具，如软件成分分析；AI编码助手如何引入新风险以及我们能做些什么，等等。如果你是一名希望让代码更安全的软件工程师，这期节目就是为你准备的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">How do you think AI is changing code security and also security in general? Today, what we are seeing is as software engineers, what should we know about writing secure code? To answer this question, I turn to Johannes Doss, who has been a security expert for 20 years and is currently the VP of code security at Sonar. In today's episode, we cover code security basics all software engineers should know of. Common code security tools worth knowing of and using like static application security testing and more advanced tools like software composition analysis. How AI coding assistants introduce new risks and what we can do about these and more. If you're a software engineer looking for pointers on how to make your code more secure, this episode is for you.</p>
</details>

### 从被黑客攻击到网络安全专家
**The Pragmatic Engineer:** Johannes，欢迎来到播客。

**Johannes Doss:** 谢谢，很高兴来到这里。

**The Pragmatic Engineer:** 我们今天来聊聊网络安全。我想了解一下，你是如何以及何时进入网络安全领域的？

**Johannes Doss:** 大概是20年前吧。我记得我被黑了，我的电脑被感染了。我记得当时是Sasser蠕虫病毒。我当时非常沮ver，但同时也非常好奇，别人怎么能进入我的电脑？这引导我开始在学生时代玩一些安全相关的东西，比如木马之类的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** So, Johannes, welcome to the podcast.

**Johannes Doss:** Thank you. A big pleasure to be here.

**The Pragmatic Engineer:** So, we're going to talk about cyber security today. I wanted to get to know how did you get into cyber security and when was this?

**Johannes Doss:** It must have been like 20 years ago. I remember I got hacked basically. My computer got infected. I think it was the SAS one back in the days and I was super frustrated, right? And then also super intrigued like how could someone get access to my computer? And so that led me into you know playing with security things like Trojan horses and that stuff at school time.</p>
</details>

后来我去了德国的波鸿大学，那里可以学习IT安全，这让我很兴奋。我们在那里参加“夺旗赛”（Capture the Flag）比赛，那是一种黑客竞赛，大学团队在隔离的网络环境中相互攻击以获取积分。我当时对参加这些比赛非常着迷，这对我来说是最好的学习经历。这之后，我进入了专业的**渗透测试**（Penetration Testing: 模拟黑客攻击以评估计算机系统安全性的方法）领域，编写工具来辅助漏洞挖掘。这最终促成了一家初创公司的诞生，后来被我今天所在的Sonar公司收购了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And um and then I moved to Bh in Germany where you could study it security and that was exciting. And so they played capture the flag competitions, right? Those are hacking competitions where university teams connect online in an isolated environment and they try to hack each other to to to get points. And I got really obsessed playing those competitions and and that was the best learning experience for me you know and this led then into you know me getting into professional penetration testing, writing tools to assist the the vulnerability hunting and and this led then into a startup which got acquired by Sona where I am today.</p>
</details>

### 揭秘渗透测试
**The Pragmatic Engineer:** 我们该如何理解渗透测试？

**Johannes Doss:** 渗透测试基本上就是模拟一次攻击。一家公司会雇佣你作为“黑客”，你必须在给定的时间和应用范围内找出漏洞。如果你平时就以参加黑客竞赛为爱好，那么将这项技能商业化是很自然的一步。在比赛中你是为了赢得积分，而作为学生，你可以通过这种方式赚钱，以专业人士的身份寻找安全问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** How can we imagine penetration testing?

**Johannes Doss:** So penetration testing is simulating an attack basically right so you are kind of like a company hires you as a as a hacker basically and you you have to find out vulnerabilities in a given you know time scope and and and scope of the application that you should test and it was just like a natural move if you do that as a hobby with the hacking competitions right where you just do that for winning points in games to do then you know kind of like earn money with that as a student to to also look for security issues as a professional.</p>
</details>

**The Pragmatic Engineer:** 我理解现在公司可以雇佣渗透测试团队，但你个人做过专业的渗透测试吗？

**Johannes Doss:** 是的，当然。我作为自由职业者做了好几年，为一些大公司服务，寻找他们存在的安全问题。通常是通过利用他们运行的软件应用中的漏洞来侵入他们的网络。然后我会记录下这一切，但不会再进一步，不会破坏任何东西或做任何恶意行为，而是报告说“攻击者可以这样进入”，以便他们能够修复。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** and I I understand that you know like yes you can h now hire penetration testers right as as the company I can hire teams that do this but did you do some of this did you do professional penetration testing?

**Johannes Doss:** Yeah. Yes, absolutely. For a couple of years doing this as a freelancer and for big companies basically right looking for security issues they they have and always trying to to get into their network typically by by exploiting vulnerabilities and software applications they're running and then documenting this right not going further not destroying something doing something malicious but basically reporting then this is how an attacker could get in so they can fix it.</p>
</details>

**The Pragmatic Engineer:** 当一家公司说“来对我们进行渗透测试吧”，这个过程是怎样的？他们会给你系统的访问权限，还是你需要在完全不知情的情况下进行？

**Johannes Doss:** 有不同类型。有**黑盒渗透测试**（Blackbox Penetration Testing: 在不了解系统内部结构的情况下进行的测试）和**白盒测试**（Whitebox Testing: 测试者了解系统内部结构和源代码）。在黑盒测试中，你没有任何访问权限，就像一个真正的、一无所知的攻击者。通常你面对一个正在运行的Web应用，从攻击者的视角去审视它，通过使用应用来猜测其背后的代码逻辑，然后试图找出其中的漏洞。你会根据经验判断开发者可能犯了哪些典型错误，并以此为起点，尝试利用漏洞窃取文件、访问数据库或获取其他对业务敏感的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** How does the penetration test look like from when the company says like, "All right, come and penetration test us." How do you actually go around? Do they actually give you access to some of their systems or or you need to just assume no knowledge? How does that work?

**Johannes Doss:** Yeah, the different types, right? So, there's blackbox penetration testing and white box meaning blackbox you don't have access to anything. You you treat it as a real attacker like with no knowledge. Yeah. you you um you know typically you have maybe like a web application running and and you go and look at it from the attacker perspective and and uh play around with the application from the outside trying to imagine basically what could be the code behind that application what could be the code doing that I'm seeing from from using that application and then trying to figure out what could be vulnerabilities here right what could be something a developer forgot to do and by experience you you learn a bit like what are typical mistakes and and then you you go from there. Uh trying to always you know exploit something where you can uh steal files or or get access to the database or something where there is some data something you know that could be sensitive to the business uh that that is then security critical.</p>
</details>

**The Pragmatic Engineer:** 你会带上自己的工具吗？比如我听说过端口扫描，就是编写一个软件尝试所有不同的端口。你会使用这类工具吗？

**Johannes Doss:** 我认为工具主要用于自动化地勘察可用资源，比如你提到的扫描所有端点或端口。但一旦你对目标环境有了一个大致的了解，我过去常常是手动介入。手动去探测，看看当你触碰它、摆弄它时，什么会崩溃。这部分也是最令人兴奋的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** Do you bring your own tools there? Do you have like methodologies like I I guess you know like it's very basic but I I do know of the concept called port scanning where you write a software where it tries all the different ports. It sends messages and you hope that if they configure it a server incorrectly or or or maybe correctly you can get through. But what what kind of tools that do do you come with you do use tools in in in as a penetration tester?

**Johannes Doss:** I think mostly for uh kind of like mapping out what's available right that's I think the biggest part you automate um so you don't you know test for all the endpoints or ports as you said but I think then once you found um a good landscape of what's out there you you go in manually at least I used to do uh that manually uh to to uh you know try to to poke and and see what what breaks when you touch it and when when when you play around with it and um That's also the most exciting part I think.</p>
</details>

### 代码安全：谁的责任？
**The Pragmatic Engineer:** 在现实世界中，我们软件工程师在公司内部构建软件，可能是服务、应用或网站。而外部则有各种攻击者，从业余的脚本小子到专业的逐利团队。那么在公司内部，代码安全应该由谁负责？

**Johannes Doss:** 在当今行业中，我们看到这是一种共同的责任。我们谈到了渗透测试，通常由安全团队参与。但开发者才是编写和修改代码的人。我认为行业中普遍的看法是安全团队应该负责所有安全事务，毕竟“安全”就在他们团队的名字里。但我持相反的观点。我认为，几乎所有的软件漏洞都体现在代码中，而开发者是组织中唯一编写和修改代码的人，也是唯一能修复安全问题的人。因此，他们应该对所有这些代码安全问题负责，对他们代码的这部分以及相关问题负责。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** you know in in the real world we're going to be sitting you know as as software engineers inside a company and we're going to be building our software this might be services this might be apps websites and so on and there's going to be attackers uh outside it's going to be like script kids or like you know like like people just like malicious like playing around poking around and there's going to be professionals as well who will be uh trying to get financial gain whatnot. Now inside the company who should own code security?

**Johannes Doss:** you know the in the industry today what we're seeing is um that this is a shared responsibility basically right uh so we talked about the penetration tests and typically security teams are involved in that um and then there is still developers um you know adding and writing code right and I think predominantly in the industry the the view is that the security team should should own all that security right it's it's in the name of the team but I see it quite the other way around. I I think you know uh every software vulnerability basically manifests in code and and developers are the only ones writing the code in in organizations and changing the code, right? And they're the only ones who can fix security issues. And so I think they uh they should own all those code security issues, right? They should own basically their share of the code and also the problems related to their code.</p>
</details>

我认为这在今天也更现实，因为开发者可以获得很好的教育资源和工具。所以我认为代码安全问题的责任应该在开发者身上。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think that's also more realistic today because you have great education available and great tools available for developers. So uh I think that ownership should be with developers on on the code security problems.</p>
</details>

**The Pragmatic Engineer:** 我明白你的意思，开发者应该负责代码安全。但那为什么还要有安全团队呢？或者说，什么时候应该设立安全团队？你和各种规模的公司都合作过，公司在什么时候会引入安全团队？他们的角色又是什么？如果已经有安全团队了，作为开发者，我会觉得，嘿，这不就是他们的工作吗？要让服务100%安全，这任务太艰巨了。

**Johannes Doss:** 我并不认为安全团队是无用的，完全不是。我们谈到渗透测试，这通常由安全团队来执行。我认为，应用安全领域远比代码安全要宽泛得多。比如，你可能有合规性要求需要关注，或者一些全组织范围的安全倡议。又或者，渗透测试报告中发现了漏洞，或出现了新的威胁。我认为安全团队应该关注这个更广泛的应用安全领域。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** I hear what you're saying on devs should own code security but then why have a security team or at what point should you have a security team? again you you now work with a lot of different companies and sizes and previously you also worked as a as a as a security engineer. At what point do do companies bring in a security team and when they do what is their role? I'm kind of like look if there's a security team I'm like come on they they that's their name right like as a developer like security as a whole like to make your your service 100% secure that's pretty daunting.

**Johannes Doss:** Yeah. I don't think that security teams are useless right not at all. I we we talked about the the penetration test that's that's typically something run by security teams and so I think the the field of you know application security is just much more broader than than code security right um so you have maybe compliance requirements uh that that you need to look after and and some you know organizationwide initiatives security initiatives or there are vulnerability reports coming in from a penetration test or new threats um are are available and so security teams I think should look at this broader application security field.</p>
</details>

拥有一个安全团队是好事，组织规模越大，就越需要。我只是认为，当组织编写和部署软件时，安全团队不应该浪费时间去审查开发过程中出现的每一个安全问题。这部分应该完全由开发者负责。反复地去研究每一个新的跨站脚本问题，试图利用它，构建花哨的攻击代码和风险评估，我认为这是在浪费时间。而开发者完全可以在编码时就修复这些问题，然后继续前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and um it's it's good to have a security team for that and the larger the organization uh gets right you I think you need a security team I just think that when you write software and when organizations you know deploy software the security team shouldn't waste their time and and looking into every single security issue that happens during development right and I think that part should be fully owned by by developers right I think it's u a waste of time to look at every single new crosshat scripting issue again and again and try to exploit it and build some some fancy exploit and risk assessment where SC developers could just you know fix issues as they as they code and move on.</p>
</details>

这也让安全团队有更多时间专注于更大的问题，那些他们能真正发挥专业知识的问题，比如密码学、认证逻辑等，他们可以在这些领域为开发者提供非常有价值的帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And that also allows then security teams to to have more time to actually focus on bigger problems on on problems where they can really bring in their expertise like cryptography or or authentication logic or things like this where they can then also be very helpful with their expertise for developers.</p>
</details>

### 安全团队：开发者的平台与专家顾问
**The Pragmatic Engineer:** 我听起来这和功能团队与平台团队的关系有些相似。平台团队通常构建平台供工程师使用，他们拥有专业知识。比如，一个大型数据存储公司的数据库平台，工程师使用API，不必了解所有细节，但需要时可以向平台团队求助。你的意思是，安全团队也扮演着类似的角色，提供专业知识，帮助解决难题，并提供工具让开发者可以自助服务？

**Johannes Doss:** 是的，完全正确。我认为这个比喻很好。他们提供帮助，但也将大部分所有权留给开发者，这样开发者就可以将安全作为开发过程的一部分，而不是事后附加的、由安全团队临时决定的事情。我认为安全应该真正成为开发过程的一部分，而这必须由开发者来主导，才能真正地参与并修复安全问题，因为这才是最终让你变得安全的根本。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** So I'm kind of hearing some similarities between the kind of feature teams or program teams and platform teams where you know platform teams typically build platforms where engineers can build on and they have a specialized expertise. It might be a massive database platform like for for a large data storage company and then engineers they kind of use the APIs but they don't need to know all the details but when they do they can just go to the platform team saying hey how do I store you know like like two pabytes of data and they'll be like okay here's different ways you can do it. So do I understand correctly that you're kind of saying security teams will also be this like specialized expertise where they can help you with a bunch of stuff and they will try to do tools as well for for devs to like self-service or or you know share common things to watch out for.

**Johannes Doss:** Yeah, exactly. I think it's a good comparison right um definitely helping um but also leaving you know the majority of ownership there with developers so they can basically have security as part of the process of development and not just something that is you know attached to or ad hoc run um and whenever the security teams decides right I think it should be really part of the process of development and and that must be then owned by developers to really you know um engage in security issues and and fix them uh because that's what makes you secure in the I.</p>
</details>

**The Pragmatic Engineer:** 不过我要挑战一下，历史上，我认为软件工程师并不拥有安全责任，也未被期望如此。你能谈谈这20年来，你所看到的这种变化是如何发生的吗？我确实感觉到责任正在向开发者“左移”。

**Johannes Doss:** 历史上，我认为安全责任明确属于安全团队。回想20年前，一切都由合规性驱动。而且，当时的软件开发生命周期比现在慢得多。你可能会有季度发布，发布前会有安全团队来进行最终审计。而今天，我们的节奏快得多，一天甚至一小时内发布好几次。还有AI编码助手的加持，我们的速度越来越快。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** will challenge though that historically I don't think software engineers owned security or were expected to own. Can we talk about how this changed over time over your 20 years how how you've seen changes happen because I do feel it's shifting left on onto developers but what was the historic context here and and what is changing now

**Johannes Doss:** historically I think it was clearly owned by security teams right so if you imagine 20 years back it was all about compliance driven by compliance and then also the software development life cycle was uh a lot slower than today right you would have your quarterly release and then there would before that there would a security team come in and and do a final audit, right? And then you would release and and today we're just moving at a much more faster pace uh releasing a couple of times a day or per hour, right? And you have AI coding assistance and so we are moving at um a lot faster now.</p>
</details>

在这种快节奏下，你不能再有那种事后进行的、脱节的安全审查。行业中另一个变化是所需的工具。历史上的工具都是为安全团队构建的。作为安全审计员，你想知道每一个潜在的问题，宁可错杀一千，不可放过一个。但如果你把这种理念应用到今天快速的开发节奏中，就行不通了。你不能总是被各种发现打断，这太吵了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">You cannot have this disconnected security review that you do afterwards. Um and so in the industry what's also changing here is I think the tools that you need for this. You know historically the tools are built only for security teams, right? Um and and then with that there is a different product philosophy that that comes with uh security products because as a security auditor basically you want to know about every single potential issue right you want to turn every stone and and and better look twice than never to find out what's you know what could go wrong and then now if if you apply this to this new pace of uh of fast development that doesn't work anymore right because you can't get interrupted all the time with findings. It's it's it's too noisy, right?</p>
</details>

我喜欢把这比作开车，如果副驾驶坐着一个安全员，他会不停地对你大喊大叫，指出每一个可能出错的地方。开始的50米可能还有点意思，但之后就会变得非常痛苦和烦人。因此，我们看到行业正在发生变化：开发者应该拥有代码安全问题的所有权，但围绕这些问题的工具也必须为开发者所拥有和设计。而其他更广泛的应用安全工具和领域，则应继续由安全团队负责。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I I like to compare this with uh you know, if you drive a car and you have a security guy in your passenger seat and he would scream and yell at you at every single thing that could go wrong all the time. That's uh maybe interesting the first 50 meters but then gets super painful and annoying. I think with that we see a change in the industry that you know I think developers should own code security issues but also the toolings around code security issues must be owned and and for developers um and then there are other application security tools and and application security as a broader thing that should be still owned by security teams.</p>
</details>

### 定义代码安全与应用安全
**The Pragmatic Engineer:** 你提到了两个不同的概念：代码安全和应用安全，并说应用安全远不止代码安全。那么，什么是代码安全？它的边界在哪里？这听起来是作为软件工程师应该了解的。

**Johannes Doss:** 简单来说，代码安全就是代码中没有安全问题，没有任何可以被攻击者利用来攻击你的应用、获取数据并使你的业务面临风险的东西。但这个简单定义的复杂之处在于，“安全问题”到底是什么。我们通常认为SQL注入是漏洞，但我认为它远不止于此。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** So, so far you've mentioned two different things or if I caught it correctly, one was code security and then application security and you said that application security is a lot more than code security. So, it's a you know like it's a supererset of of it. What is code security? I mean this this is one of your your expertise as as I understand but how do you define that? You know, where does it start? Where does it end? cuz it it does sound like something that as a software engineer we should be aware of it, right?

**Johannes Doss:** Yeah. For a lack of a better definition, I would say it it it's basically code that is you know free of security issues um free of anything that you know can be leveraged by an attacker to uh exploit your application and then you know get access to some of your data and and put your business at risk. But with that simple definition, I think the the the complexity is a bit you know what are security issues um when we say code is free of security issues and I think here the we think typically as vulnerabilities right SQL injection is a vulnerability and and I think it's much more than this right.</p>
</details>

想想那些bug，比如一个空指针异常导致你的应用崩溃，这时你的应用就处于一个非预期的状态，在某些情况下可能被攻击者滥用。一个更明显的例子是C/C++中的内存损坏问题，攻击者可以利用缓冲区溢出在你的服务器上执行代码。所以，这里的界限变得越来越模糊。还有一些逻辑上的问题，比如你写一个可以上传头像的应用，你不应该忘记攻击者可能上传一个shell到你的服务器。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">if you think about bugs like a I don't know null pointer exception where your application crashes then your application is in in an unintended state and this can be abused by attackers in some scenarios or maybe a more obvious example would be you know memory corruption problems in CC++ where as an attacker you can uh you know do a buffer overflow um and then execute code on your server and so I think here the the lines get more blurry and and um then there are also more logical things like if you um write an application where you can upload a profile picture you you shouldn't forget that you know an attacker couldn't be you shouldn't be able to upload a shell to your server and those kind of things.</p>
</details>

我们正在意识到，代码安全远不止是漏洞。最终，这些都只是bug，要么是你在代码中忘记了的事情，要么是规范错误的东西。所以它基本上是技术债，和你待办事项列表里的其他bug没什么不同，你作为开发者只需要修复它。从这个角度看，为什么这是开发者的问题就更清楚了，也应该由开发者来负责。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so I think we are real realizing izing that code security is much more than just vulnerabilities and and in the end those are just bugs, right? Those are either things you forgot about in your code or those are misspecified uh things. And so it's it's basically technical depth, right? It's it's not so much different than other bugs in your code that you have in your backlog and you just need to fix as a developer. And uh I think from that perspective, it's also more clear why that's a developer problem. Um and and should be owned by developers.</p>
</details>

### 软件工程师必知的代码安全基础
**The Pragmatic Engineer:** 我理解我们应该负责代码安全，但这是一个相当模糊的领域。从明显的空指针异常到不那么明显、更难处理的缓冲区溢出。在你看来，每个软件开发者都应该知道哪些代码安全基础知识？

**Johannes Doss:** 关键在于，开发者只需要了解如何预防和修复这些问题，而不需要掌握完整的攻击技术，比如执行缓冲区溢出攻击。我认为你应该了解的一些基础知识中，首先想到的就是真正了解并理解你的代码在做什么。这听起来可能有点傻，也很明显，但这正是安全专家在你代码中发现安全问题的方式。他们会寻找你可能忘记或忽略的边界情况和极端案例。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** I understand you. we should be owning, you know, code security, but it is it's a pretty it's a pretty mushy subject, as you say. It's it's a lot of things from from the obvious null pointer exceptions to may the maybe not as so obvious buffer overflows, which are a little bit harder to work with if you're not aware of it. Of course, sometimes you use languages and and that solves for it. As a software engineer, what are code security basics that every software developer should know in in your mind?

**Johannes Doss:** You just mentioned buffer overflows. I think that the the key here is you know for developers in those basics um they need to only understand uh how to prevent those issues and how to patch them. They don't need to understand the full exploitation techniques to run a buffer overflow attack right like you can patch things uh without necessarily needing to uh run the full chain. And I think some of the basics you should be aware of I think the first thing that comes to my mind is to to really know and understand what your code is doing. And maybe that sounds a bit silly and obvious, but that that's how security experts find basically security issues in your code. They try to look for corner cases and edge cases that you may have forgotten about um or overlooked.</p>
</details>

在AI加速开发和大量使用库及开源代码的时代，要说我们时刻都清楚自己代码的行为及其与代码库的交互，可能就不那么理所当然了。所以，我们能做的一件事是，至少在处理安全敏感功能时，要用攻击者的眼光来看待问题。攻击者在这里能做什么？他如何修改某些东西？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And maybe in the time of uh you know AI accelerated development and uh using libraries and open source code that's not so obvious anymore uh to say that we all the time know what our code is doing and how it interacts with our code base, right? So I think one thing we we can do here is to really look through the through the eyes of an attacker at least when working on security sensitive features. What could an attacker do here and and how could an attacker u modify something here right?</p>
</details>

行业里一直在谈论输入验证和输入清理，这或许是一个很好的例子——永远不要相信任何输入。这可能很微妙，比如你上传一个视频到YouTube，有人用他们的应用解析YouTube视频标题，那么这个标题就是输入。我们必须真正思考所有这些GET参数、POST参数、cookies和外部输入用在了哪里，以及我在文件操作中是如何使用它们的，这可能被修改来打开攻击者指定的任意文件。或者传统上，在SQL查询中你会有SQL注入，在HTML响应页面中你会有跨站脚本攻击。这些典型问题我们至今仍然能看到，它们是最关键的，已经存在很长时间了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh the industry has been talking for a long time about this input validation input sanitization right maybe that's a good example here where never never trust the input right any input. Yes, exactly. And and um this can be also a bit more subtle, right? Like if if you upload a video to to YouTube uh and someone pauses with their application the YouTube video titles, then that's that's that's input basically, right? Because you you modify the the the YouTube uh title name. But then really making sure we think about this um where is all that you know get parameters, post parameters, cookies uh external input used and where am I using this in my file operation which which you know could be modified to open arbitrary files from attacker or you know traditionally in a SQL query you have a SQL injection in your HTML response page you have cross-ite scripting and and and and those typical things and and I think we are still seeing those uh issues right they are the most critical ones and they have been around for for for a long time but we still see those issues.</p>
</details>

另外，密钥泄露是另一个基础问题，涉及许多著名的数据泄露事件。开发者可能只是为了测试目的，临时将一个API令牌硬编码到代码中。这些密钥，比如API访问令牌、加密令牌或数据库密码，通常应该存放在本地环境变量中。攻击者现在会爬取公开的GitHub仓库，窃取这些密钥并尝试看它们是否仍然有效。即使你删除了代码，它也存在于git历史中。这是我们应该注意并且不要做的另一件基本事情，但它仍然时有发生，因为我们是人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then secret leaks I think is a is another you know basic thing that is involved in in many popular data breaches you know where developer hardcoded basically maybe just for testing purposes temporarily added like hardcoded into the code like a little API token. So, so like the secret secrets like API token well like all sorts of tokens, right? That that should typically live in your like local environment variables.

**Johannes Doss:** Exactly. Exactly. And it can be API access tokens or cryptography tokens or or passwords for the database or whatever. Attackers nowadays, they crawl the public GitHub repo repositories, right? And and and steal those secrets and try if they to see if they're still valid. Even if you delete your code, right, it's in the git history and it gets passed. So I think that's another basic thing uh we should be uh aware of and and not do and it still happens um because we are humans right.</p>
</details>

### 从基础到高级：应对不断演变的威胁
**The Pragmatic Engineer:** 你有没有一个可以参考的清单？你列举了一些，比如参数、SQL注入、密钥泄露等。

**Johannes Doss:** 这个清单会随着时间变化。我们不断发展，对某些安全问题了解得更多。某些类型的问题我们犯得少了，然后新的类型可能变得更普遍，这也许是因为技术环境或开发方式的变化。但我认为我们谈到的那些基本问题已经存在很长时间了，而且我们仍然能看到它们，它们显然不会自己消失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** So these were the kind of I guess the basics to cover like as a developer. Is there like a checklist I I could go through cuz again you listed a bunch of them and depending on your level you either say these are super basic or like what are these things but you know the the parameters SQL injections secret leaks and some some some other things like do do you have a go-to list of like you know go through all these things and make sure you understand each of these things and you can check your code or know if they would be applicable.

**Johannes Doss:** It changes a bit over time also. You know, we are evolving and and we are learning more about um certain security issues and and certain types of issues we we do less and then maybe new types are becoming more prevalent. Maybe also because how the landscape changes or how development changes but again I think those those basic ones we talked about have been around for for a long time and and and they they we don't we still see them. They don't go they apparently they don't go away.</p>
</details>

**The Pragmatic Engineer:** 那么更高级的问题呢？你肯定见过一些更奇特、更具创造性的安全问题。

**Johannes Doss:** 在需要更多专业知识方面，确实有更高级的问题。比如密码学，如果你加密了某些东西，但攻击者仍然能够解密。还有认证逻辑、访问权限或密码重置功能，这些地方也常常出错。我认为作为开发者，对于这些更复杂的安全功能，关键是不要试图重新发明轮子，而是使用经过开源社区审查和信任的、可靠的框架或库。在这方面，安全团队同样可以提供帮助。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And what about the more advanced things that could go wrong? Because these were the basic ones, right? Like I think we just covered the basic ones, but you must have seen some more exotic security issues that maybe would have not been as easily preventable or a lot more creative ones.

**Johannes Doss:** So there are more advanced things in in the terms of maybe expertise what is needed. Um if we talk about cryptography things, right? If if you know you're encrypting something and an attacker is still able to decrypt it or there is some you know authentication logic or access privileges or password reset functionality is is also something where typically you know often things can go wrong. I think the the key as a developer is to for those more complex security features is to not try to reinvent the wheel and just uh use um you know solid frameworks or libraries, something that is vetted by the open source community and and trusted. And I think here again a security team can can help you with that, right?</p>
</details>

**The Pragmatic Engineer:** 最近在Node生态系统中出现的一个安全问题是软件包被“投毒”。攻击者接管一些软件包，注入恶意代码，任何使用该软件包或其下游依赖项的人都可能受到影响。你认为谁最能防范这些问题？是安全团队决定固定某些软件包版本或扫描更新吗？还是说作为开发者，如果我依赖第三方包，我能做些什么好的实践来避免这些日益普遍的依赖安全问题？

**Johannes Doss:** 这是一个难题。因为每个人都在使用依赖，而你的依赖又在使用其他依赖，所以当你拥有整个依赖链时，很难做些什么。如果某个依赖的维护者被攻破，然后这个依赖被植入了后门，那么当你引入这个依赖时，你几乎无法避免安全问题。我认为你唯一能做的就是部署相关工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** One of the recent security issues that that is coming up in the node ecosystem is packages being poisoned where an attacker takes over some packages, they inject malicious code and whoever is using a package or or a or the downstream dependency of that package. Uh they can be impacted. I think we we we've seen a cryptoreated issue like this. In in your view, who who could best protect against these issues? Would it would it need to be a security team who decides on things like pinning certain versions of packages or scanning updates for it? Or basically as as a developer, if I'm if I'm depending on third party packages, what are good practices I could I can do to try to avoid some of these, you know, dependency security issues which are now becoming more widespread.

**Johannes Doss:** That's a tough one, right? because everyone uses dependencies and your dependencies are using dependencies and and uh so it's uh quite hard to to do something right if you have this whole dependency chain and it you know some developer of that dependency a maintainer gets compromised and and then you know u a dependency get back door uh you have almost no chance in uh having a security problem when you pull in that dependency you you you cannot not use dependencies I think the only thing what you can do here is to uh have tools in place.</p>
</details>

### 自动化工具：SCA与CVE
**Johannes Doss:** 这里有一种技术叫做**SCA**（Software Composition Analysis: 软件成分分析），它基本上会观察和检查你的依赖项是否存在已知威胁。幸运的是，像你提到的npm包，一旦被发现是易受攻击的、恶意的或有后门的，这些工具的数据库会非常频繁地更新，以警告你不应使用特定版本的依赖，并告诉你应该使用哪个新版本，或者干脆摆脱那个依赖。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and this is like software composition analysis is is a thing here that basically observe and and and check your dependencies you know for known uh threats right at some point luckily like the the npm package you mentioned became known to be vulnerable or malicious or back door and then those tools uh basically get uh updated on a very frequent basis to to look um what are the threats and what are dependencies you shouldn't be using in a specific version and then warn you about this uh and what what is the the the next version you should use or that you should get rid of that dependency basically.</p>
</details>

**The Pragmatic Engineer:** 什么是软件成分分析？

**Johannes Doss:** 软件成分分析（SCA）是一种技术，我们查看清单文件，也就是你的依赖列表，然后将这个列表与一个已知安全问题的数据库进行核对。这些问题被称为**CVE**（Common Vulnerabilities and Exposures: 通用漏洞披露），它们不是我们之前谈到的你自己代码中的零日漏洞，而是其他人，比如某个维护者遇到的安全问题。有人发现了这个问题，报告了它，并被记录在一个数据库中。然后，通过SCA，你基本上可以将你库中特定的Log4j版本映射到已知的Log4shell漏洞，并得到警告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And what is software composition analysis?

**Johannes Doss:** So software composition analysis is um called SCAR is is basically a a technique where you know we look at manifest files your list of dependencies right depending on the package manager you use and then this list of dependencies is checked to a database of known uh security problems right those are called the CVEes those are not the the zero day vulnerabilities we talked about earlier that you typed into your code right that someone else um some maintainer had a security problem. Someone found that problem, reported it, it's documented in a database and then you know you can basically with software composition analysis map uh that this specific lo forj version of your library is is vulnerable to the lock for shell vulnerability that is known and then it can warn you.</p>
</details>

**The Pragmatic Engineer:** 你能介绍一下CVE项目吗？

**Johannes Doss:** 它由Mitre公司运营，是美国政府支持的项目。CVE列表，即通用漏洞枚举，是一个用于记录已知漏洞的数据库，曾经是中央数据库。但现在每天报告的漏洞太多了，那里有点瓶颈。因此，也出现了其他收集安全问题的数据库或平台。SCA工具通常会使用CVE数据库，但也会利用其他资源来收集各种已知漏洞，以确保它们了解所有潜在威胁。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** and can you tell us about the CVE program? I understand inside security circle this is very well known and very useful but what should I know as a developer about this and how much should I kind of look it up check it uh worry about it

**Johannes Doss:** it's run by Mitra right like the US government uh there is some change happening here um so that's the the common vulnerability enumeration uh is the CVE list and it's a database where uh it used to be kind of like the central database for documenting known vulnerabilities um I think it's just too many vulnerabilities reported every day. So I think there's a bit of a bottleneck there and so there are also other databases evolving or places revolving where security issues are collected and and and gathered and scar tools typically use that CVE database um but also other resources to collect all kinds of known vulnerabilities uh to make sure they they know about all potential threats.</p>
</details>

**The Pragmatic Engineer:** 作为一名专注于代码安全的软件工程师，你认为我需要去跟进CVE吗？还是说这更应该由专门的安全工程师来做？

**Johannes Doss:** 我会用工具来解决这个问题。这是一个可以自动化的问题，我不会为此雇佣更多的安全团队成员。你可以使用SCA工具，它会自动检查所有依赖。数据库里大概有超过20万个CVE，每天还会有大约50个新的出来。我认为，无论是作为开发者还是安全团队成员，去关注每一个新出现的CVE都不是对时间的有效利用。你应该有一个好的SCA工具，它不仅能帮你检测这些问题，更重要的是，能帮你修复它们，并提供修复建议。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And as a software engineer strictly focusing on you know I'm trying to make my code secure. Do you see value in kind of trying to keep up with with CVEes with with new vulnerabilities or or do you see this being more of something that you really need someone who is is dedicated focused on this may this be a security engineer? I'm just talking from a practical perspective you know if I'm working at a scaleup where we have a midsize team maybe have one security engineer and I really really want to you know do my best work to try to security is important in in our domain. Do I take some of this on on me or do I say like hey let's let's if if we really need about this let's get more resources dedicated folks who can help with uh you know the the kind of depth of the industry.

**Johannes Doss:** Yeah, I I would use a tool for this, right? It's a it's a problem that you can automate and um I I wouldn't um hire um more security u um team members for this. So, you can use software composition analysis. You know, it will automatically check all the dependencies. There are I think in the database like over 200,000 CVEes and and every day I think there's like 50 new CVEes coming out. not necessarily I think in in open source libraries right also in known products etc but I think it's um not a good use of your time as a developer but also not as a security team member to to look at um you know every single CVE that comes out I think you should then have a good tool in place a software composition analysis tool in place um that helps you to detect those but also helps you in fixing those right which is much more important than building a huge backlog of security issues uh the important thing is that you can also fix this and get some advice on on on how to fix this.</p>
</details>

### 《代码安全状况报告》的启示
**The Pragmatic Engineer:** 最近你发布了一份相当全面的《代码安全状况报告》。你有哪些发现？

**Johannes Doss:** 在Sonar，我们每天扫描7500亿行代码。我们研究了其中的一个子集，选取了由全球4万个组织的100万开发者编写的80亿行代码。我们发现，大约每1000行代码中就有一个安全问题，这与我手动审计代码时的感觉相当吻合。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And recently you've produced a state of code security report which is a pretty comprehensive one as I understand. What are things that you found there?

**Johannes Doss:** Yeah, so at Sona we we scanned 750 billion lines of code daily, right? So there's our analyzer see quite a lot of code and we we we studied like a subset of this. We took 8 billion lines of code that was written by 1 million developers of 40,000 organizations uh globally. took quite a data set and then we looked at what are the issues uh we we see and um I think one finding was that every about 1,000 line of code uh we we see a security issue and that reflects kind of well my uh my my feeling of when I manually uh audited code.</p>
</details>

我们发现的问题类型是我们之前谈到的那些基础问题，至少在前五名中是这样：日志注入、跨站脚本攻击、SQL注入、硬编码密码等。其中一些意外的发现是关于正则表达式的，我们似乎更频繁地使用缓慢或不安全的正则表达式，这可能导致拒绝服务攻击。但总的来说，那些基础问题在今天的代码中仍然非常普遍。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so every 1,000 line of code and issues is quite a lot I think and then the issue types we found and saw were the basic ones we talked about right the most in the top five at least right there was lo injection ction, cross-ite scripting, SQL injection, hardcoded passwords, the typical things that that um that go wrong. I think some surprises were in there about regular expressions for example was was something that uh we were typically or more often apparently you know we have a slow regular expression or insecure regular expression which can lead to denial of service attacks and so that would be uh something more out of the lines but yeah the the basic ones are still very prominent today in code.</p>
</details>

**The Pragmatic Engineer:** 有趣的是，你用“每1000行代码一个安全问题”这个统计数据。我们总在争论代码行数是否是衡量复杂性或工作量的好指标。

**Johannes Doss:** 这是我们为报告建立的一个统计数据，但我认为它归结为一点：质量与安全在这里是紧密相连的。你可以用更多或更少的代码行来解决某个问题。我认为，当你有更多的代码行时，就需要审查更多的代码，最终也就更难发现安全问题。而如果你用一种维护良好、结构化的方式来做，情况就不同了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** It's very interesting because you like you're saying every 1,000 lines of code roughly one security issue. It's funny because lines of code we always argue about is it a good measurement of things you know complexity work whatnot or or is it not but I I guess you know you're still using this heristic right?

**Johannes Doss:** I mean it's it's it's a statistic we build for the report right but I think yes I think what comes down to that is is that quality here is really connected um to to security right I mean you could uh solve certain problems with you know more lines of code or with less lines of code um and I think equality is something here um that you know is very related in terms of um when you have more lines of code right there's more you know code to review basically and uh it's it's harder to spot security issues in the end while if if you do it in a well-maintained and and and structured way.</p>
</details>

### 代码质量与安全的内在联系
**The Pragmatic Engineer:** 你认为代码质量与安全有何关联？

**Johannes Doss:** 我认为它们超级相关，但在当今行业中被完全低估了。我们谈到了空指针异常或缓慢的正则表达式，这些可能导致安全问题，是比较明显的bug例子。但如果你想想那些难以阅读、维护不善的代码，也就是所谓的“意大利面条式代码”，它与安全的联系可能不那么明显。然而，如果代码不易理解、不易审查，那么在进行结对编程或代码审查时，你更有可能忽略同事代码中的安全问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** exactly this was exactly my feeling on on this. So like what would you say how is the quality of code related to security? Did you see any findings on this?

**Johannes Doss:** Yeah, I I think it's super related, right? And I think it's it's totally underrated in in the industry today. um we I mean we talked about the the null pointer exceptions or these slow regular expressions, right? Uh that can lead to security issues and and that's more maybe the obvious um examples of bugs. Um but also if you think about unreadable code, not well-maintained code, right, that's kind of like spaghetti code, then it's not so obvious at first maybe how this is connected to security. But then if you think about that code is not easy to comprehend, not easy to review and you do peer programming or code reviews in your development team. Then in that spaghetti code, you will more likely um oversee security problems of your peer.</p>
</details>

再想想修复安全问题。如果有人发现了一个问题并报告给你，而你要修复的代码是维护性很差的，你就无法修复这个安全问题。因此，质量突然变成了一个安全问题，因为攻击者的攻击窗口会因此保持开放更长时间。所以我认为代码质量与代码安全超级相关，尤其是在AI生成代码的时代，我们通常看到代码质量较差，这在审视代码安全时就成了一个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then also if you think about fixing security issues, right, like now maybe someone found an issue or found later an issue and reports that back to you and you as a developer have to fix it. Think about if that's you know not well-maintainable code you you you you cannot fix the problem the security problem so quality suddenly becomes a security issue in the sense that the you know attacker window stays open longer at some point you have to to fix the issues and so I think here code quality is super related to code security especially now with AI generated code where we see typically uh poor quality of code right and that becomes a problem for security when we look at code secure security.</p>
</details>

### 代码安全在网络安全全局中的位置
**The Pragmatic Engineer:** 代码安全与整个网络安全的关系是怎样的？

**Johannes Doss:** 安全领域有很多分支，比如数据安全、云安全、网络安全、取证等。作为一个大型组织，你需要所有这些，它们相互关联，构建了多层防御。从我这个攻击性安全的角度来看，我一直觉得应用安全是最有趣的领域。因为今天几乎每个组织都在部署软件，他们要么将软件作为产品发布，要么在线部署服务与客户互动。这些应用是24/7在线的，对攻击者来说是可用的。这使得应用安全成为安全的前沿，通常是进入网络的第一个入口点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** How does that relate to cyber security a as as a whole?

**Johannes Doss:** So, there are many fields of security, right? There's data security, cloud security, network security, forensics. As a larger organization, you kind of need all of them. Um, and they are all interconnected and they build multiple lines of defenses. From my perspective, from an you know offensive security uh perspective, I found application security always the most interesting field because if you think about uh you know every organization today basically deploy software they they ship software as a product or they deploy some services online to have customers interact with their business. And so those applications are online 24/7, right? And they're available to to me as an attacker. And that's the you know at the forefront of security and and typically the first entry point into the network.</p>
</details>

而其他领域更多是试图阻止攻击者进入后的**横向移动**（Lateral Movement: 攻击者在获得初始立足点后，在网络内部移动以访问更多系统的过程）。比如，攻击者是否无法解密他窃取的数据，或者攻击者是否无法从一台服务器移动到另一台。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and so that makes it so so critical or so interesting for attackers the the application security field whereas the other areas you know more try to prevent the lateral movement once an attacker is in uh can the attacker maybe not decrypt the data he stole or can the attacker and not you know move from one server to the other.</p>
</details>

**The Pragmatic Engineer:** 什么是横向移动？

**Johannes Doss:** 通常，攻击者会先在网络中获得第一个切入点，然后从那里扩展。比如，你在一个服务器上获得了一个shell，可以控制这台机器并运行系统命令。然后你就可以从那里，在内部网络中看看还能访问哪些其他服务。因此，你需要一个更广泛的网络安全策略来防止内部服务之间的这种横向移动。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** What is lateral movement?

**Johannes Doss:** Yeah. So typically as an attacker you would um you know gain your first entry point into a network and then maybe you want to expand from there. So you have a shell on one server. You can control a server or a machine. You can run system commands and then you would uh from there you know you are in the internal network and try to see what other services can I reach, what other internal things can I access and then you need a security strategy basically in the broader cyber security uh strategy to prevent that lateral movement between uh internal services.</p>
</details>

### AI带来的新威胁与新挑战
**The Pragmatic Engineer:** 随着AI助手和MCP服务器的出现，攻击开发者的机器可能会成为一个非常有诱惑力的攻击向量。我们应该对此有多担心？

**Johannes Doss:** 我认为开发者的机器并非禁区。供应链攻击是一个大话题。开发者构建软件，然后软件被部署到全球各地的组织中，这使得它变得如此有吸引力。我们谈到过一个npm包因为开发者的机器被攻破而受到影响。是的，我认为随着AI代理的出现和更多控制权的下放，出现了一种新的威胁。这不仅仅是关于你使用的依赖或你机器的整体安全，还包括确保你使用的代理在做正确的事情。它不能有权限意外地或像你说的有意地做一些有害的事情。比如，如果代理在解析一个Jira工单，而有人可以创建一个恶意的Jira工单，指示代理添加一个后门，而不是仅仅解决一个开发问题，那么你突然就多了一种新的安全问题需要考虑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** One idea that comes to me about lateral movement with the advent of AI assistant MCP servers, it's probably going to be a pretty tempting attack vector for just thinking as an attacker, hey, let me try to get access to that developer machine. You know, I'll set up an an MCP server that says it does something, but secretly it does something else. It runs locally. Boom. I get access to this developer machine. as developers and as as security professionals, how much should we worry about this? Uh and are are you seeing any worries about this specific attack vector? Because I feel until now developers machines were kind of a little bit off limits or were they off limits?

**Johannes Doss:** Yeah, I mean developers machines I think are not off limits, right? I think supply chain attacks is a a big a big topic where I mean developers are building software and then software is deployed on on all the organizations worldwide right and that makes it so interesting so we talked about an npm package that gets compromised by compromising a developer's machine basically right and then from there uh you can uh compromise uh a super popular dependency right or if you're a software vendor you better make sure the software that is shipped to thousands of organizations maybe uh is not backtored because some developer uh got backtored and uh yes I think also with uh uh agents and and giving away more control there is a a new uh threat here because it's not just about the dependencies you're using or your machine security in general but also uh making sure that the the agent you're using is uh doing the right thing and it doesn't has the privileges to do something accidentally uh or on purpose as you said uh to do something harmful like if the if the agent passes a gyra ticket and something is you know someone can create a malicious gyro ticket that instructs basically the agent to add a backdoor and just in instead of just solving a development problem uh then you suddenly have a new you know type of security problem to think about.</p>
</details>

### 常用代码安全工具概览
**The Pragmatic Engineer:** 你之前提到如果能自动化就应该自动化。工程团队常用的代码安全工具有哪些类别？

**Johannes Doss:** 我想每个开发者都会使用IDE，IDE中内置了一些基本的代码检查（linting）功能，这很好，因为你可以在输入时就发现并解决问题。但IDE通常没有内置广泛或深入的安全覆盖。然后是**SAST**（Static Application Security Testing: 静态应用安全测试）工具，它们可以进行更深层次的代码分析。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** you previously mentioned that if you can automate things uh as for for code security or application security you should try to do that what are the common code security tools that you've you keep seeing engineering teams use for security hygiene like what are the categories that I can think of

**Johannes Doss:** I think every developer uses an IDE right so there's some basic linting available in ideides and that's great right like because as you type you find issues and you can resolve them just that in an IDE typically you don't have such a broad or in-depth security coverage built in right there are some IDE extensions you can use but then typically you stay at the linting side that means some syntactical and semantical checks um and typically in the current file you're working in simply out of performance reasons right because it has to be done in milliseconds as you code and shouldn't slow you down and then you have uh static application security testing tools SAS tools that um can go more into um a deeper level of of code analysis right.</p>
</details>

根据你使用的SAST工具，可能会用到符号执行或污点分析等技术。你的整个代码库会被转换成一个抽象模型，然后静态分析会模拟运行时可能发生的情况。它不执行代码，而是分析并连接我们之前谈到的用户输入，看它们的数据流如何贯穿你所有的代码路径，模拟可能出错的地方，以发现不同的问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">so and depending on the SAS tool you use there is for example symbolic execution or taint analysis techniques used where your whole code base is transformed formed into an abstract model basically and then it's uh simulating static analysis is simulating what could happen here at runtime. what um it's not executing the code, right? But but analyzing this and uh connecting what we talked earlier about user inputs for example, how are they flowing in terms of data flows through through all your code paths and simulating what what could go wrong here to find um different issues.</p>
</details>

**The Pragmatic Engineer:** 你能简单解释一下这是如何工作的吗？听起来很有趣。

**Johannes Doss:** 你的代码被转换成一个巨大的图模型。代码库中的每个文件、每个函数、每个if-else语句，基本上所有改变应用控制流的地方，都是这个大图模型的一部分。然后，工具会试图找出所有组合，即你的变量赋值（创建了数据流）在哪里接收了用户输入，然后这些输入如何通过不同的if-else和函数调用传递，并最终到达某个安全敏感的地方。这可能是一个非常长的数据流路径，做起来非常复杂，而且要高效地完成也很难。但它能帮助你自动化这个过程，找到即便是非常棘手和漫长的用户输入与安全敏感操作之间的联系。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** and and can you just give us a high level of of what is happening because this sounds super interesting. what I understood and you know tell me if if I got it right is you take your code and you kind of turn it into like maybe a graph or or of some sort and then you can try to figure out kind of inputs how they can flow how they can get to components.

**Johannes Doss:** Yeah, exactly. So your your code is is transformed into a big graph model. This can be any dimensions. Uh yes, right. So, so um every basically every um file of your codebase, every function, every uh if else basically um so whenever the control flow of your application changes, every function call, every if else is a part of that big graph model, right? And then you try to figure out what are all the combinations where you know your variable assignments which which create data flow basically uh where is user input uh received in that application and then passed on with you know data assignments through different if else and function u um calls and where does it end up in something security sensitive right and this can be very very long data flow path and very complicated to do right and also to do do that efficiently, right? Um it it used to be taking days and and now we can do that in minutes and that's a very hard problem to solve. But it helps you to automate that that that process, right? What we talked about earlier where you should um be be mindful of what is user input. It it helps you to automate that and find even very tricky and long uh connections between user input and something security sensitive.</p>
</details>

**The Pragmatic Engineer:** 除了IDE里的linter和SAST扫描器，还有其他值得了解的工具吗？

**Johannes Doss:** 我们谈到了密钥检测工具，用于发现硬编码的密码。还有基础设施即代码（Infrastructure as Code）扫描，如果你把代码的范畴扩大，你的GitHub Actions文件也可以是代码。通常，如果你有一个好的SAST工具，这些都会被静态分析覆盖。然后我们已经谈到了软件成分分析（SCA），这是另一个为开发者准备的工具，用于在你的依赖中发现已知的漏洞，即那些CVE。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** Okay. So we talked about the kind of llinters inside ids uh the SAS SAS scanners that you said are there other tools worth knowing about?

**Johannes Doss:** I mean secret detection we talked about hardcoded passwords or um so there are secret detection tools there is um infrastructure as code scanning right if you think about code more broadly it's u also infrastructure as code or your GitHub actions file can be code right and there there are tools to scan this typically if you have a good SAS tool that's all covered by by static analysis basically right because everything can be considered code here and then we talked already about software composition analysis this as another tool uh for developers where you find those known vulnerabilities, those CVEes in your dependencies.</p>
</details>

### 如何选择与权衡安全工具
**The Pragmatic Engineer:** 这听起来像是一种分层的方法，你想要的安全级别越高，设置的层级就越多。但这里面是否存在权衡？比如复杂性、运行时间等。为什么不把所有这些工具都用在每一个代码库上，即使我是一个单人创业公司？

**Johannes Doss:** 对于基础的静态分析工具，我绝对推荐使用。你需要注意的是选择那些为开发者而非安全团队设计的工具。我们谈到过噪音水平的问题，从审计角度看，高噪音对安全团队有意义，但对你的产品开发效率是致命的。SAST和SCA工具在面向安全团队还是开发者方面存在差异，但无论如何，我都会推荐在所有层面上运行静态分析和软件成分分析，以建立基本的安全卫生。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** I guess this is a layered approach, right? So the more security you'd like, the more of these layers you would set up, but do I do I sense that there's a trade-off between them? It's going to be maybe complexity, time to run, uh those kind of things. Like what what is the downside of just like throwing all of these tools onto every single codebase I have? Even if I'm a if I'm a oneperson startup, right? like why would you not recommend that if if you would not recommend it?

**Johannes Doss:** Yeah, I think I mean for the the basic static analysis tools I would definitely recommend uh to do that. I think here what you should be careful of is choosing something that is you know intended to be used by developers and not by security teams. Right? We talked about the noise level that is uh you know interesting for security teams from an oil perspective but uh deadly for your product uh uh um development uh you know productivity where you shouldn't be annoyed and and and um I think that's something to watch out for but and and then there are differences you know for SAS tools and SCAR tools if they are more for the security teams or for developers but uh I would definitely recommend I think at all levels to to run uh static analysis and software composition analysis to have your your basic uh security hygiene in place.</p>
</details>

**The Pragmatic Engineer:** 这些都是静态工具。有没有更动态的工具，比如在你的代码运行时进行测试？

**Johannes Doss:** 当然有。有**DAST**（Dynamic Application Security Testing: 动态应用安全测试）。我们之前谈到渗透测试，DAST工具就是试图自动化这个过程。它在你应用已经运行在测试服务器或生产环境时，从外部进行黑盒测试，向你的应用发射各种恶意负载，看它如何反应，是否会崩溃、延迟、行为异常或抛出错误信息。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** So these are static tools they after you run the code they can run on them they can run on CI they can run with continuous deployment. Are there kind of more dynamic tools and I'm just kind of thinking of of of the idea that you know as your code runs as your servers operate that dynamically try to test uh or or or just do funky stuff.

**Johannes Doss:** Absolutely. So there's dynamic application security testing. We we talked about penetration tests, right? And and and a dust tool tries exactly to automate this, right? What is dust? Dynamic application security testing is um testing from the outside as a blackbox when your application is already running on a test server or in production. And it's basically shooting all kinds of malicious payloads from the outside against your application to see how it reacts and is it breaking or you know uh is there a delay is it behaving weird or throwing an error message and then this way um trying to automate such a human penetration test to find out if there are issues it can detect.</p>
</details>

在动态方面还有**模糊测试**（Fuzzing: 一种软件测试技术，通过向程序提供大量随机或半随机数据作为输入来发现错误），它与DAST类似，但更多用于嵌入式软件、二进制文件或C/C++库。这些动态工具对开发者来说效率不高，因为反馈循环太长了，你需要完成编码、部署到测试服务器、运行，才能得到反馈。但对于安全团队来说，额外运行DAST或模糊测试是一个很好的工具。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then there's also on the dynamic side fuzzing which is similar to dust basically where it's more for embedded software you know binaries CC++ uh libraries or applications where typically you pass complex formats or protocols like file formats and then you want to flip every single bit basically in what you're processing to see if something breaks right and you can automate that with fuzzing and then find those crashes. Um so that that works very well. Um I just think that you know those more dynamic tools are not so much for developers uh uh um today because uh you are a bit disconnected from your coding and you know you you have to context switch basically because you cannot find things as you type. You need to kind of like finish what you're doing, deploy it on the test server, get it run and then the feedback loop is just a bit longer. And so um I think for for developers it's it's more inefficient but for security teams is it's a it's a great tool to have uh to to additionally uh maybe run a dust or a fuzzing right.</p>
</details>

### AI在代码安全审查中的角色
**The Pragmatic Engineer:** 你没提到AI安全审查，现在到处都是这类工具。你作为专业人士怎么看？

**Johannes Doss:** 我觉得这非常迷人也很有趣，AI如今能发现的东西令人印象深刻。但对我来说，这不仅仅是发现问题。如果你想系统地使用它，你必须在“发现问题”和“报告了多少非真实或无意义的问题”之间取得良好平衡。我们今天更多看到的是安全研究代理，它们随机地发现问题，这对安全团队来说是个好工具。但作为开发者，你需要更系统化的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** One thing you haven't mentioned but I I was waiting if you would mention AI security reviews. These are, you know, popping up everywhere. There's there's a lot of different tools, a lot of different vendors, some some existing ones, and they're all saying the same thing. Use this thing. It will make your code more secure. What is your take as a software professional?

**Johannes Doss:** I think it's super fascinating and fun to to see, right? Uh and and also impressive what uh AI can uh can can find today. You know, as with static analysis or every other technology, to me, it's it's not necessarily all about just finding issues. uh at least when you want to you know use that in a systematic way as a as a developer uh here you have to get into a good balance of am I not only finding things but how often am I reporting things that are actually not a a true or a meaningful issue um and and and can I scale this to half a million lines of code etc right so um I think what we're seeing more today is uh you know security research agents uh that go in and and randomly find um uh issues. You know, it's it's a great tool for security teams here.</p>
</details>

另一个方面是确定性与非确定性。AI基本上是非确定性的。对于安全团队来说这不那么重要，但作为一个开发组织，你需要一个在整个团队中保持一致的质量门禁。你不能因为随机出现或消失一个新问题而导致门禁失败。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh but as [clears throat] a developer, you want to have, I think, something a bit more systematic that that finds all code security problems. And you mentioned maybe um the the you know, to me there's another aspect of being deterministic versus non-deterministic, right? Here uh the the uh AI basically is nondeterministic. And I think you know again for a security team that's not so important but as a development organization you you need to have basically like a a quality gate and that's consistent across your team and all the other teams that always has the same output and uh you cannot fail your gate you know because randomly a new issue is popping up or disappearing etc. So I think that that doesn't really work well for developers today.</p>
</details>

最后，从开发者角度看，这里也存在一个矛盾。很多代码本身就是由AI编写的。如果你再用AI来审查AI生成的代码，这有点像让学生批改自己的作业。如果AI在生成代码时不能避免安全问题，为什么它之后就能检测到呢？我认为我们需要有好的、非AI的护栏和验证机制来验证AI生成的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And lastly to me from a developer perspective right there's also a bit of a contradiction if you think about most or or a lot of code is written by AI itself right depending on who you ask and um if you then use AI to review AI generated code that's a bit uh you know uh having students grade their own homework uh where you you you could think that you know if AI didn't you know could prevent actually generating a security issue why would it data on detect that security issues. So I think we need to have good guardrails and verification in place uh that is not AI to verify then basically this AI generated code.</p>
</details>

### AI对代码质量和安全性的双重影响
**The Pragmatic Engineer:** 你之前说AI会生成低质量代码，这可能成为一个问题。你能详细说明一下吗？

**Johannes Doss:** 例如，在Sonar，我们对最流行的LLM（如Claude、GPT-4、GPT-5、Llama等）进行了研究，观察它们的“个性”，即它们会产生什么样的代码和问题。一个有趣的发现是，如果你使用GPT-5的推理模式，它实际上会减少（虽然不能消除）安全问题的数量，但它会用更冗长的输出来解决开发问题，产生更多的代码。这反过来又会导致安全问题，因为你有更多低质量的代码，虽然本身安全问题可能较少，但与其他代码片段结合时可能会产生问题，或者更难被同行审查和维护。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And earlier you said that AI can generate lowquality code and this could be an issue when we're talking about the the lines of code per per security issue. Can you go a little bit into more detail on and what you're seeing observing? What what what does low quality mean in in this sense? Or is it the verbose nature of that we're sometimes seeing?

**Johannes Doss:** So for example at Sona we did um great studies of the most popular LLMs um like cla GPD4 5 lama open coder etc. And we looked at the what we call personalities of them, right? How do they um what kind of issues do they produce and what kind of quality are they producing? And then measured what comes out of of of that. And studied this. And one interesting finding to me was for example that um you know if you if you use the reasoning mode of GPD5 it it it actually decreases not eliminates but decreases the number of security issues you find but it it's it's using more verbose you know output to solve the the development problem. It produces more code actually. Um, right. And um this is then again something that leads into security problems because you have more uh lowquality code that maybe have less security issues uh itself but then poses a problem maybe combined with other snippets of your code um or it's it's harder to review um by your peers or later on and it's less maintainable and and you know leads to a security problem.</p>
</details>

**The Pragmatic Engineer:** 这让我想起一句老话：代码是一种负债。你拥有的代码越多，负债就越多。我不知道我们是不是有点忘了这一点。

**Johannes Doss:** 我认为开发者今天已经意识到了这一点，他们不仅仅是接受所有代码，而是要确保代码有意义、结构良好，以维护良好的架构和可维护性。Stack Overflow有一项很好的调查，我想只有3%的受访开发者表示他们信任AI生成的代码，我觉得这很合理。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** This reminds me of there's this like old saying before AI that code is a liability. The more code you have, the more liability you have. And this was a reason that you know back in the day uh as an experienced engineer would sometimes spend a day or two reducing the lines of code, refactoring, compressing it, bringing single responsibility, removing duplication. And I wonder if we're kind of forgotten this a little bit that the more lines of code you have I mean just taking your statistic of one security issue per thousand lines of code let's just take it for now like yeah like you know like you you would want to have if if kind of an efficient lines of code right like you do want to spend that time and effort of of getting to a system that is simple clear responsibilities concise

**Johannes Doss:** I think this is something for that developers or you know engineers look at uh today already uh not just uh to to to vibe code and accept all the code but to actually make sure um that the code makes sense and is is well structured for all kinds of purposes right to maintain a good architecture in your in your codebase right and and to have a good maintainable code etc outside of the security world that that's already a big code quality uh um problem and and I think developers are aware of this uh but And yes, it it it adds for that uh uh to you know security problem. Uh on top of that there was a nice survey by I think it was stack overflow where I think uh only 3% of the developers asked basically uh said they they they trust uh their AI generated code and I I think uh that's uh that's very reasonable. Yeah.</p>
</details>

### AI如何重塑安全格局
**The Pragmatic Engineer:** 你认为AI正在如何改变代码安全乃至整个安全领域？

**Johannes Doss:** 绝对有变化。即使对于我们的安全工具来说，AI也非常强大和有帮助。你可以用AI来增强确定性算法。例如，我们谈到的污点分析，确定性分析器需要了解所有库和框架的大量知识，而AI可以帮助收集这些知识，然后反馈给确定性算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** Yes, I guess. But how do you think AI is changing code security uh and also security in general? What impact you see it's already having?

**Johannes Doss:** I mean there's definitely a change, right? I think I mean even for our security tools, I think there's a big change in the sense that it's um it's very powerful and helpful. So um even if if you run deterministic algorithms like static analysis to detect issues, uh you can still enhance that deterministic algorithms with AI, right? So for example, we talked about the taint analysis. Your deterministic analyzer needs to have a lot of knowledge about all the libraries and frameworks that are there and there are millions, right? And so AI can help you with gathering knowledge and information and then feed that into a deterministic algorithm, right? So you can combine technologies um and that's definitely changing I think the static analysis but also dynamic analysis and and other security tool areas.</p>
</details>

我们还看到，AI在修复问题方面做得很好。如果你给它一个非常具体的任务，比如“这是一个确定性发现的安全问题，这是20行代码和问题所在”，AI在修复这类问题上非常出色。这非常有帮助，因为重点在于修复，而不仅仅是检测。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then what we're also seeing is, you know, fixes work quite well. Like if you throw half a million line of code, you know, into um the the the context window, it's it's not working so well. Um but if you just throw in you have a very specific task, if you say here's a deterministically found security issue, here are the 20 lines of code and that's the problem. And then AI is very good in in fixing those issues, right? Um so so that's very helpful. um because it's about fixing and not just detecting and AI is super powerful here.</p>
</details>

同时，应用构建的方式也在改变。传统应用有后端、前端和数据库。如果你去掉了数据库，就不会有SQL注入了。但如果你在后端加入一个LLM，你可能就会有**提示词注入**（Prompt Injection: 一种针对大型语言模型的攻击，通过精心构造的输入来操纵模型输出，使其执行非预期任务），这是一种新的漏洞。所以，威胁格局在变，攻击者在适应，行业和工具也需要相应调整。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">we we also see um like a change in how code and applications are built right so if you think about um applications traditionally you have this backend front end and in the back end is a is a database if you remove that database then you don't have a SQL injection anymore right um but if you add an LLM to the back end then um you have a prompt injection maybe you know another vulnerability where the attacker you know can modify the system prompt or your prompt engineering and then mess with the LLM logic or or the the output and that's becoming then you know so the threat landscape changes and attackers adjust for it and and certainly the tools and the the industry uh adjust to this and um that's that's maybe taking a bit of time right if you think about all the cobalt code we are still seeing.</p>
</details>

**The Pragmatic Engineer:** 我猜我们可以把提示词注入和SQL注入并列了。

**Johannes Doss:** 是的，随着文本变成代码，提示词注入就像是新的代码注入。人类语言成了新的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** yeah but I guess we can add prompt injection right up we can pin it up there with SQL injection in fact who knows prompt injection might become even more uh of with the security issue.

**Johannes Doss:** Yeah, I think as uh you know uh text becomes um code, right? I think uh um prompt injection is kind of like the new code injection, right? The human language is the new code and so if you inject human language, then suddenly uh that's that's your new code injection. So that's interesting from a security perspective.</p>
</details>

### AI时代的新挑战：验证与信任
**The Pragmatic Engineer:** 编码助手如何改变我们对代码安全的思考方式？

**Johannes Doss:** 我认为最大的问题在于，你现在能以更快的速度产出代码，编写代码不再是挑战。新的瓶颈变成了如何验证所有这些代码。如果你不验证，就会导致安全或质量问题，长期来看又会导致安全问题。所以，新的巨大挑战是：如何大规模、高速地验证所有这些快速产出的代码？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And what about uh with coding assistance? Uh are are you seeing things change with in terms of how we think about code security?

**Johannes Doss:** I mean I think the the big problem in terms of security is that you you know produce just uh code much more faster and and and writing code is not the challenge anymore and so suddenly the new bottleneck is how are you verifying all that code right that's the new bottleneck not to get your code done but to verify it that's actually secure and uh if if you don't then that leads to security issues or quality issues which then on the long run lead to security problems right so I think That's the big new uh challenge for for security or code security. How do you verify all of that uh faster produced code at scale and at speed?</p>
</details>

**The Pragmatic Engineer:** 到目前为止，有哪些方法是有效的？

**Johannes Doss:** 你已经提到了关键点，就是增加工具来自动化验证代码。还有一些领域，比如Sonosource正在开创的一些工作，是研究LLM是如何训练的，并确保训练LLM的数据集本身没有常见的安全问题。如果你用高质量、无安全或质量问题的代码来训练你的LLM，你从一开始就能产出更安全的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And what is your take on what is working so far? I mean the obvious thing that I'm hearing a lot of engineers and engineering leaders say is like well we need to scale code reviews. We need to figure out ways where humans can look at code reviews you know like more of them. Meaning let's add tools to them. Let's add additional context. But outside of that, do do you see some other maybe promising areas where where we could actually verify from strictly from a security perspective like is this code secure?

**Johannes Doss:** Yeah, I think you mentioned already the the key things uh right to to to to add tooling to to automatically verify code as you produce it. I think there are also areas where um and and Sonosource is pioneering something here in the field where you basically look at how are LLMs trained and uh you make sure the data set that an LLM is trained on is actually free of uh common security issues, right? And if you do that and train your LLM on high quality uh code, on high quality data free of security or quality problems, you you are producing from the beginning right a much more um secure code and that's maybe uh another uh thing where in the future we will see more of this.</p>
</details>

**The Pragmatic Engineer:** AI生成的代码会引入与人类不同的安全问题类型吗？

**Johannes Doss:** 我认为它们犯的是同样的错误，原因你已经提到了。也许某些问题类型的普遍性会改变。例如，“typosquatting”（域名抢注的变种，指注册与流行库名称相似的包名）是一个很好的例子。AI可能会建议使用一个根本不存在的库，然后攻击者就可以在npm或Maven Central注册那个不存在的包，这样你就突然引入了一个恶意包。这种安全问题以前就有，但开发者输错依赖名称的可能性较小，而有了AI，这种问题的普遍性突然改变了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** And speaking of of this like again because you you you see a lot of code you do a lot of security analysis. Do you see AI generated code introduce different types of security issues than humans would do especially because we know that elements are trained on you know human code in the end.

**Johannes Doss:** I think they're doing the same mistakes for for the reason you mentioned maybe the the prevalence changes of certain issue types right the issue types don't don't change so much but uh what we are seeing for example slop squatting is a good example where you know AI proposes to use a library that doesn't even exist right and then so an attacker can register in in npm or maven central that that that package that non-existing package and then with that you suddenly include a malicious package and and and there's the back door. And so this security issue was known before and we had dependency confusion, but it's just less likely that a that a a um developer um you know mistypes a dependency while with AI that that prevalence changes suddenly, right? There's an acceleration of that.</p>
</details>

同时，其他问题可能会减少。我能想象，像硬编码密码这类单行问题可能会减少一些，因为AI能学会不应该这样做。但我们可能会看到更多复杂的问题，那些需要将多个代码片段组合在一起才能形成安全问题的情况，这对AI来说就没那么容易掌握了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">while other issues maybe uh decrease, right? I could imagine, I'm not seeing this for now, but I could imagine hard-coded passwords like some some issues that are just oneliner issues uh maybe decrease a little because AI is able to learn that you know I shouldn't do that and um uh then we could see a reduction of of of um you know those issues. Still human developers can add them but maybe the more AI generated code is used um we see less of them and then maybe we will see more of the complicated issues right issues where you need to combine multiple code snippets with each other to form a security issue um that is then not so easy for AI to to uh to to to grasp and so u definitely you know some changes in the prevalences of of what we know of already today.</p>
</details>

### 关于安全行业的常见误解
**The Pragmatic Engineer:** 关于安全行业，有哪些常见的误解？

**Johannes Doss:** 我来自安全行业，但这些年我更多地转向了开发者这边。回过头看，安全行业和开发者社区是两个相当独立的社群，这很有趣。我们都在谈论代码和bug，但一方更关注构建，另一方更关注攻击和破坏。由此产生的一个谬论是，安全行业对安全问题着迷，然后销售产品，承诺你可以把安全当作一个产品来购买。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** What are some commonly misunderstood things about the security industry? Things that you know we we we could call them fallacies.

**Johannes Doss:** I mean I come from the security industry right and I I moved uh more to the developer side of the over the years I would say and and now you know stepping a bit back for a moment and looking at the security industry. It's quite fascinating how we have this separated industry and community from the developer community, right? Where we we both talk about code and bucks basically, but one side is maybe more about building things and the other about attacking and destroying and and and so they are a bit distinct somehow and separated. That's that's interesting to me. And um I think one fallacy that comes out of this is uh you know that the security industry is all fascinated about the the security problems and then is selling products basically um that that that promise you know you can have security just as a product right.</p>
</details>

这个行业资金雄厚，由合规性和对数据泄露的恐惧驱动。我认为一个常见的错误是把安全看作一个产品，而不是一个需要融入开发过程的东西。现实中，你必须这样做，而不是买一个工具，每次点击扫描按钮就给你找出一千个新问题。你需要的是能嵌入流程、发现问题、并帮助开发者修复的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and and um I mean there's a lot of money in that industry and it's it's driven by you know compliance and fear of data breaches um and and and so I think as a cuo you have a hard time knowing you know what product should I should I use and and and and buy and and uh often I think a mistake here is to to look at security as a product and not as something that you are building into the process of development right because I think in reality that's that's what uh you must do uh and not have a tool that finds you yet another 1,000 issues if you hit the scan button right uh but something that embeds into the process finding issues but then engaging developers and and and helping you fix things and uh I think that's the the biggest uh fallacy to me.</p>
</details>

另一个误解是关于安全所有权的神秘感，似乎只有顶尖黑客专家才能拥有。我认为界限其实更模糊，更多的是关于修复问题，而不仅仅是安全行业津津乐道的攻击利用阶段。最后，没有绝对完美的安全。如果你从安全行业得到“完美安全”的印象，那可能是一个谬论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We talked about the the ownership that comes with that maybe right. I think there is a bit of this mysterium about security and it can only be owned by experts who are top-notch hackers etc where um I think the lines are a bit more blurry here and um it's it's more about fixing things and not just so much about the exploitation stage all the time that the security industry talks about and and finds fascinating and I myself you know uh am guilty here and and find fascinating. Lastly, maybe this, you know, there is no perfect security. If you get the understanding of the security industry, then maybe that's a fallacy here that uh you know there's no perfect security unfortunately.</p>
</details>

### 追求“足够好”的安全
**The Pragmatic Engineer:** 作为一名从业20年的安全专家，你对工程师有什么建议？我如何知道我的软件足够安全？在什么时候我应该停下来？

**Johannes Doss:** 这很难，因为我们说过完美的安全性很难达到。但关于什么是“足够好”，我认为使用工具是第一步。这有点像保护你的房子，你应该确保关好门窗，做好基本的卫生。这并不意味着一个技术高超或资金雄厚的攻击者就无法闯入，但你可以确保门窗是关好的。软件的挑战在于，你每天都在增加新的门窗。所以你需要自动化来保证基础。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** as a software professional as a security professional in the field for 20 years what can you advise to me as an engineer uh how can I know that my software is secure enough or at what point should I stop and how would you think about this obviously uh there will be differences between if I'm a one person you know tiny business a midsize company at a very large company how would you advise engineers to think about, you know, good enough security. Okay, I can move on. This is good. Let's let's do the other stuff.

**Johannes Doss:** Yeah, it's tough because we said it's it's um you know, perfect security is is um is hard. But then to the question, what is good enough and and how can you solve this? I think using tools is a is the first thing you you you should use, right? I I think um you know, it's like a bit like securing your house, right? like you should make sure you you shut your windows and doors um um and and have some basic hygiene. It doesn't mean that a you know highly skilled or funded attacker can can break in but you can make sure you you shut those windows and doors. I think with software the the challenge is a bit you're adding new windows and doors every day basically like with the new features you're adding and so um I think you need some automation for that uh to have your basics right.</p>
</details>

我建议你可以从一次初步评估开始，看看你今天处于什么位置。然后，更重要的是，在你添加新功能和编码时，确保你没有在此基础上增加更多的问题，包括安全漏洞和技术债。自动化在这里是关键。然后，过一个季度左右，你可以再做一次评估，看看你的进展。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and then I would recommend basically you can start with a initial assessment where where am I standing today right like you can hire professionals or you know use a tool for this and kind of like assess where do I stand today what are my most critical issues I should fix um and and get them fixed. Um, and then more importantly, as you're adding features and as you're coding, making sure you're not adding more on top of that, right? Making sure you're not adding more security vulnerabilities and also you're not adding more technical depth that and quality problems that in the long run lead to security issues. And I think here automation is key basically. Um and then you know after a quarter or something you can run that assessment again and and look at where am I standing and uh hopefully you have been you know very productive as a developer and adding new features that didn't slow you down uh but also you you increased your security posture um at that point.</p>
</details>

**The Pragmatic Engineer:** 这是一个永无止境的故事，而且这个领域在不断发展。我想关注OWASP Top 10总不是坏事，至少可以覆盖最基础的部分。

**Johannes Doss:** 是的，我同意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** it's a never ending story and and it's a growing field right like we always need to be aware of the latest uh changes right now LMS and prompt injections you'll probably need to ask yourself as as If I'm building on top of LMS or I'm invoking APIs, can they go in there and then you know the next thing will come come again and the next and the next and the next. I guess keeping an eye on the OASP top 10 is never a bad thing just to cover the very basics.

**Johannes Doss:** Yeah, I agree.</p>
</details>

### 最安全的编程语言是哪个？
**The Pragmatic Engineer:** 最后一个问题，有点刁钻：你认为哪种编程语言最安全？

**Johannes Doss:** 我认为较新的语言更安全。Go是一个很好的例子。新语言从旧语言的错误中吸取了教训。但其他语言也在发展，比如Java，我们在企业中看到很多，我认为它使用起来也相当安全。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** Now, as a closing question, I'm going to put you on the spot here. Which programming language do you think is the most secure? the the the one that you you are very happy either as using it or observing as like okay this is the language itself seems to help prevent a bunch of security issues to start with.

**Johannes Doss:** I think the newer languages um are more secure. I I like go is a is a is a good example. I think uh you know by default things are just you know new languages learned from the past from from older languages uh what uh goes wrong. But I think also other languages are evolving. I think Java is you know we see that a lot in enterprises and I think it's uh it's uh quite secure to use. Um so so that would be my answer here.</p>
</details>

**The Pragmatic Engineer:** Johannes，这次访谈真的很有趣。感谢你来到播客。

**Johannes Doss:** 谢谢你，很高兴来到这里，也谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** No I I I like that you dropped Go. It's it's it's getting pretty good traction with startups as well in including for now even building web stuff. It's it's picking up. So it's I I guess it's all all down to people's tastes but it's good to hear. So Johannes, this was uh really interesting. Thanks for coming on the podcast.

**Johannes Doss:** Yeah, thank you. My pleasure to be here and uh thanks for the invite.</p>
</details>

### 结语
非常感谢Johannes带我们深入探讨代码安全这个话题。我发现最有趣的一点是，要准确定义什么使代码安全是如此困难，因为存在太多可能的攻击向量。从使用被攻破的依赖，到AI生成带有明显安全漏洞的代码，再到意外泄露凭证，这个列表可以一直列下去。安全感觉就像是软件中一个无形的东西，只要没发现安全问题，它就不会得到太多关注，但一旦出现问题，就会手忙脚乱。作为专业的软件工程师，我们需要与常见的安全漏洞及其防御方法保持同步，包括AI工具带来的新问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">**The Pragmatic Engineer:** Well, thanks very much for this. Thanks a lot to Johannes for taking us deeper into the topic of code security. The thing that I found the most interesting is just how hard it is to define exactly what makes code secure because there are simply so many impossible attack vectors from using a dependency that gets compromised to AI generating code with glaring security vulnerability like not validating inputs to accidentally leaking credentials. The list just goes on. Security feels like this invisible thing across software. As long as there's no security issues discovered, it doesn't get much attention. But once there is, then there's a scramble on what to do. As a professional software engineer, we need to keep ourselves up to date with common security vulnerabilities and how we can defend against them, including the new ones that AI tools introduce.</p>
</details>