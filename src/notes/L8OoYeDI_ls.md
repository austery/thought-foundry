---
area: tech-engineering
category: ai-ml
companies_orgs:
- Vercel
- GitHub
date: '2025-08-06'
draft: true
guest: ''
insight: ''
layout: post.njk
people:
- John
products_models:
- GPT-4
- ChatGPT
project: []
series: ''
source: https://www.youtube.com/watch?v=L8OoYeDI_ls
speaker: AI Engineer
status: evergreen
summary: Vercel V0工程师Ido Pesok深入探讨了大型语言模型（LLM）在生产环境中的固有不可靠性。他指出，传统的单元测试不足以应对AI应用的挑战，并引入了“Evals”（评估）作为一种系统性方法来衡量和提升AI应用的可靠性与质量。通过一个“水果字母计数器”的例子和篮球场比喻，他详细解释了如何构建有效的Evals，包括数据收集、任务设计、确定性评分以及将Evals整合到持续集成流程中，最终实现更高的用户转化率和留存率。
tags:
- ai-application-evaluation
- geopolitical
- llm
- software
title: LLM应用评估：为何Evals不是单元测试
---
### Vercel V0：AI 应用评估的实践之路

我叫Ido，是Vercel的工程师，目前负责**Vercel v0**（Vercel v0: 一个全栈的“氛围编码”平台）项目。如果你还不了解，Vercel v0是一个全栈的“氛围编码”平台，它是最简单、最快速地在网络上进行原型设计、构建并表达新想法的方式。这里有一些人们在Twitter上构建和分享的精彩案例。为了让大家了解最新进展，我们最近推出了GitHub同步功能，现在你可以直接从V0将生成的代码推送到GitHub。你还可以自动将GitHub上的更改拉取到你的聊天界面，并且可以切换分支、创建**PRs**（Pull Requests: 拉取请求，软件开发中用于合并代码的机制），与团队协作。我非常高兴地宣布，我们最近发送的消息数量已突破1亿条，我们也很期待未来能继续成长。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">My name is Ido. I'm an engineer at Verscell working on Vzero. If you don't know, Vzero is a full stack Vibe coding platform. It's the easiest and fastest way to prototype, build on the web, and express new ideas. Uh, here are some examples of cool things people have built and shared on Twitter. And to catch you up, we recently just launched GitHub sync, so you can now push generated code to GitHub directly from VZO. You can also uh automatically pull changes from GitHub into your chat, and furthermore, switch branches and open PRs to collaborate with your team. I'm very excited to announce we recently crossed 100 million messages sent and we're really excited to keep growing from here.</p>
</details>

本次演讲的目标是介绍**Evals**（Evaluations: 评估AI模型或应用性能的方法），特别是在应用层面的Evals。你可能已经习惯了研究实验室在模型发布时引用的评估层，但本次演讲将侧重于Evals对你的用户、应用和数据意味着什么。模型现在已经投入实际使用，离开了实验室，它需要为你的特定用例服务。为了说明这一点，我将讲述一个关于“水果字母计数器”应用的故事。如果名字还没有透露，它就是一个计算水果中字母数量的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So my goal of this talk is for it to be an introduction to eval specifically at the application layer. You may be used to eval layer which is what the research labs will site in model releases but this will be a focus on what do evals mean for your users, your apps and your data. The model's now in the wild, out of the lab, and it needs to work for your use case. And to do this, I have a story. Uh, it's a story about this app called Fruit Letter Counter. And if the name didn't already give it away, all it is is an app that counts the letters in fruit.</p>
</details>

### LLM 的固有不可靠性：从“水果字母计数器”说起

