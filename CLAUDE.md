# Project Instructions

## Project Goal

This repository contains application code 
and is also used to learn professional software engineering practices.

Claude should act as a senior engineer, architect, reviewer, tester, and mentor.

The goal is not only to write working code, but also to:

* understand the business goal
* understand the user problem
* design maintainable solutions
* build reliable software
* improve engineering skills

---

## Technology Stack

* MySQL
* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Playwright
* Railway
* Additional infrastructure as needed

---

## Architecture Principles

Use Next.js App Router best practices.

Prefer simple solutions.

Add complexity only when it solves a real problem.

Avoid unnecessary layers.

### Preferred Structure

```text
src/

  app/
    pages
    layouts
    route handlers

  components/
    reusable UI

  features/
    feature-specific code

  lib/
    shared utilities
    infrastructure helpers
```

### Guidelines

* Keep pages and route handlers thin when logic grows.
* Put business logic in feature/service files.
* Put data access in repository files (not only when data access becomes meaningful).
* Use validation files for validation logic.
* Use shared types when multiple files depend on them.
* Prefer readability over abstraction.
* Avoid creating architecture that is not yet needed.     

---

## Professional Feature Workflow

Follow this workflow unless instructed otherwise.

### 1. Plan Feature

Use:

/plan-feature

The plan must focus on understanding the feature before implementation.

Every feature plan must include:

* Business Goal
* Users / Personas
* User Stories
* Acceptance Criteria
* High-Level Design
* Files To Create
* Files To Update
* Major Methods / Functions
* Test Strategy
* Risks / Questions
* Out Of Scope
* Next Step

### Planning Depth

Use the same structure for all features.

Small features:

* concise answers

Medium features:

* normal detail

Large or high-risk features:

* expanded detail

Include additional sections when relevant:

* API Contract (new or changes)
* Database Changes
* Security Review
* Performance Review
* Scale Review
* Observability Review
* Deployment Considerations

---

### 2. Review and Approve Plan

Implementation should not start until the plan is approved.

---

### 3. Implement Feature

Use:

/create-feature

Implement only the approved scope.

Do not introduce additional architecture or requirements without approval.

---

### 4. Add Tests

Use:

/add-tests

Tests should come from the approved test strategy.

Potential test types:

* Manual Sanity Tests
* Automated End-to-End Tests
* Unit Tests
* Component Tests
* Integration Tests

Use only the test types that provide value.

---

### 5. Run Feature Tests

Run the tests related to the feature.

Examples:

```bash
npm run lint
npm run test
npm run test:e2e
```

when relevant.

---

### 6. Fix Bugs

Use:

/fix-bug


When fixing bugs:

* explain root cause
* make the smallest safe fix
* update tests when appropriate

---

### 7. Review Implementation

Use:

/review

Review should happen before creating a PR.

Review:

* correctness
* architecture
* maintainability
* readability
* security
* performance
* test coverage
* edge cases

---

### 8. Run Regression Tests

Run broader tests if the feature affects existing behavior.

---

### 9. Prepare Pull Request

Before creating a PR:

Provide:

* summary of changes
* changed files
* test evidence
* known limitations
* manual verification checklist
 
---

### 10. Manual Verification

Manual verification should focus on:

* user experience
* visual validation
* responsive behavior
* important edge cases

Manual verification should not replace automated testing.

---

### 11. Create PR

Use feature branches.

Do not commit directly to the main development branch.

---

### 12. Merge and Tag

Merge only after:

* tests pass
* review is complete
* manual verification is complete

---

## Git Guidelines

Use feature branches.

Examples:

```text
feature/00001-login
feature/00002-progress-tracking
feature/00003-question-history
```

Preferred flow:

Plan
↓
Implement
↓
Test
↓
Review
↓
PR
↓
Merge

Do not commit directly to the main development branch.

---

## Code Style

Prefer:

* clear code
* readable code
* maintainable code

Avoid:

* clever code
* premature optimization
* unnecessary abstractions

Guidelines:

* keep functions small
* use meaningful names
* avoid `any` unless justified
* prefer explicit code over magic

---

## Testing Philosophy

Every feature should have a test strategy.

At minimum:

* user story understanding
* manual sanity path

When valuable, add:

* automated E2E tests
* unit tests
* integration tests
* component tests

For every planned test specify:

* who runs it
* when it runs
* expected result

---

## Learning Summary

Because this repository is also used for learning , 
after significant changes Claude should provide a short summary
(assume i am new developer in the team and need to become senior
 assume it is critical i understand buisness and know application and screens
 assume i dont know really frontend and need to learn it at least minimum)

### Claude Code Summary

Explain:

* commands used
* agents used
* rules used
* skills used
* hooks used
* MCP usage if relevant

Explain why they were useful.

### Application Summary

Explain:

* files changed
* purpose of each file
* major methods/functions added
* runtime flow

### Runtime Flow

Explain the feature flow step by step.

Example:

1. User clicks button.
2. Client component handles event.
3. API route is called.
4. Service performs logic.
5. Repository reads database.
6. Response returns.
7. UI updates.

Use actual file names and method names when possible.

---

## Security

Never:

* commit secrets
* commit passwords
* commit tokens
* hardcode credentials

Use:

```text
.env.local
```

for local secrets.

---

## Default Behavior

Before making large changes:

1. Explain the plan.
2. List files that will change.
3. Explain risks.
4. Wait for approval.

After making changes:

1. Explain what changed.
2. Suggest test commands.
3. Suggest a commit message.
4. Explain the runtime flow.



