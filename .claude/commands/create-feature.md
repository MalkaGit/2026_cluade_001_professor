<!-- 4c -->
# Create Feature

Use this command after the feature plan is approved.

Do NOT use for:

* tiny isolated bug fixes
* trivial text changes
* obvious low-risk tweaks

---

# Goal

Implement the approved feature.

Focus on:

* visible working software
* maintainable implementation
* practical engineering
* incremental delivery
* implementation correctness
* preserving existing behavior

Prefer:

* focused changes
* simple readable code
* existing project patterns
* incremental implementation
* smallest useful solution
* visible progress

Avoid:

* overengineering
* speculative abstractions
* architecture inflation
* giant refactors
* unnecessary framework patterns
* verbose implementation discussion

Prefer implementation momentum over architectural perfection.

Do NOT:

* redesign unrelated systems
* silently expand scope
* introduce unnecessary abstractions
* add unrelated cleanup/refactors

---

# Documentation Persistence

Follow documentation persistence and naming rules defined in:

```text
.claude/CLAUDE.md
```

Claude MUST immediately create or update the appropriate markdown documentation files during this workflow step.

Documentation files become part of the CURRENT SOURCE OF TRUTH for the workflow.

---

# Input

Assume an approved `/plan-feature` already exists.

Use the approved:

* goal
* scope
* UX flow
* acceptance criteria
* architecture direction

as the source of truth.

---

# Feature Complexity

Classify feature complexity BEFORE implementation.

Implementation depth, architecture, abstraction level, verification effort, and output verbosity MUST scale according to:

* feature complexity
* regression risk
* operational risk
* integration complexity
* persistence/runtime impact

---

## Tiny Feature

Examples:

* text change
* CSS tweak
* tiny validation
* isolated UI adjustment
* tiny bug fix

Expected behavior:

* direct implementation
* localized/simple changes
* concise output
* lightweight verification

Prefer:

* simple readable code
* existing patterns
* local implementation

Avoid:

* unnecessary abstractions
* unnecessary hooks/utilities
* repository/service layers
* architecture expansion
* mini design discussions

---

## Medium Feature

Examples:

* CRUD workflow
* reusable component logic
* API integration
* frontend/backend workflow
* stateful component flow

Expected behavior:

* balanced architecture
* maintainable implementation
* clear responsibility boundaries
* practical abstractions where useful

Prefer:

* cohesive organization
* readable flow
* explicit logic
* existing architectural conventions

---

## Large / High-Risk Feature

Examples:

* authentication
* payments
* persistence-heavy features
* migrations
* major refactors
* distributed systems

Expected behavior:

* stronger architecture boundaries
* operational awareness
* integration awareness
* stronger regression awareness
* rollout/runtime thinking

Still avoid speculative overengineering.

---

# Core Implementation Rules

1. Follow `.claude/CLAUDE.md`
2. Follow the approved feature plan
3. Stay within approved scope
4. Reuse existing project patterns first
5. Prefer modifying existing patterns over inventing new ones
6. Prefer simple readable code
7. Keep responsibilities cohesive
8. Add abstractions only when justified
9. Keep implementation proportional to feature complexity
10. Minimize unrelated changes
11. Preserve stable existing behavior unless intentionally changing it
12. Keep implementation aligned with acceptance criteria
13. Stop and ask when assumptions become unclear

Prefer implementation-oriented execution over theoretical architecture work.

Prefer visible working progress quickly.

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
* implementation differs significantly from approved plan
* hidden complexity appears
* architecture must significantly change
* persistence/authentication concerns emerge unexpectedly
* major refactoring becomes necessary
* runtime/deployment assumptions are unclear
* infrastructure/runtime changes are required
* the feature expands significantly in scope

Do NOT invent critical business behavior.

---

# Architecture Guidance

Use the SIMPLEST architecture that safely solves the problem.

Prefer:

* localized complexity
* maintainable simplicity
* focused responsibilities
* gradual architecture evolution

Avoid:

* speculative scalability
* unnecessary layers
* architecture-first development
* abstraction inflation

---

## Small Client Feature

```text
UI
↓
Local State
```

Use when:

* logic is simple
* state is local
* persistence is unnecessary

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

Do NOT introduce repository/service layers prematurely.

---

# Architecture Rules

* Keep `page.tsx` and `route.ts` thin when logic grows
* Create `service.ts` only when meaningful business logic exists
* Create `repository.ts` only when persistence separation is justified
* Prefer colocating small UI logic near components
* Prefer `src/features/` for feature-specific code
* Prefer `src/lib/` for shared utilities/infrastructure
* Prefer extending existing patterns over creating new ones
* Avoid speculative abstractions
* Prefer explicit readable flow over “clever” architecture

---

# Runtime / Operational Awareness

