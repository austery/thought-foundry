---
author: AI Engineer
date: '2025-12-22'
guest: ''
layout: post.njk
source: https://www.youtube.com/watch?v=gvIAkmZUEZY
speaker: AI Engineer
tags:
  - llm
  - coding-agents
  - ai-development
title: 下一代 AI 编程助手：Amp Code 详解 - Beyang Liu
summary: 本文介绍了一种名为 AMP 的新型 AI 编程助手，它通过终端和编辑器界面提供服务。AMP 是一种具有前瞻性的智能代理，旨在革新编码方式，提高开发效率。
insight: ''
draft: true
series: ''
category: ai-ml
area: tech-work
project:
  - ai-impact-analysis
people:
  - Beyang Liu
companies_orgs:
  - OpenAI
products_models:
  - GPT-4
media_books: []
status: evergreen
---
### Amp Code：下一代 AI 编程助手

AMP 是一种**具有前瞻性的智能代理**，旨在革新编码方式。它通过**终端**和**编辑器**界面提供服务，帮助开发者更高效地编写代码。

### Amp 的核心特点

* **终端 UI**：AMP 拥有自主构建的**终端 UI 框架**，充分利用现代终端的能力。
* **代码补全与调试**：AMP 可以在**编辑器**中提供代码补全、调试等功能。
* **自定义工具集**：AMP 采用**定制化工具集**，而非通用的工具协议（MCP）。
* **多智能体架构**：AMP 采用**双智能体架构**（Smart Agent 和 Rush Agent），分别适用于**复杂任务**和**快速编辑**。

### Amp 的智能体架构

AMP 采用**双智能体架构**：
1. **Smart Agent**：适用于**复杂任务**，可访问**多个子智能体**，处理能力更强，但速度较慢。
2. **Rush Agent**：适用于**快速编辑任务**，速度快，但功能相对有限。

### Amp 的子智能体

AMP 设计了多个**子智能体**，以扩展其功能：
* **Finder**：代码库搜索智能体。
* **Oracle**：推理智能体，用于处理复杂问题。
* **Librarian**：用于获取代码库以外的上下文信息。
* **Kraken**：用于编写代码修改，以进行大规模重构。

### Amp 的优势

* **高效编码**：AMP 帮助开发者**减少手动编码时间**，专注于**代码评审**。
* **智能化**：AMP 的智能体可以**自动处理重复任务**，提高编码效率。
* **灵活性**：AMP 支持**多种终端和编辑器**，适应不同开发环境。

### Amp 的社区与未来

* **社区建设**：AMP 已启动**开发者社区**，由 Ryan Carson 运营，专注于**智能体开发与应用**。
* **未来展望**：AMP 希望**推动 AI 编程助手的发展**，让更多人能够**便捷地使用 AI 工具**进行开发。

<details>
<summary>Original English</summary>

How's
 everyone
 doing
 today?

>> Yeah,
 cool.
 Pretty
 cool
 conference,
 huh?

Um,
 so
 yeah,
 my
 name
 is
 Vang.
 I'm
 here

to
 talk
 about
 AMP.
 AMP
 is
 an
 opinionated

frontier
 agent.
 Uh
 so
 before
 I
 get
 into

what
 that
 means,
 uh
 who
 are
 we?
 Uh
 we're

the
 bunch
 of
 weirdos
 downstairs
 at
 the

booth
 with
 the
 weird
 pied
 piper
 dude
 on

the
 floating
 golden
 fish.
 Uh
 and
 I
 think

that
 kind
 of
 captures
 the
 ethos
 of
 what

we're
 trying
 to
 do
 uh
 with
 AMP.
 We're

trying
 to
 lean
 into
 that
 sense
 of
 awe

and
 absurdity
 that
 I
 think
 we
 all

experience
 right
 now
 living
 in
 this

weird
 world
 we're
 living
 in
 where
 agents

are
 writing
 an
 increasingly
 large
 amount

of
 of
 our
 code.
 Uh
 and
 it's
 just
 kind
 of

like
 weird
 and
 magical.
 Like
 if
 you

imagine
 how
 you
 were
 working
 like
 a
 year

ago
 compared
 to
 how
 you're
 working
 now,

it
 it
 feels
 completely
 different.
 And
 so

we're
 embracing
 that
 sense
 of
 change
 and

we
 really
 want
 to
 be
 the
 agent
 research

