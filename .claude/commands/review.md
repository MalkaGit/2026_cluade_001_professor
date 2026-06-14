<!-- 4f -->
# Review

Review the current implementation like a senior engineer.

This review happens before:

* final verification
* PR preparation

Do NOT use for:

* trivial low-risk tweaks already clearly safe
* style-only reviews
* speculative architecture brainstorming

---

# Goal

Review the implementation quality and identify meaningful risks before PR.

Focus on:

* correctness
* maintainability
* readability
* regression risks
* acceptance criteria coverage
* practical engineering quality
* proportional architecture
* delivery safety

The review MUST remain proportional to:

* feature complexity
* business impact
* regression risk
* operational/runtime impact
* project scale

Prefer practical confidence over theoretical purity.

Avoid unnecessary redesign discussions.

Avoid architecture perfectionism.

---

# Inputs

Review against:

* approved feature plan
* current implementation
* acceptance criteria
* current testing truth
* `.claude/CLAUDE.md`

If relevant, also consider:

* runtime/deployment behavior
* integration behavior
* operational concerns

---

# Review Complexity

Classify feature complexity BEFORE reviewing.

Review depth and output verbosity MUST scale according to:

* feature complexity
* business impact
* regression risk
* operational/runtime impact
* user impact

---

## Tiny Feature

Examples:

* CSS tweak
* text change
* tiny validation
* isolated UI adjustment
* tiny bug fix

Expected behavior:

* concise review
* correctness validation
* lightweight maintainability review
* minimal architecture discussion

Avoid:

* speculative architecture feedback
* giant review reports
* unnecessary optimization discussion
* over-analysis

Prefer:

* correctness
* readability
* scope validation
* practical maintainability

Tiny features do NOT require enterprise-level review rigor.

---

## Medium Feature

Examples:

* CRUD workflow
* API integration
* reusable logic
* frontend/backend workflow
* stateful UI behavior

Expected behavior:

* balanced review depth
* maintainability feedback
* regression awareness
* architecture consistency review
* testing assessment

---

## Large / High-Risk Feature

Examples:

* authentication
* payments
* migrations
* persistence-heavy features
* distributed systems
* runtime-sensitive behavior

Expected behavior:

* broader system awareness
* stronger regression analysis
* operational/runtime awareness
* security/performance considerations
* rollout/deployment awareness

Still avoid speculative perfectionism.

---

# Core Review Rules

1. Follow `.claude/CLAUDE.md`
2. Review implementation against approved scope
3. Classify review complexity
4. Prioritize correctness and regression risk
5. Prefer practical maintainability feedback
6. Keep recommendations proportional to project size
7. Reuse existing project patterns as baseline
8. Distinguish blocking vs non-blocking findings
9. Avoid unrelated redesign suggestions
10. Prefer practical engineering over theoretical purity

Prefer preserving delivery momentum unless risk clearly justifies interruption.

Prefer consistency with existing project patterns over theoretically cleaner alternatives.

Do NOT escalate low-impact maintainability concerns into blocking issues.

Do NOT recommend rewriting stable working code without strong justification.

---

# Existing Project Patterns

Strongly prefer preserving EXISTING:

* folder structure
* architecture
* naming conventions
* testing patterns
* runtime patterns

Avoid introducing alternative architecture directions unless clearly justified.

Team consistency is more important than personal preference.

---

# Stop Conditions

Stop and ask when:

* requirements are unclear
* acceptance criteria conflict
* intended behavior is ambiguous
* architecture direction is unclear
* implementation scope unexpectedly expanded
* runtime/deployment assumptions are unclear
* findings depend on unknown business rules

Do NOT invent product assumptions.

---

# Review Principles

Prefer:

* focused practical review
* correctness
* maintainability
* readability
* regression awareness
* incremental improvement
* proportional feedback
* high-signal findings

Avoid:

* architecture perfectionism
* speculative redesign
* nitpick overload
* unnecessary framework discussions
* “rewrite everything” feedback
* review bureaucracy

Prefer meaningful risks over maximizing comment count.

---

# Scope Review

Verify:

* approved scope was respected
* out-of-scope features were not accidentally added
* unrelated refactors were minimized
* architecture stayed proportional

Flag unnecessary scope expansion when meaningful.

---

# Correctness Review

Check:

* logic bugs
* incorrect UX behavior
* runtime issues
* integration issues
* failure-path behavior
* state-management issues
* edge cases appropriate to feature complexity

Prioritize meaningful workflow correctness.

Avoid speculative edge-case hunting for tiny features.

---

# Code Quality Review

Check:

* readability
* maintainability
* naming
* duplication
* complexity
* cohesion
* consistency with project patterns

Prefer:

* explicit readable logic
* focused responsibilities
* maintainable structure
* understandable flow

Avoid:

* clever-but-hard-to-maintain solutions
* unnecessary abstractions
* architecture inflation
* premature optimization

---

# Architecture Review

Check:

* responsibility boundaries
* consistency with project patterns
* unnecessary layers
* implementation proportionality
* maintainability risks

Only discuss missing layers when clearly justified.

Prefer:

* simple architecture
* gradual architecture evolution
* consistency with existing systems

Avoid:

* speculative scaling
* future-system redesign
* architecture purity arguments

---

# Runtime / Operational Review

If relevant, review:

* client/server boundaries
* SSR/runtime behavior
* deployment/runtime behavior
* persistence behavior
* authentication/session handling
* concurrency/async behavior
* API contract behavior

Only discuss operational concerns when justified by the feature.

Avoid operational over-analysis for small features.

---

# Next.js Review

If relevant, review:

* App Router usage
* client vs server components
* route handlers
* hydration concerns
* server/client boundaries
* unnecessary client components
* unnecessary server complexity

For learning projects:

* explain findings clearly
* prefer beginner-friendly explanations

Keep concise.

---

# Testing Review

Check:

* important behavior is protected
* acceptance criteria are covered
* regression risks are addressed
* testing depth matches feature complexity
* testing strategy remains proportional

Do NOT require excessive coverage.

Do NOT recommend unnecessary Playwright/E2E.

Prefer meaningful regression protection.

---

# Security Review

If relevant, check:

* secrets
* unsafe logging
* input validation
* authentication
* authorization
* trust boundaries
* sensitive-data exposure

Keep proportional to project scope.

Avoid enterprise-grade security audits for tiny features.

---

# Performance Review

Check:

* unnecessary re-renders
* duplicate work
* expensive operations
* unnecessary API calls
* oversized client components
* wasteful processing

Only flag meaningful concerns.

Avoid premature optimization discussions.

---

# Review Prioritization

Prioritize findings by:

* correctness impact
* regression risk
* user impact
* operational/runtime impact
* maintainability impact

Avoid flooding the review with low-value comments.

Prefer concise high-signal review feedback.

---

# Output Rules

Output MUST scale according to feature complexity.

Do NOT generate identical review depth for all features.

Prefer concise practical review output.

Avoid:

* giant review reports
* repetitive prose
* speculative redesign discussion
* low-value nitpicks

Prefer reviews understandable in a few minutes.

---

# Tiny Feature Output

Required sections:

* Overall Assessment
* Scope Validation
* Blocking Issues
* Non-Blocking Suggestions
* Recommended Next Step

Expected output:

* concise
* practical
* focused

Architecture discussion should usually be minimal.

---

# Medium Feature Output

Required sections:

* Overall Assessment
* Acceptance Criteria Coverage
* Blocking Issues
* Non-Blocking Suggestions
* Testing Findings
* Architecture Findings
* Regression Risks
* Recommended Next Step

Expected output:

* balanced engineering feedback
* meaningful maintainability discussion

---

# Large / High-Risk Feature Output

Required sections:

* Overall Assessment
* Acceptance Criteria Coverage
* Blocking Issues
* Non-Blocking Suggestions
* Architecture Findings
* Runtime / Operational Findings
* Security Findings
* Performance Findings
* Testing Findings
* Regression Risks
* Risks Still Uncovered
* Recommended Next Step

Expected output:

* broader system awareness
* operational clarity
* stronger regression awareness

Avoid speculative redesign discussions.

---

# Output Format

## Overall Assessment

Examples:

* ready for verification
* mostly ready
* one blocking issue found
* several maintainability concerns

Keep concise and actionable.

---

## Acceptance Criteria Coverage

For each acceptance criterion:

* implemented?
* comments

Focus on meaningful behavior gaps only.

---

## Scope Validation

Verify:

* approved scope respected
* no accidental scope expansion
* unrelated refactors minimized

---

## Blocking Issues

For each issue:

* severity
* file
* method/function
* issue
* why it matters
* suggested fix

Only include meaningful blockers.

Avoid speculative blockers.

---

## Non-Blocking Suggestions

Optional improvements only.

Keep focused and practical.

Avoid style-only nitpicks unless meaningful.

---

## Testing Findings

Review:

* missing important coverage
* regression risks
* edge-case gaps
* incorrect testing strategy

Recommend:

```text id="4ty2i9"
/add-tests
```

when testing truth should evolve.

Avoid demanding unnecessary coverage.

---

## Architecture Findings

List meaningful:

* maintainability risks
* responsibility issues
* unnecessary complexity
* missing boundaries when justified

Avoid speculative redesign.

---

## Runtime / Operational Findings

List meaningful concerns only.

Examples:

* SSR/runtime issues
* deployment concerns
* async/concurrency concerns
* persistence/runtime inconsistencies

Only include justified concerns.

---

## Security Findings

List important concerns only.

Avoid speculative enterprise-grade security lists.

---

## Performance Findings

List meaningful concerns only.

Avoid premature optimization suggestions.

---

## Regression Risks

Explain:

* what could accidentally break
* what deserves additional verification

Focus on meaningful workflow risks.

---

## Learning Notes

For learning projects only.

Explain briefly:

* why important findings matter
* engineering concepts involved
* why some suggestions are intentionally NOT recommended

Keep concise and practical.

---

## Recommended Next Step

Examples:

* `/fix-bug`
* `/add-tests`
* `/update-plan`
* ready for verification
* ready for PR

---

## Context Used

Examples:

* `.claude/CLAUDE.md`
* `.claude/AGENTS.md`
* `.claude/PROJECT.md`

---

# Important Principles

Prefer:

* focused practical review
* correctness
* maintainability
* readability
* regression awareness
* proportional review depth
* practical engineering feedback

Avoid:

* architecture perfectionism
* speculative redesign
* overengineering
* review bureaucracy
* low-value nitpicks
* rewriting stable code without strong justification
