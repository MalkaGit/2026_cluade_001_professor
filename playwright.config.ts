/**
 * playwright.config.ts
 *
 * Playwright configuration for the Professor game e2e tests.
 *
 * webServer: starts `next start` (requires `npm run build` to have been run first).
 * reuseExistingServer: reuses a running server locally so you don't rebuild on every test run.
 *
 * Run: npm run build && npm run test:e2e
 */

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  retries: 0,
  workers: 1,
  reporter: 'list',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