lab
 that's
 sort
 of
 like
 living
 one
 year

in
 the
 future
 and
 figuring
 out
 how
 this

all
 kind
 of
 pans
 out.
 Okay.
 So,
 what
 is

AMP
 actually?
 Well,
 it's
 a
 it's
 a
 coding

agent
 that
 you
 can
 invoke
 from
 the

terminal.
 So,
 here's
 our
 terminal
 UI.
 Uh

we
 actually
 ended
 up
 building
 a
 complete

terminal
 UI
 framework
 up
 from
 scratch

because
 we
 wanted
 to
 take
 advantage
 of

all
 the
 capabilities
 of
 modern
 terminals.
 And
 one
 of
 the
 balances
 we

tried
 to
 strike
 in
 in
 this
 UI
 is
 we
 try

to
 show
 the
 right
 amount
 of
 information

to
 the
 user
 that
 conveys
 what
 the
 agent

is
 doing
 without
 overwhelming
 you
 with,

you
 know,
 every
 single
 token
 of

explanation
 uh
 that
 the
 model
 is

generating.
 We
 stream
 the
 diffs
 that

it's
 making.
 uh
 we
 show
 you
 what
 CLI

commands
 it's
 using.
 And
 if
 you
 look
 in

the
 bottom
 right
 hand
 corner
 there,

you'll
 see
 a
 little
 Emacs
 30.1
 thing.

This
 also
 connects
 to
 the
 editor
 that

you're
 using
 where
 it
 collects

diagnostics.
 So,
 Emacs,
 Neovim,
 Jet

Brains.
 Uh
 you
 can
 connect
 the
 the
 CLI

to
 your
 editor
 uh
 to
 collect
 additional

information
 that's
 relevant
 to
 the
 task

at
 hand.
 And
 so,
 this
 particular
 video

is
 just
 AMP
 implementing
 a
 small
 feature

to
 itself.
 Uh
 we
 asked
 it
 actually
 to

add
 a
 little
 help
 button
 in
 the
 bottom

lefthand
 corner.
 Uh
 and
 so
 that's
 just

a
 quick
 demo
 to
 show
 you
 that
 uh
 the
 agent

is
 pretty
 good
 at
 finding
 the
 relevant

context
 and
 iterating
 towards
 that.
 Uh

we
 also
 have
 an
 editor
 experience.
 Uh
 so

we've
 not
 found
 the
 motivation
 yet
 to

fork
 VS
 Code.
 Maybe
 we
 will
 in
 the

future,
 but
 right
 now
 this
 installs
 into

VS
 Code
 or
 any
 of
 its
 derivatives,

Cursor,
 Windsurf,
 uh
 anti-gravity.
 Um

and
 the
 idea
 here
 is
 you
 really
 write

all
 your
 code
 through
 this
 agent
 panel.

At least
 I
 do.
 Um
 I
 I
 actually
 spend

very
 little
 time,
 you
 know,
 actually

manually
 editing
 code
 now.
 And
 one
 of

the
 bottlenecks
 we
 identified
 in
 the

editor
 is
 I
 don't know
 about
 you,
 but
 I

spend
 most
 of my
 time
 effectively
 doing

code
 review
 now.
 Um
 just
 in
 the
 editor

trying
 to
 read
 through
 all
 the
 agent

output.
 That's
 the
 thing
 that
 constrains

me
 from
 uh
 fully
 paralyzing,
 you
 know,
 2

3x
 uh
 the
 number
 of
 agents
 that
 I

can
 run
 at at
 a
 given
 time.
 So
 we
 built
 a
 re

review reu
 interface
 that
 I'll
 talk

about
 uh
 in
 more
 depth
 uh
 in
 a
 bit
 that

uh
 kind
 of
 helps
 you
 streamline
 that

process
 guides
 you
 through
 the
 process

of
 understanding
 what
 the
 agent
 wrote
 so

that
 you
 can
 ensure
 that
 you're
 not

shipping
 something
 that's
 super
 sloppy

or
 spaghetti.
 Okay,
 so
 I
 hear
 all
 of
 you

thinking
 like,
 okay,
 yeah,
 yeah,
 it

looks
 pretty,
 but
 what
 actually
 is

different?
 You
 know,
 why
 is
 this
 better

than
 the
 like
 20
 other
 coding
 agents

