\timing ON

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  bookId INT,
  type VARCHAR(100),
  pageNum INT,
  publisher VARCHAR(100),
  dates VARCHAR(30),
  title VARCHAR(200),
  isbn VARCHAR(20),
  language VARCHAR(20),
  characters VARCHAR(1000),
  settings VARCHAR(50),
  litAwards VARCHAR(50),
  coverUrl VARCHAR(100)
  );

COPY books(bookId, type, pageNum, publisher, dates, title, isbn, language, characters, settings, litAwards, coverUrl) FROM '/Users/jordisman/Desktop/Jordis-Book-Extra-Info/database/csvFiles/mockData10M.csv' DELIMITERS ',' CSV HEADER;

\timing OFF
