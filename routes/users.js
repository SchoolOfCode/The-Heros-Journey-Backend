import { getAllQuotes } from "../models/quotes";

import express from "express";
const router = express.Router();



//Requesting a query
router.get("/", function (req, res) {
  const quotes = await getAllQuotes()
  res.json({ success: true, message: `all quotes`, payload: quotes });
});

export default router;


