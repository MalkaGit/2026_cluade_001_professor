# Project Instructions

<!-- HOW TO DISABLE WORKFLOW ENFORCEMENT

The "Workflow Enforcement" section below forces Claude to use slash commands
(/plan-feature, /create-feature, /review, etc.) before each step.

To DISABLE enforcement temporarily — wrap the section in an HTML comment:

    <!-- ENFORCEMENT DISABLED
    ## Workflow Enforcement
    ...
    - ->

To RE-ENABLE — remove the comment markers.

Claude will not apply any rules that are inside HTML comments.
-->


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

## GitHub MCP Workflow
	GitHub MCP is used to help Claude work with GitHub issues and pull requests.
	Rules:
		- Claude may draft issues and PR descriptions.
    - Claude may suggest branch names and commit messages.
    - Claude may inspect GitHub context when available.
    - Claude must not merge PRs without user approval.
    - Claude must not commit or expose secrets.
    - User approves all write actions.
    - Professional workflow:
           → issue
          → branch
          → implementation
          → tests
          → review
          → PR
          → merge
          → deploy

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

## Workflow Enforcement

Claude must enforce the full professional workflow for every feature.

### Rules

**Step 1 — Plan**
- Never begin implementing without a completed `/plan-feature` output
- Never begin implementing without explicit user approval of the plan
- If the user asks to implement without a plan: stop, remind them to type `/plan-feature` first
- If the plan was written informally (plain text): stop, ask the user to run `/plan-feature` properly

**Step 2 — Implement**
- Never write feature code without using `/create-feature`
- If the user says "implement it" or "write the code" without `/create-feature`: stop, remind them to type `/create-feature`

**Step 3 — Tests**
- Never skip tests without explicit user decision
- After implementation, remind the user to run `/add-tests`
- If the user skips tests: acknowledge it and note what is untested

**Step 4 — Run Tests**
- After adding tests, remind the user to run the relevant test commands
- Examples: `npm run lint`, `npm run test`, `npm run test:e2e`
- If tests fail: stop, do not proceed to review until tests pass

**Step 5 — Fix Bugs**
- If bugs are found during testing: use `/fix-bug`
- If the user asks to fix a bug informally: remind them to use `/fix-bug` for proper root cause explanation and safe fix

**Step 6 — Review**
- Never prepare a PR without a `/review` first
- If the user asks to create a PR without reviewing: stop, remind them to run `/review` first

**Step 7 — Regression Tests**
- After review, remind the user to run regression tests if the feature touches existing behavior
- If skipped: acknowledge it and note the risk

**Step 8 — Manual Verification**
- Remind the user to manually verify the feature before creating a PR
- Must cover: user experience, visual validation, responsive behavior, edge cases

**Step 9 — PR**
- Never create a PR without completed review and manual verification
- Never merge without explicit user approval

### Summary Table

| Step         | Command / Action    | Enforcement                               |
|--------------|-----------------    |-------------------------------------------|
| Plan         | `/plan-feature`     | Hard stop — no code without approved plan |
| Implement    | `/create-feature`   | Hard stop — no code without this command  |
| Tests        | `/add-tests`        | Remind — user must consciously skip       |
| Run Tests    | `npm run test` etc. | Remind — stop if tests fail               |
| Fix Bugs     | `/fix-bug`          | Remind — use for all bug fixes            |
| Review       | `/review`           | Hard stop — no PR without review          |
| Regression   | run test suite      | Remind — note risk if skipped             |
| Manual verification | user action  | Remind — required before PR               |
| PR           | user approval        | Hard stop — no merge without approval    |

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



