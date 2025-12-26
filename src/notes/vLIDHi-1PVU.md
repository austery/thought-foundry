---
area: "tech-engineering"
category: technology
companies_orgs: []
date: '2025-09-26'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project: []
series: ''
source: https://www.youtube.com/watch?v=vLIDHi-1PVU
speaker: Anthropic
status: evergreen
summary: Anthropic 的 Meaghan 深入探讨了 Claude Code 独特的终端界面设计、其如何简化开发者工作流，以及大型语言模型如何重塑软件开发和团队协作。
tags:
- claude-code
- code
- design
- llm
- technology
title: Claude Code 的设计哲学：终端、LLM 与开发者工作流的融合
---
### 欢迎与产品介绍

- Hi, I'm Alex. I lead Claude Relations here at Anthropic. Today we're talking about design for Claude Code and I'm joined by my colleague Meaghan.

- 大家好，我是 Alex，Anthropic 的 Claude 关系负责人。今天我们来聊聊 **Claude Code** (一款基于AI的编码产品) 的设计，我的同事 Meaghan 也加入了我们。

- Hi, my name is Meaghan and I'm the design lead for Claude Code.

- 大家好，我是 Meaghan，我是 Claude Code 的设计主管。

### Claude Code 的独特终端形态

- Meaghan, I wanna start with the very unique form factor that Claude Code has. So, we built this coding product and it lives within a terminal. Can you tell me how we even got to that?

- Meaghan，我想从 Claude Code 独一无二的产品形态开始聊。我们构建了这款编码产品，它运行在终端中。你能告诉我我们是如何做到这一点的吗？

- Yeah, yeah, definitely. Well, if you've seen some of our previous videos, you know that Claude Code was a brain child of a few folks here at Anthropic who are really passionate about Claude's ability to solve coding problems and help developers. And, part of the initial decision for CLI was really just the ease of the form factor to be able to build really quickly and to iterate on features and functionality. But I think from there, really, kind of against honestly my expectations and all our expectations, it took a life of its own because it's just so versatile. Like, a terminal is in every developer's workflow. Whether or not you're primarily in IDE or even if you're just like a Vim user, you're using terminal as part of your workflow in one shape or another. And so, it lets you really integrate directly into developer's workflow, where they are today without needing to adopt a new tool of any sort.

- 是的，当然。如果你看过我们之前的一些视频，你会知道 Claude Code 是 **Anthropic** (一家人工智能公司) 几位同事的创意结晶，他们对 Claude 解决编码问题和帮助开发者的能力充满热情。最初选择 **CLI** (Command Line Interface: 命令行界面) 的部分原因，确实是因为这种形态易于快速构建和迭代功能。但我觉得从那时起，它真的，坦白说，超出了我和我们所有人的预期，它获得了自己的生命力，因为它太通用了。终端存在于每个开发者的工作流程中。无论你主要使用 **IDE** (Integrated Development Environment: 集成开发环境)，甚至如果你只是一个 **Vim** (一种文本编辑器) 用户，你都会以某种形式将终端作为你工作流程的一部分。因此，它能让你真正直接地融入开发者的工作流程，无需他们采用任何新工具。

- I think that's like a really good point is like the terminal's kind of been a foundational piece of software development since, man, since forever basically, as long as we've been doing this. So it's almost natural to kind of embed the next generation of a coding product within it. But Claude Code does some things that I didn't even know were possible with a terminal. So, maybe like, walk me through what has kind of the history been of terminal products thus far, and how is Claude Code like the next step there?

- 我认为这是一个非常好的观点，终端自软件开发诞生以来，基本上就一直是其基础组成部分，可以说从我们开始做这行起就一直存在。所以，将下一代编码产品嵌入其中几乎是顺理成章的。但 Claude Code 做了一些我甚至不知道终端也能实现的事情。那么，你能否带我回顾一下迄今为止终端产品的历史，以及 Claude Code 如何成为其中的下一步？

### 终端界面的演变与 LLM 的回归

