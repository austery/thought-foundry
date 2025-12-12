---
title: Anthropic 专家 Carly 分享：Claude 模型与 AI 代理的专业 Prompt Engineering 技巧
summary: Anthropic 应用人工智能专家 Carly 深入探讨了 Prompt Engineering 的最佳实践，特别针对 Claude 模型、AI
  代理的构建原则，以及如何在 Kilo Code 等工具中高效应用这些技巧，以提升 AI 编码效率。
area: tech-insights
category: technology
project:
- ai-impact-analysis
tags:
  - ai-agent
  - anthropic-claude
  - kilo-code
  - prompt-engineering
people:
  - Alex
  - Justin
  - Carly
companies_orgs: []
products_models: []
media_books: []
date: 2025-08-01
author: Lei
speaker: ''
channel: null
draft: true
file_name: anthropic_claude_ai_agent_prompt_engineering_guide.md
guest: ''
insight: null
layout: post.njk
series: null
source: https://www.youtube.com/watch?v=G0evpRuZ3lQ&t
---
## 开场与介绍

**Alex**: But now you definitely can. Hello, greetings everyone. That is Justin. He is lead of developer relations and killer code and we are putting him first time on the screen should have happened earlier Justin .

**Alex**: 但现在你们肯定能看到了。大家好，向各位问好。那位是 Justin，他是开发者关系和 Killer Code 的负责人，我们第一次让他出现在屏幕上，其实早就该这样了，Justin。

**Justin**: I'm I'm always hiding behind the scenes.

**Justin**: 我总是躲在幕后。

**Alex**: hiding in the shadow. So I'm Alex vol if I hope you or at least some of you saw me before at our previous workshops, now I need something from you. If you see us clear, if you hear us clear, please set the thumbs up in the YouTube so we know we can go on and that is very important. Yeah, right, so looks like guys are doing great now about height of difference. Yeah, we really like spend a lot of time trying to find some because actually, actually if stay straight, it's like stay straight, it's like that. Yeah, so harder to get on the screen.

**Alex**: 藏在阴影里。我是 Alex Vol，希望你们，或者至少你们中的一些人，在我们之前的研讨会上见过我。现在我需要你们帮个忙。如果你们能清楚地看到我们，清楚地听到我们，请在 YouTube 上点个赞，这样我们就知道可以继续了，这非常重要。好的，看起来大家做得不错。现在关于身高差异，是的，我们真的花了很多时间试图找到一些共同点，因为实际上，如果我们站直了，就像这样，站直了，就是这样。是的，所以更难同时出现在屏幕上。

**Justin**: I'll try to anyway work the squad. So yeah.

**Justin**: 我会尽力调整的。

**Alex**: and I will practice relevant good. So let's begin, we have a very nicely packed program today, so let's begin moving. We have a special guest today and she will be right in front of you very, very soon because currently, Ryan, special guest from Anthropic, creators of clouder, I believe all of you using their products like all the time, at least we definitely do, right?

**Alex**: 我也会练习相关的技巧。好了，我们开始吧，今天的议程非常紧凑。我们今天有一位特别嘉宾，她很快就会出现在大家面前。她就是来自 **Anthropic** 公司的 Carly，他们是 **Claude** 的创造者。我相信你们所有人都在一直使用他们的产品，至少我们绝对是这样，对吧？

**Justin**: Yeah, it's the most popular, most popular model on, on ki.

**Justin**: 是的，它是 Kilo Code 上最受欢迎的模型。

**Alex**: Yeah, right, right, definitely, yeah. So we speak about billions of tokens. And yeah, that's a lot. So she will open this workshop with her prompting cloud best practices with car Ram, then there will be a prompt engineering in killer code with Alex and Justin questions and answers and the quiz Justin quiz, do we do prizes this time?

**Alex**: 是的，没错，绝对是。我们谈论的是数十亿的 **token**（代币/令牌：在大型语言模型中，是文本处理的基本单位），这数量非常庞大。所以，她将以“Claude 最佳实践提示”开启本次研讨会，然后是 Alex 和 Justin 的“Killer Code 中的提示工程”环节，问答环节，以及 Justin 的小测验。Justin，这次我们有奖品吗？

**Justin**: No, come on. I think we should. I think we should.

**Justin**: 不，别开玩笑了。我觉得我们应该有。

**发言-人1**: we have, man, we have 590 two-three views right away, we need to do prizes.

**Alex**: 我们当然要有，伙计，我们现在就有 592-593 个观众了，必须得有奖品。

**Justin**: okay, listen.

**Justin**: 好的，听着。

**Alex**: okay, yeah, you see I appreciated him good, so we do quiz with prizes, very valuable prizes, and as you know already, you receive free credits today, everyone, every attendee receives free credits today, but that's credits, I expire it, you need to use them within next two weeks, but the prize prize bonuses, you receive a tech fee very are non expiration of and slightly bigger, let's see, next we need to ask you some questions, so let's ask you some questions, so we can ask you questions, please join us at menti dot com and we will, I actually will hide us for a moment and so you can scale the QR code, scan the QR code and jump in quickly, we need to understand you better to better tailor the content for you and know where to stop and then we can go on faster and we will open it with the question .

**Alex**: 好的，你看，我赞赏他的决定。所以我们会有带奖品的测验，非常宝贵的奖品。而且，如你们所知，今天每位参与者都能获得免费的信用点数。但这些信用点数是有期限的，你们需要在接下来两周内使用它们。但是测验的奖金，你们会收到一笔技术费，它是没有期限的，而且金额稍微大一些。接下来，我们需要问你们一些问题。所以请加入我们的 menti.com，我会暂时隐藏我们自己，这样你们可以扫描二维码快速加入。我们需要更好地了解你们，以便为你们量身定制内容，知道在哪里需要详细讲解，哪里可以快点过。我们会从一个问题开始。

## 观众互动与调查

**Justin**: very much, we don't need to keep this around, right? Because that's how we're going to give away the prizes.

**Justin**: 非常好，我们不需要一直留着这个，对吧？因为这就是我们发奖品的方式。

**Alex**: yeah, by the way opening main, don't close it because we will be questions and answers during the workshop and quiz also will be in the menti in the end so and the first question is how long are you in the software engineering. Wow, we have some serious audience today. So over when actually like two thirds of the audience over four years and almost half over 8 years. Overall, we have a very solid presence here that is pretty cool, I totally love it. Now, next thing, by the way, let's return to a screen. Next question will be? Where are you from, we totally love how international audience of our workshops is. We added and extended thanks to community contributions.

**Alex**: 是的，顺便说一下，打开了 menti 不要关掉，因为在研讨会期间的问答和最后的测验都会在 menti 上进行。第一个问题是：你从事软件工程有多久了？哇，我们今天的观众很资深啊。大约三分之二的观众有超过四年的经验，将近一半有超过八年的经验。总的来说，我们这里的观众基础非常扎实，这太酷了，我非常喜欢。好了，下一件事，顺便说一下，我们回到屏幕前。下一个问题是：你来自哪里？我们非常喜欢我们研讨会的国际化观众。我们还通过社区贡献增加和扩展了内容。

**Alex**: Really a lot of the Chinese translations, right? What also were most recent updates for localization?

**Alex**: 真的有很多中文翻译，对吧？最近的本地化更新还有哪些？

**Justin**: We had some people who helping out with Portuguese, so we might get that in the docks pretty soon. But we've had all kinds of different languages. Nice, that's pretty cool.

**Justin**: 我们有一些人帮忙做了葡萄牙语的翻译，所以我们可能很快就会在文档中加入葡萄牙语。但我们已经有了各种不同的语言。不错，这很酷。

**Alex**: I remember we recently even tried to use it experimental rev to light to right to left support for Arabic writing. So, but yeah, I haven't tested it myself, I don't, I use like more traditional Latin approach. Good, so that is truly global. Oh my God, I want to make a screenshot of that. But let's keep moving then.

**Alex**: 我记得我们最近甚至尝试了实验性的从右到左书写支持，用于阿拉伯文。但是我还没有亲自测试过，我使用的是更传统的拉丁字母方式。很好，这真是全球性的。天哪，我想截个图。但我们还是继续吧。

**Alex**: Are you familiar with killer code? Not at all Are you familiar with kiero a little bit, a little bit, a little bit? We don't ask you if you are familiar with co because we know you are, so like it would be a boring question. No, but we've a kilo distribution is slightly more interesting. Her not at all or herby didn't to use, okay, but we see like power user or use it a little here. It's wonderful, but still we have two thirds of complete beginners with kilo. It's wonderful, I hope you will make you love it.

**Alex**: 你熟悉 Killer Code 吗？完全不熟悉？你对 Kilo 有一点了解吗？我们不问你是否熟悉 Co...，因为我们知道你熟悉，所以那会是个无聊的问题。不，但 Kilo 的用户分布稍微有趣一些。完全不了解或没用过，好的，但我们看到这里有高级用户或稍微用过一些的人。这很棒，但我们仍有三分之二的 Kilo 完全初学者。这太好了，我希望你们会爱上它。

**Alex**: I should have asked what the other agents we might be using like maybe next time, Next time? Yes, next time. I'm sure you will love it. And stay. Stay with us for the last workshop. And then finally, which workshop should we do next? So we did AI coding 101 AI assisted coding, that was great.

**Alex**: 我应该问一下我们可能在使用的其他代理是什么，也许下次吧？下次？是的，下次。我相信你们会喜欢的。请留下来，和我们一起参加最后的研讨会。最后，我们下一次应该做什么主题的研讨会？我们做过“AI 编程 101：AI 辅助编程”，那很棒。

**Alex**: Well, we did MCP MCP, what is MCP, how to use it by the way, also developed a biotropica. Anthropic plays a very big role in our lives. Then we did how to develop your own MCP server and now we are doing prompt engineering. We really would like to ask what we should do next. If you answer, if you vote for something different, it's absolutely fine.

**Alex**: 我们也做过关于 **MCP**（Model-Client Protocol，模型-客户端协议）的，顺便说一下，MCP 也是由 Anthropic 开发的。**Anthropic** 在我们的生活中扮演着非常重要的角色。然后我们做了如何开发自己的 MCP 服务器，现在我们正在做 **Prompt Engineering**（提示工程）。我们真的很想问问接下来我们应该做什么。如果你投票给其他选项，完全没问题。

**Justin**: Go for it, open the comments.

**Justin**: 去吧，打开评论区。

**Alex**: Yeah. I like, I even will open comments right now, so we will see what's happening here. Don't worry, credits are coming. I see where questions about credits, credits are coming stay and we see what code base indexing wins v, but like not really UN sure what you think we should do next.

**Alex**: 是的。我甚至现在就打开评论，这样我们就能看到这里发生了什么。别担心，信用点数马上就来。我看到有关信用点数的问题，信用点数会来的，请留下来。我们看到“代码库索引”赢了，但我们不太确定你们认为我们接下来应该做什么。

**Justin**: Just so I'm really happy that you have this question because I'm really torn between code base and Ning and memory bank usage, but it' I don't know, I think people should start with memory bank and then move over to code base indexing. So I don't know. It really depends on where you are, but yeah i'm torn. I'm torn. I think maybe, maybe because of that, I think we should go with a memory bank. First.

**Justin**: 我很高兴你提出这个问题，因为我真的在代码库索引和内存库使用之间犹豫不决。但我不知道，我认为人们应该从内存库开始，然后再转向代码库索引。所以，这真的取决于你处于哪个阶段，但我很纠结。我认为，也许正因为如此，我们应该先做内存库。

**Alext**: okay, I see, but I think actually a real, real answer is we are going to do both. Yeah, of course, yeah. So, stay tuned and there is more content comment. Yeah, coming, that's for sure. And then thank you. Now I will open you questions and answer slide, it will stay open till the end of the workshop so you can write your questions in any moment and then in the end we will answer those questions and maybe we will try, depending on the time, to answer some of those questions together with Kali. But we will see how it will go in the future.

**Alex**: 好的，我明白了，但我认为真正的答案是，我们两个都会做。当然了。所以，请继续关注，还会有更多的内容。是的，肯定会有的。谢谢大家。现在我将打开问答幻灯片，它会一直开放到研讨会结束，所以你们可以随时写下你们的问题，最后我们会回答这些问题。也许我们会根据时间，尝试和 Carly 一起回答其中一些问题。但未来会怎样，我们拭目以待。

**Alex**: So I open questions and answers via moderated, your questions won't tap you immediately, wait for our team to approve them first, then they appear and please vote, please vote for the questions, you find the most important. That will be very helpful so we can focus on the things that are the most important for most of you. So questions, gathering for admin so we can safely slide here. No, no, no, no, no, no, no, I think there is one more thing I should do, I need to enable question the audience, I don't know why Manti does it to me, but if I don't push this button, there will be no questions accepted.

**Alex**: 我打开了经过审核的问答环节，你们的问题不会立刻显示出来，请等待我们的团队先批准它们，然后它们才会出现。请投票，为你认为最重要的问题投票。这将非常有帮助，这样我们就可以专注于对大多数人来说最重要的事情。问题正在为管理员收集，所以我们可以安全地切换到这里。不不不，我想还有一件事我应该做，我需要启用观众提问功能。我不知道为什么 Menti 会这样，但如果我不按这个按钮，就不会接受任何问题。

**Justin**: I thought we were getting a little stiff joke when on, yeah, right.

**Justin**: 我还以为我们要讲个冷笑话呢。

**Alex**: good, so now two words about our sponsors killer code is an AI coding agent for Visual Studio code, it's open source and it works as a pure team of developers doing very different specialized task right in your Visual Studio code. Why do we speak about Killer Code right now? Because of this, it should be here because of this by going to kill a code dot AI into your profile and adding prompt art code, which is right on your screen right now. Yeah, you can do something very interesting, you can grab $100 .

**Alex**: 好的，现在简单介绍一下我们的赞助商。**Killer Code** 是一个用于 **Visual Studio Code** 的 AI 编码代理，它是开源的，并且像一个由开发者组成的纯粹团队一样工作，在你的 Visual Studio Code 中执行各种不同的专业任务。我们为什么现在谈论 Killer Code？因为这个，它应该在这里。通过访问 killer.code.ai/profile，并添加 `prompt art` 这个代码（现在就在你的屏幕上），你可以做一些非常有趣的事情，你可以获得 100 美元。

## 赞助商信息与福利

**Justin**: $100.

**Justin**: 100 美元。

**Alex**: $100 credit credits .

**Alex**: 100 美元的信用点数。

**Justin**: to for a model.

**Justin**: 用于模型。

**Alex**: for AI models, any a model you want. But today, like we recommend also to do things required for.

**Alex**: 用于 AI 模型，任何你想要的模型。但今天，我们同样推荐做一些必要的事情。

**Justin**: for the workshop and for workshop.

**Justin**: 为了这次工作坊。

**Alex**: So yeah, and sonne sonne, yes, sure.

**Alex**: 是的，还有 Sonnet 模型，当然。

**Justin**: maybe you do some opus, whatever you want.

**Justin**: 也许你可以用一些 Opus 模型，任何你想要的。

**Alex**: but there is a special treat because very special bonus from our second sponsor Cloud Entropic. So if you stay, if you stay till the end, you will get a special code from Cloudera, use them with clouder value, it should be $20, special, special for your cloud account and you will need to have cloud account to receive that.

**Alex**: 但还有一个特别的福利，因为我们第二个赞助商 Anthropic Cloud 提供了非常特别的奖励。所以如果你留到最后，你会从 Claude 那里得到一个特殊的代码，用它们来体验 Claude 的价值，应该是 20 美元，专为你的 Claude 账户准备的，你需要有一个 Claude 账户才能收到它。

**Justin**: And in Kilo code, you can use all kinds of different API providers. So you could use the kilo coded API provider. The prompt art code will give you some credits there. You can use Claude or Anthropic API, whatever you want.

**Justin**: 在 Kilo Code 中，你可以使用各种不同的 **API** (应用程序编程接口) 提供商。所以你可以使用 Kilo Code 的 API 提供商。`prompt art` 代码会给你一些信用点数。你也可以使用 Claude 或 Anthropic 的 API，任何你想要的。

**发言-人1**: So, but yeah, you can use different A PA providers, I have to say what, frankly, I use 90, 95% of my queries will be using killer code provider, but to cloud. So yeah, so that's not a surprise for you. So prompt art at your killer code dot AI slash profile, this code stays active for today. So if you need to create a profile, you will need to create a profile, it might take a few moments, but anyway, let us move on and let's go, let's go, so let's go I'm putting Carly on the screen. Hey Carly, do you hear me? Wonderful, so we I'm doing a quick check. That looks very nice. And moving you life in 3, 2, 1.

**Alex**: 是的，你可以使用不同的 API 提供商。坦白说，我 90% 到 95% 的查询都会使用 Killer Code 的提供商，但也会用到 Claude。所以这对你来说应该不意外。在 killer.code.ai/profile 输入 `prompt art`，这个代码今天有效。如果你需要创建个人资料，那就创建一个，可能需要几分钟时间。无论如何，让我们继续前进吧。我把 Carly 请到屏幕上。嘿 Carly，你听得到我吗？太好了，我来快速检查一下。看起来很不错。3, 2, 1，让你上线。

## 技术故障排除

**Carly**: Thank you?

**Carly**: 谢谢。

**Alex**: Wait a second, wait a second. We are fixing echo problems. So you are live, but we need to put you properly on the sound so. Look, give me a moment. Anything, the screen that is strange. So, Say something? Carly, can you say something?

**Alex**: 等一下，等一下。我们正在解决回音问题。你已经上线了，但我们需要正确地处理你的声音。稍等我一下。屏幕上有些奇怪的东西。说点什么？Carly，你能说点什么吗？

**Alex**: You can't hear me anymore. Okay, just a second. You can't hear me anymore, tech. Okay guys, let me fix the sound problem and I will bring it back. I think, I think I think I think, I will put waiting screen, yeah. Yeah, it's okay.

**Alex**: 你听不到我了。好的，稍等一下。你听不到我了，技术问题。好的各位，让我修复一下声音问题，我会把它恢复过来。我想，我会放上等待屏幕。是的，没关系。

**发言-人1**: Yeah, say something.

**Alex**: 是的，说点什么。

**Justin**: Carly, could you say something?

**Justin**: Carly，你能说点什么吗？

**Justin**: Kylie, would you mind counting for us?

**Justin**: Carly，能为我们数个数吗？

**Alex**: Do okay, just a second. Please, wait? Yum yum. Yu yu, like? Okay, easiest will be for Justin to open this link. Justin I'm sending you link. Actually I send it this link to you already. I will put waiting screen on. We will need it here for the sound.

**Alex**: 好的，稍等一下。请等等。嗯... 好的，最简单的方法是让 Justin 打开这个链接。Justin，我发给你链接了。实际上我已经发给你了。我会放上等待屏幕。我们需要它来处理声音。

**Justin**: Give me second.

**Justin**: 给我一秒钟。

**Alex**: So why don't I receive sound here? It's very strange.

**Alex**: 为什么我这里收不到声音？非常奇怪。

**Alex**: Ask the June. So now you are in and switch off your microphone and camera.

**Alex**: 问一下 June。你现在进来了，关掉你的麦克风和摄像头。

**Justin**: Yeah.

**Justin**: 好的。

**Alex**: like that. Now it should be a desktop audio, theoretically at least.

**Alex**: 像那样。现在它应该是桌面音频，至少理论上是。

**Justin**: Carly, can you say something to you? So you might check 123.

**Justin**: Carly，你能对你说点什么吗？你可以试一下“麦克风测试 123”。

**Alex**: Oh, you're on mute.

**Alex**: 哦，你静音了。

**Justin**: I am .

**Justin**: 我是。

**Alex**: just unmute.

**Alex**: 解除静音就好。

**Justin**: Oh, Carly, could you say mic check 123 something? Okay, say that once more. Okay I'm seeing you show up here. I'm not seeing you in.

**Justin**: 哦，Carly，你能说“麦克风测试 123”之类的吗？好的，再说一次。好的，我看到你在这里显示了，但没看到你进来。

**Alex**: Are. Active.

**Alex**: 激活。

**Justin**: Let me see. Oh, where do we have to.

**Justin**: 让我看看。哦，我们得在哪里……

**Alex**: Forget.

**Alex**: 忘了。

**Alex**: So .

**Alex**: 那么。

**Justin**: maybe a plugin? Is an extra source?

**Justin**: 也许是插件问题？是额外的音源吗？

**Alex**: Sorry, everyone. It's a very advanced, it's a top. We have three speakers, I don't know what goes wrong. Studio mode.

**Alex**: 对不起各位。这是一个非常高级的设置，我们有三个发言人，我不知道哪里出错了。工作室模式。

**Alex**: Once the audio properties monitor and output monitor output desktop audio. Default.

**Alex**: 音频属性监视器和输出监视器输出桌面音频。默认。

**发言-人1**: So I put a waiting screen.

**Alex**: 所以我放上了等待屏幕。

**Alex**: Do so we have sound here. You can hear me right now, right? Good, sorry.

**Alex**: 这样我们就有声音了。你现在能听到我，对吗？好的，抱歉。

## 嘉宾演讲：Prompt Engineering 最佳实践

**Carly**: Yeah?

**Carly**: 是的？

**Carly**: Amazing, cool. Can you guys hear me?

**Carly**: 太棒了，酷。你们能听到我吗？

**发言-人3**: Amazing, that's okay.

**Carly**: 太棒了，没关系。

**Carly**: Should I get okay? Okay, amazing, amazing. I couldn't see who could see or hear me, but hi everyone, my name is Carly, I work at Anthropic and today I'm going to be talking about prompt engineering. So just a quick note. I'm on a team in ethopia called Applied AI, and essentially I'm a member of the technical staff, but I also work a lot with customers to kind of figure out how to best use our models and API and Cloud Code.

