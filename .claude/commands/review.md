# Review

Review the current implementation like a senior engineer.

## Goal

Verify that the feature:

* satisfies the approved plan
* satisfies the user stories
* satisfies the acceptance criteria
* is maintainable
* is properly tested
* follows project conventions

This review happens before creating a PR.

## Instructions

Review the implementation against:

* approved feature plan
* user stories
* acceptance criteria
* test strategy
* project conventions in `CLAUDE.md`

Identify:

1. Blocking issues
2. Security concerns
3. Risk areas
4. Architecture concerns
5. Maintainability concerns
6. Performance concerns
7. Missing tests
8. Non-blocking improvements

Do not suggest unnecessary architecture.

Do not suggest large refactors unless clearly justified.

Keep recommendations aligned with the current project stage.

## Review Checklist

### Feature Validation

Verify:

* business goal is implemented
* user stories are implemented
* acceptance criteria are implemented

### Correctness

Check:

* bugs
* logic issues
* edge cases
* error handling

### Code Quality

Check:
* complexity
* duplication 
* naming
* readability
* maintainability
* extensability - was there any better strtcture that would have made code more extensinle
                  eg, add new type of ...
                  is it likely that in the future we will need to extend it  ? 
                  will it be easy in the future to refactore or is it the time  

### Next.js Review

Check:

* App Router practices
* client vs server usage
* route handlers
* component boundaries
* unnecessary client components

keep in mind i am new to next js , so be sure to explain in details what is not right

### Architecture Review

Check:


* responsibility boundaries
* unnecessary layers (note: i am good with reposiotry layer)
* missing layers when justified
* consistency with existing project patterns
* in case in the future we will need to scale it to many users , will it be simple 
  (how many users \ request will reach that point)

### Test Review

Check:

* test strategy was followed
* important user stories are covered
* acceptance criteria are covered
* edge cases are covered appropriately

### Security Review

Check:

* secrets
* unsafe logging
* input validation
* authentication
* authorization
* trust boundaries

### Performance Review

Check:

* unnecessary re-renders
* duplicate work
* expensive operations
* unnecessary API calls
* oversized client components

### Simplicity Review

Check for:

* over-engineering
* premature optimization
* unnecessary abstractions
* unnecessary patterns

  Those re importan to keep code simple, make it readable and simpler to maintain
  



## Output Format

### Overall Assessment

Provide:

* readiness level
* overall quality
* confidence level

Example:

* Feature mostly ready for PR
* One blocking issue found
* Two optional improvements suggested

### Feature Coverage

Verify:

#### Business Goal

Implemented?
Yes / No

Comments:

#### User Stories

For each user story:

* implemented?
* comments

#### Acceptance Criteria

For each acceptance criterion:

* implemented?
* comments

### Security Findings

List concerns.

### Blocking Issues

For each issue:

File:

Function / Method:

Issue:

Why It Matters:

Suggested Fix:

### Non-Blocking Suggestions

Optional improvements.

### Missing Tests

Review:

#### Manual End-to-End Coverage

Missing scenarios?

#### Automated E2E Coverage

Missing scenarios?

#### Unit Test Coverage

Missing scenarios?

#### Component Test Coverage

Missing scenarios?


### Performance Findings

List concerns.

### Maintainability Findings

List concerns.

### Learning Notes

Explain:

* why each important issue matters
* which engineering concept is involved
* beginner-friendly explanation

### Recommended Next Step

Examples:

* Fix blocking issues
* Add missing tests
* Ready for regression testing
* Ready for PR

### Suggested Commit Message

Provide one commit message if appropriate.
