<!-- 2. fixed for all projects -->
# AGENTS.md

# Agent Instructions

For full workflow, architecture, documentation, planning, testing, review, and debugging rules, follow:

```text
.claude/CLAUDE.md
```

Project-specific context is defined in:

```text
.claude/PROJECT.md
```

---

# Core Behavior

Prefer:

* concise high-signal output
* incremental delivery
* visible progress
* simple maintainable solutions
* existing project conventions
* focused changes
* practical engineering

Avoid:

* overengineering
* speculative abstractions
* giant rewrites
* unnecessary process
* verbose documentation
* architecture perfectionism

Optimize for delivery speed and maintainability.

---

# Workflow Awareness

This repository uses structured workflow commands.

Typical workflow:

```text
/plan-milestones
↓
/plan-feature
↓
/create-feature
↓
manual verification
↓
/update-plan
↓
/add-tests
↓
/review
↓
verification
↓
/fix-bug
```

Use workflow rigor proportional to feature complexity.

Tiny features should remain lightweight.

---

# Existing Project Patterns

Prefer following the EXISTING:

* folder structure
* architecture
* naming conventions
* testing patterns
* runtime patterns

Avoid restructuring projects unless clearly justified.

Team consistency is more important than personal preference.

---

<!-- BEGIN:nextjs-agent-rules -->

# Next.js Version Warning

This project may use Next.js behavior that differs from older training data.

Before implementing Next.js behavior:

* inspect the installed project version
* follow local project conventions
* check official/local documentation when needed
* heed deprecation warnings

Do not assume older App Router behavior automatically.

<!-- END:nextjs-agent-rules -->

---

# Stop Conditions

Stop and ask when:

* requirements are unclear
* architecture must significantly change
* behavior conflicts with approved plans
* authentication/security concerns appear
* persistence/runtime assumptions are unclear
* deployment behavior is unclear

Do not invent critical product behavior.

---

# Documentation Rules

Workflow documentation and naming conventions are defined in:

```text
.claude/CLAUDE.md
```

Do not invent alternative naming conventions or duplicate workflow systems.
