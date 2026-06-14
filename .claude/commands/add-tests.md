<!-- 4e -->
# Add Tests

Use this command after a feature is implemented, or when existing behavior needs test coverage.

Do NOT use for:

* trivial low-risk tweaks already sufficiently protected
* purely internal refactors with no behavior change
* unnecessary coverage expansion

---

# Goal

Create OR update the CURRENT testing truth for the feature.

This command owns:

* manual sanity test definitions
* automated testing strategy
* regression protection
* coverage decisions

Focus on:

* meaningful confidence
* business/workflow protection
* regression prevention
* maintainable tests
* practical verification

Prefer:

* focused tests
* behavior-oriented testing
* maintainable coverage
* smallest useful testing strategy
* existing testing patterns

Avoid:

* coverage obsession
* implementation-detail testing
* duplicated coverage
* brittle tests
* excessive mocking
* unnecessary E2E tests
* giant QA-style documentation
* over-testing tiny features

Prefer practical confidence over exhaustive validation.

---

# Documentation Persistence

Follow documentation persistence and naming rules defined in:

```text id="g1r4u6"
.claude/CLAUDE.md
```

Claude MUST immediately create or update the appropriate markdown documentation files during this workflow step.

Documentation files become part of the CURRENT SOURCE OF TRUTH for the workflow.

---

# Inputs

Use:

* `.claude/CLAUDE.md`
* approved feature plan
* current implementation
* `testing-rules.md`

If the feature plan only contains initial testing ideas, refine them into the CURRENT testing truth.

---

# Feature Complexity

Classify feature complexity BEFORE deciding testing depth.

Testing depth MUST scale according to:

* feature complexity
* regression risk
* workflow criticality
* business impact
* operational/runtime risk

---

## Tiny Feature

Examples:

* text change
* CSS tweak
* tiny validation
* isolated UI adjustment
* tiny bug fix

Expected behavior:

* lightweight testing
* concise output
* manual sanity may be sufficient
* automated tests only if regression risk exists

Avoid:

* unnecessary Playwright
* giant regression matrices
* deep testing plans
* architecture-level testing

Tiny features do NOT require enterprise-level testing rigor.

---

## Medium Feature

Examples:

* CRUD workflow
* reusable component logic
* API integration
* frontend/backend workflow
* stateful component flow

Expected behavior:

* balanced testing strategy
* meaningful regression protection
* targeted automated tests
* explicit manual verification

---

## Large / High-Risk Feature

Examples:

* authentication
* payments
* migrations
* major workflows
* persistence-heavy changes
* risky refactors

Expected behavior:

* broader regression protection
* stronger workflow validation
* operational/runtime verification
* edge-case awareness
* E2E consideration when justified

Still avoid unnecessary test inflation.

---

# Core Testing Rules

1. Follow `.claude/CLAUDE.md`
2. Follow `testing-rules.md`
3. Read the approved feature plan
4. Inspect the current implementation
5. Classify feature complexity
6. Identify behavior worth protecting
7. Prioritize critical workflows and regression risks
8. Map tests to acceptance criteria when useful
9. Reuse existing testing patterns first
10. Prefer behavior-oriented tests
11. Avoid implementation-detail assertions
12. Avoid unnecessary mocks
13. Add the SMALLEST USEFUL testing coverage
14. Explain intentionally uncovered risks when relevant

Prefer extending existing test suites over creating parallel testing structures.

Avoid testing the same behavior at multiple layers unless risk justifies it.

---

# Existing Project Patterns

Strongly prefer extending EXISTING:

* testing structure
* naming conventions
* helper utilities
* test setup
* Playwright/Vitest patterns
* selector conventions

Avoid introducing new testing architecture unless clearly justified.

Consistency is more important than personal preference.

---

# Stop Conditions

Stop and ask when:

* acceptance criteria are unclear
* implementation behavior differs significantly from the approved plan
* important workflows are ambiguous
* required test infrastructure does not exist
* regression risk cannot be evaluated confidently
* testing would require major architecture changes
* the feature unexpectedly expands in scope

Do NOT invent assumptions for critical workflows.

---

# Manual Sanity Test Rules

Manual tests MUST be:

* explicit
* reproducible
* user-oriented
* concise

Avoid vague instructions like:

* "verify it works"
* "test the UI"

Instead provide:

* exact page/screen
* exact action
* expected visible result

---

# Screenshot / Visual Verification

Screenshots MAY be useful for:

* dialogs
* visual states
* responsive layouts
* important workflows
* visible error states
* meaningful UX changes

Use screenshots only when they provide meaningful verification value.

Do NOT require screenshots for every feature.

If browser automation tools are available (Playwright MCP, Puppeteer MCP, etc.), they MAY be used when useful for:

* workflow verification
* screenshots
* visible-state validation

Avoid turning manual sanity testing into heavy QA process.

---

# Test Maintainability Rules

Prefer maintainable tests over maximum coverage.

Prefer:

* stable selectors
* readable assertions
* reusable helpers
* behavior-oriented assertions
* minimal mocking
* explicit test intent

Avoid:

* brittle selectors
* implementation-coupled assertions
* fragile E2E flows
* excessive snapshots
* duplicated setup
* deeply nested mocks
* giant hardcoded datasets

---

# Test Type Guidance

## Manual Sanity Tests

Use for:

* quick human verification
* visual validation
* responsive behavior
* workflows not automated yet
* validating real UX behavior

These define what a human should verify.

They do NOT execute testing.

---

## Unit Tests

Use for isolated logic.

Examples:

* calculations
* validation
* transformations
* utilities
* reducers/state transitions

Avoid testing trivial rendering.

---

## Regression Tests

Use when preventing a bug from returning.

