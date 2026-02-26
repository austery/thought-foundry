---
author: EO
date: '2026-02-26'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=wEsjK3Smovw
speaker: EO
tags:
  - ai-native-engineering
  - agent-orchestration
  - junior-developers
  - software-development-trends
  - codebase-design
title: AI原生工程师的崛起与多代理协作的艺术
summary: 本次访谈探讨了AI原生工程师的兴起及其对初级软件开发者的影响。内容分析了当前就业市场面临的挑战，包括招聘热潮后的裁员、CS专业毕业生增长以及AI技术的普及。访谈深入阐述了AI原生工程师应具备的核心技能，如扎实的编程基础、系统设计能力以及高效管理和协作AI代理（agents）的能力。此外，还强调了构建代理友好型代码库、通过实验驱动开发以及培养卓越软件品味的重要性。最后，讨论了初级工程师的独特价值和AI原生组织未来的发展方向。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-engineering
project: []
people: []
companies_orgs:
  - Anthropic
products_models:
  - Claude
media_books: []
status: evergreen
---
### AI原生工程师的兴起

**Mihail Eric**: 出现了一种新型工程师，我称之为 AI 原生工程师。AI 就是那种新语言。这一代初级开发者、初级工程师、以及现在进入职场的人，我认为将是这种新转变的第一代。

<details>
<summary>Original English</summary>

**Mihail Eric**: There is this emergence of a new class of engineer, the AI native engineer. AI is that new language. This particular generation of junior developers, junior engineers, people now entering the workforce, will I think be the first generation of that new shift.

</details>

**Mihail Eric**: 单个开发者可以成为代理（agents）的管理者。添加更多代理并不总能创造更好的系统。事实上，如果你只是放任它们为所欲为，它们可能会导致系统变得更糟。所以，真正知道如何妥善处理多个代理，就像游戏中的最终 Boss。如果你能做得非常好，那么你就是字面意义上的顶尖 0.1% 用户。

<details>
<summary>Original English</summary>

**Mihail Eric**: A single developer can become a manager of agents. Adding more agents doesn't always create a better system. In fact, it can make for much worse systems if you just let them go and do whatever they want. So, really knowing how to properly handle multiple agents is like the last boss in a game. If you can do that really, really well, then you are literally the top 0.1% of users, even today.

</details>

**Mihail Eric**: 我是 Mihail。我在旧金山的一家早期创业公司领导 AI 部门。我还在斯坦福大学教授一门课程，课程名称是《现代软件开发者》。这绝对是第一门将重点放在整个软件开发生命周期（SDLC）中 AI 应用的课程。课程宣布并开放报名后几小时内，就有超过 100 名学生试图报名入学。

<details>
<summary>Original English</summary>

**Mihail Eric**: I'm Mihail. I lead AI at an early-stage startup here in San Francisco. I also teach a class at Stanford. The title of the class is 'The Modern Software Developer'. It's definitely the first class where the focus is AI across the SDLC. Within a few hours of the class being announced and opened for enrollment, it filled up with over 100 students trying to get into the class.

</details>

### 初级工程师的困境

**Interviewer**: 初级软件工程师怎么了？

<details>
<summary>Original English</summary>

**Interviewer**: What is happening to junior software engineers?

</details>

**Mihail Eric**: 软件开发领域出现了一种巨大的势头，似乎有什么疯狂的事情正在发生，AI 真的开始渗透到软件开发的每一个环节。显然，有些事情正在改变。我听到了一些相当令人担忧的轶事。我曾与一位刚从伯克利毕业的人交谈，他说他申请了大约一千个职位，却只收到了两个职位的回复。也就是说，甚至没有获得面试机会，你知道，虽然走完了申请流程，但实际上只得到了回复。所以现实是，对于许多初级工程师来说，获得这些职位非常困难。这确实是软件生态系统一个有趣的时期，基本上有三件事汇集在一起，形成了一种“完美风暴”。

<details>
<summary>Original English</summary>

