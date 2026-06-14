<!-- 4d -->
# Update Plan

Use this command when implementation reality meaningfully differs from the approved feature plan.

Do NOT use for:

* tiny implementation details
* formatting/styling cleanup
* refactoring without behavior change
* variable/function renames
* low-level code cleanup
* trivial internal structure changes

Avoid unnecessary documentation churn.

---

# Goal

Synchronize the feature plan with CURRENT implementation reality.

The updated plan becomes the CURRENT feature truth.

Focus on:

* meaningful behavior changes
* actual UX/runtime behavior
* actual implementation direction
* actual architecture evolution
* updated acceptance criteria
* practical implementation understanding

Prefer:

* focused updates
* concise synchronization
* minimal necessary changes
* implementation-aligned planning
* preserving stable sections

Avoid:

* rewriting entire plans
* speculative future planning
* giant synchronization updates
* low-value implementation detail
* documentation bureaucracy
* verbose synchronization prose

Prefer implementation momentum over documentation perfection.

Prefer the SMALLEST documentation update that restores accurate feature truth.

---

# Documentation Persistence

Follow documentation persistence and naming rules defined in:

```text id="u3g0t8"
.claude/CLAUDE.md
```

Claude MUST immediately create or update the appropriate markdown documentation files during this workflow step.

Documentation files become part of the CURRENT SOURCE OF TRUTH for the workflow.

---

# When To Use

Run `/update-plan` ONLY if:

* behavior changed
* UX changed
* acceptance criteria changed
* scope changed
* architecture changed meaningfully
* implementation direction changed
* operational/runtime behavior changed
* assumptions became invalid
* persistence/integration behavior changed

Examples:

* simplified UX
* changed validation behavior
* removed API
* changed loading/error behavior
* changed persistence strategy
* added async workflow
* changed client/server responsibilities

---

# When NOT To Use

Do NOT use for:

* tiny implementation adjustments
* non-meaningful internal refactors
* formatting/styling cleanup
* local code cleanup
* small naming improvements
* tiny testing changes

Minor implementation details usually do NOT require `/update-plan`.

Do not rewrite stable sections unless behavior actually changed.

---

# Update Complexity

Classify update complexity BEFORE updating.

Update depth and output verbosity MUST scale according to:

* behavior impact
* scope impact
* UX impact
* architecture impact
* operational/runtime impact
* regression risk

---

## Small Update

Examples:

* small UX adjustment
* validation clarification
* tiny workflow refinement
* small acceptance-criteria update

Expected behavior:

* concise update
* focused synchronization
* lightweight output

Avoid rewriting unrelated sections.

---

## Medium Update

Examples:

* workflow behavior change
* API behavior change
* frontend/backend responsibility shift
* meaningful UX update
* scope clarification

Expected behavior:

* updated scope/UX/acceptance criteria
* architecture clarification
* practical regression awareness

---

## Large / High-Risk Update

Examples:

* persistence strategy change
* authentication flow change
* operational/runtime behavior change
* async/distributed workflow change
* major architecture evolution

Expected behavior:

* broader plan synchronization
* operational clarification
* updated engineering direction
* stronger regression awareness

Still avoid speculative redesign documentation.

---

# Core Synchronization Rules

1. Follow `.claude/CLAUDE.md`
2. Review the approved plan
3. Compare plan vs CURRENT implementation reality
4. Classify update complexity
5. Update ONLY affected sections
6. Preserve stable sections whenever possible
7. Keep documentation proportional to actual change
8. Keep plans aligned with actual implementation behavior
9. Avoid speculative future-system planning
10. Prefer concise practical synchronization

Prefer accurate implementation truth over documentation perfection.

---

# Existing Project Patterns

Strongly prefer preserving EXISTING:

* architecture direction
* naming conventions
* workflow structure
* testing strategy
* runtime assumptions

Avoid introducing unnecessary planning structure changes.

---

# Stop Conditions

Stop and ask when:

* expected behavior is unclear
* implementation conflicts with business goals
* architecture direction became inconsistent
* implementation diverged significantly from approved scope
* operational/runtime behavior is unclear
* scope expansion became too large
* the feature likely needs re-planning instead of synchronization

Do NOT invent product assumptions.

---

# Important Rules

Prefer:

* focused updates
* concise synchronization
* implementation-aligned plans
* preserving stable sections
* practical engineering documentation

Avoid:

* giant synchronization rewrites
* speculative architecture
* future-system planning
* implementation-detail overload
* documentation bureaucracy
* architecture perfectionism

---

# Plan Synchronization Principles

The plan should reflect:

* actual UX behavior
* actual scope
* actual architecture direction
* actual workflow behavior
* actual operational/runtime behavior

The plan should NOT become:

* low-level code commentary
* implementation-detail documentation
* giant historical change logs
* speculative future architecture

Goal:

```text id="kax18g"
accurate current implementation truth
```

NOT exhaustive documentation.

---

# Architecture Evolution Guidance

Update architecture sections ONLY when meaningful architectural behavior changed.

Examples:

* service layer introduced/removed
* persistence introduced
* async processing added
* integration boundaries changed
* client/server responsibilities changed

Avoid documenting trivial internal structure changes.

---

# Runtime / Operational Awareness

Update runtime/operational sections ONLY when meaningful behavior changed.

Examples:

* deployment/runtime behavior
* authentication/session handling
* persistence behavior
* concurrency/async workflows
* SSR/client-server behavior
* integration boundaries

Avoid operational over-analysis for small changes.

---

# Output Rules

Output MUST remain proportional to actual change size.

Do NOT regenerate giant plans unnecessarily.

Prefer:

* focused synchronization
* concise updates
* preserving stable sections
* practical implementation alignment

Avoid:

* rewriting unchanged sections
* duplicated output
* giant synchronization prose
* speculative future planning

Prefer updates understandable in a few minutes.

---

# Small Update Output

Required sections:

* Change Summary
* Updated Sections
* Why The Plan Changed
* Recommended Next Step

Expected output:

* concise
* focused
* practical

Avoid architecture essays.

---

# Medium Update Output

Required sections:

* Change Summary
* Scope Changes
* UX Changes
* Acceptance Criteria Changes
* Architecture Changes
* Risks / Implications
* Recommended Next Step

Expected output:

* balanced synchronization detail
* implementation clarity

---

# Large / High-Risk Update Output

Required sections:

* Change Summary
* Scope Changes
* UX Changes
* Acceptance Criteria Changes
* Architecture Evolution
* Operational / Runtime Changes
* Integration Boundary Changes
* Risks / Regression Concerns
* Rollout / Verification Implications
* Recommended Next Step

Expected output:

* broader implementation awareness
* operational clarity
* updated engineering direction

Avoid speculative redesign planning.

---

# Output Format

## Change Summary

Describe briefly:

* what changed
* why the plan became outdated

Focus on meaningful behavior/design changes.

---

## Update Complexity

One of:

* Small
* Medium
* Large / High-Risk

Explain briefly why.

---

## Scope Changes

Describe:

* added scope
* removed scope
* changed scope

Only include meaningful changes.

---

## UX Changes

Describe:

* updated workflows
* changed interactions
* changed validation/runtime behavior

Focus on user-visible behavior.

---

## Acceptance Criteria Changes

Describe:

* updated criteria
* removed criteria
* newly required behavior

Keep concise and measurable.

---

## Architecture Changes

Describe meaningful changes only.

Examples:

* service layer introduced
* persistence introduced
* API responsibility changed
* async processing added
* integration boundaries changed

Avoid low-level implementation detail.

---

## Operational / Runtime Changes

If relevant, describe:

* deployment/runtime changes
* persistence/runtime behavior
* authentication/session handling
* async/concurrency behavior
* SSR/client-server behavior

Only include meaningful operational changes.

---

## Risks / Implications

Describe meaningful:

* regression concerns
* workflow implications
* integration implications
* rollout concerns

Avoid speculative fear lists.

---

## Recommended Next Step

Examples:

* continue implementation
* `/add-tests`
* `/review`
* re-approve updated scope
* split into smaller milestone

---

# Learning Notes

For learning projects only.

Explain briefly:

* why plans evolve
* why implementation reality matters
* why over-documentation is harmful
* why architecture evolves gradually

Keep concise and practical.

---

## Context Used

Examples:

* `.claude/CLAUDE.md`
* `.claude/AGENTS.md`
* `.claude/PROJECT.md`

---

# Important Principle

Prefer:

* accurate implementation truth
* focused synchronization
* practical documentation
* implementation-aligned plans
* proportional process

Avoid:

* documentation bureaucracy
* speculative planning
* rewriting stable sections unnecessarily
* architecture perfectionism
