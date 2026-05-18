# ACME API - Agent Instructions

## Build Commands
```bash
npm install      # Install dependencies
npm run build    # Compile TypeScript → dist/
npm start        # Start server (requires build first)
npm run dev      # Start with ts-node (development)
```

## Test Commands
```bash
npm test                    # Run all tests with coverage
npm test -- --watch         # Watch mode
npm test -- -t "user"       # Run tests matching "user"
```

## Lint & Type Check Commands
```bash
npm run lint               # Run ESLint
npm run lint -- --fix      # Auto-fix issues
npm run typecheck          # TypeScript check (no emit)
npm run format             # Prettier format
```

## PR Conventions
- Title format: `feat|fix|docs|refactor: short description`
- Link related issues with `Closes #123`
- Ensure all CI checks pass before requesting review
- Include test coverage for new functionality

## Common Patterns

### Adding a new endpoint
1. Add route handler in `src/index.ts` with Request/Response types
2. Add or update data layer in `src/users.ts`
3. Add tests in `src/index.test.ts`
4. Update README.md API table

### Error handling
```typescript
if (!isValid(input)) {
  return res.status(400).json({ error: 'Description of error' });
}
```

### Response shape
All endpoints return `{ data: ... }` on success or `{ error: "..." }` on failure.
