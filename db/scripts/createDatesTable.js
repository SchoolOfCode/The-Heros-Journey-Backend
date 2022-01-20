import datesQuery from '../index.js';

const sqlString =
  'CREATE TABLE IF NOT EXISTS dates (id SERIAL PRIMARY KEY, name TEXT, date TEXT)';

async function createDatesTable() {
  const res = await datesQuery(sqlString);
  console.log('Created dates table', res);
}

createDatesTable();