const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookTest', {useNewUrlParser: true});

let bookSchema = new mongoose.Schema({
  id: Number,
  type: String,
  pageNum: Number,
  publisher: String,
  dates: String,
  title: String,
  isbn: String,
  language: String,
  characters: String,
  settings: String,
  litAwards: String,
  editions: String,
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;