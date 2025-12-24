---
area: tech-insights
category: technology
companies_orgs:
- Amazon
- OpenAI
- DeepMind
- LinkedIn
- Meta
date: '2025-11-20'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- The Last Economy
people:
- Lihon
- Zwan
- Alsar
- Rich Sutton
products_models:
- R1
- ChatGPT
- AlphaGo
project:
- ai-impact-analysis
- systems-thinking
series: ''
source: https://www.youtube.com/watch?v=bnIHrenhFpc
speaker: 硅谷101
status: evergreen
summary: 本次小组讨论深入探讨了强化学习（RL）在推动人工智能发展中的核心作用，特别是其在大型语言模型（LLM）训练中的应用。讨论涵盖了可验证奖励强化学习（RVR）的潜力与局限、人类反馈与可验证奖励的结合、探索算法的重要性、以及分层强化学习和抽象思维在解决复杂任务中的关键作用。专家们还展望了RL在生成新知识和实现通用人工智能（AGI）方面的可能性，并探讨了未来几年RL领域最值得期待的进展，如抽象化和多维度奖励机制。
tags:
- agi
- design
- exploration
- learning
- reinforcement-learning
title: 强化学习：通往通用人工智能（AGI）之路的关键挑战与未来方向
---

### 引言与嘉宾介绍

**主持人 (Bill):** 好的，各位早上好！我很高兴今天能与各位优秀的嘉宾进行小组讨论。事实上，他们都是我多年的朋友，我认识他们每个人已经好几年了。所以，很高兴能有这个机会与我的朋友们在这里重聚。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's It's all right. Um, all right. Um, hope you guys have a great morning so far. Um, so I'm honored today to have uh a wonderful panel with me today. Um, in fact, all of them are my friends to some extent like for the last like many years. Uh I've known each of them for quite a few years so far. Uh so it would be great to have this opportunity to also reunion with all of my friends here.</p>
</details>

**主持人 (Bill):** 我们今天将重点讨论**强化学习**（Reinforcement Learning: 一种机器学习方法，通过让智能体在环境中试错来学习最优行为策略），我们都知道它对当今**人工智能**（AI: 模拟人类智能的技术）的进步至关重要。从今年早些时候DeepMind发布R1，他们通过强化微调在编程和数学方面实现了某种程度的自我提升，到今年晚些时候，我们看到强化学习在数学、编程、化学、物理，甚至具身AI等领域有大量应用，这些应用都展现出强大的智能。我们也看到许多强化学习公司获得了大量融资。所以，我们今天将深入探讨所有这些。但在此之前，我想请各位嘉宾自我介绍一下。我们从Lihon开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so we're going to focus on RL today and we all know that reinforcement learning serve is core to today's AI uh advancements. Um from earlier this year of deepse release of R1 where they have reinforcement fine tuning to really have um some sort of self-improvement on coding and math. uh to later this year where we see a lot of applications on math, coding, chemistry, physics, uh even embody AI uh type of applications on reinforce learning um that enable like really strong intelligence uh and we've seen a lot of RL companies that raise a lot of money as well. So we're going to dive into all of that today. But before that uh I'd love to have the panel introduce them themselves. Uh may may start from Lihon. Yeah.</p>
</details>

**Lihon:** 大家好，我是来自亚马逊的Lihon。我从事强化学习和语言模型方面的工作已经有一段时间了。很高兴能参加这次小组讨论，感谢组织者邀请我。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hi, sure. Yeah. Hi everyone. Uh my name is Lehon from Amazon. uh I uh I work on reinforcement learning and and language models for uh for a while and then I look I it's a pleasure to join the panel and thanks the organizer for inviting me here.</p>
</details>

**Zwan:** 大家好，我是Zwan。我目前在OpenAI工作，之前在DeepMind。我也从事强化学习方面的工作，实际上我是Lihon论文的忠实粉丝，并且也从事大型语言模型和**通用人工智能**（AGI: 能够像人类一样执行任何智力任务的AI）的普遍研究。我很高兴今天能参加这次小组讨论。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Jen, hi my name is Zwan. So I'm currently working at open AI and before that I was at deep mind. So I also work on reinforcement learning and actually I'm a big fan of Lehon's paper and uh also working on uh large language models and AGI in general. I'm very happy to join the panel today.</p>
</details>

**Alsar:** 早上好，各位。我是LinkedIn的杰出科学家Alsar。我主要专注于**智能体AI**（Agent AI: 能够感知环境、自主决策并执行行动以实现目标的AI）。在加入LinkedIn之前，我在Meta工作，在那里我与Bill密切合作。再之前，我在亚马逊Alexa工作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh good morning everyone. I'm Alsar. I'm a distinguished scientist at LinkedIn. Um mostly focusing on agental. Before coming to LinkedIn, I was at Meta where I was actually working with Bill closely and uh before that I was in Amazon Alexa.</p>
</details>

### 可验证奖励强化学习（RVR）的潜力与局限

**主持人 (Bill):** 好的，太棒了。那么，让我们直接开始吧。我想如果大家了解强化学习的最新进展，那么有一件事一直引发了广泛关注，那就是我们如何在没有实际监督数据的情况下训练强化学习智能体，特别是在语言模型中。这意味着没有人工标注，没有人类专家注释的数据，那么你如何训练这些模型呢？其中一个趋势就是**可验证奖励强化学习**（RVR: Reinforcement from Verifiable Rewards: 一种强化学习方法，通过使用可验证的规则或系统来自动评估模型输出的正确性，从而生成奖励信号，无需人工标注）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's great. Um, cool. So, so let's dive right in. Um I I think people if you guys know the recent advancements in reinforce learning uh one thing that has been like triggering a lot of interest so far is how how can we train RL agents uh in language models uh without actual u suice data? um that is that there's no human labeling there's no you know human uh expert annotated data and how do you train these models and one of the trends is RVR uh reinforcement from verifiable rewards um the idea is that you can literally use rules um and sort of like you know verifier systems from math to really verify whether or not the outputs of certain language models are correct.</p>
</details>

