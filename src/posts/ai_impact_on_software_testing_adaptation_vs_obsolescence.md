---
Exclude: true
area: "tech-engineering"
author: Lei
category: technology
channel: null
companies_orgs: []
date: 2025-08-01
draft: true
file_name: ai_impact_on_software_testing_adaptation_vs_obsolescence.md
guest: ''
insight: null
layout: post.njk
products_models: []
project: []
series: null
source: null
speaker: PCC insider
summary: 软件测试专业人士探讨了 AI 崛起的双重影响。他们讨论了 AI 在自动化重复任务和提高效率方面的潜力，同时也表达了对工作安全的焦虑，尤其是对测试工程师（estats）而言。对话权衡了适应新工具的必要性与被取代的真实风险。
tags:
- llm
- security
- software-testing-automation
- technology
title: AI 对软件测试的影响：是技术颠覆还是效率革命？
---
## 开场：Azure AI 培训与认证介绍

**Summer**: and do the recordable part. Yeah, you have to reshare. Reshare faces if willing.

**Summer**: 我们开始录制部分。是的，你需要重新分享。如果愿意的话，请重新分享你们的画面。

**Summer**: OK, yeah, so it is mostly like it is an Azure training, right? It's not gonna help you with other AI stuff. It is really how to use the Azure tools. And then once you've completed it, if you would like to get the certification, Katya's been looking into it to see like if that certification is covered by the company or what have you.

**Summer**: 好的，是的，这主要是一个关于 **Azure** 的培训，对吧？它不会帮助你了解其他 AI 相关的东西，它真正教的是如何使用 Azure 的工具。完成之后，如果你想获得认证，Katya 已经研究过，看看公司是否会报销这个认证费用之类的。

**Summer**: Um, so if you'd like to get the certification, could look good on a resume, so um.

**Summer**: 所以，如果你想获得这个认证，它在简历上会很好看。

**Summer**: Just, uh, please. Yeah, yeah.

**Summer**: 请便。

**Juliet Sime**: Do you have any idea how long this certification takes?

**朱丽叶·西姆**: 你知道这个认证需要多长时间吗？

**Summer**: Couple hours like it's a proctored like exam.

**Summer**: 几个小时吧，它是一个有监考的考试。

**Juliet Sime**: OK.

**朱丽叶·西姆**: 好的。

**Summer**: So yeah, the it's not, it's not a, it's not a hard training, right? Like it's just a just gotta sit down and go through it, so.

**Summer**: 所以，是的，这个培训并不难，对吧？只需要坐下来把它过一遍就行了。

**Summer**: Any other questions on that one?

**Summer**: 关于这个还有其他问题吗？

**Amardeep Singh**: Start that 8 hour training. I saw you. I just joined. I was in another meeting. So you were talking about that 8 hours training in Pluralsight.

**阿玛迪普·辛格**: 关于那个8小时的培训。我看到你了。我刚加入，之前在另一个会议。所以你是在谈论 Pluralsight 上的那个8小时培训。

## 深入探讨：AI 对软件测试工程师的挑战与机遇

**Amardeep Singh**: Yeah, that's not a fine layer.

**阿玛迪普·辛格**: 是的，那不是一个精细的层面。

**Amardeep Singh**: Something in the future, probably in five years, I'm not sure. Yeah, when the MCPD will be mature enough to do those job with the, you know, accurately, but yeah.

**阿玛迪普·辛格**: 也许是未来的事，可能五年后，我不确定。是的，当 **MCP**（模型-客户端协议）足够成熟，能够准确地完成那些工作时，但是的。

**Brent Barker**: Was anyone around when Excel came out?

**布伦特·巴克**: **Excel** 刚出来的时候，有谁在场吗？

**Brent Barker**: Not you, Hayden.

**布伦特·巴克**: 不是说你，海登。

**Summer**: Oh, was that going to steal our jobs too?

**Summer**: 哦，那东西当时也要抢走我们的工作吗？

**Brent Barker**: Not you hated or it's hidden here. Come on.

**布伦特·巴克**: 不是说你，海登。拜托。

**Summer**: Oh.

**Summer**: 哦。

