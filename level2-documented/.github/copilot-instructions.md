# ACME API - Copilot Instructions

## Project Overview
This is an Express.js REST API for user management at ACME Corp.

## Tech Stack
- **Runtime**: Node.js 20+
- **Framework**: Express.js 4.x
- **Language**: JavaScript (ES6+)
- **Testing**: Jest

## Code Style
- Use ES6+ JavaScript
- Use async/await for asynchronous operations
- Use meaningful variable names
- Add JSDoc comments for functions

## Architecture
- `src/index.js` - Main Express app and routes
- `src/users.js` - User data layer
- Routes follow REST conventions: GET/POST/PUT/DELETE
- Responses use consistent shape: `{ data: ... }` or `{ error: ... }`

## Testing
- Use Jest for unit tests
- Test files should be named `*.test.js`
- Test both success and error paths
