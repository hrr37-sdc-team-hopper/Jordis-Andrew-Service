const Pool = require('pg').Pool;
const user = require('./pg.config.js');

const pool = new Pool({
  user: user.user,
  host: user.host,
  database: user.database
});


const getDetailsById = (req, res) => {
  console.time('get details by id time');
  const id = req.params.id;
  const queryStr = 'select * from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    if (err) {
      throw new Error(err);
    } else {
      res.status(200).json(results.rows);
    }
  });
  console.timeEnd('get details by id time');
}

const createDetails = (req, res) => {
  console.time('create details time');

  const { bookId, type, pageNum, publisher, dates, title, isbn, language, characters, settings, litAwards, coverUrl } = req.body;

  const queryStr = 'insert into books (bookId, type, pageNum, publisher, dates, title, isbn, language, characters, settings, litAwards, coverUrl) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

  pool.query(queryStr, [bookId, type, pageNum, publisher, dates, title, isbn, language, characters, settings, litAwards, coverUrl], (err, results) => {
    if (err) {
      throw new Error(err);
    } else {
      // res.status(201).josn(results);
      console.log(results.rows);
    }
  });
  console.timeEnd('create details time');
}




// module.exports = {
//   getDetailsById,
//   createDetails
//   // updateDetailsById,
//   // deleteDetailsById
// };

// ============== test =================
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    } else {
      response.status(200).json(results.rows)
    }
  });
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    } else {
      response.status(201).send(results);
    }

  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      // response.status(200).send(`User modified with ID: ${id}`)
      response.status(200).send(results)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}





// const mongoose = require('mongoose');
// const bookSchema = mongoose.Schema({
//   id: Number,
//   title: String,
//   isbn: Number,
//   language: String,
//   characters: String,
//   awards: String
// })

// let Book = mongoose.model('Book', bookSchema);

// const getDetails = (id, callback) => {
//   Book.find({'id': id}, (err, data) => {
//     if (err) {
//       console.log('failed to get data', err);
//     } else {
//       callback(data);
//     }
//   })
//   .limit(1);
// };