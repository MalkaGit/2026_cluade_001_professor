/**
 * ProfessorScreen.test.ts
 *
 * Unit tests for ProfessorScreen display logic.
 * Tests the font-size selection for long vs short number strings.
 *
 * Run with: npm test
 */

import { describe, it, expect } from 'vitest';
import { getFontClass } from './ProfessorScreen';

describe('getFontClass', () => {
  it('returns text-2xl for short lines (≤12 chars)', () => {
    expect(getFontClass(['3 + 2', '', '', ''])).toBe('text-2xl');
    expect(getFontClass(['12 chars___', '', '', ''])).toBe('text-2xl');
  });

  it('returns text-lg for medium lines (13–18 chars)', () => {
    expect(getFontClass(['1234 + 5678 = ?', '', '', ''])).toBe('text-lg');
    expect(getFontClass(['18 chars__________', '', '', ''])).toBe('text-lg');
  });

  it('returns text-base for long lines (>18 chars)', () => {
    expect(getFontClass(['99999 + 99999 = ?  ', '', '', ''])).toBe('text-base');
  });

  it('picks size based on the longest line, not just the first', () => {
    // Line 1 is short, line 3 is long — font must shrink
    expect(getFontClass(['short', '', '99999 + 99999 = ?  ', ''])).toBe('text-base');
  });
});
