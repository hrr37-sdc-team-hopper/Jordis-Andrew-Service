
const fs = require('fs');

const {
  type, pageNum, publisher, dates, title, isbn, language, characterArr, awardsArr, editionsArr, settings,
} = require('./sampleDataMethods.js');

const createDataObj = () => {
  const dataObj = {
    type: type(),
    pageNum: pageNum(),
    publisher: publisher(),
    dates: dates(),
    title: title(),
    isbn10: isbn(10),
    isbn13: isbn(13),
    language: language(),
    characters: characterArr(),
    settings: settings(),
    litAwards: awardsArr(),
    editions: editionsArr(),
  };
  return dataObj;
};

let dataObj = createDataObj();

console.log('dataObj = ', dataObj);

// create array to hold data objs
let createDataList = () => {
  var dataList = [];
  for (let i = 0; i < 1000000; i++) {
    dataList.push(dataObj);
  }
  return JSON.stringify(dataList);
}

// let dataList = createDataList();

// write the data in 10 json files
let createFile = () => {
  for (let i = 1; i <= 10; i++) {
    fs.writeFileSync(`./mockDataFiles/mockData${i}.json`, dataList);
  }
};

// createFile();

module.exports.createDataObj = createDataObj;



// node --max-old-space-size=8192 sampleDataMaker.js
// 11 secs 3.48G
/*
dataObj =  { type: 'Hardcover',
  pageNum: 525,
  publisher: "O'Hara - Hilpert",
  dates: 'September 7, 1963',
  title: 'Borders Liaison',
  isbn10: '9182423004',
  isbn13: '4877542701446',
  language: 'Polish',
  characters: [ 'Verlie Bergnaum', 'Norma Kris', 'Florence Rath' ],
  settings: 'Amelietown, Western Sahara',
  litAwards:
   [ 'Guardian First Book Award, 2011', 'Costa Book Awards, 2017' ],
  editions:
   [ 'https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg' ] }
*/