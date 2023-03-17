import express from 'express';
import cors from 'cors';
import { booksRouter } from "./routes/booksRoutes";

export const app: express.Application = express();

app.use(express.json());
app.use(cors());
app.use(booksRouter);