**Carly**: 我应该开始了吗？好的，太棒了。我看不到谁能看到或听到我，但大家好，我叫 Carly，在 **Anthropic** 工作，今天我将要谈论**提示工程**（Prompt Engineering）。简单说一下，我在 Anthropic 的一个名为“应用人工智能”的团队里，本质上我是一名技术人员，但我也和客户紧密合作，研究如何最好地使用我们的模型、API 和 Claude Code。

**Carly**: So a little bit on Anthropic, Alex mentioned that you guys are familiar with Anthropic. I wasn't sure because it's such an international crowd, but we were founded in 2021. We actually now, since this slide was created, have about 1500 employees. I think we're headquartered in San Francisco, which is where I am right now. It's eight 23 AM, but we're trying to build more of an international presence. And we really have in a lot of ways. But the reason I put this slide down is that our mission is to ensure the world safely makes the transition through transformative AI. So safely is the keyword there. What we try to build is intelligent models with integrity.

**Carly**: 关于 Anthropic，Alex 提到你们熟悉我们。我之前不太确定，因为这是一个非常国际化的群体。我们成立于 2021 年。实际上，自从这张幻灯片制作以来，我们现在大约有 1500 名员工。我们的总部在旧金山，也就是我现在所在的地方，现在是早上 8:23。我们正努力建立更多的国际影响力，并且在很多方面我们确实做到了。但我放这张幻灯片的原因是，我们的使命是确保世界安全地完成向变革性人工智能的过渡。“安全地”是这里的关键词。我们努力构建的是具有诚信的智能模型。

**Carly**: Alex was talking about cloud a lot. I like the accent cloud or cloud, but these are kind of the three pillars, is safety, security, and trust. So we are leaders in kind of the science of how models work, which we call me there. And then security. We do world leading on jail resist. And then for trust, where the least likely or CLA is the least likely to hallucinate. So we also continue to lead the industry in agentic coding. The orange bars are all clawed models and we are leading in that way.

**Carly**: Alex 经常提到 Claude。我喜欢他发音的 "cloud" 或 "claude"，但这三个支柱是：安全、保障和信任。我们在模型工作原理的科学领域处于领先地位，我们称之为“机理学”。在安全方面，我们在防止“越狱”（jailbreaking）方面处于世界领先水平。在信任方面，我们的 **Claude** 是最不容易产生幻觉的模型。我们还在**代理编码**（agentic coding）方面继续引领行业。图中的橙色条都是 Claude 模型，我们在这方面处于领先地位。

**Carly**: And that's maybe why you guys are familiar with us and why people use it on kilo code. But let's get into the meat of the presentation of prompt engineering. This is mostly kind of advice, honestly, generally, for using llds and prompting llds, but also specifically for Claude.

**Carly**: 这也许就是你们熟悉我们以及人们在 Kilo Code 上使用它的原因。但让我们进入 **Prompt Engineering**（提示工程）这个演讲的核心内容。老实说，这主要是关于使用和提示 **LLM**（大型语言模型）的一般性建议，但同时也特别针对 Claude。

### 生产环境中的提示工程

**Carly**: I'd like to say, just like actually a quick note, there's kind of the prompting that you do in like a chatbot or in a coding agent where it's just kind of one off prompts. And if you make some error, then you can self correctress, you know, what you wrote, and it's not that consequential, but a lot of prompt engineering, a lot of what I'm going to talk about is when you actually have to put a prompt or like this natural language into production level code and you're hitting the API with that prompt multiple times a day in your production traffic, and it's not kind of the same inconsequential error handling prompt. So there's kind of two ways to think about prompting. And generally when we talk about prompt engineering and Anthropic, at least we're talking about these prompts that are used in production. So what is prompt engineering anyways? Like what, what are the skills involved? We kind of say that it's like programming in natural language, it's like using natural language to program. It's the practice of systematically improving prompts for llum applications through testing, evaluation, analysis, and optimization of prompts.

**Carly**: 我想快速说明一下，提示分为两种。一种是你在聊天机器人或编码代理中使用的那种一次性提示。如果你犯了错，你可以自己纠正，这没什么大不了的。但我今天要讲的很多关于**提示工程**的内容，是指当你需要将一个提示或自然语言指令放入生产级别的代码中，并且在你的生产流量中每天多次通过 API 调用这个提示。这种提示的错误处理就不是无关紧要的了。所以，有两种看待提示的方式。通常，当我们在 Anthropic 谈论提示工程时，我们指的是这些在生产环境中使用的提示。那么，到底什么是提示工程？它涉及哪些技能？我们通常说它就像用自然语言编程。它是通过测试、评估、分析和优化提示，系统地改进 LLM 应用程序提示的实践。

**Carly**: A few of the kind of boxes that I want to highlight here, and there's a lot of information on some of these slides, is this middle one that's clear, unambiguous, and precise. Writing a lot of prompt engineering is just becoming a clear and crisper writer who can write in more organized ways.

**Carly**: 在这些幻灯片上有很多信息，但我想在这里强调几个要点。中间这个是：清晰、无歧义、精确。很多提示工程的工作其实就是成为一个写作更清晰、更简洁、更有条理的作者。

**Carly**: The second one that I want to highlight is conceptual engineering. So I think this is almost like philosophical, but it's thinking through the concepts and the nuance of the concepts and how they relate and being able to explain that to a model is a really big thing here.

**Carly**: 我想强调的第二点是**概念工程**（conceptual engineering）。我觉得这几乎是哲学层面的，它要求你深入思考概念及其细微差别，以及它们之间的关系，并且能够将这些向模型解释清楚，这一点非常重要。

**发言-人3**: Understanding LM, there's a lot of technical things that like might help with your prompt engineering, but then testing like evals. And that's something I'm going to touch on a little bit more. But being able to test your prompts is the key here. Oh, so here's testing. Prompting is an empirical science. Always test your prompts and iterate often. So you want to engineer a preliminary prompt. This is like your first draft, but you do want to build test cases to iterate and refine the prompt against. So it's kind of the classic, at least when I was first studying computer science, it was always like write unit test first and then build your code thereafter. There's a similar kind of ethos or concept here.

**Carly**: 理解语言模型，有很多技术细节可能对你的提示工程有帮助，但之后是测试，比如评估（evals）。这一点我稍后会详细讲。但能够测试你的提示是这里的关键。哦，这里就是测试。提示是一门经验科学。永远要测试你的提示并经常迭代。所以，你要设计一个初步的提示，这就像你的初稿，但你确实需要建立测试用例来迭代和优化这个提示。这有点像经典的软件开发理念，至少当我刚开始学计算机科学时，总是说先写单元测试，然后再写代码。这里有类似的精神或概念。

### 优秀的 Prompt 结构

**Carly**: So now best practices for developing a great prompt. So here's kind of an outline of some prompt structure that we recommend.

**Carly**: 那么，现在是开发一个优秀提示的最佳实践。这里是我们推荐的一种提示结构的概要。

**Carly**: So you want to do one to two sentences to establish role and high level task description. I will note here, I think about like a year or two ago, there was this thing where you had to tell models like you are a lawyer at a firm and you kind of would like tell models like this like role and do a little bit of role play. I think that's becoming less and less necessary. Like models these days are more self-aware and they actually just understand that they are a large language model and are around to be helpful. And so you don't necessarily need to anymore tell the model like a fake role, but still telling the model, just kind of establishing the high level task in some ways of like what their role they're going to play in this task to dynamic or retrieved content. You may have heard of Rag, but just pulling in appropriate content for what your current task is.

**Carly**: 你需要用一到两句话来确定角色和高级任务描述。我想在这里指出，大约一两年前，你必须告诉模型“你是一家公司的律师”，进行一些角色扮演。我认为这变得越来越不必要了。现在的模型更加自我感知，它们明白自己是一个大型语言模型，是为了提供帮助而存在的。所以你不再需要告诉模型一个虚构的角色，但仍然需要以某种方式告诉模型它在这个任务中要扮演的角色，并提供动态或检索到的内容。你可能听说过 **RAG**（检索增强生成），就是为当前任务拉取适当的内容。

**Carly**: 3 is detailed task instructions. The keyword here is detailed, 4 is examples, examples are probably the highest leverage thing here. It's kind of how you show the model and not tell model, and then 5 is oftentimes I do recommend them like internally or with customers.

**Carly**: 第三点是详细的任务指令，这里的关键词是“详细”。第四点是示例，示例可能是这里最有影响力的东西。这是一种向模型“展示”而非“告知”的方式。第五点，我经常在内部或向客户推荐。

**Carly**: You might have to repeat some critical information, especially if the prompt has gotten really long. We're still working on kind of this interpretability field and understanding how, why, or how models do things or think. But generally, sometimes there can be things in your instructions that the model is like forgetting or not kind of taking to heart. And so there is times where repeating kind of the critical things at the end is really, really important and just can be a big, big lever. So this is a lot, but we're going to walk through each piece of kind of this like recommended product structure. So let's build a prompt.

**Carly**: 你可能需要重复一些关键信息，特别是当提示变得非常长的时候。我们仍在研究可解释性领域，试图理解模型是如何、为什么以及怎样做事的。但总的来说，有时你的指令中有些内容模型可能会忘记或没有真正理解。因此，在结尾处重复关键信息非常重要，这会是一个很大的杠杆。内容很多，但我们将逐一讲解这个推荐的提示结构。让我们来构建一个提示。

### 构建一个“AI 职业教练”的 Prompt

**Carly**: This is kind of like we're going to do like an AI career coach prompt. So the first one is task context. So you're kind of setting the context. This is what I said about like the role, but it's like, who are you, like, what are you working as and this like you will be acting as an AI career coach? This is good, like it's not telling AI that it is a career coach, but kind of just saying what it is. But, and then you also set the goal here.

**Carly**: 我们来构建一个“AI 职业教练”的提示。首先是任务背景。你设定了背景，这就是我之前说的角色，比如“你将扮演一个 AI 职业教练”。这很好，它不是告诉 AI 它就是一个职业教练，而是说明它要扮演的角色。然后你在这里设定目标。

**Carly**: So the next is tone context. This is a big one, like if you really want your production level prompt to be outputting the type of stuff that like, you know, a human employed by you would output, I think like setting tone is a big lever. So like telling the Lll M what type of tone it should use and like what its values in terms of tone should be. So here's a maintain a friendly customer service tone.

**Carly**: 接下来是语气背景。这一点非常重要。如果你真的希望你的生产级提示能够输出像你雇佣的员工那样的内容，我认为设定语气是一个重要的杠杆。告诉 **LLM** 它应该使用什么样的语气，以及在语气方面的价值观应该是什么。比如这里是“保持友好的客服语气”。

**Carly**: So background data, documents, and images. This is where you might want to pull or retrieve relevant documents. So here's the guidance document you should reference when answering the user.

**Carly**: 接下来是背景数据、文档和图片。在这里你可以提取或检索相关文档。例如，“这是你在回答用户时应参考的指导文件”。

**Carly**: And now just just like to take a step back for these three parts, how to organize your information in your prompts. This organized prompts are so hard for CLA to comprehend. CLA is in so many ways just like a human. If you were reading a PRD or a design DOC and there were 0 headers and everything was everywhere, it just would be really hard for a human to read. It's the same thing with Claude. Like you can't expect Claude to perform well unless you're giving Claude organized information. For me as a human, I like like headers and bold at the top of each section, llum is are a little bit different, different models maybe have different preferences towards what type of language they like, but Claude specifically is XML.

**Carly**: 现在，让我们退一步看看这三个部分：如何组织提示中的信息。组织混乱的提示对 Claude 来说很难理解。Claude 在很多方面就像人类一样。如果你在读一个没有标题、内容杂乱无章的**产品需求文档** (PRD) 或设计文档，人类也会觉得很难阅读。Claude 也是一样。你不能指望 Claude 表现良好，除非你给它提供有组织的信息。作为人类，我喜欢在每个部分的顶部使用标题和粗体。**LLM** 有点不同，不同的模型可能对语言类型有不同的偏好，但 Claude 特别喜欢 **XML**（可扩展标记语言）。

**Carly**: XML is a very good way of structuring your prompt, putting things between XML tags. Claude can understand other types of delimiters like Markdown, but just generally we recommend people use XML because that's like a large part of claud's training data as well.

**Carly**: **XML** 是一种非常好的构建提示的方式，将内容放在 XML 标签之间。Claude 也能理解像 **Markdown** 这样的其他分隔符，但我们通常推荐使用 XML，因为这也是 Claude 训练数据的很大一部分。

**Carly**: So let's continue, so then you want a detailed task description and rules, this will also be in XML tags you might use XML tags like tasks or steps or guidelines or critical rules, things like that.

**Carly**: 让我们继续。接着你需要一个详细的任务描述和规则，这也应该放在 XML 标签里。你可以使用像 `<tasks>`, `<steps>`, `<guidelines>` 或 `<critical_rules>` 这样的标签。

**Carly**: And then you want examples. Again, examples are a really, really, really big lever here. This is kind of just you can spend a ton of tokens telling Claude how to do something, but if you just show Claude, it will really help. Oh, here's a slide on it. Examples act as concrete templates, making it easier for Claude to understand and replicate the desired output. This is really crucial in a really big one if you want consistent formatting. So if you're trying to output some JSON or things with headers or markdowns, examples will really help here, And you want to think about relevance, diversity, and quantity. We do recommend at least three to 5, if not more.

**Carly**: 然后你需要提供示例。再说一次，示例在这里是一个非常非常重要的杠杆。你可以花费大量的 **token** 告诉 Claude 如何做某事，但如果你直接向它展示，效果会好得多。哦，这里有张幻灯片。示例就像具体的模板，让 Claude 更容易理解和复制期望的输出。如果你想要一致的格式，这一点至关重要。比如，如果你想输出 **JSON** 或带有标题、Markdown 的内容，示例会非常有帮助。你需要考虑相关性、多样性和数量。我们推荐至少 3 到 5 个示例，甚至更多。

**Carly**: So then comes conversation history. So in any like multi turn conversation, so like in Claude do AI, which is our chatbot, or in Claude code, you will pass in the conversation history back to Claude. And so Claude has context on what has happened just now, both in the user terms and the assistant terms.

**Carly**: 接下来是对话历史。在任何多轮对话中，比如在我们的聊天机器人 Claude.ai 或 Claude Code 中，你需要将对话历史传回给 Claude。这样，Claude 就能了解刚才发生了什么，包括用户的提问和助手的回答。

**Carly**: And then you want the immediate task description or request. This is kind of similar to the critical reminders. It might be buried, you know, in one of those green boxes, But you want to then put like right now, here's what you're focused on and need to give. And so then this is an extended thinking step. You might want to say, tell Claude to think or use extended thinking output formatting. We do recommend also that use ML output, put your thinking and thinking tags, and then put your response and response tags.

**Carly**: 之后，你需要给出即时的任务描述或请求。这有点像关键提醒。它可能被埋在之前的某个绿色框里，但你现在要明确指出：“现在，这是你需要关注并完成的任务”。接着是一个扩展思考的步骤。你可能想告诉 Claude 去思考或使用扩展思考的输出格式。我们也推荐使用 XML 输出，把你的思考过程放在 `<thinking>` 标签里，然后把你的回应放在 `<response>` 标签里。

**Carly**: And then this is a kind of another one. You can prefill the response. This is an interesting one where like you may have in clawed different user terms, but you can also actually prefill what the assistants like first words or for a few words or few tokens should be. And then Claude will kind of take off from where you left off. And this is really helpful to steer Claude's behavior towards the type of response you want. An example of this is like it's not as the cloud form models are better at construction falling, but in past quad models, when structured outputs were a hard thing to get, like if you wanted to say like, I want JSON and past models sometimes clog would just do its own thing or have some preamble before the JSON. But if you just said like JSON and then open the bracket, it would steer Claude and then Claude would just complete the JSON rather than having some preamble and then finally just like of all this preventing hallucinations, cloud models are the least likely to hallucinate nonetheless, everyone still wants to prevent hallucinations and LLMs, the first one is my favorite, it's kind of give Claud out, like let tell Claude, it can say, I don't know if it doesn't know or let Claude give a confidence score of how confident is about its response, thinking helps with reducing hallucination, So using extended thinking or telling Claude to put its thinking and thinking blocks asking for relevant quotes or telling Claude to only answer when it's very confident.

**Carly**: 还有一种技巧，你可以预填充回应。这很有趣。你可以在 Claude 中有不同的用户术语，但你也可以预先填充助手回应的开头几个词或几个 **token**。然后 Claude 就会从你停止的地方继续。这对于引导 Claude 的行为朝向你想要的回应类型非常有用。举个例子，虽然现在的 Claude 模型在遵循指令方面做得更好，但在过去，要获得结构化输出很困难。比如你想要 **JSON**，但以前的模型有时会自行其是，或者在 JSON 前面加上一些前言。但如果你只给出 `JSON` 然后加上一个左括号 `[`，它就会引导 Claude 直接完成 JSON，而不会有前言。最后，关于防止幻觉，Claude 模型产生幻觉的可能性是最低的。尽管如此，大家还是希望防止 **LLM** 产生幻觉。第一个方法是我最喜欢的，就是给 Claude 一个退路，告诉它如果不知道可以回答“我不知道”，或者让它给出一个关于回应的置信度分数。思考有助于减少幻觉，所以使用扩展思考，或告诉 Claude 把思考过程放在 `<thinking>` 块里，或者要求它引用相关内容，或只在非常自信时才回答。

### Anthropic 控制台与 Prompt 协作

**Carly**: So we also have, this is kind of a just a little bonus if you want to try it.

**Carly**: 我们还有一个小彩蛋，如果你想试试的话。

**Carly**: We have a console, which I think is, yeah, console dot Anthropic dot com. And this is like a really good starting place if you want to build like a longer prompt for production level code. So what you would do is you can see on the right side, you would just describe your task in maybe one sentence. And then in the background, we actually have our own prompt that's like he passes it into Claude and then puts it in the formatting that we know that Claude likes. So kind of what I just explained to you, we explain that to Claude in the background. And then Claude reformats your task. The generated prompt is meant to be like a starting point to solve kind of a blank page issue, but definitely still, you should still be editing it and thinking about it deeply and running it through your test cases in evals.

**Carly**: 我们有一个控制台，网址是 console.anthropic.com。如果你想为生产级代码构建一个更长的提示，这是一个非常好的起点。你可以在右侧用一句话描述你的任务。然后，在后台，我们实际上有自己的提示，它会将你的描述传递给 Claude，并将其格式化为我们知道 Claude 喜欢的格式。就像我刚才向你解释的那样，我们在后台向 Claude 解释了这一点。然后 Claude 会重新格式化你的任务。生成的提示旨在作为解决“白板问题”的起点，但你仍然需要对其进行编辑、深入思考，并通过你的测试用例进行评估。

**Carly**: So also, one thing that I love to do is like Claude can be a thought partner while you are prompting. So you can pass your prompt into Claude. And this is something I do all the time. Like I will go into cloud, do AI, and pass my prompt through Opus and just say like, are there any XML errors here? Like, did I forget to close any tags or are there any things you don't understand? And that can be really helpful where Claude's giving you feedback on how to best talk to Claude.

**Carly**: 另外，我非常喜欢做的一件事是，在编写提示时，让 Claude 成为你的思考伙伴。你可以把你的提示发给 Claude。我一直都这么做。我会进入 Claude.ai，把我的提示通过 Opus 模型运行，然后问它：“这里有 XML 错误吗？我是否忘记关闭了某个标签？或者有什么你不理解的地方？” 这会非常有帮助，因为 Claude 会给你反馈，告诉你如何更好地与它沟通。

### 为 AI 代理 (Agents) 设计 Prompt

**Carly**: So now we've kind of done the general prompting in production level systems. I hope you guys know what agents are. And now I'm going to move a little bit into prompting for agents. So Anthropic came out with this blog post in 2024, end of 2024.

**Carly**: 好了，我们已经讲完了在生产级别系统中进行通用提示的方法。我希望大家都知道什么是**代理**（Agents）。现在我将稍微转向为代理编写提示。Anthropic 在 2024 年底发表了一篇博客文章。

**Carly**: That kind of still is like how we think about what an agent is and how to build effective agent. But essentially, agents are just models using tools in a loop. The simpler you can keep this, the better with your agents. So in that frame, there's three components to an agent. There's the environment, which is the system that the agent operates in, tools which offer an interface for the agent to take actions and get feedback, and the system prompt, which defines the agent's ideal behavior. So here we just say goals, constraints, and how to act. But essentially, that's the system prompt. And the model just gets called in a loop, and that's what agents are.

**Carly**: 这篇文章阐述了我们如何看待代理以及如何构建有效的代理。本质上，**代理就是模型在一个循环中使用工具**。你的代理越简单越好。在这个框架中，一个代理有三个组成部分：**环境**（代理运行的系统）、**工具**（为代理提供采取行动和获取反馈的接口）和**系统提示**（定义代理的理想行为）。这里我们只说了目标、约束和如何行动，但本质上，这就是系统提示。模型只是在一个循环中被调用，这就是代理。

**Carly**: We've learned to keep it simple because complexity can kill iteration speed and also just like kind of damper our claw's natural intelligence. The Cloud 4 models are pretty good at accomplishing tasks and kind of leveraging that natural intelligence is better than over architecting here. So why agents and when should you use one? You don't, and kind of the crux of our blog post is that you don't always need an agent.

**Carly**: 我们学到要保持简单，因为复杂性会扼杀迭代速度，也会抑制 Claude 的自然智能。Claude 3 模型在完成任务方面相当出色，利用这种自然智能比过度设计要好。那么，为什么要用代理？什么时候应该用？你不一定需要。我们博客文章的核心观点是，你并不总是需要一个代理。

