# ACME API - Agent Instructions

## Build Commands
```bash
npm install      # Install dependencies
npm run build    # Compile TypeScript
npm start        # Start server (port 3000)
```

## Test Commands
```bash
npm test                    # Run all tests with coverage
npm test -- --watch         # Watch mode
npm test -- -t "user"       # Run tests matching "user"
```

## Lint Commands
```bash
npm run lint               # Run ESLint
npm run lint -- --fix      # Auto-fix issues
npm run typecheck          # TypeScript check
```

## PR Conventions
- Title format: `feat|fix|docs|refactor: short description`
- Link related issues with `Closes #123`
- Ensure all CI checks pass before requesting review
- Include test coverage for new functionality

## Common Patterns

### Adding a new endpoint
1. Add route handler in `src/index.js`
2. Add input validation
3. Add tests in `src/index.test.js`
4. Update README.md API table

### Error handling
```javascript
if (!isValid(input)) {
  return res.status(400).json({ error: 'Description of error' });
}
```