**Mihail Eric**: There was this huge momentum around something crazy happening in software development, and AI is really starting to make its way into every single part of how software is being done. Clearly, something was changing. I've heard some pretty scary anecdotes. I was talking to someone who had just graduated from Berkeley, and they were saying they had applied to like a thousand places and had heard back from like only two places. So, not even got interviews, and you know, had gone through the pipeline, but really just heard back. So the reality is, for a lot of junior engineers, it's very difficult for them to get some of these roles. It's an interesting time in the ecosystem, actually the software ecosystem, where basically three things happened, came together in this kind of like perfect storm.

</details>

**Mihail Eric**: 第一件事是大约在 2021 年，出现了招聘热潮。不久之后，许多公司觉得需要增加员工数量。然后，我认为很多公司意识到自己过度招聘了。于是，发生了大规模的裁员，那些招聘了大量员工的公司发现，实际上我们可以裁掉 20%-30% 的员工，情况依然可以。这与过去 10 到 15 年里，计算机科学（CS）课程和专业的国内外增长极其迅猛的事实相结合。我毕业时，毕业生数量是某个数字，而我估计从那时起，每年毕业的 CS 学生数量翻了一番，甚至可能达到三倍。因此，你看到的是一个庞大的、被裁员的劳动力群体。你还有这一批令人不知所措的新一代工程师，他们想要工作。然后，我认为促成这一切的第三件事是 AI 变得流行起来，对吧？人们开始真正关注 AI。因此，许多雇主开始考虑：我需要招聘更多人来填补空缺，还是可以只招聘更少、但可能更擅长 AI 的人，从而满足我的招聘需求？

<details>
<summary>Original English</summary>

**Mihail Eric**: The first thing that happened was around 2021, there was a huge surge of hiring. Soon after, there was just a bunch of companies that felt they needed to increase their employee count. Then, I think a lot of companies realized that they had overhired. So, there were massive layoffs that happened, where all these companies that had hired a ton of people realized that actually, we can reduce our workforce by 20%, 30%, and it's still okay. That was combined with the fact that the growth of the CS curriculum, the CS major nationally and internationally, has grown tremendously in the last 10 to 15 years. So, when I was graduating, there was a certain number of graduates, and I think since then, it's doubled to maybe 3x in terms of how many graduates from CS are graduating every year. And so, you have a huge workforce of people that have essentially been laid off. You have this new, overwhelming, new generation of engineers who want jobs. And then the third thing that I think contributed to all this was AI became popular, right? People started really paying attention to AI. And so, for a lot of employers, they started considering: Do I need to hire more people to fill my gaps, or can I just hire fewer people that are maybe native at AI, and that way cover the quota that I have for employment?

</details>

**Mihail Eric**: 因此，这一代初级开发者、初级工程师，那些现在进入职场的人，我认为将是那种新转变的第一代，他们既需要扎实的基础知识，又必须知道如何完全成为 AI 原生。

<details>
<summary>Original English</summary>

**Mihail Eric**: And so, this particular generation of junior developers, junior engineers, the people that are now entering the workforce, will, I think, be the first generation of that new shift, where they have to both have good fundamentals but also know how to be fully AI native.

</details>

### AI原生工程师的特质

**Mihail Eric**: 其核心在于，我认为 AI 原生工程师是那些不仅在传统编程、系统设计和算法思维方面拥有扎实基础的人，而且非常擅长使用代理（agentic）工作流。

<details>
<summary>Original English</summary>

**Mihail Eric**: At its core, I think the AI native engineer is one that both has a strong backing and foundation in traditional programming, system design, and algorithmic thinking, but is very competent at using agentic workflows.

</details>

### 多代理协作的艺术

**Mihail Eric**: 我总是教他们“循序渐进”地构建。你知道，来自 Claude 的 Boris 说他一次处理 10 个代理，所以我也应该一次处理 10 个代理。但这是你应该避免的错误。我再说一遍，我会“一次一个”地构建。我会说：“嘿，我非常擅长一次处理一个代理工作流，并且可以用一个代理构建一个复杂的软件。”但随后我知道我必须做另一件事，可能是一个小的改动。将你的任务视为孤立的，并且可以由第二个或第三个代理自信地完成。所以你添加，你知道，第二个代理来修复 Logo，你会想：“好吧，这个代理正在修复 Logo。”另一个代理可能还可以更新网站标题上的文案。再说一遍，这是一个孤立的改动，与第二个代理正在做的事情无关。所以，我的想法是迭代地为代理添加更多工作。确保你首先理解需要做什么，然后知道这些工作项之间的界限在哪里。然后，当你对一个代理如何完成某项工作感到满意时，再添加第二个。然后，如果第二个代理做得很好，你感到自信，再添加第三个。所以，我会更“一步一步”地构建，而不是一次性处理 10 个代理。