### 何时应该构建一个 AI 代理？

**Carly**: You can think of agents as a way to scale complex and valuable tasks, but they're not just like a drop in upgrade. You may over complexify a task and use more resources than you need if you choose to use an agent without thinking about why. So I guess like when should you build an agent?

**Carly**: 你可以把代理看作是扩展复杂且有价值任务的一种方式，但它们不仅仅是一个简单的升级。如果你不假思索地选择使用代理，可能会使任务过度复杂化，并使用比实际需要更多的资源。所以，我想问，什么时候应该构建一个代理？

**Carly**: This is kind of a checklist that we've, and I really like it. So for complexity, agents thrive in ambiguous problem spaces. So if you can map out the entire decision tree easily, just build it. It's more cost effective and it gives you control. So like if it's just, you know what the workflow is, that's probably better for workflows and not agents.

**Carly**: 这是我们制定的一个清单，我非常喜欢。首先是**复杂性**：代理在模糊的问题空间中表现出色。如果你能轻易地描绘出整个决策树，那就直接构建它。这样更具成本效益，也让你有控制权。所以，如果你知道工作流程是什么，那可能更适合工作流，而不是代理。

**发言-人3**: It's kind of that loop that that means that you need an agent that is a task valuable enough. Exploration needs tokens like running in a loop does use a lot of tokens. So the task does need to justify the cost.

**Carly**: 这种循环意味着你需要一个代理，并且任务本身必须足够有**价值**。探索需要消耗 **token**，就像在循环中运行一样，会使用大量的 token。所以任务必须能够证明其成本是合理的。

**Carly**: And then are all parts of the task doable? Make sure there aren't any bottlenecks. Bottleneck necktie can multiply cost and latency, so consider reducing cope scope and simplifying the tasks to try again. Here. It's like if you're always going to need a human in the loop at multiple intervals, that's maybe not right for an agent. And either you should reduce scope to something where you don't need a human in the loop, like a smaller thing, or rethink kind of what you're doing. And then finally, what is the cost of error? Error discovery. This is a really important one. If your errors are high stakes and hard to discover, it's hard to trust the agent with more autonomy.

**Carly**: 其次，任务的所有部分是否都**可行**？确保没有瓶颈。瓶颈会成倍增加成本和延迟，所以可以考虑缩小范围、简化任务再试。如果你总是需要在多个环节有人工干预，那可能就不适合用代理。你要么应该缩小范围，做一个不需要人工干预的小任务，要么重新思考你的做法。最后，**错误的代价**是多少？错误发现。这是非常重要的一点。如果你的错误风险高且难以发现，就很难信任代理并给予其更多自主权。

**Carly**: So examples of great use cases for agents. I'm not going to go through all of these, but coding is very relevant today, like that's why we're all here. And this is a great use case for agents. There's a lot of ambiguity to go from design DOC to a full fledged PR. So the complexity there is like, great, it's very valuable. This is something we all know. This is why we are working on it, and it's VI viable.

**Carly**: 代理的优秀用例示例。我不会全部讲完，但**编码**在今天非常相关，这也是我们今天在这里的原因。这是代理的一个绝佳用例。从设计文档到完整的**拉取请求** (PR, Pull Request) 存在很多模糊性。所以这里的复杂性很高，而且它非常有价值。我们都知道这一点，这也是我们正在努力的方向，而且是可行的。

**Carly**: Claude is very good at coding. Many of us already use Claude for coding, and we know how good it is at it. And then finally, the cost of error, this is an interesting one, code is really easily verifiable with good unit tests in Ci. So that is kind of all of those four things are why we're so focused and excited about coding for agents. But there's a lot of other really great reasons to use agents, which are listed below.

**Carly**: Claude 非常擅长编码。我们中很多人已经在使用 Claude 进行编码，我们知道它有多出色。最后，关于错误的代价，这是一个有趣的点。代码通过良好的单元测试和 **CI**（持续集成）非常容易验证。所以这四点就是我们如此专注和兴奋于为代理进行编码的原因。但还有很多其他很好的理由使用代理，下面列出了一些。

**Carly**: I think the cost of error is a really big one though to think about. So like search, you can double check results with citations, computer use, you can easily reverse. And yeah. So now let's get, let's move back to prompting.

**Carly**: 我认为错误的代价确实是一个需要认真思考的重要因素。比如搜索，你可以通过引用来复核结果；电脑操作，你可以轻易地撤销。好了，现在让我们回到提示的话题。

### AI 代理的 Prompt 设计技巧

**Carly**: I kind of set the scene for agents and let's get back into the prompting thing. So the first one is think like your agents, I think some people forget this, like llds do kind of think like humans and you do beyond just one model call for the whole agentic system and the agent moving in the loop, you do want to find a way to kind of simulate or observe and understand how the agents are going to operate. And so both like walk through it yourself, but then also allow the agent to move through it while you step with it and kind of ask the agent or the model what is confusing to them or how you can improve their harness. And this often makes it just really obvious, like where to improve your agent, your agent's prompt.

**Carly**: 我为代理设定了场景，现在让我们回到提示本身。第一点是**像你的代理一样思考**。我觉得有些人忘记了这一点，LLM 在某种程度上确实像人类一样思考。除了为整个代理系统进行单次模型调用外，你还需要找到一种方法来模拟或观察并理解代理将如何运作。所以，既要自己走一遍流程，也要让代理在你陪伴下走一遍，并询问代理或模型，什么让他们感到困惑，或者你如何改进他们的框架。这通常会很明显地揭示出在哪里可以改进你的代理和代理的提示。

**Carly**: So then next is give agents reasonable heuristics. This kind of comes back to the concept engineering that I've talked about at the beginning, but prompting is often about instilling good heuristics in the models. They can make better decisions in practice. So here it's like explaining concept to models. For example, when we built Claude code, we kind of had to like instill in Claude this idea of irreversibility. So like, don't do anything that you can't undo and that kind of giving reasonable heuristics and thinking about error handling and error discovery in terms of this irreversibility was just like a really important thing when building that prompt.

**Carly**: 接下来是**给代理合理的启发式方法**。这又回到了我一开始谈到的概念工程，但提示通常是为了向模型灌输良好的启发式方法，让它们在实践中做出更好的决策。这里就像向模型解释概念。例如，当我们构建 Claude Code 时，我们必须向 Claude 灌输“不可逆性”这个概念。就是说，不要做任何你无法撤销的事情。在构建提示时，给予合理的启发式方法，并从这种不可逆性的角度思考错误处理和错误发现，是非常重要的一件事。

**Carly**: So next, tool selection is key. So helping and prompting the model to choose the best tools for the job is really important here. Models can use more and more tools. With the Claude 4 models, you can use 100 plus tools, but good naming conventions and descriptions are going to be really, really important here. And the model doesn't naturally know what tools are important, especially not in your company's context or your domains context. That's just not clear to the model here. Again, just don't assume shared context that the model that that the model doesn't have and kind of think about it, think agents think about if I pass this to another human who doesn't work at my company or doesn't have domain knowledge of what I do, would they understand how to use these tools?

**Carly**: 接下来，**工具选择是关键**。帮助和提示模型选择最适合工作的工具非常重要。模型可以使用的工具越来越多，使用 Claude 3 模型，你可以使用超过 100 种工具，但良好的命名规范和描述在这里变得至关重要。模型天生不知道哪些工具是重要的，尤其是在你公司或领域背景下。这对模型来说是不清楚的。再次强调，不要假设模型拥有你所拥有的共享背景。可以这样想：如果我把这个交给一个不在我公司工作、对我领域没有专业知识的人，他们能理解如何使用这些工具吗？

**Carly**: Next is guide the thinking process. So allow your model to have a scratch pad or extended thinking that can really help in the model's performance or the agent's performance, and then also most changes will have unintended side effects and be prepared to have evals.

**Carly**: 下一点是**引导思考过程**。允许你的模型有一个“草稿纸”或进行扩展思考，这能极大地帮助模型或代理的性能。同时，也要意识到大多数更改都会有意外的副作用，要准备好进行评估。

**Carly**: Next is help the agent manage manage its context window. So in this case, agents can run up the context window really fast. Context windows are a limited resource and an important resource and helping the agent showing the agent what to do when it kind of runs up that context window. So for example, in Cloud code, we have a compact feature which will sum up the, and there's auto compact or the user can comp. And this will recognize what has happened so far such that the agent can start fresh. A lot more context. There are a lot of other things like memory. You can write persistent memory, and that's a lot of our Anthropic internal project products do that where the agent is allowed to write to this like scratch pad or memory file, but it's not necessarily sitting in its context and using those tokens.

**Carly**: 接下来是**帮助代理管理其上下文窗口**。代理会很快用完上下文窗口。上下文窗口是一种有限而重要的资源，要帮助代理，向它展示当上下文窗口用尽时该怎么做。例如，在 Claude Code 中，我们有一个“压缩”功能，可以总结已发生的事情，有自动压缩，用户也可以手动压缩。这样代理就能重新开始，并获得更多的上下文。还有很多其他方法，比如内存。你可以写入持久性内存，我们 Anthropic 内部的很多产品都这样做，代理被允许写入这个“草稿纸”或内存文件，但它不一定一直存在于上下文中并消耗 token。

**Carly**: And then finally, let Claude be Claude. If Claude is like really good at that kind of original thing of like calling tools in a loop and just like let Claude do its thing and take advantage of Claude's natural intelligence.

**Carly**: 最后，**让 Claude 做自己**。如果 Claude 真的很擅长像在循环中调用工具这样的原始任务，那就让它去做，充分利用它的自然智能。

**Carly**: So back to tool design. I'm just going to touch on this a little bit more. You want to use a simple and accurate tool name, kind of that principle of like verb and the noun. So like do something, so like write, presentation, delete, book, things like that. So here we have search customers and this is both like a principle in software engineering, which you guys definitely no, but this is like becomes even more important because it's an agent now reading your tool names. And I can't just like Slack you and ask you that what that function is. And so you do need to really have very crisp naming conventions and descriptions.

**Carly**: 回到工具设计。我再稍微谈一下。你要使用简单而准确的工具名称，遵循“动词+名词”的原则。比如“做某事”，就像“写演示文稿”、“删除书籍”之类。这里我们有“搜索客户”。这既是软件工程的一个原则，你们肯定知道，但这变得更加重要，因为现在是代理在读取你的工具名称。它不能像我一样在 Slack 上问你那个函数是干嘛的。所以你真的需要有非常清晰的命名规范和描述。

**Carly**: Cool, so I guess, yeah, again, just imagine that you're giving this function to another engineer in your team. Would they be able to understand is kind of the way that we think about it? So I've gone through general prompting.

**Carly**: 好的，所以我想，再次强调，就想象你把这个函数交给你团队里的另一个工程师，他们能理解吗？这就是我们的思考方式。我已经讲完了通用提示。

### Kilo Code 中的 Prompt 工作流

**Carly**: I've gone through prompting for agents, and now I'm just going to go quickly through Cloud Code prompting workflows. I'd like to note. So Cloud Code is kind of our terminal based coding agent. And I'd like to note that all of my presentation up until now is like really pushing for very thoughtful and strategic prompting. It's like long and crisp and thought out, and that's because those prompts are being hit in production level systems usually, but the way that we built cude code and our intentions in clogged code or that the developer can kind of be themselves and just like talk to the agent or the model the way that they would naturally and not necessarily need to be quite as thoughtful or as crisp or as clear as in the other things. And mostly this is just because if it's like a 1 to 1, if it's an individual talking to an agent, that cost of error handling is just is much lower where the person or the individual can just correct themselves.

**Carly**: 我讲了为代理编写提示，现在我将快速介绍一下 Claude Code 的提示工作流程。我想指出，Claude Code 是我们基于终端的编码代理。到目前为止，我的所有演示都在强调非常深思熟虑和有策略的提示，它们是冗长、清晰、经过深思熟虑的，因为这些提示通常用于生产级别的系统。但是，我们构建 Claude Code 的方式和意图是，让开发者可以做自己，就像他们自然地与代理或模型交谈一样，不一定需要像在其他情况下那样深思熟虑、清晰明了。这主要是因为如果是一对一的交流，即个人与代理交谈，错误处理的成本要低得多，个人可以自己纠正错误。

**Carly**: Our goal in Claude code is to have it be just like a really seamless and easy experience prompting Claude code. But nonetheless I'm going to give you a few workflows that I find interesting, but I would still push people to just kind of talk to Claude code in the way that they would talk to a coworker. So some common user prompting workflows. And I'm running little short on time, so I'm going to I'm going to move through this, but are to explore plan code and commit. So this is kind of this research first development cycle.

**Carly**: 我们在 Claude Code 中的目标是让提示体验无缝且轻松。尽管如此，我还是要给大家介绍几个我觉得有趣的工作流程，但我仍然鼓励大家像和同事交谈一样与 Claude Code 交流。一些常见的用户提示工作流程，我的时间有点紧，所以我会快点讲完，包括探索、计划、编码和提交。这是一种“研究先行”的开发周期。

**Carly**: And this 1 I think is my favorite. Like this is one that I do a lot. But you asked Claude to read the relevant file, so kind of do this exploratory work with no code, and you don't tell Claude to like think of the actions, you just ask it to do this exploration, and you might use sub agents to verify details and investigate questions. And then you ask Claude to make a plan. So we have this like these prompting techniques to make Claude use extended thinking more and more and more. So there's like when you're prompting Claude, these are some of the very few prompting tricks for cloude code, but you just saw Claude like think, or you saw Claude think hard or think harder or ultra think, which is funny. But this is when the problem is complex and you just like you want Claude to give you more and to think as hard as possible.

**Carly**: 我觉得这个是我最喜欢的，也是我经常用的。你让 Claude 读取相关文件，进行这种无代码的探索性工作，你不需要告诉 Claude 要采取什么行动，只让它去探索。你可能会使用子代理来验证细节和调查问题。然后你让 Claude 制定一个计划。我们有一些提示技巧，让 Claude 越来越多地使用扩展思考。比如在提示 Claude 时，你可以用“思考”、“努力思考”、“更努力地思考”甚至是“超级思考”这样有趣的词。这是当问题很复杂，你希望 Claude 给你更多信息并尽可能努力思考的时候。

**Carly**: And then create a document or a GitHub issue with a plan for reference, and then implement the solution and code, and then commit result and create pull request. And this whole thing can happen within Cloud Code. So then write, test, commit code, iterate, commit. So am going through that, and then write code, screenshot, iter.

**Carly**: 然后创建一个文档或 GitHub 问题，附上计划以供参考，接着实现解决方案并编写代码，最后提交结果并创建拉取请求。整个过程都可以在 Claude Code 内部完成。接着是“编写、测试、提交代码、迭代、提交”的循环。我正在讲解这个流程。然后是“编写代码、截图、迭代”。

**Carly**: This is also something I do a lot. Some people, I think forget that Cloud Code can be multimodal. So you can drop in screenshots of like what looks good, what doesn't look good, what you want to change into the Cloud Code. And so this is an iterative thing that I do a lot. So like, if I'm building something and I don't like how the front end looks, I just drop it into Cloud Code. My suit. I want this to change. Even errors like I will just drop a bunch of things into Cloud Code. Cool, that is actually it. I have a few minutes left, thanks.

**Carly**: 这也是我经常做的一件事。我想有些人忘记了 Claude Code 是多模态的。所以你可以把截图拖进去，比如哪些看起来好，哪些不好，你想改变什么。这是一个我经常做的迭代过程。比如，如果我在构建某个东西，但我不喜欢前端的样子，我就会把截图拖进 Claude Code，然后告诉它“我想改变这个”。即使是错误信息，我也会把一堆东西都拖进 Claude Code。好了，实际上就是这些了。我还有几分钟时间，谢谢。

**Carly**: Yes?

**Carly**: 是的？

**Alex**: Yes, okay, now audience can hear me as well. Hey, thank you so much. That's absolutely wonderful. And like, you know, I was watching YouTube comments all this time and that's incredible how positive feedback is. There was like many people asking for slides, can you give the slides?

**Alex**: 好的，现在观众也能听到我了。嘿，非常感谢你。这真是太棒了。你知道吗，我一直在看 YouTube 的评论，那些积极的反馈真是太不可思议了。有很多人在问要幻灯片，你能提供吗？

**Carly**: Oh, let me check with the person who makes those decisions before I make any commitments.

**Carly**: 哦，在我做出任何承诺之前，我得先和做决定的人确认一下。

**Alex**: Yeah, makes sense. Working in a big company, you have to be careful with those things.

**Alex**: 是的，有道理。在大公司工作，你必须对这些事情小心谨慎。

**发言-人3**: I'm not the boss here, so I hope that I will see.

**Carly**: 我不是这里的老板，所以我希望能看到结果。

**Alex**: So, but I do recommend you when this stream will be done, go and read comments there, super positive feedback.

**Alex**: 不过，我真的推荐你，等直播结束后，去看看那里的评论，反馈超级积极。

**Alex**: Were people doing screenshots of each and every comment, each and every slide? So you see slides are public. Anyway, hi of mind, got them. Anyway. Yeah, it's a lovely presentation, I am the one who requested it. There are people writing and very, very many hours, or positive, comments, we so thank you so much. Now we will let you go, I know you have a very tight schedule and next meeting comes in few moments. So I will invite Justin jump back and join me. And Carly, thank you so much. We do hope, we do hope to see you again. We always ready to host such a wonderful speaker, so thank you.

**Alex**: 有人把每个评论、每张幻灯片都截图了吗？所以你看，幻灯片反正已经公开了。不管怎样，这真是一次很棒的演讲，我是要求分享它的人。有很多人在写很长的正面评论，所以非常感谢你。现在我们让你离开，我知道你的日程很紧，下一个会议马上就要开始了。我会邀请 Justin 回来加入我。Carly，非常感谢你。我们真心希望再次见到你。我们随时准备好接待这样出色的演讲者，谢谢你。

**Carly**: bye.

**Carly**: 再见。

## Kilo Code 中的 Prompt 实践

**Alex**: Slide and that we are again. And that's me. Yeah, that's still Jo.

**Alex**: 我们又回来了。还是我，是的，还是 Alex。

**Justin**: Thank you Carly.

**Justin**: 谢谢你，Carly。

**Alex**: So that's still Justin and that's still Alex. Alex, now reading the comments, I will try to be slightly less loud and we will move maybe microphone closer .

**Alex**: 还是 Justin 和 Alex。Alex，现在看了评论，我会试着小声一点，也许会把麦克风移近一些。

**Justin**: to already it a little bit. But, if it's still too loud is now and we can speak somewhere.

**Justin**: 已经调整了一点。但如果现在还太吵，我们可以换个地方说话。

**Alex**: Yeah I'm just a super excited to be here with you and it was indeed very, very, very interesting presentation. So now what's going to happen now? Now we have? Showing now, we will show how those things work, specifically using the open source killer code, open source agent for Visual Studio Code. And let us begin. Audio is good now, not too loud, wonderful, thank you.

**Alex**: 我只是非常兴奋能和你们在一起，这确实是一个非常非常有趣的演讲。那么现在会发生什么呢？现在我们将展示这些东西是如何工作的，特别是使用开源的 Killer Code，一个用于 Visual Studio Code 的开源代理。让我们开始吧。现在音频很好，不太响，太棒了，谢谢。

**Justin**: And Alex, will people will be able to follow along?

**Justin**: Alex，大家能跟上吗？

**Alex**: Yeah, absolutely. So usually you see, usually our workshops are very practical hands on and people like write code, create their own web MCP servers and do this thing. This one is more more conceptual, more conceptual. Yeah, that's a way, a good way to describe it. So we will begin moving. So I want to start with a little bit unusual thing, how important prompt is.

**Alex**: 是的，当然可以。通常，我们的工作坊都非常注重实践，大家会编写代码，创建自己的网页 **MCP** (模型-客户端协议) 服务器等等。但这一次更偏向概念性。是的，这是一个很好的描述方式。我们开始吧。我想从一个有点不寻常的事情开始，那就是提示的重要性。

### Prompt 的重要性

**Justin**: it's like the most important thing maybe?

**Justin**: 这也许是最重要的事情？

**Alex**: Yeah, I would say so. As you want to have some results, some specific results, there are only two things would define it, prompt and the model you've chosen.

**Alex**: 是的，我会这么说。如果你想得到一些特定的结果，只有两件事能决定它：你给出的提示和你选择的模型。

**Justin**: I think there's a third thing as .

**Justin**: 我觉得还有第三件事。

**Alex**: well. What, what is it.

**Alex**: 哦？是什么？

**Justin**: what is it So, so, so there's the prompt that the user gives?

**Justin**: 就是，除了用户给的提示……

**Alex**: Yeah, no, like, I mean, like overall prompt, what goes in the end to a model? What model receive? Yeah, we will discuss it in a second. Yeah, so in general, it all depend your results, the results you want to have depend on two things, only model you choose and prompt you put in. Today we don't speak about choosing large random language model. Our model by default for today's son. Yeah, I guess, yeah. So we will focus on the prompt only, but prompt is like you considering you are using the decent model is the most important things.

**Alex**: 是的，我的意思是最终进入模型的整个提示是什么？模型收到了什么？我们马上会讨论。总的来说，你想要的结果只取决于两件事：你选择的模型和你输入的提示。今天我们不讨论如何选择大型语言模型。我们今天默认的模型是 Sonnet。所以我们将只关注提示，但考虑到你正在使用一个不错的模型，提示就是最重要的事情。

**Alex**: Now, I assume I speak to engineers, or at least engineers to be in the very, very close future. And I need to remind you what, to those who don't know physics, many things look like magic. That means what we really need to understand, they think what large language model, for example, cloud sunne for running somewhere on the servers far, far away, what it will receive in the end. So what you will receive in the end, it's not that simple. And it can be hidden because we want to make things comfortable, configurable, but comfortable for you for sure.

