import passwordsQuery from '../db/index.js';

//Query getting all quotes from the table
export async function getAllPasswords() {
  const data = await passwordsQuery(`SELECT * FROM passwords;`);
  return data.rows;
}
