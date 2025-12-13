---
author: "Lei"
date: "2025-12-10"
guest: ""
layout: "post.njk"
source: ""
speaker: "Lei"
title: "Building a Text-to-Chart AI Agent: Architecture and Implementation"
summary: "This guide details the architecture of a Python-based AI agent that converts natural language into data visualizations. It explores the single-shot code generation approach using LLMs, Streamlit, and Plotly, while analyzing the system's transparency, efficiency, and limitations."
speaker: Empowered By AI
area: "tech-insights"
source: https://www.youtube.com/watch?v=ahvG7R-0Dak
category: "technology"

project:
  - "vibe-coding"

tags:
  - "ai-agent"
  - "code-generation"
  - "data-visualization"
  - "prompt-engineering"

people: []

companies_orgs:
  - "YouTube"

products_models:
  - "Streamlit"
  - "Python"
  - "Pandas"
  - "Plotly"

media_books: []

file_name: "text_to_chart_ai_agent_architecture.md"
draft: true
status: "evergreen"
---

## Introduction to the Text-to-Chart Agent

Hello everyone, welcome to my channel. [cite_start]In this video, I'll explain how this agent works. [cite: 1] In short, the user types in a question. [cite_start]It goes into this code generation agent and inside we load the **DataFrame**, build a prompt with **schema**, call the **LLM**, generate **Python** code, and execute it. [cite: 2] [cite_start]From the user point of view, it is just text to chart in one click. [cite: 3]

大家好，欢迎来到我的频道。在这个视频中，我将解释这个 **Agent**（智能体：能够感知环境并采取行动以实现目标的智能系统）是如何工作的。简而言之，用户输入一个问题。这个问题进入代码生成智能体，在内部我们加载 **DataFrame**（数据框：二维的、大小可变的表格数据结构），构建包含 **Schema**（模式：数据的结构定义）的提示词，调用 **LLM**（Large Language Model：大语言模型），生成 **Python** 代码并执行它。从用户的角度来看，这只是简单的一键将文本转换为图表。

[cite_start]So by the end of this video you will have a working text chart app that you can download and run on your own machine. [cite: 4] Understand a simple AI agent for turning natural language into charts. [cite_start]Understand the architecture and design. [cite: 5] [cite_start]So you can swap in your own data set with just a few small changes. [cite: 6] [cite_start]You will also understand the pros and cons of the AI agent and you will develop a AI native mindset. [cite: 7]

所以，在视频结束时，你将拥有一个可以下载并在自己的机器上运行的文本转图表应用程序。你将理解一个用于将自然语言转换为图表的简单 AI 智能体，理解其架构和设计。这样你只需做少量更改即可替换为你自己的数据集。你还将了解该 AI 智能体的优缺点，并培养 AI 原生思维。

[cite_start]If you are not a developer, you will walk away with a tool where you can query data in plain English and get charts back without waiting for someone to build a new dashboard for you. [cite: 8]

如果你不是开发人员，你将带走一个工具，通过它你可以用简单的英语查询数据并获得图表，而无需等待别人为你构建新的仪表板。

## The Need for Natural Language Analytics

[cite_start]As a data scientist, I used to build dashboard and analytics to provide insights for my users. [cite: 9] [cite_start]But very often they also want to ask their own questions. [cite: 10] Since that I didn't hardcode into the dashboard. [cite_start]So I built this AI agent to let them use natural language to generate their own charts on top of the same data. [cite: 11]

作为一名数据科学家，我过去常构建仪表板和分析工具来为用户提供见解。但通常他们也想问自己的问题。因为我没有将这些硬编码到仪表板中，所以我构建了这个 AI 智能体，让他们可以使用自然语言在相同的数据之上生成自己的图表。

[cite_start]So on this dashboard you see is a analytic dashboard for **YouTube** videos using this US videos data set. [cite: 12] [cite_start]In the AI agent you can ask questions like shows the trend of views over time and click ask. [cite: 13] [cite_start]It generates a chart for the total views over a time period based on the data set. [cite: 14]

正如你所见，这是一个使用美国视频数据集的 **YouTube** 视频分析仪表板。在 AI 智能体中，你可以问诸如“显示随时间变化的观看趋势”之类的问题，然后点击提问。它会根据数据集生成一段时间内总观看次数的图表。