**Brent Barker**: But I I see it as a way as it is gonna change and it's gonna get better and all that stuff, right? I I see it as a way to take mundane parts of our jobs and change it so we can use do cooler stuff.

**布伦特·巴克**: 但我把它看作一种方式，它会改变，会变得更好，对吧？我把它看作一种将我们工作中乏味的部分拿走，从而让我们能做更酷的事情的方式。

**Brent Barker**: Um, I. And and that's why I think Summer and well, at least I am encouraging people to learn how to use it. It's like it's like Excel coming out when when they were doing the the baseline paper stuff or it's like Google or or Internet searching when it came out like you used to have to go to a library and search in a dictionary and all that stuff. Well now you can Google it.

**布伦特·巴克**: 这就是为什么我认为，至少我个人，鼓励大家学习如何使用它。这就像 Excel 刚出现时，人们还在用纸质表格；或者像谷歌和互联网搜索刚出现时，你过去必须去图书馆查字典。现在你可以用谷歌搜索了。

**Brent Barker**: Well, next thing is gonna be you can now ask AI and then AI can generate stuff. It's gonna shift into into that and unfortunately it is. I think it is gonna disrupt it, but I think if we learn how to use it and learn how to.

**布伦特·巴克**: 那么，下一件事就是你可以问 **AI**，然后 AI 可以生成东西。它会向那个方向转变。我认为它会带来颠覆，但我认为如果我们学会如何使用它……

**Brent Barker**: Yeah, learn how to use it then. I think that'll benefit us and and make it a little bit more, um, you know, make us.

**布伦特·巴克**: 是的，学会如何使用它。我认为那会让我们受益，让我们……

**Brent Barker**: I don't know. The gist of it is, yeah, let's let's just try to understand the try to use it and and stuff so we don't end up being coming. I don't wanna say obsolete, but you know what I mean, right? It it's like it's like when, yeah, when.

**布伦特·巴克**: 我不知道怎么说。主旨是，是的，让我们试着去理解和使用它，这样我们就不会变得……我不想说“过时”，但你懂我的意思，对吧？这就像……

**Summer**: Yep.

**Summer**: 是的。

**Summer**: No, it's it's valid, right? Yeah, we're gonna have to adapt.

**Summer**: 不，这很有道理，对吧？是的，我们必须去适应。

**Brent Barker**: Right when when the manual testers and then s s started coming around right, it's it's similar situation where you gotta adapt the manual people that started learning how to do test automation and started going that route.

**布伦特·巴克**: 对，就像当手动测试人员和自动化测试开始出现时一样，这是一个类似的情况，你必须适应。那些手动测试的人开始学习如何做测试自动化，并朝那个方向发展。

**Brent Barker**: Yeah, anyway.

**布伦特·巴克**: 是的，总之。

**Summer**: No, I appreciate your optimism, Brent. That is helpful.

**Summer**: 不，我很欣赏你的乐观，布伦特。这很有帮助。

**Brent Barker**: Yeah. Thanks.

**布伦特·巴克**: 谢谢。

**KC Naegle**: Would you like the other side now?

**KC·内格尔**: 你想听听另一方的观点吗？

**Summer**: Absolutely.

**Summer**: 当然。

**Brent Barker**: PC Come on, we're we're it's sunshine and rainbows out.

**布伦特·巴克**: 拜托，外面阳光明媚，一片祥和。

**KC Naegle**: But.

**KC·内格尔**: 但是。

**KC Naegle**: Well, I think, I think Brent, you were getting to my point is like, I do think in the overall industry of software development, like y'all are right. You know, we just need to keep up with this new technology and it's going to help people.

**KC·内格尔**: 我觉得布伦特你提到了我的观点。我确实认为在整个软件开发行业，你们是对的。我们只需要跟上这项新技术，它会帮助人们。

**Brent Barker**: I'm kidding. Go.

**布伦特·巴克**: 我开玩笑的，请说。

**KC Naegle**: Be better at their jobs. And you know, it's just a steep learning curve right now. But I think it's more dangerous for us as estats because as we're kind of discovering, they already don't want to pay us like.

**KC·内格尔**: 更好地完成工作。现在只是一个陡峭的学习曲线。但我认为这对我们作为 **estats**（测试开发工程师）来说更危险，因为我们正在发现，他们已经不太愿意付钱给我们了。

