//const { Pool } = require('pg')
import {Pool} from "pg"
// import pg from "pg"


const quotesPool = new Pool({
    //pool allows us to link with a CloudDatabase
  
})

export function quotesQuery(text, params) {
return quotesPool.query(text, params);
}