const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
  id: Number,
  title: String,
  isbn: Number,
  language: String,
  characters: String,
  awards: String
})

let Book = mongoose.model('Book', bookSchema);

const getDetails = (id, callback) => {
  Book.find({'id': id}, (err, data) => {
    if (err) {
      console.log('failed to get data', err);
    } else {
      callback(data);
    }
  })
  .limit(1);
};

// const getTableData = (table, id) => {

// };


// module.exports.getTableData = getTableData;
module.exports.getDetails = getDetails;