**Alex**: 现在，我假设我是在和工程师们，或者至少是即将成为工程师的人们交谈。我需要提醒你们，对于不懂物理的人来说，很多事情看起来都像魔法。这意味着我们真正需要理解的是，那些在遥远服务器上运行的大型语言模型，比如 Claude Sonnet，最终会收到什么。它最终收到的东西并不那么简单。它可能被隐藏起来，因为我们想让事情对你来说既舒适又可配置，但舒适是肯定的。

### Prompt 结构解析：系统提示、环境和任务

**Alex**: So we are going to talk first things first about the prompt structure. There are some applications where what a model will receive is very similar to what you type. You give user input, and that's what it will receive. There are also reg applications, a regime there is augmented, there is a happening augmentation of your input with some additional data for the model. In our case, it works slightly different, so there are some kind of augmentation is happening, but it's happening on the client side, on the side of your Visual Studio Code. So prompt technically consists, final prompt, What goes to llum consists of three parts system, prompt, environment details, and the task. So and task is, I think, what you put in the .

**Alex**: 所以我们首先要谈的是提示的结构。在一些应用中，模型收到的内容和你输入的内容非常相似。你给出用户输入，模型就收到那个。还有一些 **RAG**（检索增强生成）应用，你的输入会被一些额外的数据增强。在我们的例子中，情况略有不同。增强是在客户端，也就是在你的 Visual Studio Code 这一侧发生的。所以，技术上讲，最终进入 **LLM** 的提示由三部分组成：**系统提示**、**环境细节**和**任务**。而任务，我想，就是你输入到...

**Justin**: input field, right?

**Justin**: 输入框里的内容，对吧？

**Alex**: So that's what you type, it's very important part and we will refer to this part many times, many times today. But in the first part of this, I want to focus on Stu prompt and environment details because they actually define it really a lot.

**Alex**: 那就是你输入的内容，这是非常重要的一部分，我们今天会多次提到它。但在第一部分，我想专注于系统提示和环境细节，因为它们在很大程度上定义了结果。

**Justin**: Yeah sure.

**Justin**: 好的。

**Alex**: So what is the same system prompt? We will be a little show of demo, but in general system prompt covers many things, what are essential for model to generate efficient output for you? So we will be some rules, we will be some modes, we will show it in details and how to customize them as well, and system information, objective tool definitions, and role most of all, which is very important. So going here, I want to switch to my Vs code and get very, very practical, you know, Justin usually very this moment, all people like not all people, but many, many people be like, wow, you can have killer code on the right on the screen.

**Alex**: 那么，什么是系统提示呢？我们会做一个小演示，但总的来说，系统提示涵盖了很多对模型生成高效输出至关重要的东西。它会包含一些规则、一些模式（我们会详细展示并说明如何自定义它们）、系统信息、目标工具定义，以及最重要的——角色，这非常重要。现在，我想切换到我的 VS Code，进行一些非常实际的操作。你知道吗，Justin，通常在这个时候，很多人都会惊叹：“哇，你可以把 Killer Code 放到屏幕右边！”

**Justin**: Yeah, so it can be confusing for people, but yeah, most people, if you just go to Vs code and you click on, extensions, you type in kilo code, install it booming will be on the left. But, you know, Alex likes to do things differently sometimes. So, and you can too. Yeah.

**Justin**: 是的，这可能会让人们感到困惑。但大多数人，如果你去 VS Code，点击扩展，输入 Kilo Code，安装后它会出现在左边。但是，你知道，Alex 有时喜欢与众不同。你也可以这么做。

**Alex**: to me, it's definitely comfortable to have code. You see, I use killer code all the time, like literally, I can't remember any single task I wouldn't do, I would do without killer code for, I don't know for a really long time already, it's just super convenient. So I need killer code to be open at all times, but also I want to see Git history, but also I want to do debug from time to time or manage extension. So yeah, and we have byte screen, so I ended up like that good, so question is, how do you see user input, how do you see tasks, how do you see environment variables, how do you use the system prompt? So take a look, if we go here to modes, and with modes, I will stop later for longer, but not for now. Now just like if we open mode of any description, you see herever many, many of the instructions, instructions how to do is how to do that so that what we'll build for us system prompt. But most importantly here is what I want to show you here.

**Alex**: 对我来说，这样放代码绝对很舒服。你看，我一直都在用 Killer Code，毫不夸张地说，我已经记不起有哪个任务是不需要用 Killer Code 来完成的了，我用它已经很久了，它实在太方便了。所以我需要 Killer Code 一直开着，但我也想看 Git 历史，也想时不时地调试或者管理扩展。所以，而且我们屏幕很宽，最后就变成了这样。好的，问题是，你怎么看用户输入，怎么看任务，怎么看环境变量，怎么使用系统提示？看这里，如果我们去“模式”，关于模式我之后会详细讲。现在，如果我们打开任何一个模式的描述，你会看到很多很多的指令，告诉模型如何做这做那，这些指令为我们构建了系统提示。但这里最重要的是我想给你们看的。

**Alex**: Final button preview, system prompt. In my case, I don't want to preview it like that, but I want to copy it and I want to create a special file .

**Alex**: 最后的按钮是“预览系统提示”。在我的情况下，我不想那样预览它，我想复制它，然后创建一个特殊的文件。

**Justin**: prompt it all caps those prompt art.

**Justin**: `PROMPT_ART`，全大写。

**Alex**: Yeah, prompt art, so it will be my system prompt, and I put it here. And for now, I will hide things so you can see it, everything. So now how many lines it has here? Oh my God, almost 3000 lines. Yeah, that's quite odd.

**Alex**: 是的，`PROMPT_ART`，这将是我的系统提示，我把它放在这里。现在，我先隐藏其他东西，这样你们就能看清楚所有内容。现在这里有多少行？天哪，将近 3000 行。是的，这相当多。

**Justin**: And you typed all of these lines yourself?

**Justin**: 这些都是你自己打的吗？

**Alex**: No, no, no, no, no, killer does it for me. Okay, okay, so we combine the things together for it to be comfortable for people to use. And that's a job. What happens? Completely hidden from the people, but it's super efficient. So like basically it describes to llum, to AI model what it can do for you. Now notice we using Kilo using another agents, you don't really realize how different problems are people solving with large language models, You are writing code and someone else's debugging the same code may be your colleague, but there are people doing medical research, there are people preparing their homework, I don't know, in hardware engineering or designing furniture and making a marketing for it.

**Alex**: 不不不，是 Kilo 为我做的。好的，我们把这些东西组合在一起，让人们使用起来更舒服。这就是它的工作。发生了什么？它完全对用户隐藏，但超级高效。它基本上向 **LLM**，向 AI 模型描述了它能为你做什么。现在请注意，我们使用 Kilo 和其他代理，你可能没意识到人们用大型语言模型解决的问题有多么不同。你在写代码，你的同事可能在调试同样的代码，但还有人在做医学研究，有人在准备硬件工程的作业，或者设计家具并为之做市场营销。

**Justin**: My brother writes script for film for that inkilobi .

**Justin**: 我哥哥用它来写电影剧本。

**发言-人1**: right? And currently, so I don't have a lawyer at the moment, So then I need to communicate some pinks. I live in Germany. I always ask Cloud to write professional like lawyer style email for me or Toyer be whatever. And it does, it works perfectly why I'm talking about that right now, Why are you talking about that idea is a model has no idea, what do you want? Are you launching a spaceship or are you treating an injured kitten?

**Alex**: 对吧？目前，我没有律师，所以我需要沟通一些事情。我住在德国，我总是让 Claude 帮我写专业的、律师风格的邮件。它做得很好，非常完美。我现在为什么要谈这个？因为模型不知道你想要什么。你是想发射一艘宇宙飞船，还是想治疗一只受伤的小猫？

**Justin**: Yeah, I mean, so it doesn't care really.

**Justin**: 是的，它其实并不在乎。

**Alex**: just once they help you out. Yeah, and then then it edits files or creates some code, looks for bug, it's actually done with the tools what killer code defines for you. So these 3 2994 4 lines are the system prompt, what is partially just written and defined and partially then will be dynamically generated visiting your configuration and custom rules and everything, everything, everything here.

**Alex**: 它只想帮助你。是的，然后它会编辑文件、创建代码、查找错误，这实际上是通过 Killer Code 为你定义的工具完成的。所以这 2994 行就是系统提示，它一部分是预先写好和定义的，另一部分是根据你的配置、自定义规则等所有东西动态生成的。

**Justin**: And Alex, Carly also mentioned these tools. Tools.

**Justin**: Alex，Carly 也提到了这些工具。

**Alex**: yeah, it's all here. It's all here. Moreover, although right now we are looking at the static file. So you see here a tool use, you see here, markdown rules, We will be later tool definitions and we will be later tool guide guidelines.

**Alex**: 是的，全都在这里。而且，虽然我们现在看的是一个静态文件，但你在这里能看到工具使用、Markdown 规则，稍后还会有工具定义和工具使用指南。

**Alex**: This part is dynamically built. That's very interesting because there are some tools what are natively included in tequila, and they are just defined as a text here, but also some file, some rules, some tools, sorry, will be loaded from MCP servers, which is protocol introduced by Entropic A. These, 2. Yeah, those two are all will be defined here, partially loaded from a file descriptions and partially loaded dynamically depending on which MCP servers are turned on. And you setup in your, By the way, if you haven't seen our previous workshop on MCP and you have no idea what the MCP is, do you think we should watch?

**Alex**: 这部分是动态构建的。这很有趣，因为有些工具是 Kilo 原生包含的，它们在这里被定义为文本。但还有一些规则、工具会从 **MCP** 服务器加载，这是 **Anthropic** 引入的一种协议。这些都会在这里定义，一部分从文件描述中加载，另一部分根据你开启的 MCP 服务器动态加载。顺便说一下，如果你没看过我们之前关于 MCP 的研讨会，也不知道什么是 MCP，你觉得大家应该去看吗？

**Justin**: Yeah, they should check it out.

**Justin**: 是的，他们应该去看看。

**Alex**: Yeah.

**Alex**: 是的。

**Justin**: MCP absolutely too. Yeah, like check it out, it's a great workshop.

**Justin**: 绝对要去看看 MCP 的内容。是的，那是一个很棒的研讨会。

**Alex**: Yeah, and MCP tools are super important. That's the way how we teach AI models to use API is doesn't matter if it's a file system or your whatever bank account API or something else, it's all end up with MCP server.

**Alex**: 是的，MCP 工具超级重要。这就是我们教 AI 模型如何使用 **API** 的方式，不管是文件系统、你的银行账户 API 还是别的什么，最终都通过 MCP 服务器实现。

**Justin**: so it's super important. Brendan even used it to order the pizza.

**Justin**: 所以它超级重要。Brendan 甚至用它来点披萨。

**Alex**: Yeah, right, during our last workshop, our dear Brandon developed MCP server, which helped him to order pizza.

**Alex**: 是的，没错，在我们上一次的研讨会中，我们亲爱的 Brendan 开发了一个 MCP 服务器，帮助他点了披萨。

**Justin**: You know, sometimes you're coding, you don't wanna do contact switching, boom, you can have it work, Yeah.

**Justin**: 你知道，有时候你在编码，不想切换上下文，砰，你就能让它工作起来。

**Alex**: you really want, And now you see we can tune AI models to be like, if it sees by your questions, by your messages, what you upset and hungry, boom, it pulls NCP and orders pizza for you, who can stay disappointed and like pizza is delivered, well, someone who gonna pay for it, but that's not my concern, right?

**Alex**: 你真的想要。现在你看，我们可以调整 AI 模型，比如，如果它从你的问题、你的信息中看出你又不高兴又饿了，砰，它就调用 **MCP** (这里可能是口误，应为 MCP) 为你点披萨。谁还能失望呢？披萨送到了。好吧，总得有人付钱，但那不是我关心的，对吧？

**Alex**: Now, let's get back to the system prompt. So system prompt consists of few different sections and few very, very, very important parts. It's begins weve role definition. That's something what Carly was talking about, right? So we currently in architect mode, that's why system prompt here includes your killer code experience, technical leader, blah, blah, blah. So that's, that's a role definition for architect mode, it will be different for different modes.

**Alex**: 现在，让我们回到系统提示。系统提示由几个不同的部分和几个非常重要的部分组成。它从角色定义开始，这就是 Carly 之前谈到的内容，对吧？我们目前处于“架构师”模式，所以这里的系统提示包含了你的 Killer Code 经验、技术领导者等等。这是架构师模式的角色定义，不同模式会有所不同。

**Alex**: Now I want to do a little search here and I want to show you this. Yes, I want to show you sections, everything was defined here. The first section will be roll and second section will be more down rules. Those rules explain to mole how it should format the answer so you can see the responses and you can see not just like see, but also click and transfer directly to the file. So tools, tools, I use it to create files and write everything. By the way, there are 3000 lines, but I strongly recommend you yourself to see it on your machine. It's changing over versions.

**Alex**: 现在我想在这里搜索一下，给你们看这个。是的，我想给你们看这些部分，所有东西都在这里定义了。第一部分是角色，第二部分是 Markdown 规则。这些规则向模型解释了它应该如何格式化答案，这样你不仅能看到响应，还能点击并直接跳转到文件。工具，我用它来创建文件和编写所有东西。顺便说一下，这里有 3000 行，但我强烈建议你们在自己的机器上看看它，它会随着版本变化而改变。

**Justin**: but this is going to be an eight hour workshop. We go through everything.

**Justin**: 但这会变成一个八小时的研讨会了，如果我们把所有东西都过一遍。

**发言-人1**: No, no, we will not go. No, no, no, no, no, I would love to. I would love to, you know, longest work, longest series of training. Next, next time, next time. Now you see guys, I would love to speak 8 hours for you, but we are forced to go on now. Yes, so, next definition is a tool use, so all the tools, what, we teach model on how to use, how to apply them, how to search for files, how to delete files, modified file files, and so on and so forth.

**Alex**: 不不，我们不会的。不不不，我倒是很想。你知道，最长的工作，最长的系列培训。下次吧，下次。你们看，我倒是很想为你们讲 8 个小时，但我们现在必须继续了。是的，下一个定义是工具使用，也就是我们教模型如何使用所有这些工具，如何应用它们，如何搜索文件，如何删除、修改文件等等。

**Alex**: Then very important explanation, very important section. This one is not so big, I don't know, around few dozens of lines its capabilities. This one explains to model what it can do and how it should work according to using rules. So when user gives you a task, what you do, how you do research, how you apply tools, and when to go for that, then modes, it's also dynamically generated part because there are some predefined mode architect code. Ask debug. We will talk about modes later .

**Alex**: 接着是一个非常重要的解释，一个非常重要的部分。这个部分不大，大概几十行，是关于它的能力。这部分向模型解释了它能做什么，以及它应该如何根据使用规则工作。所以，当用户给你一个任务时，你该做什么，如何做研究，如何应用工具，以及何时去做。然后是模式，这也是动态生成的部分，因为有一些预定义的模式，比如架构师模式、编码模式、提问模式、调试模式。我们稍后会讨论模式。

**Justin**: because this is different to most other, agents.

**Justin**: 因为这和大多数其他代理不同。

**Alex**: right? Yes, yes, that is very different. The point is, yeah, let's so go go no, no, no. I'm like .

**Alex**: 对的，是的，这非常不同。关键是……

**Justin**: later when whenever you want to talk about it.

**Justin**: 稍后，你想什么时候谈都可以。

**Alex**: but yeah, talk about it. Yeah, let's talk about that. The story is kill code is not an agent, it's a team of agents specialize it for different things and moreover, so again, we will return to this question later. We will have a discussion of the specialized modes we also add and we strongly suggest you to a to once we are different problems, so there are different modes, what's youd better to work with your particular project? I use all the time, for example, document writer, which helps us to create documentation tremendously and good, So rules are the rules for the model to follow. And that's a long list. You see, we are very strict with the models, right?

**Alex**: 好吧，那就谈谈吧。Kilo Code 不是一个代理，它是一个由专门从事不同任务的代理组成的团队。而且，我们稍后会回到这个问题。我们会讨论我们添加的专业模式，我们强烈建议你们根据不同的问题使用不同的模式。对于你的特定项目，最好使用哪种模式？我一直都在用，比如“文档编写器”，它极大地帮助我们创建文档。好的，所以规则就是模型要遵循的规则。这是一个很长的列表。你看，我们对模型非常严格，对吧？

**Justin**: Is this something that killer code adds itself?

**Justin**: 这是 Killer Code 自己添加的吗？

**Alex**: Yeah.

**Alex**: 是的。

**Justin**: okay.

**Justin**: 好的。

**Alex**: yeah. So then part of a system prompt will be system information, so what's the model, what's the, our shell current working directory and so on then explanation how to accomplish given task and user custom instructions. So whatever depend, whatever is defined for this particular mode will go here. And those will be actually, I want to switch to the next one. Yeah, oops. Yeah, objective user, customers instructions, and that's it. It all ends with user custom instructions going for specific project and tool.

**Alex**: 是的。然后系统提示的一部分是系统信息，比如模型是什么，我们的 shell 当前工作目录是什么等等。然后是关于如何完成给定任务的解释和用户的自定义指令。所以，任何为这个特定模式定义的东西都会放在这里。这些实际上就是……我想切换到下一个。是的，目标、用户、客户指令，就是这样。它最终都以针对特定项目和工具的用户自定义指令结束。

**Justin**: And if a user defines their own roles, does that get added to the custom instructions?

**Justin**: 如果用户定义了自己的规则，那会添加到自定义指令里吗？

**发言-人1**: Yeah, so it's a question of which tools we are talking about. There are more specific tools. There are general rules, and rules can be defined for the project, and rules code can be defined globally. So global rules will be applied always, then more specific tools will be applied if you are in this project in the current mode, but won't be applied in some other mode, and that's it good now.

**Alex**: 是的，这取决于我们谈论的是哪些工具。有更具体的工具，也有通用的规则。规则可以为项目定义，也可以全局定义。所以全局规则会一直应用，而更具体的工具只会在你处于当前项目的当前模式下应用，在其他模式下则不会。好了。

### 环境细节：可见文件与标签页

**Alex**: Environment Details Environment details happen on a different level. If the environment details, if system prompt is predefined basically on the system startup and then modify it if something goes differently, then environment details are defined on per request and they go directly with request and then you shall see them going with the request. They are actually important, specifically like most important things will be specified their current mode. So therefore, what's happening? And are we going to write code or do something else? Or maybe just answer the question?

**Alex**: 环境细节发生在另一个层面。如果说系统提示是在系统启动时预定义，然后根据情况修改，那么环境细节则是按每次请求定义的，它们直接随请求一起发送。你会看到它们随请求一起出现。它们实际上很重要，特别是像当前模式这样的最重要信息会在这里指定。所以，发生了什么？我们是要写代码还是做别的？或者只是回答问题？

**Alex**: And very important thing, are visible files and open tabs. The point is, if you have a visible file open right now in your V code, then model will assume what you are asking it to do will relate to this particular visible file. And also, if you have open tabs related to what task you are doing right now, we also will be considered it. Model will know what they exist and what they can be read and so on and so forth. Now question how many tabs do we want to have? Do we want to be open in each particular moment?

**Alex**: 还有一件非常重要的事情，就是可见文件和打开的标签页。重点是，如果你当前在 VS Code 中打开了一个可见文件，模型就会假设你要求它做的事情与这个特定的可见文件有关。同样，如果你打开了与当前任务相关的标签页，我们也会考虑进去。模型会知道它们的存在，并且可以被读取等等。现在的问题是，我们想要打开多少个标签页？在每个特定时刻都希望它们打开吗？

**Justin**: Probably not a thousand.

**Justin**: 大概不是一千个。

**Alex**: yeah, definitely. So not to mention it can like consume your Ram, but also we definitely want to understand what it will destruct and make decisions for model harder if it sees one visible file. Most important, and to open tabs, what are also relevant to the task, obviously it will operate, better and faster. Let's take a look on how to get it and how you can see what is happening. Right now. It's I'm trying, yeah, now, oops, yeah, good, and I let me hide .

**Alex**: 是的，肯定不是。更不用说它会消耗你的内存，但我们肯定想知道，如果它看到一个可见文件，这会如何分散它的注意力，让它更难做决定。最重要的是，打开与任务相关的标签页，显然它会运行得更好更快。让我们看看如何获取这些信息，以及如何看到正在发生什么。现在，我试试……好的，让我隐藏一下。

**Justin**: and sometimes, I mean some agents I'm not going to talk about which ones we'll ask you very specifically to add like a file as a context and they won't really do any exploration of their own, kloo does do a lot of that exploration, but it can really feel like magic when you just have a tab open and you ask it a question and it already feels like it's reading your mind and the reason why it feels like magic because we add that open tab to the context.

**Justin**: 有时候，我指的是某些代理，我不会说是哪些，它们会非常具体地要求你添加一个文件作为上下文，而它们自己不会做任何探索。Kilo 会做很多探索，但当你只是打开一个标签页，然后问它一个问题，它就已经感觉像在读你的心了，这感觉就像魔法一样，而之所以像魔法，是因为我们把那个打开的标签页添加到了上下文中。

**Alex**: Yes, and so let's see what goes happened, how it happened to work with environment details. I will switch, for example, to ask mode and I will tell it explain me purpose of this project. Let's ask mode here. Looks good to me. So I guess let me make it slightly bigger, maybe. Yeah, no. Yeah, that's pretty nice, should be visible as well. This model goes to cloud sunne 4, and it explains me what this project is about, but what I actually want to see is not this explanation.

