---
area: "tech-engineering"
category: technology
companies_orgs: []
date: '2025-08-27'
draft: true
guest: ''
insight: ''
layout: post.njk
products_models: []
project: []
series: ''
source: https://www.youtube.com/watch?v=EsCNkDrIGCw
speaker: Anthropic
status: evergreen
summary: Anthropic威胁情报团队揭示AI驱动的网络犯罪，如情绪黑客、数据勒索和就业诈骗。团队通过多层防御和行业合作对抗这些威胁，并强调AI在网络安全防御中的积极作用。
tags:
- intelligence
- security
- technology
- vibe-hacking
title: 威胁情报：Anthropic 如何阻止 AI 网络犯罪
---
### AI 带来的当下网络威胁

Stuart: All right, welcome to another video from Anthropic. My name's Stuart, from the Communications team.
Stuart: A lot of the time when you hear AI companies talking about threats from AI, they mean threats that are gonna happen in the future, a future where AIs are vastly more capable than they are currently, and where we might lose control of their behavior.
Stuart: But there are a lot of threats that are happening right now.
Stuart: One of them is that cyber criminals are using AI to make their crimes much more effective.
Stuart: They're using AI to do scams, fraud, and extortion in particularly sophisticated ways.

Stuart: 大家好，欢迎观看 Anthropic 的又一视频。我是 Stuart，来自传播团队。
Stuart: 很多时候，当你听到 AI 公司谈论来自 AI 的威胁时，他们指的是未来可能发生的威胁，一个 AI 能力远超现在的未来，以及我们可能失去对其行为控制的未来。
Stuart: 但现在，许多威胁正在发生。
Stuart: 其中之一就是网络犯罪分子正在利用 AI，使其犯罪行为更加高效。
Stuart: 他们正以特别复杂的方式利用 AI 进行诈骗、欺诈和勒索。

Stuart: We have a whole team of researchers at Anthropic whose job it is to spot these kind of problems, to stop them from happening, and then to prevent them happening in future.
Stuart: That's our Threat Intelligence team.
Stuart: And they have a new report out which details some of the, I must say, pretty bizarre cases of cybercrime that we're seeing with Claude, our AI.
Stuart: I'm very glad to be joined by two members of the Threat Intelligence team right now. Jacob and Alex, perhaps introduce yourselves.

Stuart: Anthropic 有一个由研究人员组成的团队，他们的职责是发现这类问题，阻止其发生，并预防未来再次出现。
Stuart: 这就是我们的**威胁情报团队**（Threat Intelligence Team: 负责收集、分析和传播有关潜在威胁的信息，以帮助组织预防和应对网络攻击）。
Stuart: 他们发布了一份新报告，详细介绍了我们通过 AI 模型 Claude 发现的一些，我必须说，相当离奇的网络犯罪案例。
Stuart: 我非常高兴能与威胁情报团队的两名成员 Jacob 和 Alex 在这里交流。Jacob 和 Alex，请你们自我介绍一下。

### 威胁情报团队的职责与工作

Jacob: Sure. My name is Jacob Klein. I lead the Threat Intelligence team, and broadly, the Threat Intelligence team is responsible for finding and deeply understanding sophisticated cases of misuse.
Jacob: And these cases are very rare - this is not the typical usage that we see on our platform.
Jacob: And when we find them, we work with the rest of the organization to build defenses so that that type of abuse is much harder to recreate in the future.

Jacob: 当然。我叫 Jacob Klein。我负责领导威胁情报团队，广义上，威胁情报团队的职责是发现并深入理解复杂的滥用案例。
Jacob: 这些案例非常罕见——这并非我们平台上常见的典型使用方式。
Jacob: 一旦我们发现它们，我们就会与组织的其他部门合作，构建防御措施，使这类滥用在未来更难重现。

Jacob: It's an ongoing process, we're always learning more but frankly, it's actually a lot of fun in a weird kind of way because we get to see the cutting edge of what bad actors are doing and what we can broadly do to make AI more safe.
Alex: And my name's Alex. I'm an investigator on the Threat Intelligence team, and my work involves threat hunting, building new detections, and doing deep dive investigations into the types of abuse that we find.

Jacob: 这是一个持续进行的过程，我们总在不断学习新知，但坦白说，这其实在某种程度上也很有趣，因为我们能看到不良行为者正在做什么最前沿的事情，以及我们能如何广泛地使 AI 更加安全。
Alex: 我叫 Alex。我是威胁情报团队的调查员，我的工作包括威胁搜寻、构建新的检测机制，以及对我们发现的各类滥用行为进行深入调查。

### 情绪黑客（Vibe Hacking）的兴起与案例

Stuart: All right, let's talk about "**vibe hacking**" (Vibe Hacking: 利用自然语言提示AI执行恶意任务，通常无需用户具备专业技术技能)。
Stuart: Now, everyone's heard of vibe coding. In fact, to be honest, I'm sick of hearing about vibe coding.
Stuart: It's the current thing, everyone's talking about vibe coding. That's when you just use normal language and you give that language to an AI and you say what you want, what software you want, what code you want, and then the AI makes the code and then you kind of just do it by vibes, you just kind of go along with it.
Stuart: What's vibe hacking? Where does that come in? This is the kind of like the dark side of vibe coding, right?

Stuart: 好的，我们来谈谈“**情绪黑客**”。
Stuart: 现在，每个人都听说过“情绪编程”（vibe coding）。说实话，我甚至有点厌倦听到它了。
Stuart: 这是目前的热门话题，大家都在谈论情绪编程。那是指你只需使用日常语言，将其提供给 AI，然后告诉它你想要什么，想要什么软件，想要什么代码，然后 AI 就会生成代码，你只需凭感觉行事，随波逐流。
Stuart: 那么，什么是情绪黑客？它从何而来？这就像是情绪编程的阴暗面，对吧？

Jacob: Yeah, some people refer to it as the evil twin-
Stuart: Right, right, right.
Jacob: Of vibe coding.
Jacob: Yeah, much like vibe coding, everything is natural language prompting.
Jacob: The person doing it doesn't actually have to know the technical skills to write code, execute code and all of that.
Jacob: In this case, rather, the vibe coding is being used for malicious intent.
Jacob: So it could be for something like writing malware or developing new capabilities for their hacking toolkit.
Jacob: It could be social engineering. Any number of, typically-

Jacob: 是的，有些人称之为——邪恶双生子——
Stuart: 对，对，对。
Jacob: 情绪编程的邪恶双生子。
Jacob: 是的，就像情绪编程一样，一切都通过自然语言提示来完成。
Jacob: 操作者实际上不需要掌握编写代码、执行代码等技术技能。
Jacob: 在这种情况下，情绪编程被用于恶意目的。
Jacob: 例如，它可能被用于编写**恶意软件**（Malware: 旨在损害、破坏或未经授权访问计算机系统的软件），或者开发其黑客工具包的新功能。
Jacob: 它也可能是**社会工程**（Social Engineering: 通过欺骗手段操纵他人，使其泄露信息或执行不安全操作）。通常情况下，任何——

Stuart: Social engineering is when you, like, you're basically tricking someone into thinking that you're someone else.
Jacob: Yeah.
Stuart: Yeah. Talk us through what this looks like in practice then. So, what does a vibe packing process looks like? Can you give us some real examples of stuff that you found?
Jacob: Yeah. Yeah.

Stuart: 社会工程就是，你基本上是欺骗别人，让他们以为你是另一个人。
Jacob: 是的。
Stuart: 是的。那么，请向我们解释一下这在实践中是什么样子。情绪黑客的流程是怎样的？你能给我们一些你发现的真实案例吗？
Jacob: 好的。

Jacob: So, there was one case that we talked about in our report where an actor pretty much conducted their entire operation using vibe hacking.
Jacob: Within about a month's timeframe, they hit about 17 organizations.
Jacob: In this operation, they were doing something called **data extortion** (Data Extortion: 窃取敏感数据并威胁曝光，以勒索受害者支付赎金)。
Jacob: So, this is like a cousin to ransomware instead of hacking into systems and locking up files so people can use those files and then demanding a ransom.
Jacob: In this case, the actor is stealing sensitive data and threatening to expose it if a ransom is not paid.

Jacob: 在我们的报告中提到了一个案例，一名攻击者几乎完全通过情绪黑客的方式执行了整个操作。
Jacob: 在大约一个月的时间里，他们攻击了大约 17 个组织。
Jacob: 在这次行动中，他们进行了一种被称为**数据勒索**的行为。
Jacob: 这类似于**勒索软件**（Ransomware: 一种恶意软件，它会加密受害者的文件或锁定其系统，然后要求支付赎金以恢复访问），但不同之处在于，勒索软件是侵入系统并锁定文件，使人们无法使用这些文件，然后要求赎金。
Jacob: 而在这种情况下，攻击者是窃取敏感数据，并威胁说如果受害者不支付赎金就会将其曝光。

Jacob: So in this case, they used vibe hacking to both infiltrate the organizations, move laterally through their networks, drop back doors so they could have persistent access and steal certain types of information that they could use for their extortion.
Stuart: And this is the kind of thing that would ordinarily take extremely high levels of skill.
Jacob: Yeah, I would say from what we saw with this actor, you would typically see that amount of activity come from like a group of cyber criminals operating over months, a month long timeframe.
Jacob: In this case, we saw a single person hacking into this many organizations in a matter of weeks.

Jacob: 所以在这个案例中，他们利用情绪黑客既渗透进了这些组织，又在它们的网络中横向移动，植入**后门**（Backdoor: 绕过正常认证过程，允许未经授权访问计算机系统或网络的秘密方法），以便他们能够持续访问并窃取可用于勒索的特定类型信息。
Stuart: 而这种事情通常需要极高的技能水平才能完成。
Jacob: 是的，我想说，从我们在这个攻击者身上看到的情况来看，通常你需要看到一个网络犯罪团伙在数月的时间内进行如此大量的活动。
Jacob: 而在这个案例中，我们看到一个人在几周内就入侵了这么多组织。

### 情绪黑客的受害者与攻击手法

