import express, { Request, Response } from 'express';
import helmet from 'helmet';
import pino from 'pino';
import * as users from './users';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();

app.use(helmet());
app.use(express.json());

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// List all users
app.get('/api/users', (_req: Request, res: Response) => {
  res.json({ data: users.getAll() });
});

// Get user by ID
app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.getById(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  return res.json({ data: user });
});

// Create a user
app.post('/api/users', (req: Request, res: Response) => {
  const { name, email, role } = req.body as { name?: string; email?: string; role?: string };
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const user = users.create({ name, email, role: role as 'admin' | 'user' | undefined });
  logger.info({ userId: user.id }, 'user created');
  return res.status(201).json({ data: user });
});

// Delete a user
app.delete('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const deleted = users.remove(id);
  if (!deleted) {
    return res.status(404).json({ error: 'User not found' });
  }
  logger.info({ userId: id }, 'user deleted');
  return res.status(204).send();
});

const PORT = parseInt(process.env.PORT ?? '3000', 10);
app.listen(PORT, () => {
  logger.info({ port: PORT }, 'server started');
});

export default app;
