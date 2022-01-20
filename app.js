import express from 'express';
import path from 'path';
import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import quotesRouter from './routes/quotes.js';
import datesRouter from './routes/dates.js';
import passwordsRouter from './routes/passwords.js';


const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', quotesRouter);
app.use('/', datesRouter);
app.use('/', passwordsRouter);

export default app;
