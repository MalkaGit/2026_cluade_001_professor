# API Rules

These rules apply when creating or reviewing:

* API routes
* backend logic
* validation
* persistence access
* async/background processing
* integration boundaries

Follow:

* `.claude/CLAUDE.md`
* `nextjs-rules.md`

---

# Goal

Build APIs that are:

* simple
* predictable
* maintainable
* secure
* easy to evolve
* practical to debug
* proportional to project complexity

Prefer:

* explicit behavior
* focused APIs
* existing project patterns
* practical implementation
* smallest useful architecture
* visible delivery progress

Avoid:

* overengineering
* speculative abstractions
* architecture inflation
* generic framework-heavy designs
* premature distributed-system complexity

Prefer APIs that support visible working software quickly.

---

# Core API Principles

Prefer:

* simple explicit APIs
* predictable contracts
* focused responsibilities
* maintainable validation
* thin route handlers
* practical business logic separation
* consistent response shapes

Avoid:

* giant route handlers
* highly generic APIs
* premature abstraction layers
* excessive configuration systems
* deeply nested backend architecture

Do NOT trust client input.

Always validate server-side.

---

# Existing Project Patterns

Strongly prefer extending EXISTING:

* API conventions
* validation patterns
* response shapes
* persistence patterns
* authentication patterns
* runtime conventions

Avoid introducing new backend architecture unless clearly justified.

Consistency is more important than personal preference.

---

# Route Handlers

Use Next.js App Router route handlers.

Examples:

```text id="1r8bpf"
src/app/api/<resource>/route.ts
src/app/api/<resource>/<id>/route.ts
```

Route handlers should focus on:

* reading request data
* validation
* authentication/authorization
* calling business logic
* returning HTTP responses

Prefer thin route handlers.

Avoid large business workflows inside `route.ts`.

---

# Architecture Proportionality

Use the SIMPLEST backend architecture that safely solves the problem.

Avoid backend architecture inflation.

---

## Tiny API

Examples:

* small CRUD endpoint
* simple validation
* local feature endpoint

Acceptable structure:

```text id="sq8mhz"
route.ts
↓
small local logic
```

OR:

```text id="x8p7r5"
route.ts
↓
service.ts
```

Do NOT force repository/service layers for tiny APIs.

---

## Medium API

Examples:

* reusable workflows
* business rules
* persistence workflows
* frontend/backend integrations

Typical structure:

```text id="vymd98"
route.ts
↓
service.ts
↓
repository.ts
```

Use repository layer ONLY when persistence complexity becomes meaningful.

---

## Large / High-Risk API

Examples:

* authentication
* payments
* persistence-heavy workflows
* async/distributed processing
* multi-system integration

Expected:

* clearer boundaries
* stronger validation
* operational awareness
* stronger regression protection
* safer runtime behavior

Still avoid speculative architecture.

---

# API Contract

Define BEFORE implementation:

* endpoint
* HTTP method
* request shape
* response shape
* validation rules
* authentication requirements
* authorization rules
* error behavior

Prefer explicit contracts over “magic” behavior.

Prefer stable contracts over highly flexible contracts.

---

# Validation

Validate BEFORE business logic.

Validate:

* request body
* route params
* query params
* uploaded data
* authentication context

Use:

* clear validation messages
* safe validation failures
* explicit allowed values

Do NOT allow invalid data to reach persistence/business logic.

---

# Response Shape

Prefer consistent response shapes.

Example success:

```json
{
  "data": {}
}
```

