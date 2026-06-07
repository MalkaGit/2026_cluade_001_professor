/**
 * professor.client-engine.test.ts
 *
 * Unit tests for the Professor game engine.
 * All functions are pure — no React, no timers, no DOM needed.
 *
 * Run with: npm test
 */

import { describe, it, expect } from 'vitest';
import {
  createInitialState,
  handleKeyPress,
  advanceQuestion,
  retryQuestion,
  generateQuestion,
  generateQuestions,
  buildScreenLines,
} from './professor.client-engine';
import type { GameState, Operation, Question } from './professor.types';

// ── Helpers ────────────────────────────────────────────────────────────────────

/** A playing state with a known question so tests are deterministic. */
function playingStateWith(answer: number): GameState {
  const knownQuestion: Question = { a: 3, b: 2, operation: '+', answer };
  const base = handleKeyPress(createInitialState(), 'ON/OFF'); // off → playing
  return {
    ...base,
    questions: [knownQuestion, ...base.questions.slice(1)],
    currentInput: '',
    attempts: 0,
  };
}

// ── createInitialState ─────────────────────────────────────────────────────────

describe('createInitialState', () => {
  it('starts with device off', () => {
    expect(createInitialState().phase).toBe('off');
  });

  it('starts at level 1 with + operation', () => {
    const s = createInitialState();
    expect(s.level).toBe(1);
    expect(s.operation).toBe('+');
  });
});

// ── ON/OFF ─────────────────────────────────────────────────────────────────────

describe('ON/OFF key', () => {
  it('turns device on from off → playing immediately, level 1, op +', () => {
    const next = handleKeyPress(createInitialState(), 'ON/OFF');
    expect(next.phase).toBe('playing');
    expect(next.level).toBe(1);
    expect(next.operation).toBe('+');
    expect(next.questions).toHaveLength(10);
  });

  it('turns device off from playing → off', () => {
    const playing = { ...createInitialState(), phase: 'playing' as const };
    expect(handleKeyPress(playing, 'ON/OFF').phase).toBe('off');
  });

  it('turns device off from gameover → off', () => {
    const gameover = { ...createInitialState(), phase: 'gameover' as const };
    expect(handleKeyPress(gameover, 'ON/OFF').phase).toBe('off');
  });
});

// ── LVL cycling ────────────────────────────────────────────────────────────────

describe('LVL button', () => {
  it('cycles level 1 → 2', () => {
    const s = handleKeyPress(createInitialState(), 'ON/OFF'); // level 1
    const next = handleKeyPress(s, 'LVL1');
    expect(next.level).toBe(2);
    expect(next.phase).toBe('playing');
    expect(next.questions).toHaveLength(10);
  });

  it('cycles level 5 → 1 (wraps around)', () => {
    const s = { ...handleKeyPress(createInitialState(), 'ON/OFF'), level: 5 };
    const next = handleKeyPress(s, 'LVL5');
    expect(next.level).toBe(1);
  });

  it('resets score and index when cycling level', () => {
    const s = { ...handleKeyPress(createInitialState(), 'ON/OFF'), score: 4, currentIndex: 3 };
    const next = handleKeyPress(s, 'LVL1');
    expect(next.score).toBe(0);
    expect(next.currentIndex).toBe(0);
  });
});

// ── operator / LVL during active game ─────────────────────────────────────────

describe('operator and LVL keys during active phases', () => {
  it('operator during playing → restarts with new op, score reset', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '5');           // typed something
    const next = handleKeyPress(s, '×');
    expect(next.phase).toBe('playing');
    expect(next.operation).toBe('×');
    expect(next.score).toBe(0);
    expect(next.currentInput).toBe('');
    expect(next.questions).toHaveLength(10);
  });

  it('LVL during playing → cycles level and restarts', () => {
    const s = playingStateWith(5); // level 1
    const next = handleKeyPress(s, 'LVL1');
    expect(next.phase).toBe('playing');
    expect(next.level).toBe(2);
    expect(next.score).toBe(0);
  });

  it('operator during wrong → restarts with new op', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');          // → wrong
    const next = handleKeyPress(s, '-');
    expect(next.phase).toBe('playing');
    expect(next.operation).toBe('-');
    expect(next.score).toBe(0);
  });

  it('operator during gameover → restarts with new op', () => {
    const s: GameState = { ...createInitialState(), phase: 'gameover', score: 5, operation: '+', level: 1, questions: [], currentIndex: 0, currentInput: '', attempts: 0 };
    const next = handleKeyPress(s, '÷');
    expect(next.phase).toBe('playing');
    expect(next.operation).toBe('÷');
    expect(next.score).toBe(0);
  });

  it('LVL during gameover → cycles level and restarts', () => {
    const s: GameState = { ...createInitialState(), phase: 'gameover', score: 5, operation: '+', level: 1, questions: [], currentIndex: 0, currentInput: '', attempts: 0 };
    const next = handleKeyPress(s, 'LVL1');
    expect(next.phase).toBe('playing');
    expect(next.level).toBe(2);
  });
});

