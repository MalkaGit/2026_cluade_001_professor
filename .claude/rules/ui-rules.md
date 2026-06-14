# UI Rules

Purpose:
Keep UI code simple, readable, consistent, and beginner-friendly.

---

# General Rules

* Prefer simple and readable code over clever code.
* Keep components small and focused.
* Avoid premature optimization.
* Avoid unnecessary abstractions.
* Prefer explicit naming.
* Add to each component proper documetation
  what does it draw on screen (make it clear and explicit)
  what is the heirarch on the screen - which component use it, which components does it use 
  
---

# React Rules

* Prefer functional components.
* Prefer React hooks.
* Keep React state close to where it is used.
* Avoid deeply nested state.
* Avoid unnecessary useEffect usage.
* Prefer derived values over duplicated state.
* Keep component props small and clear.

---

# Component Structure

Preferred order inside component files:

1. imports
2. types/interfaces
3. constants
4. component
5. helper functions

---

# State Management

* Keep business logic outside React components when possible.
* Prefer pure functions for business logic.
* React components should focus on:

  * rendering
  * event handling
  * state wiring

Example:

* question generation logic belongs in:
  professor.client-engine.ts

NOT inside:

* ProfessorGame.tsx

---

# Styling Rules

* Keep styling simple.
* Reuse existing V7 styling where possible.
* Do not introduce large UI libraries.
* Avoid inline styles unless extremely small.
* Prefer consistent spacing.

---

# Naming Rules

Prefer clear names:

Good:

* currentInput
* attemptsUsed
* createRandomQuestion

Avoid:

* data
* temp
* value1
* handleStuff

---

# File Rules

Prefer one responsibility per file.

Example:

* types in professor.types.ts
* client logic in professor.client-engine.ts
* rendering in React components

---

# V8-Specific Rules

For V8:

* Keep everything client-side only.
* Do not add:

  * API
  * database
  * auth
  * Playwright
  * modular monolith
  * complex architecture

Focus only on:

* React state
* TypeScript
* clean UI flow
* simple game behavior

---

# Learning Rules

This project is also for learning.

Therefore:

* prefer readability over advanced patterns
* explain important logic
* avoid unnecessary magic
* keep files beginner-friendly
* add to each file  comment at the top and where needed in the body 
* make future testing easy

---

# Preferred Workflow

1. Plan first
2. Implement small changes
3. Run locally
4. Review
5. Test manually
6. Commit
7. PR
8. Deploy

---

# Important Principle

Simple code that is easy to understand
is better than "smart" code.