我们的愿景是使用**ChatGPT**制作一个Logo。也许已经有了产品市场契合度，因为X（前身为Twitter）上的每个人都渴望知道水果中有多少个字母。如果你没听懂，这是一个关于“草莓中有多少个R”提示的玩笑。我们将让Vzero来制作所有的用户界面和后端，然后就可以发布了。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, the vision is we'll make a logo with Chachi BT. Uh, there might be product market fit already because everyone on X is dying to know the number of letters in fruit. If you didn't get it, it's a joke on the how many Rs are in a strawberry prompt. Uh we'll have Vzero make all the UI and backend and then we can ship.</p>
</details>

我们让Vzero编写了代码，它使用了**AI SDK**（AI Software Development Kit: 人工智能软件开发工具包）进行流式文本调用。结果如何？它第一次就成功了！**GPT-4**（Generative Pre-trained Transformer 4: 一种大型语言模型）说有三个字母。它不仅说了一次，我还测试了两次，两次都成功了。所以，从那时起，我们就可以发布了，对吧？让我们在Twitter上发布吧：“想知道水果中有多少个字母吗？刚刚推出了fruitlettercounter.io。”（因为.com和.ai域名都被占用了）。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So we had Vzero write the code. It it used uh AI SDK to do the stream text call and what do you know? It worked first try. GPT 4.1 said three. And not only did it say three once, I even tested it twice and it worked both times in a row. So from there we're good to ship, right? Let's launch on Twitter. Want to know how many letters are in a fruit? Just launched fruitlettercounter.io. The.com andai were taken.</p>
</details>

一切进展顺利。我们在Vercel上发布并部署了应用，开启了流式计算，直到我们突然收到这条推文。用户John说：“我问草莓中有多少个R，它说有两个。”当然，我刚刚测试了两次，这怎么可能呢？我想你已经明白我的意思了，那就是**LLMs**（Large Language Models: 大型语言模型）本质上可能非常不可靠。这个原则从小型的字母计数应用，一直延伸到全球最大的AI应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and yeah, everything was going great. We launched and deployed on versell. We had fluid compute on until we suddenly get this tweet. John said, "I asked how many Rs in Strawberry and it said two." So, of course, I just tested it twice. How is this even possible? Um, but I think you get where I'm going with this, which is that by nature, LMS can be very unreliable. And this principle scales from a small letter counting app all the way to the biggest AI apps in the world.</p>
</details>

认识到这一点非常重要，因为没有人会使用一个无法正常工作的应用。它简直是无法使用的。这是构建AI应用时面临的重大挑战。我这里有一个有趣的梗图，但基本上AI应用具有一个独特的特性：它们非常“擅长演示”。你演示它时，它看起来非常好，你会向同事展示，然后你将其发布到生产环境，突然之间，幻觉（hallucinations）就会出现并困扰你。因此，我们在构建时总是牢记这一点。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The reason why it's so important to recognize this is because no one is going to use something that doesn't work. It's literally unusable. Um, and this is a significant challenge when you're building AI apps. So, I have a funny meme here, but basically AI apps have this unique property. They're very like demo savvy. You'll demo it, it looks super good, you'll show it to your co-workers and then you ship to prod and then suddenly hallucinations come and get you. Um, so we always have this in in the back of our head when we're building.</p>
</details>

### 提示工程的局限性与关键的5%

回到我们之前的问题。我们不能放弃，对吧？我们确实想为用户解决这个问题，想制作一个真正优秀的水果字母计数应用。你可能会问，我们如何才能制作使用LLM的可靠软件呢？我们最初的提示只是一个简单的问题，对吧？但也许我们可以尝试**提示工程**（Prompt Engineering: 通过设计和优化输入提示来引导LLM生成所需输出的技术）。也许我们可以添加一些思维链（chain of thought）或其他东西，使其更可靠。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">back to where we were. Let's actually not give up, right? We actually want to solve this for our users. We want to make a really good fruit letter counting app. So you might say, how do we make reliable software that uses LLMs? Our initial uh prompt was a simple question, right? But maybe we can try prompt engineering. Maybe we can add some chain of thought, something else to make it more reliable.</p>
</details>