// ── playing phase — input ──────────────────────────────────────────────────────

describe('playing phase — digit input', () => {
  it('pressing a digit appends it to currentInput', () => {
    const s = playingStateWith(5);
    expect(handleKeyPress(s, '5').currentInput).toBe('5');
  });

  it('pressing two digits builds the input', () => {
    let s = playingStateWith(56);
    s = handleKeyPress(s, '5');
    s = handleKeyPress(s, '6');
    expect(s.currentInput).toBe('56');
  });

  it('DEL removes the last digit', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '5');
    s = handleKeyPress(s, '6');
    s = handleKeyPress(s, 'DEL');
    expect(s.currentInput).toBe('5');
  });

  it('DEL on empty input stays empty', () => {
    const s = playingStateWith(5);
    expect(handleKeyPress(s, 'DEL').currentInput).toBe('');
  });

  it('GO with empty input does nothing', () => {
    const s = playingStateWith(5);
    expect(handleKeyPress(s, 'GO').phase).toBe('playing');
  });
});

// ── playing phase — correct answer ────────────────────────────────────────────

describe('playing phase — correct answer', () => {
  it('GO with correct answer → correct phase, score incremented', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '5');           // type '5'
    s = handleKeyPress(s, 'GO');          // submit
    expect(s.phase).toBe('correct');
    expect(s.score).toBe(1);
    expect(s.currentInput).toBe('');
  });
});

// ── playing phase — wrong answer ──────────────────────────────────────────────

describe('playing phase — wrong answer', () => {
  it('1st wrong → wrong phase, attempts = 1', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '9');           // wrong answer
    s = handleKeyPress(s, 'GO');
    expect(s.phase).toBe('wrong');
    expect(s.attempts).toBe(1);
  });

  it('2nd wrong → wrong phase, attempts = 2', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');          // wrong 1 → wrong phase
    s = retryQuestion(s);                 // simulate 1s timer → back to playing
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');          // wrong 2
    expect(s.phase).toBe('wrong');
    expect(s.attempts).toBe(2);
  });

  it('3rd wrong → wrong_final phase, attempts = 3', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');          // wrong 1 → wrong phase
    s = retryQuestion(s);                 // simulate timer
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');          // wrong 2 → wrong phase
    s = retryQuestion(s);                 // simulate timer
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');          // wrong 3 → wrong_final
    expect(s.phase).toBe('wrong_final');
    expect(s.attempts).toBe(3);
  });
});

// ── wrong phase — transient ────────────────────────────────────────────────────

describe('wrong phase', () => {
  it('wrong phase ignores digit key presses (timer drives retry)', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');           // → wrong
    expect(s.phase).toBe('wrong');
    const after = handleKeyPress(s, '5'); // should be ignored
    expect(after.phase).toBe('wrong');
  });

  it('wrong phase ignores GO', () => {
    let s = playingStateWith(5);
    s = handleKeyPress(s, '9');
    s = handleKeyPress(s, 'GO');           // → wrong
    expect(handleKeyPress(s, 'GO').phase).toBe('wrong');
  });
});

// ── retryQuestion ──────────────────────────────────────────────────────────────

describe('retryQuestion', () => {
  it('returns to playing, clears input, preserves attempts', () => {
    const s: GameState = {
      ...createInitialState(),
      phase: 'wrong',
      attempts: 2,
      currentInput: '',
      currentIndex: 3,
      questions: Array.from({ length: 10 }, () => ({ a: 3, b: 2, operation: '+' as Operation, answer: 5 })),
      score: 1,
    };
    const next = retryQuestion(s);
    expect(next.phase).toBe('playing');
    expect(next.currentInput).toBe('');
    expect(next.attempts).toBe(2);    // preserved
    expect(next.currentIndex).toBe(3); // same question
  });
});

// ── advanceQuestion ────────────────────────────────────────────────────────────

