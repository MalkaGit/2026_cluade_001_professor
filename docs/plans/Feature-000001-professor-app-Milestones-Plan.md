# Feature-000001-professor-app — Milestones Plan

**Feature:** Feature-000001-professor-app
**Product:** The Professor — Math Learning Game
**Created:** 2026-06-08 (retroactively documented)
**Status:** M1–M3 completed. M4 in progress.

---

## Product Summary

The Professor is a retro-styled handheld math game running in the browser.
Players answer math questions (add, subtract, multiply, divide) across 5 difficulty levels, earning scores and progressing through a session of 10 questions per round.

The project also serves as a learning platform for professional Next.js engineering practices: planning, incremental delivery, testing, deployment, and AI-assisted development workflows.

---

## Product Goals

- Deliver a fun, playable math game in the browser.
- Learn and practice professional software engineering workflow end-to-end.
- Learn Next.js App Router, TypeScript, and Tailwind CSS.
- Practice AI-assisted development with Claude Code.
- Practice Railway deployment.
- Practice Playwright automated testing.
- Practice GitHub collaboration workflows.
- Evolve architecture gradually — starting client-only, growing toward a full-stack app.

---

## Recommended Milestone Strategy

The Professor naturally evolves from a pure client-side toy toward a real product with persistence, backend, and user accounts. Milestone ordering reflects this:

1. **Tooling first** — establish project, CI/CD, and AI workflows before building features.
2. **UI before behavior** — visual foundation before wiring game logic.
3. **Client-side behavior before backend** — prove the game works in the browser before adding a server.
4. **Testing after behavior is stable** — automated tests protect working behavior.
5. **Persistence and backend** only after the core game experience is validated.
6. **Auth and user accounts** last — only introduce once the game itself is proven.

This order keeps each milestone small, demonstrable, and independently verifiable.

---

## Milestone List

---

### M1 — Project Setup and Tooling

**Status:** ✅ Completed (branches v1–v5)

#### Goal
Establish the foundational development environment, tooling, and deployment pipeline before writing product features.

#### Scope
- Next.js project initialized (v1: hello-nextjs)
- GitHub repository and tagging workflow (v2)
- Claude AI tooling setup — CLAUDE.md, rules, commands, agents (v3A, v3B)
- GitHub MCP integration (v4)
- Railway deployment — hello world running in production (v5)

#### Out Of Scope
- Game features
- UI design
- Tests
- Database

#### Dependencies
None.

#### Verification Goal
- Next.js app runs locally.
- App deploys to Railway.
- Claude Code tooling works.
- GitHub workflows work.

#### Architecture Evolution
No product architecture yet. Infrastructure only.

---

### M2 — Static Visual UI

**Status:** ✅ Completed (branch v7)

#### Goal
Build the visual shell of the Professor device — the screen, keyboard, and device frame — without any game logic.

#### Scope
- Retro calculator/device aesthetic (amber/brown, LCD style)
- `ProfessorDevice` — physical device shell
- `ProfessorScreen` — 4-line LCD-style display
- `ProfessorKeyboard` — control row + number pad
- `ProfessorButton` — button with hover/press variants
- Static rendering only — no click behavior
- Responsive font sizing based on number magnitude

#### Out Of Scope
- Game state
- Click behavior
- Game logic
- Tests

#### Dependencies
M1 (project must be running).

#### Verification Goal
The device renders correctly in the browser. All UI components are visible. No interaction required.

#### Architecture Evolution
Introduces the component structure:
- `src/components/professor/` — UI components
- `src/app/page.tsx` — entry point

---

### M3 — Client-Side Game Logic

**Status:** ✅ Completed (branch v8 — current)

#### Goal
Wire up full client-side game behavior. The game must be fully playable in the browser with no backend.

#### Scope
- `professor.types.ts` — GameState, Question, GamePhase, Operation types
- `professor.client-engine.ts` — pure game logic
  - `generateQuestion()` / `generateQuestions()`
  - `handleKeyPress()` — full state machine
  - `advanceQuestion()` / `retryQuestion()`
  - `buildScreenLines()` — display formatting
  - `createInitialState()`
- `ProfessorGame.tsx` — stateful component wiring engine to UI
- Game features: 5 levels, 4 operations, 10 questions per session, 3 retry attempts, auto-advance timers
- Unit tests: 40+ test cases covering state transitions, answer validation, retry logic, game-over
- Vitest configuration

#### Out Of Scope
- Backend API
- Database
- Authentication
- Playwright tests
- Score persistence

#### Dependencies
M2 (UI shell must exist).

#### Verification Goal
- Game is fully playable in browser.
- ON/OFF works.
- Level selection works.
- All 4 operations work.
- Retry logic works.
- Score is tracked.
- Game over screen appears after 10 questions.
- Unit tests pass.

#### Architecture Evolution
Introduces the features layer:
- `src/features/professor/` — pure engine logic and types separated from UI