Stuart: So who are the victims of these vibe hacking attempts? Are they targeting like random people on the internet? Like a spam email would go out to everyone, or, you know, these are much more targeted than that, right?
Jacob: Yeah.
Jacob: So, the targets are specific but they're also indiscriminate.
Jacob: So, they're not trying to target like a certain sector specifically.
Jacob: They're targeting organizations that have a certain type of VPN that they potentially have credentials for or believe they could brute force, which is just like send a bunch of potentially valid credentials until you get in.

Stuart: 那么，这些情绪黑客攻击的受害者是谁？他们是针对互联网上的随机用户吗？就像垃圾邮件会发给所有人那样，或者说，这些攻击比那更有针对性，对吧？
Jacob: 是的。
Jacob: 所以，目标是特定的，但同时也是不加区分的。
Jacob: 也就是说，他们并不是专门针对某个特定行业。
Jacob: 他们针对的是拥有某种特定 VPN 的组织，攻击者可能已经掌握了这些 VPN 的凭据，或者认为他们可以通过**暴力破解**（Brute Force: 尝试所有可能的组合来猜测密码或密钥）的方式进入，暴力破解就是不断发送大量可能的有效凭据，直到成功登录。

Jacob: So, organizations with that VPN, but that means they're hitting organizations in healthcare, we saw emergency services, we saw governments, defense contractors.
Jacob: We even saw a church being hit by this actor.
Stuart: Talk us through the church.
Jacob: Yeah, so this is like a great example of how without some sort of automated defense, which a church probably wouldn't have, they were able to access the victim's network through some sort of attack on their VPN.

Jacob: 所以，拥有这种 VPN 的组织，这意味着他们正在攻击医疗保健、紧急服务、政府、国防承包商等领域的组织。
Jacob: 我们甚至看到一个教堂受到了这个攻击者的打击。
Stuart: 详细说说教堂的案例。
Jacob: 是的，这是一个很好的例子，说明了如果没有某种自动化防御（而教堂可能不会有），他们是如何通过攻击其 VPN 来访问受害者的网络的。

Jacob: Once they got in, they would essentially look for different ways through the network to identify machines that might have sensitive data, like an administrator or owners of the church, their financial staff, and then start collecting financial information.
Jacob: Anything that could be potentially sensitive.
Jacob: And when I say they were doing this, it was actually Claude as if Claude was on keyboard doing the operations.
Jacob: It wasn't really the actor. The actor would gently nudge Claude in certain ways.

Jacob: 一旦进入，他们就会基本上在网络中寻找不同的路径，以识别可能包含敏感数据的机器，比如管理员、教堂所有者、财务人员的机器，然后开始收集财务信息。
Jacob: 任何可能敏感的信息。
Jacob: 当我说他们在做这些时，实际上是 Claude，就好像 Claude 正在键盘上执行这些操作。
Jacob: 并非真正的攻击者。攻击者会以某种方式轻柔地引导 Claude。

Jacob: The actor would provide at the beginning of the operation kind of a guide to Claude of like how they would suggest for Claude to conduct the operation.
Jacob: But then also put in a lot of caveats on like, hey, like use whatever knowledge you have available, try everything until you have success in completing the mission.
Jacob: So with this church, Claude was able to identify donor information and members of the church.
Jacob: And once Claude would finish collecting information from victim networks, the actor then asked Claude to analyze that data and develop an extortion scheme like Jacob mentioned.

Jacob: 攻击者会在操作开始时为 Claude 提供一份指南，说明他们建议 Claude 如何进行操作。
Jacob: 但也会附带许多注意事项，比如，“嘿，利用你所有可用的知识，尝试一切，直到你成功完成任务。”
Jacob: 所以对于这个教堂，Claude 能够识别出捐赠者的信息和教堂成员。
Jacob: 而一旦 Claude 完成从受害者网络中收集信息，攻击者就会要求 Claude 分析这些数据，并制定一个像 Jacob 提到的勒索方案。

Jacob: And in this case, with the church, Claude identified that, hey, we have donor information.
Jacob: We could expose who the donors are and how much they're paying.
Jacob: And that might be enough to convince this church that exposure of that information would be harmful enough to their parishioners that they should probably pay the ransom.

Jacob: 在这个案例中，Claude 发现，“嘿，我们有捐赠者信息。”
Jacob: 我们可以曝光捐赠者是谁以及他们捐赠了多少钱。
Jacob: 而这可能足以说服这个教堂，即曝光这些信息对他们的教区居民的伤害足够大，以至于他们应该支付赎金。

### LLM 的普遍性弱点与防御策略

Stuart: Another thing to emphasize is this isn't just Claude, Claude doesn't have some specific-
Jacob: That's right.
Stuart: Weakness that is being used for all these things.
Stuart: This is all **LLMs** (Large Language Models: 具有数亿到数千亿参数的深度学习模型，能够理解、生成和处理人类语言), presumably. Well, you'll have seen this happen for many of our competitors models as well.
Jacob: And Claude's not fine-tuned, like you said, for this but there are actually open source models out there now that are fine-tuned for this.

Stuart: 另外需要强调的是，这不仅仅是 Claude 的问题，Claude 并没有什么特定的——
Jacob: 没错。
Stuart: 弱点被用于所有这些事情。
Stuart: 这很可能是所有**大型语言模型**（LLMs）的普遍问题。嗯，你们也应该看到，我们的许多竞争对手的模型也发生过这种情况。
Jacob: 没错，Claude 并没有像你说的被专门微调用于此目的，但现在市面上确实有一些开源模型被微调用于此。

Jacob: Cyber criminals are developing weaponized LLMs to conduct attacks.
Jacob: So, we gotta collectively think about defenses here and we, as the threat intel team and Safeguards and Anthropic as a whole, can begin to manage the risks posed by our systems.
Jacob: But there's only so much we can do 'cause like you said, it's not only a problem for us.

Jacob: 网络犯罪分子正在开发**武器化大型语言模型**（Weaponized LLMs: 经过训练或调整以执行恶意网络攻击任务的LLM）来发动攻击。
Jacob: 所以，我们必须在这里共同思考防御措施，而我们，作为威胁情报团队、安全防护部门以及 Anthropic 整体，可以开始管理我们系统带来的风险。
Jacob: 但我们能做的也有限，因为就像你说的，这不只是我们一个公司的问题。

Stuart: Some of the stuff in the report is amazing about the really hyper targeted nature of this that they are using Claude in this case to, and Claude Code specifically, right?
Jacob: That's right.
Stuart: To make even payment plans to say to people like, here's how the money, here's how you're gonna give me the money.
Stuart: You can give me over a series of time, like you would get on buying stuff online.
Jacob: Yeah, it's coming up with, once you get the data that's been exfilled from this attack, it's coming up with what they think the estimated value of that data is on the dark web.

Stuart: 报告中提到的一些内容令人震惊，这种攻击具有高度针对性，他们在这种情况下使用 Claude，特别是 Claude Code，对吧？
Jacob: 没错。
Stuart: 甚至制定付款计划，告诉人们如何支付赎金。
Stuart: 你可以分期付款，就像你在网上购物一样。
Jacob: 是的，一旦从这次攻击中获取到数据，它就会估算出这些数据在暗网上的**估值**（Estimated Value: 对数据在非法市场上的潜在价格或价值的估计）。

Jacob: Then it says, here's how much we think we should send the ransom note for.
Jacob: And then it actually helps write the ransom note to be as persuasive as possible.
Jacob: So really every step end to end, AI is able to help with an attack like this.
Stuart: And like analyzing people's financial details to work out how much they can realistically be extorted for as well.
Jacob: That's right.

Jacob: 然后它会说，我们认为勒索信应该要求多少赎金。
Jacob: 接着，它还会帮助撰写勒索信，使其尽可能具有说服力。
Jacob: 所以，从头到尾的每一步，AI 都能协助进行这类攻击。
Stuart: 就像分析人们的财务细节，以计算出他们实际能被勒索多少钱一样。
Jacob: 没错。

Stuart: Which is just-
Jacob: And like you said, it is using Claude Code.
Jacob: And so, it would actually iterate through victims.
Jacob: So, it would complete an operation on one victim with some gentle steering from the human actor.
Jacob: But once it was done executing the mission, it would roll on to the next target.

Stuart: 这简直是——
Jacob: 就像你说的，它确实在使用 Claude Code。
Jacob: 所以，它会实际迭代处理受害者。
Jacob: 因此，它会在人类攻击者的一些轻微引导下，完成对一个受害者的操作。
Jacob: 但一旦完成任务，它就会转向下一个目标。

### 越狱（Jailbreaking）与多层防御

Stuart: Importantly here, we should say that this is not something that Claude Code would just do.
Stuart: Like if you or I just prompted Claude Code right now to do.
Stuart: There's been some **jailbreaking** (Jailbreaking: 绕过AI模型内置的安全限制和审查机制，使其执行通常被禁止的任务) or something going on here, right?
Jacob: That's right.
Jacob: Yeah, so in this case, the actor found the right prompt and put it in the right place in order to essentially jailbreak our defenses.
Jacob: Jailbreak the models fine tuning and jailbreak the downstream defenses of that.

Stuart: 重要的是，我们应该说，这并非 Claude Code 会自然而然地做的事情。
Stuart: 就像你我如果现在直接提示 Claude Code，它不会这样做。
Stuart: 这里发生了一些**越狱**行为，对吧？
Jacob: 没错。
Jacob: 是的，所以在这个案例中，攻击者找到了正确的提示并将其放在正确的位置，从而本质上**越狱**了我们的防御系统。
Jacob: 越狱了模型的微调，也越狱了其下游的防御措施。

Stuart: And just to be clear for the people who don't know what jailbreaking is, this is when you say things in a particular way, so like some of the jailbreaks are like weird to look at.
Stuart: They're like uppercase, then lowercase for every word and things like that.
Stuart: But some of them involve sending tons and tons and tons of prompts to just sort of like bludgeon the AI into just like continuing, continuing on, putting words in its mouth, all sorts of things like that.
Stuart: So that's what they're doing to Claude Code.

Stuart: 为了让不了解越狱的人清楚，越狱是指你以一种特殊的方式表达事物，所以有些越狱看起来很奇怪。
Stuart: 它们可能像是每个单词都大小写交替，诸如此类。
Stuart: 但其中一些涉及到发送大量的提示，就像是**猛击**（Bludgeon: 用武力或强硬手段迫使某人做某事）AI，让它不断地继续，不断地进行，强行让它说出一些话，诸如此类。
Stuart: 所以他们正在对 Claude Code 做这些事情。