**主持人 (Bill):** 其核心思想是你可以直接使用规则，以及数学中的验证系统来真正验证某些语言模型的输出是否正确。所以，第一个问题是，最近有很多关于RVR的论文发表，这几乎已经成为一种共识。大家认为RVR除了目前在数学和编程领域的强化微调之外，还能走向何方？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So so the first question is um there's a lot of papers coming out recently on RVR and then this is sort of the almost like a consensus on on how how these things are going. Uh so where do you guys think like RVR can go before beyond like just current reinforcement fine tuning on math and coding? Yeah, I think um it's um it it definitely has a lot of uh uh great impact um in fars uh but on the other hand we also see that the many problems are not verifiable they don't have verifiable outcomes so I think that um there at some point there is a need to go beyond that to handle nonverifiable uh problems.</p>
</details>

**Lihon:** 我认为它肯定会产生很大的影响。但另一方面，我们也看到许多问题是不可验证的，它们没有可验证的结果。所以，我认为在某些时候，我们需要超越RVR，来处理不可验证的问题。一个例子是，当我们还是孩子在学校学习时，我们有可验证结果的考试，对吧？比如ABCD选择题。但是当我们真正出去工作时，就很难说你必须这样做才能达到某个标准。有很多需要高度判断且结果不可验证的情况，我们需要去探索。所以，那是一个更加模糊的领域。我认为这就是我们需要在可验证奖励之外做更多工作的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think um it's um it it definitely has a lot of uh uh great impact um in fars uh but on the other hand we also see that the many problems are not verifiable they don't have verifiable outcomes so I think that um there at some point there is a need to go beyond that to handle nonverifiable uh problems an example is that uh in when we are children we are learning in school we have tests that are verifiable that have verifiable results right ABCD choose one of them Uh but then when we actually go out to work and it's hard to say that you have to do this in order to to check the mark right to have there's a lot of high judgment call and nonverifiable outcomes that we have to explore and and so that's a much fuzzier place. So I think that's where uh we need to do more beyond verifiable rewards.</p>
</details>

**Zwan:** 是的，我认为对于强化学习来说，可验证奖励。我的理解是，这种方法可以用于一个非常通用的范式，即先生成后验证。原因通常是验证比生成容易得多。我的意思是，如果我们考虑它是否能超越微调，我认为它可以。实际上，已经有一些工作在进行，例如，你可以使用这种方法来发展更强的推理技能，你也可以在与微调不同的框架中使用它，比如基于辩论的强化学习，或者基于自我批评的强化学习。我认为所有这些都超越了微调。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think for reinforcement learning is verified reward. My understanding is that this approach can be used in a very general paradigm which is you generate first and then verify and the reason is that usually it's much easier to verify than generate. I mean, if we think about whe or not it can go beyond the uh fine-tuning I think it can and actually there are already some work on site for example you can use this approach to develop stronger reasoning skills and you can also use it in somewhat different framework compared to uh fine-tuning like I mean uh reinforcement learning based on debate or reinforcement learning uh based on self-critic I think all of these go beyond fine-tuning.</p>
</details>

**Alsar:** 我同意所有提出的观点。我认为强化学习让你能够超越导师或指导者所展示和告知你的内容，去最大化某些东西。我认为我们正处于如何定义这种“好”或“奖励”的十字路口，而可验证奖励无疑是一种可行的方法，因为它们非常清晰地定义了如何衡量。但许多任务我认为需要两者的结合。有些事情我们知道必须发生，比如如果你在编译代码，代码应该成功构建。但有些事情我们实际上不知道如何精确定义，比如你写了一篇摘要，或者你提供了一个创新想法，它到底有多创新？你的摘要有多好？我认为这就是我们需要从人类那里获得灵感，来指导我们如何塑造这个奖励函数的地方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I agree with all the points raised. I think u reinforcement learning kind of give you the capability to us go beyond of what a tutor or a mentor basically shows you and says hey this is what I want you to maximize and I think we are there on the cross puff how do we define this goodness or the cookie for the agent and verifiable rewards are definitely like a way to go because it's very crystal clear how to define them but many of the task I think requires a combination of both there are things that we know that has to happen if you're compiling code we whether the code should be built successfully but there are things that we actually don't know exactly how to define them like if you're writing a summary or if you are providing an innovative idea how innovative it is or how good is your summary and I think that's where we need to get inspiration from humans essentially to guide us to how to uh shape this reward function and there is a lot of litany of work of starting from like comparison and alignment DPO all of those algorithms all the way to now getting like richer richer using LLM to become I'm essentially a judge and fill the shoes of humans for those cases.</p>
</details>

**Alsar:** 从比较和对齐，到**直接偏好优化**（DPO: Direct Preference Optimization: 一种强化学习算法，直接优化语言模型以匹配人类偏好，无需显式奖励模型），所有这些算法，一直到如今使用**大型语言模型**（LLM: 拥有数千亿甚至万亿参数的深度学习模型，能够理解、生成和处理人类语言）变得越来越丰富，本质上充当评判者，在这些情况下取代人类的角色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and there is a lot of litany of work of starting from like comparison and alignment DPO all of those algorithms all the way to now getting like richer richer using LLM to become I'm essentially a judge and fill the shoes of humans for those cases.</p>
</details>

### 平衡可验证奖励与人类反馈

**主持人 (Bill):** 是的，我认为我们都在暗示下一个问题，即奖励设计本身可能不仅仅是完全可验证的。它可能是一种混合了可验证奖励和人类反馈及对齐类型奖励的设计。但困扰许多研究人员和产品人员的一个问题是，这里的黄金标准是什么？因为如果你有可验证奖励，基本上你不需要数据。但如果你有**人类反馈强化学习**（RHF: Reinforcement Learning from Human Feedback: 一种强化学习方法，通过收集人类对模型行为的偏好或评分作为奖励信号来训练模型）类型的信息，其中人类反馈作为判断依据，那么你实际上需要大量数据用于人类反馈。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I think we're alluding to the next question basically where uh reward design itself might not just be completely verifiable. Uh it might be like designing a mixture of like verifiable reward with like human feedback and alignment type of rewards. But um one of the things that is puzzling a lot of researchers and also production people is that like what is sort of the golden standard here right because if you have verifiable reward basically you don't need data but then if you have sort of RHF type of uh information where you have human feedback as one of the judgment um then you actually would require a lot of data for human feedback and then for very complex tasks like you know trying to solve a level I like um sort of chemistry Olympics or physics Olympics type questions. If you guys don't know, like a single data annotation on a response uh from a language model takes about $20 uh from a PhD. So, so where do we cut like how much data do we need? Uh is there a way that we can handle this uh mixture of verifiable and non-verifiable reward without actually data? Maybe this time we can start from Elbur.</p>
</details>

