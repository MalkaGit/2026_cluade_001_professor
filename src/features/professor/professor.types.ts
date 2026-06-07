/**
 * professor.types.ts
 *
 * Shared types for the Professor math game.
 *
 * Used by:
 *   - professor.client-engine.ts  (game logic)
 *   - ProfessorGame.tsx           (React state)
 *
 * No React, no side effects — pure type definitions.
 */

// ── Game phases ────────────────────────────────────────────────────────────────
// Describes every possible state the device can be in.

export type GamePhase =
  | 'off'          // screen is blank
  | 'playing'      // active question — user types their answer
  | 'correct'      // transient: shows V, auto-advances after 0.5 s
  | 'wrong'        // transient: shows X (attempt 1 or 2), auto-retries after 1 s
  | 'wrong_final'  // transient: shows X on 3rd attempt, auto-advances after 1 s
  | 'gameover';    // all 10 questions done, shows final score

// ── Math operations ────────────────────────────────────────────────────────────

export type Operation = '+' | '-' | '×' | '÷';

// ── A single generated question ────────────────────────────────────────────────

export interface Question {
  a: number;
  b: number;
  operation: Operation;
  answer: number;
}

// ── Full game state ────────────────────────────────────────────────────────────
// One object describes the entire device state at any point in time.

export interface GameState {
  phase: GamePhase;
  level: number;          // 1–5, controls number size (1–10^level)
  operation: Operation;   // currently selected operation
  questions: Question[];  // 10 pre-generated questions for the session
  currentIndex: number;   // which question we are on (0–9)
  currentInput: string;   // digits the user has typed so far
  attempts: number;       // wrong attempts on the current question (0–3)
  score: number;          // number of correct answers this session
}