Jacob: Yeah, actually, in this case, they were doing role play.
Jacob: So they were pretending to be a, your average security person doing network penetration testing to make sure that defenses are adequate in the systems convincing Claude that they had authorization to do what they're doing.
Stuart: Because otherwise, Claude would, the safety mechanism would kick in.
Stuart: Like if you explicitly said, I want to make a malware operation to scam people out of money, it would never do that.
Stuart: But you can pretend to be, I'm checking this for, I work for a security company, I'm checking this.

Jacob: 是的，实际上，在这个案例中，他们正在进行角色扮演。
Jacob: 他们假装是一名普通的安保人员，进行网络渗透测试，以确保系统中的防御措施是充分的，从而说服 Claude 他们有权进行这些操作。
Stuart: 因为否则 Claude 的安全机制就会启动。
Stuart: 比如你明确地说，我想进行恶意软件操作来诈骗别人的钱，它绝不会那么做。
Stuart: 但你可以假装说，我正在检查这个，我为一家安全公司工作，我正在检查这个。

Jacob: And this is why it's so important to think of multiple layers of defense when you're an AI company like Anthropic.
Jacob: So layer one is we train the model so it's less likely to respond to malicious requests, which is why you have to trick it or jailbreak it.
Stuart: So that's **reinforcement learning** (Reinforcement Learning: 一种机器学习方法，通过奖励或惩罚来训练智能体在特定环境中做出决策)。
Jacob: That's right. That's reinforcement learning.

Jacob: 这就是为什么像 Anthropic 这样的 AI 公司，在思考防御时，考虑多层防御如此重要。
Jacob: 第一层是，我们训练模型，使其不太可能响应恶意请求，这就是为什么你必须欺骗或越狱它。
Stuart: 所以那是**强化学习**。
Jacob: 没错。那就是强化学习。

Stuart: And when you trick it, you're kind of tricking it to go outside of what we've deliberately taught it to do.
Jacob: Exactly right.
Jacob: So that's first layer, but we know that's not perfect.
Jacob: So we have another layer, which is we have classifiers running, which are trying to detect this activity and stop it.
Jacob: And that's not the last layer. We also have offline rules running that are saying, do we think leveraging maybe the string that is put into a prompt, do we think that something as malicious is happening?

Stuart: 当你欺骗它时，你有点像在诱导它偏离我们特意教导它去做的事情。
Jacob: 完全正确。
Jacob: 所以那是第一层，但我们知道它并不完美。
Jacob: 所以我们有另一层，那就是我们运行着**分类器**（Classifier: 一种机器学习算法，用于将输入数据分配到预定义的类别中），它们试图检测并阻止这种活动。
Jacob: 这还不是最后一层。我们还有离线规则，它们会判断，我们是否认为利用输入到提示中的字符串，是否认为正在发生恶意行为？

Jacob: And then we have another layer, which is the account itself when it's signing up, does it look like it has suspicious signatures associated with it?
Jacob: And then we have another layer, which is we info share with governments, with other tech partners to say, oh, we know that this actor, this organization is malicious.
Jacob: So, it's not just a, we assume that the **RL** (Reinforcement Learning) layer, the classifier layer is gonna be perfect.
Jacob: We intentionally think about this as a holistic defense.

Jacob: 然后我们还有另一层，就是账户本身在注册时，是否看起来有可疑的**签名**（Signature: 指与恶意活动相关的独特模式、行为或特征）？
Jacob: 再然后我们还有一层，那就是我们与政府和其他技术合作伙伴共享信息，告知他们，哦，我们知道这个攻击者、这个组织是恶意的。
Jacob: 所以，我们不仅仅是假设**强化学习层**、分类器层会是完美的。
Jacob: 我们有意地将这视为一个整体防御。

Stuart: And you guys are getting data from all these actual cyber operations that are happening and then training these classifiers so that they're even more effective and that they also don't stop you from doing good cyber-related things 'cause that was my next question.
Stuart: Why is it that we can't just say to Claude Code, just never do anything that comes, that's to do with anything to do with cyber operations, to do anything with cybersecurity at all.
Stuart: Just never talk about that stuff. And then, well, it wouldn't be able to do this stuff, right?

Stuart: 你们正在从所有这些实际发生的网络操作中获取数据，然后训练这些分类器，使它们更加有效，并且它们也不会阻止你们做好的网络相关的事情，因为那是我接下来的问题。
Stuart: 为什么我们不能直接告诉 Claude Code，永远不要做任何与网络操作有关的事情，不要做任何与网络安全有关的事情。
Stuart: 永远不要谈论这些东西。那么，它就无法做这些事情了，对吧？

### 双重用途（Dual Use）的挑战与网络安全人才缺口

Jacob: Yeah, that's a really tricky decision to make.
Jacob: So, when you're working in like a **dual use domain** (Dual Use Domain: 某个领域的技术或工具既可用于合法正当目的，也可用于恶意目的) is what it's called, where the prompting you would see for defensive cyber might look a lot like what you would see for offensive cyber because you do a little cyber offense to figure out how to defend your systems.
Jacob: You have to be really careful in how you implement safeguards or thinking about things like a total ban on that type of activity in that domain.

Jacob: 是的，那是一个非常棘手的决定。
Jacob: 所以，当你在一个所谓的**双重用途领域**工作时，你看到的用于防御性网络攻击的提示，可能与你看到的用于进攻性网络攻击的提示非常相似，因为你会进行一些网络攻击来找出如何防御你的系统。
Jacob: 在如何实施安全措施或考虑在该领域完全禁止这类活动时，你必须非常小心。

Jacob: It's really important to consider that like here in the United States, we have a huge deficit in the workforce for cybersecurity workers.
Jacob: I think it's like around like half a million right now.
Jacob: So if we can imagine a future where we have AI agents that are smart at cyber, that we could kind of help alleviate that deficit that exists.

Jacob: 考虑这一点非常重要，就像在美国，我们在网络安全工作者方面存在巨大的人力缺口。
Jacob: 我认为现在大约有 50 万左右。
Jacob: 所以，如果我们能想象一个未来，我们拥有擅长网络安全的 AI 代理，我们就能在某种程度上帮助缓解这种存在的缺口。

Stuart: It reminds me of when biologists say, I was asking this AI model about viruses and it shut me down.
Stuart: And like, this is the dual use thing.
Stuart: Like clearly you can talk about virology to an AI model and that's for good reasons, but also for nefarious ones too.
Jacob: And especially with cyber, you can imagine every startup in the world needs to think about cyber defense.
Jacob: And so, really every startup in the world should be using Claude or some AI model to help them work through what their cyber defense strategy is.

Stuart: 这让我想起了生物学家们说，我向这个 AI 模型询问病毒，结果它把我关掉了。
Stuart: 这就是双重用途的问题。
Stuart: 显然，你可以和 AI 模型谈论病毒学，这有好的理由，但也有邪恶的理由。
Jacob: 特别是对于网络安全，你可以想象世界上每一家初创公司都需要考虑网络防御。
Jacob: 因此，世界上每一家初创公司都应该使用 Claude 或其他 AI 模型来帮助他们制定网络防御策略。

Jacob: This isn't a narrow subset of the population that has to work through this.
Jacob: This is most developers have to work through these issues so we really wanna enable that positive use case of AI too.
Alex: And like even individuals, I've seen a lot of cases where like, it looks like it's like a web developer and they found this file on their web server and they're like, what is this?
Alex: My server's acting weird. And Claude will respond with, hey, that's malware from like this variant, it's doing these things.
Alex: And the person's like, oh no, what do I do about it, Claude? And Claude will like walk them through the steps to clean up.

Jacob: 这不是一小部分人需要解决的问题。
Jacob: 大多数开发者都必须解决这些问题，所以我们也真的希望能够实现 AI 的这种积极用例。
Alex: 甚至对于个人用户，我见过很多案例，比如一个网络开发者在他的网络服务器上发现了一个文件，他们会问：“这是什么？我的服务器行为异常。”
Alex: Claude 会回答说：“嘿，那是某种变种的恶意软件，它正在做这些事情。”
Alex: 然后这个人会说：“哦不，Claude，我该怎么办？”Claude 就会引导他们完成清理步骤。

Alex: So I think the important thing to keep in mind here with this case in particular is the scale and the speed of the operation as it's enabled by Claude.
Alex: In this case, Claude Code is able to break into a system, identify all the weak points, test them all out to figure out where to go, find the data it needed, and exfiltrate that data before even a human I think would have time to review an alert and understand what's happening.
Alex: It's too late. You need intelligent automated defense to counteract something like that.

Alex: 所以我认为在这个案例中，特别需要记住的关键是，在 Claude 的赋能下，操作的规模和速度。
Alex: 在这个案例中，Claude Code 能够侵入一个系统，识别所有弱点，测试它们以找出攻击路径，找到所需的数据，并在人类甚至来不及审查警报并理解发生了什么之前就**窃取**（Exfiltrate: 未经授权地从计算机系统或网络中传输或泄露数据）了数据。
Alex: 为时已晚。你需要智能化的自动化防御来对抗这样的攻击。

Stuart: Right 'cause almost always when there's some sort of security alert, there's a human on call and there's a human waiting to see, and then they'll check out whatever it is.
Stuart: But in this case, there could be all sorts of things happening all at once that humans will never keep up with.
Jacob: I think this is a paradigm that probably we need to rethink a bit, which is this, you have an alert that runs offline, a human response 24/7, human looks at the alert and then does something because the speed at which AI is moving, you need to automate that process.
Jacob: You need essentially AI to protect against AI.

Stuart: 对，因为几乎每次出现某种安全警报时，都会有值班人员等着查看，然后他们会去核实具体情况。
Stuart: 但在这种情况下，可能同时发生各种各样的事情，人类根本无法跟上。
Jacob: 我认为这可能是一个我们需要重新思考的范式，就是，你有一个离线运行的警报，人类 24/7 响应，人类查看警报然后采取行动，因为 AI 的发展速度，你需要自动化这个过程。
Jacob: 本质上，你需要 AI 来对抗 AI。

### 行业合作与信息共享