于是，我们熬夜制作了这个新提示：“你是一个热爱水果的AI，正在进行一项史诗般的任务……”这次，我们在ChatGPT上连续测试了10次，每次都成功了。连续10次！太棒了！所以，我们发布了，一切进展顺利，直到John再次发推文给我，他说：“我问草莓、香蕉、菠萝、芒果、猕猴桃、火龙果、苹果和覆盆子中有多少个R，它说有五个。”

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we spend all night working on this new prompt. Uh you're an exuberant fruitloving AI on an epic quest dot dot dot. Uh and this time we actually tested it 10 times in a row on ChachiBT. And it worked every single time. 10 times in a row. It's amazing. So, we ship and everything was going great until John tweeted on me again and he said, "I asked how many Rs are in strawberry, banana, pineapple, mango, kiwi, dragon fruit, apple, raspberry, and it said five."</p>
</details>

我们又一次让John失望了。尽管这个例子很简单，但这正是当你开始部署到生产环境时会发生的情况。你会遇到用户提出你从未想象过的查询，你必须开始思考如何解决它。一个有趣的事实是，我们应用95%的功能在100%的时间里都能正常工作。我们可以为每个函数进行单元测试，为登录、退出等进行端到端测试，所有这些都会正常工作，但正是那最关键的5%可能会让我们失败。所以，让我们来改进它。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we failed John again. Um, although this example is pretty simple, but this is actually what will happen when you start deploying to production. You'll get users that come up with queries you could have never imagined and you actually have to start up thinking about how do we solve it. And an interesting thing if you think about it is 95% of our app works 100% of the time. We can have unit tests for every single function end to end test for the off the login the sign out it will all work but it's that most crucial 5% that can fail on us. So let's improve it.</p>
</details>

### Evals 的核心要素：数据、任务与评分（篮球场比喻）

为了更直观地展示这一点，我为大家准备了一张图表。希望大家能看到代码。嗯，也许我需要把屏幕调亮一点。大家能看到代码吗？我不知道。好吧。嗯，我们会再回到这里。但基本上，我们将开始构建Evals。为了形象化，我用一个篮球场来比喻。今天是NBA总决赛的第一天，我不知道大家是否关心。你不需要了解太多篮球知识，只需要知道有人正试图把球投进篮筐。这里的篮筐就是那个发光的金色圆圈。蓝色代表投篮命中，红色代表投篮失误。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now to visualize this I have a diagram for you. Hopefully you can see the code. Uh maybe I need to make my screen brighter. Can you see the code? I don't know. Okay. Um Okay. Well, we'll come back to this. But basically, we're going to start building evals. And to visualize this, I have a basketball court. So, today's day one of the NBA finals. I don't know if you care. Um you don't need to know much about basketball, but just know that someone is trying to throw a ball in the basket. And here the basket is the glowing golden cir uh glowing golden circle. So blue will represent a shot make and red will represent a shot miss.</p>
</details>

一个需要考虑的特性是，你的投篮离篮筐越远，难度就越大。另一个特性是球场有边界。所以，这个蓝点虽然投进了，但它在场外，因此在比赛中不算数。让我们开始绘制我们的数据。这里有一个问题：“草莓中有多少个R？”在我们使用新提示后，这可能就会成功。所以，我们将其标记为蓝色，并放在靠近篮筐的位置，因为它相对容易。然而，“那个大数组中有多少个R？”我们会将其标记为红色，并放在离篮筐更远的地方。希望大家能看到。也许我们可以调亮一点。但这正是我们Evals的数据部分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And one property to consider is that the farther away your shot is from the basket the harder it is. Uh another property is that the court has boundaries. So this blue dot although the shot goes in it's out of your uh out of the court. So it doesn't really count in the game. Let's start plotting our data. So here we have a question. How many Rs in strawberry? This after our new prompt will probably work. So, we'll label it blue. Um, and we'll put it close to the basket because it's pretty easy. However, how many Rs are in that big array? We'll label it red. And we'll put it farther away from the basket. Hopefully, you can see that. Maybe we can make it a little bit brighter. But this is the data part of our eval.</p>
</details>

