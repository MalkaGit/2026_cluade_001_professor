# Testing Rules

These rules apply when planning, writing, reviewing, or updating tests.

Follow:

* `CLAUDE.md`
* approved feature plan
* approved test strategy

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

## Integration Tests

Use when multiple parts must work together.

Examples:

* API + service
* service + repository
* API + database
* authentication flow

Prefer integration tests over excessive mocking.

## Component Tests

Use only when they provide clear value.

Examples:

* reusable UI components
* form validation behavior
* loading states
* error states

Avoid testing trivial rendering.

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

## Mocking

Prefer:

* real behavior when practical

Use mocks only when necessary.

Avoid excessive mocking.

Do not mock everything by default.

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

## Review Guidelines

When reviewing tests, ask:

* Does this test protect valuable behavior?
* Is the test easy to understand?
* Would the test fail if the behavior broke?
* Is the test overly coupled to implementation details?
* Is there a simpler way to test this?