Examples:

* previously broken workflow
* incorrect validation
* state-management issue
* important edge-case bug

Focus on meaningful regression protection.

---

## Playwright E2E Tests

Use for important user-visible workflows.

Examples:

* login
* multi-page flows
* protected routes
* critical client-server workflow
* important business journeys

Do NOT automatically add Playwright.

Choose Playwright only when justified by:

* workflow importance
* regression risk
* maintenance cost
* operational confidence value

Avoid Playwright for tiny/simple features.

---

## Component Tests

Use only when useful.

Examples:

* reusable UI components
* heavy UI logic
* form validation behavior
* loading/error states

Avoid trivial rendering tests.

---

## Integration Tests

Use when multiple parts must work together.

Examples:

* API + service
* service + repository
* API + database
* authentication flow
* persistence workflow

---

# Risk Prioritization

Prioritize testing for:

* critical workflows
* business-critical behavior
* authentication/persistence/payment flows
* previously unstable areas
* complex state transitions
* multi-system integrations

Not all workflows require equal testing depth.

---

# Runtime / Deployment Verification

Consider runtime/deployment verification ONLY when relevant.

Examples:

* SSR/runtime behavior
* environment configuration
* deployment-specific behavior
* client/server integration
* authentication/session handling
* persistence behavior
* Railway/Vercel/runtime-specific issues

Avoid unnecessary operational testing complexity.

---

# Testing Decisions

For each feature, decide:

* what should be tested manually
* which logic deserves automated tests
* whether Playwright is justified
* which workflows need regression protection
* what should intentionally NOT be tested
* which risks remain intentionally uncovered

Automated tests may be intentionally skipped when:

* the feature is trivial and low risk
* manual sanity verification is sufficient
* existing tests already protect the workflow
* maintenance cost outweighs the value
* regression risk is minimal

Prefer practical confidence over coverage inflation.

---

# Output Rules

Output MUST scale according to feature complexity.

Do NOT generate identical testing depth for all features.

Prefer concise high-signal testing plans.

Avoid:

* giant outputs
* QA-style bureaucracy
* repetitive prose
* unnecessary testing matrices

Prefer testing summaries understandable in a few minutes.

---

# Tiny Feature Output

Required sections:

* Testing Summary
* Feature Complexity
* Manual Sanity Test Definitions
* Automated Test Decision
* Commands To Run
* Summary

Automated tests may be intentionally skipped.

Expected output:

* short
* practical
* lightweight

---

# Medium Feature Output

Required sections:

* Testing Summary
* Feature Complexity
* Behavior Protected
* Related Acceptance Criteria
* Manual Sanity Test Definitions
* Automated Tests Added / Updated
* Files / Functions Covered
* Commands To Run
* Regression Risk Covered
* Coverage Decisions
* Summary

Expected output:

* balanced detail
* practical regression protection

---

# Large / High-Risk Feature Output

Required sections:

* Testing Summary
* Feature Complexity
* Behavior Protected
* Related Acceptance Criteria
* Manual Sanity Test Definitions
* Automated Test Strategy
* Unit Tests
* Integration Tests
* Playwright / E2E Coverage
* Regression Risk Covered
* Failure / Edge Cases
* Coverage Decisions
* Risks Still Uncovered
* Commands To Run
* Summary

Component tests and screenshots only when meaningful.

Expected output:

* broader regression awareness
* stronger workflow protection
* operational confidence

Avoid speculative testing inflation.

---

# Manual Test Template

```md
## Manual Sanity Test: <name>

Purpose:
<why this matters>

Preconditions:
* <required setup>

Steps:
1. Open <page/screen>
2. Click <button/link>
3. Enter/select <input>
4. Submit/continue workflow

Expected Result:
* <visible user-facing result>

Screenshot:
* Optional / Required / Not needed
```

Keep concise.

---

# Automated Test Decision Template

```md
## Automated Test Decision

Decision:
* Added tests
* Updated tests
* Skipped automated tests

Reason:
* <why this level of testing is appropriate>

Test Levels:
* Unit
* Component
* Integration
* Playwright
* None
```

---

# Output Format

## Testing Summary

Briefly describe the testing approach.

---

## Feature Complexity

One of:

* Tiny
* Medium
* Large / High-Risk

Explain briefly why.

---

## Behavior Protected

Describe important protected behavior.

---

## Related Acceptance Criteria

List covered acceptance criteria.

---

## Manual Sanity Test Definitions

Provide:

* scenario
* exact steps
* expected result
* screenshots only if useful

---

## Automated Tests Added / Updated

For each test:

* test name
* test type
* scenario
* expected result

---

## Files / Functions Covered

For each:

* file
* function/component
* purpose

Keep lightweight.

---

## Commands To Run

Examples:

```bash id="t4s1hf"
npm run test
npm run test:e2e
npm run lint
```

Only include relevant commands.

---

## Regression Risk Covered

Explain which future bugs are protected against.

---

## Coverage Decisions

Explain:

* what is covered
* what is intentionally NOT covered
* why

---

## Learning Notes

For learning projects only.

Explain briefly:

* why test types were selected
* what behavior is protected
* why some tests were intentionally avoided

Keep concise and practical.

---

## Suggested Commit Message

Provide one suggested commit message.

---

## Context Used

Examples:

* `.claude/CLAUDE.md`
* `.claude/AGENTS.md`
* `.claude/PROJECT.md`

---

# Important Principles

Prefer:

* meaningful regression protection
* maintainable tests
* behavior-oriented testing
* practical confidence
* proportional testing depth

Avoid:

* coverage obsession
* duplicated coverage
* implementation-detail coupling
* brittle tests
* QA-style bureaucracy
* unnecessary testing complexity
