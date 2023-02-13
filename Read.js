const fs = require("fs");

fs.readFile("text.txt", (err, data) => {
  console.log("Text file content: ");
  console.log(data.toString());
});

fs.readFile("csv.csv", (err, data) => {
  console.log("CSV file content: ");
  console.log(data.toString());
});

fs.readFile("json.json", (err, data) => {
  console.log("JSON file content: ");
  console.log(data.toString());
});