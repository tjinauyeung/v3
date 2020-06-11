---
title: The Great Migration
date: 2020-06-10
description: 7 tips to help you migrate your legacy stack
path: /articles/the-great-migration/
image: cover.jpeg
---

<div class="center-image">
  <style>
    .video {
      width: 840px;
      height: 450px;
      margin: 20px -210px;
    }
    @media (max-width: 768px) {
      .video {
        width: 700px;
        height: 315px;
        margin: 20px 0;
      }
    }
  </style>
  <iframe class="video" src="https://www.youtube.com/embed/r6jcqCm5C1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Every year the caribou in Northern America embark on an epic journey in search for greener pastures. They head further North, along well-trod annual routes towards their summer grazing grounds in the mighty Tundra. Some herds may travel more than 600 miles during this trip. The reason for this massive undertaking? The environment is spent, and can no longer accommodate them. In order to survive, they need to migrate to newer, nutrient-richer soils.

#### Migrating software

A parallel with software can be drawn. A similar cycle takes place in software where every _x_ amount of years there is a need for a big rebuild. Old code has become brittle and hard to maintain. Labeled as legacy, it becomes more difficult to attract new engineers or enthuse current ones. As such, just like within the animal kingdom, there is a need here to move to the better and new.

However, how does one traverse a path riddled with uncertainty?

---

### The Problem

