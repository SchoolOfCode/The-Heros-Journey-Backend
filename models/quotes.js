import { quotesQuery } from '../db';
//Query to the table
export async function getAllQuotes() {
  const data = await quotesQuery(`SELECT * FROM quotes;`);
  return data.rows;
}
