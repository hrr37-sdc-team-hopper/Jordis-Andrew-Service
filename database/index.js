const Pool = require('pg').Pool;
const user = require('./pg.config.js');

const pool = new Pool({
  user: user.user,
  host: user.host,
  port: user.port,
  database: user.database,
  password: user.password
});

// =============== Get All Data for Get Request ===============
const getDetailsById = (req, res) => {
  console.time('get details by id time');

  const id = req.params.id;
  console.log('req.params.id:', req.params.id);

  const queryStr = 'select * from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    console.timeEnd('get details by id time'); //put after pool.query, that's where the query done, not after entire cb
    if (err) {
      console.log('error from getDetailById:', err)
    } else {
      res.status(200).json(results.rows[0]);
      console.log('results.rows:', results.rows);
    }
  });
}

// =============== Get Characters ===============
const getCharactersById = (req, res) => {
  console.time('getCharactersById time');
  const id = req.params.id;
  const queryStr = 'select characters from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    console.timeEnd('getCharactersById time');
    if (err) {
      console.log('error from getCharactersById:', err)
    } else {
      let characters = [{name: results.rows[0].characters}];
      // res.status(200).json(results.rows);
      res.status(200).json(characters);
      console.log('characters results.rows:', characters);
    }
  });
}

// =============== Get Awards ===============
const getAwardsById = (req, res) => {
  console.time('getAwardsById time');
  const id = req.params.id;
  const queryStr = 'select litawards from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    console.timeEnd('getAwardsById time');
    if (err) {
      console.log('error from getAwardsById:', err)
    } else {
      let award = [{
        name: results.rows[0].litawards.slice(0, -4),
        year: results.rows[0].litawards.slice(-4)
      }];
      res.status(200).json(award);
      console.log('award:', award);
    }
  });
}

// =============== Get Editions ===============
const getEditionsById = (req, res) => {
  console.time('getEditionsById time');
  const id = req.params.id;
  console.log('req.params.id:', req.params.id);
  const queryStr = 'select * from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    console.timeEnd('getEditionsById time');
    if (err) {
      console.log('error from getEditionsById:', err)
    } else {
      res.status(200).json(results.rows);
      console.log('results.rows:', results.rows);
    }
  });
}

// =============== Get Settings ===============
const getSettingsById = (req, res) => {
  console.time('getSettingsById time');
  const id = req.params.id;
  console.log('req.params.id:', req.params.id);
  const queryStr = 'select settings from books where id = $1';
  pool.query(queryStr, [id], (err, results) => {
    console.timeEnd('getSettingsById time');
    if (err) {
      console.log('error from getSettingsById:', err)
    } else {
      res.status(200).json(results.rows);
      console.log('results.rows:', results.rows);
    }
  });
}

// ============== Create New Info for Post Request ===============
const createDetails = (req, res) => {
  console.time('create details time');
  // must be all lower case or it'd be Null
  const { bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl } = req.body;

  const queryStr = 'insert into books (bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';

  pool.query(queryStr, [bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl], (err, results) => {
    console.timeEnd('create details time');
    if (err) {
      console.log('createDetails:', err);
    } else {
      res.status(201).json(req.body);
      console.log(req.body);
    }
  });

}



// =============== Update Details for Put Request ==============
const updateDetailsById = (req, res) => {
  console.time('update details by id time');
  const id = req.params.id;
  const { bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl } = req.body;

  const queryStr = 'update books set bookid=$1, type=$2, pagenum=$3, publisher=$4, dates=$5, title=$6, isbn=$7, language=$8, characters=$9, settings=$10, litawards=$11, coverurl=$12 where id = $13';

  pool.query(queryStr, [bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl], (err, results) => {
    if (err) {
      // throw new Error(err);
      console.log('error in updateDetailsById: ', err);
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
  deleteDetailsById,
  getCharactersById,
  getAwardsById,
  getEditionsById,
  getSettingsById
};
