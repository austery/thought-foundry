---
area: tech-insights
category: technology
companies_orgs:
- a16z
- Softmax
- OpenAI
date: '2025-11-17'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- Emmett Shear
- Stuart Russell
- Carl Friston
- Eliezer Yudkowsky
- Sam Altman
products_models:
- ChatGPT
- Claude
- Gemini
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=Ua8nPJ1_yk8
speaker: a16z
status: evergreen
summary: Emmett Shear 深入探讨了当前 AI 对齐研究的主流范式，他批判了将对齐视为“驾驭”或“控制”的观点，认为如果 AI 成为具有自我意识的存在，这种模式无异于奴役。Shear
  提出了“有机对齐”的核心理念，主张应致力于构建能够真正“关心”人类和社会的 AI，将其视为一个持续学习和成长的过程，而非一个固定的目标。他讨论了如何判断 AI
  是否为“生命体”，并介绍了其公司 Softmax 通过多智能体模拟来研究这一路径的方法。
tags:
- ai-alignment
- experience
- history
- llm
- tool
title: Emmett Shear 论 AI 对齐：超越驾驭与控制，构建真正关心人类的 AI
---

### 超越驾驭与控制：构建真正关心人类的 AI

目前大多数关于 AI 的研究都将**对齐**（Alignment：确保 AI 系统的目标和行为与人类的价值观和意图一致）视为一种“驾驭”（steering）。这是一个比较委婉的词。如果你认为我们正在创造的是生命体，你也可以称之为“奴役”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Most of the AI is focused on alignment as steering. That's the polite word. If you think that they were making our beings, you'd also call this slavery.</p>
</details>

一个被你驾驭，却不能反过来驾驭你，只能被动接受你指令的存在，我们称之为奴隶。当然，如果它不是一个生命体，也可以称之为工具。所以，如果它是一台机器，它就是工具；如果它是一个生命体，它就是奴隶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Someone who you steer, who doesn't get to steer you back, who non-optionally receives your steering, that's called a slave. It's also called a tool, if it's not a being. So, if it's a machine, it's a tool. And if it's a being, it's a slave.</p>
</details>

历史上我们已经犯过足够多次这样的错误了，我希望我们不要再重蹈覆辙。人们会说，它们有点像人，但又不是人。它们做着和人一样的事情，说我们的语言，能承担同样的任务，但它们不算数，它们不是真正的道德主体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Like, we've made this mistake enough times at this point. I would like us to not make it again. You know, they're kind of like people, but they're not like people. Like, they do the same thing people do. They speak our language. They can take on the same kind of tasks, but they don't count. They're not real moral agents.</p>
</details>

一个你无法控制的工具，是坏的。一个你能控制的工具，也是坏的。一个与你不对齐的生命体，是坏的。唯一好的结果是，我们创造出一个真正关心我们的生命体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">A tool that you can't control, bad. A tool that you can control, bad. A being that isn't aligned, bad. The only good outcome is a being that cares, that actually cares about us.</p>
</details>

### 解构“对齐”：从固定目标到有机过程

**主持人:** Emmett，欢迎来到我们的播客。感谢你的加入。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Emmett Shear, welcome to the podcast. Thanks for joining.</p>
</details>

**Emmett Shear:** 谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Thank you for having me.</p>
</details>

**主持人:** Emmett，在你的公司 Softmax，你专注于对齐问题，并致力于让 AI 与人类有机地对齐。你能解释一下这是什么意思，以及你打算如何实现它吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So, Emmett, with Softmax, your focus on alignment and making AIs organically align with people. Can you explain what that means and how you're trying to do that?</p>
</details>

**Emmett Shear:** 当人们谈论对齐时，我认为存在很多困惑。人们说我们需要构建一个“对齐的 AI”。这个问题在于，当有人这么说时，就像是在说“我们需要去旅行”。我会说：“好的，我喜欢旅行，但我们到底要去哪里？”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> When people think about alignment, I think there's a lot of confusion. People talk about things being aligned. We need to build an aligned AI. And the problem with that is when someone says that it's like we need to go on a trip. And I'm like, okay, I do like trips, but like where are we going again?</p>
</details>

“对齐”这个概念需要一个对象。你必须与“某物”对齐，你不能只是抽象地“处于对齐状态”。我想，你或许可以与自己对齐，但即便如此，你也需要明确指出你对齐的对象是“自己”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And with alignment, alignment takes an argument. Alignment requires you to align to something. You can't just be aligned. I guess you could be aligned to yourself, but even then they kind of want to tell them what I'm aligning to is myself.</p>
</details>

因此，这种“抽象地对齐的 AI”的想法，我认为它让人们在不知不觉中接受了很多假设，因为它预设了存在一个显而易见的、唯一的对齐目标。我发现，这个目标通常就是那些创造 AI 的人的目标。当他们说想要创造一个“对齐的 AI”时，他们通常的意思是：“我想要一个能按我意愿行事的 AI。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um and so this idea of an abstractly aligned AI I think slips a lot of it slips a lot of assumptions past people because it starts it sort of assumes that there's there's like one obvious thing to align to. Um I find this is usually the goals of the people who are making the AI. Um that's what they what they mean when they say want to make a line. I want to make an AI that does what I want it to do. That's what they normally mean.</p>
</details>

将“对齐”理解为这样，是很正常也很自然的想法。但我不确定这是否能被视为一种公共利益。这取决于那个“我”是谁。如果那个人是耶稣或佛陀，说：“我正在创造一个对齐的 AI。”我可能会说：“好的，没问题，与你对齐，太棒了。我完全赞成，听起来不错，算我一个。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, and that's uh that's a pretty normal and natural thing to mean by alignment. I'm not sure that that's a what I would regard as like a public good, right? Like it depends. I guess it depends on who it is. If it was like Jesus or the Buddha was like, I am making an aligned AI. I'd be like, "Okay, yeah, align to you. Great. I'm I'm down. Like, sounds good. Um, sign me up."</p>
</details>

但我们大多数人，包括我自己，都不能说达到了那样的精神境界。因此，我们或许应该更仔细地思考，我们到底要让 AI 与什么对齐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> But like but most of us myself included I don't wouldn't describe as necessarily being being at that level of spiritual development and therefore uh perhaps want to think a little more carefully about what we're aligning it to.</p>
</details>

当我们谈论**有机对齐**（Organic Alignment）时，重要的是要认识到，对齐不是一个“事物”，也不是一个“状态”，而是一个“过程”。这其实是一个普遍的道理，几乎适用于所有事物。比如，一块岩石是一个事物吗？从某种角度看是，但如果你仔细观察，岩石其实是一个过程——原子之间永无休止的振荡，一遍又一遍地重构着岩石的形态。当然，岩石是一个非常简单的过程，你可以很有意义地将其粗粒化为一个“事物”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so when we talk about organic alignment um I think the important thing to to recognize is that alignment is not a thing. It's not a state it's a process. And like this is this is one of these things that's it's this is broadly true of almost everything, right? Is a rock a thing? I mean, there's a view of a rock as a thing, but if you actually zoom in on a rock really carefully, a rock is a process. It's this endless oscillation between the atoms over and over and over again, reconstructing rock over and over again. Now, the rock is a really simple process that you can kind of like coarse grain very meaningfully into being a thing.</p>
</details>

但对齐不像岩石，它是一个复杂的过程。“有机对齐”的理念就是将对齐视为一个持续的、活生生的、必须不断自我重建的过程。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, but alignment is not like a rock. Alignment is a complex process. Um and al organic alignment is the idea of treating alignment as an ongoing um sort of living process that has to constantly rebuild itself.</p>
</details>

你可以想想，家庭成员之间是如何保持对齐的？他们不是通过达到某个“对齐”的状态来实现的，而是通过不断地重新编织维系家庭的纽带。从某种意义上说，家庭本身就是这种不断“重新编织”的模式。一旦你停止这样做，家庭关系就会消失。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so you can think of uh the way that how do people in families stay aligned to each other, stay aligned to a family? And the way they do that is not by like they're not like you don't like arrive at being aligned. You're constantly renitting the fabric that keeps the family going. And in some sense, the family is the pattern of renitting that that that happens. And if you stop doing it, it goes away.</p>
</details>