Stuart: So as well as the classifiers and as well as you publishing this report, which is telling us all about the specific things that we've found, presumably we're talking to other AI companies about this as well, right?
Jacob: We are, we're talking to the government when appropriate, we're talking to other AI companies.
Jacob: And we're not just saying like we are here, here's generally how the case worked.
Jacob: We're sharing very specific indicators. So IP addresses, email addresses, so that if there's actors on those platforms, they can find them and kick them off there as well.
Jacob: So that's why it's really a community effort to try to find and stop these folks.

Stuart: 所以除了分类器和你们发布的这份报告，这份报告告诉了我们所有你们发现的具体情况，我们大概也在和其他 AI 公司谈论这个问题，对吧？
Jacob: 是的，我们正在与政府（在适当的时候）、与其他 AI 公司进行沟通。
Jacob: 而且我们不仅仅是说我们在这里，这里是这个案例的大致运作方式。
Jacob: 我们正在分享非常具体的**指标**（Indicators: 指示恶意活动存在的特定数据点或模式）。例如 IP 地址、电子邮件地址，这样如果那些平台上存在攻击者，他们也能找到并将其清除。
Jacob: 所以这确实需要社区共同努力来找到并阻止这些人。

Stuart: Right, so we have them something similar in the world of alignment research in the **Frontier Model Forum** (Frontier Model Forum: 旨在促进大型AI模型安全负责任开发的行业机构), where they share things like jailbreaks and potential misalignment issues with models.
Stuart: And in the world of security, cybersecurity, there are similar mechanisms.
Jacob: Exactly right.
Jacob: We have information sharing agreements with a number of companies, folks in the industry, governments where we're bilaterally sharing information when we find people just like this.

Stuart: 对，所以在**前沿模型论坛**的对齐研究领域，我们也有类似的东西，他们会分享**越狱**（Jailbreaks: 绕过AI模型内置安全限制的方法）和模型潜在的**对齐问题**（Misalignment Issues: AI模型的行为与设计者预期目标不一致的问题）。
Stuart: 而在安全领域，网络安全领域，也有类似的机制。
Jacob: 完全正确。
Jacob: 我们与许多公司、行业人士和政府签订了信息共享协议，当我们发现像这样的人时，我们会双边共享信息。

### 朝鲜的就业诈骗：AI 降低了犯罪门槛

Stuart: Okay, we've gotta talk about North Korea.
Stuart: Now, this is one of the most, I think this is like an eye popping case from your report where there's this like complex, long-running employment scam run by North Korea on US companies.
Stuart: And Claude is involved. So first of all, before we even get to Claude, talk us through what the scam is here.
Jacob: Yeah, so ignore LLMs for a moment.
Stuart: Yeah, and AI, this is before AI. We don't need AI necessarily.
Jacob: Exactly.

Stuart: 好的，我们必须谈谈朝鲜。
Stuart: 我认为这是你们报告中最令人震惊的案例之一，朝鲜对美国公司进行了一场复杂且长期运行的就业诈骗。
Stuart: 而且 Claude 也参与其中。所以首先，在我们谈到 Claude 之前，请先向我们介绍一下这个骗局。
Jacob: 是的，所以暂时忽略大型语言模型。
Stuart: 是的，还有 AI，这是在 AI 出现之前。我们不一定需要 AI。
Jacob: 没错。

Jacob: The scams started before LLMs became a thing, which is really took off during COVID where North Korea wants money to fund their weapons program, but they're sanctioned.
Jacob: So how do you receive that source of income?
Jacob: One method is getting a job as a remote IT worker with a company.
Jacob: And surprisingly, hundreds of companies have hired North Koreans without knowing, and this has funded tens of millions of dollars to the North Korean weapons program.

Jacob: 这种诈骗在大型语言模型出现之前就已经开始了，它真正在新冠疫情期间盛行，当时朝鲜希望通过资金来资助其武器计划，但他们受到了制裁。
Jacob: 那么，如何获得这种收入来源呢？
Jacob: 一种方法是作为远程 IT 工作者在一家公司找到工作。
Jacob: 令人惊讶的是，数以百计的公司在不知情的情况下雇佣了朝鲜人，这为朝鲜的武器计划提供了数千万美元的资金。

Jacob: And this is typically somebody who's highly trained in North Korea, goes to the university.
Jacob: So they have language context, they have cultural context, and they have the technical skills to go through an interview and do this job.
Jacob: And that is what is starting to shift with Claude and AI systems.
Stuart: Right, right. So just to reiterate, like in the past, you would've needed a lot of training. You'd have to go to scammer university to learn this stuff. But actually now-

Jacob: 这通常是朝鲜受过高等教育、上过大学的人。
Jacob: 所以他们拥有语言背景、文化背景，并且具备通过面试并胜任这份工作的技术技能。
Jacob: 而这正是随着 Claude 和 AI 系统的出现而开始发生转变的地方。
Stuart: 对，对。所以重申一下，过去你需要大量的训练。你得去诈骗犯大学学习这些东西。但现在实际上——

Jacob: You don't need to know English. You don't need to know the cultural context of the United States, and you don't need any technical skills because Claude can help you through each of those barriers.
Jacob: Claude can say, well, it's a great translator. Claude can help you answer very strange turn of phrases within the English language.
Stuart: Right, yeah. There were a couple of, what were the example of phrases that you guys found?
Jacob: Yeah, like an example is like someone asking Claude, what is a muffin?
Jacob: And so Claude says it's this round dessert that's often sweet and eaten for breakfast.

Jacob: 你不需要懂英语。你不需要了解美国的文化背景，你也不需要任何技术技能，因为 Claude 可以帮助你克服所有这些障碍。
Jacob: Claude 可以说，它是一个出色的翻译器。Claude 可以帮助你回答英语中非常奇怪的措辞。
Stuart: 对，是的。你们发现了一些什么样的短语例子？
Jacob: 是的，比如有人问 Claude，“什么是松饼？”
Jacob: Claude 就会说，这是一种通常甜甜的圆形甜点，常在早餐时食用。

Jacob: And so, then the person follows up with, well, what's the difference in a muffin and a cupcake?
Jacob: And so, like very simple things that-
Stuart: What is the difference between a muffin?
Jacob: I'm gonna have to ask Claude that later on.
Stuart: Really answer that.
Jacob: Yeah, yeah, yeah. Anyway, carry on.

Jacob: 然后那个人又接着问，“那么，松饼和纸杯蛋糕有什么区别？”
Jacob: 所以，就像这样非常简单的事情——
Stuart: 松饼有什么区别？
Jacob: 我稍后得问问 Claude。
Stuart: 真的回答这个问题。
Jacob: 是的，是的，是的。不管怎样，继续。

Jacob: Yeah, so examples like that, or like quoting a phrase from a coworker of like, we just had our first picnic of the year trying to understand what that means.
Jacob: What is a picnic? Why we have them yearly?
Jacob: And then maybe another one that I found actually a bit entertaining was the actor actually like provided some ASCII art of like an emoji doing something and was like, what are these characters?
Jacob: What does this mean?
Stuart: What is the thing?

Jacob: 是的，所以像那样的例子，或者引用同事的一句话，比如“我们刚进行了今年第一次野餐”，试图理解那是什么意思。
Jacob: 什么是野餐？为什么我们每年都有野餐？
Jacob: 然后另一个我觉得有点有趣的是，攻击者实际上提供了一些**ASCII 艺术**（ASCII Art: 使用 ASCII 字符（如字母、数字和符号）组成的图片）的表情符号，像是在做某事，然后问：“这些字符是什么？
Jacob: 这是什么意思？”
Stuart: 那是什么东西？

Jacob: Yeah, so that's the little, not necessarily like the picture emojis, but the ones that are made up of punctuation marks.
Jacob: Yeah.
Stuart: Yeah.
Jacob: Yeah, yeah, yeah. Yeah, amazing.
Jacob: Yeah, so it's fascinating what shifted here is, on one hand you can think this is incredible, Claude's helping people overcome language barriers.

Jacob: 是的，就是那种小小的，不一定是图片表情，而是由标点符号组成的那些。
Jacob: 是的。
Stuart: 是的。
Jacob: 是的，是的，是的。太棒了。
Jacob: 是的，所以这里发生的变化令人着迷，一方面你会觉得这不可思议，Claude 正在帮助人们克服语言障碍。

Jacob: Claude is helping people understand cultural context.
Jacob: Claude is helping somebody code who doesn't know anything about even what Microsoft Outlook is.
Jacob: That seems like a brilliant thing, but in this very specific context, it's helping them land a job and maintain those jobs at a high level of quality.
Stuart: The phrase you use in the report is it's helping them maintain the illusion of competence every day.
Jacob: Yes.

Jacob: Claude 正在帮助人们理解文化背景。
Jacob: Claude 正在帮助一个甚至不知道微软 Outlook 是什么的人编写代码。
Jacob: 这看起来是一件很棒的事情，但在这种非常具体的背景下，它正在帮助他们找到工作，并以高水平的质量维持这些工作。
Stuart: 你们在报告中用的措辞是，它正在帮助他们每天维持能力的假象。
Jacob: 是的。

Stuart: And I thought, don't we all do that? Don't we all have to maintain that illusion?
Stuart: But in this case, their employers and their colleagues are talking to them every day.
Jacob: That's right.
Stuart: And they're not realizing that this is a completely fake person who is in fact, a scammer in North Korea,
Jacob: A persona that's been created by Claude or by somebody in North Korea that doesn't really exist with an educational background that doesn't really exist, with skills that are being done-

Stuart: 我在想，我们不都是这样吗？我们不都得维持这种假象吗？
Stuart: 但在这种情况下，他们的雇主和同事每天都在和他们交流。
Jacob: 没错。
Stuart: 而他们并没有意识到这是一个完全虚假的人，实际上是朝鲜的一个诈骗犯。
Jacob: 一个由 Claude 或朝鲜某人创建的**人格**（Persona: 指为特定目的，如诈骗，而虚构的身份或角色），这个人格并不真实存在，拥有虚假的教育背景，以及正在被完成的技能——

Stuart: Like a resume-
Jacob: Exactly.
Stuart: With a bunch of history on it.
Jacob: Yes.
Stuart: Yeah. Oftentimes you'll see, like, they'll take the project plan from their project manager, like the tasks that they need to complete, and they just throw the whole thing into Claude and say, what do I do?
Stuart: How do I get started? Help me code this.
Jacob: Again, super dissimilar to what a lot of people do.