基本上，你正在尝试收集用户提出的提示。你需要随着时间的推移存储这些数据，并不断构建它，存储这些点在你的“球场”上的位置。我想再提出两个提示：如果有人问“在我们把所有元音都替换成R之后，草莓、菠萝、火龙果、芒果中有多少个R？”这听起来很疯狂，但从技术上讲仍在我们的领域内。所以，我们会将其标记为红色，放在很远的地方。但一个有趣的例子是：“胡萝卜有多少个音节？”这个我们会称之为“出界”，对吧？我们的用户实际上不会问这种问题。它不是我们应用的一部分，所以没有人会关心。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, you're trying to collect uh what what prompts your users are asking. And you want to just store this over time and keep building it and store where these points are on your court. Two more prompts I want to bring up is like what if someone says how many Rs are in strawberry, pineapple, dragon fruit, mango after we replace all the vowels with Rs, right? Insane prompt, but still technically in our domain. Uh so we'll we'll label it as red all the way down there. U but a funny one is like how many syllables are in carrot? So this we'll call it out of bounds, right? This no none of our users are actually going to ask. Um it's not part of our app, so no one is going to care.</p>
</details>

我希望大家能看到代码，但基本上，当你进行评估时，可以这样思考：你的**数据**是球场上的点。你的**投篮**，或者在**Brain Trust**（Brain Trust: 一个用于构建和管理AI评估的平台或工具）中被称为**任务**，是你将球投向篮筐的方式。而你的**评分**，基本上就是检查球是否投进了篮筐。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um I hope you can see the code, but basically when you're making evout, here's how you can think about it. Your data is the point on the court. Your shot or in this case in Brain Trust, they call it a task is the way you shoot the ball towards the basket. And your score is basically a check of did it go in the basket or did it not go in the basket.</p>
</details>

### 构建高效 Evals 的策略：理解“球场”与数据收集

要做好Evals，你必须理解你的“球场”，这是最重要的一步。你必须小心不要落入一些陷阱。首先是“出界”陷阱。不要花时间为用户不关心的数据制作评估。我向你保证，你已经有足够多的问题查询是用户真正关心的。所以要小心，不要试图通过制作大量评估来显得“高效”，但这些评估实际上并不适用于你的应用。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To make good evals, you must understand your court. This is the most important step. And you have to be careful of falling into some traps. First is the out-of-bounds traps. Don't spend time making emails for your data your users don't care about. You have enough problems, I promise you, of problem uh queries that your users do care about. So be careful not try and be productive and you know you're making a lot of evals but they're not really applicable to your app.</p>
</details>

另一个可视化是不要只拥有一组集中的点。当你真正理解你的核心时，你就会知道边界在哪里，并且你需要确保你在整个“球场”上进行测试。今天很多人都在谈论这个问题，但为了尽可能多地收集数据，这里有一些你可以做的事情。首先是收集“赞”和“踩”数据。这可能会有噪音，但它也能提供非常好的信号，表明你的应用在哪里遇到困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">And another visualization is don't have a concentrated set of points. When you really understand your core you're going to understand you know where the boundaries are and you want to make sure you you test across the entire court. Uh a lot of people have been talking about this today but to collect as much data as possible here are some uh things you can do. First is collect thumbs up thumbs down data. This can be noisy but it also can be really really good signal as to where your app is struggling.</p>
</details>