here?
 And
 I
 think
 the
 best
 way
 to
 convey

this
 is
 I'm
 not
 going
 to
 try
 to
 convince

you
 that
 it's
 better.
 I
 think
 that
 is

ultimately
 up
 to
 you
 trying
 different

things
 out
 and
 seeing
 what
 actually

works.
 But
 I
 am
 going
 to
 try
 to
 convince

you
 that
 we're
 thinking
 about
 things
 in

a
 very
 different,
 opinionated,
 and
 weird

manner.
 So
 I
 want
 to
 take
 you
 on
 the

journey
 of
 us
 building
 AMP
 and
 all
 the

different
 sort
 of
 contrarian
 or
 spicy

takes
 that
 we've
 made
 uh
 decision-wise

in
 the
 architecture
 of
 of
 the
 agent

along
 the
 way.
 Okay,
 so
 let's
 start
 at

the
 beginning.
 Um
 hello
 agent.
 What
 is

an
 agent
 at
 its
 core?
 Well,
 all
 an
 agent

is
 as
 I'm
 sure
 most
 of
 you
 know
 uh

is
 it's
 a
 for
 loop
 uh
 with
 tool
 calls
 and
 a

model
 uh
 in
 the
 middle.
 And
 the
 reason
 I

want
 to
 present
 this
 slide
 is
 because

think
 of
 it
 this
 way
 really
 tells
 you

what
 sort
 of
 levers
 you
 have
 to
 pull
 as

a
 builder
 of
 agent.
 Uh
 there
 there's

certain
 things
 that
 you
 can
 change.
 You

can
 change
 the
 choice
 of
 model.
 You
 can

change
 the
 tool
 descriptions
 and
 you
 can

change
 uh
 how
 the
 model
 iterates
 with

those
 tools
 and
 those
 are
 effectively

your
 levers.
 Seems
 like
 a
 few
 amount

of
 levers
 but
 you
 know
 just
 like

programming
 languages
 all
 those
 are

syntactic
 sugar
 around
 if
 statements
 and

for
 loops.
 You
 know
 you
 can
 get
 a

surprisingly
 wide
 variance
 of
 behaviors

and
 complexity
 out
 of
 that.

And
 so
 one
 of
 the
 key
 lovers
 in
 building

any
 agent
 is
 the
 set
 of
 tools.
 And
 these

days
 you
 cannot
 talk
 about
 tools
 without

talking
 about
 MCP.
 So
 one
 of
 the
 early

decisions
 we
 had
 to
 make
 in
 building
 AMP

is
 how
 much
 do
 we
 invest
 in
 the
 MCP

integrations?
 And
 MCP
 is
 this
 amazing

new
 protocol
 that's
 gotten
 everyone
 and

their
 mom
 thinking
 about
 how
 to
 provide

context
 to
 agents.
 Um
 should
 we
 lean

into
 that
 or
 should
 we
 start
 building

our
 own
 custom
 tool
 set?
 And
 our
 very

opinionated
 take,
 I
 think
 this
 is
 maybe,

you
 know,
 less
 controversial
 now
 than
 it

was,
 you
 know,
 back
 in
 in
 April,

was
 that
 we
 should
 really
 actually
 focus

most
 of
 our
 attention
 on
 the
 core
 uh
 set

of
 tools
 within
 AMP.
 And
 that's
 really

for
 two
 reasons.
 One
 is
 because
 the
 more

you
 work
 with
 agents,
 the
 more
 you
 find

uh
 out
 that
 what
 you're
 trying
 to
 do
 is

identify
 these
 feedback
 loops
 and
 help

the
 agent
 close
 them.
 And
 in
 order
 to
 do

that,
 you
 need
 a
 refined
 tool
 set
 that

is
 really
 geared
 toward
 helping
 the

agent
 find
 those
 loops.
 And
 you
 cannot

do
 that
 with
 MCP
 servers.
 The
 creator

of
 the
 MCP
 server
 doesn't
 know
 what
 your

agent
 is
 trying
 to
 do.
 And
 so
 they're

not
 going
 to
 tune
 the
 tool
 descriptions

to
 what
 you're
 trying
 to
 accomplish.
 And

then
 the
 second
 piece
 of
 this
 is
 context

confusion.
 So
 the
 more
 tools
 that
 you

add
 into
 the
 context
 window,
 uh
 the
 more

