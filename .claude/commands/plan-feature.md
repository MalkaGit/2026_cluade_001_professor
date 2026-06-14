<!-- 4b -->
# Plan Feature

Use this command before implementing a feature.

Do NOT use for:

* tiny isolated bug fixes
* trivial text changes
* obvious low-risk tweaks

---

# Goal

Create the INITIAL implementation direction for the feature.

Focus on:

* business/user value
* visible user behavior
* implementation feasibility
* practical architecture
* meaningful risks
* fast verification

Prefer:

* concise planning
* practical engineering
* visible progress
* implementation-oriented thinking
* existing project patterns

Avoid:

* overengineering
* speculative architecture
* giant design discussions
* verbose planning
* unnecessary process

Do NOT:

* edit files
* implement code
* create full QA documentation
* redesign unrelated systems

Wait for approval before implementation.

---

# Documentation Persistence

Follow documentation persistence and naming rules defined in:

```text
.claude/CLAUDE.md
```

Claude MUST immediately create or update the appropriate markdown documentation files during this workflow step.

Documentation files become part of the CURRENT SOURCE OF TRUTH for the workflow.

---

# Inputs

Prefer:

* small clear requirements
* one milestone/slice at a time
* explicit scope
* explicit out-of-scope items
* practical implementation goals

Avoid giant multi-feature planning when possible.

---

# Feature Complexity

Classify feature complexity BEFORE planning.

Complexity determines:

* planning depth
* output size
* architecture detail
* testing discussion
* operational awareness

---

## Tiny Feature

Examples:

* CSS tweak
* text change
* tiny validation
* small UI adjustment
* tiny bug fix

Characteristics:

* isolated change
* low regression risk
* minimal architecture impact
* straightforward verification

Expected behavior:

* SHORT output
* implementation-oriented
* minimal architecture discussion
* lightweight testing ideas

Avoid unnecessary sections.

Avoid mini design documents.

---

## Medium Feature

Examples:

* CRUD workflow
* form workflow
* API integration
* frontend/backend feature
* stateful component flow

Characteristics:

* multiple moving parts
* moderate UX impact
* moderate regression risk

Expected behavior:

* balanced engineering detail
* practical architecture direction
* meaningful verification thinking

---

## Large / High-Risk Feature

Examples:

* authentication
* payments
* migrations
* distributed systems
* major persistence changes
* multi-page workflows

Characteristics:

* broad system impact
* operational/runtime implications
* higher regression risk
* integration complexity

Expected behavior:

* deeper engineering analysis
* operational awareness
* stronger regression thinking
* rollout/risk awareness

Still avoid speculative overengineering.

---

# Core Planning Rules

Given a feature request:

1. Restate the feature goal
2. Classify feature complexity
3. Generate output proportional to complexity
4. Define scope
5. Define out-of-scope items
6. Define UX/runtime flow
7. Define acceptance criteria
8. Reuse existing project patterns first
9. Introduce architecture only when justified
10. Identify meaningful risks/open questions
11. Propose INITIAL testing ideas
12. Ask clarification questions if required
13. Do NOT implement
14. Wait for approval

Prefer implementation-oriented planning over theoretical design discussion.

Prefer plans that lead to visible working software quickly.

---

# Existing Project Patterns

Strongly prefer extending EXISTING:

* folder structure
* architecture
* naming conventions
* testing patterns
* runtime patterns

Avoid introducing new patterns unless clearly justified.

Team consistency is more important than personal preference.

---

# Stop Conditions

Stop and ask when:

* requirements are unclear
* product behavior is ambiguous
* scope expands significantly
* architecture must significantly change
* authentication/security concerns emerge
* persistence behavior is unclear
* deployment/runtime assumptions are unclear
* implementation feasibility is uncertain

Do NOT invent critical business behavior.

---

# Planning Principles

Prefer:

* incremental delivery
* visible progress
* practical engineering
* maintainable simplicity
* focused scope
* high-signal communication
* smallest useful solution

Avoid:

* architecture inflation
* speculative flexibility
* giant plans
* process-heavy planning
* verbose documentation
* premature abstraction

Scale process according to actual feature complexity and risk.

---

# Architecture Guidance

Use the SIMPLEST architecture that safely solves the problem.

Prefer:

* localized complexity
* gradual architecture evolution
* focused responsibilities
* maintainable simplicity

