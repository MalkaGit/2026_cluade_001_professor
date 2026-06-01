# API Rules

These rules apply when creating or reviewing API routes, backend logic, validation, and data access.

Follow `CLAUDE.md` and `nextjs-rules.md`.

## General Principles

- Design the API contract before implementation.
- Keep APIs simple, predictable, and consistent.
- Validate input before business logic.
- Return consistent response shapes.
- Do not expose internal errors to clients.
- Do not trust client input.

## Route Handlers

Use Next.js App Router route handlers.

Examples:

- `src/app/api/<resource>/route.ts`
- `src/app/api/<resource>/<id>/route.ts`

Keep route handlers focused on:

- reading request data
- validating input
- authentication/authorization checks when relevant
- calling service/business logic
- returning HTTP responses

Avoid putting complex business logic directly inside `route.ts`.

## API Contract

Before implementation, define:

- endpoint
- HTTP method
- request body
- response body
- validation rules
- error responses
- authentication requirement
- authorization rules if relevant

## Validation

Validate:

- request body
- route params
- query params

Validation should happen before business logic.

Use clear validation errors.

Do not allow invalid data to reach services or repositories.

## Response Shape

Prefer consistent response shapes.

Example success:

- `data`

Example error:

- `error`
  - `code`
  - `message`

Do not return raw exceptions.

Do not leak stack traces, SQL errors, tokens, secrets, or internal implementation details.

## Status Codes

Use reasonable HTTP status codes.

Examples:

- `200` success
- `201` created
- `400` validation error
- `401` unauthenticated
- `403` unauthorized
- `404` not found
- `409` conflict
- `500` unexpected server error

## Business Logic

Put business logic in service files when logic becomes non-trivial.

Examples:

- authentication
- scoring
- progress calculation
- permission checks
- workflow decisions


## Data Access

Create repository files only when data access exists.

Repositories should handle:

- SQL queries
- DB reads
- DB writes
- data mapping when needed

Services should not contain complex SQL when a repository exists.

## Authentication / Authorization

If the API is protected:

- authenticate the user
- authorize the action
- do not trust `userId` from request body
- derive user identity from trusted auth context/token/session

## Security

Never:

- log passwords
- log tokens
- expose secrets
- return internal error details
- trust client-side checks as security

Always validate server-side for protected operations.

## Error Handling

Handle expected errors intentionally.

Examples:

- invalid input
- not found
- duplicate data
- unauthorized access

Unexpected errors should return a safe generic response and be logged safely if logging exists.

## Idempotency

Consider idempotency when APIs create or modify data.

Especially relevant for:

- payments
- retries
- duplicate submissions
- background jobs

Write `Not relevant` when not needed.

## Performance

Avoid:

- unnecessary DB calls
- duplicate queries
- large response payloads
- expensive work in hot request paths

Add indexes when queries require them.

Do not optimize prematurely.

## Testing

For APIs, consider:

- validation tests
- success path tests
- error response tests
- authorization tests
- integration tests when DB is involved
- E2E tests for important user flows

Tests should map to acceptance criteria when possible.

## Review Before PR

Before PR, verify:

- API contract matches plan
- validation exists
- errors are safe and consistent
- authentication/authorization is correct if relevant
- tests cover important paths