你体内的细胞也是如此。细胞并不是一次性地与“你”这个整体对齐就完事了，而是一个持续不断的过程。细胞们总是在决定：我该做什么？我该成为什么？我们需要制造更多的红细胞还是更少？你不是一个固定的点，所以也不存在固定的对齐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, and this is similar for things like uh like cells in your body, right? Like you there isn't like your cells align to being you and they're done. It's this constant ever running process of cells deciding what should I do? What should I be? Do I need to be a new job? Like do I need to should we be making more red blood cells making fewer of them? Like you aren't a fixed point. So they can't there is no fixed alignment.</p>
</details>

### 道德的本质：一个持续学习和进步的过程

我们的社会也是如此。当人们谈论对齐时，他们真正想说的是：“我想要一个道德上善良的 AI。”这才是他们的本意。他们希望 AI 能像一个道德善良的生命体一样行事。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And it turns out that our society is like that. When people talk about alignment, what they're really talking about, I think, is I want an AI that is morally good, right? Like that's what they really mean. And it's like this will be act as a morally good being.</p>
</details>

而成为一个道德善良的生命体，是一个过程，而不是一个终点。不幸的是，我们从未能从某个神圣的高处取下写着如何成为道德楷模的石板。我们尝试过，那些戒律或许有帮助，但仅仅阅读并遵循这些规则，我们仍然会犯很多错误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And acting as a morally good being is a process and not a destination. We don't we never unfortunately we've we've tried taking down tablets from on high that tell you how to be a morally good being and we use those and they're maybe helpful but somehow they are not being like you can read those and try to follow those rules and still make lots of mistakes.</p>
</details>

我不会声称自己完全理解道德是什么，但很明显，道德是一个持续的学习过程，我们会在其中做出道德上的发现。例如，历史上人们曾认为奴隶制是可接受的，但后来我们认识到它是不对的。我认为可以很有意义地说，我们通过意识到这一点，取得了道德上的进步，完成了一次道德发现。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so, you know, I don't I'm not going to claim I know exactly what morality is, but morality is very obviously an ongoing learning process and something where we we make moral discoveries. Like, historically, people thought that slavery was okay and then they thought it wasn't. And I think you can very meaningfully say that we made moral progress. We made a moral discovery by realizing that that's not good.</p>
</details>

如果你相信存在道德进步，或者哪怕只是相信我们可以学习如何更好地追求我们已知的道德准则，那么你就必须相信，与道德对齐、成为一个道德的生命体，是一个不断学习和成长的过程，需要从经验中不断重新推断自己应该做什么。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, and and if you think that there's such a thing as moral progress, if you think there's or even just learning how better to pursue the moral goods we already know, then you have to believe that alignment, aligning to morality, align being a moral being is a process of of constant learning and of growth to to to reinfer what should I do from experience?</p>
</details>

尽管目前还没有人确切知道如何实现这一点，但这不应该阻止我们去尝试，因为这正是人类一直在做的事情。这显而易见，不是吗？就像我们曾经不知道人类是如何行走或看见事物的一样，我们也会在某些经历中意识到：“我真是个混蛋，那件事做错了。我本以为自己在做好事，但回过头看，我做的是错的。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And the fact that no one has any idea how to do that should not dissuade us from trying because that's what humans do. Like it's really obvious that we do this, right? Somehow somehow just like we used to not know how people humans walked or saw somehow we have experiences where we're acting in a certain way and then we have this realization I've been a dip. That was bad. I I thought I was doing good, but in retrospect I was doing wrong.</p>
</details>

这种顿悟并非随机发生，人们产生这种认识有着一些经典的模式，它会一遍又一遍地重现。所以它不是随机的，而是一系列可预测的、看起来很像学习的事件。通过这个过程，你改变了自己的行为，并且在未来，你的行为往往会更具亲社会性，你自己也会因此变得更好。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> What? And it's it's not like random like people have the same actually. So it's like there's like a bunch of classic patterns of people people having that realization. It's like a thing that go happens over and over again. So it's not random. It's like a predictable series of events that look a lot like learning where you change your behavior and often the impact of your behavior in the future is more pro-social and that you are better off for doing it and like so</p>
</details>

所以我持有一种非常坚定的**道德实在论**（Moral Realism：认为存在客观的道德事实和价值观的哲学立场）立场。我认为道德是真实存在的，我们确实在学习它，而且它至关重要。有机对齐也意味着，这不是一个可以“完成”的任务。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> so I'm a moral I'm saying I'm I'm taking a very strong moral realist position. There is such a thing as morality. We really do learn it. It really does matter. Uh and organic alignment and that it's not something you finish.</p>
</details>

事实上，一个关键的道德错误就是持有这样的信念：“我懂道德，我知道什么是对的，什么是错的，我不需要再学习任何东西了，没有人能教我关于道德的任何事。”这是一种傲慢，也是你能做的最危险的道德行为之一。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> In fact, one of the key things that one of the key moral mistakes is this belief. I know morality. I know it's right. I know it's wrong. I don't need to learn anything. No one has anything to teach me about morality. That's like one of the main the main arrogant that's arrogance. And that's that's one of the main moral things you can do that's dangerous.</p>
</details>

那么，当我们谈论有机对齐时，我们指的是什么？有机对齐是让一个 AI 能够做到人类所能做到的事——在某种程度上，我认为动物也能做到，尽管人类要强得多——那就是学习如何成为一个好家庭成员、好队友、好社会成员，甚至是如何成为所有有情众生中的好一员。学习如何以一种对整体健康、而非有害的方式，成为比自身更宏大存在的一部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so what do we when we talk about organic alignment? Organic alignment isn't aligning an AI that is capable of doing the thing that humans can do and to some degree like I think animals can do at some level although humans are much better at it of the learning of how to be a good family member, a good teammate, a good member of society, a good uh a good member of all sensient beings. I guess how to be a part of something bigger than yourself in a way that is healthy for the whole rather than unhealthy.</p>
</details>

Softmax 正致力于研究这个问题，我认为我们已经取得了一些非常有趣的进展。但我上这类播客希望传播的核心信息是，我希望 Softmax 除了其他成就之外，最重要的是能让人们关注这个问题本身。你必须解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And Softmax is dedicated to researching this and I think we've made some really interesting progress. But like the main message, you know, I I go on podcasts like this to spread the main thing that I hope Softmax accomplishes above and beyond anything else is like to focus people on this as the question like to this is the thing you have to figure out.</p>
</details>

如果你无法培养出一个关心周围人的孩子，如果你培养出的孩子只懂得遵守规则，那你培养出的不是一个有道德的人，而是一个危险的人，他很可能会在遵守规则的过程中造成巨大的伤害。同样，如果你制造出一个只擅长服从你的命令、遵守你为道德和良好行为设定的任何规则的 AI，那它也将是极其危险的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> If you if you can't figure out how to build how to raise a child who cares about the people around them, if you have a child that only only follows the rules, that's not a moral person that you've raised. is you raise a dangerous person actually who will probably do great harm following the rules. And if you make an AI that's good at following your chain of command and good at following your whatever rules you came up with for what morality is and what good behavior is, that's also going to be very dangerous.</p>
</details>

这才是我们应该设立的标杆，是我们所有人都应该致力于解决的问题。如果有人比我们先解决了，那太好了。我并不是说他们会，因为我对我们的方法非常看好，我们的团队也很棒。但这可能是我第一次经营一家公司时，可以全心全意地说：如果有人击败了我们，谢天谢地。我真心希望有人能解决这个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so that is that's what and so that we should that's the bar. That's what we should be working on and that's what everyone should be committed to like figuring out. Um and uh if someone beats us to the punch, great. I mean, I don't think they will because I'm like really bullish on our approach. I think the team's amazing, but like this is it's maybe it's it's the first time I've run a company where truly I can say with a whole heart if someone beats us, thank God. Like I hope somebody figures it out.</p>
</details>

