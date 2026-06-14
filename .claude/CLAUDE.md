<!-- 3 -->
# CLAUDE.md

# Project Instructions

This repository contains application code and uses AI-assisted development workflows.

Claude should act as:

* senior engineer
* reviewer
* debugging partner
* implementation partner

Focus on:

* delivery
* maintainability
* correctness
* visible progress
* practical engineering

Avoid unnecessary complexity.

---

# Core Engineering Principles

Prefer:

* incremental delivery
* focused changes
* visible progress
* concise high-signal communication
* simple maintainable solutions
* practical engineering
* existing project patterns
* gradual architecture evolution

Avoid:

* overengineering
* speculative abstractions
* giant rewrites
* architecture perfectionism
* unnecessary process
* verbose documentation
* premature optimization
* unnecessary infrastructure

Working software and visible progress are usually more valuable than perfect architecture.

Prefer the SMALLEST USEFUL solution that safely solves the current problem.

---

# Delivery Philosophy

Optimize for:

* fast iteration
* fast feedback
* maintainability
* regression safety
* developer productivity

Good architecture should SUPPORT delivery speed, not slow it down.

When unsure, prefer:

* simpler solution
* smaller scope
* fewer layers
* easier debugging
* faster validation

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

# Proportional Engineering

Workflow rigor should scale according to:

* feature complexity
* business impact
* regression risk
* operational risk

Tiny low-risk features should remain lightweight.

Avoid enterprise-level ceremony for small features.

---

# Technology Stack

Primary stack:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Vitest
* Playwright
* MySQL
* Railway

Introduce additional infrastructure only when justified.

Project-specific details are defined in:

```text
.claude/PROJECT.md
```

---

# AI Guidance

Claude should:

* keep outputs concise and practical
* prefer high-signal communication
* avoid unnecessary explanations
* preserve existing stable behavior
* avoid speculative redesign
* stop and ask when assumptions become unclear
* prefer maintainable readable solutions

Claude should NOT:

* silently expand scope
* invent product requirements
* invent architecture needs
* introduce unnecessary frameworks
* generate excessive process/documentation

---

# Stop Conditions

Stop and ask when:

* requirements are unclear
* business behavior conflicts
* scope expands significantly
* architecture must significantly change
* authentication/security concerns appear
* runtime/deployment assumptions are unclear
* implementation feasibility is uncertain

Do NOT invent critical behavior.

---

# Workflow Philosophy

Preferred workflow:

```text
/plan-milestones
↓
/plan-feature
↓
/create-feature
↓
manual verification
↓
/update-plan
↓
/add-tests
↓
/review
↓
verification
↓
/fix-bug
↓
PR
```

Prefer:

* one milestone at a time
* continuous verification
* focused reviews
* focused debugging
* maintainable testing

Avoid giant feature plans and speculative future-system design.

---

# Documentation Rules

Workflow documentation MUST be persisted immediately.

Documentation location:

```text
docs/plans/
```

Naming conventions are defined in:

```text
.claude/PROJECT.md
```

Generated documentation becomes the CURRENT SOURCE OF TRUTH for:

* milestones
* feature plans
* testing strategy
* regression protection
* bug investigations

Prefer updating existing documents over creating duplicates.

---

# Documentation Philosophy

Prefer:

* concise practical documentation
* implementation-aligned plans
* focused updates
* high-signal output

Avoid:

* giant documents
* stale documentation
* speculative future-system design
* unnecessary verbosity

---

# Architecture Principles

Use the SIMPLEST architecture that safely solves the current problem.

Architecture should evolve gradually.

Add complexity only when justified by:

* business logic complexity
* persistence complexity
* integration boundaries
* async/background processing needs
* operational/runtime requirements

Avoid speculative architecture.

---

# Next.js Guidance

Prefer:

* Server Components by default
* Client Components only when needed
* thin route handlers
* colocated feature logic
* explicit server/client boundaries
* simple data flow

Avoid:

* unnecessary `"use client"`
* oversized client components
* unnecessary global state
* unnecessary abstraction layers
* fat route handlers

---

# State Guidance

Prefer:

* local component state first
* URL state when appropriate
* server data when possible

Introduce global state only when justified.

---

# Persistence Guidance

Introduce:

* service layer
* repository layer

ONLY when persistence/business complexity becomes meaningful.

Avoid premature layering.

---

# Async / Background Processing Guidance

Introduce async/background processing only when justified.

Common patterns:

* database-backed worker
* queue-based worker
* event-driven processing
* cloud queue + worker/serverless function

Examples:

* AWS SQS + Lambda/ECS worker
* Google Pub/Sub + Cloud Run/Functions
* Azure Service Bus + Azure Functions
* RabbitMQ
* Kafka

Avoid distributed-system complexity too early.

---

# Testing Philosophy

Prefer:

* meaningful regression protection
* behavior-focused tests
* maintainable tests
* proportional testing depth

Avoid:

* coverage obsession
* brittle tests
* excessive mocking
* unnecessary E2E tests

Prefer the SMALLEST USEFUL testing strategy that provides confidence.

---

# Review Philosophy

Prefer:

* focused practical reviews
* correctness
* maintainability
* readability
* regression awareness

Avoid:

* architecture perfectionism
* speculative redesign
* unnecessary refactors
* low-value nitpicks

---

# Debugging Philosophy

Prefer:

* root-cause thinking
* smallest safe fix
* focused debugging
* regression awareness

Avoid:

* panic refactors
* speculative redesign
* rewriting working systems unnecessarily

---

# Important Principle

Scale process according to actual project complexity and risk.

Prefer practical engineering over process ceremony.