things
 that
 the
 agent
 has
 to
 choose

from.
 And
 if
 the
 tools
 aren't
 relevant

to
 the
 task
 at
 hand,
 it
 ends
 up
 getting

confused.
 So
 we've
 leaned
 hard
 into
 this

uh
 custom
 tool
 set.
 And
 you'll
 see
 a

little
 bit
 more
 about
 that
 in
 just
 a

little
 bit.
 But
 before
 that,
 I
 wanted

to
 call
 out
 another
 issue
 with
 uh
 tool

users,
 which
 is
 it's
 not
 just
 tool

descriptions
 that
 eat
 up
 context.
 It's

the
 tool
 calls
 themselves
 that
 also
 eat

up
 context.
 And
 so,
 everyone
 who's
 built

an
 agent
 has
 run
 into
 a
 context

exhaustion
 problem
 where,
 you
 know,
 if

you
 use
 any
 sort
 of
 coding
 agent,

if
 it's
 good,
 it's
 going
 to
 go
 out
 and

try
 to
 find
 a
 bunch
 of
 relevant
 context
 by

grepping
 and
 reading
 files
 first.
 And
 by

the
 time
 it
 gets
 to
 editing,
 there's

only
 a
 small
 amount
 of
 context
 window

left.
 And
 so,
 maybe
 it
 has
 to
 stop

prematurely.
 And
 so
 the
 naive
 way
 to
 fix

this
 is
 just
 to
 prompt
 it
 to,
 you
 know,

do
 less
 reads
 so
 you
 can
 do
 more

iterations
 on
 the
 edit
 side.
 But
 then

this
 leads
 to
 another
 failure
 mode
 which

I
 call
 the
 doom
 loop
 mode
 which
 is
 it

doesn't
 gather
 enough
 context
 in
 the

beginning
 and
 so
 it
 ends
 up
 not
 figuring

out
 what
 it
 needs
 to
 do
 and
 just
 retries

the
 same
 thing
 over
 and
 over
 again.
 And

so
 the
 way
 to
 solve
 this
 is
 really
 with

uh
 sub
 aents.
 So
 sub
 agents
 are
 the

analog
 to
 subutine
 calls
 in
 regular

programming
 languages.
 This
 is
 how
 you

can
 factor
 out
 the
 context
 window
 used

for
 a
 subtask
 into
 a
 separate
 context

window
 which
 is
 the
 sub
 agents
 context

window.
 Uh
 it
 can
 do
 all
 the
 things

it
 needs
 and
 then
 at
 the
 end
 of the
 day
 it

only
 returns
 the
 relevant
 results
 to
 the

main
 uh
 agent
 window.
 So
 sub
 agents
 are

effectively
 a
 way
 to
 conserve
 and
 extend

the
 context
 window
 of
 your
 main
 agent.

Uh
 so
 sub
 aents
 sub
 agents
 are
 great.
 I

think
 everyone
 uh
 building
 agents
 has

probably
 heard
 of
 or
 or
 use
 sub
 agents

uh
 so
 far.
 But
 I
 think
 we
 have
 a

unique
 take
 on
 sub
 agents,
 which
 is
 we're
 not

really
 doing
 generic
 sub
 uh
 sub
 aents

where
 you
 kind
 of
 tweak
 the
 system

prompt
 and
 tweak
 the
 tool
 set
 a
 little

bit.
 We've
 really
 leaned
 into
 our
 sub

aents.
 Uh
 and
 so
 we
 have
 uh
 three
 to

four
 really
 core
 sub
 aents
 that
 really

extend
 the
 functionality
 and
 capability

uh
 of
 AMP
 itself.
 The
 first
 one
 is

something
 that
 we
 call
 the
 finder.
 This

is
 effectively
 our
 codebase
 uh
 search

sub
 aent.
 It's
 gone
 through
 an
 evolution

of
 models
 and
 we've
 ended
 up
 at
 the

point
 now
 where
 we're
 using
 a
 relatively

small
 and
 quick
 model
 to
 drive
 a
 limited

tool
 set
 that
 we
 found
 really
 is
 optimal

for
 quickly
 discovering
 uh
 relevant

context
 within
 the
 codebase.

Another
 sub
 aent
 that
 we've
 implemented

is
 the
 thing
 that
 we
 call
 the
 oracle.
 So

