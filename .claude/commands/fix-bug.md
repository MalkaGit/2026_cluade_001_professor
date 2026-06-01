# Fix Bug

Use this command when there is one known bug or one focused bug report.

## Goal

Reproduce, understand, and fix the bug with the smallest safe change.

Do not fix unrelated bugs.

Do not refactor unless required for the fix

## Inputs

A bug may come from:

- failed automated test
- failed manual test
- review finding
- GitHub issue
- production log
- user report
- developer observation

If multiple bugs are provided, first triage them and ask which one to fix.

## Instructions

1. Restate the bug.
2. Restate expected behavior.
3. Restate actual behavior.
4. Identify severity:
   - blocker
   - high
   - medium
   - low
5. Suggest reproduction steps.
6. Identify likely files and functions.
7. Find the likely root cause.
8. Propose the smallest safe fix.
9. Add or update a failing test when practical.
10. Fix only the approved bug.
11. Avoid unrelated refactors.
12. Explain why the fix works.
13. Follow `CLAUDE.md`.

## Rules

- Fix one bug at a time.
- Keep the fix small and focused.
- Do not rewrite architecture for a bug fix.
- Reuse existing patterns.
- Use file and function names when possible.
- If the root cause is uncertain, explain assumptions.
- If multiple fixes exist, prefer the safest and simplest one.
- If the bug is actually a missing requirement, say so.
- If the bug requires product clarification, stop and ask.

## Complexity Guidance

### Small Bug

Examples:

- wrong text
- simple UI behavior
- missing validation message
- button state issue

Expected output:
- concise root cause
- small fix
- manual verification or small test

### Medium Bug

Examples:

- API returns wrong status
- form submits invalid data
- user flow breaks
- state bug
- DB value saved incorrectly

Expected output:
- reproduction steps
- root cause
- affected files/functions
- regression test if practical
- verification commands

### Large / High-Risk Bug

Examples:

- authentication bug
- data loss
- security issue
- production outage
- migration bug
- payment/critical workflow bug

Expected output:
- severity
- impact
- rollback/mitigation option
- root cause
- minimal fix
- regression tests
- manual verification
- risks
- recommendation whether to split into separate issues

## Output Format

### Bug Summary

Short bug description.

### Source

Where did this bug come from?

Examples:

- failed test
- review finding
- GitHub issue
- manual test
- production log

### Severity

blocker / high / medium / low

### Expected Behavior

Describe what should happen.

### Actual Behavior

Describe what currently happens.

### Reproduction Steps

1.
2.
3.

### Affected Area

List:

- feature
- files
- functions/methods
- API route if relevant
- DB table if relevant

### Root Cause

Include:

- file
- function/method
- explanation

### Fix Plan

Explain the smallest safe fix before editing.

### Files Changed

For each file:

- file name
- reason for change

### Tests

If tests exist:

- updated tests
- new regression test if practical

If tests do not exist:

Suggest:

- manual verification
- unit test
- Playwright test when relevant

### Verification

Provide:

- commands to run
- manual test steps
- expected result

### Risk / Regression Impact

What could this fix accidentally break?

### Learning Notes

Explain:

- why the bug happened
- which concept caused it
- beginner-friendly explanation
- how to prevent similar bugs

### Suggested Commit Message

Provide one commit message.