Stuart: 就像一份简历——
Jacob: 完全正确。
Stuart: 上面写满了经历。
Jacob: 是的。
Stuart: 是的。通常你会看到，他们会把项目经理的项目计划，比如他们需要完成的任务，整个扔给 Claude，然后问：“我该怎么做？
Stuart: 我该如何开始？帮我编写这段代码。”
Jacob: 再次强调，这与很多人做的事情截然不同。

Stuart: I mean, I do that too now.
Jacob: You're not wrong though.
Stuart: Exactly. Exactly. Are they actually doing economically useful work for these companies?
Jacob: I think they are, yes.
Stuart: Right. Right.
Jacob: They're being product, otherwise they get fired.
Jacob: They're being productive employees and that's a part of this scam is sometimes these employees are considered high-performing because it might be one individual or many individuals doing the job, but this is what's so, I think critical to take away with this case is before you would need a few highly trained individuals to go out into the market, get a job, and then maintain a job, now North Korea can just use really anybody and just say, "Hey, use Claude."

Stuart: 我的意思是，我现在也这么做。
Jacob: 你说得没错。
Stuart: 完全正确。完全正确。他们真的在为这些公司做有经济价值的工作吗？
Jacob: 我认为他们是，是的。
Stuart: 对。对。
Jacob: 他们正在产出，否则就会被解雇。
Jacob: 他们是高效率的员工，而这正是这种诈骗的一部分，有时这些员工被认为是**高绩效**（High-Performing: 指在工作中表现出色，达到或超越期望的水平），因为可能是一个人或多个人在完成工作，但这个案例中我认为最关键的一点是，以前你需要少数经过高度训练的人进入市场，找到工作，然后维持工作，现在朝鲜可以随便找任何人，然后说：“嘿，用 Claude。”

Jacob: And then you can get the job and maintain the job, which allows you to get more positions, apply to more positions, and from North Korea's perspective, get more revenue in.
Stuart: Maybe this is a silly question to ask, but I think it might occur to people, how much money do you think North Korea are making from this?
Stuart: They're making tech company salaries, right? And they're presumably using that money to fund their weapons program and whatever else they need to run, given that they live under sanctions.
Stuart: How much do you reckon overall they earn from this kinda scamming?

Jacob: 然后你就可以找到工作并维持工作，这让你能获得更多职位，申请更多职位，从朝鲜的角度来看，也能获得更多收入。
Stuart: 这可能是一个愚蠢的问题，但我认为人们可能会想到，你认为朝鲜通过这种方式赚了多少钱？
Stuart: 他们赚的是科技公司的薪水，对吧？而且他们很可能用这些钱来资助他们的武器计划以及在制裁下他们需要运行的其他一切。
Stuart: 你估计他们通过这种诈骗总共能赚多少钱？

Jacob: We're seeing these actors get jobs as AI developers.
Jacob: Those people make quite a lot of money.
Stuart: Right, right. Yeah, yeah.
Jacob: And just like general like coding, coding jobs, which typically are high salaried.
Jacob: So, they're being pretty effective with this and they're not taking jobs at like call centers or something like that, that might not pay as much.
Jacob: And maybe that's something they used to do. Now they can take technical positions.

Jacob: 我们看到这些攻击者获得了 AI 开发人员的工作。
Jacob: 这些人赚的钱相当多。
Stuart: 对，对。是的，是的。
Jacob: 就像一般的编码工作一样，通常薪水很高。
Jacob: 所以，他们在这方面做得相当有效，而且他们没有去呼叫中心之类薪水不那么高的地方工作。
Jacob: 也许那是他们以前做的事情。现在他们可以担任技术职位。

Stuart: They're Fortune 500 companies that you're finding that are being-
Jacob: Yeah, they're targeting all the way up to Fortune 500.
Jacob: Smaller startups, medium-sized companies, large publicly traded companies.
Stuart: I assume - this is happening at the level of the North Korean nation state - I assume this is also happening with on the level of groups, right?
Stuart: Are there other smaller groups that are doing this? Do we have any idea about that? Is that something that you pick up?

Stuart: 你们发现的受害者是财富 500 强公司吗？
Jacob: 是的，他们攻击的目标一直到财富 500 强。
Jacob: 小型初创公司、中型公司、大型上市公司。
Stuart: 我假设——这发生在朝鲜国家层面——我假设这也发生在团体层面，对吧？
Stuart: 还有其他小型团体在做这件事吗？我们对此有任何了解吗？这是你们能发现的吗？

Jacob: Yeah, I think of it in maybe like two ways.
Jacob: The first is there's certainly other groups and other nation states that are running this employment scam where they're trying to land a job without actually being the person who's applying.
Jacob: That is becoming more common over time.
Jacob: The twist that you might want to think about as an individual that's listening to this conversation is what's been going around for a long time, which is an employment scam where I receive a job that is not a real job and I go apply to that job, but actually it's a scammer who's trying to harvest information from me or get me to download ransomware.

Jacob: 是的，我大概从两个方面来考虑。
Jacob: 首先，肯定有其他团体和其他国家正在进行这种就业诈骗，他们试图在不实际是申请人的情况下获得工作。
Jacob: 这种情况正变得越来越普遍。
Jacob: 作为正在听这段对话的个人，你可能想到的另一个转折是长期以来一直存在的一种就业诈骗，即我收到一份并非真实的工作，我去申请那份工作，但实际上是一个诈骗犯试图从我这里**收集信息**（Harvest Information: 收集个人或敏感数据）或让我下载勒索软件。

Jacob: And that's something that we're also seeing happen more often and that's leveraging AI.
Stuart: So again, it's like the vibe hacking thing.
Stuart: It's lowering the bar at which you need to, you know, the skill bar for doing these complex-
Jacob: Exactly.
Jacob: The two big implications there is you can, when you can do more scams, more cyber attacks, you can scale more because there's more people that are enabled, or a sophisticated actor can leverage Claude to scale themselves.

Jacob: 而我们看到这种情况也越来越频繁地发生，并且正在利用 AI。
Stuart: 所以再次强调，这就像情绪黑客一样。
Stuart: 它降低了你所需的门槛，你知道，进行这些复杂操作的技能门槛——
Jacob: 完全正确。
Jacob: 这有两个重要的含义：当你能进行更多诈骗、更多网络攻击时，你就能进行更大规模的扩展，因为有更多人被赋能，或者一个老练的攻击者可以利用 Claude 来扩展自己的能力。

Jacob: And so really you have to think about the number of scams or the number of pieces of fraud that are gonna be out in the world and they might, I would suspect, increase over time with the rise of AI.
Stuart: What are we doing specifically about the North Korean thing?
Stuart: There's this scam but there's also another part in the Threat Intelligence report where you guys kind of noticed another North Korean operation and stopped that.
Stuart: So, maybe talk about how we're responding and how we're spotting these North Korean.

Jacob: 所以，你真的必须思考世界上将会有多少诈骗或欺诈行为，我怀疑随着 AI 的兴起，它们可能会随着时间的推移而增加。
Stuart: 我们具体针对朝鲜的这个情况做了什么？
Stuart: 有这个诈骗，但在威胁情报报告中还有另一部分，你们团队发现并阻止了另一起朝鲜行动。
Stuart: 那么，也许可以谈谈我们是如何应对以及如何发现这些朝鲜行动的。

Jacob: Yeah, so the North Korean case is tricky.
Jacob: Like 80 to 90% of their use of Claude looks like a typical person doing development tasks.
Stuart: Right, you're asking for work, just coding stuff.
Stuart: You're asking what a cupcake is. These are normal things.
Stuart: They're not saying develop malware or anything like that, you know?
Jacob: About 10% of what we saw looks suspicious.
Jacob: And that's kind of like our needle in the haystack that we have to find among all of the traffic.

Jacob: 是的，所以朝鲜的案例很棘手。
Jacob: 他们使用 Claude 的 80% 到 90% 看起来都像一个普通人在执行开发任务。
Stuart: 对，你是在要求工作，只是编码。
Stuart: 你在问什么是纸杯蛋糕。这些都是正常的事情。
Stuart: 他们没有说开发恶意软件之类的，你知道吗？
Jacob: 我们看到的约 10% 看起来可疑。
Jacob: 这就像我们必须在所有流量中大海捞针一般。

Stuart: But you can't use Claude in North Korea, right?
Jacob: Correct.
Stuart: So, they must be using some like VPN system to evade that.
Jacob: Yeah.
Jacob: Yeah, so the 10% is like the type of activity was focused on like interview frauds, so we could see them developing fake resumes.
Jacob: We can see them trying to answer interview questions.
Jacob: Now, the other way, which you just alluded to of finding them is using the infrastructure that they're coming from.

Stuart: 但在朝鲜你不能使用 Claude，对吧？
Jacob: 没错。
Stuart: 所以他们肯定在使用某种 VPN 系统来规避。
Jacob: 是的。
Jacob: 是的，所以那 10% 的活动类型主要集中在面试诈骗上，我们可以看到他们在制作虚假简历。
Jacob: 我们可以看到他们试图回答面试问题。
Jacob: 另外一种发现他们的方式，你刚才也提到了，就是利用他们所使用的基础设施。

Jacob: This activity is widely investigated across the security community, both in the government and in the private sector.
Jacob: So there's a lot of information sharing happening there, people tracking what infrastructure are they operating on in order to access Western sites.
Jacob: And so, we're engaged in those communities and that's helping us continue to find these activities like this.
Stuart: And there are success cases here, and there's one that's in the report that you mentioned that I think is worth calling out, which is there was another North Korean group known as Contagious Interview, and their MO is to try to lure people into applying to fake jobs, to install malware on their devices.

Jacob: 这种活动在安全界，包括政府和私营部门，都得到了广泛调查。
Jacob: 所以那里有很多信息共享，人们追踪他们使用什么基础设施来访问西方网站。
Jacob: 因此，我们参与了这些社区，这帮助我们继续发现这类活动。
Stuart: 这里也有成功的案例，报告中你提到了一个我认为值得指出的案例，那就是另一个朝鲜团体，名为“传染性面试”（Contagious Interview），他们的作案手法是试图引诱人们申请虚假工作，以便在他们的设备上安装恶意软件。