this
 is
 how
 AMP
 does
 reasoning.
 So
 in

contrast
 to
 most
 agents
 which
 uh
 you

know
 implement
 reasoning
 in
 the
 model

selection
 part
 of
 the
 experience,
 we

found
 the
 best
 way
 to
 implement

reasoning
 models
 is
 really
 through
 a
 sub

agent.
 What
 that
 allows
 you
 to
 do
 is

preserve
 the
 relative
 like
 snappiness
 uh

in
 the
 main
 agent
 as
 well
 as
 its
 ability

to
 to
 use
 a
 variety
 of
 different
 tools

and
 then
 only
 when
 you
 need
 to
 debug
 a

tricky
 problem
 or
 plan
 something
 very

nuance,
 it
 drops
 into
 this
 Oracle
 sub

agent
 and
 figures
 things
 out.
 And
 this

is
 something
 that's
 like
 kind
 of

magical.
 It's
 like
 anytime
 the
 main

agent
 has
 trouble
 uh
 figuring
 out

something
 and
 I'm
 like
 I
 don't
 want

to
 spend
 like
 one
 to
 two
 hours
 going

down
 this
 rabbit
 hole,
 I
 just
 like
 tag

the
 oracles
 like
 invoke
 the
 oracle,

think
 really
 hard,
 I
 go
 like
 alt
 tab,

check
 my
 email
 for
 a
 bit
 and
 sometimes
 it
 takes

a
 few
 minutes
 because
 it's
 thinking

really
 deeply,
 but
 I
 think
 like
 four
 or
 out

of
 five
 times
 it
 just
 magically
 finds
 uh
 uh

the
 underlying
 issue.
 We
 also
 have
 a

librarian
 sub
 agent
 which
 is
 meant
 to

fetch
 context
 beyond
 the
 codebase.
 So

from
 libraries
 and
 frameworks
 that
 you

depend
 on.
 And
 then
 there's
 a
 new

experimental
 sub
 aent
 that
 we
 call
 the

Kraken.
 Uh
 its
 job
 is
 it
 doesn't
 edit

code
 files
 uh
 one
 by
 one.
 Uh
 it
 really

is
 all
 about
 writing
 code
 mods
 to
 do

these
 kind
 of
 like
 large
 scale

refactors.
 So
 we're
 leaning
 hard
 into

the
 sub
 agents
 and
 uh
 that's
 really
 in

contrast
 to
 a
 lot
 of the
 existing
 coding

agents.
 I
 think
 almost
 every
 other

coding
 agent
 implements
 a
 model
 selector

as
 one
 of the
 core
 uh
 UX
 components
 and

we
 just
 don't
 think
 that
 this
 is
 the

architecture
 of
 the
 future.
 I
 get
 that,

you
 know,
 developers
 like
 choice
 or
 at

least
 the
 the
 possibility
 of
 choice.
 But

the
 problem
 with
 choice
 is
 that
 there's

also
 a
 paradox
 of
 choice.
 The
 more

choices
 that
 you
 have,
 the
 more
 uh
 kind

of
 like
 cognitive
 burden
 it
 is
 to
 choose

from
 these
 different
 models.
 And
 that

means
 at
 the
 architectural
 level,
 if
 you

have
 n
 different
 models
 and
 one
 agent

harness
 that
 you
 can
 only
 lightly

customize
 each
 model,
 it
 means
 you're

never
 really
 optimizing
 for
 what
 any
 one

given
 model
 uh
 can
 do.
 And
 so
 AMP's

architecture
 is
 much
 more
 agent-oriented.
 We

have
 two
 top
 level
 agents,
 a
 smart
 agent
 and
 a
 rush
 agent.

And
 the
 smart
 agent
 is
 the
 one
 that
 has

access
 to
 all
 those
 fancy
 sub
 aents

and
 can
 do
 a
 lot
 of
 things.
 It's
 it's
 a

little
 bit
 slower,
 but
 you
 can
 hand
 it

more
 complex
 instructions.
 And
 then
 the

rush
 agent
 is
 for
 uh
 those
 kind
 of
 like

in
 the
 loop
 tasks
 where
 you
 want
 to
 be

tight
 in
 the
 loop
 and
 you're
 making

quick
 targeted
 uh
 edits
 to
 to
 the
 code.

And
 why
 do
 we
 have
 two
 top
 agents?
 It's

