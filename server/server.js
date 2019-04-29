require('newrelic');
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

app.get('/books/:id', db.getDetailsById);
app.get('/books/:id/details', db.getDetailsById);
app.get('/books/:id/details/editions', db.getDetailsById);

app.post('/books', db.createDetails);
app.put('/books/:id', db.updateDetailsById);
app.delete('/books/:id', db.deleteDetailsById);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