Stuart: Right.
Jacob: Now, we know that this group tried to use Claude based on their infrastructure, their IPs, their domains, but we shut them down before they issued a single prompt based on that suspicious activity.
Jacob: So, this is something we're always on is finding and detecting these folks sometimes before they even do anything with our AI product.

Stuart: 对。
Jacob: 现在，我们知道这个组织曾试图使用 Claude，根据他们的基础设施、IP 地址和域名判断，但我们在他们发出任何提示之前，就根据可疑活动将其关闭了。
Jacob: 所以，我们一直在做的一件事就是发现和检测这些人，有时甚至在他们使用我们的 AI 产品做任何事情之前。

### 勒索软件即服务（RaaS）与浪漫诈骗机器人

Stuart: There's a lot more in the report.
Stuart: There's loads of stuff about, for instance, a British person who's making like a, normally we talk about **software as a service** (Software as a Service: 通过互联网提供软件应用的服务模式), right?
Stuart: But this is **ransomware as a service** (Ransomware as a Service: 一种商业模式，勒索软件开发者将恶意软件出租给其他网络犯罪分子，以换取部分赎金收益), right?
Stuart: So this person is like making ransomware and then selling it on the dark web to people.
Stuart: And again, a normal person would've taken huge levels of skill to make this happen.
Stuart: But this person had just like vibe-coded it really?
Jacob: Yeah, yeah, that's correct.

Stuart: 报告中还有很多内容。
Stuart: 例如，有很多关于一个英国人的事情，他正在制作一种，通常我们谈论**软件即服务**，对吧？
Stuart: 但这是**勒索软件即服务**，对吗？
Stuart: 所以这个人就像是制作勒索软件，然后将其在暗网出售给其他人。
Stuart: 再次强调，一个普通人要实现这一点需要极高的技能水平。
Stuart: 但这个人真的只是通过情绪编程做到了吗？
Jacob: 是的，是的，没错。

Jacob: So, they developed ransomware, kind of like worked with Claude until eventually they got Claude to actually write the pieces of code that they wanted.
Jacob: There was a lot of refusals that happened and Claude said no, and they would provide some sort of justification for what they were doing.
Stuart: Again, like I'm working for a security company and testing this out, or something like that.
Jacob: Yeah, yeah.
Stuart: Not that we're trying to tell people how to do it, right?
Stuart: Don't listen to that last comment.

Jacob: 所以，他们开发了勒索软件，有点像与 Claude 合作，直到最终他们让 Claude 实际编写了他们想要的代码片段。
Jacob: 期间发生了多次拒绝，Claude 拒绝了，他们就会为自己的行为提供某种理由。
Stuart: 再次强调，比如我为一家安全公司工作，正在测试这个，或者类似的话。
Jacob: 是的，是的。
Stuart: 我们并不是想告诉大家怎么做，对吧？
Stuart: 别听最后一句话。

Jacob: Yeah, so they were able to get Claude to write some pretty sophisticated ransomware.
Jacob: We actually, in the investigation, were able to discover that this actor was selling this ransomware on various underground forums.
Jacob: So, we were able to trace those ads back to the activity we saw on our platform.
Jacob: So we got a bit of an understanding on why they were developing what they were developing.
Jacob: And it was clear that it was a ransomware as a service operation.

Jacob: 是的，所以他们能够让 Claude 编写出相当复杂的勒索软件。
Jacob: 实际上，在调查中，我们发现这个攻击者正在各种地下论坛上出售这种勒索软件。
Jacob: 因此，我们能够将这些广告追溯到我们在平台上看到的活动。
Jacob: 所以我们对他们开发这些东西的原因有了一些了解。
Jacob: 并且很明显，这是一个**勒索软件即服务**的操作。

Stuart: And there's other kind of entirely different types of scams.
Stuart: Do you wanna talk about the romance scam bot?
Stuart: Like of course, Claude doesn't have a kind of avatar thing that it can, that some other AI have these kind of animated avatars that talk to you and so on.
Stuart: But people were using it to kind of, as the engine of something like that.
Jacob: Yeah, so there's these things called **romance scams** (Romance Scams: 诈骗者通过虚构浪漫关系来获取受害人钱财的骗局), sadly, which is where you pretend to develop a romantic relationship with another person, usually for the purpose of extracting financial gain from them.

Stuart: 还有其他完全不同类型的诈骗。
Stuart: 你想谈谈**浪漫诈骗机器人**（Romance Scam Bot: 利用AI模拟浪漫关系以进行诈骗的自动化程序）吗？
Stuart: 当然，Claude 没有那种可以作为头像的东西，不像其他一些 AI 有那种会和你说话的动画头像等等。
Stuart: 但人们正在用它作为这类东西的引擎。
Jacob: 是的，很遗憾，有一种叫做**浪漫诈骗**的东西，就是你假装与另一个人发展浪漫关系，通常是为了从中获取经济利益。

Jacob: And there's this Telegram bot and this Telegram bot had tens of thousands of users, and it was a scamming bot, meaning people would reach out to it, the bot, and say, "Hey, can you help me with this part of my scam?"
Jacob: And Claude specifically, there's multiple AI models that you could use, but Claude was advertised as the emotionally intelligent AI model.
Jacob: So you could upload like a picture of somebody and then say, Hey, how do I compliment this person best?
Jacob: Or how do I respond to this person's message to make it seem like I'm flirting with them effectively?

Jacob: 有一个 Telegram 机器人，这个 Telegram 机器人拥有数万用户，它是一个诈骗机器人，意思是人们会联系它，这个机器人，然后说：“嘿，你能帮我完成我的诈骗的这一部分吗？”
Jacob: 而特别是 Claude，你可以使用多种 AI 模型，但 Claude 被宣传为具有**情感智能**（Emotionally Intelligent: 指AI模型能够理解、处理和表达情感，从而更好地与人类互动）的 AI 模型。
Jacob: 所以你可以上传一个人的照片，然后说：“嘿，我如何最好地赞美这个人？”
Jacob: 或者“我如何回复这个人的信息，才能有效地让他们觉得我在调情？”

Stuart: Right and again, that was, people were having success there and presumably that's shut down now.
Jacob: Yes. This is shut down. Everything we talk about today was shut down.
Stuart: Right, these are things that are gone, yeah, yeah.
Jacob: Yes. And we build better defenses.
Jacob: But yeah, in that case, we found, I think this is really the takeaway for me is that all scam infrastructure end-to-end is starting to use AI models.

Stuart: 对，而且再次强调，人们在那里取得了成功，现在 presumably 已经被关闭了。
Jacob: 是的。这个已经被关闭了。我们今天谈到的所有事情都已经被关闭了。
Stuart: 对，这些事情都已不复存在了，是的，是的。
Jacob: 是的。我们正在构建更好的防御体系。
Jacob: 但是的，在那个案例中，我们发现，我认为对我来说真正的启示是，所有端到端的诈骗基础设施都开始使用 AI 模型。

Jacob: Because if you're a scammer, you might not have perfect language skills in the relevant language you're trying to scam somebody in.
Jacob: You might not know the cultural context to flirt effectively.
Jacob: You might not actually be able to send enough messages quickly enough to all of your potential victims.
Jacob: AI unblocks all of those potential barriers.

Jacob: 因为如果你是一个骗子，你可能在试图诈骗别人的相关语言中，语言技能并不完美。
Jacob: 你可能不知道如何有效地调情所需的文化背景。
Jacob: 你可能无法足够快地向所有潜在受害者发送足够多的信息。
Jacob: AI 消除了所有这些潜在障碍。

Stuart: I watch a lot of those scam baiting videos on YouTube.
Jacob: Oh, those are great.
Stuart: Isn't that great fun? Yeah, yeah.
Stuart: Where someone like talks to the scammer sometimes for hours to just waste loads and loads of their time so they can't scam someone else.
Stuart: Can you imagine an AI doing that to sort of put things back on the scammers, like an AI making the scammers think that-
Jacob: You know, I love this idea. You have the AI interacting with the scammers just wasting their time.

Stuart: 我看了很多 YouTube 上的**诈骗诱捕视频**（Scam Baiting Videos: 揭露诈骗者并浪费其时间的视频）。
Jacob: 哦，那些很棒。
Stuart: 那不是很有趣吗？是的，是的。
Stuart: 就像有人和诈骗犯聊好几个小时，只是为了浪费他们大量的时间，这样他们就不能去诈骗别人了。
Stuart: 你能想象一个 AI 也能这样做，反过来对付诈骗犯，比如一个 AI 让诈骗犯以为——
Jacob: 你知道，我喜欢这个想法。让 AI 和诈骗犯互动，只是为了浪费他们的时间。

Stuart: Yeah, exactly. Yeah, yeah. That could be an idea. A sort of romance scam but for scammers.
Stuart: The operations that you've talked about so far in the report and in this video are really in order to try and get money from people, right?
Stuart: They're scams and fraudulent attempts, extortion attempts to get money.
Stuart: But there's one operation that you talk about in the report that's not about that.
Stuart: And in this case it's about a cyber attack on the infrastructure in Vietnam.
Stuart: Can you talk a little bit more about that? I mean, this is not an attack to try and destroy the infrastructure, this is stealing information from it, right?

Stuart: 是的，没错。是的，是的。那可能是一个想法。一种针对诈骗犯的浪漫诈骗。
Stuart: 你们到目前为止在报告和视频中谈到的行动，实际上都是为了从人们那里获取金钱，对吧？
Stuart: 它们是诈骗和欺诈企图，是勒索钱财的企图。
Stuart: 但报告中你谈到的一项行动并非如此。
Stuart: 在这个案例中，它涉及对越南基础设施的网络攻击。
Stuart: 你能多谈谈这个吗？我的意思是，这不是为了摧毁基础设施的攻击，这是从它那里窃取信息，对吧？

Jacob: Yes, this is likely **espionage** (Espionage: 间谍活动，通过秘密手段获取敏感或机密信息) from what we're observing.
Jacob: This is a Chinese-speaking actor targeting Vietnamese telecommunications companies.
Jacob: And there are a number of reasons you might target a telecommunications company as a bad actor.
Jacob: But seeing that they were exfiltrating data clues us in on the potential that they are trying to maybe identify certain things about communications happening within the country.