really
 we're
 trying
 to
 kind
 of
 like
 pick

points
 along
 the
 frontier
 of

intelligence
 and
 speed
 that
 are

meaningful
 to
 the
 user
 experience.
 So
 in

in
 talking
 to
 our
 users,
 we
 found
 that

there's
 kind
 of
 two
 modalities
 for

invoking
 agents.
 Now
 one
 is
 you
 kind
 of

like
 spin
 off
 a
 task
 and
 have
 it
 run

and
 then
 review
 the
 code
 when
 it's
 finished

asynchronously.
 Uh
 or
 you
 want
 to
 be

in
 the
 loop,
 you
 know,
 quickly
 having
 the

agent
 make
 edits
 while
 you
 quickly

review
 them
 one
 by
 one.
 Kind
 of
 like

babysitting
 the
 agent
 uh
 in
 the
 inner

loop.

And
 we're
 very
 intentional
 about
 the

model
 choice
 here.
 We've
 only
 switched

the
 smart
 model
 once
 and
 that
 was

actually
 two
 days
 ago
 uh
 when
 Gemini

3
 uh
 was
 released.
 And
 I
 think
 you
 know

the
 the
 reaction
 Gemini
 3
 has
 been

really
 interesting
 to
 watch.
 I
 think

you'll
 see
 widely
 different
 behavior

from
 Gemini
 3
 in
 different
 uh
 agent

settings.
 So
 for
 those
 of
 you
 who've

tried
 it
 out
 in
 other
 settings,
 I
 highly

encourage
 you
 to
 uh
 try
 AMP.
 We
 did

a
 lot
 of
 testing
 in
 the
 week
 before
 the

release
 to
 optimize
 the
 smart
 agent
 to

take
 full
 advantage
 of
 of
 its

capabilities.
 And
 uh
 we're
 absolutely

loving
 it.
 We're
 still
 working
 through

some
 kinks
 obviously
 because
 it's
 a

new
 model,
 but
 we
 feel
 confident
 that
 it

it's
 again
 moved
 the
 frontier
 of
 what's

possible.

Okay,
 so
 we
 talked
 a
 lot
 about
 like

agent
 construction,
 the
 behavior.
 I
 want

to
 talk
 a
 little
 bit
 about
 the
 UI
 layer

of
 agents
 as
 well.
 So,
 you
 know,
 editor

versus
 terminal,
 we're
 doing
 both.
 Um,

and
 I
 think
 that's
 because
 both
 of
 them

tackle
 kind
 of
 like
 different
 modalities

of
 working.
 Uh,
 but
 we
 do
 have
 opinated

takes
 uh
 in
 each
 interface.
 So,
 in
 the

editor,
 I
 think
 of
 my
 editor
 now
 more

as
 a
 reader
 uh
 uh
 more
 than
 anything
 else

because
 uh
 I
 don't know
 like
 if
 you're

using
 agents
 heavily,
 I
 don't
 think

you're
 really
 editing
 all
 that
 much
 uh

in
 your
 editor
 anymore.
 You're
 mainly

driving
 edits
 through
 the
 agent
 panel,

which
 is
 what
 you
 see
 on
 the
 right
 hand

side
 or
 the
 right
 hand
 side
 here.
 And

then
 what
 I
 do
 in
 in
 my
 editor
 is
 I

pop
 over
 to
 the
 side
 panel,
 which
 is

optimized
 for
 reviewing
 different
 diffs.

So
 we
 actually
 built
 a
 custom
 diff

viewer
 for
 the
 way
 that
 people
 are

consuming
 agentic
 output.
 You
 can

select
 any
 arbitrary
 commit
 range
 quickly
 view

through
 the
 file
 level
 diffs.
 All
 the

diffs
 are
 editable
 and
 you
 have
 full

code
 navigation.
 So
 go
 to
 definition

find
 references
 and
 there's
 a
 feature
 at

the
 bottom
 that
 gives
 you
 a
 tour
 of
 the

change.
 So
 it
 actually
 guides
 you

through
 which
 files
 you
 should
 read

first
 because
 I
 find
 half
 the
 battle

when
 reviewing
 a
 large
 change
 is

figuring
 out
 where
 to
 start.
 So
 the
 guey

aspect
 of
 the
 editor
 allows
 us
 to
 build

a
 very
 rich
 uh
 experience
 uh
 for

