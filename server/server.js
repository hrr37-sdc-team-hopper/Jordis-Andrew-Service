const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../database');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// const staticPath = `${__dirname}/../public`;
// app.use('/books/:id', express.static(staticPath));

// app.get('/books/:id', db.getDetailsById);
// app.post('/books', db.createDetails);
// app.put('/books/:id', db.updateDetailsById);
// app.delete('/books/:id', db.deleteDetailsById);

// ============ test =============
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


/*

// get initinal details
app.get('/books/:id/details', (req, res) => {
  const { id } = req.params;

  db.getDetails(id)
    .then((results) => {
      const details = results[0][0];

      if (!details) {
        res.status(404).send('no data @ specified id');
      } else {
        res.send(details);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// get data from either characters, awards, or editions table depending on table variable.
app.get('/books/:id/details/:table', (req, res) => {
  const { id } = req.params;
  const { table } = req.params;

  if (table === 'characters' || table === 'awards' || table === 'editions' || table === 'settings') {
    db.getTableData(table, id)
      .then((results) => {
        const data = results[0];

        if (data.length === 0) {
          res.status(404).send('no data @ specified id');
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(400).send('endpoint does not exist');
  }
});

// handle post request when status button of want to read changed
app.post('/books/:id/details/editions/status', (req, res) => {
  const { id } = req.params;

  console.log('should redirect to login auth page! Just redirect to main for now');

  res.redirect(`/books/${id}`);
});

// handle post request when rating of book edition changed
app.post('/books/:id/details/editions/rating', (req, res) => {
  const { id } = req.params;

  console.log('should redirect to login auth page! Just redirect to main for now');

  res.redirect(`/books/${id}`);
});

// added put request to edit editions
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  res.send(`update data according to book id ${id}`);
});

// added delete request to delete book record according to id
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  res.send(`remove record according to book id ${id}`);
});

*/

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
