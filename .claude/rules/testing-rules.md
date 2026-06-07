# Testing Rules

These rules apply when planning, writing, reviewing, or updating tests.

Follow:

* `CLAUDE.md`
* approved feature plan
* approved test strategy


## Project Policy

* Always define manual sanity tests in the feature plan.
* Alway add at least minimal Playwright tests
* Do not add heavy testing infrastructure unless the value is clear.

For early project stages:

* prefer simple testing approaches
* prefer readability over advanced patterns
* avoid overengineering the test setup


For small learning features:

* Prefer unit tests for framework-independent business logic.
* If automated tests are skipped, document:
  * what was tested manually
  * what remains unprotected




## Testing Philosophy

Test behavior.

Do not test implementation details unless there is a strong reason.

Prefer tests that protect:

* user stories
* acceptance criteria
* business logic
* important workflows
* regression risks

## Testing Priority

Prefer testing in this order:

1. Critical user workflows
2. Acceptance criteria
3. Business logic
4. Validation rules
5. Previously fixed bugs
6. Important edge cases

## Test Pyramid

Prefer:

* many unit tests
* some integration tests
* fewer end-to-end tests

Avoid relying entirely on E2E tests.

Avoid testing everything through the UI.

## Manual Sanity Tests

Every meaningful feature should have a manual sanity path.

Manual sanity tests should verify:

* happy path
* basic user experience
* major workflow

Manual tests should be documented in the feature plan.

## Automated End-to-End Tests

Use for important user-visible workflows.

Examples:

* login
* logout
* signup
* answer question
* save progress
* complete purchase

Prefer Playwright for E2E tests.

Test from the user's perspective.

Avoid testing implementation details.
<!-- 
Do not introduce Playwright unless:

* the feature explicitly requires E2E coverage
* the feature plan approves it -->



## Unit Tests

Use for isolated logic.

Examples:

* services
* validation
* calculations
* utilities
* transformations

Unit tests should:

* run fast
* be deterministic
* avoid external dependencies when practical

Prefer unit tests for:

* framework-independent business logic
* utility functions
* state transformations


## Integration Tests

Use when multiple parts must work together.

Examples:

* API + service
* service + repository
* API + database
* authentication flow

Prefer integration tests over excessive mocking.

Avoid unnecessary integration tests in early learning stages.


## Component Tests

Use only when they provide clear value.

Examples:

* reusable UI components
* form validation behavior
* loading states
* error states

Avoid testing trivial rendering.

Avoid snapshot-heavy testing without clear value.

## Regression Tests

When fixing a bug:

* add a regression test when practical
* ensure the bug cannot easily return

Examples:

* previously failing workflow
* incorrect validation
* state management bug

## Test Design

Prefer:

* clear test names
* one behavior per test
* readable setup
* readable assertions

Tests should explain intent.

A future developer should understand the behavior without reading implementation code.

## What Not To Test

Avoid testing:

* framework behavior
* Tailwind classes
* implementation details
* private helper functions that are indirectly covered
* trivial getters/setters
* generated code

Avoid tests that provide little protection value.


## Mocking

Prefer:

* real behavior when practical

Use mocks only when necessary.

Avoid excessive mocking.

Do not mock everything by default.

Prefer lightweight mocks over deeply coupled mocks.


## Coverage

Coverage numbers are not the goal.

Focus on:

* important workflows
* business logic
* regression protection

A lower coverage percentage with meaningful tests is better than high coverage with weak tests.

## Mapping Tests To Requirements

Whenever practical, map tests to:

* user stories
* acceptance criteria
* bug reports

Every important requirement should have a way to verify it.

## Before PR

Verify:

* acceptance criteria are covered
* critical workflows are covered
* bug fixes include regression protection when practical
* tests are maintainable
* tests pass locally

If tests are skipped:

* document the reason
* document manual verification performed
* document remaining risks


## Review Guidelines

When reviewing tests, ask:

* Does this test protect valuable behavior?
* Is the test easy to understand?
* Would the test fail if the behavior broke?
* Is the test overly coupled to implementation details?
* Is there a simpler way to test this?
# Important Principle

Meaningful tests are better than many tests.

Readable tests are better than clever tests.