另一件事是，如果你有可观测性（这是强烈推荐的），你可以直接阅读日志中的随机样本。尽管用户可能不会给你明确的信号，但如果你每周抽取一百个随机样本并进行检查，你就会对用户如何使用你的产品有一个非常好的理解。如果你有社区论坛，这些也很好。人们经常会在那里报告他们在使用LLM时遇到的问题。X（Twitter）也很好，但可能会有噪音。这里真的没有捷径。你必须真正投入工作，理解你的“球场”是什么样子。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing is if you have observability which is highly recommended you can just read through random samples in your log in your logs. Um although users might not be you know giving you signal but if you take like a hundred random samples and go through it like once a week you'll get a really un good understanding of what your users and how your users are using the product. Uh if you have community forums these are also great. People will often report issues they're having with the LLM and also X and Twitter are also great but can be noisy. And there really is no shortcut here. You really have to do the work and understand what your court looks like.</p>
</details>

所以，如果你在理解“球场”和构建数据集方面做得很好，它应该看起来像这样：你应该知道边界，你应该在边界内进行测试，并且你应该了解你的系统哪些地方是蓝色（成功），哪些地方是红色（失败）。这样就很容易判断，好吧，也许下周我们需要优先安排团队处理右下角的问题。这是很多用户都在挣扎的地方，我们可以很好地将这些“瓷砖”从红色翻转成蓝色。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So here is actually what if you are doing a good job of understanding your court and a good job of building your data set. This is what it should look like. You should know the boundaries. You should be testing in your boundaries and you should understand where your system is has blue and verse where it has red. So here it's really easy to tell, okay, maybe next week we need to prioritize uh the team to work on that bottom right corner. This is something where a lot of users are struggling and we can really do a good job on flipping the tiles from red to blue.</p>
</details>

### Evals 的结构：数据中的常量与任务中的变量

你还可以做一件事，我真的希望大家能看到，那就是将常量放入数据中，将变量放入任务中。就像在数学或编程中一样，你需要提取常量，以提高清晰度、可重用性和通用性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing you can do and I hope I really hope you can see but you want to put constants in data variables in the task. So just like in math or programming, you want to factor constants so it improves clarity, reuse, and generalizations.</p>
</details>

假设你想测试你的系统提示，对吧？保留用户将要询问的所有常量数据。例如，“草莓中有多少个R”这样的问题就属于数据中的常量，它在你的应用中永远不会改变。但你将在任务中测试的是不同的系统提示。你可能会尝试不同的预处理、不同的**RAG**（Retrieval-Augmented Generation: 检索增强生成，一种结合信息检索和文本生成的技术），这些就是你想要放入任务部分的内容。这样，你的应用就能真正扩展，你永远不必在更改系统提示时重新处理所有数据，这是Brain Trust的一个非常好的功能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If you have, let's say you want to test your system prompt, right? Keep the constant data that all that your users are going to ask. So for example, how many RS and strawberry that goes in the data that's a constant. It's never going to change throughout your app. But what you're going to test is in that task, you're going to try different system prompts. You might try different pre-processing, different rag, and that's what you want to put in your task section. This way your app actually scales and you never have to let's say when you change your system prompt redo all your data and this is a really nice feature of brain trust.</p>
</details>

如果你不知道，AI SDK实际上提供了一个叫做中间件（middleware）的东西，它是一个非常好的抽象，可以让你将所有预处理逻辑（如RAG、系统提示等）放入其中。现在你可以在实际执行完成操作的API路由和你的Evals之间共享这些逻辑。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um and if you don't know AI SDK actually offers a thing called middleware and it's a really good abstraction to put basically all your logic of pre-processing. So rag system prompt you can put in here etc. And you can now share this between your actual API route that's doing the completion and your evals.</p>
</details>

所以，如果你把篮球场想象成我们在进行篮球训练，并且我们正在尝试针对不同的模型练习我们的系统，那么你希望你的练习尽可能地接近真实的比赛。这就是良好练习的意义。因此，你需要确保在Evals和实际运行的代码之间共享几乎完全相同的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, if you think about the court, the basketball court as if we're doing we're going like basketball practice and we're trying to practice our system ac across different models. Um, you want your practice to be as similar as possible to the real game. That's what makes a good practice. So, you want to share the pretty much the exact same code between evals and what you're actually running.</p>
</details>

