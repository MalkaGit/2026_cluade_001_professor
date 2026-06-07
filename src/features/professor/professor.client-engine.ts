/**
 * professor.client-engine.ts
 *
 * Pure game logic for the Professor math game.
 * No React, no timers, no side effects — only functions.
 *
 * How it fits in the app:
 *   ProfessorGame.tsx (React state + timers)
 *     └─ calls handleKeyPress()  →  new GameState
 *     └─ calls advanceQuestion() →  new GameState  (from useEffect timer)
 *     └─ calls buildScreenLines() → string[]       (for ProfessorScreen)
 *
 * Testing:
 *   All functions here are pure → easy to unit-test without React.
 *   See professor.client-engine.test.ts
 */

import type { GameState, Operation, Question } from './professor.types';

// ─── Constants ─────────────────────────────────────────────────────────────────

const QUESTIONS_PER_GAME = 10;
const OPERATORS: Operation[] = ['+', '-', '×', '÷'];

// ─── Helpers ───────────────────────────────────────────────────────────────────

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isOperator(key: string): key is Operation {
  return (OPERATORS as string[]).includes(key);
}

// ─── Question generation ───────────────────────────────────────────────────────

/**
 * Generates one question for the given operation and level.
 *
 * Level controls the size of numbers: max = 10^level
 *   Level 1 → max 10   (single-digit range)
 *   Level 2 → max 100
 *   Level 3 → max 1000
 *   Level 4 → max 10000
 *   Level 5 → max 100000
 *
 * Special rules:
 *   Subtraction: a >= b so the answer is never negative.
 *   Division: uses sqrt(max) to keep the dividend manageable and answer whole.
 */
export function generateQuestion(operation: Operation, level: number): Question {
  const max = Math.pow(10, level);

  switch (operation) {
    case '+': {
      const a = randomInt(1, max);
      const b = randomInt(1, max);
      return { a, b, operation, answer: a + b };
    }

    case '-': {
      const a = randomInt(1, max);
      const b = randomInt(1, a); // b <= a ensures answer >= 0
      return { a, b, operation, answer: a - b };
    }

    case '×': {
      const a = randomInt(1, max);
      const b = randomInt(1, max);
      return { a, b, operation, answer: a * b };
    }

    case '÷': {
      // Keep dividend manageable: pick b and answer each up to sqrt(max)
      const sqrtMax = Math.max(2, Math.ceil(Math.sqrt(max)));
      const b = randomInt(1, sqrtMax);
      const answer = randomInt(1, sqrtMax);
      const a = b * answer; // guarantees a ÷ b = answer with no remainder
      return { a, b, operation, answer };
    }
  }
}

/** Generates the full set of questions for one game session. */
export function generateQuestions(operation: Operation, level: number): Question[] {
  return Array.from({ length: QUESTIONS_PER_GAME }, () =>
    generateQuestion(operation, level)
  );
}

// ─── Formatting ────────────────────────────────────────────────────────────────

/** Returns the question as a display string, e.g. "7 × 8 = ?" */
export function formatQuestion(q: Question): string {
  return `${q.a} ${q.operation} ${q.b} = ?`;
}

// ─── Screen content ────────────────────────────────────────────────────────────

/**
 * Returns exactly 4 lines to display on the Professor screen.
 * Each phase has its own display layout.
 *
 * Called by ProfessorDevice.tsx → passed as prop to ProfessorScreen.
 */
export function buildScreenLines(state: GameState): string[] {
  switch (state.phase) {
    case 'off':
      return ['', '', '', ''];

    case 'playing': {
      const q = state.questions[state.currentIndex];
      return [
        '',
        `${q.a} ${q.operation} ${q.b} = ${state.currentInput}_`,
        '',
        '',
      ];
    }

    case 'correct':
      return [
        'V CORRECT!',
        `Score: ${state.score}/10`,
        '',
        '',
      ];

    case 'wrong':
      return [
        `X WRONG (${state.attempts}/3)`,
        '',
        '',
        '',
      ];

    case 'wrong_final': {
      const q = state.questions[state.currentIndex];
      return [
        'X WRONG (3/3)',
        `Answer: ${q.answer}`,
        '',
        '',
      ];
    }

    case 'gameover':
      return [
        'GAME OVER',
        `Score: ${state.score}/10`,
        'Press GO',
        'to play again',
      ];
  }
}

