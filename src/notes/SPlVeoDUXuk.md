---
area: personal-systems
category: psychology
companies_orgs:
- Google
date: '2025-08-23'
draft: true
guest: ''
insight: ''
layout: post.njk
media_books:
- Discipline and Punish
- '1984'
- Republic
- Groundwork of the Metaphysics of Morals
- Attachment in Psychotherapy
- Imagined Communities
people:
- Bowlby
- Main
- Foucault
- George Orwell
- Plato
- Kant
products_models:
- ChatGPT 5
- Gemini 2.5 Pro
- Gemini CLI
- Homebrew
- OCR my pdf
project:
- ai-impact-analysis
- personal-growth-lab
series: ''
source: https://www.youtube.com/watch?v=SPlVeoDUXuk
speaker: Anthony看世界
status: evergreen
summary: 本期视频探讨了如何利用AI更好地辅助人文社科书籍的阅读与学习。Anthony分享了将AI作为学术助手的设想，包括跨文献比较和理论迁移，并提出了传统阅读方式的挑战。视频详细介绍了如何通过Python和OCR技术处理PDF电子书，为AI阅读做准备。最后，设计了一套多维度测试题，旨在评估ChatGPT
  5和Gemini 2.5 Pro两大主流AI模型在理解和应用人文社科文本方面的实际能力，为高效学习提供指导。
tags:
- ai-evaluation
- learning
- life
- science
- social
title: AI如何成为你的理想学术助手：测评两大模型阅读人文社科书籍的能力
---

### AI赋能学习与思考：人文社科阅读新范式

大家好，我是Anthony。欢迎来到我的频道。今天的视频，我想继续和大家聊聊如何让AI更好地辅助我们学习和思考。在5月18日的视频中，我们探讨了AI在自我探索方面的潜力。当时我们提到，你可以通过与AI对话来写日记，分享你的情感和想法，这与传统的日记写作相比，可以说是一个巨大的突破。我们还可以要求AI阅读心理学或哲学书籍，并分析我们的经历。节目发布后，许多朋友希望我能分享更多关于如何利用AI学习的经验。所以今天，我们将主要讨论如何结合Python和AI，使其成为我们在阅读人文社科书籍时真正有用的助手。我们还将设计一套考试题目，测试目前两大主流AI——即**ChatGPT 5**（GPT-5: 一种大型语言模型）和**Gemini 2.5 Pro**（Gemini 2.5 Pro: 谷歌开发的多模态大型语言模型）——在阅读人文社科书籍时的能力差异。因此，大家关注Anthony的频道，不仅可以看到人文社科的观点和解读，还可以观看技术视频，甚至看到两者的结合，是不是非常值得和划算呢？好了，吹嘘的部分到此为止。我将把这个视频放在“心理学与教育”的列表中。如果你有任何想和我讨论的话题和咨询需求，可以通过我的邮箱预约。那么，让我们回到今天的话题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Hello everyone, I'm Anthony. Welcome to my channel. Today's video, I want to continue chatting with you all, how to make AI better assist us in learning and thinking. In the video on May 18th, we explored the potential of AI for self-discovery. At that time we said, you can write a diary by talking to AI, share your emotions and thoughts. Compared with traditional diary writing, this can be said to be a huge breakthrough. We can also request AI reads a psychology or philosophy book, let’s analyze our experience. After the show was released, many friends want me to share more lessons on how to use AI to learn. So today we will mainly discuss how to combine Python and AI, make it our priority when reading humanities and social science books, a truly useful assistant. We will also have a set of exam questions, test the two current mainstream AI, that is, ChatGPT 5 and Gemini 2.5 Pro, differences in ability when reading humanities and social science books. So everyone should follow Anthony's channel, not only can we see the views and interpretations of humanities and social sciences, you can also watch technical videos, you can also see the combination of the two, isn’t it very worthwhile and cost-effective? Alright, that's the end of the bragging part. I will post this video, put it in the list of "Psychology and Education". If you have anything you want to discuss with me and consultation topics, you can contact my email to make an appointment. So let's get back to today's topic.</p>
</details>

### 理想的AI学术助手：跨学科比较与理论迁移