- Yeah, this is something I'm personally, very, very passionate about. I think terminals are like the first user interface, right? Like, they're the first ways that people used to talk to computers. They were text-only. There were like very specific commands you needed to know in order to be able to interface with these devices. And they're like a super-powered tool. And then, kind of from there, we evolved into these really rich web interfaces. We had like all these beautiful web UI, we had like Tailwind, we had like CSS, we had JavaScript, everything became very animated and very polished. But then when LLMs came out, we actually went all the way back to just chatting with a computer again. Like, you didn't actually need all these buttons, you just needed to chat. And so I think terminal, interestingly, is actually the perfect form factor for an LLM. 'Cause you're giving text in, you're getting text out, and it just is like so native to how you think about using like a command line interface that it was like a beautiful marriage, I think, of like what the technology can do and what the product can do. And then it just happened to be that developers also spend their time there, so it's great.

- 是的，这是我个人非常非常热衷的话题。我认为终端是第一批**用户界面** (UI: User Interface)，对吧？它们是人们最初与计算机交流的方式。它们是纯文本的。你需要知道非常具体的命令才能与这些设备交互。它们就像一个超级强大的工具。然后，从那时起，我们演变成了这些非常丰富的网页界面。我们有了各种漂亮的网页 UI，我们有了 **Tailwind** (一个CSS框架)，我们有了 **CSS** (Cascading Style Sheets: 层叠样式表)，我们有了 **JavaScript** (一种编程语言)，一切都变得非常生动和精致。但当 **LLM** (Large Language Model: 大型语言模型) 出现时，我们实际上又回到了与计算机聊天的方式。你不再需要所有这些按钮，你只需要聊天。所以我认为，有趣的是，终端实际上是 LLM 的完美形态。因为你输入文本，输出文本，它与你思考如何使用命令行界面的方式是如此的自然，我认为这是技术能力和产品能力的美妙结合。而且碰巧开发者也把时间花在那里，所以这很棒。

- I see. So we're almost like going full circle to some degree, because the model allows us to do it in some sense and removes the need for the UI abstractions that we've had to develop previously for different applications.

- 我明白了。所以我们某种程度上几乎是回到了起点，因为模型在某种意义上允许我们这样做，并且消除了我们以前为不同应用程序不得不开发的 UI 抽象层的需求。

- Mm hm. Mm hm. Exactly. Exactly. I also think big part of why I think Claude Code is successful is, you know, no one likes copying and pasting things, from like a web UI to like your local file. Like, I definitely do this all the time when I'm using Claude AI. And so being able to be like natively in the environment where everything lives is just such a rich part of the experience. But it does come with some challenges. You know, CLI is not necessarily the most rich interaction surface.

- 嗯哼。嗯哼。没错。没错。我还认为 Claude Code 成功的一个重要原因在于，没人喜欢从网页 UI 复制粘贴东西到本地文件。比如，我自己在用 Claude AI 的时候就经常这么做。所以，能够原生地存在于所有事物所在的环境中，这真是体验中非常丰富的一部分。但它确实也带来了一些挑战。毕竟，CLI 不一定是交互最丰富的界面。

- Mm.

- 嗯。

### 简化开发工作流：从复制粘贴到直接编辑

- Let's talk more on that workflow piece because I remember very vividly when I was first using Claude and using language models for programming, and I would be on the website on claude.ai and type in a prompt and paste in a file, then all of a sudden I'd get a code output and I have to copy it, find my file on my local computer, paste it in, make the edits myself manually. And now, we've kind of taken out that piece of the developer workflow and gone straight from the prompt to the direct edits on the file.

- 让我们多谈谈工作流这部分，因为我清楚地记得，当我第一次使用 Claude 和语言模型进行编程时，我会在 claude.ai 网站上输入提示，粘贴文件，然后突然得到代码输出，我必须复制它，在本地计算机上找到我的文件，粘贴进去，然后手动进行编辑。而现在，我们已经将开发者工作流的这部分去掉了，直接从提示跳转到对文件的直接编辑。

