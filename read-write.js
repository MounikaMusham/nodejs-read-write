const fs = require("fs");
const textIN = fs.readFileSync("courses.txt","utf-8");  //for reading files
console.log(textIN);
const msg = 'hello CGCS';
console.log(msg);

const textOut = `courses of web-development : ${textIN}`;
fs.writeFileSync('./output/output.txt',textOut);   //for writing file
console.log(textOut);
console.log('file has been written successfully');