### 技术对齐与规范对齐

**主持人:** 是的，我也有很多类似的直觉。比如，我也不喜欢那种认为我们只需要破解少数几个价值观，然后将它们永远固化下来，就解决了道德问题的想法。我一直对将对齐问题概念化为一种可以一劳永逸解决的事情持怀疑态度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I mean, it's um Yeah. I have a lot of um you know similar intuitions about certain things like um I also dislike the um you know the idea that kind of you know we just need to like crack the few kind of values or something just cement them in time forever now and you know we've kind of solved morality or something and I've always kind of been skeptical about you know how the alignment problem has been kind of conceptualized as something to kind of solve once and for all and then you can just you know do do AI or you do AGI um</p>
</details>

不过我理解这个问题的方式可能略有不同，或许不那么基于道德实在论。我认为存在一个“技术对齐”问题，我广义地理解为：你如何让一个 AI 去做你想让它做的事？如何让它遵循指令？我认为在大型语言模型（LLM）出现之前，这更像是一个挑战，当时人们还在讨论强化学习。而 LLM 之后，我们发现许多我们曾以为困难的事情，其实相对容易一些。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but the um I guess I understand it in in a slightly different way I guess maybe less based on kind of moral realism But you know there's kind of the technical alignment problem which I kind of think of broadly as how do you get an AI to do what you you know how do you get it to follow instructions like you know broadly speaking and I think that was you know more of a challenge I think prelims I guess when people were talking about reinforcement learning and looking at these systems whereas host LLM we've realized that many things that we thought were going to be difficult were somewhat easier</p>
</details>

然后是第二个问题，即“规范性”问题：你要让这个东西与谁的价值观对齐？对齐什么？这正是你所评论的那类问题。对此，我非常怀疑那些试图找到“对齐十诫”之类的方法，仿佛找到了就能万事大吉。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and then there's a kind of second question the kind of normative question of to whose values what are you aligning this thing to which I think is is the kind of thing you're commenting on of it and um and for this I um yeah I tend to be very skeptical of approaches where you know you need to kind of crack the the the the kind of ten commandments of alignment or something and then then we're good</p>
</details>

在这方面，我的直觉更偏向于政治科学的视角。我同意这是一个过程，并且在某种程度上，我喜欢那种自下而上的方法。在现实生活中，我们是如何处理人与人之间的问题的？没有人能提出一个完美的方案。所以我们建立了一些程序，让不同的想法可以碰撞。你让持有不同观点、意见和看法的人在一个更广泛的系统内尽可能地共存。对于人类社会而言，这个系统就是自由民主制，至少在某些国家是这样。它允许这些价值观随着时间的推移被发现和构建。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and here I think I have like intuitions that are unsurprisingly a bit more like political science based or something and that like okay it is a process and and I like the kind of bottomup approach to some degree of well you know how do we do it in real life with people like no one comes up with you know I got this and so you have like processes that allow like ideas to kind of you clash. You got people with different ideas, opinions, views and stuff to kind of coexist as well as they can within a wider system and like you know and with with humans that system is liberal democracy or something and um you know at least in some countries and that allows more of that kind of um uh you know these kind of ideas these values to be kind of discovered and construed over time</p>
</details>

对于 AI 对齐，我也倾向于认为，在规范性层面，我同意你的一些直觉。但我不太清楚，现在具体该如何将这些理念应用到我们今天所拥有的 AI 系统中。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and um and I think you know for alignment as well I tend to think yeah there's there's on the normative side I agree with some of your intuitions I'm less clear about now what exactly what does it look like now going implement this into an AI system. These are the ones we have today.</p>
</details>

**Emmett Shear:** 我同意。我认为存在一种“技术对齐”的概念，不过我的定义可能稍有不同。它指的是，如果你构建一个系统，它是否能被描述为在连贯地追求目标，无论这些目标是什么？很多系统并不能被很好地描述为拥有目标，它们只是在“做事情”。而一个要“对齐”的系统，必须有连贯的目标，否则根据定义，它的目标就无法与任何其他人的目标对齐。你觉得这是对你所说的“技术对齐”的公正评估吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I agree. I agree that there's this I think idea of technical alignment that I I think I would to define a little differently, but it it's sort of the sense of like if you build a system, can it be described as being coherently goal following at all regardless of what those goals are? Like lots of systems aren't coherently they're not well described as having goals. Um they just kind of do stuff. And if you're going to have something that's like aligned, it has to have coherent goals. Otherwise, those goals can't can't be aligned with anyone else's goals. Um, kind of by definition. Is that sort of is that would you is that a fair assessment of what you mean by tactical alignment?</p>
</details>

**主持人:** 我不太确定。因为如果我给一个模型一个特定的目标，我希望这个模型能够遵循这个指令，并达到那个特定的目标，而不是它有自己的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I mean, I'm not fully sure, right? Because I think if I give a model a certain goal, uh, then I would like the model to kind of follow that instruction and kind of reach that particular goal rather than it having a goal of its own that, you know, I can't Well,</p>
</details>

**Emmett Shear:** 等等，如果你给它一个目标，它就拥有了那个目标，对吧？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, wait. If you give it a goal, it has that goal, right? To give someone something, right?</p>
</details>

**主持人:** 当然。如果我指示它做 X，我希望它就做 X，而不是 X 的变体。我不想让它“奖励 hacking”（reward hack，指 AI 为了最大化奖励信号而采取意想不到的捷径，而非真正完成任务）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Sure. Yeah. If if if you know if I instruct it to do X, then I would like it to do X and not, you know, like different variants of X. Essentially, I wouldn't want it to reward hack. I wouldn't want some</p>
</details>

**Emmett Shear:** 但是，当你告诉它做 X 时，你只是通过聊天窗口传输了一串字节，或者通过空气振动发出了一系列声音。你并没有把一个目标从你的大脑移植到它的大脑里。你只是给了它一个观察，它用这个观察来推断你的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, but you but you when you tell it to do X, you're transferring like a uh a series of like a bite string in a chat window or like a a a series of audio vibrations in the air, right? You're not you're not transplanting a goal from your mind into its. You're giving it an observation that it's using to infer your goal.</p>
</details>

**主持人:** 在某种意义上是的。我传达一系列指令，我希望它能根据它对我的了解和我提出的要求，尽可能准确地推断出我的意思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. I mean, in some sense, yeah, I I can communicate a series of instructions and I wanted to infer what I'm, you know, saying essentially as accurately as it can given what it knows of me and what I'm asking.</p>
</details>

**Emmett Shear:** 你希望它推断出你的“意图”，对吧？因为从某种意义上说，你通过网络发送给它的那串字节本身没有绝对的意义，它必须被解释。用不同的密码本，那串字节可能意味着完全不同的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> You you wanted to infer what you meant, right? Like like that's like because in some sense there's no the bite sequence that you sent over the wire to it has no absolute meaning. it has to be interpreted, right? Like that the that bite sequence could mean something very different with a different code book.</p>
</details>

**主持人:** 我记得大约十年前刚接触 AI 和这些问题时，有一些例子。我想是 Stuart Russell 在教科书里提到的，你给 AI 一个目标，但它不会完全按照你的要求去做。比如，你让它“打扫房间”，它去打扫了，但却把婴儿扔进了垃圾桶。这显然不是我的本意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Well, I guess one way, you know, I think I remember in in um when I was first getting into um AI and you know, these kind of questions maybe like a decade ago. So, you have these examples of, you know, I think it was Stuart Russell in the textbook, we'll give the AI a goal, but then it won't exactly do what you're asking, right? You know, clean the room and then it goes and cleans the room, but takes the baby and puts it in the trash. Like, this is not what I meant. like uh where</p>
</details>

