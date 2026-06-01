# Create Feature

Use this command after the feature plan is approved.

## Goal

Implement the approved feature safely and predictably.

Focus on:

* correctness
* readability
* maintainability
* consistency with existing project patterns

Do not redesign the feature.

Do not expand scope without approval.

## Input

Assume an approved feature plan already exists.

Use the approved:

* Business Goal
* User Stories
* Acceptance Criteria
* High-Level Design
* Test Strategy
 

as the source of truth.

## Instructions

1. Follow `CLAUDE.md`.
2. Follow the approved feature plan.
3. Keep the implementation focused on the approved scope.
4. Use existing project conventions.
5. Prefer simple and readable code.
6. Reuse existing patterns when possible.
7. Add architecture only when it has a clear responsibility.
8. Keep files cohesive and responsibilities clear.
9. If requirements are unclear, stop and ask.
10. If scope changes significantly, stop and ask for approval.
11. Update or create tests when required by the approved Test Strategy.

## Architecture Guidance

Use the simplest architecture that satisfies the approved design.

### Small Client Feature

UI
↓
Local State


### API Feature

UI
↓
API Route
↓
Business Logic


### Business Logic Feature

UI
↓
API Route
↓
Service


### Persistence Feature

UI
↓
API Route
↓
Service
↓
Repository
↓
Database


### Rules

* Keep `page.tsx` and `route.ts` thin when logic grows.
* Do not create `service.ts` unless business logic exists.
* Do not create `repository.ts` unless data access exists.
* Prefer colocating small UI logic near components.
* Prefer `src/features/` for feature-specific code.
* Prefer `src/lib/` for shared infrastructure and utilities.
* Keep patterns consistent once introduced.
* Avoid unnecessary abstractions.

## Before Editing

Provide:

### Scope Verification

Confirm:

* Business Goal
* User Stories
* Acceptance Criteria

being implemented.

### Files To Create

List:

* file
* purpose

### Files To Update

List:

* file
* purpose

### Files To Remove

If any:

* file
* reason

Wait for approval if changes significantly differ from the approved plan.

## During Editing

Stay aligned with the approved plan.

Do not add:

* unrelated features
* unrelated refactors
* unrelated styling changes
* new APIs
* new DB changes
* authentication changes
* infrastructure changes

unless they are part of the approved scope.

## After Editing

Provide:

### Implementation Summary

Explain:

* what changed
* why it changed

### Acceptance Criteria Verification

For each acceptance criterion:

* implemented?
* where?

### Files Changed

For each file:

* purpose
* key changes

### Test Updates

Explain:

* tests added
* tests updated
* tests intentionally postponed

### Verification

#### Automated Tests

Commands to run.

Examples:

```bash
npm run lint
npm run test
npm run test:e2e
```

Only include relevant commands.

#### Manual Sanity Test

Provide:

* who runs it
* when it runs
* steps (how to run it)
* expected result

### Suggested Git Actions

If Git actions are not performed automatically:

Provide:

* Git commands
* commit message

Only for meaningful milestones.

### Learning Summary

Required for learning projects.

Explain:

#### Feature Understanding

* business goal
* user stories
* acceptance criteria

#### Application Flow

Explain:

1. User action
2. Frontend file and method
3. API file and method (if relevant)
4. Service file and method (if relevant)
5. Repository file and method (if relevant)
6. DB tables etc
7. UI update

Use actual file names , method names, table names (if any).

#### Next.js Concepts

Explain any relevant concepts used:

* App Router
* page.tsx
* layout.tsx
* client component
* server component
* route handler
* static asset
* API route

#### Claude Workflow

Explain:

* which command was used
* what was implemented
* what remains

