const path = require('path');

//To get base file name
console.log("Base file name is ---------"+path.basename(__filename));

//To get directory name
console.log("Directory name is ---------"+path.dirname(__filename));

//To get file extension name
console.log("Extension name is ---------"+path.extname(__filename));

//To create path object
console.log("Path object is ---------\n");
console.log(path.parse(__filename));