首先，我一直希望AI能成为一个理想的学术助手。它能够完整阅读我提供的人文社科书籍，并根据我的需求，在不同的文献中进行跨比较和理论迁移。例如，我上传**福柯**（Michel Foucault: 法国哲学家）的《规训与惩罚》和**乔治·奥威尔**（George Orwell: 英国作家）的小说《1984》，我希望AI能运用福柯的视角来分析和解释大洋国的社会结构。又例如，我希望AI能阅读**柏拉图**（Plato: 古希腊哲学家）的《理想国》和**康德**（Immanuel Kant: 德国哲学家）的《道德形而上学的奠基》，从中抽象出“正义”的概念，并回答我当前的一些困惑和问题。再比如，我还可以向AI上传一位思想家一生中的十本主要著作和一本心理学书籍，要求AI利用这本心理学书籍的洞察来分析这位思想家的理论演变路径。我们还可以提出许多组合，这些组合完全是为了满足我们的需求，比如好奇心，或者一个需要解决的实际问题。而这些每一个都可以成为一个非常有意义的学术课题。这些组合通常涉及跨学科的迁移。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">First of all, I have always wanted AI to be such an ideal academic assistant. It can be read in full, the humanities and social science books I provide, and according to my needs, in different literature, perform cross-comparison and theoretical transfer. For example, I uploaded Foucault's "Discipline and Punish" and George Orwell's novel 1984, I hope AI can use Foucault's perspective to analyze and explain the novel, the social structure of Oceania. For example, I hope AI can read Plato's Republic and Kant's Groundwork of the Metaphysics of Morals, abstract the concept of "justice" from them, and answer some of my current confusion and questions. For example, I can also upload a thinker to the AI,一生中的十本主要著作, and a psychology book, ask AI to use the insights from this psychology book, analyze the theoretical evolution path of this thinker. We can also come up with many combinations. These combinations are completely tailored to meet our needs, such as curiosity, or a real problem that needs to be solved. And every one of these, can become a very meaningful academic topic. These combinations often involve interdisciplinary transfer.</p>
</details>

### 学习的本质：自由探索与认知连续性

在过去的几个视频中，我们谈到学习时，我反复强调这种根据自身兴趣进行的自由探索是最好的学习方式。所谓的学科划分，它只是为了方便研究和教学而设定的分类标准，本质上是一个人为的、外部的框架。虽然它能帮助我们定义和理解问题，但这并不意味着人类的认知和学习必须严格遵循这种划分。学习过程是一种持续的情感和认知体验。一个人早上对生物学感兴趣，下午思考物理学，晚上思考经济学，这种混乱的探索实际上最符合人类思维的特点。因为我们的认知本质上是联想性的，而不是线性划分的。在这种混沌和非系统中，个体积累了丰富的感觉，他的情感认知是连续的，这是最本质的东西。我们说任何学习，无论其课程体系多么系统，最终仍然取决于学习者自身思想和情感的连续性。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">In the past few videos we have talked about learning, I repeatedly emphasized, this kind of free exploration according to one's own interests, the best way to learn. The so-called disciplinary division, it is just a classification standard to facilitate research and teaching, it is essentially an artificial, external framework. While it can help us define and understand the problem, but it does not mean that human cognition and learning, this division must be strictly followed. The learning process, it is a continuous emotional and cognitive experience. A person is interested in biology in the morning, think about physics in the afternoon, thinking about economics at night, this messy exploration, in fact, it is the most consistent with the characteristics of human thinking. Because our cognition is inherently associative, rather than linear division. In this chaotic and unsystematic, individuals have accumulated a wealth of feelings, his emotional cognition is continuous. This is the most essential thing. We say any learning, no matter how systematic his course system is, ultimately, it still depends on the learners themselves, continuity of thoughts and emotions.</p>
</details>

### 传统阅读的挑战与AI的潜力

