import pg from 'pg';
// import { db } from '../config.js';

const quotesPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default function quotesQuery(text, params) {
  return quotesPool.query(text, params);
}