<details>
<summary>Original English</summary>

**Mihail Eric**: I always teach them to build it up piecemeal. You know, Boris from Claude said he does like 10 agents at once, and so I should start doing 10 agents at once. That's the wrong outcome to emphasize. Again, I would build it one at a time. I would say, 'Hey, I'm really good at doing one agent workflow quite well, and I can build a complex piece of software with one agent.' But then I know that I have to do this other thing, which is maybe a small change. Thinking about your tasks as something that are isolated and can be done with confidence by a second or third agent. And so you add, you know, a second agent to fix the logo, and you're like, 'Well, this agent is fixing the logo.' Another agent maybe could also update the copy on the header of the website. And again, this is an isolated change that has nothing to do with what the second agent was doing. So, the way I would think about it is iteratively add more work for the agents. Make sure that you first understand what has to be done, and then know where the lines are between those items of work. And then, when you're feeling good about how one agent is doing something, then add a second one. Then, if the second one's doing well and you're feeling confident, then add a third one. So, I would build it up more step by step rather than 10 agents at once.

</details>

**Mihail Eric**: 我认为第二件非常非常重要的事情是知道如何“切换上下文”。在实践中，你所做的是启动这些“实习生”。基本上，它们是非常积极、精明的实习生，这些代理，它们在做一件事，然后你只是在终端或 IDE 中观察它们，看着它们工作，贡献代码，代码被写到某个地方。但有时它们会卡住，对吧？你如何从一个代理切换到另一个，理解“嘿，这个代理一正在处理这个特定任务，代理二正在处理另一个任务，代理三正在处理另一个任务”，然后你不断地来回切换？即使是作为人类，这也是一件非常困难的事情，对吧？要记住上次在做什么，但仍然有足够的上下文来有意义地推进该任务。因此，我认为这种切换是实现多代理工作流（multi-agent workflows）良好运行的核心技能之一。

<details>
<summary>Original English</summary>

**Mihail Eric**: The second thing that I think is really, really important there is knowing how to context switch. In practice, what you're doing is you're kicking off these interns. Basically, they're very eager, savvy interns, these agents, and they're doing a thing, and then you're just watching them in the terminal or in the IDE, and you're just seeing them do work, and they're contributing code, and it's getting written somewhere. But sometimes they get stuck, right? How do you go from one to another to understanding, 'Hey, this agent one was working on this particular task, agent two was working on another task, agent three was working on another task,' and then you're constantly switching back and forth? And it's a very difficult thing to do even as a human, right? To know how to remember what the last thing was working on, but still have enough context to meaningfully push that task forward. And so, that switching, I think, is probably one of the core skills of getting multi-agent workflows to work really well.

</details>

**Mihail Eric**: 我所描述的基本上就是造就一名优秀管理者——一名优秀人类管理者——的原因。这与代理（agent）无关。如果你能非常出色地完成这项任务，那么你通常也是一名非常优秀的管理者。我见过最擅长此道的人，就是那些曾经管理人类——你知道，人类开发者——并学会了如何进行上下文切换，然后将类似原则应用于代理的人。

<details>
<summary>Original English</summary>

**Mihail Eric**: What I've described is basically what makes a good manager, a good human manager. It has nothing to do with an agent. If you can do that task really, really well, then you are also a very good human manager in general. And so, the people that I've seen best at doing that are the ones that have also been managers of humans, you know, or human developers, and have learned how to do that context switching, and then apply similar principles to agents.

</details>

### 构建代理友好型代码库