**主持人 (Bill):** 对于非常复杂的任务，比如解决化学奥林匹克或物理奥林匹克类型的问题。如果大家不知道的话，对语言模型响应进行一次数据标注，需要一位博士花费大约20美元。那么，我们应该在哪里进行权衡？我们需要多少数据？有没有一种方法可以在没有实际数据的情况下处理这种可验证和不可验证奖励的混合？这次我们从Alsar开始吧。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">For very complex tasks like you know trying to solve a level I like um sort of chemistry Olympics or physics Olympics type questions. If you guys don't know, like a single data annotation on a response uh from a language model takes about $20 uh from a PhD. So, so where do we cut like how much data do we need? Uh is there a way that we can handle this uh mixture of verifiable and non-verifiable reward without actually data? Maybe this time we can start from Elbur.</p>
</details>

**Alsar:** 我确定，我认为我们两者都需要。在现实中，我们希望考虑成本。人类的判断是昂贵的。正如Bill举例提到的，每个样本20美元，你需要大量数据，那会让你破产。所以我们希望确保你明智地使用它，但我们也不能完全忽视它，因为对于许多任务，我们实际上不知道如何创建这个奖励函数。所以，这更像是一种**主动学习**（Active Learning: 一种机器学习范式，算法能够选择最有信息量的样本进行标注，以最小化训练数据量）的情况。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm sure I I think we need both. Uh in reality, um we want to be cost uh aware. So humans judgments are expensive. as Bill mentioned as an example, $20 per sample and you need like gobs of data that would be like you know making your bank account break. Uh so we want to make sure that you are using it judiciously but we can't just also ignore that because for many of the tasks we actually don't know how to create this reward function. So it's more like a think of it as an active learning situation.</p>
</details>

**Alsar:** 你可以创建一个机制来评估你的LLM判断。例如，我们可以四个人决定一小部分数据集，如何评估和衡量它们。如果我们都同意，那么这就可以成为一个标准，然后去检查LLM判断，看看它们是否符合我们的协议。如果符合，那么这就可以成为一个低成本的、本质上不可验证的奖励，你可以将其应用于大量数据。然后，你可以通过主动学习来闭环，如果在某些领域，我们可以偶尔去看看你是否做得对，如果存在一些漏洞，我们必须回去，就像“嘿，让我们在这个领域收集一些数据，使其更好，然后再应用它”。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So you can create essentially a mechanism to gauge your LLM judges. So you can get like let's say four of us here decide about like a small set of data sets how we actually gauge those and measure those and if we all agree then this can be a rubric to then go and check LLM judges and see do they comply with our agreement and if they do then it can be a blessed now lowcost essentially nonverifiable reward that you can apply on the masses of data and then you can close the loop through like active learning if there are some areas we can occasionally go and see are you doing the right thing and if there is like some holes over there we have to go back it's like hey let's collect some data in this area make it better and then go back and apply it</p>
</details>

**Zwan:** 是的，我完全同意。我认为可能有两种方法来处理这个问题。首先，我们可能尝试将问题分解一下，因为即使是一个完整的问题可能不可验证，但我们也许可以将其分解成一些子任务，而其中一些子任务或步骤是可验证的。这基本上已经可以部分解决问题，并使问题变得容易。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I fully agree. I think that usually pre-training is a type where you acquire the general knowledge. So you want your model to be expressive and roughly roughly understand the world and post the training is you want to adapt it so that can become a expert in some field. I also want to mention that I think the exploration uh is crucial in cases where the data acquisition is very costly because here you cannot really acquire a lot of data. So you need to want to uh doing exploration to make sure that you acquire informative data.</p>
</details>

**Zwan:** 另一个解决方案显然是将人类纳入循环，这也是我们进行人类反馈强化学习的原因。我的意思是，在这种情况下，我认为探索非常关键。原因在于它成本高昂。所以你需要识别正确的专家来问正确的问题。这显然需要一个非常有效的探索算法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And another solution is obviously is to keep human in the loop and also that's why we do reinforcement learning from human feedback. I mean I think that if in this case exploration is very uh critical. The reason is that because it's so costly. So you want to identify the right expert to ask the right question. So this clearly request a very effective exploration algorithm.</p>
</details>

**Lihon:** 是的，这些都是很棒的想法。我想补充一点，可能还有另一种可能性，那就是观察模型的经验流。模型可以依靠自身能力或外部模型的能力，从这个经验流中提取信号并进行学习。归根结底，我认为有一点可能太显而易见了，那就是强化学习的能力受限于模拟器数据的质量，受限于你用于训练系统的环境的质量。所以，我认为所有这些都是很棒的想法，但最终我们需要在如何确保环境高质量方面做出权衡。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, these are the great ideas and uh I guess I just wanted to add that there's another maybe another possibility of looking at the uh the stream and experience of the model right for where the model can rely on it own capabilities or external models capabilities to extract signals from this experience stream of experience and do learning right um and then at the end of the day I think there's something that's maybe too obvious to say it is that um the capability of the power of RL is limited by how good a simulator data is how good environment you use to train the system right so I think um depends on how uh uh all these are great ideas but I think at the end of the day we need to make trade-off on how to make the make sure the environment is of high quality</p>
</details>

### 强化学习中的探索

**主持人 (Bill):** 我想深入探讨一下，因为我们提到了几个非常好的想法。一个是关于探索，另一个是关于混合了不同类型奖励和子问题分解的奖励。有很多想法浮出水面。我想先谈谈探索，并详细阐述一下，因为我认为这个小组的每个人在职业生涯的某个阶段都从事过探索方面的工作。这是许多强化学习研究人员今天没有足够重视的话题，因为你看到**近端策略优化**（PPO: Proximal Policy Optimization: 一种强化学习算法，通过限制策略更新的幅度来提高训练稳定性）、GRP算法、DPO算法，它们都在微调一个已经在崩溃模态下训练的现有模型。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I might want to actually dive into it a little bit because um we mentioned a couple of really good ideas. One uh around exploration the other around like uh rewards that's like a mixture of different types of reward and sub problem like breakdowns. Um there's a bunch of ideas that surface. I want to like touch on exploration first uh and elaborate on that a little bit because uh I think everyone on this panel actually worked on exploration at some point in your career. Um this is one of the topics that um a lot of RO people are today not focusing on enough because you see uh the the PP algorithm, GRP algorithm, DPO algorithm uh they're fine-tuning an existing model that has already been trained in a collapsing modality.</p>
</details>