**KC Naegle**: They're that cycle that I was talking about of, you know, they hire a bunch of people when they have a lot of money and then when they look to save money in salaries, we're always the 1st to go and I think AI will add.

**KC·内格尔**: 就是我之前谈到的那个循环：当他们有很多钱的时候，他们会雇佣一大批人；当他们想节省薪资开支时，我们总是最先被裁掉的。我认为 AI 会加剧这种情况。

**KC Naegle**: Some encouragement to, you know, V PS to say like, Oh well, we don't need to pay a debt specifically because now we have this extra bit of testing help from AI and so I think it is particularly dangerous for us.

**KC·内格尔**: 它会鼓励副总裁们说：“哦，我们不需要专门付钱给测试人员了，因为现在我们有 AI 提供的额外测试帮助。” 所以我认为这对我们来说尤其危险。

**KC Naegle**: And I know a lot of people are like working on being developers anyway, so that's great, like fine. But we've heard in our in our town hall that our leadership is very invested in a I making us go faster and be more efficient and I think.

**KC·内格尔**: 我知道很多人反正也在努力成为开发人员，那很好。但我们在全体会议上听说，我们的领导层非常希望 AI 能让我们更快、更高效。

**KC Naegle**: I think it's fair to be worried that part of the efficiency is cutting us out of the equation. So I'm very worried about that. I appreciate the optimism from Summer and Brent and Amardeep. Like I hope that's right, but I think the other side is also possible.

**KC·内格尔**: 我认为，担心这种效率的一部分是把我们从等式中剔除，这是合理的。所以我对此非常担心。我感谢萨默、布伦特和阿玛迪普的乐观。我希望他们是对的，但我认为另一种可能性也存在。

**Summer**: Yeah. And I I'm hoping I'm finding a balance between Brent and Casey, right. Just know, like when I do talk about the future of the quality department is because I'm working with our AM P leaders to figure out what.

**Summer**: 是的。我希望能找到布伦特和凯西之间的平衡点。要知道，当我谈论质量部门的未来时，是因为我正在和我们的领导层合作，研究这对我们来说意味着什么。

**Summer**: This looks like for us, right? Because. A I and testing are almost synonymous now, right? Like you can't have testing without a I anymore. Like copilot builds your unit tests for you and like there's builds test plans and things like that, right? It's it's.

**Summer**: 对我们来说是什么样子，对吧？因为现在 **AI** 和测试几乎是同义词了。你不能再有没有 AI 的测试了。比如 Copilot 会为你构建单元测试，还会构建测试计划之类的。

**Summer**: It's just part of the quality domain now. And so that is going to change how we work. And to Brent's point, like it's going to take some adapting and my goal. So not that anything's changing right now, but like my goal is to get ahead of it.

**Summer**: 它现在就是质量领域的一部分了。所以这会改变我们的工作方式。就像布伦特说的，这需要一些适应。我的目标，不是说现在有什么变化，而是要走在前面。

**Summer**: And to make sure that if I have a say that I'm able to change things to make sure that the danger for us is mitigated as best I can. So I am working on those things. Heads up in the background.

**Summer**: 并且确保，如果我有发言权，我能够改变一些事情，以确保我们面临的危险被尽可能地减轻。所以我正在幕后努力做这些事情，提醒一下大家。

**Summer**: But it is a risk and I agree with Casey that like we as test engineers are at a higher risk because a I can be used for testing.

**Summer**: 但这确实是一个风险，我同意凯西的观点，我们作为测试工程师面临的风险更高，因为 AI 可以被用于测试。

**Summer**: OK, that was a lot. A lot of deep talk today.

**Summer**: 好的，今天谈了很多，很深入。

**Summer**: Any other final comments? We're we're at time, so feel free to drop, but.

**Summer**: 还有其他最后的评论吗？我们时间到了，可以随时离开。

**Amardeep Singh**: Good luck. But.

**阿玛迪普·辛格**: 祝好运。但是。

**Summer**: In general, that's a great. Yep. All right. Thank you, everyone. Great conversation. I'll see you later. Have a good weekend.

**Summer**: 总的来说，这很棒。好的。谢谢大家。很棒的对话。回头见。周末愉快。