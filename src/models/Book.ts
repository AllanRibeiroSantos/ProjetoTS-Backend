import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    content: {type: String, required: true},
    username: {type: String, required: true}
  }
);

export const books = mongoose.model('books', bookSchema)