**主持人 (Bill):** 当你对环境知之甚少，并试图探索和理解方程中最重要的部分时，探索才真正需要。所以，我想问Zwan的问题是，当你真正想诱导强大的探索行为时，预训练和后训练之间的平衡点在哪里？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And then exploration is really needed when you actually have like little information about the environment and trying to explore and understand like what's the most important part of the equation. So so the first the question for Jen is like um where do you think is the balance between pre-training and post- training when you actually really want to induce like strong exploration behavior?</p>
</details>

**Alsar:** 我认为我们希望确保在预训练期间，你有一个在广泛任务中表现良好的通用模型。如果你开始看到在某些任务中表现更好，但在其他任务中表现更差，那么你就走得太远了。我认为这就是你需要将其委托给后训练阶段的部分。从我的角度来看，预训练的主要作用是让模型对基础知识和如何在高层次上解决这些问题的关键要素有很好的理解，然后通过后训练，你可以在你真正关心的特定任务上进行微调。我认为这就是我的分界点，你可以全面查看你的评估，看看你是否开始在某些领域相对于其他领域出现模型退化。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think we want to make sure that during the pre-training like when you're doing the pre-training you have a generally good model across a wide set of task. If you start seeing that you're getting better in some of these tasks but worse in some other tasks you're doing to too far. And I think that's the part that you have to delegate that to the post-training essentially uh stage. The main to from my perspective the main role of the pre-training is to have a model that has a good understanding of fundamentals of the basics and the key ingredients of how to solve these problems in a higher level and then have the post training you can fine-tune on a specific task you actually care about it and I think that's the breaking point to me it's like you can look at your evaluation across the board and see if you are start regressing on some of these model in these domains compared to the other ones.</p>
</details>

**Zwan:** 是的，我完全同意。我认为通常预训练是你获取通用知识的阶段。所以你希望你的模型具有表达能力，并大致理解世界。后训练是你希望它适应某个领域，成为该领域的专家。我还想提一下，我认为在数据获取成本非常高的情况下，探索至关重要，因为在这种情况下你无法获取大量数据。所以你需要进行探索，以确保你获取到有信息量的数据。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I fully agree. I think that usually pre-training is a type where you acquire the general knowledge. So you want your model to be expressive and roughly roughly understand the world and post the training is you want to adapt it so that can become a expert in some field. I also want to mention that I think the exploration uh is crucial in cases where the data acquisition is very costly because here you cannot really acquire a lot of data. So you need to want to uh doing exploration to make sure that you acquire informative data.</p>
</details>

**Zwan:** 在并非每个人类或每个评估者都能提供有用反馈的情况下，探索也很重要。在这种情况下，你还需要探索以识别可以从中获取有用和信息丰富反馈的专家。对于探索，我认为今天的探索与我们通常谈论的探索非常不同。当预训练完成时，我认为探索空间已经非常有限了，对吧？我认为那里的目标只是确保模型有一个好的起点，并在你训练得有多好以及在后训练中训练模型有多快之间取得良好的权衡。至少这是我的理解。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It's also important in cases that not every human or every radar can give you some useful feedback. So in that case you also need to explore to identify an expert from which you can get the useful and informative feedback. Um for exploration I think that the um today's exploration is very different from what we talk usually talk about exploration. uh and when it pre-training is done, I think the space of exploration is already very limited, right? I think the goal there is just to make sure the model has a good starting point and and to get a good trade-off between how good you train and how fast you can train a model in post training. Uh at least that's my understanding.</p>
</details>

**Zwan:** 但是，我认为对于真正的或更激进的探索，研究超越令牌级别或更高级别的探索，然后将其与令牌级别探索结合起来可能会很有趣。我认为这可能允许模型在后训练过程中跳出固有思维或更积极地进行探索。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">uh and then uh but I think for uh for real or more aggressive exploration it might be uh interesting to look at uh beyond the token level or something that has more uh high level and do exploration there and then combine that with token level exploration. I think that may allow the model to think out of the box or maybe more aggressively in the post- training process.</p>
</details>

### 分层强化学习与抽象化

**主持人 (Bill):** 是的，这很棒。我认为这暗示了关于更高层次抽象和分层规划的两个问题。所以，如果大家没有听过**Rich Sutton**关于**OAK架构**（Options and Knowledge architecture: Rich Sutton提出的一种分层强化学习架构，强调选项和知识在规划中的作用）的最新演讲，它非常强调一种分层结构和在此之上的低层次规划。其思想是，你可以将非常复杂的任务分解成子问题，然后每个子问题都可以通过世界模型中的某种规划来解决，然后你实际上可以通过经验进行学习。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Uh that's great. I think that alludes to both questions of like higher level abstraction and also hierarchal planning. Um so if you guys haven't heard Rich Sutton's latest talk about the oak architecture, it emphasizes a lot about an uh hierarchal um structure of options and then also sort of like lower level planning on top of that. Uh so the idea is that you can actually break down very complex tasks into like sub problems and then each sub problem can be solved by some level of planning inside a sort of world model and then outside you actually can sort of learn by experience.</p>
</details>

**主持人 (Bill):** 所以，这里我想提出两个问题。你们中的任何人都可以回答其中一个，如果你们愿意的话。所以，一个是关于抽象和表示层面，如果我们真的想生成更长上下文的智能，我们应该在多大程度上超越令牌级别？第二个问题是，在推理中拥有分层结构有多重要？这两个问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here I want to pose two questions. questions and then any any one of you guys can like answer any one of them u if you wish. Um so so one is on the abstraction and representation level how much should we go beyond token level if we want to really generate uh longer kind of um context intelligence uh and the second how much is it important to have an hierarchal structure u in reasoning uh on both questions yeah</p>
</details>

