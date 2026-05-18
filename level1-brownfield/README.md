# ACME API

Internal REST API for ACME Corp user management.

## Setup

```bash
npm install
```

## Development

```bash
npm start        # Start server (port 3000)
npm test         # Run tests
npm run lint     # Lint code
npm run format   # Format code
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Health check |
| GET | /api/users | List all users |
| GET | /api/users/:id | Get user by ID |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
