import pg from 'pg';
console.log(process.env.DATABASE_URL);
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default function quotesQuery(text, params) {
  return pool.query(text, params);
}

export function datesQuery(text, params) {
  return pool.query(text, params);
}