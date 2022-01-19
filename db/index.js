//const { Pool } = require('pg')
import pg from 'pg';
// import pg from "pg"
import { db } from '../config.js';

const quotesPool = new pg.Pool({
  connectionString: db.connectionstring,
  ssl: { rejectUnauthorized: false },
});

export default function quotesQuery(text, params) {
  return quotesPool.query(text, params);
}
