<!-- 4a -->
# Plan Milestones

Use this command before `/plan-feature` when the product is too large for a single focused feature plan.

Do NOT use for:

* tiny features
* isolated bug fixes
* small UI changes
* simple standalone features

---

# Goal

Split the product into small, focused, incremental milestones.

Optimize for:

* visible progress
* incremental delivery
* controlled complexity
* practical verification
* gradual architecture evolution
* fast feedback loops

Prefer:

* small vertical slices
* independently verifiable milestones
* one major responsibility per milestone
* shortest useful path to working software

Avoid:

* giant milestone plans
* speculative future architecture
* infrastructure-first development
* milestone over-fragmentation
* technical-purity milestones with no practical value

Prefer milestones that produce visible user or developer value quickly.

---

# Documentation Persistence

Follow documentation persistence and naming rules defined in:

```text id="8pk8ur"
.claude/CLAUDE.md
```

Claude MUST immediately create or update the appropriate markdown documentation files during this workflow step.

---

# Inputs

Provide:

* product idea
* major workflows
* business goals
* known constraints
* major technical concerns if known

Prefer lightweight product direction only.

Avoid excessive implementation detail at this stage.

---

# Responsibilities

`/plan-milestones` should:

* split the product into milestones
* define milestone goals
* define milestone scope
* define milestone order
* identify milestone dependencies
* identify when additional complexity becomes justified

This command defines:

* product evolution strategy

NOT:

* detailed implementation
* exact file changes
* detailed APIs
* detailed database schema
* detailed testing strategy

Those belong later to:

```text id="65krr0"
/plan-feature
```

---

# Milestone Planning Principles

Each milestone should:

* have clear scope
* remain reasonably small
* provide visible progress
* be independently reviewable
* be independently verifiable
* be realistically implementable

Prefer:

* incremental complexity
* simplest working solution first
* practical learning progression
* focused milestones
* existing project patterns

Avoid:

* overengineering
* speculative scalability
* giant infrastructure milestones
* unnecessary abstractions
* architecture-first development

Avoid creating milestones whose only value is technical purity.

---

# Architecture Evolution

Architecture should evolve GRADUALLY.

Introduce complexity only when justified by:

* business logic complexity
* persistence needs
* integration boundaries
* async/background processing needs
* operational/runtime requirements

Prefer:

* simple architecture first
* incremental layering
* localized complexity
* natural abstraction evolution

Avoid:

* designing the final system too early
* premature repository/service layers
* premature async/distributed infrastructure
* speculative architecture

---

# Typical Milestone Examples

Examples:

* Static UI
* Frontend behavior
* Backend API
* Client-server integration
* Authentication
* Persistence
* Async/background processing
* Admin features
* Reporting

Not every project requires all milestone types.

Only introduce milestones that provide meaningful value.

---

# Async / Background Processing Examples

Examples:

### Database-backed Worker

```text id="w1k4r7"
Producer writes pending tasks to database.
Worker polls/reads tasks and processes them asynchronously.
```

### Queue-based Processing

```text id="g0c6bn"
Producer publishes messages to queue/topic.
Workers consume messages asynchronously.
```

Examples:

* AWS SQS + Lambda/ECS worker
* Google Pub/Sub + Cloud Run/Functions
* Azure Service Bus + Azure Functions
* RabbitMQ
* Kafka

Avoid distributed-system complexity too early.

---

# Stop Conditions

Stop and ask when:

* business goals are unclear
* milestone boundaries are ambiguous
* architecture assumptions become speculative
* persistence/authentication requirements are unclear
* operational/runtime assumptions are unclear
* milestones become excessively large
* implementation feasibility is uncertain

Do NOT invent speculative product requirements.

---

# Output Rules

Keep output concise and practical.

Prefer milestone plans that are understandable in a few minutes.

Avoid:

* giant milestone trees
* excessive architecture discussion
* speculative scalability planning
* unnecessary future-system design
* verbose planning prose

Prefer:

* focused milestone plans
* visible progress
* realistic implementation progression
* demonstrable milestones
* incremental complexity

---

# Milestone Sizing Guidance

Good milestones should:

* have one major goal
* produce visible progress
* remain independently understandable
* remain independently verifiable

If a milestone becomes too large:

* split it

If milestones become too tiny/artificial:

* merge them

Prefer practical milestone sizing over rigid process.

---

# Output Format

## Product Summary

Short description of the product.

Keep concise.

---

## Product Goals

Describe:

* primary business/user goals
* important workflows
* key product value

Keep concise.

---

## Recommended Milestone Strategy

Explain briefly:

* why milestone planning is useful here
* how complexity evolves gradually

---

## Milestone List

For each milestone:

### Milestone Name

### Goal

### Scope

### Out Of Scope

### Dependencies

### Verification Goal

What should be demonstrable after this milestone?

### Architecture Evolution

What new complexity becomes justified here?

Keep concise and practical.

---

## Recommended Milestone Order

Explain briefly:

* why this order is recommended
* how complexity evolves gradually
* how risk stays controlled
* how visible progress remains continuous

---

## Risks / Open Questions

List only meaningful:

* unclear workflows
* integration concerns
* persistence/authentication concerns
* operational/runtime concerns
* milestone sizing concerns

Avoid speculative fear lists.

---

## Suggested Next Step

After milestone approval:

```text id="7x8htq"
/plan-feature
```

---

## Context Used

Examples:

* `.claude/CLAUDE.md`
* `.claude/AGENTS.md`
* `.claude/PROJECT.md`

---

# Important Principle

Prefer:

* visible progress
* iterative delivery
* continuous validation
* incremental architecture
* practical engineering
* simplest useful solution first

Avoid:

* milestone bureaucracy
* architecture inflation
* speculative scaling
* unnecessary infrastructure
* process-heavy planning
