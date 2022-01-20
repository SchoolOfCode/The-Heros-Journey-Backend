import datesQuery from '../db/index.js';

//Query getting all dates from the table
export async function getAllDates() {
  const data = await datesQuery(`SELECT * FROM dates;`);
  return data.rows;
}