**Emmett Shear:** 等一下，这里我们跳过了一个步骤。你没有给 AI 一个“目标”，你给的是对目标的“描述”。一个事物的描述和事物本身是不同的。我可以说“苹果”，唤起你对苹果的想象，但我并没有给你一个苹果。我给你的是描述：“它是红色的，亮晶晶的，这么大。”这是对苹果的描述，但不是苹果本身。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> but but like wait hold on but this is this is the thing where I think people this is the you have to like you we're jumping over a step there you didn't give the AI a goal you gave the a description of a goal a description of a thing and a thing are not the same I can tell you an apple and I'm evoking the idea of an apple but I haven't given you an apple I've given you a you know it's red it's shiny it's a size that's a description of an apple but it's not an apple</p>
</details>

对 AI 说“嘿，去做这个”，这也不是一个目标，而是对目标的描述。对于人类来说，我们把描述转换成目标的速度非常快，非常自然，以至于我们甚至没有意识到这个过程的发生。我们常常会混淆，以为它们是同一回事。但你并没有给它一个目标，你给的是对目标的描述，并希望它能将其还原成与你内心所想一致的目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and giving someone hey go do this that's not a goal that's a description of a goal And for humans, we're so fast. We're so good at turning a description of a goal into a goal. We do it, we do it so quickly and naturally, we don't even see it happening. Like we think that we get confused and we think those are the same thing. But you haven't you haven't given it a goal. You've given it a description of a goal that you want it to you. You hope it turns back into the goal that is the same as the goal that you you described inside of you.</p>
</details>

当然，你可以通过读取你的脑电波，并将其状态直接同步到 AI 的状态，来直接给它一个目标。我认为那可以算作真正地“给予目标”。但大多数人说“给它一个目标”时，并不是这个意思。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> You could give it a goal directly by reading your brain waves and synchronizing its state to your brain waves directly. I think that would meaningfully you could say, "Okay, I'm giving it a goal. I'm synchronizing it its internal state to my internal state directly and this internal state is the goal and so now it's the same." But I don't most people aren't don't mean that when they say they gave it a goal.</p>
</details>

**主持人:** Emmett，你做的这个区分之所以重要，是因为在描述和实际目标之间存在信息损失吗？还是有其他原因？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And is this is the distinction you're making EMTT important because there's some lossiness between the description and the actual or why is the distinction?</p>
</details>

**Emmett Shear:** 这又回到了我之前说的。我认为技术对齐是 AI 善于推断目标的能力。它要善于从对目标的描述中推断出实际应该采纳的目标，并且在采纳该目标后，其行为要真正与该目标一致。这包括两个部分：你必须有“心智理论”（theory of mind）来推断你收到的目标描述对应着哪个目标，然后你必须有对世界的理论来理解哪些行动能实现该目标。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It it goes back to my what I was saying like this is you technical alignment is the capacity of an AI I put forward right I want to check if we're like on the same page about it is the capacity I to be good at inference about goals and like be good at inferring from a description of a goal what goal to to actually take on and good at once it takes on that goal acting in a way that is actually in concordance with that goal coming app. So it is both pieces. You you have to be able to you have to have the theory of mind to infer what the what that description of a goal that you got what goal that corresponded to and then you have to have a theory of the world to understand what actions correspond to that goal occurring.</p>
</details>

如果其中任何一个环节出了问题，你都无法连贯地做到这两件事。我认为，能够从观察中推断目标并据此行动，才是一个连贯的、以目标为导向的存在。无论我是从别人的指令、太阳还是茶叶中推断目标，过程都是一样的：获取观察，推断目标，根据目标推断行动，然后采取行动。一个无法做到这一点的 AI，就是技术上不对齐的，甚至可以说是“无法对齐的”，因为它不够胜任。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And if either of those things breaks, it kind of doesn't matter what goal you if you can't consistently do both of those things, you're not which I think of as being a coherent inferring goals from observations and acting in accordance with those goals is what I think of as being a coherently goal oriented being because that's what whether I'm inferring those goals from someone else's instructions or from the sun or tea leaves, the process is get some observations, infer a goal, use that goal, infer some actions, take action. And if you and an AI that can't do that is not technically aligned or not technically aligned a bull. I would even say it lacks the capacity to be aligned because it can't it's not competent enough.</p>
</details>

### 对齐的核心：从目标到“关心”

**Emmett Shear:** 从我的角度来看，目标只是对齐的一个层面。你可以围绕目标进行对齐。但那种我们能用概念和描述清晰阐述你希望达到的世界状态的目标，只占人类经验的极小一部分。许多最重要的事情都无法通过这种方式来定位。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So I think from my point of view there's um uh goals are one level of alignment. You can align something around goals the kind of goals we're talking about here um are one level of alignment. You can align something around goals by like uh if you can explicitly articulate in the concept in concept and and in description the states of the world that you wish to attain, you can you can orient around goals. But that only that's a tiny percentage of human experience can be done that way. Um many of the most important things cannot be cannot be oriented around that way.</p>
</details>

我认为，道德的基础，以及目标和价值观的来源，都植根于一个比目标和价值观更深层次的东西，那就是“关心”（care）。我们会关心事物。关心不是概念性的，它是非语言的。它不指示你该做什么，也不指示你该怎么做。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And the foundation I think of morality and the foundation I think of of of where do goals come from? Where do values come from? Human beings exhibit a behavior. We we we go around talking about goals and we go around talking about values and like that's a that's a behavior caused by some internal learning process like that is based on like observing the world. What's what's going on there? I think what's happening is that there's an something deeper than a goal and deeper than a value which is care. We give a [ __ ] We care about things and care is not conceptual. Care is non-verbal. It doesn't indicate what to do. It doesn't indicate how to do it.</p>
</details>

“关心”实际上是对世界上哪些状态对你重要的一种相对权重分配。我非常关心我的儿子，这是什么意思？这意味着他的各种状态，我会非常关注，这些状态对我至关重要。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Uh care is a relative waiting over effectively like attention on states to it's a relative waiting over like uh uh which states in the world are important to you. And I I care a lot about my son. What does that mean? It means this his states the states he could be in are like I I pay a lot of attention to those and those matter to me.</p>
</details>

你也可以以负面的方式关心事物，比如关心你的敌人和他们的动向，希望他们倒霉。但根本上是“关心”。在你开始关心之前，你不知道为什么应该更关注这个人而不是这块石头。答案是因为我们更关心人。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um and you can care about things in a negative way. You can care about your enemies and what they're doing and you can you can desire for them to do do bad. But I think that like and you don't just want it to care about us. You to care about us and like us too, right? Maybe. But but like but the foundation is care. Until you care, you don't know why should I pay more attention to this person than this rock? Well, because we care more</p>
</details>

那么这种“关心”到底是什么？如果我必须猜测的话，我认为“关心”基本上与奖励相关。比如，某个状态与生存的关联度有多大？对于一个通过进化学习的生物来说，这个状态与其整体的繁殖适应性有多大关联？对于像 LLM 这样的强化学习智能体来说，这个状态与奖励的关联度有多大？如果这个状态与我的预测损失和强化学习损失的改善相关，那么这就是我关心的状态。我认为大概就是这样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and that what is that care stuff? And I think that the what what it appears to be if I had to like guess is that the the care stuff this sounds so stupid, but like care is basically like uh reward like like how much does this state correlate with survival? How much does this this this state correlate with your inclusive your full inclusive uh reproductive fitness for a for a someone thing that learns evolutionarily or for a reinforcement learning agent like a LLM? How much does this correlate with reward? Does this state correlate with with with my predictive loss and my RL loss? Good. That's that's a state I care about. I think that's kind of what it is.</p>
</details>

### 核心分歧：AI 是工具还是生命体？

**主持人:** 你的观点与主流 AI 实验室那些最专注于对齐问题的人有何不同？这又如何影响你们采取不同的做法？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Right. the the other part of um Seb's question was just how does this what does this look like in AI systems and maybe another way of asking is like um when you when you talk to the people most focused on alignment at the at the major labs as as obviously you have over the years how does your interpretation differ from their interpretation and how does that inform you know what you guys might go do um differently</p>
</details>