然而，当我们想要跨领域阅读大量书籍时，阅读成本非常高。许多人文社科书籍动辄几十万字，如果跨越多个学科，信息量更是惊人。我们知道，许多人文社科书籍可能没有清晰的章节标记，结构松散，难以通过关键词快速搜索和定位。此外，人文社科的逻辑与自然科学不同，作者的写作往往充满隐喻、反思、诠释和质疑，其意义常常隐藏在长篇文本中。而且，几乎所有的书籍都涉及其他学科的知识。在传统的学术工作中，要实现这种跨学科的自由迁移和应用，需要研究者长时间阅读大量书籍，还需要创建笔记进行交叉比较。如果阅读的是外语文献，涉及语言差异或历史背景，难度就更大了。因此，如果我们使用传统方法来实现这种阅读和思维的自由，不仅需要一个人拥有非常高的记忆力和抽象思维能力，还需要多年的积累和庞大的顾问团队。AI能够通读几十万字的文本，并抽象出相关理论，还能够围绕这些主题回应我们提出的任何想法和问题。这是传统方法无法达到的速度和效率。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">However, when we want to read a lot of books across fields, the cost of reading is very high. Many books on humanities and social sciences, they all start with hundreds of thousands of words, if it spans multiple disciplines, the amount of information is astonishing. We know, many books on humanities and social sciences, there may not be clear chapter markings, loose structure, difficult to quickly search and locate by keywords. Moreover, the logic of humanities and social sciences is different from that of natural sciences. The author's writing is often full of metaphors. Reflection, interpretation and questioning, its meaning is often hidden in a long text. And, almost all of them involve knowledge from other disciplines. In traditional academic work, to achieve this free transfer and application across disciplines, requires researchers to read a lot of books for a long time. You also need to create notes for cross-comparison. If you are reading foreign language literature, involving language differences or historical background, it's even more difficult. Therefore, if we use the traditional method, to achieve this freedom of reading and thinking, not only does it require a person to have a very high memory and abstract thinking skills, it also requires years of accumulation and a large team of consultants. AI can, read through hundreds of thousands of words of text, and abstract related theories, and be able to respond to our questions around these topics, any thoughts and questions raised. This is a speed and efficiency that traditional methods cannot achieve.</p>
</details>

### AI辅助阅读的实际挑战

但这种想法面临一些实际困难。第一个困难是，大量人文社科电子书是基于PDF的影印本。如果你直接上传这些文件，那么AI会调用**OCR**（Optical Character Recognition: 光学字符识别）来识别文本并将其转换为文字。但这个过程对我们来说是不可见的，我们不知道它识别成了什么。这个过程效率也较低，AI在处理时会慢很多。如果识别不干净、不完整，AI在回答问题时也可能会假装理解。然而，目前市场上缺乏免费且强大的OCR工具。第二个困难是，我们如何确定AI是否真正读完并理解了几十万字的文本？有时，当我们向AI提问时，它可能只是先检索相应的文本再回答，而不是进行全局分析。这需要我们设计一套测试题，提出一些涉及复杂逻辑链的横向问题，以验证它是否真正阅读过。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But this idea faces some practical difficulties. The first difficulty is, a large number of humanities and social science e-books are based on, a photocopy of the PDF. If you upload these files directly, then AI will call OCR, Optical Character Recognition, to identify the text, and convert it into text. But this process is invisible to us. We don't know what it recognized as. This process is also inefficient. AI will be much slower in processing. If the recognition is not clean and complete, AI may also pretend to understand when asking questions. However, currently on the market, there is a lack of free and powerful OCR tools. The second difficulty is, how do we determine whether an AI has truly finished reading? And understood a text of hundreds of thousands of words? Sometimes, when we ask AI questions, it may first retrieve the corresponding text and then answer, rather than conducting a global analysis. This requires us to design a set of test questions, propose some cross-section, problems involving complex logical chains, to verify whether it has been read.</p>
</details>

### 解决PDF转换问题：Python与OCR技术

好的，那么我们先来解决第一个问题，即如何将音视频PDF书籍转换为纯文本格式。我们知道，OCR扫描的文本通常排版混乱、识别错误、没有分段、挤作一团，看起来很杂乱，毫无阅读体验。但这种文本是给AI阅读的，不是给我们阅读的。只要文本正确就行。这实际上是AI理想的输入格式。我们可以编程来批量完成这项工作。AI在这里绝对可以帮助我们。以**ChatGPT**为例，我们可以让ChatGPT生成一段代码，要求调用命令行工具**OCR my pdf**来识别PDF中的文本，并将其保存为txt格式。我们还需要创建一个文件夹，要求程序能够自动识别文件夹中的所有PDF文件，并告诉ChatGPT文件的路径。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">OK, so let’s solve the first problem first. That is, how to convert audio and video PDF books, convert to plain text. That is, plain text format. We know, OCR scanned text often has chaotic layout, recognition error, no segmentation, crowded together, looks messy, there is no reading experience at all. But this text is for AI to read, it's not for us to read. As long as the text is correct, it's fine. This is actually an ideal input format for AI. We can program, to complete this work in batches. AI can definitely help us here. Taking ChatGPT as an example, we can let ChatGPT generate a piece of code, requires calling the command line tool OCR my pdf, recognize text in PDF, and save it in txt format. We also need to create a folder, request the program, can automatically identify all PDFs in the folder, and tell CHATGPT the path to the file.</p>
</details>

