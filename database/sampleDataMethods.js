const faker = require('faker');

// min inclusive, max exclusive
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
module.exports.getRandomInt = getRandomInt;

/* =================== Book Type ===================== */

const type = () => {
  const num = getRandomInt(0, 4);
  const typeArray = ['Hardcover', 'Paperback', 'Audio', 'Kindle'];

  return typeArray[num];
};
module.exports.type = type;

/* =================== Page Number ===================== */

const pageNum = () => {
  return faker.random.number({'min': 250, 'max': 800});
};
module.exports.pageNum = pageNum;

/* =================== Publisher ===================== */

const publisher = () => {
  return faker.company.companyName();
};
module.exports.publisher = publisher;

/* =================== Publication Dates ================== */

const dates = () => {
  return `${faker.date.month()} ${faker.random.number({ 'min': 1, 'max': 30 })}, ${(Math.floor(Math.random() * (2019 - 1960)) + 1960)}`
};
module.exports.dates = dates;

/* =================== Title generator ===================== */

const title = () => {
  return faker.random.words();
};
module.exports.title = title;

/* =================== ISBN generator ===================== */

const isbn = (limit) => {
  let isbnNum = '';
  // while isbn length is less than 11;
  while (isbnNum.length < (limit + 1)) {
    // add to isbn string;
    const num = faker.random.number();
    isbnNum += num.toString();
  }
  // splice isbn until 10th char
  isbnNum = isbnNum.slice(0, limit);
  return isbnNum;
};
module.exports.isbn = isbn;

/* =================== Language generator ===================== */

const language = () => {
  const languages = ['English', 'Korean', 'Spanish', 'Polish', 'Russian', 'Japanese', 'Italian', 'French', 'Chinese', 'Indian'];

  const randNum = getRandomInt(0, 10);
  return languages[randNum];
};
module.exports.language = language;

/* =================== CharactersArr ===================== */

const characterArr = () => {
  const charArr = [];
  let num = getRandomInt(1, 5);

  while (num > 0) {
    const characterName = faker.fake('{{name.firstName}} {{name.lastName}}');
    charArr.push(characterName);
    num -= 1;
  }

  return charArr.join(', ');
};
module.exports.characterArr = characterArr;

/* =================== Awards Arr ===================== */

const awardsArr = () => {
  const awardArray = [];
  let num = getRandomInt(0, 3);

  const awards = [
    'Specsavers National Book Awards', 'Man Booker Prize', 'Pulitzer Prize', 'Costa Book Awards', 'Hugo Award', 'Guardian First Book Award', 'National Book Award', 'Edgar Awards', 'National Book Critics Circle Award',
  ];

  while (num > 0) {
    const awardIndex = getRandomInt(0, 9);
    let award = `${awards[awardIndex]} ${faker.date.past(10).getFullYear()}`
    awardArray.push(award);
    num -= 1;
  }
  return awardArray.join(', ');
};

module.exports.awardsArr = awardsArr;

/* =================== Cover Urls ===================== */
const coverUrl = () => {
  let image = faker.image.avatar();
  let imageArr = [];
  for (let i = 0; i < 200; i++) {
    imageArr.push(image);
  }

  const num = getRandomInt(1, 200);
  return imageArr[num];
};
module.exports.coverUrl = coverUrl;


/* =================== Editions Array ===================== */

const editionsArr = () => {
  const editionsArray = [];
  let num = getRandomInt(0, 4);

  while (num > 0) {
    let imageUrl = `${coverUrl()}`;
    editionsArray.push(imageUrl);
    num -= 1;
  }
  return editionsArray.join(', ');
};

module.exports.editionsArr = editionsArr;

/* =================== Settings ===================== */

const settings = () => {
  return `${faker.address.city()}, ${faker.address.country()}`
};

module.exports.settings = settings;


