const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
//https://www.npmjs.com/package/csv-write-stream

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
// console.log('dataObj = ', dataObj);

let createList = () => {

  writer.pipe(fs.createWriteStream(`./csvFiles/mockData10m.csv`))
  for (let i = 0; i < 10000000; i++) {
    writer.write(dataObj);
  }
  writer.end();
}

createList();


//3:27 3.46G

// ================= create JSON files ===================
// create array to hold data objs
// let createDataList = () => {
//   var dataList = [];
//   for (let i = 0; i < 5; i++) {
//     dataList.push(createDataObj());
//   }
//   return JSON.stringify(dataList);
//   // return dataList;
// }
// let dataList = createDataList();
// console.log('dataList =', dataList);
// write the data in 10 json files
// let createFile = () => {
//   for (let i = 1; i <= 10; i++) {
//     fs.writeFileSync(`./mockDataFiles/mockData${i}.json`, createDataList());
//   }
// };
// createFile();

module.exports.createDataObj = createDataObj;

//node --max-old-space-size=8192