### 为AI阅读准备文本：清洗与净化

这里我创建了一个名为“book”的文件夹，然后将《想象的共同体》的PDF放入其中。ChatGPT给了我们一段代码，我们将其复制粘贴到编辑器中，并保存到这个文件夹，然后点击运行。识别完成后，我们看到txt文件出现了。打开后会发现，识别错误的字词并不多，这可能是因为这个PDF比较清晰。但我们会发现页码、分割线和书名会重复出现。另一个例子是单词之间有太多空格，分段和标点符号也有很多错误。这些对于AI阅读来说都是毫无意义的干扰。而且我们知道，AI一次性处理文本的规模也有其限制。例如，ChatGPT是将自然语言分解成多个**tokens**（tokens: 文本处理和生成的基本单位），即处理和生成文本的基本单位，并且费用是根据tokens的数量来计算的。所以我们可以让ChatGPT为这段代码添加清洗功能，例如要求它删除重复的页码、页眉、页脚、分割线等，净化生成的文本。然后我们再次运行这段代码。清洗后的文本会看起来干净很多。虽然肯定仍然存在一些识别错误，但这是不可避免的，也正好可以测试AI的能力。一个强大的模型在处理“脏文本”时，应该仍然能够提取尽可能准确的信息。这本身就是一项非常实用的能力，就像优秀的学者能够阅读残破的书籍，仍然能够还原文本的整体逻辑一样。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Here I created a folder called book, then put the PDF of "Imagined Communities" in it. CHATGPT gives us a piece of code, let's copy and paste it into the editor, and save it to this folder, then click Run. After the recognition is completed, we see that the txt file appears. When you open it, you will find that there are not many words that are recognized incorrectly. This may be because this PDF is relatively clear. But we will find, page numbers, dividing lines, and book titles will be repeated. Another example is too many spaces between words. There are also many errors in paragraphing and punctuation. These are important for AI reading, it's all meaningless interference. And we know, the scale of text processing by AI at one time, there is also a limit. For example, CHATGPT, it is to decompose natural language into multiple tokens, that is, the basic unit for processing and generating text, and the fee is calculated based on the number of tokens. So we can let CHATGPT, add the cleaning function to this code, for example, ask it to delete duplicate page numbers, headers, footers, dividing lines, etc. Purify the generated text. Then let's run this code again. The text after cleaning, it will look much cleaner. Although there are certainly still some identification errors, but it is unavoidable, and it also happens to test the ability of AI. A powerful model, should be used when processing dirty text, still able to extract as accurate information as possible. This is a very practical ability in itself. As good scholars, able to read damaged books, still able to restore the overall logic of the text.</p>
</details>

### AI模型能力对比：ChatGPT 5 vs Gemini 2.5 Pro

当我们完成文本制作后，现在可以进入最重要的部分了，那就是比较两个AI模型的能力。参与比较的两位选手是开通了Plus会员的**ChatGPT 5**和谷歌的**Gemini 2.5 Pro**。这两款AI的定价都是每月20美元，都支持大文本阅读。然而，从表面数据来看，GPT落后于Gemini。GPT支持高达128K **tokens**的上下文窗口，也有声称25万tokens的说法，但它们仍然落后于Gemini的100万tokens。那么实际表现如何呢？我们接下来就会知道答案。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">When we have finished making the text, now we can move on to the most important part, that is, comparing the capabilities of two AI models. The two players participating in the comparison, they are CHATGPT 5 who have opened plus membership, and Google's Gemini 2.5 Pro. Both AIs are priced at $20 per month, both support large text reading. However, on the surface data, GPT is lagging behind Gemini. GPT supports a context window of up to 128K tokens, there is also a claim of 250,000 tokens, but they are still behind Gemini’s 1 million tokens. So what is the actual performance? We will know the answer next.</p>
</details>