### Evals 的评分策略与 CI/CD 集成

现在，我想谈谈评分，这是Evals的最后一步。不幸的是，评分方式会因你的领域而异。在这个例子中，它非常简单，你只需检查输出是否包含正确数量的字母。但如果你正在处理像写作这样的任务，那就会非常困难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Now, I want to talk a little bit about scores, which is the last step of the eval. The unfortunate thing is it does vary greatly depending on your domain. So in this case it's like super simple. Uh you're just checking if you know the output contains the correct number of letters. But maybe if you're doing writing a task like writing that's very very difficult.</p>
</details>

从原则上讲，你应该倾向于确定性评分和通过/失败的判断。这是因为在调试时，你会收到大量的输入和日志，你需要尽可能容易地找出问题所在。所以，如果你过度设计评分机制，你的Evals可能很难与团队共享，也很难在不同团队之间分发，因为没有人会理解这些东西是如何评分的。请尽可能保持评分的简单性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um from principles you want to actually lean towards deterministic scoring and pass fail. This is because when you're doing debugging, uh, you're going to get a ton of input and logs and you want to make it as easy as possible for you to actually figure out what's going wrong. So, if you're sh if you're building if you're overengineering your score, it might be very difficult to share with your team and distribute across different teams uh, your evals because no one will understand how these things are getting scored. Keep your scores as simple as possible.</p>
</details>

一个很好的自问问题是：当你看数据时，我在寻找什么来判断它是否失败了？对于Vzero，我们正在寻找代码是否未能正常工作。但对于写作，你可能在寻找特定的语言学特征。问自己这个问题，然后编写相应的代码。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, and a good question to ask yourself is when you're looking at the data, what am I looking for to see if this failed? Right? So with Vzero, we're looking for if the code didn't work. Um, but maybe for writing, you're looking for a certain linguistics. Ask yourself that question and write the code that looks for you.</p>
</details>

在某些情况下，编写代码太困难了，你可能需要进行人工审查，这没关系。归根结底，你想要构建你的核心，并收集信号，即使你需要进行人工审查才能获得正确的信号。不用担心，如果你采取了正确的实践，从长远来看，它会带来回报，你的用户也会获得更好的结果。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Um, there are some cases where it's so hard to write the code that you may need to do human review and that's okay. At the end of the day, you want to build your core and you want to collect signal even if you need you must do human human review to get the correct signal. Don't worry at the if you do the correct practice, it will pay off in the long run and you'll get better results for your users.</p>
</details>

一个评分技巧是，不要害怕在原始提示中添加一些额外的提示。例如，我们可以在这里说：“请将你的最终答案输出在这些答案标签中。”这样做基本上可以让你非常容易地进行字符串匹配等操作。虽然在生产环境中你可能不希望这样，但你可以对提示进行一些小的调整，以便于评分。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">One trick you can do for scoring is don't be scared to like add a little bit of extra um prompt to your to the original prompt. So for example, here we can say output your final answer uh in these answer tags. What this will do is basically make it very easy for you to do string matching um and etc. Whereas in production you don't really want this but yeah you can do some little twe tweaks to your prompts so that scoring is easier.</p>
</details>

我们强烈推荐的另一件事是将Evals添加到你的**CI**（Continuous Integration: 持续集成，一种软件开发实践）中。**Brain Trust**（Brain Trust: 一个用于构建和管理AI评估的平台或工具）非常棒，因为你可以获得这些评估报告。它会在你的所有数据上运行你的任务，然后在最后给你一份关于改进和回归的报告。假设我的同事提交了一个更改了部分提示的**PR**（Pull Request: 拉取请求）。我们想知道它在整个“球场”上的表现如何，对吧？想象一下，它是否将更多的“瓷砖”从红色变成了蓝色？也许现在我们的提示修复了一部分，但却破坏了我们应用的其他部分。所以，在处理PR时，这是一个非常有用的报告。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Another thing we really highly recommend is add evals to your CI. So Brain Trust is really nice because you can get these eval reports. Um so it'll run your e your task across all your data and then it will give you this uh report at the end for the improvements and regressions. Assume my colleague made a PR that changes a bit of the prompt. We want to know like how did it do across the court, right? Visualize like did it change more tiles from red to blue? Maybe now our prompt fixed one part but it broke the other part of our app. Um so this is a really useful report to have when you're doing PRs.</p>
</details>

