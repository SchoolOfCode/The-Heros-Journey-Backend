import { getAllPasswords } from '../models/passwords.js';
import express from 'express';
const passwordsRouter = express.Router();

//Getting all quotes
passwordsRouter.get('/passwords', async (req, res) => {
  const passwords = await getAllPasswords();
  res.json({ success: true, message: `all passwords`, payload: passwords });
});


export default passwordsRouter;