**Alex**: 是的，所以让我们看看发生了什么，它是如何处理环境细节的。我会切换到，比如“提问”模式，然后告诉它“解释这个项目的目的”。我们在这里用提问模式，看起来不错。我想我可以把它放大一点。是的，这样很不错，应该也能看清。这个请求会发送给 Claude Sonnet 3，它会向我解释这个项目是关于什么的，但我真正想看的不是这个解释。

**Alex**: It's a killer code documentation. I have heard something about the project. No, but I want you to see how API requests looks like. So if if you click here, we will see very many things I actually want to copy paste. It's no, no, no, I want to copy paste them or at least to try to copy paste them if I can. Yeah, goes good it? No, it went too far. Yeah, finally, environment details. Good, so I can close killer for a moment. And I can close this and close this, I say, and I can create a new file. So it will be new file details, type of details.

**Alex**: 这是 Killer Code 的文档。我听说过一些关于这个项目的事情。不，但我想让你们看看 API 请求是什么样的。所以如果你们点击这里，我们会看到很多东西，我实际上想复制粘贴它们。不不不，我想复制粘贴它们，或者至少如果可以的话，尝试复制粘贴。好了吗？不，太远了。是的，终于，环境细节。好的，我可以暂时关闭 Killer。然后关闭这个，关闭这个，我说，然后我可以创建一个新文件。它将是新的文件 `details.txt`。

**Alex**: Why do I do type us all the time when I'm showing? Like you see, usually it's not happening .

**Alex**: 为什么我每次演示的时候都会打错字？你看，平时是不会这样的。

**Justin**: that often. Maybe because a couple hundred people are watching.

**Justin**: 是的，也许是因为有几百人在看。

**Alex**: Yeah, well, that's more than a couple of hundred, but it doesn't matter. So good.

**Alex**: 嗯，不止几百人，但没关系。好了。

**Alex**: Now let's take a look at this file. The task is the, as you can guess, user input. So final part of a prompt, that's what I type, we will discuss it later. Now I want to focus on the environment details. So environment details, visual visible files. A model will first of all focus on V file. If it's model smart enough, Well, we have some Netflow selected, should be smart, yeah, then open tabs also prompt MD Well, I didn't have details file open back then, can look slightly different than current costs, current mode, and also important invisible information, which still helps tremendous to model if it can decide to look for something is a current workspace directory, which is going to be huge in this case because it's our docs and well, they are huge, so later where can be even more, but overall idea of this is that file is truncated here use list files on specific, so those are instructions don't forget it's a request and those are instructions for mole to list files on specific directories, good we explored details, so those will be different per request, right? They can change depending on the situation mode and so on and so forth.

**Alex**: 现在让我们看看这个文件。任务，如你所料，是用户输入。这是提示的最后一部分，也就是我输入的内容，我们稍后会讨论。现在我想专注于环境细节。环境细节中，有可见文件。模型会首先关注可见文件。如果模型足够聪明——我们选了 Sonnet，应该很聪明——是的，然后是打开的标签页，这里有 `prompt.md`。当时我还没有打开 `details` 文件。它可能和当前看起来略有不同。还有当前模式，以及重要的不可见信息，这对模型决定是否需要查找某些东西仍然有巨大帮助，那就是当前的工作区目录。在这种情况下，这个目录会非常大，因为是我们的文档库，它非常庞大。后面可能会更多。但总的思路是，这里的文件列表被截断了，并有指令告诉模型在特定目录上使用“列出文件”工具。别忘了，这是一个请求，这些是给模型的指令，让它列出特定目录中的文件。好了，我们看过了细节，这些会因请求而异，对吧？它们会根据情况、模式等发生变化。

**Alex**: Very nice system prompt with CB discussed, and then finally task user input thing, which we focus on in the second part of this. It's very also important, but view, you can not build successful. You can do real prompt engineering, do your prompt best of the best without understanding how the pre-configured part is happening. Good.

**Alex**: 我们讨论了非常棒的系统提示，然后是最后的用户输入任务，这是我们第二部分要关注的。它也非常重要，但是，如果你不了解预先配置的部分是如何工作的，你就无法构建成功的应用，无法进行真正的提示工程，无法做出最好的提示。好的。

### Kilo Code 中的“模式” (Modes)

**Justin**: yeah, otherwise it just feels like magic, right?

**Justin**: 是的，否则就感觉像魔法一样，对吧？

**发言-人1**: Yeah, and like magic is great when it's in the movie, but then you are developing something, earning money, and many people depend on you. We want it's to be like you're pretty usable.

**Alex**: 是的，魔法在电影里很棒，但当你在开发东西、赚钱，并且很多人依赖你的时候，我们希望它能非常实用。

**Justin**: Exactly, exactly, yeah.

**Justin**: 完全正确，是的。

**Alex**: good. So do you use mode? Yes, what modes, what mode is your favorite? What do you use the mode orchestrator, orchestrator, orchestrator? I see good, so I have slides specifically on that, you see the query, the question is I don't really use Orchestrator, what? Yeah. And I can explain, and I can explain why you will see, you will see. Yeah, I have special slide explaining why I prefer manual control over Orchestrator can Orchestrator is doing a great job here on killer team on killer crowd, I guess I will be one of the very few people who stick to direct manual control, but the rest of advocates and many engineers I know are going with Orchestrator.

**Alex**: 好的。你使用模式吗？是的，什么模式，你最喜欢哪个模式？你用的是“编排器”（Orchestrator）模式吗？我明白了，好的。我专门有关于这个的幻灯片。你看，问题是我其实不怎么用编排器。是的，我可以解释为什么，你们会看到的。我有一张特殊的幻灯片，解释为什么我更喜欢手动控制而不是编排器。编排器在 Killer 团队里做得很好，我想我可能是少数几个坚持直接手动控制的人之一，但其他倡导者和我认识的许多工程师都在使用编排器。

**Alex**: Yeah, you know, it's good, like don't get me wrong, good, maybe I just don't trust it that much, but we will see.

**Alex**: 是的，你知道，它很好，别误会，很好。也许我只是没那么信任它，但我们拭目以待。

**Alex**: So very important defining very important working with killer to use different modes, what are the mode is now let's get back to it, let's get back to kilo and discuss modes about. So opening here, these mode shows, oh, thank you code. Yeah, opening here, this comes with window, you will see slightly different picture when you see on the screen right now, why is that? Because we use custom modes, but we will start with normal modes.

**Alex**: 使用 Killer 时，一个非常重要的定义就是使用不同的模式。模式是什么？现在让我们回到 Kilo，讨论一下模式。打开这里，这个模式显示……哦，谢谢你，Code。是的，打开这里，这个窗口会出现，你现在在屏幕上看到的画面会和我这里略有不同，为什么呢？因为我使用了自定义模式，但我们先从普通模式开始。

**Justin**: wait, so that means that people don't have this video script writer, documentation writer, they only have everything orchestrated and above? Yeah, that's the default.

**Justin**: 等等，所以这意味着人们没有这个“视频脚本编写器”、“文档编写器”，他们只有“编排器”及以上的所有模式？是的，那是默认的。

**Alex**: Yeah, that's a default. Well, maybe we have some advanced users would have wider selection, but in general? You are the manager of developing team and you can decide what you want this team to do. And sometimes you can decide, yes, orchestrator can use custom modes.

**Alex**: 是的，那是默认的。好吧，也许我们有些高级用户会有更广泛的选择，但总的来说，你就像一个开发团队的经理，你可以决定你希望这个团队做什么。有时候你可以决定，是的，编排器可以使用自定义模式。

**Alex**: There is a wonderful question on YouTube chat. Yeah, so you man, you managing these development team and if you need to employ someone else, you just go and hire someone else like Elite's free, that's cool.

**Alex**: YouTube 聊天里有个很棒的问题。是的，你管理着这个开发团队，如果需要雇佣其他人，你直接去雇佣就好了，就像免费的一样，这很酷。

**Alex**: Yeah, so for example, one of the very first things I do, well, okay, okay, okay, I will say it in just in a moment. So first thing you need to do especially is like we have many beginners there is to make understanding of what are different modes for we have some documentation on that. We have some videos, should have more. Actually, we get more. Yeah, we will get more, we will make more. But anyway, you need to understand what architect is good for designing then code for code writing, then ask for asking questions. You see, code mode has a problem, it's going to change my files all the time in the beginning when I just began using Kilo, I was like, why do you need ask mode at all? I understood it very quickly because code mode was just jumping on me like let's edit, let's edit, let's write something new.

**Alex**: 是的，比如，我最先做的事情之一……好吧，我马上就说。首先你需要做的，特别是我们有很多初学者，是要理解不同模式的用途。我们有一些相关的文档和视频，应该有更多。实际上，我们会提供更多。但无论如何，你需要理解“架构师”模式适合设计，“编码”模式适合写代码，“提问”模式适合问问题。你看，“编码”模式有个问题，它总是想修改我的文件。刚开始用 Kilo 时，我就想，为什么需要“提问”模式？我很快就明白了，因为“编码”模式总是不停地提示我：“我们来编辑吧，我们来写点新东西吧。”

**Justin**: It's a bit too eager sometimes. Yeah, I have a question.

**Justin**: 它有时有点太急切了。是的，我有个问题。

**Alex**: so I began to love ask mode very quickly and then debug mode to debug things. And orchestrator is meta mode, what it was being introduced not so long time ago, it was introduced with like 3 months ago, I believe .

**Alex**: 所以我很快就爱上了“提问”模式，然后是“调试”模式用来调试。而“编排器”是一个元模式，它是不久前才引入的，我想大概是三个月前。

**Justin**: less, less.

**Justin**: 更近，更近。

**Alex**: less, Yeah, maybe to your two months, say something like very recently, it's a meta mode, which is designed to orchestrate other modes, so it's a smart, it's orchestrator, what does that mean?

**Alex**: 更近？好的，也许是两个月前，总之是很近。它是一个元模式，旨在编排其他模式。它很智能，它是个编排器，这是什么意思？

**Justin**: Yeah, so eat make music.

**Justin**: 是的，所以它能创作音乐。

**Alex**: Well, I think it can if you ask politely, but the idea is it split bigger task in the smaller tasks and then applies them one by one, selecting proper mode for it. So you ask it to introduce new features when it feels designed. The system design for this feature with architect, when put it to code mode to implement, and then if something goes wrong, it will use debug mode to find the problem and solve it. Very important thing here, what is orchestrator? Flow is very convenient those it executes those subtasks in separate tasks, and that's very important for people being new to this situation. It might be not clear why is it so important, why can't I do it in the same window? The explanation is right here, right here with scary numbers 2000, but actually it's a very close street and context window. If you overfill context, window model will begin to hollow Cate, there will be no efficiency and you will burn tons of money for nothing, so a space plating task into smaller task's, you just divide it into smaller chunks, Each one is executed in new task and context window stays small, which is very confusing.

**Alex**: 嗯，我想如果你礼貌地请求，它可能可以。但它的理念是把大任务分解成小任务，然后逐一应用，为每个小任务选择合适的模式。所以你让它引入新功能，当它觉得需要设计时，它会用“架构师”模式来做系统设计，然后切换到“编码”模式来实现。如果出了问题，它会用“调试”模式来发现并解决问题。这里非常重要的一点是，编排器流程非常方便，它将这些子任务在单独的任务中执行。这对新手来说非常重要。可能不清楚为什么这很重要，为什么不能在同一个窗口里做？解释就在这里，和那个吓人的数字 2000 有关，实际上是和上下文窗口有关。如果你把上下文窗口填满了，模型就会开始产生幻觉，效率会变得很低，你还会白白烧掉大笔钱。所以把任务分成更小的任务块，每个块都在一个新的任务中执行，这样上下文窗口就能保持很小。

**Justin**: It's a bit, a little bit like it's starting a new chat every single time for those of us are using l.l.m.s in like .

**Justin**: 对于我们这些在聊天环境中使用 **LLM** 的人来说，这有点像每次都开始一个新的聊天。

**Alex**: a chat context. Yeah, and it's very important because as a content of the chat also including previous messages goes again repeated more or less to llum it quickly got like losing the focus, like, should I do do, should I do this, should I do that? What's happening here? And getting lost, crazy? It's like you work and you receive five messages and slack 10 phone calls and free events simultaneously, like you are going to lose focus on something same happening with model now. So that's what modes do you really need to embrace modes. But there is a very mode theme, which is a mode customization. Do you use mode customization? Not custom modes, but customize It modes .

**Alex**: 是的，这非常重要。因为聊天内容，包括之前的消息，会或多或少地重复发送给 LLM，它很快就会失去焦点，就像：“我该做这个吗？我该做那个吗？这里发生了什么？” 然后就迷失了，疯了。这就像你正在工作，同时收到了五条 Slack 消息、十个电话和三个会议邀请，你肯定会失去对某件事的专注。模型现在也发生着同样的事情。所以这就是模式的作用，你真的需要拥抱模式。但还有一个非常重要的主题，就是模式定制。你使用模式定制吗？不是自定义模式，而是定制现有模式。

**Justin**: a little bit?

**Justin**: 一点点。

**Alex**: One of the first things I did, I did this what you see on the screen, that's a more specific custom instruction for ask mode, and by default, ask mode is super chatty. It just like makes me read a ton of text while burning expensive output tokens and output tokens like what, $15 for million for Sonnet for something like that. So like quite noticeable money can be and it writes a long, long story every time I don't want it, usually I ask questions with demand. I want it to be very short. So as you see here, the last line was added by me. Keep answers were very short. What do you do with mode customization?

**Alex**: 我最先做的一件事，就是你在屏幕上看到的这个，这是对“提问”模式的一个更具体的自定义指令。默认情况下，“提问”模式非常啰嗦，它总是让我读一大堆文字，同时烧掉昂贵的输出 **token**，比如 Sonnet 每百万 token 大概 15 美元，这是一笔不小的开销。它每次都写很长的故事，我不需要。通常我问问题时，我希望答案非常简短。所以你看，最后一行是我加的：“保持回答非常简短。” 你在模式定制方面做了什么？

**Justin**: Well, some modes I like to, so I have some MCP, servers and I like to tell the mode like, hey, if you're gonna change some code, first, check the dependencies to see if there's any projects that that can already implement whatever you're going to implement and use contact 7 specifically to look up the documentation for that thing because otherwise, you know, it doesn't know like LMS, don't know everything. So that way you can look it up and yeah.

**Justin**: 嗯，有些模式我喜欢……我有一些 **MCP** 服务器，我喜欢告诉模式：“嘿，如果你要修改代码，先检查依赖项，看看有没有项目已经实现了你要实现的功能，并特别使用 `context7` 来查找相关文档。” 因为否则，你知道，它不可能什么都知道，**LLM** 并非无所不知。这样它就可以去查找了。

**Alex**: give me better results. I use it with custom rules. So I do it also, but not with custom mode instructions, but with custom rules. But I guess you have the same result as shown. Good, so customizing modes is very simple. You just go to the mode you want to modify. I'm currently not on my laptop, so you will not see these change here, But yeah, you see, as mode is decided, defined which API configuration you use. By the way, you can use some custom and smaller models for simpler tasks, which can save you tons of money.

**Alex**: 给我更好的结果。我是通过自定义规则来实现的。所以我也做同样的事情，但不是通过自定义模式指令，而是通过自定义规则。但我猜你得到的结果和我展示的一样。好的，所以定制模式非常简单。你只需进入你想修改的模式。我现在不在我的笔记本电脑上，所以你在这里看不到这些变化。但是，你看，模式决定了你使用哪个 **API** 配置。顺便说一下，对于更简单的任务，你可以使用一些自定义的、更小的模型，这可以为你节省大笔钱。

**Alex**: Then role definition, who are you and what you are going to do that what will decide the very beginning of a system prompt? Then short description when to use? That's very interesting. This definition, this field here, designer to explain to orchestrator when to use and then not to use. So it's really cool what you can create custom mode and still orchestrator will know how to use it. That's incredible, that's like exploded my brain. Then I understood it what custom modes also can be acquired? And then finally, behavioral guideline specific to the mode you are editing. So you can add something and you can add something useful or less us.

**Alex**: 然后是角色定义，“你是谁”以及“你要做什么”，这决定了系统提示的开头部分。接着是简短的描述“何时使用”。这很有趣，这个定义、这个字段，是用来向“编排器”解释何时使用以及何时不使用的。所以，你能创建自定义模式，而编排器仍然知道如何使用它，这真的很酷。这简直让我脑洞大开。然后我明白了，自定义模式也可以被获取。最后是特定于你正在编辑的模式的行为指南。所以你可以添加一些有用的或不那么有用的东西。

**Justin**: Talk as a pirate.

**Justin**: 像海盗一样说话。

**Alex**: Yeah, why? I mean.

**Alex**: 是啊，为什么不呢？

**Justin**: why not, right? Explain to me like I'm 5.

**Justin**: 为什么不呢，对吧？“像我五岁一样解释给我听”。

**Alex**: Yeah, explain to me like a five or something else, generate some pictures. Well, I don't think it will generate so like very many customizations what you can do, but here now ask mode, we will talk as pirate, which may be not that useful, but kind of funny. It .

**Alex**: 是的，“像我五岁一样解释”或者别的什么，生成一些图片。嗯，我不认为它能生成那么多东西，但有很多你可以做的定制。现在这里的“提问”模式，它会像海盗一样说话，这可能不那么有用，但挺有趣的。

**Justin**: could, yeah. Yeah.

**Justin**: 也许可以，是的。

**Alex**: I mean, it's Thursday and Thursday, almost Friday.

**Alex**: 我的意思是，今天是周四，快到周五了。

**Justin**: exactly, exactly.

**Justin**: 完全正确。

**Alex**: we can have some fun here. Good, now final thing, what really changed the way how we develop are the custom modes, creating your own custom mode and you see in this case as a documentation writer is the explanation or to the model on how I want, oops, wrong button, how I want my job to be done for this particular, for this particular case. So after doing some feature, I design a feature with architect, then I did some Timur changes with debug code, whatever implemented it, I want immediately to create documentation for it, I switch to documentation writer mode and as you can see here in edit, there will be a definition of like what's happening here, technical documentation writer, how exactly to write, there are documentation standards, what it should follow, smart brevity standards, 1 big thing per section, and so on and so forth. And then we keep documentation in the same folder, so it works directly like as after a feature is implemented, it's very easy to generate a documentation good.

**Alex**: 我们可以找点乐子。好了，最后一件事，真正改变我们开发方式的是自定义模式。创建你自己的自定义模式。你看，在这种情况下，作为一个“文档编写者”，就是向模型解释我希望……哦，按错按钮了……我希望我的工作在这种特定情况下如何完成。所以，在做了一些功能后，我用“架构师”模式设计了一个功能，然后用调试代码做了一些修改，实现了它之后，我希望立即为它创建文档。我切换到“文档编写者”模式，你可以在这里的编辑界面看到定义，比如这里发生了什么，技术文档编写者，具体如何写，它应该遵循的文档标准，比如“智能简洁”标准，每个部分一个重点等等。然后我们将文档保存在同一个文件夹里，所以它直接就像……在一个功能实现后，生成文档就非常容易了。

**Justin**: And for those of you working on like international apps with the support multiple languages, you can create like a translator mode, for example, we do that killer code. It's really good for that.

**Justin**: 对于那些正在开发支持多种语言的国际化应用的人来说，你可以创建一个“翻译器”模式。例如，我们在 Killer Code 中就这么做，它在这方面真的很好用。

### 自定义规则与指令

**Alex**: Good custom rules and instructions. I will not stop for long there. We still have some things to do. We have quiz and questions and answers, but that's very important to understand what there are project specific and global custom rules, what also will be included into the prompts? And even you have as you, if you keep them under Git, So you can have team standards set like, well, like you see on the screen. It's definitely a team standard in our documentation how documentation links should be generated, for example, good.

**Alex**: 好的自定义规则和指令。我不会在这里停留太久，我们还有一些事情要做，比如测验和问答。但理解这一点非常重要：有项目特定的和全局的自定义规则，它们也会被包含在提示中。如果你把它们放在 Git 下管理，你就可以设定团队标准，就像你在屏幕上看到的那样。例如，在我们的文档中，如何生成文档链接绝对是一个团队标准。好的。

### Kilo Code Prompt 最佳实践总结

**Alex**: So few words of best practices, but actually Carly St was that good. So I don't want to, stay for that for too long. So it will be more or less brief summary on the ways how we see them.

**Alex**: 简单说几句最佳实践，但实际上 Carly 讲得已经很好了，所以我不想在这里停留太久。这或多或少会是一个关于我们如何看待这些实践的简要总结。

**Alex**: First, very important thing. So it's in general, if you are doing something simple or if you are not afraid to do git re set hard and begin from scratch, you can try to do shotgun prompting, just throwing, demanding S without really thinking for that and create, some answers. See the answers. You are not happy with them, delete them, begin from scratch, preferably new task by the way, beginning from new task in this case is very important because if you are not happy with the results.

**Alex**: 首先，非常重要的一点。总的来说，如果你在做一些简单的事情，或者不害怕用 `git reset --hard` 从头开始，你可以尝试“散弹枪式”的提示，就是不假思索地抛出需求，得到一些答案。看看答案，如果你不满意，就删掉它们，从头开始。顺便说一下，在这种情况下，从一个新任务开始非常重要，因为如果你对结果不满意……

**Justin**: oh yeah, we keep going on.

**Justin**: 哦是的，我们继续。

**Alex**: it's not right. That's called, I believe Carly wasn't speaking about that today, but that's a pretty important thing. It's called it context poisoning, then false data, some mistakes, misunderstandings got into the context of the current task, it will poison the model to think some like wrong things, it will be useless. So in general, get read and just start a new task. Good, but we here to talk about prompt engineering, so we will see what we will do with the prompt to keep it happening in the right way.

