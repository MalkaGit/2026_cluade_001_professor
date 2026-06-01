# Next.js Rules

These rules apply to all Next.js code in this repository.

Follow `CLAUDE.md`.

## General Principles

* Prefer simple solutions.
* Prefer readability over abstraction.
* Prefer existing project patterns.
* Avoid unnecessary architecture.
* Add complexity only when it solves a real problem.

## App Router

Use App Router conventions.

Prefer:

* `app/`
* `page.tsx`
* `layout.tsx`
* `route.ts`

Avoid Pages Router patterns unless explicitly requested.

## Client vs Server

Default to Server Components.

Add:

```tsx
"use client";
```

only when needed.

Examples:

* event handlers
* React state
* browser APIs
* effects

Do not make components client components unnecessarily.

## Component Design

Keep components focused.

Prefer:

* one responsibility per component
* meaningful names
* clear props

Split components only when it improves readability or reuse.

Avoid splitting tiny components.

## Feature Organization

Prefer:

src/features/<feature-name>

for feature-specific code.

Prefer:

src/components/

for reusable UI components.

Prefer:

src/lib/

for shared utilities and infrastructure.

## Pages and Routes

Keep:

* page.tsx
* route.ts

thin when logic grows.

Move business logic into feature/service files.

## API Routes

Use route handlers when server-side functionality is required.

Prefer:

UI
↓
API Route
↓
Service
↓
Repository (if needed)

Avoid placing complex business logic directly inside route handlers.

## Services

Create service files only when business logic exists.

Do not create service files automatically.

## Repositories

Create repository files only when data access exists.

Do not create repositories for client-only features.

## Data Fetching

Fetch data on the server when practical.

Avoid unnecessary client-side fetching.

Choose the simplest solution that satisfies the requirement.

## State Management

Prefer:

* local component state

before introducing:

* context
* global state

Add global state only when there is a real need.

## Forms

Keep form handling simple.

Prefer:

* clear validation
* clear error messages
* predictable state

## Styling

Use Tailwind CSS.

Prefer:

* readable class lists
* consistent spacing
* responsive layouts

Avoid unnecessary custom CSS.

## Accessibility

Ensure:

* buttons are buttons
* inputs have labels
* feedback is visible
* keyboard usage is reasonable

## Testing

Test behavior.

Prefer testing:

* user workflows
* business logic
* acceptance criteria

Avoid testing implementation details.

## Performance

Avoid:

* unnecessary client components
* unnecessary API calls
* duplicate work
* premature optimization

Optimize only when there is evidence that optimization is needed.

## Security

Never:

* expose secrets
* hardcode credentials
* trust client input

Validate server-side when appropriate.

## Review Before PR

Before a PR:

* feature plan approved
* tests added when appropriate
* review completed
* manual verification completed

Follow the workflow defined in `CLAUDE.md`.