Let's try a different question. [cite_start]Top 10 channels by total likes. [cite: 15] [cite_start]So the agent generate the Python code to plot the chart and render the chart in the dashboard immediately. [cite: 16]

让我们尝试一个不同的问题：按总点赞数排名前 10 的频道。智能体生成 Python 代码来绘制图表，并立即在仪表板中渲染该图表。

## High-Level Architecture

[cite_start]So in this video I'm going to walk you through how this text to chart agent works at high level using Python **Streamlit** and LLM. [cite: 17] [cite_start]We'll keep it simple and focus on the idea not the code line by line. [cite: 17] This is a very simple agent. [cite_start]It's basically a single prompt single call code agent. [cite: 19]

在这个视频中，我将带你从高层面上了解这个基于 Python、**Streamlit**（一个用于快速构建数据应用的 Python 开源库）和 LLM 的文本转图表智能体是如何工作的。我们将保持简单，专注于理念而不是逐行代码。这是一个非常简单的智能体，基本上是一个单提示词、单次调用的代码智能体。


[cite_start]So at higher level it received the user query from Streamlit UI and it combines query with some data context and send everything to large language model. [cite: 20] [cite_start]The model generates the Python code and we execute that code to render chart in Streamlit. [cite: 21]

在高层面上，它从 Streamlit UI 接收用户查询，将查询与一些数据上下文结合，并将所有内容发送给大语言模型。模型生成 Python 代码，我们执行该代码以在 Streamlit 中渲染图表。

## The Prompt Engineering Strategy

[cite_start]The most important piece here is a prompt we sent to the model. [cite: 22] It's a single but very detailed prompt. [cite_start]It gives the model context about the data set. [cite: 23] [cite_start]It passes in any filters or user options from the UI and it gives the model the data frame schema or the column names and sometimes example values. [cite: 24]

这里最重要的部分是我们发送给模型的 **Prompt**（提示词）。这是一个单一但非常详细的提示词。它为模型提供了关于数据集的上下文。它传入来自 UI 的任何过滤器或用户选项，并为模型提供 DataFrame 的模式或列名，有时还包括示例值。

[cite_start]We also define a very clear output format. [cite: 25] [cite_start]We'll tell the model something like you already have a **Pandas** data frame in memory. [cite: 26] [cite_start]Use **Plotly** to plot the chart only outputs Python code, no explanations. [cite: 27]

我们还定义了非常清晰的输出格式。我们会告诉模型，例如你内存中已经有一个 **Pandas**（Python 的数据分析和操作库）数据框。使用 **Plotly**（用于创建交互式图表的 Python 图形库）绘制图表，仅输出 Python 代码，不要解释。

[cite_start]Usually we wrap the generated code in a code block because later we are going to extract the text between those markers and execute it. [cite: 28] We also give the model a list of rules. [cite_start]For example, don't read files from disk. [cite: 29] [cite_start]Don't import random libraries, use existing data frame that's already loading memory. [cite: 30]

通常我们将生成的代码包装在一个代码块中，因为稍后我们将提取这些标记之间的文本并执行它。我们还给模型一系列规则。例如，不要从磁盘读取文件。不要导入随机库，使用已经加载到内存中的现有数据框。

[cite_start]So the agent basically knows I have a data frame in memory. [cite: 31] [cite_start]I should only use that plus Pandas and Plotly to create a chart. [cite: 32]

所以智能体基本上知道我内存中有一个数据框。我应该只使用它加上 Pandas 和 Plotly 来创建图表。

## Streamlit UI Workflow

[cite_start]So on the Streamlit UI side the flow is like this. [cite: 33] [cite_start]The user types in a question and the app shows the detected column names so they know what they can refer to. [cite: 34] [cite_start]And then when they click the button, we will send the question and the metadata to the code agent. [cite: 35]


所以在 Streamlit UI 方面，流程是这样的。用户输入问题，应用程序显示检测到的列名，以便他们知道可以引用什么。然后当他们点击按钮时，我们将问题和元数据发送给代码智能体。

