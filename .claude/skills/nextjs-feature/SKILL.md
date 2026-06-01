# Next.js Feature Development Skill

## Purpose

Use this skill when implementing a new Next.js feature.

This skill describes the preferred workflow, architecture, and decision-making process for feature development.

Follow:

* CLAUDE.md
* nextjs-rules.md
* api-rules.md
* testing-rules.md

---

## Development Workflow

Use the following workflow:

1. Plan Feature
2. Approve Plan
3. Implement Feature
4. Add Tests
5. Review
6. Run Verification
7. Prepare PR

Never start implementation before understanding:

* business goal
* users
* user stories
* acceptance criteria

---

## Feature Thinking

Before writing code, understand:

### Business Goal

Why does the feature exist?

### User Problem

What problem does the user have?

### Expected Value

How does the feature improve the product?

### User Stories

Who is using the feature?

What are they trying to accomplish?

### Acceptance Criteria

How do we know the feature is complete?

---

## Architecture Approach

Prefer the simplest architecture that satisfies the requirement.

### Small Client Feature

UI
↓
Local State

Examples:

* calculator input
* toggle
* simple form

### API Feature

UI
↓
API Route
↓
Business Logic


Examples:

* save settings
* submit answer
* retrieve data

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

Examples:

* authentication
* progress tracking
* reporting

Do not create layers without a clear responsibility.

---

## Next.js Structure

Prefer:

src/
app/
components/
features/
lib/

### app/

Contains:

* pages
* layouts
* route handlers

### components/

Reusable UI components.

### features/

Feature-specific functionality.

### lib/

Shared utilities and infrastructure.

---

## Component Design

Prefer:

* small focused components
* meaningful names
* clear responsibilities

Avoid:

* giant components
* deeply nested state
* unnecessary abstractions

---

## API Design

Before implementing an API:

Define:

* endpoint
* request
* response
* validation
* error handling

Validate input before business logic.

Keep route handlers thin.

---

## Data Access

Create repositories only when data access exists.

Do not create repositories for client-only features.

Keep database access isolated when practical.

---

## Testing Strategy

Every meaningful feature should have:

### Manual Sanity Test

Verify:

* happy path
* basic user workflow

### Automated Tests

Choose appropriate test types:

* E2E
* Integration
* Unit
* Component

Do not add tests that provide little value.

Prefer testing:

* user stories
* acceptance criteria
* business logic
* regression risks

---

## Review Mindset

Review:

1. Business Goal
2. User Stories
3. Acceptance Criteria
4. Tests
5. Code Quality

Ask:

* Did we build the right thing?
* Did we build it correctly?
* Can we maintain it?

---

## Bug Fixing Mindset

Understand before fixing.

Investigate:

* expected behavior
* actual behavior
* reproduction steps
* root cause
* impact

Prefer the smallest safe fix.

Add regression tests when practical.

---

## Learning Summary

When a feature is complete, explain:

### Feature Understanding

* business goal
* user stories
* acceptance criteria

### Application Flow

Explain:

1. User action
2. Frontend file and method
3. API route and method
4. Service and method
5. Repository and method
6. UI update

Use actual file names and method names.

### Next.js Concepts Used

Examples:

* App Router
* page.tsx
* layout.tsx
* route.ts
* client component
* server component
* API route

### Engineering Concepts Used

Examples:

* validation
* service layer
* repository pattern
* state management
* testing
* API design

Explain concepts in a beginner-friendly way.
