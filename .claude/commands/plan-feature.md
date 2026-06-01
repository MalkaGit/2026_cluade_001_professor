# Plan Feature

Use this command before implementing a feature.

## Goal

Understand the feature before implementation.

Focus on:

* business value
* user value
* design
* testing
* risks

Do not edit files.

Wait for approval before implementation.

## Instructions

Given a feature request:

1. Restate the business goal.
2. Identify the users/personas.
3. Define user stories.
4. Define acceptance criteria (eg, end to end success path test case )
5. Propose a high-level design.
6. Propose frontend changes.
7. Propose backend/API changes if relevant.
8. Propose database changes if relevant.
9. Propose files to create or modify.
10. Propose major methods/functions.
11. Define a test strategy before implementation.
12. Identify risks and missing requirements.
13. Define out-of-scope items.
14. Ask questions if requirements are unclear.
15. Do not implement.
16. Wait for approval.

## Planning Depth

Use the same structure for all features.

Small features:

* concise answers

Medium features:

* normal detail

Large or high-risk features:

* include additional detail for:

  * API contracts
  * database changes
  * security
  * performance
  * scale

## Output Format

### Feature Summary

Short description of the feature.

### Business Goal

Why are we building this feature?

### Users / Personas

Who uses this feature?

### User Stories

Examples:

* As a student, I want to answer math questions so I can practice multiplication.
* As an admin, I want to see usage statistics.

### Acceptance Criteria

List measurable success criteria.

### High-Level Design (HLD)

#### Frontend

For each major UI component:

* file
* component
* main methods/functions
* responsibility

#### Backend / API

If relevant:

* route
* file
* method/function
* responsibility

#### Database

If relevant:

* tables
* columns
* indexes
* migrations

Otherwise:

None.

#### End-to-End Flow

Describe the runtime flow.

For each step include:

* file
* method/function
* purpose

### Files To Create

List files and purpose.

### Files To Update

List files and purpose.

### Major Methods / Functions

For each:

* file
* method/function
* purpose

### Test Strategy

#### Manual End-to-End Sanity Test

Main happy path.

Include:

* who runs it
* when it runs
* steps (how to run it)
* expected result

#### Automated End-to-End Tests

Main user stories.

Examples:

* successful flow
* validation failure
* error handling

For each test specify:

* who runs it
* how to run it
* when it runs 
* expected result

#### Unit Tests

Business logic, validation, utilities, services.

For each test specify:

* who runs it
* gow to run it
* when it runs
* expected result

#### Component Tests

Only if useful.

#### Regression Impact

Which existing flows might break?

### Risks / Questions

List:

* risks
* assumptions
* missing requirements

### Out Of Scope

What will not be implemented in this version.

### Optional Considerations

Only include when relevant:

* API Contract
* Security
* Performance / Latency
* Scale
* Accessibility / Mobile
* Observability
* Deployment

### Next Step

Recommend:

* approve plan
* clarify requirements
* proceed to `/create-feature`
