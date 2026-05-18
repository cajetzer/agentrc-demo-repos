# ACME API

Internal REST API for ACME Corp user management.

## Setup

```bash
npm install
```

## Development

```bash
npm start        # Start server
npm test         # Run tests with coverage
npm run lint     # Lint code
npm run typecheck # Type check
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Health check |
| GET | /api/users | List all users |
| GET | /api/users/:id | Get user by ID |

## Architecture

- Express.js REST API
- Helmet for security headers
- Jest for testing
- TypeScript for type safety

## Contributing

1. Create a feature branch
2. Make changes with tests
3. Run `npm test` and `npm run lint`
4. Open a PR
