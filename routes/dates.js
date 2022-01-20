import { getAllDates } from '../models/dates.js';
import datesQuery from '../db/index.js';

import express from 'express';

const datesrouter = express.Router();


datesrouter.get('/dates', async (req, res) => {
    const dates = await getAllDates();
    res.json({ success: true, message: `all dates`, payload: dates });
  });


  datesrouter.post('/dates', async (req, res) => {
    const { name, date } = req.body;
    console.log(name, date);
    const newDates= await datesQuery(
      `INSERT INTO dates (name, date) VALUES ($1, $2) RETURNING date`,
      [name, date]
    );
    res.json({ success: true, message: `new date`, payload: newDates });
  });
  
  export default datesrouter;
  
