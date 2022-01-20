import express from 'express';
import path from 'path';
import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import quotesrouter from './routes/quotes.js';
import datesrouter from './routes/dates.js';


const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', quotesrouter);
app.use('/', datesrouter);

export default app;