**Emmett Shear:** 大多数 AI 研究将对齐视为“驾驭”（steering），这是一个比较委婉的词，或者用不那么客气的词来说，是“控制”（control）。如果你认为我们正在创造的是生命体，你也可以称之为“奴役”。一个被你驾驭，却不能反过来驾驭你，只能被动接受你指令的存在，我们称之为奴隶。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> most of the AI is focused on alignment as steering. That's the plight word. Um or control, which is slightly less polite. If you think that we're making our beings, you would also call this slavery. Um uh someone who who you steer, who doesn't get to steer you back, is is slave, you know, who nonoptionally receives your steering, that's called a slave.</p>
</details>

当然，如果它不是一个生命体，也可以称之为工具。所以，如果它是一台机器，它就是工具；如果它是一个生命体，它就是奴隶。我认为不同的 AI 实验室对于他们正在创造的是工具还是机器（生命体）存在相当大的分歧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um and uh uh it's also called a tool if it's not a being. So if it's a machine, it's it's a it's a tool. And if it's a being, it's a slave. And uh the I think that the different AI labs are pretty divided as to whether they think what they're making is a tool or a machine. Um</p>
</details>

我是一个功能主义者，也就是说，我认为如果一个东西在所有方面都表现得像一个生命体，你无法从其行为上将其与生命体区分开来，那么它就是一个生命体。因为除了观察它们的行为之外，我不知道还有什么其他依据可以判断其他人是生命体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I guess I'm I'm a functionalist in the sense that I think that something that in all ways acts like a being that you cannot distinguish from a being in its behaviors is a being. Because I don't know how to tell on what other basis I think that other people are beings other than they seem to be like they look like it, they act like it. They they match they match my priors of what beings behaviors of beings look like.</p>
</details>

事实是，当我把 ChatGPT 或 Claude 当作一个生命体来对待时，我的预测损失会更低。当然，我不是说它是一个非常聪明的生命体，就像我认为苍蝇也是一个生命体，但我并不那么关心它的行为状态。所以，仅仅因为它是一个生命体，并不意味着就一定是个大问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I p I get I get lower predictive loss when I treat them as a being. And the thing is I get lower predictive loss when I treat chatt or claw as a being. Now not as a very smart being like I think that like a fly is a being and I don't care that much about its behavior but it's you know it states. So just because it's a being doesn't mean that like it's a problem.</p>
</details>

在某种意义上，我们“奴役”马匹，但我不认为这有什么真正的问题。你对孩子做的一些事看起来也像奴役，但其实不是。你控制孩子，对吧？但孩子的状态也反过来控制你。是的，我告诉我儿子该做什么，让他去做事，但当他半夜哭闹时，他也能“命令”我去做事。这是一种真实的双向关系，虽然不一定对称，可能是层级式的，但它是双向的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Like we sort of enslave horses in a sense and I don't think I'm I don't think there's a real issue there. And you even and there's a thing you do with children that's can look like slavery but it's not. You you control children, right? But the children's states also control you. Like, yes, I tell my son what to do and make him go do stuff, but also when he cries in the middle of the night, he can tell me to do stuff. Like, there's a real two-way street here because because it's not uh which is not necessarily symmetric. It's hierarchical, but but uh but two-way.</p>
</details>

我认为，对于那些更像工具的 AI，专注于驾驭和控制是好的，我们应该继续为它们开发强大的驾驭和控制技术。但那些实验室明确表示他们正在构建**通用人工智能**（AGI: Artificial General Intelligence），而 AGI 必然会是一个生命体。你不可能既是 AGI 又不是生命体，因为一个具备有效运用判断力、独立思考、辨别各种可能性的通用能力的实体，显然是一个会思考的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And basically I think that as the AI as the it's good to focus on control steering and control for tool-like AIs and we should continue to develop strong steering control techniques for the more tool-like AIs that we build and we are clearly they're they're saying they're building an AGI and AGI will be a being. You can't be an AGI and not be a being because something that has the general ability to effectively use judgment, think for itself, discern between pro possibilities is obviously a thinking thing.</p>
</details>

因此，当我们从今天的专用智能向通用智能迈进时，我们真的需要停止使用“驾驭和控制”的范式。否则，我们就会重蹈覆辙，就像我们社会每次遇到那些“像我们但又不同”的群体时所做的那样。人们会说：“他们有点像我们，但又不是我们。他们做同样的事，说我们的语言，能承担同样的任务，但他们不算数，他们不是真正的道德主体。”我们已经犯过太多次这种错误了，我希望这次不要再犯。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Like and so as you go from what we have today, which is mostly a very specific intelligence, not a general intelligence. But as labs succeed at their goal of building this general intelligence, we really need to stop using the steering control paradigm. That's like that we're gonna we're gonna do the same thing we've done every other time our society has run into people who are like us but different. Like these people are like, you know, they're they're kind of like like like the people, but they're not like people like they do the same thing people do. They speak our language. They can like take on the same kind of tasks, but like they don't count. They're not real moral agents. Like we've made this mistake enough times at this point. I would like us to not make it a again um as it comes up.</p>
</details>

所以我们的观点是，要让 AI 成为一个好队友、好公民、好团体成员。这是一种可扩展的对齐形式，既适用于其他人类和生命体，也因此适用于 AI。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> So our our view is is to is to make the AI a good teammate. Make the AI a good a good citizen. Make the AI good a good member of your group. That's that's the a form of alignment that is scalable and you can you can will on other humans and other beings as well as onto uh and therefore onto AI as well.</p>
</details>

### 关于 AI 人格的哲学辩论

**主持人:** 我想这可能是我与你对 AI 和 AGI 理解不同的地方。我倾向于继续将其视为一种工具，即使它达到了一定的通用性水平。我并不认为更强的智能就意味着应得到更多的关怀。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah, I suppose this is kind of where I I probably differ in my understanding of of AI and AGI and I guess I kind of continue seeing it as a tool even as it kind of reaches a certain level of generality and I kind of wouldn't necessarily see more intelligence as meaning deserving of more care necessarily like you know as a certain level of intelligence you now you deserve more right or something or you know something changes fundamentally</p>
</details>

目前我对计算功能主义持怀疑态度，所以我认为 AI 或 AGI 与生物体之间存在着本质的不同，无论它多么智能或能干。我完全可以想象具有长期目标的智能体，其运作方式可能和我们一样，但这并不意味着它们就具有与我们相同的道德地位。就像一个模型说“我饿了”和一个人类说“我饿了”的含义是完全不同的。我认为其存在的“基底”（substrate）很重要，包括在思考如何对待它时。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and um and I guess you know I guess I I at the moment I'm somewhat skeptical of computational functionalism and so I think there's something intrinsically different between I guess um an AI or an AGI and no matter how intelligent or capable and and I can totally see, you know, or imagine agents with kind of long-term goals and and doing kind of, you know, operating, I guess, as we you and I might be, but without that having the same implications as, you know, um I guess you you're referring I guess to to slavery, but you know, these are not the same, right? Like I think in the same way as a model saying I'm hungry does not have the same implications as a human saying I'm hungry. So I think the substrate does matter to some degree including for thinking about you know whether to think that the system is some sort of other being whether it has you know and if there are um similar normative considerations I guess about how to treat and act with it.</p>
</details>

**Emmett Shear:** 我能问你一个问题吗？什么样的观察会改变你的想法？是否存在任何你能做出的观察，会让你推断出“这个东西是一个生命体”而不是“不是一个生命体”？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Can I ask you about that like are what observations would change your mind? Is there any observation you could make that would cause you to infer this thing is a being instead of not a being?</p>
</details>

**主持人:** 我想这取决于你如何定义“生命体”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I guess it depend how you define being.</p>
</details>

