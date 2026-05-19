# AgentRC Demo Repos

Three sample repos at different AI-readiness levels for demonstrating [`agentrc`](https://github.com/microsoft/agentrc).

> **The story:** *"Your repo is healthy — but AI agents are flying blind. Let's fix that."*

Most enterprise repos are like `level1-brownfield`: great engineering practices, CI, tests, linting — but zero AI context. Copilot and other agents have no idea how your codebase works. AgentRC fixes that in minutes.

---

## Quick Setup

```bash
# Install agentrc once
npm install -g @microsoft/agentrc
```

---

## Demo Flow (~5 minutes)

### 1. Measure — see where you stand

```bash
# A healthy brownfield repo — but AI Tooling is 0%
agentrc readiness level1-brownfield --visual
# Expected: strong Repo Health, 0% AI Tooling

# A repo with hand-written instructions — marginal AI improvement
agentrc readiness level2-documented --visual
# Expected: same Repo Health, ~13% AI Tooling

# A repo with full AI adoption — but agentrc finds an issue
agentrc readiness level3-adopting --visual
# Expected: strong scores, but AI Tooling flags diverging instruction files
```

### 2. Generate — fix the gap in level1

```bash
cd level1-brownfield

# Preview what agentrc will generate
agentrc init --dry-run

# Generate AGENTS.md + agentrc.eval.json
agentrc init
```

### 3. Evaluate — test if the instructions actually help

```bash
# Run immediately after init — tests instruction quality live
agentrc eval
```

### 4. Re-measure — see the improvement

```bash
agentrc readiness --visual
# AI Tooling jumps from 0% → significantly higher
```

### 5. Maintain — fix the divergence in level3

```bash
cd ../level3-adopting

# agentrc already told us: AGENTS.md and copilot-instructions.md are diverging
# Fix: consolidate by copying AGENTS.md content into copilot-instructions.md
cp AGENTS.md .github/copilot-instructions.md

# Re-run — consistency check now passes
agentrc readiness --visual
```

---

## Expected Readiness Scores

| | level1-brownfield | level2-documented | level3-adopting |
|--|--|--|--|
| **Repo Health** | 🟢 High | 🟢 High | 🟢 High |
| **AI Tooling** | 🔴 0% | 🟡 Low | 🟡 Moderate (divergence flag) |
| **After `agentrc init`** | 🟢 Improved | — | — |
| **After fixing divergence** | — | — | 🟢 Improved |

> **Note:** Exact percentages depend on the agentrc version. Run `agentrc readiness --visual` to see current scores.

---

## Repo Comparison

| Feature | level1-brownfield | level2-documented | level3-adopting |
|---------|-------------------|-------------------|-----------------|
| CI | ✅ | ✅ | ✅ (+ security job) |
| Lockfile | ✅ | ✅ | ✅ |
| ESLint | ✅ | ✅ | ✅ |
| Prettier | ✅ | ✅ | ✅ |
| TypeScript | ❌ | ❌ | ✅ |
| CODEOWNERS | ✅ | ✅ | ✅ |
| SECURITY.md | ✅ | ✅ | ✅ |
| Dependabot | ✅ | ✅ | ✅ |
| Observability (pino) | ✅ | ✅ | ✅ |
| `copilot-instructions.md` | ❌ | ✅ (basic) | ✅ (detailed) |
| `AGENTS.md` | ❌ | ❌ | ✅ |
| Prompt files | ❌ | ❌ | ✅ (3 files) |
| `.vscode/mcp.json` | ❌ | ❌ | ✅ (stub) |

---

## Maintain in CI

Add a readiness gate to your CI pipeline so AI context doesn't drift as the codebase evolves:

```yaml
# .github/workflows/agentrc.yml
- name: Check AI readiness
  run: npx github:microsoft/agentrc readiness --fail-level 2 --json
```

This fails the build if the repo drops below Level 2 — enforcing a minimum AI context standard across PRs.

---

## Path to Level 4+

Level 3 includes a `.vscode/mcp.json` stub showing how to connect AI agents to live data sources (databases, APIs, GitHub) via MCP servers. Uncomment and configure to reach Level 4 (Optimized).

