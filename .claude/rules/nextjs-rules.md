# Next.js Rules

These rules apply to all Next.js code in this repository.

Follow:

* `.claude/CLAUDE.md`

---

# Goal

Build Next.js applications that are:

* maintainable
* readable
* practical
* performant enough
* easy to evolve
* easy to debug
* proportional to project complexity

Prefer:

* simple solutions
* existing project patterns
* focused responsibilities
* practical architecture
* visible delivery progress
* incremental evolution

Avoid:

* overengineering
* abstraction inflation
* speculative architecture
* premature optimization
* unnecessary framework complexity

Prefer visible working software quickly over ideal architecture.

---

# Core Principles

Prefer:

* explicit readable code
* focused components
* thin route handlers
* local simplicity first
* Server Components by default
* practical data flow
* maintainable structure

Avoid:

* unnecessary `"use client"`
* giant components
* unnecessary hooks/utilities
* unnecessary global state
* speculative abstractions
* architecture-first development

Avoid creating hooks/utilities/components/services until reuse or complexity justifies them.

---

# Existing Project Patterns

Strongly prefer extending EXISTING:

* folder structure
* component patterns
* API patterns
* validation patterns
* state-management patterns
* styling conventions
* runtime conventions

Avoid introducing alternative architecture directions unless clearly justified.

Consistency is more important than personal preference.

---

# App Router

Use App Router conventions.

Prefer:

* `app/`
* `page.tsx`
* `layout.tsx`
* `route.ts`
* Server Components
* server-first data fetching

Avoid Pages Router patterns unless explicitly required.

---

# Server vs Client Components

Prefer Server Components by default.

Add:

```tsx id="4g9v7j"
"use client";
```

ONLY when needed.

Examples:

* event handlers
* React state
* browser APIs
* effects/hooks
* client-side interactivity

Avoid unnecessary client components.

Avoid unnecessary client state/effects.

---

# Client Component Guidance

Use Client Components ONLY for:

* interactivity
* browser APIs
* local UI state
* animations
* immediate UX responsiveness

Avoid moving large application trees to the client unnecessarily.

Prefer smaller focused client boundaries.

---

# Component Design

Keep components focused.

Prefer:

* one responsibility per component
* meaningful names
* explicit props
* readable flow
* maintainable JSX

Split components ONLY when it improves:

* readability
* reuse
* maintainability

Avoid splitting tiny/simple components excessively.

Avoid component abstraction inflation.

---

# Feature Organization

Prefer:

```text id="6pr7h6"
src/features/<feature-name>
```

for feature-specific logic.

Prefer:

```text id="0n1m1w"
src/components
```

for reusable UI components.

Prefer:

```text id="67xgh1"
src/lib
```

for shared utilities/infrastructure.

Avoid scattering feature logic across unrelated folders.

---

# Pages and Route Handlers

Keep:

* `page.tsx`
* `route.ts`

thin when logic grows.

Move meaningful business logic into:

* services
* feature modules
* reusable logic units

Prefer thin but practical route handlers and components.

Avoid unnecessary indirection for tiny features.

---

# API Routes

Use route handlers when server-side behavior is required.

Typical structure:

```text id="e7a4do"
UI
↓
API Route
↓
Service
↓
Repository (if needed)
```

BUT:

Introduce layers ONLY when complexity justifies them.

Tiny features may safely use:

```text id="2h5vh0"
UI
↓
route.ts
↓
small focused logic
```

Avoid over-layering small features.

Avoid giant route handlers.

---

# Services

Create services ONLY when meaningful business logic exists.

Examples:

* workflow decisions
* validation orchestration
* async orchestration
* persistence coordination

Avoid generic service abstractions.

Avoid creating services “just in case”.

---

# Repositories

Create repositories ONLY when persistence complexity exists.

Repositories should focus on:

* queries
* persistence operations
* mapping when needed

Avoid:

* business logic in repositories
* generic repository frameworks
* unnecessary ORM abstraction layers

Do NOT create repositories for client-only features.

---

# Data Fetching

Prefer server-side fetching when practical.

Avoid unnecessary client-side fetching.

Prefer:

* server data
* server rendering
* colocated fetching
* explicit data ownership

Choose the simplest data-fetching approach that safely solves the requirement.

---

# State Management

Prefer:

* local component state
* URL state
* server state

before introducing:

* Context
* Zustand
* Redux/global state

Add global state ONLY when real cross-feature coordination exists.

Avoid global-state inflation.

---

# Forms

Keep forms simple and predictable.

Prefer:

* explicit validation
* clear error messages
* understandable state flow
* focused submit behavior

Avoid:

* overly generic form abstractions
* hidden behavior
* unnecessary complexity

---

# Styling

Use Tailwind CSS.

Prefer:

* readable class lists
* consistent spacing
* responsive layouts
* shared UI conventions

Avoid:

* excessive custom CSS
* duplicated styling patterns
* giant unreadable utility chains

---

# Accessibility

Ensure:

* buttons are buttons
* labels exist
* keyboard usage works reasonably
* feedback is visible
* focus behavior is understandable

Prefer practical accessibility improvements.

Avoid accessibility theater/documentation bureaucracy.

---

# Runtime / Operational Awareness

Consider runtime behavior when relevant.

Examples:

* SSR behavior
* client/server boundaries
* hydration behavior
* caching behavior
* runtime environment
* deployment/runtime limits
* route-handler execution time
* API timeout behavior

Examples:

* Vercel runtime behavior
* Railway runtime behavior
* edge/runtime differences

Avoid operational overengineering for simple features.

---

# Async / Background Processing

Do NOT perform long-running work inside request lifecycle unnecessarily.

Introduce async/background processing ONLY when justified.

Examples:

## Database-backed Worker

```text id="o5xkfj"
Producer writes tasks/jobs to database.
Worker polls/reads tasks asynchronously.
```

## Queue-based Processing

```text id="2nq7iq"
Producer publishes messages/events.
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

# Performance Guidance

Avoid:

* unnecessary client components
* unnecessary API calls
* duplicate fetching
* oversized client bundles
* unnecessary re-renders
* premature optimization

Optimize ONLY when:

* workflow value exists
* measurable bottlenecks exist
* runtime behavior justifies it

Prefer readable performance-aware code.

---

# Security Rules

Never:

* expose secrets
* hardcode credentials
* trust client input
* trust hidden UI as security

Always validate server-side when relevant.

Prefer explicit trust boundaries.

---

# Testing Guidance

Test behavior, not implementation details.

Prefer testing:

* user workflows
* business behavior
* acceptance criteria
* important state transitions
* regression risks

Avoid:

* implementation-detail assertions
* brittle rendering tests
* unnecessary mocking
* giant testing matrices

Use Playwright/E2E ONLY when workflow value justifies it.

Prefer practical confidence over exhaustive coverage.

---

# Review Before PR

Before PR verify:

* feature plan approved
* implementation matches scope
* important workflows verified
* tests added when appropriate
* review completed
* manual verification completed
* runtime behavior reasonable
* existing project patterns preserved

Follow workflow defined in:

```text id="l94l7n"
.claude/CLAUDE.md
```

---

# Important Principles

Prefer:

* practical engineering
* maintainable simplicity
* visible delivery progress
* focused responsibilities
* proportional complexity
* readable code
* incremental architecture evolution

Avoid:

* architecture inflation
* speculative scalability
* unnecessary abstractions
* client-component overuse
* enterprise-style overengineering
* process-heavy development