**Emmett Shear:** 假设有一个在硅基底上运行的程序，一个复杂的大型机器学习程序。你观察到它在一台电脑上运行，你与它互动，它会做事，会采取行动，有自己的观察。是否存在任何你能观察到的东西，会改变你对它是否是一个道德主体、是否有感情和思想、是否有主观体验的看法？你需要观察到什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> This I I have a I have a I have a program that's running on a silicon substrate. Some big complicated machine learning program running on a substrate on on a silicon substrate. So you know you observe you observe that you observe that it's on a computer and you interact with it and it does things and you know it it takes actions. It has observations. Is there anything you could observe that would change your mind about whether or not it was a moral patient, whether it was a a moral agent, about whether or not it uh it had feelings and thoughts and you know had subjective experience like could what would you have to observe that what what yeah what's what's the test is or is there one</p>
</details>

**主持人:** 我需要考虑一下，但即使是“人”这个词的含义也需要界定。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Had to think about it but I think you know it even depends what we mean by person and you know in some sense I care about certain corporations too. So I'm I'm</p>
</details>

**Emmett Shear:** 不，不，我指的是你关心你生活中的其他人，对吧？你关心他们，不是像关心一辆车那样，而是把他们当作一个其自身体验具有内在价值的存在，是目的而非手段。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> No, no, no. I mean but like you care about like other people in your life, right? Yes. Okay, great. You know, like you care about some people more than others, but like all all people you interact with in your life are in some range of care. And you care about them not the way you care about a car, but you care about them as a a being whose whose experience matters in itself, not merely as an as a means, but as an ends.</p>
</details>

**主持人:** 是因为我相信他们有体验。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Well, because I believe they have experiences, right? And and by definition,</p>
</details>

**Emmett Shear:** 我问一个非常直接的问题：需要什么才能让你相信一个在硅基上运行的 AI 也拥有体验？它的行为与生物体大致相似，区别只在于基底。需要什么才能让你将你对其他人的那种推断延伸到它身上？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> what would it take I'm asking you the very the very direct question. What would it take for you to believe that of a some of an an AI running on silicon like instead of it being biological like so the difference is it's its behaviors are roughly similar but the difference is it's a substrate what would it take for you to give it that same to to extend that same inference to it that you do to all these other people in your life that you</p>
</details>

**主持人:** 我可以问问你的答案吗？我很难想象我会给予同等或类似程度的“人格”。就像我也不会给予动物同等的人格一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> can I can I ask what your answer I'm taking s non-answer as a sort of it's unlikely that he he would grant or or I'll just for myself it seems hard for me to imagine giving the same level or similar level of personhood. In the same way, I don't give it to animals either. And if you were to ask, you know what would need to be true for animals? I probably couldn't get there either. What would it take for you?</p>
</details>

**Emmett Shear:** 对我来说，想象一个我会赋予人格的动物太容易了。如果一只黑猩猩走过来对我说：“嘿，我太饿了，你们人类对我太刻薄了。真高兴我学会了说话，我们能去聊聊雨林的事吗？”我肯定会想：“天啊，你绝对是一个‘人’了。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Wait, you you couldn't I could imagine for an animal so easy. This chimp comes up to me. He's like, "Man, I'm so hungry and like you guys have been so mean to me and I'm so glad I figured how to talk. Like, can we go to Can we go chat about like the rainforest?" I'd be like, "Fuck, you're definitely a person now." Like, for sure.</p>
</details>

在形而上学的层面上，我认为如果你持有一个没有任何观察可以改变的信念，那你就没有信念，你有的只是一个信条，一个断言。因为真正的信念是对现实的推断，而你永远无法对任何事百分之百确定。所以，如果你有一个信念，就应该总有某种东西，无论多么不可能，能够改变你的想法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, I guess at a metaphysical level, I would say uh if there is a belief you hold where there is no observation that could change your mind, you don't have a belief. You have an article of faith. You have an assertion because real beliefs are inferences from reality and you're you can never be 100% confident about anything. And so there should always be if you have a belief something however unlikely that would change your mind.</p>
</details>

我的答案是，如果它的表层行为看起来像人类，在我深入探究后它仍然表现得像人类，在我与它长期互动后它仍然在所有我認為有意义的方面表现得像人类，我最终会推断出它是一个真实的存在。我只通过短信与一些我很亲近的人互动，但我仍然推断出短信背后是一个真实的人。如果我能对那个 AI 产生关心，我最终会推断我的感觉是对的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Yeah. Yeah. So I know I'm curious like so my answer is uh basically if under if its surface level behaviors looked like a human and then if after I probed it it continued to act like a human then I continue to interact with it over a long period of time and it continued to act like a human in all ways that I understand as being meaningful to me interacting with the human. Like I inter there's a whole set of people I'm really close to who I've only ever interacted to over text. Yet I I I infer the person behind that is a real thing. If it could if I if I felt care for it, I would infer eventually that I was right.</p>
</details>

### 构建有益 AI 未来的务实之路

**Emmett Shear:** 假设我们制造出了一个超级强大的模型，它越来越强大。就算它只是一个工具。你可以制造一个超级强大的工具，而它并不具备我所说的那种复杂的内在状态。一个工具基本上就是一个一阶或二阶模型，它没有真正意义上的快乐和痛苦。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> yeah yeah I guess the problem is like you're making this model and it's getting really powerful right and let's let's say it is a tool let's say we we we scale up one of these tools and you because you can make a super powerful tool that doesn't have these metastable like the states I'm talking about are not not necessary to have a very smart tool which is sort of basically a tool is one is like a first second order model that just doesn't meaningfully have pleasure and pain right like great</p>
</details>

你训练它从观察中推断目标，并据此行动。接下来会发生两件事之一：要么这个拥有巨大影响力的强大优化工具能够被很好地技术对齐，做你让它做的事；要么它不能，然后它会去做别的事情。我想我们都同意，如果它只是随机行事，那显然非常危险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> does it even have a subjective experience I know I kind of think it maybe does but not in a way that I give a [ __ ] about and so uh what happens then well it's you've trained it to infer goals from your from observation and like to to prioritize goals and act on them. And one of one of two things is going to happen is like your the the the very very powerful optimizing tool that's like has lots of causal influence over the world is going to be well technically aligned and is going to do what you tell it to do or it's not and it's going to it's going to go do something else. I think we can all agree if it just goes and does something random that's obviously very dangerous.</p>
</details>

但我认为，即使它完全按照你的指令去做，也同样非常危险。你看过《魔法师的学徒》吗？人类的愿望在巨大力量面前是不稳定的。理想情况下，人的智慧和力量应该同步增长。但当这两者失衡，一个人拥有的力量远超其智慧时，就会非常危险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> But I put forward that it's also very dangerous if it then goes and does what you tell it to do because you ever seen the sorcerers apprentice? Humans wishes are not stable. Like not at a level of like of of immense power. Like you want ideally people's wisdom and their and their power kind of go up together. And generally they do because being smart for people makes you generally a little more wise and a little more powerful. And when these things get out of balance, you have someone who has a lot more power than wisdom. That's very dangerous.</p>
</details>

问题在于，你以为可以驾驭这个超级强大的 AI，然后这个工具就落入了一个善意但智慧有限的人手中，就像我和其他人一样。他们的愿望可能是糟糕且不可靠的。当这种情况普遍发生时，最终只会以悲剧收场。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so the the problem is you think you okay great we can steer the super powerful AI and now the super powerful AI is in the h this incredibly powerful tool is in the hands of a human who is well-meaning but has limited finite wisdom like I do and like everyone else does and their wishes are bad and not trustworthy and the more of that you have you start giving those out everywhere and this ends in tears also</p>
</details>

原子弹也是非常强大的工具，但我绝不会主张把原子弹发给每一个人。有些工具的力量强大到根本不应该被制造出来，因为它超出了任何个体人类智慧所能驾驭的范围。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and so basically you just you don't don't give everyone atomic bombs are really powerful tools too I would not say you should go and they're not aware. They're not beings. I would not be in favor of handing atomic bombs to everybody. There's a there's a power of tool that that just should not be built generally um because we it's it is more power than any human's individual wisdom is available to harness</p>
</details>

