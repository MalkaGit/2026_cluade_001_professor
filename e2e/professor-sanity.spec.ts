/**
 * e2e/professor-sanity.spec.ts
 *
 * Sanity end-to-end tests for the Professor math game.
 * Verifies the critical user workflow against the real running app:
 *   device renders → game starts → input works → correct/wrong feedback appears.
 *
 * Requires the app to be built first: npm run build
 * Run with: npm run test:e2e
 */

import { test, expect } from '@playwright/test';

test.describe('Professor game', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ── 1. Smoke: device renders ─────────────────────────────────────────────────

  test('device renders with ON/OFF, LVL, and GO buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'on off' })).toBeVisible();
    await expect(page.getByRole('button', { name: /level/i })).toBeVisible();
    await expect(page.getByRole('button', { name: 'go' })).toBeVisible();
  });

  // ── 2. ON/OFF starts the game ────────────────────────────────────────────────

  test('pressing ON/OFF starts the game and shows a question', async ({ page }) => {
    await page.getByRole('button', { name: 'on off' }).click();
    // Playing phase always shows "a OP b = _" — the "= _" is the reliable marker
    await expect(page.locator('.font-mono')).toContainText('= _');
  });

  // ── 3. Digit input and DEL ───────────────────────────────────────────────────

  test('typing digits appears on screen and DEL removes the last one', async ({ page }) => {
    await page.getByRole('button', { name: 'on off' }).click();
    await page.getByRole('button', { name: '4' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await expect(page.locator('.font-mono')).toContainText('42_');

    await page.getByRole('button', { name: 'delete' }).click();
    await expect(page.locator('.font-mono')).toContainText('4_');
    await expect(page.locator('.font-mono')).not.toContainText('42_');
  });

  // ── 4. Wrong answer ──────────────────────────────────────────────────────────

  test('wrong answer shows X WRONG', async ({ page }) => {
    await page.getByRole('button', { name: 'on off' }).click();
    // Default: level 1, op +. Both operands are in [1, 10], so max answer = 20.
    // Submitting 99 is guaranteed to be wrong.
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: '9' }).click();
    await page.getByRole('button', { name: 'go' }).click();
    await expect(page.locator('.font-mono')).toContainText('WRONG');
  });

  // ── 5. Correct answer ────────────────────────────────────────────────────────

  test('correct answer shows V CORRECT and score 1/10', async ({ page }) => {
    await page.getByRole('button', { name: 'on off' }).click();

    // Read the question line from the screen (the one containing "=")
    const questionLine = page.locator('.text-yellow-200').filter({ hasText: '=' }).first();
    await expect(questionLine).toBeVisible();
    const questionText = await questionLine.textContent() ?? '';

    // Parse "a OP b = _" → compute the correct answer
    const match = questionText.match(/(\d+)\s*([+\-×÷])\s*(\d+)/);
    if (!match) throw new Error(`Could not parse question from screen: "${questionText}"`);

    const a = parseInt(match[1], 10);
    const op = match[2];
    const b = parseInt(match[3], 10);
    const answer =
      op === '+' ? a + b
      : op === '-' ? a - b
      : op === '×' ? a * b
      : a / b;  // ÷ always produces a whole number (enforced by question generator)

    // Type the answer digit by digit using the on-screen keyboard
    for (const digit of String(answer)) {
      await page.getByRole('button', { name: digit }).click();
    }
    await page.getByRole('button', { name: 'go' }).click();

    await expect(page.locator('.font-mono')).toContainText('CORRECT');
    await expect(page.locator('.font-mono')).toContainText('Score: 1/10');
  });

  // ── 6. ON/OFF turns the device off ───────────────────────────────────────────

  test('pressing ON/OFF again turns the device off', async ({ page }) => {
    await page.getByRole('button', { name: 'on off' }).click();
    await expect(page.locator('.font-mono')).toContainText('= _');

    await page.getByRole('button', { name: 'on off' }).click();
    // Screen is blank when off
    await expect(page.locator('.font-mono')).not.toContainText('=');
  });
});