**Alex**: 那是不对的。这被称为……我相信 Carly 今天没有讲到，但这是一个非常重要的事情，叫做**上下文污染**（context poisoning）。当错误的数据、一些错误、误解进入了当前任务的上下文时，它会毒害模型，让它产生一些错误的想法，变得毫无用处。所以，总的来说，放弃并开始一个新任务。好的，但我们在这里是来谈论提示工程的，所以我们将看看如何处理提示，让它以正确的方式进行。

**Alex**: First, explain to the model what is happening here overall what's happening, what this project is about we are adding new authorization method, whatever related files of components, I will say work on it in a moment and maybe add related documentation. In general, There are two ways to add part of this data, to the to a context, there are two ways. 1 is automated, so using memory bank or using some Mcps and second is manual, which one fits better for you? Well, very much depends on your project, right? I use both. So for some projects I use main-bank and for some projects I set context manually, but all those things are very important, how it looks, setting the context, referencing, referencing a file, this is a very good thing which helps us to go work with project.

**Alex**: 首先，向模型解释这里到底发生了什么，这个项目是关于什么的，比如我们正在添加一个新的授权方法。相关的组件文件，我稍后会讲到，也许还要添加相关的文档。总的来说，有两种方法可以将这部分数据添加到上下文中。一种是自动化的，比如使用内存库或一些 **MCP**。第二种是手动的。哪种更适合你？这很大程度上取决于你的项目，对吧？我两种都用。对于某些项目，我使用内存库，对于另一些项目，我手动设置上下文。但所有这些事情都很重要，比如设置上下文、引用文件，这对我们处理项目非常有帮助。

**Alex**: Oops. Yeah, now I'm here. Oops, I can reference file right here. So I'm going to change something and I can do something like that. I want to change file as set, add sign, and then I do something for src. No, I want something, it's a documentation project, right? So I want it here, I want it to be add, and yeah, static, for example, oops, star tick. Or reference other files, docs, docs? My God, of course docks. Then I can go here for desired docs like features and page file mentioned here. And I can say update these file that works, file that works as a charm. Do you use that over time? But recently, recently I decrease the usage of this feature .

**Alex**: 哎呀。是的，我现在在这里。哎呀，我可以在这里引用文件。所以我要修改一些东西，我可以这样做。我想修改文件，加上 `@` 符号，然后对 `src` 目录做些什么。不，我想……这是一个文档项目，对吧？所以我希望在这里，我想添加……是的，比如 `static`……哎呀，是 `static`。或者引用其他文件，比如 `docs`？天哪，当然是 `docs`。然后我可以去这里找到想要的文档，比如这里提到的 `features` 和页面文件。然后我可以说“更新这个文件”，这方法非常有效。你一直用这个吗？但最近，我减少了这个功能的使用。

**Justin**: because it can like find things itself.

**Justin**: 因为它可以自己找到东西。

**发言-人1**: If there is a better way. No, no, no, no, no, it's like there is a little tinny, tiny, minor thing we will discuss in a moment. There is a more interesting way. For example, I want to update something in the file and I can mention this file directly. I know basic usage editing tokens, and I can reference this file just adding tokens and that's file is mentioned, project knows where to find it. Then I can ask to update this file. But if I do it differently, for example, if I do it like that.

**Alex**: 如果有更好的方法的话。不不不，有一个很小但我们稍后会讨论的事情。有一个更有趣的方法。例如，我想更新文件中的某些内容，我可以直接提及这个文件。我知道基本用法是编辑 token，我可以通过添加 `@` 和文件名来引用这个文件，项目就知道在哪里找到它。然后我就可以要求更新这个文件。但如果我换一种方式，比如这样做……

**Alex**: At tequila coat and that give here something at this and that. Then see what happens when you reference a file and send a request file by itself won't get to the model. And what model will do .

**Alex**: 在 Kilo Code 里，给它一些东西。然后看看会发生什么。当你引用一个文件并发送请求时，文件本身不会被发送到模型。模型会做什么呢？

**Justin**: will do.

**Justin**: 它会……

**Alex**: Yeah, it will use a tool, it will use a full tool to read the file. So you do we send that with this file model knows where the file is, but has no idea of a content of this file. Then model says, okay, use the tool, read the file, right? You go, it gets back to the agent to kill the code.

**Alex**: 是的，它会使用一个工具，一个完整的工具来读取文件。所以，我们发送请求时，模型知道文件在哪里，但不知道文件的内容。然后模型会说：“好的，使用工具，读取文件。” 对吧？它会返回给代理，也就是 Killer Code。

**Alex**: Killer code uses the tool, read the file, gets the content, returns it back to the modu, adds a new request, and your request brings us money, money, money, money. So we don't want it. So if you work on the small content and like not like 3000 lines file, but so for some specific file to get -1 on this situation, you can directly use at 2 kilo this very nice neat feature which gives specialization and where is it located? So which file and the lines it's located and what is the content of this part? So Lll M can begin answering your question directly without any sub requests, which saves .

**Alex**: Killer Code 使用工具读取文件，获取内容，将其返回给模型，这又增加了一个新的请求，而你的请求会花钱、花钱、花钱。所以我们不希望这样。所以，如果你处理的是小内容，而不是 3000 行的文件，对于某个特定的文件，为了避免这种情况，你可以直接使用 Kilo 的一个非常棒的功能，它能提供具体的位置，告诉模型文件在哪里，在哪几行，以及这部分的内容是什么。这样 **LLM** 就可以直接开始回答你的问题，而不需要任何子请求，这可以节省……

**Justin**: so earlier. So if I understand correctly, if you say, okay, I want you to add a new section, or I want you to correct the section about adding more tokens, something's wrong. Then if you don't add this context specifically, it's gonna go ahead and like read the, it's going do another request to read the whole section of the file, and then it's going to go ahead and apply it. If you do this, which, which you just did, then, it's gonna go ahead and be able to do it without.

**Justin**: 所以，如果我理解正确的话，如果你说：“好的，我想让你添加一个新的部分”，或者“我想让你纠正关于添加更多 token 的部分，有些地方错了”。那么，如果你不具体地添加这个上下文，它就会去读取，它会发起另一个请求来读取文件的整个部分，然后再去应用修改。但如果你像刚才那样做，那么它就可以直接完成，而不需要……

**Alex**: multiple request. Exactly, okay, exactly. And that.

**Alex**: 多个请求。完全正确，是的。

**Justin**: saves time too. It smart models, they're often slower. So this would would also save you some time.

**Justin**: 也节省时间。聪明的模型通常更慢，所以这也能为你节省一些时间。

**Alex**: Yep, yep, yep. So that definitely saves API calls, model calls and saves quite some money. So I definitely began to use it more and more often adding these documentations specifically good. Well, so that was how you reference a file. And that's very important to explain to model what in there you are going to do. Yeah, with smart model, you can rely on open tabs and visible files, but still direct references better and it goes faster.

**Alex**: 是的，是的。这绝对能节省 **API** 调用、模型调用，并省下不少钱。所以我肯定开始越来越频繁地使用它，特别是添加这些文档时。好的，这就是如何引用一个文件。向模型解释你要做什么非常重要。是的，对于智能模型，你可以依赖打开的标签页和可见文件，但直接引用更好，也更快。

**Justin**: But if you don't know, if you don't know the code base at all, like you can just say, hey, I want you to fix this thing and go through and it's going to, it's gonna find what it needs to find and it's gonna fix for no.

**Justin**: 但是，如果你完全不了解代码库，你也可以直接说：“嘿，我想让你修复这个问题”，然后它会自己去查找需要修复的地方并修复它。

**Alex**: yes, no, but I have a problem with that. And what's the problem? My problem with that, what usually I see it can take many long time and many requests to get to, especially in the big, big project, expensive, it's expensive and slow and listing here with this reading that that that file now it became better because of parallel file reads. So now you can park up to 5 piles in one message. So it will go faster, but still it's not fast enough to me. So I prefer to try to find required things locally or using code based indexing and then already request to do something understanding where I needed to happen. It save tons of money and tons of time. So reference code helps you to mention specific sections and which is better, code versus file?

**Alex**: 是的，但我对此有个问题。问题是什么呢？我发现，通常这会花费很长时间和很多请求，特别是在非常大的项目中，既昂贵又慢。现在因为有了并行文件读取，情况好了一些。你现在可以在一个消息中处理多达 5 个文件，所以会快一些，但对我来说还是不够快。所以我更喜欢先在本地或使用代码库索引找到需要的东西，然后在理解了需要在哪里操作之后再请求做某事。这节省了大量的金钱和时间。所以引用代码可以帮助你提及特定的部分。那么，引用代码和引用文件哪个更好？

**Alex**: Well, very much depends on what's happening there, and I will not tell you what to do. I am just like giving as an engineer to engineers, giving tools to use. Good, now very important things. And Carly said it to give examples. And that is very important as when it's possible when you are adding something which virtually exist in your system, like you have controller and there are different actions in this controller, explain to the model what it needs to read this and that, and do it just like that. Those examples where you really change modal behavior tremendously, especially if you can give multiple Almo models, are usually smart enough to go, even with simple example. Still, even simple example is way much better than multiple examples. Now you might notice what first example I'm giving here is in XL that's interesting.

**Alex**: 嗯，这很大程度上取决于具体情况，我不会告诉你该怎么做。我只是作为一个工程师，给其他工程师提供可以使用的工具。好的，现在是非常重要的事情。Carly 也说了，要给出示例。这非常重要。当你在添加系统中已经存在的东西时，比如你有一个控制器，里面有不同的动作，向模型解释它需要读取什么，并像那样去做。这些示例真的能极大地改变模型的行为，特别是如果你能给出多个例子。模型通常足够聪明，即使只有一个简单的例子也能理解。但即便如此，一个简单的例子也比没有例子好得多。现在你可能会注意到，我在这里给的第一个例子是用 **XML** 格式的，这很有趣。

**Justin**: Carly just mentioned that.

**Justin**: Carly 刚刚提到了这个。

**Alex**: Yeah, right, the question of formatted input, there is a huge problem idea is a models actually, it's really hard to for them to distinct, instructions from samples from the bug description and then you tell, oh, there is a bug and then you just copy paste to a bug description without explaining what that is a bug, not what I want to do and there is a, but something like, I don't know, destroy the universe, then how AI model is going to know what is instruction or a bug and then it will just go and destroy the universe sounds not good to me? No, no, no, no, no, no, no.

**Alex**: 是的，没错，关于格式化输入的问题。有一个很大的问题，就是模型其实很难区分指令、示例和错误描述。比如你告诉它：“哦，这里有个错误”，然后你直接复制粘贴了错误描述，却没有解释那是一个错误，而不是你希望它做的事情，而错误描述里写着类似“毁灭宇宙”的话，那么 AI 模型怎么知道这是指令还是错误呢？然后它就去毁灭宇宙了？这听起来对我可不太好。

**Justin**: yeah, that's bad, but yeah, that would probably be bad.

**Justin**: 是的，那很糟，那可能会很糟。

**Alex**: That's why we speak about formatted input. So models can distinct instructions from simple, well, they can, but it's hard, so help them. Traditionally, we use Markdown or XML or both, which to me use it to stick standards, kind of explain the brain. So when you see Markdown and XL and then you mark down in XML, it's like a little bit strange. But yeah, use XML text, it works, it works. Use text like instructions, example, formatting, and others. And models are smart enough to understand what that, if that is an instruction built in within tasks, x tag, because it all goes in inside the tech task, then that's clear what that is an example and that's formatting. It's really important, good.

**Alex**: 这就是我们谈论格式化输入的原因。这样模型才能区分指令和示例。嗯，它们可以，但很困难，所以要帮助它们。传统上，我们使用 Markdown 或 **XML**，或者两者都用。对我来说，使用它们是为了遵循标准，就像向大脑解释一样。所以当你看到 Markdown 和 XML，然后在 XML 里又用 Markdown，感觉有点奇怪。但是，是的，使用 XML 标签，它很有效。使用像 `<instructions>`, `<example>`, `<formatting>` 这样的标签。模型足够聪明，能理解如果那是一个内置在 `<task>` 标签内的指令，因为所有东西都在任务内部，那么就很清楚那是一个示例，那是一种格式化。这非常重要。好的。

**Alex**: Now preload documentation, something what we already mentioned. Actually both, I love doing this. Yeah, it really helps. So you can use context 7, which is an MCP server. If you haven't heard of MCP, say watch our previous workshop and do together with us, but also think what works pretty nicely to me, just I send a tutorial what I find like the best way to do it and do this following this tutorial and just paste the link works as a chairman.

**Alex**: 现在是预加载文档，这是我们已经提到过的事情。实际上，我非常喜欢这样做。是的，它真的很有帮助。你可以使用 `context7`，这是一个 **MCP** 服务器。如果你没听说过 MCP，去看我们之前的研讨会，和我们一起做。但对我来说，效果很好的方法是，我直接发送一个我认为是最佳实践的教程链接，然后告诉它“遵循这个教程来做”，粘贴链接就行，效果非常好。

**发言-人1**: Sometimes if I'm lazy and I want to do multiple smaller steps, I can do, approach. I call setting boundaries for model. So I say read these, don't do anything else, then model will go read it, don't anything else, stop and I can continue. But this thing is already loaded into the context, setting boundaries. We have a few more few words about that. Do you use enhance prompt?

**Alex**: 有时如果我懒得一次性做完，想分多个小步骤，我会用一种方法，我称之为“为模型设定边界”。我告诉它：“读这些，别做别的。” 然后模型就会去读，不做别的事，然后停下来，我再继续。但这样，信息就已经加载到上下文中了。关于设定边界，我们还有几句话要说。你使用“增强提示”功能吗？

**Justin**: Yes, I do, yeah. Yeah, I often ask something and then it does exactly what I said, but not what I meant, and enhanced prompt is a great way to kind of like, well, one, to expand on what what I was saying, but also for me to understand, oh, did it actually understand what I meant as opposed to what I said it should do? So that's what I use it for a lot.

**Justin**: 是的，我用。我经常要求它做某事，然后它完全按照我说的做了，但不是我真正的意思。而“增强提示”是一个很好的方式，首先，它可以扩展我所说的内容；其次，它能让我理解，哦，它到底是真的理解了我的意思，还是只是按我说的去做了。所以我经常用它。

**Alex**: And well, input tokens are cheap like five times cheaper than output tokens, so we can be more chatty here, but I use enhance prompt pretty often, specifically if I'm not sure what exactly I'm going to reach. Like there are tasks you need to play a little bit before you actually realize how exactly you want to do it. And I use enhance prompt, which often, even if I don't use a generated prompt directly, it gives me idea. Think about this and think about that and it helps significantly. So yes, I also use enhance prompt all the time. And that's a magical feature, by the way, you can customize enhance prompt, do you know? Yeah, so it's well, how new is new?

**Alex**: 而且，输入 **token** 很便宜，大概比输出 token 便宜五倍，所以我们在这里可以更健谈一些。我经常使用“增强提示”，尤其是在我不确定到底想达到什么效果的时候。有些任务你需要先尝试一下，然后才能真正意识到你到底想怎么做。我用“增强提示”，即使我通常不直接使用它生成的提示，它也能给我一些想法，比如“考虑一下这个，考虑一下那个”，这帮助很大。所以，是的，我也一直用“增强提示”。顺便说一下，这是一个神奇的功能，你可以自定义“增强提示”，你知道吗？是的，这……嗯，有多新呢？

**Justin**: He's got a fast circular card and in the world of AI for sure.

**Justin**: 在 AI 的世界里，这绝对是新事物。

**Alex**: that's incredible. Yeah, so, you can specify different model for enhanced prompt. So if you want like use some heavyweight lifter, I don't know Senet or even Opus for some advanced things, but want pro enhancement to be fast and cheaper. So you can go with some micro models which still do it pretty decently, but work few like five times faster and cheap, 30 times less money for those calls. It works very nice then good OS. Yeah, good.

**Alex**: 这太不可思议了。是的，所以，你可以为“增强提示”指定不同的模型。比如，你想用一些重量级的模型，比如 Sonnet 甚至 Opus 来做一些高级的事情，但又希望提示增强本身能又快又便宜。所以你可以用一些微型模型，它们做得也相当不错，但速度快大概五倍，价格便宜三十倍。效果非常好。

**Alex**: So RA greatly affects output. It's important, there are many researchers about that. We will not stick to that because Carly said it already just believe role greatly affects how system will think it will a Sh rule and just the very same request with different without role definition and with proper role definition, it's magic, it's very big difference. So use proper mode and create custom mode. If you need some custom role, it gives much better outcomes. Now there is a little problem with models, they are overly creative sometimes.

**Alex**: 所以，**角色** (Role) 极大地影响输出。这很重要，有很多关于这方面的研究。我们不会深入探讨，因为 Carly 已经说过了。只要相信，角色极大地影响系统如何思考。同一个请求，没有角色定义和有合适的角色定义，结果完全是天壤之别。所以，使用合适的模式，如果需要自定义角色，就创建一个。它会带来好得多的结果。现在，模型有一个小问题，它们有时过于有创造力。

**Justin**: but yeah, that was a feature.

**Justin**: 但那不是一个特性吗？

**Alex**: well yes, and no.

**Alex**: 嗯，是，也不是。

**Justin**: it's a feature and a bug.

**Justin**: 既是特性也是 bug。

**Alex**: well, it very much depends on the situation, right? So models can make up details to fill the gaps with relax context. They just can like there might be a function like that. It could have been a function like that. So I could just use this function maybe exactly, and then it uses a function that doesn't exist.

**Alex**: 嗯，这很大程度上取决于情况，对吧？模型会编造细节来填补上下文中的空白。它们可能会想：“哦，可能有一个这样的函数。它本可以是一个这样的函数。所以我可以直接用这个函数。” 然后它就用了一个不存在的函数。

**Justin**: and they're really good at that when working with external libraries because, you know, they change all the time. So they assume that the newest version of React has this and that feature.

**Justin**: 它们在处理外部库时尤其擅长这个，因为库总是在变。所以它们会假设最新版的 React 有这个或那个功能。

**Alex**: yeah. Yeah, so things like context 7 or giving explicit documentation tools, it helps, but also helps giving instructions like do not proceed or do not generate code if you are not absolutely confident in what's happening, it follows with instruction, if you don't know, don't assume, ask me, Luckily, we ask me to in tool definitions, and that's the technique I mentioned before, setting boundaries. So we explained first part of the workshop how to tell model, what do you want it to do and but that's also very important to explain in what you want it not to do keep the answer very short don't write documentation, don't write tests, I will say a word in it in a moment, and so on.

**Alex**: 是的。所以像 `context7` 或者提供明确的文档工具有帮助，但给出像“如果你不完全确定发生了什么，就不要继续”或“不要生成代码”这样的指令也有帮助。它会遵循指令。如果你不知道，就不要假设，问我。幸运的是，我们在工具定义中有“问我”这个工具。这就是我之前提到的技巧，设定边界。我们在研讨会的第一部分解释了如何告诉模型你希望它做什么，但解释你**不**希望它做什么也同样重要。比如“保持回答非常简短”、“不要写文档”、“不要写测试”（我马上会讲到这个）等等。

**Justin**: So some people love it when you have like nice comments for every single section, and some people are like code is documentation, I don't want to do that. Yeah, like don't, don't document everything, you like all of the code you're running or something like that.

**Justin**: 有些人喜欢每个部分都有漂亮的注释，而另一些人则认为“代码即文档”，他们不想这样做。是的，比如“不要为你运行的所有代码都写文档”之类的。

**Alex**: Yeah, but, but yeah, absolutely. That's one of the first things I add to customer rules. So yeah, some models tend to add comments everywhere on each and every line. And that's absolutely if you take care of the code quality, then need in open line comments is significantly reduced. There is still need of of comments, but not that much. So yeah, set boundaries, don't do this, don't do that, that's important. That greatly affects outcome. Now we are getting to this slide.

**Alex**: 是的，绝对是。这是我最先添加到自定义规则里的事情之一。有些模型倾向于在每一行都添加注释。如果你注重代码质量，那么对行内注释的需求就会大大减少。仍然需要注释，但不需要那么多。所以，是的，设定边界，“不要做这个，不要做那个”，这很重要，极大地影响结果。现在我们来到这张幻灯片。

### “编排器” vs. 手动控制

**Justin**: orche.

**Justin**: 编排器。

**Alex**: yeah, orchestrator, orchestrator, yeah. So there are plenty of people who like orchestrator, that's, that's the last one, split task in the specific subtasks, I was thinking a lot about that and I understand maybe that something in mentality or something on how much.

**Alex**: 是的，编排器。有很多人喜欢编排器。这是最后一个，将任务分解成具体的子任务。我对此想了很多，我理解这可能与心态有关，或者与你希望拥有多少控制权有关。

**Alex**: Control you want to have over things happening? You know, on my car, I use manual gearbox, I go to automatic gearbox, but on my motorcycle, I want to have manual gearbox, what's the difference? Because car just brings me from point A to point B, and motorcycle is for a so, so I want to have full control. And my tendency here, I split tasks and specific subtasks manually, and I have different modes for that. And I switch them 1 by one. Sometimes I decide to keep going in the same task, sometimes I decided to keep going in a new task, but I do. I am an orchestrator of my own process, then there are plenty of people like me driving a car, for example, who prefer automated gearbox or preferably even self driving car, right?

**Alex**: 你想对发生的事情有多少控制？你知道，我的车是手动挡，我用的是手动挡，但我骑摩托车时，我想要手动挡。有什么区别？因为汽车只是把我从 A 点带到 B 点，而摩托车是为了乐趣，所以我想要完全的控制。我在这里的倾向是，我手动将任务分解成具体的子任务，并为此设置了不同的模式，然后我逐一切换它们。有时我决定在同一个任务中继续，有时我决定在一个新任务中继续，但我自己做。我是我自己流程的编排者。然后，有很多人，比如我开车时，更喜欢自动挡，甚至最好是自动驾驶汽车，对吧？

