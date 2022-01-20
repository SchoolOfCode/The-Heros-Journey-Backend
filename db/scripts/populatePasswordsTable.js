import passwordsQuery from '../index.js';
import passwords from '../../passwords-data.js';
async function populatePasswordsTable() {
  for (let i = 0; i < passwords.length; i++) {
    const stage = passwords[i].stage;
    const  password= passwords[i].password;

    const res = await passwordsQuery(
      `INSERT INTO passwords (stage, password)
        VALUES ($1, $2) RETURNING password`,
      [stage, password]
    );
  }
}

populatePasswordsTable();