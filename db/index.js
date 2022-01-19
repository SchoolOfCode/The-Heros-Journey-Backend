//const { Pool } = require('pg')
import {Pool} from "pg"
// import pg from "pg"


const quotesPool = new Pool({
    //pool allows us to link with a CloudDatabase
user: 'database-user',
  host: 'localhost',
  database:"",
  password: 30000,
  port: 5432,
    ssl: { rejectUnauthorized: false},
})

export function quotesQuery(text, params) {
return quotesPool.query(text, params);
}