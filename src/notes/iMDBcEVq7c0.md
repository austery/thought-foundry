---
author: How I AI
date: '2025-11-15'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=iMDBcEVq7c0
speaker: How I AI
tags:
  - call-transcripts
  - business-automation
  - ai-tools
  - data-scraping
  - workflow-automation
title: 利用AI自动化从通话记录中提取商业资产
summary: 本文详细介绍了如何利用Zapier和Browse AI等自动化工具，从Gong平台中高效提取通话记录。核心在于识别并利用通话的唯一标识符——通话ID，通过Zapier触发新通话事件，进而指示Browse AI访问特定URL并抓取完整的通话文本。这一自动化流程能够帮助用户便捷地获取原始通话数据，为生成商业资产奠定基础。
insight: ''
draft: true
series: ''
category: business
area: market-analysis
project:
  - ai-impact-analysis
  - entrepreneurship
people: []
companies_orgs:
  - Gong
  - Zapier
  - Browse AI
products_models: []
media_books: []
status: evergreen
---
### 自动化通话记录提取的挑战与解决方案

我开始调出大量的通话记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I basically started to bring up a bunch of call transcripts.</p>
</details>

我发现它们都以类似的方式开头，并以一个**通话ID**（Call ID: 通话的唯一标识符）结尾。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">What I started to see is they all kind of start the same way and they just end it with this call ID.</p>
</details>

因此，每次通话之间唯一的区别就是这个通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The only thing different from call to call was this call ID.</p>
</details>

基本上，我需要弄清楚，我能否为**Zapier**（自动化平台：连接不同应用并实现自动化工作流的工具）创建一个数据流，使其在每次新通话发生时都能知道其通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">Basically, I needed to figure out if I could create a feed for Zapier so it would know the call ID of each new call as it occurred.</p>
</details>

### 利用Zapier和Browse AI实现自动化抓取

第一步本质上是一个触发器，当有新通话进来时，它会从**Gong**（通话智能平台：记录、转录和分析销售及客户服务通话的工具）抓取信息，而Gong会提供其中一个信息就是那个通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">The first step is essentially a trigger where a new call comes in, and then when the new call comes in, it will basically scrape the information from Gong, and one of the things Gong will give you is that call ID.</p>
</details>

因此，我能够实际看到通话ID。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I'm able to actually see the call ID.</p>
</details>

如果我点击这里并滚动查看，你会发现这里有一个我可以识别的通话ID，就在这里。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">If I click here and I scroll over, you'll actually see that there's a call ID that I can identify here, which is right here.</p>
</details>

将这个ID附加到URL上，基本上就是我需要提供给**Browse AI**（网页抓取工具：自动化网页数据提取的服务）的所有信息，以便它能访问该URL并**抓取**（数据抓取: 自动从网页提取信息）通话记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">That appended to the URL is essentially all I needed to give Browse AI to be able to go to that URL and essentially scrape the call transcript.</p>
</details>

它原本并没有直接连接。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It wasn't connected.</p>
</details>

我不得不将它们巧妙地整合在一起。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">I had to kind of hack it together.</p>
</details>

它基本上是根据传入的信息来决定运行什么，然后会访问这个页面，并能够抓取整个通话记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">It basically knows what to run just based upon what's brought in, and then it will go to this page and it's able to essentially scrape the entire transcript.</p>
</details>

所以，这就是通过Browse AI访问Gong页面并获取的原始通话记录。

<details>
<summary>View/Hide Original English</summary>
<p class="english-text">So this is the raw transcript that's coming from the Gong calls, scraped by Browse AI going to that Gong page and then getting this information.</p>
</details>