**Zwan:** 是的，我确实认为这非常重要，最终我们会在AI中研究分层强化学习。原因在于目前，我的意思是，大多数信号都只是令牌级别的，而且级别非常低，这实际上导致了很多问题。例如，这导致了许多**信用分配问题**（Credit Assignment Problem: 在强化学习中，智能体在长期行为序列后才获得奖励，难以确定哪个具体行动对最终奖励贡献最大），以及数据效率问题。所以我确实认为这非常关键，最终我们应该走向更高的层次，走向更高的抽象，去研究子任务、计划、模块和函数，并在那里进行规划。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I do think that it's uh uh very important that eventually we look at hierarchical reinforcement learning in AI the reason is currently I mean um most of the signal are just a token level and it's so low level and this actually cause a lot of problem I mean for example this cause a lot of problem of credit assignment and also data efficiency so I do think this is very crucial that eventually we go to a higher level go to a higher abstraction to look at something like subtasks plans modules and functions and do planning there.</p>
</details>

**Zwan:** 我认为如果我们最终想要实现非常长期的目标，这非常关键。我也相信，如果我们正确地做到这一点，它可以显著提高数据效率，并更好地解决信用分配问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I think that if we eventually want to look at a very uh long horizon, I do think this is very crucial and I also believe that if we do it correctly, it can significantly improves data efficiency and also better solves uh credit assignment problem.</p>
</details>

**Lihon:** 是的，我也同意我们需要某种高层次的结构，并将其与令牌级别结合起来。不过，在这个问题中可能存在一个区别，那就是当我们谈论推理时间，即模型最终产生输出的执行过程时，至少在当前框架下，它仍然是令牌级别的，一个接一个。但我猜我试图表达的是，这种高层次思维或高层次训练可能在后训练阶段是必需的，在那里我们设置奖励模型，设置问题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. So I I also agree that u we we need something like that uh at high level and combined with the token level. uh there's there may be a distinction though in this in this uh in the question that uh when we talk about the inference time the execution at the end of the day when the model produce the output is still at the token level one by one at least the current in the current framework but I guess what I was trying to say to to express is that um this high level thinking or high level training may be needed in the post- training stage where we set up the reward model we set up the problem right</p>
</details>

**Lihon:** 这就是我们如何向模型发出信号，让它在高层次上学习如何从局部最小值跳到策略空间中更好的景观，而不是在令牌级别进行这种狭窄或低代码的探索。但最终，在推理时间，我认为我们可能仍然在关注令牌级别的操作。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and that's how we give a signal to the model to learn in the high level how to jump from local minimum to another better better landscape of the policy space as opposed to doing this narrow or low code exploration at token level right but at the end of the day and then in the inference time I think it's still still probably we're still looking at the token by token level</p>
</details>

**Alsar:** 所以，我实际上很喜欢这个方向，但我想把它推得更远。我们人类在计划去日本旅行时，不会考虑为了实现这个目标而需要做的小肌肉抽搐，比如出门，然后打车，然后去机场，然后搭飞机。我们实际上是在更高层次的抽象上思考。我们思考的是，好的，我需要从这里打车，然后搭飞机，然后去酒店，然后你再把这些分解成更低层次的决策，比如，如果我想打车，我怎么做？我叫Uber或Lyft之类的。

<details>
<summary>View/Hide Original Original English</summary>
<p class="english-text">So I'm going to I I actually like the direction that this is going but I want to take it even further so we as humans when we want to plan to go to Japan for example from here we don't think about the little muscle twitches that we have to make in order to make that happen which is like go through the door and then take a cab and then go to the you know take a take a plane we actually think on a higher level of abstraction we think about okay I need to get a cab from here then take the plane and then go to the hotel and then you start bringing those back into a lower level decision it's like okay if I want to take a cab how do I do it I call an Uber or a lift or something like that and I think this is what I'm thinking currently LLMs are missing.</p>
</details>

**Alsar:** 我认为目前LLM缺少的就是这一点。我们仍然在令牌级别思考，这相当于人类的肌肉抽搐。我认为当你开始解决越来越大的问题时，你需要这种抽象级别，才能让你规划得那么远。而实现这一点的一种方式，正如Lihon刚才提到的，是当你想要进行回溯时，你实际上会考虑更远的决策结果，然后将其带回来，而不是等待它通过所有令牌层层渗透。但比这更高一个层次的是，你实际上有一个策略，它在更高的层次上思考，因为我们就是这样思考的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh we are thinking in the token level still which is the muscle twitches of humans and I think as you start going into bigger and bigger problem you want to solve you need that level of abstraction in order to let you plan that far down the road and uh the one way of doing it which what Lee Leehung just mentioned is like when you want to do the backups you actually think about further away decision outcomes and then bring them back in rather than waiting for this to trickle through all the tokens. But one level higher than that is you actually have a policy actually thinks in a higher level because we think that way.</p>
</details>

**Alsar:** 所以我们可以有一个策略来思考，为了达到那个结果，我必须做哪些高层次的事情链条，比如我必须调用这个工具，然后通过那个东西过滤结果，然后做其他事情，才能得到我想要的推理。我认为这就是目前我没有看到太多工作的方向，但我认为这将是真正开启这些LLM推理新时代的方向。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we can have a policy to think is like what are the chain of highle things that I have to do in order to get to that outcome like I have to do like I have to call this tool and then get the results filtered by that thing and then do something else in order to get to the reasoning that I want. And I think that's the way currently there's not much work that I have seen out there, but I think that would be the direction to actually unlock the whole new era of reasoning available through these LLMs.</p>
</details>

### 基于过程的奖励与模型规模

**主持人 (Bill):** 太棒了。我想补充一个我之前没有发给你们的问题。它正是在这个方向上，当我们谈论分层强化学习，特别是训练LLM时，人们在训练LLM中尝试了很多的一件事是添加基于过程的奖励。如果你想在某种程度上进行分层强化学习，你必须有基于过程的奖励，比如在你完成整个长达10,000个令牌的序列之后，在结束之前，中间会有检查点，比如“好的，我完成这个任务后，这是奖励，下一个任务，另一个奖励”，以此类推。你们认为在未来几年，我们在训练LLM时，是否真的很难推导出某种过程奖励？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That's great. Um I want to add one question I didn't send you guys before. um uh it's exactly on this line where um so when we're talking about hierarchical RL um and then also especially when you're training LMS one of the things that people have tried a lot u in training LMS to is to add process based reward um and then if you want to do hierarchal RO to some extent you have to have process based reward like after you finish the whole you know like 10,000 token long sequence before you end there will be checkpoints in the middle like okay after I finish this task here's the reward next task another reward and so on so forth. Uh would you guys think like it is really hard for us to really sort of derive some sort of process reward um when we're training LMS in the next like few years?</p>
</details>