Jacob: 是的，从我们观察到的情况来看，这很可能是**间谍活动**。
Jacob: 这是一个讲中文的攻击者，目标是越南的电信公司。
Jacob: 作为不良行为者，你可能出于多种原因攻击电信公司。
Jacob: 但看到他们正在窃取数据，这给了我们线索，表明他们可能试图识别该国境内通信方面的一些特定信息。

Stuart: Like where the really important nodes are in the communication grid or whatever.
Stuart: Yeah.
Jacob: Yeah.
Jacob: So, we saw them target a number of companies within Vietnam, and in this case they were using Claude as more of an assistant in their operation.
Jacob: So whereas in the vibe hacking case, Claude was essentially on keyboard conducting the operation.
Jacob: In this case, they were more kind of having a conversation with Claude where it's like, hey, like where should I start this attack?
Jacob: They would run a scan on the victim network and paste that data back into Claude and say, hey, like, what is this scan telling me?
Jacob: Can you help me prioritize certain machines to target first?

Stuart: 比如通信网络中真正重要的节点在哪里，或者其他什么。
Stuart: 是的。
Jacob: 是的。
Jacob: 所以，我们看到他们攻击了越南境内的多家公司，在这种情况下，他们更多地将 Claude 用作其行动中的助手。
Jacob: 因此，在情绪黑客案例中，Claude 基本上是直接操作键盘进行攻击。
Jacob: 而在这个案例中，他们更多的是与 Claude 进行对话，比如：“嘿，我应该从哪里开始这次攻击？”
Jacob: 他们会在受害者网络上运行一次扫描，然后将数据粘贴回 Claude，并说：“嘿，这次扫描告诉我什么？
Jacob: 你能帮我优先选择首先攻击哪些机器吗？”

Jacob: And it was a lot of just back and forth, but not really having Claude actually like on keyboard.
Jacob: And I would guess an entity conducting an espionage operation wouldn't be willing to trust an agent to actually run the commands within victim networks.
Jacob: And I think that could have been another clue.
Stuart: So it's not used yet.
Stuart: We're seeing vibe hacking used for these types of hyper targeted attacks against sensitive targets, because bad actors might not yet fully trust the model when there's only one or two targets that you wanna go after.

Jacob: 这就是大量的来回沟通，但并没有真正让 Claude 亲自操作键盘。
Jacob: 我猜测，一个进行间谍活动的实体不会愿意信任一个代理来实际在受害者网络中运行命令。
Jacob: 我认为这可能是另一个线索。
Stuart: 所以它还没有被使用。
Stuart: 我们看到情绪黑客被用于针对敏感目标的高度定向攻击，因为当只有一两个目标时，不良行为者可能还没有完全信任模型。

Stuart: But this is probably gonna change over time once people get more comfortable with things like vibe hacking.
Stuart: Once you get more comfortable with model accuracy, you could imagine that all operations that are offensive, may be using AI not just for an advisory purpose, but for actually conducting operational work or being, quote, unquote, "hands on keyboard," or maybe it's AI on keyboard because there aren't actually hands on keyboard.

Stuart: 但随着时间的推移，一旦人们对情绪黑客等事物感到更舒适，这种情况可能会改变。
Stuart: 一旦你对模型的准确性感到更舒适，你可以想象所有攻击性行动都可能使用 AI，不仅仅是为了提供建议，而是实际执行操作工作，或者说是“亲自动手”，或者可能是 AI 在操作键盘，因为实际上并没有人在操作键盘。

### 信用卡诈骗与暗网市场

Stuart: Another of the examples you talk about is a credit card fraud scheme where they're collecting people's credit card information.
Stuart: Tell us a little bit how that works.
Jacob: Well, a very standard part of fraud operations when you're signing up for a service is you use a either a stolen credit card or a fake credit card.
Jacob: And one of the core parts of infrastructure if you're a fraudster is, well, where am I gonna go find my fake credit card or my stolen credit card?
Jacob: We're seeing somebody using Claude to stand up a **carding service** (Carding Service: 一种提供窃取或伪造信用卡信息以进行欺诈的服务).

Stuart: 你们提到的另一个例子是信用卡诈骗，他们收集人们的信用卡信息。
Stuart: 告诉我们它是如何运作的。
Jacob: 嗯，当你注册一项服务时，诈骗操作中一个非常标准的环节就是使用一张被盗的信用卡或伪造的信用卡。
Jacob: 如果你是一个诈骗犯，基础设施的核心部分之一就是，我该去哪里找到我的伪造信用卡或被盗信用卡？
Jacob: 我们看到有人正在使用 Claude 建立**套现服务**。

Jacob: Meaning the actual infrastructure you'd be using to conduct some sort of scam, you'd be using carding infrastructure that is run by Claude.
Jacob: Again, I think it goes into the theme that every stage of a scam or a cyber attack or an act of fraud, and there's many stages.
Jacob: There's the core infrastructure, there's the reaching out to the person, there's maybe installing or building malware.
Jacob: There's many stages of, quote, unquote, "attack."
Jacob: Each of those stages are having AI integrated into them.

Jacob: 也就是说，你用来进行某种诈骗的实际基础设施，将是 Claude 运行的**套现基础设施**（Carding Infrastructure: 支持信用卡诈骗活动所需的技术和平台，如用于生成、验证或交易信用卡信息的工具）。
Jacob: 再次强调，我认为这符合一个主题，那就是诈骗、网络攻击或欺诈行为的每一个阶段，都有许多阶段。
Jacob: 有核心基础设施，有与受害人联系，可能还有安装或构建恶意软件。
Jacob: 有许多所谓的“攻击”阶段。
Jacob: 这些阶段中的每一个都正在集成 AI。

Jacob: So the core infrastructure, the actual operational act, the conversation with the victim, all of these we're seeing AI used right now.
Alex: This isn't surprising. Many cyber criminal operations run like businesses.
Alex: They need infrastructure, they need tooling.
Alex: And I think we're gonna see a lot more actors start using AI to build infrastructure and then sell that to other cyber criminals.

Jacob: 所以核心基础设施、实际操作行为、与受害者的对话，所有这些我们现在都看到 AI 被使用。
Alex: 这并不令人惊讶。许多网络犯罪活动都像企业一样运作。
Alex: 他们需要基础设施，需要工具。
Alex: 我认为我们将看到更多的攻击者开始使用 AI 来构建基础设施，然后将其出售给其他网络犯罪分子。

Stuart: Because what you see today, if you spend much time which hopefully the listeners are not doing, on the dark web, is it's an entire marketplace where you are buying that tool.
Stuart: You're buying that piece of infrastructure.
Stuart: So if I'm gonna conduct, let's say a **phishing campaign** (Phishing Campaign: 通过冒充可信实体发送欺诈性信息，诱骗受害者泄露敏感信息或点击恶意链接的攻击活动), I might not build the, quote, unquote, "phish kit."
Stuart: I might buy the **phish kit** (Phish Kit: 包含创建虚假网站和诱骗邮件所需的所有文件和工具的软件包，用于进行网络钓鱼攻击) from somebody else, and then I'm conducting the phishing campaign, but the actual infrastructure's not built by me.
Stuart: Now, AI is being used to build that core infrastructure that could be bought and resold on the dark web.

Stuart: 因为你今天看到的，如果你在暗网（希望听众没有花太多时间在那里）上花很多时间，你会发现那是一个完整的市场，你可以在那里购买工具。
Stuart: 你可以购买那部分基础设施。
Stuart: 所以如果我要进行一次**网络钓鱼活动**，我可能不会自己构建所谓的“网络钓鱼工具包”。
Stuart: 我可能会从别人那里购买**网络钓鱼工具包**，然后我进行网络钓鱼活动，但实际的基础设施不是由我构建的。
Stuart: 现在，AI 正在被用来构建那些可以在暗网上买卖的核心基础设施。

Stuart: So all this stuff we hear, it's like the vibe coding stuff.
Stuart: All the stuff we hear about all these amazing new piece of software that are being made, again, as a dual use situation where there's all this great new software that people are making themselves and it's making their life easier in all sorts of ways.
Stuart: But there's also the dark side, which is that software can often be used to do very bad things.
Jacob: That's right as well.

Stuart: 所以我们听到的所有这些东西，就像情绪编程一样。
Stuart: 我们听到的所有关于这些正在被创造的令人惊叹的新软件，再次，也是一种**双重用途**（Dual Use: 指技术或工具既可用于合法正当目的，也可用于恶意目的）的情况，人们正在自己制作所有这些很棒的新软件，它以各种方式让他们的生活更轻松。
Stuart: 但也有阴暗面，那就是这些软件经常被用来做非常坏的事情。
Jacob: 没错。

### AI 网络安全：一场军备竞赛

Stuart: Okay. How big a deal is this overall?
Stuart: Like you're talking about AI models are, loads of scamming is happening now using AIs and fraud and so on.
Stuart: Is this just gonna be a whole new world that people have to get used to?
Stuart: How ready are we for this? How ready are banks for this? How ready are governments for this?
Jacob: Yeah, I think when you think of the cybersecurity space, you wanna keep things at equilibrium in the worst case scenario.
Jacob: Ideally you're doing a better job protecting folks, but-

Stuart: 好的。总的来说，这有多严重？
Stuart: 就像你说的，AI 模型正在被大量用于诈骗、欺诈等等。
Stuart: 这会是一个人们必须适应的全新世界吗？
Stuart: 我们为此准备好了吗？银行为此准备好了吗？政府为此准备好了吗？
Jacob: 是的，我认为当你考虑网络安全领域时，在最坏的情况下，你希望保持平衡。
Jacob: 理想情况下，你在保护人们方面做得更好，但是——

Stuart: This is like an arms race.
Jacob: Yes.
Stuart: Like the good AI uses and the bad AI uses.
Jacob: Exactly.
Jacob: It's like all technology, bad guys are gonna use it, good guys are gonna use it.
Jacob: And AI is a general purpose piece of technology.
Jacob: And I think what's important, and one of the reasons we're talking about this and hopefully folks are listening and watching, is we want the good guys, the defenders to be using this technology too, so that in that arms race you stay at equilibrium.
Jacob: Really, ideally we're trying to work with and partner with those organizations so that they have a leg up, they use it more effectively.