- Mm hm.

- 嗯哼。

- Can you tell me a little bit more about how we're thinking about future iterations of this dev workflow and this dev loop within Claude Code?

- 你能再多告诉我一些，我们是如何考虑 Claude Code 中这种开发工作流和开发循环的未来迭代的吗？

- Mm hm. Mm hm. Absolutely. I think the way that I've been thinking about it within the team, and a lot of folks will talk about it, is, you know, the developer workflow initially started as writing lines of code. Like you're at a word level, you're at a function level and like that's where you spend time. And then the first really big AI development for coding was tab to auto complete. But that's still not a line level of code. When we get to kind of the first-generation of Claude Code, we're up-leveling it to like full file changes or like full task changes, almost like a PR level. And of course, there are some things that Claude Code can do better or worse, but we're trying to kind of move in that direction. As time goes on, as our models get more intelligent, as our capabilities get stronger, I think we're gonna be moving not just from a specific task, but almost to like a project level, where you're orchestrating multiple Claudes from multiple places in order to be able to accomplish something. And I think the tasks will be longer running and the Claude will be a lot more autonomous. And so, you'll just get into a place where I do believe eventually, well, we might outgrow the CLI, but also you're operating at a higher order of workflow than you ever were before as a developer.

- 嗯哼。嗯哼。当然。我认为我在团队中一直思考的方式，以及很多人都会谈论的方式是，你知道，开发者工作流最初是从编写代码行开始的。你是在单词层面、函数层面工作，那才是你花时间的地方。然后第一个真正重大的编码 AI 发展是 Tab 键自动完成。但这仍然不是代码行级别的。当我们谈到第一代 Claude Code 时，我们正在将其提升到文件级别的修改，或者说任务级别的修改，几乎达到了 **PR** (Pull Request: 拉取请求) 级别。当然，Claude Code 有些事情做得更好或更差，但我们正努力朝着这个方向发展。随着时间的推移，随着我们的模型变得更智能，随着我们的能力变得更强，我认为我们将不仅仅是从特定任务层面，而是几乎达到项目层面，你将协调来自多个地方的多个 Claude 来完成某项任务。而且我认为任务的运行时间会更长，Claude 会更加自主。这样，你就会达到一个境地，我确实相信最终，我们可能会超越 CLI 的限制，但作为开发者，你的工作流也会比以往任何时候都处于更高的层次。

### Claude Code 的设计架构与创新

- Mm, okay. Related to the agent front, I know that we just recently, a few weeks ago, put out subagent a product. Can you talk more about that and how this kind of paradigm of slash commands and subagent workflows and some of the other features that we've shipped under the hood of Claude Code, how do those all tie together?

- 嗯，好的。关于代理方面，我知道我们几周前刚刚发布了 **Subagent** (子代理) 产品。你能多谈谈这个吗？以及像斜杠命令、子代理工作流以及 Claude Code 内部我们发布的一些其他功能，它们是如何结合在一起的？

- Yeah, definitely. So I think part of the reason terminal is so great is because it has a built-in architecture of how you control the interface, right? You have your flags that you put in as you launch Claude, and then you have your commands that you have within kind of a terminal. And we introduced a very new paradigm, which is prompting in the terminal. There was so much debate. I even have a doc that I have with Boris from like I think November, December of last year of like, we can't put outlines in terminal because when you resize the window it's gonna break everything. Every experience I've ever had with designing for CLIs before, I like avoid outlines like the plague because it breaks everything when you have that much-

- 是的，当然。我认为终端之所以如此出色，部分原因在于它拥有一个内置的界面控制架构，对吧？你在启动 Claude 时会输入你的标志 (flags)，然后在终端内部有你的命令。我们引入了一个非常新的范式，就是在终端中进行提示 (prompting)。为此有过很多争论。我甚至有一份和 Boris 在去年十一、十二月左右的文档，上面写着：我们不能在终端中放置轮廓 (outlines)，因为当你调整窗口大小时，它会破坏一切。我以前所有为 CLI 设计的经验都让我像躲瘟疫一样避开轮廓，因为它会在你有很多……