**Mihail Eric**: 我提出了一个概念，我称之为“代理友好型代码库”（agent-friendly codebase）或“代理友好型开发生态系统”。我的意思是，如果一个代理被释放到你的代码库中，它是否知道如何理解代码库中正在发生的事情？当你释放一个代理去你的代码库环境中进行构建时，你如何确保它们不会破坏东西，并且它们贡献的内容能够正常工作？方法是让它们在你的测试中进行测试，而测试基本上是定义软件正确性的契约。你需要定义这些契约。如果你没有足够的测试覆盖率，那么你的软件就没有契约。代理只能在契约上操作，就像明确定义的软件契约一样。

<details>
<summary>Original English</summary>

**Mihail Eric**: There's this concept that I'm calling an 'agent-friendly codebase' or an 'agent-friendly development ecosystem'. What I mean here is, if an agent was released into your codebase, would it know how to understand what's happening in the codebase? When you release an agent to go and build in the context of your codebase, the way you ensure that they're going to not break something and that whatever they contribute will work, is they test it against your tests, which are basically contracts that define the correctness of software. You need to define these contracts. If you don't have enough test coverage, then you don't have contracts for your software. Agents can only operate on contracts, like explicitly defined contracts of software.

</details>

**Mihail Eric**: 任何在行业内工作过的开发者都知道，README 文件几乎会立即过时，与代码中的实际情况不符。你会有这两种对同一事物的描述：代码说一套，README 说另一套。如果你的代码出现这种情况，那么代理会阅读 README，可能还会阅读代码，然后它们会问：“这些哪个是正确的解释？我应该遵循 README 的说法，还是代码库的说法？”所以，确保它们是一致的，对吧？

<details>
<summary>Original English</summary>

**Mihail Eric**: Any developer who's been in the industry knows that readmes get out of date with what's happening in the code almost immediately. You have these two descriptions of the same thing: the code says one thing, but the readme says something completely different. If your code has that kind of situation, then the agent will read the readme and maybe the code, and they'll ask, 'Which of these? What's the right interpretation? Should I follow what the readme says or what the codebase says?' And so, make sure they're consistent, right?

</details>

**Mihail Eric**: 这是一个简单的问题。当你遇到“意大利面条式代码”（spaghetti code）时，通常是因为一个代理可能已经进行了多次迭代，也许是多个功能的构建，然后它开始有点“脱轨”。代理的一个糟糕之处在于它们会非常迅速地“复合错误”。如果一个代理在代码中有一个误解，然后它看到了自己在第一步造成的那个误解，它可能会“加倍下注”，在第二步产生另一个错误，从而放大它。最重要的事情是确保代理首先看到的东西是完全健壮的、设计上完全天衣无缝的，包括测试和构建——就像代码库本身的许多核心部分——在你考虑代理之前。

<details>
<summary>Original English</summary>

**Mihail Eric**: This is a simple thing. When you get spaghetti code, it's typically when an agent has maybe gone on and built something for multiple iterations, maybe multiple features, and it just started going off the rails a little bit. One bad thing that they're really good at is agents can compound errors very quickly. If an agent has one misunderstanding in a code, and then it sees that misunderstanding that it created in step one, it can double down and create another error in step two; it'll magnify it. The most important thing is making sure that the first thing that the agent sees is completely robust and airtight in terms of design, testing, and the build – like a lot of these core parts of the codebase itself – before you even think about the agent.

</details>

**Mihail Eric**: 所以，再次强调，要确保代理首先看到的你的代码版本是自洽的，确保它经过充分测试，确保你已经设置了代码检查（linting）和风格检查，这样你的代码库就能保持一致的格式。这些事情中的许多都将确保你的代理始终遵守你已经定义好的代码库规则。最后，我再举一个关于代理友好型、代理优先代码库的例子：你的代码中的设计模式是否一致？我的意思是，如果你的代码库中有 A 部分，当你创建一个特定类型的对象时，你使用一个 API；而在代码库的 B 部分，你也创建相同的对象，但你使用的是另一个 API。当一个代理现在需要在你的代码库中进行开发时，它应该使用哪一个？你应该使用 API 1 还是 API 2？如果代理选择了错误的 API，那么人类也会感到困惑。如果我走过你的代码库，看到两种不同的做法，我也会问自己：“我应该用一种还是两种？我不知道。我看到了两种。”我可能会问队友：“嘿，我们到底应该用哪一个？”