**Zwan:** 是的，我确实认为这是一个非常有前景的方向。我的意思是，肯定存在一些挑战，但总的来说，我对此感到乐观。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I I do think this is a very promising direction. I mean definitely there are some challenges but overall I'm optimistic about that.</p>
</details>

**Lihon:** 是的，我认为这是一个有趣且有前景的尝试。我认为在某种程度上，尽管现在基于结果的奖励似乎很有效，但我可以想象在某些复杂问题中，我们需要一些中间信号。即使现在，我认为当你调用一长串智能体调用时，一些最近的研究发现，拥有一些中间信号是有益的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I think that's um interesting uh promising idea to try. I think at some point uh although right now I think uh outcome based reward seems to go a long way but uh I can imagine that in some complex problems we need some intermediate signals even for now I think when you call a long sequence of agent calls I think uh people some some recent work is finding that uh it's beneficial to have some intermediate signals right</p>
</details>

**Lihon:** 另外一点我想说的是，这种过程奖励或中间奖励不一定是最终奖励。它可以作为课程训练的一部分解决方案或技术。我们可以在开始时使用中间奖励来指导解决方案，指导探索，然后最终你取消中间奖励，只让模型从最终奖励中学习。所以，我认为这是另一种可能性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">and also another point want to make is that um this out process reward or intermediate reward. They don't have to to be final reward. It can be used as a uh a solution or a technique as part of a curriculum training. We use intermediate reward at the beginning to guide the solution to guide exploration and then eventually you take away the intermediate reward and only let the model learn from the final reward. So I think that's another possibility.</p>
</details>

**Alsar:** 我们最近非常具体地研究了这个问题。如果你想阅读那篇论文，它实际上在arXiv上。但在某种程度上，它也取决于你开始使用的模型。更大的模型通常有更强的能力。所以如果你给它们一个问题去解决，它们可能会更容易找到一个可行的解决方案，而不是完美的解决方案，但它们可以达到某个地方，我实际上在最后看到了这个可验证的奖励。因为如果你的模型根本看不到那个好的奖励，那么你就什么也学不到。但对于较小的模型，它们可能实际上无法做到这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We actually recently looked at that problem very specifically. It's actually on archive if you want to read that paper. But it to some extent is it also depends on the model that you're starting with. Uh bigger model often have more power. So if you give them a problem to solve, they probably would find easier to a workable solution, not the perfect solution, but they can get to somewhere that I actually see this verifiable reward at the end. Because if your model cannot see that good cookie at the end at all, then you can't learn anything. But for the smaller models, they might not actually be able to do that.</p>
</details>

**Alsar:** 所以Lihon刚才提到的事情，对于较小的模型来说更为重要，它们需要能够获得更丰富、更密集的奖励，这样它们才能一路找到出路，达到一个好的结局。而对于更大的模型，它们可能不需要在奖励模型开始时进行那么多的“按摩”就能使其工作。但我们发现一个有趣的发现是，在一个领域中，如果你能很好地塑造较小的模型，你实际上可以节省大约三到四倍的计算量，并达到相同的结果。所以，这是一个平衡，你能在你的工作函数上付出多大的努力，使其对模型足够有信息量，从而能够解决问题。但你却能获得GPU成本上的好处，而现在每个人在这方面都资源有限。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So the thing that Lee Hung just mentioned, it is much more important for a smaller models to actually have access to a more enriched dense reward. So they can find their way out all the way to the end, a good end versus as you go through the bigger model, they might not need as much as massaging in the beginning for the reward model to make it work. But uh the interesting finding if you had is that one domain but a smaller models if you actually shape them well you can actually get about three to four times compute saving and get to the same outcome. So it's a balance of how how hard you can actually work on your work function to actually make it informative enough for the models to be able to tackle the problem. But you rip the benefits in GPU cost which now everyone has limited resources of.</p>
</details>

**主持人 (Bill):** 是的。这也带来了探索的重要性，对吧？如果你在最后只有非常稀疏的奖励，那么除了探索之外，另一种可能的方法是增加更多有洞察力的中间奖励。好的。让我们转向一个不同的主题。我想我们已经谈论了足够多关于如何在LLM上训练强化学习智能体，但我想更具前瞻性地探讨强化学习最终会把我们带向何方。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. And that also brings like importance in exploration, right? If you have like very sparse reward at the end, um instead of just doing exploration, another way you could potentially do is probably adding more insightful intermediate rewards. All right. Um let's move on to a different topic. I I think we've talked enough about how to train RL agents on LMS, but I think we want to do a little bit more forward looking on where does RL really land us.</p>
</details>

### 强化学习生成新知识与创新的潜力

**主持人 (Bill):** OpenAI多年前（可能没那么多年，因为ChatGPT问世时间不长）曾提出过一个智能级别，从聊天机器人到推理者，再到创新者，最终成为一个组织。我认为在某种程度上，这是一种产品策略，但在某种程度上，它也展示了LLM和大型模型在科学能力方面的潜力。所以，我想问小组的问题是，强化学习的路径最终能否让我们有可能生成新知识，并通过纯粹的强化学习推理成为真正的创新者？还是说这需要大量额外的人工标注数据才能实现？我想我们已经尝试了所有顺序，所以我们回到开头。Lihon，也许你可以开始。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, so one of the things that OpenAI has brought up many years ago, probably not that many years ago because Chad GPD wasn't out for that many years, um, is the level of intelligence from, you know, just a chatbot to, you know, a reasoner, um, to an innovator and eventually become an organization. Um I think to some extent it's a it's an product play but uh to some extent as well it is sort of showcasing the capabilities of LMS uh and and large models in terms of their um sort of like capabilities u scientifically. So, so the question to the panel is like um can the route of RL eventually um give us the possibility of generating new knowledge and being actually an innovator um through pure RL reasoning or does that require uh a lot of additional data that that's human annotated for this to happen? I think we've tried all all orders so we're going to go back to the beginning. Uh Leo, maybe you can start.</p>
</details>