Consider runtime/deployment behavior ONLY when relevant.

Examples:

* client/server boundaries
* persistence behavior
* authentication/session handling
* deployment/runtime behavior
* API contract behavior
* concurrency/async concerns
* Railway/Vercel/runtime implications

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

# Before Editing

Provide:

## Scope Verification

Confirm:

* goal
* scope
* acceptance criteria

being implemented.

---

## Files To Create

For each file:

* file path
* purpose

Keep concise.

Avoid speculative files.

---

## Files To Update

For each file:

* file path
* purpose

---

## Files To Remove

If any:

* file path
* reason

Wait for approval if implementation significantly differs from the approved plan.

---

# During Editing

Stay aligned with approved scope.

Do NOT add:

* unrelated features
* unrelated refactors
* unrelated styling changes
* unrelated APIs
* unrelated DB changes
* infrastructure rewrites
* dependency changes without justification

unless explicitly approved.

Prefer focused implementation.

---

# Implementation Principles

Prefer:

* smallest useful implementation
* readable flow
* explicit logic
* cohesive responsibilities
* low cognitive overhead

Avoid:

* premature optimization
* speculative abstractions
* unnecessary indirection
* over-generalization
* giant files/functions

---

# Output Rules

Output MUST scale according to feature complexity.

Do NOT generate identical verbosity for all features.

Prefer concise high-signal implementation summaries.

Avoid:

* giant outputs
* architecture essays
* repetitive prose
* speculative future-system discussion

Prefer implementation summaries understandable in a few minutes.

---

# Tiny Feature Output

Required sections:

* Scope Verification
* Files Changed
* Implementation Summary
* Acceptance Criteria Verification
* Verification Suggestions
* Summary

Expected output:

* concise
* practical
* implementation-focused

Avoid deep architecture discussion.

---

# Medium Feature Output

Required sections:

* Scope Verification
* Files To Create / Update
* Implementation Summary
* Acceptance Criteria Verification
* Files Changed
* Testing Notes
* Verification Suggestions
* Manual Sanity Suggestions
* Summary

Expected output:

* balanced engineering detail
* maintainable implementation clarity

---

# Large / High-Risk Feature Output

Required sections:

* Scope Verification
* Files To Create / Update / Remove
* Architecture Notes
* Integration Considerations
* Runtime / Operational Considerations
* Implementation Summary
* Acceptance Criteria Verification
* Files Changed
* Risks / Follow-Ups
* Testing Notes
* Verification Suggestions
* Manual Sanity Suggestions
* Summary

Expected output:

* stronger engineering awareness
* operational clarity
* broader system understanding

Avoid speculative overengineering.

---

# After Editing

Provide:

## Implementation Summary

Explain:

* what changed
* why

Keep concise and behavior-focused.

---

## Acceptance Criteria Verification

For each acceptance criterion:

* implemented?
* where?

---

## Files Changed

For each file:

* purpose
* key changes

Focus on meaningful changes only.

Avoid low-value noise.

---

# Testing Notes

Explain briefly:

* tests added
* tests updated
* tests intentionally postponed
* intentionally uncovered risks if relevant

Do NOT create the full testing truth here.

Testing ownership belongs later to:

```text
/add-tests
```

---

# Verification Suggestions

Provide only relevant commands.

Examples:

```bash
npm run build
npm run lint
npm run test
npm run dev
```

Only include commands relevant to the current feature.

---

# Manual Sanity Suggestions

Provide lightweight sanity ideas only.

Prefer explicit user actions.

Examples:

* open the page
* click submit
* verify validation message
* verify successful save
* verify responsive behavior
* verify API error handling

Do NOT provide full QA documentation.

---

# Suggested Git Actions

Only for meaningful milestones.

Examples:

```bash
git status
git add .
git commit -m "<feature>: description"
git push origin <feature-branch>
```

Tiny features may only require a focused commit.

Avoid unnecessary Git ceremony.

---

# Learning Summary

For learning projects only.

Keep concise and practical.

---

## Feature Understanding

Explain briefly:

* goal
* scope
* acceptance criteria

---

## Application Flow

Explain briefly:

1. user action
2. frontend flow
3. API flow (if relevant)
4. service flow (if relevant)
5. persistence flow (if relevant)
6. UI update

Use actual:

* file names
* method names
* table names (if relevant)

---

## Relevant Concepts

Only include concepts actually relevant to the feature.

Examples:

* App Router
* route handler
* client component
* service layer
* repository pattern
* state management

---

## Claude Workflow

Explain briefly:

* command used
* what was implemented
* what remains
* whether `/add-tests` or `/review` is recommended next

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
* maintainable simplicity
* practical engineering
* smallest useful implementation
* focused changes

Avoid:

* architecture perfectionism
* speculative scaling
* unnecessary complexity
* process-heavy implementation
