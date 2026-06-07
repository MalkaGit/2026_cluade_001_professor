/**
 * ProfessorGame.tsx
 *
 * Top-level game component. The only stateful component in the Professor feature.
 *
 * Screen position:
 *   Full page — centers ProfessorDevice on a yellow background.
 *
 * What it does:
 *   - Owns the GameState via useState.
 *   - Handles button presses by calling the pure engine and updating state.
 *   - Manages the two auto-advance timers:
 *       correct      → advance after 0.5 s
 *       wrong_final  → advance after 1.0 s
 *
 * Used by: app/page.tsx
 * Uses:    ProfessorDevice, professor.client-engine, professor.types
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import ProfessorDevice from './ProfessorDevice';
import type { GameState } from '@/features/professor/professor.types';
import * as engine from '@/features/professor/professor.client-engine';

export default function ProfessorGame() {
  const [state, setState] = useState<GameState>(engine.createInitialState);

  // ── Auto-advance timers ──────────────────────────────────────────────────────
  // 'correct'     → show V for 0.5 s, then move to next question
  // 'wrong_final' → show X for 1.0 s, then move to next question
  // currentIndex is in the deps so the effect re-fires if the same phase
  // appears on two consecutive questions (phase stays 'correct' but index changes).
  useEffect(() => {
    if (state.phase === 'correct') {
      const t = setTimeout(() => setState((s) => engine.advanceQuestion(s)), 500);
      return () => clearTimeout(t);
    }
    if (state.phase === 'wrong') {
      const t = setTimeout(() => setState((s) => engine.retryQuestion(s)), 1000);
      return () => clearTimeout(t);
    }
    if (state.phase === 'wrong_final') {
      const t = setTimeout(() => setState((s) => engine.advanceQuestion(s)), 1000);
      return () => clearTimeout(t);
    }
  }, [state.phase, state.currentIndex, state.attempts]);

  // ── Key handler ──────────────────────────────────────────────────────────────
  // Passed down to ProfessorKeyboard via ProfessorDevice.
  // Calls the pure engine and replaces state with the returned value.
  const handleKey = useCallback((key: string) => {
    setState((s) => engine.handleKeyPress(s, key));
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-yellow-50 p-4">
      <ProfessorDevice state={state} onKeyPress={handleKey} />
    </div>
  );
}
