'use strict';

/**
 * In-memory user store.
 * @type {Array<{id: number, name: string, email: string, role: string}>}
 */
const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@acme.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@acme.com', role: 'user' },
  { id: 3, name: 'Carol White', email: 'carol@acme.com', role: 'user' },
];

let nextId = 4;

/**
 * Returns all users.
 * @returns {Array}
 */
function getAll() {
  return users;
}

/**
 * Returns a user by ID, or null if not found.
 * @param {number} id
 * @returns {object|null}
 */
function getById(id) {
  return users.find((u) => u.id === id) || null;
}

/**
 * Creates a new user.
 * @param {{name: string, email: string, role?: string}} data
 * @returns {object} The created user
 */
function create(data) {
  const user = { id: nextId++, role: 'user', ...data };
  users.push(user);
  return user;
}

/**
 * Deletes a user by ID.
 * @param {number} id
 * @returns {boolean} True if deleted, false if not found
 */
function remove(id) {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, remove };