- What is an outline?

- 什么是轮廓？

- It's like the outline around the input box-

- 就是输入框周围的轮廓——

- Oh, I see, yeah.

- 哦，我明白了，是的。

- That you have right now. You tend to avoid those in CLI design because when you resize, it's all just characters and spaces.

- 你现在看到的那个。在 CLI 设计中你通常会避免使用它们，因为当你调整大小时，它就只是字符和空格。

- Right.

- 对。

- And so it doesn't align properly. But Boris had a vision and I was wrong. Like, we found a great library and a great interface and the team worked really hard to make it usable. And so the combination of being able to separate your prompting, which is how you're talking to the model, and then the tools that you have available, which is our slash commands, and the settings and the way you configure it, which is in our settings.json and our CLAUDE.md, I think that's kind of the architecture that I think powers Claude Code, but also is just part of the regular architecture of software development. Like a README file is very similar, so it just pairs really beautifully.

- 所以它不能正确对齐。但 Boris 有一个愿景，我错了。我们找到了一个很棒的库和一个很棒的界面，团队非常努力地让它变得可用。因此，能够将你的提示（你与模型对话的方式）、你可用的工具（我们的斜杠命令）、以及你配置它的设置和方式（在我们的 settings.json 和 CLAUDE.md 中）结合起来，我认为这就是驱动 Claude Code 的架构，但它也只是软件开发常规架构的一部分。就像 README 文件非常相似，所以它结合得非常完美。

- Mm.

- 嗯。

### 设计原则与模型赋能

- How do we actually design new things like the outline box or just the visual aesthetics? Do we have design principles we follow? Is there rules or, just walk me through that process.

- 我们是如何设计像轮廓框这样的新事物，或者仅仅是视觉美学呢？我们有遵循的设计原则吗？有什么规则吗？请你为我讲解一下这个过程。

- Yeah, definitely. I would say everyone is an inventor here at Anthropic and at the Claude Code team. So, for the most part, it's a small team of like one or two engineers coming up with ideas and then prototyping them and then we rigorously test 'em internally. For the most part, they are used by all of, everyone at Anthropic, everyone uses Claude Code. And so, that's where we get a lot of our feedback. And then we'll typically do a cycle of UX polish towards the end when we feel like we have the right shape of what this technology should be. Subagents was a really fast one, where it went from like an idea to lend and there was a little bit of design polish on like how we show a subagent and differentiate from like a subagent versus Claude, how you set it up. Same thing with MCP. But the big principles I think that I hold and push for very dearly is, you know, a CLI is a very limited interface. We need to keep it clean as possible, and so we wanna make sure that we're not flooding it with a lot of information and just keeping it really focused on the task that you're doing. The second is that we really want the model to shine because at the end of the day, part of the reason CLI is so nice is that it's the thinnest wrapper possible around our models. And so you just get access to the raw capability of Claude and that's honestly what makes Claude Code so powerful.

- 是的，当然。我想说，在 Anthropic 和 Claude Code 团队，每个人都是发明家。因此，在大多数情况下，这是一个由一两名工程师组成的小团队，他们提出想法，然后进行原型设计，接着我们在内部进行严格测试。在大多数情况下，所有 Anthropic 的员工都在使用它，每个人都用 Claude Code。所以，我们从那里得到了很多反馈。然后，当觉得这项技术有了正确的形态时，我们通常会在最后进行一轮用户体验的打磨。子代理 (Subagents) 的开发速度非常快，它从一个想法迅速落地，然后我们对如何展示子代理、如何区分子代理和 Claude、以及如何设置它进行了一些设计上的打磨。**MCP** (可能是 Multi-Claude Project 或其他内部术语，在此处未给出全称，根据上下文理解为类似 Subagent 的另一个项目或功能) 也是如此。但我非常坚持并极力推崇的两个主要原则是：你知道，CLI 是一个非常有限的界面。我们需要尽可能保持它的简洁，所以我们想确保不会用大量信息淹没它，而是让它真正专注于你正在执行的任务。第二个原则是，我们真的希望模型能够大放异彩，因为归根结底，CLI 如此出色的部分原因在于它是我们模型上最薄的一层封装。因此，你直接获得了 Claude 的原始能力，而这正是 Claude Code 如此强大的原因。