describe('advanceQuestion', () => {
  const questions: Question[] = Array.from({ length: 10 }, () => ({
    a: 3, b: 2, operation: '+' as Operation, answer: 5,
  }));

  it('moves to next question', () => {
    const s: GameState = {
      ...createInitialState(),
      phase: 'correct',
      questions,
      currentIndex: 3,
      score: 2,
      currentInput: '',
      attempts: 0,
    };
    const next = advanceQuestion(s);
    expect(next.phase).toBe('playing');
    expect(next.currentIndex).toBe(4);
    expect(next.currentInput).toBe('');
    expect(next.attempts).toBe(0);
  });

  it('transitions to gameover after the last question (index 9)', () => {
    const s: GameState = {
      ...createInitialState(),
      phase: 'correct',
      questions,
      currentIndex: 9,
      score: 7,
      currentInput: '',
      attempts: 0,
    };
    expect(advanceQuestion(s).phase).toBe('gameover');
  });
});

// ── gameover phase ─────────────────────────────────────────────────────────────

describe('gameover phase', () => {
  it('GO restarts the game with score reset', () => {
    const s: GameState = { ...createInitialState(), phase: 'gameover', score: 8 };
    const next = handleKeyPress(s, 'GO');
    expect(next.phase).toBe('playing');
    expect(next.score).toBe(0);
    expect(next.currentIndex).toBe(0);
    expect(next.questions).toHaveLength(10);
  });
});

// ── transient phases ignore keys ───────────────────────────────────────────────

describe('transient phases (correct, wrong_final)', () => {
  it('correct phase ignores key presses', () => {
    const s: GameState = { ...createInitialState(), phase: 'correct' };
    expect(handleKeyPress(s, '5').phase).toBe('correct');
    expect(handleKeyPress(s, 'GO').phase).toBe('correct');
  });

  it('wrong_final phase ignores key presses', () => {
    const s: GameState = { ...createInitialState(), phase: 'wrong_final' };
    expect(handleKeyPress(s, '5').phase).toBe('wrong_final');
    expect(handleKeyPress(s, 'GO').phase).toBe('wrong_final');
  });
});

// ── generateQuestion ───────────────────────────────────────────────────────────

describe('generateQuestion', () => {
  it('addition: answer equals a + b', () => {
    for (let i = 0; i < 20; i++) {
      const q = generateQuestion('+', 2);
      expect(q.answer).toBe(q.a + q.b);
    }
  });

  it('subtraction: answer is never negative', () => {
    for (let i = 0; i < 20; i++) {
      const q = generateQuestion('-', 2);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBe(q.a - q.b);
    }
  });

  it('multiplication: answer equals a × b', () => {
    for (let i = 0; i < 20; i++) {
      const q = generateQuestion('×', 2);
      expect(q.answer).toBe(q.a * q.b);
    }
  });

  it('division: answer is a whole number with no remainder', () => {
    for (let i = 0; i < 20; i++) {
      const q = generateQuestion('÷', 2);
      expect(q.a % q.b).toBe(0);
      expect(q.answer).toBe(q.a / q.b);
    }
  });
});

// ── generateQuestions ──────────────────────────────────────────────────────────

describe('generateQuestions', () => {
  it('returns exactly 10 questions', () => {
    expect(generateQuestions('+', 1)).toHaveLength(10);
    expect(generateQuestions('÷', 3)).toHaveLength(10);
  });
});

// ── buildScreenLines ───────────────────────────────────────────────────────────

describe('buildScreenLines', () => {
  it('off phase returns 4 empty lines', () => {
    const lines = buildScreenLines(createInitialState());
    expect(lines).toHaveLength(4);
    expect(lines.every((l) => l === '')).toBe(true);
  });

  it('playing phase shows question and input on one line', () => {
    const questions: Question[] = Array.from({ length: 10 }, () => ({
      a: 3, b: 2, operation: '+' as Operation, answer: 5,
    }));
    const s: GameState = {
      ...createInitialState(),
      phase: 'playing',
      questions,
      currentIndex: 0,
      score: 3,
      currentInput: '4',
    };
    const lines = buildScreenLines(s);
    expect(lines.some((l) => l.includes('3 + 2 = 4_'))).toBe(true);
    expect(lines.every((l) => !l.includes('S:'))).toBe(true);
    expect(lines.every((l) => !l.includes('/10'))).toBe(true);
  });

  it('gameover phase shows score', () => {
    const s: GameState = { ...createInitialState(), phase: 'gameover', score: 7 };
    const lines = buildScreenLines(s);
    expect(lines.some((l) => l.includes('7/10'))).toBe(true);
  });
});
