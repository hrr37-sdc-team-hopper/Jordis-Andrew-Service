\timing ON

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  bookid INT,
  type VARCHAR(100),
  pagenum INT,
  publisher VARCHAR(100),
  firstpubdates VARCHAR(30),
  title VARCHAR(200),
  isbn13 VARCHAR(20),
  language VARCHAR(20),
  characters VARCHAR(1000),
  settings VARCHAR(50),
  litawards VARCHAR(50),
  coverurl VARCHAR(100)
  );

-- COPY books(bookid, type, pagenum, publisher, firstpubdates, title, isbn13, language, characters, settings, litawards, editions) FROM '/Users/jordisman/Desktop/Jordis-Book-Extra-Info/database/csvFiles/mockData10M.csv' DELIMITERS ',' CSV HEADER;
COPY books(bookid, type, pagenum, publisher, firstpubdates, title, isbn13, language, characters, settings, litawards, coverurl) FROM '/home/ec2-user/Jordis-Book-Extra-Info/database/csvFiles/mockData10M.csv' DELIMITERS ',' CSV HEADER;

\timing OFF
