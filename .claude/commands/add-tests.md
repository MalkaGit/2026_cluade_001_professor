# Add Tests

Use this command after a feature is implemented, or when existing behavior needs test coverage.

## Goal

Add the smallest useful tests that protect important behavior.

Focus on:

* user-visible behavior
* acceptance criteria
* business logic
* regression prevention

Prefer simple and maintainable tests.

## Inputs

Use the approved feature plan and test strategy when available.

If no test strategy exists:

1. Identify the behavior to protect.
2. Identify the affected files/functions.
3. Select the most appropriate test type.
4. Explain why.

## Instructions

1. Follow `CLAUDE.md`.
2. Map tests to user stories and acceptance criteria when possible.
3. Prefer behavior-based tests over implementation-detail tests.
4. Add the smallest useful coverage.
5. Reuse existing test patterns.
6. Avoid brittle tests.
7. Avoid unnecessary mocks.
8. Explain how to run the tests.
9. Explain what future bugs the tests help prevent.

## Test Type Guidance

### Manual Sanity Test

Use for:

* quick verification
* visual validation
* responsive behavior
* workflows not automated yet

### Automated End-to-End Test

Use for important user flows.

Examples:

* login
* signup
* submit form
* answer question
* checkout
* protected page access

### Unit Test

Use for isolated logic.

Examples:

* services
* validation
* calculations
* utilities
* transformations

### Component Test

Use only when useful.

Examples:

* reusable UI component
* form validation
* loading states
* error states

### Integration Test

Use when multiple parts must work together.

Examples:

* API + database
* service + repository
* authentication flow

## Output Format

### Behavior Tested

Describe the behavior being protected.

### Related User Stories

List the user stories covered.

### Related Acceptance Criteria

List the acceptance criteria covered.

### Test Type

Specify:

* manual
* E2E
* unit
* component
* integration

Explain why this test type was selected.

### Files / Functions Covered

For each:

* file
* component/function/method
* purpose

### Tests Added

For each test:

* test name
* Test type
* scenario
* expected result

### Files Changed

List:

* created files
* modified files

### How To Run

Provide relevant commands.

Examples:

* npm run test
* npm run test:e2e
* npm run lint

### Expected Result

Describe what should happen when tests pass.

### Manual Verification

If manual verification is still needed:

* who runs it
* when it runs
* steps
* expected result

### Regression Risk Covered

Explain which future bugs these tests help prevent.

### Learning Notes

Explain:

* why this test type was selected
* what behavior is being protected
* what should not be tested
* beginner-friendly explanation

### Suggested Commit Message

Provide one suggested commit message.
