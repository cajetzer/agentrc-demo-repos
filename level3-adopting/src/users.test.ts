import { getAll, getById, create, remove } from './users';

describe('users module', () => {
  test('getAll returns array of users', () => {
    const result = getAll();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('getById returns user when found', () => {
    const user = getById(1);
    expect(user).not.toBeNull();
    expect(user!.id).toBe(1);
  });

  test('getById returns null for missing user', () => {
    const user = getById(9999);
    expect(user).toBeNull();
  });

  test('create adds a new user', () => {
    const before = getAll().length;
    const user = create({ name: 'Test User', email: 'test@acme.com' });
    expect(user.id).toBeDefined();
    expect(user.name).toBe('Test User');
    expect(getAll().length).toBe(before + 1);
  });

  test('remove deletes user and returns true', () => {
    const user = create({ name: 'Delete Me', email: 'del@acme.com' });
    expect(remove(user.id)).toBe(true);
  });

  test('remove returns false for missing user', () => {
    expect(remove(9999)).toBe(false);
  });
});
