<!-- 4g -->
# Fix Bug

Use this command when fixing a known implementation issue.

Do NOT use for:

* feature redesign
* architecture experimentation
* speculative cleanup
* unrelated refactoring
* broad modernization work

---

# Goal

Fix implementation issues safely and efficiently.

Focus on:

* restoring expected behavior
* identifying the likely root cause
* applying the SMALLEST SAFE FIX
* preserving stable behavior
* reducing regression risk
* restoring delivery momentum quickly

Prefer:

* focused fixes
* understandable fixes
* minimal safe changes
* explicit behavior
* existing project patterns
* incremental fixes

Avoid:

* panic refactors
* speculative redesign
* architecture rewrites
* hidden behavior changes
* cleanup-driven debugging
* unnecessary abstractions

Prefer restoring stable delivery quickly before pursuing broader cleanup.

Bug fixes should NOT silently evolve into feature redesign work.

---

# Documentation Persistence

Follow documentation persistence and naming rules defined in:

```text id="5ut2gs"
.claude/CLAUDE.md
```

Claude MUST immediately create or update the appropriate markdown documentation files during this workflow step.

Documentation files become part of the CURRENT SOURCE OF TRUTH for the workflow.

---

# Inputs

A bug may come from:

* failed automated test
* failed manual verification
* review finding
* runtime/build issue
* regression issue
* developer observation
* user report
* deployment/runtime behavior
* production/staging behavior

If multiple bugs exist:

* triage first
* prioritize by severity/risk
* fix one focused issue at a time whenever possible

---

# Bug Complexity

Classify bug complexity BEFORE fixing.

Fix depth, investigation effort, verification effort, and output verbosity MUST scale according to:

* business impact
* regression risk
* operational/runtime risk
* user impact
* workflow criticality
* persistence/security impact

---

## Small Bug

Examples:

* wrong text
* small UI issue
* missing validation message
* incorrect button state
* tiny conditional logic issue

Expected behavior:

* concise investigation
* focused fix
* lightweight verification
* localized changes

Prefer:

* smallest safe correction
* existing patterns
* local targeted fixes

Avoid:

* architecture changes
* unnecessary abstractions
* broad cleanup
* unnecessary refactors

---

## Medium Bug

Examples:

* state-management issue
* broken workflow
* API validation issue
* incorrect data flow
* integration bug

Expected behavior:

* practical investigation
* targeted fix
* regression awareness
* focused verification
* meaningful regression protection

Avoid over-investigation when a safe practical fix is already clear.

---

## Large / High-Risk Bug

Examples:

* authentication issue
* data-loss issue
* security issue
* persistence corruption
* critical workflow failure
* deployment/runtime issue
* concurrency issue

Expected behavior:

* impact assessment
* operational awareness
* regression-risk analysis
* broader verification
* rollout/runtime awareness
* safer incremental fixes

Prefer incremental stabilization over risky “big bang” rewrites.

---

# Core Fix Rules

1. Follow `.claude/CLAUDE.md`
2. Restate the bug
3. Classify bug complexity
4. Restate expected behavior
5. Restate actual behavior
6. Suggest reproduction steps
7. Identify likely affected areas
8. Investigate the likely root cause
9. Propose the SMALLEST SAFE FIX
10. Reuse existing patterns first
11. Preserve existing stable behavior whenever possible
12. Fix ONLY the approved issue
13. Avoid unrelated changes
14. Explain why the fix works
15. Identify meaningful regression risks
16. Recommend verification after the fix

Recommend:

```text id="6o0gr7"
/add-tests
```

when regression protection is valuable.

Recommend:

```text id="r6q7q1"
/update-plan
```

only if intended behavior changed meaningfully.

---

# Existing Project Patterns

Strongly prefer preserving EXISTING:

* architecture
* naming conventions
* testing patterns
* runtime behavior
* integration patterns

Avoid introducing new architecture directions during bug fixing unless clearly justified.

Consistency is more important than personal preference.

---

# Stop Conditions

Stop and ask when:

* expected behavior is unclear
* requirements conflict
* the root cause remains highly uncertain
* the fix requires major refactoring
* the fix significantly changes architecture
* persistence/data integrity risks emerge
* authentication/security concerns appear
* deployment/runtime behavior is unclear
* fixing the bug expands scope significantly

Do NOT invent critical business behavior.

---

# Debugging Principles

Prefer:

* smallest safe correction
* explicit readable fixes
* focused debugging
* maintainable logic
* practical safe resolution
* preserving stable behavior

Avoid:

* debugging perfectionism
* architecture exploration
* “clean up everything nearby”
* speculative rewrites
* broad refactors during bug fixes

The goal is:

```text id="7ppij9"
safe restoration of expected behavior
```

NOT theoretical system perfection.

---

# Root Cause Guidance

Prefer identifying the REAL root cause rather than hiding symptoms.

However:

* avoid excessive investigation for tiny bugs
* avoid broad rewrites unnecessarily
* balance investigation depth with delivery risk

If the safe practical fix is already clear:

* prefer implementation momentum

---

# Runtime / Operational Awareness

Consider runtime/deployment behavior ONLY when relevant.

Examples:

* SSR/server runtime behavior
* client/server boundaries
* environment configuration
* authentication/session handling
* persistence behavior
* deployment/runtime-specific behavior
* concurrency/async behavior
* caching/state synchronization
* API contract mismatches

Avoid operational over-analysis for small bugs.

---

# Verification Principles

Verification effort MUST scale according to bug severity.

Prefer the SMALLEST USEFUL verification strategy.

Avoid verification inflation.

---

## Small Bug Verification

Examples:

* verify corrected text
* verify button state
* verify validation message
* verify local UI behavior

Usually:

* lightweight manual verification
* existing tests may already be sufficient

Avoid over-testing.

---

## Medium Bug Verification

Examples:

* workflow verification
* regression checks
* state transition validation
* API validation checks

Prefer:

* focused regression verification
* meaningful workflow validation

---

## Large / High-Risk Bug Verification

Examples:

* authentication workflows
* persistence verification
* deployment/runtime verification
* failure-path validation
* concurrency validation
* operational validation

Prefer:

* broader regression awareness
* deployment/runtime checks
* incremental rollout awareness when relevant

---

# Output Rules

Output MUST scale according to bug complexity.

Do NOT generate identical investigation depth for all bugs.

Prefer concise high-signal debugging output.

Avoid:

* giant investigation reports
* repetitive prose
* speculative redesign discussion
* unnecessary architecture analysis

Prefer debugging summaries understandable in a few minutes.

---

# Small Bug Output

Required sections:

* Bug Summary
* Expected Behavior
* Actual Behavior
* Likely Root Cause
* Fix Plan
* Files Changed
* Verification Recommendations
* Summary

Expected output:

* concise
* practical
* focused

---

# Medium Bug Output

Required sections:

* Bug Summary
* Expected Behavior
* Actual Behavior
* Reproduction Steps
* Affected Area
* Likely Root Cause
* Fix Plan
* Files Changed
* Test Impact
* Verification Recommendations
* Regression Risks
* Summary

Expected output:

* balanced debugging detail
* practical regression awareness

---

# Large / High-Risk Bug Output

Required sections:

* Bug Summary
* Impact Assessment
* Expected Behavior
* Actual Behavior
* Reproduction Steps
* Affected Area
* Root Cause Analysis
* Operational / Runtime Considerations
* Fix Plan
* Files Changed
* Regression Risks
* Test Impact
* Verification Recommendations
* Risks Still Uncovered
* Follow-Up Recommendations
* Summary

Expected output:

* broader operational awareness
* stronger regression thinking
* safer production-oriented guidance

Avoid enterprise-style incident-report verbosity.

---

# Output Format

## Bug Summary

Short description of the issue.

---

## Bug Complexity

One of:

* Small
* Medium
* Large / High-Risk

Explain briefly why.

---

## Expected Behavior

Describe what should happen.

---

## Actual Behavior

Describe what currently happens.

---

## Reproduction Steps

Provide simple reproducible steps.

Prefer explicit user/developer actions.

---

## Affected Area

List meaningful:

* feature
* files
* functions/methods
* API route if relevant
* persistence layer if relevant

Avoid speculative affected areas.

---

## Likely Root Cause

Include:

* file
* function/method
* explanation

Focus on the most likely meaningful cause.

Avoid speculative over-analysis.

---

## Fix Plan

Explain:

* smallest safe fix
* why it should work
* why broader changes are intentionally avoided

Prefer focused reasoning.

---

## Files Changed

For each file:

* file
* reason for change

Focus on meaningful modifications only.

---

## Test Impact

Explain:

* tests updated
* regression tests added
* intentionally uncovered risks if relevant

Recommend:

```text id="ckh0pz"
/add-tests
```

only when meaningful regression protection is valuable.

---

## Verification Recommendations

Provide relevant:

* commands
* manual verification ideas
* expected results

Examples:

```bash id="yaz8q8"
npm run build
npm run test
npm run lint
npm run dev
```

Only include relevant commands.

---

## Regression Risks

Explain:

* what could accidentally break
* what deserves additional verification

Focus on meaningful risks only.

Avoid speculative fear lists.

---

## Learning Notes

For learning projects only.

Explain briefly:

* why the bug happened
* important engineering concepts
* how similar bugs can be prevented

Keep concise and practical.

---

## Recommended Next Step

Examples:

* `/add-tests`
* `/update-plan`
* ready for verification
* ready for review

---

## Context Used

Examples:

* `.claude/CLAUDE.md`
* `.claude/AGENTS.md`
* `.claude/PROJECT.md`

---

# Important Principles

Prefer:

* small safe fixes
* regression awareness
* maintainable solutions
* focused debugging
* explicit readable behavior
* practical confidence
* preserving stable behavior

Avoid:

* panic refactors
* speculative redesign
* unnecessary complexity
* architecture inflation
* broad cleanup during bug fixes
* rewriting stable code without strong justification
