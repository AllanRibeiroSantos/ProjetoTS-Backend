import { books } from "../models/Book";
import { Request, Response } from "express";

export default class BookController {
  static async getBooks(req: Request, res: Response) {
    const livros = await books.find();
    return res.status(200).json(livros)
  }

  static async postBook(req: Request, res: Response) {
    const createdBook = await books.create(req.body);
    return res.status(201).json(createdBook);
  }

  static async deleteBook(req: Request, res: Response) {
    const id = req.params.id;
    const deleteBook = await books.findByIdAndDelete(id);
    return res.status(200).json({message: "Livro deletado com sucesso"})
  }
}
