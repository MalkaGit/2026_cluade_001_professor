# Feature-000001-professor-app — Step 02: Visual UI — Feature Plan

**Feature:** Feature-000001-professor-app
**Step:** 02 — visual-ui
**Milestone:** M2 — Static Visual UI
**Complexity:** Medium
**Status:** ✅ Completed (branch v7)
**Retroactively documented:** 2026-06-08

---

## Feature Summary

Build the visual shell of the Professor device — screen, keyboard, device frame, and professor image — as a static UI with no game logic.

The device should look like a real retro educational handheld: amber/brown color scheme, LCD-style display, and a button grid. No behavior is wired at this stage. The goal is a correct, visually convincing render.

---

## Goal

Produce a working visual foundation that:

- Accurately renders the device as designed (based on the reference image).
- Establishes the component structure all future milestones will build on.
- Has no logic — the screen shows placeholder text, buttons render but do nothing meaningful.

---

## Scope

- `ProfessorButton` — single button, styled by variant.
- `ProfessorKeyboard` — control row (ON/OFF, LVL) + 4×4 number pad, renders buttons.
- `ProfessorScreen` — 4-line LCD-style display, monospace yellow text, responsive font sizing.
- `ProfessorDevice` — outer device shell: frame, screen, professor image, keyboard overlaid.
- `ProfessorGame` — page-level wrapper: full-screen yellow background, centers the device. Static mock data passed in.
- `app/page.tsx` — renders `ProfessorGame`.
- Professor face image (`professor-face.png`) placed in `public/`.

---

## Out Of Scope

- Game state or logic.
- Click behavior beyond rendering buttons.
- Real `GameState` or engine.
- Timers, scoring, progression.
- Tests (unit or Playwright).
- Backend or persistence.

---

## UX Flow

1. User opens the app in a browser.
2. Full-screen yellow background renders.
3. The Professor device renders centered on screen — amber border, dark brown body.
4. Screen area shows 4 lines of placeholder LCD-style text (monospace yellow on dark background).
5. Professor face image appears in the middle section.
6. Keyboard overlays the bottom of the image — ON/OFF and LVL buttons in the control row, 4×4 number pad below.
7. Buttons show hover and press (scale-down) visual feedback.
8. No interaction logic — buttons render correctly but don't change anything.

---

## Acceptance Criteria

- [ ] Device frame renders with amber border and dark brown body on a yellow background.
- [ ] Screen shows 4 lines of text in monospace yellow font on a dark display.
- [ ] Font size adjusts automatically when lines are long.
- [ ] ON/OFF and LVL buttons render in the control row.
- [ ] Number pad renders: 0–9, DEL, GO, +, -, ×, ÷.
- [ ] Buttons show hover highlight and active press (scale-95) effect.
- [ ] Professor image renders correctly between screen and keyboard.
- [ ] Layout is responsive — device fits on mobile and desktop.
- [ ] No console errors.
- [ ] All components have clear header comments (purpose, hierarchy, what is drawn).

---

## High-Level Architecture

### Component Tree

```
app/page.tsx
  └── ProfessorGame          (page-level wrapper, static state in v7)
        └── ProfessorDevice  (device shell — frame, image, keyboard)
              ├── ProfessorScreen   (LCD display — 4 text lines)
              └── ProfessorKeyboard (button grid)
                    └── ProfessorButton (individual button)
```

### Frontend

**`ProfessorButton`**
- Leaf component. No logic.
- `variant` prop drives visual style: `number | operator | enter | control`.
- `onClick` wired to parent (no-op in v7).

**`ProfessorKeyboard`**
- Renders control row (2 buttons: ON/OFF, LVL`n`) + 4×4 number pad.
- `level` prop drives LVL label. Static in v7.
- `onKeyPress` callback passed down but not wired to real state.

**`ProfessorScreen`**
- Accepts `lines: string[]` — exactly 4 lines.
- Derives font class from longest line length (`text-2xl` / `text-lg` / `text-base`).
- Renders: black frame → dark display area → 4 lines of yellow monospace text.

**`ProfessorDevice`**
- Composes screen + professor image + keyboard.
- Keyboard floats over the lower portion of the image using `absolute bottom-0`.
- Accepts `state` and `onKeyPress` — static mock passed in v7.

**`ProfessorGame`**
- Full-screen centering wrapper (`min-h-screen flex items-center justify-center`).
- Passes static/mock data to `ProfessorDevice` in v7.
- Will become the stateful game driver in M3.

### Color System

| Token | Value | Used for |
|-------|-------|----------|
| Amber border | `#F5A500` | Device frame, screen frame, buttons |
| Dark brown body | `#7B3F00` | Device body background |
| Dark display | `#2D0A00` | LCD screen background |
| Yellow text | `text-yellow-200` | LCD text |
| Yellow background | `bg-yellow-50` | Page background |

---

## Files Changed

```
src/
  app/
    page.tsx                              (renders ProfessorGame)
  components/
    professor/
      ProfessorGame.tsx                   (page wrapper, static mock data)
      ProfessorDevice.tsx                 (device shell)
      ProfessorScreen.tsx                 (LCD display)
      ProfessorKeyboard.tsx               (button grid)
      ProfessorButton.tsx                 (single button)
public/
  professor-face.png                      (professor face image)
```

---

## Risks / Open Questions (at time of planning)

- **Image sizing**: professor-face.png needs to fill the device area without distortion — use `object-cover object-top`.
- **Keyboard overlay**: floating keyboard over the image needs `absolute` positioning inside a `relative` container with explicit height.
- **Font responsiveness**: long number strings at higher levels need smaller font — resolve with length-based class selection.
- **Mobile fit**: device should stay contained on small screens — use `max-w-sm` with `w-full`.

---

## Initial Testing Ideas

This milestone is visual-only, so automated tests are deferred to M4.

**Manual sanity (performed during v7):**
- Open app in browser — device renders without console errors.
- Check colors match the amber/brown design reference.
- Resize browser window — device stays centered and contained.
- Hover over buttons — highlight appears.
- Click a button — scale-down press effect is visible.
- Check font adjusts when long text is shown on screen.

---

## Learning Notes

**Why build the UI before the logic?**
Building the visual shell first gives a concrete render target. It validates the layout and visual design cheaply before any state management complexity is introduced. M3 then wires behavior into an already-correct visual container.

**Why separate `ProfessorScreen`, `ProfessorKeyboard`, `ProfessorButton` into individual components?**
Each component has a single visual responsibility. This makes M3 straightforward: `ProfessorGame` adds state and passes it down through the already-stable component tree. No structural changes needed in M3.

**Why keep `ProfessorGame` as the stateful root?**
Isolating state at the top-level game component keeps the display components pure/dumb. They receive data as props and call callbacks — they never need to know about `GameState` internals. This is a clean boundary that makes testing easier in M3+.

---

## Next Step

This milestone is complete. The visual shell is in place.

Proceed to:

```text
/plan-feature  →  Step 03: client-side game logic (M3)
```
