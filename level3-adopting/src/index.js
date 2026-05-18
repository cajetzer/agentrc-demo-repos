const express = require('express');
const helmet = require('helmet');
const app = express();

// Security middleware
app.use(helmet());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Users endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice', email: 'alice@acme.com' },
    { id: 2, name: 'Bob', email: 'bob@acme.com' }
  ]);
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  res.json({ id, name: id === 1 ? 'Alice' : 'Bob' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
