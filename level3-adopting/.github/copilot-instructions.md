# ACME API - Copilot Instructions

## Project Overview
Express.js REST API for ACME Corp user management. Built with TypeScript, tested with Jest.

## Tech Stack
- **Runtime**: Node.js 20+
- **Framework**: Express.js 4.x
- **Language**: TypeScript (strict mode)
- **Testing**: Jest with coverage
- **Security**: Helmet middleware

## Code Style
- Use ES6+ JavaScript with TypeScript types
- Use async/await for asynchronous operations  
- Use meaningful, descriptive variable names
- Add JSDoc comments for all exported functions
- Prefer early returns over nested conditionals
- Use const by default, let when reassignment needed

## Architecture
```
src/
├── index.ts      # Main Express app, route definitions
├── users.ts      # User data layer
├── routes/       # Route handlers (future)
├── middleware/   # Custom middleware (future)
└── utils/        # Utility functions (future)
```

## API Conventions
- Routes follow REST conventions: GET/POST/PUT/DELETE
- Return JSON with consistent structure: `{ data: ... }` or `{ error: ... }`
- Use appropriate HTTP status codes (200, 201, 400, 404, 500)
- Validate all input parameters

## Testing
- Test files: `*.test.js` or `*.test.ts`
- Aim for >80% coverage
- Test both success and error paths
- Use descriptive test names: `should return 400 when user ID is invalid`

## Security
- Never log sensitive data (passwords, tokens)
- Validate and sanitize all user input
- Use parameterized queries for database operations