**Lihon:** 当然，这是一个很好的问题。是的，我认为强化学习有可能在没有人类劳动的情况下创造新知识。正如我们所看到的，我认为有一个成功案例，你让强化学习系统或模型在数学领域进行探索，你可以发现新的数学事实。我认为这些都是例子。但我只想回到我之前的一个观点，即强化学习的上限取决于模拟器或模型的质量。如果我们提供给强化学习系统的模型是以规则的形式，或者只是我们人类所了解的知识，我认为最终强化学习只能在这个框架内探索错误的知识或新知识，它无法创造新的物理理论或新的学科。我认为为了超越这一点，我们需要一些不同的东西，或者说一些根本不同的东西。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Sure. Yeah, great question. Um yeah I think it's possible right for RL to create new knowledge from uh without human labor right um um and then as we have seen that uh I think there is a success story where uh you let the RL system or model to explore in math you can find new mathematical facts I think these are examples um but I just want to go back to an earlier point I I making that the the ceiling of RL is depends on how good the simulator is or how good the model is if the model we provide the RL system is in a form of the rules or just the uh the knowledge we know about human know I think the at the end of the day the RL can only explore wrong knowledge or a new knowledge in this framework it won't be able to tell to create new physics theory right or or new new discipline um I think to in order to go beyond that I think we need something different or something fundamentally different probably</p>
</details>

**Zwan:** 是的，我确实同意。我感觉，正如Lihon刚才提到的，它显然取决于环境模型，更具体地说，取决于动力学模型和奖励模型。所以，我认为对于那些我们拥有相对准确的环境模型的领域，并且假设我们以相当正确的方式进行计算，我确实觉得强化学习范式可以带我们走得很远。但可能有些领域，要么不可能，要么成本太高，无法进行非常准确的模拟。我的意思是，在这些领域，强化学习可能不是最佳的前进范式，我们需要使用一些可用的数据，或者采用另一种思维范式来前进。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I do agree I feels like I mean as Lihon has just mentioned so I mean I is clearly depends on the model of the environment I mean which most specifically depends on the model of the dynamics model of the reward. So I think that for the means of fields where we have relatively accurate uh environment model and uh also suppose we do the compute in a reasonably correct way. I do feel that the IO paradigm can take us very far away. Uh but there might be some fields where that either it's impossible or too costly to do some very accurate simulation. I mean in such fields and probably I mean I is not the best paradigm to move forward and we need to either use some available data side of thinking another paradigm to move forward.</p>
</details>

**Alsar:** 首先我想回答，我认为AI已经向我们展示了它们可以做出超越人类的发现。如果你关注**AlphaGo**（AlphaGo: DeepMind开发的一款围棋AI程序，曾击败人类世界冠军），或者你知道它下出的第37手，那是一个AI下的棋，所有人都认为在3000年的围棋历史中，这是一个错误，但后来事实证明这实际上是致胜的一手。所以，那是一个反直觉但却奏效的举动，它与Lihon和Zwan都提到的观点一致，即如果你有一个好的模拟器（在围棋中就是如此），以及一个非常好的奖励函数，最终它就能超越任何人类所能做到的。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So first I want to answer I think AI has shown us already they can do discovery beyond humans. If you follow Alph Go or uh you you you know move 37, it's like a move that the AI made that everyone thought with the 3,000 years of Go history, they thought this was a mistake and then later on it turned out that this was actually the winning move. So it was something counterintuitive but it worked and it aligns what what both Lee Hung and Jen mentioned which is if you have a good simulator which in terms of go it was and also a really good reward function eventually it can go beyond what every human is capable of doing so and I think for LLM we are changing the domain we are going towards like understanding new physics and dynamics or like material but the problem is the same if you have a really good simulation that the agent can freely explore go beyond on what humans actually providing and also really really good rich reward function. I think it is very very much possible given the past history that we have seen in this space.</p>
</details>

**Alsar:** 我认为对于LLM，我们正在改变领域，我们正在走向理解新的物理和动力学或材料，但问题是一样的：如果你有一个非常好的模拟，智能体可以自由探索，超越人类实际提供的东西，并且还有一个非常好的、丰富的奖励函数。我认为，鉴于我们在这个领域看到的过去历史，这非常非常有可能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And I think for LLM we are changing the domain we are going towards like understanding new physics and dynamics or like material but the problem is the same if you have a really good simulation that the agent can freely explore go beyond on what humans actually providing and also really really good rich reward function. I think it is very very much possible given the past history that we have seen in this space.</p>
</details>

### 超越数值奖励

**主持人 (Bill):** 是的。好的。我想提的一点是，超越我们刚才谈论的创新，这又回到了计算的基本原理，即验证从根本上比生成或创建解决方案更容易。所以很多时候，当我们谈论这些创新系统上的验证时，它们基本上就是他们想要的模拟器。现在我想补充的额外问题是，我们有没有可能超越数值奖励？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. Um cool. So one of the things I I do want to mention is like um going beyond what we were just talking about innovation um um is like this goes sort of back to the the fundamentals of compute where uh verification is fundamentally easier than uh sort of generation or creating solutions. So um a lot of times that we're talking about verifications uh on these innovation innovative systems they are basically the simulator they want. Now the the additional question I want to add on here is is there a possibility that we can go beyond like numerical rewards.</p>
</details>

**主持人 (Bill):** 因为在很多情况下，就像Zwan说的，强化学习系统的验证系统或模拟器依赖于二元或数值奖励信号，以便我们能够训练强化学习系统朝着那个方向发展。那么，我们有没有可能超越数值奖励系统，从而在不实际用数值奖励进行标注的情况下，学习更智能的东西？这是一个完全开放式的问题。所以如果你没有答案，请随意跳过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um because in a lot of situation like what Jen said like verification systems or simulators of RL systems they rely on a binary or numerical reward signal for us to be able to train RL system going that direction. So is there a possibility that we can go beyond numerical reward system um to be able to sort of like learn something smarter without like actually annotating with numerical rewards? This is a complete open end question. So feel free to skip if you don't have an answer for this.</p>
</details>

**Alsar:** 嗯，我实际上有一个问题要问你。你说的非数值奖励是什么意思？归根结底，我们正在进行大规模的矩阵乘法。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I have a question for you actually. What do you mean by non numerical rewards? At the end of the day we're doing all this matrix multiplication at scale. So</p>
</details>

**主持人 (Bill):** 对。所以，你可以想象，例如，词语的概率分布，在令牌级别上，它们技术上不是奖励，对吧？它们基本上是概率。你能不能利用这种概率分布作为指导来训练我们的系统，而不是仅仅在最后使用一个最终奖励作为奖励信号？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">right. So, so like you can think of like for example um the probability of distribution of words like on on the token level um they're not technically reward right they're they're basically probabilities can you leverage those kind of like probability distributions as a guidance for you to train our system instead of just like using like one final reward at the end uh as a reward signal.</p>
</details>

