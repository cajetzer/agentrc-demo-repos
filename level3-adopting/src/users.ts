interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface CreateUserData {
  name: string;
  email: string;
  role?: 'admin' | 'user';
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@acme.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@acme.com', role: 'user' },
  { id: 3, name: 'Carol White', email: 'carol@acme.com', role: 'user' },
];

let nextId = 4;

/** Returns all users. */
export function getAll(): User[] {
  return users;
}

/** Returns a user by ID, or null if not found. */
export function getById(id: number): User | null {
  return users.find((u) => u.id === id) ?? null;
}

/** Creates a new user and returns it. */
export function create(data: CreateUserData): User {
  const user: User = { id: nextId++, role: 'user', ...data };
  users.push(user);
  return user;
}

/** Deletes a user by ID. Returns true if deleted, false if not found. */
export function remove(id: number): boolean {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}
