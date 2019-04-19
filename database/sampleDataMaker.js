const faker = require('faker');
const fs = require('fs');

const {
  type, pageNum, publisher, dates, title, isbn, language, characterArr, awardsArr, editionsArr, settingsArr,
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
    settings: settingsArr(),
    litAwards: awardsArr(),
    editions: editionsArr(),
  };
  return dataObj;
};

let dataObj = createDataObj();

console.log('dataObj:', dataObj);

let createDataList = () => {
  var dataList = [];
  for (let i = 0; i < 1000000; i++) {
    dataList.push(dataObj);
  }
  return JSON.stringify(dataList);
}

let dataList = createDataList();

let createFile = () => {

    fs.writeFile(`./dataFiles/mockData_10.json`, dataList, () => {
      console.log(`json file created`);
    });
};

createFile();



module.exports.createDataObj = createDataObj;


