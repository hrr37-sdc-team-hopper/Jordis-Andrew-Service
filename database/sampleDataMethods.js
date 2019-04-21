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
  let num = faker.random.number();
  // if page number is less than 10 or greater than 10,000
  while (num < 10 || num > 2000) {
    num = faker.random.number();
  }
  return num;
};
module.exports.pageNum = pageNum;

/* =================== publisher ===================== */

const publisher = () => {
  return faker.company.companyName();
};
module.exports.publisher = publisher;

/* =================== Original Publication Dates ================== */

const dates = () => {
  let orgPubDate = faker.date.past(100);
  // stringify date
  const options = {
    year: 'numeric', month: 'long', day: 'numeric', localeMatcher: 'best fit',
  };
  orgPubDate = orgPubDate.toLocaleDateString('en-US', options);
  return orgPubDate;
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
  return charArr;
};
module.exports.characterArr = characterArr;

/* =================== Awards Arr ===================== */

const awardsArr = () => {
  const awardArray = [];
  let num = getRandomInt(0, 3);

  const awards = [
    'Specsavers National Book Awards', 'Man Booker Prize', 'Pulitzer Prize', 'Costa Book Awards', 'Neustadt International Prize for Literature', 'Hugo Award', 'Guardian First Book Award', 'National Book Award', 'Edgar Awards', 'National Book Critics Circle Award',
  ];

  while (num > 0) {
    const awardObj = {};
    const awardIndex = getRandomInt(0, 9);
    awardObj.name = awards[awardIndex];
    awardObj.date = faker.date.past(5).getFullYear();
    awardArray.push(awardObj);
    num -= 1;
  }
  return awardArray;
};

module.exports.awardsArr = awardsArr;

/* =================== Cover Urls ===================== */
const coverUrl = () => {
  const urlStringArr = [
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic0.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic1.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic2.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic3.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic4.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic5.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic6.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic7.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic8.jpg',
    'https://s3.us-east-2.amazonaws.com/hrr37-fec/fec-bookcovers/editionPic9.jpg',
  ];
  const num = getRandomInt(0, 10);
  return urlStringArr[num];
};
module.exports.coverUrl = coverUrl;


/* =================== Editions Array ===================== */
const editionsArr = () => {
  const editionsArray = [];
  let num = getRandomInt(0, 2);

  while (num > 0) {
    const editionsObj = {
      isbn10: isbn(10),
      isbn13: isbn(13),
      title: title(),
      type: type(),
      publisher: publisher(),
      officialPubDate: dates(),
      coverUrl: coverUrl(),
      // can't actually access this status without logging in.
      // assume user is NOT logged in.
      // status: readStatus(),
      // rating: rating()
    };

    editionsArray.push(editionsObj);
    num -= 1;
  }
  return editionsArray;
};

module.exports.editionsArr = editionsArr;

/* =================== Settings ===================== */

const settings = () => {
  const location =  {
    city: faker.address.city(),
    country: faker.address.country()
  };

  return location;
};

module.exports.settings = settings;
