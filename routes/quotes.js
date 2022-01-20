import { getAllQuotes } from '../models/quotes.js';
import quotesQuery from '../db/index.js';

import express from 'express';

const router = express.Router();

//Getting all quotes
router.get('/', async (req, res) => {
  const quotes = await getAllQuotes();
  res.json({ success: true, message: `all quotes`, payload: quotes });
});

// Allows new information
router.post('/', async (req, res) => {
  const { name, quote } = req.body;
  console.log(name, quote);
  const newQuote = await quotesQuery(
    `INSERT INTO quotes (name, quote) VALUES ($1, $2) RETURNING name`,
    [name, quote]
  );
  res.json({ success: true, message: `new quote`, payload: newQuote });
});

export default router;
