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
  imageUrl: String
});

let Book = mongoose.model('Book', bookSchema);

// let book = new Book({
//   id: 2,
//   type: 'dfd',
//   pageNum: 434,
//   publisher: 'dfd',
//   dates: 'dfd',
//   title: 'dd',
//   isbn: 'Ssd',
//   language: 'sd',
//   characters: 'sg',
//   settings: 'd',
//   litAwards: 'dfe',
//   imageUrl: 'sw'
// })
// book.save();
// module.exports = Book;