- Mm.

- 嗯。

### 令人喜爱的小细节与个性化

- Do you have any favorite little design polishes or things that, touches in Claude Code?

- 在 Claude Code 中，你有没有什么特别喜欢的小设计润饰或细节？

- I definitely do. I really like the ASCII reticulating and thinking. I think those are such a great point of personality for Claude. And I also really, really like the different modes, how we've like outlined if you're in thinking mode, or planning mode, or auto-accept mode, I think it's just a very rich way to communicate complex information in a way that people can understand.

- 我当然有。我非常喜欢 **ASCII** (American Standard Code for Information Interchange: 美国信息交换标准代码) 风格的思考和处理动画。我认为这些为 Claude 增添了很棒的个性。我还非常非常喜欢不同的模式，比如我们如何勾勒出你是在思考模式、规划模式还是自动接受模式，我认为这是一种非常丰富的方式，能够以人们理解的方式传达复杂信息。

- I agree. And I love the personality touches as well. It feels like, sometimes programming and the process of programming can be like a robotic thing. You know, you're dealing with lines of code and lots of characters, but when you're using Claude Code, it's almost like a different experience and it kind of elicits a different emotion than just like if I'm in an IDE and I'm just typing line after line of code.

- 我同意。我也喜欢这些个性化的细节。感觉有时编程和编程过程可能很像机器人操作。你知道，你处理的是一行行代码和大量字符，但当你使用 Claude Code 时，它几乎是一种不同的体验，它能唤起一种不同于我在 IDE 中一行行敲代码的情感。

- Yeah, definitely, definitely. I think there's actually a lot of really rich things you can do in terminal, and sometimes it's even about pulling us back. It's like, "Oh, actually we don't need to over design this. We can just let the model take care of it."

- 是的，确实如此。我认为在终端中实际上可以做很多非常丰富的事情，有时甚至是要把我们拉回来。就像是，“哦，实际上我们不需要过度设计这个。我们可以让模型来处理它。”

- I see.

- 我明白了。

- Because it is really great at it, honestly.

- 因为老实说，它真的很擅长这个。

### 作为设计师使用 Claude Code 的最佳实践

- That's, that's great. I'm really curious to hear some of your tips and best practices for using Claude Code, especially as a designer and not a traditional technical person. How do you best use Claude Code day-to-day?

- 太棒了。我真的很想听听你使用 Claude Code 的一些技巧和最佳实践，尤其你作为一名设计师，而不是传统的技术人员。你日常是如何最好地使用 Claude Code 的？

- I love this question. It's something I'm personally very passionate about. I am a product designer. I will be the first to admit that I should not be writing any code and any code I write is definitely vibe coded and should be reviewed. But Claude Code and all these coding agents have what I consider unlocked a new skill set, or like a new skill tree for non-technical folks. Where before, I would need to maybe request time for a software engineer, or kind of let some things go if it didn't necessarily make it to the right level of priority. I now have a new set to reach into to do it myself. And so, the two big axes that you'll hear a lot, like designers talking about, the first one is the cost of an idea is zero. You can prototype very, very quickly. And I think that's interesting, but it's actually not the most exciting unlock for me. I think the more exciting unlock is I can actually push code to production. I can make the changes that I want. I'm in the live code base itself. And so, some of the most common use cases that I do almost on the daily is if I'm designing a new feature, I'll actually brainstorm with Claude Code at first. I'll be like, "What are the most common use cases here? What are the edge states that I should think about? How would you design this, maybe?" And then I'll do some iterations from there. I also ask Claude Code sometimes to help me scope designs that I've proposed. I'll like drag and drop it as an image. I'll be like, "Hey, how long do you think it'll take to make this?" And Claude will give me estimates so I can, you know, friendly debate with the engineers, how long it'll actually take to build something and we get to a good compromise. And then the last one is, you know, when you're launching a new product, you often don't really get to do the last 2% of design polish you always want to do. And, that's no longer true, because I can just go in there once the engineers are done and in the last day before launch, or even in the few days after launch, I will go up and clean up all those things that are P2s-

