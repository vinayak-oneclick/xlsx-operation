const xlsx = require('xlsx');
var fs = require('fs');
require('../test/test.xlsx')
    const file = xlsx.readFile('../test/test.xlsx');
    const sheetNames = file.SheetNames;
    const totalSheets = sheetNames.length;
    let parsedData = [];
    for (let i = 0; i < totalSheets; i++) {
      const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]]);
      tempData.shift();
      parsedData.push(...tempData);

    }

    let obj= {
      title1: "manager",
      title: "president"
    };
    for(let i=0;i<parsedData.length;i++){
    parsedData[i] = {...parsedData[i], ...obj};
    }
    console.log('parsedData :>> ', parsedData);

    const fileName = 'NewDataFile.xlsx';
    const ws = xlsx.utils.json_to_sheet(parsedData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'New data');

    xlsx.writeFile(wb, fileName);