**Justin**: Just me from A to B.

**Justin**: 只是把我从 A 带到 B。

**Alex**: right? And you don't want to think on each specific to each specific stupid pedestrian trying to jump or under your tires and all the rest of the things. So you just go with orchestrator mode.

**Alex**: 对吧？你不想去考虑每一个想跳到你车轮下的愚蠢行人和其他所有事情。所以你就用编排器模式。

**Alex**: So my idea, I plan, I act, and I test, and I write documentation using specific modes, but manually, maybe this way will work for you better, maybe not. Then no blaming, you can just use Orchestrator. And notice how this slide is funny, right? Use orchestrator, use a manual plan, act test mode adds just like a manual and automatic exactly. I will not judge you if you will go for Orchestrator. And then finally, very last slide for today, because we are going to do a few more things. Yes, customizing temperature.

**Alex**: 所以我的想法是，我计划、我行动、我测试，然后我用特定的模式手动编写文档。也许这种方式更适合你，也许不适合。那也没关系，你可以直接用编排器。注意这张幻灯片多有趣，对吧？“使用编排器”或“使用手动的计划-行动-测试模式”，就像手动挡和自动挡一样。如果你选择编排器，我不会评判你。最后，今天的最后一张幻灯片，因为我们还有几件事要做。是的，自定义“温度”（Temperature）参数。

**Alex**: When deciding for creating a new mode, you need to think how random and unpredictable or maybe specific and predictable you want it to be. So creating a mode.

**Alex**: 在决定创建一个新模式时，你需要考虑你希望它有多随机和不可预测，或者多具体和可预测。所以，创建一个模式……

**Justin**: oops, does that add, does that add creativity?

**Justin**: 哎呀，这会增加创造力吗？

**Alex**: Yes, exactly, it's adds creativity, but it does not. Yeah, here we go. If I will go and create. Yeah, could you please? Thank you dear sir? Good, so if you go here and create a new mode and we go, for example, for edit, and you push the Create new mode button, I don't know what this mode is going to be. So I will just proceed directly down. There are different profiles and you can create a new profile and link this profile to this new mode.

**Alex**: 是的，完全正确，它增加了创造力。是的，我们开始吧。如果我去创建……是的，可以吗？谢谢你，先生。好的，所以如果你去这里创建一个新模式，我们去，比如，编辑，然后你按下“创建新模式”按钮，我不知道这个模式会是什么。所以我直接往下走。这里有不同的配置文件，你可以创建一个新的配置文件，并将它链接到这个新模式。

**Justin**: And a profile allows you to choose an API provider, kilo code API provider with all of the models, Anthropic or whatever, and allows you to also pick a model associated with that.

**Justin**: 一个配置文件允许你选择一个 **API** 提供商，比如 Kilo Code API 提供商（包含所有模型），或者 Anthropic，或者别的，也允许你选择一个与之关联的模型。

**Alex**: Creative, I will create a new profile, call it creator. It will use killer code as a provider, and it also will use cloud as sunnet 4. But I can switch temperature to be different. So I want to say use custom temperature. Temperature changes from 0 to 2, the zero is the less random and most predictable, and two is like crazy and very creative all the place.

**Alex**: 好的，我将创建一个新的配置文件，称之为“创造者”。它将使用 Killer Code 作为提供商，并使用 Claude Sonnet 3 模型。但我可以改变**温度**（Temperature）。我想说，使用自定义温度。温度范围从 0 到 2。0 是最不随机、最可预测的，而 2 就像疯了一样，非常有创造力。

**Alex**: And usually it's not what you want to have a writing code. So for designing solutions and for like, it's fine to go usually somewhere around 0.3, but you definitely don't want to go too high. The lower it has, it will be more deterministic, but maybe too straightforward. So there is a things to experiment and to learn about. But if you go too high, it can be unpredictable and throw you tons of unworked code.

**Alex**: 通常在编写代码时，你并不希望这样。对于设计解决方案来说，通常设在 0.3 左右是没问题的，但你绝对不希望设得太高。温度越低，结果就越确定，但可能过于直接。所以这里有一些需要试验和学习的东西。但如果你设得太高，它可能会变得不可预测，并给你抛出一大堆无法工作的代码。

**Alex**: There is no right temperature, but usually for specifically writing code, you want to keep it much lower. So for many models, it will be 0 or 0.3 maximum, and for thinking models it always one. It can not be changed for thinking models. For reasoning, you can't go with anything but one, at least for most of the models, it should just, okay, no, it doesn't disappear, but it will be one. If you use reasoning and thinking, it will not change. Good, we have tons of questions.

**Alex**: 没有绝对正确的温度，但通常在专门编写代码时，你希望保持得低得多。所以对于很多模型，它会是 0 或最高 0.3。而对于“思考”模型，它总是 1，无法改变。对于推理，你只能用 1，至少对于大多数模型是这样。如果你使用推理和思考，它不会改变。好的，我们有很多问题。

### 问答与特别福利

**Justin**: Yeah, I think so, I mean, looking at chat, seems like there's quite a few questions already.

**Justin**: 是的，我看了一下聊天，似乎已经有不少问题了。

**Alex**: Good, so let's take a look at what's happening, right? We are.

**Alex**: 好的，让我们看看发生了什么，对吧？我们……

**Justin**: and before we go to the questions, yeah, maybe is maybe there's another slide that we want to show.

**Justin**: 在我们看问题之前，也许还有一张幻灯片我们想展示。

**Alex**: very special slide. Yeah, okay, okay, okay, okay, okay, okay, okay, okay, okay. So this slide, yeah, this slide, this slide, Justin, you're so nice. I wanted to keep the slide to the very end, like three hours later or deepen night, but no, no, Justin is nice. So Justin wants us to show this slide to you before, so take a look, that's a greeting, that's a gift from our dear sponsor Anthropic, which gives you $20 in cloud to use the Cloud M, please notice it's for first 500 Synapse, so you better go do it right now because we exactly 500 viewers right now.

**Alex**: 一张非常特别的幻灯片。好的，好的。这张幻灯片，Justin，你真好。我本想把这张幻灯片留到最后，比如三个小时后或者深夜，但不，Justin 人很好。所以 Justin 想让我们先给你们看这张幻灯片。看，这是来自我们亲爱的赞助商 Anthropic 的问候和礼物，它给你 20 美元的 Claude 信用点数，请注意，这只针对前 500 名注册者，所以你们最好现在就去注册，因为我们现在正好有 500 名观众。

**Justin**: So .

**Justin**: 所以……

**Alex**: if you're watching it, you better go feel it right now and .

**Alex**: 如果你在看，最好现在就去体验一下。

**Justin**: if $20 in credits is not enough for you, which I understand you can run out, we also have something else that we're doing right now. No.

**Justin**: 如果 20 美元的信用点数对你来说不够，我理解你可能会用完，我们现在还有别的活动。

**Alex**: no, not not not.

**Alex**: 不，不是。

**Justin**: what are you doing? Because quiz, you know, some people can win credits. Some people, you know, they might be not everybody say you plus, engineer, you know, we also have a Fibonacci promotion that's going on right now.

**Justin**: 你在做什么？因为有测验，有些人可以赢得信用点数。但不是每个人都能赢，所以我们现在还有一个斐波那契（Fibonacci）促销活动。

**Alex**: Wow.

**Alex**: 哇。

**Justin**: so if you're familiar with the Fibonacci numbers, you know, they always, they always go up .

**Justin**: 所以如果你熟悉斐波那契数列，你知道，它们总是一直往上涨。

**Alex**: and .

**Alex**: 而且……

**Justin**: depending on the amount of money that you spend right now on the kiero provider, and we're actually gonna give you the next Fibonacci numbers for free.

**Justin**: 根据你现在在 Kilo 提供商上花费的金额，我们实际上会免费赠送你下一个斐波那契数的信用点数。

**Alex**: But I see the questions, on YouTube chat looks like it's been used already, which is very strange because I'm very sure this QR code didn't appear online before. So I will take a look on what's happening. We have emails of everyone who signed up for this workshop, so we will see what's going on. Don't worry, we have emails of everyone, so no one will leave. If you have some gifts, well, you already have gifts from Killer Code and we will see what's happening with this code, so don't worry, let us take care of the situation and write to hi at kiero dot com, Right? Yeah. So we will.

**Alex**: 但我看到 YouTube 聊天里的问题，看起来它已经被用过了，这很奇怪，因为我很确定这个二维码之前没有在网上出现过。所以我会去看看发生了什么。我们有所有注册这次研讨会的人的邮箱，所以我们会看看情况。别担心，我们有每个人的邮箱，所以没人会空手而归。你们已经有了 Killer Code 的礼物，我们也会看看这个代码的情况，所以别担心，让我们来处理这个情况，你们可以写邮件到 `hi@kilo.com`，对吧？是的，我们会处理的。

**Justin**: we'll post in the chat once .

**Justin**: 我们会在聊天里发布……

**Alex**: for yeah, so, but like there is no real rush, we will investigate the situation, we will not let scammers use it, there is a Mer manual very, very, so it will be good.

**Alex**: 是的，所以不用着急，我们会调查情况，不会让骗子得逞，有非常严格的手动审核，所以会没问题的。

**Justin**: Yeah, and of course, if you want to check out Fibonacci promotion, it's Fibonacci do Kilo code AI and you can also use the prompt art. Wow, there's so much stuff going on right now, you can also use the prompt start coupon code, but that you know that gives you credits for just a little bit and to try and test with with the stuff that we've talked about, today and, we actually, promo code and I think also the tropic and $20 credits, you know, they stick, stick around for a little bit longer.

**Justin**: 是的，当然，如果你想看看斐波那契促销，可以访问 fibonacci.kilo.code.ai，你也可以使用 `prompt art`。哇，现在有太多活动了。你也可以用 `prompt start` 优惠码，但那只会给你一点信用点数来尝试我们今天讲的东西。实际上，优惠码、Anthropic 的 20 美元信用点数，它们会持续一段时间。

**Alex**: that's really cool. Yeah, there is a question for how long Fibonacci, promotion is going, but a Fibonacci problem is only for today to Roma says, okay, so this question is answered it, well, many things happening when I'm pretty sure we will do more. Okay, let's move on because we still need to answer some questions and then we will be Chris .

**Alex**: 那太酷了。是的，有人问斐波那契促销会持续多久，但斐波那契活动只在今天。好的，这个问题回答了。好吧，发生了很多事，我很确定我们还会做更多。好的，我们继续，因为我们还需要回答一些问题，然后是测验。

**Justin**: good. How long does it Chris take Alex? Because we have 10 more minutes before the end of the stream .

**Justin**: 好的。Alex，测验要多久？因为我们离直播结束还有 10 分钟。

**Alex**: well you so I'm fine to stay a little bit longer, but you want to stick to the time.

**Alex**: 嗯，我多待一会儿没问题，但你想遵守时间。

**Justin**: right? I think we should stick to the time as much as possible. Maybe we can go through some questions real quick and then go to the quiz.

**Justin**: 对吧？我觉得我们应该尽可能遵守时间。也许我们可以快速过几个问题，然后进行测验。

**Alex**: I think, you know what, I think let's do quiz first.

**Alex**: 我觉得，你知道吗，我们先做测验吧。

**Justin**: maybe you quiz first.

**Justin**: 也许先测验。

**Alex**: yes, and then questions, so questions we can maybe go slightly over time. And also don't forget, you always can ask questions in our YouTube, so oh sorry YouTube discord or Discord. Yeah, so it's, definitely makes a lot of time, a lot of sense to ask questions. If I went unanswered, we have 16 good questions, so let's okay, let's go through first three questions.

**Alex**: 是的，然后再回答问题，问题部分我们可以稍微超时一点。也别忘了，你们可以随时在我们的 YouTube……哦抱歉，是 Discord 里提问。是的，所以提问绝对是很有意义的。如果我没回答，我们有 16 个好问题，所以，好的，我们先过前三个问题。

### 现场问答

**Justin**: okay, so how does how good .

**Justin**: 好的，Kilo Code 在……

**Alex**: does k code .

**Alex**: Kilo Code 在……

**Justin**: work with very large code places in motor repose? Because oft worry about complex size. They're great. There's some things that make it work better. Memory banks that will allow it to not have to search suitable. Fine.

**Justin**: 处理大型代码库和单体仓库时表现如何？因为经常担心上下文大小。它很棒，有些东西能让它工作得更好。比如内存库，能让它不必搜索……

**Alex**: Complaint or complain music? Wait a second, wait a second. I forgot about that count, min, yeah.

**Alex**: 等一下，等一下。我忘了那个……

**Justin**: Oh okay.

**Justin**: 哦，好的。

**Alex**: sorry guys, thank you, thank you for feedback. So now I'm going.

**Alex**: 抱歉各位，谢谢你们的反馈。我现在……

**Justin**: now are you done? Yeah I'm done.

**Justin**: 你说完了吗？是的，我说完了。

**Alex**: should we go to the next question? Oh wait a second, Oh sorry, no, no, no, I have. So take a look. Justin gave you optimistic view on the large code base projects. I have less optimistic here, okay? Yeah, at the moment when we speak about truly large code bases.

**Alex**: 我们看下一个问题吗？哦等等，抱歉，不不不，我有话要说。看，Justin 对大型代码库项目给出了乐观的看法。我在这里没那么乐观，好吗？是的，当我们谈论真正的大型代码库时……

**Justin**: yeah.

**Justin**: 是的。

**Alex**: model, yeah, when we speak about truly big projects, all the agents and that's not killer code problem, it's like the overall problem, they all aren't performing great than at the moment, like there is simply known what will perform good right now here. Well, this.

**Alex**: 当我们谈论真正的大项目时，所有的代理，这不只是 Killer Code 的问题，这是整体的问题，它们目前表现都不算特别好。目前还没有哪个代理能在这里表现得很好。

**Justin**: so there's also, I mean, if you have a large code base with many files, but the files are smaller, you'll actually be able to deal with it much better if you have many really, really long huge files, you can flush the code base right right out of the gate. So for example, if you have this, this like 20000 long file and you load that in kilo code, that might be bigger than the context that, any any LM model can handle right now. So that's, yeah, so a limitation of, of limitation of the tools right now, but I will get better over time.

**Justin**: 另外，如果你有一个包含很多文件的大型代码库，但文件本身比较小，你处理起来会好得多。如果你有很多非常非常长的巨大文件，你可能会直接让代码库崩溃。比如，如果你有一个 20000 行长的文件，然后把它加载到 Kilo Code 里，那可能比任何 **LLM** 模型现在能处理的上下文都要大。所以，是的，这是目前工具的局限性，但随着时间的推移会变得更好。

**Alex**: Yeah, so in short, when we speak about large, large projects, there can be complications, but then you are sticking to one particular component, it can perform better. Good, let's move. So I will mark this one as answer it and move to the next one, killer modes versus Cloud Code sub-agents do you have something to send that?

**Alex**: 是的，所以简而言之，当我们谈论非常大的项目时，可能会有复杂性。但如果你专注于某个特定的组件，它可以表现得更好。好的，我们继续。我把这个问题标记为已回答，然后看下一个。“Killer 模式 vs. Claude Code 子代理”，你对此有什么看法？

**Justin**: Oh I'm not sure there, I mean they different? Yeah, they're different. The sub agents are nice out of the box modes give you a bit more customization opportunities. Kind of depends on what you what you enjoy.

**Justin**: 哦，我不确定。我的意思是，它们不同吗？是的，它们不同。子代理开箱即用很不错，而模式给你更多的定制机会。这取决于你喜欢什么。

**Alex**: My answer will be simple. I have no idea about the Cloud Code sub-agents I never use them, so sorry, I will pass.

**Alex**: 我的回答很简单。我完全不了解 Claude Code 的子代理，我从没用过它们，所以抱歉，我跳过这个问题。

**Justin**: Are we going to talk about how to use sub-agents called code via kilo? No, no different. Different workshop. You can plug in your Cloud Code Cli into Kilo code, but we're not gonna show you that today. Well, we'll show you a different time.

**Justin**: 我们会讲如何通过 Kilo 使用名为 Code 的子代理吗？不，那是不同的研讨会。你可以把你的 Claude Code **CLI**（命令行界面）接入 Kilo Code，但我们今天不会展示。我们会在别的时候展示。

**Alex**: but we definitely can. You see there are many upvotes for this question, so we definitely can record more content about that. That's a good idea, answer it. How?

**Alex**: 但我们绝对可以。你看，这个问题有很多赞，所以我们肯定可以录制更多关于这个的内容。这是个好主意，回答了。

**Justin**: How is kilocore different from programs like windsurf? So windsurf is a, it's kind of like a fork of Vs code ish and Kilo code is a extension which you can run inside of fierce code, but also inside of windsurf. So, yeah, people tend to prefer our agents a little bit more then windsurf. Our pricing is also different. It's pay what you pay, pay for what you use. Perhaps like windsurf trying to fit you into a kind of like a fixed monthly plan, which sounds great and straightforward until you actually start using it and you get rate limited and they don't do, yeah, they don't give you full context access, all that kind of stuff.

**Justin**: Kilo Code 和像 Cursor 这样的程序有什么不同？Cursor 有点像 VS Code 的一个分支，而 Kilo Code 是一个可以在 VS Code 内部运行的扩展，也可以在 Cursor 内部运行。是的，人们似乎更喜欢我们的代理一点。我们的定价也不同，是按使用量付费。而 Cursor 试图让你加入一个固定的月度计划，这听起来很棒很直接，直到你真正开始使用它，然后你就会被限速，他们不给你完整的上下文访问权限，诸如此类。

**Justin**: Yeah, it's a different philosophy and it works a little bit differently. I would, yeah. I would say try them both out and see what you like more.

**Justin**: 是的，这是不同的理念，工作方式也略有不同。我会说，两个都试试，看看你更喜欢哪个。

**Alex**: My answer will be very short. My heart belongs to open source.

**Alex**: 我的回答会非常简短：我的心属于开源。

**Justin**: That's true, that's true.

**Justin**: 那是真的。

**Alex**: and .

**Alex**: 而且……

**Justin**: unfortunately not in the case for windsurf.

**Justin**: 不幸的是，Cursor 并非如此。

**Alex**: And how to manage API spending efficiently, effectively, we will create, much more content about that, in the future. I think it's time to go for a quiz.

**Alex**: 以及如何有效管理 API 开销，我们未来会创建更多关于这个的内容。我觉得是时候进行测验了。

### 互动测验

**Justin**: Yeah, so yeah.

**Justin**: 是的。

**Alex**: good. So we will answer questions. In Discord and we will, we will watch all the questions. You answer it. And for all the questions you answer, you ask it. Sorry you asked it. And we will definitely consider creating more videos for our channel to answer those questions. So what you should do right now.

**Alex**: 好的。我们会在 Discord 里回答问题，我们会看所有你们提的问题。我们肯定会考虑为我们的频道制作更多视频来回答这些问题。所以你们现在应该做的就是……

**Justin**: ask the questions in this world .

**Justin**: 在 Discord 里提问。

**Alex**: and sign up. Sign up for YouTube.

**Alex**: 并且订阅我们的 YouTube 频道。

**Justin**: yeah for sure. Alex, so we're gonna go to the quiz, which is some people's favorite parts. Yeah.

**Justin**: 当然了。Alex，我们现在要进行测验了，这是某些人最喜欢的部分。

**Alex**: so I'm not going anywhere to a quiz. We currently, yeah, no, no, no, no, we are not doing quiz. Take a look at these, we have 420 concurrent viewers and how many likes do we have?

**Alex**: 我哪儿也不去，我们现在不做测验。看看这个，我们有 420 个同时在线的观众，但我们有多少个赞？

**Justin**: Oh, only hundred and .

**Justin**: 哦，只有一百……

**Alex**: 5150, maybe slightly more. YouTube might show outdated information, but that's not serious. Guys, show us some love, you stayed with us for 2 hours, now like we do deserve a little bit of likes here, I see 190 two-four likes .

**Alex**: 一百五十个，也许稍微多一点。YouTube 可能显示的是过时信息，但这不严肃。各位，给我们点爱吧，你们和我们待了两个小时了，我们值得多一些赞。我看到有 194 个赞了。

**Justin**: that is better.

**Justin**: 好多了。

**Alex**: give me two more likes, two more likes and we can go to the slide. We can go to, okay, that's much better, that's much better, that's good. Well, but now, now that counts, now we can go to, yeah, wonderful, Okay, so we are moving .

**Alex**: 再给我两个赞，我们就可以进入下一张幻灯片了。好的，好多了，这很好。现在，这才像话，现在我们可以继续了。太棒了。好的，我们现在进入……

**Justin**: to a quiz because of the qui now.

**Justin**: 进入测验。

**Alex**: yes, I think we can go to a quiz.

**Alex**: 是的，我想我们可以开始测验了。

**Justin**: can we show the men QR code again For people that joined a little bit different.

**Justin**: 我们能再显示一下 Menti 的二维码吗？给那些刚加入的人。

**Alex**: we will show me to, we will definitely show many QR code one more time, so there is a man QR code on the screen now if you want to try to answer our questions and win the prizes, then you better scan this QR code right now and join menti or just go to menti dot com and use code 2 7 9 9 8 3 7 1 that will be really cool and you will have a very nice setup ver and try to answer our questions here, I surely can give a link it's going to be two dot com menti dot com and codes going to be 2 7 9 9 2 7 9 9, it's actually right on the screen on top 8 3 7 1, I suggest you using your mobile phones and watching the screen good, so let's keep moving. It's gon na be quiz time then? Okay, I see I can move to the next one. We are waiting for players. Wow, that will be a royal battle.