- 我喜欢这个问题。这是我个人非常热衷的话题。我是一名产品设计师。我第一个承认我不应该写任何代码，我写的任何代码都绝对是凭感觉写的，需要经过审查。但是 Claude Code 和所有这些编码代理都解锁了，在我看来，为非技术人员解锁了一套新的技能集，或者说一个新的技能树。以前，我可能需要请求软件工程师的时间，或者如果一些事情没有达到正确的优先级水平，我就不得不放弃。现在我有一套新的工具可以自己动手。所以，你会经常听到设计师谈论的两个主要方面，第一个是想法的成本为零。你可以非常非常快速地制作原型。我认为这很有趣，但它对我来说并不是最令人兴奋的解锁。我认为更令人兴奋的解锁是我实际上可以把代码推向生产环境。我可以做出我想要的改变。我就在实际的代码库中。所以，我几乎每天都会做的一些最常见的用例是，如果我正在设计一个新功能，我首先会和 Claude Code 一起进行头脑风暴。我会问：“这里最常见的用例是什么？我应该考虑哪些边缘情况？你可能会如何设计这个？”然后我会在此基础上进行一些迭代。我有时还会请 Claude Code 帮助我评估我提出的设计方案。我会把它拖放成图片，然后问：“嘿，你觉得做这个需要多长时间？”Claude 会给我估算，这样我就可以和工程师们进行友好的讨论，实际构建某个东西需要多长时间，然后我们达成一个好的折衷方案。然后最后一个是，你知道，当你发布新产品时，你通常无法完成你一直想做的最后 2% 的设计润饰。而现在，这不再是真的了，因为一旦工程师完成工作，在发布前的最后一天，甚至发布后的几天内，我都可以进去清理所有那些 **P2s** (Priority 2 tasks: 优先级为2的任务)——

- Wow. Yeah.

- 哇。是的。

- That I really wanted to happen in the product.

- 我真的希望在产品中实现那些功能。

- Wow, that's amazing. I love that. And those are awesome tips. It's kind of exciting to hear about this almost convergence almost of like the designer and the engineer into this design engineer, I guess in some sense, because of Claude Code and what it allows.

- 哇，这太棒了。我喜欢这些。这些都是很棒的建议。听到设计师和工程师几乎因为 Claude Code 及其所带来的可能性，而融合成为“设计工程师”这种趋势，真是令人兴奋。

- Yeah, absolutely. And I think one thing that it's actually done, surprisingly for me, is it's made my partnership with my engineers a lot better because there's a lot of things I honestly can't do on my own right now. But, even making a first attempt and then going and chatting with the engineer, it makes our collaboration a lot stronger as well. So it's not just like giving you a new skill set, it's also helping you collaborate better with your partners, which I think is a really important part of this kinda whole cycle we're building out right now.

- 是的，绝对如此。我认为它实际上做了一件让我惊讶的事情，就是它大大改善了我与工程师的合作关系，因为老实说，现在有很多事情我无法独立完成。但是，即使只是做第一次尝试，然后去和工程师交流，也能让我们的协作变得更加紧密。所以它不仅仅是给你一套新的技能，它还在帮助你更好地与合作伙伴协作，我认为这是我们目前正在构建的整个循环中非常重要的一部分。

- I agree. That's great. Well, Meaghan, this has been awesome. I really appreciate the conversation.

- 我同意。这太棒了。Meaghan，这次交流非常精彩。我非常感谢这次对话。