<details>
<summary>Original English</summary>

**Mihail Eric**: So again, making sure that the first version of your code that an agent sees is self-consistent, making sure that it's well tested, making sure that you have linting in place and style checking so that your codebase is consistently formatted. A lot of these things will ensure that your agent is always adhering to the rules of your codebase that you've already defined. And then the last thing that I'll add, just to give another example of agent-friendly, agent-first codebases: Are you consistent about design patterns in your code? What I mean here is, if there's one part of your codebase where when you create a certain kind of object, you use this one API, and there's another part of the codebase where you also create the same object, but you're using a different API. When an agent now has to develop in your codebase, which of the two should it use? Should you use API 1 or API 2? And if people have an agent that goes and picks the wrong API, well, a human would also have been confused. If I were walking through your codebase and saw the two different ways of doing it, I would also ask myself, 'Should I do one or two? I don't know. I see both.' And I would probably end up asking a teammate, 'Hey, which of these are we actually supposed to use?'

</details>

**Mihail Eric**: 我认为，一致的设计模式和编程模式也是我见过的最优秀的代理友好型代码库所使用的。

<details>
<summary>Original English</summary>

**Mihail Eric**: Consistent design patterns and programmatic patterns, I think, is also something that the best agent-friendly codebases I've seen use.

</details>

### 卓越软件的品味与实验

**Interviewer**: 功能性软件与卓越软件

<details>
<summary>Original English</summary>

**Interviewer**: Functional software versus incredible software.

</details>

**Mihail Eric**: 定义功能性软件与卓越软件的几个关键点在于“品味”——什么是好的软件品味，对吧？确实，有些人有品味，有些人没有，或者有些人有品味但花更多时间去培养它。在我看来，我班上的学生，我们有一些要求，比如你必须构建五个不同的流程。你可以完成这些流程，但如果你想挑战自己，比如完成“奖励”（bonus）和“额外学分”（extra credit）部分，我认为差异就开始显现了。那就是当某人说：“我知道我已经在这个任务上达到了 100% 的分数，或者获得了大部分学分，但我真的很想构建最复杂的东西，因为我想解决问题，而不仅仅是为了分数。”但品味的培养发生在“最后一英里”，你投入时间和精力去做额外的工作来扩展功能，使其更健壮，让应用程序能实现更多可能。你知道，我认为表现最好的学生，就是那些现在围绕他们的项目建立初创公司的人，因为他们看到了其中的潜力，并正在全力以赴。你知道，课程结束了，但他们还在继续做同样的事情，因为他们认为这里还有更多可以构建的东西。我认为这就是顶尖工程师的思维方式。“实验”是成为 AI 原生软件开发者的游戏规则。

<details>
<summary>Original English</summary>

**Mihail Eric**: A few things define functional software versus incredible software. The one version of the answer is just taste – what is good software taste, right? Genuinely, there are people that have taste and don't have taste, or just people that have taste that spend more time developing that taste. When I look at the students in my class, we had some requirements like you have to build five different flows or something. You can create those flows, but if you want to push yourself, like doing the bonus, the bonus and then the extra credit – that is where the difference starts to arise. It's when someone is like, 'I know I've already hit 100% on this, or got most of the credit for the assignment or the project, but I really want to build the most complex thing because I want to solve a problem more than just get the grade.' But the taste-building happens in that last mile, where you go spend and do the extra work to expand the feature, make it more robust, make more things possible in the application. You know, the students again that I think did the best were the ones that are now literally building startups around their projects because they see that there's something there and they're rolling with it. You know, like the class ended, but they're like, 'We're still working on the exact same thing because we think there's more to build here.' And that, I think, is where the top engineers think. Experimentation is sort of the name of the game in becoming an AI native software developer.

</details>

