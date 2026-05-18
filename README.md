# Demo Repos for AgentRC Talk

Three sample repos at different maturity levels for demonstrating `agentrc readiness` and `agentrc init`.

## Quick Demo

```bash
cd demo-repos

# Level 1 - Bare minimum (expect L1)
npx github:microsoft/agentrc readiness level1-bare

# Level 2 - Has instructions (expect L2)
npx github:microsoft/agentrc readiness level2-documented

# Level 3 - Full adoption (expect L3)
npx github:microsoft/agentrc readiness level3-adopting
```

## Repo Comparison

| Feature | level1-bare | level2-documented | level3-adopting |
|---------|-------------|-------------------|-----------------|
| Basic CI | ✅ | ✅ | ✅ |
| README | ✅ (minimal) | ✅ (detailed) | ✅ (comprehensive) |
| `copilot-instructions.md` | ❌ | ✅ | ✅ (detailed) |
| `AGENTS.md` | ❌ | ❌ | ✅ |
| `CODEOWNERS` | ❌ | ❌ | ✅ |
| Prompt files | ❌ | ❌ | ✅ (3 files) |
| Security scanning | ❌ | ❌ | ✅ |
| TypeScript | ❌ | ❌ | ✅ |

## Demo Flow

### Show the progression:

1. **level1-bare** → "This is what most repos look like. CI works, but no AI context."
   - Run `agentrc readiness` → see L1
   - Run `agentrc init` → see what gets generated
   
2. **level2-documented** → "Added copilot-instructions.md. Now Copilot knows the conventions."
   - Run `agentrc readiness` → see L2
   - Discuss what's missing for L3
   
3. **level3-adopting** → "Full L3 setup. AGENTS.md, prompts, CODEOWNERS, security."
   - Run `agentrc readiness` → see L3
   - Discuss path to L4 (MCP servers, custom agents)

### Show init on bare repo:

```bash
cd level1-bare
npx github:microsoft/agentrc init --dry-run   # Preview what would be generated
npx github:microsoft/agentrc init              # Actually generate
npx github:microsoft/agentrc readiness         # See level improve
```
