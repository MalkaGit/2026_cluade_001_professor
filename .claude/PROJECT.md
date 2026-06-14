<!-- 1. per project -->
# PROJECT.md

# Project Overview

## Project Name

Professor App

---

## Goal

Interactive math-practice app.
Focus on fast UX iteration and AI-assisted development workflow learning.

---

# Technology Stack

## Frontend

Next.js App Router

---

## Backend

Next.js route handlers

---

## Persistence

MySQL

---

## Async / Background Processing


### None Yet

No background processing yet.

---

## Testing

Vitest
Playwright

---

## Deployment

Railway


---

# Architecture Overview

Frontend:          Next.js App Router UI.
Backend:           Next.js route handlers.
Persistence:       MySQL database.
Async:             None for now
Deployment:        Railway.


---

# Project Structure

If project already exists:
Follow the existing project structure and conventions.
Avoid unnecessary restructuring.


If starting from scratch, prefer:

src/

  app/
    Next.js routes/pages/layouts

  components/
    reusable UI components

  features/
    feature-specific logic

  lib/
    shared utilities/infrastructure


Prefer industry-standard structure.
Avoid unnecessary abstractions and folder proliferation.

---

# Engineering Principles

Prefer:

* incremental delivery
* small milestones
* maintainable code
* simple architecture
* focused PRs
* visible progress
* behavior-focused testing
* fast feedback loops
* existing project conventions

Avoid:

* overengineering
* speculative abstractions
* giant rewrites
* architecture perfectionism
* unnecessary layers
* premature optimization
* process-heavy development
* verbose documentation

Good architecture should SUPPORT delivery speed.

---

# Development Approach

This project evolves incrementally through milestone-based delivery.

Detailed implementation plans, testing plans, and bug-fix plans are stored under: docs/plans/


Workflow rules and naming conventions are defined in:
CLAUDE.md
AGENTS.md


The latest approved plan documents represent the CURRENT SOURCE OF TRUTH for implementation state.

---

# Important Runtime Assumptions

Document only meaningful runtime assumptions.

Examples:

* SSR-first rendering
* client-side state only
* single-region deployment
* no offline support
* no distributed processing
* no background workers yet

Avoid documenting obvious implementation details.

---

# Current Constraints

Examples:

* optimized for fast iteration
* learning-focused project
* low operational complexity
* no authentication yet
* no persistence yet

Keep concise.

---

# AI Guidance

When working in this repository:

* prefer concise high-signal output
* optimize for delivery speed
* follow existing project patterns
* avoid unnecessary abstractions
* avoid speculative architecture
* keep solutions proportional to feature complexity
* preserve readability and maintainability
* prefer simple maintainable solutions
* avoid long unnecessary documentation

Project-specific guidance supplements:

```text
CLAUDE.md
AGENTS.md
```

---

# Important Notes

Add important project-specific notes only.

Examples:

* deployment limitations
* temporary technical debt
* migration notes
* important UX requirements

```
```
