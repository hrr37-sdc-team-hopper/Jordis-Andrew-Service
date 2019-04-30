\timing ON

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  bookid INT,
  type VARCHAR(100),
  pagenum INT,
  publisher VARCHAR(100),
  dates VARCHAR(30),
  title VARCHAR(200),
  isbn VARCHAR(20),
  language VARCHAR(20),
  characters VARCHAR(1000),
  settings VARCHAR(50),
  litawards VARCHAR(50),
  coverUrl VARCHAR(100)
  );

COPY books(bookid, type, pagenum, publisher, dates, title, isbn, language, characters, settings, litawards, coverurl) FROM '/Users/jordisman/Desktop/Jordis-Book-Extra-Info/database/csvFiles/mockData10M.csv' DELIMITERS ',' CSV HEADER;

\timing OFF
