'use strict';

const express = require('express');
const app = express();

app.use(express.json());

const users = require('./users');

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// List all users
app.get('/api/users', (req, res) => {
  res.json({ data: users.getAll() });
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.getById(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ data: user });
});

// Create a user
app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const user = users.create({ name, email, role });
  res.status(201).json({ data: user });
});

// Delete a user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const deleted = users.remove(id);
  if (!deleted) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
});

module.exports = app;