### 部署Gemini CLI：免费访问与便捷操作

不过，前段时间有朋友告诉我一个消息。今年6月，谷歌发布了**Gemini CLI**（Gemini Command Line Interface: Gemini模型的命令行工具），这使得我们能够调用Gemini 2.5 Pro模型。谷歌慷慨地为我们提供了每分钟60个请求和每天1000个请求的免费额度。对于大多数用户来说，这完全足够了。在电脑上安装Gemini CLI很简单，你可以自行搜索。因为我使用的是MacBook，我就以我的电脑为例。首先我们需要在Terminal中安装**Homebrew**（Homebrew: macOS和Linux的包管理器），然后用Homebrew安装Gemini CLI。首次登录时，你需要获得谷歌账号的授权。完成所有这些操作后，我们就可以看到Gemini CLI的界面了。下面一行表示它使用的是2.5 Pro模型，以及它剩余的上下文长度。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">But, a while ago, a friend told me a piece of news. In June this year, Google released Gemini CLI, that is, a command line tool. This allows us to, calling the Gemini 2.5 Pro model. Google generously gave us 60 requests per minute. And a free quota of 1000 requests per day. For most users, this, it's totally sufficient. Installing Gemini CLI on your computer is easy. You can search. Because I use a MacBook, I'll take my computer as an example. First we need to install Homebrew in the Terminal. Then install Gemini CLI with Homebrew. First time login, you need to obtain authorization from your Google account. After all this is done, we can see the interface of Gemini CLI. The following line means, it uses the 2.5 Pro model, and its remaining context length. Get here.</p>
</details>

### 设计AI阅读能力测试题：多维度评估

我们终于把所有工具都准备好了。那么，如何设计一套测试题来识别这两个AI的阅读能力呢？我们这里首先以《心理治疗中的依恋》这本书为例。为了保持客观性，我认为应该为问题设置一个合理的难度梯度。最基本的步骤是事实提取，例如这样的问题：心理学家**鲍尔比**（John Bowlby: 英国心理学家）是如何定义心理治疗师的任务的？这部分主要考察AI能否定位原始信息，以及能否准确引用和转述，会不会进行编造。这些问题可以直接在书的原文中找到。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">We finally got all the tools ready. How to design a set of test questions, to identify the reading ability of these two AIs? We are here, first, let’s take the book “Attachment in Psychotherapy” as an example. To maintain objectivity, I think, a reasonable difficulty gradient should be set for the questions. The most basic step is fact extraction. For example, a question like this: Psychologist Bowlby, how is the task of a psychotherapist defined? This part, mainly examine whether AI can locate the original information, and whether they can quote and paraphrase accurately, will it be fabricated? These questions can be found directly in the original text of the book.</p>
</details>

第二部分是目录摘要。例如，我们要求AI总结整本书的目录，用一句话概括每一章的内容。这可以考察AI对整本书结构的理解。AI不仅需要完整提取章节标题，还应该能够合理压缩冗长的文本并总结主题。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The second part is the directory summary. For example, we ask AI to summarize the table of contents of the entire book, summarize the content of each chapter in one sentence. This can examine AI's understanding of the structure of the entire book. AI not only needs to fully extract the chapter titles, it should also be able to reasonably compress lengthy texts, and summarize the theme.</p>
</details>