The problems arising from [software entropy](https://en.wikipedia.org/wiki/Software_entropy) can roughly be categorised under the following three topics:

- Rapid development
- Recruitment
- Retention

All three topics are likely to be negatively impacted as time goes by and the codebase ages.

#### Rapid development

With time, as your code base grows more and more complex, the development time of your application increases. A feature that used to take two days to implement, suddenly takes two weeks.

By continuously refactoring this decrease in development speed can be managed more sustainably, however there is a tipping point where the existing code becomes so complex it justifies a rebuild.

Additionally, the technology you were relying on may not be actively developed anymore, presenting potential risks when bugs occur in unmaintained libraries.

#### Recruitment

The tech landscape keeps on changing at a rapid pace. New frameworks, libraries and tools become the industry standard seemingly every other week, hence, engineers are pressured to keep up: searching for jobs that give them the opportunity to gain experience in these technologies. Buzz words like _"cutting edge"_, "_modern stack_", _"next generation"_ are copy-pasted onto every job description, but remain suprisingly effective in luring new talent.

As your stack becomes outdated, it becomes more and more difficult to find new people who are excited to work with it.

#### Retention

Similarly, existing engineers will likely feel the same pressure to learn new technologies and skills in order to keep up with market demands. Therefore, it can be demotivating for them to work on legacy codebases, learning skills soon to be expired. Engineers flock to other companies that allow them to experiment and learn the most current tools of the trade.

#### Solution

One way to solve these issues is to modernise your stack; migrate all existing code to more modern technologies. An up to date stack can make recruiting easier and retain existing employees. Furthermore, it can enable new techniques and prospects for your product in the future. However, depending on the size of your app and your team you may not have the resources for such an undertaking.

Currently, at [ING](https://developer.ing.com/openbanking/), I'm working on the migration of a front-end application with <span style="font-family: monospace;">58.252</span> LOC moving from [Polymer](https://www.polymer-project.org/) to a [React](https://reactjs.org/) based stack. At 99% of the way, I began analysing what factors contributed positively to the project, which can be summarized in the following:

- **Buy in** — Convince stakeholders
- **Feasibility** — Test your approach
- **Increments** — Migrate incrementally while keeping the app working
- **Prioritise** — Plan which areas to tackle first
- **Focus** — Avoid distractions
- **Decoupling** — Decouple to avoid more future work
- **Testing** — Refactor with confidence

In the remainder of the article I'll discuss each step more in depth.

---

### Buy-in

<div class="center-image">
  <img src="./stakeholders.jpg" alt="image showing stakeholders">
</div>

The first step is to create a support base. We wanted to have all noses pointing the same direction. Which meant getting all the stakeholders; the team, our PO and management on board with the idea. This was essential in order to spending time in a futile effort.

To do this effectively, we first identified the current problem\*, then discussed a way forward and, finally, presented our plan of the migration and all of its benefits.

Lucky for us, we had a very accommodating Product Owner who was empathetic from the start and helped us convince the MT layer of our plan as well. With the go-ahead we quickly started with small experiment; a feasibility test.

\*_see section above — The Problem_

---

### Feasibility

<div class="center-image">
  <img src="./feasibility.jpg" alt="diagram showing feasibility">
</div>

In our department there was a shift to a more product-focused development cycle. The big influencer is the framework of [design thinking](https://www.interaction-design.org/literature/topics/design-thinking), and an important part the process is to conduct a feasibility test.

Applying this to our process meant that we needed to build a [proof of concept](https://lvivity.com/proof-of-concept-meaning) as soon as possible to test if our idea was technically feasible. Aside from measuring feasibility, the other major advantage it brought was to be able to identify potential obstacles early in the process.

Several approaches were tried before deciding on the right one. This ensured the best option is chosen and also resulted in multiple possible techniques which we could mix and match in the final solution.

With a positive result from the feasibility test we've decided on a core technique to enable the incremental migration. In our case this was having an adapter inside of a Polymer element, which can render a React component. This allowed us to migrate the entire project, one component at the time.

---

### Prioritise

Depending on the size of the application the migration can take a significant amount of time. Upon the start, the question arise, where should we start? We started by discussing this issue with the team, then we brainstormed to come up with a logical prioritisation of our efforts. The parts of the application which are removed in the future could be skipped over, the parts which have the most business value are higher priority. The parts which will be subject to a near future update, should be migrated first in order to prevent double work.

Additionaly, my preference is to start with the leaf nodes and work your way to the core. By leaf nodes I mean services, objects, components that are at the leafs of your application dependency graph. Oher nodes may depend on them, but they themselves have little to no dependencies. Because of this, you can work on them in isolation without having to worry about its many dependencies, making this a significantly easier task. Furthermore, once a few simple leaf nodes are migrated, the team gains more experience with the new stack and picks up momentum; increasing our velocity.

<div class="center-image">
  <img src="./leaf-nodes.png" alt="leaf nodes diagram">
</div>

However, there is also an argument to be made to start the other way around; starting from the core of your application. Because this is a crucial part of your application, having this migrated gives a huge confidence boost, lowering the risk of potential bottlenecks moving forward. Having the most valuable part of your application working as expected, increases the chance of success for the migration many fold.

Whichever approach you start with, you should first agree with the team and work your way through the application in accordance with the plan.

---

### Increments

Probably the most important technique to use is to perform the migration in increments instead of one big bang. Being able to migrate incrementally and have a working, deployable application each increment along the way, made the strategy applicable to apps of all sizes, small or big, because you never risk having a broken app during the migration.

Looking at the evolution of development practises, the transition from [waterfall](https://en.wikipedia.org/wiki/Waterfall_model) practises to [agile](https://en.wikipedia.org/wiki/Agile_software_development) practises illustrates the benefits of working in increments. It brings continous delivery and the potential to discover bottlenecks and deal with them early. It speeds up the development process as a whole and never stops delivering business value.

We treated our migration in the same way. The idea was to refactor the entire app, one component at a time.

<div class="center-image">
  <img src="./increments.png" alt="image illustrating power of incremental change">
</div>

Working in increments also helped our conversation with deciding stakeholders. As there is no risk of having a broken app during the process, it minimises the risk and the weight of the decision.

One last benefit was that the work of the migration can be done in alignment with the other targets of the team. At any point, we could stop the migration and focus on delivering a new feature or perform a hot fix, without leaving the application in a broken state.

As a side note I'll add that we wanted to minimize the time spent in a hybrid state (with multiple technologies). It added a lot of complexity and cognitive burden to the developers; having to know different frameworks and switch contexts. Onboarding new recruits during the hybrid stage would also take more time. Therefore, I advice to complete the migration as soon as you can.

Incremental migration is very powerful, and in my view, a key factor to success. It is worth spending some time on research beforehand to determine a way to achieve it. And if additional infrastructure is needed, this should be considered seriously.

---

### Focus

**Avoid new features**

Keep your eyes on the prize. We have a tendency to improve what we see. While it is tempting to add new features while migrating, I'm of the opinion that this should be avoided. You pose considerable risk going down a [refactoring rabbit hole](https://www.youtube.com/watch?v=8fnfeuoh4s8). Done repeatedly, this will slow down the migration and potentially add new bugs.

However, on keeping the code clean, [the boy scout rule](https://www.matheus.ro/2017/12/11/clean-code-boy-scout-rule/) should still apply; leave the camp place a bit cleaner than you found it.

**New features**

In case you have new features which need to be implemented asap, the question is whether you should implement it first with the existing technology or immediately use the new technology? This should be discussed in the prioritisation step. Modules containing near future work should be migrated first to avoid double work. Try to minimise double work where possible.

<div class="center-image">
  <img src="./boy-scout.png" alt="image showing a boy scout from movie up">
</div>
<div class="center-image">
  <small text-align="center">Avoid new features, but boy scout rule still applies</small>
</div>

---

### Decoupling

Most of us know the value of modular, [decoupled](https://en.wikipedia.org/wiki/Loose_coupling) software, In the light of a tech migration picking new tools and technologies, that are decoupled and framework agnostic, prevent vendor lock in and enable easier path to migration in the future.

To give a more concrete example, our legacy project was built around a [Redux](https://redux.js.org/introduction/core-concepts), encapsulating much of the front-end business logic. This choice proved to be huge time saver, since it enabled us to move to a new framework, while preserving all the code within Redux; reducing our workload significantly while migrating.

My advice is to pick framework agnostic tools where you can, and write your application in a modular way, which will make refactoring and migrating stacks much simpler in the future.

---

### Testing

Finally, testing enables us to refactor with confidence. There's a high chance that your code will break during a migration. It is subject to continuous and intense change. Besides, developers still need to familiarize themselves with the technology and the new workflow, especially in the beginning, which is likely to result in bugs. In order to catch bugs during the migration and / or have your business crucial paths working as expected, it is helpful to have end-to-end (e2e) tests\* in place before you start.

> _"End-to-end testing is a technique used to test whether the flow of an application right from start to finish is behaving as expected. The purpose of performing end-to-end testing is to identify system dependencies and to ensure that the data integrity is maintained between various system components and systems."_

The benefits of having e2e testing is two-fold:

1. it reinforces existing code and guards for breaking changes
2. it enables future migrations by providing safety and documentation

Thus, even when resources are scarce, you should identify business crucial flows and cover them with tests first in order to safely migrate.

---

### Loss of specs

Hopefully, much of what we've discussed can help you tackle a migration and give you more confidence. Maybe it can even help you convince your PO to hop on board. Now that we've learned the traps of success, what are the pitfalls?

<div class="center-image">
  <img src="./specs.png" alt="austin powers meme on working without specifications">
</div>

The big challenge, not to be overlooked, is regarding the specification of your product.

Legacy codebases tend to have lived a full life of active development; accumulating many features, code changes and bug fixes along the way. Because of this, it is difficult to decipher the expected behaviour of an app and all of the edge cases. Reading the code carefully could help, but knowing the exact intent is still a challenge.

To solve this issue developers need to work closely together with the domain expert, regularly test the progress, not missing any of the existing functionality while moving towards a new technology.

---

### What's next?

As is the case with perishable goods, code bases too have an expiration date. When software ages, code becomes more and more complex. New features take longer to implement and it becomes harder to find the right people to work with a "legacy" app.

At this point migrating the application to a more modern technology stack should be considered.

We've discussed 7 tips to take into account when starting this journey:

- **Buy in** — Convince stakeholders
- **Feasibility** — Test your approach
- **Increments** — Migrate incrementally while keeping the app working
- **Prioritise** — Plan which areas to tackle first
- **Focus** — Avoid distractions
- **Decoupling** — Decouple to avoid more future work
- **Testing** — Refactor with confidence

The major challenge during this process is the loss of specifications. Work closely together with a domain expert, testing the progress regularly and often, in order to avoid losing functionality.

Do you have anything to add to this? Feel free to send me an <a href="mailto:tjinauyeung@gmail.com">email</a> or twitter me at [@tjinauyeung](https://twitter.com/tjinauyeung). I'm more than happy to hear your thoughts!

In my next article I'd like to explain in more detail how we used these tips to migrate a Polymer based application to the newer React based tech stack.

Stay tuned!
