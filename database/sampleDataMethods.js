const faker = require('faker');

// min inclusive, max exclusive
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
module.exports.getRandomInt = getRandomInt;

/* =================== Book ID ===================== */

// const bookId = () => {
//   return faker.random.number({ 'min': 1, 'max': 10000000 });
// };
// module.exports.bookId = bookId;
const image = () => {
  var img1 = faker.image.image();
  var img2 = faker.image.image();
  var img3 = faker.image.image();
  var img4 = faker.image.image();
  var img5 = faker.image.image();
  var img6 = faker.image.image();
  var img7 = faker.image.image();
  var img8 = faker.image.image();
  var img9 = faker.image.image();
  var img0 = faker.image.image();
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);
  console.log(img5);
  console.log(img6);
  console.log(img7);
  console.log(img8);
  console.log(img9);
  console.log(img0);
  return faker.image.image();
};
image();
module.exports.image = image;


/* =================== Book Type ===================== */

const type = () => {
  const num = getRandomInt(0, 4);
  const typeArray = ['Hardcover', 'Paperback', 'Audio', 'Kindle'];

  return typeArray[num];
};
module.exports.type = type;

/* =================== Page Number ===================== */

const pageNum = () => {
  return getRandomInt(350, 450);
};
module.exports.pageNum = pageNum;

/* =================== Publisher ===================== */

const publisher = () => {
  let publishers = ['Swaniawski Inc',
    'Lueilwitz and Sons',
    'Baumbach Inc',
    'Rutherford Group',
    'Shields - Torphy']

  const index = getRandomInt(0, 4);
  return publishers[index];
};
module.exports.publisher = publisher;

/* =================== Publication Dates ================== */

const dates = () => {
  let months = ['January', 'March', 'April', 'May', 'June', 'July', 'October', 'November', 'December']
  let index = getRandomInt(0, 8);
  return `${months[index]} ${getRandomInt(10, 25)}, ${getRandomInt(1970, 2018)}`
};
module.exports.dates = dates;

/* =================== Title generator ===================== */

const title = () => {
  return faker.random.words();
};
module.exports.title = title;

/* =================== ISBN generator ===================== */

const getIsbn = () => {
  let isbnNum = '1234567';
  const num = getRandomInt(350, 500);
  isbnNum += num.toString();
  return isbnNum;
};
module.exports.getIsbn = getIsbn;

/* =================== Language generator ===================== */

const language = () => {
  const languages = ['English', 'Spanish', 'Italian', 'French'];
  const randNum = getRandomInt(0, 4);
  return languages[randNum];
};
module.exports.language = language;

/* =================== CharactersArr ===================== */

const characterArr = () => {
  const charArr = [];
  let num = getRandomInt(1, 4);

  while (num > 0) {
    const characterName = faker.name.findName();
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

  const awards = ['Man-Booker Prize 2009', 'Pulitzer Prize 2012', 'Costa Book Awards 2013', 'Hugo Award 2014', 'Edgar Awards 2016'];

  while (num > 0) {
    const awardIndex = getRandomInt(0, 5);
    let award = awards[awardIndex]
    awardArray.push(award);
    num -= 1;
  }
  return awardArray.join(', ');
};

module.exports.awardsArr = awardsArr;

/* =================== Cover Urls ===================== */
const coverUrl = () => {

  let imageArr = ['https://s3.amazonaws.com/uifaces/faces/twitter/samuelkraft/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/dhilipsiva/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/gavr1l0/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/kohette/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/sangdth/128.jpg'];

  const num = getRandomInt(1, 10);
  return imageArr[num];

};
module.exports.coverUrl = coverUrl;

/* =================== Settings ===================== */

const settings = () => {
  // return `${faker.address.city()}, ${faker.address.country()}`
  let index = getRandomInt(0, 3);
  const locations = ['London, United Kindom', 'New York, USA', 'Moscow, Russia', 'Paris, France'];
  return locations[index];
};

module.exports.settings = settings;


