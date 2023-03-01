import { books } from "../models/Book.js";

export default class BookController {
  static async getBooks(req, res) {
    const livros = await books.find();
    return res.status(200).json(livros)
  }

  static async postBook(req, res) {
    const createdBook = await books.create(req.body);
    return res.status(201).json(createdBook);
  }

  static async deleteBook(req, res) {
    const id = req.params.id;
    const deleteBook = await books.findByIdAndDelete(id);
    return res.status(200).json({message: "Livro deletado com sucesso"})
  }
}