Example error:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request"
  }
}
```

Avoid:

* raw exceptions
* stack traces
* SQL errors
* internal implementation details
* secrets/tokens

---

# Status Codes

Use reasonable HTTP status codes.

Examples:

* `200` success
* `201` created
* `400` validation error
* `401` unauthenticated
* `403` unauthorized
* `404` not found
* `409` conflict
* `500` unexpected server error

Avoid “always 200” APIs.

---

# Business Logic

Move business logic into services when logic becomes meaningful.

Examples:

* workflow decisions
* scoring
* permission rules
* validation orchestration
* persistence coordination
* async orchestration

Avoid giant service files.

Prefer focused responsibilities.

Avoid generic service abstractions without clear business value.

---

# Persistence / Repository Rules

Introduce repositories ONLY when persistence complexity justifies them.

Repositories should handle:

* queries
* persistence operations
* mapping when needed
* transaction coordination if relevant

Avoid:

* business logic inside repositories
* generic repository frameworks
* unnecessary ORM abstraction layers

Prefer explicit readable persistence logic.

---

# Authentication / Authorization

If protected:

* authenticate user
* authorize action
* derive identity from trusted auth/session/token context

Never trust:

* `userId` from request body
* client-side permission checks
* hidden UI as security

Always enforce authorization server-side.

---

# Security Rules

Never:

* log passwords
* log tokens
* expose secrets
* expose stack traces
* expose internal persistence details
* trust client validation as security

Always validate server-side for protected operations.

Prefer explicit trust boundaries.

---

# Error Handling

Handle expected errors intentionally.

Examples:

* invalid input
* unauthorized access
* duplicate data
* missing resources
* conflict states

Unexpected errors should:

* return safe generic responses
* log safely if logging exists
* avoid leaking internals

Prefer predictable failure behavior.

---

# Runtime / Operational Awareness

Consider runtime behavior when relevant.

Examples:

* SSR/server runtime behavior
* deployment/runtime constraints
* environment configuration
* caching behavior
* API timeout behavior
* retry behavior
* concurrency behavior
* client/server boundaries

Examples:

* Vercel runtime limits
* Railway runtime behavior
* edge/server runtime differences

Avoid operational overengineering for simple APIs.

---

# Async / Background Processing

Introduce async/background processing ONLY when justified.

Examples:

## Database-backed Worker

```text id="jlwmk6"
Producer writes tasks/jobs to database.
Worker polls/reads tasks and processes asynchronously.
```

## Queue-based Processing

```text id="n7a4q0"
Producer publishes message/event.
Workers consume asynchronously.
```

Examples:

* AWS SQS + Lambda/ECS worker
* Google Pub/Sub + Cloud Run/Functions
* Azure Service Bus + Azure Functions
* RabbitMQ
* Kafka

Prefer simpler async solutions first.

Avoid distributed-system complexity too early.

---

# Idempotency

Consider idempotency when APIs:

* create data
* process payments
* handle retries
* trigger async workflows
* process background jobs

Especially important for:

* retries
* duplicate submissions
* async/event-driven systems

Write:

```text id="mvh3rr"
Not relevant
```

when idempotency is unnecessary.

---

# Performance Guidance

Avoid:

* unnecessary DB calls
* duplicate queries
* oversized payloads
* unnecessary server work
* N+1 query patterns
* expensive synchronous processing

Add indexes only when queries justify them.

Avoid premature optimization.

Prefer readable performance-aware code.

---

# Testing Guidance

Testing MUST scale according to API complexity and risk.

Prefer:

* validation tests
* success-path tests
* authorization tests
* meaningful integration tests
* regression protection

Avoid:

* testing implementation details
* giant testing matrices
* unnecessary E2E for tiny APIs

Use Playwright/E2E ONLY when workflow value justifies it.

Prefer practical confidence over exhaustive coverage.

---

# Review Before PR

Before PR verify:

* API contract matches plan
* validation exists
* errors are safe
* response shapes are consistent
* authentication/authorization is correct
* runtime behavior is reasonable
* important workflows are tested
* existing project patterns are preserved

Avoid unnecessary architecture redesign during review.

---

# Important Principles

Prefer:

* simple explicit APIs
* focused responsibilities
* practical backend architecture
* maintainable validation
* proportional complexity
* operational awareness
* visible delivery progress

Avoid:

* architecture inflation
* generic abstractions
* speculative scalability
* distributed-system complexity too early
* enterprise-style overengineering
