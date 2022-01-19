import quotesQuery from '../db/index.js';

//Query getting all quotes from the table
export async function getAllQuotes() {
  const data = await quotesQuery(`SELECT * FROM quotes;`);
  return data.rows;
}
