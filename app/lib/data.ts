import type { User } from './definitions';
import { sql } from '@vercel/postgres';

// TODO: Include ORM lib
export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    throw new Error('Failed to fetch user.');
  }
}