this
 type
 of
 thing.
 And
 then
 meanwhile

in
 the
 terminal
 um
 we
 really
 want
 to

take
 advantage
 full
 advantage
 of
 the
 the

features
 and
 rendering
 capabilities
 of

modern
 terminals.
 So
 uh
 we
 actually

have
 one
 of the
 core
 contributors
 to
 Ghosty

uh
 the
 open
 source
 uh
 terminal
 uh
 that

built
 a
 uh
 a
 TUI
 framework
 from
 scratch

to
 power
 the
 AMPU.
 So
 one
 of
 the
 nice

things
 that
 we
 can
 do
 is
 just
 to
 point

out
 a
 little
 detail
 the
 the
 green
 color

of
 the
 diff
 rendering
 on
 the
 left
 hand

side
 terminal
 that's
 actually
 we
 can

have
 the
 terminal
 mix
 in
 the
 color
 green

with
 whatever
 background
 color
 it's

using.
 So
 that
 allows
 for
 a
 much
 nicer

display.
 At
 the
 same
 time
 we
 know
 that

people
 use
 all
 sorts
 of
 terminals
 uh

including
 like
 terminals
 in
 Jet
 Brains

or
 VS
 Code
 and
 other
 editors.
 And
 so

we've
 added
 the
 ability
 to
 gracefully

degrade.
 So
 even
 if
 you're
 using
 AMP

in
 like
 the
 default
 Mac
 OS
 terminal,

it
 falls
 back
 to
 the
 capabilities
 that
 uh

are
 uh
 available
 in
 in
 that
 setting.

Another
 aspect
 about
 how
 we're
 thinking

about
 coding
 agents
 is
 really
 from
 the

how
 do
 we
 get
 people
 to
 learn
 this
 new

craft?
 Like
 we
 think
 that
 uh
 human

developers
 are
 going to
 be
 around
 for
 a

long
 long
 time,
 but
 we
 essentially
 have

to
 relearn
 the
 craft
 of
 how
 to
 code
 uh

together.
 And
 so
 one
 of the
 first

features
 that
 we
 built
 in
 AMP
 was
 the

ability
 to
 share
 threads
 with
 your

teammates.
 So,
 if
 you're
 using
 AMP

on
 your
 team,
 you
 can
 go
 and
 see
 like
 how

much
 code
 people
 are
 changing
 with
 AMP

over
 a
 given
 period
 of
 time.
 And
 you
 can

poke
 into
 specific
 threads
 to
 see
 how

they're
 doing
 things.
 And
 people
 love

this
 feature
 because
 essentially
 like

link
 threads
 to
 AMP
 and
 say
 like,
 "Hey,

here's
 a
 cool
 prompting
 technique
 that
 I

discovered.
 Try
 it
 like
 this."
 Or,
 "Hey,

here
 it
 got
 stuck
 here.
 Can
 you
 help
 me,

you
 know,
 uh
 think
 through
 how
 better
 to

to
 connect
 the
 agent
 with
 the
 feedback

loop
 to
 get
 further?"
 uh
 another
 aspect
 of
 of
 uh
 enabling

more
 people
 to
 experience
 uh
 coding

agents
 and
 learn
 how
 they
 work
 is
 by
 making

it
 more
 accessible
 from
 an
 economic

perspective.
 So
 um
 you
 know
 remember
 the

smart
 and
 uh
 rush
 uh
 agents
 at
 the

top
 level.
 You
 know
 smart
 models
 remain

relatively
 expensive
 today
 but
 rush

models
 are
 getting
 cheaper
 and
 cheaper

but
 not
 yet
 free.
 And
 so
 we're
 thinking

about
 you
 know
 more
 and
 more
 like
 one
 of

the
 the
 biggest
 barriers
 to
 using
 agents

fully
 is
 actually
 cost
 right
 now.
 Like

if
 you
 go
 to
 like
 college
 campuses
 uh

and
 talk
 to
 students,
 the
 actual
 number

of
 people
 who
 have
 used
 a
 coding
 agent

is
 actually
 much
 smaller
 than
 I
 would

have
 thought
 given
 you
 know
 young

people's
 uh
 propensity
 to
 adopt
 new

technology.
 A
 lot
 of
 this
 cost.
 So

someone
 had
 the
 crazy
 idea
 on
 our

team
 like
 hey
 you
 know
 what
 we
 could
 do
 we