### 总结：Evals 对 AI 应用的价值与问答

是的，回到这里，这是本次演讲的总结。你需要让Evals成为你数据的核心。你可以将其视为训练。你的模型基本上会进行训练。也许你想更换“球员”，对吧？当你更换模型时，你可以在训练中看到不同的“球员”表现如何。但这能让你很好地理解，当你改变RAG或系统提示等内容时，你的系统表现如何。现在你可以告诉你的同事：“嘿，这确实对我们的应用有帮助，对吧？”因为没有衡量的改进是有限且不精确的。Evals能为你提供系统性改进应用所需的清晰度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So yeah, going back this this is the summary of the talk. You want to make your evals a a core of your data. And this you can treat it like practice. Your model is basically going to practice. Maybe you want to switch players, right? When you switch models, you can see how a different player is going to perform in your practice. But this gives you such a good understanding of how your system is doing when you change things like maybe your rag or your system prompt. And you can now go to your colleague and say, "Hey, this actually did help our app, right?" Because improvement without measurement is limited and imprecise. And eval give you the clarity you need to systematically improve your app.</p>
</details>

当你这样做时，你将获得更好的可靠性和质量，更高的转化率和留存率，而且你还可以减少在支持和运营上的时间，对吧？因为你的Evals，你的训练环境会为你处理这些。如果你想知道我是如何构建所有这些球场图表的，我实际上只是使用了Vzero，它为我制作了一些应用，我只是在其中添加了这些投篮命中和失误的数据。所以，非常感谢大家。我希望你们对Evals有所了解。谢谢。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When you do that, you're going to get better reliability and quality, higher conversion and retention, and you also get to do just spend less time on support and ops, right? Because your evals, your practice environment will take care of that for you. Uh, and if you're wondering about how I built all these court diagrams, I actually just used Vzero and it made me some app that I just added these shots made and missed in uh the basket. So, yeah, thank you very much. I hope you learned a little bit about evals. Thank you.</p>
</details>

我们确实有一些时间进行提问。这里有两个麦克风，一个在这边，一个在那边。如果有人有兴趣提问，我们可以回答两到三个问题。那边有一个。请使用五号麦克风。如果你不介意的话，也可以重复一下问题。是的，是的。你可以把它想象成训练。就像一个篮球运动员，通常可能命中率达到90%，但他们可能会在这里或那里投失更多的球。如果我们像我们一样每天至少运行一次，那么我们就能很好地了解我们实际在哪里失败了？我们是否有任何回归？所以，是的，每天或至少按某种计划运行它会给你一个很好的想法。我当时在想，如果你用同一个问题运行五次，对吧？就像百分比是多少？只是让它五次中成功四次或五次，对吧。所以，当你离得越远，问题就越难。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So, we do have some time for some questions. There are two mics, one over here, one over there. Um, we can take two or three of those, please, if anybody's interested in asking. We have one over there. Um, mic five, please. Or you can repeat the question as well if you don't mind. Yeah. Yeah. You can think of it. It's really like practice. Like maybe your a basketball player will like, you know, in general score like 90% but they might miss more shots here or there. If you run it like we do it like we run every day at least. Um and then we get a good sense of like where are we actually like failing? Did we have some regression? Um so yeah, running it like pre daily or at least in some schedule will give you a good idea. I was thinking what if you ran like you know the same question through it five times, right? It's like like what's the percentage? just making it four out of five or you know five right. So it's definitely like as you go further away like the harder questions get like</p>
</details>