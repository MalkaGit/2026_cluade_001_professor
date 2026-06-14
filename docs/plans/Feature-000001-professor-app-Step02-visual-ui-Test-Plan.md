# Feature-000001-professor-app — Step 02: Visual UI — Test Plan

**Feature:** Feature-000001-professor-app
**Step:** 02 — visual-ui
**Milestone:** M2 — Static Visual UI
**Complexity:** Medium
**Status:** ✅ Tests added
**Date:** 2026-06-08

---

## Testing Summary

The visual UI step is mostly presentational — device shell, LCD screen, keyboard, buttons. The only testable logic is `getFontClass` in `ProfessorScreen`, which picks a Tailwind font-size class based on the longest line length. This logic directly affects display correctness for large numbers at higher levels.

4 unit tests were added for that function. Playwright is deferred to M4 per V8 constraints. Manual sanity tests are defined below.

---

## Feature Complexity

**Medium** — multiple components, visual layout composition, one piece of real logic (`getFontClass`). Most of the implementation is presentational and not unit-testable without a DOM.

---

## Behavior Protected

- Font size shrinks correctly when screen lines carry long number strings (levels 3–5).
- The longest line drives font selection, not just the first line.
- Short lines use `text-2xl` (readable, large); medium lines use `text-lg`; long lines use `text-base`.

If `getFontClass` regresses, numbers like `99999 + 99999 = ?` would render at full size and overflow the LCD display.

---

## Related Acceptance Criteria

- Font size adjusts automatically when lines are long. ✅ Covered by unit tests.
- Device renders correctly, buttons show press/hover effects. ✅ Covered by manual sanity.

---

## Manual Sanity Test Definitions

---

### Manual Sanity Test: Device renders correctly

**Purpose:** Confirm the full device shell renders on screen without errors.

**Preconditions:**
- App running locally (`npm run dev`)

**Steps:**
1. Open `http://localhost:3000` in a browser.
2. Observe the full page.

**Expected Result:**
- Full-screen yellow background renders.
- Device frame visible: amber border, dark brown body.
- Professor face image renders in the middle section.
- Screen area shows 4 lines of yellow monospace text on a dark background.
- No console errors in browser DevTools.

**Screenshot:** Optional — capture the initial device render.

---

### Manual Sanity Test: Keyboard renders all buttons

**Purpose:** Confirm all expected keys are visible and correctly labeled.

**Preconditions:**
- App running locally.

**Steps:**
1. Open `http://localhost:3000`.
2. Inspect the keyboard area.

**Expected Result:**
- Control row: `ON/OFF` and `LVL1` buttons visible.
- Number pad: digits 0–9 visible.
- Special keys visible: `DEL`, `GO`, `+`, `-`, `×`, `÷`.
- All 18 buttons present.

**Screenshot:** Optional.

---

### Manual Sanity Test: Button press effect

**Purpose:** Confirm buttons give visible tactile feedback.

**Preconditions:**
- App running locally.

**Steps:**
1. Open `http://localhost:3000`.
2. Hover over any button.
3. Click and hold any button.

**Expected Result:**
- Hover: button background brightens slightly.
- Press: button scales down (shrinks slightly — `active:scale-95` effect).

**Screenshot:** Not needed.

---

### Manual Sanity Test: Responsive layout

**Purpose:** Confirm the device stays contained on small and large screens.

**Preconditions:**
- App running locally.

**Steps:**
1. Open `http://localhost:3000` on a desktop browser.
2. Resize the browser window to a narrow mobile width (~375px).
3. Observe layout at both sizes.

**Expected Result:**
- At desktop: device is centered with yellow padding on both sides.
- At mobile: device fills the available width, no horizontal scroll.
- Device never overflows the viewport.

**Screenshot:** Optional — capture both sizes side by side.

---

## Automated Tests Added

### `ProfessorScreen.test.ts`

| Test | Scenario | Expected |
|------|----------|----------|
| `getFontClass — short lines` | Lines ≤12 chars | `text-2xl` |
| `getFontClass — medium lines` | Lines 13–18 chars | `text-lg` |
| `getFontClass — long lines` | Lines >18 chars | `text-base` |
| `getFontClass — longest line wins` | Mix of short and long lines | Picks class for the longest |

**Test type:** Unit (pure function, no DOM)
**File:** `src/components/professor/ProfessorScreen.test.ts`

---

## Automated Test Decision

**Decision:** Unit tests added. Playwright deferred.

**Reason:**
- Vitest is configured with `environment: 'node'` — no DOM available for component rendering.
- The only testable pure logic in the visual UI is `getFontClass`.
- V8-specific constraints in `ui-rules.md` explicitly defer Playwright to M4.
- Presentational rendering (button colors, layout) is better verified by manual sanity at this stage.

**Test levels used:**
- ✅ Unit — `getFontClass` logic
- ⬜ Component — deferred (no DOM environment)
- ⬜ Integration — not applicable
- ⬜ Playwright — deferred to M4

---

## Files Changed

| File | Change |
|------|--------|
| `src/components/professor/ProfessorScreen.tsx` | Exported `getFontClass` for unit testing |
| `src/components/professor/ProfessorScreen.test.ts` | Created — 4 unit tests |
| `docs/plans/Feature-000001-professor-app-Step02-visual-ui-Test-Plan.md` | Created — this file |

---

## How To Run

```bash
npm test
```

All 42 tests should pass (38 engine tests + 4 new screen tests).

---

## Regression Risk Covered

These tests prevent:

- `getFontClass` thresholds being accidentally changed (e.g., `<= 12` becoming `<= 10`), which would cause large numbers to overflow the LCD display at level 3+.
- The "longest line wins" logic being broken — if only the first line is checked, a short first line with a long third line would silently use the wrong font size.

---

## Coverage Decisions

**Covered:**
- `getFontClass` — the only pure logic in the visual UI components.

**Intentionally NOT covered:**
- Button rendering / variant styles — presentational CSS, no logic to protect.
- Component hierarchy rendering — no DOM in the test environment; manual sanity is sufficient.
- Keyboard layout constants — static data, no logic to break.
- `ProfessorDevice` image layout — verified manually and visually.

**Playwright deferred to M4** — will cover: device render on page load, button press feedback, responsive layout.

---

## Learning Notes

**Why export `getFontClass` to test it?**
It's the only real decision logic in the visual components — it maps line length to a CSS class. If it breaks, the display silently becomes unreadable at higher levels. Exporting it for testing is a small, justified trade-off: one `export` keyword in exchange for a protected invariant.

**Why not test the whole component?**
The vitest config uses `environment: 'node'`, which has no DOM. Rendering React components requires `jsdom` or `happy-dom`. Adding that infrastructure for a static UI milestone would be overengineering — manual sanity provides enough confidence at this stage.

**Why not Playwright now?**
V8 rules explicitly exclude Playwright. M4 is the designated milestone for E2E tests. Adding it early would create maintenance before the game logic is stable enough to write reliable assertions against.

---

## Suggested Commit Message

```
test: add unit tests for ProfessorScreen font size logic (Step02 visual UI)
```
