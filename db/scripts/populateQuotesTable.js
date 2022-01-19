import quotesQuery from '../index.js';
import quotes from '../../quotes-data.js';

async function populateQuotesTable() {
  for (let i = 0; i < quotes.length; i++) {
    const name = quotes[i].name;
    const quote = quotes[i].quote;

    const res = await quotesQuery(
      `INSERT INTO quotes (name, quote)
        VALUES ($1, $2) RETURNING quote`,
      [name, quote]
    );
  }
}

populateQuotesTable();