**Mihail Eric**: 一个想到的例子是 Boris 从 Claude 来演讲的时候。像 Boris 这样的人，甚至是像 Anthropic 的 Claude 团队，他们构建了如此出色的软件，他们基本上每周或每两周就使用 Claude 来重写 Claude 本身。所以他们不断地用他们自己构建的软件来重写他们自己的软件。因此，他们自己也在边做边摸索；他们构建系统，但他们也在进行实验，并根据用户的反馈不断迭代。即使他们看起来好像知道所有答案，但事实并非如此。他们自己也在发现什么有效，什么无效。所以，更重要的事情是将实验融入你自己的工作流程。我试图向学生们强调：看，我可以来这里给你建议，我可以告诉你应该尝试这个工具，这是我认为这个工具好的地方。但归根结底，你必须自己“撞墙”一点。你必须能够实验。你必须能够看到什么对你有效，什么对你无效，并真正将其融入到新的软件开发方式中：实验、“黑客”（hacking）精神，并将其作为你工作流程的一部分。

<details>
<summary>Original English</summary>

**Mihail Eric**: One example that comes to mind is when Boris came from Claude to speak. Someone like Boris, even a team like Claude at Anthropic, that is building such an amazing piece of software, they basically rewrite Claude every week or every two weeks using Claude. So they are constantly rewriting their own piece of software with software like that they've built. And so they themselves are also figuring things out as they go; they are building their system, but they are experimenting and constantly iterating based on feedback from their users. And even if they seem like they have all the answers, they don't. They themselves are also discovering what works and what doesn't work. And so, the more important thing is to build experimentation into your own workflows. And I tried to reinforce in the students: Look, I can come here and give you suggestions. I can say you should try this tool, here's what I think is good about this tool. But at the end of the day, you have to sort of beat your head against the wall a little bit yourself. You have to be able to experiment. You have to be able to see what works for you and what doesn't work for you, and really just make that a part of the new way of doing software development: experimentation, hacking, and just making that a part of your workflow.

</details>

### 为何仍需初级工程师

**Interviewer**: 为什么世界仍然需要初级软件工程师？

<details>
<summary>Original English</summary>

**Interviewer**: Why the world still needs junior software engineers?

</details>

**Mihail Eric**: 从历史上看，资深开发者往往对 AI 工具有些抵触，因为他们已经习惯了自己的工作方式，他们已经开发了 20 年，他们会想：“哦，做这件事的唯一方法就是我一直以来做的那种方式。”资深开发者有时是最固执的。但对于第一次进入这个行业的人来说，他们就像一块海绵。一切对他们来说都是可能的。他们是第一次学习这些东西。因此，世界上、社会上、行业和各个领域中那些困难的事情，他们还没有内化。他们没有被医疗保健有多难这样的事情“伤害”过。他们只是看到一个问题，然后想：“哦，我看到了一个问题。为什么我不去尝试解决它呢？”所以，年轻人思考问题有一种很好的“天真”（naivety），这对于创业公司创始人来说非常完美。他们会足够勇敢去应对挑战。在这些情况下，他们最终会成为那些掌握了大家现在都在寻求的技能集的人。即使有担忧认为找工作变得越来越难，但我认为那些第一次学习这些技能的人最终会是最灵活、最快速掌握这些技能的人。所以，我实际上认为他们仍然可以以资深开发者无法做到的方式取得成功。

<details>
<summary>Original English</summary>

**Mihail Eric**: Senior developers historically tend to be a little bit resistant to AI tools because they're so ingrained in their own way of doing things; they've been developing for 20 years and they're like, 'Oh, the only way to do this is the way that I've done it.' The senior developer is sometimes the most stubborn. But someone who is coming to the industry for the first time, they're like a sponge. Everything is possible to them. They're learning things for the first time. And so, all of the things that are difficult about the world, society, industries, and verticals, they haven't internalized yet. They're not scarred by how hard healthcare is. They just see a problem and think, 'Oh, I see a problem. Why don't I go try and do it?' And so, there's a good naivety to how young people think, which is perfect for a startup founder. They're going to be brave enough to go and tackle the thing. In those situations, they end up being the best people who have adopted that skill set that everyone is now asking for. Even if there is concern that it's becoming harder to get employed, I think the people that are learning these skills for the first time end up being the most nimble and fastest at using those skills. So, I actually think they can still succeed in ways that senior developers cannot.

</details>

