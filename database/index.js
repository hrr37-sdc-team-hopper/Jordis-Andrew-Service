const Pool = require('pg').Pool;
const user = require('./pg.config.js');

const pool = new Pool({
  user: user.user,
  host: user.host,
  database: user.database
});

// =============== Get All Data for Get Request ===============
const getDetailsById = (req, res) => {
  console.time('get details by id time');

  const id = req.params.id;
  const queryStr = 'select * from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    if (err) {
      throw new Error(err);
      // console.log('error from getDetailById:', err)
    } else {
      res.status(200).json(results.rows);
      console.log('results.rows:', results.rows);
    }
  });
  console.timeEnd('get details by id time');
}


// ============== Create New Info for Post Request ===============
const createDetails = (req, res) => {
  console.time('create details time');
  // must be all lower case or it'd be Null
  const { bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl } = req.body;

  const queryStr = 'insert into books (bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

  pool.query(queryStr, [bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json(req.body);
      console.log(req.body);
    }
  });
  console.timeEnd('create details time');
}



// =============== Update Details for Put Request ==============
const updateDetailsById = (req, res) => {
  console.time('update details by id time');
  const id = req.params.id;
  const { bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl } = req.body;

  const queryStr = 'update books set bookid=$1, type=$2, pagenum=$3, publisher=$4, dates=$5, title=$6, isbn=$7, language=$8, characters=$9, settings=$10, litawards=$11, coverurl=$12 where id = $13';

  pool.query(queryStr, [bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl], (err, results) => {
    if (err) {
      throw new Error(err);
    } else {
      res.status(200).json(req.body);
      console.log(req.body);
    }
  });

  console.timeEnd('update details by id time');
}

// =============== Delete Details ==============
const deleteDetailsById = (req, res) => {
  console.time('delete details by id time');
  const id = req.params.id;
  const queryStr = 'delete from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    if (err) {
      throw new Error(err);
    } else {
      res.status(200).send('Details deleted');
    }
  })
  console.timeEnd('delete details by id time');
}


module.exports = {
  getDetailsById,
  createDetails,
  updateDetailsById,
  deleteDetailsById
};

// ============== test =================
// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM users', (error, results) => {
//     if (error) {
//       throw error
//     } else {
//       response.status(200).json(results.rows)
//     }
//   });
// }

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
//     if (error) {
//       throw error
//     } else {
//       response.status(201).json(request.body);
//       console.log('req.body =', request.body);
//     }
//   });
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       } else {
//         response.status(200).json(request.body);
//         console.log('req.body =', request.body);
//       }
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   });
// }

// module.exports = {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// }



//============ testing mongo ==========

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