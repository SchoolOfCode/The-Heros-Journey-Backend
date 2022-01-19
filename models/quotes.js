import { quotesQuery } from '../db';

//Query getting all quotes from the table
export async function getAllQuotes() {
  const data = await quotesQuery(`SELECT * FROM quotes;`);
  return data.rows;
}
