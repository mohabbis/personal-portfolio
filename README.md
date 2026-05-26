# Swift AI Routing Playbook

A practical guide for using the right AI tool for the right Swift/iOS development task.

This playbook is designed for SwiftUI, UIKit, iOS architecture, refactoring, debugging, API integration, testing, and UI polish.

---

## Core Rule

Use **Xcode** for execution.

Use **VS Code and AI tools** for thinking, planning, comparing, and drafting.

### Xcode is for

- Building
- Running
- Debugging
- Simulator testing
- Breakpoints
- Project settings
- Signing

### VS Code / AI tools are for

- Architecture planning
- Refactoring
- Prompt iteration
- Comparing model responses
- Drafting code before moving into Xcode

---

## Model Routing

| Task | Best Tool | Backup |
|---|---|---|
| Architecture | Claude | Qwen |
| Refactoring | Claude | Codex |
| Fast implementation | DeepSeek | Codex / GitHub AI |
| API integration | DeepSeek | Claude |
| Multiple solution options | Qwen | Claude |
| Model comparison | Shimmer / Pool AI | Claude |
| Inline coding speed | Codex / GitHub AI | DeepSeek |
| Broad exploration | You | Claude |

---

## Model Roles

### Claude

Use for architecture, reasoning, refactoring, maintainability, and tradeoff analysis.

Best for:

- MVVM structure
- SwiftUI view decomposition
- Naming cleanup
- Maintainability review
- Debugging complex behavior
- Test strategy

### DeepSeek

Use for fast implementation and concrete code generation.

Best for:

- Codable models
- Networking services
- async/await implementation
- Utility functions
- Validation logic
- Algorithmic code

### Qwen

Use for comparison and alternate approaches.

Best for:

- 2–3 implementation options
- Architecture alternatives
- Navigation strategy comparison
- State management tradeoffs

### Shimmer / Pool AI

Use when comparing outputs across models.

Best for:

- Choosing the strongest implementation
- Combining answers
- Validating uncertain design choices

### Codex / GitHub AI

Use for inline coding speed.

Best for:

- Autocomplete
- Boilerplate
- Small refactors
- File-local edits
- Repetitive Swift patterns

### You

Use for broad exploration and non-code idea generation.

Best for:

- Pattern discovery
- Research-like exploration
- High-level planning
- Alternative framing

---

## Workflow

### 1. Build in Xcode

Start with the real app environment.

- Write the feature
- Run the app
- Reproduce bugs
- Inspect UI
- Use logs, breakpoints, and previews

### 2. Route the task

Choose the model based on the job.

- Architecture → Claude
- Implementation → DeepSeek
- Options → Qwen
- Comparison → Shimmer
- Boilerplate → Codex

### 3. Bring results back to Xcode

Paste, adapt, and integrate code manually.

### 4. Run and verify

Check:

- Simulator behavior
- Compile errors
- Runtime behavior
- UI previews
- Tests
- Edge cases

### 5. Review AI usage

Track which prompts and models actually helped.

---

## Prompt Formula

Use this structure:

```text
Task
Context
Constraints
Expected output
```

Example:

```text
Refactor this SwiftUI screen.

Context:
It shows a profile header and editable settings.

Constraints:
- Do not change behavior
- Keep SwiftUI
- Preserve bindings

Expected output:
- Improved code
- Short explanation of changes
```

---

## Common Task Prompts

### Architecture

```text
Design this iOS feature in SwiftUI using MVVM.

Constraints:
- Keep views simple
- Use async/await
- Make the ViewModel testable
- Keep the structure scalable for future features

Show:
1. Folder structure
2. Responsibilities
3. State flow
4. Risks
```

### Fast Implementation

```text
Write Swift code for this feature.

Requirements:
- Modern Swift
- async/await
- Clear naming
- Production-friendly
- No unnecessary abstractions
```

### Refactor

```text
Refactor this Swift file to improve readability and maintainability.

Do not change behavior.

Explain the main improvements.
```

### Multiple Options

```text
Give me 3 implementation options for this SwiftUI flow.

Compare:
- Complexity
- Maintainability
- Scalability
- Ease of testing
```

### API Integration

```text
Create:
1. Codable models
2. API service
3. async/await fetch function
4. Simple error handling
5. Sample usage in a ViewModel
```

### Testing

```text
Suggest a unit testing strategy for this ViewModel.

Then generate XCTest cases for:
- Success path
- Failure path
- Loading state
- Empty response
```

### Debugging

```text
Help me debug this Swift issue.

Context:
- Expected behavior:
- Actual behavior:
- Relevant code:
- What I already tried:

Give likely root causes in order of probability.
```

---

## Anti-Patterns

Avoid vague prompts like:

```text
fix this
make this better
optimize it
```

Use specific prompts instead:

```text
Refactor this SwiftUI view to reduce nesting and improve readability without changing behavior.

Find potential retain-cycle risks in this code.

Suggest a cleaner naming scheme for this ViewModel and its published properties.
```

---

## Personal Rules

1. Do not use the same model for every task.
2. Use Xcode for execution, not heavy AI reasoning.
3. Use VS Code as the AI sidecar when needed.
4. For important features:
   - Ask one model to design
   - Ask another to implement
   - Ask another to critique
5. Before accepting AI output, verify:
   - Behavior is unchanged
   - Naming is clean
   - Swift style is idiomatic
   - Architecture still makes sense
   - The solution is not overengineered

---

## Quick Routing Cheatsheet

```text
Architecture? → Claude
Refactor? → Claude
Codable/API? → DeepSeek
Fast utility code? → DeepSeek
3 options? → Qwen
Compare answers? → Shimmer / Pool AI
Autocomplete? → Codex / GitHub AI
Big-picture exploration? → You
```

---

## Weekly Review

Once or twice a week, review:

- Which model gave the best architecture help?
- Which model gave the fastest correct code?
- Where did prompts get wasted?
- Which prompt patterns worked best?
- Which prompts should become reusable templates?

Save the best prompts in:

```text
Docs/swift-ai-prompts.md
```

---

## Recommended File Structure

```text
Docs/
├── SWIFT_AI_ROUTING_PLAYBOOK.md
└── swift-ai-prompts.md
```

---

## Default Stack

```text
Xcode → Build, run, debug
Claude → Architecture and refactoring
DeepSeek → Implementation, APIs, models
Qwen → Alternative approaches
Shimmer / Pool AI → Compare model outputs
Codex / GitHub AI → Inline coding speed
VS Code → AI sidecar and prompt workspace
```