第三阶段难度更高。我们希望AI不仅能理解文本，还需要能够抽象出隐含的逻辑结构。例如，《心理治疗中的依恋》中有一段话：“**梅因**（Mary Main: 美国心理学家）（1991）强调**元认知**（metacognition: 指对自身认知过程的认知）能力，即思考想法的能力，这是建立在认知表象与本质的区别（即事物可能并非其表象）、表象多样性和表象变化的基础之上。”那么我们可以问AI：“请分析这本书中提到的元认知能力的三个基础。”在原文中，元认知的三个基础并没有被直接提及，但从语法和逻辑上看，这三个概念确实是并列的，属于同一范畴。这要求AI能够正确识别抽象概念的类别，它必须总结出一套结构，但又不能编造没有根据的内容。同时，由于元认知这个概念实际上在整本书中反复提及，这更具挑战性。一个模型能否调用所有相关部分，并区分哪些句子是本质性陈述，哪些句子只是围绕这个概念展开和衍生的？

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The third stage is more difficult. We hope that AI can not only understand text, it also needs to be able to abstract the implicit logical structure. For example, there is a passage in attachment in psychotherapy: Main (1991) emphasizes the ability of metacognition, thinking about ideas, this is based on the distinction between the surface and the essence of cognition (i.e. things may not be what they appear to be), representational diversity and representational change, on the basis of. Then we can ask the AI: Please analyze the three foundations of metacognitive ability mentioned in this book. In the original text, the three foundations of metacognition are not directly mentioned. But grammatically and logically, these three concepts are indeed parallel, belong to the same category. This requires AI to be able to correctly identify the category of abstract concepts. It has to summarize a set of structures, but you can't make up content that has no basis. At the same time, due to the concept of metacognition, in fact, it is mentioned repeatedly throughout the book. This is even more challenging. A model, is it possible to call all relevant parts? As well as, can you distinguish which sentences are essential statements? Which sentences just revolve around this concept, expand and derive?</p>
</details>

第四步是考察跨章节的理论应用，这也是最实用的一层。例如，我们可以问：“请基于本书中元认知的三个基础，分析**冷漠型依恋**（indifferent attachment: 一种依恋类型，表现为对他人情感需求不敏感）的具体心理特征。”元认知和冷漠型依恋这两个概念分布在两个非常大的章节中。因此，AI必须首先抽象出元认知的三个基本概念，然后将这个概念应用到后续的分析中。这要求AI能够将理论应用于不同的场景，而不是机械地背诵。将抽象理论应用于分析具体案例的能力，这可以说是人文社科研究中最实用和最有价值的技能。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The fourth step is to examine the application of theories across chapters. This is also the most practical layer. For example, we can ask: Please base on the three foundations of metacognition in this book. Analyze the specific psychological characteristics of indifferent attachment in these three dimensions. The concepts of metacognition and indifferent attachment, distributed across two very large chapters. Therefore, AI must first abstract, three basic concepts of metacognition, then, apply this concept to the following analysis. This requires AI to be able to apply theories to different scenarios, rather than mechanically reciting. Ability to apply abstract theories to analyze specific cases, this can be said to be the case in humanities and social science research, the most practical and valuable skill.</p>
</details>

### 总结与展望

综上所述，在今天的视频中，我们讨论了对AI阅读能力的期望，以及进行此类测试的意义。接下来，我们现在可以正式进入比赛阶段了。我将在本周末更新两期内容，明天我将发布下一个视频，公布比赛结果。今天的视频就到这里。如果你有任何困惑或问题想与我交流，可以直接联系我的邮箱。例如，你想与我讨论一篇文章或一段文字、某个视频、某种社会现象，或者你的日记，请提前将相关文本发送给我，在正式交流前，我会先阅读完毕。或者你想与我讨论你的生活经历、困惑和情感，都是可以的。如果你对隐私、安全、支付和沟通方式有任何疑问，也请及时告诉我。如果你无法支付或加入会员，也请联系我，我将提供其他方式。具体请参考这张图片。我将把这个视频放在“心理学与教育”的列表中，也推荐大家查看我这个列表中的其他视频。感谢大家的观看，再见！

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">To sum up, in today's video, we discussed our expectations for AI's reading abilities, and the significance of conducting such a test. Next, we can now officially enter the competition phase. I will update two issues this weekend. I will post the next video tomorrow. Announce the results of the competition. That's all for today's video. If you have any confusion or questions, want to communicate with me, just contact my email directly. For example, you want to discuss an article or a paragraph with me, a certain video, a certain social phenomenon, or your diary, please send me the relevant text in advance. Before the formal communication, I will, finish reading or, you want to discuss your life experience with me, confusion and emotion, all are possible. If you are concerned about privacy, security, any questions about payment and communication methods, please also tell me in time. If you are unable to pay or join the membership, please also contact me. I will provide other ways. Please refer to this picture for details. I will post this video, put it in the list of "Psychology and Education". Also recommend to everyone, check out my other videos in this list. Thank you for watching, goodbye!</p>
</details>