[cite_start]The code agent generates the Python code and the Python runtime execute Python code in a sandbox using the data frame in memory, Pandas and Plotly tools. [cite: 36] [cite_start]And then it creates a chart and return it to Streamlit UI and then we see the chart and table on the UI. [cite: 37]

代码智能体生成 Python 代码，Python 运行时利用内存中的数据框、Pandas 和 Plotly 工具在沙盒中执行该代码。然后它创建一个图表并将其返回给 Streamlit UI，接着我们在 UI 上看到图表和表格。

## Pros and Cons of the Agent

[cite_start]Now I want to talk a little bit about the pros and cons of this simple code agent approach. [cite: 38] First, it's not a multi-agent system. [cite_start]It's not autonomous agent that plans multiple steps or maintains long-term memory. [cite: 39] [cite_start]It's just a small focused agent that takes a query and outputs the code, but it definitely have a few nice properties. [cite: 40]

现在我想谈谈这种简单代码智能体方法的优缺点。首先，它不是多智能体系统。它不是规划多个步骤或维护长期记忆的自主智能体。它只是一个专注的小型智能体，接受查询并输出代码，但它确实有一些很好的特性。

### Advantages (Pros)

* [cite_start]**Flexibility**: The agent is free to decide how to answer the question, which column to use, which chart types make sense, and what transformation to apply to the data. [cite: 41]
* [cite_start]**Transparency**: The user can always see the generated Python code. [cite: 42] [cite_start]They can check whether the logic actually match their intention. [cite: 43]
* [cite_start]**Context Aware**: Because we passing metadata as schema of the data frame including the column names and sometimes the data ranges. [cite: 44] [cite_start]The agent understands the real data set and it's less likely to hallucinate random column names. [cite: 45]
* [cite_start]**Efficiency**: It's a single-shot agent. [cite: 46] [cite_start]Each question is answered in one model call which is fast and relative cheap for simple charting tasks. [cite: 47]

* **灵活性**：智能体可以自由决定如何回答问题，使用哪一列，哪种图表类型有意义，以及对数据应用什么转换。
* **透明度**：用户总是可以看到生成的 Python 代码。他们可以检查逻辑是否实际上符合他们的意图。
* **上下文感知**：因为我们将数据框的模式（包括列名，有时包括数据范围）作为元数据传递。智能体了解真实的数据集，不太可能产生随机列名的幻觉。
* **效率**：这是一个 **Single-shot**（单次尝试）智能体。每个问题都在一次模型调用中得到回答，这对于简单的绘图任务来说既快速又相对便宜。

### Limitations (Cons)

And of course there are also some limitations because it's a single shot. [cite_start]It cannot self-correct. [cite: 48] [cite_start]So if the first code generation is wrong, it doesn't automatically try again or inspect the error. [cite: 49]

当然也有一些局限性，因为它是单次尝试的。它不能自我修正。所以如果第一次生成的代码是错误的，它不会自动重试或检查错误。

[cite_start]We don't store any long-term state or long-term memory across the calls. [cite: 50] [cite_start]The agent won't remember the previous code generations or previous questions. [cite: 51] [cite_start]Every request is stateless and handled from scratch. [cite: 52]

我们在调用之间不存储任何长期状态或长期记忆。智能体不会记住之前的代码生成或之前的问题。每个请求都是无状态的，并且从头开始处理。

## Conclusion

[cite_start]So even with these limitations, this is a very nice starter agent that you can actually implement in a very short time and start using. [cite: 53] [cite_start]So if you like to play with this idea, you can download the code from the link below, run it locally and then customize the prompt, tweak the rules or replace with your own data set. [cite: 54]

因此，即使有这些局限性，这也是一个非常好的入门级智能体，你实际上可以在很短的时间内实现并开始使用。如果你想尝试这个想法，可以从下面的链接下载代码，在本地运行，然后自定义提示词，调整规则或替换为你自己的数据集。

[cite_start]If you enjoy this kind of practical AI project where we build small tools that actually work in work or life, please like this video and subscribe to our channel and come to join my community where we learn and build AI together. [cite: 55] [cite_start]Thanks for watching. [cite: 56]

如果你喜欢这种构建在工作或生活中实际有用的小工具的实用 AI 项目，请点赞此视频并订阅我们的频道，并加入我的社区，我们在那里一起学习和构建 AI。谢谢观看。