**Alex**: 我们肯定会再显示一次 Menti 的二维码。现在屏幕上有二维码，如果你想尝试回答我们的问题并赢得奖品，最好现在就扫描这个二维码加入 Menti，或者直接去 menti.com，使用代码 `2799 8371`。我建议你们用手机，同时看着屏幕。好的，我们继续吧。测验时间到了吗？好的，我看到可以进入下一页了。我们正在等待玩家加入。哇，这将是一场大逃杀。

**Justin**: Yeah, that's quite a few of us.

**Justin**: 是的，我们人还不少。

**Alex**: 275 people in 277 278 like wow, that school, do we do we start or we get like, like 15 more seconds, 15 more seconds exactly 90 dot com and put the code on the screen? By the way, why did, QR code disappeared? I didn't ask it to disappear. Yeah.

**Alex**: 275、277、278 人了，哇，太酷了。我们开始吗？还是再等 15 秒？menti.com，代码就在屏幕上。顺便说一下，二维码怎么消失了？我没让它消失。

**Justin**: there we go.

**Justin**: 好了。

**Alex**: 297, 298 and 300, so we can begin, Excellent, good, good, good, good, good. That's my favorite part. So answer fast to get more points in kilo. What does final prompt consists of.

**Alex**: 297, 298, 300！我们可以开始了。太棒了。这是我最喜欢的部分。快速回答以获得更多分数。**在 Kilo 中，最终的提示由什么组成？**

**Justin**: is it the system prompt, the environment results, the task, or all of the above?

**Justin**: 是系统提示、环境结果、任务，还是以上所有？

**Alex**: Yeah, time is ticking, so it'll be 6 quick, 5, 4, 3, 2, 1 0 boon, 200 people answer it and some people were too fast, too fast, too fast.

**Alex**: 时间在流逝，倒计时 6, 5, 4, 3, 2, 1, 0！200 人回答了，有些人太快了，太快了。

**Justin**: too fast.

**Justin**: 太快了。

**Alex**: Yeah, that's how .

**Alex**: 是的，就是这样。

**Justin**: that I just, yeah.

**Justin**: 我只是……

**Alex**: no, all the answers are technically correct, but the question is what does final prompt consist of. Yes, system prompt is in an environment, details are in and easy, but the right answer is all above.

**Alex**: 不，所有答案在技术上都正确，但问题是最终的提示**由什么组成**。是的，系统提示在里面，环境细节也在里面，但正确答案是**以上所有**。

**Justin**: Luckily, most of us said .

**Justin**: 幸运的是，我们大多数人都答对了。

**Alex**: it, yeah, good, okay, so I want to see Quiz leaderboard. Who was the fastest Wiss times of mass? Risky was the fastest 1 with 946 points. It was a very decent and quick answer. Notice how small is distribution of the answers, it's just like people going very tight on time.

**Alex**: 是的，好的。我想看看排行榜。谁是最快的？Risky 是最快的，得了 946 分。非常出色和快速的回答。注意答案分布有多小，大家的时间都非常紧张。

**Justin**: click, click, click, click, click, that's amazing.

**Justin**: 点击，点击，点击，太惊人了。

**Alex**: let's go on, it's question number 2 and already 309, 311 players and you, oh, that's getting real, so answer fast to get more points which mode you should use working with kilo.

**Alex**: 我们继续，这是第二个问题，已经有 311 个玩家了。哦，这变得真实起来了。快速回答以获得更多分数。**在使用 Kilo 工作时，你应该使用哪种模式？**

**Justin**: what is it? Is it a code mode is a good fit for all tasks or depending on the task code mode, architect mode, etc. or thoroughly tuned custom modes, I know one person that's definitely, definitely gonna click on that one. Custom modes that questions the meaning of everything.

**Justin**: 是“编码模式适合所有任务”，还是“根据任务选择编码模式、架构师模式等”，还是“经过精心调整的自定义模式”？我知道有一个人肯定会选那个。自定义模式，质疑一切的意义。

**Alex**: Oh, and there were two right answers this time. So theoretically, a good way for of a beginner is to go with a specialized modes, but it you for only two custom modes also a good deal. And then question mode, what questions? Meaning of everything? That's a mode I would definitely use from time to time. But the main idea is use mode depending on the task. And no code mode is not good fit for all tasks.

**Alex**: 哦，这次有两个正确答案。理论上，对初学者来说，一个好的方法是使用专门的模式，但精心调整的自定义模式也是一个不错的选择。然后是那个“质疑一切意义”的模式？我肯定会时不时用一下。但主要思想是**根据任务使用不同的模式**。“编码”模式并不适合所有任务。

**Justin**: No, no, unfortunately no, absolutely.

**Justin**: 不，不幸的是，绝对不是。

**Alex-**: So how? So no leaders made a mistake here, but some people were definitely faster. So Tom was faster and he gets to the first.

**Alex**: 那么，领先者们没有犯错，但有些人肯定更快。Tom 更快，他排到了第一。

**Justin**: please. Excellent, done.

**Justin**: 太棒了。

**Alex**: We have to the first place and team on the second. That is that a coincidence or other brothers.

**Alex**: 我们有 Tom 在第一，Tim 在第二。这是巧合还是他们是兄弟？

**Justin**: I don't know?

**Justin**: 我不知道。

**Alex**: Ma risk. He goes to the 9th place. Keep fighting Mar. And that's question number 3. So answer fast to get more points. When requesting code generation for a specific framework, you should .

**Alex**: Ma risk。他掉到了第 9 名。继续战斗，Mar！这是第三个问题。快速回答以获得更多分数。**当请求为特定框架生成代码时，你应该……**

**Justin**: assume the AI knows your project setup or specify the framework name is enough, or specify the framework, its version, and key dependencies. Or ask the AI to guess your framework based on your astrological sign.

**Justin**: 假设 AI 知道你的项目设置；或者指定框架名称就足够了；或者**指定框架、其版本和关键依赖项**；或者让 AI 根据你的星座来猜测你的框架。

**Alex**: This one was easiest. This one was definitely too easy. Yeah, right answer E specify framework and its version and maybe some key dependencies also belong were at least consider giving some more information so llum won't be guessing good. I want to see the leaderboard.

**Alex**: 这个最简单了。这个绝对太简单了。是的，正确答案是指定框架、其版本，也许还有一些关键的依赖项。至少考虑多给一些信息，这样 **LLM** 就不用猜了。我想看看排行榜。

**Justin**: Oh, oh, Tim did a good job.

**Justin**: 哦，Tim 做得不错。

**Alex**: yeah, Tom was slower with time, but maybe we, Tom, now Tim and Tom are opening and closing the they definitely brothers now then apparition gets to the third place with a fastest answer with time. Well done, well done, and mass risky is on the 7th. Nice, so people doing yes, people doing good, that's question number 4, so answer fast to get more points. When should you use XML tags in your prompts to AI coding systems?

**Alex**: 是的，Tom 这次慢了点，但也许……现在 Tim 和 Tom 轮流领先，他们肯定是兄弟了。然后 apparition 以最快的速度回答，排到了第三。干得好！Mass Risky 排在第七。不错，大家做得很好。这是第四个问题。快速回答以获得更多分数。**什么时候你应该在给 AI 编码系统的提示中使用 XML 标签？**

**Justin**: Never XML is outdated soap and XML in the trash when working with XML files.

**Justin**: 永远不要，XML 已经过时了；或者在处理 XML 文件时；或者……

**Alex**: logo, logical or .

**Alex**: 逻辑上……

**Justin**: to clearly structure different sections of your quest? Or is it to make your prompt look more techie and impress the AI? That will probably work. Threaten it, impress it, everything works, yeah. Yeah.

**Justin**: **为了清晰地组织你请求的不同部分**？还是为了让你的提示看起来更“技术宅”来给 AI 留下深刻印象？那可能有用。威胁它，给它留下深刻印象，什么都行。

**Alex**: and you need to be dressed at, well, working before, right? Totally makes sense. Yeah, good. So yeah, right question. A right answer is to use XML ta, for AI coding assistance to clearly structure different sections of your request and that is important.

**Alex**: 你还需要穿着得体，对吧？完全有道理。好的，是的，正确答案是使用 XML 标签来为 AI 编码辅助系统清晰地组织请求的不同部分，这很重要。

**Justin**: Well done to most of you.

**Justin**: 大多数人都答对了，干得好。

**Alex**: yeah.

**Alex**: 是的。

**Justin**: but who was the fastest? As far was the fastest?

**Justin**: 但谁是最快的？

**发言-人1**: Yeah, are the team and to still on the leader war and someone ever took them? So I see many V was fastest jumping to the second place and Thomas fighting to get to top 3 .

**Alex**: 是的，Tim 和 Tom 还在领先榜上吗？还是有人超过他们了？我看到 V 是最快的，跳到了第二名，而 Tom 正在努力进入前三。

**Justin**: apparition still up there. So, yeah.

**Justin**: Apparition 还在上面。

**Alex**: I think good job, good job. Now that's going to be question number 5 and answer fast to get more points open Vs code tops effect prompt.

**Alex**: 我觉得干得不错。现在是第五个问题，快速回答以获得更多分数。**打开的 VS Code 标签页会影响提示吗？**

**Justin**: They don't, no models pay more attention to them.

**Justin**: 它们不会；不，模型会更关注它们。

**Alex**: Maybe .

**Alex**: 也许……

**Justin**: models use only them and ignore all other files, or having 42 tabs open significantly improves API responses, 40 two-two is .

**Justin**: 模型只使用它们而忽略所有其他文件；或者打开 42 个标签页会显著改善 API 响应，42 是……

**Alex**: the meaning of life. Yeah, so maybe, maybe no that the right question is open V S code tabs do affect prompt and they do affect results. And AI model will pay more than to open tabs. So that's important and that's important to understand. Well done to those 123 people who did that, who did that. And yeah, we suggest not to have too much open tabs. It's misleading. And so you like manually disable a very helpful feature. What helps AI model do better? And it wants to do better, they are gonna be changes. No, no, like all the leaders are giving great answers, but I see you name Josephine. John was the fastest jumping on the 2nd time boom.

**Alex**: 生命的意义。是的，所以，正确答案是**打开的 VS Code 标签页确实会影响提示和结果**，AI 模型会更关注打开的标签页。所以这很重要，理解这一点很重要。向那 123 个答对的人表示祝贺。是的，我们建议不要打开太多标签页，这会产生误导。这样你就手动禁用了这个非常有用的功能，而这个功能可以帮助 AI 模型做得更好。它想做得更好。排行榜会有变化吗？不，所有领先者都给出了很棒的答案，但我看到一个叫 Josephine 的。John 是第二次最快的，砰的一下。

**Justin**: all the way up to second, that's that's amazing Tim still keeping the lead, but where Tom gone?

**Justin**: 一路冲到第二，太棒了！Tim 仍然保持领先，但 Tom 去哪儿了？

**Alex**: Maybe Tom name it himself because where you theoretically can change, name it happens sometimes. Many offers we will not know. Maybe team lost and fell down far away. We will I think not know and look, this guy a ship must risky it keeps climbing back down, we up to the first place it's on the fourth now nice we on the 9th. So that's question number 6, answer fast to get more points. What should you include when asking Kilo to debug a function?

**Alex**: 也许 Tom 自己改了名字，因为理论上你可以改名。我们不知道。也许 Tim 输了，掉得很远。我想我们不知道。看，这个家伙，Mass Risky，他一直在往上爬，现在排在第四了，不错，之前在第九。这是第六个问题。快速回答以获得更多分数。**当要求 Kilo 调试一个函数时，你应该包含什么？**

**Justin**: Is it the relevant code, context, file name and function? Is it expected versus actual behavior, slash error message or both answers one and 2 or is it your biography and why this bug is personally very offensive to you that's important nobody for the last one?

**Justin**: 是相关的代码、上下文、文件名和函数吗？是预期行为与实际行为/错误信息吗？还是**答案一和二都对**？或者是你的个人传记以及为什么这个 bug 对你个人来说非常冒犯？

**Alex**: Sometimes they offend me now. Yeah, absolutely, absolutely. So take a look, code context is very important, but if you don't exclude, if you don't explain expected or actual behavior and the error message, man, what exactly Kilo is going to debug? Maybe if the build is broken, it can try, but if it just works not as expected, when you totally must explain it, then obviously just explaining what's happening without specifying place is also very misleading.

**Alex**: 有时候它们确实冒犯到我了。是的，绝对的。所以你看，代码上下文非常重要，但如果你不解释预期或实际行为以及错误信息，天哪，Kilo 到底要调试什么？也许如果构建失败了，它可以试试，但如果它只是工作不符合预期，你绝对必须解释清楚。很明显，只解释发生了什么而不指定位置也是非常误导的。

**Alex**: So right answer, answer number three, you need to provide full information. And some people I see were just in a hurry, just in a hurry. And so something would look like a right answer, but here I'm guilty, I set a trap for you, naughty Alex, yeah. Yeah, I can be very, very naughty. I'm designing traps in my questions, just quickly clicking cancel. What looks so correct is not the best way to deal with that. So now we will see some wheelers, no, I can't believe it, those people are answering correctly like V was fastest again, jumping to a fourth place.

**Alex**: 所以正确答案是第三个，你需要提供完整的信息。我看到有些人只是太着急了，看到一个看起来像正确答案的就选了，但我在这里有罪，我给你们设了个陷阱，调皮的 Alex。是的，我可能非常非常调皮。我在问题里设计陷阱，快速点击取消。看起来那么正确的答案，不一定是最好的处理方式。所以现在我们会看到一些变化……不，我不敢相信，那些人回答得都对，像 V 又一次是最快的，跳到了第四名。

**Justin**: I didn't for your trap.

**Justin**: 我没掉进你的陷阱。

**Alex**: No, no, no.

**Alex**: 不不不。

**Justin**: some people.

**Justin**: 有些人。

**Alex**: but yeah, I do not see, some people. So looks like some of the leaders just like crying somewhere far away. I can hear it.

**Alex**: 但我没看到……有些人。看起来一些领先者正在某个遥远的地方哭泣。我能听到。

**Justin**: I can hear it.

**Justin**: 我能听到。

**Alex**: someone is crying, yeah, but well keep fighting, many people did mistakes before so notice this comment the pizza man came, I missed the question, I hope, I hope it's a tasty pizza because like it's very, very upsetting good with 263 players ready, we ask the final question, will launch the final question and answer fast to get more points. What's the temperature in the context of AI model parameters?

**Alex**: 有人在哭，是的。但继续战斗吧，很多人之前也犯过错。注意这条评论：“送披萨的来了，我错过了问题。” 我希望那是个好吃的披萨，因为错过问题真的很令人沮丧。好的，有 263 名玩家准备好了，我们提出最后一个问题。快速回答以获得更多分数。**在 AI 模型参数的上下文中，“温度”是什么？**

**Justin**: Is it how hot your computer gets while running the AI or a setting that controls the randomness slash creativity of responses? Is that the AI models level or sorry, the Ai's mood level? Or is it the actual temperature required for optimal AI performance?

**Justin**: 是运行 AI 时你的电脑有多热；还是**一个控制响应随机性/创造力的设置**；是 AI 模型的情绪水平；还是优化 AI 性能所需的实际温度？

**Alex**: But alas, all but most of you made it. Almost everyone.

**Alex**: 哎呀，但你们大多数人都答对了。几乎是每个人。

**Justin**: I don't think we even need to explain why.

**Justin**: 我觉得我们甚至不需要解释为什么。

**Alex**: No, no, we don't need to explain why here, drum roll mente is on a, so if you want to get your prize and you will be in top 10, make a screenshot.

**Alex**: 不，我们不需要在这里解释。现在是揭晓结果的时刻。如果你想获得奖品并且排在前十名，请截图。

**Justin**: Make a screenshot and send it to us on Discord. Maybe .

**Justin**: 截图然后发到我们的 Discord 上。

**Alex**: hi.

**Alex**: 或者发到邮箱。

**Justin**: Oh yeah, that's even better actually. Create screenshot, send it to high kilo code dot AI, and then we'll we'll get your prizes and since we're doing a Fibonacci, fib Fibonacci promo, the top 10 will get, subsequently higher.

**Justin**: 哦是的，那更好。截图，发送到 `hi@kilo.code.ai`，然后我们就会给你发奖品。既然我们正在进行斐波那契促销，前十名的奖品会依次更高。

**Alex**: fiber ACI. Wow, yeah, nice. So what's what significant thing? Good, so let's go, who was the fastest and who made a mistake? There are no mistakes on the leaderboard because, well, it was a simple question and nucleon was fastest and C was fastest too, but joules get to first place with 6205 points. Nice, that's a really cool job. That's really cool, congrats. Yeah, but actually well done everyone.

**Alex**: 哇，不错。那么，谁是最快的，谁犯了错？领先榜上没有错误，因为这是个简单的问题。Nucleon 是最快的，C 也是，但 Jules 以 6205 分获得了第一名。不错，干得漂亮，恭喜！实际上，大家都做得很好。

**Justin**: right? Yeah, and so everybody that's in this list, you know, so Jules Malik mazrik e TV, Dragonite and nucleon C and Dali and Stephanie, please screenshot this and send, send the screenshot to high Agu code that AI and you'll, you'll get some amazing, prices. Yeah, speaking of prizes and QR codes and other good stuff, should we show the, the QR code again?

**Justin**: 是的。所以这个列表里的每个人：Jules, Malik, Mazrik, eTV, Dragonite, Nucleon, C, Dali 和 Stephanie，请截图并发送到 `hi@kilo.code.ai`，你们会得到很棒的奖品。说到奖品和二维码，我们应该再展示一下那个二维码吗？

**Alex**: Sure, my real question here is so get to the link, but looks like something happened with this, so we will get to solving this question and address it very soon.

**Alex**: 当然。我真正的问题是，虽然有链接，但好像出了一些问题，所以我们会很快解决这个问题。

**Justin**: Yeah, somebody's asking how they can, they can get in touch with us on Discord and that's pretty easy. Go to kilo code dot AI slash Discord and you'll be able to find us. Yeah, and for Anthropic QR code, I hope it's working now. You do need an Anthropic account to redeem the credits, though you'll get an email about it. I think it's a low form and, again, the, killer code, coupon code is prompt art at the moment. We'll close that down right after this workshop, so make sure that you sign up really quickly and also we have the Fibonacci promo going on right now.

**Justin**: 是的，有人在问如何在 Discord 上联系我们，这很简单。去 `kilo.code.ai/discord` 就能找到我们。对于 Anthropic 的二维码，我希望它现在能用了。你需要一个 Anthropic 账户来兑换信用点数，你会收到一封关于此事的邮件。Kilo Code 的优惠码目前是 `prompt art`。我们会在这次研讨会后立即关闭它，所以请确保你尽快注册。另外，我们现在还有斐波那契促销活动。

**Justin**: So many amazing things and Fibonacci promo, you pay us 12, we'll give you 23 or something like that in bonus credits on top of your 12. So, and it keeps going up, you know, as you use higher Fibonacci numbers or buy purchase with higher Fibonacci numbers. So a lot of great stuff. And we've been grouping away some prizes, I feel like, you know, with the two bearded Santa Claws of July. There we go.

**Justin**: 太多好东西了。斐波那契促销，你付 12，我们会在你的 12 基础上再给你 23 或者类似的奖励信用点数。而且它会随着你使用更高的斐波那契数而增加。很多好东西。我们一直在发奖品，感觉就像七月的两个大胡子圣诞老人。

### 尾声与预告

**Alex**: good. So where's absolutely where people asking, when is the next streaming? So I think in two weeks, right?

**Alex**: 好的。绝对有人在问，下一次直播是什么时候？我想是两周后，对吧？

**Justin**: Yeah, I think so.

**Justin**: 是的，我想是的。

**Alex**: I think in two weeks, so next Thursday, I guess one hour earlier as we usually do.

**Alex**: 我想是两周后，所以是下下个周四，我猜会比我们通常的时间早一个小时。

**Justin**: yeah.

**Justin**: 是的。

**Alex**: we will see what exactly it will be, but it definitely going to be something what will boost your productivity because so that's what we do.

**Alex**: 我们会看看具体内容是什么，但肯定会是一些能提升你生产力的东西，因为这就是我们做的。

**Justin**: Yeah, and we did have a lot of votes for code based indexing and memory bank, so maybe it would be one of those. Well, yeah, we'll find out soon enough.

**Justin**: 是的，我们确实有很多投票给了“代码库索引”和“内存库”，所以也许会是其中之一。嗯，是的，我们很快就会知道了。

**Alex**: Yeah, no, we don't go, again tomorrow, but we will see what can be done, we definitely can do some live coding as well.

**Alex**: 是的，不，我们明天不直播，但我们会看看能做些什么，我们肯定也可以做一些现场编码。

**Justin**: Good, yeah. And for people that are interested in Fibonacci, go to Fibonacci dot kiero, do AI, and you'll be able to find out more details about that.

**Justin**: 好的。对斐波那契促销感兴趣的人，可以去 `fibonacci.kilo.code.ai`，你们可以在那里找到更多细节。

**Alex**: Yeah, and yeah, we will be more credits in two weeks, I guess, right? Yeah, well, depending .

**Alex**: 是的，两周后会有更多的信用点数，我猜，对吧？嗯，看情况。

**Justin**: depends on the workshop that we do good.

**Justin**: 取决于我们做什么样的研讨会。

**Alex**: so with that, I think that's it, right?

**Alex**: 那么，我想就是这样了，对吧？

**Justin**: That from us it.

**Justin**: 我们这边就是这样了。

**Alex**: that's it, thank you from us.

**Alex**: 就是这样，谢谢大家。

**Justin**: thank you so much.

**Justin**: 非常感谢。

**Alex**: thumbs up, subscribe and see you in two weeks, bye bye bye.

**Alex**: 点赞，订阅，两周后见，再见！