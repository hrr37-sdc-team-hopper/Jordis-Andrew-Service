const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

const {
  type, pageNum, publisher, dates, title, isbn, language, characterArr, awardsArr, coverUrl, settings,
} = require('./sampleDataMethods.js');

const createDataObj = () => {
  const dataObj = {
    type: type(),
    pageNum: pageNum(),
    publisher: publisher(),
    dates: dates(),
    title: title(),
    isbn: isbn(),
    language: language(),
    characters: characterArr(),
    settings: settings(),
    litAwards: awardsArr(),
    coverUrl: coverUrl()
  };
  return dataObj;
};

// let dataObj = createDataObj();
// console.log('dataObj = ', dataObj);

// ================= create CSV files ===================

let createFile = () => {
  console.time('Total time');
  for (let count=1; count<=10; count++) {
    writer.pipe(fs.createWriteStream(`./csvFiles/mockData${count}.csv`))
    for (let i = 0; i < 100000; i++) {
      const dataObj = {
        bookId: i,
        type: type(),
        pageNum: pageNum(),
        publisher: publisher(),
        dates: dates(),
        title: title(),
        isbn: isbn(),
        language: language(),
        characters: characterArr(),
        settings: settings(),
        litAwards: awardsArr(),
        coverUrl: coverUrl()
      };
      writer.write(dataObj);
    }
  }
  writer.end();
  console.timeEnd('Total time');
}

createFile();

//Total time: 28849.232ms

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


/*
let count = 1;
let createOne = () => {
  return new Promise((res, rej) => {
    console.time('Total time');
    writer.pipe(fs.createWriteStream(`./newCSV/csvData${count}.csv`))
    for (let i = 0; i < 5; i++) {
      const dataObj = {
        bookId: i,
        type: type(),
        pageNum: pageNum(),
        publisher: publisher(),
        dates: dates(),
        title: title(),
        isbn: isbn(),
        language: language(),
        characters: characterArr(),
        settings: settings(),
        litAwards: awardsArr(),
        coverUrl: coverUrl()
      };
      writer.write(dataObj);
    }

    writer.end();
    count++;
    console.log(`created ${count} file`);
    console.timeEnd('Total time');
  });
}

let createCsv = () => {
  createOne()
  .then(createOne)
  .then(createOne)
  .then(createOne)
  .then(createOne)
  .then(createOne)
  .then(createOne)
  .then(createOne)
  .then(createOne)
  .then(createOne)
}

createCsv();
*/