// ─── State factory ─────────────────────────────────────────────────────────────

/** Returns the initial state: device is off. */
export function createInitialState(): GameState {
  return {
    phase: 'off',
    level: 1,
    operation: '+',
    questions: [],
    currentIndex: 0,
    currentInput: '',
    attempts: 0,
    score: 0,
  };
}

// ─── State transitions ─────────────────────────────────────────────────────────

/**
 * Advances to the next question, or ends the game if all questions are done.
 *
 * Called from ProfessorGame.tsx via useEffect timer after 'correct' and 'wrong_final' phases.
 * This is a pure function — the timer itself lives in the React component.
 */
/** Returns to playing with the same question and cleared input. Attempts count is preserved. */
export function retryQuestion(state: GameState): GameState {
  return { ...state, phase: 'playing', currentInput: '' };
}

export function advanceQuestion(state: GameState): GameState {
  const nextIndex = state.currentIndex + 1;
  if (nextIndex >= QUESTIONS_PER_GAME) {
    return { ...state, phase: 'gameover' };
  }
  return {
    ...state,
    phase: 'playing',
    currentIndex: nextIndex,
    currentInput: '',
    attempts: 0,
  };
}

/**
 * Core state transition function.
 *
 * Takes the current state and a key string (the label of the button pressed)
 * and returns the new state. Pure — no side effects, no timers.
 *
 * Key strings match button labels in ProfessorKeyboard.tsx:
 *   digits:    '0'–'9'
 *   operators: '+', '-', '×', '÷'
 *   special:   'GO', 'SET', 'ON/OFF', 'LVL1'–'LVL5', '.'
 */
export function handleKeyPress(state: GameState, key: string): GameState {

  // ON/OFF: off → start immediately with level 1, op '+'; any other phase → off
  if (key === 'ON/OFF') {
    if (state.phase === 'off') {
      return {
        ...createInitialState(),
        phase: 'playing',
        operation: '+',
        level: 1,
        questions: generateQuestions('+', 1),
      };
    }
    return { ...state, phase: 'off' };
  }

  // Off: only ON/OFF can wake the device (handled above)
  if (state.phase === 'off') return state;

  // Operator: restart with new op — works from any active phase
  if (isOperator(key)) {
    return {
      ...state,
      phase: 'playing',
      operation: key,
      questions: generateQuestions(key, state.level),
      currentIndex: 0,
      currentInput: '',
      attempts: 0,
      score: 0,
    };
  }
  // LVL button: cycle level 1→2→3→4→5→1 and restart with new level
  if (key.startsWith('LVL')) {
    const nextLevel = (state.level % 5) + 1;
    return {
      ...state,
      phase: 'playing',
      level: nextLevel,
      questions: generateQuestions(state.operation, nextLevel),
      currentIndex: 0,
      currentInput: '',
      attempts: 0,
      score: 0,
    };
  }

  // Transient phases ignore remaining keys — timers in ProfessorGame drive the transition
  if (state.phase === 'correct' || state.phase === 'wrong' || state.phase === 'wrong_final') {
    return state;
  }

  switch (state.phase) {

    case 'playing': {
      if (/^\d$/.test(key)) {
        return { ...state, currentInput: state.currentInput + key };
      }
      if (key === 'DEL') {
        return { ...state, currentInput: state.currentInput.slice(0, -1) };
      }
      if (key === 'GO') {
        if (!state.currentInput) return state;
        const q = state.questions[state.currentIndex];
        const userAnswer = parseInt(state.currentInput, 10);
        if (userAnswer === q.answer) {
          return { ...state, phase: 'correct', score: state.score + 1, currentInput: '' };
        }
        const newAttempts = state.attempts + 1;
        if (newAttempts >= 3) {
          return { ...state, phase: 'wrong_final', attempts: newAttempts, currentInput: '' };
        }
        return { ...state, phase: 'wrong', attempts: newAttempts, currentInput: '' };
      }
      return state;
    }

    case 'gameover': {
      if (key === 'GO') {
        return {
          ...state,
          phase: 'playing',
          questions: generateQuestions(state.operation, state.level),
          currentIndex: 0,
          currentInput: '',
          attempts: 0,
          score: 0,
        };
      }
      return state;
    }

    default:
      return state;
  }
}
