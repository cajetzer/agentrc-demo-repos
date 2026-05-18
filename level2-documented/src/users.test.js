'use strict';

const users = require('./users');

describe('users module', () => {
  test('getAll returns array of users', () => {
    const result = users.getAll();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('getById returns user when found', () => {
    const user = users.getById(1);
    expect(user).not.toBeNull();
    expect(user.id).toBe(1);
  });

  test('getById returns null for missing user', () => {
    const user = users.getById(9999);
    expect(user).toBeNull();
  });

  test('create adds a new user', () => {
    const before = users.getAll().length;
    const user = users.create({ name: 'Test User', email: 'test@acme.com' });
    expect(user.id).toBeDefined();
    expect(user.name).toBe('Test User');
    expect(users.getAll().length).toBe(before + 1);
  });

  test('remove deletes user and returns true', () => {
    const user = users.create({ name: 'Delete Me', email: 'del@acme.com' });
    expect(users.remove(user.id)).toBe(true);
  });

  test('remove returns false for missing user', () => {
    expect(users.remove(9999)).toBe(false);
  });
});
