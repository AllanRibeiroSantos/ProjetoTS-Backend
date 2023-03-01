import express from 'express';
import cors from 'cors';
import { booksRouter } from './routes/booksRoutes.js';
export const app = express();

app.use(express.json());
app.use(cors());
app.use(booksRouter);