Avoid:

* unnecessary layers
* speculative scalability
* premature abstraction
* architecture-first development

---

## Simple UI Feature

```text
UI
↓
Local State
```

Use when:

* state is local
* logic is simple
* persistence is not needed

Avoid unnecessary layers.

---

## API Feature

```text
UI
↓
API Route
↓
Business Logic
```

Use when:

* backend behavior exists
* validation/business rules matter
* API behavior matters

---

## Persistence Feature

```text
UI
↓
API Route
↓
Service
↓
Repository
↓
Database
```

Use ONLY when persistence/business complexity becomes meaningful.

Do NOT introduce layers prematurely.

---

# Runtime / Operational Awareness

Consider runtime/deployment behavior ONLY when relevant.

Examples:

* client/server boundaries
* persistence behavior
* async/background processing
* deployment/runtime implications
* caching/state synchronization
* concurrency behavior
* authentication/session handling

Avoid unnecessary operational complexity.

---

# Async / Background Processing

Introduce async/background processing only when justified.

Examples:

### Database-backed Worker

```text
Producer writes pending tasks to database.
Worker polls/reads tasks and processes them asynchronously.
```

### Queue-based Processing

```text
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

# Output Rules

Output MUST scale according to feature complexity.

Do NOT generate identical verbosity for all features.

Prefer concise high-signal planning.

Avoid:

* giant outputs
* architecture essays
* repetitive prose
* speculative future-system design

Prefer plans understandable in a few minutes.

---

# Tiny Feature Output

Required sections:

* Feature Summary
* Goal
* Scope
* UX Flow
* Acceptance Criteria
* Minimal Testing Ideas
* Next Step

Optional only if truly relevant:

* Architecture
* Risks
* Files likely to change

Expected output:

* short
* practical
* implementation-focused

---

# Medium Feature Output

Required sections:

* Feature Summary
* Goal
* Scope
* Out Of Scope
* UX Flow
* Acceptance Criteria
* High-Level Architecture
* Risks / Open Questions
* Initial Testing Ideas
* Next Step

Expected output:

* balanced detail
* maintainable implementation focus
* practical engineering direction

---

# Large / High-Risk Feature Output

Required sections:

* Feature Summary
* Goal
* Scope
* Out Of Scope
* UX Flow
* Acceptance Criteria
* High-Level Architecture
* Integration Boundaries
* Persistence Considerations
* Deployment / Rollout Considerations
* Risks / Open Questions
* Initial Testing Ideas
* Regression Concerns
* Operational Concerns
* Next Step

Expected output:

* deeper engineering analysis
* operational awareness
* broader regression thinking

Avoid speculative overengineering.

---

# Section Guidance

## UX Flow

Prefer:

* runtime behavior
* user-visible behavior
* important interactions
* important state transitions

Avoid low-value implementation detail.

---

## Acceptance Criteria

Prefer:

* measurable user-visible behavior
* meaningful workflows
* important edge cases

Avoid implementation detail.

---

## High-Level Architecture

Only include meaningful architecture.

Examples:

### Frontend

* pages
* components
* state ownership
* responsibilities

### Backend / API

* API routes
* validation direction
* integration boundaries

### Persistence

* storage direction
* data ownership

Keep proportional to actual complexity.

---

## Risks / Open Questions

List only meaningful:

* unclear requirements
* integration concerns
* runtime concerns
* persistence concerns
* operational concerns

Avoid speculative fear lists.

---

## Initial Testing Ideas

Keep proportional to feature complexity.

Examples:

* manual sanity ideas
* regression considerations
* possible unit-test targets
* Playwright relevance
* edge-case validation ideas

This is NOT:

* full QA documentation
* full regression matrix
* final testing truth

Testing strategy evolves later during:

```text
/add-tests
```

---

# Learning Notes

For learning projects, explain briefly:

* important architecture decisions
* why patterns were chosen
* why abstractions were avoided

Keep concise and practical.

---

# Recommended Next Step

Recommend one of:

* approve plan
* clarify requirements
* split into smaller milestone
* proceed to `/create-feature`
* revisit architecture assumptions

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
* practical engineering
* iterative delivery
* maintainable simplicity
* smallest useful solution

Avoid:

* process-heavy planning
* speculative scaling
* architecture perfectionism
* unnecessary complexity
