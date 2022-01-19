/* Create table
import the query(that it alow us to interacted with our db)
write query that creates a table
*/

import quotesQuery from '../index.js';

const sqlString =
  'CREATE TABLE IF NOT EXISTS quotes (id SERIAL PRIMARY KEY, name TEXT, quote TEXT)';

async function createQuotesTable() {
  const res = await quotesQuery(sqlString);
  console.log('Created quotes table', res);
}

createQuotesTable();