---

### M4 — Playwright Automated Testing

**Status:** 🔲 Planned (next milestone)

#### Goal
Add automated end-to-end tests that protect the core game workflow against regressions.

#### Scope
- Playwright setup and configuration
- E2E tests for:
  - Game start (ON button)
  - Answering a correct question
  - Answering incorrectly (retry behavior)
  - Level switching
  - Game over flow
- Tests run locally and on CI if applicable

#### Out Of Scope
- Backend
- Database
- Authentication

#### Dependencies
M3 (game behavior must be stable).

#### Verification Goal
Playwright tests run and protect the core game flow.

#### Architecture Evolution
Introduces:
- `tests/` or `e2e/` directory
- Playwright configuration

---

### M5 — Backend API

**Status:** 🔲 Future

#### Goal
Add a simple backend API to the application — initially for score submission or session tracking.

#### Scope
- Next.js API route handlers
- Simple in-memory or file-based data (no DB yet)
- Input validation
- Score submission endpoint

#### Out Of Scope
- Database persistence
- Authentication
- User accounts

#### Dependencies
M4 (tests protect existing behavior during architecture evolution).

#### Verification Goal
API responds correctly to score submissions. Game sends data to the backend.

#### Architecture Evolution
Introduces:
- `src/app/api/` — route handlers
- `src/features/professor/` service layer (if business logic grows)

---

### M6 — Persistence (MySQL on Railway)

**Status:** 🔲 Future

#### Goal
Persist game scores and session history across restarts using a real database.

#### Scope
- MySQL database on Railway
- Repository layer for data access
- Score storage and retrieval
- Session history

#### Out Of Scope
- Authentication
- User accounts
- Leaderboard (unless trivially simple)

#### Dependencies
M5 (API layer must exist before adding persistence).

#### Verification Goal
Scores survive server restart. History is viewable.

#### Architecture Evolution
Introduces:
- `src/features/professor/professor.repository.ts`
- MySQL connection via Railway
- Database schema

---

### M7 — Authentication and User Accounts

**Status:** 🔲 Future

#### Goal
Users can log in and track their personal history and scores.

#### Scope
- Login / logout
- Session handling
- Protected API routes
- Per-user score history

#### Out Of Scope
- Leaderboard (separate milestone if needed)
- Social features

#### Dependencies
M6 (persistence must exist before user-specific data).

#### Verification Goal
Users can log in, play, and see their own score history.

#### Architecture Evolution
Introduces authentication middleware and user identity to all protected routes.

---

## Recommended Milestone Order

```
M1 → M2 → M3 → M4 → M5 → M6 → M7
```

**Why this order:**

- M1 first: no product work without a stable dev environment and deployment pipeline.
- M2 before M3: build the visual container before wiring behavior into it.
- M3 before M4: tests only make sense once behavior is stable.
- M4 before M5: automated protection before introducing architectural complexity.
- M5 before M6: validate the API contract before adding a database.
- M6 before M7: users need somewhere to store their data before accounts make sense.

This order keeps risk controlled, progress visible, and each milestone independently demonstrable.

---

## Architecture Evolution Notes

| Milestone | New Complexity Introduced |
|-----------|--------------------------|
| M1 | Project infrastructure, CI/CD, tooling |
| M2 | Component structure, Tailwind styling |
| M3 | Pure engine/feature separation, unit tests, Vitest |
| M4 | Playwright E2E tests |
| M5 | API routes, service layer (if needed) |
| M6 | Repository layer, MySQL, Railway DB |
| M7 | Auth middleware, session handling, protected routes |

Each layer is introduced only when the product actually needs it.

---

## Risks and Open Questions

- **Playwright on Windows**: verify Playwright runs cleanly in the local dev environment before M4 starts.
- **Railway MySQL**: confirm Railway MySQL plan/pricing before committing to M6.
- **Auth provider**: decide between NextAuth, custom JWT, or third-party (Clerk etc.) before starting M7.
- **Score persistence design**: decide what "a session" means before designing the M6 schema.

---

## Suggested Next Step

M3 is complete. The recommended next milestone is:

**M4 — Playwright Automated Testing**

Run:

```text
/plan-feature
```

to plan the Playwright setup and test coverage for the core game flow.

---

## Learning Notes

**Why defer the database to M6?**
Adding a database in M1 or M2 would create complexity before the game exists. The client-side engine in M3 proves the game works without any infrastructure — a much cheaper validation.

**Why test after behavior is stable (M4 after M3)?**
Tests written against unstable behavior become a maintenance burden. M3 finishes the core game logic so M4 tests protect something real.

**Why keep M3 client-only?**
The game's core value — the math question flow — is entirely client-side. Proving it works before adding a backend keeps the architecture minimal and the feedback loop fast.

**Why not build all milestones at once?**
Each milestone can be verified, reviewed, and merged independently. This keeps PRs small, regressions localized, and learning focused.