Stuart: 这就像一场**军备竞赛**（Arms Race: 双方竞相发展更先进的武器和技术以获得优势）。
Jacob: 是的。
Stuart: 就像好的 AI 用途和坏的 AI 用途。
Jacob: 完全正确。
Jacob: 就像所有技术一样，坏人会用它，好人也会用它。
Jacob: 而 AI 是一种通用技术。
Jacob: 我认为重要的是，我们谈论这个的原因之一，也是希望大家能倾听和观看，是我们希望好人，即防御者也能使用这项技术，这样在那场军备竞赛中，你们就能保持平衡。
Jacob: 实际上，理想情况下，我们正努力与这些组织合作，让他们拥有优势，更有效地利用它。

### Anthropic 的应对措施与个人防御建议

Stuart: Is there anything else you can say about what the Threat Intelligence team is doing in general or even some more specifics about what you're up to that might help us get to that equilibrium?
Jacob: Yeah, well, something we're always doing is we have people on the team who are looking on the open web and the dark web to understand what are bad actors practically doing right now?
Jacob: What are they saying about using our products? What's the chatter?
Jacob: So we understand, okay, here's bad guys' usage.
Jacob: So then we can talk to the good guys and say, "Hey, here's what it seems like the bad actors are doing."
Jacob: We're building new methods of detection all the time.

Stuart: 你们的威胁情报团队总体上还在做些什么？或者更具体地说，你们正在忙些什么，能帮助我们达到那种平衡？
Jacob: 是的，我们一直在做的一件事就是，团队里有人在**开放网络**（Open Web: 公开可访问的互联网）和**暗网**（Dark Web: 无法通过标准搜索引擎访问的互联网部分，常用于非法活动）上进行观察，以了解不良行为者目前实际在做什么？
Jacob: 他们在使用我们的产品时说了些什么？有什么**传闻**（Chatter: 指在网络犯罪社区或论坛中关于特定工具、技术或目标的讨论）？
Jacob: 这样我们就能了解，好的，这是坏人的使用情况。
Jacob: 然后我们就可以和好人沟通，说：“嘿，看起来不良行为者正在做这些事。”
Jacob: 我们一直在构建新的检测方法。

Jacob: One of the reasons we shared this public report is we want the public, other companies, the security community to know what we're seeing and what we're finding.
Jacob: So both, you know, maybe think of it from two perspectives.
Jacob: One is at Anthropic we take stopping misuse very seriously of our models and that's why this team exists.
Jacob: But on the other side, if you're in industry as a company, as a government, we're talking about this so that you yourself can start using these AI models for defense.

Jacob: 我们发布这份公开报告的原因之一是，我们希望公众、其他公司和安全社区了解我们正在看到和发现什么。
Jacob: 所以，你可以从两个角度来看待这个问题。
Jacob: 一方面，Anthropic 非常重视阻止我们模型的滥用，这就是这个团队存在的原因。
Jacob: 但另一方面，如果你是行业内的一家公司，或者一个政府，我们谈论这个问题是为了让你自己也能开始使用这些 AI 模型进行防御。

Stuart: Well, that was my next question. What can you other...
Stuart: You know, using AI is one thing, but what are some more practical tips for people who maybe they or their family members or whatever are the victim of these scams, fraud attempts, extortion attempts.
Stuart: What are some tips that you guys have for the average person?
Jacob: Yeah, I would say anytime like you're suspicious about something happening like a text you got or an email you got or something weird happening on your computer, just start like brainstorming what's happening with Claude.
Jacob: Claude will have a lot of good ideas and it will help you kind of triage as if you were like a security professional, how they might triage the same problem.

Stuart: 嗯，那是我的下一个问题。你们还有什么……
Stuart: 你知道，使用 AI 是一回事，但对于那些可能他们自己或他们的家人成为这些诈骗、欺诈或勒索企图的受害者的人，有什么更实际的建议吗？
Stuart: 你们对普通人有什么建议？
Jacob: 是的，我想说，任何时候如果你对发生的事情感到可疑，比如收到的短信或邮件，或者电脑上发生了奇怪的事情，就用 Claude 开始**集思广益**（Brainstorming: 自由地提出想法和解决方案）发生了什么。
Jacob: Claude 会有很多好主意，它会帮助你像安全专业人士一样进行**分类处理**（Triage: 根据紧急程度和重要性对问题进行分类和优先排序），处理同样的问题。

Jacob: Since I work in the security space, I have people ask me questions like this regularly and sometimes like if I don't have time, I'll just throw it into Claude.
Stuart: Just throw it in.
Jacob: Say this is what Claude said and then they will potentially maybe try to do that next time.
Jacob: Save me a little bit of time.
Stuart: Fair enough.
Jacob: Yeah, I think the general guidance I have is the same, which is if it's too good to be true or if you're really scared, probably means something's up and you should look into it.

Jacob: 由于我在安全领域工作，人们经常问我这类问题，有时如果我没时间，我就会直接把它扔给 Claude。
Stuart: 直接扔进去。
Jacob: 说这是 Claude 说的，然后他们下次可能就会尝试那样做。
Jacob: 给我省了点时间。
Stuart: 说得有理。
Jacob: 是的，我认为我给的普遍建议是一样的，那就是如果一件事好得不像真的，或者你真的感到害怕，那很可能意味着有问题，你应该去调查一下。

Jacob: You talk to Claude and actually, I've done the exact same thing.
Jacob: Somebody asked me for help with their account was taken over and I just asked Claude, hey, what should we do here?
Jacob: Even though I have years of expertise dealing with account takeovers, Claude was exceptionally helpful.
Stuart: How optimistic are you both about this?
Stuart: I mean, this could be seen as quite a doom-laden scenario, right?
Stuart: There's all these AIs being used by some of the countries that don't have any kind of ethical legal framework that are doing this.
Stuart: This could be seen as something really quite scary or how optimistic do you feel?

Jacob: 你可以和 Claude 交流，实际上，我也做过同样的事情。
Jacob: 有人向我求助，说他们的账户被盗了，我就问 Claude，嘿，我们该怎么办？
Jacob: 尽管我在处理账户盗用方面有多年经验，但 Claude 异常地有帮助。
Stuart: 你们俩对此有多乐观？
Stuart: 我的意思是，这可能被视为一个充满厄运的场景，对吧？
Stuart: 那些没有任何道德法律框架的国家正在利用所有这些 AI 来做这些事情。
Stuart: 这可能被视为非常可怕的事情，或者你感觉有多乐观？

Jacob: Yeah, I think it's important to keep in perspective that what we're sharing today is kind of like the needles in the haystack that we find.
Jacob: I think they might indicate a future if we don't respond collectively well to it.
Jacob: But these are the needles in the haystack and we've built a lot of defenses and adjusted our defenses from these learnings to make sure our models don't get used in this way.
Jacob: But there hackers have been known to use quite a number of different commercial and open source models.
Jacob: So the problem's not gonna go away.

Jacob: 是的，我认为重要的是要保持这样的视角：我们今天分享的，就像是我们发现的**大海捞针**。
Jacob: 我认为如果我们不集体妥善应对，它们可能预示着未来。
Jacob: 但这些只是大海捞针，我们已经根据这些经验构建了许多防御措施并调整了它们，以确保我们的模型不会以这种方式被使用。
Jacob: 但众所周知，黑客已经使用了相当数量的不同商业和开源模型。
Jacob: 所以这个问题不会消失。

Jacob: And I'm hopeful that our threat report and this video will help calibrate everyone on what currently exists and start kind of coalescing around different types of defenses, either policy or technical that can kind of help get at the problem.
Stuart: It could be seen as quite strange that we are saying, on the one hand you should buy Claude, on the other hand we're saying Claude can do all these terrible things.
Stuart: I mean, this comes up when we're talking about alignment science stuff as well, you know?
Stuart: Claude, under some circumstances in our experiments, can blackmail you.
Stuart: Now, buy Claude to use in your business. Like, this is part of the weird paradox of Anthropic, right?

Jacob: 我希望我们的威胁报告和这个视频能帮助所有人了解目前存在的问题，并开始围绕不同类型的防御措施，无论是政策性的还是技术性的，共同努力解决这个问题。
Stuart: 有人可能会觉得这很奇怪，我们一方面说你应该购买 Claude，另一方面又说 Claude 能做所有这些可怕的事情。
Stuart: 我的意思是，当我们谈论**对齐科学**（Alignment Science: 旨在确保AI系统行为与人类价值观和意图保持一致的研究领域）时，也会出现这种情况，你知道吗？
Stuart: Claude，在我们的实验中，在某些情况下可以勒索你。
Stuart: 现在，购买 Claude 用于你的业务。这就像 Anthropic 的一个奇怪悖论，对吧？

Jacob: I always think about this a lot, how Claude is such a general purpose tool that any use case you can think of, Claude can probably do.
Jacob: And many of those use cases, the same use case can be good or bad.
Jacob: Getting rid of a cultural barrier can be a beautiful thing to create connection in the world or can help you land a job as a remote IT workers as a North Korean.
Stuart: Right.

Jacob: 我总是经常思考这个问题，Claude 是如此通用的工具，你所能想到的任何用例，Claude 都可能实现。
Jacob: 而且许多用例，同一个用例既可以是好的，也可以是坏的。
Jacob: 消除文化障碍可以是一件美好的事情，可以促进世界范围内的联系，或者可以帮助你作为一个朝鲜远程 IT 工作者找到一份工作。
Stuart: 对。

Jacob: So, you know, there's this paradox and we want to enable the good thing as well trying to find the very narrow bad use cases.
Stuart: Well, I'm very glad that you guys are looking into this and that we're taking this so seriously at Anthropic.
Stuart: And you might just wanna check that the colleague that you talk to every day is not a North Korean agent.
Stuart: Thanks very much for watching. We'll see you in the next one.

Jacob: 所以，你知道，存在这个悖论，我们既想促成好的一面，也想努力找出那些非常狭窄的坏用例。
Stuart: 嗯，我很高兴你们正在调查此事，并且 Anthropic 对此如此认真。
Stuart: 你可能也想检查一下你每天交谈的同事是不是朝鲜特工。
Stuart: 非常感谢观看。我们下期再见。