**Alsar:** 我可以先试着回答一下。Rich是一个学生。从Rich的角度来看，一切都必须归结为一个单一的数值奖励函数。Rich有一个非常有趣的播客，我强烈推荐大家去听。但其他人会说：“嘿，我们人类有很多想要最大化的东西。我们有家庭，有工作，有职业抱负，我们有，我不知道，乐趣，爱好。所有这些如何变成一个单一的奖励函数？”他的回答是，也许我们想要最大化的只有一件事，它只是以各种方式在我们的生活中展现出来。他相信，对于智能体来说，也会是同样的事情。如果你找到了应该驱动智能体的东西，所有这些惊人的行为实际上都会从那个最大化信号中涌现出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So I I can start taking a crack at it. I'm Rich is a student. From Rich's perspective, everything has to come down to a singular numerical reward function. And uh there is there is a really interesting podcast with Rich. I highly recommend go listen to it. But other people say, "Hey, we as humans, we have a lot of things that we want to maximize. We have family, we have work, we have uh career inspiration, we have like I don't know fun, hobbies. How all of those become one single reward function?" And his answer is like maybe there is a single thing that we want to maximize and it just uh shows itself in various ways in our life. And his belief is that for the agents it's going to be the same thing. If you find that what should drive the agent all of these amazing behaviors would actually emerge from that maximizing signal.</p>
</details>

**Alsar:** 但回到你的问题，也许其中一些可以来自偏好。也许我们无法给出一个具体的分数，比如“这有多好是7分”。我们不知道，但如果你问足够多的人，比如“这个比那个好吗？”我们知道人类在这项工作上比给出“这个摘要有多好”的分数要好得多，也许我们可以从中反向推导出来。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But to your question maybe some of these can come from preference. Maybe we cannot put a point that is like how good this is is 7. We don't know but if you ask enough from people it's like hey is this one better than that one? We know that humans are much better in that job compared to give you like how good is this summary and maybe we can then walk backwards from that and for example extract that</p>
</details>

**主持人 (Bill):** Zwan，你想快速尝试一下吗？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">J you want to take a quick stab at it.</p>
</details>

**Zwan:** 是的，我有点同意。我认为确实有一些观点认为奖励应该是一个向量或一个概率分布。但对于当前的范式，最终，我的意思是，如果真是这样，似乎你还没有完成你的奖励模型，并且你需要以某种方式将向量或概率分布转换为一个标量，以便进行优化。我想提一个例外，在**多智能体强化学习**（Multi-Agent Reinforcement Learning: 多个智能体在同一环境中学习和交互的强化学习）中，你可以认为每个智能体都有自己的奖励。所以在这种情况下，你可以认为奖励是一个向量，而且在这种设置中，你将处理像**纳什均衡**（Nash Equilibrium: 博弈论中的一个概念，指在非合作博弈中，每个参与者在已知其他参与者策略的情况下，选择自己的最优策略，且没有参与者可以通过单方面改变策略而获得更高收益）这样的概念，我的意思是，这与仅仅进行优化有点不同。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah, I kind of agree. I think there do have some sightings in which we think the reward should be a vector or a reward should be a probability distribution. But for the current paradigm, eventually I mean if that's the case seems you have not finished your reward model and somehow you need to convert the vector or the probability distribution into a scalar so that you can optimize. I do want to mention uh an exception is in multi- aent reinforcement learning you can think each agent has its own reward. So in this case you can think the reward is a vector and also in such settings you will deal with a notions like nash equilibrium I mean which is a little bit different than just doing optimization.</p>
</details>

**Lihon:** 好的。非常简短地说，我认为数值奖励是必需的，但在此之上，我认为也许是多维度的数值奖励。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Cool. very briefly I think numerical rewards I think we need that something like but on top of that I think maybe multi-dimension of numerical rewards</p>
</details>

### 强化学习的近期进展展望

**主持人 (Bill):** 好的，是的，这在很大程度上也涉及到广义价值函数之类的东西。是的，我只是想抛出一个有创意的问题，这样就会有讨论，而不是预先想好的答案。好的，我们时间差不多了，所以我想花最后几分钟问每位嘉宾，你们认为强化学习在未来一年左右能给我们带来哪些最接近的进展，无论是在个性化、规模化，还是任何AI系统进展方面？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">cool yeah that goes to a lot to the generalized file function stuff as well um yeah I just want to throw one creative question out there so that there's actually a discussion then pre thought of uh answers all right so we're almost out of time so I want to to uh spend the last few minutes trying to like ask each panelist about where do you guys think uh the most near-term kind advancement that RL can bring us uh either on personalization scaling or just any AI system advance advancements you will see from RL in the next year or so.</p>
</details>

**Alsar:** 既然我说了这么多，我认为抽象化是必由之路。我对此非常热情。我认为它会给我们带来很多好处。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Uh since I spoke a lot I think the abstraction is the way to go. I'm very passionate about it. I think it's going to give us a lot of goodies coming abraction abstraction.</p>
</details>

**Zwan:** 实际上，我也有同样的答案。我的意思是，我认为分层强化学习和抽象化是必由之路。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">actually I have the same answer. I mean I think hierarchical reinforcement learning and abstraction is the way to go.</p>
</details>

**Lihon:** 是的。在此之上，我认为另一个可能有用或富有成效的方向是，我们如何从更多样化的数据中学习，而不仅仅是可验证的和LLM作为评判者之类的奖励信号。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Yeah. On top of that, another uh direction I think may be useful to look at is the uh or fruitful is uh how we can learn from more diverse data not beyond verifiable and LRM is a judge kind of reward signals.</p>
</details>

**主持人 (Bill):** 好的，很棒。这就是我们今天的所有内容。非常感谢大家的关注，希望大家今天有所收获。谢谢大家。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">All right, cool. Uh that's everything we have for today. Um thank you guys so much for the attention and hopefully hopefully you guys learned something uh today. Thank you guys.</p>
</details>

**Zwan:** 谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Thank you.</p>
</details>

**Alsar:** 太棒了。谢谢。谢谢各位先生。非常感谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Great. Thank you. Thank you, gentlemen. Thank you so much. Very very</p>
</details>