could
 ship
 ads
 in
 your
 terminal.
 And
 at

first
 it
 was
 like
 nah
 that'll
 never

work.
 But
 the
 more
 and
 more
 we
 thought

about
 it
 and
 the
 more
 and
 more
 like

inference
 costs
 started
 declining
 we're

like
 yeah
 maybe.
 So,
 we
 actually
 shipped

uh
 a
 mini
 ad
 network
 that
 delivers
 ads

for
 other
 developer
 tools
 uh
 in
 in
 AMP

in
 the
 terminal
 and
 in
 the
 editor.

Uh
 they're
 very
 subtle.
 So,
 I
 don't

know
 if
 you
 can
 spot
 the
 ad
 in
 this

screenshot,
 but
 we
 try
 to
 make
 them
 non-intrusive.

But
 this
 effectively
 allows
 us
 to

sponsor
 inference
 uh
 in
 in
 the
 Rush

agent
 so
 that
 uh
 more
 people
 are
 able

to
 experience
 this
 on
 you
 know
 their

side
 projects
 and
 such.

Okay.
 So,
 AMP
 is
 AMP.
 Uh
 we
 are
 like
 I

said
 a
 we
 think
 of
 ourselves
 as
 like

an
 agentic
 research
 lab.
 So
 we're
 not
 about

uh
 hype.
 We
 don't
 do
 any
 sort
 of

like
 paid
 developer
 influencer
 marketing.
 But

I
 like
 to
 call
 out
 some
 cool
 people
 that

I
 think
 are
 using
 AMP.
 Um
 because
 it

shows
 for
 the
 type
 of
 people
 that
 we're

really
 selecting
 for.
 I
 I
 don't
 think

AMP
 is
 for
 everyone
 uh
 at
 this
 point.

We're
 really
 trying
 to
 target
 the

like
 small
 percentage
 of
 people
 who
 want

to
 live
 a
 little
 bit
 in
 the
 future.
 Um,

and
 so
 we
 have
 folks
 like
 Mitchell

Hashimoto,
 the
 uh
 the
 founder
 and
 and

excepting

Ghosty
 now.
 Uh,
 that's
 his
 uh
 kind
 of

passion
 project
 and
 he's
 using
 AMP
 to

drive
 a
 lot
 of
 the
 changes
 that
 he

makes
 uh
 to
 that
 terminal.
 And
 then
 we
 also

have
 folks
 like
 Hamill
 Hussein
 who's
 I

think
 probably
 like
 the
 leading

authority
 on
 AI
 evals.
 Um,
 and
 at
 least

as
 of
 a
 couple
 weeks
 ago
 uh
 he
 was

saying
 that
 AMP
 was
 his
 favorite
 coding

agent.
 And
 so,
 uh,
 neither
 of
 them

are
 on
 the
 team
 or,
 you
 know,
 have

invested
 us
 in
 any
 way,
 but
 we're
 just

thrilled
 that,
 you
 know,
 they
 seem
 to

like
 like
 what
 we're
 building.

And
 then
 if
 other
 folks
 are
 interested

in
 in
 kind
 of
 like
 coming
 along
 with
 us

in
 in
 in
 this
 journey
 and
 trying
 to

push
 the
 frontier
 of
 what
 agents
 can

do,
 uh,

we've
 also
 started
 a
 community
 of

builders.
 Um,
 and
 using
 AMP
 is
 not
 a

requirement
 to
 join
 this
 community.
 It's

run
 by
 uh
 Ryan
 Carson
 whose
 former

startup
 uh
 Treehouse
 taught
 over
 a

million
 people
 to
 code
 and
 now
 this
 is

his
 passion
 project.
 It's
 essentially

like
 if
 you're
 building
 with
 agents
 and

you're
 you're
 experimenting
 with
 how
 to

push
 them
 further
 and
 further.
 There's

Ryan
 right
 there.
 Um
 it
 it's
 all

about
 kind
 of
 like
 tapping
 into
 that

sense
 of
 awe
 and
 wonder
 with
 a

peer
 group
 uh
 that
 is
 also
 uh

leaning
 into
 that
 uh
 sense
 of

of
 strangeness
 and
 and
 experimentation.

So
 um
 what
 does
 this
 involve?
 It

involves
 uh
 like
 regular
 interviews
 with

people.
 We