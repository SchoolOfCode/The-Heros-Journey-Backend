import passwordsQuery from '../index.js';

const sqlString =
//Should I change name for level how does this link to the front end?
  'CREATE TABLE IF NOT EXISTS passwords (id SERIAL PRIMARY KEY, stage TEXT, password TEXT)';

async function createPasswordsTable() {
  const res = await passwordsQuery(sqlString);
  console.log('Created passwords table', res);
}

createPasswordsTable();