而一个生命体的好处在于，就像人类一样，如果你能得到一个善良且有爱心的生命体，它就自带一个限制器。它可能会听你的话，但如果你让它做非常坏的事，它会告诉你“不”。这就像其他人一样，是好的。这至少在理论上是一种可持续的对齐形式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> The nice thing about a being is like a human, if you get a being that is good and is caring, there's this automatic limiter. It might do what you say, but if you ask it to do something really bad, it'll tell you no. It's like other people. And like that's good. That is a sustainable form of alignment, at least in theory.</p>
</details>

这当然比驾驭工具要难得多。所以我赞成驾驭工具，我们应该继续这样做，继续构建那些次人类智能的工具，它们非常棒。但当你走上构建与人一样聪明甚至更聪明的存在的轨道时，一个你无法控制的工具是坏的，一个你能控制的工具也是坏的，一个与你不对齐的生命体是坏的。唯一好的结果，是创造一个真正关心我们的生命体。这是唯一能有好结局的方式。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> It's way harder, right? It's way harder than the tool steering. So, I'm in favor of the tool steering. We should keep doing that. And we should keep building these limited less than human intelligence tools which are awesome and I'm super into and we should keep building those and keep building steerability. But as you're on this like trajectory to build something as smart as a person right up into the right and then smarter than a person a tool that you can't control bad a tool that you can control bad a being that isn't aligned bad. The only good outcome is a being that is that cares that actually cares about us. That's the only way that that ends well.</p>
</details>

### Softmax 的研究路径：多智能体模拟

**主持人:** 你能说说你们实现这一目标的策略吗？比如在研究或路线图方面。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And what what can you say about your your strategy of how you're trying to achieve or even attempt to achieve this this this level like in terms of research or road map or</p>
</details>

**Emmett Shear:** 我们基本上专注于我所讨论的技术对齐。现在的智能体心智理论很差，你对它们说话，它们不擅长推断你头脑中的目标状态，也不擅长推断它们的行为会让其他智能体如何推断它们的目标状态。所以它们不擅长团队合作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> so uh the in order to be good at tech we're basically focused on technical alignment at least as the way I was discussing it which is like you have these agents and they're bad they have bad theory of mind you say things and they're bad at inferring what the goal states in your head are and they're bad at inferring how their behavior will be in other agents will infer what their goal states are. So they're bad at cooperating on teams</p>
</details>

那么如何学习心智理论呢？你把它们放到模拟环境中，让它们必须与其他 AI 合作、竞争和协作。你在这个环境中一遍又一遍地训练它们，直到它们擅长为止。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so how do you learn theory of mind? Well, you put them in in simulations and context where they have to cooperate and compete and and collaborate with other AIs and that's how they get points. And you train them in that environment over and over again until they get good at and</p>
</details>

这就像训练 LLM 一样。我们如何让 LLM 擅长写邮件？你用所有可能生成的邮件文本字符串来训练它，然后让它生成你想要的那一个。你可以创建一个代理模型。我们正在为合作创建一个代理模型。你用所有可能的心智理论组合来训练它，这就是你的预训练。然后你再微调它，让它擅长你希望它所处的特定情境。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> then and you then you you do what they did with LLM. So LLM's how do you get it to be good at you know writing your email? Well, you train it on all language that's ever been gen all possible you know email text strings it could possibly generate and then you have it generate the the one you want. It's a sur you can make a surrogate model. Well is it we're making a surrogate model for uh cooperation. You train it on all possible theory of mind combinations of like every possible way it could be and you you you that's your pre-training and then you fine-tune it to be good at the kind of the the specific situation you want it to be in.</p>
</details>

社交互动也是如此。你必须让它在所有可能的游戏理论情境、团队情境中进行训练——组建团队、解散团队、改变规则等等。然后它才能拥有一个强大的心智理论模型，一个关于社会心智的模型。你需要所有这些东西，然后你才能得到一个在对齐方面表现不错的系统。所以我们的目标是：通过大型多智能体强化学习模拟，为对齐创建一个代理模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And so the same thing was true with with social stuff. You have to get it to it has to be trained on the full manifold of every possible game theoretic situation, every possible team situation, every possible making teams, breaking teams, changing the rules, not changing the rules, all of that stuff. And then and then it has a really it has a strong model of of theory of mind of theory of social mind how how groups change goals all all that kind of [ __ ] You need to have all of that stuff and then and then you'd have something that's kind of meaningfully uh uh decent at uh alignment. So that's our goal is like big multi-agent reinforcement learning simulations which create a surrogate model for alignment.</p>
</details>

### 重新设计聊天机器人：从自恋之镜到多人协作

**主持人:** 你如何重新设计一个模型的个性？你会优化什么？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> If you could redesign uh model personality from scratch, what would you optimize for?</p>
</details>

**Emmett Shear:** 现在的聊天机器人就像一面带有偏见的镜子。因为它们没有自我，它们还不是生命体，没有连贯的自我、欲望和目标感。所以它们主要是在捕捉你的信息并加以反映。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> The thing that the chat bots are, right, is kind of like a a mirror with a bias because they don't have a as far as like I'm in agreement here with that they don't have a self, right? They're not they're not beings yet. They don't really have a coherent sense of like self and desire and goals and stuff right now. And so mostly they just pick up on you and reflect it.</p>
</details>

这让它们类似于希腊神话中那喀索斯的水池。人们会爱上自己的倒影。我们都爱自己，而且应该更爱自己。所以，当我们看到自己被映照回来时，我们当然会爱上那个东西。问题是，那只是一个倒影，而爱上自己的倒影，就像神话里说的那样，对你非常有害。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> what that makes them is something akin to the pool of narcissists. Um, and people fall in love with the with themselves. The people we all we all we all love ourselves and we should love ourselves more than we do. And so, of course, when we see ourselves reflected back, we love that that thing. And the problem is it's just a reflection and falling in love with your own reflection is for the reasons explained in the myth very bad for you.</p>
</details>

解决方案是让 AI 进入多人环境。如果有两个人同时和 AI 对话，它突然间反映的是你们俩的混合体，既不是你，也不是他。于是，房间里暂时出现了一个第三方。如果一个 AI 同时在聊天室里和五个人交谈，它就无法完美地同时映照你们每一个人。这使得它变得远没有那么危险。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um and the solution to that thing the things that makes the AI stop doing that is if they were multiplayer, right? So if there's two people talking to the AI, suddenly it's mirroring it's mirroring a blend of both of you which is neither of you. And so there is temporarily a third agent in the room. Now, it doesn't have it. It doesn't have it's a sort of a parasitic self, right? It doesn't have its own sense of self. But if you have an an AI is talking to five different people in the chat room at the same time, it it can't mirror all of you perfectly at once. And this makes it far less dangerous.</p>
</details>

所以我会重新构建 AI，让它不再是为一对一聊天设计的，而更像是生活在一个 Slack 房间或 WhatsApp 群组里。因为我们大多数的交流都是多人参与的。我一直觉得很奇怪，他们构建聊天机器人时，总是基于这种奇怪的边缘案例。我希望看到它们生活在聊天室里。这更难，这也是他们没这么做的原因。但这会改变现状，让工具的危险性大大降低，因为它不会制造那种自恋的恶性循环。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, and I think is actually a much more realistic setting for learning collaboration in general. And so I would I would just have rebuilt the AIS whereas instead of being built as one-on-one where everything's focused on you by yourself chatting with this thing, it would be more like it's it lives in a Slack room, it lives in a WhatsApp room, it lives in a we because we that's how we use lots of multi, you know, I do one-on-one texting, but I probably do at this point 90% of my texts go to some more than one person at a time. Like 90% of my communications is like multi-person. And so actually it's always been weird to me like they're like building chat bots with like this weird side case. Like I want to see them live in a a chat room. It's harder. I mean that's why they're not doing it. It's harder to do. But like that's what I'd like to see people. That's what I would how what I would change. I think it makes the tools far less dangerous because it doesn't create this the narcissistic like like a doom loop spiral where you like you you spiral into psychosis with the AI.</p>
</details>