### 开发者的思维模式

**Mihail Eric**: 从根本上说，你在软件教学中传授的是如何运用数字手段思考构建复杂系统，以及如何学习使用算法来解决该系统的问题。这几乎更像是数学，而不是计算机科学（CS），对吧？你几乎是在学习数学技能。我认为这就像在教人如何思考，因为 CS 职业的很大一部分就是分解事物，了解事物如何运作，然后修复它们，扩展它们，并进行迭代。因此，我认为那些以开发为职业的人，他们更愿意定制事物。他们更愿意在事物不起作用时进行修复。他们更愿意说：“嘿，为什么会发生这种情况？让我看看我是否能深入研究一下，你知道，深入了解内部机制。”而其他人则更倾向于：“系统不起作用了。好吧，我猜我需要离开它。”这几乎是一种“傲慢”。一个开发者看到任何问题，就认为软件是解决问题的方案，这是一种“傲慢”。这是一种自信，可以说：“嘿，我将尝试用我懂得如何使用的方式来解决这个问题，我将使用我懂得的工具，让我们看看是否能让它奏效。”我认为这就是 CS 开发者的最强大的特质。

<details>
<summary>Original English</summary>

**Mihail Eric**: Fundamentally, what you're teaching with software is how to think about building a complex system using digital means and learning how to use algorithms to solve that system. This is almost more like math than CS, right? It's like you're learning math skills. And I think that that is just like teaching someone how to think, because so much of the CS profession is breaking things up, seeing how things work, fixing things, expanding on things, and iterating on things. And so, I think that the people that are developers by trade, they're a lot more willing to customize things. They're a lot more willing to fix things when they don't work. They're a lot more willing to say, 'Hey, why did this happen? Let me see if I can get into that, get into the internals a little bit.' In ways that other people are more like, 'The system doesn't work. Okay, I guess I need to move away from it.' Almost like arrogance. The arrogance of a developer sees any problem and thinks software is the solution to the problem. It's the confidence to say, 'Hey, I'm going to try and fix this in a way that I know how to use, and I'm going to use the tools that I know how to use, and let's see if we can make this work.' And that, I think, is the most powerful property of CS developers.

</details>

**Mihail Eric**: 所以你就像说：“Claude，给我做点什么。Codeex，给我做点什么。”然后你说：“我们来添加这个功能。”然后“再来一个。”一个月过去了，你构建了最精美的软件。它被过度设计了，然后你发布了，却没人想要。

<details>
<summary>Original English</summary>

**Mihail Eric**: So you're like, 'Claude, make me something. Codeex, make me something.' And then you're like, 'Let's add this other feature.' And then, 'Let's do another one.' And a month goes by, and you've built the most beautiful piece of software. It's crazy overengineered, and then you launch, and nobody wants it.

</details>

### AI原生组织的未来

**Rem Koning**: 大家好，我叫 Rem Koning。我是哈佛商学院的教授，研究创业和 AI。我认为我们正处在一个日益重要的世界，那就是你分配智能的能力。AI 原生的关键在于，你不仅仅是使用 AI 来完成工作，而是将其嵌入产品中，这样 AI 就可以直接与客户一起完成工作。你想将人类排除在循环之外。这是构建 AI 原生组织的关键。当 AI 开始相互交流时会发生什么？当 AI 开始协作时会发生什么？它们彼此需要什么？我认为这是一个重大且有趣的问题。这样想可能有点挑衅，但我认为这将诞生一些万亿美元的公司。

<details>
<summary>Original English</summary>

**Rem Koning**: Hi, my name is Rem Koning. I'm a professor at Harvard Business School, and I study entrepreneurship and AI. I think we're in a world where increasingly what matters is your ability to allocate intelligence. The key for AI native is that you're not just using it to do the work; you're embedding it in the product so that the AI can directly do the work with the customer. You want to take you, the human, out of the loop. That's the key to building AI native organizations. What happens when the AI starts talking to one another? What happens when the AIs start collaborating? What do they need from one another? I think is a big, interesting open question. It's a little provocative to think that way, but I think it's one where there will probably be some trillion-dollar companies that come out of answering that question.

</details>