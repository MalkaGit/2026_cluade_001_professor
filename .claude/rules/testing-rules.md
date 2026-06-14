# Testing Rules

These rules apply when planning, writing, reviewing, or updating tests.

Follow:

* `.claude/CLAUDE.md`
* approved feature plan
* approved testing strategy

---

# Goal

Create tests that provide:

* practical confidence
* regression protection
* maintainable verification
* workflow safety
* delivery confidence

Prefer:

* meaningful behavior coverage
* maintainable tests
* practical verification
* focused regression protection
* proportional testing depth
* existing project testing patterns

Avoid:

* coverage obsession
* test bureaucracy
* implementation-detail testing
* unnecessary E2E tests
* brittle tests
* giant testing matrices
* testing for the sake of testing

Prefer practical confidence over exhaustive coverage.

---

# Core Testing Principles

Test:

* user-visible behavior
* business outcomes
* acceptance criteria
* meaningful workflows
* regression risks

Avoid testing:

* framework internals
* implementation details
* trivial rendering
* low-value abstractions
* behavior already sufficiently protected elsewhere

Avoid testing the same behavior at multiple layers unless risk justifies it.

---

# Existing Project Patterns

Strongly prefer extending EXISTING:

* test structure
* naming conventions
* helper utilities
* mocking patterns
* Playwright/Vitest patterns
* setup conventions

Avoid introducing alternative testing architecture unless clearly justified.

Consistency is more important than personal preference.

---

# Testing Proportionality

Testing depth MUST scale according to:

* feature complexity
* business impact
* regression risk
* operational/runtime risk
* workflow importance

Avoid enterprise-level testing rigor for tiny features.

Prefer the SMALLEST USEFUL testing strategy.

---

# Tiny Features

Examples:

* text change
* CSS tweak
* tiny validation
* isolated UI adjustment
* tiny bug fix

Often acceptable:

* manual sanity verification only
* no automated tests
* lightweight regression verification

Automated tests are OPTIONAL when:

* regression risk is low
* existing tests already protect behavior
* maintenance cost outweighs value

Tiny features do NOT automatically require Playwright.

---

# Medium Features

Examples:

* CRUD workflow
* reusable logic
* API integration
* form workflow
* frontend/backend integration

Expected:

* meaningful regression protection
* targeted automated tests
* practical manual sanity validation

Prefer focused testing over broad testing expansion.

---

# Large / High-Risk Features

Examples:

* authentication
* payments
* persistence-heavy workflows
* async/distributed workflows
* critical business behavior

Expected:

* broader regression awareness
* stronger workflow protection
* operational/runtime validation
* E2E consideration when justified

Still avoid test inflation.

---

# Testing Priority

Prefer testing in this order:

1. Critical user workflows
2. Acceptance criteria
3. Business logic
4. Validation rules
5. Previously fixed bugs
6. Important edge cases

Not all workflows require equal testing depth.

---

# Manual Sanity Tests

Every meaningful feature should have a manual sanity path.

Manual sanity tests should verify:

* happy path
* major user workflow
* basic UX behavior
* meaningful visible behavior

Manual sanity tests MUST be:

* explicit
* reproducible
* concise
* user-oriented

Avoid vague instructions like:

```text id="x7v07f"
verify it works
```

Prefer:

```text id="v8hwdk"
1. Open dashboard
2. Submit form
3. Verify success message appears
```

Manual sanity tests should be documented in:

* feature plans
* testing plans

---

# Playwright / E2E Tests

Use ONLY for meaningful user-visible workflows.

Examples:

* authentication
* checkout/payment
* persistence workflow
* multi-page business workflow
* critical integration workflow

Prefer Playwright for E2E when E2E is justified.

Do NOT automatically add Playwright.

Choose Playwright ONLY when justified by:

* workflow importance
* regression risk
* operational value
* maintenance cost

Avoid Playwright for tiny/simple features.

---

# Unit Tests

Use for isolated logic.

Examples:

* calculations
* validation
* transformations
* utilities
* reducers/state transitions

Unit tests should:

* run fast
* be deterministic
* avoid unnecessary external dependencies

Prefer unit tests for:

* framework-independent business logic
* reusable logic
* utility functions

Avoid testing trivial wrappers.

---

# Integration Tests

Use when multiple parts must work together.

Examples:

* API + service
* service + repository
* API + database
* authentication flow
* persistence workflow

Prefer integration tests over excessive mocking.

Avoid unnecessary integration tests for tiny features.

---

# Component Tests

Use ONLY when they provide meaningful value.

Examples:

* reusable UI components
* form behavior
* loading/error states
* meaningful UI logic

Avoid:

* trivial rendering tests
* snapshot-heavy testing
* implementation-detail assertions

---

# Regression Tests

When fixing a meaningful bug:

* add regression protection when practical
* ensure the workflow cannot easily regress

Examples:

* previously broken workflow
* validation issue
* state-management bug
* persistence bug

Avoid regression-test inflation for trivial issues.

---

# Runtime / Operational Testing

Consider runtime/deployment testing ONLY when relevant.

Examples:

* SSR behavior
* client/server boundaries
* authentication/session handling
* deployment/runtime behavior
* persistence behavior
* async/background processing
* retries/idempotency
* queue workflows

Examples:

* Railway runtime behavior
* Vercel runtime behavior
* queue/worker systems

Avoid operational over-testing for simple features.

---

# Async / Background Workflow Testing

If async processing exists, consider testing:

* retry behavior
* idempotency
* duplicate submission handling
* queue processing
* worker behavior
* failure handling

Examples:

* DB-backed workers
* SQS + Lambda
* Pub/Sub + Cloud Run
* RabbitMQ
* Kafka

Prefer focused async workflow validation.

Avoid distributed-system testing complexity too early.

---

# Test Design

Prefer:

* clear test names
* one behavior per test
* readable setup
* readable assertions
* explicit intent
* maintainable structure

Tests should explain:

```text id="11abj4"
what behavior matters
```

not:

```text id="x8z48f"
how implementation works internally
```

---

# Mocking Rules

Prefer:

* real behavior when practical
* lightweight mocks
* focused mocking boundaries

Avoid:

* mocking everything
* deep mock chains
* implementation-coupled mocks
* excessive test setup

Prefer integration confidence over mock-heavy isolation when practical.

---

# Coverage Philosophy

Coverage numbers are NOT the goal.

Focus on:

* workflow protection
* business behavior
* regression prevention
* operational confidence

A lower coverage percentage with meaningful tests is better than high coverage with weak tests.

Prefer tests whose maintenance cost is justified by their protection value.

---

# Mapping Tests To Requirements

Whenever practical, map tests to:

* user stories
* acceptance criteria
* bug reports
* critical workflows

Every important requirement should have a verification path.

That path may be:

* manual
* automated
* integration
* E2E

Not everything requires automation.

---

# What NOT To Test

Avoid testing:

* framework behavior
* Tailwind classes
* implementation details
* trivial getters/setters
* generated code
* private helpers already indirectly covered
* low-value rendering details

Avoid tests with low protection value.

---

# Before PR

Verify:

* acceptance criteria are covered
* important workflows are protected
* regression protection exists when justified
* tests remain maintainable
* tests pass locally
* manual sanity verification completed

If tests are skipped:

* explain why
* document manual verification
* document remaining risks if meaningful

---

# Review Guidelines

When reviewing tests ask:

* Does this protect meaningful behavior?
* Would this fail if behavior regressed?
* Is this easy to understand?
* Is this overly coupled to implementation?
* Is there a simpler testing strategy?
* Is maintenance cost justified?

Prefer concise high-value tests.

Avoid review-driven test inflation.

---

# Important Principles

Prefer:

* meaningful regression protection
* maintainable tests
* behavior-oriented testing
* practical confidence
* proportional testing depth
* delivery confidence

Avoid:

* coverage obsession
* QA-style bureaucracy
* duplicated coverage
* brittle tests
* unnecessary Playwright
* implementation-detail testing
* enterprise-style overengineering
