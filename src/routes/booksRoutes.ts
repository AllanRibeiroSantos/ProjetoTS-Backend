import { Router } from "express";
import BookController from "../controller/booksController";

export const booksRouter = Router();

booksRouter.get('/books', BookController.getBooks);
booksRouter.post('/books', BookController.postBook);
booksRouter.delete('/books/:id', BookController.deleteBook);
