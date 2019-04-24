CREATE DATABASE IF NOT EXISTS booksInfo;

USE booksInfo;

CREATE TABLE IF NOT EXISTS books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  bookId INT,
  type VARCHAR(20),
  pageNum INT,
  publisher VARCHAR(100),
  dates VARCHAR(30),
  title VARCHAR(100),
  isbn VARCHAR(20),
  language VARCHAR(20),
  characters VARCHAR(50),
  settings VARCHAR(50),
  litAwards VARCHAR(50),
  coverUrl VARCHAR(100),
  );

COPY books FROM `/Users/jordisman/Desktop/Jordis-Book-Extra-Info/database/csvFiles/mockData10M.csv` DELIMITERS ',' CSV;