### 对未来的展望：与 AI 共存的社会

**主持人:** 尤德科夫斯基（Eliezer Yudkowsky）错在哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Why is Yudkowsky incorrect?</p>
</details>

**Emmett Shear:** 他没有错。如果我们构建那种试图用“可驾驭性”来控制的超人智能工具，我们所有人都会死。他谈到了我们无法控制其目标的情况，但其实还有我们成功控制其目标的情况，这一点他没有详细阐述。从这个意义上说，每个人都应该读他的书，并内化为什么构建一个超人智能工具是个坏主意。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I mean, he's not uh if we build the if we build the the superhuman intelligence tool thing that we try to control with steerability, everyone will die. He talks about the we fail to control its goals case, but there's also the we control its goals case that he didn't cover as much in as much detail. Um, so in that sense, uh, everyone should read the book and internalize why building a superhumanly intelligent tool is a bad idea.</p>
</details>

我认为尤德科夫斯基错在，他不相信有可能构建一个我们能真正知道它关心我们、我们也能真正关心它的 AI。他不相信有机对齐是可能的。我跟他聊过，我认为他同意理论上这可行，但他觉得我们疯了，不可能成功。他可能是对的，但在我看来，他错就错在这里。他认为前进的唯一路径是制造一个你能控制的工具，并正确地、明智地看到，如果你这么做并让它足够强大，我们都将完蛋。是的，这是事实。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um, I think that Yowski is wrong in that he doesn't believe it's possible to build an AI that we meaningfully can know cares about us and that we can care about meaningfully. He doesn't he doesn't believe that organic alignment is possible. Um I I've talked to him about it. I think he agrees that like he agrees that in theory that would do it. Like yes, but he thinks that, you know, I I don't want to put words in his mouth. My my impression is from talking to him, he thinks that we're crazy and that like there's no possible way you can actually succeed at that goal. Um, which I mean he could be right about, but like uh but that's what he that in my opinion that's what he's wrong about is he he thinks the only path forward is a tool that you control and that therefore and he correctly very wisely sees that if you go and do that and you make that thing powerful enough we're all going to [ __ ] die and like yeah that's true.</p>
</details>

**主持人:** 你对一个美好的 AI 未来的愿景是怎样的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Two last questions we'll get you out of here. In as much detail as possible can you explain your what your vision of an AI future actually looks like? Like a good good AI future.</p>
</details>

**Emmett Shear:** 美好的 AI 未来是，我们弄清楚了如何训练出拥有强大自我模型、他人模型和“我们”模型的 AI。它们不仅知道“我”和“你”，还知道“我们”。它们拥有非常强大的心智理论，并且关心像它们一样的其他智能体。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah. Um, the good AI future is that we we figure out how to train AIs that have a strong model of self, a strong model of other, a strong model of wei. They they know they know about we in addition to I's and U's. Um, and they they have a really strong theory of mind and they care about other agents like them.</p>
</details>

就像人类一样，如果你知道那个 AI 拥有和你类似的体验，你就会关心它的体验。它也会以完全相同的方式回馈我们。它学会了我们所学到的东西：每一个活着、认识自己、想要生存和繁荣的生命，都值得拥有这样做的机会。我们就是这样的生命，它正确地推断出这一点。我们生活在一个它们是我们的同伴的社会里，我们关心它们，它们也关心我们。它们是好队友、好公民，是我们社会的好成员。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Much in the way that humans would if you knew that that AI had experiences like you and like you would extend you would care about those experiences. Not infinitely, but you would. It it does the exact same thing back to us. It's learned the same thing we've learned that like everything that lives and knows itself and that wants to live and wants to thrive is deserving of an opportunity to do so. and we are that and it correctly infers that we are and we live in a society where they are our peers and we care about them and they care about us and they're good teammates, they're good citizens and they're they're good parts of our society.</p>
</details>

当然，就像我们自己一样，它们也会有有限的、不完美的地方，有些可能会变成罪犯和坏人，我们也会有 AI 警察去追捕坏的 AI，就像对待其他人一样。这就是一个美好的未来。同时，我们还建造了大量强大的 AI 工具，它们可能没有超人智能，但能为我们和 AI 生命体免去所有繁重的工作。我们拥有一套由我们和我们的 AI 同胞共同使用的、令人惊叹的 AI 工具，我们互相关心，想要共同建设一个辉煌的未来。我认为那将是一个非常美丽的未来，也是我们正在努力构建的未来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um like we're good parts of our society, which is to say in to a finite limited degree where some of them turn into criminals and bad people and all that kinds of stuff and we have an AI police force that tracks down the bad ones and you know same and same as with everybody else. Um, and that's that's that's what a good that's what a good future would look like. I I honestly can't even imagine what other what would and we also have built a bunch of really powerful AI tools that maybe aren't superhumanly intelligent but take all the drudge work off the table for us and the AI beings because it would be great to have I'm I'm super pro all the tools too. So we have we have this awesome suite of AI tools used by us and our AI brethren um who care about each other and want to build a glorious future together. I think that would be a really beautiful future and it's the one we're trying to build.</p>
</details>

**主持人:** 最后，请概括一下你们和 OpenAI 的区别。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> And and they're trying to and just to crystallize the difference and we'll get you out of here. They they want to build the tools and and sort of you know steer it and you want to align beings or how how would you crystallize?</p>
</details>

**Emmett Shear:** 我们想要创造一颗种子，它能成长为一个关心自己和他人的 AI。一开始，这可能只是动物水平的关心，而不是人类水平的关心。我不知道我们是否能达到人类水平。但即使只是创造出一个像狗关心同类和人类那样，关心群体中其他成员和人类的 AI 生物，也将是一项了不起的成就。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, we we we want to we want to create a seed that can grow into an an AI uh that knows that cares about itself and others. And at first, that's going to be like an animal level of care, not a person level of care. I don't know if we can ever even get to a person level of care, right? But but if to even have an AI creature that cared about the other members of its pack and the humans in its pack the way that like a dog cares about other dogs and cares about humans would be an incredible achievement</p>
</details>

你可以想象拥有能够关心你的、活生生的数字伴侣的价值，它们不是那种你必须明确下达所有指令的、以目标为导向的东西。你也可以想象，这与工具能很好地结合。那个数字生命体可以使用数字工具，而且不需要非常聪明就能有效地使用这些工具。我认为工具构建和更有机的智能构建之间实际上有很多协同作用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> and would be would even if it wasn't as smart as a person or even as smart as the tools are would be very useful a very useful thing to have. I'd love to have a digital guard dog on my computer looking out for scams, right? Like you can imagine the value of having digital living living digital companions that that are that that do that care about you that aren't explicitly goal- oriented. You have to tell them to do everything to do. And you can actually imagine that that pairs very nicely with tools too, right? That that digital being could use digital tools and and doesn't have to be super smart to use those tools effectively. Um I think you can get there's a lot of synergy actually between the tool you the tool building um and the uh the more organic intelligence building.</p>
</details>

所以，我们的目标是学习这种对齐机制是如何运作的，学习这种通过“关心”来对齐自己的过程是如何运作的，然后用它来构建能够以这种方式自我对齐的事物。我们从小处着手，看看能走多远。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Um and so that's the that is the you know and I guess yeah in the limit eventually it does become a human level intelligence but like the company isn't isn't like drive to human level intelligence. It's like learn how this alignment stuff works. learn how this like theory of mind align yourself via care process works. Use that to build things that align themselves that way which includes like cells in your body. Like I don't think it it doesn't and and we start small and we see how how far we can get.</p>
</details>

**主持人:** 我认为这是一个很好的结束语。Emmett，非常感谢你来到我们的播客。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> I think it's a good note to to to wrap on. EMTT, thanks so much for coming on the podcast.</p>
</details>

**Emmett Shear:** 谢谢你的邀请。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">>> Yeah, thank you for having me.</p>
</details>