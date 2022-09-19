const xlsx = require('xlsx');
let wb = xlsx.readFile("test.xlsx");
let ws = wb.Sheets["Sheet1"];

let data = xlsx.utils.sheet_to_json(ws);
let newData = data.map(function(record) {
  record.CPI = ((record.Sem1 + record.Sem2)/2);
  delete record.Sem1;
  delete record.Sem2;
  return record
});

// console.log(newData);

let newWB = xlsx.utils.book_new();
let newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB, newWS, "New Data");

xlsx.writeFile(newWB, "NewDataFile.xlsx");